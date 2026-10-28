## 13. Proposal A as written: the right problem, with a design that loses money in year 1

**Answer.** Proposal A names the correct disease. HarvestBox's subscription punishes a customer for ordering less often, and the case's own number for why customers leave puts rigidity first, at 34% of stated exits `[C W1]`. But the fix as written gives every one of today's 62,000 subscribers `[C K1]` the right to skip from the day it launches, while the retention benefit it is meant to buy accrues only inside the cohorts that sign up after launch, one cohort at a time. In the model, Proposal A as written closes year 1 ₹0.29 Cr worse off than making no change at all, cash still runs out in month 16, and the proposal needs to hold the skip rate at or below 12.6%, the level that cancels its own retention gain `[M]`, to preserve the standalone retention uplift, a ceiling its own feature list does nothing to enforce. We keep the thesis. We replace the design in section 17.

### 13.1 What it is

Proposal A is five features layered onto the existing subscription at an investment of ₹1.8 crore `[C PA2]`: skip or pause orders without penalty, choose 2 or 4 meals instead of the standard box, swap recipes, access a larger menu, and refer friends for rewards `[C PA1]`. Management's own expectation is that three-month retention improves from 55% to 65% `[C PA3]`, and its own stated risk is that customers "may use flexibility to order less frequently" `[C PA4]`. Every element of the proposal is a subtraction of friction. None of it is priced, none of it is capped, and none of it changes what the customer pays. That is the version the model runs under the label "A as written," and it is the version this section evaluates on its own terms, before section 17 rebuilds it.

### 13.2 Economics as written

The case gives one retention number for Proposal A, three-month retention of 65% against today's 55% `[C PA3]`. The model applies that higher survival rate to new cohorts from launch and lets every current subscriber skip freely with no limit, exactly as written. Two results follow.

First, revenue. Modelled revenue for year 1 under Proposal A as written is ₹42.0 Cr and year 2 is ₹46.6 Cr `[M]`, against ₹42.0 Cr and ₹42.0 Cr with no decision taken `[M]`. The year-2 lift of ₹4.6 Cr comes entirely from the better-retained cohorts compounding through their second year on the books; year 1 shows no revenue gain at all, because a cohort signed up in month 1 of the plan has not yet reached the month-3 point where the higher survival rate shows up in the boxes it still orders.

Second, profit. EBITDA (earnings before interest, tax, depreciation and amortisation) under Proposal A as written is −₹10.44 Cr in year 1 and −₹11.05 Cr in year 2 `[M]`, against −₹10.15 Cr and −₹11.86 Cr with no decision taken `[M]`. The year-1 comparison is the one that matters for a Board being asked to fund this: ₹10.44 Cr minus ₹10.15 Cr is a loss that is ₹0.29 Cr larger than doing nothing `[M]`, the locked figure in section 4 of this plan. Proposal A as written is not merely slow to help. In its first year, it actively hurts.

| Measure | No decision | Proposal A as written | Difference |
|---|---|---|---|
| Revenue, year 1 (₹ Cr) | 42.0 | 42.0 | 0.0 |
| Revenue, year 2 (₹ Cr) | 42.0 | 46.6 | +4.6 |
| EBITDA, year 1 (₹ Cr) | −10.15 | −10.44 | −0.29 |
| EBITDA, year 2 (₹ Cr) | −11.86 | −11.05 | +0.81 |
| Cash zero month | 18 | 16 | 2 months earlier |

*EBITDA: earnings before interest, tax, depreciation and amortisation.* All figures `[M]`. The table shows that Proposal A as written gives back year 1 before it gives back anything else, and brings the month cash runs out forward by two months, not back. Section 16.2's scorecard table states a different revenue figure for this option, +₹0.0 Cr rather than this table's +₹4.6 Cr for year 2 alone; that column uses a year-1-only basis for three of its four rows, stated explicitly where it appears, and does not use this section's year-by-year figures.

### 13.3 Why skipping hits everyone at once

The mechanism behind that year-1 loss is structural, not a modelling quirk. Skip or pause without penalty `[C PA1]` is a right every existing subscriber holds from day one of the rollout. The retention gain it is supposed to fund is a property of a cohort's survival curve, and a survival curve only resolves itself one month at a time, as each cohort actually reaches month 2, month 3, and beyond. A customer who signed up two years ago can start skipping on day one of the new policy. A customer whose higher 65% three-month retention is supposed to pay for that skip has not even reached month 3 yet. The cost of the feature is immediate and economy-wide; the benefit of the feature is deferred and cohort-by-cohort. Lay one against the other inside a single year and the cost wins, which is exactly what the ₹0.29 Cr year-1 shortfall `[M]` shows.

This is also why Proposal A's own stated risk, that "customers may use flexibility to order less frequently" `[C PA4]`, is not a tail risk to be managed later. It is the central mechanism of the proposal's own first year, acting before the proposal's own benefit has had time to accrue.

### 13.4 What it fixes, and the break-even skip rate it needs to hold

Mapped against the case's five stated reasons for leaving, Proposal A's features touch three directly and a fourth partially. Skip or pause answers rigidity (34%) `[C W1]`. The larger menu answers repetition (18%) `[C W3]`. Choosing 2 or 4 meals partially answers "too expensive" (27%) `[C W2]`, to the extent a smaller box lowers the price a household pays, though the case gives no specific price for either size. Food waste and portion issues (11%) `[C W4]` are touched indirectly, because a customer who can swap recipes or choose a smaller box is less likely to over-order ingredients they do not use. Summed, the reasons A's feature list is aimed at account for 34 + 18 + 11 = 63% of stated exits `[C W1]` `[C W3]` `[C W4]`, close to the 63% figure this document's insight register assigns to the rebuilt version in section 17; delivery problems (10%) `[C W5]` are outside the scope of any subscription-terms change.

The condition under which the retention uplift survives is the skip rate itself. The model solves for the share of due boxes that must go unskipped for the proposal's own retention gain to survive, rather than being cancelled out, and that rate, the skip rate that cancels Proposal A's retention gain, is 12.6% `[M]`. Proposal A as written contains no mechanism that keeps the skip rate anywhere near that line: there is no limit on how often a subscriber may skip, no floor on boxes taken in a rolling period, and no return date attached to a pause. The feature list that is meant to fix rigidity is, on its own terms, unbounded, and an unbounded skip option has no reason to land at 12.6% rather than considerably higher.

| Row | What it shows |
|---|---|
| 24-month cumulative EBITDA by 3-month retention (rows) and skip rate (columns, 0% to 15%), built from the base case, the full recommended plan including the staged ready-to-eat gate | Even at the 65% retention rate Proposal A promises, cumulative EBITDA over 24 months stays negative at every skip rate tested |

| Retention | Skip 0% | Skip 5% | Skip 10% | Skip 15% |
|---|---|---|---|---|
| 55% | −7.1 | −8.3 | −9.6 | −10.8 |
| 60% | −6.0 | −7.3 | −8.6 | −9.9 |
| 65% | −5.0 | −6.3 | −7.6 | −8.9 |
| 70% | −3.9 | −5.3 | −6.7 | −8.0 |

Figures are ₹ crore, 24-month cumulative EBITDA `[T8]`, run from the base case rather than Proposal A as written in isolation: the 65% retention, 5% skip cell, −₹6.3 Cr, checks against the base case's own year-1 EBITDA of −₹5.53 Cr plus its year-2 EBITDA of −₹0.75 Cr `[M]`. Reading the 65% row, the retention level Proposal A's own stated expectation targets `[C PA3]`, cumulative EBITDA ranges from −₹5.0 Cr at a 0% skip rate to −₹8.9 Cr at a 15% skip rate. Even the best case in that row, a skip rate of zero that the written proposal's own design does nothing to secure, does not reach break-even inside 24 months. The grid shows that retention alone, however much of it the plan delivers, cannot reach profitability without a skip rate that is managed, which is precisely the feature the written proposal omits.

A reason-by-reason view of the same arithmetic makes the gap concrete rather than abstract.

| Stated reason for leaving | Share of exits | Touched by Proposal A as written | How |
|---|---|---|---|
| Too rigid or difficult to skip | 34% | Yes | Skip or pause without penalty `[C PA1]` |
| Too expensive | 27% | Partially | Choosing 2 or 4 meals changes the size of the box, not a stated price `[C PA1]` |
| Menu becomes repetitive | 18% | Yes | Larger recipe menu `[C PA1]` |
| Food waste or portion issues | 11% | Indirectly | Smaller boxes and recipe swaps reduce unused ingredients `[C PA1]` |
| Delivery problems | 10% | No | Nothing in the feature list addresses delivery execution `[C PA1]` |

Figures `[C W1]` `[C W2]` `[C W3]` `[C W4]` `[C W5]`. Read down the "touched" column, four of five reasons have some feature aimed at them, and only delivery problems are entirely outside the proposal's reach; read across to the "share" column, the two reasons the proposal answers most directly, rigidity and repetition, together account for 34 + 18 = 52% of stated exits `[C W1]` `[C W3]`, with the partial and indirect rows adding the rest of the 63% this section's insight register claims. The gap between a feature list that is aimed at the right reasons and a design that loses money in year 1 is not a gap in diagnosis. It is the unbounded skip mechanism described in section 13.3, which turns a correctly targeted fix into a cash outflow that outruns its own benefit.

### 13.5 What it leaves

Delivery problems, 10% of stated exits `[C W5]`, sit entirely outside Proposal A's scope: nothing in skip, pause, sizing, swapping or referral touches a delivery failure. More importantly, the customer acquisition cost (CAC) side of the business, the other half of the 1.55x ratio of lifetime value (LTV) to CAC `[C U6]` that the case flags as the core problem, is untouched by Proposal A as written. The model's LTV-to-CAC ladder decomposes the gap between today's 1.55x and the 3.0x benchmark `[C U7]` into four steps.

| Step | LTV to CAC |
|---|---|
| Today | 1.55 |
| Retention | 1.67 |
| Margin | 1.83 |
| CAC | 2.70 |
| Benchmark | 3.0 |

*LTV: lifetime value. CAC: customer acquisition cost.* `[T12]`. The step labelled "Retention" isolates the contribution of a better-retained cohort, holding gross margin and acquisition cost at today's levels; it moves the ratio from 1.55x to only 1.67x `[T12]`. That is the entire economic contribution Proposal A as written is capable of making on its own, because retention is the only lever its five features pull. The remaining 1.33x of distance to the 3.0x benchmark comes from margin work and acquisition-cost discipline, neither of which Proposal A as written contains. A proposal that improves retention and nothing else was never going to close a gap that is, on the case's own numbers, mostly a margin and marketing problem: 15 of the lost percentage points sit in gross margin and marketing, and none in overheads, as section 3 of this document shows.

### 13.6 Cash path

Cash under Proposal A as written starts at ₹15.0 Cr `[C K4]`, the ₹1.8 Cr investment `[C PA2]` is spent inside the first year, and the business still burns through the balance to reach zero in month 16 `[M]`, two months sooner than the month-18 zero point under no decision at all `[M]`. Against the investors' stated 24-month runway condition for a further funding round `[C K11]`, Proposal A as written does not merely fall short; it shortens the runway the company already has.

| Scenario | Month 0 | Month 6 | Month 12 | Month 18 | Month 24 | Cash zero month |
|---|---|---|---|---|---|---|
| No decision | 15.0 | 10.1 | 4.8 | −0.9 | −7.0 | 18 |
| Proposal A as written | 15.0 | 8.2 | 2.8 | −2.7 | −8.3 | 16 |

Figures are ₹ crore `[T13]` `[M]`. Both rows end negative at month 24; the written version of Proposal A simply gets there faster, because it spends ₹1.8 Cr on a feature set that does not earn its keep inside a single year.

### 13.7 Risk

The main risk Proposal A as written carries is the one the case names for it `[C PA4]`: unmanaged use of flexibility. A secondary risk is opportunity cost. ₹1.8 Cr and twelve months of the Board's one permitted major initiative `[C G0]` `[C G6]` would be spent on a design that, by its own numbers, sets the company back in year 1 and still runs out of cash two months sooner than doing nothing. A third risk is sequencing: having spent the single permitted initiative on a design that does not work, HarvestBox would be in a materially worse position, with less cash and less time, to try again on a better version of the same idea.

### 13.8 What would make it right

The gap between Proposal A as written and a proposal that works is not the thesis; it is the absence of a floor. A rebuild that keeps skip and pause free but attaches a return date to every pause and a floor of two boxes in any three months caps the skip rate near the level the model needs, instead of leaving it unbounded. Pairing that floor with the margin and acquisition-cost levers the LTV-to-CAC ladder shows are still missing, rather than relying on retention alone, is what turns a 1.67x contribution into something closer to the 3.0x benchmark `[C U7]`. That rebuild, named the rebuilt Proposal A, is the subject of section 17, and the six-lever operational improvements that make the margin and CAC side of the ladder move is the subject of section 18. Sections 19 and 20 carry the honest reading of what the two together actually deliver: a path to break-even in month 21, not a profit plan, with every single downside in the sensitivity table turning the run-rate negative.

Exhibit for the deck: the survival-line-with-payback-marker panel on the diagnosis slide carries the 65% retention case alongside the skip-rate grid, with the skip rate that cancels Proposal A's retention gain, 12.6%, marked directly on the chart as the line Proposal A as written has no mechanism to hold.

## 14. Proposal B: ₹8,333 a store a month, beside a kit that costs a third less

**Answer.** Proposal B puts HarvestBox's kit on the shelf of about 800 supermarkets `[C PB1]` for ₹1.3 Cr `[C PB2]`, promising ₹8 Cr of incremental revenue in year 1 at a 22% gross margin `[C PB3]` `[C PB4]`. Divided across 800 stores and twelve months, that is ₹8,333 a store a month `[M]`, less than two boxes at the existing ₹5,200 price `[C K2]`, sitting on a shelf beside a private-label kit the case says launched at about ₹3,500, a third less `[C M3]`. The model shows Proposal B reaching the same cash-zero month as Proposal A as written, month 16 `[M]`, because the channel economics of modern trade, returns, channel cost and working capital eat most of the gross margin before it reaches HarvestBox, and because none of it touches the 45% of customers who leave by month 3. It is a real revenue line. It is not a fix for the business the case describes.

### 14.1 What it is

Proposal B sells HarvestBox's existing meal kits through roughly 800 supermarkets across India `[C PB1]`, for an investment of ₹1.3 crore `[C PB2]`, with a stated year-1 incremental revenue expectation of ₹8 crore `[C PB3]` at an expected gross margin of 22% `[C PB4]`. The case names the main risks itself: lower margins, retailer margins, competition from the ₹3,500 private-label kits, and potential brand dilution `[C PB5]`. Unlike Proposal A, Proposal B adds a new sales channel rather than changing the terms of the existing subscription; in the Ansoff matrix used in section 16, it is market development, taking an existing product into a market HarvestBox has not sold through before, rather than a change to the product itself.

### 14.2 Economics as written

Divide the proposal's own numbers by its own footprint. ₹8 Cr of incremental revenue `[C PB3]` across 800 stores `[C PB1]` over 12 months is ₹8 crore ÷ 800 stores ÷ 12 months = ₹8,333 a store a month `[M]`, the figure the model's calibration table carries as `b_store_m_rs` `[T2]`. At HarvestBox's own order value of ₹5,200 a box `[C K2]`, ₹8,333 is less than two boxes sold a month, out of every store on the list. That is the entire revenue case for each shelf slot, before any of the channel's own costs are taken out.

Those costs are not small. At the stated 22% gross margin `[C PB4]`, gross profit on ₹8 Cr of revenue is ₹8 Cr × 22% = ₹1.76 Cr `[T2]` for the full year. The team's assumption register attaches three further terms specific to grocery retail: returns and unsold stock at 4% of sales, channel cost at 6% of sales, and 5% cannibalisation of HarvestBox's own existing subscription sales `[A21]`, alongside 60 days of receivables and 8% revenue growth in year 2 `[A21]`. Working through those on the ₹8 Cr revenue line: returns and unsold stock cost ₹8 Cr × 4% = ₹0.32 Cr; channel cost is ₹8 Cr × 6% = ₹0.48 Cr; and cannibalisation, applied against the 2025 gross margin of 31% `[C P25]`, costs a further ₹8 Cr × 5% × 31% = ₹0.124 Cr in lost margin on subscription sales the retail channel simply moves rather than creates. Net of all three, the contribution left from ₹1.76 Cr of gross profit is approximately ₹1.76 Cr − ₹0.32 Cr − ₹0.48 Cr − ₹0.12 Cr ≈ ₹0.84 Cr `[A21]`. That figure reconciles to the model's own year-1 result: EBITDA under Proposal B as written is −₹9.31 Cr against −₹10.15 Cr with no decision taken `[M]`, a year-1 improvement of ₹9.31 Cr − ₹10.15 Cr worked the other way, −9.31 − (−10.15) = +₹0.84 Cr `[M]`, the same number the channel-cost arithmetic above lands on from the other direction.

| Line | ₹ Cr |
|---|---|
| Incremental revenue, year 1 | 8.00 |
| Gross profit at 22% margin | 1.76 |
| Less: returns and unsold stock, 4% of sales | −0.32 |
| Less: channel cost, 6% of sales | −0.48 |
| Less: cannibalisation of core sales, 5% at 31% margin | −0.12 |
| Net contribution | ≈0.84 |

Figures `[C PB3]` `[C PB4]` `[A21]` `[C P25]`, assumption. The table shows that of ₹1.76 Cr of headline gross profit, two-thirds is absorbed by the channel's own costs and by sales the channel simply relocates rather than adds, before the proposal's single-year effect on company-wide EBITDA is even counted.

### 14.3 What it fixes

Proposal B fixes a distribution-reach gap: HarvestBox's kit is sold only through its own subscription and quick-commerce listing today `[C K12]`, and this proposal puts it in front of modern-trade shoppers who do not currently encounter the brand at all. It also fixes, on paper, the Board's near-term revenue growth question, since the year-1 revenue outcome against no decision is +₹7.6 Cr, rising to +₹18.0 Cr over 24 months `[T9]`, the single largest revenue lift of the three options evaluated in this document.

### 14.4 What it leaves

Proposal B's feature list touches none of the case's five stated reasons for leaving `[C W1]` `[C W2]` `[C W3]` `[C W4]` `[C W5]`: it is a shelf placement, not a change to the subscription terms a departing customer is reacting to. Retention, the core of the case's diagnosis, is unmoved; the model holds three-month retention at today's 55% `[M]` under Proposal B as written, because nothing in the proposal is designed to change it. The 45% of sign-ups who leave by month 3, a group that loses HarvestBox roughly ₹2.5 Cr a year `[T2]`, as section 6 of this document shows, are untouched by a supermarket shelf slot they will never encounter if they have already stopped ordering.

Lane F evidence on grocery-channel meal kits supports treating this as a real and recurring pattern, not a HarvestBox-specific risk. Walmart rolled meal kits into more than 2,000 stores starting in 2018, at $8 to $15 for a two-person meal, and later discontinued the entire programme; its own corporate page carries an editor's note added in 2024 confirming the programme had ended, with no commercial reason stated `[S70]`. Albertsons bought the meal-kit brand Plated in September 2017 specifically to use its store network, and by November 2019 had phased out Plated's home-delivery subscription business, repositioning the brand as an in-store, private-label culinary line instead `[S25]` `[S26]`; no single stated commercial reason for that wind-down was found in any primary source opened in this research, a limit this document states plainly rather than inferring a cause `[S25]`. The clearest counter-example, Kroger's Home Chef, is also the one least like Proposal B: Home Chef was Kroger's own acquired meal-kit brand, not a third party's product placed on an existing retailer's shelf, and it reached $1 billion of annual sales by October 2021 only after the retailer rotated recipes weekly and expanded the brand to over 2,200 stores `[S69]`, a scale of retail integration and ownership this proposal does not contemplate for HarvestBox.

| Precedent | What happened | Source |
|---|---|---|
| Walmart in-store meal kits | More than 2,000 stores from 2018; programme later ended, no stated reason found | `[S70]` |
| Albertsons and Plated | Acquired September 2017 for store distribution; home-delivery business phased out November 2019, repositioned as in-store private label | `[S25]` `[S26]` |
| Kroger and Home Chef | Retailer's own acquired brand, not a third-party placement; over $1 billion of sales by October 2021 across 2,200+ stores | `[S69]` |

The table shows that the precedent closest to succeeding at scale is the one structurally least similar to Proposal B, because it involved the retailer owning the brand rather than a direct-to-consumer company renting shelf space.

Brand effect is the thinnest evidence lane in this research. No named, quantified study measuring brand dilution from a premium direct-to-consumer food brand entering grocery retail was located `[S36]`; the case's own flagged risk of "potential brand dilution" `[C PB5]` is stated as a risk in the case itself, not something this document can quantify from outside evidence. What can be said with more confidence is the shelf-level price contrast the case itself provides: HarvestBox's own box at ₹5,200 `[C K2]` sits beside private-label kits the case says launched at around ₹3,500 `[C M3]`, a gap of ₹5,200 − ₹3,500 = ₹1,700, or ₹1,700 ÷ ₹5,200 ≈ 33%, close enough to call a third `[C M3]`. Private label is not a hypothetical threat in this channel; India's private-label share in staples such as rice and wheat flour was already 30% to 50% as far back as 2012 to 2013 `[S17]`, and a 2025 industry survey found 52% of Indian consumers say they are switching toward private-label products, with 70% saying the quality feels comparable or better `[S74]`. Those two readings describe different things, a decade-old market-share estimate and a recent attitudinal survey, and this document does not combine them into one current percentage; both point the same direction for a premium kit entering the aisle where that substitution is already strongest.

### 14.5 Working capital

Proposal B is the only one of the three proposals in this document that carries a working-capital burden beyond its stated investment. The model's own scorecard table gives Proposal B a cash-needed figure of ₹2.98 Cr `[T9]`, against a stated investment of only ₹1.3 Cr `[C PB2]`. The difference, ₹2.98 Cr − ₹1.3 Cr = ₹1.68 Cr `[T9]` `[C PB2]`, is working capital tied up in the 60 days of receivables modern-trade retailers typically extract `[A21]`, consistent with the general-trade and modern-trade margin evidence this research found: distributor margins of 10% to 12% and retailer margins of about 25% to 30% in general trade `[S61]`, and a 2011 dispute in which one retailer described being offered 16% to 18% margins against 24% operating costs `[S62]`, context that corroborates long credit cycles and thin realised margins in Indian organised retail generally, though no single named source in this research gives an exact listing-fee or credit-day figure specific to a grocery meal-kit placement.

| Channel | Distributor or retailer margin | Source |
|---|---|---|
| General trade (kirana), distributor margin | 10% to 12% | `[S61]` |
| General trade (kirana), retailer margin | About 25% to 30% | `[S61]` |
| Modern trade, retailer margin (2011 dispute, one named retailer) | 16% to 18% offered against 24% operating costs | `[S62]` |
| Modern trade's share of an average manufacturer's sales (2011 reference period) | About 8% to 9%, against 87% traditional trade | `[S62]` |

The table shows two things a Board weighing Proposal B should hold together: modern trade is a small share of total Indian retail sales for a typical manufacturer even a decade and a half after organised retail began expanding, and the margin a supplier is actually offered in that channel has historically run below what covers a typical retailer's own operating costs, which is consistent with, though does not by itself prove, why 800 stores of shelf space `[C PB1]` produces only ₹1.68 Cr of tied-up working capital rather than a larger number: the receivable sits on a modest per-store volume, ₹8,333 a store a month `[M]`, not a large one.

India's private-label evidence spans two different time periods that this document keeps separate rather than averaging into one current figure, consistent with the caution in `research/raw/R-F.md`.

| Measure | Figure | Period | Source |
|---|---|---|---|
| Private-label share of modern retail, all categories | About 4.5%, projected to 10.5% by 2020 and 25% by 2030 | 2012 to 2013 reference | `[S17]` |
| Private-label share in staples (rice, wheat flour) | 30% to 50% | 2012 to 2013 reference | `[S17]` |
| Consumers switching to private label | 52% | 2025 survey | `[S74]` |
| BigBasket's own private-label share of its sales | Close to 40% of ₹10,062 Cr FY24 sales | FY24 | `[S75]` |

The dated 2012 to 2013 figures and the 2025 consumer-attitude survey describe different things, a market-share estimate from over a decade ago and a recent survey of intent, and this document does not combine them into a single "current" aggregate; both nonetheless point toward a retail environment where private-label substitution pressure on a ₹5,200 kit sitting beside a ₹3,500 alternative `[C K2]` `[C M3]` is real and, on the more recent, if narrower, evidence, rising.

### 14.6 Cash path

Cash under Proposal B as written starts at ₹15.0 Cr `[C K4]`, and reaches zero in month 16 `[M]`, the same month as Proposal A as written, two months sooner than the month-18 zero point under no decision `[M]`.

| Scenario | Month 0 | Month 6 | Month 12 | Month 18 | Month 24 | Cash zero month |
|---|---|---|---|---|---|---|
| No decision | 15.0 | 10.1 | 4.8 | −0.9 | −7.0 | 18 |
| Proposal B as written | 15.0 | 7.5 | 2.7 | −2.6 | −8.1 | 16 |

Figures are ₹ crore `[T13]` `[M]`. The pattern is the same shape as Proposal A: a heavier year-1 and year-2 cost load than the gross-margin arithmetic alone suggests, because channel cost, returns and cannibalisation sit on top of the headline 22% margin.

### 14.7 With the operational improvements

Layered onto the six-lever operational improvements of section 18, Proposal B's year-1 EBITDA improves from −₹9.31 Cr to −₹5.19 Cr, and year-2 from −₹10.71 Cr to −₹4.30 Cr `[M]`, with cash at month 24 turning positive at ₹2.39 Cr `[M]`, against −₹8.14 Cr with no operational improvements `[M]`. That improvement comes almost entirely from the operational improvements' own levers, pruning paid acquisition, cutting non-working marketing, lifting gross margin, and cutting overheads, which apply to the whole business regardless of which proposal is chosen; Proposal B with the operational improvements still carries a 24-month revenue advantage against no decision of +₹12.6 Cr and an EBITDA advantage of +₹12.5 Cr `[M]`, the largest revenue figure of the three operational-improvements comparisons, because grocery retail is the single largest source of incremental top-line growth among the three options.

| Measure | B as written | B with the operational improvements |
|---|---|---|
| EBITDA, year 1 (₹ Cr) | −9.31 | −5.19 |
| EBITDA, year 2 (₹ Cr) | −10.71 | −4.30 |
| Run-rate EBITDA, months 22 to 24 (₹ Cr a year) | −11.37 | −4.65 |
| Cash, month 24 (₹ Cr) | −8.14 | 2.39 |

All figures `[M]`. Even with the operational improvements fully layered on, Proposal B's run-rate at month 24 is still a loss of ₹4.65 Cr a year, worse than the operational improvements applied to Proposal A rebuilt, whose run-rate loss is ₹1.69 Cr `[M]`, because grocery retail's channel costs and cannibalisation persist regardless of how well the core subscription itself is run.

### 14.8 When Proposal B becomes right

Proposal B is a channel decision, and channel decisions compound best on top of a subscription base that has already stopped leaking. If the core retention and unit-economics work in sections 17 and 18 succeeds, and the month-12 gate on cash and LTV-to-CAC described in section 2 of this document is met, grocery retail becomes a lower-risk way to deploy the staged capital this plan reserves for expansion in year 2, because the brand would be entering supermarket shelves backed by a subscription business that converts new sign-ups into long-tenured customers rather than one that loses 45% of them in three months `[M]`. Taken now, ahead of that fix, Proposal B asks the Board to spend its one permitted initiative `[C G0]` `[C G6]` on a new front door for a house that is still losing water out the back.

Exhibit for the deck: the diagnosis slide's exit-reason bar chart carries a fourth, unlabelled bar for Proposal B showing zero overlap with any of the five stated exit reasons, beside the ₹8,333-a-store-a-month calculation shown as an annotation.

## 15. Proposal C: the best market and the worst timing

**Answer.** Proposal C aims at the fastest-growing segment named in the case, ready-to-eat meals at roughly 15% annual growth `[C M2]`, with the highest gross margin of the three proposals at 45% `[C PC4]`. On its own numbers, ₹6 Cr of incremental revenue `[C PC3]` at that margin is ₹2.70 Cr of gross profit `[M]`, which the case's own 10% cannibalisation assumption `[C PC6]` reduces by about ₹0.19 Cr to a net contribution of roughly ₹2.51 Cr `[M]`, against a ₹5 Cr investment `[C PC2]` that does not pay back inside the 24-month window the investors have set `[C K11]`. Cash under Proposal C as written reaches zero in month 15 `[M]`, the earliest of any option modelled in this document, one month sooner than Proposal A or B as written and three months sooner than taking no decision at all. The market is real. The timing, funded now out of the one initiative the Board can afford, is not.

### 15.1 What it is

Proposal C launches chilled, ready-to-heat meals through HarvestBox's existing app and subscription network `[C PC1]`, for ₹5 crore `[C PC2]`, with a stated year-1 incremental revenue expectation of ₹6 crore `[C PC3]` at an expected gross margin of 45% `[C PC4]`, into a ready-to-eat market the case says is growing at approximately 15% a year `[C PC5]`. Management expects about 10% of ready-to-eat sales to cannibalise existing meal-kit sales `[C PC6]`, and names the main risks itself: high upfront investment, food-safety and cold-chain challenges, operational complexity, and a significant cash requirement `[C PC7]`. In the Ansoff matrix used in section 16, Proposal C is product development, a new product sold to HarvestBox's existing customer base, the riskiest of the three categories after diversification.

### 15.2 Economics as written

Work through the proposal's own numbers in order. Gross profit on the stated revenue and margin is ₹6 Cr × 45% = ₹2.70 Cr `[C PC3]` `[C PC4]`, the figure the model's calibration table carries as `c_gp` `[T2]`. Cannibalisation, applied to the 2025 gross margin of 31% `[C P25]` as the rate at which a meal-kit sale lost to ready-to-eat would otherwise have earned, costs ₹6 Cr × 10% × 31% = ₹0.186 Cr ≈ ₹0.19 Cr `[C PC6]` `[C P25]`. Net of that, the contribution is ₹2.70 Cr − ₹0.19 Cr ≈ ₹2.51 Cr `[T2]`, the model's `c_net` figure.

| Line | ₹ Cr |
|---|---|
| Incremental revenue, year 1 | 6.00 |
| Gross profit at 45% margin | 2.70 |
| Less: cannibalisation, 10% of sales at 31% margin | −0.19 |
| Net contribution | ≈2.51 |

Figures `[C PC3]` `[C PC4]` `[C PC6]` `[C P25]`. Set that ₹2.51 Cr of first-year contribution against a ₹5 Cr investment `[C PC2]`, and the arithmetic of payback is immediate: one year of contribution at this rate does not recover half the capital spent, let alone the whole of it. The model's own 24-month result confirms the same point from the top down. The 24-month EBITDA outcome for Proposal C against no decision is +₹4.4 Cr `[T9]`, which is less than the ₹5.0 Cr invested `[C PC2]` `[T9]`: ₹4.4 Cr − ₹5.0 Cr = −₹0.6 Cr `[T9]` `[C PC2]`, a shortfall against the investment, meaning Proposal C as written has not fully paid for itself even after 24 full months on its own improved profitability path, before any discounting for the time value of that cash is applied.

### 15.3 What it fixes

Proposal C answers part of one of the case's five stated exit reasons, menu repetition, 18% of stated exits `[C W3]`, by widening the category of food on offer beyond recipe kits. It also answers, in principle, the "too expensive" objection for a slice of occasions, since a ready-to-heat meal competing at the case's stated ₹250 to ₹450 a meal `[C M2]` sits below HarvestBox's own ₹350 to ₹650 meal-kit band `[C M1]` for at least part of its range. It does not answer rigidity (34%), portion and waste issues (11%), or delivery problems (10%) `[C W1]` `[C W4]` `[C W5]`, none of which a new product category changes.

### 15.4 What it leaves: selling into a leaking base

The single largest problem with Proposal C as written is distributional, not nutritional. It sells a new product through "the existing HarvestBox app and subscription network" `[C PC1]`, which is to say, to the same base that loses 45% of sign-ups by month 3 `[C R2]` and 81% by month 12 `[C R4]`. A customer who has already cancelled cannot be upsold a ready-to-eat line inside the same app. The model holds three-month retention at today's 55% under Proposal C as written `[M]`, exactly as under Proposal B, because nothing in a new product line changes the terms a departing customer is reacting to. Proposal C's addressable market, on day one, is the 55% of each cohort still on the books at month 3, a base the case's own numbers say is shrinking toward 19% by month 12 `[C R4]`.

This research found no named Indian direct-to-consumer brand selling chilled, short-shelf-life, ready-to-heat meals at national scale through a subscription app, the closest adjacent evidence being ITC's Kitchens of India and Aashirvaad ReadyMeals lines, which are ambient, shelf-stable products preserved by traditional methods, a different storage category entirely from the chilled format Proposal C describes `[S58]` `[S59]` `[S60]`. That absence of a scaled Indian precedent is logged as a gap in the evidence base, not as evidence the format cannot work; it does mean Proposal C would be entering with no domestic benchmark to validate its own execution assumptions against, on top of the base-decay problem above.

### 15.5 Lane E: licences, cold chain and shelf life

Proposal C's operational risks are not abstract; they are specific regulatory and physical constraints this research priced where a primary figure exists. On licensing, FSSAI's (Food Safety and Standards Authority of India's) revised turnover thresholds, effective from 1 April 2026, set basic registration up to ₹1.5 crore of turnover, a state licence from ₹1.5 crore to ₹50 crore, and a central licence above ₹50 crore `[S64]`, superseding the pre-amendment bands of ₹12 lakh and ₹20 crore `[S64]`. HarvestBox's ₹42 Cr of 2025 revenue `[C K5]` already sits inside the state-licence band under the revised thresholds, and a ready-to-eat line manufactured and distributed from a central kitchen would need to be licensed accordingly; this document uses the revised, corrected thresholds throughout, per the correction logged in `build-log.md`.

On food-handling rules, FSSAI directed e-commerce food business operators, following a meeting convened on 12 November 2024, to ensure a minimum remaining shelf life of 30% or 45 days, whichever applies, at the point of delivery to the consumer `[S65]`, and that no food business operator may sell on an e-commerce platform without a valid FSSAI licence or registration `[S65]`. Shelf life itself is the weakest-evidenced line in this research's food-safety lane: trade and vendor pages describe an unextended chilled-meal shelf life of roughly a week, and describe modified atmosphere packaging, pasteurisation and high-pressure processing as ways to extend it, but every one of those figures in this research's raw file is marked UNVERIFIABLE, sourced to an equipment vendor's own promotional page or to a search-engine summary rather than an independently opened primary document, and this document does not state any of them as a fact HarvestBox could rely on in a licence application or an investment case.

On penalties, the Food Safety and Standards Act, 2006 sets specific exposure for a ready-to-eat business that gets food safety wrong: up to ₹5 lakh for selling food not of the quality demanded, reduced to ₹25,000 for small manufacturers `[S68]`; up to ₹5 lakh for sub-standard food `[S68]`; and, at the most severe end, unsafe food causing death carries a minimum of seven years' imprisonment, up to life imprisonment, plus a minimum fine of ₹10 lakh `[S68]`. None of these exposures exists for Proposal A or Proposal B in the same way, because neither involves manufacturing and distributing a new, short-shelf-life chilled food product.

| Item | Figure | Source |
|---|---|---|
| FSSAI state-licence band (revised, effective 1 Apr 2026) | ₹1.5 Cr to ₹50 Cr turnover | `[S64]` |
| FSSAI central-licence threshold (revised) | Above ₹50 Cr turnover | `[S64]` |
| Minimum shelf life required at e-commerce delivery | 30% of shelf life, or 45 days | `[S65]` |
| Penalty, sub-standard food | Up to ₹5 lakh | `[S68]` |
| Penalty, unsafe food causing death | Minimum 7 years to life imprisonment, minimum ₹10 lakh fine | `[S68]` |
| India refrigerated-trucks market size, 2024 | ₹7.4 billion, forecast ₹27.7 billion by 2033 | `[S66]` |

*FSSAI: Food Safety and Standards Authority of India.* The table shows that Proposal C introduces a licensing and liability regime HarvestBox has no experience operating under, on top of the base-decay and payback problems above, and that the cold-chain infrastructure market it would depend on is itself still scaling (a 15.0% compound annual growth rate forecast for 2025 to 2033 `[S66]`), meaning capacity and cost benchmarks for the service HarvestBox would need to buy are not yet mature.

Shelf life is nonetheless the specific constraint that turns a strong gross margin into an operational problem, even without a single verified day-count to anchor it. The FSSAI rule this research did verify, that delivered food must retain at least 30% of its shelf life or 45 days, whichever applies, at the point of delivery `[S65]`, means that any chilled product whose total shelf life is itself short, in the range the (unverified) vendor literature suggests before any extension technique, would have very little room between manufacture, central-kitchen dispatch, cold-chain transit and consumer delivery before breaching the rule. India's refrigerated-trucks market, the physical infrastructure this cold chain would run on, was itself still at an early stage of scale, ₹7.4 billion in 2024, with a forecast compound annual growth rate of 15.01% out to 2033 `[S66]`, meaning the national cold-chain capacity Proposal C would lean on is still being built out, not a mature, fully priced utility HarvestBox could simply buy into. The honest statement for the Board is that Proposal C's shelf-life and cold-chain execution risk is real and plausible on the regulatory evidence this research did verify, but that no reliable, India-specific number exists yet to say exactly how tight the operating window would be; that absence of a firm number is itself part of the case for staging Proposal C behind a gate, developed in section 15.9, rather than committing the full ₹5 Cr to it immediately.

| What was checked | What this research found | Status |
|---|---|---|
| Minimum shelf life at e-commerce delivery | 30% of shelf life, or 45 days | VERIFIED `[S65]` |
| Unextended shelf life of a chilled ready meal | Vendor pages suggest roughly a week; not independently confirmed | UNVERIFIABLE, not used as a figure |
| Shelf-life extension by packaging or processing method | Vendor and trade claims exist; none opened as a primary document | UNVERIFIABLE, not used as a figure |
| India's refrigerated-trucks market size, 2024 | ₹7.4 billion, 15.01% compound annual growth rate to 2033 | VERIFIED `[S66]` |

The table separates what this document is willing to state as established, the regulatory floor and the infrastructure market's scale, from what it is not, the actual day-count a HarvestBox ready-to-eat product would need to clear that floor.

The three proposals carry visibly different capital exposures and risk categories, worth setting beside each other once more before turning to cash.

| Proposal | Investment | Primary risk category named in the case | Regulatory exposure beyond today's business |
|---|---|---|---|
| A, fix the subscription | ₹1.8 Cr `[C PA2]` | Customers order less often `[C PA4]` | None: a change to software and process only |
| B, grocery retail | ₹1.3 Cr `[C PB2]` | Margin, retailer terms, brand dilution `[C PB5]` | Retailer contracting; no new food-safety licence class |
| C, ready-to-eat | ₹5.0 Cr `[C PC2]` | Investment size, food safety, cold chain, complexity `[C PC7]` | New FSSAI licence class, Schedule 4 hygiene obligations, FSS Act 2006 penalty exposure `[S64]` `[S68]` |

The table shows Proposal C alone adds an entirely new regulatory category to HarvestBox's risk register, on top of carrying the largest single capital exposure of the three options, which is why section 15.7 treats its risk separately rather than folding it into a single generic "execution risk" line.

### 15.6 Cash path

Cash under Proposal C as written starts at ₹15.0 Cr `[C K4]` and reaches zero in month 15 `[M]`, the earliest cash-zero month of any scenario modelled in this document, including no decision at all.

| Scenario | Month 0 | Month 6 | Month 12 | Month 18 | Month 24 | Cash zero month |
|---|---|---|---|---|---|---|
| No decision | 15.0 | 10.1 | 4.8 | −0.9 | −7.0 | 18 |
| Proposal C as written | 15.0 | 5.8 | 1.6 | −2.8 | −7.6 | 15 |

Figures are ₹ crore `[T13]` `[M]`. The gap between no decision and Proposal C as written is widest at month 6, ₹10.1 Cr versus ₹5.8 Cr `[T13]`, because the ₹5 Cr investment `[C PC2]` is the largest up-front outlay of any of the three proposals and is spent before the new product line has had time to generate offsetting revenue.

### 15.7 Risk

Proposal C carries food-safety and cold-chain risk, which the case names directly `[C PC7]` and the Act 2006 penalty schedule in section 15.5 prices concretely for the first time anywhere in this document's evaluation of the three options. It also carries the highest cash requirement of the three, ₹5.0 Cr against ₹1.8 Cr for Proposal A and ₹1.3 Cr for Proposal B `[C PA2]` `[C PB2]` `[C PC2]`, the largest single exposure against the company's ₹15 Cr of total cash `[C K4]`. A third risk, specific to Proposal C, is operational complexity in a domain, a manufactured chilled food product with its own licence class, that HarvestBox has never run; the company's five fulfilment centres today handle pre-portioned ingredients for customer-side cooking, not finished, ready-to-heat meals requiring their own cook-chill or high-pressure-processing line.

### 15.8 With the operational improvements

Layered onto the six-lever operational improvements of section 18, Proposal C's year-1 EBITDA improves from −₹8.35 Cr to −₹4.24 Cr, and year-2 from −₹9.24 Cr to −₹2.85 Cr `[M]`, with cash at month 24 turning positive at ₹2.92 Cr `[M]`, against −₹7.58 Cr with no operational improvements `[M]`. The 24-month revenue advantage against no decision under Proposal C with the operational improvements is +₹7.9 Cr and the EBITDA advantage is +₹14.9 Cr `[M]`, the largest EBITDA improvement of the three operational-improvements comparisons, reflecting Proposal C's higher gross margin doing more work once the base it sells into has stopped leaking as fast.

| Measure | C as written | C with the operational improvements |
|---|---|---|
| EBITDA, year 1 (₹ Cr) | −8.35 | −4.24 |
| EBITDA, year 2 (₹ Cr) | −9.24 | −2.85 |
| Run-rate EBITDA, months 22 to 24 (₹ Cr a year) | −9.89 | −3.19 |
| Cash, month 24 (₹ Cr) | −7.58 | 2.92 |

All figures `[M]`. Even here, the run-rate at month 24 under Proposal C with the operational improvements is a loss of ₹3.19 Cr a year `[M]`, worse than the run-rate of −₹1.69 Cr under the rebuilt core plan `[M]`, the exact tension insight 12 in section 16 develops in full.

### 15.9 Why Proposal C is right in year 2

The gap between Proposal C taken now and Proposal C taken in year 2 is not its economics, which are identical either way; it is sequencing against capacity and cash. Idle fulfilment-centre capacity today sits at 32%, a figure that follows directly from the case's stated 68% utilisation `[C X1]`: 100% − 68% = 32% `[C X1]`. Staging a smaller version of Proposal C, at 80% of its original scale and ₹4 Cr rather than ₹5 Cr `[A23]`, into that idle capacity in the two largest cities first, released only once cash is at least ₹7 Cr and new-cohort LTV-to-CAC is at least 2.2x at month 12, converts an immediate, unconditional ₹5 Cr bet into an option exercised only once the core business has proven it can fund it. Section 24 develops the staged design and the gate in full; this section's conclusion is narrower, that the case for Proposal C's market, 15% annual growth and 45% gross margin, is not in dispute, but the case for funding it now, out of the one initiative the Board can afford, against a base that is still losing 45% of new customers by month 3, is.

Exhibit for the deck: the diagnosis slide's four-cash-lines panel carries Proposal C as written as the line reaching zero earliest, month 15, directly beside the staged, gated version referenced in the appendix slide's options table.

## 16. Options compared: as written A scores lowest, rebuilt it scores highest

**Answer.** Scored on a single rule-based card, weighted toward profit and cash because those are the tests the investors have set `[C K11]`, Proposal A as written scores lowest of the four options evaluated, 2.80 out of 5, and the rebuilt version of the same proposal, the recommended plan, scores highest, 3.70 `[T9]`. The same rule applied to Proposals B and C once the operational improvements are layered under each of them narrows but does not close that gap: with the identical six-lever operational improvements applied uniformly, Proposal C actually earns ₹0.4 to ₹0.5 Cr more cumulative EBITDA over 24 months than the rebuilt core plan, and still ends with less cash, ₹2.9 Cr against ₹5.6 Cr, and a deeper annual run-rate loss, ₹3.2 Cr against ₹1.7 Cr `[M]`. The lesson of that uncomfortable number is that which initiative scores best in isolation is not the same question as which order to do things in. Sequence beats selection.

### 16.1 Placing the three proposals on the Ansoff matrix

Igor Ansoff's 1957 growth matrix sorts a growth move by whether it sells an existing or a new product into an existing or a new market, with risk rising from market penetration through product development and market development to diversification. Applied to HarvestBox's three options, Proposal A sells the existing meal-kit product to the existing subscriber base on new terms, market penetration, the lowest-risk of the four quadrants. Proposal B sells the existing meal-kit product into a new market, grocery retail shoppers who do not subscribe, market development. Proposal C sells a new product, ready-to-heat meals, to the existing subscriber base, product development. None of the three options is diversification, a new product into a new market, which the case's own ₹15 Cr cash constraint `[C K4]` `[C G1]` would make hard to justify in any case, since diversification is Ansoff's highest-risk, highest-capital quadrant.

| Proposal | Product | Market | Ansoff quadrant |
|---|---|---|---|
| A, fix the subscription | Existing (meal kit) | Existing (current subscribers) | Market penetration |
| B, grocery retail | Existing (meal kit) | New (supermarket shoppers) | Market development |
| C, ready-to-eat | New (chilled ready-to-heat meal) | Existing (current app and subscription base) | Product development |

The table shows why the scorecard in section 16.2 scores growth from each option's year-1 revenue added against no decision, in bands that land in the same order as the Ansoff reading above: Proposal A, confined to penetration of an existing base, adds the least new revenue in year one and so cannot score as high on growth as a move into a genuinely new market or product category, however much revenue its own retention improvement generates over the full two years.

### 16.2 The scorecard, with its rule stated

The model scores each option on four dimensions, growth, profit, cash and risk, each on a 1-to-5 scale, weighted at growth 20, profit 30, cash 30, risk 20 `[A24]`, reflecting the assumption's own rationale that the investors' test is profit and survival, not top-line growth for its own sake `[A24]`. The overall score is the weighted average: Score = (Growth × 20 + Profit × 30 + Cash × 30 + Risk × 20) ÷ 100.

Growth is scored by the year-1 revenue each option adds against no decision `[T9]`: below ₹1 Cr scores 1, ₹1 Cr to below ₹3 Cr scores 2, ₹3 Cr to below ₹5 Cr scores 3, ₹5 Cr to below ₹7 Cr scores 4, ₹7 Cr and above scores 5. That ordering lands in the same place as the Ansoff reading in section 16.1: Proposal A, confined to market penetration, scores 1 either way; Proposal C, product development, scores 4; Proposal B, market development, scores 5. Profit is scored by the 24-month EBITDA change against no decision `[T9]`: below ₹0.5 Cr scores 1, ₹0.5 Cr to below ₹1.5 Cr scores 2, ₹1.5 Cr to below ₹2.5 Cr scores 3, ₹2.5 Cr to below ₹3.5 Cr scores 4, ₹3.5 Cr and above scores 5. Cash is scored by the model's own cash-needed figure `[T9]`, inverted because less capital at risk against a ₹15 Cr total scores better: below ₹1.5 Cr scores 5, ₹1.5 Cr to below ₹2.5 Cr scores 4, ₹2.5 Cr to below ₹3.5 Cr scores 3, ₹3.5 Cr to below ₹4.5 Cr scores 2, ₹4.5 Cr and above scores 1. Risk is scored qualitatively from the case's own named risks for each proposal `[C PA4]` `[C PB5]` `[C PC7]`: a reversible, software-and-process change scores 4; a move carrying brand-dilution, retailer-margin or food-safety and cold-chain exposure scores 2.

| Option | Year-1 revenue vs no decision (₹ Cr) | 24-month revenue vs no decision (₹ Cr) | 24-month EBITDA vs no decision (₹ Cr) | Cash needed (₹ Cr) | Growth | Profit | Cash | Risk | Score |
|---|---|---|---|---|---|---|---|---|---|
| A, fix the subscription (as written) | +0.0 | +4.7 | +0.5 | 1.80 | 1 | 2 | 4 | 4 | 2.80 |
| B, grocery retail | +7.6 | +18.0 | +2.0 | 2.98 | 5 | 3 | 3 | 2 | 3.20 |
| C, ready-to-eat | +5.4 | +13.2 | +4.4 | 5.00 | 4 | 5 | 1 | 2 | 3.00 |
| A rebuilt | −0.7 | +5.1 | +14.5 | 1.80 | 1 | 5 | 4 | 4 | 3.70 |

All figures `[T9]`. On 24-month revenue, A rebuilt adds the least of the four options (+₹5.1 Cr against +₹18.0 Cr for B); the weights put profit and cash first `[A24]`. Worked for Proposal A rebuilt, the arithmetic behind the 3.70 is (1 × 20) + (5 × 30) + (4 × 30) + (4 × 20) = 20 + 150 + 120 + 80 = 370, divided by 100 = 3.70 `[T9]`. The table's own rule produces an outcome that is easy to misread at a glance: Proposal A as written scores lowest of the four, 2.80, precisely because it is the only option that is simultaneously low-growth on this scoring, weak on profit, and no different in risk from its own rebuilt version; Proposal A rebuilt scores highest, 3.70, by keeping the same low capital requirement and low risk profile while fixing the profit dimension almost completely.

Stating the band rule in one place, rather than scattering it through the prose above, lets a judge check the scorecard's arithmetic without re-deriving it.

| Dimension | Weight | Score 1 | Score 2 | Score 3 | Score 4 | Score 5 |
|---|---|---|---|---|---|---|
| Growth, year-1 revenue vs no decision | 20 | Below ₹1 Cr | ₹1 Cr to below ₹3 Cr | ₹3 Cr to below ₹5 Cr | ₹5 Cr to below ₹7 Cr | ₹7 Cr and above |
| Profit, 24-month EBITDA vs no decision | 30 | Below ₹0.5 Cr | ₹0.5 Cr to below ₹1.5 Cr | ₹1.5 Cr to below ₹2.5 Cr | ₹2.5 Cr to below ₹3.5 Cr | ₹3.5 Cr and above |
| Cash needed | 30 | ₹4.5 Cr and above | ₹3.5 Cr to below ₹4.5 Cr | ₹2.5 Cr to below ₹3.5 Cr | ₹1.5 Cr to below ₹2.5 Cr | Below ₹1.5 Cr |
| Risk | 20 | Highest named exposure | n/a | n/a | n/a | Reversible, software and process only |

The table shows the scorecard rewards low capital intensity and reversibility as heavily as it rewards profit improvement, by design `[A24]`: the weights of 30 on cash and 30 on profit, against 20 each on growth and risk, encode the plan's own reading of what the investors are actually testing, a credible path to profitability within 24 months on a fixed ₹15 Cr of cash `[C K11]` `[C K4]`, not which option grows the fastest.

### 16.3 The same improvements, compared across options

The scorecard above compares each option as written against the others. A fairer and harder test is to apply the identical six-lever operational improvements from section 18 underneath each of the three options and compare what is left, because the operational improvements themselves, pruning paid acquisition, cutting non-working marketing, lifting gross margin and cutting overheads, are available regardless of which single major initiative the Board funds.

| Measure | Improvements only | B with the operational improvements | C with the operational improvements | A rebuilt (core) |
|---|---|---|---|---|
| EBITDA, year 1 (₹ Cr) | −6.02 | −5.19 | −4.24 | −5.53 |
| EBITDA, year 2 (₹ Cr) | −5.43 | −4.30 | −2.85 | −2.02 |
| Run-rate EBITDA, months 22 to 24 (₹ Cr a year) | −5.77 | −4.65 | −3.19 | −1.69 |
| Cash, month 24 (₹ Cr) | 3.55 | 2.39 | 2.92 | 5.65 |

All figures `[M]`. Reading down the run-rate row, the column that answers "what does this business earn a year once the dust has settled," the rebuilt core plan is the only column that reaches a run-rate loss under ₹2 Cr a year; both B with the operational improvements and C with the operational improvements still run at an annual loss of ₹3 Cr to ₹5 Cr even after the identical improvements are applied.

### 16.4 Insight 12, in full, including its uncomfortable half

Reading the cumulative EBITDA row rather than the run-rate row tells a different, less comfortable story. Summed over both years, the core plan's cumulative EBITDA is −5.53 + −2.02 = −₹7.55 Cr `[M]`, while Proposal C with the operational improvements' cumulative EBITDA is −4.24 + −2.85 = −₹7.09 Cr `[M]`. The difference, −7.09 − (−7.55) = +₹0.46 Cr `[M]`, rounds to the roughly ₹0.4 to ₹0.5 Cr this document's insight register states: with the identical improvements applied, Proposal C actually earns more cumulative EBITDA over 24 months than the rebuilt core plan does. That is true, and stating it plainly, rather than only citing the figures that favour the recommendation, is the test this document holds itself to.

It is also not the end of the comparison. The same two columns diverge sharply on the two tests the Board has actually set, cash and run-rate profitability. Cash at month 24 is ₹2.92 Cr under Proposal C with the operational improvements against ₹5.65 Cr under the rebuilt core plan `[M]`, a difference of ₹5.65 Cr − ₹2.92 Cr = ₹2.73 Cr `[M]` less cash in hand. Run-rate EBITDA at month 24 is −₹3.19 Cr a year under Proposal C with the operational improvements against −₹1.69 Cr a year under the rebuilt core plan `[M]`, a difference of −3.19 − (−1.69) = −₹1.50 Cr `[M]` a year worse. Proposal C with the operational improvements earns slightly more cumulative profit over 24 months and leaves the company with a thinner cash cushion and a deeper ongoing loss rate to climb out of, because its ₹5 Cr of up-front capital `[C PC2]` is spent against a base that, at the point of spending, is still losing customers nearly as fast as it always has.

| Measure | The core plan | C with the operational improvements | Difference |
|---|---|---|---|
| Cumulative EBITDA, 24 months (₹ Cr) | −7.55 | −7.09 | C better by 0.46 |
| Cash, month 24 (₹ Cr) | 5.65 | 2.92 | Core better by 2.73 |
| Run-rate EBITDA, months 22 to 24 (₹ Cr a year) | −1.69 | −3.19 | Core better by 1.50 |

All figures `[M]`. The table carries both halves of insight 12 side by side on purpose: a Board that only reads the first row would conclude Proposal C with the operational improvements is the better bet; a Board that reads all three rows sees that it buys a marginally better 24-month total at the cost of a materially weaker ending cash position and a materially worse run-rate, the two measures the investors' 24-month profitability condition `[C K11]` actually tests.

### 16.5 Why sequence beats selection

The resolution is not to choose between Proposal A rebuilt and Proposal C; this document's recommendation in section 2 stages both, in order. The rebuilt Proposal A, together with the operational improvements, is funded now, inside the ₹1.8 Cr Proposal A already asked for `[C PA2]`. A staged, 80%-scale version of Proposal C, at ₹4 Cr rather than ₹5 Cr `[A23]`, is released in year 2 only if cash is at least ₹7 Cr and new-cohort LTV-to-CAC is at least 2.2x at month 12, a gate the base case clears with room: modelled cash at month 12 under the core path is ₹7.67 Cr `[M]`, above the ₹7 Cr gate, and modelled LTV-to-CAC at month 12 is 2.74x `[M]`, above the 2.2x gate. Clearing that gate turns the staged, gated version of Proposal C into the "Recommended plan, base" scenario, whose 24-month outcome is a run-rate of +₹0.10 Cr a year `[M]` and a break-even month of 21 `[M]`, strictly better on every measure that matters to the Board than taking the full, unstaged version of Proposal C now.

The sequencing argument holds across more than the base case. The model's bear and bull scenarios, built on named, differing inputs rather than a single point estimate, test whether the staged design still makes sense when the world turns out worse or better than expected.

| Scenario | EBITDA, year 1 (₹ Cr) | EBITDA, year 2 (₹ Cr) | Break-even month | Cash, month 24 (₹ Cr) |
|---|---|---|---|---|
| Bear, no response to a month 7 shortfall | −8.25 | −7.65 | none | −2.70 |
| Bear, with the month 7 contingency | −6.18 | −5.56 | none | 1.46 |
| Base (the recommended plan, staged) | −5.53 | −0.75 | 21 | 2.89 |
| Bull | −4.78 | +2.48 | 14 | 5.90 |

All figures `[M]`. Even in the bear case, the staged design with its month-7 contingency, halving paid acquisition and non-working marketing and cutting overheads a further 15% `[A25]`, keeps cash positive through month 24, while the same bear conditions with no response at all run cash negative by month 20 `[M]`. In the bull case, the staged design reaches break-even four months earlier than the base case, in month 14 `[M]`, because a faster-than-expected improvement in retention, referral and conversion accelerates the same gate rather than requiring a different plan. The staged sequence is not a bet that the base case is the only outcome that matters; it is a design that degrades gracefully in the bear case and accelerates cleanly in the bull case, which a single, unstaged commitment of ₹5 Cr to Proposal C on day one cannot do, because that capital is spent before any scenario has had the chance to reveal itself.

The uncomfortable half of insight 12 is, read this way, an argument for the staging design rather than against it. Proposal C's economics are good enough that they are worth having; they are not good enough to justify spending ₹5 Cr of a ₹15 Cr cash balance on them before the base they depend on has stopped leaking. Doing Proposal A rebuilt first does not merely avoid that mistake; it is what makes the later, smaller, gated version of Proposal C cheaper to run and more certain to work, because it sells into a base that, by month 12 of the core plan, is retaining new cohorts at a materially higher rate than today. Selection asks "which one option is best." Sequence asks "in what order do these options stop competing with each other for the same scarce cash and attention," and on HarvestBox's own numbers, that second question has a clearer answer than the first.

Conclusively, the scorecard's own rule says Proposal A as written is the weakest of the four cards on the table and Proposal A rebuilt is the strongest; the same operational-improvements comparison says Proposal C is a genuinely close second on cumulative profit alone, but a clear third on the two tests, cash and run-rate, that the investors actually set; and the honest reading of both results together is not that one proposal beats the others in isolation, but that funding the rebuild first and staging ready-to-eat behind a cash-and-retention gate in year 2 captures most of Proposal C's profit advantage without its cash and timing risk. That is this document's recommendation, and nothing in sections 13 to 16 moves it.

Exhibit for the deck: the strategic-recommendation slide carries the "do not" and "do" cards from section 2 beside a condensed version of the scorecard heat grid above, with insight 12's two-row comparison shown as a single annotated callout rather than a full table, closing on the same "Conclusively" line this section ends on.
