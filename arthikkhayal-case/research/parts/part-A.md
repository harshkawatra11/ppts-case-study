## 0. Document control: every number in this document traces to the case, an assumption, the model or a verified source

**Answer.** This document is the research base behind Team IdeaForge's recommendation for Trade Private Limited: show salary-account customers the ONL Trade account they already hold, inside the parent bank's own app, at four moments the bank already owns, for a modelled gain of 2.28 percentage points by 31 January 2027 on model hash fc66d11096 [M]. Every figure below carries a tag that states where it came from, so a judge who challenges a number during cross-questioning can trace it back in one place. Nine research lanes verified 518 raw rows against 354 unique sources before a single section was drafted, and this document never states a figure that lane work has not checked.

### 0.1 Purpose and readers

The readers are the judging panel at ecotech, USME, Delhi Technological University, and the sponsor, YES Securities, whose problem statement frames the case [C-T1]. The task asked for a strategy that turns newly opened and dormant accounts into highly engaged, revenue active, daily users, in a way that works when markets are volatile and stays within the rules of a regulated industry [C-Q1]. The accompanying deck carries eight slides built to that structure; this document carries the full working behind every number on those slides, so a reader who presses on a slide's figure during questioning finds the derivation here rather than a restated headline. Where a section below feeds a slide panel directly, the section closes with a line naming that panel, so the deck and the document never disagree on a figure.

### 0.2 Tag legend

Every number in this document ends with a bracketed tag that says what kind of figure it is and where to check it.

| Tag | Meaning | Resolves to | Example |
|---|---|---|---|
| `[C-E2a]` | A line from the case brief, by its reference ID | `case/01-case.md` | Salary Account cohort, 6,27,853 accounts, 77.5% of the base [C-E2a] |
| `[A21]` | A team assumption, numbered A01 to A67 | Model table T1, section 30 | Tap-through on the salary-day card, 8% base [A21] |
| `[M]` | A number produced directly by the pinned model run | `model/model_outputs.json` | Extra active accounts in the base case, 19,053 [M] |
| `[T10]` | A table produced by the same model run | `model/model_tables.md`, Appendix B | Lever total by segment [T10] |
| `[S12]` | An external source, numbered in the register | `research/raw/sources.md`, Appendix A | A named regulator circular or filing [S12] |
| `[F07]` | A raw row recorded by a research lane before it was resolved to a numbered source | `research/raw/R-F.md`, via `rid_to_sid.json` | A channel cost benchmark a verifier recorded directly [F07] |

Money carries the rupee symbol with Indian digit grouping and lakh or crore notation, never a converted foreign figure. Ranges use the word "to". Statistics stay at the precision their source supports, so a case percentage stated to the nearest point stays a point, and a model output carrying two decimal places keeps those two decimals because the arithmetic behind it is exact.

### 0.3 Source hierarchy

Where two figures could answer the same question, this document follows a fixed order rather than averaging them or picking whichever number helps the argument.

| Tier | Source type | How it is used here |
|---|---|---|
| 1 | The case brief (`case/01-case.md`) | Never overwritten. Every case line is a fixed premise; an outside figure that conflicts with it is reported as context only |
| 2 | The activation model's own output and tables | Treated as exact arithmetic on the case and the assumptions register, not as a separate opinion |
| 3 | Regulator and exchange text (SEBI, NSE, BSE, RBI, TRAI, CCPA, the gazette) | Preferred for every rule, date and circular cited in sections 7 and 20 |
| 4 | Peer-reviewed papers, national surveys and official statistics (NSE Market Pulse, CDSL and NSDL, AMFI, the World Gold Council, SEBI's own investor survey) | Preferred for market sizing and behavioural evidence |
| 5 | Company filings and investor presentations of real, named bank-led brokers and banks | Preferred for the comparator section, always attributed to the named company and never to Trade Private Limited |
| 6 | Press reporting on a named, dated event | Used where a regulator has not published primary text yet, flagged by lane and never the sole support for a locked number |
| 7 | Vendor or blog pages, flagged `[blog]` or `[vendor]` | Used last, for a channel cost benchmark only, never for a regulatory or market-size claim |

A lower tier that disagrees with a higher tier loses, and the disagreement is recorded in Appendix D rather than quietly dropped. Two examples recur through this document: Lane D found the 14 August 2024 NSE inducement circular (NSE/INSP/63425) now sits in abeyance since NSE Circular 06/2025 of 24 January 2025, so section 7 cites the NSE advertisement code and the general anti-inducement principle instead of that specific circular as settled law; and Lane C logged a trader-count disagreement between a Rajya Sabha reply (7.86 million individual futures and options traders in FY26) and a secondary source (87.5 lakh), which does not affect the loss percentages locked in the model, since both sources corroborate the loss figures independently.

### 0.4 Model file, hash and rerun

| Item | Value |
|---|---|
| Model file | `model/activation_model.py`, writing `model_outputs.json` and `model_tables.md` |
| Hash for every number in this document | `fc66d11096` |
| Checks passed | 12 of 12 |
| Headline findings printed by the run | 2.28 pp base case, 1.02 pp bear, 3.94 pp bull, 19,053 extra actives, 17.0% rate, ₹16.5 lakh cash, ₹87 cash cost an extra active, 1,649 paid-media equivalent |
| Rerun command | `python arthikkhayal-case/model/activation_model.py`, run from the repository root |

The model is deterministic. It takes the case's Exhibit 1 and Exhibit 2a and 2b figures [C-E1, C-E2a, C-E2b] and the 67-row assumptions register [T1] as inputs and writes the same hash and the same 12 passing checks on every unchanged run. If a lane's verified fact moves a locked assumption outside its bear-to-bull band, the value is edited in the model file, the model is rerun, and the new hash and every changed locked number are logged in `DECISIONS.md` before any section below is touched.

### 0.5 The skill's calibration note

Building this document's argument used the case-competition-deck skill's structural playbook: a contrarian recommendation argued against the obvious reading of the prompt, one moneyshot number, foreshadowing across sections, symmetric treatment of the seven levers, three scenarios on every uncertain figure, and a double synthesis that closes the diagnosis and then the whole document. This case reads as a marketing and strategy hybrid with an operations funnel underneath it: a go-to-market question (how to reach an existing customer inside channels the firm already owns) sitting on top of a conversion-funnel problem (where accounts stall between opening and trading). The skill's own corpus is three merger and acquisition decks from the Global Case Competition at Harvard; its structural and rhetorical patterns, contrarian recommendation, action titles, foreshadowing, symmetric treatment, three scenarios, one moneyshot, double synthesis, defensive depth, transfer with confidence, because they describe how an argument is sequenced rather than what a particular industry looks like. Its case-specific frameworks are applied here by reasoned extrapolation from the marketing and strategy case-type guides rather than from direct corpus evidence, and that limit is stated here once rather than claimed away.

### 0.6 The four kinds of number

Four different kinds of figure appear in this document, and treating them as interchangeable is the fastest way for an argument to fail under questioning.

| Kind | What it is | Can it move | Example |
|---|---|---|---|
| Case fact `[C-xx]` | Stated directly in the case brief | No, it is a fixed premise of the exercise | Eligible accounts, 8,09,746 at September 2026 [C-E1] |
| Model assumption `[A##]` | A value the team set where the case leaves a parameter unstated, checked against a benchmark | Yes, through the update protocol, and only outside its bear-to-bull band | Tap-through on the salary-day card, 8% base, 6% bear, 10% bull [A21] |
| Model output `[M]` or `[T#]` | Arithmetic performed on case facts and assumptions by the pinned model run | Only by changing an input and rerunning; the arithmetic itself is mechanical | 19,053 extra active accounts in the base case [T11] |
| External evidence `[S##]` or `[F07]` | A fact about a real market, regulator or comparator company, checked by a research lane | Yes, and several sources disagree with each other, flagged in Appendix D | India's active-client ratio of about 19.2% in September 2026, from NSE Market Pulse [Lane C] |

Every sentence in this document that reports a model result says "in our model", because a lever's response rate is a checked assumption, never a measurement. No interview, survey, test result or letter of intent exists behind any lever in sections 12 to 17; where the model needs a number the case does not supply, the number is a named assumption with a bear and a bull value, not an invented fact.

### 0.7 Verification tally by lane

Nine research lanes, lettered B to J so that an assumption tag always starts with A, verified every seed fact before a writer used it.

| Lane | Subject | Rows verified | Share of the 518-row total |
|---|---|---|---|
| B | Sponsor and bank-led broker context | 68 | 13.1% |
| C | Indian broking market and activity | 70 | 13.5% |
| D | Regulation | 70 | 13.5% |
| E | Behavioural science and activation evidence | 70 | 13.5% |
| F | Channels and unit costs | 60 | 11.6% |
| G | Calendar and culture | 53 | 10.2% |
| H | Comparable activation plays and cautionary tales | 56 | 10.8% |
| I | Third-party quotes | 10 | 1.9% |
| J | Data, consent and privacy | 61 | 11.8% |
| Total | | 518 | 100% |

The 518 rows resolve to 354 unique sources in the register, so on average a source supports close to one and a half facts, which is the expected pattern when regulator circulars and official statistics each anchor several related rows. Across the nine lanes, 445 rows carry a VERIFIED status, 63 are UNVERIFIABLE (the underlying page could not be confirmed to carry the cited sentence, logged rather than dropped), 4 are CORRECTED (a figure the lane found differs from an earlier planning-time estimate, with the corrected figure and date recorded), and 6 are NOT YET PUBLISHED (the regulator or exchange has not released the text as of the access date). No row in any lane carries an invented figure or an unattributed estimate; a gap is recorded as a gap in that lane's own `## Gaps` section rather than filled with a guess.

### 0.8 What this document does not contain

This document contains no customer interview, no survey result, no usability test, no letter of intent, no response rate measured from a real send, and no internal data from Trade Private Limited or ONL Trade beyond what the case brief states. Section 29 presents a customer validation plan that states plainly that nothing in it has been run yet. Every lever's reach and response figure is a modelled assumption checked against a named benchmark, not a measurement of ONL's own customers. The document also contains no AI-use statement and no account of how it was assembled; a reader who wants that record finds it in `build-log.md`, not here.

| Excluded from this document | What stands in its place |
|---|---|
| Customer interviews, focus groups, usability tests | Section 29's validation plan, stated as not yet run |
| Survey results specific to ONL Trade or Trade Private Limited | SEBI's 2025 Investor Survey and NCFE literacy data, cited as outside evidence, never as ONL's own result |
| A measured response rate for any past ONL message | A named assumption with a bear and a bull value for every lever, checked against a channel benchmark |
| Letters of intent, pilot results, A/B test outputs | None exist; none are claimed |
| An AI-use statement or a note on how this document was produced | Not included, per the plan's own rule; the production record sits in `build-log.md` |
| Any YES Securities or YES Bank fact presented as ONL's own data | Sponsor facts stay inside section 5's labelled box |

### 0.9 Naming and sponsor separation

Every analytical sentence in this document uses the case's own names: Trade Private Limited, the bank-led broking company; ONL Trade, its digital platform; and "the parent bank" for the unnamed bank behind it [C-CO1, C-CO2]. YES Securities, YES Bank, Anthill Ventures and Kae Capital are the competition's sponsor marks [C-T3], and facts about them sit only in section 5's clearly headed "Sponsor context, not case data" box and in the deck's logo slots, with no partnership or endorsement implied. No fact about YES Securities or YES Bank is ever attributed to Trade Private Limited or ONL Trade. Lane I's quotes from YES Securities' own leadership (its managing director and chief executive) are sponsor context for the same reason and never appear as evidence for the case company.

### 0.10 Inactive and dormant, translated every time

The case defines two conditions that read as similar words with different meanings. Inactive accounts, in the case's own terms, are deactivated for fraud or on a regulator's notice [C-D3]. Dormant accounts are those that have not traded even once in 24 months [C-D4]. The exchange's own circular on this subject, NSE/INSP/64718 of 25 October 2024, calls the 24-month condition "inactive" in its own text. Wherever a verified source uses the exchange's "inactive" for the 24-month condition, this document translates it to the case's "dormant [C-D4]" rather than carrying the exchange's word into a sentence where it would mean something else.

*Expansion: pp, percentage points. bps, basis points. T12, T9, T6, T3, T1, trailing 12, 9, 6, 3 and 1 months. LTD, life to date. MTD, month to date. YTD, year to date.*

## 1. Coverage matrix: every line of the case maps to a section of this document and a slide

**Answer.** Every one of the 45 reference lines transcribed from the case brief maps below to the section of this document that answers it and the slide that carries it, so no line is answered by implication only. Thirty-nine of the 45 lines feed an analytical section directly; the remaining six (the cover's own identity, the appendix's rounding note, and the two Exhibit headers) are front matter or sourcing notes rather than claims that need a counter-argument, and each is still placed below.

### 1.1 Cover, context and definitions

| ID | What it says (case wording, condensed) | How we answer | Section | Slide |
|---|---|---|---|---|
| C-T1 | ecotech, USME DTU, problem statement with YES Securities [C-T1] | Front matter only; the sponsor relationship sets section 0.9's naming rule | 0 | Cover |
| C-T2 | Title: driving user activation on volatile markets [C-T2] | The title is the task restated; answered in full by section 2's recommendation | 2 | Cover |
| C-T3 | Sponsor marks across pages 2 to 7 [C-T3] | Logo slots only, with the sponsor box in section 5 | 0, 5 | Cover |
| C-X1 | Opening an account is easy; using it is hard [C-X1] | The diagnosis in section 10's five whys traces exactly this gap | 9, 10 | Diagnosis |
| C-X2 | Millions of accounts sit dormant; volatility sharpens the problem [C-X2] | Section 4's market read and section 22's scenarios both carry this | 4, 22 | Summary, Diagnosis |
| C-X3 | Indian investors are risk averse; a weak market hardens that [C-X3] | Section 8's inattention and loss-aversion evidence | 8 | Diagnosis |
| C-Q1 | The task: turn accounts into highly engaged, revenue active, daily users, within the rules, in a volatile market [C-Q1] | Section 2's three-sentence recommendation | 2 | Summary |
| C-D1 | Active: at least one trade in 12 months [C-D1] | Used throughout; defined once in Appendix C and section 27's metric table | 27 | Appendix |
| C-D2 | Highly active: at least one trade in 3 months [C-D2] | Same, carried into every scenario table (T11) | 22, 27 | Impact, Appendix |
| C-D3 | Inactive: deactivated for fraud or regulator notice [C-D3] | Section 0.10's translation note and section 20's data flow | 0, 20 | Appendix |
| C-D4 | Dormant: no trade in 24 months [C-D4] | Section 0.10 and the reactivation flow in section 13 | 0, 13 | Diagnosis, Execution |
| C-CO1 | Trade Private Limited, a bank-led broking and investment company [C-CO1] | Section 5's bank-led model | 5 | Summary |
| C-CO2 | ONL Trade, built for first-time, often under-30 investors [C-CO2] | Section 0 and section 5 | 0, 5 | Summary |
| C-CO3 | ONL is at feature parity with discount and fintech rivals [C-CO3] | Section 6's symmetric comparator table | 6 | Strategy |
| C-CO4 | Most ONL account holders are the parent bank's own customers [C-CO4] | Section 5's VRIO read on the parent bank's assets | 5 | Strategy, Diagnosis |

### 1.2 Products, the problem and the funnel

| ID | What it says (case wording, condensed) | How we answer | Section | Slide |
|---|---|---|---|---|
| C-PR1 | Cash equities, ₹0.15 an executed order [C-PR1] | Section 25's revenue-per-active build | 25 | Impact |
| C-PR2 | Derivatives, ₹20.00 an executed order [C-PR2] | Context for section 7's ruled-out F&O push, under C-K7 | 7, 25 | Appendix |
| C-PR3 | Mutual funds, ₹0 brokerage on eligible direct plans [C-PR3] | Section 25's payback math and the salary-day instalment design | 12, 25 | Strategy, Impact |
| C-PR4 | IPO applications, ₹0 brokerage [C-PR4] | Noted as product context only, not a lever driver | 25 | Appendix |
| C-PR5 | Demat servicing and maintenance fees [C-PR5] | Section 25's BSDA and annual-charge build | 25 | Impact |
| C-PR6 | Research calls and education, included at no charge [C-PR6] | Section 10's diagnosis of what ONL already tried | 8, 10 | Diagnosis |
| C-PB1 | Markets unfavourable on average over 12 months [C-PB1] | Section 4's market read | 4 | Summary |
| C-PB2 | About 15% activation against a 20% to 40% industry range [C-PB2] | Section 2's moneyshot and section 4's benchmark | 2, 4 | Summary |
| C-PB3 | WhatsApp, email, RCS and social on market information, research calls and first-trade offers [C-PB3] | Section 10's five whys; first-trade offers are examined again in section 7 | 7, 10 | Diagnosis |
| C-PB4 | Literacy videos, newsletters, active support [C-PB4] | Section 8's inattention diagnosis | 8, 10 | Diagnosis |
| C-PB5 | A year of "stay invested" messaging; active users did not rise [C-PB5] | Section 2's do-not column and section 11's option score (2.60 of 5) | 2, 11 | Summary |
| C-PB6 | Awareness gap: an account opened alongside another product can be forgotten [C-PB6] | Section 13's holdings-check lever | 13 | Strategy |
| C-PB7 | Users are existing banking customers, per Exhibits 2a and 2b [C-PB7] | Section 3's cohort tables, this document's own section 3 | 3 | Diagnosis |
| C-F1 | Account opened through a digital journey; onboarding is not the bottleneck [C-F1] | Section 9's funnel map | 9 | Diagnosis |
| C-F2 | First login: drop-off begins [C-F2] | Section 9; the salary-day and holdings-check levers both target single sign-on at this step | 9, 12, 13 | Strategy |
| C-F3 | Funded: another steep drop [C-F3] | Section 9; the Autopay mandate design targets exactly this step | 9, 12 | Strategy |
| C-F4 | First trade or investment: very few new accounts reach this within the first month [C-F4] | Section 9's funnel and section 17's guided first order, built for this exact stall | 9, 17 | Strategy, Execution |
| C-F5 | Repeat and habit: activated users gradually go dormant [C-F5] | Section 16's warm-cohort defence | 16 | Execution |

### 1.3 Constraints and the appendix exhibits

| ID | What it says (case wording, condensed) | How we answer | Section | Slide |
|---|---|---|---|---|
| C-K1 | Three months to move activation 200 to 300 bps [C-K1] | Section 2 and section 22's target and timeline | 2, 22, 26 | Summary, Impact, Execution |
| C-K2 | No advice, no implied returns, no inducement [C-K2] | Section 7's lever-by-rule matrix | 7, 19 | Strategy |
| C-K3 | Lean budget; prefer owned assets [C-K3] | Section 24's cost build | 24 | Impact |
| C-K4 | No engine rebuild; features realistic for a quarter [C-K4] | Section 18's feature list and build weeks | 18, 26 | Strategy, Execution |
| C-K5 | Personalisation respects consent and data protection [C-K5] | Section 20's DPDP and data-flow table | 20 | Execution |
| C-K6 | No dark patterns, fear nudges or misleading urgency [C-K6] | Section 19's ten-point check | 19 | Strategy |
| C-K7 | Growth must be responsible; derivatives traders mostly lose money [C-K7] | Section 7's ruled-out tactics and section 25's revenue framing | 7, 25 | Risks |
| C-N1 | Figures indicative, rounded, snapshot at 30 September 2026 [C-N1] | Section 0's precision rule and this section's rounding reconciliation | 0, 3 | Appendix |
| C-N2 | Definitions given for MTD, YTD and LTD [C-N2] | Appendix C glossary; LTD underlies every cohort percentage in section 3 | 3 | Appendix |
| C-E1 | Exhibit 1: eligible, active and highly active accounts, 2025 and 2026 [C-E1] | Section 3's Exhibit 1 decoded | 3 | Summary, Diagnosis |
| C-E2a | Exhibit 2A: September 2026 cohorts by recency window [C-E2a] | Section 3's cohort table (T2) | 3 | Diagnosis |
| C-E2b | Exhibit 2B: September 2025 cohorts by recency window [C-E2b] | Section 3's cohort table (T3) | 3 | Diagnosis |

### 1.4 Constraints against the seven levers

The constraints in C-K1 to C-K7 apply to every lever equally; the table below checks each lever against the two constraints most likely to rule a tactic out, regulatory conduct (C-K2) and responsible growth (C-K7), since duration (C-K1), budget (C-K3), product scope (C-K4), data (C-K5) and dark patterns (C-K6) are met by every lever's design, not case by case.

| Lever | C-K2, no advice or return claims | C-K7, no push to trade more than is responsible |
|---|---|---|
| Salary day | Met: a facts-only card naming a rule-built, no-default fund list [3.4] | Met: one instalment choice the customer sets, no trade-count target |
| Holdings check (rediscovery) | Met: a statement of what exists, not what to buy | Met: dormant accounts get verification, not a sales push |
| RM review | Met: a facts-only script, no per-trade incentive for the RM | Met: no product recommendation in the conversation |
| Dhanteras | Met: a factual notice of a SEBI-regulated instrument and a session time, no price talk | Met: one seasonal notice, not a recurring trade prompt |
| Warm-cohort defence | Met: a statement and nominee update, never "trade to stay active" | Met: explicitly designed against the one tactic the 25 October 2024 NSE circular bars |
| New-account guided first order | Met: an order preview and full cost display, no default product | Met: a walkthrough, not a volume target |
| Workplace sessions | Met: SEBI SMARTs-style education, no product pitch | Met: no attendance-to-trade link |

### 1.5 Definitions reconciliation

The case gives four states: active (one trade in 12 months) [C-D1], highly active (one trade in 3 months) [C-D2], inactive (deactivated for fraud or a regulator notice) [C-D3], and dormant (no trade in 24 months) [C-D4]. The exchange's circular of 25 October 2024 calls the 24-month condition "inactive", which collides with the case's own, narrower use of "inactive" for fraud and regulator notices. Section 0.10 sets the rule this document follows throughout: translate the exchange's 24-month "inactive" to the case's "dormant" every time, and reserve "inactive" for the fraud and regulator-notice condition the case actually means by it.

### 1.6 Lines answered only in part, and why

A handful of lines are context rather than drivers of a lever, and this document says so rather than stretching them into a claim they do not support. C-PR2 and C-PR4 (derivatives and IPO brokerage) describe products the strategy does not touch, since futures and options sit behind the F&O push this document rules out under C-K7, and IPOs are episodic rather than a lever we schedule. C-N1's rounding note is honoured mechanically throughout rather than argued; section 3.6 below shows the one place it produces a visible gap between a cohort-weighted figure and Exhibit 1's own total. C-T1 and C-T3 are identity and sourcing facts with no counter-argument to make; they set section 0's naming rule and nothing else.

Exhibit for the deck: a one-row-per-ID coverage table is not itself a slide panel; it supports the deck's claim, repeated in the appendix slide, that every number on the eight slides traces to a tagged line in this document.

## 2. The answer on one page: show salary customers the account they already hold, inside the bank, for +2.28 points by 31 January 2027

**Answer.** We recommend that Trade Private Limited meet idle customers inside the parent bank's own app, at four moments the bank already owns, with a factual card, a holdings tile, a relationship manager conversation and a seasonal notice, rather than messaging the market harder. In our model, this lifts activation from 14.74% to 17.02% by 31 January 2027, 19,053 extra active accounts on a cash spend of ₹16.5 lakh, at ₹87 an extra active [T11, T13]. The same cash spent on paid media buys 1,649 activated accounts, 11.6 times fewer [T14], because the bank's own channels reach people who already bank there at no incremental price.

### 2.1 The recommendation in three sentences

Trade Private Limited should put the ONL Trade account in front of salary customers at four moments the parent bank already controls: the salary credit, a holdings check inside the bank app, a relationship manager's existing review conversation, and the Dhanteras and Diwali week. Each touch states facts only, offers one customer-chosen monthly instalment into a rule-built, no-default list of exchange-traded funds, and never claims a return, offers a reward for trading or creates urgency. In our model this plan adds 19,053 active accounts in the base case over 13 weeks at ₹87 cash an extra active, 2.28 percentage points above the 14.74% starting rate [T11, T13, C-E1].

### 2.2 What not to do, and what to do, with the numbers that decide it

| Reason | Selling the market harder | Meeting the account inside the bank |
|---|---|---|
| Quantitative | Ran for a year; activation moved +0.04 pp, from 14.70% to 14.74% [C-E1]. The same ₹16.5 lakh in paid media buys only 1,649 activations [T14] | +2.28 pp in our base case, 19,053 extra actives at ₹87 cash each [T11, T13] |
| Strategic fit | Messages reach people who do not think of the ONL account as theirs; the awareness gap is a named problem in the case itself [C-PB6] | 77.5% of ONL's base is the Salary Account cohort, which opens the parent bank's app on every salary day [C-E2a, T2] |
| Feasibility and rules | First-trade offers and contests read as trade inducement under NSE's advertisement rules; 88.5% of under-30 futures and options traders lost money in FY26, per SEBI's own study [Lane D, Lane C] | No advice, no return claims, no offers, consent first; ships on the bank's existing order, payment and KYC services within a quarter [C-K2, C-K4] |

This is the one place in this document where a contrast carries no new number on either side beyond what the row already states; both halves are numbered, as the plan requires, and neither half is a rhetorical flourish.

### 2.3 The moneyshot

The case states activation stood at about 15% against an industry range of 20% to 40% [C-PB2], and Exhibit 1 pins the exact figure at 14.74% of 8,09,746 eligible accounts as of September 2026, up from 14.70% a year earlier [C-E1]. In our model, the plan in this document moves that rate to 17.02% by 31 January 2027, a gain of 2.28 percentage points, by adding 19,053 active accounts against a business-as-usual base of 1,23,067 [T8, T11]. The same ₹16.5 lakh of cash spent on paid customer acquisition at a bear-to-bull cost of ₹700 to ₹1,400 an activated account would buy only 1,649 activations in the base case, 2,356 in the bear case for paid media and 1,178 in the bull case for paid media [T14]. The gap, 19,053 against 1,649, is 11.6 times, and it exists because the bank's channels reach people who already bank there at zero incremental acquisition price, while paid media pays full price to reach strangers.

### 2.4 Scenarios, stated honestly

| Measure | Bear | Base | Bull |
|---|---|---|---|
| Extra active accounts | 9,783 | 19,053 | 32,037 |
| Activation rate at 31 Jan 2027 | 15.76% | 17.02% | 18.68% |
| Change from 14.74% | +1.02 pp | +2.28 pp | +3.94 pp |
| Highly active (T3) rate | 11.3% | 12.4% | 14.0% |
| Cash cost per extra active | ₹169 | ₹87 | ₹51 |

*Table reproduces T11. T3, trailing 3 months.*

The honest reading of this table is that the bear case does not clear the floor the case sets. C-K1 asks for 200 to 300 basis points in three months; the 200 basis point floor needs 16,701 extra active accounts against the 31 January 2027 base of 8,35,042 [T8, C-K1]. The bear case delivers 9,783 extra actives and a gain of +1.02 pp, in our model [T11], which covers roughly half of the 16,701 needed and misses the 200 basis point floor by about 98 basis points. We state this plainly rather than let the base case's +2.28 pp stand in for every scenario: if every assumption in the model landed at its bear value at once, this plan alone would not clear the brief's floor, and the week 6 checkpoint in section 23 exists to catch that reading early rather than at the finish line.

### 2.5 The seven levers, summing to the base case total

| Lever | Who it reaches | Base extra actives |
|---|---|---|
| Salary day | Salary Account idle, 5,39,954 accounts [T2] | 5,661 |
| Holdings check (rediscovery) | All idle accounts, reached through owned channels | 3,081 |
| RM review | Prestige, Elite, Elevate and Preferred idle clients | 4,083 |
| Dhanteras | All idle accounts, factual gold ETF and Muhurat notice | 2,311 |
| Workplace sessions | Salary customers at employers banking with the parent bank | 413 |
| Warm-cohort defence | 8,887 to 14,072 accounts whose last trade was 9 to 12 months ago [T7] | 1,607 |
| New-account guided first order | 18,972 accounts opened in the 13-week window [T8] | 1,897 |
| Total | | 19,053 |

The seven figures add to 19,053: 5,661 plus 3,081 is 8,742; plus 4,083 is 12,825; plus 2,311 is 15,136; plus 413 is 15,549; plus 1,607 is 17,156; plus 1,897 is 19,053, in our model [T10].

### 2.6 What the plan costs

| Item | Base case |
|---|---|
| Cash spend over 13 weeks | ₹16,49,357 (₹16.5 lakh) [T13] |
| Cash cost per extra active | ₹87 [T11] |
| Internal product sprint (not cash marketing) | ₹37,80,000 (₹37.8 lakh) [T13] |
| All-in cost per extra active, cash plus internal sprint | ₹285 [M] |

The ₹87 figure is cash only, the marketing and operations spend that leaves the bank's account in the 13 weeks; the ₹285 figure folds in the internal product team's time, 21 full-time-equivalent months at a loaded cost of ₹1,80,000 a month [T1, A59, A60], divided across the same 19,053 extra actives. Both figures are correct for what they measure; a reader comparing this plan's cost to a paid-media benchmark should use the ₹87 cash figure, since the paid-media alternative in section 2.3 also excludes build cost.

### 2.7 Five triggers that would change this recommendation

First, if the week 6 activation checkpoint falls below the bear-case line of 15.2% [T12], the plan would reallocate budget toward the two levers with the largest expected lift relative to their minimum detectable effect, RM review (11 times) and salary day (11 times) [T19], ahead of the smaller-lift Dhanteras and holdings-check levers. Second, if exchange or bank compliance approval for the salary-day card or the Dhanteras notice runs past week 3, the three-month window leaves too little runway for that lever's full ramp, and the plan would lean more heavily on the RM review channel, which does not need the same advertisement-code clearance. Third, if any channel's opt-out rate crosses the 0.5% a send guardrail the plan sets internally [A50], that channel pauses immediately rather than waiting for a weekly review, since a rising opt-out rate is itself evidence the message is not landing as a neutral notice. Fourth, if an informal guidance request to SEBI on whether a rule-built, no-default exchange-traded fund list sits inside the broker's incidental-advice carve-out comes back adverse, a question Lane D flags as genuinely open rather than settled, the salary-day lever's fund list would need to narrow to a single category or be redesigned before launch, which would cut its expected 5,661 extra actives materially. Fifth, if the holdout sample in any lever shows a lift below its minimum detectable effect for two consecutive weeks (0.17 pp for salary day, 0.14 pp for holdings check, 0.49 pp for RM review, 0.16 pp for Dhanteras) [T19], that lever is treated as not working as modelled and is redesigned rather than left running on the strength of its base-case assumption alone.

| Trigger | Threshold | What changes |
|---|---|---|
| Week 6 activation checkpoint | Below the bear-case line, 15.2% [T12] | Reallocate toward RM review and salary day, the two highest lift-to-minimum-detectable-effect levers [T19] |
| Compliance or exchange approval delay | Past week 3 of the 13-week window | Lean on RM review, which needs no advertisement-code clearance |
| Channel opt-out rate | Above 0.5% a send [A50] | Pause that channel immediately, before the next scheduled weekly review |
| SEBI informal guidance on the neutral fund list | An adverse reading of the incidental-advice carve-out, flagged open by Lane D | Narrow the salary-day fund list to one category or redesign before launch |
| Holdout lift | Below the minimum detectable effect for two consecutive weeks, by lever [T19] | Treat that lever as not working as modelled and redesign it |

### 2.8 The 150-word version

Trade Private Limited's activation rate has sat near 15% for a year of market-first messaging, against an industry range of 20% to 40%. A year of selling the market harder moved the rate 0.04 points. We recommend meeting idle customers inside the parent bank's own channels instead: a salary-day card, a holdings tile, a relationship manager conversation and a Dhanteras notice, each stating facts only and offering one customer-chosen instalment, never a return claim or an offer. In our model this adds 19,053 active accounts in 13 weeks, a gain of 2.28 percentage points, at ₹87 cash an extra active, against ₹1,000 an account for the same result bought through paid media. The bear case, at +1.02 points, does not clear the brief's 200 basis point floor on its own, which is why a week 6 checkpoint and five named triggers sit ahead of the finish line, not after it.

Exhibit for the deck: the moneyshot card on slide 5 (14.74% to 17.02%, 19,053 against 1,649, 11.6 times), the seven-lever bar on slides 2 and 5, and the do-not-and-do matrix on slide 2 all draw directly from sections 2.2 through 2.6 above.

## 3. The case data decoded: activation stood still at 14.7% while salary accounts grew to 77.5% of the base and premium cohorts lost 3 to 4 points

**Answer.** Exhibit 1 shows activation moved from 14.70% to 14.74% in a year, 1,07,889 of 7,33,855 accounts to 1,19,339 of 8,09,746 [C-E1]. Underneath that nearly flat total, the base shifted hard toward the Salary Account cohort, which grew 24.1% to 6,27,853 accounts and 77.5% of the base [T4, T2], while every premium cohort except Elevate's account count lost 3 to 4 points of its own 12-month activation rate [T4]. The two effects roughly cancel: a small positive mix shift toward a lower-activation cohort, a larger positive rate shift inside most cohorts, and the net 0.21 percentage point cohort-weighted change rounds down against Exhibit 1's own smaller 0.04 point total because the two exhibits measure the year differently [T5].

### 3.1 Exhibit 1 decoded

Exhibit 1 is the case's single account-portfolio table, carrying three counts for each of September 2025 and September 2026: eligible accounts, accounts active in the trailing 12 months, and accounts highly active in the trailing 3 months [C-E1].

| Measure | Sep 2025 | Sep 2026 | Change |
|---|---|---|---|
| Eligible accounts | 7,33,855 | 8,09,746 | +75,891, +10.3% |
| Active (trailing 12 months) | 1,07,889 (14.70%) | 1,19,339 (14.74%) | +11,450 accounts, +0.04 pp |
| Highly active (trailing 3 months) | 66,943 (9.12%) | 82,086 (10.14%) | +15,143 accounts, +1.01 pp |

The eligible base grew by 75,891 accounts in a year, which the model treats as net growth of 6,324 accounts a month [T8, A03], and this growth itself is one reason the active rate barely moved even as the active count rose: a newly opened account spends weeks in the funnel before it can trade at all, so growth dilutes the rate in the same period that it adds to the numerator. The highly active rate improved more than the 12-month rate did, 1.01 percentage points against 0.04, which says that among the accounts that do trade, trading has become somewhat more recent and frequent, even while the share of accounts that trade at all has barely moved.

### 3.2 Exhibit 2a decoded: cohorts at September 2026

Exhibit 2a breaks the September 2026 base into six cohorts and reports five recency windows for each: trailing 12, 9, 6, 3 and 1 months [C-E2a]. The model derives an active-account count and an idle-account count for each cohort by applying the trailing-12-month rate to the cohort's size [T2].

| Segment | Accounts | Share of base | T12 | T9 | T6 | T3 | T1 | Active (T12) | Idle |
|---|---|---|---|---|---|---|---|---|---|
| Prestige | 3,096 | 0.4% | 35% | 31% | 28% | 22% | 16% | 1,084 | 2,012 |
| Elite | 35,697 | 4.4% | 32% | 29% | 26% | 22% | 15% | 11,423 | 24,274 |
| Elevate | 9,471 | 1.2% | 37% | 34% | 31% | 27% | 13% | 3,504 | 5,967 |
| Preferred | 60,312 | 7.4% | 20% | 18% | 16% | 14% | 9% | 12,062 | 48,250 |
| Salary Account | 6,27,853 | 77.5% | 14% | 13% | 11% | 9% | 6% | 87,899 | 5,39,954 |
| Credit Card | 73,317 | 9.1% | 6% | 6% | 5% | 5% | 4% | 4,399 | 68,918 |
| Total | 8,09,746 | 100% | 15% | 13% | 12% | 10% | 6% | 1,20,372 | 6,89,375 |

*T12, T9, T6, T3, T1: trailing 12, 9, 6, 3 and 1 months.*

The Salary Account cohort carries 77.5% of all accounts and 78% of the 6,89,375 idle accounts, since 5,39,954 of 6,89,375 idle accounts sit in that one cohort [T2]. This single fact does most of the work in section 2's recommendation: an idle pool that is four-fifths salary customers calls for a lever built around the one moment every salary customer has in common, the salary credit, rather than a message aimed at an investor identity most of this cohort does not hold.

### 3.3 Exhibit 2b decoded: cohorts at September 2025, side by side with 2a

Exhibit 2b carries the same five-window structure for September 2025 [C-E2b], and placing it beside Exhibit 2a shows which cohorts moved and by how much.

| Segment | Accounts 2025 | T12 2025 | Active (T12) 2025 | Accounts 2026 | T12 2026 | Active (T12) 2026 |
|---|---|---|---|---|---|---|
| Prestige | 2,999 | 38% | 1,140 | 3,096 | 35% | 1,084 |
| Elite | 34,865 | 36% | 12,551 | 35,697 | 32% | 11,423 |
| Elevate | 6,959 | 41% | 2,853 | 9,471 | 37% | 3,504 |
| Preferred | 72,826 | 21% | 15,293 | 60,312 | 20% | 12,062 |
| Salary Account | 5,05,823 | 13% | 65,757 | 6,27,853 | 14% | 87,899 |
| Credit Card | 1,10,383 | 9% | 9,934 | 73,317 | 6% | 4,399 |
| Total | 7,33,855 | 15% | 1,07,529 | 8,09,746 | 15% | 1,20,372 |

Four of six segments lost accounts or rate or both in a year that the case states was broadly unfavourable for markets [C-PB1]. Preferred lost 17.2% of its accounts and one point of rate [T4]. Credit Card lost 33.6% of its accounts and three points of rate [T4]. Only Salary Account and Elevate grew in account count, and only Salary Account grew while also holding its rate roughly flat.

### 3.4 Share shift and growth by segment

| Segment | Accounts 2025 | Accounts 2026 | Growth | T12 change | T3 change | T1 change |
|---|---|---|---|---|---|---|
| Prestige | 2,999 | 3,096 | 3.2% | −3 pp | −2 pp | −1 pp |
| Elite | 34,865 | 35,697 | 2.4% | −4 pp | −2 pp | −2 pp |
| Elevate | 6,959 | 9,471 | 36.1% | −4 pp | −4 pp | −11 pp |
| Preferred | 72,826 | 60,312 | −17.2% | −1 pp | +2 pp | +0 pp |
| Salary Account | 5,05,823 | 6,27,853 | 24.1% | +1 pp | +1 pp | −1 pp |
| Credit Card | 1,10,383 | 73,317 | −33.6% | −3 pp | +1 pp | +0 pp |

Salary Account's share of the base rose from 68.9% to 77.5% in a year [T3, T2], a gain of 8.6 percentage points of share driven by 24.1% account growth in that cohort alone [T4]. Elevate grew its account count fastest, 36.1%, but lost 11 points of its trailing 1-month rate in the same period, which is the sharpest within-cohort decline on the table and sits inside a cohort still small enough, 9,471 accounts, that it does not move the total rate much on its own.

### 3.5 Mix and rate decomposition of the activation change

A total activation rate can move for two separate reasons: the mix of cohorts in the base can shift toward cohorts that trade at different rates, or each cohort's own rate can shift. The cohort-weighted decomposition separates them.

| Component | Effect |
|---|---|
| Mix effect: base shifted toward Salary Account, away from Credit Card and Preferred | +0.02 pp |
| Rate effect: segment activation rates moved | +0.19 pp |
| Interaction and rounding | −0.00 pp |
| Total cohort-weighted change | +0.21 pp |

The mix effect is small and positive even though the base shifted toward Salary Account, the cohort with the lowest activation rate, because Salary Account's own rate rose by 1 percentage point in the same year [T4], which offsets most of the drag a lower-rate cohort would otherwise create. The rate effect, +0.19 pp, is nine times the mix effect and is the larger force behind the change, in our model [T5]. Both effects are positive, yet the cohort-weighted total of +0.21 pp is larger than Exhibit 1's own reported change of +0.04 pp, because Exhibit 1's total uses the exact unrounded case counts for both years, while the cohort decomposition applies each segment's percentage, already rounded to the nearest whole point under C-N1's rounding rule, to that segment's account count; six segments each carrying a small rounding step compound into a visible gap at the total level, which section 3.6 below works through with its own arithmetic.

### 3.6 Recency ladder

| Window | T12 | T9 | T6 | T3 | T1 |
|---|---|---|---|---|---|
| Sep 2025 | 15% | 14% | 10% | 9% | 7% |
| Sep 2026 | 15% | 13% | 12% | 10% | 6% |
| T1 as share of T12 | | | | | |

In September 2025, 7% of the trailing 1-month figure against 15% of the trailing 12-month figure means that 47% of accounts active over 12 months had also traded in the most recent month [T6]. In September 2026, 6% against 15% means that figure fell to 40%. Fewer of the accounts the case counts as active in any given year are trading recently inside that year, which supports section 2's reading that habit, not first contact, is the harder problem: an account can clear the 12-month active bar and still have gone quiet for most of the months inside it.

### 3.7 Roll-off: accounts about to leave the 12-month active count

| Method | Accounts |
|---|---|
| Cohort rows: T12 minus T9, scaled to Exhibit 1 | 8,887 |
| Total row: 1,19,339 minus 13% of 8,09,746 | 14,072 |
| Midpoint used in the model | 11,479 |

Both methods estimate the same thing, how many of today's active accounts will fall out of the trailing 12-month window in the next quarter, because their last trade sits between 9 and 12 months old right now. The two methods disagree by 5,185 accounts because the cohort method applies six separate rounded percentages while the total-row method applies one rounded percentage to the whole base; the model takes the midpoint, 11,479, as a single working figure rather than picking whichever bound favours the argument [T7].

### 3.8 Target arithmetic at 31 January 2027

| Item | Value |
|---|---|
| Accounts at measurement (8,09,746 + 4 x 6,324) | 8,35,042 |
| Active at business as usual (14.74%) | 1,23,067 |
| Extra active accounts for +200 bps | 16,701 |
| Extra active accounts for +300 bps | 25,051 |
| Accounts opened in the 13-week window | 18,972 |

The case's own measurement window runs four months past the September 2026 snapshot [A01], during which the base keeps growing at the same 6,324 accounts a month the past year implies [A03, C-E1]: 8,09,746 plus four times 6,324 is 8,35,042. At the flat 14.74% business-as-usual rate, that base would carry 1,23,067 active accounts with no plan at all, so the brief's 200 to 300 basis point target translates into 16,701 to 25,051 extra accounts above that baseline, in our model [T8, C-K1]. The base-case plan's 19,053 extra actives [T10] sits inside that range, closer to the 200 basis point floor than the 300 basis point ceiling, which is exactly why section 2.4 states the bear case's shortfall honestly rather than letting the base case imply the floor is comfortably cleared under every scenario.

### 3.9 The cohort-weighted rounding gap, with the arithmetic shown

Exhibit 2a's own cohort table reports a total active (T12) count of 1,20,372 [C-E2a], while Exhibit 1 reports the actual total active count at 1,19,339 [C-E1]. Both are true; they are not the same calculation. Summing Exhibit 2a's six segment active counts directly: 1,084 (Prestige) plus 11,423 (Elite) is 12,507; plus 3,504 (Elevate) is 16,011; plus 12,062 (Preferred) is 28,073; plus 87,899 (Salary Account) is 1,15,972; plus 4,399 (Credit Card) is 1,20,371, one account short of Exhibit 2a's own stated total of 1,20,372 purely from the arithmetic of rounding six separate figures. Against Exhibit 1's unrounded 1,19,339, the cohort-weighted figure overstates the true active count by 1,033 accounts, 0.9% of the true figure. The reason is mechanical: Exhibit 2a states each segment's 12-month rate to the nearest whole percentage point under C-N1's own rounding instruction, and a segment as large as Salary Account, 6,27,853 accounts, turns a rounding step of half a percentage point into a swing of over 3,000 accounts once it is multiplied back out. This document uses Exhibit 1's 1,19,339 as the true active count throughout, and uses Exhibit 2a's cohort percentages only for within-cohort comparisons, such as section 3.4's year-on-year change, where the rounding error affects every year equally and mostly cancels out.

### 3.10 What the case data cannot show

The case gives account counts, cohort percentages and two exhibit snapshots, and nothing else measured. It does not give stage-by-stage conversion counts for the funnel it describes in words: account opened, first login, funded, first trade, repeat and habit are each described qualitatively, with the corrected reading that very few new accounts reach a first trade or investment within the first month [C-F1 to C-F5], but no count exists for how many accounts stall at login against how many stall at funding. It does not give an age distribution beyond the stated focus on investors under 30 [C-CO2]. It does not give a channel-level response rate for any of the messages ONL already sent on WhatsApp, email, RCS or social media [C-PB3]; every reach and response figure this document uses for a lever is a named assumption benchmarked against outside evidence, not a measurement of what ONL's own past campaigns achieved. Where this document needs a number the case does not supply, section 0.6 names it as a model assumption rather than letting it read as a case fact.

Exhibit for the deck: the funnel diagram and the heat map on slide 3 draw on section 3.2's cohort table and section 3.10's funnel reading; the quarter-arithmetic panel on slide 3 draws on sections 3.7 and 3.8; and Exhibit 1's own numbers from section 3.1 anchor the answer-strip figures on slide 2.
