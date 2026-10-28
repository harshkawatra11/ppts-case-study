## 5. Retention: 45% of sign-ups are gone by month 3 and CAC is not paid back until month 10

**Answer.** Of every 100 customers HarvestBox signs up, 45 are gone by month 3 `[C R2]`, and the money spent acquiring them is not recovered on average until month 10, by which point only 23% of the original cohort is still ordering `[T2]`. The rebuilt Proposal A narrows this fall but does not remove it: the floor asks nothing of a customer until the back end of a three-month window, so the first ninety days decide more of the twenty-four month outcome than any single feature in the rebuild. Outside benchmarks on meal-kit retention are thin: most of what desk research found could not be confirmed against a primary source, and the two readings this document treats as solid evidence describe a different country, category and decade from HarvestBox's own.

Customer acquisition cost (CAC) is what HarvestBox pays, on average, to sign up one new customer; the case states it at ₹7,000 `[C U3]`. Lifetime value (LTV) is the gross profit a customer returns over the time they stay subscribed; the case puts it at about ₹10,900 `[C U5]`. Both terms recur through this section and the next.

### 5.1 The case's four survival points fit a single decay curve

The case gives four points on HarvestBox's own retention curve: 100% of a cohort is active in month 1, 55% in month 3, 34% in month 6 and 19% in month 12 `[C R1]` `[C R2]` `[C R3]` `[C R4]`. Team assumption A01 treats a "box" as one month of dinners and fits a geometric decay through these four points, carrying a constant monthly retention rate of 0.9058 after month 12 `[A01]` `[T2]`. The fitted curve reproduces the case's own stated lifetime of 6.8 boxes `[C U4]` almost exactly, which is why this document treats the case's four points as internally consistent on this reading rather than as four disconnected numbers (see section 4 of this document for the full working).

The table below sets out the full monthly curve under this fit, for both the subscription as it stands today and for the modelled effect of the rebuilt Proposal A, which the model moves 3-month retention from 55% to 65% `[C PA3]` and recalculates every later month off that new starting point.

| Month | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Today, % active | 100.0 | 74.2 | 55.0 | 46.9 | 39.9 | 34.0 | 30.9 | 28.0 | 25.4 | 23.1 | 20.9 | 19.0 |
| With the rebuilt Proposal A, % active | 100.0 | 80.6 | 65.0 | 55.4 | 47.2 | 40.2 | 36.5 | 33.1 | 30.0 | 27.3 | 24.7 | 22.5 |

*CAC = customer acquisition cost. The two case-anchored months are month 3 (55% today, 65% with the rebuilt Proposal A `[C PA3]`) and month 6 (34% today `[C R3]`); every other month is the model's geometric fit `[T3]`, tagged `[T3]` throughout.*

This table shows that the rebuilt Proposal A does not flatten the curve, it shifts the whole thing upward: the shape of the decay (fast in months 1 to 3, slower afterward) is unchanged, because the fit applies the same monthly retention rate on top of a higher month-3 starting point. By month 12 the gap between the two lines (22.5% against 19.0%) is 3.5 points, smaller in absolute terms than the 10-point gap the case states for month 3, because both curves are decaying toward the same long-run monthly rate `[A01]`.

### 5.2 Cumulative gross profit against CAC: the month the cohort pays for itself

A customer's monthly survival percentage, divided by 100, is also the number of boxes an average surviving cohort orders that month (this is how the model's "sum of months 1 to 12" figure of 4.97 boxes `[T2]` is built: it is the sum of the twelve survival fractions in the "Today" row above, divided by 100). Multiplying cumulative boxes by gross profit per box of ₹1,600 `[C U2]` and comparing the running total against the ₹7,000 CAC `[C U3]` gives the month-by-month payback picture the case's own "payback" and "cohort remaining" figures summarise in one line each `[T2]`.

| Month | Cumulative boxes | Cumulative gross profit, ₹ | CAC, ₹ | Gap against CAC, ₹ |
|---|---|---|---|---|
| 1 | 1.00 | 1,600 | 7,000 | −5,400 |
| 3 | 2.29 | 3,667 | 7,000 | −3,333 |
| 6 | 3.50 | 5,600 | 7,000 | −1,400 |
| 9 | 4.34 | 6,949 | 7,000 | −51 |
| 10 | 4.57 | 7,318 | 7,000 | +318 |
| 12 | 4.97 | 7,957 | 7,000 | +957 |

*CAC = customer acquisition cost. Cumulative boxes are the running sum of the "Today" survival fractions in the table above, divided by 100; gross profit is cumulative boxes multiplied by ₹1,600 a box `[C U2]`; the gap column is cumulative gross profit less the ₹7,000 CAC `[C U3]`. Figures are this document's own arithmetic on model and case inputs, tagged `[M]`.*

The crossing point sits between month 9 (the cohort is still ₹51 short of covering its own acquisition cost) and month 10 (the cohort is ₹318 ahead), which is exactly the payback month the model reports `[T2]`. At that crossing point, 23.1% of the original cohort is still ordering `[T2]`. Put plainly: HarvestBox recovers what it spent to acquire a customer only after losing more than three-quarters of that customer's original cohort. Every customer still ordering past month 10 is now pure margin against that acquisition spend, which is also why the 55% who are still active at month 3 `[C R2]` and go on to become the document's "stayers" in section 6 carry most of the business's profitable weight.

### 5.3 Comparison with Lane C benchmarks, with the caveat the raw research itself attaches

The research lane built to benchmark retention, CAC and referral economics (Lane C) found that most of the specific percentages reported in press and vendor coverage of meal-kit retention could not be confirmed against a primary document in this research round; they are recorded as UNVERIFIABLE in the raw file and are not carried into this document as sourced figures. Two readings are the exception, and the rest is reported here only as context, clearly marked as unconfirmed.

| Reading | Figure | Status | What it describes |
|---|---|---|---|
| Bloomberg Second Measure, Blue Apron, six months after first purchase, May 2016 snapshot | 28% still subscribed | VERIFIED, direct page read `[S30]` | A single US meal-kit company, one provider's card-transaction panel, a snapshot a decade before this case |
| A 1010data analysis reported in October 2016 press coverage, HelloFresh, Blue Apron and Plated combined | About 10% still subscribed at six months | UNVERIFIABLE in this research: the underlying 1010data report could not be opened directly, only press summaries of it, and the three named companies' spokespeople disputed the figure without publishing a rebuttal number | Three US meal-kit companies, a different data provider and panel from the figure above, same approximate period |
| McKinsey, "Thinking Inside the Subscription Box", a November 2017 US consumer survey | 38% cancel within 3 months, over 62% within 6 months, across all subscription-box categories | UNVERIFIABLE in this research: the primary McKinsey page could not be opened directly in this session, only search-engine summaries, which agree with each other but are not a document read | All US subscription boxes (curation and replenishment), not meal kits specifically |
| Eightx category-benchmark estimate, citing Blue Apron's own SEC filings for customer counts | Monthly meal-kit churn roughly 8% to 15% | UNVERIFIABLE in this research: a vendor blog's own estimate, no named primary panel for the range itself | A blog's category estimate, not a company-disclosed retention curve |
| IJRASET, "Subscription-Based Grocery Kit", a 2025 academic study of at least 150 respondents across major Indian metro cities | Price sensitivity 21%, ingredient quality 21.6% as adoption drivers; no churn or retention figure reported | VERIFIED (methodology and driver percentages); the paper itself states retention and churn data is outside its scope `[S32]` | Indian metro respondents, adoption drivers only, not a retention curve |

*CAC = customer acquisition cost. "Status" repeats the verification status given in the raw research file for each row, never upgraded or softened here.*

Read against this table, HarvestBox's own case-stated 34% retention at six months `[C R3]` sits closer to the VERIFIED Blue Apron figure of 28% `[S30]` than to the UNVERIFIABLE 10% figure sometimes quoted in press coverage of the US meal-kit category. This is the three-way conflict the research instructions for this lane flagged by name: HarvestBox's 34%, a 1010data figure near 10% that this research could not verify, and a verified Bloomberg Second Measure figure of 28% for Blue Apron alone. None of the three describes the same company, year or market, and this document does not pick a winner among them. What can be said without overreaching is that HarvestBox's stated six-month retention is not an outlier against the one VERIFIED external figure this research located, even though it is well above the unverified press figure some secondary sources repeat. The honest reading is that meal-kit retention benchmarks vary enormously by provider, year and category definition, and a team that wanted a tighter external anchor would need a primary dataset this research round did not find.

### 5.4 Where in the first 90 days customers fall out, and what the case lets us say about why

The case gives five reasons customers leave, as shares of total exits: too rigid or difficult to skip 34% `[C W1]`, too expensive 27% `[C W2]`, menu becomes repetitive 18% `[C W3]`, food waste or portion issues 11% `[C W4]` and delivery problems 10% `[C W5]`. The case does not break these shares down by month, so this document cannot state which specific reason drives the month 1 to 3 fall as opposed to the month 3 to 6 fall; that would be inventing precision the source does not support. What the case does support is the shape: 45 points of the eventual 81-point twelve-month attrition happen inside the first 90 days `[C R1]` `[C R2]`, before a customer has had a chance to use the menu for more than a handful of weeks, which points toward decision-stage frictions (the two largest reasons, rigidity and price, together 61% of stated exits `[C W1]` `[C W2]`) mattering earlier than experience-stage frictions such as menu fatigue, which would plausibly need several boxes to be felt. This is an inference from the shares and the curve together, not a case fact on its own, and it is treated here as an assumption about timing rather than a stated finding.

The one piece of outside, India-specific evidence this research located on why customers choose or reject a subscription food model, the IJRASET survey of Indian metro respondents `[S32]`, found price sensitivity (21%) and ingredient quality (21.6%) as the two largest named adoption drivers, with meal variety and customisation (13.8%) and ease of use (10.8%) behind them. This lines up directionally with the case's own ranking of price as a major stated reason to leave (27%, second only to rigidity) `[C W2]`, though the IJRASET paper is about why Indian respondents adopt a service, not why HarvestBox customers specifically leave one, and the two surveys are not measuring the same population or the same decision.

| Reason | Share of stated exits | When it most plausibly bites, on the shape of the curve alone |
|---|---|---|
| Too rigid, difficult to skip | 34% `[C W1]` | Likely early: a customer locked into a box they did not want to order that week is a month 1 to 3 experience |
| Too expensive | 27% `[C W2]` | Likely early: price is evaluated against the first few boxes, before habit forms |
| Menu becomes repetitive | 18% `[C W3]` | Likely later: repetition needs exposure to several boxes before it is felt |
| Food waste or portion issues | 11% `[C W4]` | Could be either: a mismatch is felt on the first box, but accumulates with more boxes |
| Delivery problems | 10% `[C W5]` | Could be either: a single bad delivery can end a relationship at any point |

This table is this document's own ordering of the case's stated reasons against the survival curve's shape, not a case-stated timing breakdown, and the word "assumption" applies to every row in the right-hand column.

### 5.5 How much a change in retention alone would move the outcome

The model tests what a change in 3-month retention alone, holding every other input at its base-case value, does to the 24-month run-rate and to cash in hand at month 24. This is the cleanest answer available to the question a judge is likely to ask first: how much of this plan depends on the rebuilt Proposal A actually lifting 3-month retention from 55% to 65%, as the case's own stated expectation for Proposal A puts it `[C PA3]`.

| Input tested, held alone | Run-rate EBITDA, low end | Run-rate EBITDA, high end | Cash at month 24, low end | Cash at month 24, high end |
|---|---|---|---|---|
| 3-month retention, 60% to 70% | −₹0.83 Cr | +₹1.03 Cr | ₹1.90 Cr | ₹3.93 Cr |
| Skip rate, 12% to 0% | −₹1.14 Cr | +₹0.99 Cr | ₹1.05 Cr | ₹4.25 Cr |

*Figures are one-input-at-a-time sensitivity results, every other input held at its base-case value `[T7]`.*

Two things follow from this table. First, retention and the skip rate pull in opposite directions on the same mechanism, because both change how many boxes a cohort orders before it leaves, and the model tests them as separate inputs precisely because the rebuilt Proposal A can raise one while customers choose to raise the other at the same time, the exact risk the case names for Proposal A `[C PA4]`. Second, neither input alone swings the run-rate by more than about ₹2 Cr across its tested range, which is a smaller swing than the ₹3.77 Cr the bridge in section 8 attributes to referral, win-back and conversion gains together `[T6]`. Retention is the feature the case names first and the one this plan treats as the load-bearing fix for the largest stated reason to leave, but on the model's own sensitivity test it is not, by itself, the biggest single number in the plan. That distinction matters for how a presenting team should answer a question that assumes retention is the whole story.

Exhibit for the deck: the survival line with a payback marker at month 10, drawn against the ₹7,000 CAC, on the diagnosis and evaluation slide.

## 6. Unit economics: two customers hide in one average, and 3.0x is the break-even condition

**Answer.** HarvestBox's headline 1.55x LTV to CAC `[C U6]` is an average of two very different customers: the 45% who leave by month 3 cost the business about ₹2.5 Cr a year `[T2]`, while the 55% who stay return 2.56 times their acquisition cost on their own `[T2]`. The 3.0x benchmark the case treats as a "healthy" target `[C U7]` is not an arbitrary round number: given HarvestBox's own gross profit per box, it is close to the exact point at which acquisition spending stops being a net drag on cash, and reaching it from where the business sits today needs more than one lever moved at once, because no single lever (cutting CAC alone, or extending lifetime alone) gets there by itself without an implausible move.

Customer acquisition cost (CAC) is the ₹7,000 the case states HarvestBox pays, on average, to sign up one customer `[C U3]`. Lifetime value (LTV) is the roughly ₹10,900 of gross profit the case says an average customer returns over their life `[C U5]`. Gross profit (GP) is revenue less the direct cost of the box; the case puts it at ₹1,600 a box `[C U2]`.

### 6.1 Leavers and stayers: two customers inside one average

Splitting the cohort at the month-3 case point (55% still active `[C R2]`, 45% gone) and carrying each group forward on the fitted survival curve from section 5 gives two very different pictures of the same acquisition spend.

| Group | Share of a cohort | Lifetime boxes | Lifetime gross profit | CAC | LTV to CAC | Loss or gain per head against CAC |
|---|---|---|---|---|---|---|
| Leavers (gone by month 3) | 45% `[C R2]` | 1.4 `[T2]` | ₹2,281 `[T2]` | ₹7,000 `[C U3]` | 0.33x | −₹4,719 `[T2]` |
| Stayers (past month 3) | 55% `[C R2]` | 11.2 `[T2]` | ₹17,915 `[T2]` | ₹7,000 `[C U3]` | 2.56x `[T2]` | +₹10,915 |

*CAC = customer acquisition cost; LTV = lifetime value, here shown as lifetime gross profit over CAC. The gain figure for stayers is this document's own arithmetic, ₹17,915 less ₹7,000, tagged `[M]`.*

HarvestBox signs up about 11,878 new customers a year at steady state `[T2]`. Applying the 45% leaver share gives 5,345 leavers a year (11,878 × 0.45 = 5,345.1 `[M]`), and multiplying that by the ₹4,719 loss per leaver gives an annual drag of about ₹2.5 Cr (5,345 × ₹4,719 ≈ ₹25.2 million, or ₹2.52 Cr `[T2]`), more than a quarter of the ₹9.2 Cr EBITDA loss the case reports for 2025 `[C K6]`. The business is not uniformly weak. It has a good customer and a bad one, and today it pays the same ₹7,000 to acquire either.

### 6.2 Why 3.0x is a break-even condition, not a vanity target

The case treats 3.0x LTV to CAC as the "healthy benchmark" `[C U7]` without explaining where the number comes from. Working from HarvestBox's own figures shows it is close to the point where acquisition spending breaks even on its own terms. There are two ways to reach 3.0x holding only one input fixed, and neither is reachable by itself.

Holding today's lifetime economics fixed and solving for the CAC that would deliver 3.0x: ₹10,900 lifetime gross profit `[C U5]` divided by 3 equals a target CAC of ₹3,633 `[T2]`. That is a 48% cut from today's ₹7,000 `[C U3]` (calculated as (7,000 − 3,633) ÷ 7,000 = 48.1% `[M]`). Team assumption A16 models pruning the costliest decile of paid acquisition, which moves blended CAC to about 0.89 of today's figure, or roughly ₹6,230 `[A16]` (7,000 × 0.89 = 6,230 `[M]`), nowhere close to ₹3,633 on its own.

Holding today's CAC fixed and solving for the lifetime boxes that would deliver 3.0x: 3 × ₹7,000 = ₹21,000 of lifetime gross profit needed; at ₹1,600 gross profit a box `[C U2]`, that is 13.1 boxes `[T2]` (₹21,000 ÷ ₹1,600 = 13.125 `[M]`), against today's fitted lifetime of 6.8 boxes `[C U4]`, nearly double. The rebuilt Proposal A is modelled to extend lifetime active months to 7.78 `[T2]`, an improvement, but still well short of the 13.1 boxes CAC alone would need to cover on today's acquisition price.

| Lever held fixed | What the other lever would need to reach | Against today | Gap |
|---|---|---|---|
| Lifetime economics (₹10,900 LTV) | CAC of ₹3,633 `[T2]` | ₹7,000 `[C U3]` | 48% cut needed, pruning alone reaches about 11% |
| Acquisition cost (₹7,000 CAC) | Lifetime boxes of 13.1 `[T2]` | 6.8 boxes `[C U4]` | Nearly double, the rebuilt Proposal A alone reaches 7.78 months `[T2]` |

This is why the model's own path to 3.0x moves five levers together rather than one alone, shown as a ladder: today's LTV to CAC of 1.55x `[C U6]` rises to 1.67x from the rebuilt Proposal A's retention gain net of the skip rate, to 1.83x once the gross-margin levers land, to 2.70x once the acquisition-cost pruning and non-working marketing cuts land, and the modelled base case ends month 24 at 2.70x against a 3.0x benchmark `[T12]`, close but, by the model's own account, short.

| Step | LTV to CAC |
|---|---|
| Today | 1.55 |
| After the rebuilt Proposal A retention, net of skips | 1.67 |
| After gross margin levers | 1.83 |
| After CAC pruning | 2.70 |
| Benchmark | 3.0 |

*LTV = lifetime value; CAC = customer acquisition cost. Figures from the model's ladder table `[T12]`.*

### 6.3 Contribution per cohort: when a month's sign-ups turn from cost to profit

Taking one month's cohort of 990 new customers `[T2]` and carrying it on the fitted survival curve from section 5 shows the same payback story at the scale the Board actually funds it: one month of acquisition spending at a time.

| Month | Cumulative boxes for the cohort | Cumulative gross profit, ₹ lakh | Cumulative CAC outlay, ₹ lakh | Net contribution, ₹ lakh |
|---|---|---|---|---|
| 1 | 990 | 15.8 | 69.3 | −53.5 |
| 3 | 2,269 | 36.3 | 69.3 | −33.0 |
| 6 | 3,465 | 55.4 | 69.3 | −13.9 |
| 9 | 4,300 | 68.8 | 69.3 | −0.5 |
| 10 | 4,528 | 72.4 | 69.3 | +3.1 |
| 12 | 4,923 | 78.8 | 69.3 | +9.5 |

*CAC = customer acquisition cost. Cumulative boxes are 990 multiplied by the cumulative survival fraction from section 5.2; gross profit is cumulative boxes times ₹1,600 `[C U2]`; CAC outlay is 990 × ₹7,000 = ₹69.3 lakh, paid once at acquisition `[C U3]`. Figures are this document's own arithmetic, tagged `[M]`, and reconcile with the per-customer payback month of month 10 in section 5.2 and table T2.*

A single month's cohort does not turn net-positive until between month 9 and month 10, the same crossing point found in section 5.2 at the per-customer level, because the arithmetic is the same relationship scaled up. What this table adds is the size of the hole in the meantime: one month's worth of new sign-ups costs the business more than ₹50 lakh of unrecovered cash in its first month alone, and every month HarvestBox keeps acquiring at this pace, it is opening a new hole of that size while older cohorts are still climbing out of theirs. This is the mechanical reason a business can be growing revenue and burning cash at the same time: the newest cohorts are always the least paid-back ones.

A further reading of the grid in section 6.6 is worth stating in this section's own terms, because it is where the unit-economics argument and the retention argument meet. The grid's columns (skip rate) and rows (3-month retention) are both, at root, statements about how many boxes a cohort orders before it stops, which is the same quantity this section has used throughout to separate leavers from stayers. A cohort that retains at 65% but skips at 10% books fewer effective boxes over its life than a cohort that retains at 60% but skips at 0%, even though the first cohort looks like the better outcome on the single headline metric the case names (3-month retention `[C PA3]`). This is a reason to treat "retention improved" as a necessary but not sufficient description of what the rebuilt Proposal A needs to achieve: the floor of two boxes in three months exists precisely to stop a retained-but-skipping customer from behaving, in unit-economics terms, like a leaver who simply has not formally cancelled yet.

### 6.4 What would move this, and the honest reading that belongs here

The modelled bridge to the 24-month run-rate figure gives the rebuilt Proposal A's three acquisition-side steps, referral on the third box, win-back of lapsed customers and website conversion, taken together as the single largest block, worth ₹3.77 Cr a year `[T6]`, built on assumption A10 (20% of sign-ups from referral by month 12), assumption A12 and A13 (win-back volume and cost) and assumption A14 (website conversion rising from 2.8% to 3.3%). Two of the three rest on weaker outside evidence than the gross-margin or overhead levers: the one VERIFIED academic reference this research found on referral economics, a German retail-banking study, found referred customers worth about 16% more than non-referred customers and about 18% to 22% less likely to defect over 21 to 33 months `[S33]`, but that is one bank, one country, one product, a decade before this case, and it says nothing about a food subscription specifically. The honest reading carried from section 4 of this plan applies directly here: The base case crosses break-even in month 21 and then sits at a run-rate of only ₹0.10 Cr a year `[T4]`, a break-even plan rather than a profit plan, and the single biggest lever behind that crossing is also the one with the thinnest outside corroboration. A judge who presses on one number in this plan should press on this one.

### 6.5 How far one lever alone can move the run-rate

The model's sensitivity table tests eight inputs one at a time, each held at its base-case value except the one being tested, and reports the effect on the month-24 run-rate EBITDA and on cash in hand at month 24. This is the cleanest way to see which of the many moving parts in the rebuilt Proposal A and the operational improvements actually carries weight, rather than relying on intuition about which lever "sounds" important.

| Input and range tested | Run-rate EBITDA, low | Run-rate EBITDA, high | Cash at month 24, low | Cash at month 24, high |
|---|---|---|---|---|
| 3-month retention, 60% to 70% | −0.83 | +1.03 | 1.90 | 3.93 |
| Skip rate, 12% to 0% | −1.14 | +0.99 | 1.05 | 4.25 |
| Referral share, 10% to 30% | −1.12 | +1.65 | 1.83 | 4.27 |
| Website conversion, 3.0% to 3.6% | −0.50 | +0.60 | 2.04 | 3.65 |
| Gross margin levers, +2.5 to +5.0 points | −0.63 | +0.59 | 2.00 | 3.53 |
| Overhead cut, 6% to 15% | −0.52 | +0.41 | 1.85 | 3.45 |
| Non-working marketing cut, 25% to 50% | −0.54 | +0.53 | 1.79 | 3.67 |
| Ready-to-eat sales, 50% to 120% of plan | −0.80 | +0.46 | 2.28 | 3.17 |

*Figures in ₹ Cr unless stated otherwise. Each row holds every other input at its base-case value `[T7]`.*

Ranked by the width of the swing in run-rate EBITDA, referral share and the skip rate carry the most weight (a range of ₹2.77 Cr and ₹2.13 Cr respectively), followed by 3-month retention itself (₹1.86 Cr). Website conversion, the gross-margin levers, overheads and the non-working marketing cut each swing the run-rate by a little over ₹1 Cr across their tested range, roughly half the weight of the top three. This ranking is a caution against treating every lever in the operational improvements as equally load-bearing: the two inputs that move the outcome most, referral share and the skip rate, are also, respectively, one of the two assumptions this document's section 6.4 already flags as the weakest-evidenced in the plan, and a customer behaviour the case explicitly names as a risk of the rebuilt Proposal A design itself `[C PA4]`.

### 6.6 The 24-month grid: retention and the skip rate together

Because retention and the skip rate interact (a cohort that stays longer but skips more often can still order fewer boxes than a cohort that leaves sooner but never skips), the model also runs a two-way grid across both inputs at once, holding every other input at its base-case value, and reports cumulative 24-month EBITDA for each combination.

| 3-month retention | Skip rate 0% | Skip rate 5% | Skip rate 10% | Skip rate 15% |
|---|---|---|---|---|
| 55% | −7.1 | −8.3 | −9.6 | −10.8 |
| 60% | −6.0 | −7.3 | −8.6 | −9.9 |
| 65% | −5.0 | −6.3 | −7.6 | −8.9 |
| 70% | −3.9 | −5.3 | −6.7 | −8.0 |

*Cumulative 24-month EBITDA, ₹ Cr `[T8]`. The base case sits at 65% retention, 5% skip rate, a cumulative figure of −6.3 inside this grid, which is the model's EBITDA Y1 plus EBITDA Y2 for the base case path (−5.53 plus −0.75, giving −6.28, which rounds to the grid's −6.3) `[M]` `[T4]`.*

Reading along the 65% retention row (the case's own stated expectation for the rebuilt Proposal A `[C PA3]`) shows a difference of 3.9 points of 24-month EBITDA between a 0% and a 15% skip rate, which is a larger swing than reading down the 5% skip rate column shows between 55% and 70% retention (3.0 points). On this grid, how disciplined the skip feature's floor turns out to be in practice matters at least as much as whether retention improves by the full ten points the case hopes for. This is the arithmetic behind why the rebuilt Proposal A is built with a floor of two boxes in any three months rather than an unlimited free skip: the case's own stated risk for Proposal A, that customers use flexibility to order less often `[C PA4]`, is not a minor caveat on this grid, it is close to the single largest lever in the whole table.

### 6.7 Why this is a quantitative reason to prefer the recommended plan over the other two proposals as written

The leaver and stayer split in section 6.1, and the ladder in section 6.2, are the arithmetic behind one of the three reasons each side this document's recommendation rests on: none of the three proposals as written changes customer acquisition cost, which is where, on this section's own numbers, most of the value is being lost or won. Grocery retail `[C PB1]` and ready-to-eat as written `[C PC1]` both add revenue without touching the 45% of a cohort that leaves by month 3 `[C R2]` or the ₹7,000 cost of acquiring them `[C U3]`; they grow the top of the funnel while the leak in the middle stays exactly the size this section has measured it at, about ₹2.5 Cr a year `[T2]`. Only a rebuilt Proposal A reaches into the mechanism this section has spent its length describing, the gap between a leaver worth 0.33x its acquisition cost and a stayer worth 2.56x `[T2]`, because only a change to the subscription's own terms can move which of those two a given customer becomes. This is why the model's scorecard scores Proposal A as written lowest on profit among the three options (a score of 2 out of 5) `[T9]` despite addressing the single largest stated reason customers leave `[C W1]`: as written, the proposal changes the terms but not the price or the floor, so it lifts the number of customers who become stayers without lifting what a stayer is worth, a half-measure this section's own ladder shows is not enough on its own to reach 3.0x.

Exhibit for the deck: the two-customers table (leavers against stayers) beside the LTV to CAC ladder, on the diagnosis and evaluation slide.

## 7. Why customers leave: the product is rated 4.6, the contract is the problem

**Answer.** Customers who stay past six months rate HarvestBox 4.6 out of 5 `[C W6]`: whatever is wrong with this business, it is not the box itself. The five reasons the case gives for leaving sum to 100% of stated exits `[C W1]` to `[C W5]`, and only one of the three Board proposals touches most of them: The rebuilt Proposal A answers 63% of stated exits (rigidity 34%, food waste or portions 11%, menu variety 18%) `[C W1]` `[C W3]` `[C W4]`, grocery retail answers none of them `[C PB1]`, and ready-to-eat answers only part of the 18% tied to menu variety `[C PC1]`. A keyword reading of 8,052 Google Play reviews of six real meal-kit and ready-to-eat services `[V1]` broadly agrees with the case's ranking of rigidity as the single largest complaint, but it does not support the case's weight on menu repetition, and it surfaces two frictions the case brief never mentions: billing surprises and a cancellation flow with no self-serve option. This is evidence about other companies' customers; it is association, not proof of what HarvestBox's own leavers experienced, and every use of it below names the apps and says so.

### 7.1 What each proposal fixes, and what it leaves on the table

The case gives exact shares for why customers leave: too rigid or difficult to skip, 34% `[C W1]`; too expensive, 27% `[C W2]`; menu becomes repetitive, 18% `[C W3]`; food waste or portion issues, 11% `[C W4]`; delivery problems, 10% `[C W5]`. Mapping each of the three Board proposals against these five reasons shows how unevenly they are matched to the stated problem.

| Reason | Share | Proposal A, as rebuilt | Proposal B, grocery retail | Proposal C, ready-to-eat |
|---|---|---|---|---|
| Too rigid, difficult to skip | 34% `[C W1]` | Answered: free skip or pause with a floor of two boxes in three months `[C PA1]` | Not answered: a retail channel does not touch subscription terms `[C PB1]` | Not answered: a parallel product line does not change the subscription contract `[C PC1]` |
| Too expensive | 27% `[C W2]` | Partly eased: a ₹3,600 entry plan beside the ₹5,200 core box `[A09]`, not counted in the 63% headline since the case gives no evidence this removes the complaint rather than softening it | Not answered: grocery retail sells the existing box, not a cheaper one `[C PB1]` | Not answered: ready-to-eat is a different, typically pricier, product `[C PC2]` |
| Menu becomes repetitive | 18% `[C W3]` | Answered: swap recipes and a larger menu of about 40 recipes `[C PA1]` | Not answered | Partly answered: a ready-to-eat range offers different variety, not more variety within the existing kit `[C PC1]` |
| Food waste or portion issues | 11% `[C W4]` | Answered: 2 or 4 meal portion sizing options `[C PA1]` | Not answered | Not answered |
| Delivery problems | 10% `[C W5]` | Not answered: none of the rebuilt Proposal A's five features touches logistics `[C PA1]` | Not answered | Not answered |

*The "answered" column total for the rebuilt Proposal A (34 + 11 + 18 = 63 `[M]`) is the 63% figure used throughout this document for what the rebuilt Proposal A addresses; the 27% tied to price and the 10% tied to delivery sit outside that figure because neither proposal removes the underlying friction, only softens or ignores it.*

Grocery retail's row is instructive precisely because it is empty: none of the five reasons customers give for leaving HarvestBox is touched by putting the existing box on a supermarket shelf. Ready-to-eat's row shows the same pattern from the other direction: its one point of contact with the case's stated reasons for leaving is partial and indirect, a different kind of variety rather than more variety within the subscription people are already frustrated with.

### 7.2 Review-mining method, and what the four tables show

Six Google Play listings were pulled for reviews dated 1 January 2024 or later, newest first, up to 4,000 a app: five meal-kit subscriptions, HelloFresh, EveryPlate, Home Chef, Dinnerly and Green Chef, and one ready-to-eat subscription, CookUnity. All six package identifiers loaded without error, for a pooled total of 8,052 reviews, of which 2,435 are 1 or 2 star and 5,152 are 4 or 5 star `[V1]`. Four apps cleared a 300-review floor (HelloFresh 4,000, EveryPlate 611, Home Chef 650, CookUnity 2,546); Dinnerly (77) and Green Chef (168) are kept in the pooled tables but carry little weight individually because their review volume on Play since 2024 is thin, not because anything failed to load `[V1]`. None of these reviewers is a HarvestBox customer: HarvestBox is fictional and has no reviews of its own.

| App | Type | Reviews pulled | Average rating | 1 and 2 star share, % |
|---|---|---|---|---|
| HelloFresh | Meal kit | 4,000 | 3.27 | 39.8 |
| EveryPlate | Meal kit | 611 | 3.02 | 45.7 |
| Home Chef | Meal kit | 650 | 3.81 | 26.0 |
| Dinnerly | Meal kit | 77 | 1.88 | 74.0 |
| Green Chef | Meal kit | 168 | 2.60 | 57.1 |
| CookUnity | Ready-to-eat | 2,546 | 4.40 | 9.5 |

*Table V1, sample by app `[V1]`.*

Each review was coded by regular expression against the case's five reasons (W1 to W5) plus two extra themes (app or billing fault, X1; wanting ready-made food, X2). Twenty reviews per theme were then sampled from the matching low-star pool and read individually to check precision, true matches divided by sample size.

| Theme | Precision | Flag |
|---|---|---|
| W1, rigid plan, hard to skip or cancel | 90% | |
| W2, too expensive | 70% | |
| W3, menu repetitive or narrow | 80%, after one codebook fix described below | |
| W4, food waste or portion issues | 70% | |
| W5, delivery problems | 65% | (indicative), under the 70% threshold |
| X1, app or billing fault | 95% | |
| X2, wants ready-made or less cooking | 85%, smaller sample (13), too few low-star matches available | |

*Precision figures from the review-mining precision check `[V1]`. Per the research plan, any theme under 70% precision is labelled "(indicative)" everywhere it is used; that applies to W5 only. W2 and W4 sit exactly at the 70% line and are not flagged by that rule, but a reader should treat every one of these seven numbers as a keyword-coded estimate, not an audited count.*

W3's first-pass precision was 50%, below the 60% threshold that permits a single codebook correction. The most common false match was the bare word "selection" catching any mention of an app's meal-selection screen, unrelated to menu repetition. Removing that one alternative from the regular expression and rerunning the full pull against the same 8,052 reviews raised W3's precision to 80% on a fresh sample. The fix pulled W3's measured share down, from 2.4% to 1.2% of low-star mentions, moving it further from, not closer to, the case's 18% figure, which is the one directional check this document can offer that the single permitted codebook change was not used to flatter the comparison.

| Theme | All apps, % of low-star reviews | HelloFresh | EveryPlate | Home Chef | Dinnerly | Green Chef | CookUnity |
|---|---|---|---|---|---|---|---|
| W1, rigid plan, hard to skip or cancel | 28.8 | 33.0 | 24.7 | 18.3 | 22.8 | 19.8 | 17.8 |
| W2, too expensive | 11.0 | 11.2 | 12.9 | 8.9 | 12.3 | 13.5 | 7.0 |
| W3, menu repetitive or narrow | 1.2 | 0.9 | 2.9 | 2.4 | 0.0 | 1.0 | 0.4 |
| W4, food waste or portion issues | 8.4 | 9.1 | 9.0 | 5.9 | 12.3 | 9.4 | 3.7 |
| W5, delivery problems (indicative) | 18.4 | 20.2 | 12.2 | 18.3 | 35.1 | 14.6 | 10.7 |
| X1, app or billing fault | 18.4 | 15.6 | 24.7 | 18.9 | 19.3 | 13.5 | 30.2 |
| X2, wants ready-made or less cooking | 0.5 | 0.4 | 1.1 | 1.8 | 0.0 | 0.0 | 0.4 |

*Table V2, share of 1 and 2 star reviews mentioning each theme `[V2]`.*

Rescaling the five case-matched themes to sum to 100, so they can be compared directly with the case's own five shares, gives the comparison this section is built around.

| Reason | Review mix, % | Case exit share, % | Gap, points |
|---|---|---|---|
| Too rigid, hard to skip or cancel | 42.5 | 34 | +8.5 |
| Too expensive | 16.2 | 27 | −10.8 |
| Menu repetitive or narrow | 1.8 | 18 | −16.2 |
| Food waste or portion issues | 12.4 | 11 | +1.4 |
| Delivery problems (indicative) | 27.1 | 10 | +17.1 |

*Table V3, mix of the five case reasons among low-star mentions, against the case `[V3]`.*

| Theme | Share of 4 and 5 star reviews, % |
|---|---|
| W1, rigid plan, hard to skip or cancel | 1.9 |
| W2, too expensive | 6.7 |
| W3, menu repetitive or narrow | 4.9 |
| W4, food waste or portion issues | 7.4 |
| W5, delivery problems (indicative) | 8.5 |
| X1, app or billing fault | 1.5 |
| X2, wants ready-made or less cooking | 0.7 |

*Table V4, the same seven themes in 4 and 5 star reviews `[V4]`.*

Read together, these four tables support the case's ranking of rigidity as the single largest named reason customers leave: it is the largest theme in the review mix, 28.8% of all low-star mentions `[V2]`, and the gap against the case's 34% share is the smallest directional gap of the five reasons in relative terms. They do not support the case's weight on menu repetition: real customers of these six apps barely raise it unprompted in a one or two-star review, 1.2% of low-star mentions and 1.8% of the rescaled mix `[V2]` `[V3]`, against the case's 18%. Delivery problems, which the case ranks lowest at 10% `[C W5]`, is the second-largest theme in the review data at 27.1% of the rescaled mix `[V3]`, though this theme carries the "(indicative)" flag for its 65% precision and should be read with that caveat attached every time. This is one study of six other companies' customers against one stated breakdown for a fictional company. The comparison is a sense check on relative ordering, not proof of HarvestBox's own causes, and that caveat travels with every number in this paragraph.

### 7.3 What the reviews add that the case brief does not mention

Two themes outside the case's own five reasons stand out in the review data and have no equivalent in the case brief at all. App or billing fault (X1, bugs, crashes, login failures, double charges, refund disputes) is mentioned in 18.4% of low-star reviews pooled across all six apps `[V2]`, almost as large a share as delivery problems and larger than either food waste or menu repetition. The case brief is silent on billing or app reliability as a reason customers leave; it is implicit, at most, inside the 34% "too rigid, difficult to skip" figure if a failed cancellation attempt is itself an app or billing fault, but the case does not say so. The second addition is a specific mechanism inside rigidity rather than a new theme: several of the verbatim quotes below describe not being able to cancel from inside the app at all, only by phone or live chat, which is a narrower and more concrete friction than "too rigid" as a label implies.

> "no option to cancel subscription in the app. I HATE these business practices and will not support any companies that use them."
> Play Store review of HelloFresh, 1 star, Aug 2026

> "It would've been nice if there was a way to cancel the subscription on my own instead of calling or using a live chat."
> Play Store review of HelloFresh, 1 star, Sep 2026

> "Deceptive pricing, hidden cancellation and other bad practices make this a one star app"
> Play Store review of HelloFresh, 1 star, May 2026

None of these reviewers is a HarvestBox customer, and this document does not claim HarvestBox's own cancellation flow has these specific faults; the case gives no detail on HarvestBox's app mechanics beyond stating that customers find the subscription rigid `[C PA4]`. What the quotes show is that, in at least one real, comparably-sized meal-kit company, "rigid" in practice often means "no self-serve way out", which is exactly the gap the rebuilt Proposal A's free, in-app skip-or-pause feature is designed to close `[C PA1]`.

### 7.4 A Kano reading of the five reasons

The Kano model classifies a feature by how its presence or absence changes satisfaction: a must-have causes strong dissatisfaction when absent but is barely noticed when present; a performance attribute raises or lowers satisfaction roughly in proportion to how much of it is delivered; a delighter is unnoticed when absent but creates outsized satisfaction when present. Applied to the five case reasons, three of the five sit in the must-have category.

| Case reason | Kano category | Why |
<br>
| Too rigid, difficult to skip | Must-have | Customers do not reward flexibility with extra loyalty; they punish its absence by leaving, which is exactly the 34% share `[C W1]` |
| Food waste or portion issues | Must-have | A box that does not match a household's needs is a basic-expectations failure, not a value-add opportunity |
| Delivery problems | Must-have | Reliable delivery is the baseline a subscription box is paid for; it cannot delight, only fail to disappoint |
| Too expensive | Performance | Price sensitivity is graded, not binary: a cheaper entry tier plausibly keeps some price-sensitive customers who would otherwise leave, without needing to be "free" |
| Menu becomes repetitive | Performance, trending toward delighter at scale | More recipes, built from a wider shared pantry, raise satisfaction roughly in proportion to variety on offer, and a well-executed menu can become a reason to stay, not just an absence of a reason to leave |

This reading explains why the rebuilt Proposal A is built the way it is: the three must-have reasons (rigidity, waste or portion mismatch, and delivery, though delivery is not targeted by any of the three Board proposals) are the ones where falling short causes active harm, so the free skip-or-pause and the 2 or 4 meal sizing options are built to remove dissatisfaction rather than to impress anyone. The two performance reasons, price and variety, are addressed by a price ladder and a larger shared-ingredient menu respectively, both designed to move a dial rather than clear a single threshold, which is consistent with the Kano model's own logic that performance attributes repay incremental investment rather than a single fix.

### 7.5 Limits of the review-mining evidence, stated plainly

Every figure in this section carries the limits the review-mining method itself names, and they are collected here rather than scattered through the tables above, so a reader can weigh them in one place before using any of the numbers on a slide.

| Limit | What it means for the numbers above |
|---|---|
| These are customers of six real services, mostly in the United States and United Kingdom, not HarvestBox customers | The case brief's five reasons and this review data describe two different populations; the comparison is a sense check on ordering, never proof of HarvestBox's own causes |
| Reviewers are self-selected | People who write a public Play Store review skew toward the very satisfied or the very angry; the quiet middle of the customer base, who may leave for ordinary reasons without ever writing a review, is underrepresented in both pools |
| Coding is by regular expression on free text, not by a human reading every review | The precision check in section 7.2 shows this works correctly most of the time for five of seven themes but not for W5, held at 65% and marked "(indicative)" throughout |
| The one permitted codebook fix addressed only W3's worst single source of false matches | W3's 80% precision still means one in five sampled matches is not truly about a repetitive or narrow menu, and no other theme's expression was touched |
| Dinnerly (77 reviews) and Green Chef (168 reviews) sit under the 300-review floor | Their app-level rows in the tables above are thin samples; the pooled totals across all six apps, not any single small app, carry the weight in this document |
| The review window is 1 January 2024 onward only | Recent reviews describe each app's current cancellation flow and pricing, which may differ from how these companies behaved in the years Lane B's company-level facts cover; the two lanes are not necessarily describing the same product generation |
| W2 and W4 sit exactly at the 70% precision threshold | They are not labelled "(indicative)" because the stated rule names only results strictly under 70%, but close to one in three sampled matches for several themes here is still a false keyword hit, a margin of error that travels with every number in tables V2 to V4 |

None of these limits changes the direction of the one finding this section leans on most, that rigidity is the largest theme in both the case and the review data. They do mean that the precise size of any gap, such as the 16.2-point gap on menu repetition or the 17.1-point gap on delivery, should be read as approximate, not as a measured difference with a tight error bar.

Exhibit for the deck: exit-reason bars keyed to which proposal answers each reason, on the diagnosis and evaluation slide.

## 8. Margin and marketing: growth has been bought at a rising price

**Answer.** Gross margin fell from 38% to 31% across the four years the case reports `[C P22]` `[C P25]`, while marketing rose from 22% to 30% of revenue over the same period `[C P22]` `[C P25]`; other operating cost actually fell from 28% to 23% of revenue over the same window `[T1]`. Pulling HarvestBox's own acquisition arithmetic through the case's figures implies ₹8.31 Cr of 2025 revenue was spent on paid acquisition and a further ₹4.29 Cr of marketing spend is not explained by acquisition volume at all `[T2]`; each rupee of new revenue has needed more marketing every year, rising from 31 paise in 2023 to 49 paise in 2025 `[T1]`. This is the single clearest finding in HarvestBox's own numbers: the company is not failing to control overheads, it is paying an escalating price to keep growing.

Earnings before interest, tax, depreciation and amortisation (EBITDA) is the case's own measure of operating profit before financing and non-cash charges; HarvestBox's 2025 EBITDA loss is ₹9.2 Cr `[C K6]`. Customer acquisition cost (CAC) is the ₹7,000 the case states HarvestBox pays, on average, to sign up a new customer `[C U3]`.

### 8.1 Decomposing the seven lost gross-margin points

Gross margin fell from 38% in 2022 to 31% in 2025 `[C P22]` `[C P25]`, seven points over four years. The case gives two facts that bear directly on where those points could be sitting, and this document treats everything beyond those two facts as a candidate, not a proven cause, using an issue-tree discipline: each candidate must be mutually exclusive of the others and the full set must be collectively exhaustive of what moves gross margin, with no candidate counted twice.

| Candidate cause | What the case supports | Status |
|---|---|---|
| Rising promotional or first-box discounting | The case does not state a discounting history; the operational improvements' own plan to cut "first-box discounting" `[A18]` implies the team believes some of today's margin loss is discount-driven, but the case gives no figure to confirm or size this | Assumption |
| Food waste at 6% of ingredient purchases | The case states this as a current snapshot figure, not a four-year trend `[C X2]`; whether 6% is higher or lower than in 2022 is not stated | Case fact (single year only, not a trend) |
| Fulfilment-centre utilisation at 68% | The case states this as a current snapshot figure, not a trend `[C X1]`; low utilisation plausibly raises the per-box cost of fixed fulfilment capacity, but the case does not show utilisation falling over time | Case fact (single year only, not a trend) |
| Input cost inflation on ingredients | The case states no input-cost history at all | Assumption |

This document uses the word assumption here because two of the four candidates (discounting and input-cost inflation) rest entirely on inference, and the other two (waste, utilisation) are case facts for one year only, not evidence of a worsening trend across the four years the margin actually fell. The honest position is that the case lets a reader name plausible candidates for the seven lost points without letting a reader apportion the seven points across them with any precision; this document does not attempt that apportionment as if it were known.

### 8.2 The marketing arithmetic: acquisition spend against spend that acquisition alone does not explain

HarvestBox signs up about 11,878 new customers a year at steady state `[T2]`. Multiplying that figure by the ₹7,000 CAC `[C U3]` gives the acquisition spend the business's own cost-per-customer figure implies: ₹8.31 Cr a year (11,878 × ₹7,000 ≈ ₹8.31 Cr `[T2]`). Total 2025 marketing spend was ₹12.60 Cr `[T1]`. Subtracting the acquisition-implied figure from total marketing spend leaves ₹4.29 Cr unexplained by new-customer volume alone (₹12.60 Cr − ₹8.31 Cr = ₹4.29 Cr `[T2]`), which this document and the model call non-working marketing: spend that does not show up as a traceable new sign-up at the stated CAC.

| Item | ₹ Cr |
|---|---|
| Total 2025 marketing spend | 12.60 `[T1]` |
| Acquisition spend implied by CAC × new customers | 8.31 `[T2]` |
| Marketing not explained by acquisition volume | 4.29 `[T2]` |

*CAC = customer acquisition cost. The unexplained figure is the model's own term "non-working marketing" and is the base for assumption A17's 40% cut `[A17]`, one of the levers in the operational improvements.*

This ₹4.29 Cr figure matters because it is the single largest lever in the operational improvements' marketing side: cutting 40% of it is worth ₹1.71 Cr a year in the bridge to the month-24 run-rate `[T6]`, more than any other single marketing-side lever, and it does not require a single customer to behave any differently, only the business to spend differently.

### 8.3 The marginal cost of growth has risen every year

The case's own four-year history lets this document compute how much new marketing spend each additional rupee of revenue has required, year on year, and the trend only moves in one direction.

| Year | Revenue, ₹ Cr | Gross margin | Marketing, % of revenue | Marketing added per ₹1 of new revenue |
|---|---|---|---|---|
| 2022 | 19 `[C P22]` | 38% `[C P22]` | 22% `[C P22]` | not computable, no prior year in the case |
| 2023 | 29 `[C P23]` | 36% `[C P23]` | 25% `[C P23]` | 0.31 `[T1]` |
| 2024 | 38 `[C P24]` | 33% `[C P24]` | 28% `[C P24]` | 0.38 `[T1]` |
| 2025 | 42 `[C P25]` | 31% `[C P25]` | 30% `[C P25]` | 0.49 `[T1]` |

*The marginal figure in the last column is each year's increase in marketing spend divided by that year's increase in revenue over the prior year `[T1]`; it is not computable for 2022 because the case gives no 2021 figure to compare against.*

Revenue grew 52.6% from 2022 to 2023 (19 to 29, a rise of 10 over 19 `[M]`), 31.0% from 2023 to 2024 (29 to 38, a rise of 9 over 29 `[M]`) and 10.5% from 2024 to 2025 (38 to 42, a rise of 4 over 38 `[M]`). Revenue growth has slowed in every year the case reports, and the marginal cost of buying that slower growth has risen in every year: in 2023, 31 paise of new marketing bought ₹1 of new revenue; by 2025, 49 paise did `[T1]`. This is the clearest single number in this document for why "grow faster" cannot be the answer on its own: the business is already paying a rising price for the growth it has, before any new initiative asks it to grow faster still.

For outside context on what a mature, profitable meal-kit or meal-adjacent operator's cost structure looks like at scale, two VERIFIED figures from Lane B are useful, with the caveat that neither company is Indian, neither is a direct HarvestBox comparator in scale, and neither figure is presented as a target HarvestBox could reach on this plan's timeline.

| Company | Metric | Figure | Status |
|---|---|---|---|
| HelloFresh SE, FY2025 preliminary results | Meal-kit category adjusted EBITDA margin | 13.5% | VERIFIED `[S20]` |
| Gousto, FY2025 results | Adjusted EBITDA margin, third consecutive profitable year | 13.2%, against 13.5% the year before | VERIFIED `[S27]` |

*EBITDA = earnings before interest, tax, depreciation and amortisation. Both figures describe a different company, country and currency from HarvestBox and are shown only as a scale of what "mature and profitable" looks like in this category, never as a HarvestBox figure.*

Both companies run adjusted EBITDA margins in the low teens at scale, a different order of outcome from HarvestBox's −22% EBITDA margin in 2025 `[C P25]`, and both reached that position only after years of the kind of marketing discipline the operational improvements are built to start. Neither figure is a target this plan claims HarvestBox will reach inside 24 months, and the model's own base case ends month 24 at a run-rate EBITDA of just ₹0.10 Cr a year `[T4]`, nowhere near either company's margin.

### 8.4 Where the biggest bridge step sits, and the honest reading that belongs here

The model's bridge from the 2025 EBITDA loss of ₹9.24 Cr to the month-24 run-rate decomposes into named steps `[T6]`; cutting non-working marketing by 40% is worth ₹1.71 Cr, pruning paid channels above lifetime value is worth ₹0.62 Cr, the gross-margin levers in section 8.1 are worth ₹1.53 Cr once executed, and the single largest block, the rebuilt Proposal A's three referral, win-back and conversion steps together, is worth ₹3.77 Cr `[T6]`. Two of those three steps rest on assumptions A10 and A14, which this document's section 6.4 already flags as the weakest-evidenced levers in the entire plan. The honest reading carried from section 4 of this plan applies again here: every one-at-a-time downside in the model's sensitivity table turns the month-24 run-rate negative `[T7]`, and the two levers this section has shown to carry the most financial weight, non-working marketing and the referral or conversion gains, are exactly the two the model's own sensitivity analysis treats as uncertain enough to test individually. A margin and marketing story this document can defend with case facts and model arithmetic is not the same as a guarantee that the rupee amounts land exactly as modelled; the gates described later in this document exist because of this gap between the arithmetic and the evidence behind its largest inputs. The same caution applies when a team is asked, in cross-questioning, why the plan does not simply cut marketing further and faster: section 8.3's own history shows marketing rising as a share of revenue every year even as growth slowed, the behaviour of a business substituting spend for the organic pull a genuinely sticky product would provide. Cutting the ₹4.29 Cr of non-working marketing `[T2]` corrects that substitution; it is not an instruction to spend nothing, because a subscription business with no new customers at all has no future cohorts left to retain. The arithmetic in this section is also why the operational improvements are described in this document as a precondition for the rebuilt Proposal A rather than a separate initiative competing for the same ₹15 Cr of cash `[C K4]`: cutting marketing and improving margin are what keep the business solvent while the rebuilt Proposal A's retention gains build, cohort by cohort, over the months this section's tables have shown are needed before any single month's acquisition spend pays for itself.

### 8.5 The full bridge, step by step, against the margin and marketing story told above

Every step of the model's bridge from the 2025 EBITDA loss to the month-24 run-rate can be read as either a marketing-side move or a margin-side move, which is the same two-line diagnosis this section opened with: the loss sits in gross margin and marketing, not in overheads.

| Step | ₹ Cr a year | Which line this section's diagnosis puts it on |
|---|---|---|
| 2025 EBITDA | −9.24 `[T6]` | Starting point |
| Headwinds: cost inflation, margin drift | −1.64 `[T6]` | Both lines move against the plan before any lever is pulled `[A03]` `[A04]` `[A05]` |
| Cut non-working marketing 40% | +1.71 `[T6]` | Marketing line, the ₹4.29 Cr figure in section 8.2 `[A17]` |
| Prune paid channels above lifetime value | +0.62 `[T6]` | Marketing line, acquisition spend `[A15]` `[A16]` |
| Overheads down 12% | +1.25 `[T6]` | Neither line in this section's diagnosis; overheads are a separate, smaller lever `[A19]` |
| Gross margin levers, plus 4.0 points | +1.53 `[T6]` | Margin line, the candidates in section 8.1 `[A18]` |
| The rebuilt Proposal A: retention net of skips | +0.31 `[T6]` | Neither line directly; a volume effect on the existing margin and marketing structure |
| The rebuilt Proposal A: referral on the third box | +2.21 `[T6]` | Marketing line, the largest single step, resting on A10 |
| The rebuilt Proposal A: win-back of lapsed customers | +0.50 `[T6]` | Marketing line, resting on A12 and A13 |
| The rebuilt Proposal A: website conversion | +1.07 `[T6]` | Marketing line, resting on A14, the step with no outside evidence at all |
| Year 2: staged ready-to-eat | +1.79 `[T6]` | Outside this section's diagnosis; a new revenue line, not a fix to the existing one |
| Month 24 run-rate | +0.10 `[T6]` | End point |

*Figures are the model's own bridge steps `[T6]`. The right-hand column is this document's own classification of each step against the margin and marketing decomposition in sections 8.1 to 8.3, tagged `[M]`.*

Summing only the steps this section's diagnosis calls marketing-side, cutting non-working marketing and the three rebuilt Proposal A acquisition steps (referral, win-back and conversion), gives ₹5.49 Cr of the roughly ₹9.34 Cr of improvement the bridge delivers before the ready-to-eat stage (1.71 + 2.21 + 0.50 + 1.07 = 5.49 `[M]`), fifty-nine per cent of the total (5.49 ÷ 9.34 ≈ 58.8% `[M]`). The gross-margin lever contributes a further ₹1.53 Cr, sixteen per cent of the same total (1.53 ÷ 9.34 ≈ 16.4% `[M]`). Put together, more than three-quarters of the bridge's improvement before ready-to-eat comes from the two lines this section has shown carried the loss in the first place, marketing and gross margin, which is the arithmetic case for why the operational improvements are built the way they are: they spend their effort where the four-year history in table T1 shows the damage actually happened, not on overheads, which were never the problem.

Exhibit for the deck: the EBITDA bridge waterfall from 2025 to the month-24 run-rate, on the financial and risk case slide.
