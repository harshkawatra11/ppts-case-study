## 9. The 6,90,407 accounts without a trade in 12 months stall at first login and funding, the two steps a bank-app entry with single sign-on and an Autopay mandate removes

**Answer.** Of the 8,09,746 eligible accounts recorded in September 2026, 6,90,407 placed no trade in the trailing twelve months, which is 8,09,746 minus the 1,19,339 that the case counts as Active [C-E1]. The case's own activation funnel names exactly two points where this group gets stuck: the drop after first login (C-F2) and the steeper drop after funding (C-F3), and the case text, as corrected by the organiser, now states that very few new accounts reach a first trade or first investment within the first month (C-F4) [C-F4]. All seven of our levers point at the same two steps. A bank-app entry carries the customer past login with a single sign-on into ONL, and past funding with an Autopay mandate the bank already holds, so the customer never has to open a separate app, remember a separate password or move money by hand. This section walks the funnel stage by stage, places each lever on it, and sets out a salary-account holder's week against the AARRR model the skill recommends for this kind of diagnosis.

### 9.1 The funnel decoded, stage by stage

The case gives five stages for the activation funnel, and each one carries a plain English note about where volume is healthy and where it is not. The table below reads the case's own words against what that stage means for ONL today and whether our model treats it as the binding constraint.

| Stage | Case text [C-F1 to C-F5] | What it means for ONL | Binding constraint |
|---|---|---|---|
| Account opened | Created through a digital journey. Volumes healthy; onboarding is not the main bottleneck | 75,891 accounts were added in the year to September 2026 (8,09,746 minus 7,33,855) [C-E1]; the opening step itself works | No |
| First login | Drop-off begins; some users never log in | A customer who opened the account alongside another bank product may never return to it on purpose [C-PB6] | Yes |
| Funded | User adds money; another steep drop | Even a customer who logs in has to find money and move it across accounts, a second active decision | Yes |
| First trade or first investment | Places an order or starts an SIP. Very few new accounts reach this within the first month [C-F4] | The corrected case text removes any claim that new accounts convert quickly; our new-account lever (section 17) exists because of this | Partial, downstream of login and funding |
| Repeat and habit | Many activated users gradually go dormant | The case's own word for this is the same one the Oct 2024 exchange circular uses for the 24-month non-trading condition, which we translate throughout as dormant [C-D4] | Downstream, addressed by the warm-cohort lever |

What this table shows is that the case itself, once corrected, rules out one tempting read of the problem. A reader could have guessed that new accounts convert quickly and that the whole gap sits with long-dormant customers. The corrected C-F4 line says the opposite: few new accounts place a first trade in their first month either. The stall is not confined to old accounts. It starts at login, so a bank-app entry works equally well on day one of an account's life and on month thirteen, which is exactly why it is the right shape for a fix across the whole idle pool rather than for one slice of it.

This correction also settles a question our diagnosis needed answered before the levers in sections 12 to 17 could be sized with confidence. If the earlier case text had held, and new accounts converted quickly on their own, the model would need a smaller new-account lever and a larger weight on the dormant half of the pool. The corrected text removes that branch. A new account and a thirteen-month-old idle account face the same two-step stall, at login and at funding, and the new-account guided first order lever in section 17 exists to shorten the first of those two gaps for accounts still inside their first month, not to reverse a fast-converting pattern the case no longer claims.

A separate cross-check belongs here because our title cites 6,90,407, a number that differs slightly from the 6,89,375 idle accounts in the cohort table (T2). Both are correct reads of the same base, computed two different ways. T2 sums idle accounts cohort by cohort, using each segment's own activation rate, and that sum undercounts total Active accounts by 1,033 against the real Exhibit 1 figure (1,20,372 against 1,19,339) [T2, C-E1], a rounding gap the model carries forward and that section 3 of this document explains in full. Our title number, 6,90,407, instead takes the case's own Exhibit 1 total directly: 8,09,746 minus 1,19,339. We use 6,90,407 wherever we need the exact, unrounded idle population and 6,89,375 wherever we need the segment breakdown that only the cohort table can give.

### 9.2 Lever chains as stage assumptions

Every lever's arithmetic runs through a chain of three assumptions: how many idle accounts a channel reaches, how many of the reached respond with a tap or a read, and how many of those place a first order. T9 lists every assumption that feeds this chain, each with a bear, base and bull value. The table below adds the funnel stage each assumption governs, so the connection between the diagnosis in 9.1 and the levers in sections 12 to 17 is explicit rather than assumed.

| ID | Governs | Base | Bear | Bull | Funnel stage |
|---|---|---|---|---|---|
| A20 | Share of salary customers who open the parent bank's app in a month | 0.55 | 0.45 | 0.62 | Pre-login, reach |
| A21 | Tap-through on the salary-day card over three salary credits | 0.08 | 0.06 | 0.10 | First login |
| A22 | First executed order after a tap, with single sign-on and a bank mandate | 0.32 | 0.26 | 0.38 | Funded, first trade |
| A23 | Idle accounts reached through any owned channel with consent | 0.60 | 0.50 | 0.68 | Pre-login, reach |
| A24 | Tap-through on the rediscovery message or tile | 0.04 | 0.03 | 0.05 | First login |
| A25 | First executed order after rediscovery | 0.25 | 0.20 | 0.30 | Funded, first trade |
| A10 | Share of idle accounts flagged dormant under the 24-month rule | 0.50 | 0.55 | 0.45 | Pre-login, access barrier |
| A11 | Conversion of a flagged account relative to an unflagged one after re-KYC | 0.50 | 0.42 | 0.58 | First login, access barrier |

Reading this table against 9.1 shows that no assumption in the model touches the account-opening stage, because that stage is not where the case's own funnel breaks. A20 and A23 govern reach, which precedes login; A21 and A24 govern the tap that is itself the login event; A22 and A25 govern the order that follows funding. A10 and A11 add a fourth, harder barrier layered on top of login for the half of the idle pool the model treats as dormant under the 24-month rule, since those accounts need a re-KYC or video in-person verification step before they can log in and trade at all.

### 9.3 Where each lever acts on the funnel

The seven levers are not seven different diagnoses. They are seven different doors into the same two-stage stall, aimed at different parts of the idle population, as the table below sets out.

| Lever | Funnel stage it targets | Mechanism | Governing chain |
|---|---|---|---|
| Salary day | Login, then funding | A bank-app card on salary credit carries the customer into ONL with single sign-on, then into an Autopay mandate the bank already holds | A20, A21, A22 |
| Holdings check (rediscovery) | Login | An investments tile, statement line and servicing message remind the customer the account exists, with video IPV for the half that is flagged dormant | A23, A24, A25, A10, A11 |
| RM review | Login, then funding | A facts-only line in an existing portfolio review surfaces the account inside a conversation the customer already has | A26, A27 |
| Dhanteras | Login, then funding | A factual notice tied to a calendar date customers already act on for gold purchases | A28, A29, A30 |
| Workplace sessions | Login | An education session at a salary customer's employer removes the "I did not know" barrier directly | A31, A32, A33 |
| Warm-cohort defence | Repeat and habit | A servicing touch for accounts 9 to 12 months from roll-off, aimed at the habit stage rather than the login stage | A35, A36 |
| New-account guided first order | First trade | A Day 0 to 30 walkthrough for accounts opened in the window, aimed directly at the C-F4 stall the corrected case text names | A39 |

What this table shows is a division of labour. Five of the seven levers sit on login, because that is where the case's funnel first breaks and where the biggest idle pool sits. Two sit further downstream, on habit and on the first-trade stall the correction just sharpened. No lever tries to fix account opening, because the case says that stage already works, and no lever tries to manufacture urgency around the market, because the market is not the stage that is broken.

### 9.4 A journey map for a salary-account holder

The Salary Account cohort holds 6,27,853 accounts, 77.5% of the base, and its 5,39,954 idle accounts are 78% of all idle accounts [C-E2a, T2]. A journey map for this one holder, built around a single salary cycle, shows where the stall happens today and where each lever intervenes.

| Stage | What happens today | Friction without a lever | What we add | Tag |
|---|---|---|---|---|
| Salary credited | The customer's bank account receives a monthly salary, a moment that already repeats without any prompting from ONL | None; this moment belongs to the bank, not to ONL | Nothing yet; this is the anchor moment the lever attaches to | C-CO4 |
| Opens the bank app | The customer checks the balance, a habit many salary customers already have | ONL has no presence inside this screen | A card appears stating the ONL account is open and linked | A20 |
| Reads the card | The customer sees a notice about an account they may have forgotten opening | Without the card, nothing reminds them the account exists | Plain-language copy naming the account and one action (set a monthly amount) | A21, C-PB6 |
| Taps through | The customer decides whether to act | Today there is no tap to make; the funnel step does not exist | Single sign-on into ONL, no new password, no separate app download | A21, A22 |
| Sets the instalment | The customer picks a fund category, an amount and a date | Today there is no comparable screen inside the bank app | A neutral, rule-built list of ETF categories with no default and no return claim | A22, section 12.3 |
| Autopay mandate created | The customer authorises a recurring debit from the same bank account | Today a customer would need to transfer money manually from the bank account into a separate trading account | A UPI Autopay mandate set once, debited automatically on each future salary credit | A22, section 12.3 |
| First order executes | The ETF units are bought | This is the step the case's funnel calls out as rare for new accounts (C-F4) and that the model shows is rare for idle accounts generally | The mandate and the pre-chosen instalment mean the order happens without a second decision each month | C-F4, T10 |
| Repeats monthly | The customer becomes Active (12-month trade) and, if the pattern holds for three consecutive months, Highly Active | Today most idle accounts never reach this far | The recurring Autopay mandate turns one order into a habit without requiring the customer to log in and decide again each month | C-D1, C-D2 |

### 9.5 AARRR mapped onto the case's own funnel

The skill's AARRR framework (Acquisition, Activation, Retention, Referral, Revenue) maps cleanly onto the case's own five-stage funnel, with one adjustment: Referral does not feature in our lever set, because SEBI's constraints on inducement bar most forms of referral payment and the option screen in section 11 scores referral rewards at only 2.60 of 5, below our recommendation's 4.40 [T17].

| AARRR stage | Case funnel equivalent | Metric | Our lever(s) | Tag |
|---|---|---|---|---|
| Acquisition | Account opened (C-F1) | 75,891 accounts added in the year [C-E1] | None; this stage already works | C-F1 |
| Activation | First login (C-F2) and funded (C-F3) | Login rate, funding rate, both unmeasured directly but implied by the gap between account count and Active count | Salary day, holdings check, RM review, Dhanteras, workplace sessions | C-F2, C-F3 |
| Activation, continued | First trade or first investment (C-F4) | Share of idle accounts placing a first order in the window | Salary day's Autopay mandate, new-account guided first order | C-F4, A22, A39 |
| Retention | Repeat and habit (C-F5); the case's own Active (C-D1) and Highly Active (C-D2) definitions | 14.74% Active today, rising to 17.02% in our base case; Highly Active rising from 10.1% to 12.4% [C-E1, T11] | Warm-cohort defence, the recurring nature of the Autopay mandate itself | C-D1, C-D2, T11 |
| Referral | Not a case funnel stage | Not pursued as a lever | None by design; referral rewards score 2.60 of 5 on the option screen, mainly for paying for account opening rather than for a first order | T17 |
| Revenue | Not a case funnel stage | ₹62 a year per newly activated account in our model, detailed in section 25 | All seven levers, indirectly | T15 |

### 9.6 Why habit decides the warm cohort

The warm cohort is the 8,887 to 14,072 accounts whose last trade sits 9 to 12 months back, the group that rolls out of the 12-month Active count next quarter unless something happens before then [T7]. This cohort already has, or very recently had, the habit the other six levers are trying to build. The question for this group is not whether they can be taught to trade; they already have. The question is whether the habit survives the next quarter without a fresh anchor.

Behavioural evidence on payday attention supports anchoring reminders to a recurring date rather than relying on a single push. Research on financial-management-software login data finds that people are considerably more likely to check their finances on payday itself, and that attention is lower when overdrafts are high and higher when cash holdings are high [E51]. Separately, the fresh-start literature finds that aspirational behaviour, measured through gym visits, diet-related searches and self-set goal commitments, rises after temporal landmarks such as paydays, birthdays, the start of a week or the start of a month, because a landmark creates a felt separation between past behaviour and a new period [E22, E24, E25]. Both strands point the same way: a recurring calendar moment, not a one-off nudge, is what carries a habit forward.

The recency ladder in T6 gives this argument a number. Across the whole base, only 40% of the customers counted as Active over a 12-month window in September 2026 had actually traded in the most recent month, down from 47% a year earlier [T6]. In other words, the pool of customers who are technically Active but no longer trading monthly is growing, not shrinking, even as the headline Active count rose slightly. This is the habit eroding in real time, inside the group that already has it, which is precisely the population the warm-cohort lever targets rather than the population the other six levers are built to recruit for the first time.

| Window | T12 (Active) | T9 | T6 | T3 (Highly Active) | T1 | Tag |
|---|---|---|---|---|---|---|
| Sep 2025 | 15% | 14% | 10% | 9% | 7% | T6 |
| Sep 2026 | 15% | 13% | 12% | 10% | 6% | T6 |
| T1 as a share of T12 | 47% | n/a | n/a | n/a | 40% | T6 |

This is also where the ostrich-effect evidence sets a boundary on what not to claim. Account-login research on Swedish and American retirement savers finds that attention to an account falls after market declines, and that investors who show this reduced attention are also less likely to trade in that period, not more [E38, E41]. A falling market does not turn inattentive customers into active traders if we simply remind them the market exists; the case's own experience over the past year, a year of market-themed messaging that moved the rate by 0.04 points, already demonstrates this [C-PB3 to C-PB5, C-E1]. What moves the warm cohort is not more market talk. It is a servicing touch, tied to their own account and nominee details rather than to market conditions, that reaches them before the 24-month and 12-month clocks run out. The warm-cohort lever in our model carries exactly this design, and its 1,607 extra actives sit entirely inside the recency ladder's T6 to T1 window rather than inside any new acquisition [T10, T6].

### 9.7 What the funnel cannot show

The case's funnel is indicative, built for the case rather than measured from ONL's own instrumentation (C-N1). It tells us the order in which customers drop away and names login and funding as the two steep points, but it does not give us a login rate, a funding rate or a time-to-first-trade figure we could cite as a measured fact. Every number in sections 9.2 to 9.5 that looks like a funnel metric is in fact a model assumption (A20 to A39), checked against outside benchmarks in Lane E and Lane F, not a measurement taken from ONL's own systems. We say this once here, plainly, because every later section that reuses the funnel language should be read the same way: the shape of the diagnosis is drawn from the case, and the size of each step inside that shape is our model's best estimate, carried at bear, base and bull values precisely because it is an estimate and not a count.

This also bounds what the 6,90,407 figure itself can claim. It is an exact subtraction from two numbers the case states directly, so it is as solid as any figure in this document. What it cannot tell us, on its own, is how much of that 6,90,407 sits at the login stage against the funding stage, because the case gives us the order of the stages without giving us a volume at each one. Our lever design in sections 12 to 17 treats this honestly: every lever is built to clear both stages together, through single sign-on for login and an Autopay mandate for funding, precisely because we cannot say from the case alone which of the two stages is larger.

Exhibit for the deck: the funnel (C-F1 to C-F5) with the lever-to-stage map from 9.3, rendered as the diagnosis slide's funnel panel, alongside the journey-map stages from 9.4 condensed into a five-point mobile mockup sequence.

## 10. Five whys trace the flat 14.74% to one root cause: the account was opened alongside a bank product and never tied to a moment the customer already has

**Answer.** Five whys, starting from the flat rate itself, run from the surface symptom to a single root cause: no ONL message or screen sits inside the one app these customers already open every month, the bank's own app. A MECE issue tree across five branches (awareness, access, funding friction, motivation, market) finds the same answer from a different angle, and a hypothesis table scoring five candidate explanations against evidence reaches the same verdict. We name this gap plainly, as the build log records it: a gap before login. We do not name the levers here; that belongs to sections 12 to 17.

### 10.1 Five whys

| Step | Finding | Tag |
|---|---|---|
| First why | The rate stayed flat, 14.70% to 14.74%, despite a full year of outreach, because that outreach was about the market and about offers, never about the account itself [C-PB3 to C-PB5] | C-PB3, C-PB5, C-E1 |
| Second why | Market and offer messages did not move behaviour because most recipients never logged in to read them properly; the case's own funnel places the binding constraint at login and at funding, not at message content [C-F2, C-F3] | C-F2, C-F3 |
| Third why | Customers do not log in because a meaningful share opened the account alongside another banking product and do not keep it in mind as something of their own [C-PB6] | C-PB6 |
| Fourth why | They do not keep it in mind because the account was never tied to a moment they already have; it was a one-time opening event rather than a recurring one. 78% of the idle pool belongs to exactly this pattern, the Salary Account cohort, which grew 24.1% in a year while its own 12-month activation rate rose only 1 point [T2, T4] | T2, T4 |
| Fifth why | No recurring moment carries the account into view because no ONL screen or message sits inside the one app these customers already open every month, the parent bank's app [C-CO4] | C-CO4 |

The fifth why is the root. The account is real, open and the customer's own property, but it is invisible at the one moment the customer is present without being asked to be. This is a gap before login. It sits apart from investor confidence or market sentiment, and it is the gap we name for the foreshadow here without naming how we close it.

### 10.2 A MECE issue tree across five branches

A second way to reach the same place is to decompose "why is activation flat" into five branches that are mutually exclusive and collectively exhaustive, then test each one against the case's own evidence.

| Branch | Sub-branch | Evidence | Binding constraint |
|---|---|---|---|
| Awareness | Customer does not know, or does not remember, that the account exists | C-PB6 states this directly; 78% of idle accounts sit in a cohort whose accounts open alongside another product [T2] | Primary |
| Access | Customer knows but cannot log in easily (forgotten credentials, no app installed) | The case names this as the first drop-off point, C-F2, without attributing it to a technical failure | Secondary, downstream of awareness |
| Funding friction | Customer logs in but does not move money in | The case names this as a second, steeper drop, C-F3 | Secondary, downstream of access |
| Motivation | Customer is aware and able but chooses not to invest in an unfavourable market | C-X2, C-X3 and C-PB1 describe a risk-averse investor base in a weak market; but a year of messages built specifically to address this did not move the rate [C-PB5] | Contributory, not primary |
| Market | The broader Indian equity and derivatives environment was weak over the measurement year, which deters both existing traders and new investors [C-PB1] | C-PB1 describes this as context, not as the company's own fixable gap | Context, not a lever target |

What this tree shows is that awareness sits upstream of every other branch. A customer who does not know the account exists cannot be deterred by the market, cannot face funding friction and cannot have an access problem, because none of those stages are ever reached. Motivation and market context are real, but they describe why a customer who is aware might still hesitate, not why most of the idle pool never gets as far as being asked to hesitate.

The motivation and market branches still deserve a fair hearing, because dismissing them without evidence would be its own kind of error. The case states plainly that markets were unfavourable on average over the measurement year and that returns below expectations deter new investors as well as pushing existing traders away (C-PB1), and that Indian investors are largely risk averse, with an unfavourable market strengthening their resolve to stay out (C-X3). Industry-wide activation across the sector sits at 20% to 40%, a range ONL's own 15% sits below, which tells us the market branch affects the whole broking sector rather than ONL alone, and is therefore a gap a company-specific fix cannot close by itself (C-PB2). The SEBI Investor Survey 2025 adds a national baseline to the same picture: 79.7% of surveyed households report low risk appetite, yet 9.5% of households still participate in securities markets, which means low risk appetite coexists with real participation rather than preventing it outright (E67, E64). Motivation and market context explain why the ceiling on activation is lower in a year like this one than in a strong bull run; they do not explain why the awareness and access branches are where the case itself, and our evidence, locate the specific, fixable gap.

### 10.2a The branches that respond to a message, and the branch that does not

A practical test for separating a fixable branch from a structural one is whether a factual, compliant message could plausibly move it. Awareness responds directly: a customer who is told the account exists and shown how to reach it has the barrier removed the moment the message lands. Access responds indirectly, through single sign-on removing the credential barrier that a message alone cannot. Funding friction responds through a pre-authorised mandate rather than through the message's wording. Motivation responds only partially, and the case's own year of evidence (C-PB3 to C-PB5) shows that a message built specifically to address motivation, the "stay invested" theme, produced no measurable change. The market branch does not respond to any message a broker could compliantly send, because the market itself is outside anyone's control and because SEBI's own rules forbid implying that a message could predict or improve market outcomes (C-K2). This is why the diagnosis in this section points toward the two branches a message can actually move, awareness and access, rather than toward the branch a message cannot move at all.

### 10.3 A hypothesis table

| Hypothesis | Evidence | Verdict |
|---|---|---|
| Customers avoid the market out of fear, and fear is the main barrier | Research on attention after market declines finds reduced login frequency coincides with reduced trading, not with active avoidance driven by fear of a specific loss; 79.7% of surveyed Indian households report low risk appetite, yet 9.5% still participate in securities markets [E41, E67] | Partial. Fear plausibly dampens the margin, but a year of messages addressing exactly this fear, under the case's "stay invested" theme, produced no measurable rate change [C-PB5] |
| Customers do not know the account is theirs | C-PB6 states this directly; 78% of idle accounts are Salary Account holders whose accounts likely opened alongside a separate banking product [C-PB6, T2] | Supported. This is the most direct, case-stated explanation and the one every subsequent lever is built against |
| ONL's product or app is inferior to rivals | C-CO3 states ONL is at par with rivals on features | Rejected. The case rules this out explicitly |
| Messaging reach was too narrow | C-PB3 and C-PB4 describe WhatsApp, email, RCS, social media, research calls, literacy videos and an active support team, a wide channel set run over a year | Rejected. Reach was broad; the rate still did not move, so reach is not the binding constraint |
| No recurring moment anchors the account to a habit the customer already has | Derived from the funnel (C-F2, C-F3) together with the cohort mix shift toward Salary Account holders (T2, T4) and the recency ladder showing only 40% of 12-month actives traded in the last month, down from 47% (T6) | Supported. This is the root cause, consistent with the awareness branch in 10.2 and the fifth why in 10.1 |

Three of the five candidate hypotheses are rejected or only partly supported once tested against the case's own evidence. The two that survive, the awareness gap and the absence of a recurring anchor, describe the same underlying problem from two angles: the customer does not think of the account as theirs because nothing in their regular routine ever reminds them of it.

### 10.4 Naming the gap, without naming the fix

Three separate methods, the five whys, the MECE tree and the hypothesis table, converge on the same single sentence: there is a gap before login, and the gap exists because no ONL message or screen sits inside a moment the customer already has. We name this gap here deliberately without naming any of the seven levers that close it, because the diagnosis should stand on its own evidence before the fix is proposed. A reader who accepts the five whys in 10.1, the tree in 10.2 and the table in 10.3 should already expect that the fix, whatever its exact form, will put ONL somewhere the customer already is rather than ask the customer to go somewhere new. Section 11 tests that expectation against seven other candidate fixes before section 12 names the first lever.

It is worth stating plainly what this diagnosis does not claim. It does not claim that market conditions are irrelevant, only that a year of market-themed messages already tested that channel and found it insufficient on its own (C-PB5). It does not claim that every idle account shares exactly the same cause; Preferred and the premium cohorts, reached separately through the RM review lever in section 14, show a different pattern of decline, a loss of engagement among existing relationships rather than a failure to ever notice the account in the first place. The root cause named here applies most directly to the 78% of the idle pool sitting in the Salary Account cohort (T2), and the remaining sections size each lever against the specific population it is built for rather than assuming one root cause fits every segment equally.

Exhibit for the deck: the five-whys chain condensed into a single vertical ladder on the diagnosis slide, with the issue tree's five branches rendered as a MECE grid beside it, and the root-cause line ("a gap before login") carried as the slide's closing caption without naming a lever.

## 11. The option screen scores meeting accounts inside bank-owned moments at 4.40 of 5 and the strongest alternative at 2.60

**Answer.** An eight-option, five-criterion weighted screen scores our recommendation, meeting accounts inside bank-owned moments, at 4.40 of 5, ahead of a three-way tie at 2.60 among more market content, first-trade offers and referral rewards [T17]. The lead holds under three further weight sets, including one that overweights SEBI and ethics fit and one that overweights 90-day lift alone, so the ranking is not an artefact of how we chose to weigh the criteria [T18]. Conclusively, the strongest alternative does not move the rate, raises regulatory or ethical risk, and costs more per activation than our recommendation, on the same evidence the case itself supplies.

### 11.1 The five criteria

Before reading the scores, each criterion needs its own plain definition, because a weighted score is only as trustworthy as the thing it measures.

| Criterion | Weight | What it measures |
|---|---|---|
| 90-day lift | 30% | How much the option is expected to move the activation rate within the case's 3-month window (C-K1) |
| SEBI and ethics fit | 25% | Whether the option avoids advice, return claims, inducement and dark patterns (C-K2, C-K6) |
| Works in a falling market | 20% | Whether the option depends on market sentiment improving, or works regardless (C-X2, C-PB1) |
| Cash cost | 15% | How much lean marketing budget the option consumes against owned assets (C-K3) |
| Ships in a quarter | 10% | Whether the option is realistic for an app team without a core engine rebuild (C-K4) |

The weighting itself reflects the case's own priority order. The 3-month deadline (C-K1) and the regulatory and ethical guardrails (C-K2, C-K6) between them carry 55% of the score, more than the remaining three criteria combined, because those two constraints are the ones the case repeats most insistently across its guardrail section.

The two lowest weights deserve a short defence of their own, since a reader might expect cash cost or delivery speed to matter more than 15% and 10%. Cash cost is weighted below lift and fit because the case itself frames budget as a preference, not a hard ceiling: it asks for a lean marketing budget and favours owned assets over large paid media (C-K3), which is a steer toward low-cost channels rather than a fixed rupee limit that would make cost the dominant criterion. Speed of shipping is weighted lowest of all five because, once an option clears the no-engine-rebuild constraint (C-K4), most realistic options can ship inside a quarter; the criterion mainly exists to penalise the one option, a new trading engine or app rebuild, that genuinely cannot. Both choices are visible directly in T17's own scores: four of the eight options score a full 4 or 5 on speed, showing the criterion rarely separates viable options from each other, while fit and lift vary far more widely across the field and therefore carry more of the decision's real weight.

### 11.2 T17: the option screen

The table below reproduces the full option screen exactly as the model computes it.

| Option | 90-day lift (30%) | SEBI and ethics fit (25%) | Works in a falling market (20%) | Cash cost (15%) | Ships in a quarter (10%) | Score | Why |
|---|---|---|---|---|---|---|---|
| More market content and "stay invested" messages | 1 | 4 | 1 | 4 | 5 | 2.60 | Run for 12 months; rate moved 14.70% to 14.74% |
| First-trade cash offers and zero brokerage | 3 | 2 | 2 | 2 | 5 | 2.60 | Already tried; reads as trade inducement under NSE rules |
| Trading contests and leaderboards | 3 | 1 | 2 | 3 | 3 | 2.30 | Gamified urgency; a dark pattern |
| Paid media and finfluencers | 2 | 2 | 2 | 1 | 4 | 2.05 | SEBI rules of August 2024 bar ties with unregistered finfluencers |
| Referral rewards | 2 | 3 | 2 | 3 | 4 | 2.60 | Pays for accounts, not first orders |
| F&O education push | 2 | 1 | 2 | 4 | 4 | 2.25 | 87.7% of individual F&O traders lost money in FY26 |
| New trading engine or app rebuild | 1 | 4 | 3 | 1 | 1 | 2.15 | Outside the brief: no engine rebuild |
| Bank moments: salary day, rediscovery, RM review, Dhanteras | 4 | 5 | 4 | 5 | 4 | 4.40 | Owned rails, no advice, no offers, no F&O |

What this table shows is that our recommendation is the only option scoring 4 or 5 on every single criterion. Every alternative trades off at least one dimension against another: first-trade offers score well on lift (3 of 5) but poorly on fit (2) because they have already been tried and read as inducement; the engine rebuild scores well on fit (4) but fails on cost, speed and lift all at once, because it does not touch the actual funnel problem diagnosed in sections 9 and 10.

### 11.2a Why each of the other seven options falls short

Reading the "Why" column in 11.2 against the case's own constraints explains each option's score in plain terms. More market content and offers of staying invested already ran for a full year and moved the rate by only 0.04 points, so its low lift score is not a guess but a result the case itself reports (C-PB3 to C-PB5, C-E1). First-trade cash offers and zero brokerage score better on lift because a cash incentive reliably moves short-term behaviour, but they score poorly on fit because they read as trade inducement under the exchange's advertisement and anti-inducement rules, and the case's own account of ONL's past outreach already includes offers for every first trade, so this option is in large part a repeat of something already tried (C-PB3). Trading contests and leaderboards score lowest of all eight on SEBI and ethics fit, because gamified competition around trading sits close to the kind of urgency and comparison-driven behaviour the case's own guardrails rule out (C-K6). Paid media and finfluencers score poorly on cash cost, since this is the one option that spends the case's lean marketing budget outward rather than using owned assets, and SEBI's finfluencer amendment regulations, gazetted in August 2024, narrow which paid voices a regulated broker may work with at all. Referral rewards score reasonably on fit and on falling-market resilience, because referring a known contact is not itself advice, but the mechanism pays for an account being opened, which the case's own funnel in section 9 shows is not the broken stage; a referral does nothing to move a customer past login or funding once the account already exists. An F&O education push scores worst on fit of any content-based option, because SEBI's FY26 study found 87.7% of individual derivatives traders lost money, rising to 88.5% for traders under 30, making any push toward F&O activity hard to reconcile with the case's own instruction that growth must be responsible (C-K7). A new trading engine or app rebuild scores well on fit, since it breaks no rule, but fails on cost, speed and lift together, because the case explicitly rules out an engine rebuild as a candidate solution within the three-month window (C-K4), and in any case a better engine does not address a stall that sits upstream of the engine, at login and at funding.

### 11.3 T18: robustness under three other weight sets

A score built on one chosen weighting invites the challenge that a different weighting would change the answer. T18 tests this directly, running the same eight options against the same raw criterion scores under equal weights (each of the five criteria at one-fifth), a rules-first weighting that leans harder on SEBI and ethics fit, and a lift-first weighting that leans harder on 90-day lift alone.

| Option | Base weights | Equal weights | Rules first | Lift first |
|---|---|---|---|---|
| More market content and "stay invested" messages | 2.60 | 3.00 | 3.05 | 2.30 |
| First-trade cash offers and zero brokerage | 2.60 | 2.80 | 2.50 | 2.75 |
| Trading contests and leaderboards | 2.30 | 2.40 | 2.05 | 2.45 |
| Paid media and finfluencers | 2.05 | 2.20 | 2.05 | 2.10 |
| Referral rewards | 2.60 | 2.80 | 2.75 | 2.50 |
| F&O education push | 2.25 | 2.60 | 2.10 | 2.20 |
| New trading engine or app rebuild | 2.15 | 2.00 | 2.50 | 1.90 |
| Bank moments: salary day, rediscovery, RM review, Dhanteras | 4.40 | 4.40 | 4.55 | 4.30 |

Our option leads under every weight set, by a margin of at least 1.35 points in every column. The direction of movement under each weight set also makes sense on its own terms. More market content climbs under equal and rules-first weights, because it scores well on cost and on fit even though it scores poorly on lift, but it falls under a lift-first weighting precisely because it has already failed to deliver lift for a year. Referral rewards climbs under rules-first weighting because it is not itself an inducement, but it never threatens our lead because its 90-day lift score (2 of 5) is weak regardless of how heavily lift is weighted. No single weight set, however constructed, closes the gap.

### 11.4 Where the eight-way field compresses to one real comparison

Three options tie at 2.60 in the base weighting: more market content, first-trade offers, and referral rewards. Of the three, only more market content has actually been run, for the full twelve months the case describes, with a known, case-stated result [C-PB3 to C-PB5, C-E1]. The other two are untested inside this case and carry their own regulatory exposure (first-trade offers already read as inducement; referral rewards pay for opening, not for trading). The cleanest, most defensible comparator for a judge to test our recommendation against is therefore the one the case already ran.

### 11.5 Conclusively, the comparison in three columns

Conclusively, meeting accounts inside bank-owned moments beats the strongest tested alternative, more market content and "stay invested" messaging, on every axis a judge is likely to probe.

| Does not move the rate | Raises regulatory or ethical risk | Costs more per activation |
|---|---|---|
| A full year of market-themed outreach moved the rate from 14.70% to 14.74%, a change of 0.04 points, against a 3-month target of 200 to 300 basis points [C-E1, C-K1] | First-trade offers and contests score 2 and 1 of 5 on SEBI and ethics fit; the finfluencer and referral routes face open regulatory questions of their own, including the in-abeyance status of the NSE referral circular pending a new industry proposal [T17, D26] | The same ₹16.5 lakh of cash that funds our seven levers would buy 1,649 activated accounts through paid media at ₹1,000 each, against 19,053 extra actives from our plan at ₹87 cash each, an 11.6x gap [T13, T14, T11] |

Exhibit for the deck: T17 rendered as the eight-option heat matrix on the strategy slide, with the three-column synthesis table as the "CONCLUSIVELY" strip above it.

## 12. Salary day: a card in the bank app when the salary lands, offering a monthly ETF instalment the customer picks, is the largest lever at 5,661 extra actives

**Answer.** A card inside the parent bank's own app, appearing on salary credit, invites the customer to start a monthly exchange-traded fund instalment from an account they already hold. The customer picks the fund category, the amount and the date, enters through single sign-on, and authorises the debit through a UPI Autopay mandate from the same bank account. In our model this is the largest single lever, adding 5,661 extra actives in the base case, built on three assumptions (A20, A21, A22) each carried at bear, base and bull values [T10, T9].

### 12.1 Who, and how many

The Salary Account cohort holds 6,27,853 accounts, 77.5% of the base [C-E2a]. Of these, 5,39,954 are idle, which is 78% of the entire idle pool across every cohort [T2]. This single cohort grew 24.1% in the year to September 2026, from 5,05,823 to 6,27,853 accounts, while its own 12-month activation rate rose only 1 percentage point, from 13% to 14% [T4, C-E2a, C-E2b]. The lever targets the whole idle slice of this cohort; it is the only lever in our set that touches none of the four premium cohorts (Prestige, Elite, Elevate, Preferred), because those customers are reached instead through the RM review lever in section 14.

| Measure | Value | Tag |
|---|---|---|
| Salary Account accounts, total | 6,27,853 | C-E2a |
| Share of the 8,09,746-account base | 77.5% | C-E2a |
| Salary Account idle accounts | 5,39,954 | T2 |
| Share of all idle accounts, every cohort | 78% | T2 |
| Growth in Salary Account accounts, year on year | 24.1% (5,05,823 to 6,27,853) | T4 |
| Change in Salary Account 12-month activation rate, year on year | +1 pp (13% to 14%) | T4 |

### 12.2 The moment and the message

The moment is salary credit, a date the parent bank already knows and already controls. The message does not mention the market, does not mention returns, and does not create urgency. It states three facts: the account exists, it is linked to the bank account the customer already uses, and the customer can set a recurring instalment that they fully control.

> Message copy (draft, subject to compliance review): "Your ONL Trade account is open and linked to this bank account. You can set a monthly amount to buy units of an exchange-traded fund after each salary credit. You choose the fund, the amount and the date, and you can pause at any time." Investments in securities market are subject to market risks, read all the related documents carefully before investing.

The card appears across three salary credits inside the 13-week window, in weeks 5, 9 and 13, rather than once, because the fresh-start literature on temporal landmarks finds aspirational behaviour is tied to the landmark itself, not to a single exposure, and repeating the landmark gives three separate chances for the same habit to take hold [E22, E24].

| Touchpoint | Timing | Channel | Tag |
|---|---|---|---|
| First salary-day card | Week 5 | Parent bank app, home screen | A20, A21 |
| Second salary-day card | Week 9 | Parent bank app, home screen | A20, A21 |
| Third salary-day card | Week 13 | Parent bank app, home screen | A20, A21 |

### 12.3 What we build

Four pieces ship inside the bank's own app and ONL's existing services, none of them touching the trading engine, consistent with the case's own constraint against an engine rebuild (C-K4).

| Component | What it does | Owner |
|---|---|---|
| The card itself | A banner or tile inside the bank app, shown on or just after salary credit, that names the account and the one action available | Bank app team |
| The neutral ETF list | A rule-built list of exchange-traded fund categories (gold, liquid, broad index), with objective inclusion criteria, a fixed alphabetical order, and no default selection | ONL compliance and product |
| Single sign-on | A credential-free handoff from the bank app into ONL, so the customer never creates or remembers a second password | Bank and ONL engineering, joint |
| UPI Autopay mandate | A recurring debit mandate set once, against the customer's own bank account, debiting on the chosen date each month | NPCI rails, via the bank |

The neutral-list rule deserves its own line, because it is the single design choice that keeps the lever inside the SEBI and ethics fit criterion scored in section 11. The list carries only broad, SEBI-regulated categories (gold ETFs, liquid fund ETFs, broad market index ETFs), decided by objective, pre-published criteria rather than by any judgement call at the point of showing the customer the list, presented in a fixed order (alphabetical) rather than ranked by past performance or by any other variable that could read as a recommendation, and with no default fund pre-selected, so the customer must make an active choice rather than simply accepting whatever appears first. One open question from Lane D's verification deserves stating honestly rather than assumed away: no SEBI circular, FAQ or informal guidance directly confirms whether a list built this way sits inside the stockbroker incidental-advice carve-out under Regulation 4(g) of the Investment Advisers Regulations. We treat this as an open question requiring an informal-guidance request before build, not as a settled legal fact, and section 19 carries the full compliance check.

### 12.4 The rules it meets

| Constraint | How the lever meets it | Tag |
|---|---|---|
| No advice (C-K2) | The message states facts about the account and the mechanism; it does not recommend any specific fund, and the neutral list carries no ranking or highlighted choice | C-K2 |
| No implied return (C-K2) | The copy names no number, no past performance, and no future outcome | C-K2 |
| No inducement (C-K2) | No cash offer, no discount and no reward is tied to placing the first order | C-K2 |
| Consent first (C-K5) | The card itself requires a tap before any data crosses from the bank to ONL; nothing is shared before that tap | C-K5 |
| No dark pattern (C-K6) | No default fund, no countdown, no forced continuity; the customer can pause the mandate at any time, stated in the copy itself | C-K6 |
| No engine rebuild (C-K4) | The lever uses existing bank app infrastructure, existing UPI Autopay rails and ONL's existing order flow | C-K4 |

### 12.5 The numbers chain

The chain runs reach, then response, then order, carried at bear, base and bull values for each of three assumptions.

| Step | Assumption | Base | Bear | Bull |
|---|---|---|---|---|
| Reach: idle Salary Account customers who open the bank app in a month | A20 | 55% | 45% | 62% |
| Response: tap-through on the card over three salary credits | A21 | 8% | 6% | 10% |
| Order: first executed order after a tap, with single sign-on and a mandate | A22 | 32% | 26% | 38% |
| Result: extra actives in our model | T10 | 5,661 | (model output) | (model output) |

Showing the first step's arithmetic: 5,39,954 idle Salary Account accounts multiplied by the base reach rate of 55% gives 2,96,975 accounts reached in a month, the same figure the holdout sizing in T19 carries forward as the salary-day lever's reached pool [T2, A20, T19]. Multiplying that reached population by the base tap-through rate of 8% and then by the base order rate of 32% gives an unadjusted estimate of roughly 7,600 first orders. The model's reported base-case figure of 5,661 sits below this unadjusted estimate, because the full calculation in section 21 nets out overlap with other levers touching the same accounts (the Dhanteras lever and the workplace-session lever both also reach Salary Account customers) and subtracts the organic, no-message baseline rate (A05) that would have converted some of these accounts regardless. The gap between the simple multiplication and the model's adjusted figure, roughly three quarters of the unadjusted estimate, recurs at a similar scale in the holdings-check lever in section 13, which is itself a sign that the model applies this adjustment consistently rather than lever by lever.

### 12.6 Evidence and comparables

The salary-day design borrows directly from evidence on defaults, reminders and recurring commitments, while respecting the case's own ban on defaults.

| Evidence | Finding | Relevance to the lever | Tag |
|---|---|---|---|
| Save More Tomorrow (Thaler and Benartzi) | Among employees who joined a workplace savings plan, average savings rates rose from 3.5% to 13.6% of income by the fourth pay rise after joining; across the whole employee base offered the plan, the rise was a smaller 4.4% to 10.6%, so the headline figure describes joiners only, not everyone offered the plan | Confirms that tying a saving commitment to a recurring pay event, rather than asking for a one-off decision, raises uptake among those who act, while setting an honest expectation that the all-employee effect is smaller | E03, E04 |
| Payday attention research | People are considerably more likely to check their finances on payday itself, with attention lower when overdrafts are high and higher when cash holdings are high | Supports placing the card specifically on salary credit rather than on an arbitrary date | E51 |
| Groww's CAC and activation economics | Groww's customer acquisition cost per client fell to ₹616 in FY25, but its activated-client CAC was ₹1,441 in the same period, a wide gap between acquiring an account and getting it to trade | Shows that the hard part of the funnel, for every player in this market, is activation after opening, not opening itself, which matches our diagnosis in sections 9 and 10 | F33, F34 |
| Jar's gold-saving habit | Jar reports 3.5 crore users through a small, recurring, automated saving mechanism tied to everyday payments, rather than a large one-off decision | Supports the model of a small, recurring, automated commitment as the shape that converts intention into habit, though Jar's own activation and retention figures are not independently sourced in this pass | H-lane context |

### 12.7 What could go wrong, and how we would see it early

| Risk | Early signal | Response |
|---|---|---|
| The bank app team cannot ship the card inside the 13-week window | No card live by week 3 | Fall back to a lighter-weight banner using existing app infrastructure rather than a new card component; escalate through the gate review in section 26 |
| The neutral-list design is challenged as advice under Regulation 4(g) | Compliance review in week 1 flags the open question rather than clearing it | Hold the card back until an informal SEBI guidance request is answered, or narrow the list further on legal advice |
| Tap-through runs below the bear case (6%) | Week 2 holdout read shows a lift below the 0.17 pp minimum detectable effect in T19 | Reduce reliance on this lever in the weekly forecast and reallocate attention to the holdings-check and RM review levers, which the model shows are less sensitive to this single assumption (T16 ranks A21 as the single most sensitive input, at a 0.34 pp spread) |
| Customers set a mandate then cancel it within the window | Autopay mandate cancellation rate rises above a baseline level in weekly tracking | Review the card's copy and the list's category mix for a specific point of friction, rather than assuming the whole mechanism has failed |

### 12.8 Why this lever carries the largest weight in the plan

Three features of the Salary Account cohort explain why this single lever accounts for 5,661 of the model's 19,053 base-case extra actives, almost 30% of the total from one lever alone [T10]. First, the cohort is simply the largest: 5,39,954 idle accounts out of 6,89,375 across every cohort, 78% of the whole idle pool (T2). Second, the moment it attaches to, salary credit, is one the parent bank already owns completely, so the lever needs no new acquisition channel and no new customer behaviour beyond a single tap; the customer is already opening the app for an unrelated reason. Third, the Autopay mandate converts a single tap into a recurring order without requiring the customer to repeat the decision each month, which is the structural reason this lever's extra actives should persist into section 27's weekly tracking rather than decay after the initial push. No other lever in our set combines a population this large with a moment this strong, which is exactly why the option screen in section 11 scores the combined bank-moments option at 4.40, well ahead of any single alternative channel.

Exhibit for the deck: the salary-day card rendered as a bank-app mockup on the strategy slide, paired with the numbers chain from 12.5 as a reach-to-order funnel bar, and the 5,661 figure carried into the moneyshot card on the impact slide as the largest single component of 19,053.

## 13. A holdings check adds 3,081 extra actives through the investments tile, statements, servicing messages and re-KYC for dormant accounts

**Answer.** An investments tile inside the bank app, a line on the regular bank statement, a servicing email and a WhatsApp utility message together remind every idle account holder that an ONL Trade account exists and is linked to their own bank account, with dormant accounts routed to video in-person verification before they can act. In our model this adds 3,081 extra actives in the base case, the second-largest lever, built on three assumptions (A23, A24, A25) plus two further assumptions (A10, A11) that govern the harder path for accounts the exchange rule flags as needing re-verification [T10, T9].

### 13.1 Who, and how many

This lever is the only one in our set aimed at the entire idle population, 6,89,375 accounts by the cohort table or 6,90,407 by the direct Exhibit 1 calculation, rather than at one cohort [T2, C-E1]. The case states the barrier directly: many accounts are opened alongside another banking product, so the customer may not remember holding a demat and trading account at all [C-PB6]. Of this idle population, our model carries half, 3,44,688 accounts (689,375 multiplied by the base share of 0.50), as flagged dormant under the 24-month rule and therefore needing a harder reactivation path before they can log in and trade [A10].

| Measure | Value | Tag |
|---|---|---|
| All idle accounts, cohort table | 6,89,375 | T2 |
| All idle accounts, direct Exhibit 1 calculation | 6,90,407 | C-E1 |
| Share flagged dormant under the 24-month rule, base case | 50% | A10 |
| Idle accounts flagged dormant, base case | 3,44,688 (689,375 x 0.50) | A10, T2 |
| Conversion of a flagged account relative to an unflagged one, base case | 50% | A11 |

The case's own term for an account deactivated for fraud or on a regulator's notice is Inactive (C-D3); the term for an account with no trade in 24 months is Dormant (C-D4). The exchange circular that actually governs this reactivation flow, NSE/INSP/64718 of 25 October 2024, calls the 24-month condition "inactive" in its own text, which is the exchange's word for the case's Dormant. We translate every reference to this exchange condition into the case's own term, dormant, throughout this section [D29, C-D4].

### 13.2 The moment and the message

There is no single calendar moment here; the message instead attaches to four recurring touchpoints the customer already receives for other reasons, so the reminder arrives inside something expected rather than as a new, unsolicited contact.

> Message copy (draft, subject to compliance review): "ONL Trade demat and trading account, opened with your [bank] account. See your holdings, update your nominee and contact details, or log in." Investments in securities market are subject to market risks, read all the related documents carefully before investing.

| Touchpoint | Where it sits | Starts | Tag |
|---|---|---|---|
| Investments tile | Bank app, a persistent tile alongside the account balance | Week 2 | A23, A24 |
| Statement line | A single line added to the regular bank account statement | Week 2 | A23 |
| Servicing email | A one-time email to every idle account with a WhatsApp opt-in or email on file | Week 2 | A23 |
| WhatsApp utility template | A utility-category message (not marketing-category), which carries the lower ₹0.115 rate rather than the ₹0.8631 marketing rate, to the 35% of idle accounts with a WhatsApp opt-in | Week 2 | A50, A51 |

### 13.3 What we build

| Component | What it does | Owner |
|---|---|---|
| Investments tile | A persistent, always-visible tile in the bank app showing the ONL account exists and linking directly into it | Bank app team |
| Statement and servicing copy | A standard line added once to statement templates and servicing message templates | ONL compliance and the bank's servicing team, joint |
| Re-KYC and video IPV flow | For accounts flagged dormant, an in-app video verification step, or an in-person verification at a branch for customers who prefer it | ONL operations, bank branch network |
| Nominee and contact refresh | Bundled into the same touchpoint, since nomination rules changed to bar freezing an account for missing nomination after 10 June 2024, making this a natural, low-friction addition rather than a separate ask | ONL operations |

### 13.4 The reactivation flow under the 25 October 2024 circular

The exchange's own rule sets the shape of this flow for the dormant half of the idle pool. Reactivating a flagged account requires in-person verification or video in-person verification under the SEBI KYC Master Circular of 12 October 2023, together with confirmation that address, mobile, email and bank or depository participant details have not changed [D30]. A predecessor NSE circular from 2021 adds a separate and important constraint: no communication may urge a customer to trade merely to avoid being flagged dormant [D31]. This is the reason our copy, reproduced in 13.2, mentions a statement, a nominee update and a login, and never mentions trading or avoiding a flag.

| Step | What happens | Governing rule | Tag |
|---|---|---|---|
| Flag | An account with no trade in 24 months is flagged | NSE/INSP/64718, 25 October 2024 | D29, C-D4 |
| Notice | A notice is sent before or at the point of flagging | One broker's practice sends a 23-month notice ahead of the 24-month flag, a comparator pattern, not a rule that binds ONL | D32 |
| Verification | IPV or video IPV completes, plus a check that key details are unchanged | SEBI KYC Master Circular, 12 October 2023 | D30 |
| Reactivation | The account can transact again | Same circular chain | D29, D30 |
| What may never be said | No message may urge a trade purely to avoid or lift a dormant flag | NSE/INSP/49743, 2021 | D31 |

### 13.4a The consent sequence behind the tile

The investments tile in 13.3 is also the point where data would, in principle, need to cross from the bank to ONL before the customer has acted, which is exactly the situation the RBI's KYC Master Direction addresses. Clause 55 of that direction bars a bank from divulging account-opening or customer data to another entity for cross-selling purposes without the customer's own express permission, subject to four listed exceptions, and this applies whether the other entity is an unrelated company or, as here, a subsidiary broker under the same banking group. Our design answers this directly rather than treating it as a late-stage legal review: the tile itself shows only a generic statement that an ONL Trade account linked to the bank exists, built from information the bank already knows about its own banking relationship with the customer, and no customer-specific ONL account data (holdings, balances, order history) crosses to the tile's display layer until the customer taps through and authenticates on the ONL side. The tap is the permission event. Before it, the bank is displaying a fact about its own banking relationship; after it, the customer has actively asked to see their own account, which is a request the customer themselves makes rather than data the bank pushes outward. This sequencing is consistent with Lane J's own design-fit observation on this point, which found the tap-to-consent structure sound while flagging, correctly, that this is an observation about design fit and not a regulator's ruling on the specific mechanism.

The same sequencing question applies to the statement line and the servicing email in 13.3, and it is answered the same way. Both touchpoints state only the generic fact that an account exists and invite a login; neither displays specific holdings or balances outside the authenticated ONL session itself. The dormant-account video IPV flow in 13.4 is a further example of permission preceding data movement: the customer must actively begin the re-verification process before any account-specific action becomes possible again.

### 13.5 The numbers chain

| Step | Assumption | Base | Bear | Bull |
|---|---|---|---|---|
| Reach: idle accounts reached through any owned channel with consent | A23 | 60% | 50% | 68% |
| Response: tap-through on the rediscovery message or tile | A24 | 4% | 3% | 5% |
| Order: first executed order after rediscovery | A25 | 25% | 20% | 30% |
| Result: extra actives in our model | T10 | 3,081 | (model output) | (model output) |

Showing the arithmetic: 6,89,375 idle accounts (the cohort-table figure the model uses as its working idle base) multiplied by the base reach rate of 60% gives 4,13,625 accounts reached, which matches the reached pool the holdout sizing in T19 carries for this lever exactly [T2, A23, T19]. Multiplying that reached population by the base tap-through rate of 4% and then by the base order rate of 25% gives an unadjusted estimate of roughly 4,140 first orders. The model's reported base-case figure of 3,081 again sits below the unadjusted estimate, at close to the same three-quarter ratio noted for the salary-day lever in section 12.5, because this lever's reached pool overlaps with every other lever's reached pool (a customer can receive the salary-day card and the investments tile in the same quarter), and the model's full treatment of this overlap is in section 21.

### 13.6 Evidence and comparables

| Evidence | Finding | Relevance to the lever | Tag |
|---|---|---|---|
| Vendor in-app message benchmarks | A vendor case study on an investing platform observed in-app message click-through of about 10.8% to 11%, against an 8.3% stated industry benchmark | Supports treating an always-visible, in-app tile as a materially higher-reach channel than a push notification, consistent with placing the primary reminder inside the bank app rather than in an external message | F07 |
| Push notification benchmarks for fintech | Fintech push click-through runs at 2.84% on Android and 2.09% on iOS for the period Q4 2024 to Q2 2025, both above the all-industry average | Supports keeping push and SMS as secondary channels in this lever, behind the tile and the statement line, since push alone converts at a materially lower rate than an in-app tile | F11 |
| RBI KYC Master Direction, cross-selling consent clause | Clause 55 bars a bank from divulging account-opening data for cross-selling without the customer's own express permission, subject to four listed exceptions | Confirms that the tap on the tile itself must be the permission event before any data moves from the bank to ONL, a design already built into the lever in 13.3 rather than a later fix | J-lane, RBI KYC Master Direction |
| UPI Autopay volumes | Among the top ten Indian banks, UPI Autopay processed about 926 million transactions in November 2025, against about 530.5 million a year earlier, roughly a 75% rise | Shows the underlying rail this lever (and the salary-day lever) depends on is itself growing quickly in adoption, which supports treating it as a credible, already-scaling mechanism rather than an experimental one | F44 |

### 13.7 What could go wrong, and how we would see it early

| Risk | Early signal | Response |
|---|---|---|
| Video IPV capacity cannot handle the dormant half of the idle pool inside the window | Verification queue times exceed a few days by week 4 | Prioritise branch-based in-person verification for customers near a branch, and extend the video IPV rollout window past week 4 if needed, since this lever runs across the full 13 weeks rather than on a single date |
| A statement-line or tile change requires a longer bank-side technical release cycle than 13 weeks allow | No tile live by week 4 | Lead with the lower-dependency touchpoints (statement line, email, WhatsApp) while the tile goes through its own release cycle |
| Customers read the reminder as a prompt to trade rather than as a servicing notice, risking a dark-pattern reading | Customer support flags complaints referencing pressure to trade | Review copy immediately against the ten-point test in section 19 and against the 2021 circular's bar on trade-to-avoid-flag messaging (D31) |
| Reach (A23) runs below the bear case of 50% | Week 2 holdout read shows reach materially below plan | Shift budget toward the higher-reach WhatsApp and statement channels and away from email, which Lane F evidence suggests converts less reliably for this kind of reminder |

### 13.8 How this lever differs from the salary-day lever

The holdings-check lever and the salary-day lever both target the login stage of the funnel, but they differ in population and in moment, and that difference explains why the salary-day lever is larger even though the holdings-check lever reaches more accounts in absolute terms (4,13,625 reached against 2,96,975). The salary-day lever attaches to a strong, recurring, bank-owned moment that repeats three times inside the window; the holdings-check lever attaches to four weaker, mostly one-time touchpoints (a tile that is always present but easy to ignore, a statement line read once, a single servicing email, a single WhatsApp message) spread across a broader population that includes every cohort rather than Salary Account holders alone. The lower tap-through rate this implies, 4% against the salary-day card's 8% (A24 against A21), is the main reason the holdings-check lever converts a larger reached population into a smaller extra-actives figure. The two levers are complementary rather than redundant: a Salary Account customer who misses all three salary-day cards still receives the statement line and the tile, and the model's overlap treatment in section 21 accounts for exactly this kind of double exposure rather than double-counting it.

Exhibit for the deck: the four-touchpoint reactivation flow from 13.4 rendered as a service-blueprint strip on the execution slide, with the numbers chain from 13.5 feeding the same reach-to-order bar format used for the salary-day lever, so the two largest levers read as a symmetric pair.

## 14. RM review conversations reach Prestige, Elite, Elevate and Preferred clients and add 4,083 extra actives in cohorts that already trade at 20% to 37%

**Answer.** A facts-only line inside a relationship manager's existing portfolio review conversation tells the premium and preferred client that their ONL Trade account exists, how to log in, and what a recurring instalment is, without recommending any product and without any per-trade incentive for the RM. In our model this adds 4,083 extra actives in the base case, concentrated entirely in the Prestige, Elite, Elevate and Preferred cohorts, whose 12-month activation rates range from 20% to 37% today, well above the Salary Account cohort's 14%, which is exactly why a conversation rather than a card is the right-shaped intervention for this group [T10, C-E2a].

### 14.1 Who, and how many

The four premium and preferred cohorts together hold 1,08,576 accounts, the sum of Prestige (3,096), Elite (35,697), Elevate (9,471) and Preferred (60,312) [C-E2a]. Three of the four cohorts lost activation ground year on year even as their account counts grew, a decline a facts-only conversation is well placed to arrest because it reaches a client who already has an active relationship with the bank, just not with ONL.

| Cohort | Accounts, Sep 2026 | Idle accounts | T12 activation, 2026 | T12 change, year on year | T1 change, year on year | Tag |
|---|---|---|---|---|---|---|
| Prestige | 3,096 | 2,012 | 35% | -3 pp | -1 pp | C-E2a, T2, T4 |
| Elite | 35,697 | 24,274 | 32% | -4 pp | -2 pp | C-E2a, T2, T4 |
| Elevate | 9,471 | 5,967 | 37% | -4 pp | -11 pp | C-E2a, T2, T4 |
| Preferred | 60,312 | 48,250 | 20% | -1 pp | +0 pp | C-E2a, T2, T4 |
| Sum | 1,08,576 | 80,503 | n/a | n/a | n/a | n/a |

Elevate's decline is the sharpest in the table, and it sits inside the cohort that itself grew the fastest, 36.1% year on year (6,959 to 9,471 accounts), suggesting dilution from a wave of newer, less-engaged Elevate clients rather than existing clients disengaging outright [T4]. Its 1-month activation rate fell from 24% to 13%, an 11-point drop, the single largest change of any kind in the entire cohort table [T4, C-E2a, C-E2b].

### 14.2 The moment and the message

The moment is an existing portfolio review the RM already conducts; no new appointment is created, and no new reason for contact is manufactured. The script states that the account exists, explains in plain language how to log in, and explains what a recurring instalment is, while making no product recommendation and offering no view on market direction.

| Script element | What it says | What it must never say |
|---|---|---|
| Account exists | "You hold an ONL Trade account, linked to your relationship with the bank." | Any suggestion the client should trade a specific instrument |
| Login | "You can log in directly from the app you already use for your other accounts." | Any claim about ease of profit |
| Instalment, explained | "A monthly instalment is a fixed amount set once that buys units automatically on a date you choose." | Any number implying a likely or guaranteed outcome |
| Close | "If this is useful, the next step is entirely yours; there is nothing further for me to recommend." | Any urgency framing tied to market movement |

### 14.3 What we build

| Component | What it does | Owner |
|---|---|---|
| RM talking points card | A one-page, facts-only script added to the RM's existing portfolio review checklist | ONL compliance and the RM training team, joint |
| RM coverage schedule | A plan ensuring idle clients in each of the four cohorts receive a review conversation inside the 13-week window, at a coverage rate that varies by cohort (Prestige 80%, Elite 60%, Elevate 60%, Preferred 35%) | RM management |
| No-incentive rule | A written confirmation that no RM receives a per-trade or per-activation payment tied to this conversation | Compliance, HR |

### 14.3a Coverage, rather than a single RM relationship, is the unit of design

A 2026 industry report on relationship-manager attrition finds that when an RM leaves a bank or wealth firm, clients typically fragment across new relationships rather than following the departing RM to a new employer [B81]. This finding shapes a specific design choice in 14.3: the RM coverage schedule is built around cohort-level coverage targets (Prestige, Elite, Elevate, Preferred, each with its own share) rather than around tracking which individual RM serves which individual client. If the lever depended on a fixed RM-to-client pairing holding steady for the full 13 weeks, any attrition inside that window would directly reduce coverage. Building the schedule at the cohort level instead means that whichever RM currently holds a given client's review, including a replacement RM following a handover, carries the same talking-points card and the same no-incentive rule. This also means the coverage multiplier A26, carried at a base value of 1.0 on the cohort-specific base shares, is a statement about the bank's RM function as a whole reaching a given share of idle clients in each cohort within the window, not a statement about any named individual's productivity, which keeps the lever's sizing stable even if normal staff movement occurs during the programme.

### 14.4 The rules it meets

| Constraint | How the lever meets it | Tag |
|---|---|---|
| No advice (C-K2) | The script explains the mechanism (what a recurring instalment is) without recommending any specific fund, instrument or allocation | C-K2 |
| No implied return (C-K2) | The script carries no number suggesting a likely or guaranteed outcome | C-K2 |
| No inducement (C-K2) | The no-incentive rule in 14.3 removes any link between the conversation and an RM's own pay | C-K2, C-K7 |
| Growth stays responsible (C-K7) | The RM's role is explicitly confined to reminding, not persuading, and the case's own warning that pushing people to trade more is neither ethical nor sustainable is the design test this script is held against | C-K7 |

### 14.5 The RM coverage multiplier and the numbers chain

The reach step for this lever is not a single rate but a weighted coverage pattern across the four cohorts, carried by assumption A26 at a base multiplier of 1.0 applied to cohort-specific base coverage shares (Prestige 80%, Elite 60%, Elevate 60%, Preferred 35%), with bear and bull multipliers of 0.8 and 1.15 scaling all four shares up or down together [T9].

| Cohort | Idle accounts | Base coverage share | Idle accounts reached, base case |
|---|---|---|---|
| Prestige | 2,012 | 80% | 1,610 |
| Elite | 24,274 | 60% | 14,564 |
| Elevate | 5,967 | 60% | 3,580 |
| Preferred | 48,250 | 35% | 16,888 |
| Sum | 80,503 | n/a | 36,642 |

This reached figure, 36,642, matches the RM review lever's reached pool in the holdout sizing exactly [T19]. Multiplying this reached population by the base order rate of 15% (A27) gives an unadjusted estimate of roughly 5,496 first orders. The model's reported base-case figure of 4,083 again sits below this unadjusted estimate, at close to the same ratio seen in the salary-day and holdings-check levers in sections 12 and 13, a consistency across all three levers that supports treating the model's overlap adjustment, detailed in section 21, as a single, uniformly applied correction rather than three separately tuned ones.

| Step | Assumption | Base | Bear | Bull |
|---|---|---|---|---|
| Reach: weighted RM coverage across four cohorts | A26 | 1.0x multiplier on base coverage shares | 0.8x | 1.15x |
| Response: first executed order after an RM review conversation | A27 | 15% | 11% | 19% |
| Result: extra actives in our model | T10 | 4,083 | (model output) | (model output) |

### 14.6 Evidence and comparables

| Evidence | Finding | Relevance to the lever | Tag |
|---|---|---|---|
| RM attrition and client fragmentation | A 2026 industry report finds that when a relationship manager leaves a bank or wealth firm, clients typically fragment across new relationships rather than following the RM | Supports treating the RM relationship itself, not any single RM, as the channel; the lever's design routes the script through whichever RM currently holds the review, so it does not depend on RM continuity | B81 |
| Clients-per-RM benchmarks (context only, dated) | Industry league tables from 2016 to 2018 show wide variation in assets per RM across Indian wealth managers, from roughly USD 43 million per RM at one firm to USD 600 million at another | No current, directly comparable clients-per-RM figure exists for this case; these figures are included for context only and do not inform the coverage multiplier, which rests on a team estimate (A26) | B79, B80 |
| Bank-led broker sourcing patterns | ICICI Securities sourced about 80% of new clients from ICICI Bank in FY20, falling to about 55% by Q2 FY21 and to 21% to 22% by Q4 FY22, the only concrete, dated sourcing-mix figures found across any bank-led broker in this market | Confirms the general pattern that a parent bank's existing relationships, including RM-held relationships, are a materially large source of activity for a bank-led broker, even as that share can change quickly over a few years | B56, B57, B76 |
| Reminders raising goal attainment | Field experiments across three banks find reminder messages that name both a specific goal and an incentive are more effective than messages varying only in gain or loss framing | Supports a script that states a specific, concrete action (how to log in, what an instalment is) rather than a generic encouragement to invest | E19 |

### 14.7 What could go wrong, and how we would see it early

| Risk | Early signal | Response |
|---|---|---|
| RM capacity cannot absorb a new talking point inside existing review time | RM feedback flags time pressure in week 2 | Shorten the script to its three core lines and remove the close, which is optional context rather than a required disclosure |
| An RM strays from the facts-only script into an implicit recommendation | Compliance spot-check of recorded or logged reviews finds advice-adjacent language | Retrain immediately and add the script as a mandatory, auditable checklist item rather than a suggested talking point |
| Coverage runs below the bear-case multiplier (0.8x) in one or more cohorts | Week 4 coverage tracking shows Preferred or Elevate materially under its 35% or 60% target | Reallocate RM management attention toward the lagging cohort; Elevate's sharp 1-month decline (24% to 13%) makes it the cohort most worth protecting against under-coverage | T4 |
| A per-trade incentive re-enters informally, through a bonus structure the script itself does not control | Any RM compensation review surfaces a link between trade volume and pay | Escalate to compliance immediately; this would breach the no-incentive rule in 14.3 and the responsible-growth constraint in C-K7 |

### 14.8 Why a conversation is the right shape for this group

The salary-day and holdings-check levers both use a message or a tile, because the Salary Account and general idle populations face an awareness problem that a clear, factual reminder can solve on its own. The four premium and preferred cohorts face a different problem. Their activation rates are already well above the Salary Account cohort's 14%, running from 20% to 37%, which means these customers already know the account exists and have, in most cases, already traded through it (C-E2a). What they have lost, across every one of the four cohorts bar Preferred's one-month rate, is engagement, not awareness, and a one-way message is a weaker tool against disengagement than a two-way conversation already happening for another reason. The RM review conversation also reaches a client at a moment when a relationship manager, not an anonymous notification, is already discussing that client's broader relationship with the bank, which is the most credible possible setting for a factual reminder about a linked account and the least likely setting to be mistaken for a sales push, provided the no-incentive rule in 14.3 and the facts-only script in 14.2 hold.

### 14.9 How this lever's sizing compares with the other two levers in this document

Placing this lever's arithmetic beside the two in sections 12 and 13 shows a consistent pattern across all three. Each lever's reach step, computed by multiplying an idle population by a reach assumption, matches the reached figure the holdout sizing in T19 independently carries for that same lever: 2,96,975 for salary day (A20 on 5,39,954), 4,13,625 for the holdings check (A23 on 6,89,375), and 36,642 for RM review (the weighted sum of A26's cohort shares on 80,503). Each lever's unadjusted reach-times-response-times-order estimate then runs higher than the model's reported, overlap-adjusted figure, by a ratio close to three quarters in every case: roughly 7,600 against 5,661 for salary day, roughly 4,140 against 3,081 for the holdings check, and roughly 5,496 against 4,083 for RM review. This is not a coincidence we can explain fully inside this section, since the overlap and baseline adjustment that produces the final figure belongs to the model's own method, detailed in section 21. What we can say here, honestly, is that the three largest levers in our plan are internally consistent with each other in how heavily the model discounts a simple multiplicative estimate, which supports treating the model as applying one coherent adjustment rather than three separately tuned ones, and gives a judge a clear, checkable arithmetic trail behind each of the three biggest numbers in T10.

Exhibit for the deck: the four-cohort coverage table from 14.5 rendered as a weighted bar chart on the strategy slide, paired with the year-on-year decline figures from 14.1, especially Elevate's 24% to 13% one-month fall, as the chart's annotated callout.
