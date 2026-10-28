# Case 6 — Solar-Powered Sports Hubs
## SOCH 6.0, Enactus DTU — Master Research & Solution Document

**Venture name (working):** **KHELurja** — a solar-and-storage-powered network of community sports hubs on existing public grounds in tier-2 and tier-3 India.

**How to read this document.** Every number below carries one of two labels. **[Sourced]** means it comes from a cited government, regulatory, or research publication — a live URL sits next to it. **[Modelled]** means it is this venture's own assumption or a derived calculation, built up from sourced unit prices but not itself a measured fact — every modelled number traces back to §13 (Assumptions Register), where the underlying assumption is stated and justified. The two are never allowed to blur into each other on a slide or in a table.

**Scope lock.** This venture is designed for **tier-2 and tier-3 India** — district and block headquarters, not metros. That constraint shapes every number in this document: prices are set at ₹500–800/hour, not Mumbai's ₹1,000–3,000; land is a panchayat/ULB concession near-zero cost, not ₹40,000–1,00,000/month metro rent; wages sit at the tier-2/3 band, not Delhi's. Metro figures appear only as labelled upper bounds, never as the base case.

---

## 0. Case decode — requirement map

The case book (`Case Book | SOCH 6.0.pdf`) asks for a 5-slide deck (+ cover + appendix) on **Case 6: Solar-Powered Sports Hubs**. Verbatim requirements and where each is answered in this document:

| Case book requirement | Answered in |
|---|---|
| Problem definition, key challenges, stakeholders, root causes, scale with data | §1 |
| Core value proposition — what problem, who benefits, how | §2 |
| Key features / solution components, innovation/differentiation | §2, §3 |
| Go-to-market strategy, adoption/scaling stages | §6 |
| Target customer/beneficiary segments, needs and pain points | §1 (stakeholder map), §6 |
| Business model — revenue generation, cost drivers, long-term sustainability | §3 (the core section) |
| Pricing strategy and its basis | §4 |
| Product positioning & messaging | §6 |
| Promotion & marketing channels | §6 |
| Feasibility — operational, financial, resource, partnership, scalability, mitigations | §8 |
| Explicit stakeholder partnerships, land/space constraint (must not compromise usability/safety) | §2 (Perimeter Doctrine), §7 |
| Impact measurement | §9 |
| Sources and explicitly justified assumptions | §13, §14 |

**Evaluation rubric → slide mapping** (problem understanding, value-prop clarity, innovation, GTM & business strategy, practicality & feasibility, social/environmental impact, coherence) is carried through into the 5-slide blueprint at §12, so nothing graded is left to chance at build time.

---

## 1. Problem analysis

### 1.1 The three-branch issue tree

```
Root: India's public sports grounds are asleep for two-thirds of the day
├── BRANCH A — Idle by day
│   Grounds sit empty 09:00-16:00 while schools/colleges run PE on
│   cramped indoor space or skip it; the public ground nearby is unused.
├── BRANCH B — Dark by night  ★ (the branch this venture attacks)
│   The only hours working people, students, and women can realistically
│   play (early morning / after 18:00) are exactly the hours the ground
│   has no light. Grid supply in the areas that need this most is the
│   least reliable. The asset that exists cannot be used when it is
│   wanted.
└── BRANCH C — Unowned by anyone
    No entity holds an accountable, revenue-linked reason to maintain
    the ground, so it decays. Audited evidence: this is not a
    hypothetical (see 1.3).
```

The middle branch — **dark by night** — is where solar + storage has direct leverage, and it is the branch this venture is built to close. The other two branches (idle by day, unowned by anyone) are addressed as secondary effects of fixing the middle one: once a hub has an operator with revenue at stake, day-use and maintenance follow.

### 1.2 Stakeholder map

| Stakeholder | What they want | What they lack today | What KHELurja gives them |
|---|---|---|---|
| **Panchayat / ULB (landowner)** | Community goodwill, a maintained public asset, some non-tax revenue | Funds, technical capacity, an accountable operator | A concession fee, a maintained ground at zero capex to them, political credit |
| **State sports department / SAI** | Grassroots participation numbers, PPP delivery against Khelo Bharat Niti 2025 | Delivery capacity at block level | A ready-made PPP partner that reports usage data |
| **DISCOM** | Reduced peak load, fewer feeder complaints | Budget for rural feeder upgrades | A behind-the-meter load that reduces net draw on the feeder, not a new connection to service |
| **CSR-funding corporate** | A Schedule VII-compliant sports spend with measurable outcomes | A vetted, monitorable delivery vehicle at block level | A hub-sponsorship package with hard usage/impact metrics, not a one-time donation |
| **Local coach / micro-entrepreneur** | A place to run an academy without owning land | Capital, a lit ground, booking infrastructure | A resident-coach slot lease, a captive booking funnel |
| **School (institutional buyer)** | PE hours without building a new ground | Land, staff time to manage bookings | A contracted weekday block at a bulk rate |
| **Player / parent / community member** | Affordable, safe, accessible play — including in the evening after work/school | An evening-usable ground nearby at a price they can pay | Prime-time lit slots at ₹500–800/hr, and a guaranteed **Golden Hours** free/₹50 tier |

### 1.3 Scale of the problem, with sources

- **11,227 playfields are already geo-tagged** in the national GIS inventory under Khelo India — the physical asset base already exists at scale. **[Sourced]** — [Khelo India / Ministry of Youth Affairs & Sports](https://yas.nic.in/sports/khelo-india-national-programme-development-sports-0)
- Khelo India carries a **₹3,165.50 crore outlay (2021-22 to 2025-26)** for exactly this kind of infrastructure gap-filling. **[Sourced]** — [Khelo India Scheme Operational Guidelines](https://kheloindia.gov.in/uploads/Khelo-India-Scheme-Operational-Guidelines.pdf)
- The failure mode is documented, not inferred. The **CAG performance audit of Punjab's Department of Sports & Youth Services** (covering the Punjab State Sports Council and Punjab State Institute of Sports) found: sports infrastructure **"lying unutilised for want of repair/maintenance since 2012"**; **light fixtures broken and not maintained**; human resources short by **47% of sanctioned strength**; a **50% shortage of coaches**; and — critically — **physical verification of sports infrastructure was never conducted**, meaning nobody was even checking. **[Sourced]** — [CAG, Chapter III — Creation, maintenance and utilisation of sports facilities](https://cag.gov.in/uploads/download_audit_report/2022/Chapter-III-066d847e39d0174.96297654.pdf)
- **Physical inactivity is rising, not falling.** 49.4% of Indian adults were insufficiently physically active in 2022, up from 22.3% in 2000 — more than doubling in 22 years — with a steeper gap for women (57%) than men (42%). Unchecked, the same study's trajectory implies **60% by 2030**. **[Sourced]** — [Lancet Global Health, via WHO](https://www.who.int/news/item/26-06-2024-nearly-1.8-billion-adults-at-risk-of-disease-from-not-doing-enough-physical-activity)
- **The grid problem is real and geographically specific.** Rural electricity supply now averages 22.6 hours/day nationally (up from 12.5 in 2014) — but that average hides the places this venture targets: households in **Uttar Pradesh, Jharkhand, Haryana, Assam and Bihar still face 6+ hours of daily outage**, concentrated exactly in the evening peak when a working population wants to play. **[Sourced]** — [CEEW](https://www.ceew.in/publications/access-to-electricity-availability-and-electrification-percentage-in-india)
- **The policy door is already open.** Khelo Bharat Niti 2025 (the new National Sports Policy) explicitly names **PPP and CSR as the intended financing route** for grassroots and rural sports infrastructure. **[Sourced]** — [PIB](https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=154856&ModuleId=3&reg=3&lang=2)

**The honest scale statement:** this is not a scarcity-of-grounds problem. It is a scarcity-of-usable-evening-hours-on-existing-grounds problem, compounded by an accountability gap that lets the audited failure state (§1.3, CAG) persist for over a decade at a time.

---

## 2. Solution architecture

### 2.1 What KHELurja is

A **concession-and-activation operator**, not a builder. KHELurja signs a 15-year concession + O&M agreement with a panchayat or ULB on an *existing* public ground, adds four things — light, storage, booking infrastructure, and a resident operator — and runs it as a revenue-sharing community asset. **No land purchase. No stadium construction.**

### 2.2 The Perimeter Doctrine — why the array never sits over the pitch

The case prompt suggests "solar-powered canopies over sports facilities." Read literally, that is the wrong engineering answer: benchmark full-court tennis/court canopies run **$350,000–$1,250,000 (≈₹3–10 crore)** [Sourced — Sports Venue Calculator](https://sportsvenuecalculator.com/knowledge/sports-domes/tennis-court-canopies/), against a whole-hub capex target of roughly **₹9–16 lakh** (§5). A full-span structure over the playing surface also introduces glare, ball-strike risk, drainage complications and wind load — in direct tension with the case's own instruction that solar/battery placement must not compromise usability or safety.

KHELurja's array therefore has **zero playing-area footprint**, placed on four surfaces that were dead space anyway:

1. **Spectator-shade canopy** — the one elevated structure, sited outside the touchline along the seating side. Dual-purpose: shade for spectators, generation for the hub.
2. **Support-block roof** — changing rooms, equipment store, booking kiosk.
3. **Vertical bifacial modules on the boundary fence** — east/west facing. This is not a compromise pick: vertical east/west orientation captures morning and evening sun, which is *when the hub's load actually is* (floodlights, not noon), unlike a roof-mounted array optimised for a midday peak nobody here needs. Zero incremental land, and doubles as a ball-stop.
4. **Entry parking canopy** — shades two-wheeler parking, doubles as a 2W/EV charging revenue point (§3, Stream 6).

### 2.3 The "manufactured hours" logic (Thesis #1)

The case implies revenue "through energy sales." The numbers say otherwise, and this is the single most important reframe in the whole document:

| Where the kWh goes | Price realized | Source |
|---|---|---|
| Exported to grid (>10kW → mandatory gross metering) | ₹2–4/kWh | [Sourced — JMK Research](https://jmkresearch.com/renewable-sector-published-reports/indias-new-net-metering-limit-risks-stalling-progress-on-rooftop-solar-target/) |
| PM-KUSUM feeder-level sale to DISCOM | ₹2.75–3.10/kWh (AP ceiling ₹3.09, Dec 2025) | [Sourced — APERC](https://aperc.gov.in/admin/upload/OrderonFLS_17.12.2025.pdf) |
| Self-consumed, displacing commercial tariff | ₹8–10/kWh | [Sourced — ElectricBillTool](https://electricbilltool.com/electricity-unit-rates-india/) |
| Routed into floodlights → unlocks 1 hour of bookable prime-time | **~₹284/kWh realized** (§5, unit economics — occupancy-weighted) | [Modelled] |

**Moneyshot:** *A kWh sold to the grid earns ~₹3. The same kWh, turned into light, realizes on the order of ₹280–800 depending on how it's counted* — 90–260× the export tariff. KHELurja is therefore not an energy company that happens to sit on a sports ground. It is a **playing-hours company**, and solar + storage is simply the cheapest, most reliable way in a grid-unreliable tier-2/3 district to manufacture hours that did not exist before. The energy line in the P&L (§5) is a cost line that turns positive — never the headline.

### 2.4 System sizing (deliberately right-sized, not oversized)

A common mistake in a "solar-powered X" pitch is to oversize the array for a good-looking kWp number. KHELurja sizes to the hub's actual load, so the array is exactly big enough to feed the floodlights and base load with minimal wasted export — this is what keeps capex down to the ₹9–16 lakh band instead of ballooning toward a metro-scale system with most of its output sold at ₹3/kWh.

| Component | Spec | Basis |
|---|---|---|
| Solar array | 12 kWp, perimeter-mounted | Sized to hub load (below), not an arbitrary target |
| Battery storage | 10 kWh lithium | Covers ~4 evening hours of floodlight load with buffer, bridges grid outages |
| Floodlighting | 6 kW LED, 6–8 fixtures on 4 poles, 200–300 lux | Recreational-tier spec for a 5-a-side-scale pitch [Sourced — Stark Sports](https://www.starksports.in/blog/football-turf-lighting-cost-india), [REITA](https://reitalight.com/how-much-does-it-cost-to-light-a-5-a-side-soccer-field/) |
| Annual generation | 19,973 kWh/yr (1,664 kWh/kWp/yr @ 19% CUF) | [Modelled], CUF benchmark [Sourced — Heaven Green Energy](https://www.heavengreenenergy.com/blog/solar-generation-by-state) |
| Annual hub load | 11,680 kWh/yr (floodlights 8,760 + base/aux 2,920) | [Modelled] |
| Self-consumed / exported | 11,680 kWh self-consumed, 8,293 kWh exported | [Modelled] — the array is sized so self-consumption absorbs virtually the whole load, and export is genuinely surplus, not the main event |

---

## 3. Revenue architecture — how this becomes profitable

This is the section that answers the actual question this document is built around. Seven streams are analysed, three tempting streams are explicitly rejected, and the whole thing is reconciled into one per-hub P&L in §5.

### 3.1 Stream 1 — Open community bookings (the base load)

**The primary revenue line**, split into two tiers, priced for tier-2/3 (never metro rates):

- **Prime time (18:00–22:00, 4 hrs/day)** — the hours solar + storage exists to create. **₹500–800/hr**, base case ₹600/hr. Metro comparables (₹1,000–3,000/hr, 60%+ occupancy crossing ₹4 lakh/month gross — [Sourced, Turfbox](https://turfbox.in/blog/turf-business-profit-india.html), [AS Sports & Infra](https://assportsandinfra.com/how-much-does-a-turf-owner-make-in-india/)) are shown only as the ceiling this model deliberately does not assume. Even Indore, a genuine tier-2 city, prints ₹800–1,000/hr [Sourced, Indore360 area listings] — KHELurja's ₹600 base case sits meaningfully below even that.
- **Shoulder time (06:00–09:00 + 16:00–18:00, 5 hrs/day)** — daylight hours, no lighting cost, priced lower to build daytime habit: **₹300–450/hr**, base case ₹375/hr.

**Golden Hours commitment**: a contractually fixed **≥30% of annual booked slot-hours** at ≤₹50 (near-free), weighted 70/30 toward shoulder/prime so the commitment doesn't gut prime-time economics, reserved for schools, girls' programmes, and para-athletes. This is funded out of prime-time margin, not a separate grant line — it is a structural feature of the pricing, not an add-on (§4).

**Year-3 steady state (per hub):** 803 prime hours booked (55% occupancy of 1,460 available) and 548 shoulder hours booked (30% occupancy of 1,825 available); after the Golden Hours carve-out, **₹528,091/year**. [Modelled]

### 3.2 Stream 2 — Academy / coach residency

Two resident micro-entrepreneur coaches lease a fixed evening/weekend slot at **₹4,000/month each**, plus KHELurja takes a **10% revenue share** on their coaching fees (tier-2/3 grassroots band: ₹500–1,500/month entry-level, ₹2,000–5,000 for serious programmes — [Sourced, RFC Football Academy grassroots pricing](https://rfcfootballacademy.in/grassroots.html); base case ₹800/student/month, 30 students/coach). **₹153,600/year.** [Modelled]

### 3.3 Stream 3 — Institutional weekday contracts

Monetises the 09:00–16:00 dead zone (Branch A of the issue tree). Two nearby schools contract **6 hours/week each at a bulk rate of ₹300/hour**, 44 weeks/year (excluding summer and exam breaks). **₹158,400/year.** [Modelled]

### 3.4 Stream 4 — Leagues, tournaments and community events

Six tournaments/year, ~12 teams each, ₹1,500 entry fee per team. High-margin (near-zero marginal cost against existing infrastructure), and it is the stream that builds community density and word-of-mouth. **₹108,000/year.** [Modelled]

### 3.5 Stream 5 — Energy (the line that is never the headline)

Behind-the-meter avoided cost is the real energy value — the venture pays a RESCO ₹5/kWh for solar it would otherwise buy from the grid at ₹9/kWh, netting a **₹46,720/year saving** under the RESCO-financed variant (§5, Variant B), or realizes a **₹129,998/year** net energy value if it owns the array outright (Variant A: ₹105,120 avoided-cost + ₹24,878 export value). Either way, this line sits at roughly **a tenth of total hub revenue** — a real, non-trivial contributor, but structurally a supporting cast member, never the star.

### 3.6 Stream 6 — Ancillary

Local sponsorship / boundary signage (₹60,000/year), a kiosk franchise fee (₹4,000/month), gear rental (₹3,000/month), and 2W/EV charging at the parking canopy (₹2,500/month). **₹174,000/year.** [Modelled]

### 3.7 What was rejected, and why

Naming what was deliberately left out of the model is what separates a real business plan from a wish-list:

1. **Grid export as a headline stream** — rejected per Thesis #1 (§2.3). Selling raw kWh is the lowest-value use of every unit this system generates; it appears in the model only as residual export at ₹3/kWh, never as the plan.
2. **Carbon credits under India's CCTS offset mechanism** — a single hub abates on the order of a few tonnes of CO₂e per year (the array displaces ~11,680 kWh of grid draw annually; at India's grid emission factor, this is single-digit-to-low-double-digit tCO₂e). CCTS offset credits also **cannot be used to meet compliance obligations** — they trade in a separate, thin voluntary pool. **[Sourced — ICAP](https://icapcarbonaction.com/en/news/india-notifies-emission-intensity-targets-nine-sectors-under-carbon-credit-trading-scheme)**. Immaterial at hub scale; excluded rather than dressed up as a revenue line.
3. **Equipment retail/sale** — rejected because it turns an asset-light, high-margin service business into an inventory business with working-capital and obsolescence risk that doesn't fit a lean tier-2/3 operator model. Gear *rental* (Stream 6) captures the adjacent demand without the inventory risk.

### 3.8 Revenue mix, Year-3 steady state (per hub)

| Stream | Annual value | Share of total |
|---|---:|---:|
| 1. Open bookings (prime + shoulder + golden) | ₹528,091 | 47% |
| 2. Academy residency | ₹153,600 | 14% |
| 3. Institutional contracts | ₹158,400 | 14% |
| 4. Leagues / tournaments | ₹108,000 | 10% |
| 6. Ancillary | ₹174,000 | 15% |
| **Total cash revenue** | **₹1,122,091** | **100%** |
| 5. Energy value (RESCO-net saving, non-headline) | ₹46,720 | *(added on top, not counted in the 100% above)* |

The point this table makes visually: **open bookings are less than half of revenue.** A hub that only sold playing time would be fragile; the other four streams exist precisely so the venture doesn't depend on footfall alone (this reasoning is made explicit and load-bearing in the break-even framing at §5.4).

---

## 4. Pricing strategy

**Time-of-day tiering** is the primary lever (§3.1): prime ₹600/hr, shoulder ₹375/hr — both anchored below even tier-2 comparables (Indore prints ₹800–1,000/hr), leaving headroom to raise prices as a hub proves out, not headroom to discover the base case was too optimistic.

**User-class tiering** layers on top:
- **Open/community** — the posted rate above.
- **Golden Hours** — ≤₹50/hour, ≥30% of annual slot-hours, contractually guaranteed to schools, girls' programmes and para-athlete groups. This is the access commitment that answers the case's "community access" and "affordability" requirements directly, and it is priced to be *survivable*, not symbolic: §5's break-even analysis explicitly holds it in the base case, not as an optimistic add-on.
- **Institutional/commercial bulk** — the school-contract rate (₹300/hr, below open shoulder rate, justified by contract volume and predictability that open bookings can't offer).

**Why these specific numbers, not asserted ones:** prime rate is set at 60–75% of the lowest genuinely tier-2 comparable found (Indore ₹800–1,000/hr) — low enough to undercut any private turf that might open nearby, high enough that the unit economics in §5 clear a healthy margin even before academy/institutional revenue ramps.

---

## 5. The financial model

### 5.1 Capex — two variants

Everything is costed twice: **owning** the solar+storage asset outright, and **RESCO** (Renewable Energy Service Company) financing it off balance sheet via a Power Purchase Agreement. FY25 data shows the Opex/PPA route already carries **35–40% of India's C&I rooftop solar additions**, up from 20% in FY22 — this is a proven, not speculative, financing path. **[Sourced — Heaven Green Energy, citing Mercom India's C&I Solar Report 2025]**

| Capex line | Variant A — Self-owned | Variant B — RESCO |
|---|---:|---:|
| Solar (12 kWp @ ₹45,000/kW, elevated-perimeter blended rate) | ₹5,40,000 | — (RESCO-owned) |
| BESS (10 kWh @ ₹17,500/kWh) | ₹1,75,000 | — (RESCO-owned) |
| Floodlighting (6 kW LED rig, functional-tier) | ₹3,50,000 | ₹3,50,000 |
| Ground refurb (fencing, drainage, resurfacing overlay) | ₹3,00,000 | ₹3,00,000 |
| Booking kiosk / tech / changing-room touch-up | ₹1,50,000 | ₹1,50,000 |
| Subtotal | ₹15,15,000 | ₹8,00,000 |
| Contingency (8% / 10%) | ₹1,21,200 | ₹80,000 |
| **Total capex per hub** | **₹16,36,200 (~₹16.4 lakh)** | **₹8,80,000 (~₹8.8 lakh)** |

**[Modelled], unit prices sourced — solar** [Powermore](https://powermore.in/blog/commercial-solar-cost-per-kw-india), [Bridgeway](https://bridgewaypower.in/blog/solar-structure-cost-per-kw-india) **· BESS** [PIB](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2204118&reg=3&lang=1) **· floodlighting** [Stark Sports](https://www.starksports.in/blog/football-turf-lighting-cost-india)

RESCO financing **halves the capex a hub needs from the venture's own balance sheet**, which is the single biggest lever on how fast this can scale (§5.6).

### 5.2 Energy economics

| Metric | Value |
|---|---:|
| Annual generation (12 kWp @ 19% CUF) | 19,973 kWh/yr |
| Annual hub load (floodlights + base) | 11,680 kWh/yr |
| Self-consumed | 11,680 kWh/yr |
| Exported (surplus) | 8,293 kWh/yr |
| Avoided-cost value, self-consumption @ ₹9/kWh | ₹1,05,120/yr |
| Export value @ ₹3/kWh | ₹24,878/yr |
| **Variant A net energy value** | **₹1,29,998/yr** |
| RESCO PPA cost, self-consumed @ ₹5/kWh | ₹58,400/yr |
| **Variant B net saving vs all-grid baseline** | **₹46,720/yr** |

### 5.3 Per-hub P&L, Year-3 steady state

Opex is deliberately lean: **one resident caretaker per hub** (doubles as evening security, since the ground is now lit — no separate guard line), and shared services (maintenance crew, finance, booking platform, regional manager) **allocated across a cluster of ~6–8 hubs per district**, not staffed per hub.

| Line | Variant A (self-owned) | Variant B (RESCO) |
|---|---:|---:|
| Cash revenue (Streams 1–4, 6) | ₹11,22,091 | ₹11,22,091 |
| Energy value/saving | ₹1,29,998 | ₹46,720 |
| **Total revenue** | **₹12,52,090** | **₹11,68,811** |
| Staff (1 resident caretaker) | ₹1,68,000 | ₹1,68,000 |
| Land/concession fee | ₹25,000 | ₹25,000 |
| Maintenance & AMC | ₹1,00,000 | ₹85,000 |
| Insurance | ₹30,000 | ₹30,000 |
| Booking platform fee (8% of open-booking rev) | ₹42,247 | ₹42,247 |
| Local marketing | ₹40,000 | ₹40,000 |
| HQ overhead allocation (cluster-shared) | ₹1,00,000 | ₹1,00,000 |
| **Total opex** | **₹5,05,247** | **₹4,90,247** |
| **EBITDA** | **₹7,46,842 (59.6% margin)** | **₹6,78,564 (58.1% margin)** |
| Depreciation (10-yr / 7-yr blended asset life) | ₹1,63,620 | ₹1,25,714 |
| **EBIT** | **₹5,83,222** | **₹5,52,850** |
| **Simple payback (capex ÷ EBITDA)** | **2.19 years** | **1.30 years** |

**Reconciling tier-2/3 pricing with a 58–60% margin is the feasibility argument, not a footnote.** The lower ticket size is offset by three things simultaneously: near-zero land cost (panchayat concession vs. metro land rent), tier-2/3 wages (one caretaker at ₹14,000/month vs. a metro multi-person security+ops team), and a cluster-shared overhead structure that spreads finance/tech/regional-management cost across 6–8 hubs instead of loading it fully onto one.

### 5.4 Break-even occupancy — the honest Year-1 question

Academy residency and institutional contracts (Streams 2–3, 29% of steady-state revenue) take 6–12 months of relationship-building to sign. A hub must stand on **open community bookings alone** in its first year — this is the real question a judge will ask, so it is answered directly rather than hidden behind the Year-3 blended margin.

**Break-even occupancy (open bookings only, Variant B): 38.8%** blended across prime and shoulder slots — well below the 55%/30% base case assumed once the hub matures. [Modelled]

### 5.5 Sensitivity — EBITDA (₹ lakh) by prime occupancy × prime rate, Year-3 steady state

| Occupancy \ Rate | ₹450 | ₹525 | ₹600 | ₹675 | ₹750 |
|---|---:|---:|---:|---:|---:|
| 35% | 4.8 | 5.1 | 5.5 | 5.8 | 6.2 |
| 45% | 5.4 | 5.8 | 6.3 | 6.7 | 7.2 |
| **55% (base)** | 6.0 | 6.5 | **7.1** | 7.6 | 8.2 |
| 65% | 6.6 | 7.2 | 7.9 | 8.5 | 9.2 |
| 75% | 7.2 | 7.9 | 8.7 | 9.4 | 10.2 |

The floor of this table — 35% occupancy at ₹450/hr, still ₹4.8 lakh EBITDA — sits well above the ₹0 break-even line even before academy/institutional revenue is counted. The venture does not require the optimistic case to survive.

**Tornado — hub EBITDA swing on ±20% of each driver** (base ₹6,78,564):

| Variable | −20% | +20% | Swing |
|---|---:|---:|---:|
| Prime rate (₹/hr) | ₹5,96,789 | ₹7,60,338 | **₹1,63,549** |
| Prime occupancy | ₹6,01,114 | ₹7,56,013 | ₹1,54,899 |
| HQ overhead allocation | ₹6,98,564 | ₹6,58,564 | −₹40,000 |
| RESCO PPA rate | ₹6,90,244 | ₹6,66,884 | −₹23,360 |

**The two variables that actually move the answer are pricing and occupancy — both commercial execution, not engineering risk.** Overhead allocation and the RESCO PPA rate matter, but an order of magnitude less. This is the honest statement of what the team needs to get right: fill the ground and hold the price, not chase marginal engineering optimisation.

### 5.6 Base / Bull / Bear scenarios (hub-level, Year-3 steady state)

| Scenario | Prime occ. | Shoulder occ. | Prime rate | Hub EBITDA/yr | Y5 hub count | Portfolio EBITDA (steady, ₹ lakh) |
|---|---:|---:|---:|---:|---:|---:|
| **Bear** | 40% | 20% | ₹500 | ₹4,63,716 | 90 | ₹417.3 L |
| **Base** | 55% | 30% | ₹600 | ₹6,78,564 | 150 | ₹1,017.8 L |
| **Bull** | 70% | 40% | ₹700 | ₹9,44,713 | 180 | ₹1,700.5 L |

Even the bear case — half the base-case prime rate ambition realised, a third fewer hubs by Year 5 — clears **₹4+ lakh EBITDA per hub per year** and ₹4 crore+ of portfolio-level steady-state EBITDA. The model does not depend on the optimistic scenario landing.

### 5.7 Unit economics

| Metric | Value | Derivation |
|---|---:|---|
| Available prime hours/hub/yr | 1,460 | 4 hrs × 365 days |
| Value realized per available lit hour (occupancy-weighted) | **₹284** | (paid prime + golden-hour prime revenue) ÷ available prime hours |
| Total booked hours/hub/yr (paid + golden) | 1,350 | Stream 1 derivation |
| Player-visits/hub/yr (×10 avg group size) | 13,505 | |
| Unique players/hub/yr (at 20 avg visits/player/yr) | **~675** | |
| New players/hub/yr (40% annual turnover) | 270 | |
| CAC (local marketing ÷ new players) | **₹148** | ₹40,000 marketing spend ÷ 270 new players |
| LTV (avg price/visit × ~30 visits over 1.5-yr retention) | **₹1,612** | |
| **LTV : CAC** | **10.9×** | |
| Revenue per kWp installed/yr | ₹97,401 | Total value ÷ 12 kWp |

[Modelled — derivation shown, not asserted]

### 5.8 5-year rollout, 150 hubs (Variant B / RESCO)

A ramp curve is applied per hub-vintage (Year 1 of operation: 40% of steady-state EBITDA; Year 2: 70%; Year 3+: 100%) to reflect that a new hub takes time to build local booking habit and sign its academy/institutional contracts.

| Year | New hubs | Cumulative hubs | Capex (₹ lakh) | Consolidated EBITDA (₹ lakh) | Cumulative net (EBITDA − capex, ₹ lakh) |
|---|---:|---:|---:|---:|---:|
| 1 | 3 | 3 | 26.4 | 8.1 | −18.3 |
| 2 | 12 | 15 | 105.6 | 46.8 | −77.0 |
| 3 | 35 | 50 | 308.0 | 172.4 | −212.7 |
| 4 | 60 | 110 | 528.0 | 430.9 | **−309.8 (peak funding need)** |
| 5 | 40 | 150 | 352.0 | 732.8 | **+71.1 (turns cash-positive)** |

**5-year cumulative capex: ₹13.20 crore. 5-year cumulative EBITDA: ₹13.91 crore. Peak external funding requirement: ~₹3.10 crore, in Year 4** — after which the portfolio's own cash generation funds further growth. This is a modest, fundable number for a CSR/impact-investor/blended-finance venture at this stage, not a stadium-scale capital ask.

---

## 6. Go-to-market

### 6.1 Site-selection screen (bottom-up, not a TAM slice)

A hub is only pursued if a ground clears all five:

1. Catchment population 25,000–150,000 within 5 km
2. Existing public ground with clear title or panchayat/ULB control
3. Grid connection already present (KHELurja reduces grid dependence; it doesn't build a new connection)
4. At least one school and one informal playing community within 3 km
5. District-HQ or block-HQ status (tier-2/3, per scope lock)

### 6.2 Bottom-up market sizing through the screen

| Tier | Count | Basis |
|---|---:|---|
| **National inventory (context, not addressable)** | 11,227 geo-tagged playfields | [Sourced — Khelo India](https://yas.nic.in/sports/khelo-india-national-programme-development-sports-0) |
| **SAM — passes the 5-point screen** | ~1,500–1,600 grounds | [Modelled]: ~35% of the national inventory sits in tier-2/3 district/block-HQ catchments of the right size (assumption, stated), of which ~40% clear the title/grid/community-proximity filter |
| **SOM — 5-year plan** | 150 hubs | ~9–10% of SAM — a deliberately conservative capture rate, not an aggressive one |

### 6.3 Adoption ladder

1. **Pilot (Year 1, 3 hubs)** — one illustrative district, hand-picked against the site-selection screen, to prove the model with a founding team directly on the ground.
2. **District cluster (Year 2, +12 hubs = 15 total)** — replicate within the same state, building the shared-services cluster (§5.3) that makes the lean opex model work.
3. **State scale (Years 3–4, +95 hubs = 110 total)** — expand into 2–3 additional states via state sports department PPP MoUs under Khelo Bharat Niti 2025.
4. **Franchise/licence layer (Year 5+, +40 hubs = 150 total)** — once the SOP, booking platform, and training curriculum are proven, license the model to local operators in a lighter-touch structure rather than KHELurja directly staffing every new hub.

### 6.4 Positioning and messaging, by segment

| Segment | One-line positioning |
|---|---|
| Panchayat/ULB | "Your unused ground becomes a maintained, revenue-sharing community asset — at zero capex to you." |
| DISCOM | "A behind-the-meter load that reduces net feeder draw during your evening peak, not a new connection to service." |
| CSR funder | "A Schedule VII-compliant sports spend with a usage dashboard, not a plaque and a photo." |
| Coach/micro-entrepreneur | "A lit ground and a booking funnel, without buying land." |
| Player/parent | "Play after work, safely, for less than a metro turf costs — and if you're a student or a girl, some hours are free." |

### 6.5 Channels

- **Panchayat/ULB and state sports department** — direct outreach via the Khelo Bharat Niti PPP cell, leveraging the CAG audit findings (§1.3) as the opening argument: "here is the documented cost of the status quo."
- **CSR funders** — direct corporate outreach plus placement through CSR-implementation intermediaries; sports sits at only **~1.8% of India's ₹526.14 crore FY23 sports-CSR pool across ~1,200 companies** (up 80% YoY) **[Sourced — India CSR](https://indiacsr.in/csr-spending-sports-corporate-india/), [Vinod Kothari Consultants](https://vinodkothari.com/2023/09/csr-spending-in-indian-sports-sector/)** — real headroom, and Schedule VII already explicitly covers *creation and maintenance* of sports infrastructure, not just one-off events.
- **Schools** — direct principal/PE-department outreach for institutional contracts, the anchor tenant that de-risks each hub before public bookings ramp.
- **Players** — the booking app/platform itself (word-of-mouth + hyperlocal social media), plus the tournament calendar (Stream 4) as an organic acquisition engine.

---

## 7. Stakeholder engagement, trust and governance

- **Land route**: panchayat/ULB resolution to lease/concession the ground. Precedent exists for panchayat land leased at token rates for public-purpose use (Haryana's panchayat land-lease rules set a floor of **₹5,100/acre/year** for such leases) **[Sourced — Haryana Panchayat land-lease rules](https://upload.indiacode.nic.in/showfile?actid=AC_HR_67_1530_00004_00004_1741084680873&filename=pvcl_rules_english_updated_01.04.2025.pdf&type=rule)** — KHELurja's ₹25,000/year concession fee sits comfortably above this floor as a goodwill/administrative premium.
- **State alignment**: MoU under the state sports department, positioned explicitly as a Khelo Bharat Niti 2025 PPP delivery vehicle, not a private commercial encroachment on public land.
- **DISCOM**: standard net/gross-metering interconnection application; no special dispensation required — the system is sized (§2.4) to stay a straightforward behind-the-meter installation.
- **RESCO partner**: a standard 15–25-year OPEX/PPA contract, an already-mainstream C&I financing route in India (§5.1).
- **CSR funder**: a hub-sponsorship package tied to a public, real-time usage dashboard — bookings, footfall, Golden Hours delivered — not a one-time cheque against a press release.
- **Trust architecture (the case's "trust-building systems" ask, answered concretely)**: three mechanisms, not a promise —
  1. **Published, fixed rate card** — no informal price discovery, no under-the-table booking.
  2. **Public revenue-share dashboard** — the panchayat/ULB can see exactly what the ground earned and what its share is, in real time.
  3. **The energy meter as an incorruptible witness** — kWh consumed by the floodlights is a hard, tamper-evident number that cross-validates booked hours; nobody can quietly under-report usage without the energy data contradicting it.

---

## 8. Feasibility & practicality

### 8.1 Claim / Confidence / Basis

An honesty device, not a sales pitch — every load-bearing feasibility claim in this document rated against its actual evidence:

| Claim | Confidence | Basis |
|---|---|---|
| RESCO OPEX financing is available for a project this size in tier-2/3 India | **High** | RESCO already carried 35–40% of FY25 C&I rooftop additions nationally [Sourced] |
| The physical asset base (existing grounds) is large enough to source 150 hubs | **High** | 11,227 geo-tagged playfields nationally [Sourced]; SOM is ~9–10% of a conservatively filtered SAM |
| Panchayat/ULB land can be secured at near-zero cost | **Medium-High** | Legal precedent exists (Haryana rules) [Sourced]; site-by-site panchayat resolution still required, and process time varies by state |
| ₹600/hr prime-time pricing is achievable in tier-2/3 | **Medium** | Anchored to Indore comparables (₹800–1,000/hr) [Sourced] with a deliberate discount; not yet field-tested at the specific pilot site |
| 55% prime-time occupancy is achievable by Year 3 | **Medium** | Below documented metro occupancy (60%+) [Sourced]; break-even requires only 38.8% (§5.4), giving real headroom |
| Academy/institutional revenue (29% of steady-state total) materializes within 12 months | **Medium** | Directionally supported by grassroots academy demand [Sourced] but unverified for this specific model — flagged as the weakest link in the Year-1 P&L, which is exactly why break-even (§5.4) is computed *without* it |
| A single hub abates a materially large amount of carbon | **Low** | Explicitly rejected as a revenue driver (§3.7) — stated as low-confidence rather than inflated |

### 8.2 Operational, financial, resource, partnership, scalability

- **Operational**: one resident caretaker per hub, cluster-shared maintenance crew — proven staffing pattern in India's turf-operator sector, adapted down to tier-2/3 wage bands.
- **Financial**: 1.3–2.2-year hub payback (§5.3), ₹3.1 crore peak funding need for the full 150-hub 5-year plan (§5.8) — a bridgeable ask for blended CSR/impact-investor capital, not a capital-intensive infrastructure bet.
- **Resource**: no scarce input — solar EPC, RESCO providers, LED lighting contractors and booking-platform vendors are all mature, competitive markets in India already.
- **Partnership**: the panchayat/ULB relationship is the single highest-friction dependency; mitigated by starting with a hand-picked pilot district (§6.3) where the relationship can be built directly, not assumed.
- **Scalability**: the cluster model (6–8 hubs sharing one overhead structure) is designed to scale by replication, not by growing any one hub's complexity — each new hub is a near-identical unit, which is what makes the 5-year rollout (§5.8) credible.

### 8.3 Risk register

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Panchayat/ULB approval delay | Medium | Medium | Start with a hand-picked pilot district; build a repeatable MoU template from Hub 1 |
| Gross-metering rule change increases effective solar cost | Low-Medium | Low | System already sized under 10 kW-equivalent per hub load; RESCO variant shifts regulatory risk to the RESCO partner |
| Module/fixture theft or vandalism | Medium | Medium | Resident caretaker on-site; insurance line already in opex (§5.3); perimeter/fence-mounted modules are harder to remove than roof arrays |
| Monsoon seasonality reduces bookings | High | Low-Medium | Modelled occupancy (55%/30%) is an annual average, already below dry-season peak; shoulder-hour and institutional revenue are less weather-sensitive |
| Academy/institutional partnerships slower than modelled | Medium | Medium | Break-even (§5.4) is computed without these streams — the hub survives their delay, it just doesn't hit full margin |
| Grid outage during a booked prime-time slot | Medium | Low | BESS sized for ~4-hour evening coverage with buffer; this is the core reliability case for solar+storage in the first place |
| Operator/caretaker churn | Medium | Low | Cluster-shared roving maintenance team provides backup coverage; role is deliberately simple to re-hire into |

---

## 9. Impact measurement

**Primary metric: incremental lit playing-hours created.** Nothing else in this space measures this directly, and it is the one number that is *uniquely* KHELurja's contribution — a ground that already existed, made usable in hours it previously wasn't.

| Metric | Year-3 target/hub | How measured |
|---|---:|---|
| Incremental lit playing-hours/yr | 1,460 available (803 booked at base occupancy) | Floodlight energy meter cross-validated against booking log |
| Unique players/yr | ~675 | Booking-platform account data |
| % of annual slot-hours delivered as Golden Hours | ≥30% (contractual floor) | Booking-platform tagging |
| Female participation share | Tracked, no floor set in Year 1 (flagged for pilot-phase validation) | Booking-platform self-reported demographic field |
| Livelihoods created | 1 caretaker + 2 resident coaches per hub | Direct employment/lease records |
| ₹ transferred to landowner (panchayat/ULB) | Concession fee + agreed revenue share | Public dashboard (§7) |
| kWh self-consumed / avoided grid draw | 11,680 kWh/yr | Energy meter |
| Estimated tCO₂e avoided | Single-digit to low-double-digit per hub/yr | [Modelled], explicitly stated as immaterial at hub scale (§3.7) — reported for transparency, not claimed as an impact pillar |

**What this model cannot measure, stated honestly**: it does not track downstream health outcomes (this would require a longitudinal cohort study, out of scope for a hub operator), and self-reported demographic data from a booking app has known reliability limits. A **Customer Validation Plan** — not invented interview data — is the honest substitute: planned structured interviews with 15–20 panchayat officials, 10–15 coaches, and 40–50 players across the pilot district before Year-2 expansion, to test the pricing and occupancy assumptions in §5 against real behaviour before scaling capital deployment on them.

An **SROI-style computation** (illustrative, assumptions exposed): if each hub creates 675 unique-player-years of increased activity access at a blended cost (opex + amortised capex) of roughly ₹6.5 lakh/hub/year, the **cost per player reached is ~₹960/year** — below the cost of even a single entry-level cricket-academy membership (₹1,500/month) for what is, in practice, year-round facility access plus a guaranteed free-access tier. This is presented as a directional cost-effectiveness signal, not a certified SROI ratio.

---

## 10. Roadmap — three horizons

| Horizon | Timeframe | Gate to move to next horizon |
|---|---|---|
| **H1 — Pilot** | Year 1, 3 hubs, 1 district | Break-even occupancy (38.8%, §5.4) achieved on at least 2 of 3 hubs; panchayat MoU template finalized |
| **H2 — District cluster** | Year 2, +12 hubs (15 total) | Cluster-shared-services model proven (opex per hub tracks the ₹4.9 lakh Variant-B model, §5.3); at least one academy and one institutional contract live per hub |
| **H3 — State scale + franchise layer** | Years 3–5, +135 hubs (150 total) | State PPP MoU signed under Khelo Bharat Niti 2025; booking platform, SOP and training curriculum standardized enough to license to local operators, not just directly staff |

---

## 11. Q&A stress test — the eight hardest questions

1. **"What's your break-even occupancy?"** → 38.8% blended, on open bookings alone, before academy/institutional revenue (§5.4) — well below the 55%/30% base case.
2. **"Why would a panchayat sign this over just leaving the ground as-is?"** → Zero capex to them, a concession fee above the legal precedent floor (₹5,100/acre/yr, Haryana), and political credit for fixing exactly the failure state the CAG already documented (§1.3, §7).
3. **"Isn't ₹600/hr still too expensive for the people you say you're serving?"** → That's why the Golden Hours commitment (≥30% of slot-hours at ≤₹50) is contractual, not aspirational, and funded structurally from prime-time margin, not a grant that can lapse (§4).
4. **"What if academy/institutional partnerships never materialize?"** → The hub still clears break-even on open bookings alone (§5.4); those streams are 29% of steady-state margin, not survival-critical.
5. **"Why not just sell the power — isn't that simpler?"** → Because it's worth 90–260× less per kWh than turning it into a bookable hour (§2.3) — simpler is not the same as more valuable.
6. **"What's your biggest real risk?"** → Per the tornado analysis (§5.5), it's commercial execution — filling the ground and holding the price — not engineering or financing risk.
7. **"How much capital do you actually need?"** → ₹3.1 crore peak, in Year 4, for the full 150-hub 5-year plan (§5.8) — not a stadium-scale ask.
8. **"Isn't this just a turf business with solar panels bolted on?"** → No: remove the solar+storage and the core unlock — 4 extra bookable evening hours in grid-unreliable tier-2/3 districts — disappears. The energy system is what makes the *hours* exist; the business model then monetizes those hours seven different ways (§3).

---

## 12. The 5-slide blueprint

Slide budget: 5 content slides (case book cap, excluding cover and appendix). Each maps 1:1 to sections above.

| Slide | Action title (declarative, carries a number) | Content blocks | Source |
|---|---|---|---|
| **Cover** | KHELurja — solar-powered sports hubs for tier-2/3 India | Venture name, one-line thesis, team | — |
| **S1 — Problem** | "Public grounds sit dark for the exact hours anyone can play — audited, not assumed" | 3-branch issue tree (§1.1), CAG findings callout, stakeholder grid (§1.2), physical-inactivity trend chart | §1 |
| **S2 — Solution** | "One kWh sold to the grid earns ₹3. The same kWh under a floodlight earns ₹284." | Moneyshot numeral band, Perimeter Doctrine diagram (4 mount points, zero pitch footprint), system-sizing table (§2.4) | §2 |
| **S3 — Revenue & Business Model** | "Bookings are less than half the revenue — that's what makes the model survive a slow month" | Revenue mix table (§3.8), 7-stream breakdown, "what we rejected and why" callout | §3, §4 |
| **S4 — Financial Model** | "₹3.1 crore gets this to 150 hubs and cash-flow positive by Year 5" | Per-hub P&L (§5.3), break-even occupancy (§5.4), 5-year rollout table (§5.8), sensitivity heat-map | §5 |
| **S5 — GTM, Feasibility & Impact** | "150 hubs is 9% of the grounds that already clear the site screen" | Adoption ladder (§6.3), Claim/Confidence/Basis table (§8.1), impact metrics (§9) | §6, §8, §9 |
| **Appendix** | — | Full CAG citation excerpt, assumptions register (§13), full bibliography (§14), tornado/scenario detail (§5.5–5.6), risk register (§8.3) | — |

---

## 13. Assumptions register

Every modelled figure in this document traces to one of these numbered assumptions.

| # | Assumption | Value used | Justification |
|---|---|---|---|
| A1 | Solar array size | 12 kWp | Right-sized to hub load (§2.4), not an arbitrary target |
| A2 | Solar capex rate | ₹45,000/kW | Mid-to-upper commercial band (₹35–50k/kW) [Sourced] to account for elevated/perimeter mounting premium |
| A3 | BESS size | 10 kWh | Covers ~4-hr evening floodlight load with buffer |
| A4 | BESS capex rate | ₹17,500/kWh | Mid of ₹15,000–20,000/kWh 2025 band [Sourced] |
| A5 | CUF | 19% | Mid-band for western-India tier-2/3 irradiance [Sourced] |
| A6 | Commercial electricity tariff (avoided cost) | ₹9/kWh | Mid of ₹8–10/kWh commercial band [Sourced] |
| A7 | Export tariff | ₹3/kWh | Mid of ₹2–4/kWh gross-metering / PM-KUSUM band [Sourced] |
| A8 | RESCO PPA rate | ₹5/kWh | Upper-mid of ₹3.50–5.50/kWh OPEX band [Sourced], reflecting a storage-inclusive premium |
| A9 | Prime-time rate | ₹600/hr | 60–75% of lowest genuine tier-2 comparable found (Indore ₹800–1,000/hr) [Sourced] |
| A10 | Shoulder-time rate | ₹375/hr | Proportionate discount to prime rate |
| A11 | Prime occupancy (Year-3 base case) | 55% | Below documented metro occupancy (60%+) [Sourced], conservative for tier-2/3 |
| A12 | Shoulder occupancy (Year-3 base case) | 30% | Conservative, daylight/no-lighting-benefit hours |
| A13 | Golden Hours carve-out | 30% of booked slot-hours at ≤₹50 | Explicit case requirement for community access; sized against prime-margin sensitivity (§5.5) to remain survivable |
| A14 | Academy fee per student | ₹800/month, 30 students/coach | Mid of tier-2/3 grassroots academy band (₹500–1,500) [Sourced] |
| A15 | Institutional (school) contract rate | ₹300/hour, 44 weeks/yr | Below open shoulder rate, justified by contract volume/predictability |
| A16 | Caretaker wage | ₹14,000/month | Tier-2/3 semi-skilled band, above Maharashtra Zone III unskilled floor (₹12,000–13,600) [Sourced] |
| A17 | HQ overhead allocation | ₹1,00,000/hub/yr | Cluster-shared team (finance, tech platform, regional manager) across ~6–8 hubs per district |
| A18 | Ramp curve for new hubs | 40% / 70% / 100% of steady-state EBITDA in Year 1 / 2 / 3+ of a hub's life | Reflects time to build booking habit and sign academy/institutional contracts |
| A19 | Hub rollout schedule | 3 / 12 / 35 / 60 / 40 new hubs in Years 1–5 | [Modelled], calibrated to a fundable ~₹3.1cr peak capital need (§5.8) |
| A20 | Golden-hour allocation split | 30% prime / 70% shoulder | Protects prime-time margin while still delivering meaningful free evening access |
| A21 | Average group size per booked hour | 10 players | 5-a-side-scale pitch, effective headcount across two teams |
| A22 | Average visits per unique player/yr | 20 | Blend of weekly regulars and occasional players |
| A23 | Illustrative pilot geography | Bikaner district, Rajasthan | Chosen for high solar irradiance (western Rajasthan, ~6.5 kWh/m²/day GHI) [Sourced], documented rural grid-reliability gap in the wider region, and Khelo India asset density — modelled figures are anchored here but are illustrative, not measured field data for this specific district |

---

## 14. Bibliography

### Government / primary sources

- Khelo India National Programme, Ministry of Youth Affairs & Sports — [yas.nic.in](https://yas.nic.in/sports/khelo-india-national-programme-development-sports-0)
- Khelo India Scheme Operational Guidelines (2021-22 to 2025-26) — [kheloindia.gov.in](https://kheloindia.gov.in/uploads/Khelo-India-Scheme-Operational-Guidelines.pdf)
- CAG, Chapter III — Creation, maintenance and utilisation of sports facilities (Punjab Dept. of Sports & Youth Services performance audit) — [cag.gov.in](https://cag.gov.in/uploads/download_audit_report/2022/Chapter-III-066d847e39d0174.96297654.pdf)
- Khelo Bharat Niti 2025 / National Sports Policy 2025, Cabinet approval — [PIB](https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=154856&ModuleId=3&reg=3&lang=2)
- WHO, on the Lancet Global Health physical-inactivity study (2024) — [who.int](https://www.who.int/news/item/26-06-2024-nearly-1.8-billion-adults-at-risk-of-disease-from-not-doing-enough-physical-activity)
- CEEW, Access to Electricity — Availability and Electrification Percentage in India — [ceew.in](https://www.ceew.in/publications/access-to-electricity-availability-and-electrification-percentage-in-india)
- Andhra Pradesh Electricity Regulatory Commission, Order on Feeder-Level Solarisation tariff (Dec 2025) — [aperc.gov.in](https://aperc.gov.in/admin/upload/OrderonFLS_17.12.2025.pdf)
- Ministry of New and Renewable Energy, PM-KUSUM — [mnre.gov.in](https://mnre.gov.in/en/pradhan-mantri-kisan-urja-suraksha-evam-utthaan-mahabhiyaan-pm-kusum/)
- PIB, on Battery Energy Storage System cost decline — [pib.gov.in](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2204118&reg=3&lang=1)
- Haryana Government, Panchayat Village Common Lands lease rules (updated 2025) — [indiacode.nic.in](https://upload.indiacode.nic.in/showfile?actid=AC_HR_67_1530_00004_00004_1741084680873&filename=pvcl_rules_english_updated_01.04.2025.pdf&type=rule)
- India CSR, on CSR spending in sports (FY23 data) — [indiacsr.in](https://indiacsr.in/csr-spending-sports-corporate-india/)
- International Carbon Action Partnership, on India's CCTS — [icapcarbonaction.com](https://icapcarbonaction.com/en/news/india-notifies-emission-intensity-targets-nine-sectors-under-carbon-credit-trading-scheme)

### Industry / secondary sources (vendor-published; flagged as such — no primary government data exists for these specific figures)

- JMK Research, on India's net-metering rule changes — [jmkresearch.com](https://jmkresearch.com/renewable-sector-published-reports/indias-new-net-metering-limit-risks-stalling-progress-on-rooftop-solar-target/)
- ElectricBillTool, state-wise DISCOM electricity tariff table — [electricbilltool.com](https://electricbilltool.com/electricity-unit-rates-india/)
- Powermore, Commercial Solar Cost Per KW in India — [powermore.in](https://powermore.in/blog/commercial-solar-cost-per-kw-india)
- Bridgeway Power, Solar Structure Cost Per KW India — [bridgewaypower.in](https://bridgewaypower.in/blog/solar-structure-cost-per-kw-india)
- Heaven Green Energy, Solar Generation Per kWp by Indian State — [heavengreenenergy.com](https://www.heavengreenenergy.com/blog/solar-generation-by-state)
- Heaven Green Energy, Zero Down Payment Solar / RESCO-OPEX model (citing Mercom India C&I Solar Report 2025) — [heavengreenenergy.com](https://www.heavengreenenergy.com/blog/zero-down-payment-solar)
- Stark Sports, Football Turf Lighting Cost & Design in India — [starksports.in](https://www.starksports.in/blog/football-turf-lighting-cost-india)
- REITA Lighting, Cost to Light a 5-a-Side Soccer Field — [reitalight.com](https://reitalight.com/how-much-does-it-cost-to-light-a-5-a-side-soccer-field/)
- Sports Venue Calculator, Tennis Court Canopies — [sportsvenuecalculator.com](https://sportsvenuecalculator.com/knowledge/sports-domes/tennis-court-canopies/)
- Turfbox, Turf Business Profit in India — [turfbox.in](https://turfbox.in/blog/turf-business-profit-india.html)
- AS Sports & Infra, How Much Does a Turf Owner Make in India — [assportsandinfra.com](https://assportsandinfra.com/how-much-does-a-turf-owner-make-in-india/)
- Tracxn, Hudle company profile — [tracxn.com](https://tracxn.com/d/companies/hudle/__zarVVjUJA_YT6eWfSgdh0DrUcDjaqH9dISM_JPO1R_k)
- CricMotion, Cricket Academy Fees in India — [cricmotion.com](https://cricmotion.com/learn/cricket-academy-fees-india-guide)
- RFC Football Academy, Grassroots pricing — [rfcfootballacademy.in](https://rfcfootballacademy.in/grassroots.html)
- Solar with Yash, Rajasthan Solar Guide 2025 (western Rajasthan irradiance) — [solarwithyash.com](https://solarwithyash.com/is-solar-energy-a-viable-option-in-rajasthan/)

---

*Document prepared for Enactus DTU SOCH 6.0, Case 6 — Solar-Powered Sports Hubs. All figures labelled [Sourced] carry a live citation above; all figures labelled [Modelled] are this venture's own assumptions, fully enumerated in §13, and are never presented as measured field data.*
