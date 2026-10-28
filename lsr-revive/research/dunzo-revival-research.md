# Dunzo Revival: Research Deliverable

**Why Dunzo failed and how it could have survived as itself**

Team: Harsh Kawatra (Delhi Technological University, Team Leader) · Gursimran Kaur (GGSIPU) · Dayita Arora
(Ramjas College, University of Delhi)

Prepared for: LSR Samagam'26, Revive the Failed '26, Round 1, September 2026

---


## 0. Document control

**Purpose.** This document is the research backbone for Team IdeaForge's Round 1 submission to LSR Samagam'26, Revive the Failed '26. It carries the evidence, the model and the argument behind a 3-slide case deck on Dunzo, so every number, timeline entry and claim on a slide traces to a filing, a press report or a disclosed assumption. The brief asks teams to diagnose why a named business failed and propose a revival that keeps "same business, same core identity, same problem, different responses" [B §BD1]. This document lets that test be checked line by line.

**Source hierarchy.** Where two sources disagree, this document resolves the conflict by rank. First, the brief governs scope: what counts as in-bounds analysis and what is explicitly excluded [B §SG6]. Second, Registrar-of-Companies filings as reported by Entrackr govern every financial figure, since RoC filings are the only primary-adjacent record and other outlets sometimes quote restated or standalone numbers. Third, contemporaneous press coverage (TechCrunch, Inc42, Reliance's own release, Forbes India, Rest of World and others) governs dated events, funding rounds and operational milestones. The conflicts this hierarchy resolved, and how, sit in Appendix D.

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

**FY24 note.** Dunzo never filed FY24 financials in the sources reviewed for this document. Wherever a reader might expect a FY24 actual (revenue, loss, cash), this document says plainly that FY24 was not reported, rather than estimating or interpolating one [F12].

---

## 1. Brief coverage matrix

The table below maps every scored item in the brief to where this document and the deck answer it. "Doc §" points to the section of this research document that carries the full analysis; "Slide and panel" points to the panel on the 3-slide deck where the judge sees it.

| ID | Requirement | One-line answer | Doc § | Slide and panel |
|---|---|---|---|---|
| ES1 | The Business | Bengaluru errand app, commission-only, that became a verb: "Dunzo it" [F01, F02] | §3 | Slide 2, THE BUSINESS |
| ES2 | The Market | Urban households and 20,000+ SMBs [F24], against Blinkit, Instamart, Zepto and BB Now [M05] | §4 | Slide 2, THE MARKET |
| ES3 | The Failure Context | Swapped commission model for owned dark stores from Jun 2021, then poured the Jan 2022 raise into 120 of them [F13, F07, F19] | §5 | Slide 2, THE FAILURE CONTEXT |
| ES4 | The Revival Thesis | Keep the errand network, serve it from partners' shelves, fund it with D4B, win four cities before fifteen | §2 | Slide 2, THE REVIVAL THESIS |
| WF1 | Root Cause(s) | Three causes: owned stores, reach before density, one revenue engine [RC1 to RC3] | §7 | Slide 3, ROOT CAUSES + moneyshot |
| WF2 | Critical Decisions | Six decisions, Jun 2021 to 2023, logged against the alternative available at the time | §8 | Slide 3, CRITICAL DECISIONS |
| WF3 | Failed Assumptions | Seven assumptions that did not hold, spanning customers, capital, unit economics, Reliance | §9 | Slide 3, FAILED ASSUMPTIONS |
| WF4 | The Unavoidable Problem | Quick commerce reached Dunzo's customers with deeper pockets on a cost base Dunzo could not fund | §10 | Slide 3, THE UNAVOIDABLE PROBLEM |
| WF5 | Missed Opportunities | Reliance's stores as shelves, D4B as a second engine, Bengaluru density, early ONDC, batching, the 2020 lesson | §11 | Slide 3, MISSED OPPORTUNITIES |
| WF6 | Point of Intervention | Jan to Apr 2022: round just landed, only about 75 stores existed, still reversible [F07, F20] | §12 | Slide 3, POINT OF INTERVENTION |
| RV1 | The Strategic Intervention | Partner-shelf fulfilment, D4B as engine two, density in four cities | §13 | Slide 4, THE STRATEGIC INTERVENTION |
| RV2 | Problem-Solution Fit | Each root cause maps to one fix with one proof point | §13 | Slide 4, PROBLEM-SOLUTION FIT |
| RV3 | Continuity | Brand, fleet, pick-drop product and local-store marketplace stay; only who holds stock changes | §13 | Slide 4, CONTINUITY |
| RV4 | Adaptation | Responses to rival speed claims, funding winter, rider cost, anchor-client risk | §13 | Slide 4, ADAPTATION |
| RV5 | Revival Outcome | FY27 EBITDA +₹18 Cr, ₹1,288 Cr of cash left, base case [Model] | §15 | Slide 4, REVIVAL OUTCOME |
| RV6 | Initial Roadmap | Three phases, 0 to 6, 6 to 18, 18 to 36 months, with named gates | §16 | Slide 4, INITIAL ROADMAP |
| RV7 | Feasibility | ₹1,790 Cr in the bank, a working fleet, a live Reliance relationship, Porter's proof the model turns a profit [M13] | §17 | Slide 4, FEASIBILITY |
| BD1 | Boundary (same business, identity, problem) | Thesis changes who owns the shelf, not what Dunzo does, who it serves, or the cost problem it must solve | §19 | Slides 2 to 4, throughout |
| SG4 | Adherence to the problem statement | Every panel is built from a brief item; nothing argues outside the ES/WF/RV list | This §1 | All core slides |
| SG6 | No legal matters as an influencing factor | Vendor disputes, NCLT proceedings, insolvency and salary-payment disputes excluded throughout | §0 | n/a by design |
| SG9 | Sources clearly cited | Every quantitative claim carries a tag; the deck repeats a source line on every slide | Appendix A | Slide 5, SOURCES |

---

## 2. The answer in one page

**Revival thesis, one line.** Keep Dunzo the city's asset-light errand network: serve the speed promise from partners' shelves instead of owned dark stores, fill idle riders with Dunzo for Business, and win four dense cities before a fifteenth.

**Three root causes.** Dunzo's decline traces to three decisions, not misfortune. First, it abandoned the commission-only, asset-light model that had carried it since 2015 and built its own dark-store network from June 2021, moving cost per completed task from about ₹30 in the partner-store model to about ₹80 with owned stores [F23]. Second, it chased reach before density, running 120 owned dark stores across 15 cities at its June 2022 peak [F19, S20] when a store needed roughly 1,200 to 1,250 orders a day at a mature metro to break even [M04], a volume most stores never reached before the cuts began [F28]. Third, it ran on one revenue engine with one dominant client: B2C traffic was over 90% of revenue as late as October 2022 [F25], while Dunzo for Business generated only ₹2.3 Cr in FY22 [F24] and later leaned on JioMart for over 40% of that smaller business, a client that then cut its rates and halved D4B's margin [F27].

**The moneyshot.** Of the ₹1,801 Cr FY23 net loss, ₹1,575 Cr, or 87%, is the increase over the FY21 pre-dark-store base of ₹226 Cr [Model]. That increase breaks into four lines: ads +₹299 Cr, people +₹246 Cr, delivery fleet +₹317 Cr, and the residual, mostly dark stores and inventory net of the extra revenue they brought in, +₹713 Cr [Model]. Nearly nine of every ten rupees Dunzo lost in FY23 above its FY21 run rate paid for the dark-store war, not for running errands.

**Point of intervention.** The decision was still reversible between January and April 2022. Dunzo had just closed a $240M round, Reliance Retail putting in $200M for 25.8% [F07], the deal naming Dunzo Reliance's hyperlocal logistics partner and JioMart's last-mile partner [F08], with only about 75 of a planned 200 dark stores built [F20, F16]. The capital was still largely unspent and the store count small enough to redirect. By 2023 the capital was gone and the option closed.

**Revival outcome.** Under the base case, redirecting the same January 2022 capital into partner-shelf fulfilment and B2B instead of owned stores produces a FY23 EBITDA of −₹172 Cr against the actual FY23 loss of ₹1,801 Cr, roughly a 90% reduction [Model]. EBITDA turns positive in FY27 at +₹18 Cr, with ₹1,288 Cr of the round still in cash [Model]. The bull case breaks even a year earlier, in FY26 [Model]. Even the bear case, at 0.75 times base volume and ₹3 lower contribution per order, never breaks even by FY28 but still holds ₹880 Cr of cash, well short of the actual fate: cash down to ₹216 Cr by March 2023 [F12] and the app offline in January 2025 [F34].

**Why it passes the boundary test.** The revival keeps the same business (on-demand delivery and errands within a city), the same core identity ("Dunzo it," anything from any store, one fleet, one app), and the same underlying problem (a customer wants speed without Dunzo owning the shelf it delivers from). Only the response changes: instead of becoming a grocer that owns inventory, Dunzo stays a logistics and marketplace layer that borrows other people's shelves, the model it had already proven before June 2021 [F09, F10]. Nothing removes the central problem or replaces the business with something unrelated, so it satisfies the brief's own test: same business, same core identity, same problem, different responses [B §BD1].

---

## 3. The business: a city errand network that customers turned into a verb

**Founding story.** Dunzo began in 2014 as a WhatsApp-based errand group in Bengaluru, founded by Kabeer Biswas, Ankur Agarwal, Dalvir Suri and Mukund Jha, launched as a formal service in January 2015 and as an app in February 2016 [F01]. Its original pitch was blunt: "a self-completing to-do list," with a minimum order value of ₹45 and no free delivery in its early years [F02]. Growth was fast: by February 2018 it was handling about 100,000 to 120,000 tasks a month and roughly ₹1 Cr in monthly revenue, repeat purchases had risen from 3 to 5 a month over the prior year, and average delivery time had fallen from 75 to 45 minutes [F03]. That trajectory drew Google's first-ever direct investment in an Indian startup, a $12.3M round in December 2017 [F04, S64].

**Value proposition.** Dunzo's promise never changed in its founding years: "Dunzo it," meaning any errand, from any store, picked up and dropped inside a city, in roughly 25 minutes as of 2019 [S05]. The company held no stock. It matched a customer's request to whatever local store, restaurant or pharmacy could fulfil it, and moved the item with its own riders.

**Business model.** For most of its life, Dunzo earned money two ways, both commission-style, neither requiring it to hold inventory. In FY20, merchant commission made up 53.2% of operating revenue (₹14.6 Cr) and delivery/rider fees made up 45.2% (₹12.4 Cr), with ads and other sources contributing 1.6% (₹0.43 Cr) [F09]. By FY21 the tilt toward pure commission was near total: 96% of revenue came from commission (merchant fees ₹23.2 Cr, rider fees ₹20.8 Cr), the company carried no inventory, and over 90% of users arrived organically [F10]. Gross merchandise value rose from ₹360 Cr in FY20 to ₹590 Cr in FY21 [F11], real demand riding on a genuinely asset-light structure.

**Funding timeline.** Dunzo's capital-raising history tracks its growing ambitions and eventual overreach.

| Date | Round | Amount | Investors and terms |
|---|---|---|---|
| Dec 2017 | Early round | $12.3M | Google's first direct investment in an Indian startup [F04] |
| Oct 2019 | Series D | $45M | Valuation about $200M; 2M orders a month across 8 cities [F05] |
| Jan 2021 | Series E | $40M | Total raised to date $121M [F06] |
| Jan 2022 | Reliance-led round | $240M | Reliance Retail put in $200M for 25.8%; post-money about $775M; deal named Dunzo logistics partner for Reliance stores and last-mile partner for JioMart [F07, F08] |

Across its life Dunzo is reported to have raised over $450M in total, sources placing the figure between about $450M and $500M [F08].

**Operating metrics over time.** Scale kept climbing past the funding rounds above. By February 2018 the company was processing roughly 100,000 to 120,000 tasks a month [F03]; by October 2019, 2 million orders a month across 8 cities [F05]. By June 2022, its operational peak, it processed 8.3 million orders a month overall, 5.5 million from Dunzo Daily, its dark-store grocery service, against a monthly cash burn of ₹176 Cr [F18]. That month it ran 120 owned dark stores across 8 of the 15 cities it served [F19].

**Dunzo for Business.** Alongside the consumer app, Dunzo ran a B2B logistics arm, Dunzo for Business (D4B), since 2018. By October 2022 it served about 20,000 SMBs and brands across 8 cities [F24], and by August 2022 it was one of the first logistics providers on the government's Open Network for Digital Commerce (ONDC), with 75,000 riders and 20,000 merchants on the network [F26]. By July 2023, D4B completed about 30,000 orders a day across 7 cities for clients including McDonald's, Licious and Theobroma, and had grown to roughly a third of company revenue, though JioMart alone made up over 40% of that book [F24].

**Identity statement.** Strip away the dark-store detour and Dunzo's fundamental identity was, and remained through 2022, anything from any store in your city, by one trusted fleet. That is the identity a revival thesis has to preserve to pass the brief's boundary test, and it is the identity the company's own commission-based FY20 and FY21 numbers show it was built on before June 2021 [F09, F10].

---

## 4. The market: quick commerce arrived with bigger wallets and a different cost model

**Target customers.** Dunzo served two customer groups that never fundamentally changed: busy urban households across 7 to 15 cities wanting errands run fast, and SMBs and brands needing last-mile delivery, the latter served through D4B and numbering about 20,000 accounts by October 2022 [F24].

**Quick commerce GMV series.** The category Dunzo entered grew explosively and kept growing after Dunzo left it. Quick commerce GMV moved from about $0.3B in CY21 to $1.6B in CY22 to $3B in CY23 [M01]. By 2025 it had crossed $10B, about 15% of India's e-commerce GMV [M02], and by the January 2026 run-rate the category was moving roughly ₹11,000 Cr a month across 7.8 million orders a day, AOV ₹460, spread over 6,280 dark stores nationally, or about 1,255 orders a day per store [M03].

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

The pattern here is the argument in miniature: every asset-light player (Swiggy Genie, Porter, Shadowfax) either survived on thin but positive margins or paused deliberately to protect its economics, while every dark-store owner (Blinkit, Instamart, Zepto, and Dunzo once it copied them) needed hundreds of millions of dollars simply to stay in the race.

**Dark-store economics.** The unit economics behind that capital intensity show in Blinkit's 3QFY24 disclosure: revenue per order ₹115 (18.2% of GMV) against a cost of ₹100 (last mile ₹44, dark store ₹22, mid mile ₹19, other ₹13, discount ₹2), leaving a contribution of only ₹15, or 2.4% of GMV [M08]. Each dark store required capex of roughly ₹8M to ₹9M (about $100,000) to open, monthly operating cost of about ₹9.1 lakh at 1,400 orders a day, and rider pay of about ₹58 per delivery [M09]. Against that base, a store needed roughly 1,200 to 1,250 orders a day at a mature metro location to break even [M04], a bar Dunzo's network, spread across 15 cities instead of concentrated, was not positioned to clear.

**Capital intensity and funding winter.** The three quick-commerce leaders backed their networks with war chests Dunzo could not match: Swiggy committed $700M to Instamart (Dec 2021) [M07], Zomato paid roughly $568M to acquire Blinkit outright (Jun 2022) [M07], and Zepto raised $360M in 8 months to May 2022, then $1.85B in total by Nov 2024 [M07]. Dunzo's entire war chest was the $240M raised in January 2022 [F07]. The capital environment then turned against everyone funding losses with fresh equity: India VC funding fell from $25.7B in 2022 to $9.6B in 2023 [M12], a roughly 63% contraction in a single year, right as Dunzo needed a second act of capital.

**Porter's Five Forces, Indian hyperlocal delivery, 2021 to 2023.**

| Force | Rating | Reason |
|---|---|---|
| Competitive rivalry | High | Three well-funded rivals expanded stores at once (Blinkit 383, Instamart 301, Zepto about 220 by 2022 [M06]) while Dunzo spent roughly ₹40 Cr on one IPL campaign to keep pace [F21] |
| Threat of new entrants | Medium | Dark-store capex of ₹8M to ₹9M per store [M09] is a real barrier, but the 2021 to 2022 funding boom (India VC at $25.7B [M12]) let Zepto enter and scale in months; the barrier rose once the winter set in |
| Bargaining power of buyers | High | Customers multi-homed across apps at little switching cost, shown by comparable download volumes for Blinkit, Zepto and Dunzo through 2023 [M19] and AOVs that moved with whichever app discounted most [M10] |
| Bargaining power of suppliers | Medium | Gig riders were interchangeable across platforms at similar pay (about ₹58 per delivery at Blinkit [M09]), but once Dunzo became its own retailer it also inherited procurement and stocking risk it never carried under the commission model [F09, F10] |
| Threat of substitutes | Medium | Kirana visits and pick-up-drop rivals like Porter and Swiggy Genie offered cheaper alternatives for errands that did not need 10 to 20-minute delivery, pulling volume from the grocery use case [F37, M16] |

**Dunzo's position.** At the June 2022 peak, Dunzo's 120 dark stores sat well below Blinkit's 383 and Instamart's 301, roughly in line with a diminished Zepto after its own store freeze [M06]. App downloads told a similar story: from 1 Jan to 22 Nov 2023, Blinkit drew over 14 million downloads and Zepto over 11 million, against 3.4 million for Dunzo [M19], evidence Dunzo was losing the awareness race in the category it entered late and under-capitalised.

**Note on the market-share conflict.** JM Financial's CY22 GMV estimate placed Dunzo and other smaller players at a combined 1% of category GMV [M05], a figure that sits awkwardly against Dunzo's own June 2022 data showing 5.5 million Dunzo Daily orders in a single month [F18]. Since the two cannot be reconciled and neither source discloses its methodology, this document follows the resolution in Appendix D: no market-share percentage for Dunzo is asserted anywhere. Dark-store counts and order volumes are used instead, since both are independently sourced and consistent.

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
| 2023 | Fundraising stalls: $75M convertible notes announced, about $45M received; $80M to $100M Series G stalls on a Reliance markdown dispute; rights issue floated at about $200M valuation, well below the $775M peak [F30] |
| Nov 2023 | Company states "business burn is now neutral," B2B growing over 128% [F32] |
| Feb 2024 | Over $100M spent on dark stores in total; company targets free-cash-flow breakeven for Mar 2024; Flipkart weighs an acquisition [F33] |
| Jan 2025 | Reliance declines to fund or buy; app and website go offline 13 January as co-founder joins Flipkart Minutes [F34] |
| Aug 2025 | Reliance formally writes off ₹1,645 Cr, its full $200M investment [F35] |

**The turning point.** The timeline has a clear hinge. The June 2021 launch of Dunzo Daily was a pilot, one dark store in one neighbourhood, still reversible on its own. The January 2022 capital injection converted that pilot into a company-wide strategy: with $240M in the bank and Reliance's retail network newly in the picture, the company set targets within months (200+ stores, 30,000+ riders, 2 lakh orders a day by June 2022) that only made sense if the dark-store model was now the primary growth engine, not an experiment [F15]. That is the moment the capital structure, headcount and marketing calendar (the ₹40 Cr IPL campaign) got built around owning shelves rather than borrowing them [F21].

**Why FY22 to FY23 is the critical window.** The financial consequences show up with a one-year lag, which is why FY22 to FY23 decides the outcome. FY22 net loss reached ₹464 Cr, already more than double FY21's ₹225.7 Cr [F12], but FY23 absorbed the full weight of a nationwide dark-store network running below breakeven volume: net loss jumped to ₹1,801 Cr on revenue of only ₹226.6 Cr [F12]. By the time closures began in November 2022, the capital that funded the stores was largely already spent, so the closures that followed, over half by July 2023 and about 70% by November 2023 [F28], were a retreat rather than a correction made while options still existed.

---

## 6. Financial autopsy: 87% of the FY23 loss paid for the dark-store war

**The five-year financial record.** Dunzo's RoC-reported financials, in ₹ Cr, show a company that was tightening its spend-to-revenue ratio for two straight years before the dark-store pivot reversed that trend entirely.

| FY | Operating revenue | Total expenses | Net loss | ₹ spent per ₹1 earned | Employee cost | Delivery cost | Ad spend | Other key items |
|---|---|---|---|---|---|---|---|---|
| FY19 | 0.77 | 172.45 | 169.0 | 225.00 | 42.34 | 62.3 (ops) | 26.5 | |
| FY20 | 27.5 | 359.5 | 338.4 | 13.09 | 73.44 | 116.4 | 77.1 | IT cost 28.4 |
| FY21 | 45.8 | 263.6 | 225.7 | 5.75 | 91.6 | 50.2 | 11.03 | IT cost 43.22 |
| FY22 | 54.3 | 531.7 | 464.0 | 9.80 | 138.3 | 134.0 | 64.4 | IT cost 52.0 |
| FY23 | 226.6 | 2,054.4 | 1,801.0 | 9.09 | 338.0 | 367.4 | 309.7 | Procurement 174.4; closing cash 216.0 |

[F12]

Read across the "₹ spent per ₹1 earned" column and the shape of the company's history is unmistakable. That figure fell from ₹225 in FY19 to ₹13.09 in FY20 to ₹5.75 in FY21, the trajectory of a commission-based business getting steadily more efficient as it scaled [F12]. It then reversed and climbed to ₹9.80 in FY22 and ₹9.09 in FY23, even as revenue grew, because the dark-store network added cost faster than revenue [F12]. FY24 was never reported, so no comparable figure exists for the year after the retreat began [F12].

**Burn and unit losses.** Monthly cash burn peaked at ₹176 Cr in June 2022 [F18], a rate that would have exhausted the entire $240M January 2022 round in roughly ten months unchecked. At the order level, Dunzo Daily lost ₹230 per order in H1 2022, a figure that includes one-time IPL spend but still shows a business losing money on every grocery delivery at scale [F19]. Cost per completed task under the dark-store model ran about ₹80, against roughly ₹30 under the earlier partner-store model, a near-tripling of unit cost for largely the same job of getting something delivered quickly [F23].

**The loss bridge.** The clearest way to see where the money actually went is to compare FY23 line items against the FY21 base, the last full year before the dark-store network existed at scale. That comparison, computed by the revival model using the method disclosed as assumption A12 (each FY23 line minus its FY21 equivalent, with the residual assigned to dark stores, inventory and other costs net of the extra revenue they generated), produces the following bridge.

| Line | Calculation | ₹ Cr |
|---|---|---|
| FY21 base loss | Reported FY21 net loss | 226 |
| Ads | FY23 ads (309.7) minus FY21 ads (11.03) | +299 |
| People | FY23 employee cost (338.0) minus FY21 (91.6) | +246 |
| Delivery fleet | FY23 delivery cost (367.4) minus FY21 (50.2) | +317 |
| Dark stores, inventory and other, net of extra revenue | Residual needed to reach the FY23 total | +713 |
| FY23 loss | Sum of the above | 1,801 |

[Model, method A12, using F10 and F12]

Summed, the increase above the FY21 base comes to ₹1,575 Cr, 87% of the full ₹1,801 Cr FY23 loss [Model]. In plain terms, if Dunzo had held its FY21 cost structure and scaled revenue at the rate it actually achieved, its FY23 loss would have run in the low hundreds of crores, not close to two thousand. The overwhelming majority of the loss growth between FY21 and FY23 traces to the dark-store build-out and the marketing, people and delivery infrastructure it demanded, not to the underlying errand-and-delivery business Dunzo had been improving for years before.

**What the bridge does and does not claim.** The bridge decomposes reported numbers; it is not a counterfactual by itself. It shows where the FY23 loss came from, not what would have happened had the money been spent differently, a question the revival model answers separately in §14 and §15. Nor are the four lines independent: ad spend, people cost and fleet cost scaled together because all served the same dark-store expansion, so the ₹713 Cr "stores and other" residual likely understates the true cost of the pivot rather than double-counts it.

**The reported-history pattern, in words.** Dunzo's revenue and loss lines tell two stories depending on which side of June 2021 they sit on. From FY19 to FY21, revenue rose ₹0.77 Cr to ₹45.8 Cr, roughly 59-fold, while the loss grew far more slowly and the spend-per-rupee ratio fell every year, the signature of a marketplace finding its operating leverage [F12]. From FY21 to FY23, revenue rose again, to ₹226.6 Cr, but the loss grew faster still, to ₹1,801 Cr, so the two lines diverge sharply rather than converge. That divergence is the dark-store thesis failing in real time: more revenue no longer meant getting closer to breakeven, it meant fixed and semi-fixed costs growing even faster than the demand they were built to capture.

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

## 13. The revival thesis: keep the promise, drop the asset

### 13.1 The strategic intervention, in three moves

The contrarian answer to "how could Dunzo have survived quick commerce" is neither to raise more capital and build dark stores faster, nor to exit quick commerce and shrink back to a small errand app. Both fail the brief's boundary test: the first ignores that the capital gap against Blinkit, Instamart and Zepto's war chests was structural and would only widen [M07]; the second removes the central problem instead of answering it. The thesis argued here is narrower: keep the promise Dunzo made to customers, "Dunzo it, anything from any store, fast," and change only the asset used to deliver that promise.

Three moves make up the intervention, timed from the January to April 2022 point of intervention set out in section 12:

1. **Partner shelves instead of owned dark stores.** Freeze the owned dark-store build at roughly 75 stores instead of scaling to the planned 200 [F20, F15], and run Dunzo Daily from Reliance's retail stores and existing local partner stores. The January 2022 deal already named Dunzo as last-mile and hyperlocal logistics partner for Reliance's store network and JioMart merchants [F07, S08], inventory and real estate Dunzo did not have to buy or lease. Cost per task on the partner-store model ran near ₹30, against ₹80 with owned dark stores [F23, S36], a gap that alone explains most of the fleet and store cost lines in the FY23 bridge (section 6).
2. **Dunzo for Business as a second engine.** D4B already had about 20,000 SMB and brand accounts across 8 cities by October 2022 and roughly 30,000 orders a day across 7 cities by July 2023 [F24]. Under the revival thesis it is not a side project competing for capital with Dunzo Daily, but a deliberately scaled use of the same fleet's idle rider hours, turning one cost base into two revenue streams.
3. **Four cities before fifteen.** Instead of 15 cities and 120 dark stores at the peak [F19, S20], the revival concentrates on four dense metros, Bengaluru, Hyderabad, Pune and Chennai, before adding a fifth. Bengaluru alone was claimed EBITDA-positive for 12 to 15 months by April 2022 [F16] and was roughly 40% of Dunzo's order volume as far back as 2019 [S04]. Density is what later market data confirmed matters: mature breakeven is about 1,200 to 1,250 orders a day per store [M04], a bar Dunzo's under-1,000-order stores never reliably cleared before being shut [F28].

None of these moves invents a new business. They reallocate the ₹1,790 Cr round actually raised [A01] toward the parts of the business already working, and away from owned real estate and inventory, the part the cost data shows was the loss driver.

### 13.2 Problem-solution fit matrix

| Root cause (section 7) | Intervention | Metric that proves the fix |
|---|---|---|
| RC1: Model switch to capital-heavy owned dark stores | Partner shelves (Reliance stores, local merchants) replace new owned stores | Cost per task falls from ₹80 to about ₹30 [F23, S36] |
| RC2: Reach before density (15 cities, 120 stores) | Four-city density gates before expansion | Orders per rider-hour and per-city contribution tracked at each gate (section 16) |
| RC3: One revenue engine, one anchor client | D4B scaled deliberately as engine two, no client above 25% of B2B revenue | B2B share of total orders reaches 33% by FY27 [Model, A07], up from B2B's roughly one-third-of-revenue share by 2023 [F24] |

### 13.3 Continuity test

The brief's boundary asks "same business, same core identity, same problem, different responses." The table below shows what the thesis keeps unchanged against what it changes.

| Keeps | Changes |
|---|---|
| The "Dunzo it" brand and its verb-like place in the customer's vocabulary [F02, S42] | Who holds the stock: partners and Reliance stores instead of Dunzo-owned inventory |
| Pick-up-and-drop, the original 2015 service [F01, F02] | No new dark stores are built beyond the roughly 75 already open in early 2022 |
| One rider fleet and one consumer app serving every order type | Footprint goes from 15 planned cities to 4 dense ones first |
| The local-store marketplace model that predates Dunzo Daily [Q01] | B2B rises from a minor line to about a third of total daily orders |

Every row on the left is untouched. The problem, quick commerce arriving with deeper-pocketed rivals and a cost structure Dunzo could not match, is not assumed away; it is answered with a cheaper cost structure built on the same fleet and the same brand promise.

### 13.4 Adaptation table

The brief asks how the business would respond to the same market, technological, operational, labour and competitive challenges that contributed to its failure, not to a different set of challenges.

| Challenge type | What happened | Revival response |
|---|---|---|
| Market | Rivals promised 10-minute delivery and treated speed as the only axis of competition [F17, S18] | Compete on breadth ("anything from any store") inside a realistic 30-minute window rather than chasing 10-minute delivery Dunzo could not fund |
| Technological/operational | Owned dark stores required new inventory systems, warehousing and SKU management that Dunzo had not run before [F13] | Partner-shelf integration reuses the existing pick-up-and-drop routing and app, avoiding a new operating stack |
| Labour | Rider costs scaled with store count and city count simultaneously [F19] | One fleet serves pick-drop, partner-shelf and B2B orders, raising utilisation per rider instead of adding headcount per city |
| Competitive | JioMart came to depend on Dunzo for over 40% of B2B volume and then cut rates [F24, F27] | No single B2B client is allowed above 25% of B2B revenue, so a single counterparty's repricing cannot swing the P&L the way JioMart's did |
| Capital/funding | India's VC funding fell from $25.7B (2022) to $9.6B (2023) [M12], and Dunzo's own follow-on round stalled over valuation [F30] | Burn is held near ₹16 Cr a month rather than the actual ₹176 Cr a month peak [F18], so the ₹1,790 Cr round funds the company to FY27 breakeven without a forced follow-on |

### 13.5 Frameworks

**Porter's generic strategy.** Dunzo's actual FY22 posture tried to be a cost leader against better-capitalised rivals on a channel (owned dark stores) it could not fund, while also matching the grocery-repositioning of Blinkit and Zepto [F14]. That combination is "stuck in the middle." The revival thesis moves Dunzo to a **focus-differentiation** strategy: a defined segment (urban households and SMBs wanting any errand or purchase fulfilled fast, not just 10-minute grocery) served through a differentiated asset, a marketplace of partner shelves plus one multi-purpose fleet, that rivals structurally committed to owned dark stores cannot cheaply copy.

**Value chain, before and after.** In the actual path, Dunzo inserted itself into the retail value chain as an owner: it bought inventory, leased and staffed dark stores, and bore working-capital and shrinkage risk on top of its last-mile role. That is where the ₹713 Cr "stores and other" line in the FY23 bridge originates (section 6). In the revival path, Dunzo stays a pure last-mile and discovery layer: partners and Reliance stores hold inventory and absorb retail risk, and Dunzo's position narrows back to matching, routing and delivering, plus the D4B logistics layer for merchants. The revival removes an entire value-chain stage rather than trying to operate it more cheaply.

**VRIO of Dunzo's assets.** Four assets pass a VRIO screen. The brand-as-verb recognition built since 2015 [F02, Q06] is valuable and rare among Indian hyperlocal players, though under-exploited by the company itself. The rider fleet and routing technology is valuable and reasonably rare in a fragmented last-mile market, though imitable given enough capital (Porter and Shadowfax built comparable fleets [M13, M14]). The merchant graph built through D4B, roughly 20,000 SMB and brand accounts [F24], is valuable and moderately rare, since most quick-commerce rivals sell only to consumers. Bengaluru density, claimed EBITDA-positive for 12 to 15 months [F16], is valuable and city-specific rare, though not permanently defensible without continued investment. None of these four required owning dark stores.

**Hamilton Helmer's 7 Powers, applied as counter-positioning.** Counter-positioning is the power most directly available to Dunzo against dark-store-native rivals: a superior model incumbents cannot cheaply adopt without damaging their own economics. Blinkit, Instamart and Zepto built their entire narrative around owned, ultra-dense dark-store networks delivering in 10 minutes [M06, M09]; abandoning that to chase a broader errand-and-B2B mix would mean conceding the speed metric their brands compete on. Dunzo's revival path does not require out-investing the leaders in dark stores; it requires being good at something they are structurally reluctant to pursue.

**Ansoff matrix.** The revival thesis is market penetration in the four-city set combined with related product development on the existing fleet (scaling D4B), not diversification into a new market. This matters for the boundary: penetration and same-fleet product development retain "the same business, same core identity," where diversification into an unrelated line would not.

### 13.6 Third-party validation

The thesis is corroborated, not invented, by four independent facts already in the fact base. Dunzo's own early investor Sandipan Chattopadhyay said of the dark-store pivot, "Some of the elements of what we started off with … was to empower the local stores. A dark store is the antithesis of that" [Q01, S35]. The Ken separately observed that Dunzo had effectively been "banking on partner stores to 'Dunzo it!'" even as it built owned inventory in parallel [Q06, S42]. Reliance itself validated the partner-shelf model two years too late: JioMart Quick launched 30-minute delivery from Reliance's own existing stores in 2024 [M17, S53], the exact mechanism the revival thesis proposes for 2022. And Porter, an asset-light intra-city logistics player operating on a materially similar principle of using other people's vehicles and routes rather than owning fixed retail assets, turned a ₹55.2 Cr profit on ₹4,306 Cr of FY25 revenue [M13], demonstrating that an asset-light logistics model at Dunzo's rough scale was commercially viable in the Indian market during the exact years Dunzo was losing money on owned stores.

---

## 14. The revival model

### 14.1 Methodology

The revival model (`model/dunzo_revival_model.py`) is a counterfactual cash and EBITDA projection that starts from the ₹1,790 Cr the January 2022 round actually raised ($240M at ₹74.6 per $ [A01, F07]) and tracks only that pool of cash forward from FY23; FY22 is left exactly as reported [F12]. Three demand streams, pick-up-and-drop, partner-shelf "quick" orders and Dunzo for Business, are each given a daily order volume path and a per-order unit economics path (revenue and contribution after rider pay, other variable costs and discounting), disclosed as assumptions A03 to A07. Fixed costs and capex are set independently as A09 and A10. Three scenarios, bear, base and bull, apply a symmetric stress to volume and per-order contribution (A11). The model computes revenue, contribution, EBITDA and cumulative cash for FY23 through FY28 under each scenario, and separately reconstructs the FY23 loss bridge (T1) from reported FY21 and FY23 line items.

### 14.2 Unit economics by stream

| Stream | FY23 | FY24 | FY25 | FY26 | FY27 | FY28 |
|---|---|---|---|---|---|---|
| Pick-up-and-drop (revenue / contribution, ₹) | 66 / 15 | 68 / 18 | 70 / 21 | 72 / 24 | 73 / 25 | 74 / 26 |
| Partner-shelf quick (revenue / contribution, ₹) | 78.0 / 2.0 | 79.5 / 6.5 | 81.0 / 11.0 | 82.5 / 14.5 | 84.0 / 17.0 | 85.5 / 18.5 |
| Dunzo for Business (revenue / contribution, ₹) | 52 / 6 | 52 / 7 | 53 / 9 | 53 / 9 | 54 / 11 | 54 / 11 |

Pick-up-and-drop is anchored to the actual ₹79 list price for a 2.5 km errand [S23], with rider pay near Blinkit's own reported ₹44 last-mile cost per order [M08]. Partner-shelf economics are anchored to Dunzo Daily's own reported AOV of about ₹400 [F16], rising toward the ₹450 to ₹635 AOV range across Blinkit, Instamart and Zepto [M10], with a 15% commission plus a ₹15 fee, reflecting the ₹30-versus-₹80 partner-store cost advantage [F23]. Dunzo for Business economics assume the margin compression JioMart's rate cuts caused historically [F27] persists, offset partly by the utilisation gains Porter and Shadowfax realized on shared fleets [M13, M14].

### 14.3 Volume path and fixed costs

Daily order volume in the base case rises from 160,000 in FY23 to 512,000 in FY28 (A06), anchored to Dunzo's actual 8.3 million orders a month (about 277,000 a day) in June 2022 [F18] and D4B's roughly 30,000 orders a day by mid-2023 [F24]. Fixed costs rise from ₹220 Cr in FY23 to ₹275 Cr in FY28 (A09), consistent with Dunzo's FY21 non-delivery cost base of about ₹213 Cr [F10] and FY22 people cost of ₹138 Cr [F12]. Capex is set at ₹20 Cr in FY23 and ₹15 Cr a year afterward (A10), since no new owned dark stores are built, avoiding the ₹8 lakh to ₹9 lakh per-store capex the market data shows dark stores require [M09].

### 14.4 Scenario tables

**T2 base case (₹ Cr; orders in thousands a day)**

| Year | Orders/day | Revenue | Contribution | Fixed | EBITDA | Cash |
|---|---|---|---|---|---|---|
| FY23 | 160 | 394 | 48 | 220 | −172 | 1,598 |
| FY24 | 235 | 590 | 88 | 230 | −142 | 1,441 |
| FY25 | 315 | 805 | 151 | 240 | −89 | 1,337 |
| FY26 | 385 | 994 | 213 | 250 | −37 | 1,285 |
| FY27 | 455 | 1,189 | 280 | 262 | +18 | 1,288 |
| FY28 | 512 | 1,350 | 328 | 275 | +53 | 1,327 |

Base case breaks even in FY27, with ₹1,288 Cr of the round still in cash at that point [Model].

**T2 bear case (₹ Cr; orders in thousands a day)**

| Year | Orders/day | Revenue | Contribution | Fixed | EBITDA | Cash |
|---|---|---|---|---|---|---|
| FY23 | 120 | 295 | 23 | 220 | −197 | 1,573 |
| FY24 | 176 | 443 | 47 | 230 | −183 | 1,375 |
| FY25 | 236 | 604 | 87 | 240 | −153 | 1,207 |
| FY26 | 289 | 745 | 128 | 250 | −122 | 1,070 |
| FY27 | 341 | 891 | 173 | 262 | −89 | 966 |
| FY28 | 384 | 1,012 | 204 | 275 | −71 | 880 |

The bear case does not reach breakeven by FY28, but still holds ₹880 Cr of the round in cash at that point [Model], meaning the company would remain solvent under the model's worst disclosed stress even without a follow-on raise.

**T2 bull case (₹ Cr; orders in thousands a day)**

| Year | Orders/day | Revenue | Contribution | Fixed | EBITDA | Cash |
|---|---|---|---|---|---|---|
| FY23 | 192 | 473 | 71 | 220 | −149 | 1,622 |
| FY24 | 282 | 708 | 127 | 230 | −103 | 1,503 |
| FY25 | 378 | 966 | 209 | 240 | −31 | 1,457 |
| FY26 | 462 | 1,192 | 289 | 250 | +39 | 1,481 |
| FY27 | 546 | 1,426 | 376 | 262 | +114 | 1,580 |
| FY28 | 614 | 1,620 | 439 | 275 | +164 | 1,729 |

Bull case breaks even a year earlier, in FY26 [Model].

### 14.5 Sensitivity grids

**T4: FY27 EBITDA sensitivity (₹ Cr; rows are the volume factor applied to base-case demand, columns are a per-order contribution shift in ₹)**

| Volume | −3 | −1.5 | 0 | +1 | +2 |
|---|---|---|---|---|---|
| 0.75 | −89 | −71 | −52 | −39 | −27 |
| 0.9 | −55 | −32 | −10 | 5 | 20 |
| 1.0 | −32 | −7 | 18 | 35 | 51 |
| 1.1 | −9 | 19 | 46 | 64 | 83 |
| 1.2 | 14 | 44 | 74 | 94 | 114 |

**T5: Lowest cash balance across FY23 to FY28, same grid layout (₹ Cr)**

| Volume | −3 | −1.5 | 0 | +1 | +2 |
|---|---|---|---|---|---|
| 0.75 | 880 | 965 | 1,049 | 1,106 | 1,162 |
| 0.9 | 1,012 | 1,114 | 1,210 | 1,261 | 1,307 |
| 1.0 | 1,101 | 1,203 | 1,285 | 1,325 | 1,365 |
| 1.1 | 1,179 | 1,269 | 1,335 | 1,379 | 1,423 |
| 1.2 | 1,240 | 1,313 | 1,385 | 1,426 | 1,457 |

Even at the grid's single worst cell, 0.75x volume and a ₹3 per-order contribution hit, the lowest cash balance the model produces across all six years is ₹880 Cr, never negative. There is no combination inside this disclosed grid where the revival path runs out of the January 2022 round's cash.

### 14.6 Comparison with the actual path

The revival model's own FY23 EBITDA of −₹172 Cr, set against the actual reported FY23 net loss of ₹1,801 Cr [F12], is a cut of about 90% [Model]. In the actual history, Dunzo's cash fell to ₹216 Cr by March 2023 [F12], barely a year after the ₹1,790 Cr round closed, and the app and website went offline in January 2025 [F34]. In the revival model's base case, ₹1,598 Cr remains in FY23 alone, roughly seven times the actual closing cash figure, and the company is still solvent through FY28 in every scenario the model tests.

### 14.7 Honest limits

- This is a counterfactual. It shows that the revival path was fundable, not that it was certain.
- It tracks only the January 2022 round's cash; FY22 is left as reported.
- Unit economics are assumptions anchored to the cited benchmarks.
- FY24 actuals were never reported.
- The model does not claim Dunzo would have beaten Blinkit or Zepto, only that it would have survived as itself.

---

## 15. Revival outcome: what Dunzo would look like in FY27

Under the base case, by FY27 Dunzo would be running roughly 455,000 orders a day [Model], with a demand mix of 23% pick-up-and-drop, 44% partner-shelf quick orders and 33% Dunzo for Business [Model, A07]. This is a materially more diversified revenue base than the actual company ever achieved; B2C alone was over 90% of revenue as late as October 2022 [F25]. EBITDA in the base case turns positive at +₹18 Cr in FY27, the first profitable year in the company's history by this model's measure, with ₹1,288 Cr of the original ₹1,790 Cr round still sitting in cash [Model]. Operating in four dense cities rather than fifteen thin ones, the company would carry a fixed-cost base of about ₹262 Cr in FY27 [Model], not far above the actual FY22 spend level, while running roughly five times the daily order volume Dunzo actually processed in mid-2022 [F18].

Under the bull scenario, where volume runs 20% above base and per-order contribution improves by ₹2, breakeven arrives a full year earlier, in FY26, with ₹1,481 Cr of cash remaining that year and ₹1,580 Cr by FY27 [Model]. Under the bear scenario, where volume runs 25% below base and per-order contribution is ₹3 worse, the company does not reach EBITDA breakeven at all within the model's FY23 to FY28 window, but it is still solvent, holding ₹880 Cr of cash in FY28 [Model], almost exactly half of what was originally raised and more than four times the ₹216 Cr the actual company had left by March 2023 [F12].

What this outcome would not be is a top-three quick-commerce player. It would not match Blinkit's or Zepto's dark-store density, their sub-15-minute average delivery times, or their multi-billion-dollar GMV run rates [M02, M03]. The revival thesis does not claim Dunzo wins the 10-minute grocery war; it claims Dunzo survives, profitably, as the asset-light errand-and-marketplace network it was always meant to be, at a scale several multiples larger than its actual peak, funded entirely by the capital it had actually raised.

---

## 16. Initial roadmap and gates

The roadmap runs in three phases from the January to April 2022 point of intervention, each with named owners, actions and gates before the next phase is funded.

**Phase 1, months 0 to 6 (roughly January to June 2022).** Owner: CEO and COO. Actions: freeze the owned dark-store build at the roughly 75 stores already open instead of the planned 200 [F20]; onboard Reliance stores and local merchants as partner-shelf fulfilment points, using the January 2022 deal's designation of Dunzo as Reliance's last-mile partner [F07, S08]; hold marketing well below the ₹40 Cr single-campaign level the actual IPL push consumed [F21, S35]. Gate to phase 2: at least 20 partner-shelf locations live in Bengaluru with cost per task at or below ₹40.

**Phase 2, months 6 to 18 (roughly mid-2022 to mid-2023).** Owner: COO and Head of Dunzo for Business. Actions: exit the 11 cities outside the four-city density set; scale D4B deliberately to SMBs and brands using the ONDC logistics seat secured in August 2022 [F26]; introduce batching and delivery-window tiers of the kind already saving ₹8 to ₹10 per order historically [F22]. Gate to phase 3: orders per rider-hour rising each quarter in all four cities; B2B contribution positive with no single client above 25% of B2B revenue, preventing the JioMart concentration risk that hit the actual business [F27].

**Phase 3, months 18 to 36 (roughly late 2023 to 2025, mapping to FY26 and FY27 in the model).** Owner: CFO. Actions: hold fixed costs on the A09 path (₹250 Cr to ₹262 Cr); scale partner-shelf and B2B volume toward 455,000 orders a day; monitor the FY27 EBITDA sensitivity grid (T4) quarterly against actuals. Gate: sustained positive EBITDA (the FY27 target of +₹18 Cr) for two consecutive quarters before entering additional cities.

Each phase's KPIs, orders per rider-hour, contribution per order, B2B share of volume, client concentration, are the same metrics the model's assumption register (A03 to A12) is built from, so the roadmap and the model check the same numbers.

---

## 17. Feasibility: why this could have worked with what Dunzo had

### 17.1 Resources actually on hand

At the point of intervention, Dunzo had ₹1,790 Cr of freshly raised, unspent capital [F07, A01]; a functioning multi-city rider fleet; roughly 20,000 SMB and brand accounts already using D4B [F24]; a named strategic relationship with Reliance Retail covering last-mile delivery for Reliance stores and JioMart merchants [F07, S08]; and a Bengaluru operation its founder described as EBITDA-positive for 12 to 15 months by April 2022 [F16]. None of this needed building from scratch; the revival thesis deploys what the company already had differently, not capabilities it did not possess.

### 17.2 Capability fit table

| Required capability | Did Dunzo have it? | Evidence |
|---|---|---|
| Multi-city last-mile rider network | Yes, already operating at scale | 8.3 million orders a month across the network by June 2022 [F18] |
| Merchant and partner-store relationships | Yes, both through legacy pick-up-and-drop and the new Reliance deal | Reliance named Dunzo as its logistics and last-mile partner [S08]; D4B already had 20,000 merchant accounts [F24] |
| B2B sales and account management | Yes, an existing function, under-scaled | D4B generated ₹2.3 Cr in FY22 and grew to roughly 30,000 orders a day by mid-2023 without dedicated priority [F24] |
| City-level density discipline | Partially; demonstrated in Bengaluru, not applied elsewhere | Bengaluru EBITDA-positive claim [F16] vs. stores under 1,000 orders a day shut elsewhere [F28] |
| Capital discipline at a ₹16 Cr-a-month burn rate | Not demonstrated in the actual history, but arithmetically available | Actual peak burn was ₹176 Cr a month [F18]; the model's FY23 fixed-cost base of ₹220 Cr implies a materially lower monthly run rate |
| Batching and delivery-tier flexibility | Yes, partially deployed too late | 60-minute and batched delivery options were already saving ₹8 to ₹10 per order by August 2022 [F22] |

Every capability the revival thesis depends on already existed inside Dunzo in some form by early 2022. The intervention is a reallocation of emphasis and capital across existing capabilities, not the acquisition of new ones, which is itself a feasibility argument: a turnaround that requires no new capability set is more executable than one that does.

### 17.3 Competitive response

If Dunzo had pursued this path, Blinkit, Instamart and Zepto would very likely have kept competing on 10-minute dark-store grocery delivery, since that is the model their capital structures, narratives and fleets were built around [M06, M09]. The revival thesis does not contest that ground; it concedes 10-minute grocery to the three leaders and competes instead on breadth (any errand, any store), multi-store baskets, and B2B logistics, categories where none of the three had a comparable offering. This is the counter-positioning argument from section 13.5 in competitive terms: rivals cannot cheaply chase Dunzo here without diluting the speed-first positioning their own growth depended on.

**The Swiggy Genie counter-case.** A skeptic could point to Swiggy Genie, Swiggy's own pick-up-and-drop errand service, as evidence that this space does not work: Swiggy paused Genie in 2022 specifically to protect rider supply for Instamart, and suspended it again in May 2025 [M16]. This does not undermine the revival thesis; it clarifies why Dunzo differs. For Swiggy, Genie was a side line subordinate to Instamart, its real quick-commerce bet, so when rider supply was scarce Genie was sacrificed. For Dunzo, errands were never a side line; they were the founding product and core identity since 2015 [F01, F02]. The revival thesis does not run pick-up-and-drop alongside a separate, more important dark-store business competing for the same riders; it makes pick-up-and-drop, partner-shelf orders and B2B three complementary uses of one fleet, none subordinate to an owned-inventory business needing a different kind of capital. Genie is evidence against running errands as an appendage to a dark-store strategy, not against running errands as the strategy itself.

---

## 18. Risks and mitigations

| # | Risk | Probability | Impact | Mitigation |
|---|---|---|---|---|
| 1 | Partner-store SLA failures (stockouts, slow fulfilment, inconsistent quality) damage the speed promise | Medium | High | City-level density gates (section 16) require partner-store performance monitoring before further rollout; contracts specify minimum SLA and stock-availability terms before onboarding |
| 2 | Conflict with Reliance over exclusivity, pricing or control, given Reliance holds 25.8% and is also a fulfilment partner [F07] | Medium | High | Keep partner-shelf sourcing multi-party (Reliance plus independent local merchants) rather than single-sourced to Reliance, so no one partner can dictate terms |
| 3 | B2B price pressure from a dominant client, repeating the JioMart pattern [F27] | High | Medium | Hard cap of 25% of B2B revenue from any single client (A07), enforced at the account-management level, not just as a target |
| 4 | Rider supply shortfall as volume scales across pick-drop, quick and B2B simultaneously | Medium | Medium | Cross-utilise the single fleet across all three streams (the same mechanism that differentiates the model from Swiggy Genie, section 17.3), smoothing demand peaks across streams |
| 5 | Rivals add their own pick-up-and-drop or partner-shelf offering once Dunzo demonstrates it works | Low to medium | Medium | Brand-as-verb recognition and merchant-graph depth (VRIO analysis, section 13.5) are not instantly replicable even if the model is copied |
| 6 | The bear-case scenario materialises and additional funding is still eventually needed | Medium | Medium | Bear case still leaves ₹880 Cr in cash by FY28 with no breakeven [Model], giving several years of runway to raise on a smaller, better-evidenced basis than the actual 2023 fundraising attempt, which stalled over valuation [F30] |
| 7 | Brand dilution from being associated with lower-margin partner-store fulfilment rather than Dunzo's own curated dark-store experience | Low | Low to medium | Partner-store integration is presented to customers as an extension of "any store in your city," consistent with the original errand-app promise, not a downgrade from it |
| 8 | Execution slip: the four-city density discipline is abandoned under investor pressure to show top-line growth, repeating RC2 | Medium | High | Roadmap gates (section 16) tie phase funding explicitly to density metrics, not just revenue growth, so city expansion cannot proceed without a demonstrated per-city profitability floor |

---

## 19. Boundary compliance check

The brief's test is explicit: "Same business. Same core identity. Same problem. Different responses." The table below checks the revival thesis against each clause.

| Brief requirement | How the thesis complies |
|---|---|
| Same business (no replacement with an unrelated model) | Dunzo remains a hyperlocal delivery and errand company; every revenue stream (pick-up-and-drop, partner-shelf quick delivery, B2B logistics) is a form of delivery the actual company already operated or piloted [F01, F13, F24] |
| Same core identity | The "Dunzo it" brand promise, "any errand, any store, fast," is preserved word for word; only the fulfilment mechanism (partner shelves instead of owned stores) changes |
| Same problem (not eliminated or assumed away) | Quick commerce's cost and speed pressure is not wished away. The thesis explicitly concedes 10-minute grocery to better-capitalised rivals (section 17.3) and competes on a different, fundable axis rather than pretending the competitive threat did not exist |
| Different responses, not a different problem | The three interventions (partner shelves, D4B as engine two, four-city density) are new decisions applied to the same market conditions Dunzo actually faced in 2022, using the same capital Dunzo actually had |
| No central-problem removal | Capital scarcity relative to rivals, the actual root of the failure, is not removed; the model works within the same ₹1,790 Cr Dunzo actually raised and no more [A01] |
| Legal matters excluded | Vendor lawsuits, NCLT proceedings, insolvency filings and salary-dispute details are not used anywhere in the diagnosis or the revival argument, per the brief's own instruction [SG6, BD1] |
| Sources clearly cited | Every quantitative claim in this document carries an [F##], [M##], [S##], [A##] or [Model] tag traceable to the source register (section 3) or the model code (section 6) |

---

## 20. Slide blueprint

| Slide | Panel | Backed by (doc section) | Key sources |
|---|---|---|---|
| Cover | Title and subtitle | Section 13.1 (thesis statement) | F01, S08 |
| Cover | Verdict card | Section 2 (moneyshot), section 15 | Model, F12 |
| Cover | Five numbers card | Section 3, section 4.1 | F01, F04, F07, F19, F12, F34, F35 |
| Cover | Team table | Front matter | N/A |
| Executive Summary | The Business | Section 3 (business, value proposition, revenue mix) | F01, F02, F09, F10 |
| Executive Summary | The Market | Section 4 (competitor dark-store table, war chests) | M06, M07 |
| Executive Summary | The Failure Context | Section 5 (dated timeline) | F13 to F35 |
| Executive Summary | The Revival Thesis card | Section 2, section 13.1 | Model |
| Why Did It Fail? | Root Causes issue tree | Section 7 (RC1 to RC3) | S36, S20, F25 |
| Why Did It Fail? | Moneyshot loss bridge (waterfall) | Section 6 (financial autopsy), section 6 model T1 | F12, Model |
| Why Did It Fail? | Critical Decisions | Section 8 (decision log) | F14, F07, F15, F21, F24 |
| Why Did It Fail? | Failed Assumptions | Section 9 | F17, M12, F16, F18, M04 |
| Why Did It Fail? | The Unavoidable Problem | Section 10 | F18 |
| Why Did It Fail? | Missed Opportunities | Section 11 | F07, M17, F24, F16, F26 |
| Why Did It Fail? | Point of Intervention | Section 12 | F07, F20 |
| Revival Thesis | The Strategic Intervention | Section 13.1 | F07, F23, F16 |
| Revival Thesis | Problem-Solution Fit | Section 13.2 | S36, F16, F24 |
| Revival Thesis | Revival Outcome (line chart) | Section 14.4, section 15 | Model |
| Revival Thesis | Continuity / Adaptation | Section 13.3, 13.4 | F27, F18 |
| Revival Thesis | Initial Roadmap | Section 16 | F20, F26, F22 |
| Revival Thesis | Feasibility | Section 17 | F16, S53, M13 |
| Appendix | Model table, assumptions, sources | Section 14, section 6 assumption register | Model, A01 to A12 |

---

## 21. Anticipated judge questions

**1. If serving Dunzo Daily from Reliance's shelves and freezing dark stores was so obviously cheaper, why did Dunzo's actual leadership not do it?**
The January 2022 round arrived with a growth narrative, Dunzo's own April 2022 targets of 200-plus dark stores and 30,000-plus riders [F15], that treated owned inventory as the story investors wanted. The ₹30-versus-₹80 cost gap between partner and owned stores [F23] only became visible in aggregate cost data after the scaling decision was already made; it is hindsight, not foresight.

**2. Reliance had its own commercial incentives. Would it really have supported a partner-shelf model for Dunzo instead of building its own quick-commerce arm?**
The January 2022 deal already named Dunzo as Reliance's last-mile partner for its stores and JioMart merchants [F07, S08], so the relationship the thesis relies on was contractual, not hypothetical. Reliance's later behavior, cutting D4B rates once JioMart depended on Dunzo for over 40% of B2B volume [F27], shows it would still act in its own interest; the thesis mitigates this by capping any single client at 25% of B2B revenue.

**3. Is four cities enough scale to matter in a market this capital-intensive?**
Four dense cities running 455,000 orders a day by FY27 [Model] is roughly five times Dunzo's actual mid-2022 volume of about 277,000 orders a day across fifteen cities [F18]. Mature breakeven requires roughly 1,200 to 1,250 orders a day per store [M04], a bar four cities run at genuine density clear more reliably than fifteen run thin, which is exactly what caused Dunzo's actual closures [F28].

**4. How is "keep Dunzo the errand network" different from admitting Dunzo could not win quick commerce and should have quietly given up?**
It is a repositioning that produces a profitable, growing company by FY27 with 455,000 orders a day and 33% of volume in B2B [Model], not a retreat toward the 2019 scale of about 2 million orders a month [F05]. The revival path grows Dunzo well beyond its historical peak, just not inside the specific 10-minute grocery category the leaders chose to fight over.

**5. The model shows FY23 EBITDA of −₹172 Cr, still a loss. Why should that be considered a success?**
A −₹172 Cr FY23 EBITDA against the actual reported FY23 net loss of ₹1,801 Cr is a reduction of about 90% [Model, F12], and it is the last loss-making year in the base case; EBITDA turns positive at +₹18 Cr in FY27 [Model]. A turnaround succeeds on a credible, fully funded path to breakeven, not zero losses in year one, which the actual company never had.

**6. The bear case never reaches breakeven by FY28. Doesn't that undermine the whole thesis?**
No, because the standard held here is solvency and optionality, not profitability under every scenario. Even in the bear case, ₹880 Cr of the original round remains in cash at FY28 [Model], roughly four times the ₹216 Cr the actual company had left by March 2023 [F12], leaving years to adjust or raise from strength rather than crisis.

**7. Are the unit economics assumptions (A03 to A07) realistic, or reverse-engineered to produce a good outcome?**
Each is anchored to a reported benchmark: pick-drop pricing to the actual ₹79 list price for a 2.5 km errand [S23], partner-shelf AOV to Dunzo Daily's own ₹400 figure [F16], and rider costs to Blinkit's disclosed ₹44 last-mile cost per order [M08]. No year assumes contribution margins outside the range Blinkit, Porter and Shadowfax actually reported over the same period [M08, M13, M14].

**8. Why does the model not include a scenario where a rival simply undercuts the partner-shelf model on price?**
The sensitivity grid (T4, T5) already stresses contribution down by ₹3 and volume down by 25% simultaneously, and the lowest cash balance across all twenty-five cells is still ₹880 Cr [Model], which already captures aggressive price competition. A dedicated price-war scenario was kept out of the base disclosure to avoid a fourth speculative case beyond bear, base and bull.

**9. Doesn't relying on Reliance's stores just trade one form of dependency for another?**
It swaps balance-sheet dependency (owned inventory and real estate) for a commercial dependency that is explicitly mitigated: no single client, Reliance included, exceeds 25% of B2B revenue, and partner sourcing stays multi-party across Reliance stores and independent merchants (risk 2, section 18). This is materially smaller and more diversifiable than owning 120 stores outright.

**10. If Bengaluru was already EBITDA-positive by April 2022, why didn't that alone save the company?**
Bengaluru's positive contribution was a founder claim [F16], not an audited figure, and it applied to only the top 20 stores in one city while the company simultaneously funded expansion into 14 other cities and 100 more stores [F19, F20]. The four-city density strategy deliberately replicates the Bengaluru pattern in three more cities instead of diluting it across fifteen.

**11. How does the thesis address the labour and rider-supply challenges that also affected Swiggy Genie?**
By keeping errands, partner-shelf delivery and B2B on one shared fleet, rather than treating errands as a side service subordinate to a separate dark-store priority the way Swiggy treated Genie relative to Instamart [M16]. Because errand delivery is the core business, rider allocation favors it during periods of tight supply instead of sacrificing it.

**12. Isn't ₹1,790 Cr small next to Zepto's $1.85 billion raised by November 2024?**
Yes, but the thesis does not claim Dunzo would out-capitalize Zepto; it claims ₹1,790 Cr suffices to fund an asset-light model to profitability, which the model shows across all three scenarios [Model]. Dark-store competition required Zepto-scale capital because owned inventory is capital-intensive; the partner-shelf model exists precisely to avoid competing at that scale.

**13. The actual company shut most dark stores by 2023 anyway. Doesn't that mean the market reached the same conclusion, just too late?**
Largely yes, which supports the thesis: stores under 1,000 orders a day were shut from November 2022, about 70% had closed by November 2023 [F28], and Dunzo Daily left every city except Bengaluru by August 2023 [F29]. The thesis argues this correction should have happened in January to April 2022, before roughly ₹1,200 Cr to ₹1,500 Cr was spent in 2022 building the stores later shut [F20].

**14. How does the model treat the fact that FY24 actuals were never reported?**
It uses none; all FY23 through FY28 figures are counterfactual projections from the disclosed assumption register (A01 to A12), and section 14.7 states this limit explicitly rather than substituting an estimate for the missing filing.

**15. What would make you conclude this revival path would not have worked?**
If Reliance had refused the last-mile terms already named in the January 2022 deal [S08], or partner-store SLA quality had been unworkable at scale, both risks disclosed in section 18, the cost advantage the thesis depends on would not have materialized and Dunzo would have faced a worse bear case than the model shows. The thesis claims the path was fundable and executable with the resources Dunzo actually had, not that execution risk was zero.

---


## Appendix A: Bibliography

Sources cited in this document, in the order first referenced during research. Full URLs given for verification.

- **S01** Wikipedia, "Dunzo" <https://en.wikipedia.org/wiki/Dunzo>
- **S02** Scroll (2 Jul 2018) "As Bengaluru turns into a living nightmare, this app has become an irreplaceable part of it" <https://scroll.in/magazine/883059/as-bengaluru-turns-into-a-living-nightmare-this-app-has-become-an-irreplaceable-part-of-it>
- **S03** Forbes India (22 Feb 2018) "Dunzo: Google's chosen one" <https://www.forbesindia.com/article/startups/dunzo-googles-chosen-one/49499/1>
- **S04** Franchise India (28 Jun 2019) "Delivery startup Dunzo now expands to Mumbai" <https://www.franchiseindia.com/insights/en/article/delivery-startup-dunzo-now-expands-to-mumbai.53064>
- **S05** TechCrunch (4 Oct 2019) "Google-backed Dunzo raises $45M…" <https://techcrunch.com/2019/10/04/dunzo-hyperlocal-ecommerce-delivery/>
- **S06** TechCrunch (19 Jan 2021) "Google backs India's Dunzo in $40 million funding round" <https://techcrunch.com/2021/01/19/google-backs-indias-dunzo-in-40-million-funding-round/>
- **S07** TechCrunch (6 Jan 2022) "Reliance Retail backs Dunzo in $240 million funding" <https://techcrunch.com/2022/01/06/reliance-retail-backs-dunzo-in-240-million-funding/>
- **S08** Reliance Retail Ventures media release (6 Jan 2022) <https://www.ril.com/sites/default/files/2023-01/Media-Release-RRVL-06012022.pdf>
- **S09** Entrackr (Jan 2021) "Dunzo revenues rise 35X in FY20, losses balloon to Rs 338.4 Cr" <https://entrackr.com/2021/01/dunzo-revenues-rise-35x-in-fy20-losses-balloon-to-rs-338-4-cr/>
- **S10** Entrackr (Sep 2021) "Dunzo revenue jumps 66% to Rs 46 Cr in FY21…" <https://entrackr.com/2021/09/dunzo-revenue-jumps-66-to-rs-46-cr-in-fy21-outstanding-losses-balloon-to-rs-768-cr/>
- **S11** Entrackr (2 Nov 2022) "Dunzo's losses widen to Rs 464 Cr in FY22 while revenue doubles" <https://entrackr.com/2022/11/dunzos-losses-widen-to-rs-464-cr-in-fy22-while-revenue-doubles/>
- **S12** Entrackr (6 Nov 2023) "Dunzo posts Rs 1,800 Cr loss, Rs 226 Cr revenue in FY23" <https://entrackr.com/2023/11/dunzo-posts-rs-1800-cr-loss-rs-226-cr-revenue-in-fy23/>
- **S13** Entrackr (30 Oct 2019) "Dunzo spent Rs 225 to earn Re 1 in FY19" <https://entrackr.com/2019/10/dunzo-spent-rs-225-to-earn-re-1-in-fy19/>
- **S14** Inc42 (18 Jun 2021) "Dunzo Launches Dark Stores Service 'Dunzo Daily' In Bengaluru" <https://inc42.com/buzz/dunzo-launches-dark-stores-service-dunzo-daily-in-bengaluru/>
- **S15** afaqs (19 Aug 2021) "Dunzo is known for being a pick up and drop delivery service…" <https://www.afaqs.com/news/mktg/dunzo-is-known-for-being-a-pick-up-and-drop-delivery-service-want-to-reposition-the-brand-as-a-grocery-delivery-service-sai-ganesh-on-dunzo-daily>
- **S16** Inc42 (7 Apr 2022) "Dunzo Daily Makes Mumbai Entry…" <https://inc42.com/buzz/dunzo-daily-makes-mumbai-entry-plans-to-expand-to-delhi-ncr-hyderabad-by-month-end/>
- **S17** Inc42 (23 Apr 2022) "Our top 20 stores are starting to show profitability: Dunzo's Kabeer Biswas" <https://inc42.com/buzz/our-top-20-stores-are-starting-to-show-profitability-dunzos-kabeer-biswas/>
- **S18** Forbes India (19 Jan 2022) "I don't understand the difference between 10 and 20 minutes" <https://www.forbesindia.com/article/startups/quick-commerce-i-dont-understand-the-difference-between-10-and-20-minutes-dunzos-kabeer-biswas/73035/1>
- **S19** Entrackr (19 Aug 2022) "With high one-time expenses, Dunzo Daily lost Rs 230 per order in H1 2022" <https://entrackr.com/2022/08/with-high-one-time-expenses-dunzo-daily-lost-rs-230-per-order-in-h1-2022/>
- **S20** Entrackr (11 Nov 2022) "Exclusive: Dunzo to shut down some dark stores in NCR and Hyderabad" <https://entrackr.com/2022/11/exclusive-dunzo-to-shut-down-some-dark-stores-in-ncr-and-hyderabad/>
- **S21** Entrackr (14 Jul 2023) "Dunzo looks for an olive branch amid cost-cutting measures" <https://entrackr.com/2023/07/dunzo-looks-for-an-olive-branch-amid-cost-cutting-measures/>
- **S22** Inc42 (6 Oct 2023) "The Dunzo Breakdown" <https://inc42.com/features/the-dunzo-breakdown/>
- **S23** Inc42 (9 Nov 2023) "Dunzo's Quick Commerce Folly" <https://inc42.com/features/dunzos-quick-commerce-folly/>
- **S24** Inc42 (13 Jul 2023) "How Dunzo Lost The 'It' Factor" <https://inc42.com/features/how-dunzo-lost-the-it-factor-quick-commerce-hyperlocal/>
- **S25** Inc42 (18 Jul 2023) "Dunzo looking to Reliance for $20 Mn lifeline" <https://inc42.com/buzz/dunzo-looking-reliance-20-mn-lifeline/>
- **S26** Inc42 (22 Aug 2023) "Disagreement Over Valuation Markdown Halts Dunzo Fundraising Plans" <https://inc42.com/buzz/disagreement-valuation-markdown-halts-dunzo-fundraising-plans/>
- **S27** Inc42 (7 Nov 2023) on FY23 audit and the company's "business burn is now neutral" statement <https://inc42.com/buzz/deloitte-flags-dunzos-mounting-liabilities-raises-doubt-on-ability-to-continue-as-a-going-concern/>
- **S28** TechCrunch (20 Feb 2024) "Flipkart has weighed acquiring Reliance-backed instant delivery startup Dunzo" <https://techcrunch.com/2024/02/20/flipkart-dunzo/>
- **S29** TechCrunch (30 Aug 2023) "Dunzo, backed by Reliance and Google…" <https://techcrunch.com/2023/08/30/dunzo-backed-by-reliance-and-google-delays-employee-salaries-again>
- **S30** Inc42 (19 Jan 2025) "How Dunzo Lost Its Edge" <https://inc42.com/features/dunzo-kabeer-biswas-downfall-reliance/>
- **S31** Inc42 (4 Jan 2025) on Reliance declining to fund or buy Dunzo <https://inc42.com/buzz/reliance-retail-dunzo-write-off-kabeer-biswas/>
- **S32** TechCrunch (8 Jan 2025) "Flipkart hires Dunzo's co-founder to lead quick commerce push" <https://techcrunch.com/2025/01/08/flipkart-taps-dunzo-founder-to-lead-quick-commerce-push/>
- **S33** Business Today (15 Jan 2025) "Dunzo goes offline after cofounder Kabeer Biswas joins Flipkart" <https://www.businesstoday.in/technology/news/story/dunzo-goes-offline-after-cofounder-kabeer-biswas-joins-flipkart-460763-2025-01-15>
- **S34** Entrackr (7 Aug 2025) "Reliance officially writes off $200 Mn investment in Dunzo" <https://entrackr.com/news/reliance-officially-writes-off-200-mn-investment-in-dunzo-9637264>
- **S35** Rest of World (20 Mar 2025) "Screaming customers, unpaid workers: Inside the chaotic demise of … Dunzo" <https://restofworld.org/2025/dunzo-shutdown-india-quick-commerce/>
- **S36** Finshots (16 Nov 2023) "What's going on at Dunzo?" <https://finshots.in/archive/whats-going-on-at-dunzo/>
- **S37** Inc42 (28 Apr 2020) Dunzo's lockdown growth story <https://inc42.com/infocus/covid19-tech-impact/33-higher-weekly-orders-2x-surge-in-ticket-size-dunzos-lockdown-growth-story/>
- **S38** IIFL (Aug 2022) "To cut costs, Dunzo encouraging users to choose the 60-minute delivery option" <https://www.indiainfoline.com/news/markets/to-cut-costs-dunzo-encouraging-users-to-choose-the-60-minute-delivery-option>
- **S39** Inc42 (Aug 2022) "Dunzo's B2B logistics arm joins ONDC…" <https://inc42.com/buzz/dunzos-b2b-logistics-arm-joins-ondc-to-offer-last-mile-services/>
- **S40** YourStory (Oct 2022) Dunzo for Business [snip] <https://yourstory.com/2022/10/dunzo-for-business-b2b-vertical-mid-last-mile-logistics-smb-brands>
- **S41** The Morning Context (10 Feb 2023) "Dunzo to shut most dark stores…" [snip] <https://themorningcontext.com/internet/dunzo-to-shut-most-dark-stores-scale-down-grocery-business>
- **S42** The Ken (26 Sep 2023) "Dunzo fans made it a verb. Then it became just another delivery firm" [snip] <https://the-ken.com/story/dunzo-fans-made-it-a-verb-then-it-became-just-another-delivery-firm/>
- **S43** JM Financial (29 Feb 2024) "Deep-Dive: Quick Commerce" <https://www.jmfl.com/Common/getFile/3278>
- **S44** Redseer (7 Mar 2024) "Unveiling India's Q-Commerce Revolution" <https://redseer.com/articles/unveiling-indias-q-commerce-revolution/>
- **S45** Redseer (20 Jan 2026) "The Dark Store Blind Spot" <https://redseer.com/articles/the-dark-store-blind-spot-the-part-of-quick-commerce-growth-that-the-topline-doesnt-show/>
- **S46** Redseer (12 Feb 2026) "Quick Commerce Finds Its New Normal" <https://redseer.com/articles/quick-commerce-finds-its-new-normal-with-scale-mix-and-momentum/>
- **S47** Entrackr (Jun 2022) "Zomato acquires Blinkit in $568 Mn all stock deal" <https://entrackr.com/2022/06/zomato-acquires-blinkit-in-568-mn-all-stock-deal/>
- **S48** Entrackr (22 Nov 2024) "Zepto raises $350 Mn…" <https://entrackr.com/news/zepto-raises-350-mn-surpasses-135-bn-in-funding-for-2024-7599303>
- **S49** TechCrunch (2 Dec 2021) "Swiggy to invest $700 million in express delivery service Instamart" <https://techcrunch.com/2021/12/02/swiggy-to-invest-700-million-in-express-delivery-service-instamart>
- **S50** Bain & Company, India Venture Capital Report 2024 <https://www.bain.com/insights/india-venture-capital-report-2024/>
- **S51** Inc42 (2025) "Porter Turns Profitable In FY25…" <https://inc42.com/buzz/porter-turns-profitable-in-fy25-revenue-crosses-inr-4000-cr-mark/>
- **S52** Inc42 (2026) "Why Quick Commerce Is Central To Shadowfax's Post-IPO Vision" <https://inc42.com/features/why-quick-commerce-is-central-to-shadowfaxs-post-ipo-vision/>
- **S53** Business Standard (29 May 2024) JioMart 30-minute grocery delivery [snip] <https://www.business-standard.com/companies/news/reliance-retail-s-jiomart-to-deliver-groceries-in-30-mins-from-next-month-124052901651_1.html>
- **S54** Inc42 (May 2025) "Swiggy Suspends Delivery Service Genie" <https://inc42.com/buzz/exclusive-swiggy-suspends-delivery-service-genie/>
- **S55** Inc42 (26 Dec 2023) "India's Quick Commerce Race: Blinkit On Top After 2023…" <https://inc42.com/features/indias-quick-commerce-race-blinkit-on-top-after-2023-can-rivals-catch-up/>
- **S56** Inc42 (Nov 2023) "Blinkit Turns Contribution Positive…" <https://inc42.com/buzz/zomato-q2-blinkit-turns-contribution-positive-for-first-time-since-acquisition/>
- **S57** Outlook Business (2024) "Zepto FY24 Results…" <https://www.outlookbusiness.com/start-up/news/zepto-fy24-results-revenue-doubles-to-rs-4454-crore-loss-shrinks-to-rs-12486-crore>
- **S58** Business Today (3 Mar 2022) "India's quick commerce industry to grow 15x…: RedSeer" <https://www.businesstoday.in/latest/economy/story/indias-quick-commerce-industry-to-grow-15x-reach-55-bn-by-2025-redseer-324643-2022-03-03>
- **S59** The Morning Context (16 Jul 2021) "BigBasket is one of Dunzo's quiet dark stores" [snip] <https://themorningcontext.com/internet/bigbasket-and-dunzos-quiet-dark-stores>
- **S60** Inc42 (28 May 2021) "Dunzo Expects To Clock $200 Mn GMV Run-Rate In FY22" <https://inc42.com/buzz/dunzo-expects-to-clock-200-mn-gmv-run-rate-in-fy22/>
- **S61** TechCrunch (30 Mar 2023) "Reliance-backed Dunzo nears fresh funding of $50 million" <https://techcrunch.com/2023/03/30/reliance-backed-dunzo-nears-fresh-funding-of-50-million>
- **S62** Entrackr (6 Apr 2023) "Reliance-backed Dunzo lays off 30% of workforce" <https://entrackr.com/2023/04/reliance-backed-dunzo-lays-off-30-of-workforce/>
- **S63** Inc42 (4 Oct 2023) "Cash-Strapped Dunzo Might See Valuation Drop To $200 Mn…" <https://inc42.com/buzz/cash-strapped-dunzo-valuation-drop-200-mn-35-mn-rights-issue/>
- **S64** Business Today (Dec 2017) "Google invests Rs 65 crore in hyper local app Dunzo…" <https://www.businesstoday.in/technology/internet/google-first-direct-investment-indian-startup-bangaluru-dunzo-12-million-usd/story/265379.html>
- **S65** Inc42 (May 2024) "Blinkit Takes Off" <https://inc42.com/features/blinkit-growth-year-fy24-zomato-quick-commerce/>
- **S66** HDFC Securities (12 May 2025) Swiggy Q4FY25 note <https://www.hdfcsec.com/hsl.docs/Swiggy%20-%20Q4FY25%20-%20HSIE-202505120614504022063.pdf>
- **S67** Entrackr (15 Jul 2025) "Porter turns profitable with over Rs 4,000 Cr revenue in FY25" <https://entrackr.com/exclusive/exclusive-porter-turns-profitable-with-over-rs-4000-cr-revenue-in-fy25-9496810>
- **S68** Inc42 (6 Jun 2025) Porter's 10-year grind <https://inc42.com/startups/porter-intracity-last-mile-delivery-pan-india-logistics-quick-commerce/>
- **S69** Logistics Insider (28 Mar 2025) on Redseer express-parcel report <https://www.logisticsinsider.in/redseer-report-express-parcel-market-to-grow-at-19-23-cagr-till-2030/>
- **S70** Sanghi, Balodi & Gupta (SAGE, 2023) "…Dunzo v/s Blinkit" <https://journals.sagepub.com/doi/full/10.1177/20438869231151449>
- **S71** Forbes India (14 Mar 2019) "Swiggy vs Dunzo: A battle for hyperlocal 2.0" <https://www.forbesindia.com/article/startups/swiggy-vs-dunzo-a-battle-for-hyperlocal-2.0/52789/1>
- **S72** The Quint (22 Apr 2023) quick-commerce economics explainer <https://www.thequint.com/explainers/quick-commerce-economics-explained-blinkit-zepto-dunzo-swiggy-10-minute-delivery>
- **S73** Entrackr (Dec 2019) "Exclusive: Dunzo suspends ops in parts of Bengaluru, Mumbai, NCR" <https://entrackr.com/2019/12/exclusive-dunzo-suspends-ops-bengaluru-mumbai-ncr/>
- **S74** afaqs (May 2022) Dunzo's QR-code ad in the IPL final <https://www.afaqs.com/news/advertising/dunzo-delivers-a-qr-code-based-ad-during-the-ipl-finals-seemingly-inspired-by-coinbases-super-bowl-spot-in-2022>
- **S75** Wikipedia, "Zepto (company)" (funding rounds) <https://en.wikipedia.org/wiki/Zepto_(company)>
- **S76** Swiggy DRHP via Motilal Oswal initiation (Nov 2024) (Instamart GOV and stores) <https://images.assettype.com/bloombergquint/2024-11-19/vqdtx7vp/Motilal_Oswal_Swiggy_Initiating_Coverage_Note.pdf>

## Appendix B: Model tables

### T1 FY23 loss bridge (Rs Cr)

| Line | Rs Cr |
|---|---|
| FY21 base loss | 226 |
| Ads above FY21 | 299 |
| People above FY21 | 246 |
| Delivery fleet above FY21 | 317 |
| Dark stores, inventory, other (net) | 713 |
| FY23 loss | 1,801 |

War share of FY23 loss: 1,575 Cr (87%)

### T2 bear case (Rs Cr; orders in thousands a day)

| Year | Orders/day | Revenue | Contribution | Fixed | EBITDA | Cash |
|---|---|---|---|---|---|---|
| FY23 | 120 | 295 | 23 | 220 | −197 | 1,573 |
| FY24 | 176 | 443 | 47 | 230 | −183 | 1,375 |
| FY25 | 236 | 604 | 87 | 240 | −153 | 1,207 |
| FY26 | 289 | 745 | 128 | 250 | −122 | 1,070 |
| FY27 | 341 | 891 | 173 | 262 | −89 | 966 |
| FY28 | 384 | 1,012 | 204 | 275 | −71 | 880 |

Breakeven: after FY28; cash FY27 966; cash FY28 880

### T2 base case (Rs Cr; orders in thousands a day)

| Year | Orders/day | Revenue | Contribution | Fixed | EBITDA | Cash |
|---|---|---|---|---|---|---|
| FY23 | 160 | 394 | 48 | 220 | −172 | 1,598 |
| FY24 | 235 | 590 | 88 | 230 | −142 | 1,441 |
| FY25 | 315 | 805 | 151 | 240 | −89 | 1,337 |
| FY26 | 385 | 994 | 213 | 250 | −37 | 1,285 |
| FY27 | 455 | 1,189 | 280 | 262 | 18 | 1,288 |
| FY28 | 512 | 1,350 | 328 | 275 | 53 | 1,327 |

Breakeven: FY27; cash FY27 1,288; cash FY28 1,327

### T2 bull case (Rs Cr; orders in thousands a day)

| Year | Orders/day | Revenue | Contribution | Fixed | EBITDA | Cash |
|---|---|---|---|---|---|---|
| FY23 | 192 | 473 | 71 | 220 | −149 | 1,622 |
| FY24 | 282 | 708 | 127 | 230 | −103 | 1,503 |
| FY25 | 378 | 966 | 209 | 240 | −31 | 1,457 |
| FY26 | 462 | 1,192 | 289 | 250 | 39 | 1,481 |
| FY27 | 546 | 1,426 | 376 | 262 | 114 | 1,580 |
| FY28 | 614 | 1,620 | 439 | 275 | 164 | 1,729 |

Breakeven: FY26; cash FY27 1,580; cash FY28 1,729

### T3 Unit economics by stream (Rs per order: revenue / contribution)

| Stream | FY23 | FY24 | FY25 | FY26 | FY27 | FY28 |
|---|---|---|---|---|---|---|
| pick | 66 / 15 | 68 / 18 | 70 / 21 | 72 / 24 | 73 / 25 | 74 / 26 |
| quick | 78.0 / 2.0 | 79.5 / 6.5 | 81.0 / 11.0 | 82.5 / 14.5 | 84.0 / 17.0 | 85.5 / 18.5 |
| b2b | 52 / 6 | 52 / 7 | 53 / 9 | 53 / 9 | 54 / 11 | 54 / 11 |

### T4 FY27 EBITDA sensitivity (rows: volume factor; columns: contribution change Rs/order)

| Volume | −3 | −1.5 | 0 | +1 | +2 |
|---|---|---|---|---|---|
| 0.75 | −89 | −71 | −52 | −39 | −27 |
| 0.9 | −55 | −32 | −10 | 5 | 20 |
| 1.0 | −32 | −7 | 18 | 35 | 51 |
| 1.1 | −9 | 19 | 46 | 64 | 83 |
| 1.2 | 14 | 44 | 74 | 94 | 114 |

### T5 Lowest cash balance FY23 to FY28 (same grid)

| Volume | −3 | −1.5 | 0 | +1 | +2 |
|---|---|---|---|---|---|
| 0.75 | 880 | 965 | 1,049 | 1,106 | 1,162 |
| 0.9 | 1,012 | 1,114 | 1,210 | 1,261 | 1,307 |
| 1.0 | 1,101 | 1,203 | 1,285 | 1,325 | 1,365 |
| 1.1 | 1,179 | 1,269 | 1,335 | 1,379 | 1,423 |
| 1.2 | 1,240 | 1,313 | 1,385 | 1,426 | 1,457 |

### T6 Reported history (Rs Cr)

| FY | Revenue | Net loss | Spent per Rs 1 earned |
|---|---|---|---|
| FY19 | 0.77 | 169.0 | 225.0 |
| FY20 | 27.5 | 338.4 | 13.09 |
| FY21 | 45.8 | 225.7 | 5.75 |
| FY22 | 54.3 | 464.0 | 9.8 |
| FY23 | 226.6 | 1,801.0 | 9.09 |

## Appendix C: Glossary

| Term | Meaning |
|---|---|
| QC | Quick commerce: 10 to 30 minute delivery of groceries and daily essentials from dark stores |
| Dark store | A small warehouse, closed to walk-in customers, used only to fulfil online orders |
| Partner shelf | An existing retail store (not owned by the delivery company) used to fulfil orders on a revenue-share or commission basis |
| AOV | Average order value: the average rupee value of one order |
| GMV | Gross merchandise value: the total value of goods sold through a platform before deductions |
| GOV | Gross order value: GMV measured per order, used interchangeably with GMV in quick commerce reporting |
| Contribution margin | Revenue per order minus the variable costs (rider pay, packaging, discounts) directly tied to that order |
| Contribution (₹ per order) | Contribution margin expressed in rupees per order, before fixed costs |
| EBITDA | Earnings before interest, tax, depreciation and amortisation: operating profit before financing and non-cash charges |
| Burn (burn rate) | The rate at which a company spends cash, usually stated per month |
| D4B | Dunzo for Business, Dunzo's B2B logistics and last-mile delivery arm, later called Dunzo Merchant Services |
| ONDC | Open Network for Digital Commerce, an Indian government-backed open protocol for e-commerce and logistics |
| CAC | Customer acquisition cost: the marketing and incentive spend needed to acquire one paying customer |
| Take rate | The share of a transaction's value that a platform keeps as commission or fee |
| RoC | Registrar of Companies: the Indian regulator with whom private companies file annual financial statements |
| FY | Financial year. In India, FY23 runs from 1 April 2022 to 31 March 2023 unless stated otherwise |
| Series (funding round) | A named stage of startup fundraising (Series A, B, C and so on), each usually at a higher valuation |
| Valuation | The implied worth of a company, usually set by the price paid per share in its most recent funding round |
| Down round | A funding round priced at a lower valuation than the company's previous round |
| Convertible note | A short-term loan that converts into equity at a future funding round, often at a discount |
| Dark-store breakeven | The order volume at which a dark store's revenue covers its own operating costs |
| Last-mile delivery | The final leg of a delivery, from a local hub or store to the customer's door |
| Mid-mile | The delivery leg between a central warehouse and a local dark store or hub |
| SKU | Stock-keeping unit: one distinct product or item variant carried in inventory |
| Hyperlocal | Delivery or commerce scoped to a small radius within a single city or neighbourhood |
| MSME | Micro, small and medium enterprise, the Indian government's classification for small businesses |
| IPO | Initial public offering: a company's first sale of shares to public investors |
| PAT | Profit after tax: net profit remaining after all expenses and taxes |
| Bridge financing | Short-term funding raised to cover a company until its next major funding round |
| Anchor client | A single large client whose orders make up a disproportionate share of a business line's revenue |
| Client concentration | The share of revenue or orders coming from a company's largest few clients |

## Appendix D: Data conflicts and resolutions

Several figures in the public record about Dunzo and the quick-commerce market conflict across
sources. Each conflict below is resolved with a stated rule, so every number used in the main
document is traceable to one chosen source.

| Topic | Conflict | Resolution |
|---|---|---|
| FY20 loss | ₹338.4 Cr (Entrackr) vs ₹228.4 Cr (Inc42) | Use Entrackr: it quotes the RoC filing directly |
| FY21 revenue | ₹45.8 Cr (Entrackr FY21) vs ₹25.1 Cr (Inc42, later restatement) | Use ₹45.8 Cr; the Inc42 figure is likely a later reclassification, not a correction |
| FY23 revenue | ₹226.6 Cr consolidated vs ₹206.5 Cr standalone | Use ₹226.6 Cr consolidated, consistent with the reported FY23 loss figure |
| Peak valuation | About $775M (TechCrunch, Inc42) vs $744M to $800M in other reports | Use "about $775M" throughout |
| Dunzo Daily launch | June 2021 (Inc42, 20-minute promise) vs August 2021 (19-minute rebrand) | Launch dated June 2021; the 19-minute branding is a separate, later repositioning in August 2021 |
| Peak-era market share | JM Financial's CY22 estimate puts Dunzo and others at about 1% of category GMV, while Dunzo's own June 2022 order data (5.5M Dunzo Daily orders that month) implies a materially larger share | The document does not state a single Dunzo market-share percentage. Dark-store counts and order volumes are shown instead, and this conflict is disclosed rather than resolved by picking one number |
| Total funding raised | Reported between about $450M and $500M across sources | Use "over $450M" as the conservative, source-supported floor |
| "80%+ Bengaluru market share" claim | Appears only in a single low-authority blog post, with no primary source | Not used anywhere in this document |
