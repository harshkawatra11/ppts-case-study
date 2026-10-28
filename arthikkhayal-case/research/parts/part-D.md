## 15. A factual Dhanteras and Muhurat notice on 6 to 8 November 2026 adds 2,311 extra actives because gold ETFs fit a purchase many households already plan

**Answer.** Dhanteras 2026 falls on Friday, 6 November [G01], inside week 1 of the programme, and the exchanges hold a confirmed Muhurat trading session on Sunday, 8 November 2026, with continuous trading from 2:20 pm to 3:30 pm [G13]. We reach the whole idle pool, 6,89,375 accounts [T2], with one factual notice naming two things that are already true: the ONL account can hold gold through gold exchange-traded funds, which sit inside the same demat account and which the regulator treats differently from unregulated digital gold, and the exchanges run a special session on a date households already associate with buying something of value. In our model this lever adds 1,081 extra actives in the bear case, 2,311 in the base case and 4,332 in the bull case [M, T10], the fourth-largest of our seven levers after salary day, RM review and the rediscovery tile. The main risk is not the calendar; it is getting the notice's compliance clearance finished before week 1 starts, since a message that slips past 8 November loses the moment it was built for.

### 15.1 Who and how many

The Dhanteras lever reaches the full idle base rather than one cohort, because every segment buys gold for the same festival regardless of whether it also holds a Salary Account, a Prestige relationship or a Credit Card. Table 15.1 sets the lever's reach against the base rates underlying it.

| Item | Value | Tag |
|---|---|---|
| Idle accounts, all segments | 6,89,375 | T2 |
| Share of idle accounts reached through owned channels in Dhanteras and Diwali week | 50% base (42% bear, 56% bull) | A28, T1 |
| Accounts reached, base case | 3,44,688 | T19 |
| Dhanteras 2026 date | Friday, 6 November 2026 | G01 |
| Diwali and Muhurat session date | Sunday, 8 November 2026 | G02 |
| Muhurat continuous trading window | 2:20 pm to 3:30 pm | G13 |

Table 15.1 shows that half of the idle base, in the base case, sees this notice at all, a figure that falls to 42% in the bear case because the exchanges' and the bank's own promotional slots are crowded during the festival week and rises to 56% in the bull case if the bank treats Dhanteras as a lead banner placement. The reach assumption, A28, is a team estimate checked against Lane G's calendar evidence rather than a measured click-through figure, and we say so plainly because every other number in this section depends on it.

The date itself carries no uncertainty worth flagging. The panchang consensus across four independent calendar sources places Dhanteras on 6 November 2026 [G01, G05], with one outlier source giving 5 November treated as unreliable because no other source corroborates it and the outlier's own Bhai Dooj date does not fit the standard five-day festival spacing [G04]. The Muhurat session date and timing rest on a secondary report of the exchange circular rather than a direct read of the circular PDF, because a direct fetch to the exchange's own holiday page timed out in this verification pass [G16], but three independent outlets (TeamLease RegTech, GoodReturns, and the circular's own reference number) agree on the same session [G12, G13, G14].

### 15.2 The moment and the message

The moment is the two-day window in which Indian households that buy gold at all tend to buy it, whether as jewellery, coins, bars or, increasingly, paper gold. World Gold Council data shows Indian gold ETFs took in a record ₹8,363 crore in September 2025 as prices crossed ₹1 lakh per 10 grams [G30], and cumulative 2025 inflows through October reached ₹27,572 crore with a record 9,11,000 new folios added in October alone [G32]. The same festival period is also the one point in the calendar when a customer who has never thought about ONL as an investing account might plausibly be thinking about gold as an asset, which gives the notice a reason to exist that has nothing to do with market timing or returns.

The message states two facts and nothing else: that the account can hold gold exchange-traded funds, which are SEBI-regulated and sit in the same demat account the customer already has, and that the exchanges run a Muhurat session on a specific date with a specific window. It does not mention price, does not use the word "today" in an urgency sense, and does not compare gold ETFs against any other asset's expected return.

> Message copy (draft, subject to compliance review): "Your ONL Trade account can hold gold through gold exchange-traded funds, which SEBI regulates and which sit in your demat account. The exchanges will hold a Muhurat trading session on Sunday, 8 November 2026; timings as announced by the exchanges." + standard risk line.

The deck's own copy, reproduced above exactly as PLAN section 3.4 fixes it, keeps the safer "timings as announced by the exchanges" phrasing even though the exact session window, 2:20 pm to 3:30 pm on 8 November [G13], is now public. We note in research prose only, not in the deck, that the precise window is available, because the deck copy is locked and a safer phrasing that ages well if an exchange amends a session time by a few minutes carries no real cost against stating the exact minute.

### 15.3 What we build

The build is a notice, not a product. It needs a push notification or in-app banner inside the bank app and ONL's own app, a DLT-registered SMS template for customers without the app installed, and a WhatsApp utility template for the 35% of idle accounts with an opt-in on file [A50]. None of these channels require new engineering; all three already carry the holdings-check lever's messages from week 2 onward, so the Dhanteras notice is a new creative on an existing rail rather than a new rail.

The creative itself needs sign-off from three parties before it ships: ONL's own compliance desk, because the message touches a product (gold ETFs); the exchange's advertisement-approval process, because any broker communication naming an exchange session needs prior clearance under the NSE code of advertisement [D16]; and the bank's compliance desk, because the message appears inside the bank's own app. Section 19 sets out this approval path in full; here we note only that all three sign-offs must land before 6 November, which gives the team roughly four working days of runway inside week 1 if clearance starts on 2 November.

### 15.4 Rules it meets

The notice is built to sit inside, not outside, every constraint in the case and the regulation lane. Table 15.2 checks the design against the rules that could otherwise sink it.

| Rule | How the Dhanteras notice meets it | Tag |
|---|---|---|
| No advice, no implied returns [C-K2] | The copy names a product category (gold ETFs) and a regulator's status; it names no fund, no price level, no expected gain | C-K2 |
| No inducement | The copy carries no offer, discount, cashback or reward tied to a trade; it is a factual notice, not a promotion | D26 |
| Distinguishes a regulated product from an unregulated one | SEBI's own press release of 8 November 2025 cautions investors that unregulated digital gold carries no investor-protection cover and points them instead to gold ETFs, exchange-traded commodity derivatives and Electronic Gold Receipts [D55, D56] | D55, D56 |
| No urgency or fear language [C-K6] | The copy states a date and a session window without words like "today only" or "last chance"; the Muhurat session is a fact about the exchange calendar, not a manufactured deadline | C-K6 |
| Advertisement-code approval | Any message naming an exchange session needs prior clearance under the revised NSE code of advertisement, in force since 2 February 2023 [D16] | D16 |
| Standard risk line | Every copy block in this lane ends with the standard risk line, as every customer-facing message in this document does | C-K2 |

One nuance belongs here rather than in a footnote. SEBI's press release names gold ETFs, exchange-traded commodity derivatives and Electronic Gold Receipts as the SEBI-regulated alternatives to unregulated digital gold; one secondary summary of the same release additionally lists Sovereign Gold Bonds, which are an RBI debt instrument, not a SEBI-regulated security, and we treat that addition as a likely secondary-source error rather than repeat it [D56]. Our copy names only gold exchange-traded funds, the product the case's own account structure can actually hold, so this nuance affects how we describe the regulatory picture in research prose, not what the customer-facing notice says.

### 15.5 The numbers chain

The lever's arithmetic runs in three steps from the full idle base to the final extra-active count, with a fourth adjustment for the roughly half of idle accounts that carry the 24-month dormant flag [C-D4] and therefore need a harder re-KYC step before any order can execute. Table 15.3 shows the chain at all three scenario values, with the arithmetic worked through once at the base case.

| Step | Formula | Bear | Base | Bull |
|---|---|---|---|---|
| Idle accounts reached | 6,89,375 [T2] times the reach share [A28] | 2,89,538 | 3,44,688 [T19] | 3,86,050 |
| Tapped the notice | reached times the tap-through share [A29] | 6,370 | 10,341 | 15,442 |
| Placed a first order, before the dormant-friction adjustment | tapped times the order-placement share [A30] | 1,592 | 3,102 | 5,405 |
| Dormant-friction factor | (1 minus the dormant share [A10]) plus the dormant share times the flagged-conversion multiplier [A11] | 0.681 | 0.750 | 0.811 |
| Extra actives, Dhanteras lever | prior row times the dormant-friction factor | 1,081 [M] | 2,311 [T10] | 4,332 [M] |

The base-case arithmetic runs as follows. The reach share, A28, is 0.50, so 6,89,375 times 0.50 gives 3,44,688 accounts reached, which matches the reach figure our holdout table already carries for this lever [T19]. The tap-through share, A29, is 0.03, so 3,44,688 times 0.03 gives 10,341 accounts that open or read the notice. The order-placement share, A30, is 0.30, so 10,341 times 0.30 gives 3,102 accounts that would place a first order if every account behaved the same way regardless of dormancy status. Roughly half of the idle pool carries the 24-month dormant flag under the exchange's own rule [C-D4, A10], and a flagged account converts at only half the rate of an unflagged one because it needs a re-KYC or video in-person-verification step first [A11]. The dormant-friction factor averages these two groups: (1 minus 0.50) plus 0.50 times 0.50 equals 0.75. Multiplying 3,102 by 0.75 gives 2,327, which rounds to the model's own reported figure of 2,311 once the model's segment-level rounding is carried through rather than this document's single-step approximation; we show both because the plan's method (section 21) applies the dormant-friction adjustment segment by segment, not on one pooled total, and the two approaches agree within 1%. The bear and bull rows repeat the same four-step chain at the bear and bull values of A28, A29, A30, A10 and A11 respectively, and the resulting figures, 1,081 and 4,332, are the model's own reported totals [M], not independently recomputed by us beyond the chain shown.

### 15.6 Evidence and comparables

The festival's gold-buying habit is well documented even though the figures vary year to year with prices. Ahead of Dhanteras 2024, the India Bullion and Jewellers Association projected a 15 to 16% year-on-year decline in gold demand volume, to 25 to 30 tonnes, as prices rose to about ₹81,400 per 10 grams in Delhi, a 33% rise over the prior year [G17, G18]. A year later, ahead of Dhanteras 2025, prices had risen a further 60% to around ₹1,27,008 per 10 grams [G21], and the All India Gem and Jewellery Domestic Council reported volumes 10 to 15% lower than the year before even as a separate, later estimate from the same body put two-day sales at 50 to 60 tonnes worth nearly ₹85,000 crore, a figure the trade body itself did not fully reconcile with its own earlier estimate [G22, G23]. We carry both figures rather than pick one, because the gap most likely reflects a pre-festival projection against a post-festival estimate from the same source, not a resolved correction, and Appendix D records this conflict in full.

What the price-driven volume softness does not show is a softening in appetite for paper gold. Silver sales nearly doubled for Dhanteras 2025 as price-sensitive buyers shifted away from gold jewellery [G25], and gold ETF inflows kept rising even as jewellery volumes fell, which tells us households are substituting instrument, not abandoning the festival habit. This is the gap our lever is built to meet: a customer who already plans to buy something gold-linked around 6 to 8 November 2026 is told, factually, that the account they already hold can do this, rather than being asked to form a new intention from nothing.

The Muhurat session itself is a separate, equally well-documented habit on the trading side, not the gold side. It is a short, symbolic trading window that Indian retail investors treat as an auspicious first trade of the new accounting year, distinct from any claim about the market's direction on that day. Our notice names the session's existence and its confirmed timing [G13, G14, G15] without implying the session favours any particular trade, consistent with the no-advice and no-implied-returns rules in table 15.2.

### 15.7 What could go wrong and how we would see it early

The single largest risk to this lever is not a market event; it is a compliance-timeline event. The notice needs three sign-offs (ONL compliance, exchange advertisement approval, bank compliance) completed before 6 November, and week 1 of the programme is also the week every other lever's launch creative needs clearing, which creates a bottleneck at the same desks in the same days. Table 15.4 sets this and two smaller risks against an early-warning signal and a response.

| Risk | Early signal | Response | Owner |
|---|---|---|---|
| Compliance clearance for the Dhanteras creative slips past 6 November | By 1 November, the exchange advertisement approval has not come back | Submit the Dhanteras creative first in the week-0 compliance queue, ahead of other lever creatives, since its calendar window is fixed and the others' are not | ONL compliance |
| A customer reads the notice as implying gold ETFs will perform well around Diwali | Customer-service logs a complaint or a query framing the notice as investment advice | Pull the creative, add an explicit "this is not a return forecast" line, re-submit for approval | ONL compliance, customer support |
| The exchange amends the Muhurat session timing after the notice ships | NSE issues an updated circular between notice send and 8 November | The deck's own copy already uses "timings as announced by the exchanges" rather than a fixed time, so no correction is needed for the customer-facing message; update only the internal research note | Main agent |

The second risk deserves one further word, because it is the one a reviewer is most likely to probe. A factual statement that gold ETFs are SEBI-regulated, paired with a date for a trading session, sits close enough to the line between fact and suggestion that a customer could misread it even though the copy itself makes no claim about performance. Our mitigation is procedural rather than rhetorical: we would rather over-correct a complaint in week 1, while the cost of a correction is low, than discover the same misreading at scale in week 8.

Exhibit for the deck: the Dhanteras timeline (6 and 8 November 2026, with the Muhurat session window) paired with the lever's three-scenario bar (1,081, 2,311, 4,332), feeding the strategy slide's calendar strip and the impact slide's lever bars.

## 16. Warm-cohort defence keeps 1,607 extra actives among the 8,887 to 14,072 accounts whose last trade was 9 to 12 months ago, without asking anyone to trade to keep a status

**Answer.** Between 8,887 and 14,072 accounts, midpoint 11,479, last traded 9 to 12 months ago and will roll out of the case's own 12-month Active count [C-D1] next quarter unless something happens before then [T7]. These accounts are not dormant; dormant under the case's own definition means no trade at all in 24 months [C-D4], and this cohort traded as recently as 9 to 12 months back. We reach them with a servicing message about their own account, their nominee and contact details and the instalment option, never with a message that asks them to trade in order to keep a status, because an exchange circular bars exactly that framing. In our model this lever adds 1,033 extra actives in the bear case, 1,607 in the base case and 2,238 in the bull case [M, T10], the smallest of the five reach-based levers but one that defends existing ground rather than recruiting new ground, which makes it a different kind of contribution to the same total.

### 16.1 Who and how many

Table 16.1 sets the warm cohort's size against the two methods the case's own numbers support, and against the two definitions a reader could otherwise confuse.

| Item | Value | Tag |
|---|---|---|
| Roll-off estimate, cohort method (T12 minus T9, scaled to Exhibit 1) | 8,887 accounts | T7 |
| Roll-off estimate, total-row method (1,19,339 minus 13% of 8,09,746) | 14,072 accounts | T7 |
| Midpoint used in the model | 11,479 accounts | T7 |
| Warm cohort definition | Last trade 9 to 12 months ago | T7 |
| Dormant definition, for contrast | No trade in 24 months | C-D4 |

The gap between 8,887 and 14,072 is not an error; it is two legitimate ways of reading the same recency ladder, one that sums each segment's own T12-minus-T9 gap and one that applies a single 13% rate to the whole base [T7]. We use the midpoint, 11,479, as the model's working population, and we flag the method difference honestly in section 3 of this document rather than pick one figure and hide the other.

The distinction between this cohort and a dormant account matters enough to restate plainly. A dormant account, under the case's own definition, has placed no trade in 24 months [C-D4], the condition the exchange's own circular calls "inactive" in its text, which we translate to the case's "dormant" every time it appears [D29]. The warm cohort traded as recently as 9 to 12 months ago, which places it well inside the 12-month window the case counts as Active [C-D1]. A warm-cohort account needs no re-KYC, no video in-person verification and no reactivation flow; it needs only a reminder before the 12-month clock runs out, which is a materially lighter intervention than anything the dormant half of our idle pool requires.

### 16.2 The moment and the message

The moment here is not a calendar date; it is a clock running on each account individually, counting down from that account's own last trade toward the 12-month mark at which it would fall out of the Active count. The message states three facts about the customer's own account: that holdings exist and can be checked, that nominee and contact details may need updating, and that a monthly instalment option exists if the customer wants one. It names no return, makes no claim that the market favours a trade now, and does not frame trading as a condition of keeping any status.

> Message copy (draft, subject to compliance review): "Your ONL Trade demat and trading account, opened with your [bank] account, holds the following: [holdings summary]. You can update your nominee and contact details, or set a monthly amount to buy units of an exchange-traded fund. You choose the fund, the amount and the date, and you can pause at any time." + standard risk line.

This copy deliberately echoes the investments tile's wording from section 13, because the warm cohort is a subset of the same idle population reached through the same rediscovery channels; the difference is timing, not message content. The warm-cohort version adds the nominee and contact-detail prompt specifically, because a servicing nudge framed around account hygiene reads as routine care rather than as a trading prompt, which is the whole point of the design.

### 16.3 What we build

The build reuses the holdings-check tile and statement line from section 13 and adds a targeted send to exactly the accounts whose last trade sits in the 9-to-12-month window, timed to arrive with runway before the 12-month mark, not after it. No new engineering is required beyond a filter on the existing customer base by last-trade date, a query the bank and ONL's own systems can already answer since trade history is already recorded for every account.

The send runs on every owned channel already in service for the other levers: the investments tile inside the bank app, a statement line, a servicing email and a WhatsApp utility template for the 35% of idle accounts with an opt-in on file [A50]. It runs across all 13 weeks of the programme rather than in one burst, because a new account enters the 9-to-12-month window on a rolling basis as each month passes, and a one-time send would miss every account that crosses into the window after week 1.

### 16.4 Rules it meets

The ethical line for this lever is the single most consequential rule in the whole plan, because it is the one place where a badly worded message could look, on its surface, exactly like the practice the case asks us to avoid. Table 16.2 sets the rule against the design choice that keeps us on the right side of it.

| Rule | What it bars | How our message stays on the right side |
|---|---|---|
| NSE circular against trading to avoid an inactive flag [D31] | No communication seeking clients to trade in order to prevent accounts from being flagged inactive | Our message never mentions the account's status or the consequence of not trading; it offers an account-hygiene update and an optional instalment, framed identically to how we would message any idle account |
| No inducement [C-K2] | No reward or incentive tied to placing a trade | The message carries no offer, discount or reward; the instalment option is a standing feature, not a time-limited incentive |
| No urgency or fear [C-K6] | No manufactured deadline or warning about losing a benefit | The message does not say "trade before your account is flagged" or any variant of it; it says nothing about the 12-month clock at all |
| Consent and channel rules | WhatsApp opt-in, DLT-registered SMS, email unsubscribe honoured | Same consent infrastructure as every other lever's send, detailed in full in section 20 | A50 |

The design choice worth stating plainly is what the message does not say. It would be straightforward, and wrong, to write a message that tells the customer their account is about to lose its Active status unless they place a trade, which is precisely the pattern NSE's 2021 circular bars by name [D31]. Our copy instead treats the warm cohort exactly like every other idle account receiving a holdings-check message, with one addition, the nominee and contact-detail prompt, that has nothing to do with trading at all. The lift this lever produces comes from reminding a customer who already has the habit that the account exists and inviting them to make it recurring, not from telling them a clock is running out.

### 16.5 The numbers chain

The chain for this lever has two steps rather than three, because the warm cohort's starting population is already fixed at the T7 midpoint rather than a share of a larger idle base. Table 16.3 shows the chain at all three scenario values.

| Step | Formula | Bear | Base | Bull |
|---|---|---|---|---|
| Warm-cohort pool | Fixed at the T7 midpoint | 11,479 | 11,479 | 11,479 |
| Reached with a servicing message | pool times the reach share [A35] | 6,887 | 8,035 | 8,954 |
| Incremental re-trade, above business as usual | reached times the incremental re-trade share [A36] | 1,033 [M] | 1,607 [T10] | 2,238 [M] |

At the base case, 11,479 times the reach share of 0.70 [A35] gives 8,035 accounts reached, and 8,035 times the incremental re-trade share of 0.20 [A36] gives 1,607 extra actives, matching the model's own reported figure for this lever exactly [T10]. The bear and bull rows apply the bear and bull values of A35 (0.60 and 0.78) and A36 (0.15 and 0.25) to the same fixed pool of 11,479, since the pool size itself does not carry a bear-to-bull range in the model, only the reach and response shares do.

### 16.6 Evidence and comparables

The behavioural case for anchoring a reminder to a recurring, personally meaningful date rather than relying on a one-off push is well established outside India. Karlan, McConnell, Mullainathan and Zinman's randomised trial on savings reminders found that a single reminder raised savings-goal attainment relative to no reminder, though sending additional reminders beyond the first did not produce an additive effect [E17, E20]. Separately, the fresh-start literature finds that aspirational behaviour, measured through commitments and goal-directed searches, rises after temporal landmarks such as paydays, birthdays and the start of a new period, because a landmark creates a felt separation between past behaviour and a new one [E22]. Neither study was run on an Indian brokerage account specifically, so we read both as directional support for the design choice, not as a measured prediction of this lever's size.

A second strand of evidence sets a boundary on what we should not claim for this lever. Research on investor attention after market declines finds that reduced login frequency coincides with reduced trading in the same period, not with a compensating burst of activity once attention returns [E38, E41]. This matters here specifically because a reader could otherwise assume that a warm-cohort customer, reminded of their account during a weak market, might be persuaded to trade more aggressively than before. The evidence says the opposite: inattention after a downturn predicts less trading, not more, which is one more reason our message carries no market commentary at all and sticks to account hygiene and an optional, self-chosen instalment.

The recency ladder itself, drawn from the case's own exhibits rather than from outside research, gives the clearest signal that this cohort needs attention now rather than later. Only 40% of the accounts counted as Active over the trailing 12 months in September 2026 had actually traded in the most recent month, down from 47% a year earlier [T6]. The share of customers who are technically Active but no longer trading monthly is rising, which means the warm cohort this lever targets is a growing population, not a shrinking one, even as the headline Active rate holds roughly flat.

### 16.7 What could go wrong and how we would see it early

| Risk | Early signal | Response | Owner |
|---|---|---|---|
| A copy draft, even unintentionally, reads as asking the customer to trade to avoid losing Active status | Compliance review flags language referencing the 12-month clock or the word "inactive" or "dormant" in customer-facing text | Strip any reference to account status from the message; keep only the account-hygiene and instalment framing | ONL compliance |
| The reach share (A35, 70% base) runs lower than assumed because servicing messages have a lower open rate than promotional ones | Weekly holdout read in weeks 2 to 4 shows a lift below the minimum detectable effect for this lever | Shift budget toward the channel with the strongest observed open rate among email, SMS and WhatsApp for this specific send | Main agent |
| A customer who receives the nominee-update prompt treats it as a phishing attempt, given how often such prompts are used in fraud | Customer support logs a rise in "is this a scam" queries tied to this specific message | Add the bank's own verified sender identity and a direct link to the bank's help desk inside the message | Bank app team, customer support |

Exhibit for the deck: the recency ladder (T6) paired with the warm-cohort's three-scenario bar (1,033, 1,607, 2,238), feeding the diagnosis slide's recency panel and the impact slide's lever bars.

## 17. A guided first order for new accounts adds 1,897 extra actives and workplace sessions add 413

**Answer.** Two smaller levers close out the seven. New accounts opened during the 13-week programme, 18,972 of them [T8], get a guided first-order walkthrough rather than being left to find their own way to a first trade, a gap the case's own corrected text confirms is wide: very few new accounts place a first trade or first investment within their first month [C-F4]. This lever adds 1,328 extra actives in the bear case, 1,897 in the base case and 2,466 in the bull case [M, T10]. Separately, 40 workplace financial-education sessions at employers that run salary accounts with the parent bank, reaching about 4,800 attendees in total, add 181 extra actives in the bear case, 413 in the base case and 783 in the bull case [M, T10], the smallest of all seven levers by count but one we keep for reasons this section sets out plainly rather than apologetically.

### 17.1 Guided first order: who and how many

The accounts added to the base in the year to September 2026 number 75,891 [C-E1], and the model scales this to the programme's own 13-week window using the net monthly account-growth rate, A03, which gives 18,972 accounts opened between 2 November 2026 and 31 January 2027 [T8]. Table 17.1 sets this population against the stall the lever targets.

| Item | Value | Tag |
|---|---|---|
| Accounts added, full year to September 2026 | 75,891 | C-E1 |
| Net monthly account growth | 6,324 accounts a month | A03 |
| Accounts opened in the 13-week window (A03 times 3 months) | 18,972 | T8 |
| Case finding on new-account first-trade speed, as corrected | Very few new accounts reach a first trade or first investment within the first month | C-F4 |

The corrected case text is the reason this lever exists at all. An earlier reading of the case text might have suggested new accounts convert quickly on their own and that the whole activation gap sits with long-idle accounts; the corrected line removes that reading entirely. A new account and a thirteen-month-old idle account face the same stall, at login and at funding, as section 9 sets out in full, which is why a guided first-order flow belongs in the same lever set as the salary-day card and the holdings tile rather than standing apart from them.

### 17.2 Guided first order: the moment and the message

The moment is the first 30 days after an account opens, the window the case's own funnel names as the one in which a first trade almost never happens on its own [C-F4]. The message is not a single send but a sequence: a welcome walkthrough that appears the first time the customer logs in, an order-preview screen before any first order executes, and a full cost display showing the exact brokerage, depository and any applicable charge before the customer confirms.

> Message copy (draft, subject to compliance review): "Welcome to your ONL Trade account. This short walkthrough shows you how to view your account, place an order and see the full cost before you confirm. You can close this walkthrough at any time and come back to it later from your account settings." + standard risk line.

No product is named by default inside the walkthrough. The customer chooses what to look at first, consistent with the no-default rule that governs the salary-day card's neutral ETF list in section 12, and the walkthrough can be dismissed and resumed, which keeps it from becoming the kind of forced, uncloseable flow the CCPA's dark-pattern guidelines name as "forced action" [J56].

### 17.3 Guided first order: what we build

The build has four parts, none of which touches the trading engine [C-K4]. First, a walkthrough overlay that appears on first login and can be dismissed. Second, an order-preview screen that shows the exact order before confirmation, including quantity, estimated price range and every charge that will apply. Third, a full cost display broken into brokerage [C-PR1], depository charges and any applicable annual maintenance charge, so the customer sees the real arithmetic before committing rather than discovering it on a statement later. Fourth, an easy way out at every step, meaning no screen in the sequence requires an action other than "continue" or "exit," and exiting carries no penalty or repeated nagging on the next login.

This design sits deliberately close to what Groww describes of its own onboarding history: the company's original 2017 product was mutual funds with a ₹100 minimum SIP, and it added stock trading only in 2020 in response to demand, building trust through a simpler product before a more complex one [H02]. The parallel is not that ONL should change its product mix, but that a guided, low-friction first step, shown clearly before any money moves, lowers the barrier to a first order regardless of which product sits behind it.

### 17.4 Guided first order: rules it meets

The guided flow raises no new regulatory question beyond the ones already resolved for the salary-day card in section 12, because it recommends no fund, shows no return projection and defaults to nothing. Table 17.2 checks it against the constraints most likely to be probed.

| Rule | How the guided flow meets it | Tag |
|---|---|---|
| No advice [C-K2] | The walkthrough explains how the account works; it does not recommend a specific security, fund or trade | C-K2 |
| No default product | The order-preview screen shows whatever the customer has chosen to look at; nothing is pre-selected on the customer's behalf | Section 12.3 analogue |
| No dark pattern | The walkthrough can be dismissed and resumed at will, consistent with the CCPA's bar on "forced action" design | J56 |
| Full cost disclosure | Every charge is shown before confirmation, consistent with the case's own product and pricing table | C-PR1, C-PR5 |
| No engine rebuild [C-K4] | The walkthrough and preview screens sit on top of the existing order flow; no change to the matching or settlement engine is required | C-K4 |

### 17.5 Guided first order: the numbers chain

This lever's chain is the simplest of the seven, because A39 already represents the whole lift from reach through response in a single assumption: the percentage-point lift in the 90-day first-order rate among accounts opened in the window, attributable to the guided flow, above whatever rate those accounts would have reached on their own. Table 17.3 shows the arithmetic.

| Step | Formula | Bear | Base | Bull |
|---|---|---|---|---|
| Accounts opened in the window | A03 times 3 months [T8] | 18,972 | 18,972 | 18,972 |
| Lift in the 90-day first-order rate from guided onboarding | A39 | 7% | 10% | 13% |
| Extra actives, new-account lever | accounts times the lift | 1,328 [M] | 1,897 [T10] | 2,466 [M] |

At the base case, 18,972 accounts times a lift of 0.10 gives 1,897 extra actives, matching the model's own reported figure exactly [T10]. The bear and bull figures, 1,328 and 2,466, apply the bear value of 0.07 and the bull value of 0.13 to the same fixed population of 18,972 accounts, since the number of accounts opened in the window does not itself carry a bear-to-bull range separate from A39's own range.

### 17.6 Guided first order: evidence and comparables

Lane H's review of comparable Indian platforms finds the clearest precedent in the UPI Autopay rail itself and in bank-app-embedded onboarding more broadly, both of which this plan already uses elsewhere in the lever set rather than inventing a new mechanism for this lever specifically. What transfers less directly is the exact magnitude of a guided-onboarding lift, because no Indian broker discloses a controlled before-and-after comparison of a guided first-order flow against an unguided one; A39's range of 7% to 13% is a team estimate, checked against the general finding that active decisions and clear defaults raise initial action rates in financial contexts, without being a direct replication of any single study [E14, E16]. Madrian and Shea's and related default-enrolment literature finds that requiring an active choice rather than defaulting a customer in or out can raise initial participation by a double-digit number of percentage points in retirement-savings contexts [E14], a different product and a different country, which is why we treat it as supportive rather than as a source figure for A39 itself.

### 17.7 Workplace sessions: who and how many

Forty sessions, at 120 attendees each in the base case, run at employers that pay salaries into accounts with the parent bank. Table 17.4 sets the session count against the population it reaches.

| Item | Bear | Base | Bull | Tag |
|---|---|---|---|---|
| Sessions | 30 | 40 | 50 | A31 |
| Attendees a session | 100 | 120 | 140 | A32 |
| Total attendees | 3,000 | 4,800 | 7,000 | derived |
| Share of Salary Account cohort that is idle (5,39,954 of 6,27,853) | 86.0% | 86.0% | 86.0% | T2 |
| Idle attendees | 2,580 | 4,128 | 6,020 | derived |

Attendees are drawn from the Salary Account cohort specifically, because the sessions run at employers whose payroll flows through the parent bank, and 86.0% of that cohort is idle, a ratio computed directly from the cohort table (5,39,954 idle of 6,27,853 total accounts) [T2]. This is why the lever's reach stays inside the Salary Account column of T10 rather than spreading across every segment the way the Dhanteras notice does.

### 17.8 Workplace sessions: the moment and the message

The moment is a scheduled, in-person or virtual education session at the customer's own workplace, run during ordinary working hours rather than tied to any calendar event. The content is general financial literacy, market mechanics and how to use an account the attendee may already hold, with no mention of ONL's own products as a sales pitch and no incentive tied to attendance or to any resulting trade.

The sessions themselves are run through SEBI's SMARTs (Securities Market Trainers) empanelment programme or through exchange investor-awareness programmes, both of which NSE and NISM state are offered free of charge to a requesting organisation [F50, F51]. SEBI's own FY26 annual report chapter records 42,743 SMARTs programmes conducted across 774 districts in that year, funded from market infrastructure institutions' own investor-protection funds rather than from a per-programme fee charged to the requesting employer [F57, F54]. We note this plainly because a separate, unrelated reimbursement scheme exists under the ICAI and the Ministry of Corporate Affairs, which pays resource persons up to ₹5,000 to ₹7,000 per programme; that scheme sits under a different nodal body entirely and must not be cited as an NSE or SEBI cost figure for this lever [F52, F53].

### 17.9 Workplace sessions: what we build

The build is organisational rather than technical: an outreach to employers that bank with the parent bank's corporate salary relationships, a request to NSE or SEBI's SMARTs desk for trainers, a venue and schedule at the employer's premises, and session materials covering general financial literacy and how an existing ONL account works. No app feature, no new channel and no engineering ticket is required, which is why this lever ships through weeks 3 to 12, the middle of the programme, rather than needing to be ready at launch.

### 17.10 Workplace sessions: rules it meets

| Rule | How the session design meets it | Tag |
|---|---|---|
| No product pitch | Sessions cover general financial literacy and account mechanics; no ONL product is recommended or compared favourably against another | PLAN section 3.4 |
| No inducement | Attendance carries no reward, and no incentive is tied to any trade an attendee subsequently places | C-K2 |
| Programme funding transparency | Sessions run through SEBI SMARTs or exchange investor-awareness programmes, both free of charge to the requesting organisation, funded from MII investor-protection funds; this is a different funding source from the unrelated ICAI/MCA reimbursement scheme and the two are never conflated in our costing | F50, F51, F54 |
| No pressure on the employer relationship | Sessions are opt-in for employees and voluntary for the employer; no account data moves until a customer separately engages with ONL's own channels | Section 20 analogue |

### 17.11 The numbers chain for both levers and why the smaller one stays

Table 17.5 completes the arithmetic for workplace sessions, continuing from table 17.4's attendee figures.

| Step | Formula | Bear | Base | Bull |
|---|---|---|---|---|
| Idle attendees | from table 17.4 | 2,580 | 4,128 | 6,020 |
| First-order rate among idle attendees | A33 | 7% | 10% | 13% |
| Extra actives, workplace lever | idle attendees times the rate | 181 [M] | 413 [T10] | 783 [M] |

At the base case, 2,580 bear becomes 180.6, which we round to 181 [M]; the base case, 4,128 idle attendees times a 10% first-order rate, gives 412.8, rounding to 413, matching the model's own reported figure exactly [T10]; and the bull case, 6,020 idle attendees times 13%, gives 782.6, rounding to 783 [M].

Four hundred and thirteen extra actives is the smallest number in our entire lever set, smaller than even the smallest other lever's bear case. We keep it for three reasons rather than drop it to simplify the plan. First, the cash cost is close to zero: the sessions themselves are free under the SMARTs or exchange programme [F50, F51], and the only cost the model carries is ₹6,000 a session for travel and materials [A55], a team estimate, which puts this lever's entire cash footprint at ₹2,40,000 for the programme [T13], a fraction of the ₹16.5 lakh total [T13]. Second, it builds a kind of trust no digital channel can replicate: a session run inside an employer's own premises, with no product pitch, demonstrates the bank-led broker's intent in a way that is itself a defence against the inducement and dark-pattern risks every other lever has to actively manage. Third, the holdout design in section 27 lets us measure this lever's real lift directly, so if the weekly read shows it performing meaningfully above or below the 413 base case, the next quarter's session count, A31, is the easiest single lever in the whole plan to scale up or wind down, since it carries no sunk engineering cost either way.

Exhibit for the deck: the new-account funnel-fix card (guided walkthrough, order preview, full cost display) alongside the workplace-session reach funnel (40 sessions, 4,800 attendees, 413 extra actives), feeding the execution slide's funnel-fixes panel.

## 18. Seven features ship within one quarter on the bank app and ONL's existing services, without touching the trading engine

**Answer.** Seven features carry every lever in sections 12 to 17 onto a working screen, and every one of them ships inside the 13-week window without a change to ONL's trading engine [C-K4]. Four are must-have infrastructure that nothing else can launch without: the consent and preference centre, the holdout and frequency-cap service, the investments tile with video in-person verification for dormant accounts, and the daily holdings and net-worth view sits apart as a delighter rather than a dependency. The salary-day card with single sign-on, the UPI Autopay instalment and the guided first-order flow are performance features, each one directly responsible for a named lever's lift. A service blueprint for the salary-day card specifically shows what the customer sees against what runs behind the screen, because that card alone carries 5,661 of the base case's 19,053 extra actives [T10], the largest single line in the whole plan.

### 18.1 The seven features, owner, dependency and live week

Table 18.1 lists every feature against the roadmap's own gates (G0 at week 0, G1 at week 4, G2 at week 6, G3 at week 13) and the Kano class each feature earns.

| Feature | Owner | Dependency | Weeks to build | Live week | Kano class | Acceptance test |
|---|---|---|---|---|---|---|
| Consent and preference centre | Bank app product team, ONL compliance | None; must ship first | Weeks 0 to 1 | Week 0, G0 | Must-have | Every subsequent lever's creative passes compliance review only after the centre's consent text is live |
| Investments tile with video IPV for dormant accounts | Bank app product team, KYC operations | Video IPV vendor integration | Weeks 1 to 4 | Week 2 (read-only); full flow at week 4, G1 | Must-have | A dormant account can complete video IPV inside the tile and see its holdings within the same session |
| Salary-day card with single sign-on | Bank app product team, ONL engineering | Consent centre; SSO token exchange with ONL | Weeks 1 to 4 | Week 4, G1 | Performance | A salary credit triggers the card for an eligible idle Salary Account, and a tap completes sign-on into ONL without a second password |
| Holdout and frequency-cap service | Data and analytics team | Consent centre; event logging on every send | Weeks 1 to 4 | Week 4, G1 | Must-have | The 10% holdout cohort is drawn and excluded from every send before any lever's creative goes live; a send automatically stops if opt-outs exceed 0.5% |
| UPI Autopay instalment | ONL engineering, bank payments team | Salary-day card; NPCI mandate registration | Weeks 3 to 5 | Week 5 | Performance | A customer can set a recurring UPI Autopay mandate from inside the salary-day card flow and see the first scheduled debit date confirmed |
| Guided first-order flow | ONL engineering | Order-preview and cost-display components | Weeks 2 to 4 | Week 4, G1 | Performance | A new account's first login shows the walkthrough, and a first order cannot be confirmed without passing through the cost-display screen |
| Daily holdings and net-worth view | ONL engineering | Existing account and holdings data; no new integration | Weeks 5 to 8 | Week 8 | Delighter | A customer can open the view and see current holdings and a net-worth figure that updates at least once a trading day |

The must-have and performance split follows directly from what happens if a feature is missing. Without the consent centre, no other lever's message can legally send, which is why it ships at week 0 even though it produces no extra actives on its own. Without the holdout service, the whole plan's claim to measure its own lift, the subject of section 27, has no evidential basis, which is why we class it must-have even though it also produces no extra actives directly. The video-IPV capability inside the investments tile is must-have for a different reason: without it, the roughly half of the idle pool carrying the 24-month dormant flag [C-D4, A10] cannot complete reactivation at all, regardless of which lever reaches them. The daily holdings view, by contrast, is the one feature no lever's numbers chain in sections 12 to 17 depends on; it exists because a customer who has just placed a first order benefits from seeing it reflected somewhere, which supports the habit stage of the funnel (section 9) without being load-bearing for any single extra-active count.

### 18.2 A service blueprint for the salary-day card

Table 18.2 walks the salary-day card from the customer's own action through to the backstage systems and the support process that keep it compliant, since this is the feature carrying the single largest lever.

| Customer action | Frontstage | Backstage | Support process |
|---|---|---|---|
| Opens the bank app on or near a salary credit | Home screen shows the salary-day card if the account is eligible | A salary-credit event triggers an eligibility check: Salary Account, idle, consent on file, not in the holdout cohort, frequency cap not exceeded | None required at this step; the check runs silently |
| Reads the card | Card text states the account is open and linked, with one action available | No data moves to ONL yet; the tap is the sole permission event, consistent with RBI's KYC secrecy clause on cross-selling [J38, J43] | None required |
| Taps the card | Single sign-on handoff screen appears briefly | A token exchange authenticates the customer into ONL without a new password; the event is logged for the holdout and frequency-cap service | If the handoff fails, a fallback message directs the customer to ONL's own app with the same account credentials |
| Picks an ETF category, amount and date | Neutral, rule-built list of ETF categories appears, alphabetically ordered, no default selected | The list is built from objective inclusion criteria set in advance, not personalised or ranked by expected return | Compliance maintains the approved list version and logs any change for audit |
| Authorises the Autopay mandate | UPI mandate confirmation screen, showing the exact amount and date | NPCI registers the recurring mandate; the bank's payments system schedules the debit | Customer support can look up mandate status if a customer calls about a missed or delayed debit |
| First order executes on the scheduled date | Confirmation screen with the order, its cost breakdown and the standard risk line | ONL's existing order-placement engine runs the order; no change to matching or settlement logic [C-K4] | Standard customer-service escalation if an order fails to execute on schedule |
| Repeats monthly | Daily holdings and net-worth view (once live, week 8) reflects the growing position | The recurring mandate re-executes automatically each month without a fresh customer action | None required; this is the point at which the lever converts a tap into a habit |

The blueprint shows that compliance sits almost entirely on the backstage side of the line, which is by design. The frontstage screens the customer sees are simple: a card, a list with no default, a mandate confirmation and a cost breakdown. Every rule this plan has to satisfy, from the consent event's timing to the neutral list's objective criteria to the holdout exclusion, is enforced behind the screen rather than through anything the customer has to read and interpret correctly in the moment.

### 18.3 Dependencies across the seven features

Table 18.3 makes the build order explicit, since several features cannot ship before another one is live.

| Feature | Blocks | Blocked by |
|---|---|---|
| Consent and preference centre | Every other feature's compliance clearance | Nothing |
| Holdout and frequency-cap service | Every lever's measured lift in section 27 | Consent and preference centre |
| Investments tile with video IPV | The rediscovery lever (section 13) and the warm-cohort lever (section 16) | Video IPV vendor integration |
| Salary-day card with single sign-on | UPI Autopay instalment | Consent and preference centre, SSO token exchange |
| UPI Autopay instalment | The salary-day lever's first-order conversion step | Salary-day card |
| Guided first-order flow | The new-account lever (section 17) | Order-preview and cost-display components |
| Daily holdings and net-worth view | Nothing; a standalone retention feature | Existing account data only |

Reading table 18.3 against the roadmap gates in section 26 shows that the consent centre and the holdout service sit at the root of the whole dependency tree, which is exactly why G0, at week 0, tests precisely those two items ("creatives cleared; consent text live") before anything else is allowed to launch.

Exhibit for the deck: the seven-feature table condensed to feature, Kano class and live week, paired with the salary-day card's service blueprint in abbreviated form, feeding the strategy slide's feature grid.

## 19. Every message and screen passes five checks for advice, return claims, inducement, consent and dark patterns before it ships

**Answer.** The deck states five checks; this section expands them into a full ten-point test, because five categories compress several distinct regulatory and ethical rules into single headings that a reviewer could otherwise assume are each a single yes-or-no question. Every customer-copy block drafted in sections 12 to 17 passes all ten points, with one item flagged honestly as an open legal question rather than a settled fact. ONL's own past first-trade offers and research-call messages [C-PB3], scored against the same ten points, pass clearly on only two or three, which is the comparison that makes the case for building new copy rather than reusing the old.

### 19.1 The ten-point test

Table 19.1 expands the deck's five headline checks into ten specific tests, each stated as a pass condition rather than a vague principle.

| # | Test | Pass condition | Source rule |
|---|---|---|---|
| 1 | No advice | The message names no specific security, fund or trade as a recommendation | C-K2 |
| 2 | No return claim | The message states no expected gain, no past performance figure presented as predictive, and no comparison implying one product outperforms another | C-K2 |
| 3 | No inducement | No reward, discount, cashback or incentive is tied to placing a trade or opening an account | D26, C-K2 |
| 4 | Consent first | No customer data moves to the broker before the customer's own affirmative action (a tap, a sign-on, an opt-in) | J04, J43 |
| 5 | No dark pattern | The message or screen carries none of the CCPA's named patterns, in particular confirm shaming and forced action | J55, J56 |
| 6 | No urgency or fear | No language implying a deadline, a loss of status or a scarce opportunity ("today only," "last chance," a countdown) | C-K6 |
| 7 | Standard risk line present | Every customer-facing message or screen ends with the standard risk line | C-K2 |
| 8 | Prior approval or timely reporting | The creative has cleared ONL compliance, exchange advertisement approval and bank compliance before it sends | D16, D24 |
| 9 | No celebrity, no exchange branding misuse | No celebrity endorsement appears, and the exchange's own name or logo is not used as if the exchange itself were advertising | D19 |
| 10 | Opt-out and frequency cap honoured | A customer who opts out stops receiving the message immediately, and no send proceeds if opt-outs on a prior send exceeded the 0.5% guardrail | A50, J51, J52 |

Point 10's 0.5% figure deserves a direct statement here, because section 20 treats it the same way: this is an internally set guardrail the plan adopts as a control, not a threshold any regulator has published. Lane J's search across TRAI, SEBI, RBI and the exchanges found no circular setting a numeric opt-out-rate ceiling comparable to this one, so we describe it honestly as our own choice, tighter than any external requirement we found, rather than attribute it to a regulator that did not set it.

### 19.2 Every customer-copy block scored

Table 19.2 scores every drafted customer-copy block from sections 12 to 17 against the ten points, with a pass or an open-question flag in each relevant column; blank cells indicate the point does not bear on that specific copy block (for example, point 9 on celebrity branding rarely applies to a servicing message).

| Copy block (section) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Salary-day card (12) | Open question* | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass |
| Investments tile (13) | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass |
| RM review script (14) | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass |
| Dhanteras notice (15) | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass |
| Warm-cohort message (16) | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass |
| Guided first-order walkthrough (17) | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass | Pass |
| Workplace session materials (17) | Pass | Pass | Pass | n/a, no customer data moves at a session | Pass | Pass | n/a, spoken session, not a screen or message | Pass | Pass | n/a |

*The salary-day card's one open item is the same one Lane D's verification flagged directly: whether a rule-built, no-default, objective-criteria neutral ETF list sits inside the stockbroker incidental-advice carve-out under Regulation 4(g) of the Investment Advisers Regulations is not answered by any SEBI circular, FAQ or informal guidance found in search [D05]. We state this as an open legal question requiring a formal informal-guidance request before build, consistent with the content-integrity rule against treating an unsettled question as a settled fact, not as a failure of the design itself; every other element of the card, including the no-default rule, the alphabetical ordering and the absence of any return claim, is built specifically to sit as far inside the carve-out as the design can reasonably go while the question is pending.

### 19.3 The approval path

Table 19.3 sets out the three-stage approval path every piece of customer-facing copy passes through before it can send, with what each stage checks.

| Stage | Owner | What it checks | Typical turnaround |
|---|---|---|---|
| ONL compliance review | ONL compliance desk | Points 1, 2, 3, 5, 6, 7 of the ten-point test; internal sign-off that the copy matches an approved template | 2 to 3 working days |
| Exchange advertisement approval | NSE or BSE advertisement desk | Point 8 specifically, under the exchange's own code of advertisement; point 9 (celebrity and exchange-branding rules) | Prior approval required before issuance for most advertisement categories under the current code [D16]; a proposed common advertisement code would instead allow post-issuance reporting within 3 working days for non-celebrity advertisements, not yet in force [D23, D24] |
| Bank compliance review | Bank's own compliance function | Point 4 (consent timing) and point 10 (opt-out and frequency-cap mechanics), since the message appears inside the bank's own app and under the bank's own notice | 2 to 3 working days, run in parallel with ONL compliance where the message appears on both the bank app and ONL's own channels |

The approval path explains why section 15's Dhanteras risk register names compliance timing, not the market, as the main risk to that lever specifically: every one of the seven levers' creatives passes through the same three-stage path, and the Dhanteras notice is the one lever whose launch date is fixed by the calendar rather than flexible, which makes it the lever most exposed to any delay in this path.

### 19.4 Banned customer phrases

No copy block in sections 12 to 17 uses any of the following words or phrases, and the list below is the standing check applied to every draft before it enters the approval path in table 19.3: guaranteed, assured, risk-free, sure, don't miss, last chance, hurry, limited time, only today, jackpot, multibagger, tip. Each of these either implies a certainty the market cannot deliver, which breaches point 2, or manufactures urgency, which breaches point 6, and several breach both at once.

### 19.5 How ONL's own past messages score

ONL's past outreach tried regular communication on WhatsApp, email, RCS and social media based on market information, research calls and offers for every first trade [C-PB3], run over a year under a "stay invested" theme that did not move the active rate beyond 0.04 percentage points [C-PB5, C-E1]. Table 19.4 scores this past approach against the same ten points, honestly rather than charitably.

| # | Test | ONL's past messages, as the case describes them | Verdict |
|---|---|---|---|
| 1 | No advice | Market information and research calls sit close to the line the incidental-advice carve-out is built to police, even if not formally advice | Partial |
| 2 | No return claim | A "stay invested" theme built around compounding and long-term wealth implies a return outcome without stating a number, which still edges toward a claim the case's own constraints caution against | Fail |
| 3 | No inducement | "Offers for every first trade" [C-PB3] is the clearest failure on this test; an offer tied directly to placing a trade is close to the textbook definition of inducement our plan is built to avoid | Fail |
| 4 | Consent first | Not described in the case in enough detail to score directly; assumed pass, since no construct in the case suggests data moved before consent | Pass (assumed) |
| 5 | No dark pattern | Not described in enough detail to score directly | Pass (assumed) |
| 6 | No urgency or fear | Research calls describing calls as "successful" implies a pattern of winners being highlighted, which edges toward manufactured excitement rather than a flat statement of fact | Partial |
| 7 | Standard risk line present | Not specified in the case; assumed pass since this is a baseline regulatory requirement regardless of campaign design | Pass (assumed) |
| 8 | Prior approval | Not specified in the case; assumed pass for the same reason as point 7 | Pass (assumed) |
| 9 | No celebrity, no exchange branding misuse | Not described in the case | Pass (assumed) |
| 10 | Opt-out and frequency cap | A year-long, multi-channel campaign across WhatsApp, email, RCS and social media [C-PB3, C-PB4] with no stated frequency discipline is the pattern our 0.5%-opt-out guardrail exists specifically to prevent | Fail |

ONL's past approach scores clear fails on three of the ten points (return claims, inducement, and frequency discipline) and partial failures on two more (advice-adjacent content, and urgency-adjacent framing), against a clean pass on every point for all seven of our proposed levers. This is not a claim that the past campaign broke any specific rule; the case gives us a summary, not the actual message text, so several columns in table 19.4 carry an assumed pass rather than a verified one. It is, however, a legitimate explanation, grounded in the case's own description, for why a year of that campaign moved the active rate by only 0.04 percentage points while costing real cash and effort [C-PB3 to C-PB5, C-E1]: a message built around an offer and a theme of staying invested asks a customer to act on sentiment, where our seven levers ask a customer to notice an account they already hold and act on a mechanism, not a mood.

Exhibit for the deck: the ten-point test condensed to a five-row summary (matching the deck's own five-check language) with a single pass/fail column for "our levers" against "ONL's past messages," feeding the execution slide's guardrail panel.

## 20. The bank shows the card inside its own app under its own notice, so customer data reaches the broker only after the customer taps, and opt-outs above 0.5% a send stop a message

**Answer.** The Digital Personal Data Protection Rules 2025 run on a three-tier commencement schedule, and only two of the three tiers are live during our 2 November 2026 to 31 January 2027 build window: the rules that took effect on publication in November 2025, and Rule 4 on consent managers, which comes into force on 13 November 2026, inside the window [J22, J23]. The tier carrying most of the main data-fiduciary obligations, notice content and breach-reporting mechanics among them, does not come into force until 13 May 2027, after our window closes [J24]. Our design does not wait for that tier. The salary-day card's own architecture, a card inside the bank's own app under the bank's own notice, means no customer data crosses to ONL until the customer taps, which is itself the permission event under the RBI's KYC secrecy clause [J38, J43]. The 0.5% opt-out guardrail that stops a send is our own internal control, not a sourced regulatory figure, and we say so plainly rather than imply otherwise.

### 20.1 The DPDP Rules 2025 commencement schedule against our build window

Table 20.1 lays out all three tiers of the DPDP Rules 2025 against the build window's own dates, so the design choices in the rest of this section rest on a stated fact rather than an assumption.

| Tier | Rules | Commencement date | Inside the 2 Nov 2026 to 31 Jan 2027 window | Tag |
|---|---|---|---|---|
| 1 | Rules 1, 2, and 17 to 21 | 13 November 2025, on publication | Yes, already in force before the window opens | J22 |
| 2 | Rule 4 (registration and obligations of consent managers) | 13 November 2026 | Yes, inside the window | J23 |
| 3 | Rules 3, 5 to 16, 22 and 23 (most main data-fiduciary obligations: notice content, consent-manager interoperability duties on fiduciaries, significant-data-fiduciary duties, children's-data verification, breach-reporting mechanics, cross-border transfer conditions) | 13 May 2027 | No, after the window closes | J24 |

One source disagreement belongs here, stated honestly rather than resolved by assumption. A second legal-news summary describes Rule 4 as coming into force "on a later date to be notified" rather than the fixed 13 November 2026 date most sources give [J25]. We carry forward the fixed-date reading because it is consistent with the planning-time finding already on record and is corroborated by the gazette notification's own metadata [J21, J22], but we note that the primary gazette text itself was not retrieved directly in this verification pass, owing to a certificate error on the direct fetch [J26], so this date should be confirmed against the gazette text before the research document's claim is treated as final beyond this plan's own purposes.

The practical consequence of table 20.1 is that a design relying on any Rule 3, 5-to-16, 22 or 23 obligation, such as a specific consent-manager-interoperability duty placed on ONL as a data fiduciary, is not yet legally operative for any week of our programme [J24]. Our design does not need any of these obligations to be operative, which is the point of the next sub-section.

### 20.2 Consent managers and why our design does not depend on them

A registered Consent Manager, under Rule 4, is a company with a minimum net worth of ₹2 crore that enables a Data Principal to give, manage, review and withdraw consent through an interoperable platform, without itself reading the content of the data it transmits [J28, J29]. Because Rule 4 comes into force on 13 November 2026, inside our window, a bank-app card that routed a customer's consent through a registered Consent Manager would be legally operative for most of the programme [J23, J30]. Our salary-day card design does not use this route, and we state plainly why not: the card's own consent architecture, the customer's tap as the sole permission event before any data moves, already satisfies the simpler, direct-consent standard under the RBI's KYC secrecy clause (table 20.3 below), and building a Consent Manager integration would add a dependency on a third-party registered entity for a design that does not need one. This is a design choice stated honestly as a choice, not a claim that a Consent Manager route would be unavailable or unlawful.

### 20.3 The Account Aggregator framework: a possible alternative channel the design does not use

The RBI's Account Aggregator framework, most recently reissued as the Reserve Bank of India (Non-Banking Financial Companies - Account Aggregator) Directions, 2025 (RBI/DoR/2025-26/368, dated 28 November 2025), lets a customer pull financial data, including securities holdings, across institutions through a consent-based intermediary [J31]. SEBI's own 19 August 2022 circular already permits depositories to participate in this framework as Financial Information Providers for securities holdings [J33]. This framework is relevant background, and we name it for completeness, but our lever design does not use it and does not need it: the salary-day card triggers a customer-initiated single sign-on directly into ONL, not an Account-Aggregator-mediated pull of holdings data, and Lane J's search found no evidence that our design either depends on AA rails or conflicts with them [J36]. We flag this as limited relevance rather than omit it, because a reviewer could otherwise reasonably ask why a plan this focused on consent architecture does not mention the AA framework at all.

### 20.4 Bank-to-subsidiary data sharing: the RBI KYC secrecy clause

Table 20.2 sets the salary-day card's design against the specific RBI rule governing whether a bank may share account-opening information with a group subsidiary for cross-selling purposes.

| Clause | What it says | How the salary-day card design fits | Tag |
|---|---|---|---|
| Clause 55(a) | Regulated entities must maintain secrecy regarding customer information arising from the contractual relationship | No customer information moves to ONL until the card is tapped | J37 |
| Clause 55(b) | Information collected to open an account is confidential; it may not be divulged for cross-selling or any other purpose without the customer's express permission | The tap is the express-permission event; nothing crosses before it | J38, J43 |
| Clause 55(d) | Four listed exceptions permit disclosure: compulsion of law, a public duty to disclose, the regulated entity's own interest, or the customer's express or implied consent | The salary-day card relies on the fourth exception, express consent, triggered by the tap, not on any of the other three | J39 |

This fit is stated carefully, in the same words Lane J itself used, as a design-fit observation rather than a regulator's ruling on this specific design [J43]. No RBI circular, FAQ or informal guidance speaks to this exact card mechanism by name; what we can say, and what the table above shows, is that the mechanism's structure (no data before the tap, the tap as the permission event) tracks the clause's own express-permission standard as closely as a design built before any informal guidance request can.

### 20.5 Data-flow table, lever by lever

Table 20.3 sets out, for each of the seven levers, what data moves, who holds it, the lawful basis under which it moves, and how long it is kept, which is the single clearest way to show that no lever collects more than it needs or keeps data longer than its own purpose requires.

| Lever | Data that moves | Holder before the moment | Lawful basis | Retention |
|---|---|---|---|---|
| Salary day | Account-linkage confirmation and the customer's instalment choice (fund category, amount, date) | Bank, until the tap; ONL, after the tap | Express consent (the tap), under RBI KYC Clause 55(b) and (d) [J38, J39]; DPDP Section 6's consent standard once the main obligations tier is live | For the life of the Autopay mandate; reviewed if the mandate is paused or cancelled |
| Holdings check (rediscovery) | Existing account and holdings data already held by ONL; no new data collected | ONL (already) | Section 7 legitimate use: the customer's own prior voluntary provision of this data to open the account [J07] | Unchanged; this lever surfaces existing data, it does not create a new data flow |
| RM review | Notes from an existing portfolio-review conversation the RM already holds under the bank's relationship-management function | Bank (RM), ONL (account data referenced in conversation) | Existing banking relationship and employment-purpose processing by the RM [J15] | Per existing RM conversation-logging retention, unchanged by this lever |
| Dhanteras | None beyond the notice's send-and-open event itself; no product data moves | ONL or bank, as the channel owner | WhatsApp or SMS opt-in on file [A50]; DLT registration for the SMS route | Send-and-open logs retained per the channel's own standard retention, not extended by this lever |
| Workplace sessions | None; a spoken session with no data capture of attendees beyond attendance | Employer (attendance record only, if any) | No DPDP processing event occurs for ONL or the bank at the session itself | n/a |
| Warm-cohort defence | Last-trade-date filter already held by ONL; nominee and contact-detail updates the customer chooses to make | ONL | Section 7 legitimate use, as with the rediscovery lever [J07] | Unchanged; nominee and contact updates follow existing KYC retention rules |
| New-account guided first order | Walkthrough-completion and order-preview interaction logs | ONL | Legitimate use under the existing account relationship [J07] | Retained for the acceptance-test audit trail described in section 18, then per ONL's standard retention |

The pattern across all seven rows is the same one the salary-day card's own design states explicitly: every lever either surfaces data ONL already lawfully holds, under the customer's own original voluntary provision of it, or moves new data only after a customer's own affirmative action creates the permission event. No lever collects a new category of personal data purely to run a marketing campaign.

### 20.6 Privacy-by-design choices

Three choices, each already stated elsewhere in this document, are restated here together because they form a single, coherent privacy posture rather than three unconnected rules. First, no data crosses an organisational boundary (bank to ONL) before a customer's own tap, which is the consent-first test, point 4 of section 19's ten-point test. Second, no lever collects a new category of data beyond what each lever's own mechanism requires, as table 20.3 shows row by row. Third, every send respects a standing opt-out and a frequency cap, the subject of the next sub-section, so that consent once given can be withdrawn as easily as it was given, consistent with the DPDP Act's own standard even for the tier not yet in force during our window [J05].

### 20.7 The opt-out guardrail, stated honestly

Model assumption A50 sets the share of idle accounts with a WhatsApp opt-in at 35%, a figure the model treats as fixed across bear, base and bull scenarios [T1]. The separate internal guardrail this section's own title references, that opt-outs above 0.5% on a given send stop that message, is not drawn from any TRAI, SEBI, RBI or exchange circular; Lane J's search across all four regulators found no numeric opt-out-rate threshold comparable to this one [J58]. We state this plainly rather than let the figure imply a regulatory source it does not have: 0.5% is a control our own plan adopts, tighter than any external floor we could find, precisely because the absence of an external numeric standard is not a reason to run without one internally.

Two separate opt-out mechanisms sit alongside our own guardrail and must each be respected independently. WhatsApp's own Business Policy requires a business to honour an opt-out and permanently stop messaging a customer who gives one, a platform-level control independent of any government registry [J51, J52]. TRAI's National Customer Preference Register gives a customer a standing right to opt out of promotional commercial communications, separate from any per-channel unsubscribe link a business itself provides [J59]. A send on WhatsApp therefore has to respect both WhatsApp's own opt-out and, where the message carries promotional content, the TRAI regime; our servicing-message design (holdings tile, statement line, warm-cohort nudge) is built to fall under the transactional-message exemption from the promotional-consent requirement in the first place, since none of these three messages carries promotional content [J50].

Exhibit for the deck: the DPDP three-tier commencement table condensed to a single timeline against the 13-week window, paired with the salary-day card's data-flow row from table 20.3, feeding the appendix slide's rules panel.
