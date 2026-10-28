# Part A

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

STATUS: PASS
