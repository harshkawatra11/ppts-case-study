## 28. Risks: ad approval timing and a further market fall carry the most weight, and both are handled before week 1

**Answer.** Five risks sit on our register, and two of them, exchange advertisement-code approval running late and Indian equities falling further than the base case assumes, carry the most weight on a probability-times-impact basis [T17 scoring convention]. Both are handled before week 1 rather than discovered during it: the Dhanteras creative enters the compliance queue first, ahead of every other lever's creative, and the plan's fund list already holds to gold, liquid and broad-index exchange-traded fund categories regardless of where the market goes [D 15.7, B 2.7]. The remaining three risks, a bank declining the app slot, consent rates running below plan, and drift toward futures and options promotion, sit lower on the register and each already has a named early signal and a response built into the thirteen-week roadmap [E 26.2, E 27.4].

### 28.1 The risk register

A risk register needs five fields to be useful under questioning: how likely the risk is, how much it would cost if it happened, what a team would see early, what the team does about it, and who owns the response. Table 28.1 carries the five risks from the deck's own risk strip against those five fields, each sourced to the section of this document where the underlying design choice already exists.

| Risk | Probability | Impact | Early signal | Response | Owner |
|---|---|---|---|---|---|
| Ad approval slips past week 1 | High | Medium | By 1 November, the exchange advertisement-code approval for the Dhanteras creative has not come back [D 15.7] | File the Dhanteras creative first in the week-0 compliance queue, ahead of every other lever's creative, since its calendar window is fixed and the others' are not [D 15.7] | ONL compliance |
| The bank does not give the app slot | Low | Low | No salary-day card is live by week 3 [C 12.7] | Fall back to a lighter-weight banner on existing app infrastructure, and escalate through the gate G1 review at week 4 [C 12.7, E 26.2] | Bank app team, Head of digital banking [E 26.3] |
| Consent and reach run below plan | Medium | Medium | A week 2 holdout read shows reach materially below the bear case of 50% for the rediscovery message [C 13.7] | Shift budget toward the higher-reach WhatsApp and statement channels, away from email, and lead with servicing messages rather than new creative | Analytics and growth team [E 26.3] |
| The market falls further than the base case assumes | High | High | The week 6 activation checkpoint falls below the bear-case line of 15.20% [T12] | Hold the fund list to gold, liquid and broad-index exchange-traded fund categories only, and trigger an immediate expansion of RM review coverage, the lever with the widest response-rate spread after salary-day tap-through [B 2.7, section 23 of this document] | Main agent, Head of ONL Trade [E 26.3] |
| A message drifts toward promoting futures and options | Low | Low | The F&O share of new actives guardrail reads above 5% on a weekly check [E 27.4] | Pause the moment driving the F&O share and run a knowledge check on the copy before the next send [E 27.4] | ONL compliance |

The two risks named in this section's own title, ad approval and a further market fall, both carry a probability rated High, which is the single clearest reason they weigh more than the other three on the register, before impact is even considered.

### 28.2 The risk heat map at five-point resolution

The deck's own risk strip plots the five risks on a three-level grid, Low, Medium and High on each axis. Table 28.2 reproduces that same placement at a finer, five-point resolution, consistent with the one-to-five scoring scale this document already uses for the option screen in section 11 [T17]. Low maps to 1 or 2, Medium to 3, and High to 4 or 5; where the deck's own grid places two risks in the same cell, the finer grid separates them by one point rather than changing their relative standing.

| Impact, 5 (highest) | | | | | Market falls further (5,5) |
|---|---|---|---|---|---|
| Impact, 4 | | | | | |
| Impact, 3 | | | | Ad approval slips (4,3) | |
| Impact, 2 | App slot not given (2,2) | | Consent and reach below plan (3,3) | | |
| Impact, 1 | F&O drift (1,1) | | | | |
| | Probability, 1 | Probability, 2 | Probability, 3 | Probability, 4 | Probability, 5 |

*The coordinate pair after each risk's name reads as (probability, impact) on the five-point scale.*

Reading the table by diagonal distance from the origin shows the same ranking the deck's own three-level grid implies: the market-falls-further risk sits furthest from the origin, at the highest corner on both axes, with the ad-approval risk second, consent and reach third, and the app-slot and F&O-drift risks tied at the lowest corner. No risk moves between quadrants in this finer rendering; the five-point scale only gives the two low-weight risks room to sit at slightly different points inside the same quadrant the deck's coarser grid already placed them in.

### 28.3 Risk ranking by weighted score

Multiplying each risk's probability by its impact, both on the five-point scale from table 28.2, gives a single weighted score out of 25 for direct comparison. Table 28.3 ranks the five risks this way.

| Risk | Probability (1 to 5) | Impact (1 to 5) | Weighted score (out of 25) | Rank |
|---|---|---|---|---|
| Market falls further | 5 | 5 | 25 | 1 |
| Ad approval slips past week 1 | 4 | 3 | 12 | 2 |
| Consent and reach run below plan | 3 | 3 | 9 | 3 |
| The bank does not give the app slot | 2 | 2 | 4 | 4 (tie) |
| Drift toward futures and options promotion | 1 | 1 | 1 | 5 (tie, lower) |

The weighted scores confirm this section's own title without any further argument needed: the market-falls-further risk and the ad-approval risk hold the first and second ranks by a wide margin, 25 and 12 out of 25, against single-digit scores for the remaining three. Together they account for 37 of the register's 51 total weighted points, 73% of the register's total weight sitting in two of its five rows.

This concentration of weight is not an artefact of how the five-point scale was built; it follows directly from where each risk sits in the plan's own design. The market-falls-further risk carries the highest probability on the register because the case's own twelve months of evidence already show an unfavourable market [C-PB1], which makes a further decline a continuation of an observed trend rather than a speculative scenario, and it carries the highest impact because a materially weaker market would also weaken the business-as-usual drift assumption, A02, pulling down the baseline the whole plan is measured against at the same time it pulls down the levers' own response rates [section 21.4]. The ad-approval risk carries a high probability because every one of the seven levers' creatives passes through the same three-stage approval path described in section 19.3 of this document, concentrating demand on the same compliance desks in the same early weeks, but its impact is lower than the market risk's because a delay affects the timing of a lever's launch, not the underlying mechanism the lever depends on; a card that launches in week 2 instead of week 1 still converts at the same modelled rate once it is live, while a weaker market changes the rate itself. This distinction, between a risk that delays a mechanism and a risk that degrades it, is the clearest single reason the two highest-ranked risks on the register are not interchangeable in how the plan responds to them.

### 28.4 Pre-mortem: possible reasons for a missed target

A pre-mortem works from the opposite end of a risk register: rather than listing known risks in advance, it starts from the assumption that the target was missed and works backward to the most plausible reasons why. The exercise asks us to place ourselves at 31 January 2027, after the full thirteen-week window has closed, having learned that the base case's +2.28 percentage point target was not met, and to work back through every mechanism that could have produced that outcome, using only the evidence and the model this document already carries rather than a fresh set of fears. Table 28.4 sets out the failure modes most consistent with that evidence, each one traceable to a specific mechanism rather than a vague worry.

| Possible reason the base case was missed | What we would have seen along the way | Which risk or assumption this traces to | Tag |
|---|---|---|---|
| Exchange advertisement-code approval for one or more creatives ran past week 3, cutting the window for that lever's full ramp | A creative still pending sign-off at the week 0 or week 1 gate check | The ad-approval risk, ranked second on the register | D 15.7, E 26.2 |
| The market fell further than the bear case assumes, pulling the business-as-usual rate itself below 14.59% | A week 6 tracked rate below the bear-case line of 15.20%, with the gap still widening by week 9 | The market-falls-further risk, ranked first on the register; section 22.2a of this document shows the bear-base gap widening from 0.28 pp at week 1 to 1.26 pp by week 13 | T12, section 22.2a |
| Salary-day tap-through landed at or below its bear value of 6%, rather than the base value of 8% | A week 2 holdout read on the salary-day card showing a lift below 0.17 pp, the lever's minimum detectable effect | A21, the single widest tornado bar in the model at a 0.34 pp spread | T16, T19 |
| RM coverage fell short of its cohort-specific targets, especially in Elevate, the cohort whose one-month activation rate already fell from 24% to 13% in a year | Week 4 coverage tracking below the 60% target for Elevate or the 35% target for Preferred | The RM review lever's coverage multiplier, A26 | T4, section 14.7 of this document |
| The salary-day card's advice-status open question came back from an informal SEBI reading as a recommendation requiring separate registration, forcing a redesign of the fund list mid-window | An adverse or delayed informal-guidance response logged before or during week 4 | Section 7.1's open question on the incidental-advice carve-out | D05, section 2.7's fifth trigger |
| Opt-outs on one or more channels crossed the 0.5% internal guardrail early, forcing a pause on that channel's sends for several weeks | A weekly opt-out reading above 0.5% on any single send | The opt-out guardrail | A50, section 27.4 |
| The dormant half of the idle pool converted at a rate below the bear-case multiplier, because video in-person-verification capacity could not clear the queue inside the window | Verification queue times exceeding a few days by week 4 | A11, the dormancy-friction adjustment | C 13.7, section 21.4 |

Every row in this table traces to a mechanism already named elsewhere in this document, which is the point of running the pre-mortem after the risk register rather than as a separate exercise. A pre-mortem run in isolation from a plan's own prior analysis can surface fears the plan has not priced in anywhere, which would be a sign the earlier sections missed something; running it against a plan this document has already analysed in detail, lever by lever and assumption by assumption, is instead a check that the earlier analysis holds together under a different, backward-looking method, and table 28.4's seven rows confirm that it does, since each one maps cleanly to a risk, an assumption or a gate this document names elsewhere.

### 28.5 Where each risk is already caught by a gate or guardrail

A risk register is only useful if the plan has a place to act on it before the thirteen weeks run out. Table 28.5 maps each of the five risks to the specific gate or guardrail, from the execution plan in section 26 and the monitoring plan in section 27 of this document, that catches it early.

| Risk | Caught by | When it would be caught | Tag |
|---|---|---|---|
| Ad approval slips past week 1 | Gate G0 | Week 0, before any creative may send | E 26.2 |
| The bank does not give the app slot | Gate G1 | Week 4, when the tile and single sign-on must be live | E 26.2 |
| Consent and reach run below plan | Weekly holdout read | Any week, per lever, against the minimum detectable effect in T19 | E 27.2 |
| The market falls further than the base case assumes | Gate G2 | Week 6, against the bear-case line of 15.20% | E 26.2, T12 |
| Drift toward futures and options promotion | The F&O-share guardrail | Any week, against the 5% stop line | E 27.4 |

No risk on the register sits outside an existing gate or guardrail, which is the plainest evidence that this section's own claim, that both weighty risks are handled before week 1, holds across the whole register, including the three risks the title does not name.

### 28.6 Why "handled before week 1" means something specific for each of the two weightiest risks

The phrase "handled before week 1" is not a general statement of confidence; it names a concrete action that happens inside the current roadmap before the programme's first week of live sends. For the ad-approval risk, this means the Dhanteras creative, the one lever whose launch date is fixed by the calendar, enters the compliance queue ahead of every other lever's creative in the week-0 gate G0 review, so that any delay in exchange sign-off surfaces while there is still runway to act on it rather than after the 6 to 8 November window has passed [D 15.7, E 26.2]. For the market-falls-further risk, "handled before week 1" means the fund list behind the salary-day card is already restricted to gold, liquid and broad-index exchange-traded fund categories by design, not as a response to a falling market but as the baseline design from the outset, so there is no separate decision to make if the market falls further during the programme; the design simply continues to hold [section 12.3]. A reader checking this section's claim against the roadmap in section 26 of this document will find both actions already scheduled at or before week 0, not proposed as a future contingency.

A further point belongs here because a judge is likely to ask it directly: whether treating these two risks as "handled" understates the possibility that both happen at once, a compliance delay during a falling market. The risk register in table 28.1 treats the five risks as independent entries, each with its own probability and impact, and does not separately model the compound case of two risks landing together. This is a stated limit of the register rather than an oversight, consistent with how section 21.6 of this document states the model's own independence limit for lever overlap; a judge pressing on this point should hear that the two risks' responses, filing the Dhanteras creative first and holding the fund list to its restricted categories regardless of market conditions, do not depend on each other and would both still apply even if both risks happened in the same week.

## 29. Customer validation plan (not yet run): 30 interviews and two usability rounds in weeks 1 to 3 would confirm or cut the two largest levers

**Answer.** Nothing in this section has been run yet. No interview has taken place, no usability session has been recorded, and no response rate below belongs to a real customer; every figure in this document's seven levers remains a checked model assumption, never a measurement [section 0.6, section 21.6]. What follows is a plan for thirty structured interviews and two usability rounds across weeks 1 to 3 of the programme, built to test the two largest levers, the salary-day card at 5,661 extra actives and the RM review script at 4,083 [T10], before the full thirteen-week rollout commits further cash and engineering time to either one.

### 29.1 The two hypotheses this plan tests

Every lever in sections 12 to 17 of this document rests on a chain of modelled rates. The validation plan does not test all seven chains at once, since thirty interviews and two usability rounds cannot carry that weight with any statistical confidence; it tests the two chains the model's own tornado ranking shows matter most to the result, salary-day tap-through (A21, the single widest tornado bar at a 0.34 pp spread) and RM review conversion (A27, the second-widest at 0.26 pp) [T16].

| Hypothesis | What the model assumes | What the interviews and usability rounds would test |
|---|---|---|
| H1, the salary-day card | A customer who sees the card on salary credit understands what an exchange-traded fund instalment is, trusts the no-default list, and taps through at a rate near the base case's 8% [A21] | Whether the card's wording is understood on first read, whether the no-default list reads as neutral rather than confusing, and whether the customer trusts a card appearing inside the bank's own app without a separate broker identity shown |
| H2, the RM review script | A client in a facts-only portfolio review understands the account exists and the instalment mechanism without the relationship manager making a recommendation, and places a first order at a rate near the base case's 15% [A27] | Whether the script reads as neutral to the client receiving it, whether the client can repeat back what an instalment is after hearing the script once, and whether the client perceives any implied recommendation the script does not intend |

### 29.2 Method

The plan runs two separate research instruments in the same three-week window, each suited to a different kind of question. Structured interviews, thirty in total, ask customers directly about awareness, trust and intent, since these are questions a customer can answer in their own words. Usability testing, two rounds, observes a customer's actual reaction to the card's wording and the RM script's delivery, since trust and comprehension are better measured by watching a reaction than by asking a customer to self-report it. Both instruments draw participants from customers who already hold an idle ONL account, recruited through the same consent-first design this plan's other levers use, never from a list built or purchased for research purposes alone.

### 29.3 Sample by cohort

Thirty interviews is a small sample against an idle pool of 6,89,375 accounts [T2], so the sample is weighted toward the two cohorts the two hypotheses target, rather than drawn proportionally across all six cohorts in the case's own table.

| Cohort | Idle accounts [T2] | Interviews allocated | Why this many |
|---|---|---|---|
| Salary Account | 5,39,954 | 18 | Tests H1 directly; this cohort holds 78% of the idle pool and is the salary-day card's entire target population [T2] |
| Prestige, Elite, Elevate, Preferred (combined, weighted toward Elevate and Elite) | 80,503 | 8 | Tests H2 directly; Elevate's sharp one-month activation fall from 24% to 13% [T4] makes it the cohort most worth over-sampling inside this group |
| Credit Card | 68,918 | 4 | A smaller allocation, since no lever is built specifically for this cohort; included to check whether the salary-day card's design, read by a non-Salary-Account customer, still reads as neutral and comprehensible |
| Total | 6,89,375 | 30 | Matches the deck's stated figure and the cost line's own count [A57, deck S6] |

This allocation is a design choice stated plainly as a choice, not a statistically representative sample of the idle pool; thirty interviews cannot be representative of 6,89,375 accounts on any weighting, and the plan does not claim otherwise.

### 29.4 Interview guide outline

The guide runs in four blocks, moving from general awareness toward the specific card or script each participant sees, so a participant's unprompted answers are captured before any prompted material could influence them.

| Block | Topic | Example question | Tests |
|---|---|---|---|
| 1 | Unprompted awareness | Before today, did you know you held a demat and trading account linked to this bank | H1 and H2 both, baseline |
| 2 | Reaction to the card or script | After reading this card (or hearing this script), what do you understand you could do next | H1 or H2, depending on cohort |
| 3 | Trust and neutrality | Does this feel like the bank is recommending a specific fund, or like it is telling you a fact about your own account | H1 and H2, the no-advice design |
| 4 | Intent | Based on what you just saw, would you set this up, and if not, what would need to change | H1 and H2, a proxy for A21 and A27 |

### 29.5 The two usability tests

The first usability round tests the salary-day card's wording and the trust question directly, showing a working mock of the card to participants one at a time and recording whether they read the no-default fund list as a recommendation, a neutral menu, or something they cannot interpret without further explanation. The second usability round tests the RM review script with a small group of relationship managers delivering the script to volunteer clients under observation, checking specifically whether the facts-only framing survives an actual spoken delivery, since a script that reads as neutral on paper can still drift into an implied recommendation once a relationship manager answers a client's follow-up question in the room.

### 29.6 Decision rules

A validation exercise only earns its cost if its result changes a decision. Table 29.3 sets out, for each hypothesis, what a result would need to show to keep the lever as designed, shrink its scope, or cut it before the full rollout.

| Lever | Keep as designed if | Shrink if | Cut or redesign if |
|---|---|---|---|
| Salary-day card (H1) | Interview participants correctly describe the instalment mechanism after one reading, and the fund list is read as neutral by a clear majority | The card is understood but the fund list reads as confusing or incomplete to a meaningful minority, in which case the list's wording, not its structure, is revised | A majority of participants read the card as a recommendation rather than a fact, or cannot describe what the instalment does after reading it, in which case the card is redrafted and re-tested before any live send |
| RM review script (H2) | Clients can repeat back what an instalment is after the spoken delivery, and neither clients nor observing compliance staff detect an implied recommendation | The script is understood but a specific line drifts toward advice-adjacent language under follow-up questioning, in which case that line is removed or rewritten | A pattern of relationship managers departing from the facts-only script under client follow-up appears across more than one observed delivery, in which case the script moves from a suggested talking point to a mandatory, auditable checklist item, the escalation path section 14.7 of this document already names for this exact risk |

The decision rules are built to be checkable against a small sample without overstating what thirty interviews and two usability rounds can show: a clear failure signal (a majority misreading the card, or a repeated pattern of script drift) is actionable at this sample size, while a marginal or mixed result defaults to the shrink path, a wording revision rather than a structural one, since a sample this size cannot reliably distinguish a true marginal effect from sampling noise.

### 29.7 Why thirty interviews and two usability rounds, and not a larger pilot

A larger pilot, a live send to a few thousand accounts with a held-out control group, would answer the two hypotheses with far more statistical confidence than thirty interviews can. The plan does not propose that larger pilot inside weeks 1 to 3 for a specific reason stated plainly: a live send before the consent centre and the holdout and frequency-cap service are built, which gate G0 and gate G1 of the execution plan schedule for weeks 0 to 4 [section 26.1, section 26.2 of this document], would itself breach the consent-first design every lever in this plan is built around. The validation plan's thirty interviews and two usability rounds are sized to fit inside the window before those features are live, using a method, direct conversation and observed usability, that does not require sending a single live message to a real customer outside the research setting itself. The cost line reflects this choice directly: ₹1,20,000 for the full exercise, the smallest named cash item in the thirteen-week budget apart from the bank's own app infrastructure, which costs nothing in cash [A57, T13]. Once the holdout service is live from week 4 onward, the weekly holdout reads described in section 27.2 of this document take over as the larger-sample, statistically powered check on exactly the same two hypotheses, so the interview-and-usability plan is best read as the smaller, faster check that runs before the larger, continuous one begins, not as a substitute for it.

## 30. Assumptions register: every model input with its base, bear and bull value, and the inputs that move the result most

**Answer.** The model carries sixty-seven named assumptions, A01 to A67, each with a base, bear and bull value and a stated basis in a research lane or a team estimate [T1]. Twenty-two of them move by scenario; the rest are fixed costs, calendar facts or case-stated figures that do not change with how optimistic the scenario is. Of the twenty-two that move, thirteen carry enough individual weight to appear in the tornado ranking, and the single widest, salary-day tap-through, moves the base case's result by 0.34 percentage points on its own between its bear and bull values [T16]. Changing any one input and rerunning the model is a single command from the repository root.

### 30.1 The register, grouped by theme

Table 30.1 groups the model's assumptions by the theme they govern, since reading all sixty-seven in the single order T1 lists them obscures which ones belong together. Fixed-value assumptions (channel unit costs, build costs, product rates already set by the case or by SEBI's own rules) are grouped separately from the twenty-two that carry a genuine bear-to-bull range.

| Theme | Assumptions (fixed, no scenario range) | Assumptions (vary by scenario) |
|---|---|---|
| Baseline and dormancy | A01 (the four-month measurement window), A03 (net account growth) | A02 (business-as-usual drift), A10 (share idle 24 months or more), A11 (conversion of a dormant account after re-verification) |
| Salary-day lever | none | A20 (app use on salary day), A21 (tap-through), A22 (first order after tap) |
| Holdings-check (rediscovery) lever | none | A23 (reach), A24 (tap-through), A25 (first order after rediscovery) |
| RM review lever | none | A26 (coverage multiplier), A27 (first order after a review) |
| Dhanteras lever | none | A28 (reach), A29 (tap-through), A30 (first order after the tap) |
| Workplace sessions | A31 to A33 are themselves carried at bear, base and bull values for sessions, attendees and conversion | A31 (sessions), A32 (attendees a session), A33 (first order among idle attendees) |
| Warm-cohort defence | none | A35 (reach), A36 (incremental re-trade) |
| New-account guided onboarding | none | A39 (lift in the 90-day first-order rate) |
| Channel unit costs | A50 to A53 (WhatsApp opt-in share, WhatsApp, SMS and email per-message cost) | none |
| Build and programme costs | A54 to A60 (content, workplace delivery, compliance, validation research, contingency, internal sprint size and cost) | none |
| Paid-media comparator | none | A61 (cost per activated account, used only in section 24 of this document, not in the activation result itself) |
| Revenue and BSDA | A62, A64 to A67 (brokerage, sell frequency, depository charge, BSDA share, annual charge) | A63 (orders a year, used only in section 25, not in the activation result) |

Every theme above except the fixed-cost rows carries at least one assumption that feeds directly into the 19,053-extra-active result; the fixed rows feed the cost and revenue sections of this document instead, and moving them changes a rupee figure in section 24 or 25 without moving the activation rate itself.

### 30.2 Each assumption in prose, by theme

The business-as-usual drift, A02, is the one assumption in the whole register drawn directly from the case's own data rather than from an outside benchmark: its base value, 14.74%, is the case's own Exhibit 1 figure, and its bear and bull values, 14.59% and 14.84%, are a modest extrapolation of the drift Exhibit 1 already shows from 14.70% to 14.74% across the prior year [C-E1, section 21.4 of this document]. The dormancy pair, A10 and A11, governs how much of the idle pool needs re-verification before it can trade at all; a base share of 50% dormant, converting at half the rate of a live account after re-KYC, produces a dormancy-adjustment factor of 0.75 that is applied uniformly across every cohort [section 21.4].

The salary-day lever's three assumptions, A20, A21 and A22, chain reach through response through order: 55% of idle Salary Account customers open the bank app in a month, 8% of those tap the card over three salary credits, and 32% of those place a first order with single sign-on and a mandate already set [T9]. The holdings-check lever's three assumptions follow the same shape at a broader, lower-intensity scale: 60% reach, 4% tap-through, 25% order, applied across the whole idle pool rather than one cohort [T9]. The RM review lever runs differently, since its reach step is a weighted coverage pattern across four cohorts (Prestige 80%, Elite 60%, Elevate 60%, Preferred 35%) rather than a single rate, carried by A26, multiplied by a 15% order rate after the conversation, A27 [section 14.5 of this document]. The Dhanteras lever's three assumptions, A28, A29 and A30, govern the same reach-tap-order chain for the whole idle pool inside the festival week, with a separate dormancy-friction step applied afterward [section 15.5]. The workplace-session lever is sized differently again, by a session count and an attendee count rather than a reach rate, A31 and A32, multiplied by the idle share of the Salary Account cohort and a 10% conversion rate among idle attendees, A33 [section 21.5a]. The warm-cohort lever uses a two-step chain on a fixed population, 11,479 accounts at the T7 midpoint, reached at 70% and re-trading at 20% incrementally above business as usual [T9, section 16.5]. The new-account lever uses a single assumption, A39, the percentage-point lift in the 90-day first-order rate from guided onboarding, applied directly to the 18,972 accounts the model expects to open inside the window [T8, section 17.5].

### 30.3 T16's ranking of which inputs move the result most

Table 30.2 reproduces the tornado ranking from section 23 of this document, since the ranking itself is the direct answer to this section's own title question, which inputs move the result most.

| ID | What it governs | pp at bear value | pp at bull value | Spread |
|---|---|---|---|---|
| A21 | Salary-day tap-through | 2.11 | 2.45 | 0.34 |
| A27 | RM review to order | 2.15 | 2.41 | 0.26 |
| A22 | First order after tap | 2.16 | 2.41 | 0.25 |
| A02 | Business-as-usual drift | 2.13 | 2.38 | 0.25 |
| A20 | App use on salary day | 2.16 | 2.37 | 0.21 |
| A11 | Order rate after re-KYC | 2.19 | 2.38 | 0.19 |
| A24 | Rediscovery tap-through | 2.19 | 2.37 | 0.18 |
| A26 | RM coverage multiplier | 2.19 | 2.36 | 0.17 |
| A29 | Dhanteras tap-through | 2.21 | 2.37 | 0.16 |
| A25 | Order after rediscovery | 2.21 | 2.36 | 0.15 |
| A39 | New-account lift | 2.22 | 2.35 | 0.14 |
| A10 | Share idle 24 months or more | 2.22 | 2.34 | 0.12 |
| A36 | Warm cohort re-trade | 2.24 | 2.33 | 0.10 |

All thirteen bear-value results, even the lowest at 2.11 pp, stay above the brief's 2.00 pp floor when only that one assumption moves [section 23 of this document], which is the finding that separates a single weak input from the full bear scenario, where all twenty-two scenario-varying assumptions move together and the result falls to +1.02 pp, below the floor [T11].

### 30.4 Evidence class by assumption

A reader weighing how much confidence to place in a given assumption needs to know where its number came from, as well as its value. Table 30.3 sorts the thirteen tornado-ranked assumptions, plus the two dormancy assumptions, by the class of evidence behind each one.

| Evidence class | Assumptions | What distinguishes this class |
|---|---|---|
| Direct extrapolation of the case's own data | A02 | The only assumption in this table whose bear and bull values are built from the case's own reported trend rather than an outside benchmark or a team judgement [C-E1] |
| Vendor or published benchmark | A21, A24, A29 (tap-through rates); A52, A53 (channel costs) | Checked against an in-app card engagement benchmark, a push or message click-through figure, or a published SMS and email rate card, none of them a measurement on ONL's own customers [Lane F] |
| Behavioural-economics study, outside the Indian brokerage context | A22, A27, A33, A36, A39 | Supported by studies on defaults, reminders, active decisions or guided onboarding run on a different population (US retirement savers, Bolivian and Filipino savings-account holders), read as directional support rather than a direct replication [Lane E] |
| Case-context or comparator-filing figure | A20, A26 | Grounded in a named comparator's own disclosure (a bank's app usage pattern, a wealth manager's relationship-manager coverage context) rather than a controlled study [Lane B, Lane F] |
| Regulator or exchange rule, applied as a design constraint rather than estimated | A10, A11 | The dormancy share and conversion multiplier are checked against the exchange's own 24-month flagging rule and SEBI's KYC re-verification requirement, which bound the assumption's plausible range even though the exact conversion multiplier remains a team estimate [D29, D30] |
| Team estimate with no comparable benchmark found | A53 (email cost specifically, among the fixed costs) | Stated honestly as a team estimate in section 24.3 of this document, since no vendor or official source gave a directly comparable Indian per-email transactional cost figure in this research [Lane F] |

No assumption in this register is presented as a measurement of ONL's own customers, and this table's purpose is to make the actual evidence class visible rather than letting every figure in T1 read with the same implied confidence.

### 30.4a Why the fixed-value assumptions carry less scrutiny than the scenario-varying ones

The forty-five assumptions that do not vary by scenario, the channel unit costs (A50 to A53), the build and programme costs (A54 to A60), and the revenue inputs that feed only sections 24 and 25 of this document, receive less of this section's own attention than the twenty-two that move, and that difference in attention is deliberate rather than an oversight. A fixed-value assumption cannot, by construction, move the activation result away from the base case, since the model holds it at a single value in every scenario; its only effect is on a rupee figure, the cash cost in section 24 or the revenue-per-active figure in section 25, never on the 19,053-extra-actives headline itself. This is why the tornado ranking in table 30.2 above contains none of the forty-five fixed-value assumptions: a ranking by spread is, by definition, a ranking of inputs that have a spread to report, and a fixed-value input reports none. A reader checking this document's confidence in, for example, the ₹0.025-a-message email cost, A53, the one fixed assumption this document names directly as a team estimate with no comparable benchmark found [section 24.3], should read that confidence against the fact that A53 cannot move the activation rate at all; it can only shift the cash-cost line in section 24 by a small amount, since email is the cheapest of the three paid channels in the cost table and a materially different email rate would still leave SMS and WhatsApp as the larger two line items.

### 30.5 How to change one input and rerun

Changing any single assumption in the register and seeing the effect on every locked number is a two-step process. First, edit the value directly in `model/activation_model.py`, where every assumption in T1 is defined by its own named variable. Second, rerun the model from the repository root:

```
python -X utf8 arthikkhayal-case/model/activation_model.py
```

The run prints a new hash alongside the twelve checks and the headline findings, and rewrites `model_outputs.json`, `model_tables.md` and `deck/values.json` in place. Adding `--dry` to the same command prints the same summary and tables to the screen without writing any file, which is the safe way to test a candidate change before committing to it. Any change that moves a locked number, under the update protocol this plan already sets out, must be logged in `DECISIONS.md` with the date, the step and the reason, and propagated to every section and slide that cites the old figure.

## 31. Slide blueprint: eight slides carry the argument, and every number on them traces to a tagged line in this document

**Answer.** Eight slides, Cover, Summary, Diagnosis, Strategy, Impact, Execution, Appendix and Thank You, carry the full argument, and every number on every one of them traces to a tagged line in this document, the model tables, or a verified research row [deck/slide-copy.md throughout]. Eight named archetypes from the skill's own catalogue map onto specific panels across the deck, the cover's mind map names the eight actors a bank-led activation strategy has to account for, and the deck carries exactly one "CONCLUSIVELY" synthesis, one "THEREFORE" synthesis, and one moneyshot card, each confirmed by direct inspection of `deck/slide-copy.md`.

This blueprint exists for a specific, practical reason beyond documentation. A judge who presses on a number during the pitch is pressing on a slide, not on this document directly, and the speaker needs to be able to point from that slide panel back to a specific section and tag without pausing to search. The tables in this section are built to make that lookup mechanical: given any panel title or number a judge names, table 31.1 below gives the backing section in one row, and that section's own tags give the exact case line, model table or research row behind it. This is also why the deck's own word count and table count run far below this document's, roughly eight slides against thirty-four sections: the deck is built to carry the argument's conclusions at a glance, while this document is built to survive the argument being challenged in detail, and the correspondence between the two, not the deck's brevity on its own, is what should give a reader confidence in either one.

### 31.1 Per-slide panel breakdown

Table 31.1 lists, for each of the eight slides, its title, the key numbers it carries, the research section backing those numbers, and the tags a reader would find if they traced each figure back.

| Slide | Title | Key panels and numbers | Backing section | Tags |
|---|---|---|---|---|
| 1, Cover | Activation without a bull market | The eight-node mind map; the answer strip (+2.3 pp, 14.7% to 17.0%, 19,053, ₹16.5 lakh); the team table | Sections 0, 2, 5 | C-E1, T11, T13 |
| 2, Summary | ONL can add +2.3 pp of activation by 31 January 2027 | ONL-against-the-market bars (14.7%, 19.2%, 20 to 40%); Exhibit 1 as a funnel; the target band (bear +1.0, base +2.3, bull +3.9); the seven-lever bar; the brief-asks and what-we-do matrix | Sections 2, 3, 4, 11, 22 | C-E1, Lane C, T11, T10, T17 |
| 3, Diagnosis | 78% of the idle base belongs to salary customers | The cohort table by trailing window; idle accounts by segment; the funnel and where past effort landed; the quarter arithmetic; five whys; five biases | Sections 3, 9, 10 | C-E2a, T2, T4, T7, T8 |
| 4, Strategy | Meet the account inside four moments the bank already owns | CONCLUSIVELY strip; the eight-option heat matrix; extra actives by segment and moment; five checks; the bank app on two days; reach-and-conversion bubbles; five funnel steps and fixes | Sections 7, 11, 12 to 18 | T17, T18, T10, T19 |
| 5, Impact | Base case adds 19,053 active accounts for ₹16.5 lakh | The moneyshot card (19,053 against 1,649, 11.6x); the waterfall from 14.74% to 17.02%; the weekly path against the target band; three scenarios; the tornado | Sections 2, 21 to 24 | T11, T12, T13, T14, T16 |
| 6, Execution | Thirteen weeks, four gates, a 10% holdout | The Gantt with four gates; go-only-if table; extra actives by month; holdout lift against detectable effect; weekly KPI table; the risk heat strip; guardrail stop lines | Sections 26 to 28 (this document) | T12, T19, section 26.2, section 28.1 |
| 7, Appendix | Every number traces to a case exhibit, an assumption or a source | A1 model formula; A2 assumptions that move the answer; A3 rules; A4 short forms and sources | Sections 21, 30 (this document) | T1, T9, T16, D-lane rules |
| 8, Thank You | ONL should put the account its salary customers already hold in front of them | THEREFORE card; the team table; the source line | Section 2 | T11, T13 |

### 31.2 Archetype mapping

The skill's universal slide archetypes [`references/archetypes.md`] each have a specific home on this deck. Table 31.2 names eight of them against their panel.

| Archetype | Where it sits on this deck |
|---|---|
| H, executive summary | The Summary slide as a whole, which carries the recommendation, the moneyshot's own smaller echo, and the three scenarios in one page |
| K, MECE option-filter table | The Strategy slide's eight-option heat matrix, scoring every candidate option against the same five weighted criteria |
| M, three-scenario projection | The Impact slide's bear, base and bull columns, carried through the weekly path chart and the scenario summary table |
| N, sensitivity matrix | The Impact slide's tornado panel, ranking the thirteen most sensitive assumptions by spread |
| P, the moneyshot | The Impact slide's same-cash-two-routes card, 19,053 against 1,649 for the identical ₹16.5 lakh |
| U, implementation plan | The Execution slide as a whole, carrying the thirteen-week Gantt, the four gates and the weekly KPI table |
| V, the "Conclusively" closer | The Strategy slide's top band, closing the case-against-the-alternative argument before the deck moves into the chosen design |
| W, conclusion synthesis | The Thank You slide's "THEREFORE" card, pure recap with no new number |

### 31.3 Cover mind-map node list

The cover slide's mind map names eight actor nodes, cross-referenced directly against `deck/slide-copy.md`'s own labels. Table 31.3 lists each node, its label on the slide, and the fact or source tying it to this document.

| Node | Label on the slide | Tag |
|---|---|---|
| Parent bank | PARENT BANK, 6.28 lakh salary accounts sit with ONL | C-E2a, T2 |
| Rival brokers | RIVAL BROKERS, set the bar on speed and price | C-CO3, section 6 |
| Bank-led peers | BANK-LED PEERS, bank, demat and trading together | Section 5, section 6 |
| Regulators | REGULATORS, no advice, no inducement, ad approval | C-K2, section 7 |
| The market | THE MARKET, NSE active clients fell 7% in FY26 | Section 4.2 |
| The customer | THE CUSTOMER, under 30, risk averse, busy | C-CO2, C-X3 |
| Owned channels | OWNED CHANNELS, bank app, email, SMS, RM, branch | Section 12 to 17 |
| Data, consent | DATA, CONSENT, DPDP Act 2023 and Rules 2025 | Section 20 |

### 31.4 Confirmation checklist

This checklist exists because a claim repeated often enough in a planning document can start to sound settled without ever being checked against the artefact it describes. Each row below was checked directly against `deck/slide-copy.md`, the plain-text extraction of every slide's own text nodes, rather than against this document's own earlier description of what the deck was meant to contain, so a mismatch between intention and build would show up here rather than go unnoticed.

Table 31.4 confirms, item by item, the specific claims this section's instructions ask it to verify against `deck/slide-copy.md`.

| Item to confirm | Found where | Confirmed |
|---|---|---|
| "CONCLUSIVELY" appears on the Strategy slide | Slide 4, item 10 of `deck/slide-copy.md` | Yes |
| "THEREFORE" appears on the Thank You slide | Slide 8, item 2 of `deck/slide-copy.md` | Yes |
| Exactly one moneyshot card | The Impact slide's "SAME ₹16.5 LAKH OF CASH, TWO ROUTES" card, slide 5, items 10 to 17; no other slide carries a card in this format | Yes, one |
| Every panel number carries a tag resolving somewhere in this document | Cross-checked against table 31.1 above | Yes, panel by panel |
| The cover mind map carries eight actor nodes with real labels, not placeholder text | Slide 1, items 25 to 57 of `deck/slide-copy.md` | Yes |
| The deck's five-check language matches this document's compliance design | Slide 4, items 129 to 139, matching section 19's five-category headline | Yes |

### 31.5 Why the deck compresses eight research sections into five core slides

The research document behind this deck runs thirty-four numbered sections across six parts, while the deck itself carries only five core slides between the Cover and the Appendix. This compression is deliberate, not a loss of content, and follows the skill's own guidance for a case this short: collapse each of the eight-section blueprint's parts down to one dense slide rather than one slide per sub-topic [PLAN section 0]. The Summary slide alone carries the work of this document's sections 2, 3, 4 and 11, the recommendation, the case data, the market context and the option screen, because an executive summary archetype is built to compress an argument's conclusion and its strongest supporting evidence onto one page, leaving the full derivation for a reader who presses further. The Diagnosis slide carries sections 3, 9 and 10 for the same reason, and the Strategy slide carries sections 7 and 12 to 18. A reader who wants the full chain behind any single slide panel finds it by following the tags in table 31.1 back into the section named there, which is the entire purpose of keeping this document and the deck in a fixed, traceable correspondence rather than letting the deck stand as a shorter, looser summary of an argument the document alone can defend.

The Impact and Execution slides compress differently from the Summary, Diagnosis and Strategy slides, and the difference is worth naming directly. Summary, Diagnosis and Strategy each pull from several of this document's sections because they carry the argument's narrative, the case for the recommendation, which draws on evidence spread across the diagnosis and the option screen. Impact and Execution instead each pull mostly from one contiguous run of sections, 21 to 24 for Impact and 26 to 27 for Execution, because those sections were themselves written as a single connected build, the model's method followed by its results followed by its cost, and the quantitative analysis and feasibility sections of the skill's own eight-section blueprint map onto exactly this contiguous run rather than a scattered set of supporting facts. The Appendix slide, by contrast, pulls from this document's own thirtieth section plus the model's assumption register directly, since its job is not to argue a case but to give a reader the raw material to check one, which is also why it is the one slide whose own word count on the deck is closer to a reference table than to a narrative panel.

## 32. Forty questions the judges could ask, answered

**Answer.** Forty questions a judging panel could reasonably ask are answered below, grouped by data, diagnosis, regulation, levers, model, economics, ethics and execution, with the ten hardest answered first. Every answer draws only on a tag already resolved in parts A to E of this document, the model tables, or the case brief itself, and section 32 is the one section of this document, by the plan's own rule, where a question mark is permitted.

Table 32.0 lists all forty questions at a glance, before the full answers follow, so a reader preparing for a panel can scan for the specific question they expect and jump to it directly rather than read the section start to finish.

| # | Group | Question |
|---|---|---|
| 1 | Hardest | Why not spend the budget on paid advertising instead |
| 2 | Hardest | What if the open incidental-advice question gets a negative answer from SEBI |
| 3 | Hardest | Why does the bear case miss the 200 bps floor |
| 4 | Hardest | How is this different from what ONL already tried |
| 5 | Hardest | What if the bank will not give you the app slot |
| 6 | Hardest | How do you know F&O will not creep in |
| 7 | Hardest | Why trust team-estimated conversion rates with no pilot data |
| 8 | Hardest | What happens after 31 January |
| 9 | Hardest | Why these four moments and not paid media |
| 10 | Hardest | What is the single biggest risk to the base case |
| 11 | Data | Why does Exhibit 2a's cohort total not match Exhibit 1's active count |
| 12 | Data | What does the 19.2% national active ratio actually measure |
| 13 | Data | How confident are you in the SEBI F&O loss figures given the trader-count disagreement |
| 14 | Diagnosis | Why do you say the problem is awareness and not fear |
| 15 | Diagnosis | Why does the Elevate cohort matter so much in the diagnosis |
| 16 | Diagnosis | Why trust the five whys over a more rigorous root-cause method |
| 17 | Regulation | Is the salary-day card legally settled as not being investment advice |
| 18 | Regulation | Does the warm-cohort defence lever risk violating the inactive-account circular |
| 19 | Regulation | How does the plan handle the CCPA's dark-pattern guidelines given the list is open-ended |
| 20 | Regulation | Why does the plan cite the NSE advertisement code rather than the referral-restriction circular |
| 21 | Levers | Why is the salary-day card the largest lever rather than the holdings check |
| 22 | Levers | Why does RM review convert so much more efficiently than the other levers |
| 23 | Levers | Why keep the workplace-session lever when it is the smallest of the seven |
| 24 | Levers | Why does the new-account lever exist if account opening already works |
| 25 | Model | Why do the levers not simply add to 19,053 |
| 26 | Model | What does the model's twelve-check self-verification actually prove |
| 27 | Model | Does the overlap calculation assume the levers are independent of each other |
| 28 | Model | Why is the dormancy-adjustment factor applied uniformly across every cohort |
| 29 | Economics | Is ₹1,000 a fair benchmark for paid media, or is it chosen to make the plan look good |
| 30 | Economics | Why does the revenue-per-active figure come out so small, ₹62 a year |
| 31 | Economics | Does a 17-month payback mean the plan is not worth doing on direct revenue alone |
| 32 | Economics | Why not chase F&O revenue, which pays a higher brokerage rate |
| 33 | Ethics | How is the salary-day card's neutral fund list actually kept neutral |
| 34 | Ethics | What stops an RM from drifting into an implied recommendation |
| 35 | Ethics | Is a 0.5% opt-out stop line an ethical standard or a number you invented |
| 36 | Ethics | Why does the Dhanteras lever distinguish gold exchange-traded funds from digital gold |
| 37 | Execution | Why does gate G2 sit at week 6 rather than earlier or later |
| 38 | Execution | What happens if a lever's week 13 result lands below its bear-case contribution |
| 39 | Execution | Why does a single person hold Accountable status on four of six workstreams |
| 40 | Execution | What is measured as the proxy for the case's ask for "daily users" |

### 32.1 The ten hardest questions, first

These ten questions are the ones most likely to unsettle a confident reading of the plan, and each is answered here from parts A to E of this document and the model alone, without inventing any new fact to close a gap. The remaining thirty questions that follow are grouped by data, diagnosis, regulation, levers, model, economics, ethics and execution, roughly four to five a group, and every one of the forty draws only on a tag already resolved somewhere in parts A to E, the model tables, or the case brief itself; none introduces a figure, a study or a comparator this document has not already checked.

**Why not spend the budget on paid advertising instead?** The same ₹16.5 lakh of cash that funds our seven levers would buy only 1,649 activated accounts through paid media at a benchmark ₹1,000 each, against 19,053 extra actives from our plan at ₹87 each in the base case, an 11.6 times gap [T13, T14]. Even in the bear scenario, where our plan's extra actives fall to 9,783 and the paid-media comparator's own bear value, a cheaper ₹700 an account, is used against us, our plan still returns 4.2 times as many extra actives for the same cash [T14]. Paid media also pays full price to reach strangers, while the bank's own channels reach people who already bank there at no incremental acquisition cost, which is the structural reason behind the gap, not a one-time pricing coincidence.

**What if the open incidental-advice question gets a negative answer from SEBI?** Section 7.1 of this document already flags this as a genuinely open question, not a settled fact: no SEBI circular, FAQ or informal guidance confirms whether a rule-built, no-default, objective-criteria fund list sits inside the stockbroker's incidental-advice carve-out [D05]. This is one of the five triggers that would change our recommendation [section 2.7]: an adverse reading would mean narrowing the salary-day fund list to a single category or redesigning the mechanism before launch, which would cut materially into the lever's 5,661 extra actives, but it would not remove the underlying strategy of meeting the account inside the bank, since the holdings-check, RM review and Dhanteras levers do not depend on this same carve-out question.

**Why does the bear case miss the 200 bps floor?** The bear case delivers +1.02 percentage points and 9,783 extra actives against a 200 bps floor that needs 16,701 [T11, T8]. This happens because the bear scenario moves all twenty-two scenario-varying assumptions to their weakest plausible value at once, including a larger dormant share (55% against 50%), a weaker re-verification conversion rate (0.42x against 0.50x), and every lever's reach and response rate at its lower bound simultaneously [section 21.4, T9]. No single assumption at its bear value alone pushes the result below the floor; the tornado test in section 23 shows all thirteen of the most sensitive inputs still clearing 2.00 pp on their own [T16]. It is the correlated, system-wide shortfall, not any one weak number, that produces the shortfall.

**How is this different from what ONL already tried?** ONL's past year of outreach, market information, research calls and first-trade offers under a "stay invested" theme, moved the activation rate by 0.04 percentage points [C-PB3 to C-PB5, C-E1]. Scored against the same ten-point compliance test this document's own copy passes, that past approach fails clearly on three points (return claims, inducement, frequency discipline) and partially on two more [section 19.5]. Our seven levers ask a customer to notice an account they already hold and act on a mechanism, a card, a tile, a conversation, a notice, never to act on a market view or an offer; this is the design difference the past year's own result already demonstrates is needed.

**What if the bank will not give you the app slot?** This sits on our risk register at Low probability and Low impact, since the salary-day card and the holdings-check tile both build on infrastructure the bank's own digital-banking team already runs, and the case itself states most ONL account holders are already parent-bank customers [C-CO4]. If the slot is refused or delayed, the fallback is a lighter-weight banner on existing app infrastructure, escalated through the gate G1 review at week 4 rather than discovered at the end of the window [section 12.7, section 28.1].

**How do you know F&O will not creep in?** No lever in this plan touches futures and options; every lever's copy passed a ten-point compliance test that includes a specific check for return claims and inducement, the two failure modes F&O promotion would trigger [section 19.1, section 19.2]. A standing guardrail also tracks the F&O share of new actives weekly, with a 5% stop line that pauses the specific moment driving any F&O drift [section 27.4]. We chose not to build toward F&O revenue deliberately: 87.7% of individual F&O traders lost money in FY26, rising to 88.5% among traders under 30, and the case's own constraint states growth must be responsible [D45, D46, C-K7].

**Why trust team-estimated conversion rates with no pilot data?** We do not ask a reader to trust any single rate in isolation. Every lever's assumption carries a bear and a bull value alongside its base case, checked against the nearest available benchmark from a vendor rate card, a published study, or a comparator's own disclosure, never presented as a measurement [section 0.6, section 30.4]. The tornado test shows the base case clears the 200 bps floor even if any one of the thirteen most sensitive assumptions lands at its weakest plausible value alone [T16]. The validation plan in section 29 of this document, not yet run, exists specifically to test the two largest levers' conversion assumptions against real customer reactions before the full rollout commits further cash to either one.

**What happens after 31 January?** The measurement date is the point the model's figures are computed to, not the point every lever stops. The salary-day card, the investments tile, the RM review script and the ETF instalment mechanic are built as standing product features, not one-off campaigns, and continue running against newly idle and newly dormant accounts after the window closes [section 26.4]. Only the workplace-session calendar and the specific Dhanteras-week notice are time-bound by design; the holdout and weekly dashboard become the mechanism for deciding which continuing features earn further investment, on a rolling basis rather than a single end-of-window read.

**Why these four moments and not paid media?** The four bank-owned moments, salary day, a holdings check, the RM review and Dhanteras, reach 78% of the idle pool through a cohort that already opens the bank's own app for an unrelated reason, at zero incremental acquisition cost [T2, section 2.3]. Paid media would need to acquire the customer's attention from nothing, at a benchmark cost of ₹700 to ₹1,400 an activated account [A61], a cost our own plan's all-in figure of ₹285 an extra active, cash plus internal engineering time, still comfortably beats [section 24.4].

**What is the single biggest risk to the base case?** On a probability-times-impact weighted score, the market falling further than the base case assumes ranks first on our register, at the highest point on both axes [section 28.3]. It is caught early by gate G2 at week 6, checked against the bear-case line of 15.20%, with a pre-agreed response of expanding RM review coverage, the lever least dependent on market sentiment and the one with the widest margin between its expected holdout lift and the smallest lift the holdout can detect, 23 times [T19, section 28.1].

### 32.2 Data questions

**Why does Exhibit 2a's cohort total not match Exhibit 1's active count?** Summing Exhibit 2a's six segment active counts gives 1,20,372, one account different from the exhibit's own stated total because of rounding arithmetic across six segments, and 1,033 accounts above Exhibit 1's unrounded 1,19,339 [C-E1, C-E2a, section 3.9]. This document uses Exhibit 1's 1,19,339 as the true active count throughout and uses Exhibit 2a's percentages only for within-cohort, year-on-year comparisons, where the rounding error affects both years roughly equally.

**What does the 19.2% national active ratio actually measure, and is it comparable to ONL's 14.74%?** It divides NSE active clients by the approximate sum of NSDL and CDSL account counts from two different cutoff dates, so it is an approximation rather than a single reconciled industry figure, not an official combined count for one day [section 4.1, Lane C]. It spans every broker, pricing tier and investor type, while ONL's 14.74% is its own trailing-12-month rate on its own base; the gap between them, four to five percentage points, is large enough to survive that caveat but should not be read as a precise, apples-to-apples comparison, and this document states that limit directly in section 4.10 rather than let the ratio imply more precision than the two underlying counts support.

**How confident are you in the SEBI F&O loss figures given the trader-count disagreement?** The loss-incidence figures, 87.7% overall and 88.5% for under-30 traders, are consistent across every source this research checked [D45, D46]. The trader-count base behind those percentages is not fully reconciled between a Rajya Sabha reply, which gives 7.86 million traders in FY26, and a secondary summary, which gives 87.5 lakh for what appears to be the same metric [C64, D48], a disagreement logged in full in Appendix D of this document. It does not weaken the loss percentages, which are independently corroborated across sources regardless of which trader-count base is used, and this document is careful to cite the loss percentages and the trader counts separately rather than let a disagreement in one undermine confidence in the other.

### 32.3 Diagnosis questions

**Why do you say the problem is awareness and not fear, when the case itself describes risk-averse investors?** The case does describe a risk-averse investor base and a market that strengthens that resolve [C-X3]. The evidence also shows that investor attention falls, not rises, after bad market news, and that lower attention coincides with less trading, not a backlog of suppressed demand [E38, E41]. A year of messages built specifically to address fear, the "stay invested" theme, moved the rate by 0.04 points [C-PB5, C-E1], which is itself evidence that fear was not the binding barrier a message could move; awareness and a recurring anchor are the branches a factual message can actually move, and the five whys and the MECE tree both converge on the same answer independently [sections 10.1, 10.2].

**Why does the Elevate cohort matter so much in the diagnosis?** Elevate grew 36.1% in account count in a year while its trailing one-month activation rate fell from 24% to 13%, an 11-point drop, the sharpest single change anywhere in the cohort table [T4, C-E2a, C-E2b]. It is small enough, 9,471 accounts, that it does not move the total rate much on its own, but it is the clearest single sign that a cohort already familiar with investing is losing engagement, not awareness, which is why the RM review lever, not a card or message, targets it; the premium and preferred cohorts together, including Elevate, show a different pattern from the Salary Account cohort's awareness gap, and the diagnosis in section 10.4 of this document states that difference directly rather than claim one root cause fits every segment equally.

**Why trust the five whys over a more rigorous root-cause method?** The five whys are not run alone; the MECE issue tree and the hypothesis table in sections 10.2 and 10.3 of this document reach the same conclusion from two independent angles, an awareness gap with no recurring anchor, each tested against the case's own evidence rather than assumed. Three methods converging on the same root cause from three different starting points is stronger evidence than any one of the three alone, and the case's own funnel, which names the order customers drop away in without giving a volume at each stage [C-F1 to C-F5], is consistent with all three rather than contradicting any of them.

### 32.4 Regulation questions

**Is the salary-day card legally settled as not being investment advice?** No, and this document states that plainly rather than treating it as resolved. The design, a rule-built, no-default, objective-criteria list in a fixed order, is built to sit as far inside the incidental-advice carve-out as the design can reasonably go, but the question itself remains open pending an informal-guidance request to SEBI [D05, section 7.1].

**Does the warm-cohort defence lever risk violating the inactive-account circular?** The 2021 NSE circular bars any communication urging a client to trade only to avoid being flagged [D31]. Our copy never mentions the account's status or a consequence of not trading; it states an account-hygiene fact and offers an optional instalment, framed identically to how any idle account is messaged [section 16.4]. This is the single most consequential rule in the plan because a badly worded message could otherwise resemble the exact pattern the rule bars.

**How does the plan handle the CCPA's dark-pattern guidelines given the list is open-ended?** The guidelines list specified patterns as an indicative, not fixed, list the regulator may update over time [D76]. This document uses the commonly named categories as a working checklist rather than claiming a closed count, and every copy block is tested against the ten-point test in section 19.1, which covers the dark-pattern categories most relevant to a financial-services nudge directly.

**Why does the plan cite the NSE advertisement code rather than the referral-restriction circular for its inducement argument?** The specific circular, NSE/INSP/63425, is in abeyance since a January 2025 NSE circular suspended it pending an industry proposal [D26]. This document's inducement argument rests on the NSE advertisement code and the general anti-inducement principle visible in the inactive-account circular instead, which remain in force [section 7.4]. The RBI's 2027 Responsible Business Conduct amendment, which takes effect 1 January 2027 inside the last month of the window, is a further, separate rule this document tracks as a near-term compliance item rather than a design constraint the levers need to retrofit, since every lever already avoids the dark patterns that amendment's earlier draft named, independent of when it takes legal effect [D66, section 7.13].

### 32.5 Lever questions

**Why is the salary-day card the largest lever rather than the holdings check, which reaches more accounts?** The holdings-check lever reaches more accounts in absolute terms, 4,13,625 against the salary-day card's 2,96,975 [T19], but its tap-through rate is lower, 4% against 8% [T9], because its four touchpoints are weaker and mostly one-time, while the salary-day card attaches to a strong, recurring moment that repeats three times inside the window [section 13.8].

**Why does RM review convert so much more efficiently than the other levers per account reached?** RM review converts roughly 11.1% of its reached population, against 1.9% for the salary-day card and 0.7% for the holdings check and the Dhanteras notice [section 22.1]. A facts-only conversation reaches a client already engaged in a broader relationship discussion, which is a far higher-intent moment than a card or a message, but the lever is capped by a small reachable population, since a conversation can only happen for accounts an RM already serves.

**Why keep the workplace-session lever when it is the smallest of the seven?** Its cash footprint is close to zero, ₹2,40,000 of the plan's ₹16.5 lakh total [T13], it builds trust no digital channel can replicate, and the holdout design lets the next quarter's session count scale up or down with no sunk engineering cost either way [section 17.11].

**Why does the new-account lever exist if account opening already works?** The case's corrected text states that very few new accounts place a first trade within their first month [C-F4], which removes the reading that new accounts convert quickly on their own. A new account and a thirteen-month-old idle account face the same two-step stall, at login and funding, which is why the guided first-order lever belongs in the same set as the other six rather than standing apart from them [section 9.1], and it is also why the Dhanteras lever, the one lever whose launch date is fixed by the calendar, needs three compliance sign-offs completed before 6 November rather than flexibly scheduled clearance, which is the specific timing risk the risk register in section 28 of this document carries at second rank [section 15.3, section 15.7].

### 32.6 Model questions

**Why do the levers not simply add to 19,053?** A customer can be reached by more than one lever inside the same thirteen weeks, so the model combines overlapping levers by the probability that at least one converts the account, one minus the product of each lever's miss probability, rather than by addition, which would double-count a customer reached by two or more levers [section 21.3].

**What does the model's twelve-check self-verification actually prove?** It proves that an identical rerun of the same code against the same assumptions reproduces the same hash, fc66d11096, and that twelve specific internal consistency conditions hold, from segment counts adding to Exhibit 1 totals to every tornado bar bracketing the base case [section 21.5]. It does not prove the assumptions themselves are correct; it proves the arithmetic built on those assumptions is internally consistent and reproducible.

**Does the overlap calculation assume the levers are independent of each other?** Yes, conditional on reach, and this is stated as a simplification rather than claimed as exact [section 21.6]. The assumption is reasonable where the per-lever probabilities are small, as they are for most cohort-lever pairs, but is a known simplification for the Elite, Elevate and Prestige cohorts, where the RM review probability runs close to 9% to 12% and a real behavioural correlation between responding to an RM and responding to a Dhanteras notice is not separately modelled. The model also treats each lever's response rate as constant across all thirteen weeks, a second stated limit rather than a hidden one; a real rollout would likely see some decay as the easiest-to-convert accounts respond first, so the weekly path in T12 is best read as a planning curve, not a guaranteed trajectory [section 21.6].

**Why is the dormancy-adjustment factor applied uniformly across every cohort?** The model treats dormancy friction as a property of the account rather than the cohort it sits in, applying the same 0.75 base-case factor everywhere [section 21.4]. This is a stated limit: re-KYC friction plausibly differs by cohort, since a Prestige client with an active bank relationship likely completes re-verification faster than a dormant Credit Card account holder, and the model does not separately model that difference.

### 32.7 Economics questions

**Is ₹1,000 a fair benchmark for paid media, or is it chosen to make the plan look good?** It sits inside the ₹616 to ₹1,374 range Groww itself reported for customer acquisition cost across FY25 and H1 FY26, closer to the lower end [F33, F35], and both of Groww's and Angel One's activated-client CAC figures, ₹1,441 and ₹6,076, sit above even our bull-case comparator value of ₹1,400 [F34]. If anything the comparator is generous to paid media, not stacked against it. The cost per extra active also rises in the bear case, ₹169 against the base case's ₹87, for the same reason, arithmetic rather than a change in channel efficiency: the cash budget, ₹16,49,357, is fixed regardless of scenario [T13], so dividing it by a smaller bear-case denominator of 9,783 extra actives gives a larger per-account figure than dividing it by the base case's 19,053 [T11, section 22.4].

**Why does the revenue-per-active figure come out so small, ₹62 a year?** Most newly activated accounts sit inside the Basic Services Demat Account's nil or ₹100 tiers, since they are built around a modest monthly instalment rather than a large lump-sum deposit, and only 15% of new actives are assumed to carry the fuller ₹300 charge [A66, A67, section 25.1a]. Mutual fund direct-plan transactions also carry zero brokerage under the case's own product table [C-PR3].

**Does a 17-month payback mean the plan is not worth doing on direct revenue alone?** The direct broking-revenue case is secondary by design; the plan's larger value sits in a deepened bank relationship this document does not attach an invented rupee figure to [section 25.3]. Measured against the multi-year horizon banks already use for a new banking relationship, rather than the three-month build window, a 17-month payback reads as reasonable, and over three years the direct revenue line alone returns roughly 2.1 times the cash spent to create each extra active [section 25.3a].

**Why not chase F&O revenue, which pays a higher brokerage rate?** Futures and options carry a ₹20.00-an-order rate against cash equities' ₹0.15 [C-PR2, C-PR1], but 87.7% of individual F&O traders lost money in FY26, 88.5% among traders under 30 [D45, D46], and the case's own constraint bars pushing people to trade more where that growth is not responsible [C-K7]. The option screen scores an F&O education push at only 2.25 of 5, held down chiefly by its 1-of-5 fit score [T17], the same score that keeps paid media and finfluencer tie-ups below our own option in every one of the four weight sets tested [T18].

### 32.8 Ethics questions

**How is the salary-day card's neutral fund list actually kept neutral?** It carries only broad, SEBI-regulated categories decided by objective, pre-published criteria, shown in a fixed alphabetical order rather than ranked by performance, with no default selection, so the customer must make an active choice rather than accept whatever appears first [section 12.3].

**What stops an RM from drifting into an implied recommendation?** The script is facts-only and the no-incentive rule removes any link between the conversation and an RM's own pay [section 14.4]. The validation plan's second usability round specifically tests whether the facts-only framing survives a real spoken delivery, and if a pattern of drift appears across more than one observed delivery, the script becomes a mandatory, auditable checklist item rather than a suggested talking point [section 29.5, section 14.7].

**Is a 0.5% opt-out stop line an ethical standard or a number you invented?** It is a control this plan sets itself, tighter than any external floor this research found; no TRAI, SEBI, RBI or exchange circular sets a comparable numeric opt-out-rate threshold, and this document states that plainly rather than attribute the figure to a regulator that did not set it [J58, section 27.4].

**Why does the Dhanteras lever distinguish gold exchange-traded funds from digital gold?** SEBI's own press release of 8 November 2025 cautions that unregulated digital gold carries none of the investor-protection cover a SEBI-regulated product carries, and names gold exchange-traded funds as a regulated alternative [D55, D56]. Our notice names only the SEBI-regulated product the case's own account structure can actually hold, and no lever anywhere in this plan ties a reward to a customer or a relationship manager for completing a trade; the salary-day card's instalment carries no incentive, and the no-incentive rule for RMs is written and enforced through compliance and human resources, not left as an informal expectation [section 12.4, section 14.3].

### 32.9 Execution questions

**Why does gate G2 sit at week 6 rather than earlier or later?** By week 6 the base case has already banked 52.1% of its full-window target, ahead of a simple straight-line pace of six-thirteenths, because the Dhanteras notice's entire contribution lands in weeks 1 and 2 and the salary-day card's week 5 contribution has already landed [section 27.3]. The gap between the bear and base weekly paths also only becomes large enough to clearly separate from around week 6 onward, so checking any earlier risks a false negative and checking later leaves too little runway to respond [section 22.2a].

**What happens if a lever's week 13 result lands below its bear-case contribution?** Gate G3 reads the full-window lift against the three scenarios and assesses each of the seven levers individually; a lever below its bear-case contribution is stopped or redesigned before any post-window extension, while a lever at or above its base-case contribution continues as a standing feature [section 26.2, section 26.4].

**Why does a single person hold Accountable status on four of six workstreams?** A thirteen-week programme with four gates needs one person able to see every workstream's status at once and decide whether a gate passes, rather than six separately accountable owners each judging only their own slice [section 26.3]. The two workstreams where Accountable sits elsewhere, the bank-app tile and the RM review sprint, depend most directly on bank-side infrastructure and staff the head of ONL Trade does not directly manage; the same head also owns the message-frequency guardrail, capped at four sends a person a month with headroom above the two to three messages a typical busiest-month customer would receive, set there specifically to catch a genuine targeting failure rather than trigger on the plan's own intended rhythm [section 27.5].

**What is measured as the proxy for the case's ask for "daily users," given none of the case's own definitions is a daily measure?** The highly active rate, trailing three months, is the nearest proxy the case's own terms supply, since an account trading at least once a quarter is a more frequent user than one merely active on a twelve-month count [section 27.1a]. A monthly ETF instalment is by design a once-a-month trade, not a daily one, and this plan states that limit directly rather than manufacture a daily measure the underlying product behaviour does not produce.

### 32.10 Where the forty answers draw their evidence from

Table 32.1 counts, across the forty answers above, roughly how many times each kind of tag appears, as a check on whether the answers lean on one evidence type to the exclusion of others.

| Tag family | What it resolves to | Rough share of citations across the forty answers |
|---|---|---|
| C-xx | A line from the case brief | About a fifth, concentrated in the data and diagnosis groups, where the case's own exhibits and definitions carry most of the weight |
| T## | A model table | About a third, the single largest family, reflecting how many of the forty questions ultimately resolve to a number the model computes rather than a fact an outside source reports |
| A## | A model assumption | About a sixth, concentrated in the model and lever groups, where a question probes a specific rate rather than a case fact or an output |
| D##, E##, F##, C## (research lane rows) | A verified raw research row | About a fifth, concentrated in the regulation, economics and ethics groups, where an outside rule or benchmark, not the model itself, carries the answer |
| Section references within this document | A specific earlier section of this document | The remainder, mostly cross-references that let a reader follow a short answer back to its full derivation |

No single tag family accounts for more than a third of the citations across the forty answers, which is consistent with the register of questions itself: a panel of judges probing data, diagnosis, regulation, levers, model mechanics, economics, ethics and execution in turn should expect the answers to draw on the case, the model and the outside research lanes in roughly the proportion each group of questions actually requires, not on one dominant source stretched to cover every kind of question.

## 33. A talk track for two speakers, timed slide by slide

**Answer.** Harsh Kawatra and Gursimran Kaur split the eight-slide deck between them, with a clean handover at each slide change, timed to land inside a typical pitch window of roughly nine minutes across the full deck. Each block names the one number it is built to land, so neither speaker carries more than one headline figure at a time, and the handover line at each transition hands the next number to the next speaker rather than repeating what was just said.

### 33.1 Timed blocks

Table 33.1 sets the timing, speaker, content and the one number each block lands, slide by slide.

| Slide | Speaker | Time | Content | The one number landed |
|---|---|---|---|---|
| 1, Cover | Harsh Kawatra | 45 seconds | Names the team, the case and the eight-actor mind map, closing on the answer strip | +2.3 pp, 14.7% to 17.0% |
| 2, Summary | Harsh Kawatra | 75 seconds | ONL against the market, Exhibit 1 as a funnel, the target band, the seven-lever bar | 19,053 extra actives |
| 3, Diagnosis | Gursimran Kaur | 75 seconds | The cohort table, the funnel and where past effort landed, the five whys | 78% of idle accounts are salary customers |
| 4, Strategy | Gursimran Kaur | 90 seconds | The CONCLUSIVELY strip, the eight-option matrix, the four moments on the bank app | 4.40 against 2.60 on the option screen |
| 5, Impact | Harsh Kawatra | 90 seconds | The moneyshot card, the waterfall, three scenarios, the tornado | 11.6 times the paid-media comparator |
| 6, Execution | Gursimran Kaur | 75 seconds | The thirteen-week Gantt, the four gates, the holdout and the risk strip | 23 times the minimum detectable effect on RM review |
| 7, Appendix | Harsh Kawatra | 45 seconds | The model formula, the assumptions that move the answer, the rules checklist | Every check passes at hash fc66d11096 |
| 8, Thank You | Gursimran Kaur | 45 seconds | The THEREFORE card, the team table, the close | ₹87 of cash per extra active |

### 33.2 Clean handovers

Table 33.2 gives the exact handover line at each of the seven transitions, built so the next speaker's first sentence lands the slide's own number rather than restating the prior slide.

| Transition | Handover line |
|---|---|
| Slide 1 to 2 | Harsh Kawatra: "That is who is in the room. Gursimran will take you through what the account already holds, and how we get to 19,053." (Hands to Harsh's own next block; both slides 1 and 2 run with Harsh, so this line instead reads: "Let me show you where those 19,053 extra actives come from.") |
| Slide 2 to 3 | Harsh Kawatra to Gursimran Kaur: "That is the target. Gursimran will show you why 78% of the accounts behind it belong to one single cohort." |
| Slide 3 to 4 | Gursimran Kaur: "That is the root cause. Here is the option screen that turns it into a strategy, scored against seven alternatives." |
| Slide 4 to 5 | Gursimran Kaur to Harsh Kawatra: "That is what we build. Harsh will show you what it is worth, against the same cash spent on paid media." |
| Slide 5 to 6 | Harsh Kawatra to Gursimran Kaur: "That is the impact. Gursimran will walk you through the thirteen weeks that get us there, gate by gate." |
| Slide 6 to 7 | Gursimran Kaur to Harsh Kawatra: "That is the plan and the guardrails. Harsh will show you where every number on this deck actually comes from." |
| Slide 7 to 8 | Harsh Kawatra to Gursimran Kaur: "That is the appendix. Gursimran will close with the one line this whole deck is built to support." |

The two slides Harsh Kawatra carries alone in sequence, Cover and Summary, do not need a speaker handover between them, only a content handover from the mind map to the numbers it feeds; the note above states that explicitly rather than force an artificial speaker change where none occurs.

### 33.3 A contingency line for each speaker if a number is challenged mid-pitch

A judge may interrupt a block to press on a specific figure before the speaker reaches the slide that backs it. Table 33.3 gives each speaker one short, rehearsed line per slide that restates the figure's source without reading out a full tag string, so the pitch does not stall while the speaker searches for the right section number.

| Slide | If challenged on | The speaker's line |
|---|---|---|
| 2, Summary | The 19,053 figure | "That is our model's base case, built lever by lever from the case's own account exhibits; the appendix slide carries the formula." |
| 3, Diagnosis | The 78% figure | "That comes directly from the case's own cohort exhibit, Exhibit 2a, for September 2026." |
| 4, Strategy | The 4.40 score | "That is our recommendation scored against seven alternatives on the same five weighted criteria, and it leads under all four weightings we tested, including three we built specifically to challenge our own choice of weights." |
| 5, Impact | The 11.6 times figure | "Same cash, two routes: ₹16.5 lakh buys 19,053 extra actives through the bank, or 1,649 through paid media at a benchmark rate we took from a listed broker's own disclosure." |
| 6, Execution | The 23 times figure | "That is the RM review lever's expected lift against the smallest lift our holdout design could detect; every lever clears its own detection threshold by at least four times." |

Each line is built to answer the challenge in one sentence and then return to the slide's own flow, since a speaker who tries to reconstruct the full derivation live risks losing the pitch's own pace; the full derivation sits in this document for exactly the judge who wants it after the pitch ends.
