## 11. ₹22.0 crore a year, 1.6% of business-unit revenue, equips 1.16 lakh shops and pays back at 4.4 extra tyres per shop a year

**Answer.** The base case spends ₹21.99 crore a year [M c4.spend_cr.base] [T4], 1.63% of the relevant business-unit revenue [M c4.spend_share_pct.base] [T4], and equips 1.16 lakh member shops [M c4.members_lakh.base] [T4] at a blended cost of ₹1,627.50 per member a year [M c4.cost_per_member.base] [T3]. The programme breaks even when a member shop sends 4.4 extra Eurogrip tyres a year, one every 11.7 weeks [M c4.be.base] [M c4.weeks.base] [T5], a bar the design claims no uplift to clear. Across bear to bull, spend moves from ₹10.29 crore to ₹29.20 crore and break-even moves from 11.7 to 2.2 tyres [T4] [T5], and the single assumption that moves break-even most is the contribution margin on the company's net realisation [A30] [T6].

| Metric | Bear | Base | Bull | Tag |
|---|---|---|---|---|
| Relevant BU revenue (₹ crore) | 1,240 | 1,350 | 1,460 | [A01] |
| Budget envelope (₹ crore) | 18.60 | 23.62 | 29.20 | [M c4.envelope_cr] |
| Spend (₹ crore) | 10.29 | 21.99 | 29.20 | [M c4.spend_cr] [T4] |
| Spend as % of BU revenue | 0.83% | 1.63% | 2.00% | [M c4.spend_share_pct] |
| Members (lakh) | 0.27 | 1.16 | 2.43 | [M c4.members_lakh] [T4] |
| Cost per member (₹/year) | 2,349.50 | 1,627.50 | 1,105.33 | [M c4.cost_per_member] |
| Contribution per tyre (₹) | 327 | 427 | 539 | [T5] |
| Break-even (extra tyres/member/year) | 11.7 | 4.4 | 2.2 | [M c4.be] [T5] |
| One tyre every (weeks) | 4.5 | 11.7 | 23.3 | [M c4.weeks] [T5] |

*This table pulls the headline scenario numbers that the rest of this section derives and explains, in one place, so a reader can check any downstream claim against it before reading the derivation.*
*Source: [T4]; [T5]; [A01]; [M c4.spend_cr]; [M c4.spend_share_pct]; [M c4.members_lakh]; [M c4.cost_per_member]; [M c4.be]; [M c4.weeks].*

### 11.1 The business-unit revenue base, and why it is a range

The programme's envelope is sized off A01, the relevant business-unit revenue, which is defined narrowly as domestic two- and three-wheeler replacement revenue in FY26, not TVS Srichakra's full consolidated revenue. Starting from consolidated revenue from operations of ₹3,643 crore in FY26 [RA12], the split between original-equipment supply, replacement sales and exports is not disclosed by the company in a form that isolates the domestic replacement line directly. The closest primary split available is CRISIL's April 2023 rating rationale, the most recent primary source this lane found with a revenue-mix statement [RA95], which puts original-equipment supply at roughly 46% to 48% of revenue and exports at roughly 13% to 14%, leaving the remainder, aftermarket and replacement revenue, at roughly 34% to 40% depending on which end of the OEM and export brackets is read against the other. Because CRISIL's own statement is itself a bracket rather than a single percentage, this document carries both ends as the bear and bull readings and takes a point near the middle of the implied range as base, rather than picking one reading and presenting it as precise.

| Scenario | Aftermarket and replacement share of consolidated revenue | FY26 consolidated revenue (₹ crore) | Relevant BU revenue (₹ crore) |
|---|---|---|---|
| Bear | 34% | 3,643 | 1,240 |
| Base | 37% | 3,643 | 1,350 |
| Bull | 40% | 3,643 | 1,460 |

*This table shows the arithmetic behind A01: the same FY26 consolidated revenue figure multiplied by three defensible readings of CRISIL's aftermarket-share bracket, each a direct brief of the primary source rather than an independently sourced percentage.*
*Source: [A01]; RA12; RA95; RA96.*

A01's bear and bull are not meant to span every conceivable reading of TVS Srichakra's business mix; they span the two ends of the one disclosed bracket this lane located. Any reading of the aftermarket share materially outside 34% to 40% would need a newer or more granular company disclosure than the ones found, and this document does not manufacture one.

### 11.2 The envelope: budget share times business-unit revenue

The brief itself states the budget is 1.5% to 2.0% of the relevant business-unit revenue [C4-B19] [A02], a range cross-checked against two rivals' own disclosed advertisement and sales-promotion spend, both near 2.1% of revenue in their most recent reported year [RB49] [RB50], which sits just above this band and corroborates it as an industry-realistic range rather than an arbitrary planning convention. The envelope in each scenario is A02 multiplied by A01, with the base case choosing to spend at 1.75% of its own base-case revenue while treating the additional headroom up to the 2.0% ceiling as contingency, per PLAN.md §2.2.8.

| Scenario | Budget share (A02) | Relevant BU revenue (A01, ₹ crore) | Envelope (₹ crore) |
|---|---|---|---|
| Bear | 1.5% | 1,240 | 18.60 |
| Base | 1.75% | 1,350 | 23.62 |
| Bull | 2.0% | 1,460 | 29.20 |

*The envelope is the ceiling the programme is permitted to spend inside, not the amount it actually spends; §11.3 to §11.4 show that the base and bear cases spend below this ceiling while the bull case spends all the way to it.*
*Source: [A01]; [A02]; [M c4.envelope_cr]; [T4].*

The bull case is the only scenario where spend equals the envelope exactly (₹29.20 crore of ₹29.20 crore [M c4.spend_cr.bull] [M c4.envelope_cr.bull]), because the bull case's lower per-member costs let a larger member base fit inside the same 2.0% ceiling. The base case spends ₹21.99 crore of a ₹23.62 crore envelope, leaving ₹5.01 crore of headroom to the 2.0% ceiling of base-case revenue [M c4.headroom_to_2pct_cr.base]; the bear case leaves the largest headroom, ₹14.51 crore [M c4.headroom_to_2pct_cr.bear], because bear-case per-member costs are highest and the model deliberately does not force spend up to the ceiling in a scenario already defined by worse-than-expected unit economics. This headroom is a design choice stated once here: the model never assumes the programme spends the full allowable ceiling in every scenario, only in the bull case where the unit economics make it affordable to do so.

| Scenario | Envelope at own scenario's budget share (₹ crore) | Ceiling at 2.0% of own scenario's revenue (₹ crore) | Actual spend (₹ crore) | Headroom to the 2.0% ceiling (₹ crore) |
|---|---|---|---|---|
| Bear | 18.60 | 24.80 | 10.29 | 14.51 |
| Base | 23.62 | 27.00 | 21.99 | 5.01 |
| Bull | 29.20 | 29.20 | 29.20 | 0.00 |

*The second column is always 2.0% of that scenario's own A01 revenue figure, which differs from the first column except in the bull case, where A02 is itself 2.0%. Reading the two ceiling columns side by side shows why only the bull case uses its full allowable ceiling: in bear and base, the programme is cheaper to run than the maximum the brief's own 1.5% to 2.0% rule would allow, leaving contingency room rather than spending to the limit by default.*
*Source: [A01]; [A02]; [M c4.envelope_cr]; [M c4.spend_cr]; [M c4.headroom_to_2pct_cr].*

This headroom matters for the kill-criteria logic in §15: if Tier 3 hardware costs run above the bear case in practice (risk R09, §14), the first lever is to absorb the overrun inside the existing headroom before touching member coverage, and only to cut Tier 3 hardware to lease-only (per PLAN.md §2.2.13) if the overrun would otherwise breach the 2.0% ceiling itself.

### 11.3 Cost per member by tier

The programme costs a member differently by tier, because Tier 1 carries only a starter kit and no recurring hardware, Tier 2 adds a quarterly consumables refill and a larger one-time kit, and Tier 3 carries the highest one-time hardware cost (cost-shared) plus the largest consumables and visibility footprint, per the tier ladder in PLAN.md §2.2.4. The model blends these three tier costs, weighted by the steady-state member mix (75% Tier 1, 20% Tier 2, 5% Tier 3 [A07a] [A07b] [A07c]), into the five-component cost per member shown below.

| Component | Bear (₹) | Base (₹) | Bull (₹) |
|---|---|---|---|
| Tools | 1,470 | 1,042 | 741 |
| Visibility | 456 | 304 | 202 |
| Training | 185 | 125 | 75 |
| Field | 158 | 96 | 58 |
| Tech | 80 | 60 | 30 |
| Total | 2,350 | 1,628 | 1,105 |

*Tools and visibility are one-time items amortised over A11's three-year useful life; training is the per-trainee course fee (A13) weighted by the share of Tier 2 and 3 members trained each year (A13s); field and tech are the per-member share of the fixed field and technology lines described in §11.4.*
*Source: [A07] to [A20]; [A33]; [A19m]; [T3].*

The blended cost per member actually used in the budget math (₹2,349.50 bear, ₹1,627.50 base, ₹1,105.33 bull [M c4.cost_per_member]) sits a few rupees from the T3 component total shown above (₹2,350, ₹1,628, ₹1,105). Both figures come from the same model run; the small difference is that the budget-math version also blends in a share of the enrolment cost that replaces churned members (A17, A17c), a cost that T3's steady-state tier breakdown does not carry because it describes what an already-enrolled member costs to keep, not what it costs to replace one who leaves. This document states the difference once here rather than letting two near-identical numbers appear unexplained elsewhere.

Reading the five components as a share of the base-case total shows where the cost per member actually sits: Tools is 64.0% of the ₹1,628 total, Visibility is 18.7%, Training is 7.7%, Field is 5.9% and Tech is 3.7%. This share pattern repeats, with small shifts, across bear and bull, which is why §11.4's budget-line table and this tier-level table tell the same underlying story from two different cuts of the same cost base: tools and refills dominate both because Tier 3 hardware is the single most expensive line item per member and because every active member, in every tier, draws on the tools line in some form, whereas visibility, training, field and tech are each either one-time, partial-coverage or fixed-cost items that touch a smaller share of total spend.

| Component | Base (₹) | Share of base total | Bear (₹) | Share of bear total | Bull (₹) | Share of bull total |
|---|---|---|---|---|---|---|
| Tools | 1,042 | 64.0% | 1,470 | 62.6% | 741 | 67.1% |
| Visibility | 304 | 18.7% | 456 | 19.4% | 202 | 18.3% |
| Training | 125 | 7.7% | 185 | 7.9% | 75 | 6.8% |
| Field | 96 | 5.9% | 158 | 6.7% | 58 | 5.2% |
| Tech | 60 | 3.7% | 80 | 3.4% | 30 | 2.7% |
| Total | 1,628 | 100% | 2,350 | 100% | 1,105 | 100% |

*This is the same T3 data recast as a percentage breakdown rather than a rupee breakdown, to show that the Tools line's dominance (62.6% to 67.1% of per-member cost across all three scenarios) is a stable structural feature of the design, not an artefact of the base case alone.*
*Source: [T3]; [A07] to [A20].*

### 11.4 Five budget lines, bear to bull

The model keeps exactly five budget line names across every scenario, per PLAN.md §2.2.8: Tools and refills, Visibility kits, Training and meets, Field teams, and Tech and audits. Tools and refills is the largest line in every scenario (55.1% of base-case spend [M c4.lines]) because it carries both the one-time tool cost amortised across the member base and the recurring quarterly consumables refill that keeps Tier 2 and 3 members active.

| Line | Bear (₹ crore) | Bear (%) | Base (₹ crore) | Base (%) | Bull (₹ crore) | Bull (%) |
|---|---|---|---|---|---|---|
| Tools, refills | 3.97 | 38.6% | 12.12 | 55.1% | 17.98 | 61.6% |
| Visibility kits | 1.23 | 12.0% | 3.54 | 16.1% | 4.90 | 16.8% |
| Training, meets | 0.50 | 4.9% | 1.45 | 6.6% | 1.82 | 6.2% |
| Field teams | 2.93 | 28.4% | 3.12 | 14.2% | 3.01 | 10.3% |
| Tech and audits | 1.67 | 16.2% | 1.77 | 8.0% | 1.49 | 5.1% |
| Total | 10.29 | 100% | 21.99 | 100% | 29.20 | 100% |

*Field teams covers the per-enrolment incentive (A17) and the fixed programme team and state coordinators (A18); tech and audits covers the retailer-app extension or build (A22), messaging (A19m) and the mystery-audit and brand-track lines (A31, A31n, A32). Both are weighted toward fixed costs, which is why their rupee value changes less across scenarios than Tools, refills does.*
*Source: [M c4.lines_sc]; [T4]; [A17]; [A18]; [A19]; [A19m]; [A22]; [A31]; [A31n]; [A32].*

Field teams is the one line that does not move monotonically with scenario: ₹2.93 crore bear, ₹3.12 crore base, ₹3.01 crore bull. This is because the line blends a per-enrolment variable cost (A17, highest per enrolment in the bear case at ₹250) against a fixed coordinator cost (A18, highest in absolute terms in the bear case at ₹250 lakh/year) applied across member counts that themselves differ sharply by scenario (0.27 lakh bear versus 2.43 lakh bull). The base case's larger member count against a still-substantial fixed coordination cost (₹200 lakh/year, A18 base) produces the highest absolute field-teams spend of the three scenarios; this document states the pattern honestly rather than smoothing it into a false straight line across bear to bull.

As a share of total spend, Tools and refills rises from 38.6% bear to 61.6% bull, while Field teams and Tech and audits both shrink as a share (28.4% to 10.3%, and 16.2% to 5.1% respectively) because these two lines are the most fixed-cost-heavy and therefore dilute fastest as the member base scales up in the bull case. This is the shape a tools-and-status programme should have: the variable, member-facing cost dominates at scale, and the fixed administrative and measurement overhead becomes a shrinking share of a larger base.

### 11.5 Year 1 versus Year 2

The rollout plan (detailed by quarter in §12) spends ₹6.81 crore in Year 1, covering the pilot and scale phases, and ₹19.15 crore in Year 2, covering the national phase, both inside the base-case envelope in every quarter [M c4.year1_spend_cr] [M c4.year2_spend_cr] [T7].

| Year | Spend (₹ crore) | Share of two-year total |
|---|---|---|
| Year 1 (Q1 to Q4) | 6.81 | 26.2% |
| Year 2 (Q5 to Q8) | 19.15 | 73.8% |
| Two-year total | 25.96 | 100% |

*The spend is heavily back-loaded because member growth itself is back-loaded: the ramp curve (A37a to A37h) puts only 3% of steady-state members active in Q1 and 100% active by Q8, so the bulk of per-member cost, which scales with active members, lands in Year 2.*
*Source: [T7]; [M c4.year1_spend_cr]; [M c4.year2_spend_cr]; [A37a] to [A37h].*

The deck's S2 budget panel (P7) shows the Year 2 figure, ₹21.99 crore rounded to the base-case annual spend at full national coverage, because Year 2 is the first year the programme runs at the steady-state cost structure this section derives; Year 1's lower figure reflects the ramp, not a different cost structure.

### 11.6 What moves break-even most: the tornado

The model varies one assumption at a time, holding every other assumption at its base value, and records how far the base-case break-even (4.4 tyres) moves at that assumption's own bear and bull values. The largest single-assumption swing by a clear margin is the contribution margin on the company's net realisation (A30), which moves break-even from 3.9 tyres at the bull end of A30's own range to 5.1 tyres at the bear end, a swing of 1.2 tyres, roughly 2.8 times the size of the next-largest swing [A30] [T6].

| Rank | Assumption | Label | Break-even low | Break-even high | Swing |
|---|---|---|---|---|---|
| 1 | A30 | Contribution margin on the company's net realisation | 3.9 | 5.1 | 1.2 |
| 2 | A27 | Weighted average replacement tyre MRP | 4.1 | 4.8 | 0.7 |
| 3 | A20 | Tool credit per logged referral | 4.3 | 4.7 | 0.4 |
| 4 | A29 | Channel margin (distributor and retailer) on the ex-GST price | 4.3 | 4.7 | 0.4 |
| 5 | A06 | Coverage cap: members divided by universe at steady state | 4.4 | 4.7 | 0.4 |
| 6 | A09 | One-time tools per member, Tier 2 (Eurogrip's share) | 4.3 | 4.6 | 0.3 |

*Each row isolates one assumption; the break-even swing is the distance between running the model at that assumption's bear value and its bull value, with every other assumption held at base. This is why the six swings do not sum to the full bear-to-bull range in §11 of the headline table: that range moves every assumption together, not one at a time.*
*Source: [T6]; assumption register.*

The contribution margin on the company's net realisation (A30) is the top driver because it sits in the denominator of the break-even formula itself (§11.7), so a percentage-point change in A30 changes every tyre's contribution directly, while the other five assumptions each affect either the numerator (spend) or a different part of the denominator (price net of GST and channel margin, or member count) by a smaller proportional amount. The weighted average replacement tyre MRP (A27) is the second-largest driver because it is the other half of the contribution-per-tyre calculation; together, A30 and A27 account for 1.9 of the 2.3-tyre total swing across all six ranked assumptions, confirming that break-even is overwhelmingly a pricing and margin question, not a programme-design question, once the five budget lines in §11.4 are fixed.

### 11.7 The moneyshot

"A member shop needs 4.4 extra Eurogrip tyres a year, one every 11.7 weeks, for the whole programme to pay for itself." [M c4.be.base] [M c4.weeks.base]. This is the single largest numeral in the deck (80 pt, card named CARD: MONEYSHOT on S2 panel P5), and it is constructed to claim no uplift: it states the bar the pilot must clear, not a forecast that the pilot will clear it.

The formula is break-even = steady-state annual programme spend ÷ members ÷ contribution per tyre [M c4.spend_cr] [M c4.members_lakh] [T5]. Showing the base-case arithmetic once: spend is ₹21.99 crore, which is ₹21,99,22,208 at the Indian grouping (1 crore = 1,00,00,000 rupees); members is 1.1625 lakh, which is 1,16,250 shops; dividing spend by members gives ₹1,891.37 a member a year. Dividing that figure by the base-case contribution per tyre, ₹427.37 [T5], gives 4.4266, which rounds to the 4.4 extra tyres a year this document and the deck both state [M c4.be.base].

Contribution per tyre is itself a three-step build from the weighted average replacement tyre MRP (A27), not a single sourced figure: the MRP is divided by 1 plus the GST rate to reach the net-of-tax realisation, that figure is reduced by the channel margin the distributor and retailer keep (A29), and the result is multiplied by the contribution margin on the company's own net realisation (A30) to reach the contribution the company earns per tyre.

| Step | Bear | Base | Bull |
|---|---|---|---|
| Weighted average replacement tyre MRP (₹) [A27] | 1,900 | 2,050 | 2,200 |
| GST rate [A28] | 18% | 18% | 18% |
| Net realisation per tyre, ex-GST (₹) | 1,610 | 1,737 | 1,864 |
| Channel margin kept by distributor and retailer [A29] | 22% | 18% | 15% |
| Net realisation after channel margin (₹) [T5] | 1,256 | 1,425 | 1,585 |
| Contribution margin on net realisation [A30] | 26% | 30% | 34% |
| Contribution per tyre (₹) [T5] | 327 | 427 | 539 |

*This table unpacks the single "contribution per tyre" row already carried in the headline table (§11) into the four assumptions that build it, so the moneyshot's denominator is traceable to A27 through A30 rather than treated as a single opaque model output.*
*Source: [A27]; [A28]; [A29]; [A30]; [T5].*

| Scenario | Spend (₹ crore) | Members (lakh) | Spend per member (₹/year) | Contribution per tyre (₹) | Break-even (tyres/member/year) | One tyre every (weeks) |
|---|---|---|---|---|---|---|
| Bear | 10.29 | 0.27 | 3,811 | 327 | 11.7 | 4.5 |
| Base | 21.99 | 1.16 | 1,891 | 427 | 4.4 | 11.7 |
| Bull | 29.20 | 2.43 | 1,202 | 539 | 2.2 | 23.3 |

*Spend per member is the intermediate step in the break-even formula (spend divided by members), shown here before the final division by contribution per tyre, so the two-step arithmetic in the paragraph above can be checked against each scenario, not only the base case.*
*Source: [M c4.spend_cr]; [M c4.members_lakh]; [T5]; [M c4.be]; [M c4.weeks].*

The bear case states a higher bar, 11.7 extra tyres a year, because bear-case spend per member is higher (fewer members absorbing a smaller but still substantial field and tech fixed cost) while bear-case contribution per tyre is lower (the weighted average replacement tyre MRP, channel margin and contribution margin assumptions are all set to their least favourable values together in the bear scenario). The bull case states the easiest bar, 2.2 extra tyres a year, roughly one every 23.3 weeks, for the same reason in reverse. The honesty of this moneyshot rests on what it does not claim: it does not say the pilot will produce 4.4 extra tyres a member; it says that is the number of extra tyres a member needs to produce for the programme to have paid for itself, and §12 and §13 describe exactly how the pilot measures whether that happens.

### 11.8 Deadweight comparison: the honest bar against the obvious scheme's hidden cost

The obvious alternative, a cash-per-tyre coupon scheme, was costed in §9 to isolate its deadweight share, the fraction of its spend that rewards tyres that would have sold through that shop anyway, with no change in mechanic behaviour. The model puts that scheme's base-case cost at ₹41.70 crore a year, rewarding 52.1 lakh tyres, of which 90.9% (rounds to 91%) would have sold anyway [T9] [M c4.cash_scheme].

| Design | Annual cost (₹ crore, base case) | What it measures | Measurability advantage |
|---|---|---|---|
| Obvious cash-per-tyre scheme | 41.70 | Tyres sold at a stocking shop (a sales record) | Cannot distinguish a rewarded sale from a sale that would have happened anyway; 90.9% deadweight [T9] |
| Recommended programme (this design) | 21.99 | Logged recommendations against a tyre serial, plus a mystery-audit lift over control districts | States an honest break-even bar (4.4 extra tyres a member) that claims zero assumed uplift, and measures the actual lift through a matched-district experiment (§13) |

*The comparison is not only that the recommended design costs less (₹21.99 crore versus ₹41.70 crore in the base case); it is that the cash scheme's own cost structure makes 91% of its spend unmeasurable as incremental, while the recommended design's break-even bar and audit design are built to measure incrementality directly.*
*Source: [T9]; [M c4.cash_scheme]; [T4]; §9 of this document (writer B).*

A cash-per-tyre scheme sized at the same ₹21.99 crore the recommended design actually spends would reward roughly 27.5 lakh tyres at the same ₹80 coupon rate [A34], of which, at the same 90.9% deadweight share, about 25.0 lakh tyres would be rewarded without any behaviour change at all. The recommended design's equivalent exposure is bounded instead by the moneyshot: it spends to equip 1.16 lakh shops and states plainly, in the open, the exact number of extra tyres each shop needs to produce for that spend to have been worth it, a claim a judge, a pilot district or Eurogrip's own finance team can check against the retailer app's logged data, not an assumption buried inside an unmeasured coupon redemption rate.

The deeper reason the two designs differ on measurability, not just on cost, is what each one actually records. A cash coupon redemption is a sales event: the retailer app, or any point-of-sale system, can confirm a tyre left the shop and a coupon was claimed, but it cannot distinguish a rider who would have bought that tyre at that shop regardless from a rider who bought it because the shop pushed for it. The recommended design's logged code, by contrast, is tied to a named mechanic's recommendation at the moment it is made, before the retailer transaction completes, and that same mechanic's unprompted recommendation rate is separately checked against matched control districts that received no programme at all (§13). The cash scheme has no equivalent control group built into its own mechanics; its 90.9% deadweight estimate in this document is itself a model-based inference from purchase-frequency assumptions (A35, A36), not something the scheme's own operating data could ever confirm or deny once it is actually running. This is the measurability argument in its sharpest form: the obvious scheme's main weakness is not only that it is expensive, it is that it would keep running for years without ever generating the evidence needed to know whether it worked.

### What this section establishes, and what it does not

- It establishes the full base-to-bull cost structure of the recommended programme: envelope, spend, five budget lines, cost per member by tier, and the Year 1 to Year 2 split, each traced to a named assumption or model output.
- It establishes the moneyshot with its formula shown in full, including the base-case arithmetic step by step, so the 4.4 extra tyres a year figure is reproducible, not asserted.
- It establishes that the contribution margin on the company's net realisation (A30) is the single assumption most likely to move the break-even bar, which is the figure the pilot's financial sensitivity work should watch most closely.
- It establishes, through the deadweight comparison, why an honest break-even bar on a measurable design is a stronger answer to the brief's measurability criterion than a cheaper-looking but largely unmeasurable cash scheme.
- It does not establish that the pilot will clear the 4.4-tyre bar; that is an empirical question §12 and §13 are designed to answer, not a claim this section makes.
- It does not treat the bear-to-bull range as a probability distribution with a most-likely point estimate narrower than the full range; the range is carried as three scenarios throughout, per the style contract.
- It does not claim the five budget lines are the only possible way to spend the envelope; they are the five named lines the model and the deck carry throughout the build, chosen because each maps to one of the programme's own design mechanisms (tools and consumables, visibility items, training, field operations, technology and measurement) rather than to a generic marketing-budget category.

Exhibit for the deck: S2 P5 (CARD: MONEYSHOT); S2 P7 (budget donut); Appendix A2 (tornado and scenario table).

## 12. Two states, then eight, then all of India: three gates in 24 months decide whether more money is spent

**Answer.** The programme rolls out in three phases over eight quarters: a two-state pilot in Q1 to Q2, an eight-state scale phase in Q3 to Q4, and a national phase across all states through the distributor network in Q5 to Q8, with a go or no-go gate at the end of each phase [T7]. Every phase boundary is also a spending boundary, which is the plan's own device for keeping the decision to spend more money separate from the decision to keep running the programme at its current size. Tamil Nadu is Pilot A and Uttar Pradesh is Pilot B, a result the pilot-state rule produces from real evidence, not from the plan's own default assumption alone [M c4.pilot_states]; the two states together give the pilot both a deep, de-risked market to prove the mechanics work and a large, thin-presence market to prove they also work where the company cannot lean on an existing retail footprint. Members grow from 0.03 lakh in Q1 to 1.16 lakh at full national steady state in Q8, and quarterly spend grows from ₹0.91 crore to ₹5.50 crore over the same window [T7], a path that is deliberately an S-curve rather than a straight line. Enrolment runs through the distributor network already in place, with a named set of parties, TVS Srichakra's aftermarket team, distributors, retailers, the audit agency and the training partner, each carrying a defined role across enrolment, logging, fulfilment, training, auditing and fraud monitoring.

### 12.1 Three phases, three gates

The rollout is sequenced deliberately from the smallest, most controllable footprint to the largest, so that every design assumption this document carries is tested at a small scale before it is trusted at a national one.

| Phase | Quarters | Coverage | Purpose | Gate to pass before the next phase |
|---|---|---|---|---|
| Pilot | Q1 to Q2 | 2 states (Tamil Nadu, Uttar Pradesh), treated districts vs matched control districts | Prove engagement and advocacy lift; run the tool-credit vs cash-equivalent reward-currency arm test | G1, end of Q2 |
| Scale | Q3 to Q4 | 8 states covering the largest share of the two-wheeler parc, selected from VAHAN registrations | Prove cost per member at volume, distributor-led enrolment | G2, end of Q4 |
| National | Q5 to Q8 | All states, through the distributor network | Steady state; annual brand-track re-run | G3, end of Q8 |

*Each phase is a go or no-go decision, not an automatic continuation: the budget committed to the next phase is released only after the prior phase's gate is passed, which is why §12.6 states each gate's exact threshold rather than describing the rollout as a single continuous ramp.*
*Source: PLAN.md §2.2.7; [T7].*

| Quarter | States with an active member base | Cumulative coverage logic |
|---|---|---|
| Q1 to Q2 | 2 (Tamil Nadu, Uttar Pradesh) | Pilot only; no member outside the two pilot states |
| Q3 to Q4 | 8 | The 2 pilot states plus 6 further states selected from VAHAN registration volume at the time scale-phase planning begins |
| Q5 to Q8 | All states | Remaining states onboarded through the distributor network in sequence, reaching full national coverage by Q8 |

*The state count is a coverage measure, not a member-count measure: a state can be "active" from the start of a phase while its own member base is still ramping up inside that state, per the ramp curve in §12.5. This table should be read alongside §12.5's member and spend figures, not in place of them.*
*Source: PLAN.md §2.2.7.*

### 12.2 The pilot-state rule, applied with evidence

PLAN.md §2.2.7 fixes the pilot-state rule before any state-level data is examined: Pilot A is the state with the highest Eurogrip presence among the top-10 two-wheeler registration states, and Pilot B is the state with the largest two-wheeler registrations where Eurogrip's presence is weaker. Applying real research evidence (R-C, reproduced here from this document's own §6.3) rather than the plan's own stated default, both of the plan's defaults are confirmed: Tamil Nadu as Pilot A and Uttar Pradesh as Pilot B [M c4.pilot_states].

| Evidence | Tamil Nadu | Uttar Pradesh |
|---|---|---|
| Two-wheeler registration rank among sourced states | 5th (16,49,960, 7.6% share) | 1st (29,95,980, 13.8% share) |
| Eurogrip headquarters, main plant, R&D centre | Yes, Madurai | No |
| Eurogrip signature stores | Four, opened May to Jul 2025, Chennai (Velachery, Selaiyur, Villivakkam, Perambur) | None found |
| Management statement | COO: Chennai is an important market for the company | None found |
| Overall presence read | Longest-standing, deepest presence (home state, four stores, a named management quote) | Thinner, more recent presence against the largest registration base |
| Pilot role | Pilot A (highest presence among top-10 registration states) | Pilot B (largest registrations, weaker presence) |

*This table is reproduced from this document's own §6.3 (writer B), because the pilot-state result is both a research finding and a rollout-design input; carrying the same evidence table here keeps §12's rollout logic traceable to the same facts rather than restating the conclusion without its support.*
*Source: [RC18]; [RC32] to [RC36]; PLAN.md §2.2.7; [M c4.pilot_states].*

The pilot-state rule's outcome matters for cost as well as credibility: piloting in Tamil Nadu lets the programme lean on Eurogrip's own deepest distribution and retail presence to de-risk the enrolment and logging mechanics before they are asked to work in a state, Uttar Pradesh, where the company's presence is thinner but the addressable two-wheeler parc, and therefore the addressable mechanic and puncture-shop universe, is the largest in the country. A pilot that only tested the easy state would never learn whether the design works where Eurogrip's own retail footprint cannot carry it; a pilot that only tested the hard state would risk a slow, uncertain start with no fallback evidence of what the design looks like when it works. Running both together, as matched treated districts within each state against matched control districts in the same state, is what lets the difference-in-differences design in §13 isolate the programme's effect from each state's own underlying market conditions.

### 12.3 Distributor-led enrolment operations

Enrolment runs through Eurogrip's existing distributor network rather than through a new, parallel sales force, because the distributor relationship with mechanics and retailers already exists and a new recruitment channel would duplicate cost the programme does not need to carry. The mechanics of enrolment are as follows. Distributor sales staff visit mechanics and puncture shops already inside their territory and enrol them on the spot, a visit priced in the model at A17's enrolment cost per new member (₹120 to ₹250 depending on scenario), reasoned from field-sales day-rate benchmarks divided by an assumed number of enrolment visits a staff member completes in a day. A missed-call or WhatsApp self-enrolment path runs in parallel, so a mechanic who hears about the programme from a rider, a board at a neighbouring shop, or word of mouth does not have to wait for a distributor visit to join, which is also the control named against risk R04 (distributor apathy, §14). Distributors are paid a per-enrolment incentive and are reviewed against monthly enrolment targets, keeping the channel's own commercial interest aligned with programme growth rather than treating enrolment as an unpaid extra task layered onto the distributor's core stocking and selling work.

| Enrolment channel | How it works | Cost driver | Risk it mitigates |
|---|---|---|---|
| Distributor sales-staff visit | Staff member visits a mechanic or puncture shop in their territory and enrols on the spot | A17 per-enrolment incentive | n/a, the primary channel |
| Missed call or WhatsApp self-enrolment | Mechanic initiates enrolment without waiting for a visit | Low, messaging cost only (A19m) | R04, distributor apathy |
| Monthly enrolment target review | Distributor's enrolment pace reviewed against a target each month by the programme team | Field teams fixed cost (A18) | R04, distributor apathy |

*Source: PLAN.md §2.2.5; §2.2.7; [A17]; [A19m]; [A18]; [T12] risk R04.*

Enrolment itself is only the first of the five steps in the recommendation loop described in document §10: once a mechanic is enrolled, a rider's purchase still has to route through a retailer who logs the code, which is why §12.4's RACI table gives retailers a Responsible role specifically on code logging rather than on enrolment. The distributor's commercial relationship with both the mechanic (through enrolment and ongoing tool and consumable supply) and the retailer (through the existing stocking relationship) is what makes a distributor-led model workable at the scale the national phase requires: a central team alone could not visit 1.16 lakh shops directly, but the existing distributor network already reaches most of this universe for an entirely different commercial reason, stocking and selling Eurogrip tyres, and the programme rides on that existing reach rather than building a parallel one.

### 12.4 RACI: who runs what

PLAN.md §2.2.12 names the parties running the programme: TVS Srichakra's own aftermarket team, the distributor network, retailers (through the retailer app), a third-party audit agency, and a training partner delivering the 2-hour tyre-fitment course.

| Activity | TVS Srichakra aftermarket team | Distributors | Retailers | Audit agency | Training partner |
|---|---|---|---|---|---|
| Programme design and gate decisions | A | C | I | I | I |
| Member enrolment | A | R | C | I | I |
| Code logging at point of sale | A | I | R | I | I |
| Tool and consumables fulfilment | A | R | C | I | I |
| Tier review and re-qualification | A | C | I | I | I |
| 2-hour fitment course delivery | A | C | I | I | R |
| Mystery-rider audits | A | I | I | R | I |
| Brand-track re-survey (annual) | A | I | I | I | I |
| Fraud monitoring (code caps, distance flags) | R | C | I | I | I |

*R = Responsible (does the work), A = Accountable (owns the outcome and the gate decision), C = Consulted, I = Informed. TVS Srichakra's aftermarket team is Accountable for every row because the programme is theirs end to end; it is also Responsible for fraud monitoring because the audit trail (serial caps, distance flags, IVR call-backs) is an internal control function the model prices as part of the tech and audits budget line, not an outsourced one. The brand-track re-survey is run by Eurogrip's own market-research relationship, not the audit agency used for mystery-rider visits, which is why the audit agency is marked Informed, not Responsible, on that row.*
*Source: PLAN.md §2.2.12; §2.2.5 (fraud controls); §2.2.9 (measurement roles).*

### 12.5 Quarter by quarter: members and spend

| Quarter | Members (lakh) | Spend (₹ crore) |
|---|---|---|
| Q1 | 0.03 | 0.91 |
| Q2 | 0.07 | 1.05 |
| Q3 | 0.29 | 1.95 |
| Q4 | 0.52 | 2.90 |
| Q5 | 0.76 | 3.84 |
| Q6 | 0.93 | 4.55 |
| Q7 | 1.10 | 5.26 |
| Q8 | 1.16 | 5.50 |
| Year 1 (Q1 to Q4) | | 6.81 |
| Year 2 (Q5 to Q8) | | 19.15 |

*Members in each quarter are the base-case steady-state member count (1.1625 lakh) multiplied by that quarter's ramp share (A37a to A37h, rising from 3% in Q1 to 100% in Q8); spend tracks members closely but not exactly, because the fixed field and tech lines (A18, A19) are incurred from Q1 regardless of how few members are active yet.*
*Source: [T7]; [A37a] to [A37h]; [M c4.rollout].*

The quarter-by-quarter member curve is deliberately an S-curve, not a straight line: only 3% and 6% of steady-state members are active in Q1 and Q2 because the pilot phase is designed to prove the model works in two states before any scale-phase budget is committed, a jump to 25% in Q3 as distributor-led enrolment turns on across eight states at once, and a final climb from 65% in Q5 to 100% in Q8 as the national phase brings every remaining state onto the distributor network in sequence.

### 12.6 Gate definitions: the bar to pass before more money is spent

| Gate | Timing | Threshold | What happens if it is not met |
|---|---|---|---|
| G1 | End of Q2 | Monthly active share ≥ 60% [A23]; advocacy lift ≥ 15 points over matched control districts [A24] | Fails on activity but passes on advocacy: fix onboarding and continue; fails on advocacy: stop at 2 states |
| G2 | End of Q4 | Code-linked tyres per member per year ≥ the model's break-even figure (4.4 extra tyres, base case) [M c4.be.base] | Scale-phase spend is not released into the national phase until sales performance is reviewed against break-even |
| G3 | End of Q8 | Annual brand-track re-survey shows stocking and recommendation up versus the pre-programme baseline | National phase is not called complete without this re-run; A32 reserves the annual budget line for it every year thereafter |

*Each gate pairs a specific, pre-committed threshold with a specific consequence, so that "more money is spent" is a decision made against a stated number agreed before the pilot starts, not a judgement call made after the fact once the numbers are known.*
*Source: PLAN.md §2.2.9; §2.2.13; [A23]; [A24]; [M c4.be.base]; [A32].*

The G2 threshold deserves one clarification: PLAN.md §2.2.9 states the gate as "code-linked tyres per member per year ≥ break-even," and this document uses the base-case break-even figure, 4.4 extra tyres, as that threshold, rather than the bear-case figure of 11.7. This is a deliberate reading of the plan, not an arbitrary choice: the base case is the scenario the programme is actually budgeted and staffed against in Year 2 (§11.5), so the gate should test performance against the plan the programme is actually running, not against a bear-case bar nobody is funding it to clear. If sales performance by Q4 clears the bear-case bar of 11.7 extra tyres a member but not the base-case bar of 4.4, the design would in practice already be performing far above what either bar implies, since 11.7 is a harder target than 4.4; this ordering is stated once here to avoid any reader confusing a lower break-even number with a lower bar: fewer extra tyres needed is an easier bar to clear, not a harder one, because break-even here is a requirement on the member, not a target the company sets for itself to beat.

By the end of Q4, the scale phase has run for two full quarters across eight states, long enough for the retailer app's logged-code data to show a code-linked-tyres-per-member rate that is not merely the first few weeks of early adopters, which is why the gate sits at the end of the scale phase rather than inside it. A G2 review that found sales performance comfortably above 4.4 tyres a member but a monthly active share that had slipped below the G1 bar of 60% would be read as a different kind of problem than a G2 review that found activity holding steady but sales below break-even; the first points to member engagement cooling as the base grows, the second points to the economics themselves, and the model's four measurement layers (§13) are built precisely so a gate failure can be diagnosed by layer rather than treated as one undifferentiated miss.

The practical governance point behind all three gates is the same: each gate converts a judgement call, whether to keep funding the programme, into a pre-committed decision rule, agreed before the pilot starts and before anyone has an incentive to read ambiguous early results more favourably than the data supports. This is also why the gates sit inside this document rather than being left to a verbal understanding between the programme team and Eurogrip's leadership: a written, numbered threshold is the only version of a gate that a judge, an auditor, or a successor programme team two years from now can hold the programme to.

### What this section establishes, and what it does not

- It establishes the full three-phase, eight-quarter rollout with its member and spend path by quarter, traced to the ramp assumptions (A37a to A37h) and the rollout model output (T7).
- It establishes, with real evidence rather than only the plan's stated default, that Tamil Nadu is Pilot A and Uttar Pradesh is Pilot B under the fixed pilot-state rule.
- It establishes the enrolment operating model (distributor-led, with a self-enrolment fallback) and a named RACI across the five parties running the programme.
- It establishes each gate's exact threshold and consequence, so that continuing to the next phase is a pre-agreed decision rule, not a discretionary call.
- It does not establish that the eight scale-phase states are named yet; PLAN.md §2.2.7 defers that selection to R-C's VAHAN-based state ranking at the time scale-phase planning begins, and this document does not invent a list of eight states where none has been selected.
- It does not assume every gate will be passed; §15 restates the kill and pivot criteria that apply if a gate is not met, and this section's job is only to state what each gate tests, not to predict the outcome.
- It does not describe the training partner, the audit agency or the eight scale-phase states as named organisations or states; the RACI table in §12.4 and the state table in §12.1 describe roles and a selection method, not a named shortlist, because no lane in this research deliverable sourced or selected specific vendor names or a specific eight-state list, and inventing one here would break the no-invented-names rule this deliverable follows throughout.

Exhibit for the deck: S2 P6 (24 months, three gates, Gantt with gate diamonds); Appendix A1 (pilot-states caption).

## 13. Four layers of measurement and one experiment show whether recommendations moved, at a known cost per audit

**Answer.** The programme measures itself through four layers, activity, advocacy, sales and brand, each with its own metric, data source and gate value, rather than through a single proxy number (PLAN.md §2.2.9). The core experiment is a matched-district difference-in-differences design run during the pilot, comparing treated districts in Tamil Nadu and Uttar Pradesh against control districts matched on two-wheeler registrations and baseline Eurogrip sell-in [RH24] [RH25] [RH26], the same two pilot states described in §12. The mystery-rider audit that feeds the advocacy layer runs 140 shops per arm per round, 560 audits a year at steady state, for a known annual cost of ₹3.92 lakh [M c4.audit.n_per_arm] [M c4.audit.audits_per_year] [M c4.audit.cost_lakh] [T8], derived from a two-proportion sample-size formula rather than a round number chosen for convenience. A parallel reward-currency arm test, tool credits against a cash equivalent of the same value, tests the Kano hypothesis flagged in document §10 directly, rather than assuming it, and the whole measurement system together costs about 1.5% of the base-case programme's own annual spend.

### 13.1 The four-layer KPI tree

Each layer answers a distinct question: whether a member is doing anything at all, whether riders actually hear the recommendation, whether that recommendation turns into a logged tyre sale, and whether any of it shows up in the brand's own long-run tracking.

| Layer | Metric (slide short form) | Definition | Source | Gate value |
|---|---|---|---|---|
| Activity | Monthly active | Members with at least one logged code or catalogue redemption in the month, divided by total members | Retailer app plus programme log | G1 ≥ 60% [A23] |
| Advocacy | Mystery audit | Share of audited shops that name Eurogrip unprompted when a rider asks which tyre to buy, member versus control districts | Audit agency | G1: plus 15 points versus control [A24] |
| Sales | Code-linked tyres | Tyres logged with a member code, per member, per year | Retailer app | G2 ≥ break-even (4.4 extra tyres, base case) [M c4.be.base] |
| Brand | Brand re-survey | Eurogrip's own mechanic brand-track study, re-run: awareness, stocking, recommendation | Eurogrip | G3: stocking up versus the pre-programme baseline |

*The four layers are ordered deliberately from the easiest to measure and earliest to appear (activity, inside the first month) to the hardest to measure and slowest to appear (brand, inside the first year), which is why the gates in §12.6 test the earlier layers first and the brand layer only at G3.*
*Source: PLAN.md §2.2.9; [A23]; [A24]; [M c4.be.base].*

| If this layer is weak | The likely explanation | The indicated response |
|---|---|---|
| Activity (monthly active below 60%) | Onboarding friction, or the starter kit is not giving members a recurring reason to log a code | Fix onboarding and the Tier 1 to Tier 2 ladder's early engagement design, per the G1 pivot rule in §12.6 |
| Advocacy (lift below 15 points) | Members are logging codes without genuinely changing what they tell riders, or the audit itself is under-powered | Treat as the more serious failure; per §12.6 and §15, this is the branch that stops expansion at two states |
| Sales (code-linked tyres below break-even) | The loop is working but not at the volume the unit economics require | Review at G2; this is a cost-structure question, not an engagement question, and the tornado in §11.6 names where to look first |
| Brand (stocking and recommendation flat at re-survey) | The programme is operating but has not yet moved the underlying brand metrics the brief's judging criteria ultimately care about | Reviewed at G3; triggers the annual brand-track-skipped risk control (R10, §14) if the re-survey itself was not run |

*This table is a diagnostic aid, not a prediction: it states what each layer's weakness would most plausibly mean and which response this document and PLAN.md already commit to, so that a gate failure in practice is read against a pre-written diagnosis rather than interpreted fresh each time.*
*Source: PLAN.md §2.2.9; §2.2.13; §12.6; §14 of this document.*

The KPI tree is a balanced scorecard applied to a single programme rather than to a whole company: Activity and Sales are operational measures the programme's own systems record automatically, Advocacy is an external, audited measure designed specifically to catch the gap between what a shop reports about itself and what an unprompted rider actually hears, and Brand is the slowest-moving, most strategic measure, the one the brief's own judging criteria ultimately care about, awareness, stocking and recommendation moving in Eurogrip's favour. No single layer can stand in for the other three: a programme could show high monthly activity (members logging codes) while advocacy stays flat (if members are logging codes without genuinely recommending more), which is exactly the gap the mystery-rider audit exists to catch.

### 13.2 Difference-in-differences: the pilot's core experiment

The pilot's core experiment compares two groups across two time points: treated districts, where the programme runs, and matched control districts in the same state, where it does not, each measured before the pilot starts and again at its end. Matching control districts to treated districts on two-wheeler registrations and baseline Eurogrip sell-in is the design step that makes the comparison credible, because it rules out the simplest alternative explanation for any difference observed, that the treated districts were simply larger, denser two-wheeler markets to begin with. The method itself, comparing a before-after change in a treated group against the same before-after change in a matched control group, is the standard difference-in-differences design described in the econometrics literature cited by this document's methods lane: Angrist and Pischke's textbook names differences-in-differences as one of its core methods for using policy or programme changes as natural experiments [RH24], though the exact chapter and page range for the technique inside that specific textbook could not be confirmed from the publisher's own page and is noted as a gap rather than invented [RH25]; an accessible, non-paywalled explainer of the same treated-versus-control, before-versus-after logic, consistent with the textbook's treatment, was used as the cross-check [RH26].

| Design element | Treated districts | Control districts |
|---|---|---|
| Programme presence | Programme runs in full, members enrolled and active | No programme presence |
| Matching criteria | Matched to control on two-wheeler registrations and baseline Eurogrip sell-in | Matched to treated on the same two criteria |
| Measured before (baseline) | Mystery-audit unprompted recommendation rate, pre-pilot | Same metric, same timing |
| Measured after (pilot end) | Mystery-audit unprompted recommendation rate, end of Q2 | Same metric, same timing |
| What the design isolates | The difference between the treated group's own before-after change and the control group's own before-after change, net of any market-wide trend both groups shared | n/a, the comparator |

*Source: [RH24]; [RH25]; [RH26]; PLAN.md §2.2.9.*

The parallel-trends assumption behind this design, that absent the programme, treated and control districts would have moved together, is the one the matching step on two-wheeler registrations and baseline sell-in is meant to protect, though no amount of matching can prove the assumption holds; it can only make it more plausible than an unmatched comparison would. This document states that limitation plainly rather than presenting the difference-in-differences design as a guarantee of causal attribution.

A difference-in-differences design is the right choice for this pilot specifically because the alternative, a single before-after comparison inside the treated districts alone, would attribute to the programme any change that was actually happening everywhere, for example a general seasonal rise in two-wheeler tyre replacements, a state-wide GST-driven price shift (A28), or a broader market trend that has nothing to do with mechanic advocacy. The matched control group exists to net that shared trend out, isolating the portion of the change in the treated districts that the control districts did not also experience. This is also why the control districts must be matched, not simply any other districts in the same state: an unmatched control drawn from a district with a very different two-wheeler density or a very different starting Eurogrip presence would itself be confounded with the comparison, reintroducing exactly the bias the design exists to remove.

### 13.3 The mystery-rider protocol

A mystery-rider audit sends an unannounced visitor, posing as a rider who needs a tyre, into a randomly drawn sample of member and control shops each round, and records whether the shop names Eurogrip unprompted, rather than only after the visitor asks about Eurogrip by name, which would defeat the point of testing unprompted recommendation in the first place. The protocol is deliberately unannounced and run by a third-party agency with rotating personnel, drawing its sample randomly each round from the full member list rather than announcing visits in advance, which is also the stated control against risk R07, audit gaming (§14): a shop that knew in advance which visits were audits could behave differently only during those visits, biasing the measured advocacy rate upward without any real change in day-to-day recommendation behaviour. The protocol's own methodological ancestry sits in the mystery-shopping literature rather than in market research designed specifically for brand-recommendation testing: the clearest empirical reliability evidence located is a university thesis finding mystery-shopper reports were about 71% accurate without time pressure and about 48% accurate under time pressure [RH21], and a separate working paper frames the method as a form of concealed observation that gives a snapshot rather than a guaranteed representative sample of every service encounter [RH22]. This document states plainly that the audit design is methodologically analogous to, not identical to, these published service-quality mystery-shopping studies, since no peer-reviewed study validates mystery shopping specifically for an unprompted brand-recommendation test of the kind this programme runs [RH20] [RH23].

| Methodological question | What this document found | How the gap is handled |
|---|---|---|
| Exact chapter and page range for difference-in-differences inside Angrist and Pischke's textbook | Publisher's own table of contents was cut off before the relevant section; no fuller listing located | Cite the book's stated scope and method name, not a page number; cross-check against an open lecture-note explainer of the same method [RH25] [RH26] |
| Peer-reviewed validity study for mystery shopping as an unprompted brand-recommendation test | Not located; available studies address general service-quality mystery shopping, not brand recommendation specifically | State the audit design as methodologically analogous, not identical, to the published literature [RH20] [RH23] |
| Empirical reliability figure for mystery-shopper reporting accuracy | A single university master's thesis, not a peer-reviewed journal article, reporting 71% accuracy without time pressure and 48% under time pressure | Carry the figure labelled as the best available evidence, not as an established industry standard [RH21] |

*Each row names a specific limit in the evidence this lane could locate, rather than letting the audit protocol read as more academically settled than it is; this is the same honesty convention document §0 states for the whole deliverable, applied here to the measurement methodology specifically.*
*Source: [RH20] to [RH26].*

### 13.4 Sample size and cost

The model sizes the mystery-audit sample using the standard two-proportion formula for detecting a difference between two rates: n = (z_alpha/2 + z_beta)^2 x [p1(1 - p1) + p2(1 - p2)] / (p1 - p2)^2, a form consistent with the textbook treatment of sample sizes for comparing two proportions, attributed in this lane's methods review to a widely cited third edition textbook on statistical methods for rates and proportions, with an earlier first edition of the same book cited independently and the exact page range across the two editions left unresolved rather than guessed at [RH27] [RH28]. Plugging in the baseline unprompted recommendation rate used for this calculation only, p1 = 0.20 [A25], and the target lift, 15 points, so p2 = 0.35 [A24], with a two-sided significance level of 0.05 (z_alpha/2 = 1.96) and 80% power (z_beta = 0.84), gives p1(1 - p1) = 0.16, p2(1 - p2) = 0.2275, and (p1 - p2)^2 = 0.0225; the formula's numerator, (1.96 + 0.84)^2 x (0.16 + 0.2275) = 7.84 x 0.3875 = 3.04, divided by 0.0225, gives approximately 135 shops per arm. The model reports 140 shops per arm [M c4.audit.n_per_arm], a round-up consistent with the standard practice of rounding a sample-size calculation up rather than down, and this document defers to the model's own reported figure as authoritative rather than forcing an exact match to the illustrative arithmetic shown here.

| Item | Value | Tag |
|---|---|---|
| Baseline unprompted recommendation rate (p1, for sample sizing only) | 20% | [A25] |
| Target advocacy lift (points) | 15 | [A24] |
| Implied treated-district rate (p2) | 35% | derived |
| Shops per arm per round | 140 | [M c4.audit.n_per_arm] [T8] |
| Audit rounds per year at steady state | 2 | [A31n] |
| Audits per year | 560 | [M c4.audit.audits_per_year] [T8] |
| Cost per audit (₹, base case) | 700 | [A31] |
| Audit cost per year (₹ lakh) | 3.92 | [M c4.audit.cost_lakh] [T8] |

*A25's 20% figure is used only to size the audit sample, not as a claim about Eurogrip's current unprompted recommendation rate; the brief itself says recommendations are "not much in favour" of Eurogrip without giving a number, and this document treats 20% as a conservative planning figure for the power calculation alone.*
*Source: [A25]; [A24]; [A31]; [A31n]; [M c4.audit]; [T8].*

| Measurement line | Annual cost (₹ lakh, base case) | Share of base-case programme spend (₹21.99 crore) |
|---|---|---|
| Mystery-rider audits | 3.92 | 0.18% |
| Brand-track re-survey | 30.00 | 1.36% |
| Total measurement cost | 33.92 | 1.54% |

*The entire four-layer measurement system, including the annual brand-track re-survey that gates G3, costs about 1.5% of the base-case programme's own annual spend, which is the practical answer to "at a known cost per audit" in this section's own title: the audit line alone costs ₹700 a visit and ₹3.92 lakh a year, a cost small enough relative to the programme's own budget that skipping it to save money, the exact failure risk R10 names, would not meaningfully change the programme's overall cost structure.*
*Source: [M c4.audit.cost_lakh]; [A32]; [M c4.spend_cr.base]; [T12] risk R10.*

### 13.5 The reward-currency arm test

A randomised arm test runs inside the pilot districts alongside the main difference-in-differences design: one set of treated districts pays referrals in tool credits, as the programme is designed throughout this document, and a second set pays an equal rupee value as a cash-equivalent reward instead, with districts assigned to one arm or the other at random. This directly tests the hypothesis document §10 flags under the Kano model, that cash functions as a performance attribute rivals can match while tools function as a basic need members value for reasons a rival's cash offer cannot easily replicate, rather than assuming the hypothesis is already proven.

The brief's own judging criterion names a shift in mechanic preference toward tools and equipment and brand visibility, away from pure cash, and PLAN.md §0.3's own golden rules caution against ever attaching an invented percentage to that shift or presenting it as a finding already confirmed by Eurogrip's own internal brand-track study, since the specific insight sentence making that exact claim is one of the brief's own struck-through lines and must never be presented as a finding. The reward-currency arm test exists precisely to generate real evidence for or against that preference shift, inside this programme's own pilot, rather than relying on the brief's struck insight or on the adjacent-category benchmarking in document §8 alone. If Arm 2 (cash equivalent) outperforms Arm 1 (tool credits) on referral volume, the honest response is not to suppress the result but to revisit the tier ladder's reward mix before the scale phase begins, since the programme's measurability advantage over the obvious cash scheme (§11.8) rests on paying in a currency members actually value more, not merely on paying in a currency that is cheaper to administer.

| Arm | Reward currency | Hypothesis under test | Districts |
|---|---|---|---|
| Arm 1 | Tool credits (the design's default) | Tools function as a basic need: referral volume holds or grows even without a cash alternative | Randomly assigned pilot districts |
| Arm 2 | Cash equivalent of the same rupee value | Cash functions as a performance attribute: referral volume rises further, or falls, if paid in cash instead | Randomly assigned pilot districts |

*The two arms are compared on the same metric, code-linked referrals per member, over the same pilot window, so the test produces a direct answer to whether the brief's own judging criterion (a shift toward tools and equipment, away from pure cash) actually changes mechanic behaviour, rather than only matching a stated preference in a survey.*
*Source: PLAN.md §2.2.9; §2.2.12 (Kano model); document §10 (writer B).*

### 13.6 Fraud controls (cross-reference)

Fraud controls for the logging mechanism itself, one credit per tyre serial, a monthly cap per member, random IVR call-backs to riders, a distance flag between retailer and mechanic beyond 15 km [A21], and a distributor audit of top earners each quarter, are described in full in document §10 (writer B) and are not repeated at length here; this section notes only that the same controls also protect the measurement system described above, since a fraudulent code-logging pattern would corrupt the Sales layer's code-linked-tyres metric in exactly the way the audit's unannounced, randomly sampled design protects the Advocacy layer from gaming. The measurement system and the fraud-control system share a single underlying design principle, that a metric is only as trustworthy as the process that generates it is hard to game, which is why the audit protocol's randomisation and the logging mechanism's serial-level controls are treated in this document as two instances of one idea rather than as two unrelated sets of rules.

### 13.7 Reporting cadence

| Cadence | What is reported | Audience |
|---|---|---|
| Monthly | Activity dashboard (monthly active share, by tier and state) | Programme team, distributors |
| Quarterly (pilot) / twice yearly (steady state) | Mystery-audit round results, treated versus control | Programme team, TVS Srichakra aftermarket leadership |
| Six-monthly | Tier review and re-qualification outcomes | All members, programme team |
| Annual | Brand-track re-survey results | Leadership, G3 gate review |
| At each gate (end of Q2, Q4, Q8) | Formal go or no-go review against the gate's threshold | Leadership |
| Ad hoc (fraud flags) | Any distance-flag or cap-breach alert from the logging system, reviewed as it occurs rather than batched into the monthly cycle | Programme team, distributor audit function |

*The reporting cadence intentionally runs faster than the rollout's own gate calendar for the two layers (activity, fraud flags) that can degrade quickly between gates, and only as slow as the gate calendar itself for the two layers (sales, brand) whose own underlying behaviour genuinely does not change meaningfully month to month.*

*Audit rounds step down from quarterly during the pilot to twice yearly at steady state [A31n], matching the general pattern of measuring more frequently while the design is least proven and less frequently once it is running at a stable national scale.*
*Source: PLAN.md §2.2.9; [A31n].*

### What this section establishes, and what it does not

- It establishes the full four-layer measurement system, with a definition, data source and gate value for each layer, so that "whether recommendations moved" has four separate, checkable answers rather than one.
- It establishes the difference-in-differences design with its matching criteria stated, and names the methodological gap (an unconfirmed exact chapter citation) honestly rather than hiding it.
- It establishes the audit's sample size and annual cost with the two-proportion formula shown explicitly, while deferring to the model's own reported sample size (140 per arm) as authoritative over the illustrative arithmetic (approximately 135) shown to demonstrate the method.
- It establishes the reward-currency arm test as a genuine, randomised test of the Kano hypothesis named in document §10, not a result already assumed true.
- It does not claim mystery shopping is a validated methodology for brand-recommendation testing specifically; it states the method's published reliability evidence comes from adjacent service-quality research, not from a study of this exact use case.
- It does not repeat the fraud-control mechanisms in full; those are described once in document §10 and cross-referenced here only where they protect the measurement system itself.
- It does not treat the measurement system's own cost (about 1.5% of base-case programme spend) as negligible simply because it is small in absolute rupee terms; it states the figure precisely so that a reader can judge for themselves whether skipping any part of it, the exact temptation risk R10 names, would meaningfully change the programme's budget at all.

Exhibit for the deck: S2 P8 (gates table); Appendix A4 (VALIDATE FIRST callout).

## 14. 10 ways the programme could fail, each paired with one control

**Answer.** The risk register names 10 ways the programme could fail, from a mechanic's enthusiasm fading after the starter kit to a rival copying the design once it is visible in the market, each paired one to one with a specific control, following the pre-mortem technique of imagining failure before it happens rather than discovering it afterward [RH29] [RH30]. The two highest-scoring risks by probability times impact are activity fading after sign-up (R03, probability 3, impact 3) and the retailer skipping code logging at the point of sale (R02, probability 3, impact 2) [M c4.risks] [T12], both of which sit at the member and retailer end of the loop, not at the measurement or competitive end. Every risk in the register carries a named control that is already built into the programme's design, cost structure or measurement system described in §11 to §13, rather than a control proposed as a future to-do with no owner or budget.

### 14.1 Pre-mortem framing

A pre-mortem asks a team, before a plan is executed, to treat the plan as already having failed and to write down the reasons, a technique first described in Gary Klein's 2007 Harvard Business Review article "Performing a Project Premortem" [RH29], on the reasoning that naming failure modes in advance surfaces risks that groupthink and sunk-cost momentum would otherwise suppress once a plan is already underway and has visible champions [RH30]. This document applies the same discipline to the Eurogrip mechanic advocacy programme specifically: each of the 10 risks below was written as a failure mode first, stated plainly as something that could go wrong, before the matching control was attached, rather than starting from a list of controls the design already includes and working backward to find a risk each one addresses.

### 14.2 The probability times impact heat map

Each risk in the register carries a probability score (1 low, 2 medium, 3 high) and an impact score on the same scale, scored against the programme as designed in §10 to §13, before any control is applied [M c4.risks].

| Probability \ Impact | Low (1) | Medium (2) | High (3) |
|---|---|---|---|
| High (3) | | R02 | R03 |
| Medium (2) | R06 | R01, R04, R05, R07, R09 | R08 |
| Low (1) | | R10 | |

*Reading the grid: R03 (activity fades) sits in the highest-risk cell, high probability and high impact; R02 (retailer skips logging) and R08 (app downtime) each combine a high score on one axis with a medium score on the other; the remaining seven risks cluster in the medium band on both axes or lower.*
*Source: [M c4.risks]; [T12].*

| Rank | Risk ID | Risk (short) | Probability | Impact | Score (P x I) |
|---|---|---|---|---|---|
| 1 | R03 | Activity fades | 3 | 3 | 9 |
| 2 | R02 | Retailer skips logging | 3 | 2 | 6 |
| 2 | R08 | App downtime | 2 | 3 | 6 |
| 4 | R01 | Code fraud | 2 | 2 | 4 |
| 4 | R04 | Distributor apathy | 2 | 2 | 4 |
| 4 | R05 | Rivals copy design | 2 | 2 | 4 |
| 4 | R07 | Audit gaming | 2 | 2 | 4 |
| 4 | R09 | Budget overrun | 2 | 2 | 4 |
| 9 | R06 | Tool resale | 2 | 1 | 2 |
| 9 | R10 | Brand-track skipped | 1 | 2 | 2 |

*The top five risks by this ranking, R03, R02, R08 and then the five-way tie at a score of 4, are the five the deck's Appendix A4 panel carries as numbered badges with their short controls; the ranking itself is the model's own ordering of the risk register, not a judgement call made for this document.*
*Source: [M c4.risks]; [T12]; deck panel A4 (PLAN.md §6.5).*

### 14.3 Risk categories: a MECE grouping

| Category | Risks | What the category has in common |
|---|---|---|
| Behavioural and engagement | R03 (activity fades), R06 (tool resale) | The member's own motivation to stay engaged, not an external actor's behaviour |
| Operational and channel | R02 (retailer skips logging), R04 (distributor apathy), R08 (app downtime) | A partner in the loop (retailer, distributor, or the app itself) not performing its role |
| Integrity and fraud | R01 (code fraud), R07 (audit gaming) | Deliberate gaming of either the reward mechanism or the measurement mechanism |
| Competitive | R05 (rivals copy design) | An external competitor's response to the programme's own visibility |
| Financial | R09 (budget overrun) | Cost control against the assumption register's own bear case |
| Measurement | R10 (brand-track skipped) | Whether the programme can prove its own effect at all |

*Grouping the 10 risks this way shows the register is not a random list: it covers every point in the loop described in document §10, from the member's own motivation through the channel partners who carry the loop, to the integrity of both the reward and the measurement systems, to the competitive and financial context the programme operates inside.*
*Source: [T12]; document §10 (writer B).*

### 14.4 The full risk to control table

Each of the 10 risks below is paired one to one with its control, reproduced in full from the risk register rather than the shortened deck labels, so the reasoning behind each control is visible in full.

| ID | Risk (in full) | P | I | Control (in full) |
|---|---|---|---|---|
| R03 | Initial sign-up enthusiasm fades once the starter kit is in hand and no further engagement follows. | 3 | 3 | Quarterly consumable refills create a recurring reason to log codes; the six-month tier review risks loss of status and tools, which behavioural evidence shows is a stronger motivator than a one-off gift; WhatsApp tips keep the programme visible between refills. |
| R02 | The retailer has no strong incentive to take the extra step of entering the mechanic code at the point of sale, so the loop breaks at step 3. | 3 | 2 | The retailer earns a small logging credit inside its own existing loyalty scheme for every code entered, giving it a reason to log; the programme is piloted with retailer training before scale. |
| R08 | If the retailer app is not live, has limited reach, or goes down, code logging has no reliable channel. | 2 | 3 | A22 reserves a one-time build or extension cost if no live app exists; a manual WhatsApp or SMS fallback for logging during outages; the pilot confirms the app's real capacity before scale. |
| R01 | Mechanics could log codes for tyres riders did not actually buy, or collude with retailers to fabricate recommendations. | 2 | 2 | One credit per tyre serial; a monthly cap per member; random IVR call-backs to riders named on the sale; a distance flag between retailer and mechanic beyond A21 km; distributor audit of the top earners each quarter. |
| R04 | Distributors who are asked to enrol mechanics may deprioritise it against their core stocking and selling work. | 2 | 2 | A per-enrolment incentive (A17) paid to distributor sales staff; a missed-call or WhatsApp self-enrolment path that does not depend on a distributor visit; monthly enrolment targets reviewed with distributors. |
| R05 | A competitor could launch a similar tools-and-status programme once ours is visible in the market. | 2 | 2 | The stock-independent design is harder for a rival with purchase-linked schemes to copy without cannibalising its own programme (7 Powers counter-positioning); the pilot-to-scale timeline aims to build a lead in enrolled shops before a copy can match it. |
| R07 | Shops could learn to recognise mystery riders and behave differently only during audits, biasing the measurement. | 2 | 2 | Audits are unannounced and run by a third-party agency with rotating personnel; the sample is drawn randomly each round from the full member list, not announced in advance; results are compared against the matched control districts, which the shops do not know are being tracked. |
| R09 | Costs per member, especially Tier 3 hardware, could run above the assumption register's bear case. | 2 | 2 | Spend is capped at the 1.5% to 2% envelope in every quarter (model check spend_within_envelope); member growth is phased (rollout table) so costs are visible before national scale; Tier 3 hardware can move to lease-only if the bear case breaches the cap. |
| R06 | Members could resell tools or branded merchandise rather than using them, defeating the engagement purpose. | 2 | 1 | Items are chosen to have low resale value relative to their utility to the shop (branded, sized to the shop, consumable-dependent); audits flag members with high redemption but low subsequent referral activity. |
| R10 | Without the annual brand-track re-survey, Eurogrip cannot confirm whether stocking and recommendation actually moved. | 1 | 2 | A32 reserves an annual budget line for the re-survey; G3 at the end of Q8 is explicitly gated on this re-run, making it a condition for calling the national phase complete. |

*Source: [T12]; model/inputs/risks.csv.*

Three of the ten controls are directly priced in the budget described in §11: R01's audit and monitoring work sits inside the tech and audits line, R08's app build contingency is A22, and R10's brand-track budget is A32. Pricing a control rather than leaving it as an unfunded intention is itself part of what separates this risk register from a generic list of good practices: a control with no line item behind it is a hope, not a design feature, and this document tries to name which of the two each control actually is. The remaining controls are either design features with no separate budget line (R02's retailer logging credit sits inside the retailer's own existing loyalty scheme, not a new Eurogrip cost) or operational practices (R04's monthly enrolment target review, R07's unannounced and rotated audit scheduling) that the field-teams and tech-and-audits lines already fund as part of running the programme day to day, rather than as an additional cost layered on top.

### What this section establishes, and what it does not

- It establishes all 10 named risks with their probability and impact scores, each paired one to one with a control already built into the programme's design, budget or measurement system.
- It establishes that activity fading (R03) and retailer non-logging (R02) are the two highest-scoring risks, which is also why §11's sustainability engine and §12's retailer-logging-credit mechanism exist as first-line, not backstop, design features.
- It establishes a MECE grouping of the 10 risks into six categories, showing the register covers behavioural, operational, integrity, competitive, financial and measurement failure modes without gaps or overlaps.
- It does not treat the probability and impact scores as externally validated figures; they are this document's own judgement, scored against the programme as designed, following the pre-mortem technique's own method of imagining failure first rather than measuring an already-observed failure rate.
- It does not add an eleventh risk beyond the 10 in the register; the register is treated as complete for the purposes of this document, while acknowledging in §15 that a pilot could surface a failure mode this pre-mortem did not anticipate.
- It does not score any risk as a reason to abandon the design; every control named is already inside the programme as described in §11 to §13, which is the pre-mortem's actual purpose, to find the failure modes early enough to design around them, not to produce a list of reasons not to proceed.

Exhibit for the deck: Appendix A4 (risk heat map, numbered badges and controls).

## 15. What we have not tested yet, and the 60 interviews that would test it first

**Answer.** Every bear, base and bull figure in §11 to §14 rests on secondary sources, adjacent-category benchmarks and stated design assumptions, not on a single interview with an Indian mechanic, puncture-shop owner or distributor, because none has been run [A38] [A39]. The validation plan this document commits to before the pilot begins is 60 interviews, 20 each across the three mechanic and puncture-shop segments (S-A, S-B, S-C), spread across four cities, two in each pilot state [M c4.validation] [A38] [A39]. What would change this document's mind is stated once, plainly, as four named conditions, not as a vague openness to being wrong, and the closing paragraph below recaps the whole Case 4 argument from §5 through §15 without adding anything new.

### 15.1 The validation plan: roles, counts, cities and questions

The 60 validation interviews are costed and planned, per PLAN.md §0.3 rule 4's standing instruction never to fabricate primary research, as a Customer Validation Plan to be run before the pilot starts, not as research already completed. Twenty interviews are allocated to each of the three segments named in §6 of this document (writer B): S-A stocking mechanic-retailers, S-B service mechanics who do not stock, and S-C puncture and tyre-repair shops, the same three segments the budget, tier ladder and rollout design in §11 and §12 are built around [A38].

| Segment | Interviews | Rationale |
|---|---|---|
| S-A, stocking mechanic-retailers | 20 | Tests whether Tier 3's hub-level reward mix (cost-shared hardware, priority stock, locator listing) actually matches what a stocking shop values most |
| S-B, service mechanics, non-stocking | 20 | Tests the core seed finding, that advocacy from non-stocking mechanics is real and that tools and visibility, not cash, would move their recommendation behaviour |
| S-C, puncture and tyre-repair shops | 20 | Tests whether consumables refills (plugs, patches, rubber solution) are genuinely the recurring engagement hook the sustainability engine in §10 assumes they are |
| Total | 60 | [M c4.validation.interviews] [A38] |

*Source: [A38]; §6 (writer B) segment definitions; PLAN.md §2.2.3.*

| City | State | Segment coverage |
|---|---|---|
| City 1 | Tamil Nadu | S-A, S-B, S-C |
| City 2 | Tamil Nadu | S-A, S-B, S-C |
| City 3 | Uttar Pradesh | S-A, S-B, S-C |
| City 4 | Uttar Pradesh | S-A, S-B, S-C |

*Four cities, two in each of the two pilot states named in §12.2, give the validation plan geographic coverage inside exactly the states the pilot itself will run in, so what is learned before the pilot starts is directly transferable to it [A39] [M c4.validation.cities].*
*Source: [A39]; §12.2 of this document.*

The planned questions fall into four groups, stated here as topics rather than a fixed script, since the exact wording belongs to the interview instrument itself, not to this document: what tools, equipment or visibility items the shop already owns or wants, and how it currently decides which to prioritise when money is tight; how the shop currently recommends a tyre brand, if at all, and what, if anything, currently influences that choice; whether a six-month re-qualification cycle, status loss included, would change engagement compared with a one-time reward; and whether the shop would prefer tool credits or an equal cash value, asked directly rather than inferred, which is the same question the reward-currency arm test in §13.5 will later test at scale with real behaviour, not stated preference.

| Question group | What it tests | Links to |
|---|---|---|
| Current tools, equipment and visibility ownership and priorities | Whether the tier ladder's reward catalogue (§10) matches real unmet needs | Tier ladder design, §10 |
| Current brand recommendation behaviour and its drivers | Whether the seed finding (non-stocking mechanics already advocate) holds at the individual level | Seed finding, §5, §6 |
| Reaction to a six-month re-qualification cycle | Whether loss aversion is a real motivator for this specific population, not only a general behavioural-economics claim | Sustainability engine, §10 |
| Stated preference, tool credits versus cash equivalent | A first, qualitative read on the Kano hypothesis, ahead of the quantitative reward-currency arm test | Reward-currency arm test, §13.5 |

*Source: PLAN.md §2.2.6; §2.2.9; document §5, §6, §10 (writers A and B).*

This document is explicit about what the 60 interviews are and are not: they are a qualitative validation step sized and costed before the pilot, not a substitute for the pilot's own quantitative evidence, and not a claim that mechanic behaviour in India has already been surveyed at any representative scale. No invented percentage, quote or finding from these interviews appears anywhere in this document, because they have not yet been conducted.

### 15.2 What would change our mind

PLAN.md §2.2.13 names four conditions that would change the Case 4 recommendation, each stated here with what changes and what does not.

| Condition | What changes | What does not change |
|---|---|---|
| R-C finds most two-wheeler tyres are bought with no mechanic involvement at all | Weight shifts from S-B and S-C toward retailer staff as the primary advocacy channel | The core thesis, pay for the advice, not the stock, in tools and status rather than cash |
| R-A finds no retailer app or point-of-sale logging capability exists | A22's build cost is added in full, and the pilot start is pushed to account for the build time | The loop design itself (mechanic recommends, rider buys, code is logged, credits accrue) |
| Model break-even (base case) runs above A26's 12-tyre kill threshold | Tier 3 hardware moves to lease-only and the model is re-run; if still above the threshold, the programme narrows to S-A and S-B only | Nothing, if break-even stays below 12; the base case in this document sits at 4.4, well under the threshold, so this condition has not been triggered [M c4.be.base] [A26] |
| Pilot G1 fails on activity but passes on advocacy, or fails on advocacy | Fixes onboarding in the first case; stops expansion at two states in the second | The second failure mode, failing on advocacy, is treated as the more serious of the two, because it means the loop is not changing what riders actually hear, not merely that fewer members are logging in |

*Source: PLAN.md §2.2.13; [A26]; [M c4.be.base]; §12.6 of this document.*

The third condition is already resolved in this document's favour: the model's base-case break-even of 4.4 extra tyres a member a year sits well below the 12-tyre kill threshold [M c4.be.base] [A26], confirmed directly by the model's own flag, c4_be_below_kill_base, returning true. This document states that result once here rather than treating the kill criterion as still an open question; it is a condition that has already been checked against real model output and has not been triggered.

### 15.3 Conclusively: the Case 4 argument in full

The Eurogrip mechanic advocacy programme pays for the advice, not the stock, and pays in tools and status rather than cash, because a meaningful share of advocacy already comes from mechanics who never stock a tyre, and a stock-linked reward would miss them entirely. The universe this reaches is about 7.8 lakh outlets in the base case, three-quarters of which never stock a tyre at all, split across three segments, S-A stocking mechanic-retailers, S-B service mechanics, and S-C puncture and tyre-repair shops, each on the same tier ladder of free entry, in-kind rewards, and a six-month re-qualification cycle that renews the programme instead of letting it fade after a one-time gift. Running it costs ₹21.99 crore a year in the base case, 1.63% of the relevant business-unit revenue, and pays back the moment a member shop sends 4.4 extra Eurogrip tyres a year, a bar stated honestly with no assumed uplift and measurably cheaper, in deadweight terms, than the obvious cash-per-tyre alternative, which would spend 91% of its money on tyres that sell anyway. It reaches that scale through three gated phases over 24 months, a two-state pilot in Tamil Nadu and Uttar Pradesh proven with real evidence rather than only a planning-time default, an eight-state scale phase, and a national rollout through the existing distributor network, with a pre-agreed, numbered threshold at the end of each phase rather than a discretionary continuation decision. It measures itself through four layers, activity, advocacy, sales and brand, anchored by a matched-district difference-in-differences experiment and an unannounced mystery-rider audit costing a known ₹3.92 lakh a year, and it names 10 specific ways it could fail, each already paired with a control already built into its design rather than left as an open risk. What it has not yet done is talk to a single Indian mechanic, puncture-shop owner or distributor; the 60 interviews planned across the two pilot states exist to test, before a rupee is committed at scale, whether the tools, the re-qualification cycle and the tool-credits-versus-cash preference this whole design rests on actually hold for the people the programme is built around, and the pilot itself exists to test, with real behaviour rather than stated intent, whether the 4.4-tyre bar is one the programme can actually clear.

### What this section establishes, and what it does not

- It establishes the full validation plan, 60 interviews across three segments and four cities in the two pilot states, with the question groups each interview round is meant to test, before any claim about mechanic behaviour is treated as confirmed.
- It establishes the four named conditions that would change this document's recommendation, with the third condition (the break-even kill threshold) already checked against the model's own output and found not triggered.
- It establishes a full recap of the Case 4 argument from the universe sizing through the budget, rollout, measurement and risk register, as a single closing synthesis.
- It does not present the 60 planned interviews as research already completed, and no invented quote, percentage or finding from them appears anywhere in this document.
- It does not claim the four kill conditions are exhaustive of every way the recommendation could need to change; they are the four PLAN.md §2.2.13 names in advance, and a pilot could in principle surface a fifth condition this document has not anticipated.
- It does not repeat the cost, rollout or measurement figures from §11 to §14 with any new number; the closing synthesis in §15.3 is a pure recap, as the writer rules for this document require.

Exhibit for the deck: Appendix A4 (VALIDATE FIRST callout); none beyond that for the kill-criteria and closing synthesis passages.

## 16. Four slides carry the Case 4 answer: what each panel shows and where its numbers come from

**Answer.** The deck is exactly four slides, a cover, a single dense executive-summary core slide, an appendix, and a thank-you slide, per the user's own decision to build one Figma Slides deck for Case 4 rather than a full Round 2 submission length [PLAN.md §0.2]. The core slide (S2) alone carries eight panels, P1 to P8, covering the universe segmentation, the brief's insights, the rejected cash scheme, the programme loop, the moneyshot, the rollout gates, the budget, and the measurement gates, so that every number in §11 to §15 of this document has exactly one place it appears on the deck. Every number on every panel traces to a research section, a tag and a model key, reproduced in full in the derivation table below.

### 16.1 The slide blueprint

| Slide | Archetype | Panels or elements |
|---|---|---|
| S1 Cover | Mind-map hub (Cover + hub-and-spoke) | Top band (chip, logos, team chip); title and subtitle; verdict card (the governing thought); team table; prepared-for line; mind-map panel with the seed caption and four nodes (mechanic, rider, retailer, rivals); logo row; dashed bus to five adjacent-category crests; source line |
| S2 Executive summary (the core slide) | Rails (H) + multi-chart dense (J) + moneyshot (P) | Headline; three rails (DIAGNOSIS, PROGRAMME, DELIVERY); P1 segment bar; P2 brief insights; P3 obvious-play badges; P4 programme loop and tier table; P5 moneyshot card; P6 rollout Gantt with gate diamonds; P7 budget donut; P8 gates scorecard |
| S3 Appendix | Appendix (X) | A1 four ways to count the universe, plus segments and pilot states; A2 budget scenario table and tornado; A3 benchmark feature-parity grid; A4 risk heat map, badges and VALIDATE FIRST callout |
| S4 Thank you | Conclusion synthesis (W) | Top band; THANK YOU title; THEREFORE card (closing synthesis line); team table (repeating S1's table, per the cover and thank-you style rule); three link slots (research document, video, model workbook); closing line; source line |

*The four-slide structure is fixed by the user's own decision (PLAN.md §0.2); this table names each slide's panels so the derivation table in §16.2 can cite a specific panel for every number rather than only a slide number.*
*Source: PLAN.md §6.5; §0.2.*

### 16.2 Derivation: panel by panel

| Slide | Panel | Text or number | Research section | Tag | Model key | Matches (Y/N) |
|---|---|---|---|---|---|---|
| S1 | Mind-map seed caption | Advocacy already comes from mechanics who do not stock Eurogrip | §5, §6 | [C4-B14] | n/a | Y |
| S1 | Verdict card | Pay for the advice, not the stock, and pay in tools and status rather than cash | §2, §10 | [C4-B14] [C4-B27] | n/a | Y |
| S1 | Crests row | Five adjacent-category programmes | §8 | n/a | [T10] | Y |
| S2 | Headline | Members, budget, break-even | §11 | n/a | [M c4.members_lakh.base] [M c4.spend_cr.base] [M c4.be.base] | Y |
| S2 | P1 | Segment bar, S-A/S-B/S-C shares and lakh outlets | §6 | [A05a] to [A05c] | [M c4.segments] [T2] | Y |
| S2 | P2 | Four brief-insight bullets | §7 | [C4-B14] [C4-B13] | n/a | Y |
| S2 | P3 | Three obvious-play failure badges | §2, §9 | [C4-B10] [C4-B22] | [M c4.cash_scheme] | Y |
| S2 | P4 | Tier table and programme loop | §10 | n/a | [T11] | Y |
| S2 | P5 | Moneyshot: break-even tyres and weeks | §11 | n/a | [M c4.be] [M c4.weeks] | Y |
| S2 | P6 | 24-month Gantt with G1 to G3 gate diamonds | §12 | [A23] [A24] | [T7] | Y |
| S2 | P7 | Budget donut: five lines, spend, share of BU revenue | §11 | [A01] [A02] | [T4] | Y |
| S2 | P8 | Gates scorecard: layer, metric, gate value | §13 | [A23] [A24] [A26] | [M c4.be.base] | Y |
| S3 | A1 | Four counting methods and the model universe range | §6 | n/a | [T1] | Y |
| S3 | A1 | Segment table (3 segments plus total) | §6 | [A05a] to [A05c] | [T2] | Y |
| S3 | A1 | Pilot-states caption | §6, §12 | n/a | [M c4.pilot_states] | Y |
| S3 | A2 | Scenario table (spend, members, break-even, bear/base/bull) | §11 | n/a | [T4] [T5] | Y |
| S3 | A2 | Tornado chart (top assumptions moving break-even) | §11 | [A30] [A27] [A20] [A29] [A06] [A09] | [T6] | Y |
| S3 | A3 | Benchmark feature-parity grid, 7 rows including the recommended design | §8 | n/a | [T10] | Y |
| S3 | A4 | Risk P x I grid and badges | §14 | n/a | [M c4.risks] [T12] | Y |
| S3 | A4 | VALIDATE FIRST callout | §15 | [A38] [A39] | [M c4.validation] | Y |
| S4 | THEREFORE card | Closing synthesis line | §15.3 | n/a | n/a | Y |
| S4 | Team table | Harsh Kawatra, Delhi Technological University | document §0 | n/a | n/a | Y |

*This table mirrors what `deck\derivation.md` will hold once the deck itself is built (PLAN.md §6.6 step 1); it is built here from PLAN.md §6.5's own panel specification cross-referenced against this document's sections 11 to 15 and part-B's sections 6 to 10, so that every slide number traces to a research section before a single Figma node is drawn.*
*Source: PLAN.md §6.5; §6.6; this document §11 to §15; part-B §6 to §10.*

### 16.3 Why the core slide alone carries eight panels

PLAN.md §0.1 states the single core slide (S2) doubles as the Round 1 one-page executive summary the brief itself requires, which is why it is built to the EY density doctrine described in the deck-system reference, 4 to 5 distinct type levels, bands and rails, and a chart paired with a table rather than a chart alone, instead of to the lighter density a typical internal slide would carry. Eight panels on one slide is not panel count for its own sake: each of the eight maps to one of the skill's 8-section argument blueprint (Executive summary, Context, Actors, Quantitative analysis, Feasibility, Recommended alternative, Conclusion carried in the moneyshot, and Appendix carried forward to S3), collapsed onto a single slide rather than spread across 100 slides, per the compression guidance this deliverable's own §0 states explicitly.

| Slide section | Skill's 8-section mapping | S2 panel |
|---|---|---|
| I Executive summary | Headline and the whole slide | S2 headline |
| III Actors (symmetric) | The three segments, same template | P1 |
| II Context (+ seed) | The brief's own insights | P2 |
| (the obvious answer, stated fairly before the recommendation) | The rejected cash scheme | P3 |
| VI Recommended alternative | The programme loop and tier ladder | P4 |
| IV Quantitative analysis | The moneyshot | P5 |
| V Feasibility | The rollout gates | P6 |
| IV Quantitative analysis (budget) | The budget donut | P7 |
| V Feasibility (measurement) | The gates scorecard | P8 |

*Source: PLAN.md §0 (skill touchpoints T2, T4); §6.5.*

### 16.4 Cross-section coverage check

| Document section | Appears on which slide or panel | Covered (Y/N) |
|---|---|---|
| §6 (universe, segments, pilot states) | S1 seed; S2 P1; S3 A1 | Y |
| §7, §8, §9 (gap, benchmarks, cash scheme) | S2 P2, P3; S3 A3 | Y |
| §10 (programme design) | S2 P4 | Y |
| §11 (budget, moneyshot, tornado) | S2 P5, P7; S3 A2 | Y |
| §12 (rollout, gates) | S2 P6; S3 A1 pilot-states caption | Y |
| §13 (measurement) | S2 P8; S3 A4 VALIDATE FIRST | Y |
| §14 (risks) | S3 A4 | Y |
| §15 (validation, kill criteria, closer) | S3 A4; S4 THEREFORE card | Y |

*This table reads the derivation table in §16.2 from the opposite direction, by document section rather than by panel, to confirm that every one of this document's own sections 6 to 15 has at least one place on the deck, and that no section was written with no deck exhibit at all.*
*Source: this document §6 to §15; PLAN.md §6.5.*

### What this section establishes, and what it does not

- It establishes the full four-slide blueprint with every panel named, so the deck's structure is fixed before any Figma node is drawn.
- It establishes a complete derivation table covering every number and text string on all four slides, each traced to a research section, a tag, and a model key.
- It establishes why the core slide alone carries eight panels, mapping each panel to the skill's own 8-section argument blueprint rather than treating panel density as an end in itself.
- It does not build the deck itself; that is PLAN.md §6's own Phase D, which this document's derivation table is written to support, not to replace.
- It does not mark any row as a mismatch (every row above reads Y); if a future deck build finds a number does not match this document, PLAN.md §6.6's own instruction is to correct the deck or this document, whichever is wrong, and to record the correction, not to leave the mismatch silently in place.

Exhibit for the deck: none, this section describes the deck's own structure rather than appearing inside it.
