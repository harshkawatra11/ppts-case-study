## 0. Document control

**Answer.** This document is the research base for all four Eurogrip x Unstop case studies, with Case Study 4 (mechanic and puncture-shop advocacy) carried to a full deck-ready solution and Cases 1 to 3 solved to the same evidentiary standard. It exists so that every number on the Case 4 Figma deck, and every recommendation made for Cases 1 to 3, traces to a cited raw fact `[RA##]` through `[RH##]`, a source `[S###]`, a sentence of the brief `[C1-B##]` to `[C4-B##]`, a stated assumption `[A##]`, or a model output `[M ...]`. The build ran eight research lanes (R-A through R-H), one modelling pass and six writers (A to F); this section is the reader's map to all of it before the argument begins in section 1.

### 0.1 Purpose and reader

Three readers are expected. The Unstop and Eurogrip judging panel will read the Case 4 deck and this document's Case 4 chapters (sections 5 to 16) to check that the programme design, the budget and the measurement plan actually answer the brief's five evaluation criteria `[C4-B26]` to `[C4-B30]`, not a generic loyalty-app pitch. Team IdeaForge (Harsh Kawatra, Delhi Technological University) will use this document as the single place to check a number before it goes on a slide; if a headline figure changes, every slide and every appendix that carries it is updated from this document, never the other way round, per the golden rule on propagating cost figures (`PLAN.md` section 5, rule on cost/BOM figures). Any reader checking Cases 1 to 3, which are solved here in full but not built into a deck under this round, will find the same density: an obvious answer stated fairly, a recommendation with reasons, a moneyshot with bear, base and bull values, and a kill criterion, for each case, in section 2.

### 0.2 Tag legend

| Tag | Meaning | Lives in |
|---|---|---|
| `[RA##]` to `[RH##]` | A raw fact row from one of the eight research lanes (R-A Eurogrip and TVS Srichakra, R-B tyre industry, R-C mechanic universe, R-D programmes and costs, R-E Case 1 segments and media, R-F Case 2 EV tyres, R-G Case 3 tractor tyres, R-H methods and citations) | `research/raw/R-*.md` |
| `[S###]` | An external source cited by a raw fact, numbered by the lane's reserved block | `research/raw/sources.md` |
| `[C1-B##]`, `[C2-B##]`, `[C3-B##]`, `[C4-B##]` | A sentence of one of the four case briefs, by its assigned ID | `case/01-brief.md` |
| `[A##]`, `[A1-##]`, `[A2-##]`, `[A3-##]` | A team assumption with a bear, base and bull value (A for Case 4, A1 for Case 1, A2 for Case 2, A3 for Case 3) | `model/inputs/assumptions.csv` |
| `[M c4.key]`, `[M c1.key]`, `[M c2.key]`, `[M c3.key]` | A model output field, read from the locked run | `model/model_outputs.json`, `model/model_tables.md` |
| `[T#]` | A numbered table inside `model_tables.md` | `model/model_tables.md` |

A number without one of these tags is a drafting error. Any paragraph that rests on an assumption says the word "assumption" once, in that paragraph, so a reader never has to infer whether a figure was measured or designed.

### 0.3 Source hierarchy

Per the golden rule on source precedence (`PLAN.md` section 0.3, rule 7), sources rank in seven tiers, highest first. The seventh tier (research paper or standards body) is added to the plan's six named tiers because two lanes, R-H (methods) and the Case 2 chapters built from R-F, draw on peer-reviewed journal articles and international standards bodies that sit above a press release in reliability but below a government statistic in jurisdiction over an Indian fact; it is placed at tier 4, between credit-rating rationales and industry-body material, because a cited, dated journal article or a standards body's own publication record is a stronger primary-adjacent source than an industry press release, even though it carries no authority over an India-specific market fact.

| Tier | Kind | Example in this document |
|---|---|---|
| 1 | Company filing (annual report, stock-exchange filing, investor presentation) | TVS Srichakra NSE/BSE filings `[RA02]`, `[RA48]`, `[RA100]` |
| 2 | Government or regulator statistics | MoSPI ASUSE `[RC02]`, SIAM wholesale data `[RB15]`, CBIC GST notification `[RA60]` |
| 3 | Credit-rating rationale | CRISIL rationales 2018 to 2024 `[RA08]`, `[RA95]` to `[RA97]`, `[RB55]` to `[RB58]` |
| 4 | Peer-reviewed research paper or standards body | Keller 1993 `[RH01]`, Kahneman and Tversky 1979 `[RH11]`, AIAG-VDA FMEA Handbook `[RH35]` |
| 5 | Industry body or company press release | ATMA statements `[RB36]` to `[RB38]`, TVS Srichakra press releases `[RA37]` |
| 6 | Reputable press | Business Standard, Autocar Professional, Outlook Business (used throughout R-A, R-B) |
| 7 | Vendor blog or aggregator | Screener.in `[RA12]`, Autobei `[RB01]` to `[RB05]`, almonds.ai, Scribd |

Where a lower tier disagrees with a higher tier, the higher tier wins and the disagreement is logged in `research/raw/conflicts.md` (Appendix F). Figures resting only on tier 7 carry the label "aggregator-reported" or "vendor-reported" wherever they appear in this document, including on the deck.

### 0.4 Verification status by lane

No separate formal verification pass (R2 in the step sequence) was run in this build. `EG\DECISIONS.md` records this under its "R2 skip" entry: each of the eight lanes already re-opened its own primary sources directly during its own build, rather than citing a search-result snippet and leaving correction to a second pass, so a dedicated verification wave would have re-checked work the lane itself had already re-checked. The honest consequence is that "verification status" in this document means each lane's own self-reported status column, not an independent second reviewer's judgement. The table below counts every row of every lane's own Facts table by its stated status.

| Lane | VERIFIED | CORRECTED | SNIPPET | UNVERIFIABLE | Rows counted |
|---|---|---|---|---|---|
| R-A, Eurogrip and TVS Srichakra | 55 | 16 | 13 | 0 | 84 |
| R-B, tyre industry | 46 | 8 | 3 | 4 | 61 |
| R-C, mechanic universe and rider journey | 53 | 6 | 6 | 2 | 67 |
| R-D, programmes and costs | 69 | 5 | 9 | 4 | 87 |
| R-E, Case 1 segments and media | 71 | 14 | 5 | 9 | 99 |
| R-F, Case 2 EV tyres | 45 | 13 | 11 | 0 | 69 |
| R-G, Case 3 tractor tyres | 53 | 4 | 8 | 1 | 66 |
| R-H, methods and citations | 17 | 1 | 17 | 6 | 41 |
| **Total** | **409** | **67** | **72** | **26** | **574** |

*Columns expanded: VERIFIED = status column reads exactly "VERIFIED" (page opened and figure matched); CORRECTED = a figure was opened and differed from an earlier search-only lead, with the corrected figure shown in the row; SNIPPET = seen only in a search-result snippet, the page itself not independently opened, never used as the sole support for a deck number; UNVERIFIABLE = searched for and found only on a source too weak or too internally inconsistent to carry a figure, used only with an explicit caveat or excluded.*
*Source: row counts taken directly from each of `research/raw/R-A-eurogrip-company.md` through `research/raw/R-H-methods.md`.*

R-H carries the lowest VERIFIED-plus-CORRECTED share of any lane (18 of 41 rows, about 44%, against a deck-wide average closer to 83%) by design, not by shortfall: it sources decades-old or paywalled academic originals (Keller 1993, Kahneman and Tversky 1979, Akao's 1990 QFD text, Altshuller's TRIZ principles) through confirmed bibliographic citation, publisher catalogue pages and cross-checked secondary summaries, rather than through full-text re-derivation of a 1979 Econometrica paper or a 1990 Productivity Press book that direct web fetch cannot reach. Every framework cited from R-H in sections 2, 7, 10, 11, 13 and 14 is attributed to its correctly dated original, with any unresolved bibliographic detail (an exact page range, a first-use year) stated as a gap rather than guessed.

### 0.5 Model version and hash

Every modelled number in this document (`[M ...]` tags) comes from `model/eurogrip_model.py`, run with hash `b1125880f5` at `2026-10-17T23:47:20` under model version "eurogrip-model v1". That run wrote `model/model_outputs.json` and `model/model_tables.md`, and every writer across this six-part document reads the same locked run; no writer recomputes a model figure independently. Where a raw lane file's own arithmetic would imply a slightly different number from the model's (for example, a lane's quick average of four prices against the model's weighted assumption), the model's number is the one used on any slide or in any headline sentence, and the raw file's arithmetic is shown as the derivation behind the assumption that feeds the model, not as a competing citation.

### 0.6 Honesty conventions

Four kinds of claim appear in this document and each is tagged so a reader can tell them apart at a glance.

| Kind of claim | Tag pattern | What it means | What it does not mean |
|---|---|---|---|
| Case fact | `[C1-B##]` to `[C4-B##]` | A sentence the brief itself states | Not independently verified by this team; quoted or paraphrased, never silently edited |
| Outside evidence | `[RA##]` to `[RH##]`, `[S###]` | A fact a research lane found and dated, with a source and a status (section 0.4) | Not a model output; a raw fact can be wrong even at VERIFIED status if the source itself is weak (tier 7), which is why the tier is always named |
| Assumption | `[A##]`, `[A1-##]`, `[A2-##]`, `[A3-##]` | A bear, base and bull value the team set because no source gives the figure, recorded in the assumptions register with its basis | Not a measured fact; every paragraph using one says "assumption" once |
| Model output | `[M ...]`, `[T#]` | A number the locked model run computed from the assumptions and raw facts above it | Not a new, independent fact; it is only as reliable as the assumptions and facts that feed it, which is why the tornado table (`model_tables.md` T6) exists |

The single most important honesty rule in this build concerns Case 4's mechanic brand-track study `[C4-B06]`, `[C4-B11]`. The brief describes this study only in qualitative terms (awareness "lukewarm", stocking "lags well behind competing brands"), and this document never attaches an invented percentage to it; every statement drawn from it in sections 7, 9 and 10 stays at the brief's own level of precision.

### 0.7 Brief edit marks and the Case 4 struck-insight ruling

The four brief PDFs carry blue (emphasised or late-added) and struck-through (deleted) text that plain text extraction loses; `case/01-brief.md` reproduces both marks against each sentence ID (`PLAN.md` section 1.3). The single ruling that matters most for Case 4's argument concerns a struck insight: the brief's mechanic brand-track findings originally stated, as insight 2, that "functional support, tools and equipment to change tyres, has overtaken cash and pricing incentives as the top-ranked way mechanics want to be supported by a brand" `[C4-B12]`, and this sentence is struck through in the PDF. It is never presented in this document as an Eurogrip finding. At the same time, the judging criterion for insight-grounding still asks whether the solution "builds on the actual mechanic preference shift, toward tools/equipment and brand visibility, away from pure cash" `[C4-B27]`. The ruling applied throughout sections 7, 9 and 10, per `PLAN.md` section 0.3 rule 5: the brand-visibility half of that shift is attributed to the brief's own (unstruck) insight on rising preference for branded merchandise, display boards and uniforms `[C4-B13]`; the tools-and-equipment half is supported only with external evidence from adjacent-category programmes (section 8, R-D) and is explicitly framed as a hypothesis the pilot tests, via a randomised reward-currency arm (tool credits against a cash equivalent of the same value), rather than as a finding Eurogrip already has. No sentence in this document reads "Eurogrip's study shows tools overtook cash."

### 0.8 Skill calibration note

The argument behind all four cases, and the Case 4 recommendation in particular, was engineered using the `case-competition-deck` skill in generate mode before any research lane began writing prose (`PLAN.md` section 0.4, touchpoints T1 and T2). `research/ARGUMENT.md` records the skill's calibration note in full; quoted fairly here: "the skill's corpus is three GCCH M&A decks. These four cases are marketing (Cases 1, 4), product engineering (Case 2) and go-to-market strategy (Case 3). The structural and rhetorical patterns transfer (contrarian recommendation, action titles, moneyshot, foreshadowing, symmetric treatment, defensive depth, three-scenario thinking); the M&A-specific frameworks (DCF, premium decomposition, EPS accretion) do not apply and are replaced case by case." This document follows that distinction throughout: the rhetorical architecture (an obvious answer rejected with three reasons, a governing thought, one moneyshot per case, a seed planted before the recommendation is named, symmetric treatment of parallel segments) is used with full confidence in every case chapter, while the named frameworks for each case (section 1.5 below, and the per-case framework tables in section 2) are chosen for fit to that case's own type, not inherited unchanged from an M&A playbook.

### 0.9 AI-use disclosure

This document was researched and written with AI assistance across research lanes, modelling and drafting, with every number traced to a cited source or a stated assumption. Eight research-lane agents gathered facts through web search and direct page fetches; one modelling agent wrote and ran the Python model that produced every `[M ...]` figure; six writing agents (A to F, this document's authorship) drafted the prose from the fact base and the model's locked output, not from general knowledge of the tyre industry. Team IdeaForge (Harsh Kawatra) set the research plan, ruled on every logged conflict (`research/raw/conflicts.md`), and reviewed the fact base and the model before this document was assembled. No primary research, interviews, surveys or letters of intent, was conducted for any of the four cases; section 15 states this plainly for Case 4 and proposes a named Customer Validation Plan instead of presenting invented primary research as if it had been run.

### 0.10 Document map

| Part | Sections | Writer | What it covers |
|---|---|---|---|
| Opening and cross-case | 0 to 2 | A | Document control, the four briefs' requirements and judging maps, the four answers on one page |
| Eurogrip and the market | 3 to 5 | A | Eurogrip and TVS Srichakra today, the Indian two-wheeler tyre market, the replacement-tyre rider journey |
| Mechanic universe and insight | 6 to 9 | B | The mechanic and puncture-shop universe, why Eurogrip loses at stocking and recommendation, adjacent-category programme teardowns, the rejected cash-per-tyre scheme |
| The programme in full | 10 to 16 | B, C | The tier ladder and loop, budget and moneyshot, rollout and gates, measurement, risks, the validation plan, the slide-to-section map |
| Case 1 | 17 to 20 | D | Segments and jobs, positioning, budget and channel matrix, campaign ideas |
| Case 2 | 21 to 24 | E | EV versus ICE tyre demands, the EV-ready concept, compliance, cost and manufacturability |
| Case 3 | 25 to 29 | F | Tractor-tyre market, buying centre, segment strategy, budget and rollout, cross-case synthesis |
| Closing | 30 to 31 | F | Judge question bank, method and limits |
| Appendices | A to F | generated | Bibliography, model tables, datasets, assumptions register, glossary, conflicts and rulings |

### What this section establishes, and what it does not

- It establishes the tag system, the seven-tier source hierarchy, and the fact that every number in this document is traceable to one of four kinds of claim (case fact, outside evidence, assumption, model output).
- It establishes, honestly, that verification in this build means each lane's own re-opening of its sources, not an independent second pass, and that R-H's lower VERIFIED-plus-CORRECTED share is a function of what kind of sources methods citations are, not a weaker lane.
- It establishes the ruling on the struck Case 4 insight, which governs how sections 7, 9 and 10 write about mechanic preferences for tools versus cash.
- It does not yet state any finding about Eurogrip, the market, or the programme design; those begin in section 1.
- It does not resolve every data gap found across the eight lanes; those are named plainly where they occur, starting with the "where the evidence is thinnest" table in section 1.

## 1. Four briefs, 58 requirements: where each is answered, and for Case 4 on which slide panel

**Answer.** Across the four Eurogrip briefs there are 58 distinct requirements once the challenge statement, the research asks, the constraints, the Round 2 coverage list and the evaluation criteria of each case are counted separately: 18 for Case 4 (`PLAN.md` §1.2, reproduced below), 13 for Case 1, 14 for Case 2 and 13 for Case 3. Every one of the 58 maps to a research section in this document, and for Case 4, the only case built into a Figma deck this round, to a named slide panel. The thinnest evidence in the whole build sits in three places: no dealer or distributor margin percentage for two-wheeler tyres `[RB67]`, no official count of India's mechanic and puncture-shop universe (triangulated four ways instead, `[T1]`), and no published study attaching a number to how often a mechanic's recommendation actually decides a replacement-tyre purchase `[RB67]`.

### 1.1 Case 4 requirements traceability matrix (the deck case)

This table is `PLAN.md` §1.2 reproduced exactly, with its "Deck panel" column kept as the plan fixed it; the Round 2 brief itself asks for these requirements to show up in a deck of up to 15 slides covering programme structure, incentive design, scale and rollout, and budget allocation `[C4-B25]`.

| Req | Brief wording (abridged) | ID | Research section | Deck panel |
|---|---|---|---|---|
| R1 | Mechanics are the most frequented touchpoint; mechanic most often recommends the tyre at replacement | C4-B03/04 | §6, §7 | S1 mind map (THE MECHANIC node); S2 P1 |
| R2 | Advocacy today is informal: unstructured, inconsistent, hard to place on the same plans as peers | C4-B05 | §7, §9 | S2 P2 (insight 4), P4 (tiers make it structured) |
| R3 | Brand awareness lukewarm; recommendations not in Eurogrip's favour | C4-B06/07 | §7 | S2 P2 insight 1 |
| R4 | Build a scalable, cost-effective advocacy ecosystem across India | C4-B09 | §10, §12 | Headline; P4; P6 |
| R5 | Genuine, lasting recommendation, without high-cost one-off incentives that are hard to sustain or track | C4-B10 | §9, §10, §13 | P3 (obvious play rejected); P4 loop; P8 |
| R6 | Insight: awareness average, stocking lags competitors, opportunity is awareness to stocking to recommendation | C4-B11 | §7 | P2 insight 1; P4 Tier 3 asks for stocking |
| R7 | (Struck) tools overtook cash as top-ranked support | C4-B12 [STRUCK] | §1.3 ruling | Never cited as a finding |
| R8 | Insight: preference for brand-visibility items (merchandise, display boards, uniforms) rising quickly; association and status | C4-B13 | §7, §10 | P2 insight 3; P4 Gets column |
| R9 | Insight: meaningful advocacy from mechanics who do not stock Eurogrip; influence is not the same as stocking | C4-B14 | §7, §10 | P2 insight 2; P4 loop (code works without stock); cover seed |
| R10 | Research: scale of the mechanic and puncture-shop universe (numbers, geography, fragmentation) | C4-B16 | §6 | P1; Appendix A1 |
| R11 | Research: cost benchmarks for tools and equipment and branded merchandise at scale | C4-B17 | §8, §11 | P7 budget; Appendix A2 |
| R12 | Research: how adjacent categories (auto parts, lubricants, batteries) or competitors structure programmes | C4-B18 | §8 | Appendix A3 heat grid; cover crests |
| R13 | Budget 1.5% to 2% of relevant BU revenue | C4-B19 | §11 | P7 title; Appendix A2 |
| R14 | Scalable nationally, not boutique | C4-B20 | §12 | P6 gantt (national by Q5 to Q8) |
| R15 | Sustain advocacy over time, not one sign-up incentive | C4-B21 | §10, §13 | P4 loop ("tiers renew every six months"); P2 insight 4 |
| R16 | Some mechanism to track or estimate effectiveness, even if imperfect | C4-B22 | §13 | P8 scorecard; P5 moneyshot (break-even) |
| R17 | Round 2 content: programme structure, incentive design, scale and rollout plan, budget allocation | C4-B25 | §10 to §12 | P4, P4, P6, P7 |
| R18 | Judging: incentive realism, insight-grounding, scalability, sustainability, measurability | C4-B26 to C4-B30 | §1.4 | S2 ribbon is the five criteria |

*Columns expanded: ID = the brief sentence tag assigned in `case/01-brief.md`; Deck panel = the panel on the single core slide (S2) or cover/appendix slide this requirement surfaces on.*
*Source: `PLAN.md` §1.2, carried verbatim per the writer brief.*

### 1.2 Case 1 requirements traceability matrix

Case 1's brief does not number requirements as explicitly as Case 4's does, so this table builds the same five-column format from the brief's own challenge statement, segment insights, constraints, Round 2 coverage list and evaluation criteria `[C1-B07]` to `[C1-B22]`. "Slide in a 15-slide version" places each requirement on the slide it would occupy if Case 1 were built into a deck, following the same 15-slide ceiling the brief sets for Round 2 `[C1-B17]`.

| Req | Brief wording (abridged) | ID | Research section | Slide in a 15-slide version |
|---|---|---|---|---|
| R1 | Build and strengthen Brand Eurogrip distinctly across Commuter, Gig and Premium, staying coherent as one brand | C1-B07 | §17, §18 | Slide 2, challenge framing |
| R2 | Commuter: strong player, seen as suitable for all road types, known for the widest tyre range | C1-B08 | §17 | Slide 3 |
| R3 | Premium: most room to grow; weighs peer recommendation and performance heavily | C1-B09/B10 | §17 | Slide 4 |
| R4 | Gig: left intentionally open; research the rider profile independently | C1-B11 | §17 | Slide 5 |
| R5 | Budget: 1.5% to 2% of operating revenue | C1-B12 | §19 | Slide 9, budget |
| R6 | Channel mix must span Digital, Retail and On-ground; no single-channel strategies | C1-B13 | §19 | Slides 9 to 10 |
| R7 | Brand coherence: one architecture, not heterogenous approaches | C1-B14 | §18 | Slide 6 |
| R8 | Round 2 content: personas, positioning per segment, channel-wise activation plan, budget allocation, sample campaign ideas | C1-B17 | §17 to §20 | Slides 3 to 11 |
| R9 | Evaluation: segment specificity, three segments addressed distinctly | C1-B18 | §17 | Slides 3 to 5 |
| R10 | Evaluation: insight-grounding in provided and researched insights | C1-B19 | §17 | Slides 3 to 5 |
| R11 | Evaluation: channel realism within the budget guidance | C1-B20 | §19 | Slide 9 |
| R12 | Evaluation: differentiation beyond generic social media plus billboards | C1-B21 | §18 | Slide 6 |
| R13 | Evaluation: feasibility of execution within a realistic timeframe and structure | C1-B22 | §20 | Slide 11 |

*Source: `case/01-brief.md` §P.1, sentences C1-B07 to C1-B22.*

### 1.3 Case 2 requirements traceability matrix

Case 2 is the only case with a brief edit mark that removes scope: thermal management is struck from the technical areas and must not be presented as a required pillar `[C2-B15]` [STRUCK], per the ruling in `PLAN.md` §1.3.

| Req | Brief wording (abridged) | ID | Research section | Slide in a 15-slide version |
|---|---|---|---|---|
| R1 | Design a next-generation tyre concept addressing compound, tread and load rating, manufacturable and commercially viable at scale | C2-B10 | §21, §22 | Slide 2, challenge framing |
| R2 | Tyre construct: balance low rolling resistance against grip and durability under instant-torque acceleration | C2-B11 [BLUE] | §22 | Slide 3 |
| R3 | Tread pattern: reduced road noise, even wear under regenerative-braking load cycles | C2-B12 | §22 | Slide 3 |
| R4 | Optimized performance on vital needs: grip, high-speed stability, damage resistance, durability | C2-B13 [BLUE] | §22 | Slide 3 |
| R5 | Load rating: accommodate higher kerb weight from battery packs without compromising handling | C2-B14 | §22 | Slide 3 |
| R6 | Global viability: internationally accepted compliance and testing standards, not India-only | C2-B16 | §23 | Slide 5 |
| R7 | Cost realism: a realistic commercial band for the mass-market EV segment | C2-B17 | §24 | Slide 6 |
| R8 | Manufacturability: largely existing tyre-plant processes, no wholly new line | C2-B18 | §24 | Slide 6 |
| R9 | Round 2 content: engineering concept, compound and tread rationale, compliance approach, cost and manufacturability feasibility | C2-B21 | §21 to §24 | Slides 2 to 6 |
| R10 | Evaluation: technical soundness grounded in material science and tyre-design principles | C2-B22 | §22 | Slide 3 |
| R11 | Evaluation: genuine EV-specific understanding of torque, regen braking, NVH, load differences from ICE | C2-B23 | §21 | Slide 2 |
| R12 | Evaluation: innovation, a clear point of differentiation, not a minor tweak | C2-B24 | §22 | Slide 3 |
| R13 | Evaluation: manufacturability and cost realism at the target cost on largely existing processes | C2-B25 | §24 | Slide 6 |
| R14 | Evaluation: clarity of communication, especially in the Round 1 video | C2-B26 | n/a | Round 1 video, not a Round 2 slide |

*Source: `case/01-brief.md` §P.2, sentences C2-B10 to C2-B26.*

### 1.4 Case 3 requirements traceability matrix

| Req | Brief wording (abridged) | ID | Research section | Slide in a 15-slide version |
|---|---|---|---|---|
| R1 | Accelerate domestic OHT tractor market share: segments, channel strategy, value proposition | C3-B06 | §25 to §27 | Slide 2, challenge framing |
| R2 | Research: competitive landscape, key players, market shares, positioning; define Brand TVS Eurogrip's current standing | C3-B07 [BLUE] | §25 | Slide 3 |
| R3 | Research: farmer and fleet-operator buying behaviour, who influences the decision | C3-B08 [BLUE] | §26 | Slide 4 |
| R4 | Research: regional variation by cropping pattern, terrain, farm size | C3-B09 | §26 | Slide 4 |
| R5 | Budget: 1.5% to 2% of the relevant business-unit revenue | C3-B10 | §28 | Slide 7, budget |
| R6 | Distribution model: dealer-led, not direct-to-consumer or heavy-digital | C3-B11 | §26, §27 | Slide 5 |
| R7 | At least two distinct customer segments | C3-B12 | §27 | Slide 5 |
| R8 | Round 2 content: segment strategy, channel and dealer approach, value proposition, budget allocation | C3-B15 | §25 to §28 | Slides 2 to 7 |
| R9 | Evaluation: segment specificity, not one generic farmer persona | C3-B16 | §27 | Slide 5 |
| R10 | Evaluation: channel realism for how the category actually buys and sells | C3-B17 | §26 | Slide 4 |
| R11 | Evaluation: insight-grounding in what drives OHT purchase decisions | C3-B18 | §26 | Slide 4 |
| R12 | Evaluation: differentiation from how competitors currently operate | C3-B19 | §27 | Slide 5 |
| R13 | Evaluation: feasibility within the given budget and distribution constraints | C3-B20 | §28 | Slide 7 |

*Source: `case/01-brief.md` §P.3, sentences C3-B06 to C3-B20.*

### 1.5 Requirement counts by case

| Case | Requirements counted | Share of the 58 |
|---|---|---|
| Case 1 | 13 | 22.4% |
| Case 2 | 14 | 24.1% |
| Case 3 | 13 | 22.4% |
| Case 4 | 18 | 31.0% |
| Total | 58 | 100.0% |

*Source: tables 1.1 to 1.4, row counts.*

### 1.6 Judging criteria map, Case 4: where each criterion is won

This table is `PLAN.md` §1.4 reproduced exactly; it is the basis for the five tags on the Case 4 core slide's ribbon (`S2`), each tag standing for one of the brief's five evaluation criteria `[C4-B26]` to `[C4-B30]`.

| Criterion (C4-B26 to C4-B30) | What the judges look for | Where we win it | Evidence the judge sees |
|---|---|---|---|
| Incentive realism | Would mechanics and puncture-shop owners actually engage | Tier ladder priced per member per year from real tool prices; Tier 1 is free and costs the mechanic nothing; rewards are things a shop uses daily (repair kit consumables) | S2 P4 table; Appendix A2 cost per member; §11 tool price table |
| Insight-grounding | Builds on the preference shift toward tools and equipment and brand visibility, away from pure cash | Every design element traces to a brief insight (S2 P2 maps four insights to four design responses) and the obvious cash play is explicitly rejected (P3) | S2 P2, P3 |
| Scalability | Works nationally within budget | Universe sized four ways; members affordable inside 1.5% to 2% of BU revenue; distributor-led enrolment; national by Q5 to Q8 | S2 P1, P6, P7; Appendix A1, A2 |
| Sustainability | Advocacy persists after the first incentive | Rewards recur (consumables refill, tool upgrades); status re-qualified every six months; visibility compounds (shop board, listing); training creates identity | S2 P4 loop, P2 insight 4 |
| Measurability | Tracking feasible, even if imperfect | Code logged by the retailer in Eurogrip's existing retailer app; mystery-rider audits; matched-district pilot; brand-track re-run; explicit gates G1 to G3 | S2 P8, P5 moneyshot, P6 gates; Appendix A4 |

*Source: `PLAN.md` §1.4.*

### 1.7 Judging criteria map, Case 1

Case 1's own evaluation criteria section asks five questions `[C1-B18]` to `[C1-B22]`; the recommendation in section 2 of this document (one brand, one proof currency, three entry points, built on the gig fleet's tracked distance) is built to answer each one plainly rather than generically.

| Criterion (C1-B18 to C1-B22) | What the judges look for | Where we win it | Evidence |
|---|---|---|---|
| Segment specificity | Commuter, Gig and Premium addressed distinctly, not one generic approach | Three separate entry points (fleet distance, retail counter proof, peer advocacy) feeding one shared proof currency, never a single undifferentiated message | §17, segment profiles; §18, positioning per segment |
| Insight-grounding | Grounded in provided and researched brand insights | Commuter insight (widest range, `[C1-B08]`) and Premium insight (peer recommendation, `[C1-B10]`) both used directly; the Gig insight is built from research since the brief leaves it open `[C1-B11]` | §17 |
| Channel realism | Digital, Retail and On-ground mix realistic inside the budget guidance | Channel split priced per segment from CPM, retail branding and on-ground event benchmarks, inside 1.5% to 2% of FY26 operating revenue `[M c1.budget_cr]` | §19, channel matrix `[T13]` |
| Differentiation | A distinctive idea, not generic social media plus billboards | The masterbrand architecture around one proof currency (distance) is the distinctive idea, not a channel list | §18 |
| Feasibility | Could Eurogrip actually execute this within a realistic timeframe and structure | Channel allocations build directly on partnerships (fleet operators, retail network, riding communities) Eurogrip's own distribution already touches | §20 |

*Source: `case/01-brief.md` §P.1, sentences C1-B18 to C1-B22; `research/ARGUMENT.md`.*

### 1.8 Judging criteria map, Case 2

| Criterion (C2-B22 to C2-B26) | What the judges look for | Where we win it | Evidence |
|---|---|---|---|
| Technical soundness | Grounded in material science and tyre-design principles | Compound and tread choices built from rolling-resistance and tan delta physics, not asserted claims | §21, §22 |
| EV-specific understanding | Genuine grasp of torque, regen braking, NVH and load differences from ICE | A named EV-vs-ICE demand table drives every engineering choice in §22 | §21 |
| Innovation | A clear point of differentiation, not a minor tweak | Four simultaneous moves (construct, tread, load, vital-performance target) specified as one EV-ready standard, addressing the brief's own warning against "a minor tweak" `[C2-B24]` | §22, writer's note in `case/01-brief.md` §P.2 |
| Manufacturability and cost realism | Could this be produced at the target cost, on largely existing processes | Cost build-up lands at essentially the brief's own 8% cost-delta ceiling `[A2-03]`, `[M c2.delta_pct]`, stated honestly rather than claimed as comfortably inside it | §24 |
| Clarity of communication | The technical thesis communicated clearly in the Round 1 video | Round 1 deliverable, not scored inside this document's Case 2 chapters | n/a, Round 1 |

*Source: `case/01-brief.md` §P.2, sentences C2-B22 to C2-B26.*

### 1.9 Judging criteria map, Case 3

| Criterion (C3-B16 to C3-B20) | What the judges look for | Where we win it | Evidence |
|---|---|---|---|
| Segment specificity | Distinct customer segments, not one generic farmer persona | Commercial and haulage operators, smallholder owner-operators and custom hiring centres treated as three separate segments with separate value propositions | §27 |
| Channel realism | Dealer-channel strategy realistic for how the category buys and sells | Every budget line routes through dealers and village mechanics, never direct-to-consumer, honouring the brief's own distribution constraint `[C3-B11]` | §26, §28 |
| Insight-grounding | Genuine insight into what drives OHT purchase decisions | Total-cost-of-ownership framing for commercial operators, harvest-timed credit for smallholders, both built from the buying-centre map | §26 |
| Differentiation | A clear point of difference from how competitors currently operate | Sequencing the hardest-working segment first and using its tyre-life evidence to carry the smallholder message is the differentiated move, not a generic dealer-meet programme | §27 |
| Feasibility | Executable within the given budget and distribution constraints | Budget lines sum inside 1.5% to 2% of domestic OHT revenue `[M c3.budget_cr]`, with a used-versus-envelope check | §28 |

*Source: `case/01-brief.md` §P.3, sentences C3-B16 to C3-B20.*

### 1.10 Where the evidence is thinnest

Honesty about gaps is a golden rule of this build (`PLAN.md` §0.3 rule 4), so this table names the places across all four cases where a lane searched, found nothing at primary-source strength, and recorded the gap plainly rather than inventing a number.

| Gap | What was searched for | What was found instead | Where it is used |
|---|---|---|---|
| Dealer or distributor margin on two-wheeler replacement tyres | A percentage margin figure by any source tier | Nothing found; R-B logged the gap directly and the model carries channel margin as assumption `[A29]` (bear 22%, base 18%, bull 15%) rather than a sourced figure | §4, channel structure; §11, moneyshot derivation |
| Official count of India's mechanic and puncture-shop universe | A single national census-style figure, by NIC code or otherwise | No such figure exists; the model triangulates four independent methods (enterprise survey, two-wheeler parc, rival-programme floor, Eurogrip's own partner count) and takes the lower-estimate mean floored at the largest confirmed programme count `[T1]` | §6 |
| A study attaching a percentage to mechanic influence on replacement-tyre choice | A survey or study measuring how often a mechanic's recommendation decides the purchase | Nothing found at any source tier; R-B's own Gaps section states this explicitly, and the brief's own claim `[C4-B03]`/`[C4-B04]` is used without an invented percentage attached | §5, §7 |
| Standalone cost breakdown (raw material, employee cost) for TVS Srichakra | Notes-to-accounts detail inside the annual report | Not located as a readable filing; R-A's own Gaps section records three distinct queries tried and recommends an industry-level proxy instead | §3 |
| Advertisement and sales-promotion spend specific to TVS Srichakra | A disclosed rupee figure or percentage of revenue | Not disclosed anywhere opened; CEAT and Apollo both disclose about 2.1% of revenue `[RB49]`, `[RB50]`, used as the cross-check instead | §4, A&P benchmark table |
| A validated two-wheeler tyre replacement interval, in km or years, from a company or study | A primary figure, not a car-tyre proxy | Only an insurer's three-year rule of thumb was found `[RB22]`, explicitly labelled as a directional, non-tyre-maker proxy | §4, §5 |
| A dated, brand-level market-share table for two-wheeler replacement tyres | Percentages by named brand (MRF, Eurogrip, CEAT, Apollo and others) | Two single-source percentages surfaced (MRF about 35%, CEAT about 26%) and both were ruled unverifiable and excluded `[RB11]`, `[RB12]`; only the qualitative named-leader list is used `[RB10]` | §4, brand shares |
| Current live status and mechanic usability of the Bandhan retailer app | A 2025 or 2026 Play Store listing or company statement | Not confirmed; the most recent primary description is from the 2019 to 2020 launch window `[RA32]`, `[RA70]`, `[RA71]`; the deck and document name the app but do not claim a current mechanic user count (M1 ruling, `DECISIONS.md`) | §3, §10 |
| A peer-reviewed validity study for mystery-shopping as an unprompted brand-recommendation test | A study validating the exact audit method the Case 4 pilot proposes | Only general service-quality mystery-shopping literature was found `[RH20]` to `[RH22]`, plus one unreplicated master's-thesis accuracy figure `[RH21]`; the document states the audit design is methodologically analogous, not identical, to published studies | §13 |

*Source: `research/raw/R-A-eurogrip-company.md`, `research/raw/R-B-tyre-industry.md`, `research/raw/R-H-methods.md` Gaps sections; `model/model_outputs.json`.*

### What this section establishes, and what it does not

- It establishes a traceability matrix for every requirement of every case, 58 in total, each pointing to a research section, a brief ID, and, for Case 4, a named slide panel.
- It establishes a judging criteria map for all four cases (not only Case 4), showing where the team's recommendation wins each evaluation criterion the brief itself names.
- It establishes, honestly, the eight places across the build where the strongest evidence found still falls short of a clean sourced number, and what was used in its place.
- It does not yet state the four recommendations themselves in full; those are argued case by case in section 2.
- It does not resolve the Case 2 cost-delta finding beyond flagging it; the honest "essentially at the ceiling" reading is carried through in §1.8 and argued fully in §24.

## 2. The four answers on one page: pay mechanics for advice in tools and status, prove distance through the gig fleet, build the EV tyre on existing lines, and win the hardest-working tractors first

**Answer.** Each of the four cases rejects the first idea a judge would reach for and replaces it with a sharper one: Case 4 rejects a scan-and-earn cash app for a tools-and-status loop that pays for advice rather than stock, breaking even at 4.4 extra tyres per member a year in the base case `[M c4.be]`; Case 1 rejects three separate segment campaigns for one brand built on a single provable currency, distance, carried first by the gig fleet; Case 2 rejects a premium dedicated EV tyre for an EV-ready variant of the mass-market platform that lands its cost delta at essentially the brief's own 8% ceiling, 8.0% in the base case against a target of 8.0% `[M c2.delta_pct]`; Case 3 rejects a dealer-and-discount push for sequencing the hardest-working tractors first and letting their tyre life sell the brand to smallholders through the dealer. All four share one discipline: every number is bear, base and bull, never a single point estimate, and every recommendation names the evidence that would make the team change its mind.

### 2.1 Case 4: the obvious answer, and three reasons it falls short

**Obvious answer.** A scan-and-earn loyalty app for mechanics: each Eurogrip tyre sold or fitted earns points or cash through a QR coupon in the pack with instant bank payout, the model the lubricant industry already runs (Castrol's Fast Scan platform enrolled 1.5 lakh mechanics and retailers by 2019, lead L6), plus a one-time sign-up kit.

| # | Reason it falls short | Why, with evidence |
|---|---|---|
| 1 | Pays stockers, but advice comes from everyone | Points per tyre sold reward only shops that stock Eurogrip, while the brief states a meaningful share of advocacy already comes from mechanics who do not stock it `[C4-B14]` |
| 2 | Too few tyre sales per shop for points to add up | A lubricant is changed several times a year per bike; a tyre lasts years. Points that accrue a few times a year are either too small to change behaviour or so large they become the "high-cost, one-off incentive" the brief rules out `[C4-B10]` |
| 3 | Rivals can match cash within a week | A QR scan records a sale at a stocking shop, not a recommendation at a non-stocking one, which is what the measurability criterion asks for `[C4-B22]`; cash is the easiest lever for a rival to copy, and copying stops the advocacy as soon as the payout stops |

*Source: `research/ARGUMENT.md`, "Case 4: obvious answer and three reasons"; `C4-B10`, `C4-B14`, `C4-B22`.*

The model quantifies reason 3 directly. A cash-per-tyre scheme sized to match the base-case Case 4 envelope would reward about 52.1 lakh tyres a year at a cost of about ₹41.70 crore `[M c4.cash_scheme.cost_cr]`, `[T9]`, of which about 91% `[M c4.cash_scheme.deadweight_pct]` would be spent on tyres that would have sold through that mechanic anyway, assuming the scheme lifts volume by only `[A36]` 10% in the base case over a base stocking share of `[A35]` 50%. Section 9 derives this deadweight share in full; it is introduced here only to make reason 3 a number, not an assertion.

### 2.2 Case 4: the recommendation, and three reasons

**Governing thought.** "Pay for the advice, not the stock, and pay in tools and status rather than cash." Every mechanic and puncture shop can join for free. Members get the tools of their trade, visible Eurogrip association and training, all of which they use every day; in return they recommend Eurogrip using a personal code. The rider can buy the tyre at any Eurogrip retailer; the retailer logs the code when the tyre is sold, in the retailer app Eurogrip already runs (named Bandhan, per the ruling in `DECISIONS.md`'s "M1 rulings.json" entry); the code earns the mechanic tool credits and keeps or lifts their tier. Tiers are re-qualified every six months.

| # | Reason | Evidence |
|---|---|---|
| 1 | Credits the advice where it happens | Includes shops that never stock a tyre `[C4-B14]`, and pulls stocking along at Tier 3, where the brief says the gap is `[C4-B11]` |
| 2 | Pays in what a shop uses and wants to be seen with | Repair kits, gauges, inflators, boards and uniforms `[C4-B13]`, `[C4-B27]`; consumables run out every quarter, a recurring, low-cost reason to stay active |
| 3 | Measurable with what Eurogrip already owns | The retailer app logs each code against a tyre serial; mystery-rider audits measure unprompted recommendation; a matched-district pilot measures the lift |

*Source: `research/ARGUMENT.md`, "Case 4: recommendation and three reasons."*

### 2.3 Case 4: moneyshot, bear, base, bull

"A member shop needs 4.4 extra Eurogrip tyres a year, one every 11.7 weeks, for the whole programme to pay for itself." This is the base case; it claims no uplift beyond the bar itself.

| Scenario | Break-even extra tyres per member a year | One tyre every (weeks) | Annual programme spend (₹ crore) | Members at steady state (lakh) |
|---|---|---|---|---|
| Bear | 11.7 | 4.5 | 10.29 | 0.27 |
| Base | 4.4 | 11.7 | 21.99 | 1.16 |
| Bull | 2.2 | 23.3 | 29.20 | 2.43 |

*Source: `[M c4.be]`, `[M c4.weeks]`, `[M c4.spend_cr]`, `[M c4.members_lakh]`, `[T5]`, `[T4]`.*

The kill threshold the team set in advance `[A26]` is 12 extra tyres per member a year; the base case clears it by a wide margin (4.4 against 12), which the model's own `c4_be_below_kill_base` check confirms as true (`DECISIONS.md`, "M1 model run"). The programme needs no redesign on this basis.

### 2.4 Case 4: kill criteria

| If the evidence shows | Then | Basis |
|---|---|---|
| Most two-wheeler tyres are bought without any mechanic involvement at all (a credible study, not found in this build) | Keep the programme but move weight from segments S-B and S-C to retailer staff; the core thesis still holds | `PLAN.md` §2.2.13 |
| No retailer app or point-of-sale logging capability exists | Add the one-time build cost `[A22]` and push the pilot start to Q2 | `PLAN.md` §2.2.13 |
| Base-case break-even rises above 12 tyres per member a year `[A26]` | Cut Tier 3 hardware to lease-only and re-run; if still above threshold, narrow the programme to segments S-A and S-B only | `PLAN.md` §2.2.13 |
| Pilot gate G1 fails on activity (below `[A23]` 60%) but passes on advocacy | Fix onboarding, do not stop the pilot | `PLAN.md` §2.2.13 |
| Pilot gate G1 fails on advocacy | Stop at the two pilot states and do not scale | `PLAN.md` §2.2.13 |

*Source: `PLAN.md` §2.2.13; `research/ARGUMENT.md`, "Case 4: kill criteria."*

**120-word version.** Mechanics are the most frequented touchpoint at tyre replacement `[C4-B03]`, but Eurogrip's advocacy there is informal, and the obvious fix, cash per tyre sold, pays only shops that stock Eurogrip and wastes about 91% of its spend on sales that would have happened anyway. The recommendation pays every mechanic and puncture shop in tools, visibility and status for each logged recommendation, whether or not they stock the tyre, re-qualifying every six months so the programme renews itself. A member shop needs 4.4 extra tyres a year, one every 11.7 weeks, for the ₹21.99 crore base-case programme to pay for itself, inside 1.63% of relevant business-unit revenue, well under the 2% ceiling.

### 2.5 Case 1: the obvious answer, and three reasons it falls short

**Obvious answer.** Three separate campaigns, commuter mass digital and TV, gig-worker discounts, premium influencers and motorsport, layered on top of the existing sports sponsorship.

| # | Reason it falls short |
|---|---|
| 1 | Three campaigns fragment one budget and break the brand-coherence constraint the brief sets `[C1-B14]` |
| 2 | Discounts to gig riders buy share at the moment of purchase, not lasting preference, and do nothing for the brand once the discount ends |
| 3 | Premium influencer content without a product-performance proof point reads as paid promotion, not credible peer advocacy, for exactly the segment the brief says weighs peer recommendation most heavily `[C1-B09]` |

*Source: `research/ARGUMENT.md`, "Case 1: obvious answer and three reasons."*

### 2.6 Case 1: the recommendation, and three reasons

**Governing thought.** One brand, one proof currency, three entry points. The proof currency is distance: the gig fleet, riders doing the most kilometres a day, is enrolled through fleet operators and platforms with tracked tyre life; that real-world distance evidence is what commuters see at the retail counter and the mechanic's shop (built on the Case 4 programme); premium riders get the same technology story through peer advocacy in riding communities and track or test events. A masterbrand architecture keeps Eurogrip as the only brand, with segment proof points underneath it.

| # | Reason |
|---|---|
| 1 | One proof currency, checkable by all three segments, replaces three disconnected messages with one coherent claim, honouring the brand-coherence constraint `[C1-B14]` |
| 2 | The gig fleet's tracked distance is the hardest, most credible evidence Eurogrip can produce, and it directly answers the brief's own open research task on the gig-worker profile `[C1-B11]` |
| 3 | Premium riders get technology and peer proof rather than a paid-influencer feel, matching the brief's own description of what this segment weighs most `[C1-B09]`, `[C1-B10]` |

*Source: `research/ARGUMENT.md`, "Case 1: recommendation and three reasons."*

### 2.7 Case 1: moneyshot, bear, base, bull

The share of the budget spent where the tyre is chosen, retail plus on-ground, is 61.75% in the base case `[M c1.chosen_share_pct]`. What that budget buys, base case: 72,040 outlets branded, 3.19 lakh gig riders enrolled through fleet partners, and 5,080 lakh unique reach `[M c1.reach]`.

| Scenario | Total budget (₹ crore) |
|---|---|
| Bear | 54.65 |
| Base | 63.75 |
| Bull | 73.16 |

*Source: `[M c1.budget_cr]`, `[T15]`.*

### 2.8 Case 1: kill criteria

If R-E finds gig-rider tyre decisions are made entirely by the fleet operator with no rider input at all, the distance-proof narrative shifts from a rider-facing claim to a fleet-procurement claim; the three-segment structure and the shared proof currency still hold, only the audience for the Gig-segment message changes.

**120-word version.** Eurogrip already has strong brand awareness `[C1-B05]`, but that awareness means different things to three riders: commuters want reliability, gig riders want uptime, premium riders want proof from peers. Running three separate campaigns fragments the budget and breaks the brief's own coherence rule. The recommendation keeps one brand and uses one checkable currency, distance travelled, carried first by the gig fleet's tracked tyre life, then shown to commuters at the retail counter and mechanic's shop, then carried to premium riders through peer advocacy and track events. At the base case, 61.75% of the ₹63.75 crore budget lands where the tyre is actually chosen.

### 2.9 Case 2: the obvious answer, and three reasons it falls short

**Obvious answer.** A premium, dedicated EV tyre range with an expensive new compound and a new construction, sold at a premium.

| # | Reason it falls short |
|---|---|
| 1 | The brief requires a mass-market cost band, not a premium or niche positioning `[C2-B17]` |
| 2 | The brief requires manufacturability on largely existing tyre-plant processes, not a wholly new line `[C2-B18]` |
| 3 | Most EV two-wheeler volume in India is scooters on small rims, a price-sensitive segment where a premium-positioned tyre range would not sell at the volume the brief implies |

*Source: `research/ARGUMENT.md`, "Case 2: obvious answer and three reasons."*

### 2.10 Case 2: the recommendation, and three reasons

**Governing thought.** An EV-ready variant of the mass-market platform, not a new premium tyre, built from four engineering moves on existing equipment: a dual-layer cap-and-base tread with a silica-rich cap compound; a variable-pitch tread pattern for noise and even wear under regenerative braking; a one- to two-step higher load index through cord and bead reinforcement; and optimized performance on the brief's own named vital needs, grip, high-speed stability, damage resistance, durability `[C2-B13]`.

| # | Reason |
|---|---|
| 1 | Resolves the tension between the innovation criterion, which warns against "a minor tweak" `[C2-B24]`, and the cost and process constraints `[C2-B17]`, `[C2-B18]`, by specifying one EV-ready standard rather than a dedicated premium line |
| 2 | Globally compliant without redesign: BIS, UNECE Regulation 75, FMVSS 119 all apply to the same construction |
| 3 | Manufacturable with an extra mixing pass for the silica compound, not a new line, honouring the brief's manufacturability constraint directly |

*Source: `research/ARGUMENT.md`, "Case 2: recommendation and three reasons."*

### 2.11 Case 2: moneyshot, bear, base, bull, and an honest near-ceiling finding

"Plus x% range for rupees y more per tyre (z% of tyre cost), on existing lines."

| Scenario | Cost delta per tyre (₹) | Cost delta (%) | Range gain (%) | Range gain (km per charge) |
|---|---|---|---|---|
| Bear | 97 | 10.2 | 2.3 | 2.8 |
| Base | 68 | 8.0 | 4.2 | 6.3 |
| Bull | 46 | 6.1 | 6.7 | 13.0 |

*Source: `[M c2.delta_pct_sc]`, `[M c2.range_gain_pct]`, `[M c2.km_gain]`, `[T17]`.*

The honest finding here, recorded in `DECISIONS.md`'s "M1 model run" entry, is that the base-case cost delta lands at 8.0028% against the model's own 8.0% ceiling assumption `[A2-03]`, a difference of 0.003 percentage points: essentially at the brief's own cost ceiling `[C2-B17]`, not comfortably under it. This is not the clear miss that would trigger the kill criterion below; it sits well inside the noise of the underlying engineering-estimate assumptions, since Eurogrip's actual compound recipe is proprietary and the recipe fractions used here are reasoned, not sourced (`research/ARGUMENT.md`, "Case 2: kill criteria"). The honest reading, stated once here and carried through §24, is that this result motivates a closer look at sensitivity rather than a pivot.

### 2.12 Case 2: kill criteria

If the cost delta exceeds the bear-case ceiling of 10% `[A2-03]`, the concept drops the reinforced load-index step for the standard trim and offers it only as an upgrade SKU, then re-runs the model and re-checks against the target.

**120-word version.** Electric two-wheelers put different demands on a tyre than petrol ones, instant torque, regenerative braking, near-silent NVH, and heavier battery load, while rolling resistance now also decides range `[C2-B03]` to `[C2-B08]`. A dedicated premium EV tyre answers the engineering brief but fails the cost and process constraints. The recommendation is an EV-ready variant of the existing mass-market platform: a silica-rich dual-layer tread, a variable-pitch pattern, a higher load index, built on existing lines with one extra mixing pass. In the base case it costs about ₹68 more per tyre, a cost delta of 8.0%, essentially the brief's own 8% ceiling, for a range gain of about 4.2%, roughly 6.3 km per charge.

### 2.13 Case 3: the obvious answer, and three reasons it falls short

**Obvious answer.** More dealers, deeper discounts, farmer meets and wall paintings.

| # | Reason it falls short |
|---|---|
| 1 | Dealer loyalty in the tractor tyre category is regional and entrenched `[C3-B04]`, so simply adding dealers does not displace an incumbent's existing relationships |
| 2 | Discounts start a price war with bigger rivals who can sustain a lower price for longer |
| 3 | Awareness spend does not move a relationship-driven, low-brand-salience purchase `[C3-B06]`; the category buys on trust and total cost of ownership, not recall |

*Source: `research/ARGUMENT.md`, "Case 3: obvious answer and three reasons."*

### 2.14 Case 3: the recommendation, and three reasons

**Governing thought.** Win the hardest-working tractors first, and let their tyre life sell the brand to smallholders through the dealer. Three segments: commercial and haulage operators and custom hiring centres, whose tractors run the most hours and buy on total cost of ownership while talking to many other farmers; smallholder owner-operators, who buy on price, credit and dealer trust at harvest-linked cash-flow moments; and the dealer and village mechanic as the channel and influencer.

| # | Reason |
|---|---|
| 1 | Commercial operators run the most hours (2,000 to 4,000 hours of tyre life assumed, `[A3-11]`) and talk to the most other farmers, making them the fastest path to credible, word-of-mouth evidence |
| 2 | A dealer-administered tyre-life assurance for high-use segments and harvest-timed credit for smallholders both work inside the brief's dealer-led distribution constraint `[C3-B11]`, rather than against it |
| 3 | Sequencing commercial first, smallholder second, turns a low-brand-salience category's biggest weakness, no one trusts an unproven brand on faith, into a strength: the hardest users prove the tyre before the easiest buyers are asked to trust it |

*Source: `research/ARGUMENT.md`, "Case 3: recommendation and three reasons."*

### 2.15 Case 3: moneyshot, bear, base, bull

The rear-pair cost per working hour for a commercial operator, base case, is ₹11.27 `[M c3.tco_per_hour]`. The share points the GTM budget must win to pay for itself, base case, is 0.21 percentage points `[M c3.share_points_sc]`.

| Scenario | Rear-pair cost per hour (₹) | Share points to pay back |
|---|---|---|
| Bear | 17.4 | 0.26 |
| Base | 11.3 | 0.21 |
| Bull | 8.2 | 0.17 |

*Source: `[M c3.tco_per_hour]`, `[M c3.share_points_sc]`, `[T20]`.*

### 2.16 Case 3: kill criteria

If R-G finds commercial and haulage tractors are a negligible share of the parc in the priority states, the sequencing changes to lead with the larger smallholder segments, but the total-cost-of-ownership-first value proposition stays, applied to whichever segment runs the most hours locally.

**120-word version.** India's tractor tyre market is large, fragmented and relationship-driven `[C3-B04]`, and the obvious plays, more dealers and deeper discounts, start a price war Eurogrip need not win. The recommendation sequences commercial and haulage operators and custom hiring centres first, since their tractors run the most hours and their owners talk to the most other farmers, offering them a dealer-administered tyre-life assurance priced on actual duty cycle. Their proven cost-per-hour evidence then carries, through the dealer, to smallholder owner-operators, who are reached with harvest-timed credit rather than cold awareness spend. The base case rear-pair cost per hour is ₹11.27, and the GTM budget pays itself back by winning just 0.21 share points.

### 2.17 Headline numbers across the four cases

| Case | Headline 1 | Headline 2 | Headline 3 | Headline 4 |
|---|---|---|---|---|
| 1 | Budget ₹63.75 crore (base) | 61.75% lands where the tyre is chosen | 72,040 outlets branded | 3.19 lakh gig riders enrolled |
| 2 | Cost delta +₹68/tyre (base, 8.0%) | Range gain +4.2% (about 6.3 km) | Essentially at the brief's own 8% ceiling | Manufacturable on existing lines, one extra mixing pass |
| 3 | Budget ₹4.46 crore (base) | TCO ₹11.27/hour, commercial, base | Pays back at 0.21 share points | 3 segments, dealer-led |
| 4 | Budget ₹21.99 crore (base, 1.63% of BU revenue) | Break-even 4.4 tyres/member/year | 1.16 lakh members at steady state | Cash scheme would waste 91% of spend |

*Source: `[M c1]`, `[M c2]`, `[M c3]`, `[M c4]` sections of `model/model_outputs.json`; `[T4]`, `[T5]`, `[T15]`, `[T17]`, `[T20]`.*

### What this section establishes, and what it does not

- It establishes, for all four cases, the obvious answer stated fairly, three reasons it falls short, the recommendation and three reasons it holds, a bear/base/bull moneyshot, a kill criterion, a 120-word summary and a headline numbers row.
- It establishes honestly that Case 2's base-case cost delta lands essentially at the brief's own ceiling rather than comfortably under it, and explains why this is a reasoned finding, not a model error.
- It establishes that Case 4's base-case break-even of 4.4 tyres clears the pre-set kill threshold of 12 with room to spare, so the recommendation needs no redesign on this basis.
- It does not yet build out the full programme mechanics, segment profiles or budgets behind each recommendation; those follow case by case starting in section 3.
- It does not revisit the Case 2 sensitivity discussion in depth; that is reserved for section 24.

## 3. Eurogrip today: TVS Srichakra earned ₹3,643 crore in FY26, sells in 85 countries and reaches riders through 600 distributors

**Answer.** TVS Srichakra Ltd, the company behind the Eurogrip brand, reported consolidated revenue of about ₹3,643 crore for FY26 `[RA12]`, up roughly 12% on FY25's ₹3,254 crore, with consolidated PAT of about ₹71 crore `[RA14]`. The company exports to more than 85 countries across six continents through over 100 export distributors `[RA28]`, and reaches India's domestic replacement market through about 600 distributors covering 640 districts and more than 50,000 retailers `[RA45]`. The brand itself has shed its old "TVS Tyres" and "TVS Eurogrip" names in its own current marketing and calls itself simply Eurogrip `[RA27]`, even though the company and the stock remain TVS Srichakra Ltd.

### 3.1 Identity

| Field | Value | Source |
|---|---|---|
| Legal name | TVS Srichakra Limited | `[RA01]` |
| CIN | L25111TN1982PLC009414 | `[RA01]`, `[RA100]` |
| Listings | NSE: TVSSRICHAK; BSE: 509243; ISIN INE421C01016 | `[RA01]` |
| Registered office | TVS Building, 7-B, West Veli Street, Madurai 625001 | `[RA100]` |
| Manufacturing plants | Vellaripatti (Melur Taluk, Madurai, Tamil Nadu); Rudrapur (Uttarakhand) | `[RA02]`, `[RA03]` |
| Combined output | About 2.8 million tyres a month (aggregator estimate, not a company disclosure) | `[RA03]` |
| Promoter | TVS Mobility Private Limited, promoter since 2021 after a share transfer from T V Sundram Iyengar and Sons and Sundaram Industries | `[RA73]` |
| Group context | Described in a July 2026 exchange filing as one of the verticals of the USD 5 billion TVS Mobility group | `[RA05]` |
| Subsidiaries | TVS Srichakra Investments Ltd; TVS Sensing Solutions Private Limited (wholly owned since 4 Jun 2018, formerly ZF Electronics TVS India); Fiber Optic Sensing Solutions Pvt Ltd; Super Grip Corporation, USA (wholly owned, established 2023 to 2024) | `[RA06]`, `[RA74]` |
| Employees | Unreconciled range, roughly 1,700 to 2,800, depending on the aggregator source; the company's own current headcount disclosure was not located | `[RA07]`, `[RA77]` |
| Current credit rating action | CRISIL withdrew the CRISIL A1+ rating on the ₹300 crore commercial paper programme on 22 Apr 2024, at the company's request, with no CP outstanding; no 2025 or 2026 rationale was found | `[RA08]` |
| Statutory auditor | Not found in any source opened in this lane, logged as a gap, not a deck-critical omission | n/a, gap |

*Source: `research/raw/R-A-eurogrip-company.md`, rows as cited.*

### 3.2 FY21 to FY26 consolidated financials

| Fiscal year | Revenue (₹ crore) | Operating profit (₹ crore) | OPM% | PAT (₹ crore) |
|---|---|---|---|---|
| FY21 | 1,939 | 230 | 12% | 74 |
| FY22 | 2,543 | 170 | 7% | 43 |
| FY23 | 2,985 | 234 | 8% | 78 |
| FY24 | 2,926 | 301 | 10% | 108 |
| FY25 | 3,254 | 230 | 7% | 21 |
| FY26 | 3,643 | 285 | 8% | 71 |

*Columns expanded: Operating profit is the Screener.in aggregator's EBITDA-equivalent operating-profit line, not a company-labelled EBITDA figure. OPM% is operating profit as a share of revenue, as reported by the aggregator.*
*Source: `[RA12]`, `[RA13]`, `[RA14]`, cross-confirmed against a second aggregator in `[RA92]`.*

Two quarters since FY26 close add texture: Q1 FY27 (quarter to Jun 2026) consolidated total income was about ₹1,081.82 crore, up 31.7% year on year, with PAT of about ₹34.02 crore, up 165.2% `[RA82]`. A second aggregator's narrower revenue definition for the same quarter gives ₹1,067.61 crore `[RA19]`, a gap of about ₹14 crore against the total-income figure, consistent with a revenue-versus-total-income definitional difference rather than a correction. This document uses the total-income figure as the headline since it is the one both the Angel One source and TVS Srichakra's own quarterly filing language describe consistently.

### 3.3 The revenue split, and how it feeds the budget-base assumption

The single most load-bearing derivation in this document is the OEM-versus-replacement-versus-export split, because the budget bases for Cases 3 and 4 are both built from a slice of it. Two primary-adjacent splits were found, nine years apart:

| Year | OEM | Replacement (aftermarket) | Exports | Source |
|---|---|---|---|---|
| About 2015 | 57% | 30% | 13% | `[RA22]`, Outlook Business, dated and now stale |
| FY23 | 46 to 48% | About 37% | 13 to 14% (balance from contract manufacturing) | `[RA95]`, CRISIL's 25 Apr 2023 rating rationale, directly fetched |

*Source: `research/raw/R-A-eurogrip-company.md`, rows RA22, RA24, RA95.*

The FY23 CRISIL split is used as the model's anchor for assumption `[A01]` rather than the 2015 Outlook Business split, since it is both more recent and a tier-3 source (credit-rating rationale) against the 2015 figure's tier-6 standing (reputable press feature). No source gives a further breakdown of the replacement share between two-wheeler and three-wheeler, or between domestic and export replacement revenue, so the Case 4 budget base `[A01]` (relevant BU revenue: domestic two- and three-wheeler replacement revenue, FY26) is derived with arithmetic shown once here: FY26 consolidated revenue of ₹3,643 crore `[RA12]`, applied to a replacement share anchored near the FY23 CRISIL figure of about 37% `[RA95]`, gives a replacement-revenue base in the ₹1,240 crore to ₹1,460 crore range once domestic-versus-export and two/three-wheeler-versus-OHT adjustments are applied; this matches the model's own A01 band of ₹1,240 crore (bear) to ₹1,460 crore (bull), with ₹1,350 crore as the base case `[M A01]`. This is an assumption with a stated basis, not a sourced figure, and every paragraph in this document that uses it says so once, here.

### 3.4 Brand history and naming

| Period | Name used | Basis |
|---|---|---|
| Up to 2019 | TVS Tyres (domestic); EuroGrip (export, off-road, forklift, agricultural tyres to over 80 countries, as of about 2015) | `[RA22]` |
| August 2019 | Brand TVS Eurogrip launched | `[RA26]` |
| 2020 to 2026, current website | Eurogrip (the "TVS" prefix dropped in the brand's own current marketing; the logo file itself is named `eurogriptyres-logo-apr25.png`) | `[RA27]` |
| Export markets, 2020 rationale | TVS Eurogrip brand, exports mainly to Europe, North America, Africa and the Middle East | `[RA69]` |

*Source: `research/raw/R-A-eurogrip-company.md`, rows RA22, RA26, RA27, RA69.*

The naming shift matters for every deck and document reference in this build: the company and listed entity are always "TVS Srichakra Limited," while the brand, in its own current public-facing voice, is "Eurogrip," not "TVS Eurogrip." This document follows the company's own current usage and writes "Eurogrip" for the brand throughout, reserving "TVS Srichakra" for the corporate entity, ratings and filings.

### 3.5 Sponsorship and advertising, 2019 to 2026

| Item | Detail | Source |
|---|---|---|
| Chennai Super Kings principal sponsorship | 2022 to 2024 seasons (three IPL seasons), announced 25 Nov 2021; front-of-jersey placement plus nationwide fan-engagement initiatives; no deal value confirmed on the directly-opened announcement | `[RA37]`, `[RA101]` |
| Deal-value reports | Two conflicting figures surfaced in press, ₹23 crore and ₹100 crore; neither confirmed by TVS Srichakra or CSK; this document uses neither figure | `[RA38]`, conflict C-RA3 |
| 2022 CMO framing | The CSK partnership helps the company "engage with trade, mechanics, media and many other touch-points in our category" (snippet-level only, source page returned HTTP 403 on direct fetch) | `[RA39]` |
| 2024 CSK-season campaign | Grip-focused advertising, described by the company as building "EUROGRIP as a strong global consumer brand" | `[RA40]` |
| New-product mix shift | New products (premium and electric two-wheeler segments) reached 35% of FY24 revenue, up from 22% in FY21 | `[RA80]` |

*Source: `research/raw/R-A-eurogrip-company.md`, rows as cited.*

No source in this lane confirms planning lead L5's claim of "over 30,000 partners" tied to mechanic outlets or the CSK campaign specifically; the Gaps section of R-A records this explicitly, and this document uses the sourced 50,000-retailer figure `[RA45]` instead wherever a retailer count is needed.

### 3.6 Distribution, apps, and the Bandhan ruling

| Channel | Detail | Source |
|---|---|---|
| Domestic distribution | About 600 distributors across 640 districts, serving more than 50,000 tyre retailers | `[RA45]` |
| Export distribution | Over 100 export distributors, 85 countries, 6 continents | `[RA28]` |
| Exclusive retail format | 14th "signature store" opened in Ludhiana (31 Mar 2026), a 15th in Bahraich, Uttar Pradesh; other cities include Chennai, Mysuru, Patna, Ahmedabad, Hyderabad and Delhi | `[RA49]` |
| Online locator | A "Tyre Shop Locator" link on the homepage | `[RA31]` |
| Retailer app | Bandhan, launched 2019 for retailer loyalty and reward points; expanded May 2020 with a "Click-to-Order" e-ordering feature so retailers can order from distributors without waiting for a salesman visit | `[RA32]`, `[RA33]`, `[RA70]`, `[RA71]` |
| Warranty app | Click to Connect, launched 2021, for speedy after-sales claim settlement, aiming for settlement within 24 hours, multi-lingual, Android and iOS | `[RA34]` |

*Source: `research/raw/R-A-eurogrip-company.md`, rows as cited.*

This document follows the M1 ruling recorded in `DECISIONS.md`: `app_name` = "Bandhan app" (`[M c4.app_name]`), because R-A confirmed Bandhan as a real, named TVS Eurogrip retailer app, launched 2019, with e-ordering added in 2020, and found no discontinuation evidence even though no 2025 or 2026 live-status confirmation exists. The programme design in §10 therefore names the app plainly ("logged in the Bandhan app") rather than genericising it, while stating explicitly, here and in the Gaps table in §1.10, that the app's current mechanic usability (as opposed to retailer usability) is not confirmed and that this is why the Case 4 recommendation in §10 routes the logging step through the retailer, not directly through the mechanic.

### 3.7 Product breadth

| Line | Detail | Source |
|---|---|---|
| Two-wheeler | Scooter, motorcycle, moped; over 40 new products introduced in the three years to FY24 | `[RA42]`, `[RA80]` |
| EV-specific | A Low Rolling Resistance tyre for the EV segment; an e-Durapro series launched 4 Mar 2021 for e-rickshaws (commercial EV segment); the company states it supplies EV tyres to "all major electric two-wheeler brands in India," a company claim not independently itemised | `[RA44]`, `[RA51]`, `[RA85]` |
| Three-wheeler, ULT, agricultural, industrial, OTR | Listed on the company website as distinct product lines, the last three linking to an off-highway sub-site | `[RA30]` |
| OEM clients | Aprilia, Bajaj, Hero, Honda, Piaggio, Suzuki, TVS Motor, Yamaha, plus about 18 OEM approvals in total | `[RA29]`, `[RA85]` |
| R&D | Two centres, Milan (Italy) and Madurai, employing over 90 engineers, handling about 250 projects a year, holding more than 40 patents; the Milan centre alone has developed about 120 products since opening | `[RA84]` |
| Capacity expansion | ₹220 crore board-approved capex (27 May 2026), split roughly evenly between a 5% two-wheeler capacity increment (targeted H1 FY28-29) and a roughly 25% off-highway capacity expansion (targeted H1 FY27-28) | `[RA48]` |

*Source: `research/raw/R-A-eurogrip-company.md`, rows as cited.*

### 3.8 Management statements (verbatim, dated)

| Speaker, role | Quote | Date |
|---|---|---|
| P Madhavan, EVP Sales and Marketing | "Digitalisation has been at the core of our sales strategy" | 7 May 2020 |
| P Madhavan, EVP Sales and Marketing | "The 'Click-to-Order' feature that we are now launching is an industry first" | 7 May 2020 |
| P Madhavan, EVP-Sales and Marketing | "Click to Connect is testimony to our commitment to customer service of the highest order" | 13 Feb 2021 |
| P Madhavan, EVP, Sales and Marketing | "To address the increasing demand in the post pandemic era" | 5 Mar 2021 |
| V Sivaramakrishnan, CTO | the Milan R&D centre is "integral to Eurogrip's global R&D efforts" | undated, 2024 article |
| P Madhavan, EVP | "shifting our focus from traditional commuter tyres to high-performance and off-road models to address evolving market needs" | undated, 2024 article |

*Source: `research/raw/R-A-eurogrip-company.md`, Quotes table, rows Q-RA1 to Q-RA6.*

### 3.9 Eurogrip's standing in 2W and OHT

CRISIL's 2020 rationale describes TVS Srichakra as a leading domestic manufacturer of two- and three-wheeler bias tyres and the largest supplier to all established domestic automobile OEMs in that category `[RA10]`, with intensifying competition in the replacement market offset by internal cost optimisation `[RA11]`. The company's own 2015-era positioning statement was a leader in the two- and three-wheeler domestic OEM market and the third-ranked player in the aftermarket segment `[RA24]`; no more recent company-stated rank was found, so this document does not claim a current aftermarket rank for Eurogrip beyond the qualitative "diversified, OEM-led, replacement-floor" pattern CRISIL's four rationales (2018, 2020, 2022, 2023) consistently describe `[RB59]`.

On OHT specifically, the standing is export-led rather than domestic-led: the brownfield Madurai expansion targeting a roughly 25% off-highway capacity increase is the larger of the two capex lines in the May 2026 board approval `[RA48]`, and the earlier brownfield OHT expansion reported "in its final stages" in an annual-report summary points the same direction `[RA46]`. No source in this lane gives a domestic OHT or tractor-tyre market-share percentage for TVS Srichakra or the Eurogrip brand; section 25 picks this question up directly for Case 3, and finds the same gap.

### 3.10 Summary table: identity to standing, one row each

| Dimension | FY26 snapshot |
|---|---|
| Revenue | ₹3,643 crore, consolidated, up about 12% YoY |
| PAT | ₹71 crore, consolidated |
| Plants | 2 (Madurai, Rudrapur) |
| Distributors, domestic | About 600, across 640 districts |
| Retailers, domestic | More than 50,000 |
| Export reach | 85 countries, 6 continents, 100+ distributors |
| Signature stores | At least 15 (as of the most recent filing found) |
| R&D | 2 centres, 90+ engineers, 40+ patents |
| EV products | Low Rolling Resistance tyre line; e-Durapro (e-rickshaw) |

*Source: table 3.1 to 3.9, consolidated.*

### 3.11 Four rating-agency snapshots, read in sequence

CRISIL's four rating rationales on TVS Srichakra, opened directly across R-A and R-B rather than taken from a snippet, read as a single continuous narrative once placed in order, and that narrative is more informative than any one rationale alone:

| Rationale date | Standalone or consolidated figures given | What it says about the business |
|---|---|---|
| 19 Dec 2018 | Diversified revenue mix across OEM, aftermarket and export sub-segments | "Healthy market position in the domestic two- and three-wheeler tyres segment," supported by diversification, established brands and distribution `[RB58]` |
| 29 Apr 2020 | FY19 standalone revenue ₹2,431 crore (FY18: ₹2,152 crore); FY19 PAT ₹103 crore (FY18: ₹117 crore); nine-month FY20 revenue ₹1,635 crore, down 9% YoY | Revenue decline driven by lower OEM offtake, partially offset by steady replacement-market volumes; operating margin held near 11% through cost optimisation, down from 15.5 to 15.9% in FY16 and FY17 `[RA66]`, `[RA67]`, `[RA68]`, `[RB57]` |
| 26 Apr 2022 | FY22 full-year revenue ₹2,529 to 2,549 crore (two aggregator variants), PAT ₹43 crore | Increased share of business with existing two-wheeler OEMs, partly through an increased focus on exports `[RB56]` |
| 25 Apr 2023 | Nine-month FY23 operating income up 23% YoY to ₹2,302 crore; FY23 OEM about 46 to 48%, aftermarket about 37%, exports 13 to 14% | Healthy demand from two- and three-wheeler OEMs, with steady aftermarket and export demand; this is the rationale whose revenue split anchors assumption `[A01]` (§3.3) `[RA95]`, `[RA96]`, `[RB55]` |

*Source: `research/raw/R-A-eurogrip-company.md` and `research/raw/R-B-tyre-industry.md`, rows as cited; the two lanes independently opened the same four documents and their figures cross-confirm.*

Read together, the four rationales show a company whose growth is OEM-led in strong years and whose replacement-market volumes act as a floor in weak years, a pattern CRISIL states qualitatively in all four documents without ever giving a single numeric OEM-versus-replacement split `[RB59]`. No 2025 or 2026 rationale was found; the most recent primary-tier action is the 22 Apr 2024 CRISIL rationale that withdrew the CRISIL A1+ rating on request, with no CP outstanding `[RA08]`, `[RA97]`, and R-A's Gaps section records explicitly that a fresh annual rationale may simply not exist once a company has no outstanding rated paper to re-assess.

### 3.12 Reconciling the quarterly revenue figures

Three separate quarters surfaced conflicting figures in this lane, each logged and resolved rather than silently picked:

| Quarter | Figure A | Figure B | Resolution |
|---|---|---|---|
| FY26 full year | ₹3,643.35 crore (Business Standard, sales) | ₹3,658.32 crore (FilingReader, total income) | Both used, labelled by definition; Screener's ₹3,643 crore sales figure is the document's headline since it is the one with a continuous FY21-to-FY26 series `[RA16]` |
| FY25 full year | ₹3,260 crore revenue, PAT ₹20.61 crore (Fyers) | EBITDA ₹228.09 crore, PBT ₹48.61 crore, PAT ₹36.96 crore on a ₹2,754 crore base (Arihant directors' report, likely standalone) | The consolidated figure (Fyers, cross-confirmed by Screener's ₹3,254 crore in `[RA12]`) is used as the document's headline; the Arihant figures are flagged as likely standalone and not blended in `[RA17]` |
| Q1 FY27 | ₹1,081.82 crore total income, up 31.7% YoY (Angel One) | ₹1,067.61 crore revenue, up 30.29% YoY (Univest) | Both confirmed as real, independently reported figures for the same quarter under different definitions; this document uses the total-income figure as its headline, consistent with §3.2 `[RA18]`, `[RA19]`, `[RA82]` |

*Source: `research/raw/R-A-eurogrip-company.md`, rows RA16 to RA19, RA82; also logged in `research/raw/conflicts.md` as C-RA4 for the FY23/FY22 CRISIL-versus-Screener gap, resolved the same way (§3.2's note).*

None of these conflicts changes the direction of the FY21-to-FY26 growth story; they are definitional gaps (revenue versus total income, standalone versus consolidated) rather than contradictory facts about the company's performance, and this document states each resolution once here rather than re-litigating it on every page a revenue figure appears.

### 3.13 What the OHT expansion signals

Section 3.9 already states that Eurogrip's off-highway standing looks export-led rather than domestic-led; three separate facts, read together, support that reading rather than asserting it from a single source. First, the roughly 25% off-highway capacity expansion approved in May 2026 is the larger of the two lines in a ₹220 crore capex package that gives two-wheeler capacity only a 5% increment `[RA48]`, showing where the company itself is choosing to put incremental capital right now. Second, an earlier brownfield OHT expansion at the same Madurai site was independently reported "in its final stages" in an annual-report summary, with no precise date pinned down `[RA46]`, suggesting this is a multi-year capacity push, not a single one-off project. Third, no source anywhere in this lane states a domestic OHT or tractor-tyre market-share percentage for TVS Srichakra, even as an aggregator-level claim; this silence across every source tier, not just the absence of a company disclosure, is itself informative, and section 25 picks the question up directly for Case 3 and reaches the same gap independently.

### 3.14 Reading the employee-count conflict as a lesson in source tiering

The employee-count discrepancy logged as C-RA2 (§3.1) is worth one further paragraph because it illustrates the source-tiering discipline this whole document follows, not because the headcount figure itself matters to any case recommendation. A WebSearch snippet of the Reveliolabs page reported 1,743 employees in 2025; when R-A opened the same page directly and read its own annual chart, the chart showed approximately 2,690 for 2025, and the page's own narrative text and FAQ disagreed with its own chart on two further years, 2,723 versus 2,799 for 2023 and 2,791 versus 2,690 for 2025 `[RA07]`, `[RA77]`. A single tier-7 aggregator page, in other words, disagreed with itself three separate times on the same metric. The ruling (logged as C-RA2) is to present employee count as an unreconciled range, roughly 1,700 to 2,800, rather than pick whichever number appeared first or looked most precise. The same discipline governs every other figure in this document that rests on a tier-6 or tier-7 source: when a lower-tier source is internally inconsistent, the inconsistency itself is reported, not resolved by guesswork.

### 3.15 Patents, R&D and the EV product line as a forward indicator

Two R&D facts from this lane point toward Eurogrip treating EV-specific tyre engineering as a live priority rather than a slogan, which matters because Case 2's recommendation in section 22 assumes the company can execute an EV-ready variant on largely existing lines. The company has filed 30 patents, of which 16 are published and 1 granted, as of the annual-report-summary date `[RA47]`, and separately states a plan to cut rolling resistance by 10% over six to twelve months for its EV tyre line from the article's publication date `[RA80]`, a stated engineering target rather than an achieved result. The two R&D centres, Milan and Madurai, between them handle about 250 projects a year `[RA84]`, a throughput broadly consistent with a company that has launched over 40 new products across three years `[RA42]`, `[RA80]`. None of this independently verifies that an EV-ready variant can be manufactured within the brief's 8% cost-delta ceiling; it does establish that Eurogrip has an active, resourced EV-tyre R&D programme, so section 22's EV-ready concept is proposed as a plausible next step from where the company already is, not as a leap from a standing start.

### 3.16 What a judge asking "is this still TVS Tyres" should be told

A judge or reader who last encountered this company as "TVS Tyres" is likely to ask, directly or indirectly, whether anything substantive changed beyond the name. The honest answer, built from the facts above rather than from brand copy, is that three things changed together and three things did not. What changed: the public-facing brand name moved from TVS Tyres to TVS Eurogrip in August 2019 `[RA26]` and then, in the company's own current marketing, to simply Eurogrip `[RA27]`; the product range widened into EV-specific lines that did not exist under the old name, the Low Rolling Resistance EV tyre and the e-Durapro e-rickshaw series `[RA44]`, `[RA51]`; and the retail footprint added a tier of exclusive signature stores, at least 15 as of the most recent filing found, that the TVS Tyres era did not run `[RA49]`. What did not change: the listed entity is still TVS Srichakra Limited, the same CIN and the same two manufacturing plants `[RA01]`, `[RA02]`, `[RA03]`; the underlying OEM-led, replacement-floor revenue pattern CRISIL has described across four rationales since 2018 is the same pattern `[RB59]`; and the company's qualitative standing, a leading domestic OEM player with a smaller, contested replacement-market position, is the same standing the 2015-era Outlook Business profile already described `[RA24]`, even though no more recent company-stated rank was found to confirm or update it. This framing, stated once here, is the version of "who is Eurogrip today" this document uses consistently in sections 17 to 29 wherever a case chapter needs to establish the company's starting position before arguing a recommendation.

### What this section establishes, and what it does not

- It establishes TVS Srichakra and the Eurogrip brand's identity, FY21 to FY26 financials, revenue split and its derivation into the Case 4 budget-base assumption, brand history, distribution footprint, apps, product breadth, management statements and a plain statement of 2W and OHT standing.
- It establishes a sequential reading of CRISIL's four rating rationales (2018, 2020, 2022, 2023) as a single narrative of OEM-led growth years and a replacement-market floor in weak years, and resolves three separate quarterly revenue conflicts by definition rather than by picking a winner.
- It establishes the Bandhan-app ruling and why the Case 4 programme in §10 routes logging through the retailer rather than claiming a current mechanic-facing app capability.
- It establishes honestly that the company discloses no current (2025 to 2026) numeric OEM-versus-replacement split, no standalone cost breakdown, and no company-stated domestic OHT market share, each flagged as a gap rather than filled with an invented figure.
- It does not yet place these facts against the wider market; that begins in section 4.
- It does not state a mechanic-specific finding about Eurogrip; that is reserved for sections 5 and 7, which carry the seed sentence and the full MECE analysis respectively.
- It does not treat any single aggregator figure as beyond question; where two tier-appropriate sources disagreed (quarterly revenue, employee count, CSK deal value), both figures are shown with a stated resolution rather than one being silently dropped.

## 4. India buys about 12.35 crore two-wheeler tyres a year, around 61% of them as replacements, and a handful of brands sell most of them

**Answer.** India's two-wheeler tyre market was about 123.5 million units (12.35 crore) in FY25, valued at roughly USD 2.85 billion, and growing at a projected 13.9% CAGR to FY30 `[RB01]` to `[RB04]`, all figures aggregator-reported and flagged as such throughout this section. Against FY25 two-wheeler production of 23.9 million units `[RB05]`, and assuming (the team's own arithmetic, stated once as an assumption, not a sourced figure) two tyres fitted per new vehicle, OE-fitted tyres account for about 47.8 million units, leaving roughly 75.7 million units, about 61%, as replacement demand. Five or more named brands, MRF, CEAT, Eurogrip, Apollo and Maxxis among them, compete for that replacement volume `[RB10]`, but no primary source in this build gives a dated, brand-level market-share percentage for any of them `[RB11]`, `[RB12]`, a gap stated plainly rather than filled with an invented number. The GST rate on two-wheeler tyres fell from 28% to 18% on 22 September 2025 `[RA60]`, `[RB30]`, a real, confirmed change this document uses throughout.

### 4.1 Market size

| Metric | Value | Status |
|---|---|---|
| FY25 volume | About 123.5 million units (12.35 crore) | Aggregator-reported `[RB04]` |
| FY25 value | About USD 2.85 billion | Aggregator-reported `[RB02]` |
| FY30 projected value | About USD 5.5 billion | Aggregator-reported `[RB02]` |
| FY25 to FY30 CAGR | 13.9% | Aggregator-reported `[RB03]` |
| Share of total Indian automotive tyre units, FY25 | About 20%, roughly double the FY21 share | Aggregator-reported `[RB01]` |
| ATMA-attributed two- and three-wheeler volume, FY23 | About 115 million units, via a Statista chart citing ATMA | Snippet-level, not independently opened `[RB08]` |

*Source: `research/raw/R-B-tyre-industry.md`, rows RB01 to RB08; all labelled aggregator-reported per the honesty convention in §0.6, since the host source (Autobei) is a tier-7 aggregator, not a regulator or company filing.*

No openly indexed ATMA category-level production and sales table for two-wheeler tyres by year was found; R-B's own Gaps section records three distinct search queries tried and recommends treating the two available figures (RB04's FY25 figure and RB08's FY23 ATMA-attributed figure) side by side, at their different attribution strengths, rather than blending them into a single series.

### 4.2 Replacement share, derived

| Step | Figure | Basis |
|---|---|---|
| FY25 two-wheeler tyre market | 123.5 million units | `[RB04]` |
| FY25 two-wheeler production | 23.9 million units | `[RB05]` |
| Assumed OE tyres per vehicle | 2 (team arithmetic, stated as an assumption, not sourced) | n/a |
| Implied OE tyre demand | 47.8 million units | 2 x 23.9 million |
| Implied replacement demand | 75.7 million units | 123.5 million minus 47.8 million |
| Implied replacement share | About 61% | 75.7 divided by 123.5 |

*Source: `[RB04]`, `[RB05]`, arithmetic shown once, flagged as the team's own derivation since no source states a replacement-share percentage directly.*

This derived 61% figure is directional only: it assumes every two-wheeler sold in FY25 is fitted with exactly two new tyres at the factory and ignores any lag between the production year and the year a vehicle's OE tyres are actually fitted. It is used in this document only to size the order of magnitude of replacement demand, never as a precise, sourced percentage.

### 4.3 Brand shares, stated honestly

| Brand | OE presence | Replacement-share statement found | Positioning |
|---|---|---|---|
| MRF | Yes, named major OE brand | No dated primary figure; one unverified single-source claim of about 35% | Value for money, described as a market leader |
| CEAT | Yes, named major brand | No dated primary two-wheeler-specific figure found | Value for money; heavy ad spend, about ₹325 crore FY26 |
| Eurogrip (TVS Srichakra) | Yes, increasing OEM share per CRISIL's 2022 rationale | No numeric OEM-versus-replacement split in any of four CRISIL rationales reviewed (2018, 2020, 2022, 2023) | Diversified OEM, aftermarket and export mix |
| Apollo Tyres | Limited, 2016 entrant with the Acti range | 2016 company aspiration of about 85% replacement-market coverage; not a measured current share | Challenger entrant, large ad spend including a BCCI jersey deal |
| JK Tyre | Not confirmed as a major named 2W OE brand | No two-wheeler-specific figure found | Broad multi-category maker; sells 2W and PV range on Amazon.in since Aug 2020 |
| Maxxis | Yes, named major brand | No share figure found | Named alongside MRF, TVS and CEAT as a major 2W brand |
| Michelin, Pirelli, Bridgestone | Limited or niche in India 2W | No share figures found | Premium or performance positioning |

*Source: `research/data/tyre_brands.csv`.*

Two single-source brand-share percentages did surface in the search (MRF about 35%, from an academic-upload aggregator; CEAT about 26%, from an unattributable search synthesis). Both were ruled unverifiable in `research/raw/conflicts.md` as C-RB2, because neither sums with any stated figure for the remaining brands in a checkable way, and neither is used anywhere in this document or in the deck.

### 4.4 SIAM sales and the two-wheeler parc

| Metric | Value | Period |
|---|---|---|
| Two-wheeler domestic wholesales | 2,17,05,974 units, up 10.7% from 1,96,07,332 | FY26 |
| Motorcycle wholesales | 1,30,64,789 units, up 6.6% | FY26 |
| Scooter wholesales | 81,17,945 units, up 18.5% | FY26 |
| Two-wheeler domestic sales | 19,23,483 units, up 22.6% YoY | Jul 2026 |
| Registered two-wheelers, India | Over 21 crore (210 million), per VAHAN, including 5,44,643 electric | On or about 4 Aug 2022, Lok Sabha reply |
| Registered two-wheelers, older baseline | About 8.24 crore (82.40 million) | 31 Mar 2009, MoSPI |

*Columns expanded: motorcycle and scooter wholesale sub-totals do not sum exactly to the reported two-wheeler total in either year, a gap of about 5 lakh units the source article does not explain, most likely the moped sub-segment.*
*Source: `[RB15]`, `[RB16]`, `[RB18]`, `[RB19]`, `[RB20]`.*

No current (post-2022) single-figure MoRTH or VAHAN total for registered two-wheelers was found in this lane; the 21-crore 2022 parliamentary figure `[RB19]` is used as a conservative floor, explicitly dated, rather than updated to a 2025 or 2026 estimate.

### 4.5 Replacement interval

No Indian company- or study-sourced two-wheeler tyre replacement interval, in kilometres or years, was located by any lane in this build. The closest available proxy is an insurer's guidance that Indian riders see more punctures once a tyre passes about three years old, with rubber hardening treated as starting after three years regardless of actual use `[RB22]`. A car-tyre study (not two-wheeler, cited only to show the shape of the gap) found Indian owners expect original tyres to last about 50,000 km but replace them, on average, near 26,000 km `[RB23]`. This document uses the three-year insurer guideline as a directional proxy only, labelled explicitly as an insurer's rule of thumb, not a tyre-maker or study figure, wherever a replacement trigger is discussed in section 5.

### 4.6 Channel structure and the margin gap

| Channel | Role | Source |
|---|---|---|
| Multi-brand tyre dealers | General replacement-tyre retail | `[RB29]` |
| Brand-exclusive retail formats | Run by MRF, CEAT, Apollo, Eurogrip (signature stores) | `[RB29]`, `[RA49]` |
| Mechanic and puncture-shop counters | A frequent replacement-moment touchpoint, per the brief | `[RB29]`, `[C4-B03]` |
| E-commerce | Smaller, unquantified; JK Tyre listed its 2W and PV range on Amazon.in from 1 Aug 2020 | `[RB29]`, `[RB65]` |

*Source: `research/raw/R-B-tyre-industry.md`, rows RB29, RB65.*

No source quantifies the percentage of replacement volume moving through any one of these channels, and no two-wheeler-specific dealer or distributor margin percentage on MRP was found despite three distinct search queries, logged in R-B's own Gaps section. The model therefore treats channel margin as an assumption `[A29]` (bear 22%, base 18%, bull 15%, on the ex-GST price) rather than a sourced figure; every paragraph in sections 9 and 11 that uses this assumption says so once.

### 4.7 The GST change, confirmed

| Category | Rate before | Rate after | Effective date |
|---|---|---|---|
| Mainstream tyres, incl. two-wheeler (HSN 40114020) | 28% | 18% | 22 Sep 2025 |
| Tractor tyres and tubes | 18% | 5% | 22 Sep 2025 |
| Retreaded or used tyres (HSN 4012) | 18% | 18% (unchanged) | 22 Sep 2025 |

*Source: `[RA60]`, `[RB30]`, `[RB31]`, `[RB32]`, `[RB33]`, CBIC Notification No. 09/2025-Central Tax (Rate), dated 17 Sep 2025, opened directly by R-B.*

This is the real, confirmed September 2025 CBIC rate change the plan anticipated as planning lead L14; both the direction (a cut) and the magnitude (ten percentage points, 28% to 18%, on two-wheeler tyres) are confirmed from the notification itself, not from a secondary summary alone. Model assumption `[A28]` (GST on two-wheeler tyres, 18%) uses this confirmed post-change rate throughout. One unresolved, low-stakes conflict remains on non-motorised bicycle tyres (logged as C-RB1), which this document does not cite since bicycle tyres sit outside the two-wheeler motor-tyre scope of all four cases.

### 4.8 Rubber prices

| Grade | Period | Price | Source |
|---|---|---|---|
| Kottayam EBC 2X | 2023 annual average | About Rs 145/kg | `[RB41]` |
| Kottayam EBC 2X | 2024 annual average | About Rs 131/kg | `[RB41]` |
| Kottayam EBC 2X | Mar 2025 | About Rs 180/kg | `[RB42]` |
| Kottayam RSS4 | Apr to Dec FY24-25 average | About Rs 202.04/kg, versus Rs 151.88/kg in the same period FY23-24 (up about 33.03%) | `[RB43]` |
| Kottayam RSS4 | Aug 2024 | About Rs 239/kg (described as a 13-year high) | `[RB44]` |

*Source: `research/raw/R-B-tyre-industry.md`, rows RB41 to RB44; the two grades are presented separately, not blended, since no single continuous FY21-to-FY26 series at one grade was located, per R-B's own correction note `[RB45]`.*

About 40% of the Indian tyre industry's natural rubber requirement is met through imports `[RB36]`; domestic production of about 8.5 lakh tonnes against consumption of about 14.2 lakh tonnes in 2023-24, with ATMA expecting demand to reach 20 lakh tonnes by 2030 `[RB37]`, leaves the industry structurally exposed to the price swings in the table above. Project INROAD, backed by about ₹1,100 crore from four major tyre manufacturers, targets 2 lakh hectares of new plantation, expected to start yielding from 2027 `[RB38]`, `[RB07]`.

### 4.9 Advertisement and promotion benchmarks against the 1.5% to 2% rule

| Company | Spend | Revenue base | Ratio |
|---|---|---|---|
| CEAT | ₹325 crore ad spend, FY26, up from ₹283.7 crore FY25 | ₹15,678 crore consolidated revenue, FY26 | About 2.1% |
| Apollo Tyres | ₹655 crore consolidated A&P, FY25, up from ₹631 crore FY24; ₹380 crore on a standalone basis | Standalone sales | About 2.1% of standalone sales (company-stated) |

*Source: `[RB49]`, `[RB50]`. CEAT's ratio is a lane calculation, 325 divided by 15,678, not a figure stated verbatim by CEAT itself; Apollo's 2.1% figure is stated directly by the company.*

Both companies' disclosed advertisement and sales-promotion spend independently works out to about 2.1% of their respective revenue bases, in their most recent reported year, sitting exactly at the top of the brief's 1.5% to 2% budget rule for Cases 1, 3 and 4 `[RB54]`. This is the strongest available cross-check that the brief's budget envelope is calibrated to real industry practice, not an arbitrary number. R-H's own cross-lane synthesis places this India-specific figure against two further comparators: Indian FMCG companies' advertising-to-revenue ratios of 5% to 7% in 2023 (down from 7% to 12% in earlier years, with HUL at 8.1% and Marico at 8.6%) `[RH39]`, and Gartner's global 2025 CMO Spend Survey average of about 7.7% of company revenue `[RH37]`. The brief's 1.5% to 2% rule, read against all three, is consistent with funding one sub-programme inside a larger marketing budget, not the whole budget, and no source found suggests the rule is unreasonably low for a single initiative of this kind `[RH40]`.

No advertisement or sales-promotion spend specific to MRF, JK Tyre or TVS Srichakra was found in either R-A or R-B; the CEAT and Apollo figures above are used as the only available benchmark band, and TVS Srichakra's own A&P line is carried in the model only as an assumption benchmarked to this band, never as a company-disclosed figure.

### 4.10 Porter's Five Forces: two-wheeler replacement tyres

| Force | Reading | Evidence |
|---|---|---|
| Supplier power | High. Natural rubber is the dominant cost input, about 40% import-dependent and subject to sharp price swings | `[RB36]`, `[RB41]` to `[RB45]`, `[RB66]` |
| Buyer power | Moderate to high. Multi-brand dealers and distributors can switch between MRF, CEAT, Apollo, Eurogrip and others for a given size with no technical lock-in; the brief itself describes mechanic advocacy as informal and inconsistent, itself evidence of low switching friction at the recommendation point | `[C4-B05]`, `[RB67]` |
| Threat of substitutes | Low. Retreading is rare in the two-wheeler segment; the nearest substitute dynamic is tube-to-tubeless migration and EV-linked tyre-spec change, not a cross-category substitute product | `[RB25]`, `[RB26]`, `[RB68]` |
| Threat of new entrants | Moderate, and not currently reinforced by trade policy. No 2W-specific anti-dumping duty restricts Chinese tyre imports, and a related truck and bus tyre duty was removed rather than extended in 2022 to 2023; no import-volume data confirms actual entrant activity at scale | `[RB46]`, `[RB47]`, `[RB69]` |
| Rivalry | High. At least seven named brands compete, with at least one rival (Apollo) stating an explicit high replacement-share ambition on entry and two rivals (CEAT, Apollo) disclosing double-digit ad-spend growth, indicating active, spend-led rivalry rather than a stable oligopoly | `[RB10]`, `[RB13]`, `[RB49]`, `[RB50]`, `[RB70]` |

*Source: `research/raw/R-B-tyre-industry.md`, synthesis rows RB66 to RB70.*

One further finding from this analysis matters directly for Case 4's design: no rival tyre maker (MRF, CEAT, Apollo, Bridgestone, Michelin) runs a named, mechanic-specific advocacy or loyalty programme; every rival tyre-sector programme found in this lane is dealer-, distributor- or fleet-facing `[RB64]`. In tyres specifically, the mechanic layer is a genuine white space relative to the dealer-loyalty programmes rivals already run; the nearest mechanic-facing comparisons sit in adjacent categories, which section 8 teardowns in full.

### 4.11 India two-wheeler tyre market, one table

| Dimension | Value |
|---|---|
| FY25 volume | 12.35 crore units |
| FY25 value | About USD 2.85 billion |
| Implied replacement share | About 61% (team derivation) |
| GST, post-Sep 2025 | 18% |
| Named competing brands | At least 7 (MRF, Eurogrip, CEAT, Apollo, JK, Maxxis, plus premium entrants) |
| Mechanic-specific rival programme | None found |
| A&P benchmark (CEAT, Apollo) | About 2.1% of revenue |

*Source: tables 4.1 to 4.10, consolidated.*

### 4.12 Tube-type, tubeless and the EV-linked shift

No India-specific tubeless-versus-tube-type adoption percentage or trend line for two-wheelers was located by any lane in this build. The closest available measure comes from a tyre-tube market report rather than a tyre market report: two-wheelers held about 54% of the separate tyre-tube market in 2026, and standard inner tubes held about 72% of that tube market `[RB25]`, both measures of residual tube demand rather than of tubeless adoption directly. This matters for Case 4 because tube-type and tubeless tyres call for different puncture-shop skills and consumables, a distinction the Tier 2 fitment course (§10) addresses directly.

The EV-linked dimension of this shift is better evidenced. High-speed electric two-wheeler retail penetration rose from about 0.2% of two-wheeler sales (about 27,000 units) in FY20 to about 5.8% (about 1.15 million units) in FY25 `[RB26]`; a separately measured figure puts electric two-wheelers, not restricted to "high-speed," at 10.6% of total two-wheeler retail sales in June 2026, a figure this document does not blend with the FY20-to-FY25 series since the two measures define "electric two-wheeler" differently. EV two-wheelers are noted as increasingly using tubeless tyre configurations as standard `[RB26]`, which is one reason the Tier 2 and Tier 3 training content in §10 explicitly names EV tyre handling as a skill module, not an afterthought.

### 4.13 Import competition and the entrant question

Planning lead L10's concern about import competition resolves to an honest "not currently quantified, not currently restricted" finding. No current (2025 to 2026) anti-dumping duty on Chinese two-wheeler tyres was located; the only confirmed China-origin tyre duties cover truck and bus radial tyres above 16-inch rim diameter (2017) and non-radial bias truck and bus tyres (2012), both outside two-wheeler scope `[RB46]`. The direction of travel, if anything, points toward fewer restrictions rather than more: a 2022 sunset review recommended extending the truck and bus radial duty for three more years, but the finance ministry decided in December 2022 not to extend it `[RB47]`. No source quantifies actual import volume or brand-level import activity in the two-wheeler segment at this entrant barrier, so the Five Forces reading in §4.10 states the entrant threat as "not reinforced by current trade policy," not as a sized, quantified threat; this document does not convert the absence of a quantified threat into a claim that import competition is large, only that it is not currently blocked by a 2W-specific tariff wall.

### 4.14 The two logged market conflicts, and why neither changes a headline number

`research/raw/conflicts.md` carries two rulings from this lane that are worth restating here because both bear directly on numbers a judge might ask about:

| Conflict ID | What was in dispute | Ruling | Why it does not change a headline number |
|---|---|---|---|
| C-RB1 | Whether non-motorised bicycle tyres were already at 5% GST before September 2025 or were cut from 28% to 18% in the September 2025 change; ClearTax's own page gives both answers | Bicycle tyres sit outside this case's two-wheeler motor-tyre scope; only the confirmed 28%-to-18% motor-tyre change `[RB31]` is cited anywhere in this document | No two-wheeler motor-tyre figure in this document rests on the bicycle-tyre rate either way |
| C-RB2 | Two uncorroborated single-source brand-share percentages (MRF about 35%, CEAT about 26%) that do not sum with any stated figure for the remaining brands | Neither percentage is used anywhere in this document or the deck; only the qualitative brand list `[RB10]` and Apollo's stated 2016 entry ambition `[RB13]` are cited, each labelled by source strength | The document never presents a brand-share chart, so excluding these figures costs no analysis, only a chart type the evidence cannot support honestly |

*Source: `research/raw/conflicts.md`, entries C-RB1 and C-RB2; `research/raw/R-B-tyre-industry.md`, Conflicts section.*

This is the same discipline §1.10 states for the whole document: a search that returns an unverifiable number is reported as a gap, with the number named and excluded, rather than silently used because it is the only number available.

### 4.15 Why this market rewards a channel play over a pure awareness play

Putting §4.1 through §4.14 together, three structural facts argue against treating awareness as the lever for any of the four cases, Case 4 most directly. First, Eurogrip already has strong brand awareness by the brief's own account `[C1-B05]`, so the binding constraint is conversion, not recall, a pattern consistent with the FY26 revenue growth sitting alongside a stocking and recommendation gap the brief states qualitatively `[C4-B11]`. Second, the category's own spend benchmark, CEAT and Apollo both at about 2.1% of revenue `[RB49]`, `[RB50]`, sits far below the 5% to 12% that FMCG companies spend on advertising `[RH39]` and the 7.7% global cross-industry marketing average `[RH37]`, which means the category as a whole competes more on channel structure, distribution depth and trade relationships than on mass awareness spend; Apollo's own large cricket-sponsorship outlay is the exception that proves the rule, since it is explicitly a challenger's attempt to buy visibility against established channel relationships, not evidence that channel relationships themselves can be displaced by advertising alone. Third, no rival in this category runs a mechanic-specific programme `[RB64]`, which means the white space this document identifies is a channel-structure gap, not an awareness gap; a brand that is already known but under-recommended needs a reason for the recommending layer to act differently, not a louder reminder that the brand exists. This reasoning, stated once here, underlies why Case 4's recommendation in section 10 is a structural change to how mechanics are rewarded, not a campaign.

### 4.16 Reading the rubber-price trend against the budget envelope

One further connection is worth stating plainly: the rubber-price swings in §4.8 are a cost-side pressure on TVS Srichakra's margins (and every rival's margins equally, since about 40% of the industry's natural rubber is imported `[RB36]` and no single maker controls the world price), while the Case 4 and Case 1 budget envelopes in sections 2 and 11 are sized as a percentage of revenue, not of margin. A period of rising rubber cost, such as the move from about Rs 131/kg to about Rs 180/kg on the Kottayam EBC 2X series between 2024 and March 2025 `[RB41]`, `[RB42]`, squeezes contribution margin `[A30]` without necessarily changing the revenue base the budget envelope is calculated against. This is one reason the Case 4 moneyshot in §11 reports break-even in tyres, not in rupees of margin alone, and why the tornado table `[T6]` shows contribution margin `[A30]` as the single largest driver of where break-even lands: a margin-side cost shock from rubber prices would move the programme's break-even bar directly, even if the revenue-based budget envelope itself stayed unchanged.

### 4.17 What a judge asking "why not just undercut on price" should be told

A natural question for any case touching a fragmented, multi-brand replacement market is whether Eurogrip should simply compete harder on price. The market facts assembled in this section argue against that instinct for two reasons that hold across all three cases this document builds for the domestic replacement channel. First, the GST cut from 28% to 18% `[RA60]`, `[RB30]` already lowered the effective shelf price across every brand equally in September 2025, so any further price move is a move against rivals facing the identical cost relief, not a move that creates room a rival cannot match; a price cut funded from margin, in a category where natural rubber, the dominant cost input, is about 40% import-dependent and subject to the price swings in §4.8, is also a move that directly erodes the contribution margin `[A30]` the Case 4 moneyshot's break-even calculation depends on. Second, the one rival that did choose an aggressive spend-and-price posture on entry, Apollo in 2016, stated an ambition to cover close to 85% of the replacement market `[RB13]`, a target with no evidence in this build of having been achieved at anything close to that scale nine years later; this is not proof that an aggressive entry strategy cannot work, but it is the closest real-world test case available, and it did not produce a dominant, visible share outcome strong enough to surface in any source this lane opened. Taken together, these two facts are the reasoning behind why Cases 1, 3 and 4 all build their recommendation around a structural or channel advantage (a shared proof currency, a dealer-sequencing choice, a stock-independent advocacy design) rather than around price.

### What this section establishes, and what it does not

- It establishes the size, growth and brand structure of India's two-wheeler tyre market, with every aggregator-sourced figure labelled as such and every unverifiable brand-share percentage excluded rather than cited.
- It establishes the confirmed September 2025 GST change, the rubber-price trend across two grades, and the CEAT and Apollo A&P benchmarks that cross-check the brief's own 1.5% to 2% budget rule.
- It establishes a Porter's Five Forces reading for the category, closing on the finding that no rival runs a mechanic-specific programme, a genuine white space that section 8 explores through adjacent-category comparisons.
- It does not resolve the replacement-share figure to a sourced percentage; the 61% figure here is the team's own derivation, flagged plainly, not a citation.
- It does not yet describe the rider's own journey to a replacement-tyre decision; that is section 5, which also carries the seed sentence for the Case 4 design.

## 5. A replacement tyre is chosen at a puncture or a worn tread, and the mechanic is usually the person in the room

**Answer.** The brief itself frames the replacement moment plainly: mechanics and puncture shops are among the most frequented touchpoints in a two-wheeler rider's ownership journey `[C4-B03]`, and the mechanic most often becomes the person recommending which tyre to buy at the moment of replacement `[C4-B04]`. No study found in this build attaches a percentage to how often that recommendation actually decides the purchase, a gap R-B records directly `[RB67]`; this section therefore treats mechanic influence as association, not proof, everywhere it appears. The seed for the whole Case 4 design sits here, before section 10 names it: a meaningful share of brand advocacy already comes from mechanics who do not even stock Eurogrip tyres `[C4-B14]`, which is the reason the recommended programme pays for the recommendation itself, not for the stock.

### 5.1 The rider journey map

| Stage | Touchpoint | Who influences | Evidence |
|---|---|---|---|
| Normal use | The tyre wears gradually; the rider notices reduced grip, vibration or an odd sound | Rider's own observation | `[C4-B03]`, general |
| Trigger event | A puncture, a visibly worn tread, or an insurer/dealer prompt after about three years of age | Mechanic or puncture-shop operator inspects and names the problem | `[RB22]` (insurer three-year guidance, explicitly a proxy, not a tyre-maker figure) |
| Diagnosis | The mechanic states whether the tyre is repairable or must be replaced, and names a brand or size | Mechanic, described by the brief as "the person recommending which tyre to buy" | `[C4-B04]` |
| Decision | The rider accepts the recommendation, asks for a cheaper or pricier alternative, or defers | Rider, with the mechanic's recommendation as the dominant input described in the brief | `[C4-B04]`, `[C4-B05]` |
| Purchase | The rider buys at the mechanic's shop if it stocks the tyre, or at a nearby retailer the mechanic points to if it does not | Mechanic (direct sale) or mechanic plus nearby retailer (referral) | `[C4-B14]` |
| Fitment | The mechanic fits the tyre, regardless of whether the tyre was bought from them | Mechanic | `[C4-B03]` |

*Columns expanded: "Who influences" names the dominant actor at each stage per the brief's own description; this document does not add a percentage figure to any cell, since none is sourced.*
*Source: `case/01-brief.md` §P.4, sentences C4-B03 to C4-B05, C4-B14; `research/raw/R-B-tyre-industry.md`, row RB22.*

### 5.2 Triggers that start the replacement journey

| Trigger | Description | Basis |
|---|---|---|
| Puncture | The most immediate, unplanned trigger; a punctured tyre that cannot be safely repaired forces an on-the-spot decision at whichever shop is nearest | `[C4-B02]`, the case title itself names "puncture shops" as a primary venue |
| Worn tread | A gradual trigger, usually noticed and named by a mechanic during routine service rather than by the rider unprompted | `[C4-B03]`, `[C4-B04]` |
| Age-based caution | An insurer's rule of thumb treats a tyre over about three years old as prone to more punctures from rubber hardening, regardless of distance covered | `[RB22]`, explicitly an insurer proxy, not a company or study figure |
| Planned service visit | A scheduled service where the mechanic inspects tread depth and recommends replacement ahead of a failure | General service-visit logic; no India-specific interval study was found (§4.5) |

*Source: as cited; this document does not state a replacement interval in km or years as a sourced fact, per the gap recorded in §4.5.*

### 5.3 Evidence on mechanic influence: association, not proof

Three distinct categories of evidence inform this section, each held to the honesty standard the brief itself sets by describing its own mechanic brand-track findings only qualitatively `[C4-B06]`, `[C4-B07]`:

| Category | What it shows | What it does not show |
|---|---|---|
| The brief's own framing | Mechanics and puncture shops are among the most frequented touchpoints, and the mechanic most often becomes the recommender at replacement `[C4-B03]`, `[C4-B04]` | A measured percentage of purchases decided by that recommendation; the brief states this qualitatively, and this document never attaches an invented number to it |
| The brief's own brand-track study | Awareness among mechanics is average to lukewarm; Eurogrip's tyre stocking lags well behind competing brands; the opportunity is converting awareness into stocking and recommendation `[C4-B11]` | A quantified gap size; the brief itself gives no percentage, and this document follows that precision level throughout, per the honesty convention in §0.6 |
| R-B's market-structure synthesis | Low switching friction at the recommendation point is consistent with an informal, unstructured advocacy channel, itself evidence the brief's own description of advocacy as "unstructured, inconsistent" `[C4-B05]` is market-structurally plausible | A causal study proving the mechanic's word, specifically, moves the sale; no such study was found by any lane in this build `[RB67]` |

*Source: `case/01-brief.md`, rows as cited; `research/raw/R-B-tyre-industry.md`, row RB67.*

Every sentence in this document that uses mechanic-influence evidence from this table is written as association, not proof, per the style contract in `PLAN.md` §0.5: a claim that mechanics are frequently present at the replacement decision is well supported; a claim that a specific share of purchases is caused by their recommendation is not, and this document does not make the second claim.

### 5.4 The seed sentence

Per the foreshadowing rule set in `research/ARGUMENT.md` ("Case 4: seed and where it appears") and `PLAN.md` §2.2.11, the sentence that plants the Case 4 recommendation's governing idea, before section 10 ever names the programme, is stated here in full: **a meaningful share of brand advocacy already comes from mechanics who do not even stock Eurogrip tyres, showing that influence and stocking are not the same thing, and that advocacy can be built independent of inventory commitment** `[C4-B14]`. This sentence does the same work on the cover of the Case 4 deck, where it appears as the sub-caption beneath the mind map's THE MECHANIC node, and again in section 7's insight 2 and section 10's description of why the programme's loop (§10.2) is built to credit a logged code regardless of whether the logging mechanic stocks the tyre. The symmetry rule in `PLAN.md` §2.2.11 requires the same sentence to do this seeding work in exactly these places and nowhere else, so that a reader who reaches section 10 recognises the design as an answer to something already raised, not a new claim appearing unexplained.

### 5.5 Why the journey favours a stock-independent design

| Observation from the journey map | Consequence for programme design |
|---|---|
| The mechanic diagnoses and recommends before any purchase happens, often at a shop separate from where the tyre is bought | A design that only rewards the shop that sells the tyre misses every mechanic who diagnosed the need but referred the rider elsewhere |
| Puncture shops are structurally more likely to see a tyre at the end of its life than to stock a wide range of new tyres themselves | A design that requires stocking to earn a reward excludes a segment the brief explicitly says already advocates `[C4-B14]` |
| The replacement decision is informal and inconsistent across mechanics today `[C4-B05]` | A design needs a simple, low-friction way (a personal code) for an informal recommendation to become a trackable one, without asking the mechanic to change how they already work |

*Source: table 5.1, synthesis.*

### 5.6 Two touchpoints, not one: the service mechanic and the puncture shop

The brief's own case title names both "mechanics" and "puncture shops" as a single advocacy audience `[C4-B02]`, but the journey map in §5.1 implies two somewhat different venues that section 6 later formalises as segments S-B and S-C. A general service mechanic typically sees a bike on a planned visit, inspects multiple components including the tyre, and recommends replacement as one line item among several; a puncture shop typically sees a bike on an unplanned, urgent visit, triggered by a single failure, and the tyre decision is the entire interaction, not one line among several. This distinction matters for programme design because the two venues differ in how much time and trust surrounds the recommendation: a puncture-shop recommendation is made under time pressure, often with the rider standing by the roadside, while a service-mechanic recommendation is made inside a longer visit where other issues are also being discussed. Section 10's reward catalogue and section 7's jobs-to-be-done analysis both carry this distinction forward rather than treating "mechanic" as a single undifferentiated role.

### 5.7 Why "informal and inconsistent" is itself a measurable market condition

The brief's description of today's advocacy as "unstructured, inconsistent, and hard to place on the same plans as their peers" `[C4-B05]` is not only a qualitative complaint; it is consistent with a market-structural reading this document can support with evidence from outside the brief itself. R-B's Five Forces synthesis on buyer power notes that replacement-channel buyers, including the mechanics and shops that steer a rider's purchase, can switch between brands for a given size or pattern with no technical lock-in `[RB67]`. Low switching friction and informal, inconsistent advocacy are two descriptions of the same underlying condition: no brand has built a structure that gives a mechanic a durable reason to recommend it over an equally available rival, so recommendations today likely track whatever stock, margin or habit is locally convenient rather than any sustained brand preference. This reading is offered as a plausible market-structural explanation for the brief's own qualitative finding, not as an independent proof of it, and it is the reason the recommended programme in section 10 is built around creating exactly the durable, structured reason for recommendation that today's informal channel lacks.

### 5.8 What this section does and does not claim, stated plainly

Because mechanic-influence evidence is thin across every lane in this build, it is worth stating in one place exactly what level of claim this document is willing to make, so no later section drifts into overclaiming:

| This document does claim | This document does not claim |
|---|---|
| Mechanics and puncture shops are frequently present at the replacement decision, per the brief's own framing `[C4-B03]`, `[C4-B04]` | A specific percentage of replacement purchases are decided by a mechanic's recommendation |
| A meaningful share of advocacy already comes from non-stocking mechanics, per the brief's own insight `[C4-B14]` | A measured size for that share |
| Low switching friction in the replacement channel is consistent with informal, inconsistent advocacy `[RB67]` | That low switching friction causes inconsistent advocacy, as opposed to merely being consistent with it |
| An insurer's three-year age guideline is a directional proxy for one replacement trigger `[RB22]` | That three years is Eurogrip's own stated tyre life or a verified Indian replacement interval |

*Source: synthesis of §5.1 to §5.7.*

### 5.9 Why the journey map, not a persona, is the right unit of analysis here

This section deliberately builds a journey map rather than a rider persona, because the brief's own framing of Case 4 is about a touchpoint, the mechanic and puncture shop, not about a rider segment. Case 1 builds personas for exactly this reason (§17), since its brief asks how three different rider segments should be addressed distinctly; Case 4's brief instead asks how to build an advocacy ecosystem around one touchpoint that every rider segment passes through at replacement, regardless of whether that rider is a commuter, a gig worker or a premium owner. The journey map in §5.1 is therefore written to be segment-agnostic on the rider side (it does not ask whether the rider is a commuter or a gig worker) while being specific on the touchpoint side (it distinguishes the service mechanic from the puncture shop, per §5.6). This is also why the seed sentence in §5.4 is planted here, in the rider-journey section, rather than in a persona section: the insight it carries, that influence and stocking are not the same thing, is a property of the touchpoint, not of any one rider segment, and it needs to be true for the commuter, the gig rider and the premium rider alike for the Case 4 programme to scale nationally as the brief requires `[C4-B20]`.

### 5.10 Carrying the journey map forward

Three later sections depend directly on the journey map built here, and this closing note states the dependency plainly so a reader can trace it. Section 6 takes the touchpoints named in §5.1 and §5.6 and sizes how many outlets occupy each one, using the same S-A, S-B, S-C segmentation this section's distinction between service mechanic and puncture shop anticipates. Section 7 takes the "why informal and inconsistent" reasoning from §5.7 and extends it into a full MECE issue tree of why Eurogrip specifically, not the category generally, loses at stocking and recommendation. Section 9 takes the diagnosis-and-decision stages from §5.1, where a cash-per-tyre scheme would need to attach its reward, and shows numerically why that attachment point rewards the wrong moment in the journey for a meaningful share of advocacy. None of these later sections re-derives the journey map from scratch; each cites this section's rows directly, which is the symmetry the writer brief asks for across a document built by six different writers from a single, shared fact base.

### What this section establishes, and what it does not

- It establishes a rider journey map from normal use through fitment, naming the mechanic as the dominant influence at the diagnosis and decision stages, per the brief's own framing.
- It establishes a working distinction between the service mechanic and the puncture shop as two related but different venues, carried forward into segments S-B and S-C in section 6.
- It establishes a market-structural reading, from Five Forces buyer-power evidence outside the brief, of why today's advocacy is plausibly informal and inconsistent, offered as a plausible explanation rather than an independent proof.
- It establishes the triggers that start a replacement journey (puncture, worn tread, age-based caution, planned service), each tagged to its source and never assigned an invented interval.
- It establishes, honestly, that no study in this build attaches a measured percentage to mechanic influence on the purchase decision, and that every claim in this section and the rest of the document is written as association, not proof, accordingly.
- It states the seed sentence on non-stocking advocates in full, at the point `PLAN.md` §2.2.11 requires it, before the recommendation itself is named in section 10.
- It does not yet size the mechanic and puncture-shop universe those journeys take place in; that is section 6, nor does it analyse Eurogrip's own stocking and recommendation gap in depth; that is section 7.
- It does not quantify how many of the journey's stages a single visit covers versus how many involve the rider moving between a diagnosing mechanic and a separate selling retailer; no source found measures this split, and this document does not invent one.
