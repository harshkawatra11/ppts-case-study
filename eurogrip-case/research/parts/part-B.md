## 6. India has about 7.8 lakh outlets where a two-wheeler tyre gets recommended, and 75% of them never stock one

**Answer.** No government survey counts India's two-wheeler mechanic and puncture-shop universe directly, so this document triangulates it four ways and lands on a base case of about 7.8 lakh outlets, bear 2.7 lakh, bull 15.0 lakh [M c4.universe.base/bear/bull] [T1]. Inside that base case, 40% are service mechanics who recommend but do not stock (S-B) and 35% are puncture and tyre repair shops (S-C) [M c4.segments] [T2], so 75% of the universe never stocks a tyre at all, exactly the gap the brief's own insight points at: a meaningful share of advocacy already comes from mechanics who do not stock Eurogrip tyres `[C4-B14]`. Geography concentrates this universe behind two-wheeler registrations, which is why the pilot-state rule in PLAN.md §2.2.7 lands on Tamil Nadu, Eurogrip's home state, as Pilot A and Uttar Pradesh, the largest two-wheeler registration state where Eurogrip's presence is thinner, as Pilot B [RC18] [RC32] [RC34] [RC36]. Fragmentation evidence from the National Statistical Office's own unincorporated-enterprise bulletin shows the segment this universe sits inside is overwhelmingly own-account, not an organised, hired-staff trade [RC74].

### 6.1 Four ways to count the universe, and why they do not agree

No MoSPI publication gives an establishment count at the NIC 2008 code 4540 level (motorcycle, moped, scooter and three-wheeler repair), all-India or by state [RC06] [RC08]. This is a genuine gap in India's public statistics, not a missed search: the brief itself asks only for research into "the approximate scale of the mechanic/puncture-shop universe in India (numbers, geographic spread, degree of fragmentation)" `[C4-B16]`, not a claim that an official count exists. In its absence, this section carries four methods side by side rather than forcing a single number, following the lane's own ruling on the conflict between its two estimate methods [RC60].

| Method | Kind | Low (lakh) | Base (lakh) | High (lakh) | What it measures |
|---|---|---|---|---|---|
| Enterprise survey | estimate | 2.7 | 5.0 | 7.5 | Registered trade-sector establishments, reasoned down to the motorcycle-repair-specific share |
| Two-wheeler parc | estimate | 7.7 | 10.5 | 15.0 | India's registered two-wheeler stock, divided by an assumed catchment of bikes per outlet |
| Rival programmes | floor | 1.5 | 1.5 | 1.5 | The largest published adjacent-category (lubricants) mechanic-and-retailer enrolment found |
| Eurogrip partners | floor | 0.3 | 0.3 | 0.3 | A company-stated target for the number of retail and mechanic partners reached by one ad campaign |
| Model universe | bear/base/bull | 2.7 | 7.8 | 15.0 | The model's own range, base = mean of the two estimates, floored at the larger programme count |

*Source: research/data/universe_methods.csv; [T1]; [RC58] to [RC60].*
*Abbreviations: "lakh" = 1,00,000.*

The Enterprise survey method starts from the Annual Survey of Unincorporated Sector Enterprises (ASUSE) 2022-23, which counted about 6.50 crore all-India unincorporated non-agricultural establishments, with trade establishments (defined by MoSPI to include "mainly retail") at about 34.71% of that total, or roughly 2.26 crore [RC01] [RC03]. From here the method is a reasoned triangulation, not a published split: NIC Division 45 (motor vehicle and motorcycle trade and repair) is one of roughly 20 three-digit trade activities under Division 45 to 47, and the PIB release names "other retail trade" as the leading trade activity, implying NIC 45 is a minority share of Trade; the lane reasons a 3% to 6% share of all trade establishments for NIC 45, then a further 40% to 55% share of NIC 45 being motorcycle-specific (NIC 4540, as opposed to car-and-above repair under NIC 45200) given that two-wheelers vastly outnumber cars on Indian roads [RC07] [RC11] [RC59]. Each of those shares is a stated assumption inside the CSV, not a sourced figure, and the document says so plainly rather than presenting the resulting 2.7 to 7.5 lakh range as an official count.

The Two-wheeler parc method starts from a different primary fact: India's registered two-wheeler stock, compiled by CEIC from MoRTH/VAHAN data, stood at about 263,378 thousand units (roughly 26.3 crore) as of March 2022 [RC12]. A separate, independently sourced article confirms the multi-decade registration pattern (about seven in ten of all vehicle registrations have been two-wheelers across the growth window, not a precise single-year percentage) [RC14] [RC15]. The lane then divides this stock by a reasoned catchment of two-wheelers per mechanic or puncture-shop outlet: 3,500 bikes per outlet in the bear case (fewer, wider-catchment shops), 2,500 in the base case, and 1,800 in the bull case (denser shop network), which is itself a stated assumption rather than a sourced ratio, since no study of mechanic density per two-wheeler was found [RC58]. This produces a range of about 7.7 to 15.0 lakh outlets, with a base case near 10.5 lakh.

These two estimate methods only partially overlap, which the lane logs honestly as conflict C-C3: the Enterprise survey method (2.7 to 7.5 lakh) likely undercounts the least formal S-C puncture-repair segment, since ASUSE's enterprise frame favours establishments with some fixed location and record-keeping, while the Two-wheeler parc method likely captures informal roadside points that an enterprise survey misses entirely [RC59] [RC60]. The ruling, carried through into the model, is not to force a single reconciled number but to let the model's base case sit in the overlap-adjacent zone, about 8 to 12 lakh, with the model landing on 7.8 lakh (mean of the two estimates' base cases, 5.0 and 10.5, is 7.75, rounded to 7.8) [RC60] [M c4.universe.base].

The two floor methods are not independent estimates of the full universe; they are lower bounds drawn from adjacent evidence. Castrol India's Fast Scan platform, the largest published mechanic-and-retailer loyalty-platform enrolment found in any adjacent category, had enrolled over 1.5 lakh mechanics and retailers by its September 2019 launch announcement [RC25] [RD01]. This states only that the engageable universe for a comparable incentive platform in an adjacent category (lubricants) is at least 1.5 lakh; it says nothing about the tyre-specific universe directly, which is why it is carried as a floor, not an estimate. Separately, TVS Eurogrip's own 2022 CSK sponsorship activation built personalised video advertisements for "more than 30,000" retail and mechanic (influencer) partners [RC28]. This is a company-stated target for an ad campaign's partner reach, not an independently audited or ongoing programme-membership count; no later source confirms the 30,000 figure was actually reached or sustained [RC31]. Both floors sit well below either estimate method's low end, confirming only that the true universe is larger than either company's current reach, not narrowing the estimate range itself.

### 6.2 The three segments, same template applied to each

The universe splits MECE by role at the moment of tyre replacement, following PLAN.md §2.2.3. No source splits S-B from S-C directly for the mechanic-and-puncture-shop universe specifically, so the shares below are stated assumptions (A05a to A05c in the assumption register), applied uniformly across bear, base and bull [M c4.segments] [A05a] [A05b] [A05c].

| Segment | Share of universe | Lakh outlets (base) |
|---|---|---|
| S-A Stocking mechanic-retailers | 25% | 1.9 |
| S-B Service mechanics, non-stocking | 40% | 3.1 |
| S-C Puncture and tyre-repair shops | 35% | 2.7 |

*Source: [A05a] to [A05c]; [T2]; [M c4.segments].*

**S-A: Stocking mechanic-retailers.** Role at replacement: sells and fits the tyre directly. Typical shop: a tyre shop or multi-brand workshop that carries tyre stock on its own shelves. What it needs from a brand: margin on the sale, fast-moving stock that does not tie up working capital, credibility with riders, and fitting equipment (changer, balancer) that a tyre-stocking shop runs daily. Programme entry point: Tier 3, the fitting hub tier, since an S-A outlet is in most cases already a retailer inside Eurogrip's existing retailer app relationship. Size: about 1.9 lakh outlets in the base case, the smallest of the three segments, reflecting that stocking a tyre brand is a bigger commitment than recommending one.

**S-B: Service mechanics, non-stocking.** Role at replacement: diagnoses tread wear or damage, recommends a brand, and often buys the replacement tyre from a nearby retailer on the rider's behalf or sends the rider there directly. Typical shop: a general two-wheeler service garage that handles engine work, brakes and electricals, with tyre replacement as one job among many, not its specialty. What it needs from a brand: tools that make its daily non-tyre work easier, the look of a professional shop in front of customers, and a quick, reliable way to source whichever tyre it recommends without carrying stock itself. Programme entry point: Tier 1 moving to Tier 2, since S-B shops are the clearest expression of the brief's own insight that influence and stocking are not the same thing `[C4-B14]`. Size: about 3.1 lakh outlets in the base case, the largest single segment.

**S-C: Puncture and tyre-repair shops.** Role at replacement: declares "this tyre is finished" at the point of a puncture, which is, by the nature of two-wheeler riding in India, the single most frequent tyre-related moment a rider experiences. Typical shop: a roadside or small fixed shop built around a compressor and a stock of patches, often the most informal and least capitalised of the three segments. What it needs from a brand: repair consumables that run out and need replacing (patches, plugs, rubber solution), a pressure gauge, an inflator, and signage that tells a rider the shop exists. Programme entry point: Tier 1 moving to Tier 2, on the same ladder as S-B. Size: about 2.7 lakh outlets in the base case.

| Segment | Role at replacement | Typical shop | What it needs from a brand | Programme entry point | Lakh outlets (base) |
|---|---|---|---|---|---|
| S-A | Sells and fits tyres | Tyre shop or multi-brand workshop with tyre stock | Margin, fast-moving stock, credibility, fitting equipment | Tier 3 (fitting hub); already a retailer in the app | 1.9 |
| S-B | Diagnoses wear, recommends, often buys on the rider's behalf | General two-wheeler service garage | Tools, look of a professional shop, quick sourcing of the recommended tyre | Tier 1 to Tier 2 | 3.1 |
| S-C | Declares "this tyre is finished" at the puncture | Roadside or small shop, compressor, patches | Repair consumables, gauge, inflator, signage | Tier 1 to Tier 2 | 2.7 |

*Source: PLAN.md §2.2.3; [A05a] to [A05c]; [M c4.segments].*

A fourth group exists at the boundary of this universe and is explicitly out of scope: OEM-authorised workshops, which fit OE-brand tyres under OEM supply contracts rather than making an independent recommendation. These are governed by OEM terms the programme cannot reach and are mentioned here only to keep the segmentation genuinely MECE, per PLAN.md §2.2.3's own boundary note.

### 6.3 Geography: where the universe concentrates, and the pilot-state rule result

Two-wheeler mechanic and puncture-shop density follows two-wheeler registrations, since the universe exists to serve the two-wheeler parc. State-wise two-wheeler registration data for one clean, authoritative, all-top-15-state table was not found: three different SIAM-linked press reports give different quarterly cuts for the same states, with Uttar Pradesh's share ranging from 12.5% to 15.7% and Maharashtra's from 10% to 11.3% across the cuts [RC19] [RC20] [RC21] [RC23]. This is logged as conflict C-C1: none of the three is a primary SIAM or VAHAN table, all are press paraphrases of the same source tier, so the two most recently dated, closest cuts (RC19, RC20) are averaged for the state table below, with the range noted rather than one source picked silently [RC23].

| State | Two-wheeler registrations (FY, annualised estimate) | Two-wheeler stock (proxy) | Share of national total | Eurogrip presence note |
|---|---|---|---|---|
| Uttar Pradesh | 29,95,980 | 3,63,46,164 | 13.8% | New signature store(s) reported Jun 2025, but recent and thin against Tamil Nadu's; largest or near-largest registration state sourced; **Pilot B** |
| Maharashtra | 24,53,230 | 2,97,61,714 | 11.3% | No Eurogrip-specific disclosure found (gap) |
| Gujarat | 17,36,800 | 2,10,70,240 | 8.0% | New signature store reported Jun 2025; scale not disclosed |
| Karnataka | 14,32,860 | 1,73,82,948 | 6.6% | No disclosure found (gap); share from a lower-confidence single press cut |
| Tamil Nadu | 16,49,960 | 2,00,16,728 | 7.6% | Home state: Madurai HQ, main plant, R&D centre; four Chennai signature stores opened May to Jul 2025; COO called Chennai "an important market for us"; **Pilot A** |
| Rajasthan | 14,11,150 | 1,71,19,570 | 6.5% | No disclosure found (gap) |
| Bihar | 14,32,860 | 1,73,82,948 | 6.6% | No disclosure found (gap); same lower-confidence press cut as Karnataka |
| West Bengal | not found | not found | not found | No disclosure found (gap); rank/share not sourced, not estimated |
| Madhya Pradesh | not found | not found | not found | No disclosure found (gap); rank/share not sourced, not estimated |
| Andhra Pradesh | not found | not found | not found | No disclosure found (gap); rank/share not sourced, not estimated |
| Telangana | not found | not found | not found | No disclosure found (gap); rank/share not sourced, not estimated |
| Haryana | not found | not found | not found | No disclosure found (gap); rank/share not sourced, not estimated |
| Punjab | not found | not found | not found | Ludhiana hosts Eurogrip's 14th signature store in India, reported Mar 2026; rank/share not sourced |
| Odisha | not found | not found | not found | No disclosure found (gap); rank/share not sourced, not estimated |
| Kerala | not found | not found | not found | No disclosure found (gap); rank/share not sourced, not estimated |

*Source: research/data/state_parc.csv; [RC18] to [RC21]; [RC32] to [RC34]; [RC224] (14th store release).*
*Eight of the fifteen top states carry "not found" against two-wheeler-specific registration data, per the no-invented-number rule; a third-party Vahan-scraped table was checked and rejected because it reports all-vehicle totals, not two-wheeler-specific ones, and shows an internal inconsistency on Telangana [RC77].*

**The pilot-state rule, applied.** PLAN.md §2.2.7 fixes the rule in advance of seeing the data: Pilot A is the state with the highest Eurogrip presence among the top-10 two-wheeler registration states, and Pilot B is the state with the largest two-wheeler registrations where Eurogrip's presence is weaker. Applying real evidence:

| Evidence | Tamil Nadu | Uttar Pradesh |
|---|---|---|
| Two-wheeler registration rank among sourced states | 5th (16,49,960, 7.6% share) | 1st (29,95,980, 13.8% share) |
| Eurogrip HQ, main plant, R&D centre | Yes, Madurai [RC35] | No |
| Eurogrip signature stores | Four, opened May to Jul 2025 in Chennai (Velachery, Selaiyur, Villivakkam, Perambur) [RC32] | None found in this search |
| Management statement | COO: "Chennai an important market for us" [RC33] (Q-ID QC01) | None found |
| Overall presence read | Longest-standing, deepest (home state, four stores, management quote) [RC36] | Thinner, recent-only (no stores found) against the largest registration base |
| Pilot role | **Pilot A** (highest presence among top-10 registration states) | **Pilot B** (largest registrations, weaker presence) |

*Source: [RC18], [RC32] to [RC36]; PLAN.md §2.2.7 pilot-state rule; [M c4.pilot_states].*

The rule's default assumption at planning time named Tamil Nadu and Uttar Pradesh exactly, and the evidence gathered in this lane confirms both defaults without needing to override them: Tamil Nadu carries Eurogrip's longest-standing presence by every measure found (headquarters, plant, R&D, a four-store retail push, and a named management quote), while Uttar Pradesh is the clearest case of a state with the largest sourced two-wheeler registration base and no located Eurogrip-specific presence at all [RC36] [M c4.pilot_states].

### 6.4 Fragmentation: an own-account, owner-operated universe

No source gives a motorcycle-repair-specific (NIC 4540) split between establishments with hired workers and establishments run by their owner alone. The closest available evidence is the National Statistical Office's all-sector Quarterly Bulletin of Unincorporated Sector Enterprises for April to June 2026, which covers all unincorporated non-agricultural establishments (manufacturing, trade, other services), not NIC 4540 specifically [RC73]. It shows the share of unincorporated establishments with regular hired workers fell to 12.13% in April to June 2026 from 13.25% in the prior quarter, which means about 87.9% of all unincorporated establishments nationally are run without regular hired staff, an own-account, owner-operated structure [RC74]. This all-sector figure is directional, not NIC-4540-specific evidence, and the document labels it as such; it is nonetheless consistent with every other fragmentation signal this lane found, from the roadside, single-operator character of puncture repair described in an adjacent commercial-vehicle tyre-maintenance report [RC52] to the single-operator anecdote of a mobile puncture-repair shop in Aurangabad [RC76].

| Fragmentation indicator | Figure | What it covers | Caveat |
|---|---|---|---|
| Unincorporated establishments, April-June 2026 (all-sector, NSO) | 8.67 crore, up from 7.94 crore a year earlier (9.2% YoY) | All manufacturing, trade and other-services establishments | All-sector, not NIC-4540-specific [RC73] |
| Share with regular hired workers, April-June 2026 (all-sector, NSO) | 12.13%, down from 13.25% the prior quarter | Same all-sector base | Implies about 87.9% own-account; all-sector, not NIC-4540-specific [RC74] |
| Puncture-repair work concentration (adjacent, commercial-vehicle) | "mostly handled by local retailers, roadside garages and independent workshops" | Commercial-vehicle tyre maintenance, not two-wheeler | Association, not proof, for the two-wheeler segment specifically [RC52] |

*Source: [RC73], [RC74], [RC52].*

The practical consequence for programme design is that enrolment cannot assume an organised employer-side channel: a scheme built around onboarding "workshop owners who then roster their staff" would miss most of this universe, since most outlets have no regular hired staff to roster in the first place. This is one reason the recommended design (§10) enrols the individual mechanic or shop directly, through distributor sales staff or self-enrolment by missed call or WhatsApp, rather than through an employer layer that the fragmentation evidence suggests mostly does not exist.

### What this section establishes, and what it does not

- It establishes a defensible range for the mechanic and puncture-shop universe (2.7 to 15.0 lakh, base 7.8 lakh) built from four independent methods, with the two estimate methods' disagreement logged as a conflict rather than silently resolved.
- It establishes that three-quarters of this universe (S-B and S-C combined, 75%) never stocks a tyre, which is the quantitative face of the brief's own insight that advocacy and stocking are not the same thing `[C4-B14]`.
- It establishes, with real evidence rather than only the plan's default assumption, that Tamil Nadu and Uttar Pradesh are the correct Pilot A and Pilot B states under the fixed pilot-state rule.
- It establishes that the universe is fragmented and own-account by the best available (all-sector) proxy evidence, which shapes the enrolment design in §10 and §12.
- It does not establish a single, official, NIC-4540-specific national count; no such count exists in published Indian statistics, and the document does not manufacture one.
- It does not split S-B from S-C using any sourced survey; that three-way split rests on stated assumptions (A05a to A05c), carried transparently rather than disguised as data.

Exhibit for the deck: S2 P1 (segment bar, lakh outlets by segment); Appendix A1.

## 7. Awareness is not Eurogrip's gap: 4 of 5 advocacy branches fail downstream of it, and the mechanic's jobs explain why

**Answer.** Eurogrip's own qualitative brand-track evidence locates the weakness downstream of awareness, not inside it: mechanic awareness is described as "average, lukewarm", while Eurogrip's tyre stocking "lags well behind competing brands" and recommendations are "not much in favour of Eurogrip" `[C4-B11]` `[C4-B07]`. Neither sentence carries a number in the brief, and this document attaches none to them. Splitting the weakness into five MECE branches (awareness, stocking, recommendation, sustainability, tracking) shows four of five below par while awareness alone is adequate, which is why §10's design spends its money on stocking, recommendation, sustainability and tracking rather than on awareness advertising. A fifth brief sentence, `[C4-B12]`, is struck through in the source PDF and is never presented here as a finding; the tools-and-visibility direction it once claimed is instead carried by the judging criterion `[C4-B27]` and the visibility insight `[C4-B13]`, and tested, not assumed, in the pilot's randomised reward-currency arm.

### 7.1 Five branches, and only one of them is not a problem

The brief gives Eurogrip a MECE way to locate its own weakness: awareness, stocking, recommendation, sustainability and tracking are mutually exclusive stages of the same advocacy chain and, together, collectively exhaust what "a mechanic recommends a tyre" requires. A mechanic cannot stock, recommend or sustainably advocate a brand he has never heard of; equally, a mechanic can be fully aware of a brand and still not stock it, not recommend it, and leave no record that he ever considered it. Reading the brief sentence by sentence against this frame shows exactly where the chain breaks.

| Branch | Sub-branch | What the brief says | Brief ID | Reading |
|---|---|---|---|---|
| 1. Awareness | 1.1 Has the mechanic heard of Eurogrip as a brand | "Awareness among mechanics is average / lukewarm" | `[C4-B11]` | Adequate, not a gap; the brief does not call awareness a problem |
| 1. Awareness | 1.2 Recall at the moment of replacement | No brief evidence either way | | Untested; the programme's visibility items (board, apron, code card) are a recall aid, not the primary lever |
| 2. Stocking | 2.1 Eurogrip tyres physically on the shelf at outlets that sell tyres | "Eurogrip's tyre stocking lags well behind competing brands" | `[C4-B11]` | A real gap, named directly |
| 2. Stocking | 2.2 Working-capital barrier at non-stocking outlets | Three-quarters of the mechanic and puncture-shop universe never stocks any tyre at all (§6) | `[C4-B14]` `[M c4.segments]` | Structural, not a brand-perception problem; stocking cannot be the universal fix because most of the universe cannot stock by definition of its role |
| 3. Recommendation | 3.1 Which brand the mechanic names when asked | "Mechanic preferences / recommendations are not much in favour of Eurogrip" | `[C4-B07]` | A real gap, named directly |
| 3. Recommendation | 3.2 How that advocacy is organised today | "Powerful but informal... unstructured, inconsistent, hard to place on the same plans as their peers" | `[C4-B05]` | A real gap: the channel exists and is influential, but has no structure a brand can build on |
| 4. Sustainability | 4.1 Whether advocacy persists after a sign-up incentive | The brief explicitly rules out "high-cost, one-off incentives that are hard to sustain or track" and sets sustainability as a named evaluation criterion | `[C4-B10]` `[C4-B21]` `[C4-B29]` | A real gap: nothing in the current relationship is built to persist |
| 5. Tracking | 5.1 Whether Eurogrip can measure what advocacy it is buying | Brief asks for "some mechanism to track or estimate program effectiveness, even if not a perfect measurement system" | `[C4-B22]` `[C4-B30]` | A real gap: no tracking mechanism exists today for an informal channel |

*Source: `[C4-B05]`, `[C4-B07]`, `[C4-B10]`, `[C4-B11]`, `[C4-B14]`, `[C4-B21]`, `[C4-B22]`, `[C4-B29]`, `[C4-B30]`; §6; `[M c4.segments]`.*

The practical reading of this table is not that awareness can be ignored; it is that awareness is the one branch the brief itself does not flag, so a design that spent the budget chasing awareness (mass advertising to mechanics, say) would be solving a problem the brief's own research says is not the live one. The four branches that are flagged, stocking, recommendation, sustainability and tracking, are exactly the four the recommended design in §10 answers: Tier 3 asks for stocking without requiring it of the two-thirds of the universe that cannot; the code-and-credit loop gives recommendation a structure; the six-month re-qualification and quarterly consumables refill answer sustainability; and the retailer-app log plus mystery-rider audit answer tracking.

### 7.2 What the brief's insights say, and carefully do not say

Two brief insights carry real information and neither carries a number, a distinction this document holds to throughout. `[C4-B11]` is a compound sentence: mechanic awareness is average, Eurogrip's stocking lags competing brands, and the opportunity is explicitly named as "converting awareness into stocking and recommendation". This sentence is the single clearest piece of direction in the whole brief for where the programme should spend its effort: not on awareness, which the sentence itself treats as already adequate, but on the stocking-to-recommendation conversion the sentence names. `[C4-B13]` is the second live insight: "preference for brand-visibility items (branded merchandise, display boards, uniforms) is rising quickly, mechanics increasingly value association and status, not just utility or money." Again, no percentage, no survey size, no named study methodology beyond "Eurogrip's mechanic brand-track study" `[C4-B06]`, which the brief itself describes only in qualitative terms. Both insights are treated in this document exactly as the brief states them, as directional findings from a company study whose detail was not disclosed to the case teams, never inflated into a statistic this document did not receive.

A third insight, `[C4-B14]`, "a meaningful share of brand advocacy already comes from mechanics who do not even stock Eurogrip tyres, showing that influence and stocking are not the same thing", is the foundation of §6's segmentation and the seed planted in §5 before this document names the design in §10. It is carried here only to connect the three live insights into one reading: awareness is fine, stocking lags, recommendation lags, advocacy already happens independent of stock, and mechanics are shifting toward valuing visibility and status. Read together, these four sentences point at a single design: credit the recommendation wherever it happens, pay in things a mechanic displays and uses rather than only in cash, and pull stocking along at the tier where the brief says the gap sits.

### 7.3 Jobs to be done: the same four jobs, met differently by segment

The jobs-to-be-done framework (document framework table, ARGUMENT.md) asks what a mechanic is actually trying to get done when a rider walks in, independent of which brand he ends up recommending. Four jobs recur across all three segments from §6.2, but what satisfies each job differs sharply by segment, which is why the tier ladder in §10 gives each segment a different entry point rather than one undifferentiated reward.

| Segment | Fix fast | Earn | Look professional | Keep the customer |
|---|---|---|---|---|
| S-A, stocking mechanic-retailer | Turn the bay over quickly; a slow fitting job ties up the one bay a small shop has | Margin on the tyre itself; a stocked unit that does not sell quickly ties up working capital the shop cannot easily carry | Credibility that justifies charging a margin against anonymous roadside competition that undercuts on price | Repeat servicing and warranty-linked maintenance visits, not just the one tyre sale |
| S-B, service mechanic, non-stocking | Engine, brake and electrical turnaround; the tyre recommendation is one line item inside a longer job, not the job itself | A labour charge per job (two-wheeler general service, labour only, runs roughly ₹300 to ₹600 per visit, vendor-reported) `[RC50]`, since there is no tyre margin to earn without stock | Looking like a shop whose recommendation is worth following, not just a pair of hands that can turn a wrench | Being the trusted advisor who sends the rider to the right purchase, even though the sale itself happens elsewhere |
| S-C, puncture and tyre-repair shop | Patch and reinflate within minutes; this is the single most frequent tyre-related moment a rider experiences, by the nature of two-wheeler riding in India | A per-repair charge (puncture repair, labour only, runs roughly ₹50 to ₹150, or ₹50 to ₹250 with parts, vendor-reported) `[RC50]`, so consumables that run out are the real cost line, not a one-off tool purchase | Looking equipped (a gauge, an inflator, a board) rather than improvised, against a backdrop where this segment is the most informal and least capitalised of the three | Being trusted to say honestly "this tyre is finished" rather than oversell a repair that will fail again in a week |

*Source: §6.2; `[RC50]`; ARGUMENT.md framework table (jobs to be done).*

The table's "earn" column is the one that most directly explains why a cash-per-tyre loyalty scheme, examined in full in §9, is the wrong instrument for two of the three segments: S-B and S-C earn from labour and consumables, not from tyre margin, so a reward tied to tyre sales rewards a transaction neither segment is actually paid to make. A reward tied to the recommendation itself, regardless of who stocks the tyre, reaches all three jobs-to-be-done profiles with the same mechanism.

### 7.4 Mechanic economics: thin, variable, and not fit to be averaged into one number

No government or company survey publishes mechanic or puncture-shop income, shop size or labour charges for India specifically. Every figure available to this lane is either a vendor career-salary site, a vendor project-report template's forward projection for a hypothetical new workshop, or a single named news anecdote, and this document labels each one by what it actually is rather than averaging them into an implied national income, following R-C's own closing caution on this point.

| Source | Figure | What it actually measures | Label |
|---|---|---|---|
| Indeed India `[RC46]` | ₹20,599 a month average, based on 23 reported salaries | A salaried "automotive mechanic" job title's self-reported pay | Vendor-reported, small sample |
| Indeed India `[RC47]` | ₹17,978 a month average, based on 207 reported salaries | A salaried, generic "mechanic" job title's self-reported pay | Vendor-reported |
| Solve24 `[RC48]` | Helper ₹15,000 to ₹22,000/month; mid-level ₹22,000 to ₹38,000/month; experienced ₹38,000 to ₹55,000/month; specialist with own setup ₹55,000 to ₹90,000-plus/month | Pay bands by seniority tier | Vendor-reported; the source page is internally inconsistent between its own introduction and its own pay table on the top tier, and is cited here with that inconsistency disclosed rather than silently resolved |
| Solve24 `[RC50]` | Puncture repair labour ₹50 to ₹150 (₹50 to ₹250 with parts); two-wheeler general service labour ₹300 to ₹600 (₹600 to ₹1,400 with parts) | Per-job charges at the point of sale | Vendor-reported |
| Finline project-report template `[RC71]` `[RC72]` | A 4-bay workshop: Year 1 revenue about ₹17.3 lakh, Year 2 about ₹28.1 lakh, Year 3 about ₹40.3 lakh; net profit after tax about ₹3.8 lakh, ₹7.2 lakh and ₹11.4 lakh in the same three years | A vendor's own forward financial projection for a hypothetical NEW 4-bay workshop, not observed income of an existing one | Vendor-projected, hypothetical |
| The Tribune India, named anecdote `[RC76]` | About ₹500 a day during the 2020 lockdown period, for a mobile puncture-repair operator in Aurangabad | One named individual's self-reported daily earning during an unusual period (lockdown), with no monthly or non-lockdown baseline given | Single anecdote, not representative |

*Source: `[RC46]` to `[RC50]`, `[RC71]`, `[RC72]`, `[RC76]`.*

| Segment | Cash sensitivity (from §7.4's income rows) | Fit for a one-off cash reward | Fit for a recurring in-kind reward |
|---|---|---|---|
| S-A | Lower; margin-bearing, more capitalised | Matchable by a rival within days; does not build loyalty | Cost-shared hardware (changer, inflator) is a genuine capital-cost offset this segment values |
| S-B | Higher; paid by labour charge, no tyre margin | A cash reward for a sale the mechanic did not make himself reads as a windfall, not an earned reward | Tools that make the non-tyre half of the job easier are used daily and visibly |
| S-C | Highest; paid per repair, most informal, least capitalised | A cash sum large enough to matter is also large enough to be the "high-cost, one-off incentive" the brief rules out `[C4-B10]` | Consumables that run out every quarter (patches, rubber solution) are a recurring, low-value, genuinely needed input |

*Source: §6.2; §7.3; §7.4; `[C4-B10]`.*

Read across these rows rather than averaged into one figure, three things are consistent. First, income at the bottom of this trade (helper-level pay, puncture-repair labour charges) is low in absolute terms and paid per job rather than as a salary, which is why a programme that asks for cash up front, even a modest one, is a real barrier at this end of the universe while a free-to-join, pay-in-kind structure is not. Second, income rises sharply with seniority and with owning a setup rather than working in one, which maps directly onto the segment split in §6.2: S-A operators, who run the more capitalised end of the trade, can absorb a cost-shared Tier 3 asset (a changer, an inflator) in a way S-B and S-C operators generally cannot. Third, every one of these figures is volatile, job-rate or projection-based rather than a stable wage, which is exactly the condition under which a recurring, low-value, in-kind reward (a quarterly consumables refill, worth a few hundred rupees) reads as meaningfully useful rather than trivial, because it offsets a real and recurring input cost rather than adding a one-off bonus on top of a stable salary. This is the economic logic behind pay in tools rather than cash: a free tool that reduces a recurring input cost is worth more, relative to this income profile, than an equivalent one-off cash sum that a rival can match within a week.

### 7.5 The struck insight, ruled: what this document never claims, and what it claims instead

One sentence in the brief's insights list is struck through in the source PDF: "Mechanic preferences for brand support have shifted: functional support, tools and equipment to change tyres, has overtaken cash and pricing incentives as the top-ranked way mechanics want to be supported by a brand" `[C4-B12]`. A struck-through sentence is deleted text, per PLAN.md §0.3 rule 5, and this document never presents it as a finding, a ranking, or evidence that Eurogrip's own research measured a shift from cash to tools. No percentage, no ranking order, and no survey result attached to that specific claim appears anywhere in this section or any other.

What this document does instead is trace the tools-and-visibility direction to two sentences that are not struck. The judging criterion itself, `[C4-B27]`, asks whether the submitted design "builds on the actual mechanic preference shift, toward tools/equipment and brand visibility, away from pure cash", which means the judges will read a design against this framing regardless of the struck sentence's evidentiary status; a design is graded against the criterion, not against the deleted insight. Separately, the visibility insight that is not struck, `[C4-B13]`, independently supports the visibility half of the same direction with its own, unstruck wording: "mechanics increasingly value association and status, not just utility or money." Together, the live criterion and the live insight justify building a tools-and-visibility design; neither claims this document has already proven mechanics prefer it to cash.

| This document never claims | This document claims instead |
|---|---|
| "Eurogrip's study shows tools overtook cash as the top-ranked way mechanics want to be supported" | The judging criterion `[C4-B27]` asks for a design built on a tools-and-visibility direction |
| A specific ranking or percentage for how many mechanics prefer tools to cash | The visibility insight `[C4-B13]` is live and unstruck, and is used exactly as the brief states it, without a number |
| That the struck sentence `[C4-B12]` is suppressed evidence rather than deleted text | It is deleted text per PLAN.md §0.3 rule 5; the document does not treat its absence as proof of the opposite claim either |

*Source: `[C4-B12]`, `[C4-B13]`, `[C4-B27]`; PLAN.md §0.3 rule 5.*

The honest resolution, consistent with PLAN.md §0.3 rule 5 and §2.2.9, is to treat the tools-versus-cash question as a hypothesis the pilot tests rather than a finding this document assumes. The pilot's matched-district experiment includes a randomised reward-currency arm: tool credits against a cash equivalent of equal value, run across the pilot districts specifically to test this preference `[M c4.audit]`. The model sizes this test at 140 shops per arm per round, 560 audits a year at steady state, for an audit cost of about ₹3.92 lakh a year `[M c4.audit]` `[T8]`, a concrete, budgeted test rather than a rhetorical gesture toward "we will check this later." Every sentence in this document that touches the tools-versus-cash question is written to this standard: it is the judging criterion's and the live insight's direction, tested in the pilot, never Eurogrip's own study proving it in advance.

### 7.6 From insight to design: a direct map, and what the design never claims

The four live insights read together (§7.2, §7.5) point at four separate design choices in §10, and the table below states that mapping directly, so a reader can check each design element against the brief sentence that justifies it rather than take the connection on trust.

| Brief insight (live, unstruck) | Brief ID | Design response in §10 | Why this insight and not the struck one justifies it |
|---|---|---|---|
| Awareness is adequate; the opportunity is converting it into stocking and recommendation | `[C4-B11]` | Tier 3 asks for stocking at the segment that can carry it (S-A); the Tier 1/2 ladder asks for recommendation, not stocking, from S-B and S-C | States the conversion target directly; carries no ranking claim about reward preference |
| Advocacy is already informal, unstructured and inconsistent | `[C4-B05]` | A personal code, logged against a tyre serial in the retailer app, gives the existing informal channel a structure it did not have before | Describes the current state's problem (no structure), not a preference ranking |
| Visibility items are rising fast in mechanic preference; association and status matter, not just money | `[C4-B13]` | The reward catalogue (§10.3) is weighted toward boards, aprons and a locator listing, not only tools | Live, unstruck sentence, used exactly as written |
| Advocacy already comes from mechanics who do not stock | `[C4-B14]` | The code works without requiring the mechanic to stock anything; stocking is asked for only at Tier 3 | States a fact about where advocacy already happens, not a preference ranking |
| (Struck) Tools and equipment overtook cash as the top-ranked support | `[C4-B12]`, struck | Not used as justification for any design element | Deleted text; the judging criterion `[C4-B27]` carries the tools direction instead, and is tested, not assumed, in the pilot |

*Source: `[C4-B05]`, `[C4-B11]`, `[C4-B12]`, `[C4-B13]`, `[C4-B14]`, `[C4-B27]`; §10.*

Set out this way, the struck sentence's absence from the "why" column is deliberate and visible: every other design element in §10 traces to a brief sentence that is still live in the source document, and the one sentence that would have most directly justified "mechanics prefer tools to cash" is excluded by name. This document would rather carry a design justified by a live criterion and a live insight than carry one justified by a deleted claim that happened to say the same thing more conveniently.

### 7.7 The reward-currency test, stated as a hypothesis with a sample size, not a finding

Because the struck sentence cannot be used, and because no other source in this lane measures whether Indian two-wheeler mechanics actually prefer tools to cash at the margin, the tools-versus-cash question is carried through this document as a Kano-style hypothesis (expanded in §10.6) that the pilot is designed to test, not a result this document already has. The table below states the test design plainly, separate from the audit design in §13, so a reader can see exactly what evidence would turn the hypothesis into a finding.

| Element | Design |
|---|---|
| Arm A | Tool credits (the recommended design's actual reward currency) |
| Arm B | A cash equivalent of identical rupee value, paid for the same logged referral |
| Assignment | Randomised by pilot district, within the two pilot states (Tamil Nadu and Uttar Pradesh, §6.3) |
| What is measured | Which arm shows higher sustained referral activity and higher mystery-rider advocacy after the initial novelty period |
| Sample size | 140 shops per arm per audit round, 560 audits a year at steady state `[M c4.audit]` `[T8]` |
| Cost | About ₹3.92 lakh a year at steady state `[M c4.audit]` `[T8]` |
| What a result would change | If Arm B (cash) matches or beats Arm A on sustained activity, the national design (§12) would carry a cash-equivalent option into Tier 1 and 2 rather than tools alone; if Arm A wins, as the visibility insight `[C4-B13]` and judging criterion `[C4-B27]` suggest it should, the tools-and-status design proceeds unchanged into national rollout |

*Source: `[M c4.audit]`; `[T8]`; PLAN.md §2.2.9.*

This is the defensive-depth answer to a judge who asks "how do you know mechanics actually prefer tools to cash, given the brief's own study struck that exact claim". The honest answer is that this document does not know it yet; it has built a ₹3.92-lakh-a-year test, sized with the standard two-proportion sample-size formula, specifically to find out before the national phase commits real money to the assumption at scale.

### What this section establishes, and what it does not

- It establishes a MECE breakdown of why mechanic advocacy for Eurogrip is weak: awareness is adequate by the brief's own reading, while stocking, recommendation, sustainability and tracking are each named gaps, and the recommended design in §10 is built to answer the four flagged branches, not the one that is not flagged.
- It establishes the two live, qualitative brief insights (`[C4-B11]`, `[C4-B13]`) exactly as the brief states them, without attaching an invented percentage or survey size to either.
- It establishes a jobs-to-be-done reading across the three segments showing that S-B and S-C mechanics earn from labour and consumables, not tyre margin, which is why a reward tied to the recommendation reaches them and a reward tied to the tyre sale does not.
- It establishes, from the best available (vendor-reported, projected, or anecdotal) evidence, that mechanic and puncture-shop income is thin, job-rate based and volatile at the lower end of the trade, which is the economic logic behind paying in recurring, in-kind rewards rather than cash.
- It rules, once and plainly, that the struck brief sentence `[C4-B12]` is never presented as a finding; the tools-and-visibility direction in this document's design is traced instead to the live judging criterion `[C4-B27]` and the live visibility insight `[C4-B13]`, and is explicitly tested, not assumed true, in the pilot's reward-currency arm.
- It does not establish, and no source available to this lane establishes, a single reliable national figure for mechanic or puncture-shop income; the figures in §7.4 are shown separately, by source type, and are never averaged into one number.

Exhibit for the deck: S2 P2 (insights 1 to 3); P4 Tier 3 (stocking ask).

## 8. 15 influencer programmes in lubricants, batteries, parts and building materials show how India pays mechanics, and 1 of them credits advice without a purchase

**Answer.** Fifteen named programmes across lubricants, batteries, auto parts, tyres, adhesives, cement and electricals give a real, sourced picture of how Indian brands pay their field-level influencers, and on the specific test that matters most to this design, whether a reward is earned by advice alone rather than by a logged purchase, only one of the fifteen, Polycab's electrician programme, clears the bar `[T10]`. Every one of the four lubricant majors pays or trains on a purchase-linked or training-linked basis; the one tyre-maker with a named mechanic-adjacent programme, JK Tyre's Advantage 2.0, is dealer-facing rather than mechanic-facing, and no rival two-wheeler tyre brand runs a mechanic-specific programme at all. This is the white-space finding this case rests on: the category Eurogrip competes in has, to the depth this lane could search, no precedent for the exact thing this document recommends.

### 8.1 Lubricants: four named mechanic programmes, every one purchase-linked or training-linked

**What it is.** Castrol India's Fast Scan is a digital incentive platform where mechanics and retailers scan a QR code from product packs and receive an instant bank payout. **Launch year.** 2019, per the company's own launch announcement `[RD01]`. **Scale.** Over 1.5 lakh mechanics and retailers enrolled by the 2019 launch `[RD01]`; a 2024 in-pack contest on the same platform ("Activ Scan & Win") paid prizes to more than 1,400 winners `[RD04]`. **Reward currency.** Cash, paid via IMPS in partnership with Standard Chartered Bank, a mechanism the company itself describes as cutting the incentive-payment cycle "from months to minutes" `[RD02]`. **Tiers.** None disclosed; it is a flat scan-and-earn structure. **Tracking mechanism.** The app itself, since every reward requires a product-pack code scan. **What transfers to Eurogrip's design.** The instant-payout mechanism (a code scanned or logged, a reward released quickly) is a usable pattern; the retailer app's existing logging relationship with Eurogrip plays the same structural role Fast Scan's scan-and-pay plays for Castrol. **What does not transfer.** The reward is tied entirely to a product purchase, which is exactly the "pays stockers, not advice" problem §9's obvious-answer critique names; a mechanic who never stocks Castrol products cannot participate in Fast Scan at all.

Castrol runs a second, larger-scale programme on the training and contest side. **What it is.** The Super Mechanic Contest, a periodic national skills contest with an IVR and website registration route. **Launch year.** Fourth edition launched September 2021 `[RD05]`. **Scale.** More than 1,40,000 mechanics participated in the 2021-22 edition, across nine languages `[RD05]`; over 24,000 mechanics were separately trained in ASDC-endorsed masterclasses as part of the same cycle `[RD06]`. **Reward currency.** A mix: the top 50 finalists competed in a three-day on-ground finale for a motorcycle, two years of family insurance and a cheque of ₹1,00,000 or a garage makeover `[RD07]`; broader participation carries no disclosed per-mechanic reward beyond contest entry and training access. **Tiers.** An implicit funnel from mass participation to a top-50 finale, not a membership-tier ladder. **Tracking mechanism.** IVR call logs and a dedicated contest website `[RD05]`. **What transfers.** The training-plus-recognition combination, and partnering a skilling body (ASDC) to add a credible skills layer, both appear in this document's own Tier 2 fitment course and certificate. **What does not transfer.** The reward structure is a one-off contest with a small number of large prizes, not a recurring, nationally distributed reward every member can expect, which is the sustainability gap this document's tier ladder is built to avoid. Separately, Castrol's longer-running Eklavya CSR programme, close to two lakh beneficiaries trained since 2009, across ten states, with ASDC as a partner `[RC67]` `[RC68]`, confirms that national-scale mechanic skilling in India is operationally possible at a cost Castrol has evidently been willing to carry for over a decade, even though Eklavya is a skilling programme, not a loyalty or referral scheme, and is cited here only as scale evidence, not as a reward-design precedent.

**What it is.** Shell's Mechanic Samriddhi is a point-based loyalty scheme: mechanics submit codes from product packs and redeem gifts. **Launch year.** Ran February to December 2014, a historical, not current, programme `[RD17]`. **Scale.** About 30,000 mechanics participated, with 15,800 qualifying for rewards `[RD17]`. **Reward currency.** In-kind: insurance, children's scholarships, and training with OEM experts, won as a package rather than cash `[RD17]`. **Tiers.** Not disclosed as a formal ladder; qualification for rewards was a threshold (15,800 of 30,000 participants qualified), not a multi-tier structure. **Tracking mechanism.** Codes from product packs, redeemed through a call centre or redemption centre, the same mechanism Pidilite's Fevicol programme uses (§8.5). **What transfers.** The "codes redeemed through a call centre, not solely an app" mechanism is a useful fallback precedent for this document's own WhatsApp and missed-call enrolment path, relevant if the retailer app's reach proves thinner than expected (§2.2.5's app-dependency rule). **What does not transfer.** The programme is a decade-plus-old, time-boxed campaign (ten months, 2014), not an ongoing membership structure; a separately claimed current Shell mechanic programme ("Ustaad Programme", "SHARE app") could not be confirmed on any page located in this lane and is excluded from this document entirely, per the ruling in conflict C-RD1 `[RD16]`.

**What it is.** Mobil's Mechanic Unnati (ExxonMobil Lubricants) is a commercial-vehicle mechanic initiative combining a limited competitive element with training. **Launch year.** Ran 1 October to 31 December 2016, explicitly tied to the Government of India's skilling push and the Automotive Mission Plan 2016 `[RD12]` `[RD13]`. **Scale.** The top 50 participating mechanics received training on new-generation engine technology, with eligible workshops upgradeable to Mobil Service Centres `[RD12]`. **Reward currency.** Skills and status, not cash: training access and a workshop-upgrade pathway. **Tiers.** A single cut at "top 50", not a graded ladder. **Tracking mechanism.** Not disclosed in sources found. **What transfers.** The idea that a brand's reward can be a shop-level status upgrade (an "upgraded" or "featured" workshop designation), echoed in this document's own Tier 3 "featured listing in Eurogrip's online tyre-shop locator". **What does not transfer.** The programme is commercial-vehicle, not two-wheeler, and time-boxed to three months, with no evidence of renewal; ExxonMobil's separate "Udaan" training initiative for retailers and lube-change-centre owners, delivered via a mobile training bus, is a related but distinct initiative and is not folded into the Mechanic Unnati count `[RD14]`.

Two further lubricant-category entries complete the category's count without a full teardown, since neither discloses enough structure to justify one. Gulf Oil runs a pan-India mechanic and retailer "connect" van activation (no disclosed reward currency or enrolment count) alongside a separate, invite-only "Gulf Unnati" app for retailers, offering purchase-linked base points, campaign bonus points, and tier advancement via KYC and purchase regularity `[RD09]` `[RD92]`; the Unnati app is retailer-facing, not confirmed mechanic-facing, and no mechanic-specific reward catalogue was found. Motul India, with Zypp Electric, runs a nationwide EV-mechanic training initiative aiming to certify over 10,000 mechanics as EV specialists, starting with a two-day pilot in Gurugram `[RD19]`; this is a training initiative, not a points-based loyalty scheme, and no separate Motul mechanic rewards programme exists in sources found.

The six lubricant-category entries, read together in one table rather than only in prose, show the category's reward pattern at a glance.

| Programme | Launch year | Scale (where disclosed) | Reward currency | Tiers | Tracking mechanism |
|---|---|---|---|---|---|
| Fast Scan, Castrol | 2019 | 1.5 lakh+ mechanics and retailers | Cash, instant IMPS payout | None (flat scan-and-earn) | App, product-pack QR scan |
| Super Mechanic Contest, Castrol | 2021-22 (4th edition) | 1,40,000+ participants; 24,000+ trained | Mixed: top-50 prizes plus training access | Mass participation to top-50 finale | IVR and dedicated website |
| Mechanic Samriddhi, Shell | 2014 (historical) | 30,000 participated, 15,800 qualified | In-kind: insurance, scholarships, OEM training | Threshold qualification, not a ladder | Product-pack codes, call centre or redemption centre |
| Mechanic Unnati, Mobil | 2016 | Top 50 trained | Skills and status (workshop upgrade path) | Single cut (top 50) | Not disclosed |
| Gulf Unnati (app) / van activation, Gulf Oil | Not disclosed | Not disclosed | Purchase-linked points, tiers via KYC | Tiered, mechanism not disclosed | App (retailer-facing) |
| EV mechanic training, Motul (with Zypp Electric) | Not disclosed | Target 10,000+ certified | Training and certification only | None | Not disclosed |

*Source: `[RD01]` to `[RD19]`, `[RD92]`.*

### 8.2 Batteries: one confirmed mechanic programme

**What it is.** Amaron Mileage (Amara Raja) is a mechanic-facing app recognising mechanics who buy Amaron Hi-Life Lubes. **Launch year.** Not disclosed. **Scale.** Not disclosed. **Reward currency.** Membership benefits and privileges, earned by a QR-code scan on redeemable coupons `[RD21]`. **Tiers.** Not disclosed. **Tracking mechanism.** QR-code scan on coupons, logged through the app. **What transfers.** The pattern of a lightweight, purchase-triggered app serving a narrow mechanic audience is a reasonable minimum viable design, relevant mainly as a floor, not a ceiling, for what this document's own design should offer. **What does not transfer.** The reward is purchase-linked exactly like the lubricant-category programmes, and the battery category shows no second confirmed mechanic programme; a search for an equivalent Exide India mechanic scheme found only non-India Exide loyalty schemes (Sri Lanka, Europe) and unsourced third-party marketing-analysis claims, which this document does not use `[RD23]`.

| Programme | Launch year | Scale (where disclosed) | Reward currency | Tiers | Tracking mechanism |
|---|---|---|---|---|---|
| Amaron Mileage, Amara Raja | Not disclosed | Not disclosed | Membership benefits and privileges | Not disclosed | QR-code scan on coupons |

*Source: `[RD21]`; `[RD23]`.*

### 8.3 Auto parts: three programmes, none crediting advice without a purchase

**What it is.** Bosch eXtra is Bosch India's loyalty programme for independent workshops. **Launch year.** Confirmed via a 2019 company leaflet `[RD24]`. **Scale.** Not disclosed. **Reward currency.** Points earned by buying Bosch car parts, via in-pack QR-code scans through the Bosch eXtra app `[RD25]`. **Tiers.** Not disclosed. **Tracking mechanism.** A Bosch representative verifies the workshop's location and credentials before enrolment through a Bosch enrolment mobile app `[RD24]`. **What transfers.** The verification step (a company representative confirms the shop is real before enrolment) is a useful fraud-control precedent, echoed in this document's own distributor-led enrolment and audit controls (§10.7). **What does not transfer.** Reward is strictly purchase-linked and workshop-facing (cars, not two-wheelers).

**What it is.** Schaeffler India's REPXPERT Mobile Training Van is a travelling technical-training initiative for commercial-vehicle mechanics. **Launch year.** Second edition in 2024 `[RD26]`. **Scale.** The first edition covered over 9,000 km, reaching more than 2,600 mechanics across eight states and 42 cities `[RD26]`. **Reward currency.** Skills: direct instruction from Schaeffler technical experts on the van `[RD27]`. **Tiers.** None; open attendance. **Tracking mechanism.** Not disclosed as a loyalty-tracking system; the separate REPXPERT app gives product information and repair guidelines, with no loyalty-points component found for the India market `[RD27]`. **What transfers.** The travelling-van model for reaching a geographically dispersed mechanic base at scale is a credible precedent for this document's own cluster-meet and distributor-led enrolment model, though the recommended design does not include a travelling van as a line item. **What does not transfer.** No reward currency is paid at all; this is a pure training initiative with no referral-credit or advocacy-tracking mechanism, the opposite of this document's own measurability requirement `[C4-B22]`.

**What it is.** Uno Minda's Uno Star 2.0 is an app-based loyalty programme spanning its full India trade network. **Launch year.** May 2024 `[RD28]`. **Scale.** Not disclosed as an enrolment count. **Reward currency.** Cash-equivalent, redeemable via bank transfer, bank gift card or gift voucher `[RD30]`. **Tiers.** Five tiers, Bronze, Silver, Gold, Platinum, Diamond, with a reward-wheel spin on reaching a new tier `[RD29]`. **Tracking mechanism.** The app itself, with KYC via Aadhaar and PAN at registration `[RD28]`. **What transfers.** The five-tier structure and the "spin a wheel on tier-up" mechanic are both status-building devices this document's own tier ladder echoes in spirit, with a re-qualification point rather than a wheel spin. **What does not transfer.** The reward is explicitly purchase-driven across the Uno Minda trade network (mechanics, retailers, service centres and distributors in one undifferentiated app); Uno Minda's own distribution head is on record naming the problem this undifferentiation causes: "loyalty programs mostly offer similar rewards and benefits to all the customers without understanding their preferences" `[Q-RD1]` `[RD30]`, a direct, verbatim, third-party validation that an undifferentiated reward structure is a known weakness in this category, one this document's segmented, tiered design is built to avoid.

| Programme | Launch year | Scale (where disclosed) | Reward currency | Tiers | Tracking mechanism |
|---|---|---|---|---|---|
| Bosch eXtra | Confirmed 2019 leaflet | Not disclosed | Points from parts purchases | Not disclosed | Enrolment app, in-pack QR scan |
| REPXPERT Mobile Training Van, Schaeffler | 2024 (2nd edition) | 2,600+ mechanics, 8 states, 42 cities (1st edition) | Skills only, no cash or points | None | None disclosed (training only) |
| Uno Star 2.0, Uno Minda | May 2024 | Not disclosed | Cash-equivalent, bank transfer or voucher | Five (Bronze to Diamond) | App, Aadhaar/PAN KYC |

*Source: `[RD24]` to `[RD30]`.*

### 8.4 Tyres: one dealer-facing programme, and a white-space finding

**What it is.** JK Advantage 2.0 is JK Tyre's dealer-facing CRM and loyalty programme, spanning passenger-car radial, truck and bus, light commercial vehicle, two-wheeler, three-wheeler, farm and retread tyre categories. **Launch year.** Not disclosed in sources found. **Scale.** A third-party agency case study, not a JK Tyre disclosure, reports about 35% dealer-member engagement, about 80% of JK Tyre's sales coming from enrolled members, and about 10% year-on-year sales growth against about 7% for the industry `[T10]`. **Reward currency.** Not disclosed in detail; the programme runs on a dashboard tracking offtake and warranty-registration data. **Tiers.** Not disclosed. **Tracking mechanism.** A dashboard built around offtake and warranty-registration data, the closest precedent in the whole benchmark set to this document's own retailer-app logging approach. **What transfers.** The dashboard-based tracking of offtake against warranty registrations is directly analogous to logging a code against a tyre serial, this document's own measurement backbone (§13). **What does not transfer, and the finding that matters most.** JK Advantage 2.0 is a dealer programme, explicitly not mechanic-facing; it rewards the shop that sells the tyre, not the mechanic who recommends it. No other major two-wheeler tyre rival, MRF, CEAT, Apollo, Bridgestone or Michelin, was found running a mechanic-specific programme of any kind in this search. This is the direct basis for this document's white-space claim: every rival tyre maker that runs a loyalty structure runs it at the dealer layer, where stock sits; none has built a programme that reaches the mechanic layer where, per §6, three-quarters of the influence network does not stock a tyre at all. A stock-independent, mechanic-facing design is not merely different from what rivals do; it is a category rivals have not yet entered.

| Programme | Launch year | Scale (where disclosed) | Reward currency | Tiers | Tracking mechanism |
|---|---|---|---|---|---|
| JK Advantage 2.0, JK Tyre | Not disclosed | About 35% dealer engagement; about 80% of sales from enrolled members (agency estimate) | Not disclosed in detail | Not disclosed | Dashboard: offtake and warranty-registration data |

*Source: `[T10]`; R-B cross-reference.*

### 8.5 Adjacent pattern benchmarks: adhesives, cement and electricals

These four categories are not Eurogrip's own, and none involves a tyre or an automotive mechanic; they are read for pattern, not for direct transfer, following the brief's own invitation to look at "adjacent categories... or any benchmark programs" `[C4-B18]`.

**What it is.** Pidilite's Fevicol Champions' Club Reward (FCCR) rewards carpenters who scan a unique barcode on relevant Fevicol packs. **Launch year.** 2012 `[RD34]`. **Scale.** A secondary estimate (not Pidilite's own disclosure) puts membership at about 40,000 carpenters across 300 clubs in 145 cities `[RD34]`. **Reward currency.** In-kind, "functional equipment to personal items" `[RD34]`. **Tiers.** Not disclosed as a formal ladder. **Tracking mechanism.** A unique barcode per pack, redeemed by calling the FCC call centre or visiting a nearby redemption centre, not solely through an app `[RD35]`. **What transfers.** Pidilite's own framing of the club as a platform "for enhancement of social status and development of professional skills of carpenters" `[RD35]` is close to verbatim language for the visibility insight `[C4-B13]` this document builds on; the non-app redemption route is again a useful fallback precedent. **What does not transfer.** The reward is purchase-linked (a barcode from a product pack), the same stocking-dependency problem the obvious answer in §9 falls into.

**What it is.** ACC's Atoot Bandhan 2.0 is a points-based contractor and mason loyalty programme. **Launch year.** Not disclosed; won the Digital Loyalty Award at DCX 2024 `[RD42]`. **Scale.** Not disclosed. **Reward currency.** Points from lead registrations, product purchases and use of on-site technical services, with bonus points from games and quizzes `[RD42]`. **Tiers.** Not disclosed. **Tracking mechanism.** The programme's own app and lead-registration system. **What transfers.** Crediting a "lead registration" alongside a purchase is the closest precedent in the whole benchmark set to crediting a recommendation separate from a sale, which is why this document scores it as "Part" rather than "No" on crediting advice without a purchase (§8.6); it is still not a full match, because the disclosed mechanism rewards lead registration plus purchase together, not an unprompted recommendation alone. **What does not transfer, and a naming caution.** "Atoot Bandhan 2.0" must never be confused with "Bandhan Rewards", a separate programme belonging to Saurashtra Cement (Hathi Cement, Sidhee Cement brands), nor with a separate, unnamed UltraTech mason and contractor loyalty programme; a 2018 vendor case study reporting a "186% rise in masons registered" names neither company and is not attributed to ACC or UltraTech anywhere in this document, per the ruling on conflict C-RD2 `[RD44]`. This naming caution also applies to Eurogrip's own retailer app, named Bandhan (§10.2); the two "Bandhan" names, ACC's contractor programme and Saurashtra Cement's rewards scheme on one side, and Eurogrip's retailer app on the other, are unrelated and must not be conflated in the deck or the document.

**What it is.** Havells runs a mobile-app loyalty programme for electricians. **Launch year.** Not disclosed. **Scale.** An investor-presentation reupload (undated) states "80K+ registered electricians", the most authoritative figure found, though carrying no explicit date `[RD45]`. **Reward currency.** Points from buying Havells products, redeemable for tools, vouchers and merchandise `[RD46]`. **Tiers.** Not disclosed. **Tracking mechanism.** The mobile app. **What transfers.** Tools as a reward catalogue category, paired with purchase tracking, at a scale (80,000-plus) that confirms a tools-based reward catalogue can run at genuinely national scale in India. **What does not transfer.** Purchase-linked, the same limitation as every lubricant and parts programme above; earlier-reported product names "Club Energy" and "Sampark" were not found on the page used to confirm this mechanism and are withdrawn from this document `[RD46]`.

**What it is.** Polycab Experts is Polycab's loyalty and engagement programme for electricians. **Launch year.** Not disclosed. **Scale.** Polycab's Electricians' Day 2026 outreach reached over 10,000 electricians across more than 900 locations, though this is a separate engagement event, not an Experts-programme enrolment count `[RD48]`. **Reward currency.** Instant bank transfer per loyalty-code scan `[RD47]`. **Tiers.** A three-tier benefits structure with welcome rewards on moving up a tier `[RD47]`. **Tracking mechanism.** Loyalty-code scan, tied to a reward app. **What transfers.** This is the one programme in the entire benchmark set that this document scores "Yes" on crediting advice without a purchase, because a secondary source explicitly links the programme's rising scale to Polycab's organised-market share gain (from about 18 to 19% in FY19 to about 27%) `[RD47]`, implying the reward reaches influence on a purchase decision, not only a direct sale by the electrician himself; this is the single closest precedent this lane found for what this document's own code-based, stock-independent design is trying to do. **What does not transfer.** The Polycab figure is secondary (not Polycab's own disclosure), and the detail of exactly which actions short of a direct sale earn a credit is not confirmed; the comparison should be read as directional, not as proof the mechanism is identical.

| Programme | Launch year | Scale (where disclosed) | Reward currency | Tiers | Tracking mechanism |
|---|---|---|---|---|---|
| Fevicol Champions' Club, Pidilite | 2012 | About 40,000 carpenters, 300 clubs, 145 cities (secondary estimate) | In-kind: functional equipment to personal items | Not disclosed | Unique pack barcode, call centre or redemption centre |
| Atoot Bandhan 2.0, ACC | Not disclosed | Not disclosed | Points: lead registration, purchase, on-site service use | Not disclosed | Programme app, lead-registration system |
| Electrician loyalty programme, Havells | Not disclosed | 80K+ registered electricians (undated) | Points from product purchase, redeemed for tools and merchandise | Not disclosed | Mobile app |
| Polycab Experts, Polycab | Not disclosed | 10,000+ reached on Electricians' Day 2026 (engagement, not enrolment) | Instant bank transfer per code scan | Three tiers | Loyalty-code scan |

*Source: `[RD34]` to `[RD48]`.*

Category counts across the full benchmark set confirm the shape of the white-space finding: six named programmes sit in lubricants, one in batteries, three in auto parts, one in tyres, and four in the adjacent pattern-benchmark categories (adhesives, cement, electricals), fifteen in total, and the tyre category's one entry is dealer-facing, not mechanic-facing.

| Category | Named programmes found | Mechanic-facing | Credits advice without a purchase |
|---|---|---|---|
| Lubricants | 6 | Yes (Fast Scan, Super Mechanic Contest, Mechanic Samriddhi, Mechanic Unnati) | 0 of 6 |
| Batteries | 1 | Yes (Amaron Mileage) | 0 of 1 |
| Auto parts | 3 | Yes (Bosch eXtra, REPXPERT), partly (Uno Star 2.0 covers mechanics among other roles) | 0 of 3 |
| Tyres | 1 | No, dealer-facing (JK Advantage 2.0) | 0 of 1 |
| Adjacent (adhesives, cement, electricals) | 4 | n/a, different trade (carpenters, masons, electricians) | 2 of 4 (ACC Part, Polycab Yes) |
| **Total** | **15** | **10 of 15 mechanic-facing** | **1 full Yes, 2 Part** |

*Source: research/data/benchmarks.csv.*

### 8.6 The feature-parity heat matrix: all 15 programmes, one table

| Programme | Category | Cash | Tools | Visibility | Skill | Credits advice without purchase | Tracks |
|---|---|---|---|---|---|---|---|
| Fast Scan, Castrol | Lubricants | Yes | No | No | No | No | Yes |
| Super Mechanic Contest, Castrol | Lubricants | Yes | Part | No | Yes | n/a | Yes |
| Mechanic Samriddhi, Shell | Lubricants | No | n/a | n/a | Yes | No | Yes |
| Mechanic Unnati, Mobil | Lubricants | n/a | n/a | n/a | Yes | n/a | n/a |
| Gulf Unnati (app) / van activation, Gulf Oil | Lubricants | No | n/a | n/a | n/a | No | Yes |
| EV mechanic training, Motul | Lubricants | n/a | n/a | n/a | Yes | n/a | n/a |
| Amaron Mileage, Amara Raja | Batteries | n/a | n/a | n/a | n/a | No | Yes |
| Bosch eXtra | Auto parts | n/a | n/a | n/a | n/a | No | Yes |
| REPXPERT Mobile Training Van, Schaeffler | Auto parts | No | No | No | Yes | n/a | n/a |
| Uno Star 2.0, Uno Minda | Auto parts | Yes | n/a | n/a | n/a | n/a | Yes |
| JK Advantage 2.0, JK Tyre | Tyres (dealer-facing) | n/a | n/a | n/a | n/a | No | Yes |
| Fevicol Champions' Club, Pidilite | Adhesives | n/a | Yes | n/a | Part | No | Yes |
| Atoot Bandhan 2.0, ACC | Cement | n/a | n/a | n/a | n/a | Part | Yes |
| Electrician loyalty programme, Havells | Electricals | n/a | Yes | n/a | n/a | No | Yes |
| Polycab Experts, Polycab | Electricals | Yes | n/a | n/a | n/a | Yes | Yes |
| **Our design** | **Tyres (mechanic-facing)** | **No** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |

*Source: research/data/benchmarks.csv; `[T10]`.*

Reading down the "Credits advice without purchase" column is the single most important scan of this table. Twelve of the fifteen programmes are explicitly "No": the reward requires a logged purchase, full stop. Two are "Part": Castrol's Super Mechanic Contest credits training participation alongside, not instead of, purchase and contest performance, and ACC's Atoot Bandhan 2.0 credits a lead registration alongside a purchase. Exactly one, Polycab Experts, is scored "Yes", on the strength of a secondary source linking the programme to a market-share gain that implies influence beyond direct sale. No programme in any category this lane searched, including the one tyre-adjacent programme found, runs a reward that is earned by advice alone, with no purchase requirement anywhere in the loop. This document's own design is the only "Yes" in the "Tools" and "Visibility" columns simultaneously while also being "No" on cash, a combination no benchmark programme in this table matches.

### 8.7 Third-party validation, verbatim, sourced only

One verbatim quotation from this lane's research supports a claim this document makes about the category: that undifferentiated, purchase-linked reward structures are a known weakness, not a settled best practice, even among brands already running large-scale mechanic and trade-partner programmes.

| Q-ID | Speaker, role | Quote (verbatim) | Date | Source |
|---|---|---|---|---|
| Q-RD1 | Uno Minda, distribution head (unnamed in source) | "loyalty programs mostly offer similar rewards and benefits to all the customers without understanding their preferences" | 2024 | `[RD30]` |

*Source: research/raw/R-D-programmes-costs.md, Quotes section.*

Several named programmes disclosed their existence but not their internal reward mechanics; the table below states these as gaps rather than filling them with an invented figure, per R-D's own gaps log.

| Programme | What is not disclosed in sources found |
|---|---|
| Mechanic Unnati, Mobil | Reward catalogue beyond "top 50 trained"; no points or tiers disclosed |
| Bosch eXtra | Reward catalogue; enrolment count |
| Gulf Unnati, Gulf Oil | Point values, conversion rate, mechanic-specific (versus retailer) enrolment |
| JK Advantage 2.0, JK Tyre | Reward currency detail; tier structure; launch year |
| Atoot Bandhan 2.0, ACC | Enrolment count; point values |

*Source: research/raw/R-D-programmes-costs.md, Gaps section.*

This is the only verbatim quotation located in the R-D lane's research that bears directly on programme design quality, and it is quoted here in full rather than paraphrased, per PLAN.md §2.2.14's rule that a quote is used verbatim or not at all. Coming from the distribution head of a company that itself runs a large, tiered, purchase-linked programme (Uno Star 2.0, §8.3), the quote is a candid, inside-the-category admission that one-size-fits-all reward design is a real and recognised weakness, independent corroboration for this document's own segmented, tiered approach (§6.2, §10.1) rather than a single undifferentiated reward for every mechanic and shop.

### 8.8 What transfers to this document's design, by category, in one table

| Category | What transfers | What does not transfer |
|---|---|---|
| Lubricants | Instant digital payout mechanism; training paired with recognition; call-centre fallback to an app | Reward tied strictly to a logged purchase in every case |
| Batteries | Lightweight, narrow-audience app as a workable minimum floor | Purchase-linked only; no second confirmed programme to cross-check against |
| Auto parts | Representative-verified enrolment (fraud control); multi-tier status ladder; dashboard tracking offtake against warranty data | Purchase-linked reward in every case; one entry (REPXPERT) pays no reward currency at all |
| Tyres | Dashboard-based offtake tracking is analogous to code-against-serial logging | Dealer-facing, not mechanic-facing; the white-space gap itself |
| Adjacent (adhesives, cement, electricals) | Status-and-association framing (Fevicol); lead-registration crediting alongside purchase (ACC); scale proof for tools-based catalogues (Havells); the one near-match on crediting advice without a purchase (Polycab) | Different trade entirely; no automotive or two-wheeler precedent among any of the four |

*Source: §8.1 to §8.5.*

### What this section establishes, and what it does not

- It establishes, from 15 named programmes across six categories, exactly how India's major consumer and industrial brands currently pay mechanics and trade-level influencers: overwhelmingly through a cash or points reward tied to a logged product purchase.
- It establishes that only one of the 15, Polycab Experts, credits advocacy independent of a direct purchase by the member, and even that case rests on a secondary, directional source rather than the programme's own disclosure of its exact reward trigger.
- It establishes a direct white-space finding specific to tyres: JK Advantage 2.0 is the only named tyre-category programme, and it is dealer-facing; no rival two-wheeler tyre maker (MRF, CEAT, Apollo, Bridgestone, Michelin) runs a mechanic-specific programme of any kind in the sources this lane searched.
- It establishes one verbatim, third-party validation, from Uno Minda's own distribution head, that undifferentiated reward design is a recognised weakness in this category, supporting this document's tiered, segment-specific approach.
- It does not establish enrolment counts, reward catalogues or tier structures for several named programmes where the source disclosed a programme's existence but not its internal mechanics (Mechanic Unnati's reward catalogue, Bosch eXtra's reward catalogue, several enrolment counts marked "not disclosed" throughout); these gaps are stated as gaps, not filled with an invented figure.
- It does not claim any of the adjacent-category patterns (carpenters, masons, electricians) transfer wholesale to tyres and mechanics; each teardown states explicitly what transfers and what does not.

Exhibit for the deck: Appendix A3 (heat grid); cover crests.

## 9. A cash-per-tyre scheme would spend about 91% of its money on tyres that sell anyway and fails three of the brief's five criteria

**Answer.** The obvious design for this case, a scan-and-earn cash coupon per Eurogrip tyre sold, modelled on the lubricant-category pattern that dominates §8's benchmark set, would cost about ₹41.70 crore a year at the base-case assumptions behind it, and about 91% of that spend would reward tyres that would have sold anyway, with no behaviour actually changed `[M c4.cash_scheme]` `[T9]`. Scored against the brief's own five judging criteria, this obvious answer fails three outright: it is not insight-grounded against the preference shift the criterion names, it does not sustain beyond the incentive itself, and it is not measurable as a recommendation signal rather than as a sale. This section states the obvious answer fairly on its own terms before the recommended design in §10 replaces it.

### 9.1 The obvious answer, stated fairly

A reasonable team facing this brief, seeing the lubricant category's dominant pattern across every major programme in §8 (Castrol Fast Scan, Mechanic Samriddhi's precursor incentive logic, Uno Star 2.0's purchase-linked points), would likely propose the same thing those categories already run: a scan-and-earn loyalty app for mechanics and puncture shops, where every Eurogrip tyre sold or fitted earns a cash coupon or points via an in-pack QR code, paid out instantly via IMPS, following the exact mechanism Castrol's Fast Scan popularised in the lubricant category `[RD01]` `[RD02]`. This is not a strawman; it is the single best-evidenced, most scalable, most immediately buildable design available from the benchmark set, and it would likely work, in the narrow sense of moving some volume, which is exactly why it needs to be taken seriously and tested against the brief's own numbers rather than dismissed on its face.

| Element | Design |
|---|---|
| Mechanism | QR code inside the tyre pack, scanned by the mechanic or retailer at the point of sale |
| Reward currency | Cash, paid instantly via IMPS or an equivalent digital rail |
| Who can earn | Any outlet that sells or fits an Eurogrip tyre, which in practice means S-A stocking retailers and any S-B/S-C outlet that happens to source and fit a tyre itself |
| Precedent | Castrol Fast Scan (1.5 lakh+ mechanics and retailers, 2019) `[RD01]`; Uno Star 2.0 (cash-equivalent, five tiers, 2024) `[RD30]` |
| What it would likely achieve | Some real volume lift among outlets that already stock Eurogrip, by rewarding a sale that previously carried no extra incentive |

*Source: §8; `[RD01]`; `[RD02]`; `[RD30]`; ARGUMENT.md.*

### 9.2 The deadweight arithmetic, shown once

The model prices this scheme at the brief's own base-case assumptions: a cash coupon of ₹80 per tyre `[A34]`, against a baseline where 50% of Eurogrip's replacement tyres are already fitted through mechanics today `[A35]`, and a scheme-driven volume lift of 10% `[A36]`. The deadweight share, the fraction of total scheme spend that rewards tyres that would have sold without the scheme, follows directly from the lift: if the scheme lifts volume by a fraction `l` over the no-scheme baseline, then of every rupee spent on the post-scheme volume, the share that would have sold anyway is `1 ÷ (1 + l)`. At the base-case lift of 10% `[A36]`, this is `1 ÷ 1.10 = 0.9091`, or about 91% `[M c4.cash_scheme]` `[T9]`. Put plainly: for every ₹11 the scheme pays out, about ₹10 of it goes to a tyre sale that was going to happen regardless, and only about ₹1 buys an incremental sale.

The cost itself follows from the same inputs. The model's rewarded-units figure is 52.12 lakh tyres a year `[M c4.cash_scheme]`; at ₹80 per tyre `[A34]`, the arithmetic is 52.12 lakh × ₹80 = ₹41,69,60,000, or about ₹41.70 crore a year `[M c4.cash_scheme]` `[T9]`, matching the model's own output exactly.

| Item | Value | Derivation |
|---|---|---|
| Cash coupon per tyre | ₹80 (base) | `[A34]` |
| Baseline share of replacement tyres fitted through mechanics | 50% (base) | `[A35]` |
| Volume lift the scheme achieves | 10% (base) | `[A36]` |
| Deadweight share | 91% | `1 ÷ (1 + 0.10) = 0.9091` `[A36]` `[M c4.cash_scheme]` |
| Tyres rewarded | 52.12 lakh a year | `[M c4.cash_scheme]` |
| Annual cost | ₹41.70 crore | 52.12 lakh × ₹80 = ₹41.70 crore `[A34]` `[M c4.cash_scheme]` `[T9]` |

*Source: `[A27]` to `[A29]`, `[A34]` to `[A36]`; `[M c4.cash_scheme]`; `[T9]`.*

Two further assumptions anchor the realism of this model without changing the deadweight share: the weighted average replacement tyre MRP is about ₹2,050 at base case `[A27]`, GST on two-wheeler tyres is 18% `[A28]`, and channel margin (distributor and retailer, on the ex-GST price) is 18% at base case `[A29]`. These three feed the net realisation and contribution-per-tyre figures used elsewhere in this document (§11's moneyshot), and are cited here only to show that the cash-scheme model is built on the same priced inputs as the recommended design, not on a separately inflated or deflated set of assumptions chosen to make the comparison look worse than it is.

### 9.3 Why a lubricant-category reward does not translate to a tyre-category reward

The deadweight arithmetic in §9.2 is a consequence, not a cause; the underlying reason a scan-and-earn cash model works for lubricants and does not translate cleanly to tyres is purchase frequency. A lubricant change recurs several times a year per bike, so a small per-change reward accumulates into a meaningful sum across a year, and the mechanic sees the brand's QR code repeatedly, which is exactly why Castrol, Shell and Mobil's programmes in §8.1 all settled on a scan-per-purchase mechanism: the purchase itself recurs often enough for a small reward to add up into real engagement. A two-wheeler tyre, by contrast, lasts years, not months; this document does not have a sourced, precise replacement-interval figure for two-wheeler tyres specifically in the raw material available to this lane, and does not invent one, but the direction is not in dispute, since the brief's own challenge statement names the problem directly: a design must avoid relying on "high-cost, one-off incentives that are hard to sustain or track" `[C4-B10]`, precisely because a reward tied to an infrequent event is forced into one of two unattractive shapes.

| Reward size, per tyre | Resulting behaviour | Why it fails the brief |
|---|---|---|
| Small (matching a lubricant-style per-unit reward) | Accumulates too slowly across a multi-year replacement cycle to meaningfully influence a single recommendation decision | Too small to change behaviour at the one moment it matters |
| Large enough to matter at a single, infrequent sale | Becomes exactly the "high-cost, one-off incentive" the brief rules out, since it is paid once every few years per mechanic-rider relationship, not routinely | Fails the sustainability criterion `[C4-B10]` `[C4-B21]` directly |

*Source: `[C4-B10]`; `[C4-B21]`; §9.1; ARGUMENT.md.*

This is also where the three-reasons argument from ARGUMENT.md's "obvious answer" section connects directly to the arithmetic above: a cash-per-tyre scheme pays only outlets that stock Eurogrip (missing the 75% of the universe established in §6 that never stocks a tyre at all, the direct contradiction of the brief's own insight `[C4-B14]`), it either underpays or overpays relative to a multi-year purchase cycle (§9.3's table above), and it is the easiest reward for a rival to match within days, since matching a cash number requires no structural change to a competitor's own programme, only a higher number on the same QR-scan mechanism every lubricant-category rival already runs.

### 9.4 Scored against the brief's five criteria

The brief sets five judging criteria for the Case 4 submission `[C4-B26]` to `[C4-B30]`. Scoring the obvious cash-per-tyre answer against each one, honestly and specifically, shows it passes two and fails three.

| Criterion | Brief wording (abridged) | Brief ID | Obvious answer's score | Why |
|---|---|---|---|---|
| Incentive realism | Would mechanics and shop owners actually engage | `[C4-B26]` | Pass | A cash reward is simple to understand and immediately engaging; this is the obvious answer's real strength |
| Insight-grounding | Builds on the actual preference shift toward tools/visibility, away from pure cash | `[C4-B27]` | Fail | The design is pure cash, the opposite of the direction the criterion names |
| Scalability | Works nationally within the budget | `[C4-B28]` | Pass | A QR-scan-and-pay mechanism is straightforward to scale nationally, and the lubricant category has already proven it at scale (Castrol, 1.5 lakh+ enrolled) `[RD01]` |
| Sustainability | Advocacy persists beyond the first incentive | `[C4-B29]` | Fail | Section 9.3 shows the reward is forced into either too-small-to-matter or too-large-to-sustain, with no recurring reason to stay engaged between infrequent tyre sales |
| Measurability | Tracking is feasible, even if imperfect | `[C4-B30]` | Fail | A QR scan records a sale at a stocking outlet, not a recommendation at a non-stocking one, which is what the brief asks to measure; it also cannot register any of the 75% of the universe (§6) that never stocks a tyre and therefore never triggers a scan |

*Source: `[C4-B26]` to `[C4-B30]`; §6; §9.1 to §9.3.*

Two passes and three fails is not a marginal result; a scheme that is simple and scalable but ungrounded in the stated insight, unsustainable by its own purchase-frequency mathematics, and unable to measure the exact thing the brief asks for (recommendation, not sale) does not clear the bar the brief itself sets, regardless of how familiar or easy to build it is. This is the direct basis for replacing it with the design in §10, which keeps the realism and scalability this obvious answer earns while fixing the three criteria it fails.

### 9.5 Three reasons, stated once, cross-referenced to the arithmetic above

ARGUMENT.md's own three-reasons structure for this case's obvious answer (§2.2.1) is restated here in full, cross-referenced to the specific evidence in §9.2 to §9.4 that supports each reason, so a reader does not have to hold the governing argument and the detailed arithmetic in two separate places.

| Reason the obvious answer falls short | Evidence in this section |
|---|---|
| It pays stockers, but advice comes from everyone | §6 establishes that 75% of the universe never stocks a tyre; a QR-scan-at-sale mechanism cannot register a credit for any of them, directly contradicting the brief's own insight `[C4-B14]` |
| Tyres sell too rarely per shop for points to add up | §9.3's frequency table shows the reward is forced into either too small to matter across a multi-year cycle or too large to be the sustainable design the brief asks for `[C4-B10]` `[C4-B21]` |
| Cash is the easiest thing for rivals to match, and it measures sales, not recommendations | §9.4 scores the design as failing measurability `[C4-B30]` for exactly this reason; §8's benchmark set shows every lubricant-category rival already runs the identical QR-scan-and-pay mechanism, so matching a higher cash number requires no structural change from a competitor |

*Source: ARGUMENT.md §"Case 4: obvious answer and three reasons"; §6; §8; §9.2 to §9.4.*

### 9.6 Deadweight is not fixed; it moves with how much lift the scheme actually buys

The 91% deadweight figure in §9.2 is the base-case reading of a single assumption, the volume lift the scheme achieves `[A36]`, and the model carries this assumption across bear, base and bull cases rather than as a single point estimate, consistent with this document's rule that uncertain numbers appear as a range. Unusually, and worth stating plainly rather than smoothing over, the model's bear case for this assumption carries the highest lift (15%) and its bull case the lowest (6%): a "bear" reading of the obvious answer is bear for Eurogrip's recommended design, not for the cash scheme itself, since a cash scheme that achieves a larger lift is, from the obvious answer's own perspective, doing relatively better, even though it still fails the three criteria in §9.4 regardless of which case applies.

| Case | Volume lift `[A36]` | Deadweight share | Derivation |
|---|---|---|---|
| Bear (for the recommended design; a strong cash-scheme outcome) | 15% | 87.0% | `1 ÷ 1.15 = 0.8696` |
| Base | 10% | 90.9% | `1 ÷ 1.10 = 0.9091` |
| Bull (for the recommended design; a weak cash-scheme outcome) | 6% | 94.3% | `1 ÷ 1.06 = 0.9434` |

*Source: `[A36]`; `[M c4.cash_scheme]`.*

Even at the most favourable case for the cash scheme (15% lift, bear), deadweight still runs at 87%, meaning fewer than one rupee in seven buys an incremental sale. This is the clearest single number in this section: there is no plausible range of the volume-lift assumption, inside the bear-to-bull band the model carries, under which a cash-per-tyre scheme stops being overwhelmingly deadweight spend.

### What this section establishes, and what it does not

- It establishes, fairly and on its own terms, what the obvious cash-per-tyre answer to this brief would look like, and credits it with the two criteria it genuinely passes (incentive realism, scalability).
- It establishes, with the arithmetic shown once, that this scheme would cost about ₹41.70 crore a year at base-case assumptions and spend about 91% of that on tyres that would have sold without it `[M c4.cash_scheme]` `[T9]`.
- It establishes why the lubricant-category reward mechanism this scheme borrows does not translate cleanly to tyres: purchase frequency forces the per-unit reward into either too small to matter or too large to sustain.
- It establishes a direct, criterion-by-criterion score against the brief's own five judging criteria, showing the obvious answer fails exactly three: insight-grounding, sustainability and measurability.
- It does not claim the obvious answer is a strawman or that cash rewards never work in this category; §8 shows four lubricant-category programmes running cash or points rewards at real national scale, and this section credits that evidence rather than dismissing it.
- It does not invent a precise two-wheeler tyre replacement-interval figure; the frequency argument in §9.3 is made directionally, against the brief's own sustainability wording, rather than against a sourced number this lane does not have.
- It does not treat the 91% deadweight figure as a fragile, cherry-picked base case; §9.6 shows deadweight stays above 87% across the full bear-to-bull range the model carries for the volume-lift assumption, so the finding holds regardless of which case a reader prefers.

A reader who still finds the cash-per-tyre answer appealing on first principles, because it is the pattern every lubricant-category rival already runs successfully at scale (§8.1), should read §9.4's criteria table again rather than treat §9.2's cost arithmetic as the whole argument. The deadweight share tells a budget-realism story; the criteria table tells a judging story, and it is the second one that determines whether this submission can win, since the brief grades the design against insight-grounding, sustainability and measurability by name, not against spend efficiency alone, and a design can be cheap to run while still losing on exactly those three names.

Exhibit for the deck: S2 P3 (obvious play rejected).

## 10. The programme: 3 tiers let every shop join free, earn tools and status for each logged recommendation, and re-qualify every six months

**Answer.** The recommended design replaces the cash-per-tyre scheme §9 rejects with a three-tier ladder that any mechanic or puncture shop can join for free, pays in tools, repair consumables and visible status rather than cash, and asks for a re-qualification every six months so the programme renews itself instead of fading after a sign-up gift `[C4-B21]`. A personal code, logged against a tyre serial in Eurogrip's existing Bandhan app, credits the mechanic's recommendation wherever it happens, including at the 75% of outlets that never stock a tyre at all `[C4-B14]` `[M c4.segments]`. Every reward in the catalogue below is priced from real Indian market quotes, not an assumed figure, and the whole structure is built to be harder for a rival running a purchase-linked cash scheme to copy than it looks, because copying it means paying for advice on tyres a rival does not sell.

### 10.1 The tier ladder, with real prices against each reward

The three tiers follow PLAN.md §2.2.4's structure exactly: entry rule, what the member gets in kind, what they give back, and when they are reviewed. The prices below are drawn from `tool_costs.csv` and `visibility_costs.csv` rather than restated from the cost-per-member model, so a reader can see the actual market items behind each tier's cost line in §11.

| Tier | Who / entry rule | Gets (in kind, never cash) | Indicative item prices | Gives back | Renewal |
|---|---|---|---|---|---|
| Tier 1 | Any mechanic or puncture shop; free sign-up by distributor sales staff or by missed call or WhatsApp; phone number, shop photo, GPS pin | Starter tubeless puncture-repair kit; small shop board with a QR code; member code card; monthly WhatsApp tips | Tubeless repair kit, retail/branded, ₹190 to ₹1,500 per piece (Moglix Kozdiko about ₹190; WAICO 13-in-1 offer ₹199) `[tool_costs.csv]`; printed/frontlit flex board, ₹10 to ₹40 per sq ft, so a basic 2x1.5 ft (3 sq ft) board prices around ₹30 to ₹120 printed `[visibility_costs.csv]` | Shares the code with riders who need a tyre; any logged referral in six months keeps the member active | Drops inactive after six months with no logged code; kit refills stop |
| Tier 2 | 6 logged referrals in 6 months, or completion of the 2-hour tyre-fitment course `[A14]` | Digital pressure gauge; tyre levers and a bead-breaker function; apron or uniform; a larger board; a completion certificate; quarterly consumables refill | Digital tyre pressure gauge, ₹499 to ₹1,500 (Onelap TyreChek offer ₹499; Kozdiko about ₹752) `[tool_costs.csv]`; tyre lever, ₹90 to ₹980 per piece `[tool_costs.csv]`; printed/promotional apron, ₹100 to ₹150 per piece `[tool_costs.csv]`; ACP shop signboard, plain/unlit, ₹180 to ₹200 per sq ft `[visibility_costs.csv]` | 12 referrals a year `[A15]` | Drops to Tier 1 if below threshold at the six-month review |
| Tier 3 | 40 referrals a year, or stocking the agreed Eurogrip core sizes `[A16]` | Electric inflator or compressor (cost-shared); a two-wheeler tyre changer for top hubs (cost-shared or lease); shop fascia; a featured listing in Eurogrip's online tyre-shop locator; priority stock through the distributor; an annual meet | Digital tyre inflator, fixed/workshop, 230V, ₹19,500 to ₹23,600 `[tool_costs.csv]`; motorcycle tyre changer machine, 1.5 HP, about ₹45,000 `[tool_costs.csv]`; ACP/acrylic signboard, lit (LED or glow), ₹190 to ₹800 per sq ft `[visibility_costs.csv]` | 40 referrals a year and stocking of core sizes `[A16]` | Same six-month review |

*Source: PLAN.md §2.2.4; `[A14]` to `[A16]`; research/data/tool_costs.csv; research/data/visibility_costs.csv; `[T3]`; `[T11]`.*

The model's own cost-per-member figures (§11, `[T3]`) are built from a weighted blend of Eurogrip's own cost share across these same items, not from the full retail prices quoted above; several Tier 3 items are explicitly cost-shared or distributor-subsidised rather than fully company-funded, which is why the model's per-member Tier 3 cost (`[A10]`, about ₹7,000 to ₹11,000 one-time, bull to bear) runs well below the full retail price of a tyre changer alone. The table above exists to show that every reward named in the tier ladder is a real, priced, purchasable Indian market item, not a placeholder description.

### 10.2 The recommendation loop and the app ruling

The loop that turns a mechanic's recommendation into a tool credit runs in five steps, following PLAN.md §2.2.5 exactly.

| Step | What happens |
|---|---|
| 1 | The mechanic recommends Eurogrip and hands the rider a code, by card, board QR, or a WhatsApp message with a store-locator link |
| 2 | The rider buys the tyre at any Eurogrip retailer, or at the Tier 3 hub itself if the mechanic also stocks |
| 3 | The retailer logs the mechanic's code against the tyre's serial number in the retailer app at the point of sale; the retailer earns a small logging credit inside its own existing scheme for doing this, giving it a reason to log |
| 4 | The mechanic's tool credits rise; credits redeem only against the programme catalogue (tools, consumables, visibility items, training seats), never as cash |
| 5 | Every six months, each member is re-tiered on logged codes against the thresholds in §10.1 |

*Source: PLAN.md §2.2.5.*

This loop depends on a live, company-run retailer app to log the code at step 3, and the app's actual identity and status matter enough to the whole design that this document states the ruling plainly rather than leaving it implicit: the programme logs codes through Eurogrip's existing retailer-facing app, named **Bandhan**, launched in 2019 for retailer loyalty, with Click-to-Order e-ordering functionality added in 2020 `[M c4.app_name]`. This naming carries one caution worth repeating from §8.5: Eurogrip's Bandhan app is unrelated to ACC's "Atoot Bandhan 2.0" contractor programme or Saurashtra Cement's "Bandhan Rewards", both discussed in §8.5 as adjacent-category pattern benchmarks; the shared word is a coincidence of two unrelated industries using a common Hindi word for "bond", and the deck and this document keep the two entirely separate.

If a future lane confirms the app is no longer live, has materially reduced reach, or never had point-of-sale logging capability built in, PLAN.md §2.2.13's kill-and-pivot criteria apply directly: a one-time build or extension cost `[A22]`, running ₹25 lakh to ₹60 lakh across bull to bear, is reserved in the cost model specifically for this contingency, and the pilot's first quarter is the point at which this is confirmed before the programme commits further rollout spend to the assumption that step 3 has a reliable channel.

| App dependency | Current ruling | Fallback if the ruling changes |
|---|---|---|
| App name and status | Bandhan, 2019 retailer-loyalty app, Click-to-Order e-ordering added 2020 | None needed at current ruling |
| One-time build/extension reserve | `[A22]`, ₹25 lakh (bull) to ₹60 lakh (bear) | Drawn down only if the app proves non-live or under-capable during the pilot |
| Manual fallback for step 3 | Not the primary design | WhatsApp or SMS code logging during any outage, per risk control R08 (§10.7) |

*Source: `[M c4.app_name]`; `[A22]`; PLAN.md §2.2.13; §10.7 (risk R08).*

### 10.3 The reward catalogue, with real prices and real SKUs

Beyond the tier-entry items already priced in §10.1, the full programme catalogue includes a set of recurring and one-time items a member actually redeems credits against, each drawn from the real market quotes in `tool_costs.csv` and `visibility_costs.csv` rather than a generic description.

| Catalogue item | Tier(s) it serves | Price (as quoted) | Note |
|---|---|---|---|
| Tyre rubber solution (puncture-repair adhesive), 50 to 75 ml | Tier 2, Tier 3 (quarterly refill) | ₹160 to ₹250 per bottle | Xpert Cycle, Max International, Supermax Cycle bottles `[tool_costs.csv]` |
| Tube/tubeless patch kit | Tier 1, Tier 2 (quarterly refill) | ₹90 to ₹300 per kit/set | Bolton Heavy Duty and similar `[tool_costs.csv]` |
| Single tyre repair patch (consumable) | Tier 1, Tier 2 | ₹62 per piece | CT-42 Tyre Repair Patch `[tool_costs.csv]` |
| Portable tyre inflator (12V or USB) | Tier 2 upgrade option | ₹699 to ₹3,499 | Tantra, UN1QUE, Mi Portable Air Compressor `[tool_costs.csv]` |
| Printed T-shirt (bulk, team visibility) | Tier 2, Tier 3 (cluster meets) | ₹190 to ₹300 per piece at 100-piece order | Qikink pricing, 5% GST on garment plus print charge `[visibility_costs.csv]` |
| Promotional cotton cap | Tier 1, Tier 2 | ₹20 to ₹92 per piece | Plain to printed `[visibility_costs.csv]` |
| Vinyl/printed sticker (code or branding) | Tier 1 | ₹1 to ₹10 per piece at bulk MOQ | Strong volume-price sensitivity `[visibility_costs.csv]` |
| General mechanic toolbox, mid-range tier | Tier 2 upgrade option | ₹500 to ₹2,000 per piece | Directory-level estimate, not a single vendor SKU `[tool_costs.csv]` |

*Source: research/data/tool_costs.csv; research/data/visibility_costs.csv.*

The quarterly consumables refill named in §10.1's Tier 2 and Tier 3 rows draws directly from the rubber-solution and patch-kit rows above; at the model's own per-member refill cost (`[A12b]` ₹180 to ₹450 a quarter for Tier 2, `[A12c]` ₹400 to ₹900 a quarter for Tier 3), a single Tier 2 refill covers roughly one to two bottles of rubber solution plus a patch kit at the prices quoted here, confirming the model's refill-cost assumption is a realistic basket of these actual items, not an arbitrary round number.

### 10.4 The sustainability engine: five mechanisms, not one incentive

PLAN.md §2.2.6 names five separate reasons this programme should keep running after the first sign-up gift, each with a different cost behaviour, reproduced here against the brief's own sustainability criterion `[C4-B21]` `[C4-B29]`.

| Mechanism | Why it persists | Cost behaviour |
|---|---|---|
| Quarterly consumables refill, active members only | Plugs and patches run out; the refill is a recurring, genuine reason to log a code | Variable, small (§10.3's consumable prices) |
| Six-month tier review | Loss of status and tools is a stronger motivator than a one-off gift, a loss-aversion effect from behavioural economics | None (a scheduling discipline, not a spend line) |
| Visibility compounds | A board, apron and locator listing bring the shop customers directly; the shop wants to keep what is already working for it | One-time, amortised over `[A11]` three years |
| Skills and a certificate | Tubeless and EV tyre fitment are new, genuinely useful skills; a certificate is a professional identity the mechanic keeps regardless of tier | Per head, one-time (`[A13]` training cost, `[A13s]` share trained per year) |
| Community and recognition | Cluster meets run by distributors; state-level, non-cash recognition for top members | Small, annual (`[A33]` meets and recognition per Tier 2/3 member) |

*Source: PLAN.md §2.2.6; `[C4-B21]`; `[C4-B29]`; `[A11]` to `[A13s]`; `[A33]`.*

The six-month review is the mechanism doing the most structural work here, and it is worth stating why explicitly, since it costs the programme nothing to run. A reward given once and never revisited (a sign-up kit, a cash bonus) has no power to influence behaviour after the day it is received; a status and toolset that can be lost at the next review, by contrast, gives every active member a standing reason to keep logging referrals between reviews, which is the exact mechanism risk control R03 (§10.7) relies on to answer the single most probable failure mode this programme faces, enthusiasm fading once the starter kit is in hand.

### 10.5 Counter-positioning: why a rival cannot simply copy this design

The 7 Powers framework's counter-positioning concept asks whether an incumbent, imitating a challenger's design, would damage its own existing business by doing so. Applied to this case, a rival tyre maker running a purchase-linked cash scheme (the pattern every lubricant-category programme in §8 already runs, and the pattern JK Tyre's own dealer-facing programme runs) cannot simply copy a stock-independent, recommendation-credited design without creating a direct conflict with its own existing programme.

| Step in the reasoning | Why it holds |
|---|---|
| A rival's existing scheme pays for tyres sold through its own dealer network | This is the JK Advantage 2.0 pattern (§8.4): reward is tied to offtake at an enrolled dealer |
| Copying this document's design means crediting a mechanic's recommendation even when the tyre that gets sold is not the rival's own | The rival would be paying a mechanic to recommend a tyre that, by definition of a recommendation-credited design, might not be the exact SKU the rival's own dealer stocks |
| This creates a direct conflict with the rival's existing dealer-loyalty economics | Paying for advice on tyres a rival does not control the sale of cannibalises the logic its own purchase-linked scheme is built on |
| A rival that instead keeps its scheme purchase-linked, to avoid this conflict, cannot reach the 75% of the universe that never stocks any tyre | Section 6 shows this is the majority of the universe; a purchase-linked design structurally excludes it |

*Source: 7 Powers framework (ARGUMENT.md); §6; §8.4; §9.*

This reasoning is stated as reasoning about structural fit, not as a claim this document has evidence of any specific rival's internal economics or stated intentions; no rival has been observed deciding not to build a stock-independent programme, and this document does not claim otherwise. What this document does claim is that the pilot-to-scale timeline (§12) is designed to build a lead in enrolled shops and logged codes before a copy, if one is attempted, could realistically match it, consistent with risk control R05 (§10.7).

### 10.6 The Kano hypothesis, flagged as untested

Section 7.7 already states the reward-currency test design in full; this subsection restates the underlying Kano-model hypothesis plainly, as a hypothesis, not a finding, because a reader arriving at §10 directly should see the same caution a reader arriving via §7 already saw.

| Reward currency | Kano category (hypothesis) | What would confirm or deny it |
|---|---|---|
| Cash | A performance attribute rivals can match within days (§9.4), not a basic need or a delighter | If Arm B of the pilot's reward-currency test (§7.7) matches or beats Arm A, cash's attribute status is confirmed |
| Tools | A basic need: something every member expects and uses daily, without which the programme is not worth joining | If Tier 1 and Tier 2 enrolment or retention is materially weaker when the starter kit is withheld, this is confirmed |
| Visibility (board, apron, listing) | A potential delighter: something that exceeds expectation and drives advocacy beyond what a functional reward alone would | If mystery-rider advocacy (§13) rises disproportionately among Tier 2 and 3 members holding visibility items, relative to members at the same referral volume without them, this is confirmed |

*Source: Kano model framework (ARGUMENT.md); §7.5 to §7.7; §13.*

This document does not claim the Kano categorisation above is proven; it is carried through the design as the working hypothesis that justifies weighting the catalogue toward tools and visibility over cash, exactly as the live brief insight `[C4-B13]` and judging criterion `[C4-B27]` direct, with the explicit intention of testing it rather than asserting it as settled.

### 10.7 Fraud controls: one credit per serial, and four more checks

A design that pays for a recommendation rather than a sale creates a new fraud surface, since the thing being verified (did this mechanic actually recommend this tyre to this rider) is harder to observe directly than a sale receipt. PLAN.md §2.2.5 and the model's own risk register name five controls addressing this directly.

| Control | What it stops |
|---|---|
| One credit per tyre serial | A single sale cannot be logged against more than one mechanic's code, closing the simplest double-counting route |
| Monthly cap per member | Caps the maximum plausible fraud exposure per member per month even if other controls are evaded |
| Random IVR call-backs to riders named on the sale | Verifies, by direct contact with the actual buyer, that the recommendation the code implies actually happened |
| Distance flag, retailer to mechanic beyond `[A21]` 15 km | Flags implausible pairings, such as a mechanic and a retailer too far apart to plausibly be part of the same real transaction |
| Distributor audit of the top earners each quarter | Targets review effort at the members with the most to gain from gaming the system, the highest-value fraud surface |

*Source: PLAN.md §2.2.5; `[A21]`; model/inputs/risks.csv; `[T12]` (risk R01).*

These five controls map directly onto risk R01 in the model's own risk register ("Mechanics could log codes for tyres riders did not actually buy, or collude with retailers to fabricate recommendations", probability 2, impact 2) `[T12]`, and are deliberately layered (a serial check, a volume cap, a verification call, a geography check, and a periodic audit) so that no single control carries the entire weight of preventing fraud; a member who evades one control still faces four more.

### 10.8 Scoring this design against the same five criteria §9.4 used

Section 9.4 scored the obvious cash-per-tyre answer against the brief's five judging criteria and found it passed two and failed three. The same five-criterion scoring, applied to this section's recommended design, is the direct mirror that shows what changed and why.

| Criterion | Brief ID | This design's score | Why |
|---|---|---|---|
| Incentive realism | `[C4-B26]` | Pass | Tier 1 is free and costs the mechanic nothing to join; every reward is priced from real market items (§10.1, §10.3) a mechanic recognises and uses, not an abstract point value |
| Insight-grounding | `[C4-B27]` | Pass | Every design element traces to a live brief sentence (§7.6's mapping table); the struck sentence is never used as justification |
| Scalability | `[C4-B28]` | Pass | The tier ladder and loop run on Eurogrip's existing distributor network and retailer app (§10.2); §12 details the three-gate national rollout within the 1.5% to 2% budget envelope |
| Sustainability | `[C4-B29]` | Pass | Five separate, independently costed mechanisms (§10.4) keep the programme running after month one, none of them a single one-off incentive |
| Measurability | `[C4-B30]` | Pass | A code logged against a tyre serial in the retailer app, a mystery-rider audit, and a matched-district pilot (§13) together measure recommendation, not just sale, directly answering the gap §9.4 found in the obvious answer |

*Source: `[C4-B26]` to `[C4-B30]`; §9.4; §10.1 to §10.7.*

A design that passes all five named criteria, where the obvious answer passed two, is the direct argument for why this document replaces the cash-per-tyre scheme rather than refining it. The two criteria the obvious answer already passed, incentive realism and scalability, are carried forward rather than discarded: Tier 1's free, zero-cash-outlay entry point keeps the "would mechanics actually engage" answer just as strong as a cash reward's immediate appeal, and the existing distributor and retailer-app infrastructure keeps the national-scale answer intact without needing new channels this design would have to build from nothing.

### 10.9 A member's path through the ladder, stated as a timeline

The tier ladder in §10.1 is easiest to read as a static table; it is worth also stating what one member's actual path through it looks like over a year, since that is closer to how a judge or a mechanic would actually experience the design.

| Point in time | Tier | What has happened | What the member holds |
|---|---|---|---|
| Month 0 | Enrolment | Signs up free via a distributor visit, missed call, or WhatsApp; phone number, shop photo and GPS pin recorded | Starter puncture-repair kit, small shop board, code card |
| Month 1 to 6 | Tier 1, working toward Tier 2 | Shares the code with riders needing a tyre; logs referrals through the retailer app loop (§10.2) | Monthly WhatsApp tips; running referral count toward the 6-referral, 6-month threshold `[A14]` |
| Month 6, first review | Tier 1 to Tier 2 (if threshold met) or stays Tier 1 | Six logged referrals in six months, or completion of the 2-hour fitment course | Digital gauge, levers, apron, larger board, certificate, first quarterly consumables refill |
| Month 6 to 12 | Tier 2, working toward Tier 3 | Twelve referrals a year is the Tier 2 standard to hold; higher-volume members approach the 40-referral Tier 3 threshold `[A15]` `[A16]` | Ongoing quarterly refills; visibility items already in daily use |
| Month 12, second review | Possible move to Tier 3 | 40 referrals in the year, or stocking the agreed core sizes | Cost-shared inflator or changer, shop fascia, locator listing, priority distributor supply, invitation to the annual meet |
| Every 6 months thereafter | Re-qualification | Logged codes against the current tier's threshold | Retained status and tools if the threshold holds; drops a tier if it does not |

*Source: §10.1; §10.2; `[A14]` to `[A16]`.*

This timeline view also makes the six-month review's behavioural logic concrete: a member who has held Tier 2 status for six months, with an apron, a board and a certificate already in daily use, faces a genuine loss, not just a missed future gain, if referrals fall below threshold at the next review. That asymmetry, between a reward already held and a reward merely promised, is the loss-aversion mechanism §10.4 names, now shown as something that happens to a specific member on a specific calendar, not only as an abstract behavioural-economics citation.

### 10.10 Why a free Tier 1 matters, given what §7.4 found about mechanic income

Section 7.4 showed that income at the lower end of this trade (helper-level pay, per-job puncture-repair and service charges) is thin, job-rate based and volatile, not a stable salary. A design that asked for any cash outlay to join, even a small one, would be a real barrier at exactly the end of the universe where S-C puncture shops and lower-tier S-B service mechanics sit, which together make up 75% of the universe (§6.2). Tier 1's design answers this directly: zero cost to join, a starter kit given rather than sold, and enrolment that can happen without a shop visit at all, by missed call or WhatsApp, so a mechanic with no spare cash and no reliable way to travel to a distributor's office can still become a member on the same day he first hears about the programme.

| Design choice | What §7.4's income evidence implies it must avoid |
|---|---|
| Free Tier 1 entry, no joining fee | Any fee, however small, would exclude the helper-level and per-job-paid end of the trade this document's own income evidence shows is real and widespread |
| Starter kit given, not sold on credit | A credit-based starter kit creates a debt relationship, not a reward relationship, and risks the shop declining to join rather than risk a liability it cannot easily absorb |
| Self-enrolment by missed call or WhatsApp, not only a distributor visit | A shop that cannot easily close for a visit, or that operates from a roadside point rather than a fixed premises (§6.4's fragmentation evidence), still has a path to join |
| Quarterly refills sized to a few hundred rupees, not a large one-off grant | Matches the recurring, small-ticket nature of this trade's actual cash flow, shown in §7.4's per-job charge figures, rather than a lump sum that reads as unfamiliar or suspicious |

*Source: §6.2; §6.4; §7.4; §10.1.*

None of this is a claim that every mechanic in India is cash-poor; §7.4's own income table shows real variation, from helper-level pay up to a specialist with an owned setup earning several times as much. The design choices in the table above are aimed specifically at not losing the lower-income end of the universe at the enrolment stage, since a programme that only the better-capitalised S-A stocking retailers can afford to join would, by construction, miss exactly the S-B and S-C majority this case is built to reach.

### What this section establishes, and what it does not

- It establishes the full tier ladder with real, market-quoted prices behind every named reward, drawn from `tool_costs.csv` and `visibility_costs.csv` rather than a generic description, and the five-step recommendation loop that connects a mechanic's code to a logged tyre serial in Eurogrip's existing Bandhan app.
- It establishes the app-dependency ruling plainly: the programme runs on Bandhan, Eurogrip's 2019 retailer-loyalty app with 2020 e-ordering, with a budgeted fallback reserve `[A22]` if a future lane finds the app's capability thinner than assumed.
- It establishes a priced reward catalogue of real Indian market SKUs, a five-mechanism sustainability engine with no single point of failure, a 7-Powers counter-positioning argument for why a rival cannot costlessly copy this design, a Kano hypothesis stated as a hypothesis with its own test design, and a five-layer fraud-control stack mapped to the model's own risk register.
- It does not claim the Kano categorisation of cash, tools and visibility is proven; §7.7 and §10.6 both state explicitly that the pilot's reward-currency arm exists to test it.
- It does not claim knowledge of any specific rival's internal economics or stated plans; the counter-positioning argument in §10.5 is structural reasoning about fit, not an observed fact about a competitor's decision.
- It does not treat the retailer-app dependency as risk-free; §10.2 and §10.7 both carry the live fallback and reserve cost for the scenario in which that dependency does not hold.

Read end to end, this section's nine subsections are built to answer one question a sceptical judge could reasonably ask after reading §9's rejection of the obvious answer: if cash is this easy to design and this well-precedented in adjacent categories, what exactly does the alternative actually consist of, beyond the governing one-line thought in §2.2.2. The answer is a tier ladder priced against real market SKUs (§10.1), a loop that uses infrastructure Eurogrip already runs rather than infrastructure this document assumes into existence (§10.2), a catalogue a mechanic can recognise and use the same day he redeems it (§10.3), five independent reasons the programme should still be running in year two (§10.4), a structural reason a rival faces real friction in copying it (§10.5), an honestly flagged hypothesis rather than an overclaimed certainty about reward preference (§10.6), a layered fraud-control stack with no single point of failure (§10.7), a direct criterion-by-criterion score against the same five tests §9.4 applied to the obvious answer (§10.8), a concrete one-member timeline rather than only an abstract tier table (§10.9), and a design-choice table tracing the free-entry decision back to the income evidence in §7.4 rather than treating "free" as a slogan (§10.10). Section 11 now prices this whole structure in full, against the budget envelope the brief itself sets, and shows the same cost per member carried through to the moneyshot every reader of this document is ultimately asking for: how many extra tyres a single shop needs to recommend before the whole programme pays for itself.

Exhibit for the deck: S2 P4 (tier ladder and loop); P6 (rollout); P2 insight 4 (sustainability).
