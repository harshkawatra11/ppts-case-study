## 17. Proposal A, rebuilt: five features, each redesigned to protect order frequency

**Answer.** Proposal A as written lists five features (skip or pause without penalty, choose 2 or 4 meals, swap recipes, access a larger menu, refer friends for rewards) and none of them carries a limit `[C PA1]`. The rebuilt Proposal A keeps every one of the five jobs the case asks for and adds a rule to each: a return date on every pause, two more price points rather than a discount, a swap confined to one ingredient family, a wider menu built from the same ingredient base, and a referral paid only when the friend proves they are a customer, not a sign-up. Each rule exists because the case itself names the risk that an unrestricted version of the feature would not survive: customers "may use flexibility to order less frequently" `[C PA4]`. This section specifies the five features one by one, states what each guards against, classifies each with the Kano model, prices the new plan ladder against the case's own benchmarks, and names what the team chose not to build in the first release.

### 17.1 Feature 1: skip or pause, free, with a floor

The case's feature is "skip or pause orders without penalty" `[C PA1]`. Written with no limit, a customer can skip every box, every month, forever, and the subscription earns nothing while costing the same support and software overhead. The rebuilt Proposal A keeps the promise free and keeps it penalty-free, and adds one rule: a customer may skip or pause, but across any rolling three-month window at least two boxes must ship. A customer who has already skipped one box in a rolling three-month window cannot skip a second if that would reduce shipments below two. The app explains the next required shipment and offers date changes only within the window. Cancellation remains available at any time and is never gated behind this floor. The floor caps the mathematical ceiling on how much a cohort can skip (one-in-three boxes in theory, or 33% of due boxes) while leaving the headline promise of the case intact: nothing is penalised, nothing requires a call to customer support, and nothing is hidden in small print.

| Element | Specification |
|---|---|
| Customer-facing wording | "Skip or pause any box, free, any time. We only ask that you take at least 2 boxes in any 3 months, so we can keep your recipes, pricing and delivery slot ready." |
| Rule | Floor of 2 boxes shipped per rolling 3-month window per subscription; a second skip is refused if it breaches the floor; rescheduling cannot bypass it |
| Edge case 1 | A customer who has skipped 1 of 3 and requests another skip sees the required shipment date; changing that date is permitted only if 2 boxes still ship inside the window |
| Edge case 2 | A customer who cancels mid-window keeps their existing floor status; cancelling is never gated behind the floor, only skipping is |
| Edge case 3 | A customer on the family plan (4 meals a week, per 17.3) has the same 2-in-3 floor applied at the subscription level, not per meal size, so switching plan size never resets or breaches the floor |
| Metric that watches it | Boxes skipped, percentage of boxes due, tracked monthly; the case's own stated risk `[C PA4]` is directly this metric, modelled at 5% in the base case, 10% in the bear case and 3% in the bull case `[A08]` |
| Model input | A08 |

*Floor = the minimum shipped-box requirement across a rolling window. The case's own worry that "customers may use flexibility to order less frequently" `[C PA4]` is the reason this feature carries a numbered metric rather than being left to run free; this paragraph's reference to the 5%, 10% and 3% figures is an assumption, stated once.*

The retention-gain cancellation threshold is 12.6% of boxes due `[M T2]`: at that rate, lost box revenue cancels the standalone retention uplift. This is not the profitability threshold for the full rebuild. The base run-rate turns negative at 5.6% skips `[M T7]`, leaving only 0.6 percentage points of headroom above the assumed 5% `[A08]`. At 5%, the retention step contributes ₹0.31 Cr to the annual EBITDA bridge `[T6]`. Across the tested 12% to 0% range, run-rate EBITDA moves from −₹1.14 Cr to +₹0.99 Cr `[T7]`; the plan therefore needs close monitoring rather than a claim of comfortable safety.

### 17.2 Feature 2: choose 2 or 4 meals, priced as a ladder, not a discount

The case's feature is "choose 2 or 4 meals" `[C PA1]`, offered beside the existing 3-meal box. Written as a plain size choice with no price design, a 2-meal option that simply halves the ₹5,200 box price to roughly ₹3,467 would sit almost on top of the ₹3,500 private-label kits the case names as a competitive threat `[C M3]`, discounting HarvestBox's own brand to match a competitor it should instead be differentiating against. The rebuilt Proposal A instead treats the three sizes as a price ladder with their own per-meal economics, not a percentage-off exercise, detailed with the arithmetic in section 17.3.

| Element | Specification |
|---|---|
| Customer-facing wording | "Pick your week: 2 meals for smaller households or trial customers, 3 meals (our classic box), or 4 meals for families and bigger appetites." |
| Rule | Three fixed plan sizes, each with its own weekly meal count and total price (17.3); plan size can be changed from one billing cycle to the next, with no fee |
| Edge case 1 | A customer moving down in size mid-subscription keeps their current recipe selections for the boxes already confirmed; only the next unconfirmed box reflects the new size |
| Edge case 2 | The 2-meal entry plan is capped at a maximum of 3 consecutive months before the customer is prompted (not forced) to move to the 3-meal plan, because the entry plan's gross margin is thinner (17.3) and an indefinite 2-meal subscriber is a worse unit economically than a 3-meal one |
| Edge case 3 | Family plan (4 meals) customers get first access to new recipe drops, a non-price lever to reward the highest-value plan size without discounting it |
| Metric that watches it | Blended order value (AOV), modelled at ₹5,091 against the case's stated ₹5,200 `[C U1]` `[A09]`, tracked by plan-size mix monthly |
| Model input | A09 |

*AOV = average order value. The plan-size mix (20% entry, 65% classic, 15% family) is a team assumption, stated once, chosen to keep the blended order value close to the case's current ₹5,200 `[C U1]` rather than eroding it, because the entry plan exists to answer the "too expensive" exit reason `[C W2]`, not to cut the average price HarvestBox already earns.*

### 17.3 The price ladder, worked in full

Three plan sizes sit on the ladder: an entry plan at ₹3,600 for 2 meals a week, the unchanged classic plan at ₹5,200 for 3 meals a week `[C U1]`, and a family plan at ₹6,600 for 4 meals a week. Each is priced to land inside the case's own stated meal-kit price band of ₹350 to ₹650 a meal `[C M1]` while sitting clearly above the ₹3,500 private-label kits the case names as a threat `[C M3]`, because the entry plan is designed to compete on flexibility and portion size, not to race a private-label competitor to the bottom on price.

| Plan | Weekly meals | Weeks a month | Meals a month | Total price a month | Price per meal | Positioned against |
|---|---|---|---|---|---|---|
| Entry | 2 | 4 | 8 | ₹3,600 | ₹450 | The ₹3,500 private label `[C M3]`, answered with more flexibility and a brand customers already know |
| Classic (unchanged) | 3 | 4 | 12 | ₹5,200 | ₹433 | HarvestBox's own current box `[C U1]`, held flat |
| Family | 4 | 4 | 16 | ₹6,600 | ₹412 | Multi-person households priced out of three separate entry-plan subscriptions |

*AOV = average order value. "Price per meal" is total price divided by meals a month, each falling inside the case's stated ₹350 to ₹650 meal-kit band `[C M1]`. The entry plan's ₹450 a meal and the family plan's ₹412 a meal are both taken directly from plan 5, assumption A09's rationale, and this paragraph's reference to them is an assumption, stated once.*

The weighted average order value under the assumed 20% entry, 65% classic, 15% family mix `[A09]` is 0.20 × ₹3,600 + 0.65 × ₹5,200 + 0.15 × ₹6,600 = ₹720 + ₹3,380 + ₹990 = ₹5,090, which the model carries at ₹5,091 after rounding through the monthly cohort build `[A09]`. This is 2.1% below the case's current ₹5,200 `[C U1]`, a worked example of the trade-off at the centre of the whole proposal: the ladder exists to answer "too expensive," the single largest stated exit reason after rigidity at 27% of exits `[C W2]`, and a small reduction in blended order value is the acknowledged cost of answering it, more than offset in the model by the extra customers the entry price and the skip promise keep past month 3 (section 5 derives this in full). The classic plan is held exactly flat at ₹5,200 so that existing subscribers see no change in their own price; only new sign-ups and self-selecting downgrades move the blend.

### 17.4 Feature 3: swap recipes, inside one ingredient family

The case's feature is "swap recipes" `[C PA1]`, offered with no stated limit. An unlimited swap, across the full menu, means a customer could in principle request any of roughly 40 recipes (17.5) against ingredients bought for a different one, multiplying the ingredient mix the fulfilment centre has to hold on any given week and working directly against the gross-margin lever that targets a reduction in food waste from 6% of ingredient purchases `[C X2]` toward about 4% `[A18]`. The rebuilt Proposal A keeps the swap, free, same-day where stock allows, and confines it to recipes inside the same ingredient family as the one being replaced.

| Element | Specification |
|---|---|
| Customer-facing wording | "Not feeling tonight's recipe? Swap it free for another dish from the same ingredient family, no extra charge, no extra delivery." |
| Rule | Swap limited to recipes sharing at least 70% of their core ingredient list with the original (an internal menu-engineering threshold, not a customer-facing number) |
| Edge case 1 | If no same-family alternative is available that week, the system offers the nearest cross-family recipe and flags it to the culinary team as a menu-planning gap, rather than silently expanding the swap rule |
| Edge case 2 | A customer with a declared allergy or dietary flag is only ever shown swaps that also respect that flag, even within the same ingredient family |
| Edge case 3 | Swaps requested after the fulfilment centre's weekly ingredient order is locked are queued for the following week rather than triggering an emergency reorder |
| Metric that watches it | Ingredient stock-keeping units (SKUs) carried per fulfilment centre per week, and food waste as a percentage of ingredient purchases, both tracked against the 4% target under A18 |
| Model input | A18 (shared with the margin levers in section 18) |

### 17.5 Feature 4: a larger menu, built from the same ingredients

The case's feature is "access a larger menu" `[C PA1]`, the direct answer to "menu becomes repetitive," 18% of stated exits `[C W3]`. A larger menu built the naive way, with new recipes drawing on new ingredients, multiplies stock-keeping units (SKUs) and works against the same waste-reduction lever as an unrestricted recipe swap. The rebuilt Proposal A instead targets a menu of about 40 recipes built from a shared pool of about 120 ingredients, so that variety on the customer's plate does not translate one-for-one into variety on the fulfilment centre's shelves: a 120-ingredient pantry supporting 40 recipes means each recipe draws on roughly a third of the available ingredient set on average, with deliberate overlap engineered into the menu-planning process rather than left to chance.

| Element | Specification |
|---|---|
| Customer-facing wording | "Over 40 recipes to choose from each season, refreshed regularly, so the same three meals never show up twice in a row." |
| Rule | Target menu size approximately 40 live recipes at any time, drawn from a shared ingredient pool of approximately 120 ingredients, with new recipes vetted for ingredient overlap with the existing menu before being added |
| Edge case 1 | A seasonal recipe using an ingredient outside the core 120 is run as a limited-time addition, capped at a small share of weekly orders, so it never becomes a permanent SKU burden |
| Edge case 2 | Recipes with the lowest repeat-order rate are rotated out on a quarterly cycle to keep the active 40 fresh without the total count drifting upward over time |
| Edge case 3 | A customer who has ordered the same recipe three times in the last eight boxes is shown a "try something new" prompt built from recipes inside their ingredient-family preferences, a nudge rather than a restriction |
| Metric that watches it | Distinct recipes ordered per customer per quarter; menu-repetition complaints as a share of support contacts |
| Model input | Shares the margin-lever target under A18; no separate model input of its own |

### 17.6 Feature 5: refer a friend, paid on proof, not on sign-up

The case's feature is "refer friends and earn rewards" `[C PA1]`. Paid at sign-up, a referral reward pays for a friend who signs up once and never orders, which is close to the single costliest failure mode the case describes elsewhere: acquisition spend going to customers who do not stay. The rebuilt Proposal A pays ₹1,000 to each side, but only once the referred friend has taken their third box `[A11]`, which both delays the cost until the referred customer has crossed the point in the survival curve where the case's own numbers show most of the drop-off has already happened (45% gone by month 3 `[C R2]`) and aligns the incentive with retention rather than sign-up.

| Element | Specification |
|---|---|
| Customer-facing wording | "Invite a friend. When they take their third box, you both get ₹1,000 off your next one." |
| Rule | ₹1,000 credit to referrer and ₹1,000 credit to referred friend, both triggered only on the referred friend's third shipped box, total referral cost ₹2,000 a converted referral `[A11]` |
| Fraud guard 1 | One referral code per subscription, tied to a verified payment method, not to an email address alone, to raise the cost of creating throwaway accounts to farm the reward |
| Fraud guard 2 | A referred account that cancels and re-signs up under a different identifier within 12 months is flagged for manual review before any further referral reward is paid against it |
| Fraud guard 3 | Referral rewards are capped at a maximum number of successful referrals a quarter per subscription, so the mechanic cannot be turned into a side income stream rather than a genuine word-of-mouth channel |
| Metric that watches it | Referral share of new sign-ups, modelled at 20% by month 12, 10% in the bear case and 28% in the bull case `[A10]` |
| Model input | A10, A11 |

*The design choice to pay on the third box rather than on sign-up draws on one piece of outside evidence, used here only as rationale for a design decision, never as a HarvestBox figure. A study of 5,181 referred customers at a German retail bank found that referred customers were about 18% less likely to defect than otherwise similar non-referred customers who were still active, and about 22% less likely to leave within the first 21 months `[S33]`. The same study found the referral programme's net cost (a flat reward per referral) was recovered within the observation window through this lower attrition, which is the logic behind tying HarvestBox's own reward to a proof point (the third box) rather than the moment of sign-up: a reward paid early buys sign-ups, a reward paid on proof of early retention buys the thing that study found referred customers actually deliver.*

The referral channel carries the single largest range in the sensitivity table among the operational improvements' revenue-facing inputs: moving the referral share of sign-ups from 10% to 30% moves run-rate EBITDA from −1.12 ₹ Cr to +1.65 ₹ Cr, a ₹2.77 Cr swing `[T7]`, wider than any other single input the model tests. This is also the input with the thinnest supporting evidence behind it: the only directly comparable academic study found (Schmitt, Skiera and Van den Bulte, 2011) is a single European retail-banking programme, not a food subscription, and no Indian or meal-kit-specific referral benchmark could be verified in this research round. Section 20 returns to this point in full.

### 17.7 Kano classification of the five features

Not every feature in the rebuild earns the same weight in a customer's decision to stay. The Kano model separates features that remove dissatisfaction (must-haves) from features that add satisfaction in proportion to how well they are delivered (performance features) from features a customer does not expect but is pleased to find (delighters).

| Feature | Kano category | Why |
|---|---|---|
| Skip or pause with a floor | Must-have | The case's single largest stated exit reason is rigidity (34% `[C W1]`); its absence causes strong dissatisfaction, its presence is simply expected, not celebrated |
| Price ladder (2, 3, 4 meals) | Performance | The second-largest exit reason is price (27% `[C W2]`); more choice at the right price point raises satisfaction roughly linearly with how well the entry plan is priced against the ₹3,500 private label `[C M3]` |
| Recipe swap within family | Performance | Addresses food waste and portion complaints (11% `[C W4]`) in proportion to how reliably a swap is honoured; a swap that frequently fails to find a match disappoints more than it is expected to |
| Larger menu (approximately 40 recipes) | Delighter, becoming a must-have over time | Answers menu repetition (18% `[C W3]`); a customer does not expect a wide menu on sign-up, but once experienced, its absence over time would be felt as a regression, the Kano model's "today's delighter is tomorrow's must-have" dynamic |
| Referral, paid on the third box | Delighter | Not a stated exit reason at all; it is a growth mechanic layered on top of the product experience, valuable to HarvestBox but not something a customer expects or is dissatisfied by its absence |

This classification is this document's own judgement applied to the case's own exit-reason shares, not a case-stated ranking, and the word "assumption" applies to every row's category label.

### 17.8 What is deliberately not built

A rebuild that tried to answer every stated customer want in one release would blur the floor's purpose and widen the menu and SKU count beyond what the gross-margin levers in section 18 can absorb. Four things the case's own customer research and exit reasons could plausibly justify are deliberately left out of this release.

| Not built in this release | Why it is excluded | What would bring it back |
|---|---|---|
| Fully personalised recipe selection (AI-matched to past orders) | Adds engineering cost outside the rebuilt Proposal A's ₹1.8 Cr budget `[C PA2]` and does not map to any of the five stated exit reasons directly | A future release, funded separately, once the core floor and ladder are proven in the pilot (section 22) |
| A loyalty-points programme on top of the referral credit | Risks duplicating the referral mechanic's cost without a distinct retention signal to justify it | Reconsidered only if referral conversion (A10) underperforms its bear case and a second lever is needed |
| Grocery add-ons sold alongside the box (adjacent to Proposal B) | Out of scope for this initiative; Proposal B is not the funded option in this plan (section 16) | Only if the Board separately funds a version of Proposal B after the month 12 gate |
| A standalone ready-to-eat sub-range inside the rebuilt Proposal A's app | This is Proposal C, staged for year 2 behind the month 12 gate, not bundled into the rebuilt Proposal A (section 24) | At the month 12 gate, if cash is at least ₹7 Cr and LTV to CAC of new cohorts is at least 2.2x |

Exhibit for the deck: the five-feature table with its Kano tags and the price ladder's per-meal arithmetic, on the strategic recommendation slide.

## 18. Operational improvements: six levers, each with its arithmetic and its owner

**Answer.** Alongside the rebuilt Proposal A, the case explicitly allows "smaller operational improvements," provided they fit inside HarvestBox's financial constraints `[C G2]`. This document calls that bundle the operational improvements: six levers, none requiring new capital beyond what the rebuilt Proposal A already spends, together worth ₹6.75 ₹ Cr a year against the 2025 loss once headwinds are netted out `[T6]` (1.71 non-working marketing, 0.62 pruning, 1.25 overheads, 1.53 margin, minus 1.64 of headwinds leaves a net 1.47, before the rebuilt Proposal A's own retention and referral effects are added separately). Three levers cut cost (pruning, non-working marketing, overheads), two lift revenue quality without new spend (conversion, win-back), and one lifts gross margin through five smaller changes rather than one large one. Every lever traces to a numbered assumption, and every rupee it costs or saves is shown against the ₹15 Cr the case allows the team to spend `[C K4]` `[C G7]`.

### 18.1 The operational improvements mapped to the acquisition, activation, retention, referral, revenue (AARRR) funnel

Acquisition, activation, retention, referral, revenue (AARRR), also known as pirate metrics, separates a subscription business into the stage where a customer is found, the stage where they have a first good experience, the stage where they keep coming back, the stage where they bring others, and the stage where the business is paid. HarvestBox's own numbers make clear where the funnel leaks hardest: 45% of a cohort is gone by month 3 `[C R2]`, which is a retention failure, not an acquisition one, and the case's own CAC of ₹7,000 `[C U3]` is being spent into that leak rather than against it.

| AARRR stage | What the case shows | Operational-improvements lever that answers it |
|---|---|---|
| Acquisition | ₹8.31 Cr a year of acquisition spend is implied by the stated CAC and new-customer run rate `[M]`, against a further ₹4.29 Cr of marketing the CAC figure does not explain `[M]` | Prune the costliest paid decile (18.2); cut non-working marketing by 40% (18.3) |
| Activation | Website traffic of 14 lakh visits a month converts to a first order at 2.8% `[C X4]` `[C X5]`, no activation-specific case metric exists beyond this | Lift conversion to 3.3% once the entry price and skip promise are on the first page (18.4) |
| Retention | 45% gone by month 3, 81% gone by month 12 `[C R1]` to `[C R4]` | The rebuilt Proposal A (section 17) carries this stage; the operational improvements' own lever is win-back of lapsed accounts (18.5) |
| Referral | No referral mechanic exists in the current product | Referral, paid on the third box (section 17.6); not an operational-improvements lever, carried in the rebuilt Proposal A |
| Revenue | Gross margin has fallen from 38% to 31% in four years `[C P22]` `[C P25]` | Five gross-margin levers worth 4.0 points (18.6); overheads down 12% (18.7) |

*AARRR = acquisition, activation, retention, referral, revenue, a framework for separating a subscription funnel into the stage at which growth or leakage happens. The operational improvements deliberately do not touch retention or referral directly; those two stages are carried entirely by the rebuilt Proposal A (section 17), and the word "assumption" applies to the mapping of which lever answers which stage, which is this document's own organising choice rather than a case-stated structure.*

A snapshot of the funnel today, before any lever is pulled, makes clear why the operational improvements spend almost nothing on the acquisition stage itself and almost everything downstream of it: the stage that is cheapest to fix (revenue quality, through conversion and win-back) is also the stage the case gives the least direct evidence about, while the stage with the most case evidence (retention) is already fully owned by the rebuilt Proposal A rather than the operational improvements.

| AARRR stage | Current reading | Who owns the fix |
|---|---|---|
| Acquisition | ₹7,000 blended CAC `[C U3]`, ₹8.31 Cr a year of CAC-explained spend `[M]` `[T2]` | Operational-improvements levers 18.2 and 18.3 |
| Activation | 14 lakh visits a month at 2.8% conversion `[C X4]` `[C X5]`; the implied 39,200 first orders a month is not measurable from case data, since the web funnel and revenue do not reconcile (section 4) `[T2]` | Operational-improvements lever 18.4 |
| Retention | 55% at month 3, 19% at month 12 `[C R2]` `[C R4]` | The rebuilt Proposal A (section 17), not an operational-improvements lever |
| Referral | Not measured today, no mechanic exists | The rebuilt Proposal A (section 17.6), not an operational-improvements lever |
| Revenue | Gross margin 31%, marketing 30% of revenue `[C P25]` | Operational-improvements levers 18.6 and 18.7 |

*This table restates the same five stages as the table above, read as a current-state snapshot rather than as a lever map, to show that two of the five stages (retention and referral) carry no operational-improvements-specific lever at all; both are the rebuilt Proposal A's responsibility, and the operational improvements' six levers sit entirely inside acquisition, activation and revenue.*

### 18.2 Lever 1: prune the costliest paid acquisition

The case states CAC at ₹7,000 as a single blended figure `[C U3]`. The model's assumption is that this blend hides a decile of paid customers acquired at roughly twice the average cost, and that pruning that decile, which the model treats as 10% of paid volume `[A15]`, lowers the remaining blended CAC to 0.89 of today's figure `[A16]`. The arithmetic behind that multiplier: if the blended ₹7,000 `[C U3]` is a 90:10 mix of a cheaper majority and the costly decile, and the decile costs ₹14,000, then 0.9 × x + 0.1 × ₹14,000 = ₹7,000, so 0.9x = ₹7,000 − ₹1,400 = ₹5,600, and x = ₹6,222. Dividing ₹6,222 by the original ₹7,000 gives 0.889, which the model rounds to the 0.89 pruning multiplier `[A16]`. The ₹14,000 figure for the pruned decile is itself chosen because it exceeds the case's own stated lifetime gross profit of about ₹10,900 `[C U5]` by ₹3,100: a customer acquired at ₹14,000 never pays back under the case's own unit economics, pruning that decile removes acquisition spend that was never going to be recovered rather than cutting spend that works.

| Element | Specification |
|---|---|
| Model input | A15 (10% of paid volume pruned), A16 (resulting CAC multiplier 0.89) |
| Arithmetic | 0.9 × ₹6,222 + 0.1 × ₹14,000 = ₹5,600 + ₹1,400 = ₹7,000 `[C U3]`; ₹6,222 ÷ ₹7,000 = 0.889 ≈ 0.89 `[A16]` |
| What it saves | Contributes 0.62 ₹ Cr a year to the bridge ("Prune paid channels above LTV") `[T6]` |
| What it does not touch | The 90% of paid volume that already pays back inside the case's own CAC and lifetime gross profit figures is untouched |
| Owner | Head of growth marketing, reporting the pruned decile's CAC and conversion quarterly to the Board alongside the blended CAC KPI (section 23) |

### 18.3 Lever 2: cut non-working marketing by 40%

HarvestBox spent ₹12.60 Cr on marketing in 2025 `[T1]`. The model's calibration shows that only ₹8.31 Cr of this is explained by the stated CAC of ₹7,000 `[C U3]` multiplied by the modelled new-customer run rate `[M]`: ₹7,000 × 11,878 new customers a year ÷ ₹1,00,00,000 per ₹ Cr ≈ ₹8.31 Cr `[M]` `[T2]`. The remainder, ₹12.60 Cr − ₹8.31 Cr = ₹4.29 Cr `[M]` `[T2]`, is marketing spend the CAC figure does not explain: brand campaigns, undifferentiated display spend, sponsorships and similar lines that do not show up in a per-customer acquisition cost. The operational improvements cut 40% of this unexplained ₹4.29 Cr `[A17]`: ₹4.29 Cr × 0.40 = ₹1.71 Cr `[T6]`, exactly the figure the bridge carries as "Cut non-working marketing 40%."

| Element | Specification |
|---|---|
| Model input | A17 (40% cut in the base case, 25% in the bear case) |
| Arithmetic | ₹12.60 Cr total marketing `[T1]` − ₹8.31 Cr CAC-explained acquisition `[M]` = ₹4.29 Cr non-working `[T2]`; ₹4.29 Cr × 0.40 = ₹1.71 Cr saved `[T6]` |
| What it saves | 1.71 ₹ Cr a year `[T6]` |
| Risk | Non-working marketing includes brand-building spend that may support conversion and referral indirectly even if it cannot be traced to a specific acquired customer; the 40% cut assumes this indirect effect is small, an assumption stated once |
| Owner | Chief marketing function (or, pending a dedicated hire, the head of growth marketing dual-hatting), reporting marketing as a percentage of revenue quarterly (section 23) |

### 18.4 Lever 3: lift website conversion from 2.8% to 3.3%

The case states website traffic at 14 lakh visits a month `[C X4]` and conversion to a first order at 2.8% `[C X5]`. At that rate, first orders a month are 14,00,000 × 0.028 = 39,200 `[M]` `[T2]`, a figure the model records separately from the roughly 990 net new customers a month the revenue run rate implies `[M]`, a gap discussed fully in section 4 of this document and not reopened here. What the operational improvements lever changes is the conversion rate itself, not the traffic: putting the entry plan's ₹3,600 price point and the skip-or-pause-with-a-floor promise on the website's first screen removes two of the largest stated reasons a visitor might bounce before signing up (price at 27% and rigidity at 34% of eventual exits, which plausibly also deter sign-up, not only retention `[C W1]` `[C W2]`) `[A14]`. The operational improvements targets 3.3% by month 12, against 3.0% in the bear case and 3.5% in the bull case `[A14]`.

| Element | Specification |
|---|---|
| Model input | A14 (2.8% to 3.3% base, 3.0% bear, 3.5% bull) |
| Arithmetic | At 3.3%: 14,00,000 × 0.033 = 46,200 website orders a month `[A14]`, against 39,200 today `[M]` `[T2]`, a rise of 7,000 orders a month on unchanged traffic |
| What it changes | The conversion rate alone; traffic (14 lakh visits `[C X4]`) is held constant in the model, an assumption stated once |
| Bridge contribution | Its own bridge step, "The rebuilt Proposal A: website conversion," worth +1.07 ₹ Cr a year `[T6]`, the step in the whole bridge resting on no outside evidence at all `[A14]` |
| Owner | Head of product, jointly with the growth marketing function, since the change is a website and app copy change, not a media-spend change |

### 18.5 Lever 4: win back lapsed accounts

About 34% of the case's own stated exits are attributed to rigidity `[C W1]`, a reason the current product no longer has once the rebuilt Proposal A's floor exists. The win-back lever targets exactly these lapsed accounts: customers who left for a reason the rebuilt product now answers. The model assumes 40 win-backs a month from month 4 onward in the base case, 20 a month in the bear case `[A12]`, each costing ₹800 in the form of a credit and a targeted message rather than a full new acquisition cost `[A13]`, against a blended CAC of ₹7,000 for a wholly new customer `[C U3]`.

| Element | Specification |
|---|---|
| Model input | A12 (40 win-backs a month base, 20 bear), A13 (₹800 cost per win-back) |
| Arithmetic | 40 win-backs × ₹800 = ₹32,000 a month, or ₹0.032 Cr × 12 = ₹0.384 Cr a year in win-back cost alone, well under one-tenth of a single average month's full acquisition spend of ₹8.31 Cr ÷ 12 ≈ ₹0.69 Cr `[M]` `[T2]` |
| What it targets | Customers who left specifically for rigidity (34% of stated exits `[C W1]`), offered the pause feature itself as the win-back message |
| Bridge contribution | Its own bridge step, "The rebuilt Proposal A: win-back of lapsed customers," worth +0.50 ₹ Cr a year `[T6]`, built from the case's own count of customers who left for rigidity `[A12]` |
| Owner | A retention or customer success function (newly scoped under this plan, not previously named in the case), reporting win-back volume and cost against target monthly |

### 18.6 Lever 5: five gross-margin levers worth 4.0 points

Gross margin fell from 38% in 2022 to 31% in 2025 `[C P22]` `[C P25]`, a drop of seven points over the four years the case documents. The operational improvements do not try to recover all seven; they target 4.0 points of recovery over 15 months `[A18]`, landing at roughly 35%, which is below the 2023 level of 36% `[C P23]` and deliberately conservative against the full seven-point loss. The 4.0 points are built from five named sub-levers, each with its own point value, summing to the target.

| Sub-lever | Point value | What it is |
|---|---|---|
| Waste reduction | +0.8 | Food waste from 6% of ingredient purchases `[C X2]` toward about 4%, enabled by the shared-ingredient menu (section 17.5) |
| Fulfilment-centre absorption | +1.2 | Fixed fulfilment-centre costs spread over more volume as the win-back and conversion levers (18.4, 18.5) lift box counts, with utilisation starting from 68% `[C X1]` |
| Shared-ingredient menu and buying | +1.2 | Fewer distinct SKUs (section 17.5) allow larger per-ingredient purchase volumes and better buying terms |
| Packaging | +0.3 | Smaller, standardised packaging formats across the new plan ladder (section 17.3) rather than three bespoke formats |
| Less first-box discounting | +0.5 | The entry plan's lower headline price (₹3,600, section 17.3) reduces the need for a first-box discount to win a price-sensitive sign-up |
| Total | +4.0 | `[A18]` |

*Point values are in percentage points of gross margin, each a team assumption and together summing to the +4.0 point target `[A18]`; the bear case holds this at +2.5 points and the bull case at +5.0 points. This paragraph's reference to the five sub-lever values is an assumption, stated once.*

The model shows the full 4.0-point target contributing 1.53 ₹ Cr a year to the bridge once blended across the whole customer base `[T6]`, the single largest cost-side contribution of any lever in the operational improvements, larger than pruning, non-working marketing or overheads individually.

### 18.7 Lever 6: overheads down 12%, anchored to the lease

Other operating cost is not where the case's loss sits: it fell from 28% of revenue in 2022 to 23% in 2025 `[T1]`, already a declining share even without deliberate operational improvements, which is insight 3 from this plan's argument (section 3.3) carried forward here. The overheads lever targets a further 12% cut `[A19]`, anchored to one concrete, case-stated figure: the annual head-office lease of ₹1 Cr `[C X3]`. The plan moves head-office functions into spare capacity at the fulfilment centres, which the case states run at 68% utilisation `[C X1]`, freeing the leased space rather than renewing it, paired with a hiring freeze allowed to run through normal staff attrition rather than layoffs.

| Element | Specification |
|---|---|
| Model input | A19 (12% cut base, 5% bear, 12% bull, the bull and base cases coinciding) |
| Anchor figure | ₹1 Cr annual head-office lease `[C X3]`, the single largest identifiable overhead line the case discloses |
| Mechanism | Head office relocated into fulfilment-centre space already running at 68% utilisation `[C X1]`; hiring freeze with normal attrition, no stated layoffs |
| What it saves | 1.25 ₹ Cr a year `[T6]` |
| Owner | Head of operations or facilities, jointly with finance for the lease exit and the hiring-freeze policy |

### 18.8 How the six levers fit inside the case's ₹15 Cr cash test

The case requires that any smaller operational improvement "explain how these fit within the company's financial constraints" `[C G2]`, and separately requires every recommendation to "remain realistic within the company's ₹15 crore cash position" `[C G7]`. None of the six improvement levers requires new capital; all six are cost and process changes funded from the existing cost base, which is why the ₹15 Cr cash table in section 19 shows only the rebuilt Proposal A's ₹1.8 Cr build cost and the staged ready-to-eat's ₹4.0 Cr as discrete capital uses, with the operational improvements levers folded into the operating loss line rather than listed as a separate spend.

| Use of the ₹15 Cr | ₹ Cr | Is this an operational-improvements lever |
|---|---|---|
| The rebuilt Proposal A build | 1.80 | No, this is the rebuilt Proposal A's feature build itself (section 17) |
| Year 1 operating loss | 5.53 | Partly: The operational improvements' savings are already netted into this loss figure |
| Staged ready-to-eat, gated | 4.00 | No, this is the year 2 contingent launch (section 24) |
| Year 2 operating loss | 0.75 | Partly: The operational improvements' full-year run rate is netted into this loss figure |
| Cash left at month 24 | 2.92 | n/a |
| Total | 15.00 | `[T10]` |

The operational improvements levers themselves never appear as a line item because none of them costs money up front: pruning paid acquisition reduces a variable spend, cutting non-working marketing reduces a variable spend, win-back costs ₹800 a conversion funded from the same marketing budget, the margin levers are process and buying changes, and the overheads lever exits a lease rather than signing a new one. The one small exception is the rebuilt Proposal A's own running cost once live, modelled at ₹0.25 Cr a year for support and menu development `[A20]`, which is folded into the operating loss lines above rather than treated as a separate capital use.

### 18.9 Ownership and cadence across the six levers

Each lever in this section names a single owner, but the operational improvements only work as a package if the six owners report against a shared cadence rather than six separate ones. The table below sets out who owns what and how often the Board should expect to see each lever's own number move, tying the ownership lines named in 18.2 through 18.7 to the KPI cadence built out in full in section 23.

| Lever | Owner | Reporting cadence | Primary KPI it feeds |
|---|---|---|---|
| Prune the costliest paid acquisition (18.2) | Head of growth marketing | Monthly | Blended CAC |
| Cut non-working marketing by 40% (18.3) | Chief marketing function or the head of growth marketing | Quarterly | Marketing as a percentage of revenue |
| Lift website conversion (18.4) | Head of product, with growth marketing | Monthly | Website conversion rate (not a standing Board KPI, tracked operationally) |
| Win back lapsed accounts (18.5) | Retention or customer success function | Monthly | 3-month retention of new cohorts |
| Five gross-margin levers (18.6) | Head of operations, with the culinary and supply function for the ingredient-sharing component | Quarterly | Gross margin |
| Overheads and the lease (18.7) | Head of operations or facilities, with finance | Quarterly | Cash in bank |

*This table is this document's own organisational design, not a case-stated reporting structure, and the word "assumption" applies to the specific cadence (monthly against quarterly) assigned to each lever, which follows the logic that cost-side, slower-moving levers (margin, overheads) are checked quarterly while customer-facing, faster-moving levers (acquisition quality, conversion, win-back) are checked monthly, matching the monthly granularity the case's own KPI deliverable implies by asking for a 90-day plan alongside the 24-month one `[C D4]`.*

Six owners reporting on six different cadences is only useful if one person outside the six is reading all of it together, which is why the 90-day plan in section 22 names a single accountable owner for the operational improvements as a package, distinct from the six lever owners named above, whose job is to notice when two levers are moving in opposite directions, for example when the overheads cut starts to slow the fulfilment-centre absorption gain that the margin levers in 18.6 depend on, before either lever owner would see the conflict from inside their own number alone.

Exhibit for the deck: the six-lever table with each lever's rupee contribution to the bridge, on the strategic recommendation slide.

## 19. Financial case: the loss falls from ₹9.2 Cr to ₹0.8 Cr and break-even arrives in month 21

**Answer.** Under the base case (the rebuilt Proposal A, the operational improvements and the staged ready-to-eat launch together), HarvestBox's EBITDA loss falls from ₹9.24 Cr in 2025 `[C K6]` `[T1]` to ₹5.53 Cr in year 1 and ₹0.75 Cr in year 2 `[M]` `[T4]`, crossing into positive monthly EBITDA in month 21 `[M]` `[T4]` and ending the 24-month window at a run rate of +₹0.10 Cr a year `[T6]`. Cash falls from ₹15 Cr today `[C K4]` to a low of ₹2.89 Cr in month 20 before recovering to ₹2.92 Cr at month 24 `[T4]` `[T13]`, never crossing zero across the full window. This is the moneyshot of the whole plan, and it is also, read honestly, a break-even outcome rather than a profit: the margin above zero at month 24 is ten lakh rupees a year, and every single downside the model tests turns that margin negative. This section works through the revenue, margin, EBITDA, cash and retention path in full, with the honest reading carried forward from this plan without softening.

### 19.1 Revenue, margin and marketing: year 1 against year 2

The base case grows revenue from ₹41.3 Cr in year 1 to ₹51.6 Cr in year 2 `[M]` `[T4]`, a rise of ₹51.6 Cr − ₹41.3 Cr = ₹10.3 Cr, almost entirely driven by the staged ready-to-eat launch, which spends in months 13 to 15 and starts sales in month 14, bearing fruit through year 2 (section 24 details the launch itself); the core plan path, without ready-to-eat, grows only to ₹47.8 Cr in year 2 `[M]` `[T4]`, a difference of ₹51.6 Cr − ₹47.8 Cr = ₹3.8 Cr attributable to the gated launch. Gross margin rises from 32.2% in year 1 to 35.1% in year 2 `[M]` `[T4]`, consistent with the five-sub-lever target of +4.0 points phased over 15 months (section 18.6) landing mostly inside the second year. Marketing as a share of revenue falls from 23.4% in year 1 to 17.5% in year 2 `[M]` `[T4]`, against the case's own 2025 figure of 30% `[C P25]`, a swing of 30.0% − 17.5% = 12.5 percentage points over the full window, carrying both the non-working marketing cut (18.3) and the effect of a larger, more efficient revenue base diluting a flatter marketing spend.

| Metric | 2025 (case) | Year 1 (base) | Year 2 (base) |
|---|---|---|---|
| Revenue, ₹ Cr | 42.0 `[C K5]` | 41.3 `[M]` `[T4]` | 51.6 `[M]` `[T4]` |
| Gross margin | 31% `[C P25]` | 32.2% `[M]` `[T4]` | 35.1% `[M]` `[T4]` |
| Marketing, % of revenue | 30% `[C P25]` | 23.4% `[M]` `[T4]` | 17.5% `[M]` `[T4]` |
| EBITDA, ₹ Cr | −9.24 `[T1]` | −5.53 `[M]` `[T4]` | −0.75 `[M]` `[T4]` |

*EBITDA = earnings before interest, taxes, depreciation and amortisation, the case's own stated measure of loss `[C K6]`. Year 1 revenue of ₹41.3 Cr sits slightly below the 2025 case figure of ₹42.0 Cr because the rebuilt Proposal A's floor and plan-ladder changes briefly reduce order frequency and the blended order value before the retention gain and the entry/family plans build volume; this is a modelled transition effect, not an error, and the word "assumption" applies to the phasing of that transition.*

### 19.2 EBITDA and cash by quarter

The monthly model `[T5]` gives a full month-by-month path; the table below extracts the quarterly checkpoints the case's own deliverable (D3, "show the expected impact on revenue, margins, EBITDA, cash and customer retention" `[C D3]`) asks for, at months 3, 6, 9, 12, 15, 18, 21 and 24.

| Month | Active customers | Revenue, ₹ Cr | Gross margin | EBITDA, ₹ Cr | Cash, ₹ Cr | LTV to CAC |
|---|---|---|---|---|---|---|
| 3 | 6,558 | 3.41 | 31.2% | −0.57 | 11.21 | 1.76x |
| 6 | 6,773 | 3.29 | 32.0% | −0.45 | 9.68 | 2.21x |
| 9 | 7,170 | 3.47 | 32.8% | −0.34 | 8.55 | 2.57x |
| 12 | 7,622 | 3.69 | 33.6% | −0.27 | 7.67 | 2.74x |
| 15 | 7,984 | 4.01 | 34.8% | −0.14 | 3.10 | 2.78x |
| 18 | 8,240 | 4.36 | 35.3% | −0.04 | 2.90 | 2.75x |
| 21 | 8,429 | 4.53 | 35.3% | 0.00 | 2.89 | 2.73x |
| 24 | 8,571 | 4.60 | 35.2% | 0.01 | 2.92 | 2.70x |

*LTV = lifetime value, the gross profit a customer is expected to return over their modelled lifetime. All figures are single-month readings from the base-case monthly model `[T5]`, not cumulative or annualised; EBITDA turns from negative to effectively zero between month 20 (0.00, not shown) and month 21, which is the model's stated break-even month `[T4]`.*

Two things stand out against the case's own stated figures. First, the sharp cash step down between month 12 (₹7.67 Cr) and month 15 (₹3.10 Cr) is not a trading loss; it is the staged ready-to-eat launch's ₹4 Cr capital outlay landing across months 13 to 15 `[A23]`, visible in the monthly table as one-off investment lines of ₹1.33 Cr in each of those three months `[T5]`. Second, EBITDA crosses from negative to essentially flat between month 20 and month 21, not a dramatic swing into profit; the base case's break-even is a line crossing, not an inflection into growth.

### 19.3 The EBITDA bridge, 2025 to the month 24 run rate, with a paragraph per step

The bridge takes 2025's actual EBITDA loss of ₹9.24 Cr `[C K6]` `[T1]` through eleven steps to the month 24 run rate of +₹0.10 Cr a year `[T6]`. Each step is this document's own arithmetic, built from the levers in sections 17 and 18, and each is read here in sequence.

| Step | ₹ Cr a year | Running total |
|---|---|---|
| 2025 EBITDA | −9.24 | −9.24 |
| Headwinds: cost inflation, margin drift | −1.64 | −10.88 |
| Cut non-working marketing 40% | +1.71 | −9.17 |
| Prune paid channels above LTV | +0.62 | −8.55 |
| Overheads down 12% | +1.25 | −7.30 |
| Gross margin levers (+4.0 points) | +1.53 | −5.77 |
| The rebuilt Proposal A: retention net of skips | +0.31 | −5.46 |
| The rebuilt Proposal A: referral on the third box | +2.21 | −3.25 |
| The rebuilt Proposal A: win-back of lapsed customers | +0.50 | −2.75 |
| The rebuilt Proposal A: website conversion | +1.07 | −1.68 |
| Year 2: staged ready-to-eat | +1.79 | +0.11 |
| Month 24 run rate | n/a | +0.10 |

*Running totals are this document's own cumulative sum of the bridge steps `[T6]`, shown to make each step's contribution visible. Splitting the acquisition step into its three named levers, rather than reporting one bundled ₹3.77 Cr figure, rounds to ₹3.78 Cr when the three are added separately; that one-cent difference carries through to a running total of +0.11 ₹ Cr after the ready-to-eat step, against the model's own published total of +0.10 ₹ Cr, which is the figure the Month 24 run rate row carries and the one this document treats as authoritative.*

The first step, headwinds of −1.64 ₹ Cr, is not a lever at all; it is the cost of doing nothing differently, assumed cost inflation of 4% a year on other operating cost `[A05]` and continued margin drift of 1.5 points a year without a plan `[A03]`, the same drift the no-decision scenario runs on in full (section 13). Every step after that is a deliberate lever. Non-working marketing and pruning together add 1.71 + 0.62 = 2.33 ₹ Cr, both cost-side levers described fully in sections 18.2 and 18.3. Overheads add a further 1.25 ₹ Cr (18.7), anchored to the ₹1 Cr lease `[C X3]`. The margin levers add 1.53 ₹ Cr (18.6), the single largest individual step on the cost side. The rebuilt Proposal A's own four steps split the feature rebuild's effect by mechanism rather than bundling them: retention net of skips contributes a comparatively modest 0.31 ₹ Cr, because the floor's own cost (lost box revenue from the skips it permits) is netted against the retention gain inside this step; referral on the third box contributes 2.21 ₹ Cr, resting on one outside study, the Lane C referral-economics benchmark `[A10]`, read as directional only; win-back of lapsed customers contributes 0.50 ₹ Cr, built from the case's own count of customers who left for rigidity `[A12]`; and website conversion contributes 1.07 ₹ Cr, resting on no outside evidence at all, an assumed improvement in the entry page's own conversion rate `[A14]`. Together the three sum to 3.78 ₹ Cr (2.21 + 0.50 + 1.07), the largest block in the entire bridge and larger than every cost-side lever combined (2.33 + 1.25 + 1.53 = 5.11 ₹ Cr against this block's 3.78 ₹ Cr, so the two sides are closer than they first appear, but the block is still the largest single grouping), and it is also the least evidenced block, which is why it carries the thinnest outside support of any step in the bridge. The final step, the staged ready-to-eat launch, adds 1.79 ₹ Cr and is the step that tips the run rate from −1.69 ₹ Cr (the core plan path without it, matching the locked figure in this plan) to +0.10 ₹ Cr, meaning the staged launch alone is the difference between a break-even plan and a plan still ₹1.69 Cr short of break-even at month 24.

### 19.4 Cash: the uses of ₹15 Cr and where the low point falls

The case gives HarvestBox ₹15 Cr in cash `[C K4]` and a hard rule that any recommendation stay realistic within that figure `[C G7]`. The base-case plan spends every rupee of it and ends with ₹2.92 Cr still in the bank, after a low point of ₹2.89 Cr in month 20 `[M]` `[T4]`.

| Use | ₹ Cr |
|---|---|
| The rebuilt Proposal A build | 1.80 |
| Year 1 operating loss | 5.53 |
| Staged ready-to-eat, gated | 4.00 |
| Year 2 operating loss | 0.75 |
| Cash left at month 24 | 2.92 |
| Total | 15.00 |

*The five lines sum to exactly ₹15.00 Cr `[T10]`, matching the case's stated cash position `[C K4]` to the rupee; this is a check on the model's internal consistency, not a coincidence the model was built to hit, since every underlying monthly cash figure `[T5]` `[T13]` rolls up independently to this total.*

Quarter by quarter, cash falls from ₹15.0 Cr at month 0 to ₹11.2 Cr at month 3, ₹9.7 Cr at month 6, ₹8.6 Cr at month 9 and ₹7.7 Cr at month 12, before the staged ready-to-eat outlay drops it to ₹3.1 Cr at month 15, essentially flat at ₹2.9 Cr from month 18 through month 24 `[T13]`. For comparison, the core plan path (the rebuilt Proposal A and the operational improvements, without the staged launch) ends month 24 with ₹5.65 Cr in cash `[M]` `[T4]`, ₹5.65 Cr − ₹2.92 Cr = ₹2.73 Cr more than the base case, because it never spends the ₹4 Cr ready-to-eat outlay; this is the trade the Board makes at the month 12 gate (section 24), more cash held in reserve against a lower eventual run rate (−1.69 ₹ Cr against +0.10 ₹ Cr).

Set beside the three options as the case writes them, the cash picture is the starkest single comparison in this document. A as written reaches cash zero in month 16 `[M]` `[T4]`, B as written in month 16 `[M]` `[T4]`, and C as written in month 15 `[M]` `[T4]`, each inside the investors' own 24-month window and each before the base case's own low point of ₹2.89 Cr in month 20 `[M]` `[T4]` is even reached. No decision at all reaches cash zero in month 18 `[M]` `[T4]`, meaning three of the four alternatives to this plan run out of cash before the plan's own low point, and the fourth, no decision, runs out only two months after it. The base case's low point of ₹2.89 Cr is a thinner cushion than a Board used to a ₹15 Cr balance might expect, at roughly 19% of the cash HarvestBox holds today, but it is a cushion that exists, where the four alternatives this document was built against have none left by that point in the window.

### 19.5 Retention and the unit-economics ladder, year 1 against year 2

Retention is the fourth item the case's D3 deliverable asks for by name `[C D3]`. The case's own four-point curve (100%, 55%, 34%, 19% at months 1, 3, 6 and 12 `[C R1]` to `[C R4]`) describes today's subscription; the rebuilt Proposal A's floor moves the month 3 point from 55% to 65% `[C PA3]` and the model recalculates every later month off that new starting point under the same fitted decay rate `[A01]`.

| Month | Today, % active | With the rebuilt Proposal A, % active |
|---|---|---|
| 1 | 100.0 | 100.0 |
| 3 | 55.0 | 65.0 |
| 6 | 34.0 | 40.2 |
| 9 | 25.4 | 30.0 |
| 12 | 19.0 | 22.5 |

*Today's figures at months 1, 3, 6 and 12 are the case's own stated curve `[C R1]` `[C R2]` `[C R3]` `[C R4]`; the rebuilt Proposal A figures at month 3 are the case's own stated target for the proposal `[C PA3]`, and every other month under the rebuilt Proposal A is this document's fitted curve under the same decay rate as today's curve `[T3]` `[A01]`.*

LTV to CAC, the ratio the case itself names as the central unit-economics problem (1.55x today against a 3.0x benchmark `[C U6]` `[C U7]`), climbs through four separate levers, each isolated in the ladder below.

| Step | LTV to CAC |
|---|---|
| Today | 1.55 |
| Retention | 1.67 |
| Margin | 1.83 |
| CAC | 2.70 |
| Benchmark | 3.00 |

*LTV = lifetime value. Each step in the ladder isolates one lever's contribution, holding the others at their prior step's value `[T12]`: retention alone (the rebuilt Proposal A's floor) lifts the ratio from 1.55 to 1.67; adding the margin levers lifts it to 1.83; adding the CAC-side levers (pruning and non-working marketing) lifts it to 2.70, still 0.30 short of the 3.0x benchmark `[C U7]` at the model's month 24 reading.*

The model's year 12 and year 24 readings of LTV to CAC under the base case are 2.74x and 2.70x respectively `[M]` `[T4]` `[T5]`, both below the 3.0x benchmark `[C U7]` even at the end of the 24-month window, which is the clearest single number in this document for why the recommendation is a break-even plan and not a plan that reaches the case's own stated health benchmark within the window the investors have set.

Retention and the unit-economics ladder both feed directly into the Board KPI tree built in full in section 23; the five checkpoints below, drawn from the same base-case path, show how far each KPI has moved by the time the Board would next review it.

| KPI | Today | Day 90 | Month 12 | Month 24 |
|---|---|---|---|---|
| 3-month retention, new cohorts | 55% | Month-2 retention 81% (pilot; today 74%) | 65% | 65% |
| Blended CAC | ₹7,000 | ₹6,276 | ₹4,619 | ₹4,745 |
| LTV to CAC, new cohorts | 1.55x | 1.76x | 2.74x | 2.70x |
| Gross margin | 31.0% | 31.2% | 33.6% | 35.2% |
| Cash in bank, ₹ Cr | 15.0 | 11.2 | 7.7 | 2.9 |

*These five rows are drawn from the full seven-KPI Board tree `[T11]`, limited here to the four that this section's own retention and unit-economics discussion already built up to, plus cash for reference; the fuller KPI design, including stop triggers for each, is in section 23.*

### 19.6 The honest reading, in full

This plan's own working paper states the honest reading of these numbers without softening, and this document carries that reading forward in full, unchanged. The base case crosses break-even in month 21 and then sits just above zero, a run rate of +₹0.10 Cr a year: this is a break-even plan, not a profit plan, inside the 24-month window the investors have set `[C K11]`. Without the year 2 ready-to-eat stage, the run rate is −₹1.69 Cr with ₹5.65 Cr in the bank, a plan that is safer on cash but still loss-making at the 24-month mark `[M]` `[T4]`. Every single downside in the sensitivity table (section 20) turns the run rate negative: there is no input the model tests, taken alone in its downside direction, that leaves the plan above zero at month 24 `[T7]`. The bear case survives the full 24 months only with the month 7 contingency (A25); without it, cash reaches zero in month 20 `[T4]`. The single largest block in the bridge, the rebuilt Proposal A's three referral, win-back and conversion steps together worth +3.77 ₹ Cr `[T6]`, rests for two of its three parts on the assumptions this research round could find the least outside evidence for: the 20% referral share of sign-ups `[A10]` and the 2.8% to 3.3% conversion lift `[A14]`, both discussed with their evidentiary limits in section 20. This is why the plan is built with gates rather than a single committed path: the month 12 gate before the ready-to-eat stage releases, the month 7 contingency before the bear case is allowed to run unmanaged, and the Board KPI stop triggers in section 23 that would halt the plan's assumptions before they compound into a worse outcome than the one modelled here.

None of this changes the comparison with the three options as written. No decision at all ends month 24 at cash zero in month 18 and a run rate of −₹12.52 Cr `[T4]`; A, B and C each as written in the case reach cash zero between month 15 and month 16 `[T4]`, before the investors' 24-month window even closes. A break-even plan that still holds ₹2.92 Cr in the bank at month 24 `[T4]` `[T13]` is a materially different outcome from any of the four alternatives this plan was built against, even though it falls short of the profit the Board would ultimately want. Stating the plan's own shortfall plainly, rather than rounding +₹0.10 Cr up to a claim of profitability, is the discipline this document holds to throughout, and it is also the reason the 90-day plan (section 22) and the Board KPIs (section 23) exist: a plan this close to its own break-even line needs an early-warning system, not a single number repeated with confidence it has not earned.

### 19.7 What the case's D3 deliverable asked for, and where each item sits

The case names five things the financial and risk case must show: revenue, margins, EBITDA, cash and customer retention, plus key risks and mitigations `[C D3]`. This section has carried the first five in full; risks and mitigations are carried in section 21, outside this part's scope, and referenced here only to close the loop on the deliverable as a whole.

| D3 item | Where it is shown in this section |
|---|---|
| Revenue | 19.1 (year 1 and year 2), 19.2 (by quarter) |
| Margins | 19.1 (gross margin and marketing as a percentage of revenue, year 1 and year 2) |
| EBITDA | 19.1, 19.2, 19.3 (the full bridge) |
| Cash | 19.2 (by quarter), 19.4 (the ₹15 Cr uses table and the low point) |
| Customer retention | 19.5 (the survival curve and the LTV to CAC ladder) |
| Key risks and mitigations | Carried in section 21, not this part; the honest reading in 19.6 names the three risk-bearing assumptions this part's own numbers depend on |

Read together, every modelled line in this section ties back to a case fact, a model table or a numbered assumption, and the one place this section departs from a confident single number is exactly where the case itself gives the least to work with: the referral and conversion assumptions behind the bridge's largest step. That departure is deliberate. A financial case that showed every number with equal confidence would be easier to present and harder to defend under cross-questioning; naming the two or three numbers that carry the most uncertainty, and showing exactly how much uncertainty, is what section 20 does next.

One further reconciliation is worth stating plainly before moving on. Section 4 of this document (part A) discloses that three of the case's own figures do not tie to one another on their own terms: active subscribers against boxes a month, web conversion against the implied new-customer run rate, and the lifetime-boxes figure against the stated retention curve. None of the financial-case numbers in this section depends on resolving those three conflicts; the model is built from the case's revenue, cost and retention figures directly, not from the subscriber count or the website-traffic conversion figure that section 4 flags as internally inconsistent. A reader who checked only this section, without reading section 4, would not find a number here that silently assumes one of the three disputed readings is correct, because none of them is load-bearing for the bridge, the cash path or the retention ladder this section builds.

Exhibit for the deck: the EBITDA bridge waterfall from 2025 to the month 24 run rate, with the break-even month marked on the cash line below it, on the financial and risk case slide.

## 20. Scenarios and sensitivity: every single downside turns the run-rate negative, which is why there are gates

**Answer.** The base case is one of three named scenarios: bear, base and bull, each built from the same model with different values for the same eight named inputs `[A08]` `[A10]` `[A12]` `[A14]` `[A17]` `[A18]` `[A19]` `[A23]`. The bear case alone, with no management response, runs out of cash in month 20 `[M]` `[T4]`; with the month 7 contingency (A25) it survives to month 24 with ₹1.46 Cr left `[M]` `[T4]`. Every one of the eight inputs the model tests, moved to its downside value alone, turns the base case's +₹0.10 Cr run rate negative `[T7]`, which is the reason this plan does not treat the base case as a forecast and instead builds a 90-day plan (section 22), a set of Board KPIs with stop triggers (section 23), and two explicit gates (the month 7 contingency and the month 12 ready-to-eat gate, section 24) around it. This section sets out the three scenarios side by side, the bear case with and without its contingency, the ranked sensitivity table, the 24-month grid, and which three inputs matter most to watch.

### 20.1 Bear, base and bull: named inputs side by side

Each of the three scenarios carries its own value for the same eight inputs, never a single point estimate treated as certain.

| Input | Bear | Base | Bull |
|---|---|---|---|
| Skip rate once free (A08) | 10% | 5% | 3% |
| Referral share of sign-ups by month 12 (A10) | 10% | 20% | 28% |
| Win-backs a month from month 4 (A12) | 20 | 40 | 40 |
| Website conversion (A14) | 3.0% | 3.3% | 3.5% |
| Non-working marketing cut (A17) | 25% | 40% | 40% |
| Gross margin levers over 15 months (A18) | +2.5 pts | +4.0 pts | +5.0 pts |
| Overheads cut (A19) | 5% | 12% | 12% |
| Staged ready-to-eat scale (A23) | n/a (not launched in bear) | 80% of Proposal C | 80% of Proposal C |

*Pts = percentage points. The bear case assumes the staged ready-to-eat launch is not attempted, since the month 12 gate conditions (cash at least ₹7 Cr and LTV to CAC of new cohorts at least 2.2x) are unlikely to be met under bear-case inputs; this is an assumption about gate behaviour, stated once, consistent with the gate's own design in section 24.*

| Scenario | Revenue Y1, ₹ Cr | Revenue Y2, ₹ Cr | EBITDA Y1, ₹ Cr | EBITDA Y2, ₹ Cr | Run rate, ₹ Cr | Cash M24, ₹ Cr |
|---|---|---|---|---|---|---|
| Bear, no response | 38.4 | 39.1 | −8.25 | −7.65 | −7.74 | −2.70 |
| Base | 41.3 | 51.6 | −5.53 | −0.75 | +0.10 | 2.92 |
| Bull | 43.0 | 59.5 | −4.78 | +2.48 | +3.67 | 5.90 |

*The bear, no response row runs out of cash before month 24 (cash zero month 20 `[T4]`), so the −2.70 ₹ Cr cash figure at month 24 is a modelled overdraft the company would not actually be able to carry, shown here only to size the gap the contingency closes `[M]` `[T4]`.*

The gap between bear and bull is wide on every line: revenue differs by ₹59.5 Cr − ₹38.4 Cr = ₹21.1 Cr by year 2, EBITDA by ₹2.48 Cr − (−₹7.65 Cr) = ₹10.13 Cr, and the run rate by ₹3.67 Cr − (−₹7.74 Cr) = ₹11.41 Cr, almost the entire difference driven by the same inputs this section ranks below. No single input drives the whole gap; the scenarios move eight inputs at once in the same direction, which is why the sensitivity table in section 20.3 isolates each one.

### 20.2 The bear case, with and without the month 7 contingency

Run with no management response, the bear case's cash reaches zero in month 20 `[M]` `[T4]`, four months before the window the investors have set closes `[C K11]`. The month 7 contingency (A25) is designed to be triggered if the bear-case trajectory becomes visible early: paid acquisition halved, non-working marketing halved again (on top of the operational improvements' own 25% bear-case cut), and overheads cut a further 15% beyond the bear case's 5% `[A25]`. The logic for timing it at month 7 rather than later is stated in the assumption's own rationale: acquisition spend is paid back, on average, only after ten months `[M]` `[T2]`, so a paid-acquisition cut made in month 7 removes spend before most of it would have been recovered anyway, making it the fastest lever available to protect cash.

The contingency itself is three changes, each layered on top of the bear case's own already-reduced levers, not a fresh set of cuts invented at month 7.

| Contingency lever | Bear-case starting point | Month 7 change | What it targets |
|---|---|---|---|
| Paid acquisition | Already pruning the costliest decile at the bear-case level `[A15]` | Halved further | Spend that is paid back only after month 10 on average `[M]` `[T2]`, the slowest-returning cost line in the business |
| Non-working marketing | 25% cut in the bear case `[A17]` | Halved again from that reduced base | The same unexplained ₹4.29 Cr line as lever 18.3, cut harder once the bear path is confirmed |
| Overheads | 5% cut in the bear case `[A19]` | A further 15% cut on top | Head-office and fulfilment-centre cost beyond the ₹1 Cr lease already exited under 18.7 |

*A25 names all three changes together as the month 7 contingency; none of the three is a new lever type, each is an existing lever (18.2, 18.3, 18.7) pushed further once the bear trajectory is visible early enough to act on it.*

| Scenario | EBITDA Y1, ₹ Cr | EBITDA Y2, ₹ Cr | Cash M24, ₹ Cr | Cash zero month |
|---|---|---|---|---|
| Bear, no response | −8.25 | −7.65 | −2.70 | 20 |
| Bear, with the month 7 contingency | −6.18 | −5.56 | 1.46 | none |

*The contingency does not change the bear case's revenue inputs (A08, A10, A12, A14 in their bear values); it changes only the three cost levers named in A25, which is why Y1 EBITDA improves by −6.18 − (−8.25) = 2.07 ₹ Cr even though the top-line bear assumptions are unchanged.*

| Scenario | M0 | M3 | M6 | M9 | M12 | M15 | M18 | M21 | M24 |
|---|---|---|---|---|---|---|---|---|---|
| Bear, no response | 15.0 | 11.1 | 9.0 | 6.9 | 5.0 | 3.0 | 1.1 | −0.8 | −2.7 |
| Bear, with the contingency | 15.0 | 11.1 | 9.0 | 8.0 | 7.0 | 5.8 | 4.5 | 3.0 | 1.5 |

*Both rows are read directly from the model's own monthly bear-scenario cash series `[M]`, sampled every three months. The no-response row crosses zero during month 20, consistent with the headline figure in section 20.2, and ends month 24 at −₹2.70 Cr, a modelled overdraft the company would not actually be able to carry, shown here only to size the gap the contingency closes.*

Read plainly, the contingency is the only one of the eight levers in this plan that converts a scenario which runs out of cash before the window closes into one that does not. Every other lever in sections 17 and 18 improves the outcome; only the contingency, triggered early enough, prevents an outright cash failure under the bear case's own assumptions.

### 20.3 The tornado: every input ranked by its swing

The sensitivity table moves eight inputs one at a time, each across its own stated range, holding every other input at its base value, and records the resulting run-rate EBITDA and month 24 cash at both ends.

| Input and range | Run-rate EBITDA low, ₹ Cr | Run-rate EBITDA high, ₹ Cr | Swing, ₹ Cr | Cash M24 low, ₹ Cr | Cash M24 high, ₹ Cr |
|---|---|---|---|---|---|
| Referral share 10% to 30% | −1.12 | +1.65 | 2.77 | 1.83 | 4.27 |
| Skip rate 12% to 0% | −1.14 | +0.99 | 2.13 | 1.05 | 4.25 |
| 3-month retention 60% to 70% | −0.83 | +1.03 | 1.86 | 1.90 | 3.93 |
| Ready-to-eat sales 50% to 120% of plan | −0.80 | +0.46 | 1.26 | 2.28 | 3.17 |
| Conversion 3.0% to 3.6% | −0.50 | +0.60 | 1.10 | 2.04 | 3.65 |
| Non-working marketing cut 25% to 50% | −0.54 | +0.53 | 1.07 | 1.79 | 3.67 |
| Margin levers +2.5 to +5.0 points | −0.63 | +0.59 | 1.22 | 2.00 | 3.53 |
| Overhead cut 6% to 15% | −0.52 | +0.41 | 0.93 | 1.85 | 3.45 |

*Swing is the high reading minus the low reading for each row, this document's own arithmetic on the model's own published sensitivity outputs `[T7]`, ranked largest to smallest; every row's low reading is negative, which is the basis for this section's own headline finding that every single downside turns the run rate negative.*

Ranked by swing, referral share is the single most consequential input in the whole model, wider even than the skip rate that the case itself names as the headline risk of a flexible subscription `[C PA4]`. Both referral and skip sit above retention itself, which is notable because retention is the case's own headline problem `[C R1]` to `[C R4]` and yet two levers inside the rebuild (how fast customers skip, how many sign-ups come through referral) matter more to the 24-month financial outcome than the retention improvement the proposal is nominally built around.

### 20.4 The 24-month grid: retention against skip rate

Because retention and skip interact (a higher retention target means more customers who can exercise the skip floor), the model also runs a two-way grid across both inputs at once, holding every other input at its base value.

| 3-month retention | Skip 0% | Skip 5% | Skip 10% | Skip 15% |
|---|---|---|---|---|
| 55% | −7.1 | −8.3 | −9.6 | −10.8 |
| 60% | −6.0 | −7.3 | −8.6 | −9.9 |
| 65% | −5.0 | −6.3 | −7.6 | −8.9 |
| 70% | −3.9 | −5.3 | −6.7 | −8.0 |

*Cells are 24-month cumulative EBITDA in ₹ Cr under the base case (the rebuilt Proposal A and the operational improvements, with the staged ready-to-eat launch from month 13 already included), at each combination of retention and skip rate `[T8]`; every cell in the grid is negative because cumulative EBITDA over the full 24 months and the run rate are different measures. The base case's positive run rate, +0.10 ₹ Cr a year `[T6]`, is what months 22 to 24 alone earn once the business has reached its exit pace, not what the first 24 months add up to.*

Reading the grid along its diagonal from the worst cell (55% retention, 15% skip, −10.8 ₹ Cr) to the best (70% retention, 0% skip, −3.9 ₹ Cr) shows a spread of −3.9 − (−10.8) = 6.9 ₹ Cr across the full range this grid tests, confirming that the two inputs together, not either alone, bound the whole plausible range of the base case's cumulative outcome. The case's own stated target for Proposal A, 65% three-month retention `[C PA3]`, sits in the grid's third row; at that retention level, the model's own base-case skip assumption of 5% `[A08]` lands cumulative EBITDA at −6.3 ₹ Cr over 24 months, which checks against the base case's own year-1 EBITDA of −₹5.53 Cr plus its year-2 EBITDA of −₹0.75 Cr `[M]`, the staged ready-to-eat launch already included.

### 20.5 Break-even values: where each input alone would erase the run rate

Because the base-case run rate sits very close to zero (+0.10 ₹ Cr `[T6]`), it is useful to know not just the direction of each input's downside, but roughly where along its own tested range the run rate itself would cross back to zero, holding every other input at base. The values below are this document's own linear interpolation between each input's two tested endpoints in the sensitivity table `[T7]`, shown with the arithmetic, and are a modelled approximation, not a separately run scenario; the model was not re-run to find these exact crossing points, only the two endpoints it already reports.

| Input | Low endpoint | High endpoint | Approximate break-even value | Arithmetic |
|---|---|---|---|---|
| Referral share of sign-ups | 10% at −1.12 | 30% at +1.65 | about 18.1% | (0 − (−1.12)) ÷ (1.65 − (−1.12)) = 0.404; 10% + 0.404 × 20 points = 18.1% |
| Skip rate | 12% at −1.14 | 0% at +0.99 | about 5.6% | (−1.14 − 0) ÷ (−1.14 − 0.99) = 0.535; 12% − 0.535 × 12 points = 5.6% |
| 3-month retention | 60% at −0.83 | 70% at +1.03 | about 64.5% | (0 − (−0.83)) ÷ (1.03 − (−0.83)) = 0.446; 60% + 0.446 × 10 points = 64.5% |
| Website conversion | 3.0% at −0.50 | 3.6% at +0.60 | about 3.27% | (0 − (−0.50)) ÷ (0.60 − (−0.50)) = 0.455; 3.0% + 0.455 × 0.6 points = 3.27% |
| Margin levers | +2.5 pts at −0.63 | +5.0 pts at +0.59 | about +3.8 points | (0 − (−0.63)) ÷ (0.59 − (−0.63)) = 0.516; 2.5 + 0.516 × 2.5 points = 3.8 points |
| Non-working marketing cut | 25% at −0.54 | 50% at +0.53 | about 37.6% | (0 − (−0.54)) ÷ (0.53 − (−0.54)) = 0.505; 25% + 0.505 × 25 points = 37.6% |
| Overhead cut | 6% at −0.52 | 15% at +0.41 | about 11.0% | (0 − (−0.52)) ÷ (0.41 − (−0.52)) = 0.559; 6% + 0.559 × 9 points = 11.0% |
| Ready-to-eat sales | 50% at −0.80 | 120% at +0.46 | about 94.5% | (0 − (−0.80)) ÷ (0.46 − (−0.80)) = 0.635; 50% + 0.635 × 70 points = 94.5% |

Read against the base-case assumed values from section 20.1, four inputs sit uncomfortably close to their own break-even value: the base-case referral share (20% `[A10]`) is only 20% − 18.1% = 1.9 points above its break-even value; the base-case skip rate (5% `[A08]`) is 5.6% − 5% = 0.6 points below its break-even value, meaning skip would have to rise by less than one point from its own base assumption to turn the run rate negative on that input alone; the base-case conversion target (3.3% `[A14]`) is 3.3% − 3.27% = 0.03 points above its break-even value, the thinnest margin of any input tested; and the base-case margin-lever target (+4.0 points `[A18]`) sits comfortably above its own break-even value of +3.8 points, a margin of 0.2 points. The conversion input's margin above its break-even point is effectively zero, which this document flags without softening: a conversion outcome only marginally below the base-case target, on this input alone, would be enough to tip the run rate negative.

### 20.6 Which three inputs matter most, and what would firm each up

Ranked by the width of their swing in the tornado (section 20.3), referral share, skip rate and three-month retention are the three inputs the plan should watch most closely, and they are also, not coincidentally, the three inputs carrying the thinnest outside evidence.

| Input | Swing, ₹ Cr | Evidence behind the base-case value | What would firm it up |
|---|---|---|---|
| Referral share (A10) | 2.77 | A single verified academic study of one European retail-banking referral programme `[S33]`; no Indian or meal-kit-specific referral benchmark could be verified in this research round | A live referral pilot in the 90-day plan (section 22), measuring actual referred sign-up share before the month 12 gate, rather than carrying the 20% assumption forward unchecked |
| Skip rate (A08) | 2.13 | The case's own stated risk that flexibility could reduce order frequency `[C PA4]`, with no outside benchmark for what skip rate a floor-limited pause feature actually produces, since the vendor-blog figures found in Lane C research could not be verified against a named primary study | The pilot city's actual skip rate against the floor, tracked from week one and reported against the KPI stop trigger in section 23 |
| 3-month retention (A08's companion assumption, carried via PA3) | 1.86 | The case's own stated target for Proposal A (55% to 65% `[C PA3]`), which is a case-given figure, not a team estimate, but its achievement depends on execution quality this document cannot verify in advance | The pilot's own month-2 cohort read, named explicitly as the first success test in the 90-day plan (section 22) |

*Swing figures are repeated from section 20.3 for ease of reference `[T7]`. The pilot city design referenced in the right-hand column is detailed fully in section 22 and is the mechanism by which all three of these inputs move from assumption to measured fact inside the first 90 days, before the plan has committed the bulk of its spend.*

The honest reading carried forward from section 19.6 applies with full force here: the largest single block in the financial bridge, worth 3.77 ₹ Cr a year `[T6]`, is built from exactly two of these three thinly evidenced inputs (referral and conversion, with win-back a third, smaller and better-evidenced component), and the plan's entire month 24 run rate of +0.10 ₹ Cr `[T6]` sits inside a margin that any one of the three inputs tested here, taken alone to its downside, is enough to erase. This is not a reason to abandon the plan; every one of the three has a direct, measurable pilot test built into the 90 days (section 22), and the gates in section 24 exist specifically so that the Board is not committed to the staged ready-to-eat launch, or to running the bear case unmanaged, before those three numbers are known rather than assumed.

Exhibit for the deck: the tornado chart ranked by swing, with the retention-by-skip grid as a companion panel, on the financial and risk case slide.
