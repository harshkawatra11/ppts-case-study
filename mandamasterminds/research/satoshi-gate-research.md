# Project Satoshi Gate: Research Deliverable

**Board recommendation on Paytm's proposed acquisition of Liminal Custody Solutions**

Team: Harsh Kawatra (Delhi Technological University) · Gursimran Kaur (GGSIPU) · Dayita Arora
(Ramjas College, University of Delhi)

Prepared for: M&A Masterminds, September 2026

---

## 0. Document control

**Purpose.** This document answers every question in the Project Satoshi Gate case, the
organisers' brief and the Modeling Clarification. It is the evidence base for a 15-slide board deck
(cover, 12 core slides, appendix, thank you) and for the Excel model `Satoshi_Gate_Model.xlsx`.

**Source hierarchy.** The case document governs every case fact. External research is used only
as context, to test the logic of our assumptions and to inform regulatory design. It never
replaces a case input. Where the real world differs from the case (Paytm's actual cash balance or
P/E, for instance), we say so and keep the case figure.

**Tags used on every number**

| Tag | Meaning |
|---|---|
| `[C §x]` | Case fact, with section reference |
| `[CL]` | Modeling Clarification |
| `[A##]` | Team assumption, listed in §16 |
| `[M]` | Output of the deal model (`model/satoshi_gate_model.py`, mirrored in the Excel file) |
| `[S##]` | External source, listed in Appendix A |

**Model version.** The model was run on 24 Sep 2026 after two research-driven updates, both made
under pre-set rules rather than by judgment after seeing results:
1. The discount rates moved from 15.0% to 15.5% (Paytm) and from 16.5% to 17.0% (Liminal),
   because the 10-year G-sec (7.04%) and Damodaran's India ERP (7.08%) shifted the cost of equity
   by more than 50 bps.
2. The stake price moved from ₹600 Cr to ₹400 Cr, because the researched valuation comparables
   put Liminal's weighted fair value at ₹1,656 Cr, and the pricing rule is 24.9% of fair value
   rounded down to ₹50 Cr.

All figures are ₹ Cr unless stated. FY27 means April 2026 to March 2027, and FY27 is model Year 1.

---

## 1. Question coverage matrix

Every case question, mission item, expected output, organiser brief item and modeling requirement,
with where it is answered.

| ID | Question (short) | One-line answer | Section | Slide |
|---|---|---|---|---|
| M1 | Recommend one of four paths | 24.9% minority stake with ROFR and a gated call option to control | 2, 8 | 2, 6 |
| M2 | Governance to protect client relationships | Independent-majority board, info barrier, standalone brand, client charter, key-shard escrow | 11 | 9 |
| M3 | Structure the payout to limit balance-sheet and rating pressure | ₹400 Cr cash upfront, up to ₹600 Cr only against delivered ARR, zero new debt or shares | 10 | 8 |
| M4 | Factor in the UPI MDR | Included in every path (+₹1.35 EPS), shown as deal-independent | 3, 9 | 3, 7 |
| M5 | Downside scenarios (churn, capital) | Full NPV grid across churn and drag; minority stress tests | 9, 11 | 7, 9 |
| Q5.1.1 | Which structure | Minority stake, 24.9% | 8 | 6 |
| Q5.1.2 | Strategic value of custody/MPC | Real, but regulator-gated and 3 to 7 years out in all four arenas | 4 | 4 |
| Q5.1.3 | Big enough to justify moving beyond payments | Justifies a bounded ₹400 Cr step, not an unbounded ₹4,000 Cr + ₹750 Cr/yr one | 4 | 4 |
| Q5.1.4 | Licence instead of ownership | A licence captures ~70% of operating value but fails on change of control; licence + equity + ROFR is durable | 8 | 6 |
| Q5.1.5 | Reasons to accept or reject | Reject as proposed; approve the restructured minority | 8 | 2, 6 |
| Q5.2.1 | Significance of losing top clients | High under control: 60% of ARR sits with four clients who have precedent reasons to leave | 11 | 9 |
| Q5.2.2 | Governance safeguards | Nine-part safeguard set, mapped to each client concern | 11 | 9 |
| Q5.2.3 | Return profile at 30 to 45% churn | NPV −₹7,518 to −₹7,760 Cr; FY27 EPS ₹4.92 to ₹4.48 | 9 | 7 |
| Q5.2.4 | Churn that makes it unattractive | None: the deal is already negative at 0% churn (−₹7,042 Cr); minority tolerates up to 57.6% | 9, 11 | 7, 9 |
| Q5.3.1 | Financing mix to protect AA- | Cash only for the minority; for a full deal, never debt (3.83x gross debt/EBITDA) | 10 | 8 |
| Q5.3.2 | Cash/equity mix and EPS dilution | FY27 EPS ₹3.44 (all cash) to ₹6.05 (all equity) against ₹7.50; minority ₹8.79 | 10 | 8 |
| Q5.3.3 | Implied multiple and supportability | 18.2x ARR today, 29.1x post-churn, 2.4x the weighted fair value | 7 | 5 |
| Q5.3.4 | Breakeven after ₹750 Cr drag | Full: PAT FY2033, FCF never within 10 years. Minority: PAT FY2028, FCF FY2034 | 9, 16 | 7, 13 |
| Q5.3.5 | MDR offset of drag | 15.3% pre-tax, 11.5% post-tax, and not attributable to the deal | 3, 9 | 3, 7 |
| Q5.3.6 | Deferred, earn-out or CVR structures | They fix price risk, not the drag; only non-control removes the drag | 10 | 8 |
| Q5.4.1 | Regulatory sequence | Three-phase sequence; no mandatory CCI filing or RBI approval expected for the minority | 12 | 10 |
| Q5.4.2 | Extra capital requirements from owning custody | Yes under ownership (₹750 Cr/yr [C]); the minority avoids it, secured by an RBI comfort CP | 12 | 10 |
| Q5.4.3 | Risks pre-signing, signing to close, post-close | Phase-by-phase table | 12 | 10 |
| Q5.4.4 | Data, compliance, AML, infosec structure | Liminal stays a separate FIU-IND reporting entity with its own controls | 12 | 10 |
| Q5.5.1 | If the consortium outbids | Let it win control; it inherits the same revolt and a comparable capital problem | 6 | 11 |
| Q5.5.2 | Response to a higher bid | Compete on structure, never on control price above ₹1,797 Cr | 6 | 11 |
| Q5.5.3 | Justification under multiple compression | Minority is cash-funded and immune; full-deal loss rises to 10.7% of market cap | 6 | 11 |
| Q5.5.4 | Implications of consortium ownership | PhonePe extends into institutional rails; ROFR and Plan B contain it | 6 | 11 |
| Q5.6.1 | Churn above 45%: remediation or unwind | Four-step ladder for a full deal; for the minority, simply do not exercise | 13 | 11 |
| Q5.6.2 | Minority now, option later | Yes, that is the recommendation | 13 | 12 |
| Q5.6.3 | Milestones before exercise | Five gates G1 to G5 | 13 | 12 |
| Q5.6.4 | Standalone subsidiary indefinitely | Yes as an associate; under full ownership the drag persists | 13 | 12 |
| Q5.6.5 | Walk-away conditions after signing | Seven conditions precedent and triggers | 13 | 11 |
| E1 | Recommended structure | §2, §10 | 2, 10 | 2, 8 |
| E2 | Strategic rationale | §4, §5 | 4, 5 | 4 |
| E3 | Financial implications | §9, §10 | 9, 10 | 7, 8 |
| E4 | Churn and downside | §9, §11 | 9, 11 | 7, 9 |
| E5 | Financing structure | §10 | 10 | 8 |
| E6 | Regulatory and governance approach | §11, §12 | 11, 12 | 9, 10 |
| E7 | Risks and mitigants | §14 | 14 | 12 |
| E8 | Roadmap and decision triggers | §15 | 15 | 12 |
| B1 | Situation, performance, competition and positioning | §3, §5, §6 | 3, 5, 6 | 3, 4 |
| B2 | Do not overestimate; logic-backed assumptions | Conservative DCF, scenario weights, 29 disclosed assumptions | 7, 16 | 5, 13 |
| B3 | Acquisition opportunities, risk-benefit, fixes | Four paths plus alternative targets, risk register | 5, 8, 14 | 4, 6, 12 |
| B4 | Valuation, financing, growth | Football field, funding table, strategic arenas | 4, 7, 10 | 4, 5, 8 |
| B5 | Targets mapped against alternatives | MECE filter over eight alternatives: Liminal is the only pass | 5 | 4 |
| B6 | 15-slide format | Cover + 12 core + appendix + thank you | 17 | all |
| K1 | Assumptions disclosed | §16 register, 29 items | 16 | 13 |
| K2 | No external substitution of case inputs | Case facts locked in `Case_Inputs` sheet | 0, 16 | 13 |
| K3 | Unstated parameters are assumptions | Every financing, WACC, minority, JV, earn-out item tagged `[A]` | 16 | 13 |
| K4 | Dedicated assumptions slide | Slide 13 | 17 | 13 |
| K5 | PAT and FCF breakeven | Breakeven table, both bases, all paths | 9, 16 | 7, 13 |

---

## 2. Board answer (executive summary)

**Recommendation.** Do not buy Liminal outright. Take a 24.9% stake for ₹400 Cr of balance-sheet
cash, with a milestone second tranche of up to ₹600 Cr paid only if Liminal's FY29 ARR reaches
₹500 to ₹650 Cr. Add an MPC technology licence, a right of first refusal with a 30-day matching
right against the PhonePe-Mastercard consortium, and an option to take control in months 30 to 42
at fair value, exercisable only if five gates are met.

The proposed ₹4,000 Cr acquisition destroys ₹7,638 Cr of shareholder value in our base case
(₹117.5 per share, 6.4% of market cap) [M]. It stays negative even if every constraint in the case
disappears: with zero churn and zero capital drag it still loses ₹2,203 Cr in the base case and
₹1,073 Cr in the bull case [M]. The price pays for the bull case twice, and the ₹750 Cr annual
capital drag [C §3.2] is larger than Liminal's entire ARR (3.4x) and larger than Paytm's entire
PAT (156%) [M].

The minority structure pays fair value for 24.9% of Liminal's economics (base NPV +₹211 Cr,
probability-weighted +₹128 Cr) [M]. It keeps Liminal neutral, which is the thing its bank and
exchange clients are paying for. It blocks the consortium from walking away with Liminal
unopposed. And it lets Paytm decide on control only after the two unknowns that sink the full deal
(client churn and the RBI capital regime) have resolved.

**The eight expected outputs, answered**

| # | Output | Answer |
|---|---|---|
| E1 | Structure | 24.9% CCPS stake in First Answer India Technologies (Liminal's Indian entity): ₹400 Cr upfront (₹250 Cr primary, ₹150 Cr secondary), Tranche 2 up to ₹600 Cr, ₹25 Cr/yr MPC licence, ROFR + matching right, FMV call option on control (months 30 to 42) |
| E2 | Rationale | Custody is a real option on India's tokenization, e₹ and cross-border rails, but every arena is regulator-gated and 3 to 7 years out. Liminal's moat is neutrality, which a consumer-wallet owner destroys by taking control |
| E3 | Financials | Full deal: NPV −₹7,638 Cr, FY27 EPS ₹4.70 (−37.3% vs ₹7.50). Minority: NPV +₹211 Cr, FY27 EPS ₹8.79 (+17.2% vs ₹7.50, including the MDR) |
| E4 | Churn and downside | Full deal is negative at every churn level from 0% to 60%. Minority breaks even only at 57.6% churn, against an expected 5% |
| E5 | Financing | 100% balance-sheet cash: ₹400 Cr is 4.5% of Paytm's ₹8,900 Cr cash. Gross debt stays ₹350 Cr; no new shares |
| E6 | Regulatory and governance | Invest through One97 into Liminal's Indian entity (avoids the ODI profit test and keeps PPSL ring-fenced). Independent-majority Liminal board, information barrier, standalone brand. RBI comfort letter as a condition precedent |
| E7 | Risks | Twelve-item register; the top three are RBI treating the minority as ownership, a Liminal security incident, and the consortium bidding for control. Each has a contractual or structural mitigant |
| E8 | Roadmap | 100-day plan, gate reviews at months 12, 24 and 30, option window at months 30 to 42, and seven kill switches |

**Draft executive-summary slide text (≤110 words)**
- *What we recommend.* Take 24.9% of Liminal for ₹400 Cr in cash, plus up to ₹600 Cr only if ARR
  reaches ₹650 Cr by FY29. Pair it with an MPC licence, a ROFR against the consortium, and an
  option on control in 2029.
- *Why not buy it.* At ₹4,000 Cr, control destroys ₹7,638 Cr: a 37.5% client revolt plus a
  ₹750 Cr yearly capital drag that the ₹115 Cr MDR covers only 15%.
- *What the Board approves today.* ₹400 Cr from cash, no new debt, no new shares, FY27 EPS ₹8.79.
  The deal lapses if RBI will not confirm that a 24.9% stake is not ownership.

---

## 3. Situation overview: Paytm needs growth outside payments, and cannot afford an EPS hit to get it

**Answer.** On case figures, Paytm trades at 247x earnings and 172x EBITDA [M]. The market has
priced in a turnaround that has barely started showing in earnings. Core UPI growth is capped by a
two-player duopoly, and Paytm's regulatory record makes RBI trust its scarcest asset. Any
acquisition that dilutes EPS or invites fresh RBI scrutiny attacks both of Paytm's valuation
supports at once.

### 3.1 Paytm on case figures

| Metric | Value | Basis |
|---|---|---|
| Market cap | ₹1,18,750 Cr | [C §1] |
| Share price | ₹1,855.47 | ₹1,18,750 Cr ÷ 64 Cr shares [M] |
| Enterprise value | ₹1,10,200 Cr | market cap − ₹8,900 Cr cash + ₹350 Cr debt [M] |
| P/E | 247.4x | ₹1,855.47 ÷ ₹7.50 [M] |
| EV/Revenue | 13.04x | ₹1,10,200 ÷ ₹8,450 Cr [M] |
| EV/EBITDA | 172.2x | ₹1,10,200 ÷ ₹640 Cr [M] |
| EBITDA margin | 7.6% | ₹640 ÷ ₹8,450 Cr [M] |
| Earnings yield | 0.40% | the inverse of P/E [M] |
| Post-tax yield on cash | 4.49% | 6.0% [A03] × (1 − 25.17% [A02]) [M] |
| Deal value as % of market cap | 3.37% | [M] |

The last two lines matter for financing. Paytm's stock earns 0.40% for every rupee of market
value, while its cash earns 4.49% after tax. Every rupee of cash that leaves the balance sheet
costs more EPS than a rupee of stock issued. This is why the all-equity version of the full deal
is the least dilutive, and why a buyback (which the case says shareholders may demand [C §3.3])
actually *reduces* EPS: retiring ₹2,100 Cr of shares at ₹1,855 buys back 1.13 Cr shares but
gives up ₹94 Cr of post-tax interest, and EPS falls to ₹6.14 (−18.2%) [M]. Shareholder pressure
for buybacks is a valuation-signalling argument, not an EPS argument.

**Context (does not replace case figures).** Aggregators put Paytm's market cap at ₹1.14 to 1.16
lakh Cr in mid-September 2026, within 2 to 4% of the case figure, with a trailing P/E near 141 on
reported earnings [S15]. Paytm's FY26 PAT was ₹552 Cr on revenue of ₹8,437 Cr [S06], and Q1 FY27
PAT was ₹220 Cr on revenue of ₹2,448 Cr (+28% YoY) [S05]. Reported cash was ₹13,529 Cr in June 2026
[S128] against the case's ₹8,900 Cr. The stock is up 44% over the past year [S15]. The case's
"turnaround narrative" is visible in the real data; the case figures govern the model.

### 3.2 Industry position: third in a two-player market

| UPI app, Aug 2026 | Volume share | Source |
|---|---|---|
| PhonePe | 45.9% (~11.25 bn transactions) | [S03] |
| Google Pay | 32.4% (~7.9 bn) | [S03] |
| **Paytm** | **8.1%** | [S03] |
| Navi | 4.4% | [S03] |
| PhonePe + Google Pay | 78.3% | [S03, S04] |

Paytm is a distant third with 8.1%, behind a duopoly holding 78.3%. The case says pure-play UPI
and checkout growth has slowed [C §1]. Growth has to come from adjacent revenue pools, which is the
strategic logic behind looking at Liminal. That logic is sound. The question for the Board is
whether ownership is the right instrument for it.

### 3.3 Regulatory history: RBI trust is Paytm's scarcest asset

- RBI stopped Paytm Payments Bank (PPBL) from onboarding new customers in March 2022 [S08].
- On 31 January 2024, citing "persistent non-compliances and continued material supervisory
  concerns", RBI barred deposits and top-ups after 29 February 2024 [S08]. On 16 February it
  extended the cut-off to 15 March 2024 [S09]. The case references these 2024 restrictions [C §1].
- In April 2026 RBI cancelled PPBL's banking licence outright [S10], and the Delhi High Court
  ordered winding up in July 2026 [S112]. Paytm said the financial impact was nearly nil because
  the investment was already impaired [S07].
- Paytm's payment aggregator arm, PPSL, received final online PA authorisation on 26 November 2025
  [S12] and authorisation for offline and cross-border (inward and outward) PA on 17 December 2025
  [S11]. The PA licence is recent and hard-won.
- The Enforcement Directorate issued a ₹611 Cr FEMA show-cause notice in March 2025 [S100]; RBI
  compounded part of it in February 2026 for ₹18.76 lakh [S101].

The implication is simple. Paytm has just rebuilt its standing with RBI. The case's capital trap
[C §3.2] is RBI applying bank-like capital to a PA group that owns crypto custody, at a time when
RBI has told Parliament it favours containing crypto, "leaning towards prohibition" [S57]. A deal
that puts custodied digital assets inside the Paytm group spends regulatory capital Paytm does not
have to spare.

### 3.4 The UPI MDR: real money, but not a reason to do this deal

The MDR mechanics [C §3.4, S01, S02]:
- 0.4% on person-to-merchant UPI payments above ₹2,000, capped at ₹300 per transaction, from
  15 October 2026. Payments up to ₹2,000 and all P2P transfers stay free.
- Merchants pay, not consumers.
- Research adds that essential sectors (railways, telecom, agri inputs) pay a flat ₹5, that
  merchants with monthly UPI QR receipts under ₹1 lakh are exempt, and that about 96% of P2M
  transactions are unaffected [S01].

For Paytm, the case sets incremental net revenue at ₹115 Cr/yr [C §3.4]. After tax that is
₹86.05 Cr, or +₹1.345 of EPS, lifting standalone EPS from ₹7.50 to ₹8.845 (+17.9%) [M].

Three analytical points follow:
1. **The MDR is deal-independent.** Paytm earns it whether it buys Liminal, takes a minority,
   forms a JV or walks away. It belongs in every path's baseline, and we show EPS against both
   ₹7.50 (the case baseline) and ₹8.845 (the MDR-adjusted baseline), so no path gets credit for
   revenue it did not create.
2. **It barely dents the drag.** ₹115 Cr covers 15.3% of the ₹750 Cr drag pre-tax, and 11.5% on a
   like-for-like cash basis, because the drag is a cash outflow and the MDR is taxable income [M].
3. **It carries political risk.** A zero-MDR regime existed until October 2026 for policy
   reasons. If half the MDR were rolled back, standalone EPS would be ₹8.17 rather than ₹8.85 [M].
   Our recommendation does not depend on the MDR in any way.

---

## 4. Strategic value of custody and MPC: real, gated and years away, so buy an option

**Answer to Q5.1.2 and Q5.1.3.** Custody and MPC infrastructure could matter to Paytm in all four
arenas the case names. In every one of them the opening is controlled by a regulator and is 2 to 7
years away. Uncertain, gated, long-dated value is the textbook case for a real option: a small
irreversible commitment now, with the right (not the obligation) to scale once the uncertainty
resolves. The opportunity justifies a bounded ₹400 Cr step (0.34% of market cap). It does not
justify an unbounded commitment of ₹4,000 Cr plus ₹750 Cr every year.

| Arena | Size signal | Regulatory gate | Timing | Paytm's right to win | Own or licence? |
|---|---|---|---|---|---|
| Digital assets (VDA custody) | India ranked #1 in Chainalysis's 2025 adoption index [S55]; ₹51,180 Cr of declared VDA transactions and ₹511.83 Cr of 1% TDS in FY25 [S56]; 54 VDA providers registered with FIU-IND [S57] | RBI told Parliament on 2 Jul 2026 that VDAs "should not be legalised" and that it leans towards prohibition [S57, S58]; 30% tax plus 1% TDS | Closed for a regulated payments group | Weak: an RBI-regulated PA group is the wrong owner | Neither; stay out of VDA exposure directly |
| Tokenized assets | 2030 forecasts range from ~$2T (McKinsey base) [S69] to $5.5T (Citi base; $2.7T to $8.2T) [S68] and ~$9.4T (BCG/Ripple) [S70]; ~$38.6B on-chain today [S71]. In India, RBI's Unified Markets Interface has settled ~248 tokenized CD trades worth ₹17,000 Cr in wholesale e₹ [S63, S64], and SEBI's Demat 2.0 pilot issued ~₹1,025 Cr of tokenized bonds [S65] | SEBI's pilot has depositories holding the private keys [S65]; IFSCA is still at consultation stage [S77] | 3 to 5 years before third-party custodians get a role | Medium: Paytm's merchant and treasury base, if custody opens to third parties | Licence now, own later if the gate opens |
| CBDC (e₹) | Retail e₹ in circulation fell 24% to ₹771.7 Cr in FY26 [S59]; wholesale balances are nil at day end [S59]; ~120 mn cumulative retail transactions worth ₹28,000 Cr, 7 to 8 mn users [S60]; programmable PDS pilots from Feb 2026 [S63] | RBI owns the ledger; non-bank wallets allowed since 2024, with MobiKwik and CRED live [S61]; Paytm was not among the 2024 applicants [S62] | 2 to 4 years | Medium: wallet distribution, not custody | Licence |
| Cross-border settlement | Remittances to India $135.46B gross in FY25 [S72] and $144.8B net in FY26 [S73]; $150.7B in calendar 2025, about 16 to 19% of the world total [S74]; UPI live in 8+ countries [S67]; BIS Project Nexus go-live targeted for 2027 [S66] | Fiat rails open (PPSL holds PA-CB authorisation since Dec 2025 [S11]); crypto rails closed | 2 to 4 years | Strong on fiat rails | Licence is enough; cost advantage of crypto rails is small |

Two findings from the research cut against the bullish reading of the case, and a board should hear
them:
- **India's tokenization stack is being built around incumbents.** SEBI's pilot keeps private keys
  with the depositories [S65]. RBI's pilot settles in wholesale e₹ on RBI's own platform [S63]. A
  third-party custodian such as Liminal is outside the regulated pipeline today.
- **The cross-border cost gap is already small.** Sending money to India costs 1.76% on average
  [S75], against a 5.04% global weighted average [S76]. Blockchain settlement competes against
  one of the cheapest corridors in the world.

**Conclusion.** The strategic value is real, but it is an option on regulatory change. Buying an
option requires a small premium and a clear exercise decision later. Buying the company now pays
the full price of an asset whose value depends on events Paytm cannot control. This is the
foreshadowing for the recommendation: the structure must be sized for uncertainty.

---

## 5. Target assessment: Liminal is the right target, so the real question is the structure

**Answer.** Of eight alternatives screened, Liminal is the only one with an Indian regulatory
footprint, Indian bank and exchange clients, an institutional MPC stack, a reachable price and a
realistic path to a stake. What the research also shows is that Liminal's durable advantage is
trust and neutrality. That is exactly what changes hands if a consumer-payments company buys
control.

### 5.1 Profile

| Item | Case fact | External context (not a case input) |
|---|---|---|
| Business | Institutional digital-asset custody and MPC infrastructure [C §2] | Singapore-headquartered group; Indian entity First Answer India Technologies Pvt Ltd [S38] |
| Founder | Mahin Gupta, co-founder of ZebPay, founded 2021 [C §2] | $4.7M seed led by Elevation Capital (May 2022); investors included CoinDCX [S42] |
| Clients | Exchanges, hedge funds, OTC desks; HDFC Bank, Axis Bank, CoinDCX and ZebPay are 60% of ARR [C §2] | 80+ business clients in 12 countries, 130+ staff; $72B of transaction volume in 2025 and over $100B cumulative [S41] |
| Certifications | ISO 27001, SOC 2 Type II [C §2] | EY Advisory appointed for a 3-year internal audit (Jan 2026) [S134] |
| ARR | ₹220 Cr (~$26M) [C §2 table] | Tracxn reported revenue under $1M as of Sep 2022 [S43]; no later revenue disclosure found |
| Profitability | Approximately breakeven at net income [C §2] | Not disclosed |
| Licences | Not specified | First custodian registered with FIU-IND (May 2024) [S38]; VARA (Dubai) initial approval only (Apr 2024) [S40]; ADGM licence granted May 2024 and withdrawn 20 Mar 2025, reason not disclosed [S39]; CBI appointed Liminal to manage seized digital assets (Nov 2023) [S38] |

### 5.2 Client concentration

Top-4 clients hold ₹132 Cr of ARR (60%), an average of ₹33 Cr each [M]. The remaining ₹88 Cr is
spread over the rest of the book. Losing even one top client removes about 15% of ARR.

### 5.3 VRIO: the moat is neutrality

| Resource | Valuable | Rare | Hard to imitate | Organised to exploit | Verdict |
|---|---|---|---|---|---|
| MPC wallet technology | Yes | Somewhat (Fireblocks, BitGo and others offer MPC) | No: 2 to 3 years to build | Yes | Temporary advantage |
| First FIU-IND registration, ISO 27001, SOC 2 Type II | Yes | Yes in India | Partly (time and audit history) | Yes | Temporary to sustained |
| Trust of banks and exchanges as a neutral custodian | Yes | Yes | Yes | Yes (founder pedigree, ZebPay link) | **Sustained advantage** |

The one sustained advantage is neutrality. A bank or exchange hands its keys to a custodian it
believes has no competing interest in its customers or flows. The case's bank-partner revolt
[C §3.1] is this advantage failing under a new owner. Any structure that keeps Liminal neutral
keeps its moat.

### 5.4 Alternative targets: the MECE filter

Screening criteria: (1) Indian regulatory presence; (2) Indian bank or exchange clients; (3)
institutional MPC or custody stack; (4) price within reach for a stake or acquisition; (5)
realistically available.

| Candidate | India presence | Indian clients | MPC/custody stack | Price reachable | Available | Result |
|---|---|---|---|---|---|---|
| **Liminal** | FIU-IND registered [S38] | Yes [C §2] | Yes | Yes | Yes (in talks [C §2]) | **Pass** |
| Fireblocks | Not found | Not found | Yes | No: last valued at $8B [S48] | No evidence | Fail |
| BitGo | Not found | Not found | Yes | Listed, ~$0.94B market cap [S46]; control premium out of reach for a strategic minority | Listed, not for sale | Fail |
| Copper | Not found | Not found | Yes | Offers ~$200M vs $500M ask [S47] | For sale | Fail (no India footprint) |
| Taurus | Not found | Not found | Yes | Unknown | Deutsche Bank-aligned [S130] | Fail |
| Hex Trust | Not found | Not found | Yes | Last valued $300M (2022) | No evidence | Fail |
| Komainu / Zodia | Not found | Not found | Yes | n/a | Bank-owned; Zodia being folded into Standard Chartered [S50] | Fail |
| Build in-house | n/a | None | 2 to 3 years | ₹40 Cr/yr [A20] | Yes | Fail on time and trust |

"Not found" means our research found no evidence, not proof of absence. Liminal passes all five
screens. It is the right target. The analysis that follows is about how to hold it.

### 5.5 Due-diligence flags a board must hear

1. **The WazirX incident.** About $234.9M was drained from a WazirX multisig wallet run under a
   custody arrangement with Liminal on 18 July 2024, in an attack attributed to North Korea's
   Lazarus Group [S33]. WazirX blamed Liminal, and Liminal denied a breach [S33]. A Grant Thornton
   audit in September 2024 found the breach originated outside Liminal's systems [S34]. WazirX
   ended the custody relationship [S35]. Delhi Police's chargesheet alleged Liminal had not provided
   logs for the hack date [S36]. WazirX's restructuring was sanctioned by the Singapore High Court in
   October 2025 [S37]. No direct suit against Liminal was found. Diligence must include an
   independent forensic review and a litigation search.
2. **The ADGM withdrawal.** The reason Liminal's Abu Dhabi licence was withdrawn within a year is
   not public [S39]. Diligence must obtain it.
3. **Revenue verification.** The case's ₹220 Cr ARR [C §2] governs the model, but no public source
   confirms Liminal's current revenue [S43]. A quality-of-earnings review is a condition precedent.

---

## 6. Competition and the consortium: the rival bidder inherits the same revolt

**Answer.** If Paytm steps back from control, the PhonePe-Mastercard consortium may bid [C §2].
But PhonePe is also a payments company running a consumer wallet, so the bank-partner revolt
[C §3.1] applies to it just as much. Paytm should compete on structure, never on control price. If
the consortium wins control, it inherits the churn and faces a comparable RBI problem, and Paytm
keeps its options through a ROFR and a Plan B.

### 6.1 The peer set is repricing downwards

| Custodian | Owner type | Latest valuation signal | Source |
|---|---|---|---|
| BitGo | Listed (NYSE, Jan 2026 IPO at $18) | Market cap ~$0.94B at $8.07/share; FY25 fee revenue ~$188M; $81.6B assets on platform | [S44, S45, S46] |
| Copper | VC-backed, for sale | Offers ~$200M against a $500M ask; $2.5B peak in 2021 | [S47] |
| Fireblocks | VC-backed | $8B in Jan 2022; ARR over $100M in 2022 | [S48] |
| Anchorage Digital | OCC-chartered trust bank | First federally chartered crypto bank (2021) | [S49] |
| Zodia Custody | Standard Chartered subsidiary | Minorities bought out May 2026; custody folded into the bank | [S50] |
| Hex Trust | VC-backed | $300M (2022) | [S132] |

Two lessons: private crypto-infrastructure valuations have fallen sharply from their 2021 to 2022
peaks, and bank-owned custody is being reorganised, not expanded.

### 6.2 What the consortium wants, and what it faces

- **PhonePe** is 71.77% owned by Walmart [S17]. It holds RBI authorisation for prepaid payment
  instruments and runs PhonePe Wallet [S20], and it received final online PA authorisation on
  19 September 2025 [S19]. It paused its IPO on 16 March 2026 [S18]. It is exactly the kind of
  owner the case says Liminal's clients will reject: "a competing payments company that also runs a
  consumer wallet" [C §3.1].
- **Mastercard** closed its acquisition of BVNK (up to $1.8B, including $300M contingent) on
  3 August 2026 [S23, S24], and obtained a New York BitLicense in May 2026 [S22]. It held talks to
  buy Zerohash for up to ~$2B, then considered a minority stake, then dropped both [S25, S26]. RBI
  barred Mastercard from onboarding new Indian customers from July 2021 to June 2022 over data
  localisation [S21]. Mastercard is a buyer of on-chain rails, but its integration bandwidth is on
  BVNK, and its India regulatory history is not clean.

### 6.3 The game tree

1. Paytm offers the minority structure (24.9%, ROFR, matching right, Tranche 2 to a ₹4,016 Cr
   headline). Liminal's founders get independence (which protects their ARR), ₹150 Cr of
   secondary liquidity for early holders, ₹250 Cr of growth capital, and a fair-value exit via the
   option.
2. If Liminal accepts, which is our base case, the consortium is blocked by the ROFR on any future
   sale.
3. If Liminal shops the deal and the consortium bids for control, Paytm uses its matching right
   only at or below the maximum justified control price. That is ₹1,797 Cr in the base case with
   zero churn and zero drag, and ₹1,201 Cr at case churn [M]. A consortium bid for control will
   exceed that, so Paytm lets it win.
4. The consortium then inherits a 30 to 45% revolt risk [C §3.1] (PhonePe is a consumer-wallet
   payments rival to HDFC and Axis too), and PhonePe, as an RBI-regulated PA and PPI issuer, faces
   the same kind of RBI capital scrutiny the case describes for Paytm (our inference from the case
   logic, not a case fact).
5. Paytm's Plan B: license an alternative MPC stack (Fireblocks-class providers), and position a
   Paytm-aligned neutral offering to capture defecting Liminal clients.

### 6.4 Answers to the competitive questions

- **Q5.5.1, consortium outbids.** Paytm loses a right, not value. On our numbers, every rupee of
  control price above ₹1,797 Cr is value destruction for any buyer facing the case's churn and
  drag [M]. The consortium would be buying the problem.
- **Q5.5.2, higher valuation or better terms.** Do not enter a bidding war for control. Compete on
  structure: independence for clients, liquidity for early holders, the ₹4,016 Cr headline via
  Tranche 2 for delivered ARR, and a fair-value exit via the option. Mastercard's own record
  (BVNK's $300M contingent tranche [S23], and its minority-stake talks with Zerohash [S26]) shows
  that contingent and minority structures are normal in this sector. Indian precedents point the
  same way: Coinbase holds a non-controlling minority in CoinDCX, cleared by CCI [S125], and PayU
  took 43.5% of UPI-switch provider Mindgate while the founders kept majority control [S126].
- **Q5.5.3, multiple compression.** The minority is paid in cash, so Paytm's share price does not
  affect it. The full deal gets worse as the price falls:

| Paytm share price move | 0% | −20% | −30% | −40% |
|---|---|---|---|---|
| Share price (₹) | 1,855 | 1,484 | 1,299 | 1,113 |
| Shares issued for ₹1,900 Cr (Cr) | 1.024 | 1.280 | 1.463 | 1.707 |
| Dilution | 1.60% | 2.00% | 2.29% | 2.67% |
| Full-deal NPV loss as % of market cap | 6.4% | 8.0% | 9.2% | 10.7% |

  Source: [M].
- **Q5.5.4, consortium ownership.** PhonePe would add institutional digital-asset rails to 45.9% of
  UPI volume [S03], and Mastercard would pair Indian custody with BVNK. Paytm would depend on third
  parties for tokenization. That is a real strategic cost, estimated at ₹406 Cr of forgone synergy
  and build-avoidance value in the base case [M]. It is contained by the ROFR, the licence (which
  survives as long as Liminal is independent) and Plan B vendors.

---

## 7. Valuation: ₹4,000 Cr is 2.4 times what Liminal is worth on a weighted basis

**Answer to Q5.3.3.** The deal is priced at 18.2x today's ARR, 29.1x the ARR that survives a
base-case revolt, and 2.4x Liminal's weighted fair value of ₹1,656 Cr [M]. It is not supportable on
intrinsic value at any churn level, and it is above every listed peer multiple.

### 7.1 Discount rates

| Input | Paytm | Liminal | Source |
|---|---|---|---|
| Risk-free rate | 7.04% | 7.04% | 10-year G-sec, 23 Sep 2026 [S30] |
| Equity risk premium | 7.08% | 7.08% | Damodaran India total ERP, Jan 2026 (country risk premium 2.85%) [S31] |
| Beta | 1.20 | 1.40 | Team assumption [A07, A08]; see note |
| Cost of equity | 15.54%, rounded to 15.5% | 16.95%, rounded to 17.0% | |
| Capital structure | Net cash, so WACC = cost of equity | All equity | [C §1] |

*Beta note.* No clean Nifty-benchmarked beta for Paytm was found: TradingView shows 1.65 over one
year without naming the index, and a 5-year beta of −0.27 is distorted by the 2021 IPO crash and
the 2024 RBI action [S32]. We use 1.20 for Paytm and 1.40 for Liminal (a riskier, crypto-exposed,
unlisted business). Using 1.65 for Paytm would raise its WACC to 18.7%, which makes the full
acquisition's drag cheaper in PV terms but lowers the value of every future synergy; the verdict
does not change.

### 7.2 Liminal DCF, three scenarios

Revenue growth and EBITDA margins by scenario [A10]:

| | FY27 | FY28 | FY29 | FY30 | FY31 | FY32 | FY33 | FY34 | FY35 | FY36 |
|---|---|---|---|---|---|---|---|---|---|---|
| Growth, bear | 22% | 20% | 18% | 16% | 14% | 12% | 11% | 10% | 9% | 8% |
| Growth, base | 35% | 32% | 28% | 25% | 22% | 20% | 18% | 16% | 14% | 12% |
| Growth, bull | 50% | 45% | 38% | 32% | 27% | 23% | 20% | 17% | 15% | 13% |
| Margin, bear | 4% | 9% | 13% | 17% | 20% | 22% | 23% | 24% | 25% | 25% |
| Margin, base | 8% | 16% | 23% | 29% | 33% | 36% | 37% | 38% | 38% | 38% |
| Margin, bull | 10% | 20% | 28% | 34% | 38% | 40% | 41% | 42% | 42% | 42% |

Base-case revenue with no churn grows from ₹220 Cr to ₹297 Cr (FY27), ₹502 Cr (FY29) and
₹765 Cr (FY31) [M]. D&A is 4% and capex 5% of revenue, NWC is 2% of incremental revenue [A11].
Terminal growth is 6% [A09].

**Liminal enterprise value by scenario and churn (₹ Cr)** [M]

| Scenario | 0% | 5% | 15% | 30% | 37.5% | 45% | 60% |
|---|---|---|---|---|---|---|---|
| Bear | 428 | 398 | 337 | 243 | 196 | 149 | 55 |
| Base | 1,391 | 1,313 | 1,154 | 915 | 795 | 673 | 430 |
| Bull | 2,398 | 2,269 | 2,009 | 1,615 | 1,418 | 1,221 | 822 |

Churned ARR is not free to lose: 60% of it drops through as lost margin in year 1 and 30% in year
2, because costs are sticky before they can be cut [A12].

**Sensitivity, base, no churn (₹ Cr)** [M]

| Discount rate | g 5.0% | g 5.5% | g 6.0% | g 6.5% | g 7.0% |
|---|---|---|---|---|---|
| 15% | 1,696 | 1,754 | 1,819 | 1,891 | 1,972 |
| 16% | 1,489 | 1,533 | 1,582 | 1,636 | 1,696 |
| 17% | 1,319 | 1,353 | **1,391** | 1,432 | 1,477 |
| 18% | 1,178 | 1,205 | 1,234 | 1,266 | 1,300 |
| 19% | 1,058 | 1,080 | 1,103 | 1,128 | 1,155 |

The most generous cell (₹1,972 Cr) is 49% of the price.

### 7.3 Trading comparables

EV/LTM revenue, 23 September 2026 [S78, S79, S80, S81, S82, S83, S84]:

| Company | EV/LTM revenue | EV/EBITDA | Note |
|---|---|---|---|
| PB Fintech | 11.60x | 137.0x | |
| Coinbase | 8.35x | 72.1x | |
| Adyen | 6.39x | 12.2x | net cash may include merchant balances |
| BitGo | 5.96x (on gross profit) | n.m. | reports gross revenue including digital-asset sales; 0.06x on that basis |
| Pine Labs | 4.92x | 32.4x | |
| PayPal | 1.41x | 7.4x | |
| Zaggle | 0.97x | 10.4x | |
| MobiKwik | 0.91x | n.m. | |
| Infibeam (AvenuesAI) | 0.53x | 13.5x | gross revenue |
| **Paytm (case figures)** | **13.04x** | **172.2x** | [M] |
| **Deal for Liminal** | **18.2x ARR** | n.m. | [M] |

We use the custody and high-growth subset (PB Fintech, Coinbase, Adyen, BitGo on gross profit,
Pine Labs), because payment processors that book gross revenue (PayPal, Infibeam, MobiKwik,
Zaggle) are not comparable to a software custodian. Its interquartile range is 5.96x to 8.35x
[A30]. The deal multiple is above every name on the list, including Paytm itself.

### 7.4 Precedent transactions

| Deal | Date | Price | EV/Revenue | Revenue basis | Source |
|---|---|---|---|---|---|
| Robinhood / Bitstamp | Jun 2025 | $200M | 2.1x | ~$95M LTM, disclosed | [S88] |
| Coinbase / Deribit | Aug 2025 | $2.9B | 9.7x | third-party volume-based estimate | [S86] |
| Ripple / Hidden Road | Apr 2025 | $1.25B | 12.5x | $100M 2024 revenue, disclosed by investor | [S85] |
| Mastercard / BVNK | Mar 2026 | up to $1.8B incl. $300M contingent | 12.5x to 15x | third-party estimate | [S87] |
| Ripple / Metaco | May 2023 | $250M | n.a. | revenue not disclosed | [S89] |
| Stripe / Bridge | Feb 2025 | $1.1B | n.a. | revenue not disclosed | [S90] |

Interquartile range of the four deals with a revenue basis: about 7.8x to 12.8x (median 11.1x). The
sample is small and two of the four are estimates, so it carries a 20% weight, not more. Even the
top of the range (15x on BVNK) is below 18.2x.

### 7.5 Football field and the stake price

| Method | Low | High | Weight | Midpoint |
|---|---|---|---|---|
| DCF, base, no churn (19% to 15%, g 6%) | ₹1,103 Cr | ₹1,819 Cr | 50% | ₹1,461 Cr |
| Trading comps (5.96x to 8.35x ARR) | ₹1,311 Cr | ₹1,837 Cr | 30% | ₹1,574 Cr |
| Precedents (7.8x to 12.8x ARR) | ₹1,716 Cr | ₹2,816 Cr | 20% | ₹2,266 Cr |
| **Weighted fair value (100%)** | | | | **₹1,656 Cr (7.5x ARR)** |
| **Proposed price** | | | | **₹4,000 Cr (18.2x), 2.4x fair value** |

Source: [M]. The stake price follows a mechanical rule: 24.9% × ₹1,656 Cr = ₹412 Cr, rounded down
to ₹400 Cr [A24]. That implies a post-money valuation of ₹1,606 Cr (7.3x ARR). If Tranche 2 pays
in full, the headline valuation reaches ₹4,016 Cr, the founders' number, but only for ARR that has
actually arrived.

### 7.6 Implied multiple under churn

| Churn | 0% | 30% | 37.5% | 45% | 60% |
|---|---|---|---|---|---|
| Surviving ARR (₹ Cr) | 220 | 154 | 137.5 | 121 | 88 |
| ₹4,000 Cr / surviving ARR | 18.2x | 26.0x | 29.1x | 33.1x | 45.5x |

Source: [M]. **Action title for the slide:** at ₹4,000 Cr Paytm pays 18.2x today's ARR and 29.1x the
ARR that survives a base-case revolt, against a DCF value of ₹795 Cr after that revolt.

---

## 8. The four paths: the minority stake wins on value, risk and optionality

**Answer to Q5.1.1.** A 24.9% minority stake. It is the only path that is value-positive,
EPS-accretive, free of the capital drag, low-churn and a block on the consortium at the same time.

### 8.1 Symmetric comparison

| | Full acquisition | **24.9% minority** | 50:50 JV | Walk away |
|---|---|---|---|---|
| Consideration | ₹4,000 Cr [C] | ₹400 Cr + up to ₹600 Cr | ₹400 Cr [A25] | 0 |
| Paytm cash out at close | ₹2,100 Cr | ₹400 Cr | ₹400 Cr | 0 |
| New Paytm shares | 1.024 Cr | 0 | 0 | 0 |
| New debt | 0 (case mix) | 0 | 0 | 0 |
| Churn, base [A13] | 37.5% | 5% | 10% | 0 |
| Capital drag [A14] | ₹750 Cr/yr [C] | 0 (CP-protected) | ₹375 Cr/yr | 0 |
| NPV bear / base / bull | −8,374 / −7,638 / −6,892 | −113 / **+211** / +204 | −2,613 / −2,544 / −2,483 | 0 |
| Probability-weighted NPV | −7,636 | **+128** | −2,546 | 0 |
| FY27 EPS (vs ₹7.50) | ₹4.70 (−37.3%) | **₹8.79 (+17.2%)** | ₹8.80 (+17.3%) | ₹8.85 (+17.9%) |
| FY29 EPS | ₹6.96 | ₹9.15 | ₹9.10 | ₹8.85 |
| PAT breakeven | FY2033 | FY2028 | FY2029 | n.a. |
| FCF breakeven | Never within 10 years | FY2034 (look-through) | Never (drag exceeds JV cash) | n.a. |
| Regulatory steps | CCI filing, SEBI preferential issue, RBI engagement | Board approval, LODR disclosure, RBI comfort | New entity, possible new licences | None |
| Block on consortium | Full | ROFR + matching right | None | None |
| Reversibility | Very low | High (do not exercise; tag-along) | Medium | n.a. |

Sources: all figures [M] except where tagged. JV figures assume the JV operates custody under joint
control (drag ₹375 Cr/yr [A14]); with zero drag the JV is still slightly negative (−₹193 to −₹63 Cr)
[M].

### 8.2 Decision matrix

| Criterion | Weight | Full | Minority | JV | Walk | Why the scores differ |
|---|---|---|---|---|---|---|
| Shareholder value (NPV) | 25% | 1 | 4 | 2 | 4 | Full −₹7,638 Cr; JV −₹2,544 Cr; minority and walk-away near or above zero |
| EPS and FCF impact | 15% | 1 | 4 | 3 | 5 | Full cuts FY27 EPS 37%; minority slightly below walk-away on FY27 EPS |
| Balance sheet and rating | 10% | 2 | 5 | 4 | 5 | Full drains ₹2,100 Cr plus ₹750 Cr/yr of cash |
| Client churn risk | 15% | 1 | 4 | 4 | 5 | 37.5% vs 5 to 10% |
| Regulatory and capital-drag exposure | 10% | 1 | 4 | 2 | 5 | Drag attaches to ownership and joint control |
| Strategic access to custody and tokenization | 15% | 5 | 4 | 3 | 1 | Minority gets licence, board seat and option; walk-away gets nothing durable |
| Block on the consortium | 10% | 5 | 4 | 1 | 1 | ROFR and matching right vs nothing |
| **Weighted score** | 100% | **2.10** | **4.10** | **2.70** | **3.75** | |

Source: [M, A28]. Walk-away is a respectable second. What separates the minority is strategic
access and the consortium block, bought for a positive NPV.

### 8.3 Can a licence do the job instead? (Q5.1.4)

A commercial MPC licence alone captures most of the operating benefit: we assume 70% of the revenue
synergy [A22] plus the avoided ₹40 Cr/yr build [A20]. It fails in three ways:
1. **Change of control.** If the consortium buys Liminal, the licence can be terminated or
   repriced. A licence is only as durable as the licensor's independence.
2. **No seat, no information.** Paytm would have no view of Liminal's tokenization roadmap or its
   regulatory dialogue.
3. **No path to control.** If the regulatory gate opens, Paytm has no pre-agreed route in.

The licence plus 24.9% equity plus a ROFR fixes all three. The equity is what makes the licence
durable.

### 8.4 Reasons to accept or reject the transaction as proposed (Q5.1.5)

| Reasons to accept (as proposed, ₹4,000 Cr full) | Reasons to reject |
|---|---|
| Owns India's first FIU-registered custodian outright | NPV −₹7,638 Cr base; negative in every scenario, even with zero churn and zero drag |
| Full control of the tokenization and e₹ option | 37.5% expected ARR loss; 60% of ARR sits with four clients with reasons to leave |
| Blocks the consortium completely | ₹750 Cr/yr drag, 3.4x Liminal's ARR and 156% of Paytm's PAT |
| | FY27 EPS falls 37.3% to ₹4.70; PAT breakeven not until FY2033; FCF never within 10 years |
| | Likely ~₹2,800 Cr goodwill impairment at the first annual test |
| | Puts crypto custody inside an RBI-regulated PA group that has just rebuilt its standing |

**Verdict: reject the transaction as proposed, and approve the restructured minority.**

---

## 9. Stress test of the full acquisition: no churn level makes it work

**Answer to Q5.2.3, Q5.2.4, Q5.3.4 and Q5.3.5.** At the case's churn range the full deal loses
₹7,518 Cr to ₹7,760 Cr. It loses ₹7,042 Cr at zero churn. Churn is not the swing factor. The
capital drag is (₹4,839 Cr of PV on its own), followed by the price.

### 9.1 NPV grid, base case (₹ Cr)

| Annual drag \ churn | 0% | 15% | 30% | 37.5% | 45% | 60% |
|---|---|---|---|---|---|---|
| ₹0 | −2,203 | −2,440 | −2,679 | −2,799 | −2,921 | −3,164 |
| ₹250 Cr | −3,816 | −4,053 | −4,292 | −4,412 | −4,534 | −4,777 |
| ₹500 Cr | −5,429 | −5,666 | −5,905 | −6,025 | −6,147 | −6,390 |
| **₹750 Cr (case)** | −7,042 | −7,279 | **−7,518** | **−7,638** | **−7,760** | −8,002 |

Source: [M]. Each percentage point of churn costs about ₹16 Cr of NPV. Each ₹250 Cr of annual drag
costs ₹1,613 Cr.

### 9.2 Maximum justified control price (value before price, ₹ Cr)

| Scenario | No churn, no drag | 37.5% churn, no drag | No churn, ₹750 Cr drag | 37.5% churn, ₹750 Cr drag |
|---|---|---|---|---|
| Bear | 697 | 465 | −4,142 | −4,374 |
| Base | 1,797 (8.2x ARR) | 1,201 | −3,042 | −3,638 |
| Bull | 2,927 | 1,946 | −1,912 | −2,892 |

Source: [M]. With the case's drag, no price above zero is justified: Paytm would need to be *paid*
to take control.

### 9.3 What level of churn makes the deal unattractive? (Q5.2.4)

None, because it is unattractive at 0%. The question can be turned round: what would it take for a
full acquisition to break even? With zero drag, the base case needs a price of ₹1,500 Cr and churn
below 18.7%. The bull case needs ₹2,000 Cr and churn below 35.4%. At ₹3,000 Cr or ₹4,000 Cr it
never breaks even, even in the bull case [M].

For the recommended minority, the break-even churn is 57.6% in the base case and 86.2% in the bull
case, against an expected 5% [M].

### 9.4 Return profile under the case churn range (Q5.2.3)

| Churn | 0% | 30% | 37.5% | 45% | 60% |
|---|---|---|---|---|---|
| NPV (₹ Cr) | −7,042 | −7,518 | −7,638 | −7,760 | −8,002 |
| FY27 EPS (₹) | 5.75 | 4.92 | 4.70 | 4.48 | 4.04 |
| Implied multiple on surviving ARR | 18.2x | 26.0x | 29.1x | 33.1x | 45.5x |

Source: [M].

### 9.5 Breakeven on both bases (Q5.3.4, K5)

Definitions:
- **PAT basis:** the first year pro-forma EPS is back at the MDR-adjusted standalone EPS (full
  deal and JV), or deal-attributable PAT turns positive (minority).
- **FCF basis:** the first year cumulative deal operating FCF, after the capital drag, covers the
  cash paid (full deal); or cumulative look-through FCF covers the cash paid (minority).

| Path | PAT breakeven (bear / base / bull) | FCF breakeven (bear / base / bull) |
|---|---|---|
| Full acquisition, case funding | never / **FY2033** / FY2031 | never / **never** / never within 10 years |
| Full acquisition if drag were zero | base FY2032 | base never within 10 years |
| **24.9% minority** | FY2029 / **FY2028** / FY2028 | never / **FY2034** / FY2035 |
| JV | FY2029 / FY2029 / FY2028 | never (drag exceeds JV cash flow) |

Source: [M]. The full deal's cumulative operating FCF over FY27 to FY36 is negative, because the
₹750 Cr drag exceeds Liminal's free cash flow in every year of the forecast. Paytm's cash falls from
₹8,900 Cr to ₹6,800 Cr at close and to ₹5,563 Cr by FY31, even after adding its own PAT and the
MDR back every year [M].

### 9.6 How much of the drag the MDR covers (Q5.3.5)

₹115 Cr / ₹750 Cr = **15.3% pre-tax**. On a like-for-like cash basis, ₹86.05 Cr / ₹750 Cr =
**11.5%** [M]. The MDR arrives in every path, so none of it is a deal benefit.

### 9.7 How we treated the drag, and why it does not change the answer

The case calls the drag a "recurring annual Free Cash Flow drag" [C §3.2]. We treat it as a
perpetual outflow (PV ₹4,839 Cr at 15.5%). A reviewer could argue the capital is only trapped, not
lost, and is released one day. The two alternative treatments:

| Treatment | PV of drag | Full-deal base NPV |
|---|---|---|
| Perpetual outflow (our base) | ₹4,839 Cr | −₹7,638 Cr |
| Trapped for 10 years, never released | ₹3,693 Cr | n.a. |
| Trapped for 10 years, then fully released | ₹1,918 Cr | **−₹4,717 Cr** |

Source: [M]. Even on the mildest reading the deal destroys ₹4.7 thousand crore.

### 9.8 The accounting headline

Under Ind AS 103, acquisition costs are expensed and goodwill is recognised; under Ind AS 36,
goodwill is tested for impairment every year [S113, S115]. At 37.5% churn, Liminal's recoverable
value (₹795 Cr DCF plus ₹406 Cr of synergies) is about ₹1,201 Cr against a ₹4,000 Cr carrying
value [M]. The first annual test would likely force a write-down of about ₹2,800 Cr, subject to the
purchase-price allocation. That is a reported-PAT event larger than five years of Paytm's case PAT.

### 9.9 The FY27 PAT bridge for the full deal

| Step | ₹ Cr |
|---|---|
| Paytm PAT [C] | 480.0 |
| + UPI MDR after tax [C, A02] | +86.1 |
| − forgone interest on ₹2,100 Cr cash [A03] | −94.3 |
| − negative carry on locked reserves [A05] | −5.6 |
| − standalone governance cost [A17] | −11.2 |
| − PPA amortisation [A18] | −74.8 |
| − transaction costs [A19] | −44.9 |
| − Liminal loss after churn (37.5%) [A12, A13] | −59.4 |
| + avoided build [A20] | +29.9 |
| **Pro-forma PAT** | **305.7** |
| ÷ 65.024 Cr shares = **FY27 EPS ₹4.70** (−37.3% vs ₹7.50) | |

Source: [M].

---

## 10. Recommended structure and financing

**Answer to M3, Q5.3.1, Q5.3.2 and Q5.3.6.** Pay ₹400 Cr from balance-sheet cash for 24.9%. Pay up
to ₹600 Cr more only for ARR that has been delivered. Issue no shares, raise no debt. FY27 EPS rises
to ₹8.79. The drag never arrives, because Paytm never owns the custody infrastructure.

### 10.1 Term sheet

| Term | Proposal |
|---|---|
| Investor | One97 Communications Ltd (listed holdco), never PPSL (the PA entity) |
| Investee | First Answer India Technologies Pvt Ltd (Liminal's Indian entity, FIU-IND registered) [S38] |
| Instrument | Compulsorily convertible preference shares (CCPS), 1x non-participating liquidation preference; the Articles must adopt the 2015 private-company exemption for preference terms to bind [S124] |
| Stake | 24.9% fully diluted [A24] |
| Upfront price | ₹400 Cr: ₹250 Cr primary (growth capital), ₹150 Cr secondary (liquidity for early holders) [A24] |
| Implied valuation | Post-money ₹1,606 Cr, 7.3x ARR [M] |
| Tranche 2 | Up to ₹600 Cr in FY30, a separate conditional share purchase: ₹0 if FY29 ARR ≤ ₹500 Cr, linear to ₹600 Cr at ≥ ₹650 Cr, and only if top-4 gross revenue retention is ≥ 90%. Priced at or below fair value at that time, so it complies with FEMA pricing if any seller is non-resident [S109]. It is deliberately not deferred consideration, which FEMA caps at 25% of the price and 18 months [S107] |
| Headline if Tranche 2 pays in full | ₹4,016 Cr for 100% [M] |
| Commercial licence | MPC and custody technology for Paytm's tokenized-treasury, e₹ and cross-border B2B settlement uses; ₹25 Cr/yr [A23]; survives any change of control of Liminal for 5 years |
| ROFR and matching right | On any transfer of more than 5% by founders or investors, and a 30-day right to match any change-of-control offer; tag-along for Paytm. Enforceable as a contract under s.58(2) and permitted by SEBI's 2013 notification; must be written into Liminal's Articles [S122, S123] |
| Call option | On the remaining 75.1%, exercisable in months 30 to 42 after close, at independent fair value with a collar of 8x to 12x trailing ARR; subject to gates G1 to G5 (§13). FEMA permits options with a 1-year lock-in and no assured return [S108] |
| Board | One Paytm non-executive nominee on a 7-seat board (§11) |
| Standstill | Paytm stays at or below 24.9% until the option is exercised |
| Non-compete | Paytm will not build competing institutional custody |
| Information rights | Aggregate KPIs only; no client-level data |
| Conditions precedent | RBI comfort letter (§12), quality-of-earnings review confirming ARR ≥ ₹200 Cr, forensic review of the WazirX incident, client comfort letters from the top-4 clients, IP assignment or licence ensuring the Indian entity holds rights to the MPC stack for Indian clients |
| Reverse break fee | ₹30 Cr, payable only if Paytm walks away without a CP failure [A29] |
| Long-stop date | 6 months from signing |

### 10.2 Financing

- **100% balance-sheet cash.** ₹400 Cr is 4.5% of Paytm's ₹8,900 Cr cash [C §1]. Tranche 2, if
  earned, is paid from cash in FY30.
- **Credit metrics unchanged.** Gross debt stays ₹350 Cr (0.55x EBITDA), interest cover stays
  20.9x, and cash falls to ₹8,500 Cr [M]. On CRISIL's financial-ratio approach (gearing, interest
  coverage, debt service, net cash accruals, liquidity) [S116], nothing moves. The AA- (Stable)
  rating [C §1] is not pressured.
- **Why not debt.** Funding even the full deal's ₹2,100 Cr cash leg with debt takes gross debt to
  3.83x EBITDA and interest cover down to 3.0x [M], a profile inconsistent with AA-.
- **Why not equity for a minority.** A share swap for a stake this size would need a SEBI
  preferential issue (floor price at the higher of the 90-day and 10-day VWAP, a registered
  valuer's report, a special resolution, a 6-month lock-in for allottees) [S102, S103], and would
  dilute shareholders to save ₹14 Cr/yr of post-tax interest.

### 10.3 Funding mixes for the full deal, for comparison (Q5.3.1, Q5.3.2)

| Mix | FY27 EPS | vs ₹7.50 | New shares | Gross debt / EBITDA | Interest cover | Cash after close | Cash FY31 |
|---|---|---|---|---|---|---|---|
| M1 case: ₹2,100 Cr cash + ₹1,900 Cr equity | ₹4.70 | −37.3% | 1.024 Cr (1.60%) | 0.55x | 20.9x | ₹6,800 Cr | ₹5,563 Cr |
| M2: ₹2,100 Cr debt + ₹1,900 Cr equity | ₹4.04 | −46.2% | 1.024 Cr | 3.83x | 3.0x | ₹8,900 Cr | ₹7,446 Cr |
| M3: ₹1,050 Cr cash + ₹1,050 Cr debt + ₹1,900 Cr equity | ₹4.37 | −41.7% | 1.024 Cr | 2.19x | 5.2x | ₹7,850 Cr | ₹6,504 Cr |
| M4: ₹4,000 Cr all equity | ₹6.05 | −19.4% | 2.156 Cr (3.37%) | 0.55x | 20.9x | ₹8,900 Cr | ₹8,134 Cr |
| M5: ₹4,000 Cr all cash | ₹3.44 | −54.1% | 0 | 0.55x | 20.9x | ₹4,900 Cr | ₹3,236 Cr |
| **Recommended minority, all cash** | **₹8.79** | **+17.2%** | **0** | **0.55x** | **20.9x** | **₹8,500 Cr** | n.a. |

Source: [M]. Every full-deal mix has the same NPV (−₹7,638 Cr): financing moves EPS and credit
metrics, not value. All-equity is the least dilutive because Paytm's 0.40% earnings yield makes its
stock cheaper than its cash. Debt is the worst for the rating.

### 10.4 EPS bridge, recommended structure, FY27

| Step | ₹ per share |
|---|---|
| Case baseline EPS | 7.500 |
| + UPI MDR (not a deal effect) | +1.345 |
| − forgone interest on ₹400 Cr | −0.281 |
| − licence fee | −0.292 |
| + avoided in-house build | +0.468 |
| + retained synergy (zero in FY27) | 0.000 |
| + equity-method share of Liminal profit and interest on primary cash | +0.051 |
| **Pro-forma EPS** | **8.790** |

Source: [M]. Against the MDR-adjusted baseline of ₹8.845, the deal effect in FY27 is −₹0.055
(−0.6%), turning positive in FY28 [M]. At 24.9% with a board seat and a call option, Liminal is
presumed an associate under Ind AS 28 and is equity-accounted [S114].

### 10.5 If the Board insists on full control

The least-bad full structure uses M4-style equity-heavy consideration, holds 20% of the equity in
escrow with a retention-linked claw-back, defers the cash leg against retention, and adds a CVR on
ARR. This improves FY27 EPS to about ₹6.05, but NPV stays around −₹7,000 Cr, because the drag is
structural, not a financing problem.

### 10.6 What deferred consideration, earn-outs and CVRs can and cannot do (Q5.3.6)

They transfer *price risk* to the seller: pay less if ARR disappears. That is why Tranche 2 exists.
They do nothing about the ₹750 Cr/yr drag, which follows ownership of custody infrastructure
[C §3.2], not the price paid. The only structural fix for the drag is not to own the custody
infrastructure. The minority does that, and it keeps the earn-out logic in Tranche 2 as well.
Mastercard's $300M contingent tranche on BVNK is the sector precedent for performance-linked
consideration [S23].

---

## 11. Churn defense and governance

**Answer to M2, Q5.2.1 and Q5.2.2.** Under full control, losing the top-4 clients is the single
most likely outcome in the case: 60% of ARR sits with four institutions that each have a concrete
reason to leave a custodian owned by a payments rival. Under the minority, Liminal stays
independent and the same safeguards, which would only reduce churn under control, keep expected
churn near 5%.

### 11.1 Client-by-client risk

| Client | Why a Paytm-controlled custodian worries them | Risk under full control | Risk under minority |
|---|---|---|---|
| HDFC Bank | A regulated bank's custody provider owned by a payments rival with a consumer wallet; RBI is pushing banks away from crypto exposure [S58]; data exposure | High | Low |
| Axis Bank | Same as HDFC | High | Low |
| CoinDCX | An exchange whose flows would be visible to a payments group; CoinDCX was a seed investor in Liminal [S42] | High | Low |
| ZebPay | Same as CoinDCX; the founder link to Mahin Gupta [C §2] is a relationship asset that control could strain | Medium to high | Low |

**External evidence.** No public data quantifies client churn after a custody vendor changes hands
(we record this honestly rather than invent a number). The documented reactions point one way:
- Citi reviewed its Metaco custody contract about six weeks after Ripple agreed to buy Metaco [S51],
  and Metaco's CEO said banks raised the ownership change and it took months to reassure them [S52].
- Standard Chartered is folding Zodia's custody business back into the bank because the bank's own
  unit and Zodia "competed for the same institutional clients" [S50], which is channel conflict
  inside one group.
- Visa's $5.3B bid for Plaid was abandoned in January 2021 after a DOJ challenge, so no churn data
  exists for that case either [S54].
- Mastercard's Finicity deal drew supportive client statements at announcement [S53], a reminder
  that churn is not automatic when the owner is not a direct competitor. Paytm is one.

### 11.2 Safeguards (apply to the minority now, and would be needed under any later control)

| Safeguard | Mechanism | Client concern addressed |
|---|---|---|
| Independent-majority board | 7 seats: 2 management, 1 Paytm non-executive nominee, 1 existing investor, 3 independents including the chair (a bank risk or regulatory profile, a cybersecurity expert, an audit chair) | Ownership influence |
| Recusal | Paytm nominee recused from client-level matters; Risk and Security committee has no Paytm member | Data and competitive exposure |
| Information barrier | Contractual and technical: separate cloud tenancy and identity management, no data sharing, aggregate KPIs only; certified annually by an external auditor; client audit rights | Data and flow visibility |
| Standalone identity | Liminal keeps its brand, legal entity, key management personnel and FIU-IND Principal Officer | Perception of neutrality |
| Client charter | Change-of-control termination rights and most-favoured-nation pricing for all institutional clients | Lock-in fear |
| Key-shard escrow | MPC key-shard continuity escrow with an independent trustee | Operational continuity |
| Client Advisory Council | Top clients meet the independent chair quarterly | Voice |
| Paytm non-compete | No competing institutional custody | Channel conflict |
| Paytm standstill | Stays at or below 24.9% until the gates are met | Creeping control |

### 11.3 Churn by path, and how we validate it

| Path | Base | Range | Reasoning |
|---|---|---|---|
| Full acquisition | 37.5% | 30% to 45% | Case range [C §3.1] |
| 24.9% minority | 5% | 0% to 15% | Independence preserved; residual perception risk [A13] |
| JV | 10% | 5% to 15% | Association without control [A13] |
| Walk away | 0% | n.a. | |

The minority and JV churn figures are team assumptions and cannot be verified without talking to
the clients. We have not done that, and we do not claim to have. Instead, a **Customer Validation
Plan** is a condition precedent:
- Structured conversations before signing with the custody head, chief risk officer and
  procurement lead at each of the top-4 clients.
- Plus 8 long-tail clients across hedge funds and OTC desks.
- The deliverable is a comfort letter from each top-4 client.

### 11.4 Churn stress on the recommendation

| Minority stress test | NPV (₹ Cr) |
|---|---|
| Base (5% churn) | +211 |
| 0% churn | +225 |
| 15% churn | +171 |
| Break-even churn | 57.6% |

Source: [M]. The minority is robust to churn because Paytm pays fair value for a 24.9% slice and
bears none of the sticky-cost losses at the Paytm level.

---

## 12. Regulatory path and compliance architecture

**Answer to Q5.4.1 to Q5.4.4.** The minority needs no RBI approval and, on our reading, no
mandatory CCI filing; it needs Board approval, a stock-exchange disclosure and an RBI comfort letter
that we make a condition precedent. Investing through One97 into Liminal's Indian entity avoids the
overseas investment regime, which Paytm would likely fail, and keeps the PA licence ring-fenced.

### 12.1 Why the Indian entity, and why One97

- **The ODI trap.** Under the FEMA Overseas Investment Rules 2022, an Indian company that is not in
  financial services may invest in a foreign financial-services entity only if it posted net
  profits in each of the preceding three years [S97, S98]. One97 lost about ₹1,417 Cr in FY24 and
  ₹658.7 Cr in FY25 before earning ₹552 Cr in FY26 [S16, S06]. A stake in Liminal's Singapore
  parent would therefore need the RBI approval route (or a contestable argument that crypto custody
  is not "financial services"). Any open ED matter would also require an agency NOC [S99, S100].
- **The domestic route.** First Answer India Technologies is an Indian company. One97 has been an
  Indian-owned and -controlled company since early 2026 (domestic investors 50.3%) [S13, S14], so
  its investment is not indirect foreign investment. One open point for diligence: Ant Group retains
  an economic interest in about 5.22% of Paytm through optionally convertible debentures held by
  Resilient Asset Management [S127], and no regulator has ruled on whether that matters under Press
  Note 3. Paying in cash, not shares, keeps this off the critical path. A primary subscription is resident-to-resident
  and outside FEMA pricing; Companies Act valuation rules apply [S109].
- **PA ring-fence.** RBI's 2025 PA directions require prior approval for a change of control of the
  PA itself (PPSL) and fit-and-proper promoters, with RBI's decision final [S110, S111]. Investing at the
  One97 level, not PPSL, keeps Liminal out of the PA's balance sheet and licence.

### 12.2 Sequence for the recommended minority

| Phase | Steps | Risks to close out |
|---|---|---|
| **Pre-signing (weeks 0 to 8)** | Due diligence: technology and security (independent WazirX forensic review), legal and litigation (Delhi Police chargesheet [S36], ADGM withdrawal [S39]), FIU-IND and PMLA compliance, tax and GST, quality of earnings. Route decision: Indian entity (§12.1). Informal RBI (DPSS) consultation. CCI analysis. Customer Validation Plan conversations. Board approval (unanimous under s.186 [S106]). SEBI LODR Reg 30 disclosure within 30 minutes of the board meeting, since a 5%+ acquisition is disclosable regardless of size [S104, S105] | RBI's view of a PA group holding a crypto custodian; security liabilities; revenue quality |
| **Signing to closing (weeks 8 to 20)** | Conditions precedent: RBI comfort letter; client comfort letters; registered valuer's report; Liminal shareholder special resolution for the CCPS issue; Articles amended for ROFR, tag, option and preference terms [S122, S124]; FEMA filings for any non-resident secondary sellers (price ≤ fair value [S109]); FIU-IND notification of the change in beneficial ownership | CP failure, client notice, security incident |
| **Post-closing (day 1 to 100, then ongoing)** | Board reconstitution; information barrier live and certified; licence live; equity-method accounting (Ind AS 28 [S114]); quarterly compliance reporting to the Paytm audit committee; gate tracking | Barrier leakage, regulatory drift |

### 12.3 Competition clearance

- The deal value threshold is ₹2,000 Cr for targets with substantial business operations in India
  [S91, S92]. Value includes deferred consideration and call options assuming full exercise [S93].
- Our structure: ₹400 Cr upfront plus up to ₹600 Cr Tranche 2 = ₹1,000 Cr. CCI's September 2025
  FAQs say options vesting after two years may be excluded [S94]; ours opens at month 30. Liminal is
  below the de minimis thresholds (turnover under ₹1,250 Cr, assets under ₹450 Cr) [S96, S91]. On
  this reading, no filing is required. Counsel must confirm.
- If the option were counted at full exercise and pushed value above ₹2,000 Cr, the Green Channel
  applies (no horizontal, vertical or complementary overlap between Paytm and a custodian), giving
  deemed approval on filing [S95].
- The full acquisition, by contrast, is a mandatory filing at ₹4,000 Cr with a 30-day Phase I and a
  150-day outer limit [S95].

### 12.4 Does owning custody add regulatory or capital requirements? (Q5.4.2)

Yes. The case assumes RBI would require bank-like capital reserves once Paytm owns the custody
infrastructure, a ₹750 Cr/yr FCF drag [C §3.2]. RBI's 2026 stance on crypto (containment "leaning
towards prohibition" [S57, S133]) makes that assumption plausible, not conservative. Our structure is
built so Paytm does not own the infrastructure. The RBI comfort letter converts the assumption that
a 24.9% non-controlling stake is not "ownership" into a confirmed fact before any cash moves. If RBI
declines, the deal lapses at a cost of diligence fees only.

Stress test: if RBI applied a proportional drag to the minority (24.9% × ₹750 Cr = ₹187 Cr/yr), the
minority's NPV would fall to −₹996 Cr [M]. That is exactly why the comfort letter is a condition
precedent rather than a hope.

### 12.5 Full-acquisition counterfactual (what the Board avoids)

| Additional step under full acquisition | Source |
|---|---|
| SEBI preferential issue for ₹1,900 Cr of shares: special resolution at an EGM or postal ballot, VWAP floor pricing, exchange in-principle approval, valuer report, 6-month lock-in | [S102, S103] |
| Mandatory CCI filing (₹4,000 Cr > ₹2,000 Cr) | [S91, S95] |
| RBI engagement on PA-group implications and capital; fit-and-proper review | [S110] |
| Rating-agency engagement | [S116] |
| Goodwill recognition and annual impairment testing | [S113, S115] |

### 12.6 Data, compliance, AML and information security (Q5.4.4)

Liminal stays a separate reporting entity under PMLA with its own controls:
- **AML.** An India-based, full-time Principal Officer and a separate Designated Director.
  Suspicious-transaction reports within 7 working days. Real-time Travel Rule compliance under
  FIU-IND's January 2026 guidelines [S117, S118]. Sanctions screening including Lazarus-linked
  wallet lists, given the WazirX history.
- **Cyber.** CERT-In's six-hour incident reporting, 180-day log retention in India and five-year
  KYC retention for custodian wallet providers [S119].
- **Data protection.** DPDP Act duties: core data-fiduciary obligations from May 2027, 72-hour
  breach reporting to the Board, penalties up to ₹250 Cr [S120, S121].
- **Security certifications.** SOC 2 Type II and ISO 27001 maintained [C §2]; annual independent
  penetration test; HSM plus MPC key management.
- **Separation from Paytm.** No Paytm access to client data. Paytm's audit committee receives
  aggregate KPIs and the annual barrier certification only.

---

## 13. Contingency planning

**Q5.6.1: churn above 45%.**
- *Under a full acquisition*, the remediation ladder is:
  1. Claw back escrowed equity consideration.
  2. Move key custody to an independent trustee and re-brand.
  3. Sell down to 24.9% or below to a bank consortium or financial sponsor within 18 months,
     converting after the fact to the structure we recommend today.
  4. Take the impairment and disclose it.
- *Under the recommended minority*, the remedy is built in: Paytm does not exercise the option, pays
  no Tranche 2, keeps its liquidation preference, and can exit through tag-along.

**Q5.6.2: minority now, option later.** Yes. That is the recommendation.

**Q5.6.3: exercise gates.** All five must hold before the option is exercised:

| Gate | Test |
|---|---|
| G1 Regulatory | Written RBI position that the capital requirement on ownership is ₹150 Cr/yr or less, or a ring-fenced custody regime outside the PA group; no VDA prohibition law enacted |
| G2 Clients | Top-4 clients have renewed for 3+ years with change-of-control consent; gross revenue retention ≥ 90%; top-4 concentration below 45% |
| G3 Financial | Liminal trailing ARR ≥ ₹500 Cr; EBITDA margin ≥ 20% |
| G4 Security | Clean SOC 2 Type II; no Sev-1 security incident in the prior 24 months |
| G5 Paytm | Year-1 EPS dilution from exercise ≤ 5%; NPV at the strike ≥ 0 at the then-prevailing drag; CRISIL AA- affirmation expected |

**Q5.6.4: can Liminal stay standalone and arm's-length indefinitely?** Yes, as an associate, and
that is the steady state if G1 never clears. Under full ownership it could operate at arm's length,
but the drag would persist, because it attaches to ownership, not to the operating model. The
precedents cut both ways: Coinbase runs an independently capitalised custody trust company [S129], while Standard Chartered found an arm's-length custodian inside a bank group ended up
competing with the bank and pulled it back in [S50].

**Q5.6.5: walk-away conditions after signing.**

| Condition | Contract mechanism |
|---|---|
| RBI declines comfort, or indicates the capital requirement applies at 24.9% | Condition precedent; lapse without break fee |
| Any top-4 client serves notice before close | Condition precedent (client comfort letters) |
| Diligence finds unresolved liabilities (WazirX-related, FIU-IND non-compliance) | Condition precedent plus specific indemnity |
| Closing ARR below ₹200 Cr (−10%) | Condition precedent (quality of earnings) |
| Sev-1 security incident before close | Material adverse change clause |
| A VDA prohibition bill is introduced | Material adverse change clause |
| Long-stop date passes | Automatic termination |

---

## 14. Risk register

| # | Risk | Category | Probability (1 to 5) | Impact (1 to 5) | Score | RAG | Mitigant | Owner | Trigger |
|---|---|---|---|---|---|---|---|---|---|
| 1 | RBI treats a 24.9% stake as ownership (drag applies) | Regulatory | 2 | 5 | 10 | Amber | RBI comfort letter as CP; deal lapses | CFO, Regulatory Affairs | RBI response |
| 2 | Liminal security incident | Operational | 2 | 5 | 10 | Amber | Forensic DD, SOC 2, CERT-In reporting, liquidation preference, no Paytm balance-sheet exposure | Paytm nominee director | Any Sev-1 |
| 3 | Consortium bids for control of Liminal | Competitive | 3 | 3 | 9 | Amber | ROFR + matching right; Plan B vendors | Strategy | Offer notice |
| 4 | VDA prohibition law | Regulatory | 2 | 4 | 8 | Amber | Pivot Liminal to tokenized and e₹ custody; option stays unexercised | Strategy | Bill introduced |
| 5 | Client churn higher than 5% | Commercial | 2 | 3 | 6 | Green | Safeguards §11; break-even churn 57.6% | Liminal CEO | Quarterly GRR |
| 6 | Founder or key-talent exit | People | 2 | 3 | 6 | Green | Founder retention via Tranche 2 and ESOP refresh from primary | Liminal board | Resignation |
| 7 | Overpayment or impairment of the stake | Financial | 2 | 2 | 4 | Green | Price at 7.3x vs 7.5x fair value; Tranche 2 only on delivery | CFO | Annual impairment test |
| 8 | MDR rolled back | Policy | 2 | 2 | 4 | Green | Recommendation does not rely on MDR | CFO | NPCI circular |
| 9 | FEMA or ODI route challenged | Legal | 2 | 3 | 6 | Green | Indian-entity route; counsel opinion | Legal | Structuring |
| 10 | CCI counts the option and requires filing | Legal | 2 | 1 | 2 | Green | Green Channel deemed approval | Legal | Counsel view |
| 11 | Licence or integration underdelivers | Execution | 3 | 2 | 6 | Green | Service levels in licence; 5-year survival clause | CTO | Usage KPIs |
| 12 | Reputational spill-over to Paytm (crypto association) | Reputational | 2 | 3 | 6 | Green | Standalone brand; no Paytm co-branding; no VDA exposure at Paytm | Communications | Media event |

Heat-map layout for the slide: a 5×5 grid (probability on the x-axis, impact on the y-axis), with
risks 1 and 2 in the amber band top-left of centre, risk 3 in the centre, and the rest in the green
band.

---

## 15. Implementation roadmap and decision triggers

**First 100 days after Board approval**

| Weeks | Activity |
|---|---|
| 0 to 2 | Board approval; LODR disclosure; appoint advisors; open data room |
| 2 to 8 | Diligence (forensic, legal, QoE); RBI DPSS consultation; Customer Validation Plan; CCI analysis |
| 8 | Sign; announce ROFR and licence |
| 8 to 20 | CPs: RBI comfort, client letters, valuer report, Articles, FIU-IND notification |
| 20 | Close; board reconstitution; licence live |
| 20 to 34 | Information barrier certification; first quarterly KPI pack; Plan B vendor shortlist kept warm |

**Thirty-six months**

| Month | Gate review | Decision |
|---|---|---|
| 12 | Churn and GRR, licence usage, RBI dialogue | Continue or escalate risks |
| 24 | ARR trajectory vs Tranche 2 band, security record | Prepare Tranche 2 |
| 30 | All five gates | Open the option window, or stay at 24.9% |
| 30 to 42 | Option window | Exercise only if G1 to G5 hold and NPV at strike ≥ 0 |

**KPI dashboard.** Liminal ARR, gross revenue retention, top-4 concentration, EBITDA margin,
security incidents, RBI dialogue status, licence usage by Paytm, Paytm EPS impact.

**Kill switches.** RBI indicating that the drag applies; any top-4 client leaving because of Paytm;
a Sev-1 security incident; a VDA prohibition law; Liminal ARR below ₹200 Cr; information-barrier
failure; a consortium offer above the maximum justified price (Paytm lets it pass).

---

## 16. Assumptions register and model summary

### 16.1 Case facts used (never modified)

₹1,18,750 Cr market cap; 64 Cr shares; ₹8,900 Cr cash; ₹350 Cr debt; CRISIL AA- (Stable); revenue
₹8,450 Cr; EBITDA ₹640 Cr; PAT ₹480 Cr; EPS ₹7.50 [C §1]. Deal ₹4,000 Cr (₹2,100 Cr cash,
₹1,900 Cr equity); ARR ₹220 Cr; top-4 clients 60% of ARR; Liminal about breakeven [C §2]. Churn 30%
to 45% under full acquisition [C §3.1]. Drag ₹750 Cr/yr [C §3.2]. MDR ₹115 Cr/yr [C §3.4].

*Note on the rating.* Our research found no current CRISIL rating for One97 or PPSL [S131];
we use AA- (Stable) because the case states it, per the Modeling Clarification [CL].

### 16.2 Team assumptions

| ID | Assumption | Value | Rationale |
|---|---|---|---|
| A01 | Share price for issuance | ₹1,855.47 | Market cap ÷ shares |
| A02 | Tax rate | 25.17% | Section 115BAA; carried losses ignored (conservative) |
| A03 | Pre-tax yield on Paytm cash | 6.00% | 364-day T-bill 5.74% [S28] plus treasury mix |
| A04 | Cost of new debt | 8.75% | AA band 8.0% to 9.5% [S29] |
| A05 | Yield on locked reserves | 5.00% | RBI SDF rate [S27]; 1% negative carry |
| A06 | Paytm PAT held flat | ₹480 Cr | Isolates the deal effect |
| A07 | Paytm WACC | 15.5% | 7.04% + 1.20 × 7.08% [S30, S31] |
| A08 | Liminal discount rate | 17.0% | 7.04% + 1.40 × 7.08% |
| A09 | Liminal terminal growth | 6.0% | Below India's nominal growth |
| A10 | Liminal growth and margin paths | §7.2 | Three scenarios |
| A11 | D&A, capex, NWC | 4%, 5%, 2% of incremental revenue | Infrastructure-software norms |
| A12 | Loss on churned ARR | 60% year 1, 30% year 2 | Sticky costs |
| A13 | Churn by path | Full 37.5%; minority 5%; JV 10%; walk 0 | §11.3 |
| A14 | Drag by path | Full ₹750 Cr [C]; minority 0 (stress ₹187 Cr); JV ₹375 Cr | Drag follows ownership × control |
| A15 | Drag treatment | Perpetual; alternatives in §9.7 | Case says "recurring" |
| A16 | MDR | ₹115 Cr [C] in every path | Deal-independent |
| A17 | Standalone governance cost (full) | ₹15 Cr/yr | Board, barriers, separate infrastructure |
| A18 | PPA amortisation (full) | ₹100 Cr/yr for 10 years | 25% of price as intangibles |
| A19 | Transaction costs (full) | ₹60 Cr | 1.5% of deal value |
| A20 | Avoided in-house build | ₹40 Cr/yr | 3-year MPC build and certifications |
| A21 | Revenue synergy | ₹0 to ₹165 Cr/yr (base), 40% margin, 5% terminal growth | Tokenized settlement, e₹, cross-border B2B |
| A22 | Synergy retained via licence | 70% | Operations, not growth economics |
| A23 | Licence fee | ₹25 Cr/yr | Platform fee |
| A24 | Stake terms | 24.9%; ₹400 Cr upfront (₹250 Cr primary, ₹150 Cr secondary); Tranche 2 up to ₹600 Cr on FY29 ARR ₹500 to ₹650 Cr | Priced at 24.9% × weighted fair value, rounded down |
| A25 | JV terms | 50:50; ₹400 Cr cash; ₹40 Cr/yr set-up for 2 years | Symmetric with the minority |
| A26 | Scenario probabilities | Bear 25%, base 50%, bull 25% | |
| A27 | Call option | Months 30 to 42; FMV strike, 8x to 12x trailing ARR collar | FEMA: no assured return |
| A28 | Decision-matrix weights | Value 25, EPS/FCF 15, rating 10, churn 15, drag 10, access 15, block 10 | |
| A29 | Reverse break fee | ₹30 Cr | Only on a walk without CP failure |
| A30 | Comparables basis | Trading 5.96x to 8.35x ARR (custody and high-growth subset); precedents 7.8x to 12.8x; weights 50/30/20 with DCF | §7 |

### 16.3 Assumptions-slide content (the fourteen that move the answer)

A07, A08, A13 (churn by path), A14 (drag by path), A15 (drag treatment), A16 (MDR treatment), A18,
A20, A21, A22, A24, A26, A27, A30.

---

## 17. Slide blueprint for the Figma deck

The deck runs cover + 12 core slides + appendix + thank you. Each core slide carries an action
title, a source line and at least four visual forms. Data keys refer to `model_outputs.json`.

| # | Slide | Action title | Content blocks | Data |
|---|---|---|---|---|
| 1 | Cover | Project Satoshi Gate: a board recommendation on Liminal Custody Solutions | Title, recommendation strip, team block | n.a. |
| 2 | Executive Summary | Take 24.9% of Liminal for ₹400 Cr with a path to control; buying it outright destroys ₹7,638 Cr | Recommendation panel; for/against columns; 4 KPI tiles (NPV, EPS, drag, churn); E1 to E8 answer strip | `moneyshot`, `pw_npv`, `eps_bridge_min_fy27` |
| 3 | Situation overview | Paytm trades at 247x earnings with 8.1% of UPI, so growth must come from beyond payments without an EPS hit | Ratio table; UPI share bars; MDR mechanics diagram; regulatory timeline 2022 to 2026 | `ratios` |
| 4 | Strategic value and targets | Custody is a real 3 to 7 year option on India's tokenized rails, and its moat is neutrality, which control destroys | Four-arena matrix; VRIO; MECE target filter; peer valuation strip | §4, §5 |
| 5 | Valuation | ₹4,000 Cr is 18.2x ARR today and 29.1x after a base-case revolt, 2.4x Liminal's ₹1,656 Cr fair value | Football field; implied-multiple bars; DCF grid; comps table | `football`, `implied_mult`, `dcf_grid_base` |
| 6 | Four paths | The minority stake scores 4.10 of 5, ahead of walk-away 3.75, JV 2.70 and full acquisition 2.10 | Symmetric table; weighted matrix; licence-vs-ownership panel | `matrix`, `paths` |
| 7 | Stress test (moneyshot) | Buying control destroys ₹7,638 Cr in the base case and still loses ₹7,042 Cr with zero churn | Churn × drag heatmap; giant numeral; PAT/FCF breakeven timeline; MDR-offset bar; drag-treatment table | `full_grid`, `breakeven_summary` |
| 8 | Structure and financing | ₹400 Cr of cash buys the stake with no new shares or debt, and FY27 EPS rises to ₹8.79 | Term sheet; EPS waterfall; funding-mix table M1 to M5; credit metrics | `funding`, `eps_bridge_min_fy27` |
| 9 | Churn and governance | Independence holds expected churn to 5% against 37.5% under control; the stake breaks even only at 57.6% | Client risk table; governance chart; safeguard matrix; churn-by-path bars | `min_stress`, `min_be_churn` |
| 10 | Regulatory path | Investing through One97 into Liminal's Indian entity avoids the ODI test and mandatory CCI review, and keeps the PA ring-fenced | Three-phase swimlane; regulator map; compliance architecture | §12 |
| 11 | Competition and contingency | The consortium inherits the same bank revolt, so Paytm competes on structure and never pays above ₹1,797 Cr for control | Game tree; response ladder; walk-away triggers; >45% churn ladder | `max_price`, `compression` |
| 12 | Roadmap and risks | Five gates decide the option in months 30 to 42; failing any one keeps Paytm at 24.9% | Gantt; gate table; KPI dashboard; risk heat map | §13 to §15 |
| 13 | Assumptions | Our case rests on 30 disclosed assumptions; PAT breaks even in FY2028 and look-through FCF in FY2034 | Assumptions table; case-vs-assumption legend; breakeven table | §16 |
| 14 | Appendix | Model detail behind every number in the deck | DCF table; EPS by year; funding detail; bibliography | Appendix B |
| 15 | Thank you | n.a. | Team names | n.a. |

---

## 18. Anticipated judge questions

1. **"Your DCF gives Liminal ₹1,391 Cr. BitGo IPO'd at $2B and BVNK sold for $1.8B. Isn't that
   too conservative?"** BitGo now trades at a ~$0.94B market cap and a ~$1.23B enterprise value, about 6.5x its ~$188M
   fee revenue [S45, S46, S82]; Copper
   is drawing offers at 8% of its peak valuation [S47]. The football field gives precedents a 20%
   weight and still lands at 7.5x ARR. Even the top of the precedent range (15x on BVNK) is below
   18.2x.
2. **"Why 24.9% and not 26% or 30%?"** Below 25% there is no power to block a special resolution,
   the stake stays under CCI's material-influence line for minority exemptions, and it signals
   non-control to clients and RBI. At 20% or more Paytm still gets significant influence and equity
   accounting [S114].
3. **"Why would the founders accept a minority when a consortium wants control?"** Independence
   protects their ARR; they get ₹250 Cr of growth capital, ₹150 Cr of liquidity for early holders,
   and a route to a ₹4,016 Cr headline valuation for delivered ARR. Control by a consumer-wallet
   owner puts 30% to 45% of their ARR at risk [C §3.1].
4. **"What if RBI applies the drag to your minority?"** Then the deal does not happen. RBI comfort
   is a condition precedent. Stress-tested, a proportional drag would take NPV to −₹996 Cr, which is
   exactly why we will not proceed without the letter.
5. **"Isn't the MDR a reason to do the deal?"** No. Paytm earns it in every path. It offsets 15% of
   the drag.
6. **"Why not just license?"** A licence dies on a change of control. Equity plus a ROFR is what
   makes the licence durable.
7. **"What does the option cost you?"** Nothing beyond the fair price of the stake. The strike is
   fair value at exercise, so the option's value is the right to decide later, not a bargain price.
8. **"Your churn assumptions for the minority are unvalidated."** Correct, and we say so. The
   Customer Validation Plan and client comfort letters are conditions precedent. The recommendation
   survives up to 57.6% churn.
9. **"What if the consortium also walks?"** Liminal stays independent with Paytm as its largest
   strategic shareholder, which is the base case.
10. **"Walk-away has an NPV of zero and no risk. Why not that?"** It forgoes ₹406 Cr of synergy and
    build value and leaves Liminal open to the consortium. The minority is NPV-positive and keeps
    both.
11. **"Why is the JV worse than the minority?"** Joint control attracts half the drag (₹375 Cr/yr)
    and offers no block on the consortium; even with zero drag it is slightly negative.
12. **"The case says AA-. Your research says there is no CRISIL rating."** The case governs. Either
    way, our structure leaves every credit metric unchanged.
13. **"How do you handle the WazirX history?"** An independent forensic review is a condition
    precedent. The Grant Thornton audit placed the breach outside Liminal [S34], but the Delhi Police
    allegation on logs [S36] needs closing.
14. **"Why invest in the Indian entity?"** Because One97 would likely fail the ODI three-year profit
    test for a foreign stake [S97], and Liminal's case clients are Indian.
15. **"What is the single number that decides this?"** ₹750 Cr a year. It is larger than Liminal's
    ARR and Paytm's PAT. Only non-control removes it.
16. **"Why not an all-equity full deal? It halves the dilution."** Financing changes EPS, not value.
    Every mix has the same −₹7,638 Cr NPV.
17. **"What if Liminal's ARR is lower than ₹220 Cr?"** Quality of earnings is a CP; closing ARR
    below ₹200 Cr is a walk-away trigger.
18. **"Can the Board still get control if the market opens up?"** Yes, via the option in months 30 to
    42, at fair value, once the five gates hold.
19. **"Is the ₹400 Cr stake itself value-destroying at bear case?"** Slightly: −₹113 Cr in bear
    against +₹211 Cr in base, probability-weighted +₹128 Cr. The downside is bounded at the stake
    price, protected by a liquidation preference.
20. **"How do you know the drag would not apply to the consortium?"** We do not claim to know. We
    infer from the case logic that an RBI-regulated PA and wallet issuer would face comparable
    scrutiny. That is why we treat it as a risk to the consortium, not a certainty.

---

## Appendix A: Bibliography

All sources accessed 23 to 24 September 2026. Where a primary page was blocked, the fact was taken
from a reputable secondary report of it, and that report is the one cited. Raw fact tables with
verbatim snippets are in `research/raw/`.

| ID | Source | URL | Used in § |
|---|---|---|---|
| S01 | PayU (2026) 'UPI MDR 2026: What the new 0.4% charge means for businesses' | https://payu.in/blog/upi-mdr-2026-what-the-new-charge-means-for-businesses/ | 3.4 |
| S02 | Vajiram & Ravi (2026) 'UPI merchant charges above ₹2,000, new MDR rules from 15th October' | https://vajiramandravi.com/current-affairs/upi-mdr-2026/ | 3.4 |
| S03 | Inc42 (2026) 'UPI in August: Navi's market share climbs to 4.4%, PhonePe and Google Pay slip' | https://inc42.com/buzz/upi-in-august-navis-market-share-climbs-to-4-4-phonepe-google-pay-slip/ | 3.2, 6.4 |
| S04 | Entrackr (2026) 'August marks all-time high UPI transactions for PhonePe and Google Pay' | https://entrackr.com/news/august-marks-all-time-high-upi-transactions-for-phonepe-and-google-pay-10065606 | 3.2 |
| S05 | One97 Communications (2026) 'Earnings Release Q1 FY2027' | https://paytm.com/document/ir/financial-results/Paytm_Earning-Release_Q1-FY-2027.pdf | 3.1 |
| S06 | One97 Communications (2026) 'Paytm FY2026 results: full year profitability with PAT at ₹552 Cr' | https://paytm.com/support/investor-relations/paytm-fy-2026-results-full-year-profitability-with-pat-at-552-cr-revenue-grows-to-8437-cr | 3.1, 12.1 |
| S07 | One97 Communications (2026) 'Earnings Release Q4 FY2026' | https://paytm.com/document/ir/financial-results/Paytm_Earnings-Release_Q4_FY-2026_Final.pdf | 3.3 |
| S08 | Reserve Bank of India (2024) 'Action against Paytm Payments Bank Ltd under Section 35A', press release 2023-2024/1774, 31 Jan | https://fidcindia.org.in/wp-content/uploads/2024/02/RBI-PAYTM-PAYMENTS-BANK-31-01-24.pdf | 3.3 |
| S09 | Reserve Bank of India (2024) 'Action against Paytm Payments Bank Ltd under Section 35A', 16 Feb | https://rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=57345 | 3.3 |
| S10 | Reserve Bank of India (2026) 'RBI cancels the licence of Paytm Payments Bank Limited', press release 2026-2027/143 | https://rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=62621 | 3.3 |
| S11 | Outlook Money (2025) 'RBI clears Paytm arm PPSL as payment aggregator for offline, cross-border transactions' | https://www.outlookmoney.com/banking/rbi-clears-paytm-arm-ppsl-as-payment-aggregator-for-offline-crossborder-transactions | 3.3, 4 |
| S12 | YourStory (2025) 'RBI grants Paytm's PPSL final approval to operate as payment aggregator' | https://yourstory.com/2025/11/rbi-paytm-ppsl-final-approval-payment-aggregator | 3.3 |
| S13 | One97 Communications (2026) 'Is Paytm an Indian company? Here's what our latest shareholding tells you' | https://paytm.com/blog/investor-relations/paytm-becomes-an-indian-owned-and-controlled-company/ | 12.1 |
| S14 | Trendlyne (2026) 'One97 Communications latest shareholding pattern' | https://trendlyne.com/equity/share-holding/712312/PAYTM/latest/one97-communications-ltd/ | 12.1 |
| S15 | Screener.in (2026) 'One 97 Communications Ltd, consolidated' | https://www.screener.in/company/PAYTM/consolidated/ | 3.1 |
| S16 | Business Standard (2025) 'Paytm reports consolidated loss of ₹539.8 crore in Q4FY25' | https://www.business-standard.com/companies/news/paytm-reports-consolidated-loss-of-539-8-crore-in-q4fy25-revenue-drops-125050601502_1.html | 12.1 |
| S17 | Inc42 (2026) 'PhonePe DRHP: a look at shareholding pattern and key executives' | https://inc42.com/buzz/phonepe-drhp-a-look-at-shareholding-pattern-key-executives/ | 6.2 |
| S18 | TechCrunch (2026) 'Walmart-backed PhonePe shelves IPO as global tensions rattle markets' | https://techcrunch.com/2026/03/16/walmart-backed-phonepe-shelves-ipo-as-global-tensions-rattle-markets/ | 6.2 |
| S19 | PhonePe (2025) 'PhonePe receives final RBI authorization to operate as an online payment aggregator' | https://www.phonepe.com/press/phonepe-receives-final-rbi-authorization-to-operate-as-an-online-payment-aggregator/ | 6.2 |
| S20 | PhonePe (2026) 'Grievance Policy' (PPI authorisation) | https://www.phonepe.com/grievance-policy/ | 6.2 |
| S21 | ThePrint / PTI (2022) 'RBI lifts restrictions on Mastercard' | https://theprint.in/economy/rbi-lifts-restrictions-on-mastercard/999399/ | 6.2 |
| S22 | CoinDesk (2026) 'Mastercard secures New York BitLicense' | https://www.coindesk.com/business/2026/05/27/mastercard-secures-new-york-bitlicense-to-support-stablecoin-and-digital-payment-infrastructure | 6.2 |
| S23 | Mastercard (2026) 'Mastercard to acquire BVNK to connect on-chain payments and fiat rails' | https://www.mastercard.com/global/en/news-and-trends/press/2026/march/Mastercard-to-acquire-BVNK-to-connect-on-chain-payments-and-fiat-rails.html | 6.2, 6.4, 10.6 |
| S24 | Business Wire / Mastercard (2026) 'Mastercard completes acquisition of BVNK' | https://www.businesswire.com/news/home/20260803104450/en/Mastercard-completes-acquisition-of-BVNK-to-advance-global-stablecoin-capabilities | 6.2 |
| S25 | CoinDesk (2026) 'Zerohash pursues new funding at more than $1.5 billion valuation after Mastercard drops investment plans' | https://www.coindesk.com/business/2026/05/19/zerohash-pursues-new-funding-at-more-than-usd1-5-billion-valuation-after-mastercard-drops-investment-plans | 6.2 |
| S26 | CoinDesk (2026) 'Mastercard said to weigh Zerohash investment after crypto company ends takeover talks' | https://www.coindesk.com/business/2026/01/16/mastercard-said-to-weigh-zerohash-investment-after-crypto-company-ends-takeover-talks | 6.2, 6.4 |
| S27 | ClearTax (2026) 'Repo rate 2026: current, reverse, SDF' | https://cleartax.in/s/repo-rate | 16.2 |
| S28 | CEIC (2026) 'India Treasury Bills auction: 364 days: implicit yield at cut off' | https://www.ceicdata.com/en/india/treasury-bills-auction-364-days/treasury-bills-auction-364-days-price-implicit-yield-at-cut-off | 16.2 |
| S29 | BondScanner (2026) 'Corporate bond interest rates India 2026: rates by rating and sector' | https://bondscanner.com/blog/corporate-bond-interest-rates-india-2026 | 16.2 |
| S30 | Trading Economics (2026) 'India 10-year government bond yield' | https://tradingeconomics.com/india/government-bond-yield | 7.1, 16.2 |
| S31 | Damodaran, A. (2026) 'Country default spreads and risk premiums', January update, NYU Stern | https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/ctryprem.html | 7.1, 16.2 |
| S32 | TradingView (2026) 'NSE:PAYTM' beta, with stockanalysis.com PAYTM statistics | https://in.tradingview.com/symbols/NSE-PAYTM/ | 7.1 |
| S33 | CoinDesk (2024) 'WazirX, Liminal Custody blame each other as $230M crypto exploit leaves customers stranded' | https://www.coindesk.com/business/2024/07/19/wazirx-liminal-custody-blame-each-other-as-230m-crypto-exploit-leaves-customers-stranded | 5.5 |
| S34 | Benzinga (2024) 'Liminal Custody not responsible for $230M WazirX hack: audit finds' | https://benzinga.com/content/40782223/liminal-custody-not-responsible-for-230-wazirx-hack-audit-finds | 5.5, 18 |
| S35 | CoinDesk (2024) 'WazirX ends custody relationship with Liminal' | https://www.coindesk.com/business/2024/08/14/wazirx-ends-custody-relationship-with-liminal-is-moving-funds-to-new-multisig-wallets | 5.5 |
| S36 | The Crypto Times (2024) 'Delhi Police files chargesheet in court for WazirX hack, Liminal to be probed' | https://www.cryptotimes.io/2024/11/18/delhi-police-files-chargesheet-in-court-for-wazirx-hack-liminal-to-be-probed/ | 5.5, 12.2, 18 |
| S37 | CoinDesk (2025) 'WazirX restructuring cleared' | https://www.coindesk.com/markets/2025/10/13/wazirx-restructuring-cleared-in-massive-relief-for-usd230m-hack-victims | 5.5 |
| S38 | CoinDesk via Yahoo Finance (2024) 'Custody provider Liminal wins approval' (FIU-IND registration; CBI mandate) | https://finance.yahoo.com/news/custody-provider-liminal-wins-approval-094912440.html | 5.1, 5.4, 10.1 |
| S39 | ADGM FSRA (2025) Public register: First Answer Middle East Limited (FSP 220125), status withdrawn | https://www.adgm.com/public-registers/fsra/firms/financial-firms/first-answer-middle-east-limited-liminal-220125 | 5.1, 5.5, 12.2 |
| S40 | Liminal Custody (2024) 'Liminal granted an initial approval from VARA in Dubai' | https://www.liminalcustody.com/blog/liminal-granted-an-initial-approval-from-virtual-asset-regulatory-authority-vara-in-dubai/ | 5.1 |
| S41 | PR Newswire (2026) 'Liminal Custody crosses $100 billion in total transaction volume' | https://www.prnewswire.com/news-releases/liminal-custody-crosses-100-billion-in-total-transaction-volume-302706024.html | 5.1 |
| S42 | Business Wire (2022) 'Liminal raises $4.7 million seed round led by Elevation Capital' | https://www.businesswire.com/news/home/20220531006014/en/Liminal-Raises-%244.7-Million-Seed-Round-Led-By-Elevation-Capital | 5.1, 11.1 |
| S43 | Tracxn (2026) 'Liminal company profile' | https://tracxn.com/d/companies/liminal/__zEqcRH4sCuxNoLj3nMqDlI4hb-H90ZV0p7iraq6FIBk | 5.1, 5.5 |
| S44 | CoinDesk (2026) 'BitGo prices IPO at $18' | https://www.coindesk.com/markets/2026/01/21/bitgo-prices-ipo-at-usd18-pitching-custody-growth-over-crypto-trading-swings | 6.1 |
| S45 | BitGo Holdings (2026) FY2025 results, SEC Exhibit 99.1 | https://www.sec.gov/Archives/edgar/data/1740604/000174060426000017/btgo-exhibit991.htm | 6.1, 18 |
| S46 | CompaniesMarketCap (2026) 'BitGo market cap' | https://companiesmarketcap.com/bitgo/marketcap/ | 5.4, 6.1, 18 |
| S47 | CoinDesk (2026) 'Crypto custody firm Copper has potential buyers but offers are way below its $500 million ask' | https://www.coindesk.com/business/2026/08/25/crypto-custody-firm-copper-has-potential-buyers-but-offers-are-way-below-its-usd500-million-ask | 5.4, 6.1, 18 |
| S48 | Fireblocks (2022) 'Fireblocks surpasses $100 million ARR milestone' | https://www.fireblocks.com/press/fireblocks-surpasses-100-million-arr-milestone-cementing-its-status-as-saas-centaur | 5.4, 6.1 |
| S49 | Office of the Comptroller of the Currency (2021) Conditional approval for Anchorage Digital, NR 2021-6 | https://www.occ.gov/news-issuances/news-releases/2021/nr-occ-2021-6.html | 6.1 |
| S50 | The Crypto Times (2026) 'Standard Chartered confirms acquisition of Zodia Custody crypto unit' | https://www.cryptotimes.io/2026/05/18/standard-chartered-confirms-acquisition-of-zodia-custody-crypto-unit/ | 5.4, 6.1, 11.1, 13 |
| S51 | Ledger Insights (2023) 'Citi reconsidering Metaco digital asset custody' | https://www.ledgerinsights.com/citi-digital-asset-custody-metaco-reconsidering/ | 11.1 |
| S52 | CoinDesk (2023) 'Ripple edges closer to banks via crypto custody firm Metaco' | https://www.coindesk.com/business/2023/11/27/ripple-edges-closer-to-banks-via-crypto-custody-firm-metaco | 11.1 |
| S53 | Mastercard (2020) 'Mastercard to acquire Finicity to advance open banking strategy' | https://investor.mastercard.com/investor-news/investor-news-details/2020/Mastercard-to-Acquire-Finicity-to-Advance-Open-Banking-Strategy/default.aspx | 11.1 |
| S54 | CNBC (2021) 'Visa abandons takeover of Plaid after DOJ raises antitrust concerns' | https://www.cnbc.com/2021/01/12/visa-abandons-takeover-of-plaid-after-doj-raises-antitrust-concerns.html | 11.1 |
| S55 | Chainalysis (2025) '2025 Global Crypto Adoption Index' | https://www.chainalysis.com/blog/2025-global-crypto-adoption-index/ | 4 |
| S56 | KoinX (2026) 'India TDS on crypto statistics' (citing Ministry of Finance Rajya Sabha replies) | https://www.koinx.com/stats/india-tds-on-crypto-statistics | 4 |
| S57 | The Cryptonomist (2026) 'India crypto regulation: RBI's prohibition stance and market impact' | https://en.cryptonomist.ch/2026/07/08/india-crypto-regulation-rbi/ | 3.3, 4, 12.4 |
| S58 | The Coin Republic (2026) 'RBI pushes banks away from stablecoins' | https://www.thecoinrepublic.com/2026/07/06/crypto-regulation-news-rbi-pushes-banks-away-from-stablecoins/ | 4, 11.1 |
| S59 | Business Upturn (2026) 'Digital rupee in circulation falls 24% to ₹771.7 crore' (reporting RBI Annual Report 2025-26) | https://www.businessupturn.com/sectors/banking/digital-rupee-in-circulation-falls-24-to-rs-771-7-crore-even-as-rbi-expands-cbdc-pilots | 4 |
| S60 | Business Standard (2025) 'Retail CBDC transactions hit 120 mn, value crosses ₹28,000 crore: RBI DG' | https://www.business-standard.com/amp/finance/news/retail-cbdc-transactions-hit-120-mn-value-crosses-28-000-crore-rbi-dg-125120501178_1.html | 4 |
| S61 | Electronic Payments International (2025) 'MobiKwik, CRED e-rupee wallets' | https://www.electronicpaymentsinternational.com/news/mobikwik-cred-e-rupee-wallets/ | 4 |
| S62 | Ledger Insights (2024) 'Google Pay, Walmart-backed PhonePe to join India's CBDC pilot' | https://www.ledgerinsights.com/google-pay-walmart-backed-phonepe-to-join-indias-cbdc-pilot/ | 4 |
| S63 | IBTimes India / IANS (2026) 'RBI expands e-rupee pilots, starts tokenised CD trial' | https://www.ibtimes.co.in/rbi-expands-e-rupee-pilots-starts-tokenised-credit-deposit-trial-902456 | 4 |
| S64 | Deccan Chronicle (2026) 'RBI considering gold tokenisation, says RBI executive director at GFF' | https://www.deccanchronicle.com/business/economics/rbi-considering-gold-tokenisation-says-rbi-exec-director-at-gff-1986165 | 4 |
| S65 | SEBI (2026) FAQs on the Demat 2.0 tokenised bond pilot | https://www.sebi.gov.in/sebi_data/faqfiles/sep-2026/1789049630065.pdf | 4 |
| S66 | Nexus Global Payments (2026) 'Nexus Global Payments appoints technical operator' | https://www.nexusglobalpayments.org/nexus-global-payments-appoints-technical-operator/ | 4 |
| S67 | Press Information Bureau (2026) Ministry of Finance release on UPI international presence, 6 Feb | https://www.pib.gov.in/PressReleasePage.aspx?PRID=2224505&reg=3&lang=2 | 4 |
| S68 | Citi Institute (2026) 'Tokenization 2030' GPS report | https://www.citigroup.com/rcs/citigpa/storage/public/Citi_Institute_GPS_Report_Tokenization_2030.pdf | 4 |
| S69 | Ledger Insights (2024) 'McKinsey estimates tokenization will be less than $2 trillion by 2030' | https://www.ledgerinsights.com/mckinsey-estimates-tokenization-will-be-less-than-2-trillion-by-2030/ | 4 |
| S70 | Ripple and BCG (2025) 'Global financial infrastructure entering a new era' | https://ripple.com/ripple-press/global-financial-infrastructure-entering-a-new-era/ | 4 |
| S71 | KuCoin News (2026) 'Tokenized RWA market surpasses $38 billion' (citing rwa.xyz) | https://www.kucoin.com/news/flash/tokenized-rwa-market-surpasses-38-billion-shifts-focus-to-utility | 4 |
| S72 | News On AIR (2025) 'Remittances by Indians working abroad scale record high of $135 billion in FY25' | https://www.newsonair.gov.in/remittances-by-indians-working-abroad-scale-record-high-of-135-billion-in-fy25/ | 4 |
| S73 | The Tribune (2026) 'India's net private transfers rise to record $144.8 billion in FY25-26' | https://www.tribuneindia.com/news/business/indias-net-private-transfers-rise-to-record-usd-144-8-billion-in-fy25-26-centre-says-no-war-wise- | 4 |
| S74 | World Bank (2026) World Development Indicators, personal remittances received (BX.TRF.PWKR.CD.DT) | https://api.worldbank.org/v2/country/IN;WLD/indicator/BX.TRF.PWKR.CD.DT?format=json&per_page=30&date=2020:2025 | 4 |
| S75 | World Bank (2026) Average cost of remittances to India (SI.RMT.COST.IB.ZS) | https://api.worldbank.org/v2/country/IN/indicator/SI.RMT.COST.IB.ZS?format=json&per_page=20 | 4 |
| S76 | World Bank (2026) Remittance Prices Worldwide, Q3 2025 report | https://remittanceprices.worldbank.org/sites/default/files/2026-04/RPW_main_report_and_annex_Q325.pdf | 4 |
| S77 | IFSCA (2025) 'Consultation paper on regulatory approach towards tokenization of real-world assets' | https://ifsca.gov.in/Document/ReportandPublication/ifsca-consultation-paper-on-regulatory-approach-towards-tokenization-of-real-world-assets | 4 |
| S78 | stockanalysis.com (2026) PB Fintech statistics | https://stockanalysis.com/quote/nse/POLICYBZR/statistics/ | 7.3 |
| S79 | stockanalysis.com (2026) Pine Labs statistics | https://stockanalysis.com/quote/nse/PINELABS/statistics/ | 7.3 |
| S80 | stockanalysis.com (2026) Coinbase statistics | https://stockanalysis.com/stocks/coin/statistics/ | 7.3 |
| S81 | stockanalysis.com (2026) Adyen statistics | https://stockanalysis.com/quote/ams/ADYEN/statistics/ | 7.3 |
| S82 | stockanalysis.com (2026) BitGo statistics | https://stockanalysis.com/stocks/btgo/statistics/ | 7.3, 18 |
| S83 | stockanalysis.com (2026) PayPal statistics | https://stockanalysis.com/stocks/pypl/statistics/ | 7.3 |
| S84 | stockanalysis.com and Screener.in (2026) MobiKwik, Zaggle and Infibeam statistics | https://stockanalysis.com/quote/nse/MOBIKWIK/statistics/ ; https://stockanalysis.com/quote/nse/ZAGGLE/statistics/ ; https://stockanalysis.com/quote/nse/INFIBEAM/statistics/ | 7.3 |
| S85 | Architect Partners (2025) 'Ripple / Hidden Road M&A alert' | https://architectpartners.com/wp-content/uploads/2025/04/Ripple-_-Hidden-Road-MA-Alert.pdf | 7.4 |
| S86 | Architect Partners (2025) 'Coinbase acquiring Deribit for $2.9B' | https://architectpartners.com/coinbase-acquiring-deribit-for-2-9b/ | 7.4 |
| S87 | Architect Partners (2026) 'Mastercard acquires BVNK for up to $1.8B' | https://architectpartners.com/mastercard-acquires-bvnk-for-up-to-1-8b/ | 7.4 |
| S88 | The Block (2025) 'Robinhood Bitstamp acquisition', with Robinhood's revenue disclosure | https://www.theblock.co/post/356701/robinhood-bitstamp-acquisition | 7.4 |
| S89 | Ripple (2023) 'Ripple acquires custody provider Metaco for $250M' | https://ripple.com/ripple-press/leading-enterprise-crypto-company-ripple-acquires-custody-provider-metaco-for-250m/ | 7.4 |
| S90 | TechCrunch (2025) 'Stripe makes $1.1 billion crypto bet as it closes on Bridge acquisition' | https://techcrunch.com/2025/02/05/stripe-makes-1-1-billion-crypto-bet-as-it-closes-on-bridge-acquisition/ | 7.4 |
| S91 | Morgan Lewis (2024) 'Competition Commission of India provides updated deal value threshold' | https://www.morganlewis.com/pubs/2024/09/competition-commission-of-india-provides-updated-deal-value-threshold | 12.3, 12.5 |
| S92 | AZB & Partners (2024) 'Deal value threshold' | https://www.azbpartners.com/bank/deal-value-threshold/ | 12.3 |
| S93 | Shardul Amarchand Mangaldas (2024) 'CCI revised deal value threshold regulations explained' | https://www.amsshardul.com/insight/cci-revised-deal-value-threshold-regulations-explained/ | 12.3 |
| S94 | Nishith Desai Associates (2025) Hotline on CCI merger control FAQs, September update | https://nishithdesai.com/fileadmin/user_upload/Html/Hotline/Article_Sep1225-M.html | 12.3 |
| S95 | Trilegal (2024) 'New era for Indian merger control begins on 10 September 2024' | https://trilegal.com/wp-content/uploads/2024/09/Trilegal-Update_New-Era-for-Indian-Merger-Control-Begins-on-10-September-2024.pdf | 12.3, 12.5 |
| S96 | Cyril Amarchand Mangaldas (2024) 'Demystifying the revised merger exemptions' | https://www.cyrilshroff.com/wp-content/uploads/2024/09/Client-Alert-Demystifying-the-revised-merger-exemptions.pdf | 12.3 |
| S97 | Foreign Exchange Management (Overseas Investment) Rules 2022, G.S.R. 646(E), text via LegitQuest | https://www.legitquest.com/act/foreign-exchange-management-overseas-investment-rules-2022/C409 | 12.1, 18 |
| S98 | AZB & Partners (2022) 'New overseas direct investment regime: key changes and the road ahead' | https://www.azbpartners.com/bank/new-overseas-direct-investment-regime-key-changes-and-the-road-ahead/ | 12.1 |
| S99 | SCC Online Blog (2026) 'FEMA overseas investment rules 2022: enforcement analysis' | https://www.scconline.com/blog/post/2026/07/18/fema-overseas-investment-rules-2022-enforcement-analysis/ | 12.1 |
| S100 | ThePrint (2025) 'Why ED sent ₹611 crore FEMA violation show-cause notice to Paytm parent company' | https://theprint.in/india/why-ed-sent-rs-611-cr-fema-violation-show-cause-notice-to-paytm-parent-company/2529149/ | 3.3, 12.1 |
| S101 | Business Standard (2026) 'Paytm receives RBI compounding order, company to pay ₹18.76 lakh' | https://www.business-standard.com/companies/news/paytm-receives-rbi-compounding-order-company-to-pay-rs-18-76-lakh-126020301518_1.html | 3.3 |
| S102 | Shardul Amarchand Mangaldas (2022) 'Decoding the amended preferential allotment norms' | https://www.amsshardul.com/insight/decoding-the-amended-preferential-allotment-norms/ | 10.2, 12.5 |
| S103 | Vinod Kothari Consultants (2022) 'FAQs on preferential issue under SEBI ICDR' | https://vinodkothari.com/2022/10/faqs-on-preferential-issue-of-equity-shares-and-convertible-securities-under-sebi-icdr/ | 10.2, 12.5 |
| S104 | CAIRR (2023) SEBI LODR Schedule III Part A | https://ca2013.com/schedule/lodr-schedule-iii-part-2/ | 12.2 |
| S105 | National Law Review (2023) 'SEBI's amendments to LODR' | https://natlawreview.com/article/sebi-s-amendments-to-lodr-increasing-corporate-responsibility-and-governance-india | 12.2 |
| S106 | ClearTax (2026) 'Section 186 of the Companies Act 2013' | https://cleartax.in/s/section-186-companies-act-2013 | 12.2 |
| S107 | Majmudar & Partners (2024) 'The impact of India's 18/25 cap on indemnities in cross-border M&A' | https://www.majmudarindia.com/the-impact-of-indias-18-25-cap-on-indemnities-in-cross-border-ma-transactions/ | 10.1 |
| S108 | TaxGuru (2020) 'Overview of FEMA (Non-Debt Instruments) Rules 2019' | https://taxguru.in/rbi/overview-foreign-exchange-management-non-debt-instruments-rules-2019.html | 10.1 |
| S109 | Harchandani & Associates (2025) 'FEMA FDI pricing rules: Rule 21 compliance' | https://harchandani.in/articles/mastering-fema-fdi-pricing-rules-ultimate-guide-to-rule-21-compliance | 10.1, 12.1, 12.2 |
| S110 | Reserve Bank of India (2025) Master Direction on Regulation of Payment Aggregators, RBI/DPSS/2025-26/141, 15 Sep | https://www.fidcindia.org.in/wp-content/uploads/2025/09/RBI-PAYMENT-AGGREGATORS-DIRECTIONS-15-09-25.pdf | 12.1, 12.5 |
| S111 | IndiaCorpLaw (2025) 'Decoding RBI's overhaul of the payment aggregator directions' | https://indiacorplaw.in/2025/10/09/decoding-rbis-overhaul-of-the-payment-aggregator-directions/ | 12.1 |
| S112 | Retail Banker International (2026) 'Paytm Payments Bank set for winding up after RBI licence revocation' | https://www.retailbankerinternational.com/news/paytm-payments-bank-set-for-winding-up-after-rbi-licence-revocation/ | 3.3 |
| S113 | Ind AS 103 Business Combinations, text via CAIRR | https://ca2013.com/indian-accounting-standard-ind-103/ | 9.8, 12.5 |
| S114 | Ind AS 28 Investments in Associates and Joint Ventures, text via CAIRR | https://ca2013.com/indian-accounting-standard-ind-28/ | 10.4, 12.2, 18 |
| S115 | Ind AS 36 Impairment of Assets, text via CAIRR | https://ca2013.com/indian-accounting-standard-ind-36/ | 9.8, 12.5 |
| S116 | Crisil Ratings (2025) 'Crisil's approach to financial ratios' | https://www.crisilratings.com/mnt/winshare/Ratings/SectorMethodology/MethodologyDocs/criteria/CRISILs%20Approach%20to%20Financial%20Ratios_1 | 10.2, 12.5 |
| S117 | FIU-IND (2023) AML and CFT guidelines for VDA service providers, 10 Mar | https://fiuindia.gov.in/pdfs/AML_legislation/AMLCFTguidelines10032023.pdf | 12.6 |
| S118 | AZB & Partners (2026) 'Client update: FIU guidelines 2026' | https://www.azbpartners.com/wp-content/uploads/2026/01/Client-Update-FIU-Guidelines-2026-AZB-January-14-2026.pdf | 12.6 |
| S119 | CERT-In (2022) Directions under section 70B(6) of the IT Act, 28 Apr | https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf | 12.6 |
| S120 | Shardul Amarchand Mangaldas (2025) 'Enforcement of the DPDP Act and notification of the DPDP Rules' | https://www.amsshardul.com/insight/enforcement-of-the-dpdp-act-and-notification-of-the-dpdp-rules/ | 12.6 |
| S121 | Press Information Bureau (2025) DPDP Rules 2025 explainer | https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf | 12.6 |
| S122 | Cyril Amarchand Mangaldas blog (2024) 'Share transfer restrictions under SHA: revisiting section 58(2)' | https://corporate.cyrilamarchandblogs.com/2024/10/share-transfer-restrictions-under-sha-the-need-to-revisit-section-582-of-ca-2013/ | 10.1, 12.2 |
| S123 | SEBI (2013) 'SEBI permits contracts for pre-emption and options in shareholders agreements' | https://www.sebi.gov.in/media/press-releases/oct-2013/sebi-permits-contracts-for-pre-emption-and-options-in-shareholders-agreements_25486.html | 10.1 |
| S124 | International Bar Association (2024) 'Are liquidation preference arrangements legally enforceable in India?' | https://www.ibanet.org/Are-liquidation-preference-arrangements-legally-enforceable-in-India | 10.1, 12.2 |
| S125 | Outlook Business (2025) 'CCI clears Coinbase's minority stake in CoinDCX parent' | https://www.outlookbusiness.com/news/cci-clears-coinbases-minority-stake-in-coindcx-parent-valuation-hits-245bn | 6.4 |
| S126 | Elets BFSI (2025) 'PayU acquires 43.5% stake in Mindgate Solutions' | https://bfsi.eletsonline.com/payu-acquires-43-5-stakes-in-mindgate-solutions/ | 6.4 |
| S127 | Upstox News (2026) 'Paytm block deal: Resilient Asset Management proposes to sell up to 4.98% stake' | https://upstox.com/news/market-news/stocks/paytm-block-deal-resilient-asset-management-proposes-to-sell-up-to-4-98-stake/article-198782/ | 12.1 |
| S128 | Business Standard (2026) 'Paytm builds ₹13,529 crore cash pile, eyes organic growth and acquisitions' | https://www.business-standard.com/companies/news/paytm-builds-13-529-crore-cash-pile-eyes-organic-growth-and-acquisitions-126072101468_1.html | 3.1 |
| S129 | Coinbase (2018) 'Coinbase Custody receives trust charter from the New York Department of Financial Services' | https://www.coinbase.com/blog/coinbase-custody-receives-trust-charter-from-the-new-york-department-of | 13 |
| S130 | The Block (2023) 'Deutsche Bank and Taurus: digital asset custody and tokenization' | https://www.theblock.co/post/250963/deutsche-bank-taurus-digital-asset-custody-tokenization-services | 5.4 |
| S131 | CRISIL (2011) 'One 97 Communications Limited IPO grading rationale' (the only CRISIL document found for One97) | https://www.crisilratings.com/content/dam/crisil/our-businesses/capital-markets/ipo-grading-list/view-rationale/CRISIL-Research_ipo-grading-rat_One97-communications.pdf | 16.1 |
| S132 | Caplight (2026) 'Hex Trust company profile' | https://www.caplight.com/company/hex-trust | 6.1 |
| S133 | MediaNama (2026) 'Why RBI wants cryptocurrencies out of India's banking system' | https://www.medianama.com/2026/07/223-why-rbi-want-cryptocurrencies-out-indias-banking-system/ | 12.4 |
| S134 | Liminal Custody (2026) Company website (EY Advisory internal audit appointment) | https://www.liminalcustody.com/ | 5.1 |

## Appendix B: Model tables (generated by `model/satoshi_gate_model.py`)

All figures ₹ Cr unless stated. Generated 2026-09-24T00:06:44.

### T1. Paytm baseline ratios (case facts)

| Metric | Value |
|---|---|
| Share price (₹) | 1855.47 |
| Enterprise value | 110200 |
| P/E (x) | 247.4 |
| EV/Revenue (x) | 13.04 |
| EV/EBITDA (x) | 172.2 |
| EBITDA margin % | 7.6 |
| Deal / ARR (x) | 18.18 |
| Deal as % of market cap | 3.37 |
| MDR post-tax | 86.05 |
| MDR-adjusted standalone EPS (₹) | 8.845 |
| MDR EPS uplift vs ₹7.50 % | 17.9 |
| MDR offset of drag, pre-tax % | 15.3 |
| MDR offset of drag, post-tax % | 11.5 |
| Drag / Liminal ARR (x) | 3.41 |
| Drag as % of Paytm PAT | 156 |
| Top-4 client ARR | 132 |
| Earnings yield % | 0.4 |
| Post-tax cash yield % | 4.49 |
| EPS with MDR at 50% of case value (₹) | 8.172 |

### T2. Implied multiple on surviving ARR

| Churn | Surviving ARR | Deal / ARR (x) |
|---|---|---|
| 0.0% | 220 | 18.2 |
| 30.0% | 154.0 | 26.0 |
| 37.5% | 137.5 | 29.1 |
| 45.0% | 121.0 | 33.1 |
| 60.0% | 88.0 | 45.5 |

### T3. Liminal standalone EV by scenario and churn (DCF, 16.5%, g 6%)

| Scenario | 0.0% | 5.0% | 15.0% | 30.0% | 37.5% | 45.0% | 60.0% |
|---|---|---|---|---|---|---|---|
| bear | 428 | 398 | 337 | 243 | 196 | 149 | 55 |
| base | 1391 | 1313 | 1154 | 915 | 795 | 673 | 430 |
| bull | 2398 | 2269 | 2009 | 1615 | 1418 | 1221 | 822 |

### T4-bear. Liminal P&L path, bear, no churn

| FY | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 |
|---|---|---|---|---|---|---|---|---|---|---|
| Revenue | 268.4 | 322.1 | 380.1 | 440.9 | 502.6 | 562.9 | 624.8 | 687.3 | 749.2 | 809.1 |
| EBITDA | 10.7 | 29.0 | 49.4 | 74.9 | 100.5 | 123.8 | 143.7 | 165.0 | 187.3 | 202.3 |
| PAT | 0.0 | 12.1 | 25.6 | 42.9 | 60.2 | 75.8 | 88.8 | 102.9 | 117.7 | 127.1 |
| FCF | -3.7 | 7.8 | 20.6 | 37.3 | 53.9 | 69.0 | 81.3 | 94.7 | 109.0 | 117.9 |

### T4-base. Liminal P&L path, base, no churn

| FY | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 |
|---|---|---|---|---|---|---|---|---|---|---|
| Revenue | 297.0 | 392.0 | 501.8 | 627.3 | 765.3 | 918.3 | 1083.6 | 1257.0 | 1433.0 | 1604.9 |
| EBITDA | 23.8 | 62.7 | 115.4 | 181.9 | 252.5 | 330.6 | 400.9 | 477.7 | 544.5 | 609.9 |
| PAT | 8.9 | 35.2 | 71.3 | 117.3 | 166.1 | 219.9 | 267.6 | 319.8 | 364.6 | 408.3 |
| FCF | 4.4 | 29.4 | 64.1 | 108.6 | 155.7 | 207.7 | 253.4 | 303.8 | 346.7 | 388.8 |

### T4-bull. Liminal P&L path, bull, no churn

| FY | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 |
|---|---|---|---|---|---|---|---|---|---|---|
| Revenue | 330.0 | 478.5 | 660.3 | 871.6 | 1107.0 | 1361.6 | 1633.9 | 1911.7 | 2198.4 | 2484.2 |
| EBITDA | 33.0 | 95.7 | 184.9 | 296.4 | 420.7 | 544.6 | 669.9 | 802.9 | 923.3 | 1043.4 |
| PAT | 14.8 | 57.3 | 118.6 | 195.7 | 281.6 | 366.8 | 452.4 | 543.6 | 625.1 | 706.4 |
| FCF | 9.3 | 49.5 | 108.4 | 182.7 | 265.9 | 348.1 | 430.6 | 518.9 | 597.4 | 675.8 |

### T5. DCF sensitivity, base, no churn (WACC rows x terminal growth columns)

| WACC | 5.0% | 5.5% | 6.0% | 6.5% | 7.0% |
|---|---|---|---|---|---|
| 15.0% | 1696 | 1754 | 1819 | 1891 | 1972 |
| 16.0% | 1489 | 1533 | 1582 | 1636 | 1696 |
| 17.0% | 1319 | 1353 | 1391 | 1432 | 1477 |
| 18.0% | 1178 | 1205 | 1234 | 1266 | 1300 |
| 19.0% | 1058 | 1080 | 1103 | 1128 | 1155 |

### T6. Synergy PV (full ownership basis)

| Scenario | Revenue synergy PV | Build avoided PV | Total |
|---|---|---|---|
| bear | 76 | 193 | 269 |
| base | 213 | 193 | 406 |
| bull | 335 | 193 | 529 |

### T7. NPV by path and scenario

| Scenario | Full acquisition | 24.9% minority | JV | Walk away |
|---|---|---|---|---|
| bear | -8374 | -113 | -2613 | 0 |
| base | -7638 | 211 | -2544 | 0 |
| bull | -6892 | 204 | -2483 | 0 |
| probability-weighted | -7636 | 128 | -2546 | 0 |

### T8-bear. EPS path (₹), bear

| Path | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 |
|---|---|---|---|---|---|---|---|---|---|---|
| Full (M1) | 4.687 | 5.91 | 6.425 | 6.551 | 6.677 | 6.787 | 6.849 | 6.921 | 7.0 | 7.027 |
| Minority | 8.752 | 8.816 | 8.91 | 9.007 | 9.104 | 9.194 | 9.259 | 9.327 | 9.398 | 9.449 |
| JV | 8.798 | 8.798 | 9.055 | 9.078 | 9.102 | 9.125 | 9.137 | 9.149 | 9.16 | 9.172 |
| Walk away | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 |

Full: PAT breakeven never (10 yrs), FCF breakeven never (10 yrs), cumulative operating FCF FY27 to FY36 -7294, Paytm cash FY27 to FY31 [6427, 6134, 5873, 5621, 5376].  
Minority: PAT breakeven 2029, look-through FCF breakeven never (10 yrs), Tranche 2 paid 0 (FY29 revenue 361).

| Line | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 |
|---|---|---|---|---|---|---|---|---|---|---|
| Full ΔPAT | -261.3 | -181.8 | -148.3 | -140.1 | -131.9 | -124.7 | -120.7 | -116.1 | -110.9 | -109.1 |
| Full operating FCF after drag | -844.5 | -765.3 | -732.2 | -724.5 | -716.7 | -709.9 | -706.3 | -702.0 | -697.2 | -695.8 |
| Minority ΔPAT | -5.9 | -1.8 | 4.2 | 10.4 | 16.6 | 22.4 | 26.5 | 30.9 | 35.4 | 38.7 |
| Minority look-through FCF | 8.4 | 12.3 | 18.2 | 24.2 | 30.3 | 35.9 | 39.9 | 44.1 | 48.5 | 51.7 |

### T8-base. EPS path (₹), base

| Path | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 |
|---|---|---|---|---|---|---|---|---|---|---|
| Full (M1) | 4.702 | 6.204 | 6.957 | 7.428 | 7.948 | 8.494 | 8.958 | 9.443 | 9.833 | 10.213 |
| Minority | 8.79 | 8.933 | 9.145 | 9.397 | 9.675 | 9.956 | 10.198 | 10.44 | 10.638 | 10.832 |
| JV | 8.798 | 8.821 | 9.102 | 9.16 | 9.23 | 9.289 | 9.336 | 9.371 | 9.394 | 9.418 |
| Walk away | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 |

Full: PAT breakeven 2033, FCF breakeven never (10 yrs), cumulative operating FCF FY27 to FY36 -6328, Paytm cash FY27 to FY31 [6428, 6152, 5925, 5727, 5563].  
Minority: PAT breakeven 2028, look-through FCF breakeven 2034, Tranche 2 paid 0 (FY29 revenue 477).

| Line | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 |
|---|---|---|---|---|---|---|---|---|---|---|
| Full ΔPAT | -260.3 | -162.6 | -113.7 | -83.1 | -49.2 | -13.7 | 16.5 | 48.0 | 73.3 | 98.1 |
| Full operating FCF after drag | -844.0 | -747.2 | -699.1 | -669.4 | -636.6 | -602.3 | -573.3 | -542.9 | -518.7 | -495.0 |
| Minority ΔPAT | -3.5 | 5.7 | 19.2 | 35.3 | 53.2 | 71.1 | 86.6 | 102.1 | 114.8 | 127.2 |
| Minority look-through FCF | 10.6 | 19.4 | 32.7 | 48.4 | 65.9 | 83.4 | 98.4 | 113.5 | 125.7 | 137.8 |

### T8-bull. EPS path (₹), bull

| Path | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 |
|---|---|---|---|---|---|---|---|---|---|---|
| Full (M1) | 4.664 | 6.435 | 7.503 | 8.342 | 9.266 | 10.182 | 11.057 | 11.962 | 12.752 | 13.516 |
| Minority | 8.809 | 9.046 | 9.385 | 9.444 | 9.892 | 10.338 | 10.753 | 11.172 | 11.538 | 11.888 |
| JV | 8.798 | 8.845 | 9.149 | 9.242 | 9.336 | 9.429 | 9.499 | 9.558 | 9.605 | 9.64 |
| Walk away | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 | 8.845 |

Full: PAT breakeven 2031, FCF breakeven never (10 yrs), cumulative operating FCF FY27 to FY36 -5358, Paytm cash FY27 to FY31 [6425, 6163, 5969, 5829, 5746].  
Minority: PAT breakeven 2028, look-through FCF breakeven 2035, Tranche 2 paid 509 (FY29 revenue 627).

| Line | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 |
|---|---|---|---|---|---|---|---|---|---|---|
| Full ΔPAT | -262.8 | -147.6 | -78.2 | -23.6 | 36.5 | 96.0 | 152.9 | 211.8 | 263.1 | 312.8 |
| Full operating FCF after drag | -847.1 | -733.4 | -665.4 | -612.6 | -554.3 | -496.5 | -441.6 | -384.5 | -335.1 | -287.2 |
| Minority ΔPAT | -2.3 | 12.9 | 34.6 | 38.3 | 67.1 | 95.6 | 122.1 | 148.9 | 172.4 | 194.8 |
| Minority look-through FCF | 11.6 | 26.2 | 47.3 | 73.3 | 101.4 | 129.2 | 155.0 | 181.1 | 203.9 | 225.6 |

### T9. Full acquisition NPV grid, base (rows: annual drag; columns: churn)

| Drag | 0.0% | 15.0% | 30.0% | 37.5% | 45.0% | 60.0% |
|---|---|---|---|---|---|---|
| 0 | -2203 | -2440 | -2679 | -2799 | -2921 | -3164 |
| 250 | -3816 | -4053 | -4292 | -4412 | -4534 | -4777 |
| 500 | -5429 | -5666 | -5905 | -6025 | -6147 | -6390 |
| 750 | -7042 | -7279 | -7518 | -7638 | -7760 | -8002 |

### T10. Maximum justified control price

| Scenario | 0|0 | 0|750 | 0.3|0 | 0.3|750 | 0.375|0 | 0.375|750 | 0.45|0 | 0.45|750 |
|---|---|---|---|---|---|---|---|---|
| bear | 697 | -4142 | 512 | -4327 | 465 | -4374 | 417 | -4421 |
| base | 1797 | -3042 | 1321 | -3518 | 1201 | -3638 | 1079 | -3760 |
| bull | 2927 | -1912 | 2143 | -2695 | 1946 | -2892 | 1749 | -3090 |

Key format: churn|annual drag.

### T11. Breakeven churn (NPV = 0)

| Case | Breakeven churn |
|---|---|
| base|4000 | 0.0 |
| base|3000 | 0.0 |
| base|2000 | 0.0 |
| base|1500 | 0.1874 |
| bull|4000 | 0.0 |
| bull|3000 | 0.0 |
| bull|2000 | 0.3544 |
| bull|1500 | 0.5435 |
| minority bear | 0.0 |
| minority base | 0.5758 |
| minority bull | 0.8623 |

### T12. Minority stress tests (base)

| Test | NPV |
|---|---|
| drag187 | -996 |
| churn15 | 171 |
| churn0 | 225 |
| drag187_pw | -1078 |

### T13. Funding mixes for the full acquisition (base churn 37.5%, drag 750)

| Mix | FY27 EPS | FY29 EPS | vs ₹7.50 % | vs MDR-adj % | New shares (Cr) | Dilution % | Gross debt/EBITDA | ICR | Cash post | Cash FY31 | NPV |
|---|---|---|---|---|---|---|---|---|---|---|---|
| M1 cash 2100 + equity 1900 (case) | 4.702 | 6.957 | -37.3 | -46.8 | 1.024 | 1.6 | 0.55 | 20.9 | 6800 | 5563 | -7638 |
| M2 debt 2100 + equity 1900 | 4.037 | 6.293 | -46.2 | -54.4 | 1.024 | 1.6 | 3.83 | 3.0 | 8900 | 7446 | -7638 |
| M3 cash 1050 + debt 1050 + equity 1900 | 4.37 | 6.625 | -41.7 | -50.6 | 1.024 | 1.6 | 2.19 | 5.2 | 7850 | 6504 | -7638 |
| M4 all equity 4000 | 6.047 | 8.263 | -19.4 | -31.6 | 2.156 | 3.37 | 0.55 | 20.9 | 8900 | 8134 | -7638 |
| M5 all cash 4000 | 3.444 | 5.736 | -54.1 | -61.1 | 0.0 | 0.0 | 0.55 | 20.9 | 4900 | 3236 | -7638 |

### T14. Drag PV treatments

| Treatment | Value |
|---|---|
| perpetual | 4839 |
| ten_yr_trapped | 3693 |
| ten_yr_released | 1918 |
| full_npv_mildest | -4717 |

### T15. Buyback and multiple compression

| Item | Value |
|---|---|
| shares | 1.132 |
| eps | 6.135 |
| chg | -18.2 |

| Share price move | Price | Shares for ₹1,900 Cr | Dilution % | Full-deal loss as % of mcap |
|---|---|---|---|---|
| 0 | 1855 | 1.024 | 1.6 | 6.4 |
| -0.2 | 1484 | 1.28 | 2.0 | 8.0 |
| -0.3 | 1299 | 1.463 | 2.29 | 9.2 |
| -0.4 | 1113 | 1.707 | 2.67 | 10.7 |

### T16. Decision matrix

| Criterion | Weight | Full | Minority | JV | Walk |
|---|---|---|---|---|---|
| Shareholder value (NPV) | 0.25 | 1 | 4 | 2 | 4 |
| EPS and FCF impact | 0.15 | 1 | 4 | 3 | 5 |
| Balance sheet and rating | 0.1 | 2 | 5 | 4 | 5 |
| Client churn risk | 0.15 | 1 | 4 | 4 | 5 |
| Regulatory and capital drag exposure | 0.1 | 1 | 4 | 2 | 5 |
| Strategic access to custody and tokenization | 0.15 | 5 | 4 | 3 | 1 |
| Block on the consortium | 0.1 | 5 | 4 | 1 | 1 |
| Weighted score | 1.0 | 2.1 | 4.1 | 2.7 | 3.75 |

### T17. EPS bridge FY27, recommended minority (₹ per share)

| Step | ₹ |
|---|---|
| start | 7.5 |
| mdr | 1.345 |
| forgone | -0.281 |
| licence | -0.292 |
| build | 0.468 |
| synergy | 0.0 |
| equity_income | 0.051 |
| end | 8.79 |

### T18. PAT bridge FY27, full acquisition M1 (₹ Cr)

| Step | Value |
|---|---|
| start_pat | 480 |
| mdr | 86.1 |
| forgone | -94.3 |
| carry | -5.6 |
| gov | -11.2 |
| ppa | -74.8 |
| txn | -44.9 |
| liminal | -59.4 |
| build | 29.9 |
| synergy | 0.0 |
| end_pat | 305.7 |
| shares | 65.024 |
| eps | 4.702 |

### T19. Football field (Liminal, 100% equity)

| Item | Value |
|---|---|
| dcf | [1103, 1819] |
| dcf_point | 1391 |
| trading | [1311, 1837] |
| precedent | [1716, 2816] |
| weights | [0.5, 0.3, 0.2] |
| weighted_fv | 1656 |
| weighted_fv_x | 7.5 |
| stake_price_rule | 400 |
| stake_price_used | 400 |
| post_money | 1606 |
| post_money_x | 7.3 |
| headline_max | 4016 |
| deal_price | 4000 |
| notes | ['25th to 75th pct EV/LTM revenue, custody and high-growth fintech subset (Pine Labs, BitGo on gross profit, Adyen, Coinbase, PB Fintech), 23 Sep 2026', 'IQR of precedent EV/revenue with revenue basis (Bitstamp 2.1x, Deribit 9.7x, Hidden Road 12.5x, BVNK 12.5 to 15x)'] |

### T20. Moneyshot and impairment

| Item | Value |
|---|---|
| npv | -7638 |
| per_share | 117.5 |
| pct_mcap | 6.4 |
| impairment carrying | 4000 |
| impairment recoverable | 1201 |
| impairment gap | 2799 |

### T21. Breakeven summary

```
{
 "full_M1": {
  "pat": {
   "bear": null,
   "base": 2033,
   "bull": 2031
  },
  "fcf": {
   "bear": null,
   "base": null,
   "bull": null
  }
 },
 "minority": {
  "pat": {
   "bear": 2029,
   "base": 2028,
   "bull": 2028
  },
  "fcf": {
   "bear": null,
   "base": 2034,
   "bull": 2035
  }
 },
 "jv": {
  "pat": {
   "bear": 2029,
   "base": 2029,
   "bull": 2028
  },
  "fcf": "n/a (drag exceeds JV cash flow)"
 },
 "full_nodrag": {
  "pat": 2032,
  "fcf": null
 }
}
```


## Appendix C: Glossary

| Term | Meaning |
|---|---|
| AA- | Credit rating grade (case: CRISIL AA- Stable) |
| ARR | Annual recurring revenue |
| CCI | Competition Commission of India |
| CCPS | Compulsorily convertible preference shares |
| CERT-In | Indian Computer Emergency Response Team |
| CP | Condition precedent to closing |
| CVR | Contingent value right |
| DPDP | Digital Personal Data Protection Act 2023 |
| DVT | CCI deal value threshold (₹2,000 Cr) |
| e₹ | RBI's central bank digital currency (Digital Rupee) |
| FEMA | Foreign Exchange Management Act |
| FIU-IND | Financial Intelligence Unit, India |
| FMV | Fair market value |
| GRR | Gross revenue retention |
| ICR | Interest cover ratio (EBITDA / interest) |
| IOCC | Indian-owned and controlled company |
| LODR | SEBI Listing Obligations and Disclosure Requirements |
| MDR | Merchant discount rate |
| MPC | Multi-party computation (key management without a single private key) |
| NDI | FEMA Non-Debt Instruments Rules 2019 |
| ODI | Overseas direct investment |
| PA / PA-CB | Payment aggregator / cross-border payment aggregator |
| PMLA | Prevention of Money Laundering Act |
| PPA | Purchase price allocation |
| PPI | Prepaid payment instrument (wallet) |
| PPSL | Paytm Payment Services Ltd, Paytm's PA entity |
| ROFR | Right of first refusal |
| RWA | Real-world assets (tokenized) |
| VDA | Virtual digital asset |
| WACC | Weighted average cost of capital |
