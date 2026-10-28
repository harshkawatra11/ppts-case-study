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

STATUS: PASS
