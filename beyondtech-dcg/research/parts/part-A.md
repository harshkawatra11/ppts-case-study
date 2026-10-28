## 0. Document control

**Answer.** This document is the research base for a go-to-market plan for BeyondTech, a non-tech placement accelerator for Tier-1 B.Tech students, built for the BeyondTech x DTU Consulting Group (DCG) Case Competition 2026. It exists so that every number on the eventual Figma deck traces back to a cited fact, a dated source or a named assumption, and so that a judge or the founder can check any claim in under a minute. It was researched and drafted by Claude based AI agents working under the direction of Team IdeaForge (Harsh Kawatra and Anuj, both Delhi Technological University), and every section below states this plainly rather than leaving it implicit.

### 0.1 Purpose and reader

The deck that follows this document has one job: convince the judges and the founder, Harsh Agarwal, that BeyondTech's next twelve months should be spent distributing proof rather than buying awareness. This document is the evidence locker behind that argument. Three readers are expected. The DCG student judges will read this to check that the scorecard logic in section 14 to 16 is not decoration over an unsupported gut call. The founder, Harsh Agarwal, will read this to see his own business described back to him with numbers he has not seen assembled in one place, consistent with the organiser playbook's own rule that a winning deck teaches the founder something he did not already know [P01]. A third reader, Team IdeaForge's own future selves, will use this document as the single place to check a number before it is typed onto a slide, per the case decoded (`PLAN.md` section 2.1): a headline figure that changes once must be changed everywhere it appears, and this document is the place that change is checked against.

### 0.2 Tag legend

Every quantitative claim in this document carries one of the following tags immediately after it, per `PLAN.md` section 2.4. A claim with no tag is a drafting error, not a deliberate choice.

| Tag | Meaning | Lives in |
|---|---|---|
| `[B ##]` | A fact stated in the case brief itself | `case/01-beyondtech-brief.md` |
| `[W ##]` | A finding from BeyondTech's public footprint (website, LinkedIn, Topmate), superseded wherever a matching `[RA ##]` exists | `case/02-beyondtech-public-footprint.md` |
| `[P ##]` | A rule drawn from the DCG organiser playbook | `case/03-organiser-playbook-digest.md` |
| `[S###]` | An external source, news, aggregator, official document or regulator page | `research/raw/sources.md` |
| `[D college.Cn]` | One cell of the college scorecard dataset | `research/data/college_scorecard.csv` |
| `[A##]` | A team assumption with a bear, base and bull value | `PLAN.md` section 5.3 and the model |
| `[M T#]` | A model output table | `model/model_tables.md` |
| `[V ##]` | A verbatim, attributed public student-voice quote | `research/raw/R-I-student-voice.md` |
| `[RX##]` | A raw lane fact row, the primary tag for anything drawn from a lane file, cross-referenced to an `[S###]` where useful | `research/raw/R-*.md` |

A number is never written without one of these tags, and an assumption is never written without the word "assumption" or "est." appearing once in the paragraph that carries it, per the writer brief's content rules.

### 0.3 Source hierarchy

`PLAN.md` section 6.2 ranks eight tiers, highest first: the case brief; BeyondTech's own pages; official institute documents (NIRF data submissions, placement brochures, annual reports); regulators and statutory bodies; recruiter and competitor company pages; national press; aggregators (Collegedunia, Shiksha, Careers360, Getmyuni); and finally blogs and forums. A figure resting only on tier 7 or 8 is labelled "aggregator reported" wherever it is used and carries "est." framing on a slide. This hierarchy is why, for instance, DTU's graduated and placed cohort figures are cited to its own NIRF 2025 submission [RB07] rather than to an aggregator, even though the aggregator's figures are easier to find.

### 0.4 Verification status counts by lane

Nine research lanes (A through J, skipping E, which is reserved for the eight per-pick dossiers) and eight dossiers produced the fact base behind this document. Each lane file tags every row `VERIFIED` (seen directly on a fetched page), `VERIFIED (search result only)` (seen in a search snippet, the page itself not fetchable), `CORRECTED` (a seed fact was wrong and is replaced), `NOT FOUND` (searched for, not found), or `NOT FETCHED` (the page exists but blocked automated access). The table below tallies each lane's own Facts table. Rows with a compound status (for example, one answer rendered while five did not, within a single table row) are counted once per status they carry, so lane subtotals can exceed the lane's row count by a small margin; this is noted rather than hidden.

| Lane or dossier | VERIFIED | VERIFIED (search only) | CORRECTED | NOT FOUND | NOT FETCHED |
|---|---|---|---|---|---|
| A, BeyondTech and the founder | 42 | 0 | 5 | 5 | 4 |
| B, DTU | 36 | 11 | 0 | 0 | 1 |
| C, demand for non-tech roles | 1 | 73 | 1 | 2 | 0 |
| D, competitors | 16 | 40 | 1 | 0 | 0 |
| F, channel and funnel benchmarks | 25 | 22 | 1 | 10 | 0 |
| G, expansion and trust precedents | 12 | 45 | 2 | 6 | 0 |
| H, rules and claims | 13 | 41 | 0 | 3 | 0 |
| I, public student voice | 0 | 37 | 0 | 0 | 0 |
| J, map and logo assets | 63 | 0 | 0 | 3 | 0 |
| E, BITS Pilani dossier | 3 | 29 | 0 | 8 | 0 |
| E, BITS Pilani Goa dossier | 4 | 18 | 0 | 5 | 0 |
| E, NIT Tiruchirappalli dossier | 19 | 6 | 4 | 8 | 0 |
| E, NIT Warangal dossier | 15 | 8 | 1 | 12 | 0 |
| E, PEC Chandigarh dossier | 7 | 22 | 0 | 8 | 1 |
| E, COEP Pune dossier | 6 | 15 | 0 | 6 | 0 |
| E, IIT Delhi dossier | 7 | 12 | 1 | 6 | 0 |
| E, IIT Roorkee dossier | 5 | 15 | 0 | 6 | 0 |
| **Total** | **274** | **394** | **16** | **88** | **6** |

Three honest reads of this table. First, more than half of all rows (394 of about 778) are "search result only", meaning the underlying page could not be fetched directly and the fact rests on a search engine's own snippet; this is the expected shape of desk research into institute placement pages, most of which sit behind JavaScript rendering or anti-bot walls, and every such row is still a real snippet, not a paraphrase. Second, Lane I (public student voice) is entirely search-result-only by its own method note, because Reddit and Quora both blocked direct fetches and every quote was pulled through a text-extraction proxy; this is disclosed once here and again in section 27. Third, the dossier lanes carry the highest `NOT FOUND` density (88 of the total sits mostly in dossiers and Lane F), which is unsurprising given each dossier asks about 30 specific facts per campus and not every campus publishes all of them; section 16 reports each dossier's own gap honestly rather than smoothing it over.

### 0.5 Model version and run date

Every modelled number in this document (`[M T#]`) comes from `BT/model/beyondtech_gtm_model.py`, run on 2026-10-10T13:22:41, which generated `model_outputs.json` and `model_tables.md` (tables T1 through T16) [M T1 to M T16]. No writer recomputes a model number independently; where a writer's own reading of a raw lane file would imply a different figure, the model's locked number wins per the writer brief's "Late corrections" note, and the raw file remains the evidentiary backup, not the citation itself.

### 0.6 The two Harsh note

Two people named Harsh appear throughout this project and are never allowed to collapse into a bare "Harsh" anywhere in this document. The founder of BeyondTech is **Harsh Agarwal**, referred to as "the founder" or "Harsh Agarwal". The team lead of Team IdeaForge is **Harsh Kawatra**, referred to as "Harsh Kawatra" or "Team IdeaForge". This rule exists per `PLAN.md` section 2.3 because the two names are easy to conflate in a document that discusses both the client and the authoring team, and a conflation anywhere would be the kind of proper noun error the organiser playbook flags as trust destroying [P12].

### 0.7 AI use disclosure

This document was researched and drafted by Claude based AI agents under the direction of Team IdeaForge. Every fact was gathered by an AI research agent through web search and page fetches, every number was computed by a Python model written and run by an AI modelling agent, and every section of prose was drafted by an AI writing agent working from the fact base and the model's output tables, not from general knowledge. A human lead (Team IdeaForge) set the research plan, ruled on every conflict the agents found (`research/raw/conflicts.md`), locked the final numbers at each gate, and reviewed the output before submission. No primary research (interviews, surveys, letters of intent) was conducted; section 27 states this honestly and proposes a Customer Validation Plan instead of pretending such research happened.

### 0.8 Skill calibration note

The content and argument structure behind this deck (the contrarian recommendation pattern, the governing thought, the moneyshot, foreshadowing and symmetric treatment) were engineered using the `case-competition-deck` skill, run in generate mode before any Figma node is drawn, per `PLAN.md` section 0 and section 4.1. That skill's structural and rhetorical patterns are corpus derived from three M&A case decks from the Harvard GCCH competition. For a marketing and go-to-market case, which is what this case actually is, those frameworks are treated as plausible extrapolation rather than a proven fit: the structural and rhetorical patterns (one contrarian move per pillar, one moneyshot, foreshadowing across slides, symmetric treatment of parallel items such as the four college picks, three-scenario discipline, a closing "THEREFORE" synthesis) are used with confidence because they describe how any persuasive analytical deck is built, independent of case type. The case-type-specific framework menu (which named frameworks to reach for) is used with less confidence and is cross-checked against the marketing and strategy case-type guides specifically, rather than assumed to transfer unchanged from an M&A context. This document states that distinction once here, per the skill's own calibration honesty guidance, rather than presenting every pattern with equal certainty.

### 0.9 Document map

| Part | Sections | Writer | What it covers |
|---|---|---|---|
| Opening | 0 to 4 | W-A | Document control, the brief coverage matrix, the one-page answer, BeyondTech today, the three-links insight |
| Demand and students | 5 to 7 | W-B | Why non-tech roles matter, student segments and buying windows, the competitive set |
| DTU plan | 8 to 12 | W-C | DTU's own numbers, the funnel leaks, the society map, the eleven-channel plan, the budget |
| College selection | 13 to 16 | W-D | The Tier-1 definition and longlist, the scorecard, the four picks, the per-pick dossiers |
| Launch and economics | 17 to 20 | W-E | Trust from zero, the 90-day playbook, the ambassador flywheel, expansion economics |
| Roadmap and method | 21 to 27 | W-F | The twelve-month roadmap, measurement, risks, assumptions, the slide blueprint, judge questions, method |
| Appendices | A to F | generated by `assemble.py` | Bibliography, model tables, college dataset, society and competitor datasets, glossary, conflicts and rulings |

---

## 1. Brief coverage matrix: every ask, where it is answered and on which slide

**Answer.** Every numbered ask in the case brief (B01 through B21) is answered somewhere in this document and lands on a specific slide of the twelve-slide deck; the table below is the audit trail a judge can use to check that nothing in the brief was skipped. The five scoring criteria map cleanly onto five blocks of this document, with DTU GTM (30%) and the two college-selection and pan-India criteria (25% each) carrying the heaviest evidentiary weight, and insight and creativity (10%) running as a cross-cutting thread rather than one isolated section. The honest gap is that the evidence base thins in three specific places: `societies.csv` is filled to 16 of its 30-row target, Lane I's public-student-voice coverage is skewed almost entirely to NSUT and one other campus rather than DTU, and DTU itself has no public student-voice quote at all under this project's platform rules.

### 1.1 Brief ask to section and slide

| B-ID | Ask or fact | Answered in section(s) | Stage 2 slide |
|---|---|---|---|
| B01 | Company description: non-tech placement accelerator for Tier-1 B.Tech students | 3 | 1 (cover), 2 |
| B02 | Task: GTM strategy for two pillars, DTU penetration and pan-India expansion | 2 | 2 |
| B03 | Format: 8 to 12 slide deck, excluding title and appendix | 25 | n/a, a format constraint satisfied by the deck's own 12-slide structure (1 cover, 9 core, 1 appendix, 1 thank you) rather than argued on any single slide |
| B04 | At-a-glance proof point, "40 selections across 14 organisations" | 3, 4 (conflict X1) | 3 |
| B05 | Results table: DTU 50+ selections, average 13 to 14 LPA, highest 47 LPA at Eternal, named firms | 3 | 2, 3 |
| B06 | NSUT and Thapar and BIT Mesra recruiters, including the unidentified "Prism" | 3 | 3 |
| B07 | Flagship offer: 11-week, four-phase bootcamp | 3, 5 | 2, 5 |
| B08 | Company-specific PYQs, weekly mocks, off-campus guidance and referrals | 3, 5 | 5 |
| B09 | Positioning, "one course for every non-tech company visiting your campus" | 3 | 2, 7 |
| B10 | Growth engine: word-of-mouth, community, founder-led mentorship | 3, 4 | 3 |
| B11 | Core problem: strong recall, informal and founder-tied engine | 3, 9 | 3 |
| B12 | Bottleneck 1, TAM limitation (narrow audience, not every campus has non-tech recruiters) | 3, 13, 14 | 3, 7, 8 |
| B13 | Bottleneck 2, channel dependency, no paid marketing or ambassador flywheel | 3, 9, 11 | 3, 5 |
| B14 | Vertical 1 ideas: societies, departments, placement cell, paid ads, influencers, mock drives | 10, 11 | 5 |
| B15 | Vertical 1 deliverable: DTU GTM plan with an organic and paid budget split | 11, 12 | 5, 6 |
| B16 | Vertical 2 context: almost no recognition outside the four core campuses | 13 | 8 |
| B17 | Vertical 2 pick method: scorecard on recruiters, societies, placement timeline | 14 | 7 |
| B18 | Vertical 2 launch without a local founder: ambassadors, society tie-ups, ads, alumni stories | 17, 18 | 8, 9 |
| B19 | Vertical 2 deliverable: 3 to 4 picks with a one-line reason and a launch GTM | 15, 16, 18 | 7, 8, 9 |
| B20 | Scoring weights, 30 / 25 / 25 / 10 / 10 | 1.2 below | all nine core slides, weighted per 1.2 |
| B21 | The three embedded hyperlinks (website, company LinkedIn, founder LinkedIn) | 3, 4 | 11 (appendix sources) |

### 1.2 The five scoring criteria mapped to sections

| Criterion | Weight | Primary sections | Primary slides |
|---|---|---|---|
| DTU GTM plan (channel mix, budget split, realism) | 30% | 8, 9, 10, 11, 12 | 3, 5, 6 |
| College selection (scorecard logic and numbers) | 25% | 13, 14, 15, 16 | 7 |
| Pan-India launch plan (entry approach, trust from scratch) | 25% | 17, 18, 19, 20 | 8, 9 |
| Insight and creativity (understanding students, fresh ideas) | 10% | 2, 4, 6, 9, 17 (cross-cutting, the insight bank I1 to I10) | 3, 8 |
| Presentation quality (clarity, structure, tone) | 10% | 25, plus the visual execution of every slide | all |

The weighting in the right-hand description is deliberately qualitative rather than a second set of invented percentages: insight and creativity do not get their own slide because the brief's own weighting table [B20] treats them as a quality of the whole deck, not a section of it. The strongest single insight carrying the 10% (insight and creativity) is the ambassador-post-against-intern-post comparison (I4, section 4) and the recruiter-overlap index used to pick colleges (I9, section 14), both of which are the kind of outside-in exhibit the organiser playbook asks for [P01].

### 1.3 Where the evidence is thinnest

Three places in this research base are honestly thin, and this document does not paper over any of them.

| Thin spot | Scale of the gap | How this document handles it |
|---|---|---|
| `societies.csv` row coverage | 16 of a 30-row target filled [Lane B, `conflicts.md` gap note] | Section 10 uses the 16 filled rows only, reports the shortfall by name, and does not stretch a handful of well-evidenced rows into a claim of comprehensive society coverage |
| Lane I public-student-voice campus coverage | Of 37 verified quotes, only NSUT (6) and NIT Surathkal (2) carry a named campus; DTU itself yielded zero [`conflicts.md` ruling I-R1] | Quotes are framed as general engineering-student sentiment, never as DTU-specific or longlist-specific, wherever this document draws on them |
| DTU-specific named student voice | One named source only, the 180DC DTU Substack interview [`conflicts.md` ruling I-R2] | Used by name, separately from the anonymous quote table, and never treated as a sample rather than a single data point |

First, `research/data/societies.csv` holds 16 of its 30-row target. The eight bare-name-only DTU societies that Lane B could not flesh out beyond a name (Enactus DTU, Round Table DTU, Kalakriti DTU, AIMS-DTU, Semicon DTU, EMCEE DTU, ACM DTU and Deb Soc DTU) and a continuing shortfall in product, analytics and department-specific societies remain open per `conflicts.md`'s own gap note. Section 10 uses the 16 rows that exist, reports the gap plainly, and does not stretch six well-evidenced society rows into a claim of comprehensive coverage.

Second, Lane I's public student-voice sample of 37 verified quotes is almost entirely campus-unspecified: only NSUT (6 quotes) and NIT Surathkal (2 quotes) are tied to a named campus, and DTU itself produced zero quotes under this lane's platform and attribution rules [RII per conflicts.md ruling I-R1]. Wherever section 6 or section 10 draws on this lane, it is framed as general engineering-student sentiment gathered from Quora, never as DTU-specific or longlist-college-specific finding, because the lane's own coverage genuinely does not support that narrower claim.

Third, and following directly from the second point, there is no DTU-specific anonymous student voice at all. The one exception, used separately rather than folded into the anonymous quote table, is a named, consenting, published interview with a DTU alumnus and now Bain analyst, carried in a 180 Degrees Consulting DTU Substack post dated 6 June 2025 [conflicts.md ruling I-R2]; this single named source carries real weight precisely because it is attributable, but it is one data point, not a sample, and sections 6 and 10 treat it that way.

---

## 2. The answer on one page: a proof loop on every campus, not more awareness

**Answer.** BeyondTech's problem is not that DTU or any new campus has never heard of it; recall at DTU is already strong [B11]. The problem is that the proof of BeyondTech's results (50 plus selections, named recruiters, a specific results table) never travels past the handful of students a referral chain happens to reach. The fix argued across this entire document is a calendar-locked proof loop run identically on every campus: capture students earlier and more broadly at DTU, and enter only new campuses where BeyondTech's existing company-specific question bank already applies, borrowing a society's trust before spending a rupee on an ad.

### 2.1 The governing thought

> BeyondTech does not have an awareness problem at DTU or a brand problem elsewhere; it has a proof distribution problem, so it should turn each campus into a calendar-locked proof loop: capture second and third years through societies and mock drives before the referral reaches them at DTU, and enter only those new campuses where its existing recruiter question bank already applies, borrowing a society's trust first and earning its own with a founding cohort.

This sentence is the one the founder could repeat to a stranger, per the skill's own pattern for a governing thought. Every number in this document either supports it directly or is the honest exception that qualifies it.

### 2.2 The three contrarian moves

The brief itself invites three "obvious" answers (run ads for awareness, pick the most famous colleges, recruit ambassadors first). Each one is weaker than it looks once the research base is read closely, and each has a different, evidence-backed answer.

| Pillar | The obvious answer the brief invites | Why it falls short | The answer this document argues |
|---|---|---|---|
| DTU | Spend on Instagram and LinkedIn ads to build awareness | The brief itself says recall is already strong [B11]; a roughly 2,600-student-per-year campus [RB01, model T1] is too small a pool for broad paid reach to pay for itself, and the funnel leaks after awareness anyway: eight lead magnets sit open with no form [RA21, RA24], the sales motion is a 1:1 WhatsApp chat [RA17, RA25], and admission is gated by a fit interview [RA17] | Organic-first at a 21.1% organic to 78.9% paid split that the model derives by ranking channels on cost per acquisition, not by a target ratio chosen in advance [M T3, M T4]. Paid money is spent on retargeting people who already touched an event, a PDF or a mock drive, not on cold prospecting |
| College selection | Pick the most famous names, the old IITs or BITS Pilani by reputation alone | Fame is not fit. BeyondTech's asset is company-specific preparation for the recruiters that actually visit a given campus [B09, B12]. That asset only transfers where the same recruiters hire, and the four contrast-set IITs tested in this project's own scorecard also run alumni-backed consulting clubs with free casebooks, narrowing the prep vacuum BeyondTech would otherwise fill [`PLAN.md` 4.3, section 14] | Rank every candidate campus by recruiter overlap, non-tech offer depth, society surface, prep vacuum, calendar fit and access, using a weighted formula applied mechanically to all 32 scored institutes, not by brand. No IIT reaches the final four picks on this formula, and the document says so plainly rather than engineering a different outcome either way |
| Launch | Recruit campus ambassadors first and run ads | BeyondTech's own ambassador recruitment post drew about 15 reactions [RA35, W13], a tenth of the engagement a Founder's Office internship post drew a week later [RA37, W14]. An ambassador with no local result to point to has nothing to sell, and an unknown brand's ad buys a click, not trust | Trust is built in three steps, in order: borrow it from a campus society via a co-branded case league (the exact format BeyondTech is running with DCG right now, RA38), seed it with a subsidised founding cohort, and only then earn an ambassador layer from inside that founding cohort, so every ambassador is a paying customer first |

### 2.3 The four picks, one line each

The college scorecard (section 14) screens 32 institutes (28 longlist plus 4 contrast IITs) against a 600-student batch-size floor, a recruiter-presence floor and an evidence floor, then ranks survivors by a seven-criterion Fit score out of 5.00 [M T8]. Four picks clear every portfolio constraint (at most two within 300 kilometres of Delhi, at least one South pick, at least one West or East pick, at most one campus per multi-campus institute) and hold up under a 2,000-draw stability test [M T9].

| Pick | Fit score | Stability | One-line reason |
|---|---|---|---|
| BITS Pilani (Pilani campus) | 3.00 | 100.0% | The single best-evidenced pick in the whole set: a recruiter-overlap score built on BITS Pilani's own "University Statistics 2024-25" document independently naming Bain, Kearney, ZS Associates, Deloitte USI and EY as 2025-26 recruiters [RE Pilani RE... per dossier], and a 100.0% stability score meaning it never drops out of the final four under any plausible re-weighting |
| NIT Tiruchirappalli | 2.65 | 100.0% | The highest Fit score in the whole model, and the only South-region college that is both a locked pick and a confirmed zero-incumbent-prep campus, no casebook, no competitor ambassador and no institute-run non-tech training found on campus [RE NIT Trichy dossier] |
| PEC Chandigarh | 2.40 | 97.5% | The North region's fourth pick on a recruiter-overlap score anchored in PEC's own 2024-25 placement report naming ZS Associates, JP Morgan Chase and American Express, one of only three colleges in the whole longlist (besides BITS Pilani and DTU itself) where the recruiter evidence rests on the institute's own document rather than an aggregator, with 97.5% stability, the third-highest in the model [RE PEC dossier] |
| COEP Technological University, Pune | 2.40 | 97.2% | The only West or East region college that clears the screen and survives the stability test, anchored by a confirmed 741 B.Tech graduates a year [NIRF, RE COEP dossier] and five of the twenty anchor recruiters (EY, Flipkart, KPMG, Deloitte, PwC) already visiting |

The reserve bench, reported honestly rather than hidden: BITS Pilani Goa campus (Fit 2.80, excluded only by the one-campus-per-institute portfolio rule, not by merit), NIT Warangal (Fit 2.20), IIT Roorkee (Fit 2.20, stability 5.3%) and IIT Delhi (Fit 2.15, stability 0.0%). No IIT reaches the final four. This is reported plainly, per `PLAN.md` section 4.6's own falsification rule, because it was not engineered either way; the scorecard's own weights, applied mechanically, simply rank old-IIT recruiter overlap and prep-vacuum scores lower than the four picks above, mainly because strong alumni-run consulting clubs at the IITs already fill part of the gap BeyondTech would otherwise occupy.

### 2.4 The DTU budget and split

The DTU plan spends a total cash budget of ₹3,51,650 in the base case [M T4], split 21.1% organic (₹74,246) and 78.9% paid (₹2,77,405 funded across the paid-channel lines) [M T4]. This split is not a target chosen up front; it falls out of ranking all eleven channels by cost per acquisition and funding the cheapest ones first until the 165-enrolment base-case target is met [M T3, M T4]. Of the four paid channels modelled, only two are actually funded in the base case: Meta retargeting of warm audiences (₹2,67,405 for 68.8 enrolments) and campus micro-influencers (₹10,000 for 32.4 enrolments). The other two paid channels, Meta campus-geofence prospecting and LinkedIn school-targeted advertising, receive ₹0 in the base case because the two cheaper channels already cover the target; this is reported as a finding about channel economics, not a decision to abandon those two channels permanently.

### 2.5 The moneyshot

> "₹3.5 lakh at DTU buys 165 enrolments at a blended ₹2,131 each, and the 21% of the budget spent organically delivers 39% of them."

This single sentence is the deck's one moneyshot, per the skill's rule that a deck carries exactly one. Its supporting point: two of the four paid channels earn zero funded budget in the base case because the two cheaper channels (Meta retargeting at a ₹3,889 CAC, campus micro-influencers at a ₹309 CAC) already cover the target on their own [M T3, M T4].

### 2.6 Kill criteria

Each new-campus launch is governed by the same three-checkpoint rule, derived from the bear scenario so that "bear" itself becomes the stop line, not a soft worry [M T14].

| Checkpoint | Stop below | Scale above |
|---|---|---|
| Day 30, founding-cohort applications | 6 | 14 |
| Day 60, founding-cohort fill | 10 | 12 |
| Day 90, founding-cohort offers secured | 2 | 7 |

### 2.7 The 110-word version

BeyondTech already has proof: 50 plus DTU selections this season, named recruiters, a results table most competitors cannot match [B05]. What it lacks is distribution of that proof. At DTU, a ₹3,51,650 organic-first plan (21% organic, 79% paid, both numbers falling out of channel economics, not a target) adds up to 165 enrolments at a blended ₹2,131 each [M T4, M T6]. Outside DTU, four campuses (BITS Pilani, NIT Tiruchirappalli, PEC Chandigarh, COEP Pune) are picked by a seven-criterion recruiter-overlap scorecard, not by rank, and entered through a borrowed-trust, then-seeded, then-earned sequence, never ambassadors first. Each campus pays back inside two seasons in the base case [M T10]. No IIT makes the final four, reported honestly.

### 2.8 What would change our mind

Per `PLAN.md` section 4.6's falsification rules, this document commits in advance to specific signals that would change the recommendation, not just to defending it after the fact.

| If the research showed | Then this document would | What actually happened |
|---|---|---|
| Fewer than four non-IIT colleges clearing the screen at a five-of-twenty anchor-recruiter threshold | Relax the threshold to four and log it, never relax the batch-size floor | This happened: only two non-IIT colleges passed at five or more, so the threshold relaxed to four [section 14, `PLAN.md` 4.6] |
| An old IIT scoring in the actual top four | Report it honestly and let the portfolio rule decide, with weights never retuned to force a different outcome | Did not happen; no IIT reached the top four, and the near-miss is still reported honestly in section 15 |
| DTU's non-tech aspirant pool unsizeable within a factor of two | Report penetration as a range, not a point figure | T1 already reports a range: the serviceable addressable pool runs 1,304 (bear) to 2,608 (bull), base 1,956 [M T1] |
| Paid cost per acquisition at base case beating organic cost per acquisition | Drop the organic-first framing and let the model's own channel ranking set the slide title | Partly happened: two paid channels (micro-influencers at ₹309) already beat several organic lines on cost, so the framing used throughout is "channels ranked by cost", with the 21/79 split reported as an output, not a target met |
| A recommended society on any new campus found inactive (no post in six months) | Replace it with the next society in line by reach | Not triggered; section 16's dossiers name only confirmed, currently active societies as the entry door on each campus |

---

## 3. BeyondTech today: 300+ students mentored on one founder's weekends

**Answer.** BeyondTech is a two-person-mentor-core, 2 to 10 employee company [RA32] that has turned one founder's weekends into a results table strong enough to anchor a case competition: 300+ students mentored, 250+ placed, across 20+ companies over its lifetime [RA01, W01], and 50+ selections this season at DTU alone [B05]. Its offer is a structured, phase-based bootcamp that maps cleanly onto the rounds non-tech recruiters actually run, its proof points are five named, photographed testimonials, and its funnel today is gated at the point of payment but wide open at the point of discovery, which is both its biggest asset and its biggest leak.

### 3.1 Company facts, from the brief and from BeyondTech's own pages

BeyondTech is a non-tech placement accelerator for Tier-1 B.Tech students [B01], founded by Harsh Agarwal after his own experience of "placement chaos", random guides and scattered tutorials with no clear path [B01 case narrative]. The company's own site confirms a lifetime base of 300+ students mentored, 250+ students placed and 20+ companies [RA01], founded 2022, headquartered in Delhi, listed as a 2 to 10 employee company with 14 people shown as associated with the company's LinkedIn page [RA32, RA33]. The company's positioning is explicit: "One course for every non-tech company visiting your campus" [B09], and its stated growth engine is word of mouth, community and founder-led mentorship, which the brief itself says is why DTU specifically is so dense with BeyondTech students [B10].

The flagship offer is the "Non-Tech Placement Mastery Program" [B07], described by the brief as an 11-week live and recorded bootcamp across four phases: consulting foundations (guesstimates, case frameworks, profitability and market entry), analytics mastery (SQL at basic, intermediate and advanced levels, plus data cases), product strategy (product cases, root-cause analysis, KPIs and design) and personalised prep (1 on 1 mock interviews, off-campus guidance and off-campus referrals) [B07, B08]. The site's own week-by-week curriculum runs Week 1 (Guesstimates) through Week 12 (a Graduation Project with no new content), which is one week longer than the brief's own 11-week figure [RA14]; this is the site-hygiene inconsistency flagged once in the conflicts table below (X3) and never used as a second duration figure anywhere in this document.

| Fact | Figure | Tag |
|---|---|---|
| Lifetime students mentored | 300+ | [RA01, W01] |
| Lifetime students placed | 250+ | [RA01, W01] |
| Lifetime companies | 20+ | [RA01, W01] |
| This season's DTU selections | 50+ | [B05] |
| This season's DTU average package | 13 to 14 LPA | [B05] |
| This season's DTU highest package | 47 LPA at Eternal | [B05] |
| Company age | Founded 2022 | [RA32] |
| Company size | 2 to 10 employees, 14 associated on LinkedIn | [RA32, RA33] |

Delivery capacity today is a single weekly live cohort stream: live classes every Saturday from 7 to 8 PM, doubt sessions every Sunday from 6 to 7 PM, with recorded classes released weekly and available on demand [RA19, W04]. The next batch starts 15 January 2027 [RA18, W05], a date that anchors the entire GTM calendar modelled in sections 11, 12 and 21: every DTU activation and every new-campus founding cohort is sequenced against this single fixed date.

### 3.2 The offer mapped to which recruiter round it prepares for

BeyondTech's four-phase curriculum is not a generic skills course; each phase maps onto a specific stage of the selection process non-tech recruiters actually run on Tier-1 campuses, which is precisely the mechanism behind its own positioning line [B09].

| Curriculum phase | What it teaches | Recruiter round it prepares a candidate for |
|---|---|---|
| 1. Consulting foundations | Guesstimates, case frameworks, profitability, market entry [B07] | The guesstimate and case-interview rounds run by consulting-type recruiters such as Bain, ZS Associates, Deloitte and L.E.K. Consulting, all named on BeyondTech's own results tables [B05, B06] |
| 2. Analytics mastery | SQL at basic, intermediate and advanced levels, plus data cases [B07] | The SQL and data-case rounds run by analytics-type recruiters and the analytics arms of consulting firms, for example BCG GAMMA and McKinsey's analytics centre, both on the fixed 20-firm anchor-recruiter list this project uses [`PLAN.md` 7.3] |
| 3. Product strategy | Product cases, root-cause analysis, KPIs, design [B07] | The product-case rounds run by associate-product-manager and product-analyst recruiters such as Flipkart and Meesho, both on the anchor-recruiter list and named in BeyondTech's own testimonial strip (Meesho, RA05, RA51) |
| 4. Personalised prep | 1 on 1 mock interviews, off-campus guidance, off-campus referrals, weekly leaderboard mocks, company-specific previous-year questions [B07, B08] | The final-round fit and HR interviews common to every recruiter type, plus the off-campus application cycle that a campus-only prep course typically ignores |

This mapping is drafted directly from the brief's own phase descriptions [B07, B08] and BeyondTech's own named recruiters [B05, B06, RA51]; a fuller cross-reference against Lane C's selection-process research for each of the twenty anchor recruiters is carried in section 5, written separately once that lane's detail is available.

### 3.3 Proof points: five testimonials, four mentors

A live screenshot of the placement-mastery page's testimonial strip shows five named people with photos and recruiter logos, correcting both the brief's implied count and this project's own first research pass, which had recorded only three [RA51, conflicts.md ruling A-C6].

| Name | Role and recruiter | What they say |
|---|---|---|
| Ayush Pratap Singh | Business Analyst, Meesho | Calls the sessions practical and structured, credits ongoing support and feedback for his placement [RA05] |
| Suhani Sharma | Analyst, Bain & Company | Says the structured approach kept her on track while interning, thanks mentors Harsh and Subham by name [RA06] |
| Ravi (Ravi Shakya) | Business Analyst, OYO | Thanks "Harsh Bhaiya" for concept explanations and mock interviews that helped him identify weaknesses [RA07] |
| Soumya Raj | ExxonMobil | A fifth testimonial surfaced only on direct screenshot review, not in the original text fetch [RA51] |
| Vidhi Balyan | ZS | The fifth testimonial's recruiter, ZS, is already on the fixed 20-firm anchor-recruiter list, so no scorecard change follows from this name [RA51, conflicts.md ruling A-C8] |

ExxonMobil, named only in Soumya Raj's testimonial, is used in this document purely as additional DTU proof-point colour, strengthening the density of BeyondTech's own traction story on slides 3 or 4. It is explicitly not added to the fixed 20-firm anchor-recruiter list in `PLAN.md` section 7.3, and the college-scorecard's recruiter-overlap criterion (C1) is never recomputed against it, per `conflicts.md` ruling A-C8: reopening a fixed list after Lane C had already completed deep selection-process research against the locked twenty would cascade rework across the whole scorecard for one data point.

Four mentors support the programme, not two as the brief's own narrative text implies: Harsh Agarwal (Founder), Subham Mukhopadhyay (Associate, Bain & Co.), Subrat Sarangi (Business Analyst, Amazon) and Akshit Goel (Product Manager, Google) [RA15, conflicts.md ruling X4]. This is not treated as a correction of the brief so much as an under-report relative to the live site, confirmed by direct fetch; the extra two names, Amazon and Google credentials, give a stronger credibility asset to pitch an unfamiliar new campus than the brief's own two-mentor framing suggests.

### 3.4 The funnel as it exists today

BeyondTech's funnel today has an open front door and a human-gated back door, a shape that matters directly to the DTU plan in sections 9 and 11. At the top, eight free lead magnets (an Online Assessments Guide, a Bain Analyst Roadmap, a Meesho Business Analyst Roadmap, a Product Analyst Roadmap, a Business Analyst Roadmap, a Data Analyst Roadmap, a Management Consulting Roadmap and a Projects Guide) sit as open Google Drive links with no sign-in or form of any kind [RA21, W08]. A direct check of each link's page content, not merely its HTTP status, confirmed all eight genuinely open to the public, each returning the public-preview signature (a populated `og:title` tag) rather than Drive's access-restricted page [RA24, conflicts.md's confirmation that this is a fully verified finding, not merely plausible]. A free "Course Sampler", the Guesstimate module, is similarly ungated [W07].

Below the open top, admission is gated through four steps: submit an application form, application review, a culture and fit interview that explicitly assesses "readiness to pay the enrollment fee if selected", then final selection and enrolment, with the fee paid only after acceptance [RA17, W06]. No price is shown anywhere on the public site at any stage of this process [RA17]. Past the gated application, the sales motion is a 1 on 1 WhatsApp chat with a prefilled message, rendered here without the live page's own closing punctuation mark per this document's style rule ("Hi, I'm interested in BeyondTech services. Can you help me get started?") [RA25, superseding the differently worded seed capture per `conflicts.md`], alongside a "Request a callback" CTA that this research confirmed sits on the placement-mastery page specifically, not on the contact page as originally assumed [RA20, RA29, conflicts.md ruling A-C2].

The shape this produces is a funnel with a wide, ungated mouth and a narrow, human-staffed throat: anyone can get the company-specific prep material for free, but every single conversion past that point runs through either an interview or a direct chat with the founder's own number, which is exactly the founder-presence bottleneck the brief itself names [B11, B13].

| Funnel step | Gated or open today | Evidence |
|---|---|---|
| Eight roadmap PDFs | Open, no form, no sign-in | [RA21, RA24] |
| Guesstimate sampler module | Open, free to watch | [W07] |
| Application form | Gated, requires a submission | [RA17] |
| Application review | Gated, human review | [RA17] |
| Culture and fit interview | Gated, tests "readiness to pay" | [RA17] |
| Payment and enrolment | Gated, fee paid only after acceptance, no price shown publicly | [RA17] |
| Post-application contact | 1 on 1 WhatsApp chat with the founder's own number | [RA25, RA26] |

### 3.5 Conflicts table X1 to X6 and their rulings

Six conflicts surfaced directly from transcribing the brief, each ruled at Gate G1 per `conflicts.md`.

| # | Conflict | Ruling |
|---|---|---|
| X1 | "40 selections across 14 organisations" [B04] against "50+ so far" [B05] | Use "50+ selections" as the headline figure throughout, since it is the brief's own later, more specific traction statement. The "40 selections across 14 organisations" figure is quoted once, as the brief's own at-a-glance framing, never as a second independent figure alongside the 50+ [conflicts.md] |
| X2 | 13 to 14 LPA average, 47 LPA highest at Eternal [B05] against ₹15 LPA average, ₹60 LPA highest on the website [W02] | Use the brief's figures on every DTU-specific slide, since B05 is this season's figure and is case canon; the website's figures are an undated, broader lifetime marketing claim, confirmed by direct fetch [RA12] with no season stated, and are not used anywhere else in this document |
| X3 | 11-week bootcamp [B07] against 12 listed weeks and an "8 Month Course / 12 Months" stat line on the site [W02, W03, confirmed RA13, RA14] | Say "11-week bootcamp" everywhere, matching the brief. The site's own internal inconsistency (12 listed weeks, one of which has no new content, against an unmatched "8 Month / 12 Months" stat line) is noted once here as a site-hygiene observation, not used as a second duration number anywhere else |
| X4 | Two mentors named in the brief's narrative against four listed on the live site [RA15] | Use four, confirmed live by direct fetch; this is an under-report relative to the site, not a true conflict |
| X5 | "13 to 14 LPA average, one of the highest" [B05] against DTU's own official campus-wide figures [RB07] | BeyondTech's 13 to 14 LPA figure sits close to, not above, DTU's own official 2023-24 median of ₹13,25,000 [RB07]. This document never claims BeyondTech's average beats the DTU campus average or median; the figure is credible precisely because it tracks the institute's own median rather than inflating it, a trust point, not a differentiation point |
| X6 | "Tier-1" is undefined in the brief | Defined in this document as institutes of national importance and state flagships whose B.Tech median CTC and recruiter list overlap the four core campuses, operationalised by the screen in section 14 |

---

## 4. What the three links reveal that the brief does not

**Answer.** The brief's own three embedded hyperlinks (website, company LinkedIn, founder LinkedIn) [B21] surface seventeen findings the case document itself never states, and together they change the shape of the recommended plan more than any single number in the brief does. The single most consequential pattern across all seventeen is that BeyondTech already has an open, generous top of funnel and a working trust-borrowing mechanism running right now in the form of this very case competition; the job is to repeat both deliberately rather than invent either from scratch.

### 4.1 W01 to W17, one by one, with the implication for the GTM plan

| ID | Finding | Implication for the plan |
|---|---|---|
| W01 | Site stats: 300+ students mentored, 250+ placed, 20+ companies [RA01] | Gives a lifetime base against which current DTU penetration (section 8) can be sense-checked; it also means the deck's claim of growth is against a real, if small, existing base, not a cold start |
| W02 | Placement-mastery page: average ₹15 LPA, highest ₹60 LPA; "8 Month Course / 12 Months" stat line [RA12, RA13] | Conflicts with the brief's own figures (B05, B07); resolved by conflicts X2 and X3 above, never blended into one sentence |
| W03 | Week-by-week curriculum runs Week 1 to Week 12 [RA14] | Confirms the brief's 11-week figure undercounts by one week of no-new-content graduation project; the plan treats this as a minor site-hygiene note, not a substantive change to the offer |
| W04 | Live class every Saturday 7 to 8 PM, doubt session every Sunday 6 to 7 PM, recorded classes weekly [RA19] | Delivery capacity is one cohort stream; this is directly relevant to the founder-hours model (T11, section 9) and to how many new campuses can realistically be onboarded in one year without hiring |
| W05 | Next batch starts 15 January 2027 [RA18] | Anchors the whole GTM calendar: every DTU activation and every new-campus founding cohort in sections 11, 12, 18 and 21 is sequenced against this date |
| W06 | Admission is gated: application, review, fit interview that tests "readiness to pay", then payment; no price shown [RA17] | The funnel has a human step per applicant, and price opacity is itself a conversion variable (insight I10); both feed the founder-hours model and the funnel-leak analysis in section 9 |
| W07 | Free "Course Sampler": the Guesstimate module is free to watch | An existing, already-built lead magnet the DTU plan can route both paid and organic traffic toward before the gated application, at zero new production cost |
| W08 | Resources page: 8 free PDFs served as open Google Drive links [RA21, confirmed genuinely open at RA24] | The strongest single structural insight in this lane (I2): company-specific roadmaps, BeyondTech's actual differentiator, are given away with zero lead capture. The top of the funnel leaks by design, and gating even a fraction of this content behind an email or WhatsApp capture is close to a free improvement |
| W09 | Mentors listed: Harsh Agarwal, Subham Mukhopadhyay (Bain & Co.), Subrat Sarangi (Amazon), Akshit Goel (Google) [RA15] | Four mentors, not two, gives a stronger credibility asset for pitching an unfamiliar new campus than the brief's own narrative implies (conflict X4) |
| W10 | Testimonials, originally recorded as three, corrected to five by direct screenshot [RA51] | A richer proof-point set than first logged; see section 3.3 |
| W11 | Contact is a WhatsApp number with a prefilled message; a "Request a callback" CTA | Confirms the sales motion past the gated application is 1 on 1 chat, not a scalable form-to-calendar flow; feeds the founder-hours model directly |
| W12 | Company LinkedIn: approximately 3,000 followers, founded 2022, Delhi, 2 to 10 employees, 14 people associated [RA31, RA32, RA33] | Sizes BeyondTech's owned digital audience, which is the realistic ceiling on free organic reach before any paid spend is needed |
| W13 | LinkedIn post, about one month old: recruiting campus ambassadors from DTU, NSUT, Thapar and BITS Pilani, about 15 reactions [RA35] | An ambassador attempt already exists and pulled weak engagement; also confirms BITS Pilani was already on the founder's own radar before this project's scorecard independently selected it |
| W14 | LinkedIn post, about one week old: Founder's Office intern hiring, about 269 reactions, 26 comments [RA37] | Job-type posts pulled about 18 times the ambassador post's engagement (insight I4, detailed below): students respond to career upside for themselves, not to a brand-service role |
| W15 | LinkedIn post, about one week old: the DCG case competition, prize pool ₹40,000+, about 49 reactions, 19 comments [RA38] | This competition is itself a BeyondTech acquisition play (insight I5, detailed below): a society lends reach and trust, and a prize pool buys a high-intent audience |
| W16 | Founder's Topmate: 312 bookings, 4.9 of 5 from 14 ratings, low-ticket items at ₹49 to ₹50, a free cold-email template, "4M+ impressions", DTU class of 2023 [RA41, RA43, RA44] | A second owned funnel and a working price-ladder precedent (free item, then a ₹10 to ₹50 paid item, then the full cohort) that the new-campus launch plan reuses in section 18 |
| W17 | Founder's personal LinkedIn returned HTTP 999 to automated fetch on two separate attempts [RA40] | Marked NOT FETCHED rather than guessed; no browser-automation channel was available in this research pass, so this remains a genuine gap, not a fabricated workaround |

### 4.2 Insight I4: the ambassador post against the intern post

BeyondTech's own LinkedIn history contains a controlled natural experiment in what makes students act. A campus-ambassador recruitment post, naming DTU, NSUT, Thapar and BITS Pilani, drew about 15 reactions and 2 comments [RA35, W13]; a second, separate ambassador post around the same time drew about 9 reactions [RA36]. One week later, a Founder's Office internship post, remote, paid, in growth, strategy and operations, drew about 269 reactions and 26 comments [RA37, W14]. That is roughly eighteen times the reaction count of the stronger ambassador post.

| Post type | Age at capture | Reactions | Comments | Tag |
|---|---|---|---|---|
| Campus ambassador recruitment (post 1) | About 1 month | 15 | 2 | [RA35, W13] |
| Campus ambassador recruitment (post 2) | About 1 month | 9 | not shown | [RA36] |
| Founder's Office intern hiring | About 1 week | 269 | 26 | [RA37, W14] |
| DCG case competition announcement | About 1 week | 49 | 19 | [RA38, W15] |

The implication for the launch plan (section 17 to 19) is direct: an ambassador role framed as brand service for BeyondTech underperforms badly against a role framed as a career opportunity for the student, which is exactly why this document's ambassador design in section 19 recruits from inside a paying founding cohort and frames the role around the ambassador's own resume and network value, not around loyalty to the brand.

### 4.3 Insight I2: the eight ungated lead magnets

BeyondTech's resources page gives away eight company-specific roadmaps (Bain, Meesho, and five others) with no email, no WhatsApp number and no sign-in required [RA21, confirmed genuinely open at RA24]. This is a confirmed finding, not a plausible one: a direct content check of each Drive link's page, not merely its HTTP status, found the public-preview signature on all eight, with no "Request access" wall anywhere [RA24].

| Resource | What it covers | Gate status |
|---|---|---|
| Online Assessments Guide | Question types, evaluation methods, skills tested for on-campus assessments | Open [RA21, RA22] |
| Bain Analyst Roadmap | Test formats, case expectations, interview structure | Open [RA21, RA22] |
| Meesho Business Analyst Roadmap | Online assessment, assignment and interview stages | Open [RA21, RA22] |
| Product Analyst Roadmap | Skills, tools, analytics fundamentals, product thinking, project ideas | Open [RA21, RA22] |
| Business Analyst Roadmap | Skills, tools, problem-solving frameworks, real-world projects | Open [RA21, RA22] |
| Data Analyst Roadmap | SQL, Excel, Python, dashboards, case studies, portfolio projects | Open [RA21, RA22] |
| Management Consulting Roadmap | Guesstimates, case cracking, problem structuring, communication frameworks | Open [RA21, RA22] |
| Projects Guide for Non-Tech Profiles | Curated project list for a role-relevant portfolio | Open [RA21, RA22] |

The implication is close to a free lever: BeyondTech is already producing the exact content (company-specific, differentiated, free) that a gated lead magnet strategy depends on; it is simply not capturing a single lead from any of it today. Section 11's DTU plan treats a first pass at light-touch gating (email or WhatsApp capture, not a hard paywall) on a subset of these resources as one of its eleven channels [M T3, channel C-ORG-4].

### 4.4 Insight I5: the DCG competition as the launch mechanism in miniature

The case competition this document is written for is, itself, the clearest working example of the exact mechanism this document recommends for new-campus launches. A society (DCG) lends its own reach and credibility to BeyondTech; a prize pool of ₹40,000 or more buys a high-intent audience of students who would not otherwise engage with an unknown placement-prep brand [RA38, W15]. This single post drew about 49 reactions and 19 comments, more than three times the stronger ambassador post's engagement [RA35, RA38], despite the ambassador post asking for less commitment from a reader. Section 17's "borrow it, seed it, earn it" ladder is not a theoretical construct; it is a description of what BeyondTech is already doing with DCG, generalised into a repeatable, costed playbook for four more campuses.

| Step in the mechanism, as DCG already demonstrates it | What BeyondTech contributes | What the society contributes |
|---|---|---|
| Borrow | A costed case competition, a question bank and mentor time | Its own name, its own channel reach, its own member base |
| Seed | A prize pool of ₹40,000 or more [RA38, W15] | A ready, high-intent audience that would not engage with a cold ad |
| Earn | A results story (selections, named recruiters) generated from this one campus | Local credibility for a second, repeatable activation next season |
