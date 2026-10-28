## 21. The model builds 19,053 extra actives lever by lever from reach, response and overlap

**Answer.** In our model, seven levers acting on 6,89,375 idle accounts [T2] produce 19,053 extra active accounts in the base case by multiplying a reach rate by a response rate for each lever, then combining the levers that touch the same account by the chance that at least one of them lands, not by simple addition [T10]. The dormant accounts inside that idle pool get a lower conversion chance, since many need re-verification before they can trade again, and the model applies that friction once, uniformly, rather than lever by lever. The method runs in twelve checks, all of which print PASS at hash fc66d11096, and it is a reach-times-response model built on team-estimated conversion assumptions, not a measured funnel, a limit we say plainly here because it matters to how much weight a judge should put on any single lever's number.

### 21.1 The method in plain words

The model starts from the account book Trade Private Limited already has: 8,09,746 eligible accounts in September 2026, of which 1,19,339 traded in the trailing twelve months, a 14.74% activation rate, and 6,89,375 did not [C-E1, T2]. It asks, for each of six customer cohorts (Prestige, Elite, Elevate, Preferred, Salary Account, Credit Card), how many of that cohort's idle accounts a given lever can reach, and of those reached, how many places a first executed order inside the thirteen-week window. It does this for the four levers that run by outreach (the salary-day card, the holdings-check rediscovery message, the RM review conversation and the Dhanteras notice), separately for the workplace sessions (which are sized by sessions and attendees rather than by a reach rate on the idle base), and separately again for the warm cohort and the newly opened accounts (each of which uses its own single reach-and-response pair rather than the four-lever overlap calculation). Every account a lever reaches but fails to convert stays in the idle pool for the next lever to try, which is what the overlap-by-multiplication step in 21.3 is built to capture correctly.

### 21.2 Inputs: the assumptions register and the lever parameters

Twenty-two of the model's sixty-seven assumptions carry a different value in the bear, base and bull scenarios; the rest are held constant because they describe a fixed cost, a fixed calendar fact or a case figure that does not vary by how optimistic the scenario is. Of the twenty-two, nineteen feed directly into the four outreach levers, the workplace sessions and the warm-cohort and new-account additions, and the remaining three are the business-as-usual drift rate, the paid-media comparator used in section 24, and the orders-a-year figure used in section 25.

| ID | What it is | Base | Bear | Bull | Lane / basis |
|---|---|---|---|---|---|
| A20 | Salary customers who open the parent bank's app in a month | 55% | 45% | 62% | F |
| A21 | Tap-through on the salary-day card over three salary credits | 8% | 6% | 10% | F |
| A22 | First order after a tap, with single sign-on and a bank mandate | 32% | 26% | 38% | E, F |
| A23 | Idle accounts reached through any owned channel, consent given | 60% | 50% | 68% | F |
| A24 | Tap-through on the rediscovery message or tile | 4% | 3% | 5% | F |
| A25 | First order after rediscovery | 25% | 20% | 30% | F |
| A26 | RM coverage multiplier on the base cohort coverage pattern | 1.00x | 0.80x | 1.15x | B |
| A27 | First order after an RM review conversation | 15% | 11% | 19% | B, E |
| A28 | Idle accounts reached in Dhanteras and Diwali week | 50% | 42% | 56% | G |
| A29 | Tap-through on the factual gold ETF and Muhurat notice | 3.0% | 2.2% | 4.0% | G, F |
| A30 | First order after the Dhanteras tap | 30% | 25% | 35% | G |
| A31 | Workplace education sessions | 40 | 30 | 50 | B |
| A32 | Attendees a session | 120 | 100 | 140 | B |
| A33 | First order among idle attendees | 10% | 7% | 13% | E |
| A35 | Warm cohort reached with a servicing message | 70% | 60% | 78% | F |
| A36 | Incremental re-trade among the reached warm cohort | 20% | 15% | 25% | E |
| A39 | Lift in the 90-day first-order rate for new accounts, from guided onboarding | 10% | 7% | 13% | E, H |
| A10 | Share of idle accounts dormant 24 months or more | 50% | 55% | 45% | C, D |
| A11 | Conversion of a dormant account relative to a live one, after re-KYC or video IPV | 0.50x | 0.42x | 0.58x | D |

*T9 is this table reproduced in full in Appendix B; A02 (the business-as-usual drift rate) is treated separately in 21.4 because it does not feed a lever.*

### 21.3 Overlap by multiplication: why the levers do not simply add

A customer in the Salary Account cohort can, in principle, be reached by the salary-day card, the holdings-check message and the Dhanteras notice inside the same thirteen weeks. If the model simply added each lever's expected conversions for that cohort, an account that responds to two levers would be counted twice, inflating the total. The model instead treats each lever's reach-times-response figure as the probability that lever, acting alone, converts a given account, and combines the levers that can touch the same cohort by asking for the probability that at least one of them converts the account, which is one minus the probability that every one of them misses.

Take the Elite cohort, which has 24,274 idle accounts [T2] and is reachable by the holdings-check message, an RM review conversation and the Dhanteras notice (the salary-day card does not apply outside the Salary Account cohort). The three per-lever conversion probabilities, each the product of a reach rate and a response rate, are:

| Lever | Reach rate | Response rate | Combined probability | Tag |
|---|---|---|---|---|
| Holdings check (rediscovery) | 60% (A23) | 25% x 4% (A24 x A25) | 0.60% | A23, A24, A25 |
| RM review | 60% coverage x 1.00x multiplier (A26) | 15% (A27) | 9.00% | A26, A27 |
| Dhanteras notice | 50% (A28) | 3.0% x 30% (A29 x A30) | 0.45% | A28, A29, A30 |

Adding these three probabilities naively gives 0.60% + 9.00% + 0.45% = 10.05%. The model instead computes 1 minus the product of each lever's miss probability: 1 − (1 − 0.0060) x (1 − 0.0900) x (1 − 0.0045) = 1 − (0.9940 x 0.9100 x 0.9955) = 1 − 0.9004 = 9.96%. The gap between 10.05% and 9.96% is small here because none of the three probabilities is large on its own, but the RM review probability (9.00%) is the biggest single contributor, and it is exactly the lever whose probability the multiplicative method discounts hardest against double counting. Applying the dormancy-adjusted effective idle base for Elite, 24,274 x 0.75 = 18,206 (the 0.75 dormancy-adjustment factor is explained in 21.4), to the 9.96% combined probability gives 18,206 x 0.0996 = 1,813 extra actives for the Elite cohort, which matches the 1,812 the model reports in T10 to within a single account of rounding.

A second worked example, on the Preferred cohort, shows the same method where the RM probability is smaller and the gap between naive addition and the multiplicative method shrinks accordingly. Preferred's RM review probability is min(1.0, 0.35 x 1.00) x 15% = 35% x 15% = 5.25% (A26 applies a base coverage share of 35% for Preferred, against 60% for Elite), its holdings-check probability is the same 0.60% every non-Salary cohort carries, and its Dhanteras probability is the same 0.45%. Naive addition gives 0.60% + 5.25% + 0.45% = 6.30%; the multiplicative method gives 1 − (1 − 0.0060) x (1 − 0.0525) x (1 − 0.0045) = 1 − (0.9940 x 0.9475 x 0.9955) = 1 − 0.9377 = 6.23%, a gap of only 0.07 points, smaller than Elite's 0.09-point gap, because Preferred's largest single probability (5.25%) is itself smaller than Elite's (9.00%). Applying this to Preferred's effective idle base of 36,188 (from the table above) gives 36,188 x 0.0623 = 2,255 extra actives, close to the 2,259 the model reports in T10 for Preferred. The pattern across both cohorts is consistent: the overlap correction grows larger wherever one lever's own probability, almost always the RM review probability for the premium and preferred cohorts, is itself large, and shrinks toward zero wherever every lever touching a cohort has a small probability on its own.

A third worked example, on Prestige, the smallest cohort at 3,096 accounts and 2,012 idle [T2], shows the method holding even at the smallest scale in the table. Prestige's RM review probability is min(1.0, 0.80 x 1.00) x 15% = 80% x 15% = 12.0% (the highest cohort coverage share of any cohort, A26's base pattern), its holdings-check probability is the standard 0.60%, and its Dhanteras probability is the standard 0.45%. Naive addition gives 0.60% + 12.0% + 0.45% = 13.05%; the multiplicative method gives 1 − (1 − 0.0060) x (1 − 0.1200) x (1 − 0.0045) = 1 − (0.9940 x 0.8800 x 0.9955) = 1 − 0.8707 = 12.93%, a gap of 0.12 points, the widest proportional gap of the three worked examples in this section, consistent with Prestige carrying the largest single lever probability (12.0%) of any cohort. Applying this to Prestige's effective idle base of 1,509 (from the table in 21.4) gives 1,509 x 0.1293 = 195 extra actives, matching T10's reported Prestige total of 195 exactly. Across all three worked cohorts, Elite, Preferred and Prestige, the pattern holds without exception: the overlap correction is largest wherever the RM review probability itself is largest, since RM review is consistently the single biggest probability any premium or preferred cohort carries, and the correction shrinks toward the Elite-sized or smaller gap wherever RM coverage is lower.

The workplace-session lever and the warm-cohort and new-account additions sit outside this overlap calculation because they do not compete for the same idle pool in the same way: the workplace sessions reach attendees at specific employer sites rather than a share of the general idle base, and the warm cohort and new accounts are each sized from a population (the 11,479 mid-point roll-off accounts and the 18,972 accounts opened in the window) that the four outreach levers are not separately modelled as touching.

### 21.4 The dormancy adjustment, the eligible base, and the business-as-usual rate by scenario

Half of the model's idle accounts, by the base assumption A10, have gone without a qualifying trade for twenty-four months or more, the condition the case calls dormant [C-D4] and the exchange's own circular of 25 October 2024 calls inactive in its text; we translate every such mention to the case's own term, dormant. A dormant account converts at only half the rate of a live idle account once re-verified, by assumption A11, because re-KYC or video in-person verification is itself a step a customer must complete before any message or card can lead to a trade. The model applies this as a single multiplier on every idle account: effm = (1 − A10) + A10 x A11 = (1 − 0.50) + 0.50 x 0.50 = 0.75 in the base case. Every cohort's idle count is multiplied by this 0.75 factor before any lever's reach rate is applied, which is why the Elite worked example in 21.3 used an effective idle base of 18,206 rather than the raw 24,274.

The same 0.75 factor applies to every cohort's idle count, since the model treats dormancy friction as a property of the account, not of the cohort it sits in. Carrying this across all six cohorts shows how much of the idle pool the model treats as genuinely reachable before any lever's own reach rate is applied.

| Segment | Idle accounts | Effective idle (x 0.75) | Tag |
|---|---|---|---|
| Prestige | 2,012 | 1,509 | T2 |
| Elite | 24,274 | 18,206 | T2 |
| Elevate | 5,967 | 4,475 | T2 |
| Preferred | 48,250 | 36,188 | T2 |
| Salary Account | 5,39,954 | 4,04,966 | T2 |
| Credit Card | 68,918 | 51,689 | T2 |
| Total | 6,89,375 | 5,17,031 | T2 |

The 0.75 multiplier itself moves by scenario, since both A10 (the share of idle accounts that are dormant) and A11 (a dormant account's relative conversion rate) carry bear and bull values.

| Scenario | A10 | A11 | Dormancy-adjustment factor |
|---|---|---|---|
| Bear | 55% | 0.42x | (1 − 0.55) + 0.55 x 0.42 = 0.68 |
| Base | 50% | 0.50x | (1 − 0.50) + 0.50 x 0.50 = 0.75 |
| Bull | 45% | 0.58x | (1 − 0.45) + 0.45 x 0.58 = 0.81 |

The bear scenario carries both a larger dormant share (55% against 50%) and a weaker re-verification conversion rate (0.42x against 0.50x), so its dormancy-adjustment factor, 0.68, discounts the idle pool by nearly a third before any lever's reach rate is even applied, the single largest reason the bear scenario's extra-active count falls as far as it does relative to the base case.

The eligible account base itself keeps growing through the programme window. Net account growth runs at 6,324 accounts a month [T8], the case's own (8,09,746 minus 7,33,855) divided by 12 [C-E1], so the base at the 31 January 2027 measurement date, four months after the 30 September 2026 snapshot, is 8,09,746 + 4 x 6,324 = 8,35,042 accounts [T8]. The business-as-usual activation rate at that measurement date is not fixed; it differs by scenario through assumption A02, and we take each scenario's value directly from the model rather than deriving one from another, since back-solving a rate from a count, or the reverse, is exactly the error the plan rules out.

| Scenario | Business-as-usual rate (A02) | Accounts on 31 Jan 2027 | Tag |
|---|---|---|---|
| Bear | 14.59% | 8,35,042 | A02, T8 |
| Base | 14.74% | 8,35,042 | A02, T8 |
| Bull | 14.84% | 8,35,042 | A02, T8 |

The bear scenario's business-as-usual rate sits 15 bps below the base, reflecting a continued mild drift down from the flat 14.70% to 14.74% path the case already shows across 2025 to 2026 [C-E1]; the bull scenario sits 10 bps above it. Reaching +200 bps over business as usual at this measurement date requires 16,701 extra actives, and +300 bps requires 25,051 [T8]; the base case's 19,053 extra actives [T10] sits inside that band, a point developed fully in section 22.

### 21.5 The twelve checks, run and passing

The model is self-verifying: it runs twelve internal checks after every calculation and halts on nothing short of a full pass. All twelve print PASS at hash fc66d11096 [M]. A hash is a short fingerprint computed from every output value together, so an identical rerun of the same code against the same assumptions reproduces the same hash exactly, and any change to an assumption, a formula or an output changes it; a verifier who reruns the model and sees fc66d11096 again has independently confirmed nothing in this document's numbers has drifted from the model that generated them.

| # | Check | Result |
|---|---|---|
| 1 | Segment counts add to Exhibit 1 totals | PASS |
| 2 | Cohort-weighted activation rate within 0.2 pp of Exhibit 1's own rate | PASS |
| 3 | Idle pool within 0.2% of base minus active | PASS |
| 4 | Roll-off range positive and ordered (lower bound below upper bound) | PASS |
| 5 | Scenarios ordered bear less than base less than bull on extra actives | PASS |
| 6 | Base case sits inside the brief's 200 to 300 bps band | PASS |
| 7 | Lever split adds exactly to the segment total | PASS |
| 8 | The weekly ramp (T12) ends at the same rate the scenario run reports | PASS |
| 9 | Our option scores highest of all eight options in the screen (T17) | PASS |
| 10 | Our option leads under three other weight sets, in addition to the base weights (T18) | PASS |
| 11 | Every lever's expected holdout lift exceeds its minimum detectable effect (T19) | PASS |
| 12 | Every tornado bar in T16 brackets the base-case result | PASS |

### 21.5a The workplace-session arithmetic, a different structure from the four outreach levers

The workplace lever is sized differently from the four outreach levers, since it does not apply a reach rate against the idle base; it applies a session count and an attendee count against the share of the Salary Account cohort that is idle. The base-case calculation is 40 sessions (A31) x 120 attendees a session (A32) x the Salary Account idle share (5,39,954 / 6,27,853 = 85.99%) x 10% first-order rate among idle attendees (A33). Working through this: 40 x 120 = 4,800 total attendees; 4,800 x 0.8599 = 4,128 idle attendees among them; 4,128 x 0.10 = 413 extra actives, which matches T10's reported workplace figure exactly. This lever's size is capped by how many sessions the team can run (A31's bear-to-bull range of 30 to 50 sessions) rather than by a reach rate against a large population, which is why it remains the smallest of the seven levers even though its per-attendee response rate (10%) is higher than several of the outreach levers' response rates.

### 21.6 Limits of the model

The model is a reach-times-response model with team-estimated conversion assumptions, not a measured funnel. Every tap-through rate, every order-after-tap rate and every coverage multiplier in 21.2 is a team estimate checked against the nearest available benchmark, in most cases a vendor figure for in-app card engagement, a published broker CAC, or a behavioural-economics study conducted outside this specific customer base, never a measurement taken on ONL's own accounts. Nowhere in this document does a model result get reported as something we measured; every sentence that carries one says in our model, because that is what it is. Three further limits are worth stating here rather than waiting for a judge to raise them. First, the model treats each lever's response rate as constant across the thirteen weeks within a scenario, when a real rollout would likely see some decay as the easiest-to-convert accounts respond first. Second, the overlap calculation in 21.3 assumes each lever's conversion probability is independent of the others conditional on reach, an assumption that is reasonable when the probabilities are small, as they are for most cohort-lever pairs, but is a simplification for the Elite, Elevate and Prestige cohorts, where the RM review probability runs close to 9% to 10% and genuine behavioural correlation (a customer who would respond to an RM is plausibly also likelier to respond to a Dhanteras notice) is not separately modelled. Third, the dormancy adjustment in 21.4 applies one multiplier, 0.75 in the base case, uniformly across every cohort, when re-KYC friction plausibly differs by cohort (a Prestige client with an active bank relationship likely completes re-verification faster than a dormant Credit Card account holder).

### 21.7 How to rerun the model

The model is one file, and rerunning it after any assumption change is a single command, executed from the repository root.

```
python -X utf8 arthikkhayal-case/model/activation_model.py
```

Adding `--dry` to the command prints the same summary and the full set of tables to the screen without writing any file, a safe way to check a candidate assumption change before it overwrites the committed outputs.

The run prints `CHECKS 12/12 HASH fc66d11096` followed by a line of headline findings, and writes `model_outputs.json`, `model_tables.md` and `deck/values.json`; a change to any locked number must flow through the update protocol in section 5.3, which requires rerunning the model, logging the new hash in `DECISIONS.md`, and propagating the changed figure to every section and slide that cites it.

Exhibit for the deck: the appendix slide's A1 panel reproduces the three-line formula (reach x response, combined by one minus the product of misses, plus workplace, warm cohort and new accounts) directly from 21.3, with the Elite worked example as the panel's single numeric illustration.

## 22. The active rate rises from 14.74% to 17.02% by 31 January 2027 in the base case, within a range of +1.02 to +3.94 points

**Answer.** In our model, the base case moves the activation rate from 14.74% to 17.02% by 31 January 2027, a gain of +2.28 percentage points on 19,053 extra active accounts, with the bear and bull scenarios bracketing that result at +1.02 and +3.94 points [T11]. The base case clears the brief's 200 to 300 bps target band [C-K1]; the bear case does not, a result we state plainly rather than soften, because a judge checking the numbers will find it in thirty seconds, and the honest reading matters more than a comfortable one.

### 22.1 The lever table and what each one contributes

Seven levers (five outreach levers by segment, plus the warm-cohort and new-account additions) sum to 19,053 extra active accounts in the base case, with the full segment-by-lever breakdown carried in T10.

| Lever | Extra actives, base case | Share of 19,053 | Tag |
|---|---|---|---|
| Salary day | 5,661 | 29.7% | T10 |
| RM review | 4,083 | 21.4% | T10 |
| Rediscover (holdings check) | 3,081 | 16.2% | T10 |
| Dhanteras | 2,311 | 12.1% | T10 |
| Warm cohort defence | 1,607 | 8.4% | T10 |
| New accounts, guided first order | 1,897 | 10.0% | T10 |
| Workplace | 413 | 2.2% | T10 |
| Total | 19,053 | 100.0% | T10 |

The salary-day card is the single largest lever, carrying almost three in every ten extra actives, because it is the only lever aimed squarely at the Salary Account cohort, which holds 5,39,954 of the 6,89,375 idle accounts, 78% of the idle pool [T2]. The RM review conversation is the second largest, at 21.4%, concentrated entirely in the four premium and preferred cohorts, whose combined 1,08,576 accounts [C-E2a] run at activation rates several times the Salary Account cohort's, so a smaller population still returns a large number of extra actives because the response rate per reviewed account (15%, A27) is the highest of any lever in the table.

Dividing each lever's extra-active count by the reached population it acts on, from T19's reach figures, gives a rough "yield per account reached" that explains why the lever-size ranking in the table above is not the same as a ranking by efficiency. RM review converts at roughly 4,083 / 36,642 = 11.1% of its reached population, far above every other lever; the salary-day card converts at roughly 5,661 / 2,96,975 = 1.9%; the holdings check converts at roughly 3,081 / 4,13,625 = 0.7%; and the Dhanteras notice converts at roughly 2,311 / 3,44,688 = 0.7%. RM review is the most efficient lever per account reached by a wide margin, but it is capped by a small reachable population (a facts-only conversation can only happen for accounts an RM already serves), while the salary-day card and the holdings check trade a lower per-account yield for a reachable population an order of magnitude larger, which is exactly why the two different lever shapes, a targeted conversation and a broad card or message, sit together in the same plan rather than the model simply running more of whichever lever converts best.

### 22.2 The weekly path to 17.02%

The model tracks the activation rate week by week across the thirteen-week window that starts 2 November 2026, as each lever's reach and response accrue on its own timing profile (salary-day cards land on salary credit weeks 5, 9 and 13; the Dhanteras notice is weighted almost entirely into weeks 1 and 2; the RM review sprint runs weeks 2 to 10; the rest build more evenly across the window) [T12].

| Week | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bear | 14.71 | 14.82 | 14.90 | 14.97 | 15.14 | 15.20 | 15.27 | 15.33 | 15.51 | 15.57 | 15.60 | 15.63 | 15.76 |
| Base | 14.99 | 15.20 | 15.35 | 15.48 | 15.82 | 15.94 | 16.06 | 16.18 | 16.53 | 16.64 | 16.69 | 16.74 | 17.02 |
| Bull | 15.28 | 15.65 | 15.89 | 16.11 | 16.68 | 16.88 | 17.07 | 17.25 | 17.86 | 18.03 | 18.11 | 18.18 | 18.68 |

*Figures are percentage points of the activation rate, tracked each week of the thirteen-week programme starting 2 November 2026.*

The base case's weekly path is not smooth: it steps up sharply in week 5 (15.48% to 15.82%), week 9 (16.18% to 16.53%) and week 13 (16.74% to 17.02%), the three salary-credit weeks when the salary-day card's largest single contribution lands, and it steps up again across weeks 1 and 2 (14.74% implied starting point to 14.99% then 15.20%), when the Dhanteras notice's heavily front-loaded weighting is concentrated. The week 6 figure, 15.94% in the base case and 15.20% in the bear case, is the number the execution plan checks the live rollout against at gate G2, detailed in section 26.

### 22.2a How the bear and base paths diverge over the window

The gap between the bear and base weekly rates is not constant; it widens as the window progresses, because the base case's levers compound week over week while the bear case's weaker reach and response rates compound more slowly.

| Week | Base rate | Bear rate | Gap (base minus bear) |
|---|---|---|---|
| 1 | 14.99% | 14.71% | 0.28 pp |
| 6 | 15.94% | 15.20% | 0.74 pp |
| 9 | 16.53% | 15.51% | 1.02 pp |
| 13 | 17.02% | 15.76% | 1.26 pp |

*Each gap is the base rate minus the bear rate for that week, both taken directly from T12.*

The gap more than quadruples from week 1 (0.28 pp) to week 13 (1.26 pp), which means a tracking exercise that only compared week 1 results against the two scenario lines would see almost no separation between them and could be lulled into thinking the scenarios matter less than they do; the separation only becomes large enough to clearly tell the two paths apart from around week 6 onward, which is a further, independent reason gate G2 sits at week 6 rather than earlier in the window.

### 22.3 Named assumptions by scenario

Each scenario moves the same set of assumptions to their bear, base or bull value together, never one at a time; the full set is in T9 and section 21.2, but the three that move the result most (by the tornado ranking in section 23) illustrate the pattern.

| Assumption | What it governs | Bear | Base | Bull |
|---|---|---|---|---|
| A21 (salary-day tap-through) | How many salary customers tap the card | 6% | 8% | 10% |
| A27 (RM review to order) | How many reviewed clients place a first order | 11% | 15% | 19% |
| A22 (first order after tap) | How many tapped salary customers complete an order | 26% | 32% | 38% |
| A02 (business-as-usual drift) | The rate the base would reach with no programme at all | 14.59% | 14.74% | 14.84% |

### 22.4 Scenario summary

| Measure | Bear | Base | Bull |
|---|---|---|---|
| Extra active accounts | 9,783 | 19,053 | 32,037 |
| Activation rate, 31 Jan 2027 | 15.76% | 17.02% | 18.68% |
| Change from 14.74% | +1.02 pp | +2.28 pp | +3.94 pp |
| Highly active (T3) rate | 11.3% | 12.4% | 14.0% |
| Cash cost per extra active | ₹169 | ₹87 | ₹51 |

The cash cost per extra active moves inversely with the extra-active count across the three scenarios, which is arithmetic rather than a separate finding: the cash budget itself, ₹16,49,357, is fixed regardless of scenario [T13], so dividing that same fixed number by a smaller bear-case denominator (9,783) gives a larger per-account cost (₹169), and dividing it by a larger bull-case denominator (32,037) gives a smaller one (₹51). This is worth stating plainly so the ₹169 bear-case figure is not mistaken for a sign that the programme becomes less efficient in a weak scenario; it is the same cash spread across fewer successful outcomes, not a rise in anyone's individual channel rate.

The highly active rate, the share of accounts that traded in the trailing three months [C-D2], rises from today's 10.1% [C-E1] to a base-case 12.4% and a bear-case 11.3%, which shows that even the bear scenario still moves the more demanding daily-user measure the case asks for [C-Q1] alongside the twelve-month activation rate.

### 22.5 The honest reading: the bear case misses the 200 bps floor

The brief asks for 200 to 300 bps of activation gain in three months [C-K1]. The base case clears the floor, at +2.28 pp against a 200 bps (+2.0 pp) floor, a margin examined fully in section 23. The bear case does not: +1.02 pp is 98 bps short of the 200 bps floor, and 9,783 extra actives against a target of 16,701 for +200 bps [T8, T11] is a shortfall of 6,918 accounts. We say this without softening it, because every number needed to see it sits in T8 and T11 already, and a deck that hid it would lose more credibility than one that states it.

What would have to be true for the bear case to close most of that 98-bps gap inside the same thirteen weeks is a visible, trackable condition, not a hope: the rollout would need to detect, by week 6, that the tracked rate is running closer to the bear path (15.20%) than the base path (15.94%), and respond by adding RM review capacity, the one lever whose response rate (A27, 11% to 19%) carries the single widest spread in the tornado ranking after the salary-day tap-through rate (section 23). This is exactly the trigger built into gate G2 of the execution plan (section 26): a week 6 rate check against the bear line, with an immediate, pre-agreed response of expanding RM reviews rather than waiting out the remaining seven weeks on the original coverage plan.

Exhibit for the deck: the waterfall from 14.74% to 17.02%, lever by lever in the order of 22.1, with the bear and bull scenario markers shown as dashed lines either side of the base-case bar, and the honest-reading sentence from 22.5 as the slide's lower-third callout.

## 23. The base case clears the 200 bps floor by 28 bps, and no single input at its bear value pushes it below +2.0 points

**Answer.** In our model, the base case's +2.28 pp result clears the brief's 200 bps floor by only 28 bps [T11, C-K1], a margin thin enough that we state it as the pre-empted weakness before any judge needs to raise it. Moving any one of the model's thirteen most sensitive assumptions to its bear value, on its own, still keeps the result above +2.0 pp [T16]; what drags the full bear scenario down to +1.02 pp, below the floor, is twenty-two assumptions moving unfavourably together, not any one of them acting alone.

### 23.1 The pre-empted weakness, stated first

The base case clears the floor by 28 bps: +2.28 pp against a +2.00 pp (200 bps) requirement [T11, C-K1]. That is not a wide margin. A small, broad-based shortfall across several assumptions at once, smaller than any single tornado bar in T16 but spread across more than one input, could plausibly erase it. We treat this as the honest weak point of the base case rather than a footnote, and the tornado analysis in 23.2 is built specifically to show how much slack the result does and does not have.

### 23.2 The tornado: thirteen assumptions ranked by spread

The model reruns the base case thirteen times, each time moving one assumption to its bear value and once to its bull value while holding every other assumption at its base value, and records the resulting pp change each time. Sorted by the width between the bear-value and bull-value result (the spread), the thirteen assumptions that move the base case's result the most are:

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

*pp is the change in activation rate from the 14.74% baseline, in percentage points. A spread is the pp result at the assumption's bull value minus the pp result at its bear value, with every other assumption held at its base value.*

Every single one of these thirteen bear-value results, even the lowest, A21's 2.11 pp, stays above the 2.00 pp floor. That is the central finding of this section: the base case has enough structural slack that no single assumption, moved alone to its weakest plausible value, can push the result below the brief's target.

### 23.3 How many assumptions actually move, and what that means for the bear case

Twenty-two of the model's sixty-seven assumptions carry a different value in the bear scenario than in the base scenario; the rest are fixed costs or calendar facts that do not change by scenario. The thirteen in the tornado above are the subset whose individual movement most changes the result; the remaining nine (A23, A28, A30, A31, A32, A33, A35, and the two already-near-zero-impact remainder) also move, but with a smaller individual effect than the thirteen shown.

| Group | Assumptions | Count |
|---|---|---|
| Business-as-usual drift | A02 | 1 |
| Dormancy and re-KYC friction | A10, A11 | 2 |
| Salary-day lever | A20, A21, A22 | 3 |
| Holdings-check (rediscovery) lever | A23, A24, A25 | 3 |
| RM review lever | A26, A27 | 2 |
| Dhanteras lever | A28, A29, A30 | 3 |
| Workplace sessions | A31, A32, A33 | 3 |
| Warm cohort defence | A35, A36 | 2 |
| New-account guided onboarding | A39 | 1 |
| Paid-media comparator (section 24, not a lever) | A61 | 1 |
| Orders a year (section 25, not a lever) | A63 | 1 |
| Total | | 22 |

The full bear scenario in T11 moves all twenty of the lever-relevant assumptions in this table to their bear value at once (the comparator A61 and the orders-a-year A63 do not affect the activation result, only the cost and revenue figures in sections 24 and 25). That simultaneous movement is what the single-input tornado test in 23.2 cannot show on its own: a tornado bar answers "what if only this one input is wrong," while T11's bear column answers "what if every one of them leans unfavourable together." The answer to the second question is +1.02 pp, 9,783 extra actives [T11], 98 bps short of the 200 bps floor. What would have to be true for this to be the real outcome is not a single mis-estimated number; it is a correlated, system-wide shortfall across salary-day tap-through, RM conversion, holdings-check response, Dhanteras response, workplace attendance, warm-cohort re-trade and new-account lift all landing at once near their weakest plausible values, together with a business-as-usual rate that keeps drifting down rather than holding flat. That is a materially less likely single event than any one assumption being off, which is why we read the tornado result (no single point of failure) and the full bear scenario (a real possibility, not a remote one, since markets have in fact been unfavourable for the twelve months behind this case [C-PB1]) as two different, both-true facts about the same model.

### 23.4 What the top three sensitivities would look like as rates

Converting the three widest tornado bars back into activation-rate terms makes the practical stakes concrete: a single weak input moves the headline rate by roughly a third of a percentage point either way, not enough on its own to threaten the floor, but enough to matter for how the first six weeks of tracking should be read.

| Assumption | Rate at bear value | Rate at base value (14.74 + 2.28) | Rate at bull value |
|---|---|---|---|
| A21 (salary-day tap-through) | 16.85% | 17.02% | 17.19% |
| A27 (RM review to order) | 16.89% | 17.02% | 17.15% |
| A22 (first order after tap) | 16.90% | 17.02% | 17.15% |

*Rates are 14.74% plus the pp figure from T16 for that assumption, rounded to two decimal places.*

### 23.5 What kind of evidence backs each of the top sensitivities

The four assumptions with the widest tornado spread each rest on a different class of evidence, a distinction worth stating plainly, since a benchmark-backed assumption and a team-estimate assumption carry different weight even when both sit inside the same table.

| ID | What it governs | Evidence class | Basis |
|---|---|---|---|
| A21 | Salary-day tap-through | Vendor benchmark for in-app card engagement | Lane F |
| A27 | RM review to order | Combination of RM-coverage context and behavioural-economics reminder studies | Lanes B, E |
| A22 | First order after tap | Combination of vendor funnel benchmarks and behavioural-economics studies on defaults and reminders | Lanes E, F |
| A02 | Business-as-usual drift | Direct extrapolation of the case's own Exhibit 1 trend | C-E1 |

A02 is the one assumption in this top group whose basis is the case's own data rather than an external benchmark or a team judgement, which is also why it is the assumption this document is most confident in: the case shows the rate moving from 14.70% to 14.74% across a full year of messaging [C-E1], and A02's bear and bull values (14.59% and 14.84%) are built as a modest extrapolation of that same observed drift, not a number invented for the model.

### 23.6 What would have to be true for the bull case, read the same honest way

The bull case, +3.94 pp and 32,037 extra actives [T11], is sometimes treated as the more comfortable scenario to discuss, since it exceeds rather than falls short of the brief's target band. The same discipline applied to the bear case in 23.3 applies here: the bull case is not one lucky input, it is all twenty lever-relevant assumptions landing at their strongest plausible value simultaneously, exactly as unlikely, as a single correlated event, as the bear case's all-weak scenario. Reading the bull case as the likely outcome would be as big a reasoning error as reading the bear case as impossible; the base case, built from every assumption at its single best team estimate rather than any coordinated extreme, is the planning assumption this document is built around, and the bear and bull cases exist to bound it, not to replace it.

Exhibit for the deck: the tornado chart from 23.2, horizontal bars sorted by spread, with a vertical reference line at +2.0 pp (the 200 bps floor) showing every bar clearing it, paired with the 28 bps margin callout from 23.1 as the slide's pre-empted-weakness note.

## 24. ₹16.5 lakh of cash buys 19,053 extra actives at ₹87 each, while the same cash in paid media buys 1,649, 11.6 times fewer

**Answer.** In our model, the thirteen-week programme costs ₹16,49,357 in cash, which is ₹87 per extra active account in the base case; the same cash spent on paid-media acquisition at a benchmark ₹1,000 per activated account would buy only 1,649 extra actives [T13, T14], so our plan returns 19,053 / 1,649 = 11.6 times as many extra actives for the same money. A further ₹37.8 lakh of internal product-team time, not cash marketing spend, brings the all-in cost to ₹285 per extra active [T13].

### 24.1 Cash cost, line by line

The thirteen-week cash budget runs to seven named components plus a contingency line, none of which is paid media; every rupee buys owned-channel messaging, content, compliance review, workplace delivery or customer research.

| Item | Rupees | Tag |
|---|---|---|
| Email, 3 sends to the idle base | ₹51,703 | T13 |
| SMS, 2 sends to the idle base | ₹2,48,175 | T13 |
| WhatsApp, 3 sends to opted-in accounts | ₹2,89,537 | T13 |
| Content production (explainers, in-app copy, creatives) | ₹4,00,000 | T13 |
| Workplace sessions | ₹2,40,000 | T13 |
| Compliance and exchange advertisement review | ₹1,50,000 | T13 |
| Validation research (30 interviews, 2 usability rounds) | ₹1,20,000 | T13 |
| Bank app card, tile, push (built on existing bank infrastructure) | ₹0 | T13 |
| Contingency, 10% of the subtotal | ₹1,49,942 | T13 |
| Total cash | ₹16,49,357 | T13 |
| Internal product sprint (not cash marketing; 7 people, 3 months) | ₹37,80,000 | T13 |

The bank app card, tile and push line costs nothing in cash because it runs on channels and surfaces the parent bank already operates; this is the single clearest expression of the brief's instruction to prefer owned assets over paid media [C-K3]. The SMS line is the single largest per-channel cash item, ₹2,48,175, because the idle base of 6,89,375 accounts receives two SMS sends each at the model's ₹0.18-a-message assumption (A52), a rate chosen from inside the overlapping range two independent vendor rate-card sources give for Indian A2P SMS, roughly ₹0.10 to ₹0.18 for transactional routes and ₹0.08 to ₹0.12 for promotional routes [F23].

The WhatsApp line, by contrast, reaches a smaller share of accounts than SMS or email despite its higher per-message rate, because only 35% of idle accounts carry a WhatsApp opt-in (A50); the model multiplies the full idle base by this 35% share, then by three sends, then by the blended ₹0.40-a-message rate, to arrive at ₹2,89,537, the second-largest cash item after SMS even though its reach (0.35 x 6,89,375 = 2,41,281 accounts) is smaller than SMS's full-base reach. This is a direct, practical reminder that consent, not cost, is the binding limit on WhatsApp as a channel in this plan: the rupee cost of sending a WhatsApp message to the full idle base would be smaller again than the SMS line, but the model does not do this, because the 65% of idle accounts without an opt-in cannot lawfully receive a WhatsApp marketing message at all [C-K5].

### 24.2 Owned rails against paid media, same cash

The comparator asks a direct question: if the same ₹16.5 lakh had instead been spent acquiring new activated accounts through paid media, at a benchmark cost per activated account, how many extra actives would it buy, across the same three scenarios.

| Measure | Bear | Base | Bull |
|---|---|---|---|
| Cash | ₹16.5 lakh | ₹16.5 lakh | ₹16.5 lakh |
| Extra actives, our plan | 9,783 | 19,053 | 32,037 |
| Paid cost per activated account | ₹700 | ₹1,000 | ₹1,400 |
| Extra actives, paid media | 2,356 | 1,649 | 1,178 |

The base-case ratio, 19,053 extra actives from our plan against 1,649 from paid media for the identical ₹16.5 lakh, is 19,053 / 1,649 = 11.6 times. Even in the bear scenario, where our plan's extra actives fall to 9,783 and the comparator's bear value (a cheaper ₹700 per activated account, which favours paid media, not our plan) raises the paid-media figure to 2,356, our plan still returns 9,783 / 2,356 = 4.2 times as many extra actives as paid media would for the same cash.

The ₹1,000 base figure for paid-media cost per activated account is itself a conservative choice against the best Indian broking comparable we found. Groww's reported customer acquisition cost ran from ₹616 in FY25 to ₹1,374 in H1 FY26 [F33, F35], and both of those figures describe a customer acquisition, not an activated trading account, which typically costs more to acquire than a customer who merely opens an account. Setting the base paid-media figure at ₹1,000, inside that ₹616 to ₹1,374 range but closer to its lower end, and reserving the bear value (₹700, cheaper still) for the scenario that most favours paid media, means the comparator in 24.2 is not built to make our plan look good; if anything it understates the gap, since an activated-account cost benchmark would likely sit above even the ₹1,374 figure.

### 24.3 Channel unit costs behind the cash line

Each outreach channel's unit cost in 24.1 rests on a named rate, not a round-number guess.

| Channel | Unit cost used (A-ID) | Basis | Tag |
|---|---|---|---|
| WhatsApp, blended | ₹0.40 a message (A51) | India marketing-template rate rose to ₹0.8631 from 1 Jan 2026; utility templates run ₹0.115; the blend of two utility sends and one marketing send a person works out to roughly ₹0.36, and the model's ₹0.40 adds a margin | F17, F19 |
| SMS, DLT route | ₹0.18 a message (A52) | Sits inside the overlapping range two vendor rate cards give for Indian A2P SMS (₹0.10 to ₹0.18 transactional; ₹0.08 to ₹0.12 promotional) | F23 |
| Email | ₹0.025 a message (A53) | No vendor or official source gave a directly comparable Indian per-email transactional cost figure in this research pass; this remains a team estimate, stated honestly rather than dressed up with a borrowed source | n/a (team estimate) |

RCS messaging, the richer in-app message format the case mentions ONL already tried [C-PB3], does not carry its own cost line in T13, because the model treats it as already covered within the existing bank-app and messaging surfaces rather than as a separate paid channel. Indian RCS pricing has itself risen sharply, from roughly 6 to 7 paise a message to roughly 20 to 25 paise, effective 1 September 2026 [F30], a vendor-reported figure that sits inside the ₹0.15 to ₹0.30 range a separate developer guide gives for carrier-negotiated RCS pricing in India and Southeast Asia [F32]. Even at its lower historical rate, RCS was already one of the channels ONL used for a year of messaging that moved the activation rate by only 0.04 pp [C-PB3, C-E1], which is the clearest evidence in this case that channel cost was never the binding constraint on this problem; reach into a moment the customer already trusts, inside a surface the customer already opens, is the constraint this plan's design actually targets.

### 24.3a The broader broker CAC evidence behind the comparator

Press coverage of two listed bank-adjacent and discount brokers gives a wider picture of where acquisition cost sits across the Indian market, which is the evidence base section 24.2's ₹700 to ₹1,400 comparator range is drawn from.

| Broker | Measure | FY25 or earlier period | H1 FY26 or later period | Tag |
|---|---|---|---|---|
| Groww | CAC per client | ₹616 (FY25), down from ₹807 (FY24) | ₹1,374 (H1 FY26), up from ₹796 (H1 FY25) | F33, F35 |
| Angel One | CAC per client | ₹1,014 (FY25 comparator period) | not separately reported in this pass | F33 |
| Groww | CAC on an activated-client basis | ₹1,441 | not separately reported in this pass | F34 |
| Angel One | CAC on an activated-client basis | ₹6,076 | not separately reported in this pass | F34 |

The activated-client figures in the last two rows matter more to this comparison than the simple per-client figures above them, because our own ₹700 to ₹1,400 comparator range describes the cost to acquire an activated account, a higher bar than an opened one. Both named brokers' activated-client CAC, ₹1,441 for Groww and ₹6,076 for Angel One [F34], sits above even our bull-case comparator value of ₹1,400, which means the ₹1,000 base and ₹1,400 bull figures this document uses for paid media are, if anything, generous to the paid-media side rather than stacked against it.

### 24.4 The all-in figure, cash plus internal effort

The ₹87-per-extra-active cash figure understates the programme's true resource cost, because it excludes the internal product sprint, 7 people for 3 months at a loaded cost of ₹1,80,000 a person-month, which totals ₹37,80,000 and is not cash marketing spend but internal engineering and product time building the salary-day card, the single sign-on flow, the Autopay integration and the investments tile [T13].

| Measure | Value | Tag |
|---|---|---|
| Cash cost per extra active | ₹87 | T13, T11 |
| Internal product sprint | ₹37,80,000 | T13 |
| Cash plus internal cost per extra active | ₹285 | T13, M |
| Cash plus internal cost, bear scenario | (cash plus internal) / 9,783 | computed from T13, T11 |
| Cash plus internal cost, bull scenario | (cash plus internal) / 32,037 | computed from T13, T11 |

Even at the all-in figure of ₹285 per extra active, which folds in every rupee of internal engineering time the programme consumes, the comparison in 24.2 would still favour our plan over paid media by a wide margin, since ₹285 remains well below the ₹700 to ₹1,400 range the paid-media comparator uses for cost per activated account alone, before any internal effort on the paid-media side is even counted.

Exhibit for the deck: the moneyshot card pairing ₹16.5 lakh cash against 19,053 extra actives on one side and the same ₹16.5 lakh against 1,649 paid-media extra actives on the other, with the 11.6x ratio as the card's single largest numeral.

## 25. Each new active earns about ₹62 a year in broking revenue, so activation pays back in 17 months and its larger value sits in the bank relationship

**Answer.** In our model, a newly activated account generates about ₹62 a year in direct broking revenue, built from ₹2.40 of brokerage, ₹15 of depository charges and ₹45 of annual maintenance charge [T15]. Against the ₹16.5 lakh cash cost of the programme, that revenue pays back the cash outlay in about 17 months (16.6 months precisely, T15), a period longer than the three-month build window itself, which is the honest reason the direct broking-revenue case for this plan is secondary to its larger, harder-to-quantify value: a customer who logs into the bank's broking app on a regular monthly instalment is a customer whose overall relationship with the parent bank deepens, a value this document does not put an invented number on.

### 25.1 Revenue a year, line by line

Three product-table lines feed the ₹62 figure, each at the rate the case itself states or the regulator's own fee structure sets.

| Item | Calculation | Value | Tag |
|---|---|---|---|
| Brokerage, cash equities | 16 orders a year x ₹0.15 an order | ₹2.40 | A63, A62, C-PR1 |
| Depository charge | 1 sell a year x ₹15 a sell | ₹15 | A64, A65 |
| Annual maintenance charge | 15% of new actives on a regular account x ₹300 | ₹45 | A66, A67 |
| Revenue a year | ₹2.40 + ₹15 + ₹45 | ₹62 | T15 |

The sixteen-orders-a-year figure (A63) is built from twelve monthly ETF instalments, the programme's central mechanic across the salary-day, Dhanteras and warm-cohort levers, plus four other orders, at the case's own ₹0.15-per-order cash-equities brokerage rate [C-PR1]. Mutual fund transactions on eligible direct plans carry ₹0 brokerage [C-PR3], so an account that trades exclusively through mutual fund SIPs rather than the ETF instalment mechanic contributes no brokerage revenue at all under this line, a detail the ₹62 figure does not need to separately account for since the model's A63 orders-a-year figure already treats the twelve instalments as cash-equities ETF orders at ₹0.15 each, not mutual fund orders at ₹0.

The ₹45 annual maintenance figure rests on SEBI's BSDA (Basic Services Demat Account) rule, which sets nil annual maintenance up to ₹4 lakh of holding value and ₹100 a year for holdings between ₹4 lakh and ₹10 lakh. The model's assumption A66 is that 15% of new actives hold a regular (non-BSDA) demat account, which pays the fuller outside-BSDA maintenance charge of ₹300 a year (A67); 85% of new actives are assumed to sit inside the BSDA thresholds and so pay close to nothing on this line. The ₹45 figure in T15 is 15% x ₹300, a precise application of the BSDA tiering to the stated 15% share, not an inflated flat charge applied to every new active.

### 25.1a The BSDA tiers behind the ₹45 figure

The BSDA rule sets three tiers by holding value, and only the top tier pays the ₹300-a-year charge the model's A67 assumption carries; a share schedule like this is the reason the ₹45 figure in T15 is a weighted average across new actives rather than a single flat charge.

| Holding value | Annual maintenance charge | Tag |
|---|---|---|
| Up to ₹4 lakh | Nil | F43 |
| ₹4 lakh to ₹10 lakh | ₹100 a year | F43 |
| Above ₹10 lakh (outside BSDA) | ₹300 a year (A67) | F43 |

Most newly activated accounts, built as they are around a modest monthly ETF instalment rather than a large lump-sum deposit, are likely to sit inside the nil or ₹100 tiers for some time after opening, which is consistent with the model's A66 assumption that only 15% of new actives carry the outside-BSDA, full ₹300 charge in their first year.

### 25.2 The arithmetic: 19,053 extra actives against ₹16.5 lakh cash

Multiplying the base-case extra-active count by the revenue-a-year figure gives the programme's first-year direct revenue: 19,053 x ₹62 = ₹11,81,286, which we round to roughly ₹11.8 lakh. Against the ₹16,49,357 cash cost of the programme [T13], that first-year revenue alone does not cover the cash outlay; the model's reported cash payback period is 16.6 months, which we state as about 17 months, the time at which cumulative broking revenue from the 19,053 extra actives is expected to equal the ₹16.5 lakh cash spent to acquire them [ECON, T15].

| Measure | Value | Tag |
|---|---|---|
| Extra actives, base case | 19,053 | T11, T10 |
| Revenue a year, each | ₹62 | T15 |
| Revenue a year, total (19,053 x ₹62) | ₹11,81,286 | computed from T15, T11 |
| Cash cost of the programme | ₹16,49,357 | T13 |
| Cash payback period | about 17 months | M, T15 |

A 17-month payback on a three-month, ₹16.5 lakh cash programme is not a fast-money case, and this document does not pretend otherwise. The case for the plan does not rest on this payback alone. A 17-month payback period is also shorter than the typical multi-year horizon banks and brokers already use when weighing the value of a new banking relationship, so measured against that longer horizon rather than against the three-month build window itself, the payback period reads as reasonable rather than slow, even before the bank-relationship value in 25.3 is counted at all.

### 25.3 Why the bank relationship matters more than the broking-revenue line, stated without invented figures

Trade Private Limited is a bank-led broker, and most of its account holders are already customers of the parent bank [C-CO4]. An account holder who starts a monthly ETF instalment through the salary-day card, or who re-engages through the holdings-check tile, becomes a more frequent, more habituated user of the parent bank's own app, since every one of the seven levers in this plan routes the customer through bank-owned surfaces (the app, salary credit, statements, RM conversations) rather than a standalone ONL channel. A customer who checks a monthly instalment alongside a salary credit is a customer the bank sees more often, for a reason connected to saving rather than only spending, and that is a different kind of relationship than the one most salary accounts carry today, where the demat and trading account was opened alongside a banking product and then, by the case's own account, often forgotten about [C-PB6]. We do not attach a rupee figure to this value, because no interview, survey or test exists in this case to support one; manufacturing a cross-sell or deposit-retention number here would be exactly the kind of invented customer-economics figure this document's content-integrity rules forbid.

### 25.3a What the revenue line would need to look like to justify the programme on its own

Setting aside the bank-relationship value entirely, the 17-month payback (25.2) means the cash cost of the programme is recovered a little under a year and a half after the window closes, and every month of broking revenue after that point is net return on the ₹16.5 lakh cash spent. Over a three-year horizon, a newly activated account that keeps trading at the same ₹62-a-year rate would generate roughly ₹62 x 3 = ₹186 in cumulative broking revenue, against the ₹87 of cash this plan spends to create it [T11, T15], a return of roughly 2.1 times the cash cost on the direct broking-revenue line alone, before counting a single rupee of the bank-relationship value this section's own title treats as the larger prize. This is not a figure the model computes or reports directly; it is a simple extension of T15's own per-account revenue figure across three years, shown here because a judge asking "is the direct economics even sound, apart from the bank-relationship story" deserves a direct, worked answer alongside the qualitative one.

### 25.4 Why we do not chase F&O revenue instead

A faster route to higher per-account revenue would be to push customers toward futures and options trading, where the case's own product table carries a brokerage rate of ₹20.00 an executed order [C-PR2], higher than the ₹0.15 cash-equities rate this plan's revenue line uses. We do not design toward this. The case's own constraint states that growth must be responsible, that regulators have repeatedly highlighted that many retail traders, especially in derivatives, lose money, and that pushing people to trade more is neither ethical nor sustainable [C-K7]. Every lever in this plan is built around a recurring, small, customer-chosen instalment or a factual account-exists reminder, never a product recommendation and never F&O, which keeps this plan's revenue case modest in rupee terms and consistent in its ethical terms, a trade-off we accept deliberately rather than by oversight.

This is also exactly the trade-off the option screen in section 11 scores explicitly: the F&O education push option scores only 2.25 of 5 in the option screen, held down chiefly by its SEBI-and-ethics-fit score of 1 out of 5, against our chosen option's 5 out of 5 on the same criterion [T17]. The 87.7% loss incidence among individual F&O traders in FY26, rising to 88.5% among traders under 30 [D45, D46], is the evidence behind that single criterion score, and it is the same evidence this section leans on to explain why a ₹0.20-an-order brokerage rate on F&O is not a revenue line this plan goes looking for.

Exhibit for the deck: the ₹62-a-year revenue bar, broken into its three components, placed beside the 17-month payback line and a one-sentence callout naming the bank relationship as the larger, unquantified value, matching the Impact slide's moneyshot framing.

## 26. A 13-week roadmap from 2 November 2026 to 31 January 2027 runs four gates and ships every feature by week 8

**Answer.** The programme runs thirteen weeks, 2 November 2026 to 31 January 2027, the exact window the model's measurement date assumes [T8], and ships every customer-facing feature it needs by week 8, so that the back half of the window is spent running the levers and reading results rather than still building. Four gates (G0 to G3) check the plan is on track at weeks 0, 4, 6 and 13, each with a named test and a pre-agreed response if the test fails.

### 26.1 Week by week

| Workstream | Weeks live | What happens | Tag |
|---|---|---|---|
| Consent screens and exchange ad-code approval | W0 to W1 | Every message template and screen clears the five checks in section 19 and gets exchange ad-code approval before any send | C-K2, C-K5 |
| Dhanteras and Muhurat notice | W1 | The factual gold ETF and Muhurat-session notice reaches idle accounts in the 6 to 8 November 2026 window | A28, A29, A30 |
| Bank-app investments tile and single sign-on | W1 to W4 | The tile, sign-on and video IPV flow ship and go live for the general idle base | A23, A24, A25 |
| RM review sprint | W2 to W10 | RM review conversations run across the four premium and preferred cohorts at their cohort-specific coverage rates | A26, A27 |
| Workplace education sessions | W3 to W12 | Up to 40 sessions run at employers that bank with the parent bank, no product pitch | A31, A32, A33 |
| Salary-day card | W5 to W12 | The card appears on each salary credit (weeks 5, 9, 13 inside this window) with the ETF-instalment flow and Autopay mandate live from week 5 | A20, A21, A22 |
| ETF instalments live | W6 to W12 | The monthly ETF instalment mechanic, UPI Autopay mandate and the neutral fund list are fully operational for any customer who opts in | A20, A21, A22 |
| Holdout tracking and weekly read | W1 to W13 | Every lever's 10% holdout and the weekly activation-rate dashboard run continuously across the full window | T19 |

*W0 to W13 denote programme weeks; week 1 begins 2 November 2026 and week 13 ends 31 January 2027.*

Every customer-facing feature in this table ships by week 8 at the latest (the ETF instalment mechanic and the workplace session calendar both run their build-and-launch window inside weeks 1 to 8, even though their live-use period continues through week 12), which is the specific claim behind this section's own headline. The two workstreams that still run new build activity after week 8, the RM review sprint and the holdout tracking, are conversation and measurement activity, not feature construction, so no new customer-facing surface is still being built in the back half of the window.

### 26.1a Dependencies

| Feature | Depends on | Tag |
|---|---|---|
| Salary-day card | Bank-app single sign-on (G1) and the UPI Autopay mandate flow | A20, A21 |
| ETF instalment mechanic | The neutral fund list (built once, fixed alphabetical order, no default) and the Autopay mandate | A22 |
| Holdings-check tile | Single sign-on into ONL from the bank app | A23, A24 |
| Video IPV / re-KYC for dormant accounts | Bank-branch in-person verification capability, already in place | A10, A11 |
| RM review script | Compliance sign-off (G0) on the facts-only script | A26, A27 |
| Dhanteras notice | Exchange ad-code approval (G0) in time for the 6 to 8 November window | A28, A29, A30 |
| Holdout and weekly dashboard | Every lever's reach population being trackable from week 1 | T19 |

The salary-day card and the ETF instalment mechanic share the tightest dependency chain in the plan: neither can go live before single sign-on is confirmed working (gate G1, week 4), which is why the card's own live window starts in week 5, one week after G1, rather than at the start of the programme.

### 26.1b Monthly extra actives by moment

Grouping the thirteen weeks into three roughly four-week months shows how the programme's lift builds unevenly across the window, front-loaded by the Dhanteras notice in month 1 and back-loaded by the salary-day card's third credit cycle in month 3.

| Moment | Month 1 (weeks 1-4) | Month 2 (weeks 5-8) | Month 3 (weeks 9-13) | Total | Tag |
|---|---|---|---|---|---|
| Salary day | 0 | 1,698 | 3,963 | 5,661 | M, T10 |
| RM review | 1,347 | 1,797 | 939 | 4,083 | M, T10 |
| Rediscover (holdings check) | 1,294 | 1,047 | 739 | 3,080 | M, T10 |
| Dhanteras | 2,311 | 0 | 0 | 2,311 | M, T10 |
| New accounts | 584 | 584 | 730 | 1,898 | M, T10 |
| Warm cohort | 494 | 494 | 618 | 1,606 | M, T10 |
| Workplace | 83 | 165 | 165 | 413 | M, T10 |
| Total | 6,113 | 5,785 | 7,154 | 19,053 | M |

*Figures are rounded independently each month, so a row's three monthly figures may not sum to exactly the row's own total column, and the column totals may not sum to exactly 19,053, by a handful of accounts in either direction.*

Month 1 runs ahead on the strength of the Dhanteras notice alone, which contributes its entire 2,311 inside this single month; month 3 overtakes both earlier months once the salary-day card's third credit cycle (week 13) and the new-account and warm-cohort levers, which accrue steadily across all thirteen weeks, compound. The RM review lever is the only one whose monthly contribution peaks in the middle month rather than the first or the last, consistent with its own weekly timing profile running from week 2 to week 10.

### 26.2 Four gates

| Gate | Week | Test | If the test fails |
|---|---|---|---|
| G0 | Week 0 | Every message template and screen is cleared for consent, exchange ad-code approval and the five checks in section 19 | Hold all sends; no lever launches on an uncleared template |
| G1 | Week 4 | The bank-app investments tile and single sign-on are live for the general idle base | Delay the salary-day card's week 5 launch until the underlying sign-on flow is confirmed stable |
| G2 | Week 6 | The tracked activation rate is checked against the bear-case line for that week, 15.20%, rather than the base-case line, 15.94% [T12] | Trigger an immediate expansion of RM review coverage, the lever with the widest response-rate spread after the salary-day tap-through rate (section 23), rather than waiting for the week 13 read |
| G3 | Week 13 | The full-window lift is read against the three scenarios in T11, and each of the seven levers is individually assessed to scale or stop | Levers below their bear-case contribution are stopped or redesigned before any post-window extension; levers at or above base-case contribution continue |

Gate G2 is the direct response to the honest reading in section 22.5: the bear scenario, if it is in fact where the programme is tracking by week 6, is visible early, at a specific week and against a specific number, not discovered only at the end of the thirteen weeks when little time remains to respond.

### 26.3 RACI for the rollout

| Workstream | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Consent, ad-code and compliance clearance (G0) | ONL compliance | Head of ONL Trade | Exchange ad-code reviewer, bank compliance | RM management, bank app team |
| Bank-app tile, single sign-on, salary-day card | Bank app team | Head of digital banking | ONL product engineering, compliance | RM management |
| ETF instalment flow, Autopay mandate, neutral fund list | ONL product engineering | Head of ONL Trade | Bank app team, compliance | RM management |
| RM review sprint and coverage schedule | RM management | Head of relationship management | ONL compliance (script), analytics team | Bank app team |
| Workplace education sessions | SEBI SMARTs trainers / exchange investor-awareness programme | Head of ONL Trade | RM management, employer HR contacts | Bank app team |
| Holdout design, weekly dashboard, gate checks | Analytics and growth team | Head of ONL Trade | ONL product engineering | RM management, bank app team, compliance |

A single person, the Head of ONL Trade, carries Accountable on four of the six workstreams, which is a deliberate concentration rather than an oversight: a thirteen-week programme with four gates needs one person able to see every workstream's status at once and decide whether a gate passes, rather than six separately accountable owners each judging only their own slice. The two workstreams where Accountable sits elsewhere, the bank-app tile and sign-on flow (Head of digital banking) and the RM review sprint (Head of relationship management), are the two that depend most directly on bank-side infrastructure and bank-side staff the ONL Trade head does not directly manage, so accountability sits with whoever actually controls the resource.

### 26.4 What continues after 31 January 2027

The measurement date of 31 January 2027 is the point the model's figures are computed to, not the point every lever stops. The salary-day card, the investments tile, the RM review script and the ETF instalment mechanic are all built as standing product features, not one-off campaigns, so each continues to run against newly idle and newly dormant accounts after the formal thirteen-week window closes; only the workplace-session calendar (A31's fixed count of sessions) and the specific Dhanteras-week notice are time-bound by design. The holdout and weekly dashboard (section 27) are the mechanism for deciding, lever by lever, which of the continuing features earn further investment and which do not, using the same gate-style logic as G3 but applied on a rolling basis rather than a single end-of-window read.

Exhibit for the deck: the thirteen-week Gantt bar from 26.1, with the four gates marked as vertical flags at weeks 0, 4, 6 and 13, directly beneath the monthly extra-actives-by-moment chart that section 27's dashboard feeds.

## 27. A 10% holdout reads the lift every week, and four guardrails stop any message that pushes F&O, annoys customers or breaks consent

**Answer.** A 10% holdout, carved out of each lever's reached population before any message goes out, lets us read every lever's actual lift against a true no-message control every week of the thirteen-week window, rather than waiting for a single end-of-window estimate [T19]. Four guardrails, each with a stated stop line, halt any message that pushes F&O, annoys customers beyond a set threshold, or runs ahead of consent, and we say plainly that one of those thresholds, the 0.5% opt-out stop line, is a control we set ourselves, not a figure any regulator publishes [J58].

### 27.1 The KPI tree

The activation rate the brief asks us to move [C-Q1, C-K1] decomposes into controllable pieces, each one a metric a specific lever can move, which is the structure the weekly dashboard in 27.3 is built around.

| Level | Metric | Decomposes into | Tag |
|---|---|---|---|
| Top | Activation rate (active in trailing 12 months) [C-D1] | Business-as-usual active accounts plus extra active accounts, divided by total eligible accounts | C-D1, T8, T11 |
| Second | Extra active accounts | Sum of the seven levers: salary day, holdings check, RM review, Dhanteras, workplace, warm cohort, new accounts | T10 |
| Second | Highly active rate (active in trailing 3 months) [C-D2] | Same seven-lever structure, measured against the shorter trading window | C-D2, T11 |
| Third (per lever) | Reach: idle accounts contacted with consent | Channel-specific reach rate x idle population for that cohort | A20, A23, A26, A28, T2 |
| Third (per lever) | Response: first executed order after contact | Tap-through rate x order-after-tap rate, or coverage x review-to-order rate for RM | A21, A22, A24, A25, A27, A29, A30 |
| Guardrail | F&O share of new actives | Share of newly activated accounts whose first or early orders are futures and options, not cash equities or ETF instalments | C-K7, C-PR2 |
| Guardrail | Opt-outs a send | Accounts that unsubscribe from a channel, as a share of that send's reached population | J58 |

### 27.1a The "daily users" ask and the proxy this plan tracks

The case's task is to turn newly opened and dormant accounts into highly engaged, revenue-active, daily users [C-Q1]. The case's own four definitions, active, highly active, inactive and dormant [C-D1 to C-D4], are all built on trailing windows of twelve months, three months or twenty-four months; none of them is a literal daily-login or daily-trade measure, and this document does not invent one where the case provides none. The nearest proxy the case's own terms give us for the daily-user ask is the highly active rate (C-D2, trailing 3 months), since an account trading at least once a quarter is, by construction, a more frequent user than one merely counted active on a twelve-month window, and the salary-day card's monthly instalment mechanic is itself designed to generate a trade roughly once a month, inside the three-month highly-active window, for every account that adopts it. We state this proxy relationship plainly rather than imply the dashboard measures daily behaviour it does not actually observe.

A monthly ETF instalment is, by design, a once-a-month trade, not a daily one, and this plan does not pretend otherwise. What it does claim, and what the highly active rate is built to track, is a shift from a customer who trades once a year or less toward a customer whose trading cadence is frequent enough to sit well inside a rolling three-month window every quarter the instalment continues, which is the most honest reading of "daily users" the case's own revenue-active and highly-engaged language supports without manufacturing a measure the underlying product behaviour does not produce. A genuinely daily-trading customer base is also not a goal this plan pursues, consistent with the responsible-growth constraint in section 25.4: a recurring monthly instalment, not a daily trading habit, is the behaviour this plan is built to encourage.

### 27.2 Holdout sizing

Each outreach lever's holdout carves out 10% of its reached population, large enough, given the expected lift and an organic (no-message) order rate of 1.0% over the thirteen weeks (A05), to detect that lift at 80% statistical power and a 5% two-sided significance level.

| Lever | Reached population | Holdout (10%) | Expected lift (pp) | Minimum detectable effect (pp) | Lift / MDE |
|---|---|---|---|---|---|
| Salary day | 2,96,975 | 29,697 | 1.92 | 0.17 | 11x |
| Rediscover (holdings check) | 4,13,625 | 41,362 | 0.75 | 0.14 | 5x |
| RM review | 36,642 | 3,664 | 11.25 | 0.49 | 23x |
| Dhanteras | 3,44,688 | 34,469 | 0.67 | 0.16 | 4x |

*MDE is the smallest lift the holdout design can reliably distinguish from no effect, at 80% power and a 5% two-sided significance level, given each lever's reached and holdout population sizes.*

Every lever's expected lift clears its own minimum detectable effect by a wide margin, from 4x for the Dhanteras notice to 23x for the RM review conversation, which is exactly check 11 of the twelve model checks in section 21.5. The RM review lever's holdout is the smallest in absolute terms, 3,664 accounts, because its reached population is itself the smallest of the four (36,642, the weighted sum of cohort-specific RM coverage), but its expected lift (11.25 pp) is also the largest by a wide margin, since a facts-only conversation converts a far higher share of the accounts it reaches than a card or a notice does, so the 10% holdout still clears its detection threshold with room to spare.

### 27.3 The weekly dashboard

Five measures are tracked weekly across the thirteen-week window, each tied directly to a case definition or a guardrail.

| Metric | Week 0 (start) | Week 6 (base case) | Week 13 target (base case) | Definition |
|---|---|---|---|---|
| Activation rate | 14.74% | 15.94% | 17.02% | Active in trailing 12 months [C-D1] |
| Extra active accounts | 0 | 9,917 | 19,053 | Sum of seven levers, cumulative [M, T10, T12] |
| Highly active rate | 10.1% | tracked weekly | 12.4% | Active in trailing 3 months [C-D2] |
| F&O share of new actives | n/a | 5% maximum | 5% maximum | Guardrail; see 27.4 |
| Opt-outs a send | n/a | 0.5% maximum | 0.5% maximum | Guardrail; see 27.4 |

The week 6 cumulative extra-actives figure, 9,917, is already 9,917 / 19,053 = 52.1% of the full-window base-case total by the midpoint of the programme [M, T10], ahead of a simple straight-line pace of six-thirteenths (46.2%), because the Dhanteras notice's entire contribution lands inside weeks 1 and 2 and the salary-day card's week 5 contribution has already landed by week 6. This is a second, independent reason gate G2 is set at week 6 rather than later: by that point the programme has already banked more than half of its target lift, so a shortfall against the bear line at week 6 is a meaningful early warning, not a reading taken too early to act on.

The case's own ask is for daily users, a standard that goes beyond a twelve-month activation count [C-Q1]. The highly active rate (trailing 3 months, C-D2) is the dashboard's closer proxy for that ask than the headline twelve-month activation rate, since an account that traded once eleven months ago but has not traded since counts as active under C-D1 but would not count as highly active under C-D2; tracking both together, as the dashboard does, keeps the programme honest about whether it is building repeat engagement or only a single counted trade.

### 27.4 Four guardrails and their stop lines

Each guardrail exists to stop a specific failure mode the case's own constraints name: trade inducement, customer annoyance, consent breach, or F&O promotion [C-K2, C-K5, C-K6, C-K7].

| Guardrail | Stop line | Action if breached | Why set here |
|---|---|---|---|
| F&O share of new actives | Above 5% | Pause the message or moment driving the F&O share | The case's own constraint bars pushing people to trade more, especially in derivatives [C-K7]; 5% is a low ceiling precisely because this plan is designed not to touch F&O at all, so any measurable F&O share signals a message is being read as a trading cue rather than an account reminder |
| Opt-outs a send | Above 0.5% | Stop that specific message template immediately | An internally set control, not a figure any regulator publishes; no source found in this research pass names a specific numeric opt-out-rate threshold matching this guardrail, and we state that plainly rather than attribute it to a regulator [J58] |
| Complaints | Above 1 per 10,000 contacted | Trigger a compliance review of the message or channel before any further send | Set to catch a systemic issue (a confusing or unwelcome message) well before it reaches a scale that would itself trigger regulatory attention, consistent with the no-dark-patterns constraint [C-K6] |
| Messages a person a month | Above 4 | Hold further sends to that person until the next month | Set to prevent the combination of levers (salary-day card, holdings tile, servicing message, Dhanteras notice) from over-contacting any single customer, which is the surest route to the opt-out and complaint thresholds above being breached in the first place |

The opt-out and message-cap guardrails work together by design: a customer who would otherwise receive a salary-day card, a holdings-check reminder and a Dhanteras notice in the same month is capped at four total messages, which keeps the message-frequency guardrail as the first line of defence and the opt-out rate as the second, confirming check.

### 27.5 Why the cap sits at four messages a month

The four-messages-a-month cap is set with headroom above what a customer in the busiest overlapping month would normally receive, rather than at the tightest number the levers could in principle be squeezed into.

| Lever | Typical sends to one idle account in its busiest month | Tag |
|---|---|---|
| Salary-day card | 1 (on the salary-credit week that month) | A20, A21 |
| Holdings-check tile, email, SMS, WhatsApp | Up to 3 sends across the thirteen weeks, rarely more than 1 in a single month | A23, SENDS |
| RM review | 1 conversation, not a repeated send | A26, A27 |
| Dhanteras notice | 1, confined to week 1 of the window | A28, A29, A30 |
| Warm cohort or new-account servicing message | 1 a month | A35, A39 |

A Salary Account idle customer in their busiest month, most plausibly the month the Dhanteras notice and a salary-credit week both fall inside, would typically receive at most two to three messages across all levers combined, well under the four-message cap. The cap is set above this typical busiest-month count specifically so that it catches a genuine design or targeting failure, such as the same customer being independently enrolled in two overlapping message schedules by mistake, rather than triggering routinely on the plan's own intended cadence.

### 27.6 Why the complaints threshold sits where it does

The complaints guardrail, more than 1 per 10,000 contacted triggering a compliance review, is set to catch a systemic problem while it is still small, not after it has reached a scale a regulator would itself notice. Ten thousand is roughly the size of a single mid-sized send under this plan (the RM review lever's full reached population across all four premium and preferred cohorts is 36,642, a little over three times that count), so a 1-in-10,000 rate translates into a review being triggered on single-digit complaint counts within any one lever's weekly reach, well before complaints accumulate into a pattern large enough to attract outside attention. This is consistent with the case's own no-dark-patterns, no-fear-based-nudges constraint [C-K6]: the guardrail is built to surface a design problem at the point a handful of customers notice something is wrong, not at the point a regulator or a news report does.

Exhibit for the deck: the weekly dashboard table from 27.3 as the execution slide's KPI strip, with the four guardrail stop lines from 27.4 running beneath it as a single-row traffic-light strip, red above each stated threshold.
