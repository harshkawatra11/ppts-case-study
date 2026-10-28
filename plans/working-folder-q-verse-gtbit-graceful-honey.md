# Q-VERSE '26 (GTBIT) — Topic Research + Research-Support Plan

Working folder: `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\q-verse-gtbit\`
Case document (read in full): `q-verse-gtbit\QVERSE26_Guidelines_SOP.pdf` (13 pages)

---

## 0. Context and the one hard boundary

Q-VERSE '26 is a research-paper challenge run by Quantum Quorum (Physics Society, GTBIT). The flow is: abstract (500–800 words) → shortlist → mentorship → full paper (3,000–5,000 words, APA 7, TNR 12 pt, 1.5 spacing, A4, 1-inch margins, justified) → similarity report (<10% excluding references) + AI-detection report (**0% AI**) + max-12-slide PPT → 8–10 min talk + 3–5 min Q&A.
Judging weights: Originality 20 · Problem & Objectives 15 · Methodology 20 · Analysis & Results 20 · Presentation 10 · Q&A 15.

**SOP §7, AI Usage Rule (verbatim intent):** generative AI must not be used to generate or substantially write the abstract, paper, analysis, conclusions, figures, or any other substantive academic content, "no exceptions, including for grammar or language correction". AI must not fabricate references, generate findings, or manipulate data.

The user says they have verified this is allowed. The SOP text has no exception, so this plan does **not** include:
- any agent writing the abstract, paper prose, results, conclusions, or captions meant for submission;
- any agent generating the paper's analysis outputs or figures;
- any "humanising" or rewriting meant to bring an AI-detector score to 0%.

If the user gets **written** confirmation from the organising committee that overrides §7 for specific kinds of help, they can share it and the plan gets revised to match what it permits. Until then, every agent in this plan produces **research-support material only**: assessments, source maps, data inventories, method options, checklists, question banks, and empty templates. The user decides, analyses and writes.

The deck (Phase F) is deferred, as the user asked. It is built only from the user's finished paper, and only after the committee confirms that design help on the PPT is allowed.

### Standing rules every subagent must follow
1. **No AI-written submission content.** Outputs are notes for the user. Never write paragraphs styled as paper sections. Use bullets, tables and questions instead.
2. **No fabricated sources.** Every reference must be opened with WebFetch (or found via WebSearch) and checked: title, authors, year, venue, DOI or URL. Record `verified: yes, <date>` next to each one. If a source cannot be opened, mark it `UNVERIFIED — do not cite`.
3. **No invented numbers.** Every figure carries its source ID. Where data is simulated (e.g. SwasthyaGrid seed data), label it SIMULATED.
4. **No invented names.** Use the project's own names (SuryaSetu, UrjaGrid, SwasthyaGrid, Adhikaar, PUNARdhatu, NavSight). Do not coin new labels. (From user memory: `feedback_no_invented_names.md`.)
5. **No em dashes in user-facing prose,** and no rhetorical hooks (user memory: `feedback_no_em_dash_no_hooks.md`). Tables and headings may use plain hyphens.
6. **Read only from project folders.** Write only under `q-verse-gtbit\research\`. Never edit the source projects.
7. Use `case-competition-deck` skill references where this plan names them (see §1). Do not run the skill's deck-generation mode before Phase F.
8. Windows paths. Project folders contain spaces (e.g. `ai-healthcare platform`), so quote them. Avoid recursive search over `C:\Users\harsh\Desktop\HARSH` (it timed out because of `node_modules`). Search inside the named folders only, and exclude `node_modules`, `.next`, `.git` and `__pycache__`.

---

## 1. How the `case-competition-deck` skill is used (and not used)

The skill lives at `.claude/skills/case-competition-deck/` (entry point `SKILL.md`). It is calibrated on business case competitions, not research papers. Map it as follows:

| Plan phase | Skill file | How to use it |
|---|---|---|
| A (topic scoring) | `references/critique_rubric.md` | Borrow its scoring discipline (score each criterion with evidence, no unsupported scores). Replace its criteria with the Q-VERSE judging weights. |
| A, B (framing the gap) | `SKILL.md` contrarian-recommendation pattern | Use it to pick the **research hypothesis that cuts against the obvious assumption** (e.g. "lead time comes from the Neupert effect" vs "it does not, for weak flares"). This becomes the originality angle, the 20% criterion. |
| B (method options) | `references/frameworks.md` | Only for interdisciplinary topics (Adhikaar policy, SwasthyaGrid operations). Pull named analytical frameworks as candidate lenses. |
| B | `references/case_types/policy_and_trade.md` (Adhikaar), `operations.md` (SwasthyaGrid, UrjaGrid), `social_impact.md` | Use these for the context and stakeholder angle only. |
| F (deck, deferred) | `SKILL.md` + `structure.md` + `rhetoric.md` + `archetypes.md` | Action titles, one moneyshot, foreshadowing. Map the 8-section blueprint onto the SOP §8 required slide content (problem and motivation, objectives, methodology, results, findings, conclusion, future scope) within 12 slides. Then render via this repo's CLAUDE.md Figma workflow and `deck-system/`. |
| F | `references/critique_rubric.md` | Score the finished deck before submission. |

Each subagent prompt must name the exact skill file(s) to read for that phase.

---

## 2. Candidate inventory (already surveyed; facts below are verified from the files)

| ID | Project | Path | Real data or code on disk | Best theme | Physics-jury fit |
|---|---|---|---|---|---|
| C1 | **SuryaSetu**: solar-flare early warning from Aditya-L1 | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\isro-hackathon\` | **Real** SoLEXS L1 data `AL1_SLX_L1_20260615_v1.0\` (+zip), `solexs_sample.json`, `heliograph\`, `answers.md`, brainstorming logs, ISRO BAH 2026 PS-15 idea submission | 1 or 5 | Highest |
| C2 | **UrjaGrid**: demand response vs transformer thermal stress under renewable intermittency | `WEB-DEV-PROJECTS\yuvayodha-hack\`, `nsut-innovators-court\yuva-yodha\` | Grid modules (powerflow, thermal, forecaster, optimizer, fairness), LightGBM P10/P50/P90 + conformal, seed network, 3 weather scenarios, `urjagrid_impact_model.py` | 3 | High |
| C3 | **SwasthyaGrid**: forecasting essential-medicine stock-outs + lateral transfers in Rajasthan PHC/CHCs | `WEB-DEV-PROJECTS\ai-healthcare platform\` (backend `app\services\forecast_service.py`, `recommendation_service.py`, `backend\data\`, `backend\evals\`, `docs\06-forecasting.md`, `docs\07-recommendation-engine.md`, `docs\v2-reports\final-audit.md`); deck work in `nsut-innovators-court\swasthyagrid-gcp\` (`case\02-facts.md` source register S01–S15, `model\impact_model.py`) | Code is real, but **operational data is SIMULATED** (40 facilities, 5 districts). Forecasts are deterministic mocks (`docs\06-forecasting.md`). Real routes come from OSRM. Real literature sources are in `02-facts.md` S01–S15. | 2 or 5 | Low–medium |
| C4 | **Adhikaar**: RTI jurisdiction misrouting (Union/State, Seventh Schedule) | `WEB-DEV-PROJECTS\adhikaar\` (`README.md`, `eval\dolr-gold-set.json` = 220 real records `{regNo,state,outcome,content}`, `eval\run.ts`, `docs\design\PRD.md`, `TDD.md`, `AUDIT.md`) | **Real primary-source data:** DoLR section-4 RTI register, 3,128 applications, 2,797 returned. A deterministic classifier with a published eval (59.5% State subject, 56.4% land, 33.2% abstain, remedy 99.5%). | 5 (Law × CS × Public policy) or 2 | Low (not physics), but the strongest original dataset |
| C5 | **PUNARdhatu**: Fe/Sc recovery from red mud | `nsut-innovators-court\fugacity-pitch\research.md` | Research document only | 4 or 3 | Medium |
| C6 | **NavSight**: ultrasonic/laser hazard sensing for the visually impaired | `nsut-innovators-court\navsight-ppt\` | Build guide and photos, no firmware or measurements | 4 | Medium (needs bench data) |
| C7 | Fresh-topic scout | n/a | n/a | any | Must fit ECE + ML skills (CV: DTU B.Tech ECE 2025–29) |

Secondary items the topic agent may mention but not develop: StockSense (`WEB-DEV-PROJECTS\stocksense`, 2.3 GB data, finance), Parakh (`WEB-DEV-PROJECTS\iitd-hack\parakh-iitd-hack`), KHELurja (`nsut-innovators-court\soch`), matlab labs (`C:\Users\harsh\Desktop\HARSH\matlab`).

**Prior-presentation risk (SOP §10, FAQ "existing college project"):** C1–C4 were all shown at hackathons. A Q-VERSE paper on any of them must (a) disclose the earlier hackathon presentation and (b) contain substantially new research: a new question, new analysis, new results. Phase A must state the "new research delta" for each candidate.

---

## 3. Phase A — Topic assessment (run now; Sonnet subagents)

**Goal:** a decision document that lets the user pick one topic, with evidence for each score.
**Output:** `q-verse-gtbit\research\A-topic-assessment.md` plus one file per candidate, `research\A-candidates\C<n>-<slug>.md`.

### A.1 Dispatch: 4 parallel Sonnet subagents (general-purpose), one bundle each
- Agent A1: C1 SuryaSetu + C6 NavSight (the physics/ECE pair)
- Agent A2: C2 UrjaGrid + C5 PUNARdhatu (energy/materials)
- Agent A3: C3 SwasthyaGrid + C4 Adhikaar (data/policy)
- Agent A4: C7 fresh-topic scout (3 topics max, physics-flavoured, ECE+ML-feasible, with open public data)

Give every agent prompt: this plan's §0 standing rules, §1 skill row for Phase A, the candidate rows from §2, and the template below.

### A.2 Per-candidate dossier template (each agent fills it exactly; bullets and tables only)
```
# C<n> <Project name>
## 1. Assets on disk
| File/folder | What it contains | Size/rows | Real or SIMULATED |
(open and inspect; for data files report schema, row counts, date range)
## 2. Candidate research questions (exactly 3)
For each: RQ in one line | type (computational / data analysis / simulation / comparative / systematic review) | the contrarian angle (case-competition-deck SKILL.md) | dependent and independent variables
## 3. Literature gap scan
- 8–15 real papers found via WebSearch, each opened via WebFetch
| # | APA 7 reference | DOI/URL | verified (date) | what it found | how our RQ differs |
- One-line gap statement per RQ (a note for the user, not paper prose)
## 4. Data and method feasibility
| Need | Available? (on disk / public source with URL / must collect) | Effort (days) | Risk |
- Public datasets to check, with direct URLs (examples: ISSDC PRADAN for Aditya-L1 SoLEXS/HEL1OS; GOES XRS via NOAA NCEI; NOAA SWPC flare event lists; NASA POWER / PVGIS; data.gov.in HMIS; CEA/POSOCO grid data; CIC/DoLR RTI disclosures)
- Tools needed (python libs etc.), compute needs
## 5. New-research delta vs the hackathon version
- what existed before | what would be new | disclosure line needed
## 6. Q-VERSE score (0–10 each, with one evidence line per score)
| Criterion (weight) | Score | Evidence |
Originality 20 · Problem 15 · Method 20 · Analysis 20 · Presentation 10 · Q&A defensibility 15 → weighted total /100
Plus unweighted flags: physics-jury fit (H/M/L), data risk (H/M/L), time-to-results (weeks)
## 7. Hardest 5 judge questions and whether we could answer them
```

### A.3 Candidate-specific instructions (so agents do not have to think)
- **C1 SuryaSetu:** unzip/inspect `AL1_SLX_L1_20260615_v1.0` read-only (list the `.lc`, `.pi`, `.gti` files and FITS headers with `astropy.io.fits` run as `python -I`). Report the time range, channels and cadence. Check on PRADAN whether HEL1OS hard X-ray data exists for the same day (the Neupert test needs a hard X-ray channel; otherwise cross-instrument use with GOES XRS or Fermi GBM). Literature: Neupert 1968; Dennis & Zarro 1993; Veronig et al. 2002 (Neupert effect statistics); flare forecasting skill-score papers (TSS, Brier skill score). Candidate RQs to evaluate: (i) Neupert-effect validity for Aditya-L1 SoLEXS vs GOES; (ii) derivative-based soft X-ray precursor lead time across flare classes; (iii) cross-calibration of SoLEXS vs GOES XRS fluxes.
- **C6 NavSight:** check `navsight-ppt` for any measurement data. If none, score data risk H. RQ options: ultrasonic time-of-flight error vs temperature and humidity (speed-of-sound model), beam-cone coverage geometry, crosstalk among 3 transducers. Experiment needs a bench rig.
- **C2 UrjaGrid:** run the existing test suite read-only, if a venv exists (report the command and result, change nothing). Map the existing modules to RQs: (i) trip rate vs demand-response compliance curve; (ii) whether conformal P90 bands reduce thermal violations vs point forecasts; (iii) a fairness vs energy-not-served Pareto frontier. Literature: IEEE C57.91 / IEC 60076-7 transformer thermal ageing, conformal prediction for load forecasting, DR fairness.
- **C5 PUNARdhatu:** read `fugacity-pitch\research.md`. Check which assays and recovery yields are sourced. RQ: mass and energy balance plus CO2 sensitivity of a Fe/Sc recovery route. Note that no lab data exists, so this would be a model-based study.
- **C3 SwasthyaGrid:** read the README, `docs\06-forecasting.md`, `07-recommendation-engine.md`, `docs\v2-reports\final-audit.md`, `backend\evals\`, `swasthyagrid-gcp\case\02-facts.md`, `model\impact_model.py`. State plainly that operational data is SIMULATED, so a paper on the app's results is weak. Viable RQs only if real data exists: (i) a simulation study of lateral-transfer vs warehouse-refill policies under stochastic demand calibrated to published availability figures (S02–S04); (ii) forecasting stock-outs on real HMIS data (check data.gov.in HMIS facility-level availability and granularity); (iii) road-network (OSRM) vs straight-line distance error in facility-access models for Rajasthan. Score physics fit L.
- **C4 Adhikaar:** read the README, `eval\dolr-gold-set.json` (220 records), `eval\run.ts`, `docs\design\*.md`. Locate the full 3,128-record register source (README/Methodology page; check `docs`, `scripts`, `public`). Report outcome distribution by state and year (counts only, as notes). RQs: (i) how large jurisdictional misrouting is, and its patterns, in central RTI filings (descriptive plus text analysis); (ii) accuracy of a rule-based Seventh Schedule classifier vs a baseline ML text classifier on the gold set (the user would build and run this); (iii) whether misrouting can be predicted from application text before filing. Literature: CIC annual reports, RTI studies (e.g. RaaG/SNS "Tilting the Balance" assessments), legal-NLP jurisdiction classification. Note the physics-society jury risk; Theme 5 is a legitimate home.
- **C7 scout:** propose up to 3 topics with open data, for example: an ML-free physics baseline vs a LightGBM short-term solar PV forecast for Delhi using NASA POWER + PVGIS (the SOP's own example topic, so flag it as low-originality); urban heat island from Landsat LST vs Delhi ward data; ionospheric TEC disturbance during solar flares from IGS GNSS data (this links to C1). Use the same template, shorter.

### A.4 Synthesis (one Sonnet agent, after A1–A4 finish)
- Builds `A-topic-assessment.md`: a ranked table of all candidates (weighted score, physics fit, data risk, weeks to results, prior-presentation delta), a top-3 shortlist with one paragraph of *reasoning notes* each, and a one-line verdict.
- Adds a "combination" check: whether two candidates can be joined in a way that is honest (e.g. C1 + C7 TEC). Do not force it.
- Must not write an abstract. It may list the 7 abstract sections the SOP requires (§4) with the key facts the user would need for each.

**User decision gate A:** the user picks the topic and RQ. Nothing after this point starts without that choice.

---

## 4. Phase B — Research dossier for the chosen topic (Sonnet agents, support only)

Output folder: `q-verse-gtbit\research\B-dossier\`

| File | Contents | Agent |
|---|---|---|
| `B1-literature-map.md` | 30–50 verified references grouped by sub-question. Each row: APA 7 entry, DOI, verified date, key finding (one line), relevance. Plus a "must-read top 10" in reading order. Every DOI is checked via `https://doi.org/<doi>` WebFetch. | B-lit |
| `B2-data-inventory.md` | Every dataset: URL, licence, access steps (exact clicks/API calls), schema, size, time span, known quality issues, a citation string | B-data |
| `B3-method-options.md` | 2–4 alternative methods for the RQ: assumptions, required data, validation metric, a reference paper that used it, pros and cons, failure modes. **The user picks one.** No code that produces results. | B-method |
| `B4-validity-threats.md` | Threats to internal and external validity, confounders, sample-size concerns, what a hostile judge would attack | B-method |
| `B5-glossary-and-equations.md` | Standard textbook equations relevant to the topic (e.g. the Neupert relation, speed of sound vs temperature, IEEE transformer hot-spot equations), each cited to the original source, for the user's own study | B-lit |

Rule for B3: describe methods the way a methods textbook would. Do not run the analysis on the user's data, and do not produce result tables or figures.

**User gate B:** the user chooses the method, then writes and runs the analysis themselves.

---

## 5. Phase C — Formatting template and compliance kit (allowed: no substantive content)

Output: `q-verse-gtbit\research\C-kit\`
1. `paper-template.docx` (built with the `anthropic-skills:docx` skill), or LaTeX `paper-template.tex` if the user prefers. It contains **only** the SOP §5 headings in order (Title, Authors & Affiliations, Abstract, Keywords, Introduction, Literature Review, Research Problem & Objectives, Methodology, Data/Experimental Setup, Results & Analysis, Discussion, Conclusion, Future Scope, References, plus a Disclosure/Acknowledgements line for the prior hackathon and mentors). Settings: TNR 12 pt, 1.5 line spacing, A4, 1-inch margins, justified, numbered figure/table caption styles, APA 7 reference style. Body text is empty placeholders like `[Write here]`, with no prose.
2. `word-budget.md`: a suggested word allocation per section summing to about 4,000 (within 3,000–5,000), and the abstract's 7 required parts (500–800 words).
3. `compliance-checklist.md`: similarity <10% via Copyleaks/Quetext (or Turnitin through DTU's library); an AI report via GPTZero/Copyleaks run by the user on their own writing; authorship (students only, mentors in acknowledgements); a disclosure of the hackathon origin; every figure numbered and captioned; every external figure cited; no AI used on the text, including grammar; all deliverables (paper PDF, two reports, PPT ≤12 slides).
4. `reference-audit.md`: a procedure for the user to verify each citation themselves before submission.

---

## 6. Phase D — Q&A preparation bank (support only)

Output: `research\D-qa-bank.md`. 40 likely judge questions grouped by the SOP §8 Q&A list (significance, methodology choice, data/sources, interpretation, limitations, originality, future scope). For each: what a strong answer must contain (points to cover, not a scripted answer) and which source or step in the user's own work backs it. Built **after** the user's paper draft exists, from the user's own text.

---

## 7. Phase E — Mentorship-phase review support (optional)

On request, an agent may read the user's draft and return a **list of issues**: unclear logic, a claim without a citation, a figure with no caption, formatting deviations, a section the SOP requires that is missing. It must not rewrite sentences or suggest replacement wording. It reports locations and issue types only. Confirm with the committee that this is allowed before using it.

---

## 8. Phase F — Presentation deck (deferred; build only on the user's go-ahead)

Preconditions: the paper is final and written by the user, and the committee has confirmed that design help on the PPT is permitted.
- Run the `case-competition-deck` skill Steps 1–2 on the user's paper. Derive the action titles and the single moneyshot (e.g. a lead-time distribution plot the user made) from the paper's own results.
- Map onto ≤12 slides covering the SOP §8 required content: 1 Title · 2 Problem & motivation · 3 Objectives/RQ · 4 Literature gap · 5 Data · 6 Methodology · 7–8 Results · 9 Key findings (moneyshot) · 10 Discussion & limitations · 11 Conclusion & future scope · 12 References & acknowledgements.
- Render natively in Figma Slides following this repo's `CLAUDE.md` §2–§7 and `deck-system/figma-deck-kit.js` / `slide-archetypes.md`, with the cover-style rule from user memory `feedback_cover_style.md` (no KPI-card row on the cover; a Members | Institution | Role table). Charts are redrawn natively **from the user's own figures and numbers only**. Legibility from a distance (SOP §8) means the 22 pt floor holds.
- A detailed slide-by-slide Figma execution spec gets written as its own plan when this phase is unlocked.

---

## 9. Verification

- Phase A: every candidate file has all 7 template sections filled; every reference row has `verified: yes, <date>` or is marked UNVERIFIED; the weighted totals recompute correctly (a spot-check script over the table).
- Phase B: random 10-reference DOI re-check via WebFetch; every dataset URL opens.
- Phase C: open `paper-template.docx` and confirm font, size, spacing, margins and A4 (docx skill inspection); confirm the body holds placeholders only.
- Throughout: grep outputs for em dashes (`—`) and remove them from user-facing prose. Grep for paragraph-length text under section headings that resemble paper prose, and flag it.
