# Project Setu: execution plan for the LSR "Case for Change" business crisis case

> **Who executes this.** A Sonnet-class main agent plus Sonnet sub-agents dispatched with the Agent tool (`subagent_type: "general-purpose"`, `model: "sonnet"`). The case is already solved in this plan: the recommendation, the model, every slide's code and every number are fixed and have been dry-run. **The job is execution, not design.**
>
> **What this plan produces**, all under `lsr-caseforchange/`: (1) a research deliverable `research/setu-research.md` plus PDF, at least 30,000 words and 70 tables; (2) a turnaround model `model/setu_model.py` with outputs, tables, drills and an Excel workbook; (3) a native Figma Slides deck of exactly 8 slides: 1 cover, 5 core, 1 appendix, 1 thank-you.
>
> **Already verified at planning time (5 Oct 2026):** the model runs and passes its 10 checks (hash `7bf97725b5`); `make_values.py` writes `values.js`; all 8 slide scripts pass the offline mock with `warnings: []` and `ISSUES 0`; `gen.py bind` produces build files under 50,000 characters; `assemble.py pdf` renders a PDF. If a first run does not reproduce these, something was retyped or the environment changed: stop and use section 14.

## 0. How to read this plan

| Part | Sections | What it is |
|---|---|---|
| I | 1 to 2 | Context, deliverables, ground rules |
| II | 3 to 5 | The solved case: argument, locked numbers, assumptions |
| III | 6 to 7 | Research lanes and the research document specification |
| IV | 8 to 11 | Deck specification, skill touchpoints, Figma build, critique |
| V | 12 to 15 | Execution sequence, prompts, recovery, finals pack, final checks |
| VI | 16 to 21 | Embedded files: model, values, preamble parts, slide code, validators, generator, assembly, case brief |

### Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Main agent | Sonnet | Bootstrap, runs every script, every Figma call, assembly, final report | Change a number, a finding sentence or the recommendation |
| Verifiers V-A to V-E | Sonnet, at most three at once | Open the seed sources in section 6, confirm or correct each fact, add up to 10 rows | Invent a figure, write prose, touch the model |
| Writers W-A to W-F | Sonnet, at most three at once | Write their sections into `research/parts/` | Browse the web, change a number, invent an interview |
| Critic CR | Sonnet | Scores the finished deck with the case-competition-deck critique rubric as re-based in section 11 | Edit layout or numbers |

Every Figma call is made by the main agent, one at a time, never in parallel, never delegated.

### The Sonnet execution contract

DO
1. Follow section 12 step by step. Each step has a "Done when" test; do not move on until it passes.
2. Extract files with the bootstrap (12.1). Never retype a code block.
3. Take every number from `model/model_outputs.json`, `model/model_tables.md` or `deck/values.js`.
4. Log each step in `lsr-caseforchange/build-log.md` with STATUS: PASS or FAIL and what was fixed.
5. Invoke the `case-competition-deck` skill at the five touchpoints in section 9 and log each.

DO NOT
1. Do not change the recommendation, the moneyshot, a finding sentence, a panel title or the slide count (8).
2. Do not invent interviews, pilots, client names, letters of intent, quotes or survey results. The Company is fictional and has no primary data. The validation plan in the research document is a plan, and says so.
3. Do not write an em dash, an en dash, a hook, a rhetorical question, an exclamation mark or a banned word (section 2.2), in any file or on any slide.
4. Do not set `x` or `y` before `appendChild`, do not rotate rectangles to draw lines, do not hand-write Figma node code outside the extracted slide files.
5. Do not add decoration to fill space. If a slide looks thin, report it.
6. Do not present an assumption as a case fact. Every non-case number carries its tag.
7. Do not commit, push or modify anything outside `lsr-caseforchange/`, except reading `yuva-yodha/deck/`, `mandamasterminds/`, `deck-system/`, `.claude/skills/` and `ppts-inspo/`.
8. Do not use an abbreviation on a slide or in a table without its expansion in fine print under that table or in the appendix abbreviations panel (section 2.3).

---

# PART I. CONTEXT AND RULES

## 1. Context

### 1.1 Why this work exists

The user is entering the "Case for Change" business crisis case competition run by the Economics Department, Lady Shri Ram College for Women (theme: India's $5 Trillion Economy: AI Shaping Human Capital and Future Workspaces). The case file is `lsr-caseforchange/raw casefile.pdf` (2 pages, text only). Its full transcription with cross-reference IDs is embedded in section 21 as `case/01-case-brief.md`. Read it before anything else.

The case in one paragraph: a fictional Indian services firm with 2,400 staff (BFSI document processing, e-commerce catalogue QC, multilingual voice and chat) is being undercut by AI-powered rivals. Revenue run-rate is ₹182 Cr against ₹213 Cr of cost; EBITDA is minus ₹31 Cr; cash is ₹40 Cr, of which ₹15 Cr is an emergency budget and ₹15 Cr must stay in the bank under a term-loan covenant; no new debt or funding; six months of runway. The team must name one primary path out of four (Reskill and Restructure, Get Acquired or Merge, Pivot, Wind Down), or its own, and say what happens to the workforce.

### 1.2 What the organisers ask for (binding)

- Exactly five core slides, excluding title slide and appendix, in this order: D1 Diagnose the Crisis, D2 Quantify the Problem, D3 Choose and Justify a Path, D4 Build the Strategy and Plan, D5 Address the Workforce and Risks.
- Judging: J1 analytical rigour 25%, J2 strategic judgement 25%, J3 workforce and human impact 20%, J4 originality of insight 15%, J5 adaptability 15% (finalists face a new development before presenting).

### 1.3 Decisions the user locked

- Slide count: 1 cover + 5 core + 1 appendix + 1 thank-you = 8.
- Deck is native Figma Slides, 1920 by 1080, dense consulting grade, with tables, bars, lines, waterfalls, heatmaps, a Gantt and a tornado, all native vector nodes.
- Research deliverable has no length limit and should match or exceed the depth of `mandamasterminds/research/satoshi-gate-research.md` (21,109 words, 74 tables). Target here: 30,000 words or more, 70 tables or more.
- Language: professional, humanised analytical storytelling. No hooks, no AI-sounding phrasing, no em dashes.
- Every abbreviation is expanded, either in small print under the table that uses it or in the appendix.
- The `case-competition-deck` skill is used throughout (section 9).

### 1.4 Decisions made at planning time (change only if the user says so)

| Item | Decision | Where to change it |
|---|---|---|
| Programme name | Project Setu (Setu is Hindi for bridge) | `make_values.py`, `s01.js`, `assemble.py` |
| Team | Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader), Dayita Arora (Ramjas College, University of Delhi, Member), Aakriti Aggarwal (MAIMS, Member), changed from the earlier two-person roster on 5 Oct 2026 | `V.team` in `make_values.py`, `HEAD` and the cover line in `assemble.py` |
| Palette | Indigo `#1E3A8A`, deep navy `#0B1437`, amber `#F5B301`, red `#D92D20`, teal `#0E7490`, green `#12805C`, cream background | `deck/_palette.js` |
| Figma file name | `Project Setu | Case for Change | Team IdeaForge` | Step F1 |

If the team differs for this competition, edit the three places above before step M2 and rerun from M2. Nothing else depends on it.

### 1.5 Folder layout after the build

```
lsr-caseforchange/
  raw casefile.pdf            (exists, never modified)
  PLAN.md                     (copy of this plan, made in step B0)
  extract.py                  (bootstrap, step B1)
  build-log.md
  case/01-case-brief.md
  model/setu_model.py  make_values.py  drills.py  build_excel.py
        model_outputs.json  model_tables.md  drills.md  Setu_Model.xlsx
  research/raw/R-A..R-E.md  sources.md
           parts/part-A..F.md  appendix-A.md  appendix-C.md  appendix-D.md
           assemble.py  setu-research.md  setu-research.html  setu-research.pdf
  deck/_palette.js _extras.js _v1.js _sweeps.js gen.py setup.js
       preamble.js mock_figma.js values.js slide-ids.json figma.md
       slides/s01..s08.js   build/slide_01..08.js v1_*.js sweeps.js   shots/s1..s8.png
```

## 2. Ground rules

### 2.1 Content integrity

1. Case facts are never modified. They live in `F` in the model and are tagged `[C K1]`, `[C F3]` and so on in the research document.
2. The case is fictional. Real-world evidence is used only as context for the industry, the law and the technology, never as data about the Company. A real-world figure never replaces a case figure.
3. Every team assumption has an ID (A01 to A21), a value, a rationale and a sensitivity. Every plan lever has an ID (L01 to L12).
4. Statistics stay at the precision the source supports. An unverified seed fact is dropped, not softened.
5. Indian units throughout: ₹, lakh, crore. Indian digit grouping on slides (1,814; 2,400).
6. No fabricated primary research. Section 7 specifies a Validation Plan (who would be interviewed, how many, what question) and it must say that none of it has been run.
7. Legal statements are hedged as "on our reading of the codes; counsel to confirm applicability to a services establishment" and carry their source.
8. If a headline number ever changes, rerun M1 to M4 and rebuild every slide; never patch a number in one place.

### 2.2 Language standard (research document and deck)

- Zero em dashes and en dashes. Use commas, colons, full stops or brackets. The minus sign on slides is U+2212 and is produced by `make_values.py`; do not type it.
- No hooks: no rhetorical question as an opener, no "imagine", no suspense. State the finding.
- No question marks or exclamation marks on slides. In the research document a question mark is allowed only inside a quoted judge question in section 20.
- Banned words and phrases (checked by `assemble.py` and the sweeps): here's, let's, bottom line, delve, game-changer, unlock, it's not just, make no mistake, landscape, robust, seamless, holistic, tapestry, paradigm, navigate the, revolutionise, cutting-edge, leverage, empower, transformative, journey, synergy, world-class, best-in-class, next-gen, reimagine, supercharge, harness, crucial, pivotal, furthermore, moreover, in today's, ever-evolving, imagine if.
- Register: first person plural, declarative, short sentences, a number in most sentences, the reasoning shown. Write as a consultant writes a board memo: what we found, why it matters, what we would do, what could prove us wrong.
- Headings in the research document are action titles: a finding after a colon, with a number where one exists.

### 2.3 Abbreviations rule (user instruction, binding)

- On slides: every table or chart that uses an abbreviation has a `fine(...)` line beneath it (16pt, node name `FINEPRINT`) or the term is expanded in the appendix panel "ABBREVIATIONS USED IN THIS DECK" on slide 7. Both exist in the slide code already. Do not remove them.
- In the research document: expand on first use in each section, and list every abbreviation in Appendix C with its meaning as used in this document. Any table that uses abbreviated column heads carries an italic line directly under it expanding them, for example a responsibility matrix carries "R: responsible, does the work. A: accountable, one per row. C: consulted before. I: informed after."

### 2.4 Standing memory rules that apply

- No KPI-card row on the cover; team shown in a Team Members, Institution, Role table; the same table repeats on the thank-you slide. Already built into `s01.js` and `s08.js`.
- No Co-Authored-By trailer if anything is ever committed. Nothing is committed in this job.
- Density: 4 to 6 distinct visual forms per core slide, zero dead space. Measured at planning time in the mock: nodes per slide S1 106, S2 223, S3 201, S4 296, S5 362, S6 250, S7 178, S8 50.

### 2.5 Files to read before starting (main agent)

1. This plan, fully.
2. `CLAUDE.md` at the repo root, sections 1, 2, 5, 6 and 7.
3. `.claude/skills/case-competition-deck/SKILL.md` (via the Skill tool, not the Read tool).
4. `mandamasterminds/research/satoshi-gate-research.md` lines 1 to 160 and 1118 to 1260, to see the register, the tag system and the assumptions register being matched.
5. `yuva-yodha/deck/build-log.md`, to see what a finished build log looks like.

---

# PART II. THE SOLVED CASE

## 3. The argument

### 3.1 Case type and how the skill is applied

This is a hybrid: a strategy case (respond to a disruptor) with a restructuring-finance spine (runway, covenant, wind-down waterfall) and a social-impact lens (the workforce is 20% of the score and "non-negotiable"). The `case-competition-deck` skill has guides for strategy, operations and social impact, and nothing on turnarounds, covenants or liquidation. The 13-week style cash model, the covenant test and the dues waterfall are supplied by this plan's model. Say so in the research document, section 0, as the skill's own calibration note requires.

The skill's 8-section logic is compressed onto the five mandated slides:

| Skill section | Lives on | How |
|---|---|---|
| Executive summary, two-column for and against | Cover thesis card and slide 4 | Recommendation in one sentence on the cover; "why not the standard routes" panel on slide 4 |
| Context and the seed slide | Slide 2 | Last panel, "THE GAP AI LEAVES OPEN", names the gap without naming the answer |
| Actors, symmetric treatment | Slide 2 rivals table, slide 4 route heatmap | Same columns for every rival; same six tests for every route |
| Quantitative analysis | Slides 3 and 5 | Unit economics, workforce-cost model, three scenarios |
| Feasibility of the obvious answer | Slide 4 | Cash paths of each route against the covenant line |
| The moneyshot | Slide 4, left card | 1,814 of 2,400 jobs, no forced exit, cash floor ₹21.1 Cr |
| Recommended alternative and implementation | Slide 5 | Gantt, budget, gates |
| Section closer ("conclusively") and final synthesis ("therefore") | So-what bars of slides 4 and 6 | Double synthesis, no new content |
| Appendix, defensive depth | Slide 7 and the research document | Assumptions, tornado, fallbacks priced, abbreviations, sources |

### 3.2 The recommendation (contrarian pattern)

**Obvious answers and why each fails**

| Route | The obvious version | Why it fails on the case's own numbers |
|---|---|---|
| Path 1 as written | Reskill everyone to work with AI, keep every line | The incumbent already does this and its cost is ₹28 a file, above the AI-native price of ₹27. Reskilling 2,340 people costs about ₹10.5 Cr in four months. Modelled covenant breach: month 4 |
| Path 2 | Sell to the AI-native firm now | Enterprise value of 0.20 to 0.50 times revenue gives owners about ₹12 to 60 Cr, the buyer needs perhaps 500 to 1,200 of 2,400 people, and the Company has no control over who stays. A sale process takes about as long as the runway |
| Path 3 | Exit the old lines, bet on a new AI service | Needs about ₹145 Cr of new revenue within a year from a standing start. Modelled covenant breach: month 4 |
| Path 4 | Close with fair severance | Statutory dues are about ₹51 Cr (₹2.13 lakh a head). Cash is ₹40 Cr and the lender is owed ₹40 Cr. On assumed receivables, 54% of dues and debt can be met today, 23% by month 6. It is not the safe option it looks like |

**The recommendation.** Primary path: **Path 1, Reskill and Restructure, rebuilt as Project Setu**: restructure first, then reskill into the work AI cannot do. It borrows one idea from Path 2 (license an AI engine, do not sell the company), one from Path 3 (build an AI data services line, funded by milestones, not a leap) and prices Path 2 as the fallback and Path 4 as the floor.

The six moves:
1. **Stop the bleed (month 1).** Hiring freeze; the 624 people who leave in a normal year are no longer replaced. Leadership pay cut 25% for 12 months. Overhead cut 25% then 40% on selling and general costs.
2. **Price by complexity (months 2 to 4).** One ₹38 price hides two products. Clean files go to ₹31, hard files (handwritten, regional-language) to ₹48. The client's blended bill falls about 5%, from ₹38 to ₹36.1, while the Company's blended margin moves from minus ₹3.2 to plus ₹7.1 a file.
3. **AI engine on clean files (months 3 to 9).** A licensed document AI engine at ₹8 a file with humans verifying one file in five. Migration is paced at 20, 40, 55, 70, 80, 90, 100% so that freed people have somewhere to go.
4. **Hard-file desk.** The 420 exception handlers plus upskilled processors, AI-assisted (45% more files a person), sold at ₹48. This is the one thing the AI-native firm is weak at and the incumbent cannot price.
5. **AI data services.** The voice AI start-up needs labellers; the Company has multilingual staff in five cities. Ramp 30 people in month 2 to 400 in month 12 at ₹63,000 revenue a head a month.
6. **Hold a reserve for people.** Only ₹8.9 Cr of the ₹15 Cr budget is deployed. ₹6.1 Cr is ring-fenced for severance if a gate fails.

Catalogue QC is kept as a **holding line**: it earns almost no contribution but keeps about 500 people employed and paid by clients while data services ramps and attrition works. It shrinks only as fast as people have somewhere to go.

**Three reasons each side** (for the research document, section 2, and Q and A):

| Side | Quantitative | Strategic fit | Feasibility |
|---|---|---|---|
| Not the standard paths | Paths 1 and 3 as written breach the covenant in month 4; drift in month 6 | Matching AI on clean files is a price war against a rival with ₹18 of margin | A wind-down cannot pay its own dues; a sale gives away the workforce decision |
| Setu | Cash never below ₹21.1 Cr; EBITDA positive in month 8; ₹8.4 Cr run-rate at month 12 | Uses the three clues in the case: AI weak on hard forms, start-up needs labellers, 420 exception handlers | ₹8.9 Cr of one-offs inside a ₹15 Cr budget; no forced exit; four cash gates |

### 3.3 The nine insights (J4, originality)

Each is derivable from the case table. Tag shows what it rests on.

| # | Insight | Rests on |
|---|---|---|
| 1 | The six months run to the ₹15 Cr covenant, not to zero. With flat revenue the breach is month 9; the case's six months implies revenue is still falling about 2.4% a month, which matches the 2.9% a month seen between FY25 and the run-rate | Case + A01, A02 |
| 2 | Of ₹40 Cr, ₹15 Cr is the covenant floor and ₹15 Cr the emergency budget. Free buffer is ₹10 Cr, 3.9 months of today's burn | Case |
| 3 | Neither cost base flexed. Payroll is ₹144 Cr, the same as FY24. Other cost is ₹69 Cr, the same as FY23. 95% of the ₹80 Cr revenue fall reached EBITDA | Case |
| 4 | Revenue is down 31% from FY24, headcount down 6%. 624 people leave in a normal year, so the Company has been hiring into a shrinking business | Case |
| 5 | The one disclosed unit loss (minus 8% on a BFSI file) is half the company-wide loss (minus 17%). The other lines together lose about 28% | Case + A03 |
| 6 | The incumbent's AI-assisted cost (₹28) is above the AI-native price (₹27). Reskilling the whole book copies a model that already loses on clean files | Case |
| 7 | The ₹41 average hides a clean file at about ₹33 and a hard file at about ₹61, both sold at ₹38. The Company subsidises the work it is best at | A04, A05 |
| 8 | A severance costs 6.75 months of that person's pay, longer than the runway. Cutting people first makes the covenant problem worse inside the window | A06, L |
| 9 | A wind-down owes about ₹51 Cr in dues against cash already owed to the lender. Path 4 does not "preserve value" for staff | A06, A11 to A13 |

### 3.4 Rhetorical engineering (from the skill)

- **Action titles.** The six finding sentences are in `make_values.py` and are locked.
- **Foreshadowing.** Slide 2, panel "THE GAP AI LEAVES OPEN", lists the three clues and does not name Setu. Slide 4 pays it off.
- **Symmetric treatment.** Rivals table (same five columns). Route heatmap (same six tests). Scenario table (same six lines for bear, base, bull).
- **Three scenarios.** Bear, base, bull with named assumptions on slide 5; one scenario set for the whole deck.
- **Moneyshot.** One only: the numeral `1,814` on slide 4 (node name `MONEYSHOT`), the largest type on any core slide, repeated in the slide 6 finding.
- **Pre-empting weaknesses.** Fine print states which inputs are team assumptions; slide 7 so-what states the method limit; the bear case is shown breaching in month 8.
- **Third-party validation.** Because the Company is fictional, validation is on the path type: Klarna's 2025 return to human agents and NASSCOM's 2026 note on outcome pricing. Verifier V-D must confirm both wordings; if either fails verification, replace it using section 14, row "validation line unverified".
- **Double synthesis.** Slide 4 so-what begins "conclusively"; slide 6 so-what begins "therefore".
- **Defensive depth.** Every slide number traces to a table T1 to T13 in `model_tables.md`, reproduced as Appendix B.

### 3.5 Frameworks used and where

| Framework | Where in the research document | On the deck |
|---|---|---|
| MECE issue tree of the EBITDA gap (price, volume, people cost, other cost) | Section 3 | Slide 2 panels A1, B2 |
| Runway and covenant analysis (monthly cash model) | Section 4 | Slide 2 A2, A3 |
| Porter's five forces and strategic groups for the three rivals | Section 6 | Slide 2 B1 |
| Disruptive innovation and where the disruptor is weak | Section 6 | Slide 2 B3 |
| Unit economics and KPI tree | Section 7 | Slide 3 A1, A2 |
| MECE option filter and weighted scorecard with formula | Section 9 | Slide 4 B1, B2 |
| VRIO on the hard-file desk | Section 12 | Not on deck |
| Playing to Win (where to play, how to win) | Section 12 | Cover diagram |
| Three-scenario projection, tornado, two-way grid | Section 14 | Slides 5, 6, 7 |
| Real options (reserve, sale fallback), decision tree with gates | Section 14 | Slide 5 B3 |
| ADKAR, Kotter and Bridges for the workforce transition | Section 15 | Not on deck |
| Responsibility matrix (expanded letters), balanced scorecard | Sections 15, 17 | Not on deck |
| Risk register with probability and impact, pre-mortem | Section 16 | Slide 6 B1 |

Use two to four per section. Do not add frameworks that are not in this table.

## 4. Locked numbers (reference output of the model)

These were produced by the embedded model at planning time. Step M1 must reproduce them. Tolerance: exact at the precision shown.

| Item | Value |
|---|---|
| Model hash | `7bf97725b5` |
| Drift: covenant breach, cash zero | Month 6 (cash ₹14.8 Cr), month 9 |
| Flat revenue: breach, zero | Month 9, month 14 |
| Usable cash above the floor; free after the budget | ₹25 Cr; ₹10 Cr |
| Implied monthly revenue decline; observed FY25 to run-rate | 2.38%; 2.85% (model uses 2.45%) |
| Employee cost FY23, FY24, FY25, now | 127.2, 144.1, 146.9, 144.0 |
| Other cost FY23, FY24, FY25, now | 68.8, 72.9, 75.1, 69.0 |
| Drop-through of revenue fall to EBITDA since FY24 | 95% |
| Headcount at a 55% payroll ratio; leavers a year | 1,668; 624 |
| Heads today: clean, hard, catalogue, voice | 520, 439, 811, 380 |
| Line EBITDA today: clean, hard, catalogue, voice; total | +9.5, −17.9, −19.5, −3.4; −31.4 |
| Unit cost today: clean, hard, blended | ₹32.8, ₹60.7, ₹41.2 |
| Unit at month 12: clean price, cost; hard price, cost; blended margin | ₹31, ₹23.8; ₹48, ₹41.2; +₹7.1 |
| Setu base: lowest cash and month | ₹21.1 Cr, month 12 |
| Setu base: cash at months 6, 12, 18 | 22.3, 21.1, 25.2 |
| Setu base: EBITDA break-even month; run-rate at months 6, 12, 18 | Month 8; −4.7, +8.4, +14.0 |
| Setu base: revenue run-rate at months 12, 18 | 177.6, 182.9 |
| Setu base: headcount at months 12, 18 | 1,814, 1,804 |
| Workforce flow to month 12 | 2,400 less 549 unreplaced leavers less 70 bridge exits less 0 forced plus 32 hires |
| Role mix at month 12 | Catalogue 497, data services 400, hard-file desk 329, voice 317, team leads 116, clean verifiers 85, tech and corporate 70 |
| Peak bench; bridge pay cost | 129 people; ₹2.4 Cr |
| Budget: reskilling, technology, retention, footprint, bridge grants | 3.3, 2.5, 1.5, 1.2, 0.42 |
| Budget spent; reserve | ₹8.92 Cr; ₹6.08 Cr |
| Bear: breach month; cash at month 12; EBITDA run-rate month 12 | Month 8; 7.2; −15.2 |
| Bear with contingency: cash at months 6, 12 | 17.0, 9.7 (still breaches in month 8, so the month 6 gate opens the sale) |
| Bull: lowest cash; cash at month 12; EBITDA run-rate month 12 | 24.6; 29.4; +22.7 |
| Path 1 as written: breach | Month 4 |
| Pivot outright: breach | Month 4 |
| Sale at month 5: owners' value low, mid, high; jobs kept | 12, 36, 60; 500, 800, 1,200 |
| Wind-down today: dues, per head, shortfall, cover | ₹51.2 Cr, ₹2.13 lakh, ₹41.6 Cr, 54% |
| Wind-down cover at month 3, month 6 | 40%, 23% |
| Severance payback | 6.75 months |
| Worst single-assumption downside (labelling revenue at ₹50,000) | Lowest cash ₹16.5 Cr |
| Route scores: drift, 1, 2, 3, 4, Setu | 1.60, 2.35, 2.55, 1.95, 1.65, 4.15 |

Finals drills (reference output of `drills.py`, no counter-move applied):

| Shock | Lowest cash | Breach | Cash M12 | EBITDA run-rate M12 |
|---|---|---|---|---|
| Base | 21.1 | none | 21.1 | 8.4 |
| D1 Largest client leaves, BFSI revenue minus 20% | 1.1 | M6 | 5.0 | −7.5 |
| D2 AI-native price falls to ₹22, our clean price ₹26 | 16.0 | none | 16.1 | 0.9 |
| D2b D2 plus clean volume minus 3% a month | 12.5 | M12 | 14.2 | −2.3 |
| D3 Attrition 40% | 22.6 | none | 23.1 | 8.4 |
| D3b Attrition 15% | 17.7 | none | 17.7 | 4.6 |
| D4 Data services ramp halves | 15.4 | none | 15.5 | 1.1 |
| D5 Lender takes ₹10 Cr in month 3 | 11.1 | M5 | 11.1 | 8.4 |
| D6 Engine slips three months | 19.9 | none | 19.9 | 4.2 |
| D7 Hard-file price stays ₹38 | 13.5 | M12 | 14.2 | −0.5 |
| D8 Hard files are 20% of volume | 18.7 | none | 18.7 | 3.9 |
| D9 Hard files are 40% of volume | 21.9 | none | 23.3 | 12.4 |

## 5. Assumptions and levers register

This table is the content of the research document's section 18 and the source of every `[A##]` and `[L##]` tag. Writers copy rationale text from here.

| ID | Assumption | Value | Rationale | Sensitivity shown |
|---|---|---|---|---|
| A01 | Monthly revenue decline with no decision | 2.45% | The case says six months of cash. Run to the covenant, six months implies 2.38%; FY25 to run-rate shows 2.85% | Flat-revenue line on slide 2 |
| A02 | Term loan interest; principal | 11% a year; none due in 18 months | Mid-market secured lending rate; the case gives no schedule. Conservative to include interest | D5 drill |
| A03 | Revenue split: BFSI, catalogue, voice | ₹100, 48, 34 Cr | Case gives no split. Chosen so that BFSI unit cost ties to ₹41 and total cost to ₹213 Cr with plausible revenue per head | D1 drill; text in section 7 |
| A04 | Hard files as a share of BFSI volume | 30% | 420 exception handlers are 24% of production staff and hard files take about twice as long | D8, D9 drills |
| A05 | Files a person a month: clean, hard | 2,950; 1,500 | Solved so that blended BFSI cost equals the case's ₹41 (model gives ₹41.2) | Ties by construction |
| A06 | Wages as a share of pay for statutory formulas | 50% | Code on Wages 2019: allowances above 50% are added back | Section 8 |
| A07 | Engine fee per clean file | ₹8, ₹6.5 from month 13 | Close to the AI-native firm's all-in cost of ₹9; licensed document AI priced per page | Tornado, ₹6 to ₹11 |
| A08 | Data services revenue a head a month | ₹63,000, ₹68,000 from month 13 | About ₹450 an hour for 140 billable hours; Indian managed annotation rates | Tornado, ₹50,000 to ₹72,000 |
| A09 | Pay by role, ₹ lakh a year | Clean 4.8, hard 7.0, catalogue 4.8, voice 5.0, data services 5.0, team lead 10.5, corporate 18.0, new tech hire 24.0 | Weighted average equals the case's ₹6.0 lakh | None; ties to case |
| A10 | Other cost split, ₹ Cr | Facilities 30, technology 14, selling 17, general 8 | Sums to ₹69 Cr (213 less 144) | Section 13 |
| A11 | Share of staff eligible for gratuity | 55% | Average tenure six years, threshold five | Section 8 |
| A12 | Notice, leave, reskilling fund | 1 month, 10 days, 15 days' wages | Industrial Relations Code 2020 | Section 8 |
| A13 | Balance sheet for the wind-down | Receivables 60 days at 85% recovery; payables ₹5.75 Cr; closure ₹6 Cr; three months at half burn | Case gives no balance sheet. Stated on slide 3 and slide 7 | Section 11 |
| A14 | Share of engine files a human verifies | 20% | Straight-through rates for standard forms | Tornado, 15% to 30% |
| A15 | AI-assist gain on hard files | 45%, rising 2 points a month from month 10 to 65% | The incumbent's own gain from ₹41-type cost to ₹28 is 32%; pre-read plus field-level checks on a specialist desk | Tornado, 30% to 55% |
| A16 | Volumes after the plan | Clean −1.5% a month; hard +2.5% from month 6; catalogue −4%; voice −2% then −1% | Price at ₹31 sits between the two rivals; hard files have no good alternative supplier | Tornado; grid on slide 6 |
| A17 | Attrition and the bench | 26% unreplaced; 8% of the bench placed outside each month; bench paid 75% | Case attrition; assisted outplacement | D3, D3b drills |
| A18 | Sale terms | 0.20, 0.35, 0.50 times revenue at month 5; 500, 800, 1,200 jobs kept | Distressed services multiples; an AI-native buyer's cost of ₹9 a file implies far fewer people | Slide 7 |
| A19 | Path 1 as written | ₹45,000 a head for 2,340 people; price matched to ₹33; no exits beyond attrition; other cost −10% | The incumbent is the proof case for this model | Slide 4 line |
| A20 | Pivot outright | Old lines exit evenly over six months; data services at twice the base ramp | A generous version of Path 3 | Slide 4 line |
| A21 | Scorecard weights | Runway 25, cash 20, jobs 25, control 10, upside 10, speed 10 | Mirrors the judging weights: survival and people first | Formula on slide 4 |

| ID | Lever | Value | Cost or saving |
|---|---|---|---|
| L01 | Hiring freeze, no backfill | From month 1 | 549 roles not refilled by month 12 |
| L02 | Leadership pay cut | 25% for 60 people, 12 months | Saves ₹2.7 Cr |
| L03 | Selling and general cost | Selling to 75% then 60%; general to 90% then 75% | About ₹8.8 Cr a year at steady state |
| L04 | Seats and facilities | To 50% of today by month 9 | Saves ₹15 Cr a year; ₹1.2 Cr one-off |
| L05 | Complexity pricing | Hard ₹48 (40%, 80%, 100% of volume by months 2, 3, 4); clean ₹31 with the engine | Blended client price ₹36.1 |
| L06 | Engine migration | 20, 40, 55, 70, 80, 90, 100% over months 3 to 9 | ₹2.5 Cr one-off, ₹0.2 Cr a month |
| L07 | Data services ramp | 30, 80, 140, 200, 250, 290, 320, 350, 370, 390, 400 by month 12; 500 by month 18 | Reskilling inside L10 |
| L08 | Span of control | About 11 to 14 from month 4 | Team leads 190 to 116 |
| L09 | New technology hires | 10 at ₹24 lakh | ₹2.4 Cr a year |
| L10 | Reskilling | ₹3.3 Cr over months 2 to 6 for about 930 people | ₹35,000 a head |
| L11 | Retention | ₹1.5 Cr in two tranches, months 6 and 12 | Exception handlers and key leads |
| L12 | Reserve and contingency | ₹6.08 Cr ring-fenced; contingency set `CONT` in the model | Released only at a failed gate |

---

# PART III. RESEARCH

## 6. Research lanes

Five lanes. Each verifier writes one file `research/raw/R-<lane>.md` using the schema below. Seed facts were found at planning time by web search and are **unverified**: every row must be opened and marked.

**Raw file schema** (one table per question):

`| R-ID | Fact (exact figure and date) | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |`

Status is VERIFIED, CORRECTED (give the corrected figure) or UNVERIFIABLE. Each file ends with `## Gaps` listing what was not found. No argument, no recommendation, no model numbers in a raw file.

**Source hierarchy:** statute text and government releases; regulator and industry-body reports (NASSCOM, World Bank, World Economic Forum); company filings and official blogs; reputable press; vendor marketing last, flagged `[vendor]`.

### Lane A: the Indian BPM industry and AI

Questions: A1 industry revenue and employment FY25 and FY26; A2 how AI is changing pricing (headcount to outcome); A3 evidence on jobs and entry-level hiring; A4 the $5 trillion economy and human capital framing in official documents (Economic Survey 2025-26, Budget speeches); A5 examples of contact-centre headcount change after generative AI.

Seeds: NASSCOM Strategic Review 2026 press release (technology revenue $315 billion in FY26, up 6.1%; BPM $59 billion from $55 billion; 59.5 lakh employees, up 1.35 lakh; AI revenue $10 to 12 billion; over 20 lakh upskilled in AI) `https://nasscom.in/sites/default/files/media_pdf/Nasscom%20SR%20Press%20release.pdf` and `https://www.etvbharat.com/en/business/india-fy26-tech-revenues-hit-usd-315-billion-enn26022404879`; World Bank South Asia Development Update October 2025 (job listings down about 20% in occupations most exposed to AI) and a contact-centre vendor quoted as going from 15,000 agents to under 4,000, both via `https://www.policycircle.org/industry/indias-outsourcing-industry-ai-boom/`; World Economic Forum Future of Jobs 2025 (63 in 100 Indian workers need training by 2030).

### Lane B: labour law and the cost of exit

Questions: B1 retrenchment compensation, notice and the worker reskilling fund under the Industrial Relations Code 2020, and the date in force; B2 whether prior-permission rules (300 workers) apply to a services establishment or only to factories, mines and plantations; B3 gratuity formula and eligibility under the Code on Social Security 2020; B4 the 50% wage rule under the Code on Wages 2019; B5 priority of workmen's dues in liquidation, Insolvency and Bankruptcy Code section 53; B6 lay-off compensation (50% of basic wages and dearness allowance); B7 government schemes: National Apprenticeship Promotion Scheme, PM Viksit Bharat Rozgar Yojana.

Seeds: 15 days' average pay per completed year, one month's notice, reskilling fund of 15 days' wages, 300-worker threshold `https://employmentlaw.lkslaw.com/labour-codes/industrial-relations` and `https://www.lawrbit.com/hr-and-labour/layoff-retrenchment-closure-procedure-india/`; codes in force 21 November 2025 `https://taxguru.in/corporate-law/employers-wage-rules-effective-21st-nov-2025.html`; 50% rule `https://www.india-briefing.com/news/salary-structure-india-labor-code-compliance-guide-44332.html`; section 53, workmen's dues for 24 months ranking equally with secured creditors `https://thelegalschool.in/blog/section-53-ibc` and Supreme Court 2023 INSC 479; apprenticeship scheme shares 25% of stipend up to ₹1,500 a month; the employment-linked scheme pays employers up to ₹3,000 a month for two years per additional employee from 1 August 2025, outlay ₹99,446 Cr `https://labour.gov.in/sites/default/files/pib2148270.pdf`.

Instruction to V-B: the employment-linked scheme rewards net additional employees, so a shrinking firm is unlikely to qualify. Report what the rule says. The model counts no subsidy.

### Lane C: the technology and where it is weak

Questions: C1 accuracy of document AI on handwritten and Indian-language forms; C2 human-in-the-loop and straight-through processing rates in BFSI; C3 per-page or per-document pricing of commercial document AI; C4 speech recognition error rates in Indian languages; C5 why voice AI needs human-labelled data.

Seeds: Sarvam Vision 2.1 `https://www.sarvam.ai/blogs/sarvam-vision-2-1` `[vendor]`; IIIT Hyderabad IndicPage OCR paper `https://cvit.iiit.ac.in/images/ConferencePapers/2026_01/IndicPage-OCR.pdf`; Sarvam Saaras V3 word error rate about 19.3% on IndicVoices top-10 languages; IndicVoices, 7,348 hours across 22 languages from 16,237 speakers, funded under Bhashini `https://inc42.com/?p=446830`; Gnani Vachana `[vendor]`.

### Lane D: precedents and third-party validation

Questions: D1 Klarna's AI customer service and its 2025 return to human agents, with the chief executive's exact words; D2 how large BPO firms describe outcome pricing (Concentrix, Teleperformance, Firstsource); D3 data annotation as a business in India (market served, workforce, pay); D4 named firms that moved from BPO work to AI data services (iMerit, NextWealth, Karya, IndiVillage); D5 any published human-in-the-loop exception-handling service lines.

Seeds: `https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396`; NASSCOM data annotation report (market served from India about $250 million in FY20, potential above $7 billion by 2030, up to 1 million workers) `https://community.nasscom.in/communities/emerging-tech/ai/data-annotation-landscape-and-trends-the-india-story.html` and `https://indiaai.gov.in/article/data-annotation-in-india-heightening-with-the-ai-revolution`; pay of ₹100 to ₹250 an hour reported for contract annotators; Karya's $5 an hour floor.

### Lane E: valuation, sale and distress

Questions: E1 trading multiples of listed Indian BPM firms (eClerx, Firstsource); E2 multiples in distressed or sub-scale services deals; E3 typical time to close a mid-market sale in India; E4 how lenders treat covenant breaches (waiver, reset, recall); E5 voluntary liquidation and insolvency timelines.

Seeds: eClerx at about 4.7 times revenue and 17.4 times EBITDA, Firstsource about 2 times revenue `https://multiples.vc/public-comps/eclerx-services-valuation-multiples`; a claim that median BPO multiples fell to 5.5 times EBITDA from a peak of 10.9 (source unclear, verify or drop).

After the five files exist, the main agent builds `research/raw/sources.md`: one table `| ID | Source | URL | Lane row |` assigning S01, S02, ... to every VERIFIED or CORRECTED row, Harvard-like source text: Publisher (year) 'Title'. This table becomes Appendix A (`parts/appendix-A.md`, heading `## Appendix A: Bibliography`, columns `| ID | Source | URL | Used in § |`, opened by a two-line note with the access dates).

## 7. Research document specification

### 7.1 Format

- File `research/setu-research.md`, assembled by `assemble.py md` from the parts. The header block is written by `assemble.py`; writers never write an H1.
- Tags: `[C K1]` case fact with its ID from the case brief; `[A07]` assumption; `[L05]` lever; `[M]` model output; `[T5]` model table; `[S12]` external source. Every number in the document carries one. Tags also go inside table cells.
- Each H2 is an action title. Each H2 section opens with a bold `**Answer.**` paragraph of 2 to 4 sentences.
- Tables are pipe tables, each introduced by a sentence and followed by a sentence that says what it shows. Abbreviated column heads get an italic expansion line directly below.
- No images. No blockquotes except quoted statute text of at most 40 words.

### 7.2 Section outline, content and owner

| § | H2 title (use exactly) | Must contain | Tables (min) | Words (min) | Writer |
|---|---|---|---|---|---|
| 0 | Document control | Tag legend; source hierarchy; model version and hash; the skill's calibration note (patterns from M&A decks, turnaround finance supplied by the team's model); what is assumption and what is fact | 3 | 500 | W-A |
| 1 | Coverage matrix: every ask in the case mapped to a section and a slide | One row per ID in the case brief (F1 to F3, K1 to K4, Q1 to Q4, P1 to P4, D1 to D5, J1 to J5): short ask, one-line answer, section, slide | 1 | 600 | W-A |
| 2 | Board answer: restructure first, then reskill into the work AI cannot do | Recommendation in one sentence; two-column for and against (table from 3.2); the six moves; the moneyshot; what would change our mind; a draft cover text of at most 110 words | 3 | 1,400 | W-A |
| 3 | The case in numbers: revenue fell ₹80 Cr and 95% of it reached EBITDA | T1 rebuilt; issue tree of the EBITDA gap; payroll and other cost that did not move; revenue and cost per head; hiring into a shrinking business | 5 | 1,800 | W-A |
| 4 | The cash clock: six months to the covenant, not to zero | T2; the ₹40 Cr split; flat versus declining revenue; reconciliation of the six months to 2.4% a month; what the lender can do at a breach | 4 | 1,500 | W-A |
| 5 | Industry context: AI is repricing Indian services work from headcount to outcome | Lane A facts; the theme (human capital in a $5 trillion economy); why entry-level, first-formal-job work is the exposed layer | 4 | 2,200 | W-B |
| 6 | The three rivals: a price war the Company cannot win on clean files | Symmetric rival profiles; margin room (₹18 against ₹5 against minus ₹3); five forces; strategic groups; where the disruptor is weak (Lane C evidence on handwritten and Indian-language documents and speech) | 5 | 2,400 | W-B |
| 7 | Unit economics: the ₹41 average hides a ₹33 file and a ₹61 file | T3, T4; how A03 to A05 were solved to tie to ₹41 and ₹213 Cr; the cross-subsidy; line-by-line loss; sensitivity to the 30% hard share | 5 | 2,200 | W-B |
| 8 | Workforce-cost model: what the Company can afford and what an exit costs | Payroll at 55%; attrition arithmetic; statutory dues line by line with formulas and code references (Lane B); the 6.75-month payback; bench against severance; why layoffs first make the covenant worse | 6 | 2,600 | W-C |
| 9 | The four paths compared: only one stays above ₹15 Cr | Symmetric write-up of drift, Paths 1 to 4 and Setu (thesis, cash path, jobs, control, risk); T11; scorecard T13 with formula and weights; why Setu beats each | 6 | 2,600 | W-C |
| 10 | Path 2 in depth: a sale is the fallback, not the plan | Lane E; T12 sale table; timeline against the runway; who decides the workforce; when a sale becomes the right answer (the month 6 gate); what Setu does to sale value | 4 | 1,600 | W-C |
| 11 | Path 4 in depth: a wind-down today cannot pay its own dues | T12 wind-down table; waterfall; priority of workmen's dues; what each month of drift costs staff; the stated limits of the assumed balance sheet | 4 | 1,500 | W-C |
| 12 | Project Setu: where to play and how to win | Where to play, how to win; the six moves in detail; VRIO of the hard-file desk; why the AI-native firm and the voice start-up become customers and suppliers, not only rivals; bottom-up sizing of data services demand (people and hours, not a percentage of a market); client data consent and the Digital Personal Data Protection Act | 6 | 3,000 | W-D |
| 13 | Financial plan: ₹8.9 Cr of one-offs, EBITDA positive in month 8 | T5 with commentary by quarter; EBITDA bridge from −31 to +8.4 by lever; T8 budget; unit economics at month 12; what is not in the plan (no subsidy, no working-capital release, no covenant waiver) | 6 | 2,400 | W-D |
| 14 | Scenarios, sensitivity and gates: every single downside holds, five together do not | T6, T9, T10; the bear case shown honestly; contingency set; the four cash gates with tests and actions; decision tree; the drills table | 7 | 2,600 | W-D |
| 15 | The workforce plan: 1,814 jobs, no forced exit, ₹6.1 Cr held for the downside | T7; role-by-role transition matrix (from, to, people, training hours, cost); reskilling curricula for the hard-file desk, verifiers and data services; the bridge programme (75% pay, placement, grant); retention; principles of fairness (selection, notice, first-formal-job staff, women returning from leave); ADKAR by group; communication calendar; responsibility matrix with letters expanded; what the plan does not promise | 9 | 3,400 | W-E |
| 16 | Risk register: twelve risks, each with a trigger and a mitigation | 12 risks with probability, impact, early signal, mitigation, owner; heat map as a table; pre-mortem | 4 | 1,800 | W-E |
| 17 | Implementation roadmap: 30, 60, 90 days and 12 months | Day 1 to 30, 31 to 60, 61 to 90 actions; 12-month Gantt as a table; governance (weekly cash committee); balanced scorecard of 12 measures with month 6 and month 12 targets | 5 | 1,800 | W-E |
| 18 | Assumptions register and model summary | Case facts used; A01 to A21 and L01 to L12 from section 5 of this plan; the eight on the appendix slide; how to rerun the model | 4 | 1,300 | W-F |
| 19 | Slide blueprint: eight slides | One row per slide: title, action title, content blocks, data keys in `values.js` | 1 | 600 | W-F |
| 20 | Anticipated judge questions and the finals drills | 25 questions with answers of 60 to 120 words; then each drill D1 to D9: what changes, the model output, the counter-move, what we would say | 3 | 3,200 | W-F |
| App A | Appendix A: Bibliography | Built by the main agent from `sources.md` | 1 | n/a | Main |
| App B | Appendix B: Model tables | Inserted by `assemble.py` | 14 | n/a | Script |
| App C | Appendix C: Glossary and abbreviations | Terms with meaning as used here; a separate table of every abbreviation, unit and tag | 2 | 900 | W-F |
| App D | Appendix D: Validation plan, not yet run | Who would be interviewed (clients' operations heads, exception handlers, team leads, the lender, an AI vendor), target count, the question, what answer would change the plan; a first sentence stating none of it has been done | 2 | 600 | W-F |

Part files: `part-A.md` = §0 to 4; `part-B.md` = §5 to 7; `part-C.md` = §8 to 11; `part-D.md` = §12 to 14; `part-E.md` = §15 to 17; `part-F.md` = §18 to 20; `appendix-C.md`, `appendix-D.md` by W-F; `appendix-A.md` by the main agent.

Acceptance (printed by `assemble.py md`): words at least 30,000; tables at least 70; dashes 0; banned empty; question headings 0; exclamations 0; `missing_S` empty; answer leads at least 18.

---

# PART IV. THE DECK

## 8. Deck specification

### 8.1 Design system

- Canvas 1920 by 1080. `cornerRadius` 0 everywhere. Ink outline on every panel, bar and cell. Layered cards with an offset back rectangle. Poppins Bold and ExtraBold for display; Inter Semi Bold and Bold for body. Content text 22pt or larger. Only three node names may be smaller: `SOURCE` (14pt), `BIBLIO` (16pt), `FINEPRINT` (16pt).
- Skeleton of every core and appendix slide, built by `hdr()` and `soWhat()`: ribbon y 36 to 92 with a page chip at x 1730; finding card y 112 to 204 (node `HEADLINE`); content zone y 224 to 954 in two bands (A: 224 to 574, B: 588 to 954); so-what bar y 966 to 1030 (node `SOWHAT TEXT`); source line y 1046 (node `SOURCE`).
- Ribbon is section-scoped: core slides carry DIAGNOSE, QUANTIFY, CHOOSE, PLAN, PEOPLE AND RISKS with the active tag filled; the appendix carries APPENDIX, ASSUMPTIONS, SENSITIVITY, ABBREVIATIONS; cover has none; thank-you shows the core ribbon with none active.
- Node names are a contract used by the validators: top-level `PANEL:`, `CARD:`, `TABLE:`; `HEADLINE`, `SOWHAT TEXT`, `SOURCE`, `BIBLIO`, `FINEPRINT`, `MONEYSHOT`, `BACK:`.

### 8.2 Slide by slide (what the extracted code draws)

| # | Slide name | Architecture | Forms on the slide | Abbreviation handling |
|---|---|---|---|---|
| 1 | 01 Cover | Dark split: thesis and team left, bridge diagram right | Thesis card, team table, 7-node flow with hub and badge list | None used |
| 2 | 02 Diagnose the Crisis | Dashboard grid, 3 over 3 | Stacked columns (cost by year), line chart with covenant line, segmented cash bar with lettered list, rivals table, horizontal bars, numbered seed list | Fine print: BFSI, n/s |
| 3 | 03 Quantify the Problem | Chart wall | Stacked columns with two price lines, waterfall of line losses, exit-cost table, affordability table, wind-down waterfall | Fine print under two panels; terms in appendix |
| 4 | 04 Choose and Justify a Path | Moneyshot hero plus evidence | Giant numeral card, four-line cash chart with covenant line, rejection list, 6 by 7 heatmap, formula box with two validation lines | Fine print on score method |
| 5 | 05 Build the Strategy and Plan | Timeline hero | 12-month Gantt, segmented budget bar with table, three-scenario line chart, scenario table, gates table | Fine print: units, M for month |
| 6 | 06 Address the Workforce and Risks | People ledger | Headcount waterfall, role bars, costed promise table, risk table with coloured ratings, 5 by 5 red heatmap | Fine print: P, I, H, M, L; grid axes |
| 7 | 07 Appendix | Table wall | Assumptions table, tornado, abbreviations panel, two fallback tables, source list | The abbreviations panel itself |
| 8 | 08 Thank You | Centred | Title, thesis, team chip and table | None |

### 8.3 Inspiration decks (calibration only, read-only)

Prime: `hOJVMGv9nIhDmayTT7DmOt`. Others: `e5VEexsLMhDampx7gvhFmM`, `vAIyXmljHlFDuwQo6RsoIN`, `APbOstO4SSU7iAjYIgEeSd`, `JLOOyohkQPUrwXEsxDKz4m`. In step F0 take one screenshot of two dense slides of the prime deck with `get_screenshot` and compare density by eye with the first built slide. Never modify those files. The design system here descends from the same helper library those decks were built with, so no restyling is expected.

## 9. Using the case-competition-deck skill (mandatory touchpoints)

Invoke with the Skill tool (`skill: "case-competition-deck"`). Log each touchpoint in `deck/figma.md` as `Touchpoint X: STATUS` with two lines of evidence.

| Touchpoint | When | What to do | Pass test |
|---|---|---|---|
| A | Step B3, before any writing | Load the skill. Read `references/structure.md`, `references/rhetoric.md`, `references/case_types/strategy.md`, `operations.md`, `social_impact.md`. Confirm section 3 of this plan carries: contrarian recommendation, seed, symmetric treatment, three scenarios, one moneyshot, double synthesis, action titles | All seven located in section 3; note the skill has no turnaround finance and the model supplies it |
| B | Step R3, in every writer prompt | Writers read `references/rhetoric.md` sections 10 and 11 (action titles, quantification) and `references/frameworks.md` entries for the frameworks assigned to their sections in 3.5 | Each part's H2s are findings with numbers |
| C | Step F5, after the deck is built | Critique mode: dispatch critic CR with section 13.3 prompt and `references/critique_rubric.md`, re-based as in section 11 | Scores recorded; no score under 4 left unaddressed without a logged reason |
| D | Step R5, after assembly | Slide mode check on the research document's section 19 blueprint against `references/archetypes.md`: each core slide maps to named archetypes (H, I or J, K, M, P, S, U, V, W) | Mapping table written into `deck/figma.md` |
| E | Step Z1, final | Polish search from `rhetoric.md` section 15: TODO, Insert, Placeholder, TBD, Lorem, names from other decks | Sweeps `presentBad` empty; grep of `research/setu-research.md` clean |

The skill says to produce a .pptx with a pptx skill. That step is replaced by the native Figma build in section 10. Do not create a .pptx.

## 10. Figma build

### 10.1 Tools and gates

- Load schemas with ToolSearch: `select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot`.
- Load the Figma skill first: Skill tool with `figma-use` if it is listed; otherwise read the MCP resource `skill://figma/figma-use/SKILL.md`. Do not call a skill named `figma-use-slides`; it does not exist.
- This deck positions nodes absolutely through the preamble helpers. That is deliberate and overrides any auto-layout advice in the Figma skills.
- `get_metadata` does not work on Slides files. Use `use_figma` read scripts and `get_screenshot`.
- If `whoami` lists more than one plan or team, ask the user which `planKey` to use. If the Figma server is not authorised, stop and tell the user to authorise it in an interactive session; do not ask for tokens.

### 10.2 Steps

| Step | Action | Done when |
|---|---|---|
| F0 | `whoami`; screenshot two dense slides of the prime inspiration deck (read-only) | planKey known; two images viewed |
| F1 | `create_new_file` with `editorType: "slides"`, name `Project Setu | Case for Change | Team IdeaForge` | fileKey recorded in `deck/figma.md` |
| F2 | `use_figma` with the contents of `deck/setup.js` | Returns `count: 8`, eight ids, `fontsOk` all true. Write `deck/slide-ids.json` as `{"S1": id1, ..., "S8": id8}` in order. If a default slide is reported empty, rerun once; never create a second set |
| F3 | `python lsr-caseforchange/deck/gen.py bind` | 8 `slide_NN.js`, 8 `v1_NN.js`, `v1_all.js`, `sweeps.js` written, each slide file under 50,000 characters |
| F4 | For N = 2, 3, 4, 5, 6, 7, 1, 8 in that order: (a) `use_figma` with `build/slide_0N.js`; (b) check the return: `warnings` empty; (c) `use_figma` with `build/v1_0N.js`; (d) `get_screenshot` of that slide, save as `deck/shots/sN.png`, and look at it; (e) apply fix rules 10.3 if needed, at most three attempts, then log the residual | V1 returns `clean: true` or only logged residuals; the screenshot has been viewed and described in the log in two lines |
| F5 | `use_figma` with `build/sweeps.js`; then touchpoint C | `radiusFixed` any, `fontLow` empty, `copy` empty, `missing` empty, `presentBad` empty, `money.chars` equals `1,814`, density nodes within 20% of section 2.4 |
| F6 | `use_figma` with `build/v1_all.js` | `clean: true` or logged residuals only |
| F7 | Final screenshots of all eight slides into `deck/shots/`; write the file URL into `deck/figma.md` | Eight images present |

Each slide script clears its slide first, so a rerun is safe. Stop after slide 2 (the first built) and compare its screenshot with the inspiration screenshots before building the rest: if the visual system reads wrong (fonts, strokes, offsets), fix the cause once, not per slide.

### 10.3 Fix rules (the only edits allowed during the build)

A fix edits the file under `lsr-caseforchange/deck/slides/` or `model/make_values.py`, then reruns `make_values.py` if copy changed, then `gen.py mock`, then `gen.py bind`, then the slide. Never edit a build file by hand.

| Issue reported | Fix |
|---|---|
| `finding3lines` | Delete the two weakest words (articles or adverbs first) from that finding in `make_values.py`, keeping every number |
| `sowhat3lines`, `source3lines` | Shorten that string to the same meaning |
| `textOut`, `cellWrap`, a `warnings` overflow | Shorten the string (drop an article, use "vs", "a month", "Cr"). Never below 22pt. If meaning would be lost, widen that column by up to 40px and take the width from the widest other column of the same table |
| A panel title over one line | Shorten the title; keep its number |
| `overlap` between two of this plan's panels | Move the later one by the overlap plus 8px if it stays in the content zone; otherwise report |
| `bounds`, `belowContent` | Reduce `rowH` of the offending table by up to 4px (never below 31px) or move the node up |
| Text collision seen in a screenshot (label on a line or bar) | Nudge that label by at most 24px |
| A dashed line or polygon missing in the screenshot | Rerun the slide once; if still missing, replace that line with `addWireH` or `addWireV` when it is axis-aligned; report a diagonal |
| A node 240px off | A hand-written line set `x` or `y` before `appendChild`. Remove the hand-written code and rerun the slide file. Never add 240 back |
| `Cannot use unloaded font` | You ran a fragment. Always run the full `build/slide_NN.js` |
| Slide names reset to numbers | Rerun the naming lines of `setup.js` |
| Screenshot shows dead space larger than about 200 by 200 | Report it in the log. Do not add decoration |

Known false positives: ribbon punch-holes over their tags and `BACK:` rectangles under their cards are by design and are not reported by V1.

## 11. Critique (touchpoint C) with the rubric re-based for an 8-slide deck

The skill's rubric assumes about 100 slides. Use it with these substitutions and say so in the critique:

| Rubric item | Re-based test for this deck |
|---|---|
| 8 sections, dividers, table of contents, 30+ abbreviations table, 10+ appendix slides, 5+ bibliography slides | Not applicable. Replaced by: five mandated slides in the mandated order; one appendix slide with assumptions, sensitivity, abbreviations and sources; bibliography in the research document |
| Recommendation in the executive summary headline | Recommendation on the cover thesis card and in the slide 4 finding |
| "The don't side wins" and "alternative is named" | Standard versions of the four paths are rejected with numbers; Setu is named as Path 1 rebuilt |
| Foreshadowed 20+ slides earlier | Seed on slide 2, payoff on slide 4 |
| Dimension 4, sample 10 slides | Score all 6 finding sentences: 1 point for a full-sentence finding, 1 for a number; maximum 12; 11 or 12 scores 5 |
| Dimension 6, appendix depth | Score on whether every slide number traces to a model table and the research document |
| Added, because the rubric has none | Workforce: is the people plan specific and costed (J3). Adaptability: are gates, a reserve and priced fallbacks shown (J5) |

---

# PART V. EXECUTION

## 12. Execution sequence

### 12.1 Bootstrap

Step B0. Create `lsr-caseforchange/PLAN.md` as a byte copy of this plan file:

```
python -c "import shutil; shutil.copyfile(r'C:\Users\harsh\.claude\plans\working-folder-lsr-caseforchange-linear-papert.md', r'lsr-caseforchange\PLAN.md')"
```

Step B1. With the Write tool create `lsr-caseforchange/extract.py` with exactly this content, then run `python -X utf8 lsr-caseforchange/extract.py` from the repo root:

```python
import re, io, pathlib
CF = pathlib.Path(__file__).resolve().parent
t = io.open(CF / "PLAN.md", encoding="utf-8").read().replace("\r", "")
n = 0
for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S):
    p = CF / m.group(1).strip(); p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", p.relative_to(CF).as_posix(), len(m.group(2)))
for d in ("research/raw", "research/parts", "deck/build", "deck/shots"): (CF / d).mkdir(parents=True, exist_ok=True)
print("files", n)
```

Done when it prints `files 20`.

### 12.2 Step table

| Step | Who | Action | Done when |
|---|---|---|---|
| B0, B1 | Main | Bootstrap as above | `files 20` |
| B2 | Main | Start `build-log.md`; read the files in 2.5 | Log has a header and the date |
| B3 | Main | Touchpoint A | Logged PASS |
| M1 | Main | `python -X utf8 lsr-caseforchange/model/setu_model.py` | 10 lines of PASS and `HASH 7bf97725b5` |
| M2 | Main | `python -X utf8 lsr-caseforchange/model/make_values.py` | Prints findings lengths `[183, 172, 198, 164, 212, 177]` and scores ending `4.15`; `deck/values.js` and `model/model_tables.md` exist |
| M3 | Main | From `lsr-caseforchange/model`: `python -X utf8 drills.py`; then `python -X utf8 build_excel.py` | `drills.md` matches section 4; `sheets 14` |
| M4 | Main | `python -X utf8 lsr-caseforchange/deck/gen.py pre` then `... gen.py mock` | Eight lines `sNN OK`, each with `warnings: []` and `ISSUES 0` |
| R1 | **Three verifiers in parallel** (V-A, V-B, V-C), then two (V-D, V-E), each with `run_in_background: true` | Prompt 13.1 with the lane text from section 6 | Five `R-*.md` files, each with a Gaps section and a reply giving counts |
| R2 | Main | Build `research/raw/sources.md` and `research/parts/appendix-A.md`. Apply corrections: if a verifier corrected a figure that appears on a slide source line or validation line, fix it per section 14 | Every S-ID has a URL; conflicts logged |
| F0 to F7 | Main | Figma build, section 10. Can run while writers work | Section 10 tests |
| R3 | **Three writers in parallel** (W-A, W-B, W-C), then three (W-D, W-E, W-F) | Prompt 13.2 | Each part meets its minimum words and tables and passes its self-check |
| R4 | Main | `python -X utf8 lsr-caseforchange/research/assemble.py md` | `ASSEMBLY PASS`. If a part is short, re-dispatch that writer with: "Expand sections <list> by <n> words by adding worked examples from the model tables and one more table per section. Do not change any number." |
| R5 | Main | Touchpoint D; then `python -X utf8 lsr-caseforchange/research/assemble.py pdf` | PDF exists and opens; size above 500 KB |
| F5c | Critic CR | Touchpoint C, prompt 13.3 | Critique saved as `deck/critique.md`; fixes that fall under 10.3 applied; others logged |
| Z1 | Main | Touchpoint E; final checks in section 15.2; final report | All boxes ticked |
| Z2 | Main | Save one project memory file `project_lsr_setu.md` in the memory directory named in the system prompt (type `project`): deck fileKey and URL, the folder, the 8-slide structure, the moneyshot `1,814 of 2,400`, the model hash, and that `lsr-caseforchange/PLAN.md` is the surviving copy of this plan. Add its one-line pointer to `MEMORY.md` | File and pointer exist |

### 12.3 Parallelism rules

- At most three sub-agents at once. If one fails with a rate limit, relaunch it after the reset time in the error.
- Sub-agents write only their own files. They never edit the plan, the model, `values.js` or another part.
- Writers start only after M2 (they need the tables) and R2 (they need S-IDs).
- Figma calls are sequential and belong to the main agent.

## 13. Prompts

### 13.1 Verifier prompt (fill LANE = A to E)

> You are verifier V-LANE for a case-competition research file. Read `lsr-caseforchange/PLAN.md` section 6 (schema, source hierarchy and "Lane LANE") and `lsr-caseforchange/case/01-case-brief.md`. For each question in your lane and each seed: open the URL with WebFetch or find the primary source with WebSearch; record one row per fact in the schema; mark it VERIFIED, CORRECTED (state the corrected figure and date) or UNVERIFIABLE; quote at most 25 words. Add up to 10 new rows that answer the lane's questions from better sources. Prefer statute text, government releases and industry-body reports. Never invent a figure, a date, a quote or a URL. Flag vendor claims `[vendor]`. Do not write analysis or recommendations. Do not use em dashes or en dashes. Write `lsr-caseforchange/research/raw/R-LANE.md` with an H1, a two-line preamble with today's access date, one H2 per question, the fact table, and a final `## Gaps`. Reply with: rows verified, corrected, unverifiable, new, and a list "Changed numbers" of any seed figure you corrected.

### 13.2 Writer prompt (fill PART and SECTIONS)

> You are writer W-PART. Write sections SECTIONS of a consulting research deliverable into `lsr-caseforchange/research/parts/part-PART.md`. Read first, fully: `lsr-caseforchange/PLAN.md` sections 2, 3, 4, 5 and 7; `lsr-caseforchange/case/01-case-brief.md`; `lsr-caseforchange/model/model_tables.md`; `lsr-caseforchange/model/drills.md`; `lsr-caseforchange/research/raw/sources.md` and the `R-*.md` files; `.claude/skills/case-competition-deck/references/rhetoric.md` sections 10 and 11 and the `references/frameworks.md` entries for the frameworks listed against your sections in PLAN section 3.5; and, for register only, `mandamasterminds/research/satoshi-gate-research.md` lines 150 to 260.
> Rules. Use the exact H2 titles from PLAN 7.2, numbered `## N. Title`; use `### N.M` for sub-sections; never write an H1. Open every H2 with a bold `**Answer.**` paragraph of 2 to 4 sentences. Meet the minimum words and tables for each section. Every number carries a tag: `[C id]` for a case fact, `[A##]`, `[L##]`, `[M]`, `[T#]`, `[S##]`. Use only numbers found in the case brief, the model tables, the drills, PLAN sections 4 and 5, or a VERIFIED or CORRECTED raw row. Do not browse. Do not compute new figures beyond simple sums, differences and ratios of tagged numbers, and show the arithmetic when you do. Do not invent interviews, clients, quotes or pilots. State what is assumption. Legal points are "on our reading; counsel to confirm".
> Style. First person plural, declarative, plain words, short sentences, reasoning shown, written as a board memo. No em dashes or en dashes, no rhetorical questions, no exclamation marks, no hooks, none of the banned words in PLAN 2.2. Expand each abbreviation on first use in a section. Put an italic expansion line under any table with abbreviated heads. Introduce every table with a sentence and follow it with what it shows.
> Self-check before replying: run `python -X utf8 -c "import re,io;t=io.open(r'lsr-caseforchange/research/parts/part-PART.md',encoding='utf-8').read();print(len(re.findall(r'\S+',t)),len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),len(re.findall('[\u2014\u2013]',t)),t.count('!'))"` and fix until dashes and exclamations are 0 and words and tables meet the minimums. Reply with the four numbers and any figure you wanted but could not find.

Assignments: W-A sections 0 to 4; W-B 5 to 7; W-C 8 to 11; W-D 12 to 14; W-E 15 to 17; W-F 18 to 20 plus `appendix-C.md` (H2 `## Appendix C: Glossary and abbreviations`) and `appendix-D.md` (H2 `## Appendix D: Validation plan, not yet run`).

### 13.3 Critic prompt

> You are critic CR. Invoke the `case-competition-deck` skill and read `references/critique_rubric.md`. Read `lsr-caseforchange/PLAN.md` sections 3 and 11 and `lsr-caseforchange/deck/values.js`, and view the eight images in `lsr-caseforchange/deck/shots/`. Score the deck with the rubric as re-based in PLAN section 11: pass or fail items, then dimensions 1 to 7 from 1 to 5, plus workforce and adaptability. Lead with the two strongest things. Give at most five issues, each with slide, current state, specific fix and why it matters. Do not propose changing a number, the recommendation or the slide count. Do not use dashes. Write `lsr-caseforchange/deck/critique.md`.

## 14. Recovery table

| Symptom | Action |
|---|---|
| `extract.py` prints fewer than 20 files | PLAN.md is not a byte copy. Redo B0 |
| M1 hash differs or a check fails | A file was edited. Re-extract (B1) and rerun. If it still differs, stop and report the failing line |
| M2 assertion on finding length | Do not edit findings; re-extract. The lengths are fixed by the model |
| `gen.py pre` assertion | `yuva-yodha/deck/preamble.js` changed. Restore it with `git show HEAD:yuva-yodha/deck/preamble.js` into the scratchpad, set the environment variable `SETU_ROOT` only if the repo root moved, and report |
| `gen.py mock` shows FAIL on a slide that passed at planning time | Node is missing or a file was edited. Check `node --version`; re-extract |
| A `use_figma` call errors mid-slide | Rerun the same build file; each script clears its slide first |
| MCP connection drops | Rerun `setup.js` read-only part to re-read ids; never create a second set of slides |
| A verifier corrects a figure used on a slide (only the source lines and the two validation lines on slide 4 carry external claims) | Edit that string in `make_values.py` or `s04.js`, rerun M2, M4, bind and that slide |
| Validation line unverified (Klarna or NASSCOM) | Replace it in `s04.js` with a VERIFIED row from Lane A or D of the same kind (named source, year, one finding about human-in-the-loop work or outcome pricing), under 80 characters after the bold lead |
| A source on the slide 7 list cannot be verified | Replace that line with a verified source from `sources.md`; keep 11 lines or fewer |
| Writer under target | Re-dispatch with the expansion instruction in R4 |
| `assemble.py pdf` fails on an assertion | `mandamasterminds/research/build_pdf.py` changed; report the failing string. The markdown file is still the deliverable |
| Chrome not found | Report; deliver the HTML and markdown |
| Team or name must change | Section 1.4, then rerun from M2 |

## 15. Finals pack and final checks

### 15.1 The "new development" playbook (J5, adaptability)

The finalists receive a new development before presenting. The model answers any of these in under a minute: edit one value in `drills.py` or pass an override, rerun, read lowest cash, breach month and month 12 run-rate. The research document's section 20 writes each of these up with the counter-move below.

| Development | What the model says | Counter-move to present |
|---|---|---|
| Largest client leaves (D1) | Breach in month 6 with no response | This is the gate-failure case. Release the ₹6.1 Cr reserve for a voluntary exit of the affected teams, pull the engine migration forward for the remaining clients, and open the sale track at once from a position of ₹33 Cr of cash, not ₹15 Cr |
| AI-native firm cuts price again (D2, D2b) | Holds at ₹16 Cr if volume holds; breaches in month 12 if volume also falls | Stop defending clean files. Move them to a referral arrangement and keep the hard-file desk and data services, which the price cut does not touch |
| Clients refuse the hard-file price (D7) | Breach in month 12 | Offer the tiered contract at ₹44 with a volume commitment; the tornado shows ₹44 still holds cash at ₹18.4 Cr |
| Data services ramp is slow (D4) | Holds at ₹15.4 Cr, no margin for error | Slow the engine migration by the same number of months so the bench does not build; catalogue stays the holding line for longer |
| Lender demands prepayment (D5) | Breach in month 5 | Offer the lender the monthly cash gates and the ring-fenced reserve as covenant reporting in exchange for a floor reset; if refused, sale track |
| Attrition spikes (D3) or stops (D3b) | Both hold | Spike: retention tranche brought forward for exception handlers. Stop: the bench peaks at 212, so the voluntary package opens in month 6 from the reserve |
| An acquirer makes an offer | Compare with T12: owners' value ₹12 to 60 Cr, 500 to 1,200 jobs | Accept only above the base case on both value and jobs, with a 12-month employment undertaking for the hard-file desk |
| Government announces a reskilling subsidy | Not in the model | Treat as upside; apply to the reskilling line only after cash arrives |
| The emergency budget is cut to ₹10 Cr | Deployed spend is ₹8.9 Cr | Plan unchanged; reserve falls to ₹1.1 Cr, so the month 6 gate tightens |

### 15.2 Final verification checklist

Model and numbers
- [ ] M1 prints 10 PASS lines and `HASH 7bf97725b5`.
- [ ] `drills.md` equals the drills table in section 4.
- [ ] `Setu_Model.xlsx` opens with 14 sheets.

Research document
- [ ] `assemble.py md` prints `ASSEMBLY PASS` (words at least 30,000, tables at least 70, dashes 0).
- [ ] Section 1 has one row for every ID in the case brief.
- [ ] Appendix C lists every abbreviation used anywhere in the document and on the deck.
- [ ] Appendix D opens by saying no interview has been run.
- [ ] `setu-research.pdf` exists.

Deck
- [ ] Exactly 8 slides, named as in `setup.js`, in the mandated order.
- [ ] `gen.py mock`: eight OK lines. V1 all: clean or logged residuals. Sweeps: `fontLow`, `copy`, `missing`, `presentBad` all empty; `money.chars` is `1,814`.
- [ ] Every table or chart with an abbreviation has fine print or an appendix entry; slide 7 abbreviations panel present.
- [ ] Cover has no KPI-card row; team table on cover and thank-you.
- [ ] Eight screenshots saved and each viewed.
- [ ] The Figma URL is in `deck/figma.md`.

Skill and language
- [ ] Touchpoints A to E logged.
- [ ] No em dash, en dash, question mark, exclamation mark or banned word on any slide; none in the research document outside quoted judge questions.

Final report to the user: the Figma URL; paths of the research markdown and PDF, the model, the workbook; word and table counts; the residuals list; anything a verifier could not confirm; and a reminder of the three places to change the team name.

---

# PART VI. EMBEDDED FILES (the source of truth for every script)

Every file below is extracted byte for byte by the bootstrap in section 12.1. Never retype a block. A fix is made in the extracted file under `lsr-caseforchange/`, never in this plan.

## 16. Model

<!-- FILE: model/setu_model.py -->
```python
# ===== SETU MODEL =====
"""Project Setu turnaround model (LSR Case for Change). Units: Rs crore unless stated; heads are people.
F = case facts (never changed). A = team assumptions (IDs in the research document, section 16). L = plan levers.
Run:  python setu_model.py   -> writes model_outputs.json beside this file and prints checks."""
import copy, json, hashlib, pathlib
F = dict(cash0=40.0, floor=15.0, loan=40.0, budget=15.0, rev=182.0, cost=213.0, hc=2400, avg_cost=6.0, attr=0.26, tenure=6.0,
         price=38.0, unit_cost=41.0, ai_price=27.0, ai_cost=9.0, inc_price=33.0, inc_cost=28.0,
         staff=dict(proc=1350, exc=420, voice=380, tl=190, corp=60),
         hist=dict(rev=[240, 262, 226, 182], cost=[196, 217, 222, 213], ebitda=[44, 45, 4, -31], emp_pct=[0.53, 0.55, 0.65, 0.80], hc=[2300, 2550, 2500, 2400]))
A = dict(interest=0.11, d=0.0245, rev_bfsi=100.0, rev_cat=48.0, rev_voice=34.0, hard_share=0.30,
         pay=dict(clean=4.8, hard=7.0, cat=4.8, voice=5.0, lab=5.0, tl=10.5, corp=18.0, newtech=24.0),
         clean_prod=2950.0, hard_prod=1500.0, non=dict(fac=30.0, tech=14.0, sga=17.0, ga=8.0),
         wage_share=0.50, grat_elig=0.55, leave_days=10, dso_days=60, recv_recovery=0.85, payables=5.75, closure_cost=6.0, closure_months=3)
L = dict(d_clean=0.015, g_hard=0.025, g_hard_from=6, d_cat=0.04, d_voice_early=0.02, d_voice_late=0.01,
         lab=[0, 30, 80, 140, 200, 250, 290, 320, 350, 370, 390, 400, 420, 440, 460, 480, 490, 500], lab_rev=0.63, lab_rev2=0.68,
         p_clean=31.0, p_hard=48.0, verify=0.20, assist=0.45, assist_gain=0.02, assist_from=10, assist_cap=0.65, span1=14, newtech=10,
         mig={1: 0, 2: 0, 3: .20, 4: .40, 5: .55, 6: .70, 7: .80, 8: .90}, rep={1: 0, 2: .40, 3: .80},
         vsp={}, vsp_cost=2.7, bench_pay=0.75, bench_exit=0.08, bridge_grant=0.6, lead_cut=0.25, lead_cut_months=12,
         fac={1: 1, 2: .97, 3: .90, 4: .82, 5: .75, 6: .68, 7: .60, 8: .55}, fac_end=0.50, tech_add=0.20,
         sga0=0.75, sga1=0.60, ga0=0.90, ga1=0.75, fee=8.0, fee2=6.5,
         one=dict(reskill={2: .5, 3: .9, 4: .8, 5: .6, 6: .5}, tech={1: .4, 2: .7, 3: .6, 4: .5, 5: .3}, footprint={4: .4, 6: .4, 8: .4}, retention={6: .75, 12: .75}))
SCEN = dict(bear=dict(d_clean=0.03, p_hard=44.0, lab_rev=0.50, lab_rev2=0.50, fee=11.0, fee2=11.0, g_hard=0.0, assist=0.30, assist_gain=0.0),
            base={}, bull=dict(d_clean=0.005, p_hard=52.0, lab_rev=0.72, lab_rev2=0.78, g_hard=0.035, assist=0.55))
CONT = dict(vsp={6: 150, 8: 120, 10: 80}, vsp_cost=2.3, fac_end=0.40, sga1=0.50, ga1=0.65, lead_cut_months=18, span1=16)
INT = F["loan"] * A["interest"] / 12
def heads0():
    files = A["rev_bfsi"] / F["price"] * 10
    hc = files * (1 - A["hard_share"]) * 1e6 / (A["clean_prod"] * 12); hh = files * A["hard_share"] * 1e6 / (A["hard_prod"] * 12)
    return files, hc, hh, F["staff"]["proc"] + F["staff"]["exc"] - hc - hh
def drift(months=18, d=None):
    d = A["d"] if d is None else d; cash = F["cash0"]; rev = F["rev"] / 12; cost = F["cost"] / 12; out = []
    for m in range(1, months + 1):
        rev *= 1 - d; cash += rev - cost - INT; out.append(dict(m=m, rev=rev, ebitda=rev - cost, cash=cash))
    return out
def plan(P, months=18):
    files, hc0, hh0, cat0 = heads0(); crh = A["rev_cat"] / cat0; vrh = A["rev_voice"] / F["staff"]["voice"]
    span0 = (hc0 + hh0 + cat0 + F["staff"]["voice"]) / F["staff"]["tl"]
    clean = files * (1 - A["hard_share"]) / 12; hard = files * A["hard_share"] / 12; cat = A["rev_cat"] / 12; voice = A["rev_voice"] / 12
    S = float(F["hc"]); cash = F["cash0"]; pay = A["pay"]; rows = []
    for m in range(1, months + 1):
        mig = P["mig"].get(m, 1.0); rp = P["rep"].get(m, 1.0)
        if m <= 2: clean *= 1 - A["d"]; hard *= 1 - A["d"]
        else:
            clean *= 1 - P["d_clean"]
            if m >= P["g_hard_from"]: hard *= 1 + P["g_hard"]
        cat *= 1 - P["d_cat"]; voice *= 1 - (P["d_voice_early"] if m <= 6 else P["d_voice_late"]); lab = P["lab"][m - 1]
        assist = min(P["assist_cap"], P["assist"] + max(0, m - P["assist_from"] + 1) * P["assist_gain"])
        fee = P["fee"] if m <= 12 else P["fee2"]; lrev = P["lab_rev"] if m <= 12 else P["lab_rev2"]
        r_clean = clean * ((1 - mig) * F["price"] + mig * P["p_clean"]) / 10; r_hard = hard * ((1 - rp) * F["price"] + rp * P["p_hard"]) / 10; r_lab = lab * lrev / 100
        rev = r_clean + r_hard + cat + voice + r_lab
        h_clean = clean * 1e6 * ((1 - mig) + mig * P["verify"]) / A["clean_prod"]; h_hard = hard * 1e6 / (A["hard_prod"] * (1 + assist * mig))
        h_cat = cat * 12 / crh; h_voice = voice * 12 / vrh; prod = h_clean + h_hard + h_cat + h_voice + lab
        tl = prod / (span0 if m < 4 else P["span1"]); nt = P["newtech"] if m >= 2 else 0; D = prod + tl + 60 + nt
        nat = S * F["attr"] / 12; S -= nat; bench = max(0.0, S - D); ass = bench * P["bench_exit"]; S -= ass; bench -= ass
        v = min(bench, P["vsp"].get(m, 0)); S -= v; bench -= v; hired = max(0.0, D - S); S += hired
        ppl = (h_clean * pay["clean"] + h_hard * pay["hard"] + h_cat * pay["cat"] + h_voice * pay["voice"] + lab * pay["lab"] + tl * pay["tl"]
               + 60 * pay["corp"] + nt * pay["newtech"] + bench * pay["clean"] * P["bench_pay"]) / 1200
        if m <= P["lead_cut_months"]: ppl -= 60 * pay["corp"] * P["lead_cut"] / 1200
        n = A["non"]; eng = clean * mig * fee / 10
        nonp = (n["fac"] / 12 * P["fac"].get(m, P["fac_end"]) + n["tech"] / 12 + (P["tech_add"] if m >= 3 else 0)
                + n["sga"] / 12 * (P["sga0"] if m < 4 else P["sga1"]) + n["ga"] / 12 * (P["ga0"] if m < 4 else P["ga1"]) + eng)
        e = rev - ppl - nonp
        ob = {k: P["one"][k].get(m, 0) for k in P["one"]}; ob["vsp"] = v * P["vsp_cost"] / 100; ob["bridge"] = ass * P["bridge_grant"] / 100
        one = sum(ob.values()); cash += e - one - INT
        rows.append(dict(m=m, rev=rev, r_clean=r_clean, r_hard=r_hard, r_cat=cat, r_voice=voice, r_lab=r_lab, ppl=ppl, nonp=nonp, eng=eng, ebitda=e, one=one, ob=ob,
                         cash=cash, S=S, D=D, bench=bench, vsp=v, ass=ass, nat=nat, hired=hired, h_clean=h_clean, h_hard=h_hard, h_cat=h_cat, h_voice=h_voice,
                         lab=lab, tl=tl, corp=60 + nt, clean_vol=clean, hard_vol=hard, assist=assist, mig=mig, fee=fee))
    return rows
def scen(name, extra=None):
    P = copy.deepcopy(L); P.update(SCEN[name]); P.update(extra or {}); return plan(P), P
def breach(rows): return next((r["m"] for r in rows if r["cash"] < F["floor"]), None)
def kpis(rows):
    mc = min(rows, key=lambda r: r["cash"]); be = next((r["m"] for r in rows if r["ebitda"] > 0), None)
    return dict(min_cash=mc["cash"], min_month=mc["m"], breach=breach(rows), breakeven_month=be, cash6=rows[5]["cash"], cash12=rows[11]["cash"], cash18=rows[17]["cash"],
                e6=rows[5]["ebitda"] * 12, e12=rows[11]["ebitda"] * 12, e18=rows[17]["ebitda"] * 12, rev12=rows[11]["rev"] * 12, rev18=rows[17]["rev"] * 12,
                hc12=rows[11]["S"], hc18=rows[17]["S"], ebitda_y1=sum(r["ebitda"] for r in rows[:12]), rev_y1=sum(r["rev"] for r in rows[:12]),
                one_total=sum(r["one"] for r in rows), max_bench=max(r["bench"] for r in rows),
                nat12=sum(r["nat"] for r in rows[:12]), ass12=sum(r["ass"] for r in rows[:12]), vsp12=sum(r["vsp"] for r in rows[:12]), hired12=sum(r["hired"] for r in rows[:12]))
def path1_standard(months=18):
    cash = F["cash0"]; S = float(F["hc"]); b = A["rev_bfsi"] / 12; c = A["rev_cat"] / 12; v = A["rev_voice"] / 12; out = []
    nonp = (F["cost"] - F["hc"] * F["avg_cost"] / 100) / 12 * 0.9
    for m in range(1, months + 1):
        b *= (1 - A["d"]) if m <= 2 else 0.99
        c *= 1 - L["d_cat"]; v *= 1 - L["d_voice_early"]; rev = b * (1.0 if m < 3 else F["inc_price"] / F["price"]) + c + v; S *= 1 - F["attr"] / 12
        one = ((F["hc"] - 60) * 0.45 / 100 + 2.5) / 4 if m <= 4 else 0
        e = rev - S * F["avg_cost"] / 1200 - nonp; cash += e - one - INT; out.append(dict(m=m, rev=rev, ebitda=e, cash=cash, S=S))
    return out
def path3_pivot(months=18):
    cash = F["cash0"]; S = float(F["hc"]); out = []; non0 = (F["cost"] - F["hc"] * F["avg_cost"] / 100) / 12
    for m in range(1, months + 1):
        leg = F["rev"] / 12 * max(0.0, 1 - m / 6); lab = min(2 * L["lab"][m - 1], 1000); rev = leg + lab * L["lab_rev"] / 100
        need = leg * 12 / (F["rev"] / (F["hc"] - 60)) + lab * 1.08 + 70; S *= 1 - F["attr"] / 12; bench = max(0.0, S - need); ex = bench * L["bench_exit"]; S -= ex; bench -= ex
        e = rev - (S - bench + bench * L["bench_pay"]) * F["avg_cost"] / 1200 - non0 * (0.9 if m < 4 else 0.65)
        cash += e - (1.0 if m <= 6 else 0) - INT; out.append(dict(m=m, rev=rev, ebitda=e, cash=cash, S=S))
    return out
def winddown(month=0):
    dr = drift(); cash = F["cash0"] if month == 0 else dr[month - 1]["cash"]; rev_m = F["rev"] / 12 if month == 0 else dr[month - 1]["rev"]
    hc = F["hc"]; mpay = F["avg_cost"] / 12; wage = mpay * A["wage_share"]
    notice = hc * mpay / 100; retr = hc * wage * 15 / 26 * F["tenure"] / 100; grat = hc * A["grat_elig"] * wage * 15 / 26 * F["tenure"] / 100
    leave = hc * mpay * A["leave_days"] / 30 / 100; fund = hc * wage * 15 / 30 / 100; dues = notice + retr + grat + leave + fund
    recv = rev_m * A["dso_days"] / 30 * A["recv_recovery"]; burn = -dr[0]["ebitda"] * A["closure_months"] * 0.5
    sources = cash + recv; uses = F["loan"] + dues + A["payables"] + A["closure_cost"] + burn
    return dict(month=month, cash=cash, receivables=recv, sources=sources, loan=F["loan"], notice=notice, retrenchment=retr, gratuity=grat, leave=leave, reskill_fund=fund,
                dues=dues, dues_per_head_lakh=dues / hc * 100, payables=A["payables"], closure=A["closure_cost"], closure_burn=burn, uses=uses, shortfall=uses - sources,
                dues_cover=max(0.0, min(1.0, (sources - A["payables"] - A["closure_cost"] - burn) / (F["loan"] + dues))))
def sale(close=5):
    dr = drift(); cash = dr[close - 1]["cash"]; rev = dr[close - 1]["rev"] * 12; out = {}
    for k, mult, jobs in (("bear", 0.20, 500), ("base", 0.35, 800), ("bull", 0.50, 1200)):
        ev = mult * rev; out[k] = dict(mult=mult, ev=ev, equity=ev - F["loan"] + cash, jobs=jobs, jobs_pct=jobs / F["hc"])
    return dict(close=close, cash_at_close=cash, rev_at_close=rev, cases=out)
def unit_econ(rows):
    files, hc0, hh0, cat0 = heads0(); span0 = (hc0 + hh0 + cat0 + F["staff"]["voice"]) / F["staff"]["tl"]; sh = A["rev_bfsi"] / F["rev"]
    oh0 = (sum(A["non"].values()) + 60 * A["pay"]["corp"] / 100) * sh / files * 10
    lc = A["pay"]["clean"] * 1e5 / (A["clean_prod"] * 12); lh = A["pay"]["hard"] * 1e5 / (A["hard_prod"] * 12); tlc = A["pay"]["tl"] / span0
    today = dict(clean=dict(price=F["price"], labour=lc, tl=tlc * 1e5 / (A["clean_prod"] * 12), overhead=oh0, engine=0.0),
                 hard=dict(price=F["price"], labour=lh, tl=tlc * 1e5 / (A["hard_prod"] * 12), overhead=oh0, engine=0.0))
    r = rows[11]; fl = (r["clean_vol"] + r["hard_vol"]) * 12; shb = (r["r_clean"] + r["r_hard"]) / r["rev"]
    oh1 = ((r["nonp"] - r["eng"]) * 12 + r["corp"] * A["pay"]["corp"] / 100) * shb / fl * 10; tl1 = A["pay"]["tl"] / L["span1"]
    pc = A["clean_prod"] * 12 / L["verify"]; ph = A["hard_prod"] * (1 + r["assist"]) * 12
    m12 = dict(clean=dict(price=L["p_clean"], labour=A["pay"]["clean"] * 1e5 / pc, tl=tl1 * 1e5 / pc, overhead=oh1, engine=L["fee"]),
               hard=dict(price=L["p_hard"], labour=A["pay"]["hard"] * 1e5 / ph, tl=tl1 * 1e5 / ph, overhead=oh1, engine=0.0))
    for d in (today, m12):
        for k in ("clean", "hard"): d[k]["cost"] = d[k]["labour"] + d[k]["tl"] + d[k]["overhead"] + d[k]["engine"]; d[k]["margin"] = d[k]["price"] - d[k]["cost"]
        hs = A["hard_share"]; d["blended"] = dict(price=(1 - hs) * d["clean"]["price"] + hs * d["hard"]["price"], cost=(1 - hs) * d["clean"]["cost"] + hs * d["hard"]["cost"])
        d["blended"]["margin"] = d["blended"]["price"] - d["blended"]["cost"]
    return dict(today=today, m12=m12)
def line_pnl():
    files, hc0, hh0, cat0 = heads0(); span0 = (hc0 + hh0 + cat0 + F["staff"]["voice"]) / F["staff"]["tl"]; p = A["pay"]; oh = sum(A["non"].values()) + 60 * p["corp"] / 100; out = {}
    for k, rev, heads, pay in (("BFSI clean files", A["rev_bfsi"] * (1 - A["hard_share"]), hc0, p["clean"]), ("BFSI hard files", A["rev_bfsi"] * A["hard_share"], hh0, p["hard"]),
                               ("Catalogue QC", A["rev_cat"], cat0, p["cat"]), ("Voice and chat", A["rev_voice"], F["staff"]["voice"], p["voice"])):
        direct = heads * pay / 100 + heads / span0 * p["tl"] / 100; o = oh * rev / F["rev"]
        out[k] = dict(rev=rev, heads=heads, direct=direct, contribution=rev - direct, overhead=o, ebitda=rev - direct - o, margin=(rev - direct - o) / rev, rev_per_head_lakh=rev / heads * 100)
    return out
TORNADO = [("Labelling revenue per head", "lab_rev", 0.50, 0.72), ("Engine fee per clean file", "fee", 11.0, 6.0), ("Hard-file price", "p_hard", 44.0, 52.0),
           ("Clean-file volume decline", "d_clean", 0.03, 0.005), ("Catalogue run-off speed", "d_cat", 0.07, 0.02), ("Clean-file price", "p_clean", 29.0, 33.0),
           ("Hard-file volume growth", "g_hard", 0.0, 0.035), ("AI-assist gain on hard files", "assist", 0.30, 0.55), ("Human verification share", "verify", 0.30, 0.15), ("Bridge pay on the bench", "bench_pay", 1.0, 0.6)]
def tornado():
    out = []
    for name, k, lo, hi in TORNADO:
        res = []
        for v in (lo, hi):
            P = copy.deepcopy(L); P[k] = v
            if k == "lab_rev": P["lab_rev2"] = v
            if k == "fee": P["fee2"] = min(v, L["fee2"]) if v < L["fee"] else v
            r = plan(P); res.append((min(x["cash"] for x in r), r[11]["ebitda"] * 12))
        out.append(dict(name=name, key=k, lo=lo, hi=hi, min_lo=res[0][0], min_hi=res[1][0], e12_lo=res[0][1], e12_hi=res[1][1]))
    return sorted(out, key=lambda t: t["min_lo"])
def grid():
    ph = [42.0, 45.0, 48.0, 51.0, 54.0]; dc = [0.005, 0.010, 0.015, 0.025, 0.035]; g = []
    for p in ph:
        row = []
        for d in dc:
            P = copy.deepcopy(L); P["p_hard"] = p; P["d_clean"] = d; row.append(min(x["cash"] for x in plan(P)[:12]))
        g.append(row)
    return dict(p_hard=ph, d_clean=dc, min_cash_12m=g)
def build():
    O = {}; dr = drift(); O["drift"] = dict(rows=dr, breach=breach(dr), zero=next(r["m"] for r in dr if r["cash"] < 0), cash6=dr[5]["cash"])
    lo, hi = 0.0, 0.1
    for _ in range(60):
        mid = (lo + hi) / 2
        if drift(d=mid)[5]["cash"] > F["floor"]: lo = mid
        else: hi = mid
    O["runway"] = dict(usable=F["cash0"] - F["floor"], free_after_budget=F["cash0"] - F["floor"] - F["budget"], implied_decline=mid, observed_decline=1 - (182 / 226) ** (1 / 7.5),
                       flat_breach=breach(drift(d=0.0)), flat_zero=next(r["m"] for r in drift(months=30, d=0.0) if r["cash"] < 0))
    h = F["hist"]; emp = [h["rev"][i] * h["emp_pct"][i] for i in range(4)]; emp[3] = F["hc"] * F["avg_cost"] / 100
    O["history"] = dict(emp_cost=emp, non_emp=[h["cost"][i] - emp[i] for i in range(4)], rev_per_head=[h["rev"][i] / h["hc"][i] * 100 for i in range(4)], cost_per_head=[emp[i] / h["hc"][i] * 100 for i in range(4)],
                        dropthrough=(h["ebitda"][1] - h["ebitda"][3]) / (h["rev"][1] - h["rev"][3]), hc_at_55pct=F["rev"] * 0.55 / F["avg_cost"] * 100, leavers_per_year=F["hc"] * F["attr"])
    f, hc0, hh0, cat0 = heads0(); O["base_heads"] = dict(files_mn=f, clean=hc0, hard=hh0, cat=cat0, voice=F["staff"]["voice"])
    O["lines"] = line_pnl(); O["lines_other_margin"] = (F["rev"] - A["rev_bfsi"] - (F["cost"] - A["rev_bfsi"] * F["unit_cost"] / F["price"])) / (F["rev"] - A["rev_bfsi"])
    O["plan"] = {}
    for k in SCEN:
        r, P = scen(k); O["plan"][k] = dict(rows=r, kpi=kpis(r))
    r, P = scen("bear", CONT); O["plan"]["bear_contingency"] = dict(rows=r, kpi=kpis(r))
    b = O["plan"]["base"]["rows"]; tot = {k: sum(x["ob"][k] for x in b) for k in b[0]["ob"]}; spent = sum(tot.values())
    O["budget"] = dict(lines=tot, spent=spent, reserve=F["budget"] - spent, people_share=(tot["reskill"] + tot["retention"] + tot["bridge"] + tot["vsp"]) / spent)
    k = O["plan"]["base"]["kpi"]; m12 = b[11]
    O["workforce"] = dict(start=F["hc"], natural=k["nat12"], assisted=k["ass12"], vsp=k["vsp12"], hired=k["hired12"], end=k["hc12"],
                          roles_m12=dict(hard_desk=m12["h_hard"], clean_verifiers=m12["h_clean"], catalogue=m12["h_cat"], voice=m12["h_voice"], data_services=m12["lab"], team_leads=m12["tl"], tech_corporate=m12["corp"]),
                          severance_payback_months=L["vsp_cost"] / (A["pay"]["clean"] / 12), statutory_min_lakh=winddown(0)["dues_per_head_lakh"])
    O["unit"] = unit_econ(b); O["tornado"] = tornado(); O["grid"] = grid()
    p1 = path1_standard(); p3 = path3_pivot()
    O["paths"] = dict(drift=dict(breach=O["drift"]["breach"], min_cash12=min(x["cash"] for x in dr[:12]), jobs12=0, e12=dr[11]["ebitda"] * 12, cash=[x["cash"] for x in dr]),
        p1_standard=dict(breach=breach(p1), min_cash12=min(x["cash"] for x in p1[:12]), jobs12=p1[11]["S"], e12=p1[11]["ebitda"] * 12, cash=[x["cash"] for x in p1]),
        p3_pivot=dict(breach=breach(p3), min_cash12=min(x["cash"] for x in p3[:12]), jobs12=p3[11]["S"], e12=p3[11]["ebitda"] * 12, cash=[x["cash"] for x in p3]),
        setu=dict(breach=k["breach"], min_cash12=min(x["cash"] for x in b[:12]), jobs12=k["hc12"], e12=k["e12"], cash=[x["cash"] for x in b]))
    O["sale"] = sale(); O["winddown"] = {str(m): winddown(m) for m in (0, 3, 6)}
    O["moneyshot"] = dict(jobs_kept=round(k["hc12"]), jobs_start=F["hc"], forced_exits=round(k["vsp12"]), cash_floor=k["min_cash"], drift_breach=O["drift"]["breach"], budget_spent=spent, reserve=F["budget"] - spent)
    O["meta"] = dict(F=F, A=A, L=L, SCEN=SCEN, CONT=CONT); return O
def rnd(o):
    if isinstance(o, float): return round(o, 4)
    if isinstance(o, dict): return {str(a): rnd(b) for a, b in o.items()}
    if isinstance(o, (list, tuple)): return [rnd(x) for x in o]
    return o
if __name__ == "__main__":
    O = rnd(build()); here = pathlib.Path(__file__).resolve().parent
    O["meta"]["hash"] = hashlib.sha1(json.dumps(O, sort_keys=True).encode()).hexdigest()[:10]
    (here / "model_outputs.json").write_text(json.dumps(O, indent=1, ensure_ascii=False), encoding="utf-8")
    k = O["plan"]["base"]["kpi"]; w = O["winddown"]["0"]; u = O["unit"]
    chk = [("drift breaches covenant in month 6", O["drift"]["breach"] == 6), ("drift cash hits zero in month 9", O["drift"]["zero"] == 9),
           ("base plan never breaches", k["breach"] is None), ("base min cash >= 20", k["min_cash"] >= 20), ("budget spent <= 15", O["budget"]["spent"] <= 15),
           ("no forced exits in base", k["vsp12"] == 0), ("blended unit cost ties to 41 within 0.5", abs(u["today"]["blended"]["cost"] - 41) < 0.5),
           ("line EBITDA sums to -31 within 1.5", abs(sum(v["ebitda"] for v in O["lines"].values()) + 31) < 1.5), ("wind-down shortfall positive", w["shortfall"] > 0),
           ("every single-factor downside keeps cash above 15", all(t["min_lo"] > 15 for t in O["tornado"]))]
    for n, ok in chk: print(("PASS " if ok else "FAIL ") + n)
    print("HASH", O["meta"]["hash"])
```
<!-- END FILE -->

## 17. Values generator (model outputs to slide copy)

Every number and every sentence that carries a number on a slide is produced here from `model_outputs.json`. Slide code never hard-codes a modelled figure.

<!-- FILE: model/make_values.py -->
```python
# ===== SETU VALUES =====
"""Reads model/model_outputs.json and writes deck/values.js (one JS constant V) and model/model_tables.md.
Run from anywhere:  python lsr-caseforchange/model/make_values.py"""
import json, pathlib
HERE = pathlib.Path(__file__).resolve().parent; O = json.loads((HERE / "model_outputs.json").read_text(encoding="utf-8"))
MINUS = "−"; RS = "₹"
def n0(v):
    s = str(int(round(abs(v)))); out = s[-3:]; s = s[:-3]
    while s: out = s[-2:] + "," + out; s = s[:-2]
    return (MINUS if round(v) < 0 else "") + out
def n1(v): return (MINUS if round(v, 1) < 0 else "") + ("%.1f" % abs(v))
def n2(v): return (MINUS if round(v, 2) < 0 else "") + ("%.2f" % abs(v))
def sg(v): return ("+" if v > 0 else "") + n1(v)
def pc(v, d=0): return (MINUS if v < 0 else "") + (("%." + str(d) + "f") % abs(v * 100)) + "%"
F = O["meta"]["F"]; A = O["meta"]["A"]; L = O["meta"]["L"]; S = O["meta"]["SCEN"]
B = O["plan"]["base"]; K = B["kpi"]; R = B["rows"]; DR = O["drift"]["rows"]; H = O["history"]; U = O["unit"]; W = O["workforce"]; BU = O["budget"]; WD = O["winddown"]; SA = O["sale"]["cases"]; LN = O["lines"]
kb, ku, kc = O["plan"]["bear"]["kpi"], O["plan"]["bull"]["kpi"], O["plan"]["bear_contingency"]["kpi"]
jobs = n0(K["hc12"]); floor_gap = K["min_cash"] - F["floor"]; bench_cost = sum(r["bench"] for r in R[:12]) * A["pay"]["clean"] * L["bench_pay"] / 1200
lead_save = 60 * A["pay"]["corp"] * L["lead_cut"] / 100 * L["lead_cut_months"] / 12; reskill_pool = W["roles_m12"]["hard_desk"] + W["roles_m12"]["data_services"] + W["roles_m12"]["clean_verifiers"] + W["roles_m12"]["team_leads"]
def clip(xs, lo): 
    out = []; dead = False
    for x in xs:
        if dead: out.append(None)
        else:
            out.append(round(x, 1))
            if x < lo: dead = True
    return out
CR = ["Runway", "Cash", "Jobs", "Control", "Upside", "Speed"]; WT = [0.25, 0.20, 0.25, 0.10, 0.10, 0.10]
SC = [["Drift, no decision", [1, 1, 1, 3, 1, 5]], ["1 Reskill everyone", [1, 1, 4, 5, 2, 2]], ["2 Sell or merge now", [3, 3, 2, 1, 3, 3]],
      ["3 Pivot outright", [1, 1, 2, 5, 4, 1]], ["4 Wind down", [2, 1, 1, 2, 1, 4]], ["Setu: Path 1 rebuilt", [5, 4, 4, 4, 4, 3]]]
score = [round(sum(a * b for a, b in zip(s[1], WT)), 2) for s in SC]
assert score[-1] == max(score) and K["breach"] is None and round(K["vsp12"]) == 0
T = sorted(O["tornado"], key=lambda t: t["min_lo"])[:7]
V = dict(
  team=dict(name="TEAM IDEAFORGE", rows=[["Harsh Kawatra", "Delhi Technological University", "Team Leader"], ["Dayita Arora", "Ramjas College, University of Delhi", "Member"], ["Aakriti Aggarwal", "Maharaja Agrasen Institute of Management Studies (MAIMS)", "Member"]]),
  cover=dict(left=[["BFSI FILES", RS + "38 price, " + RS + "41 cost"], ["CATALOGUE QC", "Zero contribution"], ["VOICE, CHAT", "380 agents"]], right=[["HARD-FILE DESK", RS + n0(L["p_hard"]) + ", AI-assisted"], ["AI ENGINE LINE", "Clean files at " + RS + n0(L["p_clean"])], ["DATA SERVICES", n0(L["lab"][11]) + " labellers"], ["REGIONAL VOICE", "Human escalation"]], thesis="Restructure first, then reskill into the work AI cannot do.",
    body="Primary path: Reskill and Restructure (Path 1), rebuilt around the 30% of files that are handwritten or in regional languages, an AI engine for the clean 70%, and an AI data services line. Cash stays above " + RS + n1(K["min_cash"]) + " Cr, " + jobs + " of 2,400 jobs remain at month 12, and nobody is forced out in the base case.",
    source="Source: Case for Change case brief, Economics Department, Lady Shri Ram College for Women | Team model, base case"),
  s2=dict(finding="Revenue fell " + RS + "80 Cr from its FY24 peak and " + pc(H["dropthrough"]) + " of that fall reached EBITDA, because neither the " + RS + "144 Cr payroll nor the " + RS + "69 Cr of other cost moved; the covenant is breached in month " + str(O["drift"]["breach"]),
    sowhat="the cost base never flexed and the clock runs to " + RS + "15 Cr, not to zero; the opening is the work AI still cannot read",
    source="Source: Case for Change case brief, sections 1 and 2 | Team model, drift case (revenue " + MINUS + "2.45% a month, interest 11%, assumptions A01 and A02) | NASSCOM Strategic Review 2026",
    emp=[round(x, 1) for x in H["emp_cost"]], non=[round(x, 1) for x in H["non_emp"]], rev=F["hist"]["rev"], ebitda=F["hist"]["ebitda"],
    drift=[40.0] + [round(r["cash"], 1) for r in DR[:9]], flat=[round(40 - (i * (31 / 12 + 40 * A["interest"] / 12)), 1) for i in range(10)],
    cashbar=[F["floor"], F["budget"], F["cash0"] - F["floor"] - F["budget"]], free_months=n1((F["cash0"] - F["floor"] - F["budget"]) / (31 / 12)),
    rivals=[["The Company", RS + "38", RS + "41", MINUS + RS + "3", "Every line loses"], ["AI-native firm", RS + "27", RS + "9", "+" + RS + "18", "Handwritten, regional"],
            ["Incumbent + AI", RS + "33", RS + "28", "+" + RS + "5", "Cost above " + RS + "27"], ["Voice AI firm", "n/s", "n/s", "n/s", "Needs labellers"]],
    hid=[dict(label="Revenue", value=31, text=MINUS + "31%"), dict(label="Headcount", value=6, text=MINUS + "6%"), dict(label="Revenue per head", value=26, text=MINUS + "26%")],
    leavers=n0(H["leavers_per_year"])),
  s3=dict(finding="The " + RS + "41 average file hides two businesses: a clean file that costs " + RS + n0(U["today"]["clean"]["cost"]) + " and a hard file that costs " + RS + n0(U["today"]["hard"]["cost"]) + "; a wind-down today would owe " + RS + n0(WD["0"]["dues"]) + " Cr in dues that the cash cannot cover",
    sowhat="a severance takes " + n2(W["severance_payback_months"]) + " months to pay back, longer than the runway, so cutting people first makes the covenant problem worse before it helps",
    source="Source: Case brief | Team model (assumptions A03 to A12) | Industrial Relations Code 2020, Code on Social Security 2020 and Code on Wages 2019 (compensation, gratuity and the 50% wage rule) | Balance sheet items are team assumptions",
    unit=[dict(label="Clean", segs=[round(U["today"]["clean"][k], 1) for k in ("labour", "tl", "overhead")], total=RS + n1(U["today"]["clean"]["cost"])),
          dict(label="Hard", segs=[round(U["today"]["hard"][k], 1) for k in ("labour", "tl", "overhead")], total=RS + n1(U["today"]["hard"]["cost"])),
          dict(label="Blended", segs=[round(0.7 * U["today"]["clean"][k] + 0.3 * U["today"]["hard"][k], 1) for k in ("labour", "tl", "overhead")], total=RS + n1(U["today"]["blended"]["cost"]))],
    lines=[dict(label=lab, value=round(v["ebitda"], 1), text=sg(v["ebitda"])) for lab, v in zip(["Clean files", "Hard files", "Catalogue", "Voice"], LN.values())], lines_total=round(sum(v["ebitda"] for v in LN.values()), 1),
    exits=[["Statutory min", n2(WD["0"]["dues_per_head_lakh"]), n1(WD["0"]["dues_per_head_lakh"] / 0.5)], ["Voluntary exit", n2(L["vsp_cost"]), n2(W["severance_payback_months"])],
           ["Bridge grant", n2(L["bridge_grant"]), n1(L["bridge_grant"] / 0.4)], ["Month on bench", n2(0.4 * L["bench_pay"]), n2(L["bench_pay"])]],
    afford=[["Payroll today", RS + "144 Cr", "79% of revenue"], ["Payroll at the FY24 ratio", RS + n0(F["rev"] * 0.55) + " Cr", "55%, " + n0(H["hc_at_55pct"]) + " people"], ["Gap to an affordable payroll", RS + n0(144 - F["rev"] * 0.55) + " Cr", n0(2400 - H["hc_at_55pct"]) + " people"],
            ["Leavers in a normal year", "26%", n0(H["leavers_per_year"]) + " people"], ["Dues if all 2,400 exit", RS + n1(WD["0"]["dues"]) + " Cr", RS + n2(WD["0"]["dues_per_head_lakh"]) + " lakh each"], ["Cash after repaying the loan", RS + "0 Cr", "40 less 40"]],
    wd=[dict(label="Cash", value=40.0, kind="total", text="40.0"), dict(label="Receivables", value=round(WD["0"]["receivables"], 1), text="+" + n1(WD["0"]["receivables"])), dict(label="Term loan", value=-40.0, text=MINUS + "40.0"),
        dict(label="Staff dues", value=-round(WD["0"]["dues"], 1), text=MINUS + n1(WD["0"]["dues"])), dict(label="Other costs", value=-round(WD["0"]["payables"] + WD["0"]["closure"] + WD["0"]["closure_burn"], 1), text=MINUS + n1(WD["0"]["payables"] + WD["0"]["closure"] + WD["0"]["closure_burn"])),
        dict(label="Shortfall", value=-round(WD["0"]["shortfall"], 1), kind="total", text=MINUS + n1(WD["0"]["shortfall"]))], cover=pc(WD["0"]["dues_cover"])),
  s4=dict(finding="Path 1, rebuilt as Project Setu, is the only route that stays above the " + RS + "15 Cr covenant: " + jobs + " of 2,400 jobs remain at month 12 with no forced exit, where a sale keeps about " + n0(SA["base"]["jobs"]) + " and a wind-down none",
    sowhat="conclusively, the standard paths fail on runway or on people; Setu passes both and keeps a sale open as a fallback from a stronger position",
    source="Source: Team model, 18-month cash paths for each route | Sale case: 0.20 to 0.50 times revenue (assumption A18) | Klarna (2025) and NASSCOM (2026) as cited in the research document, section 8",
    money=jobs, money2=RS + n1(K["min_cash"]) + " Cr", money3=RS + n1(floor_gap) + " Cr above the covenant floor", cash=dict(setu=[40.0] + [round(r["cash"], 1) for r in R[:12]], drift=clip([40.0] + O["paths"]["drift"]["cash"][:12], -6),
      p1=clip([40.0] + O["paths"]["p1_standard"]["cash"][:12], -6), p3=clip([40.0] + O["paths"]["p3_pivot"]["cash"][:12], -6)),
    why=["Reskill all: AI-assisted cost of " + RS + "28 is still above the " + RS + "27 price", "Sell now: about " + n0(SA["base"]["jobs"]) + " jobs kept, on the buyer's terms", "Pivot outright: covenant breached in month " + str(O["paths"]["p3_pivot"]["breach"]), "Wind down: " + RS + n0(WD["0"]["dues"]) + " Cr of dues, " + pc(WD["0"]["dues_cover"]) + " covered"],
    crit=CR, routes=[s[0] for s in SC], scores=[s[1] + [score[i]] for i, s in enumerate(SC)], formula="Score = 25% runway + 20% cash floor + 25% jobs + 10% each for control, upside and speed (1 to 5)"),
  s5=dict(finding="Setu spends " + RS + n1(BU["spent"]) + " Cr of the " + RS + "15 Cr budget, turns EBITDA positive in month " + str(K["breakeven_month"]) + " and reaches a " + RS + n1(K["e12"]) + " Cr run-rate by month 12, with " + RS + n1(BU["reserve"]) + " Cr held in reserve for the downside",
    sowhat="the milestones are cash tests, not activity tests: each gate either releases the next tranche or opens the sale fallback",
    source="Source: Team model, base, bear and bull cases (assumptions A07 to A16) | Budget lines from the plan levers L01 to L12 | Case brief for the " + RS + "15 Cr budget and the " + RS + "15 Cr covenant",
    budget=[dict(label="Reskilling", value=round(BU["lines"]["reskill"], 1)), dict(label="Technology", value=round(BU["lines"]["tech"], 1)), dict(label="Retention, bridge", value=round(BU["lines"]["retention"] + BU["lines"]["bridge"], 1)),
            dict(label="Footprint", value=round(BU["lines"]["footprint"], 1)), dict(label="Reserve", value=round(BU["reserve"], 1))],
    budget_rows=[["Reskilling", n1(BU["lines"]["reskill"]), n0(reskill_pool) + " people, new roles"], ["Technology", n1(BU["lines"]["tech"]), "Engine, assist tools"], ["Retention, bridge", n1(BU["lines"]["retention"] + BU["lines"]["bridge"]), "Key staff, exit grants"],
                 ["Footprint", n1(BU["lines"]["footprint"]), "Half the seats released"], ["Reserve, ring-fenced", n1(BU["reserve"]), "Severance if a gate fails"]],
    cash=dict(base=[40.0] + [round(r["cash"], 1) for r in R], bear=clip([40.0] + [r["cash"] for r in O["plan"]["bear"]["rows"]], 0), bull=[40.0] + [round(r["cash"], 1) for r in O["plan"]["bull"]["rows"]]),
    scen=[["Clean volume", pc(-S["bear"]["d_clean"], 1), pc(-L["d_clean"], 1), pc(-S["bull"]["d_clean"], 1)], ["Hard-file price", RS + n0(S["bear"]["p_hard"]), RS + n0(L["p_hard"]), RS + n0(S["bull"]["p_hard"])],
          ["Labelling a head", n0(S["bear"]["lab_rev"] * 1e5), n0(L["lab_rev"] * 1e5), n0(S["bull"]["lab_rev"] * 1e5)], ["Cash, month 12", n1(kb["cash12"]), n1(K["cash12"]), n1(ku["cash12"])],
          ["EBITDA run-rate", sg(kb["e12"]), sg(K["e12"]), sg(ku["e12"])], ["Covenant", "Breach", "Held", "Held"]],
    gates=[["M3", "20% on the engine", "Add a vendor"], ["M6", "Cash above " + RS + n0(K["cash6"] - 1) + " Cr", "Open the sale"], ["M9", "EBITDA positive", "Use reserve"], ["M12", RS + n0(K["e12"]) + " Cr run-rate", "Restore pay"]], gate_note="Month 6 decides: below the cash test, sale talks open while cash is still near " + RS + n0(kb["cash6"]) + " Cr. Bear breaches in month " + str(kb["breach"]) + "."),
  s6=dict(finding="Of 2,400 people today, " + n0(W["natural"]) + " leave through normal attrition that is no longer backfilled and " + n0(W["assisted"]) + " take a funded bridge to an outside job; the firm employs " + jobs + " at month 12 and " + RS + n1(BU["reserve"]) + " Cr stays ring-fenced for severance",
    sowhat="therefore, Path 1 rebuilt around the hard file protects the covenant and three in four jobs, and prices the fallback before it is needed",
    source="Source: Team model, base case workforce flow | Case brief (26% attrition, six-year tenure, " + RS + "6 lakh average cost) | Labour codes as cited on slide 3 | Risk ratings are team judgement",
    t1="2,400 TO " + jobs + ", NO FORCED EXIT", flow=[dict(label="Today", value=2400, kind="total", text="2,400"), dict(label="Leavers", value=-round(W["natural"]), text=MINUS + n0(W["natural"])), dict(label="Bridge exits", value=-round(W["assisted"]), text=MINUS + n0(W["assisted"])),
          dict(label="Forced exits", value=0, text="0"), dict(label="Hires", value=round(W["hired"]), text="+" + n0(W["hired"])), dict(label="Month 12", value=round(W["end"]), kind="total", text=jobs)],
    roles=[dict(label="Catalogue holding line", value=round(W["roles_m12"]["catalogue"])), dict(label="AI data services", value=round(W["roles_m12"]["data_services"])), dict(label="Hard-file desk", value=round(W["roles_m12"]["hard_desk"])),
           dict(label="Regional voice", value=round(W["roles_m12"]["voice"])), dict(label="Team leads", value=round(W["roles_m12"]["team_leads"])), dict(label="Clean-file verifiers", value=round(W["roles_m12"]["clean_verifiers"])), dict(label="Tech and corporate", value=round(W["roles_m12"]["tech_corporate"]))],
    promise=[["Reskilling, " + n0(reskill_pool) + " people", n1(BU["lines"]["reskill"])], ["Bridge pay, 75%, peak " + n0(K["max_bench"]), n1(bench_cost)], ["Retention for key staff", n1(BU["lines"]["retention"])],
             ["Bridge grants, " + n0(W["assisted"]) + " people", n1(BU["lines"]["bridge"])], ["Severance reserve", n1(BU["reserve"])], ["Leadership pay cut, 25%", MINUS + n1(lead_save)]],
    risks=[["Clients reject " + RS + "48", "M", "H", "Tiered contract, " + RS + "44 floor"], ["Engine accuracy slips", "M", "H", "Two vendors, human check"], ["Best handlers leave", "H", "H", "Retention pay, career ladder"],
           ["Labelling demand is slow", "M", "M", "Catalogue as the holding line"], ["AI-native cuts price", "H", "M", "Exit clean files, keep hard"], ["Lender tightens covenant", "L", "H", RS + n1(BU["reserve"]) + " Cr reserve, sale track"]],
    grid=[[round(x, 1) for x in row] for row in O["grid"]["min_cash_12m"]], grid_rows=[RS + n0(p) + " hard price" for p in O["grid"]["p_hard"]], grid_cols=[pc(-d, 1) for d in O["grid"]["d_clean"]]),
  s7=dict(finding="Every figure traces to the case or to a numbered assumption; no single assumption moved to its downside takes cash below " + RS + n1(min(t["min_lo"] for t in O["tornado"])) + " Cr, and only all five together breach the covenant",
    sowhat="method limit: the line split, the balance sheet and productivity are team assumptions; the conclusions hold across the ranges shown",
    source="Source: Team model (hash " + O["meta"]["hash"] + ") | Full assumptions register, sources and tables are in the research document",
    assume=[["A01", "Revenue decline with no decision", "2.45% a month"], ["A02", "Interest on the term loan", "11% a year"], ["A03", "Revenue: BFSI, catalogue, voice", RS + "100, 48, 34 Cr"], ["A04", "Hard files in BFSI volume", "30%"],
            ["A05", "Files a person a month", "2,950 and 1,500"], ["A06", "Wages as a share of pay", "50%"], ["A07", "Engine fee per clean file", RS + "8"], ["A08", "Labelling revenue a head", RS + "63,000 a month"]],
    tor=[dict(label=t["name"], lo=round(t["min_lo"], 1), hi=round(t["min_hi"], 1), loText=n1(t["min_lo"]), hiText=n1(t["min_hi"])) for t in T], tor_base=round(K["min_cash"], 1),
    sale=[["Owners' value, " + RS + " Cr", n0(SA["bear"]["equity"]), n0(SA["base"]["equity"]), n0(SA["bull"]["equity"])], ["Jobs kept by a buyer", n0(SA["bear"]["jobs"]), n0(SA["base"]["jobs"]), n0(SA["bull"]["jobs"])]],
    wind=[["Dues payable", pc(WD["0"]["dues_cover"]), pc(WD["3"]["dues_cover"]), pc(WD["6"]["dues_cover"])]],
    bear="All five downsides at once breach in month " + str(kb["breach"]) + "; the month 6 gate opens the sale track first."),
  s8=dict(thesis="Project Setu: restructure first, then reskill into the work AI cannot do."))
assert len(V["s2"]["finding"]) < 200 and len(V["s3"]["finding"]) < 200 and len(V["s4"]["finding"]) < 215 and len(V["s5"]["finding"]) < 200 and len(V["s6"]["finding"]) < 225, [len(V[k]["finding"]) for k in ("s2", "s3", "s4", "s5", "s6", "s7")]
(HERE.parent / "deck").mkdir(exist_ok=True)
(HERE.parent / "deck" / "values.js").write_text("const V = " + json.dumps(V, ensure_ascii=False) + ";\n", encoding="utf-8")
def tbl(head, rows): return "\n".join(["| " + " | ".join(head) + " |", "|" + "---|" * len(head)] + ["| " + " | ".join(str(c) for c in r) + " |" for r in rows]) + "\n"
md = ["# Setu model tables (generated by make_values.py, model hash " + O["meta"]["hash"] + ")\n", "Units: " + RS + " crore unless stated.\n",
  "## T1. History rebuilt from the case table\n", tbl(["Line", "FY23", "FY24", "FY25", "Run-rate"], [["Revenue"] + F["hist"]["rev"], ["Total operating cost"] + F["hist"]["cost"], ["EBITDA"] + F["hist"]["ebitda"], ["Employee cost"] + [n1(x) for x in H["emp_cost"]], ["Other cost"] + [n1(x) for x in H["non_emp"]], ["Headcount"] + F["hist"]["hc"], ["Revenue per head, " + RS + " lakh"] + [n2(x) for x in H["rev_per_head"]], ["Employee cost per head, " + RS + " lakh"] + [n2(x) for x in H["cost_per_head"]]]),
  "## T2. Drift case, month by month\n", tbl(["Month", "Revenue", "EBITDA", "Cash"], [[r["m"], n2(r["rev"]), n2(r["ebitda"]), n1(r["cash"])] for r in DR]),
  "## T3. Line economics today (assumed split)\n", tbl(["Line", "Revenue", "Heads", "Direct cost", "Contribution", "Overhead", "EBITDA", "Margin", "Revenue per head, " + RS + " lakh"], [[k, n1(v["rev"]), n0(v["heads"]), n1(v["direct"]), n1(v["contribution"]), n1(v["overhead"]), n1(v["ebitda"]), pc(v["margin"]), n2(v["rev_per_head_lakh"])] for k, v in LN.items()]),
  "## T4. Unit economics per BFSI file (" + RS + ")\n", tbl(["State", "File", "Price", "Labour", "Team lead", "Engine", "Overhead", "Cost", "Margin"], [[st, f, n1(U[st][f]["price"]), n1(U[st][f]["labour"]), n1(U[st][f]["tl"]), n1(U[st][f]["engine"]), n1(U[st][f]["overhead"]), n1(U[st][f]["cost"]), n1(U[st][f]["margin"])] for st in ("today", "m12") for f in ("clean", "hard")] + [[st, "blended", n1(U[st]["blended"]["price"]), "", "", "", "", n1(U[st]["blended"]["cost"]), n1(U[st]["blended"]["margin"])] for st in ("today", "m12")]),
  "## T5. Setu base case, month by month\n", tbl(["Month", "Revenue", "Clean", "Hard", "Catalogue", "Voice", "Data services", "People cost", "Other cost", "EBITDA", "One-offs", "Cash", "Headcount", "Bench"], [[r["m"], n2(r["rev"]), n2(r["r_clean"]), n2(r["r_hard"]), n2(r["r_cat"]), n2(r["r_voice"]), n2(r["r_lab"]), n2(r["ppl"]), n2(r["nonp"]), n2(r["ebitda"]), n2(r["one"]), n1(r["cash"]), n0(r["S"]), n0(r["bench"])] for r in R]),
  "## T6. Scenario summary\n", tbl(["Measure", "Bear", "Bear with contingency", "Base", "Bull"], [[lab] + [f(O["plan"][s]["kpi"][key]) if O["plan"][s]["kpi"][key] is not None else "None" for s in ("bear", "bear_contingency", "base", "bull")] for lab, key, f in (("Lowest cash", "min_cash", n1), ("Month of lowest cash", "min_month", str), ("Covenant breach month", "breach", str), ("EBITDA break-even month", "breakeven_month", str), ("Cash at month 6", "cash6", n1), ("Cash at month 12", "cash12", n1), ("Cash at month 18", "cash18", n1), ("EBITDA run-rate, month 12", "e12", n1), ("EBITDA run-rate, month 18", "e18", n1), ("Revenue run-rate, month 12", "rev12", n1), ("Headcount, month 12", "hc12", n0), ("Forced exits to month 12", "vsp12", n0), ("One-off spend", "one_total", n2))]),
  "## T7. Workforce flow to month 12 (base)\n", tbl(["Item", "People"], [["Start", 2400], ["Natural attrition, not backfilled", n0(W["natural"])], ["Assisted bridge exits", n0(W["assisted"])], ["Forced exits", n0(W["vsp"])], ["Hires", n0(W["hired"])], ["Month 12", n0(W["end"])]] + [["Role: " + k.replace("_", " "), n0(v)] for k, v in W["roles_m12"].items()]),
  "## T8. Emergency budget (" + RS + " Cr)\n", tbl(["Line", "Amount"], [[k, n2(v)] for k, v in BU["lines"].items()] + [["Spent", n2(BU["spent"])], ["Reserve", n2(BU["reserve"])]]),
  "## T9. Sensitivity: one assumption at a time\n", tbl(["Assumption", "Downside value", "Upside value", "Lowest cash, downside", "Lowest cash, upside", "EBITDA M12, downside", "EBITDA M12, upside"], [[t["name"], t["lo"], t["hi"], n1(t["min_lo"]), n1(t["min_hi"]), n1(t["e12_lo"]), n1(t["e12_hi"])] for t in O["tornado"]]),
  "## T10. Lowest 12-month cash: hard-file price (rows) by clean-volume decline (columns)\n", tbl(["Hard price"] + [pc(d, 1) for d in O["grid"]["d_clean"]], [[n0(p)] + [n1(x) for x in O["grid"]["min_cash_12m"][i]] for i, p in enumerate(O["grid"]["p_hard"])]),
  "## T11. The standard paths\n", tbl(["Route", "Covenant breach month", "Lowest cash in 12 months", "People at month 12", "EBITDA run-rate, month 12"], [[k, str(v["breach"]), n1(v["min_cash12"]), n0(v["jobs12"]), n1(v["e12"])] for k, v in O["paths"].items()]),
  "## T12. Sale at month 5 and wind-down\n", tbl(["Sale case", "Multiple of revenue", "Enterprise value", "Value to owners", "Jobs kept"], [[k, n2(v["mult"]), n1(v["ev"]), n1(v["equity"]), n0(v["jobs"])] for k, v in SA.items()]),
  tbl(["Wind-down start", "Cash", "Receivables", "Loan", "Staff dues", "Other", "Shortfall", "Dues cover"], [["Month " + m, n1(w["cash"]), n1(w["receivables"]), n1(w["loan"]), n1(w["dues"]), n1(w["payables"] + w["closure"] + w["closure_burn"]), n1(w["shortfall"]), pc(w["dues_cover"])] for m, w in WD.items()]),
  "## T13. Route scorecard\n", tbl(["Route"] + CR + ["Score"], [[s[0]] + s[1] + [score[i]] for i, s in enumerate(SC)])]
(HERE / "model_tables.md").write_text("\n".join(md), encoding="utf-8")
print("values.js written; findings:", [len(V[k]["finding"]) for k in ("s2", "s3", "s4", "s5", "s6", "s7")], "| scores", score)
```
<!-- END FILE -->

## 18. Deck preamble parts

The preamble is assembled by `deck/gen.py pre` from three pieces: the tested helper library in `yuva-yodha/deck/preamble.js` (everything above its `// ===== URJAGRID EXTRAS v1 =====` line), the palette below, and the extras below.

<!-- FILE: deck/_palette.js -->
```js
// ===== SETU PALETTE =====
const C = {
  primary:{r:0.118,g:0.227,b:0.541}, orange:{r:0.976,g:0.451,b:0.086}, primaryDeep:{r:0.043,g:0.078,b:0.216},
  accent:{r:0.961,g:0.702,b:0.004}, alert:{r:0.851,g:0.176,b:0.125}, alertTint:{r:0.992,g:0.894,b:0.882},
  rival:{r:0.055,g:0.455,b:0.565}, rivalTint:{r:0.812,g:0.933,b:0.957},
  good:{r:0.071,g:0.502,b:0.361}, goodTint:{r:0.847,g:0.941,b:0.902}, amberTint:{r:0.996,g:0.925,b:0.784},
  tint:{r:0.859,g:0.894,b:1.0}, cream:{r:0.965,g:0.969,b:0.984}, ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.933,g:0.949,b:0.988}, white:{r:1,g:1,b:1}
};
```
<!-- END FILE -->

<!-- FILE: deck/_extras.js -->
```js
// ===== SETU EXTRAS v1 =====
function teamTable(p, x, y, cw) { cw = cw || [300, 660, 160]; const X = [0, cw[0], cw[0] + cw[1]], rh = 76, hh = 50, tw = cw[0] + cw[1] + cw[2], rows = V.team.rows, nr = rows.length;
  const t = addFrame(p, x, y, tw, hh + rh * nr, C.white, C.ink, 2, "TABLE: team");
  const h = addFrame(t, 0, 0, tw, hh, C.tint, C.ink, 2, "HEAD");
  ["Team Members", "Institution", "Role"].forEach((l, i) => addText(h, "Poppins", "Bold", 22, C.ink, l, X[i] + 16, 0, cw[i] - 24, hh, "LEFT", "CENTER"));
  rows.forEach((m, i) => { const r = addFrame(t, 0, hh + rh * i, tw, rh, i % 2 ? C.surfaceAlt : C.white, C.ink, 2, "ROW");
    m.forEach((v, j) => addText(r, "Inter", j === 0 ? "Bold" : "Semi Bold", 22, C.ink, v, X[j] + 16, 0, cw[j] - 24, rh, "LEFT", "CENTER")); });
  [cw[0], cw[0] + cw[1]].forEach(vx => addRect(t, vx - 1, 0, 2, hh + rh * nr, C.ink)); return t; }
const RIB5 = { labels: ["DIAGNOSE", "QUANTIFY", "CHOOSE", "PLAN", "PEOPLE AND RISKS"], widths: [196, 196, 166, 134, 316] };
const RIBA = { labels: ["APPENDIX", "ASSUMPTIONS", "SENSITIVITY", "ABBREVIATIONS"], widths: [196, 250, 236, 286] };
const TOTAL = 8;
function tplClear(s) { s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.cream }]; }
function head(s, n) { const rb = n === 7 ? RIBA : RIB5; const act = n === 7 ? 0 : (n >= 2 && n <= 6 ? n - 2 : -1);
  const endX = buildRibbon(s, act, rb.labels, rb.widths, 64, 36, 56); addWireH(s, endX - 10, 1730, 64, C.ink, 2.5);
  addChip(s, 1730, 36, 126, 56, "0" + n + " / 0" + TOTAL, C.primaryDeep, C.white, 24); }
function finding(s, y, text) { const f = layered(s, 64, y, 1792, 92, C.white, "CARD: finding");
  addChip(f, 16, 24, 150, 44, "FINDING", C.primary, C.white, 22);
  const t = addText(f, "Poppins", "Bold", 28, C.ink, text, 186, 0, 1590, 80, "LEFT", undefined, true); t.name = "HEADLINE";
  while (t.height > 86 && t.fontSize > 24) { t.fontSize = t.fontSize - 1; }
  if (t.height > 86) warnings.push("finding over 2 lines: " + text.slice(0, 40));
  t.y = Math.max(3, (92 - t.height) / 2); return f; }
function hdr(s, n, findingText, source) { tplClear(s); head(s, n); finding(s, 112, findingText);
  const src = addText(s, "Inter", "Semi Bold", 14, C.primary, source, 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE"; return 224; }
function legend(p, x, y, items, o) { o = o || {}; let cx = x; items.forEach(it => { addRect(p, cx, y + 6, 20, 20, it[0], C.ink, 1.5);
  const t = TL(p, cx + 28, y, 22, it[1], { family: "Inter", style: "Bold" }); cx += 28 + t.width + (o.gap || 22); }); return cx; }
function mapNode(p, x, y, w, h, num, title, sub, o) { o = o || {}; const f = layered(p, x, y, w, h, o.fill || C.white, "CARD: node " + title);
  addBadge(f, 10, 9, 36, num, o.badge || C.primary, C.white); TL(f, 54, 8, 22, title, { color: o.titleColor || C.primary, maxW: w - 62 });
  TB(f, 12, 48, w - 24, h - 52, 22, sub); return f; }
// Fine print: abbreviations and method notes, the only content text allowed under 22pt besides SOURCE and BIBLIO.
function fine(p, x, y, w, text, size) { const t = addText(p, "Inter", "Semi Bold", size || 16, C.ink, text, x, y, w, 20, "LEFT", undefined, true); t.name = "FINEPRINT"; return t; }
function floorLine(p, lc, label) { addLine(p, lc.L, lc.Y(15), lc.R, lc.Y(15), C.ink, 3, [10, 6]);
  TL(p, lc.L + 10, lc.Y(15) + 6, 22, label, { family: "Inter", style: "Bold" }); }
// ===== END SETU EXTRAS =====
```
<!-- END FILE -->

## 19. Slide code (eight slides)

Each block is one file under `deck/slides/`. `"S1"` to `"S8"` are placeholders that `gen.py bind` replaces with the real slide ids.

<!-- FILE: deck/slides/s01.js -->
```js
{ const s = await figma.getNodeByIdAsync("S1"); s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.primaryDeep }]; const D = V.cover;
addChip(s, 64, 56, 870, 56, "CASE FOR CHANGE | BUSINESS CRISIS CASE | LSR ECONOMICS", C.accent, C.ink, 22);
nm(TL(s, 64, 128, 96, "PROJECT SETU", { family: "Poppins", style: "ExtraBold", color: C.white, maxW: 870 }), "TITLE");
nm(T(s, 64, 282, 870, 26, "Emergency board review of a services firm whose labour edge has been priced out by AI", { family: "Poppins", style: "Bold", color: C.accent }), "SUBTITLE");
const v = layered(s, 64, 366, 870, 330, C.white, "CARD: thesis");
addChip(v, 24, 20, 300, 44, "OUR RECOMMENDATION", C.primary, C.white, 22);
T(v, 24, 78, 822, 28, D.thesis, { family: "Poppins", style: "Bold", color: C.primary });
T(v, 24, 168, 822, 22, D.body);
nm(TL(s, 64, 716, 26, V.team.name, { color: C.accent }), "TEAM LABEL");
teamTable(s, 64, 762, [250, 460, 160]);
const LX = 968, HX = 1262, RX = 1576, LW = 250, HW = 270, RW = 280, NH = 104, LY = [250, 480, 710], RY = [170, 380, 590, 800];
addChip(s, LX, 100, LW, 48, "TODAY", C.white, C.ink, 22); addChip(s, RX, 100, RW, 48, "MONTH 12", C.accent, C.ink, 22);
LY.forEach(y => addWireH(s, LX + LW, HX, y + NH / 2, C.accent, 3)); RY.forEach(y => addWireH(s, HX + HW, RX, y + NH / 2, C.accent, 3));
D.left.forEach((q, i) => mapNode(s, LX, LY[i], LW, NH, i + 1, q[0], q[1]));
D.right.forEach((q, i) => mapNode(s, RX, RY[i], RW, NH, i + 4, q[0], q[1], { badge: C.good, titleColor: C.good }));
const hub = layered(s, HX, 170, HW, 734, C.accent, "CARD: hub", C.white);
TB(hub, 8, 16, HW - 16, 60, 40, "SETU", { family: "Poppins", style: "ExtraBold", align: "CENTER" });
TB(hub, 8, 76, HW - 16, 40, 22, "the bridge", { family: "Inter", style: "Bold", align: "CENTER" });
badgeList(hub, 14, 150, HW - 28, ["Stop the bleed", "Price by complexity", "AI engine on clean files", "People to the hard files", "Build AI data services", "Hold a reserve for people"], { d: 36, pitch: 94, bg: C.primaryDeep, style: "Bold" });
const src = addText(s, "Inter", "Semi Bold", 14, C.accent, D.source, 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2"); const D = V.s2;
hdr(s, 2, D.finding, D.source);
const a1 = panel(s, 64, 224, 700, 350, "REVENUE FELL 31%, COST DID NOT (₹ CR)");
stackV(a1, 16, 56, 668, 250, ["FY23", "FY24", "FY25", "Run-rate"].map((l, i) => ({ label: l, total: "Rev " + D.rev[i],
  segs: [{ value: D.emp[i], color: C.primary, text: String(Math.round(D.emp[i])), textColor: C.white }, { value: D.non[i], color: C.tint, text: String(Math.round(D.non[i])) }] })), { max: 290, labelH: 40, barW: 96 });
legend(a1, 16, 312, [[C.primary, "Employee cost"], [C.tint, "Other cost"]]);
TL(a1, 0, 312, 22, "EBITDA " + D.ebitda.join(", ").replace("-", "−"), { family: "Inter", style: "Bold", color: C.alert, rightAt: 684 });
const a2 = panel(s, 780, 224, 520, 350, "THE CLOCK RUNS TO ₹15 CR");
const lc = lineChart(a2, 8, 60, 504, 250, [{ values: D.flat, color: C.rival, dash: [8, 6] }, { values: D.drift, color: C.alert }], ["0", "", "", "3", "", "", "6", "", "", "9"], { yMin: -5, yMax: 40, yTicks: [0, 15, 30], padL: 56, padR: 24 });
floorLine(a2, lc, "₹15 Cr floor");
legend(a2, 16, 312, [[C.alert, "Drift"], [C.rival, "Flat"]]);
TL(a2, 0, 312, 22, "Breach: month 6", { family: "Poppins", style: "Bold", color: C.alert, rightAt: 504 });
const a3 = panel(s, 1316, 224, 540, 350, "₹40 CR OF CASH, ₹10 CR FREE");
stackH(a3, 16, 66, 508, 56, [{ value: D.cashbar[0], color: C.alert, text: "15", textColor: C.white }, { value: D.cashbar[1], color: C.accent, text: "15" }, { value: D.cashbar[2], color: C.good, text: "10", textColor: C.white }], { minInside: 60 });
badgeList(a3, 16, 138, 508, [[["₹15 Cr ", "B"], ["must stay in the bank under the loan covenant", ""]], [["₹15 Cr ", "B"], ["is the emergency budget, inside the ₹40 Cr", ""]], [["₹10 Cr ", "B"], ["is free: " + D.free_months + " months of burn at ₹2.6 Cr", ""]]], { d: 36, pitch: 68, labels: ["A", "B", "C"] });
const b1 = panel(s, 64, 588, 760, 366, "THREE RIVALS, ONE PRICE GAP (₹ PER BFSI FILE)");
addTable(b1, 16, 62, [200, 78, 78, 92, 280], ["Player", "Price", "Cost", "Margin", "Weak spot"], D.rivals, { headerH: 40, rowH: 44, name: "TABLE: rivals", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT", "LEFT"], rowFills: [C.amberTint, null, null, null] });
RT(b1, 16, 284, 728, 22, [["The AI-native firm has ₹18 of margin: ", "B"], ["it can cut price again and still earn.", ""]]);
fine(b1, 16, 342, 728, "BFSI: banking, financial services and insurance. n/s: not stated in the case.");
const b2 = panel(s, 840, 588, 520, 366, "REVENUE DOWN 31%, STAFF DOWN 6%");
hBars(b2, 16, 62, 488, D.hid.map((h, i) => ({ label: h.label, value: h.value, text: h.text, color: [C.alert, C.rival, C.orange][i] })), { labelW: 230, rowH: 46, barH: 28, valueW: 96, max: 34 });
RT(b2, 16, 212, 488, 22, [[D.leavers + " people ", "B"], ["leave in a normal year. Headcount fell by only 150 from its peak, so most leavers were replaced while revenue fell ₹80 Cr.", ""]]);
const b3 = panel(s, 1376, 588, 480, 366, "THE GAP AI LEAVES OPEN");
badgeList(b3, 16, 62, 448, ["The AI-native firm is weaker on handwritten and regional-language forms", "The voice AI start-up cannot train its models without human labellers", "The Company has 420 exception handlers and multilingual staff in five cities"], { d: 40, pitch: 98, bg: C.good });
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3"); const D = V.s3;
hdr(s, 3, D.finding, D.source);
const a1 = panel(s, 64, 224, 580, 350, "ONE AVERAGE, TWO FILES (₹ A FILE)");
const SEG = [C.primary, C.rival, C.tint], STX = [C.white, C.white, C.ink];
stackV(a1, 16, 56, 380, 250, D.unit.map(u => ({ label: u.label, total: u.total, segs: u.segs.map((v, i) => ({ value: v, color: SEG[i], text: String(v), textColor: STX[i] })) })), { max: 72, labelH: 40, barW: 80 });
const Yp = v => 266 - 166 * v / 72;
addLine(a1, 16, Yp(38), 396, Yp(38), C.ink, 3, [10, 6]); addLine(a1, 16, Yp(27), 396, Yp(27), C.alert, 3, [10, 6]);
TL(a1, 406, Yp(38) - 24, 22, "₹38 price", { family: "Inter", style: "Bold" }); TL(a1, 406, Yp(27) - 4, 22, "₹27 rival", { family: "Inter", style: "Bold", color: C.alert });
legend(a1, 16, 312, [[C.primary, "Labour"], [C.rival, "Team lead"], [C.tint, "Overhead"]]);
const a2 = panel(s, 660, 224, 700, 350, "WHERE ₹31 CR A YEAR IS LOST");
waterfall(a2, 16, 56, 668, 262, D.lines.map(l => ({ label: l.label, value: l.value, text: l.text, color: l.value >= 0 ? C.good : C.alert })).concat([{ label: "EBITDA", value: D.lines_total, kind: "total", color: C.primaryDeep, text: String(D.lines_total).replace("-", "−") }]), { max: 14, min: -36, labelH: 60, barW: 84 });
fine(a2, 16, 322, 668, "Line split is a team assumption (A03).");
const a3 = panel(s, 1376, 224, 480, 350, "WHAT ONE EXIT COSTS");
addTable(a3, 16, 62, [214, 100, 134], ["Route", "₹ lakh", "Months"], D.exits, { headerH: 40, rowH: 46, name: "TABLE: exits", align: ["LEFT", "RIGHT", "RIGHT"] });
fine(a3, 16, 296, 448, "Per person. Months: months of that person's pay.");
const b1 = panel(s, 64, 588, 800, 366, "WHAT THE COMPANY CAN AFFORD");
addTable(b1, 16, 62, [380, 140, 248], ["Measure", "Value", "In people or pay"], D.afford, { headerH: 40, rowH: 42, name: "TABLE: afford", align: ["LEFT", "RIGHT", "RIGHT"], rowFills: [null, C.tint, C.tint, null, C.alertTint, C.alertTint] });
const b2 = panel(s, 880, 588, 976, 366, "A WIND-DOWN TODAY CANNOT PAY ITS OWN DUES (₹ CR)");
const WC = [C.primary, C.good, C.alert, C.alert, C.orange, C.primaryDeep];
waterfall(b2, 16, 56, 944, 240, D.wd.map((w, i) => Object.assign({}, w, { color: WC[i] })), { max: 72, min: -46, labelH: 44, barW: 90 });
RT(b2, 16, 302, 944, 22, [["Only " + D.cover + " of dues and debt can be met. ", "B"], ["Receivables and closure costs are team assumptions; the case gives no balance sheet.", ""]]);
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4"); const D = V.s4;
hdr(s, 4, D.finding, D.source);
const m = layered(s, 64, 224, 500, 350, C.primaryDeep, "CARD: moneyshot");
addChip(m, 20, 18, 270, 44, "JOBS AT MONTH 12", C.accent, C.ink, 22);
nm(TL(m, 20, 64, 96, D.money, { family: "Poppins", style: "ExtraBold", color: C.accent }), "MONEYSHOT");
T(m, 20, 212, 460, 22, "of 2,400 people still employed, with no forced exit in the base case", { family: "Inter", style: "Bold", color: C.white });
RT(m, 20, 274, 460, 22, [["Lowest cash " + D.money2, "A"], [": " + D.money3, "W"]], { color: C.white });
const a2 = panel(s, 580, 224, 740, 350, "CASH UNDER EACH ROUTE (₹ CR)");
const lc = lineChart(a2, 8, 60, 724, 246, [{ values: D.cash.p3, color: C.rival, dash: [8, 6] }, { values: D.cash.p1, color: C.orange }, { values: D.cash.drift, color: C.alert }, { values: D.cash.setu, color: C.primary }],
  ["0", "", "", "3", "", "", "6", "", "", "9", "", "", "12"], { yMin: -12, yMax: 40, yTicks: [0, 15, 30], padL: 56, padR: 24, zeroLine: true });
floorLine(a2, lc, "₹15 Cr covenant");
legend(a2, 16, 312, [[C.primary, "Setu"], [C.alert, "Drift"], [C.orange, "Reskill everyone"], [C.rival, "Pivot"]]);
const a3 = panel(s, 1336, 224, 520, 350, "WHY NOT THE STANDARD ROUTES");
badgeList(a3, 16, 62, 488, D.why, { d: 40, pitch: 70, bg: C.alert });
const b1 = panel(s, 64, 588, 1130, 366, "FIVE ROUTES AND SETU ON SIX TESTS (1 WEAK, 5 STRONG)");
heatmap(b1, 16, 60, D.routes, D.crit.concat(["Score"]), D.scores, { labelW: 300, colW: 114, rowH: 40, headH: 44, scale: HG, min: 1, max: 5, corner: "Route", fmt: (v, i, j) => j === 6 ? v.toFixed(2) : String(v), name: "TABLE: routes" });
const b2 = panel(s, 1210, 588, 646, 366, "HOW THE SCORE IS BUILT, WHO AGREES");
formulaBox(b2, 16, 62, 614, 100, D.formula, { chip: "FORMULA", chipW: 140 });
RT(b2, 16, 174, 614, 22, [["Klarna, 2025: ", "B"], ["brought human agents back after an AI-only service lost quality.", ""]]);
RT(b2, 16, 238, 614, 22, [["NASSCOM, 2026: ", "B"], ["Indian providers are moving from headcount pricing to outcome pricing.", ""]]);
fine(b2, 16, 304, 614, "Runway, cash and jobs scores follow the model. Control, upside and speed are team judgement.");
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5"); const D = V.s5;
hdr(s, 5, D.finding, D.source);
const a1 = panel(s, 64, 224, 1040, 350, "SIX WORKSTREAMS, PACED SO PEOPLE ALWAYS HAVE SOMEWHERE TO GO");
gantt(a1, 16, 60, 300, 59, ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12"], [
  { label: "Stop the bleed", bars: [{ s: 0, e: 3, color: C.alert, text: "Freeze hires" }] }, { label: "Price by complexity", bars: [{ s: 1, e: 4, text: "₹48 and ₹31" }] },
  { label: "AI engine, clean files", bars: [{ s: 2, e: 9, text: "20% to 100% of volume" }] }, { label: "Hard-file desk", bars: [{ s: 2, e: 12, color: C.good, text: "AI-assisted exception team" }] },
  { label: "AI data services", bars: [{ s: 1, e: 12, color: C.rival, text: "30 to 400 people" }] }, { label: "Seats and footprint", bars: [{ s: 3, e: 8, color: C.orange, text: "Seats cut by half", textColor: C.ink }] }], { headH: 40, rowH: 40, name: "TABLE: plan", corner: "Workstream" });
const a2 = panel(s, 1120, 224, 736, 350, "WHERE THE ₹15 CR BUDGET GOES");
const BC = [C.primary, C.rival, C.orange, C.tint, C.accent], BT = [C.white, C.white, C.ink, C.ink, C.ink];
stackH(a2, 16, 62, 704, 44, D.budget.map((b, i) => ({ value: b.value, color: BC[i], text: String(b.value), textColor: BT[i] })), { minInside: 70 });
addTable(a2, 16, 118, [270, 84, 350], ["Use", "₹ Cr", "What it buys"], D.budget_rows, { headerH: 38, rowH: 36, name: "TABLE: budget", align: ["LEFT", "RIGHT", "LEFT"], rowFills: [null, null, null, null, C.amberTint] });
const b1 = panel(s, 64, 588, 620, 366, "CASH IN THREE SCENARIOS (₹ CR)");
const lc = lineChart(b1, 8, 60, 604, 262, [{ values: D.cash.bear, color: C.alert }, { values: D.cash.bull, color: C.good }, { values: D.cash.base, color: C.primary }],
  ["0", "", "", "3", "", "", "6", "", "", "9", "", "", "12", "", "", "15", "", "", "18"], { yMin: -5, yMax: 45, yTicks: [0, 15, 30, 45], padL: 56, padR: 24 });
floorLine(b1, lc, "₹15 Cr covenant");
legend(b1, 16, 328, [[C.primary, "Base"], [C.good, "Bull"], [C.alert, "Bear"]]);
const b2 = panel(s, 700, 588, 600, 366, "THREE SCENARIOS, NAMED ASSUMPTIONS");
addTable(b2, 16, 62, [220, 116, 116, 116], ["Line", "Bear", "Base", "Bull"], D.scen, { headerH: 38, rowH: 36, name: "TABLE: scenarios", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"], rowFills: [null, null, null, C.tint, C.tint, C.tint] });
fine(b2, 16, 322, 568, "Labelling in ₹ a month. Cash and EBITDA run-rate in ₹ Cr at month 12.");
const b3 = panel(s, 1316, 588, 540, 366, "FOUR CASH GATES");
addTable(b3, 16, 62, [90, 230, 188], ["Gate", "Test", "If missed"], D.gates, { headerH: 40, rowH: 52, name: "TABLE: gates", align: ["LEFT", "LEFT", "LEFT"] });
fine(b3, 16, 318, 508, D.gate_note + " M: month.");
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s06.js -->
```js
{ const s = await figma.getNodeByIdAsync("S6"); const D = V.s6;
hdr(s, 6, D.finding, D.source);
const a1 = panel(s, 64, 224, 660, 350, D.t1);
const FC = [C.primary, C.rival, C.good, C.alert, C.accent, C.primaryDeep];
waterfall(a1, 16, 56, 628, 262, D.flow.map((f, i) => Object.assign({}, f, { color: FC[i] })), { max: 2750, min: 0, labelH: 60, barW: 72 });
const a2 = panel(s, 740, 224, 600, 350, "THE ROLE MIX AT MONTH 12");
const RC = [C.tint, C.rival, C.good, C.orange, C.primaryDeep, C.primary, C.surface];
hBars(a2, 16, 58, 568, D.roles.map((r, i) => ({ label: r.label, value: r.value, text: String(r.value), color: RC[i] })), { labelW: 300, rowH: 40, barH: 26, valueW: 80, max: 520 });
const a3 = panel(s, 1356, 224, 500, 350, "THE PEOPLE PROMISE, IN ₹ CR");
addTable(a3, 16, 60, [372, 96], ["Commitment", "₹ Cr"], D.promise, { headerH: 38, rowH: 40, name: "TABLE: promise", rowFills: [null, null, null, null, C.amberTint, C.goodTint] });
const b1 = panel(s, 64, 588, 900, 366, "SIX RISKS, EACH WITH ONE MITIGATION");
addTable(b1, 16, 62, [330, 50, 50, 438], ["Risk", "P", "I", "Mitigation"], D.risks, { headerH: 38, rowH: 38, name: "TABLE: risks", align: ["LEFT", "CENTER", "CENTER", "LEFT"], boldCols: [1, 2],
  cellColor: (r, c) => (c === 1 || c === 2) ? (D.risks[r][c] === "H" ? C.alert : (D.risks[r][c] === "M" ? C.orange : C.good)) : C.ink });
fine(b1, 16, 336, 868, "P: probability. I: impact. H: high. M: medium. L: low.");
const b2 = panel(s, 980, 588, 876, 366, "LOWEST CASH IF TWO ASSUMPTIONS MOVE TOGETHER (₹ CR)");
heatmap(b2, 16, 60, D.grid_rows, D.grid_cols, D.grid, { labelW: 250, colW: 118, rowH: 42, headH: 44, scale: HR, levels: v => v < 15 ? 4 : (v < 17 ? 3 : (v < 19 ? 2 : (v < 21 ? 1 : 0))), corner: "Price, volume", fmt: v => v.toFixed(1), name: "TABLE: grid" });
fine(b2, 16, 322, 844, "Rows: price of a hard file. Columns: monthly change in clean-file volume. Under ₹15 Cr breaches the loan covenant.");
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s07.js -->
```js
{ const s = await figma.getNodeByIdAsync("S7"); const D = V.s7;
hdr(s, 7, D.finding, D.source);
const a1 = panel(s, 64, 224, 900, 350, "EIGHT ASSUMPTIONS THAT MOVE THE ANSWER");
addTable(a1, 16, 60, [76, 500, 292], ["ID", "Assumption", "Value"], D.assume, { headerH: 36, rowH: 31, name: "TABLE: assumptions", align: ["LEFT", "LEFT", "RIGHT"] });
const a2 = panel(s, 980, 224, 876, 350, "LOWEST CASH IF ONE ASSUMPTION GOES WRONG (₹ CR)");
tornado(a2, 16, 100, 844, D.tor, { base: D.tor_base, labelW: 340, rowH: 34, barH: 24, baseLabel: "Base " + D.tor_base.toFixed(1) });
const b1 = panel(s, 64, 588, 640, 366, "ABBREVIATIONS USED IN THIS DECK");
fine(b1, 16, 60, 608, ["AI: artificial intelligence. HC: headcount. TL: team lead.", "BFSI: banking, financial services and insurance.", "QC: quality control (e-commerce catalogue checks).",
  "EBITDA: earnings before interest, tax, depreciation, amortisation.", "Cr: crore, ₹1 Cr is ₹10 million. Lakh: ₹100,000.", "FY: financial year ending 31 March. Run-rate: last 3 months x 4.",
  "M1 to M18: months counted from the board decision.", "P and I: probability and impact. H, M, L: high, medium, low.", "n/s: not stated in the case.",
  "Clean file: typed, standard-language form an AI engine can read.", "Hard file: handwritten or regional-language form.", "Engine: licensed document AI that reads clean files.",
  "Bench: staff between roles, paid 75% while they retrain.", "Bridge grant: one-off payment to a person leaving for a new job.", "Setu: Hindi for bridge, the name of the recommended programme."].join("\n"));
const b2 = panel(s, 720, 588, 560, 366, "THE FALLBACKS, PRICED");
addTable(b2, 16, 60, [272, 84, 84, 88], ["Sale at month 5", "Low", "Mid", "High"], D.sale, { headerH: 36, rowH: 40, name: "TABLE: sale", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"] });
addTable(b2, 16, 190, [272, 84, 84, 88], ["Wind-down from", "Now", "M3", "M6"], D.wind, { headerH: 36, rowH: 40, name: "TABLE: wind", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"] });
T(b2, 16, 276, 528, 22, D.bear);
const b3 = panel(s, 1296, 588, 560, 366, "SOURCES");
const bib = addText(b3, "Inter", "Semi Bold", 16, C.ink, ["1 Case for Change case brief, LSR Economics Department, 2026", "2 Team model, setu_model.py: base, bear and bull cases", "3 NASSCOM, Technology Sector Strategic Review 2026",
  "4 Industrial Relations Code 2020, in force 21 Nov 2025", "5 Code on Social Security 2020 (gratuity)", "6 Code on Wages 2019 (50% wage rule)", "7 Insolvency and Bankruptcy Code 2016, section 53",
  "8 World Bank, South Asia Development Update, Oct 2025", "9 Klarna statements on human agents, 2025", "10 NASSCOM, data annotation in India, 2021", "11 Sarvam AI and Gnani.ai model releases, 2025 and 2026"].join("\n"), 16, 60, 528, 290, "LEFT", undefined, true); bib.name = "BIBLIO";
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s08.js -->
```js
{ const s = await figma.getNodeByIdAsync("S8"); tplClear(s); head(s, 8);
nm(TL(s, 0, 150, 60, "THANK YOU", { family: "Poppins", style: "ExtraBold", color: C.primaryDeep, centerAt: 960 }), "TITLE");
nm(addText(s, "Poppins", "Bold", 28, C.primary, V.s8.thesis, 260, 278, 1400, 46, "CENTER", undefined, true), "THESIS");
addChip(s, 780, 364, 360, 46, V.team.name, C.primary, C.white, 22);
teamTable(s, 400, 436);
nm(addText(s, "Inter", "Semi Bold", 24, C.ink, "Prepared for the Case for Change business crisis case, Economics Department, Lady Shri Ram College for Women", 260, 792, 1400, 40, "CENTER", undefined, true), "LINKS");
nm(addText(s, "Inter", "Semi Bold", 24, C.ink, "Questions welcome.", 260, 856, 1400, 40, "CENTER", undefined, true), "CLOSE");
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```
<!-- END FILE -->

## 20. Figma setup, validator, sweeps and generator

<!-- FILE: deck/setup.js -->
```js
// ===== SETU SETUP =====
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const flat = () => { const a = []; for (const r of grid.children) for (const s of r.children) a.push(s); return a; };
for (let k = flat().length; k < 8; k++) figma.createSlide();
let all = flat();
while (all.length > 8) { const e = all.slice().reverse().find(s => s.children.length === 0); if (!e) break; e.remove(); all = flat(); }
const names = ["01 Cover", "02 Diagnose the Crisis", "03 Quantify the Problem", "04 Choose and Justify a Path", "05 Build the Strategy and Plan", "06 Address the Workforce and Risks", "07 Appendix", "08 Thank You"];
all.forEach((s, i) => { if (names[i]) s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: all.length, ids: all.map(s => s.id), fontsOk: need.map(([f, st]) => fonts.some(x => x.fontName.family === f && x.fontName.style === st)) };
```
<!-- END FILE -->

<!-- FILE: deck/_v1.js -->
```js
// ===== SETU V1 =====
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
for (const id of ids) { const s = await figma.getNodeByIdAsync(id);
  for(const c of s.children){ if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n:c.name});
    if(KEY.test(c.name) && c.y+c.height>1040) issues.push({s:s.name,t:"belowContent",n:c.name,bottom:Math.round(c.y+c.height)}); }
  const ch=s.children.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.n,b:b.n}); }
  const hl=s.findOne(n=>n.name==="HEADLINE"); if(hl&&hl.height>88) issues.push({s:s.name,t:"finding3lines",h:Math.round(hl.height)});
  const so=s.findOne(n=>n.name==="SOWHAT TEXT"); if(so&&so.height>62) issues.push({s:s.name,t:"sowhat3lines",h:Math.round(so.height)});
  const sr=s.children.find(c=>c.name==="SOURCE"); if(sr&&sr.height>36) issues.push({s:s.name,t:"source3lines",h:Math.round(sr.height)});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox; if(!tb||!pb) continue;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({s:s.name,t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({s:s.name,t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,60)};
```
<!-- END FILE -->

<!-- FILE: deck/_sweeps.js -->
```js
// ===== SETU SWEEPS =====
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate the","revolutionis","revolutioniz","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover"];
const MUST=MUSTLIST;
const ABSENT=["UrjaGrid","URJAGRID","Hisaab","Paytm","Dream11","Dunzo","Satoshi","PRAMAAN","SwasthyaGrid","Yuva Yodha","TODO","TBD","Lorem","Insert","undefined","NaN","null","[object"];
let radiusFixed=0; const fontLow=[]; const copy=[]; const density=[]; let all=""; let money=null;
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length,forms:s.children.filter(c=>/^(PANEL|CARD|TABLE):/.test(c.name)).length});
  for(const nd of nodes){ if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } if(nd.name==="MONEYSHOT") money={slide:s.name,chars:nd.characters}; }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22 && !(t.name==="SOURCE"||t.name==="BIBLIO"||t.name==="FINEPRINT")) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)});
    if(typeof t.fontSize==="number" && t.fontSize<14) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40),note:"under 14"});
    if(/[—–]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if((c.includes("?")||c.includes("!"))) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), money, density};
```
<!-- END FILE -->

<!-- FILE: deck/gen.py -->
```python
# ===== SETU GEN =====
"""Deck generator. Run from the repo root (nsut-innovators-court):
  python lsr-caseforchange/deck/gen.py pre    build deck/preamble.js and copy the offline mock
  python lsr-caseforchange/deck/gen.py mock   dry-run all 8 slides against the mock Figma API
  python lsr-caseforchange/deck/gen.py bind   write build/slide_NN.js, build/v1_NN.js, build/v1_all.js, build/sweeps.js with the real slide ids"""
import io, json, os, subprocess, sys, pathlib, shutil
DECK = pathlib.Path(__file__).resolve().parent
ROOT = pathlib.Path(os.environ.get("SETU_ROOT", DECK.parents[1])); SRC = ROOT / "yuva-yodha" / "deck"; N = "\n"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def wr(p, t): p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline=N).write(t); print("wrote", p.name, len(t))
def pre():
    t = rd(SRC / "preamble.js"); cut = "// ===== URJAGRID EXTRAS v1 ====="; assert t.count(cut) == 1; t = t[:t.index(cut)]
    c0 = t.index("const C = {"); c1 = t.index("const HO="); assert 0 < c0 < c1
    t = "// ===== SETU PREAMBLE (library from yuva-yodha/deck/preamble.js) =====" + N + rd(DECK / "_palette.js") + t[c1:] + rd(DECK / "_extras.js")
    for f in ("function layered(", "function panel(", "function waterfall(", "function heatmap(", "function gantt(", "function tornado(", "function lineChart(", "function stackV(", "function soWhat(", "function teamTable(", "function hdr(", "function fine("):
        assert t.count(f) == 1, f
    wr(DECK / "preamble.js", t); shutil.copyfile(SRC / "mock_figma.js", DECK / "mock_figma.js")
def mock():
    ok = True
    for n in range(1, 9):
        r = subprocess.run(["node", "mock_figma.js", "preamble.js", "values.js", "slides/s%02d.js" % n], cwd=DECK, capture_output=True, text=True, encoding="utf-8")
        good = "warnings: []" in r.stdout and "ISSUES 0" in r.stdout; ok = ok and good
        lines = [l.strip() for l in (r.stdout + r.stderr).splitlines() if l.strip().startswith(("warnings", "ISSUES", "[", "RUNTIME", "Error", "TypeError", "ReferenceError")) or "nodes" in l]
        print("s%02d" % n, "OK" if good else "FAIL", "|", " | ".join(lines).encode("ascii", "replace").decode())
    sys.exit(0 if ok else 1)
def bind():
    ids = json.loads(rd(DECK / "slide-ids.json")); p = rd(DECK / "preamble.js"); vals = rd(DECK / "values.js"); V = json.loads(vals[len("const V = "):].rstrip().rstrip(";"))
    v1 = rd(DECK / "_v1.js"); sw = rd(DECK / "_sweeps.js"); assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1
    must = [V["s4"]["money"], V["s4"]["money2"], "PROJECT SETU", "2,400", V["team"]["name"]] + [r[0] for r in V["team"]["rows"]] + [r[1] for r in V["team"]["rows"]] + ["month 6", "FINDING", "SO WHAT", "Lady Shri Ram College for Women", "EBITDA: earnings before interest", "BFSI: banking, financial services and insurance", "P: probability"]
    for n in range(1, 9):
        s = rd(DECK / "slides" / ("s%02d.js" % n)); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) == 1, n
        code = p + N + vals + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % ids["S%d" % n]) + N + "return {results,warnings};" + N
        assert len(code) < 50000, (n, len(code)); wr(DECK / "build" / ("slide_%02d.js" % n), code)
        wr(DECK / "build" / ("v1_%02d.js" % n), v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in range(1, 9)])
    wr(DECK / "build" / "v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr(DECK / "build" / "sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(must, ensure_ascii=False)))
if __name__ == "__main__": {"pre": pre, "mock": mock, "bind": bind}[sys.argv[1]]()
```
<!-- END FILE -->

## 21. Finals drills, research assembly and workbook

<!-- FILE: model/drills.py -->
```python
# ===== SETU DRILLS =====
"""Re-runs the base plan under the 'new development' shocks a finalist may be handed. Writes model/drills.md.
Run:  python lsr-caseforchange/model/drills.py"""
import copy, pathlib, setu_model as M
ROWS = []
def run(label, knob, Lch=None, Ach=None, Fch=None, cash_hit=None):
    A0 = copy.deepcopy(M.A); F0 = copy.deepcopy(M.F)
    if Ach: M.A.update(Ach)
    if Fch: M.F.update(Fch)
    P = copy.deepcopy(M.L); P.update(Lch or {}); r = M.plan(P)
    if cash_hit:
        for x in r[cash_hit[0] - 1:]: x["cash"] -= cash_hit[1]
    k = M.kpis(r); ROWS.append([label, knob, "%.1f" % k["min_cash"], "M%d" % k["min_month"], "none" if k["breach"] is None else "M%d" % k["breach"], "%.1f" % k["cash12"], "%.1f" % k["e12"], "%d" % round(k["hc12"])])
    M.A.clear(); M.A.update(A0); M.F.clear(); M.F.update(F0)
run("Base case", "none")
run("D1 Largest BFSI client leaves, 20% of BFSI revenue", "A rev_bfsi 100 to 80", Ach=dict(rev_bfsi=80.0))
run("D2 AI-native firm cuts its price to 22", "L p_clean 31 to 26", Lch=dict(p_clean=26.0))
run("D2b Price cut and faster clean-file loss", "L p_clean 26, d_clean 3%", Lch=dict(p_clean=26.0, d_clean=0.03))
run("D3 Attrition jumps to 40%", "F attr 0.26 to 0.40", Fch=dict(attr=0.40))
run("D3b Attrition falls to 15%", "F attr 0.26 to 0.15", Fch=dict(attr=0.15))
run("D4 Data services ramp is half the plan", "L lab halved", Lch=dict(lab=[x // 2 for x in M.L["lab"]]))
run("D5 Lender demands a 10 Cr prepayment in month 3", "cash less 10 from M3", cash_hit=(3, 10.0))
run("D6 Engine go-live slips three months", "L mig shifted by 3", Lch=dict(mig={1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: .20, 7: .40, 8: .55, 9: .70, 10: .80, 11: .90}))
run("D7 Clients refuse the hard-file price", "L p_hard 48 to 38", Lch=dict(p_hard=38.0))
run("D8 Hard files are 20% of volume, not 30%", "A hard_share 0.30 to 0.20", Ach=dict(hard_share=0.20))
run("D9 Hard files are 40% of volume", "A hard_share 0.30 to 0.40", Ach=dict(hard_share=0.40))
head = ["Shock", "Model knob", "Lowest cash", "Month", "Covenant breach", "Cash M12", "EBITDA run-rate M12", "Headcount M12"]
md = "# Finals drills (base plan re-run under each shock, no counter-move applied)\n\n| " + " | ".join(head) + " |\n|" + "---|" * len(head) + "\n" + "\n".join("| " + " | ".join(r) + " |" for r in ROWS) + "\n"
(pathlib.Path(__file__).resolve().parent / "drills.md").write_text(md, encoding="utf-8"); print(md)
```
<!-- END FILE -->

<!-- FILE: model/build_excel.py -->
```python
# ===== SETU WORKBOOK =====
"""Writes model/Setu_Model.xlsx: every table of model_tables.md as a sheet, plus an Inputs sheet (case facts, assumptions, levers).
Values workbook, not a formula twin. Run after make_values.py:  python lsr-caseforchange/model/build_excel.py"""
import json, pathlib, re
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment
HERE = pathlib.Path(__file__).resolve().parent; O = json.loads((HERE / "model_outputs.json").read_text(encoding="utf-8"))
wb = Workbook(); ws = wb.active; ws.title = "Inputs"; HEAD = PatternFill("solid", fgColor="0B1437"); WHITE = Font(bold=True, color="FFFFFF")
def put(ws, r, vals, head=False):
    for c, v in enumerate(vals, 1):
        cell = ws.cell(row=r, column=c, value=v)
        if head: cell.fill = HEAD; cell.font = WHITE; cell.alignment = Alignment(wrap_text=True, vertical="top")
def flat(d, pre=""):
    for k, v in d.items():
        if isinstance(v, dict) and not all(str(x).isdigit() for x in v): yield from flat(v, pre + k + ".")
        else: yield pre + k, json.dumps(v) if isinstance(v, (dict, list)) else v
put(ws, 1, ["Block", "Key", "Value"], True); r = 2
for blk, name in (("F", "Case fact"), ("A", "Team assumption"), ("L", "Plan lever"), ("SCEN", "Scenario override"), ("CONT", "Contingency override")):
    for k, v in flat(O["meta"][blk]): put(ws, r, [name, k, v]); r += 1
put(ws, r + 1, ["Model hash", O["meta"]["hash"]])
blocks = re.split(r"\n## ", (HERE / "model_tables.md").read_text(encoding="utf-8"))[1:]
for b in blocks:
    title = b.split("\n", 1)[0]; ws = wb.create_sheet(re.sub(r"[^A-Za-z0-9 ]", "", title)[:28]); put(ws, 1, [title]); rr = 3; first = True
    for line in b.split("\n")[1:]:
        if not line.startswith("|"): first = True; rr += 0 if first else 1; continue
        if set(line.replace("|", "").strip()) <= set("-"): continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        vals = []
        for c in cells:
            x = c.replace("−", "-").replace(",", "")
            try: vals.append(float(x) if "." in x else int(x))
            except ValueError: vals.append(c)
        put(ws, rr, vals if not first else cells, first); first = False; rr += 1
for ws in wb.worksheets:
    for col in ws.columns: ws.column_dimensions[col[0].column_letter].width = 22
wb.save(HERE / "Setu_Model.xlsx"); print("sheets", len(wb.worksheets))
```
<!-- END FILE -->

<!-- FILE: research/assemble.py -->
```python
# ===== SETU ASSEMBLE =====
"""Builds research/setu-research.md from research/parts/, checks it, and renders the PDF.
  python lsr-caseforchange/research/assemble.py md     concatenate, demote model tables, run checks
  python lsr-caseforchange/research/assemble.py pdf    render setu-research.html and setu-research.pdf (needs Chrome and markdown-it-py)"""
import io, re, sys, pathlib
HERE = pathlib.Path(__file__).resolve().parent; CF = HERE.parent; ROOT = CF.parent; N = "\n"
PARTS = ["part-A.md", "part-B.md", "part-C.md", "part-D.md", "part-E.md", "part-F.md", "appendix-A.md", "appendix-C.md", "appendix-D.md"]
HEAD = ("# Project Setu: Research Deliverable\n\n**Restructure first, then reskill into the work AI cannot do: an emergency board review of a mid-sized Indian services firm**\n\n"
        "Team: Team IdeaForge · Harsh Kawatra (Delhi Technological University, Team Leader) · Dayita Arora (Ramjas College, University of Delhi) · Aakriti Aggarwal (MAIMS)

"
        "Prepared for: Case for Change, Business Crisis Case Competition, Economics Department, Lady Shri Ram College for Women\n\n---\n\n")
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "it's not just", "make no mistake", "landscape", "robust", "seamless", "holistic", "tapestry", "paradigm", "cutting-edge", "leverage", "empower", "transformative", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving", "imagine if"]
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def md():
    body = []
    for p in PARTS:
        t = rd(HERE / "parts" / p).strip() + N
        if p == "appendix-A.md": body.append(t); body.append("## Appendix B: Model tables (generated by `model/make_values.py`)" + N + N + re.sub(r"^## ", "### ", re.sub(r"^# .*\n", "", rd(CF / "model" / "model_tables.md")), flags=re.M))
        else: body.append(t)
    doc = HEAD + (N + N).join(body); io.open(HERE / "setu-research.md", "w", encoding="utf-8", newline=N).write(doc)
    words = len(re.findall(r"\S+", doc)); tables = len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)); dashes = len(re.findall("[—–]", doc))
    used = set(re.findall(r"S\d{2,3}", " ".join(re.findall(r"\[([^\]]*S\d{2,3}[^\]]*)\]", doc)))); listed = set(re.findall(r"^\| (S\d{2,3}) \|", doc, re.M))
    nourl = re.sub(r"https?://\S+", " ", doc); low = nourl.lower(); banned = [b for b in BAN if b in low]; qhead = [h for h in re.findall(r"^#+ .*$", doc, re.M) if "?" in h]; excl = doc.count("!")
    h2 = re.findall(r"^## (.+)$", doc, re.M); answers = len(re.findall(r"^\*\*Answer", doc, re.M))
    print("words", words, "| tables", tables, "| dashes", dashes, "| banned", banned, "| question headings", len(qhead), "| exclamations", excl, "| h2", len(h2), "| answer leads", answers)
    print("missing_S", sorted(used - listed)); print("unused_S", len(listed - used))
    ok = words >= 30000 and tables >= 70 and dashes == 0 and not banned and not qhead and excl == 0 and not (used - listed) and answers >= 18
    print("ASSEMBLY", "PASS" if ok else "FAIL"); sys.exit(0 if ok else 1)
def pdf():
    src = rd(ROOT / "mandamasterminds" / "research" / "build_pdf.py")
    rep = [("HERE = pathlib.Path(__file__).parent", "HERE = pathlib.Path(r'%s')" % HERE.as_posix()), ('"Project Satoshi Gate  |  Team IdeaForge"', '"Project Setu  |  Team IdeaForge"'),
           ("--p:#0F7A4D; --pd:#0A5233; --a:#F5C518; --tint:#CFEEDB;", "--p:#1E3A8A; --pd:#0B1437; --a:#F5B301; --tint:#DBE4FF;"), ("color: #0F7A4D; }", "color: #1E3A8A; }"),
           ("M&amp;A Masterminds 2026  |  Research deliverable", "Case for Change, LSR  |  Research deliverable"), ("CL|M|A", "CL|M|L\\d+|T\\d+|A")]
    for a, b in rep:
        assert src.count(a) == 1, a; src = src.replace(a, b)
    assert src.count("satoshi-gate-research") == 4; src = src.replace("satoshi-gate-research", "setu-research")
    lines = src.split(N); i = [k for k, l in enumerate(lines) if l.startswith("<h1>{html.escape(title.replace(")]; j = [k for k, l in enumerate(lines) if l.startswith('<div class="meta">')]
    assert len(i) == 1 and len(j) == 1; lines[i[0]] = "<h1>Project Setu</h1>"
    lines[j[0]] = '<div class="meta"><b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University (Team Leader)<br>Dayita Arora, Ramjas College, University of Delhi<br>Aakriti Aggarwal, MAIMS<br><br>{html.escape(prepared)}</div></section>"""'
    exec(compile(N.join(lines), "build_pdf_setu", "exec"), {"__name__": "__main__"})
if __name__ == "__main__": {"md": md, "pdf": pdf}[sys.argv[1]]()
```
<!-- END FILE -->

<!-- FILE: case/01-case-brief.md -->
```markdown
# Case for Change: Business Crisis Case Competition (verbatim transcription)

Source file: `lsr-caseforchange/raw casefile.pdf` (2 pages, text only, no figures). Converted verbatim. The bold IDs (F, K, P, Q, D, J) are added for cross-referencing and are not part of the original text.

Organiser: Economics Department, Lady Shri Ram College for Women. Theme: India's $5 Trillion Economy: AI Shaping Human Capital and Future Workspaces.

## 1. Company Background

**F1** The Company is a fictional mid-sized Indian services firm. For 15 years its edge was cheap, scalable human labour: BFSI document processing, e-commerce catalogue quality control, and multilingual voice and chat support for banks, lenders, insurers, online marketplaces and telecom operators. It employs 2,400 people across five cities, many in their first formal job.

**F2** That edge is disappearing. In the last 18 months, AI-powered competitors have offered similar services at roughly 30% lower prices and about three times faster. Clients are shifting volume and demanding price cuts. On its current trajectory the Company has six months of cash before it shuts down.

**F3** Financial table (₹ Cr):

| ₹ Cr | FY23 | FY24 | FY25 | Current run-rate* |
|---|---|---|---|---|
| Revenue | 240 | 262 | 226 | 182 |
| Total operating cost | 196 | 217 | 222 | 213 |
| EBITDA | 44 | 45 | 4 | (31) |
| Employee cost as % of revenue | 53% | 55% | 65% | 80% |
| Headcount | 2,300 | 2,550 | 2,500 | 2,400 |

*Last three months, annualised.

**K1** Cash and constraints: ₹40 Cr in cash. The ₹15 Cr emergency budget is part of it, not on top. No new debt or fresh funding. The ₹40 Cr term loan requires cash to stay above ₹15 Cr.

**K2** Workforce: 1,350 frontline processors, 420 senior exception handlers, 380 voice agents, 190 team leads, 60 tech and corporate staff. Average cost ₹6 lakh a year; average tenure about six years; annual attrition about 26%.

**K3** Unit economics: Every business line now loses money per unit. One BFSI file costs ₹41 to process and sells for ₹38.

**K4** Competitors: An AI-native firm sells the same file at ₹27 (estimated cost about ₹9) but is weaker on handwritten and regional-language forms; a large incumbent with AI-assisted staff sells at ₹33 (cost about ₹28); a regional-language voice AI start-up needs human data labellers.

## 2. The Case: What You Need to Solve

**Q1** You are external strategy consultants called in for an emergency board review. Decide what the Company should do next: not simply whether to "adopt AI", but how to respond to a business model that is becoming obsolete, and what happens to the workforce that built it. Build your recommendation around one primary path:

| Path | Core bet | Key risk |
|---|---|---|
| **P1** 1. Reskill & Restructure | Retrain staff to work with AI and restructure how work is done, keeping and redeploying many people. | Too slow or costly to pay off within the runway. |
| **P2** 2. Get Acquired / Merge | Partner with or sell to an AI-native competitor for immediate technology and scale. | Losing control over integration, especially workforce decisions. |
| **P3** 3. Pivot the Business | Exit the disrupted line and reinvent around a new AI-adjacent service. | Unproven market, with little cash and time. |
| **P4** 4. Wind Down | Close in an orderly way with fair severance, preserving more value than burning cash. | Loss of the business and its jobs. Hard to defend as a win. |

**Q2** You may combine paths or propose your own, but you must name a primary path and explain why it beats the standard options.

**Q3** The non-negotiable question. What happens to the people who built the company when the business they built is no longer economically sustainable? Every major decision must connect to both business economics and human capital. The workforce cannot be an afterthought.

## 3. Deliverables: Five-Slide Strategy Deck

Submit five core slides (excluding title slide and appendix) that read as one end-to-end argument.

| # | Slide | What it must show |
|---|---|---|
| **D1** | Diagnose the Crisis | What has changed, why the model is uncompetitive, and what the data says about urgency. |
| **D2** | Quantify the Problem | Unit economics and workforce-cost modelling: where value is lost and what the Company can afford. |
| **D3** | Choose & Justify a Path | One of the four paths or your own, and why it fits the finances, competition, capabilities and runway. |
| **D4** | Build the Strategy & Plan | Resource allocation, key actions, financial feasibility and milestones. |
| **D5** | Address the Workforce & Risks | What happens to the people, plus major risks, trade-offs and contingencies. |

**Q4** Your strategy must be financially viable, operationally realistic and defensible under scrutiny.

## 4. What You Will Be Evaluated On

| Criterion | Weight | What judges look for |
|---|---|---|
| **J1** Analytical rigour | 25% | Sound use of financials, unit economics and workforce-cost modelling. Numbers that tie together. |
| **J2** Strategic judgement | 25% | A clear choice and honest trade-offs between speed, cost, control, survival and human impact. |
| **J3** Workforce & human impact | 20% | A specific, costed plan for the people affected, not an afterthought. |
| **J4** Originality of insight | 15% | Spotting what other teams miss in the data. |
| **J5** Adaptability | 15% | Defending and adjusting your plan when assumptions change. Finalists face a new development before presenting. |

Disclaimer: This case is entirely fictional. The company, people, competitors, places and every figure in it are invented for this competition. Any resemblance to a real organisation or person is coincidental.
```
<!-- END FILE -->

<!-- APPEND HERE -->
