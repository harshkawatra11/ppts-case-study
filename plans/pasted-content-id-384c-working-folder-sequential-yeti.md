# Econ-Arena, Blisspoint'26-27 (Sri Venkateswara College, DU): Setu AI strategy case, research deliverable and native Figma deck

> **Who executes this.** A main agent (Sonnet class is enough) plus Sonnet sub-agents dispatched with the Agent tool
> (`subagent_type: "general-purpose"`, `model: "sonnet"`), at most three at once. The case is already solved here: the
> recommendation, the financial, compute and environment model with every locked number, all 40 research section titles,
> all seven slide scripts, every prompt and every check. **The job is execution, not design.** When a step has a "Done
> when" test, do not move on until it passes. When something fails, use section 13 before improvising.
>
> **What this plan produces**, all under `econarena-svc/` (repo root `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`):
> (1) `model/setu_model.py` with `model_outputs.json`, `model_tables.md` (T1 to T23) and `deck/values.json`;
> (2) eleven verified raw research files (lanes B to L, five of them on compute and its footprint) and a source register;
> (3) `research/setu-ai-research.md` plus HTML and PDF, at least 90,000 words and 160 tables, humanised;
> (4) a 7-slide native Figma Slides deck in a new file: cover with a mind map and logo slots, three core slides (one per
> case task), two appendix slides (A1 is the one-page financial sketch), a thank-you slide; a deck PDF; a one-page
> financial-sketch PDF; a judge Q&A bank.
>
> **Verified at planning time (26 Oct 2026), in memory only, nothing written to the repo:** the model prints
> `CHECKS 12/12 HASH ea62a456cb` and `FINDINGS ₹17.2 Cr 11.0 months 28 ₹6.6 Cr ₹38.8 Cr 32.9 t 46.3 MWh month 21`;
> `deck/gen.py pre` builds the preamble from the existing libraries; all seven slide scripts pass the offline Figma mock
> with `warnings: []` and `ISSUES 0` (nodes 145, 334, 580, 284, 494, 243, 44); every build part is under 43,300 characters;
> `gen.py copy` prints `copy issues 0`; all 21 embedded files extract and every Python file parses. Offline PNG previews
> were **not** rendered at planning time (plan mode forbids writing files), so step M2 renders and inspects them before
> any Figma call. If a first run does not reproduce these lines, something was retyped or the environment changed: stop
> and use section 13.

## 0. How to read this plan

| Part | Sections | What it is |
|---|---|---|
| I | 1 to 2 | Context, the user's locked decisions, ground rules (content, language, humanizer, tags, text sizes) |
| II | 3 to 5 | The solved case: how the case-competition-deck skill was applied, the argument, the product, locked numbers, assumptions |
| III | 6 to 7 | Eleven research lanes (B to L) with questions and seeds, including the deep compute track; the research document specification |
| IV | 8 to 14 | Skill touchpoints, environment, step table, prompts, calibration, recovery, final checks, memory |
| V | 15 | The Figma deck: new file, cover first, build from the embedded scripts, validation, logos, export, Round 1 package |
| VI | Embedded files | Model, deck generator and helpers, seven slide scripts, validators, research tooling, the case transcription, extractor |

### Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Main agent | Sonnet or better | Bootstrap, runs every script, every Figma call (one at a time), source register, dispatch, assembly, final report | Change the recommendation, a locked number, a section title or a slide's geometry outside the fix rules |
| Verifiers V-B to V-L | Sonnet, at most three at once | Open the seed sources in section 6, confirm or correct each fact, add rows | Invent a figure, quote, price or URL; write prose; touch the model |
| Writers W-A to W-G | Sonnet, at most three at once | Write their sections into `research/parts/`, then run the humanizer pass on their own file | Browse the web, change a number, invent an interview, a customer, a test result or a measured footprint |
| Critic CR | Sonnet | Scores the research and later the deck with the skill's critique rubric and the humanizer tells list | Rewrite sections or slides |

### The Sonnet execution contract

DO
1. Follow section 10 step by step. Log each step in `econarena-svc/build-log.md` with `STATUS: PASS` or `FAIL` and what was fixed.
2. Create files only by extraction (step B1). Never retype a code block from this plan.
3. Take every modelled number from `model/model_outputs.json`, `model/model_tables.md` or `deck/values.json`. Take every external fact from a VERIFIED or CORRECTED row in `research/raw/`.
4. Invoke the `case-competition-deck` skill at the touchpoints in 8.1 and the `humanizer` skill at the touchpoints in 8.2. Log each with two lines of evidence.
5. Load the Figma guidance before the first `use_figma` call (section 15.2) and pass `skillNames` on every call.

DO NOT
1. Do not change the recommendation, a locked number, an H2 title or an assumption value except through the update protocol in 5.3.
2. Do not invent interviews, customers, letters of intent, quotes, prices, accuracy figures, test results or measured footprints. The three first customers are profiles, never named companies. The validation plan says "not yet run".
3. Do not write an em dash, an en dash, a hook, a rhetorical question, an exclamation mark or a banned word (2.2). The case text itself contains "18–24" and "2–3": always write "18 to 24" and "2 to 3".
4. Do not coin a name for the product, a feature, a plan, a programme or a phase (user rule). The company is "Setu AI" because the case names it. Describe everything else plainly: "the call-compliance review", "the evidence file", "AI voice reminders", "the month-18 milestone".
5. Do not add an AI-use statement. Do not commit or push, and never add a Co-Authored-By trailer (user memory rule). Do not modify anything outside `econarena-svc/` (reading other folders is fine).

---

# PART I. CONTEXT AND RULES

## 1. Context

### 1.1 The brief (full transcription with IDs in `case/01-case.md`)

Econ-Arena is a strategy case competition at Blisspoint'26-27, Sri Venkateswara College, University of Delhi. The team is
the strategy team at **Setu AI**, a new Indian AI company with ₹50 crore in the bank and no data centre [C-O1], competing
with better-funded Indian players and global labs [C-O2]. The job: where it wins first, how it sells, what it builds, and
why rivals cannot simply copy it [C-O3].

| Item | What the case fixes | ID |
|---|---|---|
| Runway | ₹50 crore must last 18 to 24 months; no new funding until a milestone we define | C-R1 |
| Compute | Rented, shared or subsidised; never owned | C-R2 |
| Focus | One main industry and one launch region; a second later, with its trigger stated | C-R3 |
| Evidence | Use the packet's facts; name the source for any other number | C-R4 |
| Task 1 | Industry and region pair; buyer, sales cycle, first three customers; channels and marketing without a brand; ₹50 crore split across people, compute, sales, marketing, data, compliance and reserve, totalling ₹50 crore | C-T1a to C-T1d |
| Task 2 | What Setu builds, buys or borrows; two or three moats with build times; weak advantages a bigger rival copies within 12 months | C-T2a to C-T2c |
| Task 3 | Where compute runs and on which provider type; energy, water and carbon over 24 months with 2 to 3 measurable targets; cost, speed and environment trade-offs | C-T3a to C-T3c |
| Financial sketch | Customers, revenue, spend and cash for four half-years; months of runway left at the end of month 24 | C-FS |
| Scoring | Industry and region 20, go-to-market 20, budget and financials 20, product and moat 20, competitors 15, government support and compliance 5 | C-S1 to C-S6 |
| Round 1 | 3 core + 2 appendix slides covering all three tasks; results on 29 October 2026 | C-N1 |

### 1.2 Decisions the user locked (do not relax any)

| Item | Decision |
|---|---|
| Thesis | BFSI lenders in the West (Mumbai and Pune), chosen by the user on 26 Oct 2026 from three planning-time options |
| Slides | 7: cover, three core (one per case task: GO-TO-MARKET AND BUDGET, PRODUCT AND MOAT, ENVIRONMENTAL STRATEGY), two appendix (A1 FINANCIAL SKETCH, A2 ASSUMPTIONS, RULES AND SOURCES), thank-you. The ribbon labels are the case's own task names |
| Team | TEAM IDEAFORGE: Harsh Kawatra (Delhi Technological University, Team Leader); Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member); Dayita Arora (Ramjas College, University of Delhi, Member). Email line: harshkawatra11@gmail.com |
| Palette | Case brand, sampled from the brief (embedded `deck/_palette.js`): espresso brown primary #6B4A2F, primaryDeep #2E1D14, sand gold accent #D9B26F, brick alert #B0382B, the brief's teal #287888 as "good", the brief's navy #183858 as "blue", cream tint #F6E8D2, ink #0A0A0A |
| Text sizes | Headlines 40 pt (34 minimum), panel titles 22 pt, numerals 24 to 112 pt, secondary text 18 pt named `SEC`; only `SOURCE` (14 pt), `FINEPRINT`/`BIBLIO` (16 pt) and logo or image captions are smaller. This supersedes the 22 pt floor in root `CLAUDE.md`, as on every deck since SwiftKart |
| Cover | A real mind map with brand logo slots and two image slots (not plain text, unlike the Satoshi Gate cover), no KPI-card row, team table; the same team table on the thank-you slide (memory rule) |
| Language | Humanised analytical storytelling: the `humanizer` skill is applied to every piece of prose (research and slides). No em dashes, no hooks, no rhetorical questions, no AI phrasing |
| Names | No coined names (memory rule). Real brands appear only with verified facts, in logo slots, or as context, with "no partnership or endorsement is implied" |
| Research depth | No limit. Target at least 90,000 words and 160 tables. Compute gets a dedicated deep technical track (user instruction, 26 Oct 2026): how NVIDIA sells compute, how Anthropic buys and serves Claude's compute, Hugging Face and the other rented-compute markets, India's GPU supply, the hardware and serving maths, and the footprint |
| Depth references (read only) | `asian-paints-alchemy/research/alchemy-whiteness-research.md`, `arthikkhayal-case/research/arthik-khayal-research.md`, `dreamforge-case/research/swiftkart-research.md` (winning entry), `iim-lucknow-pivot/research/dream11-pivot-research.md`, `maudrik-policy/research/pramaan-research.md`, `mandamasterminds/research/satoshi-gate-research.md`. The user also named `lsr-caseforchange/` for research depth: read its research file only to calibrate depth, never its plan or deck, and never reuse anything from it (it was a rejected entry, and its invented "Project Setu" label is unrelated to this case's company) |
| Inspo decks (read only) | Prime `hOJVMGv9nIhDmayTT7DmOt`; `e5VEexsLMhDampx7gvhFmM`; `vAIyXmljHlFDuwQo6RsoIN`; `APbOstO4SSU7iAjYIgEeSd`; `JLOOyohkQPUrwXEsxDKz4m`; Dream11 `YoiazGGOribfg69EjEDIlP`; SwiftKart (winning) `7N3v6bAfmXYRrte0zChFDg`; Asian Paints `KJQkGsLgbeLU9vNy24p78y`; Arthik Khayal `UidfYOpqRKbPxXKJMhftJV`. Local screenshots exist in `dreamforge-case/deck/shots/final-s*.png`, `asian-paints-alchemy/deck/shots/final_s*.png`, `arthikkhayal-case/deck/shots/hi_s0*.png` |

### 1.3 Folder layout after the build

```
econarena-svc/
  6ad76ad833899_econ-arena_case_problem_final.pdf (exists, never modified)   PLAN.md  extract.py  build-log.md  DECISIONS.md
  case/01-case.md
  model/setu_model.py  model_outputs.json  model_tables.md
  research/raw/R-B..R-L.md  sources.md  rid_to_sid.json   parts/part-A..G.md  appendix-C.md  appendix-D.md
           build_sources.py  assemble.py  build_pdf.py  setu-ai-research.md  .html  .pdf  critique.md
  deck/gen.py _palette.js _extras.js _v1.js _sweeps.js setup.js logo_rects.js make_pdf.py checks.py slides/s01..s07.js values.json
       (generated) preamble.js mock_figma.js values.js _x2.js _x3.js metrics.json derived/ build/ shots/ logos/
       slide-ids.json figma.md derivation.md overrides.json slide-copy.md critique.md TeamIdeaForge_EconArena.pdf
  round1/TeamIdeaForge_EconArena_Deck.pdf  TeamIdeaForge_EconArena_Financial_Sketch.pdf   qa/qa-bank.md
```

## 2. Ground rules

### 2.1 Content integrity

1. The model is a model. Every sentence reporting a model result says "in our model" or "in our base case". Response
   rates, contract values, throughput and footprints are assumptions (T1) checked against sources, never measurements.
2. No customer, interview, pilot, accuracy test or letter of intent exists. The three first customers are profiles
   (vehicle-loan NBFC in Pune, urban co-operative bank in Mumbai, personal-loan NBFC using outside agencies in Mumbai),
   never a named company. Section 35 is a plan headed "not yet run".
3. Grants are upside only [C-G8]: the base case books no IndiaAI 40% subsidy, no Maharashtra grant and no Maharashtra
   MSME subsidy. The base case does use the IndiaAI portal's standard rates, which the packet gives [C-G1].
4. Competitor cells (T20) are the team's reading of public material and are verified by Lane E. A cell Lane E contradicts
   is changed in the research and, on the slide, through `deck/overrides.json` (15.3); the model's T20 is then updated
   through 5.3 so the deck and model agree.
5. Regulatory dates are exactly what Lane C verifies. If an RBI 2026 recovery-agent draft has been finalised, say so with
   the circular date; if it is still a draft, the slide's "2026" point says "draft".
6. Indian units: ₹, lakh, crore, Indian digit grouping (1,58,364). Foreign prices keep their currency ($4.50 an hour) and
   are converted only in tables that state the rate (A48 = ₹88 per US$). The minus sign is U+2212.
7. A real company's name appears only with verified facts about it. Logos identify organisations referred to in the
   analysis; slide 1's fine print says no partnership or endorsement is implied.

### 2.2 Language standard

- Zero em dashes and en dashes. Ranges use "to". No hooks, no rhetorical questions (question marks only in research §38),
  no "imagine", no exclamation marks, no suspense.
- Banned words: the lists `BANW` in `deck/gen.py` and `BAN` in `research/assemble.py`, plus the humanizer's §12 list
  (actually, additionally, align with, bolstered, crucial, deep dive, delve, enduring, enhance, garner, gate used
  figuratively, highlight as a verb, interplay, intricate, key as an adjective, landscape as an abstract noun, meticulous,
  pivotal, quietly, robust used figuratively, showcase, tapestry, testament, underscore, valuable, vibrant). The model's
  milestone is called "the month-18 milestone", never a gate.
- First person plural, declarative, plain words, a number in most sentences, reasoning shown: a consultant's memo to
  Setu AI's founders and board.

### 2.3 The humanizer standard (user instruction, 25 Oct 2026)

Every writer and every slide-copy change runs the humanizer skill (`skill: "humanizer"`) in file mode on its own text
before finishing: prose only; tables, numbers, tags, headings and code unchanged. Strongest tells first: §1 not-X-but-Y
(allowed only in research §2's do and do-not table and the §14 "Conclusively" paragraph, where both halves carry
numbers), §2 one-line closers and dramatic fragments, §3 sayings, §4 staged run-ups, §5 arguing with no one, §6 forced
triads, §8 dashes, §12 AI words, §13 inflated significance and "future outlook" send-offs, §15 -ing riders, §16 sales
language, §17 borrowed authority, §18 "serves as/boasts/features", §19 bold labels (the `**Answer.**` lead is the only
bold kept), §20 title-case headings, §25 writing about the document. Then reread for the five tells that survive
rewrites: contrasts, closers, triads, dashes, bold labels. The humanizer never adds a fact, number or source.

### 2.4 Tags (every number in the research carries one)

| Tag | Meaning | Resolves to |
|---|---|---|
| `[C-G1]`, `[C-RG1]`, `[C-T2b]` | Case line by ID | `case/01-case.md` |
| `[A17]` | Model assumption | `model/model_tables.md` T1 and research §36 |
| `[M]` | Model output | `model/model_outputs.json` |
| `[T13]` | Model table | `model/model_tables.md`, research Appendix B |
| `[S12]` | External source | `research/raw/sources.md`, research Appendix A |
| `[F07]` | Raw research row (lanes B to L) | `research/raw/R-F.md`, resolved to an S-ID by `rid_to_sid.json` |

Lanes are lettered B to L so that `[A##]` always means a model assumption.

### 2.5 Files to read before starting (main agent)

1. This plan, fully. 2. Root `CLAUDE.md` sections 0, 5 and 7 (its 22 pt rule is superseded by 1.2).
3. `.claude/skills/case-competition-deck/SKILL.md` through the Skill tool (touchpoint A). 4. The humanizer skill.
5. `arthikkhayal-case/PLAN.md` sections 0 to 2 (the predecessor plan this one follows) and
   `dreamforge-case/research/swiftkart-research.md` lines 1 to 150 (register and tag discipline of the winning entry).

---

# PART II. THE SOLVED CASE

## 3. The argument (how the case-competition-deck skill was applied)

### 3.1 Case type and calibration

Strategy case (skill guide `case_types/strategy.md`: market entry, competitive positioning, capability, time to impact)
with a marketing go-to-market spine (`case_types/marketing.md`) and an operations footprint task
(`case_types/operations.md`). The skill is calibrated on three M&A decks; its structural patterns (contrarian answer,
action titles, foreshadowing, symmetric treatment, three scenarios, one moneyshot, double synthesis, defensive depth) are
applied with confidence and its frameworks by reasoned extrapolation. Research §0 says this once.

### 3.2 The eight-section logic compressed into three core and two appendix slides

| Skill section | Where it lives |
|---|---|
| Front matter | Slide 1: title, answer card, team table, the mind map of who decides where Setu can win |
| I Executive summary | Slide 2's "OUR ANSWER" band and headline; slide 1's answer card |
| II Context and III Actors | Slide 2's WHERE band (industry by region heat grid, the case's capacity and use data, the rule clock); slide 3's competitor matrix; the cover mind map. Foreshadow: the rule clock ends "by May 2027 a lender must prove each AI call was lawful" before slide 3 names the evidence file |
| IV Quantitative analysis | Slide 2's market funnel and ₹50 crore split; slide 4's footprint tables; slide 5 (A1) in full |
| V Feasibility | Slide 3's CONCLUSIVELY band and five-route screen; slide 3's weak-advantages table; A1's scenarios and tornado |
| VI Recommended alternative, with the moneyshot | Slide 3: the build, buy and borrow stack, the three moats, `CARD: MONEYSHOT` ("same ₹50 Cr, two routes": ₹17.2 Cr left at month 24 against out of cash in month 21) |
| VII Conclusion | Slide 7's THEREFORE card (pure recap, no new number) |
| Appendix | Slide 5 (A1 financial sketch) and slide 6 (A2 assumptions, government support, rules, validation plan, formulas, sources) |

### 3.3 The contrarian recommendation (skill section A; rhetoric section 1)

The prompt invites the obvious answer for a "trusted Indian AI company": build an Indic model, sell it widely, compete
with Sarvam and the global labs. Twelve teams already hold IndiaAI foundation-model support [C-G2]; Sarvam has raised a
Series B at a $1.5 billion valuation (Lane E verifies); Claude now serves Indian customers from Indian AWS regions (Lane F
verifies). In our model, the model-first route spends 1,58,364 H100-hours and a 40-person research team and runs out of
cash in month 21 [T18]. Our answer: **rent the models and the GPUs, and sell mid-sized lenders in Mumbai and Pune
evidence that every collection call followed the rules.**

| Reason | Training a base model and selling it broadly | Compliance-grade collections AI for West lenders |
|---|---|---|
| Quantitative | Scores 1.60 of 5; out of cash in month 21; ₹2.8 Cr ARR at month 24 in an illustrative case [T6, T18] | Scores 4.35 of 5; 28 lenders, ₹6.6 Cr ARR, ₹17.2 Cr cash and 11.0 months of runway at month 24 [T6, T8] |
| Strategic fit | Competes head on with 12 funded teams and global labs whose models are free or cheap to rent | Lenders face a rule clock (FREE-AI 2025, DPDP 2025 to 2027, IT Rules 2026, RBI recovery directions) that turns evidence into a purchase [C-G6, C-G7] |
| Feasibility | Compute is cheap on the portal; the cost is talent, data and time without revenue | Needs 12,000 H100-hours, ₹0.72 Cr of GPU rent and a team of 59 by month 24 [T12, T13, T10] |

The "Conclusively" synthesis (slide 3 band; research §14) and the "Therefore" synthesis (slide 7; research §2) carry it.

### 3.4 The product in plain words (copy rules apply to every draft)

| Part | What it does | Build, buy, borrow or rent |
|---|---|---|
| Call-compliance review (land product, ₹18 lakh a year for a 150-collector lender, about ₹1,000 per collector a month) | Transcribes every recorded collection call in Marathi, Hindi, Hinglish and English; checks it against the RBI recovery code (calling hours 8 am to 7 pm, no threats, no misrepresentation, required disclosures), the lender's own script and the DPDP notice; scores agents; flags breaches for a human reviewer within a day | Build the rule engine and evaluation; borrow open speech and small language models and fine-tune them; rent GPUs |
| Evidence file per lender | Keeps, for every call, the recording reference, transcript, checks run, result, reviewer action and fix; exports what an RBI inspection, an internal audit or a grievance officer asks for; maps each control to FREE-AI, DPDP and IT Rules duties | Build |
| AI voice reminders (expansion, ₹18 lakh a year, from month 7) | Pre-due to 30 days past due reminder calls, labelled as AI-generated voice at the start of each call (IT Rules 2026), only inside 8 am to 7 pm, with consent artefacts logged and an instant human handover | Build the flow and guards; buy telephony and speech synthesis; borrow models; rent GPUs |
| Hard-case summaries | 2% of reviewed minutes go to a frontier model for a written summary, through Claude on Amazon Bedrock's India inference profile so data stays in India | Buy |
| Links | Diallers, call-recording stores and loan-management systems, so evidence attaches to the borrower account | Build |

Draft copy (writers reproduce in research §16 inside `Product copy (draft, subject to legal review):` blocks):

> Voice reminder opening: "This is an automated assistant calling for [lender] about your loan account ending [last four digits]. This call is recorded. You can ask to speak to a person at any time."

### 3.5 Insights the research must carry (each with its tag)

1. Lenders score 4.00 of 5 on the industry screen and the West 4.50 of 5 on the region screen; the pair scores 3.60, the highest of 28 cells [T3, T4, T5].
2. Mumbai and Pune hold 56% of India's data-centre capacity in the packet's numbers [C-RG1]; the South leads on combined Claude.ai use (25.9%) [C-RG2], which is why Chennai is the second region.
3. The rule clock: FREE-AI (Aug 2025), DPDP Rules (Nov 2025), IT Rules amendment (Feb 2026), consent systems (Nov 2026), full DPDP compliance (May 2027, penalties to ₹250 crore) [C-G6, C-G7; Lane C].
4. A bottom-up market of ₹321 crore a year across India's lenders, ₹85 crore across 278 West lenders and agency-handled bank minutes, and ₹6.6 crore obtainable by month 24, 8% of SAM [T19].
5. ₹50 crore would rent 27,02,703 H100-hours at ₹185 an hour; the plan needs 12,000. Compute is not the constraint; talent and trust are [T12, M].
6. The same workload costs ₹0.72 crore on portal GPUs, ₹1.15 crore on demand, ₹1.63 crore at hyperscaler list prices and ₹6.61 crore through speech and model APIs alone [T13].
7. In our model, energy is 46.3 MWh, carbon 32.9 t on the grid factor and 19.6 t after renewable matching, water 138 kL over 24 months [T14].
8. Development and regression GPUs that never switch off are the largest single energy load (35,040 L40S-hours) [T12].
9. People are 44% of the ₹50 crore, compute 4%, and the reserve 22% [T9].
10. The base case ends month 24 with ₹17.2 crore and 11.0 months of runway; the bear case with month-18 cuts keeps 6.9 months [T8, T16].
11. Pilot starts, pilot conversion and salary overhead move runway most; GPU prices barely move it [T17].
12. The model-first route runs out of cash in month 21 [T18].
13. Convin and Credgenics are the closest rivals; model builders and global labs score 2 to 8 of 14 on lender-relevant capabilities [T20].
14. Three moats need 12 to 18 months and lender consent to copy; five advantages can be copied within 12 months [T21].

### 3.6 Frameworks used and where (`references/frameworks.md`)

| Framework | Research section | Slide |
|---|---|---|
| Weighted screens (MECE option filter) for industry, region and routes | 6, 7, 8, 14 | 2, 3 |
| PESTLE (legal and political) and the rule clock | 4, 5, 10 | 2, 6 |
| Porter's five forces on AI vendors selling to lenders | 15 | (research only) |
| Strategic group map and capability matrix | 15 | 3 |
| VRIO and Helmer's 7 Powers (counter-positioning, switching costs, cornered resource) | 17 | 3 |
| Build, buy, borrow; Wardley map of the stack | 16, 23 | 3 |
| TAM, SAM, SOM bottom-up | 11 | 2 |
| Buying-committee map, sales-cycle Gantt, AARRR | 12, 13 | 2 |
| Unit economics, scenario planning, tornado, real options (the month-18 milestone) | 29 to 32 | 5 |
| GHG Protocol scope 2 (location and market based), PUE and WUE | 25, 26 | 4 |
| Risk heat map, pre-mortem, competitive response game tree | 18, 34 | (research only) |
| Three horizons, RACI | 33 | (research only) |

### 3.7 How each scoring criterion is earned (C-S1 to C-S6)

| Criterion (weight) | Where the evidence sits | What the judges see |
|---|---|---|
| Industry and region, with evidence (20) | §6 to §8, slide 2 WHERE band | Two weighted screens, a 28-cell pair grid, the packet's own capacity and use numbers, the second-region trigger |
| Go-to-market, paying customers (20) | §9, §11 to §13, slide 2 WHO AND HOW band | Buyer and committee, 18-week path, three customer profiles with contract values, channels, marketing without a brand |
| Budget and financials (20) | §28 to §32, slides 2 and 5 | The ₹50.0 crore split, the half-year sketch, runway 11.0 months, scenarios, tornado, unit economics |
| Product and moat (20) | §14, §16 to §18, slide 3 | Five-route screen, build/buy/borrow stack, three moats with months, five weak advantages with copy times |
| Competitors (15) | §15, slide 3 | 14 players by 7 capabilities, each cell verified, strategic groups, response game tree |
| Government support and compliance (5) | §5, §10, slide 6 | Portal used, grants as upside only, Maharashtra subsidy as a channel lever, rules read as product requirements |

## 4. Locked numbers (reference output of the model, hash `ea62a456cb`)

| Quantity | Value | Source |
|---|---|---|
| Customers (paying lenders) at the end of H1, H2, H3, H4 | 1, 8, 17, 28 (expected values 1.2, 7.8, 17.4, 28.1) | T8 |
| Pilots started by half-year; 24 months | 5, 12, 18, 18; 53 | T8 |
| Revenue by half-year; 24 months | ₹0.21, 0.91, 2.09, 3.43 Cr; ₹6.64 Cr | T8 |
| Spend by half-year; 24 months | ₹6.60, 8.53, 11.10, 12.59 Cr; ₹38.82 Cr | T8 |
| Cash at the end of each half-year | ₹43.52, 35.79, 26.54, 17.15 Cr | T8 |
| ARR at month 18 and 24 | ₹3.83 Cr; ₹6.61 Cr | T8 |
| Runway at month 24 | 11.0 months (net burn ₹1.56 Cr a month over months 19 to 24); gross 8.2 months | T8 |
| ₹50 crore split | People 22.0, Compute 1.8, Sales 5.6, Marketing 3.8, Data 3.0, Compliance 2.6, Reserve 11.2; total 50.0 | T9 |
| Heads at the end of each half-year | 22, 37, 50, 59 | T10 |
| Unit economics | ACV ₹23.5 lakh; CAC ₹33.4 lakh; gross margin 76% (H4), 75% (H3); payback 22 months; LTV to CAC 2.7x | T11 |
| Month-18 milestone | 15 paying lenders, ₹3.0 Cr ARR, 70% gross margin; base meets it (17, ₹3.83 Cr, 75%) | T8, T11 |
| Scenarios at month 24 | Base 28 lenders, ₹6.6 Cr ARR, ₹17.2 Cr cash, 11.0 months; bear 15, ₹2.5 Cr, ₹9.8 Cr, 4.8 months; bear with month-18 cuts ₹11.8 Cr, 6.9 months; bull 44, ₹13.5 Cr, ₹24.4 Cr, 24.5 months | T16 |
| Tornado on runway (base 11.0) | pilot starts 9.4 to 12.7; pilot conversion 9.9 to 12.1; salary overhead 9.7 to 11.8; land contract 10.1 to 11.9 | T17 |
| Screens | Industry: lenders 4.00, media 3.35 ... healthcare 2.05; region: West 4.50, South 3.10, North 2.60, East 1.85; pair 3.60; routes: base model 1.60, Indic API 1.90, voice agents for all 2.40, services 3.00, ours 4.35 | T3 to T6 |
| Market | TAM ₹321 Cr, SAM ₹85 Cr (278 West lenders plus agency-handled minutes), SOM ₹6.6 Cr (8% of SAM) | T19 |
| Compute workload | 12,000 H100-hours; L40S: 10,461 batch, 6,804 voice, 35,040 development; reviewed minutes 1,110 lakh | T12 |
| Compute routes, 24 months | Portal ₹0.72 Cr; on demand ₹1.15 Cr; hyperscaler list ₹1.63 Cr; APIs only ₹6.61 Cr; owning GPUs not allowed | T13 |
| Footprint, 24 months | 46.3 MWh; 32.9 t CO2e location-based; 19.6 t market-based (40% lower); water 55.5 kL on site, 83.0 kL off site (138 kL) | T14 |
| Targets | Wh per 1,000 reviewed minutes 96 to 48; renewable-matched share 0% to 70%; hosts with PUE 1.50 or lower that publish water use | T15 |
| Model-first route | 1,58,364 H100-hours; out of cash in month 21; ₹2.8 Cr ARR at month 24 (illustrative) | T18 |
| IndiaAI 40% subsidy, if approved | ₹0.23 Cr of GPU spend (upside only) | T22 |

The honest reading, which every scenario section repeats: the bear case ends month 24 with 4.8 months of runway, below the
6-month floor we set ourselves; the month-18 rule (hold hiring at H3 levels, cut marketing by 40% and sales travel by
25%) lifts it to 6.9 months. Every customer number is an expected value from assumed pipeline and conversion rates; none
is a signed contract.

## 5. Assumptions and the update protocol

### 5.1 Register
A01 to A49 are defined in the model (Part VI, dictionary `A`) with base, bear and bull values and their basis, printed as
T1. The illustrative model-first inputs are B01 to B09. The ones that matter most: A07 pilot starts, A05 conversion,
A27 salary overhead, A01 land contract, A09 collection lag (T17), and for Task 3 A17, A18, A41, A43, A44, A45, A46, A47.

### 5.2 Which assumptions verifiers test

| ID | Lane | What would change it |
|---|---|---|
| A17, A18, A19 | H | Verified IndiaAI portal or empanelled-provider L40S and H100 rates outside ₹45 to ₹90 and ₹111 to ₹252 |
| A22, A23, A49 | I | Verified Indian cloud-telephony per-minute prices, speech-synthesis and speech-to-text API prices (Sarvam, Bhashini, Google, AWS) outside the bear-to-bull range |
| A25 | F | Claude Haiku or Sonnet per-token prices on Bedrock India that put an escalated minute above ₹0.80 |
| A40, A41 | F, I | NVIDIA data sheets or server specifications putting H100 or L40S server power per GPU outside the range |
| A43, A46 | H, J | Published PUE and WUE of Mumbai data centres used by IndiaAI providers |
| A44, A47 | J | CEA CO2 baseline database v21 or v22 combined margin or weighted average outside 0.68 to 0.75; CEA water norms for thermal plants |
| A01, A02, A04, A13, A15 | I, K | Published per-agent prices of conversation-intelligence vendors in India; published ASR throughput (real-time factor) on L40S; concurrent voice sessions per GPU |
| A10 | D | Published collection-team sizes and calling volumes of Indian NBFCs |
| A27, A28 and the team CTCs | K | 2026 Indian salary benchmarks for ML engineers, AEs and compliance staff |
| MKT_SEG counts | D | RBI counts of middle-layer NBFCs, HFCs, SFBs and UCBs (national and Maharashtra) |
| RIVALS cells | E | Any verified product page, funding release or customer announcement contradicting a Yes, Part or No |

### 5.3 Update protocol (the only way a locked number may change)

1. A verifier's VERIFIED or CORRECTED row puts a value outside the assumption's bear-to-bull range, replaces a base with a
   better-sourced figure in the same unit, or contradicts a T20 cell.
2. The main agent edits only that entry in `model/setu_model.py`, records `date | step | ID old to new | why` in
   `DECISIONS.md`, reruns the model and `deck/gen.py pre`, `mock`, `copy`.
3. If any value in section 4 changes, the main agent updates `MUSTK` values if needed, every H2 title in 7.2 that quotes
   it, and every research part that quotes it (grep the old figure). Never patch one place.

---

# PART III. RESEARCH

## 6. Research lanes

Schema for every raw file `research/raw/R-X.md`: an H1, a two-line preamble with the access date, one H2 per question,
then a table `| R-ID | Fact | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |`
with Status VERIFIED, CORRECTED (state the corrected figure), VERIFIED (search only), UNVERIFIABLE or NOT YET PUBLISHED;
end with `## Gaps` and `## Conflicts`. 40 to 80 rows a lane (Lane L: 12 to 25 quotes). Prefer regulators, filings,
official price pages, data sheets, peer-reviewed papers and standards. Flag `[blog]` and `[vendor]`. R-IDs are the lane
letter plus two digits (F07).

Cross-lane rules: never infer a 2026 date from an earlier year; keep both sides of a conflict; never convert currency;
quote prices with their date and unit (per GPU-hour, per instance-hour, per million tokens, per audio hour, per minute);
note billing granularity (per second, per minute, per hour), commitment terms and region.

Planning-time findings (26 Oct 2026, to be confirmed, not assumed): Hugging Face Inference Endpoints list H100 x1 on AWS at
$4.50 an hour (marked deprecated from December 2025), H200 x1 at $5, L40S x1 at $1.80, L4 x1 at $0.80, A100 x1 at $2.50,
GCP H100 x1 at $10, billed per minute; Anthropic announced access to up to one million Google Cloud TPUs on 23 Oct 2025
("well over a gigawatt" in 2026), names AWS its primary training partner (Project Rainier) and says it uses TPUs,
Trainium and NVIDIA GPUs; AWS blogs say Claude models are available through an India geographic cross-Region inference
profile (Mumbai and Hyderabad); NVIDIA announced DGX Cloud Lepton on 19 May 2025 with Yotta among the first partners;
Yotta's Shakti Cloud page lists H100 rates in US dollars per GPU-hour with term discounts, from its NM1 Tier IV site in
Navi Mumbai; third-party listings put IndiaAI portal L40S at ₹67.5 on demand and ₹45 reserved, H100 at ₹252 on demand
and ₹185 reserved; Sarvam lists voice agents at ₹3.00 to ₹3.50 a minute and reported a $234 million first close of a
Series B at $1.5 billion; Gnani.ai raised a $10 million Series B led by Aavishkaar Capital in 2026; Convin raised a
$6.5 million Series A in August 2024 and markets collections compliance flags; Credgenics raised a $25 million Series A
in 2023; RBI's FREE-AI report (13 Aug 2025) has 7 sutras and 26 recommendations in 6 pillars; RBI's recovery-agent
calling window of 8 am to 7 pm dates from August 2022 and 2026 drafts propose recording calls; RBI's 2026-27 upper-layer
NBFC list has 17 entities; India had 1,457 UCBs at end-March 2025; Maharashtra's AI Policy 2026 (April 2026) targets
₹10,000 crore of investment, a ₹500 crore fund (₹250 crore from the state), 2,000 GPUs and a 20% subsidy for 5,000 MSMEs;
the IT Rules amendment was notified on 10 Feb 2026 (G.S.R. 120(E)) and took effect on 20 Feb 2026; CEA's CO2 baseline
database v21 (Nov 2025) covers FY2024-25 and v22 is dated Aug 2026.

### Lane B: Government support and the Indian AI policy stack
Questions: IndiaAI Mission outlay and its seven pillars; the 12 foundation-model teams and what each builds; the compute
portal (GPUs onboarded by month, the 100,000 target, GPU types, empanelled providers, L1 rates by GPU type, eligibility,
DPIIT recognition steps and time, committee process, the 40% subsidy rules); Startup India Fund of Funds 2.0 terms;
RDI scheme terms and eligibility; Maharashtra AI Policy 2026 in full (fund, incubator grants, GPUs, MSME subsidy rules,
Maha AI Tools Hub, Centres of Excellence); other state AI missions (Odisha, Tamil Nadu, Karnataka, Telangana, Uttar
Pradesh, Gujarat); IndiaAI Safety Institute; India AI Governance Guidelines (MeitY, Nov 2025).
Seeds: indiaai.gov.in, compute portal pages, PIB releases, MeitY, startupindia.gov.in, DST RDI pages, maharashtra.gov.in
GR for the AI policy, newsonair.gov.in (30 Apr 2026), inc42.com, the case's links.

### Lane C: Rules for lenders and for AI
Questions: DPDP Act 2023 and Rules 2025 (dates, phases, consent managers, significant data fiduciaries, processor duties,
breach notice, penalties, cross-border rules); the IT Rules amendment of February 2026 (definition of synthetically
generated information, labelling, provenance metadata, who it binds, takedown windows); RBI FREE-AI report (each of the
26 recommendations in one line; any RBI directions issued since); RBI recovery-agent instructions (2008 guidelines, 2022
circular, 2026 drafts for commercial banks, co-operative banks and NBFCs, their status today, call recording, IIBF
certification); RBI outsourcing of IT services directions (2023) and what they let a lender demand of a vendor; RBI Fair
Practices Code for NBFCs; RBI digital lending directions; CERT-In directions (2022); RBI Integrated Ombudsman complaint
statistics on recovery; penalties RBI has levied on lenders for recovery-agent conduct (names and amounts).
Seeds: rbi.org.in notifications and press releases, meity.gov.in, egazette.gov.in, cert-in.org.in, the KPMG and law-firm
summaries found at planning time (kpmg.com/in FREE-AI note, hoganlovells.com IT Rules note, business-standard.com 2022
recovery piece, upstox.com 2026 draft piece) as pointers to primary text only.

### Lane D: Lenders, collections and the market count
Questions: counts of NBFCs by layer (base, middle, upper; the 2026-27 upper list), HFCs, NBFC-MFIs, small finance banks,
payments banks, UCBs by tier and by state (Maharashtra, Gujarat, Tamil Nadu, Karnataka), regional rural banks;
head-office locations of the larger middle-layer NBFCs (share in Mumbai and Pune); retail loan accounts and delinquency
(RBI Financial Stability Report); size of collection workforces and calling volumes (any NBFC annual report or industry
study); collection agencies (count, DRA certification, IIBF); FIDC and the Finance Industry Development Council's role;
public statements by NBFCs on AI in collections; any public tender or RFP for call-quality monitoring by an Indian lender.
Seeds: RBI press release for the 2026-27 upper-layer list, RBI Report on Trend and Progress of Banking (UCB chapter),
RBI Financial Stability Report, Sa-Dhan and MFIN reports, FIDC website, NBFC annual reports.

### Lane E: Competitors (verify every T20 cell)
Questions, per player (Sarvam AI, Gnani.ai, Krutrim, BharatGen, Soket AI Labs, Fractal, Tech Mahindra, Yellow.ai, Haptik,
Uniphore, Convin, Credgenics, large IT services firms (TCS, Infosys, Wipro, HCLTech), global AI labs (OpenAI, Anthropic,
Google)): founding, headquarters and offices (Mumbai or Pune presence), funding rounds with dates and investors (keep
Inc42 and Bloomberg figures side by side when they differ), revenue or ARR if public, products and models, BFSI and
collections products, published prices, hosting and data-residency claims, named BFSI customers, compliance features.
Also: Skit.ai, Saarthi.ai, Spocto, Mihup, Observe.AI and Exotel's conversation analytics as further collections or call-QA
players; any one of them that sells regulator-mapped evidence to Indian lenders must be added to research §15.
Seeds: company sites and docs (docs.sarvam.ai pricing, convin.ai collections page, credgenics.com), funding coverage
found at planning time (exchange4media Sarvam, storyboard18 Gnani, entrackr Convin, credgenics.com Series A), Inc42 and
Tracxn profiles, BharatGen and Soket IndiaAI selections, Krutrim announcements.

### Lane F: Compute, part 1: how NVIDIA and the frontier labs sell and buy compute
Questions: NVIDIA's data-centre products and specifications (H100 SXM and PCIe, H200, B200, GB200 NVL72, L40S, L4: memory,
bandwidth, FP8 and BF16 throughput dense and sparse, TDP, NVLink, MIG); DGX systems and their rated power (DGX H100 about
10.2 kW); the NVIDIA Cloud Partner programme; DGX Cloud and DGX Cloud Lepton (date, partners, how pricing works); NVIDIA AI
Enterprise, NIM, TensorRT-LLM, Triton, Riva and NeMo for speech (licensing and price per GPU-year); Anthropic's compute
(Google TPU agreement of Oct 2025, AWS Project Rainier and Trainium2, any Microsoft Azure and NVIDIA agreement of Nov 2025,
gigawatt figures); how Claude is sold (Claude API, Amazon Bedrock, Google Vertex AI, Microsoft Foundry if verified;
per-million-token prices for Haiku 4.5, Sonnet and Opus current models; batch and prompt-caching discounts; India
inference profile, regions, data handling); OpenAI's compute (Stargate, any India data-centre plan) and API prices; Google
TPU generations (v5e, v6e Trillium, Ironwood) and Vertex AI regions in India; Microsoft Azure India regions and GPU VMs.
Seeds: nvidia.com data sheets and investor releases (DGX Cloud Lepton, 19 May 2025), anthropic.com news, siliconangle and
theregister coverage of the TPU deal (as pointers), aws.amazon.com Bedrock pricing and the two India inference blogs,
cloud.google.com TPU pages, azure.microsoft.com.

### Lane G: Compute, part 2: rented compute beyond the hyperscalers
Questions: Hugging Face (Inference Endpoints price table by provider and GPU, per-minute billing, scale to zero, regions;
Inference Providers routing and pricing; Spaces hardware and ZeroGPU; Enterprise Hub; HUGS; storage regions; whether any
India region exists); GPU neoclouds (CoreWeave, Lambda, Nebius, Crusoe, Together AI, Fireworks AI, Groq, Cerebras,
RunPod, Vast.ai, Modal, Replicate, Baseten): on-demand and reserved H100, H200, B200 and L40S prices, billing granularity,
egress fees, regions, any India presence; inference APIs priced per token and per audio minute (speech-to-text: AWS
Transcribe, Google Speech-to-Text, Azure, Deepgram, AssemblyAI; Indian: Sarvam, Gnani, Bhashini); the market trend in H100
rental prices from 2023 to 2026.
Seeds: huggingface.co/docs/inference-endpoints/support/pricing and huggingface.co/pricing, each vendor's pricing page,
computeprices.com and spheron.network as pointers only `[vendor]`.

### Lane H: Compute, part 3: India's GPU supply and data centres
Questions: IndiaAI empanelled providers (Yotta, E2E Networks, Netmagic or NTT, Tata Communications, Jio, CtrlS, Sify,
Orient Technologies, Ishan, Locuz, Cyfuture and others), their GPU counts, sites, L1 rates, and which sites are in Mumbai
or Navi Mumbai; Yotta Shakti Cloud prices and NM1 facts; E2E Networks' public price list (H100, H200, L40S, L4) and its
NSE filings; hyperscaler regions in India (AWS Mumbai and Hyderabad, Azure Pune, Chennai and Mumbai, Google Mumbai and
Delhi, Oracle Mumbai and Hyderabad) and GPU instance availability; Indian data-centre capacity by city (Savills,
Cushman and Wakefield, JLL, Knight Frank; reconcile with the packet's Mumbai 846 MW); published PUE, WUE and renewable
sourcing of Mumbai data centres (Yotta, CtrlS, NTT, STT GDC, Nxtra, Sify, AdaniConneX); Maharashtra green open-access
rules and renewable tariffs for data centres; MeitY data-centre policy.
Seeds: shakticloud.ai pricing, e2enetworks.com pricing, indiaai compute portal, w.media Cushman report, Knight Frank 2025
update PDF, company sustainability reports, MERC orders.

### Lane I: Speech and language stack for Indic collections calls
Questions: open Indic speech models (AI4Bharat IndicConformer, IndicWhisper, Vistaar benchmark word error rates for
Marathi and Hindi; Whisper large-v3 on Indian languages); Bhashini services and terms; Sarvam's speech and text API prices
(per audio hour, per character); Gnani's products; open-weight small language models usable for classification and
summaries (Llama 3.x 8B, Qwen, Gemma, Sarvam-M, BharatGen Param) with licences; GPU throughput for batch speech
recognition (real-time factor on L40S, A100, H100; batching; int8 and FP8 quantisation; distillation results); concurrent
streaming voice sessions per GPU in published benchmarks; latency targets for voice agents; Indian cloud-telephony prices
per minute (Exotel, Ozonetel, Knowlarity, Plivo India); TRAI rules on commercial calls (DLT, 140-series and 160-series
numbers) that apply to reminder calls; loan-management and collections software used by NBFCs (Nucleus FinnOne Neo,
Pennant, Credgenics) and dialler vendors.
Seeds: ai4bharat.iitm.ac.in, bhashini.gov.in, docs.sarvam.ai/api/pricing, huggingface model cards, arxiv.org papers on
IndicConformer and Vistaar, NVIDIA Riva benchmarks, trai.gov.in.

### Lane J: Energy, carbon and water
Questions: CEA CO2 baseline database v21 and v22 (weighted average and combined margin, FY2024-25); India's grid mix
FY2025-26 and Maharashtra's renewable share; water consumption of Indian thermal power (MoEFCC 2015 norms of 3.5 m3 per
MWh for new plants, actual averages); data-centre PUE benchmarks (Uptime Institute global survey 2024 or 2025; Indian
operators' disclosures); WUE definitions (The Green Grid) and published values (Microsoft, Google, Meta, Indian
operators); GHG Protocol scope 2 guidance on location-based and market-based methods, renewable certificates (I-REC) and
green open access in India; measured energy per inference task (Luccioni and others, "Power Hungry Processing", 2024;
Patterson and others; Li and others, "Making AI less thirsty"); embodied carbon of GPUs if published; BIS or MeitY
standards on data-centre PUE and WUE.
Seeds: cea.nic.in baseline user guides v21 and v22, uptimeinstitute.com survey, ghgprotocol.org scope 2 guidance,
arxiv.org for the AI energy papers, sustainability reports of Yotta, CtrlS, NTT India.

### Lane K: Go-to-market and unit-economics benchmarks
Questions: Indian B2B SaaS ACV, CAC and payback by ARR band (upGrowth 2026 and similar); per-agent prices of
conversation-intelligence and call-QA tools sold in India (Convin, Observe.AI, Level AI, Exotel, Ozonetel, Sprinklr);
enterprise sales cycles for BFSI vendors in India (vendor risk assessment, infosec review, RBI outsourcing checklist);
2026 salary benchmarks in Mumbai, Pune and Bengaluru for ML engineers, backend engineers, account executives, customer
success and compliance roles; Series A thresholds in India (ARR and growth that funds look for in 2025 and 2026); DPIIT
recognition process and time; ISO/IEC 27001 and ISO/IEC 42001 certification costs and timelines in India; cyber
insurance premiums for SaaS startups.
Seeds: upgrowth.in, Inc42 and Tracxn funding reports, Naukri and AmbitionBox salary pages `[blog]`, BSI and TUV pages for
ISO costs `[vendor]`, startupindia.gov.in.

### Lane L: Third-party quotes for the deck and research
Collect 12 to 25 verbatim quotes of at most 40 words, each with name, title, URL and date, that bear on the
recommendation: RBI (Governor or Deputy Governor) on AI in lending or on recovery-agent conduct; the FREE-AI report's own
wording on vendor accountability and audit; MeitY on DPDP or synthetic content; NVIDIA or Anthropic executives on India
compute or Indian data residency; a Nasscom statement on AI adoption in BFSI; a Maharashtra government statement on the
AI policy. If none can be verified verbatim, record the nearest verbatim sentence and mark it.

### After the eleven files exist (step R2)
The main agent runs `python -X utf8 econarena-svc/research/build_sources.py`, reads every "Changed numbers" list, applies
5.3 where triggered, and writes `## Corrections for writers` and `## Terminology for writers` in `build-log.md` (for
example, whether an RBI 2026 recovery draft is final, and the exact name of the IndiaAI GPU portal).

## 7. Research document specification

### 7.1 Format
- File `research/setu-ai-research.md`, assembled by `assemble.py md`. Writers never write an H1.
- Each H2 is `## N. Title` with the exact title from 7.2 and opens with a bold `**Answer.**` paragraph of two to four sentences.
- Pipe tables are introduced by a sentence and followed by what they show. Worked arithmetic is shown the first time a
  derived number appears. Every section that feeds a slide ends with `Exhibit for the deck: ...`.
- No images. Blockquotes only for verbatim quotes of at most 40 words with attribution, and for product copy labelled
  `Product copy (draft, subject to legal review):`.
- Symmetric templates: §15 uses one template per player (who they are; funding; products; BFSI and collections reach;
  hosting; price; how they could respond to Setu; the T20 row with evidence for each cell). §19 to §22 use one template per
  provider (what it sells; chips; price and billing unit; regions and India presence; commitments; data handling; energy
  and water disclosures; fit for Setu).

### 7.2 Section outline, content and owner

| § | H2 title (use exactly) | Must contain | Tables (min) | Words (min) | Writer |
|---|---|---|---|---|---|
| 0 | Document control: every number in this document traces to the case, an assumption, the model or a verified source | Purpose and readers; tag legend with one example each; source hierarchy; model file, hash and rerun command; the skill's calibration note; the four kinds of number; verification tally per lane B to L; what the document does not contain (no customers, interviews, tests or measured footprints); naming rule | 5 | 1,200 | W-A |
| 1 | Coverage matrix: every line of the case maps to a section of this document and a slide | One row per ID in `case/01-case.md` (what it says in at most 20 words, how we answer, section, slide); the six scoring criteria mapped to sections and slides (3.7); lines answered only in part and why | 4 | 1,800 | W-A |
| 2 | The answer on one page: do not train a base model; sell mid-sized lenders in Mumbai and Pune evidence that every collection call followed the rules, for 28 lenders and ₹6.6 Cr of ARR by month 24 | Recommendation in three sentences; the do-not and do table (3.3) with numbers; the moneyshot (₹17.2 Cr left against out of cash in month 21); answers to each task in five lines each; the financial sketch in one table; the honest bear reading; five triggers that would change our mind; a 150-word version; the "Therefore" paragraph | 6 | 2,600 | W-A |
| 3 | The case decoded: ₹50 crore, rented compute and one industry-region pair leave room for a product company and none for a model lab | Fixed rules C-R1 to C-R4 read as constraints; what 18 to 24 months of runway means in monthly burn; the scoring weights and what they reward; the facts table read critically (portal prices, Claude.ai use as a proxy, the 23% governance figure as secondary data); the issue tree for the whole case | 6 | 2,800 | W-A |
| 4 | India's AI market in October 2026: models are crowded and subsidised, and governed deployment inside regulated firms is thinly served | Lane B, E, F facts: IndiaAI teams, Sarvam and Krutrim funding, global labs' India moves (Claude in India regions), price trends for tokens and GPU-hours; PESTLE; where money is being made in Indian AI (services, agents, voice) with revenue figures; the foreshadow without naming our product | 6 | 3,000 | W-B |
| 5 | Government support decoded: the IndiaAI portal lowers GPU cost to ₹65 to ₹92 an hour, and every grant stays upside only | Each scheme in C-G1 to C-G5 and Lane B in a common template (what, who qualifies, process, time, what Setu uses, booked or upside); T22; DPIIT steps; the Maharashtra MSME subsidy as a channel lever; other states; the 5-point criterion answered | 6 | 2,800 | W-B |
| 6 | The industry screen: lenders score 4.00 of 5 because AI maturity and a hard regulatory clock meet in one buyer | T3 with evidence for every cell (C-I1, Lanes C, D, K); weights and why; sensitivity of the winner to weights (three alternative weight sets computed by hand from T3); why healthcare and IT services lose | 5 | 2,600 | W-B |
| 7 | The region screen: the West scores 4.50 of 5 on capacity, lender head offices and Maharashtra's policy, and the South leads only on combined AI use | T4 with evidence per cell (C-RG1 to C-RG5, Lanes D, H); the packet's numbers converted (Mumbai and Pune 56% of capacity); Claude.ai use as a proxy and its limits; vendor crowding in Bengaluru; latency and data-residency reasons | 5 | 2,600 | W-B |
| 8 | The pair and what comes next: BFSI lenders in Mumbai and Pune first, Chennai second once 20 lenders pay, insurance third | T5 heat grid read row by row; the second-region trigger (20 paying West lenders, Tamil review accuracy within 2 points of Marathi on our evaluation set, two Chennai paid pilots through a partner); the second-industry trigger (insurance renewals and collections once the evidence file passes an external audit); a CAGE-style distance note for Chennai | 4 | 2,000 | W-B |
| 9 | The collections problem: lenders record calls they cannot review, and the 2026 rule changes turn that gap into a liability | Lane C and D facts: call volumes, typical sampling rates of manual QA (sourced or stated as an assumption), complaints and RBI penalties on recovery conduct, the 8 am to 7 pm rule, the 2026 recording drafts; jobs-to-be-done of the head of collections and the compliance head; five whys | 5 | 2,800 | W-C |
| 10 | The rule clock: RBI's recovery code, FREE-AI, DPDP, the IT Rules amendment, outsourcing and CERT-In directions, read as product requirements | Each rule in a template (what it says, date, who it binds, what it asks of a lender, what it asks of Setu as vendor or processor, the product feature that answers it); a rule-by-feature matrix; FREE-AI's 26 recommendations mapped to what a lender needs from vendors | 8 | 3,600 | W-C |
| 11 | Market sizing bottom-up: ₹321 crore across India's lenders, ₹85 crore across 278 West lenders, ₹6.6 crore obtainable by month 24 | T19 with each count sourced (Lane D) or labelled estimate; the value-per-minute arithmetic; why top-down slicing is rejected; SOM as 28 lenders and 8% of SAM; how the numbers move if the counts change | 5 | 2,400 | W-C |
| 12 | The buyer: a head of collections who needs a compliance head's sign-off, an 18-week path to live, and three first customers described by profile | Buying committee map (economic buyer, user, approver, blocker); sales-cycle Gantt in weeks with the vendor-risk steps; the three first customers (profile, city, collectors, minutes, buyer, contract value with arithmetic, why they buy first); why large banks wait (9 to 15 months, stated as a team estimate unless Lane K sources it) | 5 | 2,600 | W-C |
| 13 | Go-to-market: founder-led direct sales plus agency and loan-software partners, with free call audits standing in for a brand | Channel mix (direct 65%, partners 35% of new lenders) and why self-serve is out for lenders; the free 500-call audit, the readiness report, lender forums; pricing and packaging (₹1,000 per collector a month; ₹2.50 a voice minute); partner economics (15% first-year commission); AARRR funnel with the model's pilot and conversion numbers; month-by-month pipeline (T7) | 6 | 3,000 | W-C |
| 14 | Five routes under one test: training a base model scores 1.60 of 5 and runs out of cash in month 21; compliance-grade collections AI scores 4.35 | T6 explained cell by cell; the model-first arithmetic (T18) with FLOPs, GPU-hours and burn; why voice agents for every industry and AI services lose; the paragraph opening "Conclusively," | 5 | 2,800 | W-D |
| 15 | Competitor analysis: 14 players scored on 7 capabilities, with the closest rivals in collections technology rather than among model builders | Lane E per-player template (7.1); T20 with the evidence behind every cell; Porter's five forces for AI vendors selling to lenders; strategic group map as a table; further players from Lane E; what each could do in 12 months | 9 | 4,200 | W-D |
| 16 | What Setu builds, buys and borrows: a rule engine, an evidence file and a labelled call corpus on top of borrowed models and rented GPUs | The product (3.4) in detail; architecture as a table (layer, function, build/buy/borrow/rent, vendor options, cost line); data flow and where data sits; product copy block; Wardley-style evolution of each layer; what Setu deliberately does not build | 6 | 3,000 | W-D |
| 17 | The moat: three advantages that take 12 to 18 months to build and need lender consent to copy | T21 moats; VRIO for each; Helmer's 7 Powers (switching costs, cornered resource, counter-positioning) with honest strength ratings; how each is measured (labelled hours, evidence-months per lender, partner-sourced share) | 5 | 2,600 | W-D |
| 18 | Weak advantages and competitive response: speech accuracy, price, hosting in India, the rule checklist and dashboards can be copied within 12 months | T21 weak rows with evidence; a competitive response game tree (Convin, Credgenics, Sarvam, a global lab) with our counter-move; pre-empted weaknesses | 4 | 2,200 | W-D |
| 19 | How AI compute is sold in 2026: NVIDIA's chips, systems, software and partner clouds set the price floor for everyone else | Lane F: chip and system specifications table; NVIDIA Cloud Partners and DGX Cloud Lepton; software licensing; how a GPU-hour price is built (capex, power, cooling, utilisation, margin) with worked arithmetic from sourced inputs only | 7 | 3,600 | W-E |
| 20 | How frontier labs buy and sell compute: Anthropic runs Claude on three chip families and now serves Indian customers from Indian regions | Lane F: Anthropic's TPU, Trainium and NVIDIA arrangements with dates and scale; how Claude is sold (API, Bedrock, Vertex AI) with per-million-token prices, batch and caching discounts, India inference profile; OpenAI and Google for symmetry; what this means for Setu (buy summaries, do not compete on models) | 6 | 3,200 | W-E |
| 21 | Rented compute outside the hyperscalers: Hugging Face, the GPU neoclouds and inference APIs, priced per hour, per token and per minute | Lane G: Hugging Face Inference Endpoints table and billing; Inference Providers, Spaces and ZeroGPU; neocloud price table (on demand and reserved); speech APIs priced per audio hour; H100 rental price trend 2023 to 2026; data-residency gaps for Indian lenders | 7 | 3,400 | W-E |
| 22 | India's GPU supply: the IndiaAI portal, Indian GPU clouds and hyperscaler regions in Mumbai and Hyderabad | Lane H: portal facts and empanelled providers; provider template per Indian cloud; hyperscaler regions and GPU availability; capacity by city reconciled with the packet; PUE, WUE and renewable disclosures found | 7 | 3,400 | W-E |
| 23 | Hardware for Setu's workloads: H100 for adaptation, L40S for batch review and live voice, and the serving maths behind 12,000 H100-hours | Lane F and I: workload-to-hardware table; training budget (what 12,000 H100-hours buys in fine-tuning runs, from sourced throughput); batch review throughput (A13, A14) against published real-time factors; concurrent voice sessions (A15); quantisation and distillation effects; why not B200 yet; T12 | 6 | 3,200 | W-E |
| 24 | Where compute runs and why: IndiaAI portal GPUs in Mumbai data centres cost ₹0.72 crore over 24 months against ₹6.61 crore for APIs alone | T13 explained; the bridge on commercial Indian cloud for months 1 to 4 (A19); data residency for lenders; latency to Mumbai; provider selection criteria (price, PUE, WUE, renewable share, certifications); the Task 3a answer in one paragraph | 5 | 2,600 | W-E |
| 25 | Energy, carbon and water over 24 months: 46 MWh, 33 t of CO2e and 138 kL of water, falling to 20 t with renewable contracts | Method in plain words then formulas (the A2 slide formulas); inputs A40 to A47 with sources; T14; location-based and market-based reporting; what is excluded (offices, travel, embodied carbon of GPUs, API providers' footprint) and a rough order of magnitude for the API share from Lane J sources; the honest reading that development GPUs dominate | 6 | 3,000 | W-F |
| 26 | Three measurable targets: halve energy per 1,000 reviewed minutes, reach 70% renewable-matched energy, and use only hosts that publish PUE and water | T15; baselines, measurement method, data source, owner, review cadence; a fourth stretch target (switch development GPUs off nights and weekends) quantified from T12 | 4 | 2,000 | W-F |
| 27 | The trade-offs between cost, speed and environmental impact, choice by choice | The slide 4 trade-off grid expanded: portal against on demand, the bridge, distillation, Mumbai against southern sites, night batching, hyperscaler against portal, APIs against own serving; each with numbers from T13 and T14 | 5 | 2,400 | W-F |
| 28 | The budget: ₹50 crore split as ₹22.0 crore people, ₹1.8 crore compute, ₹5.6 crore sales, ₹3.8 crore marketing, ₹3.0 crore data, ₹2.6 crore compliance and ₹11.2 crore reserve | T9 with what each line buys; T10 team plan with CTCs against Lane K benchmarks; phasing by half-year (T8); why compute is 4%; what the reserve protects | 5 | 2,600 | W-F |
| 29 | Financial sketch: four half-years from ₹50 crore to ₹17.2 crore, with 11.0 months of runway left at month 24 | T8 in full; T7 monthly path; runway arithmetic; cash collection lag; the one-page sketch reproduced exactly as slide 5 shows it | 5 | 2,400 | W-F |
| 30 | Unit economics: ₹23.5 lakh contracts, ₹33.4 lakh to win each, 76% gross margin and a 22-month payback | T11 with arithmetic; cost of revenue build-up; comparison with Lane K Indian SaaS benchmarks; how partner share and voice attach move CAC and payback | 4 | 2,000 | W-F |
| 31 | Scenarios and sensitivity: the bear case ends month 24 with 4.8 months of runway, and the month-18 cuts lift it to 6.9 | T16, T17; what each scenario assumes; the honest reading; break-even style questions (what pilot conversion keeps 6 months of runway) answered from the tornado | 5 | 2,400 | W-G |
| 32 | Milestones and the next round: 15 lenders, ₹3.0 crore of ARR and 70% gross margin by month 18 open the Series A | The milestone and why each threshold; base meets it (17, ₹3.83 Cr, 75%); Series A sources (Fund of Funds 2.0 via SEBI-registered funds; Maharashtra's fund as upside); what happens if missed | 3 | 1,800 | W-G |
| 33 | Roadmap for 24 months: three horizons, the hiring plan from 22 to 59 people, and the triggers for Chennai and insurance | Quarter-by-quarter table (product, customers, hiring, compliance certifications, compute); RACI for the founders; three horizons | 4 | 2,200 | W-G |
| 34 | Risks: a data incident, a slow RBI final rule and a price war from voice-agent vendors carry the most weight | Register (probability, impact, early signal, response, owner); heat map as a table; pre-mortem | 5 | 2,200 | W-G |
| 35 | Customer validation plan (not yet run): 27 conversations and three free call audits in the first month decide the first product | First sentence says nothing has been run; hypotheses; sample (8 heads of collections, 6 compliance heads, 4 CTOs or CISOs, 6 agency owners, 3 audits); interview guide; decision rules | 3 | 1,600 | W-G |
| 36 | Assumptions register: every model input with its base, bear and bull value, and the inputs that move runway most | T1 in prose; T17 ranking; evidence class per assumption; how to change one input and rerun | 3 | 1,800 | W-G |
| 37 | Slide blueprint: seven slides carry the argument, and every number on them traces to a tagged line in this document | Per slide and panel: title, numbers, section and tags (from `deck/slide-copy.md`); archetype mapping (skill `archetypes.md`); cover mind-map nodes; "Conclusively" on slide 3, "Therefore" on slide 7; the one moneyshot | 4 | 1,800 | W-G |
| 38 | Forty questions the judges could ask, answered | Grouped as region and industry, go-to-market, budget and financials, product and moat, competitors, compute and environment, government and compliance; the ten hardest first; 60 to 120 words each with tags. The only section with question marks | 2 | 5,000 | W-G |
| 39 | A talk track for three speakers, timed slide by slide | Timed blocks; the one number each block lands; handovers between Harsh, Gursimran and Dayita | 2 | 1,000 | W-G |
| App A | Appendix A: Bibliography | Built by `assemble.py` | 1 | n/a | Script |
| App B | Appendix B: Model tables | T1 to T23, inserted by `assemble.py` | 23 | n/a | Script |
| App C | Appendix C: Glossary and short forms | Every term and short form (compute terms included: FLOP, BF16, FP8, HBM, NVLink, MIG, PUE, WUE, RTF, KV cache) | 2 | 1,200 | W-G |
| App D | Appendix D: Data conflicts and method limits | Every `## Conflicts` entry and its resolution; model limits; competitor-cell changes | 2 | 1,000 | W-G |

Part files: `part-A.md` §0 to 3; `part-B.md` §4 to 8; `part-C.md` §9 to 13; `part-D.md` §14 to 18; `part-E.md` §19 to 24;
`part-F.md` §25 to 30; `part-G.md` §31 to 39; `appendix-C.md` and `appendix-D.md` by W-G, each opening with its exact
`## Appendix X: ...` heading.

Acceptance (printed by `assemble.py md`): words at least 90,000; tables at least 160; dashes 0; exclamations 0; question
marks outside §38: 0; `not just/only/merely`: 0; banned empty; question headings empty; `missing_S` empty; duplicate
headings empty; `**Answer.**` leads at least the number of H2 sections; untagged number lines at most 40; no
"Project X" phrases; `ai_statement` 0.

---

# PART IV. EXECUTION

## 8. Skill touchpoints (mandatory)

### 8.1 case-competition-deck (`skill: "case-competition-deck"`)

| Touchpoint | When | What to do | Pass test |
|---|---|---|---|
| A | Step B3 | Load the skill; read `references/structure.md`, `rhetoric.md`, `archetypes.md`, `frameworks.md`, `case_types/strategy.md`, `marketing.md`, `operations.md`. Confirm section 3 carries: contrarian answer, seed, symmetric treatment, three scenarios, one moneyshot, double synthesis, action titles, third-party validation (Lane L quotes), pre-empted weaknesses | All nine located; calibration note logged |
| B | Every writer prompt | Writers read `rhetoric.md`, `case_types/strategy.md` and the frameworks assigned in 3.6 | Each part's H2s are the locked findings; each framework appears |
| C | Step R6 | Critique mode on the research (prompt 11.4) | `research/critique.md`; every score under 4 fixed or reason logged |
| D | Step R5 | Slide-mode check of research §37 against `archetypes.md` | Mapping table appended to §37 |
| E | Step Z1 | Polish search on the research: TODO, Insert, Placeholder, TBD, Lorem, xyz, other case names (SwiftKart, SwasthyaGrid, HarvestBox, Dream11, Paytm, Liminal, Satoshi, Alchemy, TiO2, Eurogrip, ONL Trade, Arthik, "Project Setu") | Nothing outside the bibliography |
| F | Step D1 | Before deriving the deck: three core headlines are full-sentence findings with a number; slide 3 carries "CONCLUSIVELY", slide 7 "THEREFORE"; exactly one `CARD: MONEYSHOT` | Logged |
| G | Step D6 | Critique mode on the built deck (prompt 11.5) | `deck/critique.md`; allowed fixes applied |
| H | Step D7 | Final polish search on `deck/slide-copy.md` (same list as E) | Nothing found |

The rubric assumes a 100-slide M&A deck. Re-base it and say so: "8 sections present" becomes 3.2; "sample 10 action titles"
becomes all 40 research H2s or all five content-slide headlines; "appendix depth" becomes "every number has a tag"
(research) or "every number is in `values.json` or a VERIFIED row" (deck). The skill's .pptx step does not apply.

### 8.2 humanizer (`skill: "humanizer"`)

| Touchpoint | When | What | Pass test |
|---|---|---|---|
| HU1 | Each writer, before replying | File-mode pass on its own part (2.3) | Self-check prints 0 tell hits |
| HU2 | Step R4, after `ASSEMBLY PASS` | Main agent samples 20 paragraphs across all parts and counts tells by §1 to §8, §12, §13 and §19 | Under 1 tell per paragraph on average; worst three fixed by the owner |
| HU3 | Step D1 | Every `overrides.json` string and the derivation copy | No contrast, closer, triad or dash introduced |
| HU4 | Step D6 | The deck critic counts tells in `deck/slide-copy.md` | Zero tells of §1 to §8 |

### 8.3 Figma
Load `figma-use` (Skill tool if listed; otherwise `ReadMcpResourceTool` server `figma-mcp` uri
`skill://figma/figma-use/SKILL.md` and, if present, `skill://figma/figma-use-slides/SKILL.md`) before the first
`use_figma` call; pass `skillNames: "resource:figma-use"` (plus `,resource:figma-use-slides` when read) on every call.
The deck positions nodes absolutely through the helper library, which overrides any auto-layout advice.

## 9. Environment (checked 26 Oct 2026)

Python 3.14.5 with PyMuPDF (`fitz`), Pillow, fontTools, numpy; Node v24.15.0; Chrome at
`C:\Program Files\Google\Chrome\Application\chrome.exe`. Run every Python command from the repo root with `python -X utf8`.
In PowerShell chain with `;`, never `&&`; the Bash tool is also available. `markdown_it` is used by the PDF renderer
(`python -m pip install markdown-it-py` if missing). The deck generator reads, never writes:
`verdict-mnc/deck/preamble.js`, `verdict-mnc/deck/mock_figma.js` and
`swasthyagrid-gcp/space-beyond/deck/{_x2.js,_x3.js,metrics.json,preview.py}`. The PDF builder reads
`iim-lucknow-pivot/research/build_pdf.py`.

## 10. Execution sequence

### 10.1 Bootstrap

Step B0. Copy this plan byte for byte:
```
python -c "import shutil; shutil.copyfile(r'C:\Users\harsh\.claude\plans\pasted-content-id-384c-working-folder-sequential-yeti.md', r'econarena-svc\PLAN.md')"
```
Step B1. Open `econarena-svc/PLAN.md`, find the block `<!-- FILE: extract.py -->` in Part VI (section X3), create
`econarena-svc/extract.py` with exactly that block's content using the Write tool, and run
`python -X utf8 econarena-svc/extract.py`. Done when it prints `files 21`.

### 10.2 Step table

The Round 1 deadline is close (results on 29 Oct 2026 [C-N1]). At B2 ask the user once for the submission deadline. If it
is under 36 hours away, take the fast path: run D-early (below) right after R2, so a complete, verified deck exists
before the writers finish; the research then refines the deck through D1.

| Step | Who | Action | Done when |
|---|---|---|---|
| B0, B1 | Main | Bootstrap | `files 21` |
| B2 | Main | Start `build-log.md` and `DECISIONS.md` (header `date | step | decision | why`); read 2.5; ask the deadline | Both exist; deadline logged |
| B3 | Main | Touchpoint A; load the humanizer skill | Logged PASS |
| M1 | Main | `python -X utf8 econarena-svc/model/setu_model.py` | 12 PASS lines, `CHECKS 12/12 HASH ea62a456cb`, `FINDINGS ₹17.2 Cr 11.0 months 28 ₹6.6 Cr ₹38.8 Cr 32.9 t 46.3 MWh month 21`, three files written; spot-check five rows of section 4 against `model_tables.md` |
| M2 | Main | `python -X utf8 econarena-svc/deck/gen.py pre`; `... gen.py mock`; `... gen.py copy`; `... gen.py preview`; Read all seven previews | Seven `sNN OK`; `copy issues 0`; previews viewed and each described in one line in `build-log.md`. Look for: text running over a line or border, a label touching a bar, an empty panel region larger than a quarter of the panel. If found, use 15.6 |
| C0 | Main | Cover first: 15.2 steps F1 to F4, then show the user the cover screenshot and say the research stage is starting | Slide 1 built, V1 clean, screenshot viewed |
| R1 | Verifiers, background, three at a time: B, C, D; then E, F, G; then H, I, J; then K, L | Prompt 11.1 with the lane text from section 6 | Eleven `R-*.md` files with `## Gaps` and `## Conflicts`; replies give counts and "Changed numbers" |
| R2 | Main | Section 6 "After the eleven files exist"; apply 5.3 | Every S-ID has a URL; corrections and terminology written; if the model changed, M1 and M2 rerun and logged |
| D-early | Main (fast path only) | 15.3 steps 1 to 4 using the raw files instead of the research, then 15.4 D2 to D5 | Seven slides live, sweeps clean |
| R3 | Writers, background: W-A, W-B, W-C together; then W-D, W-E, W-F; then W-G | Prompt 11.2 | Each part meets its words and tables and passes its self-check, including HU1 |
| R4 | Main | `python -X utf8 econarena-svc/research/assemble.py md`; then HU2 | `ASSEMBLY PASS`; else re-dispatch the short writer with 11.3 |
| R5 | Main | Touchpoint D; `python -X utf8 econarena-svc/research/assemble.py pdf` | PDF over 800 KB; first page and one table page viewed with Read; team block shows all three members |
| R6 | Critic CR | Touchpoint C, prompt 11.4 | `critique.md`; fixes applied by re-dispatching owners; R4 and R5 rerun |
| Z1 | Main | Touchpoint E; checklist 14.1; Stage 1 report to the user; write `STAGE 1 COMPLETE` with the date | All boxes ticked |
| D1 to D9 | Main | Section 15 | 15.9 ticked |
| Z2 | Main | Memory, 14.3 | Files and pointers exist |

### 10.3 Parallelism rules
- At most three sub-agents at once; on a rate limit, relaunch after the reset time in the error.
- Sub-agents write only their own files. Figma calls are made by the main agent only, one at a time.
- Writers start only after M1 (tables) and R2 (S-IDs). Writers save their file after the first two sections and extend it.

## 11. Prompts

### 11.1 Verifier prompt (fill LANE = B to L)

> You are verifier V-LANE for a case-competition research file. Read `econarena-svc/PLAN.md` section 6 (the schema, the
> cross-lane rules, the planning-time findings and "Lane LANE"), section 2.1 and `econarena-svc/case/01-case.md`. Today's
> date is the access date. For each question and seed: open the URL with WebFetch, or find the primary source with
> WebSearch (mode "standard"; "extended" only when a standard search comes back thin, outdated or off target); record one
> row per fact in the schema; mark it VERIFIED, CORRECTED (give the corrected figure and date), VERIFIED (search only),
> UNVERIFIABLE or NOT YET PUBLISHED; quote at most 25 words verbatim. Add rows from better sources until you have 40 to 80
> (Lane L: 12 to 25 quotes of at most 40 words with name, title, URL and date). Prefer regulators, filings, official
> price pages, data sheets, peer-reviewed papers and standards. For every price give the unit, billing granularity,
> region, commitment term and the date the page showed it. Never invent a figure, date, quote, circular number, price or
> URL. Never infer a 2026 date from an earlier year. Flag `[blog]` and `[vendor]`. Keep conflicting sources and list them
> under `## Conflicts`. Do not write analysis. Do not convert currency. No em dashes or en dashes. R-IDs are `LANE` plus
> two digits (F07). Write `econarena-svc/research/raw/R-LANE.md`, saving after your first two questions and extending it.
> Reply with rows verified, corrected, unverifiable, not yet published and new; a list "Changed numbers" with the T1
> assumption ID (or T20 cell, or MKT_SEG count) where one applies; and, at the top, any finding that would change the
> recommendation, a regulatory date on slide 2, or a competitor cell on slide 3.

### 11.2 Writer prompt (fill PART and SECTIONS)

> You are writer W-PART. Write sections SECTIONS of a consulting-grade research deliverable into
> `econarena-svc/research/parts/part-PART.md` (W-G also writes `appendix-C.md` and `appendix-D.md`).
>
> Skills first. Invoke `case-competition-deck` with the Skill tool and read `references/rhetoric.md`,
> `references/case_types/strategy.md` and the `frameworks.md` entries assigned to your sections in PLAN 3.6. Then invoke
> `humanizer` and keep its tells list beside you while you write.
>
> Read first, fully: `econarena-svc/PLAN.md` sections 1 to 7; `case/01-case.md`; `model/model_tables.md` (T1 to T23) and
> `model/model_outputs.json`; `research/raw/sources.md` and every `R-*.md`; `build-log.md` sections "Corrections for
> writers" and "Terminology for writers"; for register only, `dreamforge-case/research/swiftkart-research.md` lines 1 to
> 150 and `arthikkhayal-case/research/arthik-khayal-research.md` lines 1 to 150.
>
> Rules. (1) Use the exact H2 titles from PLAN 7.2 as `## N. Title`, `### N.M` for sub-sections, never an H1; open every
> H2 with a bold `**Answer.**` paragraph of two to four sentences; use the symmetric templates in 7.1 where they apply.
> (2) Cover every "Must contain" item and meet the minimum words and tables; more is welcome when every paragraph carries
> evidence. (3) Every number carries a tag: [C-G1], [A17], [M], [T13], [S12] or a raw row [F07]. Use only numbers from the
> case, the model files, PLAN section 4, or a VERIFIED or CORRECTED raw row. (4) Do not browse. Compute nothing beyond
> sums, differences, ratios and products of tagged numbers, and show the arithmetic the first time. (5) Write "in our
> model" for every model result. Never invent a customer, interview, quote, price, accuracy figure, test result or measured
> footprint; the three first customers are profiles; section 35 has not been run and says so. (6) Keep the recommendation
> and every locked number exactly as in PLAN section 4, and state the honest bear reading (4.8 months, 6.9 with the
> month-18 cuts) wherever your sections touch scenarios. (7) Grants are upside only. (8) Coin no name for the product, a
> feature, a plan or a phase; the company is Setu AI. No AI-use statement. (9) The case's ranges are written "18 to 24"
> and "2 to 3", never with a dash.
>
> Style. First person plural, declarative, plain words, mostly short sentences with some longer ones, reasoning shown, a
> number in most sentences: a consultant's memo to Setu AI's founders and board. Zero em and en dashes; ranges use "to".
> No hooks, rhetorical questions, "imagine" or exclamation marks; question marks only in §38. Banned words: PLAN 2.2.
> Expand each short form on first use in a section; put an italic expansion line under any table with short-form heads.
> Introduce every table with a sentence and follow it with what it shows. Sentence-case sub-headings. End every
> slide-feeding section with `Exhibit for the deck: ...`.
>
> Humanizer pass before you finish (HU1). Treat your part file in the humanizer's file mode: prose only; numbers, tags,
> tables, headings and copy blocks unchanged. Fix, strongest first, the tells in PLAN 2.3, then reread for contrasts,
> closers, triads, dashes and bold labels. Add no fact in this pass.
>
> Save after your first two sections and extend. Self-check before replying:
> `python -X utf8 -c "import re,io;t=io.open(r'econarena-svc/research/parts/part-PART.md',encoding='utf-8').read();b=re.split(r'^## 38\.',t,flags=re.M)[0];print(len(t.split()),len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),len(re.findall('[\u2014\u2013]',t)),t.count('!'),b.count('?'),len(re.findall(r'\bnot (?:just|only|merely)\b|\bat its core\b|\bthe real question\b|\bserves as\b|\bstands as\b|\bpivotal\b|\bcrucial\b|\badditionally\b|\bkey\b',t,re.I)))"`
> Fix until dashes, exclamations, stray question marks and tell hits are 0 and words and tables meet the minimums. Reply
> with the six numbers, the sections written and any figure you wanted but could not find. Edit no other file.

Assignments: W-A §0 to 3; W-B §4 to 8; W-C §9 to 13; W-D §14 to 18; W-E §19 to 24 (the compute deep dive; add to its
prompt: "Lanes F, G, H, I and J are your primary sources. Write at the depth of a cloud-infrastructure analyst: chip
specifications, billing units, utilisation arithmetic, serving maths and price build-ups, each from tagged rows. Use the
per-provider template in PLAN 7.1."); W-F §25 to 30; W-G §31 to 39 plus the appendix files. W-G runs last; add: "Also read
`parts/part-A.md` to `part-F.md` and `deck/slide-copy.md`; §37 and §38 quote only numbers that appear in those files."

### 11.3 Expansion line (when a part is short)
"Expand sections <list> by <n> words by adding worked examples from the model tables and the raw files and one more table
a section, keeping the templates where they apply. Do not change any number. Run the humanizer pass again on the added text."

### 11.4 Critic prompt (research)

> You are critic CR. Invoke `case-competition-deck` and read `references/critique_rubric.md`, `rhetoric.md` and
> `case_types/strategy.md`; invoke `humanizer`. Read `econarena-svc/PLAN.md` sections 2 to 7, then
> `research/setu-ai-research.md` in full. Score the argument with the rubric re-based for a research document (say so in
> one line): executive summary §2; context §3 to §5; actors §15 and the cover nodes; screens §6 to §8 and §14;
> go-to-market §9 to §13; product and moat §16 to §18; compute and footprint §19 to §27; financials §28 to §32; feasibility
> §31 to §35; conclusion §2 and §37; all 40 H2 titles scored for full sentence and number; "appendix depth" becomes
> "every number has a tag that resolves". Added tests: (1) every case line in `case/01-case.md` is answered with evidence;
> (2) the honest bear reading appears in §2, §29, §31 and §34; (3) every competitor cell in T20 has evidence in §15 and any
> Lane E contradiction was carried into the model; (4) the foreshadow works (§4 and §9 name the gap before §16 names the
> product; §14 opens its synthesis with "Conclusively"); (5) check 30 numbers against `model_tables.md`, the case and the
> raw files and list every mismatch; (6) grants appear only as upside; (7) §35 says it has not been run and no customer,
> quote or test result appears anywhere; (8) the compute sections cite a primary source for every price and
> specification; (9) humanizer sample of 20 paragraphs with tell counts and the worst three quoted. Lead with the two
> strongest things; at most ten issues, each with section, current state, fix and why. Never propose changing a locked
> number, the recommendation or an H2 title. No dashes. Write `research/critique.md`.

### 11.5 Deck critic prompt (touchpoint G)

> You are the deck critic. Invoke `case-competition-deck` (read `critique_rubric.md`, `archetypes.md`, `rhetoric.md`) and
> `humanizer`. Read the seven screenshots in `econarena-svc/deck/shots/`, `deck/slide-copy.md`, `deck/derivation.md`,
> `deck/values.json` and research §37. Score the deck with the rubric re-based for seven slides with three core and two
> appendix slides (say so). Check: each core slide answers its case task in full (C-T1a to C-T1d, C-T2a to C-T2c, C-T3a to
> C-T3c) and slide 5 answers C-FS (customers, revenue, spend, cash for four half-years, runway at month 24); the ₹50 Cr
> split totals 50.0 and uses the seven named lines; slide 3 carries "CONCLUSIVELY" and slide 7 "THEREFORE" with no new
> number; exactly one moneyshot; every number is in `values.json` or a tagged research line; grants appear only as upside;
> the cover mind map has real nodes and the team table with three members; zero humanizer tells (§1 to §8) and no banned
> word. At most five issues; none may change a number, the recommendation, the slide count or the layout; each fix must be
> doable through `deck/overrides.json` or 15.6. No dashes. Write `deck/critique.md`.

## 12. What good looks like (calibration for writers and critics)

> Setu AI should not train a model. Twelve teams already hold IndiaAI foundation-model support [C-G2], and in our model a
> model-first plan that trains an 8-billion-parameter model twice spends 1,58,364 H100-hours and a 40-person research
> payroll and runs out of cash in month 21 [T18]. Compute itself is cheap: at ₹185 an H100-hour [A18], the whole ₹50 crore
> would rent 27,02,703 hours [M]. The scarce things are talent, lender trust and time. Mid-sized lenders in Mumbai and Pune
> record their collection calls and review a small share by hand, while the DPDP Rules require consent systems from
> November 2026 and full compliance by May 2027 [C-G6]. We sell those lenders a review of every recorded call, at about
> ₹1,000 per collector a month [A01], and an evidence file their auditors can read. In our base case, 28 lenders pay by
> month 24 and Setu still holds ₹17.2 crore, 11.0 months of runway [T8]. The bear case keeps 4.8 months, and the month-18
> cuts lift that to 6.9 [T16].

Avoid: an adjective without a number; a number without a tag; a table without a sentence before and after it; a model
result called a measurement; a competitor claim without a source; a paragraph ending in a one-line moral; any sentence
that could sit unchanged in a document about another company.

## 13. Recovery table

| Symptom | Action |
|---|---|
| `extract.py` prints fewer than 21 files | `PLAN.md` is not a byte copy. Redo B0 |
| Model hash differs or a check fails | A file was edited or a library changed. Re-extract and rerun. If only the hash changes and every section 4 number is identical, log and continue; if a number changes, stop and report |
| `gen.py pre` assertion | A read-only library in section 9 changed. Report the failing string; do not edit those libraries |
| `gen.py mock` FAIL after an override | Shorten the override with the ladder in 15.6 and rerun |
| A preview shows a donut or arc as a disc | Expected offline; Figma draws arcs. No slide in this deck uses a donut |
| A lane has under 20 VERIFIED rows | Re-dispatch once: "Find 15 more rows from primary sources for questions <list>" |
| A verifier contradicts a competitor cell or a regulatory date on a slide | Apply 5.3 to the model (T20) and write the slide override in `deck/overrides.json` in D1; log both |
| `ASSEMBLY FAIL` | Read the JSON: fix the named part by hand for banned words or dashes; re-dispatch the owner for words or tables |
| `missing_S` not empty | A writer cited an S-ID not in `sources.md`: add the source or remove the claim |
| `ModuleNotFoundError: markdown_it` | `python -m pip install markdown-it-py` |
| Figma not authorised or rate limited | Run `whoami`; if not authorised, stop and ask the user to authorise the Figma connector |
| `setup.js` returns more than 7 slides | List them in `deck/figma.md` and ask the user before removing any |
| Deadline reached before Stage 1 ends | Submit the D-early deck; finish the research afterwards and tell the user what changed |

## 14. Final checks, report and memory

### 14.1 Stage 1 checklist
- [ ] M1 prints `CHECKS 12/12 HASH ea62a456cb` (or the logged new hash after a 5.3 update).
- [ ] Eleven raw files with `## Gaps` and `## Conflicts`; `sources.md` has a URL for every S-ID.
- [ ] `assemble.py md` prints `ASSEMBLY PASS`; HU2 logged.
- [ ] §1 has a row for every case ID; §35 opens by saying nothing has been run; the honest bear reading is in §2, §29, §31, §34.
- [ ] No AI-use statement; no coined name; grants only as upside; competitor cells match Lane E.
- [ ] PDF exists and two pages were viewed; touchpoints A to E and HU1 to HU2 logged.

### 14.2 Reports to the user
Stage 1: paths, word and table counts, critic scores, every corrected seed, every conflict, every competitor cell
changed. Stage 2: the Figma URL, the override count and the three biggest copy changes, logo slots filled and left,
residuals, the PDF paths, and the Round 1 package (15.8).

### 14.3 Memory
Save `project_econarena_setu.md` (type project) in the memory directory: folder, recommendation in one line, model hash,
Figma file key, team (Harsh Kawatra, Gursimran Kaur, Dayita Arora), palette, slide count and that
`econarena-svc/PLAN.md` is the surviving copy of this plan. Save `feedback_compute_research_depth.md` (type feedback):
when a case asks about compute, the user wants a deep technical compute track (NVIDIA, frontier labs such as Anthropic,
Hugging Face and neoclouds, Indian GPU supply, hardware and serving maths, footprint), each fact from a primary source.
Add both pointers to `MEMORY.md`.

---

# PART V. STAGE 2: THE FIGMA DECK

## 15. Stage 2

### 15.1 Gate (for slides 2 to 7; the cover is built in C0)
- [ ] `STAGE 1 COMPLETE` is in `build-log.md` and `research/critique.md` fixes are applied, or the fast path (10.2) is in force.

### 15.2 Figma setup and the cover (steps F1 to F4, run in C0)

Tools: one ToolSearch with `select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__create_session,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets`.
Guidance: 8.3. `get_metadata` does not work on Slides files.

| Step | Action | Done when |
|---|---|---|
| F1 | `whoami`. If exactly one plan has an editor seat, use its key; if several, ask the user which team. `create_new_file` with `editorType: "slides"`, name `Econ-Arena Blisspoint'26-27 | Team IdeaForge`. Then `create_session` with the new key | File key recorded in `deck/figma.md` and `build-log.md` |
| F2 | `use_figma` with the full text of `deck/setup.js` | Returns `count: 7` (or more), seven ids, `fontsOk` all true. Write `deck/slide-ids.json` as `{"S1": id1, ..., "S7": id7}` |
| F3 | `python -X utf8 econarena-svc/deck/gen.py bind 1`; run `build/slide_01_1.js` then `build/slide_01_2.js` with `use_figma`; then `build/v1_01.js` | Each part returns `warnings: []`; V1 `clean: true` |
| F4 | `get_screenshot` of slide 1 at `maxDimension: 1600`, save to `deck/shots/s1.png` with curl, Read it, compare with `deck/shots/preview_01.png` | Mind map, answer card and team table as in the preview. Tell the user the cover is up |

### 15.3 Step D1: derive the deck from the research (touchpoints F and HU3)
1. Read research §2, §5 to §18, §24 to §32 and §37, `research/critique.md` and the build-log corrections (fast path:
   the raw files and the corrections only).
2. Create `deck/derivation.md`: per slide `| Panel | Text or number | Research section | Tag | Same (yes or no) | Change |`
   covering every panel title, label, sentence and number in `deck/slide-copy.md`.
3. A number from `values.json` must match the research (if not, fix the research sentence). Wording the research states
   better, a verifier corrected (a regulatory date, a competitor cell, a price), or a claim the research could not support
   goes into `deck/overrides.json` as `"exact old string": "new string"`, never more than 10% longer, with no dash,
   question mark, exclamation mark, banned word or humanizer tell. A central finding no slide carries goes under
   "Candidates for the talk track".
4. `gen.py mock`, `gen.py copy`, `gen.py preview`; `python -X utf8 econarena-svc/deck/checks.py`. Done when seven
   `sNN OK`, `copy issues 0`, no dash or placeholder, and every name candidate is a real organisation, a case term or a
   plain phrase. Write `STAGE 2 D1 PASS` with the override count.

### 15.4 Build (main agent only, one call at a time)

| Step | Action | Done when |
|---|---|---|
| D2 | `gen.py bind` (all) | `build/slide_NN_1.js` and `_2.js` (slide 7 is one file) for N = 1 to 7, `v1_NN.js`, `v1_all.js`, `sweeps.js`, `slots.js`, each under 50,000 characters |
| D3 | For N = 2 to 7 (and 1 again if it changed): run every part of slide N in order, each must return `warnings: []`; then `v1_NN.js`; then screenshot to `deck/shots/sN.png` and Read it | V1 `clean: true` or logged residuals; each screenshot described in two lines in `deck/figma.md`. **Stop after slide 2 and compare it with `preview_02.png`, with SwiftKart `dreamforge-case/deck/shots/final-s2.png` and with Arthik `arthikkhayal-case/deck/shots/hi_s04.png`; fix the system before building the rest** |
| D4 | `build/sweeps.js` then `build/v1_all.js` | `fontLow`, `copy`, `missing`, `presentBad` empty; `moneyshot` 1; `slides` 7 |
| D5 | Logos and images (15.7) | Log written |
| D6 | Touchpoints G and HU4 (prompt 11.5) | `deck/critique.md`; allowed fixes applied, D3 rerun for those slides |
| D7 | Touchpoint H; final screenshots of slides 1 to 7 at `maxDimension: 1920`, saved as `deck/shots/hi_s01.png` to `hi_s07.png` | Seven images viewed |
| D8 | `python -X utf8 econarena-svc/deck/make_pdf.py`; then the Round 1 package (15.8) | `TeamIdeaForge_EconArena.pdf` with 7 pages; `round1/` files exist |
| D9 | Q&A bank: copy research §38 into `qa/qa-bank.md` with the 40 answers unchanged | File exists |

Every slide script's first part clears the slide (`wipe` through `skelBT`), so a rerun is safe; later parts never clear.
If a later part fails, rerun the slide from part 1.

### 15.5 Layout rule
The slide geometry is designed and mock-verified at planning time. Copy may change through `overrides.json`; geometry
changes only under 15.6. The one allowed design addition: if the D3 comparison with SwiftKart shows a panel with an empty
region larger than a quarter of the panel, the main agent may add one 18 pt `sT` note line inside that panel in the slide
file, carrying a number already in `values.json`, then rerun mock and the slide.

### 15.6 Fix rules (the only edits allowed during the build)
A fix goes into `deck/overrides.json` (copy) or the slide file under `deck/slides/` (geometry), then `gen.py mock`,
`bind`, and the slide is rebuilt from part 1. Never edit a build file by hand and never add 240 to a coordinate.

| Issue | Fix |
|---|---|
| `headline 3 lines` | Remove the two weakest words through `overrides.json`; keep every number |
| `source 2 lines` | Drop the least important source group |
| `textOut`, `cellWrap`, overflow | Shortening ladder: drop articles; a shorter word; a short form defined on slide 6; drop the least important clause. Never below 18 pt for SEC text or 22 pt elsewhere; never drop a number |
| A label touches a line in a screenshot | Nudge it by at most 24 px in the slide file |
| A node sits 240 px off | A hand-written line set x or y before `appendChild`; rerun the full slide |
| `Cannot use unloaded font` | A fragment was run; always run full part files |
| Rotated rail label not centred | After `gen.py pre`, edit `deck/_x2.js` to `const RAILROT=false;`, rerun `bind` (not `pre`) and rebuild; log in `DECISIONS.md` |

Known false positives: ribbon punch-holes over their tags, `BACK:` rectangles under cards.

### 15.7 Logos and image slots
Run `build/slots.js`. Expected slots. Slide 1 strip: SVC (Sri Venkateswara College crest), Econ-Arena, DTU, GGSIPU, Ramjas
College. Slide 1 mind map: RBI, MeitY, IndiaAI, Yotta, NVIDIA, Sarvam AI, Krutrim, BharatGen, Anthropic, OpenAI, Google,
Gnani.ai, Convin, Credgenics, Government of Maharashtra, and the image slots "Lender collections floor" and "Collection
agency partner". Slide 7: SVC, Econ-Arena, DTU, GGSIPU, Ramjas College.
1. The SVC crest and the Econ-Arena wordmark come from the case PDF itself: run
   `python -X utf8 -c "import fitz,pathlib;d=fitz.open(r'econarena-svc/6ad76ad833899_econ-arena_case_problem_final.pdf');o=pathlib.Path('econarena-svc/deck/logos/case');o.mkdir(parents=True,exist_ok=True);[open(o/f'p1_{i}.{b[\"ext\"]}','wb').write(b['image']) for i,x in enumerate(d[0].get_images(full=True)) for b in [d.extract_image(x[0])]]"`,
   Read each image and keep the crest (the 720 x 720 image at planning time) and any image that is the Econ-Arena
   wordmark. If the wordmark is only drawn text, crop page 1's rendered pixmap to it and save it as a PNG.
2. Other brands: Wikimedia Commons search (`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<brand>%20logo`
   with a descriptive User-Agent), download with `curl -sL -o "econarena-svc/deck/logos/<slug>.png" "https://commons.wikimedia.org/wiki/Special:FilePath/<File>?width=600"`,
   Read it to confirm the brand. Reuse files already downloaded for earlier decks where the brand matches (search
   `*/deck/logos/` folders first: DTU and GGSIPU exist in `arthikkhayal-case/deck/logos/`).
3. Fill: fill `MAP` in `deck/logo_rects.js` with `{"<slot id>": [pngW, pngH]}` (at most 8 a call), run it, then one
   `upload_assets` call per returned rectangle (`count: 1`, `nodeId`, `scaleMode: "FIT"`) and POST the bytes.
4. Marks carrying the State Emblem (MeitY, Government of Maharashtra) stay placeholders; tell the user. The two image
   slots take only an openly licensed photo (Wikimedia Commons, CC BY or CC BY-SA) of a call centre or office floor whose
   credit goes on slide 6 through `overrides.json`; if none is found, draw a native vector icon tile in the slot instead
   (the Eurogrip precedent: headset and phone shapes in the deck's own palette) and log it. Never resize a slot after
   upload. Log each slot as uploaded, icon or placeholder with the reason in `deck/figma.md`.

### 15.8 Export and the Round 1 package
`deck/make_pdf.py` builds the 7-page PDF from the D7 screenshots. Copy it to `round1/TeamIdeaForge_EconArena_Deck.pdf`.
Build the one-page financial sketch the case asks for [C-S0, C-FS] from `deck/shots/hi_s05.png`:
`python -X utf8 -c "import fitz;d=fitz.open();p=d.new_page(width=1920,height=1080);p.insert_image(p.rect,filename=r'econarena-svc/deck/shots/hi_s05.png');d.save(r'econarena-svc/round1/TeamIdeaForge_EconArena_Financial_Sketch.pdf')"`.
Tell the user that Figma Slides can also export natively (File, Export, PDF), that the Round 1 brief asks for 3 core + 2
appendix slides and the deck adds a cover and a thank-you slide (7 in all, within the 10-slide cap), and to check the
organisers' file-naming rule before upload.

### 15.9 Stage 2 checklist
- [ ] Seven slides; `derivation.md` covers every text and number; `overrides.json` holds every change; mock all OK after it.
- [ ] Sweeps empty; one `CARD: MONEYSHOT`; V1 clean or logged residuals; seven screenshots viewed.
- [ ] Cover: mind map with brand slots, no KPI-card row, team table with three members; same table on slide 7.
- [ ] Touchpoints F, G, H and HU3, HU4 logged; `deck/critique.md` exists; deck PDF has 7 pages; the financial-sketch PDF exists.

---


# PART VI. EMBEDDED FILES (the source of truth for every script)

## M. Model

<!-- FILE: model/setu_model.py -->
```python
# ===== ECON-ARENA SETU AI MODEL v1 =====
"""Financial, compute and environment model for Setu AI (Econ-Arena, Blisspoint'26-27, Sri Venkateswara College).
Run from the repo root:
  python -X utf8 econarena-svc/model/setu_model.py          run, check, write outputs
  python -X utf8 econarena-svc/model/setu_model.py --dry    run and print, write nothing
Every number is a model output from stated assumptions (dictionary A) and case facts (dictionary F). Nothing here is a
signed customer, a quoted price, a measured accuracy or a measured footprint. Scores in the screens are team judgement."""
import sys, json, math, hashlib, io, pathlib
DRY = "--dry" in sys.argv
MEM = None  # the planning-time harness sets this to a dict so that nothing touches the disk
try: HERE = pathlib.Path(__file__).resolve().parent
except NameError: HERE = pathlib.Path("econarena-svc/model").resolve()
M = 24; HY = ["H1", "H2", "H3", "H4"]; HYM = ["M1 to M6", "M7 to M12", "M13 to M18", "M19 to M24"]

# ---------- case facts (packet, October 2026); IDs resolve in case/01-case.md ----------
F = {"budget_cr": 50.0, "runway_lo": 18, "runway_hi": 24, "portal_lo": 65.0, "portal_hi": 92.0, "subsidy": 0.40, "gpus_mar26": 38000,
     "gpus_dec26": 100000, "mission_cr": 10372, "fm_teams": 12, "fof_cr": 10000, "rdi_cr": 100000, "mh_fund_cr": 500, "mh_grant_cr": 1.0,
     "mh_gpus": 2000, "mh_subsidy": 0.20, "mh_firms": 5000, "dpdp_pen_cr": 250, "mum_mw": 846, "mum_sh": 0.46, "pune_mw": 182, "che_mw": 320,
     "che_sh": 0.18, "hyd_new": 0.11, "ncr_mw": 191, "ncr_sh": 0.10, "use_mh": 15.5, "use_tn": 13.2, "use_ka": 12.7, "use_dl": 10.5, "gov_sh": 0.23}

# ---------- assumptions: ID -> (base, bear, bull, unit, basis). Bear is the value least favourable to the plan ----------
A = {
 "A01": (18.0, 14.0, 22.0, "₹ lakh a year", "Land contract: compliance review of every recorded collection call for one mid-sized lender (about ₹1,000 per collector a month for 150 collectors)"),
 "A02": (18.0, 14.0, 22.0, "₹ lakh a year", "Expansion: AI voice reminders, pre-due to 30 days past due, labelled as AI"),
 "A03": (0.50, 0.35, 0.65, "share", "Customers that add voice reminders once six months live"),
 "A04": (4.0, 3.0, 5.0, "₹ lakh", "Paid pilot fee for eight weeks on 500 to 2,000 hours of the lender's own recordings"),
 "A05": (0.60, 0.45, 0.75, "share", "Paid pilots that convert to an annual contract"),
 "A06": (2, 3, 2, "months", "Pilot length before the contract starts"),
 "A07": (1.0, 0.75, 1.25, "x", "Multiplier on the base pilot-start schedule (sales capacity and pipeline)"),
 "A08": (0.005, 0.010, 0.003, "a month", "Logo churn once a customer passes 12 months of tenure"),
 "A09": (1, 2, 1, "months", "Lag between revenue and cash collected (quarterly billing in advance, net 30)"),
 "A10": (4.5, 3.5, 5.5, "lakh minutes a month", "Recorded collection minutes per mid-sized lender: 150 collectors x 115 talk minutes x 26 days"),
 "A11": (60000.0, 40000.0, 80000.0, "minutes a month", "AI voice reminder minutes per voice customer"),
 "A12": (1.0, 1.0, 1.0, "lakh minutes a month", "Recorded minutes reviewed in each pilot month"),
 "A13": (6000.0, 3600.0, 7800.0, "audio minutes per GPU-hour", "Batch review throughput on one L40S at launch: speech recognition, speaker split, rule checks, model scoring"),
 "A14": (2.0, 1.5, 2.2, "x by H4", "Throughput gain by H4 from distilled speech models, int8 quantisation and batching (linear by half-year)"),
 "A15": (16.0, 10.0, 24.0, "calls per GPU", "Concurrent live voice calls one L40S serves (streaming recognition, small language model, speech synthesis)"),
 "A16": (0.50, 0.40, 0.60, "share", "Average utilisation of provisioned voice GPUs across the 8 am to 7 pm calling window"),
 "A17": (67.5, 90.0, 45.0, "₹ per GPU-hour", "L40S on the IndiaAI compute portal (bull: 12-month reserved rate)"),
 "A18": (185.0, 252.0, 111.0, "₹ per GPU-hour", "H100 on an IndiaAI-empanelled provider, reserved (bear: on demand; bull: with the 40% subsidy, shown as upside only)"),
 "A19": (1.6, 2.0, 1.3, "x", "Price multiple for months 1 to 4 on commercial Indian GPU cloud, before portal allocation"),
 "A20": (12000.0, 16000.0, 9000.0, "H100-hours", "Training and evaluation over 24 months: speech-model adaptation for Marathi, Hindi and Hinglish collections audio, small-model fine-tuning, evaluation runs"),
 "A21": (2, 3, 2, "GPUs", "Always-on L40S GPUs for development, staging and regression tests"),
 "A22": (0.45, 0.55, 0.35, "₹ per minute", "Telephony for AI voice reminder minutes (cloud telephony provider)"),
 "A23": (0.30, 0.40, 0.20, "₹ per minute", "Bought speech synthesis API for voice reminders"),
 "A24": (0.02, 0.03, 0.015, "share", "Reviewed minutes escalated to a frontier model hosted in India for a written summary"),
 "A25": (0.60, 0.80, 0.40, "₹ per escalated minute", "Frontier model cost per escalated minute (Claude on Amazon Bedrock, India inference profile)"),
 "A26": (2.5, 3.0, 2.0, "₹ lakh a month", "Platform: storage, CPU, logging, monitoring, backups in India"),
 "A27": (0.15, 0.20, 0.12, "share of CTC", "Benefits, office, laptops and software per employee"),
 "A28": (0.08, 0.10, 0.06, "share", "Salary increase from month 13"),
 "A29": (8.0, 9.0, 7.0, "₹ lakh a month", "Sales travel, lender events, CRM and sales tools"),
 "A30": (0.15, 0.15, 0.15, "share", "Partner commission on first-year contract value of partner-sourced customers"),
 "A31": (0.35, 0.25, 0.45, "share", "New customers sourced by partners (collection agencies, loan-software and dialler vendors)"),
 "A32": (1.0, 1.15, 0.9, "x", "Multiplier on the marketing programme (free call audits, readiness report, industry events, content)"),
 "A33": (2500.0, 3000.0, 2000.0, "₹ per audio hour", "Labelling and two-pass review of consented, de-identified call audio (Marathi, Hindi, Hinglish)"),
 "A34": (6000.0, 6000.0, 6000.0, "audio hours", "Labelled audio hours built over 24 months"),
 "A35": (60.0, 80.0, 45.0, "₹ lakh", "Licensed speech corpora and evaluation sets"),
 "A36": (1.0, 1.2, 0.9, "x", "Multiplier on the compliance programme (DPO, ISO/IEC 27001 and 42001, audits, testing, insurance, legal)"),
 "A37": (0.25, 0.40, 0.15, "share", "Contingency on GPU spend for failed runs, experiments and peak headroom"),
 "A40": (1.275, 1.40, 1.20, "kW per GPU", "H100 power at the server, including its share of CPU, memory and network (an 8-GPU H100 server is rated about 10.2 kW)"),
 "A41": (0.55, 0.65, 0.50, "kW per GPU", "L40S power at the server, including its share of the host"),
 "A42": (0.70, 0.80, 0.60, "share", "Average draw as a share of rated power while a GPU-hour is billed"),
 "A43": (1.50, 1.70, 1.35, "ratio", "Power usage effectiveness of the host data centre"),
 "A44": (0.71, 0.75, 0.68, "kg CO2 per kWh", "Indian grid emission factor (CEA CO2 baseline database)"),
 "A45": (0.70, 0.40, 0.90, "share", "Renewable-matched share of GPU energy reached in H4 (path 0, 0.3, 0.5, 0.7 of the H4 value scaled)"),
 "A46": (1.8, 2.5, 0.8, "litres per kWh of IT energy", "On-site water use effectiveness of the host data centre (evaporative cooling)"),
 "A47": (3.0, 3.5, 2.0, "litres per kWh", "Water consumed off-site to generate grid electricity (thermal-heavy mix)"),
 "A48": (88.0, 90.0, 86.0, "₹ per US$", "Exchange rate used only to compare global list prices"),
 "A49": (30.0, 40.0, 25.0, "₹ per audio hour", "Bought speech-to-text API price, used only in the provider comparison"),
}
def av(i, s="base"): return A[i][{"base": 0, "bear": 1, "bull": 2}[s]]

# ---------- team plan: role -> (CTC ₹ lakh a year, heads in H1, H2, H3, H4, budget line) ----------
TEAM = [
 ("Founders and leadership", 48.0, [3, 3, 3, 3], "People"),
 ("Speech and machine-learning engineers", 42.0, [5, 8, 10, 11], "People"),
 ("Platform, security and backend engineers", 30.0, [4, 6, 7, 8], "People"),
 ("Compliance rules and evaluation analysts", 18.0, [2, 3, 4, 4], "People"),
 ("Forward-deployed solution engineers", 24.0, [1, 3, 5, 7], "People"),
 ("Customer success managers", 16.0, [0, 1, 3, 4], "People"),
 ("Finance, people and administration", 18.0, [1, 2, 2, 3], "People"),
 ("Account executives (lenders)", 30.0, [1, 3, 4, 5], "Sales"),
 ("Sales development and partner managers", 14.0, [1, 2, 4, 5], "Sales"),
 ("Product marketing", 20.0, [1, 2, 2, 3], "Marketing"),
 ("Data operations lead and linguists", 12.0, [2, 3, 4, 4], "Data"),
 ("Data protection officer, counsel and security compliance", 32.0, [1, 1, 2, 2], "Compliance"),
]
PILOTS = [0, 0, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]          # base pilot starts, months 1 to 24
MKT = [8.0, 12.0, 14.0, 14.0]                                                                # ₹ lakh a month by half-year
COMP = [4.0, 3.5, 3.5, 3.0]                                                                  # ₹ lakh a month by half-year, before people
CERT = {3: 18.0, 9: 22.0, 15: 10.0, 21: 10.0}                                                # one-off: ISO/IEC 27001, ISO/IEC 42001, surveillance audits
TRAIN_PH = [0.30, 0.30, 0.25, 0.15]                                                          # share of training hours by half-year
RE_PATH = [0.0, 0.3 / 0.7, 0.5 / 0.7, 1.0]                                                   # renewable share path, scaled to A45 in H4
LINES = ["People", "Compute", "Sales", "Marketing", "Data", "Compliance"]

MILE = {"cust": 15, "arr": 3.0, "gm": 0.70}                                                  # month-18 milestone: paying lenders, ARR ₹ Cr, gross margin
def hidx(m): return (m - 1) // 6
def run(s="base", over=None, gate=False):
    """gate=True applies the month-18 rule: if the milestone is missed, hold H4 heads at H3 levels and cut marketing and sales travel."""
    a = {k: av(k, s) for k in A}; a.update(over or {}); hold = False
    if gate:
        r0, _ = run(s, over, False); hold = r0[17]["live"] < MILE["cust"] or r0[17]["arr"] < MILE["arr"]
    starts = [p * a["A07"] for p in PILOTS]; conv = [0.0] * (M + 1); lag = int(round(a["A06"]))
    for m in range(1, M + 1):
        k = m - lag
        if k >= 1: conv[m] = starts[k - 1] * a["A05"]
    rows = []; cash = F["budget_cr"]; rev_hist = []; cohorts = []
    for m in range(1, M + 1):
        h = hidx(m); cohorts.append([m, conv[m]])
        live = 0.0; land = 0.0; voice_c = 0.0
        for c in cohorts:
            ten = m - c[0]
            surv = c[1] * (1 - a["A08"]) ** max(0, ten - 12)
            if ten >= 0: live += surv; land += surv
            if ten >= 6: voice_c += surv * a["A03"]
        running = sum(starts[max(0, m - lag): m])                       # pilots running this month
        rev = (land * a["A01"] + voice_c * a["A02"]) / 12 / 100 + running * a["A04"] / lag / 100   # ₹ Cr
        rev_hist.append(rev); lagm = int(round(a["A09"])); coll = rev_hist[m - 1 - lagm] if m - 1 - lagm >= 0 else 0.0
        # volumes (minutes a month)
        ramp = sum(c[1] * (0.5 if m - c[0] < 2 else 1.0) * (1 - a["A08"]) ** max(0, m - c[0] - 12) for c in cohorts if m - c[0] >= 0)
        qa_min = ramp * a["A10"] * 1e5 + running * a["A12"] * 1e5
        v_min = voice_c * a["A11"]
        thr = a["A13"] * (1 + (a["A14"] - 1) * h / 3)
        g_batch = qa_min / thr; g_voice = v_min / (a["A15"] * 60 * a["A16"]); g_dev = a["A21"] * 730.0
        g_h100 = a["A20"] * TRAIN_PH[h] / 6
        mult = a["A19"] if m <= 4 else 1.0
        comp_l = ((g_batch + g_voice + g_dev) * a["A17"] + g_h100 * a["A18"]) * mult * (1 + a["A37"]) / 1e5 + v_min * (a["A22"] + a["A23"]) / 1e5 \
                 + qa_min * a["A24"] * a["A25"] / 1e5 + a["A26"]                                       # ₹ lakh
        cogs = (g_batch + g_voice) * a["A17"] * mult * (1 + a["A37"]) / 1e7 + v_min * (a["A22"] + a["A23"]) / 1e7 \
               + qa_min * a["A24"] * a["A25"] / 1e7 + 0.5 * a["A26"] / 100                                   # ₹ Cr, cost of revenue
        sal = 1 + (a["A28"] if m >= 13 else 0.0); cut = hold and h == 3; hh = 2 if cut else h
        team = {l: 0.0 for l in LINES}; heads = 0
        for role, ctc, hc, line in TEAM:
            team[line] += hc[hh] * ctc * sal * (1 + a["A27"]) / 12; heads += hc[hh]
        new_logos = conv[m]
        sales_l = team["Sales"] + a["A29"] * (0.75 if cut else 1.0) + new_logos * a["A31"] * a["A30"] * a["A01"]
        mkt_l = team["Marketing"] + MKT[h] * a["A32"] * (0.6 if cut else 1.0)
        data_l = team["Data"] + a["A33"] * a["A34"] / M / 1e5 + (a["A35"] if m == 3 else 0.0)
        comp_line = team["Compliance"] + (COMP[h] + CERT.get(m, 0.0)) * a["A36"]
        lines = {"People": team["People"] / 100, "Compute": comp_l / 100, "Sales": sales_l / 100, "Marketing": mkt_l / 100,
                 "Data": data_l / 100, "Compliance": comp_line / 100}
        spend = sum(lines.values()); cash = cash + coll - spend
        energy_it = (g_h100 * a["A40"] + (g_batch + g_voice + g_dev) * a["A41"]) * a["A42"]       # kWh at the IT load
        energy = energy_it * a["A43"]; re = a["A45"] * RE_PATH[h]
        rows.append(dict(m=m, h=h, starts=starts[m - 1], conv=conv[m], live=live, voice=voice_c, running=running, rev=rev, coll=coll, cogs=cogs,
                         lines=lines, spend=spend, cash=cash, heads=heads, qa_min=qa_min, v_min=v_min, g_batch=g_batch, g_voice=g_voice,
                         g_dev=g_dev, g_h100=g_h100, thr=thr, e_it=energy_it, e=energy, re=re, co2_loc=energy * a["A44"] / 1000,
                         co2_mkt=energy * a["A44"] * (1 - re) / 1000, w_on=energy_it * a["A46"], w_off=energy * a["A47"] * (1 - re),
                         arr=(land * a["A01"] + voice_c * a["A02"]) / 100))
    return rows, a

def summary(rows, a):
    hy = []
    for h in range(4):
        r = [x for x in rows if x["h"] == h]
        hy.append(dict(cust=r[-1]["live"], pil=sum(x["starts"] for x in r), rev=sum(x["rev"] for x in r), coll=sum(x["coll"] for x in r),
                       spend=sum(x["spend"] for x in r), lines={l: sum(x["lines"][l] for x in r) for l in LINES}, cash=r[-1]["cash"],
                       arr=r[-1]["arr"], heads=r[-1]["heads"], qa=sum(x["qa_min"] for x in r), vm=sum(x["v_min"] for x in r),
                       gb=sum(x["g_batch"] for x in r), gv=sum(x["g_voice"] for x in r), gd=sum(x["g_dev"] for x in r), gh=sum(x["g_h100"] for x in r),
                       e=sum(x["e"] for x in r), e_it=sum(x["e_it"] for x in r), co2l=sum(x["co2_loc"] for x in r), co2m=sum(x["co2_mkt"] for x in r),
                       won=sum(x["w_on"] for x in r), woff=sum(x["w_off"] for x in r), re=r[-1]["re"], thr=r[-1]["thr"]))
    last = rows[-6:]; net = sum(x["spend"] - x["coll"] for x in last) / 6; gross = sum(x["spend"] for x in last) / 6
    cash24 = rows[-1]["cash"]
    return dict(hy=hy, cash24=cash24, net_burn=net, gross_burn=gross, runway_net=cash24 / net if net > 0 else 99.0, runway_gross=cash24 / gross,
                min_cash=min(x["cash"] for x in rows), cust24=rows[-1]["live"], arr24=rows[-1]["arr"], arr18=rows[17]["arr"], cust18=rows[17]["live"],
                spend24=sum(x["spend"] for x in rows), rev24=sum(x["rev"] for x in rows), coll24=sum(x["coll"] for x in rows),
                lines={l: sum(x["lines"][l] for x in rows) for l in LINES}, logos=sum(x["conv"] for x in rows), pilots=sum(x["starts"] for x in rows),
                gm_h4=gm(rows, a, 3), gm_h3=gm(rows, a, 2))
def gm(rows, a, h):
    """gross margin in a half-year: revenue less cost of revenue (inference GPUs, telephony, bought speech, escalations, half the
    platform) and customer success, over revenue. Training and development GPUs are research cost, not cost of revenue."""
    r = [x for x in rows if x["h"] == h]; rev = sum(x["rev"] for x in r); comp = sum(x["cogs"] for x in r)
    cs = [t for t in TEAM if t[0].startswith("Customer success")][0]; sal = 1 + (a["A28"] if h >= 2 else 0.0)
    csc = cs[2][h] * cs[1] * sal * (1 + a["A27"]) / 12 * 6 / 100
    return (rev - comp - csc) / rev if rev > 0 else 0.0

# ---------- formatting (Indian digit grouping; no dashes; minus sign is U+2212) ----------
def ig(v):
    neg = v < 0; s = str(int(round(abs(v))))
    if len(s) > 3:
        last = s[-3:]; rest = s[:-3]; parts = []
        while len(rest) > 2: parts.insert(0, rest[-2:]); rest = rest[:-2]
        if rest: parts.insert(0, rest)
        s = ",".join(parts) + "," + last
    return ("−" if neg else "") + s
def cr(v, d=1): return ("−" if v < 0 else "") + "₹" + ("%." + str(d) + "f") % abs(v) + " Cr"
def lk(v, d=0): return "₹" + ("%." + str(d) + "f") % v + " lakh"
def pc(v, d=0): return ("%." + str(d) + "f") % (100 * v) + "%"

# ---------- runs ----------
RB, AB = run("base"); SB = summary(RB, AB)
RBE, ABE = run("bear"); SBE = summary(RBE, ABE)
RBU, ABU = run("bull"); SBU = summary(RBU, ABU)
RBG, ABG = run("bear", gate=True); SBG = summary(RBG, ABG)

# ---------- budget: the ₹50 crore split; reserve is what the 24-month plan does not spend ----------
ALLOC = [(l, round(SB["lines"][l], 1)) for l in LINES]
ALLOC.append(("Reserve", round(F["budget_cr"] - sum(v for _, v in ALLOC), 1)))
ALLOC_SUM = round(sum(v for _, v in ALLOC), 1)

# ---------- screens (team judgement 1 to 5, evidence in research sections 6 to 9) ----------
IND_C = [("AI maturity", 0.25), ("Regulatory pull to 2027", 0.20), ("Budget per buyer", 0.20), ("Data access", 0.10), ("Room versus rivals", 0.15), ("Sales-cycle speed", 0.10)]
IND = [("Banking and financial services (lenders)", [5, 5, 4, 2, 3, 3]), ("Media and entertainment", [4, 4, 2, 3, 3, 4]),
       ("Telecom", [4, 3, 4, 3, 2, 2]), ("Retail", [4, 2, 3, 3, 3, 4]), ("IT services and GCCs", [4, 2, 4, 4, 1, 3]),
       ("Manufacturing", [4, 1, 3, 2, 4, 2]), ("Healthcare", [1, 3, 2, 1, 4, 1])]
REG_C = [("Data-centre capacity", 0.25), ("AI use signal", 0.20), ("Lender head offices", 0.25), ("Room versus AI vendors", 0.15), ("State AI policy", 0.15)]
REG = [("West", [5, 4, 5, 3, 5]), ("South", [3, 5, 3, 1, 3]), ("North", [2, 3, 3, 3, 2]), ("East", [1, 1, 2, 4, 2])]
OPT_C = [("Fits ₹50 Cr", 0.25), ("Revenue by month 24", 0.25), ("Defensible", 0.20), ("Uses state support", 0.10), ("Light on compute", 0.10), ("Builds trust", 0.10)]
OPT = [("Train an Indic foundation model", [1, 1, 2, 3, 1, 3]), ("Sell a general Indic language API", [2, 2, 1, 3, 2, 2]),
       ("Voice agents for every industry", [3, 3, 1, 2, 3, 2]), ("AI services and consulting", [4, 4, 1, 1, 5, 2]),
       ("Compliance-grade collections AI for lenders", [5, 4, 4, 4, 4, 5])]
def wsc(sc, cr_): return round(sum(s * w for s, (_, w) in zip(sc, cr_)), 2)
IND_S = [(n, sc, wsc(sc, IND_C)) for n, sc in IND]; REG_S = [(n, sc, wsc(sc, REG_C)) for n, sc in REG]; OPT_S = [(n, sc, wsc(sc, OPT_C)) for n, sc in OPT]
PAIR = [[round(i[2] * r[2] / 5, 2) for r in REG_S] for i in IND_S]

# ---------- competitors: Yes, Part, No (team reading of public material, October 2026; Lane E verifies every cell) ----------
CAPS = ["Indic speech", "Collections focus", "Call compliance review", "Evidence mapped to RBI, DPDP, IT Rules", "Hosted in India", "Mid-market price", "Mumbai-Pune team"]
RIVALS = [("Sarvam AI", ["Yes", "Part", "No", "No", "Yes", "Yes", "Part"]), ("Gnani.ai", ["Yes", "Yes", "Part", "No", "Yes", "Part", "Part"]),
          ("Krutrim", ["Part", "No", "No", "No", "Yes", "Yes", "No"]), ("BharatGen", ["Part", "No", "No", "No", "Yes", "No", "Part"]),
          ("Soket AI Labs", ["Part", "No", "No", "No", "Yes", "No", "No"]), ("Fractal", ["Part", "Part", "Part", "Part", "Yes", "No", "Yes"]),
          ("Tech Mahindra", ["Part", "Part", "Part", "Part", "Yes", "No", "Yes"]), ("Yellow.ai", ["Part", "Part", "No", "No", "Part", "Part", "No"]),
          ("Haptik", ["Part", "Part", "No", "No", "Yes", "Part", "Yes"]), ("Uniphore", ["Part", "Part", "Yes", "Part", "Part", "No", "No"]),
          ("Convin", ["Part", "Yes", "Yes", "Part", "Yes", "Yes", "No"]), ("Credgenics", ["Part", "Yes", "Part", "Part", "Yes", "Part", "Part"]),
          ("Large IT services", ["Part", "Part", "Part", "Part", "Yes", "No", "Yes"]), ("Global AI labs", ["Part", "No", "No", "No", "Part", "No", "No"]),
          ("Setu AI, month 24 target", ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"])]
def ynp(v): return {"Yes": 2, "Part": 1, "No": 0}[v]
RIV_S = [(n, c, sum(ynp(v) for v in c)) for n, c in RIVALS]

# ---------- moats and weak advantages (months are team estimates; research section 16) ----------
MOATS = [("Labelled collections-call corpus, Marathi, Hindi, Hinglish", 6, 18, "6,000 labelled hours by month 24 under lender contracts; a rival needs the same lender access"),
         ("Evidence history inside each lender's audit file", 4, 15, "12 months of call evidence and dialler and loan-system links make switching costly"),
         ("Partner channel of collection agencies and loan-software vendors", 3, 12, "agencies resell; Maharashtra's 20% MSME subsidy lowers their price")]
WEAK = [("Indic speech accuracy", 6, "Sarvam, Gnani, open models improve"), ("Voice reminder price", 3, "Sarvam lists ₹3.00 to ₹3.50 a minute"),
        ("Hosting in India", 3, "Claude runs in India on Bedrock"), ("Rule checklist", 6, "Convin already flags call breaches"),
        ("Dashboards", 2, "any rival with engineers")]

# ---------- market: bottom-up by counted lenders (Lane D verifies counts; minutes a month per lender in lakh) ----------
# (segment, lenders in India, share headquartered in the West, recorded minutes a month per lender in lakh, share of minutes we can reach, in SAM)
MKT_SEG = [("Middle-layer NBFCs and HFCs with call teams", 400, 0.35, 3.0, 1.0, True), ("Small finance banks", 11, 0.25, 8.0, 1.0, True),
           ("Urban co-operative banks with call teams", 300, 0.45, 0.8, 1.0, True),
           ("Agency-handled minutes of banks and upper-layer NBFCs", 50, 0.40, 45.0, 0.5, True),
           ("In-house minutes of banks and upper-layer NBFCs", 50, 0.40, 45.0, 0.5, False)]
PRICE_MIN = av("A01") * 1e5 / (av("A10") * 1e5 * 12)                                          # ₹ per reviewed minute implied by the land contract
VOICE_MIN = av("A02") * 1e5 / (av("A11") * 12)                                                # ₹ per voice minute implied by the voice contract
VOICE_SH = 0.15                                                                                # share of minutes that AI voice reminders can carry
VAL_MIN = PRICE_MIN + VOICE_SH * VOICE_MIN                                                     # ₹ a minute: review every minute, voice on 15% of them
def seg_value(cnt, mins, reach): return cnt * mins * reach * 1e5 * 12 * VAL_MIN / 1e7          # ₹ Cr a year
TAM = sum(seg_value(c, mi, rch) for _, c, _, mi, rch, _ in MKT_SEG)
SAM = sum(seg_value(c * w, mi, rch) for _, c, w, mi, rch, s in MKT_SEG if s)
SAM_LOGOS = sum(c * w for n, c, w, mi, rch, s in MKT_SEG if s and not n.startswith("Agency"))
SOM = SB["arr24"]

# ---------- the model-first alternative (illustrative assumptions B01 to B09, research section 13) ----------
B = {"B01": (25, "researchers at ₹55 lakh"), "B02": (15, "engineers at ₹30 lakh"), "B03": (8e9, "parameters"), "B04": (1.5e12, "training tokens"),
     "B05": (989e12, "H100 dense BF16 FLOP/s"), "B06": (0.38, "model FLOP utilisation"), "B07": (2, "full training runs plus 30% ablations"),
     "B08": (6.0, "₹ Cr for Indic text and speech data"), "B09": (5.0, "₹ lakh a month of API revenue from month 13, growing 15% a month")}
def model_first():
    flops = 6 * B["B03"][0] * B["B04"][0]; h_run = flops / (B["B05"][0] * B["B06"][0]) / 3600
    h_tot = h_run * B["B07"][0] * 1.3 + 20000; cash = F["budget_cr"]; path = []; out = None
    ppl = (B["B01"][0] * 55 + B["B02"][0] * 30) * (1 + av("A27")) / 12 / 100
    for m in range(1, M + 13):
        spend = ppl * (1 + (av("A28") if m >= 13 else 0)) + (h_tot * av("A18") / 1e7 / 18 if m <= 18 else 0.02) + (B["B08"][0] / 12 if m <= 12 else 0) \
                + (0.30 if m >= 10 else 0.05) + 0.06
        rev = B["B09"][0] * 1.15 ** (m - 13) / 100 if m >= 13 else 0.0
        cash += rev - spend; path.append(cash)
        if out is None and cash <= 0: out = m
    return dict(h_run=h_run, h_tot=h_tot, path=path, out=out, cash24=path[23], arr24=B["B09"][0] * 1.15 ** 11 * 12 / 100)
MF = model_first()

# ---------- provider choice: the same 24-month workload priced on five routes (research section 18) ----------
def workload(rows): return dict(h100=sum(x["g_h100"] for x in rows), l40=sum(x["g_batch"] + x["g_voice"] + x["g_dev"] for x in rows),
                                qa=sum(x["qa_min"] for x in rows), vm=sum(x["v_min"] for x in rows))
WL = workload(RB)
PROV = [("IndiaAI portal, Mumbai (ours)", av("A18"), av("A17"), 6, 1.50, 0.20, "Yes"),
        ("Indian GPU cloud, on demand", av("A18") * av("A19"), av("A17") * av("A19"), 1, 1.50, 0.20, "Yes"),
        ("Hyperscaler, Mumbai, list", 4.5 * av("A48"), 1.8 * av("A48"), 1, 1.20, 0.60, "Yes"),
        ("Speech and model APIs only", None, None, 0, 1.30, 0.40, "Part"),
        ("Own GPUs (not allowed)", None, None, 26, 1.50, 0.20, "Yes")]
def prov_row(p):
    name, ph, pl, wk, pue, re, res = p
    if name.startswith("Speech"):
        cost = (WL["qa"] / 60 * av("A49") + WL["vm"] * 3.25) / 1e7
    elif ph is None: cost = None
    else: cost = (WL["h100"] * ph + WL["l40"] * pl) * (1 + av("A37")) / 1e7
    e = (WL["h100"] * av("A40") + WL["l40"] * av("A41")) * av("A42") * pue
    return dict(name=name, cost=cost, weeks=wk, pue=pue, re=re, res=res, co2=e * av("A44") * (1 - re) / 1000)
PROV_S = [prov_row(p) for p in PROV]

# ---------- tornado: runway at month 24 (months), one input at a time to its bear and bull value ----------
TOR_K = ["A05", "A07", "A01", "A03", "A02", "A09", "A27", "A13", "A17", "A20"]
def runway_of(s="base", over=None): r, a = run(s, over); return summary(r, a)["runway_net"]
TOR = sorted([(k, A[k][4], runway_of("base", {k: av(k, "bear")}), runway_of("base", {k: av(k, "bull")})) for k in TOR_K],
             key=lambda t: -abs(t[3] - t[2]))

# ---------- environment: 24-month totals and intensity ----------
ENV = dict(e=sum(x["e"] for x in RB), e_it=sum(x["e_it"] for x in RB), co2l=sum(x["co2_loc"] for x in RB), co2m=sum(x["co2_mkt"] for x in RB),
           won=sum(x["w_on"] for x in RB), woff=sum(x["w_off"] for x in RB))
def wh_per_k(h):
    r = [x for x in RB if x["h"] == h]; qa = sum(x["qa_min"] for x in r)
    e = sum(x["g_batch"] for x in r) * av("A41") * av("A42") * av("A43")
    return 1000 * e / qa * 1000 if qa else 0.0                                                  # Wh per 1,000 reviewed minutes
INT = [wh_per_k(h) for h in range(4)]
TARGETS = [("Wh per 1,000 minutes", "%.0f Wh" % INT[0], "%.0f Wh" % INT[3], "distil, quantise, batch"),
           ("Renewable-matched share", "0%", pc(av("A45")), "renewable contracts"),
           ("PUE and water disclosed", "PUE 1.50", "1.50 at most", "publishing hosts only")]

# ---------- government support: base case uses none of the grants; upside only ----------
GOV = [("IndiaAI compute portal (needs DPIIT recognition)", "Base: portal rates of ₹65 to ₹92 a GPU-hour", "used"),
       ("IndiaAI extra subsidy of up to 40%", cr(0.40 * (WL["h100"] * av("A18") + WL["l40"] * av("A17")) / 1e7, 2) + " of GPU spend", "upside only"),
       ("Maharashtra incubator grant", "up to ₹1 Cr", "upside only"),
       ("Maharashtra 20% AI subsidy for 5,000 MSMEs", "cuts price for collection agencies, our partner channel", "channel lever"),
       ("Startup India Fund of Funds 2.0", "Series A via SEBI-registered funds after month 18", "next round"),
       ("RDI scheme, ₹1 lakh Cr", "suited to later-stage deep tech; not before month 24", "not used"),
       ("IndiaAI foundation-model support", "12 teams already chosen; we do not train a base model", "not pursued")]

# ---------- checks ----------
CHECKS = []
def chk(name, ok): CHECKS.append((name, bool(ok))); print(("PASS " if ok else "FAIL ") + name)
chk("budget split sums to ₹50.0 Cr", abs(ALLOC_SUM - 50.0) < 1e-9)
chk("reserve at least 15% of the budget", ALLOC[-1][1] >= 7.5)
chk("cash stays positive to month 24 in base, bear and bull", min(SB["min_cash"], SBE["min_cash"], SBU["min_cash"]) > 0)
chk("half-year spend adds to the 24-month total", abs(sum(h["spend"] for h in SB["hy"]) - SB["spend24"]) < 1e-9)
chk("line totals add to total spend", abs(sum(SB["lines"].values()) - SB["spend24"]) < 1e-9)
chk("base clears the month-18 milestone", SB["cust18"] >= MILE["cust"] and SB["arr18"] >= MILE["arr"] and SB["gm_h3"] >= MILE["gm"])
chk("base runway at month 24 at least 6 months", SB["runway_net"] >= 6)
chk("bear with the month-18 cuts keeps at least 6 months of runway", SBG["runway_net"] >= 6)
chk("industry screen picks lenders and region screen picks West", max(IND_S, key=lambda t: t[2])[0].startswith("Banking") and max(REG_S, key=lambda t: t[2])[0] == "West")
chk("option screen picks compliance-grade collections AI", max(OPT_S, key=lambda t: t[2])[0].startswith("Compliance"))
chk("energy by type adds to total", abs(ENV["e"] - sum(h["e"] for h in SB["hy"])) < 1e-6)
chk("model-first route runs out of cash before month 24", MF["out"] is not None and MF["out"] <= 24)
CHECKS_OK = sum(1 for _, ok in CHECKS if ok)

# ---------- unit economics (base) ----------
SM24 = SB["lines"]["Sales"] + SB["lines"]["Marketing"]; CAC = SM24 / SB["logos"]                # ₹ Cr per new customer
ACV24 = SB["arr24"] / SB["cust24"]; CHURN_Y = 1 - (1 - av("A08")) ** 12; LIFE = min(5.0, 1 / CHURN_Y)
PAYBACK = CAC / (ACV24 / 12 * SB["gm_h4"]); LTV = ACV24 * SB["gm_h4"] * LIFE; LTVCAC = LTV / CAC
GPU_RS = (WL["h100"] * av("A18") + WL["l40"] * av("A17")) * (1 + av("A37")) / 1e7              # ₹ Cr of GPU rental in 24 months
H100_EQ = F["budget_cr"] * 1e7 / av("A18")                                                     # H100-hours the whole budget would rent

# ---------- outputs ----------
OUT = dict(alloc=ALLOC, hy=[{k: (v if not isinstance(v, float) else round(v, 4)) for k, v in h.items() if k != "lines"} | {"lines": {l: round(v, 4) for l, v in h["lines"].items()}} for h in SB["hy"]],
           base={k: round(v, 4) for k, v in SB.items() if isinstance(v, float)}, bear={k: round(v, 4) for k, v in SBE.items() if isinstance(v, float)},
           bull={k: round(v, 4) for k, v in SBU.items() if isinstance(v, float)}, bear_gate={k: round(v, 4) for k, v in SBG.items() if isinstance(v, float)},
           ind=IND_S, reg=REG_S, opt=OPT_S, pair=PAIR, tam=round(TAM, 2), sam=round(SAM, 2), som=round(SOM, 2),
           mf={k: (round(v, 2) if isinstance(v, float) else v) for k, v in MF.items() if k != "path"}, env={k: round(v, 2) for k, v in ENV.items()},
           intensity=[round(v, 1) for v in INT], tornado=[(k, round(lo, 2), round(hi, 2)) for k, _, lo, hi in TOR],
           prov=[{k: (round(v, 2) if isinstance(v, float) else v) for k, v in p.items()} for p in PROV_S], checks=CHECKS_OK)
HASH = hashlib.sha1(json.dumps(OUT, sort_keys=True, ensure_ascii=False).encode()).hexdigest()[:10]
print("CHECKS %d/%d HASH %s" % (CHECKS_OK, len(CHECKS), HASH))
print("FINDINGS", cr(SB["cash24"]), "%.1f months" % SB["runway_net"], ig(SB["cust24"]), cr(SB["arr24"]), cr(SB["spend24"]), "%.1f t" % ENV["co2l"],
      "%.1f MWh" % (ENV["e"] / 1000), "month %s" % MF["out"])

# ---------- tables for the research document (Appendix B) ----------
TOR_LBL = {"A05": "Pilot conversion", "A07": "Pilot starts", "A01": "Land contract value", "A03": "Voice attach rate", "A02": "Voice contract value",
           "A09": "Cash collection lag", "A27": "Overhead on salaries", "A13": "Review throughput", "A17": "L40S price", "A20": "Training GPU-hours"}
WHAT = {"People": "engineering, delivery, customer success and administration", "Compute": "GPU rent, telephony, bought speech, escalations, platform",
        "Sales": "account executives, partner managers, travel, partner commission", "Marketing": "free call audits, readiness report, events, content",
        "Data": "labelling 6,000 audio hours, licensed corpora, data operations", "Compliance": "DPO, counsel, ISO/IEC 27001 and 42001, audits, insurance",
        "Reserve": "untouched in the plan: incident, delayed Series A, bear case"}
def fmt(v):
    if isinstance(v, float): s = ("%.2f" % v).rstrip("0").rstrip(".") if abs(v) < 1000 else ig(v); return s.replace("-", "−")
    return str(v)
TB = []
def table(tid, title, heads, rows, note=""):
    TB.append("## %s. %s\n\n| %s |\n|%s|\n%s\n%s" % (tid, title, " | ".join(heads), "|".join(["---"] * len(heads)),
              "\n".join("| " + " | ".join(fmt(c) for c in r) + " |" for r in rows), ("\n" + note + "\n") if note else ""))
table("T1", "Assumptions register (bear is the value least favourable to the plan)", ["ID", "Assumption", "Base", "Bear", "Bull", "Unit"],
      [[k, v[4], v[0], v[1], v[2], v[3]] for k, v in A.items()])
table("T2", "Case facts used by the model", ["Key", "Value"], [[k, v] for k, v in F.items()])
table("T3", "Industry screen, weighted (team judgement, 1 to 5)", ["Industry"] + ["%s (%.2f)" % c for c in IND_C] + ["Score"], [[n] + s + [w] for n, s, w in IND_S])
table("T4", "Region screen, weighted (team judgement, 1 to 5; evidence from the case table)", ["Region"] + ["%s (%.2f)" % c for c in REG_C] + ["Score"], [[n] + s + [w] for n, s, w in REG_S])
table("T5", "Industry and region pairs (industry score x region score / 5)", ["Industry"] + [r[0] for r in REG_S], [[IND_S[i][0]] + PAIR[i] for i in range(len(IND_S))])
table("T6", "Five strategic routes under one test (team judgement, 1 to 5)", ["Route"] + ["%s (%.2f)" % c for c in OPT_C] + ["Score"], [[n] + s + [w] for n, s, w in OPT_S])
table("T7", "Month by month, base case (₹ Cr; customers are expected values)", ["Month", "Pilots started", "New customers", "Live customers", "Revenue", "Cash in", "Spend", "Cash at end", "Heads"],
      [[x["m"], x["starts"], round(x["conv"], 2), round(x["live"], 2), round(x["rev"], 3), round(x["coll"], 3), round(x["spend"], 3), round(x["cash"], 2), x["heads"]] for x in RB])
table("T8", "Financial sketch by half-year, base case (₹ Cr)", ["Item"] + HYM + ["24 months"],
      [["Paying customers at end"] + [round(h["cust"], 1) for h in SB["hy"]] + [round(SB["cust24"], 1)],
       ["Pilots started"] + [h["pil"] for h in SB["hy"]] + [SB["pilots"]], ["Revenue"] + [round(h["rev"], 2) for h in SB["hy"]] + [round(SB["rev24"], 2)],
       ["Cash collected"] + [round(h["coll"], 2) for h in SB["hy"]] + [round(SB["coll24"], 2)]] +
      [[l] + [round(h["lines"][l], 2) for h in SB["hy"]] + [round(SB["lines"][l], 2)] for l in LINES] +
      [["Total spend"] + [round(h["spend"], 2) for h in SB["hy"]] + [round(SB["spend24"], 2)], ["Cash at end"] + [round(h["cash"], 2) for h in SB["hy"]] + [round(SB["cash24"], 2)],
       ["ARR at end"] + [round(h["arr"], 2) for h in SB["hy"]] + [round(SB["arr24"], 2)], ["Heads at end"] + [h["heads"] for h in SB["hy"]] + [SB["hy"][3]["heads"]]],
      "Runway at month 24 = cash at month 24 / average net burn of months 19 to 24 = %.2f / %.3f = %.1f months (gross: %.1f months)." % (SB["cash24"], SB["net_burn"], SB["runway_net"], SB["runway_gross"]))
table("T9", "The ₹50 crore split (24-month plan; reserve is not spent)", ["Line", "₹ Cr", "Share", "What it buys"], [[l, v, pc(v / 50), WHAT[l]] for l, v in ALLOC] + [["Total", ALLOC_SUM, "100%", ""]])
table("T10", "Team plan (heads at the end of each half-year; CTC ₹ lakh a year)", ["Role", "CTC", "H1", "H2", "H3", "H4", "Budget line"], [[r, c, *h, l] for r, c, h, l in TEAM])
table("T11", "Unit economics, base case", ["Measure", "Value", "How"], [["Average contract value at month 24", lk(ACV24 * 100, 1), "ARR / customers"],
      ["Customer acquisition cost", lk(CAC * 100, 1), "sales and marketing over 24 months / new customers"], ["Gross margin, H4", pc(SB["gm_h4"]), "revenue less cost of revenue and customer success"],
      ["Payback", "%.1f months" % PAYBACK, "CAC / (monthly contract value x gross margin)"], ["Lifetime value to CAC", "%.1fx" % LTVCAC, "ACV x margin x min(5, 1 / annual churn), over CAC"]])
table("T12", "Compute workload by half-year, base case", ["Item"] + HYM, [["Reviewed minutes (lakh)"] + [round(h["qa"] / 1e5, 1) for h in SB["hy"]], ["Voice minutes (lakh)"] + [round(h["vm"] / 1e5, 2) for h in SB["hy"]],
      ["H100-hours (training)"] + [round(h["gh"]) for h in SB["hy"]], ["L40S-hours (batch review)"] + [round(h["gb"]) for h in SB["hy"]], ["L40S-hours (live voice)"] + [round(h["gv"]) for h in SB["hy"]],
      ["L40S-hours (development)"] + [round(h["gd"]) for h in SB["hy"]], ["Review throughput, minutes per GPU-hour"] + [round(h["thr"]) for h in SB["hy"]]])
table("T13", "The same 24-month workload on five compute routes", ["Route", "₹ Cr", "Weeks to start", "PUE", "Renewable share", "Data in India", "t CO2e"],
      [[p["name"], "n/a" if p["cost"] is None else round(p["cost"], 2), p["weeks"], p["pue"], pc(p["re"]), p["res"], round(p["co2"], 1)] for p in PROV_S])
table("T14", "Energy, carbon and water by half-year, base case", ["Item"] + HYM + ["24 months"],
      [["Facility energy, MWh"] + [round(h["e"] / 1000, 1) for h in SB["hy"]] + [round(ENV["e"] / 1000, 1)],
       ["Carbon, location-based, t CO2e"] + [round(h["co2l"], 1) for h in SB["hy"]] + [round(ENV["co2l"], 1)],
       ["Renewable-matched share at end"] + [pc(h["re"]) for h in SB["hy"]] + [""],
       ["Carbon, market-based, t CO2e"] + [round(h["co2m"], 1) for h in SB["hy"]] + [round(ENV["co2m"], 1)],
       ["Water on site, kL"] + [round(h["won"] / 1000, 1) for h in SB["hy"]] + [round(ENV["won"] / 1000, 1)],
       ["Water off site, kL"] + [round(h["woff"] / 1000, 1) for h in SB["hy"]] + [round(ENV["woff"] / 1000, 1)],
       ["Wh per 1,000 reviewed minutes (batch)"] + [round(v) for v in INT] + [""]])
table("T15", "Three measurable environmental targets", ["Target", "Month 6", "Month 24", "How"], [list(t) for t in TARGETS])
SC = [("Base", SB), ("Bear", SBE), ("Bear with the month-18 cuts", SBG), ("Bull", SBU)]
table("T16", "Scenarios (every assumption at its base, bear or bull value)", ["Measure"] + [n for n, _ in SC],
      [["Paying lenders at month 24"] + [round(s["cust24"], 1) for _, s in SC], ["ARR at month 24, ₹ Cr"] + [round(s["arr24"], 2) for _, s in SC],
       ["Spend over 24 months, ₹ Cr"] + [round(s["spend24"], 2) for _, s in SC], ["Cash at month 24, ₹ Cr"] + [round(s["cash24"], 2) for _, s in SC],
       ["Runway at month 24, months"] + [round(s["runway_net"], 1) for _, s in SC], ["Lowest cash, ₹ Cr"] + [round(s["min_cash"], 2) for _, s in SC]])
table("T17", "Runway at month 24: one input at a time to its bear and bull value (base %.1f months)" % SB["runway_net"], ["ID", "Input", "Bear", "Bull"],
      [[k, TOR_LBL[k], round(lo, 1), round(hi, 1)] for k, _, lo, hi in TOR])
table("T18", "Same ₹50 crore: training a base model against our plan (illustrative B01 to B09)", ["Measure", "Model-first", "Our plan"],
      [["H100-hours to train", ig(MF["h_tot"]), ig(WL["h100"])], ["Cash at month 24, ₹ Cr", round(MF["cash24"], 2), round(SB["cash24"], 2)],
       ["Month cash runs out", MF["out"], "after month %d" % (24 + int(SB["runway_net"]))], ["ARR at month 24, ₹ Cr", round(MF["arr24"], 2), round(SB["arr24"], 2)]],
      "FLOPs per run = 6 x parameters x tokens = 6 x %.0e x %.1e; hours per run = FLOPs / (989 TFLOP/s x %.2f) / 3,600 = %s." % (B["B03"][0], B["B04"][0], B["B06"][0], ig(MF["h_run"])))
table("T19", "Market sized bottom-up from counted lenders (₹ Cr a year)", ["Segment", "Lenders", "West share", "Minutes a month (lakh)", "Reach", "In SAM", "India value", "West value"],
      [[n, c, pc(w), mi, pc(r), "yes" if s else "no", round(seg_value(c, mi, r), 1), round(seg_value(c * w, mi, r), 1)] for n, c, w, mi, r, s in MKT_SEG],
      "Value a minute = ₹%.3f review + %.0f%% x ₹%.2f voice = ₹%.3f. TAM ₹%.0f Cr, SAM ₹%.0f Cr (%s West lenders), SOM ₹%.1f Cr (month-24 ARR)." % (PRICE_MIN, VOICE_SH * 100, VOICE_MIN, VAL_MIN, TAM, SAM, ig(SAM_LOGOS), SOM))
table("T20", "Competitor capability matrix (team reading of public material; Lane E verifies)", ["Player"] + CAPS + ["Score of 14"], [[n] + c + [s] for n, c, s in RIV_S])
table("T21", "Moats and weak advantages", ["Advantage", "Start month", "Months to build", "Why it holds or fails"], [[n, s, b, w] for n, s, b, w in MOATS] + [[n, "", "copied in %d months" % mo, w] for n, mo, w in WEAK])
table("T22", "Government support: the base case books none of the grants", ["Scheme", "What it is worth to us", "Treatment"], [list(g) for g in GOV])
table("T23", "Model checks", ["Check", "Result"], [[n, "PASS" if ok else "FAIL"] for n, ok in CHECKS])

# ---------- values for the deck (every number on a slide comes from here) ----------
ASHORT = {"A01": "Land contract, ₹ lakh a year", "A05": "Pilots that convert", "A07": "Pilot starts, x the base plan",
          "A10": "Recorded minutes per lender, lakh a month", "A13": "Review minutes per L40S-hour at launch", "A15": "Live calls on one L40S",
          "A17": "L40S, ₹ a GPU-hour", "A18": "H100, ₹ a GPU-hour", "A43": "Data-centre PUE", "A44": "Grid factor, kg CO2 per kWh",
          "A45": "Renewable-matched share by H4", "A46": "On-site water, litres per kWh"}
def r1(v): return round(v, 1)
V = dict(hash=HASH, checks="%d of %d" % (CHECKS_OK, len(CHECKS)), cash24=cr(SB["cash24"]), runway="%.1f months" % SB["runway_net"], runway_n=r1(SB["runway_net"]),
         cust24=ig(SB["cust24"]), arr24=cr(SB["arr24"]), spend24=cr(SB["spend24"]), rev24=cr(SB["rev24"]), reserve=cr(ALLOC[-1][1]), cust18=ig(SB["cust18"]), arr18=cr(SB["arr18"]),
         alloc=[[l, "%.1f" % v, pc(v / 50), WHAT[l]] for l, v in ALLOC], alloc_n=[[l, v] for l, v in ALLOC],
         hy_cust=[round(h["cust"]) for h in SB["hy"]], hy_arr=[r1(h["arr"]) for h in SB["hy"]], hy_rev=[round(h["rev"], 2) for h in SB["hy"]],
         fin=[["Paying lenders, end"] + [ig(h["cust"]) for h in SB["hy"]] + [ig(SB["cust24"])], ["Pilots started"] + [ig(h["pil"]) for h in SB["hy"]] + [ig(SB["pilots"])],
              ["Revenue"] + ["%.2f" % h["rev"] for h in SB["hy"]] + ["%.2f" % SB["rev24"]]] +
             [[l] + ["%.2f" % h["lines"][l] for h in SB["hy"]] + ["%.2f" % SB["lines"][l]] for l in LINES] +
             [["Total spend"] + ["%.2f" % h["spend"] for h in SB["hy"]] + ["%.2f" % SB["spend24"]], ["Cash at end"] + ["%.2f" % h["cash"] for h in SB["hy"]] + ["%.2f" % SB["cash24"]],
              ["ARR at end"] + ["%.2f" % h["arr"] for h in SB["hy"]] + ["%.2f" % SB["arr24"]], ["Heads at end"] + [str(h["heads"]) for h in SB["hy"]] + [str(SB["hy"][3]["heads"])]],
         path_base=[50.0] + [round(x["cash"], 2) for x in RB], path_bear=[50.0] + [round(x["cash"], 2) for x in RBE], path_gate=[50.0] + [round(x["cash"], 2) for x in RBG],
         path_bull=[50.0] + [round(x["cash"], 2) for x in RBU], path_mf=[50.0] + [round(v, 2) for v in MF["path"][:24]], mf_out="month %d" % MF["out"], mf_out_n=MF["out"],
         mf_cash24=cr(MF["cash24"]), mf_arr24=cr(MF["arr24"]), mf_hours=ig(MF["h_tot"]),
         ind=[[n, s, "%.2f" % w] for n, s, w in IND_S], reg=[[n, s, "%.2f" % w] for n, s, w in REG_S], pair=PAIR, opt=[[n, s, "%.2f" % w] for n, s, w in OPT_S],
         opt_top="%.2f" % max(o[2] for o in OPT_S), opt_fm="%.2f" % OPT_S[0][2], ind_top="%.2f" % IND_S[0][2], reg_top="%.2f" % REG_S[0][2], pair_top="%.2f" % PAIR[0][0],
         rivals=[[n, c] for n, c, _ in RIV_S], caps=CAPS, moats=[[n, s, b] for n, s, b, _ in MOATS], weak=[[n, str(mo), w] for n, mo, w in WEAK],
         tam=cr(TAM, 0), sam=cr(SAM, 0), som=cr(SOM), sam_logos=ig(SAM_LOGOS), tam_n=round(TAM), sam_n=round(SAM), som_n=r1(SOM), share_som=pc(SOM / SAM),
         prov=[[p["name"], "n/a" if p["cost"] is None else "%.2f" % p["cost"], str(p["weeks"]), "%.2f" % p["pue"], pc(p["re"]), p["res"], "%.0f" % p["co2"]] for p in PROV_S],
         gpu_rs=cr(GPU_RS, 2), h100_eq=ig(H100_EQ), h100_hours=ig(WL["h100"]), l40_hours=ig(WL["l40"]),
         gh=[round(h["gh"]) for h in SB["hy"]], gb=[round(h["gb"]) for h in SB["hy"]], gv=[round(h["gv"]) for h in SB["hy"]], gd=[round(h["gd"]) for h in SB["hy"]],
         env=[["Energy, MWh"] + ["%.1f" % (h["e"] / 1000) for h in SB["hy"]] + ["%.1f" % (ENV["e"] / 1000)],
              ["CO2e, grid, t"] + ["%.1f" % h["co2l"] for h in SB["hy"]] + ["%.1f" % ENV["co2l"]],
              ["CO2e, after renewables, t"] + ["%.1f" % h["co2m"] for h in SB["hy"]] + ["%.1f" % ENV["co2m"]],
              ["Water on site, kL"] + ["%.1f" % (h["won"] / 1000) for h in SB["hy"]] + ["%.1f" % (ENV["won"] / 1000)],
              ["Water off site, kL"] + ["%.1f" % (h["woff"] / 1000) for h in SB["hy"]] + ["%.1f" % (ENV["woff"] / 1000)]],
         e_mwh="%.0f MWh" % (ENV["e"] / 1000), co2l="%.0f t" % ENV["co2l"], co2m="%.0f t" % ENV["co2m"], water_kl="%.0f kL" % ((ENV["won"] + ENV["woff"]) / 1000),
         water_l=ig(ENV["won"] + ENV["woff"]), inten=[round(v) for v in INT], re_end=pc(av("A45")), hy_re=[round(100 * h["re"]) for h in SB["hy"]],
         targets=[list(t) for t in TARGETS],
         tor=[[TOR_LBL[k], r1(lo), r1(hi)] for k, _, lo, hi in TOR[:8]],
         scen=[["Lenders"] + [ig(s["cust24"]) for _, s in SC], ["ARR"] + [cr(s["arr24"]) for _, s in SC],
               ["Total spend"] + [cr(s["spend24"]) for _, s in SC], ["Cash left"] + [cr(s["cash24"]) for _, s in SC],
               ["Months left"] + ["%.1f" % s["runway_net"] for _, s in SC]],
         gate_cash=cr(SBG["cash24"]), ef="%.2f" % av("A44"),
         acv=lk(ACV24 * 100, 1), cac=lk(CAC * 100, 1), payback="%.0f months" % PAYBACK, gm=pc(SB["gm_h4"]), ltvcac="%.1fx" % LTVCAC, gm18=pc(SB["gm_h3"]),
         mile="%d lenders, %s ARR and %s gross margin by month 18" % (MILE["cust"], cr(MILE["arr"]), pc(MILE["gm"])), gate_runway="%.1f months" % SBG["runway_net"],
         bear_runway="%.1f months" % SBE["runway_net"], bull_runway="%.1f months" % SBU["runway_net"], net_burn=cr(SB["net_burn"], 2), heads24=str(SB["hy"][3]["heads"]),
         gov=[list(g) for g in GOV], subsidy_up=cr(0.40 * (WL["h100"] * av("A18") + WL["l40"] * av("A17")) / 1e7, 2),
         arows=[[k, ASHORT[k], fmt(A[k][1]), fmt(A[k][0]), fmt(A[k][2])] for k in ASHORT],
         price_min="₹%.2f" % PRICE_MIN, voice_min="₹%.2f" % VOICE_MIN, budget="₹50 Cr",
         path_mf_clip=[50.0] + [round(max(0.0, v), 2) for v in MF["path"][:MF["out"]]], prov_save=pc(1 - PROV_S[0]["cost"] / PROV_S[1]["cost"]),
         api_x="%.0fx" % (PROV_S[3]["cost"] / PROV_S[0]["cost"]), west_dc=pc((F["mum_mw"] + F["pune_mw"]) / (F["mum_mw"] / F["mum_sh"])),
         gpu_portal=cr(PROV_S[0]["cost"], 2), co2_drop=pc(1 - ENV["co2m"] / ENV["co2l"]), dev_hours=ig(sum(x["g_dev"] for x in RB)),
         batch_hours=ig(sum(x["g_batch"] for x in RB)), voice_hours=ig(sum(x["g_voice"] for x in RB)), mm_reviewed=ig(WL["qa"] / 1e5) + " lakh",
         alloc_sum="%.1f" % ALLOC_SUM, pilots24=ig(SB["pilots"]))

# ---------- write ----------
def write(rel, text):
    if MEM is not None: MEM[rel] = text; return
    p = HERE.parent / rel; p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(text)
if not DRY:
    write("model/model_outputs.json", json.dumps(dict(OUT, hash=HASH, monthly=[{k: (round(v, 4) if isinstance(v, float) else v) for k, v in x.items() if k != "lines"} for x in RB]), ensure_ascii=False, indent=1))
    write("model/model_tables.md", "# Model tables: Setu AI (hash %s, %d of %d checks)\n\n" % (HASH, CHECKS_OK, len(CHECKS)) + "\n\n".join(TB) + "\n")
    write("deck/values.json", json.dumps(V, ensure_ascii=False, indent=1))
    print("wrote model/model_outputs.json, model/model_tables.md, deck/values.json")
```
<!-- END FILE -->

## D. Deck tooling (adapted from the Arthik Khayal generator, itself from the Space and Beyond and Asian Paints generators)

<!-- FILE: deck/gen.py -->
```python
# ===== ECON-ARENA DECK GEN v1 (from the Arthik Khayal, Space and Beyond and Asian Paints generators) =====
"""Deck generator. Run from the repo root with python -X utf8.
  python -X utf8 econarena-svc/deck/gen.py pre          build preamble.js, mock_figma.js and values.js (needs deck/values.json from the model)
  python -X utf8 econarena-svc/deck/gen.py mock 2 3     dry-run the listed slides on the offline mock (no list = all 7); exit 1 on any issue
  python -X utf8 econarena-svc/deck/gen.py bind 2 3     write build/slide_NN.js (or _1, _2, _3 parts) and build/v1_NN.js; always rewrite
                                                        v1_all.js, sweeps.js and slots.js
  python -X utf8 econarena-svc/deck/gen.py copy         write deck/slide-copy.md (every text node, from the mock) and check it
  python -X utf8 econarena-svc/deck/gen.py preview 2 3  offline previews on white in deck/shots/preview_NN.png (layout check)"""
import io, json, re, subprocess, sys, pathlib
try: DECK = pathlib.Path(__file__).resolve().parent
except NameError: DECK = pathlib.Path("econarena-svc/deck").resolve()
EA = DECK.parent; ROOT = EA.parent; N = "\n"; NS = 7; ALL = tuple(range(1, NS + 1))
LIB = ROOT / "verdict-mnc" / "deck" / "preamble.js"; MOCKSRC = ROOT / "verdict-mnc" / "deck" / "mock_figma.js"
SB = ROOT / "swasthyagrid-gcp" / "space-beyond" / "deck"     # read-only source of _x2.js, _x3.js, metrics.json and preview.py
ROT = ('Object.defineProperty(Node.prototype, "relativeTransform", { set(m) { this._rt = m; '
       'if (this.type === "TEXT" && Math.abs(m[0][0]) < 1e-6) { const w = this.width, h = this.height; this.x = m[0][2]; this.y = m[1][2] - w; this.width = h; this.height = w; } }, '
       'get() { return this._rt; } });')
BANW = ["here's", "let's", "bottom line", "delve", "game-changer", "game changer", "unlock", "it's not just", "make no mistake", "landscape",
        "robust", "seamless", "holistic", "tapestry", "paradigm", "navigate", "revolutioni", "cutting-edge", "leverage", "empower",
        "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness",
        "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving", "imagine", "ecosystem", "testament", "elevat",
        "what if", "picture this", "dive into", "groundbreaking", "state-of-the-art", "plethora", "myriad", "underscore", "showcase",
        "foster", "bolster", "spearhead", "nuanced", "intricate", "meticulous", "realm", "fast-paced", "in conclusion",
        "it is important to note", "revolutionary", "breakthrough", "unparalleled", "enhance", "vibrant", "additionally", "align with",
        "bolstered", "deep dive", "enduring", "garner", "interplay", "valuable", "quietly", "gate"]
ABSENT = ["Anuj", "Aakriti", "Ranvir", "SwiftKart", "SwasthyaGrid", "HarvestBox", "Dream11", "Paytm", "Liminal", "Satoshi", "Alchemy",
          "TiO2", "Eurogrip", "ONL Trade", "Arthik", "TODO", "TBD", "Lorem", "xyz", "undefined", "NaN", "Rs ", "Rs.", "ChatGPT", "Project "]
TEAM = {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"],
                                          ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University", "Member"],
                                          ["Dayita Arora", "Ramjas College, University of Delhi", "Member"]]}
MUSTK = ["cash24", "runway", "cust24", "arr24", "spend24", "reserve", "hash", "e_mwh", "co2l", "mf_out"]
MEM = None  # the planning-time harness sets this to a dict so that nothing touches the disk
def rdx(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def has(rel): return (MEM is not None and rel in MEM) or (DECK / rel).exists()
def rd(rel): return MEM[rel] if (MEM is not None and rel in MEM) else rdx(DECK / rel)
def wr(rel, t, quiet=False):
    if MEM is not None: MEM[rel] = t
    else:
        p = DECK / rel; p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline=N).write(t)
    if not quiet: print("wrote", rel, len(t))
def vals(): return json.loads(rd("values.js")[len("const V = "):].rstrip().rstrip(";"))
def r2mock(m):
    for a, b in [
        ('if (measure(cand, fam, size) <= width || !line) line = cand; else { out.push(line); line = wd; } }',
         'if (measure(cand, fam, size) <= width) line = cand; else { if (line) out.push(line); line = wd; let k = Math.ceil(measure(wd, fam, size) / Math.max(1, width)); while (k-- > 1) out.push(wd); } }'),
        ('setRangeFontName() {}', 'setRangeFontName(a, b, f) { if (f && f.style === "Bold") { this._bold = true; this._reflow(); } }'),
        ('_fam() { return this.fontName.family + "|" + this.fontName.style; }',
         '_fam() { return this.fontName.family + "|" + (this._bold && this.fontName.family === "Inter" ? "Bold" : this.fontName.style); }'),
        ('/BIBLIO|FINEPRINT/.test(t.name || "")', '/BIBLIO|FINEPRINT/.test(t.name || "") || (t.name === "SEC" && t.fontSize >= 18)')]:
        assert m.count(a) == 1, ("r2mock", a[:50], m.count(a)); m = m.replace(a, b)
    return m
def pre():
    t = rdx(LIB)
    for f in ("const C = {", "const HG=[", "function lineChart(", "function logoSlot(", "function layered(", "function panel(", "function vBars(",
              "function hBars(", "function waterfall(", "function rt(", "function wipe(", "function srcLine(", "function measureW(", "function hcell("):
        assert t.count(f) == 1, f
    for f in ("_x2.js", "_x3.js", "metrics.json"): wr(f, rdx(SB / f), True)
    pal = rd("_palette.js").strip(); k = pal.index("const HG=["); a = t.index("const C = {"); b = t.index("};", a) + 2; h0 = t.index("const HG=["); h1 = t.index("];", h0) + 2
    ext = rd("_extras.js"); assert ext.count("function teamBT(") == 1 and ext.count("function skelBT(") == 1 and ext.count("function actorL(") == 1
    wr("preamble.js", t[:a] + pal[:k].strip() + t[b:h0] + pal[k:] + t[h1:] + N + ext)
    m, c1 = re.subn(r"const \[pre, vals, slide, num\] = process\.argv\.slice\(2\);\nconst code = [^\n]*\n", "const code = CODE_JSON;\n", rdx(MOCKSRC))
    c2 = m.count("/LOGO:/.test("); m = m.replace("/LOGO:/.test(", "/LOGO:|IMG:/.test(")
    adv = rd("metrics.json").strip(); assert set(json.loads(adv)) == {"Poppins|Bold", "Poppins|ExtraBold", "Inter|Semi Bold", "Inter|Bold"}
    c3 = m.count("function cw(ch, fam) {"); c4 = m.count("let warnings_global = [];")
    m = m.replace("function cw(ch, fam) {", "const ADV = " + adv + ";\nfunction cw(ch, fam) { const a = ADV[fam]; if (a && a[ch] !== undefined) return a[ch] * 1.02;")
    m = m.replace("let warnings_global = [];", ROT + "\nlet warnings_global = [];")
    assert c1 == 1 and c2 == 1 and c3 == 1 and c4 == 1 and "for (let i = 1; i <= 11; i++)" in m, (c1, c2, c3, c4); m = r2mock(m); wr("mock_figma.js", m)
    V = json.loads(rd("values.json")); V["team"] = TEAM; V["must"] = [V[k] for k in MUSTK]
    wr("values.js", "const V = " + json.dumps(V, ensure_ascii=False) + ";")
def derive(only=None):
    """Apply deck/overrides.json ({"exact old string": "new string"}) to the slide files and write deck/derived/sNN.js."""
    ov = json.loads(rd("overrides.json")) if has("overrides.json") else {}; used = set()
    for n in ALL:
        s = rd("slides/s%02d.js" % n)
        for a, b in ov.items():
            if a in s: s = s.replace(a, b); used.add(a)
        wr("derived/s%02d.js" % n, s, True)
    miss = [a for a in ov if a not in used]; assert not miss, ("an override key matches no slide text", miss)
SPLIT = "// ===== PART ====="   # a slide may be split into any number of parts; each later part re-reads the slide by id and never wipes
def compose(n, sid, part=None):
    p = rd("preamble.js") + N + rd("_x2.js") + N + rd("_x3.js"); s = rd("derived/s%02d.js" % n); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) >= 1, n
    if part is not None: s = s.split(SPLIT)[part]
    V = vals(); keys = set(re.findall(r"\bV\.([A-Za-z_][A-Za-z0-9_]*)", p + s)); miss = keys - set(V); assert not miss, ("unknown V keys", n, miss)
    sub = "const V = " + json.dumps({k: V[k] for k in V if k in keys}, ensure_ascii=False) + ";"
    return p + N + sub + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % sid) + N + "return {results,warnings};" + N
def parts(n, sid):
    s = rd("derived/s%02d.js" % n); k = s.count(SPLIT)
    return [compose(n, sid, i) for i in range(k + 1)] if k else [compose(n, sid)]
# A node that leaves its parent frame by more than 1 px is flagged (rotated rail labels excepted).
CHK = ("const __S=await figma.getNodeByIdAsync('S%d'); for(const q of __S.findAll(()=>true)){ const p=q.parent; if(!p||p.type==='SLIDE'||q._rt) continue; "
       "if(q.x<-1||q.y<-1||q.x+q.width>p.width+1||q.y+q.height>p.height+1) warnings.push('childOut: '+String(q.name||q.type).slice(0,30)+' in '+String(p.name||'').slice(0,40)+' at '+Math.round(q.x)+','+Math.round(q.y)+' size '+Math.round(q.width)+'x'+Math.round(q.height)+' parent '+Math.round(p.width)+'x'+Math.round(p.height)); }")
def mock(only=None):
    derive(only); ok = True; m = rd("mock_figma.js")
    for n in ALL:
        if only and n not in only: continue
        code = compose(n, "S%d" % n).replace("return {results,warnings};", (CHK % n) + N + "return {results,warnings};")
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        out = r.stdout + r.stderr; lens = [len(c) for c in parts(n, "S%d" % n)]; good = "warnings: []" in out and "ISSUES 0" in out and max(lens) < 49900; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", lens, "|", " | ".join(l.strip() for l in out.splitlines() if l.strip())[:(220 if good else 6000)].encode("ascii", "replace").decode())
    return ok
def bind(only=None):
    derive(); ids = json.loads(rd("slide-ids.json")); V = vals(); v1 = rd("_v1.js"); sw = rd("_sweeps.js")
    assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1 and len(ids) == NS
    for n in ALL:
        if only and n not in only: continue
        cs = parts(n, ids["S%d" % n])
        for i, code in enumerate(cs):
            assert len(code) < 50000, (n, i, len(code)); wr(("build/slide_%02d.js" % n) if len(cs) == 1 else ("build/slide_%02d_%d.js" % (n, i + 1)), code)
        wr("build/v1_%02d.js" % n, v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in ALL])
    wr("build/v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr("build/sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(V["must"], ensure_ascii=False)))
    wr("build/slots.js", "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.findAll(n=>n.name.startsWith('LOGO: ')||n.name.startsWith('IMG: ')).forEach(n=>out.push({slide:s.name,id:n.id,name:n.name,w:Math.round(n.width),h:Math.round(n.height)})); } return out;" % allids)
def copy():
    derive(); m = rd("mock_figma.js"); out = ["# Slide copy: every text node on every slide, read from the offline mock", ""]; bad = []
    for n in ALL:
        dump = "const __s=await figma.getNodeByIdAsync('S%d'); console.log('@@T'+JSON.stringify(__s.findAll(q=>q.type==='TEXT').map(t=>t.characters)));" % n
        code = compose(n, "S%d" % n).replace("return {results,warnings};", dump + N + "return {results,warnings};")
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        tl = [l for l in r.stdout.splitlines() if l.startswith("@@T")]; texts = json.loads(tl[0][3:]) if tl else ["(no output)"]
        out += ["## S%d" % n, ""] + ["%d. %s" % (i + 1, x.replace("\n", " / ")) for i, x in enumerate(texts)] + [""]
        for x in texts:
            low = x.lower()
            if re.search("[—–]", x): bad.append((n, "dash", x[:60]))
            if "?" in x or "!" in x: bad.append((n, "question or exclamation", x[:60]))
            bad += [(n, "banned " + b, x[:60]) for b in BANW if b in low]
            bad += [(n, "absent " + a, x[:60]) for a in ABSENT if a in x]
    wr("slide-copy.md", N.join(out) + N); print("copy issues", len(bad))
    for b in bad: print("  ", b)
    return not bad
SHOTS = None  # output folder for previews; defaults to deck/shots
def preview(only=None):
    """Offline layout preview on a white canvas: deck/shots/preview_NN.png (layout check only; needs Pillow and fontTools)."""
    import importlib.util
    from PIL import Image
    spec = importlib.util.spec_from_file_location("pv", SB / "preview.py"); pv = importlib.util.module_from_spec(spec); spec.loader.exec_module(pv)
    F = pv.Fonts(json.loads(rd("metrics.json"))); m = rd("mock_figma.js"); i = m.rindex("})();"); m = m[:i] + pv.DUMP + m[i:]; derive()
    od = pathlib.Path(SHOTS) if SHOTS else DECK / "shots"; od.mkdir(parents=True, exist_ok=True)
    for n in ALL:
        if only and n not in only: continue
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(compose(n, "S%d" % n))), capture_output=True, text=True, encoding="utf-8")
        tj = [l for l in r.stdout.splitlines() if l.startswith("TREE_JSON")]
        if not tj: print("no tree for slide", n, r.stderr[-400:]); continue
        img = Image.new("RGB", (1920, 1080), "white")
        for k in json.loads(tj[0][9:])["k"]: pv.draw(img, F, k, 0, 0)
        out = od / ("preview_%02d.png" % n); img.save(out); print("wrote", out)
def main(a):
    only = set(int(x) for x in a[1:]) or None
    if a[0] == "preview": preview(only)
    if a[0] == "pre": pre()
    elif a[0] == "mock": sys.exit(0 if mock(only) else 1)
    elif a[0] == "bind": bind(only)
    elif a[0] == "copy": sys.exit(0 if copy() else 1)
if __name__ == "__main__": main(sys.argv[1:])
```
<!-- END FILE -->

<!-- FILE: deck/_palette.js -->
```js
const C = {
  primary:{r:0.420,g:0.290,b:0.184}, primaryDeep:{r:0.180,g:0.114,b:0.078},
  accent:{r:0.851,g:0.698,b:0.435}, alert:{r:0.690,g:0.220,b:0.169},
  tint:{r:0.965,g:0.910,b:0.824}, alertTint:{r:0.961,g:0.867,b:0.847},
  blue:{r:0.094,g:0.220,b:0.345}, blueDeep:{r:0.059,g:0.153,b:0.251}, blueTint:{r:0.867,g:0.902,b:0.937},
  good:{r:0.157,g:0.471,b:0.533}, goodTint:{r:0.843,g:0.922,b:0.933}, accentTint:{r:0.984,g:0.941,b:0.863},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
const HG=[null,{r:0.973,g:0.933,b:0.875},{r:0.922,g:0.827,b:0.682},{r:0.824,g:0.682,b:0.463},{r:0.612,g:0.455,b:0.282},{r:0.306,g:0.200,b:0.133}];
const HR=[null,{r:1,g:0.949,b:0.941},{r:0.973,g:0.812,b:0.788},{r:0.886,g:0.522,b:0.478},{r:0.690,g:0.220,b:0.169}];
```
<!-- END FILE -->

<!-- FILE: deck/_extras.js -->
```js
// ===== ECON-ARENA DECK EXTRAS (from the Arthik Khayal extras) =====
const RIBN=["GO-TO-MARKET AND BUDGET","PRODUCT AND MOAT","ENVIRONMENTAL STRATEGY"];
const RIBAP=["A1 FINANCIAL SKETCH","A2 ASSUMPTIONS, RULES AND SOURCES"];
const ARCS=true;
function ribbonBT(s,active,labels){ const y=40,h=60,n=labels.length; let size=24;
  let tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l));
  const fits=pad=>tw.reduce((a,b)=>a+b,0)+pad*n+26*(n-1)<=1792;
  let pad=64; while(!fits(pad)&&pad>44) pad-=4;
  if(!fits(pad)){ size=22; tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l)); pad=64; while(!fits(pad)&&pad>44) pad-=4; }
  if(!fits(pad)) warnings.push("ribbon too wide");
  const widths=tw.map(w=>Math.ceil(w+pad)), used=widths.reduce((a,b)=>a+b,0), gap=n>1?Math.min(80,Math.max(26,(1792-used)/(n-1))):0;
  let x=64; const bxs=[];
  for(let i=0;i<n;i++){ const w=widths[i], act=i===active;
    if(act) addRect(s,x+8,y+8,w,h,C.accent,C.ink,2.5);
    addRect(s,x,y,w,h,act?C.primaryDeep:C.accent,C.ink,2);
    addText(s,"Poppins","Bold",size,act?C.white:C.ink,labels[i],x,y+Math.round((h-size*1.5)/2),w,Math.round(size*1.5),"CENTER","CENTER");
    addEllipse(s,x+3,y+h/2-7,14,14,C.white,C.ink,2); addEllipse(s,x+w-17,y+h/2-7,14,14,C.white,C.ink,2);
    bxs.push({x,w}); x+=w+gap; }
  for(let i=0;i<n-1;i++) addWireH(s,bxs[i].x+bxs[i].w-10,bxs[i+1].x+10,y+h/2,C.ink,2.5); }
function skelBT(s,active,counter,chip,chipW,title,source,o){ o=o||{}; wipe(s);
  ribbonBT(s,active,o.labels||RIBN);
  addChip(s,64,118,chipW,56,chip,C.primary,C.white,22);
  const cw=o.counterW||156; addChip(s,1856-cw,118,cw,56,counter,C.primaryDeep,C.white,24);
  const t=addText(s,"Poppins","Bold",40,C.ink,title,64,188,1792,100,"LEFT",undefined,true); t.name="HEADLINE";
  while(t.height>112 && t.fontSize>34){ t.fontSize=t.fontSize-1; }
  if(t.height>112) warnings.push("headline 3 lines: "+counter);
  srcLine(s,source); return t; }
function arc(p,cx,cy,d,a0,a1,fill,inner){ const e=addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,2);
  try{ e.arcData={startingAngle:a0,endingAngle:a1,innerRadius:inner||0}; }catch(err){ warnings.push("arc failed"); } return e; }
function donut(p,cx,cy,d,segs,inner){ const tot=segs.reduce((a,s)=>a+s.v,0);
  if(!ARCS){ let yy=cy-d/2; segs.forEach(sg=>{ const hh=d*sg.v/tot; addRect(p,cx-d/2,yy,d,hh,sg.c,C.ink,2); yy+=hh; }); return; }
  let a=-Math.PI/2; segs.forEach(sg=>{ const b=a+2*Math.PI*sg.v/tot; arc(p,cx,cy,d,a,b,sg.c,inner===undefined?0.55:inner); a=b; }); }
function arrow(p,x1,y1,x2,y2,color,th){ color=color||C.ink; th=th||2.5; addDiagonalWire(p,x1,y1,x2,y2,color,th);
  const a=Math.atan2(y2-y1,x2-x1); [a+2.6,a-2.6].forEach(b=>addDiagonalWire(p,x2,y2,x2+10*Math.cos(b),y2+10*Math.sin(b),color,th)); }
function callout(p,x,y,w,h,lead,text,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.accentTint,C.ink,2,"CALLOUT");
  rt(f,14,o.py===undefined?10:o.py,w-28,22,lead,text,{color:o.color,leadColor:o.leadColor||C.primaryDeep}); return f; }
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
// Cover strip: event chip, organiser and team-institution logo slots, team chip, a wire with dots.
function coverTop(s){ addChip(s,64,48,560,56,"ECON-ARENA  |  BLISSPOINT'26-27",C.primaryDeep,C.white,22);
  [["SVC",644,84],["Econ-Arena",748,170],["DTU",938,84],["GGSIPU",1042,84],["Ramjas College",1146,84]].forEach(l=>logoSlot(s,l[1],40,l[2],72,l[0]));
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// Image placeholder (people or product shots): grey, dashed, named IMG.
function imgSlot(p,x,y,w,h,label){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+label); try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,label,4,0,w-8,h,"CENTER","CENTER",false); return f; }
// Mind-map node with one to three logo slots ("IMG:" prefix makes an image slot), a title and a wrapped sub-line.
function actorL(p,x,y,w,h,brands,title,sub){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2,"NODE "+title); addRect(f,0,0,6,h,C.accent);
  const n=Math.max(1,brands.length), gap=6, bw=(w-28-gap*(n-1))/n;
  brands.forEach((b,i)=>{ const bx0=16+i*(bw+gap); if(b.startsWith("IMG:")) imgSlot(f,bx0,8,bw,56,b.slice(4)); else logoSlot(f,bx0,8,bw,56,b); });
  TL(f,16,68,22,title,{color:C.primaryDeep,maxW:w-28}); sT(f,16,102,w-28,18,sub,{family:"Inter",style:"Semi Bold"}); return f; }
// Heat cells. ynCell for Yes, Part, No; sc5 for a 1 to 5 score; heatN for counts with ascending cut points.
function ynCell(v){ if(v==="Yes") return {t:"Yes",f:HG[3],tc:C.ink}; if(v==="Part") return {t:"Part",f:C.accentTint,tc:C.ink};
  if(v==="No") return {t:"No",f:C.alertTint,tc:C.alert}; return {t:String(v),f:C.white,tc:C.ink}; }
function sc5(v,dp){ const n=parseFloat(v); const k=n>=4?5:(n>=3.25?4:(n>=2.5?3:(n>=1.75?2:1)));
  return {t:typeof v==="string"?v:(dp===undefined?String(n):n.toFixed(dp)),f:HG[k],tc:k>=4?C.white:C.ink}; }
function heatN(v,cuts){ if(!v) return {t:"",f:C.surfaceAlt,tc:C.ink}; let k=1; cuts.forEach((c,i)=>{ if(v>=c) k=i+2; }); k=Math.min(5,k);
  return {t:fmtN(v),f:HG[k],tc:k>=4?C.white:C.ink}; }
// Tornado at 18 pt: red to the bear side, teal to the bull side, a black base line, optional tick labels.
function torS(p,x,y,w,items,baseV,o){ o=o||{}; const lw=o.lw||240, rh=o.rh||30, span=w-lw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const lo=Math.min(it.lo,it.hi), hi=Math.max(it.lo,it.hi);
    addRect(p,X(lo),ry+5,Math.max(2,X(baseV)-X(lo)),rh-10,C.alert,C.ink,1); addRect(p,X(baseV),ry+5,Math.max(2,X(hi)-X(baseV)),rh-10,C.good,C.ink,1); });
  addRect(p,X(baseV)-1,y-4,2.5,rh*items.length+8,C.ink);
  (o.ticks||[]).forEach(t=>sTL(p,0,y+rh*items.length+6,18,t.toFixed(1),{family:"Inter",style:"Bold",centerAt:X(t)})); return X; }
// Small numeral + label tile.
function tile(p,x,y,w,h,num,label,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,1.5,"TILE");
  TL(f,10,o.ny===undefined?2:o.ny,o.size||26,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-20,min:18});
  sT(f,10,o.ly||40,w-20,18,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
function tick(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: tick"); addEllipse(f,0,0,d,d,C.good,C.ink,1.5);
  addDiagonalWire(f,d*0.25,d*0.53,d*0.43,d*0.71,C.white,3); addDiagonalWire(f,d*0.43,d*0.71,d*0.76,d*0.32,C.white,3); return f; }
function cross(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: no"); addEllipse(f,0,0,d,d,C.alert,C.ink,1.5);
  addDiagonalWire(f,d*0.32,d*0.32,d*0.68,d*0.68,C.white,3); addDiagonalWire(f,d*0.68,d*0.32,d*0.32,d*0.68,C.white,3); return f; }
// A tag box for build, buy, borrow, rent.
const TAGC={BUILD:C.good,BUY:C.blue,BORROW:C.primary,RENT:C.accent};
function tag(p,x,y,w,h,t){ return bx(p,x,y,w,h,t,{fill:TAGC[t]||C.surface,color:t==="RENT"?C.ink:C.white,fam:"Inter",st:"Bold",size:18,name:"TAG"}); }
// Horizontal bar row: label, bar scaled to max, value text after the bar.
function hbar(p,x,y,lw,bw,v,max,label,txt,color){ sTL(p,x,y,18,label,{family:"Inter",style:"Bold",maxW:lw-6}); const w=Math.max(3,Math.round(bw*v/max));
  addRect(p,x+lw,y+3,w,18,color||C.primary,C.ink,1); sTL(p,x+lw+w+6,y,18,txt,{family:"Inter",style:"Bold",color:color===C.alert?C.alert:C.ink}); return w; }
// ===== END ECON-ARENA DECK EXTRAS =====
```
<!-- END FILE -->

## S. Slide scripts (starting layout; deck derivation may change copy only through deck/overrides.json)

<!-- FILE: deck/slides/s01.js -->
```js
{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
coverTop(s);
TL(s,64,150,112,"SETU AI",{family:"Poppins",style:"ExtraBold",maxW:920,min:80});
TL(s,64,318,56,"WIN THE LENDERS FIRST",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:920,min:40});
T(s,64,404,920,22,"A strategy for a new Indian AI company with ₹50 crore and no data centre: where it wins first, how it sells, what it builds, and why rivals cannot simply copy it",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const v=layered(s,64,512,920,226,C.primaryDeep,"CARD: verdict");
T(v,24,14,872,24,"OUR ANSWER: DO NOT TRAIN A BASE MODEL. SELL MID-SIZED LENDERS IN MUMBAI AND PUNE PROOF THAT EVERY COLLECTION CALL FOLLOWED THE RULES.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,24,128,872,22,"In our model: "+V.cust24+" lenders and "+V.arr24+" of ARR by month 24 on "+V.spend24+" of spend, with "+V.cash24+" left and "+V.runway+" of runway. Compute is rented in Mumbai: "+V.co2l+" of CO2e in 24 months.",{family:"Inter",style:"Semi Bold",color:C.white});
TL(s,64,752,36,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary});
teamBT(s,64,806,[230,520,170]);
srcLine(s,"Source: Econ-Arena case packet, October 2026 | IndiaAI compute portal | Maharashtra AI Policy 2026 | team model "+V.hash+" | logos identify organisations in the analysis; no partnership or endorsement is implied");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S1");
const m=addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map");
TL(m,16,10,24,"WHO DECIDES WHERE SETU AI CAN WIN",{color:C.primary,maxW:808}); addRect(m,16,50,808,2,C.ink);
T(m,16,60,808,22,"By May 2027 a lender must show that every AI call was consented, labelled and lawful. Setu sells that evidence.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const A=[[["IMG:Lender collections floor"],"THE BUYERS","mid-sized lenders in Mumbai and Pune"],[["RBI","MeitY"],"THE RULES","recovery code, DPDP, IT Rules 2026"],
  [["IndiaAI","Yotta","NVIDIA"],"THE COMPUTE","rented at ₹65 to ₹92 a GPU-hour"],[["Sarvam AI","Krutrim","BharatGen"],"MODEL BUILDERS","12 IndiaAI foundation teams"],
  [["Anthropic","OpenAI","Google"],"GLOBAL LABS","Claude now serves from India"],[["Gnani.ai","Convin","Credgenics"],"COLLECTIONS AI","already sell to lenders"],
  [["Government of Maharashtra"],"STATE SUPPORT","₹500 Cr fund, 20% MSME subsidy"],[["IMG:Collection agency partner"],"THE CHANNEL","agencies and loan-software vendors"]];
const P=[[16,124],[294,124],[572,124],[16,377],[572,377],[16,630],[294,630],[572,630]], W=252, Hh=150, HX=420, HY=452;
P.forEach(q=>addDiagonalWire(m,HX,HY,q[0]+W/2,q[1]+Hh/2,C.ink,2.5));
A.forEach((a,i)=>actorL(m,P[i][0],P[i][1],W,Hh,a[0],a[1],a[2]));
addEllipse(m,HX-105,HY-105,210,210,C.primaryDeep,C.ink,2.5);
TL(m,0,HY-66,26,"SETU AI",{color:C.white,centerAt:HX}); TL(m,0,HY-26,26,"₹50 CR",{color:C.accent,centerAt:HX});
sTL(m,0,HY+18,18,"no data centre",{family:"Inter",style:"Bold",color:C.white,centerAt:HX});
[["LISTEN","every call"],["CHECK","three rule sets"],["PROVE","evidence file"]].forEach((r,i)=>{ const x=16+278*i;
  const f=addFrame(m,x,800,252,36,i===2?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,7,232,18,r[0]+": ",r[1],{leadColor:C.primaryDeep});
  if(i<2) arrow(m,x+254,818,x+276,818,C.ink,2); });
fine(m,16,850,808,"Logos identify organisations referred to in the analysis; no partnership or endorsement is implied.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 3","TASK 1: GO-TO-MARKET",360,"Win first with mid-sized lenders in Mumbai and Pune: "+V.cust24+" paying lenders and "+V.arr24+" of ARR by month 24 on "+V.spend24+" of spend, with "+V.reserve+" held in reserve",
  "Source: case packet regions table (Savills, Anthropic Economic Index), DPDP and IT Rules rows | RBI FREE-AI, Aug 2025 | RBI recovery directions | team model "+V.hash+" (T3 to T11, T19)");
const a=layered(s,64,316,1792,52,C.primaryDeep,"CARD: answer");
TL(a,16,8,22,"OUR ANSWER",{color:C.accent});
T(a,200,11,1576,22,"Sell mid-sized lenders proof that every collection call followed the rules, on rented models and rented GPUs.",{family:"Inter",style:"Semi Bold",color:C.white});
rail(s,64,384,236,"WHERE",C.primaryDeep); rail(s,64,630,206,"WHO AND HOW",C.primary); rail(s,64,846,186,"THE ₹50 CR",C.good);
const p1=pnl(s,116,384,600,236,"INDUSTRY x REGION, SCORE OUT OF 5");
const IL=["BFSI lenders","Media","Telecom","Retail","IT services, GCCs","Manufacturing","Healthcare"];
hgrid(p1,14,46,IL,["West","South","North","East","Sector"],V.pair.map((r,i)=>r.map(v=>sc5(v,2)).concat([sc5(V.ind[i][2])])),{lw:182,cw:78,rh:23,hh:24,corner:"Industry",name:"pairs"});
const p2=pnl(s,728,384,520,236,"WHY THE WEST: THE CASE'S OWN DATA");
sTL(p2,14,46,18,"Data-centre capacity, MW",{family:"Inter",style:"Bold",color:C.primaryDeep});
[["Mumbai",846],["Pune",182],["Chennai",320],["Delhi-NCR",191]].forEach((r,i)=>hbar(p2,14,74+26*i,104,86,r[1],846,r[0],String(r[1]),i<2?C.primary:C.surface));
sTL(p2,266,46,18,"Claude.ai use, %",{family:"Inter",style:"Bold",color:C.primaryDeep});
[["Maharashtra",15.5],["Tamil Nadu",13.2],["Karnataka",12.7],["Delhi",10.5]].forEach((r,i)=>hbar(p2,266,74+26*i,124,64,r[1],15.5,r[0],r[1].toFixed(1),i===0?C.primary:C.surface));
note(p2,14,180,492,"So what: ","Mumbai and Pune hold "+V.west_dc+" of India's capacity; the South leads on combined use.",{lc:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
const p3=pnl(s,1260,384,596,236,"THE RULE CLOCK THAT MAKES LENDERS BUY");
addWireH(p3,40,556,94,C.ink,2.5);
[["Aug 2025","RBI FREE-AI report"],["Nov 2025","DPDP Rules notified"],["Feb 2026","IT Rules: AI labels"],["2026","RBI draft: record calls"],["Nov 2026","consent systems due"],["May 2027","DPDP in full"]].forEach((r,i)=>{ const cx=60+95*i;
  addEllipse(p3,cx-9,85,18,18,i>=4?C.alert:C.primary,C.ink,2); sTL(p3,0,52,18,r[0],{family:"Inter",style:"Bold",color:i>=4?C.alert:C.ink,centerAt:cx});
  sT(p3,cx-46,110,92,18,r[1],{family:"Inter",style:"Semi Bold",align:"CENTER"}); });
note(p3,14,180,568,"So what: ","by May 2027 a lender must prove each AI call was lawful; fines reach ₹250 Cr.",{lc:C.alert});
const p4=pnl(s,116,630,780,206,"FIRST THREE CUSTOMERS (PROFILES, NOT SIGNED NAMES)");
tbl(p4,14,46,[284,78,76,92,130,92],["Profile","City","Callers","Minutes","First buyer","Contract"],[
  ["Vehicle-loan NBFC, middle layer, own call team","Pune","150","4.5 lakh","Head of collections","₹18 lakh"],
  ["Urban co-operative bank, Marathi first","Mumbai","60","1.8 lakh","CEO, then the board","₹7 lakh"],
  ["Personal-loan NBFC using outside agencies","Mumbai","250","7.5 lakh","Compliance head","₹30 lakh"]],{hh:26,rh:44,name:"first three",align:["LEFT","LEFT","RIGHT","RIGHT","LEFT","RIGHT"]});
const p5=pnl(s,908,630,470,206,"FIRST CALL TO LIVE: 18 WEEKS");
gnt(p5,14,46,156,31,26,["2","4","6","8","10","12","14","16","18"],[{label:"Free audit",s:0,e:0,color:C.accent},{label:"Paid pilot",s:1,e:4,color:C.primary},
  {label:"Security check",s:3,e:6,color:C.blue},{label:"Contract",s:6,e:7,color:C.primaryDeep},{label:"Go live",s:8,e:8,color:C.good}],{});
const p6=pnl(s,1390,630,466,206,"SELLING WITHOUT A BRAND");
tbl(p6,14,46,[196,130,112],["Lever","Pace","Gives us"],[["Free call audit","4 a month","pipeline"],["Readiness report","2 a year","trust"],["Agency partners","35% of wins","reach"],["Lender forums","6 a year","meetings"]],
  {hh:26,rh:28,name:"brand",align:["LEFT","LEFT","LEFT"]});
const p7=pnl(s,116,846,700,186,"THE ₹50 CR SPLIT, ₹ CR (TOTAL "+V.alloc_sum+")");
V.alloc.forEach((r,i)=>{ const col=i<4?0:1, row=i<4?i:i-4, x=14+col*340, y=48+row*32;
  hbar(p7,x,y,118,120,parseFloat(r[1]),22,r[0],r[1]+"  "+r[2],r[0]==="Reserve"?C.good:C.primary); });
const p8=pnl(s,828,846,500,186,"ARR, ₹ CR, AND PAYING LENDERS");
cols(p8,14,46,472,134,V.hy_cust.map((c,i)=>"H"+(i+1)+": "+c),[{values:V.hy_arr,color:C.primary}],{max:7,bw:56,totals:V.hy_arr.map(v=>v.toFixed(1))});
const p9=pnl(s,1340,846,516,186,"MARKET, BOTTOM-UP, ₹ CR A YEAR");
fun(p9,14,48,488,[{t:"TAM "+V.tam+": India's lenders",size:20},{t:"SAM "+V.sam+": "+V.sam_logos+" West lenders",size:20},{t:"SOM "+V.som+": "+V.cust24+" lenders by M24",size:18,tc:C.ink}],{th:38,gap:6,minW:400});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 3","TASK 2: PRODUCT AND MOAT",400,"Rent the models and own the evidence: Setu builds the rule engine, the labelled call corpus and each lender's audit file, which take 12 to 18 months to copy, and buys the rest",
  "Source: team reading of public material on 14 players, October 2026 (research section 15) | Sarvam voice-agent price list | AWS Bedrock India inference, Sep 2026 | team model "+V.hash+" (T6, T18, T20, T21)");
const a=layered(s,64,316,1792,52,C.primaryDeep,"CARD: conclusively");
TL(a,16,8,22,"CONCLUSIVELY",{color:C.accent});
T(a,236,11,1540,22,"A base model scores "+V.opt_fm+" of 5 and runs dry in "+V.mf_out+"; collections AI scores "+V.opt_top+" and keeps "+V.cash24+" at month 24.",{family:"Inter",style:"Semi Bold",color:C.white});
rail(s,64,384,226,"WHAT WE BUILD",C.primaryDeep); rail(s,64,620,412,"RIVALS AND MOAT",C.primary);
const p1=pnl(s,116,384,672,226,"FIVE ROUTES, ONE TEST, SCORED 1 TO 5");
const RL=["Train a base model","General Indic API","Voice agents for all","AI services","Collections AI, ours"];
hgrid(p1,14,46,RL,["Cash","Sales","Moat","Aid","Light","Trust","Score"],V.opt.map(r=>r[1].map(v=>sc5(v)).concat([sc5(r[2])])),{lw:196,cw:64,rh:24,hh:26,corner:"Route",name:"routes"});
sT(p1,14,196,644,18,"Cash: fits ₹50 Cr. Sales: by month 24. Aid: state support.",{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
const p2=pnl(s,800,384,520,226,"WHAT SETU BUILDS, BUYS AND BORROWS");
[["BUILD","Rule engine: RBI, DPDP, IT Rules"],["BUILD","Evidence file for each lender"],["BUILD","Labelled Marathi and Hindi calls"],["BUILD","Links to diallers and loan systems"],
 ["BORROW","Open speech and language models"],["BUY","Claude on Bedrock India, hard cases"],["BUY","Telephony and speech synthesis"],["RENT","L40S and H100 GPUs, IndiaAI portal"]].forEach((r,i)=>{ const y=46+22*i;
  tag(p2,14,y,104,22,r[0]); sTL(p2,128,y,18,r[1],{family:"Inter",style:"Bold",maxW:378}); });
const m=layered(s,1332,384,524,226,C.accentTint,"CARD: MONEYSHOT");
TL(m,16,8,22,"SAME ₹50 CR, TWO ROUTES",{color:C.primaryDeep});
TL(m,16,38,44,V.cash24,{family:"Poppins",style:"ExtraBold",color:C.good,maxW:236,min:30});
sT(m,16,104,236,18,"left at month 24, "+V.runway+" of runway",{family:"Inter",style:"Bold"});
TL(m,16,152,30,"Out in "+V.mf_out,{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:236,min:22});
sT(m,16,198,236,18,"on a model-first plan",{family:"Inter",style:"Bold"});
lcS(m,256,48,256,172,[{values:V.path_base,color:C.good},{values:V.path_mf_clip,color:C.alert}],V.path_base.map((_,i)=>i%6===0&&i>0?"M"+i:""),{yMin:0,yMax:50,yTicks:[0,25,50],padL:40,padR:8});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const p4=pnl(s,116,620,1000,412,"14 PLAYERS, 7 CAPABILITIES (TEAM READING OF PUBLIC MATERIAL)");
hgrid(p4,14,46,V.rivals.slice(0,14).map(r=>r[0]),["Indic speech","Lender focus","Call review","Rule evidence","India hosting","Lean price","Mumbai, Pune"],V.rivals.slice(0,14).map(r=>r[1].map(ynCell)),
  {lw:236,cw:104,rh:22,hh:44,corner:"Player",name:"rivals"});
const p5=pnl(s,1128,620,728,206,"THREE MOATS, MONTHS TO BUILD");
const ML=["Call corpus: "+V.moats[0][2]+" mo","Evidence file: "+V.moats[1][2]+" mo","Agency channel: "+V.moats[2][2]+" mo"];
gnt(p5,14,46,262,70,28,["M4","M8","M12","M16","M20","M24"],V.moats.map((r,i)=>({label:ML[i],s:Math.floor(r[1]/4),e:Math.min(5,Math.floor((r[1]+r[2]-1)/4)),color:[C.good,C.primary,C.accent][i]})),{});
sT(p5,14,160,700,18,"A rival needs our lenders' consent and a year of their calls.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p6=pnl(s,1128,836,728,196,"WEAK: A BIGGER RIVAL COPIES THESE IN 12 MONTHS");
tbl(p6,14,46,[230,110,360],["Advantage","Copied in","Why"],V.weak.map(r=>[r[0],r[1]+" months",r[2]]),{hh:26,rh:24,name:"weak",align:["LEFT","CENTER","LEFT"],rc:[C.alert,C.alert,C.alert,C.alert,C.alert]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 3","TASK 3: ENVIRONMENTAL STRATEGY",470,"Rented IndiaAI GPUs in Mumbai use "+V.e_mwh+", emit "+V.co2l+" of CO2e and "+V.water_kl+" of water over 24 months; renewable contracts cut the carbon to "+V.co2m,
  "Source: IndiaAI portal rates (case packet) | Hugging Face Inference Endpoints prices | Yotta Shakti Cloud | NVIDIA H100 and L40S data sheets | CEA CO2 baseline database | team model "+V.hash+" (T12 to T15)");
const a=layered(s,64,316,1792,52,C.primaryDeep,"CARD: choice");
TL(a,16,8,22,"OUR CHOICE",{color:C.accent});
T(a,200,11,1576,22,"Rent IndiaAI portal GPUs in Mumbai: lenders' data stays in India, an L40S costs ₹67.5 an hour, and the buyers are close.",{family:"Inter",style:"Semi Bold",color:C.white});
rail(s,64,384,254,"WHERE IT RUNS",C.primaryDeep); rail(s,64,648,196,"FOOTPRINT",C.primary); rail(s,64,854,178,"TRADE-OFFS",C.good);
const p1=pnl(s,116,384,860,254,"ONE WORKLOAD, FIVE WAYS TO RUN IT, 24 MONTHS");
tbl(p1,14,46,[296,74,78,64,112,92,96],["Route","₹ Cr","Weeks","PUE","Renewable","In India","t CO2e"],V.prov,{hh:26,rh:26,name:"compute routes",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT","LEFT","RIGHT"],fills:[C.goodTint]});
sT(p1,14,210,832,18,V.budget+" would rent "+V.h100_eq+" H100-hours; we need "+V.h100_hours+". Compute is not the constraint.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p2=pnl(s,988,384,868,254,"WORKLOAD TO HARDWARE, 24 MONTHS");
tbl(p2,14,46,[226,214,116,284],["Workload","Runs on","GPU-hours","Why this way"],[
  ["Training, evaluation","H100, reserved",V.h100_hours,"adapt speech, fine-tune"],["Batch call review","L40S, at night",V.batch_hours,"throughput doubles by H4"],
  ["Live voice reminders","L40S, 8 am to 7 pm",V.voice_hours,"16 calls on one GPU"],["Development, tests","L40S, always on",V.dev_hours,"2 GPUs for regression tests"],
  ["Hard-case summaries","Claude on Bedrock","API","2% of minutes, India region"]],{hh:26,rh:26,name:"workloads",align:["LEFT","LEFT","RIGHT","LEFT"]});
sT(p2,14,210,840,18,"Review waits for the night batch; voice runs only inside the 8 am to 7 pm calling window.",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const p3=pnl(s,116,648,860,196,"ENERGY, CARBON AND WATER BY HALF-YEAR");
tbl(p3,14,46,[262,110,110,110,110,110],["Base case","H1","H2","H3","H4","24 months"],V.env,{hh:26,rh:24,name:"footprint",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"],bold:[5]});
const p4=pnl(s,988,648,868,196,"THREE TARGETS WE REPORT EVERY MONTH");
tbl(p4,14,46,[262,140,150,288],["Target","Month 6","Month 24","How"],V.targets,{hh:26,rh:26,name:"targets",align:["LEFT","RIGHT","RIGHT","LEFT"]});
sT(p4,14,160,840,18,"Read from provider meters and certificates, and logged in each lender's evidence file.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p5=pnl(s,116,854,1100,178,"COST, SPEED AND CARBON: WHAT EACH CHOICE GIVES UP");
hgrid(p5,14,46,["Portal GPUs, not on demand","Cloud bridge, months 1 to 4","Distilled small models","Mumbai, near the buyers"],["Cost","Speed","Carbon"],[
  [{t:V.prov_save+" cheaper",f:C.goodTint},{t:"6 weeks to allocate",f:C.alertTint,tc:C.alert},{t:"same",f:C.white}],
  [{t:"1.6x price, 4 months",f:C.alertTint,tc:C.alert},{t:"live in week 1",f:C.goodTint},{t:"same",f:C.white}],
  [{t:"half the GPU-hours",f:C.goodTint},{t:"3 months to distil",f:C.alertTint,tc:C.alert},{t:"half the energy",f:C.goodTint}],
  [{t:"same",f:C.white},{t:"low latency to lenders",f:C.goodTint},{t:"needs green contracts",f:C.alertTint,tc:C.alert}]],{lw:330,cw:244,rh:24,hh:24,corner:"Choice",name:"tradeoffs"});
const p6=pnl(s,1228,854,628,178,"FOUR NUMBERS BEHIND THE CHOICE");
[[V.west_dc,"of capacity: Mumbai, Pune"],[V.gpu_portal,"GPU rent, 24 months"],[V.co2_drop,"less CO2e at 70% renewable"],[V.subsidy_up,"40% subsidy, upside only"]].forEach((r,i)=>
  tile(p6,14+302*(i%2),46+64*Math.floor(i/2),292,62,r[0],r[1],{size:24,ly:38}));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,0,"A1","APPENDIX",220,"Financial sketch: "+V.budget+" ends month 24 at "+V.cash24+" after "+V.rev24+" of revenue and "+V.spend24+" of spend, leaving "+V.runway+" of runway",
  "Source: team model "+V.hash+" (T7 to T11, T16 to T18) | runway = cash at month 24 / average net burn of months 19 to 24 | grants excluded from the base case, as the case packet asks",{labels:RIBAP,counterW:120});
const p1=pnl(s,64,316,1060,420,"FOUR HALF-YEARS, ₹ CR, BASE CASE");
tbl(p1,14,46,[262,148,148,148,148,178],["Item","M1 to M6","M7 to M12","M13 to M18","M19 to M24","24 months"],V.fin,
  {hh:26,rh:26,name:"sketch",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"],bold:[5],fills:[null,null,C.accentTint,null,null,null,null,null,null,C.tint,C.goodTint]});
const p2=pnl(s,1136,316,720,420,"CASH, ₹ CR, MONTH BY MONTH");
const g=lcS(p2,14,50,692,316,[{values:V.path_bull,color:C.good,label:"Bull"},{values:V.path_base,color:C.primaryDeep,label:"Base"},{values:V.path_gate,color:C.accent,label:"Bear, cut"},{values:V.path_mf_clip,color:C.alert}],
  V.path_base.map((_,i)=>i%6===0&&i>0?"M"+i:""),{yMin:0,yMax:50,yTicks:[0,10,20,30,40,50],padL:44,padR:120});
dashedV(p2,g.X(18),g.Tp,g.B-g.Tp,C.ink,2); sTL(p2,g.X(18)+6,g.Tp,18,"Month-18 milestone",{family:"Inter",style:"Bold"});
sTL(p2,g.X(V.mf_out_n)-250,g.B-30,18,"Model-first: out in "+V.mf_out,{family:"Inter",style:"Bold",color:C.alert});
sT(p2,14,384,692,18,"Base ends at "+V.cash24+"; the bear case with month-18 cuts ends at "+V.gate_cash+".",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const p3=pnl(s,64,748,560,284,"FOUR SCENARIOS AT MONTH 24");
tbl(p3,14,46,[124,100,100,108,100],["Measure","Base","Bear","Bear, cut","Bull"],V.scen,{hh:26,rh:26,name:"scenarios",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"]});
note(p3,14,212,532,"Milestone: ",V.mile+"; if missed, hiring stops at H3 levels.",{lc:C.primaryDeep});
const p4=pnl(s,636,748,640,284,"RUNWAY AT MONTH 24: WHAT MOVES IT, MONTHS");
torS(p4,14,52,612,V.tor.map(r=>({label:r[0],lo:r[1],hi:r[2]})),V.runway_n,{lw:210,rh:24,min:8,max:14,ticks:[8,11,14]});
const p5=pnl(s,1288,748,568,284,"UNIT ECONOMICS AND THE SPLIT");
[[V.acv,"contract value"],[V.cac,"cost to win one"],[V.payback,"payback"],[V.gm,"gross margin"],[V.ltvcac,"LTV to CAC"],[V.reserve,"reserve"]].forEach((r,i)=>
  tile(p5,14+182*(i%3),46+70*Math.floor(i/3),174,64,r[0],r[1],{size:24,ly:36}));
sT(p5,14,190,540,18,"Split, ₹ Cr: "+V.alloc.map(r=>r[0]+" "+r[1]).join(", ")+" = "+V.alloc_sum,{family:"Inter",style:"Semi Bold"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s06.js -->
```js
{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,1,"A2","APPENDIX",220,"Every number traces to the case packet, a stated assumption or a cited source, and the model passes "+V.checks+" checks",
  "Source: team model "+V.hash+" | research document Appendix A (bibliography) and section 22 (assumptions register) | RBI, MeitY, CERT-In and IndiaAI notifications as listed",{labels:RIBAP,counterW:120});
const p1=pnl(s,64,316,900,380,"ASSUMPTIONS THAT MOVE THE ANSWER");
tbl(p1,14,46,[64,476,112,112,108],["ID","Assumption","Bear","Base","Bull"],V.arows,{hh:26,rh:24,name:"assumptions",align:["LEFT","LEFT","RIGHT","RIGHT","RIGHT"]});
const p2=pnl(s,976,316,880,380,"GOVERNMENT SUPPORT: UPSIDE ONLY, AS THE CASE ASKS");
tbl(p2,14,46,[330,372,150],["Scheme","What it is worth to us","Treatment"],V.gov,{hh:26,rh:44,name:"support",align:["LEFT","LEFT","LEFT"]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p3=pnl(s,64,708,640,324,"RULES WE BUILD TO");
tbl(p3,14,46,[190,134,288],["Rule","Date","What it asks of us"],[["RBI recovery code","Aug 2022; 2026 draft","8 am to 7 pm, no threats; record calls"],
  ["RBI FREE-AI framework","Aug 2025","board AI policy, vendor terms, audit logs"],["DPDP Act and Rules","Nov 2025 to May 2027","notice, consent, purpose limits"],
  ["IT Rules amendment","Feb 2026","label synthetic voice, keep provenance"],["CERT-In directions","Apr 2022","report incidents within 6 hours"]],{hh:26,rh:44,name:"rules"});
const p4=pnl(s,716,708,560,324,"CUSTOMER VALIDATION PLAN (NOT YET RUN)");
tbl(p4,14,46,[200,76,256],["Who","Count","What we test"],[["Heads of collections","8","cost of a breach today"],["Compliance heads","6","what inspectors ask for"],
  ["CTOs and CISOs","4","what blocks a review"],["Agency owners","6","price after the subsidy"],["Free call audits","3","accuracy on their calls"]],{hh:26,rh:30,name:"validation",align:["LEFT","RIGHT","LEFT"]});
note(p4,14,232,532,"Status: ","nothing here has been run; interviews start in week 1 and can cut a weak lever.",{lc:C.alert});
const p5=pnl(s,1288,708,568,324,"FORMULAS, SHORT FORMS, SOURCES");
note(p5,14,46,540,"Energy = ","GPU-hours x kW x draw x PUE",{fill:C.tint,lc:C.primaryDeep});
note(p5,14,80,540,"CO2e = ","energy x "+V.ef+" kg/kWh x (1 − renewable share)",{fill:C.tint,lc:C.primaryDeep});
note(p5,14,114,540,"Water = ","IT energy x WUE + energy x off-site L/kWh",{fill:C.tint,lc:C.primaryDeep});
const b=T(p5,14,150,540,16,"ACV contract value a year; ARR annual recurring revenue; CAC cost to win a customer; DPDP Digital Personal Data Protection; FREE-AI RBI's responsible AI framework; NBFC non-bank lender; PUE power usage effectiveness; WUE water use effectiveness.\nSources: case packet; RBI; MeitY; IndiaAI; CEA; Hugging Face; Yotta; Sarvam; AWS. Full list: research document, Appendix A.",{family:"Inter",style:"Semi Bold"}); b.name="BIBLIO";
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: deck/slides/s07.js -->
```js
{ const s = await figma.getNodeByIdAsync("S7"); wipe(s);
TL(s,0,70,104,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.ink,centerAt:960});
const c=layered(s,260,250,1400,214,C.primaryDeep,"CARD: therefore");
TL(c,28,14,26,"THEREFORE",{color:C.accent});
T(c,28,58,1344,22,"Setu AI should win mid-sized lenders in Mumbai and Pune first, selling evidence that every collection call followed the rules, on rented models and rented GPUs: "+V.cust24+" lenders, "+V.arr24+" of ARR and "+V.cash24+" in the bank at month 24 in our base case.",{family:"Inter",style:"Semi Bold",color:C.white});
[V.cust24+" lenders by month 24",V.runway+" of runway left","0 GPUs owned, "+V.co2l+" of CO2e"].forEach((g,i)=>bx(c,28+448*i,140,430,48,g,{fill:C.accent,fam:"Poppins",st:"Bold",size:20}));
TL(s,0,496,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
teamBT(s,420,560,[300,600,180]);
[["SVC",100],["Econ-Arena",170],["DTU",100],["GGSIPU",100],["Ramjas College",100]].reduce((x,l)=>{ logoSlot(s,x,792,l[1],72,l[0]); return x+l[1]+24; },960-(570+96)/2);
TL(s,0,890,22,"The research document and the model back every number on these slides",{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:960});
sTL(s,0,930,18,"harshkawatra11@gmail.com  |  Team IdeaForge  |  Econ-Arena, Blisspoint'26-27, Sri Venkateswara College",{family:"Inter",style:"Bold",centerAt:960});
srcLine(s,"Source: team model "+V.hash+" | Econ-Arena case packet, October 2026");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

## D2. Figma setup, validators, logos, PDF and copy checks

<!-- FILE: deck/setup.js -->
```js
// Creates (or finds) exactly seven slides in a new Slides file, names them, checks fonts. Safe to rerun: it never makes a second set.
let grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
if (grid === undefined) { figma.createSlide(); grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID"); }
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 7 && guard++ < 10) figma.createSlide();
const names = ["01 Cover", "02 Go-to-market and budget", "03 Product and moat", "04 Environmental strategy", "05 A1 Financial sketch", "06 A2 Assumptions, rules and sources", "07 Thank You"];
const slides = all(); slides.slice(0, 7).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 7).map(s => s.id), extra: slides.slice(7).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
```
<!-- END FILE -->

<!-- FILE: deck/_v1.js -->
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const ch=s.children.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.n,b:b.n}); }
  for(const c of s.children){ if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n:c.name,x:Math.round(c.x),y:Math.round(c.y),w:Math.round(c.width),h:Math.round(c.height)});
    if(KEY.test(c.name) && c.y+c.height>1038) issues.push({s:s.name,t:"belowContent",n:c.name}); }
  const hl=s.children.find(c=>c.name==="HEADLINE"); if(hl&&hl.height>113) issues.push({s:s.name,t:"headline3lines"});
  const src=s.children.find(c=>c.name==="SOURCE"); if(src&&src.height>22) issues.push({s:s.name,t:"source2lines"});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({s:s.name,t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({s:s.name,t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,80)};
```
<!-- END FILE -->

<!-- FILE: deck/_sweeps.js -->
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const MUST=MUSTLIST;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutioni","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today's","ever-evolving","imagine","ecosystem","testament","elevat","what if","picture this","dive into","groundbreaking","state-of-the-art","plethora","myriad","underscore","showcase","foster","bolster","spearhead","nuanced","intricate","meticulous","realm","fast-paced","in conclusion","it is important to note","game changer","unparalleled","enhance","vibrant","additionally","align with","bolstered","deep dive","enduring","garner","interplay","valuable","quietly","gate"];
const ABSENT=["Anuj","Aakriti","Ranvir","SwiftKart","SwasthyaGrid","HarvestBox","Dream11","Paytm","Liminal","Satoshi","Alchemy","TiO2","Eurogrip","ONL Trade","Arthik","TODO","TBD","Lorem","xyz","undefined","NaN","Rs ","Rs.","ChatGPT","Project "];
let radiusFixed=0, money=0; const fontLow=[]; const copy=[]; const density=[]; let all="";
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if(nd.name==="CARD: MONEYSHOT") money++; if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||t.name==="BIBLIO"||c.startsWith("Source:")||(t.name==="SEC"&&t.fontSize>=18); let p=t.parent;
      while(p && !ok){ if(p.name && (p.name.startsWith("LOGO:")||p.name.startsWith("IMG:"))) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[—–]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, moneyshot:money, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density, slides:ids.length};
```
<!-- END FILE -->

<!-- FILE: deck/logo_rects.js -->
```js
// Replace MAP with {"<slot id>": [pngWidth, pngHeight], ...} (at most 8 slots a call). Creates an IMG rectangle fitted to the
// PNG's aspect inside each LOGO or IMG slot, removes the slot's caption and dash pattern, and returns the rectangle ids for upload_assets.
await figma.loadFontAsync({family:"Inter",style:"Semi Bold"});
const MAP = {}; const out = [];
for (const [id, wh] of Object.entries(MAP)) { const slot = await figma.getNodeByIdAsync(id); if (!slot) { out.push({id, error: "missing"}); continue; }
  slot.children.filter(c => c.type === "TEXT").forEach(c => c.remove()); try { slot.dashPattern = []; } catch (e) {}
  const W = slot.width - 6, H = slot.height - 6, k = Math.min(W / wh[0], H / wh[1]), w = Math.max(4, wh[0] * k), h = Math.max(4, wh[1] * k);
  const r = figma.createRectangle(); slot.appendChild(r); r.resize(w, h); r.x = (slot.width - w) / 2; r.y = (slot.height - h) / 2;
  r.fills = []; r.strokes = []; r.name = "IMG"; out.push({slot: slot.name, rect: r.id, w: Math.round(w), h: Math.round(h)}); }
return out;
```
<!-- END FILE -->

<!-- FILE: deck/make_pdf.py -->
```python
"""Build deck/TeamIdeaForge_EconArena.pdf from deck/shots/hi_s01.png .. hi_s07.png, one 1920 x 1080 page each."""
import pathlib, fitz
D = pathlib.Path(__file__).resolve().parent; doc = fitz.open()
for n in range(1, 8):
    p = D / "shots" / ("hi_s%02d.png" % n); assert p.exists(), p
    page = doc.new_page(width=1920, height=1080); page.insert_image(page.rect, filename=str(p))
out = D / "TeamIdeaForge_EconArena.pdf"; doc.save(str(out)); print("pages", doc.page_count, "->", out)
```
<!-- END FILE -->

<!-- FILE: deck/checks.py -->
```python
"""Cross-checks before the deck critic: dashes, '!', 'Rs' before a digit, placeholders and invented-name candidates in slide-copy.md."""
import io, re, pathlib
D = pathlib.Path(__file__).resolve().parent; t = io.open(D / "slide-copy.md", encoding="utf-8").read()
print("dashes", len(re.findall("[—–]", t)), "excl", t.count("!"), "rs", len(re.findall(r"\bRs\.? ?\d", t)),
      "placeholders", len(re.findall(r"TODO|TBD|Lorem|Insert|xyz|PLACEHOLDER", t)))
ALLOW = {"Team IdeaForge", "Delhi Technological University", "Guru Gobind Singh Indraprastha University", "Ramjas College", "Sri Venkateswara College",
         "Setu AI", "Econ-Arena", "Team Members", "Team Leader", "Gursimran Kaur", "Harsh Kawatra", "Dayita Arora", "Tamil Nadu", "Head of", "Bedrock India",
         "Anthropic Economic Index", "Government of Maharashtra", "Large IT", "Global AI", "Tech Mahindra", "Fund of Funds", "Startup India"}
cands = sorted(set(re.findall(r"\b(?:[A-Z][a-z]+\s){1,3}[A-Z][a-z]+\b", t)) - ALLOW)
print("name candidates to review (each must be a real organisation, a case term or a plain phrase; never a coined programme name)", len(cands))
for c in cands: print("  ", c)
```
<!-- END FILE -->

## X1. Research tooling

<!-- FILE: research/build_sources.py -->
```python
# ===== ECON-ARENA SOURCES BUILDER v1 (from the Arthik Khayal builder) =====
"""Parse research/raw/R-B.md .. R-L.md, build research/raw/sources.md (one row per unique URL, S01 upward, with the R-IDs
citing it) and research/raw/rid_to_sid.json. Run: python -X utf8 econarena-svc/research/build_sources.py"""
import re, io, pathlib, json
from collections import OrderedDict
R = pathlib.Path(__file__).resolve().parent; RAW = R / "raw"; LANES = "BCDEFGHIJKL"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def rows_of(text, lane):
    out = []; L = text.split("\n"); i = 0
    while i < len(L):
        if L[i].strip().startswith("| R-ID |"):
            i += 2
            while i < len(L) and L[i].strip().startswith("|"):
                c = [x.strip() for x in L[i].strip().strip("|").split("|")]
                if len(c) >= 8 and c[0] and not c[0].startswith("-"):
                    out.append({"rid": c[0], "fact": c[1], "title": c[2], "publisher": c[3], "url": c[4], "accessed": c[5], "snippet": c[6], "status": c[7], "lane": lane})
                i += 1
        else: i += 1
    return out
def nurl(u):
    u = u.strip().rstrip(").,;")
    return None if u.lower() in ("n/a", "na", "", "none") else u
def main():
    rows = []
    for lane in LANES:
        f = RAW / ("R-%s.md" % lane)
        if not f.exists(): print("MISSING", f); continue
        r = rows_of(rd(f), lane); print("lane %s: %d rows" % (lane, len(r))); rows += r
    print("TOTAL ROWS", len(rows))
    tally = {}
    for r in rows: k = r["status"].split("(")[0].split("[")[0].strip(); tally[k] = tally.get(k, 0) + 1
    print("STATUS TALLY", json.dumps(tally))
    by = OrderedDict()
    for r in rows:
        u = nurl(r["url"])
        if not u: continue
        by.setdefault(u, {"title": r["title"], "publisher": r["publisher"], "accessed": r["accessed"], "rids": []})["rids"].append(r["rid"])
    out = ["# Sources: every unique URL cited across the eleven research lanes", "", "Built by `research/build_sources.py`. One row per unique URL.", "",
           "| S-ID | Publisher (date) Title | URL | Accessed | Lane rows |", "|---|---|---|---|---|"]; sid = {}
    for i, (u, rec) in enumerate(by.items(), 1):
        sid[u] = "S%02d" % i
        out.append("| %s | %s | %s | %s | %s |" % (sid[u], (rec["publisher"] + " " + rec["title"]).replace("|", "/").strip(), u, rec["accessed"], ", ".join(rec["rids"])))
    (RAW / "sources.md").write_text("\n".join(out) + "\n", encoding="utf-8", newline="\n"); print("wrote sources.md with %d unique sources" % len(by))
    look = {}
    for r in rows:
        u = nurl(r["url"])
        if u and u in sid:
            rid = r["rid"]
            if rid.upper().startswith("R-"): rid = rid[2:]
            if rid.upper().startswith(r["lane"]): rid = rid[1:]
            look[r["lane"] + rid] = sid[u]
    (RAW / "rid_to_sid.json").write_text(json.dumps(look, indent=1, ensure_ascii=False), encoding="utf-8"); print("wrote rid_to_sid.json with %d mappings" % len(look))
if __name__ == "__main__": main()
```
<!-- END FILE -->

<!-- FILE: research/assemble.py -->
```python
# ===== ECON-ARENA ASSEMBLE v1 (from the Arthik Khayal and Alchemy assemblers) =====
"""Assemble setu-ai-research.md from the writer parts and generated appendices, then run the acceptance checks.
  python -X utf8 econarena-svc/research/assemble.py md     assemble and check
  python -X utf8 econarena-svc/research/assemble.py pdf    build build_pdf.py from the IIM Lucknow renderer and render the PDF"""
import re, sys, json, io, pathlib, subprocess
R = pathlib.Path(__file__).resolve().parent; EA = R.parent; ROOT = EA.parent; NAME = "setu-ai-research"
HEADER = """# Setu AI: Win the Lenders First

**Do not train a base model. Sell mid-sized lenders in Mumbai and Pune evidence that every collection call followed the rules, on rented models and rented GPUs: 28 paying lenders and ₹6.6 Cr of ARR by month 24 in our base case, with ₹17.2 Cr in the bank and 11.0 months of runway left**

Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader) · Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member) · Dayita Arora (Ramjas College, University of Delhi, Member)

Prepared for: Econ-Arena, a strategy case competition at Blisspoint'26-27, Sri Venkateswara College, University of Delhi, October 2026

---

"""
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "make no mistake", "seamless", "holistic", "tapestry",
       "paradigm", "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative", "synergy", "world-class",
       "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving",
       "imagine if", "testament", "realm", "fast-paced", "groundbreaking", "state-of-the-art", "plethora", "myriad", "delves", "underscores", "showcases",
       "it is important to note", "in conclusion", "landscape of", "ecosystem", "additionally", "align with", "bolstered", "deep dive", "enduring",
       "garner", "interplay", "intricate", "meticulous", "quietly", "vibrant", "stands as", "serves as", "boasts"]
MIN_WORDS, MIN_TABLES = 90000, 160
TAGTOK = r"(C-[A-Za-z0-9]+|A\d{2}|M|T\d{1,2}|S\d+|[B-L]\d{2,3})"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def demote(t): t = re.sub(r"^# .*\n", "", t, count=1); return t.strip()
def md():
    body = "\n\n".join(rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEFG")
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \| (.*?) \|", ln)
        if m: reg[m.group(1)] = (m.group(2), m.group(3))
    toks = set(tok.strip() for grp in re.findall(r"\[([^\]]+)\]", body) for tok in grp.split(",") if tok.strip())
    cited = sorted({t for t in toks if re.fullmatch(r"S\d+", t)}, key=lambda s: int(s[1:])); missing = [c for c in cited if c not in reg]
    rid = json.loads(rd(R / "raw" / "rid_to_sid.json"))
    extra = {rid[t] for t in toks if re.fullmatch(r"[B-L]\d+", t) and t in rid}
    allc = sorted(set(cited) | extra, key=lambda s: int(s[1:]))
    app_a = ("| ID | Source | Available at |\n|---|---|---|\n" + "\n".join("| %s | %s | %s |" % (s, reg[s][0], reg[s][1]) for s in allc if s in reg) +
             "\n\nAssumption tags (`[A17]` style) resolve to section 36 and Appendix B (model table T1). Case tags (`[C-G1]` style) resolve to "
             "`case/01-case.md`. Raw research rows (`[F07]` style) resolve through `research/raw/R-F.md` and are listed here through their URL.")
    doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\nSources were opened and checked in October 2026. Only sources cited in the text are listed.\n\n" + app_a +
           "\n\n## Appendix B: Model tables\n\n" + demote(rd(EA / "model" / "model_tables.md")) + "\n\n" + rd(R / "parts" / "appendix-C.md").strip() + "\n\n" +
           rd(R / "parts" / "appendix-D.md").strip() + "\n")
    io.open(R / (NAME + ".md"), "w", encoding="utf-8", newline="\n").write(doc)
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M); h2 = re.findall(r"^## (\d+)\. ", body, re.M)
    authored = body + "\n\n" + rd(R / "parts" / "appendix-C.md") + "\n\n" + rd(R / "parts" / "appendix-D.md")
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)), dashes=len(re.findall("[—–]", authored)),
               exclamations=authored.count("!"), question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(re.escape(b), authored, re.I)) for b in BAN if re.search(re.escape(b), authored, re.I)},
               q_outside_38=re.split(r"^## 38\.", authored, flags=re.M)[0].count("?"), not_x_but_y=len(re.findall(r"\bnot (?:just|only|merely)\b", authored, re.I)),
               h2_numbered=len(h2), answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), missing_S=missing,
               dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
               ai_statement=len(re.findall(r"generated (by|with|using) (AI|artificial intelligence)|AI-use|AI use disclosure", doc, re.I)),
               invented=sorted(set(re.findall(r"\bProject [A-Z][a-z]+\b", authored))),
               untagged_number_lines=sum(1 for ln in body.splitlines() if re.search(r"₹|\d%|\d,\d{3}", ln) and not ln.startswith(("|", "#", ">", "Exhibit for the deck")) and not re.search(r"\[" + TAGTOK, ln)))
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0 and not res["question_headings"]
          and not res["banned"] and res["answers"] >= res["h2_numbered"] and not res["missing_S"] and not res["dup_headings"] and res["ai_statement"] == 0
          and res["untagged_number_lines"] <= 40 and res["q_outside_38"] == 0 and res["not_x_but_y"] == 0 and not res["invented"])
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL"); sys.exit(0 if ok else 1)
def pdf():
    src = rd(ROOT / "iim-lucknow-pivot" / "research" / "build_pdf.py")
    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:50], src.count(a)); src = src.replace(a, b)
    rep("dream11-pivot-research", NAME, 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge", "Setu AI: Win the Lenders First  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}", "else 'Setu AI: Win the Lenders First'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "Econ-Arena  |  Blisspoint'26-27, Sri Venkateswara College  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#6B4A2F; --pd:#2E1D14; --a:#D9B26F; --tint:#F6E8D2;", 1)
    rep("color: #C4161C; }", "color: #6B4A2F; }", 1)
    rep("Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi<br><br>",
        "Harsh Kawatra, Delhi Technological University (DTU), Team Leader<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University (GGSIPU), Member<br>Dayita Arora, Ramjas College, University of Delhi, Member<br><br>", 1)
    src, k = re.subn(r"^TAG = re\.compile\(.*$", lambda m: 'TAG = re.compile(r"\\[((?:C-[A-Za-z0-9]+|A\\d{2}|M|T\\d{1,2}|S\\d+|[B-L]\\d{2,3})(?:, ?(?:C-[A-Za-z0-9]+|A\\d{2}|M|T\\d{1,2}|S\\d+|[B-L]\\d{2,3}))*)\\]")', src, count=1, flags=re.M)
    assert k == 1, "TAG line"
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:]); p = R / (NAME + ".pdf"); print("PDF", p.exists() and p.stat().st_size)
if __name__ == "__main__": {"md": md, "pdf": pdf}[sys.argv[1]]()
```
<!-- END FILE -->

## X2. The case, transcribed with IDs (verbatim; the case writes "Rs", our analysis writes ₹)

<!-- FILE: case/01-case.md -->
```markdown
# Econ-Arena, Blisspoint'26-27 (Sri Venkateswara College): the case, transcribed with reference IDs

Source file: `econarena-svc/6ad76ad833899_econ-arena_case_problem_final.pdf` (5 pages). Transcribed verbatim; IDs added for tagging.

## Overview (page 1)

- **C-O1** You are the strategy team at Setu AI, a new Indian AI company with Rs 50 crore in the bank and no data centre of its own.
- **C-O2** Setu wants to become a trusted Indian AI company, but it competes with better-funded Indian players and global labs.
- **C-O3** Your job is to decide where it should win first, how it will sell, what it will build, and why rivals cannot simply copy it.

## Fixed rules (page 1)

- **C-R1** Rs 50 crore must last 18–24 months. Assume no further funding until you reach a milestone that you define.
- **C-R2** Compute may be rented, shared or subsidised, but it may not be owned.
- **C-R3** Pick one main industry and one launch region. A second may be added later, but you must state what triggers it.
- **C-R4** Use the facts in this packet. If you bring in other numbers, name the source.

## Your three tasks (pages 1 and 2)

Task 1: Go-to-market and budget
- **C-T1a** Which industry and which region do you enter first, and why that pair?
- **C-T1b** Who is the buyer, how long is the sales cycle, and what do your first three customers look like?
- **C-T1c** How do you reach them (direct sales, partners or self-serve), and how do you market without a big brand?
- **C-T1d** Show how the Rs 50 crore is split across people, compute, sales, marketing, data, compliance and reserve. The total must equal Rs 50 crore.

Task 2: Product and moat
- **C-T2a** What exactly does Setu build, and what does it buy or borrow?
- **C-T2b** What is your moat? Name two or three advantages and say how long each takes to build.
- **C-T2c** Which advantages are weak, and why could a bigger rival copy them within 12 months?

Task 3: Environmental strategy
- **C-T3a** Where will compute run, what type of provider will be used, and why?
- **C-T3b** What are the estimated energy, water, and carbon impacts over 24 months, and what are 2–3 measurable targets?
- **C-T3c** What are the main trade-offs between cost, speed, and environmental impact?

Financial sketch (one page)
- **C-FS** Show customers, revenue, spend and cash for four half-years, and state how many months of runway remain at the end of month 24.

## Facts you may use, as of October 2026 (page 3)

- **C-F0** These come from public reports and change quickly. Treat them as a starting point, and say so if you assume something different.
- **C-G1** IndiaAI compute portal: More than 38,000 GPUs were onboarded by March 2026 and are rented to eligible startups at roughly Rs 65–92 per GPU-hour, with up to 40% additional subsidy for approved projects. Requires DPIIT recognition; large requests go to a committee. Government target: 100,000 GPUs by December 2026. High-end GPUs cost more per hour.
- **C-G2** IndiaAI Mission: Total outlay of about Rs 10,372 crore. Foundation-model support has already gone to 12 teams.
- **C-G3** Startup India Fund of Funds 2.0: Rs 10,000 crore, invested only through SEBI-registered venture funds, never directly in startups.
- **C-G4** RDI Scheme: Rs 1 lakh crore over six years of long-term, low-interest finance for deep tech. Better suited to teams that are further along than a seed stage.
- **C-G5** Maharashtra AI Policy 2026: AI venture fund of Rs 500 crore; incubator grants of up to Rs 1 crore; 2,000 GPUs; 20% implementation subsidy for 5,000 small firms. Other states have smaller AI missions.
- **C-G6** DPDP Act and Rules: Rules notified in November 2025; full compliance due May 2027; penalties of up to Rs 250 crore. Consent systems are needed from November 2026.
- **C-G7** IT Rules amendment (February 2026): New duties for "synthetically generated information", such as AI-made text, voice and images.
- **C-G8** India has no single AI law; the rules are spread across several laws. Grants are not guaranteed income, so show them as upside only.

## Regions: what is measured (page 4)

| ID | Region | Data-centre capacity | AI use signal |
|---|---|---|---|
| C-RG1 | West | Mumbai 846 MW (46% of India); Pune 182 MW | Maharashtra: 15.5% of India's Claude.ai use |
| C-RG2 | South | Chennai 320 MW (18%); Hyderabad took 11% of new demand in H1 2026 | Tamil Nadu 13.2%; Karnataka 12.7% |
| C-RG3 | North | Delhi-NCR 191 MW (about 10%) | Delhi 10.5% |
| C-RG4 | East | Small; Kolkata is a minor market | No reliable figure; Odisha has announced an AI Mission |

- **C-RG5** Sources: Savills via Communications Today and Anthropic Economic Index. Claude.ai use reflects a single product, so treat it as a proxy rather than a measure of total AI use. Working out which industries dominate each region is left to you.

## Industries and players (page 4)

- **C-I1** Banking and financial services is the most mature user of AI, though fragmented data holds it back. IT services, global capability centres and retail also have many live use cases. Telecom, media and manufacturing reached an advanced stage in Nasscom's 2024 index. Healthcare lags, with weak AI risk processes. A vendor report suggests that only 23% of firms have formal AI governance, but this is secondary data.
- **C-P1** Players you may meet: Sarvam AI, Krutrim and Gnani.ai (all Bengaluru); BharatGen (IIT Bombay-led, open-source models); Soket AI Labs; Fractal; Tech Mahindra; Yellow.ai; Haptik; Uniphore; large IT services firms; and global AI labs. Funding figures vary by source (Inc42, Bloomberg). Research each one before you claim a gap.

## What to submit and how you are scored (page 5)

- **C-S0** Submit a deck of no more than 10 slides and a one-page financial sketch, then defend both in a short question round with the judges.

| ID | Criterion | Weight |
|---|---|---|
| C-S1 | Industry and region choice, backed by evidence | 20 |
| C-S2 | Go-to-market and how you reach paying customers | 20 |
| C-S3 | Budget and financials that add up and match your plan | 20 |
| C-S4 | Product and moat | 20 |
| C-S5 | Competitor analysis | 15 |
| C-S6 | Smart use of government support and compliance | 5 |

- **C-N1** Round 1: Submit 3 core + 2 appendix slides (3+2), giving a basic solution outline for all three case problems. Results are out on 29 October 2026.
- **C-N2** Final Round: Shortlisted teams work on the same case problem and build a comprehensive 8 core + 3 appendix (8+3) deck.
```
<!-- END FILE -->

## X3. Bootstrap

<!-- FILE: extract.py -->
```python
"""Extract every embedded file from econarena-svc/PLAN.md into econarena-svc/. Run from the repo root:
python -X utf8 econarena-svc/extract.py"""
import re, io, pathlib
EA = pathlib.Path(__file__).resolve().parent; t = io.open(EA / "PLAN.md", encoding="utf-8").read()
n = 0
for m in re.finditer(r"<!-- FILE: (\S+) -->\n```\w+\n(.*?)\n```\n", t, re.S):
    p = EA / m.group(1); p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", m.group(1))
print("files", n)
```
<!-- END FILE -->
