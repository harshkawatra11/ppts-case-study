# Next Signal (ATMOS 2026, BITS Pilani Hyderabad) · Track D · Master Execution Plan

> Executors: Sonnet-class subagents. This plan is written so that you spend your time executing, not deciding.
> Every decision that can be made in advance has been made here. When something in this plan conflicts with your
> instinct, follow the plan. When something is genuinely missing, follow the "Default when unspecified" rule in §0.6.

**Contents:** §0 Context, rules, skill touchpoints · §1 Case decoded (RTM, judging map, team, machine facts,
credentials) · §2 Solved argument · §3 Calendar, dispatch, folders · §4 Research deliverable · §5 Research engine
(spikes, sources, schemas, six stages, grading, API, eval, voice, exports) · §6 Dashboard (tokens, pages, build
sequence, prompts) · §7 Figma deck · §8 Round 1 submission · §9 Verification · §10 Risks · §11 Finals · §12 Open
items · §13 Hand-off · Appendix X reference code.

**Order of work (user-mandated):** research deliverable first, prototype second, presentation third. The Round 1 PDF
(case-mandated, due 19 Oct) slots between prototype MVP and the deck.

---

## §0 CONTEXT AND HOW TO USE THIS PLAN

### §0.1 Why this work exists

The user (Harsh Kawatra, team lead; teammates Gursimran) is entering **"Finding the Next Signal"**, the
Autonomous Financial Research Hackathon run by The Wall Street Club and The Economics Association at **ATMOS 2026,
BITS Pilani Hyderabad Campus**. Top teams get **pre-placement interviews** (to work with Vinit Bolinjkar) plus a
Rs 40,000 prize pool, so the quality bar is "would a buy-side research head hire the people who built this".

The case brief lives at `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\next-signal-bits\0e6fade1-28b1-4037-b9c7-9ece51c365eb.docx`.
Every executor must read it in full before starting (extract with
`python -c "import docx; d=docx.Document(r'<path>'); print('\n'.join(p.text for p in d.paragraphs)); [print(' | '.join(c.text for c in r.cells)) for t in d.tables for r in t.rows]"`).

**The ask:** build an autonomous research agent that, given ANY NIFTY 50 company from one chosen sector track,
investigates public information on its own and produces a non-obvious, evidence-backed, falsifiable financial
discovery, with an auditable evidence trail. The same system, with no company-specific tuning, must work for every
company in the track, and in a tie-break for any listed company in the same sector (including non-NIFTY 50 names).

**Chosen track: Track D, Pharma & Healthcare** (user decision, 2026-10-11).

### §0.2 The four deliverables, in build order (user-mandated order)

| # | Deliverable | Location | Owner phase | Hard deadline |
|---|---|---|---|---|
| 1 | **Research deliverable** (very long, consulting-grade research document) | `nsut-innovators-court\next-signal-bits\research\` | Phase R | 2026-10-14 EOD |
| 2 | **Prototype** (Next.js + TS dashboard + Python research engine + voice + exports) | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits\` | Phase P | MVP 2026-10-17, final 2026-10-23 |
| 3 | **Round 1 solution report PDF** (case-mandated, 1 page preferred, 2 pages max) + optional 2-min demo video + GitHub link | `nsut-innovators-court\next-signal-bits\round1\` | Phase S | **2026-10-19 23:59 IST** (Unstop) |
| 4 | **Figma Slides deck** (8 slides: 1 cover, 5 core, 1 appendix, 1 thank-you) for the finals 10-minute presentation | Figma (new Slides file) | Phase D | 2026-10-23 |

Deliverable 3 is not in the user's message but is **required by the case** (Round 1: "Solution report (required): a
short PDF ... One page is appreciated; two pages maximum", file name `TeamName_TrackX_Round1.pdf`). It is derived from
deliverables 1 and 2, so it slots in after the MVP. Shortlist is announced 2026-10-23; finals are online on
**2026-10-25** (10-minute presentation + live demo, 15-minute Q&A, judges pick the company on the spot).

### §0.3 Golden rules (apply to every file, every slide, every UI string, every commit)

1. **Zero em dashes (U+2014) and zero en dashes used as punctuation (U+2013)** anywhere in the research document, the
   Round 1 PDF, the deck, UI copy, README, or generated report templates. Use commas, colons, full stops, parentheses,
   or "to" for ranges (e.g. "FY21 to FY26"). Verification grep is in §9. Hyphens in compound words are fine.
2. **No hooks, no rhetorical questions as openers, no AI slop.** Banned words/phrases list in §0.5. Language is graded,
   humanised, analytical storytelling: plain declarative sentences, concrete numbers, named sources, a clear "so what".
3. **Never invent names** for the product, modules, or deliverable beyond the case's own words. The product is called
   **"Next Signal"** (from the case title "Finding the Next Signal"); modules are named after the case's own verbs:
   **Discover, Connect, Calculate, Reason, Challenge, Prove**. The output elements use the case's own labels: The
   Discovery, Why It Matters, Evidence, Timeline, Numbers, Counterargument, Falsification Condition, Evidence Strength.
   Do not coin acronyms such as "SIGNAL-X", "Project Setu" style labels, or mascot names. (User feedback, saved in memory.)
4. **Never fabricate data.** Every number in the research doc, deck, PDF and UI demo copy must trace to a public source
   URL or to a computation over sourced numbers, with the computation shown. If a figure cannot be verified from a
   primary source, either drop it or label it with its secondary source and the word "reported". No invented quotes,
   no invented expert validations, no invented user interviews. Evaluation numbers (moneyshot) come ONLY from the
   evaluation harness output files (§5.14), never typed by hand.
5. **Primary-source precedence.** Company filing on NSE/BSE/SEC > company investor presentation/transcript > regulator
   record (USFDA, CDSCO, NPPA) > credit rating rationale > industry body > reputable press > aggregator. When an
   aggregator disagrees with a filing, the filing wins and the disagreement is logged (this is itself a demo of
   contradiction detection; see the Dr. Reddy's Q1 FY27 example in §2.6).
6. **No investment recommendation** anywhere (case rule: "You do not need to give an investment recommendation, and you
   should not."). No "buy/sell/target price" language in UI, report, or deck. The UI footer carries a one-line
   disclaimer: "Research output for evaluation purposes. Not investment advice."
7. **No hard-coding of company-specific analysis** (case rule, disqualification risk). Company names may appear only in:
   the universe loader (which reads the official NSE index CSVs at runtime), test fixtures, the evaluation harness, and
   the research document. Grep gate in §9.
8. **Secrets never leave `.env.local` / `.env`.** Never print keys in logs, reports, screenshots, commits, or the deck.
   Copy key NAMES only into `.env.example`.
9. **Git commits: no `Co-Authored-By: Claude` trailer** (standing user rule). Commits must look like they come only from
   the user's own git identity. Do not push unless the user asks.
10. **Indian notation** in all user-facing numbers: Rs / ₹, lakh, crore; FY = April to March (FY27 = Apr 2026 to Mar
    2027); quarters as Q1 FY27. USD figures stay in USD when the source reports USD (US generics revenue), with the INR
    equivalent alongside only when the source gives it.

### §0.4 Where the `case-competition-deck` skill is used (mandatory touchpoints)

The skill lives at `nsut-innovators-court\.claude\skills\case-competition-deck\` (entry `SKILL.md`). Invoke it with the
Skill tool (`skill: "case-competition-deck"`); do not merely read it as a file. Touchpoints:

| Touchpoint | Phase | Skill files to read | What to take from it |
|---|---|---|---|
| T1 Case framing | R0 | `SKILL.md`, `references/case_types/strategy.md`, `references/case_types/operations.md`, `references/frameworks.md` | Case type identification (no exact fit: hybrid Strategy + Operations, flagged per "Calibration honesty"), contrarian pattern, framework selection |
| T2 Research document argument spine | R1 to R9 | `references/structure.md`, `references/rhetoric.md` | 8-section logic for the document chapters, action-title headings, foreshadowing, three-scenario thinking, pre-empting weaknesses, defensive depth |
| T3 Round 1 PDF | S1 | `references/rhetoric.md` §10 to §14 | Action titles, quantification, citation discipline at 2-page scale |
| T4 Deck content plan | D0 | `SKILL.md` §C (8 sections), `references/structure.md` compression guidance, `references/archetypes.md` | Collapsing 8 sections into 5 core slides (§7.2 mapping), moneyshot, double synthesis |
| T5 Deck critique | D5 | `references/critique_rubric.md` (critique mode) | Score the built deck; fix top 3 to 5 issues before final QA |
| T6 Research doc critique | R10 | `references/critique_rubric.md` adapted (Dimensions 1, 3, 4, 6, 7) | Score the document; fix top issues |
| T7 Finals Q&A prep | F1 | `references/rhetoric.md` §6 (pre-empting weaknesses), §8 (defensive depth) | Build the 30-question Q&A bank |

Calibration note to state honestly in the research doc methodology chapter: the skill's corpus is GCCH M&A decks; this
case is a product/engineering hackathon judged on discovery quality. The structural and rhetorical patterns transfer
(action titles, contrarian thesis, moneyshot, foreshadowing, symmetric treatment, defensive depth); the M&A-specific
frameworks (DCF, premium decomposition) are replaced by research-methodology frameworks (Analysis of Competing
Hypotheses, Admiralty source grading, GRADE-style evidence certainty, Popperian falsification, change-point detection).

### §0.5 Writing style contract (research doc, PDF, deck, UI copy)

- Every chapter heading and every slide headline is an **action title**: a declarative finding, ideally with a number.
  Bad: "Data Sources". Good: "Eleven public sources cover 94% of the evidence a Track D discovery needs, and only three of them are published by the company itself".
  (Numbers in examples are illustrative; real numbers come from the work.)
- Paragraphs: 3 to 6 sentences, topic sentence first, one idea each. Prefer "we" (the team) for decisions.
- Banned (grep gate in §9): "delve", "tapestry", "landscape" (as metaphor), "game-changer", "revolutionize",
  "cutting-edge", "seamless", "leverage" (as verb; use "use"), "unlock", "empower", "in today's fast-paced", "it's
  important to note", "in conclusion", "navigate the complexities", "robust" (unless describing a statistical test),
  "holistic", "synergy", "paradigm", "Imagine", "What if", "Picture this", "Let's dive", exclamation marks, emoji.
- No hooks: do not open any section with a question, quote, or dramatic one-liner. Open with the finding.
- Numbers: one decimal for percentages unless the source gives more; ₹ crore with Indian grouping (₹1,51,836 million is
  written as ₹15,183.6 crore); always state the period (Q1 FY27, FY26, FY21 to FY26 CAGR).
- Citations in the research doc: numbered source IDs `[S###]` inline, resolving to a Harvard-style bibliography with
  URL and access date. Every table and chart has a "Source:" line beneath it.

### §0.6 Default when unspecified

If a detail is not specified: (a) look for the pattern in the referenced prior project (paths in §1.4), (b) choose the
simplest option that keeps all golden rules, (c) write one line in `next-signal-bits\DECISIONS.md` (create if missing)
stating the decision and why. Do not stop to ask the user unless the action is destructive, outward-facing (pushing,
publishing, submitting on Unstop, emailing), or needs a credential that is missing.

---

## §1 THE CASE, DECODED (every requirement traced to a feature)

### §1.1 Key facts

| Item | Value |
|---|---|
| Event | Finding the Next Signal, Autonomous Financial Research Hackathon, ATMOS 2026, BITS Pilani Hyderabad |
| Organisers | The Wall Street Club & The Economics Association |
| Team | Harsh (lead), Gursimran (team size 1 to 4 allowed) |
| Team name | **NOT YET PROVIDED.** Use the token `TEAMNAME` everywhere it is needed and list it in the open-items section of the final hand-off message. Never invent one. |
| Institution | **NOT YET PROVIDED** (check memory file `project_swasthyagrid_gcp.md` for Harsh + Gursimran's institution; if found, use it; otherwise token `INSTITUTION`). |
| Round 1 deadline | 19 Oct 2026, 23:59 IST, online, Unstop |
| Round 1 file name | `TEAMNAME_TrackD_Round1.pdf` |
| Round 1 results | 23 Oct 2026 |
| Finals | 25 Oct 2026, online: 10 min presentation + live demo, then 15 min Q&A |
| Prize | Rs 40,000 pool + PPIs |

### §1.2 Requirements traceability matrix (RTM)

Every row must be demonstrably satisfied. Phase gates in §9 check this table row by row.

| ID | Requirement (case wording) | Where satisfied | Evidence of satisfaction |
|---|---|---|---|
| R1 | Discover: decide what needs to be investigated and locate relevant public sources | Engine stage `discover` (§5.6) + angle planner (§5.7) | Run trace shows ranked angle list and source plan per company |
| R2 | Connect: combine evidence across filings, statements, presentations, exchange announcements, competitors, industry data, credible news | Evidence store + fact table + independence graph (§5.8) | Evidence trail panel shows ≥4 source classes per discovery |
| R3 | Calculate: derive relationships or changes rather than quoting numbers | Metric library (§5.9) | "Numbers" block shows derived metrics with formula tooltips |
| R4 | Reason: form a hypothesis about what the evidence means and why it matters | Hypothesis engine (§5.10) | Hypothesis cards with predictions |
| R5 | Challenge: actively search for contradictory evidence and alternative explanations | Falsification engine (§5.11) + contradiction detector (§5.12) | ACH matrix + killed-hypothesis log in UI |
| R6 | Prove: auditable evidence trail for every major conclusion | Provenance model (§5.8.2), claim-to-source links | Every claim chip opens the passage, page and URL |
| R7 | The Discovery: one clear sentence | Output schema field `discovery.sentence` (§5.13) | ≤ 45 words, contains a number and a period |
| R8 | Why It Matters: 3 to 5 bullets | `why_it_matters[]` length validator 3..5 | Schema validation |
| R9 | Evidence: multiple independent sources, with links | `evidence[]` with `independence_class`; validator requires ≥ 3 distinct classes | Schema validation |
| R10 | Timeline: when the change emerged and how it developed | Timeline builder + change-point detection (§5.9.4) | Timeline chart with change-point marker |
| R11 | Numbers: only the calculations needed | `numbers[]` with formula, inputs, source IDs | Each number expandable to its inputs |
| R12 | Counterargument: strongest alternative explanation | `counterargument` chosen by ACH as least-inconsistent rival | Shown with its own evidence |
| R13 | Falsification Condition: what future evidence would make the system reconsider | `falsification` with metric, threshold, observation date | Machine-checkable condition |
| R14 | Evidence Strength: Strong / Moderate / Weak with reasoning shown | Rule-based grader (§5.13.3) | Score breakdown visible |
| R15 | Every major claim traceable (Finding → Annual Report → Quarterly Results → Exchange Filing → Industry Source → Competitor Evidence) | Evidence chain graph view | Chain view in UI and report |
| R16 | Findings must not rest on a single article or document | Validator: discovery rejected if < 2 independent origins | Unit test |
| R17 | Output format: report or dashboard | **Both**: dashboard + exports (PDF, Markdown, CSV, XLSX) | User decision; judges see one coherent artefact |
| R18 | Clickable source links / click through from each claim to its source | Claim chips + report hyperlinks | Manual check in §9 |
| R19 | Works for every NIFTY 50 company in the track without company-specific tuning | Universe loader + sub-industry playbooks (§5.7) | Eval harness runs all 5 (§5.14) |
| R20 | Handles other listed companies in the sector (tie-break) | Same pipeline on Nifty Pharma / Nifty Healthcare names | Eval harness runs ≥ 10 non-NIFTY-50 names |
| R21 | Public information only, no paid/proprietary datasets | Source catalogue (§5.5) flags each source's access | Research doc chapter 5 |
| R22 | Round 1: idea and approach, why non-obvious discoveries not summaries | Round 1 PDF section 1 | §8 |
| R23 | Round 1: tools and stack | Round 1 PDF section 2 | §8 |
| R24 | Round 1: workflow company → angles → plan → evidence → discovery | Round 1 PDF section 3 | §8 |
| R25 | Round 1: track + generalisation without tuning | Round 1 PDF section 4 | §8 |
| R26 | Round 1: triangulation and contradiction detection | Round 1 PDF section 5 | §8 |
| R27 | Round 1: self-falsification | Round 1 PDF section 6 | §8 |
| R28 | Round 1: output format sketch | Round 1 PDF section 7 (mini wireframe) | §8 |
| R29 | Round 1: build plan and milestones to 25 Oct | Round 1 PDF section 8 | §8 |
| R30 | Finals: live run on a judge-chosen company, full output | Demo runbook (§5.16) | Rehearsal log |
| R31 | Judged: discovery quality, evidence quality, novelty, temporal reasoning, cross-source reasoning, falsifiability, explainability, robustness, generality & autonomy | Each mapped to a deck slide and a UI panel (§1.3) | §1.3 table |
| R32 | NOT judged: model choice, number of agents, UI visual complexity, report length, investment recommendation | Deck says so explicitly; we avoid "N agents" bragging | Deck slide 2 copy |
| R33 | Temporal reasoning (Round 1 criterion) | Point-in-time `as_of` mode + lead-lag analysis (§5.9.5) | Time-travel evaluation (§5.14.3) |

### §1.3 Judging criteria → where we win each one

| Finals criterion | Mechanism in the system | UI panel | Deck slide |
|---|---|---|---|
| Discovery quality | Anomaly ranking × narrative-divergence score picks the least obvious surviving hypothesis | Discovery hero card | S5 |
| Evidence quality | Admiralty-style source grading + primary-source precedence | Evidence trail | S4 |
| Novelty | "Consensus check": the engine searches news/aggregators for the finding; novelty score is penalised if the finding already appears in mainstream coverage | Novelty meter | S5 |
| Temporal reasoning | Change-point detection, lead-lag between regulator record, company disclosure, media coverage, price reaction; point-in-time `as_of` replay | Timeline | S4 |
| Cross-source reasoning | Independence graph: counts origins, not documents | Source independence heatmap | S4 |
| Falsifiability | ACH matrix, kill log, machine-checkable falsification condition with next observation date | Challenge tab | S5 |
| Explainability | Every claim chip → passage, page, URL; run trace replay | Run trace | S3/S4 |
| Robustness | Six standard rival-explanation tests (peer, FX, base effect, one-off, reclassification, seasonality) | ACH matrix | S5 |
| Generality & autonomy | Universe loaded from NSE index CSVs; sub-industry playbooks not company playbooks; eval on 15+ names | Universe picker | S6 |

### §1.4 Reference material and prior work (read before your phase)

- Deck doctrine: `nsut-innovators-court\CLAUDE.md` (§0 to §8), `deck-system\figma-deck-kit.js`, `deck-system\slide-archetypes.md`.
- Visual inspiration (Figma Slides, read-only): prime `hOJVMGv9nIhDmayTT7DmOt`; others `e5VEexsLMhDampx7gvhFmM`,
  `vAIyXmljHlFDuwQo6RsoIN`, `APbOstO4SSU7iAjYIgEeSd`, `JLOOyohkQPUrwXEsxDKz4m`, `YoiazGGOribfg69EjEDIlP`,
  `cpcsN7ytWMJputcohXOMgz` (BeyondTech x DCG), `O7oWkJR37V0H8IDKnt2Ed7`. Prior builds: ConsentGrid `2uKgT9OUWIhGR3qjn4IsnG`, NavSight `Bd2X2Akr7c4qm0ZogqvUcd`.
- Research depth references (sibling folders in `PPTS-CASE-STUDY`): mandamasterminds, iim-lucknow-pivot, maudrik-policy,
  swasthyagrid-gcp (closest analogue: hackathon, honesty tags LIVE/WIRED/PILOT). lsr-caseforchange is for depth only,
  never as a template (standing user feedback).
- UI inspiration: `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\parakh-iitd` (red/white/black theme to adapt).
- Market API credentials and NSE MCP config: `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\stocksense`.
- Voice architecture to copy: `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\` ai-healthcare platform folder (§5.15).

### §1.5 Team, institution, naming (resolved from memory files; confirm open items with user at hand-off)

| Member | Institution | Role | Source of fact |
|---|---|---|---|
| Harsh Kawatra | Delhi Technological University | Team Leader | memory `project_beyondtech_dcg.md`, `project_swasthyagrid_gcp.md` |
| Gursimran Kaur | Guru Gobind Singh Indraprastha University | Member | memory `project_swasthyagrid_gcp.md` |

- Team name default: **Team IdeaForge** (the name these same members used on BeyondTech, SwasthyaGrid, Maudrik, HarvestBox).
  It is the user's own existing name, not an invention. Still list "confirm team name IdeaForge for ATMOS" as open item O1.
- Round 1 file name therefore: `IdeaForge_TrackD_Round1.pdf` (O1 may change it).
- Product name: **Next Signal** (case title "Finding the Next Signal" + the user's own folder name "next-signal bits").
  Never add a suffix, tagline-name, or acronym.

### §1.6 Machine facts (verified at planning time, 2026-10-11)

| Fact | Value |
|---|---|
| Python | `C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe` (always run with `-X utf8`). Below, `PY` means exactly this. |
| Node | available on PATH (used by prior deck mocks via `node -`) |
| Chrome | `C:\Program Files\Google\Chrome\Application\chrome.exe` (headless PDF printing, proven by `beyondtech-dcg/research/build_pdf.py`) |
| Shells | PowerShell 5.1 (no `&&`; use `;` and `if ($?) {}`), plus Git Bash |
| Figma plan key | `team::1564294484048272772` ("25/A16/057 HARSH KAWATRA's team") |
| Code folder | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits\` exists and is **empty** (note the space in the folder name; always quote the path) |
| Case folder | `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\next-signal-bits\` holds only the brief docx |
| NIFTY 50 healthcare constituents (as of 30 Sep 2026 rebalance: BSE in, Wipro out; Feb 2026 review made no change) | Sun Pharmaceutical (SUNPHARMA), Cipla (CIPLA), Dr. Reddy's Laboratories (DRREDDY), Apollo Hospitals (APOLLOHOSP), Max Healthcare Institute (MAXHEALTH). **The engine never hard-codes this list**: it reads `https://niftyindices.com/IndexConstituent/ind_nifty50list.csv` at runtime and filters `Industry == "Healthcare"`. If that host times out (it did once at planning time), fall back to `https://archives.nseindia.com/content/indices/ind_nifty50list.csv`, then to the last cached copy. |
| Tie-break universe | `ind_niftypharmalist.csv` and `ind_niftyhealthcarelist.csv` (same hosts), plus any NSE symbol the user types |

### §1.7 Credentials inventory (names only; values never printed)

| Purpose | Where the value lives today | Name there | Name in Next Signal `engine/.env` |
|---|---|---|---|
| Upstox | `WEB-DEV-PROJECTS\stocksense\.env` | `STOCKSENSE_UPSTOX_API_KEY`, `STOCKSENSE_UPSTOX_API_SECRET`, `STOCKSENSE_UPSTOX_ACCESS_TOKEN`, `STOCKSENSE_UPSTOX_ANALYTICS_TOKEN` | `UPSTOX_API_KEY`, `UPSTOX_API_SECRET`, `UPSTOX_ACCESS_TOKEN`, `UPSTOX_ANALYTICS_TOKEN` |
| Angel One SmartAPI | same file | `STOCKSENSE_ANGEL_API_KEY`, `STOCKSENSE_ANGEL_CLIENT_CODE`, `STOCKSENSE_ANGEL_PASSWORD`, `STOCKSENSE_ANGEL_TOTP_SECRET` | `ANGEL_API_KEY`, `ANGEL_CLIENT_CODE`, `ANGEL_PASSWORD`, `ANGEL_TOTP_SECRET` |
| Sarvam (LLM, STT, TTS) | `WEB-DEV-PROJECTS\ai-healthcare platform\backend\.env` (if absent there, `nsut-maudrik\backend\.env`, then `sih-apix\.env.local`) | `SARVAM_API_KEY` | `SARVAM_API_KEY` |
| Gemini (fallback LLM only) | same ai-healthcare `.env` | `GEMINI_API_KEY`, `GEMINI_MODEL` | `GEMINI_API_KEY`, `GEMINI_MODEL` |
| NSE MCP (no key) | `stocksense\.mcp.json` | `nse-bhavcopy` → `https://mcp.nseindia.in/bhavcopy/cm/mcp`; `cm-market` → `https://mcp.nseindia.in/cmmkt/mcp` | `NSE_MCP_BHAVCOPY_URL`, `NSE_MCP_CMMKT_URL` |

Upstox access tokens expire daily around 03:30 IST and stocksense has no automated OAuth. Therefore Upstox is the
**third** price source, never the only one (order: NSE MCP bhavcopy → Angel One `getCandleData` with fresh TOTP login →
Upstox v3 historical candles → NSE bhavcopy archive files). The demo never depends on a manually refreshed token.

---

## §2 THE SOLVED ARGUMENT (case-competition-deck skill, generate mode Steps 1 to 7)

> Executor of Phase R0 must invoke the skill (`Skill: case-competition-deck`) and confirm or sharpen this section in
> `next-signal-bits\research\ARGUMENT.md` before any writer starts. Do not change the recommendation itself.

### §2.1 Case type and audience (skill Step 1 and 2)

- **Case type:** none of the six guides fits exactly. This is a build-and-pitch hackathon judged on research quality.
  Treat it as **Strategy (product positioning against the obvious design) + Operations (a research process redesign)**,
  and borrow the analytical vocabulary of `mna_finance.md` only for the financial metrics the agent itself computes.
  Flag this adaptation in research doc §26 per the skill's "Calibration honesty" section.
- **Audience:** The Wall Street Club and The Economics Association judges plus a practitioner panel offering PPIs
  (buy-side / equity research minded). Register: equity-research note, not marketing. Judges explicitly do not reward
  model choice, agent count, UI complexity, length or investment calls.

### §2.2 The obvious answer and why it falls short

**Obvious answer (what most teams will build):** "An LLM agent (or a crew of agents) that downloads a company's
annual report, results and transcripts, embeds them in a vector store, and asks the model to find something
interesting, then writes a report."

Three reasons it fails the brief (each becomes a left-column bullet on deck S2 and a §2 paragraph in the research doc):
1. **Quantitative:** a model reading one company's own documents mostly restates what management chose to emphasise.
   The brief's worked example finds the signal in the *gap* between narrative and computed numbers (price vs volume,
   receivable days). That gap only appears after calculation, which a summariser never does. (R3, R5)
2. **Strategic / fit:** the company's own disclosures are the *least independent* source about the company. For Track D
   the most informative evidence often sits outside them: USFDA inspection classifications, warning letters and import
   alerts, ANDA approvals, a partner's facility status, SEC filings of the same company, peers' segment numbers, and the
   market's reaction on the filing date. A single-corpus RAG agent cannot triangulate. (R2, R9, R16)
3. **Feasibility / trust:** an agent that confirms its first idea produces confident errors. Judges score
   falsifiability, robustness and explainability. Without a kill step, a hallucinated or sector-wide "insight" ships.
   Even reputable aggregators disagree with primary filings (planning-time example in §2.6). (R5, R12, R14)

### §2.3 The recommendation (contrarian design thesis)

**Next Signal computes before it reads, looks outside the company before it trusts the company, and spends most of its
effort trying to kill its own hypotheses. A discovery is whatever survives.**

Three reasons it works (right column on S2):
1. **Quantitative:** a deterministic metric library (≥ 40 formulas, peer z-scores, change-point detection) turns filings
   into a ranked list of anomalies before any LLM forms an opinion; the LLM explains anomalies instead of inventing them.
2. **Strategic / fit:** an independence graph counts *origins*, not documents (company, regulator, market, third party,
   peer, other jurisdiction), so "multiple independent sources" is measured, not asserted. Track D has unusually rich
   independent regulator data (USFDA, Orange Book, CDSCO, NPPA) with timestamps, which makes temporal reasoning
   ("the filing showed it before the headline") testable.
3. **Feasibility / trust:** every hypothesis must pass a fixed battery of rival-explanation tests (peer, FX, base
   effect, one-off, reclassification, seasonality, persistence, disconfirming search, time-travel) arranged in an
   Analysis of Competing Hypotheses matrix. The strongest surviving rival becomes the Counterargument, and a
   machine-checkable threshold becomes the Falsification Condition.

### §2.4 The moneyshot (one per deck, rhetoric.md §12)

The moneyshot is an **evaluation number produced by the harness (§5.14), never typed by hand**. Primary candidate:

> "Across N Track D companies, Next Signal proposed H hypotheses and killed K of them (P%) before writing a word;
> the D discoveries that survived each rest on at least 3 independent origins, and 100% of their numbers trace to a
> verbatim passage."

Placeholders N, H, K, P, D are filled from `engine/eval/out/summary.json` via `model/model_outputs.json`
(§7.6). If the measured anchor precision is below 100%, print the measured value; never round up. Secondary number
(for S4 temporal panel): the median lead time in days between the earliest external record (regulator / market /
partner filing) and the first mainstream news item, from the time-travel set (§5.14.3).

### §2.5 Foreshadowing and symmetry

- **Seed (deck S2 lower band, research §4):** "The evidence a Track D discovery needs is split across at least four
  publishers, and only one of them is the company." Show the source-origin breakdown before naming the architecture.
- **Symmetric treatment:** the five NIFTY 50 healthcare companies get identical company-dossier templates (research §9)
  and identical rows in the evaluation table (deck S6). The two sub-industries (pharma, hospitals) get parallel
  playbooks with the same angle-scoring formula.
- **Double synthesis:** "Conclusively, a summariser cannot pass the brief's own worked example" card on S2;
  "Therefore" card on S6.

### §2.6 Planning-time evidence the executors must re-verify from primary sources (do not cite as-is)

These came from secondary sources during planning. They are good *practice-run seeds* and *contradiction-detection
demos*; each must be confirmed against the primary filing before it appears anywhere:

| # | Planning-time observation (secondary) | Why it matters for us | Primary source to check |
|---|---|---|---|
| E1 | Dr. Reddy's Q1 FY27: North America revenue down sharply YoY as the lenalidomide (gRevlimid) contribution fell; a reported ₹240 crore provision for semaglutide API inventory; generic semaglutide launched in Canada (May 2026) and pen supply target reported cut from 12 million to 6 to 7 million units | Product-concentration cliff + regulatory/compliance hit (Track D angle 2) + "announced vs delivered" | DRL Q1 FY27 results + investor presentation on NSE; SEC 6-K (DRL files with SEC as an ADR issuer: CIK 1135951) |
| E2 | Two secondary sites disagree on DRL Q1 FY27 profit (₹1,290 crore vs ₹443 crore) | Live contradiction-detection demo: aggregator vs primary; primary precedence | Same as E1 |
| E3 | Cipla Q1 FY27: US business about US$162 million; lanreotide manufacturing paused after USFDA observations at partner Pharmathen's facility; India business up about 12% | Hidden partner dependence (supplier site status drives a product line) | Cipla Q1 FY27 presentation; FDA records for the partner site |
| E4 | Sun Pharma: global innovative medicines about 22% of Q1 FY27 sales; FY26 global specialty about US$1.42 billion with Ilumya the largest | Business-model shift toward specialty, quantifiable over 5 years | Sun annual reports FY22 to FY26, quarterly presentations |
| E5 | Max Healthcare (NSE filing 13 Aug 2026): 202 of 400 beds in a brownfield tower operationalised, remaining 198 in Q2 FY27; ARPOB about ₹81,900 | Capacity announced vs commissioned (the hospital analogue of Track B's question) | `nsearchives.nseindia.com/corporate/MAXHEALTH_13082026143249_SE_Intimation.pdf` and presentations |
| E6 | Apollo Hospitals: HealthCo (pharmacy distribution + Apollo 24/7) demerger with listing targeted for Q4 FY27; cash breakeven guided for Q1 FY27 | Guidance-vs-actual temporal contradiction test | Apollo Q1 FY27 presentation, NCLT order, scheme filings |

---

## §3 WORKSTREAMS, SEQUENCE AND DISPATCH

### §3.1 Calendar (IST)

| Date | Phase | Output | Gate |
|---|---|---|---|
| Sat 11 Oct | R0 setup + R1 raw research lanes start; P0 data-access spikes (feeds research lane R-E) | `research/raw/*`, `engine/spikes/*.md` | G-R0 |
| Sun 12 Oct | R1 lanes finish; R2 verification; R3 writers A, B start | verified raw files | G-R1 |
| Mon 13 Oct | R3 writers C, D, E, F; P1 engine data layer | parts A to F | |
| Tue 14 Oct | R4 assemble + critique + polish; research PDF | `research/next-signal-research.md` + `.pdf` | **G-R (research complete)** |
| Wed 15 Oct | P2 pipeline + grading; W1 frontend shell | engine end-to-end on 1 company | G-P2 |
| Thu 16 Oct | P3 exports + voice; W2 report dashboard | dashboard renders a real run | G-P3 |
| Fri 17 Oct | P4 eval harness on 15 companies; **MVP freeze** | `engine/eval/out/summary.json` | **G-MVP** |
| Sat 18 Oct | S1 Round 1 PDF draft; demo video script; research doc §19 and §21 refreshed with eval numbers | `round1/*.pdf` draft | |
| Sun 19 Oct | S2 Round 1 polish; user submits on Unstop before 23:59 | `IdeaForge_TrackD_Round1.pdf` | **G-S (user submits)** |
| Mon 20 Oct to Wed 22 Oct | D0 to D5 Figma deck; P5 hardening (robustness on tie-break names) | Figma deck | G-D |
| Thu 23 Oct | Shortlist announced; D6 final QA; F1 Q&A bank | | |
| Fri 24 Oct | F2 rehearsal: 5 live runs on random track companies, timed | rehearsal log | **G-F** |
| Sat 25 Oct | Finals | | |

### §3.2 Dispatch rules (for the orchestrating agent)

- Executors: `subagent_type: "general-purpose"`, `model: "sonnet"`. At most **3 subagents at once**. Figma steps never
  run in parallel with each other.
- Every subagent prompt starts with: "Read `<case folder>\next-signal-bits\PLAN.md` sections §0, §1 and the section(s)
  for your task. Follow golden rules §0.3. Report in ≤ 12 lines ending with `STATUS: PASS | PASS WITH RESIDUALS | FAIL`."
- **First action of the whole build:** copy this plan file to `nsut-innovators-court\next-signal-bits\PLAN.md`
  (byte copy) so executors read a stable copy. Plans in `C:\Users\harsh\.claude\plans\` get overwritten by later sessions.
- A FAIL is re-dispatched once with the failure text. A second FAIL stops the phase and is reported to the user.
- Every phase appends to `next-signal-bits\build-log.md`: date, step ID, what was done, verification output (pasted),
  residuals.
- Skill touchpoints (§0.4) are logged as `SKILL Tn: <what was taken>` lines in the build log.

### §3.3 Folder layout (create exactly)

```
nsut-innovators-court\next-signal-bits\
  PLAN.md                    (copy of this plan)
  DECISIONS.md               (one line per executor decision, §0.6)
  build-log.md
  0e6fade1-...docx           (brief, untouched)
  case\01-brief.md           (verbatim text of the brief, extracted in R0)
  research\
    ARGUMENT.md              (R0 output, §2 confirmed via skill)
    raw\R-A-brief-judging-literature.md
    raw\R-B-pharma-sector-regulation.md
    raw\R-C-hospitals-services.md
    raw\R-D-SUNPHARMA.md  R-D-CIPLA.md  R-D-DRREDDY.md  R-D-APOLLOHOSP.md  R-D-MAXHEALTH.md  R-D-TIEBREAK.md
    raw\R-E-data-sources.md   (+ raw\source_catalogue.csv)
    raw\R-F-methods.md
    raw\R-G-market-data.md
    raw\sources.md           (master S-ID register)
    raw\conflicts.md         (data conflicts and rulings)
    parts\part-A.md ... part-F.md, appendix-E-glossary.md, WRITER-BRIEF.md
    assemble.py  build_pdf.py
    next-signal-research.md  .html  .pdf
    critique.md
  model\collect_outputs.py   model_outputs.json   model_tables.md
  round1\round1.html  build_round1.py  IdeaForge_TrackD_Round1.pdf  demo-video-script.md
  deck\ (generator, §7)
  qa\qa-bank.md  rehearsal-log.md

C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits\
  README.md  .gitignore  .env.example
  engine\   (Python FastAPI research engine, §5)
  apps\web\ (Next.js dashboard, §6)
  docs\ARCHITECTURE.md  docs\DEMO-RUNBOOK.md
```

---

## §4 PHASE R: THE RESEARCH DELIVERABLE

### §4.0 Targets and acceptance (G-R)

| Metric | Minimum | Checked by |
|---|---|---|
| Words (whole document) | 60,000 | `assemble.py md` |
| Markdown tables | 130 | `assemble.py md` |
| Sections opening with a bold `**Answer.**` paragraph | 27 (every H2 from §2 to §26 except §0, §1) | `assemble.py md` |
| Em/en dashes in authored prose | 0 | `assemble.py md` |
| Exclamation marks, question-mark headings | 0 | `assemble.py md` |
| Banned words (list in §4.6) | 0 | `assemble.py md` |
| Cited S-IDs missing from register | 0 | `assemble.py md` |
| Duplicate headings | 0 | `assemble.py md` |
| Distinct sources in register | ≥ 250 | count rows in `raw/sources.md` |
| Primary sources (company filings, regulators, exchanges, statutes) share of cited sources | ≥ 55% | `assemble.py md` extra check (add it) |
| PDF renders, has cover + TOC + page numbers | yes | open PDF, check page 1 and 2 |
| Critique (skill touchpoint T6) | all "critical" issues fixed | `research/critique.md` |

Reference register to imitate (read lines 1 to 140 of each before writing anything):
`iim-lucknow-pivot\research\dream11-pivot-research.md` and `swasthyagrid-gcp\nexora\research\swasthyagrid-nexora-research.md`
(the "What this section establishes, and what it does not" closer is mandatory at the end of every H2 from §4 on).
Depth benchmark: `beyondtech-dcg\research\beyondtech-gtm-research.md` (100k words, 164 tables, 518 sources).

### §4.1 Step R0: setup (one agent, sequential, ~1 hour)

1. Copy this plan to `next-signal-bits\PLAN.md`. Create the folder layout in §3.3 (case-folder half only).
2. Extract the brief verbatim to `case\01-brief.md` (command in §0.1). Add a line count and a SHA-1 of the docx at the top.
3. Invoke `Skill: case-competition-deck` (generate mode). Read `references/structure.md`, `rhetoric.md`,
   `frameworks.md` (sections on MECE, Issue Trees, Pyramid, Hypothesis-driven, Pre-mortem, Scenario Planning, Risk Heat
   Map, Kepner-Tregoe), and `case_types/strategy.md` + `operations.md`. Write `research\ARGUMENT.md`:
   - case type statement and calibration flag (§2.1)
   - obvious answer + three reasons; recommendation + three reasons (§2.2, §2.3) in final wording
   - moneyshot template (§2.4) with placeholders
   - the seed sentence and where it appears (§2.5)
   - list of frameworks used and where: Issue tree (§4 of doc), Pyramid Principle (§2), Analysis of Competing Hypotheses
     (§16), Admiralty source grading (§13, §17), GRADE-style certainty (§17), Pre-mortem (§22), Kepner-Tregoe problem
     analysis (§16), Scenario planning for demo risk (§22), PESTLE for Track D (§5 to §7), Porter's Five Forces for US
     generics vs India branded (§5), Value chain of a research analyst (§4), Three Horizons for build plan (§23)
   - log `SKILL T1` and `SKILL T2` in build-log.
4. Create `research\raw\sources.md` with header:
   `| S-ID | Source (Publisher (year) 'Title') | URL | Accessed | Used in |` and row S001 = the case brief
   (`ATMOS 2026 (2026) 'Finding the Next Signal: Participant Brief' | local docx | 11 Oct 2026 | all`).
   Register row regex that the assembler uses: `^\| (S\d{3}) \|(.+?)\|(.+?)\|(.+?)\|(.+?)\|$` (exactly five cells).
5. Create `research\raw\conflicts.md` with header `# Appendix F: Data conflicts and rulings` and table
   `| C-ID | Claim | Source A says | Source B says | Ruling | Basis |`.

Gate G-R0: files exist; `ARGUMENT.md` has all six bullets; build-log has SKILL T1/T2 lines.

### §4.2 Step R1: raw research lanes (3 agents at a time; 9 lanes)

**Raw file schema (every lane, exactly):**

```
# R-X: <lane title>
Accessed: <date range>. Researcher: lane agent R-X.

## Facts
| R-ID | Fact (exact figure + period + unit) | S-ID | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |
|---|---|---|---|---|---|---|---|---|
| RX01 | ... | S0nn | ... | ... | https://... | 11 Oct 2026 | "..." | VERIFIED |

## Gaps
- <question we could not answer, and what we tried>

## Conflicts
- <C-ID>: <two sources disagree on ...> (also appended to raw/conflicts.md)
```

Rules: R-ID prefix = lane letter(s) (RA, RB, RC, RDS for Sun, RDC Cipla, RDD Dr. Reddy's, RDA Apollo, RDM Max, RDT
tie-break, RE, RF, RG). The **S-ID must be the third column** because `assemble.py` resolves R-IDs to S-IDs with the
regex `^\|\s*([A-Z]{1,3}\d{2,3})\s*\|.*?\|\s*([^|]+?)\s*\|` (update `{1,2}` to `{1,3}` when copying the assembler,
since RDS/RDC are three letters). Status ∈ VERIFIED (opened the page, figure matches) / CORRECTED (opened, figure
differed, row shows the corrected figure) / SNIPPET (only seen in a search snippet; may never be sole support for a
number) / UNVERIFIABLE. New S-IDs are appended to `raw/sources.md` by the lane agent itself, using the next free
number from a reserved block: R-A S002 to S079, R-B S080 to S179, R-C S180 to S249, R-D-* S250 to S549 (60 per
company file, 0 to 59 offset in file order SUN, CIPLA, DRREDDY, APOLLOHOSP, MAXHEALTH; tie-break S550 to S599),
R-E S600 to S699, R-F S700 to S779, R-G S780 to S829. Reserved blocks prevent collisions between parallel agents.
Target 40 to 80 fact rows per lane (company files 60 to 90).

**Tools for lanes:** WebSearch (`mode: "standard"` first, `extended` for hard-to-find items), WebFetch, the NSE MCP
servers (load via ToolSearch if available in the session: `nse-bhavcopy`, `cm-market`), and Python for downloading PDFs
from `nsearchives.nseindia.com` / `bseindia.com` / company IR sites (use the cookie bootstrap in §5.5.1 for
`www.nseindia.com/api/*`). Read primary PDFs with PyMuPDF (`fitz`), not with WebFetch, when tables matter.

**Lane questions:**

R-A Brief, judging and literature (S002 to S079)
1. Every requirement in the brief with its exact wording (feeds RTM §1.2). The worked example, dissected: which source
   types it chains, which calculations it shows, how its evidence strength is argued.
2. How sell-side and buy-side analysts actually find non-obvious insights: channel checks, regulator databases,
   management-guidance tracking, forensic accounting screens (Beneish M-score, accruals ratio, Sloan), with sources.
3. Literature on LLMs in financial analysis: FinanceBench (Islam et al., 2023), FinQA (Chen et al., 2021), TAT-QA,
   DocFinQA, studies of hallucination in financial QA, "deep research" agent evaluations, retrieval failure modes on
   long PDFs, numeric reasoning errors. Record exact reported accuracies with paper links.
4. Prior art: commercial and open tools (Bloomberg GPT, AlphaSense, Tegus, Screener, Trendlyne, Tijori, Sentieo,
   FinChat, OpenBB). For each: what it does, whether it falsifies, whether it is public-data only. Feature-parity
   table seed.
5. India disclosure regime that creates the evidence: SEBI LODR Regulation 30 (material events, timelines), Reg 33
   (results), Reg 46 (website), earnings-call audio within 24 hours and transcripts within 5 working days (confirm the
   current consolidated text), XBRL mandates on NSE/BSE, BRSR, related-party disclosures, credit-rating disclosure.
6. Methods literature for falsification and grading (shared with R-F; R-A covers only the high-level citations):
   Popper, Heuer's ACH (CIA, 1999), NATO Admiralty code, GRADE.

R-B Pharma sector and regulation (S080 to S179)
1. Indian pharma market structure FY21 to FY26: IPM size and growth (IQVIA / Pharmarack as reported in press),
   exports (Pharmexcil, DoC), share of US generics, India branded formulations, EM, Europe, API, CDMO/CRDMO.
2. US generics economics: price erosion rates by year (company commentary + IQVIA US reports), ANDA approval counts
   (FDA Office of Generic Drugs annual reports), Paragraph IV and 180-day exclusivity mechanics, Orange Book data files
   (format and update cadence), limited-volume settlement products (e.g. lenalidomide) and their cliffs.
3. USFDA compliance pipeline: Form 483 → inspection classification (NAI/VAI/OAI) → warning letter → import alert
   (66-40) → close-out; typical time between steps (find studies or compute from FDA data); what is public and when
   (FDA Data Dashboard coverage limits; warning letters posted with lag; import alert page updates). Count of warning
   letters to Indian sites per year 2019 to 2026.
4. Domestic regulation: CDSCO (revised Schedule M deadlines; NSQ drug alerts monthly), NPPA/DPCO 2013 price control,
   NLEM revisions, trade-margin rationalisation, UCPMP 2024.
5. Policy shocks 2024 to 2026: US tariffs and Section 232 actions on pharmaceuticals (exact status for generics vs
   branded as of Oct 2026), BIOSECURE Act status and its effect on Indian CDMOs, US IRA price negotiation, GLP-1 patent
   expiries in Canada/India/Brazil (semaglutide) and Indian launches.
6. PESTLE and Five Forces inputs for (a) US generics, (b) India branded formulations.

R-C Hospitals and healthcare services (S180 to S249)
1. Indian hospital economics: ARPOB, occupancy, ALOS, revenue per bed, EBITDA per bed, capex per bed (brownfield vs
   greenfield), payor mix (cash, insurance, international, PMJAY/CGHS), with ranges across listed chains FY22 to FY26.
2. Listed chains and their bed pipelines as announced vs commissioned (Apollo, Max, Fortis, Narayana, Medanta/Global
   Health, KIMS, Aster DM, Rainbow, Yatharth, Jupiter): announced additions by year vs operational beds reported.
3. Regulation: CGHS rate revisions (2025/2026), state price caps, NPPA caps on stents and knee implants, Clinical
   Establishments Act status, insurance penetration (IRDAI), PMJAY empanelment and rates.
4. Diagnostics and pharmacy/omnichannel: Apollo HealthCo/24x7, MedPlus, Dr Lal PathLabs, Metropolis; metrics
   (revenue per patient, tests per patient).

R-D Company dossiers (one file per NIFTY 50 healthcare company; symmetric template; S250 to S549)
For each of SUNPHARMA, CIPLA, DRREDDY, APOLLOHOSP, MAXHEALTH, collect **from primary filings first**:
1. Identity: NSE symbol, BSE code, ISIN, NSE industry classification (macro, sector, industry, basic industry from the
   NSE quote API `industryInfo`), ADR/SEC CIK if any, IR URL, auditor, rating agencies and current ratings.
2. Five-year (FY21 to FY26) and last eight quarters (Q2 FY25 to Q1 FY27) table: revenue, gross margin, EBITDA,
   PAT, R&D spend (pharma), segment revenues as reported, geographic revenues (US, India, EM, Europe, RoW) in the
   company's own currency and units, receivable days, inventory days, capex, net debt, other income, exceptional items.
   Hospitals: beds (operational, census), occupancy, ARPOB, ALOS, payor mix, segment results (HealthCo etc.).
3. Every material event 2021 to 2026 with date: FDA 483s/OAI/WL/IA for owned and partner sites, approvals, launches,
   acquisitions/divestments/demergers, guidance statements (quote + date), management changes, rating actions,
   litigation (patent, price fixing), and the exchange-filing date of each.
4. Management narrative: the three themes management emphasised each year (from chairman's letter / call), with quotes
   and page numbers. These become "narrative" inputs for narrative-vs-number divergence.
5. Peer set used by the company itself (from presentations or rating rationales) and by analysts.
6. Three practice hypotheses per company, each stated with predictions and the data that would test it. Do NOT
   conclude; R-D only collects. Seeds in §2.6 belong here (E1 to E6), verified or corrected.
R-D-TIEBREAK: one-page profile (identity + 3-year geography/segment table + one notable regulatory event) for each
non-NIFTY name in Nifty Pharma and Nifty Healthcare indices (read the live CSVs to get the list; expect about 20 to 25
names such as Lupin, Zydus, Aurobindo, Torrent, Divi's, Alkem, Glenmark, Mankind, Biocon, Laurus, Ipca, Abbott India,
Gland, JB Chemicals, Ajanta, Fortis, Narayana, Global Health, Dr Lal PathLabs, Syngene).

R-E Data sources (S600 to S699) and `raw/source_catalogue.csv`
Work together with Phase P0 (§5.3): P0 produces live verification notes in `engine\spikes\`; R-E turns them into
the catalogue. CSV columns (exact):
`source_id,name,publisher,origin_class,admiralty_reliability,access,auth,endpoint_or_url_pattern,format,point_in_time_field,update_cadence,rate_limit_observed,track_d_use,verified_on,verified_how,notes`
origin_class ∈ {company_filing, company_ir, exchange, regulator_us, regulator_in, sec, rating_agency, industry_body,
market_data, press, aggregator, peer_filing}. admiralty_reliability ∈ A to F (§5.12.1). Target ≥ 30 rows.

R-F Methods (S700 to S779)
ACH (Heuer 1999, chapter 8 steps), Admiralty/NATO source reliability and information credibility scales, GRADE
certainty domains, IPCC calibrated confidence language, Kepner-Tregoe problem analysis, Popper falsifiability,
pre-mortem (Klein 2007), change-point detection (PELT, Killick 2012; `ruptures` library; Pettitt test), event-study
methodology (MacKinlay 1997: market model, estimation window, CAR), Beneish M-score and Sloan accruals, BM25
(Robertson), quote-anchored extraction / attribution evaluation literature (ALCE, Gao et al. 2023; "citation
precision/recall"), point-in-time backtesting and look-ahead bias.

R-G Market data (S780 to S829)
Using the NSE MCP servers (if loaded) or the engine spike scripts: daily close history FY21 to date for the 5 NIFTY 50
names + NIFTY 50 + NIFTY Pharma + NIFTY Healthcare indices; returns around the 6 seed events (E1 to E6) with [-5,+5]
trading-day windows; delivery % and volume spikes on those dates. Record exact numbers with source and retrieval method.

Gate G-R1: each lane file has ≥ 40 rows (company files ≥ 60), ≥ 85% VERIFIED/CORRECTED, sections Gaps and Conflicts
present, S-IDs registered, no duplicate S-IDs across lanes (`PY -c` check: parse all lane tables, collect S-IDs, assert
each exists once in sources.md).

### §4.3 Step R2: verification pass (2 agents in parallel)

V1 checks R-B, R-C, R-D-*; V2 checks R-A, R-E, R-F, R-G. For a random 20% of VERIFIED rows (seed 20261011, pick with
`random.Random(20261011).sample`), reopen the URL and confirm the figure and snippet. Any mismatch flips the row to
CORRECTED or UNVERIFIABLE and is logged in `conflicts.md`. All E1 to E6 seeds are checked at 100%.
Output: `raw/R0-verify.md` with a table `| Lane | Rows checked | Pass | Corrected | Unverifiable |`.
Gate G-R2: pass rate ≥ 90% per lane, else the lane agent re-runs its failing questions once.

### §4.4 Step R3: writers (six parts; at most 3 agents at once; order A,B,C then D,E,F)

Writer rules (put verbatim in `parts/WRITER-BRIEF.md` and in every writer prompt):
- Exact H2 titles from the outline below. Each H2 opens with `**Answer.** <2 to 4 sentences: the finding with numbers>`.
  Each H2 ends with `### What this section establishes, and what it does not` (3 to 6 bullets).
- No browsing. Use only facts in `research/raw/*` (cite as `[RDS14]` etc. or `[S0nn]`), engine spike notes, eval
  outputs (cite `[M]`), and arithmetic on cited numbers (show the arithmetic inline once).
- Tags: `[RXnn]` raw fact, `[S0nn]` source, `[A##]` assumption (register in Appendix D... see §4.5), `[M]` model/eval
  output, `[T#]` generated table.
- Style: §0.5. No em/en dashes. No question headings. No exclamation marks. Indian notation.
- Self-check after every section: `PY -c "import re,io;t=io.open(r'<part>',encoding='utf-8').read();print(len(t.split()),len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),len(re.findall('[\\u2014\\u2013]',t)),t.count('!'))"`
  must print dashes 0 and exclamations 0.
- Write the file after the first two H2s and keep appending (protects against context loss).
- Sections that depend on prototype results (§19 worked discoveries, §21 evaluation) are written in two passes: pass 1
  now with method and placeholders `{{EVAL:key}}`; pass 2 after G-MVP replaces placeholders from
  `model/model_outputs.json` (the assembler fails if any `{{EVAL:` remains).

**Outline (use these H2 titles exactly; numbers in titles marked `{{...}}` are filled from raw/eval data, never invented):**

| § | H2 title (exact) | Must contain | Tables (min) | Words (min) | Writer |
|---|---|---|---|---|---|
| 0 | 0. Document control | purpose, tag legend, source hierarchy (5 tiers), honesty rules incl. LIVE/WIRED/PLANNED, model/eval version and run date, how to read | 4 | 900 | A |
| 1 | 1. Brief coverage matrix | RTM §1.2 expanded (every brief sentence → section → deck slide → UI panel); judging criteria matrix | 4 | 1,300 | A |
| 2 | 2. The answer on one page: compute first, look outside the company, and try to kill every hypothesis before reporting it | thesis, three reasons each side, the moneyshot `{{EVAL}}`, what would change our mind, eight headline numbers table | 4 | 1,800 | A |
| 3 | 3. What the judges reward: nine criteria, one worked example, and five things they say they will not score | criteria decoded with "how a judge would test it live"; worked example dissected into source chain, calculations, strength logic; the "not judged" list and what it implies for design | 5 | 2,500 | A |
| 4 | 4. Why summarisers miss the signal: a Track D discovery draws on at least four publishers, and the company is only one of them | issue tree (MECE) of "why insights are missed"; analyst value chain; LLM failure literature with numbers (FinanceBench etc.); seed sentence; source-origin breakdown for the 6 seeds | 6 | 3,200 | A |
| 5 | 5. Indian pharma runs five business models, and each one reports its health in a different place | five models with FY21 to FY26 numbers; PESTLE; Five Forces (US generics vs India branded); where each model's signals are disclosed | 7 | 3,500 | B |
| 6 | 6. Regulation leads the numbers: USFDA, CDSCO and NPPA records often surface a problem before the income statement does | 483→OAI→WL→IA pipeline with timings; counts 2019 to 2026; public availability and lags; tariff/BIOSECURE/GLP-1 2026 status; a timeline table per seed event | 7 | 3,500 | B |
| 7 | 7. Hospital economics turn on beds, occupancy and ARPOB, and announced beds are not operational beds | metric definitions; listed-chain comparison; announced vs commissioned table; payor/regulatory caps | 6 | 3,000 | B |
| 8 | 8. The Track D universe: five NIFTY 50 names and about twenty tie-break candidates on two sub-industry playbooks | live CSV-derived universe table; sub-industry mapping; disclosure-availability matrix (which sources exist for which company) | 5 | 2,200 | B |
| 9 | 9. Five companies, one template: what the filings of Sun, Cipla, Dr. Reddy's, Apollo and Max say over five years | symmetric dossier per company (identity, 5-year table, 8-quarter table, event timeline, narrative themes, 3 practice hypotheses); cross-company comparison | 20 | 9,000 | C |
| 10 | 10. Thirty public sources cover a Track D investigation, and each is graded for reliability, independence and timeliness | source catalogue summary from `source_catalogue.csv`; verification method; access risks (cookies, rate limits, ToS) | 6 | 3,000 | D |
| 11 | 11. The architecture: six stages named after the brief's own verbs, a deterministic core and an LLM at the edges | stage diagram as table; component list with LIVE/WIRED/PLANNED; stack ADRs with rejected alternatives (vector DB, LangGraph, closed frontier model, single-agent RAG); latency budget for a 10-minute live demo | 7 | 3,500 | D |
| 12 | 12. Discover: the agent chooses angles by scoring data availability, anomaly size and novelty, not by company name | angle playbooks (pharma 10, hospital 6, diagnostics 3, generic 6); angle-scoring formula; source plan generation; example plans | 5 | 2,800 | D |
| 13 | 13. Connect: every number carries its passage, page and publisher, and sources are counted by origin, not by document | provenance model; quote-anchored extraction; BM25 retrieval over PDF pages; independence graph; Admiralty grading | 5 | 3,000 | D |
| 14 | 14. Calculate: forty-plus formulas, peer z-scores and change-point tests turn filings into ranked anomalies | metric library summary (full in Appendix B); FX-neutral US growth; change-point method; peer normalisation; event study with Upstox/Angel/NSE data | 6 | 3,200 | D |
| 15 | 15. Reason: hypotheses are written as predictions that later evidence can confirm or break | hypothesis template; materiality × novelty × surprise ranking; narrative-vs-number divergence; examples | 4 | 2,200 | E |
| 16 | 16. Challenge: five kinds of contradiction and nine falsification tests stand between a hypothesis and the report | contradiction taxonomy with detection rule and example each (incl. E2 aggregator vs primary); nine tests with pass/fail rules; ACH matrix worked example; Kepner-Tregoe "is / is not" | 7 | 3,500 | E |
| 17 | 17. Prove: evidence strength is a rule, not a mood, and every falsification condition names a metric, a threshold and a date | strength rubric math with worked scores; novelty check; falsification condition grammar; output schema (8 elements) | 6 | 2,800 | E |
| 18 | 18. Temporal reasoning: the engine can be sent back in time, and the time-travel runs show when each story became visible | point-in-time filtering; time-travel protocol; lead-lag results `{{EVAL}}`; change-point dating | 4 | 2,200 | E |
| 19 | 19. Worked discoveries: what the agent found on {{EVAL:n_companies}} companies, in the brief's eight-part format | ≥ 3 full discoveries from real engine runs (eight elements each), plus the killed hypotheses for each; honest Weak results shown too | 10 | 4,500 | E (pass 2 after G-MVP) |
| 20 | 20. One output, two forms: a click-through dashboard and an equity-research-style report, plus a voice analyst that only speaks from the report | UI walkthrough (screens as tables), exports (PDF/MD/CSV/XLSX) and their schemas, voice grounding rules | 5 | 2,200 | E |
| 21 | 21. Evaluation: {{EVAL:kill_rate}} of hypotheses killed, {{EVAL:anchor_precision}} of numbers anchored, {{EVAL:median_runtime}} median run | harness design, metrics, results per company, ablation (no Challenge stage), time-travel results, self-scored judging rubric (labelled as self-scored), limitations | 8 | 3,200 | F (pass 2) |
| 22 | 22. Risks: fourteen ways the live demo or the method could fail, each with a control | pre-mortem; risk heat map (P×I); 1:1 mitigation; ToS/compliance; no investment advice | 4 | 2,200 | F |
| 23 | 23. Build plan: from a blank folder on 11 October to a live demo on 25 October | Gantt as table, milestones, gates, team roles (Harsh lead, Gursimran), Three Horizons beyond the hackathon | 4 | 1,600 | F |
| 24 | 24. Slide blueprint: eight slides carry the argument | per-slide table: action title, content blocks, data keys | 2 | 1,200 | F |
| 25 | 25. Thirty questions the judges are likely to ask, and the answers | Q&A table; reported-speech framing allowed ("The panel may ask: ...") | 2 | 3,000 | F |
| 26 | 26. Method, limits and the validation we would run next | calibration note on the skill; what is desk research vs engine output; limits; next validation | 2 | 1,200 | F |

Totals: ≥ 154 tables listed, ≥ 79,000 words targeted (the minimum gate is 60,000 and 130 so a short section does not
block assembly, but writers aim for the table above).

Appendices (assembled, mostly generated):
- A Bibliography (generated by assembler from register).
- B Metric library (generated from `engine/next_signal/metrics/library.py` registry → `model/model_tables.md` section T1).
- C Source catalogue (generated from `raw/source_catalogue.csv`).
- D Assumptions register (written by writer F: `| A-ID | Assumption | Why | What it moves | How we would test it |`).
- E Glossary and abbreviations (written by writer F, ≥ 60 terms: ACH, ADR, ANDA, API (both meanings), ARPOB, BM25,
  CAR, CDMO, CDSCO, CGHS, DPCO, EM, FTF, GRADE, IA, IPM, LODR, NAI, NLEM, NPPA, OAI, OOS, Para IV, PIT, PMJAY, VAI, WL,
  XBRL, ...).
- F Data conflicts and rulings (`raw/conflicts.md`).
- G Evaluation tables (generated from `engine/eval/out/*.csv` → `model/model_tables.md` sections T2 onward).

### §4.5 Writer prompt (copy verbatim, fill `<>`)

```
You are writer <A..F> for the Next Signal research deliverable (ATMOS 2026, BITS Pilani, Track D).
Read, in order: next-signal-bits/PLAN.md §0, §1, §2, §4; research/ARGUMENT.md; research/parts/WRITER-BRIEF.md;
lines 1-140 of iim-lucknow-pivot/research/dream11-pivot-research.md (register only, do not copy content);
the raw files you need: <list>.
Write research/parts/part-<X>.md containing exactly these H2 sections, in order, with these exact titles:
<paste rows from §4.4>.
Each H2: opens with **Answer.**, meets the table and word minimums, closes with
"### What this section establishes, and what it does not".
Cite every number with its raw R-ID or S-ID. Never browse. Never invent a figure, quote, name or label.
Do not coin names for the product, stages or methods; use "Next Signal" and the stage names Discover, Connect,
Calculate, Reason, Challenge, Prove.
Append to the file after each H2. Run the self-check one-liner after each H2 and fix any dash or exclamation.
Finish with: words, tables, dashes, exclamations per H2, then STATUS line.
```

### §4.6 Step R4: assemble, critique, polish, PDF (one agent)

1. Copy `beyondtech-dcg\research\assemble.py` to `next-signal-bits\research\assemble.py` and patch with asserted
   replacements (each `assert src.count(old)==1` before replace):
   - HEADER → `# Next Signal: An Autonomous Research Agent for Indian Pharma and Healthcare` /
     `**How a public-data agent finds, tests and proves a non-obvious financial discovery for any NIFTY 50 Track D company**` /
     `Team: Harsh Kawatra, Gursimran Kaur, Team IdeaForge` /
     `Prepared for: Finding the Next Signal, ATMOS 2026, BITS Pilani Hyderabad Campus (Track D: Pharma and Healthcare)`
   - BAN list → extend with: "imagine", "what if", "picture this", "dive", "groundbreaking", "state-of-the-art",
     "insightful", "plethora", "myriad", "underscore", "showcase", "foster", "bolster", "spearhead", "nuanced",
     "intricate", "meticulous", "comprehensive suite".
   - `MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 60000, 130, 27`
   - R-ID regex `[A-Z]{1,2}` → `[A-Z]{1,3}` (two places: lane parse and cited R-ID scan).
   - Appendix builders: B from `model/model_tables.md` T1 block; C from `raw/source_catalogue.csv` via
     `csv_to_table(..., ["source_id","name","origin_class","admiralty_reliability","access","point_in_time_field","track_d_use"])`;
     D from `parts/appendix-D-assumptions.md`; E from `parts/appendix-E-glossary.md`; F from `raw/conflicts.md`;
     G from `model/model_tables.md` T2+ blocks.
   - Add checks: `placeholders = len(re.findall(r"\{\{EVAL:", doc))` must be 0; primary-source share ≥ 0.55 where
     primary = register rows whose URL host matches `nseindia|bseindia|sec.gov|fda.gov|accessdata.fda.gov|cdsco|nppa|sebi.gov|rbi.org|mca.gov|niftyindices|pib.gov|company IR hosts listed in R-D files`.
   - Output file names `next-signal-research.md`.
2. Run `PY research\assemble.py md` until it prints `ASSEMBLY PASS`. Fix rules: dashes → rewrite the sentence (do not
   mechanically replace with a hyphen); banned word → plain synonym; missing_S → add register row or remove citation;
   short section → writer re-dispatch for that H2 only.
3. Critique (skill touchpoint T6): invoke `Skill: case-competition-deck` in critique mode; read
   `references/critique_rubric.md`; score Dimensions 1 (recommendation), 3 (quantitative rigour), 4 (action titles and
   quantification, sample 10 H2s), 6 (defensive depth), 7 (polish). Write `research/critique.md` with top 5 issues in the
   rubric's format. Fix all CRITICAL and IMPORTANT issues. Log `SKILL T6`.
4. Invented-name sweep: list capitalised multi-word phrases not present in the brief, the raw files, or the
   allow-list {Next Signal, Discover, Connect, Calculate, Reason, Challenge, Prove, Team IdeaForge, Analysis of
   Competing Hypotheses, Admiralty}. Remove any coined label.
5. PDF: copy `beyondtech-dcg\research\build_pdf.py` patterns via a `pdf()` function (as BeyondTech's assembler does
   from iim-lucknow-pivot's builder) with these replacements: title/subtitle strings; footer
   `Next Signal  |  Team IdeaForge  |  ATMOS 2026 Track D`; kicker `Finding the Next Signal  |  ATMOS 2026, BITS Pilani Hyderabad  |  Research deliverable`;
   CSS palette `--p:#C8102E; --pd:#0B0B0C; --a:#C8102E; --tint:#FBE3E6;` (red/white/black); team block
   `Harsh Kawatra, Delhi Technological University (Team Leader)<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University`.
   Run `PY research\assemble.py pdf`. Open the PDF (Read tool, pages 1-3 and 3 random pages) to check rendering.
6. Log G-R in build-log with the assembler JSON pasted.

---

## §5 PHASE P: THE RESEARCH ENGINE (Python FastAPI)

### §5.0 Why this shape (read once, do not re-litigate)

- **Python engine + Next.js UI**, mirroring the user's `ai-healthcare platform` (FastAPI backend + Next 16 frontend) and
  `gursimran/equity-research-copilot` (FastAPI + Next). PDF parsing (PyMuPDF), XBRL (lxml), change-point detection
  (`ruptures`), pandas, Angel One SmartAPI (`smartapi-python`, used in stocksense) and the Sarvam voice stack (Python
  FastAPI WebSocket in ai-healthcare) are all Python-native.
- **No vector database, no LangGraph.** BM25 over PDF pages plus quote-anchored LLM extraction is deterministic,
  fast, and auditable; a hand-written async stage orchestrator keeps the run trace explainable. (ADRs in research §11.)
- **LLM:** Sarvam `sarvam-105b` (128K context, OpenAI-compatible, supports `tools` and `response_format: json_schema`)
  for research reasoning; `sarvam-105b-conversations` for voice. Gemini (key from ai-healthcare `.env`) is an automatic
  fallback on 429/5xx/timeout only. The deterministic core does all arithmetic; the LLM never computes a number that is
  shown to the user.
- **Agent roles** are stage workers named after the brief's verbs (Discover, Connect, Calculate, Reason, Challenge,
  Prove). We do not advertise an agent count (judges said they do not score it).

### §5.1 Environment setup (step P-setup, one agent, 45 minutes)

```powershell
$ROOT = "C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits"
Set-Location $ROOT
git init
& "C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" -m venv engine\.venv
engine\.venv\Scripts\python.exe -m pip install --upgrade pip
```

`engine\requirements.txt` (pin majors; install with `engine\.venv\Scripts\python.exe -m pip install -r engine\requirements.txt`):

```
fastapi>=0.115
uvicorn[standard]>=0.32
sse-starlette>=2.1
httpx>=0.27
pydantic>=2.8
pydantic-settings>=2.6
python-dotenv>=1.0
tenacity>=9.0
orjson>=3.10
lxml>=5.3
beautifulsoup4>=4.12
pymupdf>=1.24
pdfplumber>=0.11
rank-bm25>=0.2.2
rapidfuzz>=3.9
pandas>=2.2
numpy>=2.0
scipy>=1.13
ruptures>=1.1.9
feedparser>=6.0
ddgs>=6.0
jinja2>=3.1
markdown-it-py>=3.0
openpyxl>=3.1
smartapi-python>=1.5
pyotp>=2.9
websockets>=13.0
mcp>=1.2
pytest>=8.3
pytest-asyncio>=0.24
respx>=0.21
```

If `ddgs` fails to install, use `duckduckgo-search>=6.3` and import `from duckduckgo_search import DDGS`. Record the
choice in DECISIONS.md.

`.gitignore` at repo root must include: `engine/.venv/`, `engine/.cache/`, `engine/data/*.sqlite`, `engine/.env`,
`apps/web/.env.local`, `apps/web/node_modules/`, `apps/web/.next/`, `engine/eval/out/raw/`, `*.pyc`, `__pycache__/`.

**Key import script** `engine\scripts\import_keys.py` (never prints values):

```python
"""Copy credentials from the user's existing projects into engine/.env without printing any value."""
import pathlib, re, sys
HOME = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS")
SRC = {
    HOME / "stocksense" / ".env": {
        "STOCKSENSE_UPSTOX_API_KEY": "UPSTOX_API_KEY", "STOCKSENSE_UPSTOX_API_SECRET": "UPSTOX_API_SECRET",
        "STOCKSENSE_UPSTOX_ACCESS_TOKEN": "UPSTOX_ACCESS_TOKEN", "STOCKSENSE_UPSTOX_ANALYTICS_TOKEN": "UPSTOX_ANALYTICS_TOKEN",
        "STOCKSENSE_ANGEL_API_KEY": "ANGEL_API_KEY", "STOCKSENSE_ANGEL_CLIENT_CODE": "ANGEL_CLIENT_CODE",
        "STOCKSENSE_ANGEL_PASSWORD": "ANGEL_PASSWORD", "STOCKSENSE_ANGEL_TOTP_SECRET": "ANGEL_TOTP_SECRET"},
    HOME / "ai-healthcare platform" / "backend" / ".env": {"SARVAM_API_KEY": "SARVAM_API_KEY", "GEMINI_API_KEY": "GEMINI_API_KEY", "GEMINI_MODEL": "GEMINI_MODEL"},
    HOME / "nsut-maudrik" / "backend" / ".env": {"SARVAM_API_KEY": "SARVAM_API_KEY", "GEMINI_API_KEY": "GEMINI_API_KEY"},
    HOME / "sih-apix" / ".env.local": {"SARVAM_API_KEY": "SARVAM_API_KEY"},
}
def parse(p):
    out = {}
    if not p.exists(): return out
    for line in p.read_text(encoding="utf-8", errors="ignore").splitlines():
        m = re.match(r"^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$", line)
        if m: out[m.group(1)] = m.group(2).strip().strip('"').strip("'")
    return out
dst = pathlib.Path(__file__).resolve().parents[1] / ".env"
cur = parse(dst); found = {}
for src, mapping in SRC.items():
    vals = parse(src)
    for a, b in mapping.items():
        if b not in found and vals.get(a): found[b] = vals[a]
fixed = {"NSE_MCP_BHAVCOPY_URL": "https://mcp.nseindia.in/bhavcopy/cm/mcp", "NSE_MCP_CMMKT_URL": "https://mcp.nseindia.in/cmmkt/mcp",
         "SARVAM_RESEARCH_MODEL": "sarvam-105b", "SARVAM_CHAT_MODEL": "sarvam-105b-conversations",
         "SARVAM_STT_MODEL": "saaras:v3-realtime", "SARVAM_TTS_MODEL": "bulbul:v3", "SARVAM_SPEAKER": "simran",
         "SARVAM_TTS_MODE": "ws", "VOICE_LANGUAGE": "auto", "WEB_ORIGIN": "http://localhost:3000",
         "SEC_USER_AGENT": "", "LLM_PROVIDER": "sarvam"}
merged = {**fixed, **cur, **found}
dst.write_text("\n".join(f"{k}={v}" for k, v in sorted(merged.items())) + "\n", encoding="utf-8")
for k in sorted(merged): print(f"{k}: {'present' if merged[k] else 'MISSING'}")
```

Write `.env.example` with the same keys and empty values. `SEC_USER_AGENT` stays empty until the user supplies a
contact string (open item O3; SEC asks for "Name email"); while empty, the SEC collector is skipped and tagged WIRED.

### §5.2 Repository layout (engine)

```
engine/
  requirements.txt  .env  .env.example  pytest.ini
  scripts/import_keys.py  scripts/warm_cache.py  scripts/run_one.py
  spikes/  sNN_*.py  SPIKES.md
  next_signal/
    __init__.py
    config.py            settings (pydantic-settings, reads engine/.env)
    main.py              FastAPI app: REST + SSE + voice WS
    schemas.py           all pydantic models (Report, Evidence, Claim, Hypothesis, ...)
    store.py             SQLite persistence (runs, events, reports)
    events.py            per-run async event bus for SSE
    http.py              shared httpx client, disk cache, polite rate limiter, retries
    universe.py          niftyindices CSV loader, sub-industry mapping, peer selection
    sources/
      nse.py  bse.py  screener.py  openfda.py  fda_web.py  orangebook.py  sec.py
      news.py (GDELT + Google News RSS)  websearch.py (ddgs)  ratings.py
      market/  nse_mcp.py  angel.py  upstox.py  bhavcopy.py  prices.py (fallback chain)
    docs/
      pdf.py (PyMuPDF page text + pdfplumber tables)  bm25.py  xbrl.py  anchors.py
    llm/
      sarvam.py  gemini.py  router.py  guards.py  prompts/*.md
    metrics/
      library.py (formula registry)  compute.py  changepoint.py  peers.py  eventstudy.py  fx.py
    playbooks/
      pharma.py  hospital.py  diagnostics.py  generic.py  select.py
    pipeline/
      resolve.py  discover.py  connect.py  calculate.py  reason.py  challenge.py  prove.py  run.py
    grading/
      admiralty.py  independence.py  strength.py  novelty.py  ach.py  contradictions.py  falsify.py
    export/
      templates/report.md.j2  templates/report.html.j2
      svg.py  md.py  html.py  pdf.py  xlsx.py  csvs.py
    voice/   (ported from ai-healthcare, §5.15)
    eval/
      harness.py  timetravel.py  ablation.py  summarize.py
  tests/
    test_schemas.py  test_strength.py  test_ach.py  test_metrics.py  test_guards.py
    test_nse_parsers.py  test_exports.py  test_no_hardcoding.py  fixtures/*.json
```

### §5.3 Step P0: data-access spikes (run on 11 to 12 Oct, in parallel with research lanes)

One agent writes and runs each spike script in `engine\spikes\`, then records in `engine\spikes\SPIKES.md` a row:
`| Spike | Status OK/PARTIAL/FAIL | What works (endpoint, params, sample keys) | Latency | Fallback decision |`.
**The decisions in SPIKES.md are binding for P1.** If a spike fails, P1 implements the fallback named here, not a new idea.

| Spike | Script | Test | If it fails |
|---|---|---|---|
| S01 NSE session | `s01_nse.py` | Cookie bootstrap (§5.5.1), then GET each: `/api/quote-equity?symbol=CIPLA`, `/api/corporate-announcements?index=equities&symbol=CIPLA&from_date=01-01-2025&to_date=10-10-2026`, `/api/annual-reports?index=equities&symbol=CIPLA`, `/api/corporates-financial-results?index=equities&symbol=CIPLA&period=Quarterly`, `/api/results-comparision?symbol=CIPLA`, `/api/corporate-share-holdings-master?index=equities&symbol=CIPLA`, `/api/corporate-board-meetings?index=equities&symbol=CIPLA`, `/api/corporates-pit?index=equities&symbol=CIPLA`. Print status code and top-level keys of each; save first item JSON to `spikes/samples/nse_<name>.json`. | Any endpoint 401/403 after one cookie refresh: use BSE equivalent (S02) for that data type and mark the NSE one PARTIAL |
| S02 BSE | `s02_bse.py` | `https://api.bseindia.com/BseIndiaAPI/api/AnnSubCategoryGetData/w?pageno=1&strCat=-1&strPrevDate=20250101&strScrip=500087&strSearch=P&strToDate=20261010&strType=C&subcategory=-1` with headers `Referer: https://www.bseindia.com/`, browser UA. Also scrip lookup for a symbol. Attachment URL patterns `https://www.bseindia.com/xml-data/corpfiling/AttachLive/<ATTACHMENTNAME>` and `/AttachHis/`. | Mark BSE WIRED; NSE remains primary |
| S03 Universe | `s03_universe.py` | Download `ind_nifty50list.csv`, `ind_niftypharmalist.csv`, `ind_niftyhealthcarelist.csv` from niftyindices.com, fallback `archives.nseindia.com/content/indices/`. Print the Healthcare rows of NIFTY 50. | Use cached copy committed in `engine/data/universe_cache/` with its date |
| S04 openFDA | `s04_openfda.py` | `https://api.fda.gov/drug/drugsfda.json?search=sponsor_name:"CIPLA"&limit=100`, `.../drug/enforcement.json?search=recalling_firm:"Cipla"&limit=100`, `.../drug/shortages.json?search=company_name:"Cipla"&limit=50` (check the endpoint exists). Record counts and date fields (`submissions.submission_status_date`, `recall_initiation_date`, `report_date`). | Drop shortages if endpoint absent |
| S05 FDA web | `s05_fda_web.py` | (a) Import Alert 66-40 page `https://www.accessdata.fda.gov/cms_ia/importalert_189.html`: parse firm rows (name, address, country, date published). (b) Warning letters: search `site:fda.gov warning letter <company>` via ddgs, open each letter page, parse "Issue Date", recipient firm, FEI if present, CFR citations. (c) Try FDA Data Dashboard export at `https://datadashboard.fda.gov/oii/cd/inspections.htm` (check for a public CSV/XLSX download link without API credentials). | (c) unavailable without OII logon: inspections classification marked PLANNED; WL + IA + 483 news remain |
| S06 Orange Book | `s06_orangebook.py` | Download `https://www.fda.gov/media/76860/download` (zip), parse `products.txt` (`~` delimited), `patent.txt`, `exclusivity.txt`; filter `Applicant_Full_Name` with rapidfuzz partial_ratio ≥ 90 against company name stems; count ANDAs, exclusivity expiries in next 24 months. | If URL changed, search fda.gov "Orange Book data files" and record the new URL |
| S07 SEC EDGAR | `s07_sec.py` | Only if `SEC_USER_AGENT` set: `https://data.sec.gov/submissions/CIK0001135951.json` (Dr. Reddy's) list recent 6-K/20-F; `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=...` to test other ADR issuers. | Skip; tag WIRED |
| S08 News | `s08_news.py` | GDELT DOC API `https://api.gdeltproject.org/api/v2/doc/doc?query=%22Dr%20Reddy%27s%22%20semaglutide&mode=artlist&format=json&maxrecords=75&sort=datedesc` (record `seendate`), Google News RSS `https://news.google.com/rss/search?q=Cipla+lanreotide&hl=en-IN&gl=IN&ceid=IN:en`, ddgs text search. | If GDELT rate-limits, back off 5 s and use RSS only |
| S09 Screener | `s09_screener.py` | GET `https://www.screener.in/company/CIPLA/consolidated/`; parse tables `#quarters`, `#profit-loss`, `#balance-sheet`, `#cash-flow`, `#ratios` (Debtor Days, Inventory Days) into DataFrames. One request per company, cache 24 h. | If blocked, compute ratios from NSE XBRL (S16) only |
| S10 Sarvam research LLM | `s10_sarvam.py` | `POST https://api.sarvam.ai/v1/chat/completions` header `api-subscription-key`, model `sarvam-105b`, `reasoning_effort: "low"`, `max_tokens: 3000`, `response_format: {"type":"json_schema","json_schema":{"name":"t","schema":{...},"strict":true}}`. Then a tools call with one function. Record latency, whether `reasoning_content` is returned, token usage, and the `max_tokens` ceiling of this account (try 8000: a 400 tells you the plan cap). | If json_schema rejected, use `json_object` + pydantic validation + one repair retry |
| S11 Gemini fallback | `s11_gemini.py` | One call with `GEMINI_MODEL` (or `gemini-3.5-flash-lite` if unset) via REST `generativelanguage.googleapis.com/v1beta/models/<m>:generateContent`. | No fallback; Sarvam retries only |
| S12 Angel One | `s12_angel.py` | TOTP login (§5.5.6), `getCandleData` ONE_DAY for CIPLA token from scrip master, 2 years. | Mark PARTIAL; prices chain continues |
| S13 Upstox | `s13_upstox.py` | `GET https://api.upstox.com/v3/historical-candle/NSE_EQ%7CINE059A01026/days/1/2026-10-10/2024-10-10` with Bearer token. 401 means token expired: record and continue. | Expected PARTIAL on most days |
| S14 NSE MCP | `s14_nse_mcp.py` | Python MCP client (§5.5.7): `list_tools()` on both URLs; print every tool name + input schema; call the bhavcopy history tool for CIPLA for 3 months. | If MCP unreachable, use bhavcopy archive files (stocksense `nse_bhavcopy.py` URL patterns) |
| S15 PDF speed | `s15_pdf.py` | Download one annual report (from S01 annual-reports list), extract per-page text with PyMuPDF, time it, run BM25 for "geographic", "segment", "USFDA", "warning letter", "related party", print top 3 pages. | n/a |
| S16 XBRL | `s16_xbrl.py` | From S01 financial results list take the latest `xbrl` URL; parse with lxml; print all element local-names with contexts; find revenue, PAT, segment members. | Fallback: results-comparision JSON + presentations |

### §5.4 Settings and shared HTTP (step P1a)

`next_signal/config.py`:

```python
from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path
ENGINE = Path(__file__).resolve().parents[1]
class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=str(ENGINE / ".env"), extra="ignore")
    sarvam_api_key: str = ""
    sarvam_research_model: str = "sarvam-105b"
    sarvam_chat_model: str = "sarvam-105b-conversations"
    sarvam_stt_model: str = "saaras:v3-realtime"
    sarvam_tts_model: str = "bulbul:v3"
    sarvam_speaker: str = "simran"
    sarvam_tts_mode: str = "ws"
    sarvam_max_tokens: int = 4000          # set from spike S10 (plan cap)
    gemini_api_key: str = ""
    gemini_model: str = "gemini-3.5-flash-lite"
    llm_provider: str = "sarvam"
    upstox_access_token: str = ""
    angel_api_key: str = ""; angel_client_code: str = ""; angel_password: str = ""; angel_totp_secret: str = ""
    nse_mcp_bhavcopy_url: str = "https://mcp.nseindia.in/bhavcopy/cm/mcp"
    nse_mcp_cmmkt_url: str = "https://mcp.nseindia.in/cmmkt/mcp"
    sec_user_agent: str = ""
    web_origin: str = "http://localhost:3000"
    cache_dir: Path = ENGINE / ".cache"
    db_path: Path = ENGINE / "data" / "next_signal.sqlite"
    run_budget_s: int = 420                # soft budget for a live run (7 min)
    run_hard_cap_s: int = 540              # hard cap (9 min); Prove runs with what exists
settings = Settings()
```

`next_signal/http.py` requirements (write it to satisfy these; tests in `test_nse_parsers.py` use respx):
- One `httpx.AsyncClient(http2=False, timeout=httpx.Timeout(20, connect=10), follow_redirects=True)` per host family,
  browser-like headers: `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36`,
  `Accept-Language: en-IN,en;q=0.9`.
- Disk cache: key = sha1(method + url + sorted params); store body + headers + `fetched_at` under
  `.cache/http/<host>/<sha1>`; TTL by kind: listings 6 h, documents (PDF/XBRL) forever, prices 12 h, news 2 h.
  `as_of` runs never read a cache entry newer than... (cache stores fetch time; point-in-time filtering is done on
  document publish dates, not fetch dates, so cache is safe for time-travel).
- Per-host polite limiter: NSE 3 req/s, BSE 2 req/s, fda.gov 2 req/s, api.fda.gov 4 req/s (openFDA allows 240/min
  without key), sec.gov 8 req/s, gdelt 1 req/s, screener 1 req/2 s, news.google 2 req/s.
- tenacity retry: 3 attempts, exponential 0.5 to 4 s, on 429/5xx/timeout; on NSE 401/403 call `nse.refresh_cookies()`
  once then retry.
- Every fetch emits a `source_fetch` event to the run bus: `{host, url, status, ms, cached}` (powers the live trace UI).

### §5.5 Source clients (step P1b; implement exactly the decisions in SPIKES.md)

#### §5.5.1 NSE (`sources/nse.py`)

```python
BASE = "https://www.nseindia.com"
WARM = ["/", "/get-quotes/equity?symbol={sym}", "/companies-listing/corporate-filings-announcements"]
class NSE:
    def __init__(self, client): self.c = client; self.warm = False
    async def refresh_cookies(self, sym="CIPLA"):
        for p in WARM: await self.c.get(BASE + p.format(sym=sym), headers={"Accept": "text/html"})
        self.warm = True
    async def api(self, path, **params):
        if not self.warm: await self.refresh_cookies()
        r = await self.c.get(BASE + "/api/" + path, params=params,
                             headers={"Accept": "application/json", "Referer": BASE + "/"})
        if r.status_code in (401, 403):
            await self.refresh_cookies(); r = await self.c.get(BASE + "/api/" + path, params=params,
                             headers={"Accept": "application/json", "Referer": BASE + "/"})
        r.raise_for_status(); return r.json()
    async def quote(self, sym): return await self.api("quote-equity", symbol=sym)
    async def announcements(self, sym, frm, to): return await self.api("corporate-announcements", index="equities", symbol=sym, from_date=frm, to_date=to)
    async def annual_reports(self, sym): return await self.api("annual-reports", index="equities", symbol=sym)
    async def financial_results(self, sym, period="Quarterly"): return await self.api("corporates-financial-results", index="equities", symbol=sym, period=period)
    async def results_comparison(self, sym): return await self.api("results-comparision", symbol=sym)
    async def shareholding(self, sym): return await self.api("corporate-share-holdings-master", index="equities", symbol=sym)
    async def board_meetings(self, sym): return await self.api("corporate-board-meetings", index="equities", symbol=sym)
    async def insider(self, sym): return await self.api("corporates-pit", index="equities", symbol=sym)
```

Date format for NSE params is `DD-MM-YYYY`. Announcement items carry (verify in S01 sample) `desc` (subject),
`attchmntText`, `attchmntFile` (PDF URL on nsearchives), `an_dt` / `sort_date` (publish timestamp), `smIndustry`.
Normalise each into `Document(kind=..., title, url, published_at, publisher="NSE (company filing)", origin_class=...)`.
Classify `kind` from the subject with these regexes (case-insensitive), first match wins:

| kind | regex on subject + attchmntText |
|---|---|
| `results` | `financial result|outcome of board meeting.*result|results? for the quarter` |
| `presentation` | `investor presentation|earnings presentation|analyst.*presentation` |
| `transcript` | `transcript` |
| `call_audio` | `audio|recording` |
| `credit_rating` | `credit rating|rating` |
| `regulatory_usfda` | `usfda|us fda|form 483|warning letter|import alert|establishment inspection|EIR|observations` |
| `acquisition` | `acquisition|amalgamation|demerger|scheme of arrangement|divest` |
| `litigation` | `litigation|court|tribunal|settlement|penalty` |
| `capacity` | `commission|operational|beds|plant|facility|capacity` |
| `other` | everything else |

#### §5.5.2 BSE (`sources/bse.py`)
Implement `announcements(scrip_code, frm, to)` using the S02 URL and `scrip_code(symbol)` via BSE lookup or the NSE
quote's `info.isin` → BSE lookup by ISIN. Used for (a) fallback when NSE fails, (b) cross-exchange consistency check
(same filing on both exchanges: a contradiction if titles/dates differ by > 1 day).

#### §5.5.3 Screener (`sources/screener.py`)
Parse with BeautifulSoup: section ids `quarters`, `profit-loss`, `balance-sheet`, `cash-flow`, `ratios`,
`shareholding`. Each table: first column = line item, header row = periods (e.g. `Jun 2026`). Return a tidy DataFrame
`[item, period_end (date), value (float, ₹ crore)]`. Admiralty grade C (aggregator). Use for: fast 10-year baseline,
peer metrics, ratios (Debtor Days, Inventory Days, Working Capital Days, ROCE). **Any number that appears in the final
Discovery "Numbers" must also be anchored in a primary document (results PDF/XBRL/presentation/annual report)**; the
aggregator value is kept as corroboration and as the contradiction-detector's counterparty.

#### §5.5.4 Regulator clients
- `openfda.py`: `approvals(sponsor_stems)` from drugsfda (application_number prefix ANDA/NDA/BLA, submission dates,
  submission_type ORIG/SUPPL, status AP/TA); `recalls(firm_stems)` from enforcement (classification I/II/III, reason,
  recall_initiation_date, report_date); `shortages(company)` if S04 OK. Sponsor stems come from `universe.name_stems()`:
  company name minus suffixes (Ltd, Limited, Industries, Laboratories, Pharmaceuticals, Inc, Pvt) plus subsidiary
  names listed in the annual report's "Form AOC-1" / "List of subsidiaries" pages (extracted by BM25 page search + regex
  on lines containing Inc|LLC|Ltd|GmbH|B.V.|Pty). Generic, no hard-coding.
- `fda_web.py`: `warning_letters(stems)` (ddgs search `site:fda.gov "warning letter" <stem>` 20 results, keep URLs under
  `/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/`, parse letter date, firm, address,
  FEI, CFR cites, first 600 chars of observations); `import_alert_6640(stems)` (parse the IA 66-40 page rows: firm,
  address, country, date published); optional `inspections(stems)` only if S05(c) succeeded.
- `orangebook.py`: monthly zip cached; `products_for(stems)`, `exclusivities_expiring(stems, months=24)`,
  `patents_expiring(stems, months=24)`.
- `ratings.py`: rating actions from NSE announcements of kind `credit_rating` (PDF text: agency, instrument, rating,
  outlook, rationale paragraphs). Optional ddgs `site:crisilratings.com OR site:icra.in OR site:careratings.com <name> rationale`.
- `sec.py` (only if `SEC_USER_AGENT`): ticker → CIK via `https://www.sec.gov/files/company_tickers.json`; filings list
  from `data.sec.gov/submissions/CIK##########.json`; fetch 6-K exhibit 99.1 press releases matching results dates.

#### §5.5.5 News (`sources/news.py`, `sources/websearch.py`)
- GDELT `artlist` JSON for `"<short name>" AND (<keyword OR keyword>)`, last 24 months, `maxrecords=250`,
  `sort=datedesc`; keep `url, title, seendate, domain, language, sourcecountry`. GDELT is the timestamp authority for
  "first mainstream coverage".
- Google News RSS for recency (feedparser), `hl=en-IN&gl=IN&ceid=IN:en`.
- ddgs `text()` for disconfirming searches (Challenge) with `region="in-en"`, `max_results=10`.
- Mainstream domain list for novelty (do not treat as company-specific; it is a sector-agnostic list):
  `economictimes.indiatimes.com, livemint.com, business-standard.com, moneycontrol.com, thehindubusinessline.com,
  financialexpress.com, reuters.com, bloomberg.com, cnbctv18.com, ndtvprofit.com, fiercepharma.com, endpts.com`.

#### §5.5.6 Angel One (`sources/market/angel.py`)
Port from stocksense (`src\stocksense\data\angel_intraday.py`, `angel_live.py`): TOTP login
`SmartConnect(api_key).generateSession(client_code, password, pyotp.TOTP(secret).now())`; scrip master
`https://margincalculator.angelone.in/OpenAPI_File/files/OpenAPIScripMaster.json` cached; `getCandleData` with
`interval="ONE_DAY"`, chunks ≤ 2000 days for daily (verify in S12), polite delay 0.35 s. Install the stocksense
secret-redacting log filter so the JWT never appears in logs. SmartAPI is synchronous: wrap calls in
`asyncio.to_thread`.

#### §5.5.7 NSE MCP (`sources/market/nse_mcp.py`)

```python
from mcp import ClientSession
from mcp.client.streamable_http import streamablehttp_client
async def mcp_call(url: str, tool: str, args: dict):
    async with streamablehttp_client(url) as (read, write, _):
        async with ClientSession(read, write) as s:
            await s.initialize()
            res = await s.call_tool(tool, args)
            return [c.text for c in res.content if getattr(c, "type", "") == "text"]
async def mcp_tools(url: str):
    async with streamablehttp_client(url) as (read, write, _):
        async with ClientSession(read, write) as s:
            await s.initialize(); return (await s.list_tools()).tools
```
Tool names and argument schemas come from S14 output; hard-code those tool names (they are API names, not company
data). Known from stocksense docs: history pages are 3 months per call via `next_end_date`; `get_bulk_quote` has no
staleness flag, so always check the returned `date`.

#### §5.5.8 Prices fallback chain (`sources/market/prices.py`)
`daily_closes(symbol, start, end) -> DataFrame[date, open, high, low, close, volume, source]` tries in order NSE MCP →
Angel → Upstox → NSE bhavcopy archives; returns the first non-empty result and records `source`. Indices (NIFTY 50,
NIFTY PHARMA, NIFTY HEALTHCARE) via the same chain (Upstox key `NSE_INDEX|Nifty 50`; Angel index tokens from scrip
master; MCP index tool if listed). Event study uses NIFTY 50 as market proxy, sector index as robustness.

### §5.6 Data model (`schemas.py`), the contract between engine, UI, exports and voice

```python
from __future__ import annotations
from datetime import date, datetime
from typing import Literal, Optional
from pydantic import BaseModel, Field

OriginClass = Literal["company_filing","company_ir","exchange","regulator_us","regulator_in","sec","rating_agency",
                      "industry_body","market_data","press","aggregator","peer_filing"]
Grade = Literal["A","B","C","D","E","F"]

class Document(BaseModel):
    doc_id: str                      # sha1(url)[:12]
    kind: str                        # results, presentation, transcript, annual_report, warning_letter, ...
    title: str
    url: str
    publisher: str
    origin_class: OriginClass
    published_at: Optional[datetime] # point-in-time stamp; None => excluded from as_of runs
    fetched_at: datetime
    pages: int = 0
    reliability: Grade = "B"

class Anchor(BaseModel):
    doc_id: str
    page: Optional[int] = None
    quote: str                       # verbatim text (<= 300 chars) that contains the number or claim
    verified: bool = False           # True when quote found verbatim (whitespace-normalised) in the doc text

class Fact(BaseModel):
    fact_id: str
    metric: str                      # e.g. "revenue_north_america", "beds_operational"
    period: str                      # "Q1FY27", "FY26", or ISO date for events
    value: float
    unit: str                        # "INR_cr", "USD_mn", "pct", "days", "beds", "count"
    anchor: Anchor
    entity: str                      # NSE symbol (company or peer)

class Event(BaseModel):
    event_id: str
    date: date
    kind: str                        # fda_warning_letter, import_alert, anda_approval, recall, filing, guidance, news_first_seen, price_move, ...
    title: str
    origin_class: OriginClass
    url: str
    anchor: Optional[Anchor] = None

class MetricValue(BaseModel):
    metric_id: str; period: str; value: float; unit: str
    inputs: list[str]                # fact_ids
    formula: str                     # human-readable formula string from the registry

class Anomaly(BaseModel):
    anomaly_id: str; metric_id: str; description: str
    peer_z: Optional[float] = None; changepoint_period: Optional[str] = None
    trend_t: Optional[float] = None; materiality_pct: Optional[float] = None
    score: float

class Prediction(BaseModel):
    metric_id: str; direction: Literal["up","down","flat","present","absent"]; where_to_check: str

class Hypothesis(BaseModel):
    hyp_id: str; angle_id: str; statement: str; mechanism: str
    predictions: list[Prediction]; disconfirmers: list[str]
    is_rival_of: Optional[str] = None   # rivals generated by Challenge point at their main hypothesis
    status: Literal["proposed","survived","downgraded","killed"] = "proposed"
    kill_reason: Optional[str] = None

class TestResult(BaseModel):
    hyp_id: str; test_id: str          # T1..T9
    applicable: bool; passed: Optional[bool]; detail: str; evidence_ids: list[str] = []

class Contradiction(BaseModel):
    con_id: str; type: Literal["numeric","narrative_vs_number","temporal","cross_channel","aggregator_vs_primary"]
    claim: str; side_a: str; side_b: str; anchors: list[Anchor]; ruling: str; resolved: bool

class EvidenceItem(BaseModel):
    ev_id: str; doc_id: str; title: str; url: str; publisher: str; origin_class: OriginClass
    reliability: Grade; published_at: Optional[datetime]; supports: list[str]   # hyp_ids
    contradicts: list[str]; anchor: Anchor

class Claim(BaseModel):
    claim_id: str; text: str; evidence_ids: list[str]; number_ids: list[str] = []

class NumberBlock(BaseModel):
    number_id: str; label: str; value: float; unit: str; period: str; formula: str
    inputs: list[str]; display: str      # preformatted, Indian notation

class TimelinePoint(BaseModel):
    date: date; label: str; kind: str; event_id: Optional[str] = None; is_changepoint: bool = False

class Falsification(BaseModel):
    statement: str; metric_id: str; comparator: Literal[">","<",">=","<=","=="]; threshold: float
    periods_required: int; next_check: date; check_source: str

class StrengthBreakdown(BaseModel):
    independence: float; reliability: float; corroboration: float; survival: float; persistence: float
    penalties: float; total: float; label: Literal["Strong","Moderate","Weak"]; reasoning: list[str]

class Discovery(BaseModel):
    sentence: str = Field(max_length=360)
    why_it_matters: list[str] = Field(min_length=3, max_length=5)
    evidence: list[EvidenceItem]
    timeline: list[TimelinePoint]
    numbers: list[NumberBlock]
    counterargument: str
    counter_evidence_ids: list[str]
    falsification: Falsification
    strength: StrengthBreakdown
    claims: list[Claim]
    novelty: float                       # 0..1
    angle_id: str

class RunMeta(BaseModel):
    run_id: str; symbol: str; company: str; sub_industry: str; as_of: date
    started_at: datetime; finished_at: Optional[datetime] = None; runtime_s: Optional[float] = None
    llm_calls: int = 0; llm_provider_mix: dict[str, int] = {}; sources_hit: int = 0; documents: int = 0
    status: Literal["running","done","failed","partial"] = "running"

class Report(BaseModel):
    meta: RunMeta
    discovery: Optional[Discovery]
    runners_up: list[Hypothesis]         # survived but not chosen
    killed: list[Hypothesis]
    tests: list[TestResult]
    ach: dict                            # {"hypotheses":[...], "evidence":[...], "cells":[[score,...]]}
    contradictions: list[Contradiction]
    documents: list[Document]
    events: list[Event]
    metrics: list[MetricValue]
    anomalies: list[Anomaly]
    angles_considered: list[dict]        # {angle_id, score, reason}
    trace: list[dict]                    # ordered run events for replay
```

`tests/test_schemas.py` builds a minimal valid `Report` from `tests/fixtures/report_min.json` and asserts round-trip.

### §5.7 Discover: universe, sub-industry, angles, source plan (`universe.py`, `playbooks/`, `pipeline/discover.py`)

1. **Resolve** (`pipeline/resolve.py`): input may be a symbol (`CIPLA`), a name ("Dr Reddy's"), or an ISIN. Match
   against the union of the three index CSVs with rapidfuzz `WRatio ≥ 85`; if no match, call NSE `quote-equity` on the
   upper-cased input; if still none, NSE search autocomplete `/api/search/autocomplete?q=` (verify in S01). Output:
   symbol, name, ISIN, `industryInfo` (macro, sector, industry, basicIndustry), in_nifty50 flag.
2. **Sub-industry → playbook** mapping (generic, by NSE basic industry text):
   - contains `Pharmaceutical` or `Biotech` or `Drug` → `pharma`
   - contains `Hospital` or `Healthcare Service` → `hospital`
   - contains `Diagnostic` or `Laborator` (but not `Laboratories` in a company name: use the industry field only) → `diagnostics`
   - else → `generic` (works for any listed company; used if judges pick an outlier)
3. **Peers** (`universe.peers(symbol, k=5)`): companies in Nifty Pharma ∪ Nifty Healthcare ∪ NIFTY 50 with the same
   playbook, ranked by absolute log-difference of market cap (from NSE quote `marketCap` or free-float CSV weights),
   excluding the subject. Generic, no hand-picked lists.
4. **Angle playbooks** (`playbooks/pharma.py` etc.). Each angle is a dict:
   `{angle_id, title, question, metrics:[metric_ids], doc_kinds:[...], external_sources:[...], rival_tests:[T..]}`.

Pharma angles (P1 to P10):

| ID | Question the agent asks | Key metrics | External sources |
|---|---|---|---|
| P1 | Has the business model quietly shifted (specialty/innovative, CDMO, India branded, consumer health), and when? | segment shares, specialty_share, cdmo_share, mix change-point | presentations, annual reports, Orange Book, peers |
| P2 | Did a regulatory or compliance development hit the financials in filings before mainstream coverage? | fda_events_24m, remediation mentions, US revenue change-point, provisions | FDA WL, IA 66-40, openFDA recalls, NSE `regulatory_usfda` filings, GDELT first-seen |
| P3 | How has geographic revenue exposure shifted over five years, and what drove it? | geo_share_*, geo_share_change_5y, FX-neutral US growth | presentations, annual reports, peers |
| P4 | Is a single product or exclusivity window carrying a segment, and when does it end? | us_rev_volatility, product mentions, exclusivity expiries | Orange Book, transcripts, FDA approvals |
| P5 | Are new launches masking price erosion in the base business? | anda_approvals_ttm, us_rev_yoy, launches mentioned, gross margin | openFDA drugsfda, transcripts |
| P6 | Do receivables or inventory tell a different story from revenue? | receivable_days, inventory_days, rec_growth_minus_rev_growth, cfo_to_ebitda | annual reports, screener, XBRL |
| P7 | Is R&D intensity or capitalisation changing the earnings quality? | rd_pct, intangible_additions_pct, impairments | annual reports |
| P8 | Is profit quality changing (other income, forex, one-offs, tax)? | other_income_share_pbt, exceptional_share_pbt, etr | results, XBRL |
| P9 | Is there a hidden dependence on a partner, supplier, licensor or customer? | related-party flows, partner-site FDA status, in-licensed product share | annual report RPT notes, FDA records of partner sites, transcripts |
| P10 | Do different disclosure channels tell different stories (SEC vs NSE, press vs filing, guidance vs actual)? | guidance_gap, cross_channel diffs | SEC 6-K/20-F, press releases, transcripts |

Hospital angles (H1 to H6): H1 beds announced vs operational; H2 ARPOB growth decomposition (price, payor mix,
case mix, international); H3 occupancy dilution from new capacity (mature vs new units); H4 non-hospital segment drag
or subsidy (pharmacy, digital, insurance); H5 regulatory price exposure (CGHS, PMJAY, NPPA implant caps); H6 growth
mix organic vs acquired.
Diagnostics angles (D1 to D3): D1 volume vs realisation per test; D2 patient vs test growth and B2B/B2C mix; D3 network
expansion vs revenue per centre.
Generic angles (G1 to G6): price vs volume; working capital vs revenue; segment mix shift; profit quality; guidance vs
actual; cross-channel disclosure divergence. (The brief's Track C angles, generalised, used only when playbook =
generic.)

5. **Angle scoring** (`playbooks/select.py`), computed after a quick first pass of Calculate on cheap data
   (screener + results-comparison + announcements listing + regulator counts):
   `angle_score = 0.35*data_availability + 0.40*anomaly_signal + 0.25*novelty_prior`
   - data_availability ∈ [0,1] = share of the angle's metrics with ≥ 6 periods of data.
   - anomaly_signal ∈ [0,1] = max over the angle's metrics of `min(1, max(|peer_z|/3, cp_strength, |trend_t|/4))`.
   - novelty_prior ∈ [0,1] = 1 − min(1, mainstream_hits_90d / 20) for the angle's keywords (GDELT count).
   Keep the top 4 angles (always include P2 for pharma and H1 for hospitals if data_availability ≥ 0.3, because those
   are the brief's own Track D questions). Emit `angles_considered` with all scores and a one-line reason each.
6. **Source plan**: for the chosen angles, the union of doc kinds and external sources; for documents: last 8
   quarterly presentations, last 8 results filings (PDF or XBRL), last 4 transcripts, last 2 annual reports (3 if P3 or
   P6 chosen, for 5-year coverage use annual report geography tables FY21 to FY26 and screener history), all
   `regulatory_usfda`, `credit_rating`, `capacity`, `acquisition` filings in 36 months; peers: screener + last 4
   presentations each (presentations only for the top 3 peers to bound time).

### §5.8 Connect: documents, anchors, independence (`pipeline/connect.py`, `docs/*`, `grading/independence.py`)

1. Download in parallel (asyncio.Semaphore(8) overall, per-host limiter applies). PDFs → `docs/pdf.py`:
   `pages = [page.get_text("text") for page in fitz.open(path)]`; tables on demand with pdfplumber for pages selected by
   BM25. Normalise whitespace, keep page numbers 1-based.
2. **BM25 page index** per document (`docs/bm25.py`): tokens = lowercase alphanumerics; queries come from the angle's
   metric synonyms (e.g. `revenue_north_america`: ["north america", "us formulations", "usa", "united states", "us
   generics", "north american"]). Return top k=4 pages per (document, metric).
3. **Quote-anchored extraction** (`llm/prompts/extract.md`): the LLM receives up to 6 candidate pages (text) and a list
   of metric ids with definitions and units, and must return JSON `[{metric, period, value, unit, page, quote}]` where
   `quote` is copied verbatim from the page and contains the number. `docs/anchors.py::verify(quote, page_text)`
   normalises whitespace and digit grouping (remove commas) and checks substring presence; unverifiable facts are
   dropped (logged as `anchor_fail`). This is the anti-hallucination core; never relax it.
4. **XBRL** (`docs/xbrl.py`) when available: map common Ind AS tags to metrics (revenue from operations, other income,
   total expenses, PBT, tax, PAT, exceptional items, segment revenue by member) with the context period. XBRL facts get
   anchors with `quote = "<tag>=<value> (context <id>)"` and `verified=True` (machine-readable primary source).
5. **Origin classes** are assigned by publisher/host (table in `grading/admiralty.py`):

| Host / publisher pattern | origin_class | Admiralty reliability |
|---|---|---|
| NSE/BSE attachment of the subject company (results, presentation, transcript, AR) | company_filing | A |
| company IR site document not on exchange | company_ir | B |
| NSE/BSE market data, bhavcopy, MCP, Angel, Upstox | market_data | A |
| fda.gov, accessdata.fda.gov, api.fda.gov | regulator_us | A |
| cdsco.gov.in, nppaindia.nic.in, sebi.gov.in, pib.gov.in, mohfw | regulator_in | A |
| sec.gov | sec | A |
| crisilratings.com, icra.in, careratings.com, indiaratings.co.in | rating_agency | B |
| pharmexcil, IPA, IQVIA/Pharmarack as reported | industry_body | B |
| peer's NSE/BSE filing | peer_filing | A |
| mainstream press list (§5.5.5) | press | C |
| screener, trendlyne, tickertape, moneycontrol data pages, other | aggregator | C (D if unverifiable) |

6. **Independence** (`grading/independence.py`): two evidence items are *dependent* if (a) same origin_class and same
   publisher, or (b) a press item's text contains ≥ 2 sentences that match (rapidfuzz `token_set_ratio ≥ 90`) a company
   filing published within the 3 days before it (press restating a press release). `independent_origins(hyp)` = number
   of distinct origin classes among supporting items after collapsing dependent items. Company_filing and company_ir
   count as one origin ("the company").

### §5.9 Calculate (`metrics/*`, `pipeline/calculate.py`)

#### §5.9.1 Metric registry (`metrics/library.py`)
Each entry: `Metric(id, name, formula_text, fn, inputs, unit, applies_to, higher_is)`. Minimum 44 metrics:

| Group | metric ids |
|---|---|
| Growth | `rev_yoy`, `rev_qoq`, `rev_cagr_5y`, `segment_yoy[seg]`, `geo_yoy[geo]`, `us_rev_usd_yoy`, `us_rev_inr_yoy`, `fx_effect_us` (= inr growth − usd growth), `india_vs_ipm_gap` (India growth − IPM growth) |
| Mix | `geo_share[geo]`, `geo_share_change_5y[geo]`, `segment_share[seg]`, `specialty_share`, `cdmo_share`, `top_product_mentions` |
| Profitability | `gross_margin`, `ebitda_margin`, `pat_margin`, `rd_pct`, `employee_pct`, `other_income_share_pbt`, `exceptional_share_pbt`, `etr` |
| Working capital | `receivable_days` (= receivables / revenue × 365, annual; quarterly uses ×91.25 on quarter revenue), `inventory_days` (inventory / COGS × 365), `payable_days`, `ccc`, `rec_growth_minus_rev_growth` |
| Cash and capital | `cfo_to_ebitda`, `capex_to_sales`, `cwip_to_gross_block`, `fcf_margin`, `net_debt_to_ebitda`, `intangible_additions_pct`, `goodwill_to_equity` |
| Quality | `sloan_accruals` (= (PAT − CFO) / avg total assets), `beneish_dsri`, `beneish_gmi`, `beneish_sgi` (only where inputs exist; never print a full M-score with missing components) |
| Regulatory (pharma) | `fda_wl_24m`, `fda_ia_active`, `recalls_ttm`, `recalls_class1_ttm`, `anda_approvals_ttm`, `anda_approvals_trend`, `exclusivities_expiring_24m`, `remediation_mentions` |
| Hospital | `arpob`, `arpob_yoy`, `occupancy`, `beds_operational`, `beds_announced`, `beds_gap` (= announced for the period − operational), `revenue_per_bed`, `ebitda_per_bed`, `alos`, `intl_share`, `insurance_share`, `new_unit_ebitda_drag` |
| Market | `car_results_m1p1` (CAR [−1,+1] around results dates), `car_event_m5p5`, `rel_return_1y`, `delivery_pct_spike`, `promoter_change_4q`, `fii_change_4q`, `pledge_pct` |
| Narrative | `narrative_divergence` (§5.10.3) |

Every metric function returns `MetricValue` with `inputs` (fact_ids) and `formula` text; missing inputs → no value
(never impute). Units: percentages stored as percent numbers (12.5 = 12.5%).

#### §5.9.2 Peer z-scores (`metrics/peers.py`)
For metric m and period p: `z = (x − mean(peers)) / std(peers, ddof=1)` with ≥ 3 peer values; else None. Also a
robust version with median/MAD; report both, use the robust one for decisions.

#### §5.9.3 FX neutralisation (`metrics/fx.py`)
USD/INR quarterly average from RBI reference rate (download `https://www.rbi.org.in` reference rate archive; if
unavailable, use the company-disclosed USD figure when reported, which most pharma presentations give for North
America). `fx_effect_us = us_rev_inr_yoy − us_rev_usd_yoy`.

#### §5.9.4 Change-points (`metrics/changepoint.py`)

```python
import numpy as np, ruptures as rpt
def changepoints(y: list[float], min_size: int = 2) -> list[int]:
    a = np.asarray(y, float)
    if len(a) < 6 or np.allclose(a, a[0]): return []
    pen = np.log(len(a)) * np.var(a) * 2           # BIC-style penalty
    return [i for i in rpt.Pelt(model="l2", min_size=min_size).fit(a).predict(pen=pen) if i < len(a)]
def cp_strength(y, idx):
    a = np.asarray(y, float); l, r = a[:idx], a[idx:]
    if len(l) < 2 or len(r) < 2: return 0.0
    pooled = np.sqrt((l.var(ddof=1) + r.var(ddof=1)) / 2) or 1e-9
    return float(min(1.0, abs(r.mean() - l.mean()) / pooled / 3))   # effect size scaled to [0,1]
```
The change-point period labels the Timeline's "when the change emerged" marker (R10).

#### §5.9.5 Event study (`metrics/eventstudy.py`)
Market model on log returns: estimation window [−250, −30] trading days, event windows [−1,+1] and [−5,+5]; abnormal
return = r_i − (α + β r_m); CAR = Σ AR; t-stat = CAR / (σ_ε √L). Market = NIFTY 50; robustness = sector index. Output
per event date: CAR, t, n_est. Used for: (a) "did the market react when the filing came out" (temporal reasoning),
(b) novelty (a large reaction at the mainstream date but none at the earlier filing date means the filing carried a
signal the market missed).

#### §5.9.6 Anomaly ranking
`anomaly.score = 0.4*min(1,|robust_peer_z|/3) + 0.35*cp_strength + 0.25*min(1,|trend_t|/4)`, with
`materiality_pct` = metric's revenue or EBITDA exposure (e.g. geo share). Keep the top 12 anomalies for Reason.

### §5.10 Reason (`pipeline/reason.py`, prompts)

1. Inputs to the LLM (`llm/prompts/hypothesise.md`): company identity and playbook; chosen angles with their
   questions; top-12 anomalies table (metric, periods, values, z, change-point period, materiality); event timeline
   (regulator, filings, guidance, news first-seen); management narrative claims (§5.10.3); peers' values for the same
   metrics. Instruction: "Propose at most 6 hypotheses. Each must explain at least one anomaly, state a mechanism, list
   2 to 4 predictions as (metric_id, direction, where_to_check), and 2 to 3 disconfirmers (observations that would
   break it). Use only metric_ids from the provided registry. Do not state any number that is not in the tables."
   Response format: json_schema of `list[Hypothesis]`. reasoning_effort "medium".
2. **Rival generation** (deterministic, no LLM): for every hypothesis create rivals R-sector, R-fx, R-oneoff,
   R-accounting, R-seasonal (statement templates filled with the metric and period) so ACH always has standard rivals.
3. **Narrative extraction** (`llm/prompts/narrative.md`): from transcripts and presentations, extract up to 15
   management claims `{claim, metric_id_guess, polarity (+1/−1/0), period, quote, page}` with quote anchors verified.
   `narrative_divergence(metric)` = −1 × polarity × sign(observed change) averaged over claims mapping to the metric;
   positive values mean management said one thing and the numbers moved the other way.

### §5.11 Challenge: falsification tests (`grading/falsify.py`, `pipeline/challenge.py`)

Each test returns `TestResult(applicable, passed, detail, evidence_ids)`. Rules are deterministic except T8.

| Test | Name | Applicable when | Pass rule (hypothesis survives the test) |
|---|---|---|---|
| T1 | Peer test (company-specific?) | ≥ 3 peers have the metric | robust peer z of the subject's change ≥ 1.0 in the hypothesised direction; if peers moved the same way with |z| < 0.5, FAIL and mark R-sector consistent |
| T2 | FX test | metric is in INR and the segment earns USD | USD-terms change has the same sign and ≥ 50% of INR-terms magnitude |
| T3 | Base-effect / one-off test | exceptional items, acquisitions, divestments, demergers, or a disclosed one-time product within ±4 quarters | change persists after excluding the disclosed item (recompute with item removed, or compare periods both after the event) |
| T4 | Reclassification test | segment/geo labels changed across periods (label set differs) | change persists on the overlapping consistent labels, or the company provides restated comparatives |
| T5 | Seasonality test | quarterly metric | YoY same-quarter comparison agrees in sign with the trend claimed |
| T6 | Persistence test | always | the change holds in ≥ 2 consecutive periods (quarters or years) or is a single dated event with an anchored record |
| T7 | Novelty test | always | finding not stated plainly by management in the last 2 calls/presentations AND mainstream GDELT hits for the core terms ≤ 10 in 90 days; failing T7 does not kill, it downgrades novelty to ≤ 0.3 |
| T8 | Disconfirming search | always | LLM writes 3 queries that would find counter-evidence (opposite framing, sector-wide explanation, management rebuttal); fetch top 5 results each (ddgs + NSE announcements text search + GDELT); LLM classifies each with a verified quote as supports / contradicts / irrelevant; PASS if no contradicting item from origin grade A or B remains unexplained |
| T9 | Time-travel test | ≥ 8 periods of data | re-run Calculate with `as_of` = 2 periods earlier: the anomaly (or its precursor) was already visible (score ≥ 0.4) before the first mainstream coverage date; PASS means the signal was discoverable early (supports temporal reasoning claims); not applicable tests never kill |

**Kill / downgrade rules** (`pipeline/challenge.py`):
- KILL if T6 fails, or T1 fails with sector rival consistent, or independent origins < 2 after T8, or any unresolved
  contradiction of type numeric with grade-A sources on the hypothesis's core number.
- DOWNGRADE (strength penalty −1) if T2, T3 or T4 fails but the hypothesis remains directionally supported.
- Everything killed is kept in `report.killed` with `kill_reason` (this is shown in the UI kill log and counted in
  the moneyshot).

**ACH matrix** (`grading/ach.py`): rows = evidence items (supporting or contradicting any hypothesis, max 20, highest
reliability first), columns = surviving main hypotheses + standard rivals. Cell score ∈ {+2 CC, +1 C, 0 N, −1 I, −2 II}
assigned by: deterministic rules where the evidence is a metric (sign agreement and magnitude), LLM classification
(with quote) where the evidence is text. Inconsistency(h) = Σ negative cells. The main hypothesis must have the lowest
inconsistency or within 1 of the lowest; the rival with the next-lowest inconsistency becomes the **Counterargument**
(R12), with its supporting evidence ids.

**Contradiction detector** (`grading/contradictions.py`), five types:
1. numeric: same metric, period, entity from two sources differs by > max(0.5% relative, rounding unit). Ruling:
   primary precedence (§0.3 rule 5); if both primary, prefer the later restated figure and flag "restated".
2. narrative_vs_number: `narrative_divergence ≥ 0.5` for a metric.
3. temporal: guidance statement (date, metric, target) vs reported actual after the target date misses by > 10%
   relative or wrong sign.
4. cross_channel: NSE vs BSE vs SEC versions of the same release differ in a number or date.
5. aggregator_vs_primary: screener (or other aggregator) value differs from primary by > 1% (this catches E2-style
   errors and is shown as proof that the agent does not trust aggregators).

### §5.12 Prove: grading and writing (`grading/strength.py`, `grading/novelty.py`, `pipeline/prove.py`)

#### §5.12.1 Evidence strength (deterministic; shown with its reasoning)

```python
def strength(independent_origins:int, grades:list[str], corroborated_numbers:int, total_numbers:int,
             tests_passed:int, tests_applicable:int, persistent_periods:int,
             unresolved_contradictions:int, sector_partial:bool, single_document:bool) -> StrengthBreakdown:
    ind = {0:0,1:0,2:1,3:2}.get(independent_origins, 3)                       # 0..3
    gmap = {"A":2,"B":1.5,"C":1,"D":0.5,"E":0,"F":0}
    rel = round(sum(gmap[g] for g in grades)/max(1,len(grades)), 2)            # 0..2
    cor = round(2*corroborated_numbers/max(1,total_numbers), 2)                # 0..2
    sur = round(2*tests_passed/max(1,tests_applicable), 2)                     # 0..2
    per = 1.0 if persistent_periods >= 3 else (0.5 if persistent_periods == 2 else 0.0)  # 0..1
    pen = -2.0*unresolved_contradictions - (1.0 if sector_partial else 0.0)
    total = max(0.0, ind + rel + cor + sur + per + pen)
    label = "Strong" if total >= 7 else ("Moderate" if total >= 4 else "Weak")
    if single_document: label = "Weak"
    reasons = [f"{independent_origins} independent origins (+{ind})", f"average source grade {rel}/2",
               f"{corroborated_numbers}/{total_numbers} key numbers reproduced in a second source (+{cor})",
               f"{tests_passed}/{tests_applicable} falsification tests passed (+{sur})",
               f"persists for {persistent_periods} periods (+{per})"]
    if pen: reasons.append(f"penalties {pen} (unresolved contradictions {unresolved_contradictions}, sector-wide component {sector_partial})")
    return StrengthBreakdown(independence=ind, reliability=rel, corroboration=cor, survival=sur, persistence=per,
                             penalties=pen, total=round(total,2), label=label, reasoning=reasons)
```
`tests/test_strength.py`: 6 cases including the worked example's Moderate profile (consistent across several primary
sources, partly sector-wide → Moderate), a single-document case (→ Weak), a 4-origin all-pass case (→ Strong).

#### §5.12.2 Novelty (`grading/novelty.py`)
`novelty = 0.5*(1 − min(1, mainstream_hits_90d/20)) + 0.3*(0 if management_stated else 1) + 0.2*lead_score` where
`lead_score = min(1, lead_days/90)` and lead_days = days between the earliest anchored record supporting the
discovery and the first mainstream GDELT item on the topic (0 if coverage came first).

#### §5.12.3 Choosing the discovery
Among survivors: `pick = argmax(materiality_norm × novelty × strength_total/10)` with materiality_norm =
min(1, materiality_pct/25). If no survivor reaches Moderate, the report still returns the best survivor labelled Weak
and says so in plain words (honest output beats a forced claim). If everything was killed, `discovery=None` and the
UI shows "No discovery survived the challenge stage" with the kill log (this is a legitimate, honest outcome).

#### §5.12.4 Writer (`llm/prompts/write_discovery.md`) and guards
LLM input: the chosen hypothesis, its tests, ACH column, numbers (pre-formatted `display` strings), evidence list
(ids, publishers, dates, quotes), timeline, counterargument rival, falsification template. Output json_schema:
`{sentence, why_it_matters[3..5], claims[{text, evidence_ids, number_ids}], counterargument}`.
Guards (`llm/guards.py`), all must pass or the writer is re-asked once with the failure list, then falls back to a
deterministic template:
1. `stray_numbers`: every numeric token in sentence/bullets/claims/counterargument must equal (after normalising
   commas, ₹, %, "crore") a `display` or `value` in numbers[] or a number inside an evidence quote. (Port the idea of
   `ai-healthcare platform/backend/app/services/briefing_service.py::stray_numbers`.)
2. Every claim has ≥ 1 evidence id that exists; the discovery sentence is ≤ 45 words and contains a period label.
3. No em/en dash; no investment language (`BANNED_INVEST` in Appendix X.2: buy/sell/hold ratings, target price,
   undervalued, overvalued, "investors should"), per the case rule.
4. Falsification: built deterministically from the main hypothesis's first prediction:
   `"<metric name> <comparator> <threshold> for <n> consecutive <quarters> (next check: <date>, source: <kind>)"`,
   threshold = the pre-change level from the change-point segment mean (or the peer median), next_check = next NSE
   board meeting date for results if listed, else quarter end + 45 days.

### §5.13 Orchestrator, API and run events (`pipeline/run.py`, `main.py`, `events.py`, `store.py`)

Stage sequence and budgets (seconds, soft): resolve 5 → discover.quickpass 45 → discover.plan 5 → connect 120 →
calculate 15 → reason 40 → challenge 110 → prove 40 → export-ready 5. Total ≈ 385 s; hard cap 540 s: when the cap is
hit, the orchestrator cancels pending fetches and runs Prove on what exists, marking `status="partial"`.

Event types emitted on the bus (SSE `event:` names; `data:` JSON):
`stage` {stage, state: start|end, ms}, `source_fetch`, `doc_parsed` {doc_id, kind, pages}, `fact` {metric, period,
value, verified}, `anomaly` {metric_id, score}, `angle` {angle_id, score, chosen}, `hypothesis` {hyp_id, statement},
`test` {hyp_id, test_id, passed}, `kill` {hyp_id, reason}, `contradiction` {type, claim}, `llm` {purpose, provider,
ms, tokens}, `discovery` {sentence, label}, `done` {run_id, runtime_s}, `error` {message}.

REST/SSE (`main.py`; CORS allow `settings.web_origin`):

| Method | Path | Body / query | Returns |
|---|---|---|---|
| GET | `/api/health` | | `{ok, llm_provider, sarvam: bool, gemini: bool, prices_chain: [...]}` |
| GET | `/api/universe` | `track=D` | `[{symbol, name, industry, basic_industry, playbook, in_nifty50, weight}]` |
| GET | `/api/resolve` | `q` | resolved identity |
| POST | `/api/runs` | `{query, as_of?: "YYYY-MM-DD", disable_challenge?: false}` | `{run_id}` (starts background task) |
| GET | `/api/runs/{id}/events` | | SSE stream (replays past events first, then live) |
| GET | `/api/runs/{id}` | | `RunMeta` |
| GET | `/api/runs/{id}/report` | | `Report` |
| GET | `/api/runs` | `limit` | recent runs |
| GET | `/api/runs/{id}/export.pdf` / `.md` / `.xlsx` / `.zip` | | file download (Content-Disposition) |
| GET | `/api/runs/{id}/export/csv/{table}` | table ∈ evidence, numbers, timeline, hypotheses, tests, ach, contradictions, sources, metrics, anomalies | CSV |
| GET | `/api/market/{symbol}/candles` | `from,to` | price series + `source` |
| GET | `/api/eval/summary` | | eval summary JSON |
| WS | `/ws/voice` | | voice protocol v2 (§5.15) |

Run: `engine\.venv\Scripts\python.exe -m uvicorn next_signal.main:app --port 8080 --app-dir engine`.
Persistence: SQLite tables `runs(run_id PK, meta_json, report_json, created_at)`, `events(run_id, seq, type,
data_json, ts)`. Reports are stored as plain JSON (they stay under 2 MB).

`scripts/run_one.py SYMBOL [--as-of YYYY-MM-DD] [--no-challenge]` runs the pipeline in-process and prints a summary
(used by eval and by developers).

`scripts/warm_cache.py`: for every symbol in the Track D universe (NIFTY 50 healthcare + Nifty Pharma + Nifty
Healthcare), fetch listings and documents into the HTTP cache only (no analysis). Run the evening before the finals.
This is data caching, not company-specific tuning; say so if asked.

### §5.14 Evaluation harness (`eval/*`), the source of every deck and PDF number

#### §5.14.1 Company set (deterministic, no hand-picking)
- Set N50: NIFTY 50 rows with Industry == Healthcare (expect 5).
- Set TB: from `ind_niftypharmalist.csv` ∪ `ind_niftyhealthcarelist.csv` minus N50, sort by the CSV order (index
  constituents list order) and take the first 10. Record the list in `eval/out/companies.json` with the CSV dates.

#### §5.14.2 Metrics per run (`eval/summarize.py` → `eval/out/summary.json`, `eval/out/runs.csv`)
`runtime_s`, `status`, `documents`, `sources_hit`, `llm_calls`, `hypotheses_total`, `killed`, `survived`,
`discovery_label`, `strength_total`, `independent_origins`, `novelty`, `numbers_total`, `numbers_anchored_verified`
(re-verify every number's anchor against the cached document text: anchor precision), `evidence_urls_ok` (HEAD/GET
200 within 10 s), `schema_valid`, `contradictions_found`, `angle_chosen`.
Aggregates: `n_companies`, `kill_rate = killed / hypotheses_total`, `anchor_precision`, `median_runtime_s`,
`p90_runtime_s`, `share_with_discovery`, `label_counts`, `median_independent_origins`, `url_ok_rate`.

#### §5.14.3 Time-travel (`eval/timetravel.py`)
For each N50 company: run with `as_of = today − 365 days`. Take its falsification condition and its main prediction.
Evaluate with today's data whether the prediction held over the following four quarters (`held`, `broke`,
`untestable`). Also compute `lead_days` for every regulator event surfaced in any run (event date vs first mainstream
GDELT date vs company exchange disclosure date). Outputs `timetravel.csv`, plus aggregates `prediction_hold_rate`,
`median_lead_days`.

#### §5.14.4 Ablation (`eval/ablation.py`)
Run N50 with `disable_challenge=True`; count discoveries that the full system killed or downgraded:
`ablation_overturned = |{c : full.discovery != ablated.discovery or label differs}|`.

#### §5.14.5 Self-scored rubric (`eval/out/rubric.csv`)
The team (not the engine) scores each N50 discovery 1 to 5 on the nine finals criteria. It is labelled
"self-assessed" wherever it appears. Never present it as judge-validated.

#### §5.14.6 Hand-off to deck and docs
`next-signal-bits\model\collect_outputs.py` reads `engine/eval/out/summary.json`, `runs.csv`, `timetravel.csv`,
`companies.json`, and writes `model/model_outputs.json` (flat keys used by `{{EVAL:key}}` placeholders and deck
`V.*`) and `model/model_tables.md` (T1 metric registry table generated by importing `next_signal.metrics.library`;
T2 per-company results; T3 time-travel; T4 ablation; T5 source catalogue counts by origin). Print a SHA-1 of
`model_outputs.json` as the deck's `V.hash`.

### §5.15 Voice analyst (port from `ai-healthcare platform`; grounded on the report)

Copy (do not rewrite) these files from `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform\backend\app\`
into `engine\next_signal\voice\`: `voice/session.py`, `voice/sarvam_chat.py`, `voice/sarvam_stt.py`,
`voice/sarvam_tts_ws.py`, `voice/sarvam_tts.py`, `voice/turns.py`, `voice/segmenter.py`, `voice/speech.py`,
`voice/fillers.py`, `api/v1/voice_ws.py` (as `voice/ws.py`), `prompts/voice_prompt.py` (as `voice/prompt.py`),
`tools/schemas.py` + `tools/v2.py` (as `voice/tools.py`, then rewritten per below). Keep their behaviour: protocol 2
frames (`hello`, `audio`, `text`, `context`, `ptt`, `interrupt`, `bye`), streaming LLM with tool rounds (max 3),
sentence segmentation into TTS WebSocket, REST TTS fallback, barge-in rules, fillers. Keep `reasoning_effort: None`
(mandatory for latency, per all user projects).

Changes (each is a small, mechanical edit):
1. Imports: `from app.` → `from next_signal.voice.` / `next_signal.config`. Settings fields as in §5.4.
2. `VoiceSession` dataclass fields `district, forecast, recommendation, logistics, insights` → single `report_store`
   (callable `get_report(run_id) -> Report`). `hello` frame gains `runId`; `context` frame may switch `runId`.
3. `_context_message()` → `"Context: report for {company} ({symbol}), Track D, as of {as_of}, generated {finished_at} IST. Discovery strength: {label}."`
4. System prompt (`voice/prompt.py`), replace entirely with:

```
You are the voice analyst for Next Signal, a research tool that has just produced a report on one Indian listed
healthcare company. You speak with a judge or analyst who is reading the report.
Rules:
1. Every fact you state (numbers, dates, names, sources, statuses) must come from a tool result in this conversation.
   If no tool returned it, say you do not have it in the report.
2. Lead with the direct answer in one sentence. Add at most two supporting sentences.
3. When you state a number, name its source in plain words ("from the Q1 FY27 investor presentation").
4. Never give investment advice, price targets, or buy, sell or hold views. If asked, say the report does not make
   investment calls.
5. If asked why the agent believes something, describe the evidence and the strongest counterargument, then the
   falsification condition.
6. Spoken output only: no markdown, lists, emojis, brackets or dashes. Short sentences. Indian number words for
   lakh and crore.
```
5. Tools (`voice/tools.py`), OpenAI-dialect schemas, each returning `ToolResult(llm=..., card=...)`:
   `get_discovery()`, `get_why_it_matters()`, `get_numbers(name?: str)`, `get_evidence(claim_id?: str, publisher?: str)`,
   `get_timeline(from?: str, to?: str)`, `get_counterargument()`, `get_falsification()`, `get_strength()`,
   `get_killed_hypotheses()`, `get_method()` (stages, runtime, sources hit). Payloads truncated to 600 chars in history
   (keep existing rule).
6. `speech.py`: remove `resolve_facility`; add replacements `Q1 FY27` → "Q1 F Y 27", `₹` → "rupees", `cr` → "crore".
7. Greeting: "Hello. I can walk you through this report, its evidence, and what would prove it wrong. What would you
   like to know?" Hindi filler retained.
8. Post-check each final reply with `guards.stray_numbers` against the report; on failure, speak
   "I could not ground that answer in the report." and log.
9. Origin allow-list: `settings.web_origin` plus `http://localhost:3000`.
10. Copy the user's eval idea: `engine/next_signal/voice/eval_voice.py` with 10 scripted questions against a fixture
    report; assert no stray numbers and no investment words.

### §5.16 Engine tests and gates

| Gate | Command | Must show |
|---|---|---|
| G-P1 (data layer) | `engine\.venv\Scripts\python.exe -m pytest engine\tests -q -k "schemas or nse or metrics"` and `engine\.venv\Scripts\python.exe engine\scripts\run_one.py CIPLA --stages discover,connect` | tests pass; ≥ 40 documents listed, ≥ 15 parsed, ≥ 60 verified facts |
| G-P2 (pipeline) | `run_one.py DRREDDY` then `run_one.py APOLLOHOSP` | both finish < 540 s, `schema_valid`, ≥ 4 hypotheses, ≥ 1 killed, a discovery or an honest "none survived" |
| G-P3 (exports + voice) | `pytest -k "exports or guards"`; `python -m next_signal.voice.eval_voice` | PDF/MD/XLSX/ZIP produced and open; voice eval 10/10 grounded |
| G-MVP | `engine\.venv\Scripts\python.exe -m next_signal.eval.harness --set N50,TB` then `collect_outputs.py` | `summary.json` with 15 companies; anchor_precision ≥ 0.95; median runtime ≤ 420 s |
| No hard-coding | `pytest -k no_hardcoding` | test greps `engine/next_signal/**/*.py` for the 5 NIFTY healthcare symbols and their names (case-insensitive) and fails if any appear outside `tests/` and `eval/` |

### §5.17 Exports (`export/*`)

- `md.py`: Jinja2 `report.md.j2` with sections in the brief's order: The Discovery, Why It Matters, Evidence (table:
  #, claim, publisher, date, origin, grade, link), Timeline (table), Numbers (table with formula), Counterargument,
  Falsification Condition, Evidence Strength (breakdown table + reasoning bullets), then "How the agent got here"
  (angles considered, hypotheses killed with reasons, contradictions and rulings, run stats), Sources (numbered,
  clickable). Footer: "Research output for evaluation purposes. Not investment advice."
- `svg.py`: pure-Python SVG builders (no matplotlib): `timeline_svg(points)`, `bars_svg(numbers)`,
  `ach_heat_svg(matrix)`, `strength_bar_svg(breakdown)`, palette red/black/grey only.
- `html.py`: `report.html.j2`, A4 print CSS (fonts Inter + Instrument Serif via Google Fonts link, palette tokens of
  §6.2), embeds the SVGs, every claim has superscript links to evidence anchors, every evidence row links out.
- `pdf.py`: write HTML to `.cache/exports/<run>.html`, call Chrome:
  `[chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=15000", f"--print-to-pdf={out}", html_uri]`
  (same as `beyondtech-dcg/research/build_pdf.py`). Timeout 90 s.
- `xlsx.py` (openpyxl): sheets `Discovery`, `Why it matters`, `Evidence`, `Numbers`, `Timeline`, `Hypotheses`,
  `Tests`, `ACH`, `Contradictions`, `Sources`, `Metrics`, `Run log`; header row bold white on `C8102E`, freeze panes,
  autofilter, column widths by max length (cap 80), hyperlinks on URL cells, ACH sheet with conditional fill (red scale).
- `csvs.py`: one UTF-8-with-BOM CSV per table (BOM so Excel opens Indian rupee symbols correctly; pattern from
  `quiz-platform/apps/web/src/lib/export.ts`), zipped as `NextSignal_<SYMBOL>_<YYYYMMDD-HHMM>.zip`.
- File names: `NextSignal_<SYMBOL>_<YYYYMMDD-HHMM>.<ext>`.
- `tests/test_exports.py`: build each export from the fixture report; assert files exist, PDF > 20 KB and starts with
  `%PDF`, XLSX opens with openpyxl and has 12 sheets, MD contains all eight section headings, ZIP has 10 CSVs, no file
  contains U+2014/U+2013.

---

## §6 PHASE W: THE DASHBOARD (Next.js 16 + TypeScript, red/white/black)

### §6.0 Stack (matches the user's recent projects)

Next.js 16.3.x (App Router) · React 19.2 · TypeScript 5 · Tailwind CSS v4 (`@tailwindcss/postcss`, CSS-first
`@theme inline`, no tailwind.config) · shadcn/ui 4.x (as in `fintech` and `monitoring-agent`) · framer-motion 13 ·
gsap 3.15 · recharts 3.x (dashboard charts) + hand-built SVG for heatmaps, timelines and the evidence chain ·
swr · zustand 5 (run state) · zod 4 (validate API payloads) · lucide-react · sonner (toasts).

**Before writing any Next code**, read `apps/web/node_modules/next/dist/docs/` index and any `AGENTS.md` the scaffold
creates: the user's projects carry a standing warning that Next 16 has breaking changes. Record any API difference in
DECISIONS.md.

Scaffold (step W0):
```powershell
Set-Location "C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits\apps"
npx create-next-app@latest web --ts --app --tailwind --eslint --src-dir --import-alias "@/*" --use-npm --no-turbopack
Set-Location web
npm i framer-motion gsap recharts swr zustand zod lucide-react sonner clsx tailwind-merge class-variance-authority
npx shadcn@latest init -d
npx shadcn@latest add button badge card tabs sheet dialog tooltip table separator scroll-area command popover progress accordion skeleton toggle-group
```
If `--no-turbopack` is rejected by the installed create-next-app, drop the flag (record in DECISIONS.md).
`.env.local`: `NEXT_PUBLIC_API_BASE=http://localhost:8080`, `NEXT_PUBLIC_VOICE_WS_URL=ws://localhost:8080/ws/voice`.

### §6.1 Design direction: an editorial "case file" in red, white and black

Inspiration: `WEB-DEV-PROJECTS\iitd-hack\parakh-iitd-hack\web` (read `src/app/globals.css`, `layout.tsx`,
`components/sections/masthead.tsx`, `shortlist.tsx` (dossier drawer), `components/ui/reveal.tsx`,
`components/charts/chart-setup.ts`). Adopt its grammar: square corners, hairline rules, mono uppercase kickers
(`File 03 // EVIDENCE`), serif display headings, tabular numerals, a seal-red accent used sparingly, a right-side
dossier drawer. Change the palette from Parakh's warm paper to a stricter red/white/black.

Do not produce generic dashboard slop: no gradients, no glassmorphism, no purple, no rounded "pill cards with drop
shadows", no emoji, no stock illustrations, no lorem. Every chart has a title that states the finding and a source
line. Numbers are tabular mono.

### §6.2 Tokens (`src/app/globals.css`, verbatim start)

```css
@import "tailwindcss";
:root {
  --paper: #FFFFFF;   --paper-2: #F6F5F3;  --paper-3: #EDEBE7;
  --ink: #0B0B0C;     --ink-2: #3A3936;    --ink-3: #75716A;
  --rule: #E2DFD9;    --rule-strong: #C9C5BD;
  --signal: #C8102E;  --signal-deep: #7A0A1A; --signal-tint: #FBE3E6; --signal-2: #E23A50;
  --ok: #0B0B0C;      --warn: #A9781F;
  --font-serif: "Instrument Serif", Georgia, serif;
  --font-sans: "Inter Tight", -apple-system, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}
:root[data-theme="dark"] {
  --paper: #0B0B0C; --paper-2: #141414; --paper-3: #1C1C1C;
  --ink: #F4F2EE;   --ink-2: #C9C5BD;  --ink-3: #8C887F;
  --rule: #2A2826;  --rule-strong: #3A3836;
  --signal: #FF3B4F; --signal-deep: #C8102E; --signal-tint: #2A0F14; --signal-2: #FF6B7A;
}
@theme inline {
  --color-paper: var(--paper); --color-paper-2: var(--paper-2); --color-paper-3: var(--paper-3);
  --color-ink: var(--ink); --color-ink-2: var(--ink-2); --color-ink-3: var(--ink-3);
  --color-rule: var(--rule); --color-rule-strong: var(--rule-strong);
  --color-signal: var(--signal); --color-signal-deep: var(--signal-deep); --color-signal-tint: var(--signal-tint);
  --font-serif: var(--font-serif); --font-sans: var(--font-sans); --font-mono: var(--font-mono);
  --radius: 0px;
}
* { border-color: var(--rule); }
body { background: var(--paper); color: var(--ink); }
::selection { background: var(--signal); color: var(--paper); }
.font-tnum { font-variant-numeric: tabular-nums; }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
```
Fonts in `layout.tsx` via `next/font/google`: `Instrument_Serif` (400, normal+italic) → `--font-serif`,
`Inter_Tight` (400 to 700) → `--font-sans`, `JetBrains_Mono` (400 to 700) → `--font-mono` (identical to Parakh).
shadcn: set every component's radius to 0 (`--radius: 0px`), replace `primary` with `--signal`, `foreground` with
`--ink`.

Heat scale (shared by UI heatmaps, exports and deck): `#FFFFFF`, `#FBE3E6`, `#F19AA6`, `#D93A50`, `#8E0B1F`
(strength ↑) and for negative ACH cells the same reds; positive cells use ink greys `#EDEBE7`, `#75716A`, `#0B0B0C`.
Strength badge: Strong = ink fill/white text; Moderate = white fill/ink text/ink border; Weak = white fill/signal text/
signal dashed border.

### §6.3 Information architecture

| Route | Purpose | Key components |
|---|---|---|
| `/` | Masthead + "Investigate a company" console + Track D universe + recent runs + method strip | `Masthead`, `RunConsole`, `UniverseGrid`, `RecentRuns`, `MethodStrip` |
| `/run/[runId]` | Live run: stage rail Discover → Prove with timings, live source ticker, documents counter, hypotheses board (cards flip to killed/survived), contradictions feed, then "Open report" | `StageRail` (GSAP), `SourceTicker`, `HypothesisBoard`, `KillLog`, `TraceConsole` |
| `/report/[runId]` | The deliverable dashboard | `DiscoveryHero`, tabs `Overview`, `Evidence`, `Challenge`, `Market`, `Method`, `Export`; `EvidenceDrawer`; `VoiceDock` |
| `/eval` | Evaluation results (source for deck numbers) | `EvalTable`, `KillRateChart`, `RuntimeChart`, `TimeTravelTable` |
| `/about` | What the system is, what it is not, data sources and their grades, disclaimer | `SourceCatalogue` |

### §6.4 Report page, panel by panel (the judges will click through this)

1. **DiscoveryHero** (top, full width): kicker `FILE 01 // THE DISCOVERY`; company name + symbol + playbook chip +
   as-of date; the discovery sentence in Instrument Serif 40 to 48 px with each number underlined in signal red and
   clickable (opens EvidenceDrawer at that number's anchor); right column: strength badge + `StrengthBar` (stacked
   horizontal bar of independence/reliability/corroboration/survival/persistence/penalties with the 4 and 7 thresholds
   marked) + novelty meter (0 to 1, hairline gauge) + "independent origins: n" with origin icons (lucide icons:
   Building2 company, Landmark regulator, LineChart market, Newspaper press, Scale rating, Users peers, Globe SEC).
2. **Overview tab**: `WhyItMatters` (3 to 5 numbered items, each with claim chips); `NumbersGrid` (cards: label,
   display value in mono 32 px, period, formula on hover via Tooltip, input facts on click); `TimelineChart` (custom
   SVG: horizontal time axis, swimlanes Regulator / Company filing / Management said / Market / Press; dots per event,
   change-point vertical dashed signal line labelled "Change emerges: Q3 FY26" placed ON the plot, metric line overlaid
   in the top lane; brush to zoom; lead-time bracket between first external record and first press item, labelled with
   days).
3. **Evidence tab**: `EvidenceChain` (the brief's own chain drawn as linked nodes: Finding → Annual Report → Quarterly
   Results → Exchange Filing → Industry Source → Competitor Evidence, each node shows count and grades; empty nodes are
   shown as hollow with "not used" so absence is visible); `EvidenceTable` (sortable: claim, publisher, origin, grade
   A to F, published date, supports/contradicts, link; filter chips by origin class); `IndependenceMatrix` (heatmap:
   claims × origin classes, cell = count, reds).
4. **Challenge tab**: `ACHMatrix` (heatmap: evidence rows × hypothesis columns, cell glyph CC/C/N/I/II with red/grey
   scale, column footer = inconsistency score, chosen hypothesis column outlined ink 2 px, counterargument column
   outlined signal dashed); `TestBattery` (T1 to T9 rows × surviving hypotheses, pass/fail/not applicable cells, click
   for detail); `KillLog` (killed hypotheses with reason and the test that killed them); `Counterargument` card;
   `FalsificationCard` (statement, metric, comparator, threshold, next check date with a countdown, check source);
   `Contradictions` list with rulings (aggregator vs primary examples visible here).
5. **Market tab**: `PriceChart` (recharts ComposedChart: close line, NIFTY 50 rebased line, event markers as
   ReferenceLine with labels: results dates, regulator events, first press), `EventStudyTable` (event, date, CAR[−1,+1],
   CAR[−5,+5], t-stat, data source), data-source badge showing which link of the prices chain answered (NSE MCP /
   Angel One / Upstox / NSE archive).
6. **Method tab**: `AnglesConsidered` (table with scores and reasons; chosen angles highlighted), `StagePerf`
   (bar chart of stage durations), `SourcesHit` (counts by host), `LLMCalls` (purpose, provider, ms), `TraceReplay`
   (scrubbable list of run events).
7. **Export tab**: four large buttons (PDF report, Markdown, Excel workbook, CSV bundle) + per-table CSV links; each
   button shows file size after first download; toast on completion.
8. **EvidenceDrawer** (shadcn Sheet, right, `max-w-xl`): document title, publisher, origin class and Admiralty grade
   with a one-line definition, published date, page number, the verbatim quote with the number highlighted, "Open
   source" external link (opens the PDF URL with `#page=N` appended for PDFs), "Other evidence for this claim" list.
9. **VoiceDock** (bottom-right): orb button from the ported voice UI; transcript panel; FactCards rendered from tool
   results; label "Answers only from this report".

### §6.5 Live run page behaviour
- `useRunEvents(runId)` hook: `EventSource(${API}/api/runs/${id}/events)`; reducer into zustand store; reconnect with
  last seq on drop; close on `done`/`error`.
- `StageRail`: six stations named Discover, Connect, Calculate, Reason, Challenge, Prove; GSAP timeline fills the rail
  as `stage end` events arrive; elapsed time per stage in mono.
- `SourceTicker`: last 12 `source_fetch` events (host, status, ms, cached tag), counters for documents and verified
  facts.
- `HypothesisBoard`: cards appear on `hypothesis`; test chips light up on `test`; a card gets a signal-red diagonal
  stamp "KILLED: <reason>" on `kill`, ink stamp "SURVIVED" at the end; framer-motion layout animations.
- On `discovery`, show the sentence and a primary button "Open report"; auto-navigate after 4 s unless hovered.

### §6.6 Home page copy (use this wording; it follows the style contract)

- Kicker: `ATMOS 2026 // FINDING THE NEXT SIGNAL // TRACK D`
- H1 (serif): "Next Signal reads the filings, checks the regulators, and tries to prove itself wrong."
- Lede: "Give it any listed pharma or healthcare company. It collects public evidence from the exchanges, the USFDA,
  peers and the market, computes what changed and when, tests every hypothesis against its strongest alternative, and
  reports only what survives, with a link behind every number."
- Console placeholder: "Company name or NSE symbol, for example CIPLA"; checkbox "Run as of an earlier date" with a
  date input (time-travel mode); button "Investigate".
- Universe grid heading: "NIFTY 50 Track D companies" and "Tie-break universe: Nifty Pharma and Nifty Healthcare".
- Method strip: six columns, one per stage, one plain sentence each (from research §11).
- Footer: "Public data only. Research output for evaluation purposes. Not investment advice. Team IdeaForge, ATMOS 2026."

### §6.7 Motion rules
- Framer: `Reveal` (opacity 0→1, y 8→0, 0.4 s, ease [0.22,1,0.36,1], once) copied from Parakh `reveal.tsx`; layout
  animations on HypothesisBoard; drawer slide.
- GSAP: StageRail progress, masthead signal hairline (scaleX 0→1), number count-up on NumbersGrid first view
  (respect reduced motion).
- No parallax, no scroll-jacking, no looping decorative animation.

### §6.8 Voice frontend (port from ai-healthcare `frontend/src/`)
Copy: `public/worklets/pcm-recorder.js`; `lib/voice/{capture.ts, protocol.ts, client.ts, VoiceSessionProvider.tsx}`;
`lib/audio/{b64.ts, mic.ts, levels.ts, playback.ts}`; `components/voice/{VoiceButton.tsx, VoiceDock.tsx,
ConversationPanel.tsx, FactCard.tsx, useAsk.ts, useVoiceHotkeys.ts, voice-copy.ts}`; `components/orb/*` (keep the CSS
fallback; the WebGL orb is optional, include it only if `three`, `@react-three/fiber`, `@react-three/drei` install
cleanly). Edits: `hello` sends `runId`; replace `FactCard` union with `discovery | number | evidence | timeline |
falsification | strength` cards; replace district scope with report scope; restyle orb/stage tokens to
`--ink`/`--signal`; copy strings rewritten in plain register.

### §6.9 Frontend quality gates (G-W)

| Check | How |
|---|---|
| Typecheck and lint | `npm run build` (must succeed with zero type errors) and `npm run lint` |
| Copy lint | `node scripts/copy-lint.mjs`: scans `src/**/*.{tsx,ts}` string literals and JSX text for U+2014, U+2013, `!` in UI copy, and the banned list of §0.5; prints `copy hits: []` |
| No placeholder | grep `src` for `lorem|TODO|TBD|xyz|placeholder text` (case-insensitive) → none in UI strings |
| Screenshots | with engine + web running, open `/`, `/run/<id>`, `/report/<id>` (each tab), `/eval` at 1440×900 and 390×844 using the claude-in-chrome tools (or Chrome headless `--screenshot`), save to `apps/web/qa-shots/`, inspect each: no overflow, no clipped text, red used as accent only |
| Accessibility basics | every interactive element keyboard reachable; colour contrast of `--ink-3` on `--paper` ≥ 4.5:1 for body text (use `--ink-2` for body if not) |
| Click-through | on a real report, click 5 random numbers: each opens a drawer whose quote contains the number and whose link opens the source |

### §6.10 Prototype build sequence (engine + web), lanes with disjoint files

At most 3 agents at once. Each task ends with its "Done when" check pasted into build-log.

| Task | Lane | Files (owned exclusively) | Depends on | Done when |
|---|---|---|---|---|
| P-setup | E0 | repo root, `engine/requirements.txt`, `engine/scripts/import_keys.py`, `.gitignore`, `.env.example` | none | venv installs; `import_keys.py` prints all keys present except SEC_USER_AGENT |
| P0 spikes S01 to S09 | E0 | `engine/spikes/s01..s09*`, `SPIKES.md` | P-setup | SPIKES.md rows for S01 to S09 |
| P0 spikes S10 to S16 | E1 | `engine/spikes/s10..s16*` | P-setup | SPIKES.md rows for S10 to S16 |
| P1a config/http/store/events/schemas | E1 | `config.py`, `http.py`, `store.py`, `events.py`, `schemas.py`, `tests/test_schemas.py` | P0 | pytest schemas pass |
| P1b sources | E0 | `sources/**`, `universe.py`, `tests/test_nse_parsers.py`, `tests/fixtures/nse_*.json` (copied from spike samples) | P1a | parsers tests pass on fixtures; live smoke `run_one.py CIPLA --stages discover` lists ≥ 40 documents |
| P1c docs | E2 | `docs/**` | P1a | BM25 finds geography page in the S15 annual report; anchors verify test passes |
| P2a metrics | E1 | `metrics/**`, `tests/test_metrics.py` | P1a | 44 metrics registered; unit tests on synthetic data (receivable days, change-point on a step series returns the step index, event study on synthetic returns) |
| P2b LLM + guards + prompts | E2 | `llm/**`, `tests/test_guards.py` | P1a, S10 | Sarvam json_schema call returns validated object; stray_numbers test cases pass; fallback to Gemini simulated with respx 429 |
| P2c playbooks + discover + connect | E0 | `playbooks/**`, `pipeline/resolve.py`, `discover.py`, `connect.py` | P1b, P1c, P2b | `run_one.py CIPLA --stages discover,connect` ≥ 60 verified facts |
| P2d calculate + reason + challenge + prove + grading | E1 | `pipeline/calculate.py`, `reason.py`, `challenge.py`, `prove.py`, `run.py`, `grading/**`, `tests/test_strength.py`, `tests/test_ach.py` | P2a, P2b, P2c | G-P2 |
| P2e API | E2 | `main.py` | P2d | `/api/health` ok; POST run → SSE events stream; report JSON valid |
| W0 scaffold + tokens + layout + home | W | `apps/web/**` (all) | none (can start with fixture JSON from `tests/fixtures/report_min.json`) | `npm run build` passes; home renders universe from `/api/universe` |
| W1 run page | W | `apps/web/src/app/run/**`, `components/run/**`, `lib/sse.ts`, `store/run.ts` | W0, P2e | live run animates through six stages |
| W2 report dashboard | W | `apps/web/src/app/report/**`, `components/report/**`, `components/charts/**` | W1 | all six tabs render a real report; click-through check passes |
| P3a exports | E0 | `export/**`, `tests/test_exports.py` | P2d | export tests pass; buttons in W2 download files |
| P3b voice | E2 | `voice/**`, web `lib/voice/**`, `components/voice/**`, `components/orb/**`, `public/worklets/**` | P2e, W2 | voice eval 10/10; manual: ask "what is the falsification condition" and hear the grounded answer |
| P4 eval | E1 | `eval/**`, `next-signal-bits/model/collect_outputs.py` | P2d | G-MVP |
| W3 eval page + about page | W | `apps/web/src/app/eval/**`, `about/**` | P4 | renders summary.json |
| P5 hardening | E0/E1 | any engine file, via small PRs logged in build-log | G-MVP | 5 consecutive random tie-break runs finish < 540 s without exceptions |
| W4 polish + copy lint + screenshots | W | `apps/web/**` | W3 | G-W |

Engine run commands for developers (put in README):
```
engine\.venv\Scripts\python.exe -m uvicorn next_signal.main:app --port 8080 --app-dir engine --reload
cd apps\web ; npm run dev
engine\.venv\Scripts\python.exe engine\scripts\run_one.py CIPLA
engine\.venv\Scripts\python.exe -m next_signal.eval.harness --set N50,TB
```

### §6.11 Prompt library (files under `engine/next_signal/llm/prompts/`, each with a header comment of purpose,
inputs, output schema name)

| File | Purpose | Model / effort | Output schema |
|---|---|---|---|
| `extract.md` | quote-anchored metric extraction from candidate pages | sarvam-105b / low | `list[ExtractedFact]` |
| `narrative.md` | management claims with polarity | sarvam-105b / low | `list[NarrativeClaim]` |
| `hypothesise.md` | ≤ 6 hypotheses with predictions and disconfirmers | sarvam-105b / medium | `list[Hypothesis]` |
| `disconfirm_queries.md` | 3 counter-evidence queries per hypothesis | sarvam-105b / low | `list[str]` |
| `classify_evidence.md` | supports / contradicts / irrelevant with verbatim quote | sarvam-105b / low | `list[EvidenceJudgement]` |
| `ach_text_cells.md` | CC/C/N/I/II for text evidence vs each hypothesis | sarvam-105b / low | `list[ACHCell]` |
| `write_discovery.md` | the eight-element write-up from structured inputs | sarvam-105b / medium | `DiscoveryText` |

Common header for every prompt: "Use only the data provided. Never compute new numbers; copy numbers exactly as given.
Never give investment advice. Plain English, no dashes, no exclamation marks, no rhetorical questions."
Each call logs `{purpose, provider, model, ms, prompt_tokens, completion_tokens}` to the run trace.

---

## §7 PHASE D: THE FIGMA SLIDES DECK (8 slides, native vectors, EY density)

### §7.0 Entry gate and doctrine

Start only after G-R (research complete) and G-MVP (`model/model_outputs.json` exists). The deck derives from the
research document and the eval outputs; it never introduces a number that is not in `model_outputs.json` or a cited
research section. Doctrine: `nsut-innovators-court\CLAUDE.md` §1 to §7 (zero dead space, bands and rails on the 2 to 3
densest slides, section-scoped ribbon, 4 to 5 type levels, charts paired with tables, in-chart annotations, sources
bottom-right on every content slide, cornerRadius 0, ink outlines, layered sticker cards, 22 pt floor, Poppins +
Inter). Density bar from memory: 4 to 6 distinct visual forms per content slide, 140 to 360 nodes per slide, ≥ 4
named panels.

Visual models (study screenshots via `get_screenshot` before building; read-only):
- Cover mind map: BeyondTech `cpcsN7ytWMJputcohXOMgz` slide `2:2` (hub circle 172 px, four 290×72 nodes, logo slots
  beside nodes, dashed bus to crests) and Dream11 `YoiazGGOribfg69EjEDIlP` slide `2:2` (red dashed "gap" connectors to a
  result card). Do NOT copy the Satoshi Gate cover (plain "case in five numbers" text card; the user disliked it).
- Hackathon architecture and honesty tags: SwasthyaGrid `APbOstO4SSU7iAjYIgEeSd` slides `2:7` (closed-loop step row),
  `2:10` (layer rails with status-coloured chips + LIVE/WIRED/PILOT legend and count bar), `2:11` (hub-and-spoke).
- Density and chart forms: prime inspo `hOJVMGv9nIhDmayTT7DmOt` (waterfall, heatmaps, football field, decision tree,
  risk heatmap, Gantt), NEXORA startup deck `e5VEexsLMhDampx7gvhFmM` (avoid its defects: off-canvas duplicate,
  headline colliding with a banner, clipped bar text).

Palette is red/white/black to match the product. Honesty tags: **LIVE** (runs in the prototype today), **WIRED** (code
exists, off or partial in the demo), **PLANNED** (not built). Every component on S3 carries one; the counts come from
the code audit in step D0.

### §7.1 Tooling (step D1): reuse the BeyondTech generator, patched

Copy from `nsut-innovators-court\beyondtech-dcg\deck\` into `nsut-innovators-court\next-signal-bits\deck\`:
`gen.py`, `_palette.js`, `_extras.js`, `_x2.js`, `_v1.js`, `_sweeps.js`, `setup.js`, `metrics.json`, `preview.py`.
The generator reads the shared library `verdict-mnc\deck\preamble.js` and mock `verdict-mnc\deck\mock_figma.js`
read-only (keep `LIB` and `MOCKSRC` paths as they are).

Patches (each with `assert src.count(old)==1` in a small `deck/patch_tooling.py` so it is repeatable):

| File | Change |
|---|---|
| `gen.py` | header comment `BEYONDTECH` → `NEXT SIGNAL`; `NS = 11` → `NS = 8`; `X2 = (2, 3, 5)` → `X2 = (1, 2, 3, 4, 5, 6, 7, 8)` (real glyph metrics for every slide); `BT / "model" / "model_outputs.json"` stays (BT is now `next-signal-bits`) |
| `setup.js` | `11` → `8` (three places); names → `["01 Cover","02 Answer","03 Architecture","04 Workflow","05 Falsification","06 Proof and Plan","07 Appendix","08 Thank You"]`; guard `< 14` → `< 10` |
| `_palette.js` | replace whole file with §7.2 block |
| `_extras.js` | `RIBN` → `["ANSWER","ARCHITECTURE","WORKFLOW","FALSIFICATION","PROOF AND PLAN"]`; `RIBAP` → `["A1 METRICS","A2 RUBRIC","A3 SOURCES","A4 RISKS"]`; `coverTop` rewritten (§7.4 S1); markers `BEYONDTECH DECK EXTRAS` → `NEXT SIGNAL DECK EXTRAS`; append the new helpers of §7.3 |
| `_sweeps.js` | extend `BAN` with `"imagine","what if","dive","groundbreaking","state-of-the-art","plethora","myriad","underscore","showcase","foster","bolster","spearhead","nuanced","intricate","meticulous","buy rating","sell rating","target price","price target","undervalued","overvalued"` (use word-boundary-safe checks: replace the `low.includes(b)` test with a regex `new RegExp("\\b"+b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b","i")`); set `ABSENT` to `["BeyondTech","DTU Plan","Dream11","FanCode","Paytm","Liminal","Satoshi","Setu","PRAMAAN","Maudrik","SwasthyaGrid","NEXORA","HarvestBox","Perennial","Verdict","TODO","TBD","Lorem","Insert","xyz","undefined","NaN","null","Rs "]`; rename the moneyshot node check to `"CARD: MONEYSHOT"` (unchanged) |
| `_v1.js` | unchanged |

`deck/make_values.py` (new, written by D1; `gen.py pre` execs it and calls `build(O)` with `O = model_outputs.json`):
must return a dict with **exactly** the keys used by the slide files (gen.py asserts unknown `V.` keys). Required keys:

```
team: {name: "TEAM IDEAFORGE", rows: [["Harsh Kawatra","Delhi Technological University","Team Leader"],
                                       ["","Delhi Technological University","Member"],
                                       ["Gursimran Kaur","Guru Gobind Singh Indraprastha University","Member"]]}
hash                      sha1[:10] of model_outputs.json
n_companies, n_n50, n_tb  ints
hyp_total, killed_total   ints
kill_rate                 "NN%" string, from summary (no rounding beyond integer percent)
anchor_precision          "NN.N%" string
median_runtime            "N min SS s" string
p90_runtime               same format
med_origins               int
company_share             "NN%" share of evidence items in surviving discoveries whose origin is company_filing/company_ir
origin_mix                [{label, v}] counts of evidence items by origin class across surviving discoveries (for segBar)
n_sources                 int, rows in source_catalogue.csv
n_metrics                 int, metric registry size
status_counts             {live, wired, planned} from the D0 audit
components                [{layer, name, status}] from the D0 audit (≈ 24 rows)
stage_secs                [{stage, s}] median per stage across eval runs
demo                      featured run block: {symbol, company, playbook, sentence, label, strength_total, breakdown{...},
                          origins, hyps, killed, lead_days, changepoint_label, numbers[{label, display, period}],
                          why[3..5], counter, falsification, timeline[{date, lane, label, cp}], ach{rows, cols, cells},
                          tests{rows: T1..T9, cols, cells}, funnel[{label, v}], contradictions[{type, claim, a, b, ruling}],
                          independence{rows, cols, cells}, stage_ms[{stage, ms}], docs, facts}
eval_rows                 [[company, playbook, angle, label, strength, origins, "k/h", runtime]] for all eval companies
ablation_overturned       int
tt_hold_rate              "NN%" (time-travel prediction hold rate) or "n/a" if untestable for all
median_lead_days          int or "n/a"
metrics_rows              12 rows [[id, formula_text]] for appendix A1
rubric_rows               rows for A2 (component, range, rule)
sources_rows              10 rows for A3 [[name, origin, grade, access, point-in-time field]]
risks                     6 rows [[risk, P, I, control]] and the 3x3 cell counts for A4
gantt                     rows for the build plan (task, start_day, end_day, status)
must                      list of strings that must appear in the deck (see §7.6)
```
Featured run rule (deterministic): among N50 runs with label Strong or Moderate, the highest `strength_total`; ties →
shortest runtime. If none, the highest-strength TB run, and S4/S5 say "tie-break company" in the chip.

### §7.2 Palette (`deck/_palette.js`, exact)

```js
const C = {
  primary:{r:0.784,g:0.063,b:0.180}, primaryDeep:{r:0.043,g:0.043,b:0.047},
  accent:{r:0.914,g:0.902,b:0.882}, alert:{r:0.557,g:0.043,b:0.122},
  tint:{r:0.984,g:0.890,b:0.902}, alertTint:{r:0.969,g:0.788,b:0.812},
  blue:{r:0.227,g:0.224,b:0.212}, blueDeep:{r:0.043,g:0.043,b:0.047}, blueTint:{r:0.929,g:0.922,b:0.906},
  good:{r:0.043,g:0.043,b:0.047}, goodTint:{r:0.929,g:0.922,b:0.906}, accentTint:{r:0.965,g:0.961,b:0.953},
  ink:{r:0.043,g:0.043,b:0.047}, surface:{r:0.929,g:0.922,b:0.906},
  surfaceAlt:{r:0.965,g:0.961,b:0.953}, white:{r:1,g:1,b:1}
};
const HG=[null,{r:1,g:0.961,b:0.965},{r:0.984,g:0.835,b:0.855},{r:0.945,g:0.604,b:0.651},{r:0.851,g:0.227,b:0.314},{r:0.557,g:0.043,b:0.122}];
```
Meaning: primary = signal red `#C8102E` (chips, KPI numerals, highlights); primaryDeep = ink black (active ribbon tag,
hub circle, dark cards); accent = warm grey `#E9E6E1` (back cards, inactive ribbon tags); alert = deep red `#8E0B1F`
(moneyshot, kill stamps); tint = rose `#FBE3E6` (quiet fills, table headers). For emphasis cards pass
`back = C.primary` to `layered()` (red offset sticker).

### §7.3 New helpers (append to `_extras.js`; mock-test them in D1)

```js
// Honesty tag: LIVE black/white, WIRED rose/ink, PLANNED white/red with red dashed border.
function tag(p,x,y,status){ const S={LIVE:[C.ink,C.white,C.ink],WIRED:[C.tint,C.ink,C.ink],PLANNED:[C.white,C.primary,C.primary]}[status];
  const w=status==="PLANNED"?132:100; const f=addFrame(p,x,y,w,34,S[0],S[2],1.5,"TAG: "+status);
  if(status==="PLANNED"){ try{ f.dashPattern=[6,4]; }catch(e){} }
  addText(f,"Poppins","Bold",22,S[1],status,0,0,w,34,"CENTER","CENTER"); return w; }
// Heat cell grid with glyph text, used for ACH, test battery and independence matrices.
function heatGrid(p,x,y,rowLabels,colLabels,cells,o){ o=o||{}; const lw=o.labelW||260, cw=o.cellW||110, rh=o.rowH||42, hh=o.headH||48;
  const f=addFrame(p,x,y,lw+cw*colLabels.length,hh+rh*rowLabels.length,C.white,C.ink,2,o.name||"TABLE: heat");
  colLabels.forEach((c,j)=>{ const hc=addFrame(f,lw+j*cw,0,cw,hh,C.tint,C.ink,1.5,"H"); addText(hc,"Poppins","Bold",22,C.ink,c,4,0,cw-8,hh,"CENTER","CENTER"); });
  rowLabels.forEach((r,i)=>{ const rc=addFrame(f,0,hh+i*rh,lw,rh,i%2?C.surfaceAlt:C.white,C.ink,1.5,"R"); addText(rc,"Inter","Bold",22,C.ink,r,12,0,lw-20,rh,"LEFT","CENTER");
    cells[i].forEach((c,j)=>{ const cc=addFrame(f,lw+j*cw,hh+i*rh,cw,rh,c.f||C.white,C.ink,1.5,"C"); addText(cc,"Poppins","Bold",22,c.tc||C.ink,c.t||"",2,0,cw-4,rh,"CENTER","CENTER"); }); });
  return f; }
// Swimlane timeline: lanes [{name}], events [{lane, t (0..1), label, cp}], change-point drawn ON the plot.
function swimlane(p,x,y,w,h,lanes,events,o){ o=o||{}; const lw=o.labelW||210, lh=h/lanes.length, L=x+lw, W=w-lw;
  lanes.forEach((ln,i)=>{ addRect(p,x,y+i*lh,w,lh,i%2?C.surfaceAlt:C.white,C.ink,1.5); TL(p,x+10,y+i*lh+lh/2-16,22,ln,{family:"Inter",style:"Bold"}); });
  (o.ticks||[]).forEach(tk=>{ const tx=L+tk.t*W; addRect(p,tx,y,1.5,h,C.surface); TL(p,tx-30,y+h+6,22,tk.label,{family:"Inter",style:"Bold"}); });
  events.forEach(ev=>{ const cx=L+ev.t*W, cy=y+ev.lane*lh+lh/2; addEllipse(p,cx-9,cy-9,18,18,ev.cp?C.primary:C.ink,C.ink,2);
    if(ev.label){ const t=TL(p,cx+12,cy-30,22,ev.label,{family:"Inter",style:"Bold",maxW:o.labelMax||260,min:22}); t.name="EVLABEL"; } });
  if(o.cp!==undefined){ const cx=L+o.cp*W; dashedV(p,cx,y-8,h+16,C.primary,3); const c=addChip(p,cx+8,y-48,o.cpW||330,40,o.cpLabel,C.primary,C.white,22); c.name="CP LABEL"; } }
// Browser-frame mockup (native UI mockup per slide-archetypes "Native UI mockups"), returns inner frame.
function browser(p,x,y,w,h,url){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2,"PANEL: browser");
  addRect(f,0,0,w,40,C.surface,C.ink,1.5); [16,40,64].forEach(cx=>addEllipse(f,cx,13,14,14,C.white,C.ink,1.5));
  const u=addFrame(f,90,7,w-110,26,C.white,C.ink,1.5,"URL"); addText(u,"Inter","Semi Bold",16,C.ink,url,8,0,w-130,26,"LEFT","CENTER"); u.name="IMG: url";
  return addFrame(f,0,40,w,h-40,C.white,null,0,"VIEW"); }
```
(The URL bar text is 16 pt; the frame is named `IMG: url` so the font sweep exempts it as UI chrome. Every other text in
a mockup stays ≥ 22 pt, per the archetype rule.)

### §7.4 Slide-by-slide specification

Global skeleton for content slides S2 to S6: `skelBT(s, activeIndex, "0N / 05", CHIP, chipW, HEADLINE, SOURCE)`
(ribbon y 40 to 100, chip and counter at y 118, headline 40 pt at y 188, max 2 lines (≤ 112 px), content zone y 312 to
1030, source line y 1046). Every panel/card/table is named with a `PANEL:`, `CARD:`, `KPI:` or `TABLE:` prefix so V1
can check overlaps. Gutters 24 px. Headlines are action titles with V values; keep ≤ 150 characters after
substitution (the skeleton shrinks font to 34 pt if needed; if still 3 lines, shorten using the ladder in §7.7).

**S1 Cover** (`slides/s01.js`; model on BeyondTech `s01.js`, read it first)
- `coverTop(s)`: chip `ATMOS 2026 · BITS PILANI HYDERABAD` (560×56 at 64,48, red); logo slots at y 40, h 72:
  `ATMOS` (170 wide, x 656), `BITS Pilani` (72, x 842), `Wall Street Club` (120, x 930), `Economics Association`
  (120, x 1066); team chip `TEAM IDEAFORGE` (300×56 at 1556,48, black); rule at y 140 with five station circles.
- Left column (x 64, w 1100): title line 1 `FINDING THE` (80 pt ExtraBold ink), line 2 `NEXT SIGNAL` (80 pt ExtraBold
  red), subtitle (26 pt Poppins Bold black) `An autonomous research agent for Track D: Pharma and Healthcare`;
  verdict card `layered(s,64,460,1100,236,C.primaryDeep,"CARD: verdict",C.primary)` with line 1 (26 pt Poppins Bold,
  white) `OUR ANSWER: COMPUTE FIRST, LOOK OUTSIDE THE COMPANY, AND TRY TO KILL EVERY HYPOTHESIS BEFORE REPORTING IT.`
  and line 2 (22 pt Inter, white) `Next Signal reads exchange filings, USFDA records, peers and market data, computes
  what changed and when, tests each idea against its strongest rival, and reports only what survives, with a verbatim
  source behind every number.`; team label `V.team.name` (28 pt red) at y 716; `teamBT(s,64,764,[300,520,280])`;
  line at y 944 `Prepared for Finding the Next Signal, ATMOS 2026, organised by The Wall Street Club and The Economics
  Association, BITS Pilani Hyderabad Campus` (22 pt Inter Bold, black). No KPI row (memory rule).
- Right panel `panel(s,1200,160,656,836,"ONE COMPANY, FOUR KINDS OF EVIDENCE",{fill:C.tint,layered:true})`:
  - sub-caption (22 pt Inter Bold): `A discovery has to survive evidence from outside the company, not just inside it.`
  - Hub: black circle 172 at panel-local (242,318) → centre (328,404); text `NEXT SIGNAL` (22 pt white) and
    `Track D` (22 pt red).
  - Four nodes `node2` 290×72 at (16,128) `THE COMPANY` / `filings, calls, reports`; (350,128) `THE REGULATORS` /
    `USFDA, Orange Book, CDSCO`; (16,532) `THE MARKET` / `prices and reactions`; (350,532) `PEERS AND PRESS` /
    `ratings, rivals, news` (fill C.accentTint). Solid diagonal wires hub → node corners (as BeyondTech).
  - Logo slots beside nodes (y 210 and y 614 rows): COMPANY: `NSE` (90×60), `BSE` (90×60); REGULATORS: `USFDA` (110×60);
    MARKET: `Upstox` (110×60), `Angel One` (110×60); PEERS AND PRESS: `CRISIL` (90×60), `ICRA` (66×60), `CARE` (66×60).
  - BeyondTech-style bus: dashed vertical from hub
    bottom to y 684, dashed horizontal bus x 60 to 596 at y 684, five drop ticks at x 60, 194, 328, 462, 596 to five
    company crests `logoSlot(pm,x-62,696,124,50,<name>)` for `Sun Pharma`, `Cipla`, `Dr. Reddy's`, `Apollo`,
    `Max Healthcare`, each with a label under it (22 pt Inter Bold) `PHARMA` or `HOSPITAL` (from V or literal, these
    are the NIFTY 50 Track D names and their playbooks: allowed in the deck, never in engine code).
  - `fine(pm,16,810,624,"Logos mark data sources and the companies in Track D; no partnership is implied.")`
- Bottom rule y 1012; `srcLine(s,"Source: ATMOS 2026 participant brief | NIFTY 50 constituents, NSE Indices, Sep 2026 | Team IdeaForge research and engine "+V.hash)`.

**S2 Answer** (ribbon active 0; chip `EXECUTIVE SUMMARY` 380; counter `01 / 05`)
- Headline: `Summaries repeat the company; Next Signal computes the gaps, checks outside sources and killed ${V.kill_rate} of its own hypotheses before reporting one`
- Band A y 312 to 384: full-width `callout` (fill tint) lead `THE BRIEF:` text `given any NIFTY 50 Track D company, live, with no company-specific tuning, find a non-obvious, evidence-backed discovery and show what would prove it wrong.`
- Band B y 400 to 772, three columns:
  - Left `panel(s,64,400,600,372,"THE OBVIOUS BUILD: A SUMMARISER")` with red header bar; `badgeList` of 3 reasons
    (§2.2, each ≤ 2 lines at 22 pt): `Restates management's emphasis; the brief's worked example lives in calculated gaps` /
    `Reads one company's PDFs; the company is the least independent source about itself` /
    `Confirms its first idea; nothing stops a sector-wide or hallucinated "insight"`; a strike-through ink rule
    across the panel title.
  - Centre seed `panel(s,688,400,544,372,"WHERE THE EVIDENCE CAME FROM")`: `segBar` of `V.origin_mix` (company,
    regulator, market, peers, ratings, press, aggregator) 500×56 with legend (`lg`) in two columns; `kv` big number
    `${V.company_share}` (48 pt red) with label `of the evidence behind our discoveries came from the company itself`.
    This is the foreshadowing seed (§2.5).
  - Right `layered(s,1256,400,600,372,C.primaryDeep,"CARD: our build",C.primary)` title (24 pt Poppins Bold red)
    `OUR BUILD: COMPUTE, LOOK OUTSIDE, TRY TO KILL`; 3 numbered reasons (white, 22 pt) from §2.3.
- Band C y 788 to 1030:
  - Left `panel(s,64,788,1168,242,"THE BRIEF'S EIGHT OUTPUTS, AND WHERE EACH IS BUILT")`: a 4×2 grid of mini-cells
    (each 280×84): element name (22 pt Poppins Bold) + where (22 pt Inter): `The Discovery / one sentence, ≤ 45 words`,
    `Why It Matters / 3 to 5 bullets`, `Evidence / ≥ 3 independent origins`, `Timeline / change-point dated`,
    `Numbers / formula + anchor`, `Counterargument / strongest ACH rival`, `Falsification / metric, threshold, date`,
    `Strength / scored 0 to 10`.
  - Right `layered(s,1256,788,600,242,C.primaryDeep,"CARD: conclusively",C.alert)`: chip-style label `CONCLUSIVELY`
    (red) + text (white 22 pt): `A summariser cannot pass the brief's own worked example: its price and volume split and
    its receivable days are calculations, and its counterargument comes from competitors' filings.`
- Source: `Source: ATMOS 2026 brief (worked example, judging criteria) | Next Signal evaluation on ${V.n_companies} companies, run ${V.hash}`
- Forms: callout, 3-reason list, segmented bar + legend, KPI numeral, grid, synthesis card (6 forms).

**S3 Architecture** (ribbon 1; chip `ARCHITECTURE` 340; counter `02 / 05`). Densest slide #1: use rails.
- Headline: `${V.n_sources} public sources feed six stages named after the brief's own verbs; the core computes every number and the LLM only explains`
- Left zone x 64 to 1250, y 312 to 1030, five horizontal bands, each with a black `rail` (40 px) and label chip:
  1. `SOURCES` y 312 to 452: four origin groups as sub-panels with logo slots and honesty tags:
     Company (`NSE`, `BSE` logos; text `announcements, results, XBRL, transcripts, annual reports`);
     Regulators (`USFDA` logo; `openFDA approvals and recalls, warning letters, import alert 66-40, Orange Book`);
     Market (`NSE MCP` text chip, `Angel One`, `Upstox` logos; `daily prices, event windows`);
     Third party (`CRISIL`, `ICRA`, `CARE` logos; `rating rationales, GDELT news timestamps, peers`). Tag each group from
     `V.components`.
  2. `STAGES` y 468 to 640: punch-hole + wire strip (slide-archetypes "Punch-hole + wire strip") of six step cards
     190×150: `DISCOVER / picks angles by data, anomaly, novelty`, `CONNECT / quote-anchored facts, origins graded`,
     `CALCULATE / 44 formulas, peer z, change-points`, `REASON / hypotheses as predictions`, `CHALLENGE / 9 tests + ACH`,
     `PROVE / 8 outputs, strength 0 to 10`; CHALLENGE card filled red with white text (the differentiator), the rest
     white; each card carries its tag.
  3. `MODELS` y 656 to 760: chips `sarvam-105b (research, JSON schema)`, `sarvam-105b-conversations (voice)`,
     `saaras:v3 (speech in)`, `bulbul:v3 (speech out)`, `Gemini (fallback only)` each with a tag; caption
     `The LLM never computes a number shown to the user.`
  4. `STORES` y 776 to 880: chips `HTTP cache with point-in-time stamps`, `evidence store`, `run trace (SQLite)`.
  5. `OUTPUTS` y 896 to 1030: chips `Dashboard`, `PDF`, `Markdown`, `Excel`, `CSV`, `Voice analyst` with tags.
- Right column x 1274 to 1856:
  - `panel(s,1274,312,582,330,"TECH STACK")`: `wrapTable` 3 columns `Layer | Choice | Why` 6 rows: Engine / Python
    FastAPI / PDF, XBRL, stats are native; Retrieval / BM25 over pages / deterministic, auditable; Stats / ruptures,
    scipy / change-points and event study; UI / Next.js 16, Recharts / click-through evidence; Voice / Sarvam stack /
    grounded on the report; Data / NSE MCP, Angel, Upstox / prices fallback chain.
  - `panel(s,1274,658,582,170,"BUILD STATUS")`: `segBar` LIVE/WIRED/PLANNED from `V.status_counts` + legend with counts.
  - `panel(s,1274,844,582,186,"MEDIAN SECONDS PER STAGE")`: `hBars` of `V.stage_secs` (6 rows, rowH 26 can't: 22 pt
    needs ≥ 30: use rowH 30, barH 18, compact labels).
- Source: `Source: Next Signal engine code audit ${V.hash} | NSE, BSE, openFDA, SEC EDGAR, GDELT, Sarvam AI documentation, accessed Oct 2026`

**S4 Workflow** (ribbon 2; chip `RESEARCH WORKFLOW` 400; counter `03 / 05`)
- Headline: `On ${V.demo.company}, the earliest outside record came ${V.demo.lead_days} days before the first press report, and ${V.demo.origins} independent origins agree on the core number`
  (if `lead_days` is "n/a", use the alternative headline: `On ${V.demo.company}, the change emerged in ${V.demo.changepoint_label}, and ${V.demo.origins} independent origins agree on the core number`; make_values picks the variant and passes `V.s4_headline`).
- Band A y 312 to 520: `panel(...,"ONE LIVE RUN, STAGE BY STAGE")` six step cards in a row with stage name, `ms` from
  `V.demo.stage_ms` (formatted s), and one count each (`docs`, `facts`, `anomalies`, `hypotheses`, `killed`,
  `outputs: 8`); arrows between cards; a bracket under the row labelled `${V.demo.docs} documents, ${V.demo.facts} anchored facts`.
- Band B left y 536 to 1030, x 64 to 1180: `panel(...,"WHEN THE STORY CHANGED")` with `swimlane` lanes
  `Regulator`, `Company filing`, `Management said`, `Market`, `Press`; events from `V.demo.timeline` (t normalised by
  make_values); change-point dashed red with chip `Change emerges: ${V.demo.changepoint_label}`; lead-time bracket
  (two short vertical ticks + horizontal wire + 22 pt label `${V.demo.lead_days} days`) between the first external
  record and first press dot. Quarter ticks along the bottom.
- Band B right x 1204 to 1856:
  - `panel(...,"SOURCE INDEPENDENCE")` y 536 to 790: `heatGrid` claims (≤ 4 rows, short labels C1 to C4) × origin
    classes (≤ 5 cols short labels: CO, REG, MKT, PEER, PRESS) with counts, red scale via
    `Object.assign(hcell(Math.min(5,Math.max(1,n))),{t:String(n)})` (HG only has 5 steps; the text shows the real
    count) and a white cell with text `0` where n is 0.
  - `panel(...,"CONTRADICTIONS CAUGHT")` y 806 to 1030: `wrapTable` `Type | A says | B says | Ruling`, 2 to 3 rows from
    `V.demo.contradictions` (at least one aggregator vs primary row if found in any eval run; make_values selects).
- Source: `Source: Next Signal run on ${V.demo.symbol} (${V.hash}) | NSE filings | USFDA records | GDELT first-seen dates | NSE MCP and Angel One prices`
- Forms: step row, swimlane timeline with in-chart annotation, heat grid, table (4 forms + bracket annotation).

**S5 Falsification** (ribbon 3; chip `SELF-FALSIFICATION` 400; counter `04 / 05`). Densest slide #2: rails.
- Headline: `Every hypothesis faces nine tests and its strongest rival; on ${V.demo.company}, ${V.demo.killed} of ${V.demo.hyps} died and the survivor scores ${V.demo.strength_total} of 10`
- Left x 64 to 960:
  - `panel(...,"ANALYSIS OF COMPETING HYPOTHESES")` y 312 to 660: `heatGrid` evidence rows (≤ 6, labels E1 to E6 with
    publisher short names) × hypothesis columns (≤ 5: MAIN, SECTOR, FX, ONE-OFF, ACCOUNTING) with glyphs CC/C/N/I/II;
    colour: CC/C ink greys, I/II reds, N white; footer row `Inconsistency` with totals; MAIN column outlined black 3 px,
    counterargument column outlined red dashed. 
  - `panel(...,"NINE TESTS")` y 676 to 1030: `heatGrid` T1 to T9 rows (labels `T1 Peer`, `T2 FX`, `T3 One-off`,
    `T4 Reclass`, `T5 Season`, `T6 Persist`, `T7 Novelty`, `T8 Counter-search`, `T9 Time-travel`) × up to 4 hypothesis
    columns, cells PASS (ink fill white text) / FAIL (red fill white text) / n/a (white). rowH 34 (9 rows fit 306 px +
    header 48 = 354).
- Right x 984 to 1856:
  - `panel(...,"THE FUNNEL")` y 312 to 520: `hBars` from `V.demo.funnel` (`Proposed`, `After peer test`, `After
    persistence`, `After counter-search`, `Survived`), bar colour ink, final bar red.
  - `browser(s,984,536,872,368,"localhost:3000/report/"+V.demo.symbol)` mockup: inside the VIEW: strength badge chip,
    the discovery sentence (22 pt Poppins Bold, ≤ 3 lines; make_values truncates at a clause boundary and adds
    "(full text in the report)" if longer than 150 chars), a row of 3 number chips (`V.demo.numbers[0..2]`), a
    `Counterargument:` line, a `Falsification:` line.
  - `callout(s,984,920,872,110,"STRENGTH = ","Independence 0 to 3 + Reliability 0 to 2 + Corroboration 0 to 2 + Survival 0 to 2 + Persistence 0 to 1, minus penalties. Strong ≥ 7, Moderate ≥ 4.")` (formula callout, mandatory per archetype).
- Source: `Source: Next Signal run on ${V.demo.symbol} (${V.hash}) | Heuer (1999), Psychology of Intelligence Analysis, ch. 8 | NATO Admiralty grading`

**S6 Proof and Plan** (ribbon 4; chip `EVALUATION AND BUILD PLAN` 460; counter `05 / 05`) **moneyshot slide**
- Headline: `Across ${V.n_companies} companies, the agent killed ${V.kill_rate} of its ${V.hyp_total} hypotheses, anchored ${V.anchor_precision} of numbers verbatim and ran in a median ${V.median_runtime}`
- Left x 64 to 1140: `panel(...,"SAME CODE, ${V.n_companies} COMPANIES, NO TUNING")` y 312 to 920 with `wrapTable`
  columns `Company | Playbook | Angle | Strength | Origins | Killed | Run` and all `V.eval_rows` (5 NIFTY 50 rows first,
  then tie-break rows; rowH 36; a thin black separator after the NIFTY 50 block with label chip `TIE-BREAK UNIVERSE`);
  Strength cells coloured (Strong ink fill, Moderate rose, Weak white with red text).
  Below y 936 to 1030: `callout` lead `WITHOUT THE CHALLENGE STAGE:` text `${V.ablation_overturned} of ${V.n_n50} NIFTY 50 discoveries would have changed or been reported at a higher strength than the evidence supports.`
- Right x 1164 to 1856:
  - Moneyshot `layered(s,1164,312,692,330,C.white,"CARD: MONEYSHOT",C.alert)` with 3 px red stroke: giant
    `${V.kill_rate}` (110 pt Poppins ExtraBold, red, the largest text in the deck), label (24 pt Poppins Bold)
    `OF ITS OWN HYPOTHESES KILLED BEFORE A WORD WAS WRITTEN`, sub-row of two `kv` pairs: `${V.anchor_precision}` /
    `numbers anchored to a verbatim passage`; `${V.tt_hold_rate}` / `time-travel predictions that held`.
  - `panel(...,"BUILD PLAN TO THE FINALS")` y 658 to 900: `gantt` (days 11 to 25 Oct as columns, 7 rows: Research,
    Engine, Dashboard, Evaluation, Round 1 PDF, Deck, Rehearsal), milestone diamonds at 19 Oct (Round 1) and 25 Oct
    (Finals).
  - `layered(s,1164,916,692,114,C.primaryDeep,"CARD: therefore",C.primary)`: `THEREFORE` (red) + `give it any Track D
    company live: the same code, every number linked, and a stated condition that would prove it wrong.` (white 22 pt).
- Source: `Source: Next Signal evaluation harness ${V.hash}, ${V.n_companies} companies, NIFTY 50 and tie-break universe per NSE Indices CSVs, Oct 2026`
- Forms: heat-coloured table, ablation callout, moneyshot, KPI pairs, Gantt, synthesis card.

**S7 Appendix** (ribbon labels `RIBAP` with active index −1 so no tag is active; chip `APPENDIX` 280; counter `A / 01`)
- Headline: `Appendix: the ${V.n_metrics} formulas, the grading rubric, ${V.n_sources} sources and six controlled risks behind every number in this deck`
- Four quadrants (each `panel` 884×350, gutters 24): A1 `METRIC LIBRARY (12 OF ${V.n_metrics})` `wrapTable`
  `Metric | Formula` from `V.metrics_rows`; A2 `EVIDENCE GRADING` two small tables: strength components
  (`V.rubric_rows`) and Admiralty reliability A to F one-line definitions; A3 `SOURCE CATALOGUE (10 OF ${V.n_sources})`
  `wrapTable` `Source | Origin | Grade | Access | Time stamp`; A4 `RISKS AND CONTROLS` a 3×3 P×I heat grid with risk
  numbers + `badgeList` of 6 risks each paired 1:1 with its control (`V.risks`).
- Source: `Source: Next Signal research deliverable, Appendices B, C, D | engine metric registry ${V.hash}`

**S8 Thank You** (no ribbon; centred; model on BeyondTech `s11.js`)
- `THANK YOU` (100 pt ExtraBold ink) centred at y 220; line (26 pt Poppins Bold red) `Compute first. Look outside. Try to kill it. Report what survives.`;
  `teamBT` centred (x = (1920 − 1100)/2); three `imgSlot` link cards 360×90 in a row at y 760: `GitHub repository`,
  `Two-minute demo`, `Research deliverable (PDF)` (captions are placeholders named `IMG:` until the user provides
  links; list in open items); logo slots `ATMOS`, `BITS Pilani` at bottom; bottom rule; source line
  `Source: Team IdeaForge, ATMOS 2026 Track D submission`.

### §7.5 Content lock and derivation (step D0, before any code)

1. Invoke `Skill: case-competition-deck` (touchpoint T4), read `references/structure.md` (compression guidance),
   `references/archetypes.md` (H Executive Summary, I Two-chart workhorse, J Multi-chart dense, P Moneyshot, V
   Section closer, W Conclusion synthesis, X Appendix), `references/rhetoric.md` §2, §3, §9, §10, §12. Log `SKILL T4`.
   Section mapping (record in `deck/derivation.md`):

| Skill section | Where in this 8-slide deck |
|---|---|
| Front matter (cover) | S1 |
| I Executive summary | S2 (two-column obvious vs ours, the recommendation in the headline) |
| II Context (funnel + seed) | S2 centre panel (where evidence comes from) |
| III Actors | S3 sources band (the evidence publishers) + S1 mind map (companies and publishers) |
| IV Quantitative analysis + moneyshot | S4 (temporal, triangulation), S5 (falsification), S6 moneyshot |
| V Feasibility | S3 build status + latency, S6 build plan, S7 A4 risks |
| VI Recommended alternative | S2 right column, S3 to S5 detail |
| VII Conclusion (double synthesis) | S2 "Conclusively", S6 "Therefore" |
| Appendix (defensive depth) | S7 |

2. Write `deck/slide-copy.md`: for each slide the chip text and width, headline with `${V...}` placeholders, every
   panel title and every text string verbatim (copy from §7.4), and each panel's data key. Line-length limits: 22 pt
   Inter Semi Bold averages about 11.5 px per character, so a 560 px text box holds about 48 characters per line.
3. **D0 audit for honesty tags**: open the engine and web code; for each component in `V.components` set LIVE only if a
   real eval run exercised it (check `eval/out/runs.csv` sources_hit hosts and the trace), WIRED if code exists but it
   was off or failed in eval (for example SEC without a user agent, FDA Data Dashboard), PLANNED if absent. Write the
   audit table to `deck/derivation.md` and into `model_outputs.json["components"]` via `collect_outputs.py --audit
   deck/audit.json`.
4. `must` list (strings that must appear somewhere in the deck, checked by sweeps): `TEAM IDEAFORGE`, `Harsh Kawatra`,
   ``, `Gursimran Kaur`, `ATMOS 2026`, `Track D`, `NEXT SIGNAL`, `CONCLUSIVELY`, `THEREFORE`,
   `ANALYSIS OF COMPETING HYPOTHESES`, `NINE TESTS`, `LIVE`, `WIRED`, `PLANNED`, `V.kill_rate value`, `V.anchor_precision value`.

### §7.6 Build procedure

| Step | Who | What | Done when |
|---|---|---|---|
| D1 | 1 agent | Copy and patch tooling (§7.1), write `_palette.js`, helpers (§7.3), `make_values.py`, `slides/s01.js` to `s08.js` per §7.4 (each slide file starts `{ const s = await figma.getNodeByIdAsync("S<n>"); ...` and ends with `results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }`, exactly like BeyondTech slides); run `PY deck\gen.py pre` then `PY deck\gen.py mock` | mock prints `OK` for all 8 slides (`warnings: []`, `ISSUES 0`, script < 49,900 chars) |
| D2 | 1 agent (Figma) | Load figma tools: ToolSearch `select:mcp__figma-mcp__use_figma,mcp__figma-mcp__create_new_file,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets,mcp__figma-mcp__whoami`; read the figma-use skill resource (`ReadMcpResourceTool` on `skill://figma/figma-use/SKILL.md`) before the first `use_figma`; `create_new_file` editorType `slides`, planKey `team::1564294484048272772`, name `Next Signal | Team IdeaForge | ATMOS 2026 Track D`; run `setup.js` via `use_figma`; save returned ids to `deck/slide-ids.json` as `{"S1":"<id>",...}`; write `deck/figma.md` (key, URL, ids, fonts check) | 8 slides, fonts all true, no extras |
| D3 | 1 agent (Figma), sequential | `PY deck\gen.py bind`; for n in 1..8: `use_figma` with the exact contents of `build/slide_0n.js`; then `use_figma` with `build/v1_0n.js`; fix issues (rules §7.7, ≤ 3 rounds, edit `slides/s0n.js` then re-bind and rebuild that slide only; never patch nodes by hand); `get_screenshot` of the slide at 1600 px and inspect against §7.4 | all 8 slides V1 clean, screenshots saved to `deck/shots/s0n.png` |
| D4 | 1 agent (Figma) | Logos: run `build/slots.js` to list `LOGO:` slots with sizes; fetch logos (Wikimedia Commons or the organisation's official site press/brand page; PNG or SVG converted to PNG ≥ 2× slot size) into `deck/logos/` with `manifest.json` `{brand, file, source_url, licence_note, w, h}`; for each slot, create inside it a child rectangle named `IMG` sized to the logo's aspect ratio fitted within slot minus 6 px padding, centred; `upload_assets` (count 1, nodeId = that rectangle) and POST the bytes. Leave a dashed slot (unchanged) where no public logo exists (expected: ATMOS, Wall Street Club, Economics Association: user to supply) | every slot either filled with correct aspect or listed in open items |
| D5 | 1 agent | `use_figma` with `build/sweeps.js` (radius 0, moneyshot count 1, font floor, dashes, banned, MUST present, ABSENT absent) and `build/v1_all.js`; then critique (skill touchpoint T5: invoke skill in critique mode, read `references/critique_rubric.md`; for an 8-slide deck score Dimensions 1, 3, 4, 5, 7 and the pass/fail items that apply: recommendation in exec-summary headline, two-column for/against, action titles on all content slides, sources on all content slides, section closer and conclusion synthesis present, moneyshot present, no placeholder text); write `deck/critique.md`; fix CRITICAL and IMPORTANT; re-run sweeps and V1 | sweeps: `radiusFixed 0`, `moneyshot 1`, `fontLow []`, `copy []`, `missing []`, `presentBad []`; V1 clean; critique ≥ 40/45 equivalent |
| D6 | 1 agent | Final screenshots at 3840 px into `deck/shots/hi_s0n.png`; build `deck/Next_Signal_preview.pdf` from the PNGs with PyMuPDF (one page per slide); update `deck/figma.md` with the final state; update build-log | preview PDF exists with 8 pages |

### §7.7 Fix rules (one rule per V1 issue type)

| Issue | Fix (in `slides/s0n.js`, then re-bind and rebuild) |
|---|---|
| `overlap` between two named panels | move the lower panel down by overlap + 24, or reduce the upper panel's height; never overlap layered back-cards counted as panels (they are named `BACK:` and ignored) |
| `bounds` | the node extends beyond 1920×1080: shrink width or move left/up |
| `belowContent` (panel bottom > 1038) | reduce panel height or row heights (never below 30 px for 22 pt text) |
| `headline3lines` | shortening ladder: (1) drop adjectives, (2) replace "and" clause with a comma clause, (3) move the second finding into the first panel title, (4) let skelBT shrink to 34 pt |
| `source2lines` | shorten source text (drop "accessed Oct 2026", abbreviate publishers) |
| `textOut` | widen the text box or increase parent height; never reduce font below 22 pt |
| `cellWrap` | widen the column, shorten the cell text, or increase `rowH` |
| font sweep hit | raise size to 22 pt; if it then overflows, shorten text |
| copy hit (dash, `?`, `!`, banned) | rewrite the sentence |

### §7.8 Rate limits and recovery
On Figma HTTP 429: wait 60 s, check the slide's child count with a read-only `use_figma`
(`return (await figma.getNodeByIdAsync(id)).children.length`); if partial, every slide script starts with `wipe(s)`, so
simply re-run that slide's build script. Never run two Figma calls at once. Never create a second file; if `setup.js`
is rerun it reuses existing slides (it is idempotent).

---

## §8 PHASE S: ROUND 1 SUBMISSION (due 19 Oct 2026, 23:59 IST)

### §8.1 The solution report PDF (required; "one page is appreciated; two pages maximum")

Build as HTML + CSS printed by Chrome (same mechanism as the research PDF). Target **two A4 pages exactly**; if the
content fits one page with no font below 8.5 pt, prefer one page.

Files: `round1\round1.html` (hand-written HTML with inline CSS and inline SVG), `round1\build_round1.py` (renders,
then checks), output `round1\IdeaForge_TrackD_Round1.pdf` (name changes if open item O1 changes the team name).

Layout: A4, margins 10 mm, two columns per page (column gap 6 mm), body Inter 8.8 pt / 1.35, headings Poppins 700
10.5 pt red `#C8102E`, rules black 0.6 pt, tables 8 pt with black header row and zebra `#F6F5F3`. Header strip on page 1:
`NEXT SIGNAL` (Poppins 800, 20 pt) + `Track D: Pharma and Healthcare | Team IdeaForge | Harsh Kawatra (lead), Gursimran Kaur | ATMOS 2026, BITS Pilani Hyderabad`.

Content, in the order the brief lists "What your report should cover" (each heading an action title):

| § | Heading (action title) | Content (tight, numbers from `model_outputs.json`) |
|---|---|---|
| 1 | The approach: compute first, look outside the company, try to kill every hypothesis | the contrarian thesis in 3 sentences; why this yields non-obvious discoveries not summaries (narrative-vs-number gaps, external regulator records, falsification); the moneyshot line from eval |
| 2 | Tools and stack | 6-row table: Models (sarvam-105b research, sarvam-105b-conversations voice, Gemini fallback), Agent framework (async stage orchestrator in Python FastAPI, six stages), Retrieval (BM25 over PDF pages + quote-anchored extraction + XBRL), Data sources (NSE, BSE, openFDA, FDA warning letters and import alerts, Orange Book, SEC EDGAR, GDELT, rating rationales, NSE MCP, Angel One, Upstox), Stats (ruptures change-points, peer z-scores, event study), Output (Next.js dashboard + PDF/MD/XLSX/CSV export + voice) |
| 3 | Workflow: from a ticker to a tested discovery in about {{median_runtime}} | inline SVG flow (6 boxes: Discover, Connect, Calculate, Reason, Challenge, Prove) with one line each and the stage budget |
| 4 | Track D, and why the same code works for every company in it | universe read from NSE index CSVs at run time; two sub-industry playbooks (pharma P1 to P10, hospitals H1 to H6) + generic fallback; peers chosen by rule; eval on {{n_companies}} companies incl. {{n_tb}} outside the NIFTY 50; no-hard-coding test |
| 5 | Triangulation and contradiction detection | independence counted by origin class with Admiralty grades; five contradiction types with one real example (aggregator vs primary if found) |
| 6 | Self-falsification | nine tests + ACH; kill rules; counterargument = strongest surviving rival; falsification condition grammar; eval kill rate and ablation result |
| 7 | Output: a click-through dashboard, also exportable as a report | small wireframe SVG of the report page (hero, tabs, evidence drawer) + list of exports; a compact real example (the featured run's eight elements in ≤ 10 lines, labelled "Example from a live run on <company>, <date>") |
| 8 | Build plan and milestones to 25 October | table: dates, milestone, status (done / in progress) as of the submission date |
| footer | | GitHub link (only if O4 approved), demo video link (if O6 done), "Public data only. Not investment advice." |

`build_round1.py` checks, all must pass: PyMuPDF `page_count in (1, 2)`; no U+2014/U+2013 in the extracted text; no
banned words; every `{{` placeholder replaced; file size < 3 MB; all links extracted with `page.get_links()` resolve to
https URLs; text extraction shows team names. Print `ROUND1 PASS`.

Skill touchpoint T3: before writing, invoke `Skill: case-competition-deck` and apply `rhetoric.md` §10 (action titles),
§11 (quantification), §14 (citation discipline) at two-page scale; log `SKILL T3`.

### §8.2 Optional MVP evidence (appreciated by the brief)
- **GitHub repository**: outward-facing; requires the user's explicit go-ahead (open item O4) on visibility (public vs
  private with judge access) and on pushing. Before any push: secret scan (§9.3), README with run instructions and
  architecture diagram, `LICENSE` (MIT unless the user says otherwise), no `.env` committed. Commits carry no
  Co-Authored-By trailer.
- **Two-minute demo video**: write `round1\demo-video-script.md` (timed shot list: 0:00 home and company entry,
  0:10 live run stage rail, 0:50 report hero, 1:05 click a number to its source, 1:20 challenge tab with ACH and kill
  log, 1:35 falsification card, 1:45 export PDF, 1:52 one voice question, 2:00 end). The user records it (OBS or Xbox
  Game Bar) on a real run of a NIFTY 50 Track D company; open item O6.

### §8.3 Submission
The user submits on Unstop (outward-facing; never automated). Hand-off message lists the file path, the page count,
and the checks that passed.

---

## §9 VERIFICATION (end to end)

### §9.1 Gate table

| Gate | When | Evidence pasted into build-log |
|---|---|---|
| G-R0 | after R0 | ARGUMENT.md exists; SKILL T1, T2 |
| G-R1 | after lanes | row counts per lane, S-ID uniqueness check output |
| G-R2 | after verification | R0-verify.md table |
| G-R | research done | `ASSEMBLY PASS` JSON; PDF page count; critique top-5 with fixes; SKILL T6 |
| G-P1, G-P2, G-P3 | engine | pytest output; run_one summaries |
| G-W | web | build/lint output; copy lint `[]`; screenshots list |
| G-MVP | eval | summary.json aggregates; anchor precision; median runtime |
| G-S | Round 1 | `ROUND1 PASS`; page count |
| G-D | deck | sweeps JSON; V1 clean; critique score; SKILL T4, T5 |
| G-F | finals ready | rehearsal log: 5 timed live runs, all < 9 min, outcomes |

### §9.2 Cross-deliverable greps (run before G-S and before G-D)

```powershell
# 1. No em/en dashes anywhere we authored
PY -c "import pathlib,re;roots=[r'C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\next-signal-bits',r'C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits\apps\web\src',r'C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits\engine\next_signal'];hits=[(str(p),i+1) for r in roots for p in pathlib.Path(r).rglob('*') if p.suffix in ('.md','.html','.tsx','.ts','.py','.j2','.json') and 'node_modules' not in str(p) and 'raw' not in p.parts for i,l in enumerate(p.read_text(encoding='utf-8',errors='ignore').splitlines()) if re.search('[\u2014\u2013]',l)];print(len(hits),hits[:20])"
```
(Raw research files are exempt because they hold verbatim source snippets; everything authored must print `0 []`.)
2. Invented-name check (§4.6 step 4) across research doc, Round 1 HTML, deck slide-copy and UI strings.
3. Number consistency: every number on deck and Round 1 PDF that is an eval figure must equal the value in
   `model_outputs.json` (script `model/check_numbers.py` greps the rendered texts: deck via `build/slide_0n.js` strings,
   Round 1 via PyMuPDF text, research via the md). If a headline number changes, re-run `collect_outputs.py`, `gen.py
   pre`, rebuild affected slides, rebuild Round 1 and research PDF (CLAUDE.md §5 stale-figure rule).

### §9.3 Secret and hard-coding scans (before any commit or push)
- `git -C "<repo>" grep -nIE "(api-subscription-key\s*[:=]\s*['\"][A-Za-z0-9]|SARVAM_API_KEY=.+|ANGEL_PASSWORD=.+|ANGEL_TOTP_SECRET=.+|UPSTOX_ACCESS_TOKEN=.+|GEMINI_API_KEY=.+)"` must print nothing (only `.env.example` with empty values is allowed).
- `pytest -k no_hardcoding` passes.
- `git status` shows no `.env`, no `.cache`, no sqlite.

### §9.4 Live end-to-end test (the judges' scenario)
1. Start engine and web (README commands). 2. Ask a teammate (or `random.choice` over the N50 list printed by
`/api/universe`) to pick a company. 3. Start a timer, run from the home page. 4. Record: runtime, discovery label,
independent origins, killed count; click three numbers and confirm their anchors; open the ACH tab; export PDF and
XLSX and open both; ask the voice analyst "What would prove this wrong?" and confirm the answer matches the
falsification card. 5. Repeat for one tie-break company and one non-healthcare NIFTY 50 company (generic playbook)
to prove graceful handling. Log in `qa\rehearsal-log.md`.

---

## §10 RISKS AND RECOVERY

| # | Risk | Likelihood | Control |
|---|---|---|---|
| 1 | NSE API returns 401/403 or changes JSON keys during the finals | Medium | cookie refresh + BSE fallback; parsers tolerant (`.get` with defaults) and fixture tests; warm cache the evening before |
| 2 | Sarvam rate limit or outage | Medium | Gemini fallback per call; reasoning_effort low; LLM calls capped (about 15 per run) |
| 3 | Run exceeds 9 minutes | Medium | hard cap → Prove on what exists, labelled partial; source plan bounded (8 presentations, 2 annual reports, 3 peers) |
| 4 | No hypothesis survives | Low to medium | honest "no discovery survived" output with kill log; present it as the system working; runners-up visible |
| 5 | Venue internet fails | Low | run on mobile hotspot; if still down, open the latest completed run of the same company and say plainly it is a recorded run (UI shows a `RECORDED RUN` banner whenever a report is opened from history) |
| 6 | Judges pick a company outside healthcare | Low | generic playbook G1 to G6 |
| 7 | A number is wrong in a live report | Low | quote-anchor verification drops unanchored facts; the strength grader caps single-document claims at Weak |
| 8 | Upstox token expired | High | Upstox is third in the price chain |
| 9 | FDA Data Dashboard requires login | High | marked PLANNED; WL, IA, openFDA cover the regulator lane |
| 10 | SEC user agent missing | Medium | SEC tagged WIRED until O3 resolved |
| 11 | Figma 429 / partial slide | Medium | §7.8 |
| 12 | Context loss in a long executor session | Medium | PLAN.md copy, build-log, DECISIONS.md, files written incrementally |
| 13 | Copy drifts into AI register or dashes | Medium | assembler, sweeps and copy lint gates |
| 14 | Hard-coded company logic slips in | Low | `test_no_hardcoding`; code review in P5 |

Recovery after any interruption: read `next-signal-bits\build-log.md` (last gate passed), `DECISIONS.md`,
`engine\spikes\SPIKES.md`, `deck\figma.md`, then resume at the next step in §3.1.

---

## §11 FINALS PREPARATION (23 to 25 Oct)

### §11.1 Demo runbook (`docs\DEMO-RUNBOOK.md` in the code repo)
- T minus 24 h: `warm_cache.py` for the full Track D universe; run eval again; update deck numbers only if they
  changed (then follow §9.2 item 3).
- T minus 1 h: `/api/health` green; Sarvam test call; NSE cookie bootstrap; open the deck in Figma presentation mode;
  open the dashboard home; close other apps; hotspot ready.
- 10-minute talk track (S = slide): 0:00 to 1:20 S1 and S2 (the answer); 1:20 judges name a company; start the live
  run immediately and leave the run page on a second screen or tab; 1:30 to 3:00 S3 (architecture); 3:00 to 5:00 S4
  and S5 using the featured run; 5:00 to 8:30 switch to the live run (should be finishing; if not, narrate the stage
  rail and kill log as they arrive): discovery hero, click two numbers to their sources, Challenge tab (ACH, kill log,
  counterargument, falsification), export PDF; one voice question; 8:30 to 10:00 S6 (moneyshot and plan) and close.
- Speaking split: Harsh (S1, S2, live run), Harsh (S3, S4), Gursimran (S5, S6). Adjust if the user specifies.

### §11.2 Q&A bank (skill touchpoint T7) `qa\qa-bank.md`
Invoke the skill; apply `rhetoric.md` §6 and §8. Thirty questions with answers ≤ 80 words each, each answer citing a
research section or a dashboard panel. Must include: How do you avoid hard-coding? Why Sarvam and not a frontier
model? What if the LLM invents a number? How is "independent" defined? What if the discovery is sector-wide? How do you
know it is non-obvious? How long does a run take and what if it times out? Why should we trust the strength label?
What does the time-travel test prove? What data is not public that you wish you had? Is scraping NSE allowed? Why no
vector database? How would it work for Track A? What is the worst output you have seen it produce? How does the voice
analyst avoid making things up?

---

## §12 OPEN ITEMS FOR THE USER (list these in every hand-off message until resolved)

| ID | Item | Default until answered |
|---|---|---|
| O1 | Confirm team name "Team IdeaForge" for ATMOS (drives file name `IdeaForge_TrackD_Round1.pdf`) | Team IdeaForge |
| O2 | Logos for ATMOS 2026, The Wall Street Club, The Economics Association (not reliably public) | dashed placeholders |
| O3 | Contact string for SEC EDGAR `User-Agent` (format "Name email") | SEC collector off (WIRED) |
| O4 | GitHub repo: create, visibility, push approval | local git only |
| O5 | Unstop submission | user action |
| O6 | Record the 2-minute demo video | script ready |
| O7 | Speaking split for finals | §11.1 default |

---

## §13 HAND-OFF AND MEMORY

At the end of each phase, report to the user in ≤ 15 lines: what was built (paths, Figma URL), gate results, open
items. After G-D, write memory file
`C:\Users\harsh\.claude\projects\c--Users-harsh-Desktop-HARSH-PPTS-CASE-STUDY-nsut-innovators-court\memory\project_next_signal_atmos.md`
(frontmatter: name `project-next-signal-atmos`, description one line, type project) recording: case, track D, team,
code path, Figma key, research path, the moneyshot number and its source file, the stale-figure propagation rule, and
the open items still pending; add one line to `MEMORY.md`. Do not record secrets.

---

## APPENDIX X: REFERENCE CODE (copy, then adapt only where marked `# ADAPT`)

### X.1 `llm/sarvam.py` + `llm/router.py` (research calls with fallback and schema validation)

```python
import json, time, httpx
from pydantic import BaseModel, ValidationError, TypeAdapter
from ..config import settings
SARVAM_URL = "https://api.sarvam.ai/v1/chat/completions"
class LLMError(Exception): ...

async def _sarvam(client: httpx.AsyncClient, messages, schema_name, schema, effort):
    body = {"model": settings.sarvam_research_model, "messages": messages, "temperature": 0.2,
            "max_tokens": settings.sarvam_max_tokens, "reasoning_effort": effort,
            "response_format": {"type": "json_schema",
                                "json_schema": {"name": schema_name, "schema": schema, "strict": False}}}
    r = await client.post(SARVAM_URL, json=body, timeout=120,
                          headers={"api-subscription-key": settings.sarvam_api_key, "Content-Type": "application/json"})
    if r.status_code in (429, 500, 502, 503, 504): raise LLMError(f"sarvam {r.status_code}")
    r.raise_for_status()
    msg = r.json()["choices"][0]["message"]
    return msg.get("content") or "", r.json().get("usage", {})

async def _gemini(client, messages, schema_name, schema, effort):
    m = settings.gemini_model or "gemini-3.5-flash-lite"
    text = "\n\n".join(f"[{x['role']}]\n{x['content']}" for x in messages)
    text += f"\n\nReturn only JSON matching this JSON schema named {schema_name}:\n{json.dumps(schema)}"
    r = await client.post(f"https://generativelanguage.googleapis.com/v1beta/models/{m}:generateContent",
                          params={"key": settings.gemini_api_key}, timeout=120,
                          json={"contents": [{"role": "user", "parts": [{"text": text}]}],
                                "generationConfig": {"temperature": 0.2, "responseMimeType": "application/json"}})
    r.raise_for_status()
    return r.json()["candidates"][0]["content"]["parts"][0]["text"], r.json().get("usageMetadata", {})

def _parse(raw: str):
    s = raw.strip()
    if s.startswith("```"):
        s = s.split("\n", 1)[1] if "\n" in s else s
        s = s.rsplit("```", 1)[0]
    starts = [i for i in (s.find("{"), s.find("[")) if i >= 0]
    if not starts: raise ValueError("no JSON object in model output")
    obj, _ = json.JSONDecoder().raw_decode(s[min(starts):])
    return obj

async def llm_json(client, bus, run_id, purpose: str, messages: list[dict], out_type, effort="low"):
    """out_type: a pydantic model class. For list outputs ALWAYS use a wrapper model, e.g.
    class Hypotheses(BaseModel): items: list[Hypothesis], because some json_schema implementations reject a
    top-level array."""
    ta = TypeAdapter(out_type); schema = ta.json_schema(); name = purpose.replace(" ", "_")[:40]
    order = [("sarvam", _sarvam), ("gemini", _gemini)] if settings.llm_provider == "sarvam" else [("gemini", _gemini), ("sarvam", _sarvam)]
    last = None
    for provider, fn in order:
        if provider == "gemini" and not settings.gemini_api_key: continue
        for attempt in range(2):                      # 1 repair retry per provider
            t0 = time.perf_counter()
            try:
                raw, usage = await fn(client, messages, name, schema, effort)
                obj = ta.validate_python(_parse(raw))
                await bus.emit(run_id, "llm", {"purpose": purpose, "provider": provider,
                                               "ms": int((time.perf_counter() - t0) * 1000), "usage": usage})
                return obj
            except (ValidationError, json.JSONDecodeError, ValueError) as e:
                last = e
                messages = messages + [{"role": "user", "content": f"Your previous output failed validation: {str(e)[:800]}. Return corrected JSON only."}]
            except (LLMError, httpx.TimeoutException, httpx.HTTPStatusError) as e:
                last = e; break                       # switch provider
    raise LLMError(f"{purpose}: all providers failed: {last}")
```

### X.2 `docs/anchors.py` and `llm/guards.py`

```python
import re
def _n(s: str) -> str:
    s = s.replace("\u00a0", " ").replace("\u2009", " ")
    s = re.sub(r"(?<=\d),(?=\d)", "", s)                  # 1,51,836 -> 151836
    return re.sub(r"\s+", " ", s).strip().lower()
def verify(quote: str, page_text: str) -> bool:
    q = _n(quote)
    return len(q) >= 12 and q in _n(page_text)

NUM = re.compile(r"(?<![A-Za-z])[-+]?\d[\d,]*(?:\.\d+)?")
BANNED_INVEST = re.compile(r"\b(buy rating|sell rating|hold rating|buy the (stock|shares)|sell the (stock|shares)|target price|price target|undervalued|overvalued|investors should|we recommend (buying|selling|holding))\b", re.I)
def numbers_in(text: str) -> set[str]:
    return {m.group().replace(",", "").lstrip("+") for m in NUM.finditer(text)}
def allowed_numbers(report) -> set[str]:
    allowed = set()
    d = report.discovery
    for n in d.numbers: allowed |= numbers_in(n.display) | {repr_num(n.value)}
    for e in d.evidence: allowed |= numbers_in(e.anchor.quote)
    for t in d.timeline: allowed |= numbers_in(t.label) | {str(t.date.year)}
    s = d.strength; allowed |= {repr_num(x) for x in (s.independence, s.reliability, s.corroboration, s.survival, s.persistence, s.total)}
    allowed |= numbers_in(d.falsification.statement) | {str(y) for y in range(1990, 2036)} | {str(i) for i in range(0, 11)}
    return allowed
def repr_num(v: float) -> str:
    return str(int(v)) if float(v).is_integer() else f"{v:.2f}".rstrip("0").rstrip(".")
def stray_numbers(text: str, allowed: set[str]) -> list[str]:
    return sorted(n for n in numbers_in(text) if n not in allowed and n.rstrip("0").rstrip(".") not in allowed)
def copy_issues(text: str) -> list[str]:
    out = []
    if re.search("[\u2014\u2013]", text): out.append("dash")
    if "!" in text: out.append("exclamation")
    if BANNED_INVEST.search(text): out.append("investment language")
    return out
```
`tests/test_guards.py` cases: "₹1,51,836 million" vs allowed {"151836"} → no stray; "grew 14.2%" with 14.2 absent →
["14.2"]; "Q1 FY27" → no numbers counted; "buy the stock" → investment language.

### X.3 `grading/ach.py`

```python
SCORE = {"CC": 2, "C": 1, "N": 0, "I": -1, "II": -2}
def ach_matrix(hyp_ids: list[str], ev_ids: list[str], cell) -> dict:
    """cell(ev_id, hyp_id) -> one of CC, C, N, I, II."""
    cells = [[cell(e, h) for h in hyp_ids] for e in ev_ids]
    incons = [sum(min(0, SCORE[cells[i][j]]) for i in range(len(ev_ids))) for j in range(len(hyp_ids))]
    ranked = sorted(range(len(hyp_ids)), key=lambda j: incons[j], reverse=True)   # least inconsistent first
    return {"hypotheses": hyp_ids, "evidence": ev_ids, "cells": cells, "inconsistency": incons,
            "ranked": [hyp_ids[j] for j in ranked]}
def main_holds(m: dict, main_id: str) -> bool:
    best = max(m["inconsistency"]); j = m["hypotheses"].index(main_id)
    return m["inconsistency"][j] >= best - 1
def counterargument(m: dict, main_id: str) -> str | None:
    rivals = [h for h in m["ranked"] if h != main_id]
    return rivals[0] if rivals else None
```

### X.4 `grading/falsify.py` (deterministic tests T1, T5, T6; others follow the same signature)

```python
from statistics import median
from ..schemas import TestResult
def mad(xs): m = median(xs); return median([abs(x - m) for x in xs]) or 1e-9
def t1_peer(hyp, subject_change: float | None, peer_changes: list[float], direction: str) -> TestResult:
    if subject_change is None or len(peer_changes) < 3:
        return TestResult(hyp_id=hyp.hyp_id, test_id="T1", applicable=False, passed=None, detail="fewer than 3 peers")
    z = (subject_change - median(peer_changes)) / (1.4826 * mad(peer_changes))
    signed = z if direction == "up" else -z
    sector_same = all((c > 0) == (subject_change > 0) for c in peer_changes) and abs(z) < 0.5
    passed = signed >= 1.0 and not sector_same
    return TestResult(hyp_id=hyp.hyp_id, test_id="T1", applicable=True, passed=passed,
                      detail=f"robust peer z {z:.2f} vs {len(peer_changes)} peers; sector-wide={sector_same}")
def t5_season(hyp, yoy_same_quarter: list[float], direction: str) -> TestResult:
    if len(yoy_same_quarter) < 2:
        return TestResult(hyp_id=hyp.hyp_id, test_id="T5", applicable=False, passed=None, detail="not quarterly")
    agree = sum(1 for v in yoy_same_quarter[-4:] if (v > 0) == (direction == "up"))
    return TestResult(hyp_id=hyp.hyp_id, test_id="T5", applicable=True, passed=agree >= 3 or agree == len(yoy_same_quarter[-4:]),
                      detail=f"{agree} of last {len(yoy_same_quarter[-4:])} same-quarter YoY moves agree")
def t6_persist(hyp, series: list[float], cp_index: int | None, direction: str, dated_event: bool) -> TestResult:
    if dated_event:
        return TestResult(hyp_id=hyp.hyp_id, test_id="T6", applicable=True, passed=True, detail="single dated, anchored event")
    if cp_index is None or cp_index >= len(series) - 1:
        return TestResult(hyp_id=hyp.hyp_id, test_id="T6", applicable=True, passed=False, detail="no change persisting 2+ periods")
    pre = sum(series[:cp_index]) / max(1, cp_index)
    post = series[cp_index:]
    ok = sum(1 for v in post if (v > pre) == (direction == "up")) >= 2
    return TestResult(hyp_id=hyp.hyp_id, test_id="T6", applicable=True, passed=ok,
                      detail=f"{len(post)} periods after the change; pre-change mean {pre:.2f}")
```

### X.5 `events.py` and the SSE endpoint

```python
import asyncio, json, time
from collections import defaultdict
from . import store
class Bus:
    def __init__(self): self.subs: dict[str, list[asyncio.Queue]] = defaultdict(list)
    async def emit(self, run_id: str, type_: str, data: dict):
        seq = store.append_event(run_id, type_, data)            # returns increasing int
        msg = {"seq": seq, "type": type_, "data": data, "ts": time.time()}
        for q in list(self.subs[run_id]): q.put_nowait(msg)
    def subscribe(self, run_id): q = asyncio.Queue(); self.subs[run_id].append(q); return q
    def unsubscribe(self, run_id, q): self.subs[run_id].remove(q)
bus = Bus()

# main.py
from sse_starlette.sse import EventSourceResponse
@app.get("/api/runs/{run_id}/events")
async def run_events(run_id: str, after: int = 0):
    async def gen():
        for ev in store.events_after(run_id, after):           # replay
            yield {"event": ev["type"], "id": str(ev["seq"]), "data": json.dumps(ev["data"])}
            if ev["type"] in ("done", "error"): return
        q = bus.subscribe(run_id)
        try:
            while True:
                ev = await q.get()
                yield {"event": ev["type"], "id": str(ev["seq"]), "data": json.dumps(ev["data"])}
                if ev["type"] in ("done", "error"): return
        finally: bus.unsubscribe(run_id, q)
    return EventSourceResponse(gen(), ping=15)
```

### X.6 `pipeline/run.py` (stage orchestration with budgets)

```python
import asyncio, time, uuid
from . import resolve, discover, connect, calculate, reason, challenge, prove
from ..events import bus
from ..config import settings
from .. import store
STAGES = [("Discover", discover.run, 50), ("Connect", connect.run, 120), ("Calculate", calculate.run, 15),
          ("Reason", reason.run, 40), ("Challenge", challenge.run, 110), ("Prove", prove.run, 40)]
async def run_pipeline(query: str, as_of=None, disable_challenge=False) -> str:
    run_id = uuid.uuid4().hex[:12]
    ctx = await resolve.run(query, as_of)                     # identity, playbook, peers, as_of
    ctx.run_id = run_id; store.create_run(ctx)
    asyncio.create_task(_drive(ctx, disable_challenge))
    return run_id
async def _drive(ctx, disable_challenge):
    t0 = time.perf_counter()
    try:
        for name, fn, budget in STAGES:
            if name == "Challenge" and disable_challenge: continue
            remaining = settings.run_hard_cap_s - (time.perf_counter() - t0) - (40 if name != "Prove" else 0)
            if remaining <= 5 and name != "Prove":
                ctx.partial = True; continue
            await bus.emit(ctx.run_id, "stage", {"stage": name, "state": "start"})
            s = time.perf_counter()
            try:
                await asyncio.wait_for(fn(ctx), timeout=max(5, min(budget * 2, remaining)))
            except asyncio.TimeoutError:
                ctx.partial = True; await bus.emit(ctx.run_id, "stage", {"stage": name, "state": "timeout"})
            await bus.emit(ctx.run_id, "stage", {"stage": name, "state": "end", "ms": int((time.perf_counter() - s) * 1000)})
        report = ctx.to_report(runtime_s=time.perf_counter() - t0)
        store.save_report(report)
        await bus.emit(ctx.run_id, "done", {"run_id": ctx.run_id, "runtime_s": round(time.perf_counter() - t0, 1)})
    except Exception as e:                                      # never leave the UI hanging
        store.mark_failed(ctx.run_id, str(e))
        await bus.emit(ctx.run_id, "error", {"message": str(e)[:300]})
```
`ctx` is a `RunContext` dataclass in `pipeline/context.py` holding: identity, playbook, peers, as_of, documents,
facts, events, metrics, anomalies, angles, hypotheses, tests, ach, contradictions, discovery, trace, partial flag, and
`to_report()` that assembles `schemas.Report`. Each stage module exposes `async def run(ctx) -> None` and only mutates
its own fields.

Point-in-time rule inside every stage: any `Document` or `Event` with `published_at`/`date` later than `ctx.as_of` is
ignored; prices are cut at `as_of`; GDELT/RSS queries pass `enddatetime=as_of`.

### X.7 `model/collect_outputs.py` (eval → model_outputs.json; the only path for deck/PDF numbers)

```python
import json, csv, hashlib, pathlib, statistics, sys
CODE = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits")
OUT = CODE / "engine" / "eval" / "out"
HERE = pathlib.Path(__file__).resolve().parent
def pct(x, d=0): return f"{x*100:.{d}f}%"
def mmss(s): s = int(round(s)); return f"{s//60} min {s%60:02d} s"
S = json.loads((OUT / "summary.json").read_text(encoding="utf-8"))
rows = list(csv.DictReader(open(OUT / "runs.csv", encoding="utf-8")))
O = {
  "n_companies": S["n_companies"], "n_n50": S["n_n50"], "n_tb": S["n_tb"],
  "hyp_total": S["hypotheses_total"], "killed_total": S["killed_total"],
  "kill_rate": pct(S["kill_rate"]), "anchor_precision": pct(S["anchor_precision"], 1),
  "median_runtime": mmss(S["median_runtime_s"]), "p90_runtime": mmss(S["p90_runtime_s"]),
  "med_origins": S["median_independent_origins"], "company_share": pct(S["company_evidence_share"]),
  "origin_mix": S["origin_mix"], "stage_secs": S["stage_median_s"],
  "ablation_overturned": S.get("ablation_overturned", 0),
  "tt_hold_rate": pct(S["tt_hold_rate"]) if S.get("tt_hold_rate") is not None else "n/a",
  "median_lead_days": S.get("median_lead_days", "n/a"),
  "eval_rows": [[r["company"], r["playbook"], r["angle"], r["label"], r["strength_total"], r["origins"],
                 f'{r["killed"]}/{r["hypotheses"]}', mmss(float(r["runtime_s"]))] for r in rows],
  "demo": json.loads((OUT / "featured.json").read_text(encoding="utf-8")),   # written by eval/summarize.py per §7.1 rule
}
if "--audit" in sys.argv:
    O["components"] = json.loads(pathlib.Path(sys.argv[sys.argv.index("--audit") + 1]).read_text(encoding="utf-8"))
    O["status_counts"] = {k: sum(1 for c in O["components"] if c["status"] == k.upper()) for k in ("live", "wired", "planned")}
blob = json.dumps(O, ensure_ascii=False, indent=1, sort_keys=True)
(HERE / "model_outputs.json").write_text(blob, encoding="utf-8")
print("hash", hashlib.sha1(blob.encode()).hexdigest()[:10])
```
(`model_tables.md` is written by a sibling function in the same script: T1 from the metric registry, T2 from runs.csv,
T3 from timetravel.csv, T4 ablation, T5 sources by origin. Each table has a `Source:` line.)

### X.8 `deck/slides/s01.js` (complete; other slides follow the same conventions)

```js
{ const s = await figma.getNodeByIdAsync("S1"); wipe(s); coverTop(s);
nm(TL(s,64,156,80,"FINDING THE",{family:"Poppins",style:"ExtraBold",maxW:1100,min:60}),"TITLE");
nm(TL(s,64,276,80,"NEXT SIGNAL",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:1100,min:60}),"TITLE 2");
nm(T(s,64,404,1100,26,"An autonomous research agent for Track D: Pharma and Healthcare",{family:"Poppins",style:"Bold",color:C.primaryDeep}),"SUBTITLE");
const v=layered(s,64,460,1100,236,C.primaryDeep,"CARD: verdict",C.primary);
T(v,28,18,1044,26,"OUR ANSWER: COMPUTE FIRST, LOOK OUTSIDE THE COMPANY, AND TRY TO KILL EVERY HYPOTHESIS BEFORE REPORTING IT.",{family:"Poppins",style:"Bold",color:C.white});
T(v,28,112,1044,22,"Next Signal reads exchange filings, USFDA records, peers and market data, computes what changed and when, tests each idea against its strongest rival, and reports only what survives, with a verbatim source behind every number.",{color:C.accent});
nm(TL(s,64,712,28,V.team.name,{color:C.primary}),"TEAM LABEL");
teamBT(s,64,752,[300,520,280]);
T(s,64,974,1100,22,"Prepared for Finding the Next Signal, ATMOS 2026, BITS Pilani Hyderabad Campus",{family:"Inter",style:"Bold",color:C.primaryDeep});
const pm=panel(s,1200,160,656,836,"ONE COMPANY, FOUR KINDS OF EVIDENCE",{fill:C.tint,layered:true});
T(pm,16,58,624,22,"A discovery has to survive evidence from outside the company, not just inside it.",{family:"Inter",style:"Bold"});
const HUB=[328,404];
[[161,164],[495,164],[161,568],[495,568]].forEach(q=>addDiagonalWire(pm,HUB[0],HUB[1],q[0],q[1],C.ink,2.5));
dashedV(pm,328,490,194,C.primary,2.5); dashedH(pm,60,684,536,C.primary,2.5);
[60,194,328,462,596].forEach(cx=>dashedV(pm,cx,684,12,C.primary,2.5));
node2(pm,16,128,290,72,"THE COMPANY","filings, calls, reports");
node2(pm,350,128,290,72,"THE REGULATORS","USFDA, Orange Book");
node2(pm,16,532,290,72,"THE MARKET","prices and reactions");
node2(pm,350,532,290,72,"PEERS AND PRESS","ratings, rivals, news",{fill:C.accentTint});
logoSlot(pm,16,210,90,60,"NSE"); logoSlot(pm,114,210,90,60,"BSE");
logoSlot(pm,350,210,110,60,"USFDA");
logoSlot(pm,16,614,110,60,"Upstox"); logoSlot(pm,134,614,110,60,"Angel One");
logoSlot(pm,350,614,90,60,"CRISIL"); logoSlot(pm,448,614,66,60,"ICRA"); logoSlot(pm,522,614,66,60,"CARE");
addEllipse(pm,HUB[0]-86,HUB[1]-86,172,172,C.primaryDeep,C.ink,2.5);
addText(pm,"Poppins","Bold",22,C.white,"NEXT SIGNAL",HUB[0]-80,HUB[1]-40,160,36,"CENTER","CENTER");
addText(pm,"Inter","Bold",22,C.primary,"Track D",HUB[0]-80,HUB[1]+4,160,30,"CENTER","CENTER");
[["Sun Pharma","PHARMA"],["Cipla","PHARMA"],["Dr. Reddy's","PHARMA"],["Apollo","HOSPITAL"],["Max Healthcare","HOSPITAL"]].forEach((c,i)=>{ const cx=60+i*134;
  logoSlot(pm,cx-62,696,124,50,c[0]); TL(pm,cx-62,752,22,c[1],{family:"Inter",style:"Bold",color:c[1]==="PHARMA"?C.ink:C.primary,maxW:124}); });
fine(pm,16,800,624,"Logos mark data sources and the Track D companies; no partnership is implied.");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,"Source: ATMOS 2026 participant brief | NIFTY 50 constituents, NSE Indices, Sep 2026 | Team IdeaForge research and engine "+V.hash);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
Notes: the hub/node geometry is BeyondTech's verified layout; the mock run in D1 must show `ISSUES 0`. If the node
subtitle "USFDA, Orange Book" or labels overflow in mock, shorten text, never shrink below 22 pt (`fine()` is 16 pt and
is exempt as fine print by name).

### X.9 `scripts/copy-lint.mjs` (web)

```js
import { readFileSync, readdirSync, statSync } from "node:fs"; import { join } from "node:path";
const BAN = ["delve","tapestry","game-changer","revolutioni","cutting-edge","seamless","leverage","unlock","empower",
  "in today's","it's important to note","in conclusion","holistic","synergy","paradigm","imagine","what if","let's",
  "groundbreaking","state-of-the-art","supercharge","harness","elevate","journey","world-class","next-gen"];
const hits = []; const walk = d => readdirSync(d).forEach(f => { const p = join(d, f);
  if (statSync(p).isDirectory()) return walk(p); if (!/\.(tsx|ts|mdx)$/.test(p)) return;
  const src = readFileSync(p, "utf8");
  const strings = [...src.matchAll(/(["'`])((?:(?!\1)[^\\]|\\.){3,})\1/g)].map(m => m[2])
    .concat([...src.matchAll(/>([^<>{}]{3,})</g)].map(m => m[1]));
  for (const s of strings) { const low = s.toLowerCase();
    if (/[\u2014\u2013]/.test(s)) hits.push([p, "dash", s.slice(0, 60)]);
    if (/[A-Za-z]!(\s|$)/.test(s)) hits.push([p, "exclamation", s.slice(0, 60)]);
    for (const b of BAN) if (low.includes(b)) hits.push([p, "banned:" + b, s.slice(0, 60)]); } });
walk("src"); console.log("copy hits:", JSON.stringify(hits)); process.exit(hits.length ? 1 : 0);
```
(Class names and code identifiers can trigger false positives such as "harness" in an import path; add a
`// copy-lint-ignore` comment convention on such lines and skip them.)

---

## END OF PLAN


