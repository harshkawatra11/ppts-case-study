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

