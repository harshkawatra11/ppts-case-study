## 0. Document control

**Answer.** This document is the research base behind Team IdeaForge's answer to PIVOT '26 Round 1, "Life After the Ban". It argues one verdict, that Dream11 should sharpen its pivot into India's free cricket skill league, and every number in it carries a tag that resolves to the case, a dated public source, a review-mining output, a numbered assumption or the Python model. The source hierarchy in section 0.3 decides which figure wins when two disagree, and the version block in section 0.4 pins the model run and the review scrape so that a reader can reproduce any figure.

### 0.1 Purpose and reader

The reader is the Dream11 CEO, as the case frames it: a new Head of Product owes the CEO a clear-eyed answer to "will this pivot work, and what would you change?" [C Q1]. The judges at the IIM Lucknow IT & Product Management Club score four questions and a stress test against five criteria, and the case says plainly that it judges the quality of reasoning rather than the direction chosen [C J1] [C J2] [C J3] [C J4] [C J5]. The eight-slide deck has to be followable in five minutes [C J5]. That constraint is the reason this document exists. A deck of that size can carry a finding and its headline number, but it cannot carry the derivation, the counter-arguments, the source conflicts or the assumptions behind a figure. This document carries them, so that any judge who challenges a slide can find the working behind it in one place.

The document does four jobs.

| Job | What it means in practice | Where |
|---|---|---|
| Argue | State the verdict, defend it against the two obvious answers and score five options symmetrically | Sections 2, 9, 10 |
| Evidence | Lay out the fact base, the review-mining results and the model, with every figure tagged | Sections 3 to 8, appendices A to C |
| Stress | Test the recommendation against a ban reversal, a tax at 28% or 40%, and nine named risks | Sections 15, 16 |
| Disclose | State assumptions, method limits, source conflicts and AI use in plain words | Sections 0, 17, 20, appendix E |

The deck and this document are meant to agree to the digit. Wherever a section corresponds to a slide, the section names the slide as an exhibit. Where a headline number is modelled, it comes from one JSON file, so a change in an assumption moves the deck, the text and the tables together [M].

### 0.2 How to read: the tag legend

Every number and every dated claim ends with a bracketed tag. The tags tell the reader how far to trust the figure and where to check it. A tag on a sentence covers every number in that sentence unless a second tag follows a specific figure.

| Tag | Meaning | Resolves to | Trust level |
|---|---|---|---|
| `[C ID]` | A fact stated in the case document, by the ID given in the case transcription (for example F05, L2, T7, Q1, X4) | `case/01-pivot26-case.md` | Fixed. The case is never overwritten |
| `[S##]` | An external source, by its number in the source register | Appendix A, and the register S01 to S47 plus later additions | Depends on the tier in section 0.3 |
| `[R##]` | An output of the app-store review mining. R01 is average rating by period, R02 is theme share by period, R03 is the monthly rating and 1-star series, R04 is a verbatim review quote | `research/reviews/review_outputs.json`, appendix C | Public reviews only. Association, not causation |
| `[A##]` | A team assumption, numbered A01 to A33 | Section 17 and the model | An estimate. Never presented as a fact |
| `[M]` | A model output derived from the case facts, researched facts and assumptions | `model/model_outputs.json`, appendix B | As good as the inputs it names |

Four labels appear beside a figure when the tag alone is not enough.

| Label | Meaning |
|---|---|
| (est.) or "assumption" | The figure depends on an assumption from the register. Each paragraph that contains one names the assumption ID and uses one of those words once |
| (indicative) | A review theme with coding precision under 70 percent in the manual check, or a period with a very small sample. The figure shows direction only |
| (listing, unverified) | A price or figure seen on a reseller or listing page but not confirmed on an official page |
| [snip] | A blog or coupon-site source used for context only, never as the sole support for a number that appears on a slide |

The reading conventions are uniform. Money is in Indian rupees with Indian digit grouping (₹6,759 Cr, ₹2.5 lakh crore). Fan counts are in millions (M). A negative number carries the minus sign (−479). Ranges are written with "to". Dates are written day, month, year, and financial years end in March. Where the model gives a figure to one decimal place, the text keeps that decimal, and where a source gives a rounded number, the text keeps the rounding, because a precision the source does not support would be false.

### 0.3 Source hierarchy

Public reporting on Dream11 disagrees with itself in a handful of places, and the case disagrees with some of it. The rule for every such clash is fixed in advance. The document uses the first tier in the table below that carries the figure.

| Tier | Source type | Examples in this document | How it is used |
|---|---|---|---|
| 1 | The case document | PIVOT '26 case, IDs F, L, T, C, TN, Q, ST | Never overwritten. If public reporting differs, the case figure is used and the clash is logged in appendix E |
| 2 | Court records, gazette notifications, GST Council and ministry releases | Supreme Court judgment 2026 INSC 595, 56th GST Council decision, MeitY reply in Parliament | Preferred for legal and tax facts. Where the primary text was not retrieved, the row says so |
| 3 | Company releases and filings reported by RoC-based outlets | Entrackr, Inc42 and Tofler-style reporting of Dream Sports results | Preferred for financials and headcount |
| 4 | Major business press | Business Standard, Economic Times, Mint, Business Today, exchange4media, Storyboard18 | Used for events, quotes and market figures |
| 5 | Trade and sports press | best media info, Variety, BCCI releases, Outlook Respawn | Used for calendar facts and industry context |
| 6 | Blogs and coupon sites | Fee explainers, reseller price listings, aggregator fixture lists | Context only, tagged [snip], never the sole support for a slide number |

The hierarchy settles three clashes that matter for this document.

| Clash | Tier 1 to 3 position | Lower-tier position | Resolution |
|---|---|---|---|
| When paid contests stopped | 21 Aug 2025, the day the Bill passed [C F05] | One secondary report gives a date in Jan 2026 | The case governs. The secondary report is not cited |
| Size of the tax dispute after the 27 May 2026 ruling | Near ₹2.5 lakh crore [C L2], described in trade reporting as the aggregate GST in dispute [S19] | A lower planning figure of about ₹1.2 lakh crore was not found on any page | The case figure is used. The lower figure is dropped |
| GST rate if paid fantasy returned | 28% of deposit value, as the case sets the stress test [C ST] | 40% for online money gaming from 22 Sep 2025 [S18] [S38] | Both are modelled. The case rate is treated as the milder of the two |

### 0.4 Version block

Every modelled and review-derived number in this document comes from one of two pinned runs. A reader who re-runs either script should reproduce the tables in appendices B and C digit for digit.

| Item | Value |
|---|---|
| Model file | `model/dream11_pivot_model.py`, writing `model_outputs.json` and `model_tables.md` |
| Model run timestamp | 2026-09-29T19:17:39 [M] |
| Model hash | 9861e27587, recorded in `model_outputs.json` under `meta.hash` [M] |
| Model scenarios | Bear, base and bull, with the base case used unless a scenario is named |
| Model headline | 12-month revenue ₹129.6 Cr (bear), ₹249.7 Cr (base), ₹432.3 Cr (bull) against a ₹236 Cr cost base; written "₹250 Cr" in headlines [M] |
| Review-mining scrape date | 29 Sep 2026 |
| Review-mining window | 1 Jun 2025 to 28 Sep 2026, Google Play India (English and Hindi) and Apple App Store India |
| Review-mining sample | 29,248 Dream11 reviews (P0 11,514; P1 8,230; P2 9,309; P3 195) and 13,511 FanCode reviews, 42,759 in total [R01] |
| Codebook | Version 2, twelve themes T01 to T12, with a manual precision check (section 20 and appendix C) |
| Case currency date | The case is current to 21 Sep 2026; later announcements are used only where cited |
| Deck | 11 slides in Figma Slides: cover, 8 core slides, 1 appendix slide, thank-you |

The model was re-run once during drafting, when the stress-test tax arithmetic was corrected to apply 28% or 40% to deposit value rather than to a tax-inclusive amount. Only the section 15 numbers moved. Revenue, cost, segment, metric and scoring outputs are unchanged, and the hash above is the one for the corrected run.

Two dated events fall after the case's cut-off and are treated as follows. The BCCI confirmed on 23 Sep 2026 that the IPL 2027 player auction will be held in Goa in December 2026 (Business Today, 24 Sep 2026). The 57th GST Council meeting, first set for 12 Sep 2026, was postponed to 7 Oct 2026 (Storyboard18, 7 Sep 2026), and the outcome was not known when this document was compiled on 29 Sep 2026. A recheck on or after 7 Oct 2026 could add a dated line to section 4 before the 10 Oct 2026 deadline [C FMT3].

### 0.5 Verification status of the fact base

The fact base was assembled in three raw tables (company, market and competition, law and behaviour) and then checked row by row against the cited pages. Statuses used below are the checker's own: VERIFIED means the figure was found on the cited page, CORRECTED means the page gave a different figure that replaced the working figure, and NOT FOUND means no source could be located.

| Raw table | Scope | Check result | What it means for this document |
|---|---|---|---|
| R-A company | 20 rows on Dream11, Dream Sports and FanCode | 13 verified (several against the case), 3 partly verified (the refund line without the product name, the DGGI notice figure without its status, the FanCode profile without the shop clause), 1 corrected (the FY25 one-time tax), 2 not found (platform fee source, FanCode FY24 and FY25 revenue), 1 filled by the scrape | Not-found rows are never used as numbers |
| R-B market and competition | 18 rows, five peer rows and three new rows | 6 verified, 7 corrected in full or in part (Lumikai hedging, FanCode annual price, FPL count, sports ad share, CPM benchmarks, market size, engagement figures), 4 not found, five peer rows filled | Figures verified by search-result text only are marked as such where used |
| R-C law and behaviour | 15 rows plus three new rows | 7 verified, 4 corrected (definition wording, hearing dates, the judgment quote, the football-fantasy study), 2 partly verified (Rules, precedents), 2 not checked (Hook Model, Self-Determination Theory), 3 new rows unverifiable in part | Legal rows carry the checker's wording. Rule numbers were not found and are not cited |
| R-D review mining | Scripted scrape and coding | Reproducible by script, with a manual precision check of 20 to 40 reviews per theme | Themes under 70 percent precision are labelled (indicative) |

Two cautions apply to every "verified" status. The page-check tool returns a machine-written summary of each page, not the page itself, so snippets are as close to verbatim as the tool returned, and several publishers returned an access error for some pages (exchange4media, Variety, Business Standard, Cricbuzz, PIB, MeitY and others). Where a figure rests on search-result text alone, the raw table says so, and this document repeats that qualifier. The exception is the Supreme Court judgment, whose PDF was read directly. Figures that could not be confirmed on any page were removed from the deck and are kept out of this document's argument; appendix E lists what was removed and why.

### 0.6 A note on frameworks

The argument in section 2 follows a meta-playbook for case-competition decks: an action title on every slide, one contrarian recommendation defended against the obvious answers, one "moneyshot" number decomposed into named parts, symmetric treatment of alternatives and a three-scenario view of the numbers. That playbook was built from published winning decks that are mostly M&A and finance cases. The structural and rhetorical patterns carry across case types with reasonable confidence. The named frameworks used later in this document (Porter's Five Forces, jobs to be done, VRIO, the Seven Powers, the Blue Ocean ERRC grid, Playing to Win, RICE, the Hook Model and Self-Determination Theory) are applied to a product-strategy case, so they are lenses that organise the evidence, not claims that the case was previously studied with them. Where a framework score is a judgement, the document says so and shows the scoring inputs.

### 0.7 Data conflicts in one table

Appendix E carries the full log. The eleven clashes below are the ones a judge is most likely to notice.

| Topic | Position one | Position two | Used here |
|---|---|---|---|
| Paid contests stopped | 21 Aug 2025 [C F05] | A later date in one secondary report | 21 Aug 2025 |
| Share of revenue from paid contests | "Roughly 95%" and all of the profit, per the CEO [C F05] | "More than 90%" in another outlet [S10] | About 95%, attributed to the CEO |
| GST on deposits | 28% [C ST] | 40% from 22 Sep 2025 [S18] | Both modelled, on deposit value |
| Tax in dispute after the ruling | Near ₹2.5 lakh crore [C L2] | No second figure found on any page | The case figure |
| Users | 250M (Feb 2026) and 300M (Aug 2026) claimed [C T5] [C T7] | 50M monthly active target for Watch Along [S15] | 300M is a registry; 50M is a ceiling, never an actual [A33] |
| Staff redistributed | 700, about 15% left [C T4] | About 800 redeployed, under 200 left in Dream11 (Angel One) | 700 and about 15%, the case figure |
| Staff, group-wide | 700 in Dream11 [C T4] | About 950 across Dream Sports [S05] | Both are true at different scopes |
| Units after the split | Eight [C U1] | Seven named in one report [S05] | Eight |
| FY25 one-time tax | An earlier working figure of ₹503.7 Cr | ₹575 Cr one-time tax [S24]; ₹623.6 Cr total exceptional items [S04] | About ₹575 Cr for the reverse-flip tax |
| FanCode unlimited yearly pass | An earlier working figure of ₹999 | ₹1,499 a year and ₹199 a month (Autocar India, 4 Mar 2026); ₹999 is the motorsports pass | ₹1,499 a year, ₹199 a month |
| JioHotstar reach | 530M monthly active users in the quarter | 451M average for FY26 (Storyboard18) | 530M labelled "Q1 FY27"; 451M for the year |

### 0.8 AI-use disclosure

The case allows AI tools for research and drafting and requires that they are disclosed in the appendix [C FMT2]. The disclosure is repeated here in full. Team IdeaForge used Claude, made by Anthropic, for desk research, for drafting this document and the slide copy, for writing the Python financial model, for writing the review-mining scripts and for writing the Figma build scripts that draw the deck. The team checked every figure against its cited source. No AI output is presented as primary research. No interview, survey or fan quote was generated: every fan voice in this document and in the deck is a verbatim public app-store review, attributed by store and month, with no reviewer name collected [R04].

The division of labour is worth stating precisely, because "AI-assisted" can hide a great deal.

| Task | What the AI did | What the team did |
|---|---|---|
| Desk research | Searched public pages, summarised them into fact tables with the source and a short snippet | Checked each figure against its cited page and corrected or removed what did not hold |
| Model | Wrote the Python code from a specification | Fixed every assumption and its rationale, and ran the model to confirm that it reproduced the reference outputs |
| Review mining | Wrote the scraper and the coder, and produced counts and tables | Read the coded samples and judged precision by hand; chose which verbatim reviews appear |
| Drafting | Drafted prose from the fact tables and the model | Fixed the argument, the verdict and the numbers in advance, and edited for accuracy and voice |
| Deck | Wrote the scripts that place shapes and text in Figma | Set the layout, the palette and the copy, and reviewed the rendered slides |

### 0.9 Document map

| Section | What it settles | Main slide exhibit |
|---|---|---|
| 0 and 1 | Sources, versions, coverage of every case requirement | Slide 10 |
| 2 | The answer in one page | Slides 1 and 2 |
| 3 and 4 | The business that was and the law and tax that ended it | Slides 2 and 9 |
| 5 and 6 | One year of pivoting and the competition for match-day attention | Slides 3 and 5 |
| 7 and 8 | Who left, who stayed, and the five segments | Slides 3 and 4 |
| 9 and 10 | The verdict on the pivot and the split with FanCode | Slide 5 |
| 11 and 12 | The core loop, the 12-month roadmap and the named cuts | Slides 6 and 7 |
| 13 and 14 | Revenue, cost, metrics and the 90-day signal | Slides 8 and 9 |
| 15 and 16 | The stress test and the risk register | Slide 9 |
| 17 to 20 | Assumptions, slide blueprint, judge questions, method and limits | Slide 10 |
| Appendices A to E | Bibliography, model tables, review tables, glossary, data conflicts | Slide 10 |

## 1. Case coverage matrix

**Answer.** Every requirement in the case maps to a named slide and a named section of this document, with a one-line answer beside it: the four questions, the stress test, the five marks of a strong submission, the five mark-losers, the four format rules, the five judging criteria and the five research guidelines. The self-check at the end of the section shows how each of the five mark-losers is avoided and where a judge can verify the claim. One expectation is met only in part, and the section says so: no fan interviews were run, and public reviews stand in for them.

### 1.1 How the matrix is built

The IDs are the ones added to the case transcription: Q1 to Q4 and ST for the task, E1 to E5 for what strong submissions do, X1 to X5 for what costs marks, FMT1 to FMT4 for format, J1 to J5 for judging and RG1 to RG5 for research guidance [C Q1] [C E1] [C X1] [C FMT1] [C J1] [C RG1]. Slide numbers refer to the 11-slide deck: slide 1 is the cover, slides 2 to 9 are the eight core slides, slide 10 is the one appendix page and slide 11 is the thank-you. The thank-you slide sits outside both the main-deck count and the appendix count, and the case does not forbid it. Section numbers refer to this document.

The one-line answers below carry the headline number and its tag. They are deliberately short. Each is expanded in the section named in the fourth column.

### 1.2 The task: four questions and the stress test

| ID | Requirement | Slide | Doc section | One-line answer |
|---|---|---|---|---|
| Q1 | Segment by behaviour who still opens Dream11 and who left, and what each group wants | 3, 4 | 7, 8 | At most 16.7% of the 300M registry, about 50M, was monthly active by mid-2026 [A33] [M]. Five behavioural segments split into leavers (S1 and S2 are 51.4% of the 70.6M who left, est.) and stayers, and Cricket Brains plus League Captains, about 13.2M fans (est.), are the core [M] |
| Q2 | Keep, sharpen or replace "global sports engagement platform", and define Dream11's job relative to FanCode | 5, 2 | 9, 10 | Sharpen. A free cricket skill league scores 4.35 of 5 against 2.60 for the declared destination and 3.45 for a return to paid fantasy [M]. FanCode is where fans watch, Dream11 is where they play, joined by four seams |
| Q3 | Design the core loop, sequence 12 months and name what will not be built | 6, 7 | 11, 12 | The loop is pick, call, prove, rank, repeat. It ships in four phases on the 2026/27 cricket calendar, before the Australia Tests and again on IPL 2027 [S33] [S35]. Seven things are cut, from own streaming to a social feed |
| Q4 | Show how Dream11 earns without prizes; one north-star metric, three or four supporting metrics, targets at 6 and 12 months, a 90-day signal | 8, 9 | 13, 14 | Five legal lines earn ₹249.7 Cr in 12 months against a ₹236 Cr cost base [M]. The North Star is Weekly Team-Builders, from 5.0M (est.) to 7.5M by 1 Mar 2027 and 10.0M by Sep 2027 [A05] [M]. The 90-day signal is read on 15 Jan 2027 |
| ST | Test the answer against a Supreme Court strike-down of the ban with 28% GST still applying to deposits | 9, appendix | 15 | The strategy holds. Per ₹100 of entries, Dream11 keeps ₹12.71 before Oct 2023, ₹1.0 at 28% of deposit value and −₹5.0 at 40% in the mid case (est.), so it stays free [M] [A29] |

### 1.3 What strong submissions do

| ID | Requirement | Slide | Doc section | One-line answer |
|---|---|---|---|---|
| E1 | Commit to one direction and defend it against the obvious alternatives | 2, 5 | 2, 9 | One verdict, sharpen. It is defended against the declared destination (option A, 2.60) and the wait-for-court path (option E, 3.45), and against fold-into-FanCode (B, 2.90) and creator media (C, 2.75) [M] |
| E2 | Back every claim with evidence and cite it | All, 10 | All | Every number carries a tag. Every slide has a pipe-separated source line, and slide 10 lists the sources, the review-mining method and the load-bearing assumptions |
| E3 | Talk to real fans | 3, 4, 10 | 7, 20 | Not done in Round 1, and said plainly. Public reviews stand in: 29,248 Dream11 and 13,511 FanCode reviews, coded by a published codebook [R01]. Section 20 sets out 12 interviews by segment as the next step |
| E4 | Treat FanCode as part of the answer | 5, 6, 7, 8 | 10 | FanCode is the watch half of the job split, the destination of the "Watch on" links, the partner in a play-along overlay and the source of a referral line worth ₹0.5 Cr in the base case [M] |
| E5 | Tie every metric to the strategy, with numbers and dates | 9 | 14 | Each metric maps to a link in the loop and to a revenue driver, with baselines, a 1 Mar 2027 target and a Sep 2027 target, and a kill threshold dated 15 Jan 2027 [M] |

### 1.4 What costs marks, and how each is avoided

| ID | Mark-loser | How the deck and this document avoid it | Where to verify |
|---|---|---|---|
| X1 | Listing every option without choosing one | Five options are scored on the same six criteria with fixed weights, one is marked IDEAL and four are marked REJECT with a reason each | Slide 5; section 9; model T5 |
| X2 | Numbers with no source, or assumptions left unstated | Every figure is tagged. Assumptions A01 to A33 are numbered, with a rationale each. Assumed numbers on core slides carry "est." or their ID | Sections 17 and 18; slide 10 |
| X3 | "Use AI to personalise" with no explanation of what changes for the fan | Three fan-visible AI jobs, Scout, Coach and Digest, each stated as what the fan sees. A general chatbot is a named cut | Slide 6; section 11 |
| X4 | Revenue ideas that bring back money contests in disguise | A three-question legality test (no stake, no prize, money never buys an outcome) is applied to the five revenue lines and to three rejected ideas | Slide 8; section 13 |
| X5 | A deck that needs a presenter to make sense | Action titles carry a number, and each core slide has one so-what element. Reading the eight headlines and eight elements in order tells the whole story | Section 1.7; slide 2 |

### 1.5 Format, judging and research guidance

| ID | Requirement | Slide or doc | One-line answer |
|---|---|---|---|
| FMT1 | Main deck of up to 8 slides, not counting the cover | Slides 2 to 9 | Eight core slides plus the cover, which meets the limit exactly [C FMT1] |
| FMT2 | Appendix of up to 3 pages, listing sources and disclosing AI tools | Slide 10 | One appendix page. It carries the method, the key assumptions, the source list and the AI-use statement [C FMT2] |
| FMT3 | One PDF, at most 25 MB, named TeamName_R1.pdf | Export | The file is `TeamIdeaForge_R1.pdf`, exported from Figma. The file size is checked at export [C FMT3] |
| FMT4 | Optional 2-minute video, linked on the cover | Slide 1 | The cover reserves a line for the video link, to be filled if the video is recorded [C FMT4] |
| J1 | Product thinking and solution quality, 25% | Slides 5, 6; sections 9 to 11 | A clear verdict with honest reasons the four alternatives lose, and a specified core loop [C J1] |
| J2 | Problem understanding and user insight, 20% | Slides 3, 4; sections 7, 8 | Five segments defined by behaviour, grounded in review evidence and a labelled model [C J2] |
| J3 | Feasibility and prioritisation, 20% | Slides 6, 7; sections 11, 12 | A four-phase roadmap on the real fixture calendar, a RICE-scored feature list and seven named cuts [C J3] |
| J4 | Business impact and success metrics, 20% | Slides 8, 9; sections 13, 14 | A legal revenue model with three scenarios, a North Star with 6 and 12 month targets and a dated kill signal [C J4] |
| J5 | Structure, clarity and presentation, 15% | All slides | Action titles, one so-what per slide and a five-minute reading path [C J5] |
| RG1 | Use the app and spend a match day in both | Not claimed | This document reports no first-hand match-day log. Public review evidence on both apps is used instead, and a match-day walkthrough is part of the validation plan in section 20 [C RG1] |
| RG2 | Primary research with method and sample size in the appendix | Slide 10; section 20 | No interviews or surveys were run. The appendix says so and gives the next-step plan of 12 interviews [C RG2] |
| RG3 | Public sources, including app-store reviews | Slides 3, 4, 10; sections 5 to 8 | 42,759 store reviews and the reporting listed in appendix A [C RG3] |
| RG4 | Account for and cite anything announced after 21 Sep 2026 | Section 0.4 | The IPL 2027 auction venue and the postponed GST Council date are dated and cited [C RG4] |
| RG5 | State assumptions wherever public data runs out | Section 17; slide 10 | 33 numbered assumptions, each with a rationale and a source tag [C RG5] |

### 1.6 Where the matrix is thinnest

Two rows carry honest qualifications, and a judge is entitled to weigh them.

E3 and RG2 ask for talk with real fans, and the case says ten good interviews beat a survey no one designed [C E3]. Team IdeaForge chose secondary-only research in Round 1. The substitute is a scripted, reproducible pull of public app-store reviews, which gives a real n and real verbatim voice, but reviews skew negative, follow recent changes and are not usage-weighted. Theme presence in reviews is not segment size, so segment sizes come from the model and its assumptions A01 to A03, not from reviews [R01] [A02]. The deck therefore uses the review evidence for direction (the rating fell at every step, money talk rose once prizes went) and never for a population estimate.

The second thin spot is the North Star baseline. No audited post-ban count of monthly or weekly users is public, so the baseline of 5.0M weekly team-builders is an assumption [A05], and the targets are stated both as levels and as multiples of the baseline, 1.5 times at six months and 2.0 times at twelve [M]. If the Head of Product's week-one read of internal data shows a different baseline, the multiples stand and the levels move.

### 1.7 The five-minute read

The J5 test is whether a busy CEO can follow the deck without a presenter [C J5]. Each core slide is built in three layers: the headline, one so-what element and the evidence panels. The table lists the first two layers for all eight core slides, in reading order. Read alone, they carry the argument end to end.

| Slide | Headline (action title) | So-what element |
|---|---|---|
| 2 | Sharpen the pivot, do not keep it: a free cricket skill league for Dream11's ~13M core fans earns ₹250 Cr in 12 months with no rupee at stake | Five answer cards, one per question and one for the stress test |
| 3 | At most about 1 in 6 of Dream11's 300M registered fans was active in a month by mid-2026, and most who left came for the money, not the game | Seed card: seven match-day jobs, two of which lost their app when money went |
| 4 | Five behavioural segments explain Dream11's base, and two of them, Cricket Brains and League Captains, are the ~13M fans worth building for | CORE, EDGE and LET GO verdict chips |
| 5 | Sharpen the destination: a free cricket skill league scores 4.35 of 5 against 2.60 for the declared global multi-sport platform, and FanCode keeps the job of showing the match | "Conclusively: sharpen" verdict card |
| 6 | A five-step match-day loop replaces the prize with proof: pick, call, prove, rank, repeat, powered by status, friends and suspense instead of money | Legal-test chip strip and the match-day hub |
| 7 | Ship the loop before the Australia Tests, scale it on IPL 2027, and say no to seven things that would drag Dream11 back into fights it cannot win | "We will not build" panel of seven cuts |
| 8 | Five legal revenue lines earn ₹250 Cr in the next 12 months in the base case, against a leaner ₹236 Cr cost base, without a single prize | The ₹250 Cr numeral and its caption |
| 9 | Weekly team-builders must double to 10M by September 2027, a 90-day signal can prove us wrong by January, and a court win would not justify going back | "The strategy holds" chip and the kill-signal card |

The sequence also shows the foreshadowing that the argument relies on. Slide 3 ends by showing that seven match-day jobs each have a default app, except two, "have a stake in it" and "prove you know cricket", which lost their only app when money went [C TN1]. The alternative that fills that gap is not named until slide 5, and by then the reader has already seen the gap. The same symmetry runs across slides 4, 5 and 8: five segments share six rows, five options share six criteria, and three scenarios share the same drivers.

## 2. The answer on one page: sharpen the pivot into India's free cricket skill league

**Answer.** Dream11 should sharpen its pivot, not keep it as declared and not reverse it. It should keep the free, ad- and sponsor-funded model and the word "engagement", drop "global", "multi-sport" and "AI-first" as the headline promises, and rebuild the product around the one match-day job that has no default app once money is gone: having your own judgment on the line. In the base case that earns ₹250 Cr of legal revenue in 12 months against a ₹236 Cr cost base, and even a court win that restores paid fantasy would not justify going back [M].

### 2.1 The verdict, and the two answers it rejects

The case invites two answers, and both are wrong. The first is to keep the destination the CEO announced on 27 Aug 2026, an AI-first, global, multi-sport engagement platform for 300 million users, and to execute it harder [C T7]. The second is to wait for the Supreme Court and go back to paid fantasy, the path the stress test dangles [C ST]. The recommendation is a third one: sharpen. It keeps what is sound in the declared destination and cuts the three adjectives that put Dream11 into fights it cannot win.

| Declared on 27 Aug 2026 | Sharpened destination | Why |
|---|---|---|
| "Global" | India first. Diaspora markets are reviewed at a FY28 gate | No rights, brand or data edge abroad, and free fantasy abroad already has scaled incumbents such as Fantasy Premier League |
| "Multi-sport" | Cricket first. Other sports arrive only through FanCode's rights, after a gate | Cricket is where the habit, the data and the fans are, and FanCode already carries 300+ leagues [S25] |
| "AI-first" | AI inside the loop: three fan-visible jobs, Scout, Coach and Digest | The case penalises "use AI to personalise" that does not say what changes for the fan [C X3] |
| "Sports engagement platform" with streaming, stats, scores, commentary, community | The match-day skill game: pick, call, prove, rank, repeat | Streaming belongs to FanCode and JioHotstar, scores and stats to Cricbuzz and ESPNcricinfo, chatter to YouTube and Instagram. Only "prove you know cricket" is unowned [C C1] [C C2] [C C4] |
| "300M users" | A weekly-player North Star, Weekly Team-Builders | 300M is a registry, and even the 50M monthly-active target for Watch Along is about 1 in 6 of it [S15] [A33] |

The destination statement used on the cover, the executive summary and the verdict slide is this: Dream11 becomes India's free cricket skill league: every match, your team, a live rating everyone can see, and friends to beat. No rupee at stake, your judgment always is. The positioning statement is its competitive twin. For the cricket fan who used to put ₹49 on their judgment, Dream11 is where that judgment still counts every match day. Unlike JioHotstar, Cricbuzz or FanCode, it does not show you the match; it gives you a stake in it, paid in status and bragging rights, not money.

### 2.2 Q1, diagnose: a registry, five segments, two worth building for

Dream11's 300 million users are a registry, not an audience [C T7]. Even on the most generous reading, at most about 50M were monthly active by mid-2026, which is 16.7% of the registry, or roughly 1 in 6, and that 50M is the company's own target for Watch Along in IPL 2026, used here as a ceiling because no audited count exists [A33] [S15] [M]. A prize-free monthly base of about 35M and a weekly team-building base of about 5.0M are the working baselines (est.) [A04] [A05]. Five behavioural segments explain who stayed and who left. Jackpot Hunters (S1) and Grinders (S2) came for money and left: together they are 51.4% of the 70.6M fans estimated to have left, and about 1 in 3 ex-real-money gamers may have shifted to offshore betting sites [M] [S17]. Cricket Brains (S3) came to be right and League Captains (S4) came to beat friends, and both partly stayed because what they valued was never the prize. Match-day Loungers (S5), many of them new through watch-alongs, stay for company during a match but are contested by YouTube and JioHotstar. The recommendation builds for S3 and S4, about 13.2M fans today (est.), monetises S5 at the edge and lets S1 and S2 go [M].

The review evidence points the same way, as association and not causation. Dream11's average Play Store and App Store rating fell at every step of the pivot, from 4.27 in the paid era to 3.84, 2.55 and 2.52 in the three periods since [R01]. Watch-along was the main complaint in the second-screen period, with ads (7.4% of reviews) and app quality (12.0%) rising alongside it [R02]. Money talk in reviews tripled once every prize was gone, from 6.4% of reviews in the paid era to 20.0% in the prize-free month, on a small sample of 195 reviews that is indicative only [R02].

### 2.3 Q2, judge: sharpen, and let FanCode show the match

"Global" and "multi-sport" spread a shrinking team across fights with entrenched owners. Streaming, scores and chatter each have a default app, and FanCode already holds 300+ leagues [S25]. "AI-first" is a slogan until it changes a screen. Five options were scored on the same six criteria, and the sharpened skill league (option D) scores 4.35 of 5. A return to paid fantasy (option E) scores 3.45, because it is high on fan pull but fails legality and revenue timing. Folding Dream11 into FanCode (B) scores 2.90, a creator media network (C) 2.75 and the declared destination (A) 2.60 [M]. The job split with FanCode is a single sentence, "FanCode is where you watch, Dream11 is where you play." Dream11 never buys streaming rights and sunsets its own live streaming within 90 days. FanCode never builds fantasy, ratings or calls. Four seams join them: a play-along overlay in FanCode cricket streams, "Watch on" links on Dream11 match cards, a joint match-day ad package and one Dream Sports login with DPDP-compliant consent.

### 2.4 Q3, build: a five-step loop in four phases

The match-day loop runs pick, call, prove, rank, repeat. At the toss a nudge brings the fan in. A 60-second team is built with AI Scout's three evidence cards, Live Calls add an over-by-over call, a Dream Rating moves with every match, a friends' league table and a shareable rating card close the match, and the next fixture starts the loop again. It ships in four phases on the cricket calendar: foundations before the Australia Tests (21 Jan to 3 Mar 2027) with Dream Rating v1 targeted for 15 Oct 2026, depth through the Tests and the Women's Premier League (14 Jan to 7 Feb 2027), scale on IPL 2027 (a target window of 10 Mar to 15 May) and proof in the off-season [S33] [S34] [S35] [M]. The first five features by RICE score are lineup-lock nudges (27.0), Dream Rating v1 (19.2), Leagues v2 (18.0), shareable rating cards (16.0) and the match-day digest (9.8) [M]. Seven things are cut: own streaming, global launches, in-house non-cricket fantasy, any prize or redeemable currency, coins or boosts that affect scoring, a general AI chatbot and a social feed.

### 2.5 Q4, make it pay: five legal lines and one number

Five lines earn money, and each passes a three-question legality test: no stake, no prize, and money never buys an outcome. They are match-moment ads, sponsorship, Dream11 Pro, creator gifting and the FanCode referral seam. The moneyshot of the deck is the base-case 12-month revenue of ₹249.7 Cr, written "₹250 Cr", which is 3.7% of FY25 operating revenue of ₹6,759 Cr and carries no court risk [M] [C F03].

| Stream | Bear (₹ Cr) | Base (₹ Cr) | Bull (₹ Cr) | Share of base |
|---|---|---|---|---|
| Match-moment ads | 91.4 | 176.8 | 316.6 | 70.8% |
| Sponsorship | 36.5 | 68.0 | 104.5 | 27.2% |
| Dream11 Pro | 0.9 | 3.5 | 9.0 | 1.4% |
| Creator gifting | 0.5 | 0.9 | 1.5 | 0.4% |
| FanCode referral seam | 0.3 | 0.5 | 0.8 | 0.2% |
| **Total** | **129.6** | **249.7** | **432.3** | 100% |
| Cost base, 12 months | 236 | 236 | 236 | n/a |
| Surplus or shortfall | −106.4 | +13.7 | +196.3 | n/a |

Two features of this table are worth stating before a judge finds them. Ads and sponsorship carry 98.0% of base revenue, so the plan is an advertising and sponsorship business with three small options attached, and the ad rate and the title sponsor are the numbers to defend (est., assumptions A14 and A16) [M]. The base case clears the cost base by only ₹13.7 Cr, about 5.8% of cost, and the bear case falls ₹106.4 Cr short. Losing the ₹30 Cr title partner alone would take base revenue to ₹219.7 Cr, below cost [A16] [M]. The March to May IPL window earns about ₹113 Cr, roughly 45% of the year, which is why the title partner is signed before the tournament and not during it [M].

### 2.6 The North Star, the supporting metrics and the 6 and 12 month targets

The North Star is Weekly Team-Builders (WTB): fans who lock at least one team in a week. It beats DAU and MAU because it counts the behaviour that both the loop and the ad model depend on. The base baseline of 5.0M is an assumption that the Head of Product replaces with internal data in week one, so the targets are also stated as multiples [A05].

| Metric | Baseline | 6 months (1 Mar 2027, pre-IPL) | 12 months (Sep 2027) |
|---|---|---|---|
| North Star: Weekly Team-Builders (M), base | 5.0 (est.) | 7.5 (1.5 times) | 10.0 (2.0 times) |
| North Star, bear / bull (M) | 3.5 / 6.5 | 4.38 / 11.7 | 5.25 / 16.9 |
| M1 Match-to-match return rate | 35% (A31, est.) | 45% | 50% |
| M2 League share of weekly players | 20% (A32, est.) | 35% | 45% |
| M3 Live Calls reach (5+ calls a match-day) | 0% (new) | 25% | 35% |
| M4 Revenue per weekly player (trailing, annualised) | n/a | ₹300 | ₹290 |

The base path peaks at 14.0M in April 2027 during the IPL window, then falls back to 8.0M in June before rebuilding to 10.0M, because the calendar drives the habit [A06] [M]. The North Star at 12 months is therefore judged against September, not against the peak.

### 2.7 The 90-day signal that would prove us wrong

By 15 Jan 2027, among fans with three or more rated matches since Dream Rating v1 launched on 15 Oct 2026, two things are measured. If match-to-match return is below 40% and league members return less than 1.3 times as often as solo players, the thesis is wrong. The response is written in advance: stop spending on rating and leagues, and move to creator media (option C) or fold the play features into FanCode (option B) [M]. Both conditions must hold, which keeps a single noisy metric from ending the plan.

### 2.8 The stress-test verdict

Suppose the Supreme Court strikes down the ban and paid fantasy is legal again, with GST still charged on deposit value [C ST]. Per ₹100 of contest entries, Dream11 kept ₹12.71 before October 2023 in the paid era (assumptions A28 and A30, est.). At 28% of deposit value, the mid case leaves ₹1.0, a fall of 92.1%. At the 40% rate on the statute book since 22 Sep 2025, it leaves −₹5.0, a loss on every rupee of entries [A29] [M] [S18]. Players would have to see the prize pool shrink from 85% of entries to about 73% for Dream11 to hold the old margin at 28%, while offshore books keep paying more [M]. Even the low-deposit case leaves only ₹5.2 at 28%, and the high-deposit case loses ₹4.6 [M]. The Supreme Court's 27 May 2026 judgment also revived retrospective tax claims on the whole industry, with about ₹2.5 lakh crore in dispute [C L2] [S19]. The answer is to stay free in Dream11. A paid product is considered only if three conditions all hold: a final judgment restoring paid fantasy, tax charged on platform fees rather than deposits, and a separate ring-fenced entity to run it.

### 2.9 The three cuts that matter most

Of the seven named cuts, three carry the argument.

| Cut | Evidence for cutting | What would change our mind | Earliest review |
|---|---|---|---|
| Own live streaming | RICE score 0.2 on 40 person-months of effort; FanCode already streams 300+ leagues and cricket on passes [M] [C U2] | FanCode loses cricket rights and no partner can carry the play-along overlay | FY28 gate |
| Global launches | RICE score 0.1 on 36 person-months of effort; no rights, brand or data edge abroad [M] | A cricket diaspora cohort in the review data shows organic weekly play above the India baseline | FY28 gate |
| Any prize, voucher or redeemable coin | Fails the "no prize" test, and the Act's definition of a money game turns on "monetary or other enrichment" [S37] | A final judgment and a ring-fenced entity, and then only outside Dream11 | Not before the stress-test conditions are met |

### 2.10 The 110-word version

This paragraph carries the same content as the verdict card on the cover, at 110 words.

> Sharpen the pivot. Dream11 should become India's free cricket skill league: every match, your team, a live rating everyone can see, and friends to beat, with no rupee at stake. FanCode is where fans watch and Dream11 is where they play. Global and multi-sport wait for a later gate, and seven things stay unbuilt. Five legal revenue lines earn a base case of ₹250 Cr in 12 months against a ₹236 Cr cost base, and weekly team-builders grow from 5.0M to 10.0M. If the ban falls, 28% GST on deposits leaves Dream11 about ₹1 of the ₹12.71 it once kept per ₹100 of entries, so it does not go back.

### 2.11 What would change our mind

An argument that names its own failure points is easier to trust. The table lists the signals, their thresholds and the response already agreed.

| Signal | Threshold | Response |
|---|---|---|
| Week-one internal read of weekly team-builders | Baseline differs from 5.0M (assumption A05) | Keep the 1.5 times and 2.0 times multiples, restate the levels and the revenue path |
| 90-day signal, read on 15 Jan 2027 | Return below 40% and league lift below 1.3 times | Stop rating and league spend; move to option C or B |
| Title partner for the Dream Rating season | Not signed before IPL 2027 | Base revenue falls to about ₹219.7 Cr, below the ₹236 Cr cost base; re-cut the cost plan |
| Court outcome on the ban | Final judgment restores paid fantasy | Apply the three-condition rule; any paid product sits in a separate entity, outside Dream11 |
| GST design | Tax moves to platform fees rather than deposits | Re-run the stress test; the free league still stands as the core product |
| IPL 2027 schedule | The 10 Mar to 15 May target window moves or shrinks | Re-time the sponsor and ad calendar; the March to May share of about 45% of revenue moves with it |

## 3. The business that was: seventeen years of selling a stake in the match

**Answer.** Dream11 built one product for seventeen years: a paid contest that let a fan buy a stake in a real match with a real team. Harsh Jain and Bhavit Sheth founded it in Mumbai in 2008, it grew into the largest fantasy sports platform in India and the face of Indian cricket sponsorship, and by the time Parliament banned the category on 21 August 2025 the business had already started shrinking on its own terms [C F02] [C F03]. What Dream11 owned when the money went was the brand, the habit and the fantasy engine. What it rented, and lost overnight, was the thrill of a rupee riding on a wicket.

### 3.1 Founding to scale, 2008 to 2021

Dream11 let fans pick eleven real players from an upcoming match, form a team under a salary-cap-style budget, and earn points as those players performed in the real game [C F02]. A contest ran for the length of one match or one day of play. The model needed no inventory and no physical distribution: a fan opened the app, paid an entry fee, built a team before the toss, and watched the scoreboard move with the match. This is the structural reason paid fantasy scaled so fast in India: the marginal cost of adding one more paying team to a contest was close to zero, and the entire user experience already existed inside a cricket broadcast a fan was going to watch anyway.

By 2019 Dream11 had become large enough to be named the title sponsor of the Indian Premier League, and it went on to sponsor the Indian cricket team directly [C F07]. Its parent, Dream Sports, raised successive funding rounds through the following two years and was last valued at about $8 billion in 2021 [C F02]. That valuation sits at the top of the business's arc: a company that had turned a simple points game into India's most visible sports-technology brand, sponsoring the sport it depended on, in the country that watches more cricket than anywhere else.

### 3.2 How a paid contest actually worked

A paid contest had three moving parts. First, an entry fee, typically a small fixed amount per team, sometimes as low as a few rupees and running up to large sums for high-stakes private leagues. Second, a prize pool, built from the pooled entry fees of every team in that contest, paid out to the top-ranked teams by a published payout table. Third, a platform fee, the share of entry fees Dream11 kept before distributing the rest as prizes; industry explainers put this in the range of roughly 10 to 25% of entry fees depending on contest type, though no single Dream11-disclosed figure was found in this research [S39; A28 uses 15% as the working assumption for the model in section 13].

Tax sat underneath all three. Before 1 October 2023, GST applied only to the platform's fee, at 18%, which left the underlying unit economics comfortable: a company keeping 15 rupees of platform fee on every 100 rupees of entries paid roughly 2.3 rupees of GST on that fee, leaving about 12.7 rupees of net margin per 100 rupees of contest volume [research team calculation, A28]. From 1 October 2023 the base for GST changed to the full deposit value rather than the fee, at 28%, and the 27 May 2026 Supreme Court ruling upheld that basis and extended its logic to real-money games generally, including fantasy sports [C L2]. Section 4 below and section 15 work through exactly what that change does to the arithmetic; the short version is that it converts a healthy fee-based margin into a thin or negative one once the tax is levied on the whole deposit rather than the sliver Dream11 actually kept.

### 3.3 The financial arc, FY23 to FY25

Dream Sports group results tell the story of a business that peaked and then reversed, on a financial-year basis ending each March.

| Financial year | Operating revenue (₹ Cr) | Net profit or loss (₹ Cr) | What happened |
|---|---|---|---|
| FY23 | 6,384 | 188 | The paid-contest model at scale, profitable [C F03] |
| FY24 | 7,934 | 1,295 | Peak revenue and peak profit, the year before the ban [C F03] |
| FY25 | 6,759 | −479 | Revenue falls 14.8% from the FY24 peak; the group swings to a loss even before the ban's full-year effect lands in FY26 [C F03; S04] |

The FY25 numbers deserve unpacking, because the headline loss understates how much of the deterioration was already structural before 21 August 2025. Total expenses rose 8.5% to about ₹7,122.6 Cr against revenue of ₹6,759.3 Cr, so operating costs alone were already running ahead of revenue by roughly ₹364 Cr [S04; R-A-verification RA02]. Advertising and promotion was the single largest cost line, at close to ₹3,913 Cr, or 58% of total expenses in FY25 [S23]. On top of the operating gap, the company absorbed a one-time exceptional item of roughly ₹575 Cr, the tax cost of Dream Sports' "reverse flip", merging its US holding entity into its Indian entity, Sporta Technologies, in March 2025 [S04; R-A-verification RA02, which corrects an earlier estimate of ₹503.7 Cr for this line]. Strip out that one-time item and Dream Sports was still spending more than it earned in FY25, on marketing spend that was itself defending share in a paid-contest market about to be outlawed.

Two things follow from this. First, the ban did not create Dream11's financial pressure from nothing; it removed the 95% of revenue that had been covering an already-widening cost base [C F05]. Second, whatever revenue model replaces paid contests has to be judged against a company that was already spending at a rate its FY25 top line could not support, which is part of why section 13's cost base for the sharpened pivot (₹236 Cr across five lines) is built lean rather than as a continuation of FY25-style marketing intensity.

### 3.4 The sponsorship era, and what its end signals

Dream11's sponsorship footprint was the most visible evidence of how central paid contests were to its identity. It was BCCI's lead sponsor for the Indian cricket team, a deal reported at close to $44 million running from 2023 to 2026, and it held IPL team jersey sponsorships as well [C F07]. Within days of the Bill passing in August 2025, Dream11 told the BCCI it could not continue as lead sponsor, and it later exited the IPL jersey deals too [C F07]. This was not a slow wind-down; it was an immediate, voluntary withdrawal from the single most valuable sponsorship property in Indian sport, taken before the law even came into force on 1 May 2026 [C F04].

Reading that decision against Dream11's later choice not to challenge the law in court, unlike A23's parent Head Digital Works [C F06], the pattern is a company that decided compliance was the only viable posture, and decided it fast. The financial logic makes that legible: a $44 million-scale sponsorship funded by a business earning $95 out of every $100 of revenue from something about to become a criminal offence up to three years in prison and a fine of up to ₹1 crore is not a sponsorship a compliant company can keep paying for [C F04] [C F05]. The speed of the exit is itself evidence for how completely paid contests, not the brand or the community around cricket, were Dream11's actual product.

### 3.5 What Dream11 owned, and what it only rented

Separating what survives the ban from what does not is the analytical spine of the rest of this document. Dream11 owned four things that the ban left untouched: the brand, recognised by hundreds of millions of Indians as synonymous with fantasy cricket; the habit, a match-day ritual of building a team before the toss that ten million people were still doing for free within weeks of the ban [C T2]; the data, more than a decade of records on which fans build which kinds of teams and how well they predict outcomes; and the fantasy engine itself, the scoring, team-building and contest infrastructure that needs no rebuilding, only a change in what sits on top of it.

What Dream11 only rented was the thrill of money riding on the outcome. That thrill was not owned; it was purchased fresh, in the form of a fee, on every contest, by every paying user, and it evaporated the instant contests became free. The 95% of revenue the CEO attributed to paid contests was not compensation for the brand, the data or the engine; it was compensation for supplying the one ingredient Dream11 never controlled and can never legally supply again in India under the current statute, a chance to win real money [C F05]. This is the reason the rest of this document treats the brand, habit, data and engine as assets to build on, and treats "bring the money back" as a door that is closed for the reasons detailed in section 4.

## 4. The ban and the tax: the law closed the old business and the tax closed the road back

**Answer.** Two separate legal events sit behind this case, and together they close two different doors. The Promotion and Regulation of Online Gaming Act 2025 makes paid contests a criminal offence, and that ban is still being challenged in the Supreme Court with no ruling yet [C L1]. Independently, the Supreme Court's 27 May 2026 tax judgment fixes GST at 28% of the full deposit value for any real-money game, fantasy sports included, which is a separate question from whether the ban itself survives [C L2]. Even if the ban falls, the tax does not, and it alone turns a healthy platform-fee margin into a near-zero or negative one, as section 15 quantifies in full.

### 4.1 What the Act actually bans

The Promotion and Regulation of Online Gaming Act 2025 passed Parliament on 21 August 2025 and received presidential assent the following day, though it was only notified into force on 1 May 2026 [C F04]. The Act works by splitting online games into categories with different legal treatment. An "online money game" is any online game played by paying fees, depositing money, or other stakes, in expectation of winning which entails monetary or other enrichment, and this holds irrespective of whether the underlying game is one of skill or one of chance [R-C-verification RC02, quoting the Act's s.2 definition as reported by legal commentary; the exact statutory language could not be confirmed against the Gazette text directly, which returned an access error during this research]. An "online social game" sits on the other side of the line: it is offered for entertainment, recreation or skill development, involves no staking of money, and may charge only a subscription or one-time access fee rather than a stake tied to winning [R-C-verification RC03]. Online money games are banned outright, with penalties of up to three years in prison, a fine of up to ₹1 crore, or both [C F04].

The Act's design deliberately makes the "no stake" line the entire test, not the presence or absence of skill. Fantasy cricket has always been marketed, including by Dream11 itself, as a game of skill rather than chance, and that argument shaped years of pre-2025 litigation over whether state gambling laws applied to it. The 2025 Act sidesteps that debate entirely: a game becomes an "online money game" the moment money is staked with an expectation of monetary return, regardless of how much skill is involved in playing it [R-C-verification RC02]. This is the single most important legal fact behind the recommendation in this document. It means no amount of skill-based design, rating system or "this rewards knowledge, not luck" framing brings a cash-prize product back inside the law. Only removing the stake does.

The accompanying Online Gaming Rules 2026 were notified on 22 April 2026 and took effect alongside the Act on 1 May 2026 [R-C-verification RC04]. The Rules establish a registration process under which online social games and e-sports formats may be directed to register, with registration reported to run for ten years once granted [R-C-verification RC04]. This research did not locate specific rule numbers governing rewards, virtual currency or advertising standards within the Rules, and that gap is disclosed rather than papered over: any Dream11 feature involving virtual currency, creator gifting or sponsor-funded prizes should be legally reviewed against the Rules' final text before shipping, not assumed compliant on the strength of this document [R-C-verification RC04, RC-N2].

### 4.2 Table: what this leaves legal, prohibited or grey

| Category | Example | Status |
|---|---|---|
| Prohibited | Entry fee plus cash prize pool, in any format, including a scaled-down or "skill-weighted" version | Banned under the Act's money-game definition regardless of skill content [R-C-verification RC02] |
| Prohibited | Redeemable virtual currency that converts to cash or cash-equivalent prizes | Falls inside "other stakes... monetary and other enrichment" [R-C-verification RC02] |
| Legal | A free contest with no entry fee and no prize | An online social game if it charges no stake [R-C-verification RC03] |
| Legal | A flat subscription fee for ad-free access or extra features, with no prize tied to performance | Permitted as a subscription or access fee under the online social game definition [R-C-verification RC03] |
| Grey, needs counsel | A sponsor funds a cash or goods prize for a free contest's top performer | No source located that expressly permits or prohibits sponsor-funded prizes layered onto a free game; treat as unresolved and route through legal review before shipping [R-C-verification RC-N2] |
| Grey, needs counsel | Non-redeemable in-app status, badges or cosmetic items with no cash value | Likely legal as they carry no monetary enrichment, but not explicitly addressed in the sources reviewed |

This table is the reason section 11's product design insists on a three-question legal test, no stake, no prize, money never buys an outcome, applied to every mechanic individually rather than trusting a single blanket "we are now free-to-play" label to cover everything the team might build.

### 4.3 The ban is still being challenged, separately from the tax

Two distinct court matters run in parallel, and it matters that they are separate, because a win in one does not resolve the other. Head Digital Works v Union of India, brought by the parent of rummy platform A23, challenges whether Parliament has the constitutional power to ban online money games at all [C L1]. The case is pending before a bench led by the Chief Justice, and as of this research the matter was last listed for a hearing on 5 August 2026, with the most recent listing shown on the Supreme Court Observer's case tracker dated 2 July 2026 and no ruling reported by late September 2026 [R-C-verification RC05]. Dream11 chose not to join this or any similar challenge, unlike A23's parent [C F06].

If Head Digital Works succeeds, the ban on paid contests could in principle be struck down and paid fantasy could return as a legal product. That is the scenario the case's stress test asks this document to consider directly, and section 15 works through it in full. The critical point to hold onto through the rest of this document is that a win in Head Digital Works would only remove the ban; it would say nothing about the tax question, which was decided separately and, as the next section shows, decided against the industry.

### 4.4 The tax question is already decided, and decided badly for the industry

On 27 May 2026 the Supreme Court ruled, in Directorate General of GST Intelligence v Gameskraft Technologies, that real-money online games, fantasy sports included, constitute betting and gambling for the purposes of GST law [C L2]. The judgment's central holding, in the bench's own words, is that "the character of betting and gambling does not depend exclusively upon whether the underlying activity is a game of skill or a game of chance" [R-C-verification RC06, quoting judgment paragraph 84(i)]. In plain terms: the same skill-versus-chance distinction that the 2025 Act deliberately made irrelevant to the ban, the Supreme Court also made irrelevant to the tax. A platform cannot argue its way out of gambling-style GST treatment by pointing to the skill involved in play, whether the case is about the legality of the product or the tax owed on it.

The practical effect is that GST applies to the full value of player deposits, at 28%, calculated on the deposit value itself rather than on the platform's fee alone [C L2]. This is not the pre-2023 regime, where GST at 18% applied only to the fee Dream11 actually kept; it is a tax on the whole pool of money moving through the platform, most of which was never Dream11's revenue at all, it was money destined to be paid back out as prizes. Section 15 works through exactly what this does to Dream11's net margin per rupee of contest volume, and the answer, worked from the case's own 28% figure and the deposit-value basis the judgment confirms, is that a platform-fee margin of roughly ₹12.71 per ₹100 of contest entries before October 2023 falls to close to ₹1 in the mid case once 28% GST is charged on the full deposit, and turns negative at the 40% rate that has applied to online money gaming since 22 September 2025 [M, section 15].

The ruling also revived old liabilities. It set aside a 2023 Karnataka High Court judgment that had quashed a show-cause notice against Gameskraft for roughly ₹20,989 Cr, restoring that demand [R-C-verification RC06]. Dream11 itself carries a parallel exposure: in October 2023 the DGGI issued Dream11 a show-cause notice for GST allegedly evaded, quantified at roughly ₹28,000 Cr [R-A-verification RA14, S22]. This research could not confirm the current legal status of that notice following the May 2026 judgment, so its outcome should be treated as unresolved rather than settled in Dream11's favour [R-A-verification RA14]. Across the industry, the case document itself states that demands revived by the ruling total near ₹2.5 lakh crore [C L2]; that figure describes the aggregate GST now in dispute across online gaming operators, not a single settled demand against any one company [R-C-verification RC09].

### 4.5 Why this closes the road back, even if the ban falls

The reason the stress test's "what if the ban falls" scenario does not rescue a return to paid contests is that the ban and the tax are independent obstacles, and only one of them is even being challenged. A Head Digital Works win removes the criminal prohibition. It does nothing to the 28% (or 40%, under the rate now in force since 22 September 2025) GST on deposit value that the Supreme Court has already confirmed applies to any real-money game regardless of the skill involved. Section 15 shows that this tax alone, independent of any lingering legal risk from a live court challenge or a revived show-cause notice, is enough to make the pre-ban business uneconomic at anything like its old scale. That is the analytical foundation for this document's recommendation to build the sharpened, prize-free pivot as the actual strategy, not as a placeholder until the courts rule.
