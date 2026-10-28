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

Words: 17711. Tables: 29. Dashes: 0. Exclamations: 6 (all six are the literal `!` inside `<!-- GAP: ... -->` HTML comment markers used per the writer brief's own convention for flagging a number not yet in any raw file; none is a real exclamation mark in authored prose, confirmed by direct inspection). STATUS: PASS.
