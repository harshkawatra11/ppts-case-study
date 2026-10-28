# Eurogrip x Unstop: the solved argument (all four cases)

Written in step R0 per PLAN.md §4.1 step 3, from PLAN.md §2 (decided at planning time, skill touchpoints T1 and T2).
Lanes may correct facts that feed this argument; they may not change the recommendations. A lane that finds a fact
breaking a recommendation logs it in `research/raw/conflicts.md` and the orchestrator reports it before writers
start (kill criteria below).

## Case types and calibration

| Case | Skill case type (closest) | Calibration flag |
|---|---|---|
| 1 Brand across Commuter, Gig, Premium | Marketing (`case_types/marketing.md`) | extrapolated; skill's marketing patterns are not corpus-derived |
| 2 EV tyre concept | Operations + Strategy hybrid (no exact fit) | extrapolated; product-engineering case |
| 3 OHT tractor share | Strategy (`case_types/strategy.md`), GTM flavour of Marketing | extrapolated |
| 4 Mechanic advocacy (the deck case) | Marketing (trade / influencer) + Operations (programme operations) | extrapolated |

Calibration note (skill `SKILL.md` "Calibration honesty"): the skill's corpus is three GCCH M&A decks. These four
cases are marketing (Cases 1, 4), product engineering (Case 2) and go-to-market strategy (Case 3). The structural and
rhetorical patterns transfer (contrarian recommendation, action titles, moneyshot, foreshadowing, symmetric treatment,
defensive depth, three-scenario thinking); the M&A-specific frameworks (DCF, premium decomposition, EPS accretion) do
not apply and are replaced case by case (frameworks tables below).

---

## Case 4: obvious answer and three reasons

**Obvious answer:** a scan-and-earn loyalty app for mechanics. Each Eurogrip tyre sold or fitted earns points or
cash (the lubricant-industry model: QR coupon in the pack, instant bank payout), plus a one-time sign-up kit.

Three reasons it falls short:
1. **It pays stockers, but advice comes from everyone.** Points per tyre sold reward only shops that stock Eurogrip,
   while the brief says a meaningful share of advocacy already comes from mechanics who do not stock it `[C4-B14]`.
2. **Tyres sell too rarely per shop for points to add up.** A lubricant is changed several times a year per bike; a
   tyre lasts years. Points that accrue a few times a year are either too small to change behaviour or so large that
   they become the "high-cost, one-off incentive" the brief rules out `[C4-B10]`.
3. **Cash is the easiest thing for rivals to match and it measures sales, not recommendations.** A rival matches a
   higher payout within a week; the payout stops, the advocacy stops; and a QR scan records a sale at a stocking
   shop, not a recommendation at a non-stocking one, which is what the measurability criterion asks for `[C4-B22]`.

## Case 4: recommendation and three reasons

**Governing thought:** "Pay for the advice, not the stock, and pay in tools and status rather than cash."

Expanded: every mechanic and puncture shop can join for free. Members get the tools of their trade, visible Eurogrip
association and training, all of which they use every day; in return they recommend Eurogrip using a personal code.
The rider can buy the tyre at any Eurogrip retailer; the retailer logs the code when the tyre is sold, in the
retailer app Eurogrip already runs; the code earns the mechanic tool credits and keeps or lifts their tier. Tiers are
re-qualified every six months, so the programme renews itself instead of fading after a sign-up gift.

Three reasons:
1. **It credits the advice where it happens**, including shops that never stock a tyre (`[C4-B14]`), and pulls
   stocking along at Tier 3, where the brief says the gap is (`[C4-B11]`).
2. **It pays in what a shop uses every day and wants to be seen with:** repair kits, gauges, inflators, boards and
   uniforms (`[C4-B13]` and judging criterion `[C4-B27]`). Consumables run out every quarter, creating a recurring,
   low-cost reason to stay active (sustainability).
3. **It is measurable with what Eurogrip already owns:** the retailer app logs each code against a tyre serial;
   mystery-rider audits measure unprompted recommendation; a matched-district pilot measures the lift.

**Counter-positioning (7 Powers):** rivals running purchase-linked cash schemes cannot copy a stock-independent
design without paying for advice on tyres they do not sell to that shop and cannibalising their own schemes. State
as reasoning, not as a claim about rivals' internal economics.

## Case 4: moneyshot template

"A member shop needs `<be>` extra Eurogrip tyres a year, one every `<weeks>` weeks, for the whole programme to pay
for itself." `be = steady-state annual programme cost (c4.spend_cr) ÷ members ÷ contribution per tyre`, bear / base /
bull from the model. It claims no uplift; it states the bar the pilot must clear. It is the largest numeral in the
deck (80 pt), card named `CARD: MONEYSHOT`.

## Case 4: seed and where it appears

**Seed** (planted before the recommendation is named): on the cover mind map, sub-caption "Advocacy already comes
from mechanics who do not stock Eurogrip." and in document §5 (rider journey), before §10 names the design. Same
line appears on deck S1 and S2 P2 insight 2.

## Case 4: frameworks and where

| Framework | Use | Document section |
|---|---|---|
| MECE issue tree | Why mechanic advocacy for Eurogrip is weak | §7 |
| Customer journey map | Rider's replacement journey with mechanic touchpoints | §5 |
| Jobs to be done | Mechanic's jobs: fix fast, earn, look professional, keep the customer | §7 |
| Kano model (hypothesis, flagged) | Cash = attribute rivals match; tools = basic need; visibility = delighter | §10 |
| Feature-parity matrix | Adjacent-category programmes vs our design | §8 |
| 7 Powers: counter-positioning | Why rivals struggle to copy | §10 |
| Unit economics, break-even | Cost per member, contribution per tyre, break-even tyres | §11 |
| Scenario analysis + tornado | Bear / base / bull and the five assumptions that move break-even most | §11 |
| Three Horizons (as 3 phases) + stage gates | Rollout | §12 |
| KPI tree / balanced scorecard | Four-layer measurement | §13 |
| Difference-in-differences, power calculation | Pilot design | §13 |
| Pre-mortem + risk heat map with 1:1 mitigation | Risks | §14 |
| RACI | Who runs what | §12 |

## Case 4: kill criteria

- R-C finds that most two-wheeler tyres are bought without any mechanic involvement: keep the programme but move
  weight from S-B/S-C to retailer staff; the core thesis still holds.
- R-A finds no retailer app or POS logging capability: add build cost A22, push pilot to Q2 start.
- Model break-even (base) above A26 tyres per member per year (base 12): cut Tier 3 hardware to lease-only and
  re-run; if still above, narrow to S-A and S-B only.
- Pilot G1 fails on activity (< A23) but passes on advocacy: fix onboarding; fails on advocacy: stop at 2 states.

---

## Case 1: obvious answer and three reasons

**Obvious answer:** three separate campaigns (commuter: mass digital and TV; gig: discounts; premium: influencers
and motorsport) on top of the existing sports sponsorship.

Three reasons it falls short: three campaigns fragment one budget and break the coherence constraint `[C1-B14]`;
discounts to gig riders buy share, not preference; premium influencers without product proof read as paid.

## Case 1: recommendation and three reasons

**Governing thought:** one brand, one proof currency, three entry points. The proof currency is distance: the gig
fleet (riders doing the most kilometres per day, R-E) is enrolled through fleet operators and platforms with tracked
tyre life; that real-world distance evidence is what commuters see at the retail counter and the mechanic's shop
(built on the Case 4 programme); premium riders get the technology story through peer advocacy in riding communities
and track or test events. Masterbrand architecture (Eurogrip as the only brand; segment proof points underneath).

## Case 1: moneyshot template

The share of the budget spent where the tyre is chosen (`c1.chosen_share_pct`, retail + on-ground) and what it buys
(`c1.reach`: outlets branded, gig riders enrolled, unique reach), with the budget bear / base / bull (`c1.budget_cr`).

## Case 1: seed and where it appears

The gig-rider distance evidence is foreshadowed in the context section before the recommendation names it as the
shared proof currency across all three segments.

## Case 1: frameworks and where

STP, personas built from data (archetypes with sourced facts, never invented quotes), Keller CBBE pyramid, brand
funnel (awareness to consideration to preference), customer journey per segment, 4Ps, budget allocation matrix, media
cost benchmarks (CPM, cost per lead), KPI tree.

## Case 1: kill criteria

If R-E finds gig-rider tyre decisions are made entirely by the fleet operator with no rider input, the distance-proof
narrative shifts from a rider-facing claim to a fleet-procurement claim; the three-segment structure still holds.

---

## Case 2: obvious answer and three reasons

**Obvious answer:** a premium, dedicated EV tyre range with an expensive new compound and a new construction, sold
at a premium.

Three reasons it falls short: the brief requires a mass-market cost band `[C2-B17]` and largely existing processes
`[C2-B18]`; most EV two-wheeler volume in India is scooters on 10 to 12 inch rims, a price-sensitive segment.

## Case 2: recommendation and three reasons

**Governing thought:** an EV-ready variant of the mass-market platform, not a new premium tyre. Four engineering
moves, each on existing equipment: (1) tyre construct, a dual-layer tread (cap and base) from the existing duplex
extruder; (2) tread pattern, variable-pitch sequencing for NVH and even wear; (3) load, a raised load index via cord
and bead reinforcement; (4) optimized performance on vital needs `[C2-B13]` (grip, high-speed stability, damage
resistance, durability). Reasons: resolves the tension between the innovation criterion `[C2-B24]` (not a minor
tweak) and the constraints `[C2-B17]`/`[C2-B18]` (existing lines, mass-market cost) by specifying one EV-ready
standard rather than a dedicated premium line; is globally compliant without redesign (BIS, UNECE R75, FMVSS 119);
is manufacturable with an extra mixing pass, not a new line.

## Case 2: moneyshot template

"+x% range for ₹y more per tyre (z% of tyre cost), on existing lines" (`c2.range_gain_pct`, `c2.delta_inr`,
`c2.delta_pct`), bear / base / bull.

## Case 2: seed and where it appears

The rolling-resistance-to-range link is seeded in the background/context section (physics literature) before the
engineering concept is named.

## Case 2: frameworks and where

First-principles physics (hysteresis and tan delta, the "magic triangle" of rolling resistance, wet grip and wear),
QFD house of quality, TRIZ contradiction (grip vs rolling resistance), DFM, FMEA, standards compliance matrix, TRL
ladder and stage gates.

## Case 2: kill criteria

If the cost delta exceeds A2-03 (base +8%) in the base case, the concept drops the reinforced load-index step for
the standard trim and offers it only as an upgrade SKU; re-run and re-check against the target.

---

## Case 3: obvious answer and three reasons

**Obvious answer:** more dealers, deeper discounts, farmer meets and wall paintings.

Three reasons it falls short: dealer loyalty is regional and entrenched `[C3-B04]`; discounts start a price war with
bigger rivals; awareness spend does not move a relationship-driven, low-brand-salience purchase `[C3-B06]`.

## Case 3: recommendation and three reasons

**Governing thought:** win the hardest-working tractors first, and let their tyre life sell the brand to
smallholders through the dealer. Segments: (1) commercial and haulage operators and custom hiring centres, whose
tractors run the most hours, buy on total cost of ownership and talk to many farmers; (2) smallholder owner-
operators, who buy on price, credit and dealer trust, at harvest-linked cash-flow moments; (3) the dealer and the
village mechanic as the channel and influencer. Value proposition: a dealer-administered tyre-life assurance for
high-use segments, harvest-timed credit for smallholders, and regional pattern and size priorities from R-G.

## Case 3: moneyshot template

The rear-pair cost per working hour for a commercial operator (`c3.tco_per_hour`) and the share points the GTM
budget must win to pay for itself (`c3.share_points_sc`, bear / base / bull), inside 1.5% to 2% of domestic OHT
revenue.

## Case 3: seed and where it appears

The fragmentation and regional-loyalty finding is seeded in the context section before the segment-sequencing
recommendation (commercial first, then smallholder) is named.

## Case 3: frameworks and where

Porter's Five Forces for tractor tyres, bottom-up market sizing (tractor parc by state times replacement cycle),
buying-centre map, TCO model, regional heat map (state by cropping by terrain by farm size), dealer economics,
GE-McKinsey style state prioritisation.

## Case 3: kill criteria

If R-G finds commercial/haulage tractors are a negligible share of the parc in the priority states, resequence to
lead with larger smallholder segments but keep the TCO-first value proposition for whichever segment runs the most
hours locally.

---

## Cross-case links

The four answers reinforce each other, stated plainly once in the document: the Case 4 mechanic programme is the
retail proof channel for Case 1's commuter and gig messages; Case 2's EV-ready tyre needs trained fitment (Case 4
Tier 2 course covers EV tyre handling); Case 3 reuses the Case 4 influencer logic for village mechanics and tractor
dealers. This is reasoning about fit, not a claim that Eurogrip runs these links today.
