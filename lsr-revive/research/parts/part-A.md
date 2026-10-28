## 0. Document control

**Purpose.** This document is the research backbone for Team IdeaForge's Round 1 submission to LSR Samagam'26, Revive the Failed '26. It carries the evidence, the model and the argument behind a 3-slide case deck on Dunzo, so every number, timeline entry and claim on a slide traces to a filing, a press report or a disclosed assumption. The brief asks teams to diagnose why a named business failed and propose a revival that keeps "same business, same core identity, same problem, different responses" [B §BD1]. This document lets that test be checked line by line.

**Source hierarchy.** Where two sources disagree, this document resolves the conflict by rank. The brief governs scope: what counts as in-bounds analysis and what is excluded [B §SG6]. Registrar-of-Companies filings as reported by Entrackr govern every financial figure, since RoC filings are the only primary-adjacent record and other outlets sometimes quote restated numbers. Contemporaneous press coverage (TechCrunch, Inc42, Reliance's own release, Forbes India, Rest of World and others) governs dated events, funding rounds and operational milestones. The conflicts this hierarchy resolved, and how, sit in Appendix D.

**Tag legend.** Every number in this document carries a tag showing where it came from.

| Tag | Meaning |
|---|---|
| [B §x] | A requirement or boundary condition drawn directly from the brief |
| [F##] | A company or financial fact from the fact base (company, funding, RoC financials) |
| [M##] | A market or competitor fact from the fact base |
| [S##] | A citation to a specific numbered source in the bibliography |
| [A##] | A disclosed modelling assumption, not a reported fact |
| [Model] | An output computed by the revival model, not observed anywhere |

**Model version.** All model numbers here come from `dunzo_revival_model.py`, run on 25 Sep 2026. The reference run printed a FY23 loss bridge of ₹226 Cr base, +₹299 Cr ads, +₹246 Cr people, +₹317 Cr fleet and +₹713 Cr stores and other, summing to the reported ₹1,801 Cr FY23 loss, with the increase over the FY21 base equal to ₹1,575 Cr, or 87% [Model]. The base case shows FY23 EBITDA of −₹172 Cr rising to +₹18 Cr in FY27, with ₹1,288 Cr of the January 2022 round still in cash [Model]. Bear, bull and sensitivity grids appear in §14 and Appendix B. A rerun should reproduce these figures exactly; a mismatch means the model has drifted, and the fix is to rerun it, not adjust the prose.

**FY24 note.** Dunzo never filed FY24 financials in the sources reviewed here. Wherever a reader might expect a FY24 actual, this document states plainly that FY24 was not reported, rather than estimating one [F12].

---

## 1. Brief coverage matrix

The table below maps every scored item in the brief to where this document and the deck answer it. "Doc §" points to the section of this research document that carries the full analysis; "Slide and panel" points to the panel on the 3-slide deck where the judge sees it.

| ID | Requirement | One-line answer | Doc § | Slide and panel |
|---|---|---|---|---|
| ES1 | The Business | Bengaluru errand app, commission-only, that became a verb: "Dunzo it" [F01, F02] | §3 | Slide 2, THE BUSINESS |
| ES2 | The Market | Urban households and 20,000+ SMBs [F24], against Blinkit, Instamart, Zepto, BB Now [M05] | §4 | Slide 2, THE MARKET |
| ES3 | The Failure Context | Swapped commission model for owned dark stores from Jun 2021, poured the Jan 2022 raise into 120 of them [F13, F07, F19] | §5 | Slide 2, THE FAILURE CONTEXT |
| ES4 | The Revival Thesis | Keep the errand network, serve it from partners' shelves, fund it with D4B, win four cities before fifteen | §2 | Slide 2, THE REVIVAL THESIS |
| WF1 | Root Cause(s) | Owned stores, reach before density, one revenue engine [RC1 to RC3] | §7 | Slide 3, ROOT CAUSES + moneyshot |
| WF2 | Critical Decisions | Six decisions, Jun 2021 to 2023, against the alternative available at the time | §8 | Slide 3, CRITICAL DECISIONS |
| WF3 | Failed Assumptions | Seven assumptions on customers, capital, unit economics, Reliance | §9 | Slide 3, FAILED ASSUMPTIONS |
| WF4 | The Unavoidable Problem | Quick commerce reached Dunzo's customers with deeper pockets on a cost base Dunzo could not fund | §10 | Slide 3, THE UNAVOIDABLE PROBLEM |
| WF5 | Missed Opportunities | Reliance's stores as shelves, D4B as a second engine, Bengaluru density, early ONDC, batching, the 2020 lesson | §11 | Slide 3, MISSED OPPORTUNITIES |
| WF6 | Point of Intervention | Jan to Apr 2022: round just landed, only about 75 stores existed, still reversible [F07, F20] | §12 | Slide 3, POINT OF INTERVENTION |
| RV1 | The Strategic Intervention | Partner-shelf fulfilment, D4B as engine two, density in four cities | §13 | Slide 4, THE STRATEGIC INTERVENTION |
| RV2 | Problem-Solution Fit | Each root cause maps to one fix with one proof point | §13 | Slide 4, PROBLEM-SOLUTION FIT |
| RV3 | Continuity | Brand, fleet, pick-drop product, local-store marketplace stay; only who holds stock changes | §13 | Slide 4, CONTINUITY |
| RV4 | Adaptation | Responses to rival speed claims, funding winter, rider cost, anchor-client risk | §13 | Slide 4, ADAPTATION |
| RV5 | Revival Outcome | FY27 EBITDA +₹18 Cr, ₹1,288 Cr cash left, base case [Model] | §15 | Slide 4, REVIVAL OUTCOME |
| RV6 | Initial Roadmap | Three phases, 0 to 6, 6 to 18, 18 to 36 months, named gates | §16 | Slide 4, INITIAL ROADMAP |
| RV7 | Feasibility | ₹1,790 Cr in the bank, a working fleet, a live Reliance relationship, Porter's proof [M13] | §17 | Slide 4, FEASIBILITY |
| BD1 | Boundary (same business, identity, problem) | Thesis changes who owns the shelf, not what Dunzo does, who it serves, or the cost problem it must solve | §19 | Slides 2 to 4 |
| SG4 | Adherence to the problem statement | Every panel is built from a brief item; nothing argues outside the ES/WF/RV list | This §1 | All core slides |
| SG6 | No legal matters as an influencing factor | Vendor disputes, NCLT proceedings, insolvency and salary disputes excluded throughout | §0 | n/a by design |
| SG9 | Sources clearly cited | Every quantitative claim carries a tag; the deck repeats a source line per slide | Appendix A | Slide 5, SOURCES |

---

## 2. The answer in one page

**Revival thesis, one line.** Keep Dunzo the city's asset-light errand network: serve the speed promise from partners' shelves instead of owned dark stores, fill idle riders with Dunzo for Business, and win four dense cities before a fifteenth.

**Three root causes.** Dunzo's decline traces to three decisions, not misfortune. First, it abandoned the commission-only, asset-light model that had carried it since 2015 and built its own dark-store network from June 2021, moving cost per completed task from about ₹30 in the partner-store model to about ₹80 with owned stores [F23]. Second, it chased reach before density, running 120 owned dark stores across 15 cities at its June 2022 peak [F19, S20] when a store needed roughly 1,200 to 1,250 orders a day at a mature metro to break even [M04], a volume most stores never reached before the cuts began [F28]. Third, it ran on one revenue engine with one dominant client: B2C traffic was over 90% of revenue as late as October 2022 [F25], while D4B generated only ₹2.3 Cr in FY22 [F24] and later leaned on JioMart for over 40% of that smaller business, a client that then cut its rates and halved D4B's margin [F27].

**The moneyshot.** Of the ₹1,801 Cr FY23 net loss, ₹1,575 Cr, or 87%, is the increase over the FY21 pre-dark-store base of ₹226 Cr [Model]. That increase breaks into four lines: ads +₹299 Cr, people +₹246 Cr, delivery fleet +₹317 Cr, and the residual, mostly dark stores and inventory net of the extra revenue they brought in, +₹713 Cr [Model]. Nearly nine of every ten rupees Dunzo lost in FY23 above its FY21 run rate paid for the dark-store war, not for running errands.

**Point of intervention.** The decision was still reversible between January and April 2022. Dunzo had just closed a $240M round, Reliance Retail putting in $200M for 25.8% [F07], the deal naming Dunzo Reliance's logistics partner and JioMart's last-mile partner [F08], with only about 75 of a planned 200 dark stores built [F20, F16]. The capital was still largely unspent and the store count small enough to redirect. By 2023 the capital was gone and the option closed.

**Revival outcome.** Under the base case, redirecting the same January 2022 capital into partner-shelf fulfilment and B2B instead of owned stores produces a FY23 EBITDA of −₹172 Cr against the actual FY23 loss of ₹1,801 Cr, roughly a 90% reduction [Model]. EBITDA turns positive in FY27 at +₹18 Cr, with ₹1,288 Cr of the round still in cash [Model]. The bull case breaks even a year earlier, in FY26 [Model]. Even the bear case, at 0.75 times base volume and ₹3 lower contribution per order, never breaks even by FY28 but still holds ₹880 Cr of cash, well short of the actual fate: cash down to ₹216 Cr by March 2023 [F12] and the app offline in January 2025 [F34].

**Why it passes the boundary test.** The revival keeps the same business (on-demand delivery and errands within a city), the same core identity ("Dunzo it," anything from any store, one fleet, one app), and the same underlying problem (a customer wants speed without Dunzo owning the shelf it delivers from). Only the response changes: instead of becoming a grocer that owns inventory, Dunzo stays a logistics and marketplace layer that borrows other people's shelves, the model it had already proven before June 2021 [F09, F10]. Nothing removes the central problem or replaces the business with something unrelated, so it satisfies the brief's own test: same business, same core identity, same problem, different responses [B §BD1].

---

## 3. The business: a city errand network that customers turned into a verb

**Founding story.** Dunzo began in 2014 as a WhatsApp errand group in Bengaluru, founded by Kabeer Biswas, Ankur Agarwal, Dalvir Suri and Mukund Jha, formalised in January 2015 and turned into an app in February 2016 [F01]. Its original pitch was blunt: "a self-completing to-do list," with a ₹45 minimum order and no free delivery in its early years [F02]. Growth was fast: by February 2018 it handled 100,000 to 120,000 tasks a month and roughly ₹1 Cr in monthly revenue, repeat purchases up from 3 to 5 a month over the prior year, delivery time down from 75 to 45 minutes [F03]. That trajectory drew Google's first-ever direct investment in an Indian startup, $12.3M in December 2017 [F04, S64].

**Value proposition.** Dunzo's promise never changed in its founding years: "Dunzo it," meaning any errand, from any store, picked up and dropped inside a city, in roughly 25 minutes as of 2019 [S05]. The company held no stock, matching a customer's request to whatever local store, restaurant or pharmacy could fulfil it and moving the item with its own riders.

**Business model.** For most of its life, Dunzo earned money two ways, both commission-style, neither requiring inventory. In FY20, merchant commission made up 53.2% of operating revenue (₹14.6 Cr) and delivery fees 45.2% (₹12.4 Cr), ads and other 1.6% (₹0.43 Cr) [F09]. By FY21 the tilt toward pure commission was near total: 96% of revenue came from commission (merchant ₹23.2 Cr, rider ₹20.8 Cr), no inventory carried, over 90% of users organic [F10]. GMV rose from ₹360 Cr in FY20 to ₹590 Cr in FY21 [F11], real demand on a genuinely asset-light structure.

**Funding timeline.** Dunzo's capital-raising history tracks its growing ambitions and eventual overreach.

| Date | Round | Amount | Investors and terms |
|---|---|---|---|
| Dec 2017 | Early round | $12.3M | Google's first direct investment in an Indian startup [F04] |
| Oct 2019 | Series D | $45M | Valuation about $200M; 2M orders a month across 8 cities [F05] |
| Jan 2021 | Series E | $40M | Total raised to date $121M [F06] |
| Jan 2022 | Reliance-led round | $240M | Reliance Retail put in $200M for 25.8%; post-money about $775M; deal named Dunzo logistics partner for Reliance stores and last-mile partner for JioMart [F07, F08] |

Dunzo is reported to have raised over $450M in total, sources placing the figure between $450M and $500M [F08].

**Operating metrics over time.** Scale kept climbing past the funding rounds above, from 100,000 to 120,000 tasks a month in Feb 2018 [F03] to 2 million orders a month across 8 cities by Oct 2019 [F05]. At its June 2022 peak, the company processed 8.3 million orders a month overall, 5.5 million from Dunzo Daily, against a monthly cash burn of ₹176 Cr [F18], running 120 owned dark stores across 8 of 15 cities served [F19].

**Dunzo for Business.** Alongside the consumer app, Dunzo ran a B2B logistics arm, Dunzo for Business (D4B), since 2018. By October 2022 it served about 20,000 SMBs and brands across 8 cities [F24], and by August 2022 it was one of the first logistics providers on the government's ONDC network, with 75,000 riders and 20,000 merchants [F26]. By July 2023, D4B completed about 30,000 orders a day across 7 cities for clients including McDonald's, Licious and Theobroma, roughly a third of company revenue, though JioMart alone made up over 40% of that book [F24].

**Identity statement.** Strip away the dark-store detour and Dunzo's fundamental identity was, and remained through 2022, anything from any store in your city, by one trusted fleet. That is the identity a revival thesis must preserve to pass the brief's boundary test, the identity the FY20 and FY21 commission numbers show it was built on before June 2021 [F09, F10].

---

## 4. The market: quick commerce arrived with bigger wallets and a different cost model

**Target customers.** Dunzo served two customer groups that never fundamentally changed: busy urban households across 7 to 15 cities wanting errands run fast, and SMBs and brands needing last-mile delivery, served through D4B and numbering about 20,000 accounts by October 2022 [F24].

**Quick commerce GMV series.** The category Dunzo entered grew explosively and kept growing after Dunzo left. GMV moved from about $0.3B in CY21 to $1.6B in CY22 to $3B in CY23 [M01]. By 2025 it had crossed $10B, about 15% of India's e-commerce GMV [M02], and by the January 2026 run-rate the category moved roughly ₹11,000 Cr a month across 7.8 million orders a day, AOV ₹460, over 6,280 dark stores, or about 1,255 orders a day per store [M03].

**Competitor table.** The field Dunzo was competing against by 2022 ran on very different capital structures depending on whether a competitor owned its shelves or borrowed them.

| Player | Model | Dark stores (2022) | Capital raised | Key metric |
|---|---|---|---|---|
| Blinkit | Owned dark stores | 383 (Sep 2022) [M06] | Acquired by Zomato, about ₹4,447 Cr / $568M (Jun 2022) [M07] | First contribution-positive quarter Q2FY24, +1.3% of GOV [M11] |
| Instamart | Owned dark stores | 301 (Mar 2022) [M06] | Swiggy committed $700M (Dec 2021) [M07] | AOV ₹375 to ₹450 [M10] |
| Zepto | Owned dark stores | About 220 (Apr 2022 freeze) [M06] | $360M in 8 months to May 2022; $1.85B by Nov 2024 [M07] | AOV ₹275 to ₹450 [M10] |
| BB Now | Owned dark stores | Not disclosed | Not disclosed | 8% of CY22 GMV, JM Financial estimate [M05] |
| Swiggy Genie | Asset-light pick-up-drop, no owned stores | n/a | Part of Swiggy's capital base | Paused 2022 to protect Instamart riders; suspended May 2025 [M16] |
| Porter | Asset-light intracity marketplace | None owned | Not disclosed | FY25 revenue ₹4,306 Cr, profit ₹55.2 Cr, vs FY24 loss ₹95.7 Cr [M13] |
| Shadowfax | Asset-light hyperlocal logistics | None owned | Not disclosed | Revenue ₹255 Cr (FY23) to ₹513 Cr (FY25), FY25 PAT ₹6.4 Cr [M14] |
| Dunzo | Owned dark stores from Jun 2021 (previously asset-light) | 120 (Jun 2022 peak) [M06] | $240M (Jan 2022) [F07] | FY23 loss ₹1,801 Cr on ₹226.6 Cr revenue [F12] |

The asset-light players (Swiggy Genie, Porter, Shadowfax) survived on thin but positive margins or paused deliberately; the dark-store owners (Blinkit, Instamart, Zepto, and Dunzo once it copied them) needed hundreds of millions of dollars simply to stay in the race.

**Dark-store economics.** The unit economics behind that capital intensity show in Blinkit's 3QFY24 disclosure: revenue per order ₹115 (18.2% of GMV) against a cost of ₹100 (last mile ₹44, dark store ₹22, mid mile ₹19, other ₹13, discount ₹2), leaving a contribution of only ₹15, or 2.4% of GMV [M08]. Each dark store required capex of roughly ₹8M to ₹9M to open, monthly operating cost about ₹9.1 lakh at 1,400 orders a day, rider pay about ₹58 per delivery [M09]. A store needed roughly 1,200 to 1,250 orders a day at a mature metro to break even [M04], a bar Dunzo's network, spread thin across 15 cities, was not positioned to clear.

**Capital intensity and funding winter.** The three quick-commerce leaders backed their networks with war chests Dunzo could not match: Swiggy committed $700M to Instamart (Dec 2021), Zomato paid roughly $568M to acquire Blinkit outright (Jun 2022), and Zepto raised $360M in 8 months to May 2022, then $1.85B in total by Nov 2024 [M07]. Dunzo's entire war chest was the $240M raised in January 2022 [F07]. The capital environment then turned against everyone funding losses with fresh equity: India VC funding fell from $25.7B in 2022 to $9.6B in 2023 [M12], a roughly 63% contraction in a single year, right as Dunzo needed a second round.

**Porter's Five Forces, Indian hyperlocal delivery, 2021 to 2023.**

| Force | Rating | Reason |
|---|---|---|
| Competitive rivalry | High | Three well-funded rivals expanded stores at once (Blinkit 383, Instamart 301, Zepto about 220 by 2022 [M06]) while Dunzo spent roughly ₹40 Cr on one IPL campaign to keep pace [F21] |
| Threat of new entrants | Medium | Dark-store capex of ₹8M to ₹9M [M09] is a real barrier, but the 2022 funding boom (India VC $25.7B [M12]) let Zepto enter and scale in months; the barrier rose once the winter set in |
| Bargaining power of buyers | High | Customers multi-homed across apps at little switching cost, shown by comparable download volumes for Blinkit, Zepto and Dunzo through 2023 [M19] and AOVs that moved with whichever app discounted most [M10] |
| Bargaining power of suppliers | Medium | Gig riders were interchangeable across platforms at similar pay (about ₹58 per delivery at Blinkit [M09]); once Dunzo became its own retailer it also inherited stocking risk it never carried under the commission model [F09, F10] |
| Threat of substitutes | Medium | Kirana visits and pick-up-drop rivals like Porter and Swiggy Genie offered cheaper alternatives for errands not needing 10 to 20-minute delivery [F37, M16] |

**Dunzo's position.** At the June 2022 peak, Dunzo's 120 dark stores sat well below Blinkit's 383 and Instamart's 301, roughly in line with a diminished Zepto after its own store freeze [M06]. App downloads told a similar story: from 1 Jan to 22 Nov 2023, Blinkit drew over 14 million downloads and Zepto over 11 million, against 3.4 million for Dunzo [M19], evidence Dunzo was losing the awareness race in a category it entered late and under-capitalised.

**Note on the market-share conflict.** JM Financial's CY22 GMV estimate placed Dunzo and other smaller players at a combined 1% of category GMV [M05], a figure that sits awkwardly against Dunzo's own June 2022 data showing 5.5 million Dunzo Daily orders in a single month [F18]. Since the two cannot be reconciled, this document follows Appendix D and asserts no market-share percentage for Dunzo anywhere, using dark-store counts and order volumes instead.

---

## 5. The failure context: eighteen months from launch to retreat

**Full dated timeline.**

| Date | Event |
|---|---|
| 17 to 18 Jun 2021 | Dunzo Daily launches in Indiranagar, Bengaluru: first owned dark store, 20-minute target, 1,500 to 2,000 SKUs, plan for 250 stores [F13] |
| Aug 2021 | Dunzo Daily rebrands around a 19-minute promise; marketing head states intent to reposition Dunzo as a grocery delivery service [F13, F14] |
| Jan 2022 | $240M round closes; Reliance Retail contributes $200M for 25.8%, post-money about $775M; deal names Dunzo hyperlocal logistics partner for Reliance stores, last-mile partner for JioMart [F07, F08] |
| Apr 2022 | Targets set: 200+ dark stores, 30,000+ riders, 2 lakh orders a day by June, plus a plan to raise $250M to $300M more; founder separately claims the top 20 stores are profitable and Bengaluru has been EBITDA-positive for 12 to 15 months, a company claim, not audited [F15, F16] |
| Jun 2022 | Monthly burn hits ₹176 Cr; Dunzo Daily loses ₹230 per order in H1 2022 (incl. one-time IPL spend); 8.3M orders a month total, 5.5M from Dunzo Daily [F18] |
| Jun 2022 | Peak footprint: 120 owned dark stores across 8 of 15 cities served [F19] |
| 2022 | Stores grow from about 75 toward a planned 200; an estimated ₹1,200 Cr to ₹1,500 Cr spent for the year [F20] |
| May 2022 | IPL campaign costs about ₹40 Cr, including a QR-code ad in the final [F21] |
| Aug 2022 | Customers pushed toward 60-minute, batched delivery, saving ₹8 to ₹10 per order [F22] |
| Nov 2022 onward | Dark-store closures begin; stores under 1,000 orders a day shut; over half closed by Jul 2023, about 70% by Nov 2023 [F28] |
| Jul 2023 | JioMart cuts last-mile rates paid to D4B; gross margin falls 50 to 75% [F27] |
| Aug 2023 | Dunzo Daily shuts in every city except Bengaluru [F29] |
| 2023 | Fundraising stalls: $75M convertible notes announced, about $45M received; $80M to $100M Series G stalls on a Reliance markdown dispute; rights issue floated at about $200M, well below the $775M peak [F30] |
| Nov 2023 | Company states "business burn is now neutral," B2B growing over 128% [F32] |
| Feb 2024 | Over $100M spent on dark stores in total; company targets free-cash-flow breakeven for Mar 2024; Flipkart weighs an acquisition [F33] |
| Jan 2025 | Reliance declines to fund or buy; app and website go offline 13 January as co-founder joins Flipkart Minutes [F34] |
| Aug 2025 | Reliance formally writes off ₹1,645 Cr, its full $200M investment [F35] |

**The turning point.** The timeline has a clear hinge. The June 2021 launch of Dunzo Daily was a pilot, one dark store in one neighbourhood, still reversible on its own. The January 2022 capital injection converted that pilot into a company-wide strategy: with $240M in the bank and Reliance's retail network in the picture, the company set targets within months (200+ stores, 30,000+ riders, 2 lakh orders a day by June 2022) that only made sense if the dark-store model was now the primary growth engine [F15]. That is the moment the capital structure, headcount and marketing calendar (the ₹40 Cr IPL campaign) got built around owning shelves rather than borrowing them [F21].

**Why FY22 to FY23 is the critical window.** The financial consequences show up with a one-year lag, which is why FY22 to FY23 decides the outcome. FY22 net loss reached ₹464 Cr, already more than double FY21's ₹225.7 Cr [F12], but FY23 absorbed the full weight of a nationwide dark-store network running below breakeven volume: net loss jumped to ₹1,801 Cr on revenue of only ₹226.6 Cr [F12]. By the time closures began in November 2022, the capital that funded the stores was largely already spent, so the closures that followed, over half by July 2023 and about 70% by November 2023 [F28], were a retreat rather than a correction made in time.

---

## 6. Financial autopsy: 87% of the FY23 loss paid for the dark-store war

**The five-year financial record.** Dunzo's RoC-reported financials, in ₹ Cr, show a company tightening its spend-to-revenue ratio for two straight years before the dark-store pivot reversed the trend entirely.

| FY | Operating revenue | Total expenses | Net loss | ₹ spent per ₹1 earned | Employee cost | Delivery cost | Ad spend | Other key items |
|---|---|---|---|---|---|---|---|---|
| FY19 | 0.77 | 172.45 | 169.0 | 225.00 | 42.34 | 62.3 (ops) | 26.5 | |
| FY20 | 27.5 | 359.5 | 338.4 | 13.09 | 73.44 | 116.4 | 77.1 | IT cost 28.4 |
| FY21 | 45.8 | 263.6 | 225.7 | 5.75 | 91.6 | 50.2 | 11.03 | IT cost 43.22 |
| FY22 | 54.3 | 531.7 | 464.0 | 9.80 | 138.3 | 134.0 | 64.4 | IT cost 52.0 |
| FY23 | 226.6 | 2,054.4 | 1,801.0 | 9.09 | 338.0 | 367.4 | 309.7 | Procurement 174.4; closing cash 216.0 |

[F12]

Read across the "₹ spent per ₹1 earned" column and the shape of the history is unmistakable. That figure fell from ₹225 in FY19 to ₹13.09 in FY20 to ₹5.75 in FY21, the trajectory of a commission business getting more efficient as it scaled [F12]. It then reversed, climbing to ₹9.80 in FY22 and ₹9.09 in FY23, even as revenue grew, because the dark-store network added cost faster than revenue [F12]. FY24 was never reported [F12].

**Burn and unit losses.** Monthly cash burn peaked at ₹176 Cr in June 2022 [F18], a rate that would have exhausted the entire $240M round in roughly ten months unchecked. Dunzo Daily lost ₹230 per order in H1 2022, a figure that includes one-time IPL spend but still shows a business losing money on every grocery delivery at scale [F19]. Cost per completed task under the dark-store model ran about ₹80, against roughly ₹30 under the partner-store model, a near-tripling of unit cost for largely the same job [F23].

**The loss bridge.** The clearest way to see where the money went is to compare FY23 line items against the FY21 base, the last full year before the dark-store network existed at scale, using method A12 (each FY23 line minus its FY21 equivalent, residual assigned to dark stores and other costs net of extra revenue generated).

| Line | Calculation | ₹ Cr |
|---|---|---|
| FY21 base loss | Reported FY21 net loss | 226 |
| Ads | FY23 ads (309.7) minus FY21 ads (11.03) | +299 |
| People | FY23 employee cost (338.0) minus FY21 (91.6) | +246 |
| Delivery fleet | FY23 delivery cost (367.4) minus FY21 (50.2) | +317 |
| Dark stores, inventory and other, net of extra revenue | Residual needed to reach the FY23 total | +713 |
| FY23 loss | Sum of the above | 1,801 |

[Model, method A12, using F10 and F12]

Summed, the increase above the FY21 base comes to ₹1,575 Cr, 87% of the full ₹1,801 Cr FY23 loss [Model]. If Dunzo had held its FY21 cost structure and scaled revenue at the rate it actually achieved, its FY23 loss would have run in the low hundreds of crores, not close to two thousand. The overwhelming majority of loss growth between FY21 and FY23 traces to the dark-store build-out and the infrastructure it demanded, not to the underlying errand business Dunzo had been improving for years before.

**What the bridge does and does not claim.** The bridge decomposes reported numbers; it is not a counterfactual. It shows where the FY23 loss came from, not what would have happened had the money been spent differently, a question the revival model answers separately in §14 and §15. Nor are the four lines independent: ad, people and fleet cost scaled together because all served the same dark-store expansion, so the ₹713 Cr residual likely understates the pivot's true cost rather than double-counts it.

**The reported-history pattern, in words.** Dunzo's revenue and loss lines tell two stories depending on which side of June 2021 they sit on. From FY19 to FY21, revenue rose ₹0.77 Cr to ₹45.8 Cr, roughly 59-fold, while the loss grew far more slowly and the spend-per-rupee ratio fell every year, the signature of a marketplace finding its operating leverage [F12]. From FY21 to FY23, revenue rose again, to ₹226.6 Cr, but the loss grew faster still, to ₹1,801 Cr, so the two lines diverge rather than converge. That divergence is the dark-store thesis failing in real time: more revenue no longer meant getting closer to breakeven, it meant fixed costs growing even faster than the demand they were built to capture.
