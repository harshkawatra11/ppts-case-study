
## 17. Risk register: twelve risks, each paired with one mitigation and one early signal

**Answer.** The largest risks are rider supply at Drops, restaurants refusing the commission uplift, and a price war started by Rapido Ownly. All three have a mitigation Swiggy controls and an early signal that shows up in its own logs within 90 days. Scores are probability (P) and impact (I) on a 1 to 5 scale, with severity as P times I; they are team judgments, labelled as such.

### 17.1 Risk register

| # | Risk | P | I | Sev. | Mitigation (paired) | Early signal |
|---|---|---|---|---|---|---|
| R1 | Riders decline Drop runs because runs feel like unpaid waiting | 3 | 4 | 12 | Pay per run with a floor equal to solo pay for a run of 4 (₹77 vs ₹80 an hour at 4 meals, ₹125 at 10) [M] | Run acceptance under 80% |
| R2 | Restaurants refuse the 3-point commission uplift | 3 | 4 | 12 | Offer volume, not price: fixed menus raise per-restaurant orders; apply the uplift only above a volume threshold | Partner opt-outs above 15% |
| R3 | Rapido Ownly enters Pune with a 0% commission and ₹30 fee | 4 | 3 | 12 | Compete on trip cost, not commission: Drops and batching lower cost to serve, and the door fee already prices the trip [S08] | Ownly launch in Pune, Toing daily orders down over 10% |
| R4 | Trade-down: core ₹700 users switch to ₹99 orders | 3 | 4 | 12 | Separate app plus minimum-basket rule for core-app users plus a holdout cohort test; flip point 26% [M] | Holdout cohort trade-down above 20% |
| R5 | Eternal copies Drops through Zomato Now pods and Gold thresholds | 3 | 3 | 9 | Lock host sites with 12-month agreements; move first to hostel and PG clusters where pods do not reach | Eternal pilots in Pune or Delhi NCR campuses |
| R6 | Students refuse a 45-minute order-ahead window or a walk | 3 | 3 | 9 | The A/B test (section 10.4) sets the size of the Drop share; keep door orders as the fallback | Drop share of orders under 30% at month 3 |
| R7 | Regulatory fee creep: Code on Social Security rules or state cess rise | 3 | 2 | 6 | Model shows about 0.4 to 0.9% of a ₹99 basket [M, T11]; pass through via the door fee | New state law with per-order cess above ₹1 |
| R8 | Food safety and hygiene at unattended Drop shelves | 2 | 4 | 8 | Sealed, tamper-evident packaging; hosted, not unattended; FSSAI-compliant kitchen partners | Complaint rate above core app by 2x |
| R9 | Brand dilution: Swiggy is seen as a "cheap" brand | 2 | 3 | 6 | Keep Toing as a separate app and brand; no Toing marks in the core app | Core-app NPS drop above 2 points in Toing cities |
| R10 | Data privacy at Drop sites (order names, pickup lists) | 2 | 3 | 6 | Pickup by code, not by name; DPDP-aligned consent notice | Any privacy complaint at a host site |
| R11 | Execution slip on 40 pilot sites in 45 days | 3 | 3 | 9 | City heads own site targets; fall back to canteen and locker sites; weekly review | Fewer than 25 sites signed by day 45 |
| R12 | Loss of the customer if the door fee is too high | 3 | 3 | 9 | Test ₹10, ₹15, ₹20 in cohorts; flip point is ₹16.6 so the fee must stay above it on average [M] | Door orders down over 20% after fee |

### 17.2 Risk heat map

| Impact / Probability | P2 | P3 | P4 |
|---|---|---|---|
| I4 | R8 | R1, R2, R4 | |
| I3 | R9, R10 | R5, R6, R11, R12 | R3 |
| I2 | | R7 | |

### 17.3 Pre-mortem: why Toing fails in twelve months

| Failure story | Root cause | What we would have seen earlier |
|---|---|---|
| "Runs never filled" | Drop sites signed but unused | Meals per run under 4 at month 3 |
| "Restaurants left" | Commission uplift applied to everyone | Opt-outs above 15% at day 60 |
| "Core users switched" | No fence, no holdout | Trade-down above 20% in the holdout |
| "Ownly undercut us" | Only price, not trip cost, was defended | Toing orders down over 10% after Ownly's Pune launch |

---

## 18. Anticipated judge and Board questions: twenty answers with numbers

**Answer.** The twenty questions below are the hardest we expect on unit economics, decision quality, insight, competition and regulation. Each answer is two to four sentences and uses only figures already sourced above. Questions are reported speech: "The panel will ask" introduces each.

**Unit economics**

1. *The panel will ask: how do you know a rider trip costs ₹40 on a ₹99 order?* We do not know it exactly. The case says rider pay is roughly the same for a ₹79 thali and a ₹700 dinner [C01]; public rider guides put base pay at ₹20 to ₹35 an order before distance and incentives [S11]. We use ₹40, and the flip point is ₹42.4, so we show the result at ₹32 to ₹48: +₹139 Cr to −₹138 Cr over three years [M].
2. *The panel will ask: why is the contribution of a ₹99 order −₹27 when Swiggy says its food segment earns 7.6%?* Because 7.6% of a ₹700 order is ₹53 and the trip cost is nearly the same, while revenue at ₹99 is ₹23 against about ₹166 at ₹700. The model reproduces the 7.6% at ₹700 by calibration and applies the same cost logic at ₹99 [M, T1].
3. *The panel will ask: is the ₹81 Cr quarterly loss on Toing real?* It is our estimate from Platform Innovations' ₹131 Cr loss less ₹50 Cr for other businesses, checked against Swiggy's statement that spend is "largely on new user acquisition". Our split is two-thirds orders and one-third installs; if the split is reversed, the recommendation holds because both parts fall under the rebuild [Est, S01].
4. *The panel will ask: what is the breakeven basket?* About ₹363 at today's Toing terms, from the model run in section 5. Below that a solo trip loses money; the rebuild lowers the effective trip cost so a ₹99 order breaks even at 3.3 meals per run [M].
5. *The panel will ask: the case says AOV is ₹700 but public data imply about ₹500. Does that change your answer?* The case governs, so slides use ₹700. At ₹500 core EBITDA is ₹15.5 an order rather than ₹21.7, and one Toing order erases the EBITDA of about 1.8 core orders, which strengthens the case for fixing the trip [M, A13].

**Decision quality**

6. *The panel will ask: Rebuild beats Kill by only ₹41 Cr. Why not shut it?* On money alone the two are close. Rebuild keeps 2 in 3 new-or-dormant users, a separate price point that fences the core, and an option worth +₹135 Cr in the bull case, while the month-6 gate limits the downside near the ₹56 Cr of year-one loss [S01, M].
7. *The panel will ask: why not scale it with free delivery, as management is doing?* Scaling costs −₹1,744 Cr over three years because each extra ₹99 order adds a ₹27 loss and volume rises to 6.5 lakh orders a day [M, T6]. The case's own lens says the loss has to be justified by acquisition, and it is not (question 9).
8. *The panel will ask: why a separate app and not the 99 Store inside the main app?* A separate app is the fence: it keeps ₹700 users from trading down and lets Toing run different commissions and menus. Swiggy already says the two products are distinct and that some inter-play is hard to predict [S01].
9. *The panel will ask: is the funnel not simply a marketing cost?* It is, and it is nine times dearer than paid marketing per migrated user: ₹4,485 against a ₹500 CAC at a 15% migration rate. The case's lens needs 135% migration, which is impossible; the more generous lifetime-value lens needs 25% [M, T5].
10. *The panel will ask: what did Snacc teach you?* Snacc bought speed with cost (a solo trip per snack in micro-kitchens) and was shut within a year; Swiggy says the category was too small for the complexity [S01, S07]. Toing repeats the cost structure at a low price, which is why we change the trip rather than the price.

**Insight and primary research**

11. *The panel will ask: why no survey?* Time and the case's rule that non-public data cannot be sought from Swiggy or Eternal staff [C: rule R1] made a fieldwork instrument the wrong use of the hours available. The answer rests on trip arithmetic that does not depend on stated preferences, and the behavioural inputs it does need are stress-tested across their full plausible range [Section 10].
12. *The panel will ask: what would primary data change?* The size of the win, not the direction. Moving Drop share from 20% to 80% moves the three-year result for Rebuild from −₹25 Cr to +₹27 Cr, while Rebuild stays ahead of Scale and Funnel at every value tested [M, T10].
13. *The panel will ask: is the ₹346 versus ₹486 bill representative?* It is one public bill, used only to show the fee structure, not as a sample. The model uses the ₹12 platform fee and no delivery fee as Swiggy has disclosed them [S03].
14. *The panel will ask: what is the insight Swiggy's own team does not have?* That the loss is in the trip, not the price, and that a run of 10 meals turns −₹23 into +₹7 an order; that the funnel's 9.0x cost premium follows from the trip cost; and, from Swiggy's own disclosures, how much of Toing's audience already uses Swiggy or Zomato [S01].

**Competition and regulation**

15. *The panel will ask: what will Eternal do?* Its best reply is to hold back while Toing loses money and copy the pickup idea through Zomato Now pods and Gold free-delivery thresholds; its CFO has said it is not convinced Toing solves a clear problem [S06, CR02].
16. *The panel will ask: is Rapido Ownly the bigger threat?* Yes. It runs zero commission with a ₹30 trip fee, 50,000 to 60,000 orders a day in Bengaluru, and plans Pune [S08]. That model puts the trip cost on the customer, which supports our door fee; the risk is a lower fee war, so we track the flip point of ₹16.6.
17. *The panel will ask: what do the labour codes do to Toing?* The Code on Social Security levy is about ₹0.35 an order on a revenue basis and up to ₹1.74 on customer-paid turnover, plus a Karnataka fee capped at ₹0.50 in Bengaluru; together 0.4 to 0.9% of a ₹99 basket, an order of magnitude below the trip problem [M, T11].
18. *The panel will ask: is GST on delivery a problem?* Delivery fees carry 18% GST since 22 Sep 2025; on a ₹20 door fee that is ₹3.05, already inside the model's net fee [S10, M].

**Execution**

19. *The panel will ask: what if students will not walk to a Drop?* The Drop share falls, and the result falls slowly: at 20% Drop share three-year value is −₹25 Cr against +₹1 Cr at 50%, so the door path (batched pairs and a fee) carries the base [M, T10].
20. *The panel will ask: how will Swiggy know in twelve months whether the call was right?* Three numbers: meals per Drop run (at least 6 at month 6), blended contribution per order (at least +₹3 at month 12), and trade-down in a core holdout (at most 26%). Any miss at month 6 triggers a shutdown review [Section 15.3].
