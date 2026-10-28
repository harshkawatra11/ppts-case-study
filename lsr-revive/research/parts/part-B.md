## 7. Root causes: three decisions, not bad luck

Dunzo's decline is often described as a company that "lost to Blinkit and Zepto." That framing treats the outcome as competitive bad luck. The fact base does not support it. Dunzo had four years of asset-light operating history before the dark-store era began, and the financial deterioration tracks almost exactly with the three years it spent building and running owned inventory. The root causes are decisions, not misfortune, and they are MECE: a capital-allocation choice, a sequencing choice, and a revenue-concentration choice.

**Issue tree.** Rendered as text, the diagnostic tree that produced the three root causes reads:

```
Why did Dunzo run out of cash before quick commerce matured?
├── 1. It could not fund its cost base
│   ├── 1.1 Owned dark stores cost ₹80 per task vs ₹30 at partner stores [F23]
│   └── 1.2 Dunzo Daily lost ₹230 per order in H1 2022 [F18]
│       => RC1: Model switch to capital-heavy owned dark stores
├── 2. It spent faster than any single market could absorb
│   ├── 2.1 15 cities and 120 dark stores at the June 2022 peak [F19]
│   └── 2.2 Stores below 1,000 orders a day were later shut [F28]
│       => RC2: Reach chased before density
└── 3. It had no second engine to lean on when B2C margins broke
    ├── 3.1 B2C was over 90% of revenue to Oct 2022 [F25]
    └── 3.2 B2B revenue was ₹2.3 Cr in FY22, then JioMart-dependent [F24]
        => RC3: One revenue engine, one anchor client
```

**5 Whys chain.** Starting from the observable failure (the app went offline in January 2025 [F34]) and working backward to the root:

1. Why did Dunzo shut down in January 2025? Because Reliance declined to fund or buy the company after years of losses [F34].
2. Why did Reliance decline? Because the FY23 loss of ₹1,801 Cr against ₹226.6 Cr of revenue [F12] made the business un-investable on its existing trajectory, and Reliance had already written off its full $200M stake by mid 2025 [F35].
3. Why was the loss ₹1,801 Cr? Because 87% of it, ₹1,575 Cr, was spend that did not exist in FY21: extra ads, people, delivery fleet and dark-store cost, all incurred above the FY21 base of ₹226 Cr [Model].
4. Why was that spend incurred? Because Dunzo replaced its commission-only, partner-store model with owned dark stores carrying inventory, rent, staffing and a dedicated fleet, at a cost of ₹80 per task against ₹30 in the earlier model [F23].
5. Why did Dunzo make that switch? Because it treated "anything from any store" as inferior to a proprietary 19-to-20-minute grocery promise [F13, F15], and it had just raised $240M with an investor whose retail footprint made rapid store-building look immediately fundable [F07].

The chain bottoms out at RC1: the decision to become a dark-store operator, not the decision to compete in quick commerce at all.

**Fishbone (5 Ms adapted for a services business: Strategy, Capital, Operations, Market, Organisation).**

| Category | Causes found |
|---|---|
| Strategy | Repositioned from "pick-up and drop" to "grocery delivery" [F14]; treated the 10-vs-20-minute gap as immaterial while rivals built around it [F17]; pursued 15 cities and 200+ stores simultaneously instead of sequencing [F15] |
| Capital | $240M raised Jan 2022, largely directed into store build-out and fleet [F07]; over $100M eventually sunk into dark stores [F33]; India-wide VC funding fell from $25.7B to $9.6B between 2022 and 2023, closing the window to raise again [M12] |
| Operations | Cost per task ₹80 with dark stores vs ₹30 at partner stores [F23]; monthly burn reached ₹176 Cr by June 2022 [F18]; stores below roughly 1,200 orders a day never cleared the metro breakeven line [M04] |
| Market | Blinkit, Instamart and Zepto each carried more dark stores and larger war chests by mid 2022 (383, 301 and about 220 respectively, against Dunzo's 120) [M06]; Swiggy alone committed $700M to Instamart [M07] |
| Organisation | Rider and store staff were diverted to JioMart delivery work, straining resources and blurring mandates [Q03]; B2B, the one diversified revenue line, stayed a minority function until 2022 [F25] |

**Symptoms vs root causes.**

| Symptom (what observers noticed) | Root cause it traces to |
|---|---|
| FY23 loss of ₹1,801 Cr, ₹9.09 spent per ₹1 earned [F12] | RC1: owned dark stores at ₹80 per task |
| Dark stores shut across NCR and Hyderabad from Nov 2022 [F28] | RC2: 120 stores across 15 cities, many below breakeven density |
| JioMart cut D4B rates in mid 2023, halving gross margin [F27] | RC3: B2B was one client-concentrated line, not a true second engine |
| App went offline Jan 2025 [F34] | All three, compounding: a cost base no single funding round could carry |

**RC1: Model switch.** Dunzo abandoned its asset-light marketplace for capital-heavy owned dark stores. Cost per task ran ₹80 with dark stores against ₹30 in the earlier partner-store model [F23]; Dunzo Daily lost ₹230 per order in H1 2022 even after excluding routine spend [F18]; over $100M eventually went into dark-store build-out [F33].

**RC2: Reach before density.** Dunzo carried 15 cities and 120 dark stores at its peak [F19], while the mature-metro breakeven benchmark sits at about 1,200 to 1,250 orders a day per store [M04]. Stores that never cleared that bar were the ones shut first, from November 2022 onward [F28].

**RC3: One revenue engine and one anchor client.** B2C, chiefly Dunzo Daily and pick-up-and-drop, was over 90% of revenue through October 2022 [F25]. B2B (Dunzo for Business) generated only ₹2.3 Cr in FY22 [F24], and once it scaled, JioMart alone came to represent 30 to 40% of it and used that weight to cut rates [F24, F27].

## 8. Critical decisions that accelerated the decline

The root causes describe a pattern. The decision log below fixes the pattern to specific, dated calls, each of which had a visible alternative on the table at the time. This is what separates "the market changed" from "the company chose."

| Date | Decision | Alternative available at the time | Consequence | Evidence |
|---|---|---|---|---|
| Jun 2021 | Launch Dunzo Daily as an owned dark-store service, targeting 250 stores | Extend the existing partner-store fulfilment model to a faster SLA without owning inventory | Cost per task rose to ₹80 from ₹30; capex and rent entered the P&L for the first time | F13, F23 |
| Aug 2021 | Reposition the brand from "pick-up and drop" to "grocery delivery" | Keep the multi-category "Dunzo it" identity and add grocery as one more errand type | Narrowed the brand around a category Blinkit and Zepto were purpose-built to win | F14 |
| Jan 2022 | Direct the $240M Reliance-anchored round into store build-out and fleet expansion | Direct the same round into partner-store SLAs on Reliance's existing retail footprint, which the deal already granted access to | Locked in the capital-heavy path just as the funding window for a second round began closing | F07, M12 |
| Apr 2022 | Commit publicly to 200+ dark stores, 30,000+ riders and 2 lakh orders a day by June, spread across 15 cities | Hold the roughly 75 stores already open [F20], deepen Bengaluru (already claimed EBITDA-positive for 12 to 15 months [F16]), and expand city by city | Fixed costs and rider headcount scaled ahead of any city reaching density; many of the new stores were later among those shut | F15, F16, F20 |
| May 2022 | Spend about ₹40 Cr on an IPL marketing campaign, including a QR-code ad in the final | Redirect equivalent spend to rider retention or store-level unit economics, where the H1 2022 loss per order was already ₹230 | Marketing spend rose without a matching improvement in per-order economics | F18, F21 |
| 2022 | Let Dunzo for Business grow increasingly dependent on JioMart as its largest client | Cap any single client's share of B2B volume while D4B was scaling from its FY22 base of ₹2.3 Cr | JioMart's later rate cuts halved D4B gross margin, removing the one revenue line management would later call the recovery path | F24, F27 |
| Nov 2022 onward | Begin shutting dark stores and cutting headcount only after 2022's ₹1,200 to ₹1,500 Cr had already been spent | Apply the same store-density and cost discipline in early-to-mid 2022, before the spend, not after | Cuts arrived too late to prevent the FY23 loss; over half the stores were shut by mid 2023 and about 70% by November 2023 | F20, F28 |

Two things stand out across the log. First, every alternative column names something Dunzo already had access to at the time, not a hypothetical: Reliance's stores existed the day the round closed, Bengaluru's claimed profitability existed before the 15-city push, and the B2B base existed before JioMart became its largest client. Second, the corrective decisions (store closures, headcount cuts) arrived in the same sequence as the original mistakes, but roughly 12 to 18 months later, after most of the ₹1,575 Cr in incremental FY23 loss had already been committed [Model].

## 9. Failed assumptions

Seven assumptions, spanning the categories the brief names (customers, market, technology, competition, operations), turned out to be wrong. Each is stated as management appears to have held it, with what actually happened and the evidence.

| Assumption | Category | What happened | Evidence |
|---|---|---|---|
| The gap between 10-minute and 20-minute delivery does not matter to customers | Customers | Rivals built their entire proposition around the faster promise and out-spent Dunzo doing it; Dunzo's own founder said in January 2022 he did not "understand the difference between 10 and 20" minutes | F17 |
| Venture capital would keep flowing at 2021-to-2022 levels to fund the store build-out | Market | India-wide VC funding fell from $25.7B in 2022 to $9.6B in 2023, and Dunzo's own Series G stalled when Reliance would not accept a valuation markdown | M12, F30 |
| Dark stores would pay back once AOV reached about ₹400 | Operations | Dunzo Daily's AOV was about ₹400 by April 2022, yet H1 2022 losses ran ₹230 per order, and the mature-metro breakeven of about 1,200 to 1,250 orders a day per store was rarely hit outside the top-performing locations | F16, F18, M04 |
| Grocery, not multi-category errands, was the bigger prize and worth repositioning the brand around | Market | The August 2021 repositioning moved Dunzo directly into the category Blinkit and Zepto were purpose-built for, where they already carried more dark stores and larger war chests by mid 2022 | F14, M06 |
| Reliance would remain a patient, long-term backer regardless of the burn rate | Competition and capital | Reliance declined a fresh round in 2023 unless Dunzo accepted a valuation markdown of up to 50%, declined to fund or buy the company in January 2025, and wrote off its full $200M investment by August 2025 | F30, F35 |
| Rivals would not be able to sustain outspending Dunzo indefinitely | Competition | Swiggy alone committed $700M to Instamart, Zomato paid about $568M for Blinkit, and Zepto raised $360M in eight months and $1.85B cumulatively by late 2024, each dwarfing Dunzo's $240M round | M07 |
| B2B (Dunzo for Business) could wait while the company focused on B2C dark stores | Operations and technology | B2B stayed under ₹2.3 Cr of revenue in FY22 while B2C absorbed the bulk of capital; by the time B2B scaled to about 30,000 orders a day in mid 2023, JioMart's outsized share let it force a rate cut that halved D4B gross margin | F24, F25, F27 |

Two features of this list matter for the argument that follows. First, none of the seven assumptions was unreasonable to hold in isolation in 2021; each looked plausible against contemporaneous benchmarks (an AOV of ₹400, a founder who had run the business profitably in earlier years, a marquee new investor). Second, every one of them was falsifiable with information Dunzo already had internally by mid 2022: order-level losses, city-by-city density, and B2B's early growth curve. The failure was not in the assumptions being wrong; it was in not testing them before committing the round to a plan built on all seven at once.

## 10. The unavoidable problem

Strip away everything Dunzo chose to do about it, and one problem remains that no strategic response could make disappear: quick commerce reached Dunzo's own customers, in Dunzo's own cities, backed by competitors with deeper pockets, faster promised delivery times and purpose-built inventory. From late 2021 onward, a Bengaluru or Mumbai household that once opened Dunzo for a forgotten grocery item had Blinkit, Instamart and Zepto offering the same item in 10 to 20 minutes, with dark-store networks two to three times the size of Dunzo's and war chests an order of magnitude larger [M06, M07]. That is the unavoidable problem: **Dunzo had to answer "why order from us?" with a cost base it could actually fund.**

This is not the same statement as "Dunzo had to build dark stores," and the distinction matters for the boundary test the brief sets (BD1): teams may not eliminate the central problem, replace the business with an unrelated model, or assume the challenge away. The unavoidable problem, correctly stated, is about the customer question and the funding constraint, not about any one operating model. A revival thesis that ignores the competitive pressure, or that assumes Dunzo could have simply continued as it was in 2019 without a faster-delivery response, would be assuming the problem away. Equally, a thesis that pretends the funding constraint did not exist, by assuming unlimited follow-on capital, fails the same test from the other direction.

What the unavoidable problem actually demanded was a way to close the speed gap without owning the capital-heavy end of the fulfilment chain: some means of putting inventory closer to the customer, at faster promised times than the 2019-era 25-to-45-minute pick-up-and-drop baseline [F03], without carrying the ₹80-per-task cost of an owned store network [F23]. Dunzo had exactly one asset that let it attempt this without inventing a new business: its merchant and rider network, plus, after January 2022, direct commercial access to Reliance's retail footprint [F07]. The problem could not be assumed away. It could only be answered with a cheaper way to be fast, and that is the gap the revival thesis in later sections is built to close.

## 11. Missed opportunities that were realistic at the time

Six opportunities existed in the same 2021-to-2023 window in which Dunzo built and then dismantled its dark-store network. Each is evaluated on what it was, the evidence that it existed at the time (not with hindsight), why it was realistic given Dunzo's actual resources, and what it would have changed.

**1. Reliance's stores as shelves.** The January 2022 deal named Dunzo as hyperlocal logistics partner for Reliance's stores and last-mile partner for JioMart merchants [F07]. That relationship existed the day the round closed, not years later. It was realistic because it required no new capex, only a fulfilment agreement layered onto stores that already existed; Reliance itself later proved the model out, launching JioMart Quick's 30-minute delivery from its own store network in 2024 [M17]. Using it in 2022 instead of building 120 parallel dark stores would have removed the single largest driver of the FY23 loss bridge, the ₹713 Cr "dark stores, inventory and other" line [Model].

**2. Dunzo for Business as a second engine.** D4B already had about 20,000 SMB and brand accounts across 8 cities by October 2022 [F24] and reached roughly 30,000 orders a day across 7 cities by July 2023, serving named clients like McDonald's, Licious and Theobroma [F24]. It was realistic because it reused the same rider fleet that B2C already employed, filling idle hours rather than requiring new headcount; comparable asset-light logistics players, Porter and Shadowfax, later proved the category could be profitable, with Porter posting a ₹55.2 Cr FY25 profit on ₹4,306 Cr of revenue and Shadowfax's hyperlocal revenue growing from ₹255 Cr to ₹513 Cr between FY23 and FY25 [M13, M14]. Scaling D4B earlier, with a cap on any single client's share, would have diversified revenue away from a B2C line that needed subsidized dark-store economics to compete.

**3. Bengaluru density before geographic reach.** The founder himself said in April 2022 that the top 20 stores were starting to show profitability and that Bengaluru had been EBITDA-positive for 12 to 15 months [F16], a period that predates the April 2022 decision to push into 15 cities at once. That evidence existed inside the company before the expansion decision was made. Deepening the one city with proven unit economics, rather than replicating an unproven model in 14 more, was realistic precisely because it required no new experiment, only patience.

**4. An early ONDC logistics seat.** D4B became one of the first logistics providers on the Open Network for Digital Commerce in August 2022, at a scale of 75,000 riders and 20,000 merchants [F26]. ONDC access was realistic because it was a government-backed, low-cost distribution channel that plugged directly into Dunzo's existing rider network rather than requiring new infrastructure. Taken up earlier and more aggressively, it would have added merchant and order volume without proportional capex.

**5. Batching and slower delivery tiers.** By August 2022, Dunzo was already pushing customers toward 60-minute and batched delivery to save ₹8 to ₹10 per order [F22]. That this saving was available and already in use for cost control shows it was realistic well before 2022; deploying batching and tiered delivery speeds as the default operating posture, rather than a late-stage cost patch, would have protected per-order economics without abandoning the delivery promise.

**6. The lean lesson from the 2020 lockdown.** During the April 2020 lockdown, Dunzo's AOV rose from ₹220 to ₹480, its loss per delivery fell from ₹142 to ₹30, and weekly orders per user rose from 2.1 to 2.8 [F36], all without a single new dark store. That episode is direct, internal evidence that demand concentration and higher basket sizes, not owned inventory, were what actually improved Dunzo's unit economics. It was realistic to draw that lesson forward into 2021 to 2022 planning, since it was Dunzo's own operating history, not an external benchmark.

Taken together, these six opportunities describe a single alternative path: use partner and Reliance shelves instead of owned stores, lean harder on B2B and ONDC to diversify revenue, concentrate rather than spread geographically, and price delivery speed in tiers rather than subsidizing a uniform fast promise. None of the six required capital Dunzo did not have or a business Dunzo was not already running.

## 12. The point of intervention: January to April 2022

Of every juncture in Dunzo's five-year decline, January to April 2022 is the one where a different decision was both available and still fully reversible. The decision-tree fork below sets out, in text, what actually happened against what the revival path would have done from the same starting point.

```
January 2022: $240M round closes (₹1,790 Cr at the RBI reference rate) [F07]
Reliance names Dunzo hyperlocal partner for its stores and JioMart merchants [F08]
About 75 owned dark stores already open; the internal plan calls for 200 [F20, F21]
│
├── ACTUAL BRANCH (what Dunzo did)
│   ├── Apr 2022: commit publicly to 200+ stores, 30,000+ riders, 15 cities [F15]
│   ├── May 2022 to mid 2023: spend ₹1,200 to 1,500 Cr on stores, fleet, marketing [F20]
│   ├── FY23: ₹1,801 Cr loss, cash falls to ₹216 Cr by Mar 2023 [F12]
│   └── Jan 2025: app and website go offline [F34]
│
└── REVIVAL BRANCH (what the intervention would do)
    ├── Freeze owned stores at about 75; route incremental Dunzo Daily volume through
    │   Reliance and partner-store shelves [F07]
    ├── Redirect capital toward Dunzo for Business and 4-city density (Bengaluru,
    │   Hyderabad, Pune, Chennai) [F16, F24]
    ├── FY23 EBITDA of about −₹172 Cr, roughly 90% smaller than the actual loss [Model]
    └── FY27: EBITDA turns positive (+₹18 Cr, base case), with ₹1,288 Cr of the
        round still in cash [Model]
```

**Why not June 2021.** That is when Dunzo Daily launched as a small first dark store in Indiranagar, targeting a 20-minute delivery window [F13]. At that point the model was still a single-store pilot: the capital exposure was minimal, and there was no evidence yet, positive or negative, about unit economics at scale. It was a legitimate experiment to run, and reversing course before running it at all would have foreclosed useful information. The problem was never the pilot; it was what came after it.

**Why not sometime in 2023.** By then the capital was gone. Over $150M had been spent in the preceding 18 months [F31], the company was already negotiating a rights issue at roughly a $200M valuation against a $775M peak [F30, S07 conflict resolved at §4.4], and Reliance was already refusing to fund further rounds without a markdown [F30]. Any intervention in 2023 would have been a rescue attempt on a depleted balance sheet, not a redirection of an intact one. The Morning Context's February 2023 assessment captured this directly: Dunzo "has to show a path to profit, dropping its dark store model" [Q05], but by then the model change could only shrink an already-large loss, not prevent one.

**The reversibility test.** January to April 2022 passes a simple test that neither June 2021 nor 2023 does: the capital was on the balance sheet, uncommitted to the dark-store build-out, and the alternative infrastructure (Reliance's stores, the existing partner network, the nascent B2B book) was already contractually or operationally available. A decision made in this four-month window did not require new fundraising, new partnerships, or new technology; it required only a different allocation of money and management attention that Dunzo already had in hand.

**Resources on hand at the fork.** The company entered this window with $240M in fresh capital [F07], a named commercial relationship with Reliance covering both its retail stores and JioMart merchants [F08], and roughly 75 dark stores already open against an unexecuted plan for 200 [F20, F21]. Every one of those resources could support the revival branch exactly as it stood; none of them needed to be replaced, only redirected.
