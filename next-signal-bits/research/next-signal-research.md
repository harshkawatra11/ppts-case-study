# Next Signal: An Autonomous Research Agent for Indian Pharma and Healthcare

**How a public-data agent finds, tests and proves a non-obvious financial discovery for any NIFTY 50 Track D company**

Team: Harsh Kawatra, Gursimran Kaur, Team IdeaForge

Prepared for: Finding the Next Signal, ATMOS 2026, BITS Pilani Hyderabad Campus (Track D: Pharma and Healthcare)

---

## Contents

- 0. Document control
- 1. Brief coverage matrix
- 2. The answer on one page: compute first, look outside the company, and try to kill every hypothesis before reporting it
- 3. What the judges reward: nine criteria, one worked example, and five things they say they will not score
- 4. Why summarisers miss the signal: a Track D discovery draws on at least four publishers, and the company is only one of them
- 5. Indian pharma runs five business models, and each one reports its health in a different place
- 6. Regulation leads the numbers: USFDA, CDSCO and NPPA records often surface a problem before the income statement does
- 7. Hospital economics turn on beds, occupancy and ARPOB, and announced beds are not operational beds
- 8. The Track D universe: five NIFTY 50 names and nineteen tie-break companies on two sub-industry playbooks
- 9. Five companies, one template: what the filings of Sun, Cipla, Dr. Reddy's, Apollo and Max say over five years
- 10. Twenty public sources cover a Track D investigation so far, on a path to thirty, and each is graded for reliability, independence and timeliness
- 11. The architecture: six stages named after the brief's own verbs, a deterministic core and an LLM at the edges
- 12. Discover: the agent chooses angles by scoring data availability, anomaly size and novelty, not by company name
- 13. Connect: every number carries its passage, page and publisher, and sources are counted by origin, not by document
- 14. Calculate: forty-plus formulas, peer z-scores and change-point tables turn filings into ranked anomalies
- 15. Reason: hypotheses are written as predictions that later evidence can confirm or break
- 16. Challenge: five kinds of contradiction and nine falsification tests stand between a hypothesis and the report
- 17. Prove: evidence strength is a rule, not a mood, and every falsification condition names a metric, a threshold and a date
- 18. Temporal reasoning: the engine can be sent back in time, and the time-travel runs show when each story became visible
- 19. Worked discoveries: what the agent found on {{EVAL:n_companies}} companies, in the brief's eight-part format
- 20. One output, two forms: a click-through dashboard and an equity-research-style report, plus a voice analyst that only speaks from the report
- 21. Evaluation: {{EVAL:kill_rate}} of hypotheses killed, {{EVAL:anchor_precision}} of numbers anchored, {{EVAL:median_runtime}} median run
- 22. Risks: fourteen ways the live demo or the method could fail, each with a control
- 23. Build plan: from a blank folder on 11 October to a live demo on 25 October
- 24. Slide blueprint: eight slides carry the argument
- 25. Thirty questions the judges are likely to ask, and the answers
- 26. Method, limits and the validation we would run next
- Appendix A: Bibliography
- Appendix B: Metric library
- Appendix C: Source catalogue
- Appendix D: Assumptions register
- Appendix E: Glossary and abbreviations
- Appendix F: Data conflicts and rulings
- Appendix G: Evaluation tables

## 0. Document control

**Answer.** This document is the research base behind Next Signal, Team IdeaForge's entry to Finding the Next Signal at ATMOS 2026, BITS Pilani Hyderabad (Track D: Pharma and Healthcare). It argues one design thesis: the system computes before it reads, looks outside the company before it trusts the company, and spends most of its effort trying to kill its own hypotheses. Every number below carries a tag that resolves to a raw research file, a registered source, a stated assumption, or a pending evaluation run, so a reader can trace any figure back to where it came from.

### 0.1 Purpose and intended reader

The reader is a judging panel from The Wall Street Club and The Economics Association at BITS Pilani Hyderabad, together with a practitioner panel offering pre-placement interviews [RA06]. The brief states plainly that model choice, agent count, interface complexity, report length, and investment recommendations are not scored [RA07]. The nine things that are scored are discovery quality, evidence quality, novelty, temporal reasoning, cross-source reasoning, falsifiability, explainability, robustness, and generality and autonomy [RA06]. This document exists to carry the working behind every claim that a ten-minute live demo and an eight-slide deck cannot carry on their own: the derivations, the source conflicts, the literature that justifies the design choices, and the explicit statement of what would make the team abandon a hypothesis.

The document does four jobs, laid out below so a reader can jump to the section that answers a specific question rather than reading linearly.

| Job | What it means in practice | Where in this document |
|---|---|---|
| Decode the brief | Trace every sentence of the brief's requirements to a system component, a UI panel, and a deck slide | Section 1 |
| Argue the design | State the contrarian thesis, defend it against the obvious build, and name the eight headline numbers a judge will ask for | Section 2 |
| Explain the scoring | Walk through all nine judging criteria with a live test for each, dissect the brief's own worked example, and state what is deliberately not optimised | Section 3 |
| Show why the obvious build fails | Lay out the MECE reasons a single-corpus summarising agent misses a Track D discovery, with literature numbers and a source-origin breakdown of six real seed events | Section 4 |

### 0.2 Tag legend: how a number is marked and what that mark means

Every figure in this document ends with a bracketed tag. The tag tells the reader where the figure came from and how far to trust it. A tag at the end of a sentence covers every number in that sentence unless a specific figure carries its own tag.

| Tag | Meaning | Resolves to |
|---|---|---|
| `[RXnn]` | A raw fact collected by a research lane, where `X` is the lane letter (for example `RA`, `RB`, `RDS` for Sun Pharma, `RDC` for Cipla, `RDD` for Dr. Reddy's, `RDA` for Apollo Hospitals, `RDM` for Max Healthcare) | `research/raw/R-<lane>.md`, Facts table |
| `[S0nn]` | A registered source, by its number in the master source register | `research/raw/sources.md` |
| `[A##]` | A stated assumption made by a writer, numbered in sequence | `research/parts/appendix-D-assumptions.md` |
| `[M]` | A model or evaluation output from the Next Signal engine itself | `engine/eval/out/*` via `model/model_outputs.json` (not yet populated; see 0.4) |
| `{{EVAL:key}}` | A placeholder for a number that can only come from a real evaluation run, never typed by hand | Replaced in a later pass once the engine has run, per the two-pass rule |
| `[T#]` | A table generated from structured data rather than hand-assembled | `model/model_tables.md` once populated |

A figure followed by the word "reported" or "estimated" in the sentence itself means the underlying source used that word about its own number, and this document is repeating that qualification rather than adding false precision.

### 0.3 Source hierarchy: which source wins when two disagree

Public reporting on Track D companies disagrees with itself often enough that a fixed rule is needed before any writer resolves a conflict rather than picking a number by preference. The hierarchy below has five tiers. A claim uses the highest tier available to it; where only a lower tier was found, the text says so and the gap is logged for a later verification pass rather than silently treated as settled.

| Tier | Source type | Examples used in this document | How ties are broken |
|---|---|---|---|
| 1 | Company filing (exchange filing, SEC 6-K/20-F, audited results, investor presentation hosted on the company's own site) | Dr. Reddy's Form 6-K exhibit 99.2 for Q1 FY27 [RDD15]; Sun Pharma's own quarterly press releases [RDS49] | Always wins against any lower tier. A disagreement with a lower tier is logged, not silently dropped |
| 2 | Regulator record (USFDA Inspection Classification Database, FDA Import Alert pages, SEBI/NSE/BSE disclosure text, CDSCO/NPPA notices, SEC EDGAR) | FDA Import Alert 66-40, directly fetched [RB27]; SEC CIK lookup for Dr. Reddy's [RDD04] | Wins against rating agencies, peers, and press on a regulatory fact even if a press account is more widely read |
| 3 | Rating agency rationale or named industry body report | CRISIL's rating rationale for Sun Pharma [RDS11]; CARE Ratings' rationale for Cipla [RDC03]; ICRA sector notes [RB78] | Treated as near-primary for financial and credit facts, since the agency typically quotes the audited filing directly |
| 4 | Peer filing or cross-referenced secondary aggregator with a traceable primary basis (for example Screener.in or stockanalysis.com reproducing a filed number) | Screener.in's quarterly tables for Cipla [RDC25]; stockanalysis.com's balance sheet series for Sun Pharma [RDS45] | Used when a primary filing was not independently opened in the time available, and flagged as such |
| 5 | Reputable press or an aggregator/vendor marketing page | Business Standard's Q4 FY26 coverage of Cipla [RDC39]; AlphaSense's own solutions page [RA10] | Used for narrative, timing, and context, never as the sole support for a number that a judge could ask to see traced to a filing |

Where two sources at the same tier disagree, for example two secondary aggregators quoting different net-profit figures for the same quarter, this document states both figures and the gap rather than picking one, consistent with the system's own independence-grading logic: a disagreement between non-primary sources is itself evidence, not noise to be averaged away.

### 0.4 Honesty rules for this document and for Next Signal's build status

Three rules apply throughout, carried forward from PLAN.md's golden rules.

First, every component and every claim about what the system does carries an explicit build-status tag: **LIVE** (built, running, and verified against a real run), **WIRED** (code exists and is connected but has not yet been exercised end to end), or **PLANNED** (designed but not yet built). Where this document describes the engine's architecture before the engine exists, every sentence should be read as PLANNED unless it cites a raw research fact about something that already exists outside Next Signal (a regulator database, a company filing, a piece of published literature). No sentence in this document claims a Next Signal run has already produced a number; every such number is a `{{EVAL:key}}` placeholder.

Second, this document never fabricates a figure, a quote, a named interview, or a willingness-to-pay statistic. Where primary research would normally be expected and none exists, the document says so plainly rather than inventing a stand-in.

Third, Next Signal gives no investment recommendation anywhere, and this document does not state or imply a trading view, a price target, or a judgement about whether a share price is too high or too low for any of the five companies it studies. Every number about Sun Pharma, Cipla, Dr. Reddy's, Apollo Hospitals, and Max Healthcare Institute exists to illustrate how the system investigates a company, not to argue what a reader should do with that company's shares.

The table below names each build-status tag once, with the test a reader can apply to tell them apart, so that the tag is not left as an unexplained abbreviation the first time it appears later in this document or in any sibling part.

| Status tag | What it means | How a reader can tell | Example in this project |
|---|---|---|---|
| LIVE | The component exists, runs, and has been exercised against a real input with a verified output | The claim is accompanied by a specific run, a timestamp, or a measured number, not a design description | Not yet applicable to any Next Signal component as of this writing; will apply once the engine has run end to end |
| WIRED | The code exists and the pieces are connected, but the path has not yet been exercised end to end on real data | The claim describes a connection or an interface that exists in code, without a measured output attached | Not yet applicable to any Next Signal component as of this writing; applies once Phase P begins |
| PLANNED | The component is designed in this document or in PLAN.md but no code yet exists for it | The claim describes an intended behaviour, a formula, or a schema, with no run, timestamp, or measured number attached | Every architectural and methodological claim in this document, unless it cites a raw research fact about something external to Next Signal |

### 0.5 Model and evaluation version, and how to read a placeholder

As of this writing, the Next Signal engine has not yet produced a single evaluation run; Phase R (this research deliverable) runs ahead of Phase P (the engine build) in the project's own calendar. Every number in this document that depends on a real engine run therefore appears as a literal `{{EVAL:key}}` placeholder, for example `{{EVAL:kill_rate}}` or `{{EVAL:n_companies}}`. These will be replaced only from `model/model_outputs.json`, written by the evaluation harness once it exists, in a second pass over the affected sections (principally sections 19 and 21 of the full document, outside this part). A reader who sees a placeholder anywhere in this document should take it as an honest statement that the number is pending, not a formatting error. The assembler that builds the final document fails the build if any `{{EVAL:` placeholder survives past the point where it should have been replaced, which is the mechanical enforcement of this rule.

The placeholder keys that recur most often in this part are named once below, so that a later pass replacing them can search for the key name directly rather than re-reading every paragraph.

| Placeholder key | What it will hold, once an evaluation run exists | First used in this part |
|---|---|---|
| `{{EVAL:n_companies}}` | The count of Track D companies the evaluation harness actually ran against | Section 2.4 |
| `{{EVAL:hyp_total}}` | The total number of hypotheses the engine proposed across the evaluation set | Section 2.4, 2.6 |
| `{{EVAL:kill_rate}}` | The share of proposed hypotheses the Challenge stage killed before any discovery was reported | Section 2.4, 2.6 |
| `{{EVAL:med_origins}}` | The median number of independent origins behind a surviving discovery | Section 2.4 |
| `{{EVAL:anchor_precision}}` | The share of numbers in a reported discovery that trace to a verbatim passage | Section 2.4, 2.6 |
| `{{EVAL:median_lead_days}}` | The median number of days between the earliest external record and the first mainstream news item on the same story | Section 2.4 |
| `{{EVAL:moneyshot_line}}` | The fully assembled moneyshot sentence once every component figure above is known | Section 2.4 |

### 0.6 How to read this document

Each numbered section below opens with a short **Answer** paragraph stating the finding before any supporting detail, follows with the detail organised under its own subheadings, and closes with a short list under "What this section establishes, and what it does not," which states plainly where this section's authority ends and another section's begins. Tables carry their own header rows naming the tag type used in each column. Where a section depends on facts that a later phase of the project will supply (an engine run, a design decision not yet made), this document says so in place of guessing.

### 0.7 Build-state addendum (supersedes any earlier section's engine-status claim)

The six writers who drafted sections 1 through 26 worked in two dispatch batches, with the engine's own
build continuing between and after both. Several sections, written against the engine's state as of their
own writer's dispatch, state that `pipeline/run.py` (the six-stage orchestrator) "does not exist yet." As
of this addendum, that statement is superseded: `pipeline/run.py` exists, is wired to `main.py`'s
`POST /api/runs` endpoint, and the full engine test suite passes (254 tests at the time this addendum was
written, per `next-signal-bits/build-log.md`, and growing). The orchestrator calls all six pipeline stages
in sequence under a soft and hard time budget and always produces a schema-valid Report, though most
individual stages still carry the honest stub seams their own sections describe (live source clients, the
LLM router wired through a shared client) that this addendum does not change. A reader who hits a sentence
elsewhere in this document stating the orchestrator does not exist should read it as true at the time that
section was drafted and superseded by this paragraph, not as a current gap. `build-log.md` is the
authoritative, continuously updated record of what exists; this document is a snapshot assembled from parts
drafted at different points against that moving target, and this addendum exists precisely because a
research document's own internal consistency matters as much as its external sourcing.

### What this section establishes, and what it does not

- This section fixes the tag legend, the five-tier source hierarchy, and the LIVE/WIRED/PLANNED honesty convention that every later section in this document, and every other writer's part, must follow without restating.
- It establishes that `pipeline/run.py`, the orchestrator, exists and passes its own tests as of this addendum (0.7), superseding any earlier section's claim that it does not, since the engine's build continued after those sections were drafted.
- It establishes that every evaluation number in this document is a placeholder until a real engine run exists, and that this is a deliberate, enforced rule rather than an oversight.
- It does not itself contain any claim about a specific company, a specific discovery, or a specific piece of regulation; those begin in sections 1 and 4.
- It does not resolve open project items such as the team's final institution list or logo assets, which belong to PLAN.md's own open-items section, not to this research document.

## 1. Brief coverage matrix

**Answer.** Every numbered requirement in the brief traces to a named Next Signal component, a UI panel, and a deck slide, and every one of the nine finals judging criteria maps to at least one concrete mechanism in the system rather than to a design intention; the two tables below make both mappings explicit so that a judge who asks "where does the brief's requirement X actually show up" gets a specific answer, not a general one.

### 1.1 What the brief asks for, in its own six verbs

The brief organises its requirement around six verbs: Discover, Connect, Calculate, Reason, Challenge, and Prove, each with its own one-line definition in the brief text [RA01]. Next Signal names its own processing stages after exactly these six verbs and no others, so that the system's own architecture is a direct, checkable answer to the brief's own framing rather than a renamed equivalent. The required output format is eight named elements: the Discovery, Why It Matters, Evidence, Timeline, Numbers, Counterargument, Falsification Condition, and Evidence Strength [RA02]. The brief's own worked example chains five source types in sequence: quarterly investor presentations, annual report notes on trade receivables, earnings-call transcripts, two competitors' results, and industry volume data [RA03], and its only shown calculation is a two-part decomposition, splitting revenue growth into price versus volume and computing receivable days from reported revenue and receivables [RA04]. These two facts about the worked example, that it chains five source types and that its only calculation is an arithmetic decomposition rather than a narrative summary, are the two facts that most directly justify Next Signal's own design, and section 2 returns to them directly.

| Brief verb | The brief's own one-line sense of the verb | Next Signal stage named after it |
|---|---|---|
| Discover | Decide what needs to be investigated and locate relevant public sources | The Discover stage, driven by an angle planner that scores candidate angles before any source is fetched |
| Connect | Combine evidence across filings, statements, presentations, exchange announcements, competitors, industry data, and credible news | The Connect stage, building the evidence store and the independence graph |
| Calculate | Derive relationships or changes, rather than quoting numbers as given | The Calculate stage, running the deterministic metric library |
| Reason | Form a hypothesis about what the evidence means and why it matters | The Reason stage, producing testable hypothesis cards |
| Challenge | Actively search for contradictory evidence and alternative explanations | The Challenge stage, running the nine-test falsification battery and the ACH matrix |
| Prove | Keep an auditable evidence trail for every major conclusion | The Prove stage, attaching a passage, a page, and a URL to every claim |

### 1.2 Requirement traceability, reworded from the planning-stage matrix

The table below restates, in prose-table form, which Next Signal component and which user-facing surface satisfies each category of brief requirement. It groups the planning-stage requirement IDs by theme rather than listing all thirty-three individually, because several requirements are satisfied by the same mechanism.

| Brief requirement theme | What the brief asks | Next Signal mechanism | Where a judge sees it |
|---|---|---|---|
| Discover and Connect | Decide what to investigate, locate public sources, and combine evidence across filings, statements, presentations, exchange announcements, competitors, industry data, and credible news | The Discover stage's angle planner, plus the Connect stage's evidence store and independence graph | Dashboard evidence-trail panel; deck slide on sources |
| Calculate | Derive relationships or changes rather than quoting numbers directly | A deterministic metric library (more than forty formulas), run before any language model forms an opinion | Dashboard "Numbers" block with formula tooltips; deck slide on the architecture |
| Reason | Form a hypothesis about what the evidence means and why it matters, with testable predictions | The Reason stage's hypothesis engine, producing hypothesis cards with stated predictions | Dashboard hypothesis cards |
| Challenge | Actively search for contradictory evidence and alternative explanations | The Challenge stage's falsification engine and contradiction detector, assembled into an Analysis of Competing Hypotheses matrix | Dashboard "Challenge" tab; deck slide on falsification |
| Prove | Keep an auditable evidence trail for every major conclusion | A provenance model linking every claim to a passage, a page, and a URL | Click-through claim chips in the dashboard and in the exported report |
| The eight output elements | Discovery, Why It Matters, Evidence, Timeline, Numbers, Counterargument, Falsification Condition, Evidence Strength, each with stated formatting rules (for example a single-sentence Discovery, three to five Why It Matters bullets, and at least three independent evidence origins) | A validated output schema enforcing each element's own rule (length, minimum origin count, and so on) | Dashboard discovery card; exported report; deck slide on a worked example |
| Generality and autonomy | The same system, with no company-specific tuning, works for any Track D company and for tie-break names outside the NIFTY 50 | A universe loader that reads the live NSE index CSVs at runtime, plus sub-industry playbooks (pharma, hospital) rather than company playbooks | Universe picker in the dashboard; eval harness run across fifteen or more names |
| Round 1 deliverable | Idea and approach, tools and stack, workflow, generalisation, triangulation, self-falsification, output sketch, and a build plan | A one- to two-page PDF with eight named sections, each mapped one to one to the items just listed | `round1/IdeaForge_TrackD_Round1.pdf`, produced in Phase S |

The Round 1 PDF itself has eight required sections, and each one maps to a specific part of the argument already stated in this document, so that drafting the PDF in Phase S is an exercise in compressing an existing answer, not inventing a new one.

| Round 1 PDF section | What it must cover | Where the underlying argument already exists in this document |
|---|---|---|
| 1 | Idea and approach: why non-obvious discoveries, not summaries | Section 2 of this document |
| 2 | Tools and stack | PLAN.md section 5 (engine architecture), summarised in section 11 of the full document |
| 3 | Workflow: company to angles to plan to evidence to discovery | Section 1.1 and the six-verb table above |
| 4 | Track and generalisation without tuning | Section 1.2's "generality and autonomy" row, and section 1.3's corresponding criterion row |
| 5 | Triangulation and contradiction detection | Section 4 of this document |
| 6 | Self-falsification | Section 2.3's third reason, and section 3.1's falsifiability row |
| 7 | Output format sketch | Section 1.2's "eight output elements" row |
| 8 | Build plan and milestones to 25 Oct 2026 | PLAN.md section 3.1's calendar |

### 1.3 Where the nine finals judging criteria are demonstrated

The brief names nine criteria for the finals: discovery quality, evidence quality, novelty, temporal reasoning, cross-source reasoning, falsifiability, explainability, robustness, and generality and autonomy [RA06]. Section 3 of this document decodes each criterion with a live test a judge could actually run; the table below gives the short version, naming the mechanism and the surface for each.

| Judging criterion | Mechanism inside Next Signal | Where it is shown |
|---|---|---|
| Discovery quality | Anomaly ranking combined with a narrative-divergence score, which prefers a surviving hypothesis that the company's own narrative does not already state | Discovery hero card on the dashboard |
| Evidence quality | Admiralty-style source grading plus a hard rule that a primary filing outranks a lower tier when the two disagree (section 0.3 of this document applies the same rule to the research itself) | Evidence-trail panel |
| Novelty | A consensus check that searches mainstream coverage for the same finding and penalises a novelty score if the finding already appears there | Novelty meter |
| Temporal reasoning | Change-point detection on disclosed time series, plus a measured lead-lag gap between a regulator record or a market reaction and the first mainstream news item on the same story | Timeline chart with a change-point marker |
| Cross-source reasoning | An independence graph that counts distinct origins (company, regulator, market, peer, other jurisdiction), not distinct documents | Source-independence heatmap |
| Falsifiability | A nine-test Analysis of Competing Hypotheses matrix and a kill log, with a machine-checkable falsification condition naming a metric, a threshold, and a date | Challenge tab |
| Explainability | Every claim chip opens to its originating passage, page, and URL, and the full run trace can be replayed | Run-trace replay view |
| Robustness | Six standard rival-explanation tests (peer-wide movement, foreign-exchange effect, base-year effect, one-off item, label reclassification, seasonality) applied before a hypothesis is allowed to survive | ACH matrix |
| Generality and autonomy | Universe loaded at runtime from the official NSE index CSVs, sub-industry playbooks instead of company-specific logic, and an evaluation run across fifteen or more companies including non-NIFTY-50 tie-break names | Universe picker; eval harness summary |

### What this section establishes, and what it does not

- This section shows that every theme in the brief's requirements, and every one of the nine finals judging criteria, has a named, specific mechanism inside Next Signal rather than a generic claim of coverage.
- It establishes the six-verb naming convention (Discover, Connect, Calculate, Reason, Challenge, Prove) as the system's own architecture, directly answering the brief's own language rather than paraphrasing it.
- It does not yet show that these mechanisms work in practice; that evidence depends on the engine existing and the evaluation harness running, and belongs to sections 19 and 21 of the full document once pass two happens.
- It does not argue why this design beats the obvious alternative design; that argument is section 2's job.

## 2. The answer on one page: compute first, look outside the company, and try to kill every hypothesis before reporting it

**Answer.** Next Signal computes a ranked list of anomalies from disclosed numbers before any language model is allowed to form an opinion, treats the company's own disclosures as the least independent evidence available about the company, and subjects every surviving hypothesis to a fixed battery of rival-explanation tests before it is allowed to be reported; a discovery, in this system, is whatever survives that process, not whatever a model notices first.

### 2.1 The thesis, stated plainly

Most teams entering a hackathon like this one will build an agent, or a small crew of agents, that reads a company's own annual report, quarterly results, and call transcripts, puts them into a retrieval index, and asks a language model to notice something interesting and write it up. This obvious build fails the brief on exactly the axis the brief itself demonstrates in its worked example: the worked example's central finding is not a sentence quoted from a document, it is a calculation (a revenue-growth decomposition into price and volume, and a receivable-days computation) [RA04] layered on top of a chain of five distinct source types [RA03]. A model that only reads and summarises a single company's own documents can restate what management already chose to emphasise; it cannot discover a gap between the company's narrative and the arithmetic, because it never does the arithmetic, and it cannot see a signal that lives in a competitor's filing, a regulator's database, or the market's own reaction, because its retrieval index never contains any of those.

Next Signal's recommendation is therefore not a different user interface or a different language model wrapper around the same idea. It is a different order of operations: compute before reading closely, look outside the company before trusting the company, and spend the majority of the system's effort trying to kill its own hypotheses rather than confirming the first one that surfaces. A deterministic metric library, built from more than forty formulas, runs against every disclosed period of data and produces peer-relative z-scores and statistical change-points before a language model is asked anything. The language model's role is narrowed to explaining an anomaly the arithmetic has already surfaced, never to inventing or adjusting a number. An independence graph counts the number of distinct origins behind a finding, not the number of documents, so that three press articles quoting the same company statement are correctly scored as one origin, not three. Every hypothesis that survives initial scoring must then pass a fixed battery of nine rival-explanation tests, assembled into an Analysis of Competing Hypotheses matrix, before it is allowed to become a reported discovery.

### 2.2 Three reasons the obvious build falls short

**Quantitative.** A model that reads one company's own documents mostly restates what management chose to emphasise in those documents. The brief's worked example makes this concrete: its only calculation is a revenue decomposition into price and volume, and a receivable-days computation from reported revenue and receivables [RA04], neither of which a model can produce by summarising text; both require arithmetic performed on numbers pulled from at least two different tables in the filing. A summarising agent that never performs this arithmetic cannot reach the worked example's own kind of finding, because the finding lives in the gap between the narrative and the numbers, not in either one alone.

**Strategic and evidentiary.** A company's own disclosures are the least independent source available about that company. For Track D specifically, some of the most informative evidence sits entirely outside the company's own documents: USFDA inspection classifications and warning letters [RB24], import alert listings [RB27], ANDA approval dates [RB11], the regulatory status of a manufacturing partner the company depends on (Cipla's dependence on Pharmathen's Rodopi facility for lanreotide supply is a direct, dated example [RDC52]), a peer's segment numbers for the same quarter, and the market's own reaction on the day a filing actually posted. A single-corpus retrieval agent has no mechanism to go find any of this, and no mechanism to notice when it contradicts the company's own framing.

**Feasibility and trust.** An agent that stops once it forms an opinion produces confident, uncorrected errors. The finals judging criteria explicitly reward falsifiability, robustness, and explainability [RA06], which means a system has to show its own kill process, not just its conclusion. Even reputable secondary sources disagree with each other and with primary filings in practice: two independent secondary aggregators reported different Q1 FY27 net-profit figures for Dr. Reddy's Laboratories, and only the primary SEC 6-K exhibit resolved which one was wrong [RDD21]. A system with no built-in habit of checking a number against its primary source has no way to notice this kind of error, let alone correct it before presenting a conclusion.

### 2.3 Three reasons the Next Signal design is the right build

**Quantitative.** A metric library of more than forty deterministic formulas runs against every disclosed period before a language model is consulted, computing peer-relative z-scores and statistical change-points on the arithmetic alone. The language model's job is explaining an anomaly the arithmetic already found, never inventing or adjusting a number. This inverts the usual order of a research agent (read, then maybe compute) and makes the computation the gatekeeper for what gets read closely at all.

**Strategic and evidentiary.** An independence graph counts origins of evidence, not documents, so "the company said it three different ways" is never mistaken for three independent confirmations. Track D is unusually rich in independently dated, external regulator evidence: the USFDA's own Inspection Classification Database [RB24], the FDA Data Dashboard [RB26], Import Alert 66-40's own Red List [RB29], and India's CDSCO and NPPA notices. This makes the brief's required temporal reasoning directly testable, not merely asserted, because a regulator record or a market price movement can be shown, with dates, to have preceded the first mainstream news coverage of the same story.

**Feasibility and trust.** Every surviving hypothesis has to pass a fixed battery of nine rival-explanation tests (peer-wide movement, foreign-exchange effect, a one-off item, label reclassification, seasonality, persistence across periods, demonstrated novelty against mainstream coverage, an active disconfirming search, and a point-in-time replay) assembled into an Analysis of Competing Hypotheses matrix [RA41]. The strongest rival hypothesis that survives this process becomes the discovery's own stated Counterargument, and a specific, machine-checkable threshold becomes its Falsification Condition. This is the mechanism, not a decoration, that keeps a sector-wide or false finding from being reported as company-specific.

The table below sets the obvious build's three reasons against Next Signal's three reasons side by side, on the same three axes (quantitative, strategic and evidentiary, feasibility and trust), so the symmetry of the argument is visible in one place rather than spread across two subsections.

| Axis | Why the obvious build falls short | Why Next Signal's design is the right build |
|---|---|---|
| Quantitative | Reads one company's own documents and restates what management already emphasised; never performs the arithmetic the brief's own worked example requires [RA04] | Runs a forty-plus-formula metric library against every disclosed period before any model forms an opinion, so a ranked anomaly list, not a model's first impression, decides what gets explained |
| Strategic and evidentiary | Treats the company's own disclosures as sufficient, with no mechanism to reach regulator records, a manufacturing partner's compliance status, or a peer's filing [RDC52] | Builds an independence graph that counts distinct origins, not documents, and deliberately draws on Track D's unusually rich external regulator record [RB24] [RB26] [RB29] |
| Feasibility and trust | Stops once it forms an opinion, producing confident, uncorrected errors; has no mechanism to notice a primary-versus-secondary disagreement like the one found in Dr. Reddy's own Q1 FY27 figures [RDD21] | Runs every surviving hypothesis through a nine-test rival-explanation battery before it can be reported, and states a machine-checkable Falsification Condition for whatever survives [RA41] |

### 2.4 The moneyshot

A single number, produced only by the evaluation harness and never typed by hand into any deliverable, is the moneyshot for this deck and this document:

{{EVAL:moneyshot_line}}

Its template, pending a real evaluation run, is: across {{EVAL:n_companies}} Track D companies, Next Signal proposed {{EVAL:hyp_total}} hypotheses and killed {{EVAL:kill_rate}} of them before writing a word; the discoveries that survived each rest on at least {{EVAL:med_origins}} independent origins, and {{EVAL:anchor_precision}} of their numbers trace to a verbatim passage in a named document. A secondary number, reserved for the temporal-reasoning panel elsewhere in this document, is the median number of days between the earliest independently dated external record supporting a discovery and the first mainstream news coverage of the same story, computed from the time-travel evaluation set: {{EVAL:median_lead_days}}.

The table below names each component of the moneyshot sentence on its own, with the stage that produces it, so that a reader can see exactly which part of the pipeline each clause of the final sentence depends on.

| Moneyshot component | What it measures | Produced by |
|---|---|---|
| `{{EVAL:n_companies}}` | How many Track D companies the evaluation harness actually ran against | The eval harness's own run manifest |
| `{{EVAL:hyp_total}}` | Total hypotheses proposed before any kill decision | The Reason stage |
| `{{EVAL:kill_rate}}` | Share of proposed hypotheses killed before reporting | The Challenge stage |
| `{{EVAL:med_origins}}` | Median independent-origin count behind a surviving discovery | The Connect stage's independence graph |
| `{{EVAL:anchor_precision}}` | Share of numbers in a surviving discovery traced to a verbatim passage | The Prove stage's provenance model |

### 2.5 What would change the team's mind

A design thesis is only credible if the team can state, in advance, what evidence would make it abandon the design rather than defend it. Four conditions would do that.

First, if the kill rate measured by the evaluation harness turns out to be near zero across every company tested, that would mean the Challenge stage is not actually discriminating between hypotheses that survive scrutiny and hypotheses that do not, and the falsification battery would need to be redesigned rather than merely re-tuned.

Second, if the independence graph, once built, routinely counts fewer than two distinct origins behind a surviving discovery across most companies, that would mean Track D evidence is not as cross-publisher as this document argues in section 4, and the "at least four publishers" seed sentence would need to be withdrawn, not softened.

Third, if the metric library's anomalies, once computed, correlate poorly with what independent human equity-research commentary (brokerage notes, rating-agency rationales) already flags as noteworthy for the same company and period, that would suggest the deterministic layer is finding statistical noise rather than analytically meaningful signal, and would call for a different anomaly-ranking formula.

Fourth, if a time-travel replay shows that the system's "discoveries" consistently postdate, rather than predate, the first mainstream coverage of the same story, that would directly contradict the temporal-reasoning claim in section 2.3, and the change-point and lead-lag methodology would need to be re-examined before any deck slide repeats the claim.

| # | Falsifying condition | What it would mean | What the team would change |
|---|---|---|---|
| 1 | Measured kill rate is near zero across every company tested | The Challenge stage is not discriminating between hypotheses that survive scrutiny and ones that do not | Redesign the falsification battery rather than re-tune its thresholds |
| 2 | Independence graph counts fewer than two distinct origins behind most surviving discoveries | Track D evidence is not as cross-publisher as section 4 argues | Withdraw the "at least four publishers" seed sentence, not merely soften it |
| 3 | Metric-library anomalies correlate poorly with what human brokerage notes and rating-agency rationales already flag | The deterministic layer is finding statistical noise, not analytically meaningful signal | Replace the anomaly-ranking formula |
| 4 | Time-travel replay shows discoveries postdating, not predating, the first mainstream coverage | The temporal-reasoning claim in section 2.3 is false | Re-examine the change-point and lead-lag methodology before repeating the claim anywhere |

### 2.6 Eight headline numbers

| # | Headline number | Value | Status |
|---|---|---|---|
| 1 | Metric formulas in the deterministic library | More than 40 | Stated directly, a design target, not yet an engine count |
| 2 | Rival-explanation tests in the falsification battery | 9 | Stated directly, a fixed design decision |
| 3 | Processing stages, named after the brief's own verbs | 6 (Discover, Connect, Calculate, Reason, Challenge, Prove) | Stated directly |
| 4 | Required output elements | 8 (Discovery, Why It Matters, Evidence, Timeline, Numbers, Counterargument, Falsification Condition, Evidence Strength) | Stated directly, from the brief itself [RA02] |
| 5 | Companies in the symmetric NIFTY 50 Track D universe | 5 (Sun Pharma, Cipla, Dr. Reddy's, Apollo Hospitals, Max Healthcare) | Stated directly, as of the 30 Sep 2026 index rebalance |
| 6 | Hypotheses proposed across the evaluation set | {{EVAL:hyp_total}} | Pending a real evaluation run |
| 7 | Hypothesis kill rate before reporting | {{EVAL:kill_rate}} | Pending a real evaluation run |
| 8 | Median number trace anchor precision | {{EVAL:anchor_precision}} | Pending a real evaluation run |

### What this section establishes, and what it does not

- This section states the contrarian design thesis in the team's own final wording, gives three reasons each for why the obvious build fails and why this build should work, and fixes the moneyshot template and the four conditions that would make the team abandon the design.
- It establishes that five of the eight headline numbers are fixed design facts that can be stated today, while the other three depend entirely on an evaluation run that has not happened yet.
- It does not contain the detailed decoding of the nine judging criteria with a live test for each; that is section 3's job.
- It does not contain the MECE breakdown of why a summarising agent specifically misses Track D signal, or the literature numbers behind that claim; that is section 4's job.

## 3. What the judges reward: nine criteria, one worked example, and five things they say they will not score

**Answer.** Each of the nine finals judging criteria the brief names can be tested live by a judge asking a specific, answerable question of the running system, not by reading a claim on a slide; the brief's own worked example, taken apart into its source chain, its single calculation, and its own "Moderate" self-grading, shows exactly the kind of evidence discipline the system has to reproduce; and the five things the brief says it will not score imply a specific discipline about where the team should, and should not, spend its limited build time before 25 Oct 2026.

### 3.1 The nine criteria, decoded with a live test for each

The brief names nine criteria for the finals round: discovery quality, evidence quality, novelty, temporal reasoning, cross-source reasoning, falsifiability, explainability, robustness, and generality and autonomy [RA06]. Each one can be reduced to a question a judge could actually ask while the system is running on a company they choose on the spot, which is itself the format of the finals [RA06]. The table below pairs each criterion with the test a judge is most likely to run and the mechanism inside Next Signal that the test is checking.

| Criterion | What a judge could ask, live | What the test checks inside Next Signal |
|---|---|---|
| Discovery quality | "Why is this the discovery, rather than the five other things you looked at?" | Whether the anomaly-ranking and narrative-divergence score can show its own runner-up hypotheses and explain why they ranked lower |
| Evidence quality | "Show me where this number came from, and tell me why I should trust that source over another one that disagrees with it." | Whether the Admiralty-style source grade and the primary-source precedence rule (section 0.3's hierarchy, applied inside the engine) can be shown for any cited number |
| Novelty | "Has someone already written this up?" | Whether the consensus check actually ran a search against mainstream coverage and can show what it found, not just assert a novelty score |
| Temporal reasoning | "When did this first become knowable, and when did the market or the press actually notice it?" | Whether the change-point detector can point to a specific date in a disclosed time series, and the lead-lag measurement can show the gap to the first mainstream report |
| Cross-source reasoning | "How many genuinely different publishers does this rest on, not just how many documents?" | Whether the independence graph collapses same-publisher restatements into one origin and can display the origin count directly |
| Falsifiability | "What would prove you wrong, and when would you know?" | Whether a specific metric, threshold, and observation date are attached to the discovery's Falsification Condition, and whether that condition is machine-checkable rather than a vague hedge |
| Explainability | "Open this claim and show me the actual sentence it came from." | Whether every claim chip resolves to a passage, a page number, and a URL, and whether the full run trace can be replayed step by step |
| Robustness | "Could this just be a sector-wide thing, or a currency effect, or a one-off?" | Whether the six standard rival-explanation tests (peer-wide movement, foreign-exchange effect, base-year effect, one-off item, reclassification, seasonality) were actually run and their results shown, not merely claimed to exist |
| Generality and autonomy | "Run this on a company you've never seen before, right now." | Whether the universe loader reads the live NSE index CSV at runtime and the same pipeline, with no company-specific code path, produces a complete eight-element output for an arbitrary Track D or tie-break name |

### 3.2 The worked example, taken apart

The brief's own worked example is the single clearest statement of what the brief actually wants, more informative than the list of judging criteria on its own, because it shows the brief's authors demonstrating the standard rather than just naming it. Three things about the worked example matter for Next Signal's design, and each is worth stating precisely rather than summarised loosely.

**Its source chain.** The worked example chains exactly five source types in sequence: quarterly investor presentations, annual report notes on trade receivables, earnings-call transcripts, two competitors' results, and industry volume data [RA03]. This is not an incidental detail. It means the brief's own standard for "enough evidence" already requires at least two genuinely different publisher types beyond the company itself (two competitors, one industry-data publisher), which is consistent with, and partly the basis for, this document's own claim in section 4 that a Track D discovery typically needs evidence from at least four different publishers.

**Its calculation.** The worked example's only shown calculation is a two-part decomposition: splitting revenue growth into a price component and a volume component for each quarter, and computing receivable days from reported revenue and receivables [RA04]. Neither of these numbers appears pre-computed in any single document; both require pulling at least two numbers from at least two different places in the filing and dividing them correctly. This is the brief's own demonstration that the central finding in a Track D-style discovery is arithmetic performed on disclosed numbers, not a sentence quoted from anywhere.

**Its own evidence-strength reasoning.** The worked example grades its own finding "Moderate," explicitly not "Strong," because the finding is partly explained by a sector-wide alternative explanation, input-cost inflation [RA05]. This is the single most instructive sentence in the whole brief for Next Signal's design, because it shows the brief's authors modelling exactly the kind of rival-explanation test (a sector-wide effect, one of the six standard tests named in section 2.3) that the Challenge stage is built to run automatically. A system that reported this finding as "Strong" would have failed the brief's own standard, even though the finding itself would still be true; the brief is explicitly rewarding the honest downgrade, not penalising the underlying finding for having a plausible rival explanation.

The table below lays the three parts of the worked example side by side with what each one demonstrates and the matching Next Signal mechanism, so the dissection above reads as a traceable argument rather than three separate observations.

| Part of the worked example | What it actually shows | Matching Next Signal mechanism |
|---|---|---|
| Source chain (five source types: investor presentations, annual report notes, call transcripts, two competitors' results, industry data) [RA03] | The brief's own bar for "enough evidence" already requires at least two publisher types beyond the company | The Connect stage's independence graph, built to count exactly this kind of origin diversity |
| Calculation (price-versus-volume decomposition; receivable-days computation) [RA04] | The central finding is arithmetic performed on numbers pulled from at least two places in a filing, not a quoted sentence | The Calculate stage's deterministic metric library, run before any model forms an opinion |
| Self-graded strength ("Moderate," not "Strong," because of a sector-wide rival explanation) [RA05] | The brief rewards an honest downgrade when a plausible rival explanation exists, not a confident overstatement | The Challenge stage's rival-explanation battery and the Prove stage's evidence-strength rubric |

Six standard rival-explanation tests recur across this document's discussion of robustness; the table below names each one with the question it answers, so that "robustness" is not left as an abstract criterion the way it sometimes is in a slide deck.

| Rival-explanation test | The question it answers |
|---|---|
| Peer-wide movement | Did every company in the same sub-industry move the same way in the same period, making this a sector effect rather than a company-specific one |
| Foreign-exchange effect | Does the finding survive once a currency movement is held constant |
| Base-year effect | Is the finding an artefact of an unusually low or high prior-year comparator, rather than a real change |
| One-off item | Does a single exceptional or non-recurring item explain most of the movement |
| Label reclassification | Did a change in how a line item is categorised, rather than a real change in the business, drive the number |
| Seasonality | Does the same pattern recur every year in the same quarter, rather than being a new development |

### 3.3 Five things the brief says it will not score, and what that implies for the build

The brief explicitly excludes five items from judging: which foundation model is used, how many agents are used, how visually complex the interface is, how long the report is, and whether the system gives an investment recommendation [RA07]. Each exclusion implies a specific discipline for where the limited build time before 25 Oct 2026 should, and should not, go.

| What is not judged | What it implies for the build |
|---|---|
| Foundation model choice | No slide or UI copy should brag about which model is used; model choice is an implementation detail stated once in the architecture section and never repeated as a selling point |
| Number of agents | The system should never advertise "N agents working together"; the six stage names (Discover, Connect, Calculate, Reason, Challenge, Prove) describe processing stages, not a headcount to be marketed |
| UI visual complexity | Build effort should favour making the discovery, evidence, and falsification content correct and legible over making the dashboard visually elaborate; a plain, dense, well-organised panel beats an ornate one that hides the same information |
| Report length | The eight-element output schema should stay exactly as long as it needs to be to carry its required content, never padded to look thorough; a short, honestly-graded "Weak" discovery is not a failure if that is what the evidence supports |
| Investment recommendation | No deliverable, anywhere, states a buy, sell, or target-price view; the system's entire value proposition is the discovery and its evidence trail, not a trading call |

The common thread across all five exclusions is that the brief is explicitly steering teams away from spending effort on anything that looks impressive but does not bear on whether the discovery is real, evidenced, and survives scrutiny. Next Signal's build priority follows that steer directly: discovery quality and evidence quality, the two criteria the judges name first, are also the two areas (the metric library and the independence graph) that get built and tested before anything in the user interface.

The build-effort ranking below states that priority directly, ordering the system's own components by how early they should be built and tested relative to everything else, following straight from the five exclusions above.

| Build priority | Component | Why it comes at this point in the order |
|---|---|---|
| 1 | Metric library (Calculate stage) | Discovery quality depends on it directly, and it is unjudged-list-adjacent to nothing, so it has no reason to be delayed |
| 2 | Independence graph and evidence store (Connect stage) | Evidence quality and cross-source reasoning depend on it directly |
| 3 | Falsification battery and ACH matrix (Challenge stage) | Falsifiability and robustness depend on it, and it needs the metric library's anomalies as an input |
| 4 | Provenance model and claim chips (Prove stage) | Explainability depends on it, and it needs the evidence store to already exist |
| 5 | Dashboard and exports (user interface) | Explicitly not judged on visual complexity, so it is built last and kept plain rather than elaborate |

### What this section establishes, and what it does not

- This section gives a concrete, judge-askable live test for each of the nine finals criteria, so that "falsifiability" or "cross-source reasoning" is not a vague aspiration but a specific question the system has to be able to answer while running.
- It takes the brief's own worked example apart into its source chain, its single calculation, and its self-graded "Moderate" strength, and shows that each of these three facts independently supports a specific design choice already stated in section 2.
- It establishes what the five explicitly unjudged items imply about where build effort should and should not go, as a discipline for the engine and UI build phases that follow this research document.
- It does not demonstrate that Next Signal actually passes any of these nine live tests yet; that evidence depends on the engine existing and a real company run, which belongs to later sections of the full document once the engine is built.

## 4. Why summarisers miss the signal: a Track D discovery draws on at least four publishers, and the company is only one of them

**Answer.** A plain summarising agent misses a Track D discovery for at least four mutually exclusive, collectively exhaustive reasons, each demonstrated below with a real example from the five companies in this document's own research; published literature on large language models performing financial question answering shows failure rates on exactly this kind of task that run from roughly a fifth to over four fifths of questions depending on the benchmark and model; and a source-origin breakdown of six real seed events from Sun Pharma, Cipla, Dr. Reddy's, Apollo Hospitals, and Max Healthcare shows that, in every one of the six cases, the first public record of the event came from a regulator, a market filing, or a company exchange disclosure rather than from mainstream press, with mainstream coverage following only after the fact.

### 4.1 An issue tree: why financial insights are missed by a typical summarising tool

The issue tree below is built to be mutually exclusive and collectively exhaustive: the four branches cover, respectively, a sourcing problem, a confirmation problem, a computation problem, and a sequencing problem, and no single missed-insight failure in the examples gathered for this document falls outside all four.

| Branch | The failure, stated plainly | Why it is distinct from the other branches | Example from this document's own research |
|---|---|---|---|
| Reads one source | The tool's retrieval index contains only the company's own documents, so it cannot see evidence that exists only outside them | Even a tool that computed correctly and searched exhaustively within its index would still miss this, because the evidence is not in the index at all | Cipla's North America revenue weakness in Q1 FY27 traces directly to a USFDA Form 483 at its manufacturing partner Pharmathen's Rodopi facility in Greece, a document that never appears in any filing Cipla itself issues [RDC52] |
| Confirms the first idea | The tool forms a hypothesis from the first pattern it notices and stops, never actively searching for evidence that would contradict it | This is a search-behaviour failure, not a sourcing failure; the same retrieval index could contain the contradicting evidence and the tool would still miss it if it never looks for it | A tool that read only Dr. Reddy's own "transition year" framing [RDD86] would report the Q1 FY27 revenue decline as management is framing it, rather than isolating that the decline is concentrated in lenalidomide specifically while the base business grew at a double-digit rate in the same quarter [RDD20] |
| No calculation | The tool restates numbers as they appear in the text rather than deriving a relationship between two or more of them | This is a computation failure, distinct from sourcing and search behaviour; the needed numbers can be present in the same document and the tool still produces nothing new | Max Healthcare reports two different revenue bases, a narrower "consolidated" P&L figure and a wider "network" figure that includes managed and brand-licensed hospitals; the FY26 gap between them is about Rs 2,165 crore, or roughly 26% [RDM45], a relationship that only appears once the two figures are explicitly divided against each other, not read separately |
| No temporal reasoning | The tool treats a single disclosure as a snapshot rather than placing it against a time series, so it cannot tell whether a number is a change-point or routine variation, and cannot tell when a signal first became knowable relative to when the market or the press actually noticed it | This is a sequencing failure, distinct from the first three; the evidence can be fully sourced, uncontradicted, and correctly computed, and the tool can still miss that the real finding is in the timing | Apollo Hospitals' operating bed count grew by only about 150 beds across the four years from FY21-22 through FY24-25, even as operating profit grew at a healthy 14% compound annual rate over the same period [RDA22]; a snapshot read of any single year's results would not surface this, because the finding exists only in the multi-year trend |

### 4.2 What a human equity analyst does, that a summariser does not

A value-chain sketch of an equity research analyst's own actual work habits clarifies exactly what Next Signal's Challenge and Connect stages are trying to reproduce mechanically. An analyst's work is reported to include **channel checks**, third-party research built from interviewing a company's suppliers, distributors, and customers, usually without the target company's knowledge [RA08]; a 2008 survey of 140 investors found about half of respondents conduct channel checks as a regular part of their process [RA09]. An analyst also runs **forensic accounting screens**, of which the two most established are the Beneish M-Score, an eight-variable formula for earnings-manipulation risk published by Messod Beneish in 1999 [RA11] [RA12], and Richard Sloan's accrual-anomaly work, published in The Accounting Review in July 1996 [RA16], operationalised as an accrual ratio dividing a measure of the gap between net income and cash flow by total assets [RA17] [RA18]. An analyst **tracks management guidance against actual outcomes** quarter over quarter, which is exactly the kind of test that catches Apollo Hospitals' Apollo 24/7 digital-business breakeven guidance sliding, by this document's own count, across at least three successive quarters: guided for Q4 FY26 as of an August 2025 forum summary of the company's own concall [RDA51], still showing a cash loss of about Rs 16 crore when Q4 FY26 actually arrived [RDA40], then re-guided to Q1 FY27 and then to Q2 FY27 in successive brokerage notes [RDA50]. None of this, the channel check, the forensic screen, or the guidance-tracking discipline, is reproduced by a tool that only reads and summarises a single company's own documents; each requires either external evidence (channel checks), a standardised calculation applied consistently across periods (forensic screens), or a persistent memory of prior guidance compared against a later outcome (guidance tracking). Next Signal's Calculate stage reproduces the forensic-screen habit as part of its metric library; its Challenge stage reproduces the guidance-tracking habit as one of its nine rival-explanation tests; and its Connect stage, by design, cannot reproduce a literal channel check (an interview with an undisclosed supplier is not public information and is explicitly out of scope under the brief's own public-information-only rule), but it reproduces the same evidentiary instinct by weighting peer filings, regulator records, and industry data as independent of the company, which is the same reason a channel check is considered independent.

The table below lines up each analyst habit against what a plain summarising tool actually does instead, and the Next Signal stage that closes the specific gap, so the value-chain sketch above reads as a direct, checkable mapping rather than a general comparison.

| Analyst habit | What a summarising tool does instead | Next Signal stage that reproduces the habit |
|---|---|---|
| Channel checks (third-party interviews with suppliers, distributors, customers) [RA08] [RA09] | Nothing; the retrieval index never contains undisclosed third-party interviews | Not literally reproduced (out of scope under the brief's public-information-only rule), but the Connect stage's weighting of peer filings and regulator records as independent of the company reproduces the same evidentiary instinct |
| Forensic accounting screens (Beneish M-Score [RA11] [RA12], Sloan accrual ratio [RA16] [RA17]) | Nothing; a summarising tool does not apply a standardised formula consistently across periods | The Calculate stage's metric library |
| Guidance-versus-actual tracking (for example Apollo 24/7's breakeven guidance sliding across three quarters [RDA51] [RDA40] [RDA50]) | Nothing; a summarising tool has no persistent memory of a prior quarter's stated guidance to compare against a later outcome | The Challenge stage's rival-explanation battery, specifically its persistence-across-periods test |

### 4.3 What the literature says about language models doing this kind of task

Published benchmarks of large language models on financial question-answering tasks consistently show failure rates for exactly the kind of retrieval-and-calculation task a Track D discovery requires, which is the literature-based justification for not trusting a plain summarising agent to do this reliably on its own.

| Benchmark | What it tests | Reported result | Source |
|---|---|---|---|
| FinanceBench | A 10,231-question open-book financial question-answering benchmark | On a 150-case sample, GPT-4-Turbo with a retrieval system incorrectly answered or refused to answer 81% of questions | [RA19] [RA20] |
| FinQA | Numerical reasoning over financial filings, scored on execution and program accuracy | The best reported model (FinQANet, RoBERTa-large) reached 61.24% execution accuracy and 58.86% program accuracy, against 91.16% and 87.49% for human experts | [RA22] [RA23] |
| DocFinQA | FinQA-style questions extended to full SEC filings, raising average context length from 687 words to about 123,453 words | On a 200-question long-document case study, GPT-4 with retrieval scored 47.5% accuracy, versus 41.0% for non-expert humans and only 20 to 23% for GPT-4 without retrieval | [RA25] [RA27] |
| DocFinQA (retrieval-only test set) | Fine-tuned retrieval accuracy on long financial documents | GPT-3.5 at 42.6% accuracy, Llama 2 7B with supervised fine-tuning at 36.1%, base Llama 2 7B at 13.5% | [RA26] |
| ALCE (citation generation) | Whether a model's generated text carries citations that actually verify its claims, across three question-answering datasets | On the ELI5 dataset, even the best-performing model tested lacked complete citation support in about half of its generations | [RA69] [RA70] |
| DeepHalluBench | 100 hallucination-prone deep-research tasks, tested against six deep-research agents | None of the six systems tested achieved robust reliability across the task set | [RA72] |

Two patterns in this literature matter for Next Signal's own design, beyond the raw numbers. First, accuracy drops sharply as document length grows (DocFinQA's own context length jumped from 687 to about 123,453 words between FinQA and its own extension, and accuracy dropped correspondingly) [RA25] [RA27], which is exactly the regime a real company's multi-year filing set sits in, and exactly why the Connect stage's provenance model anchors every extracted number to a specific passage and page rather than letting a model summarise freely across an entire document. Second, citation-support failures (ALCE's roughly 50% rate of incomplete citation support on one of its own three test sets) [RA70] are a direct literature parallel to the brief's own requirement that every claim be traceable to its source [RA02], and justify why Next Signal's Prove stage treats "the model said so" as insufficient on its own; every claim needs a verbatim-passage anchor, checked mechanically, not merely a model's self-reported citation.

The table below names the specific Next Signal mechanism that each of these two literature patterns justifies, so the link between a published benchmark result and a design decision is stated once, directly, rather than left implicit in the prose above.

| Literature pattern | Measured effect | Next Signal mechanism it justifies |
|---|---|---|
| Accuracy drops as document length grows | GPT-4 without retrieval fell to 20 to 23% accuracy on DocFinQA's long-document case study, versus 47.5% with retrieval [RA27] | The Connect stage's provenance model, which anchors every number to a specific passage and page instead of asking a model to reason freely over an entire filing |
| Citation-support failures persist even in strong models | The best-performing model tested on ALCE's ELI5 dataset still lacked complete citation support in about half of its generations [RA70] | The Prove stage's mechanical verbatim-passage check, which does not accept a model's self-reported citation as sufficient on its own |

### 4.4 The seed sentence, stated and explained

The evidence a Track D discovery needs is split across at least four different publishers, and the company itself is only one of them. This sentence is not a rhetorical flourish; it is a measured claim about where the evidence behind this document's own six seed events actually originated, and the table in section 4.5 below is the measurement that supports it. The sentence matters for Next Signal's design because it is the direct justification for building an independence graph that counts origins rather than documents (section 2.3): if the evidence genuinely concentrates in the company's own disclosures, an independence count would be a decorative feature; because the evidence is genuinely spread across regulator records, market reactions, peer filings, and industry data, counting origins is the mechanism that actually distinguishes a well-evidenced discovery from a thinly-sourced one.

### 4.5 Source-origin breakdown of six seed events

The six events below are drawn directly from this document's own company-level research across Sun Pharma, Cipla, Dr. Reddy's, Apollo Hospitals, and Max Healthcare. For each, the table names the publisher type that first carried the event publicly, using the same five-tier vocabulary as section 0.3 (company filing, regulator, rating agency or industry body, peer filing, press or aggregator), and notes whether mainstream press coverage followed later.

| Event | Company | First public origin | Publisher type | Did mainstream press follow later |
|---|---|---|---|---|
| Organon acquisition, signed 27 Apr 2026, enterprise value about USD 11.75 billion | Sun Pharma | Company's own definitive agreement announcement, same-day exchange disclosure | Company filing | Yes, same-day trade-press coverage followed the exchange disclosure [RDS24] |
| Pharmathen (Rodopi, Greece) Form 483 with nine observations, inspected 10 to 21 Nov 2025 | Cipla (via its exclusive manufacturing partner) | USFDA inspection record; the redacted Form 483 itself became public 7 Jan 2026, before Cipla's own Regulation 30 disclosure dated 14 Jan 2026 | Regulator | Yes, trade and business press covered the supply disruption only after Cipla's own disclosure [RDC52] [RDC53] |
| Q1 FY27 (quarter ended 30 Jun 2026) lenalidomide revenue decline and semaglutide API provision | Dr. Reddy's | Company's own Form 6-K exhibit filed with the US SEC, same day as the NSE results release | Company filing | Yes, secondary business press (several outlets) covered the results within a day, with some early reports citing figures that the primary filing later corrected [RDD21] |
| HealthCo demerger composite scheme | Apollo Hospitals | NCLT (Chennai bench) procedural order dated 26 Mar 2026, directing a shareholder meeting | Regulator (tribunal) | Yes, trade press reported the demerger timeline and targets only after the NCLT order and the company's own subsequent exchange filings [RDA45] [RDA46] |
| 400-bed brownfield tower at Max Smart Super Speciality Hospital, Saket: commissioning guided, then phased | Max Healthcare | Company's own Q2 FY26 earnings-call guidance, which stated the tower would be commissioned within about 30 days of the call | Company filing (earnings call) | Yes, a ceremonial inauguration was covered by mainstream press (Free Press Journal) on 3 Sep 2026, weeks after the company's own Q1 FY27 call had already reported only half the tower operational [RDM47] [RDM48] |
| Halol facility classified Official Action Indicated after a Jun 2025 inspection, with two of eight observations repeating a 2022 warning letter | Sun Pharma | USFDA inspection and classification record | Regulator | Yes, specialist pharma-trade press (Moneylife) covered the classification; this is a specialist, not mainstream, outlet, which is itself a data point about how far this kind of regulator-origin story travels before reaching general business press [RDS32] |

Four of the six events were first publicly knowable through a company filing or a regulator record, not through press reporting; mainstream or trade press coverage, where it appeared at all, followed the primary disclosure rather than preceding it in every single case gathered here. This is the concrete, company-level basis for the seed sentence above, and it is also the basis for the temporal-reasoning claim in section 2.3: a system that can show, with dates, that a regulator record or an exchange filing predates the first press item on the same story is demonstrating exactly the kind of lead-lag measurement the brief's temporal-reasoning criterion rewards.

The table below rolls the six events up into a single frequency count by publisher type, the summary that most directly supports the "at least four publishers" seed sentence.

| Publisher type of first public origin | Count across the six seed events | Events |
|---|---|---|
| Company filing (including an earnings call treated as a disclosure) | 3 | Sun Pharma / Organon; Dr. Reddy's / Q1 FY27; Max Healthcare / Saket tower guidance |
| Regulator (including a tribunal order) | 3 | Cipla / Pharmathen Form 483; Apollo / NCLT order; Sun Pharma / Halol OAI |
| Rating agency, peer filing, or press as the first origin | 0 | None of the six events were first publicly knowable through these channels; they appeared only as follow-on coverage |

Across these same six events, at least four distinct publisher types appear once mainstream and trade press follow-on coverage is counted alongside the first-origin publisher: the company itself, a regulator, specialist trade press, and general business press, which is the direct company-level support for the seed sentence's claim that a Track D discovery's evidence typically spans at least four publishers with the company as only one of them.

### What this section establishes, and what it does not

- This section gives a four-branch, mutually exclusive and collectively exhaustive account of why a plain summarising agent misses a Track D discovery, each branch illustrated with a real example already verified in this document's own company research.
- It grounds the claim that language models struggle at exactly this kind of task in published benchmark numbers (FinanceBench, FinQA, DocFinQA, ALCE, DeepHalluBench), rather than asserting the claim without evidence.
- It states and measures the seed sentence that the evidence a Track D discovery needs is split across at least four publishers, with a source-origin table across six real events showing that four of six were first knowable through a company filing or a regulator record, not through press.
- It does not yet claim that Next Signal's own independence graph, once built, will reproduce this four-or-more-publisher pattern automatically for every discovery the engine proposes; that is an empirical claim that depends on the evaluation harness, and belongs to section 21 of the full document once that harness has run.
- It does not cover the company-specific financial detail of any of the five companies beyond what is needed to illustrate the four issue-tree branches and the six seed events; the full symmetric company dossiers belong to section 9 of the full document, written by a different part of this team.

---

Words, tables, dashes, exclamations for the whole file: 11,389 words, 24 tables, 0 dashes, 0 exclamations.

## 5. Indian pharma runs five business models, and each one reports its health in a different place

**Answer.** The five NIFTY 50 Track D pharmaceutical names, and the nineteen tie-break names around them, each
mix five distinct business models in different proportions: US generics, India branded formulations, emerging
markets and Europe, CDMO or API manufacturing, and global specialty or innovative medicines. Each model's health
shows up in a different disclosure surface. US generics health shows up in a geography note and a USFDA facility
record read together. India branded formulations health shows up in a geography note and a market-share line in a
credit-rating rationale. Emerging markets health shows up only in a geography note, usually without any further
breakdown. CDMO and API health shows up in a standalone company's own income statement, because the model is
usually run by a dedicated listed entity rather than a segment of a diversified one. Global specialty or
innovative medicines health shows up in management commentary and a product-level revenue disclosure that is
inconsistently given from one quarter to the next.

### 5.1 The five models, defined by where their money and their risk actually sit

**US generics.** Revenue is earned in US dollars, from a basket of molecules sold into a market where price falls
every year a product stays off patent protection, interrupted only by a temporary volume-limited license (as with
lenalidomide, the Celgene settlement product) or a first-to-file 180-day exclusivity window. Dr. Reddy's, Sun
Pharma, Cipla, Lupin and Aurobindo Pharma all run this model as their largest single geography. Teva launched the
first generic lenalidomide in the United States in March 2022, with Dr. Reddy's receiving first-to-file exclusivity
on the 2.5 mg and 20 mg capsule strengths and a volume-limited license that lifted entirely only on 31 Jan 2026
[RB16, RB17, RDD32]. The mechanics that govern this model, Hatch-Waxman Paragraph IV certification, the 180-day
exclusivity clock, and the 30-month litigation stay that follows a timely infringement suit, are legal timers, not
operating decisions, and they explain single-quarter revenue cliffs that look like company-specific weakness but
are actually calendar events [RB18, RB19, RB20, RB22].

**India branded formulations.** Revenue is earned in rupees, from branded generic prescriptions sold through
doctors and retail pharmacies, in a market where branded generics (not trade generics or unbranded generics) hold
about 87% of value [RB81]. Cipla's One India business, Sun Pharma's India formulations business, Abbott India,
Mankind Pharma, Alkem Laboratories and Torrent Pharmaceuticals all run this as their largest or second-largest
model. Growth here is double-digit and comparatively stable, insulated from US pricing cycles but exposed to NPPA
price control and trade-margin rationalisation instead [RB42, RB43].

**Emerging markets and Europe.** Revenue is earned across a long tail of smaller, individually non-material
markets (Africa, Latin America, Eastern Europe, the CIS states, parts of Asia), each with its own regulator and
currency, aggregated into a single reporting line that rarely gets its own management discussion. Cipla's One
Africa and Emerging Markets and Europe lines, and Sun Pharma's and Dr. Reddy's emerging-markets lines, all sit here.
This is the model with the thinnest disclosure of the five, by construction: a single growth percentage with no
country breakdown is standard, not an omission.

**CDMO and API (contract development and manufacturing, and active pharmaceutical ingredients).** Revenue is
earned from other pharmaceutical companies, as a custom-synthesis or formulation-manufacturing partner, not from
patients at all. Divi's Laboratories, Laurus Labs, Piramal Pharma, Sai Life Sciences and Gland Pharma run this
model as their primary business, which is why their disclosure is the cleanest of the five: a dedicated listed
entity's own income statement is the model's segment note, because there is usually no other segment to net it
against. India's CRDMO market is estimated at about USD 7 billion, growing near 14% a year to FY28, on Bajaj Asset
Management Company's narrower contract-research-and-manufacturing definition; a broader "contract manufacturing"
definition from Mordor Intelligence puts the market at USD 22.51 billion in 2024, rising to USD 44.63 billion by
2029 [RB76, RB77]. The two estimates differ by more than threefold because they scope the market differently, and
neither should be cited alone as "the India CDMO market size" without naming its scope, per this research's own
logged ruling on the conflict [RB76, RB77]. India's domestic API industry is separately estimated at about USD 13.5
billion for calendar 2024, roughly a quarter of the country's pharmaceutical industry by value, of which about 65%
is consumed domestically and the remainder exported [RB78, RB79].

**Global specialty and innovative medicines.** Revenue is earned from patented or biologic products sold in the
United States and other developed markets, priced and marketed like an originator company's product rather than a
generic. Sun Pharma runs the most advanced version of this model among the Track D five: its Global Innovative
Medicines business grew sales 12.8% year on year to USD 351 million in Q1 FY27, 21.9% of total consolidated sales,
led by Ilumya, Odomzo and Cequa [RB72], and for full FY26 the business scaled to approximately USD 1,420 million,
about 22% of consolidated sales, with Ilumya alone generating approximately USD 796 million [RB75]. Sun Pharma's
own management noted that in Q2 FY26, US sales of innovative medicines exceeded US generic sales for the first
time [RDS58]. The Organon acquisition, signed 27 Apr 2026 at an enterprise value of USD 11.75 billion, is explicitly
a bet to scale this fifth model further: Organon's own calendar 2025 revenue was about USD 6.2 billion, and the
combined pro forma revenue is cited at about USD 12.4 billion [RDS24, RDS25, RDS26].

### 5.2 Five-year and recent-quarter numbers by model, from the company dossiers

**Table 1. The five business models, by representative company, with the clearest FY21 to FY26 (or FY24 to FY26,
where that is all the dossiers found) figures available.**

| Model | Company | Metric | FY21 | FY23 | FY24 | FY25 | FY26 | Latest quarter | Source |
|---|---|---|---|---|---|---|---|---|---|
| US generics | Dr. Reddy's North America | Segment revenue (Rs crore) | not located in this pass | Rs 10,170.4 | Rs 12,989.5 (+28%) | included in FY26 line below | Rs 11,373.7 (down 22%) | Q1 FY27: Rs 2,204.8, down 35% YoY | RDD74, RDD58, RDD18 |
| US generics | Cipla North America | Segment revenue | not located | not located | not located | 29% of FY25 revenue | US$780 million | Q1 FY27: US$162 million, about 22% of revenue | RDC20, RDC17, RDC45 |
| US generics | Sun Pharma US formulations | Segment revenue (USD million) | not located | not located | not located | Q4 FY25: 464, down 2.5% | about 29% of FY26 revenue | Q1 FY27: 427, down 9.7% | RDS21, RDS53, RDS62 |
| India branded formulations | Cipla One India | Segment revenue (Rs crore) | not located | not located | not located | 42% of revenue | over Rs 12,500 | Q1 FY27: up 12% YoY | RDC20, RDC16, RDC42 |
| India branded formulations | Sun Pharma India formulations | Segment revenue (Rs crore) | not located | not located | not located | Q4 FY25: Rs 4,213, up 13.6% | about 8.4% of India's formulation market | Q1 FY27: about Rs 5,475, up 16% | RDS53, RDS13, RDS63 |
| India branded formulations | Abbott India | Total revenue (Rs crore) | not located | not located | Rs 5,848.9 | Rs 6,409.2 | Rs 6,929.1 | Q1 FY27 profit Rs 428.5 crore | RDT04, RDT05, RDT06, RDT07 |
| India branded formulations | Mankind Pharma | Total revenue (Rs crore) | not located | not located | Rs 10,260.4 | Rs 12,207.4 | Rs 14,277.6 (figure flagged as a possible aggregator error, see 5.4) | FY26 EBITDA margin 27.1% (company-reported, differs from aggregator operating margin) | RDT59, RDT60, RDT61, RDT62 |
| Emerging markets and Europe | Cipla Emerging Markets and Europe | Segment revenue | not located | not located | not located | 12% of revenue | crossed US$400 million annualised | Q1 FY27: over US$100 million, up 5% YoY | RDC20, RDC19, RDC43 |
| Emerging markets and Europe | Dr. Reddy's Europe | Segment revenue (Rs crore) | not located | not located | not located | not located | Rs 5,550.1 (up 55% reported, up 14% excluding the acquired Nicotinell NRT business) | not located | RDD58, RDD47 |
| CDMO and API | Divi's Laboratories | Total revenue (Rs crore) | not located | not located | Rs 7,845.0 | Rs 9,360.0 | Rs 10,560.0 | operating margin rose from 23.3% to 28.2% over FY24 to FY26 | RDT29, RDT30, RDT31 |
| CDMO and API | Laurus Labs | Total revenue (Rs crore) | not located | not located | Rs 5,040.8 | Rs 5,554.0 | Rs 6,812.9 | PAT roughly doubled FY24 to FY26 | RDT49, RDT50, RDT51 |
| Global specialty or innovative medicines | Sun Pharma Global Innovative Medicines | Segment revenue (USD million) | not located | not located | not located | not located | about 1,420, about 22% of sales | Q1 FY27: 351, up 12.8%, 21.9% of sales | RB75, RB72 |

### 5.3 PESTLE for Indian pharma

**Table 2. PESTLE factors affecting Indian pharma across all five models, as of October 2026.**

| Factor | Observation | Source |
|---|---|---|
| Political | US Section 232 Proclamation 11020 (2 Apr 2026) imposes a 100% tariff on patented pharmaceuticals and ingredients while carving out generics and biosimilars at 0%, with the generics exemption open to revisit within one year | RB50 |
| Political | BIOSECURE Act enacted as part of the FY2026 NDAA, restricting US federal procurement from named Chinese biotechnology companies of concern, though binding contracting restrictions are not expected to take legal effect until late 2027 to 2028 | RB53, RB54 |
| Economic | Indian Pharmaceutical Market growth guided at 7.8 to 8.1% for calendar 2026 by Pharmarack, after 8.1% growth in calendar 2025; India's pharma exports rose 6.8% year on year to USD 8.10 billion in Q1 FY27 | RB01, RB06 |
| Economic | US generics price erosion runs in a mid-single-digit to low-single-digit percentage range per quarter, per company-specific commentary (Teva, Sandoz), rather than a single clean industry-wide series | RB63, RB64 |
| Social | GLP-1 category (semaglutide generics) is projected by Pharmarack at 60 to 70% category growth for calendar 2026, and generic semaglutide launched in India in March 2026 and in Canada in May 2026 | RB02, RB58, RB59 |
| Technological | India's CRDMO market is estimated at about USD 7 billion, growing near 14% a year to FY28, on a narrower scope than the broader "contract manufacturing" estimate of USD 22.51 billion for 2024 | RB76, RB77 |
| Legal | Revised Schedule M (updated good manufacturing practice standards) took effect for large manufacturers around mid to late 2024, with MSME units given an extension; the exact gazette date and deadline day carry a logged, unresolved discrepancy across secondary sources | RB37, RB38, RB39, RB40 |
| Legal | UCPMP 2024 (marketing-practices code) is administratively described as mandatory by the issuing Department of Pharmaceuticals, but its legislative authority and enforceability are contested by legal commentary, so it should be cited as mandatory in practice but legally untested | RB46, RB48, RB49 |
| Environmental | No source in this research traced a quantified environmental-compliance cost or carbon-disclosure requirement specific to Indian pharma manufacturing; this is a genuine gap, not a confirmed absence of such requirements | not located |

### 5.4 Porter's Five Forces, US generics versus India branded formulations

**Table 3. The same five forces produce an opposite competitive structure for the two largest models.**

| Force | US generics | India branded formulations |
|---|---|---|
| Threat of new entrants | Low to moderate: an ANDA takes years and a GMP-compliant facility to file, but FDA approved 689 ANDAs and tentatively approved 250 more in fiscal 2025 alone, so entrants keep arriving even as a single molecule's price keeps falling | Moderate to high: branded generics require marketing spend and doctor relationships, not patent or regulatory barriers, and trade generics and Jan Aushadhi channels are explicitly growing their share at the expense of branded generics | RB11, RB83 |
| Supplier power (upstream, API and site compliance) | High: a single manufacturing site's USFDA classification (NAI, VAI or OAI) can halt an entire product line, as Cipla's Pharmathen-supplied lanreotide and Sun Pharma's Halol-made products both show | Lower: domestic formulation supply chains are less exposed to a single foreign regulator's site classification, though CDSCO's own revised Schedule M raises the domestic compliance bar | RDC52, RDS32 |
| Buyer power (downstream) | Very high: US pharmacy benefit managers, wholesalers and payers negotiate price directly, and a 180-day first-filer exclusivity window is the main lever a generic maker has against this power, for a limited time only | Moderate: Indian doctors and retail pharmacists influence brand choice, but NPPA's DPCO 2013 ceiling pricing on scheduled drugs and trade-margin rationalisation on non-scheduled drugs cap how much buyer-side pricing power a branded generic maker can exercise upward | RB18, RB42, RB43 |
| Threat of substitutes | High and structural: every US generic is itself a substitute for the original branded product, and is in turn substitutable by the next company's bioequivalent version the moment that company's ANDA clears | Lower: a prescriber's brand habit and a pharmacist's stocking choice create switching friction that a pure US generic does not have, which is part of why branded generics hold about 87% of India's domestic market value | RB81 |
| Rivalry among existing competitors | Intense and price-led: Novartis and Bristol Myers Squibb both name specific molecules (Promacta, Tasigna, Entresto, Revlimid, Pomalyst) losing exclusivity as a recurring earnings drag, which is the US generics industry's business model from the other side of the table | Moderate and share-led: Sun Pharma's roughly 8.4% domestic market share is described by its own rating agency as a leadership position, implying a more fragmented, less price-led rivalry structure than the US market | RB65, RB66, RDS13 |

### 5.5 Where each model's key signals are actually disclosed

**Table 4. Disclosure location, by business model.**

| Model | Primary disclosure surface | Secondary surface | What is usually missing |
|---|---|---|---|
| US generics | Geography note in the quarterly results press release (revenue in USD or Rs crore, YoY growth, a one-line attribution) | USFDA facility records (Form 483, inspection classification, warning letters, import alerts), read separately | A single combined view linking the revenue line to the specific facility whose compliance status is driving it; this research had to build that link manually for Sun Pharma, Cipla and Dr. Reddy's | RDS62, RDC45, RDD18 |
| India branded formulations | Geography note in the quarterly results press release, plus a market-share figure in a credit-rating rationale | Management commentary on earnings calls | A standard, India-wide, company-comparable market-share series; each company's cited share figure comes from a different rating agency's own estimate, not a common source | RDS13, RDC20 |
| Emerging markets and Europe | A single aggregated geography line, with growth percentage only | Occasional management-call colour on a specific country (for example a named NRT acquisition's contribution to Europe growth) | Country-level breakdown; by construction this model's disclosure is thinner than any of the other four | RDC19, RDD47 |
| CDMO and API | The company's own standalone income statement (segment and total line coincide because this is usually the company's whole business) | Customer-level disclosure almost never appears, for confidentiality reasons | Named-customer revenue concentration; no dossier in this research found a CDMO naming the share of revenue from its largest customer | RDT29, RDT49 |
| Global specialty and innovative medicines | Management commentary on earnings calls, naming specific products (Ilumya, Odomzo, Cequa, Unloxcyt) | A segment revenue figure that appears in some quarters and not others | A consistent quarter-to-quarter segment disclosure; Sun Pharma's own global specialty figures vary in exactly which products and which currency basis are quoted across different quarters' press releases | RB72, RDS70, RDS71 |

### 5.6 A caution the discipline of this research surfaced on its own

Two aggregator-sourced figures in this section's own source tables disagree with themselves in a way worth naming
directly, because it is exactly the kind of error a computation-first system is built to catch. Mankind Pharma's
FY2026 net income, as read from stockanalysis.com, is Rs 1,912.9 crore, a figure identical to the same aggregator's
own stated FY2024 net income for the same company [RDT59, RDT61]. That digit match is either a genuine coincidence
or an aggregator data error, and it should not be used in any deck, report table or UI demo copy until it is
checked against Mankind Pharma's own FY2026 results filing. Similarly, Sun Pharma's FY2026 consolidated revenue is
reported at three different figures across three sources opened in this research (Rs 58,563 crore in a CRISIL
rating rationale, Rs 58,462 crore on stockanalysis.com, and Rs 58,220 crore in a trade-press report), none of which
is the company's own annual report [RDS14, RDS38, RDS42]. Until the company's own FY26 annual report is opened
directly, this research states Sun Pharma's FY26 revenue as "approximately Rs 58,200 to 58,600 crore, source
dependent" rather than picking one number silently.

### 5.7 Revenue mix, growth and risk profile, compared directly across the five models

**Table 5. Dr. Reddy's own FY2026 segment table, recomputed as a share of its reported Global Generics total, to
show how one company alone carries three of the five models side by side.**

| Segment (model) | FY2026 revenue (Rs million) | Share of Global Generics total (335,933 Rs million), computed | Source |
|---|---|---|---|
| North America (US generics) | 113,737 | 113,737 / 335,933 = 33.9% | RDD58 |
| Emerging markets | 67,608 | 67,608 / 335,933 = 20.1% | RDD58 |
| India (India branded formulations) | 62,186 | 62,186 / 335,933 = 18.5% | RDD58 |
| Europe (emerging markets and Europe model) | 55,501 | 55,501 / 335,933 = 16.5% | RDD58 |
| PSAI (API, the CDMO and API model) | 34,774 | 34,774 / 335,933 = 10.4% | RDD58 |

This single company table shows why a model-by-model view, not a company-by-company view, is the right lens for
Track D: Dr. Reddy's own US generics share (33.9%) moved sharply (down 22% YoY at the segment level for FY26, and
down a further 35% YoY in the single quarter examined in section 6) while its India branded-formulations share
(18.5%) grew steadily, and a system that only watched "Dr. Reddy's total revenue" would net the two movements
against each other and miss both stories.

**Table 6. CDMO and API model, five companies, FY2024 to FY2026 revenue and the direction of operating margin, to
show the model's shared growth pattern despite very different starting sizes.**

| Company | FY2024 revenue (Rs crore) | FY2026 revenue (Rs crore) | Two-year revenue growth, computed | Operating margin direction, FY24 to FY26 | Source |
|---|---|---|---|---|---|
| Divi's Laboratories | 7,845.0 | 10,560.0 | (10,560.0 - 7,845.0) / 7,845.0 = 34.6% | rose, 23.3% to 28.2% | RDT29, RDT31 |
| Laurus Labs | 5,040.8 | 6,812.9 | (6,812.9 - 5,040.8) / 5,040.8 = 35.2% | rose sharply, 7.83% to 19.07% | RDT49, RDT51 |
| Piramal Pharma | 8,171.2 | 8,869.1 | (8,869.1 - 8,171.2) / 8,171.2 = 8.5% | compressed to near breakeven, 5.63% to 1.08%, with a reported net loss in FY26 despite positive operating income | RDT64, RDT66 |
| Sai Life Sciences | 1,465.2 | 2,192.5 | (2,192.5 - 1,465.2) / 1,465.2 = 49.6% | rose, 11.76% to 21.22% on the aggregator's operating-margin basis (the company's own FY26 presentation separately states an EBITDA margin near 30%, a different metric, not a contradiction) | RDT69, RDT71 |
| Gland Pharma | 5,664.7 | 6,430.7 | (6,430.7 - 5,664.7) / 5,664.7 = 13.5% | rose after a FY25 dip, 17.15% to 15.53% to 18.52% | RDT34, RDT36 |

Four of the five CDMO and API companies in this table grew revenue faster than either pharma model shown in Table
1 of this section over the same two years, and three of the five also expanded operating margin over the period,
consistent with this model's structurally cleaner disclosure (section 5.5) reflecting a business that is, in
effect, reporting its true single-segment economics rather than netting several models together.

**Table 7. A qualitative risk and disclosure comparison across the five models, for use when the engine scores a
discovery's novelty and evidence-independence.**

| Model | Primary volatility driver | Typical disclosure lag | Regulator type most relevant |
|---|---|---|---|
| US generics | A legal or contractual event (exclusivity window, volume-license cap) with a known calendar date, plus ongoing price erosion | Low for the revenue figure itself (quarterly), high for the facility-compliance record that explains it (months to years) | USFDA (inspections, classifications, warning letters, import alerts) |
| India branded formulations | Slow, demand and price-control driven, rarely a single-quarter shock | Low; the geography note appears every quarter | CDSCO and NPPA |
| Emerging markets and Europe | Currency and country-mix effects, aggregated away from single-country visibility | High; a country-level driver is almost never disclosed separately | Varies by country, rarely disclosed by name |
| CDMO and API | Customer concentration and a single large contract's timing | Low for the headline revenue figure (it is usually the whole company), high for the underlying customer-level driver | USFDA and other importing-country regulators, for the manufacturing site itself |
| Global specialty or innovative medicines | A single product's launch timing, patent status, or biosimilar competition | Moderate; named products appear in some quarters' commentary and not others | USFDA (for approval and biosimilar interchangeability) |

### What this section establishes, and what it does not

- It establishes that Indian pharma's apparent single-sector structure is actually five distinct business models,
  each with its own revenue currency, its own competitive forces, and its own disclosure surface, with worked
  FY21 to FY26 or FY24 to FY26 figures for at least one representative company per model, sourced to specific
  R-IDs in the company dossiers.
- It establishes a named Porter's Five Forces contrast between the two largest models (US generics and India
  branded formulations), showing the forces point in opposite directions on four of the five axes.
- It establishes a PESTLE table naming the specific 2024 to 2026 policy and market events (tariffs, BIOSECURE,
  Schedule M, UCPMP, GLP-1 patent expiries) that matter for Track D, each sourced to a specific R-B fact.
- It does not establish a single, source-agreed FY21 figure for several of the companies named, because several
  five-year segment tables were not located in the underlying lane research and are logged there as gaps, not
  filled here with an estimate.
- It does not resolve the Sun Pharma FY26 revenue conflict or the Mankind Pharma FY2024/FY2026 net-income digit
  match; both are stated as open, named conflicts rather than silently picked numbers, and both are flagged for
  resolution against the respective company's own primary filing before any deck or report table cites a single
  figure for either.
- It does not attempt a sixth business model (diagnostics, consumer health, or medical devices) separately,
  because the symmetric five-company Track D dossier set does not carry one as a primary model for any of the
  five NIFTY 50 names; where a company runs a sixth line (Cipla's biosimilar pipeline target, Dr. Reddy's consumer
  health ambition), it is noted inside the relevant model above rather than given its own row.

(selfcheck: words 2010, tables 4, dashes 0, exclamations 0)

## 6. Regulation leads the numbers: USFDA, CDSCO and NPPA records often surface a problem before the income statement does

**Answer.** A USFDA Form 483 observation, an inspection classification, a warning letter and an import alert form
a sequential pipeline that typically runs months to years ahead of the quarter in which a company's own income
statement shows the resulting revenue hit, and all six of this research's planning-time seed events (E1 to E6) show
a dated regulator record, rating action, or exchange filing preceding or coinciding with the market narrative, not
following it. A single, authoritative year-by-year count of how many of these warning letters land on Indian sites
each year from 2019 to 2026 does not exist in any source this research opened directly, and that absence is itself
a finding about how incomplete the public regulatory record is, not a gap this research can quietly fill with an
estimate.

### 6.1 The pipeline, and what is known about its typical timing

The pipeline runs: an inspection produces a Form 483 listing observations, FDA then classifies the inspection as No
Action Indicated (NAI, acceptable compliance), Voluntary Action Indicated (VAI, objectionable conditions found but
no regulatory action recommended), or Official Action Indicated (OAI, unacceptable compliance warranting
regulatory action) [RB24]. An OAI classification can lead to a warning letter, and persistent non-compliance can
lead to Import Alert 66-40, which authorises detention without physical examination of a named facility's products
at the US border, citing Section 801(a)(3) of the Food, Drug and Cosmetic Act [RB27, RB28]. This research did not
find a published study giving a typical, dated elapsed-time figure between these four stages for Indian sites
specifically; the only timing evidence available is anecdotal, single-case timing drawn from the company dossiers.

**Table 1. Observed timing between pipeline stages, from named cases in the company dossiers (anecdotal, not a
published statistical study).**

| Company and site | Form 483 or inspection date | Classification | Warning letter or import-alert date | Elapsed time | Source |
|---|---|---|---|---|---|
| Sun Pharma, Halol | 2 to 13 Jun 2025 inspection | OAI (eight observations, two repeat from the Dec 2022 warning letter) | remains under an existing import alert | the prior Halol OAI cycle (from a Sep 2014 inspection) took close to four years to resolve, to Jun 2018 | RDS32, RDS34 |
| Cipla, Pithampur | 6 to 17 Feb 2023 inspection, eight observations | OAI, 5 Aug 2023 | Warning letter dated 17 Nov 2023, disclosed 18 Nov 2023 | about nine months from inspection to warning letter | RDC56 |
| Cipla, Bommasandra | 26 to 30 May 2025 inspection, one observation | initially classified OAI in May 2025 | revised to VAI by email dated 4 Aug 2025 | about three months from initial OAI to a revised, less severe classification | RDC60 |
| Cipla (via partner Pharmathen, Rodopi, Greece) | 10 to 21 Nov 2025 inspection, nine observations | Form 483 made public 7 Jan 2026 | production paused per a Regulation 30 disclosure dated 14 Jan 2026, resupply targeted H1 FY27 | about seven weeks from inspection close to the formal disclosure of a production pause | RDC52, RDC53 |
| Dr. Reddy's, Bachupally | 4 to 12 Oct 2023 inspection, nine observations | not stated in available sources | a further Form 483 at the same site, seven observations, followed a 10-day inspection ending 25 Jun 2026 | the site drew two separate Form 483s roughly 32 months apart | RDD42, RDD39 |

### 6.2 Counts of FDA warning letters to Indian sites, 2019 to 2026: an honest gap, not a number

This research did not find a single authoritative, India-specific, year-by-year count of FDA warning letters to
Indian pharmaceutical manufacturing or testing sites for 2019 through 2026, and the underlying lane's own Gaps
section names this as the single largest unmet research question in that lane [RB research, Gaps]. What exists
instead is fragmentary and partly promotional.

**Table 2. What is actually known about warning-letter volume, stated with its own caveats.**

| Claim | Figure | Caveat | Source |
|---|---|---|---|
| Total 2025 drug-related warning letters versus 2024 | 303 in 2025, a 59% increase from 190 in 2024 | Comes from a promotional webinar marketing page, not from FDA's own database; flagged for independent confirmation and not treated as authoritative | RB30 |
| Country distribution of 85 drug-manufacturer warning letters, 1 Jan to 9 Dec 2025 | 59% to US facilities; China, India, Canada and Turkey named as the next most common site countries | No exact India-specific count given in this source | RB31 |
| Data-integrity findings as a share of warning letters | about 15% of all fiscal 2025 warning letters overall, rising to about 60% of warning letters issued specifically to Indian sites | A sharply higher data-integrity share for Indian sites than the global average, but still from the same unverified cluster of sources as the two rows above | RB32 |
| Named Indian recipients in a 2025 tracker | Cdymax, Hikal, Glenmark, Granules, Macsen Drugs, among others (list incomplete in the retrieved page) | Not a confirmed full-year total; the page was cut off before a count could be confirmed | RB35 |

### 6.3 Public availability and lag of each record type

**Table 3. Access characteristics of the main regulator record types this research relied on.**

| Record type | Public access | Update cadence or lag | Known gaps |
|---|---|---|---|
| FDA Inspection Classification Database | Public, no login barrier found in this research | Refreshes weekly | Excludes state-run inspections, pre-approval inspections, inspections still awaiting final enforcement action, and nonclinical laboratory inspections; some classification data is withheld from the public dashboard until a final enforcement action has been taken | RB25, RB26 |
| FDA Import Alert 66-40 (Red List) | Public | Revised on an irregular schedule (this research found a 15 Jul 2025 substantive revision and an 1 Oct 2026 publication date on the same live page) | The Red List runs long enough that a full count across all listed countries could not be confirmed in a single fetch in this research; one entity (Srikem Laboratories) has remained listed since 6 Jul 2016, illustrating how long a listing can persist | RB27, RB29, RB36 |
| FDA warning letters | Public, but no single authoritative year-by-year India count exists (section 6.2) | Posted with an unquantified lag after issuance | No consolidated, filterable "India only, by year" view was located; this would require a direct, filtered crawl of FDA's own warning-letter database, not completed in this research | RB30, RB31 |
| SEBI Regulation 30 disclosures (material events, India) | Public, via NSE and BSE corporate-filing archives | Company-driven, filed as the event occurs or is confirmed | Disclosure timing depends on the company's own materiality judgment, which is itself a point this research's Challenge stage should test against the regulator record's own dates | RDC53 |
| Credit-rating rationales (CRISIL, ICRA, CARE) | Public, published on the rating agency's own site | Annual as a baseline, with interim actions (reaffirmation, upgrade, watch) issued around material events | Rationales summarise regulatory and operational weaknesses in prose, not in a structured, machine-readable field, so this research extracted them by hand | RDS11, RDC4 |

### 6.4 The 2024 to 2026 policy shocks, and their status as of October 2026

**Table 4. Status of each named policy shock.**

| Policy shock | Current status (as of October 2026) | Source |
|---|---|---|
| US Section 232 tariffs on pharmaceuticals | Proclamation 11020 (2 Apr 2026) set a 100% tariff on patented pharmaceuticals and ingredients, with generics and biosimilars carved out at 0%, and large pharmaceutical companies' liability staggered to start 31 Jul 2026 (a second, uncorroborated claim puts other importers' start at 29 Sep 2026); a separate, not-yet-formal announcement proposed a two-year 0% window for generic imports from 1 Aug, before rates rise to 100% and then 200% | RB50, RB51, RB52 |
| BIOSECURE Act | Enacted as part of the FY2026 National Defense Authorization Act, permanently restricting US federal procurement from named biotechnology companies of concern; binding contracting restrictions are not expected to legally take effect until late 2027 to 2028, pending rulemaking, with existing contracts allowed to continue to 1 Jan 2032; Indian CRDMO firms are estimated to gain about USD 700 million a year from the resulting China-plus-one shift | RB53, RB54, RB55 |
| US IRA Medicare Drug Price Negotiation Program | The first ten negotiated-price drugs took effect in 2026; five of the ten (Xarelto, Farxiga, Entresto, Stelara, Novolog) face potential generic or biosimilar competition under the program's own generic-displacement rule, under which a generic launching after 31 Mar 2026 does not remove the brand drug from the negotiated list until 2028 | RB85, RB86 |
| Semaglutide (GLP-1) patent expiries | India's core semaglutide patent expired, with Dr. Reddy's, Zydus, Alkem, Sun Pharma and Glenmark launching generics in India in March 2026; Health Canada granted Dr. Reddy's a Notice of Compliance on 28 Apr 2026, with Dr. Reddy's and Apotex both commercially launching in Canada in May 2026; Brazilian approvals were reported weeks after a Sun Pharma approval in South Africa, but an actual Brazilian commercial launch was not confirmed in this research | RB58, RB59, RB61 |

### 6.5 A timeline table for each seed event, E1 to E6

**Table 5. The six planning-time seed events, re-verified against the company dossiers' primary sources, with
exact dates.**

| Event | Date | What happened | Primary source |
|---|---|---|---|
| E1/E2, Dr. Reddy's Q1 FY27 results | 22 Jul 2026 | Consolidated revenue Rs 80,705 million, down 5.6% YoY; North America revenue down 35% YoY to Rs 22,048 million on lower lenalidomide sales; a Rs 2,397 million (about Rs 240 crore) provision taken for semaglutide API inventory and associated costs; profit attributable to equity holders of the parent confirmed at Rs 4,435 million (Rs 443.5 crore) in the primary SEC 6-K exhibit, resolving the aggregator conflict in which a secondary source had circulated an incorrect Rs 1,290 crore figure that matches no line item in the primary filing | RDD15, RDD18, RDD19, RDD21 |
| E3, Cipla and Pharmathen | 10 to 21 Nov 2025 (inspection); 7 Jan 2026 (Form 483 public); 14 Jan 2026 (Regulation 30 disclosure) | USFDA inspected Cipla's exclusive lanreotide manufacturing partner Pharmathen's Rodopi, Greece facility, issuing nine Form 483 observations; Cipla disclosed a temporary production pause to support remediation, with resupply expected in H1 FY27 | RDC52, RDC53 |
| E4, Sun Pharma, Organon and the credit-rating response | 27 Apr 2026 (agreement signed); 4 Aug 2026 (CRISIL rating action) | Sun Pharma signed a definitive agreement to acquire Organon for an enterprise value of USD 11.75 billion; CRISIL removed Sun Pharma from Rating Watch with Developing Implications and reaffirmed Crisil AAA/Stable on 4 Aug 2026, about fourteen weeks after the announcement | RDS24, RDS11 |
| E5, Max Healthcare, Smart Super Speciality bed commissioning | 13 Aug 2026 (Q1 FY27 earnings call) | Management reported that 50% of the 400-bed brownfield tower at Max Smart Super Speciality Hospital, Saket was operational, with the remaining 50% guided for the then-current quarter; this corrects an earlier synthesis (circulated at planning time as "202 of 400 beds, with 198 remaining") that this research's own re-verification pass found conflates the Max Smart tower with a separate, newly approved 202-bed brownfield tower at a different site, MSSH Vaishali | RDM47, RDM49 |
| (E5 continued), full commissioning | 3 Sep 2026 | Union Home Minister Amit Shah inaugurated the fully commissioned 400-bed tower at Max Smart, taking that single site's capacity to about 1,200 beds; the inauguration date does not by itself confirm whether all 400 beds were live for patient admission that day or whether this was a ceremonial opening ahead of full operational commissioning | RDM48 |
| E6, Apollo Hospitals, HealthCo demerger | 26 Mar 2026 (NCLT Chennai procedural order); 24 Jun 2026 (shareholder and creditor meeting); target Q4 FY27 (listing) | NCLT Chennai directed a meeting of Apollo Hospitals Enterprise's equity shareholders on the HealthCo demerger scheme; the shareholder and creditor meeting was held 24 Jun 2026; listing of the resultant Apollo Healthtech Ltd is targeted for Q4 FY27, with a slump sale of HealthCo's procurement and wholesale-distribution undertaking targeted to complete by 1 Oct 2026 | RDA46, RDA47 |

### 6.6 Company-level regulatory records, Sun Pharma, Cipla and Dr. Reddy's, compared

**Table 6. Named facility-level regulatory events across the three pharma manufacturers in the Track D NIFTY 50
set.**

| Company | Facility | Most recent classification | Date | Note |
|---|---|---|---|---|
| Sun Pharma | Halol | OAI | inspection 2 to 13 Jun 2025 | remains under an import alert that restricts shipments except for shortage-exemption products | RDS32, RDS33 |
| Sun Pharma | Dadra | Warning letter | dated 18 Jun 2024 | repeats observations from warning letters in March 2019 and April 2017 | RDS35 |
| Sun Pharma | Mohali | OAI, with a batch-release pause | since Aug 2022 inspection; disclosed Apr 2023 | a Consent Decree Correspondence/Non-Compliance Letter from USFDA accompanied the pause | RDS37 |
| Cipla | Pithampur | OAI then Warning letter | inspection Feb 2023; WL Nov 2023 | caused a near six-month delay in new product launches, per management | RDC56, RDC57 |
| Cipla | Bommasandra | OAI revised to VAI | May 2025 to Aug 2025 | a rare, disclosed downward revision in classification severity | RDC60 |
| Cipla | Virgonagar | VAI | inspection 7 to 13 Nov 2024 | routine cGMP inspection, no warning letter | RDC59 |
| Cipla (via partner) | Pharmathen, Rodopi, Greece | Form 483, nine observations | inspection Nov 2025 | the only partner-site (not Cipla-owned) event in this table | RDC52 |
| Dr. Reddy's | Bachupally (biologics) | Form 483, seven observations | inspection ending 25 Jun 2026 | the same site drew a nine-observation Form 483 after an Oct 2023 inspection, a repeat-attention pattern | RDD39, RDD42 |
| Dr. Reddy's | Middleburgh, New York (API) | Form 483, two observations | inspection 12 to 16 May 2025 | RDD40 |
| Dr. Reddy's | Miryalaguda (API) | Form 483, two observations | inspection 19 to 24 May 2025 | RDD41 |

### 6.7 Rating agencies naming regulatory status as a sensitivity

**Table 7. How credit-rating rationales treat named regulatory events as rating sensitivities, not footnotes.**

| Company | Rating agency and action | Date | Regulatory item named in the rationale | Source |
|---|---|---|---|---|
| Sun Pharma | CRISIL AAA/Stable, reaffirmed, removed from Rating Watch | 4 Aug 2026 | Import alert on Halol since Dec 2022, warning letters for Dadra and Mohali, OAI classification for Baska | RDS11, RDS20 |
| Cipla | CARE AAA/Stable, reaffirmed | 26 Aug 2025 | Pending litigation with the National Pharmaceutical Pricing Authority, and ongoing monitoring of USFDA observations at the Pithampur plants | RDC4, RDC62 |
| Apollo Hospitals (parent, AHEL) | CRISIL AA+, outlook revised to Positive from Stable | Jan 2026, confirmed in a 29 May 2026 bulletin | Not a drug-regulator item; the bulletin instead names a pending Competition Commission of India approval for the Cradle and Fertility sale as an open regulatory item | RDA07, RDA58 |
| Max Healthcare | CARE AA to AA+ (Stable), upgraded | Oct 2024; reaffirmed Oct 2025 | Continuous capacity addition at the network level and about 26% FY25 network revenue growth cited as the reason for the upgrade, not a negative regulatory item | RDM06, RDM07 |
| Dr. Reddy's | ICRA AA+ (Stable), reaffirmed, rated amount enhanced | Dec 2024 | Rated amount raised from Rs 1,200 crore to Rs 2,000 crore; the specific rating level of a later, Jan 2026 ICRA action was not resolved in the underlying dossier and remains an open item | RDD06, RDD08 |

### 6.8 Why the regulator record leads the income statement, in the clearest single case this research found

The clearest single illustration in this research of a regulator record surfacing a problem before the income
statement does is the Cipla and Pharmathen lanreotide chain, because every step carries its own date. The USFDA
inspection of Pharmathen's Rodopi, Greece facility ran from 10 to 21 Nov 2025, producing nine Form 483 observations
[RDC52]. Cipla's own Regulation 30 disclosure, dated 14 Jan 2026, stated that lanreotide production had been
temporarily paused to support remediation, with resupply targeted for H1 FY27 [RDC53]. The first income statement
to show the resulting revenue impact was Q3 FY26 (the quarter ended 31 Dec 2025, results reported in Jan 2026):
consolidated net profit fell 57% year on year to Rs 676 crore, with North America revenue down 22% to Rs 1,485
crore, a decline the company and independent analyst coverage attribute directly to the lanreotide disruption
[RDC55]. In calendar terms, the regulator's own inspection date (Nov 2025) led the company's own disclosure
(Jan 2026) by about seven weeks, and both led the first income-statement evidence of the impact (results reported
in Jan 2026, for the quarter that had already closed) by a margin that depends on exactly how the dates are
compared, but in no reading does the income statement arrive before the regulator record. A JPMorgan analyst note
on the same Form 483 is worth naming separately, because it shows a market participant converting a regulatory
observation directly into a financial estimate ahead of any company guidance: the note flagged specific technical
findings (microbiological controls, aseptic processing, data lapses, repeat standard-operating-procedure
deficiencies), judged a warning-letter outcome would likely let existing US supply continue, and estimated that a
worst-case import alert without product exemptions could cut FY27 to FY28 earnings by 4% to 6% [RDC54]. That
estimate was published before Cipla's own Q3 FY26 results confirmed any earnings impact at all, which is itself a
demonstration of the broader pattern this section documents: regulator records and the analyst community that
reads them routinely move ahead of a company's own quarterly disclosure, not behind it. A system that only reads a
company's own quarterly filing, and never the regulator record that sits behind it, would have had no way to see
this estimate coming, and would instead have learned of the earnings impact only once the company itself confirmed
it, several weeks after the inspection that caused it had already closed.

A second, independent instance of the same lead-lag pattern appears in the Sun Pharma Halol case, though with a
much longer horizon. The site's current Official Action Indicated classification followed a 2 to 13 Jun 2025
inspection and repeated two observations already flagged in a December 2022 warning letter [RDS32]. The site's
prior OAI cycle, following a September 2014 inspection, took close to four years to resolve, closing only in June
2018 [RDS34]. If the current cycle runs on a similar timeline, the regulator record already in hand as of this
research's access date (11 Oct 2026) is signalling a multi-year compliance overhang that no single quarter's
income statement can yet fully price in, which is exactly the kind of long-horizon, regulator-led signal this
research's engine is built to surface ahead of, not alongside, the market's own eventual recognition of it.

### What this section establishes, and what it does not

- It establishes the Form 483 to classification to warning letter to import alert pipeline as a real, sequential
  mechanism, with five anecdotal, dated timing examples drawn directly from the three Track D pharma companies'
  own dossiers, while naming plainly that no published statistical study of typical elapsed time for Indian sites
  specifically was found.
- It establishes, with a named table and named caveats, that no authoritative year-by-year count of FDA warning
  letters to Indian sites for 2019 through 2026 exists in any source opened in this research, rather than
  papering over that gap with an invented or rounded figure.
- It establishes a dated timeline for each of the six planning-time seed events (E1 to E6), each re-verified
  against a primary source, including a correction to the planning-time assumption about the Max Smart Super
  Speciality bed-commissioning figure (the "202 of 400" figure belongs to a different, separately numbered
  brownfield tower at Max Vaishali, not to Max Smart).
- It establishes that credit-rating agencies name specific regulatory events (import alerts, warning letters,
  pending competition-authority approvals) as explicit rating sensitivities, which is itself independent,
  non-company evidence that these events matter financially, not just operationally.
- It does not establish a current (2025 or 2026) status for the historic NPPA price-control litigation against
  Cipla, which the company's own rating agency confirms is still being monitored but for which no recent figure
  or date was located.
- It does not claim that the regulatory record alone explains every revenue movement seen in section 5; several of
  the quarter-to-quarter declines documented there (for example Sun Pharma's and Cipla's US segment softness) are
  attributed by management to a mix of regulatory, licensing-cliff and competitive pricing causes together, and
  this research does not disentangle the three without the engine's own change-point and rival-explanation tests.

(selfcheck: words 2470, tables 7, dashes 0, exclamations 0)

## 7. Hospital economics turn on beds, occupancy and ARPOB, and announced beds are not operational beds

**Answer.** A hospital's financial health is read through three linked metrics: ARPOB (average revenue per
occupied bed, usually stated per day), occupancy (the share of available bed-days actually filled), and ALOS
(average length of stay, in days per discharge), and across the two Track D hospital chains and their peers,
newly commissioned capacity depresses occupancy and sometimes ARPOB for several quarters before it matures. The
single clearest instance of an announced-versus-commissioned bed gap in this research is Max Healthcare's Smart
Super Speciality brownfield tower in Saket, which this research's own re-verification pass corrected from an
earlier "202 of 400 beds operational" synthesis to the actual, company-stated figure of 50% (200 of 400 beds)
operational as of the Q1 FY27 call, with the remaining half commissioned only weeks later.

### 7.1 Definitions

**ARPOB (average revenue per occupied bed)** is a hospital's total inpatient revenue for a period divided by the
total number of occupied bed-days in that period, usually expressed as a rupee figure per bed per day. It is the
hospital-sector analogue of a retailer's revenue per square foot: it rises when a hospital shifts toward
higher-acuity, higher-paying cases (oncology, cardiac, transplant) even if the number of patients treated does not
grow, and it falls, mechanically, whenever a chain adds a large block of new beds that are not yet filled, because
the denominator (occupied bed-days) grows slower than the numerator in the early months of a new facility's life.

**Occupancy** is the share of a hospital's available bed-days that were actually occupied in a period. A newly
commissioned tower adds to the available-bed-days denominator immediately, on the day it opens, while it takes many
months for referral patterns, doctor recruitment and local awareness to fill it, which is exactly why occupancy
dips at several chains in this research in the specific quarters following a large bed addition (KIMS, Rainbow and
Jupiter Life Line Hospitals all show this pattern explicitly in the underlying dossier).

**ALOS (average length of stay)** is the total number of inpatient days divided by the number of discharges in a
period. A falling ALOS at a stable or rising occupancy generally signals a shift toward shorter, higher-throughput
procedures (day-care surgery, same-day discharge protocols) rather than a decline in case complexity, and several
chains in this research (KIMS, Apollo) report ALOS falling specifically alongside rising ARPOB, which is the
expected pairing, not a contradiction.

**Table 0. The three metrics stated as formulas, with the specific caution each formula raises for a
computation-first engine.**

| Metric | Formula | Caution |
|---|---|---|
| ARPOB | total inpatient revenue for a period, divided by total occupied bed-days in that period | mechanically falls when a large block of new, unfilled beds is added to a hospital's base, even if existing, mature beds are performing identically to the prior period; a fall in this metric alone is not evidence of weaker underlying performance |
| Occupancy | occupied bed-days, divided by available bed-days, for a period | the denominator grows the day a new tower opens, before the numerator has had time to catch up, which is why occupancy dips are expected, not anomalous, in the one to three quarters following a large bed addition |
| ALOS | total inpatient-days, divided by number of discharges, for a period | a falling ALOS paired with a rising ARPOB usually signals a shift toward shorter, higher-throughput procedures; a falling ALOS paired with a falling ARPOB would instead suggest a shift toward lower-acuity cases, a different and less favourable story that this research did not observe in any of the four chains examined |

Each of the three metrics, read alone, can mislead: ARPOB and occupancy both move mechanically whenever a chain
adds capacity, independent of whether the chain's underlying clinical or commercial performance has changed at
all. This is precisely why this research treats "announced beds are not operational beds" as the section's central
finding rather than treating any single quarter's ARPOB or occupancy print as a verdict on a hospital chain's
health: the right comparison is always the metric for a chain's mature, already-filled bed base against the same
metric for its newly commissioned base, and only Max Healthcare's own disclosure in this research's source set
draws that distinction explicitly, separating "existing units" EBITDA per bed (RDM66) from the network-wide
figure that newly added capacity drags down in its first few quarters. Any Track D discovery engine that reports
a hospital-sector finding from a single quarter's occupancy or ARPOB number, without checking which share of a
chain's bed base is newly commissioned in that same quarter, is at real risk of reporting a mechanical artefact of
capacity expansion as if it were a genuine change in clinical demand, pricing power, or competitive position, and
the three peer examples given immediately below exist specifically to make that risk concrete rather than
abstract.

### 7.2 Apollo Hospitals and Max Healthcare, compared, with Fortis and KIMS as peer context

**Table 1. The two Track D hospital chains and two listed peers, latest available full-year and quarterly
figures.**

| Company | ARPOB (latest reported) | Occupancy (latest reported) | Revenue (latest full year) | Beds (latest reported) | Source |
|---|---|---|---|---|---|
| Apollo Hospitals Enterprise | Rs 71,206, up 12% YoY (Q4 FY26, Healthcare Services segment) | 68% (Q4 FY26) | Rs 25,228 to 25,229 crore (FY26 consolidated, up about 16% YoY) | 8,131 operating beds at 31 Mar 2026; 8,352 at 30 Jun 2026 | RDA23, RDA19, RDA21 |
| Max Healthcare Institute | Rs 81,900, up 5% YoY and QoQ (Q1 FY27); Rs 77,900, described as stable (Q4 FY26) | above 75% average network occupancy (Q1 FY27); 75% (Q4 FY26) | Rs 8,373 crore consolidated / Rs 10,538 crore on the company's own wider "network" basis (FY26) | 21 facilities, over 6,100 beds (as of the 13 Aug 2026 earnings call) | RDM41, RDM35, RDM18, RDM29 |
| Fortis Healthcare | Rs 74,300 (Q1 FY27) | 69% (Q1 FY27) | Rs 9,127.8 crore (FY2026, per the tie-break lane's aggregator read) | about 1,800 beds planned FY27 to FY30, over 400 in FY27 alone | RC33, RDT91, RC33 |
| KIMS (Krishna Institute of Medical Sciences) | Rs 47,200, up 9.7% YoY (Q1 FY27) | 49% (Q1 FY27) | Rs 3,904.6 crore (FY2026, tie-break lane) | about 8,300 beds across 26 hospitals (30 Jun 2026) | RC39, RDT96, RC39 |

Apollo's ARPOB growth and Max Healthcare's ARPOB level are not directly comparable without adjustment: Apollo's
figure is for its Healthcare Services segment specifically, while Max Healthcare states its ARPOB on a wider
"network" basis that the company's own disclosure shows running 10% to 30% above its narrower, screener-matched
consolidated figures in every quarter this research examined, a recurring gap flagged explicitly in the Max
Healthcare dossier as a genuine citation risk, not a data error, since both figures appear in the company's own
disclosures [RDM45, RDM46].

### 7.3 The announced-versus-commissioned bed gap: Max Healthcare's Smart Super Speciality tower, corrected

**Table 2. The timeline of guidance and actual commissioning at Max Smart Super Speciality Hospital, Saket's
400-bed brownfield tower, as this research found it after re-verification.**

| Date or period | What was guided or reported | Source |
|---|---|---|
| Q2 FY26 management call (reported 16 Dec 2025) | Guidance that the tower would be commissioned within about 30 days of the call | RDM47 |
| By around Apr 2026 | One secondary source describes the tower as commissioned with 156 beds operational at that time | RDM47 |
| Q1 FY27 earnings call, 13 Aug 2026 | Management stated: "At Max Smart, 50% of the 400-bed brownfield tower is operational, with the remaining 50% expected in the current quarter" | RDM47 |
| 3 Sep 2026 | Union Home Minister Amit Shah inaugurated the fully commissioned tower, taking the Saket site's total capacity to about 1,200 beds | RDM48 |

This research's own first-pass synthesis had originally circulated a different figure, "202 of 400 beds
operational, with 198 remaining," attributed to the Max Smart tower. The re-verification pass reopened the cited
source directly and found no such 202/198 language for Max Smart anywhere in it; instead, the source gives a clean
50%/50% (200 of 400) split for Max Smart, and the 202-bed figure belongs to a different, separately approved
brownfield tower at Max Vaishali, for which the board approved Rs 425 crore of capex, commissioning slated before
FY30 [RDM47, RDM49]. The two 202-bed-adjacent figures (Max Smart's actual 200-of-400 split, and Max Vaishali's
distinct 202-bed project) should never be conflated when citing "202 beds" for this company, and this correction
is itself the kind of contradiction a computation-first system is meant to catch before it reports a wrong number
as a discovery.

**Table 3. Other named brownfield and greenfield bed-tower commissioning gaps at Max Healthcare, for comparison.**

| Project | Announced beds | Reported operational beds, latest update | Gap | Source |
|---|---|---|---|---|
| Nanavati Max Hospital, Mumbai | 268 (one brokerage figure) or 280 (another) | 116 of the planned beds by Q4 FY26; 50% by Q1 FY27 (13 Aug 2026) | about 50% of planned capacity still not commissioned as of the latest reported quarter | RDM50 |
| Mohali tower | 160 | fully commissioned, per a 16 Dec 2025 brokerage note | no gap reported at that date | RDM51 |
| Max Vaishali (MSSH Vaishali) | 202 (board-approved, Rs 425 crore capex) | not yet commissioned; slated before FY30 | full gap, project still in build | RDM49 |
| Lucknow (greenfield) | 712 (board-approved, about Rs 1,400 crore) | not yet commissioned; expected by FY30 | full gap, project still in build | RDM53 |

### 7.4 Apollo's bed pipeline, as a running series of upward revisions

**Table 4. Apollo Hospitals' stated five-year bed-addition target, as it changed across disclosures in this
research's source set.**

| Disclosure date | Stated target | Source |
|---|---|---|
| FY21 to FY25 period, as analysed retrospectively | Operating bed count expanded by only about 150 beds across the full four years, even as operating profit grew at a healthy 14% CAGR over the same period | RDA22 |
| May 2026 (Business Today) | Nearly 4,400 beds (about 3,600 census beds expected operational within the period) at a capex of about Rs 8,000 crore to FY30 | RDA12 (Business Today correction cited at RC12) |
| Q1 FY27 update (13 Aug 2026) | Raised to over 5,800 beds over five years; 8,352 operating beds as of 30 Jun 2026, excluding managed beds and subsidiary facilities | RDA53, RC13 |

The pattern across three successive disclosures (a near-flat four-year actual addition, then a nearly 4,400-bed
target, then a raised 5,800-plus-bed target within the same calendar year) is itself evidence that an "announced
beds" figure from any single disclosure date should be treated as a moving target, not a fixed commitment, when
this research's engine scores a hospital-sector discovery for novelty or for guidance-versus-actual divergence.

### 7.5 Regulatory price exposure: CGHS, PMJAY, and device price caps

**Table 5. CGHS tariff revision effective 13 Oct 2025, and other named price-exposure items from R-C.**

| Item | Detail | Source |
|---|---|---|
| CGHS revision scope and date | Rates revised for nearly 2,000 medical procedures, notified 3 Oct 2025, effective 13 Oct 2025, the first substantive revision in about fifteen years | RC63 |
| CGHS tiering, ward type | General ward priced 5% below the semi-private baseline; private ward priced 5% above it; non-NABH or non-NABL facilities priced 15% below NABH-accredited peers | RC64 |
| CGHS tiering, city tier | Tier II cities (including the North East and Jammu and Kashmir/Ladakh) priced 10% below Tier I, per the directly fetched primary-adjacent source; a separate secondary source states 19% for Tier II, a conflict this research leaves unresolved pending the actual CGHS office memorandum | RC65, RC66 |
| CGHS OPD consultation fee, post-revision | Rs 350 for a normal specialist consultation, Rs 700 for a super-specialist (DM/MCh) or psychiatry consultation; no source opened in this research confirms the pre-revision Rs 150 baseline that an earlier secondary claim had stated | RC67 |
| PMJAY package-rate coverage | A joint FICCI-EY study found PMJAY package tariffs cover roughly 40 to 80% of total procedure costs | RC34 |
| PMJAY empanelment and private-hospital share | About 31,005 hospitals are PMJAY-empanelled; private hospitals are 45% of them but handle 52% of hospitalisations and 66% of total treatment cost | RC80 |
| NPPA device price caps | 2017 caps remain the most recent confirmed figures: common cobalt-chromium knee implant capped at Rs 54,720 excluding GST, revision-surgery knee implants at Rs 1,13,950; no 2025 or 2026 revision was found for either stents or knee implants, and the specific stent rupee figures from one secondary source could not be reproduced on direct re-check and should be treated with active suspicion, not merely as an unverified gap | RC70, RC69 |

### 7.6a The occupancy dip pattern, confirmed across three peers outside the two Track D names

The occupancy dip that follows a large bed addition is not unique to Max Healthcare. Three listed peers in the
R-C hospital-sector lane show the identical pattern with their own named numbers, which is useful corroboration
that the mechanism described in Table 0 above is a sector-wide feature of hospital accounting, not a company-
specific anomaly that a discovery engine should treat as news on its own.

**Table 4a. Occupancy falling at three peer chains in the specific period following a large bed addition.**

| Company | Period | Occupancy before | Occupancy after | Stated cause | Source |
|---|---|---|---|---|---|
| KIMS | Q2 FY26 versus Q2 FY25 | 60.1% | 53.5% | newer units had not yet stabilised | RC41 |
| Rainbow Children's Medicare | FY26 versus FY25 | 50.5% | 46.3% | close to 500 beds added, the highest annual capacity addition in company history | RC47 |
| Jupiter Life Line Hospitals | 9M FY26 versus 9M FY25 | 67.5% | 61.9% | new bed additions at Indore and Pune | RC60 |

In every one of these three cases, ARPOB rose in the same period even as occupancy fell (KIMS Q1 FY27 ARPOB up
9.7% YoY, RC39; Rainbow FY26 ARPOB up 11% YoY to Rs 60,141, RC47; Jupiter 9M FY26 ARPOB up to Rs 66,800 from Rs
59,000, RC60), which is the expected pairing described in Table 0: a chain that is adding capacity fast enough to
depress its occupancy ratio is, in every one of these three cases, also improving its revenue per filled bed,
consistent with newer capacity skewing toward higher-acuity, higher-paying case types from the outset even before
it reaches mature occupancy. A system that scored "occupancy fell" alone as a negative signal, without checking
ARPOB in the same period, would misread all three of these companies' most recent results, and by extension would
be at real risk of misreading Max Healthcare's own Q1 FY27 print in the same way, since Max Healthcare's ARPOB
rose 5% YoY in the same quarter its newest towers were only half commissioned (RDM41, RDM47).

### 7.6 Max Healthcare's CGHS exposure, named directly by management

Max Healthcare's own management guided to a benefit of over Rs 200 crore from the CGHS tariff revision once fully
implemented, with 85% to 90% of that benefit expected to reach EBITDA by FY27 [RDM65]. This is a useful, concrete
instance of a named regulatory event with a company-stated rupee impact and timeline, the kind of structured
claim this research's engine should be able to track against the actual FY27 EBITDA outcome as a machine-checkable
falsification condition: if FY27 EBITDA does not show a benefit in the stated range once the revision has had a
full year to flow through the company's own tariff mix, the claim is a missed guidance item worth reporting on
its own terms, not something to quietly drop from a later dossier update.

### What this section establishes, and what it does not

- It establishes precise definitions of ARPOB, occupancy and ALOS, and shows how the three metrics mechanically
  interact when a chain commissions a large new block of beds (occupancy and sometimes ARPOB dip, before
  recovering as the new capacity fills).
- It establishes a corrected, re-verified timeline for the Max Healthcare Smart Super Speciality tower's
  commissioning, replacing an earlier, inaccurate synthesis (202 of 400 beds) with the company's own stated figure
  (50% as of the Q1 FY27 call, full commissioning only weeks later), and explicitly separates this from a
  different, similarly numbered project at Max Vaishali so the two are never conflated downstream.
- It establishes that Apollo Hospitals' own stated five-year bed-addition target rose across successive
  disclosures within the same research window (from a near-flat historical pace, to nearly 4,400 beds, to over
  5,800 beds), evidencing that an announced target should be treated as a moving commitment, not a fixed one.
- It establishes the October 2025 CGHS tariff revision's structure and a management-quantified EBITDA benefit at
  Max Healthcare, with a named, dated, checkable claim (over Rs 200 crore benefit, 85% to 90% reaching EBITDA by
  FY27).
- It does not resolve the conflict between two sources on the CGHS Tier II city discount (10% versus 19%), nor
  does it confirm a current (2025 or 2026) NPPA price cap for cardiac stents or knee implants beyond the 2017
  figures already on record, and the specific 2017 stent rupee figures carry an active, named caution rather than
  simple unverified status.
- It does not provide a clean, source-verified payor mix (cash, private insurance, PMJAY, international) for
  either Apollo or Max Healthcare for any full fiscal year; both companies' disclosures mix segment splits
  (hospital versus pharmacy and digital health) with partial payor commentary that this research could not
  reconcile into one table.

(selfcheck: words 2070, tables 5, dashes 0, exclamations 0)

## 8. The Track D universe: five NIFTY 50 names and nineteen tie-break companies on two sub-industry playbooks

**Answer.** The live NIFTY 50 Track D (Pharma and Healthcare) universe, read directly from the NSE index
constituent files rather than estimated at planning time, is five companies: Sun Pharmaceutical, Cipla, Dr.
Reddy's Laboratories, Apollo Hospitals and Max Healthcare Institute. The tie-break universe, the union of the live
Nifty Pharma and Nifty Healthcare index constituent lists minus those five NIFTY 50 names, is exactly nineteen
companies, not the roughly twenty to twenty-five names estimated at planning time, and the exact list corrects an
earlier guess that had included several companies (Syngene International, Dr Lal PathLabs, Narayana Hrudayalaya,
Global Health/Medanta) that are not current constituents of either live index as of 13 Oct 2026.

### 8.1 The five NIFTY 50 Track D names

**Table 1. The NIFTY 50 Pharma and Healthcare constituents, as read live.**

| Company | NSE symbol | Sub-industry | Primary model(s) |
|---|---|---|---|
| Sun Pharmaceutical Industries | SUNPHARMA | Pharmaceuticals | US generics, India branded formulations, global specialty or innovative medicines | RDS01 |
| Cipla | CIPLA | Pharmaceuticals and biotechnology | US generics, India branded formulations, emerging markets and Europe | RDC03 |
| Dr. Reddy's Laboratories | DRREDDY | Pharmaceuticals (bulk drugs and formulations), dual listed via SEC ADR | US generics, emerging markets, India branded formulations | RDD02, RDD04 |
| Apollo Hospitals Enterprise | APOLLOHOSP | Hospital and healthcare services, omnichannel pharmacy | Hospital services, pharmacy distribution and digital health | RDA03 |
| Max Healthcare Institute | MAXHEALTH | Healthcare | Hospital services | RDM05 |

### 8.2 The nineteen tie-break companies

**Table 2. The live tie-break universe, union of Nifty Pharma (20 names) and Nifty Healthcare (20 names), minus
the five NIFTY 50 names above, read directly from the index constituent CSVs on 13 Oct 2026.**

| Company | Index membership | Sub-industry |
|---|---|---|
| Abbott India | Pharma only | India branded formulations (MNC subsidiary) | RDT03 |
| Ajanta Pharmaceuticals | Pharma only | Branded generics, India, Africa, Asia, US | RDT08 |
| Alkem Laboratories | Both | Branded formulations and generics, acute therapy | RDT13 |
| Aurobindo Pharma | Both | US generics, injectables, biosimilars, API | RDT18 |
| Biocon | Both | Generics, biosimilars, research services | RDT23 |
| Divi's Laboratories | Both | CDMO (custom synthesis) and generic APIs | RDT28 |
| Gland Pharma | Both | Generic injectables manufacturing and CDMO | RDT33 |
| Glenmark Pharmaceuticals | Both | Branded generics, respiratory and dermatology, biologics (IGI) | RDT38 |
| Ipca Laboratories | Both | Branded and generic formulations, anti-malarials | RDT43 |
| Laurus Labs | Both | CDMO (API and formulations), antiretroviral generics | RDT48 |
| Lupin | Both | US generics, complex generics, biosimilars, India branded formulations | RDT53 |
| Mankind Pharma | Both | India branded formulations, consumer healthcare | RDT58 |
| Piramal Pharma | Pharma only | CDMO (drug product, APIs, ADCs), consumer healthcare | RDT63 |
| Sai Life Sciences | Pharma only | Pure-play small-molecule CDMO/CRO (recently listed) | RDT68 |
| Torrent Pharmaceuticals | Both | India branded formulations, with a pending JB Chemicals merger | RDT73 |
| Wockhardt | Pharma only | Branded formulations, novel antibiotic research | RDT78 |
| Zydus Lifesciences | Both | US and India generics, biosimilars, US biologics CDMO | RDT83 |
| Fortis Healthcare | Healthcare only | Multi-specialty hospital chain | RDT88 |
| Krishna Institute of Medical Sciences (KIMS) | Healthcare only | Multi-state hospital chain | RDT93 |

This is the live index membership as of October 2026 and corrects the planning-time illustrative list, which had
guessed at roughly twenty to twenty-five names including some (Syngene International, Dr Lal PathLabs, Narayana
Hrudayalaya, Global Health/Medanta) that this research's direct, live read of both index CSVs did not find as
current constituents of either index. If a finals judge names one of those companies for the tie-break round, the
engine's own universe loader, not this research document, must be able to resolve it from whichever index or
listing it actually belongs to, since it falls outside the two named index files this plan specified.

### 8.3 The pharma playbook, ten angles

**Table 3. The ten angles the pharma playbook scores for every pharmaceutical company in the universe, by what
each angle is actually testing.**

| # | Angle | What it tests |
|---|---|---|
| 1 | US generics revenue cliff | Whether a product-concentration event (a volume-license cap lifting, a first-to-file exclusivity window closing) explains a quarter's US segment move | RDD18 |
| 2 | Facility compliance pipeline | Whether a Form 483, classification change, warning letter or import alert at an owned site precedes a revenue or margin move | RDS32 |
| 3 | Partner or supplier site dependence | Whether a company's revenue depends on a named, separately regulated manufacturing partner | RDC52 |
| 4 | Patent-expiry or GLP-1 launch race | Whether a company's new-launch timing and target volumes match its own prior guidance | RDD26 |
| 5 | CDMO or BIOSECURE tailwind | Whether a China-plus-one or CDMO-demand shift shows up in a company's order book or capacity guidance | RB55 |
| 6 | Tariff or trade-policy exposure | Whether a company's product mix (patented versus generic) places it inside or outside a named tariff carve-out | RB50 |
| 7 | India branded formulations stability | Whether the India segment is growing faster than, and absorbing volatility from, the export segments | RDS63 |
| 8 | Specialty or innovative-medicines mix shift | Whether a company's revenue mix is shifting toward higher-margin, patent-protected products | RB72 |
| 9 | Leverage and M&A integration | Whether an announced acquisition's financing plan and leverage targets match the rating agency's own modelled path | RDS27 |
| 10 | Leadership or governance change | Whether a disclosed management change coincides with, precedes, or follows a regulatory or financial event | RDT17 |

### 8.4 The hospital playbook, six angles

**Table 4. The six angles the hospital playbook scores for every hospital company in the universe.**

| # | Angle | What it tests |
|---|---|---|
| 1 | Announced versus commissioned beds | Whether a stated bed-addition target matches the actually operational bed count at the guided date | RDM47 |
| 2 | ARPOB and occupancy divergence at new units | Whether a newly commissioned unit's occupancy and ARPOB behave as expected relative to the network average | RC41 |
| 3 | Payor-mix shift | Whether a chain is shifting revenue mix away from government schemes toward cash and private insurance | RC94 |
| 4 | Guidance-versus-actual breakeven slippage | Whether a digital or omnichannel arm's stated breakeven date is met, pushed out, or quietly redefined (gross versus net of ESOP cost) | RDA50 |
| 5 | M&A or demerger value-chain restructuring | Whether a hospital group's corporate restructuring (demerger, subsidiary merger, bolt-on acquisition) changes the disclosed consolidation basis in a way that affects comparability | RDA45 |
| 6 | Regulatory price-cap exposure | Whether a named tariff revision (CGHS, PMJAY, NPPA device caps) has a quantified, checkable rupee impact stated by management | RDM65 |

### 8.5 Disclosure availability matrix, pharma versus hospital

**Table 5. Which source types actually exist, and were found to carry usable data in this research, for pharma
companies versus hospital companies.**

| Source type | Pharma companies | Hospital companies |
|---|---|---|
| Company quarterly results press release | Always present; geography and segment detail varies by company and quarter | Always present; "network" versus "consolidated" basis distinction is a hospital-specific complication not seen in the pharma dossiers | RDS61, RDM45 |
| USFDA facility record (Form 483, classification, warning letter, import alert) | Present and usable for every pharma company in this research; the single richest independent, dated record type for this sub-industry | Not applicable; hospital operators are not subject to USFDA manufacturing-site inspection in the same way | RDC56, RDM78 |
| CDSCO or NPPA record (domestic drug regulator) | Present but thinner; Schedule M compliance and NSQ alert cadence were not confirmed to a primary source in this research | Not applicable in the same form; the hospital-relevant domestic regulator record is CGHS, PMJAY and NPPA device price caps instead | RB39, RC63 |
| Credit-rating rationale (CRISIL, ICRA, CARE) | Present for all five NIFTY 50 names and several tie-break names; a rich source of named regulatory sensitivities | Present for Apollo and Max Healthcare; a rich source of bed-pipeline and capex detail not always in the press release | RDS11, RDA07 |
| NSE or BSE exchange filing (material event, Regulation 30) | Present and used directly for several seed events (Cipla's lanreotide disclosure, Dr. Reddy's director reappointment, Apollo's NCLT filings) | Present and used directly for Max Healthcare's bed-commissioning disclosures and Apollo's NCLT demerger filings | RDC53, RDM47 |
| Earnings-call transcript or management commentary | Present but inconsistently fetchable; several transcripts identified by URL were not opened to the quote level in this research | Present, and the primary source for brownfield-tower commissioning percentages and payor-mix colour that does not appear in the press release | RDD87, RDM47 |
| Secondary aggregator (Screener, stockanalysis.com, brokerage notes) | Used for every company, as the fallback when a primary filing could not be fetched directly; the source of several logged digit conflicts in sections 5 to 7 | Used identically, and the source of the "network" versus "consolidated" revenue-basis gap documented at Max Healthcare | RDS38, RDM45 |

### 8.6 Why the live index read mattered, in concrete terms

The gap between the planning-time illustrative list and the live-read nineteen-company tie-break universe is not
a cosmetic correction. Four companies the planning-time list had named as likely tie-break candidates, Syngene
International, Dr Lal PathLabs, Narayana Hrudayalaya and Global Health (Medanta), are each real, listed, actively
covered companies in the broader healthcare sector, and each appears by name in the R-C hospital-sector research
(Narayana Hrudayalaya and Global Health both carry detailed quarterly figures there, RC35, RC54). Had this
research simply kept the planning-time guess rather than reading the two NSE index files directly, the engine's
tie-break universe loader would have been built, tested and demonstrated against a list that does not match the
actual Nifty Pharma and Nifty Healthcare constituent files the case brief points to, and a judge naming any of
those four companies in a live tie-break round would have exposed the mismatch in front of the panel rather than
in this research. Reading the live index files directly, and logging the correction here rather than quietly
updating the planning document, is itself a small-scale demonstration of the same discipline the brief asks the
whole system to have: check the primary source before reporting a figure, and show the correction when the
primary source disagrees with an earlier assumption. The same discipline applies in the other direction too: this
research did not add Fortis Healthcare or KIMS to the nineteen-name tie-break list on the strength of secondary
commentary alone, but only after confirming both names directly on the live Nifty Healthcare constituent file
itself, which is the standard this document holds every other universe-membership claim to as well.

### What this section establishes, and what it does not

- It establishes the real, live-read Track D universe: five NIFTY 50 names and nineteen tie-break names, naming
  each tie-break company and its index membership exactly, and explicitly correcting the planning-time illustrative
  guess that had included names not actually in either live index.
- It establishes the ten-angle pharma playbook and the six-angle hospital playbook at the level of what each angle
  tests, with the full architectural detail reserved for this document's later architecture sections, per this
  writer brief's own scope.
- It establishes a disclosure-availability matrix showing that the two sub-industries draw on genuinely different
  primary-source types (USFDA records for pharma, CGHS and PMJAY records for hospitals), while both sub-industries
  share the same two structural risks: secondary-aggregator digit conflicts, and a company-specific revenue-basis
  ambiguity (network versus consolidated at Max Healthcare being the clearest named instance).
- It does not profile any tie-break company to the same depth as the five NIFTY 50 dossiers; the tie-break lane is
  explicitly a breadth lane, and every figure in it traces to a single aggregator (stockanalysis.com) rather than
  to each company's own primary filing, a limitation stated plainly in the underlying lane's own notes.
- It does not resolve what universe the engine should use if a finals judge names a company outside the two named
  NSE index files (Nifty Pharma, Nifty Healthcare); that is an open design question for the engine's universe
  loader, not something this research document can settle with a research finding.
- It does not restate the full geometry of either playbook's scoring formula here, since that belongs to this
  document's architecture chapters; this section states only what each of the sixteen angles is testing and why
  the two playbooks are organised the way they are.

(selfcheck: words 1650, tables 5, dashes 0, exclamations 0)

## 9. Five companies, one template: what the filings of Sun, Cipla, Dr. Reddy's, Apollo and Max say over five years

**Answer.** Run the same symmetric dossier template (identity, five-year financials, eight-quarter detail, event
timeline, management narrative, peer set, three practice hypotheses) across Sun Pharmaceutical, Cipla, Dr. Reddy's
Laboratories, Apollo Hospitals and Max Healthcare, and a common shape appears under five different cover stories.
Every one of the five companies reports at least two internally disputed versions of a headline number for at least
one recent year (for example Sun Pharma's FY26 revenue sits anywhere from Rs 58,220 crore to Rs 58,563 crore
depending on the source [RDS14][RDS38][RDS42], and Max Healthcare's own "network" revenue basis exceeds its
"consolidated" basis by about 26% in FY26 [RDM45]). Every one of the five carries at least one live guidance-versus-
actual gap that a filing-literate reader, not a headline reader, would catch (Dr. Reddy's lenalidomide decline against
its own "double-digit base business" framing [RDD18][RDD20], Cipla's North America target explicitly excluding
lanreotide [RDC47], Apollo's digital-breakeven date slipping across three successive quarters [RDA50][RDA51], Max
Healthcare's bed-tower commissioning running months behind its own "30 days" guidance [RDM47][RDM48], and Sun
Pharma's net debt about to step up sharply once the Organon deal closes [RDS22][RDS27]). This is the evidence base
Next Signal's Discover and Calculate stages would run against for Track D; it is desk research with sources, not the
engine's own output.

### 9.1 Sun Pharmaceutical Industries Limited

Sun Pharmaceutical Industries Limited is India's largest pharmaceutical company by revenue and the group most
visibly shifting its narrative from "the biggest generics company" to "a top-25 global pharma company with a growing
specialty and innovative-medicines arm" [RDS26][RDS58]. That shift is the subject of this subsection's three
hypotheses, and it sits directly behind the single largest corporate action any Track D company took in the window
this dossier covers: the 27 April 2026 agreement to acquire Organon for an enterprise value of USD 11.75 billion
[RDS24].

**Identity.**

| Field | Value | Source |
|---|---|---|
| NSE symbol | SUNPHARMA | [RDS01] |
| BSE code | 524715 | [RDS02] |
| ISIN | INE044A01036 | [RDS03] |
| Statutory auditor (quarter ended 30 Jun 2026) | SR BC & CO LLP (partner Amit Singh) | [RDS08] |
| CRISIL rating | Crisil AAA/Stable (long term), Crisil A1+ (short term), reaffirmed 4 Aug 2026 | [RDS11][RDS12] |
| ICRA rating | [ICRA]AAA(Stable)/[ICRA]A1+, reaffirmed Mar 2026 | [RDS23] |
| Business description | India's largest formulations maker by domestic market share (about 8.4% at 31 Mar 2026 [RDS13]), with US generics, a growing global specialty and innovative-medicines portfolio, and a pending acquisition of Organon | [RDS13][RDS26] |

Sun Pharma's domestic market share of about 8.4% [RDS13] and its US presence of about 29% of revenue with 122
pending ANDAs and 13 pending NDAs [RDS21] are the two anchor facts CRISIL's own rating rationale leans on. The
company's gross debt was still low, about Rs 4,627 crore against an adjusted networth exceeding Rs 71,000 crore, as
of 31 March 2026 [RDS17][RDS18], which is the balance-sheet starting point against which the Organon-driven leverage
step-up (discussed below) has to be read.

**Five-year financial table, FY21 to FY26 (consolidated).**

| Fiscal year | Revenue (Rs crore) | EBITDA (Rs crore) | EBITDA margin | PAT, reported (Rs crore) | Note |
|---|---|---|---|---|---|
| FY21 | approximately 33,139.2 to 33,498.14 (two secondary sources disagree, primary not opened in this pass) | not located | not located | 2,903.8 reported; 5,931.8 adjusted | COVID-affected year; adjusted PAT strips one-off items [RDS44] |
| FY22 | 38,654.5 | 10,153.6 | 10,153.6 / 38,654.5 = 26.3% | 3,272.7 (depressed by an Rs 4,165.7 crore "Other Unusual Items" charge) | [RDS38][RDS39][RDS40][RDS41] |
| FY23 | 43,885.7 | 11,651.3 | 11,651.3 / 43,885.7 = 26.5% | 8,473.6 | [RDS38][RDS39][RDS40] |
| FY24 | 48,496.9 | 12,876.0 | 12,876.0 / 48,496.9 = 26.6% | 9,576.4 | [RDS38][RDS39][RDS40] |
| FY25 | 52,578.4 (stockanalysis.com) / 52,664 (CRISIL) | 14,967.9 | 14,967.9 / 52,578.4 = 28.5% | 10,929.0 reported; 11,984.4 adjusted (+19.0% YoY) | [RDS14][RDS38][RDS39][RDS40][RDS54] |
| FY26 | approximately 58,200 to 58,600, source-dependent: 58,563 (CRISIL [RDS14]), 58,462 (stockanalysis.com [RDS38]), 58,220 (Indian Pharma Post [RDS42]); conflict C-RDS01, not resolved against the company's own annual report in this pass | 16,313.5 | 16,313.5 / 58,462 = 27.9% | 11,479.4 reported; 9,660 adjusted (CRISIL, margin 16.5%, versus FY25's 20.9%) | [RDS15][RDS16][RDS38][RDS39][RDS40] |

The adjusted-PAT margin falling from 20.9% in FY25 to 16.5% in FY26, even as reported PAT rose [RDS15], is itself a
narrative-versus-number gap worth flagging for the engine: two legitimate profit measures move in opposite
directions in the same year, and a reader who only sees the reported-PAT headline would miss it. Segment mix is not
disclosed in a single five-year table in the material gathered here (flagged as a gap below); the closest available
reading is that US formulation sales ran at roughly 26 to 29% of consolidated sales through FY26 to FY27 [RDS21]
[RDS62], India formulations grew double digits in most of the quarters sampled [RDS53][RDS63], and global
specialty/innovative medicines reached roughly 20% of sales by Q2 FY26 [RDS58] with a single-source claim of USD
1.42 billion for FY26 overall [RDS71].

**Eight-quarter table, Q2 FY25 to Q1 FY27.**

| Quarter | Revenue / gross sales (Rs crore) | EBITDA margin | PAT (Rs crore) | US formulation sales (USD million) | FDA/compliance and deal note |
|---|---|---|---|---|---|
| Q2 FY25 | 13,264.2 | 29.6% | 3,040.2 (+28% YoY) | not itemised in this pass | [RDS49] |
| Q3 FY25 | ~13,675 | 29.3% | ~2,903.3 (+15% YoY) | 474 (down 0.7%) | [RDS50] |
| Q4 FY25 | ~12,815.6 | 28.7% | 2,149.9 reported / 2,889.1 adjusted | 464 (down 2.5%) | [RDS52][RDS53] |
| Q1 FY26 | 13,851 (+9% YoY) | ~31% | 2,279 reported / 2,996.1 adjusted | not itemised in this pass | SCD-044 write-off Rs 288 crore and US legal-settlement provision Rs 530 crore [RDS55][RDS56] |
| Q2 FY26 | 14,478 (+8.9% YoY) | 31.3% | 3,118 (+2.6% YoY) | US sales down 4.1% YoY | Global innovative medicines USD 333 million (+16.4% YoY), surpassing US generics for the first time this quarter [RDS57][RDS58] |
| Q3 FY26 | 15,469.1 (+15.1% YoY) | not itemised | 3,368.8 (+16.0% YoY) | not itemised in this pass | [RDS59] |
| Q4 FY26 | ~14,612 or ~14,560, conflict C-RDS02 | not itemised | 2,714 (+26.24% YoY) | not itemised in this pass | [RDS60] |
| Q1 FY27 | 15,183.55 to 15,300, two figures in circulation | 28.9% (down from 31.0% a year earlier) | 2,895 (+27% YoY) | 427 (down 9.7% YoY, ~26.6% of sales) | one-time costs ~Rs 204 crore, other income Rs 724 crore [RDS61][RDS62][RDS64] |

**Timeline of material events.**

| Date | Event | Source |
|---|---|---|
| Dec 2022 | Halol facility placed under an FDA import alert | [RDS33] |
| 3 to 12 Aug 2022 | Mohali inspected, classified OAI | [RDS37] |
| Apr 2023 | Mohali Consent Decree Correspondence/Non-Compliance Letter disclosed; batch release from Mohali temporarily paused | [RDS37] |
| 18 Jun 2024 | Warning letter issued for Dadra (following a Dec 2023 inspection; repeats observations from 2017 and 2019 letters) | [RDS35] |
| 30 May 2025 | Checkpoint Therapeutics acquisition completed, gaining UNLOXCYT | [RDS29] |
| 2 to 13 Jun 2025 | Halol inspected, reclassified OAI; Form 483 with eight observations, two repeat | [RDS32] |
| Jan 2026 | UNLOXCYT US availability announced | [RDS31] |
| 27 Apr 2026 | Definitive agreement signed to acquire Organon for USD 11.75 billion enterprise value, USD 14.00 per share cash | [RDS24][RDS25] |
| 4 Aug 2026 | CRISIL removes Sun Pharma from Rating Watch and reaffirms Crisil AAA/Stable | [RDS11] |
| Early 2027 (expected) | Organon acquisition expected to close, pending regulatory and shareholder approvals | [RDS26] |

Halol's current OAI classification is itself a repeat of history: the facility's prior warning letter (from a
September 2014 inspection) took close to four years to clear, from September 2014 to June 2018 [RDS34]. That four-
year prior resolution time is a useful prior for anyone trying to estimate when the current Halol import alert might
lift.

**Management narrative.** Management commentary gathered in this pass leans heavily on growth-rate framing for the
innovative-medicines business: "US sales of innovative medicines have surpassed generics for the first time" in Q2
FY26 [RDS58], global innovative medicines growing 16.6% YoY in H1 FY26 [RDS70], and a company spokesperson framing
future growth around the planned Unloxcyt launch [RDS67]. The CRISIL rating rationale itself independently confirms
R&D spend of about 6.1% of sales and a cumulative R&D investment figure of Rs 33,500 crore [RDS43]. No chairman's
letter quote with a page number was located in this pass for FY21 through FY24 (flagged as a gap).

**Peer set.** Divi's Laboratories, Cipla, Torrent Pharma, Mankind Pharma, Dr. Reddy's Laboratories, Zydus Lifesciences,
Lupin, Abbott India, Aurobindo Pharma, Glenmark Pharmaceuticals, per a July 2025 Motilal Oswal profile [RDS72].

| Metric (Aug 2026 snapshot) | Sun Pharma | Cipla | Torrent | Zydus | Lupin |
|---|---|---|---|---|---|
| Trailing P/E | ~38x | ~34x | ~88x | ~26x | ~18x |
| Net margin | ~19% (highest in group) | n/a in this snapshot | n/a | n/a | n/a |
| Return on equity | ~16% (trails Lupin and Torrent) | n/a | n/a | n/a | n/a |

Source: [RDS73].

**Three practice hypotheses (collected only, not concluded).**

H1. The Organon acquisition marks a structural shift toward branded/innovative and women's-health revenue at the
cost of a leverage step-up the market has not yet fully priced. Predictions: net debt/EBITDA should rise from
sub-0.1x toward the 1.5 to 2x range CRISIL itself models for FY2028 once the deal closes [RDS17][RDS27]; the
innovative/specialty revenue share should keep rising toward the "top-25 global pharma" framing [RDS26]; rating
agencies should keep the issue on watch-like footing until integration milestones are visible [RDS11].

H2. Sun Pharma's US generics franchise is in slow structural decline that the company's own segment reporting
partially obscures by emphasising innovative-medicines growth rates rather than US-generics absolute dollars.
Predictions: US formulation sales in USD terms, once Leqselvi and Unloxcyt launch revenue is backed out, should show
a declining or flat multi-quarter trend (the already-gathered USD 474 million, 464 million, down 4.1%, and 427
million figures already trend down [RDS50][RDS53][RDS58][RDS62]); the Halol, Dadra and Mohali compliance records
should correlate with slower approval cadence for new ANDAs from those specific sites.

H3. Sun Pharma's India-formulations business is the quiet stabiliser that lets the company absorb US generics
volatility and acquisition leverage without rating pressure, and its growth is understated relative to its
contribution to consolidated EBITDA because rupee-denominated growth percentages look smaller next to dollar-
denominated US and EM percentages. Predictions: India formulations growth should stay consistently double-digit
even as US sales fall in the same periods (already seen at +13.6% in Q4 FY25 and +16% in Q1 FY27 [RDS53][RDS63]);
CRISIL's own rating-rationale ordering should keep leaning on the India market-share figure as US uncertainty grows.

(Checkpoint, not a section closer: Sun Pharma's dossier above fixes identity, a five-year financial series with one
unresolved revenue conflict, an eight-quarter series, a nine-item timeline, management-narrative themes, a ten-name
peer set, and three unconcluded hypotheses. Conflicts C-RDS01 and C-RDS02 remain open pending a direct read of the
company's own annual report. The single H2 closer for this whole section appears at the very end, after all five
companies and the cross-company comparison.)

### 9.2 Cipla Limited

Cipla Limited is the family-promoted (Hamied family, holding 29.19% as of 30 Jun 2025 [RDC08]) pharmaceutical
company whose two most informative stories in this dossier are a single-partner manufacturing dependency (the
Pharmathen/lanreotide disruption) and a guidance structure built specifically to hedge against it. Cipla's own
management explicitly excludes lanreotide from its headline FY27 North America revenue target, which is itself a
useful, checkable piece of evidence about how much of the growth story still rides on one external facility's
remediation timeline [RDC47][RDC53].

**Identity.**

| Field | Value | Source |
|---|---|---|
| NSE symbol | CIPLA | [RDC01] |
| BSE code | 500087 | [RDC01] |
| ISIN | INE059A01026 | [RDC02] |
| NSE industry classification | Macro Healthcare, Sector Healthcare, Industry Pharmaceuticals and Biotechnology, Basic Industry Pharmaceuticals | [RDC03] |
| Statutory auditor | Walker Chandiok & Co LLP (current); B S R & Co LLP recommended to incoming for a first five-year term from the 90th AGM | [RDC06][RDC07] |
| CARE rating | CARE AAA (Stable) long term, CARE A1+ short term, reaffirmed 26 Aug 2025, continuously held since at least 2022 | [RDC04][RDC05] |
| Business description | Incorporated 1935, India's third-largest pharma company by most rankings, with India ("One India"), North America, South Africa ("One Africa") and Emerging Markets and Europe as its four reported geographies, and lanreotide (via contract manufacturer Pharmathen) a current single-partner dependency in North America | [RDC09][RDC20][RDC53] |

**Five-year financial table, FY21 to FY26 (consolidated).**

| Fiscal year | Revenue (Rs crore) | Operating profit / EBITDA (Rs crore) | OPM / EBITDA margin | PAT (Rs crore) | Note |
|---|---|---|---|---|---|
| FY21 | 19,160 | 4,252 | 22% | 2,389 | [RDC10] |
| FY22 | 21,763 | 4,553 | 21% | 2,547 | [RDC11] |
| FY23 | 22,753 | 5,027 | 22% | 2,833 | [RDC12] |
| FY24 | 25,774 (Screener) / 25,875.02 (CARE) | 6,291 | 24% | 4,154 | [RDC13] |
| FY25 | 27,548 (Screener) / 27,530.70 (CARE) | 7,110.98 (PBILDT) | 26% | 5,269.20 | India 42%, US 29%, EM and Europe 12%, South Africa 14% of revenue [RDC14][RDC20] |
| FY26 | 28,163, highest ever, up about 2% YoY | 5,925 | 21% | 3,879, down about 26% YoY | India (One India) above Rs 12,500 crore; North America USD 780 million; Africa up about 7% in USD; EM and Europe above USD 400 million annualised [RDC15][RDC16][RDC17][RDC18][RDC19] |

The margin arithmetic here is worth stating once: FY25's PBILDT of Rs 7,110.98 crore against revenue of Rs 27,530.70
crore gives 7,110.98 / 27,530.70 = 25.8%, rounded to the 26% OPM already cited by Screener [RDC14]. FY26's EBITDA
margin fell to 21% from that 26%, even as revenue grew, which is the headline margin-compression story this dossier's
second hypothesis addresses below.

**Eight-quarter table, Q2 FY25 to Q1 FY27.**

| Quarter | Revenue (Rs crore) | Operating profit / EBITDA margin | PAT (Rs crore) | North America revenue (USD million) | Lanreotide/Pharmathen note |
|---|---|---|---|---|---|
| Q2 FY25 | 7,051 | 27% | 1,305 | not itemised in this pass | pre-dates the Pharmathen disruption |
| Q3 FY25 | 7,073 | 28% | 1,575 | not itemised in this pass | pre-dates the Pharmathen disruption |
| Q4 FY25 | 6,730 | 23% | 1,214 (Screener) / 1,221.84 (Business Today comparator) | not itemised in this pass | pre-dates the Pharmathen disruption |
| Q1 FY26 | 6,957 | 26% | 1,292 (Screener) / 1,291.61 (CARE, unaudited) | not itemised in this pass | R&D spend Rs 432 crore, 6.2% of sales [RDC24] |
| Q2 FY26 | 7,589 | 25% | 1,353 | not itemised in this pass | pre-dates the Pharmathen disruption |
| Q3 FY26 | 7,074 | 18% | 674 (down 36.6% QoQ) | 167, down YoY | Pharmathen Rodopi facility inspected 10 to 21 Nov 2025, nine Form 483 observations; R&D spend Rs 494 crore, 7.0% of sales, up 37.4% YoY [RDC24][RDC52] |
| Q4 FY26 | 6,541.20 (down 2.8% YoY) | 14.6% (down from 22.8%) | 554.64 (down about 54 to 55% YoY) | not itemised in this pass | Rs 42.02 crore impairment on associates; 14 Jan 2026 SEBI Reg 30 disclosure of the lanreotide production pause [RDC39][RDC53] |
| Q1 FY27 | 7,119, record | 16.7% | 789 (11.1% margin) | 162 (about 22% of consolidated revenue) | gVentolin, Nintedanib, Dapagliflozin launched in the US; US$1 billion North America FY27 target explicitly excludes lanreotide [RDC41][RDC43][RDC45][RDC46][RDC47] |

**Timeline of material events.**

| Date | Event | Source |
|---|---|---|
| 6 to 17 Feb 2023 | Pithampur (Indore) facility inspected, eight Form 483 observations | [RDC56] |
| 5 Aug 2023 | Pithampur classified Official Action Indicated | [RDC56] |
| 17 Nov 2023 (disclosed 18 Nov) | Pithampur warning letter issued; shares fell 8.10% on 23 Nov 2023, Cipla's biggest one-day fall of 2023 | [RDC56] |
| 7 to 13 Nov 2024 | Virgonagar, Bengaluru inspected, classified VAI | [RDC59] |
| 26 to 30 May 2025 | Bommasandra, Bengaluru inspected, one Form 483 observation, initially classified OAI | [RDC60] |
| 4 Aug 2025 | Bommasandra reclassified VAI by email | [RDC60] |
| 10 to 21 Nov 2025 | Pharmathen's Rodopi, Greece facility (Cipla's exclusive lanreotide manufacturer) inspected, nine Form 483 observations; redacted report public 7 Jan 2026 | [RDC52] |
| 14 Jan 2026 | Cipla's SEBI Regulation 30 disclosure: lanreotide production temporarily paused, resupply targeted for H1 FY27 | [RDC53] |
| 27 Jul 2026 | USFDA final approval for generic Advair Diskus in all three strengths, estimated US market about USD 908 million | [RDC64] |

**Management narrative.** Three themes recur across the material gathered here. First, CARE's own rationale frames
FY25's run of 22 Form 483 observations, all closing VAI with zero new warning letters, as a credit strength rather
than simply a compliance cost [RDC58]. Second, management (Achin Gupta, MD and Global CEO, on the FY26 results)
consistently pairs a guided India growth number with a US number that is explicitly hedged against the named
lanreotide disruption [RDC16][RDC47][RDC51]. Third, the repeated emphasis on biosimilars (6 to 8 assets over 5 to 8
years [RDC50]), peptide injectables, and a steady complex-generic launch cadence (gAdvair, gVentolin, Nintedanib,
Dapagliflozin [RDC46][RDC64]) suggests management is narrating a shift toward harder-to-replicate products ahead of
the still-unresolved lanreotide line.

**Peer set.** Sun Pharmaceutical, Dr. Reddy's Laboratories, Lupin, Torrent Pharmaceuticals, Zydus Lifesciences,
Aurobindo Pharma, per Cipla's own analyst-convention peer set [RDC67].

| Metric (late Aug 2026 snapshot) | Cipla | Sun Pharma |
|---|---|---|
| Net margin | ~11.5% | ~19.4% |
| Return on equity | ~10.6% | n/a in this snapshot |

Source: [RDC66][RDC67].

**Three practice hypotheses (collected only, not concluded).**

H1. The lanreotide/Pharmathen production pause is a single-partner concentration risk that management's own guidance
structure is already designed to absorb by excluding lanreotide from the headline US$1 billion FY27 target, which
understates how much of the US growth story still rides on one external site's remediation. Predictions: North
America USD revenue should show a step-down or flattening across Q3 FY26 to Q1 FY27 once lanreotide's pre-pause
contribution can be isolated; the stated H1 FY27 resupply target should either be met, producing a discrete revenue
step-up, or missed, producing silence or a pushed-out date, in Q2 and Q3 FY27 commentary [RDC53].

H2. Cipla's FY26 margin collapse (EBITDA margin from 26% in FY25 to 21% in FY26, falling further to 14.6% in Q4 FY26
and 18% in Q3 FY26 [RDC14][RDC15][RDC38][RDC39]) is better explained by the compounding of the Pharmathen pause, a
rising R&D-to-sales ratio (about 7% of revenue budgeted for FY27 [RDC49]), and one-off impairments than by any single
cause; the market's 11% two-session share-price recovery after the Q4 FY26 results [RDC39] suggests investors are
already pricing this as transitory. Predictions: margin should recover toward the stated 18.5 to 20% FY27 guidance
band within the H2 FY27 quarters management explicitly flagged as the recovery window.

H3. Cipla's paired guidance ("double-digit India growth, lanreotide-excluded US run rate") is a defensive narrative
structure that isolates the one number genuinely at risk of a miss. Predictions: the North America figure, not the
India figure, should show the most quarter-to-quarter hedging language in Q2 and Q3 FY27 calls; the first-to-file
gDovato exclusivity window a skeptical brokerage cites as the mechanism that could push the US$1 billion milestone to
FY28 rather than FY27 [RDC48] is a checkable, dated regulatory fact against the FDA's own Orange Book.

### 9.3 Dr. Reddy's Laboratories Limited

Dr. Reddy's Laboratories Limited is the one company in this track's dossier set that is also a US SEC ADR issuer
(CIK 0001135951, filing Form 6-K and Form 20-F [RDD04]), which is precisely why it produces this dossier's strongest
worked example of primary-source precedence. A secondary aggregator figure for Dr. Reddy's Q1 FY27 profit, cited at
planning time as Rs 1,290 crore, does not match any line item in the company's own primary SEC 6-K exhibit; the
confirmed figure of record is profit attributable to equity holders of the parent of Rs 443.5 crore (Rs 4,435
million) [RDD17][RDD21]. This is kept in the research deliverable deliberately as a live demonstration of what
happens when a filing disagrees with an aggregator: the filing wins, and the disagreement is logged rather than
quietly corrected.

**Identity.**

| Field | Value | Source |
|---|---|---|
| NSE symbol | DRREDDY | [RDD01] |
| BSE code | 500124 | [RDD01] |
| ISIN | INE089A01031 | [RDD01] |
| SEC CIK (ADR issuer) | 0001135951, filing Form 6-K and Form 20-F | [RDD04][RDD05] |
| Statutory auditor | S R Batliboi & Associates LLP | [RDD03] |
| ICRA rating | [ICRA]AA+ (Stable), reaffirmed Dec 2024, bank facility size enhanced to Rs 2,000 crore from Rs 1,200 crore; no CRISIL rating located in this pass | [RDD06] |
| CEO / CFO | Erez Israeli (CEO), M.V. Narasimham (CFO), as of the Q1 FY27 call | [RDD10] |
| Business description | India-origin generics and API maker with a historically large North America segment, now diversifying into biosimilars, consumer health, peptides and GLP-1 (semaglutide) generics, currently absorbing a lenalidomide (gRevlimid) revenue cliff and a semaglutide manufacturing setback | [RDD18][RDD26][RDD54] |

**Five-year financial table, FY21 to FY26 (consolidated).**

| Fiscal year | Revenue | EBITDA | EBITDA margin | PAT (profit attributable to equity holders) | Note |
|---|---|---|---|---|---|
| FY21 | not traced to a primary source in this pass | not located | not located | not located | flagged as a gap; secondary tabulations disagreed with each other and were dropped rather than cited as fact |
| FY22 | not traced to a primary source in this pass | not located | not located | not located | same gap as FY21 |
| FY23 | Rs 24,587.9 crore (secondary, independently corroborated by the primary FY24 6-K's comparative column of Rs 245,879 million) | not located | not located | about Rs 4,507.3 crore (secondary, not independently re-opened) | [RDD77] |
| FY24 | Rs 27,916.4 crore (secondary) / Rs 279,164 million (primary 6-K), +14% YoY | Rs 83,013 million (29.7% of revenue) | 29.7% | about Rs 5,577.9 crore (secondary; a second secondary source gives Rs 5,568 crore, a small unreconciled gap) | North America revenue Rs 129,895 million, +28% YoY, about 46% of total [RDD73][RDD74][RDD78] |
| FY25 | Rs 32,553.5 crore (+16.61% YoY, Seeking Alpha syndication) | Rs 92,133 million (28.3%) | 28.3% | Rs 56,544 million (Rs 5,654.4 crore), per the primary Form 20-F, treated as the figure of record over secondary variants of Rs 5,654 to 5,725.2 crore | Europe revenue up 55% reported, 14% excluding the acquired Nicotinell/NRT business [RDD47][RDD71][RDD72][RDD79] |
| FY26 | Rs 340.5 billion (Rs 34,050 crore), +4.6% YoY excluding a one-time Rs 4.5 billion shelf-stock adjustment | not given as a single full-year figure in this pass; Q4 FY26 EBITDA alone was Rs 981 crore at a 13% margin | R&D spend 7.2% of revenue | Q4 FY26 profit crashed about 86% YoY to about Rs 220 crore | Segment split (Rs million): Global Generics 299,033; North America 113,737 (down 22%); Emerging Markets 67,608 (up 23%); India 62,186 (up 16%); Europe 55,501 (up 55%/14% ex-NRT); PSAI 34,774 (up 3%); total 335,933 (up 3%) [RDD49][RDD57][RDD58][RDD60][RDD62] |

FY21 and FY22 are genuine gaps in this pass, named rather than filled with an invented number: the secondary
tabulations found disagreed with each other and the primary 20-F filings for those years, though they exist on
EDGAR, were not opened directly. FY26's own PSAI segment figure also carries an unresolved conflict: the company's
results table gives Rs 34,774 million, while a separate secondary source states Rs 42,040 million for the same line,
a gap of about (42,040 - 34,774) / 34,774 = 20.9% that is not explained by a simple unit error [RDD59].

**Eight-quarter table, Q2 FY25 to Q1 FY27.**

| Quarter | Revenue (Rs crore) | PAT (Rs crore) | EBITDA margin | North America revenue (Rs crore, YoY) | Note |
|---|---|---|---|---|---|
| Q2 FY25 | 8,038.2 (+16.45% YoY) | 1,255.7 (down 15.28% YoY) | 28.4% | not itemised in this pass | a different secondary source states Rs 1,342 crore for the same quarter, an unresolved conflict [RDD69][RDD70] |
| Q3 FY25 | 8,358.6 (+15.9% YoY) | 1,413.7 (+2.4% YoY) | 27.5%, down from 29.3% a year earlier | not itemised in this pass | [RDD68] |
| Q4 FY25 | 8,506 (+20% YoY) | 1,594 (+22% YoY) | 29% | not itemised in this pass | [RDD67] |
| Q1 FY26 | not itemised in this pass | 1,409 to 1,417.8, two figures in circulation | not itemised in this pass | not itemised in this pass | revenue up about 11% YoY [RDD66] |
| Q2 FY26 | 8,805 (+9.8% YoY) | ~1,437 (+14% YoY) | ~26.7% | not itemised in this pass | [RDD65] |
| Q3 FY26 | 8,726.8 (+4.4% YoY) | 1,209.8 (down 14% YoY) | gross margin 53.6%, down from 58.7% a year earlier | not itemised in this pass | [RDD64] |
| Q4 FY26 | 7,516 (down about 11.6 to 12% YoY) | ~220 (down about 86% YoY) | 13% reported, 19.5% excluding specific items | not itemised in this pass | Rs 453 crore shelf-stock adjustment for lenalidomide, impairments on CAR-T assets and eftilagimod alfa, VAT-related provisions [RDD60][RDD61][RDD62] |
| Q1 FY27 | 8,070.5 (down 5.6% YoY, up 7.4% QoQ) | 443.5 (profit attributable to equity holders; profit for the period was 434.8) | 12.5% reported, 15.4% excluding the semaglutide impact | 2,204.8 (down 35% YoY, 27% of revenue, due to lower lenalidomide) | Rs 240 crore semaglutide provision; base business ex-lenalidomide grew double-digit across all geographies per management [RDD15][RDD16][RDD17][RDD18][RDD19][RDD20] |

**Timeline of material events.**

| Date | Event | Source |
|---|---|---|
| 4 to 12 Oct 2023 | Bachupally biologics facility inspected (pre-approval), Form 483 with nine observations | [RDD42] |
| 12 to 16 May 2025 | Middleburgh, New York API facility inspected, Form 483 with two observations | [RDD40] |
| 19 to 24 May 2025 | Miryalaguda (CTO-5) API facility inspected, Form 483 with two observations | [RDD41] |
| 28 Apr 2026 | Health Canada grants a Notice of Compliance for generic semaglutide injection | [RDD29] |
| 15 May 2026 | Commercial launch of generic semaglutide in Canada, Dr. Reddy's first G7 market entry | [RDD30] |
| 12 May 2026 | Q4 FY26 results disclosed: lenalidomide shelf-stock adjustment and impairments crash profit about 86% YoY | [RDD62] |
| 25 Jun 2026 | Bachupally biologics facility inspected (pre-license), Form 483 with seven observations | [RDD39] |
| 13 Jul 2026 (reported) | Semaglutide FY27 pen-supply target cut from 12 million to 6 to 7 million units after an out-of-specification impurity in a scale-up batch; commercial Canada shipments placed on temporary hold | [RDD26][RDD27] |
| 22 Jul 2026 | Q1 FY27 results published: confirmed profit attributable to equity holders Rs 443.5 crore, correcting a secondary aggregator's Rs 1,290 crore figure that does not match any line in the primary SEC 6-K exhibit | [RDD17][RDD21][RDD23][RDD25] |
| 13 Aug 2026 | Deepak Sapra's resignation as CEO, API and Services disclosed, effective 12 Nov 2026 | [RDD12] |

The 22 July 2026 result is the single clearest primary-versus-secondary contradiction in this entire dossier set. The
primary SEC 6-K exhibit states profit for the period of Rs 4,348 million (Rs 434.8 crore) and profit attributable to
equity holders of the parent of Rs 4,435 million (Rs 443.5 crore) [RDD17]. Three independently located secondary
sources corroborate a figure in the Rs 434.8 to 443.5 crore range [RDD23][RDD24][RDD25]. The Rs 1,290 crore figure
that circulated at planning time matches none of these lines on any basis checked (profit for the period, profit
attributable to equity holders, EBITDA, or revenue), and is treated in this document as erroneous rather than as an
alternative reading of the same underlying number [RDD21].

**Management narrative.** CEO Erez Israeli's Q1 FY27 call framed the quarter under a "transition year" headline,
record revenue alongside the lenalidomide and semaglutide headwinds [RDD86], described the underlying base business
as delivering "healthy double-digit growth across all key geographies, including North America" [RDD55], and named
peptides, biosimilars, consumer health and innovation as the company's stated future growth engines to supplement
organic growth as lenalidomide declines [RDD53][RDD54]. An earlier management framing (pre-FY27) emphasised
profitability over growth as the metric to track, naming generics, consumer health, biologics and innovation as
growth areas [RDD56].

**Peer set.** Not independently assigned a fact row in this pass because the lane's reserved S-ID block (S370 to
S429) was already exhausted before the relevant sources could be re-opened; the lane's own gaps note names Sun
Pharma, Cipla, Lupin, Zydus, Torrent and Aurobindo as the peer group used by two brokerage snapshots (Pocketful, 29
Jul 2026, and Motilal Oswal, 6 Aug 2026), which is consistent with the peer sets independently confirmed for Sun
Pharma [RDS72] and Cipla [RDC67] in this same dossier set, but is flagged here as noted-only, not fact-row-cited.
<!-- GAP: Dr. Reddy's peer-set valuation multiples (Pocketful 16.87x P/E and 18.53% ROE versus Motilal Oswal 30.23x
P/E and 11.07% ROE, a week apart) were identified but not assigned fact rows in the raw lane file; a follow-up pass
should re-cite these against a fresh S-ID before they appear as fact in any later deliverable. -->

**Three practice hypotheses (collected only, not concluded).**

H1. The Q1 FY27 North America revenue decline (down 35% YoY) is driven predominantly by lenalidomide volume-cap
mechanics rather than broad-based US generics price erosion. Predictions: North America revenue excluding
lenalidomide should show double-digit growth in the same quarter, and the decline should correlate tightly with the
known January 2026 volume-cap-lift date and subsequent competitive entry, checkable against the company's own
base-business-ex-lenalidomide commentary [RDD20][RDD55].

H2. The semaglutide Canada launch, despite the out-of-specification impurity setback and the pen-target cut from 12
million to 6 to 7 million units, represents a genuine new-growth-lever commitment rather than a one-off opportunistic
launch. Predictions: Dr. Reddy's should file for semaglutide approvals in additional G7 or other jurisdictions within
12 to 24 months of the Canada Notice of Compliance (28 Apr 2026), and management should keep citing GLP-1/peptides as
a named growth pillar across at least two more quarterly calls [RDD54].

H3. The cluster of Form 483s at Dr. Reddy's own sites from 2023 to 2026 (Bachupally twice, Middleburgh, Miryalaguda)
reflects sustained compliance attention at a subset of newer-product sites (biologics, API scale-up) rather than a
company-wide quality lapse. Predictions: observation counts should concentrate at pre-license or pre-approval
inspections for newer facilities rather than at long-running, previously cleared solid-dose formulation sites,
checkable against FDA's own inspection classification database by site and inspection type [RDD39][RDD40][RDD41]
[RDD42].

### 9.4 Apollo Hospitals Enterprise Limited

Apollo Hospitals Enterprise Limited is a hospital chain and omnichannel pharmacy and digital-health group, not a
pharma manufacturer, and this dossier adapts the symmetric template accordingly: beds, occupancy, ARPOB and
segment-level PAT replace ANDA counts and FDA inspection classifications as the load-bearing metrics, per the lane's
own note on company type [RDA02][RDA03]. The single richest thread in Apollo's dossier is a guidance-versus-actual gap that has now
repeated across three successive quarterly cycles: Apollo HealthCo's digital cash-breakeven date, guided for Q4
FY26 as of the August 2025 call, has since slipped to Q1 FY27 ex-ESOP, then to Q2 FY27, while full reported
(ESOP-inclusive) breakeven has consistently been guided for Q3 FY27 throughout [RDA50][RDA51].

**Identity.**

| Field | Value | Source |
|---|---|---|
| NSE symbol | APOLLOHOSP | [RDA01] |
| BSE code | 508869 | [RDA01] |
| ISIN | INE437A01024 | [RDA01] |
| Statutory auditor | Deloitte Haskins & Sells LLP (current, second and final five-year term through the 46th AGM); Price Waterhouse Chartered Accountants LLP approved as incoming auditor 12 Aug 2026 | [RDA05][RDA06] |
| CRISIL rating | Crisil AA+ long term (outlook revised to Positive from Stable in Jan 2026), Crisil A1+ short term, unchanged as of the 29 May 2026 bulletin | [RDA07] |
| ICRA rating | [ICRA]AAA (Stable)/[ICRA]A1+, newly assigned 18 May 2026 (not a reaffirmation), revised 19 Jun 2026 to a combined Rs 3,000 crore facility size | [RDA08] |
| Business description | A hospital-chain and omnichannel pharmacy/digital-health group reporting three segments: Healthcare Services (hospitals), Apollo HealthCo (pharmacy distribution and Apollo 24/7 digital health), and Apollo Health and Lifestyle Limited (AHLL, clinics, diagnostics, Cradle maternity, fertility) | per the lane's note on segment structure |

**Five-year financial table, FY21 to FY26 (consolidated).**

| Fiscal year | Revenue (Rs crore) | EBITDA (Rs crore) | OPM / EBITDA margin | PAT (Rs crore) | Note |
|---|---|---|---|---|---|
| FY21 | 10,560, degrew 6% YoY | 1,137 post Ind AS 116 (degrew 28%); 912 pre Ind AS 116 (degrew 29%) | not itemised as a clean percentage in this pass | 150 (company's own Q4 FY21 release) / 137 (Screener.in), an unreconciled conflict | [RDA11][RDA12] |
| FY22 | 14,663 | 2,189 | 15% | 1,108 (Screener) / 1,056 (company's FY23-release comparator) / 850.4 (ICICI Direct estimate), three figures in circulation | [RDA13][RDA14] |
| FY23 | 16,612 (Screener) / 16,613 (company release) | 2,065 (Screener) / 2,050 reported after absorbing Rs 736 crore of Apollo 24/7 costs (company release) | 12% | 844 (Screener) / 819 (company release) | [RDA15][RDA16] |
| FY24 | 19,059 | 2,394 | 13% | 935 | [RDA17] |
| FY25 | 21,794, first fiscal year above Rs 20,000 crore, +14% YoY | 3,033 | 14% | 1,505 (Screener) / 1,446, up 61% YoY (company press wire), an unreconciled conflict | [RDA18][RDA34] |
| FY26 | 25,228 to 25,229, +16% YoY | 3,779 | 15% | 1,942 (IndiaMedToday, CompoundingAI) / 2,003 (DSIJ Insights, Screener), unresolved; Screener's independently self-consistent nine-quarter series favours the higher figure | [RDA19][RDA20][RDA43] |

Apollo's own operating-bed count grew by only about 150 beds across FY22 to FY25 even as operating profit grew at a
healthy 14% CAGR over the same window, per a Business Standard analysis of a Prabhudas Lilladher brokerage note
[RDA22]. That is the single starkest "announced versus commissioned" number in this dossier set outside Max
Healthcare's own version of the same pattern.

**Eight-quarter table, Q2 FY25 to Q1 FY27 (HealthCo segment profitability path).**

| Quarter | Consolidated revenue (Rs crore) | Consolidated PAT (Rs crore) | Apollo HealthCo revenue (Rs crore) | Apollo HealthCo EBITDA (Rs crore, margin) | Digital/online cash-loss note |
|---|---|---|---|---|---|
| Q2 FY25 | 5,589 (+15% YoY) | 379 (+63% YoY) | ~2,282 (+17% YoY) | PAT 19 crore, turning from a loss a year earlier | CFO states HealthCo achieved breakeven [RDA29][RDA31] |
| Q3 FY25 | 5,527 (+14% YoY) | 372 (+52% YoY) | not itemised in this pass | not itemised in this pass | [RDA32] |
| Q4 FY25 | 5,592 (+13% YoY) | 390 (+54% YoY) / 414 per Screener's reconciling series | not itemised in this pass | not itemised in this pass | [RDA33][RDA43] |
| Q1 FY26 | 5,842 (+15% YoY) | 433 (+42% YoY) / 441 per Screener's reconciling series | Apollo 24/7 GMV Rs 682 crore | not itemised in this pass | [RDA35][RDA36][RDA43] |
| Q2 FY26 | 6,304 (+13% YoY) | 477 (+26% YoY) | 2,661 (+17% YoY) | 110, up from 52 a year earlier (margin not separately stated) | [RDA37] |
| Q3 FY26 | 6,477 (+17% YoY) | 502 (+35% YoY) | 2,827 (+20% YoY, from 2,352) | 128 (4.5% margin, from 57 a year earlier) | PAT 87 crore, from 32 [RDA38][RDA39] |
| Q4 FY26 | 6,605 to 6,606 (+18% YoY) | 529 (+36% YoY) / 551 per DSIJ and Outlook Business | 2,848 (+20% YoY) | 156, from 36 a year earlier | online cash loss narrowed to about Rs 16 crore excluding ESOP [RDA40] |
| Q1 FY27 | 7,043 to 7,044 (+20.6 to 21% YoY) | 581 reported (+34% YoY) / 610.4 adjusted (+38.4% YoY) | 2,977 (+20% YoY) | 171, from 94 a year earlier (6% margin) | digital business cash loss Rs 9.7 crore in the quarter; PAT 101 crore, from 57 [RDA41][RDA42] |

**Timeline of material events.**

| Date | Event | Source |
|---|---|---|
| 26 Apr 2024 | Advent International to invest Rs 2,475 crore (about USD 297 million) in the Apollo HealthCo/Keimed merger for a 12.1% stake; combined entity valued at Rs 22,481 crore | [RDA44] |
| 22 Dec 2025 | SEBI issues comments on the HealthCo demerger scheme | [RDA46] |
| 26 Mar 2026 | NCLT (Chennai) first procedural order on the scheme, directing a shareholder meeting | [RDA46] |
| 5 May 2026 (reported, not fully reconciled with the 26 Mar date) | A further NCLT order enabling the scheme | [RDA46] |
| 20 May 2026 | Board approves merging Apollo Hospitals North Ltd (AHNL) into AHEL, effective 1 Apr 2026, CRISIL projecting a 10 to 12 month completion | [RDA55] |
| 29 May 2026 | CRISIL credit bulletin: AA+/Positive reaffirmed; Cradle/Fertility sale to Kids Clinic India pending CCI approval | [RDA07][RDA56][RDA58] |
| 24 Jun 2026 | Shareholder and creditor meeting for the HealthCo demerger scheme | [RDA47] |
| 1 Oct 2026 (target) | Slump sale of HealthCo's wholesale-distribution undertaking to Apollo Consumer Products targeted to complete | [RDA47] |
| Q4 FY27 (Jan to Mar 2027, target) | Apollo Healthtech Ltd (the demerged HealthCo entity) listing target | [RDA47] |

**Management narrative.** FY21's company-release language centred on COVID-19 impact absorption, with a specific
call-out that the non-COVID core business showed sequential recovery through the year [RDA62]. A Q1 FY25 summary of
Executive Chairman Dr Prathap C. Reddy's remarks emphasised leadership in adopting new healthcare technologies and
cited specific clinical firsts [RDA63]. FY25/FY26-era chairman commentary (relayed by press coverage, the original
annual-report letter not independently retrieved in this pass) describes an investment of over Rs 8,000 crore over
the next five years to add over 4,300 beds, with a first phase of about 2,000 beds already in progress at the time
[RDA64].

**Peer set.** Max Healthcare, Fortis Healthcare, Narayana Hrudayalaya, Global Health (Medanta), Aster DM Healthcare,
Krishna Institute of Medical Sciences (KIMS), Rainbow Children's Medicare, Dr Agarwal's Health Care, per a June 2025
peer-comparison snapshot [RDA66].

| Metric (early Sep 2026 snapshot) | Apollo | Max Healthcare | Narayana Hrudayalaya |
|---|---|---|---|
| Market capitalisation (Rs crore) | ~1,26,300 | ~96,763 | ~38,439 |
| Net margin | ~8.0% | ~16.4% (highest in set) | n/a |
| Return on equity | ~22.7% (highest in set) | n/a | ~20.1% |
| TTM P/E | ~66.5x | ~72.3x | ~47x |

Source: [RDA67][RDA68].

**Three practice hypotheses (collected only, not concluded).**

H1. The HealthCo demerger is designed to let the market price the pharmacy-and-digital segment separately from the
hospitals business, and that case depends on the segment
reaching a materially higher EBITDA margin than it has shown to date, and the margin path is running behind the
company's own public FY27 targets. Predictions: HealthCo's quarterly EBITDA margin should trend toward, but print
below, the stated 6.5 to 7% FY27 exit-margin target [RDA49] at each successive quarter; the digital cash-breakeven
date should continue to slip by at least one quarter each time it is restated, as already observed three times
[RDA50][RDA51].

H2. Apollo's bed-capacity growth is persistently announcement-led rather than delivery-led, in the same pattern
documented for Max Healthcare, and the gap between announced and operationalised beds is widening even as capex
guidance rises. Predictions: the ratio of beds actually added in a fiscal year to the beds guided at the start of
that year should be well below 1.0 for FY24, FY25 and FY26, consistent with the already-confirmed finding of only
about 150 beds added over FY22 to FY25 against pipelines of 2,300 to 3,500-plus beds announced over the same window
[RDA22]; the FY27 guided addition (part of the 5,800-plus-beds-over-five-years target [RDA53]) should similarly
undershoot when checked against actual FY27 commissioning.

H3. Apollo's credit-rating trajectory (CRISIL AA+/Positive, ICRA AAA newly assigned May 2026) is being driven by
balance-sheet-level improvements at the Healthcare Services (hospitals) segment even while HealthCo remains
loss-making on a cash basis, meaning the rating-upgrade case rests on the hospitals segment carrying the group
through the demerger and bed-expansion capex cycle, not on HealthCo's own standalone creditworthiness. Predictions:
Healthcare Services segment EBITDA margin (24 to 24.8% per [RDA38][RDA42]) should remain materially higher and more
stable than HealthCo's segment EBITDA margin (4 to 6% per [RDA37] to [RDA42]) through FY27; any future CRISIL or
ICRA rating action on Apollo Healthtech Ltd, once it exists as a separately rated issuer post-listing, should carry a
materially lower rating than AHEL's own AA+/AAA.

### 9.5 Max Healthcare Institute Limited

Max Healthcare Institute Limited is the smallest and most North-India-concentrated of the two hospital-chain
dossiers in this track, and it reports its own operating results on two genuinely different bases: a narrower
"consolidated" basis that matches the audited statutory profit-and-loss statement, and a wider "network" basis that
includes revenue from hospitals under management or brand-licensing arrangements not fully consolidated into the
P&L. In FY26 the network basis (Rs 10,538 crore gross revenue) exceeds the consolidated basis (Rs 8,373 crore) by
about (10,538 - 8,373) / 8,373 = 25.9%, rounded to about 26% [RDM45]. Every quarter examined in this pass shows the
same pattern, which this dossier treats as a genuine citation-discipline risk rather than a data error, since both
figures appear in the company's own disclosures [RDM46].

**Identity.**

| Field | Value | Source |
|---|---|---|
| NSE symbol | MAXHEALTH | [RDM01] |
| BSE code | 543220 | [RDM01] |
| ISIN | INE027H01010 | [RDM02] |
| Statutory auditor | S R Batliboi and Co LLP (per the Arihant Capital background page and an NSE filing synthesis); a separate, undated secondary listing names Deloitte Haskins and Sells, an unreconciled conflict | [RDM02][RDM03][RDM04] |
| CARE rating | CARE AA+ (Stable), upgraded from AA in Oct 2024, reaffirmed Oct 2025 on enhanced facility size (Rs 871.01 crore to Rs 1,160.38 crore); no ICRA or CRISIL rating for Max Healthcare Institute itself was found in this pass | [RDM06][RDM07] |
| Business description | A North-India-concentrated hospital chain (22 facilities and over 5,000 beds as of mid-2025, growing to 21 facilities and over 6,100 beds by the Q1 FY27 reference point) built substantially through acquisition (Jaypee Healthcare, Kalinga/MSSH Bhubaneswar, Yerawada/Pune) and brownfield tower expansion | [RDM28][RDM29] |

**Five-year financial table, FY21 to FY26 (consolidated, Screener basis; network basis noted where material).**

| Fiscal year | Revenue (Rs crore) | Operating profit (Rs crore) | OPM | PAT (Rs crore) | Note |
|---|---|---|---|---|---|
| FY21 | 2,508 | 407 | 16% | net loss 138 | [RDM13] |
| FY22 | 3,937 | 951 | 24% | 605 | [RDM14] |
| FY23 | 4,563 | 1,241 | 27% | 1,104 | management's own "network" FY23 figure is cited elsewhere at Rs 6,234 crore revenue, not independently reconciled in this pass [RDM15][RDM69] |
| FY24 | 5,406 | 1,493 | 28% | 1,058 | [RDM16] |
| FY25 | 7,028 | 1,849 | 26% | 1,076 (consolidated) / 1,336 (network PAT) | network revenue growth cited at about 26% by CARE, close to but not identical to the consolidated growth rate of (7,028-5,406)/5,406 = 30.0% [RDM17][RDM77] |
| FY26 | 8,373 (consolidated) / 10,538 (network gross revenue) | 2,243 | 27% | 1,442 (consolidated) / 1,631 (network PAT, up 22% from 1,336) | the network/consolidated revenue gap here is about 26%, computed above [RDM18][RDM45] |

**Eight-quarter table, Q2 FY25 to Q1 FY27 (bed commissioning and ARPOB).**

| Quarter | Consolidated revenue and PAT (Rs crore) | Network gross revenue and PAT (Rs crore) | ARPOB (Rs) | Occupancy | Bed-commissioning note |
|---|---|---|---|---|---|
| Q2 FY25 | not itemised in this pass; the lane's own quarterly series begins at Q4 FY25 | not itemised in this pass | not itemised in this pass | not itemised in this pass | flagged as a gap [RDM30] |
| Q3 FY25 | not itemised in this pass | not itemised in this pass | not itemised in this pass | not itemised in this pass | flagged as a gap [RDM30] |
| Q4 FY25 | revenue 1,910, PAT 319 | not itemised in this pass | not itemised in this pass | not itemised in this pass | [RDM30] |
| Q1 FY26 | revenue 2,028, PAT 308 | PAT 554 including a one-time Rs 149 crore tax benefit; adjusted PAT about 406, +16% YoY; EBITDA about 694 at a 26.9% margin | not itemised in this pass | not itemised in this pass | [RDM31][RDM32] |
| Q2 FY26 | revenue 2,135, PAT 491 | not itemised in this pass | ~9% of hospital revenue from international patients (about Rs 231 crore) | not itemised in this pass | [RDM33][RDM44] |
| Q3 FY26 | revenue 2,068, PAT 301 | gross revenue 2,608 (+10% YoY), EBITDA 648, PAT 344 | not itemised in this pass | not itemised in this pass | at the Q2 FY26 call, management had guided the 400-bed Max Smart tower to commission "within about 30 days" [RDM34][RDM47] |
| Q4 FY26 | revenue 2,143, PAT 342 | gross revenue 2,664 (+10% YoY), EBITDA 682 (26.8% margin), PAT 387 | 77,900, described as stable | 75% | Max Smart tower reported with only 156 of 400 beds operational by around this period [RDM35][RDM36][RDM47] |
| Q1 FY27 | revenue 2,366, PAT 323 | gross revenue 2,982 (+16% YoY), EBITDA 704 (24.8% margin), PAT 357 | 81,900, +5% YoY and QoQ (excluding oncology, +9% YoY) | above 75% | Max Smart tower at 50% (202 of 400 beds) operational; Vaishali 202-bed tower (Rs 425 crore) board-approved; Kalinga/MSSH Bhubaneswar contributed Rs 19 crore revenue at 50% occupancy and ARPOB Rs 35,000 [RDM38][RDM39][RDM40][RDM41][RDM42][RDM47][RDM49][RDM62] |

**Timeline of material events.**

| Date | Event | Source |
|---|---|---|
| Dec 2023 | Share purchase agreement for Starlit Medical Centre (Sahara Hospital, Lucknow), Rs 940 crore enterprise value | [RDM55] |
| Feb 2024 | Alexis Multi-Specialty Hospital, Nagpur acquired for Rs 412 crore | [RDM56] |
| Sep 2024 | 64% stake in Jaypee Healthcare acquired, Rs 1,660 crore enterprise value (equity consideration reported separately at Rs 398 crore out of the insolvency process) | [RDM57] |
| 21 Mar 2025 | Boards approve amalgamating Crosslay Remedies Limited into Jaypee Healthcare Limited | [RDM59] |
| 2025 | Anupshahr and Bulandshahr hospitals (from the Jaypee deal) divested for Rs 40 crore | [RDM58] |
| 13 Oct 2025 | CGHS tariff revision takes effect; management guides to a benefit of over Rs 200 crore once fully implemented | [RDM65] |
| Oct 2025 | CARE reaffirms CARE AA+ (Stable) on an enhanced facility size | [RDM07] |
| 7 Nov 2025 | NCLT (Chandigarh) sanctions the Crosslay-into-Jaypee merger, appointed date 5 Oct 2024 | [RDM59] |
| 8 Apr 2026 | Share purchase agreement signed for a 58.4% stake in Kalinga Hospital (Bhubaneswar), Rs 300 crore equity value | [RDM60] |
| 18 May 2026 | Kalinga deal closes at a revised 58.28% stake for Rs 297.97 crore | [RDM60] |
| 30 Jun 2026 | Class A shares of Yerawada Properties (Pune) acquired, giving 100% voting rights and about 50.22% economic interest | [RDM63] |
| 13 Aug 2026 | Q1 FY27 results: Max Smart tower reported at 202 of 400 beds (50%) operational; Vaishali 202-bed tower approved | [RDM39][RDM47][RDM49] |
| 3 Sep 2026 | Union Home Minister inaugurates the now fully commissioned 400-bed Max Smart tower, taking that site's capacity to about 1,200 beds | [RDM48] |

The Max Smart 400-bed tower sequence is the cleanest single announced-versus-commissioned case in this dossier.
Management guided the tower to commission "within about 30 days" at the Q2 FY26 call (16 Dec 2025 article date)
[RDM47]. By April 2026, one source describes only 156 of 400 beds as operational. By the Q1 FY27 call (13 Aug 2026),
management itself describes the tower as 50% operational (not the originally reported 202-of-400 figure once a
correction pass reconciled a conflation with a separate, newly announced 202-bed tower at Max Vaishali) [RDM47]
[RDM49]. Full commissioning is only visually confirmed by the 3 September 2026 inauguration event, itself about
three weeks after the Q1 FY27 call, more than eight months after the original "30 days" guidance [RDM48].

**Management narrative.** FY22 commentary from Chairman Abhay Soi described the year as one of marked network
performance improvement, announcing four inorganic-growth transactions including two Gurugram land parcels with
combined potential to add 2,200 beds [RDM68]. FY23 commentary tied results to "focus on execution across the
organisation in line with our articulated strategy" and flagged significant planned investment over the following
four to five years [RDM69]. At the Q2 FY26 call, management said brownfield expansions are expected to turn
margin-accretive quickly, unlike the usual EBITDA drag of greenfield hospitals, and dismissed concerns about
competitor capacity additions in Noida and Lucknow [RDM66][RDM67]. Chairman Soi has separately stated plans to invest
about Rs 6,000 crore to add 3,700 beds by 2028, growing to around 30 hospitals from 22 at the time of the statement
[RDM52].

**Peer set.** Apollo Hospitals, Fortis Healthcare, Narayana Hrudayalaya, and, in some but not all comparisons, KIMS
and Global Health (Medanta), per secondary peer-comparison coverage [RDM74].

| Metric (Sep 2026 snapshot) | Max Healthcare | Fortis | Narayana Hrudayalaya | Apollo |
|---|---|---|---|---|
| Market capitalisation (Rs crore) | ~95,868 | ~68,701 | ~37,993 | ~1,24,661 |
| TTM P/E | ~65.8x | ~65.56x | ~46.55x | ~59.66x |

Source: [RDM74][RDM75]. (The Rs 95,868 crore market-capitalisation figure here, dated to a September 2026 snapshot,
is higher than the Rs 84,265 crore figure independently confirmed for 12 Oct 2026 [RDM12]; this is consistent with
ordinary share-price movement over the intervening weeks, not a data conflict.)

**Three practice hypotheses (collected only, not concluded).**

H1 ("commissioned-versus-counted" bed gap). The gap between Max Healthcare's "network" and "consolidated" figures
may widen further as more brownfield towers (the Max Smart remaining beds, Nanavati Max's remaining half, the
Vaishali 202-bed tower, the Pune 450-bed project) come online under management or minority-owned structures rather
than full consolidation. Predictions: the network-to-consolidated revenue ratio should rise above the FY26 level of
about 1.26x in FY27 and FY28; checkable each quarter by recomputing the ratio from the company's own press release
against the standalone/consolidated filing with NSE [RDM45].

H2 ("announced-versus-commissioned" lag as a capacity-guidance credibility test). Management has repeatedly guided
bed-tower commissioning dates that slipped or were only partially met (Max Smart guided "30 days," actually taking
over eight months; Nanavati Max guided "mid-November" 2025, with only 116 of about 270 beds operational by Q4 FY26,
four and a half months later [RDM47][RDM50]). Predictions: the Vaishali 202-bed tower (guided "before FY30") and the
Lucknow 712-bed greenfield hospital (guided "by FY30") should show a similar gap between first announcement and the
quarter the full bed count appears in a signed NSE filing [RDM49][RDM53].

H3 (acquisition-integration drag masked by network-level reporting). Newly acquired assets appear to run at lower
ARPOB and occupancy than the mature network average for several quarters post-acquisition; Kalinga's Q1 FY27 ARPOB
of Rs 35,000 and 50% occupancy compares with the network average ARPOB of Rs 81,900 and occupancy above 75% in the
same quarter [RDM41][RDM62]. Predictions: if this is a systematic integration-drag pattern rather than Kalinga-
specific, each newly acquired asset should show ARPOB and occupancy converging toward the mature-network average
over a similar number of quarters (for example, 6 to 8), checkable by tracking Kalinga's and Yerawada's figures
quarter by quarter once Yerawada reports.

### 9.6 Cross-company comparison: the same shape under five different cover stories

Laid side by side, the five dossiers show a recurring structure: a headline revenue series that looks clean, a
margin or profit line with at least one unresolved multi-source conflict, and one live guidance-versus-actual gap
that only shows up once the quarterly detail is read rather than the full-year summary.

| Metric | Sun Pharma | Cipla | Dr. Reddy's | Apollo Hospitals | Max Healthcare |
|---|---|---|---|---|---|
| FY26 revenue (Rs crore) | ~58,200 to 58,600 (3-way conflict) [RDS14][RDS38][RDS42] | 28,163 [RDC15] | 34,050 [RDD57] | 25,228 to 25,229 [RDA19] | 8,373 consolidated / 10,538 network [RDM18] |
| FY26 EBITDA margin | ~27.9% (computed) [RDS38][RDS39] | 21% [RDC15] | not given as a single full-year figure in this pass; Q4 FY26 alone was 13% [RDD62] | 15% [RDA19] | 27% consolidated [RDM18] |
| FY26 reported PAT (Rs crore) | 11,479.4 (9,660 adjusted) [RDS40][RDS15] | 3,879, down ~26% YoY [RDC15] | full-year not itemised as a single figure in this pass; Q4 FY26 crashed ~86% YoY to ~220 [RDD60] | 1,942 or 2,003, unresolved [RDA20] | 1,442 consolidated / 1,631 network [RDM18] |
| Multi-year revenue growth | FY21 (~33,319 crore midpoint of a disputed range) to FY26 (~58,400 crore midpoint): 58,400 / 33,319 = 1.753; 1.753^(1/5) - 1 = 11.9% | FY21 (19,160) to FY26 (28,163): 28,163 / 19,160 = 1.470; 1.470^(1/5) - 1 = 8.0% | FY23 (24,587.9) to FY26 (34,050), 3-year only, FY21 to FY22 are a gap: 34,050 / 24,587.9 = 1.385; 1.385^(1/3) - 1 = 11.5% | FY21 (10,560) to FY26 (25,228): 25,228 / 10,560 = 2.389; 2.389^(1/5) - 1 = 19.0% | FY21 (2,508) to FY26 (8,373): 8,373 / 2,508 = 3.337; 3.337^(1/5) - 1 = 27.2% |
| Live guidance-versus-actual gap used as a hypothesis seed | Organon leverage step-up not yet visible in reported numbers [RDS22][RDS27] | US$1 billion North America target explicitly excludes lanreotide [RDC47] | semaglutide pen target cut 12 million to 6 to 7 million; base-business framing versus the lenalidomide cliff [RDD20][RDD26] | HealthCo digital breakeven slipped three successive quarters [RDA50][RDA51] | Max Smart 400-bed tower guided "30 days," took over 8 months [RDM47][RDM48] |
| Credit rating trajectory | CRISIL AAA/Stable reaffirmed after a rating-watch period [RDS11] | CARE AAA/Stable, unchanged since at least 2022 [RDC04][RDC05] | ICRA AA+ (Stable), no CRISIL rating found [RDD06] | CRISIL AA+/Positive; ICRA AAA newly assigned [RDA07][RDA08] | CARE AA+ (Stable), upgraded from AA in Oct 2024 [RDM06] |
| Reporting-basis caveat a citation must carry every time | which of three FY26 revenue figures is being used [RDS14][RDS38][RDS42] | which PAT comparator base (YoY vs QoQ) is in use for the Pharmathen-quarter decline [RDC55] | profit for the period versus profit attributable to equity holders of the parent (both reported each quarter) [RDD17] | which PAT figure in a given quarter-pair is being cited, since Screener's reconciling series favours the higher figure in each pair [RDA43] | "network" versus "consolidated" basis, every single time [RDM45][RDM46] |

Each company's own dossier is unusually data-rich on a different angle of the Track D playbook. Sun Pharma's file is
the strongest source for a business-model-mix angle (the shift toward specialty/innovative medicines) and for a
facility-level FDA compliance angle (Halol, Dadra, Mohali each have dated, multi-year histories). Cipla's file is
the strongest source for a single-partner manufacturing-dependency angle (Pharmathen/lanreotide) and for a
defensive-guidance-structure angle (the lanreotide-excluded US target). Dr. Reddy's file is the strongest source for
a primary-versus-secondary contradiction-detection angle (the confirmed Rs 443.5 crore figure against the erroneous
Rs 1,290 crore secondary claim) and for a product-concentration-cliff angle (lenalidomide). Apollo's file is the
strongest source for a guidance-slippage angle on a single, repeatedly restated metric (digital breakeven) and for a
segment-profitability-divergence angle (Healthcare Services versus HealthCo margins). Max Healthcare's file is the
strongest source for a reporting-basis-definition angle ("network" versus "consolidated") and for an
announced-versus-commissioned capacity angle (bed towers). <!-- GAP: the specific numbered angle codes (P1 to P10
for pharma, H1 to H6 for hospitals) referenced in PLAN.md's outline for section 12 belong to writer D's angle-
playbook section and were not available to this writer; the themes above are described qualitatively rather than
mapped to those codes, to avoid inventing a numbering this writer did not see defined. -->

### What this section establishes, and what it does not

- This section fixes a symmetric, seven-part dossier (identity, five-year financials, eight-quarter detail, an
  event timeline, management narrative, peer set, and three unconcluded practice hypotheses) for each of the five
  NIFTY 50 healthcare constituents in Track D: Sun Pharmaceutical, Cipla, Dr. Reddy's Laboratories, Apollo Hospitals
  and Max Healthcare.
- It establishes, with primary-source backing, that Dr. Reddy's Q1 FY27 profit attributable to equity holders of
  the parent was Rs 443.5 crore, and that a secondary aggregator's planning-time figure of Rs 1,290 crore does not
  match any line item in the company's own SEC 6-K exhibit; this stands as the clearest worked example in this
  deliverable of primary-source precedence resolving a live contradiction.
- It names, rather than silently resolves, a genuine multi-source conflict in at least one headline number for
  every one of the five companies (Sun Pharma's FY26 revenue, Cipla's FY25 base-comparator figure, Dr. Reddy's
  PSAI segment line, Apollo's FY22 and FY26 PAT, and Max Healthcare's "network" versus "consolidated" revenue
  basis), each logged to `raw/conflicts.md` by the originating lane.
- It collects fifteen practice hypotheses (three per company) as candidates for the engine's own Reason stage, each
  stated with a prediction and a named data source to check it against; none of these fifteen is presented as a
  conclusion, and none should be read as the engine's own Challenge or Prove output, because no live engine run has
  happened yet.
- It does not supply a complete five-year segment or geography table for Sun Pharma or Apollo, a complete FY21 to
  FY22 financial series for Dr. Reddy's, or a confirmed statutory auditor name for Max Healthcare; each of these
  gaps is named in the relevant subsection rather than filled with an invented figure.
- It does not assign the pharma (P1 to P10) or hospital (H1 to H6) angle codes from the engine's own angle-playbook
  section to any of the themes identified in the cross-company table, since that numbering belongs to a different
  writer's section and was not available in this pass; the themes are described qualitatively instead.

## 10. Twenty public sources cover a Track D investigation so far, on a path to thirty, and each is graded for reliability, independence and timeliness

**Answer.** As of this writing the engine's tested data-source catalogue (`research/raw/source_catalogue.csv`) holds 20 directly fetched public endpoints, short of the 30-row target the build plan set for this lane, because the catalogue records only sources a lane agent actually hit and logged a verified HTTP outcome for, not every source merely named in the plan. Of these 20, 13 carry Admiralty source-reliability grade A, 5 carry grade B and 2 carry grade C [RE01 to RE23], and three of the structurally most load-bearing hosts, the two internal NSE endpoints and niftyindices.com, returned nothing but a 60,000 millisecond timeout on every attempt made with a plain HTTP client [RE01] [RE03] [RE07], which is the single most consequential access-risk finding this lane produced.

### 10.1 What the catalogue actually covers, and why it is 20 rows and not 30

The research plan's R-E lane (PLAN.md section 4.2) set a target of at least 30 catalogue rows, one for every data-access pattern the engine's source clients would eventually need: NSE and BSE exchange hosts, the US FDA's several distinct public endpoints, SEC EDGAR, rating agencies, news and aggregator feeds, and the RBI's reference-rate archive. The lane agent that produced the catalogue hit a nightly rate limit mid-run, and because the writer discipline in force throughout this build (write the file after the first entries and keep appending, rather than holding everything until the end) had already been applied, the file that survived the interruption was complete and internally consistent at 20 rows rather than partial and unusable (build-log.md, 15 October 2026 entry "PHASE R1 COMPLETE"). Every one of those 20 rows is 100% VERIFIED or CORRECTED, the highest confirmation rate of any lane in the whole research deliverable, precisely because each row records a directly observed HTTP outcome (a status code, a timeout, a parsed body) rather than a claim read off a vendor's documentation page. The shortfall against the 30-row target is therefore a shortfall in breadth, not in the rigour of what was captured, and it is the honest number to report rather than the plan's own aspirational one.

The wider register this catalogue sits inside is larger again: the master source-ID register (`research/raw/sources.md`) held roughly 830 `S` rows across all ten research lanes as of 15 October 2026 (build-log.md, "PHASE R1 COMPLETE" entry), spanning company filings, regulator records, rating-agency rationales, industry-body figures, press coverage and aggregator pages cited throughout the rest of this document. The 20-row data-source catalogue is a distinct, narrower artefact: it is not a list of individual facts or documents, but a list of the access *patterns* (the hosts, endpoints, authentication requirements and rate limits) that any engine source client talking to those publishers has to be built against. One catalogue row can sit behind hundreds of individual `S`-numbered facts once the corresponding source client is live.

Table 10.1 rolls the catalogue up by origin class, the same nine-class taxonomy the engine's own `grading/admiralty.py` module uses to decide how two pieces of evidence relate to each other (section 13.4 below covers the independence graph itself).

**Table 10.1: Source catalogue rows by origin class**

| Origin class | Rows in catalogue | Example sources | Admiralty reliability range observed |
|---|---|---|---|
| exchange | 4 | NSE equity quote page, NSE quote JSON API, NSE corporate-announcement PDF host, BSE StockReachGraph API | A |
| regulator_us | 6 | openFDA drugsfda.json (two query variants), FDA Import Alert 66-40, FDA Orange Book zip, SEC EDGAR submissions JSON, SEC EDGAR browse-edgar HTML | A |
| regulator_in | 1 | RBI Reference Rate Archive | A |
| sec | 2 | the two SEC EDGAR access paths are also counted here as a dedicated class in the schema (`OriginClass` includes a standalone `sec` value distinct from `regulator_us`) | A |
| industry_body | 1 | NIFTY index constituent CSV via niftyindices.com | B |
| rating_agency | 4 | CRISIL Ratings rating-list page, ICRA rationale-list page, CARE Ratings homepage, CARE Ratings individual rationale PDF | B |
| press | 1 | Google News RSS search feed | C |
| aggregator | 2 | GDELT DOC 2.0 API, Screener.in company page | C |

Table 10.2 sets the catalogue's rows against the access outcome each one actually returned, which is the information that matters most for anyone building a source client against this list: a row's publisher reputation says nothing about whether a plain HTTP client can reach it today.

**Table 10.2: Access outcome by source, as directly tested**

| Source | Access outcome tested | Evidence |
|---|---|---|
| NSE equity quote page (`nseindia.com/get-quotes/equity`) | Timed out, 60,000 ms, two attempts | [RE01] |
| NSE quote JSON API (`nseindia.com/api/quote-equity`) | Timed out, 60,000 ms | [RE03] |
| NSE index constituent CSV via `archives.nseindia.com` | 200 OK, CSV parsed cleanly | [RE04] |
| NSE corporate-filing PDF via `nsearchives.nseindia.com` | Timed out, 60,000 ms, on both a PDF request and a CSV-shaped retest | [RE05] [RE06] |
| NIFTY index CSV via `niftyindices.com` | Timed out, 60,000 ms, two attempts | [RE07] |
| BSE StockReachGraph API | HTTP 403 Forbidden, no body | [RE08] |
| openFDA `drugsfda.json`, unfiltered | 200 OK, JSON parsed | [RE09] [RE10] |
| openFDA `drugsfda.json`, `sponsor_name` filter with URL-encoded quotes | HTTP 404 Not Found | [RE09] |
| FDA Import Alert 66-40 page | 200 OK, HTML parsed, but at a different URL than the plan's planning-time guess | [RE11] |
| FDA Orange Book data files zip | 200 OK, zip signature confirmed | [RE12] |
| SEC EDGAR submissions JSON | 200 OK, JSON parsed, filings current to within one day | [RE13] [RE14] |
| SEC EDGAR browse-edgar HTML | 200 OK, HTML table parsed | [RE15] |
| GDELT DOC 2.0 API | HTTP 429 Too Many Requests, twice, several minutes apart | [RE16] |
| Google News RSS | 200 OK, valid RSS 2.0 XML | [RE17] |
| Screener.in company page | 200 OK, most tables open, a narrow "Insights" subset gated behind login | [RE18] |
| CRISIL Ratings rating-list page | HTTP 404 Not Found at the tested URL | [RE19] |
| ICRA rationale-list page | Session-timeout page returned instead of content | [RE20] |
| CARE Ratings homepage | 200 OK, no login wall | [RE21] |
| CARE Ratings individual rationale PDF (found via search, not the list page) | 200 OK, binary PDF retrieved directly | [RE22] |
| RBI Reference Rate Archive | 200 OK for the search-form page; the actual data export needs a stateful postback a static fetch cannot replay | [RE23] |

Eight of the 20 tested access paths either timed out, returned an error status, or required a login session the lane could not obtain with a plain fetch. That is 40% of a catalogue built entirely from public, no-paid-subscription sources, which is itself evidence for a judging-relevant point raised elsewhere in this document: "public data only" is a real constraint on this build, not a formality, because a meaningful share of nominally public financial data sits behind access friction that has nothing to do with the data's actual publication status.

### 10.2 Verification method

Every row in the catalogue was produced the same way, and the method itself is as much a finding as any individual row: a single `WebFetch` GET request against the exact production-shaped URL pattern the engine's source client would eventually call, with the HTTP status code, response shape (JSON, HTML, CSV, zip, RSS) and a short verbatim excerpt of the body or error message recorded directly, never taken from a vendor's own documentation about what the endpoint is supposed to return. Where a first attempt failed with a timeout or a rate-limit response, the lane made one additional attempt, spaced several minutes apart where the failure mode suggested a transient rate limit (GDELT [RE16]) rather than a structural block (the NSE internal hosts [RE01] to [RE07], which failed identically on every attempt and therefore are not treated as a flaky endpoint that a retry would fix).

Table 10.3 sets out what "verified" meant in practice for each access-pattern family, since a single verification method does not fit a CSV download, a JSON API, a form-gated Excel export and a session-walled rating-agency page equally well.

**Table 10.3: Verification method by source shape**

| Source shape | What counted as verified | Example | Caveat this method cannot rule out |
|---|---|---|---|
| Plain CSV or JSON, no auth | HTTP 200, body parses as the expected format, a sample field matches a known real value | `archives.nseindia.com` index CSV [RE04]; openFDA `drugsfda.json` [RE09] | A single light request cannot confirm a documented rate-limit ceiling has not been quietly lowered |
| Binary download (PDF, zip) | HTTP 200, the file's own binary signature confirmed (`%PDF-` or the zip local-file header `PK`), an internal entry name read directly | FDA Orange Book zip [RE12]; CARE Ratings rationale PDF [RE22] | Confirms the file opens, not that every internal table or field the engine needs is present |
| HTML page behind no visible login | HTTP 200, a recognisable content section renders in the fetched body | CARE Ratings homepage [RE21]; Screener.in [RE18] | A session-based block can let a first page through and only bite on a second request, which single-shot verification cannot surface |
| Session-walled or form-gated page | The specific block mechanism observed and named (a 403, a 404, a login redirect, a stateful postback control) rather than assumed from the host's reputation | ICRA [RE20]; RBI reference-rate export [RE23] | Confirms today's block only; a host can change its anti-bot posture without notice |
| Rate-limited API | HTTP 429 observed on at least two attempts spaced apart, with no successful response obtained in this pass | GDELT [RE16] | Cannot establish the actual requests-per-minute ceiling, only that the ceiling is below what two spaced attempts needed |

This method is deliberately conservative: it records what happened to a real request, not what a specification promises. The one real engineering consequence this produced, documented fully in section 11.6 below, is that the engine's own `sources/nse.py` client originally retried only on HTTP 401 or 403 and had no path at all for the timeout behaviour that the live NSE hosts actually exhibit [RE01] to [RE03], a gap that would have made every live NSE call fail outright on its first attempt had this verification pass not caught it before any pipeline wiring depended on it.

### 10.3 Access risks: cookies and sessions

The single most consequential access risk in the whole catalogue is NSE's own session behaviour. All three NSE-family hosts tested with a plain HTTP client, the public-facing equity quote page [RE01], its internal JSON API [RE02] [RE03], and the corporate-filing PDF host [RE05] [RE06], returned a 60,000 millisecond timeout rather than any HTTP error status at all. This matters specifically because PLAN.md's own source-client design (section 5.5.1) anticipated only a 401 or 403 response as the trigger for a cookie refresh and retry, on the reasonable assumption that an anti-bot layer announces itself with an error code. The live behaviour is different: the block manifests as a connection that simply never resolves, which a 401-or-403-only retry contract would never catch. This gap was found and fixed directly, confirmed by a dedicated respx-mocked regression test (`test_nse_api_refreshes_cookies_on_timeout_and_retries`) asserting that a simulated `ReadTimeout` on the first call now triggers the same cookie-refresh-and-retry path a 401 or 403 already triggered (build-log.md, "PHASE R1 COMPLETE" entry). The one working NSE-family path found in this lane, `archives.nseindia.com` for index constituent CSVs [RE04], behaves entirely differently from the look-alike `nsearchives.nseindia.com` host even for an equivalent CSV-shaped request [RE06], which the lane could not fully explain (a subdomain-scoped or path-scoped WAF rule is the leading hypothesis) and flagged as an open question for a dedicated follow-up spike rather than guessing at a fix.

BSE presents a related but distinct cookie and header risk: its StockReachGraph API returned a flat HTTP 403 with no response body at all [RE08], which PLAN.md's own source-client plan (section 5.5.2) anticipates by specifying a browser-like `Referer` header pointed at `www.bseindia.com`; this lane's plain fetch did not set that header, so the 403 observed here does not by itself prove the header-based mitigation will fail, only that an unmitigated request does fail, which is the correct scope for this lane to establish.

Table 10.4 sets the three cookie-and-session risks named above against the specific mitigation PLAN.md's own design commits to, and whether that mitigation has already been confirmed by a test as of this writing.

**Table 10.4: Cookie and session risk, by host**

| Host | Observed failure mode | Planned mitigation | Confirmed by a test as of this writing |
|---|---|---|---|
| `www.nseindia.com` (HTML and JSON) | Connection timeout, no error status at all | Cookie-warm bootstrap (visit the homepage and a quote page first), then retry once on 401, 403, or now also on a timeout | Yes: `test_nse_api_refreshes_cookies_on_timeout_and_retries` |
| `nsearchives.nseindia.com` | Connection timeout, identical to the host above, even for a CSV-shaped request that its look-alike subdomain serves cleanly | Same cookie-warm and retry contract as `nseindia.com`, pending confirmation this subdomain responds to it the same way | Not yet; flagged for a dedicated follow-up spike |
| `api.bseindia.com` | HTTP 403 Forbidden, immediate, no retry opportunity implied | A browser-like `Referer` header pointed at `www.bseindia.com` | Not yet; this lane's plain fetch did not set the header, so the mitigation itself remains untested |

### 10.4 Access risks: rate limits

Three catalogue rows carry an explicitly rate-limit-shaped risk, each needing a different mitigation. GDELT's DOC 2.0 API returned HTTP 429 on both of two attempts made several minutes apart [RE16], which PLAN.md's shared-HTTP design (section 5.4) already budgets for with a one-request-per-second polite limiter specifically for the `gdelt` host family, well below what a single light-use lane would need, but the exact ceiling GDELT actually enforces remains unconfirmed from direct observation; the engine's retry-with-backoff contract (tenacity, three attempts, exponential 0.5 to 4 seconds, on 429 or 5xx or timeout) is the correct general-purpose mitigation here, since no amount of advance research substitutes for simply backing off when a 429 is seen live. Screener.in's own per-request behaviour was not tested to a limit in this lane (a single company page request succeeded cleanly [RE18]), but PLAN.md's own design specifies a conservative one request per two seconds for this host given its stated use as a fast cross-check rather than a primary source, which this lane's single successful request is consistent with without confirming the exact threshold. SEC EDGAR's own rate-limit posture was not tested to a limit either; both of its access paths succeeded on a single light request [RE13] [RE15], but SEC's publicly stated policy (reflected in the engine's planned `sec_user_agent` setting) asks callers to rate-limit themselves and identify themselves by a descriptive User-Agent string, which is as much a compliance obligation as a technical rate limit, covered next.

Table 10.5 sets the per-host polite rate limiters PLAN.md's own shared-HTTP design (section 5.4) specifies against what this lane actually observed, so the limiter values can be read as a direct response to observed behaviour rather than an arbitrary round number.

**Table 10.5: Rate-limited or rate-sensitive sources, and the engine's planned per-host limiter**

| Host family | Planned polite limiter | What this lane observed | Confirmed against a live ceiling |
|---|---|---|---|
| GDELT (`api.gdeltproject.org`) | 1 request per second | HTTP 429 on both of two attempts, minutes apart | No; the actual ceiling remains below what two spaced attempts needed |
| Screener.in | 1 request per 2 seconds | A single request succeeded cleanly | No; only one request was made in this lane |
| SEC (`sec.gov`, `data.sec.gov`) | 8 requests per second, plus a mandatory descriptive User-Agent | Both tested access paths succeeded on a single light request | No; SEC's own rate ceiling was not approached |
| openFDA (`api.fda.gov`) | 4 requests per second (within the 240-per-minute keyless allowance openFDA documents) | A single unfiltered request succeeded; a filtered `sponsor_name` query 404'd on syntax, not on rate | No; the 404 observed is a query-syntax issue, not a rate-limit one |

### 10.5 Access risks: terms of service and compliance obligations

Three of the catalogue's rows carry an explicit terms-of-service obligation beyond simple reachability. SEC EDGAR's submissions JSON endpoint succeeded on this lane's test request [RE13], but the lane could not confirm from inside a `WebFetch` call whether the request actually carried a compliant descriptive User-Agent with a contact email, because `WebFetch` does not expose the outbound headers it sends; the engine's own HTTP client must set this header explicitly rather than relying on what a single successful test request happened to get away with, which is exactly why PLAN.md ties the SEC source client's activation to a populated `SEC_USER_AGENT` setting rather than letting it run with a blank or generic string (PLAN.md section 5.1; the setting remained unpopulated as of this writing, logged as open item O3). openFDA's `drugsfda.json` endpoint returned an explicit disclaimer field in its own response body reading "Do not rely on openFDA to make decisions regarding medical care" [RE10], a compliance signal the engine must respect by treating openFDA data as directional regulatory-timeline evidence, never as the sole basis for a medical or clinical claim, which is consistent with this engine's own scope (financial discovery, not medical advice) but worth stating explicitly given the source's own posture. The FDA's Orange Book zip file is served from a numbered media-asset URL (`fda.gov/media/76860/download`) that the FDA periodically reassigns when it refreshes the underlying file [RE12], which is not a terms-of-service risk in the legal sense but is an operational one: a hard-coded media ID can silently start serving a stale file, or none at all, without any error at all, so the engine's own Orange Book client needs either a periodic link-freshness check or a documented manual-refresh procedure rather than treating the URL as permanent.

Table 10.6 collects these three compliance-shaped obligations together with the one the next paragraph adds (rating-agency access breadth), since none of them is a reachability problem in the sense sections 10.3 and 10.4 cover, and each needs a distinct kind of engine-side discipline rather than a retry or a backoff.

**Table 10.6: Terms-of-service and compliance obligations, by source**

| Source | Obligation | Engine-side discipline required | Status as of this writing |
|---|---|---|---|
| SEC EDGAR (both access paths) | A descriptive User-Agent naming a contact (SEC policy) | `SEC_USER_AGENT` must be populated before the SEC client activates at all | Unpopulated; the SEC client stays skipped, tagged WIRED, until a contact string is supplied (open item O3) |
| openFDA `drugsfda.json` | The endpoint's own disclaimer against using it for medical decisions | Treat openFDA output as regulatory-timeline evidence only, never as a clinical claim | Consistent with this engine's scope by design, stated explicitly here rather than left implicit |
| FDA Orange Book zip | No stated terms issue, but the download URL embeds a media ID the FDA periodically reassigns | A periodic link-freshness check or a documented manual-refresh procedure | Not yet built; the current URL is confirmed working as of 14 October 2026 only |
| Credit-rating agencies (CRISIL, ICRA, CARE) | No single stated terms issue, but two of three list-browsing pages are not reachable at all | Reach individual rationale documents by targeted search per company and per rating action, not by an automated list crawl | Confirmed working for one agency (CARE) by this method; not yet generalised to all three |

A final compliance-adjacent risk sits outside the catalogue's own rows but follows directly from them: three rating-agency access paths (CRISIL's rating-list page [RE19], ICRA's rationale-list page [RE20]) failed outright with a 404 or a session-timeout page, while the one path that did work, a specific CARE Ratings rationale PDF reached by a targeted search rather than by browsing the agency's own list page [RE22], was reached in a way that does not generalise to an automated per-company lookup without the same kind of targeted search for every company and every rating action. This is a genuine access-breadth limitation on the engine's credit-rating evidence, not a workaround to be papered over: the research document and the engine's own `grading/admiralty.py` classification both record rating-agency sources at reliability grade B rather than A precisely because of this kind of access friction, not only because of the publisher's own editorial distance from the company (`raw/R-F-methods.md`, Admiralty grade B definition [RF09]).

### 10.6 What this section's numbers can and cannot support

The 20-row catalogue is a lower bound on the engine's real source surface, not an upper one: it reflects only the sources a lane agent had time to test directly before a rate limit interrupted the run, and several source families the engine's design specifies (Angel One, Upstox, the NSE MCP servers, India's CDSCO and NPPA notice pages) were not independently tested by this lane at all, either because they need live credentials this lane did not hold or because they were explicitly assigned to the P0 engine-spike process (PLAN.md section 5.3) rather than to R-E. <!-- GAP: no directly tested catalogue row yet exists for CDSCO or NPPA notice pages, or for the NSE MCP servers; these remain to be added once the corresponding P0 spikes (S01, S14) or a dedicated lane run against them. --> The 40% access-friction rate observed here (8 of 20 tested paths blocked, gated or rate-limited on a first attempt) should be read as a floor on how much mitigation engineering a public-data-only Track D build genuinely requires, not as a ceiling, since the untested source families named above plausibly carry friction of their own that this catalogue simply has not measured yet.

### What this section establishes, and what it does not

- This section establishes the actual, directly tested state of the engine's data-source catalogue as of this writing: 20 rows, not the plan's 30-row target, each verified by a real HTTP request rather than by a specification, with 40% of tested paths showing some form of access friction (timeout, error status, or login wall) on a plain client.
- It establishes the specific mechanism (timeout rather than an error status) by which NSE's own anti-bot posture defeated the engine's original retry contract, and confirms that this was found and fixed with a regression test before any live pipeline wiring depended on it.
- It establishes three distinct categories of access risk, cookies and sessions, rate limits, and terms-of-service or compliance obligations, with a named example and mitigation path for each.
- It does not establish a complete inventory of every source family the engine's design names: Angel One, Upstox, the NSE MCP servers, CDSCO and NPPA are not yet represented by a directly tested catalogue row, and that gap is named rather than silently filled.
- It does not claim any catalogue row's access outcome is permanent; every row records what a specific request did on a specific date, consistent with how point-in-time evidence is treated throughout this document (section 18 covers the engine's own point-in-time discipline for company facts; this section applies the same discipline to the sources themselves).

## 11. The architecture: six stages named after the brief's own verbs, a deterministic core and an LLM at the edges

**Answer.** Next Signal's engine is organised as six pipeline stages named directly after the brief's own verbs, Discover, Connect, Calculate, Reason, Challenge and Prove, and as of this writing all six exist as real, tested Python code: 195 engine tests pass, each stage carries an injectable seam at exactly the point where a not-yet-built live dependency (a source client, the LLM router, Calculate's per-metric series exposed in queryable form) would otherwise be required, and the one piece that does not yet exist is `pipeline/run.py`, the orchestrator that would wire all six stages together against real, live inputs end to end.

### 11.1 The stage diagram

Table 11.1 sets out the six stages in the order they run, what each one consumes, what it produces, and where the deterministic arithmetic core hands off to a language model and hands back again. The brief's own six verbs supply the stage names directly (no other name is coined for any stage, per the standing rule against inventing labels beyond "Next Signal" and these six words).

**Table 11.1: The six-stage pipeline**

| # | Stage | Brief's verb, verbatim framing | Consumes | Produces | Deterministic or LLM-touched |
|---|---|---|---|---|---|
| 1 | Resolve | (a preparatory step the brief does not separately name, folded under Discover) | a free-text company name, NSE symbol, or ISIN | a resolved identity (symbol, name, ISIN, NSE industry fields, NIFTY 50 flag) | Deterministic: offline fuzzy match against the universe CSVs, falling back to a live NSE lookup |
| 2 | Discover | "decide what needs to be investigated and locate relevant public sources" | the resolved identity, its sub-industry playbook | a scored, ranked shortlist of angles and a source plan | Deterministic scoring (data availability, anomaly signal, novelty prior), no LLM call |
| 3 | Connect | "combine evidence across filings, statements, presentations, exchange announcements, competitors, industry data, credible news" | the source plan, downloaded documents | verified Facts, each anchored to a verbatim quote, classified by origin and independence | Deterministic classification and anchor verification; an LLM reads candidate pages to propose the quote-and-value pair, which the deterministic anchor check then either accepts or discards |
| 4 | Calculate | "derive relationships or changes rather than quoting numbers" | verified Facts grouped by entity, period and metric | MetricValues, peer z-scores, change-points, a ranked anomaly list | Fully deterministic: every metric is a registered formula over cited inputs, no LLM involvement at all |
| 5 | Reason | "form a hypothesis about what the evidence means and why it matters" | the top anomalies, the event timeline, peer values, management narrative claims | proposed Hypotheses with predictions and disconfirmers, plus five deterministic rival hypotheses per main hypothesis | An LLM proposes the main hypothesis from deterministic inputs only; a deterministic function generates the standard rival set independently of the LLM |
| 6 | Challenge | "actively search for contradictory evidence and alternative explanations" | proposed Hypotheses, their rivals, available test inputs | survived, downgraded or killed Hypotheses, an ACH matrix | Deterministic test battery (six of nine tests fully code-based); an LLM only fills descriptive ACH cell text, never the kill decision itself |
| 7 | Prove | "auditable evidence trail for every major conclusion" | the surviving main hypothesis (if any) | the eight-element Discovery output, or an honest "no discovery survived" result | Deterministic discovery selection, falsification-condition grammar and strength scoring; an LLM drafts the discovery's prose, which a deterministic guard validates before it is ever shown |

The pattern visible across every row is the one the recommendation itself argues for (section 2 above): the language model only ever touches a step after the deterministic core has already decided what is true, what is anomalous, and what would make a claim fail. Calculate has no LLM involvement whatsoever. Connect's LLM call proposes a quote and a value, but a deterministic substring check (`docs/anchors.py`) either confirms that quote exists verbatim in the source document or discards the fact outright, never relaxing this check to keep an otherwise-plausible number.

### 11.2 Component status, the six pipeline stages

This section needs a finer-grained status tag than the three-level LIVE/WIRED/PLANNED legend as first defined in section 0 (which was written before any component existed and defines LIVE strictly as "exercised against a real input with a verified output ... accompanied by a specific run, a timestamp, or a measured number"). As of this writing, no component has yet been exercised against a *live, external* run in that strict sense, because the orchestrator that would make such a run possible does not exist yet. What does exist, and what this section reports honestly rather than rounding up or down, is a middle state the original three-level legend did not anticipate: code that is real, committed, and exercised by a passing automated test against real-shaped data (a byte-accurate mocked HTTP contract, a schema-conformant fixture Report, an actual rendered PDF file), but not yet run against a live network call or a live LLM call end to end. Table 11.2 reports each of the six pipeline stages against this operational distinction, naming the specific test evidence for each.

**Table 11.2: Pipeline stage status**

| Stage | Code status | Test evidence | What remains stubbed |
|---|---|---|---|
| Resolve | Built, tested | Offline fuzzy-match resolution test suite; a real bug (unnormalised name matching scoring a correct pair at 19.6 of 100) found and fixed here | Live NSE fallback lookup when offline resolution fails, pending a live-network run |
| Discover | Built, tested | `tests/test_pipeline_discover.py`, 8 tests: angle-scoring helpers in isolation, full `run()` on a pharma company and an unknown sub-industry | `quickpass_metrics()` is an honest stub pending real screener and results-comparison data from Connect |
| Connect | Built, tested (deterministic core); fetch stubbed | `tests/test_pipeline_connect.py`, 8 tests: origin and reliability classification, point-in-time filtering, anchor verification on a matching and a non-matching quote | `fetch_documents()` returns an empty list until the live source clients (`sources/bse.py`, `sources/screener.py`, the regulator clients) exist |
| Calculate | Built, tested, fully deterministic | `tests/test_pipeline_calculate.py`, 7 tests, plus the wider `metrics/` test suite; a real bug (`ruptures.Pelt`'s default `jump=5` silently missing change-points on short series) found and fixed here | Reads `ctx.facts`, which Connect is expected to populate once its own fetch step is wired; Calculate's own logic needs nothing further |
| Reason | Built, tested (rival generation); main-hypothesis proposal stubbed | `tests/test_pipeline_reason.py`, 6 tests: rival-set generation, an empty-predictions edge case, `run()` end to end with an injected stub proposer | `propose_hypotheses_llm()` needs the shared httpx client and run event bus that the orchestrator will own |
| Challenge | Built, tested (six of nine falsification tests fully coded) | `tests/test_pipeline_challenge.py`, 9 tests: all three kill conditions, a downgrade-without-kill case, an all-pass survive case, both a no-test-data and an injected-failure end-to-end run | Tests T7 (novelty, disconfirming search), T8 (time-travel replay) and T9 need live LLM search and a real time-travel run; `run_core_tests()` takes an injectable callable pending Calculate's per-metric series being exposed in queryable form |
| Prove | Built, tested | `tests/test_pipeline_prove.py`, 12 tests: discovery selection honestly returning `None` when nothing survives, both falsification comparator directions, the deterministic text fallback, `validate_text()` catching a genuinely stray number | The LLM discovery-writer path is injectable and tested with both a clean and a dirty injected writer; the real Sarvam-backed writer awaits the orchestrator |

Every row in Table 11.2 shows the same shape: real logic, real tests, a named seam for the one thing that genuinely cannot exist until either a live network call or the orchestrator exists to make one. This is a deliberate build order, not an accident; PLAN.md's own sequencing (research before pipeline wiring, and "test before trusting" throughout the build log) was designed to let exactly this kind of component-level testing happen before any live credential, live LLM call, or live demo run is required.

### 11.3 Component status, supporting modules

Table 11.3 extends the same reporting discipline to the modules the six pipeline stages depend on but that are not pipeline stages themselves.

**Table 11.3: Supporting module status**

| Module family | Status | Evidence or gap |
|---|---|---|
| `grading/*` (admiralty, independence, strength, ach, falsify, contradictions, novelty) | Built, tested | Pure-logic modules with no network dependency; built ahead of schedule for exactly this reason; `grading/falsify.py` covers six of nine tests fully (T1, T2, T3, T4, T5, T6), with T7 to T9 needing live data |
| `metrics/*` (library, compute, changepoint, peers, eventstudy, fx) | Built, tested, 44-plus metrics registered | `metrics/library.py`'s registry is the basis for section 14's summary and for Appendix B; a real bug was caught and fixed in `changepoint.py` before any live data touched it |
| `llm/*` (guards, router) | Built, tested, including one live-model verification | `llm/guards.py`'s anti-hallucination number check was run live against the real Sarvam API (not a mock) with scripted questions, catching and fixing two real bugs (a regex lookbehind swallowing digits in structured fields, and a missing scan of several Discovery fields); 9 of 10 scripted questions grounded cleanly after the fix, with the one residual failure itself a genuinely grounded reply the guard flagged too conservatively, not a true hallucination |
| `sources/nse.py` | Built, tested against a mocked host | Cookie-refresh-and-retry contract confirmed with a respx-mocked 401 and 403 case; extended to also catch `httpx.TimeoutException` after the R-E lane's live finding (section 10.3) that the real NSE hosts time out rather than returning an error status |
| `sources/market/*` (Angel One, Upstox, NSE MCP, bhavcopy, prices fallback chain) | Code exists; not yet exercised by a passing test against live or mocked data in the material reviewed for this section | A live-credential or live-session dependency (daily-expiring Upstox tokens, Angel One's TOTP login) is the named reason this family sits a step behind `sources/nse.py`'s own test coverage |
| `sources/bse.py`, `screener.py`, `openfda.py`, `fda_web.py`, `orangebook.py`, `ratings.py`, `sec.py`, `news.py`, `websearch.py` | No code yet | These nine source clients remain to be written against the exact access patterns R-E's catalogue (section 10) already tested directly; this is the largest single remaining build item before Connect can run against live data |
| `docs/pdf.py`, `docs/xbrl.py` | No code yet | `docs/bm25.py` and `docs/anchors.py` (the page-ranking and anti-hallucination anchor-check modules Connect actually depends on) are built and tested; the page-text-extraction and XBRL-parsing modules themselves remain to be written as dedicated production modules, distinct from the one-off PyMuPDF spike script used during research (section 10.2) |
| `export/*` (csvs, xlsx, svg, md, html, pdf) | Built, tested against a schema-conformant fixture Report, including a real rendered PDF | `test_write_pdf_produces_a_real_pdf` invokes the installed Chrome binary directly and asserts the output begins with the `%PDF-` signature and exceeds 1 KB; every export path has been exercised against a fixture, not yet against a live pipeline run, since `pipeline/run.py` does not exist to produce one |
| `voice/*` (the full ported and rewritten Sarvam voice stack) | Built, tested, including one live-model verification | 14 tests cover the full turn lifecycle; a live, scripted evaluation against the real Sarvam API caught and fixed the same two `llm/guards.py` bugs named above before any judge could hear the voice analyst say something ungrounded |
| `pipeline/run.py` (the orchestrator) | No code yet | This is the one piece every stubbed seam in Table 11.2 is waiting on; PLAN.md Appendix X.6 already specifies its reference shape (owns the shared httpx client and event bus, calls the six stages in sequence under a time budget) |
| `eval/*` (harness, timetravel, ablation, summarize) | No code yet | Depends on `pipeline/run.py` existing and on live source clients being wired, since an evaluation harness has nothing to evaluate without a real end-to-end run to call |

The one place this section's reporting differs from a stricter reading of section 0's original LIVE/WIRED/PLANNED legend is `export/*`: section 0 classified every architectural claim in this document as PLANNED by default "unless it cites a raw research fact about something external to Next Signal," written at a point before any component existed. By the time of this writing, `export/*` has moved past that: it is real code, exercised by a real test that invokes a real external binary (Chrome) and asserts a real, byte-verified output. This section reports that status directly rather than holding it to the earlier, stricter bar that no component could have met at the time section 0 was written, because the operational test (real code, real test, real-shaped data) is the one PLAN.md itself asks every later build-log entry to apply, and it is more informative to a reader checking whether a specific claim can be trusted than a binary PLANNED label would be.

### 11.4 Stack ADRs, with the rejected alternative named in each case

Table 11.4 records the four architecture decisions PLAN.md section 5.0 states outright, each written here as a short ADR (decision, the alternative considered and rejected, and the concrete reason), because a judging panel that explicitly does not reward model choice or agent count (section 3 above) is, by the same token, a panel that will ask why a less fashionable architecture was chosen over a more fashionable one, and "it is simpler and more auditable" needs the specific mechanism behind it stated plainly.

**Table 11.4: Stack ADRs**

| Decision | Rejected alternative | Reason |
|---|---|---|
| BM25 lexical retrieval over PDF pages, with quote-anchored LLM extraction | A vector database (dense embeddings, semantic similarity search) | A vector index trades an exact, auditable match (a verbatim quote either does or does not appear on a page) for an approximate similarity score that cannot itself be shown to a judge as proof; BM25's own term-frequency and inverse-document-frequency arithmetic is fully inspectable (section 13.3 below), and the anchor-verification step that actually prevents hallucination (`docs/anchors.py`) needs an exact page reference to check against, which a semantic match does not reliably provide |
| A hand-written async stage orchestrator | LangGraph (or an equivalent graph-based agent-orchestration framework) | The six stages run in a fixed, brief-mandated sequence (Discover before Connect before Calculate before Reason before Challenge before Prove); a graph framework's value is routing between an open set of possible next steps, which this pipeline does not need and which would add an opaque execution layer between the run trace the UI shows a judge and the code that actually ran |
| Sarvam `sarvam-105b` as the primary research LLM, with Gemini as an automatic fallback only on 429, 5xx or timeout | A single closed frontier model as the sole, non-substitutable LLM dependency | A live, timed demo cannot depend on one vendor's uptime; the deterministic core (Calculate, and the six coded falsification tests in Challenge) does all arithmetic regardless of which LLM is actually answering on a given run, so a provider failover changes only the prose quality of a hypothesis's wording, never a number shown to the judge |
| Six cooperating pipeline stages, each with a narrow, named responsibility | A single-agent retrieval-augmented-generation loop (one agent, one broad "investigate this company" prompt, reading its own retrieved context and writing a report in one pass) | This is the specific design the "obvious answer" in section 2 of this document argues against: a single agent that reads before it computes restates what a company's own documents already emphasise and has no structural moment at which it is forced to go looking for evidence the company did not provide, or to try to kill its own first idea, before writing a conclusion |

### 11.5 Latency budget for a 10-minute live demo

PLAN.md's own engine configuration (`next_signal/config.py`, confirmed built in the build-log's P1a entry, 11 October 2026) sets two run-level budgets directly in code: a 420-second soft budget (`run_budget_s`) and a 540-second hard cap (`run_hard_cap_s`), the latter meaning Prove runs with whatever evidence and hypotheses exist at that point rather than letting a run hang indefinitely. Table 11.5 sets these two numbers against the brief's own 10-minute finals format (a 10-minute presentation and live demo, per PLAN.md section 1.1), and against an illustrative per-stage split consistent with the pipeline's own cost profile, which this section states plainly as a planned allocation rather than a measured one, since no live, end-to-end run has happened yet (the honest status this whole section has been reporting throughout).

**Table 11.5: Illustrative stage-by-stage time allocation inside the 420-second soft budget**

| Stage | Share of budget | Why this is the shape expected | Dominant cost |
|---|---|---|---|
| Resolve | Under 5 seconds | A single fuzzy match or one live NSE lookup | Negligible; mostly string comparison |
| Discover | A few seconds | Pure deterministic scoring over already-available screener-level data | Negligible; no document download yet |
| Connect | The largest single share, roughly half the soft budget | Downloading up to roughly 20 documents (eight quarterly presentations, eight results filings, four transcripts, two or three annual reports, plus regulator filings) with a polite per-host rate limiter (three requests per second for NSE, two for BSE), then running page-text extraction and BM25 ranking, then one or more LLM extraction calls per candidate page | Network I/O and per-host rate limiting, not the extraction LLM call itself |
| Calculate | A few seconds | Pure arithmetic over already-anchored Facts: no network call, no LLM call | Negligible; dominated by however many periods and peers are in scope |
| Reason | A meaningful but bounded share | One LLM call proposing up to six hypotheses, plus deterministic rival generation | The LLM call's own latency, which the P0 spike for the Sarvam endpoint (S10) was designed to measure directly but has not yet been run live against this specific prompt shape |
| Challenge | A smaller share than Reason | Six deterministic tests run in-process; the remaining three tests need a disconfirming search call, which itself depends on the news and web-search source clients named as not-yet-built in Table 11.3 | A disconfirming-search LLM or search-API call, when that path exists |
| Prove | A few seconds | Deterministic discovery selection and falsification-condition construction, one LLM call to draft the discovery's prose, one deterministic guard pass over that prose | The discovery-writing LLM call |

The 120-second gap between the 420-second soft budget and the 540-second hard cap is the engine's own built-in margin for exactly the kind of live-demo risk a 10-minute finals slot cannot absorb gracefully: a slow host, a retried rate limit, or a slower-than-usual LLM response. <!-- GAP: no measured per-stage latency numbers exist yet for any stage; Table 11.5's allocation is a planned shape consistent with the pipeline's own cost structure (document count, LLM call count), not a timed result, and should be replaced with real numbers from the P0 spikes and, later, the eval harness's own runtime column once both exist. --> Within a 10-minute finals slot, a 420-second (seven-minute) engine run leaves roughly three minutes for the presenter to narrate what the audience is watching, which is the demo-runbook constraint PLAN.md's own calendar (section 3.1) and demo-rehearsal gate (section 9, not reproduced here) are built around.

### 11.6 Test suite growth and the bugs testing caught before any live call needed to

Table 11.6 traces the engine's own test count across the build, not as a vanity metric but because the growth pattern is itself evidence for the "test before trusting" doctrine this architecture section argues for: every jump in the table corresponds to a named pipeline stage or supporting module becoming real, and several jumps correspond directly to a real bug being found and fixed before any live network or LLM call was made against it.

**Table 11.6: Test suite growth across the build**

| Milestone | Test count | What was added |
|---|---|---|
| After `config.py`, `schemas.py`, `http.py`, `store.py`, `events.py` | 25 | The data contract and shared infrastructure every later module depends on |
| After `universe.py` | 60 | The universe loader; a real bug found here (unnormalised fuzzy name matching) |
| After `pipeline/resolve.py`, `sources/nse.py` | 78 | The first live-shaped source client, tested against a mocked NSE host |
| After the remaining deterministic falsification tests (T2, T3, T4), `docs/bm25.py`, `metrics/fx.py` | 123 | Completed the deterministic half of the nine-test Challenge battery |
| After the full export chain | 99, then 108, then 123 across sequential additions | `export/csvs.py` through `export/pdf.py`, including a real headless-Chrome PDF render |
| After the LLM prompt library and schemas | 131 | Seven prompt files and their pydantic output schemas |
| After the voice architecture port | 140, then 145 | Seven ported low-level voice modules plus the rewritten prompt, tools, speech and session layers |
| After `pipeline/discover.py` | 153 | The angle-scoring stage |
| After `pipeline/calculate.py` | 160 | The metric-computation stage; a real bug found here (`ruptures.Pelt`'s default `jump=5`) |
| After `pipeline/connect.py`, `pipeline/reason.py` | 174 | The evidence-anchoring and hypothesis-proposal stages |
| After `pipeline/challenge.py` | 183 | The falsification-and-ACH stage |
| After `pipeline/prove.py` | 195 | The discovery-selection and output-validation stage; all six pipeline stages now exist |

Table 11.7 names the specific bugs this process caught, each one chosen for this table because it would have degraded a brief-mandated requirement specifically, not a generic code-quality issue.

**Table 11.7: Real bugs caught by testing or by a live verification run, before a live demo depended on them**

| Bug | Where it would have hit | How it was caught | Fix |
|---|---|---|---|
| `ruptures.Pelt` defaults to `jump=5`, silently skipping change-point evaluation at every index not a multiple of five | The Timeline's "when the change emerged" marker (brief requirement R10), on every quarterly or annual series of 6 to 20 points, the typical length for this data | A direct test with a clean, known step at index 4 in an 8-point series, which the default call missed entirely | Pass `jump=1` explicitly, with a comment recording why |
| Unnormalised `rapidfuzz.fuzz.WRatio` scored "Dr Reddys Laboratories" against the real NSE name "DR. REDDY'S LABORATORIES LTD." at 19.6 of 100, far below the 85 cutoff | The brief's own free-text "Company name or NSE symbol" entry requirement, for almost any natural-language query | Direct, deliberate testing of the exact pair before trusting the resolver in production | Normalise (strip punctuation, strip legal-entity suffixes) and switch to `fuzz.token_sort_ratio`; the same pair then scored 97.8 of 100 |
| `sources/nse.py`'s cookie-refresh-and-retry contract triggered only on HTTP 401 or 403 | Every live NSE call, since the real hosts return a timeout rather than an error status (section 10.3 above) | The R-E research lane's own direct, live access test, feeding back into engine code rather than staying confined to the research document | Catch `httpx.TimeoutException` and run the same refresh-then-retry logic already in place for 401 and 403 |
| `llm/guards.py`'s stray-number check never scanned a `NumberBlock`'s period field or a `Falsification`'s `next_check` date, and a second regex meant to catch ISO dates matched the literal string in a way that silently dropped digits adjacent to a letter | The voice analyst and the Prove-stage writer's own anti-hallucination guard, which exists specifically to stop either one from stating a number not actually grounded in the report | A live, scripted evaluation against the real Sarvam API, not a mock, which produced three false-positive "stray number" flags on model output that was in fact correctly paraphrasing real grounded data | Added a second, deliberately looser digit-only regex used only when building the allowed-number set from Next Signal's own structured fields, and derived date components directly from the `date` object rather than re-parsing a formatted string |

### What this section establishes, and what it does not

- This section establishes that all six pipeline stages named after the brief's own verbs exist as real, tested code, with 195 passing engine tests as of this writing, and that every stubbed dependency is a named, injectable seam rather than an unacknowledged gap.
- It establishes the one piece that remains unbuilt and blocks a genuine live, end-to-end run: `pipeline/run.py`, the orchestrator, and names every downstream consequence of that gap honestly (no measured latency, no live export against a real run, no eval harness yet).
- It establishes the four stack ADRs the plan commits to, each against a specific, named rejected alternative and a reason tied to this brief's own requirements (auditability, a fixed six-step sequence, vendor-failover resilience, structural kill capability), not to a general preference for simpler technology.
- It does not claim a measured latency figure for any stage; the 10-minute demo budget table is explicitly an illustrative planned allocation, flagged as such, pending real numbers from the P0 spikes and the eval harness.
- It does not claim the LIVE/WIRED/PLANNED legend as section 0 first defined it was wrong; it names the specific point (the level of test evidence available before any live run exists) at which a stricter binary legend stops being the most informative way to report this architecture's actual state, and reports accordingly rather than silently reclassifying.

## 12. Discover: the agent chooses angles by scoring data availability, anomaly size and novelty, not by company name

**Answer.** Discover routes any Track D company into one of four sub-industry playbooks (pharma, hospital, diagnostics, or a generic fallback) purely from the NSE basic-industry text string, then scores every angle in that playbook on a fixed formula, `angle_score = 0.35 times data availability + 0.40 times anomaly signal + 0.25 times novelty prior`, keeping the top four angles while always including the pharma playbook's P2 (regulatory and compliance developments) or the hospital playbook's H1 (announced versus operational beds) whenever that angle's own data availability clears a 0.3 floor, because those two angles are the brief's own named Track D questions, not a company-specific preference.

### 12.1 Sub-industry routing, generic by construction

Discover never asks "is this Sun Pharma" or "is this Apollo"; it asks a single, generic question of the NSE `industryInfo.basicIndustry` text field, matched against four pattern groups (PLAN.md section 5.7, step 2): a string containing "Pharmaceutical," "Biotech" or "Drug" routes to the pharma playbook; a string containing "Hospital" or "Healthcare Service" routes to the hospital playbook; a string containing "Diagnostic" or "Laborator" (explicitly excluding the literal substring "Laboratories" inside a company's own legal name, since several Track D names carry that word as part of their registered name rather than their industry classification) routes to diagnostics; anything else routes to the generic fallback, which is the same four-angle playbook the brief's own Track C questions generalise into (price versus volume, working capital versus revenue, segment mix shift, and so on), built specifically so a judge naming an unexpected tie-break company in a live demo still gets a working, if less finely targeted, playbook rather than a failure.

This routing was itself the subject of a real design clarification caught during testing (section 11.6, Table 11.6, the `universe.py` entry): the NSE index-constituent CSV's own "Industry" column is coarse by NSE's own convention (every one of the five NIFTY 50 Track D names shows simply "Healthcare" at that level), which is correct for filtering the NIFTY 50 list down to the Track D universe but useless for playbook routing on its own. The finer `basicIndustry` field Discover actually routes on only becomes available from a live, per-company NSE `quote-equity` call, which means playbook assignment is necessarily a run-time step, not something the universe loader can pre-compute and cache, a distinction the engine's own test suite now encodes as a separate enrichment step rather than conflating the two granularities.

Table 12.0 sets out the four routing rules in full, together with the field each one actually reads, since "generic by construction" is a claim about the specific field tested, not about the sub-industry's name.

**Table 12.0: Sub-industry routing rules**

| Pattern matched against `industryInfo.basicIndustry` | Playbook | Source of the field | Why this is not company-specific |
|---|---|---|---|
| Contains "Pharmaceutical," "Biotech" or "Drug" | pharma | A live, per-company NSE `quote-equity` call | The match is on an NSE-assigned classification string, never on the company's own name |
| Contains "Hospital" or "Healthcare Service" | hospital | Same as above | Same as above |
| Contains "Diagnostic" or "Laborator," excluding the literal substring "Laboratories" inside a company's own legal name | diagnostics | Same as above, with an explicit exclusion rule to avoid misrouting a pharma company whose legal name happens to contain "Laboratories" | The exclusion rule itself is a generic string-matching exception, not a named-company exception |
| None of the above | generic (G1 to G6) | Same as above | Guarantees a working playbook for any listed company at all, including one outside the five NIFTY 50 Track D names |

### 12.2 The angle playbooks

Table 12.1 reproduces the pharma playbook's ten angles (P1 to P10) exactly as PLAN.md section 5.7 specifies them, since these are the single largest and most load-bearing playbook given that three of the five NIFTY 50 Track D companies, and the large majority of the nineteen tie-break names, route into it.

**Table 12.1: Pharma angles, P1 to P10**

| ID | Question the agent asks | Key metrics | External sources |
|---|---|---|---|
| P1 | Has the business model quietly shifted (specialty or innovative medicines, CDMO, India branded, consumer health), and when? | segment shares, specialty share, CDMO share, a mix change-point | presentations, annual reports, the FDA Orange Book, peers |
| P2 | Did a regulatory or compliance development hit the financials in filings before mainstream coverage? | FDA events over 24 months, remediation mentions, a US-revenue change-point, provisions | FDA warning letters, Import Alert 66-40, openFDA recalls, NSE `regulatory_usfda` filings, first-seen news date |
| P3 | How has geographic revenue exposure shifted over five years, and what drove it? | geographic shares, the five-year change in geographic share, FX-neutral US growth | presentations, annual reports, peers |
| P4 | Is a single product or exclusivity window carrying a segment, and when does it end? | US revenue volatility, product mentions, exclusivity expiries | the Orange Book, transcripts, FDA approval records |
| P5 | Are new launches masking price erosion in the base business? | trailing-twelve-month ANDA approvals, US revenue year on year, launches mentioned, gross margin | openFDA's drugsfda endpoint, transcripts |
| P6 | Do receivables or inventory tell a different story from revenue? | receivable days, inventory days, receivable growth minus revenue growth, cash flow from operations to EBITDA | annual reports, Screener, XBRL |
| P7 | Is research and development intensity or capitalisation changing the earnings quality? | R&D as a percentage of revenue, intangible additions as a percentage of revenue, impairments | annual reports |
| P8 | Is profit quality changing (other income, forex, one-offs, tax)? | other income as a share of profit before tax, exceptional items as a share of profit before tax, the effective tax rate | results, XBRL |
| P9 | Is there a hidden dependence on a partner, supplier, licensor or customer? | related-party flows, a partner site's own FDA status, the share of revenue from in-licensed products | the annual report's related-party-transaction notes, FDA records of the partner's own site, transcripts |
| P10 | Do different disclosure channels tell different stories (SEC versus NSE, press versus filing, guidance versus actual)? | the guidance gap, cross-channel differences | SEC Form 6-K or 20-F, press releases, transcripts |

Table 12.2 reproduces the remaining three playbooks, each at the resolution PLAN.md itself specifies (one line per angle, since these three playbooks are smaller and were not broken out to a full sub-table in the plan).

**Table 12.2: Hospital, diagnostics and generic angle playbooks**

| Playbook | Angle | Question |
|---|---|---|
| Hospital | H1 | Beds announced versus beds operational |
| Hospital | H2 | ARPOB growth, decomposed into price, payor mix, case mix and international contribution |
| Hospital | H3 | Occupancy dilution from newly added capacity, mature units versus new units |
| Hospital | H4 | Drag or subsidy from a non-hospital segment (pharmacy, digital health, insurance) |
| Hospital | H5 | Regulatory price exposure (CGHS rates, PMJAY, NPPA caps on implants) |
| Hospital | H6 | Growth mix, organic versus acquired |
| Diagnostics | D1 | Volume versus realisation per test |
| Diagnostics | D2 | Patient growth versus test growth, and the business-to-business versus business-to-consumer mix |
| Diagnostics | D3 | Network expansion versus revenue per centre |
| Generic | G1 | Price versus volume |
| Generic | G2 | Working capital versus revenue |
| Generic | G3 | Segment mix shift |
| Generic | G4 | Profit quality |
| Generic | G5 | Guidance versus actual |
| Generic | G6 | Cross-channel disclosure divergence |

The generic playbook (G1 to G6) is explicitly a generalisation of the brief's own Track C angles, not a weaker, catch-all version invented for this engine; building it this way means the same scoring formula and the same source-plan logic apply whether Discover is routing a pharma major or an unexpected tie-break company with no sub-industry match at all, which is the concrete mechanism behind this document's repeated claim that the system carries no company-specific tuning (brief requirement R19, R20).

### 12.3 The angle-scoring formula

Discover does not simply pick the angles a human analyst might find most interesting; it computes a score for every angle in the chosen playbook and keeps only the top four, using the formula PLAN.md section 5.7 specifies: `angle_score = 0.35 times data_availability + 0.40 times anomaly_signal + 0.25 times novelty_prior`. Table 12.3 defines each of the three components and states why the weights are ordered the way they are.

**Table 12.3: Angle-scoring formula components**

| Component | Definition | Range | Why this weight |
|---|---|---|---|
| `data_availability` | The share of the angle's own registered metrics that have at least six periods of data available | 0 to 1 | Weighted 0.35: an angle with no usable data cannot produce a defensible discovery regardless of how interesting its question is, so this term acts as a floor before the other two terms matter at all |
| `anomaly_signal` | The maximum, across the angle's metrics, of `min(1, max(absolute peer z-score divided by 3, change-point effect size, absolute trend t-statistic divided by 4))` | 0 to 1 | Weighted 0.40, the single largest weight: this is the term that operationalises "compute before you read" (section 2 of this document); an angle only scores highly here if the deterministic arithmetic has already found something unusual, not because the question sounds important |
| `novelty_prior` | `1 minus min(1, mainstream_hits_90d divided by 20)` for the angle's own keyword set, counted from a 90-day news search | 0 to 1 | Weighted 0.25: this term penalises an angle whose underlying story has already been widely reported, which is the mechanism behind this document's "novelty" judging criterion (section 3 above), without letting novelty alone override an angle with weak underlying data |

A worked, illustrative example shows the arithmetic rather than asserting it. Take a pharma company's P2 angle (regulatory and compliance developments hitting the financials before mainstream coverage) with, hypothetically, `data_availability = 0.85` (most of P2's metrics have the full eight quarters of data), `anomaly_signal = 0.90` (a strong change-point was detected on US revenue coinciding with a known regulatory event), and `novelty_prior = 0.70` (the underlying regulator record itself is not yet widely covered in mainstream press, only in specialist trade press): `angle_score = 0.35 times 0.85 + 0.40 times 0.90 + 0.25 times 0.70 = 0.2975 + 0.36 + 0.175 = 0.8325`. <!-- GAP: this worked example uses illustrative component values chosen to be consistent with the real, verified Sun Pharma CRISIL finding described in section 12.4 below (a genuine OAI classification coinciding with a rating-agency note), but the specific data_availability, anomaly_signal and novelty_prior numbers themselves are illustrative, not measured outputs of a live Discover run, since pipeline/run.py (section 11) does not yet exist to produce one. --> The arithmetic itself, `0.35 times 0.85 plus 0.40 times 0.90 plus 0.25 times 0.70`, equals 0.8325, shown here exactly as the formula specifies, which is the standard this document holds every other computed figure to as well.

Discover's selection rule adds one deliberate override to a pure top-four-by-score ranking: P2 for the pharma playbook and H1 for the hospital playbook are always kept, provided their own `data_availability` clears a 0.3 floor, regardless of where they would otherwise rank, because these are the brief's own named Track D questions (the case brief's worked example is itself built on a regulatory-and-timing story), not a preference this engine adds on top of the brief. This is a deliberate, disclosed design choice rather than a hidden thumb on the scale, and it is recorded here as the kind of assumption this document's own appendix D convention exists to track.

### 12.4 Source plan generation

Once Discover has its top four angles, it emits a source plan: the union, across those four angles, of the document kinds and external sources each angle's own definition names (Tables 12.1 and 12.2's rightmost columns), expanded into a concrete document list per PLAN.md section 5.7 step 6: the subject company's last eight quarterly presentations, last eight results filings (PDF or XBRL), last four transcripts, last two annual reports (three if the P3 geography angle or the P6 working-capital angle is among the chosen four, since both need the longer five-year window annual reports alone carry), every `regulatory_usfda`, `credit_rating`, `capacity` or `acquisition` filing in the trailing 36 months, and, for the subject's top three market-cap-proximate peers in the same playbook, a lighter pull (Screener plus their own last four presentations only, to bound total fetch time within the latency budget described in section 11.5).

Table 12.4 sets this out as a concrete document count and lookback window, since "a source plan" is otherwise an abstract phrase; the counts below are exactly what PLAN.md section 5.7 step 6 specifies, not an engineering estimate.

**Table 12.4: Source plan, document kinds and lookback windows**

| Document kind | Count or window | Extended condition | Scope |
|---|---|---|---|
| Quarterly presentations | Last 8 | None | Subject company |
| Results filings (PDF or XBRL) | Last 8 | None | Subject company |
| Transcripts | Last 4 | None | Subject company |
| Annual reports | Last 2 | Extended to 3 if the P3 (geography) or P6 (working capital) angle is among the chosen four, since both need a longer five-year window | Subject company |
| `regulatory_usfda`, `credit_rating`, `capacity` or `acquisition` filings | All in the trailing 36 months | None | Subject company |
| Screener data and presentations | Screener plus last 4 presentations only | A lighter pull than the subject's own, to bound total fetch time | Top 3 market-cap-proximate peers in the same playbook |

This source plan is itself the first point at which Discover's output becomes directly checkable against real company evidence gathered during research, and two real, verified examples from the research lanes show the mechanism working as intended rather than only in the abstract. Sun Pharma's P2/P9 angle combination (a regulatory or compliance development, and a hidden dependence on a facility's own compliance status) would, on a live run, pull the company's credit-rating filings alongside its regulatory filings; the research lane's own direct finding shows exactly why that combination matters here: CRISIL reaffirmed Sun Pharma's AAA/Stable rating on 4 August 2026 after assessing Sun Pharma's definitive agreement, signed 27 April 2026, to acquire Organon at an enterprise value of USD 11.75 billion, and the same rating rationale separately names three concurrently live FDA compliance issues at Sun Pharma facilities, an import alert at the company's Halol site active since December 2022, and warning letters at its Dadra and Mohali sites, plus a fourth site (Baska) classified Official Action Indicated after a June 2025 inspection that specialist trade press covered but general business press had not, as of the research lane's access date (build-log.md, 11 October 2026 entry, R-D-SUN; research/parts/part-A.md section 4). This single, real example demonstrates the source-plan mechanism concretely: a credit-rating filing (rating_agency, grade B) and a regulator record (regulator_us, grade A) each carry part of the same story, and neither one alone would support the full P2/P9 combination Discover's own angle definitions ask for.

Cipla's P9 angle (hidden dependence on a partner, supplier or licensor) shows the same mechanism from a different direction: Cipla's lanreotide manufacturing was paused after USFDA observations at its manufacturing partner Pharmathen's own facility, a fact that could only be surfaced by a source plan that explicitly looks outside Cipla's own filings at a named third-party manufacturer's regulatory status, exactly the kind of evidence a single-corpus summarising agent (the "obvious answer" rejected in section 2) has no mechanism to go looking for at all.

### What this section establishes, and what it does not

- This section establishes the generic, company-name-independent routing mechanism (an NSE basic-industry text match, not a lookup table) that sends any Track D company, including an unanticipated tie-break name, into one of four playbooks.
- It establishes the exact angle-scoring formula and its three weighted components, with the weighting rationale stated explicitly, and names the one deliberate override (always keeping P2 or H1 above a data-availability floor) as a disclosed design choice rather than a hidden one.
- It establishes, with two real, verified company examples (Sun Pharma's rating-agency and regulator evidence, Cipla's partner-site dependence), that the source-plan mechanism this section describes in the abstract corresponds to real, triangulated evidence already found in the research lanes, not only to a formula on paper.
- It does not present a measured, live angle_score for any real company, since Discover has not yet been run end to end against live data (section 11); the worked arithmetic example in section 12.3 is explicitly flagged as illustrative.
- It does not claim the generic playbook (G1 to G6) performs as well as a sub-industry-specific playbook; it is a deliberate robustness fallback for the brief's own tie-break requirement, and its relative performance against the pharma and hospital playbooks remains to be measured once the evaluation harness exists.

## 13. Connect: every number carries its passage, page and publisher, and sources are counted by origin, not by document

**Answer.** Connect turns a downloaded document into a verified Fact only when a candidate quote and value, proposed by the extraction LLM, is found to exist verbatim (after whitespace and digit-grouping normalisation) inside the source document's own extracted text, a check implemented in `docs/anchors.py` and already confirmed by a passing test suite on both a matching and a deliberately non-matching quote; evidence items are then graded by a nine-class Admiralty-style origin taxonomy and collapsed into an independence count that treats every filing the subject company itself published, however many times it said the same thing, as a single origin.

### 13.1 The provenance model

Every fact the engine ever states traces back through three linked schema objects, defined in `schemas.py` and already exercised by the schema round-trip test (`tests/test_schemas.py`): a `Document` (the source itself: its kind, title, URL, publisher, origin class, Admiralty reliability grade, and a `published_at` timestamp that, when absent, excludes the document from any point-in-time replay, section 18's own concern), an `Anchor` (a specific page number and a verbatim quote of no more than 300 characters, carrying a boolean `verified` flag), and a `Fact` (the metric ID, the period, the numeric value, its unit, the entity it belongs to, and the `Anchor` that supports it). Table 13.1 sets out these three objects and the field each one contributes to the claim-to-source chain the brief itself asks for (requirement R6, "auditable evidence trail for every major conclusion").

**Table 13.1: The provenance chain, from a claim back to a passage**

| Object | Key fields | What it answers |
|---|---|---|
| `Document` | kind, title, url, publisher, origin_class, published_at, reliability | Who published this, when, and how reliable is a source of this kind |
| `Anchor` | doc_id, page, quote (at most 300 characters), verified | Exactly where on the page, and exactly what words, support this number |
| `Fact` | fact_id, metric, period, value, unit, entity, anchor | What the number actually is, for which period, which entity, and which anchor proves it |

A `MetricValue` (the object Calculate produces, covered in section 14) carries its own `inputs` list of `fact_id`s and a human-readable `formula` string, so the chain from a displayed number all the way back to a cited passage never has an unaccounted-for step: displayed number, to formula and its input facts, to each fact's anchor, to a specific page and quote inside a specific document, to that document's publisher and origin class.

### 13.2 Quote-anchored extraction, the anti-hallucination core

The extraction step itself is the one place in the whole pipeline where an LLM is allowed to propose a number that was not already computed deterministically, which is exactly why the step immediately downstream of it is a hard, deterministic check rather than another layer of model judgement. The LLM extraction prompt (`llm/prompts/extract.md`) receives up to six candidate pages of document text plus a list of metric IDs with their definitions and units, and must return a strict JSON array of objects, each one naming a metric, a period, a value, a unit, a page number and a quote, where the quote field is required to be copied verbatim from the page and to contain the number itself. `docs/anchors.py`'s `verify()` function then normalises whitespace and strips comma-based digit grouping from both the quote and the page's own extracted text, and checks the quote exists as a substring of the (now normalised) page text; if it does not, the proposed fact is dropped entirely and logged as an `anchor_fail` event on the run's event bus, never silently kept with a weaker confidence label. This mechanism has already been exercised by a passing unit test on both outcomes, a quote that does match and is accepted, and a quote that does not match and is correctly discarded (`tests/test_pipeline_connect.py`, section 11.2, Table 11.2), which means the anti-hallucination gate itself, not merely its design on paper, has already been confirmed to behave correctly in both directions before any live LLM extraction call has been made against it.

XBRL-sourced facts (once `docs/xbrl.py` exists, currently unbuilt per section 11.3) are treated as an even stronger case than a quote-anchored PDF extraction: a fact read directly from a company's own machine-readable Ind AS XBRL tag carries an anchor whose quote field is simply the tag name and its value together with the filing's context identifier, and is marked `verified = True` by construction, since a machine-readable primary filing needs no separate substring check the way free-text PDF extraction does.

Table 13.1b sets out the extraction prompt's own required JSON object shape field by field, since "a strict JSON array" is otherwise an abstract description of what the LLM is asked to return, and the anchor check's own behaviour depends on every one of these fields being present and in the stated form.

**Table 13.1b: The extraction LLM's required output shape, one object per proposed fact**

| Field | Required form | What happens if it is missing or malformed |
|---|---|---|
| `metric` | One of the metric IDs supplied in the prompt's own registry list | The proposed fact is rejected outright; the LLM may not invent a metric ID not already registered in `metrics/library.py` |
| `period` | A period string in the engine's own format (`QnFYyy` or `FYyy`) | Rejected; an unparseable period cannot be placed on a timeline or compared across peers |
| `value` | A numeric value, matching the unit implied by the metric's own registry entry | Rejected if non-numeric; never coerced or guessed |
| `unit` | One of the engine's own unit strings (for example `INR_cr`, `USD_mn`, `pct`, `days`) | Rejected if it does not match the metric's own registered unit, since a unit mismatch is itself evidence the LLM misread the page |
| `page` | An integer page number within the document actually supplied | Used to locate the anchor check's own search text; a page number outside the supplied range is rejected |
| `quote` | A verbatim excerpt, at most 300 characters, copied directly from the page, containing the number itself | This is the field `docs/anchors.py::verify()` checks; if the quote is not found as a substring of the page's own normalised text, the entire proposed fact is dropped, regardless of whether every other field looks plausible |

The last row is the one that matters most: every other field can look entirely correct, a valid metric ID, a well-formed period, a plausible value and unit, and the fact is still dropped if the quote field alone fails the substring check. This is a deliberate asymmetry: the anchor check does not average across fields or require a majority to look right, because a single fabricated quote is enough to make the number behind it untrustworthy regardless of how reasonable the rest of the proposed fact appears.

### 13.3 BM25 retrieval over PDF pages

Before any extraction call happens at all, Connect has to decide which of a document's possibly hundreds of pages are worth sending to the LLM in the first place, since sending every page of every document would both exceed the latency budget (section 11.5) and dilute the extraction prompt's own accuracy. This is BM25's job: a lexical, term-frequency-and-inverse-document-frequency ranking function run once per document, indexed by lowercase alphanumeric tokens, queried with a metric's own synonym list (for example, the metric `revenue_north_america` is queried with "north america," "us formulations," "usa," "united states," "us generics" and "north american" together), returning the top four pages per document per metric (PLAN.md section 5.8.2).

The research lane that tested the methods literature behind this choice verified the exact formula directly from a primary source rather than from a secondary description, extracting the Stanford CS276 course slides with PyMuPDF after a plain web fetch returned only compressed PDF streams: the full Okapi BM25 ranking formula is the sum, over every query term, of the inverse-document-frequency term `log(N divided by df_i)` multiplied by a term-frequency saturation factor, `(k1 plus 1) times tf_i`, divided by `k1 times ((1 minus b) plus b times dl divided by avdl) plus tf_i`, where `dl` is the current document's length and `avdl` the average document length across the index [RF63]. Table 13.2 sets out the two tunable parameters inside that formula and the conventional values the engine's own BM25 module (`docs/bm25.py`, already built and tested per section 11.3) is expected to use.

**Table 13.2: BM25 parameters**

| Parameter | What it controls | Conventional value | Source |
|---|---|---|---|
| `k1` | How quickly a term's contribution to the score saturates as it repeats on a page; the saturation factor approaches a ceiling of `(k1 plus 1)` as term frequency grows without bound, rather than growing linearly forever | 1.2 to 2.0, with 1.2 as a common default tuned on long-form prose | [RF60] [RF61] |
| `b` | How much a page's own length is normalised against the average page length, from 0 (no length normalisation) to 1 (full normalisation) | 0.75, described as an empirically found sweet spot | [RF61] |

One real numerical property of BM25 surfaced directly while the engine's own test fixtures were being built, worth recording here because it shaped how the test suite itself had to be constructed, not because it is a production bug: BM25's inverse-document-frequency term collapses to exactly zero when a search term appears in exactly one of only two documents in the index (verified directly: `log((2 minus 1 plus 0.5) divided by (1 plus 0.5))` equals `log(1)`, which equals zero), meaning a two-page test fixture can never discriminate between pages on term frequency alone, regardless of how often the term repeats on the page that does contain it. This does not affect production behaviour, since a real annual report or presentation runs to dozens or hundreds of pages, but it is the documented reason the BM25 test fixture used during the engine's own build was deliberately widened to six realistic pages rather than two (build-log.md, 11 October 2026 entry).

### 13.4 The independence graph

A fact passing the anchor-verification check is only half of what Connect does; the other half is deciding how that fact's supporting evidence relates to every other piece of evidence already gathered, which is the mechanism behind the brief's own repeated requirement that a finding "must not rest on a single article or document" (requirement R16). `grading/independence.py` treats two evidence items as dependent, meaning they do not count as separate origins, under either of two conditions: they share the same origin class and the same named publisher, or a press item's own text contains at least two sentences matching (by `rapidfuzz`'s `token_set_ratio`, at a threshold of 90 or above) a company filing published within the three days before the press item appeared, the specific, measurable signature of a press outlet simply restating a company's own press release rather than reporting independently. `independent_origins(hyp)` then counts the number of distinct origin classes remaining among a hypothesis's supporting evidence after collapsing every dependent pair, with one further deliberate rule: `company_filing` and `company_ir` always collapse into a single origin, "the company," no matter how many different documents or how many different times the company itself said the same thing (PLAN.md section 5.8.2 step 6).

Table 13.3 reproduces the engine's own origin-class-to-reliability mapping, the table `grading/admiralty.py` is built from, which is also the table this document's own citation discipline leans on throughout (origin class determines which of this document's source-hierarchy tiers, as section 0 defines them, a given fact belongs to).

**Table 13.3: Origin class and Admiralty reliability, by host or publisher pattern**

| Host or publisher pattern | Origin class | Admiralty reliability |
|---|---|---|
| An NSE or BSE attachment of the subject company itself (results, presentation, transcript, annual report) | company_filing | A |
| A company's own investor-relations site document, not filed on an exchange | company_ir | B |
| NSE or BSE market data, bhavcopy, the NSE MCP servers, Angel One, Upstox | market_data | A |
| fda.gov, accessdata.fda.gov, api.fda.gov | regulator_us | A |
| cdsco.gov.in, nppaindia.nic.in, sebi.gov.in, pib.gov.in, mohfw | regulator_in | A |
| sec.gov | sec | A |
| crisilratings.com, icra.in, careratings.com, indiaratings.co.in | rating_agency | B |
| Pharmexcil, the Indian Pharmaceutical Alliance, IQVIA or Pharmarack as reported | industry_body | B |
| A peer company's own NSE or BSE filing | peer_filing | A |
| A named mainstream press list | press | C |
| Screener, Trendlyne, Tickertape, Moneycontrol's data pages, or another aggregator | aggregator | C, or D if a specific figure proves unverifiable |

A real, verified example from the research lanes shows the independence graph's collapsing rule doing exactly the job it is designed for, not only on paper. Dr. Reddy's Q1 FY27 net profit figure was reported differently across two secondary aggregator sources during planning, Rs 1,290 crore against Rs 443 crore; the resolution came from opening the company's own SEC Form 6-K exhibit 99.2 directly (CIK 0001135951, filed 22 July 2026), the same press release the company filed with NSE and BSE, which confirmed the primary figure as Rs 443.5 crore profit attributable to equity holders, a number the secondary Rs 1,290 crore figure matches no line item of at all (build-log.md, 11 October 2026 entry, "R-D-DRREDDY passes with a definitive conflict resolution"). The independence graph's own collapsing rule would treat the SEC 6-K and the matching NSE and BSE filings of the identical press release as a single origin, "the company," correctly, since they are the same disclosure filed through three channels rather than three independent confirmations; the genuinely independent check in this example is the aggregator's own figure disagreeing with that one company-origin number, which is precisely the kind of primary-versus-secondary contradiction the engine's own grading is built to surface rather than paper over.

Table 13.4 walks through exactly how the collapsing rule applies to this example, item by item, since the rule's own definition (section 13.4, first paragraph) is otherwise abstract.

**Table 13.4: The independence graph applied to the Dr. Reddy's profit-figure example**

| Evidence item | Origin class | Collapses with | Reason |
|---|---|---|---|
| SEC Form 6-K exhibit 99.2 (22 July 2026) | sec | The NSE and BSE filings of the same press release | Same underlying disclosure, filed through three channels |
| NSE filing of the Q1 FY27 results press release | company_filing | The SEC 6-K and the BSE filing | `company_filing` and `sec` both reduce to "the company" under the collapsing rule once the text match (`token_set_ratio` at or above 90) confirms it is the same release |
| BSE filing of the Q1 FY27 results press release | company_filing | The SEC 6-K and the NSE filing | Same as above |
| The secondary aggregator reporting Rs 1,290 crore | aggregator | Nothing; it stands alone | A different origin class, and a figure that matches no line item of the company's own filing, which is the genuinely independent (and genuinely wrong) data point in this example |

The practical consequence for `independent_origins()` in this example is exactly one confirmed origin ("the company," at Rs 443.5 crore) plus one disagreeing aggregator origin, not three agreeing company-origin confirmations plus a fourth independent one, which is the distinction the brief's own requirement R16 ("findings must not rest on a single article or document") depends on being measured correctly rather than merely asserted.

### 13.5 What Connect cannot yet verify live

Every mechanism described above, anchor verification, BM25 ranking, origin classification, independence collapsing, has already been exercised by a passing automated test, but none of it has yet been exercised against a live document fetched by the engine's own code during an actual run, because `fetch_documents()` remains an honest stub returning an empty list until the nine not-yet-built source clients named in section 11.3 (`sources/bse.py`, `sources/screener.py`, and the regulator clients) exist. This is a deliberate, disclosed limitation, not an oversight: PLAN.md's own build sequencing places research before pipeline wiring specifically so that a stage's deterministic logic, the anchor check above all, is proven correct against adversarial and edge-case inputs (a quote that should pass, a quote that should fail, a document published after the run's own `as_of` date) before it is ever asked to process a real, messy PDF extracted by a not-yet-built `docs/pdf.py` module. The one place this section's own claims should be read with that caveat most sharply in mind is the BM25 top-four-pages-per-metric selection (section 13.3): the formula and its parameters are verified from a primary source, and the module computing them is built and tested against a fixture, but no real annual report or presentation has yet been ranked by it inside a live Connect run, so the practical question of whether four pages reliably contains the page an extraction call needs, for every metric and every document type Track D's companies actually file, remains an empirical question the eval harness (not yet built, per section 11.3) is the right place to answer once a live run exists to measure it against.

### What this section establishes, and what it does not

- This section establishes the exact, already-tested mechanism (whitespace and digit-grouping normalised substring verification) by which Connect either accepts or discards a candidate fact, and confirms this has been exercised in both directions by a passing test, not only designed on paper.
- It establishes the full provenance chain, from a displayed number back to a formula, to its input facts, to each fact's anchor, to a specific page, quote, document and publisher, with no unaccounted-for step.
- It establishes the exact BM25 formula and its two tunable parameters, verified directly from a primary methods source rather than a secondary paraphrase, and names one real numerical property (zero-IDF on a two-document index) that shaped how the engine's own test fixtures had to be built.
- It establishes the independence graph's exact collapsing rules, and shows one real, resolved company example (the Dr. Reddy's profit-figure conflict) where the mechanism's own distinction between "the company said it through three channels" and "an independent aggregator disagreed" maps onto a real, verified contradiction.
- It does not establish that Connect has run end to end against a live document set; `fetch_documents()` remains a stub (section 11.2), so every mechanism described in this section has been confirmed against test fixtures and against evidence already gathered by the research lanes, not yet against a live pipeline run.

## 14. Calculate: forty-plus formulas, peer z-scores and change-point tables turn filings into ranked anomalies

**Answer.** Calculate's metric registry (`metrics/library.py`) holds at least 44 formulas across nine groups, growth, mix, profitability, working capital, cash and capital, quality, pharma regulatory, hospital, and market, and runs every registered formula over verified Facts with no LLM involvement at all, before combining a robust peer z-score, a change-point effect size and an OLS trend t-statistic into a single anomaly score, `0.4 times min(1, absolute robust peer z-score divided by 3) plus 0.35 times change-point strength plus 0.25 times min(1, absolute trend t-statistic divided by 4)`, keeping the top 12 anomalies for Reason to work from.

### 14.1 The metric library, by group

Table 14.1 reproduces the nine metric groups PLAN.md section 5.9.1 specifies, with the count of named metric IDs in each group (the full, individually formula-documented registry is Appendix B of the assembled research document, generated directly from the code's own registry rather than retyped here).

**Table 14.1: Metric library groups**

| Group | Metric count in this group | Representative metric IDs |
|---|---|---|
| Growth | 9 | `rev_yoy`, `rev_cagr_5y`, `us_rev_usd_yoy`, `us_rev_inr_yoy`, `fx_effect_us`, `india_vs_ipm_gap` |
| Mix | 6 | `geo_share`, `geo_share_change_5y`, `segment_share`, `specialty_share`, `cdmo_share`, `top_product_mentions` |
| Profitability | 8 | `gross_margin`, `ebitda_margin`, `pat_margin`, `rd_pct`, `other_income_share_pbt`, `exceptional_share_pbt`, `etr` |
| Working capital | 5 | `receivable_days`, `inventory_days`, `payable_days`, `ccc`, `rec_growth_minus_rev_growth` |
| Cash and capital | 7 | `cfo_to_ebitda`, `capex_to_sales`, `cwip_to_gross_block`, `fcf_margin`, `net_debt_to_ebitda`, `intangible_additions_pct`, `goodwill_to_equity` |
| Quality | 4 | `sloan_accruals`, `beneish_dsri`, `beneish_gmi`, `beneish_sgi` |
| Regulatory (pharma) | 8 | `fda_wl_24m`, `fda_ia_active`, `recalls_ttm`, `anda_approvals_ttm`, `anda_approvals_trend`, `exclusivities_expiring_24m`, `remediation_mentions` |
| Hospital | 11 | `arpob`, `arpob_yoy`, `occupancy`, `beds_operational`, `beds_announced`, `beds_gap`, `revenue_per_bed`, `ebitda_per_bed`, `alos`, `intl_share`, `insurance_share` |
| Market | 7 | `car_results_m1p1`, `car_event_m5p5`, `rel_return_1y`, `delivery_pct_spike`, `promoter_change_4q`, `fii_change_4q`, `pledge_pct` |

Every metric function in this registry returns a `MetricValue` carrying its own `inputs` list of fact IDs and a human-readable `formula` string, and critically, a metric with any missing input returns no value at all rather than an imputed or estimated one. This "never impute" rule is not a minor implementation detail; it is the direct mechanism behind this document's repeated insistence that a discovery's Numbers element (brief requirement R11) shows only "the calculations needed," since a metric that cannot be computed from actually-cited data simply does not appear, rather than appearing with a silently filled-in gap.

### 14.2 FX-neutral US revenue growth, worked

One metric, `fx_effect_us`, is worth working through arithmetically because it is the single clearest illustration of "derive relationships rather than quoting numbers" (brief requirement R3) among the whole registry: a pharma company's US revenue, reported in INR by an Indian-listed company but frequently also disclosed in USD in the same presentation (since North America revenue is one of the few lines Indian pharma companies routinely give in both currencies), can grow at two different year-on-year rates depending on which currency is read, purely because of the rupee's own movement against the dollar over that period, with no change in the underlying US business at all. `fx_effect_us = us_rev_inr_yoy minus us_rev_usd_yoy` isolates exactly that currency effect: if a company's US revenue grew 8.0% in INR terms year on year but only 4.5% in USD terms over the same period (an illustrative pair of growth rates, not a measured result from a live run), the arithmetic is `8.0 minus 4.5 = 3.5` percentage points of the reported INR growth rate attributable to rupee depreciation against the dollar rather than to any change in the underlying US generics business. <!-- GAP: no live-run fx_effect_us figure exists yet for any Track D company, since metrics/fx.py's RBI reference-rate source (section 10.5) needs a stateful form postback a static-URL fetch cannot replay, which means the engine's FX-neutralisation path currently falls back to a company's own disclosed USD figure where reported, per PLAN.md section 5.9.3, rather than an RBI-sourced quarterly average. --> This single metric is also the concrete mechanism behind the P3 angle's own question (section 12.1, Table 12.1): "how has geographic revenue exposure shifted over five years, and what drove it" cannot be answered honestly without first removing the currency effect from the headline growth number, which is exactly the kind of computed relationship a summarising agent reading only the headline figure would never surface.

### 14.3 Change-point detection

Where a metric's own time series shows a genuine structural shift rather than smooth, continuous drift, Calculate's job is to locate exactly when that shift happened, the mechanism behind the Timeline element's "when the change emerged" requirement (brief requirement R10). The engine uses the PELT algorithm (Pruned Exact Linear Time), via the Python `ruptures` library, specifically because of a property the methods research lane verified directly from the original paper rather than from a secondary description: PELT's own computational cost grows linearly in the number of observations under mild conditions, while competing exact change-point methods can cost quadratically or worse, and the paper reports PELT running orders of magnitude faster than those alternatives in simulation while also producing a more accurate segmentation than the heuristic Binary Segmentation algorithm it is commonly compared against [RF41] [RF42] [RF43]. As section 11.6's Table 11.7 already recorded, the engine's own use of this algorithm needed one real, direct fix before it could be trusted: `ruptures.Pelt`'s default `jump` parameter of 5 only evaluates candidate breakpoints at indices that are multiples of five, which silently misses a genuine change-point on the short, 6-to-20-point quarterly or annual series that is the typical length of this engine's own financial data; passing `jump=1` explicitly fixed this, confirmed by a test with a deliberately placed step at an index the default parameter would have missed.

A second, complementary change-point test the methods lane verified directly, though not yet wired into the engine's own code as of this writing, is the Pettitt test, a rank-based, non-parametric test for a single abrupt shift that computes a cumulative rank statistic for every candidate split point and takes the most probable change-point as the location maximising the absolute value of that statistic, with a documented approximate p-value formula for significance testing [RF45] [RF46]. <!-- GAP: the Pettitt test is named in PLAN.md's methods-literature lane (R-F) as a candidate complementary check to PELT, but no engine module implementing it exists as of this writing; this remains a planned, not a built, capability. --> Table 14.2 sets out both methods side by side, since a research document arguing for change-point rigour should name the alternative it is not currently using, not only the one it is.

**Table 14.2: Change-point detection methods**

| Method | What it detects | Computational property | Status in this engine |
|---|---|---|---|
| PELT (Killick, Fearnhead and Eckley, 2012) | Any number of change-points in a series, via an exact penalised search | Linear cost in the number of observations under mild conditions; faster and more accurate than Binary Segmentation in the authors' own simulations [RF41] [RF42] [RF43] | Built and tested (`metrics/changepoint.py`); the `jump=1` fix is in place |
| Pettitt test (Pettitt, 1979) | A single abrupt shift in central tendency, via a rank-based cumulative statistic | A closed-form approximate p-value; simpler than PELT but limited to detecting one shift per series [RF45] [RF46] | Verified in the methods literature; not yet implemented as an engine module |

### 14.4 Peer normalisation

A metric's own absolute level or growth rate rarely means much on its own; Calculate's peer z-score is what turns "revenue grew 8%" into "revenue grew 8%, which is 2.1 standard deviations above this company's own peer set for the same period," the specific arithmetic behind the anomaly-ranking formula's `anomaly_signal` term (section 12.3). For a metric `m` and period `p`, the standard z-score is `(x minus the mean of the peer group's values) divided by the peer group's standard deviation`, computed only when at least three peer values exist; Calculate also computes a second, robust version using the peer group's median and median absolute deviation rather than its mean and standard deviation, and PLAN.md's own design (section 5.9.2) specifies using the robust version for any actual decision, since a single extreme peer value (a peer undergoing its own one-off event in the same period) would otherwise distort a mean-and-standard-deviation z-score far more than it distorts a median-based one. Table 14.3 sets the two versions side by side with the specific vulnerability each one carries.

**Table 14.3: Peer z-score, standard and robust versions**

| Version | Formula | Minimum peer count | Vulnerability |
|---|---|---|---|
| Standard | `(x minus peer mean) divided by peer standard deviation` | 3 | A single extreme peer value shifts both the mean and the standard deviation, which can mask or exaggerate the subject's own deviation |
| Robust | `(x minus peer median) divided by peer median absolute deviation` | 3 | Materially more resistant to one extreme peer value, at the cost of being a less familiar statistic to report directly; this engine reports both but decides on the robust one |

A worked, illustrative example shows both versions computed over the same four-company peer set at once, since the vulnerability column in Table 14.3 is otherwise an abstract claim. Suppose a subject's receivable days reading is 46 for the period in question, and its three peers in the same playbook read 28, 30 and 31 (an illustrative set, not a measured result from a live run). The peer mean is `(28 plus 30 plus 31) divided by 3`, which equals 29.67, and the peer standard deviation (sample, with Bessel's correction) is approximately 1.53; the standard z-score is therefore `(46 minus 29.67) divided by 1.53`, approximately 10.68. The peer median is 30, and the median absolute deviation (the median of the absolute differences from the median: 2, 0 and 1) is 1; the robust z-equivalent is `(46 minus 30) divided by 1`, equal to 16. Both versions agree the subject is a severe outlier here, which is unsurprising with only three tightly clustered peer values; the distinction matters more when one peer itself has an extreme, one-off value, which this illustrative set deliberately does not include. <!-- GAP: this worked peer-comparison example uses illustrative receivable-days figures, not a measured output of a live Calculate run against real peer Facts, since pipeline/run.py (section 11) does not yet exist to produce one. -->

### 14.5 Event study, with real market data

The last metric family, market metrics (Table 14.1's final row), answers a distinct question from every other group: did the market itself react when a piece of evidence was actually disclosed, as opposed to when it later became widely known, which is the direct mechanism behind this document's temporal-reasoning claim (section 2.3 above: "the filing showed it before the headline"). The engine implements MacKinlay's own market-model event-study methodology [RF47] [RF48], verified directly from the methods literature: an estimation window of negative 250 to negative 30 trading days before the event (longer than the commonly cited 120-day convention [RF49], chosen for more stable coefficient estimates on names with thinner trading), a linear regression of the subject's own daily log returns against a market index's returns over that estimation window producing fitted alpha, beta and residual-volatility coefficients, an abnormal return on each event-window day equal to the actual return minus the model's own projected normal return [RF50], and a cumulative abnormal return, the sum of abnormal returns across the event window, tested for statistical significance by dividing by the residual volatility scaled by the square root of the window length [RF52]. The engine computes this over two event windows, a tight negative 1 to positive 1 trading-day window and a wider negative 5 to positive 5 window, against NIFTY 50 as the primary market proxy and the relevant sector index as a robustness check.

Table 14.4 shows this methodology applied to real market data gathered by the research lanes for three of the six seed events, each one chosen because the market-data lane directly verified the price or volume reaction rather than only the underlying corporate event.

**Table 14.4: Event-study inputs verified against real market data for selected seed events**

| Event | Event date basis | What the market-data lane verified | Reliability of the market-data verification |
|---|---|---|---|
| Sun Pharma, CRISIL AAA/Stable reaffirmation naming concurrent FDA compliance issues | 4 August 2026 (rating action date) | A directly verified price or delivery-percentage reaction around the rating-action date, logged in `raw/R-G-market-data.md` | One of eight directly verified price reactions this lane produced at a 45.5% VERIFIED-plus-CORRECTED rate overall, up from an initial 20.0% after a dedicated R2 verification pass (build-log.md, "PHASE R2 COMPLETE" entry) |
| Dr. Reddy's, Q1 FY27 results and the SEC 6-K profit-figure resolution | 22 July 2026 (SEC Form 6-K filing date) | The underlying corporate event itself is fully verified (section 13.4 above); the market-data lane's own price-reaction evidence for this specific date was one of the rows upgraded from an earlier SNIPPET status to VERIFIED during the R2 pass | Upgraded during R2 after six rows were corrected, including a fabricated weekly-close figure, an unsupported claim, and a mischaracterised earnings-per-share statement caught and fixed in the same pass |
| Cipla, Pharmathen partner-site Form 483 and the lanreotide manufacturing pause | Event date drawn from the FDA's own partner-site inspection record, cross-checked against Cipla's own Q1 FY27 disclosure | Verified as a corporate and regulatory event; a directly confirmed market-data row for this specific event date is one of the lane's residual items, not yet upgraded past SNIPPET as of the R2 pass | Flagged explicitly as a residual in the market-data lane's own gaps, not silently treated as confirmed |

The market-data lane's own honesty about its limitations matters as much as its confirmed rows do: of 55 total facts gathered, only 45.5% reached VERIFIED or CORRECTED status even after a dedicated second verification pass specifically targeted at this lane, with the R2 pass itself catching and fixing six genuinely wrong figures (a fabricated weekly-close price, an unsupported "redacted" claim, a mischaracterised earnings-per-share cut, an unreproducible attribution, an off-by-one date error, and a stale return figure) before any of them could have reached a discovery's own Numbers element (build-log.md, "PHASE R2 COMPLETE" entry). This is the single clearest illustration in the whole research deliverable of why Connect's anchor-verification gate (section 13.2) and this document's own two-pass verification discipline exist: a secondary source can be confidently, specifically wrong in a way that only a direct re-check against a primary source catches, and the event-study metric family depends on exactly this kind of price and date data more than almost any other metric group in the registry.

### 14.6 Anomaly ranking, the final step before Reason

Every metric that Calculate computes for a subject company and period is a candidate anomaly; the final step combines three independent signals of "this is unusual" into the single anomaly score Reason's own top-12 shortlist is built from: `anomaly.score = 0.4 times min(1, absolute robust peer z-score divided by 3) plus 0.35 times change-point strength plus 0.25 times min(1, absolute trend t-statistic divided by 4)`, alongside a separate `materiality_pct` field recording the metric's own revenue or EBITDA exposure (for instance, how large a share of total revenue the geographic segment showing the anomaly actually represents), so a statistically striking but financially immaterial metric does not automatically outrank a less extreme but more material one once a human, or the Reason stage's own LLM call, actually reads the ranked list.

### 14.7 The quality group's own cutoff conflict, stated rather than hidden

The quality metric group (Table 14.1, four metric IDs: `sloan_accruals`, `beneish_dsri`, `beneish_gmi`, `beneish_sgi`) is the one place in the whole registry where the methods literature itself disagrees on a convention this document would otherwise simply present as settled, and the research lanes' own two-pass verification process surfaced that disagreement directly rather than resolving it by picking a side. The Beneish M-Score combines eight financial-statement ratios into a single score estimating the likelihood that reported earnings have been manipulated, with the commonly reported eight-variable formula `M = negative 4.84 plus 0.920 times DSRI plus 0.528 times GMI plus 0.404 times AQI plus 0.892 times SGI plus 0.115 times DEPI minus 0.172 times SGAI plus 4.679 times TATA minus 0.327 times LVGI` [RF53] [RF54]. Table 14.5 sets out the cutoff-convention conflict exactly as the methods lane logged it after two separate research passes, since this engine's own `metrics/library.py` registry would be reporting a false precision if it stated only one of the two conventions as if no disagreement existed.

**Table 14.5: The Beneish M-Score cutoff conflict, as logged in `raw/conflicts.md` (register entry C02)**

| Convention | Cutoff value | Source | What it is said to apply to |
|---|---|---|---|
| Convention A | Above negative 1.78 flags a likely manipulator | Wikipedia's own Beneish M-score page, describing the model whose eight coefficients are reported directly above it [RF55] | The full eight-variable model |
| Convention B | A grey zone between negative 2.22 and negative 1.78, prompting extra diligence rather than a binary verdict; negative 2.22 alone is also used as a single threshold by at least one practitioner source | GuruFocus, Marcum LLP and related practitioner glossary sources [RF56] | Plausibly a simplified five-variable variant of the model, distinct from the eight-variable one Convention A describes, though this was not confirmed against Beneish's own original 1999 paper by either research pass |
| An empirical check of both | At a negative 2.22 cutoff, 67% of known manipulators and 75% of non-manipulators were correctly classified in one academic study; shifting to negative 1.98 improved overall accuracy from 71% to 75% in the same study | A University of Lodz accuracy study, as summarised in secondary search results [RF57] | Neither named convention cleanly; a third value (negative 1.98) outperformed both in this one study |

The engine's own stance, consistent with the register's ruling on C02, is to report both cutoff conventions explicitly wherever a Beneish-derived metric is shown, naming which variant of the model each one is said to apply to, and to withhold a confident single-threshold verdict until Beneish's own original 1999 paper, "The Detection of Earnings Manipulation," has been opened directly by a future research pass, since no lane has yet done so. This is the same discipline the Dr. Reddy's profit-figure resolution (section 13.4) demonstrates in a cleaner case: where a primary source settles a conflict, the engine states the settled figure; where the methods literature itself remains unsettled, the engine states the disagreement rather than manufacturing a false resolution.

### 14.8 What Calculate actually hands to Reason

Calculate's own output contract is itself worth stating in full, since every later stage (Reason, Challenge, Prove) only ever sees what this contract exposes, never a raw document or a raw page of text. Table 14.6 sets out the two object shapes Calculate produces and the specific field in each that the next stage depends on most.

**Table 14.6: Calculate's output contract**

| Object | Key fields | What Reason reads from it |
|---|---|---|
| `MetricValue` | `metric_id`, `period`, `value`, `unit`, `inputs` (a list of fact IDs), `formula` (a human-readable string) | The value itself, for building the top-12 anomaly table the hypothesis-proposal prompt receives, and the `formula` string, so the LLM's own prompt can state how a number was derived rather than just what it is |
| `Anomaly` | `anomaly_id`, `metric_id`, `description`, `peer_z`, `changepoint_period`, `trend_t`, `materiality_pct`, `score` | The ranked top-12 list by `score`, with `materiality_pct` carried alongside so Reason's own hypothesis can be scoped to a materially significant anomaly rather than a statistically striking but financially trivial one |

Neither object carries a free-text narrative field of its own; the `description` field on `Anomaly` is itself generated deterministically from the metric's own name, period and direction, not written by an LLM, which keeps Calculate's entire output surface free of any model-authored prose that Reason's own prompt could otherwise mistake for an already-validated conclusion rather than raw material still to be reasoned over.

### What this section establishes, and what it does not

- This section establishes the metric registry's actual shape, at least 44 formulas across nine groups, each one returning its own inputs and formula text rather than a bare number, and the "never impute" rule that keeps a missing input from silently becoming a filled-in gap.
- It establishes, with worked arithmetic, exactly how FX-neutralisation isolates a currency effect from a reported growth rate, and names the specific primary-source gap (the RBI reference-rate archive's form-gated export) that currently limits this metric to a company's own disclosed USD figure rather than an independently sourced FX series.
- It establishes the real bug PELT's default parameter would have caused on this engine's own typically short financial series, and names Pettitt's test as a verified, complementary method not yet implemented, rather than silently presenting PELT as if it were the only option considered.
- It establishes the event-study methodology in full, with a worked structure (estimation window, abnormal return, cumulative abnormal return, significance test) and three real seed events where the underlying market-data evidence ranges from directly verified to an honestly flagged residual, which is itself evidence for why the anchor-verification and two-pass review discipline exists.
- It does not present any anomaly score, peer z-score, change-point date or event-study result as a measured output of a live Calculate run against a real company; every arithmetic example in this section is explicitly either a worked illustrative calculation or a figure drawn from the research lanes' own verified company facts, never from a pipeline run that has not yet happened.

## 15. Reason: hypotheses are written as predictions that later evidence can confirm or break

**Answer.** Next Signal's Reason stage turns the top twelve anomalies that Calculate has already ranked into at most six hypotheses, each required to name a mechanism, two to four testable predictions and two to three disconfirmers before anything reaches Challenge. The function that attaches five standard rival explanations to every hypothesis, `generate_rivals()` in `pipeline/reason.py`, is real, tested code, with six tests passing in `tests/test_pipeline_reason.py` as part of a 174-test suite at the time of writing [BUILDLOG], while the main hypothesis-proposal call to the language model, `propose_hypotheses_llm()`, is an injectable stub awaiting the orchestrator `pipeline/run.py`, which does not exist yet [BUILDLOG]. Applying the stage's own narrative-divergence formula by hand to Cipla's own words against its own numbers gives a divergence of 1.0 on the formula's minus-one-to-one scale: management said it "continued to make considerable progress across focused markets despite near-term challenges" [RDC51], a positive-polarity claim, in the same period its consolidated net profit fell 57% year on year [RDC55], the maximum possible mismatch the formula can register for a single claim.

### 15.1 What Reason receives, and what it is allowed to say

Reason is the first stage at which a language model forms an opinion, and the plan deliberately narrows what it is allowed to see and what it is allowed to say, because every upstream stage (Discover, Connect, Calculate) exists specifically to stop a summarising agent from inventing a story out of thin air. The hypothesis prompt, `llm/prompts/hypothesise.md`, receives a fixed input bundle and nothing else: the company's identity and sub-industry playbook, the angles Discover chose and the questions attached to them, the top twelve anomalies Calculate ranked (metric, periods, values, peer z-score, change-point period, materiality), the event timeline built from regulator records, filings, guidance statements and first-seen news dates, management's own narrative claims extracted from transcripts and presentations, and peers' values for the same metrics. The instruction given to the model is explicit about the ceiling on invention: propose at most six hypotheses, each explaining at least one of the supplied anomalies, stating a mechanism, listing two to four predictions as `(metric_id, direction, where_to_check)`, and two to three disconfirmers, observations that would break the hypothesis if seen. The model may use only `metric_id` values from the registry it was handed, and it is told directly not to state any number that is not already present in the supplied tables. The response is validated against a `json_schema` of `list[Hypothesis]`, and the call runs at `reasoning_effort: "medium"`, a deliberate middle setting between the fast, low-effort calls used for routine extraction and the higher-effort calls reserved for the write-up stage.

Table 15.1 lays out the hypothesis object's required fields exactly as the prompt and schema define them, since every later stage (Challenge's tests, Prove's strength score and falsification grammar, the export templates) reads from this same shape rather than a looser free-text hypothesis.

**Table 15.1: Hypothesis object fields, as the Reason-stage prompt and schema require them**

| Field | Contents | Who supplies it | Count required |
|---|---|---|---|
| `statement` | One sentence naming the mechanism linking an anomaly to a cause | LLM, from the supplied anomaly and context | Exactly one per hypothesis |
| `explains` | Anomaly IDs this hypothesis accounts for | LLM, restricted to the supplied anomaly list | At least one |
| `predictions[]` | `(metric_id, direction, where_to_check)` triples | LLM, `metric_id` restricted to the registry it was handed | Two to four |
| `disconfirmers[]` | Observations that would break the hypothesis if seen | LLM, grounded in the supplied tables | Two to three |
| `is_rival_of` | Back-link from an auto-generated rival to its main hypothesis | Deterministic code, `generate_rivals()` | Set on rivals only |
| `rivals[]` (attached post-hoc) | The five standard rival hypotheses for this main hypothesis | Deterministic code, not the LLM | Exactly five |

Table 15.2 sets out the input bundle itself, since the discipline of the whole stage rests on this list being fixed and auditable rather than an open-ended retrieval call the model makes on its own.

**Table 15.2: The fixed input bundle the hypothesis prompt receives, and where each piece comes from**

| Input | Content | Produced by |
|---|---|---|
| Company identity and playbook | NSE symbol, sub-industry, pharma or hospital angle set | Discover, via `universe.py` |
| Chosen angles and their questions | The top four angles Discover scored and selected | Discover's angle-scoring formula |
| Top twelve anomalies | Metric, periods, values, robust peer z, change-point period, materiality | Calculate's anomaly ranking (§5.9.6) |
| Event timeline | Regulator, filing, guidance and first-seen-news dates | Connect, timeline builder |
| Management narrative claims | Up to fifteen `{claim, metric_id_guess, polarity, period, quote, page}` items | Reason's own narrative extraction (§15.3) |
| Peer values | The same metrics, same periods, for the peer set | Calculate, peer comparison module |

### 15.2 Rival generation: the part of Reason that never touches the language model

The single most load-bearing design decision in this stage is that it does not wait for Challenge to introduce rival explanations. The moment any hypothesis, real or stub, exists, `generate_rivals()` deterministically fills five standard rival-hypothesis slots from fixed statement templates, so that an Analysis of Competing Hypotheses matrix can be built even before Discover or Connect have surfaced a single company-specific fact [RF01] [RF07]. This matters because Heuer's own methodology, extracted directly from the primary CIA text with PyMuPDF after WebFetch twice returned only compressed PDF streams, treats identifying the full set of plausible hypotheses as step one of an eight-step process, not an afterthought bolted on after a preferred explanation has already been written up [RF07]. Table 15.3 names all five rivals and the question each one poses against the main hypothesis.

**Table 15.3: The five standard rival hypotheses `generate_rivals()` attaches to every proposed hypothesis**

| Rival ID | Name | What it claims instead | The test battery item that checks it |
|---|---|---|---|
| R-sector | Sector-wide movement | The whole sub-industry moved the same way; nothing is company-specific | T1, peer test |
| R-fx | Foreign-exchange effect | The change is a currency-translation artefact, not an operating change | T2, FX test |
| R-oneoff | One-off item | A disclosed exceptional item, acquisition, divestment or demerger explains the move | T3, base-effect / one-off test |
| R-accounting | Reclassification | A segment or geography label change, not a real shift, explains the move | T4, reclassification test |
| R-seasonal | Seasonality | The quarter-on-quarter pattern is a recurring calendar effect, not a trend | T5, seasonality test |

Because these five rivals are generated the same way for every hypothesis on every company, the deck and the research document can state plainly that no surviving discovery has ever skipped having a sector, a currency, a one-off, a relabelling and a seasonal explanation considered against it, a claim that is true by construction of the code rather than by effort on any single run. Section 16 below walks through exactly how each rival is tested.

### 15.3 Narrative extraction and the narrative-versus-number divergence score

Management's own words are treated as data to be tested, not as a source of conclusions. The narrative-extraction prompt, `llm/prompts/narrative.md`, reads transcripts and investor presentations and extracts up to fifteen claims, each carrying a `claim` text, a `metric_id_guess`, a `polarity` of plus one, minus one or zero, a `period`, a verbatim `quote` and the `page` it came from; every quote is verified against the source page with the same anchor-verification mechanism Connect uses for facts (§13), so a narrative claim the writer cannot locate verbatim never enters the calculation. From these claims, the engine computes:

`narrative_divergence(metric) = -1 x polarity x sign(observed_change)`, averaged over every claim that maps to that metric, where a positive value means management said one thing about a metric and the number moved the other way.

The worked example in this section's Answer line shows the formula applied to a real, cited pair rather than an invented one. Cipla's FY25/FY26 chairman-adjacent narrative, as the company's own CEO put it, was that the company "continued to make considerable progress across focused markets despite near-term challenges in certain regions" [RDC51], a claim with polarity +1 (broadly positive framing). In the same period this framing covers, Cipla's consolidated net profit fell 57% year on year to Rs 676 crore from Rs 1,571 crore a year earlier [RDC55], an observed change with sign -1. Applying the formula: `-1 x (+1) x (-1) = +1.0`, the maximum divergence the scale permits. Table 15.4 shows the components of this one calculation explicitly, since a reader checking the arithmetic should be able to reproduce it without re-deriving the formula from prose.

**Table 15.4: Narrative-versus-number divergence, worked by hand from the Cipla example (illustrative hand-calculation applying the engine's own formula to desk-research facts, not an engine run)**

| Term | Value in this example | Source |
|---|---|---|
| Claim | "Continued to make considerable progress across focused markets despite near-term challenges in certain regions" | [RDC51] |
| Polarity | +1 (broadly positive management framing) | assigned per the formula's definition |
| Metric | Consolidated net profit, Q3 FY26 (quarter ended 31 Dec 2025) | [RDC55] |
| Observed change | Fell 57% year on year, Rs 1,571 crore to Rs 676 crore | [RDC55]: `(676 - 1571) / 1571 = -57.0%` |
| sign(observed_change) | -1 | arithmetic above |
| narrative_divergence | `-1 x (+1) x (-1) = +1.0` | formula applied to the two cited facts |

A second, gentler example from the same company dossier shows a case where the formula would register low or zero divergence rather than the maximum: Dr. Reddy's management stated that "base business, excluding Lenalidomide, grew at a healthy double-digit rate across all key geographies" [RDD20] for Q1 FY27, a claim whose metric scope (base business excluding one named product) already matches the reported outcome, since North America revenue's 35% year-on-year fall for the same quarter is itself attributed to the lenalidomide decline the claim explicitly carves out [RDD18]. This pairing is not plugged into the divergence formula here, because the claim and the metric it would map to are not actually describing the same scope, a distinction the engine's narrative extraction step is specifically designed to preserve rather than collapse; a model that mapped the "base business excluding Lenalidomide" claim onto total North America revenue would manufacture a false divergence, which is exactly the failure mode `metric_id_guess` plus quote verification exists to prevent.

### 15.4 Materiality, surprise and novelty: three ranking signals computed at three different stages

The outline governing this section asks for a materiality-by-novelty-by-surprise ranking, and an honest description of the pipeline has to name exactly where each of these three signals is actually computed, since they do not all live inside Reason itself. Materiality and a form of surprise are computed earlier, inside Calculate's anomaly-ranking step (§14 of this document; §5.9.6 of the engine design): `anomaly.score = 0.4 x min(1, |robust_peer_z| / 3) + 0.35 x cp_strength + 0.25 x min(1, |trend_t| / 4)`, with `materiality_pct` set to the metric's revenue or EBITDA exposure (for example, a geography's share of consolidated revenue). The peer-z and trend-t terms inside this formula are the engine's operational proxies for "surprise," a change large relative to the peer group or relative to the series' own recent trend. Novelty, by contrast, is not computed until later: the falsification battery's T7 test (§16 below) and the dedicated novelty formula in `grading/novelty.py`, used by Prove to choose which surviving hypothesis becomes the discovery (§17 below), both run after Challenge, not before it. Table 15.5 makes this staging explicit rather than letting the three words blur into one undifferentiated score.

**Table 15.5: Where materiality, surprise and novelty are actually computed across the pipeline**

| Signal | Formula or rule | Computed in | Stage, not Reason alone |
|---|---|---|---|
| Materiality | `materiality_pct` = metric's revenue or EBITDA exposure | `metrics/library.py` output consumed by `calculate.py` | Calculate |
| Surprise (peer-relative) | `0.4 x min(1, |robust_peer_z| / 3)` | `metrics/peers.py`, inside `anomaly.score` | Calculate |
| Surprise (trend-relative and change-point) | `0.35 x cp_strength + 0.25 x min(1, |trend_t| / 4)` | `metrics/changepoint.py`, inside `anomaly.score` | Calculate |
| Novelty (falsification test) | T7: not stated plainly by management in the last two calls/presentations and <= 10 mainstream hits in 90 days | `grading/novelty.py`, invoked from `pipeline/challenge.py` | Challenge |
| Novelty (final score) | `0.5 x (1 - min(1, mainstream_hits_90d/20)) + 0.3 x (0 if management_stated else 1) + 0.2 x lead_score` | `grading/novelty.py` | Prove |
| Final selection | `argmax(materiality_norm x novelty x strength_total/10)` over survivors | `pipeline/prove.py`, `choose_discovery()` | Prove |

Reason's own contribution to this chain is narrower than its name might suggest: it proposes candidate explanations for the anomalies Calculate has already materiality-scored, attaches the fixed set of rivals, and extracts the narrative claims the divergence score and, later, the ACH matrix will need; it does not itself rank hypotheses by novelty, because novelty cannot be assessed honestly until Challenge has run a disconfirming search and checked whether the finding already exists in mainstream coverage.

### 15.5 Status of this stage's components, stated plainly

**Table 15.6: LIVE, WIRED or PLANNED status of Reason's components as of this writing**

| Component | Status | Evidence |
|---|---|---|
| `generate_rivals()` (five standard rivals) | LIVE (real, tested code) | `pipeline/reason.py`; six tests in `tests/test_pipeline_reason.py` [BUILDLOG] |
| `propose_hypotheses_llm()` (main LLM proposer) | WIRED but stubbed; the function's injectable seam exists and is tested, the live model call is not yet connected | `run()` takes an injectable `propose` callable; the real orchestrator will call it with no override once `pipeline/run.py` exists [BUILDLOG] |
| Narrative extraction prompt (`llm/prompts/narrative.md`) | WRITTEN, not yet exercised in a live run | prompt file exists with its output schema (`NarrativeClaim(s)`), validated by schema tests [BUILDLOG] |
| Narrative-divergence formula | LIVE as a formula, demonstrated here by hand, not yet run on a live extraction | formula fixed in the design, worked by hand in Table 15.4 above against desk-research facts |
| `pipeline/run.py` orchestrator | DOES NOT EXIST YET | explicit statement in build log: "the one remaining piece to run an actual end-to-end pass is `pipeline/run.py`" [BUILDLOG] |

### What this section establishes, and what it does not

- Establishes the hypothesis object's exact required shape (statement, explains, predictions, disconfirmers) and the fixed, auditable input bundle the Reason-stage prompt is allowed to see.
- Establishes that rival generation is deterministic and runs for every hypothesis regardless of company, which is what lets the Analysis of Competing Hypotheses matrix in Section 16 start from a complete rival set rather than only the rivals a model happens to think of.
- Establishes the narrative-divergence formula and demonstrates it with a real, cited, hand-worked example (Cipla) rather than an invented one, including a second example (Dr. Reddy's) chosen specifically to show where the formula should not be applied because the claim and the metric describe different scopes.
- Establishes, honestly, that materiality and surprise are computed in Calculate, not Reason, and that novelty is not computed until Challenge and Prove; it does not claim Reason performs a single combined ranking, because the real code does not do that.
- Does not claim the main hypothesis-proposal LLM call has ever run live; it names the exact function that is stubbed and the exact orchestrator file whose absence is the reason.
- Does not present the Cipla or Dr. Reddy's divergence calculations as output of a real engine run; both are explicitly labelled as hand arithmetic applied to raw desk-research facts, consistent with the two-pass discipline this document follows throughout.

## 16. Challenge: five kinds of contradiction and nine falsification tests stand between a hypothesis and the report

**Answer.** Challenge runs every surviving hypothesis through a battery of up to nine falsification tests and checks every pair of sourced numbers against five contradiction types before a discovery is allowed to carry a strength label; six of the nine tests (T1 through T6) are real, deterministic code in `grading/falsify.py` and `pipeline/challenge.py`, T7's novelty check lives in `grading/novelty.py` and can only downgrade, never kill, and T8 (a disconfirming search) and T9 (a point-in-time replay) are designed but not yet wired, since T8 needs a live language-model call and T9 needs a second full pipeline run [BUILDLOG]. The clearest demonstration of the fifth contradiction type the engine is built to catch, aggregator versus primary, is already fully resolved from a real primary filing: one secondary aggregator reported Dr. Reddy's Q1 FY27 consolidated net profit at approximately Rs 1,290 crore, while the company's own SEC Form 6-K exhibit 99.2, filed with the US Securities and Exchange Commission under CIK 0001135951 on 22 July 2026, confirms profit attributable to equity holders of the parent at Rs 4,435 million, that is Rs 443.5 crore, with the Rs 1,290 crore figure matching no line item in the primary filing at all [RDD23] [RDD25].

### 16.1 Five kinds of contradiction, each with its own detection rule

The engine does not treat "two sources disagree" as a single undifferentiated problem. `grading/contradictions.py` names five distinct contradiction types, each with its own detection rule and its own ruling logic, because a currency mismatch and a genuine accounting error need different remedies even though both look, on the surface, like "the numbers do not match." Table 16.1 sets out the five types with a real, cited example of each drawn from the raw research files rather than a hypothetical one, since several of these have already occurred and been resolved during this project's own research phase.

**Table 16.1: The five contradiction types, their detection rules, and a real example of each**

| Type | Detection rule | Real example found during this project | Resolution |
|---|---|---|---|
| Numeric | Same metric, period and entity from two sources differs by more than the greater of 0.5% relative or the rounding unit | Sun Pharma FY2026 consolidated revenue: CRISIL's rating rationale states Rs 58,563 crore, stockanalysis.com states Rs 58,462 crore, Indian Pharma Post states Rs 58,220 crore, none opened directly against the company's own annual report | Flagged provisional in all three sources, logged as C-RDS01, pending the primary annual report [S251] [S253] |
| Narrative-versus-number | `narrative_divergence(metric) >= 0.5` for a mapped metric | Cipla's "continued to make considerable progress... despite near-term challenges" [RDC51] against a 57% year-on-year net profit fall [RDC55], divergence 1.0 as worked in Section 15.3 | No single ruling needed; the divergence score itself is the engine's output, shown alongside both the quote and the number |
| Temporal | A dated guidance statement (metric, target, date) versus the reported actual after the target date misses by more than 10% relative, or the wrong sign | Cipla's 14 January 2026 disclosure that lanreotide re-supply was expected to resume in H1 FY27 [RDC53], a dated, checkable guidance target not yet reached in any file in this raw research pass | Not yet resolvable; flagged as the live test case this engine is built to run once Q2 FY27 and Q3 FY27 filings exist |
| Cross-channel | NSE versus BSE versus SEC versions of the same release differ in a number or a date | Dr. Reddy's Q1 FY27 results exist as both a company-hosted PDF [RDD22] and an SEC Form 6-K exhibit [RDD15]; both were independently fetchable and found consistent in this pass, a negative example showing the check running cleanly | No contradiction found; logged as a confirmed cross-channel match, not a conflict |
| Aggregator-versus-primary | Aggregator (for example, a secondary financial-data site) value differs from a primary filing by more than 1% | Dr. Reddy's Q1 FY27 net profit: one secondary aggregator reported approximately Rs 1,290 crore versus the SEC 6-K primary figure of Rs 443.5 crore, a difference of roughly 191% relative to the primary figure, `(1290 - 443.5) / 443.5 = 190.8%` | RESOLVED by primary-source precedence: Rs 443.5 crore is the figure of record; the Rs 1,290 crore figure is excluded as erroneous, logged as conflict C01 |

The aggregator-versus-primary row is the project's own strongest proof point for the design thesis stated in `research/ARGUMENT.md`: a system that trusts the company's own disclosures least and checks every number against its primary source would have caught this error by construction, whereas a single-corpus summarising agent reading only one aggregator's page would have had no mechanism to notice it at all. The ruling itself, including the exact arithmetic, is recorded verbatim in `research/raw/conflicts.md` as entry C01, with the basis stated as primary-source precedence per the golden rules and the specific SEC URL that resolved it.

It is worth stating plainly why this particular contradiction was resolvable at all, since not every numeric conflict in this project's own research is: Dr. Reddy's Laboratories, unlike the other four Track D companies, files with the US Securities and Exchange Commission as an ADR issuer under CIK 0001135951, a filing channel with no comparable access friction to the NSE and BSE PDF hosts that blocked a meaningful share of the other four companies' own verification attempts (Section 10 of this document). The research team's own experience across the ten raw research lanes is that this kind of clean, primary-document resolution is the exception rather than the rule when the primary host is an NSE or BSE archive: several numeric conflicts elsewhere in the raw files (Sun Pharma's three disputed FY2026 revenue figures, logged as C-RDS01; Cipla's two slightly different Q4 FY25 net-profit bases, logged as C-RDC01) remain provisional precisely because the primary filing could not be opened directly within the time available, and are carried forward into the research document with that limitation stated rather than silently resolved by picking whichever secondary figure looked more authoritative.

### 16.2 The nine falsification tests, their applicability and their pass rule

Every hypothesis that reaches Challenge is run against as many of the nine tests as apply to it; a test that does not apply (for example, the FX test on a hypothesis about a purely domestic metric) is marked not applicable and never counts against the hypothesis. Table 16.2 lists all nine with the exact applicability condition and pass rule the engine design specifies, and names which tests are real code today.

**Table 16.2: The nine falsification tests (T1 to T9)**

| Test | Name | Applicable when | Hypothesis survives the test if | Status |
|---|---|---|---|---|
| T1 | Peer test | At least three peers have the metric | The subject's robust peer z-score is at least 1.0 in the hypothesised direction; if peers moved the same way with |z| < 0.5, the test fails and the sector rival is marked consistent | LIVE, `grading/falsify.py` [BUILDLOG] |
| T2 | FX test | Metric is in INR and the segment earns USD | The USD-terms change has the same sign and at least 50% of the INR-terms magnitude | LIVE, added alongside T3 and T4 [BUILDLOG] |
| T3 | Base-effect / one-off test | An exceptional item, acquisition, divestment, demerger or disclosed one-time product sits within plus-or-minus four quarters | The change persists after excluding the disclosed item, or persists comparing periods both after the event | LIVE [BUILDLOG] |
| T4 | Reclassification test | Segment or geography label sets differ across the periods compared | The change persists on the overlapping, consistently labelled set, or the company provides restated comparatives | LIVE [BUILDLOG] |
| T5 | Seasonality test | The metric is quarterly | The year-on-year, same-quarter comparison agrees in sign with the claimed trend | LIVE, present from the first falsify.py pass [BUILDLOG] |
| T6 | Persistence test | Always applicable | The change holds for at least two consecutive periods, or is a single dated event with an anchored record | LIVE, present from the first falsify.py pass [BUILDLOG] |
| T7 | Novelty test | Always applicable | Not stated plainly by management in the last two calls or presentations, and mainstream coverage hits are 10 or fewer in 90 days; failing this test downgrades novelty to 0.3 or below, it never kills | LIVE as a formula in `grading/novelty.py`, invoked from `pipeline/challenge.py`; downgrade-only by design [BUILDLOG] |
| T8 | Disconfirming search | Always applicable | The language model writes three queries designed to find counter-evidence; the top results are fetched and classified; the hypothesis passes if no contradicting item from an Admiralty grade A or B source remains unexplained | NOT YET WIRED; needs a live LLM call this stage does not yet make |
| T9 | Time-travel test | At least eight periods of data exist | Re-running Calculate with `as_of` set two periods earlier shows the anomaly, or its precursor, already visible (anomaly score at least 0.4) before the first mainstream coverage date | NOT YET WIRED; needs a second full pipeline run, which needs the orchestrator Section 15 already names as absent |

T1 through T6 are the deterministic half of the battery and were completed in a single engine-development session: T5 and T6 existed from the first pass at `grading/falsify.py`, and T2, T3 and T4 were added later in the same build phase, bringing the full deterministic set to six tests with fifteen new unit tests, all passing [BUILDLOG]. This is an important honesty point for the research document to carry plainly: the tests that require no live network or model call are finished and tested; the two tests that require either an active language-model search (T8) or a second complete run of the pipeline (T9) are specified in design but have not executed against real data, because the orchestrator that would let a run invoke itself twice at different `as_of` dates does not exist yet.

### 16.3 Kill and downgrade rules

Passing or failing an individual test does not by itself kill a hypothesis; the rules in `pipeline/challenge.py` combine test outcomes into a kill or downgrade decision, and the decision is logged either way, since a killed hypothesis is kept in `report.killed` with its `kill_reason` rather than being deleted, which is itself the material the deck's and the dashboard's kill log draws on. Table 16.3 states the exact rules.

**Table 16.3: Kill and downgrade rules applied after the test battery runs**

| Outcome | Condition | What happens |
|---|---|---|
| Kill | T6 (persistence) fails | Hypothesis removed from survivors, reason logged |
| Kill | T1 (peer) fails with the sector rival marked consistent | Hypothesis removed, the sector-wide rival explanation is recorded as the reason |
| Kill | Independent origins fall below 2 after T8's disconfirming search | Hypothesis removed, insufficient independent corroboration logged as the reason |
| Kill | Any unresolved numeric-type contradiction with grade-A sources on the hypothesis's core number | Hypothesis removed, the specific unresolved contradiction is logged as the reason |
| Downgrade (no kill) | T2, T3 or T4 fails but the hypothesis remains directionally supported | Strength penalty of minus one applied in Prove's scoring, hypothesis remains a candidate |
| Survive | None of the kill conditions trigger | Hypothesis proceeds to the ACH matrix and, if chosen, to Prove |

`pipeline/challenge.py`'s own test coverage exercises exactly these branches: a T6-failure kill, a sector-wide T1-failure kill, a too-few-origins kill, a T2 downgrade that does not kill, an all-pass survive case, and a full `run()` both with no test data supplied (nothing kills, the ACH matrix builds over the main hypothesis plus its five rivals) and with an injected T6 failure (the hypothesis is killed and no ACH matrix is built at all, since no main hypothesis survives to populate it) [BUILDLOG].

### 16.4 The Analysis of Competing Hypotheses matrix, worked by hand against real evidence

Heuer's own methodology, read directly from the primary CIA text rather than only a secondary summary, lists eight steps: identify every plausible hypothesis, list significant evidence for and against each, prepare a hypotheses-by-evidence matrix and analyse diagnosticity, refine the matrix, draw tentative conclusions by trying to disprove rather than prove hypotheses, test the sensitivity of the conclusion to a few critical items of evidence, report conclusions discussing the relative likelihood of all hypotheses rather than only the most likely one, and identify milestones for future observation [RF07]. `grading/ach.py` implements the matrix mechanics: rows are evidence items (supporting or contradicting any hypothesis, capped at twenty, highest Admiralty reliability first), columns are the surviving main hypotheses plus their standard rivals, and each cell carries a score of plus two (strongly consistent, CC), plus one (consistent, C), zero (neutral, N), minus one (inconsistent, I) or minus two (strongly inconsistent, II). `Inconsistency(h)` sums the negative cells in a hypothesis's column; the main hypothesis must have the lowest inconsistency score, or be within one point of the lowest, and the rival with the next-lowest inconsistency becomes the Counterargument, carried forward with its own supporting evidence IDs.

Table 16.4 works through a small, illustrative ACH matrix by hand, using real evidence items drawn from the Cipla dossier's own practice hypothesis H1 (the lanreotide and Pharmathen partner-dependence hypothesis) against two of the five standard rivals the engine would attach automatically. This is a hand-built illustration of the matrix mechanism, not an engine-generated run, since the orchestrator that would produce one does not exist yet; every evidence item and every date is a real, cited fact from the raw research.

**Table 16.4: ACH matrix worked by hand (illustrative; evidence items are real and cited, the matrix itself is a hand-built demonstration of the mechanism, not an engine output)**

| Evidence item (grade, source) | H1: Lanreotide/Pharmathen hidden partner-concentration risk | R-sector: sector-wide weakness | R-oneoff: a disclosed one-time item |
|---|---|---|---|
| USFDA inspected Pharmathen's Rodopi, Greece facility 10 to 21 Nov 2025, nine Form 483 observations [RDC52] (grade B, Medical Dialogues reporting a primary regulatory event) | +2 (CC) | 0 (N) | +1 (C, the observations are a datable one-time inspection event) |
| Cipla's own 14 Jan 2026 Regulation 30 disclosure: "production of Lanreotide has been temporarily paused," resupply expected H1 FY27 [RDC53] (grade A, company's own exchange filing) | +2 (CC) | 0 (N) | +1 (C) |
| Q3 FY26 North America revenue fell 22% to Rs 1,485 crore while India revenue rose 10% to Rs 3,457 crore [RDC55] (grade A, Reuters-sourced, directly fetched) | +1 (C, the North America-specific fall is consistent with a single-product, single-geography disruption) | -1 (I, a geography-specific fall is inconsistent with a sector-wide explanation that would hit India too) | 0 (N) |
| JPMorgan note: a worst-case import alert without product exemptions could cut FY27 to FY28 earnings by 4 to 6% [RDC54] (grade D, SNIPPET, a secondary synthesis of an analyst note) | +1 (C, weak, unverified source grade) | 0 (N) | 0 (N) |
| Inconsistency(h) (sum of negative cells) | 0 | -1 | 0 |

Table 16.4a sets out the cell-score glyph legend the matrix uses, since the five-value scale (CC, C, N, I, II) is read directly off the Admiralty-style convention the engine adapts rather than a numeric score alone.

**Table 16.4a: ACH cell-score glyph legend**

| Glyph | Score | Meaning |
|---|---|---|
| CC | +2 | Strongly consistent with the hypothesis |
| C | +1 | Consistent with the hypothesis |
| N | 0 | Neutral, does not discriminate between hypotheses |
| I | -1 | Inconsistent with the hypothesis |
| II | -2 | Strongly inconsistent with the hypothesis |

On this small, hand-built illustration, H1 and R-oneoff tie at zero inconsistency, with R-sector clearly worse (one inconsistent cell, since the geography-specific pattern of the revenue fall argues against a sector-wide explanation). Per the rule above, the main hypothesis H1 would need to be within one point of the lowest inconsistency score to remain the main hypothesis, which it is (tied at zero), and the rival with the next-lowest inconsistency, R-oneoff, becomes the Counterargument carried into Prove, since a one-time, already-disclosed disruption at a named partner facility is the strongest honest alternative explanation that the evidence does not rule out. This is a small, four-row illustration built for demonstration; a real run would assemble up to twenty evidence rows per the matrix's own cap, mixing deterministic metric-sign cells with language-model text classifications where the evidence is prose rather than a number.

### 16.5 Kepner-Tregoe "is / is not" framing

Separately from the ACH matrix, the engine's contradiction-detection logic borrows the Kepner-Tregoe problem-analysis convention of contrasting what a problem "is" against what it "is not," across categories of what occurs, where, when, extent and who is involved, with the most likely cause being the one that explains every entry on both sides of the table rather than only some of them [RF32] [RF33]. Table 16.5 applies this framing to the lanreotide example as a worked illustration of how the convention disciplines a contradiction write-up before any score is assigned.

**Table 16.5: Kepner-Tregoe "is / is not" framing applied to the Cipla lanreotide disruption (illustrative application of a real methodology to real cited facts)**

| Category | Is | Is not |
|---|---|---|
| What occurs | A single-product manufacturing pause at one named external partner site [RDC52] [RDC53] | A company-wide manufacturing shutdown; Cipla's 46 other facilities across five countries are unaffected [RDC61] |
| Where | Pharmathen's Rodopi, Greece facility, Cipla's exclusive contract manufacturer for this one product [RDC52] | Any of Cipla's own owned sites (Patalganga, Kurkumbh, Goa, Virgonagar, Bommasandra), each separately tracked with its own inspection history [RDC56] [RDC58] [RDC59] [RDC60] |
| When | Inspection 10 to 21 Nov 2025; disclosure 14 Jan 2026; resupply guided for H1 FY27 [RDC52] [RDC53] | A sudden, undisclosed event; the sequence is dated and disclosed at every step |
| Extent | One named top-three US product line; North America revenue fell 22% in the same quarter [RDC55] | Cipla's India business, which rose 10% in the same quarter [RDC55]; not a demand-side or market-wide problem |
| Who is involved | Cipla USA Inc as the regulatory filer, Pharmathen International S.A. as the named external manufacturer [RDC52] [RDC53] | Cipla's own manufacturing or quality function directly; this is a partner-site compliance issue, not an internal one |

The pattern that the "is" column fits consistently while the "is not" column also holds consistently is itself the Kepner-Tregoe signal that a single, well-specified cause, the partner-site disruption, explains the full pattern better than either a sector-wide or an internal-quality explanation would.

### 16.6 Status of Challenge's components

**Table 16.6: LIVE, WIRED or PLANNED status of Challenge's components**

| Component | Status | Evidence |
|---|---|---|
| T1 to T6 (deterministic tests) | LIVE | `grading/falsify.py`, `pipeline/challenge.py`; fifteen new tests added for T2 to T4 alongside the earlier T5/T6 [BUILDLOG] |
| T7 (novelty, downgrade-only) | LIVE as a formula | `grading/novelty.py`, invoked from `pipeline/challenge.py` [BUILDLOG] |
| T8 (disconfirming search) | NOT YET WIRED | needs a live LLM call not yet made from this stage |
| T9 (time-travel replay) | NOT YET WIRED | needs a second pipeline run via the orchestrator, which does not exist [BUILDLOG] |
| `run_core_tests()` / `apply_kill_rules()` | LIVE, with an injectable test-input seam | `pipeline/challenge.py`, nine tests covering all kill, downgrade and survive branches [BUILDLOG] |
| `run_ach()` / ACH matrix mechanics | LIVE | `grading/ach.py`, wrapped by `pipeline/challenge.py`'s `run_ach()` [BUILDLOG] |
| Five contradiction types | LIVE as design and detection rules; demonstrated here with real raw-research examples, not yet exercised end to end on a live run | `grading/contradictions.py`; the aggregator-versus-primary example (C01) is a real, already-resolved case from this project's own research phase |

### What this section establishes, and what it does not

- Establishes the five contradiction types with a detection rule and a real, cited example of each, including the aggregator-versus-primary case (Dr. Reddy's Rs 1,290 crore versus the confirmed Rs 443.5 crore SEC 6-K figure) that is this project's own clearest demonstration of primary-source precedence working as designed.
- Establishes the nine-test falsification battery with its applicability and pass rules, and states plainly which six tests are real, deterministic code today (T1 to T6), which one is a live formula that can only downgrade (T7), and which two are designed but not yet wired because they need capabilities the orchestrator alone can provide (T8, T9).
- Establishes the kill and downgrade rules exactly as the code implements them, and demonstrates the ACH matrix mechanism with a small, explicitly hand-built, cited worked example rather than claiming a real engine run produced it.
- Applies the Kepner-Tregoe "is / is not" convention to the same worked example as a second, complementary way of disciplining the same contradiction before a score is assigned.
- Does not claim T8 or T9 have ever executed against real data; both require the orchestrator (`pipeline/run.py`) that Section 15 already names as not yet built.
- Does not present the worked ACH matrix or the Kepner-Tregoe table as output of a real company run; both are labelled explicitly as hand-built illustrations using real, cited evidence, consistent with this document's two-pass discipline.

## 17. Prove: evidence strength is a rule, not a mood, and every falsification condition names a metric, a threshold and a date

**Answer.** Prove scores every surviving discovery on a five-part additive rubric, independence worth up to three points, reliability up to two, corroboration up to two, survival up to two and persistence up to one, minus penalties for unresolved contradictions and sector-wide partial explanations, with Strong requiring a total of at least 7, Moderate at least 4, and a single-document finding floored at Weak regardless of its numeric score; this formula is live, tested code in `grading/strength.py`, exercised by six real test cases in `tests/test_strength.py`, including one case that scores a full 9.0 on the underlying components yet is still forced to "Weak" purely because its evidence comes from a single document [BUILDLOG]. Every falsification condition Prove writes follows one fixed grammar, naming a metric, a comparator, a threshold, a number of consecutive periods, a next-check date and the source that will be checked, exactly as `pipeline/prove.py`'s `build_falsification()` constructs it today [BUILDLOG].

### 17.1 The strength rubric, term by term

`grading/strength.py`'s `strength()` function takes nine inputs (independent origins, source grades, corroborated and total number counts, tests passed and applicable, persistent periods, unresolved contradictions, whether the finding is sector-partial, and whether it rests on a single document) and returns a `StrengthBreakdown` with each component's contribution shown alongside its own plain-language reasoning sentence, so a judge reading the dashboard sees the arithmetic, not just a label. Table 17.1 sets out every term exactly as the code computes it.

**Table 17.1: The evidence-strength rubric, term by term, as implemented in `grading/strength.py`**

| Component | Range | Formula | What it measures |
|---|---|---|---|
| Independence | 0 to 3 | `{0:0, 1:0, 2:1, 3:2}.get(independent_origins, 3)` | Distinct origins (company, regulator, market, press, rating agency, peer, SEC), not distinct documents |
| Reliability | 0 to 2 | Average of each cited source's Admiralty grade, mapped A to 2, B to 1.5, C to 1, D to 0.5, E and F to 0 | How trustworthy the cited sources are on the Admiralty scale [RF08] to [RF13] |
| Corroboration | 0 to 2 | `2 x corroborated_numbers / total_numbers` | Share of the discovery's own key numbers independently reproduced in a second source |
| Survival | 0 to 2 | `2 x tests_passed / tests_applicable` | Share of the applicable falsification tests (T1 to T9) the hypothesis actually passed |
| Persistence | 0 to 1 | 1.0 if persistent for at least 3 periods, 0.5 if exactly 2, else 0 | Whether the change holds over time or is a single data point |
| Penalties | subtracted | `-2.0 x unresolved_contradictions - 1.0 if sector_partial else 0` | Direct cost of an unresolved contradiction or a partly sector-wide explanation |
| Label thresholds | fixed | Strong if total >= 7, Moderate if total >= 4, else Weak; single-document findings are always floored at Weak | The three-tier vocabulary shown on every discovery card |

### 17.2 Worked scores, taken directly from the engine's own real test cases

Rather than invent illustrative numbers for this section, the clearest worked examples are the real inputs the engine's own test suite already exercises, since `tests/test_strength.py` was written specifically to cover the formula's named edge cases, including the brief's own worked "Moderate" profile [BUILDLOG]. Table 17.2 reproduces five of these real test cases and works the arithmetic by hand, term by term, so the formula's behaviour is visible rather than asserted.

**Table 17.2: Five real test cases from `tests/test_strength.py`, worked by hand**

| Test case | Independence | Reliability | Corroboration | Survival | Persistence | Penalties | Total | Label |
|---|---|---|---|---|---|---|---|---|
| Worked "Moderate" profile (3 origins, grades A, A, B, 3 of 4 numbers corroborated, 5 of 7 tests passed, persistent 3 periods, partly sector-wide) | 2 (`2+1=2` → actually `{3:2}` → 2) | 1.83 (`(2+2+1.5)/3`) | 1.5 (`2 x 3/4`) | 1.43 (`2 x 5/7`) | 1.0 | -1.0 (sector-partial) | 6.76 | Moderate |
| Single-document case (3 origins, grades A, A, A, 4 of 4 corroborated, 7 of 7 tests passed, persistent 3 periods, zero contradictions) | 2 | 2.0 | 2.0 | 2.0 | 1.0 | 0 | 9.0 | **Weak**, forced by the single-document floor despite a 9.0 underlying score |
| Strong, four-origin, all-pass case (4 origins, grades A, A, A, B, 4 of 4 corroborated, 8 of 8 tests passed, persistent 4 periods) | 3 (`.get(4, 3)` falls to the default) | 1.88 | 2.0 | 2.0 | 1.0 | 0 | 9.88 | Strong |
| One unresolved contradiction at an otherwise-maximal score (3 origins, grades A, A, A, 4 of 4 corroborated, 7 of 7 tests passed, persistent 3 periods) | 2 | 2.0 | 2.0 | 2.0 | 1.0 | -2.0 (one contradiction) | 7.0 | Strong (exactly at the boundary) |
| The same profile with two unresolved contradictions | 2 | 2.0 | 2.0 | 2.0 | 1.0 | -4.0 (two contradictions) | 5.0 | Moderate (dropped below Strong) |
| Zero-origin, thin-evidence case (0 origins, grade C only, 0 of 1 corroborated, 1 of 4 tests passed, 0 persistent periods) | 0 | 1.0 | 0 | 0.5 | 0 | 0 | 1.5 | Weak |

The single-document row is the most important one to read carefully: a discovery can score the formula's near-maximum on every other dimension and still be labelled Weak, because the `single_document` flag overrides the numeric total entirely. This is a deliberate design choice, not an edge-case oversight, and it exists precisely to stop the engine from ever reporting a confident-sounding Strong label when the only thing behind it is one document's say-so, which is the same failure mode the brief's own requirement that findings "must not rest on a single article or document" (R16) is written to prevent. The two-contradiction row shows the penalty term doing real work on its own: an otherwise-maximal profile drops a full two label-tiers, from Strong to Moderate, once a second unresolved contradiction is added, confirming the formula does not let a large positive score simply absorb an unlimited number of unresolved disagreements.

### 17.3 Novelty, and why it is checked separately from strength

Strength measures whether a finding is well-supported; novelty measures whether it is already known. The two are deliberately kept apart, because a finding can be extremely well-supported (many independent, high-grade, corroborated sources) and still carry no competitive value if it simply repeats what mainstream coverage already reported. `grading/novelty.py` computes `novelty = 0.5 x (1 - min(1, mainstream_hits_90d/20)) + 0.3 x (0 if management_stated else 1) + 0.2 x lead_score`, where `lead_score = min(1, lead_days/90)` and `lead_days` is the gap between the earliest anchored record supporting the discovery and the first mainstream coverage of the same story, zero if the coverage came first. Table 17.3 breaks the formula into its three weighted components.

**Table 17.3: The novelty formula, term by term**

| Term | Weight | What raises it |
|---|---|---|
| Mainstream-coverage scarcity | 0.5 | Fewer than 20 mainstream hits on the topic in the trailing 90 days |
| Not management-stated | 0.3 | The finding was not plainly stated by management in its last two calls or presentations |
| Lead score | 0.2 | The anchored record predates the first mainstream coverage of the same story, capped at a 90-day lead |

Prove's final selection among surviving hypotheses, `choose_discovery()` in `pipeline/prove.py`, combines all three evidence dimensions into one rule: `argmax(materiality_norm x novelty x strength_total/10)`, where `materiality_norm = min(1, materiality_pct/25)`. If no survivor reaches Moderate, the report still returns the best survivor labelled Weak and says so in plain words, and if every hypothesis was killed, `discovery` is set to `None` and the user-facing output states plainly that no discovery survived the challenge stage, together with the kill log explaining why; the design treats both outcomes as legitimate, honestly reported results rather than failures to be hidden.

### 17.4 The falsification condition grammar

Every discovery the engine reports carries a specific, checkable condition under which the system would reconsider it, built deterministically from the chosen hypothesis's own first prediction rather than written freehand by a language model. `pipeline/prove.py`'s `build_falsification()` constructs this as a single fixed sentence template:

`"<metric name> <comparator> <threshold> for <n> consecutive <quarters> (next check: <date>, source: <kind>)"`

The comparator is chosen to point at whatever observation would break the hypothesis, not at whatever would confirm it: a `>=` comparator for a hypothesis that predicts a fall (so the condition breaks if the metric rises back past the threshold), or a `<=` comparator for a hypothesis that predicts a rise. The threshold is set to the pre-change level from the change-point segment's own mean, or to the peer median where no change-point applies, and the next-check date is the next scheduled NSE board meeting date for results where the company is listed, or the quarter end plus 45 days otherwise. Table 17.4 names every slot in the grammar and where its value comes from.

**Table 17.4: The falsification condition grammar, slot by slot**

| Slot | Filled from | Example value (illustrative, matching a plausible Cipla-style profile) |
|---|---|---|
| `<metric name>` | The hypothesis's first prediction's `metric_id`, rendered in plain language | "North America segment revenue (USD)" |
| `<comparator>` | Chosen to point at what would break the hypothesis: `>=` if a fall was predicted, `<=` if a rise was predicted | `>=` |
| `<threshold>` | The pre-change change-point segment mean, or the peer median if no change-point applies | the pre-disruption quarterly run-rate |
| `<n> consecutive <periods>` | The persistence requirement the hypothesis itself states | 2 consecutive quarters |
| `next check` | The next scheduled NSE board meeting date for results, or quarter end plus 45 days | the company's next results date |
| `source` | The kind of document that will carry the check | "quarterly results press release" |

### 17.5 The output schema: eight elements, each with its own home in the code

Prove is also the stage that assembles the final, user-facing object, and the brief's own eight required output elements map one-to-one onto fields the engine already defines in `schemas.py` and renders through the export templates confirmed built and tested against a fixture report [BUILDLOG]. Table 17.5 lists all eight.

**Table 17.5: The brief's eight output elements and where each lives in the engine**

| Element | What it contains | Guard applied before display |
|---|---|---|
| The Discovery | One sentence, at most 45 words, containing a number and a period label | `stray_numbers` guard: every numeric token must trace to a `display`/`value` in `numbers[]` or a quoted evidence passage |
| Why It Matters | Three to five bullets | Length-bounds validator (3 to 5), schema-enforced |
| Evidence | The claim's independent sources, with links | Validator requires at least three distinct origin classes |
| Timeline | When the change emerged and how it developed | Built from the change-point period and the event timeline (Section 18) |
| Numbers | Only the calculations needed, each with its formula and inputs | `numbers[]` entries expandable to their own input facts |
| Counterargument | The strongest surviving rival, chosen by the ACH matrix | Carried with its own evidence IDs, not asserted without support |
| Falsification Condition | What future evidence would make the system reconsider | Built by the fixed grammar in Section 17.4, never freehand |
| Evidence Strength | Strong, Moderate or Weak, with its reasoning shown | `StrengthBreakdown.reasoning`, the plain-language sentence list from Section 17.1 |

Every writer guard in `llm/guards.py` runs before any of this is shown to a user: a stray number, a dash, an exclamation mark or investment-language hit anywhere in the discovery's prose forces `deterministic_discovery_text()`, the template fallback, instead of showing the language model's output anyway [BUILDLOG].

This same guard mechanism was exercised against a real, live model call before it was trusted, not only against mocked test fixtures, and the exercise found two real bugs worth recording in this section specifically because they live inside the same `llm/guards.py` module the Prove-stage writer depends on. Running `voice/eval_voice.py` against the real Sarvam API (Section 20 of this document covers the voice analyst in full) initially grounded only seven of ten scripted questions cleanly; the three failures were false positives, the model correctly paraphrasing genuinely grounded data, not hallucinations. The root causes were narrow and specific: `allowed_numbers_from_discovery()` never scanned a `NumberBlock`'s own `period` field or a `Falsification`'s own `next_check` date at all, and a second attempt to scan full ISO date strings silently failed because the number-matching regex's negative lookbehind, added deliberately to stop model text like "page12" from counting as the number 12, also blocked legitimate digits sitting immediately after a letter in the engine's own structured fields, such as the "27" in "Q1FY27". Both were fixed properly rather than patched around: a second, deliberately looser digit-only regex is now used only when building the allowed-number set from the engine's own structured fields, never for scanning the model's own output, and date components are now read directly from each `date` object's year, month and day attributes instead of re-parsing a formatted string. Re-running the same ten scripted questions after the fix reached nine of ten grounded cleanly, with the one remaining gap narrow and understood: a run's own wall-clock `finished_at` timestamp is not yet added to the allowed-number set, a known, documented residual rather than an unexplained failure [BUILDLOG]. The reason this belongs in a Prove-stage section rather than only the voice section is that `pipeline/prove.py`'s own `validate_text()` calls the identical, now-fixed functions; any live written discovery the engine eventually produces is protected by the same corrected guard that this live voice test exercised.

### 17.6 Status of Prove's components

**Table 17.6: LIVE, WIRED or PLANNED status of Prove's components**

| Component | Status | Evidence |
|---|---|---|
| `grading/strength.py` (`strength()`) | LIVE, tested | Six real test cases, hand-verified in Table 17.2 [BUILDLOG] |
| `grading/novelty.py` | LIVE as a formula | Formula fixed; not yet exercised against a live mainstream-coverage search |
| `choose_discovery()` | LIVE, injectable scorer | `pipeline/prove.py`; ignores rivals and killed hypotheses, returns `None` honestly on no survivors [BUILDLOG] |
| `build_falsification()` | LIVE | Both comparator directions tested in `tests/test_pipeline_prove.py` [BUILDLOG] |
| `deterministic_discovery_text()` (template fallback) | LIVE | Bullet-count floor tested [BUILDLOG] |
| `validate_text()` (the writer guards) | LIVE | Catches a genuinely stray number in a dedicated test; passes clean text through [BUILDLOG] |
| `run()` end to end for Prove | LIVE, tested for all three paths: no survivor, fallback writer, clean and dirty injected writer | Twelve tests in `tests/test_pipeline_prove.py`, part of a 195-test suite [BUILDLOG] |
| A live end-to-end discovery from a real company run | NOT YET PRODUCED | The orchestrator `pipeline/run.py` does not exist yet [BUILDLOG] |

### What this section establishes, and what it does not

- Establishes the evidence-strength formula term by term and reproduces five of its own real test cases by hand, including the single-document-forces-Weak override and the two-contradiction penalty cascade, both taken directly from `tests/test_strength.py` rather than invented for this document.
- Establishes the novelty formula and why it is kept separate from strength, and states the final selection rule that combines materiality, novelty and strength into one choice among survivors.
- Establishes the falsification condition's exact grammar, its comparator-direction rule, and where every slot's value comes from, with one clearly labelled illustrative example.
- Establishes the one-to-one mapping between the brief's eight required output elements and the engine's own schema fields and guards.
- Does not claim any of these components has yet produced a real discovery end to end from a live company run; every status table in this section and the one before it states plainly that the orchestrator required to do so does not exist yet.
- Does not use a single invented number anywhere in the worked-score table; every input in Table 17.2 is lifted directly from the engine's own real, passing test file.

A final point worth making explicit, since it is easy to lose in a formula-heavy section: the strength rubric's own language is deliberately borrowed from GRADE's certainty vocabulary rather than invented fresh. GRADE names five domains used to downgrade a body of medical evidence (risk of bias, inconsistency, indirectness, imprecision and publication bias) [RF23] and allows a body of evidence to be rated up as well as down, for example for a large observed effect, though upgrading is generally restricted to observational evidence and withheld from randomised evidence [RF26]. Next Signal's own rubric adapts the downgrading instinct, not the specific medical domains: an unresolved contradiction behaves like a serious risk-of-bias concern, a thin corroboration count behaves like imprecision, and a single-document finding behaves like the kind of indirectness GRADE would flag, each pulling the overall certainty label down rather than letting a strong independence or reliability score alone decide the outcome. This is stated here as an explicit adaptation, consistent with the calibration-honesty note in `research/ARGUMENT.md`: GRADE's own domain was never financial-evidence certainty, and the adaptation borrows its downgrading discipline and its three-tier certainty vocabulary (here Strong, Moderate, Weak rather than GRADE's four) without claiming the clinical-trial calibration behind GRADE's own numeric thresholds transfers unchanged.

## 18. Temporal reasoning: the engine can be sent back in time, and the time-travel runs show when each story became visible

**Answer.** Next Signal's point-in-time filter, `point_in_time_filter()` in `pipeline/connect.py`, is real, tested code that drops any document published after the run's `as_of` date and drops every undated document outright, on the reasoning that an unstamped document cannot be placed in time and keeping it would leak look-ahead information into a replay [BUILDLOG]; this single function is what makes the time-travel protocol in Section 18.2 below possible at all. The lead-lag number the moneyshot's temporal panel depends on, the median number of days between the earliest independently dated external record and the first mainstream coverage of the same story, is not yet measured and is carried here as `{{EVAL:median_lead_days}}`, since it requires the time-travel evaluation harness (`eval/timetravel.py`) to run against real data, which in turn requires the orchestrator that Sections 15 through 17 have each already named as not yet built.

### 18.1 Point-in-time filtering: the mechanism, not just the principle

Point-in-time data discipline exists in the literature specifically to prevent look-ahead bias, the error of letting a backtest or a model use information that was not actually available at the historical moment being tested, which can make a system falsely appear to have anticipated a turning point it could not have seen in real time [RF64] [RF65]. The standard remedy in financial backtesting literature is to use a dataset of constituent lists and values exactly as they stood on each historical date, including entities that later failed or delisted, rather than applying today's universe retroactively [RF68]; look-ahead bias is separately identified as the single most common mistake made when conducting a backtest [RF67].

Next Signal's own implementation of this principle is narrow and mechanical rather than aspirational: `point_in_time_filter()` takes the run's `ctx.as_of` date and removes, from the full set of documents Connect has fetched, any document whose published date is later than `as_of`. A second rule removes any document with no date at all, because an undated document cannot be verified to predate `as_of`, and silently keeping it anyway would be exactly the look-ahead leak the filter exists to close. Table 18.1 states both rules plainly, since the second rule (dropping unstamped documents, not just future-dated ones) is easy to miss on a first reading and is the part of the design that is strictest about honesty over completeness.

**Table 18.1: The point-in-time filter's two rules, as implemented in `pipeline/connect.py`**

| Rule | Condition | Why | Test coverage |
|---|---|---|---|
| Future-dated documents dropped | `document.published_date > ctx.as_of` | A document published after the replay date was not available to a user querying the system on that date | `test_pipeline_connect.py`: future-dated documents confirmed dropped [BUILDLOG] |
| Unstamped documents dropped outright | `document.published_date is None` | An undated document cannot be placed in time; keeping it risks leaking look-ahead information into the replay | `test_pipeline_connect.py`: unstamped documents confirmed dropped [BUILDLOG] |

Dropping unstamped documents is a deliberately conservative choice: it means a time-travel run will have less evidence available than a live run of the same company on the same day, never more, which is the correct asymmetry for a credibility test. A filter that erred the other way, keeping undated documents on the assumption they were probably old enough, would quietly inflate the engine's apparent temporal foresight in exactly the way the look-ahead-bias literature warns against.

### 18.2 The time-travel protocol

The time-travel evaluation, specified in `eval/timetravel.py`, is designed to run each of the five NIFTY 50 Track D companies with `as_of` set to 365 days before the evaluation date, take the falsification condition and the main prediction the engine produced on that earlier-dated run, and then check, using today's real data, whether the prediction held, broke, or remains untestable over the following four quarters. Table 18.2 sets out this protocol as a sequence of steps, since the method is what the research document can state with confidence today even though the measured results cannot yet be reported.

**Table 18.2: The time-travel evaluation protocol**

| Step | What happens | Output |
|---|---|---|
| 1 | Run the full pipeline for a company with `as_of = today - 365 days` | A discovery, or an honest no-survivor result, dated 365 days in the past |
| 2 | Extract that run's falsification condition and its hypothesis's first prediction | A specific, checkable claim with a threshold and a check date |
| 3 | Re-run the pipeline on the same company with today's `as_of` (the live date) | A second, current-dated set of facts and anomalies |
| 4 | Compare the earlier prediction against the four quarters of data that have since arrived | Classification: held, broke, or untestable |
| 5 | For every regulator event surfaced in any run, record its own date, the first mainstream GDELT coverage date, and the company's own exchange-disclosure date for the same event | `lead_days` per event |
| 6 | Aggregate across all events and all companies | `prediction_hold_rate`, `median_lead_days`, written to `eval/out/timetravel.csv` |

This protocol depends on the pipeline being invokable twice, at two different `as_of` dates, for the same company, and on the comparison step having real post-event data to check the earlier prediction against; both conditions require the orchestrator, which is why step 3 onward has not yet executed against real data for any Track D company.

### 18.3 Lead-lag results: the moneyshot's temporal number, honestly flagged

The research argument's own moneyshot template names a secondary number for exactly this panel: the median number of days between the earliest independently dated external record supporting a discovery and the first mainstream news coverage of the same story, computed from the time-travel evaluation set. Per the writer brief's two-pass rule, this number is carried here as an explicit placeholder rather than estimated or invented, and the assembler is designed to fail the build if the placeholder ever survives into a final document. Table 18.3 names the exact fields the eventual pass-two replacement will fill, and the file each one comes from.

**Table 18.3: The temporal-reasoning numbers this document cannot yet report, and where they will come from**

| Placeholder | What it will report | Source file, once a real run exists |
|---|---|---|
| `{{EVAL:median_lead_days}}` | Median days between the earliest external record and the first mainstream coverage of the same story | `eval/out/timetravel.csv`, aggregated by `eval/timetravel.py` |
| `{{EVAL:prediction_hold_rate}}` | Share of year-old predictions that held over the following four quarters | Same file, same aggregation step |
| `{{EVAL:n_companies}}` | Number of companies the time-travel set covers | `eval/out/companies.json` |

What the raw research already demonstrates, independent of a live run, is that Track D genuinely offers the kind of dated, independent regulator evidence this panel depends on: the USFDA's own inspection and enforcement timeline for Cipla's Pithampur facility, for example, runs from an 8 Form 483 inspection on 6 to 17 February 2023, to an Official Action Indicated classification on 5 August 2023, to a Warning Letter dated 17 November 2023 and disclosed 18 November 2023, with the market reacting the same week (shares fell 8.10% on 23 November 2023, the company's biggest single-day fall of 2023) [RDC56]. Each of these four dates is independently anchored to a different kind of record (a regulatory inspection, a regulatory classification, a regulatory letter, a market price move), which is precisely the structure a lead-lag calculation needs; the engine's job, once it can run twice at different `as_of` dates, is to show whether any of these dated steps preceded the first mainstream press coverage of the same sequence, not merely to assert that regulator evidence tends to lead the news.

### 18.4 Change-point dating, and a real bug the engine's own tests caught

The Timeline's "when the change emerged" marker is set by the change-point period `metrics/changepoint.py` detects, using the PELT algorithm (Killick, Fearnhead and Eckley, 2012), whose cost grows linearly in the number of observations rather than quadratically or cubically as competing exact methods do, letting it run orders of magnitude faster in the paper's own simulations while remaining exact rather than heuristic, unlike the simpler Binary Segmentation alternative [RF41] [RF42] [RF43]. Table 18.4 documents a real bug this project's own test-first development caught in this exact function, since it is directly relevant to whether the Timeline marker can be trusted on the short, 6-to-20-point quarterly or annual series that real financial data actually produces.

**Table 18.4: A real change-point bug found and fixed during engine development**

| What was found | Root cause | Fix | Verification |
|---|---|---|---|
| A clean, deliberately inserted step at index 4 of an 8-point test series was missed entirely by `ruptures.Pelt`; index 5 was returned instead | The `ruptures.Pelt` library's `jump` parameter defaults to 5, which only evaluates candidate breakpoints at multiples of 5, silently skipping change-points on short series, exactly the length typical of quarterly or annual financial data (6 to 20 points) | Pass `jump=1` explicitly in `changepoint.py`, with an inline comment explaining why | Verified directly against the same 8-point fixture before shipping; confirmed in the build log [BUILDLOG] |

The build log's own framing of this finding is worth repeating plainly in the research document, since it is exactly the kind of error a judge scoring "temporal reasoning" and "robustness" would want to know was caught before a live demo rather than during one: left unfixed, this default would have silently degraded the Timeline's own change-point marker, the Brief's own required R10 element, on every real company run, since real quarterly and annual series are almost always shorter than the 5-point jump the library defaults to [BUILDLOG]. The Pettitt test (Pettitt, 1979), a rank-based non-parametric alternative that computes a cumulative rank statistic and takes the probable change-point as the location maximising its absolute value, is named in the methods literature as a complementary check for a single abrupt shift [RF45] [RF46], and is a candidate for a future robustness cross-check against PELT's own output, though it is not yet implemented.

### 18.5 Status of this section's components

**Table 18.5: LIVE, WIRED or PLANNED status of temporal-reasoning components**

| Component | Status | Evidence |
|---|---|---|
| `point_in_time_filter()` | LIVE, tested | `pipeline/connect.py`; future-dated and unstamped documents both confirmed dropped in `test_pipeline_connect.py` [BUILDLOG] |
| `metrics/changepoint.py` (PELT, `jump=1` fix) | LIVE, tested, with a real bug caught and fixed | [BUILDLOG] |
| Time-travel protocol (`eval/timetravel.py`) | SPECIFIED, not yet run | Needs the orchestrator to invoke the pipeline twice per company at different `as_of` dates |
| `median_lead_days`, `prediction_hold_rate` | NOT YET MEASURED | Explicit `{{EVAL:...}}` placeholders, Table 18.3 |
| Dated, independent regulator evidence suitable for a lead-lag calculation | CONFIRMED PRESENT in the raw research (Cipla Pithampur sequence, and others in Section 6 and Section 9 of this document) | [RDC56] and the company dossiers |

### What this section establishes, and what it does not

- Establishes the point-in-time filter's exact two rules (future-dated documents dropped, unstamped documents dropped outright) and the look-ahead-bias literature these rules implement.
- Establishes the full six-step time-travel protocol as a specification, naming exactly what each step would produce once it runs.
- Carries the moneyshot's temporal number honestly as a placeholder rather than estimating or inventing it, and names the exact file and aggregation step that will eventually fill it.
- Demonstrates, with a real four-dated-step example from the Cipla Pithampur sequence, that Track D's own regulator evidence has the structure a lead-lag calculation needs, without claiming the calculation has been run.
- Documents a real change-point detection bug (the `ruptures.Pelt` default `jump=5` parameter silently skipping breakpoints on short series) caught and fixed during this project's own engine development, directly relevant to the Timeline marker's trustworthiness.
- Does not report a measured median lead time, a measured prediction-hold rate, or any other time-travel evaluation output, because no such run has yet occurred; every number of that kind in this section is an explicit, unfilled placeholder.

One further point belongs in this section rather than being left implicit: point-in-time discipline and survivorship-bias discipline are related but distinct problems, and the engine design currently addresses only the first directly. The backtesting literature treats survivorship bias, testing only entities that still exist today and silently omitting delisted or acquired companies, as a second, separate source of overstated backtest performance alongside look-ahead bias [RF67] [RF68]. Next Signal's universe loader reads the live NIFTY 50 and Nifty Pharma and Nifty Healthcare index constituent files at run time rather than from a fixed, hand-maintained list (Section 8 of this document), which already avoids one common failure mode, a stale universe that silently drops a company that was later delisted or renamed. It does not yet maintain a historical, point-in-time version of the universe itself, meaning a time-travel run dated a year ago uses today's constituent list rather than the constituent list as it stood then. For Track D specifically this is a modest exposure, since none of the five NIFTY 50 healthcare names or the nineteen tie-break names identified by the live CSV pull (Section 8) are known to have delisted, merged or been renamed within the one-year window the time-travel evaluation covers, but the limitation is named here plainly rather than left for a reader to discover on their own.

## 19. Worked discoveries: what the agent found on {{EVAL:n_companies}} companies, in the brief's eight-part format

**Answer.** This section describes, in full, the method by which at least three complete worked discoveries, each in the brief's own eight-element format, will be shown once a real end-to-end engine run exists for Track D companies; it does not show any such discovery today, because `pipeline/run.py`, the orchestrator that would call the six already-built and separately tested stages (discover, connect, calculate, reason, challenge, prove) in sequence on a real company, does not exist yet [BUILDLOG]. Every number that would depend on a real run, the company set, the discoveries themselves, their strength labels, their killed-hypothesis counts, is carried here as an explicit `{{EVAL:...}}` placeholder rather than estimated or invented, per the two-pass rule this entire research document follows for sections whose content depends on engine output that has not yet been produced.

### 19.1 Why this section cannot show real discoveries yet, stated precisely

It would be easy to under-explain this gap or to paper over it with a plausible-looking illustration; neither is acceptable under this document's own content-integrity rules. The precise state, as of this writing, is that all six pipeline stages exist as real, independently tested Python modules: `pipeline/discover.py` (angle scoring and selection, eight tests), `pipeline/connect.py` (document classification, point-in-time filtering, anchor verification, eight tests), `pipeline/calculate.py` (metric computation and anomaly ranking, seven tests), `pipeline/reason.py` (rival generation and the hypothesis-proposal seam, six tests), `pipeline/challenge.py` (the kill and downgrade rules, the ACH matrix wrapper, nine tests), and `pipeline/prove.py` (discovery selection, the falsification grammar, the writer guards, twelve tests), bringing the full engine test suite to 195 passing tests at the point these stages were completed [BUILDLOG]. What does not yet exist is the one file that would call all six of them, in sequence, against real documents fetched from real sources for a real company, with a shared HTTP client, an event bus, and the budget and timeout handling the design specifies: `pipeline/run.py`. Each stage was deliberately built with an injectable seam exactly at the point where a not-yet-built dependency would otherwise be required (a stubbed proposer in Reason, a stubbed document fetcher in Connect, an injectable test-input builder in Challenge), which is why all six can be tested in isolation today, and why none of them has yet produced a discovery from a live company run. Table 19.1 states this distinction in one place, since it recurs throughout this section.

**Table 19.1: What exists today versus what a real run requires**

| Exists today, tested in isolation | Still required for a real run |
|---|---|
| All six pipeline stage modules, 195 tests passing | `pipeline/run.py`, the orchestrator that sequences them |
| Live source clients for NSE, SEC EDGAR, CARE Ratings (spot-verified) | Live source clients for the remaining catalogued sources (CDSCO, NPPA, openFDA, GDELT, exchange-filing hosts beyond NSE) wired into Connect's real `fetch_documents()` |
| The LLM router with structured-output validation and repair retry (`llm/router.py`) | The Reason-stage proposer and Prove-stage writer actually calling it inside a real run, not only in isolated tests |
| The full export chain (Markdown, HTML, PDF, XLSX, CSV) built and tested against a fixture report | The same export chain run against a Report object a live pipeline run actually produced |
| The voice analyst, live-verified against a real Sarvam API call (Section 20) | A report for the voice analyst to ground on that came from a real run, not the test fixture it currently uses |

### 19.2 The method: how three or more discoveries will be assembled once real runs exist

Once `pipeline/run.py` exists and can be pointed at a real company symbol, the method for producing the worked discoveries this section will eventually show is fixed by everything already specified in Sections 11 through 18 of this document, not invented fresh at that point. Table 19.2 names the exact sequence.

**Table 19.2: The method that will produce each worked discovery, stage by stage**

| Step | Stage | What happens | Where it is specified in this document |
|---|---|---|---|
| 1 | Discover | The company's sub-industry playbook is loaded; angles are scored on data availability, anomaly signal and novelty prior; the top four are selected | Section 12 |
| 2 | Connect | Documents are fetched from the catalogued sources, classified by origin and Admiralty grade, filtered by `point_in_time_filter()`, and every fact is anchor-verified against its source passage before being kept | Section 13, Section 18.1 |
| 3 | Calculate | Every registered metric with complete inputs is computed per period; anomalies are scored by peer z, change-point effect size and trend t-statistic; the top twelve are kept | Section 14, Section 15.4 |
| 4 | Reason | Up to six hypotheses are proposed against the top anomalies; five standard rivals are deterministically attached to each; narrative claims are extracted and scored for divergence | Section 15 |
| 5 | Challenge | The nine-test falsification battery runs against each hypothesis; kill and downgrade rules apply; the ACH matrix is built over survivors and their rivals; the Counterargument is chosen | Section 16 |
| 6 | Prove | The strength rubric scores every survivor; novelty is computed; the highest-scoring survivor by materiality times novelty times strength is chosen as the Discovery, or the run honestly reports that none survived; the falsification condition is built by the fixed grammar | Section 17 |
| 7 | Write-up | The eight-element output is assembled and guarded (`stray_numbers`, length bounds, no dash or investment language); a failing guard forces the deterministic template fallback | Section 17.5 |
| 8 | Export and display | The same Report object is rendered to the dashboard, the Markdown, HTML, PDF, XLSX and CSV exports, and made available to the voice analyst | Section 20 |

### 19.3 The eight-element template, shown as the structure it will have

The brief's own output format names eight elements, and the research document can show, honestly, the exact shape each one will take without inventing the content that would fill it. Table 19.3 is a template, not a worked example: every cell that would depend on a real run carries an explicit placeholder rather than a plausible-sounding invented value, and every cell describing structure (field names, guards, validation rules) is filled in now because that part of the design is already fixed and real.

**Table 19.3: The eight-element discovery template, structure fixed today, content pending a real run**

| Element | Structural rule (fixed today) | Content for this run |
|---|---|---|
| The Discovery | At most 45 words, contains a number and a period label, passes `stray_numbers` | {{EVAL:discovery_1}} |
| Why It Matters | Three to five bullets, each with claim chips linking to evidence | {{EVAL:discovery_1_why_it_matters}} |
| Evidence | At least three distinct origin classes, each with a publisher, date, grade and link | {{EVAL:discovery_1_evidence}} |
| Timeline | Regulator, company-filing, management-said, market and press swimlanes, with the change-point marked on the plot | {{EVAL:discovery_1_timeline}} |
| Numbers | Only the calculations needed, each expandable to its formula and input facts | {{EVAL:discovery_1_numbers}} |
| Counterargument | The ACH matrix's next-lowest-inconsistency rival, with its own evidence IDs | {{EVAL:discovery_1_counterargument}} |
| Falsification Condition | The fixed grammar from Section 17.4: metric, comparator, threshold, periods, next-check date, source | {{EVAL:discovery_1_falsification}} |
| Evidence Strength | Strong, Moderate or Weak, with the five-term reasoning breakdown from Section 17.1 | {{EVAL:discovery_1_strength}} |

The same template, with the placeholder suffix changed to `discovery_2` and `discovery_3`, is how the second and third worked discoveries this section will eventually carry will be assembled, each on a different one of the five NIFTY 50 Track D companies, chosen once real runs exist by which three produce the strongest, most instructive combination of a Strong or Moderate survivor and at least one honestly reported Weak or no-discovery-survived outcome, since the brief's own requirement is for honest output, not for three uniformly impressive results.

### 19.4 Killed hypotheses: the template for what did not survive

A worked discovery is only half the story the brief asks for; the other half is the record of what Challenge killed and why, since this is the direct evidence a judge can check that falsifiability is a real mechanism and not a label. Table 19.4 shows the template this log will take.

**Table 19.4: Killed-hypothesis log template, per worked discovery**

| Hypothesis ID | Statement (template) | Which test killed it | Kill reason (template) |
|---|---|---|---|
| {{EVAL:discovery_1_killed_h1_id}} | {{EVAL:discovery_1_killed_h1_statement}} | {{EVAL:discovery_1_killed_h1_test}} | {{EVAL:discovery_1_killed_h1_reason}} |
| {{EVAL:discovery_1_killed_h2_id}} | {{EVAL:discovery_1_killed_h2_statement}} | {{EVAL:discovery_1_killed_h2_test}} | {{EVAL:discovery_1_killed_h2_reason}} |
| R-sector (auto-generated rival) | Sector-wide movement explains the anomaly, not a company-specific cause | T1 (peer test), if it fails with the sector rival marked consistent | {{EVAL:discovery_1_rsector_outcome}} |

The third row above is not itself a placeholder for unknown content; it documents a structural guarantee rather than a measured outcome, that every one of the five standard rivals Section 15.2 describes is present in this log's input set for every hypothesis on every company, whether or not it happens to be the rival that ends up killing the main hypothesis on a given run.

### 19.5 Honest Weak and no-survivor outcomes: why they belong in this section too

The outline governing this section explicitly asks that honest Weak results be shown alongside Strong or Moderate ones, and the design reason for this is stated plainly in Section 17.3: if no survivor reaches Moderate, the report still returns the best survivor labelled Weak and says so in plain words, and if every hypothesis was killed, the report sets `discovery` to `None` and states directly that no discovery survived the challenge stage, together with the kill log explaining why. Table 19.5 names the three distinct outcome shapes a real run can produce and the honest display each one gets, since showing only the Strong or Moderate cases in this section, once real runs exist, would misrepresent how the system actually behaves.

**Table 19.5: The three possible run outcomes, and the honest display each one gets**

| Outcome | What the user sees | Where this is enforced in the code |
|---|---|---|
| A survivor scores Strong or Moderate | The full eight-element discovery, Table 19.3's shape | `choose_discovery()`, `pipeline/prove.py` |
| A survivor exists but none reaches Moderate | The best survivor shown, honestly labelled Weak, with its own strength reasoning | Same function; label computed by `grading/strength.py`, never upgraded |
| Every hypothesis was killed | `discovery = None`; the dashboard and export both show "No discovery survived the challenge stage" with the full kill log | `choose_discovery()` returns `None` on no survivors; export templates confirmed to handle this case honestly rather than fabricating a result [BUILDLOG] |

### 19.6 Symmetric treatment across the five NIFTY 50 Track D companies

Section 2.5 of the research document's argument (`research/ARGUMENT.md`) commits to symmetric treatment: the five NIFTY 50 healthcare companies receive an identical dossier template and, once the evaluation harness runs, identical rows in the evaluation table. The worked-discoveries section is where that symmetry becomes concrete at the level of a single company's output rather than only at the level of a dossier. Table 19.6 names the five companies and the template-shape row each will eventually carry in this section, in the same fixed order used throughout this document.

**Table 19.6: The five NIFTY 50 Track D companies, and this section's planned coverage of each**

| Company | NSE symbol | Sub-industry playbook | Planned coverage in this section |
|---|---|---|---|
| Sun Pharmaceutical Industries | SUNPHARMA | Pharma | {{EVAL:sunpharma_outcome}} |
| Cipla | CIPLA | Pharma | {{EVAL:cipla_outcome}} |
| Dr. Reddy's Laboratories | DRREDDY | Pharma | {{EVAL:drreddy_outcome}} |
| Apollo Hospitals Enterprise | APOLLOHOSP | Hospital | {{EVAL:apollohosp_outcome}} |
| Max Healthcare Institute | MAXHEALTH | Hospital | {{EVAL:maxhealth_outcome}} |

Not every one of the five needs to appear as a full worked discovery in this section; the brief's own requirement is a minimum of three full discoveries in the eight-part format, and the method in Section 19.2 applies identically to whichever three are chosen once real runs exist. The two not shown in full will still appear in the evaluation table of Section 21, since the evaluation harness, unlike this section, runs the full fifteen-company set rather than a curated subset of three.

### 19.7 What the raw research already tells us about which discoveries are plausible, without pre-judging the engine's output

It would overstate this document's honesty rules to pretend the raw research contains no signal at all about what a real run is likely to surface, since the practice hypotheses collected during Phase R1 (Section 9 of this document, and the raw company dossiers directly) were deliberately seeded with exactly this purpose: giving Reason's eventual real run plausible starting material to test, not giving the research document a shortcut to a pre-written conclusion. Table 19.7 names, without conclusion, the strongest candidate seed hypothesis per company, each already carrying real citations, real predictions and real disconfirmers in its own raw file, exactly as collected rather than as resolved.

**Table 19.7: Candidate seed hypotheses already collected in the raw research, pending a real run's own independent test**

| Company | Candidate seed hypothesis (collected, not concluded) | Raw source |
|---|---|---|
| Sun Pharmaceutical Industries | A concurrent Organon acquisition (USD 11.75bn enterprise value) and three live FDA compliance issues (Halol import alert since Dec 2022, Dadra and Mohali warning letters, plus an OAI site not covered in trade press) together test whether the company's AAA/Stable rating affirmation already prices in regulatory risk that the market has not | [BUILDLOG], CRISIL rating rationale |
| Cipla | The lanreotide/Pharmathen partner-dependence hypothesis (H1, Section 16.4's worked ACH example), testing whether the headline US$1 billion North America target understates single-partner concentration risk by explicitly excluding the affected product | [RDC52] [RDC53], raw file R-D-CIPLA |
| Dr. Reddy's Laboratories | The lenalidomide cliff and semaglutide provision together test whether "base business excluding Lenalidomide" is a genuinely separable growth story or a narrative device masking a product-concentration risk | [RDD18] [RDD19] [RDD20] |
| Apollo Hospitals Enterprise | The HealthCo demerger's cash-breakeven guidance (targeted Q1 FY27) tests a guidance-versus-actual temporal contradiction, the hospital-sector analogue of the pharma announced-versus-delivered pattern | PLAN.md §2.6, item E6 |
| Max Healthcare Institute | The brownfield tower bed-commissioning schedule (202 of 400 beds reported operational, per the corrected figure in conflict C-RDM01) tests whether announced capacity and commissioned capacity diverge in a checkable, datable way | raw file R-D-MAXHEALTH, conflict C-RDM01 |

None of these five rows is a discovery; each is exactly what the raw research lanes were instructed to produce, a seed hypothesis with its own predictions and disconfirmers (Section 4.2 of the plan's R-D lane brief), collected for Reason to test against real, freshly fetched evidence once a real run exists, not a conclusion this document is permitted to assert in its place.

### 19.8 The Evidence element, broken down to the row level

The Evidence element of the eight-part output is itself a table, not a single value, and the brief's own requirement (R9, R15, R16: multiple independent sources with links, a traceable chain, never a single document) means its internal structure matters as much as the headline Discovery sentence does. Table 19.8 shows the exact row shape every piece of evidence will take once a real run exists, since this is the level of detail a judge clicking through the dashboard's Evidence tab (Section 20.2) will actually see.

**Table 19.8: Evidence row template, per claim**

| Field | Structural rule (fixed today) | Content for this run |
|---|---|---|
| Claim text | The verbatim or lightly paraphrased statement the evidence supports or contradicts | {{EVAL:discovery_1_evidence_row1_claim}} |
| Publisher | Named exactly as the Admiralty classification function records it | {{EVAL:discovery_1_evidence_row1_publisher}} |
| Origin class | One of company_filing, company_ir, exchange, regulator_us, regulator_in, sec, rating_agency, industry_body, market_data, press, aggregator, peer_filing | {{EVAL:discovery_1_evidence_row1_origin}} |
| Admiralty grade | A to F, per `grading/admiralty.classify()` | {{EVAL:discovery_1_evidence_row1_grade}} |
| Published date | ISO date, required for the point-in-time filter to ever have kept this item | {{EVAL:discovery_1_evidence_row1_date}} |
| Supports or contradicts | One of the two, relative to the chosen main hypothesis | {{EVAL:discovery_1_evidence_row1_stance}} |
| Link | A URL that resolves; `evidence_urls_ok` in the evaluation harness checks every one with a live HEAD or GET request | {{EVAL:discovery_1_evidence_row1_url}} |

### 19.9 The Numbers element, broken down to the row level

Numbers carries the brief's own instruction to derive relationships rather than quote figures (R3), and every row needs to be expandable to the exact inputs and formula that produced it, not shown as a bare figure with no audit trail. Table 19.9 gives the row shape, matching the `NumbersGrid` component's own click-to-expand behaviour described in Section 20.2.

**Table 19.9: Numbers row template, per derived figure**

| Field | Structural rule (fixed today) | Content for this run |
|---|---|---|
| Label | Plain-language name of the computed relationship, not the raw metric_id | {{EVAL:discovery_1_number1_label}} |
| Display value | Formatted string, Indian notation where applicable, the period stated alongside it | {{EVAL:discovery_1_number1_display}} |
| Formula | The exact formula from `metrics/library.py`'s own registry, shown on hover | {{EVAL:discovery_1_number1_formula}} |
| Input facts | Each input traced to its own Fact record, itself traced to a verified quote | {{EVAL:discovery_1_number1_inputs}} |
| Source IDs | The evidence item IDs whose quotes anchor each input fact | {{EVAL:discovery_1_number1_source_ids}} |

### 19.10 The Timeline element, broken down to swimlane level

Timeline is the element most directly tied to the brief's own temporal-reasoning criterion (R10, R33), and its structure, five swimlanes (Regulator, Company filing, Management said, Market, Press) plus a single change-point marker drawn directly on the plot, is already fixed by the dashboard design in Section 20.2. Table 19.10 gives the swimlane-level template this element will carry.

**Table 19.10: Timeline swimlane template**

| Swimlane | What populates it | Content for this run |
|---|---|---|
| Regulator | Dated USFDA, CDSCO or NPPA events relevant to the chosen hypothesis | {{EVAL:discovery_1_timeline_regulator}} |
| Company filing | NSE, BSE or SEC filing dates for the same underlying event | {{EVAL:discovery_1_timeline_filing}} |
| Management said | Dated narrative claims from calls or presentations, with their divergence score if applicable (Section 15.3) | {{EVAL:discovery_1_timeline_management}} |
| Market | Price or volume reaction dates, with the event-study CAR and t-statistic where computed | {{EVAL:discovery_1_timeline_market}} |
| Press | First mainstream coverage date of the same story, the anchor the lead-lag calculation (Section 18.3) measures against | {{EVAL:discovery_1_timeline_press}} |
| Change-point marker | The single dated line drawn on the plot, labelled with the period Calculate's change-point detection identified (Section 18.4) | {{EVAL:discovery_1_timeline_changepoint}} |

Taken together, Tables 19.8 through 19.10 show that the eight-part output format is not eight independent fields to be filled separately; Evidence, Numbers and Timeline each reference the same underlying Fact and Document records by ID, so that a single verified quote in a single source document can simultaneously support a Numbers input, appear in an Evidence row, and anchor a Timeline swimlane entry, with every one of those three appearances pointing back to the identical anchored passage rather than three independent, potentially inconsistent restatements of it.

### 19.11 A worked arithmetic illustration of the Numbers element, using only real, cited figures

One part of the Numbers element's structure can be demonstrated honestly today without waiting for a real run, since it is a mechanical property of arithmetic over already-cited raw facts, not a claim about what the engine will find: the formula-and-inputs shape Table 19.9 specifies. Using Dr. Reddy's own cited Q1 FY27 figures, North America revenue of Rs 22,048 million, down 35% year on year [RDD18], against consolidated revenue of Rs 80,705 million for the same quarter [RDD15], the derived relationship "North America share of consolidated revenue" computes as `22,048 / 80,705 = 27.3%`, matching the 27% figure the company's own results release states directly [RDD18]. This is exactly the shape a real Numbers row will take, a label, a display value with its period, a formula, and input facts each traced to a cited source, demonstrated here with real, already-verified numbers rather than with an invented example, and it is also exactly the kind of check the evaluation harness's own `numbers_anchored_verified` metric (Section 21 of this document) is designed to run automatically across every number a real engine run produces, not only this one hand-checked illustration.

A second worked arithmetic illustration, this time using Cipla's own cited Q3 FY26 figures, shows the same shape applied to a different, independently useful relationship: a period-on-period margin comparison rather than a geography-share computation. Cipla's Q3 FY26 EBITDA of Rs 1,255 crore against revenue of Rs 7,075 crore [RDC68] [RDC55] gives an EBITDA margin of `1,255 / 7,075 = 17.7%`, matching the company's own stated margin figure exactly [RDC68], down from a margin of 28.1% the same source names for the prior-year comparable quarter. The derived relationship here, `(17.7 - 28.1) / 28.1 = -37.0%`, a relative margin contraction of thirty-seven percent, is itself a number no single cited source states directly; it is the arithmetic the engine's own Calculate stage would perform automatically once it has both periods' EBITDA and revenue figures as verified Facts, which is precisely the category of finding Section 2 of this document argues a summarising agent reading the filing in isolation would never surface, since the filing itself states the two margin figures separately and never states their own percentage change against each other.

Both illustrations share a property worth naming directly: in each case the arithmetic uses only figures the company itself disclosed, in the same filing, for the same or adjacent periods, yet the derived relationship (a geography's share of the whole, or a margin's percentage change against its own prior period) is not itself a number either company states. This is the precise sense in which Section 2's contrarian thesis, that a discovery worth reporting is usually found in a computed gap rather than a quoted figure, is demonstrable with real numbers today even though no engine has yet run to find such a gap on its own.

### 19.12 Why three discoveries, not one, and why the choice of which three matters

The brief's own wording asks for a system that works for any company in the track without tuning, and a single worked discovery, however strong, cannot demonstrate that; it can only demonstrate that the system worked once. Three is the minimum this section commits to precisely because three is the smallest number that can show the full honest range the design is built to produce: at least one discovery that reaches Strong or Moderate and earns its place on the strength of independent, corroborated, test-surviving evidence; at least one case where the strongest surviving explanation is honestly labelled Weak rather than dressed up as more certain than the evidence supports; and, ideally, one case close to the boundary between a kill and a survival, since that is the case most informative about whether the falsification battery is doing real discriminating work rather than passing everything through. A deck or a report that only ever showed its best result would be making exactly the kind of unfalsifiable, cherry-picked claim the whole Challenge stage exists to prevent the system itself from making about a company; this section's own choice of examples has to meet the same bar.

This is also why Table 19.6 commits to covering all five NIFTY 50 Track D companies with at least a one-line outcome, even though only three receive the full eight-part treatment: a reader should be able to see, at a glance, that the two companies not expanded into full worked discoveries were not silently dropped because their results were unflattering, but because the evaluation table in Section 21 already carries their full numeric results across the complete fifteen-company set, and three detailed, representative examples communicate the method more clearly than five compressed ones would.

### 19.13 How this section's placeholders will be checked before they are allowed to disappear

Per the writer brief's own two-pass rule, this section is not permitted to quietly lose its `{{EVAL:...}}` markers by having a later editing pass delete them without substituting a real value; the assembler (`research/assemble.py`, Section 4.6 of this document's build process) counts every remaining `{{EVAL:` occurrence in the assembled document and fails the build outright if that count is anything other than zero once pass two is declared complete. This means the only legitimate way for any placeholder in Tables 19.3 through 19.10 to disappear from the final document is for `model/collect_outputs.py` to have actually read a real `engine/eval/out/summary.json` and a real set of run reports, and for a pass-two writer dispatch to have replaced each placeholder with the exact value that file contains, never a value typed by hand to make the section look finished. The same discipline applies to the company-outcome placeholders in Table 19.6 and the seed-hypothesis-to-real-hypothesis mapping implied by Table 19.7: a seed hypothesis surviving into a real discovery is a finding to report once it happens, not a conclusion this document is entitled to assume in advance of the run that would actually test it.

### What this section establishes, and what it does not

- Establishes, precisely, which of the six pipeline stages exist and are tested today (all six, 195 passing tests) and which single piece, the orchestrator `pipeline/run.py`, stands between that tested code and a real worked discovery.
- Establishes the exact eight-step method, stage by stage, that will assemble each worked discovery once real runs exist, cross-referenced to the sections of this document that specify each step.
- Shows the eight-element output template and the killed-hypothesis log template with their structure fully specified and their content carried as explicit `{{EVAL:...}}` placeholders, never as invented example numbers.
- States the three possible honest run outcomes (Strong or Moderate discovery, honestly labelled Weak survivor, or no discovery survived) and commits to showing at least one non-Strong outcome once real runs exist, consistent with the honesty rules this document follows throughout.
- Names the five real seed hypotheses already collected in the raw research, each with real citations, explicitly as uncompleted candidate material for Reason to test, not as pre-judged conclusions.
- Breaks the Evidence, Numbers and Timeline elements down to row and swimlane level, and shows, with one fully worked, real, cited arithmetic example (Dr. Reddy's North America revenue share), exactly what the formula-and-inputs shape of a real Numbers row will look like once a real run exists.
- Explains why three discoveries, spanning the honest Strong-to-Weak range rather than only the best outcome, are the minimum needed to demonstrate generality, and states exactly how the assembler will enforce that no placeholder in this section is replaced with anything other than a real measured value.
- Does not show a single real worked discovery, strength label, killed-hypothesis count or company outcome, because no real end-to-end engine run has yet occurred; every number of that kind in this section is an explicit, unfilled `{{EVAL:...}}` placeholder, and this is by design, not an oversight.

## 20. One output, two forms: a click-through dashboard and an equity-research-style report, plus a voice analyst that only speaks from the report

**Answer.** Next Signal renders a single Report object two ways, a click-through Next.js dashboard with five routes and an eight-panel report page, and a set of equity-research-style exports (Markdown, HTML, PDF, XLSX, CSV), with the full dashboard shell and report page already built and passing `npm run build` and `npm run lint` clean, and the full export chain already built and tested end to end against a fixture report, including a real headless-Chrome PDF render verified to start with the PDF file signature [BUILDLOG]. The voice analyst that sits alongside both forms is not aspirational: it is live, ported from the user's own `ai-healthcare platform` project, grounded strictly on tool calls into the report rather than on open-ended model knowledge, and live-verified against a real Sarvam API call at nine of ten scripted questions grounded cleanly, with the one residual gap understood and documented rather than hidden [BUILDLOG].

### 20.1 The dashboard's information architecture

The dashboard (PLAN.md §6.3) is built as a Next.js 16 application with five routes, each with a distinct purpose, and Table 20.1 names all five exactly as the plan specifies and the build log confirms were implemented.

**Table 20.1: The dashboard's five routes**

| Route | Purpose | Key components, as built |
|---|---|---|
| `/` | Masthead, the "Investigate a company" console, the Track D universe grid, recent runs, the six-stage method strip | `Masthead`, `RunConsole`, `UniverseGrid`, `RecentRuns`, `MethodStrip` [BUILDLOG] |
| `/run/[runId]` | The live run view: a stage rail from Discover to Prove with timings, a source ticker, a hypothesis board that flips cards to killed or survived, then an auto-navigate to the report | `StageRail`, `SourceTicker`, `HypothesisBoard`, `KillLog`, wired to a typed server-sent-events store [BUILDLOG] |
| `/report/[runId]` | The deliverable dashboard itself, the eight-panel report page described in Section 20.2 | `DiscoveryHero` plus the Overview, Evidence, Challenge, Market, Method and Export tabs, `EvidenceDrawer`, `VoiceDock` [BUILDLOG] |
| `/eval` | Evaluation results, the source of every deck and PDF number once the harness runs | `EvalTable`, degrades gracefully without a running engine [BUILDLOG] |
| `/about` | What the system is, what it is not, the source-grading table, the disclaimer | Static page, built [BUILDLOG] |

### 20.2 The report page, panel by panel

The report page is the one a judge clicking through the system is most likely to spend time on, and its structure maps directly onto the brief's own eight output elements and the evidence and falsification mechanics Sections 16 and 17 describe. Table 20.2 names each panel, what it shows, and whether the build log confirms it as built.

**Table 20.2: The report page's panels**

| Panel | What it shows | Status |
|---|---|---|
| DiscoveryHero | The discovery sentence with every number underlined and clickable, opening the evidence drawer at that number's anchor; the strength badge, the stacked strength bar with the Moderate and Strong thresholds marked, the novelty meter, origin-class icons | LIVE, built, matching `grading/strength.py`'s own scale exactly [BUILDLOG] |
| Overview tab | Why It Matters bullets with claim chips; a Numbers grid with formula tooltips; a hand-rolled SVG Timeline chart with five swimlanes and the change-point marker drawn on the plot | LIVE, built [BUILDLOG] |
| Evidence tab | The brief's own evidence chain drawn as linked nodes (Finding to Annual Report to Quarterly Results to Exchange Filing to Industry Source to Competitor Evidence), a sortable evidence table, an origin-by-claim independence heatmap | LIVE, built (`EvidenceTable.tsx`) [BUILDLOG] |
| Challenge tab | The ACH heat grid (CC/C/N/I/II glyphs, the chosen hypothesis's column outlined), the nine-test battery table, the kill log, the Counterargument card, the Falsification card with a countdown to the next-check date | LIVE, built (`ACHMatrix.tsx`, `ChallengeTab.tsx`) [BUILDLOG] |
| Market tab | A composed price chart (close line, NIFTY 50 rebased line, event markers), an event-study table (CAR at [-1,+1] and [-5,+5], t-statistic) | SPECIFIED, not confirmed built in the entries reviewed for this document |
| Method tab | Angles considered with scores, stage-duration bar chart, sources hit by host, LLM call log, a scrubbable trace replay | SPECIFIED, not confirmed built in the entries reviewed for this document |
| Export tab | Four large export buttons plus per-table CSV links | LIVE, built (`ExportPanel.tsx`) [BUILDLOG] |
| EvidenceDrawer | Document title, publisher, origin class and Admiralty grade with a one-line definition, the verbatim quote with the number highlighted, an "Open source" link, related evidence for the same claim | LIVE, built [BUILDLOG] |
| VoiceDock | The orb button, transcript panel, fact cards from tool results, the "answers only from this report" label | LIVE in its underlying session logic (Section 20.4); the dock's front-end wiring is not separately confirmed built in the entries reviewed for this document |

### 20.3 Exports: built and tested against a fixture, not yet run against a live report

This is the point in the document where this writer's instructions and the actual, authoritative state recorded in the build log diverge, and the honest course is to follow the build log, since it is the up-to-date record of what the engine actually contains. The full export chain exists and is tested, not merely designed: `export/csvs.py` (UTF-8-with-BOM CSV per table, zipped), `export/xlsx.py` (a twelve-sheet workbook with a bold white-on-signal-red header row, frozen panes, autofilter and clickable hyperlinks), `export/svg.py` (pure-Python SVG builders for the Timeline, bars, the ACH heat grid and the strength bar, with no matplotlib dependency), `export/md.py` with `templates/report.md.j2` (rendering the brief's exact eight sections plus "How the agent got here" and a clickable Sources list), `export/html.py` with `templates/report.html.j2` (the same content styled to match the dashboard), and `export/pdf.py` (HTML printed to PDF via headless Chrome). A dedicated test, `test_write_pdf_produces_a_real_pdf`, invokes the installed Chrome binary directly and asserts the output both starts with the `%PDF-` file signature and exceeds one kilobyte, and the Markdown renderer is confirmed to contain all eight of the brief's required section headings verbatim and to handle the "no discovery survived" case honestly rather than fabricating a result [BUILDLOG]. The full engine test suite stood at ninety-nine of ninety-nine passing at the point this export chain was completed, later rising to the 195-test suite Sections 15 through 17 of this document cite [BUILDLOG].

What has not yet happened, and this is the real, narrower gap this section should state rather than the blanket claim that nothing exists, is that none of these five exports has yet been produced from an actual engine run on a real company, because the orchestrator that would produce a live Report object, `pipeline/run.py`, does not exist. Every export built and tested so far has run against `tests/fixtures/report_min.json`, a fixture Report, not against output a real Discover-to-Prove pipeline run actually generated. Table 20.3 states each export format's schema and its true status precisely.

**Table 20.3: Export formats, their schemas, and their true status**

| Format | Schema | Status |
|---|---|---|
| Markdown | The brief's eight sections in order, plus "How the agent got here" and a clickable Sources list, footer disclaimer | LIVE, built and tested against a fixture report; not yet run against a live engine output [BUILDLOG] |
| HTML | The same content as Markdown, styled with the dashboard's own red/white/black palette and typefaces, every claim superscript-linked to its evidence anchor | LIVE, built and tested against a fixture report [BUILDLOG] |
| PDF | HTML printed via headless Chrome, a real PDF verified to render and start with the correct file signature | LIVE, built and tested against a fixture report [BUILDLOG] |
| XLSX | Twelve sheets (Discovery, Why it matters, Evidence, Numbers, Timeline, Hypotheses, Tests, ACH, Contradictions, Sources, Metrics, Run log), signal-red header, frozen panes, autofilter, conditional fill on the ACH sheet | LIVE, built and tested against a fixture report [BUILDLOG] |
| CSV bundle | One UTF-8-with-BOM CSV per table, zipped as `NextSignal_<SYMBOL>_<timestamp>.zip` | LIVE, built and tested against a fixture report [BUILDLOG] |

File names across every format follow the pattern `NextSignal_<SYMBOL>_<YYYYMMDD-HHMM>.<ext>`, and every export's own test suite asserts that no output file contains the em dash or en dash characters, the same zero-tolerance rule this research document itself follows throughout.

### 20.4 The voice analyst: live, grounded, and already caught two of its own bugs

The voice analyst is the one component in this section that should be described as unambiguously live rather than as built-but-unexercised, because it has already been run against the real Sarvam API, not only against a mock. It was ported, not written from scratch, from the user's own `ai-healthcare platform` project: seven low-level modules (`sarvam_chat.py`, `sarvam_stt.py`, `sarvam_tts.py`, `sarvam_tts_ws.py`, `segmenter.py`, `fillers.py`, `turns.py`) needed no logic changes at all, since they were already domain-agnostic in the source project, while the system prompt, the tool set, the speech-pronunciation rules and the session orchestration were rewritten specifically for Next Signal's own report domain [BUILDLOG]. Table 20.4 names the ten report-domain tools the voice analyst can call, each one reading from a single in-memory Report object and each one honestly reporting that no discovery survived rather than fabricating an answer when `report.discovery` is `None`.

**Table 20.4: The voice analyst's ten report-grounded tools**

| Tool | What it returns |
|---|---|
| `get_discovery()` | The Discovery sentence and its strength label |
| `get_why_it_matters()` | The three to five Why It Matters bullets |
| `get_numbers(name?)` | A named derived number, or the full Numbers list, with formula |
| `get_evidence(claim_id?, publisher?)` | Evidence items filtered by claim or publisher |
| `get_timeline(from?, to?)` | Timeline events within an optional date range |
| `get_counterargument()` | The chosen Counterargument and its own supporting evidence |
| `get_falsification()` | The Falsification Condition, verbatim |
| `get_strength()` | The strength label and its five-term reasoning breakdown |
| `get_killed_hypotheses()` | The kill log, with reasons |
| `get_method()` | Stages run, runtime, sources hit |

The grounding rule enforced on top of these tools is the same one stated in the system prompt verbatim: every fact spoken, numbers, dates, names, sources, statuses, must come from a tool result inside the conversation, the analyst leads with a direct one-sentence answer, names its source in plain words when it states a number, never gives investment advice or a price target, and describes the evidence and the strongest counterargument before the falsification condition when asked why the system believes something. The grounding is checked mechanically, not only by prompt instruction: every final reply is post-checked against `guards.stray_numbers` before being spoken, and a reply that fails is replaced with "I could not ground that answer in the report" rather than spoken anyway.

This grounding guard was itself exercised live, and the exercise found two real bugs, both already described in detail in Section 17.5 of this document because they live in the same `llm/guards.py` module the Prove-stage writer depends on: the first run of ten scripted questions against the fixture report grounded seven cleanly, with three false positives traced to the allowed-number set never scanning a `NumberBlock`'s period field or a `Falsification`'s next-check date, and to a digit-matching regex's own letter-lookbehind protection blocking legitimate digits inside the engine's own structured fields such as "Q1FY27". Both were fixed properly, not patched around, and a second live run reached nine of ten grounded cleanly, with the one remaining gap, a run's own wall-clock timestamp not yet added to the allowed-number set, logged as a known, narrow residual rather than chased further [BUILDLOG]. This is exactly the standard the brief's own explainability and robustness criteria ask for: not a claim that the voice analyst cannot be wrong, but a demonstrated, logged, two-iteration process of catching it when it is and fixing the actual root cause rather than suppressing the symptom.

### 20.5 Status summary for this section's components

**Table 20.5: LIVE, WIRED or PLANNED status of the dashboard, exports and voice components**

| Component | Status | Evidence |
|---|---|---|
| Dashboard shell, home page, run page, report page core panels | LIVE, built, `npm run build` and `npm run lint` clean | [BUILDLOG] |
| Market tab, Method tab, VoiceDock front-end wiring | SPECIFIED; not confirmed built in the build-log entries reviewed for this document | PLAN.md §6.4 |
| Export chain (Markdown, HTML, PDF, XLSX, CSV) | LIVE, built and tested against a fixture report; not yet exercised against a live engine run | [BUILDLOG] |
| Voice analyst session, tools, grounding guards | LIVE, live-verified against the real Sarvam API at nine of ten scripted questions grounded cleanly | [BUILDLOG] |
| A live report, produced by a real company run, feeding either the dashboard or an export | NOT YET PRODUCED | The orchestrator `pipeline/run.py` does not exist yet, as Sections 15, 17 and 19 of this document each already state |

### What this section establishes, and what it does not

- Establishes the dashboard's five routes and the report page's panel structure exactly as built, naming each panel's confirmed build status individually rather than treating the whole page as one undifferentiated claim.
- Establishes, honestly and against this writer's own initial instruction, that the export chain is built and tested today, not merely designed, while still naming the real and narrower gap that remains: no export has yet run against a live engine report, only against a fixture.
- Establishes the voice analyst as a live, already-exercised component, names its ten tools and its grounding rule, and recounts the two real guard bugs a live Sarvam API run caught and the fixes applied, as the clearest demonstration this document can offer of explainability and robustness being tested in practice rather than only claimed.
- Does not claim the Market tab, the Method tab or the VoiceDock's own front-end wiring are confirmed built, since the build-log entries available to this writer do not state so explicitly; this is named as a gap rather than silently assumed either way.
- Does not claim any dashboard panel or export has yet displayed a discovery produced by a real company run, since the orchestrator that would produce one does not exist, consistent with Sections 15, 17 and 19 of this document.
- Does not use the voice analyst's live verification to imply the rest of the pipeline is equally exercised; the voice analyst's own grounding was tested against the same fixture report every export was tested against, not against a live run either.

Words 18317, tables 39, dashes 0, exclamations 0.

## 21. Evaluation: {{EVAL:kill_rate}} of hypotheses killed, {{EVAL:anchor_precision}} of numbers anchored, {{EVAL:median_runtime}} median run

**Answer.** The evaluation harness that produces every number in this section has a fixed design (company set,
per-run metrics, a time-travel protocol, an ablation that removes the Challenge stage, and a self-scored rubric
labelled honestly as self-assessed), but as of this writing the harness has not been run: `pipeline/run.py`, the
orchestrator that wires the six already-built pipeline stages into one live pass, and `eval/*` itself do not exist
yet [BUILDLOG]. All six pipeline stages (Discover, Connect, Calculate, Reason, Challenge, Prove) are individually
built and unit tested, with 195 engine tests passing as of the most recent build-log entry [BUILDLOG], so the
harness has a complete set of stages to call once the orchestrator exists. Every quantitative claim in this section
that depends on a real run therefore carries a `{{EVAL:key}}` placeholder rather than an invented number, per the
two-pass writing rule for this section [PLAN].

This is a two-pass section. Pass 1, written here, fixes the harness design completely: the company set, every
metric the harness collects per run, the time-travel protocol, the ablation design, the self-scored rubric and its
honesty label, and the limitations of all of the above. Pass 2 replaces every `{{EVAL:key}}` placeholder with the
measured value from `model/model_outputs.json` once `eval/summarize.py`, `eval/timetravel.py` and `eval/ablation.py`
have actually run against live data [PLAN]. No number in this section is invented in the meantime; where a number
cannot yet be shown, the placeholder itself is the honest statement of that fact.

### 21.1 Why the harness exists, and what it is not

A system that is judged on discovery quality, evidence quality, novelty, temporal reasoning, cross-source reasoning,
falsifiability, explainability, robustness, and generality and autonomy [PLAN §1.3] cannot be evaluated by reading
one report and deciding it looks right. The brief itself demands that "the same system, with no company-specific
tuning, must work for every company in the track, and in a tie-break for any listed company in the same sector"
[PLAN §0.1]. The only way to show that honestly is to run the identical, unmodified code against a company set that
was not hand-picked, record what happened on every single run, and publish the aggregate, including every run that
produced nothing.

The harness is explicitly not a judge-validated benchmark. It is the team's own measurement of the team's own
system, built from the same deterministic, auditable code the system itself uses to grade its hypotheses (the
Admiralty grading and the strength rubric in `grading/`, already built and tested [BUILDLOG]). Where the harness
asks the team to score something subjectively (§21.5), that score is labelled "self-assessed" everywhere it appears
and is never presented as equivalent to a judge's score.

| Table 21.1 | What the harness is | What the harness is not |
|---|---|---|
| Scope | Measures the already-built pipeline running against real, live public sources | Does not simulate judges, does not predict a judging score |
| Numbers | Every number in deck slide S6 and this section traces to a harness output file | No number here is typed by hand from memory or impression |
| Company set | Deterministic selection rule (§21.2), recorded with the exact CSV dates used | Not a hand-picked set of companies chosen because they look good |
| Self-scored rubric | Nine criteria scored 1 to 5 by the team itself, labelled "self-assessed" | Not presented as a judge's score or a third-party audit |
| Ablation | Compares the full system against a version with the Challenge stage disabled | Does not simulate what a rival team's system would do |
| Time-travel | Replays each company a year back and checks whether predictions held | Does not predict future stock price moves; it checks a stated falsification condition only |

### 21.1.1 Which brief requirement each harness output tests

The requirements traceability matrix names specific evidence for a handful of requirements that only a real run can
produce [PLAN §1.2]. The harness is the thing that produces that evidence, not a separate instrument:

| Table 21.1.1 | Requirement | Harness output that tests it |
|---|---|---|
| R19, generality without tuning | `n_companies`, `label_counts`, `share_with_discovery` across the full N50 and TB sets (§21.2, §21.3) |
| R20, tie-break on non-NIFTY-50 names | The TB set's own results rows, run with the identical, unmodified code |
| R33, temporal reasoning | `prediction_hold_rate` and `median_lead_days` from the time-travel protocol (§21.4) |
| R16, not resting on a single document | `independent_origins` and `median_independent_origins` per run (§21.3) |
| R5, R12, R14 (Challenge, Counterargument, Evidence Strength) | `killed`, `survived`, `strength_total`, and the ablation's `ablation_overturned` (§21.5) |

### 21.2 Company set: N50 and TB, selected by a rule, not by hand

Per the harness design [PLAN §5.14.1], the company set has two parts, both defined by a rule applied to a live data
source rather than typed into a configuration file:

- **Set N50**: every row of the live NIFTY 50 constituent CSV (`niftyindices.com`, with the `archives.nseindia.com`
  fallback already proven live during the research phase [BUILDLOG]) whose `Industry` field reads `Healthcare`. As
  of the research phase this resolves to exactly five companies: Sun Pharmaceutical, Cipla, Dr. Reddy's
  Laboratories, Apollo Hospitals and Max Healthcare Institute [RB table in part-B.md §8].
- **Set TB**: the union of `ind_niftypharmalist.csv` and `ind_niftyhealthcarelist.csv`, minus whatever is already in
  N50, sorted by constituent-list order, with the first ten taken. Writer B's research found the real live list
  resolves to 19 non-NIFTY-50 names after the N50 exclusion (Abbott India, Ajanta Pharmaceuticals, Alkem
  Laboratories, Aurobindo Pharma, Biocon, Divi's Laboratories, Gland Pharma, Glenmark Pharmaceuticals, Ipca
  Laboratories, Laurus Labs, Lupin, Mankind Pharma, Piramal Pharma, Sai Life Sciences, Torrent Pharmaceuticals,
  Wockhardt, Zydus Lifesciences, Fortis Healthcare, and KIMS) [BUILDLOG], correcting the plan's planning-time
  illustrative guess of about 20 to 25 names that named four companies (Syngene, Dr Lal PathLabs, Narayana
  Hrudayalaya, Global Health or Medanta) that are not current constituents of either index.

| Table 21.2 | Set | Count | Selection rule | Status at the time of this writing |
|---|---|---|---|---|
| N50 | 5 | NIFTY 50 rows where `Industry == "Healthcare"`, read live | Resolved and used throughout the research document |
| TB | 19 available, harness takes the first 10 by CSV order | Union of `ind_niftypharmalist.csv` and `ind_niftyhealthcarelist.csv`, minus N50 | Resolved by Writer B's research; harness has not yet run against any of them |
| TB residual | {{EVAL:tb_count_used}} | Exact count the harness actually ran, once `eval/out/companies.json` exists | Pending orchestrator |

Set N50 is run with every harness pass. Set TB is run only once the harness itself exists and `eval/out/companies.json`
records which ten names were actually used and on what CSV date, per the harness's own output contract [PLAN §5.14.1].

### 21.3 Metrics collected per run

Per the harness's own design [PLAN §5.14.2], `eval/summarize.py` is specified to write `eval/out/summary.json` and
`eval/out/runs.csv` once a live orchestrator exists to generate the runs it summarises. Every field below is a
named output field in the design, not yet a measured number.

| Table 21.3 | Field | What it measures | Collected from |
|---|---|---|---|
| `runtime_s` | Wall-clock seconds for one full run | `pipeline/run.py` orchestrator timer |
| `status` | Completed, partial (hit the time budget), or failed | Orchestrator exit path |
| `documents` | Count of documents fetched and classified | `pipeline/connect.py` output |
| `sources_hit` | Distinct source hosts actually reached | HTTP client log |
| `llm_calls` | Count of calls to Sarvam (or Gemini on fallback) | `llm/router.py` call log |
| `hypotheses_total` | Count of main hypotheses proposed | `pipeline/reason.py` output |
| `killed` | Count of hypotheses killed by `apply_kill_rules` | `pipeline/challenge.py` output, already tested [BUILDLOG] |
| `survived` | Count of hypotheses that passed Challenge | `pipeline/challenge.py` output |
| `discovery_label` | Strong, Moderate, Weak, or no discovery | `pipeline/prove.py` output, already tested [BUILDLOG] |
| `strength_total` | The 0 to 10 strength score of the chosen discovery | `grading/strength.py`, already built and tested [BUILDLOG] |
| `independent_origins` | Count of distinct origin classes behind the discovery | Independence graph, built in `pipeline/connect.py` |
| `novelty` | The novelty score (penalised if the finding already appears in mainstream coverage) | Reasoning stage output |
| `numbers_total` | Count of numbers shown in the final report | `pipeline/prove.py` output |
| `numbers_anchored_verified` | Count of those numbers re-verified against the cached document text | Re-run of `docs/anchors.verify()`, already built and tested [BUILDLOG] |
| `evidence_urls_ok` | Share of evidence URLs returning HTTP 200 within 10 seconds | HEAD/GET check in the harness itself |
| `schema_valid` | Whether the output passes the Report schema validator | `schemas.py`, already built and tested [BUILDLOG] |
| `contradictions_found` | Count of contradictions the Connect/Challenge stages caught | Contradiction detector output |
| `angle_chosen` | Which Discover angle the run selected | `pipeline/discover.py` output, already tested [BUILDLOG] |

The harness aggregates these per-run fields into `n_companies`, `kill_rate` (`killed / hypotheses_total`),
`anchor_precision` (`numbers_anchored_verified / numbers_total`), `median_runtime_s`, `p90_runtime_s`,
`share_with_discovery`, `label_counts`, `median_independent_origins`, and `url_ok_rate` [PLAN §5.14.2]. These
aggregate field names are exactly the placeholders used throughout this document and the deck: `{{EVAL:kill_rate}}`,
`{{EVAL:anchor_precision}}`, `{{EVAL:median_runtime}}`, and so on.

| Table 21.4 | Placeholder | Aggregate field | Status |
|---|---|---|---|
| `{{EVAL:kill_rate}}` | `kill_rate` | Pending `eval/summarize.py` |
| `{{EVAL:anchor_precision}}` | `anchor_precision` | Pending `eval/summarize.py` |
| `{{EVAL:median_runtime}}` | `median_runtime_s` | Pending `eval/summarize.py` |
| `{{EVAL:n_companies}}` | `n_companies` | Pending `eval/out/companies.json` |
| `{{EVAL:share_with_discovery}}` | `share_with_discovery` | Pending `eval/summarize.py` |
| `{{EVAL:median_independent_origins}}` | `median_independent_origins` | Pending `eval/summarize.py` |
| `{{EVAL:url_ok_rate}}` | `url_ok_rate` | Pending `eval/summarize.py` |

### 21.4 Time-travel protocol

The design in `eval/timetravel.py` [PLAN §5.14.3] sends each N50 company's run back a year (`as_of = today minus 365
days`), takes the falsification condition and the main prediction the run produced at that simulated date, and then
checks, using today's real data, whether the prediction held, broke, or remains untestable over the following four
quarters. The point-in-time `as_of` filtering mechanism this depends on is already built and tested in
`pipeline/connect.py`'s `point_in_time_filter()`, which drops any document published after the simulated `as_of`
date and drops any undated document outright, "since an undated document cannot be placed in time, so keeping it
would leak look-ahead information into a time-travel replay" [BUILDLOG]. This is the exact mechanism the brief's
temporal-reasoning judging criterion asks for [PLAN §1.2 R33], tested in isolation before a single live time-travel
run has happened.

Separately, the same protocol computes `lead_days` for every regulator event surfaced in any run: the gap, in days,
between the regulator or market event date, the first mainstream news date (GDELT), and the company's own exchange
disclosure date. The six seed events gathered during research (E1 to E6, part-C.md and part-B.md) are exactly the
kind of case this computation is designed to date precisely, since each already has a confirmed primary filing date.

| Table 21.5 | Time-travel output | Definition | Status |
|---|---|---|---|
| `held` / `broke` / `untestable` | Outcome of the year-old prediction against today's data | `eval/timetravel.py` | Pending orchestrator and a year of live data per company |
| `prediction_hold_rate` | Share of N50 time-travel predictions that held | Aggregate of the above | `{{EVAL:tt_hold_rate}}` |
| `lead_days` | Days between earliest external record and first mainstream coverage | Per regulator event surfaced in any run | `{{EVAL:median_lead_days}}` |
| `median_lead_days` | Median of the above across the time-travel set | Secondary moneyshot number, deck S4 | `{{EVAL:median_lead_days}}` |

A genuine limitation is worth stating plainly rather than glossing over: a one-year look-back on a hackathon
timeline (the engine itself did not exist a year before 15 October 2026) means the "prediction" a time-travel run
checks is a prediction the *current* code would have made had it existed then, replayed against historical document
snapshots filtered by `as_of`, not a prediction that was actually registered a year ago. This is the standard and
correct meaning of a point-in-time backtest, and it is exactly what the literature on look-ahead bias in financial
backtesting warns must be done this way [RF methods lane, part-D.md §18], but it should never be described as "the
system predicted this a year ago" in any deliverable, because the system did not exist a year ago. The deck and
this document both describe it as "replayed," never "predicted live."

### 21.5 Ablation: removing the Challenge stage

`eval/ablation.py` [PLAN §5.14.4] runs the N50 set twice: once with the full pipeline, once with
`disable_challenge=True`, which skips the nine-test battery and the ACH matrix that `pipeline/challenge.py` already
implements and tests in isolation (`apply_kill_rules`, `run_core_tests`, `run_ach`, 9 tests passing as of the latest
build-log entry [BUILDLOG]). The ablation metric, `ablation_overturned`, counts how many of the five N50 discoveries
would have changed, or would have been reported at a higher strength than the surviving evidence supports, once the
Challenge stage is switched off. This is the single most direct, measurable demonstration of why the Challenge
stage exists at all: it is not a decorative step, it is the step that keeps a confidently wrong or sector-wide
finding from being reported as company-specific, exactly the design argument made in ARGUMENT.md §3.

| Table 21.6 | Ablation field | Definition | Status |
|---|---|---|---|
| `ablation_overturned` | Count of N50 discoveries that changed or were downgraded without Challenge | `{{EVAL:ablation_overturned}}` |
| `ablation_n_n50` | Denominator, number of N50 companies in the ablation run | `{{EVAL:n_n50}}` (expected 5, per §21.2) |
| Deck slide S6 text | "Without the Challenge stage, ${ablation_overturned} of ${n_n50} NIFTY 50 discoveries would have changed or been reported at a higher strength than the evidence supports" | Verbatim deck copy [PLAN §7.4 S6] |

### 21.6 Self-scored rubric, honestly labelled

Per the design [PLAN §5.14.5], the team itself, not the engine, scores each N50 discovery from 1 to 5 against the
nine finals judging criteria (discovery quality, evidence quality, novelty, temporal reasoning, cross-source
reasoning, falsifiability, explainability, robustness, generality and autonomy [PLAN §1.3]). This output is written
to `eval/out/rubric.csv` and is labelled "self-assessed" wherever it is shown, including in this document, the
deck's appendix slide, and any UI panel that surfaces it. This is a deliberate choice, not an oversight: a
self-score dressed up as a judge's score would itself be exactly the kind of overstated evidence-quality claim the
system is designed to catch when a company does it, and presenting one here would be a direct contradiction of the
method the rest of this document argues for.

| Table 21.7 | Rubric criterion | Who scores it | Where it is shown |
|---|---|---|---|
| Discovery quality | Team, self-assessed | `eval/out/rubric.csv`, deck appendix A2 |
| Evidence quality | Team, self-assessed | same |
| Novelty | Team, self-assessed | same |
| Temporal reasoning | Team, self-assessed | same |
| Cross-source reasoning | Team, self-assessed | same |
| Falsifiability | Team, self-assessed | same |
| Explainability | Team, self-assessed | same |
| Robustness | Team, self-assessed | same |
| Generality and autonomy | Team, self-assessed | same |

### 21.7 Hand-off: how a harness number becomes a deck number

`model/collect_outputs.py` [PLAN §5.14.6] reads `summary.json`, `runs.csv`, `timetravel.csv` and `companies.json`
from `engine/eval/out/`, and writes `model/model_outputs.json` (the flat key-value file every `{{EVAL:key}}`
placeholder in this document and every `V.*` reference in the deck resolves against) and `model/model_tables.md`
(the metric registry table, per-company results, time-travel results, ablation results, and source-catalogue counts
by origin, generated rather than hand-typed). The deck's own hash field, `V.hash`, is a SHA-1 of
`model_outputs.json` itself, printed on every deck slide's source line, so a stale number cannot silently survive a
re-run: if the harness output changes, the hash changes, and every slide that still shows the old hash is visibly
out of date. This is the same stale-figure discipline the golden rules require across every deliverable [PLAN §5
content integrity rule].

### 21.8 Limitations, stated plainly

- The harness has not run. Every number this section needs is a named, typed placeholder, not a number, and the
  assembler that builds the final research document is specified to fail outright if any `{{EVAL:` placeholder
  survives past the point where a real number should have replaced it [PLAN §4.6 step 1].
- A ten-day build calendar (11 to 25 October) does not give the time-travel protocol a genuine one-year-old
  prediction to check; it checks a replayed prediction, honestly labelled as a replay, against a point-in-time
  document filter, not a prediction actually registered a year ago (§21.4).
- The self-scored rubric is exactly that: a self-score, never presented as validated by anyone outside the team.
- `n_companies` for the headline moneyshot is expected to be 5 (the N50 set) unless the orchestrator and source
  clients are far enough along by the eval date to also run the TB set reliably; if the TB set cannot run in time,
  the moneyshot states the N50-only number plainly rather than padding the count with partial TB runs.
- Anchor precision below 100% is printed as measured, never rounded up, per the golden rule that "if the measured
  anchor precision is below 100%, print the measured value; never round up" [PLAN §2.4].

### 21.9 What a judge can check independently, without trusting any of our numbers

Every field in §21.3 is designed so a judge does not have to take the team's word for it. `schema_valid` can be
checked by opening the raw JSON report and running the same `schemas.py` Pydantic model against it, already a
tested artefact [BUILDLOG]. `numbers_anchored_verified` can be checked by clicking any number in the dashboard,
which opens the evidence drawer showing the exact verbatim passage, the page, and the source URL, a mechanism
already built in `EvidenceDrawer.tsx` and `DiscoveryHero.tsx` [BUILDLOG]. `evidence_urls_ok` can be checked by a
judge simply opening the links themselves during the fifteen-minute Q&A. This is a deliberate design choice: the
evaluation harness's aggregate numbers are a convenience for the ten-minute talk track, not the only way to verify
the claim, because every aggregate number decomposes, by construction, into individually clickable, individually
checkable evidence. A system whose aggregate score could not be decomposed this way would be making exactly the
kind of unverifiable claim the brief's own explainability criterion is designed to catch [PLAN §1.3].

This matters specifically for the moneyshot number itself. "{{EVAL:kill_rate}} of hypotheses killed" is not a
single opaque statistic; a judge who doubts it can ask to see the kill log for any one of the five N50 companies,
which names each killed hypothesis, the specific test it failed (one of the nine named in research document §16),
and the evidence that failed it. The number is a summary of fifteen or more individually auditable decisions, not a
black box.

### What this section establishes, and what it does not

- It establishes the complete design of the evaluation harness: the company set rule, every per-run metric, the
  time-travel protocol, the ablation design, and the self-scored rubric with its mandatory honesty label.
- It establishes exactly which placeholder resolves to which harness output field, so pass 2 is a mechanical
  substitution, not a re-design.
- It does not contain a single measured evaluation number, because the orchestrator and the eval scripts that would
  produce one do not exist yet as of this writing [BUILDLOG].
- It does not claim the time-travel protocol tests a prediction actually made a year ago; it tests a replayed
  prediction against point-in-time-filtered documents, and states this distinction explicitly.
- It does not present the self-scored rubric as judge-validated, anywhere, under any framing.

## 22. Risks: fourteen ways the live demo or the method could fail, each with a control

**Answer.** The plan's own pre-mortem names fourteen concrete failure modes for the live finals demo and the
research method, ranging from a 401 or 403 from the NSE API during the run (likelihood medium) to a hard-coded
company-specific logic slip reaching production (likelihood low), and pairs every one of them one to one with a
control that is either already built and tested or is a specific, named recovery action [PLAN §10]. Four of the
fourteen risks (numbers 2, 7, 9, 14) already have direct evidence in the build log that their controls work: a real
live Sarvam voice evaluation caught and fixed two grounding bugs before any judge could hear an ungrounded answer
[BUILDLOG], and the `test_no_hardcoding` guard has already caught and removed two real violations of the
no-hard-coding rule from the team's own code, twice [BUILDLOG].

### 22.1 Pre-mortem framing

A pre-mortem, per Gary Klein's technique, has a team picture that a project has already failed and work backward to
identify what could have caused that failure, rating each identified threat by severity and likelihood [RF36]. This
reframes a standard risk review: instead of asking what might go wrong, it assumes the live demo has already failed
and asks what did go wrong, building on the psychological concept of prospective hindsight, looking back from a
pre-supposed future rather than forward from the present [RF38]. The fourteen risks below were generated this way during
planning [PLAN §10], organised by where in the ten-minute finals talk track or the research method each one would
actually bite.

| Table 22.1 | Risk group | Risks in this group | When it would bite |
|---|---|---|---|
| Live data dependencies | 1, 2, 8, 9, 10 | During the live run, minutes 1:20 to 8:30 of the talk track [PLAN §11.1] |
| Time and scope control | 3, 4, 6 | During the live run, if it runs long or finds nothing |
| Venue and delivery | 5, 11 | Anywhere in the ten-minute window, independent of what the system finds |
| Content correctness | 7, 13, 14 | Any point a number, a sentence, or a line of code is shown to anyone |
| Process continuity | 12 | Across the ten-day build calendar, not on demo day itself |

### 22.2 Risk heat map (probability times impact)

Impact is read against the finals' ten-minute, live-demo, judges-pick-the-company-on-the-spot format [PLAN §1.1],
where any single failure is visible to the whole panel immediately, not recoverable quietly after the fact the way a
desk-research error could be caught before a judge ever sees it.

| Table 22.2 | Impact: Low | Impact: Medium | Impact: High |
|---|---|---|---|
| Likelihood: High | | | Risk 8 (Upstox token expired), Risk 9 (FDA Data Dashboard login) |
| Likelihood: Medium | Risk 10 (SEC user agent missing), Risk 11 (Figma partial slide), Risk 12 (context loss), Risk 13 (copy drifts into AI register) | Risk 1 (NSE 401/403/key change), Risk 2 (Sarvam rate limit), Risk 3 (run exceeds 9 minutes) | Risk 14 (hard-coded company logic slips in) |
| Likelihood: Low | Risk 6 (judges pick a non-healthcare company), Risk 5 (venue internet fails) | Risk 4 (no hypothesis survives) | Risk 7 (a number is wrong in a live report) |

Risk 14 sits in the medium-likelihood, high-impact cell because a single hard-coded company name reaching the
pipeline would directly contradict the brief's own disqualification-risk rule ("no hard-coding of company-specific
analysis" [PLAN §0.3 rule 7]), and the control for it (the `test_no_hardcoding` guard) has already found and fixed
two real instances during the build, which is evidence the likelihood is real, not merely theoretical [BUILDLOG].
Risk 7 sits in the low-likelihood, high-impact cell for the mirror reason: the quote-anchored extraction gate
(`docs/anchors.verify()`) already exists and is tested specifically to stop an unanchored number from reaching a
report at all [BUILDLOG], which pushes likelihood down, while the impact of a wrong number stated live to a judging
panel remains high regardless of how unlikely the control makes it.

### 22.3 The fourteen risks, each with its one-to-one control

| Table 22.3 | # | Risk | Likelihood | Control |
|---|---|---|---|---|
| | 1 | NSE API returns 401/403 or changes JSON keys during the finals | Medium | Cookie refresh and a BSE fallback; tolerant parsers (`.get` with defaults) and fixture tests; warm the cache the evening before [PLAN §10] |
| | 2 | Sarvam rate limit or outage | Medium | Gemini fallback on every call; low reasoning effort; LLM calls capped at about 15 per run [PLAN §10] |
| | 3 | A run exceeds nine minutes | Medium | A hard time cap forces Prove to report on whatever exists, labelled partial; the source plan is bounded to 8 presentations, 2 annual reports, 3 peers [PLAN §10] |
| | 4 | No hypothesis survives | Low to medium | An honest "no discovery survived" output with the full kill log, presented as the system working correctly, not failing; runners-up remain visible [PLAN §10] |
| | 5 | Venue internet fails | Low | Run on a mobile hotspot; if that also fails, open the latest completed run of the same company with a visible `RECORDED RUN` banner and say so plainly [PLAN §10] |
| | 6 | Judges pick a company outside healthcare | Low | The generic playbook (G1 to G6 angles), already built in `playbooks/angles.py` [BUILDLOG], handles any sector |
| | 7 | A number is wrong in a live report | Low | Quote-anchor verification drops any unanchored fact before it reaches a report; the strength grader caps a single-document claim at Weak [PLAN §10] |
| | 8 | Upstox access token expired | High | Upstox is the third source in the price chain, never the only one (NSE MCP bhavcopy, then Angel One, then Upstox, then NSE bhavcopy archive) [PLAN §1.7] |
| | 9 | FDA Data Dashboard requires a login | High | Marked PLANNED, not claimed as LIVE; FDA warning letters, import alerts and openFDA already cover the regulator lane without it [PLAN §10] |
| | 10 | SEC user agent string missing | Medium | SEC collector tagged WIRED (open item O3) until a contact string is supplied; the Dr. Reddy's dossier already shows SEC EDGAR access working once a user agent is present [BUILDLOG] |
| | 11 | Figma rate limit (429) or a partial slide during the deck build | Medium | Per-slide rebuild discipline, never a hand-patch of nodes [PLAN §7 build procedure] |
| | 12 | Context loss in a long executor session | Medium | `PLAN.md` kept as a stable copy, `build-log.md` and `DECISIONS.md` updated continuously, files written incrementally rather than held in memory [PLAN §10] |
| | 13 | Copy drifts into an AI-sounding register or uses dashes | Medium | The assembler's banned-word and dash sweeps, plus the copy-lint script already running clean on the dashboard [BUILDLOG] |
| | 14 | Hard-coded company-specific logic slips into the engine | Low | `test_no_hardcoding`, already run twice and already caught two real violations (a docstring and a default cookie-warm symbol both named a real Track D company; both fixed) [BUILDLOG] |

### 22.4 ToS and compliance notes

The source catalogue the engine reads from (23 facts, 100% VERIFIED or CORRECTED, the single cleanest lane in the
whole research phase [BUILDLOG]) distinguishes public, no-authentication endpoints (NSE index CSVs, openFDA, SEC
EDGAR, GDELT) from endpoints that require a cookie-warmed session (`nseindia.com`'s JSON API) or that returned
structural access friction during research (`nsearchives.nseindia.com`, CRISIL and ICRA's list-browsing pages,
broker PDF hosts) [BUILDLOG]. The design treats NSE's own published index-constituent CSVs and its public quote API
as the intended public surface for a retail or research client, cached on disk with the point-in-time stamp the
time-travel protocol needs (§21.4), not as a scraped private dataset; this is the same framing the brief itself
requires ("public information only, no paid or proprietary datasets" [PLAN §1.2 R21]). Where a host returned a
timeout rather than an HTTP error for an expired session, as R-E's live testing found for all three NSE hosts
checked, the fix was to widen the existing cookie-refresh-and-retry logic to also catch `httpx.TimeoutException`, not
to treat the timeout as license to retry indefinitely or to bypass the host's own access controls [BUILDLOG].

| Table 22.4 | Access pattern | Example hosts | Treatment |
|---|---|---|---|
| Public, no auth, no rate concern | NSE/NIFTY index CSVs, openFDA, SEC EDGAR | Fetched directly, cached with point-in-time stamps |
| Public, cookie-warmed session | `nseindia.com` JSON quote API | One cookie refresh and one retry on 401/403/timeout, never an unbounded retry loop |
| Public but rate-limited | GDELT | Backoff observed and respected during research [BUILDLOG] |
| Structurally blocked during research | Broker and exchange-filing PDF hosts, CRISIL/ICRA list pages | Marked WIRED or PLANNED where the live block was never resolved, never silently claimed as LIVE |

### 22.5 The no-investment-advice rule, restated as a control

The case rule is explicit: "you do not need to give an investment recommendation, and you should not" [PLAN §0.3
rule 6]. This is implemented as a control, not just a style note: the voice analyst's system prompt states plainly
that if asked for a buy, sell or hold view, or a price target, it says the report does not make investment calls
[PLAN §5.15 point 4], and the anti-hallucination guard that already exists and is tested
(`llm/guards.py`) checks for investment language alongside stray numbers before any text reaches a report or a
spoken answer [BUILDLOG]. The UI footer carries the one-line disclaimer the plan requires: "Research output for
evaluation purposes. Not investment advice." [PLAN §0.3 rule 6]. This is risk control for the single rule whose
violation carries the most direct downside (a disqualification-level rule, not a style preference), so it is
enforced at the code level, not left to a writer's or a presenter's memory on the day.

### 22.6 Recovery discipline across the ten-day build

Risk 12 (context loss in a long executor session) is worth treating at more length than a single table row allows,
because it is the risk that would otherwise make every other control meaningless: a control that exists only in one
agent's working memory is not a control at all once that agent's session ends or hits a rate limit. The build
calendar already shows this risk materialising twice in practice, not hypothetically: a batch of three research
lane agents, and later a batch of three writer agents, each failed outright on a session-level API rate limit mid
task [BUILDLOG]. In both cases the recovery worked because the plan's own discipline was followed in advance, not
improvised afterward: `build-log.md` records the last gate passed, `DECISIONS.md` records any default taken in the
absence of an explicit instruction, and every lane and writer is instructed to write its output file incrementally
rather than holding the whole result in memory until the end [PLAN §10, §0.6]. When the writer batch failed on the
session rate limit, checking the partial-file state before concluding a total loss recovered real, usable progress
in some cases and confirmed a clean restart was needed in others, rather than guessing [BUILDLOG]. The same pattern
applied to the research lanes: a lane that had already written most of its facts before a rate limit hit kept that
work, and only the unwritten remainder needed a second dispatch [BUILDLOG]. This is the recovery procedure stated
plainly: on any interruption, read `build-log.md` for the last gate passed, read `DECISIONS.md` for any default
taken, check for a partial output file before assuming nothing was produced, and resume at the next step rather than
restarting the whole phase [PLAN §10].

### 22.7 Why fourteen risks, and not more or fewer

The pre-mortem technique does not have a fixed number of threats it must produce; fourteen is simply the count the
planning-time exercise converged on once likelihood and impact were assigned to each candidate failure mode and the
list was checked for overlap [PLAN §10]. Two risks that might appear separately in a less disciplined list were
deliberately merged here rather than split: a 401, a 403, and a changed JSON key from the NSE API are three
different symptoms of the same underlying risk (the live site's authentication behaviour is not fully under the
team's control), so they share one row and one control rather than three. The same merging logic applies to risk 9
and risk 10 (FDA Data Dashboard and SEC user agent), both of which share the same underlying shape: a public data
source that requires a credential or a configuration step the team does not yet have, handled by the same
honest-labelling control (mark it WIRED or PLANNED, never LIVE, until the credential exists) rather than by
pretending the access problem has been solved.

### What this section establishes, and what it does not

- It establishes the full pre-mortem framing, the probability-by-impact heat map, and the one-to-one risk-to-control
  table for all fourteen risks named in the plan.
- It establishes, with build-log evidence, that at least four of the fourteen controls have already caught a real
  problem during the build itself, not merely in theory.
- It establishes the ToS and compliance posture for every source class the engine touches, and the no-investment-
  advice rule as an enforced code-level control, not a style guideline.
- It does not claim every risk's control has been proven under live finals conditions; several (venue internet
  failure, Figma rate limits, the FDA Data Dashboard gap) remain untested until the actual demo day.
- It does not add any risk beyond the fourteen named in the plan, since the plan's own pre-mortem is treated as
  authoritative for this section.

## 23. Build plan: from a blank folder on 11 October to a live demo on 25 October

**Answer.** The calendar runs fourteen days from a blank folder on 11 October to the finals on 25 October, with a
research deliverable gate on 14 October, an MVP freeze on 17 October, a case-mandated Round 1 PDF submission on 19
October, and a Figma deck finished by 23 October [PLAN §3.1]. As of this writing, the research lanes, verification
pass, and five of six writers are complete or in progress, all six engine pipeline stages exist with 195 tests
passing, the voice analyst is live-verified at 9 of 10 grounded answers against a real Sarvam call, and the Round 1
PDF is already built and verified at two pages [BUILDLOG]; the orchestrator (`pipeline/run.py`), most source
clients beyond NSE and market data, the export formatters beyond what already exists, the evaluation harness, and
the Figma deck itself remain [BUILDLOG].

### 23.1 The calendar as a Gantt, read as a table

| Table 23.1 | Date | Phase | Output | Gate |
|---|---|---|---|---|
| Sat 11 Oct | R0 setup, R1 research lanes start, P0 data-access spikes | `research/raw/*`, `engine/spikes/*.md` | G-R0 |
| Sun 12 Oct | R1 lanes finish, R2 verification, R3 writers A and B start | Verified raw files | G-R1 |
| Mon 13 Oct | R3 writers C, D, E, F; P1 engine data layer | Parts A to F | |
| Tue 14 Oct | R4 assemble, critique, polish, research PDF | `next-signal-research.md` and `.pdf` | G-R (research complete) |
| Wed 15 Oct | P2 pipeline and grading, W1 frontend shell | Engine end to end on one company | G-P2 |
| Thu 16 Oct | P3 exports and voice, W2 report dashboard | Dashboard renders a real run | G-P3 |
| Fri 17 Oct | P4 eval harness on 15 companies, MVP freeze | `engine/eval/out/summary.json` | G-MVP |
| Sat 18 Oct | S1 Round 1 PDF draft, demo video script | `round1/*.pdf` draft | |
| Sun 19 Oct | S2 Round 1 polish, user submits on Unstop before 23:59 | `IdeaForge_TrackD_Round1.pdf` | G-S (user submits) |
| Mon 20 Oct to Wed 22 Oct | D0 to D5 Figma deck, P5 hardening | Figma deck | G-D |
| Thu 23 Oct | Shortlist announced, D6 final QA, F1 Q&A bank | | |
| Fri 24 Oct | F2 rehearsal, five live runs on random track companies, timed | Rehearsal log | G-F |
| Sat 25 Oct | Finals | | |

### 23.2 Milestones and gates (G-R0 through G-F)

| Table 23.2 | Gate | What it checks | Status as of this writing |
|---|---|---|---|
| G-R0 | Setup files exist, `ARGUMENT.md` has all six required bullets, build-log has SKILL T1 and T2 lines [PLAN §4.1] | Passed [BUILDLOG] |
| G-R1 | Every raw lane has at least 40 fact rows (60 for company files), at least 85% VERIFIED or CORRECTED, no duplicate S-IDs [PLAN §4.2] | Passed with residuals on five of ten lanes, accepted rather than re-dispatched for likely diminishing returns [BUILDLOG] |
| G-R2 | A 20% random spot-check of VERIFIED rows holds; pass rate at least 90% per lane or the lane re-runs once [PLAN §4.3] | Complete; every sampled mismatch was fixed, not merely flagged [BUILDLOG] |
| G-R | 60,000 words, 130 tables, zero banned words or dashes, zero `{{EVAL:` placeholders at final assembly, primary-source share at least 55% [PLAN §4.0] | In progress; writers A, B, C complete, writer F (this part) in progress, writer D and E in progress [BUILDLOG] |
| G-P2 | The engine runs end to end on one company | Not yet reached; the orchestrator does not exist yet, though all six stages it would call are individually built and tested [BUILDLOG] |
| G-P3 | The dashboard renders a real run, exports work | Exports (MD, HTML, PDF, CSV, XLSX, SVG) are built and verified against a fixture report; voice is live-verified; the dashboard itself builds cleanly, but a real (non-fixture) run has not rendered yet [BUILDLOG] |
| G-MVP | The eval harness runs on 15 or more companies, MVP freeze | Not yet reached; `eval/*` does not exist yet [BUILDLOG] |
| G-S | User submits the Round 1 PDF on Unstop | PDF is built and verified (two pages, 244 KB, all content checks pass); the Unstop submission itself is a user action (open item O5) [BUILDLOG] |
| G-D | The Figma deck is complete | Not yet started |
| G-F | Rehearsal: five live runs on random track companies, timed | Not yet reached |

### 23.3 Team roles

| Table 23.3 | Member | Institution | Role | Speaking split (finals) |
|---|---|---|---|---|
| Harsh Kawatra | Delhi Technological University | Team lead | S1, S2, and the live run [PLAN §1.5, §11.1] |
| Gursimran Kaur | Guru Gobind Singh Indraprastha University | Member | S5, S6 [PLAN §1.5, §11.1] |

The team name used throughout every deliverable is Team IdeaForge, the same name these three members have used
across four prior projects (BeyondTech, SwasthyaGrid, Maudrik, HarvestBox), not a name coined for this case [PLAN
§1.5]. Confirming it for the ATMOS submission remains open item O1 until the user answers it, and the Round 1 file
name (`IdeaForge_TrackD_Round1.pdf`) already assumes the default [PLAN §1.5, §12].

### 23.4 What is actually built, as of this writing, versus what remains

The build-log, not the plan's original day-by-day estimate, is the authoritative record of what exists right now
[BUILDLOG]. Stating this honestly matters for the same reason the LIVE, WIRED and PLANNED honesty tags matter
throughout this document: a build plan that claims more progress than exists would itself be exactly the kind of
unverifiable claim the system is built to catch in a company's own disclosures.

| Table 23.4 | Done | Remaining |
|---|---|---|
| All 10 research lanes attempted, verification pass complete | Writers D and E (sections 10 to 20) finishing; this part (writer F) in progress |
| All six pipeline stages built and unit tested (195 engine tests passing) | `pipeline/run.py`, the orchestrator that wires the six stages to the real LLM client, event bus, and timeout/budget handling |
| Full export chain built and verified (MD, HTML, PDF, CSV, XLSX, SVG) against a fixture report | Rendering exports against a real, non-fixture engine run |
| Voice analyst ported, rewritten for this case, and live-verified at 9 of 10 grounded against a real Sarvam call | The remaining voice eval script (10 scripted Q&A pairs) and a live-demo rehearsal |
| Round 1 solution PDF built, verified, two pages, all content checks pass | The user's own Unstop submission (open item O5) |
| Most of the Next.js dashboard built and builds cleanly | A few source clients (`sources/bse.py`, regulator clients beyond NSE and market data), `docs/pdf.py`, `docs/xbrl.py` |
| Universe loader, angle-scoring playbooks, grading modules (Admiralty, strength, ACH, falsify) all built and tested | `eval/*` (summarize, timetravel, ablation, the self-scored rubric collector) |
| | The Figma deck itself (`deck/*`), not yet started |

### 23.5 Three Horizons, for what comes after the hackathon

The Three Horizons framework, drawn from the skill's own framework catalogue and applied here to what the team
would do with Next Signal beyond the 25 October finals rather than to a financial forecast [ARGUMENT.md §6], frames
the build plan's own end point as a beginning, not a finish line:

| Table 23.5 | Horizon | Time frame | What it looks like for Next Signal |
|---|---|---|---|
| Horizon 1: sustain the current build | Immediate, post-finals | Harden the source clients that are currently WIRED rather than LIVE (SEC EDGAR once a user agent string exists, the FDA Data Dashboard once a login path exists), close the orchestrator, and run the eval harness properly across the full N50 and TB universe rather than the MVP's smaller slice |
| Horizon 2: extend the method | Months | Extend the sub-industry playbook approach beyond Track D's two sub-industries (pharma, hospitals) to the other tracks the brief mentions are judged on the same nine criteria, reusing the deterministic metric library and the Challenge stage's nine-test battery with new angle catalogues rather than new architecture |
| Horizon 3: a standing research tool | Longer term | A point-in-time, auditable research agent that any analyst (not just a hackathon judge) could run against any listed company on public data alone, with the same no-investment-advice boundary this case requires, kept because it is the right boundary for a tool like this, not only because the brief asks for it |

Horizon 1 is the only one with a hard deadline attached to it in this plan (25 October); Horizons 2 and 3 are stated
here as honest forward-looking intent, not as commitments the team is making to the judges, since the brief itself
does not ask for a product roadmap beyond the finals.

### What this section establishes, and what it does not

- It establishes the full fourteen-day calendar as a Gantt-style table, the nine named gates from G-R0 to G-F, the
  three team members' roles and speaking split, and a Three Horizons framing for what comes after the finals.
- It establishes, citing the build log directly, which gates have actually been passed as of this writing (research
  lanes complete, verification complete, five of six writers in progress or complete, all six engine pipeline
  stages built and tested, the voice analyst live-verified, the Round 1 PDF built) versus which remain (the
  orchestrator, most source clients beyond NSE and market data, the exports against a real run, the evaluation
  harness, and the Figma deck).
- It does not claim G-P2, G-P3, G-MVP, G-D or G-F have been reached, because they have not been reached as of this
  writing.
- It does not treat Horizon 2 or Horizon 3 as a promise to the judges; the brief does not ask for a post-hackathon
  roadmap, and this section is explicit that those horizons are honest forward intent, not a commitment.

## 24. Slide blueprint: eight slides carry the argument

**Answer.** The finals deck runs exactly eight slides (cover, five core content slides, one appendix, one thank
you), each built on the same 1920 by 1080 Figma Slides canvas with a chevron ribbon that re-scopes its label set
between the main five-slide section and the single appendix slide, and each slide's action-title headline carries
at least one number drawn from the evaluation harness once it exists [PLAN §7.4]. The moneyshot number
({{EVAL:kill_rate}}) appears exactly once, on slide S6, as the single largest piece of text in the deck, per the
rule that every deck carries exactly one moneyshot moment [PLAN §2.4, CLAUDE.md §1].

### 24.1 Per-slide table: action title, content blocks, data keys

| Table 24.1 | Slide | Action title (with `V.*` placeholders) | Content blocks | Data keys |
|---|---|---|---|---|
| S1 Cover | "Finding the Next Signal: an autonomous research agent for Track D" (title treatment, not a single headline sentence) | Chip row, verdict card stating the contrarian thesis in one sentence, team block, "one company, four kinds of evidence" hub-and-spoke panel with company and publisher logo slots, source line | `V.team.name`, `V.hash` |
| S2 Answer | "Summaries repeat the company; Next Signal computes the gaps, checks outside sources and killed ${V.kill_rate} of its own hypotheses before reporting one" | The brief callout, three-reason obvious-build panel, origin-mix segmented bar (the foreshadowing seed), three-reason our-build card, eight-outputs grid, "Conclusively" synthesis card | `V.kill_rate`, `V.origin_mix`, `V.company_share`, `V.n_companies`, `V.hash` |
| S3 Architecture | "${V.n_sources} public sources feed six stages named after the brief's own verbs; the core computes every number and the LLM only explains" | Sources band, stage punch-hole strip (Challenge card filled red as the differentiator), models chips, stores chips, outputs chips, tech-stack table, build-status segmented bar, median-seconds-per-stage bar chart | `V.n_sources`, `V.components`, `V.status_counts`, `V.stage_secs`, `V.hash` |
| S4 Workflow | "On ${V.demo.company}, the earliest outside record came ${V.demo.lead_days} days before the first press report, and ${V.demo.origins} independent origins agree on the core number" (alternative headline if `lead_days` is not available) | Stage-by-stage run row, swimlane timeline with the change-point marked in-chart, source-independence heat grid, contradictions-caught table | `V.demo.stage_ms`, `V.demo.timeline`, `V.demo.changepoint_label`, `V.demo.lead_days`, `V.demo.contradictions`, `V.hash` |
| S5 Falsification | "Every hypothesis faces nine tests and its strongest rival; on ${V.demo.company}, ${V.demo.killed} of ${V.demo.hyps} died and the survivor scores ${V.demo.strength_total} of 10" | ACH heat grid, nine-test battery table, funnel bar chart, browser mockup of the report page, strength-formula callout | `V.demo.killed`, `V.demo.hyps`, `V.demo.strength_total`, `V.demo.funnel`, `V.demo.numbers`, `V.hash` |
| S6 Proof and Plan | "Across ${V.n_companies} companies, the agent killed ${V.kill_rate} of its ${V.hyp_total} hypotheses, anchored ${V.anchor_precision} of numbers verbatim and ran in a median ${V.median_runtime}" | Same-code-${V.n_companies}-companies table (N50 then tie-break, strength-coloured), ablation callout, moneyshot card (the single largest text in the deck), build-plan Gantt, "Therefore" synthesis card | `V.kill_rate`, `V.anchor_precision`, `V.median_runtime`, `V.tt_hold_rate`, `V.ablation_overturned`, `V.eval_rows`, `V.hash` |
| S7 Appendix | "Appendix: the ${V.n_metrics} formulas, the grading rubric, ${V.n_sources} sources and six controlled risks behind every number in this deck" | Four quadrants: metric-library sample table, evidence-grading tables (strength components and Admiralty A to F), source-catalogue sample table, risks-and-controls heat grid with a paired badge list | `V.n_metrics`, `V.rubric_rows`, `V.n_sources`, `V.risks`, `V.hash` |
| S8 Thank You | "Compute first. Look outside. Try to kill it. Report what survives." (closing line, not a numbered finding) | Centred thank-you treatment, team block (same table as the cover, per the standing cover and thank-you style rule), three link cards (GitHub repository, two-minute demo, research deliverable PDF), logo slots, source line | `V.team.name` |

### 24.2 The ribbon, and why it changes shape once

The chevron ribbon across the top of slides S2 to S6 carries five labels (ANSWER, ARCHITECTURE, WORKFLOW,
FALSIFICATION, PROOF AND PLAN), with the active slide's tag given the primary accent fill and a dashed border per
the deck doctrine's general rule [PLAN §7.4, `_extras.js`]. Slide S7, the appendix, does not reuse this ribbon: it
switches to a separate four-tag set (A1 METRICS, A2 RUBRIC, A3 SOURCES, A4 RISKS) with no tag marked active, because
the appendix is read on demand during the Q&A, not walked through in sequence, and forcing the main ribbon onto it
would misrepresent the appendix as a sixth step in the core argument rather than a defensive-depth reference
[PLAN §7.4 S7; CLAUDE.md §1 chevron ribbon rule]. S1 and S8 carry no ribbon at all, since a cover and a closing
slide are not steps in an argument sequence.

| Table 24.2 | Slide range | Ribbon label set | Active tag |
|---|---|---|---|
| S1 | None (cover) | n/a |
| S2 to S6 | ANSWER, ARCHITECTURE, WORKFLOW, FALSIFICATION, PROOF AND PLAN | The current slide's own tag |
| S7 | A1 METRICS, A2 RUBRIC, A3 SOURCES, A4 RISKS | None (index minus one, no tag active) |
| S8 | None (thank you) | n/a |

### 24.3 Density discipline, carried from the cover to the appendix

The deck doctrine's zero-dead-space rule [CLAUDE.md §1] is not a generic instruction to add more content; it is
enforced slide by slide through the content lock in §7.5 of the plan, which fixes every panel title and every
text string verbatim before a single Figma node is built, and through a hard character budget per text box (22 pt
Inter Semi Bold averages about 11.5 pixels per character, so a 560 pixel text box holds roughly 48 characters per
line) [PLAN §7.5 step 2]. Every headline in the table above is written against the same ceiling: at most 150
characters after the `V.*` substitutions are filled in, with the skeleton allowed to shrink to 34 point type once
before the headline is shortened by hand along a defined ladder [PLAN §7.4]. This discipline exists because an
action-title headline that runs to three lines stops reading as a finding and starts reading as a paragraph, which
defeats the entire point of an action title.

The same discipline explains why S3 and S5 are named explicitly as the deck's two densest slides and are the only
two slides built with the rail-and-band motif (a thin coloured vertical bar plus a label pill marking a horizontal
content band), reserved for the two to three slides in a deck that can actually carry that much structure without
collapsing into noise [CLAUDE.md §3]. S3 carries five stacked bands (sources, stages, models, stores, outputs) and
S5 carries two side-by-side dense panels (the ACH matrix and the nine-test battery) precisely because those two
slides are doing the heaviest evidentiary lifting in the deck: S3 is the only slide that has to show the entire
architecture at once, and S5 is the only slide that has to show the entire falsification process at once. Every
other content slide (S2, S4, S6) uses a three-band or two-column layout instead, because their argument fits in
fewer, larger blocks.

Every slide also carries at least four of the deck doctrine's five type levels in a single view (a giant KPI
numeral, a coloured bold concept heading, bold inline keywords inside body text, body text, and a small source
caption), which is why the per-slide table above lists both a card-level heading and a body block for nearly every
content block rather than a single undifferentiated panel of text [CLAUDE.md §2]. The moneyshot card on S6 is the
deliberate exception that proves the rule: it carries the single largest piece of text in the entire deck
(a 110 point numeral), precisely because a deck is only allowed one moment that large, and every other slide's
type scale stays inside the 22 to 72 point range the doctrine sets for everything else [CLAUDE.md §2 type scale
table].

### What this section establishes, and what it does not

- It establishes the exact eight-slide structure, the action-title headline for each slide with its `V.*`
  placeholder set, the content blocks each slide carries, and the data keys each block reads from.
- It establishes why the ribbon's label set changes once, for the appendix slide, rather than forcing one global
  ribbon across a deck that has a structurally different section.
- It does not build any Figma node; this section is the content specification (`deck/slide-copy.md`'s source
  material) that the deck build procedure (D1 through D6) consumes, not the build itself [PLAN §7.6].
- It does not resolve any `V.*` placeholder to a real value, since those values come only from the evaluation
  harness (§21) and the demo run featured on S4 and S5, neither of which has run yet as of this writing.

## 25. Thirty questions the judges are likely to ask, and the answers

**Answer.** The thirty-question bank below applies the skill's pre-empting-weaknesses and defensive-depth
rhetorical tactics [PLAN §0.4 touchpoint T7] to every weak point this document itself has already named: the
no-hard-coding rule, the model choice, the anti-hallucination guard, the definition of independence, generality
across a sector, novelty, runtime and timeouts, the strength label, the time-travel test, data gaps, scraping
legality, the architecture choice, cross-track generality, worst-case output, and the voice analyst's grounding
rules, each framed as "the panel may ask" reported speech rather than a direct question heading, and each answer
staying inside an 80-word ceiling while citing the research section or dashboard panel it comes from.

### 25.1 The thirty questions

| Table 25.1 | # | The panel may ask | Answer | Cites |
|---|---|---|---|---|
| | 1 | How do you avoid hard-coding company-specific logic? | Company names appear only in the universe loader (reading live NSE index CSVs), test fixtures, the evaluation harness, and this research document itself. A dedicated test, `test_no_hardcoding`, scans the engine code for any other occurrence and has already caught and removed two real violations during the build. | §11 architecture, §22 risks row 14 |
| | 2 | Why Sarvam and not a frontier model? | Sarvam's `sarvam-105b` is OpenAI-compatible, supports structured JSON-schema output and tool calls, and its voice stack (`saaras`, `bulbul`) is already proven in a live production platform the team built before this hackathon. Gemini is kept only as an automatic fallback on errors or timeouts, never the primary model, and the brief states model choice is not judged. | §11 architecture, §20 output and voice |
| | 3 | What happens if the LLM invents a number? | It never reaches the user. `docs/anchors.verify()` rejects any extracted fact whose quote is not found verbatim on the cited page before it becomes a Fact object at all, and a second guard, `llm/guards.py`, scans the model's prose for any number not traceable to an allowed source before the text is shown or spoken. | §13 Connect, §17 Prove |
| | 4 | How is "independent" defined here? | An independence graph counts distinct origins of evidence, not documents: a company's own filing, call, and press release are one origin, while a regulator record, a peer's filing, and a market price reaction are three more. A discovery needs at least three distinct origin classes, never merely three documents from the same publisher. | §13 Connect, §16 Challenge |
| | 5 | What happens if the discovery turns out to be sector-wide, not company-specific? | Test T1 of the nine-test battery checks exactly this: it compares the subject's metric against a peer z-score, and a sector-wide movement kills the hypothesis outright rather than downgrading it, since a sector-wide pattern is not a company-specific discovery by definition. | §16 Challenge, §17 Prove |
| | 6 | How do you know a discovery is non-obvious? | A novelty check searches mainstream news and aggregator coverage for the same finding; a discovery already widely reported is penalised on its novelty score, since the brief explicitly asks for a non-obvious finding, not a restatement of what is already in the press. | §15 Reason, §1 judging criteria |
| | 7 | How long does a run take, and what happens on a timeout? | The orchestrator design caps a run at a hard time budget; on a timeout the system reports on whatever survived up to that point, labelled partial rather than complete, instead of either hanging or fabricating a finish. The source plan itself is bounded (about 8 presentations, 2 annual reports, 3 peers) to keep a normal run inside that budget. | §22 risks row 3, §21 evaluation runtime metrics |
| | 8 | Why should we trust the Strong, Moderate, or Weak label? | The label is a rule, not a mood: it sums fixed points for independence, source reliability, corroboration, survival through the nine-test battery, and persistence across periods, minus named penalties, against published thresholds (Strong at least 7, Moderate at least 4). The full arithmetic is shown with the label, never just the word. | §17 Prove, deck S5 formula callout |
| | 9 | What does the time-travel test actually prove? | It replays a run as if it were conducted a year ago, using only documents dated before that simulated date, and then checks against today's real data whether the stated prediction held. It proves the temporal-reasoning mechanism works on a point-in-time basis; it does not prove the system predicted anything live a year ago, since the system did not exist then. | §21.4 time-travel protocol |
| | 10 | What public data do you wish you had access to that you do not? | The FDA Data Dashboard requires a login this build does not yet have, so it is marked PLANNED rather than claimed as live; warning letters, import alerts, and openFDA cover most of the same regulator lane without it. | §22 risks row 9, §10 regulation section |
| | 11 | Is scraping the NSE website allowed? | The engine reads NSE's own published index-constituent CSVs and its public quote API, the same surface a retail user's browser reaches, with a cookie-warmed session and a bounded one-retry policy on failure, never an unbounded scrape or a bypass of access controls. The brief itself requires public information only, which this satisfies. | §22.4 ToS and compliance notes |
| | 12 | Why no vector database? | A deterministic BM25 ranking over PDF pages, paired with quote-anchored extraction, is auditable and reproducible in a way a vector index's approximate nearest-neighbour search is not; a judge can re-run the same ranking and get the same pages, which matters more here than marginal recall gains. | §11 architecture, stack ADRs |
| | 13 | How would this work for Track A instead of Track D? | The architecture is deliberately sector-agnostic: Discover's angle catalogue is organised by sub-industry playbook, not by company, and a generic six-angle playbook already exists as the fallback for any sector outside the two Track D sub-industries. Track A would need its own playbook of angles, not a new architecture. | §22 risk row 6, §12 Discover |
| | 14 | What is the worst output you have seen the system produce? | During a live voice evaluation, before the relevant guard existed, the model correctly echoed a grounded date like "27" from "Q1FY27" and the guard flagged it as a false-positive hallucination, which is a narrow, now partly fixed gap in the allowed-numbers scan rather than an invented fact; it is recorded honestly rather than omitted. | §20 output and voice, build log |
| | 15 | How does the voice analyst avoid making things up? | Every fact it states must come from a tool call grounded on the actual report object for that run; if no tool returned the information, the system prompt instructs it to say plainly that the report does not have it, and the same number-anchoring guard used in the written report also screens the model's spoken text before it is sent to text-to-speech. | §20 output and voice |
| | 16 | What exactly counts as "the Company" as an evidence source, versus an independent one? | Any document the company itself authored or paid to author (annual report, call transcript, investor presentation, press release) counts as a single company origin, regardless of how many separate documents it spans; a regulator record, a peer's own filing, or an independent market price movement are each counted as a separate, non-company origin. | §13 Connect independence graph |
| | 17 | Why only five NIFTY 50 names plus a tie-break set, rather than the whole market? | The brief restricts Track D to the NIFTY 50 healthcare constituents (five companies as of the live September 2026 rebalance) plus a tie-break requirement on any listed company in the same sector; the evaluation harness runs the identical code against both sets specifically to demonstrate generality without tuning, not to maximise company count. | §21.2 company set |
| | 18 | What happens if two sources disagree on a number? | The independence graph and the Connect stage log the disagreement as a contradiction rather than silently picking one side; the primary-source-precedence rule resolves it when a primary filing is available, as happened for Dr. Reddy's Q1 FY27 profit figure, where the SEC 6-K filing (Rs 443.5 crore) overrode a secondary aggregator's incorrect figure (Rs 1,290 crore). | §16 Challenge, part-C.md dossier |
| | 19 | Does the system give a buy, sell, or hold recommendation? | No. The brief states explicitly that an investment recommendation is not required and should not be given; the voice analyst's system prompt and the dashboard footer both state this boundary directly, and the anti-hallucination guard also screens for investment language before any text is shown or spoken. | §22.5 no-investment-advice rule |
| | 20 | How many hypotheses does a typical run propose, and how many survive? | This is exactly the moneyshot number the evaluation harness produces: {{EVAL:hyp_total}} hypotheses proposed and {{EVAL:kill_rate}} killed across the evaluated company set, never typed by hand, always read from `eval/out/summary.json` once the harness has run. | §21.3 per-run metrics, §2 the answer |
| | 21 | Why does the Challenge stage matter, concretely? | The ablation run, which disables Challenge entirely, is designed to measure exactly this: how many of the five NIFTY 50 discoveries would have changed or been reported at a higher strength than the evidence supports without it. That number is the direct, measured case for the stage's existence. | §21.5 ablation |
| | 22 | What happens if the company you are asked to run on has almost no public disclosure? | The strength grader floors a claim resting on a single document or a thin evidence base at Weak rather than inflating it, and the system reports that outcome honestly rather than manufacturing a stronger-sounding finding than the evidence supports. | §17 Prove, §22 risk row 4 |
| | 23 | How do you keep the Round 1 PDF and the research document in sync as numbers change? | Every number traces to a single source file (`model/model_outputs.json`), hashed and printed on every deliverable's source line; if a number changes, the stale-figure propagation rule requires grepping every deliverable for the old value before the change is considered done, rather than updating one slide and missing the rest. | §2 content integrity rules |
| | 24 | Why six stages named Discover, Connect, Calculate, Reason, Challenge, Prove? | Those are the brief's own verbs for what an autonomous research agent must do; naming the engine's stages after them, rather than coining new names, keeps the system's structure legible against the brief's own requirement language rather than introducing a parallel vocabulary a judge has to re-learn. | §0 document control, naming rules |
| | 25 | What is the single biggest technical risk to the live demo? | A 401, a 403, or a changed JSON key from the NSE API during the run, since the live run depends on that session working; the control is a cookie refresh and retry already tested against a mocked timeout and 401/403, plus a BSE fallback and an overnight cache warm. | §22.3 risk row 1 |
| | 26 | How do you stop the system from just restating what the company already said? | The Calculate stage runs more than forty deterministic formulas against disclosed numbers before any language model forms an opinion, specifically to surface a computed gap (a peer z-score, a change-point, a ratio trend) the company's own narrative did not state; the LLM's role is narrowly to explain an anomaly the arithmetic already found. | §14 Calculate, §4 why summarisers miss the signal |
| | 27 | Why does the deck show the Challenge card in red while every other stage card is white? | It is the one stage judges explicitly reward through the falsifiability and robustness criteria, and the visual differentiation on slide S3 is a deliberate signal that this is the stage the whole design argument rests on, not a cosmetic accent choice. | §24 slide blueprint S3 |
| | 28 | What would make you abandon a discovery mid-build? | A failure on test T6 (persistence across periods), a sector-wide result on test T1, or fewer than two independent origins all kill a hypothesis outright under `apply_kill_rules`, already built and tested; any one of these is sufficient on its own. | §16 Challenge, §21.3 killed metric |
| | 29 | How do you keep the team's own self-scored rubric from looking like a judge's score? | It is labelled "self-assessed" everywhere it appears, including the appendix slide and this document, and it is never presented as validated by anyone outside the team; the brief's actual judged criteria are scored only by the judging panel itself. | §21.6 self-scored rubric |
| | 30 | What happens if the judge asks about a company outside Track D entirely? | The generic six-angle playbook (G1 to G6), already built in `playbooks/angles.py`, exists specifically for this case and runs the identical pipeline on any sector, though with less sub-industry-specific tuning than the pharma or hospital playbooks carry. | §22 risk row 6, §12 Discover |

### 25.2 How the bank maps back to the brief's own list

The plan names sixteen specific questions the Q&A bank must include verbatim in spirit [PLAN §11.2]; this section
traces each one to its row above so the coverage is checkable rather than assumed.

| Table 25.2 | Brief-named question | Row above |
|---|---|---|
| How do you avoid hard-coding? | 1 |
| Why Sarvam and not a frontier model? | 2 |
| What happens if the LLM invents a number? | 3 |
| How is "independent" defined? | 4 |
| What happens if the discovery is sector-wide? | 5 |
| How do you know it is non-obvious? | 6 |
| How long does a run take, and what happens on a timeout? | 7 |
| Why should we trust the strength label? | 8 |
| What does the time-travel test prove? | 9 |
| What data is not public that you wish you had? | 10 |
| Is scraping NSE allowed? | 11 |
| Why no vector database? | 12 |
| How would it work for Track A? | 13 |
| What is the worst output you have seen it produce? | 14 |
| How does the voice analyst avoid making things up? | 15 |
| (sixteenth slot: independence definition detail) | 16 |

### 25.3 Why reported speech, and why an 80-word ceiling

Every question above is written as "the panel may ask: ..." rather than as a question heading, which keeps the
bank itself compliant with the golden rule against opening any section with a rhetorical question while still
letting the content be organised as genuine anticipated questions [PLAN §0.3 rule 2]. This is not a cosmetic
workaround; a bank of bare question headings would read as if the document itself were posing the questions to the
reader as a rhetorical device, exactly the kind of hook the style contract forbids, whereas "the panel may ask"
frames each one honestly as a prediction about what a specific audience, named in §2.1 of this document, is likely
to say in a fifteen-minute live Q&A.

The 80-word ceiling on every answer is a deliberate rehearsal constraint, not an arbitrary style rule. A ten-minute
talk track followed by fifteen minutes of live Q&A leaves roughly 30 seconds of spoken time per question if all
thirty were asked in sequence, and a written answer under 80 words reads aloud in about 25 to 30 seconds at a
normal conversational pace, leaving a small margin for the question itself and a brief pause. Every answer in
§25.1 was written against this constraint directly, not trimmed after the fact: each one leads with the direct
finding in its first clause, in line with the skill's pre-empting-weaknesses tactic of answering the hardest version
of a question first rather than building up to it [PLAN §0.4 touchpoint T7].

### 25.4 Defensive depth: why this bank does not dodge the hardest questions

A Q&A bank that answers only comfortable questions would itself be evidence of exactly the kind of fragility the
finals judging criteria are designed to catch. Rows 3, 9, 14, and 29 above are the clearest examples of defensive
depth applied deliberately: row 3 (what happens if the LLM invents a number) and row 14 (the worst output seen) both admit
a real, specific failure mode the team has already observed, rather than claiming the system is error-free. Row 9
(the time-travel test) states plainly what the test does not prove, not only what it does. Row 29 pre-empts the
single most obvious credibility attack on the self-scored rubric by naming the limitation before a judge can raise
it. This mirrors the same defensive-depth discipline §22 of this document applies to risk disclosure: a system
whose builders can name their own weak points precisely is more credible than one that claims to have none, and a
judging panel scoring explainability and robustness is specifically positioned to notice the difference.

### What this section establishes, and what it does not

- It establishes all thirty judge-facing questions and answers, each under 80 words, each citing a research section
  or a named engine or dashboard component, using reported-speech framing throughout ("the panel may ask").
- It establishes a direct trace from every brief-named question to its row in the bank, so the coverage requirement
  is checkable rather than assumed.
- It does not answer any question with an invented number; row 20, the only answer that needs a harness number,
  carries the same `{{EVAL:}}` placeholders as §21 rather than a typed figure.
- It does not claim any of these thirty questions is the only question judges might ask; it is a prepared floor,
  not an exhaustive ceiling, and the team is expected to reason from the same cited sections for any question not
  listed here.

## 26. Method, limits and the validation we would run next

**Answer.** This document is built on a `case-competition-deck` skill whose corpus is M&A case decks, not research
or engineering hackathons, so its case-type-specific frameworks are treated as adapted extrapolation while its
structural and rhetorical patterns (contrarian recommendation, action titles, moneyshot, foreshadowing, defensive
depth) are treated as transferring with more confidence, per the skill's own calibration-honesty guidance
[ARGUMENT.md §1]. Roughly two thirds of this document's content is desk research with citations (the sector,
regulation, and company material in sections 5 through 10) and one third is a specification of engine behaviour
that is built and tested but has not yet run end to end on live data [BUILDLOG], and this section states that split
plainly rather than letting the two blend into an undifferentiated claim of completeness.

### 26.1 The calibration-honesty note on the skill, restated for this section

The skill's "Calibration honesty" guidance asks that any adaptation of its corpus-derived patterns to a case the
corpus was not built from be flagged explicitly, not silently absorbed into the finished copy [PLAN §0.4]. This
case is a build-and-pitch research and engineering hackathon judged on discovery quality, evidence quality,
novelty, temporal reasoning, cross-source reasoning, falsifiability, explainability, robustness, and generality and
autonomy [PLAN §1.3], not an M&A deal decision. The skill's own Strategy and Operations case-type guides are the
closest fit among its six guides, used here as a hybrid: Strategy for the contrarian-design-thesis framing of §2
and §3 of this document, Operations for the six-stage process redesign framing that runs through sections 11
through 20 [ARGUMENT.md §1].

| Table 26.1 | Pattern | Confidence this document assigns it | Why |
|---|---|---|---|
| Contrarian recommendation pattern | High | Case-agnostic: any analytical argument benefits from stating the obvious answer and then showing why the less obvious one wins, regardless of case type |
| Action-title headings | High | Case-agnostic: a declarative finding with a number is a better heading than a topic label in any analytical document |
| Moneyshot (one number per deck) | High | Case-agnostic: concentrating the single strongest evaluation result in one place, rather than scattering it, works for any evidence-backed claim |
| Foreshadowing and symmetric treatment | High | Case-agnostic: planting a seed early and treating comparable units identically is a structural choice independent of case type |
| Defensive depth (pre-empting weaknesses) | High | Case-agnostic: naming your own weak points before a judge does works the same way whether the judge is scoring an M&A thesis or a research pipeline |
| M&A-specific frameworks (DCF, premium decomposition) | Not used | Explicitly replaced, not adapted, since there is no acquisition or valuation decision in this case at all |
| Strategy and Operations case-type frameworks | Medium | Adapted, not calibrated: the skill's GCCH corpus was never built from a research-tooling hackathon, so these are judgment extrapolations, not corpus-derived patterns |

### 26.2 What is desk research, and what is engine output

This document mixes two fundamentally different kinds of claim, and conflating them would itself be a credibility
risk the system is designed to catch in a company's own disclosures. Desk research (sections 5 through 10, and the
company dossiers in section 9) is a team of researchers reading public sources and citing them with R-IDs and
S-IDs, verified by a separate spot-check pass; it carries the same kind of evidentiary weight a well-sourced equity
research note carries, no more and no less. Engine output (sections 11 through 20, and the `{{EVAL:}}` placeholders
throughout sections 2, 19, and 21) is a specification of code that exists and is tested, but whose live, end-to-end
behaviour against real, uncurated public data has not yet been measured as of this writing [BUILDLOG].

| Table 26.2 | Kind of claim | Where it appears | What backs it |
|---|---|---|---|
| Desk research, cited | Sections 5 to 10 | R-ID and S-ID citations to raw lane files, spot-checked at a 20% sample rate | |
| Desk research, company-specific | Section 9 (dossiers) | Company filings, SEC 6-K exhibits, rating-agency rationales, with explicit conflict rulings | |
| Engine specification, unit tested | Sections 11 to 18, 20 | Code that exists in the repository and passes its own test suite (195 tests as of this writing) | |
| Engine specification, awaiting a live run | Sections 2, 19, 21, deck S4 to S6 | `{{EVAL:key}}` placeholders, honestly unresolved until the orchestrator and `eval/*` exist and run | |
| Illustrative, explicitly labelled | Early planning-time seeds (E1 to E6) | Re-verified against primary filings before appearing in any deliverable, per the plan's own instruction | |

### 26.3 Limits

- **The evaluation harness has not run.** Every number this document attributes to it is a named placeholder, not
  a measured figure, and will remain so until pass 2 of sections 19 and 21 replaces them from
  `model/model_outputs.json` (§21.7).
- **Several raw research lanes sit below the formal 85% verification gate** (hospitals and services at 57.4%,
  the Apollo and Max Healthcare dossiers at 34.8% and 59.5% respectively before the verification pass, methods
  literature at 65.8%), each for the same structural reason: exchange, broker, and rating-agency PDF hosts that
  block automated fetches [BUILDLOG]. The verification pass improved several of these materially (methods
  literature to 72.4%, market data to 45.5% with real corrections caught), but the underlying access constraint is
  a property of the sources, not something a further research pass alone would resolve.
- **The time-travel protocol replays, it does not predict live.** Section 21.4 states this distinction explicitly
  because it is the single most likely point at which an honest design could be misdescribed as a stronger claim
  than it is.
- **The self-scored rubric is self-scored.** It is labelled this way everywhere it appears and should never be
  read as judge-validated (§21.6).
- **A ten-day build calendar before the research gate, and twenty-five days to the finals, is a short window** for
  a system this document is honest about still needing an orchestrator, most non-NSE source clients, and the
  evaluation harness itself to complete (§23.4). The calendar's own gates (G-P2 through G-F) are the explicit,
  checkable record of how much of that window remains.

### 26.4 The validation we would run next

Beyond the fourteen days this plan covers, the validation that would most directly strengthen this document's own
claims is not more desk research but more live, adversarial running of the already-built pipeline:

| Table 26.3 | Next validation step | What it would test |
|---|---|---|
| Run the eval harness on the full N50 plus all 19 tie-break names, not just a 10-name subset | Whether `kill_rate`, `anchor_precision`, and the strength-label distribution hold steady across the full universe, or whether they were favourable only on the smaller sample the MVP deadline allowed |
| Run the time-travel protocol on a genuinely older, multi-year document set once one exists | Whether the lead-time finding (regulator or market record preceding mainstream coverage) replicates outside the six planning-time seed events it was first observed on |
| Have an analyst outside the team attempt to break a chosen company's discovery by hand | Whether the nine-test battery and the ACH matrix actually catch what a skilled human adversary would catch, not only what the automated tests check for |
| Re-run the verification spot-check on the five lanes that sit below the 85% gate, targeting their highest-value rows specifically | Whether the remaining access-blocked figures can be resolved through a different fetch strategy (PyMuPDF directly against a PDF rather than WebFetch, as already proven for the methods lane) rather than accepted indefinitely as residual |
| Have a second, independent reviewer apply the skill's critique-mode rubric to the finished document | Whether the recommendation, quantitative rigour, defensive depth, and polish dimensions hold up to a reader who did not write the document, beyond the team's own critique pass [PLAN §4.6 step 3] |

### What this section establishes, and what it does not

- It establishes the calibration-honesty statement on the skill explicitly, distinguishing which of its patterns
  this document treats as transferring with confidence versus which are adapted extrapolation.
- It establishes a clear line between desk research and engine specification throughout the whole document, and
  names exactly which sections and placeholders sit on which side of that line.
- It states the document's limits plainly, including the sub-85%-verified research lanes and the harness's
  not-yet-run status, rather than omitting them from a closing section that could otherwise read as unqualified
  confidence.
- It names five concrete next validation steps that go beyond this hackathon's own fourteen-day calendar.
- It does not claim this document, the engine, or the deck is complete; §23.4 already states plainly which gates
  remain open, and this section does not restate that as resolved.

Words: 13,295. Tables: 24. Dashes: 0. Exclamations: 0.
STATUS: PASS

## Appendix A: Bibliography

This bibliography resolves every source actually cited in the document: both direct `[S###]` tags and, far more commonly, every lane-file R-ID tag (`[RB07]`, `[RDS14]`, etc.), traced through that lane's own Facts table to the Source ID(s) it rests on. 261 of 261 resolved sources are listed below; see `research/raw/sources.md` for the full register.

| S-ID | Source | Available at | Cited via |
|---|---|---|---|
| S001 | ATMOS 2026 (2026) 'Finding the Next Signal: Participant Brief', The Wall Street Club and The Economics Association, BITS Pilani Hyderabad Campus | local docx, 0e6fade1-28b1-4037-b9c7-9ece51c365eb.docx | RA01, RA02, RA03, RA04, +3 more |
| S002 | Wikipedia (2026) 'Channel check' | https://en.wikipedia.org/wiki/Channel_check | RA08 |
| S003 | AlphaSense (2026) 'Channel checks' solutions page | https://www.alpha-sense.com/solutions/channel-checks/ | RA10 |
| S004 | Integrity Research (2026) 'Channel research firms provide high value insights for investors' | https://www.integrity-research.com/about/press-releases/channel-research-firms-provide-high-value-insights-for-investors/ | RA09 |
| S005 | GuruFocus (2026) 'Beneish M-Score - Definition, Formula and Calculator' | https://www.gurufocus.com/term/mscore | RA11, RA12 |
| S007 | Stockopedia (2026) 'Accrual Ratio' | https://www.stockopedia.com/ratios/accrual-ratio-555/ | RA17 |
| S008 | GuruFocus (2026) 'Sloan Ratio' | https://gurufocus.com/term/sloan-ratio/GCI | RA18 |
| S009 | Haas School of Business, UC Berkeley newsroom (2016) 'Prof. Richard Sloan honored with top accounting award' | https://newsroom.haas.berkeley.edu/prof-richard-sloan-honored-top-accounting-award/ | RA16 |
| S010 | Islam, Kannappan, Kiela, Qian, Scherrer, Vidgen (2023) 'FinanceBench: A New Benchmark for Financial Question Answering', arXiv:2311.11944v1 | https://arxiv.org/abs/2311.11944v1 | RA19, RA20 |
| S012 | Reddy, Koncel-Kedziorski, Lai, Krumdick, Lovering, Tanner (2024) 'DocFinQA: A Long-Context Financial Reasoning Dataset', arXiv:2401.06915v2 | https://arxiv.org/html/2401.06915v2 | RA25, RA26, RA27 |
| S013 | Chen et al. (2021) 'FinQA: A Dataset of Numerical Reasoning over Financial Data', arXiv:2109.00122 | https://arxiv.org/pdf/2109.00122 | RA22, RA23 |
| S026 | Heuer, R. J. (1999) 'Psychology of Intelligence Analysis' | https://www.cia.gov/resources/csi/static/Pyschology-of-Intelligence-Analysis.pdf | RA41 |
| S048 | Gao, Yen, Yu, Chen (2023) 'Enabling Large Language Models to Generate Text with Citations', arXiv:2305.14627, EMNLP 2023 | https://arxiv.org/pdf/2305.14627 | RA69, RA70 |
| S049 | (2026) 'Why Your Deep Research Agent Fails?', arXiv:2601.22984 | https://arxiv.org/abs/2601.22984 | RA72 |
| S080 | BioSpectrum India (2026) 'Indian pharma market to see growth rate of 7.8-8.1% in 2026: Pharmarack' | https://biospectrumindia.com/news/16/27157/indian-pharma-market-to-see-growth-rate-of-7-88-1-in-2026-pharmarack.html | RB01, RB02 |
| S083 | Indian Pharma Post (2026) 'India pharma exports rise 6.8% to USD 8.1 billion in Q1 FY27' | https://www.indianpharmapost.com/news/lite/indias-pharma-exports-rise-68-to-us-81-billion-in-q1-fy27-21351 | RB06 |
| S085 | US Food and Drug Administration, Office of Generic Drugs (2025) 'Generic Drugs Program: FY 2025 Highlights' | https://www.fda.gov/media/191187/download | RB11 |
| S090 | Drugstore News (2026) 'Dr. Reddy's gets FDA nod for generic Revlimid; Enjoys 180 days exclusivity' | https://drugstorenews.com/dr-reddys-gets-fda-nod-generic-revlimid | RB16 |
| S091 | Fierce Pharma (2019) 'Celgene opens door for early launch of Revlimid generics' | https://www.fiercepharma.com/legal/celgene-opens-door-for-early-launch-of-revlimid-generics | RB17 |
| S092 | Pharmaceutical Online (2025) 'What FDA Warning Letters Tell Us About GMP Compliance' | https://www.pharmaceuticalonline.com/doc/what-fda-warning-letters-tell-us-about-gmp-compliance-0001 | RB30, RB31, RB32 |
| S094 | Pharma Guideline (2025) 'FDA Warning Letters' | https://www.pharmaguideline.com/p/fda-warning-letters.html | RB35 |
| S096 | US Food and Drug Administration (2026) 'Import Alert 66-40: Detention Without Physical Examination of Drugs From Firms Which Have Not Met Drug GMPs' | https://www.accessdata.fda.gov/cms_ia/importalert_189.html | RB27, RB28, RB29 |
| S097 | Policy Canary (2026) 'FDA data integrity warning letters 2026' | https://policycanary.io/blog/fda-data-integrity-warning-letters-2026 | RB36 |
| S098 | DT Next (2025) 'MSME pharma companies get additional one year to upgrade facilities under Schedule M' | https://www.dtnext.in/news/business/msme-pharma-companies-get-additional-one-year-to-upgrade-facilities-under-schedule-m-818067 | RB39 |
| S099 | India Briefing (2025) 'Pharmaceutical SMEs in India Gain Time to Meet Enhanced GMP Standards Under Revised Schedule M' | https://india-briefing.com/news/india-extends-gmp-compliance-deadline-to-december-2025-35679.html | RB37, RB38, RB40 |
| S102 | GKToday (2024) 'Government Schemes, Procurement and Pricing Mechanisms for Medicines in India' | https://www.gktoday.in/government-schemes-procurement-and-pricing-mechanisms-for-medicines-in-india/ | RB42 |
| S103 | PRS Legislative Research (2026) 'Review of Role, Functions and Duties of the National Pharmaceutical Pricing Authority' | https://prsindia.org/policy/report-summaries/review-of-role-functions-and-duties-of-the-national-pharmaceutical-pricing-authority | RB43 |
| S105 | Valuebound (2024) 'What Is the Uniform Code for Pharmaceutical Marketing Practices UCPMP 2024?' | https://www.valuebound.com/resources/blog/Uniform-Code-for-Pharmaceutical-Marketing-Practices | RB46 |
| S106 | Trilegal (2024) 'The Uniform Code for Pharmaceutical Marketing Practices 2024: A potential minefield for pharmaceutical companies' | https://trilegal.com/magazine/uniform-code-for-pharmaceutical-marketing-practices-2024-potential-minefield-for-pharmaceutical-companies-insights-issue-12.html | RB48 |
| S107 | Vajiram and Ravi (2024) 'The Uniform Code for Pharmaceutical Marketing Practices (UCPMP) 2024' | https://vajiramandravi.com/upsc-daily-current-affairs/prelims-pointers/ucpmp | RB49 |
| S108 | GHY International (2026) 'US Imposes 100% Section 232 Tariffs on Patented Pharmaceuticals and Ingredients' | https://www.ghy.com/trade-compliance/us-imposes-100-section-232-tariffs-on-patented-pharmaceuticals-and-ingredients/ | RB50 |
| S109 | Investing Live (2026) 'Trump sets 2-year tariff exemption for generic drugs, then steep rises' | https://investinglive.com/news/trump-sets-2-year-tariff-exemption-for-generic-drugs-then-steep-rises | RB51 |
| S110 | Covington and Burling (2026) 'Trump Administration Announces Section 232 Tariffs on Patented Pharmaceuticals and Ingredients' | https://www.cov.com/news-and-insights/insights/2026/04/trump-administration-announces-section-232-tariffs-on-patented-pharmaceuticals-and-ingredients | RB52 |
| S112 | The Tribune (2026) 'India's CRDMO sector could gain USD 700 million annually from China+1 shift: Jefferies' | https://www.tribuneindia.com/news/business/indias-crdmo-sector-could-gain-usd-700-million-annually-from-china1-shift-jefferies/ | RB53, RB54, RB55 |
| S114 | Pearce IP (2026) 'First wave of generic Ozempic (semaglutide) approvals underway in South America, with Sandoz, Adalvo's OWOZY' | https://www.pearceip.law/2026/07/29/first-wave-of-generic-ozempic-semaglutide-approvals-underway-in-south-america-with-sandoz-adalvos-owozy/ | RB58, RB59, RB61 |
| S118 | Citeline / Generics Bulletin (2024) 'Generics Bulletin Explains: US Generics Players Enjoy Calmer Waters' | https://generics.citeline.com/GB153787/Generics-Bulletin-Explains-US-Generics-Players-Enjoy-Calmer-Waters | RB63, RB64 |
| S119 | Benzinga (2025) 'Novartis maintains outlook even as generics bite into profits' | https://www.benzinga.com/markets/earnings/25/10/48456511/novartis-maintains-outlook-even-as-generics-bite-into-profits | RB65 |
| S121 | US Securities and Exchange Commission (2026) Bristol-Myers Squibb Co, Form 10-K, FY2025 | https://www.sec.gov/Archives/edgar/data/14272/000001427226000004/bmy-20251231.htm | RB66 |
| S122 | IPWatchdog (2013) 'A Primer on Paragraph IV Certifications: Into the Belly of the Hatch-Waxman Beast, Part 1' | https://www.ipwatchdog.com/2013/04/03/a-primer-on-paragraph-iv-certifications-into-the-belly-of-the-hatch-waxman-beast-part-1/id=38384/ | RB18, RB19, RB22 |
| S123 | US Department of Health and Human Services / FDA '180-Day Generic Drug Exclusivity Under the Hatch-Waxman Amendments' | https://www.hhs.gov/guidance/sites/default/files/hhs-guidance-documents/FDA/180-Day-Generic-Drug-Exclusivity-Under-the-Hatch-Waxman-Amendments-to-the-Federal-Food--Drug--and-Cosmetic-Act.pdf | RB20 |
| S125 | Milliman (2026) 'Medicare price negotiation: A paradigm shift in Part D access and cost' | https://milliman.com/en/insight/medicare-price-negotiation-paradigm-shiftpart-d-access-cost | RB85, RB86 |
| S126 | Bajaj Asset Management Company (2026) 'Pharmaceutical and Healthcare' sector note | https://www.bajajamc.com/sites/default/files/2026-01/pharmaceutical_and_healthcare.pdf | RB76, RB79 |
| S127 | Tradejini (2026) 'India's CDMO Boom: A Rising Global Powerhouse' (citing Mordor Intelligence) | https://www.tradejini.com/blogs/indias-cdmo-boom-a-rising-global-powerhouse | RB77 |
| S128 | ICRA (2024) research note on the Indian API industry | https://www.icra.in/Media/GetNewsFile/24508 | RB78 |
| S130 | The Grey Swan / Substack (2024) 'India branded pharma sales share' | https://thegreyswan.substack.com/p/india-branded-pharma-sales-share | RB81 |
| S132 | Outlook Business (2024) 'Domestic formulations biz expected to grow 9-10% over next decade: Glenmark' | https://www.outlookbusiness.com/corporate/domestic-formulations-biz-expected-to-grow-9-10-over-next-decade-glenmark | RB83 |
| S133 | US Food and Drug Administration 'Inspection Classification Database' | https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-references/inspection-classification-database | RB24, RB25 |
| S134 | US Food and Drug Administration 'Data Dashboard: Compliance actions' | https://datadashboard.fda.gov/oii/cd/inspections.htm | RB26 |
| S140 | Medical Dialogues (2026) 'Sun Pharma's specialty business lifts Q1 profit 27%, revenue climbs to Rs 15,300 crore' | https://medicaldialogues.in/news/industry/pharma/sun-pharmas-specialty-business-lifts-q1-profit-27-revenue-climbs-to-rs-15300-crore-176249 | RB72, RB75 |
| S190 | PL India (2026) 'Fortis Healthcare', institutional equity research report | https://plindia.com/ResReport/FORH-8-8-26-PL.pdf | RC33 |
| S191 | ICICI Direct (2025) 'Narayana Hrudayalaya Q1FY26', equity research note | https://www.icicidirect.com/mailcontent/idirect_narayanahrudayalaya_q1fy26.pdf | RC35 |
| S195 | Quartr (2026) 'Krishna Institute of Medical Sciences (KIMS) Q1 26/27 earnings summary' | https://quartr.com/events/krishna-institute-of-medical-sciences-limited-kims-q1-26-27_F43vUUq3 | RC39 |
| S198 | AlphaStreet (2026) 'KIMS Hospitals posts strong revenue growth in Q3 FY26, profitability impacted by financing costs and expansion investments' | https://alphastreet.com/india/kims-hospitals-posts-strong-revenue-growth-in-q3-fy26-profitability-impacted-by-financing-costs-and-expansion-investments | RC41 |
| S204 | Multibagg (2026) 'Rainbow Q4FY26' market-pulse article | https://www.multibagg.ai/market-pulse/articles/rainbow-q4fy26-94823 | RC47 |
| S215 | Indian Pharma Post (2026) 'Medanta delivers record FY26 performance as revenue surges & profit jumps with expansion' | https://www.indianpharmapost.com/hospitals/lite/medanta-delivers-record-fy26-performance-as-revenue-surges-profit-jumps-with-expansion-20233 | RC54 |
| S217 | ICRA (2026) credit rating rationale, Jupiter Life Line Hospitals Ltd | https://www.icra.in/Rating/GetRationalReportFilePdf?id=141464 | RC60 |
| S224 | Business Today (2026) 'Here's how Apollo is expanding its hospital pipeline' | https://www.businesstoday.in/industry/pharma/story/heres-how-apollo-is-expanding-its-hospital-pipeline-532618-2026-05-21 | RC12 |
| S225 | Omnicuris (2026) 'Apollo Hospitals bed expansion Q1 FY27' medshots daily update | https://www.omnicuris.com/medshots/daily_updates/apollo-hospitals-bed-expansion-q1-fy27_13-Aug-26_14-08 | RC13 |
| S230 | Outlook Money (2025) 'CGHS rates revised: know changes and benefits, effective October 13, 2025' | https://www.outlookmoney.com/personal-finance/cghs-rates-revised-know-changes-and-benefits-effective-october-13-2025 | RC63, RC64, RC65 |
| S232 | ICICI Direct (2025) 'Hospitals: medical tourism regains momentum to bolster payer case mix', equity research blog | https://www.icicidirect.com/research/equity/blog/hospitals-medical-tourism-regains-momentum-to-bolster-payer-case-mix | RC67 |
| S233 | KPMG India (2025) 'Multi-speciality hospitals in India: evolution of hospitals deals post Covid' | https://assets.kpmg.com/content/dam/kpmgsites/in/pdf/2025/12/multi-speciality-hospitals-in-india-evolution-of-hospitals-deals-post-covid.pdf | RC66, RC94 |
| S234 | Scroll.in (2017) 'After cardiac stents, the government now caps prices of knee implants' | https://scroll.in/latest/847453/after-cardiac-stents-the-government-now-caps-prices-of-knee-implants | RC69, RC70 |
| S239 | Laex (2025) 'Ayushman Bharat PM-JAY: Latest Report Highlights (2025)', summary of National Health Authority report | https://laex.in/?p=13833 | RC34, RC80 |
| S250 | Arihant Capital (2026) 'Sun Pharmaceutical Industries Ltd company background' | https://www.arihantcapital.com/company-information/company-background/4325 | RDS01, RDS02, RDS03 |
| S251 | CRISIL Ratings (2026) 'Rating Rationale: Sun Pharmaceutical Industries Limited' | https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/SunPharmaceuticalIndustriesLimited_August%2004_%202026_RR_401035.html | RDS11, RDS12, RDS13, RDS14, +9 more |
| S252 | ICRA (2026) 'Rating rationale PDF for Sun Pharmaceutical Industries Limited' | https://www.icra.in/Rating/GetRationalReportFilePdf?id=141392 | RDS23 |
| S253 | stockanalysis.com (2026) 'Sun Pharmaceutical Industries Limited (NSE:SUNPHARMA) income statement' | https://stockanalysis.com/quote/nse/SUNPHARMA/financials/income-statement/ | RDS38, RDS39, RDS40, RDS41 |
| S254 | IANS (2026) 'Sun Pharma to acquire US-based Organon in nearly $11.75 billion deal' | https://ianslive.in/sun-pharma-to-acquire-organon-in-nearly-12-billion-all-cash-deal--20260427100229 | RDS24, RDS25 |
| S255 | 1stOncology (2025) 'Sun Pharma Completes its Acquisition of Checkpoint Therapeutics' | https://www.1stoncology.com/blog/?p=103584 | RDS29 |
| S256 | Moneylife (2025) 'US FDA Flags Sun Pharma's Halol Plant with Official Action Indicated Status amid Repeat Safety Breaches' | https://moneylife.in/article/us-fda-flags-sun-pharmas-halol-plants-with-official-action-indicated-status-amid-repeat-safety-breaches/78234.html | RDS32, RDS33, RDS34 |
| S257 | FDAnews (2024) 'Sun Pharma slapped with warning letter for Dadra plant's multiple violations' | https://fdanews.com/articles/213909-sun-pharma-slapped-with-warning-letter-for-dadra-plants-multiple-violations | RDS35 |
| S258 | Business Today (2023) 'Sun Pharma temporarily halts shipments from Mohali facility to implement US FDA-mandated measures' | https://www.businesstoday.in/amp/industry/pharma/story/sun-pharma-temporarily-halts-shipments-from-mohali-facility-to-implement-us-fda-mandated-measures-378504-2023-04-23 | RDS37 |
| S259 | Sun Pharmaceutical Industries Ltd (2024) 'Press Release: Sun Pharma Q2FY25 Financial Result' | https://sunpharma.com/wp-content/uploads/2024/10/Press-Release-Sun-Pharma-Q2FY25-Financial-Result.pdf | RDS49 |
| S260 | Sun Pharmaceutical Industries Ltd (2025) 'Press Release: Sun Pharma Q3FY25 Financial Result' | https://sunpharma.com/wp-content/uploads/2025/01/Press-Release-Sun-Pharma-Q3FY25-Financial-Result.pdf | RDS50 |
| S261 | Sun Pharmaceutical Industries Ltd (2025) 'Press Release: Sun Pharma Q4FY25 Financial Result' | https://sunpharma.com/wp-content/uploads/2025/05/Press-Release-Sun-Pharma-Q4FY25-Financial-Result.pdf | RDS52, RDS53, RDS54 |
| S262 | Angel One (2025) 'Sun Pharma Q1 FY26 Earnings Results: Net Profit Falls 20% to Rs 2,279 Crore' | https://oga-prod.angelone.in/news/market-updates/sun-pharma-q1-fy26-earnings-results-net-profit-falls-20-percent-to-rs-2279-crore | RDS55, RDS56 |
| S263 | Business Standard (2025) 'Sun Pharma Q2 net profit rises 2.5% to Rs 3,118 crore on India, EM growth' | https://www.business-standard.com/amp/companies/quarterly-results/companies-sun-pharma-q2-net-up-2-5-india-shines-us-slows-125110501386_1.html | RDS57, RDS58 |
| S264 | Sun Pharmaceutical Industries Ltd (2026) 'Press Release: Sun Pharma Q3FY26 Financial Result' | https://sunpharma.com/wp-content/uploads/2026/01/Press-Release-Sun-Pharma-Q3FY26-Financial-Result.pdf | RDS59 |
| S265 | Outlook Business (2026) 'Sun Pharma Q4FY26 cons net profit jumps 26% YoY, board declares 5% dividend' | https://www.outlookbusiness.com/corporate/sun-pharma-q4fy26-cons-net-profit-jumps-26-yoy-board-declares-5-dividend | RDS60 |
| S266 | Free Press Journal (2026) 'Sun Pharma Q1 Net Profit Up 27%, Revenue Rises 10.1% To Rs 15,183.55 Crore' | https://www.freepressjournal.in/amp/business/sun-pharma-q1-net-profit-up-27-revenue-rises-101-to-1518355-crore | RDS61, RDS62, RDS64 |
| S270 | Value Research Online (2026) 'Cipla Peer Comparison' (table includes Sun Pharma row) | https://www.valueresearchonline.com/stocks/41608/cipla-ltd/peer-comparison/ | RDS73 |
| S271 | Motilal Oswal (2026) 'Sun Pharmaceutical Industries Ltd Peer comparison' | https://www.motilaloswal.com/share-market/peer-comparison/sun-pharmaceutical-industries-ltd | RDS72 |
| S274 | stockanalysis.com (2026) 'Sun Pharmaceutical Industries Limited (NSE:SUNPHARMA) balance sheet' | https://stockanalysis.com/quote/nse/SUNPHARMA/financials/balance-sheet/ | RDS45 |
| S275 | Business Standard (2021) 'Sun Pharma Q4 PAT jumps 124% to Rs 894 cr' (includes FY21 full-year commentary) | https://www.business-standard.com/amp/article/news-cm/sun-pharma-q4-pat-jumps-124-to-rs-894-cr-121052701167_1.html | RDS44 |
| S276 | NSE corporate filings archive (2026) 'Board Meeting Outcome with annexures, 31 Jul 2026' (SR BC & CO LLP limited review report) | https://nsearchives.nseindia.com/corporate/SUNSEC_31072026142955_BMOutcomewithannexures31072026.pdf | RDS08 |
| S277 | Indian Pharma Post (2026) 'Sun Pharma reinforces innovation focus with Rs 33,500 crore cumulative R&D investment' | https://www.indianpharmapost.com/rd/lite/sun-pharma-reinforces-innovation-focus-with-rs-33500-crore-cumulative-rd-investment-20888 | RDS42, RDS43 |
| S278 | Business Standard (2026) 'Innovative portfolio likely to maintain growth momentum for Sun Pharma' | https://www.business-standard.com/amp/markets/news/innovative-portfolio-likely-to-maintain-growth-momentum-for-sun-pharma-125110601706_1.html | RDS67 |
| S280 | Biospectrum India (2025) 'Sun Pharma to acquire Checkpoint Therapeutics for $355 M' | https://www.biospectrumindia.com/news/16/25804/sun-pharma-to-acquire-checkpoint-therapeutics-for-355-m.html | RDS31 |
| S282 | chemindigest.com (2025) 'Sun Pharma's U.S. Innovative Drug Revenue Surpasses Generics' | https://chemindigest.com/sun-pharma-u-s-innovative-drug-revenue-surpasses-generics/ | RDS63, RDS70, RDS71 |
| S310 | Screener.in (2026) 'Cipla Ltd consolidated financials' | https://www.screener.in/company/CIPLA/consolidated/ | RDC01, RDC10, RDC11, RDC12, +4 more |
| S311 | NSE (2026) 'Integrated Filing (Ind AS), Cipla Limited, 13 May 2026' | https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_INDAS_157349_13052026205507_iXBRL_WEB.html | RDC02 |
| S312 | CARE Ratings Ltd / CareEdge Ratings (2025) 'Press Release: Cipla Limited, 26 August 2025' | https://www.careratings.com/upload/CompanyFiles/PR/202508120858_Cipla_Limited.pdf | RDC03, RDC04, RDC05, RDC08, +6 more |
| S313 | NSE (2025 to 2026) 'Cipla signed financial results and auditor appointment filings (search synthesis)' | https://nsearchives.nseindia.com/corporate/CIPLA_13052025140043_SignedIntimationforAuditorsappointmentSigned.pdf | RDC06, RDC07 |
| S314 | Indian Pharma Post (2026) 'Cipla achieves highest-ever annual revenue of Rs. 28,163 crore in FY26' | https://www.indianpharmapost.com/news/lite/cipla-achieves-highest-ever-annual-revenue-of-rs-28163-crore-in-fy26-20213 | RDC15, RDC16, RDC17, RDC18, +2 more |
| S315 | Angel One (2025 to 2026) 'Cipla Q1 FY26 and Q3 FY26 earnings results articles' | https://oga-prod.angelone.in/news/stocks/cipla-q3-fy26-earnings-results-out-india-growth-offsets-us-weakness-r-d-spend-rises | RDC24 |
| S318 | arthneeti.com (2026) 'Cipla Ltd Q4 FY26 earnings call analysis' | https://arthneeti.com/stocks/cipla-ltd/concall/q4-fy26-earnings-call-analysis | RDC49, RDC50 |
| S319 | Business Today (2026) 'Despite Q4 net profit crash, Cipla shares rose 11% in two sessions: factors behind the rally' | https://www.businesstoday.in/markets/stocks/story/despite-q4-net-profit-crash-cipla-shares-rose-11-percent-in-two-sessions-factors-behind-the-rally-531413-2026-05-14 | RDC39 |
| S321 | Indian Pharma Post (2026) 'Cipla delivers strong Q1 FY27 performance, posts Rs. 7,119 crore revenue'; DSIJ Insights (2026) 'Pharma Major Cipla Reports Q1 FY27 Results' | https://www.indianpharmapost.com/news/cipla-delivers-strong-q1-fy27-performance-posts-rs-7119-crore-revenue-21050 | RDC41 |
| S322 | Indian Pharma Post (2026) 'Cipla posts Q1 FY27 revenue of Rs 7,119 crore, India business grows 12%' | https://www.indianpharmapost.com/news/lite/cipla-posts-strong-q1-fy27-performance-to-record-highest-ever-one-india-quarterly-revenue-21050 | RDC42, RDC43, RDC46 |
| S324 | ScanX (2026) 'Cipla posts record Q1FY27 revenue of INR 7,119 Cr amid margin dip' | https://scanx.trade/stock-market-news/companies/cipla-reports-record-q1-fy27-revenue-of-inr-7-100-crore-targets-1-billion-north-america-run-rate-by-fy27/46408065 | RDC45, RDC48 |
| S325 | Sahi News (2026) 'Cipla Projects $1 Billion North America Revenue and Double-Digit India Growth for FY27' | https://sahi.com/news/cipla-projects-1-billion-north-america-revenue-and-double-digit-india-growth-for-fy27-62-PE1_CORPO | RDC47 |
| S326 | Medical Dialogues (2026) 'Cipla's Lanreotide supply in US hit after USFDA observations at Pharmathen facility' | https://medicaldialogues.in/news/industry/pharma/ciplas-lanreotide-supply-in-us-hit-after-usfda-observations-at-pharmathen-facility-162726 | RDC52, RDC53 |
| S327 | MarketScreener / Reuters (2026) 'Indian drugmaker Cipla's quarterly profit falls 57% on key drug supply crunch' | https://www.marketscreener.com/news/indian-drugmaker-cipla-s-quarterly-profit-falls-57-on-key-drug-supply-crunch-ce7e5bdad989f121 | RDC54, RDC55 |
| S328 | Business Today (2023) 'Cipla stocks slump 8% after US FDA warning letter' | https://www.businesstoday.in/industry/pharma/story/cipla-stocks-slump-8-after-us-fda-warning-letter-406919-2023-11-23 | RDC56, RDC57 |
| S329 | IndiaInfoline (2025) 'Cipla's Bengaluru plant gets USFDA VAI status' | https://indiainfoline.com/news/business/ciplas-bengaluru-plant-gets-usfda-vai-status | RDC59 |
| S331 | Sahi News (2026) 'Cipla Receives USFDA Approval For Generic Advair Diskus In All Three Strengths' | https://www.sahi.com/news/cipla-receives-usfda-approval-for-generic-advair-diskus-in-all-three-strengths-62-PE1_CORPO | RDC64 |
| S333 | Value Research Online (2026) 'Cipla Ltd Peer Comparison' | https://www.valueresearchonline.com/stocks/41608/cipla-ltd/peer-comparison/ | RDC66, RDC67 |
| S334 | Angel One (2026) 'Cipla Q3 FY26 Earnings Results Out: India Growth Offsets US Weakness, R&D Spend Rises' | https://oga-prod.angelone.in/news/stocks/cipla-q3-fy26-earnings-results-out-india-growth-offsets-us-weakness-r-d-spend-rises | RDC68 |
| S370 | Arihant Capital (2026) 'Dr Reddys Laboratories Ltd, company background' | https://www.arihantcapital.com/company-information/company-background/815 | RDD01, RDD02, RDD03 |
| S371 | US SEC EDGAR (2026) 'DR REDDYS LABORATORIES LTD filings, CIK 0001135951' | https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001135951 | RDD04 |
| S372 | US SEC data.sec.gov (2026) 'EDGAR submissions JSON for CIK0001135951' | https://data.sec.gov/submissions/CIK0001135951.json | RDD05 |
| S373 | ICRA Limited (2024) 'Rating rationale, Dr. Reddy's Laboratories Ltd' | https://www.icra.in/Rating/GetRationalReportFilePdf?id=140199 | RDD06 |
| S374 | ICRA Limited (2026) 'Credit perspective / rating history, Dr. Reddy's Laboratories Ltd' | https://www.icra.in/Credit_Perspective/Details?id=40334 | RDD08 |
| S376 | roic.ai (2026) 'Dr. Reddy's Laboratories Limited, Q1 2027 transcript index' | https://roic.ai/quote/RDY/transcripts/2026-year/1-quarter | RDD10 |
| S378 | NSE archives (2026) 'DRREDDY stock exchange intimation, 13 Aug 2026' | https://nsearchives.nseindia.com/corporate/DRREDDY_13082026164551_Stock_Exchange_intimation_dated_13082026.pdf | RDD12 |
| S381 | US SEC (2026) 'DR REDDYS LABORATORIES LTD, Form 6-K exhibit 99.2, Q1 FY27 results press release' | https://www.sec.gov/Archives/edgar/data/0001135951/000157587226000520/rdy0925_ex99-2.htm | RDD15, RDD16, RDD17, RDD18, +3 more |
| S382 | Dr. Reddy's Laboratories Ltd (2026) 'FINAL Earnings Release Q1FY27 220726' | https://www.drreddys.com/cms/sites/default/files/2026-07/FINAL_Earnings_Release_Q1FY27_220726.pdf | RDD22 |
| S383 | IndMoney (2026) 'Why Dr. Reddy's Share Fell to a 52-Week Low: The Bigger Problem Behind Q1 FY27 Results' | https://www.indmoney.com/blog/stocks/why-dr-reddy-share-is-falling | RDD23 |
| S384 | Indian Pharma Post (2026) 'Dr Reddy's Q1 FY27 net profit at Rs. 435 crore' | https://www.indianpharmapost.com/news/dr-reddys-q1-fy27-net-profit-at-rs-435-crore-21037 | RDD24 |
| S385 | Free Press Journal (2026) 'Dr Reddy's Q1 FY27 Consolidated Profit Declines 69% To Rs 443.5 Crore, Revenues Dip 6%' | https://www.freepressjournal.in/business/dr-reddys-q1-fy27-consolidated-profit-declines-69-to-4435-crore-revenues-dip-6 | RDD25 |
| S386 | sahi.com (2026) 'Dr. Reddy's To Resume Semaglutide Supply By November Targeting 6 to 7 Million Pens' | https://www.sahi.com/news/dr-reddy-s-to-resume-semaglutide-supply-by-november-targeting-6-7-million-pens-545961-PE1_C | RDD26 |
| S387 | Business Today (2026) 'Dr Reddy's shares: Semaglutide woes to trigger EPS cuts; Should you buy, sell or hold?' | https://www.businesstoday.in/markets/stocks/story/dr-reddys-shares-semaglutide-woes-to-trigger-eps-cuts-should-you-buy-sell-or-hold-542580-2026-07-13 | RDD27 |
| S389 | Indian Pharma Post (2026) 'Dr Reddy's becomes first to secure Health Canada nod for generic Semaglutide injection' | https://www.indianpharmapost.com/regulatory/lite/dr-reddys-becomes-first-to-secure-health-canada-nod-for-generic-semaglutide-injection-20016 | RDD29 |
| S390 | sahi.com (2026) 'Dr Reddy's launches first G7 generic Semaglutide in Canada targeting $2.9B market' | https://www.sahi.com/news/dr-reddy-s-launches-first-g7-generic-semaglutide-in-canada-targeting-2-9b-market-545961-PE1_C | RDD30 |
| S392 | Daily Excelsior / syndicated Economic Times (undated) 'Dr Reddy's gets FDA nod for generic Revlimid; Enjoys 180 days exclusivity' | https://www.dailyexcelsior.com/?p=1229613 | RDD32 |
| S399 | FilingReader Intelligence (2026) 'USFDA issues seven observations to Dr. Reddy's Hyderabad biologics plant' | https://filingreader.com/news-wire/mumbai/2026-06-25/usfda-issues-seven-observations-to-dr-reddys-hyderabad-biologics-plant | RDD39 |
| S400 | basispointinsight.com (2025) 'Dr. Reddy's Receives Two Observations From USFDA For New York API Facility' | https://www.basispointinsight.com/Story/dr--reddy-s-receives-two-observations-from-usfda-for-new-york-api-facility_e561de3169dd.html | RDD40 |
| S401 | basispointinsight.com (2025) 'Dr. Reddy's Laboratories Receives FDA Form 483 With Two Observations' | https://www.basispointinsight.com/Story/dr--reddy-s-laboratories-receives-fda-form-483-with-two-observations_9127ceaf76e2.html | RDD41 |
| S402 | Indian Pharma Post (2023) 'Dr Reddy's Bachupally biologics facility gets USFDA Form 483 with 9 observations' | https://www.indianpharmapost.com/regulatory/dr-reddys-bachupally-biologics-facility-gets-usfda-form-483-with-9-observations-14786 | RDD42 |
| S407 | Business Wire (2025) 'Dr. Reddy's Q4 and Full Year FY25 Financial Results' | https://www.businesswire.com/news/home/20250509262055/en | RDD47 |
| S409 | US SEC (2026) 'DR REDDYS LABORATORIES LTD, Form 6-K exhibit, FY2026 results commentary' | https://www.sec.gov/Archives/edgar/data/0001135951/000157587226000464/rdy0913_99-1.pdf | RDD49 |
| S411 | barchart.com (2026) 'Dr Reddy's Reports Record Revenues In Q1, Signals Steady Execution Through Transition Year' | https://www.barchart.com/story/news/33858467/dr-reddys-reports-record-revenues-in-q1-signals-steady-execution-through-transition-year | RDD86 |
| S413 | roic.ai (2026) 'Dr. Reddy's Laboratories Limited, Q1 2027 earnings call transcript' | https://roic.ai/quote/RDY/transcripts/2026-year/1-quarter | RDD53, RDD54, RDD55, RDD87 |
| S414 | Citeline / generics.citeline.com (undated) 'Dr Reddy's Growth Strategy Sets Sights On Six Spaces' | https://generics.citeline.com/GB139982/Dr-Reddys-Growth-Strategy-Sets-Sights-On-Six-Spaces | RDD56 |
| S415 | US SEC (2026) 'DR REDDYS LABORATORIES LTD, Form 6-K exhibit 99.2, FY2026 full-year results' | https://www.sec.gov/Archives/edgar/data/0001135951/000157587226000301/rdy0894_ex99-2.htm | RDD57 |
| S416 | MarketScreener (2026) 'Dr Reddy Laboratories Q4 and Full Year FY26 financial results' | https://in.marketscreener.com/news/dr-reddy-laboratories-reddya-s-q4-full-year-fy26-financial-results-ce7f5bdeda8cf62c | RDD58, RDD59 |
| S417 | Free Press Journal (2026) 'Dr Reddy's Laboratories Q4 Profit Slumps 86% To Rs 220 Crore As Lenalidomide Adjustment, Impairments Weigh On Margins' | https://www.freepressjournal.in/business/dr-reddys-laboratories-q4-profit-slumps-86-to-220-crore-as-lenalidomide-adjustment-impairments-weigh-on-margins | RDD60, RDD61 |
| S418 | NSE archives (2026) 'DRREDDY investor presentation, signed 12 May 2026' | https://nsearchives.nseindia.com/corporate/DRREDDY_12052026183828_SEintimation12052026_Investor_presentation_signed.pdf | RDD62 |
| S420 | IANS (2026) 'Dr Reddy's Q3 profit falls 14 pc to Rs 1,210 crore' | https://ianslive.in/dr-reddys-q3-profit-falls-14-pc-to-rs-1210-crore--20260121193831 | RDD64 |
| S421 | hdfcsky.com (2026) 'Dr Reddy's Q2 FY26 results: revenue rises 9.8% YoY to Rs 8,805 crore' | https://hdfcsky.com/news/dr-reddys-q2-fy26-results-revenue-rises-9-8-percent-yoy-to-rs8805-crore | RDD65 |
| S422 | AngelOne (2025) 'Dr Reddy Q1FY26 Earnings: Profit Flat at Rs 1,409 Crore Despite 11% Revenue Growth' | https://www.angelone.in/news/share-market/dr-reddy-q1fy26-earnings-profit-flat-at-rs-1409-crore-despite-11-percent-revenue-growth | RDD66 |
| S423 | Business Standard (2025) 'Dr Reddys Lab Q4 PAT rises 22% YoY' | https://www.business-standard.com/markets/capital-market-news/dr-reddys-lab-q4-pat-rises-22-yoy-125051000332_1.html | RDD67 |
| S424 | 5paisa (2025) 'Dr. Reddy's Q3FY25 Revenue Hits Record, Profit Up 2.5%' | https://www.5paisa.com/index.php/news/dr-reddys-q3fy25-revenue-hits-record-profit-up-25 | RDD68 |
| S425 | Business Standard (2024) 'Dr Reddy's Q2 PAT slides 15% YoY to Rs 1,255 crore' | https://www.business-standard.com/markets/capital-market-news/dr-reddy-s-q2-pat-slides-15-yoy-to-rs-1-255-crore-124110501061_1.html | RDD69 |
| S426 | AlphaStreet India (2024) 'Dr Reddy's Laboratories Ltd Q2FY25: 9% fall in profits' | https://alphastreet.com/india/dr-reddys-laboratories-ltd-q2fy25-9-fall-in-profits/amp | RDD70 |
| S427 | Seeking Alpha (2025) 'Dr. Reddy's Q4 and Full Year FY25 Financial Results' | https://seekingalpha.com/pr/20098770-dr-reddy-s-q4-and-full-year-fy25-financial-results | RDD71 |
| S428 | US SEC (2025) 'DR REDDYS LABORATORIES LTD, Form 20-F, fiscal year 2025' | https://www.sec.gov/Archives/edgar/data/1135951/000157587225000393/rdy-20250331.htm | RDD72, RDD79 |
| S429 | US SEC (2024) 'DR REDDYS LABORATORIES LTD, Form 6-K exhibit, FY2024 full-year results' | https://www.sec.gov/Archives/edgar/data/1135951/000157587224000496/drr0598_ex99-2.htm | RDD73, RDD74, RDD77, RDD78 |
| S430 | Arihant Capital (2026) 'Apollo Hospitals Enterprise Ltd', company background | https://www.arihantcapital.com/company-information/company-background/636 | RDA01, RDA02 |
| S431 | Morningstar (2026) 'Apollo Hospitals Enterprise Ltd' security page; Screener.in (2026) 'Apollo Hospitals Enterprise Ltd' company page | https://www.morningstar.com.au/investments/security/nse/apollohosp ; https://www.screener.in/company/APOLLOHOSP/consolidated/ | RDA03 |
| S433 | Investywise (2026) 'Apollo Hospitals: Appoints New Statutory Auditors for Five-Year Term' | https://www.investywise.com/?p=105963 | RDA05 |
| S434 | Investywise (2026) 'Apollo Hospitals: Approves Q1FY27 Unaudited Results, Appoints New Auditors' | https://www.investywise.com/?p=105991 | RDA06 |
| S435 | CRISIL Ratings (2026) 'Credit Bulletin: Apollo Hospitals Enterprise Limited', 29 May 2026 | https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/ApolloHospitalsEnterpriseLimited_May%2029_%202026_RR_396532.html | RDA07, RDA55, RDA56, RDA58 |
| S436 | ICRA Limited (2026) Rating rationale, Apollo Hospitals Enterprise Limited | https://www.icra.in/Rating/GetRationalReportFilePdf?id=143693 | RDA08 |
| S437 | Apollo Hospitals Enterprise Ltd (2021) 'AHEL Q4FY21 Results Release' | https://mediacdn.apollohospitals.com/sites/default/files/2025-02/ahel-q4fy21-results-release.pdf | RDA11, RDA12, RDA21, RDA62 |
| S438 | Screener.in (2026) 'Apollo Hospitals Enterprise Ltd' consolidated financials page | https://www.screener.in/company/APOLLOHOSP/consolidated/ | RDA12, RDA13, RDA15, RDA17, +4 more |
| S439 | ICICI Direct (2022) Apollo Hospitals Q1FY23 note; Apollo Hospitals Enterprise Ltd (2023) 'AHEL Q4 FY23 Earnings Update' | https://www.icicidirect.com/mailimages/IDirect_ApolloHospital_Q1FY23.pdf ; https://mediacdn.apollohospitals.com/sites/default/files/2025-02/ahel-q4-fy23-earnings-update.pdf | RDA14, RDA16 |
| S440 | United News of India (2025) 'Apollo FY25 PAT up 61pc at Rs 1,446 crore' | https://test.uniindia.com/apollo-fy25-pat-up-61pc-at-rs-1-446-crore/business-economy/news/3477901.html | RDA18, RDA34 |
| S441 | IndiaMedToday (2026) 'Apollo Hospitals posts strong Q4FY26 growth' | https://indiamedtoday.com/apollo-hospitals-posts-strong-q4fy26-growth/ | RDA20, RDA40 |
| S442 | Business Today (2026) 'Here's how Apollo is expanding its hospital pipeline' | https://www.businesstoday.in/industry/pharma/story/heres-how-apollo-is-expanding-its-hospital-pipeline-532618-2026-05-21 | RDA21, RDA23, RDA64 |
| S443 | Digital Health News (2026) 'Apollo Hospitals to Add Over 5,800 Beds in Five Years as Q1FY27 Revenue Rises 21%' | https://www.digitalhealthnews.com/apollo-hospitals-to-add-over-5-800-beds-in-five-years-as-q1fy27-revenue-rises-21- | RDA21 |
| S444 | Business Standard (2025) 'Multiple triggers may help Apollo Hospitals Enterprise regain its pulse' | https://www.business-standard.com/amp/markets/news/one-year-price-run-of-apollo-hospitals-vs-bse-100-125092401002_1.html | RDA22 |
| S446 | Apollo Hospitals Enterprise Ltd (2024) 'AHEL Q2FY25 Results Release' | https://mediacdn.apollohospitals.com/sites/default/files/2025-02/ahel-q2fy25-results-release.pdf | RDA29 |
| S447 | Bajaj Broking (2024) 'Apollo Hospitals Q2 Results Highlights FY24-25' | https://bajajbroking.in/content/bfsl/us/en/blog/apollo-hospitals-q2-results-highlights-fy24-25.html | RDA29, RDA31 |
| S449 | Apollo Hospitals Enterprise Ltd (2025) 'AHEL Q3FY25 Result Release' | https://mediacdn.apollohospitals.com/sites/default/files/2025-02/ahel-q3fy25-result-release.pdf | RDA32 |
| S450 | Apollo Hospitals Enterprise Ltd (2025) 'AHEL Q4FY25 Results Release' | https://mediacdn.apollohospitals.com/sites/default/files/2025-05/ahel-q4fy25-results-release_0.pdf | RDA33 |
| S451 | Business Standard (2025) 'Apollo Hospitals Q4 results: Net Profit grows 54% to Rs 389.6 crore' | https://www.business-standard.com/companies/quarterly-results/apollo-hospitals-q4-results-net-profit-grows-54-to-389-6-crore-125053001552_1.html | RDA33 |
| S452 | Apollo Hospitals Enterprise Ltd (2025) 'AHEL Q1FY26 Results Release' | https://www.apollohospitals.com/sites/default/files/2025-08/ahel-q1fy26-results-release_0.pdf | RDA35 |
| S453 | AlphaStreet (2025) 'Apollo Hospitals Q1 FY26 Earnings Results' | https://alphastreet.com/india/apollo-hospitals-q1-fy26-earnings-results | RDA36 |
| S454 | Investywise (2025) 'Apollo Hospitals Enterprise Investor Presentation Enclosed' (Q2 FY26 summary) | https://www.investywise.com/apollo-hospitals-enterprise-investor-presentation-enclosed/ | RDA37 |
| S455 | Apollo Hospitals Enterprise Ltd (2025) 'Transcript of Apollo Hospitals Q2 FY26 Earnings Call', 7 Nov 2025 | https://www.apollohospitals.com/sites/default/files/2025-11/transcript-of-apollo-hospitals---q2-fy26-earnings-call---7-november-2025....pdf | RDA37 |
| S456 | Outlook Business (2026) 'Apollo Hospitals Q3 profit up 35% at Rs 502 cr'; Kotak Neo (2026) Q3 FY26 results article | https://www.outlookbusiness.com/amp/story/corporate/apollo-hospitals-q3-profit-up-35-at-502-cr | RDA38, RDA39 |
| S457 | ICICI Direct (2026) Apollo Hospitals Q3FY26 note | https://www.icicidirect.com/mailcontent/idirect_apollo_q3fy26.pdf | RDA39 |
| S458 | CompoundingAI (2026) 'APOLLOHOSP Q4 FY26 Earnings Call' summary | https://compoundingai.in/market-news/apollohosp-q4-fy26-earnings-call | RDA40, RDA51 |
| S459 | Kotak Neo (2026) 'Apollo Hospitals Results Q1 FY 2026-27: Revenue Up 21%, PAT Rises To Rs 581 Crore' | https://www.kotakneo.com/news/stocks/apollo-hospitals-results-q1fy27-revenue-pat/ | RDA41, RDA42 |
| S460 | Multibagg (2026) 'Apollo Hospitals Q1 FY27: Profit up 38%, margin 15.5%' | https://www.multibagg.ai/market-pulse/articles/apollo-hospitals-q1-fy27-results-cmsqh1hof001p0znx8qiudjxx | RDA41, RDA47, RDA49, RDA53 |
| S461 | Indian Pharma Post (2026) 'Apollo Hospitals posts 21% revenue growth in Q1 FY27' | https://www.indianpharmapost.com/hospitals/lite/apollo-hospitals-posts-21-revenue-growth-in-q1-fy27-21371 | RDA42 |
| S462 | Business Standard (2024) 'PE firm Advent International to invest $297 mn in India's Apollo Hospitals unit' | https://www.business-standard.com/companies/news/pe-firm-advent-international-to-invest-297-mn-in-apollo-hospitals-unit-124042601107_1.html | RDA44 |
| S463 | NSE corporate filings archive (2026) 'APOLLOHOSP SE let NCLT order', filed 3 Apr 2026 | https://nsearchives.nseindia.com/corporate/APOLLOHOSP_03042026170310_SE_let_NCLT_order.pdf | RDA45 |
| S464 | NSE corporate filings archive (2026) 'APOLLOHOSP SE let NCLT CTC', filed 10 Apr 2026 | https://nsearchives.nseindia.com/corporate/APOLLOHOSP_10042026152459_SE_let_NCLT_CTC.pdf | RDA46 |
| S465 | Sahi.com (2026) 'Apollo Hospitals Targets Rs 25,000 Crore HealthCo Revenue and Q4 FY27 Demerger Listing' | https://sahi.com/news/apollo-hospitals-targets-25-000-crore-healthco-revenue-and-q4-fy27-demerger-listing-326-PE1_CORP | RDA46, RDA47 |
| S467 | PhonePe Invest / Share.Market (2026) 'Apollo 24/7 breakeven' | https://www.phonepeinvest.com/buzz/news/apollo-24-7-breakeven/ | RDA50 |
| S468 | Prabhudas Lilladher (2026) 'APHS' research note, 14 Aug 2026 | https://plindia.com/ResReport/APHS-14-8-26-PL.pdf | RDA50 |
| S469 | Angel One (2026) 'Apollo HealthCo Targets Q1FY27 Breakeven During Restructuring Phase' | https://oga-prod.angelone.in/news/market-updates/apollo-healthco-targets-q1fy27-breakeven-during-restructuring-phase | RDA50 |
| S470 | ValuePickr forum (2025) 'Apollo Hospital: The one stop healthcare service', thread post dated 14 Aug 2025 (Q1 FY26 concall summary) | https://forum.valuepickr.com/t/apollo-hospital-the-one-stop-healthcare-service/17964?page=4 | RDA51 |
| S473 | EY India (2026) 'EY Healthcare Newsletter: Q2 FY26 update', Dec 2025 | https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/newsroom/2026/01/ey-healthcare-news-letter-q2-fy-26-update-december-2025.pdf | RDA53 |
| S475 | Indian Pharma Post (2026) 'Apollo, Cloudnine merge maternity and fertility businesses in Rs 1,550 crore deal' | https://www.indianpharmapost.com/hospitals/apollo-cloudnine-merge-maternity-and-fertility-businesses-in-rs-1550-crore-deal-20291 | RDA56 |
| S477 | Kotak Neo (2024) 'Apollo Hospitals' Q1FY25 Results' | https://www.kotakneo.com/financial-results/apollo-hospitals-q1fy25-results/ | RDA63 |
| S479 | Motilal Oswal / Marketsmojo (2025) peer-comparison page, Apollo Hospitals Enterprise Ltd | https://marketsmojo.motilaloswal.com/stocks-analysis/apollo-hospitals-enterprise-423292-0 | RDA66 |
| S480 | Value Research Online (2026) peer-comparison pages, Fortis Healthcare Ltd / Max Healthcare Institute Ltd | https://www.valueresearchonline.com/stocks/42064/fortis-healthcare-ltd/peer-comparison/ ; https://www.motilaloswal.com/share-market/peer-comparison/max-healthcare-institute-ltd | RDA67, RDA68 |
| S490 | Screener.in (2026) 'Screener.in consolidated financials page for Max Healthcare Institute' | https://www.screener.in/company/MAXHEALTH/consolidated/ | RDM01, RDM12, RDM13, RDM14, +13 more |
| S491 | Arihant Capital (2026) 'Arihant Capital company background page for Max Healthcare Institute Ltd' | https://www.arihantcapital.com/company-information/company-background/22865 | RDM02, RDM04 |
| S492 | NSE archives (2026) 'WebSearch synthesis of NSE Integrated Filing (Ind AS) iXBRL, dated 21 May 2026' | https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_INDAS_159734_21052026180716_iXBRL_WEB.html | RDM05 |
| S493 | CARE Ratings Ltd (CareEdge Ratings) (2026) 'WebSearch synthesis of CARE Ratings press release listings for Max Healthcare Institute Limited' | https://www.careratings.com/upload/CompanyFiles/PR/202410141045_Max_Healthcare_Institute_Limited.pdf | RDM06, RDM07, RDM77 |
| S494 | Venture Intelligence; Sahi; BioSpectrum India; India Med Today (2026) 'WebSearch synthesis combining Venture Intelligence, Sahi (sahi.com), BioSpectrum India and India Med Today coverage, cross-checked against the NSE intimation listing' | https://sahi.com/news/max-healthcare-acquires-58-28-stake-in-kalinga-hospital-for-297-97-crore-3326-PE1_COR | RDM60, RDM62 |
| S495 | FilingReader Intelligence (2026) 'WebSearch synthesis of FilingReader news-wire summary dated 20 Aug 2026, directly fetched' | https://filingreader.com/news-wire/mumbai/2026-08-20/max-healthcare-reports-strong-q1-growth-amid-expansion | RDM41 |
| S496 | Quartr (2026) 'Quartr.com Q1 FY27 earnings summary for Max Healthcare Institute Limited, directly fetched' | https://quartr.com/events/max-healthcare-institute-limited-543220-q1-26-27_FYCzlQsK | RDM39, RDM40, RDM46, RDM50, +1 more |
| S497 | FilingReader Intelligence (2026) 'WebSearch synthesis of FilingReader news-wire summary, 3 Sep 2026' | https://filingreader.com/news-wire/mumbai/2026-09-03/max-healthcare-opens-400-bed-tower-in-saket | RDM29, RDM42, RDM44, RDM47, +2 more |
| S500 | Business Standard (2026) 'Max Healthcare clocks 59% YoY jump in Q2 PAT', WebSearch synthesis' | https://www.business-standard.com/amp/markets/capital-market-news/max-healthcare-clocks-59-yoy-jump-in-q2-pat-125111500547_1.html | RDM32 |
| S501 | Samco Securities; Screener.in (2026) 'WebSearch synthesis of Samco Securities Q3 FY26 results article; cross-checked against Screener.in' | https://www.samco.in/knowledge-center/articles/max-healthcare-q3fy26-net-profit-climbs-9-to-rs-344-crore-revenue-growth-amid-margin-pressures/ | RDM34, RDM46 |
| S502 | Business Standard (via askfuzz.ai) (2026) 'WebSearch synthesis of askfuzz.ai summary of Business Standard Q4 FY26 coverage' | https://askfuzz.ai/discover/news/companies/max-healthcare-q4-pat-rises-7-to-342-cr-revenue-up-12 | RDM45 |
| S503 | Angel One (2026) 'Max Healthcare Q4 FY26 Results: Revenue Rises 10% YoY to Rs 2,664 Crore, Expands Capacity and Strengthens Growth Pipeline', directly fetched' | https://oga-prod.angelone.in/news/stocks/max-healthcare-q4-revenue-rises-10-percent-yoy-to-rs-2664-crore-expands-capacity-and-strengthens-growth-pipeline | RDM35, RDM46, RDM50, RDM53 |
| S504 | Outlook Business (2026) 'Max Healthcare Institute to Invest Rs 6,000 Crore to Add 3,700 Beds By 2028' | https://www.outlookbusiness.com/corporate/max-healthcare-institute-to-invest-rs-6000-crore-to-add-3700-beds-by-2028 | RDM52 |
| S506 | Wikipedia; Bar and Bench (2026) 'Wikipedia (directly fetched); cross-checked against Bar and Bench deal coverage and an insolvency-tracker summary' | https://en.wikipedia.org/wiki/Max_Healthcare | RDM57, RDM59 |
| S507 | Bar and Bench; FilingReader Intelligence (2026) 'Dhir and Dhir, AZB on Max's acquisition of Jaypee Healthcare' (deal background); WebSearch synthesis of a FilingReader item on the NCLT approval' | https://www.barandbench.com/dealstreet/dhir-dhir-azb-on-maxs-acquisition-of-jaypee-healthcare | RDM59 |
| S510 | Value Research Online (2026) 'WebSearch synthesis of Value Research Online peer-comparison page for Max Healthcare' | https://www.valueresearchonline.com/stocks/270996/max-healthcare-institute-ltd/peer-comparison/ | RDM74, RDM75 |
| S511 | ICICI Direct (2026) 'WebSearch synthesis of ICICI Direct's healthcare sector snapshot page' | https://icicidirect.com/sector/sectorsnapshot/Healthcare | RDM75 |
| S512 | Wikipedia (2026) 'Wikipedia article 'Max Healthcare', directly fetched' | https://en.wikipedia.org/wiki/Max_Healthcare | RDM28, RDM55, RDM56, RDM57, +1 more |
| S513 | NSE archives (via search synthesis) (2026) 'WebSearch synthesis of NSE filing dated 14 Aug 2026 and simplywall.st coverage' | https://nsearchives.nseindia.com/corporate/MAXHEALTH_14082026214329_SE_Intimation_Newspaper_Publication.pdf | RDM03 |
| S514 | Bajaj Broking (2026) 'Max Healthcare Alpha Trade Pick: Max Healthcare enters a multi-year expansion phase' | https://www.bajajbroking.in/blog/max-healthcare-alpha-trade-pick-max-healthcare-enters-a-multi-year-expansion-phase | RDM47, RDM50, RDM51, RDM58, +3 more |
| S515 | Business Standard (2026) 'WebSearch synthesis of a Business Standard article on Q4/FY22 results' | https://www.business-standard.com/article/companies/max-health-gross-revenue-at-lifetime-high-in-q2fy23-on-improved-occupancy-122110100945_1.html | RDM68 |
| S516 | BW Healthcare World (2026) 'WebSearch synthesis of bwhealthcareworld.com Q4 FY23 results coverage' | https://bwhealthcareworld.com/article/max-healthcares-pat-nearly-doubles-in-q4fy23-records-revenue-at-rs-1637-cr-476773 | RDM69 |
| S518 | Wikipedia; Outlook Business (2026) 'Wikipedia (directly fetched), cross-checked against Outlook Business / Indian Pharma Post coverage of the original deal' | https://en.wikipedia.org/wiki/Max_Healthcare | RDM55 |
| S519 | Free Press Journal (2026) 'Union HM Amit Shah Inaugurates New 400-Bed Tower At Max Saket, Hospital Capacity Rises To 1,200 Beds' | https://www.freepressjournal.in/india/amit-shah-inaugurates-new-400-bed-tower-at-max-saket-hospital-capacity-rises-to-1200-beds | RDM48 |
| S550 | NSE (archives.nseindia.com) (2026) 'ind_niftypharmalist.csv' | https://archives.nseindia.com/content/indices/ind_niftypharmalist.csv | RDT03, RDT08, RDT63, RDT68, +1 more |
| S551 | NSE (archives.nseindia.com) (2026) 'ind_niftyhealthcarelist.csv' | https://archives.nseindia.com/content/indices/ind_niftyhealthcarelist.csv | RDT13, RDT18, RDT23, RDT28, +10 more |
| S552 | stockanalysis.com (2026) 'Abbott India Limited (NSE:ABBOTINDIA) financials' | https://stockanalysis.com/quote/nse/ABBOTINDIA/financials/ | RDT04, RDT05, RDT06 |
| S553 | Investywise (2026) 'Abbott India: Board Approves Q1 FY27 Results, Appoints New Chairman' | https://www.investywise.com/?p=105828 | RDT07 |
| S557 | NSE corporate filings archive / Medbound Times (2026) 'Alkem Labs gets 7 USFDA observations at Daman Plant after inspection' | https://nsearchives.nseindia.com/corporate/ALKEM_02052026125125_Intimation-Closure_of_USFDA_inspection_Signed.pdf | RDT17 |
| S562 | stockanalysis.com (2026) 'Divis Laboratories Ltd (NSE:DIVISLAB) financials' | https://stockanalysis.com/quote/nse/DIVISLAB/financials/ | RDT29, RDT30, RDT31 |
| S564 | stockanalysis.com (2026) 'Gland Pharma Ltd (NSE:GLAND) financials' | https://stockanalysis.com/quote/nse/GLAND/financials/ | RDT34, RDT36 |
| S570 | stockanalysis.com (2026) 'Laurus Labs Ltd (NSE:LAURUSLABS) financials' | https://stockanalysis.com/quote/nse/LAURUSLABS/financials/ | RDT49, RDT50, RDT51 |
| S574 | stockanalysis.com (2026) 'Mankind Pharma Ltd (NSE:MANKIND) financials' | https://stockanalysis.com/quote/nse/MANKIND/financials/ | RDT59, RDT60, RDT61 |
| S575 | NSE corporate filings archive (2026) 'MANKIND1_18032026100007_Final_PR' (Rivotril/Roche licence) | https://nsearchives.nseindia.com/corporate/MANKIND1_18032026100007_Final_PR.pdf | RDT62 |
| S576 | stockanalysis.com (2026) 'Piramal Pharma Ltd (NSE:PPLPHARMA) financials' | https://stockanalysis.com/quote/nse/PPLPHARMA/financials/ | RDT64, RDT66 |
| S578 | stockanalysis.com (2026) 'Sai Life Sciences Ltd (NSE:SAILIFE) financials' | https://stockanalysis.com/quote/nse/SAILIFE/financials/ | RDT69, RDT71 |
| S586 | stockanalysis.com (2026) 'Fortis Healthcare Ltd (NSE:FORTIS) financials' | https://stockanalysis.com/quote/nse/FORTIS/financials/ | RDT91 |
| S588 | stockanalysis.com (2026) 'Krishna Institute of Medical Sciences Ltd (NSE:KIMS) financials' | https://stockanalysis.com/quote/nse/KIMS/financials/ | RDT96 |
| S600 | NSE (live test) 'get-quotes/equity page for CIPLA' | https://www.nseindia.com/get-quotes/equity?symbol=CIPLA | RE01, RE02, RE03 |
| S601 | NSE archives (live test) 'ind_nifty50list.csv via archives.nseindia.com' | https://archives.nseindia.com/content/indices/ind_nifty50list.csv | RE04 |
| S602 | NSE corporate filings archive (live test) 'MAXHEALTH_13082026143249_SE_Intimation.pdf via nsearchives.nseindia.com' | https://nsearchives.nseindia.com/corporate/MAXHEALTH_13082026143249_SE_Intimation.pdf | RE05, RE06 |
| S603 | NiftyIndices (live test) 'ind_nifty50list.csv via niftyindices.com' | https://www.niftyindices.com/IndexConstituent/ind_nifty50list.csv | RE07 |
| S604 | BSE (live test) 'StockReachGraph API, scripcode 500087' | https://api.bseindia.com/BseIndiaAPI/api/StockReachGraph/w?scripcode=500087&flag=0 | RE08 |
| S605 | openFDA (live test) 'drugsfda.json endpoint, sponsor_name search and base query' | https://api.fda.gov/drug/drugsfda.json | RE09, RE10 |
| S606 | FDA (live test) 'Import Alert 66-40, Detention Without Physical Examination of Drugs From Firms Which Have Not Met Drug GMPs' | https://www.accessdata.fda.gov/cms_ia/importalert_189.html | RE11 |
| S607 | FDA (live test) 'Orange Book data files zip download' | https://www.fda.gov/media/76860/download | RE12 |
| S608 | SEC EDGAR (live test) 'submissions JSON for Dr Reddy's Laboratories, CIK 0001135951' | https://data.sec.gov/submissions/CIK0001135951.json | RE13, RE14 |
| S609 | SEC EDGAR (live test) 'browse-edgar company filing list, CIK 0001135951' | https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001135951&type=6-K&dateb=&owner=include&count=10 | RE15 |
| S610 | GDELT Project (live test) 'DOC 2.0 API artlist query for Cipla' | https://api.gdeltproject.org/api/v2/doc/doc?query=Cipla&mode=artlist&format=json&maxrecords=5 | RE16 |
| S611 | Google News (live test) 'RSS search feed for Cipla FDA' | https://news.google.com/rss/search?q=Cipla+FDA&hl=en-IN&gl=IN&ceid=IN:en | RE17 |
| S612 | Screener.in (live test) 'CIPLA consolidated company page' | https://www.screener.in/company/CIPLA/consolidated/ | RE18 |
| S613 | CRISIL Ratings (live test) 'rating-list page' | https://www.crisilratings.com/en/home/our-business/ratings/rating-list.html | RE19 |
| S614 | ICRA (live test) 'ShowRationaleList page' | https://www.icra.in/Rationale/ShowRationaleList | RE20 |
| S615 | CARE Ratings (live test) 'homepage' | https://www.careratings.com/ | RE21 |
| S616 | CARE Ratings (live test) 'Cipla Limited rating rationale PDF, 12 Aug 2025' | https://www.careratings.com/upload/CompanyFiles/PR/202508120858_Cipla_Limited.pdf | RE22 |
| S617 | RBI (live test) 'Reference Rate Archive page' | https://www.rbi.org.in/Scripts/ReferenceRateArchive.aspx | RE23 |
| S700 | CIA Center for the Study of Intelligence (1999) 'Psychology of Intelligence Analysis' | https://www.cia.gov/resources/csi/static/Pyschology-of-Intelligence-Analysis.pdf | RF01, RF07 |
| S702 | Wikipedia (2026) 'Admiralty code' | https://en.wikipedia.org/wiki/Admiralty_code | RF08, RF09, RF13 |
| S703 | CDC (2026) 'Chapter 7: GRADE Criteria Determining Certainty of Evidence' (ACIP GRADE Handbook) | https://www.cdc.gov/acip-grade-handbook/hcp/chapter-7-grade-criteria-determining-certainty-of-evidence/ | RF23 |
| S704 | Journal of Clinical Epidemiology (2019) GRADE Guidelines 19/20 working-group papers (secondary summary) | https://scholarworks.aub.edu.lb/server/api/core/bitstreams/450d321d-0b78-48de-8016-82a319b4738f/content | RF26 |
| S707 | AHRQ Digital Healthcare Research (2026) 'Kepner-Tregoe Matrix' (Workflow Assessment for Health IT Toolkit) | https://digital.ahrq.gov/health-it-tools-and-resources/evaluation-resources/workflow-assessment-health-it-toolkit/all-workflow-tools/kepner-tregoe-matrix | RF32, RF33 |
| S709 | Wikipedia (2026) 'Pre-mortem' | https://en.wikipedia.org/wiki/Pre-mortem | RF36, RF38 |
| S711 | Killick, R., Fearnhead, P., Eckley, I.A. (2012) 'Optimal detection of changepoints with a linear computational cost' | https://arxiv.org/abs/1101.1438 | RF41, RF42, RF43 |
| S713 | Wikipedia (2026) 'Event study' | https://en.wikipedia.org/wiki/Event_study | RF47, RF48, RF49, RF50, +1 more |
| S715 | Wikipedia (2026) 'Beneish M-score' | https://en.wikipedia.org/wiki/Beneish_M-score | RF53, RF54, RF55 |
| S716 | GuruFocus / quant-investing.com (2026) M-Score glossary entries (secondary summary) | https://www.quant-investing.com/glossary/m-score-beneish/ | RF56, RF57 |
| S720 | ZeroEntropy (2026) 'BM25' concept page | https://www.zeroentropy.dev/concepts/bm25/ | RF60, RF61 |
| S721 | Robertson, S., Zaragoza, H. 'The Probabilistic Relevance Framework: BM25 and Beyond' (via Stanford CS276 lecture notes locator) | https://web.stanford.edu/class/cs276/handouts/lecture12-bm25etc.pdf | RF63 |
| S722 | Permutable.ai (2026) 'Point-in-time datasets for macro backtesting: Reducing look-ahead bias in systematic strategies' | https://permutable.ai/point-in-time-datasets-for-macro-backtesting/ | RF64, RF65 |
| S723 | AnalystPrep (2026) 'Problems in Backtesting' (CFA Level 2 study notes) | https://analystprep.com/study-notes/cfa-level-2/problems-in-backtesting/ | RF67, RF68 |
| S727 | rdocumentation.org (2026) R package 'trend' v1.1.7 'pettitt.test' documentation | https://rdocumentation.org/packages/trend/versions/1.1.7/topics/pettitt.test | RF45, RF46 |

## Appendix B: Metric library

The engine's metric registry holds 36 formulas as of this assembly (`next_signal/metrics/library.py`). The research deliverable's design target was 44 or more; the registry will grow as further metric groups (notably the Beneish/Sloan earnings-quality group and the hospital-specific group) are completed. Every metric function returns `None` on missing inputs rather than imputing a value, per the data integrity rule in PLAN.md section 5.

| Metric ID | Name | Formula | Unit | Applies to |
|---|---|---|---|---|
| `anda_approvals_ttm` | ANDA approvals, trailing 12 months | count of ANDA final approvals in openFDA drugsfda, trailing 12 months | count | pharma |
| `arpob` | Average revenue per occupied bed per day | hospital_revenue / (operational_beds * occupancy * days_in_period) | INR_per_bed_day | hospital |
| `arpob_yoy` | ARPOB growth, year on year | (arpob_t - arpob_t_minus_4q) / arpob_t_minus_4q | pct | hospital |
| `beds_gap` | Beds announced for the period minus beds actually operational | beds_announced - beds_operational | beds | hospital |
| `capex_to_sales` | Capex as a share of revenue | capex / revenue | pct | all |
| `ccc` | Cash conversion cycle | receivable_days + inventory_days - payable_days | days | all |
| `cfo_to_ebitda` | Cash flow from operations to EBITDA | cfo / ebitda | ratio | all |
| `ebitda_margin` | EBITDA margin | ebitda / revenue | pct | all |
| `ebitda_per_bed` | Annualised EBITDA per operational bed | hospital_ebitda_annualised / operational_beds | INR_per_bed | hospital |
| `etr` | Effective tax rate | tax_expense / pbt | pct | all |
| `exceptional_share_pbt` | Exceptional items as a share of profit before tax | exceptional_items / pbt | pct | all |
| `fcf_margin` | Free cash flow margin | (cfo - capex) / revenue | pct | all |
| `fda_wl_24m` | USFDA warning letters in the last 24 months | count of warning letters to owned or partner sites, trailing 24 months | count | pharma |
| `fx_effect_us` | FX effect on reported US growth | us_rev_inr_yoy - us_rev_usd_yoy | pct_pts | pharma |
| `geo_share` | Geography's share of total revenue | geo_revenue / total_revenue | pct | pharma |
| `geo_share_change_5y` | Change in a geography's revenue share over 5 years | geo_share_now - geo_share_5y_ago | pct_pts | pharma |
| `gross_margin` | Gross margin | (revenue - cogs) / revenue | pct | all |
| `india_vs_ipm_gap` | India formulations growth minus IPM growth | india_rev_yoy - ipm_growth_yoy | pct_pts | pharma |
| `intl_share` | International patients' share of hospital revenue | intl_revenue / hospital_revenue | pct | hospital |
| `inventory_days` | Inventory days | inventory / cogs * days_in_period | days | all |
| `net_debt_to_ebitda` | Net debt to EBITDA | net_debt / ebitda_ttm | ratio | all |
| `other_income_share_pbt` | Other income as a share of profit before tax | other_income / pbt | pct | all |
| `pat_margin` | PAT margin | pat / revenue | pct | all |
| `payable_days` | Trade payable days | trade_payables / cogs * days_in_period | days | all |
| `price_vs_volume_growth` | Price-led share of revenue growth | (rev_yoy - volume_yoy) when both disclosed | pct_pts | generic |
| `rd_pct` | R&D spend as a share of revenue | rd_spend / revenue | pct | pharma |
| `rec_growth_minus_rev_growth` | Receivables growth minus revenue growth | receivables_yoy - revenue_yoy | pct_pts | all |
| `receivable_days` | Trade receivable days | trade_receivables / revenue * days_in_period | days | all |
| `rev_cagr_5y` | Revenue CAGR, 5 years | (revenue_fy_end / revenue_fy_start) ** (1 / 5) - 1 | pct | all |
| `rev_qoq` | Revenue growth, quarter on quarter | (revenue_t - revenue_t_minus_1q) / revenue_t_minus_1q | pct | all |
| `rev_yoy` | Revenue growth, year on year | (revenue_t - revenue_t_minus_4q) / revenue_t_minus_4q | pct | all |
| `revenue_per_bed` | Annualised revenue per operational bed | hospital_revenue_annualised / operational_beds | INR_per_bed | hospital |
| `sloan_accruals` | Sloan accruals ratio | (pat - cfo) / avg_total_assets | ratio | all |
| `specialty_share` | Global specialty/innovative medicines share of total revenue | specialty_revenue / total_revenue | pct | pharma |
| `us_rev_inr_yoy` | US revenue growth, year on year, in INR | (us_rev_inr_t - us_rev_inr_t_minus_4q) / us_rev_inr_t_minus_4q | pct | pharma |
| `us_rev_usd_yoy` | US revenue growth, year on year, in USD | (us_rev_usd_t - us_rev_usd_t_minus_4q) / us_rev_usd_t_minus_4q | pct | pharma |

## Appendix C: Source catalogue

The full catalogue (all columns, including endpoint patterns and verification notes) is `research/raw/source_catalogue.csv`. This table shows the columns most relevant to a reader judging reliability and point-in-time safety.

| source_id | name | origin_class | admiralty_reliability | access | point_in_time_field | track_d_use | verified_on |
|---|---|---|---|---|---|---|---|
| S600a | NSE equity quote page | exchange | A | blocked | live quote timestamp | price and corporate-info cross-check for the 5 Track D companies | 2026-10-14 |
| S600b | NSE internal quote JSON API | exchange | A | blocked | live quote timestamp | same as S600a but machine-readable | 2026-10-14 |
| S601 | NSE index constituent CSV via archives subdomain | exchange | A | open | file generation date (not in file; inferred from fetch date) | universe loader for NIFTY 50 healthcare constituents (PLAN.md section 1.6) | 2026-10-14 |
| S602 | NSE corporate announcement PDF via nsearchives subdomain | exchange | A | blocked | filing timestamp in filename | material-event evidence (FDA inspection intimations | board outcomes) |
| S603 | NIFTY index constituent CSV via niftyindices.com | industry_body | B | blocked | file generation date (not in file) | intended primary universe loader per PLAN.md section 1.6; confirmed non-viable | 2026-10-14 |
| S604 | BSE StockReachGraph API | exchange | A | blocked | unknown (never returned) | secondary exchange cross-check | 2026-10-14 |
| S605a | openFDA drugsfda.json base endpoint | regulator_us | A | open | submission dates inside each record | none observed in a single light request | ANDA approval history for Cipla |
| S605b | openFDA drugsfda.json sponsor_name search query | regulator_us | A | partially open (query-syntax sensitive) | submission dates inside each record | same as S605a | 2026-10-14 |
| S606 | FDA Import Alert 66-40 | regulator_us | A | open | page Published Date field | partner/owned-site import-alert status for Cipla's Pharmathen dependency and others | 2026-10-14 |
| S607 | FDA Orange Book data files (zip) | regulator_us | A | open | patent.txt | monthly | none observed |
| S608 | SEC EDGAR submissions JSON | sec | A | open | each filing's filed/accepted timestamp | Dr Reddy's Laboratories ADR filings (CIK 0001135951) for SEC-side cross-check of NSE/BSE disclosures | 2026-10-14 |
| S609 | SEC EDGAR browse-edgar HTML | sec | A | open | filing date column | human-readable cross-check of S608 | 2026-10-14 |
| S610 | GDELT DOC 2.0 API | aggregator | C | rate-limited | article seendate field | novelty/consensus check (has this finding already surfaced in mainstream coverage) | 2026-10-14 |
| S611 | Google News RSS search feed | press | C | open | item pubDate field | novelty/consensus check and general press-coverage sweep per company | 2026-10-14 |
| S612 | Screener.in company page | aggregator | C | mostly open | quarterly/annual column headers | quick cross-check of company-reported financial ratios against primary filings | 2026-10-14 |
| S613 | CRISIL Ratings rating-list page | rating_agency | B | broken link (tested URL) | rating action date (not reachable at this URL) | credit-rating cross-check for all 5 Track D companies | 2026-10-14 |
| S614 | ICRA rationale-list page | rating_agency | B | gated (session) | rationale date (not reachable at this URL) | credit-rating cross-check | 2026-10-14 |
| S615 | CARE Ratings homepage | rating_agency | B | open | Recent Ratings section dates | entry point to individual rationale PDFs | 2026-10-14 |
| S616 | CARE Ratings individual rationale PDF | rating_agency | B | open | filename-embedded date/time stamp | primary-tier credit-rating rationale text and figures for Cipla and other Track D names | 2026-10-14 |
| S617 | RBI Reference Rate Archive | regulator_in | A | partially open (form-gated download) | rate date column in the result table | USD/INR FX series for event-window return and FX-effect rival-hypothesis tests | 2026-10-14 |

## Appendix D: Assumptions register

| A-ID | Assumption | Why | What it moves | How we would test it |
|---|---|---|---|---|
| A01 | Where a company's FY26 (or other) revenue figure is disputed across three or more sources with none traced to the primary annual report in the raw lane file (for example Sun Pharma's FY26 revenue, Rs 58,220 to 58,563 crore), part-C.md's cross-company CAGR row uses the midpoint of the disputed range for a one-time illustrative growth computation, rather than silently picking one source. | A CAGR needed a single number to compute, and picking one of three disputed figures without flagging it would understate the live conflict. | The exact multi-year revenue CAGR figures quoted for Sun Pharma and Dr. Reddy's in part-C.md section 9.6. | Re-run the CAGR once the company's own FY26 annual report is opened directly and the conflict is resolved to a single figure. |
| A02 | For Dr. Reddy's, where FY21 and FY22 revenue were not traced to a primary source in the raw lane file, part-C.md computes a 3-year (FY23 to FY26) CAGR instead of a 5-year CAGR, and states this explicitly rather than extrapolating a missing FY21 figure. | Fabricating an FY21 figure to force a 5-year series would violate the no-invented-numbers rule; a shorter, honestly labelled window is preferable. | The "3-year only" label attached to Dr. Reddy's CAGR row in part-C.md section 9.6. | Re-run as a 5-year CAGR once Dr. Reddy's FY21 and FY22 Form 20-F filings are opened directly on EDGAR and a revenue figure is confirmed. |
| A03 | For Max Healthcare and Apollo Hospitals, where the company discloses both a narrower "consolidated" (audited P&L) revenue basis and a wider basis (Max Healthcare's "network" revenue; implicitly, Apollo's segment-level revenue), part-C.md uses the consolidated/Screener.in basis as the primary series in the five-year and eight-quarter tables, and states the wider basis as a parenthetical note rather than blending the two. | The consolidated basis matches the audited statutory filing and is the more defensible single series for a cross-company comparison; blending the two bases without flagging the difference would hide a genuine citation-discipline risk the raw lane file itself identifies. | Which revenue and PAT figures are presented as the "headline" row for Max Healthcare and Apollo in part-C.md. | Confirm against each company's own FY26 annual report whether the statutory consolidated P&L or the management-reported wider basis is the figure analysts and raters actually use as the headline number. |
| A06 | Discover's angle-scoring worked example (part-D.md section 12.3) and Calculate's peer-z-score worked example (part-D.md section 14.4) use illustrative component values (data_availability, anomaly_signal, novelty_prior, and a four-company receivable-days peer set) rather than measured outputs of a live engine run, since `pipeline/run.py` does not yet exist to produce one. | The formulas themselves needed a worked arithmetic example to show the computation inline, as the writer brief requires, but no live run exists yet to draw real numbers from. | The specific numeric values shown in those two worked examples only; the formulas and the arithmetic method they illustrate are not affected. | Replace both worked examples with real, measured outputs once the orchestrator exists and a live Discover and Calculate run has actually executed against a real Track D company. |
| A07 | Part-D.md section 11 reports `export/*`, the engine's export pipeline, as a component exercised by a real test against real-shaped data (a schema-conformant fixture Report, with a genuinely rendered PDF), departing from writer A's own section 0 LIVE/WIRED/PLANNED legend, which classified every architectural claim as PLANNED by default at the time it was written, before any component existed. | build-log.md's own entries (11 October 2026) record `export/*` as built and verified end to end against a fixture, including a test that invokes the installed Chrome binary directly and asserts a real `%PDF-` signature; reporting this as PLANNED, the stricter original default, would understate what has actually been built and tested since section 0 was written. | The component-status table in part-D.md section 11.3, and specifically how `export/*` is classified relative to the nine not-yet-built `sources/*` clients in the same table. | Confirm with writer A (or at final assembly) whether the document's single LIVE/WIRED/PLANNED legend should be updated project-wide to the finer three-level operational definition part-D.md section 11.2 states explicitly, rather than carrying two slightly different legends across different parts of the same document. |
| A04 | If the evaluation harness's tie-break (TB) set cannot be run reliably across all ten of its sampled companies before the MVP or eval deadline, part-F.md section 21.8 treats the headline moneyshot's `n_companies` as the NIFTY 50 (N50) set alone (5 companies), stated plainly as N50-only, rather than quietly including a partial or incomplete TB run in the count. | Padding a headline evaluation count with runs that did not actually complete would overstate the generality claim the moneyshot is meant to demonstrate, which the brief's own autonomy and generality criterion would penalise more than an honestly smaller but complete number. | The exact value of `{{EVAL:n_companies}}` on deck slide S6 and in part-F.md section 21, once the harness runs. | Re-run the harness against the full TB set once the orchestrator and remaining source clients exist, and compare the TB-inclusive aggregate against the N50-only number already shown. |
| A05 | Part-F.md section 23.3 uses the plan's default finals speaking split (Harsh Kawatra: S1, S2, and the live run; : S3, S4; Gursimran Kaur: S5, S6) as a stated fact rather than a tentative suggestion, since PLAN.md §12 open item O7 leaves this unconfirmed by the user. | The plan's own default-when-unspecified rule (PLAN.md §0.6) says to state the simplest option that keeps the golden rules and log it, rather than leaving the build plan section silent on who presents what. | Which team member's name appears beside which slide in part-F.md section 23.3 and in the demo runbook. | Confirm the actual speaking split with the user before the finals rehearsal (F2, 24 Oct) and update this section and the runbook together if it differs. |

## Appendix E: Glossary and abbreviations

| Term | Definition |
|---|---|
| ACH (Analysis of Competing Hypotheses) | Heuer's structured method of listing all plausible hypotheses against the evidence in a matrix, attempting to disprove as many as possible, and reporting the least inconsistent survivor along with the alternatives considered and why they were rejected. |
| ADR (American Depositary Receipt) | A certificate representing shares of a foreign company (such as Dr. Reddy's Laboratories) traded on a US exchange, which triggers SEC filing obligations alongside the company's home-market filings. |
| Admiralty code | A NATO-origin, two-axis scale grading a source's reliability (A to F) and the credibility of a specific piece of information from it (1 to 6), used here to grade every evidence item the engine collects. |
| Admiralty information credibility grade | The second axis of the Admiralty code (1 to 6), rating how credible a specific piece of information is, independent of how reliable its source generally is. |
| Admiralty reliability grade | The first axis of the Admiralty code (A to F), rating how reliable a source generally is, independent of any one piece of information from it. |
| ALCE | A cited evaluation framework (Gao et al., 2023) for measuring citation precision and recall in attributed text generation, referenced in the methods literature behind this engine's quote-anchoring discipline. |
| ALOS (Average Length of Stay) | The average number of days a patient stays admitted in a hospital, a core operating metric for the hospital sub-industry playbook. |
| ANDA (Abbreviated New Drug Application) | The US FDA application pathway a generic-drug maker files to market a drug already approved under a full New Drug Application, once patents and exclusivity periods allow. |
| API (Active Pharmaceutical Ingredient) | The biologically active component of a drug formulation, as distinct from excipients; also the basis of the API/CDMO business model tracked in the pharma sector sections. |
| API (Application Programming Interface) | A defined interface through which the engine's FastAPI backend and the Next.js dashboard, and the engine and its external data sources, exchange requests and data. |
| ARPOB (Average Revenue Per Occupied Bed) | A hospital-chain profitability metric: total relevant revenue divided by occupied bed-days, used to compare hospital economics across Apollo, Max Healthcare and peers. |
| Beneish M-score | A forensic-accounting formula combining several financial ratios into a single score used to flag a heightened probability of earnings manipulation. |
| BIOSECURE Act | Proposed US legislation restricting federal contracts with named biotechnology companies with ties to foreign adversary governments, relevant to Indian CDMOs' exposure to shifting US biomanufacturing policy. |
| BM25 | A probabilistic term-weighting ranking function (an extension of TF-IDF) used here to rank PDF pages by relevance to a query before quote-anchored extraction, deliberately chosen over a vector database for its determinism and auditability. |
| BRSR (Business Responsibility and Sustainability Report) | A SEBI-mandated disclosure format for listed companies covering environmental, social and governance performance, one of the disclosure channels that can surface non-financial signals about a company. |
| BSE (Bombay Stock Exchange) | One of India's two main stock exchanges, alongside the NSE, and a source of company filings and announcements. |
| CAGR (Compound Annual Growth Rate) | The constant annual growth rate that would take a value from its starting figure to its ending figure over a stated number of years, computed inline wherever this document cites a multi-year growth figure. |
| CAR (Cumulative Abnormal Return) | In event-study methodology, the sum of a stock's daily abnormal returns (actual return minus an expected, market-model-predicted return) across a defined window around an event date. |
| CDMO (Contract Development and Manufacturing Organisation) | A company that manufactures drugs or biologics on behalf of another company's brand, a business model distinct from a branded-formulations or generics maker. |
| CDSCO (Central Drugs Standard Control Organisation) | India's central drug regulatory authority, responsible for approvals, the revised Schedule M manufacturing standards, and monthly not-of-standard-quality (NSQ) drug alerts. |
| CGHS (Central Government Health Scheme) | A government health insurance and treatment scheme for central government employees and pensioners, whose rate revisions affect listed hospital chains' payor mix and realised tariffs. |
| Change-point detection | A statistical technique (here, the PELT algorithm via the `ruptures` library) that finds the point in a time series where its underlying statistical properties shift, used to date when a company's reported metric genuinely changed trend. |
| Change-point effect size | The magnitude of the shift a change-point detection algorithm finds at its identified breakpoint, used by the Calculate stage to help rank which detected anomalies are the most material. |
| CIK (Central Index Key) | The unique numeric identifier the US SEC assigns to each filer on EDGAR, used here to locate Dr. Reddy's own SEC filings as an ADR issuer (CIK 0001135951). |
| Counterargument | The brief's own required output element: the strongest rival explanation for a discovery that survived the Challenge stage's testing, shown with its own supporting evidence rather than dismissed. |
| Counterargument strength | How strongly the chosen counterargument is itself supported by evidence, reflected in the ACH matrix's own inconsistency scoring rather than asserted separately. |
| CRDMO (Contract Research, Development and Manufacturing Organisation) | A CDMO that also offers contract research services, extending the CDMO model up the value chain into drug discovery and development support. |
| DPCO (Drugs Price Control Order) | The Indian government order, administered by the NPPA, that caps the retail price of medicines on the National List of Essential Medicines. |
| EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortisation) | An operating-profitability measure used throughout the company dossiers and sector tables to compare profitability independent of financing and accounting choices. |
| EM (Emerging Markets) | A geographic revenue segment, distinct from US, India, and Europe, that several Track D pharma companies report as a separate line in their geographic revenue mix. |
| Event study | MacKinlay's methodology for measuring a security's abnormal return around a specific event date, using an estimation window to model expected returns and a separate event window to measure the deviation. |
| Evidence origin class | The category (company filing, company IR, exchange, US regulator, Indian regulator, SEC, rating agency, industry body, market data, press, aggregator, peer filing) the independence graph uses to count distinct origins behind a discovery. |
| Evidence strength | The brief's own required output element: a Strong, Moderate, or Weak label attached to a discovery, with the scoring reasoning (independence, reliability, corroboration, survival, persistence, minus penalties) shown, not asserted. |
| Falsification condition | The brief's own required output element: a specific, machine-checkable metric, threshold, and future observation date that would cause the system to reconsider a discovery. |
| FDA (Food and Drug Administration) | The US regulatory agency whose inspection classifications, warning letters, import alerts and approvals form the single richest independent, dated evidence class this engine is built to use for Track D. |
| FEI (FDA Establishment Identifier) | The unique identifier the FDA assigns to a specific manufacturing or testing facility, used to track that facility's inspection and compliance history across time, independent of which company currently owns it. |
| FTF (First-to-File) | The status of the first generic-drug applicant to file an ANDA with a Paragraph IV certification challenging a brand's patent, which can carry a 180-day marketing exclusivity reward if successful. |
| GLP-1 (Glucagon-Like Peptide-1) | A drug class (including semaglutide) used for diabetes and weight management, whose patent expiries in various jurisdictions are a live angle for Indian generic makers such as Dr. Reddy's. |
| GRADE (Grading of Recommendations Assessment, Development and Evaluation) | A framework, originally from clinical-evidence research, for rating the certainty of a body of evidence; adapted here as the vocabulary for describing how confident a discovery's evidence strength reasoning should sound. |
| IA (Import Alert) | An FDA mechanism (commonly numbered 66-40 for pharmaceuticals) that allows the agency to detain shipments from a specific facility without physical examination, typically following unresolved inspection findings. |
| Independence (as used here) | A property of evidence counted by distinct publisher origin, not by document count, so that several documents from the same publisher still count as a single origin. |
| IPM (Indian Pharmaceutical Market) | The domestic Indian pharmaceutical market as tracked by data providers such as IQVIA and Pharmarack, distinct from India's pharmaceutical export market. |
| IRA (Inflation Reduction Act) | US legislation including Medicare drug-price negotiation provisions, relevant context for how US pricing policy affects the economics of both branded and generic pharmaceutical revenue. |
| IRDAI (Insurance Regulatory and Development Authority of India) | India's insurance sector regulator, whose policies on health-insurance penetration and claim settlement affect listed hospital chains' payor mix. |
| ISIN (International Securities Identification Number) | The globally unique code identifying a specific security, recorded in each company dossier's identity table alongside the NSE symbol and BSE code. |
| Kepner-Tregoe problem analysis | A structured "is / is not" method for defining a problem precisely by specifying what it is, where it is, when it occurs, and its extent, against what it is not, used here in contradiction detection. |
| LODR (Listing Obligations and Disclosure Requirements) | The SEBI regulations (Regulation 30 for material events, Regulation 33 for results, Regulation 46 for the website) that create much of the timed, auditable disclosure evidence this engine depends on. |
| MCA (Ministry of Corporate Affairs) | The Indian government ministry administering corporate filings and compliance under the Companies Act, a secondary regulatory touchpoint for listed-company disclosures. |
| MECE (Mutually Exclusive, Collectively Exhaustive) | A structuring principle for an issue tree or any decomposition, ensuring its branches do not overlap and together cover the whole problem. |
| NAI (No Action Indicated) | The most favourable FDA inspection classification outcome, meaning no objectionable conditions were found. |
| NLEM (National List of Essential Medicines) | The Indian government's list of medicines considered essential, whose revisions determine which drugs fall under DPCO price control. |
| Novelty score | The engine's measure of whether a candidate discovery already appears in mainstream news or aggregator coverage, used to penalise a finding that is not actually non-obvious. |
| NPPA (National Pharmaceutical Pricing Authority) | The Indian regulator administering DPCO price caps and monitoring the prices of scheduled and non-scheduled pharmaceutical formulations. |
| NSE (National Stock Exchange) | India's largest stock exchange by trading volume, the primary live data source for the universe loader, index constituent lists, and company filings in this engine. |
| OAI (Official Action Indicated) | The most severe FDA inspection classification outcome, meaning the findings warrant regulatory action such as a warning letter. |
| OOS (Out of Specification) | A laboratory test result that falls outside an established acceptance criterion, a quality event that can trigger a batch investigation, recall, or a disclosed manufacturing issue. |
| Origin class | See Evidence origin class. |
| Para IV (Paragraph IV certification) | A generic applicant's certification in an ANDA filing that a listed patent on the reference drug is invalid, unenforceable, or will not be infringed, the step that can trigger patent litigation and first-to-file exclusivity. |
| PESTLE | A framework scanning Political, Economic, Social, Technological, Legal and Environmental factors, applied here to the Track D sector context (US generics and India branded formulations). |
| Pettitt test | A non-parametric statistical test for detecting a single change-point in a time series, part of the methods literature behind the engine's change-point detection choice. |
| PIT (Point-in-Time) | Data or an analysis constrained to only what was knowable as of a specific past date, the discipline the engine's `as_of` filtering and the time-travel evaluation protocol both depend on. |
| PMJAY (Pradhan Mantri Jan Arogya Yojana) | India's government-funded health insurance scheme for economically vulnerable households, whose empanelment and reimbursement rates affect listed hospital chains' payor mix. |
| Point-in-time field | A column in the engine's source catalogue recording which field of a given source carries a reliable timestamp, the basis for the `as_of` filtering the time-travel protocol depends on. |
| SEBI (Securities and Exchange Board of India) | India's securities market regulator, responsible for the LODR regulations and broader listed-company disclosure requirements. |
| Sloan accruals | A forensic-accounting ratio (from Sloan, 1996) measuring the accruals component of reported earnings relative to cash flow, used as a signal that reported earnings quality may be lower than it appears. |
| Time-travel evaluation | This engine's specific implementation of a point-in-time backtest: replaying a run as if conducted on a past date, using only documents dated before that date, then checking the stated prediction against real, later data. |
| TRL (Technology Readiness Level) | A nine-level scale originally from aerospace engineering, used here, where relevant, to describe how mature a given engine component is, alongside the LIVE, WIRED and PLANNED honesty tags. |
| t-stat (t-statistic) | A standard statistical measure of how many standard errors a trend estimate is from zero, used in the Calculate stage's OLS trend scoring to help rank anomaly significance. |
| VAI (Voluntary Action Indicated) | An FDA inspection classification between NAI and OAI, meaning objectionable conditions were found but do not warrant immediate regulatory action, typically addressed through voluntary corrective action. |
| WL (Warning Letter) | A formal FDA notice issued after a significant inspection finding (typically following an OAI classification), one of the public, dated regulator records the engine treats as an independent evidence origin. |
| XBRL (eXtensible Business Reporting Language) | A structured, machine-readable financial-reporting data format mandated for certain filings on NSE and BSE, intended as a parseable source for company financial facts. |

## Appendix F: Data conflicts and rulings

Every contradiction found between two sources during research, with the ruling applied and its basis. Lane agents
append rows here as they find conflicts; the research-document assembler pulls this file in verbatim as Appendix F.

| C-ID | Claim | Source A says | Source B says | Ruling | Basis |
|---|---|---|---|---|---|
| C01 | Dr. Reddy's Laboratories Q1 FY27 (quarter ended 30 Jun 2026) consolidated net profit | One secondary aggregator reported approximately Rs 1,290 crore, down about 0.3% year on year | A separate secondary summary and the company's own filing reported approximately Rs 443 crore net profit, down sharply year on year, after a Rs 240 crore provision for semaglutide API inventory | RESOLVED: lane R-D-DRREDDY opened the primary SEC Form 6-K exhibit 99.2 (the company's own Q1 FY27 results press release, filed with both NSE/BSE and the SEC as exhibit to CIK 0001135951's 6-K dated 22 Jul 2026). It confirms profit attributable to equity holders of the parent at Rs 4,435 million (Rs 443.5 crore, 5.5% of revenue) and profit for the period at Rs 4,348 million (Rs 434.8 crore, 5.4% of revenue), both down sharply (about 69%) year on year after a Rs 2,397 million (about Rs 240 crore) semaglutide API provision. Confirmed figure of record: Rs 443.5 crore. The Rs 1,290 crore figure does not match any line item in the primary filing (revenue, EBITDA, profit for the period, or profit attributable to equity holders) and is excluded from the research document as erroneous. | Primary-source precedence (PLAN.md §0.3 rule 5); confirmed against https://www.sec.gov/Archives/edgar/data/0001135951/000157587226000520/rdy0925_ex99-2.htm by lane R-D-DRREDDY, 11 Oct 2026; see raw/R-D-DRREDDY.md rows RDD17 and RDD21 |
| C02 | Whether UCPMP 2024 (Uniform Code for Pharmaceutical Marketing Practices) is legally mandatory | The Department of Pharmaceuticals' own public description (S105, Valuebound) calls it a mandatory code with an association-level ethics committee and a DoP appeal route; Trilegal's legal analysis (S106) treats it as mandatory in practice for associations but flags that its legislative authority and enforceability are contestable | Vajiram and Ravi's UPSC-focused current-affairs summary (S107) states the government removed the word "voluntary" but stopped short of making the code formally mandatory, and only "requested" associations to implement it | Treat UCPMP 2024 as administratively mandatory per the issuing Department of Pharmaceuticals, but legally untested; state this distinction explicitly wherever UCPMP 2024 is cited in the research document, rather than picking one characterisation | Lane R-B found no primary gazette notification resolving enforceability; ruling is conservative pending that primary text |
| C03 | The exact date the revised Schedule M MSME GMP-compliance extension lands | India Briefing (S099) states the extended MSME deadline is 31 Dec 2025 | The same India Briefing source separately states the regulation "will now come into effect from January 1, 2026," without reconciling the two dates in the same piece | Treat 31 Dec 2025 as the MSME compliance deadline and 1 Jan 2026 as the date enforcement of the new standard effectively begins; flag as unconfirmed against the primary CDSCO/Ministry of Health and Family Welfare notification until a lane re-verifies it | Lane R-B did not open the primary Gazette notification for the extension itself (only for the original Jan 2024 notification, S099); re-verification needed |
| C04 | Scale of FDA warning letters issued to Indian pharmaceutical manufacturing sites in 2025 | A promotional webinar page (S092, Pharmaceutical Online) claims 303 total 2025 drug warning letters versus 190 in 2024, a 59% increase, with data-integrity findings in about 60% of letters to Indian sites | A review of 85 warning letters to drug product manufacturers issued between 1 Jan and 9 Dec 2025 (same source, S092) found 59% went to US facilities, with India one of several non-US countries represented, not the majority, and gives no India-specific count | Do not cite the 303/190 figures as an authoritative India-specific count; use them only as a directional "overall FDA warning-letter volume rose sharply in 2025" claim, attributed by name to the promotional source, pending a direct year-by-year pull from FDA's own warning letter database filtered to India-based addresses | This is the largest open gap in lane R-B (see raw/R-B-pharma-sector-regulation.md Gaps section); the plan's explicit ask for a 2019 to 2026 India warning-letter count by year is unmet |
| C05 | Size of India's CDMO/CRDMO market | Bajaj Asset Management Company (S126), using a narrower CRDMO definition, estimates about USD 7 billion, growing near 14% CAGR through FY28 | Mordor Intelligence, cited via Tradejini (S127), using a broader "contract manufacturing" definition, puts the market at USD 22.51 billion in 2024, growing to USD 44.63 billion by 2029 | Never cite a single "India CDMO market size" figure without naming which scope (CRDMO specifically, versus broader contract manufacturing) it uses; present both figures side by side, labelled by definition, rather than averaging or selecting one as the headline number | The two estimates differ by more than threefold purely because of scope, not because of a factual disagreement about the same quantity |
| C02 | Beneish M-Score manipulation-risk cutoff threshold | GuruFocus and related practitioner sites (S005) state the cutoff is a score above -1.78 | Marcum LLP (S006) states the cutoff is -2.22, with a "grey zone" between -2.22 and -1.78 | Both thresholds appear in reputable secondary practitioner literature with no single authoritative primary-paper citation located in the R-A pass. State both values as alternative practitioner conventions in the research document rather than picking one; resolve against Beneish's original 1999 paper in a later verification pass | PLAN.md §0.3 rule 5 (primary-source precedence, pending primary-paper verification); R-A raw file, Gaps section |
| C03 | FinChat.io company-coverage figure | One secondary vendor profile (S025, morningdough) states FinChat covers "over 100,000 global public companies" | A second secondary profile of the same product (S025, altss) gives "over 750 companies" | Neither source is FinChat's own site; both are third-party directory listings. Do not cite either coverage figure in the research document without a direct fetch of finchat.io; use this disagreement as a methodological illustration of aggregator source conflict | R-A raw file, Gaps section; to be resolved by a direct fetch of finchat.io before Round 2 writing |
| C-RC01 | Tier-II city discount under the October 2025 CGHS rate revision | Outlook Money (S230), directly fetched, states Tier II cities are priced 10% lower than Tier I | KPMG (S233), summarizing a different outlet's report on the same revision, states Tier-II cities (naming Chandigarh, Jalandhar, Ludhiana) are priced 19% lower than Tier I | The directly fetched source (S230) is given precedence for now, but neither source is the CGHS office memorandum itself; flagged for the R2 verification pass to resolve against the primary memorandum | PLAN.md §0.3 primary-source precedence; R-C raw file, Conflicts section |
| C-RC02 | CGHS OPD consultation fee baseline under the October 2025 revision | A secondary source cited via ICICI Direct (S232) states the OPD consultation fee was raised from Rs 150 to Rs 350 | A different secondary source states a super-specialist consultation is Rs 700 and a normal specialist visit is Rs 350, implying a different pre-revision baseline or fee category | Neither source is the official CGHS office memorandum; both treated as SNIPPET-only, excluded from any downstream slide or deck number until the primary memorandum is read directly | R-C raw file, Gaps and Conflicts sections |
| C-RC03 | Brownfield share of India's hospital bed-addition pipeline | Bajaj Broking, via Business Today, states about 63% of upcoming incremental industry bed capacity is brownfield (upgrading existing hospitals) | ICRA's own thematic report (S180) does not state a brownfield percentage at all; a separate ICRA figure of 63.5% refers to FY2025 sector occupancy, not brownfield share, a digit coincidence that must not be conflated with the 63% brownfield claim | Retain the 63% brownfield figure sourced to Bajaj Broking only, explicitly not attributed to ICRA, to prevent the digit coincidence from being miscited downstream | R-C raw file, Conflicts section |
| C-RDS01 | Sun Pharmaceutical Industries FY2026 (year ended 31 Mar 2026) consolidated revenue | CRISIL's rating rationale (S251, directly fetched) states revenue of Rs 58,563 crore; stockanalysis.com's income statement (S253, directly fetched) states Rs 58,462 crore | A third secondary trade-press source (Indian Pharma Post, S277) states Rs 58,220 crore for the same period | None of the three is the company's own annual report or NSE/BSE results filing opened directly; per primary-source precedence, flag all three as provisional and resolve against Sun Pharma's FY2026 annual report before citing a single figure in any deck, report table or UI demo copy | R-D-SUNPHARMA raw file, Conflicts section |
| C-RDS02 | Sun Pharmaceutical Industries Q4 FY26 (quarter ended 31 Mar 2026) revenue and EBITDA | One secondary source cluster reports Q4 FY26 revenue of about Rs 14,612 crore and EBITDA of about Rs 3,954 crore | A different secondary source cluster reports Q4 FY26 revenue of about Rs 14,560 crore and EBITDA of about Rs 3,527 crore | Neither cluster traces to the Q4 FY26 press release PDF on sunpharma.com, which was not opened directly in this pass; resolve against that primary document before citing an exact Q4 FY26 figure anywhere | R-D-SUNPHARMA raw file, Conflicts section |
| C-RDS03 | Sun Pharmaceutical Industries FY2021 (year ended 31 Mar 2021) revenue from operations | One secondary report states consolidated sales from operations of about Rs 33,139.2 crore | A second Business Standard report on the same period states about Rs 33,498.14 crore | Neither was traced to the FY21 annual report itself; flagged for a verification pass against the primary filing before use | R-D-SUNPHARMA raw file, Conflicts section |
| C-RDD01 | Dr. Reddy's Laboratories FY2026 (year ended 31 Mar 2026) PSAI segment revenue | The company's own results table, per a secondary summary of the release (MarketScreener), states Rs 34,774 million | A different secondary source states Rs 4,204 crore (Rs 42,040 million) for the same period, against Rs 4,324 crore in FY25 | Neither figure was checked against the primary 6-K/annual report PSAI line directly; the mismatch (about 21%) is too large to be a simple unit error and may reflect different scope (API-only versus total PSAI segment). Flag both as provisional pending a direct primary-document check | R-D-DRREDDY raw file, Conflicts section |
| C-RDD02 | Dr. Reddy's Laboratories Q2 FY25 (quarter ended 30 Sep 2024) consolidated net profit | Business Standard, directly fetched, states consolidated net profit decreased 15.28% to Rs 1,255.7 crore | AlphaStreet India states net profit of about Rs 1,342 crore, down about 9.5% YoY, for the same quarter | Business Standard's figure is given provisional precedence because its percentage change is internally consistent with the prior-year Q2 FY24 base used elsewhere in the company dossier, but neither source is the company's own Q2 FY25 results PDF; resolve against that primary document before citing either figure as final | R-D-DRREDDY raw file, Conflicts section |
| C-RDD03 | Dr. Reddy's Laboratories peer-comparison valuation multiples (P/E, ROE) as of late Jul/early Aug 2026 | Pocketful (29 Jul 2026) states P/E 16.87 and ROE 18.53% | Motilal Oswal (6 Aug 2026) states P/E 30.23 and ROE 11.07%, for dates about a week apart | Neither source documents its exact earnings window or whether consolidated or standalone figures are used; the gap is too large to be explained by one week of price movement alone. Do not cite a single Dr. Reddy's P/E or ROE figure in any deck or report table without naming the source and date | R-D-DRREDDY raw file, Conflicts section (sources not given a Facts-table row because this lane's reserved S-ID block, S370 to S429, was already fully used) |
| C-RDC01 | Cipla FY25 (Mar 2025 quarter, i.e. Q4 FY25) consolidated net profit used as the prior-year base in later YoY comparisons | Screener.in's own quarterly table states Q4 FY25 (Mar 2025) net profit as Rs 1,214 crore | A Business Today article reporting the Q4 FY26 YoY comparison cites the Q4 FY25 base as Rs 1,221.84 crore | The difference (about Rs 8 crore, under 1%) is too small to be a real factual conflict and likely reflects standalone-versus-consolidated or pre-versus-post exceptional-item treatment; flagged for the writer phase to reconcile against the primary Q4 FY25 results filing rather than silently picking one number | R-D-CIPLA raw file, Conflicts section |
| C-RDC02 | Cipla Q3 FY26 (quarter ended 31 Dec 2025) net-profit decline percentage versus the prior year | A Reuters-sourced article, directly fetched, states consolidated net profit fell 57% YoY, from Rs 1,571 crore to Rs 676 crore | Screener.in's quarterly table shows a roughly 50% fall versus the immediately prior quarter (Q2 FY26, Rs 1,353 crore to Q3 FY26 Rs 674 crore) | Resolved, not a true conflict: the 57% figure is a YoY comparison (against Dec 2024's Rs 1,575 to 1,571 crore) and the roughly 50% figure is a QoQ comparison; both are correct for their own stated base. Logged because the two percentages are easy to miscite against the wrong base if lifted without checking which comparison each source is making | R-D-CIPLA raw file, Conflicts section |
| C-RC04 | Apollo Hospitals' announced five-year bed-expansion plan and its capex (originally recorded from the Business Today URL used as S224) | The R-C lane's original pass recorded "over 4,300 beds over five years at an investment of over Rs 7,600 crore" as a verbatim quote from this URL | Reopening the identical URL in the R2 pass returned a materially different figure: "nearly 4,400 beds" with about 3,600 census beds expected operational, at a capex of about Rs 8,000 crore (of which about Rs 5,100 crore of the remaining spend is to be funded from internal cash generation); no 4,300-bed or Rs 7,600 crore figure appears anywhere in the reopened content | Treat the reopened figures (4,400 beds; ~Rs 8,000 crore capex) as the corrected, currently-supported numbers (row RC12 marked CORRECTED); the original 4,300/Rs 7,600 crore pairing could not be reproduced and should not be used | R-C raw file, Facts table row RC12, re-verified 11 Oct 2026 |
| C-RC05 | Fortis Healthcare hospital ARPOB growth rate and period, per Bajaj Broking (S189) | The R-C lane's original pass recorded "FY26...rose 3.4 percent to Rs 2.51 crore per annum" | Reopening the identical Bajaj Broking URL shows "hospital ARPOB grew 5.8% to Rs 2.51 crore per annum" explicitly for Q2 FY26, not full-year FY26 | The absolute figure (Rs 2.51 crore per annum) matches across both reads; the growth percentage and period do not. Row RC32 corrected to Q2 FY26, +5.8%; the units remain not directly comparable to the FY25 daily-rate ARPOB of Rs 66,301 | R-C raw file, Facts table row RC32, re-verified 11 Oct 2026 |
| C-RC06 | Scale of the EBITDA drag from Global Health Ltd (Medanta)'s new Noida hospital in FY26 | The R-C lane's original pass recorded a Noida-hospital EBITDA loss of Rs 783 million (source: BioVoice News, S214) | Reopening the same BioVoice News URL in the R2 pass found no Rs 783 million figure; it instead reports Q2 FY26 consolidated EBITDA of Rs 2,804 million excluding Noida versus Rs 2,607 million including it, a roughly Rs 197 million single-quarter gap (the lane's own arithmetic, not a figure the article states directly) | The Rs 783 million figure could not be reproduced on reopening and is flagged unconfirmed (row RC56 marked CORRECTED, with the loss figure removed and the bed-addition breakdown, which did reconfirm exactly via a second source, retained) | R-C raw file, Facts table row RC56, re-verified 11 Oct 2026 |
| C-RC07 | MedPlus Health Services FY26 EBITDA margin figure and its label | The R-C lane's original pass recorded "the pharmacy segment achieving an operating EBITDA margin of 5.1 percent" | Reopening the Quartr source in the R2 pass found a company-wide FY26 operating EBITDA margin of 5.3%, plus a separate store-level EBITDA margin of 13.1% for stores older than 12 months; no 5.1% "pharmacy segment" figure was found | Row RC86 corrected to the reopened, directly-confirmed figure (5.3% company-wide operating EBITDA margin for FY26); the original 5.1% "pharmacy segment" framing could not be reproduced | R-C raw file, Facts table row RC86, re-verified 11 Oct 2026 |
| C-RC08 | Metropolis Healthcare revenue-per-patient (RPP) and revenue-per-test (RPT) growth, and the quarter they refer to | The R-C lane's original pass (row RC91, source S236/AlphaStreet) recorded "Q4 FY26 RPP improved 11 percent year on year while RPT increased 8 percent year on year" | Reopening the same AlphaStreet URL in the R2 pass found it covers Q3 FY26 (quarter ended 31 Dec 2025, published 4 Feb 2026, before FY26 closed), and states RPT up 11% to Rs 557 and RPP up 10% to Rs 1,165 (the two metrics' growth rates and the period both differ from the original row) | Row RC91 left as SNIPPET (not corrected, since no fetch in this pass could confirm either a true Q4 FY26 figure or resolve which metric the "11%" belongs to); flagged for a dedicated re-check against Metropolis's own Q4 FY26 / full-year results release | R-C raw file, Facts table row RC91, re-verified 11 Oct 2026 |
| C-RC09 | CGHS OPD consultation-fee baseline under the October 2025 revision (narrows C-RC02) | C-RC02 left this open between "raised from Rs 150 to Rs 350" and "super-specialist Rs 700 / normal specialist Rs 350" | Directly reopening a secondary HTML mirror of the CGHS rate annexure (staffnews.in) and an Outlook Money clarification piece in the R2 pass both confirm the post-revision rates as Rs 350 (normal specialist OPD) and Rs 700 (super-specialist/psychiatry OPD); neither source states or confirms a Rs 150 pre-revision baseline | Row RC67 corrected to state only the confirmed post-revision Rs 350 / Rs 700 split; the "raised from Rs 150" claim is dropped as unconfirmed rather than carried forward | R-C raw file, Facts table row RC67, re-verified 11 Oct 2026 |
| C-RC10 | Verbatim snippet for the 2017 NPPA cardiac-stent price caps (row RC69, source S234/Scroll.in) | The R-C lane's original pass recorded a verbatim quote: "price cap for BMS is Rs 7,260 while that for a drug-eluting stent is Rs 29,600," attributed to this Scroll.in URL | Reopening the identical URL in the R2 pass twice, with different prompts, found no such figures anywhere in the article; the only stent-related text found is a passing reference to "the NPPA had passed an order capping the prices of stents used in cardiac procedures," with no rupee amounts | The quote could not be reproduced from the cited source. Row RC69 is left as SNIPPET (not promoted, not corrected to a different figure, since no working alternate source with these numbers was found either) with an explicit caution flag; this snippet should not be treated as reliable until it is checked against the original 2017 NPPA notification | R-C raw file, Facts table row RC69, re-verified 11 Oct 2026 |
| C-RDT01 | Sai Life Sciences FY2026 margin metric | stockanalysis.com's income-statement page states an FY2026 operating margin of 21.22% (S578) | Sai Life Sciences' own Q4 FY26 Earnings Presentation (S579) separately states an EBITDA margin near 30% for the same fiscal year | Not a true factual conflict: operating margin (EBIT-based) is structurally lower than EBITDA margin for a capital-intensive CDMO because it nets out depreciation and amortisation. Treat the two figures as different metrics describing the same year; never cite one labelled as the other, and do not average or reconcile them without the full depreciation schedule | R-D-TIEBREAK raw file, Facts table row RDT71, 13 Oct 2026 |
| C-RDT02 | Mankind Pharma FY2026 net income figure | stockanalysis.com's income-statement page states FY2026 (Mar 31, 2026) net income of Rs 1,912.9 crore (S574) | The same page's FY2024 (Mar 31, 2024) net income figure is also Rs 1,912.9 crore, an exact digit match across two different fiscal years on one aggregator page | Not resolved: this is either a real coincidence or an aggregator data error on stockanalysis.com's part. The FY2026 figure is left as SNIPPET (row RDT61) and should not be cited in any deck, report table or UI demo without re-verification against Mankind Pharma's own FY2026 results filing | R-D-TIEBREAK raw file, Facts table row RDT61, 13 Oct 2026 |
| C-RE01 | The URL for the FDA's Import Alert 66-40 page | PLAN.md §4.2's planning-time text names `www.accessdata.fda.gov/cms_ia/importalert_170.html` as the page to test | Lane R-E's live WebFetch to importalert_170.html returned HTTP 404; a WebSearch found the live page is actually at importalert_189.html, titled "Import Alert 66-40", with a page "Published Date" of 10/01/2026 | CORRECTED: use importalert_189.html as the source of record for Import Alert 66-40 in the engine and in any research-document citation; importalert_170.html does not resolve and should not be used | R-E raw file, Facts table row RE11, live-tested 14 Oct 2026 |
| C02 | Beneish M-Score manipulation-risk cutoff threshold (extends the original C02 logged by lane R-A; not a duplicate) | Original R-A entry: GuruFocus-family sources state the cutoff is above -1.78. Lane R-F independently confirms this figure directly from Wikipedia's Beneish M-score page, which states -1.78 applies "for the model whose coefficients are reported above" (the eight-variable model) (S715) | Original R-A entry: Marcum LLP states -2.22, with a grey zone between -2.22 and -1.78. Lane R-F finds this -2.22 figure recurring across multiple practitioner glossary sites, several of which frame it as the threshold for a simplified five-variable variant of the model rather than a straightforward alternative to -1.78 (S716); a University of Lodz accuracy study separately found 71% overall classification accuracy at -2.22 versus 75% accuracy after shifting the cutoff to -1.98, a third value matching neither convention (S717) | Unchanged from the original ruling, now reinforced with two more data points: state both the -1.78 (eight-variable model) and -2.22 (simplified five-variable model, or a conservative single threshold) conventions explicitly wherever the research document cites a Beneish M-Score cutoff, name which variant of the model each cutoff is said to apply to, and do not present either as the sole authoritative threshold without re-verification against Beneish's original 1999 paper, which no lane has yet directly opened | R-A raw file (original); R-F raw file, rows RF55 to RF57, 14 Oct 2026 (extension) |
| C-RF01 | Number of grades in the Admiralty/NATO information-credibility scale (5 point versus 6 point) | An initial WebSearch pass noted that "some secondary sources describe credibility as reaching only 5" grades | The Wikipedia 'Admiralty code' page, fetched directly for this lane, gives a full six-point scale (1 through 6, with 6 meaning "truth cannot be judged") (S702, rows RF14 to RF19) | Treat the six-point scale as the version this engine's Admiralty-grading module uses, since it is the version confirmed by direct fetch rather than a search snippet; state in the research document that at least one secondary source in circulation uses a five-point variant, consistent with the broader point that the underlying NATO AJP-2.1 primary text is not public and every version in circulation, including this one, is a secondary reconstruction | R-F raw file, rows RF14 to RF21, 14 Oct 2026 |
| C-RG01 | Cipla's share-price move after Q4 FY26 results (announced 13 May 2026) | R-D-CIPLA row RDC39 (Business Today, S319) states shares "rose 11% in two sessions" | This file's row RG16 (Liquide, directly fetched) states shares rose "over 8%" in a single session on 14 May 2026, and row RG15 (Angel One) shows a same-day (13 May) intraday gain of 2.62% | Not resolved against a primary NSE/BSE closing-price series; the 13 May (+2.62%) plus 14 May (+8%) figures are at least internally consistent with each other as two separate days, which would make the Business Today "11% in two sessions" figure the most complete description if its window matches these same two dates. Needs a direct NSE close pull, not a secondary aggregator, before use in any deck or report table | R-G raw file, Facts table rows RG15, RG16, 15 Oct 2026 |
| C-RG02 | Sun Pharma's intraday high on the Organon-announcement day, 27 Apr 2026 | Moneylife (directly fetched) states an intraday high of Rs 1,742 (+7.53% BSE / +7.50% NSE) | A different secondary source (seen only via WebSearch synthesis, not directly fetched) states an intraday high of Rs 1,766.65 (+9.06%) | The directly fetched Moneylife figure is given precedence per the primary-source-precedence rule (a direct fetch outranks a search-snippet synthesis describing the same single data point); neither was checked against NSE's own intraday tick data | R-G raw file, Facts table row RG02, 15 Oct 2026 |
| C-RG03 | Nifty Pharma index one-year return, autumn 2026 | Share.Market (30 Sep 2026) gives 24.4% | Two Sharpely.in pages give 18.86% and 15.95%, and a Nippon India Nifty Pharma ETF factsheet (30 Jun 2026) gives 15.73% TRI | Not resolved; an 8.7-percentage-point spread across four sources describing what should be the same metric. Flagged for direct resolution against niftyindices.com's own historical-levels file before this figure is used in any deck, report table or UI demo copy | R-G raw file, Facts table rows RG37, RG38, 15 Oct 2026 |
| C-RG04 | Sun Pharma's constituent weight within the Nifty Healthcare index | Tickertape (11 Jun 2026) gives 18.88%; a DSP index-fund holdings page (a fund portfolio, not the index itself, 30 Jun 2026) gives 18.13% | Bigul.co (undated) gives 25.24%; OneTradeJournal's own stated-as-illustrative estimate gives roughly 22 to 24% | Not resolved against niftyindices.com's own factsheet in this pass; roughly a 7-percentage-point spread between the lowest and highest index-level (non-fund) figures | R-G raw file, Facts table rows RG42, RG43, RG44, 15 Oct 2026 |
| C-RDM01 | Which Max Healthcare brownfield tower the "202 of 400 beds operational, 198 remaining" figure belongs to | R-D-MAXHEALTH row RDM47 (original pass) attributed "202 beds... operationalized, remaining 198... Q2 FY27" to the 400-bed brownfield tower at Max Smart Super Speciality Hospital, Saket, citing investywise.com (S497) | Reopening the identical investywise.com URL in the R2 verification pass (V1, 15 Oct 2026) found no 202/198 split for Max Smart anywhere in the article; it instead gives a clean 50%/50% (200-of-400) split for the Max Smart tower, and the 202-bed figure belongs to a separate, newly board-approved brownfield tower at Max Vaishali (consistent with row RDM49, which already describes a distinct 202-bed Vaishali project) | CORRECTED: row RDM47 now states the 50%/50% Max Smart split actually found in the reopened source; the 202/198 figures are dropped from RDM47 as a source conflation with the Vaishali project, not a real fact about Max Smart | R-D-MAXHEALTH raw file, Facts table row RDM47, re-verified 15 Oct 2026 by R2 verification agent V1 |
| C-RB01 | Exact Gazette notification number and compliance-deadline dates for revised Schedule M (GMP), large units versus MSME | R-B lane's original pass (rows RB37, RB38) recorded Gazette notification "G.S.R. 922(E)" dated 5 Jan 2024, with large-unit (turnover above Rs 250 crore) compliance by about 4 Jul 2024 and MSME compliance by about 4 Jan 2025, both citing india-briefing.com (S099) | Reopening the identical india-briefing.com URL in the R2 verification pass (V1, 15 Oct 2026) found a different notification date (28 Dec 2023, no "G.S.R. 922(E)" citation anywhere in the readable text) and different deadlines: large-unit compliance effective 28 Jun 2024 (not 4 Jul 2024), MSME compliance by 28 Dec 2024 (not 4 Jan 2025) | CORRECTED: rows RB37 and RB38 now state the dates actually found in the reopened source (28 Dec 2023 notification; 28 Jun 2024 large-unit deadline; 28 Dec 2024 MSME deadline); the Rs 250 crore/USD 28.77 million turnover threshold and the six-month/twelve-month compliance periods both reconfirmed exactly and are unchanged. The original "G.S.R. 922(E)" / 5 Jan 2024 / 4 Jul 2024 / 4 Jan 2025 figures could not be reproduced from this source and should not be used without checking the primary CDSCO/Gazette notification directly | R-B raw file, Facts table rows RB37, RB38, re-verified 15 Oct 2026 by R2 verification agent V1 |
| C-RG05 | Sharpely.in's Nifty 50 one-year trailing return, same page, five weeks apart | R-G lane's original pass (14 Oct 2026, via WebSearch synthesis, row RG45) recorded the page showing a one-year return "between roughly -3.3% and -5.2%" depending on which of the site's own pages was read | Reopening the identical `https://sharpely.in/indices/Nifty-50/0` URL by direct WebFetch in the R2 verification pass (V2, 15 Oct 2026) found the one-year return now reads -10.03%, while the 52-week high (26,373.2) and low (22,179.9, versus 22,182.55 originally, an immaterial Rs 2.65 difference) both still match closely | Not a factual error in either read; this is the same live, continuously-updated page showing a trailing one-year return that moved by 5 to 7 percentage points within five weeks because the trailing window itself moved. Flag explicitly if a Nifty 50 one-year return figure from this source is ever cited in the deck, report, or UI demo: state the exact access date, since the number is not stable even over a few weeks on this one aggregator | R-G raw file, Facts table row RG45, re-verified 15 Oct 2026 by R2 verification agent V2 |
| C-RG06 | JPMorgan analyst attribution on Dr. Reddy's Oct 2025 semaglutide Health Canada non-compliance move | R-G lane's original pass (row RG25, via WebSearch synthesis) stated the Oct 2025 fall came "with JPMorgan analysts flagging risk to the company's first-mover advantage" | Re-verification in the R2 pass (V2, 15 Oct 2026): the original Angel One URL now returns HTTP 410 Gone; a fresh WebSearch cross-check confirms the 30 Oct 2025 date, the "more than 5%" fall, and the Rs 1,181.60 five-month-low figure via independent Business Standard and Motilal Oswal coverage, but finds the JPMorgan note it can locate is tied to a separate, later Q1-results-miss brokerage round of estimate cuts (an Outlook Business article), not to this specific 30 Oct 2025 Health Canada notice | CORRECTED: row RG25 drops the JPMorgan attribution to this specific event as unconfirmed; the date, percentage fall, and five-month-low price are retained since they are independently corroborated by two other named outlets | R-G raw file, Facts table row RG25, re-verified 15 Oct 2026 by R2 verification agent V2 |

## Appendix G: Evaluation tables

Not yet generated. The evaluation harness (`engine/next_signal/eval/harness.py`, `timetravel.py`, `ablation.py`, `summarize.py`) and `next-signal-bits/model/collect_outputs.py` have not been run yet: all six pipeline stages exist and pass 254 unit tests as of this assembly, but most live source clients and the LLM router are not yet wired through the orchestrator, so a harness run today would mostly produce honest empty results rather than the kill-rate, anchor-precision and runtime statistics this appendix is meant to hold. This appendix will be regenerated from real `model/model_outputs.json`/`model_tables.md` data before the Round 1 submission, per the two-pass rule applied to research document sections 19 and 21.
