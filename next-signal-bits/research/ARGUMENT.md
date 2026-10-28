# Next Signal: The Solved Argument

This file is the output of PLAN.md §4.1 step 3 (skill touchpoint T1/T2). It is the content-engineering layer that
every later writer, slide and UI string must agree with. Nothing below is final creative copy; it is the thesis the
creative copy has to express.

## 1. Case type and audience

**Case type.** None of the six case-type guides in the skill fits this hackathon exactly. It is not an M&A deal, a
market-entry strategy question, a marketing campaign, a social-impact intervention, a policy choice, or a classic
operations redesign. It is closest to a hybrid of **Strategy** (we are choosing a product design against an implied,
obvious alternative design) and **Operations** (we are redesigning a research process end to end). Per the skill's
own "Calibration honesty" and "Scope and adaptation guidance" sections, this is flagged explicitly: the structural and
rhetorical patterns (contrarian recommendation, action titles, moneyshot, foreshadowing, symmetric treatment,
defensive depth, three-scenario thinking, double synthesis) are treated as generalizing with confidence, because they
describe how any persuasive analytical work should be built. The case-specific frameworks drawn from
`case_types/strategy.md` and `case_types/operations.md` (and, narrowly, financial vocabulary from
`case_types/mna_finance.md` for the metrics the engine itself computes) are treated as adapted, not calibrated, since
the GCCH corpus behind this skill is M&A decks, not research-tooling hackathons. This adaptation is stated plainly in
research document §26 ("Method, limits and the validation we would run next").

**Audience.** The judging panel is The Wall Street Club and The Economics Association at BITS Pilani Hyderabad,
plus a practitioner (Vinit Bolinjkar) offering pre-placement interviews to top teams. This is a buy-side or
equity-research-minded audience, not a marketing audience. The brief states explicitly that model choice, agent
count, UI complexity, report length and any investment call are not judged. The register for every deliverable is
therefore an equity-research note's register: plain, numerate, source-anchored, and never promotional.

## 2. The obvious answer, and why it falls short

**What most teams will build.** An LLM agent, or a small crew of agents, that downloads a company's own annual
report, quarterly results and call transcripts, puts them in a retrieval index, and asks a model to read them and
surface something interesting, then writes it up as a report.

**Three reasons this fails the brief, each becoming a left-column reason on the executive-summary slide:**

1. **Quantitative.** A model reading one company's own documents mostly restates what management already chose to
   emphasise. The brief's own worked example finds its story in a *computed* gap between the narrative (volume-led
   premium growth) and the arithmetic (price versus volume split, receivable days rising from 28 to 46). A
   summarising agent that does not compute these relationships from raw disclosed numbers cannot reach that kind of
   finding; it can only repeat what is already written down.
2. **Strategic and evidentiary.** The company's own disclosures are the least independent source available about the
   company. For Track D specifically, the most informative evidence often sits outside the company's own documents
   entirely: USFDA inspection classifications, warning letters and import alerts, ANDA approval dates, the
   regulatory status of a manufacturing partner the company depends on, peer companies' segment numbers for the same
   quarter, and the market's own reaction on the day a filing actually posted. A single-corpus retrieval agent has no
   mechanism to go find any of this, let alone to notice when it contradicts the company's own framing.
3. **Feasibility and trust.** An agent that stops once it has formed an opinion produces confident, uncorrected
   errors. The finals judging criteria explicitly reward falsifiability, robustness and explainability, meaning a
   system has to show its own kill process, not just its conclusion. Even reputable financial-data aggregators
   disagree with primary filings in practice, a fact confirmed directly while researching this plan (two secondary
   sources quoted different Q1 FY27 net-profit figures for Dr. Reddy's Laboratories, one of them wrong relative to
   the company's own filing). A system with no built-in habit of checking a number against its primary source would
   have no way to notice this kind of error, let alone correct it before presenting a conclusion.

## 3. The recommendation: the contrarian design thesis

**Next Signal computes before it reads, looks outside the company before it trusts the company, and spends most of
its effort trying to kill its own hypotheses. A discovery is whatever survives that effort.**

**Three reasons this is the right build, each becoming a right-column reason on the executive-summary slide:**

1. **Quantitative.** A deterministic metric library of more than forty formulas, run against every period of
   disclosed data, computes peer-relative z-scores and statistical change-points before any language model is asked
   to form an opinion. The language model's job is narrowly to explain an anomaly the arithmetic has already found,
   never to invent or adjust a number. This inverts the usual order (read, then maybe compute) and makes the
   computation the thing that decides what is worth reading closely.
2. **Strategic and evidentiary.** An independence graph counts *origins* of evidence, not documents, collapsing
   multiple items from the same publisher into a single origin so that "the company said it three different ways" is
   never mistaken for three independent confirmations. Track D is unusually rich in independent, dated, external
   regulator evidence (USFDA inspection and enforcement records, the FDA Orange Book, CDSCO and NPPA notices), which
   makes the brief's required temporal reasoning ("when and how the story changed") directly testable rather than
   asserted: the system can show, with dates, that a regulator record or a price movement preceded the first
   mainstream news coverage of the same story.
3. **Feasibility and trust.** Every surviving hypothesis has to pass a fixed battery of nine rival-explanation tests
   (sector-wide movement, foreign-exchange effect, one-off item, label reclassification, seasonality, persistence
   across periods, demonstrated novelty, an active disconfirming search, and a point-in-time replay) assembled into
   an Analysis of Competing Hypotheses matrix. The strongest rival hypothesis that survives this process becomes the
   discovery's own stated Counterargument, and a specific, machine-checkable threshold becomes its Falsification
   Condition. This is not decoration: it is the mechanism that keeps a false or sector-wide finding from being
   reported as company-specific.

## 4. The moneyshot

The moneyshot is a single evaluation number, produced only by the evaluation harness (PLAN.md §5.14) and never typed
by hand into any deliverable. Its template, to be filled from `model/model_outputs.json` once the engine and
evaluation run exist:

> "Across {{n_companies}} Track D companies, Next Signal proposed {{hyp_total}} hypotheses and killed {{kill_rate}}
> of them before writing a word; the discoveries that survived each rest on at least {{med_origins}} independent
> origins, and {{anchor_precision}} of their numbers trace to a verbatim passage in a named document."

A secondary number, for the temporal-reasoning panel of the workflow slide: the median number of days between the
earliest independently dated external record supporting a discovery and the first mainstream news coverage of the
same story, computed from the time-travel evaluation set.

Until the engine exists and the evaluation harness has run, every occurrence of these numbers anywhere in any
deliverable (research document, Round 1 PDF, deck, UI copy) must remain a literal `{{EVAL:...}}` placeholder. The
assembler and the deck's font-sweep both fail the build if a placeholder survives past the point where real numbers
should have replaced it (PLAN.md §4.6 step 1, §7.1).

## 5. Foreshadowing and symmetry

**Seed sentence** (planted in the research document's early sections and on the executive-summary slide, before the
architecture is named): "The evidence a Track D discovery needs is split across at least four different publishers,
and the company itself is only one of them." This is shown as a measured fact (the origin-mix breakdown of the
evidence behind surviving discoveries), not asserted rhetorically.

**Symmetric treatment.** The five NIFTY 50 healthcare companies (Sun Pharmaceutical, Cipla, Dr. Reddy's
Laboratories, Apollo Hospitals, Max Healthcare Institute) receive an identical company-dossier template in the
research document (identity, five-year financial table, eight-quarter table, event timeline, management-narrative
themes, three seeded practice hypotheses). The two sub-industries inside Track D (pharmaceuticals, hospital services)
receive parallel angle playbooks built on the same scoring formula, so "the same system worked on a different company"
is demonstrably true rather than claimed.

**Double synthesis.** A "Conclusively" card closes the executive-summary slide: a plain-language agent that only
summarises a company's own documents cannot pass the brief's own worked example, because that example's central
finding is a calculation, not a quote. A "Therefore" card closes the final slide: give the system any Track D
company, live, and it runs the same code, links every number to its source, and states a condition under which it
would change its mind.

## 6. Frameworks used, and where

| Framework | Where it is applied |
|---|---|
| Issue tree (MECE) | Research doc §4 ("Why summarisers miss the signal") |
| Pyramid Principle | Research doc §2 ("The answer on one page") |
| Analysis of Competing Hypotheses (Heuer, 1999) | Research doc §16; engine `grading/ach.py`; deck S5 |
| Admiralty / NATO source reliability grading | Research doc §10, §13; engine `grading/admiralty.py`; deck S4 |
| GRADE-style certainty language | Research doc §17 (evidence strength reasoning) |
| Popperian falsifiability | Research doc §17; engine `grading/falsify.py`; the brief's own required output element |
| Pre-mortem (Klein, 2007) | Research doc §22 (risks) |
| Kepner-Tregoe problem analysis ("is / is not") | Research doc §16 (contradiction detection) |
| Scenario planning (for demo-day risk, not a financial forecast) | Research doc §22; PLAN.md §10 |
| PESTLE | Research doc §5 to §7 (Track D sector context) |
| Porter's Five Forces | Research doc §5 (US generics versus India branded formulations) |
| Value chain analysis | Research doc §4 (the equity-research analyst's own value chain) |
| Three Horizons | Research doc §23 (build plan, and what happens after the hackathon) |
| Event-study methodology (MacKinlay, 1997) | Engine `metrics/eventstudy.py`; research doc §9, §18; deck S4 |
| Change-point detection (Killick, PELT) | Engine `metrics/changepoint.py`; research doc §14, §18; deck S4 |

## 7. What this section establishes, and what it does not

This section fixes the recommendation, the moneyshot template, the seed sentence, and the framework map before any
Figma node or any paragraph of the research document is written, so that every later deliverable argues the same
thing in the same order. It does not yet contain a single verified number: every number named above is a template
key to be filled only from `research/raw/*` (desk research, with sources) or `engine/eval/out/*` (measured engine
output), never invented here or anywhere downstream. It also does not resolve the open items listed in PLAN.md §12
(team name confirmation, missing logos, SEC contact string, GitHub and submission approvals), which remain the
user's decisions.
