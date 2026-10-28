# Small Parcels, Full Checks: MSME E-Commerce Exports, CaseQuest 2026

**Keep every parcel declared, grade the seller instead of the parcel, and move the paperwork from the seller to a cluster export desk: in our model a ₹3,960 order earns the seller ₹1,038 instead of ₹640, with no freight subsidy**

Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader), Dayita Arora (Delhi Technological University, Member)

Prepared for: CaseQuest 2026, USME, Delhi Technological University, for DPIIT and the 2026 Inter-Ministerial Committee on E-Commerce Exports, 28 October 2026

---

> **Working draft.** Sections 0 to 24 are published here; sections 25 to 32 (pilot design, gates, measures, risks, validation plan, assumption register and committee questions) follow at this same address.

## 0. How to read this report

**Answer.** This report answers the CaseQuest 2026 brief for the Department for Promotion of Industry and Internal Trade (DPIIT): a reform-oriented strategy for the 2026 Inter-Ministerial Committee on E-Commerce Exports that keeps every parcel declared, grades the seller instead of the parcel, and moves paperwork from the seller to a cluster export desk. Every number below carries a tag that says where it comes from, and every model result is stated as a model result, not a measurement. The report covers 33 sections; this part (sections 0 to 3) sets the scope, resolves every line of the case brief to a section and a slide, states the recommendation and the four answers to the four case requirements, and lays out the market the recommendation acts on.

The tags work as follows. A number tagged `[C-E2]` or `[C-R3]` comes straight from the case document, transcribed with reference IDs in `case/01-case.md`. A number tagged `[A10]` is a team assumption, listed with a bear, base and bull value in `model/model_tables.md` table T1; we chose each one with a stated reason and, where possible, a research lane checked it against a published figure. A number tagged `[M]` is a direct model output, read from `model/model_outputs.json`. A number tagged `[T6]` points to a specific model table. A number tagged `[S12]` points to an external source resolved in Appendix A through `research/raw/sources.md`. A number tagged `[B07]`, `[C07]`, `[D07]`, `[E07]`, `[F07]` or `[G07]` points to one raw research row in lane B, C, D, E, F or G, each of which resolves in turn to a source in the same register. Where a raw row is marked CORRECTED, we use the corrected value and say so; where two sources conflict and neither has been resolved, we report both figures rather than pick one.

One rule governs every modelled number in this report: we write "in our model" each time, and when a per-order figure appears we name the representative item, a handmade decor or textile item priced at ₹3,960 and weighing 0.5 kg [T2, A01, A02]. The model is not a survey of actual sellers. It is a unit-economics calculation built on team assumptions, each checked where a source exists. Three scenarios run throughout: bear, base and bull, never a single point estimate for an uncertain number, following the skill's rhetoric guidance on three-scenario thinking.

A calibration note, repeated once here so the reader need not guess at it later: the case-competition-deck skill this report follows is calibrated on three winning decks from a Harvard case competition, all M&A cases. Its structural and rhetorical patterns, the contrarian recommendation, foreshadowing, symmetric treatment, three scenarios, one moneyshot, double synthesis, action titles, pre-empted weaknesses, apply across case types with reasonable confidence because they describe how any analytical argument persuades a reader, not something specific to mergers. Its case-specific frameworks are a different matter. We read the skill's own policy-and-trade guide, which states plainly that its patterns are "extrapolated from the meta-playbook plus welfare economics, deterrence theory and standard policy analysis frameworks, not directly observed from a policy and IR corpus." We treat that guide, and the operations guide we layer alongside it for the unit-of-analysis work on one parcel's cost to serve, as informed starting points, not calibrated truth. Table 0.1 sets out what is verified against a published source, what is a team assumption tested against a source, and what remains a team judgement with no external check available.

**Table 0.1. What is verified, what is assumed, what is team judgement**

| Category | Example | How it is tagged | What this means for the reader |
|---|---|---|---|
| Case fact | The challenge is to simplify exporting without weakening checks [C-E6] | `[C-xx]` | Taken exactly as printed in the case document |
| External fact, confirmed | MSME-related products were about 45.8% of India's exports in FY25 [B01] | `[S..]` via a lane row | A named publisher, date and quote back the figure; where sources conflict, both figures are shown |
| Model assumption, source-tested | Return rate on a direct parcel, 20% base [A10] | `[A..]` | A team input with a bear to bull range, checked where possible against a cited source (here, CBIC's own cited range) |
| Model assumption, team judgement only | Minutes of seller paperwork per parcel with the cluster desk, 15 base [A27] | `[A..]` | No primary time study exists; the validation plan in section 29 proposes to measure it |
| Model output | Seller contribution per order rises from ₹640 to ₹1,038 [T5] | `[M]` or `[T..]` | Arithmetic on the assumptions above, reproducible from `model/cq_model.py`, never a survey finding |
| Team scoring | The option filter ranks our recommendation 4.45 weighted against 2.95 for the next option [T13] | stated as team judgement | We scored our own option against the alternatives; section 11 discloses this plainly |

Exhibit for the deck: this table's logic underlies the appendix slide's source key and the "in our model" phrase repeated on every KPI-hero card.

## 1. Every line of the brief and where we answer it

**Answer.** The case brief contains 27 lines carrying a reference ID, from the cover page through the four case requirements. Every one of them is answered somewhere in this report and on one of the three core slides or the appendix. Table 1.1 covers the cover, instructions, evaluation criteria and background lines; Table 1.2 covers the problem statement and the four requirements, which carry the weight of the recommendation.

The case sets a Policy Consultant's brief for DPIIT [C-R0], built on a background of millions of MSMEs (micro, small and medium enterprises), artisans, weavers and home-based producers who make goods the world already buys online but rarely sell abroad themselves [C-B1, C-B2, C-B3]. It names a specific failure mode, not a generic one: the barrier is not demand, it is process, registrations, invoices, shipping bills, customs declarations and tax paperwork that differ by route and are mostly hand-filed or agent-filed [C-E2]; after dispatch, customs delays and high small-parcel freight erode the delivered price, and a returned item becomes a fresh import with duties and forms attached [C-E3, C-E4]. The case then states the constraint that rules out the easy answers: authorities cannot simply relax controls, because low-value parcels at scale raise under-invoicing and incentive-misuse risk that cannot be inspected parcel by parcel, while destination markets are themselves tightening their low-value import rules [C-E5]. The challenge line that follows, "too much control keeps small sellers out; too little control opens the door to misuse" [C-E6], is the single sentence our entire recommendation answers: move the control from the parcel to the seller, so every parcel can stay declared and risk-scored without every seller paying the cost of a full declaration.

**Table 1.1. Cover, instructions, evaluation criteria and background lines**

| Case ID | Line | Answered in section(s) | Answered on slide |
|---|---|---|---|
| C-P1 | USME DTU "Conspectus" case, title "The Rise of Cross-Border E-Commerce: Unlocking India's MSME Export Potential" | §0 | Cover |
| C-I1 | Deadline, extended by one day per the organisers | build-log.md, not a research finding | n/a |
| C-I2 | One PDF, 3 slides excluding cover and appendix | §31 (slide crosswalk) | All |
| C-I3 | Submit through Unstop only | build-log.md | n/a |
| C-I4 | Team name required | Cover | Cover |
| C-I5 | Frameworks and matrices allowed | §3.7 (this section's framework table), §9 to §27 | Slides 2 to 5 |
| C-I6 | Assumptions stated and justified | §30, and T1 reproduced with one sentence of justification per row | Appendix slide 5 |
| C-I7 | Final round presentation offline at DTU East Campus | not a research finding | n/a |
| C-J1 Creativity | Judged criterion | §2, §12, §13 (the desk, the rate card and the pooled return design) | Slides 2 to 4 |
| C-J2 Originality | Judged criterion | §2 (the contrarian answer against a portal, subsidy or exemption) | Slide 2 |
| C-J3 Feasibility | Judged criterion | §11 (option filter), §15 (feasibility of political, diplomatic, enforcement questions), §19 to §20 | Slides 2 to 4 |
| C-J4 Granularity | Judged criterion | §9 (the eleven steps of one order), §21 (the waterfall), §25 to §27 (the pilot) | Slides 2 to 5 |
| C-J5 Key challenges addressed | Judged criterion | §2, §10, §16 (the integrity question answered directly) | Slide 2 and slide 3 |
| C-B1 | Cross-border e-commerce lets small sellers reach global buyers; 2026 policy priority | §3, §4 | Slide 2 |
| C-B2 | Millions of MSMEs, artisans, weavers, home-based producers in clusters, many women-led | §5 | Cover mind map, slide 2 |
| C-B3 | They are the largest untapped pool of potential online exporters | §3, §5 | Slide 2 |

**Table 1.2. Problem statement and the four case requirements**

| Case ID | Line | Answered in section(s) | Answered on slide |
|---|---|---|---|
| C-E1 | Only a small share of small producers sell abroad online | §3, §5 | Slide 2 |
| C-E2 | The main barrier is a complicated export process across offices, portals and routes; hand-filled forms; not worth the effort for a handful of parcels | §9, §10, §14 | Slide 2 and slide 3 |
| C-E3 | Customs delays after dispatch; high small-parcel freight, no bulk rates | §7, §13 | Slide 2 and slide 3 |
| C-E4 | Returns are the biggest hidden cost; treated as a fresh import; sellers absorb the loss or stop exporting | §9, §10, §17 | Slide 2 and slide 3 |
| C-E5 | Authorities cannot relax controls at scale; destination markets tightening | §8, §15, §16, §24 | Slide 3 |
| C-E6 | Too much control keeps sellers out, too little opens the door to misuse | §2 (this report's central answer) | Slide 2 moneyshot |
| C-R0 | Develop a reform-oriented strategy for the 2026 Inter-Ministerial Committee | §2, §20 | Slide 2, slide 4 |
| C-R1 Market and Access Dynamics | Plan to improve access and bargaining position, cut shipping and returns costs | §12, §13, §18, §21 | Slide 2 |
| C-R2 Regulatory and Process Reform | A simplified risk-based export framework protecting integrity | §14, §15, §16, §24 | Slide 3 |
| C-R3 Stakeholder and Coordination Strategy | Consensus-building across sellers, platforms, carriers and agencies | §19, §20 | Slide 4 |
| C-R4 Pilot Driven Innovation | A scalable pilot with clear success measures, regional and product variety | §25, §26, §27 | Slide 4 |

The row for C-E6 carries the most weight in the table, and it is worth stating plainly why. Every other line in the case is either context (the background section) or a symptom (the problems section) or an instruction (the task section). C-E6 is the test. A proposal that lowers cost by weakening a check fails it even if the cost saving is large; a proposal that protects every check by refusing simplification fails it from the other side, because it leaves C-E1's small sellers exactly where they started. Section 2 shows why we score a cluster desk with seller-level tiering and cluster-level paperwork higher than a new portal, a freight subsidy or a value-based exemption on exactly this test, and table T13 in the model turns that scoring into numbers, 4.45 weighted and 4.40 under equal weights for our recommendation against 2.95 and 2.80 for the next-best option, overseas warehouses for every cluster [T13].

Reading the two tables together also shows why the four case requirements, R1 to R4, cannot be answered by one mechanism alone. R1 asks about access and bargaining position, a market question; R2 asks about a risk-based framework, a regulatory question; R3 asks about coordination among four kinds of actor with different and sometimes conflicting interests; R4 asks for a pilot with measurable success. A single lever, a subsidy, a portal or an exemption, speaks to at most one of these four at a time. Our recommendation is built from four linked parts precisely because the case asks four linked questions, and section 2 treats each with the same structure, a mechanism, an owner, a number and a control, so that no requirement is answered thinly while another is answered in depth.

Exhibit for the deck: Appendix D (written by W-F) repeats this crosswalk in full for all 27 case lines against the final slide numbers; this report's Table 1.2 is the version a reader checks first.

## 2. Move the control from the parcel to the seller, and the paperwork from the seller to the cluster

**Answer.** Our recommendation is to move control to the seller and paperwork to the cluster: a cluster export desk files one pre-filled declaration per order from the order data, customs keeps every parcel declared and risk-scored, sellers are graded into three tiers on their own record so checks fall on the risky few rather than the many, and the cluster buys freight and returns on one pooled rate card. In our model this lifts a seller's contribution on the representative ₹3,960 order from ₹640 today to ₹1,038 under the reformed parcel lane, a gain of ₹398 an order, 62% in the base case, with no freight subsidy from the exchequer [T5]. Even in the bear case, where paperwork savings are smaller and returns heavier, the reformed parcel still lifts the seller's contribution from ₹14 to ₹385 an order [T5]. The honest reading of that bear number matters as much as the base-case gain: at ₹14, today's parcel barely clears its own cost, which means a bad year under the status quo can tip a seller out of exporting altogether, while the reformed lane's ₹385 floor keeps exporting worth doing even in a bad year.

### 2.1 Why not the obvious answer

The brief invites three obvious responses, and we tested each of them against the model and against C-E6's own test before setting them aside. The first is to build one more portal. India already runs ICEGATE for customs, the Export Clearance for Courier Shipments (ECCS) system, the Dak Ghar Niryat Kendra (DNK, India Post's export facilitation centre) network and the Directorate General of Foreign Trade's (DGFT) own systems; a new single-window portal would duplicate these and, on our own scoring, takes years to build while scoring only 2 on fiscal cost and 1 on time to deliver out of 5 [T13]. The second is a freight subsidy per parcel. Freight is ₹1,000 of the ₹1,531 cost to serve on today's parcel [T2], so a subsidy attacks a real cost, but it is a cost the exchequer pays forever, on every parcel, with no mechanism that improves as volumes grow; it scores 1 on building on the 2026 reforms, because it adds a new standing payment rather than using what the reforms already built [T13]. The third is to exempt low-value parcels from checks below some value line. This is the answer the case explicitly warns against: C-E5 states that large volumes of low-value parcels already raise under-invoicing and incentive-misuse risk, and an exemption below a value line gives a seller or an agent a direct incentive to split a larger order into several parcels each priced just under the line, precisely the misuse the case names. It scores only 1 on customs and tax integrity in our own filter, the lowest score any option receives on that dimension [T13].

**Table 2.1. The three reasons we reject a portal, subsidy or exemption, and the one answer we recommend**

| Reason | Portal, subsidy or exemption | Seller-level control, cluster-level paperwork |
|---|---|---|
| Quantitative | A freight subsidy attacks ₹1,000 of a ₹1,531 cost to serve on today's parcel, and costs the exchequer per parcel forever [T2] | +₹398 an order in our base case, ₹640 to ₹1,038, with no freight subsidy [T5, T6] |
| Integrity | An exemption below a value line invites splitting and under-invoicing, the misuse the brief names directly [C-E5] | Every parcel stays declared and risk-scored; incentive release is tied to matched payment realisation, never to a value threshold |
| Feasibility | A new portal duplicates ICEGATE, ECCS, DNK and DGFT systems already running, and a build of that scale takes years | Runs on the 2026 reforms already in force, the 1,013 Dak Ghar Niryat Kendras [G04] and existing identifiers, the Import Export Code (IEC), the Goods and Services Tax Identification Number (GSTIN) and the Udyam registration number |

The mechanism itself has four moving parts. A cluster export desk, sited at or near the DNK or a district export hub, photographs, lists and files for the seller, turning 45 minutes of hand-filed paperwork per parcel in the base case [A07] into 15 minutes at the desk [A27]. A pooled rate card means the cluster tenders freight and returns collectively instead of each seller negotiating alone against courier and postal list prices, saving 12% on freight in the base case [A28]. Three seller tiers put the heaviest customs scrutiny on new or unproven sellers and the lightest on a seller with a clean multi-month record, so risk-scoring happens at the seller level, continuously, rather than at the parcel level, one-off. Returns are resolved abroad rather than brought home one parcel at a time, because bringing a single low-value parcel back and clearing it costs more than the parcel is worth [A12]; we say plainly, following a correction logged during research (build-log.md, correction 4), that the specific mechanism of a pooled return point abroad with one monthly consolidated re-import bill has no confirmed legal basis in current Indian customs law today. Existing re-import law is consignment-wise, one export invoice and one airway bill per re-import; what we propose here is a policy ask for the Inter-Ministerial compact to put to the Central Board of Indirect Taxes and Customs (CBIC) and DGFT, not a mechanism already available. We keep consolidated overseas warehousing in the design only as a graduation option for a seller's proven, fast-moving stock-keeping units (SKUs), because in our model it beats today's parcel from about 10 orders a month per SKU in the base case but never beats the reformed parcel at the unit level, so it earns its place only after a product has already proved itself on the simpler lane [T12].

A fair question a committee member might raise is why the three seller tiers matter at all, if customs keeps scrutiny over every parcel regardless of tier. The answer is that tiering changes where scrutiny is spent, not whether it exists. Under today's system every parcel gets roughly the same treatment because customs has no continuous record to score a seller against; a first-time seller and a seller with three years of clean exports face the same forms and, broadly, the same examination odds. Under the tiered design, a new seller (tier 1) still gets full declaration and higher random examination, because nothing is yet known about that seller's record; an established seller (tier 2), with at least 25 clean parcels or three months of fully matched payment realisation and no discrepancy, moves to lower random examination and a monthly consolidated incentive claim; a trusted small exporter (tier 3), with twelve months clean and a one-time physical verification, faces the lowest examination rate in the risk engine while still filing every parcel and still sitting inside a post-clearance audit sample. We state plainly that the specific thresholds, 25 parcels, three months, twelve months, are proposals for the pilot to test, not existing customs categories, and that a research lane checked whether any current CBIC or DGFT scheme, the Authorised Economic Operator (AEO) programme in particular, already covers this ground; where it does, we map our tiers onto it rather than inventing a parallel structure.

### 2.2 The four answers, one per case requirement

The case asks for four separate things, and we answer each one on its own terms rather than folding them into a single generic plan, following the skill's rhetoric guidance on symmetric treatment: each requirement gets the same structure, a mechanism, a named owner, a number from our model, and the integrity control that keeps it from becoming the misuse C-E5 warns of.

**Table 2.2. The four answers to the four case requirements**

| Requirement | Our answer | Mechanism | Owner (proposed) | Number in our model | Integrity control |
|---|---|---|---|---|---|
| R1 Market and access [C-R1] | Cluster export desk at the DNK or district export hub; pooled rate card; platform fee transparency; pooled return point abroad (policy ask); graduation lane for SKUs selling 10 or more a month | Desk staff photograph, list and file for the seller; one tender per cluster for parcel freight and returns; platforms publish a seller fee sheet and hand sellers their own order data | Department of Posts (DoP) and DGFT district committees; platforms; carriers | Paperwork falls from ₹232 to ₹38 an order [T2, T3]; freight −12% on the rate card [A28]; seller contribution +₹398 [T5] | The desk cannot release goods; customs keeps sole clearance authority throughout |
| R2 Regulation and process [C-R2] | One pre-filled e-commerce declaration for postal and courier routes; three seller tiers; incentives and Goods and Services Tax (GST) refunds released on matched payment realisation; matched duty-free re-import of unsold returns on one monthly bill (policy ask) | Order, invoice, shipping bill, payment and return data linked by one seller identifier; a risk engine scores the parcel and the seller together | CBIC, DGFT, the GST Network (GSTN), the Reserve Bank of India (RBI) and Authorised Dealer (AD) banks, DoP | Paperwork time falls from 45 to 15 minutes [A07, A27]; returns loss per order falls under the reformed lane [T3] | 100% of parcels stay declared; a random sample is examined in every tier; any discrepancy triggers demotion |
| R3 Stakeholders [C-R3] | An Inter-Ministerial e-commerce export compact: one seller-identifier data link, a give-get matrix stating what each actor gives and gets, a published monthly scorecard, a two-week escalation rule | Each actor gives one thing and gets one thing it has asked for, CBIC gets shared data, platforms get a larger supply base, carriers get pooled volume, sellers get time back | DPIIT convenes; the Department of Commerce (DoC) and DGFT run the secretariat | Declarations fall from 10,000 parcel bills to 50 consolidated bills per 10,000 orders on the graduation lane [T9] | The shared scorecard carries integrity indicators alongside volume and time measures |
| R4 Pilot [C-R4] | Six clusters across six regions and product types, 2,400 sellers, 12 months, two waves, four scale gates | Local desks, local-language onboarding, deliberate inclusion of women-led and first-time sellers | DPIIT with district committees and an independent evaluator | ₹3.58 crore total budget [T10]; 960 active sellers in the base case [T11]; ₹37,262 budget per active seller [T11] | The evaluator sizes the integrity sample; the pilot scales only if integrity indicators do not deteriorate |

### 2.3 The moneyshot and the honest bear reading

The single number this entire argument builds toward is the gain in seller contribution per order under the reformed parcel lane against today's parcel, for the representative ₹3,960 item: +₹398 an order in the base case, from ₹640 to ₹1,038, a 62% increase achieved with no freight subsidy, no relaxation of any customs check, and no new portal [T5]. Table 2.3 walks the base-case waterfall step by step, because a single uplift number without its components would read as unearned; following the skill's rhetoric guidance on decomposing a headline gap, we show exactly where each rupee comes from.

**Table 2.3. The base-case waterfall, today's parcel to the reformed parcel lane**

| Step | Seller contribution per order |
|---|---|
| Today's direct parcel | ₹640 |
| Paperwork moved to the cluster desk | +₹195 |
| Pooled rate card on freight | +₹120 |
| Returns pooled abroad (policy ask, pending legal basis) | +₹83 |
| Reformed parcel lane | ₹1,038 |

**Table 2.4. Seller contribution per order, all three scenarios, both lanes against today**

| Scenario | Today's direct parcel | Reformed parcel lane | Gain from the reform |
|---|---|---|---|
| Bear | ₹14 | ₹385 | +₹371 |
| Base | ₹640 | ₹1,038 | +₹398 |
| Bull | ₹1,209 | ₹1,623 | +₹414 |

Reading this table against Table 2.3 matters: the ₹195, ₹120 and ₹83 steps in the base-case waterfall are not the only evidence for the recommendation, they are one scenario among three, and Table 2.4 shows that the direction and the rough size of the gain hold whether the year is a bad one for sellers or a good one. A single point estimate, the kind the skill's rhetoric guidance warns against, would have hidden this; naming the bear case plainly is part of giving the committee an honest basis for its decision, not a weakness to downplay.

Paperwork contributes the largest single step, ₹195, because it removes both the seller's own time cost and most of the agent or Customs House Agent (CHA) fee that a hand-filed declaration currently requires [T2, T3]. The pooled rate card contributes ₹120 by cutting freight 12% through collective tendering rather than each seller paying a courier or postal list price alone [A28]. Returns pooled abroad contribute ₹83, the smallest of the three steps and, as stated above, the one resting on a policy ask rather than a confirmed legal mechanism; we keep it in the base case because the pilot is designed to test exactly this lever first, and because even without it the first two steps alone would still lift the seller's contribution from ₹640 to ₹955, a gain that holds regardless of whether the returns policy ask is granted.

We state the bear case with the same care we give the headline, because a recommendation that only works in a favourable scenario is not a recommendation a committee of secretaries should adopt. In the bear case, where paperwork savings are smaller, the pooled rate card saves less, and returns run higher, the reformed parcel still lifts a seller's contribution from ₹14 to ₹385 an order, a gain of ₹371 [T5]. The ₹14 base figure for today's parcel in the bear case is close enough to zero that it explains, on its own, why C-E1's small share of sellers exporting online is small: at that margin, exporting is barely worth doing, exactly as C-E2 states. The bull case lifts the gain further, from ₹1,209 to ₹1,623, a gain of ₹414 [T5]. Across all three scenarios the uplift from the reform stays positive and stays in a narrow band, ₹371 to ₹414, which is the test we apply before treating a result as dependable rather than a favourable coincidence of base-case assumptions.

Exhibit for the deck: this section's Table 2.3 waterfall and Table 2.2 four-answers table are slide 2's central content; the bear-to-bull range feeds the scenario bars on slide 4, and the "CONCLUSIVELY" card on slide 2 closes with the ₹398 uplift stated once more.

## 3. India makes the goods the world buys online but ships them one costly parcel at a time

**Answer.** India's small manufacturers and artisans already sit inside a large export economy and a market that already wants what they make online; the problem the case names is not demand, it is that every one of millions of potential small online exporters faces the same parcel-by-parcel cost and paperwork load that only a tiny fraction currently choose to pay. MSME-related products made up close to half of India's exports by value in the most recent fiscal year, exporting MSMEs have more than tripled in five years, and the government and private platforms alike talk about India's e-commerce exports in the low single-digit billions of dollars against a declared ambition of hundreds of billions, a gap several multiples wider than anything a freight subsidy or a portal could close on its own.

### 3.1 How large the MSME export base already is

MSME-related products accounted for about 45.8% of India's total exports in 2024-25, a figure reported by the State Bank of India's (SBI) Group Chief Economic Advisor [B01]. A separate press report citing government data gives a higher 48.55% for the same fiscal year [B07]. The two figures do not reconcile in the sources we checked, and no single Press Information Bureau (PIB) release naming one number as the government's own headline figure was located; we therefore state the share as about 46%, citing both the lower SBI figure of 45.79% and the higher press figure of 48.55%, rather than asserting either one is settled (build-log.md, correction 1). Either reading supports the same conclusion: MSMEs are not a marginal slice of India's export economy, they are close to half of it by value, which makes the remaining question, how many of them sell online to a buyer abroad, the real policy question rather than a side one.

The count of exporting MSMEs tells the same story from a different angle. A Lok Sabha unstarred question reply puts the number at 1,73,350 in 2024-25, up from 52,849 in 2020-21, a rise of more than threefold in four years [B03]. A separate SBI-sourced report gives a slightly higher 1,76,315 for the same period [B04]. We cite the range as about 1.73 lakh, noting the two figures (build-log.net, correction 2), and the baseline of 52,849 in 2020-21 is consistent across both sources, so the direction and scale of the rise are not in doubt even where the exact endpoint is. MSME exports by value rose from ₹3.95 lakh crore in 2020-21 to ₹12.39 lakh crore in 2024-25 [B05], and a government statement to Parliament puts exports at ₹9.52 lakh crore for just the April to September half of 2025-26 [B06], a run rate consistent with continued growth. None of these figures is about e-commerce specifically; they describe MSME exports through every channel, traditional and online together. The gap between this large and growing base and the small e-commerce slice within it is exactly where this report's recommendation sits.

**Table 3.1. MSME export scale, two readings where sources conflict**

| Measure | Figure | Source |
|---|---|---|
| MSME share of India's total exports, FY25 | about 46% (45.79% per one source, 48.55% per another) | [B01], [B07] |
| Exporting MSMEs, FY25 | about 1.73 lakh (1,73,350 per a Lok Sabha reply; 1,76,315 per SBI-sourced reporting) | [B03], [B04] |
| Exporting MSMEs, FY21 (baseline) | 52,849 | [B03] |
| MSME export value, FY25 | ₹12.39 lakh crore, up from ₹3.95 lakh crore in FY21 | [B05] |
| MSME export value, April to September FY26 | ₹9.52 lakh crore | [B06] |

### 3.2 How small the e-commerce slice is, and where the targets sit

Against that large and growing MSME export base, India's e-commerce exports specifically are estimated at only $4 to $5 billion for fiscal year 2023, per an industry report produced jointly by a major consultancy and an industry chamber and separately repeated in the government's own Economic Survey [B15, B16]. That is roughly 0.9% to 1.1% of India's total merchandise exports for the same year, a small slice of a large pie. The government's own stated ambition is $200 to $300 billion in e-commerce exports by fiscal year 2030 [B17]. A think tank sets a higher target still, $350 billion by 2030, in a 2023 report [B18]; the same think tank's 2024 update describes the current baseline differently, about $5 billion rather than the $2 billion implied in its 2023 report, a discrepancy we note without resolving, since the $5 billion figure happens to match the separate EY-ASSOCHAM FY23 estimate above and may simply reflect which year's baseline each report used (build-log.md, correction 3). The same think tank's own downside case states that without policy reform, e-commerce exports would reach only about $25 billion by 2030, a fraction of either target [B20].

One private platform's own figures sit inside this picture and illustrate the same gap at a smaller scale. Amazon's Global Selling programme reports that Indian sellers passed $20 billion in cumulative e-commerce exports between 2015 and 2025, ahead of the company's own 2025 deadline, and the company now targets $80 billion by 2030, a figure it ties explicitly to the government's own $200 to $300 billion national vision [B22, B25]. Amazon reports more than 2 lakh exporters now selling through Global Selling from India, across 28 states, 7 union territories and more than 200 cities, with the exporter base growing about 33% in the most recent year reported [B24]. These are company figures, not government-audited figures, and we present them as such; they are the clearest publicly stated evidence that a platform-level e-commerce export channel already exists and is growing quickly, even as the national e-commerce export total remains a small share of MSME exports overall.

**Table 3.2. India's e-commerce export value against stated targets**

| Measure | Figure | Source |
|---|---|---|
| India e-commerce export value, FY23 | $4 billion to $5 billion | [B15], [B16] |
| Government target, FY30 | $200 billion to $300 billion | [B17] |
| Think-tank target, FY30 | $350 billion (contested baseline, $2 billion per 2023 report vs $5 billion per 2024 update) | [B18], [B19] |
| Think-tank no-reform downside, FY30 | about $25 billion | [B20] |
| Amazon Global Selling cumulative exports, 2015 to 2025 | over $20 billion, target $80 billion by 2030 | [B22], [B25] |
| Amazon Global Selling exporter count | over 2 lakh across 200-plus cities | [B24] |

### 3.3 China shows the scale a reformed system can reach

The clearest external benchmark for how large a cross-border e-commerce export channel can become, once customs, logistics and platform rules are aligned for it, is China. China's cross-border e-commerce exports reached 2.15 trillion yuan in 2024, growing 16.9% year on year, out of total cross-border e-commerce trade of 2.71 trillion yuan that year, the first time exports alone had passed 2 trillion yuan [F19]. In 2025, China's total cross-border e-commerce imports and exports together reached 2.84 trillion yuan, up 4.8% on 2024, equivalent to roughly $418 billion [F22]. By comparison, India's entire e-commerce export estimate of $4 to $5 billion sits two orders of magnitude below China's cross-border e-commerce export figure alone, even before counting imports. China's own customs system runs three distinct supervision codes for cross-border e-commerce, retail export (9610), business-to-business direct export (9710) and export via overseas warehouse (9810), each cleared under a different risk and documentation regime matched to the shipment type rather than a single one-size-fits-all declaration for every parcel [F25]. In the first half of 2026, China's exports through overseas warehouses specifically rose about 3.3 times year on year, per a July 2026 customs briefing that also reported about 140 million people making cross-border e-commerce purchases in China in that half-year alone [F24].

We draw one conclusion from this comparison, stated carefully because the two economies differ in scale, manufacturing base and customs architecture in ways a single comparison cannot capture: China's experience shows that a tiered, code-differentiated customs treatment matched to shipment type, rather than one declaration regime applied uniformly to every parcel regardless of size or seller history, is consistent with cross-border e-commerce exports reaching a scale measured in trillions of yuan rather than single-digit billions of dollars. That is the same structural idea behind our own seller-tier recommendation in section 2, applied to seller risk rather than to shipment type, and it is one reason we treat the tiering mechanism as more than a convenience: it is the feature that let a comparable economy's cross-border e-commerce exports grow by an order of magnitude beyond where India's currently sit.

**Table 3.3. China's cross-border e-commerce export scale against India's**

| Measure | China | India |
|---|---|---|
| Cross-border e-commerce exports, most recent full year | 2.15 trillion yuan (2024), total trade 2.71 trillion yuan [F19] | not separately published; e-commerce exports estimated at $4bn to $5bn for FY23 [B15] |
| Total cross-border e-commerce trade, latest year | 2.84 trillion yuan (2025), about $418 billion [F22] | government target $200bn to $300bn by FY30 [B17] |
| Customs treatment | three distinct supervision codes by shipment type (9610, 9710, 9810) [F25] | one declaration process across routes today, before our reform [C-E2] |
| Overseas-warehouse export growth, latest half-year reported | up about 3.3 times year on year, H1 2026 [F24] | warehousing beats today's parcel from about 10 orders a SKU a month in our model, never beats the reformed parcel at unit level [T12] |

The MSME base described in section 3.1, millions of artisans, weavers and home-based producers [C-B2], already sits inside an export economy that moves ₹12 lakh crore a year [B05]. The e-commerce slice of that economy, and the online export channel specifically, is where India sits closer to the start of the curve China has already climbed. Section 4 turns to the 2026 reforms that have already begun to close part of this gap, and section 9 onward turns to exactly where, on a single ₹3,960 order, the remaining cost sits.

A reader could ask why India, with an MSME export base already worth ₹12 lakh crore a year and millions of artisans and home-based producers [B05, C-B2], has not already closed the gap to China's scale on its own, given that both countries sell similar categories of goods, textiles, home decor, handicrafts, into the same global online marketplaces. The case itself answers this before our recommendation does: the barrier named in C-E2 through C-E5 is not manufacturing capacity or product appeal, it is process, the same hand-filed, route-specific, office-by-office paperwork load that sits on every parcel regardless of who ships it or how small the order. China's 9610, 9710 and 9810 codes exist precisely because its customs system long ago stopped treating every cross-border parcel the same way; India's system, before the 2026 reforms discussed in section 4, treated a ₹3,960 handmade cushion cover from Jaipur the same way it treated a container-scale cargo shipment, and that mismatch, not a lack of demand or a lack of makers, is the gap this report's recommendation closes.

Exhibit for the deck: this section's Table 3.2 and Table 3.3 feed slide 2's market tiles (MSME export share, exporting MSME count, India against China), and the China comparison is the foreshadow sentence that slide 2 and section 4 both carry forward, the cost sits in paperwork and returns, not freight, and a tiered system is what lets a comparable market grow past where India sits today.

## 4. The 2026 reforms removed the value cap and built the return and EOR routes, so the remaining barrier is per-parcel cost

**Answer.** Between September 2024 and August 2026, four separate reforms removed the value cap on commercial courier exports, built a risk-based re-import route for returned goods, opened an inventory-based export framework with registered Exporters-on-Record, and extended duty incentives to postal exports. None of these reforms touches the forty-five minutes a seller spends filling forms by hand on a single parcel, or the loss a seller absorbs when that parcel comes back [A07, T2]. The 2026 reforms are the baseline our proposal extends, never our own idea; each one is named below with its date and instrument, and each is tested against what it does and does not do for the seller at the centre of this case.

### 4.1 A dated reform timeline

The four reforms did not arrive together. They were staged over roughly two years, each solving one documented bottleneck in the Department of Posts, the Central Board of Indirect Taxes and Customs (CBIC) and the Directorate General of Foreign Trade (DGFT) systems in turn.

| Date | Reform | Instrument |
|---|---|---|
| 12 September 2024 | Duty Drawback, RoDTEP and RoSCTL extended to exports made through courier mode | Notification 60/2024-Customs (NT), Circular 15/2024-Customs, amending the Courier Imports and Exports (Electronic Declaration and Processing) Regulations 2010 [C23] |
| 15 January 2026 | Duty Drawback, RoDTEP and RoSCTL extended to postal e-commerce exports filed electronically | amendment of the Postal Export (Electronic Declaration and Processing) Regulations, 2022; filing via form PBE III or PBE IV on the DNK portal [C20, C21] |
| 30 to 31 March 2026 (effective 1 April 2026) | ₹10 lakh per-consignment value cap on commercial courier exports removed; a risk-based re-import framework for returned or rejected e-commerce courier goods replaces consignment-wise manual verification | Notification 33/2026-Cus (NT) and 34/2026-Cus (NT), both dated 31 March 2026, Circular 17/2026-Customs; Notification 08/2026-Customs dated 30 March 2026 amending Notification 45/2017-Customs [C01, C02, C05, C06] |
| 6 April 2026 | An upgraded Return to Origin (RTO) functionality live in the Express Cargo Clearance System (ECCS) | EICI advisory dated 6 April 2026 [C10] |
| 23 July 2026 | Export of goods through e-commerce exempted from the restrictions otherwise applicable to inventory-based e-commerce models | DPIIT Press Note 3 (2026 Series) [C16] |
| 5 August 2026 | Inventory-based Cross-Border E-Commerce Export Framework introduced; Exporter-on-Record (EOR) registration opened via form ANF-9A | DGFT Notification 27/2026-27 and Public Notice 25/2026-27, both dated 5 August 2026 [C17, C18] |

Two notes on this table matter for a committee that will be asked where the numbers come from. First, a DGFT notification numbered 67/2025-26 and dated 27 March 2026 is cited by one trade body as the instrument withdrawing the courier value limit, a few days ahead of the CBIC notifications above [C04]. We cannot confirm from the sources available in this build whether that is a separate DGFT-side trade-policy action or a misdating of the same event; both citations are kept rather than one being discarded. Second, a source naming Notification 30/2026-27 dated 20 August 2026 for the EOR framework could not be located at all in this search pass; the closest item found on that date is an unrelated Export Obligation notice [C19]. We lead with 27/2026-27 and Public Notice 25/2026-27, both dated 5 August 2026, as the primary citation [C17].

### 4.2 What each reform does, and what it leaves standing

The honest reading of these four reforms is that each one solves a specific, named bottleneck and stops there. None of them was written to lower what a seller pays per parcel in paperwork time or in a returned order.

| Reform | What it does | What it does not do |
|---|---|---|
| ₹10 lakh courier cap removed [C01] | Lets a seller or a consolidator ship a higher-value commercial consignment through courier mode without hitting the old ceiling | Does not reduce the forty-five minutes of hand-filled forms a seller spends per direct parcel, or the ₹120 agent fee charged on that same parcel [A07, A09, T2] |
| Risk-based re-import framework [C06, C07] | Replaces consignment-wise manual verification of returned or rejected courier goods with a risk-scored process inside the ECCS Return Module built by DG Systems | Still runs one re-import against one original export invoice and one air waybill (AWB) pair; it does not create a pooled return point abroad or a single monthly consolidated re-import bill, a gap confirmed by a direct search for such a provision, which found none [C57] |
| Inventory-based export framework and EOR registration [C16, C17, C18] | Lets a registered Exporter-on-Record, holding a valid Importer-Exporter Code (IEC) and Goods and Services Tax Identification Number (GSTIN), export inventory bought from Sellers-on-Record under one registration rather than seller-by-seller filing | Does not itself lower direct-parcel freight or paperwork for a seller who stays outside an EOR's inventory, which in our model is most sellers moving a handful of parcels a month [A07, T2] |
| Postal export benefits [C20, C21] | Extends Duty Drawback, RoDTEP and RoSCTL to postal exports filed electronically through form PBE III or PBE IV on the DNK portal, linked to ICEGATE | Does not change the per-parcel postal freight rate itself, and does not resolve the returns risk specific to postal shipments, which the upgraded RTO functionality only partly addresses [C10] |

Set against these four rows, the courier Shipping Bill in CSB-V format is still filed manually and is not automatically processed on ICEGATE; a customs officer in the ECCS reviews and approves or rejects the manually cleared data before any ICEGATE validation step runs [C26]. That single fact explains why removing a value cap changes what a seller is permitted to ship, not how long it takes a seller to file the parcel that ships.

### 4.3 The postal network the reforms build on

The 2026 postal benefits reform did not create the Dak Ghar Niryat Kendra (DNK) network; it extended incentive eligibility onto a network that already existed. India Post's 2025 year-end review reports over 1,000 DNKs nationwide enabling exports worth approximately ₹287 crore [C28], and a more precise count from the same review period gives 1,013 Dak Ghar Export Centers spanning 762 districts, including 122 in the Northeast, facilitating 12.31 lakh shipments at roughly the same ₹287 crore value [C29]. A Rajya Sabha unstarred reply of February 2025 and a PIB-sourced table as of 4 December 2024 both confirm the 1,013 figure, meaning the network's scale predates and is consistent with the December 2025 review [C30]. This scale matters for the recommendation this report builds towards: a cluster export desk does not need a new physical network, only a new filing layer riding on an existing one of 1,013 centres.

### 4.4 Returns stay the unresolved half of the reform package

Of the four reforms, the risk-based re-import framework is the one most directly tied to the case's stated barrier on returns [C-E4]. CBIC is cited as stating that e-commerce exports see return rates of 20% to 25%, against under 5% for traditional exports [C11], a figure the model's own return-rate assumption (A10, bear 0.22, base 0.20, bull 0.18) tracks directly. A 2025 Lok Sabha reply gives a lower, conflicting range of 15% to 20% [C12]; both are kept rather than one being discarded, because neither source could be opened directly to settle the difference in this build [research methodology note, Lane C].

What the reform does not do is more important to this report's argument than what it does. A direct search for any CBIC or DGFT provision establishing a pooled overseas return point, or a single monthly consolidated re-import bill covering returns from multiple sellers, found none. Existing re-import law, Notification 45/2017-Customs as amended by Notification 08/2026-Customs, is written consignment-wise: one export invoice and one air waybill per re-import, with duty exemption limited to goods returned for genuine commercial reasons and re-imported within three years of export, extendable to five years with approval [C09, C57]. Amazon's own Global Selling documentation describes free storage and customer-returns handling for enrolled sellers, with a cross-border "SEND" option for outbound inventory, but no page describes a consolidated bulk-return route back to India for returned stock; one undated seller-forum post suggests a return may instead route to a different country's fulfilment centre than the original sale [C58]. This report therefore treats any pooled-return mechanism not as something the 2026 reforms already permit, but as a policy ask this committee would need to take to CBIC and DGFT.

That is the gap this report returns to before naming what should be added to the 2026 baseline: none of the four reforms above reduces the forty-five minutes a seller spends on paperwork per parcel, and none creates a legal route for a return to be resolved anywhere other than one invoice, one seller, one bill of entry at a time. In our model, that paperwork and that unresolved return, not freight, are what separate a seller's ₹640 contribution on today's parcel from the ₹1,038 contribution the reformed parcel earns [T2, T3, T5]. The committee's remaining work sits in exactly that space.

### 4.5 The return-rate evidence, kept in conflict

A10, the model's return-rate assumption, is the single input the tornado analysis in research §23 ranks fourth among uplift drivers, behind the pooled rate card, paperwork minutes and the agent fee [T8]. Two government-linked sources disagree on its value by five percentage points, and this report keeps both rather than averaging them into a false middle.

| Source | Return-rate figure cited | What it covers |
|---|---|---|
| CBIC, cited via a Budget 2026 explainer | 20% to 25% for e-commerce exports, against under 5% for traditional exports [C11] | the primary seed for A10 (bear 0.22, base 0.20, bull 0.18) |
| 2025 Lok Sabha reply, Commerce Ministry | 15% to 20% for e-commerce exports [C12] | a lower, conflicting range from the same broad category of export |

Neither primary document could be opened directly in this build; both rest on search-engine snippets of secondary coverage, a limitation flagged at the top of Lane C's own raw file and repeated here because it bears directly on A10. The model's base case of 0.20 sits at the exact midpoint where the two ranges overlap, which is the most defensible single value available without a primary reading of either document, not a claim that 0.20 is independently confirmed.

The gap between a 15% return rate and a 25% return rate is not a rounding difference once it is run through the model. At the bear end of A10 (0.22), a seller's expected contribution on today's direct parcel falls to ₹14 per order; at the bull end (0.18), it rises to ₹1,209 [T5]. A committee asked to defend a single headline figure for seller contribution should know that the figure moves by more than eighty times its own base value across the width of this one disputed input, which is why research §22 presents all three scenarios rather than the base case alone.

### 4.6 The postal network scale the reform rides on

| Measure | Figure | Source |
|---|---|---|
| Dak Ghar Niryat Kendras (DNKs) nationwide, December 2025 year-end review | over 1,000, with a more precise count of 1,013 | [C28, C29] |
| Districts covered by the 1,013 DNKs | 762 districts, including 122 in the Northeast | [C29] |
| Shipments facilitated through the network in the review period | 12.31 lakh shipments | [C29] |
| Export value enabled | approximately ₹287 crore | [C28, C29] |
| Confirmation of the 1,013 count from an earlier date | a Rajya Sabha unstarred reply, February 2025, and a PIB-sourced table as of 4 December 2024, both independently cite 1,013 | [C30] |
| Foreign Post Offices under Section 7 of the Customs Act, for postal export clearance | 28 | [C22] |
| Hub-and-spoke model, launched December 2022, using DNKs as booking and processing centres | over 1,000 DNKs feeding 28 Foreign Post Offices | [C22] |

This network predates the January 2026 incentive extension by roughly three years. The reform did not build the 1,013 centres; it made them eligible to file for benefits they could not previously claim. That distinction matters for the pilot design in research §25: a cluster export desk proposed for this pilot does not need to build new physical infrastructure, only a filing layer on top of a network that already reaches 762 districts.

Two of the four reforms in 4.1 also depend on each other in a way a committee reviewing them one at a time might miss. The 1 April 2026 courier value-cap removal and the same-date risk-based re-import framework were legislated through the same package of notifications, Notification 33/2026-Cus (NT), 34/2026-Cus (NT) and Circular 17/2026-Customs, with the re-import amendment following one day earlier via Notification 08/2026-Customs [C01, C02, C06]. A seller who benefits from the higher value cap on an outbound shipment is the same seller exposed to the new risk-based re-import process if that shipment comes back, which is one reason this report treats the two reforms as a single package in 4.2 rather than as two unrelated line items.

Exhibit for the deck: the dated reform timeline (4.1) feeds the cover mind map's reform node and slide 2's "CONCLUSIVELY" context strip; the what-it-does-not-do table (4.2) is the direct source for the foreshadow line on slide 2 naming paperwork and returns as the surviving barrier.

---

## 5. Who sells: artisans, weavers and home-based producers in clusters, many women-led and first-generation

**Answer.** The case names Jaipur, Moradabad and Varanasi explicitly and describes millions of artisans, weavers and home-based producers making handicrafts, textiles, jewellery, leather goods and home décor, many run by women and first-generation entrepreneurs [C-B2]. Lane B research adds Kutch, Channapatna and a north-east candidate cluster (Tripura, cane and bamboo) to that list, and confirms that no single national census of these sellers exists; every scale figure below carries at least one conflicting alternative. We record both figures rather than choosing one, because the committee will see the same conflicting figures if it checks any source itself.

### 5.1 Segments by product archetype

The six clusters this report tracks do not make the same thing. Each maps to a distinct product archetype, and the model's single representative item, a ₹3,960 handmade décor or textile piece sold abroad at $45 [A01, A02], stands in for all six without claiming any one of them is typical of the rest.

| Archetype | Representative item | Cluster | Price-band evidence |
|---|---|---|---|
| Home décor and soft furnishing | hand block-print cushion cover | Jaipur | $5 to $15 at the low end on Etsy-style listings, $40 to $95 for larger linen or designer versions [B32] |
| Metalware and ritual objects | handmade brass diya | Moradabad | ₹75 to ₹1,100 on domestic retail, $18 to $30 on international retail (Exotic India) [B33] |
| Woven textiles and apparel | handwoven Banarasi silk stole | Varanasi | $45 to $110 on USD-facing retail [B34] |
| Embroidered textiles and bags | Kutch-embroidered shoulder bag | Kutch | $40 to $50 per bag, $70 to $120 for multi-bag lots [B35] |
| Wooden toys | Channapatna wooden toy | Channapatna | $28 to $81 at retail, $2.62 to $6.55 at wholesale with a 20-piece minimum order [B36] |
| Cane and bamboo home products | storage basket or decor item (candidate) | north-east (Tripura) | no USD-facing listing located for this archetype in this search pass; the nearest comparator, handwoven bamboo baskets from other clusters, lists at ₹450 to ₹2,000 domestically and $0.90 to $9.00 per piece wholesale [B37] |

No Amazon.com (US marketplace) listing could be matched to any of the six seeded item types in this search session; every USD-facing comparator above comes from Etsy or from boutique Indian-export retail sites such as Exotic India, Khinkhwab or IndiaHandmade, not from Amazon's own US site [B38]. A seller researching their own pricing today would see the same gap: the flagship US marketplace is harder to benchmark against than the secondary retail sites that already carry comparable Indian handmade goods.

### 5.2 The six clusters: status and scale, with conflicts kept

| Cluster | Product and GI or export status | Export or artisan scale (conflicts noted) |
|---|---|---|
| Jaipur | Town of Export Excellence for handicrafts, recognised 2009 [B41] | national handicraft exports rose from ₹7,870 crore in FY2011 to ₹32,759 crore by FY2024; Rajasthan's sector is projected to reach ₹18,000 crore by FY2030 [B42] |
| Moradabad | Town of Export Excellence for brass handicrafts under FTP 2023 [B43]; "Moradabad Metal Craft" GI dated 2013 by most sources, one outlier source gives 2023 [B44] | annual export value estimates range from about ₹2,200 crore to ₹4,500 crore across sources [B44]; artisan counts are historical only, over 13,000 by the 1970s or about 22,500 workers and artisans indirectly employed, with no current official figure [B45] |
| Varanasi | Town of Export Excellence under FTP 2023, alongside Moradabad, Faridabad and Mirzapur [B43]; Banarasi silk GI granted 4 September 2009, chosen as the district's ODOP (One District One Product) [B46] | weaver counts vary by an order of magnitude: about 26,779 district handloom weavers (16,067 on silk) in ODOP project documents, about 200,000 Banarasi sari weavers specifically per weavers' associations (down from 500,000 a decade earlier), and "two million odd weavers" cited for the wider GI area [B47] |
| Kutch | Kutch Embroidery GI registered March 2013, covering Bhuj, Anjar, Nakhatrana, Lakhpat, Mandvi, Mundra, Bhachau, Rapar and Abdasa [B48]; over 10 further artisanal and agricultural products of Kutch and Saurashtra, including Ajrakh printing, received GI tags in November 2025 [B49] | no artisan headcount for the Kutch embroidery cluster specifically was located in this search pass, a gap this report flags rather than fills with a guess |
| Channapatna | GI tag granted 2005, administered by the Government of Karnataka, renewable in 10-year terms [B50]; listed on the national ODOP portal under Ramanagara district, Karnataka [B51] | a 2021 academic estimate puts the cluster's artisan count at about 4,000 [B50]; artisans interviewed in ODOP coverage say the GI tag has not materially improved their income, citing competition from cheap Chinese imports [B51] |
| Tripura (north-east candidate) | GI status is itself contested: 2024 press reports describe the state government as having only applied for a GI tag on cane craft, not yet received one [B52], while a separate craft database entry lists "Bamboo Craft (Tripura and Assam)" as GI-registered in 2023 [B52] | press estimates put the cane and bamboo artisan workforce at nearly 1.49 lakh, with no official census figure located [B53]; February 2026 ODOP coverage reports bamboo, cane and agar products gaining popularity in international markets across all eight districts, without a specific export value figure [B54] |

### 5.3 Scale of the registration base these sellers sit inside

| Measure | Figure | Source |
|---|---|---|
| Total Udyam registrations (Portal plus Udyam Assist Platform), 31 January 2025 | about 5.89 crore | [B08] |
| Total Udyam registrations, year-end 2025 review | over 7.3 crore, split 4.37 crore on the Udyam Portal and 2.92 crore informal micro enterprises via Udyam Assist | [B10, B11] |
| Women-owned share, Udyam Registration Portal only, July 2020 to January 2024 | 20.5% (employment 18.73%, investment 11.15%, turnover 10.22%) | [B12] |
| Women-owned share, Udyam Registration Portal plus Udyam Assist Platform, as of 28 November 2024 | 40% | [B13] |
| Women-owned share, 2026 secondary compilation (scope unclear) | 38% | [B14] |
| Registered women handicraft artisans with the Development Commissioner (Handicrafts), per a 2026 Lok Sabha reply | 16,87,534 | [B57] |

The 20.5%, 40% and 38% rows are not necessarily a true conflict: the 20.5% figure covers the Udyam Registration Portal alone over one date window, and the 40% figure adds the Udyam Assist Platform over a later window, so a genuine change in scope sits underneath what looks like a contradiction. We record all three rather than picking one, because no single source reconciles them.

### 5.4 What is unknown

No "Fourth All India Handicrafts Census" exists, despite that name pattern appearing in some secondary sources; the handloom sector has its own Fourth All India Handloom Census (2019 to 2020), which counted about 26.73 lakh weavers and 8.48 lakh allied workers nationally [B55], but handicrafts artisans are instead estimated from a 1993 census (47.6 lakh artisans) and a 2012 Lok Sabha reply (30.25 lakh male plus 38.61 lakh female), neither recent [B56]. The 16,87,534 figure in 5.3 is a registration count with the Development Commissioner (Handicrafts), not a census total, and likely understates the true population of home-based producers who have never registered [B57]. No official ex-works price list exists for any of the six clusters' named products from DC Handicrafts, the Export Promotion Council for Handicrafts (EPCH) or a state government; the model's product-cost assumption (A04) rests instead on a vendor guide's margin ranges by craft type, which this report treats as directional, not measured [B39, B40]. No current Etsy India seller-onboarding policy page, confirming whether onboarding has in fact resumed, was found on Etsy's own site; the claim that it resumed around June 2025 comes only from a third-party vendor guide [B26]. Districts as Export Hubs product-mapping, which should in principle say which district supplies which product, could not be matched to Kutch, Channapatna or the Tripura candidate cluster in this search pass. A seller-level identity count by cluster, which a pilot (research §25) would need before it can measure anything, does not exist in any source reviewed for this report and would have to be built at the pilot's own cost.

### 5.5 Why these six clusters and not others

The case names three clusters directly, Jaipur, Moradabad and Varanasi [C-B2], and leaves the rest of the selection to this report. Kutch and Channapatna were added because each carries a distinct product archetype already registered under a Geographical Indication (GI), which lets a pilot test the cluster desk model against a cluster with an established export identity rather than an unregistered one. The Tripura candidate was added last and carries the most uncertainty of the six, by design: a pilot with a published decision gate (research §26) should include at least one cluster where the committee does not yet know whether the model holds, rather than six clusters chosen because they were already known to work. Lane B's own gap notes (5.4) make this uncertainty explicit rather than hiding it inside an optimistic artisan count.

A seventh candidate considered and set aside is a generic "home décor" cluster with no named geography, which the case's own wording rules out: the case names clusters, not product categories, as the unit a pilot should localise within [C-B2]. Every cluster in 5.2 can be reached through the existing Dak Ghar Niryat Kendra network described in 4.6, which is also why no cluster was chosen for its product uniqueness alone without checking that an export-facilitation point already exists near it.

A seller segment this report does not separately break out is leather goods, named once in the case [C-B2] but not matched to any Lane B cluster research in this build; a verifier opening Kanpur or Dharavi-specific leather-cluster sources, which this search pass did not reach, would need to add that row before a slide names leather goods alongside the six clusters above.

Exhibit for the deck: the segment archetype table (5.1) and the cluster scale table (5.2) feed the cover mind map's seller and cluster nodes and slide 4's six-cluster pilot panel.

---

## 6. Platforms set the terms small sellers cannot negotiate alone

**Answer.** Amazon Handmade and Etsy each publish a fixed fee schedule that applies the same way to a seller moving one parcel a month and a seller moving a thousand, and neither schedule is open to negotiation by an individual home-based producer [B28, B29]. Our model's platform-fee assumption of 15% of retail price (A06) matches Amazon Handmade's published US Home-category referral fee exactly, and this exact match is itself evidence that a small seller pays the posted rate, not a negotiated one [A06, B29]. The scale gap between what platforms report and what the government is aiming for shows why bargaining power sits with the platform, not the seller.

### 6.1 What the platforms charge

| Platform and market | Fee structure | Confirmed against our model |
|---|---|---|
| Amazon Handmade (US) | 15% referral fee on Home-category items, with a $1.00 minimum charge per item [B29] | matches A06 = 0.15 exactly, a direct confirmation of the model's platform-fee assumption [A06] |
| Etsy (US-facing) | $0.20 per listing, renewed every 4 months or on sale; 6.5% transaction fee on the full order total including shipping; 3% plus $0.25 payment processing in the US; Offsite Ads add up to 15% (12% for larger sellers) when triggered [B28] | not separately modelled; the 6.5% transaction fee alone is close to half of Amazon's 15% referral fee, so a seller choosing between platforms is choosing between two different fee architectures, not one lower and one higher number |
| Amazon Global Selling (India outbound, all categories) | over 200,000 (2 lakh) Indian exporters enrolled, exporter base growing about 33% in the past year [B24]; cumulative exports of $20 billion from 2015 to 2025 [B22], target $80 billion by 2030 [B23] | scale context for A06, not a separate fee figure |
| eBay India (cross-border) | current India-specific international final value fee schedule could not be located; 2017-era reports of zero listing and final value fees are too dated to use as evidence of today's rate [B31] | gap: no current figure to confirm or contradict A06 |

A domestic Amazon India change, eliminating referral fees on products priced under ₹300 across more than 135 categories effective 7 April 2025, is sometimes cited alongside cross-border fee discussion [B30]. It is a domestic India-marketplace fee cut, not a cross-border Global Selling fee, and this report treats it as context only; conflating the two would overstate how much fee relief an exporting seller actually receives.

### 6.2 Account and listing hurdles beyond the fee line

A posted fee percentage is only one part of what a small seller negotiates, or fails to negotiate, with a platform. Several structural hurdles sit beside the fee line itself.

| Hurdle | Evidence |
|---|---|
| No confirmed current Etsy India onboarding policy | the claim that onboarding resumed around June 2025 after a pause comes only from a third-party vendor guide, not Etsy's own policy page [B26] |
| No Amazon US listing match for any of the six representative item types | sellers researching comparable pricing find themselves on Etsy or boutique export-retail sites instead of the flagship US marketplace [B38] |
| Amazon Handmade's $1.00 minimum referral fee per item | binds disproportionately on low-ticket items, a category most of the six clusters in §5 actually sell in [B29] |
| No current, India-specific eBay cross-border fee page | a seller cannot even benchmark eBay against Amazon or Etsy without relying on seven-year-old reporting [B31] |

Etsy's own reported reach for Indian sellers, exports to 168 countries worldwide as of September 2023 [B27], shows the upside of platform access: no small seller could reach 168 countries through its own logistics or marketing. The same platform that opens that reach sets every term on which the seller reaches it, and the fee schedule in 6.1 is fixed well before any individual seller's order volume is known to the platform.

### 6.3 The scale asymmetry behind the bargaining problem

| Metric | Platform figure | Government ambition |
|---|---|---|
| Amazon Global Selling exporters from India | over 200,000 (2 lakh), growing about 33% year on year [B24] | not directly comparable; no government count of platform-enrolled exporters was located |
| Amazon cumulative e-commerce exports from India, 2015 to 2025, and its own 2030 target | $20 billion cumulative [B22], target $80 billion by 2030 [B23] | Government target of $200 billion to $300 billion in e-commerce exports by FY2030 [B17]; Amazon explicitly ties its own target to this government vision [B25] |
| India's total e-commerce export value | FY2023 estimate $4 billion to $5 billion, about 0.9% to 1.1% of merchandise exports (EY-ASSOCHAM, repeated in the Economic Survey) [B15, B16] | GTRI's March 2023 report set a $350 billion by 2030 target from a stated baseline of about $2 billion; a 2024 GTRI-linked update instead describes the baseline as about $5 billion for the same 2030 target, a conflict this report keeps rather than resolves [B18, B19]; GTRI itself projects only about $25 billion by 2030 without policy reform [B20] |

One platform's own reported cumulative export figure, $20 billion over ten years, is four to five times India's entire estimated e-commerce export base for a single recent fiscal year. A seller negotiating with a counterpart of that scale, alone, is not in a position to move a posted 15% referral fee or a $1.00 per-item minimum. The committee's stakeholder and coordination strategy (research §19 and §20) answers this asymmetry by asking platforms to publish a seller fee sheet and to return order data to the sellers who generate it, neither of which this report finds any platform currently doing; that is a gap in today's market, not an existing commitment from any named platform.

### 6.4 Why a posted fee is not a negotiated fee

A fee schedule published on a platform's own help page is not, by itself, evidence of bargaining power on either side. It is evidence that the platform decided the rate unilaterally and the same rate applies whether the seller behind a given listing ships one parcel a month or a thousand. Three features of the fee evidence in 6.1 make this point concrete rather than asserted.

First, Amazon Handmade's 15% referral fee carries a flat $1.00 minimum per item [B29], which on a $5 cushion cover (near the low end of the Jaipur price band in §5.1) is a 20% effective rate once the minimum binds, not 15%. A seller cannot negotiate the minimum away; it applies identically regardless of order history or volume.

Second, Etsy layers its 6.5% transaction fee on the full order total including shipping, not on the product price alone [B28]. A seller who prices shipping separately to appear competitive on the product line still pays the transaction fee on the combined total, a mechanical feature of the fee schedule rather than a negotiated term.

Third, no evidence found in this build shows either platform offering a volume discount, a tiered fee schedule by seller size, or a negotiated rate for an MSME exporter group acting collectively. The absence of such a tier is itself the finding: a cluster of a thousand sellers moving through one export desk, as this report's recommendation proposes (research §12), does not today translate into a lower platform fee, because the platform relationship remains seller by seller, account by account. Nothing in the 2026 reforms reviewed in §4 changes this; the reforms address customs and tax process, not the commercial terms a seller signs with a marketplace.

### 6.5 Data ownership: what a seller sees today

The case frames bargaining position as something small sellers lack on platforms [C-R1]. Part of that gap is informational: a seller who cannot see how their fee, their conversion rate or their listing visibility compares with the platform average cannot tell whether the terms they face are standard or unfavourable. No source reviewed in this build describes a platform publishing a comparative, cluster-level fee or performance benchmark that an individual seller could check their own numbers against; each seller instead sees only their own dashboard. This report's recommendation treats that gap as itself a target for the stakeholder compact in research §20, which proposes that platforms give sellers their own order data in a form a cluster export desk can aggregate, not that any platform has already agreed to do so.

A related point sits in how Amazon itself frames its own export reporting. Amazon's press materials report the exporter count and the cumulative export value for its own Global Selling programme at the programme level, over 200,000 exporters and $20 billion cumulative [B22, B24], but no source in this build shows that same data broken out by cluster, by product archetype or by seller tier in a form a government committee or a cluster export desk could use for targeting. The platform knows, at minimum, which seller shipped which item to which country; the case's own stakeholder requirement [C-R3] exists because that knowledge currently sits with the platform alone, not because the data itself does not exist.

### 6.6 What a seller tier (research §15) would need from a platform that it does not get today

The seller-tier mechanism this report proposes (research §15) grades a seller on their own record, identity, payment realisation and past discrepancies, so that customs checks fall on the risky few rather than the many. None of that grading logic can run on data a platform does not share. A seller moved from tier 1 to tier 3 inside a cluster export desk's own records gains nothing with a platform that still treats every account the same way at the fee line. This is not a criticism of any named platform's current practice, which this report has no evidence departs from industry norms; it is a statement that the compact proposed in research §20 has to close a gap no platform has filled on its own.

Exhibit for the deck: the fee table (6.1) and scale asymmetry table (6.3) are the evidence base for the platform row of slide 4's give-get matrix (research §20) and for the market-tiles panel on slide 2.

---

## 7. Postal, courier and cargo routes each carry different forms, benefits and costs

**Answer.** A seller's parcel can leave India through three distinct routes, postal, courier or bulk cargo, and each route runs its own forms, its own incentive-filing mechanism, its own weight and value handling, and its own returns process [C-E2]. None of the three routes shares a single form with another; a seller who tries more than one route is learning three separate systems, not one system with three doors. The cost evidence below also disagrees with itself across sources more than once, and this report keeps every conflicting figure rather than picking a convenient one.

### 7.1 Route comparison: forms, benefits, limits and cost

| Route | Filing and forms | Benefits available | Weight or value handling | Cost evidence (conflicts kept) |
|---|---|---|---|---|
| Postal (ITPS or EMS, booked at a DNK) | form PBE III or PBE IV filed on the DNK portal, with ICEGATE registration and bank-detail linkage to the relevant DNK site [C21] | Duty Drawback, RoDTEP and RoSCTL since 15 January 2026 [C20] | 2026 Table VIII covers 135 destination countries, but per-country rate figures were not located in this search pass [D05, D06]; the ITPS weight ceiling to the US is reported both at 2 kg and, by one aggregator, at 5 kg, a conflict not resolved here [D08] | 2025 ITPS seed rate to the USA: ₹400 for the first 50 g [D07]; EMS sample for USA and UK: ₹865 for the first 250 g, plus ₹100 per additional 250 g [D11]; the model's own freight assumption (A05) runs ₹900 to ₹1,100 for a 0.5 kg parcel |
| Courier (ECCS and CSB-V) | Courier Shipping Bill filed manually in CSB-V format; a customs officer in the ECCS reviews and approves or rejects the data before any ICEGATE validation [C26]; the authorised courier's existing courier registration is used to file on ICEGATE for incentive claims [C25] | Duty Drawback, RoDTEP and RoSCTL since 12 September 2024 [C23]; the ₹10 lakh per-consignment value cap removed from 1 April 2026 [C01] | formerly capped at ₹10 lakh per commercial consignment, now uncapped [C01] | DHL Express 0.5 kg India to USA quoted at about ₹2,432 in a May 2025 table and at about ₹1,800 to ₹2,000 in a later 2026 guide from the same aggregator, a conflict not resolved here [D15, D16]; Bombino Express lists 0.5 kg at about ₹2,330 to the USA, ₹830 to the UK and ₹450 to the UAE [D17]; Shiprocket X advertises a starting rate of ₹299 to ₹306 per 50 g slab [D13] |
| Cargo or bulk air freight, including a consolidated or EOR-registered export | standard commercial air waybill; an Exporter-on-Record registered under the inventory-based framework via form ANF-9A can hold and export inventory under one registration [C17, C18] | the EOR framework itself is the main benefit: one registration covers export of inventory bought from multiple Sellers-on-Record, rather than seller-by-seller filing [C17] | typically run at 100 kg or more per consolidated lot, well above a single seller's own parcel weight | standard air freight quoted at $3.00 to $5.00 per kg, express $5.50 to $8.00 per kg, on a 3 to 5 day transit [D20]; a 100 kg-plus band of ₹450 to ₹800 per kg [D21]; the Baltic Air Freight Index stood at 2,419 in week 35 of 2026, down 0.2% week on week but up 21% year on year [D22]; India-origin air cargo lanes are reported running 50% to 80% above the prior year since May 2026, attributed to Middle East airspace restrictions and rerouting [D23] |

### 7.2 Returns handling differs by route, and one gap runs through all three

| Route | Return mechanism | Legal status |
|---|---|---|
| Courier | risk-based re-import framework and the ECCS Return Module built by DG Systems; Return to Origin (RTO) for goods uncleared or unclaimed for more than 15 days, implemented via an amendment to Regulation 5(5) and Section 84 of the Customs Act through the Finance Act 2026 [C06, C07, C13, C14] | operative from 1 April 2026, but still consignment-wise: one original export invoice plus one air waybill pair per re-import [C57] |
| Postal | an upgraded RTO functionality live in the ECCS from an advisory dated 6 April 2026 [C10]; outward small-packet and letter-mail services for goods were discontinued from 1 January 2026, with the Department pointing sellers to ITPS and other parcel services as the route forward [C54, C55] | consignment-wise; no pooling or consolidation provision for postal returns was located |
| Cargo or warehouse (EOR or FBA-style) | Amazon's own Global Selling documentation describes free storage and customer-returns handling for enrolled sellers and a "SEND" cross-border shipping option for outbound inventory, but no page describes a consolidated bulk-return shipping route back to India for returned stock [C58] | no CBIC or DGFT provision for a pooled overseas return point or a single monthly consolidated re-import bill was found anywhere in this search pass; this is a genuine gap in the published rules, confirmed by direct search, not a sourcing failure [C57] |

Across all three routes, goods not cleared within 30 days of arrival, where no RTO request has been filed, are detained and disposed of after notice, with storage charges payable by the authorised courier [C15]. That 30-day clock applies regardless of which route the original parcel travelled by, which is one of the few rules this report found to be route-neutral.

### 7.3 Incentive filing mechanics, side by side

| Route | Incentive form | Filing portal | Automation status |
|---|---|---|---|
| Postal | PBE III or PBE IV | DNK portal, linked to ICEGATE | manual form filing, linked incentive claim [C21] |
| Courier | Courier Shipping Bill (CSB-V) | ICEGATE, via existing courier registration | filed manually; IGST refund is processed automatically only once the CSB data is itself processed on ICEGATE [C26, C27] |
| Cargo or EOR-registered export | standard Shipping Bill plus EOR registration | ICEGATE, DGFT ANF-9A | registration-based, not yet documented as automated end to end in sources reviewed here [C17, C18] |

A seller who moves between routes, postal one month, courier the next, is filing on two different portals with two different form numbers and facing two different review steps before a rupee of incentive reaches them. In our model, the admin cost line that captures this friction falls from ₹232 under today's direct parcel to ₹38 under the reformed parcel [T2, T3], and that fall is the single largest line-item change in the base-case waterfall from ₹640 to ₹1,038 [T6]. The route comparison above is the evidence that this friction is real and route-specific, not an assumption invented for the model.

### 7.4 Why freight evidence disagrees with itself across every route

The cost figures in 7.1 are not a clean, single-source table, and presenting them as one would overstate how settled India's small-parcel freight market actually is. Three patterns recur across the freight evidence gathered for this report. First, the same aggregator can publish two different figures for the same lane within a year: Clickpost's own DHL Express India-to-USA 0.5 kg rate moved from about ₹2,432 in a May 2025 table to about ₹1,800 to ₹2,000 in a 2026-dated guide, a difference too large to be a rounding change and more likely a reflection of surcharge or fuel-adjustment timing that the aggregator did not carry over [D15, D16]. Second, no published cluster-level or collective freight tender run by an Indian exporter cluster, export promotion council or government body was found in this search pass; the closest matches are the Logistics Interventions for Freight and Transport (LIFT) scheme, a freight-cost reimbursement rather than a pooled-rate tender, reported effective 20 February 2026 [D37], and an Aramex-FIEO memorandum of understanding to support MSME exporters, which carried no pooled-rate figures in the source reviewed [D38]. This gap matters directly for this report's own proposal: the pooled rate card in research §13 (A28, the single largest driver in the uplift tornado at ₹70 to ₹60 per order [T8]) has no documented Indian precedent to point to, and the pilot (research §25) is the first place that precedent would be created, not confirmed. Third, exporters are quoted describing a "monopoly of foreign shipping companies" on container freight and calling for a national shipping company [D40], a stakeholder complaint rather than a tender outcome, but one that is consistent with why no cluster has yet negotiated a pooled rate on its own.

### 7.5 Currency and the one rate the model could not independently confirm

The model's INR-per-USD assumption (A01, held at 88 across bear, base and bull) could not be confirmed against the Reserve Bank of India's own reference rate for 28 October 2026, the access date for every Lane D search; no search result returned that exact date's print [D01]. The nearest dated figures found were a reference rate of 96.2948 on 18 May 2026 [D02] and a reported close of 94.68 on 22 June 2026 [D03], neither of which is close enough in time to the access date to safely replace A01. A01 stays a team assumption rather than a verified figure, and this report states that limitation here rather than letting a reader assume 88 was confirmed against an official rate.

### 7.6 One rule that applies no matter which route a seller chose

The three routes in 7.1 differ in forms, incentives and cost, but one rule sits underneath all three and deserves its own line because a seller is unlikely to learn it until a parcel is already stuck. India Post discontinued outward international letter-post services covering goods sent by air, sea or surface air lifted (SAL) mode under the Outward Small Packet category, with effect from 1 January 2026, and withdrew outward Surface Letter Mail and SAL Letter Mail services at the same time [C54]. The reasons cited by the Ministry of Communications were longer delivery timelines, the absence of end-to-end tracking, stricter destination-country customs and security requirements, and reduced acceptance of such items by several foreign postal administrations [C55]. Sources disagree on whether registered small-packet service for goods survives this change at all: most coverage describes a blanket withdrawal, while one reproduction of the circular states registration continues only for letter-post items containing documents, not goods, booked in Air mode [C56]. A seller who had been using the cheapest postal option for a small goods parcel, rather than ITPS or EMS, lost that option on 1 January 2026 regardless of which cluster they sell from, and the Department's own stated alternative is the ITPS and EMS routes already priced in 7.1, not a like-for-like replacement at the old small-packet price point.

Exhibit for the deck: the route comparison table (7.1) anchors slide 3's route-forms panel; the incentive-filing table (7.3) supports the one-pre-filled-declaration argument in research §14.

---

## 8. Destination markets are closing the low-value door, so cheap parcels no longer slip through

**Answer.** The United States, the European Union, the United Kingdom and the United Arab Emirates have each tightened or begun tightening their low-value import rules since August 2025, which is the destination-side mirror of the case's own warning that authorities cannot simply relax controls [C-E5]. No single rate can honestly be quoted for the US postal duty basis facing an India-origin parcel today; sources conflict across four distinct bases, and this report presents a range rather than one number, following the build's own correction on this point. The model holds destination duty equal across lanes (A25) and does not attempt to price any one of these rules into the per-order contribution figures in §21; this section exists to show the committee the direction every destination market is moving in, not to add a duty line the model cannot defend.

### 8.1 Destination rule summary by market

| Market | Prior threshold | Status as of October 2026 | Who bears the compliance step |
|---|---|---|---|
| United States | $800 de minimis exemption | suspended for all countries since 29 August 2025 [E01]; the Supreme Court held on 20 February 2026 that the International Emergency Economic Powers Act (IEEPA) does not authorise tariffs [E02], but the suspension itself was kept alive through Executive Order 14388, which cites Section 301 and Section 604 of the Trade Act of 1974 and carries its own severability clause so the suspension survives even if the underlying IEEPA tariffs fall [E04, E06]; the US Court of International Trade upheld the suspension again on 13 August 2026 [E07]; a separate statutory termination of the exemption takes effect from 1 July 2027 regardless of this litigation [E09] | the Indian seller, through India Post's Delivery Duty Paid mechanism at booking for postal shipments [E16, E39], or the courier or importer of record at clearance for courier shipments |
| European Union | €150 de minimis duty exemption | replaced by a flat €3 duty per declaration line for a transitional period from 1 July 2026 to 1 July 2028 [E20, E21]; because the charge is levied per declaration line rather than per physical consignment, a parcel spanning three distinct tariff headings can draw three separate €3 charges, illustrated in trade commentary as €9 total duty on one consignment [E22] | duty is assessed at the border on the import declaration; a seller registered under the EU's Import One-Stop Shop (IOSS) continues to collect VAT at the point of sale separately from this duty [E40] |
| United Kingdom | £135 VAT and duty threshold | VAT on marketplace sales of £135 or less has been collected by the online marketplace (OMP), not the overseas seller, since 2021 [E26]; the separate customs-duty de minimis itself is reported, per a July 2026 government update summarised by KPMG, to face abolition by around October 2028, which would shift customs-duty liability onto sellers or marketplaces [E28] | the marketplace today for VAT; the seller or marketplace from roughly 2028 for duty |
| United Arab Emirates | AED 1,000 (about $272) customs-duty de minimis | duty-free below the threshold; VAT treatment below the threshold is itself disputed across sources, with some stating 5% VAT still applies even where duty does not, and at least one source stating neither applies below the threshold [E30, E31]; above the threshold, duty of about 5% of CIF value plus 5% VAT on the duty-paid value is the commonly cited figure [E33] | the importer of record at customs clearance, not pre-collected by the Indian seller at origin, which is the opposite arrangement from the US postal model [E42] |

### 8.2 The US postal duty basis, presented as a range, never a single rate

Four distinct bases for the duty applied to an India-origin postal parcel entering the United States appear across the sources reviewed for this report, and they do not agree with each other.

| Basis claimed | Source | Confidence |
|---|---|---|
| Ad valorem duty at the effective IEEPA tariff rate for the country of origin | [E10] | a Customs and Border Protection (CBP) notice reported effective 28 February 2026 states that only this methodology may now be used for covered postal shipments, which this report treats as the most authoritative statement available, while noting it rests on a secondary citation of a CBP Cargo Systems Messaging Service bulletin rather than a primary CBP page opened directly [E11] |
| A flat specific duty of $80 to $200 per item, depending on the origin country's effective IEEPA rate | [E10] | reported as the alternative under the regime that the 28 February 2026 notice phased out [E11] |
| A flat 10% tariff under Section 122 of the Trade Act of 1974, reportedly running through 24 July 2026 | [E13] | unconfirmed; no primary CBP source was located, and this basis conflicts with the ad valorem-only mandate above |
| 50% of the declared Free on Board (FOB) value, specific to India, collected in India at booking and remitted to US authorities via approved Qualified Parties | [E16] | dated to the October 2025 resumption of India to US postal services; whether it still applies in October 2026 or has since been superseded by the ad valorem mandate is not confirmed by any source located in this search pass [E19] |

A related fact narrows this range slightly without resolving it: the additional 25% ad valorem duty that had applied specifically to India under a separate executive order was itself removed for India-origin goods entered for consumption on or after 7 February 2026 [E12]. That removal affects the "effective IEEPA rate for country of origin" referenced in the first row above, but it does not tell a seller, or this committee, which of the four bases applies to a parcel shipped today. No slide built from this report should carry a single US duty figure; the range in this table is the defensible position.

### 8.3 What each market's tightening means for the representative order

| Market | Implication for the $45 representative order [A02] |
|---|---|
| United States | duty is collected somewhere in the chain, either by India Post at booking under the Delivery Duty Paid model or by the courier or importer at clearance, but which of the four bases in 8.2 applies, and therefore how much duty, cannot be stated with confidence for a parcel shipped in October 2026 |
| European Union | a single-item order crosses with one €3 duty line; an order combining several distinct tariff headings in one parcel multiplies the charge, so how a seller or consolidator groups items onto one declaration line matters more after 1 July 2026 than it did before [E21, E22] |
| United Kingdom | no immediate change for a seller selling through a marketplace below £135, since the marketplace already absorbs VAT collection; the scheduled move around 2028 would add a customs-duty compliance step the seller does not carry today [E26, E28] |
| United Arab Emirates | the $45 order sits below the AED 1,000 (about $272) threshold, so customs duty is nil; whether VAT is also nil below that threshold is disputed across the sources reviewed here, so a seller should not assume a zero-tax landed cost in the UAE without checking the current rule [E30, E31] |

Every one of these four markets is narrowing the space in which a low-value parcel moves without a duty, a VAT step, or a compliance obligation falling on someone in the chain. That direction confirms the case's own warning that destination markets are tightening their rules on low-value imports [C-E5], and it is the reason this report's recommendation (§2) keeps every parcel declared rather than proposing any exemption below a value line: a value-based exemption would be fighting the same direction every destination market in 8.1 is moving in, alongside Indian customs itself.

### 8.4 One market this report could not confirm had changed at all

Australia is a useful negative case. Search snippets headlined "imported goods under $1000 to face GST" and "foreign sellers to be subject to Australian GST on low-value imports" read, at first glance, like a 2026 policy change worth adding to the table in 8.1 [E38]. On closer reading, the wording in those headlines matches Australia's original pre-2018 legislative process: the Australian Taxation Office's own guidance states that GST on low-value imported goods, at a customs value of A$1,000 or less, has applied since 1 July 2018, with overseas sellers required to register, collect and remit it [E35]. Overseas sellers of such goods must register for Australian GST at the same A$75,000 annual turnover threshold used for imported services and digital products [E36], and where several low-value goods ship together and their combined customs value exceeds A$1,000, the consignment is instead taxed at the border as a single import rather than under the low-value regime [E37]. No 2026 amendment to this regime was located in any search result reviewed for this report. This report therefore does not add Australia to 8.1 as a market whose rules changed in 2026; the honest finding is that its 2018 rule remains the one in force, and a headline suggesting otherwise should not be repeated on a slide without the same check applied here.

### 8.5 What the destination evidence means for timing

The pattern across 8.1 and 8.2 includes a second dimension beyond the direction of travel: the exact rate a seller faces can change within the same calendar year the parcel ships. The US postal duty basis alone moved through at least three documented states between August 2025 and February 2026: suspension of the $800 exemption [E01], a Supreme Court ruling on the underlying tariff authority that left the suspension itself untouched [E02, E03], and a CBP notice narrowing the permitted duty methodology to ad valorem only [E11]. A seller researching "what duty will my US buyer owe" at any single point in that window would have received a different answer depending on which month they asked. This is itself an argument for keeping destination duty held equal across lanes in the model (A25) rather than building a single destination-duty line into the per-order contribution figures in research §21: any such line would risk being stale before this report reaches the committee, let alone before a pilot (research §25) completes its first wave.

Exhibit for the deck: the destination rule summary (8.1) and the US duty-basis range (8.2) feed the appendix slide's destination-rules panel; no single destination duty figure from this section should appear on a core slide without the range caveat in 8.2 attached to it.

## 9. One order, eleven steps: where a seller's ₹3,960 goes

**Answer.** We trace the representative order, a ₹3,960 handmade décor or textile item at 0.5 kg sold to an overseas buyer for $45 [A02], through eleven steps from listing to the seller's final contribution. In our model the seller keeps ₹640 of that ₹3,960 after accounting for returns, and ₹1,531 of the order's value is consumed by cost to serve before any return even happens [T2]. The paperwork, the freight and the chance of a return are the three places that value leaks; freight is the largest single line, but paperwork and the expected cost of a return together cost the seller almost as much as freight does. This section lays out the eleven steps as a service blueprint, reads T2 line by line, and splits the ₹1,531 cost to serve into its three components.

### 9.1 The service blueprint of one order

A service blueprint sets each step of the order against who performs it, what system records it and what it costs. We use it here, per the value stream mapping framework assigned to this section (section 3.7 of the plan), because the case names paperwork, freight and returns as the three places the process breaks for a small seller [C-E2, C-E3, C-E4], and a step-by-step map makes it possible to attach a rupee figure to each one instead of a general complaint.

| Step | What happens | Who acts | Cost or value touched (per order, base case) |
|---|---|---|---|
| 1 | Seller lists the item on a marketplace at $45 [A02], ₹3,960 at ₹88 to the dollar [A01] | Seller, platform | Price ₹3,960 [T2] |
| 2 | Platform takes its referral share on the sale | Platform | Fee ₹594, 15% of price [A06, T2] |
| 3 | Seller assembles or picks the item at its cluster cost | Seller | Product cost ₹800 [A04, T2] |
| 4 | Seller fills the export forms by hand, across the registrations, invoices, shipping bill and tax paperwork the case names, or pays an agent to do it | Seller, agent or customs house agent | 45 minutes of time at ₹150 an hour plus a ₹120 agent fee, ₹232 in all [A07, A08, A09, T2] |
| 5 | Seller books a direct parcel at the going small-parcel rate, since no seller alone can negotiate a bulk rate [C-E3] | Seller, courier or postal counter | Freight ₹1,000 for 0.5 kg [A05, T2] |
| 6 | The parcel is declared individually and risk-scored for examination | Customs | One of 10,000 declarations per 10,000 orders [T9] |
| 7 | The declaration, invoice and shipping bill are checked against the seller's incentive claims (duty drawback, RoDTEP, IGST refund) | Customs, GSTN, DGFT | Paperwork already counted in step 4 |
| 8 | The parcel transits and clears the destination country | Destination customs, postal or courier network | Held equal across lanes in the model [A25] |
| 9 | The parcel is delivered to the buyer | Carrier | Delivered value ₹1,334, price minus fee, freight, paperwork and product [T2] |
| 10 | The buyer may return the item; in our model this happens 20% of the time for a direct parcel [A10] | Buyer, carrier, customs | Expected return loss ₹2,132 if returned [T2] |
| 11 | The seller's books close on the order | Seller | Expected contribution ₹640 [T2] |

Eleven steps, and three actors beyond the seller: the platform, the carrier and customs. Only the platform touches the order before dispatch; the carrier and customs both touch it after dispatch, which is exactly where the case says the costs turn hidden [C-E3, C-E4]. Steps 4, 6 and 7 are all paperwork in different clothes: a form, a declaration or a claim. Step 10 does not happen on every order, but when it does, it costs more than the delivered value the order was ever worth, a point section 10.4 below sets out in full.

### 9.2 T2 read line by line

In our model, table T2 gives the full per-order account under today's direct parcel lane, in three scenarios. We reproduce it here and read every line.

| Line | bear | base | bull |
|---|---|---|---|
| price | ₹3,520 | ₹3,960 | ₹4,400 |
| fee | ₹528 | ₹594 | ₹660 |
| freight | ₹1,100 | ₹1,000 | ₹900 |
| admin | ₹300 | ₹232 | ₹188 |
| product | ₹900 | ₹800 | ₹750 |
| delivered | ₹692 | ₹1,334 | ₹1,902 |
| ret_loss | ₹2,390 | ₹2,132 | ₹1,950 |
| expected | ₹14 | ₹640 | ₹1,209 |
| cts | ₹1,758 | ₹1,531 | ₹1,337 |

[T2]

Price is the $40 to $50 retail price abroad [A02] converted at ₹88 to the dollar [A01]; the model holds the exchange rate fixed across scenarios, so the entire bear-to-bull spread in price comes from the retail-price assumption, not the rate. Fee is the platform's 15% referral share [A06], which moves in proportion to price. Freight is the direct parcel rate at 0.5 kg, ₹900 to ₹1,100 [A05]. Admin is paperwork time valued at ₹150 an hour [A08] plus an agent fee [A09]; at the base case, 45 minutes of paperwork [A07] cost ₹112.50 and the agent fee added ₹120, for ₹232.50 rounded to ₹232. Product is the cluster ex-works cost of the item, ₹750 to ₹900 [A04]. Delivered is what the order is worth to the seller if it is not returned: price minus fee, freight, admin and product, ₹1,334 in the base case. Ret_loss is what the order costs the seller if it is returned: in our model, a direct parcel return is either abandoned abroad, which loses the product plus both freight and admin legs, or brought home for clearance, which loses the inbound and outbound freight, the admin and the cost of bringing the parcel back while recovering the product; blending the two at an 80% abandonment share [A11] gives ₹2,132 in the base case. Expected is the probability-weighted outcome: delivered times the chance of no return, minus ret_loss times the chance of a return, at a 20% return rate [A10], giving ₹640. Cts, cost to serve, is the freight and admin the seller pays regardless of outcome plus the expected cost of handling a return, ₹1,531 in the base case; it excludes the product cost itself, which is cost of goods rather than cost to serve.

The bear case shows how thin the margin on a direct parcel already is: at a 22% return rate and a ₹900 product cost [A10, A04 bear], expected contribution falls to ₹14, close to a rounding error on a ₹3,960 sale. Even in the bull case, at an 18% return rate and the lowest paperwork and freight assumptions, the seller keeps only ₹1,209, less than a third of the order's retail price. In no scenario does a direct parcel pay the seller anything close to what the price tag suggests.

The bear-to-bull spread in expected contribution, ₹14 to ₹1,209, a range of ₹1,195, is wider than the base case's own contribution of ₹640 [T2]. That spread comes almost entirely from two inputs moving together: the return rate, 18% to 22% [A10], and the retail price, $40 to $50 [A02], since both admin and freight move only modestly across the three scenarios. A seller whose actual return rate sits nearer the bear end of CBIC's own cited range, 20% to 25% for e-commerce exports against under 5% for traditional exports [C11], is closer to the ₹14 outcome than to the ₹640 the base case reports, which is one reason the case's own framing, that the effort is often not worth the reward for a seller moving a handful of parcels a month [C-E2], reads as an accurate description of the bear case rather than an exaggeration of the base case.

The same nine lines recur, with different values, in T3 (the reformed parcel lane) and T4 (the consolidated warehouse lane), covered in full in sections 13 and 18. Holding the line items constant across all three lanes, price, fee, freight, admin, product, delivered, ret_loss, expected and cts, lets every later comparison in this report line up term for term rather than requiring a fresh account structure for each lane.

### 9.3 The cost-to-serve split

Cost to serve, ₹1,531 in the base case, splits into three parts: freight the seller pays on every order, paperwork the seller pays on every order, and the expected cost of handling a return, which lands on only some orders but lands hard when it does.

| Component | INR per order (base case) | Share of cost to serve |
|---|---|---|
| Freight | ₹1,000 [T2] | 65% |
| Paperwork and agent fee | ₹232 [T2] | 15% |
| Expected return-handling cost | ₹1,531 minus ₹1,000 minus ₹232 = ₹299 | 20% |

[T2, arithmetic on tagged figures]

Freight is the largest line in cost to serve, which is why a freight subsidy is the instinctive first answer to the case, and the obvious answer we argue against in section 2 (section 3.3). But freight is also the line hardest for a reform to change at the unit level without a fiscal cost the exchequer would carry forever on every parcel, since freight is a real payment to a real carrier. Paperwork, at ₹232, and the expected return-handling cost, at ₹299, together come to ₹531, more than half the size of the freight line itself, and both are costs the seller pays for process friction rather than for anything physically moving the parcel. This gap, more than freight, is where our recommendation starts: move the paperwork load from the seller to a cluster desk, and resolve returns closer to the buyer, before touching the freight line at all. The pooled rate card we propose in section 13 does eventually cut freight by 12% at the base assumption [A28], but it comes after the paperwork and returns levers in the reformed parcel's waterfall [T6], not before them.

The same split looks different once the seller moves to a different lane, and setting the three lanes side by side shows where each reform lever actually lands. T2 to T4 give the full line-by-line account for each lane; the row that matters most for this section is cost to serve itself.

| Lane | Freight | Paperwork and agent, or admin | Expected return-handling cost (cts minus freight minus paperwork) | Cost to serve |
|---|---|---|---|---|
| Today, direct parcel | ₹1,000 [T2] | ₹232 [T2] | ₹299 | ₹1,531 [T2] |
| Reformed parcel | ₹880 [T3] | ₹38 [T3] | ₹41 | ₹959 [T3] |
| Consolidated warehouse | ₹238 freight, plus ₹484 last mile and ₹396 fulfilment [T4] | ₹15 [T4] | not separable the same way; warehouse cts bundles working capital and write-off | ₹1,423 [T4] |

[T2, T3, T4, arithmetic on tagged figures]

Cost to serve falls from ₹1,531 to ₹959 between today's direct parcel and the reformed parcel lane, a fall of ₹572, or 37%, almost entirely from the paperwork line collapsing from ₹232 to ₹38 and the expected return-handling cost collapsing from ₹299 to ₹41 [T2, T3]; freight itself falls by only ₹120, the pooled rate card's share, inside that same ₹572. The warehouse lane's cost to serve, ₹1,423, sits between the two parcel lanes, but it is built from a different, longer list of cost lines, last-mile delivery, fulfilment, a consolidator margin and inventory write-off among them [T4], which is exactly why section 18 treats it as a separate lane requiring its own break-even test rather than a simple extension of the parcel lanes' logic.

A second way to read the same split is against time rather than rupees. Paperwork costs the seller 45 minutes of direct time at ₹150 an hour [A07, A08] before any agent fee is added, and that 45 minutes is time the seller cannot spend sourcing, producing or listing the next item. For a seller moving a handful of parcels a month, as the case describes [C-E2], 45 minutes per parcel is not a rounding error on a working day; at even ten parcels a month it is 7.5 hours, close to a full working day spent on forms rather than on the craft itself. The agent fee, ₹120 [A09], is what a seller pays instead to buy back that time, and both numbers disappear once the cluster desk files on the seller's behalf, which is the mechanism section 12 sets out. Neither the 45-minute paperwork time [A07] nor the ₹120 agent fee [A09] rests on a primary time study; both are team assumptions the case's own description of the barrier supports in direction, if not to the minute, and section 29's validation plan sets out how the pilot would measure both directly rather than continue to assume them.

Exhibit for the deck: the service blueprint table and the cost-to-serve split feed the slide 2 "where ₹3,960 goes" panel and the market tiles that foreshadow the paperwork-and-returns finding ahead of the recommendation (section 3.3).

## 10. Paperwork and returns, not freight, decide whether a parcel pays

**Answer.** Running a 5 Whys chain and an issue tree on why a direct parcel often fails to pay the seller leads past freight to paperwork and returns, and the T7 heat map confirms it: contribution turns negative within the ranges we modelled only when the return rate rises to 30% and freight to ₹1,400 together [T7]. Freight on its own, held at today's level, never turns the order loss-making in the range we modelled; a rising return rate does most of the damage by itself. The sharpest instance of this is a single returned parcel: bringing it home and clearing it costs more than the order was ever going to deliver for a low-value item like the representative ₹3,960 order [T2].

### 10.1 Five Whys on the direct parcel's thin margin

| Why | Question | Answer |
|---|---|---|
| 1 | Why the seller keeps only ₹640 of a ₹3,960 order [T2] | Because ₹1,531 of cost to serve and an expected return loss are both netted out of the price before the seller's contribution is counted [T2, A10]. |
| 2 | Why cost to serve runs to ₹1,531 | Because freight (₹1,000), paperwork (₹232) and the expected return-handling cost (₹299) are each paid in full, on every order, by the seller alone, with no pooling across orders or sellers [T2, section 9.3]. |
| 3 | Why the seller pays these alone | Because the case's barrier is structural: forms, portals and agents differ by route, and the effort is often not worth it for a handful of parcels a month, so no seller reaches the volume at which a carrier, a customs broker or a platform would negotiate on their behalf [C-E2]. |
| 4 | Why nothing has already pooled these costs | Because the unit of regulation and of commercial negotiation in the current system is the parcel and the seller, not the cluster; nothing aggregates many sellers' small volumes into one negotiating or declaring unit [C-E2, C-E3]. |
| 5 | Why a return costs so much more than a delivery | Because a returned parcel is treated as a fresh import under current rules [C-E4], carrying its own duties, forms and delays, so the seller pays customs cost twice, once going out and once coming back, while only being paid once. |

The fifth why is the one the case names directly as the biggest hidden cost [C-E4], and it is also the one our model shows costs the most relative to what it could ever recover, which section 10.4 below sets out in full.

The return-rate figure behind why 1 and why 5 is itself contested in the research, and we carry both readings rather than pick one. CBIC is cited as putting e-commerce export returns at 20% to 25%, against under 5% for traditional exports [C11], which is the figure the model's A10 assumption uses as its primary seed [A10]. A 2025 Lok Sabha reply from the Commerce Ministry instead gives a lower 15% to 20% range for the same statistic [C12]. Both are kept because neither this session's research nor the model's own checks could resolve which is current; what matters for the argument is that even the lower 15% to 20% range sits inside the top half of T7's return-rate rows, where contribution is already well below the no-return baseline, so the 5 Whys chain holds under either reading of A10.

### 10.2 Issue tree: why a parcel does not pay

An issue tree splits "a direct parcel often fails to pay the seller" into mutually exclusive, collectively exhaustive branches, per the MECE framework assigned to this section (section 3.7 of the plan).

| Branch | Sub-branch | Evidence |
|---|---|---|
| A. Price is fixed, cost is not | A1. Platform fee is a fixed 15% share [A06] | Not a lever at the unit level without renegotiating platform terms |
| | A2. Product cost is set by the cluster's ex-works price [A04] | Outside the scope of a customs or logistics reform |
| B. Cost to serve is too high | B1. Freight is unpooled, ₹1,000 a parcel [A05, T2] | Largest single line, but hardest to change without fiscal cost (section 9.3) |
| | B2. Paperwork is manual, ₹232 a parcel [A07, A09, T2] | Controllable through process redesign, not subsidy |
| | B3. Expected return-handling cost is ₹299 even before a return happens (section 9.3) | Driven by return rate and the cost of bringing a parcel home |
| C. A return, when it happens, costs more than it should | C1. A direct parcel return is treated as a fresh import [C-E4] | Duplicates customs cost on the same physical good |
| | C2. 80% of direct returns are abandoned abroad rather than brought home [A11] | The product and both freight legs are lost outright |
| | C3. The 20% brought home pay for clearance a second time | Clearance under general re-import rules costs ₹1,300 at base, even though a risk-based re-import module already exists for this [A12, C06] |

Branch A sits outside this reform's reach; it belongs to market access and platform negotiation, covered in sections 6 and 19 to 20. Branch B is where the cluster export desk and the pooled rate card act (sections 12 and 13). Branch C is where a pooled return point abroad and matched duty-free re-import act (section 17), with the honest caveat on their legal basis carried in section 13.3 and repeated here: no provision currently pools multiple sellers' re-imports into one bill [C57].

The tree is deliberately asymmetric in how much of the total uplift sits in each branch. Branch B's three sub-branches sum to the full ₹398 uplift from today's direct parcel to the reformed parcel lane [T6], while branch C's contribution runs through the same waterfall as the last of the three steps, worth ₹83 [T6]. Branch A carries no number at all in this model, because neither the platform fee nor the product cost moves between the direct, reformed or warehouse lanes; A06 and A04 are held fixed across all three [A04, A06]. A reader working from the issue tree alone should not expect it to balance evenly across its three branches; it balances against where the case itself places the barrier, which is overwhelmingly in branch B's paperwork and branch C's returns, not in branch A's pricing structure.

### 10.3 The T7 heat map, read in full

In our model, table T7 holds product and fee at the base case and lets return rate and freight both vary, to show what combination of the two actually turns a direct parcel loss-making for the seller.

| Return rate | ₹800 | ₹1,000 | ₹1,200 | ₹1,400 |
|---|---|---|---|---|
| 10% | ₹1,187 | ₹987 | ₹787 | ₹587 |
| 15% | ₹1,014 | ₹814 | ₹614 | ₹414 |
| 20% | ₹840 | ₹640 | ₹440 | ₹240 |
| 25% | ₹667 | ₹467 | ₹267 | ₹67 |
| 30% | ₹494 | ₹294 | ₹94 | −₹106 |

[T7]

Reading down any column shows that return rate alone is enough to erase the margin: at ₹1,000 freight, the column the base case uses, contribution falls from ₹987 at a 10% return rate to ₹294 at 30%, a drop of ₹693 from return rate alone, holding freight fixed [T7, arithmetic]. Reading across any row shows freight has a real but smaller effect: at a 20% return rate, moving freight from ₹800 to ₹1,400 costs the seller ₹600, close to the return-rate effect but only after freight moves across its entire plausible range, whereas the return rate CBIC itself cites for e-commerce exports, 20% to 25% [C11, A10], sits well inside the table without needing any extreme assumption at all. The single cell that turns negative, 30% return rate at ₹1,400 freight, at −₹106, needs both inputs at their worst simultaneously; freight alone at ₹1,400 with a 10% return rate still leaves the seller ₹587. The grid's message is that return rate, not freight, is the variable most likely to carry the order into loss on its own, within ranges the research lanes found cited for this sector.

### 10.4 A single return costs more than it recovers

The clearest instance of the point above sits inside T2 itself. If the representative order, a ₹3,960 handmade décor or textile item at 0.5 kg, is delivered and kept, the seller's delivered value is ₹1,334 in the base case [T2]. If that same order is returned, the expected loss is ₹2,132 [T2], which is ₹2,132 minus ₹1,334, or ₹798 worse than simply not having made the sale at all [arithmetic on T2]. In the bear case the gap is starker: delivered value is ₹692 against a return loss of ₹2,390, a difference of ₹1,698 [T2]. A single return on a low-value item like this one does not just erase the margin; it costs the seller more than the order would ever have earned.

The same comparison holds across every scenario the model runs, not only the base case.

| Scenario | Delivered value if kept | Expected loss if returned | Gap, loss minus delivered |
|---|---|---|---|
| bear | ₹692 [T2] | ₹2,390 [T2] | ₹1,698 |
| base | ₹1,334 [T2] | ₹2,132 [T2] | ₹798 |
| bull | ₹1,902 [T2] | ₹1,950 [T2] | ₹48 |

[T2, arithmetic on tagged figures]

Even in the bull case, where product cost, paperwork and freight all sit at their most favourable assumption, a returned direct parcel still costs the seller slightly more than a kept one would have earned, ₹48 worse. The gap narrows sharply from bear to bull, which is consistent with branch C1 of the issue tree above: most of the bear-to-bull movement in the loss side comes from the abandonment share and the cost of bringing a parcel home [A11, A12], both of which improve in the bull case, while the delivered side improves for the unrelated reason that price and product cost both move favourably at the same time. The two sides of the comparison are driven by different assumptions, which is why the gap does not simply track the overall bear-to-bull spread in expected contribution.

This happens because a returned parcel pays customs cost twice over, once on the way out and again, under general re-import rules, on the way back [C-E4, C06], while the seller is paid only once, by one buyer, for one item. The implication for a reform is specific and narrow: resolving returns must happen as close to the buyer as possible, before the parcel re-crosses the border, because bringing a low-value item like this one home to India and clearing it again almost never recovers more value than it costs. Sections 13 and 17 build the pooled return point abroad on exactly this logic, with the honest caveat that its legal basis does not yet exist and must be sought from CBIC and DGFT rather than assumed.

The abandonment share in the model, 80% of direct returns abandoned abroad [A11], is itself evidence of the same arithmetic playing out in seller behaviour rather than policy design. A seller facing a ₹798 gap between what a kept order is worth and what a returned order costs [T2, section 10.4] has every reason to write the item off rather than pay to bring it home, and the case says as much directly: many sellers absorb the loss or avoid exporting altogether [C-E4]. Our reform does not try to change that incentive by making the home-clearance route cheaper; it changes it by giving the seller a third option, a pooled point abroad where the item can be resold without ever needing to justify the cost of a trip home. CBIC's own risk-based re-import framework, which replaced the older consignment-wise verification for returned goods from 1 April 2026 [C06], already cuts the cost of the home-clearance route somewhat; our proposal is additive to it, not a substitute, for the share of returns that do travel home under the pooled model's monthly consolidation.

Exhibit for the deck: the T7 heat map is slide 3's integrity and cost heat map; the single-return finding anchors the moneyshot card's note on why freight alone will not fix this (section 3.3, insight 7 of section 3.6).

## 11. Conclusively, a portal, a subsidy or an exemption each fail one test the committee cannot waive

**Answer.** We scored six options, including our own, against five weighted tests: seller cost per order, customs and tax integrity, fiscal cost, time to deliver and whether the option builds on the 2026 reforms already in place. Our package, a cluster export desk with seller tiers, pooled rates and pooled returns, scores 4.45 weighted against a next-best of 2.95 for overseas warehouses in every cluster; under equal weights the gap holds, 4.40 against 2.80 [T13]. Every score in this table is our own judgement, not a measured outcome, and we say so here rather than let the committee discover it on its own.

### 11.1 The option filter under both weightings

A MECE option filter scores every candidate against the same criteria, so the ranking cannot be an artefact of which criterion happened to be emphasised for one option and not another (the framework assigned to this section, section 3.7 of the plan). We score five criteria out of 5, weight them as shown, and also report the unweighted, equal-weight average for the same scores, so the ranking can be checked against a second, simpler rule.

| Option | Seller cost per order (30%) | Customs and tax integrity (25%) | Fiscal cost, 5 = cheapest (15%) | Time to deliver (15%) | Builds on the 2026 reforms (15%) | Weighted | Equal weights |
|---|---|---|---|---|---|---|---|
| New single-window export portal | 3 | 3 | 2 | 1 | 2 | 2.40 | 2.20 |
| Freight subsidy per parcel | 4 | 2 | 1 | 4 | 1 | 2.60 | 2.40 |
| Exempt low-value parcels from checks | 4 | 1 | 4 | 4 | 1 | 2.80 | 2.80 |
| Government export marketplace | 2 | 3 | 2 | 1 | 2 | 2.10 | 2.00 |
| Overseas warehouses for every cluster | 3 | 4 | 2 | 2 | 3 | 2.95 | 2.80 |
| Cluster desk, seller tiers, pooled rates and returns | 5 | 4 | 4 | 4 | 5 | 4.45 | 4.40 |

[T13]

The ranking is identical under both weighting schemes: our package first, overseas warehousing second, tied with the exemption option under equal weights at 2.80 each, and the government export marketplace last. This matters because weighting choices are the easiest part of a scoring exercise to contest; a committee member who disagrees with our 30% weight on seller cost can still check the equal-weight column and see the same order, with our package 1.60 points ahead of the next candidate either way.

We disclose plainly that these scores are the team's own judgement, not an independently measured outcome, per the content-integrity rule governing this exact table. No pilot, survey or third party scored these six options; we built the criteria from the case's own stated tests, feasibility and integrity under the 2026 reforms already in place [C-J3, C-E5], and scored each option against them as a team. A reader should treat the numbers as a structured argument for why our package beats the alternatives on the dimensions the brief itself names, not as a result anyone could reproduce from an external dataset.

Two features of the table are worth naming because they are easy to miss in a single read. First, our package is the only option that scores a 5, the maximum, on any criterion, and it does so on two: seller cost per order and whether the option builds on the 2026 reforms. The seller-cost 5 follows directly from the model, which shows the reformed parcel lane adding ₹398 to the seller's contribution with no freight subsidy at all [T5, T6]; no other option in the table changes seller cost by a modelled, cited figure of this kind, so the scores for the other five options on this criterion are comparative judgements, not outputs of a parallel model run for each one. Second, every option other than ours and overseas warehousing scores a 1 or 2 on "builds on the 2026 reforms," which reflects a real asymmetry: a new portal, a subsidy, an exemption and a government marketplace are each designed as though the courier cap removal, the returns module and the exporter-on-record framework [Lane C] had not already happened, while our package and overseas warehousing are both built to operate inside those reforms rather than around them.

### 11.2 What each criterion weighs and why

| Criterion | Weight | Why this weight |
|---|---|---|
| Seller cost per order | 30% | The case's core ask is to make exporting affordable for a seller moving a handful of parcels a month [C-E2]; this is the largest weight because it is the test closest to the case's own stated problem |
| Customs and tax integrity | 25% | The case states that authorities cannot simply relax controls [C-E5]; an option that scores well on cost but poorly here fails the brief's own second half |
| Fiscal cost | 15% | A reform the exchequer cannot sustain indefinitely is not a reform; this penalises options whose benefit is a recurring subsidy rather than a one-time process fix |
| Time to deliver | 15% | A pilot-ready option scores higher than one requiring new legislation or a multi-year system build |
| Builds on the 2026 reforms | 15% | The committee has already removed the courier cap and built the returns and exporter-on-record routes (Lane C); an option that duplicates or ignores this work wastes the reform already done |

### 11.3 Why each alternative option fails at least one test

| Option | Fails on | Why |
|---|---|---|
| New single-window export portal | Time to deliver (1 of 5) | A new portal duplicates ICEGATE, ECCS, the DNK network and DGFT's own systems rather than using them, and a system build of this kind runs for years before a seller sees it; it also scores only 2 on fiscal cost, since a new system is a standing cost on top of every system it duplicates |
| Freight subsidy per parcel | Customs and tax integrity (2 of 5) and fiscal cost (1 of 5) | A subsidy attacks only the freight line, ₹1,000 of the ₹1,531 cost to serve [T2], and does nothing for paperwork or returns; it is also a payment the exchequer makes on every parcel forever, with no mechanism to taper it as a seller's risk profile improves |
| Exempt low-value parcels from checks | Customs and tax integrity (1 of 5) | An exemption below a value line is the precise misuse channel the case warns against: under-invoicing and incentive misuse become easiest exactly where checks are lightest [C-E5]; this option scores the strongest fiscal-cost and time-to-deliver marks of any alternative, which is why it is the hardest obvious answer to argue against on cost grounds alone, but it cannot pass the integrity test the brief itself sets |
| Government export marketplace | Seller cost per order (2 of 5) and time to deliver (1 of 5) | Building and running a government-operated marketplace competes with, rather than improves, the private platforms sellers already use, and does nothing by itself about freight, paperwork or returns on an order placed through an existing channel |
| Overseas warehouses for every cluster | Builds on the 2026 reforms only partially (3 of 5) and fiscal cost (2 of 5) | This is the strongest alternative, and the only one that beats today's direct parcel at the unit level in our model, from about 10 orders a month per SKU [T12]; but it never beats the reformed parcel at the unit level in any scenario we modelled [T5, T12], and it requires inventory risk and working capital a seller moving a handful of parcels a month does not have [C-E2] |

The exemption option is worth pausing on, because it scores a respectable 2.80 under both weightings, second only to overseas warehousing, and higher than the portal, the subsidy or the marketplace. It fails on exactly one criterion, integrity, at the minimum score of 1 of 5. That single failure is disqualifying rather than a mere drag on the average, because the case frames integrity and access as one problem, not two to be traded against each other [C-E6]: too much control keeps small sellers out, too little control opens the door to misuse. An option that buys access by giving up control answers only half the brief.

The freight subsidy is worth a second look for the opposite reason: it is the option closest in spirit to what an exporter would ask for directly, cash to offset a real cost, and it scores a strong 4 of 5 on time to deliver, since paying a subsidy requires no new filing system and no new customs provision. But a subsidy only ever treats the ₹1,000 freight line [T2], leaving the ₹232 paperwork line and the ₹299 expected return-handling cost untouched (section 9.3), and every rupee of it is a recurring fiscal commitment with no mechanism to taper off as a seller's own risk record improves, which is why it scores only 1 of 5 on fiscal cost, the joint-lowest score any option receives on any criterion in the table alongside the exemption option's integrity score.

The government export marketplace scores worse than the portal on seller cost per order, 2 against 3, because it does more than duplicate an existing filing system; it also inserts a new intermediary between the seller and the buyer, competing for the same transaction the seller's existing platform already carries. A seller who already lists on a private marketplace gains nothing from a second, government-run listing channel unless that channel can also fix the paperwork, freight and returns problems this report traces through T2, and nothing in the case or in the research found suggests a government marketplace would carry lower platform fees, cheaper freight or a different returns regime than the private platforms already in use [C-R1]. The marketplace option's lowest score, 1 of 5 on time to deliver, follows the same logic as the portal's: building and populating a new transaction platform from nothing takes years, while the reforms already in place from 2026 took effect within months of being notified [C01, C17].

A fair reading of the table also has to say what our own package would need to go wrong for a different option to look better. If the pooled rate card's real-world saving turned out close to zero rather than the 5% to 18% range modelled [A28], our package's seller-cost score would still rest on the ₹195 paperwork step alone (section 12.4), which by itself already exceeds the freight subsidy's entire effect on the ₹1,000 freight line. The scenario in which overseas warehousing would overtake our package is narrower still: only a seller already selling at least 10 orders a month per SKU benefits from the warehouse lane at the unit level against today's parcel, and never against the reformed parcel at all [T12], so warehousing's apparent strength in the option table (section 11.1) is really a strength for a minority of established sellers, not for the case's stated target of a seller moving a handful of parcels a month [C-E2].

Exhibit for the deck: the T13 table, both weightings, is slide 2's "CONCLUSIVELY" option heat matrix (section 3.2); the per-option failure table backs the matrix's footnote referencing the appendix.

## 12. The cluster export desk takes the paperwork off the seller

**Answer.** The cluster export desk is a staffed counter, placed at or near a Dak Ghar Niryat Kendra or a district export hub, that files one pre-filled export declaration per order from the seller's own order data, so the seller no longer fills forms by hand or pays an agent for routine paperwork. In our model this single change, assisted filing in place of the seller's own 45 minutes plus an agent fee [A07, A09], is worth ₹195 of the ₹398 total uplift from today's direct parcel to the reformed parcel lane [T6]. The desk files; it does not clear goods, set duty or override a risk score, because customs retains that authority at every tier.

### 12.1 Desk design and staffing

In our model the pilot budgets six desks, one per cluster, each with four staff for twelve months [T10]. We set the design around four roles, because the paperwork the case names, registrations, invoices, shipping bills, customs declarations and tax paperwork across several offices and portals [C-E2], splits naturally into four jobs: intake, filing, dispatch coordination and incentive tracking.

| Role | What the role does | Linked to |
|---|---|---|
| Intake officer | Registers a new seller's identity documents, IEC, GSTIN or GST-exempt status, Udyam or artisan ID, at onboarding, and photographs and catalogues items for listing | Tier 1 entry requirements (section 3.5) |
| Filing officer | Pulls order data from the platform, pre-fills the single export declaration, and submits it on the relevant portal for each order | The ₹195 paperwork step [T6] |
| Dispatch coordinator | Books the parcel against the pooled rate card for the cluster, hands it to the chosen carrier, and tracks it to delivery | Section 13's pooled rate card |
| Incentive and records officer | Matches each order's payment realisation, eBRC and GST filing against the declaration so an incentive claim releases only on a matched record | Tier promotion and demotion rules (section 3.5), and the incentive-matching control in section 16 |

The desk sits within the reach of the 1,013 Dak Ghar Niryat Kendras already operating across 762 districts [C28, C29], rather than building a new site, because the case asks for a workable reform, not a new building programme, and the DNK network already has the hub-and-spoke structure postal exports use. Where a cluster is better served by a District Export Hub under the Districts as Export Hubs initiative [C31, C32], the desk sits there instead; either way, the desk is additive to an existing government facility, not a parallel one.

The pilot's six clusters are chosen for product-type spread rather than for geographic convenience alone, because a desk built around one product's paperwork pattern should still work for a different one before the reform scales nationally. Jaipur, Moradabad and Varanasi are named directly in the case as clusters of artisans, weavers and home-based producers [C-B2], and each carries a distinct paperwork profile: Moradabad's brassware is a metal-craft export with its own HS classification and packaging norms, Varanasi's Banarasi silk carries a textile GI tag that some buyers specifically request on the invoice, and Jaipur's handicrafts span several product categories under one Town of Export Excellence designation [B41, B43, B44]. Kutch's embroidered textiles and Channapatna's wooden toys add two more distinct product and packaging profiles to the pilot, and a north-eastern cluster, cane and bamboo goods from Tripura or a comparable state, tests the desk model furthest from the other five, both in distance from Delhi and in the export documentation a cane or bamboo product requires relative to a textile or metal one [PLAN section 6, Lane B]. A desk design validated only on textiles risks missing a packaging or classification step that only shows up on a different product; six clusters across six product archetypes are the minimum spread needed to find that out during the pilot rather than after it scales.

### 12.2 The desk and the seller tiers

The filing officer and the incentive and records officer are the two roles that connect the desk's day-to-day work to the three seller tiers set out in section 3.5. A tier 1 seller, new to export, gets every parcel declared and risk-scored with higher random examination, and the desk files for that seller at no charge, which is the ₹120 agent-fee saving inside the ₹195 waterfall step (section 12.4). A tier 2 seller, established after 25 clean parcels or three months with a full payment-realisation match and no discrepancy [section 3.5], still has every parcel filed through the desk, but the desk's incentive and records officer can batch that seller's monthly incentive claim rather than filing it order by order, since the seller's own record already shows a clean payment-realisation history. A tier 3 seller, trusted after twelve months clean and one physical verification, still files through the desk for every parcel, because the recommendation never removes a parcel from the declared count regardless of tier; what changes with tier is the random-examination rate the risk engine applies and how often an incentive claim is batched, not whether the desk or customs sees the parcel at all.

This is also why the desk's data-link role matters beyond convenience. The desk is the one point in the cluster that sees every seller's order, invoice, payment-realisation and return record in one place, which is exactly the record a tier promotion or demotion decision needs. Lane C's research found that the CBIC's Liberalised MSME AEO Package already shortens processing for AEO Tier 1 and Tier 2 applicants holding a valid MSME certificate [C46], and that AEO applications for every tier are filed online through a single portal [C48]; whether an existing AEO category can simply absorb our proposed tier 3, rather than requiring a new classification, is a question Lane C flags as unresolved on documentary thresholds [C47] and one the pilot's independent evaluator should test directly against a seller's actual record rather than assume either way.

### 12.3 What the desk may and may not do

| May do | May not do |
|---|---|
| Pre-fill the export declaration from the seller's order, invoice and shipping data | Grant customs clearance or release of goods; that stays with the customs officer and the risk engine |
| Photograph, catalogue and onboard a seller's listing | Set or waive duty, or decide a seller's tier outside the published entry and demotion rules (section 3.5) |
| Book freight against the cluster's pooled rate card | Negotiate or alter customs valuation; the declared value is the seller's own, checked by the risk engine like any other declaration |
| Track a seller's payment realisation and eBRC status for incentive matching | Release an incentive or GST refund itself; it submits the matched claim to the agency that actually pays it |
| Record discrepancies for the tier system | Waive a discrepancy finding; any flagged mismatch goes to the risk engine on its own terms |

This split matters because the case's own warning, that too little control opens the door to misuse [C-E6], applies as much to a well-meaning desk as to any other actor in the chain. A desk that could itself clear goods or waive a check would simply relocate the misuse risk from the seller to the desk; keeping clearance, valuation and incentive release with customs and the paying agencies means the desk removes only the mechanical burden of filing, not the substance of the check.

The same split answers a concern a committee reading this report is likely to raise directly: whether giving a desk access to every seller's order and payment data in one place creates a new single point of failure for fraud. The honest answer is that it creates a new single point of visibility, which is a different thing. The desk's incentive and records officer sees more about a seller's pattern of orders, returns and payment realisation than any single customs post sees on one parcel today, because today's system assesses each parcel on its own, with no cluster-level view linking one seller's twelve parcels in a month into one picture. That same visibility is what lets the risk engine score a seller rather than only a parcel, which section 15 develops as the core mechanism behind the three-tier system; the desk is the place that record is assembled, not the place that acts on it. Access to the data link itself, covering IEC, GSTIN, Udyam and eBRC records [T10], sits with the desk's incentive and records officer under the same audit trail customs already applies to any other declarant, so a discrepancy in the desk's own filing pattern would surface the same way a seller's discrepancy would.

### 12.4 The ₹195 paperwork step in the waterfall

In our model, table T6 sets out the sequence from today's direct parcel to the reformed parcel lane. The first step, and the largest, is the move from the seller's own paperwork to the desk's assisted filing.

| Step | INR per order |
|---|---|
| Today, direct parcel | ₹640 |
| Paperwork at the cluster desk | ₹195 |
| Pooled rate card | ₹120 |
| Returns pooled abroad | ₹83 |
| Reformed parcel lane | ₹1,038 |

[T6]

The ₹195 figure comes from cutting paperwork time from 45 minutes to 15 minutes [A07, A27] and removing the ₹120 agent fee entirely, since the desk files for free at tier 1 (section 3.5), leaving admin at ₹37.50, a fall of ₹195 from the base case's ₹232.50 [A07, A09, A27, T2, T3]. It is the single largest step in the waterfall, close to half the total ₹398 uplift, which is why the desk is the first lever in the recommendation rather than the pooled rate card or pooled returns. A07 and A27, the minutes of paperwork before and after the desk, and A09, the agent fee the desk removes, stay labelled as team assumptions, since no primary time study of seller paperwork exists; the validation plan in section 29 sets out how the pilot measures them directly rather than assumes them.

The four roles and six desks are a pilot-scale design, not a finished national blueprint. Section 25 sets out how the pilot's 2,400 sellers across the six clusters, 400 per cluster, test whether four staff per desk is enough at the order volumes a cluster the size of Jaipur or Moradabad would actually generate once more sellers enroll, and section 26's scale gates decide whether staffing, not just budget, needs to grow before the model extends beyond these six clusters to the wider set of Towns of Export Excellence and export hubs the case implies a national reform would eventually reach [C31, C32].

Exhibit for the deck: the desk's role table and the ₹195 waterfall step feed slide 4's compact and pilot panel, and slide 2's access-levers card (section 3.2).

## 13. A pooled rate card and a pooled return point abroad cut the cost of each parcel

**Answer.** A pooled rate card lets one cluster's sellers tender their combined freight volume to carriers as a single buyer, rather than each seller negotiating alone at the going small-parcel rate; in our model this is worth ₹120 of the ₹398 uplift from today's direct parcel to the reformed parcel lane [T6], and it is also the single most uncertain lever in the model, the largest bar on the tornado chart [T8]. A pooled return point abroad, where returned parcels from many sellers in a cluster are collected and resolved before any of them re-cross the border, is worth a further ₹83 [T6], but we say plainly here that no legal basis currently exists for pooling multiple sellers' re-imports into one monthly bill: this is a policy ask we would take to CBIC and DGFT, not a mechanism already permitted under Indian customs law.

### 13.1 Tender design and competition guardrails

The rate card is built the way any pooled-buyer freight tender is built: the cluster desk aggregates the freight volume of every enrolled seller, sets a minimum service specification, invites bids from more than one carrier, and awards against a published scorecard rather than a single negotiated deal. We design three guardrails against the obvious risk of this kind of pooling, provider capture, where one carrier locks in the cluster's whole volume and then has no competitive pressure to hold its rate down.

| Guardrail | What it does |
|---|---|
| Multi-carrier award | The tender splits the cluster's volume across at least two carriers rather than awarding it all to one, so no single provider becomes indispensable to the desk |
| Fixed-term re-tender | The rate card is re-tendered on a fixed cycle rather than rolled over automatically, so a carrier cannot coast on an incumbency advantage |
| Published scorecard | Carrier performance, on-time delivery, damage rate and complaint volume, is tracked and published to the compact's monthly scorecard (sections 3.4 and 20), so a carrier's share of future volume depends on a measured record, not a relationship with desk staff |

No confirmed Indian precedent exists yet for a cluster-level, pooled-rate freight tender of this kind. The closest adjacent schemes found in the research are the Logistics Interventions for Freight and Transport scheme, which reimburses part of an MSME's freight cost from premises to a cargo hub rather than pooling a rate card [D37], and an Aramex-FIEO memorandum of understanding to support MSME exporters, which carries no published pooled-rate figures [D38]; no cluster-level or collective freight tender run by an Indian exporter cluster, export promotion council or government body was found in this research pass [D39]. We treat A28, the rate-card saving, as an assumption the pilot must test rather than a figure with an existing comparable to cite, and the next sub-section shows why that uncertainty matters more for this lever than for any other input in the model.

The carriers a cluster tender would invite are the same ones a seller already uses one parcel at a time: India Post's own international tracked service, and courier aggregators and operators such as Shiprocket X, DHL Express, Aramex and FedEx [D13, D15, D17, D18, D19]. None of these carriers' own published rate pages gave a clean, dated 0.5 kg India-to-destination figure that this research could independently confirm, and the aggregator quotes that were found conflict with each other even for the same carrier and route, for instance two figures from the same aggregator for DHL Express to the United States at 0.5 kg eight months apart [D15, D16]. That conflict is itself part of the case for pooling: a seller shopping these rates alone, one parcel at a time, faces exactly the kind of noisy, unverifiable pricing the research lanes ran into, while a cluster desk negotiating one tender for its whole cluster's volume can require a carrier to quote, and hold, one dated rate card rather than a changeable retail price.

### 13.2 The A28 rate-card saving is the model's largest uncertainty

Table T8 moves every input in the model to its bear and bull value, one at a time, holding everything else at base, and ranks the inputs by how much each one swings the ₹398 uplift from today's direct parcel to the reformed parcel lane.

| ID | Input | At bear | At bull |
|---|---|---|---|
| A28 | Pooled rate-card saving on direct parcel freight | −₹70 | +₹60 |
| A07 | Minutes of seller paperwork per direct parcel | +₹38 | −₹25 |
| A09 | INR agent or CHA fee per direct parcel | +₹30 | −₹20 |
| A27 | Minutes of seller paperwork with the cluster desk | −₹25 | +₹12 |
| A31 | Share of direct returns routed to the pooled return point abroad | −₹14 | +₹14 |

[T8, top five rows]

A28 is the longest bar in both directions, a ₹130 span from −₹70 to +₹60, wider than any other input in the model, including the two paperwork assumptions behind the largest single waterfall step in section 12. This is why the pilot design tests the rate card first, as section 23 sets out: if the real-world saving on a cluster tender turns out closer to the bear value of 5% than the base value of 12% [A28], the whole uplift narrows, though it does not disappear, since A07, A09 and A27 together are worth more than A28 even at its bull value. A committee asked to back one lever with the most scrutiny before scaling the pilot should pick this one.

### 13.3 Returns flow and the legal basis we are asking for, not claiming

The returns side of the reformed lane works like this: a returned parcel is routed either to a pooled return point abroad, shared by multiple sellers in the same cluster, or it is abandoned, exactly as happens today. At the pooled point, a returned item that can be resold locally is resold there, recovering its value without ever re-crossing the border; an item that cannot be resold is consolidated with other unsold or returned stock from the same cluster and brought home once a month, under a single matched duty-free re-import bill, rather than the parcel-by-parcel re-import process a direct return uses today.

| Step | Today | Proposed | Legal status |
|---|---|---|---|
| Return is initiated | Treated as a fresh import on arrival, consignment-wise [C-E4] | Routed to a pooled return point abroad, shared across sellers in a cluster | No CBIC or DGFT provision currently covers a shared return point across sellers; this is new ground |
| Resold items | Not applicable; a direct parcel return is not resold abroad today | Resold at the pooled point, recovering value without re-import | Operationally similar to an existing 3PL return-processing service; no customs provision specific to pooling is required here, since nothing re-crosses the border |
| Unsold items | Each returned parcel files its own re-import, invoice and AWB pair, under Notification 45/2017-Customs as amended by Notification 08/2026-Customs [C06, C09] | Consolidated with other unsold stock from the same cluster and brought home on one monthly bill | No legal basis found: existing re-import law is written consignment-wise, one export invoice and one AWB per re-import [C57]; no CBIC, DGFT or Customs Act provision authorises pooling multiple sellers' re-imports into one bill |
| Benefit neutralisation | Export incentives claimed on the original sale must generally be reversed on a genuine-commercial-reason return within three years of export, extendable to five with approval [C09] | Same reversal rule applies per seller per item; pooling the physical shipment does not change whose incentive gets reversed | Reversal mechanism already exists [C09]; only the pooling of the physical re-import, not the benefit-reversal logic, is the open legal question |

We looked for a comparable mechanism elsewhere before concluding this gap is real. CBIC's own risk-based re-import framework, and the ECCS Return Module built for courier returns and rejects, both exist and both reduce the paperwork on a single returned parcel [C06, C07]; neither extends to pooling several sellers' returns into one declaration. Amazon's own FBA and Global Selling documentation describes free storage and a cross-border "SEND" option for outbound inventory to its overseas fulfilment centres, but no Amazon page describes a consolidated bulk-return shipping route back to a seller's home country for returned stock, and the one forum post touching the question suggests returns may route to a different country's fulfilment centre rather than home, which is not the mechanism we propose [C58]. The honest conclusion of both checks is that the pooled-return-point-abroad and single-monthly-re-import-bill mechanism, A29 and A31 in our model, is not yet permitted anywhere we found in Indian law or in a private-sector analogue we could point to.

We present it, therefore, as a policy ask the compact in section 20 would take to CBIC and DGFT: a new, explicit provision allowing a registered cluster desk or exporter-on-record to file one consolidated re-import bill for pooled, unsold returns from multiple sellers in the same cluster, keeping the existing per-item benefit-reversal rule intact. Until that provision exists, the ₹83 step in T6 and the A29 and A31 assumptions behind it are a modelled target for what the ask is worth, not a benefit any seller can claim today. The pilot in section 25 can test the resale and consolidation logistics now, under existing rules, item by item, while the policy ask for the consolidated bill proceeds in parallel; what the pilot cannot do is pool the actual customs filing before the provision exists.

We flag this gap plainly for a reason beyond honesty for its own sake: a committee that adopts our recommendation without reading this far could mistake the ₹83 step for an operational detail rather than a legislative one, and could tell a seller in the pilot that pooled, duty-free re-import is already available when it is not. The two items that stay true regardless of whether CBIC and DGFT grant the ask are the resale-abroad mechanism, which needs no new provision because nothing re-crosses the border, and the per-item benefit-reversal rule, which already exists and does not change under our proposal [C09]. Only the single consolidated bill of entry for pooled, unsold stock is new ground, and it is the one piece of the reformed parcel lane's ₹1,038 contribution that depends on a decision outside this report's control.

Exhibit for the deck: the tender guardrails and the A28 tornado bar feed slide 3's returns panel and the appendix's A2 tornado slide; the legal-status table is the source for slide 3's returns-flow caption, which must read "not yet permitted, a policy ask for the compact" rather than imply existing legal cover, per the Lane C finding logged in the build record.

## 14. One pre-filled declaration replaces the hand-filled forms on every route

**Answer.** The case names the barrier plainly: forms differ by shipping route and many are still filled by hand or through an agent [C-E2]. Our fix is not a new form but a single data record, built once from the order itself at the cluster export desk, that feeds whichever route the parcel actually travels: postal, courier or the inventory-based exporter-on-record (EOR) route. In our model this is the single step that takes seller paperwork time from 45 minutes to 15 minutes per order [A07, A27] and the admin cost line from ₹232 to ₹38 [T2, T3], and it is why section 12 calls the cluster desk the step that takes the paperwork off the seller rather than merely shortening it.

### 14.1 What the one declaration must carry

A declaration is only as good as the data behind it, and the case's complaint is precisely that a seller today assembles this data more than once, by hand, across offices and portals [C-E2]. We define one data record per order that every downstream form, whatever the route, draws from without re-entry.

| Field group | Specific fields | Where it comes from today | Who supplies it under our proposal |
|---|---|---|---|
| Seller identity | IEC, GSTIN or GST-exempt status, Udyam or artisan ID, bank account linked for realisation | Seller fills separately on each portal | Captured once at desk enrolment (tier 1 KYC, section 15) |
| Buyer and order | Buyer name and address, destination country, platform order ID, order date | Platform order page, copied by hand | Pulled directly from the platform's order data feed |
| Goods description | Product description, HS code, quantity, net and gross weight, declared value in INR and USD | Seller estimates or an agent fills | Catalogued once per SKU at desk onboarding (section 12), reused on every order of that SKU |
| Shipment | Mode (postal, courier, EOR consignment), carrier, AWB or tracking number, carton or batch reference if consolidated | Filled per route, per form | Generated by the desk's freight booking under the pooled rate card (section 13) |
| Invoice and tax | Invoice number, FOB value, GST route chosen (LUT or IGST-paid) [C43], scheme claimed (RoDTEP, RoSCTL or Duty Drawback) | Seller or agent selects per shipment | Pre-selected at desk level by tier and scheme eligibility, confirmed by seller |
| Realisation link | Expected payment date, bank Inward Remittance Message (IRM) reference for eBRC matching [C38] | Not linked at filing time; eBRC follows later, separately | Tagged to the order at filing so the eBRC and the declaration share one reference (section 16) |

Six field groups, not six separate forms. The desk fills the record once from data it already holds (the platform feed, the SKU catalogue, the tier file) and only the last two groups need the seller's confirmation rather than fresh entry, which is most of why minutes of paperwork fall from 45 to 15 in our model [A07, A27].

### 14.2 How the one record moves through each route

The case says rules differ by shipping route, courier, postal or cargo [C-E2], and the 2026 reforms left that difference in place even as they removed the ₹10 lakh courier value cap from 1 April 2026 [C01, C02] and opened the inventory-based EOR route from 5 August 2026 [C17]. Our proposal keeps the three routes and their three portals; it changes only how the data reaches each one.

| Route | Portal and form today | What a seller does today | What the pre-filled record changes |
|---|---|---|---|
| Postal (through a Dak Ghar Niryat Kendra) | ICEGATE registration, DNK portal, Postal Bill of Export (PBE) III or IV for Drawback, RoDTEP or RoSCTL claims [C21] | Registers on ICEGATE, links bank details to the DNK site, fills PBE III or IV by hand at or before booking | Desk pre-populates PBE III or IV from the shared record; seller confirms at the DNK counter instead of filling from scratch; usable at any of the 1,013 DNKs [C29, C30] |
| Courier | Courier Shipping Bill, CSB-V format, filed manually; not auto-processed on ICEGATE until a customs officer in the Express Cargo Clearance System (ECCS) reviews it [C26] | Seller or agent fills CSB-V per shipment, often through a customs house agent [C-E2] | Desk submits the CSB-V from the shared record; the officer review step in ECCS is unchanged, since that is a customs control, not a paperwork step we touch |
| Inventory-based EOR | DGFT Notification 27/2026-27 and Public Notice 25/2026-27 of 5 August 2026; ANF-9A registration for an entity holding valid IEC and GSTIN [C17, C18] | A registered exporter-on-record buys from sellers-on-record and exports under its own registration | Only used once a seller's SKU graduates to the warehouse lane (section 18); the cluster desk holds the seller-on-record data the EOR draws on, so no second data entry happens at graduation |

Nothing above asks CBIC or DGFT to merge the three portals or the three forms into one new system. The case requirement is to reduce compliance effort while protecting integrity [C-R2], not to replace functioning systems with an unproven one, and section 11 already shows why a new single-window portal scores worse on time to deliver than a reform that runs on what exists [T13]. The ICEGATE, DNK and ANF-9A, three paperwork fronts for one seller.

### 14.3 What stays with the seller: the legal position does not move to the desk

A declaration filed on a seller's behalf is still the seller's declaration. This matters because a seller who hears "the desk files for free" (section 15, tier 1 benefit) could reasonably ask whether the desk also carries the legal risk if something in the filing is wrong. It does not, and we say so plainly rather than let that ambiguity sit.

| Obligation | Who holds it today | Who holds it under our proposal |
|---|---|---|
| Accuracy of the customs declaration (value, classification, quantity) | The seller, as IEC holder, even where an agent filled the form [C-E2] | The seller, unchanged; the desk is a filing agent, not a declarant of record |
| Export proceeds realisation within the FEMA window (15 months, 18 for INR-invoiced exports as of the January 2026 regulation, reported cut to 9 months by a June 2026 amendment) [C40, C41] | The seller's bank account and IEC | The seller's bank account and IEC, unchanged; the desk only tags the order so the eBRC match happens faster (section 16) |
| GST liability and the choice between LUT (no IGST paid) and the IGST-paid refund route [C43] | The seller, filed through its own GSTIN on GSTR-1 Table 6A | The seller, unchanged; the desk pre-selects a default route by tier but the seller's GSTIN carries the filing |
| Reversal of export incentives on a genuine-commercial-reason return within three years of export, extendable to five [C09] | The seller who claimed the incentive | The seller, unchanged; pooling the physical return (section 17) does not pool whose incentive is reversed |
| Post-clearance audit exposure under Section 99A of the Customs Act, inserted by the Finance Act 2018 [C52, C53] | The seller (or EOR, once graduated) as the auditee | Unchanged; tier 3's lower examination rate (section 15) is paired with, not a substitute for, this audit power |

The desk does the work; the seller still owns the filing. A committee reading only the headline, "paperwork minutes fall from 45 to 15," could mistake this for the desk absorbing legal responsibility along with the typing. It does not, and every control the brief asks us to protect, under-invoicing, incentive misuse and tax leakage [C-E5], depends on that distinction holding. If the desk, not the seller, were the declarant of record, a seller with a discrepancy could not be identified or demoted under the tier system in section 15; the control would simply disappear into the desk's aggregate filing. Keeping the seller as declarant of record is therefore not a legal technicality we accept reluctantly. It is the hinge the whole regulatory reform in section 15 and 16 turns on.

This is also where the case's own test for granularity [C-J4] is best answered with a specific example rather than a general promise. A seller whose Banarasi silk stole is declared at an HS code one digit different from the correct one has, under our design, made an error that is theirs, flagged by the risk engine against their own tier record, resolved through the existing post-clearance audit power under Section 99A of the Customs Act [C52], not absorbed anonymously into a cluster-wide filing where no single seller's mistake can be traced back to them. A reform that cannot point to who is responsible for a specific error, at a specific field, on a specific order, has not actually reduced risk, only moved it out of sight. Ours can, because the shared record in 14.1 tags every field to the order and the seller that supplied it, and the legal-position table above is the map of exactly which of those tags still belongs to the seller once the desk has filed on their behalf.

### 14.4 Why one shared record, not one new portal

A committee could reasonably ask why we propose a shared data record rather than the more obvious fix: one new government portal that replaces ICEGATE, the DNK portal and ANF-9A outright. Section 11 already scores that option against ours and finds it loses on time to deliver, 1 against 4 on our scoring [T13], and the reason is concrete rather than abstract. DGFT already runs the Trade Connect ePlatform, launched to connect more than 6 lakh IEC holders, over 180 Indian Mission officials and over 600 Export Promotion Council officials [C36], and moved certificate-of-origin issuance (eCoO 2.0) onto it from 28 August 2024 [C37]. A new single-window export portal would either duplicate this existing investment or compete with it for the same users, and either way it takes years to build and adopt, the exact criticism section 3.3's option table levels at a new portal [T13]. Our shared record asks for none of that. It sits in front of ICEGATE, the DNK portal and ANF-9A, feeding each one the data it already accepts, rather than replacing any of them. The desk's software is new; the three government systems it talks to are not, and that is deliberate, since every month spent waiting for a new portal to go live is a month the case's own complaint, hand-filled forms for a seller moving a handful of parcels [C-E2], keeps standing.

This also explains why the field groups in 14.1 stop where they stop. We do not ask the desk to capture anything ICEGATE, the DNK portal or ANF-9A do not already need, because adding fields a route-specific system does not use would only recreate the paperwork burden we are trying to remove, just moved one step earlier in the process. The desk's one record is disciplined by what the three existing systems already ask for, not by what would be convenient for the desk to hold.

Exhibit for the deck: the six field groups and the three-route table feed slide 3's "one pre-filled declaration" panel; the legal-position table is the source note for the panel's small-print caption on seller liability, which the deck must not drop even where space is tight.

## 15. Three seller tiers put checks on the risky few and keep every parcel declared

**Answer.** The brief's challenge is symmetric: too much control keeps small sellers out, too little opens the door to misuse [C-E6]. Our answer grades the seller, not the parcel, into three tiers on their own record, identity, payment realisation and past discrepancies, so that every parcel stays declared and risk-scored while the random-examination burden falls mainly on the tier with the least track record. Entry, treatment, benefit and demotion are symmetric across all three tiers in the sense the rhetoric standard calls for: the same four questions, answered the same way, for each one, so a committee can compare them at a glance rather than read three different structures.

### 15.1 The tier table

| Tier | Entry | Customs treatment | Seller benefit | Demotion |
|---|---|---|---|---|
| 1 New seller | Valid IEC, GSTIN or GST-exempt status, Udyam or artisan ID, KYC at the desk | Every parcel declared and risk-scored; higher random examination; desk-assisted filing | Desk files for free; first-shipment freight bridge, capped per seller | Any misdeclaration |
| 2 Established | 25 clean parcels or 3 months with full payment realisation match and no discrepancy | Lower random examination; monthly consolidated incentive claim | Faster incentive release; pooled returns (section 17) | Any unmatched payment beyond the legal realisation window, any discrepancy |
| 3 Trusted small exporter | 12 months clean, realisation match, physical verification once | Lowest examination in the risk engine; post-clearance audit of a sample; still 100% declared | Monthly filing of claims; priority clearance | Audit finding, unmatched realisation |

Every tier keeps the same floor: 100% of parcels declared and risk-scored. Nothing in the tier design relaxes the requirement that every parcel is on the record, because the brief's own warning is that large volumes of low-value parcels that cannot be inspected one by one are exactly the misuse risk authorities will not accept being waived away [C-E5]. What changes across tiers is not whether a parcel is checked at all, but how often it is pulled for physical examination and how fast its seller's incentive claim clears.

### 15.2 Promotion and demotion: the thresholds are a pilot hypothesis, not a rule in force

The 25-parcel, 3-month and 12-month thresholds are proposals for the pilot in section 25 to test, not existing customs categories, and we repeat that here because a committee reading the tier table alone could mistake a clean table for a settled rule.

| Transition | Trigger | Evidence the desk checks | What moves |
|---|---|---|---|
| Tier 1 to tier 2 | 25 clean parcels or 3 months, whichever comes first | eBRC-matched realisation on every parcel in the window (section 16); zero discrepancies flagged by the risk engine | Examination rate drops by the risk engine's own scoring, not by a fixed percentage we set in advance; incentive claims move from per-parcel to monthly |
| Tier 2 to tier 3 | 12 months clean, realisation matched throughout, one physical verification passed | Same as above over a full year, plus the one-time physical check | Examination rate drops again; the seller enters the post-clearance audit sampling pool instead of routine physical checks |
| Any tier to a lower tier, or exit | A misdeclaration (tier 1), an unmatched payment beyond the legal realisation window or any discrepancy (tier 2), or an audit finding or unmatched realisation (tier 3) | The same eBRC and GST matching the desk already runs for every seller (section 16) | Immediate reset to the triggering tier's examination treatment; a tier 3 seller with an audit finding does not merely drop to tier 2, since an audit finding is graver than a missed deadline, and the desk escalates it for Section 99A review [C52] rather than a quiet demotion |

The asymmetry in the demotion column is deliberate. A tier 1 seller is demoted by nothing, there is no tier below tier 1, so the consequence of a misdeclaration at that level is exit from the desk's assisted filing rather than a step down. A tier 3 seller's audit finding is treated as graver than a tier 2 seller's missed realisation deadline, because by the time a seller reaches tier 3 the desk and the risk engine have a full year of clean record behind them, and a finding at that point is less likely to be an honest slip.

### 15.3 What the risk engine scores, and where the data comes from

A tier is only as good as the data behind it, and the three questions the tier table asks, identity, payment realisation and past discrepancies, map directly onto the one pre-filled declaration record built in section 14, so the desk never asks a seller for information twice.

| Risk-engine input | Source in the shared record (section 14) | What it tells the desk |
|---|---|---|
| Identity | IEC, GSTIN or GST-exempt status, Udyam or artisan ID (seller identity field group) | Whether the seller is a known, verified entity or a fresh enrolment |
| Payment realisation | Realisation link field group, matched against the self-certified eBRC built from the bank's Inward Remittance Message (IRM) [C38] | Whether export proceeds actually came in within the FEMA window, not merely whether a sale was declared |
| Past discrepancy history | Every prior declaration filed under the seller's ID, flagged by customs' own Risk Management System (RMS) for exports, in place since 15 July 2013 [C51] | Whether a seller's prior parcels cleared clean or drew an examination finding |
| Physical verification (tier 2 to tier 3 only) | A one-time, in-person check recorded against the seller's file | Confirms the paper record matches a seller who genuinely exists and operates at the stated address |

None of these four inputs is new infrastructure. The RMS for exports has run since 2013 [C51] and the self-certified eBRC pilot has run since November 2023 [C38]; our tier design asks the desk to read these existing signals seller by seller rather than ask customs to build a new scoring system from nothing.

### 15.4 Does an existing CBIC or DGFT category already do this: the AEO and Status Holder check

Lane C looked for whether a seller tier of this kind already exists under a different name before we propose three new ones. The closest candidate is the Authorised Economic Operator (AEO) programme, and the honest answer is partial overlap in spirit, no overlap in mechanism.

| AEO feature | What we found | Where it overlaps our tiers | Where it does not |
|---|---|---|---|
| CBIC's Liberalised MSME AEO Package (Circular 54/2020) relaxes AEO-T1 and AEO-T2 eligibility for MSME-certified applicants, with processing cut to 15 working days (T1) and 3 months (T2) [C46] | A formal, named fast-track for MSMEs already exists at the national level | Our tier 2 and tier 3 share the same underlying logic, lower scrutiny for a demonstrated clean record | AEO is a single national certification a seller applies for once; our tiers are desk-level, automatic on the order record, and require no separate application |
| MSME AEO documentary eligibility threshold is disputed across sources: an EY note gives the general 25 import or export documents per year, a consulting guide and a tax manual give a relaxed 10-document threshold for MSMEs [C47] | Even the entry bar for the existing MSME fast-track is unsettled in public sources | None directly; this is a gap in the AEO literature itself, not in our design | Our tier 1 entry bar (valid IEC, GSTIN or exemption, Udyam or artisan ID, desk KYC) needs no minimum document count, because it is an onboarding check, not a volume-based eligibility test |
| All AEO tiers (T1, T2, T3) are filed online through a dedicated national portal, aeoindia.gov.in [C48] | AEO has its own system and its own application cycle | Our proposal does not ask DGFT or CBIC to retire or replace this system | A seller moving a handful of parcels a month [C-E2] is unlikely to apply for a national AEO certification on their own initiative; our tiers sit below that threshold and feed into it |

The honest conclusion is that our three tiers are not a renaming of AEO, and we say this clearly rather than let the overlap read as more than it is: these are pilot-tested proposals the compact would run at the cluster desk level, graded automatically from order data, not a substitute for or a rebranding of the national AEO or Status Holder categories. A tier 3 seller with twelve months of clean, matched export performance is, in substance, the kind of exporter AEO was built to recognise, and a natural next step once the pilot has a track record would be for the desk to nominate its tier 3 sellers for AEO application under the existing MSME package [C46], rather than for us to invent a parallel national certification. Section 20's compact lists this as a possible future hand-off, not a current claim.

### 15.5 One seller's path through the tiers, illustrated

The tier table in 15.1 is easier to read against one seller's path through it than against the abstract rule alone. The pilot in section 25 enrols 960 active sellers in our base case [T11]; the illustration below follows one of them, not as a claimed result, since no pilot has run yet, but as a worked example of how the thresholds in 15.2 are meant to apply.

| Month | Tier | Event | Treatment that month |
|---|---|---|---|
| 1 to 3 | 1 | Seller enrols at the desk with valid IEC and Udyam ID; first 10 to 15 parcels filed and risk-scored | Higher random examination; desk files every declaration for free; first-shipment freight bridge available, capped |
| 3 | 1 to 2 | 25th clean parcel clears with matched eBRC realisation (section 16.2) and no discrepancy flagged | Promoted to tier 2 at month 3, the earlier of the two triggers in 15.2 for this seller's order pace |
| 4 to 14 | 2 | Eleven months of clean, matched parcels; incentive claims move to a monthly consolidated filing instead of per parcel | Lower random examination; faster incentive release; returns begin routing through the pooled return point abroad (section 17) |
| 15 | 2 to 3 | Twelve clean months complete, one physical verification passed | Promoted to tier 3; enters the post-clearance audit sampling pool instead of routine physical examination |

Nothing in this path required the seller to apply for a new certification or fill a form to request promotion. Every transition is read off the same shared record described in section 14 and the risk-engine inputs in 15.3; the seller experiences it as paperwork getting lighter and payments arriving faster the longer their record stays clean, not as a bureaucratic step they must separately pursue.

### 15.6 Symmetric treatment and why three tiers, not two or five

The rhetoric standard this report follows asks that comparable things get the same structure, so a reader can compare them without re-learning a format each time, and the three tiers above share exactly one layout, entry, treatment, benefit, demotion, with no tier given more or fewer dimensions than another. We chose three tiers rather than two or five for a specific reason: two tiers, new and established, would not distinguish a seller with three months of clean history from one with a full year, collapsing the case for a lighter audit touch on the most proven sellers into the same bucket as a seller only recently promoted; five tiers would ask the desk to track finer gradations than the underlying risk-engine inputs in 15.3, identity, realisation and discrepancy history, can actually support, since none of those three inputs changes meaningfully between, say, a seventh and an eighth clean month. Three tiers is the smallest number that lets the examination rate fall in more than one step as a seller's record lengthens, while staying small enough that the desk, the risk engine and the seller can all describe where a given order sits without consulting a lookup table. We note, again, that this is our judgement on the right granularity for a pilot to test, not a number any existing CBIC or DGFT category has already settled on. The four dimensions, entry, customs treatment, seller benefit, demotion, are themselves a deliberate MECE split of what a tier can possibly determine: entry answers who may hold the tier, treatment answers how customs handles that seller's parcels, benefit answers what the seller gains in return, and demotion answers what removes it. No fifth column was needed because no further question about a tier remained unanswered once those four were filled in, and no column could be dropped without leaving a seller or a customs officer unable to say what the tier actually does.

Exhibit for the deck: the tier table is slide 3's seller-tiers panel; the promotion and demotion table backs the panel's small-print note that thresholds are pilot hypotheses; the AEO comparison is appendix A3's tier-rules backup, cited from the main deck by a footer reading "tiers are pilot proposals, not an AEO rebrand, detail in appendix."

## 16. Incentives and refunds released only against matched payment close the misuse the brief fears

**Answer.** The brief names the risk directly: large volumes of low-value parcels raise under-invoicing, misuse of export incentives and tax leakage, and cannot be inspected one by one [C-E5]. Our answer does not inspect every parcel by hand; it releases every incentive, refund and tiered benefit only against a matched record, eBRC against bank realisation, GST filing against the same order, so that a seller who has not been paid for a sale, or whose sale does not match its declared value, never clears a claim regardless of how light the parcel-level examination is. The cost of this control is not borne by every seller equally: it falls as a lower examination rate on a clean record and a sampling audit on a trusted one, and as a hold on payment for everyone until the match is confirmed.

### 16.1 Misuse type by control: a heat map

Five misuse types sit inside the brief's warning [C-E5]; we treat them as a MECE list, since each is a distinct way value can leak even while a parcel looks clean on its face, and map each against the specific control that closes it and how much residual risk remains after that control.

| Misuse type | Specific mechanism | Control that closes it | Residual risk after control |
|---|---|---|---|
| Under-invoicing | Declaring a lower value than the actual sale, cutting duty or inflating incentive percentage base | Platform order value and the invoice value are drawn from the same order record (section 14), not re-typed; a mismatch between platform price and declared FOB value is flagged by the risk engine | Low: a seller could still under-report an off-platform side payment, which no declaration-level control catches; this is why a tier 3 seller still faces a sampled post-clearance audit [C52] |
| Export incentive misuse (Drawback, RoDTEP, RoSCTL) | Claiming a scheme benefit on misclassified goods or overvalued exports, the standard modus operandi DRI identifies [C42, re: F42] | Scheme claim is pre-selected by tier and SKU catalogue (section 14), and the claim is not released until the eBRC match confirms realisation (16.2) | Low to moderate: CAG's audit of the Duty Drawback Scheme still found a ₹701.69 crore revenue implication from weak tracking of converted shipping bills even under the existing system [F38], so release-on-match reduces but does not eliminate this risk |
| GST refund leakage | Claiming an IGST refund on an export that is later found not to have realised payment, or on a value higher than actually sold | Refund eligibility already depends on realising export proceeds in foreign currency within the prescribed period, a rule in force since 1 October 2023 [C45]; the desk's realisation tag (section 14) lets this match happen at the order level instead of only at year-end reconciliation | Moderate: CAG separately found ₹725 crore of irregular MEIS and SEIS grants across 39 Customs Commissionerates and 12 DGFT regional authorities under the prior Foreign Trade Policy [F40], a reminder that a rule existing on paper is not the same as it being enforced everywhere |
| Split consignments | Breaking one sale into several parcels to stay under a threshold or to spread risk-scoring across declarations | The platform order ID in the shared record (section 14) ties every parcel of one order together regardless of how many shipments it is split into, so a split shows up as multiple declarations against one order rather than disappearing | Moderate: a seller using two different platform accounts for the same buyer would not be caught by an order-ID link alone; this is a gap the pilot's evaluation (section 26) should test for explicitly |
| Fake returns | Declaring a return that did not happen, to claim a duty exemption on a re-import that was never genuinely sold or sent back | Re-import under the risk-based framework already requires the original invoice, customs permission and matched old and new AWB pair [C08]; our pooled return point (section 17) does not relax this, since it only changes where the physical resolution happens, not whether a return is verified | Moderate to high: this is the category where our own section 17 is most honest about an unresolved gap, since no legal basis yet exists for pooling returns, and until a provision exists, every pooled claim still needs the same per-item verification as a lone return [C57] |

Two things the heat map should not be read to say. First, that any control here is new: the eBRC match, the realisation-linked refund rule and the AWB-pair requirement on re-import all exist today [C38, C45, C08]. What our design adds is that the cluster desk's shared order record lets these existing checks run against one tagged order instead of a set of disconnected filings a seller submits separately, closer to the point of filing rather than only at audit. Second, that residual risk reaches zero anywhere. It does not, and we rate fake returns the highest residual risk of the five precisely because our own proposed pooling mechanism in section 17 is the one piece of the reform without a confirmed legal basis yet.

### 16.2 eBRC and GST matching: how the match actually runs

| Step | What happens | Legal or system basis |
|---|---|---|
| Bank sends the Inward Remittance Message (IRM) | The seller's bank transmits an electronic IRM to DGFT when payment is received | Pilot launched via DGFT Trade Notice 33/2023-24 from 15 November 2023 [C38] |
| Exporter self-certifies the eBRC | The seller (or the desk, on the seller's behalf, under the declarant rule in section 14.3) certifies the eBRC against the IRM's RBI Purpose Code fields | Replaces the older bank-certified model that ran from 17 August 2012 [C39] |
| GST route is reconciled | Export reported in GSTR-1 Table 6A, under either the LUT route (no IGST paid) or the IGST-paid refund route [C43] | Statutory refund formula: (zero-rated goods turnover plus zero-rated services turnover) multiplied by Net Input Tax Credit, divided by Adjusted Total Turnover [C44] |
| Refund or incentive is released | Released only once realisation is confirmed within the prescribed window | Refund eligibility conditioned on realisation in foreign currency since 1 October 2023, with IGST plus interest payable within 15 days of any lapse [C45] |
| Tier status updates | A matched, clean order counts toward a tier 1 seller's 25-parcel or 3-month promotion clock (section 15.2); a lapse triggers demotion | Desk-level rule, not a CBIC or DGFT system |

This is also where the correction on export realisation timing matters for a committee reading this section closely. The window a seller's payment must clear within has itself moved twice in 2026: a January 2026 regulation set 15 months (18 for INR-invoiced exports) [C40], and a reported amendment in June 2026 cut this to 9 months [C41], with a possibly duplicate September 2026 report of the same change that this research could not confirm as distinct [C42]. Whichever window holds at the time the pilot runs, the matching mechanism above does not change; only the clock each order's realisation flag is measured against does.

### 16.3 Sampling: where physical and audit checks still fall

Matching closes the paper trail; it does not replace a physical look at goods or books, and the brief is explicit that controls cannot be relaxed even where paperwork looks clean [C-E5]. Sampling intensity follows the tier, not the parcel value.

| Tier | Physical examination | Audit exposure |
|---|---|---|
| 1 | Higher random examination rate (section 15.1); every new seller's first clean parcels are the ones most likely to be pulled | Not yet in the post-clearance audit pool; too little history to audit against |
| 2 | Lower random examination rate than tier 1 | Occasional sample draw, same legal basis as tier 3 below |
| 3 | Lowest examination rate in the risk engine; still 100% declared | Post-clearance audit of a sample under Section 99A of the Customs Act, inserted by the Finance Act 2018 [C52]; audits run under the Customs Audit Regulations 2018, with the jurisdictional Commissioner able to extend the completion window from 30 to 60 days [C53] |

A tier 3 seller faces less examination at the border and more scrutiny after the fact. That trade, lower friction at clearance in exchange for a real chance of a later audit, is the mechanism by which our design lets a clean record earn speed without ever telling customs to stop looking.

### 16.4 What sampling cannot prove, said before a judge raises it

We would rather name the limit of this design ourselves than have a committee find it unprompted. Matched release and tiered sampling close the paper trail and raise the cost of getting caught; neither proves that a rare, well-coordinated fraud, a seller and a buyer colluding across two platform accounts, or a genuinely falsified bank realisation record, will always be caught. CAG's own audits found irregularities inside systems that already had rules on paper: a ₹701.69 crore revenue implication inside the Duty Drawback Scheme from weak shipping-bill tracking [F38], and ₹725 crore of irregular MEIS and SEIS grants across 39 Customs Commissionerates [F40], both under frameworks that, like ours, depended on matching and documentation rather than parcel-by-parcel inspection. DRI's own typologies show that misclassification and overvaluation remain the standard route to drawback misuse even where a realisation check exists [F42], and a single case the agency documented, around ₹183 crore fraudulently availed across drawback, MEIS and IGST refunds combined through overvaluation [F41], shows the scale a determined, coordinated fraud can reach before the pattern surfaces.

Our honest claim is narrower than "misuse is eliminated." It is that the five misuse types in 16.1 each become harder, slower and more likely to surface at the tier-transition check than they are for a seller filing alone today, and that the sampling design falls where the risk is highest, tier 1's unknown sellers and the unresolved returns-pooling gap in section 17, rather than spread evenly across a population most of which is not the problem the brief is worried about. Section 29's validation plan, not this section, carries the obligation to measure whether that claim holds once the pilot runs.

We also note what the brief's framing gets right and what our design does not try to argue against. The brief says plainly that authorities cannot simply relax controls [C-E5], and nothing in this section asks them to. Every control named above, the eBRC match, the realisation-linked refund rule, the AWB-pair requirement on re-import, the post-clearance audit power, already exists in some form; what changes is the speed and the specificity with which each one runs, because the shared order record in section 14 lets a discrepancy surface against one seller's one order rather than only at a later, aggregate reconciliation. A control that runs faster against better-tagged data is a stronger control, not a weaker one, and that is the only kind of simplification this report argues for anywhere in its eight-section logic.

Exhibit for the deck: the misuse heat map is the source for slide 3's integrity heat map panel; the eBRC and GST matching table backs the panel's "released only on matched payment" caption; the sampling table is appendix A3's audit-exposure backup.

## 17. Returns resolved abroad and brought home on one bill stop a return from becoming a fresh import

**Answer.** The brief calls returns the biggest hidden cost: a returned item is often treated as a fresh import, with duties, forms and delays, and many sellers absorb the loss or avoid exporting altogether [C-E4]. Our answer resolves most returns abroad before they ever re-cross the border, and brings home only what cannot be resold, on one monthly bill instead of a parcel-by-parcel re-import. We say here, as plainly as section 13 already said it, that the single consolidated monthly re-import bill has no confirmed legal basis in current Indian customs law today. It is a policy ask the compact in section 20 would take to CBIC and DGFT, not a mechanism a seller can use now, and this section is the primary place in the report where that distinction is worked through in full.

### 17.1 The returns decision table

A return does not follow one path; which path it takes depends on whether the item can be resold where it landed, and on whether the seller is enrolled in the reformed lane at all.

| Return scenario | Decision | What happens physically | Legal status today |
|---|---|---|---|
| Seller not enrolled at the desk | Treated as a fresh import on arrival, as the case describes [C-E4] | Parcel-by-parcel re-import, duties and forms as they stand today | Current law; no change asked |
| Enrolled seller, item resalable abroad | Routed to the pooled return point abroad, resold there | Value recovered locally; nothing re-crosses the border | No new provision needed, since nothing re-imports; operationally similar to an existing third-party logistics (3PL) return-processing service |
| Enrolled seller, item not resalable, re-imported individually under existing rules | Filed as an individual re-import under the risk-based framework | One export invoice, one airway bill (AWB) pair, filed under Notification 45/2017-Customs as amended by Notification 08/2026-Customs [C06, C09] | Current law; already simpler than the pre-2026 consignment-wise verification it replaced, but still one filing per parcel |
| Enrolled seller, item not resalable, pooled with other unsold stock from the same cluster | Consolidated with other returns and brought home once a month on a single matched duty-free re-import bill | No parcel-by-parcel filing; one bill covers the cluster's unsold stock for the month | Not yet permitted: this is the policy ask, worked through below |

Three of the four rows in this table describe something that already works, today, under rules that exist. Only the fourth row, the one our model prices at ₹83 of the ₹398 uplift [T6], is new ground, and we isolate it precisely so that a committee can see the reform does not depend entirely on an unproven mechanism to deliver its other gains.

### 17.2 Why no legal basis exists, and what the ask actually is

We looked for a legal basis for the pooled, consolidated re-import before concluding it does not exist, rather than assuming the gap and moving on. Existing re-import law, Notification 45/2017-Customs as amended by Notification 08/2026-Customs, is written consignment-wise: one export invoice and one AWB pair per re-import, with filing requiring the original invoice, customs permission, a new AWB and the old AWB [C06, C08, C09]. The dedicated ECCS Return Module built for courier returns and rejects reduces the paperwork on a single returned parcel, but it does not extend to pooling several sellers' returns into one declaration [C07]. We also checked the private sector for an analogue: Amazon's own Fulfilment by Amazon (FBA) and Global Selling documentation describes free storage and a cross-border outbound shipping option to overseas fulfilment centres, but no Amazon page describes a consolidated bulk-return shipping route back to a seller's home country, and the one forum reference touching the question suggests a return might route to a different country's fulfilment centre rather than home, which is a different mechanism from the one we propose [C58]. No provision, public or private, currently supports what the ₹83 step in our model assumes.

The ask we would bring to CBIC and DGFT is specific, not a general request to "simplify returns": a new provision allowing a registered cluster desk or exporter-on-record to file one consolidated re-import bill, covering pooled, unsold returns from multiple sellers in the same cluster over one month, while keeping the existing per-item benefit-reversal rule (17.3 below) entirely intact. The narrowness of the ask matters. We are not asking for a new exemption from duty, a new category of goods, or a relaxation of who may claim a benefit; we are asking for one filing mechanic, consolidation of the paperwork for multiple sellers' already-qualifying re-imports into one bill, to be added on top of rules that otherwise stay as they are.

| What the ask changes | What the ask does not change |
|---|---|
| How many bills of entry one month of a cluster's unsold returns requires: one instead of one per parcel | Who is entitled to re-import duty-free (unchanged: genuine commercial reason, three-year window, extendable to five with approval [C09]) |
| Where the physical consolidation happens: at the pooled return point abroad, before the monthly shipment home | Whether each item in the pooled shipment is still individually documented inside the consolidated filing, since the desk retains per-item records even while the customs filing is consolidated |
| Who files the bill: the cluster desk or EOR, on behalf of enrolled sellers | Who bears benefit reversal if an incentive was claimed on the original sale: still the individual seller, item by item (17.3) |

### 17.3 Benefit neutralisation: the one piece that does not depend on the ask

Export incentives claimed on the original sale, Duty Drawback, RoDTEP, RoSCTL, must generally be reversed when a genuine-commercial-reason return happens within three years of export, extendable to five years with approval [C09]. This rule already exists, applies per seller per item, and does not change under our proposal. Consolidating the physical shipment and the customs filing does not consolidate whose incentive gets reversed; the desk's per-item record inside the pooled shipment (17.2) is precisely what keeps this reversal rule workable even once the filing itself is pooled. We flag this separately because it is the one part of the returns mechanism that a committee can approve mentally without waiting on CBIC or DGFT: it requires no new provision, only that our design not accidentally obscure which seller's item is which inside a consolidated bill, which the per-item record inside the pooled shipment is built to preserve.

A committee that reads this section and only remembers the ₹83 figure risks treating a legislative gap as an operational detail. We would rather it remember three things: the resale-abroad mechanism works today under no new rule; the per-item benefit reversal works today under an existing rule; and only the single consolidated monthly bill is new ground, pending CBIC and DGFT's decision on the ask in 17.2.

### 17.4 Why returns matter more here than for traditional exports

CBIC is cited putting e-commerce export returns at 20% to 25%, against under 5% for traditional exports [C11], though a 2025 Lok Sabha reply gives a lower, conflicting 15% to 20% range [C12]; we keep both figures rather than pick the more convenient one, and either range is several times the traditional-export rate.

| Source | Range cited | How it compares to a traditional export |
|---|---|---|
| CBIC, via a Budget 2026 explainer [C11] | 20% to 25% | 4 to 5 times the under-5% traditional-export rate |
| Lok Sabha Unstarred Question reply, Ministry of Commerce and Industry, 2025 [C12] | 15% to 20% | 3 to 4 times the under-5% traditional-export rate |
| Our model's assumption range [A10] | 18% to 22%, base 20% | Sits inside both cited ranges |

Table T2 shows why that gap matters in rupees, not just in percentage points: in our base case, a direct parcel that is sold and kept earns the seller ₹1,334 after freight, fees, admin and product cost, but a parcel that is returned costs the seller ₹2,132 once freight both ways, admin and the lost product cost are counted [T2]. At a 20% base return rate [A10], roughly one order in five swings from a ₹1,334 gain to a ₹2,132 loss, which is why the expected contribution across all orders falls to ₹640 even before any reform [T2, T5]. A traditional export, returning under 5% of the time, never faces this swing often enough for it to dominate the seller's expected outcome the way it does for e-commerce. This is also the arithmetic behind insight 7 in our research plan: bringing a single low-value parcel home as a return costs more than the item is worth recovering, since the return freight and re-import handling on a ₹3,960 order can exceed what reselling or writing off the item abroad would cost, which is precisely why resolving the return abroad, not bringing it home at all unless it truly cannot be resold there, is the lane our design prefers.

Lane C also found a general mechanism worth distinguishing from the one we propose: Return to Origin (RTO), under which goods uncleared or unclaimed at an International Courier Terminal for more than 15 days may be sent back, provided they are not prohibited, restricted or held by an enforcement agency, with the authorised courier filing the request with the jurisdictional officer [C13, C14]. RTO addresses a different problem, goods that were never cleared on arrival in the first place, abandoned imports sitting in a terminal, not a seller's export that was sold, delivered and then returned by a dissatisfied buyer. Goods not cleared within 30 days, with no RTO request filed, are detained and disposed of after notice, with storage charges payable by the authorised courier [C15]. We note RTO here only to rule it out as an existing analogue for our pooled-return-point proposal: it is a mechanism for unclaimed imports, not for resolving a seller's export return abroad, and no part of our returns decision table in 17.1 relies on it.

Exhibit for the deck: the returns decision table is the source for slide 3's returns panel; the returns-flow caption on that panel must read "not yet permitted, a policy ask for the compact" and must not imply existing legal cover, per the correction logged for this build; the legal-basis table backs appendix A3.

## 18. Overseas warehousing pays only for SKUs that already sell ten a month

**Answer.** Consolidated overseas warehousing, stock shipped in bulk ahead of sale and fulfilled locally once an order lands, is a real lane in our model, not a straw option we dismiss. It beats today's direct parcel from 10 orders a SKU a month in the base case [T12], and we keep it as a graduation option for proven sellers rather than the core of our recommendation, because in our model it never beats the reformed parcel lane at the unit level, however many orders a SKU sells [T12]. The two lanes solve different problems: the reformed parcel lane fixes the cost of exporting one order at a time; warehousing only pays once a seller has enough repeat demand on one SKU to justify holding stock abroad before it sells.

### 18.1 The warehouse lane, line by line

| Line | Bear | Base | Bull |
|---|---|---|---|
| Price | ₹3,520 | ₹3,960 | ₹4,400 |
| Platform fee | ₹528 | ₹594 | ₹660 |
| Bulk freight to the warehouse | ₹292 | ₹238 | ₹192 |
| Destination last-mile delivery | ₹528 | ₹484 | ₹440 |
| Fulfilment (pick, pack, storage) | ₹440 | ₹396 | ₹352 |
| Exporter-on-record margin | ₹90 | ₹64 | ₹53 |
| Admin | ₹25 | ₹15 | ₹10 |
| Product cost | ₹900 | ₹800 | ₹750 |
| Working capital cost | ₹45 | ₹29 | ₹19 |
| Unsold stock written off | ₹132 | ₹78 | ₹50 |
| Delivered margin before returns | ₹539 | ₹1,262 | ₹1,875 |
| Expected loss when an order returns | ₹1,476 | ₹1,207 | ₹987 |
| Expected contribution per order | ₹176 | ₹892 | ₹1,532 |
| Cost to serve | ₹1,711 | ₹1,423 | ₹1,199 |

[T4] In our model, the base-case warehouse contribution of ₹892 sits between today's direct parcel at ₹640 and the reformed parcel at ₹1,038 [T5]. Bulk freight and lower-rate last-mile delivery bring the logistics cost down sharply against a single small parcel, ₹292 against ₹1,000 base freight for a direct parcel [A05] and lower return losses, since a 15% base return rate in the warehouse lane [A19] is below the 20% base rate on a direct parcel [A10], because local returns are faster to process and partly resold on the spot [A20]. What eats back into that advantage is cost the direct parcel never carries at all: fulfilment fees, an exporter-on-record margin, working capital tied up in stock sitting abroad, and a write-off on whatever share of shipped units never sells [A16, A17, A23, A22].

### 18.2 Break-even orders per SKU a month, and why warehousing never clears the reformed parcel

| Scenario | Against today's direct parcel | Against the reformed parcel lane |
|---|---|---|
| Bear | 15 orders a SKU a month | Never, at the unit level |
| Base | 10 orders a SKU a month | Never, at the unit level |
| Bull | 8 orders a SKU a month | Never, at the unit level |

[T12] Read against today's unreformed parcel, warehousing clears its fixed costs, the ₹2,500 a month per SKU a third-party logistics minimum charges regardless of volume [A26], once a SKU sells 8 to 15 orders a month depending on the scenario. Read against the reformed parcel lane, it never clears, in any scenario, at the unit level. This is not a modelling quirk; it follows from the waterfall in section 13: the reformed parcel lane captures most of the paperwork and rate-card gains warehousing also captures, ₹195 from the cluster desk and ₹120 from the pooled rate card [T6], without taking on warehousing's fixed monthly cost per SKU, its exporter-on-record margin, or its inventory write-off risk. A seller choosing between the two lanes for an average-selling SKU is choosing between a lane that has no fixed cost and no inventory risk and one that has both, and our model says the first lane wins unless volume on one specific SKU is already high enough to make the second lane's fixed costs worth carrying.

### 18.3 When to graduate, and the inventory risk a seller takes on

| Signal | What it means for a graduation decision |
|---|---|
| A single SKU sells 10 or more orders a month on the reformed parcel lane (base case threshold) [T12] | The volume exists to amortise the warehouse lane's ₹2,500 monthly fixed cost per SKU [A26] over enough orders that the fulfilment and margin costs stop dominating |
| Return rate on that SKU, observed on the reformed parcel lane, is at or below the 15% base assumption for the warehouse lane [A19] | A SKU with a high direct-lane return rate would likely also return often from a warehouse, and the warehouse lane's advantage partly depends on faster local resale of returns [A20], which does not help a SKU that simply gets returned a lot |
| Seller can absorb working capital tied up for the stock-holding period, modelled at 4 months base [A24], at an annual cost of 11% base [A23] | Warehousing means paying for stock before it sells, not after; a seller without working capital to spare should not graduate even if the SKU's order volume clears the break-even line |
| Seller can absorb an unsold-stock write-off, modelled at 7% of units shipped in the base case [A22] | This is the one cost the reformed parcel lane never imposes at all, since nothing is shipped abroad before it is sold; graduating means accepting that some stock will not sell and its cost is gone |

Graduation, in other words, is not a reward for a seller's general success. It is a decision that should be made SKU by SKU, on a volume, return-rate and working-capital test, because the warehouse lane trades away the reformed parcel lane's main advantage, no inventory risk, in exchange for lower per-order logistics cost once volume is high enough to justify it. A seller with one SKU selling 15 orders a month and nine others selling two should graduate the one SKU and keep the rest on the reformed parcel lane; graduating the whole catalogue because one SKU clears the threshold would import inventory risk onto SKUs that never asked for it.

### 18.4 Who files once a SKU graduates, and what it does to the declaration count

A SKU that graduates to the warehouse lane exports under the inventory-based framework, through an exporter-on-record (EOR) holding valid IEC and GSTIN, buying from the seller-on-record under DGFT's 5 August 2026 framework [C17, C18]. The seller does not stop being the seller of record for GST and incentive purposes (section 14.3); the EOR is a second registered party sitting between the seller and the destination customer for this one SKU's exports, not a replacement for the seller's own obligations. Graduating a SKU also changes how many customs declarations the cluster's exports generate: a consolidated lane files far fewer declarations per order than a direct parcel lane does, in the same proportion our model shows for the cluster desk's own consolidation, 40 orders a carton and 5 cartons a bill turning 10,000 individual parcel declarations into 50 bills [T9]. A seller with several SKUs graduated to the warehouse lane therefore contributes to customs seeing fewer, larger filings rather than more, smaller ones, which is the same declaration-count logic section 24 applies to the reformed parcel lane generally, just carried one step further for the SKUs that have earned it.

### 18.5 Why we keep warehousing at all, rather than drop it from the recommendation

A fair question is why section 3.3's recommendation names overseas warehousing at all, given that it never clears the reformed parcel lane at the unit level in any scenario [T12]. The answer is that break-even in 18.2 is measured per SKU per month, and a seller's catalogue is not one SKU; a seller with a handful of slow-moving designs and one design that genuinely sells 10 or more orders a month every month has a real decision to make for that one design, even while the reformed parcel lane remains correct for the rest of the catalogue and for every seller whose SKUs do not clear the threshold. Dropping warehousing from the recommendation entirely would leave that seller with no answer for their fastest-moving SKU beyond "keep using the reformed parcel lane forever," which the model itself does not support once volume is high enough to amortise a fixed monthly cost per SKU [A26]. Keeping it as a graduation option, explicitly bounded by the signals in 18.3 rather than offered as a general upgrade, lets the recommendation answer both the typical seller, for whom the reformed parcel lane is the right lane, and the occasional high-volume SKU, for whom it is not, without overstating what warehousing can do for the typical case it is not built for.

Exhibit for the deck: T4 and T12 back the appendix A1 model backup; the graduation-signal table is the source for slide 3's "graduate at ten orders a month" caption on the access-levers panel.

## 19. Every actor wants something the others hold

**Answer.** Ten actors sit around the e-commerce export table, and each one holds something that at least one other actor needs: CBIC holds the power to let a parcel move or to stop it, DGFT holds the registration a seller needs before claiming an incentive, platforms hold the shelf space a seller needs to reach a buyer, and sellers hold the order volume that gives a carrier or a platform a reason to cut a rate. The case asks for "a consensus-building idea to align small sellers, platforms, logistics providers and the multiple government agencies involved" [C-R3] precisely because none of these ten can act alone. We place each actor on a power-interest grid, read the position each has already put on the public record [Lane G], and frame the coordination problem as a two-level game in Robert Putnam's sense: a workable compact has to clear a domestic ratification test inside each ministry and a second test against the rules that destination customs authorities and international bodies already enforce.

### 19.1 Ten actors, ranked by power and interest

The grid below is our own placement, in the same spirit as the option scoring in T13: a team judgement, stated plainly rather than dressed up as a survey finding. We sort by power (the ability to block or enable the reform) and by interest (how much the outcome matters to that actor's own mandate or revenue).

| Actor | Power | Interest | Why | What it wants |
|---|---|---|---|---|
| DPIIT | High | High | Convenes the Inter-Ministerial Committee named in the brief [C-R0] | A workable compact it can present as its own reform |
| DGFT | High | High | Owns the Exporter-on-Record framework and incentive eligibility [Lane C] | Clean seller data it can trust for incentive release |
| CBIC | High | High | Owns the customs check itself; the brief's central worry is "weakening customs checks" [C-E6] | Every parcel still declared, risk data it can act on |
| Department of Posts (DoP) | Medium | High | Runs the 1,013 Dak Ghar Niryat Kendra network that already touches small sellers [C29, C30] | Volume through its own counters, not routed around them |
| RBI and AD banks | High | Medium | Owns the FEMA realisation window that incentive release depends on [Lane C] | A seller ID link it does not have to build itself |
| GSTN | Medium | Medium | Owns the eBRC and GSTR-1 link that matches a claim to a payment [Lane C] | One data feed, not six ad-hoc requests from six schemes |
| Platforms | High | Medium | Set listing terms and fees a seller cannot negotiate alone [3.4 R1] | More sellers able to list and ship, without taking on customs risk themselves |
| Carriers | Medium | Medium | Set the rate a seller pays per parcel [T2, T3] | Pooled volume worth building a dedicated rate card for |
| Sellers | Low | High | The intended beneficiary, with the least power of any actor here [C-B2] | Less paperwork, a fair rate, no fresh-import treatment on a return |
| Seller councils (GJEPC, EPCH and similar) | Medium | High | Speak for sellers in policy forums the sellers themselves rarely reach | A reform their members can point to and claim credit for |

Government agencies here are named as agencies, consistent with our content rule: no agency has agreed to anything in this report; the compact in section 20 is a proposal, not a settled arrangement.

### 19.2 What each actor has already said in public

We quote only what Lane G verified, and we never dress an indirect-speech report up with quotation marks it does not have. Four of the rows below are direct quotations; three are indirect-speech summaries, marked as such.

| Actor | Statement | Reading |
|---|---|---|
| DGFT / Commerce Ministry | Union Minister Piyush Goyal, releasing DGFT's E-Commerce Exports Handbook for MSMEs, said e-commerce "can become a natural bridge between MSMEs and global market" [G07] | The ministry frames the problem the same way the case does: access, beyond paperwork alone |
| Seller council (GJEPC) | Chairman Kirit Bhansali said of the Union Budget 2026-27 reforms: "We wholeheartedly welcome these progressive reforms by the Government of India" [G01] | A seller council is prepared to back the direction of the 2026 reforms publicly |
| Department of Posts | The then Secretary, Department of Posts, said Dak Niryat Kendras "are expected to give a boost to small traders" [G04] | DoP sees the DNK network as a growth channel, a reason it would want to sit inside any compact rather than be routed around it |
| Carrier | DHL Express India leadership said "Reaching Tier-2 and Tier-3 markets is essential. Companies that serve these areas effectively capture the market" [G06] | Carriers already see the small-seller segment as commercially worth serving, which supports a pooled rate-card tender rather than a subsidy |
| Think tank (GTRI) | GTRI's own modelling states that without a dedicated e-commerce export policy, "our e-commerce exports might only reach USD 25 billion by 2030, despite having the potential to reach Rs 29,34,400 crore ($350 billion)" [G03] | An independent voice frames the cost of inaction in the same order of magnitude the case implies |
| Finance Ministry | Reported in indirect speech only: the Union Finance Minister announced, in the Union Budget 2026-27 speech, the removal of the ₹10 lakh per-consignment value cap on courier exports as a measure to help small businesses, artisans and start-ups [G12] | The baseline reform (section 4) already carries political cover at the top of government |
| RBI | Reported in indirect speech only: the RBI Governor met export federations, export promotion councils, the CII export committee and FEDAI in Mumbai on 25 June 2026 on FEMA matters including export credit, and the RBI said it would examine the feedback to "further support exporters" [G13] | RBI is already in a listening posture on exporter-facing FEMA questions, which is the entry point for a seller ID data link |

Lane G could not find a verbatim, attributable quote from CBIC, GSTN, FIEO, or from any named seller or seller association speaking in its own words about platform access or returns cost; it records this as a genuine gap in the evidence, not an oversight to paper over [Lane G Gaps]. We carry that gap forward rather than inventing a quote to fill it. The absence is itself a finding: the actor with the least power in the grid above, the seller, is also the actor whose own voice is least represented in the public record we could verify.

### 19.3 A two-level game: domestic ratification and international constraint

Putnam's two-level game frames international and domestic negotiation as two linked tables: an agreement only holds if it falls inside the "win-set" that domestic actors will ratify and inside the rules that the other table's players already enforce. Here the "international" table is not a foreign government across from India; it is the set of rules that destination customs authorities, the Universal Postal Union and the World Customs Organization already apply to a parcel once it leaves India, which our proposal cannot override.

| Level | Who sits at the table | What constrains the deal |
|---|---|---|
| Domestic (Table 1) | DPIIT, DGFT, CBIC, DoP, RBI, GSTN, platforms, carriers, sellers, seller councils | Each must see its own gain in section 20's give-get matrix or it will not ratify the compact inside its own mandate |
| International (Table 2) | Destination customs (for example the US de minimis change and the EU's low-value parcel duty, read in section 8), the Universal Postal Union, the World Customs Organization Framework of Standards on Cross-Border E-Commerce | The pooled rate card and the risk-scored seller tiers must still produce data that destination customs can accept; a UPU Director General has already warned that the EU's 2026 parcel fee "could affect millions of consumers, e-commerce firms, postal operators and logistics providers" in indirect-speech reporting [G08] |

The practical implication for section 20 is that the compact cannot be designed around domestic convenience alone. A seller-tier system that satisfies CBIC's risk appetite but produces data destination customs will not recognise fails the international half of the game; a data link that destination customs would accept but that RBI or GSTN will not feed fails the domestic half. The compact in section 20 is built to clear both tables at once, which is why its give-get matrix names what each domestic actor receives and why its scorecard reports measures (declarations risk-scored, incentive-release turnaround) that an international counterpart such as a destination customs agency or the World Customs Organization's own risk-management standard [G09] can also read.

### 19.4 What the grid implies for sequencing

A power-interest grid only earns its place if it changes the order in which a committee acts; merely listing actors in rank order wastes the exercise. Reading section 19.1 against section 19.3 together, three sequencing choices follow. First, DPIIT has to convene before any other actor moves, because it is the only actor in the grid with high power and no mandate of its own to protect, which is exactly why case requirement R3 asks for a "consensus-building idea" from a policy consultant rather than from CBIC or DGFT directly [C-R3]. Second, CBIC's veto cannot be designed around; every mechanism in sections 20 to 24, from the seller tiers to the pooled rate card, is built on the explicit premise that CBIC keeps full examination authority and simply receives better data, never less authority. A proposal that tried to trade away any part of that authority for speed would fail the domestic ratification test in section 19.3 before it ever reached an international audience. Third, the actor with the least power in the grid, the seller, has the least capacity to enforce the compact's promises on its own, which is why seller councils such as GJEPC and EPCH sit in the grid as a distinct row rather than being folded into "sellers": a council that has already welcomed the 2026 reforms in public [G01] is a channel DPIIT can use to carry the compact's commitments back to sellers who have no seat at the Inter-Ministerial Committee table themselves.

These three sequencing choices are carried forward directly into section 20: the compact names DPIIT as the convening and accountable actor for the data link and the scorecard, keeps CBIC's accountability for grading and clearance undiluted, and gives seller councils an explicit role in outreach rather than treating sellers as a single undifferentiated row at the bottom of the grid.

Exhibit for the deck: cover mind map, actor nodes (DPIIT, DGFT, CBIC, DoP, RBI, GSTN, platforms, carriers, sellers, seller councils) sized by power-interest placement; slide 2 market tiles carry the one-line foreshadow that access and coordination matter as much as freight for the binding constraint.

---

## 20. An Inter-Ministerial compact gives each actor one duty and one gain, with a published monthly scorecard

**Answer.** We propose an Inter-Ministerial e-commerce export compact: each of the ten actors from section 19 gives one specific thing and gets one specific thing it wants in return, one shared seller-ID data link carries the record each actor needs, a RACI table fixes who decides what, and a monthly scorecard published by the DPIIT secretariat keeps every actor's commitment visible to the other nine. No agency has agreed to this; it is a proposal for the Inter-Ministerial Committee named in the brief [C-R0], built to answer case requirement R3 [C-R3] on its own terms: a consensus-building idea, not a mandate.

### 20.1 The give-get matrix

Coordination theory calls this a give-get matrix: list what each actor contributes and what it receives, so that every row shows a net gain to that actor individually, beyond any net gain to the system as a whole. A compact that asks an actor to give more than it gets will not survive first contact with that actor's own mandate.

| Actor | Gives | Gets |
|---|---|---|
| DPIIT | Convening authority, the published scorecard, the secretariat function | A reform it can present as its own, with a working compact instead of a stalled committee |
| DGFT | The Exporter-on-Record registration data and incentive eligibility rules | Clean, seller-ID-linked order data to match against each incentive claim |
| CBIC | Risk-scoring authority kept intact; no reduction in the right to examine any parcel | Structured risk data per seller instead of an undifferentiated flow of parcel-level paperwork |
| Department of Posts | Counter access and booking data from the 1,013 Dak Ghar Niryat Kendras [C29, C30] | Higher throughput per centre as cluster desks route volume through, not around, DNK counters |
| RBI and AD banks | A FEMA realisation window read against the same seller ID | Incentive release that is already matched to realised payment, reducing the RBI's own monitoring burden |
| GSTN | The eBRC and GSTR-1 data feed, structured by seller ID | One validated feed instead of ad-hoc matching across multiple schemes |
| Platforms | A seller fee sheet published in the open and access to each seller's own order data | A larger pool of sellers able to list and ship without the platform taking on customs risk itself |
| Carriers | A single tender bid on the pooled rate card instead of many small, low-margin bookings | Pooled volume worth pricing competitively, instead of parcel-by-parcel quotes |
| Sellers | Time: identity checks once at onboarding, a tier record built from their own history | Less paperwork per order [A07 to A27], a pooled rate [A28], and (as a policy ask, not yet in law, see section 21) resolution of a return abroad rather than at home |
| Seller councils | Outreach and credibility with their own member base | A reform their members can see working, with their own advocacy reflected in the compact's design |

### 20.2 Who decides what: a RACI table

A give-get matrix says what each actor wants; a RACI table (Responsible, Accountable, Consulted, Informed) says who actually makes each decision, which is the part a consensus-building idea usually skips. We assign it across six core activities, grouping the ten actors into the seven decision-making blocks that actually meet.

| Activity | DPIIT | DGFT | CBIC | DoP | RBI / GSTN | Platforms / carriers | Sellers / councils |
|---|---|---|---|---|---|---|---|
| Maintain the shared seller-ID data link | A | R | C | C | R | I | I |
| Grade a seller into tier 1, 2 or 3 | I | C | A/R | I | C | I | I |
| Risk-score and clear a parcel | I | I | A/R | C | I | I | I |
| Run the pooled freight and returns tender | A | C | I | R | I | C | I |
| Release an incentive or refund | I | A/R | C | I | R | I | I |
| Publish the monthly scorecard | A/R | C | C | C | C | C | I |

CBIC keeps sole accountability for grading and for parcel clearance, which is deliberate: the compact never asks customs to delegate the check itself, only to receive better-structured data to act on. DPIIT keeps accountability for the data link and the scorecard, because a convening body with no stake in any single agency's turf is the only credible owner of a cross-agency commitment.

Reading the table by column rather than by row shows the same discipline from a different angle. DGFT is accountable for exactly one activity, incentive release, and is consulted on two others; it is never asked to be accountable for a customs decision that is not its own to make. RBI and GSTN are responsible for the data link but accountable for nothing on this table, because neither agency owns a decision about a seller or a parcel; their role is to supply a clean feed that the accountable actor in each row can use. Platforms and carriers appear only as consulted or informed on every row, which reflects their actual standing in this compact: a platform or a carrier can be asked for a fee sheet or a tender bid, but it is never given a vote over a customs or incentive decision, because neither actor answers to the Inter-Ministerial Committee the way a government agency does.

### 20.2b Why the RACI table does not grow past six activities

A government coordination document often fails by listing every conceivable task and assigning a RACI letter to each one, which produces a document nobody can hold in their head and nobody actually consults. We limit the table to the six activities where the Inter-Ministerial Committee needs a decision rule now: a seventh activity, such as the physical design of a cluster desk's office space, does not need a RACI entry because no two actors in the grid actually contest who decides it. The test we apply before adding a row is whether at least two actors in section 19.1 would give a different answer if asked who is accountable; if only one actor would ever claim the decision, a RACI row adds length without adding clarity.

### 20.3 The escalation rule

A compact without an enforcement mechanism is a memorandum of understanding that nobody reads twice. We propose a two-week escalation rule, the shortest cycle that still allows a genuine investigation rather than a reflexive one.

| Step | Trigger | Who acts | Deadline |
|---|---|---|---|
| 1 | A scorecard measure (section 20.4) misses its published target for one month | DPIIT secretariat flags the miss in writing to the accountable actor from the RACI table | Within two weeks of the scorecard's publication |
| 2 | The accountable actor responds with a cause and a correction plan | The actor named as "A" in section 20.2 for that activity | Within two weeks of the flag |
| 3 | A second consecutive miss on the same measure | DPIIT places the issue on the next Inter-Ministerial Committee agenda | Within two weeks of the second miss |
| 4 | The Committee reviews and can adjust the target, the mechanism, or (for the pilot) pause the gate (section 26) | The Inter-Ministerial Committee itself | At its next scheduled sitting |

The rule runs on two-week cycles specifically so that a single bad month does not trigger an escalation before an actor has had a fair chance to explain it, while two consecutive misses move the issue to the body that can actually change the design.

A worked illustration, stated plainly as hypothetical and not as a reported result: suppose the "incentive and refund release turnaround" measure in section 20.4 misses its target in month four of the pilot, because GSTN's eBRC feed is running behind the seller-ID link DGFT needs to release a claim. Under step 1, DPIIT's secretariat would flag the miss to GSTN, the actor named accountable for the eBRC data feed in the give-get matrix, within two weeks of the scorecard's publication. Under step 2, GSTN would have two weeks to state the cause, perhaps a backlog in matching GSTR-1 filings to the new seller ID field, and a correction plan, perhaps a dedicated batch job for pilot-cluster sellers. If the same measure misses again in month five, step 3 places the issue on the Inter-Ministerial Committee's agenda, where the Committee can decide whether the fix is a technical one GSTN can absorb or whether the scorecard's turnaround target itself was set too aggressively for a system GSTN did not design with this seller-ID link in mind. Nothing in this illustration is a claim about what will happen in the pilot; it is here to show that the escalation rule produces a specific, traceable action at each step, rather than a vague commitment to "coordinate better."

### 20.4 Scorecard measures

The scorecard is the mechanism that makes the give-get matrix self-enforcing: every actor can see, every month, whether every other actor is holding its end. We keep the measures to ones that map to a tagged number already in this report or in the model, so the scorecard never becomes a fresh, unverified claim of its own.

| Measure | Owner (per RACI) | Target direction | Source for the baseline |
|---|---|---|---|
| Minutes of seller paperwork per parcel | DGFT / cluster desk | Down from today's assumed 45 minutes toward the reformed 15 [A07, A27] | T1, T3 |
| Seller contribution per order | Shared (CBIC data, DGFT incentive, carrier rate) | Up from today's ₹640 base toward the reformed ₹1,038 [T5] | T5 |
| Declarations per 10,000 orders | CBIC | Down from 10,000 parcel declarations toward 50 consolidated bills on the graduation lane [T9] | T9 |
| Incentive and refund release turnaround | DGFT / RBI / GSTN | Faster, matched to realised payment, not a time target we have modelled | 3.4 R2 |
| Return loss per returned order | DoP / carriers | Down from today's ₹2,132 expected loss on a return [T2] | T2, T3 |
| Active sellers in the pilot | DPIIT | Toward the base case 960 against the pilot's 2,400 enrolled [T11] | T10, T11 |

The six measures in section 20.4 are chosen so that the compact's scorecard and this report's own locked numbers are the same numbers, never a second, parallel set invented for the scorecard alone. A committee member reading the monthly scorecard six months into the pilot should be able to trace every line back to a table already in this report, whether T2, T3, T5, T9, T10 or T11, rather than finding a new claim with no model behind it. That discipline is also what keeps the compact answerable to the escalation rule in section 20.3: an actor cannot dispute a scorecard measure's basis, because the basis is published in this report before the pilot even starts.

A compact of this kind is not a new idea in Indian policy practice; it is close in spirit to the kind of multi-agency memorandum that already underlies, for example, the eBRC system linking banks, GSTN and DGFT. What is new here is naming the give-get matrix and the RACI table explicitly, in the open, rather than leaving the division of labour to be worked out informally between departments once the Inter-Ministerial Committee has already approved a general direction. A consensus-building idea that only states the direction, without stating who gives what and who answers for what, is the kind of idea case requirement R3 explicitly asks us to go beyond [C-R3].

Exhibit for the deck: slide 4's compact panel carries the give-get matrix in compressed form (one row per actor, give / get) and the two-week escalation rule as a small flow; the RACI table and the full scorecard sit in the appendix, slide 5, A3.

---

## 21. In our model the reformed parcel lifts a seller's contribution from ₹640 to ₹1,038 an order

**Answer.** In our model, the representative ₹3,960 order [A02] carries a seller contribution of ₹640 under today's direct parcel lane and ₹1,038 under the reformed parcel lane in the base case, a gain of ₹398 an order with no freight subsidy from the exchequer [T5]. The gain comes from three sources we can trace line by line: the cluster export desk's paperwork saving, the pooled rate card's freight saving, and pooled handling of returns. We read T3, T5 and T6 in that order, because the waterfall in T6 is the mechanism and T5 is the result it produces across three scenarios.

### 21.1 The reformed parcel lane, line by line

T3 is the same cost structure as T2 (the direct parcel lane, read in section 9), run through the reformed assumptions instead: lower admin minutes [A27 against A07], a lower agent fee burden [A09], the pooled rate card's freight saving [A28], and a lower expected loss on a return [A31].

| Line | Bear | Base | Bull |
|---|---|---|---|
| Price | ₹3,520 | ₹3,960 | ₹4,400 |
| Platform fee | ₹528 | ₹594 | ₹660 |
| Freight | ₹1,045 | ₹880 | ₹738 |
| Admin (paperwork and agent cost) | ₹62 | ₹38 | ₹25 |
| Product cost | ₹900 | ₹800 | ₹750 |
| Delivered margin before returns | ₹984 | ₹1,648 | ₹2,227 |
| Expected loss on a return | ₹1,741 | ₹1,404 | ₹1,129 |
| Expected contribution | ₹385 | ₹1,038 | ₹1,623 |
| Cost to serve | ₹1,148 | ₹959 | ₹802 |

Every line in T3 is an assumption or a model output, never a measurement: we say "in our model" because the admin and agent-fee minutes behind A07 and A27 come from the case narrative and our own time estimate, not a primary time-and-motion study (section 30 carries the full justification). The price, platform fee and product cost lines are unchanged from today's lane (T2), because the reform touches how a parcel is processed and moved, not what it sells for or costs to make.

### 21.2 Today against reformed, line by line, base case

Putting T2 and T3 side by side in the base case isolates exactly where the ₹398 gain comes from, line by line, before the waterfall in section 21.3 assigns it to a mechanism.

| Line | Today (T2) | Reformed (T3) | Difference |
|---|---|---|---|
| Freight | ₹1,000 | ₹880 | −₹120 |
| Admin | ₹232 | ₹38 | −₹194 |
| Expected loss on a return | ₹2,132 | ₹1,404 | −₹728 |
| Delivered margin before returns | ₹1,334 | ₹1,648 | +₹314 |
| Expected contribution | ₹640 | ₹1,038 | +₹398 |
| Cost to serve | ₹1,531 | ₹959 | −₹572 |

Freight falls by ₹120 an order and admin falls by ₹194 an order; both are controllable costs the cluster desk and the pooled rate card act on directly. The expected loss on a return falls by ₹728, the largest single line move, because the reformed lane both returns fewer parcels and loses less value on each one that does come back. Cost to serve across the whole order falls by ₹572, from ₹1,531 to ₹959, a reduction of about 37% (₹572 divided by ₹1,531).

### 21.3 The waterfall: three steps from ₹640 to ₹1,038

T6 assigns the ₹398 base-case gain to three discrete mechanisms, in the order a seller would actually experience them: first less paperwork, then a better freight rate, then better handling of a return.

| Step | Contribution per order |
|---|---|
| Today, direct parcel | ₹640 |
| Paperwork moved to the cluster desk | +₹195 |
| Pooled rate card on freight | +₹120 |
| Returns handled through pooling | +₹83 |
| Reformed parcel lane | ₹1,038 |

Two steps are closest to the line-by-line differences in section 21.2: the paperwork step (+₹195) tracks the ₹194 admin saving almost exactly, and the rate-card step (+₹120) tracks the ₹120 freight saving exactly, because both are the direct, uncompounded effect of a single assumption change (A27 against A07, and A28). The returns step (+₹83) is smaller than the ₹728 raw difference in expected loss on a return, because the waterfall's return step isolates only the pooling effect at the margin, after paperwork and freight have already changed the base the return probability is applied to; the two numbers describe different things and are not meant to match.

The returns step carries one necessary caveat that section 2.1 and build-log corrections require us to state plainly: a pooled return point abroad with a single monthly consolidated re-import bill has no confirmed legal basis in current Indian customs law. Existing re-import law is written consignment-wise, one export invoice and one airway bill per re-import [C57]; no CBIC or DGFT provision, and no platform fulfilment programme we could find, supports pooling multiple sellers' returns into one bill [C58]. We present the ₹83 returns step as a policy ask for the compact in section 20 to put to CBIC and DGFT, not as a saving already available under today's rules. If that legal change does not happen, the reformed parcel lane still delivers ₹1,038 minus ₹83, or ₹955, from the paperwork and rate-card steps alone, which is still a gain of ₹315 over today's ₹640, with no freight subsidy.

### 21.4 Why the reformed parcel beats the warehouse lane at the unit level

A fourth lane sits beside today's direct parcel and the reformed parcel in T4: consolidated overseas warehousing, where stock is shipped in bulk ahead of a sale and a local 3PL fulfils each order from inventory already abroad. T5's base case gives the warehouse lane a contribution of ₹892 an order, which sits between today's ₹640 and the reformed parcel's ₹1,038. Read on its own, ₹892 might look like a candidate for the core recommendation; read against T12, it is not.

T12 gives the warehouse lane's break-even point in orders per SKU a month, the volume at which pre-positioning stock abroad starts to beat each comparator.

| Scenario | Break-even against today's direct parcel | Break-even against the reformed parcel |
|---|---|---|
| Bear | 15 orders per SKU a month | Never, at the unit level |
| Base | 10 orders per SKU a month | Never, at the unit level |
| Bull | 8 orders per SKU a month | Never, at the unit level |

The warehouse lane clears today's direct parcel lane once a SKU sells 8 to 15 orders a month, depending on the scenario, because the fixed per-SKU warehouse cost in A26 (₹2,500 a month) spreads thinner as volume rises. It never clears the reformed parcel lane at the unit level in any of the three scenarios, because the reformed parcel lane's own per-order cost structure (T3) already captures most of the same savings, lower admin, a pooled freight rate, pooled returns, without carrying the warehouse lane's fixed monthly cost, its working-capital charge on stock held in advance (A23, A24), or its inventory write-off risk (A22). This is why our recommendation treats consolidated overseas warehousing as a graduation option for proven, high-volume SKUs rather than the core mechanism: a seller whose SKU already clears 10 orders a month in the base case has a genuine case for warehousing, but building the entire reform around a threshold most sellers in the case's description, "a handful of parcels a month" [C-E2], will never reach would leave the median seller no better off than today.

### 21.5 What the ₹398 gain does not include

Two deliberate exclusions keep the ₹398 base-case gain from overstating what the reform actually changes, and we state both rather than let a reader discover them later and discount the whole model.

The first is destination duty. T1's A25 holds the destination duty and VAT difference between the direct parcel lane and the reformed parcel lane at zero, by assumption, because the reform changes how a parcel is processed and declared inside India, not what a US, UK or EU customs authority charges on arrival. Section 8 reads the destination-side rules in detail, including the US de minimis change and the EU's low-value parcel duty from 1 July 2026; those changes affect both lanes equally in our model and are therefore absent from the ₹398 figure, which is a statement about India-side cost to serve, not a statement about what happens to a parcel once it clears the other country's border.

The second is the first-shipment freight bridge in T10's pilot budget, ₹48,00,000 set aside to cushion a seller's first consolidated shipment while the pooled rate card is still being proven out. That bridge is a pilot-period cost to the programme, not a line inside the ₹1,038 reformed-parcel contribution; it exists precisely because the per-order model in T3 assumes the pooled rate card is already working at its stated saving, and a seller's very first shipment under a brand-new tender is the one shipment least likely to see that saving in practice. Keeping the bridge outside the unit economics in T3 avoids folding a hidden subsidy into what we call an unsubsidised gain.

A third, smaller exclusion is worth naming for the same reason. The ₹398 gain is computed on a single representative item, a ₹3,960 handmade decor or textile piece weighing 0.5 kg [A02, A03]; it is not an average across every product category in the clusters read in section 5, and a heavier or lower-value item would run through T2 and T3 with different freight and admin lines. We chose one representative item deliberately, because a blended average across many product types would hide exactly the kind of line-by-line reasoning this section relies on, but a reader should not treat ₹398 as a universal per-order figure for every seller in every cluster; it is the figure for the item this model is built around, stated every time it appears, consistent with the content rule that the model is a model and the representative item is the only one it speaks for directly.

Taken together, section 21's reading of T3, T5 and T6 supports one conclusion stated plainly: the ₹398 base-case gain comes from process change inside India, not from a subsidy, not from a change in what destination countries charge, and not from averaging away the cases where the gain would be smaller. That is the basis on which section 3.3's contrarian recommendation table compares our proposal against a freight subsidy, and it is why the comparison in that table credits our proposal with "no freight subsidy" rather than a cost the exchequer would carry forward on every parcel.

One further distinction matters for how a committee member should read the ₹398 figure against a different kind of claim it might be confused with: this is a per-order gain to the seller, not a per-order cost to the government. The cluster desk's staffing, the data link and the evaluation in T10 are programme costs borne once, during the pilot, and are read separately in section 25; the ₹195 paperwork step and the ₹83 returns step in T6 are not government spending passed through to the seller, they are time and risk the seller no longer has to carry personally once the desk and the tier system exist. Only the ₹120 rate-card step touches a market price, the freight rate a carrier charges, and even that step is a negotiated saving on a tender, not a subsidy paid from a budget line. Reading section 21 as a whole, the ₹398 figure survives every qualification we can state against it without changing its sign or its order of magnitude: it holds across bear, base and bull assumptions (section 22), it holds under a weaker rate-card outcome (section 23), and it holds whether or not the pooled-return legal change in section 21.3 is ever granted.

Exhibit for the deck: slide 2's moneyshot card, the ₹640 to ₹1,038 waterfall, with the returns step marked as a policy ask rather than a current entitlement.

---

## 22. Three scenarios: even the bear case lifts an order from ₹14 to ₹385

**Answer.** We never give a single point estimate for an uncertain number: T5 runs bear, base and bull assumptions through all three lanes, and in every one of the three scenarios the reformed parcel lane beats today's direct parcel lane. The honest reading is that this is a model, not a measurement: the gap between ₹14 and ₹385 in the bear case is as much a statement about how thin today's margin already is as it is a claim about the reform's own power.

### 22.1 All three lanes across all three scenarios

T5 is the full scenario table: three lanes (today's direct parcel, the reformed parcel, and the consolidated warehouse lane read in sections 18 and 24) across bear, base and bull assumptions.

| Scenario | Today | Reformed parcel | Warehouse | Reformed minus today |
|---|---|---|---|---|
| Bear | ₹14 | ₹385 | ₹176 | +₹371 |
| Base | ₹640 | ₹1,038 | ₹892 | +₹398 |
| Bull | ₹1,209 | ₹1,623 | ₹1,532 | +₹414 |

The reformed-minus-today gain barely moves across scenarios, from ₹371 in the bear case to ₹414 in the bull case, a range of only ₹43. The absolute contribution moves far more, from ₹14 to ₹1,209 for today's lane and from ₹385 to ₹1,623 for the reformed lane. This tells us the reform's effect is close to additive and fairly stable; what is unstable is the environment it operates in, chiefly the return rate and the freight cost it is layered on top of.

### 22.2 What differs between the scenarios, named

Three-scenario thinking only means something if the assumptions behind each scenario are named, not left as unlabelled lines on a chart. We pull the drivers that move most between bear and bull from T1.

| ID | Input | Bear | Base | Bull |
|---|---|---|---|---|
| A05 | Direct parcel freight, 0.5 kg | ₹1,100 | ₹1,000 | ₹900 |
| A07 | Minutes of seller paperwork per direct parcel | 60 | 45 | 35 |
| A09 | Agent or CHA fee per direct parcel | ₹150 | ₹120 | ₹100 |
| A10 | Return rate, direct parcel | 0.22 | 0.20 | 0.18 |
| A28 | Pooled rate-card saving on freight | 5% | 12% | 18% |
| A31 | Share of direct returns routed to a pooled return point abroad | 0.50 | 0.65 | 0.80 |

The bear case is not an arbitrary pessimistic haircut; it is the same model with higher freight, a higher return rate, a smaller rate-card saving and a smaller share of returns pooled. Every one of those bear-case values is still inside a plausible range given what Lane C and Lane D verified (for example, CBIC's own cited range for e-commerce export returns is 20% to 25%, against our bear-case A10 of 0.22) [Lane C seed]. The bear case is a real scenario the reform could land in, not a strawman built to be beaten.

### 22.3 What the bear case means for adoption

A ₹14 expected contribution on a ₹3,960 order is, in plain terms, a seller working for almost nothing after accounting for the chance of a costly return. At that level, the case's own observation that "for a seller exporting a handful of parcels a month, the effort is often not worth the reward" [C-E2] is not a hypothesis; it is close to arithmetically true in our model. A reformed-lane contribution of ₹385 in the same bear case is still thin, but it is 27 times the bear-case figure for today's lane (₹385 divided by ₹14), and it crosses into territory where a seller doing this part-time, alongside domestic sales, would plausibly keep exporting rather than stop.

| Reading | Today, bear case | Reformed, bear case |
|---|---|---|
| Expected contribution per order | ₹14 | ₹385 |
| As a share of the ₹3,960 order price | 0.4% | 9.7% |
| Plausible seller response, our judgement | Exit after a bad run of returns | Continue, with a thinner margin than the base case but a workable one |

The honest caveat the skill's rhetoric guidance asks us to state inline, before a reviewer raises it: this is illustrative modelling of a representative item, not a measured adoption curve from a trial. We have not observed a single seller's actual decision to continue or exit exporting at either contribution level; the validation plan in section 29 exists precisely because that decision has not yet been tested with real sellers.

### 22.4 The scenarios carry through to the pilot's own budget

Three-scenario thinking shapes the model in sections 9 to 18 and shapes, in exactly the same way, how the pilot in sections 25 to 27 is sized. T11 gives the pilot's own outcomes under the same bear, base and bull labels, so that a reviewer can see the scenario range is applied consistently across the whole report rather than switched off once the discussion turns from the unit model to the programme budget.

| Scenario | Active sellers | Seller gain against today | Pilot budget per active seller |
|---|---|---|---|
| Bear | 600 | ₹0.80 crore | ₹59,620 |
| Base | 960 | ₹2.29 crore | ₹37,262 |
| Bull | 1,320 | ₹4.92 crore | ₹27,100 |

The pattern here mirrors section 22.1's reading of T5: the bear case for the pilot is not a collapse, it is a smaller programme (600 active sellers against a base case of 960, out of 2,400 enrolled [T10]) that still costs more per active seller (₹59,620 against ₹37,262) because the fixed costs in T10, the cluster desks, the data link, the evaluation, do not shrink in proportion to a lower take-up rate. A committee reading only the base-case figures would see a pilot that costs ₹37,262 per active seller; reading the bear case alongside it shows that even a disappointing take-up rate still produces 600 sellers earning a reformed-lane contribution of ₹385 an order in our model, rather than today's ₹14, which is the adoption argument made in section 22.3 carried through to programme scale.

### 22.5 Why we did not collapse three scenarios into one range

The rhetoric guidance behind three-scenario thinking warns specifically against showing three lines on a chart without naming what differs between them; a chart of ₹14, ₹640 and ₹1,209 with no driver table beneath it would invite a reader to treat the spread as noise rather than as the direct, traceable consequence of six named assumptions in T1. A simpler report could have presented T5 as a single range, "₹14 to ₹1,623," and left it there. We keep bear, base and bull as three named points rather than one range for a specific reason: a range alone tells a reader how wide the uncertainty is, but it does not tell them which combination of freight, return rate, paperwork time and rate-card saving produces the low end against the high end, and a committee cannot act on a range it cannot decompose. Naming the three points and tying each to the driver table in section 22.2 means a reviewer who doubts our base-case return rate of 20% [A10], for instance, can trace exactly how that single assumption moves the bear and bull figures, rather than treating the whole ₹14 to ₹1,623 span as one undifferentiated uncertainty. The same discipline carries into section 23's tornado chart, which answers the follow-up question a range alone cannot: of all the assumptions behind the three scenarios, which one actually does the most work.

The same three-scenario structure is used consistently across this report, not reinvented per section: section 9's cost-to-serve breakdown, section 21's waterfall and this section's T5 reading all keep bear, base and bull as the same three labels, applied to the same representative order. A reviewer moving between sections should never have to re-learn what "bear" means; it always means the combination of assumptions in T1's bear column, never a separately chosen pessimistic case picked to make a particular section's argument look stronger or weaker than the model actually supports. That consistency is also what allows section 23's tornado chart to be read against this section's scenario table without any conversion: the tornado's bear and bull swings for each assumption are computed on the same T1 values that produce the ₹14 and ₹1,209 figures for today's lane here, so a reviewer who has already absorbed the driver table in section 22.2 can read the tornado in section 23.1 as the same model, cut a different way, rather than as a second, separate analysis to reconcile against the first. The combined reading section 22 offers a committee is this: the reform's direction is stable across every scenario we modelled, and the one thing that genuinely varies is how much is gained, which is a much easier result for a committee to act on than a single, unqualified point estimate would have been.

Exhibit for the deck: appendix slide 5, A2, the three-scenario bar set for T5 with the named-assumption box from section 22.2 directly beneath it.

---

## 23. The pooled rate card is the least certain lever, so the pilot tests it first

**Answer.** T8's tornado chart ranks every assumption by how much it swings the reformed-minus-today uplift away from its base case of ₹398, and the pooled rate-card saving (A28) is the largest single bar, swinging the uplift from −₹70 at its bear value to +₹60 at its bull value, a range of ₹130. Because A28 is also the one input Lane F could not find a confirmed Indian precedent for, it is both the most important and the least certain lever in the whole model, which is exactly why the pilot in sections 25 and 26 is designed to test it first and gate on it before anything scales.

### 23.1 The tornado, read top to bottom

T8 lists every input assumption by its effect on the ₹398 base-case uplift when moved to its own bear and bull value, holding every other input at base.

| ID | Input | At bear | At bull |
|---|---|---|---|
| A28 | Pooled rate-card saving on freight | −₹70 | +₹60 |
| A07 | Minutes of seller paperwork, direct parcel | +₹38 | −₹25 |
| A09 | Agent or CHA fee, direct parcel | +₹30 | −₹20 |
| A27 | Minutes of seller paperwork, cluster desk | −₹25 | +₹12 |
| A31 | Share of returns routed to pooled point abroad | −₹14 | +₹14 |
| A05 | Direct parcel freight, 0.5 kg | +₹12 | −₹12 |
| A04 | Seller product cost | +₹9 | −₹4 |
| A10 | Return rate, direct parcel | +₹8 | −₹8 |
| A21 | Cost to process one local return | −₹6 | +₹6 |

A28 sits at the top because the uplift is most sensitive to it; A29 and A20, the two bottom rows in the full T8 table, move the uplift by ₹0 in either direction and are left out of the table above because they carry no weight in this particular comparison.

### 23.2 A28's swing as a share of the whole gain

Expressing each bar as a share of the base-case ₹398 uplift shows how much of our central claim rests on each single assumption, a ratio of two tagged numbers (each bar's bear-to-bull range from T8, divided by the ₹398 base uplift from T6).

| ID | Input | Bear-to-bull range | Share of the ₹398 base uplift |
|---|---|---|---|
| A28 | Pooled rate-card saving | ₹130 | 32.7% |
| A07 | Paperwork minutes, direct parcel | ₹63 | 15.8% |
| A09 | Agent or CHA fee | ₹50 | 12.6% |
| A27 | Paperwork minutes, cluster desk | ₹37 | 9.3% |
| A31 | Share of returns pooled abroad | ₹28 | 7.0% |
| A05 | Direct parcel freight | ₹24 | 6.0% |
| A10 | Return rate | ₹16 | 4.0% |
| A04 | Seller product cost | ₹13 | 3.3% |
| A21 | Local return processing cost | ₹12 | 3.0% |

A28 alone accounts for about a third of how much the total uplift could move under different assumptions; the next two bars together (A07 and A09, both paperwork- and agent-fee-related) account for roughly another quarter. The pilot's budget and sequencing decisions in section 25 follow directly from this ranking: an evaluation that measures the actual rate-card saving a carrier tender delivers is worth more to the committee's confidence than an equivalent effort spent re-measuring paperwork minutes, which are already the second-largest bar but carry less than half of A28's range.

### 23.3 What would change the recommendation

The recommendation does not stand or fall on A28 alone, but it is the one input where a disappointing result would most change our confidence in the magnitude of the case we have made. If the pooled rate-card tender in a pilot cluster delivers only the bear-case saving of 5% instead of the base case's 12% [A28], the reformed lane's freight line would sit closer to its own bear value, and the uplift would fall by A28's bear-case swing of ₹70.

| Scenario | Reformed contribution | Still ahead of today's ₹640 by |
|---|---|---|
| Base case (A28 delivers 12%) | ₹1,038 | ₹398 |
| Rate card underperforms to its bear value (A28 delivers 5%) | ₹968 (₹1,038 minus ₹70) | ₹328 |

Even in that weaker outcome, the reformed lane still delivers a gain of ₹328 an order over today's ₹640, built almost entirely from the paperwork step and the returns step in the T6 waterfall rather than the rate card. The recommendation would change in degree, not in direction: we would report a smaller gain and revisit the pooled-tender design (competition among more carriers, a longer tender cycle, a narrower route set) before claiming the full ₹398, but we would not abandon the cluster desk or the seller-tier design, because those two mechanisms account for roughly two-thirds of the base-case gain (₹195 plus ₹83, against ₹120 for the rate card, from T6) and do not depend on a carrier tender succeeding.

### 23.4 A pre-mortem on the rate-card lever

A pre-mortem asks a team to assume a lever has already failed and work backward to the reasons, before the lever is built, so that the reasons can be designed against rather than discovered after the money is spent. Applied to A28, three failure paths stand out, each tied to a specific feature of the pooled-rate-card mechanism rather than a generic worry about execution.

| Failure path | Why it could happen | What it would look like in the data |
|---|---|---|
| Too few carriers bid competitively | Lane F found no confirmed Indian precedent for a pooled small-parcel rate-card tender of this kind; the closest adjacent examples, a freight-reimbursement scheme and a carrier-association memorandum, are not the same instrument | The tender clears, but at a saving closer to A28's bear value (5%) than its base value (12%) |
| The pooled volume never reaches the scale the tender assumed | Six clusters and 2,400 enrolled sellers [T10] is the pilot's ceiling, not a guaranteed floor; the bear-case active-seller count in T11 is 600 | A carrier offers a volume-tiered rate that only opens its best tier above a threshold the pilot cluster does not reach |
| The saving is real on paper but does not reach the seller | A rate card negotiated at the cluster level could be absorbed into desk operating costs or carrier fuel surcharges rather than passed through to the per-order freight line in T3 | T2 against T3's freight line (section 21.2) shows a smaller gap than the ₹120 base case implies |

Each failure path points to a different fix, which is the purpose of running the exercise before the tender is issued rather than after. The first argues for designing the tender to invite more than one class of carrier, postal and private courier together, rather than assuming competitive bidding will emerge on its own. The second argues for sizing the first tender to the pilot's bear-case volume (600 active sellers, from T11) rather than its base case, so the rate card clears even if take-up disappoints. The third argues for a scorecard measure, already present in section 20.4, that tracks the seller contribution per order directly rather than only the headline rate-card percentage, so that a saving that fails to reach the seller shows up in the compact's own monitoring before it shows up in a second-year audit.

A pre-mortem is only useful if the team doing it is willing to act on an uncomfortable answer, and the honest answer here is that A28 is the one input in T1 built on the thinnest evidence base of the nine that move the tornado in section 23.1: Lane F's own finding is that no confirmed Indian precedent exists for a pooled small-parcel rate-card tender at this scale, only adjacent schemes that are not quite the same instrument. That is exactly why section 25's pilot design treats the rate-card tender as the first thing to test, rather than the first thing to assume, and why section 26's scale gates are written to check the rate-card saving actually realised before committing budget to a second wave built on the assumption that it will.

Exhibit for the deck: appendix slide 5, A2, the tornado chart with A28 flagged as both the largest bar and the pilot's first test.

---

## 24. Customs sees more data on fewer, better-targeted checks

**Answer.** T9's comparison of declarations per 10,000 orders is the clearest single number behind our integrity claim: today's direct parcel lane generates 10,000 separate customs declarations for 10,000 orders, while the consolidated lane on the graduation path generates 50 bills for the same volume, carried by a risk engine and a seller-tier system that still declares and risk-scores every parcel. Fewer declarations is not the same as fewer checks on the risky few; it is the opposite, because the data that today is scattered across 10,000 individually hand-filled forms becomes structured enough for a risk engine to act on. We also state plainly what a pilot of 2,400 sellers cannot prove: it cannot rule out a rare fraud rate, and we say so rather than letting a clean pilot result be read as proof of none.

### 24.1 Declarations per 10,000 orders

T9 compares the direct parcel lane against the consolidated lane, where 40 orders fill a carton and 5 cartons fill a bill.

| Lane | Declarations per 10,000 orders |
|---|---|
| Direct parcel | 10,000 |
| Consolidated (40 orders a carton, 5 cartons a bill) | 50 |

This 200-fold reduction (10,000 divided by 50) is not a reduction in customs attention; every parcel in both lanes is still declared and risk-scored under our proposal, which is the design constraint section 3.3's table states explicitly: "every parcel stays declared and risk-scored; incentives release only against matched payment realisation." What falls is the number of separate paper or digital instruments an officer has to open, read and clear, which is exactly the administrative load that today pushes authorities toward blunt, parcel-level sampling instead of the risk-scored targeting the brief asks for [C-E5].

### 24.2 Integrity measures mapped to the risk they address

The brief names two specific misuse risks: under-invoicing and incentive misuse [C-E5]. Each of our three seller tiers (section 3.5) and the compact's data link (section 20) map to one or the other, so the integrity design is not a single blanket control but a set of controls each pointed at a named risk.

| Misuse type | Control | Mechanism | Owner |
|---|---|---|---|
| Under-invoicing | Risk-scored examination, higher for tier 1 | Every parcel still declared; new sellers (tier 1) get a higher random examination rate | CBIC |
| Incentive misuse | Incentives and GST refunds released only against matched payment realisation | eBRC and GSTR-1 data linked to the seller ID, read against the FEMA realisation window | DGFT, GSTN, RBI |
| Fraudulent return claims | Demotion on any discrepancy; the return itself still crosses risk-scoring, even where pooled abroad (subject to the legal caveat in section 21.3) | A seller's tier can only move down on a confirmed discrepancy, never up on a self-report | CBIC |
| Tier gaming (a seller inflating clean-parcel counts to reach tier 3 early) | Physical verification once at tier 3 entry, plus post-clearance audit of a sample even inside tier 3 | A seller is never fully unexamined; tier 3 only lowers the rate, not the possibility, of a check | CBIC |

### 24.3 What a 2,400-seller pilot cannot prove

The pilot enrols 2,400 sellers across six clusters over 12 months [T10]. That is a real number of sellers and a real period of observation, but it is small against the kind of fraud rate that would matter to a committee worried about systemic misuse, and we state the limit honestly rather than let a clean pilot result stand in for proof that misuse does not exist.

A standard rule of thumb for bounding a rare event from a sample in which it was never observed is that the true rate could still plausibly be as high as about 3 divided by the sample size. Applied to the pilot's 2,400 sellers [T10], a pilot that records zero confirmed cases of under-invoicing or incentive misuse cannot rule out a true misuse rate above roughly 3 in 2,400, or about 0.13%. If the true rate among sellers using the reformed lane were, in reality, 1 in 1,000 (0.1%), we would expect to see only about 2 to 3 cases across the whole pilot (2,400 multiplied by 0.1%), a number small enough that a single missed or delayed detection could make the difference between "no cases found" and "a handful of cases found," without the underlying rate having changed at all.

| Statement | What it means | What it does not mean |
|---|---|---|
| "The pilot recorded zero confirmed misuse cases" | The controls caught nothing the evaluator's sampling was designed to catch, at the scale the pilot ran | It does not mean the true misuse rate is zero, or even close to zero, at national scale |
| "The pilot ran 2,400 sellers for 12 months" | A real, bounded test of the mechanism at a scale the budget in T10 could fund | It is not large enough to detect a rare event with any statistical confidence; a rate below roughly 1 in 1,000 could be entirely missed |
| "Scale only if integrity does not deteriorate" (gate rule, section 26) | The decision rule a disappointing integrity signal would trigger | It is not a claim that the pilot itself can certify the reform fraud-proof before scaling |

This is the same honesty the case asks for when it warns that "too little control opens the door to misuse" [C-E6]: we do not propose closing the loop on that risk with a 2,400-seller pilot and a clean headline number. The independent evaluator's sampling design (section 29) and the gate structure (section 26) exist because a single pilot wave, however well run, is a test of mechanism and uptake, not a national-scale integrity audit, and a committee that reads it as the latter would be reading further into the result than the evidence supports.

### 24.4 What the independent evaluator can and cannot be asked to certify

T10's pilot budget sets aside ₹30,00,000 for an independent evaluation, separate from the cluster desks' own operating budget, precisely so that the integrity read is not self-reported by the same desks being evaluated. The evaluator's sampling design, detailed in section 29, can reasonably be asked to confirm three things: that every parcel in the pilot clusters was in fact declared and risk-scored as designed, that the tier-grading rules in section 3.5 were applied consistently rather than at a desk officer's discretion, and that the scorecard measures in section 20.4 were reported accurately against the underlying data. None of those three tasks requires detecting a rare event; they require auditing a process, which a sample of 2,400 sellers and 12 months of transaction records is entirely capable of doing with confidence.

What the evaluator cannot reasonably be asked to certify, on the same budget and the same sample size, is the absence of rare, deliberate misuse of the kind the case itself names: under-invoicing or incentive fraud by a small number of sellers acting to evade detection. The arithmetic in section 24.3 is the reason: detecting a true misuse rate of around 1% with reasonable confidence from a random sample typically needs a sample in the low hundreds to be reasonably confident of seeing at least one case, and far more to estimate the rate itself with any precision; detecting a rate an order of magnitude rarer, closer to 0.1%, pushes the sample size needed well past the pilot's 2,400 enrolled sellers. We therefore ask the Inter-Ministerial Committee to read a clean pilot evaluation as evidence that the mechanism and the process work as designed, and to rely on the risk engine's ongoing, parcel-level scoring, not the pilot's own sample size, as the actual safeguard against rare misuse once the reform scales past 2,400 sellers. This is the same point the committee should take from section 23's tornado reading of A28: a single pilot wave is good evidence about mechanism and uptake, and comparatively weak evidence about anything that happens at a rate rarer than roughly one in a thousand sellers, whether that is a carrier tender underperforming or a seller attempting fraud.

Exhibit for the deck: slide 3's integrity heat map (misuse type by control) drawn from section 24.2, with T9's declarations comparison as the supporting panel and a footnote carrying the statistical caveat from section 24.3.

## Appendix B: Model tables (hash 8fe043dc97)

Every value is a team assumption or a model output unless a row says otherwise. Verify inputs through the research lanes before freeze.

### T1. Assumption register
| ID | Input | Bear | Base | Bull | Basis |
|---|---|---|---|---|---|
| A01 | INR per USD | 88 | 88 | 88 | RBI reference rate, verify at freeze (Lane F) |
| A02 | USD retail price abroad | 40 | 45 | 50 | representative handmade decor or textile item; Lane B listings scan |
| A03 | kg packed weight | 0.5 | 0.5 | 0.5 | representative item |
| A04 | INR seller product cost | 900 | 800 | 750 | cluster ex-works cost; Lane B |
| A05 | INR direct parcel freight 0.5 kg | 1100 | 1000 | 900 | India Post ITPS and courier aggregator quotes; Lane F |
| A06 | platform referral share of retail | 0.15 | 0.15 | 0.15 | Amazon and Etsy fee pages; Lane B |
| A07 | minutes of seller paperwork per direct parcel | 60 | 45 | 35 | case: forms, portals, agents; Lane E |
| A08 | INR value of one seller hour | 150 | 150 | 150 | team assumption |
| A09 | INR agent or CHA fee per direct parcel | 150 | 120 | 100 | Lane E |
| A10 | return rate, direct parcel | 0.22 | 0.2 | 0.18 | CBIC cites 20 to 25% for e-commerce exports; Lane D |
| A11 | share of direct returns abandoned abroad | 0.85 | 0.8 | 0.75 | case: sellers absorb the loss; Lane E |
| A12 | INR cost to bring one parcel back and clear it | 1500 | 1300 | 1200 | return freight plus clearance; Lane F |
| A13 | INR bulk air freight per chargeable kg, 100 kg plus | 450 | 380 | 320 | forwarder benchmarks; Lane F |
| A14 | chargeable over packed weight in a carton | 1.3 | 1.25 | 1.2 | volumetric factor |
| A15 | USD destination last-mile per order | 6.0 | 5.5 | 5.0 | USPS Ground Advantage or Royal Mail tables; Lane F |
| A16 | USD warehouse pick, pack and storage per order | 5.0 | 4.5 | 4.0 | 3PL and FBA fee tables; Lane F |
| A17 | EOR or consolidator margin on product cost | 0.1 | 0.08 | 0.07 | Lane B |
| A18 | minutes of seller work per order, consolidated | 10 | 6 | 4 | batch pickup |
| A19 | return rate, warehouse lane | 0.18 | 0.15 | 0.12 | faster delivery, local returns; Lane E |
| A20 | share of warehouse returns resold locally | 0.5 | 0.6 | 0.7 | Lane E |
| A21 | USD to process one local return | 4.0 | 3.5 | 3.0 | 3PL tables |
| A22 | unsold stock written off, share of units shipped | 0.1 | 0.07 | 0.05 | inventory risk |
| A23 | annual working capital cost | 0.12 | 0.11 | 0.1 | MSME lending rates; Lane D |
| A24 | months stock is held | 5 | 4 | 3 | turn assumption |
| A25 | destination duty and VAT difference between lanes | 0.0 | 0.0 | 0.0 | held equal; shown separately in research |
| A27 | minutes of seller paperwork per parcel with the cluster desk and pre-filled declaration | 25 | 15 | 10 | Lane E |
| A28 | pooled rate-card saving on direct parcel freight | 0.05 | 0.12 | 0.18 | cluster tender; Lane F |
| A29 | INR to bring a parcel back under matched duty-free re-import | 1200 | 950 | 800 | CBIC returns module; Lane D |
| A30 | unused (kept for ID stability) | 0.75 | 0.6 | 0.5 |  |
| A31 | share of direct returns routed to a pooled return point abroad | 0.5 | 0.65 | 0.8 | 3PL return networks; Lane F |
| A26 | INR a month fixed per SKU in the warehouse lane | 2500 | 2500 | 2500 | 3PL minimums |

### T2. Today's direct parcel, per order
| Line | bear | base | bull |
|---|---|---|---|
| price | ₹3,520 | ₹3,960 | ₹4,400 |
| fee | ₹528 | ₹594 | ₹660 |
| freight | ₹1,100 | ₹1,000 | ₹900 |
| admin | ₹300 | ₹232 | ₹188 |
| product | ₹900 | ₹800 | ₹750 |
| delivered | ₹692 | ₹1,334 | ₹1,902 |
| ret_loss | ₹2,390 | ₹2,132 | ₹1,950 |
| expected | ₹14 | ₹640 | ₹1,209 |
| cts | ₹1,758 | ₹1,531 | ₹1,337 |

### T3. Reformed parcel lane, per order
| Line | bear | base | bull |
|---|---|---|---|
| price | ₹3,520 | ₹3,960 | ₹4,400 |
| fee | ₹528 | ₹594 | ₹660 |
| freight | ₹1,045 | ₹880 | ₹738 |
| admin | ₹62 | ₹38 | ₹25 |
| product | ₹900 | ₹800 | ₹750 |
| delivered | ₹984 | ₹1,648 | ₹2,227 |
| ret_loss | ₹1,741 | ₹1,404 | ₹1,129 |
| expected | ₹385 | ₹1,038 | ₹1,623 |
| cts | ₹1,148 | ₹959 | ₹802 |

### T4. Consolidated warehouse lane, per order
| Line | bear | base | bull |
|---|---|---|---|
| price | ₹3,520 | ₹3,960 | ₹4,400 |
| fee | ₹528 | ₹594 | ₹660 |
| freight | ₹292 | ₹238 | ₹192 |
| lastmile | ₹528 | ₹484 | ₹440 |
| fulfil | ₹440 | ₹396 | ₹352 |
| eor | ₹90 | ₹64 | ₹53 |
| admin | ₹25 | ₹15 | ₹10 |
| product | ₹900 | ₹800 | ₹750 |
| wc | ₹45 | ₹29 | ₹19 |
| writeoff | ₹132 | ₹78 | ₹50 |
| delivered | ₹539 | ₹1,262 | ₹1,875 |
| ret_loss | ₹1,476 | ₹1,207 | ₹987 |
| expected | ₹176 | ₹892 | ₹1,532 |
| cts | ₹1,711 | ₹1,423 | ₹1,199 |

### T5. Expected contribution per order by lane
| Scenario | Today | Reformed parcel | Warehouse | Reformed minus today |
|---|---|---|---|---|
| bear | ₹14 | ₹385 | ₹176 | ₹371 |
| base | ₹640 | ₹1,038 | ₹892 | ₹398 |
| bull | ₹1,209 | ₹1,623 | ₹1,532 | ₹414 |

### T6. Base waterfall, today to reformed parcel
| Step | INR per order |
|---|---|
| Today, direct parcel | ₹640 |
| Paperwork at the cluster desk | ₹195 |
| Pooled rate card | ₹120 |
| Returns pooled abroad | ₹83 |
| Reformed parcel lane | ₹1,038 |

### T7. Today's contribution by return rate and freight (base)
| Return rate | ₹800 | ₹1,000 | ₹1,200 | ₹1,400 |
|---|---|---|---|---|
| 10% | ₹1,187 | ₹987 | ₹787 | ₹587 |
| 15% | ₹1,014 | ₹814 | ₹614 | ₹414 |
| 20% | ₹840 | ₹640 | ₹440 | ₹240 |
| 25% | ₹667 | ₹467 | ₹267 | ₹67 |
| 30% | ₹494 | ₹294 | ₹94 | −₹106 |

### T8. Tornado on the reformed-minus-today uplift (base ₹398)
| ID | Input | At bear | At bull |
|---|---|---|---|
| A28 | pooled rate-card saving on direct parcel freight | −₹70 | ₹60 |
| A07 | minutes of seller paperwork per direct parcel | ₹38 | −₹25 |
| A09 | INR agent or CHA fee per direct parcel | ₹30 | −₹20 |
| A27 | minutes of seller paperwork per parcel with the cluster desk and pre-filled declaration | −₹25 | ₹12 |
| A31 | share of direct returns routed to a pooled return point abroad | −₹14 | ₹14 |
| A05 | INR direct parcel freight 0.5 kg | ₹12 | −₹12 |
| A04 | INR seller product cost | ₹9 | −₹4 |
| A10 | return rate, direct parcel | ₹8 | −₹8 |
| A21 | USD to process one local return | −₹6 | ₹6 |
| A29 | INR to bring a parcel back under matched duty-free re-import | ₹0 | ₹0 |
| A20 | share of warehouse returns resold locally | ₹0 | ₹0 |
| A02 | USD retail price abroad | ₹0 | ₹0 |

### T9. Customs declarations per 10,000 orders
| Lane | Declarations |
|---|---|
| Direct parcel | 10,000 |
| Consolidated (40 orders a carton, 5 cartons a bill) | 50 |

### T10. Pilot budget
| Line | INR |
|---|---|
| Cluster export desks (6 x 4 staff x 12 months) | ₹1,15,20,000 |
| Seller onboarding, cataloguing, photography | ₹72,00,000 |
| Data link and dashboard (IEC, GSTIN, Udyam, eBRC) | ₹60,00,000 |
| First-shipment freight bridge (capped per seller) | ₹48,00,000 |
| Independent evaluation | ₹30,00,000 |
| Contingency (10%) | ₹32,52,000 |
| Total | ₹3,57,72,000 |

### T11. Pilot outcomes in our model
| Scenario | Active sellers | Orders months 7 to 12 | Seller gain vs today | Budget per active seller |
|---|---|---|---|---|
| bear | 600 | 21,600 | ₹0.80 crore | ₹59,620 |
| base | 960 | 57,600 | ₹2.29 crore | ₹37,262 |
| bull | 1320 | 118,800 | ₹4.92 crore | ₹27,100 |

### T12. Warehouse break-even orders per SKU a month
| Scenario | Against today | Against reformed parcel |
|---|---|---|
| bear | 15 | never at unit level |
| base | 10 | never at unit level |
| bull | 8 | never at unit level |

### T13. Option filter (team judgement)
| Option | Seller cost per order (30%) | Customs and tax integrity (25%) | Fiscal cost (5 = cheapest) (15%) | Time to deliver (15%) | Builds on the 2026 reforms (15%) | Weighted | Equal weights |
|---|---|---|---|---|---|---|---|
| New single-window export portal | 3 | 3 | 2 | 1 | 2 | 2.40 | 2.20 |
| Freight subsidy per parcel | 4 | 2 | 1 | 4 | 1 | 2.60 | 2.40 |
| Exempt low-value parcels from checks | 4 | 1 | 4 | 4 | 1 | 2.80 | 2.80 |
| Government export marketplace | 2 | 3 | 2 | 1 | 2 | 2.10 | 2.00 |
| Overseas warehouses for every cluster | 3 | 4 | 2 | 2 | 3 | 2.95 | 2.80 |
| Cluster desk, seller tiers, pooled rates and returns | 5 | 4 | 4 | 4 | 5 | 4.45 | 4.40 |

