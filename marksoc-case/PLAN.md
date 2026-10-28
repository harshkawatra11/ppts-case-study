# Project DOBAARA (MarKSoc DTU Case Competition 2026, case partner CrackNontech): solved case, research deliverable and native Figma deck

> **Who executes this.** A main agent (Sonnet class is enough) plus Sonnet sub-agents dispatched with the Agent tool
> (`subagent_type: "general-purpose"`, `model: "sonnet"`), at most three at once. **The case is already solved here**:
> the recommendation, the economics model and every locked number, every research section title, all twelve slide
> scripts, every prompt and every check. The job is execution, not design. When a step has a "Done when" test, do not
> move on until it passes. When something in this plan conflicts with root `CLAUDE.md`, this plan wins (it carries the
> user's newer decisions, section 1.2).
>
> **What this plan produces**, all under `marksoc-case/` (repo root `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`):
> (1) `model/dobaara_model.py` with `model_outputs.json`, `model_tables.md` (T1 to T21) and `deck/values.json`;
> (2) eight verified context-research lane files and a source register; (3) `research/dobaara-research.md` plus HTML and
> PDF, at least 70,000 words and 130 tables, humanised; (4) a 12-slide native Figma Slides deck in a new file: cover with a
> real mind map (logo slots for the real bodies the case names, native monograms for its fictional names), eight main
> slides (Summary, Economics, Trust, Customer, Options, Plan, Launch, Signals), two appendix slides (A1, A2), a thank-you
> slide; plus a PDF export; (5) `rebuild-card.md`, a two-page drill so every team member can rebuild the key numbers live
> (the case says shortlisted teams must, C-R5).
>
> **Verified at planning time (26 Oct 2026), in memory only, nothing written to disk:** the model prints 13 PASS lines,
> `CHECKS 13/13 HASH 9b3628d94d` and `FINDINGS ₹4,653 ₹2,524 ₹716 −14.1 8.1% | ['B1', 'B2'] Feb | GM 58.0 | E −54.1 5.6 5.6 | RR 4.5% | dQ1 −0.5 | plans 84 ok 5`;
> `deck/gen.py pre` builds the preamble from the existing libraries; all twelve slide scripts pass the offline Figma mock
> with `warnings: []` and `ISSUES 0` (top-level nodes per slide 22, 58, 51, 52, 50, 51, 51, 50, 55, 19, 21, 11; total nodes
> 135, 232, 292, 407, 224, 451, 206, 236, 179, 249, 230, 40); every build part is under 48,100 characters; `gen.py copy`
> prints `copy issues 0`; every embedded Python file compiles. If a first run does not reproduce these, something was
> retyped or the environment changed: stop and use section 13.
>
> **Redesign note (26 Oct 2026, after a first execution pass reached step M2).** The user reviewed the twelve offline
> previews and asked for three fixes, confirmed by AskUserQuestion: (1) slide 2's four KPI tiles read as flat and
> "vibecoded" — replaced with one giant dark hero card (the March swing, same `V.swing` numeral bug-fixed to drop a
> double plus sign) plus three smaller layered sticker tiles, varied in size and colour rather than four identical
> boxes; (2) slide 4's five-whys panel was a bullet list and its two bar charts repeated the same chart form, and its
> funnel panel felt thin — the five whys are now a `tbl()` with a coloured left strip per row (a table, not prose), the
> "what would make them buy" bars became a heat-coloured `hgrid()` for chart-type variety against the "why they left"
> bars, and the funnel panel gained a compact stage table (`STEP`/people/conversion) pairing the diagram with real
> numbers per the EY doctrine ("charts pair with tables"); (3) slide 5's family-buyer panel was a bullet list and its
> positioning panel's big two-line quote echoed slide 8's device — the persona is now a `tbl()` (Trait/Evidence), and
> the "line a customer remembers" now sits beside a small decorative kundli-square diagram (a local `kundli()` helper
> drawing a diamond-in-square chart motif, thematically tied to the word "kundli") at a smaller type size, instead of
> a full-width giant headline; (4) slide 6 got a smaller touch on both fronts the user asked for — the "Ours" row in
> the camps' heat grid now carries a gold left-edge accent strip, and the "CONCLUSIVELY" card's three loose text blocks
> became a `tbl()` (Rejected plan / The number that kills it / Verdict) nested in the same dark card. All four
> redesigns were re-validated the same way: `gen.py mock` on slides {2,4,5,6} returns `warnings: []` and `ISSUES 0`,
> `gen.py copy` returns `0`, and offline previews were re-rendered and inspected. Slides 1, 3, 7 to 12 are unchanged
> and were not touched. If execution had already passed step M2 before this note, redo M2 (`gen.py pre`, `mock`,
> `copy`, `preview`) and view the four changed previews again before continuing to C0.

## 0. How to read this plan

| Part | Sections | What it is |
|---|---|---|
| I | 1 to 2 | Context, the user's locked decisions, ground rules (the closed-data rule first) |
| II | 3 to 5 | The solved case: skill application, the argument, the plan, locked numbers, assumptions |
| III | 6 to 7 | Eight context-research lanes (B to I) and the research document specification |
| IV | 8 to 14 | Skill touchpoints, environment, step table, prompts, calibration, recovery, final checks, memory |
| V | 15 | The Figma deck: new file, build from the embedded scripts, validation, logos, export |
| VI | Embedded files | Extractor, case transcription, model, deck generator and helpers, twelve slide scripts, validators, research tooling |

### Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Main agent | Sonnet or better | Bootstrap, runs every script, every Figma call (one at a time), source register, dispatch, assembly, reports | Change the recommendation, a locked number, an H2 title or a slide's geometry outside the fix rules |
| Verifiers V-B to V-I | Sonnet, at most three at once | Open the seed sources in section 6, confirm or correct each fact, add rows | Invent a figure, quote or URL; write prose; touch the model |
| Writers W-A to W-F | Sonnet, at most three at once | Write their sections into `research/parts/`, then run the humanizer pass on their own file | Browse the web, change a number, put an outside number into an analysis section, invent a customer quote or interview |
| Critic CR | Sonnet | Scores the research and later the deck with the skill's critique rubric and the humanizer tells list | Rewrite sections or slides |

### The Sonnet execution contract

DO
1. Follow section 10 step by step. Log each step in `marksoc-case/build-log.md` with `STATUS: PASS` or `FAIL` and what was fixed.
2. Create files only by extraction (step B1). Never retype a code block from this plan.
3. Take every modelled number from `model/model_outputs.json`, `model/model_tables.md` or `deck/values.json`. Take every external fact from a VERIFIED or CORRECTED row in `research/raw/`, and use it only as context (2.1).
4. Invoke the `case-competition-deck` skill with the Skill tool at the touchpoints in section 8.1 and the `humanizer` skill at 8.2. Log each.
5. Load the Figma guidance before the first `use_figma` call (15.2) and pass `skillNames` on every call.

DO NOT
1. Do not change the recommendation, a locked number, an H2 title or an assumption except through section 5.3.
2. Do not let an outside number into the model, a results table, a slide or an analysis paragraph (case rule C-R1, FAQ C-F4). Outside facts live only in research sections 12 to 17 and the judge Q&A, labelled as context.
3. Do not invent interviews, customer quotes, survey results, test results or Tikau data. The only customer quote that exists is the one in the case (C-B2). The validation plan says "not yet run".
4. Do not write an em dash, an en dash, a hook, a rhetorical question, an exclamation mark or a banned word (2.2).
5. Do not coin a name for the strategy, a lever, a feature or a programme (user rule). Use the case's own words: "the Tikau Report" (B1), "Battery 85 and 12 month warranty" (B2), "the third lab shift", "Purana do, Tikau lo" (C). The positioning line is a requested deliverable (C-Q2), not a programme name.
6. Do not map the case's fictional names to real companies (never "PhoneBazaar, which is like Cashify"). Real refurbishers appear only as context in research section 17.
7. Do not add an AI-use statement. Do not commit or push, and never add a Co-Authored-By trailer (user memory rule). Do not modify anything outside `marksoc-case/` (reading other folders is fine). `lsr-caseforchange/` is a rejected entry: never read or copy it.

---

# PART I. CONTEXT AND RULES

## 1. Context

### 1.1 The brief (full transcription with IDs in `case/01-case.md`)

MarKSoc DTU's 2026 case competition (case partner CrackNontech) casts the team as a strategy team hired by Tikau, a fictional
refurbished-phone company in Noida [C-H1]. Tikau sells about 7,200 phones a month through its website, the MegaKart
marketplace and six NCR stores [C-B1], lost ₹1.7 crore of EBITDA in the last twelve months and must break even in March
2027 [C-B3]. Three camps disagree: the head of growth wants Fair-phone price cuts and more ads [C-B4], the lab cofounder wants
certification and a longer warranty [C-B5], store managers want trade in [C-B6]. The board gave ₹80 lakh of growth money for
January to March 2027 [C-B7] and set four tests [C-T1t to C-T4t]. Five questions [C-Q1 to C-Q5]; scoring is data 30%, customer
insight 20%, recommendation and trade offs 30%, marketing 20% [C-W1 to C-W4].

| Fact | Value | ID |
|---|---|---|
| Phones a month, channels | 7,200: ads 2,600, MegaKart 2,000, creators 900, stores 1,000, referrals 700 | C-B1, C-E3 |
| Last twelve months | net revenue ₹139 crore; EBITDA −₹1.7 crore; fixed costs ₹58 lakh a month | C-CO3, C-CO4 |
| Lab | tests 8,000, 10% fail, 7,200 sellable; Superb supply capped at 2,000 | C-E4a, C-E4b |
| Board tests | growth money ≤ ₹80 lakh; March EBITDA ≥ ₹0; March return rate ≤ 6.0%; every claim follows Exhibit 5 | C-T1t to C-T4t |
| Deliverable | one PDF: up to 8 main slides (first = executive summary) and up to 4 appendix slides; cover and thank you do not count; decision table in the main slides | C-S1, C-S2, C-F1 |
| Data rule | only the case's numbers; outside data earns no credit; stated assumptions are rewarded | C-R1, C-R3, C-F4, C-F7 |
| Live round | finalists present the exact PDF; any member can be asked to rebuild a number | C-R5, C-F18, C-F19 |

### 1.2 Decisions the user locked (do not relax any)

| Item | Decision |
|---|---|
| Slides | 12: cover, eight main (Summary, Economics, Trust, Customer, Options, Plan, Launch, Signals), two appendix (A1, A2), thank you |
| Team | TEAM IDEAFORGE: Harsh Kawatra (Delhi Technological University, Team Leader); Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member); Dayita Arora (Ramjas College, University of Delhi, Member). Email line: harshkawatra11@gmail.com |
| Primary segment | Family buyers (C-E1C), argued against the obvious pick (flagship on a budget) with the supply cap and the after-plan economics |
| Palette | MarKSoc blue and gold (embedded `deck/_palette.js`): primary #1F4E9A, primaryDeep #0B2A5B, accent #F5B700, alert #D7263D, good #1E8A4C, tint #DCE6F5, ink #0A0A0A |
| Names | Case names in the analysis (Tikau, PhoneBazaar, MegaKart, Sana Qureshi, Kabir Arora, Rohan Bedi). Fictional names are drawn as native monograms, never given a real logo. Real bodies the case names (MarKSoc DTU, CrackNontech, DTU, Sanchar Saathi, National Consumer Helpline, Counterpoint Research, GSMA) get logo slots with "no partnership or endorsement is implied" |
| Text sizes | The 22 pt floor in root `CLAUDE.md` is retired (user decision, carried from the latest decks): headlines 40 pt (34 minimum), panel titles 22 pt, numerals 24 to 112 pt, secondary text 18 pt named `SEC`; only `SOURCE` (14 pt), `FINEPRINT`/`BIBLIO` (16 pt) and logo, image or monogram captions are smaller |
| Cover | A real mind map with logo, image and monogram slots (not plain text, unlike the Satoshi Gate cover), no KPI-card row, team table; the same team table on the thank-you slide |
| Language | Humanised analytical storytelling: the `humanizer` skill is applied to all prose (research and slides). No em dashes, no hooks, no rhetorical questions, no AI phrasing |
| Research depth | No limit. Floors: 70,000 words and 130 tables. Depth references: `arthikkhayal-case/`, `eurogrip-case/`, `beyondtech-dcg/`, `iim-lucknow-pivot/`, `maudrik-policy/`, `mandamasterminds/`, `dreamforge-case/`. Never `lsr-caseforchange/` |
| Inspo decks (read only) | Prime `hOJVMGv9nIhDmayTT7DmOt` (Satoshi Gate); `e5VEexsLMhDampx7gvhFmM`; `vAIyXmljHlFDuwQo6RsoIN`; `APbOstO4SSU7iAjYIgEeSd`; `JLOOyohkQPUrwXEsxDKz4m` (Toing, the closest unit-economics analogue); Dream11 `YoiazGGOribfg69EjEDIlP`; SwiftKart (a winning entry) `7N3v6bAfmXYRrte0zChFDg`; Asian Paints `KJQkGsLgbeLU9vNy24p78y`; Arthik Khayal `UidfYOpqRKbPxXKJMhftJV` (the newest pipeline and cover style this deck follows) |
| Figma plan | `team::1564294484048272772` ("25/A16/057 HARSH KAWATRA's team", admin seat), confirmed by `whoami` at planning time |

### 1.3 Folder layout after the build

```
marksoc-case/
  6adca1651d1c0_project_dobaara_case_by_marksoc_dtu.pdf  Project_DOBAARA_FAQ.pdf   (exist, never modified)
  PLAN.md  extract.py  build-log.md  DECISIONS.md  rebuild-card.md
  case/01-case.md
  model/dobaara_model.py  model_outputs.json  model_tables.md
  research/raw/R-B..R-I.md  sources.md  rid_to_sid.json   parts/part-A..F.md  appendix-C.md  appendix-D.md
           build_sources.py  assemble.py  build_pdf.py  dobaara-research.md  .html  .pdf  critique.md
  deck/gen.py _palette.js _extras.js _v1.js _sweeps.js setup.js logo_rects.js make_pdf.py checks.py slides/s01..s12.js values.json
       (generated) preamble.js mock_figma.js values.js _x2.js _x3.js metrics.json derived/ build/ shots/ logos/
       slide-ids.json figma.md derivation.md overrides.json slide-copy.md critique.md TeamIdeaForge_ProjectDobaara.pdf
```

## 2. Ground rules

### 2.1 Content integrity: the closed-data rule comes first

1. **Every number in the model, every results table and every slide comes from the case or a stated assumption (A01 to
   A20).** The case says outside data earns no credit and conflicting numbers count against the team [C-R1, C-F4].
2. **External research is context, never input.** Facts from the lanes (tags `[S##]` or `[D07]`) may appear only in research
   sections 12 to 17 (each opens with a box headed "Context, not used in any calculation") and in the judge Q&A (section
   36) where a judge might raise the outside world. `assemble.py` fails on any external tag elsewhere (`context_leaks`).
3. On slides, the only outside facts are the case's own page-2 context lines [C-RW1 to C-RW4], and only as labelled context
   (the cover node "WHY NOW: context only, not in our numbers"). No other external number appears on a slide.
4. The model is a model. Every sentence reporting a model result says "in our model". Lever effects are the case's own
   Exhibit 6 values; stress tests (A16) are the team's, labelled as such.
5. No interview, survey, A/B test or customer quote exists beyond the case's own (C-B2, C-E1). Research section 33 is a
   validation plan that opens by saying it has not been run.
6. Units: ₹ before GST [C-R4, C-F10]; company totals in ₹ lakh to one decimal; per phone figures in rupees; Indian digit
   grouping (9,60,000); the minus sign is U+2212.
7. Options are used exactly as written [C-F12]. Ideas for after March (April trade in, intake battery checks) are labelled
   "after March" everywhere.
8. Case ambiguities are settled once, in A01 to A20 (T1), and each assumption is stated on the slide that uses it (A1 and
   A2 carry the full list; slide sources cite the IDs).

### 2.2 Language standard

- Zero em dashes and en dashes. Ranges use "to". The minus sign is U+2212.
- No hooks, no rhetorical questions (question marks only in research section 36), no "imagine", no exclamation marks.
- Banned words: the lists `BANW` in `deck/gen.py` and `BAN` in `research/assemble.py`, plus the humanizer's §12 list
  (additionally, align with, bolstered, crucial, deep dive, delve, enduring, enhance, garner, highlight as a verb,
  interplay, intricate, key as an adjective, landscape, meticulous, pivotal, quietly, robust, showcase, tapestry,
  testament, underscore, valuable, vibrant).
- First person plural, declarative, plain words, a number in most sentences, reasoning shown: a strategy team's memo to
  Tikau's CEO and board.
- Hinglish appears only in the positioning line, the case's own customer quote and the case's trade in name, each with an
  English gloss the first time.

### 2.3 The humanizer standard

Every writer and every slide-copy change runs the humanizer skill (`C:\Users\harsh\.claude\skills\humanizer\SKILL.md`,
invoke with the Skill tool `skill: "humanizer"`) in file mode on its own text before finishing: prose only; tables,
numbers, tags, headings and quoted case text unchanged. Strongest tells first: §1 not-X-but-Y (allowed only in the
research §2 do-not and do table and the §23 "Conclusively" paragraph, where both halves carry numbers), §2 one-line
closers, §3 sayings, §4 staged run-ups, §5 arguing with no one, §6 forced triads, §8 dashes, §12 AI words, §13 inflated
significance, §15 -ing riders, §18 "serves as/boasts", §19 bold labels (the `**Answer.**` lead is the only bold kept),
§25 writing about the document. Then reread for the five tells that survive rewrites: contrasts, closers, triads,
dashes, bold labels. The humanizer never adds a fact, number or source.

### 2.4 Tags (every number in the research carries one)

| Tag | Meaning | Resolves to |
|---|---|---|
| `[C-E3N4]`, `[C-B7]`, `[C-F15]` | Case or FAQ line by ID | `case/01-case.md` |
| `[A05]` | Team assumption | `model/model_tables.md` T1 and research section 34 |
| `[M]` | Model output | `model/model_outputs.json` |
| `[T12]` | Model table | `model/model_tables.md`, research Appendix B |
| `[S12]` | External source, context only | `research/raw/sources.md`, research Appendix A |
| `[D07]` | Raw research row (lanes B to I), context only | `research/raw/R-D.md`, resolved to an S-ID by `rid_to_sid.json` |

Lanes are lettered B to I so that `[A##]` always means an assumption.

### 2.5 Files to read before starting (main agent)

1. This plan, fully. 2. Root `CLAUDE.md` sections 0, 5 and 7 (its 22 pt rule is superseded by 1.2).
3. `.claude/skills/case-competition-deck/SKILL.md` through the Skill tool (touchpoint A). 4. The humanizer skill.
5. `arthikkhayal-case/PLAN.md` sections 0 to 2 and 15 (the predecessor plan this one follows; its pipeline is reused).
6. `arthikkhayal-case/research/arthik-khayal-research.md` lines 1 to 150 (register and tag discipline).

---

# PART II. THE SOLVED CASE

## 3. The argument (how the case-competition-deck skill was applied)

### 3.1 Case type and calibration

A marketing and operations hybrid with a unit-economics core (skill guides `case_types/marketing.md`, `operations.md`, and
`strategy.md` for the option screen). The skill is calibrated on three M&A decks; its structural patterns (contrarian answer,
action titles, foreshadowing, symmetric treatment, three scenarios, one moneyshot, double synthesis, defensive depth) are
applied with confidence and its frameworks by reasoned extrapolation. Say this once in research section 0.

One adaptation is specific to this case: the skill's "third-party validation" tactic (named expert quotes) conflicts with
the closed-data rule. We replace it with case-internal validation: the customer's own words [C-B2], Kabir's own words
[C-E4e], the 1,500-visitor survey [C-E1A, C-E1B] and the November spot check [C-E4c]. External quotes appear only in the
research context sections.

### 3.2 The eight-section logic compressed into eight main slides and two appendix slides

| Skill section | Where it lives |
|---|---|
| Front | S1 cover: mind map of who decides whether a Tikau phone gets bought, the answer card, the team table |
| I Executive summary | S2 (SUMMARY): four KPI tiles; monthly EBITDA line, both paths; the decision table; the four board tests; the five-question matrix (Sana asks / the obvious answer struck through / what we found and do / proof / result) |
| II Context | S3 (ECONOMICS): one phone by grade, channel contribution against the dashboard, the month as a waterfall, returns heatmap, what distrust costs. S4 (TRUST): funnel, lost-sale reasons, offers, the full lab, the battery spot check, five whys. **The seed**: "the lab runs at 7,200 of 7,200" (S4 capacity panel and why 4) names the gap that the third shift fills, before S6 names the shift |
| III Actors | S1 mind map (customer, three camps, rivals, channels, lab, rules, board, context) and S5 (CUSTOMER): the four segments scored symmetrically on six criteria |
| IV Quantitative analysis | S6 (OPTIONS): all 84 plans, the camps' plans on the four tests, scatter, the five that pass. S7 (PLAN): the moneyshot, the decision table, the March bridge |
| V Feasibility | S6 "CONCLUSIVELY" card (why the price push, certification without the shift and trade in now each fail) and S9 stress tests |
| VI Recommended alternative | S5 positioning, S7 plan and "will not do", S8 (LAUNCH): product page, main idea, channels, claims against Exhibit 5 |
| Implementation | S9 (SIGNALS): three weekly numbers with change-course levels and actions, tornado, scenarios, April options |
| VII Conclusion | S12 "THEREFORE" card (pure recap) |
| Appendix | S10 A1 (unit and channel working, A01 to A20), S11 A2 (lever maths, contribution by option, March channels, break-evens, short forms) |

### 3.3 The contrarian recommendation (skill section A; rhetoric section 1)

The prompt frames a three-way fight: price and ads [C-B4], certification [C-B5], or trade in [C-B6]. The obvious answers
are the head of growth's ("volume first") and the crowd-pleaser ("do everything"). Our reading of the exhibits is that
Tikau has no demand problem. It has a trust problem behind a full lab. The lab already sells every phone it can test
(7,200 of 7,200 [C-E4a, T8]), so any lever that adds orders without capacity loses them under the case's own rationing rule
[C-E6H4]. Our answer: Kabir's two trust levers (B1, B2) **plus the lever none of the three camps proposed**, the third lab
shift from 1 February, sold to family buyers rather than the largest segment.

| Reason | Price push (Rohan, A) | Certify, battery, February shift (ours) |
|---|---|---|
| Quantitative | March EBITDA −₹55.7 lakh, returns 8.9%, fails tests 2 to 4 [T14] | March EBITDA +₹5.6 lakh, returns 4.5%, ₹58.0 lakh spent, passes all four [T15] |
| Strategic fit | A 5% lower price draws 22% of lost visitors; a battery promise draws 44% [C-E1B]. A Fair phone falls to ₹416 [T11] | Answers five of the seven lost-sale reasons [T9] and the family buyer's own need, "who will fix it" [C-E1C] |
| Feasibility and rules | Adds 2,300 orders into a lab with no free slot; 24% of orders are lost [T14] | Every claim is true on every phone because B1 reads the battery in Tikau's own lab [C-E5a, C-E6B1] |

Symmetric treatment: S6 runs every camp's plan, ours and two tempting alternatives through the same four tests and the same
columns. Double synthesis: "CONCLUSIVELY" on S6, "THEREFORE" on S12. One moneyshot: S7, "+19.7: ₹ lakh a month better than
doing nothing".

### 3.4 The plan

| Item | What | Numbers |
|---|---|---|
| January | Pay setup for B1 (₹15 lakh) and B2 (₹25 lakh); hire and train the third shift (4 weeks) [C-E6SH]; nothing changes for customers [C-E6H1] | Growth money ₹40.0 lakh; EBITDA −₹54.1 lakh |
| 1 February | Tikau Report on every phone (photos, Tikau-lab battery reading, IMEI check, wipe certificate); every Good and Fair phone at 85% battery or more; 12 month warranty; Superb and Good prices +4%; third shift live (9,000 a month) | Orders ×1.1664; returns ×0.56; 8,328 phones sold (Superb rationed by 70); EBITDA +₹5.6 lakh in February and March |
| Growth money | ₹15 + ₹25 + ₹9 + ₹9 = ₹58.0 lakh; ₹22.0 lakh unspent | Test 1 passes |
| Will not do | A (price push), B3 (trust campaign), C (trade in) before April, more ad money, chasing value seekers | Reasons on S7 and in §26 |
| Launch | Main idea: the report before the price. Line: "Har phone ki kundli. Saal bhar ki zimmedari." Channels: referrals, stores, labelled creators; paid ads with no new money; MegaKart listings updated, no ads | Per order in March: referrals ₹2,923, stores ₹1,881, creators ₹1,769, ads ₹231, MegaKart ₹92 [T21] |
| Claims | Make: battery 85% or more read in our lab; 12 month warranty on every phone; IMEI checked and data wiped with a certificate. Do not make: "as good as new, with genuine parts"; "cheaper than PhoneBazaar for 12 months" | Every line of Exhibit 5 checked (§28) |
| Weekly numbers | Orders a week (plan 1,923; change course at 1,838 for two weeks); return rate (plan 4.5%; change at 5.5%); Good phones needing a battery (plan 40%; change at 50%) | Break-evens T17 |
| April (after March) | Launch C trade in on new growth money (₹35 lakh setup, repaid in about 2.2 months); keep the shift; keep A and B3 off | T20 |

Positioning statement (S5): "For families buying a phone for a parent or a child, who need it to last and need to know who
will fix it, Tikau sells refurbished phones that each come with a lab report, battery health of 85% or more and a 12 month
warranty, because every phone is tested and its battery read in Tikau's own lab."
Memorable line: "Har phone ki kundli. Saal bhar ki zimmedari." (Every phone's full report. A year of responsibility.) A
kundli is the chart Indian families read before a big decision, which is what a parent's phone is for the child who buys it.

### 3.5 Sixteen insights the research must carry

1. A Superb phone earns ₹4,653, Good ₹2,524 and Fair ₹716 before marketing [T2]. 2. Fair's ₹716 is 7.2% of its price; claims and returns eat ₹484 of a Fair phone [T2]. 3. Paid ads lose ₹2.1 lakh a month, ₹81 an order; referrals earn ₹2,649 an order [T4]. 4. The growth dashboard shows MegaKart at ₹0 an order, but its 12% commission costs ₹1,692 an order [T4]. 5. The month: ₹179.2 lakh of phone contribution becomes −₹14.1 lakh after commission, ₹99 lakh of channel spend, coupons and ₹58 lakh of fixed costs; ×12 = −₹169.6 lakh against the case's −₹170 lakh [T5]. 6. Returns run at 8.09% against the board's 6.0% [T5]. 7. Claims and returns cost ₹22.2 lakh a month, more than the ₹14.1 lakh loss [T5]. 8. 91.6% of people who open a phone page leave without adding to cart [T7]. 9. Five of the seven lost-sale reasons are trust; a battery promise draws twice what a 5% price cut draws [T9]. 10. The lab sells 7,200 of 7,200 sellable phones and Superb runs at 1,775 of 2,000 [T8]. 11. 22 of 200 Good phones read below their printed 80%, about 351 a month, so the status quo fails test 4 [T8, A14]. 12. B1 and B2 lift a Superb phone by ₹847 and a Good phone by ₹175 but cut a Fair phone to ₹164 [T11]. 13. Of 84 plans, 5 pass all four tests; ours ends Q1 ₹14.3 lakh ahead of the next [T12, T13]. 14. The March bridge: prices up 4% add ₹41.9 lakh and pay for ₹29.5 lakh of batteries; volume adds ₹20.8 lakh and pays for the ₹9 lakh shift; fewer returns add ₹5.4 lakh against a ₹10.0 lakh report [T16]. 15. No single uncertain input at its bear value takes March below zero; all five together give −₹8.7 lakh [T18, T19]. 16. In April, trade in adds ₹15.8 lakh a month in its first month and ₹39.7 lakh at 4,000 trade ins [T20].

### 3.6 Frameworks used and where (`references/frameworks.md`)

| Framework | Research section | Slide |
|---|---|---|
| Unit economics, contribution margin, cost-to-serve waterfall | 4 to 7 | S3, A1 |
| Customer journey and funnel (AARRR) | 8 | S4 |
| Theory of Constraints (the lab is the bottleneck) | 9 | S4, S6 |
| Five whys, MECE issue tree, hypothesis table | 10 | S4 |
| Information asymmetry (Akerlof), signalling (Spence), warranties as signals | 15 (context) | S5 |
| STP, segment scorecard, JTBD, persona | 18, 19 | S5 |
| Positioning statement, message hierarchy (promise, reasons to believe, proof) | 20 | S5, S8 |
| MECE option filter over every lever combination; symmetric comparison grid | 21 to 23 | S6 |
| Waterfall bridge; growth money ledger | 24, 25 | S7 |
| Claims compliance matrix (Exhibit 5 as rules) | 28 | S8 |
| KPI tree, leading indicators with trigger levels | 29 | S9 |
| Sensitivity (tornado), break-even analysis, three scenarios | 30 | S9, A2 |
| Real options (April trade in on new money) | 31 | S9 |
| Risk register (probability by impact), pre-mortem | 32 | research only |
| Lean validation plan | 33 | research only |

## 4. Locked numbers (reference output of the model, hash `9b3628d94d`)

| Item | Value | Table |
|---|---|---|
| Contribution per phone, website rates | Superb ₹4,653; Good ₹2,524; Fair ₹716 | T2 |
| By return regime (stores 0.5x / website 1x / creators 1.5x) | Superb ₹4,689 / ₹4,653 / ₹4,617; Good ₹2,587 / ₹2,524 / ₹2,461; Fair ₹833 / ₹716 / ₹599 | T3 |
| Contribution after marketing, a month | ads −₹2.1 lakh; MegaKart ₹4.6; creators ₹10.2; stores ₹12.6; referrals ₹18.5; total ₹43.9 lakh | T4 |
| Per order | ads −₹81; MegaKart ₹231; creators ₹1,137; stores ₹1,257; referrals ₹2,649 | T4 |
| Month today | phones' contribution ₹179.2 lakh; commission −₹33.8; channel spend −₹99.0; coupons −₹2.5; fixed −₹58.0; EBITDA −₹14.1 lakh; ×12 −₹169.6 lakh | T5 |
| Returns and claims | 582 returns a month, 8.09%; 468 claims; claims ₹11.7 lakh + returns ₹10.5 lakh = ₹22.2 lakh | T5 |
| Grades sold today | Superb 1,775; Good 3,190; Fair 2,235 | T6 |
| Funnel | 9,60,000 → 3,10,000 (32.3%) → 26,000 (8.4%) → 4,200 (16.2%); 0.44% visit to order; web orders = ads + creators + referrals = 4,200 | T7 |
| Lab and supply | 7,200 of 7,200 sellable; Superb 1,775 of 2,000 (89%, headroom 225); spot check 11%, about 351 Good phones a month | T8 |
| Under B1 + B2 (website rates) | Superb ₹5,500; Good ₹2,699; Fair ₹164; with A on top Fair −₹136 | T11 |
| Plans | 84 screened; 5 pass all four tests | T12, T13 |
| Our plan | Jan: 7,200 phones, contribution ₹43.9, growth ₹40.0, EBITDA −₹54.1, returns 8.1%. Feb and Mar: 8,328 phones, ₹72.6, ₹9.0, +₹5.6, 4.5% (4.55%) | T15 |
| Quarter | growth money ₹58.0 lakh; Q1 EBITDA −₹42.9 lakh against −₹42.4 lakh doing nothing: −₹0.5 lakh; March swing +₹19.7 lakh a month | T13, T15 |
| Rejected plans | A: March −₹55.7, returns 8.9%. A + Feb shift: −₹36.9. B1 + B2 without the shift: −₹8.6 (1,198 orders lost). C alone: −₹4.9, 8.0%. B2 + Feb shift: +₹2.8 but 6.5% returns and no lab reading. B1 + B2 + C + Feb shift: +₹31.2 but ₹93.0 lakh. B1 + B2 + C, no shift: passes, Q1 −₹44.4 | T14 |
| March bridge | −14.1 → +20.8 more phones → +41.9 prices → −29.5 batteries → −10.0 report → +0.2 claims → +5.4 returns → −9.0 shift → +5.6 | T16 |
| Break-evens for March | order rise 10.5% (7,957 phones, 1,838 a week) against 16.6%; Good battery swaps 55% against 40%; Fair 97% against 70%; returns kept 74% against 56% | T17 |
| Stress test (25% worse / better) | Good battery 1.9 / 9.3; Fair battery 2.0 / 9.3; claims 2.2 / 9.0; order rise 2.8 / 8.2; return cut 4.4 / 6.7 | T18 |
| Scenarios | Bear −₹8.7 (fails test 2), Base +₹5.6, Bull +₹20.5 March EBITDA; Q1 against doing nothing −29.2 / −0.5 / +29.2 | T19 |
| April | keep 5.6; +B3 −5.5; +A −40.3; +C trade in months 1 to 5: 21.4, 31.2, 37.2, 41.8, 45.3 (before the ₹35 lakh setup) | T20 |
| March channels under our plan | ads 3,012 phones, ₹7.0 lakh; MegaKart 2,325, ₹2.1; creators 1,035, ₹18.3; stores 1,149, ₹21.6; referrals 807, ₹23.6 | T21 |

## 5. Assumptions and the update protocol

### 5.1 Register
T1 in `model/model_tables.md` lists A01 to A20 with the text and the case basis; `A_SHORT` in the model holds the slide
versions printed on A1. Research section 34 explains each in prose with the effect of reading it the other way.

### 5.2 Ambiguities a judge may probe (each settled by one assumption; research Appendix D argues each)
A01 (A's ₹10 lakh counted once), A04 (rationing includes trade in orders), A05 (return cuts multiply each channel's rate,
including trade in buyers), A07 (30% of all trade ins buy), A08 (Superb grading on Tikau's own reading), A11 (MegaKart's fee
rises with the 4% price), A14 (the spot check scaled up), A16 (what the stress test moves). None of them changes the
recommendation: our plan uses no trade in and no price push, so A01, A04, A06, A07, A12 and A20 only affect rejected plans.

### 5.3 Update protocol (the only way a locked number may change)
Outside research never changes a model input (closed data). A number changes only if a re-read of the case PDF shows the
transcription in `case/01-case.md` or a constant in the model is wrong. Then: fix the constant in
`model/dobaara_model.py`, rerun M1 and M2, log the new hash and every changed locked number in `DECISIONS.md`
(`date | step | decision | why`), and re-dispatch the writers whose sections cite it. Slide numbers update automatically
from `values.json`; rerun `gen.py mock` and `copy`.

---

# PART III. RESEARCH

## 6. Research lanes (context only)

Schema for every raw file `research/raw/R-X.md`: an H1, a two-line preamble with the access date and the line "Context
only: no number in this file enters the model or a slide (C-R1)", one H2 per question, then
`| R-ID | Fact | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |` with Status
VERIFIED, CORRECTED (corrected figure and date), VERIFIED (search only), UNVERIFIABLE or NOT YET PUBLISHED; end with
`## Gaps` and `## Conflicts`. R-IDs are the lane letter plus two digits (`D07`). 35 to 70 rows a lane (Lane H: 12 to 25
quotes). Prefer regulators, official statistics, peer-reviewed papers, filings and the case's own named sources. Flag
`[blog]` and `[vendor]`. Never infer a 2026 date from an earlier year. Never compare a real company with a case name.

Planning-time leads (verifiers confirm, date and extend; do not lose these):
- Counterpoint Research, "India refurbished smartphone volumes grew 13 percent YoY in H1 2026" (published about 1 Sep 2026): new phones about −11%; organised channel about 20%, unorganised about 80%; Samsung 30%, Apple 23% of refurbished volumes; press coverage mentions a 16% full-year forecast (confirm on Counterpoint). URL: counterpointresearch.com/en/insights/india-refurbished-smartphone-volumes-grew-13-percent-yoy-in-h1-2026.
- GSMA, "Closing the Trust Gap: How Better Refurbished Phone Labelling Could Accelerate the Circular Economy": 86% worry a refurbished phone breaks sooner; almost half would consider refurbished, fewer than one in ten buy; three-quarters expect up to 40% off new; inconsistent grading across sellers.
- CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023 (30 Nov 2023, under section 18 of the Consumer Protection Act 2019): 13 specified patterns, including false urgency ("only 2 rooms left"), basket sneaking, confirm shaming, forced action, subscription trap, interface interference, bait and switch, drip pricing, disguised advertisement, nagging, trick question, SaaS billing, rogue malware. Read the gazette text on consumeraffairs.nic.in.
- ASCI guidelines for influencer advertising (finalised May 2021, effective 14 Jun 2021): labels such as #ad, #collab, #sponsored, upfront and prominent, triggered by any material connection; ASCI's 2024 report found 69% of the top 100 digital stars non-compliant.
- BIS IS 19000:2022, online consumer reviews (Nov 2022): voluntary; disclose paid reviews; bars reviews written by people employed for that purpose.
- Sanchar Saathi and CEIR (DoT, launched May 2023): national totals reported as about 35.49 lakh devices blocked, 21.57 lakh traced, 5.19 lakh recovered (undated; confirm on sancharsaathi.gov.in or PIB).
- E-Waste (Management) Rules 2022 (in force 1 Apr 2023): refurbishers must register on the CPCB portal; refurbishing certificates defer producers' EPR; 180-day storage cap.
- Freling, Janakiraman and Syrdal (2016), Journal of Retailing meta-analysis of return policy leniency (21 or 22 studies): leniency raises purchases more than returns; scope leniency raises returns.
- Apple: battery health is capacity relative to new; a typical iPhone battery keeps up to 80% after 500 cycles; below 80% is the service threshold (confirm on support.apple.com).
- Back Market grades (Fair, Good, Excellent, Premium); Premium uses OEM batteries of 90% or more with a 12-month warranty; standard grades an 80% floor (confirm on backmarket pages).
- Cashify and Google: certified refurbished Pixel phones with a one-year limited warranty (blog.google India). Cashify's general warranty varies by source.
- CARS24's ₹50,000 guarantee on the accuracy of its pre-delivery inspection report (Oct 2025): an Indian precedent for a priced trust report.

### Lane B: India's refurbished phone market (context for research §12 and §13)
Questions: market size and growth 2024 to 2026 (Counterpoint, IDC, Redseer, Cashify reports); organised against unorganised
share; price points by brand; reasons Indians buy refurbished; new-phone price inflation at the ₹10,000 tier and memory
costs; festive-season trade in supply; leading organised players and their store counts, warranties, grading and battery
policies (Cashify, Controlz, Ovantica, Refit Global, Yaantra, Budli, Amazon Renewed, Flipkart's refurbished listings);
consumer complaints data (NCH figures the case cites, C-RW2).
Seeds: counterpointresearch.com, idc.com, redseerconsulting.com, cashify.in, blog.google, PIB, consumerhelpline.gov.in.

### Lane C: Rules on claims, reviews, data and devices (context for research §14)
Questions: CCPA dark pattern guidelines (text, 13 patterns, enforcement notices to e-commerce firms 2024 to 2026); CCPA
misleading advertisement guidelines 2022 (substantiation, disclaimers, comparative claims); Consumer Protection
(E-Commerce) Rules 2020 (seller disclosures, refurbished goods); ASCI code chapters on comparative advertising and
influencers; BIS IS 19000:2022; CCPA action on fake reviews; Telecommunications Act 2023 provisions on IMEI tampering;
Sanchar Saathi and CEIR (how an IMEI check works; KYM "Know Your Mobile"); DPDP Act 2023 and DPDP Rules 2025 as they touch
device data and erasure; NIST SP 800-88 and IEEE 2883 media sanitisation; E-Waste Rules 2022 for refurbishers; the Right to
Repair portal (DoCA, 2022) and any repairability index for phones; Legal Metrology labelling for used goods.
Seeds: consumeraffairs.nic.in, egazette.gov.in, ascionline.in, bis.gov.in, dot.gov.in, sancharsaathi.gov.in, meity.gov.in, cpcb.nic.in, nist.gov, righttorepairindia.gov.in.

### Lane D: Trust economics and behavioural evidence (context for research §15)
Questions: Akerlof 1970 (lemons); Spence 1973 (signalling); Grossman 1981 and Boulding and Kirmani 1993 (warranties as
quality signals); certification and third-party grading evidence; Freling, Janakiraman and Syrdal 2016 (returns); evidence on
product photos and condition disclosure in used-goods markets (eBay studies, Lewis 2011 "Asymmetric information, adverse
selection and online disclosure"); ambiguity aversion (Ellsberg); loss aversion and warranty demand; GSMA consumer survey on
circularity; Indian consumer trust surveys on refurbished phones (LocalCircles or similar, flag method); family purchase
decisions for elders.
Seeds: JSTOR and journal pages, NBER, SSRN, gsma.com, localcircles.com.

### Lane E: Battery health, data wiping and refurbishment operations (context for research §16)
Questions: what "battery health" measures; lithium-ion degradation by cycles and heat; 80% as an industry service line
(Apple, Samsung); compatible against OEM batteries (quality, safety, BIS certification of cells under the Compulsory
Registration Scheme); how labs read battery health (diagnostic tools, their error); grading standards (CTIA wireless device
grading scales, R2v3, e-Stewards, GSMA work on labelling); data erasure certification (NIST 800-88, Blancco-style
certificates `[vendor]`); IMEI blacklist checks (GSMA Device Check, CEIR); refurbishment throughput and shift work in
Indian electronics repair (labour norms on night shifts for the third shift, if any); warranty repair turnaround benchmarks.
Seeds: support.apple.com, samsung.com, ctia.org, sustainableelectronics.org, e-stewards.org, gsma.com, nist.gov, bis.gov.in.

### Lane F: Channels and launch practice in India (context for research §27)
Questions: marketplace commission norms for refurbished electronics (Amazon, Flipkart fee schedules) `[vendor]`; creator
economy size and disclosure practice (EY-IMAI, Kantar, ASCI reports); referral programme evidence in Indian D2C; store
conversion in Indian electronics retail; how Hinglish and regional-language ads perform (Google or Meta India reports);
festive and wedding calendars that touch Q1 (Republic Day sales, Valentine's week, Holi on 4 Mar 2027 if verified);
WhatsApp Business messaging prices as a referral tool.
Seeds: sellercentral.amazon.in, seller.flipkart.com, ey.com, kantar.com, thinkwithgoogle.com, developers.facebook.com.

### Lane G: Comparable plays and cautionary tales (context for research §17)
Questions: Back Market (grades, "Verified Refurbished", battery standard, campaigns, funding); Apple Certified Refurbished
(new battery and outer shell, one-year warranty); Samsung Certified Re-Newed; Amazon Renewed Guarantee; Google and Cashify;
Swappa (verified listings); refurbed and Rebuy in Europe; CARS24 and Spinny in used cars (inspection reports, money-back
guarantees, "Assured" labels); OLX and Quikr trust features; cautionary: Flipkart's 2GUD (launched 2019, shut 2020),
Yaantra's acquisition, any Indian refurbisher fined or noticed for misleading claims; EU rules on refurbished labelling.
Report what transfers to Tikau and what does not, without naming a case company as similar to a real one.
Seeds: backmarket.com, apple.com, samsung.com, amazon.in, swappa.com, cars24.com, spinny.com, inc42.com `[blog]`, entrackr.com `[blog]`.

### Lane H: Third-party quotes for the research (context only, never on a slide)
8 to 15 verbatim quotes of at most 40 words from named, credible sources (title, URL, date; prefer 2025 onward): Counterpoint
analysts on India's refurbished market; GSMA on trust and labelling; the Department of Consumer Affairs or CCPA on dark
patterns or fake reviews; ASCI on influencer disclosure; DoT on Sanchar Saathi; a refurbisher founder on battery or warranty
trust. Never paraphrase inside quotation marks; if a quote cannot be verified verbatim, record the nearest verbatim sentence.

### Lane I: Language, positioning and creative precedent (context for research §20 and §27)
Questions: the meaning and cultural use of "kundli" (horoscope chart, matched before marriages) and its use as a metaphor in
Indian product marketing (vehicle history or inspection "kundli" campaigns, if any exist; say so if none are found);
"bharosa" in Indian brand lines; Hinglish taglines that worked (with campaign names and agencies); research on bilingual
advertising recall in India; how Indian buyers refer to second-hand phones ("purana phone", "second hand"); the case's own
trade in line "Purana do, Tikau lo" [C-E6TI1].
Seeds: afaqs.com, exchange4media.com, campaignindia.in, economictimes brand equity pages, academic papers on code-mixing in ads.

### After the eight files exist (step R2)
Run `python -X utf8 marksoc-case/research/build_sources.py` (writes `sources.md` and `rid_to_sid.json`). Read every
"Context facts that touch the argument" list (prompt 11.1) and record in `build-log.md` under `## Context notes for writers`
the five most useful facts for each of sections 12 to 17, plus `## Terminology for writers` (Exhibit 5 terms, "refurbished",
grades, IMEI, CEIR, dark patterns). No model input changes (5.3).

## 7. Research document specification

### 7.1 Format
- File `research/dobaara-research.md`, assembled by `assemble.py md`. Writers never write an H1.
- Each H2 is `## N. Title` with the exact title from 7.2 and opens with a bold `**Answer.**` paragraph of two to four sentences.
- Sections 12 to 17 open with a blockquote line `> Context, not used in any calculation: every outside fact here explains the setting; the model and the deck use only the case's numbers (C-R1).`
- Pipe tables are introduced by a sentence and followed by what they show. Show worked arithmetic the first time a derived
  number appears (for example `₹24,000 − ₹17,800 − ₹800 − ₹600 − 3% x ₹2,500 − 4% x ₹1,800 = ₹4,653`). End every
  section that feeds a slide with `Exhibit for the deck: ...` naming the slide and panel.
- No images. Blockquotes only for the context line, verbatim quotes of at most 40 words with attribution, and customer-facing
  copy labelled `Customer copy (draft, checked against Exhibit 5):`.
- Option template (symmetric treatment) for section 21, one sub-section per option A, B1, B2, B3, C, third shift, in this
  order: 1 what the case says it does (IDs); 2 what it does to one phone by grade (T11); 3 what it does to orders, mix and
  returns by channel; 4 growth money and per-phone cost; 5 capacity and supply effects; 6 alone, on the four tests (T12);
  7 in combination; 8 verdict for January to March and for April.

### 7.2 Section outline, content and owner

| § | H2 title (use exactly) | Must contain | Tables (min) | Words (min) | Writer |
|---|---|---|---|---|---|
| 0 | Document control: every number in this document traces to the case, a stated assumption or the model, and outside research is context only | Purpose and readers (the judges, Tikau's board); the closed-data rule (C-R1, C-F4) and how this document honours it; tag legend with one example each; model file, hash and rerun command; the skill's calibration note and the validation substitution (3.1); the four kinds of number (case, assumption, model output, context); verification tally per lane B to I; what the document does not contain (no interviews, no Tikau data beyond the case, no outside number in a calculation); naming rules (fictional names, monograms) | 5 | 1,100 | W-A |
| 1 | Coverage matrix: every line of the case and the FAQ maps to a section of this document and a slide | One row per ID in `case/01-case.md` (what it says in at most 20 words, how we answer, section, slide); the scoring criteria C-W1 to C-W4 against slides; the four board tests against slides; FAQ rules and how the deck obeys each (slide counts, decision table, rounding) | 5 | 2,200 | W-A |
| 2 | The answer on one page: certify every phone, promise 85% battery and 12 months, and open a third lab shift on 1 February, and March EBITDA moves from −₹14.1 lakh to +₹5.6 lakh on ₹58.0 lakh | Recommendation in three sentences; the do-not and do table with three reasons each side and numbers (3.3); the moneyshot (+₹19.7 lakh a month); the decision table (T15) with the four tests and the change against doing nothing (−₹0.5 lakh) stated plainly with the reason (₹40 lakh of setup in January); the honest bear reading (−₹8.7 lakh March if every uncertain effect is 25% worse); what we will not do; five facts that would change our mind; a 150-word version | 6 | 2,400 | W-A |
| 3 | The case data decoded: 7,200 phones, ₹139 crore of sales and −₹14.1 lakh a month reconcile to the last twelve months within ₹0.4 lakh | Every exhibit restated as the model reads it; the reconciliations (website orders 4,200 = funnel 4,200; 7,200 sold = 7,200 sellable; ₹99 lakh channel spend; dashboard figures reproduce; revenue ×12 = ₹139.2 crore; EBITDA ×12 = −₹169.6 lakh); the 13 model checks; what the data cannot show; the indirect numbers the case flags (C-R2) and where each hides | 7 | 2,800 | W-A |
| 4 | One phone: a Superb phone earns ₹4,653, a Good phone ₹2,524 and a Fair phone ₹716 before marketing | T2 worked line by line for each grade; T3 by return regime; claims and returns as a share of contribution; Fair's thin margin against a ₹10,000 new phone [C-K3]; the grade definitions [C-CO5] | 5 | 2,200 | W-A |
| 5 | Channels: referrals earn ₹2,649 an order, paid ads lose ₹81 and the growth dashboard ranks them backwards | T4 worked for every channel and grade (orders by grade, return regime, gross contribution, commission, fixed spend, coupons); dashboard cost against true cost and contribution per order; why MegaKart's ₹0 hides ₹1,692; the channel mix by grade and what it implies for each lever | 6 | 2,600 | W-B |
| 6 | The month: ₹179.2 lakh of phone contribution becomes −₹14.1 lakh after ₹33.8 lakh of MegaKart fees, ₹99 lakh of channel spend and ₹58 lakh of fixed costs | T5 and T6; the waterfall in words and as a table; contribution by grade (Superb ₹82.6 lakh, Good ₹80.5 lakh, Fair ₹16.0 lakh); what break-even needs in contribution terms (+₹14.1 lakh a month) and three naive ways to get it that fail | 5 | 2,000 | W-B |
| 7 | Returns run at 8.09%, a third above the board's 6.0%, and claims plus returns cost ₹22.2 lakh a month | Returns by channel and grade (the heatmap as a table); the 6.0% test arithmetic (582 returns to at most 432 at 7,200 phones); claims by grade; warranty service (9 days, 38% second visits) [C-E4d] and why it matters for the family buyer | 5 | 2,000 | W-B |
| 8 | Demand or trust: 3.1 lakh people opened a phone page in October and 91.6% left without adding to cart, and five of the seven reasons are trust | T7 funnel; stage conversions; T9 reasons and offers mapped to options; the store conversion (1 in 3) [C-E1D]; why price ranks fifth; the answer to C-Q1's "demand or trust" in one paragraph | 5 | 2,400 | W-B |
| 9 | The lab is full: Tikau sells 7,200 of 7,200 sellable phones and 1,775 of 2,000 Superb phones, so every option that adds orders needs capacity | T8; the rationing rule [C-E6H4] worked on an example; Theory of Constraints framing; Kabir's quote [C-E4e]; why the third shift is the lever none of the camps proposed (the seed, stated without naming the plan) | 4 | 1,800 | W-B |
| 10 | Five whys and an issue tree trace the loss to one root cause: Tikau sells claims it cannot yet prove, from a lab with no spare time | Five whys; MECE issue tree (price, demand, trust, capacity, channel cost); hypothesis table with evidence and verdict | 3 | 1,600 | W-B |
| 11 | Today's battery line breaks Exhibit 5 for about 351 Good phones a month, so the status quo fails board test 4 | The spot check arithmetic (22 of 200, A14); Exhibit 5 line by line against today's listings; why B1 is the compliance lever and B2 alone cannot make its own battery claim; the other compliance gaps (data wipe and IMEI already required [C-E5f]) | 3 | 1,400 | W-B |
| 12 | Context: India's refurbished market grows while new phones shrink, and trust is the category's constraint | Lane B (Counterpoint H1 2026, organised share, brands, price inflation at the entry tier, complaints); what it means for Tikau in words only | 4 | 2,000 | W-C |
| 13 | Context: PhoneBazaar, neighbourhood shops and ₹10,000 new phones bound Tikau's price on both sides | The case's three competitors [C-K1 to C-K3] analysed (strategic group map as a table; Porter's five forces in brief); price corridor (shops 10% to 15% below, PhoneBazaar 6% above; after B2, Superb and Good sit about 1.9% below PhoneBazaar: internal arithmetic, never a public claim [C-E5c]); real organised players as context from Lane B, never mapped to case names | 5 | 2,200 | W-C |
| 14 | Context: Indian consumer law sets the claims Tikau may make, from the CCPA's dark pattern list to ASCI's influencer labels, review standards, Sanchar Saathi and the e-waste rules | Lane C, each rule in plain words and mapped to the Exhibit 5 line it mirrors; a rule-by-tactic matrix | 5 | 2,400 | W-C |
| 15 | Context: why reports, warranties and battery guarantees build trust: lemons, signals and return-policy evidence | Lane D, each study with design, sample and effect; how the evidence supports reading Exhibit 1B (44% battery, 39% warranty, 36% report) | 4 | 2,200 | W-C |
| 16 | Context: battery health, data wiping and IMEI checks are lab operations, and a third shift is what makes certification physically possible | Lane E; what a Tikau-lab battery reading involves; compatible batteries and the "genuine parts" rule [C-E5b]; data erasure standards; shift work considerations (stated as context) | 4 | 2,000 | W-C |
| 17 | Context: what comparable refurbishers and used-goods platforms did with trust, and what went wrong for those that did not | Lane G with a symmetric template per comparable (what they promise, how they prove it, warranty, battery rule, outcome); what transfers and what does not | 5 | 2,400 | W-C |
| 18 | Segments: family buyers score 24 of 30 against 22 for flagship-on-a-budget buyers, because Good phones have no supply cap and the trust promise pays on a Good phone | T10 with every score's basis; the obvious pick (flagship) argued fairly and then rejected on headroom (Superb 2,000 cap; our plan already rations 70); value seekers rejected on Fair's ₹164; upgraders deferred to April with trade in; sensitivity of the ranking to weights (equal weights, size doubled, margin doubled) worked by hand | 5 | 2,600 | W-D |
| 19 | The family buyer: someone buying for a parent or a child, who fears the battery and wants to know who will fix it | Persona built only from case evidence (C-E1A to C-E1D, C-B2); jobs to be done; the journey from search to repair; where they buy (stores, referrals); what B1 and B2 change at each step; the warranty-service gap (9 days, 38%) as the risk to the promise | 4 | 2,000 | W-D |
| 20 | Positioning: "Har phone ki kundli. Saal bhar ki zimmedari." | The statement (3.4) in the standard form; the line, its gloss and why it is memorable; message hierarchy (promise, three reasons to believe, proof points); three alternative lines considered and why they lost; Exhibit 5 check of the line itself (it claims a report and a year's warranty, both true under B1 and B2); Lane I context | 4 | 1,800 | W-D |
| 21 | The options one by one: what A, B1, B2, B3, C and the third shift each do to a phone, a channel and a month | Option template (7.1) six times; T11 | 8 | 4,200 | W-D |
| 22 | The plan screen: of 84 plans, 5 pass all four board tests, and B1 + B2 + a February shift ends Q1 ₹14.3 lakh ahead of the next | How the 84 are built (28 lever sets x 3 shift choices; B3 needs B1 or B2); T12 summarised by test failed; T13; the scatter in words; why test 4 needs B1 | 5 | 2,400 | W-D |
| 23 | What each camp proposed: the price push loses ₹55.7 lakh in March, certification without the shift loses ₹8.6 lakh, and trade in alone leaves returns at 8.0% | T14 symmetric, one sub-section per camp plus the two tempting plans (B2 + shift; everything); the paragraph opening "Conclusively," with three columns (it fails a test; it costs more than it earns; it breaks a rule) | 5 | 2,600 | W-D |
| 24 | Our plan, month by month: the decision table, the growth money ledger and the four tests | T15 exactly in the case's format; below-table items [C-D4]; the ledger (₹15, ₹25, ₹9, ₹9; ₹22 unspent and why we keep it); grade and channel volumes; Superb rationing; lab use 93% | 5 | 2,200 | W-E |
| 25 | The March bridge: higher prices pay for the batteries, extra volume pays for the shift, and fewer returns pay for half of the report | T16 step by step with the arithmetic; per-phone bridges for Superb, Good, Fair (`pw_S`, `pw_G`, `pw_F` in values.json); why the order of steps is fixed | 4 | 1,800 | W-E |
| 26 | What Tikau will not do, and why each refusal is worth money | A, B3, C before April, more ad money, value seekers, MegaKart ads, any dark pattern; each with the number | 3 | 1,600 | W-E |
| 27 | The February launch: the report before the price, through referrals, stores and labelled creators | Main idea; week-by-week plan from 5 January to 31 March; channel roles (T21, S8 table); what a customer sees first (the product page, described element by element); store and creator scripts as `Customer copy (draft, checked against Exhibit 5):` blocks; review policy (verified buyers only, reward disclosed and unconditional [C-E5e]); Lane F and I context in a marked box | 5 | 2,800 | W-E |
| 28 | Claims: three we make and two we do not, each tested against every line of Exhibit 5 | The S8 matrix expanded to every Exhibit 5 line (C-E5a to C-E5f) for every claim and tactic; ten phrases we never use ("like new", "as good as new", "genuine parts" for batteries, "best price", "only 1 left", countdowns, struck-out prices, "cheaper than PhoneBazaar", "100% safe", "unbreakable"); the review and creator rules | 4 | 1,800 | W-E |
| 29 | Three weekly numbers and the level at which we change course | KPI tree from EBITDA down; the three numbers with plan, trigger, why (break-evens T17), owner and action; secondary numbers (lab output, Superb fill, claims); weekly dashboard layout | 4 | 2,000 | W-E |
| 30 | Sensitivity: no single uncertain input takes March below zero, and all five at once give −₹8.7 lakh | T17, T18, T19; what would have to be true for the bear case; what the weekly numbers would show by mid February in each case | 4 | 1,800 | W-E |
| 31 | April: launch trade in on new growth money, keep the third shift, and keep A and B3 off | T20; the trade in ramp and its payback (about 2.2 months); capacity at 9,000 binding from month 3 of trade in; what we would ask the board for; labelled "after March" [C-F12] | 3 | 1,600 | W-E |
| 32 | Risks: a register with probability, impact, early signal and response | At least 12 risks (third-shift hiring slips past 1 February; battery swap share above 50%; return cut weaker than 30% and 20%; Superb supply below 2,000; warranty repair backlog at 12 months; creator non-disclosure; MegaKart listing delays; price rise depresses Superb demand beyond Exhibit 6; spot check worse in Fair; data wipe failure; IMEI false negatives; a competitor matching the warranty); heat map as a table; pre-mortem | 5 | 2,000 | W-F |
| 33 | Customer validation plan (not yet run): 30 interviews and two product-page tests in January would confirm or cut the two largest assumptions | First sentence says nothing has been run; hypotheses; sample by segment; interview guide; tests; decision rules | 3 | 1,600 | W-F |
| 34 | Assumptions register: twenty stated assumptions, the reason for each and what changes if it is read the other way | T1 in prose; for each, the alternative reading and its effect on our plan (most: none) | 3 | 2,000 | W-F |
| 35 | Slide blueprint: twelve slides carry the argument, and every number on them traces to a tagged line in this document | Per slide and panel: title, numbers, section and tags (from `deck/slide-copy.md`); archetype mapping (skill archetypes H, K, M, N, P, U, V, W); cover mind-map nodes; "Conclusively" on S6, "Therefore" on S12; the one moneyshot on S7 | 4 | 1,800 | W-F |
| 36 | Forty questions the judges could ask, answered | Grouped as data, economics, segment, options, plan, marketing, compliance, execution; the ten hardest first (why not flagship buyers; why −₹0.5 lakh against doing nothing is acceptable; why not trade in now; what if the order rise is half; is A01 right; does B2 alone make the battery claim legal; why keep ₹22 lakh; what if Superb supply drops; how the 6.0% test is computed; why MegaKart earns ₹92); each 60 to 120 words with tags. The only section with question marks | 2 | 5,000 | W-F |
| 37 | A talk track for three speakers and a rebuild drill for every member | Timed blocks for Harsh, Gursimran and Dayita (who presents which slide); the one number each block lands; the rebuild drill: the five key numbers (₹4,653, −₹14.1 lakh, 8.09%, +₹5.6 lakh March, ₹58.0 lakh) each rebuilt by hand in under two minutes with the exact steps | 3 | 1,600 | W-F |
| App A | Appendix A: Bibliography | Built by `assemble.py` | 1 | n/a | Script |
| App B | Appendix B: Model tables | T1 to T21, inserted by `assemble.py` | 21 | n/a | Script |
| App C | Appendix C: Glossary and short forms | Every term and short form | 2 | 900 | W-F |
| App D | Appendix D: Case ambiguities, our readings and method limits | Each ambiguity (A01 to A20) with the competing reading and its numeric effect where the model can show it; rounding differences; model limits (no week-level dynamics; Exhibit 6 effects taken as given); every `## Conflicts` entry from the lanes | 2 | 1,200 | W-F |

Part files: `part-A.md` §0 to 4; `part-B.md` §5 to 11; `part-C.md` §12 to 17; `part-D.md` §18 to 23; `part-E.md` §24 to 31;
`part-F.md` §32 to 37; `appendix-C.md` and `appendix-D.md` by W-F, each opening with its exact `## Appendix X: ...` heading.
W-F also writes `marksoc-case/rebuild-card.md` (two pages: §37's drill plus the decision table and the four test numbers).

Acceptance (printed by `assemble.py md`): words at least 70,000; tables at least 130; dashes 0; exclamations 0; question
marks outside §36: 0; `not just/only/merely`: 0; banned empty; question headings empty; `missing_S` empty; duplicate
headings empty; `**Answer.**` leads at least the number of H2 sections; untagged number lines at most 25;
`context_leaks` empty.

---

# PART IV. EXECUTION

## 8. Skill touchpoints (mandatory)

### 8.1 case-competition-deck (`skill: "case-competition-deck"`)

| Touchpoint | When | What to do | Pass test |
|---|---|---|---|
| A | Step B3 | Load the skill; read `references/structure.md`, `rhetoric.md`, `archetypes.md`, `frameworks.md`, `case_types/marketing.md`, `operations.md`, `strategy.md`. Confirm section 3 carries: contrarian answer, seed, symmetric treatment, three scenarios, one moneyshot, double synthesis, action titles, case-internal validation (3.1), pre-empted weaknesses (the −₹0.5 lakh and the bear case) | All located; calibration note logged |
| B | Every writer prompt | Writers read `rhetoric.md` and the frameworks assigned in 3.6 | Each part's H2s are the locked findings; each framework appears |
| C | Step R6 | Critique mode on the research (prompt 11.4) | `research/critique.md`; every score under 4 fixed or reason logged |
| D | Step R5 | Slide-mode check of research §35 against `archetypes.md` | Mapping table appended to §35 |
| E | Step Z1 | Polish search on the research: TODO, Insert, Placeholder, TBD, Lorem, xyz, and other case names (SwiftKart, SwasthyaGrid, HarvestBox, Dream11, Paytm, Liminal, Satoshi, Alchemy, TiO2, Eurogrip, Project Setu, Arthik, ONL, Toing) | Nothing outside the bibliography |
| F | Step D1 | Before deriving the deck: eight main headlines are full-sentence findings with a number; S6 carries "CONCLUSIVELY", S12 "THEREFORE"; exactly one `CARD: MONEYSHOT` (S7) | Logged |
| G | Step D6 | Critique mode on the built deck (prompt 11.5) | `deck/critique.md`; allowed fixes applied |
| H | Step D7 | Final polish search on `deck/slide-copy.md` (same list as E) | Nothing found |

The rubric assumes a 100-slide M&A deck. Re-base it and say so: "8 sections present" becomes 3.2; "sample 10 action titles"
becomes all 38 research H2s or all ten content-slide headlines; "appendix depth" becomes "every number has a tag"
(research) or "every number is in `values.json`" (deck); "third-party validation" becomes case-internal validation (3.1).
The skill's .pptx step does not apply.

### 8.2 humanizer (`skill: "humanizer"`)

| Touchpoint | When | What | Pass test |
|---|---|---|---|
| HU1 | Each writer, before replying | File-mode pass on its own part (2.3) | Self-check prints 0 tell hits |
| HU2 | Step R4, after `ASSEMBLY PASS` | Main agent samples 15 paragraphs across all parts and counts tells by §1 to §8, §13 and §19 | Under 1 tell per paragraph on average; worst three fixed by the owner |
| HU3 | Step D1 | Every `overrides.json` string and the derivation copy | No contrast, closer, triad or dash introduced |
| HU4 | Step D6 | The deck critic counts tells in `deck/slide-copy.md` | Zero tells of §1 to §8 |

### 8.3 Figma
Load `figma-use` guidance before the first `use_figma` call (15.2). Pass `skillNames` on every call.

## 9. Environment (checked 26 Oct 2026)

Python 3 with PyMuPDF (`fitz`), Pillow, fontTools and `markdown_it` (all import cleanly); Node v24.15.0; Chrome at
`C:\Program Files\Google\Chrome\Application\chrome.exe`. Run every Python command from the repo root with `python -X utf8`.
In PowerShell chain with `;`, never `&&`; the Bash tool is also available. The deck generator reads, never writes:
`verdict-mnc/deck/preamble.js`, `verdict-mnc/deck/mock_figma.js` and `swasthyagrid-gcp/space-beyond/deck/{_x2.js,_x3.js,metrics.json,preview.py}`
(all present at planning time). The preview needs the Poppins fonts in `%LOCALAPPDATA%\Microsoft\Windows\Fonts` and the
Inter woff files named in `preview.py`; if missing, previews fall back to Poppins (layout check only).

## 10. Execution sequence

### 10.1 Bootstrap

Step B0. Copy this plan byte for byte:
```
python -c "import shutil; shutil.copyfile(r'C:\Users\harsh\.claude\plans\working-folder-marksoc-case-delightful-pelican.md', r'marksoc-case\PLAN.md')"
```
Step B1. Open `marksoc-case/PLAN.md`, find the block `<!-- FILE: extract.py -->` in Part VI, create
`marksoc-case/extract.py` with exactly that block's content using the Write tool, and run
`python -X utf8 marksoc-case/extract.py`. Done when it prints `files 26`.

### 10.2 Step table

| Step | Who | Action | Done when |
|---|---|---|---|
| B0, B1 | Main | Bootstrap | `files 26` |
| B2 | Main | Start `build-log.md` and `DECISIONS.md` (header `date | step | decision | why`); read 2.5 | Both exist |
| B3 | Main | Touchpoint A; load the humanizer skill | Logged PASS |
| M1 | Main | `python -X utf8 marksoc-case/model/dobaara_model.py` | 13 PASS lines, `CHECKS 13/13 HASH 9b3628d94d`, the FINDINGS line in the header, `MODEL PASS`, three files written; spot-check six rows of section 4 against `model_tables.md` |
| M2 | Main | `python -X utf8 marksoc-case/deck/gen.py pre`; `... gen.py mock`; `... gen.py copy`; `... gen.py preview` | Twelve `sNN OK`; `copy issues 0`; twelve previews in `deck/shots/` viewed with Read (two at a time) and any visual defect logged |
| C0 | Main | Cover first: 15.2 steps F1 to F4, then show the user the cover screenshot and say the research stage is starting | Slide 1 built, V1 clean, screenshot viewed |
| R1 | Verifiers, background, three at a time: B, C, D; then E, F, G; then H, I | Prompt 11.1 with the lane text from section 6 | Eight `R-*.md` files with `## Gaps` and `## Conflicts` |
| R2 | Main | Section 6 "After the eight files exist" | Every S-ID has a URL; context notes and terminology written |
| R3 | Writers, background: W-A, W-B, W-C together; then W-D, W-E; then W-F | Prompt 11.2 | Each part meets its words and tables and passes its self-check, including HU1 |
| R4 | Main | `python -X utf8 marksoc-case/research/assemble.py md`; then HU2 | `ASSEMBLY PASS`; else re-dispatch the short writer with 11.3 |
| R5 | Main | Touchpoint D; `python -X utf8 marksoc-case/research/assemble.py pdf` | PDF over 800 KB; first page and one table page viewed with Read; the team block shows all three members |
| R6 | Critic CR | Touchpoint C, prompt 11.4 | `critique.md`; fixes applied by re-dispatching owners; R4 and R5 rerun |
| Z1 | Main | Touchpoint E; checklist 14.1; Stage 1 report to the user; write `STAGE 1 COMPLETE` with the date | All boxes ticked |
| D1 to D8 | Main | Section 15 | 15.9 ticked |
| Z2 | Main | Memory, section 14.3 | Files and pointers exist |

### 10.3 Parallelism rules
- At most three sub-agents at once; on a rate limit, relaunch after the reset time in the error.
- Sub-agents write only their own files. Figma calls are made by the main agent only, one at a time.
- Writers start only after M1 (tables) and R2 (S-IDs). Writers save their file after the first two sections and extend it.
- W-A and W-B do not depend on the lanes at all (closed data): if lanes are slow, start W-A and W-B right after M1.

## 11. Prompts

### 11.1 Verifier prompt (fill LANE = B to I)

> You are verifier V-LANE for a case-competition research file. Read `marksoc-case/PLAN.md` section 6 (the schema, the
> planning-time leads and "Lane LANE") and section 2.1, and skim `marksoc-case/case/01-case.md`. The case is closed-data:
> nothing you find will enter a calculation; it is context for the research document only. Today's date is the access date.
> For each question and seed: open the URL with WebFetch, or find the primary source with WebSearch (mode "standard";
> "extended" only when a standard search comes back thin); record one row per fact in the schema; mark it VERIFIED,
> CORRECTED (give the corrected figure and date), VERIFIED (search only), UNVERIFIABLE or NOT YET PUBLISHED; quote at most 25
> words verbatim. Add rows from better sources until you have 35 to 70 (Lane H: 8 to 15 quotes of at most 40 words with name,
> title, URL and date). Prefer regulators, official statistics, peer-reviewed papers and filings. Never invent a figure, date,
> quote, rule number or URL. Never infer a 2026 date from an earlier year. Flag `[blog]` and `[vendor]`. Never write that a
> real company resembles Tikau, PhoneBazaar or MegaKart. Keep conflicting sources and list them under `## Conflicts`. Do not
> write analysis. No em dashes or en dashes. R-IDs are `LANE` plus two digits (for example D07). Write
> `marksoc-case/research/raw/R-LANE.md`, saving after your first two questions and extending it. Reply with rows verified,
> corrected, unverifiable, not yet published and new; and a list "Context facts that touch the argument" (at most eight
> lines, each with its R-ID) that a writer of research sections 12 to 17 should use.

### 11.2 Writer prompt (fill PART and SECTIONS)

> You are writer W-PART. Write sections SECTIONS of a consulting-grade research deliverable into
> `marksoc-case/research/parts/part-PART.md` (W-F also writes `appendix-C.md`, `appendix-D.md` and `marksoc-case/rebuild-card.md`).
>
> Skills first. Invoke `case-competition-deck` with the Skill tool and read `references/rhetoric.md`,
> `references/case_types/marketing.md`, `references/case_types/operations.md` and the `frameworks.md` entries assigned to your
> sections in PLAN 3.6. Then invoke `humanizer` and keep its tells list beside you while you write.
>
> Read first, fully: `marksoc-case/PLAN.md` sections 1 to 7; `case/01-case.md`; `model/model_tables.md` (T1 to T21) and
> `model/model_outputs.json`; `deck/values.json`; `research/raw/sources.md` and every `R-*.md` (W-C, and W-E for §27,
> must; others skim); `build-log.md` sections "Context notes for writers" and "Terminology for writers"; for register only,
> `arthikkhayal-case/research/arthik-khayal-research.md` lines 1 to 150.
>
> Rules. (1) Use the exact H2 titles from PLAN 7.2 as `## N. Title`, `### N.M` for sub-sections, never an H1; open every H2
> with a bold `**Answer.**` paragraph of two to four sentences; section 21 follows the option template in 7.1; sections 12 to
> 17 open with the context blockquote line in 7.1. (2) Cover every "Must contain" item and meet the minimum words and tables;
> more is welcome when every paragraph carries evidence. (3) Every number carries a tag: [C-E3N4], [A05], [M], [T12], [S12]
> or a raw row [D07]. Use only numbers from the case, the model files, PLAN section 4, or (in sections 12 to 17 and 36 only) a
> VERIFIED or CORRECTED raw row. (4) The closed-data rule: no outside number in any section other than 12 to 17 and 36; never
> use an outside number in arithmetic anywhere. (5) Do not browse. Compute nothing beyond sums, differences, ratios and
> products of tagged numbers, and show the arithmetic the first time. (6) Write "in our model" for every model result. Never
> invent an interview, a customer quote, a test result or any Tikau figure beyond the case; section 33 has not been run and
> says so. (7) Keep the recommendation, the plan and every locked number exactly as in PLAN; wherever your sections touch the
> quarter, say plainly that Q1 EBITDA ends ₹0.5 lakh below doing nothing because ₹40 lakh of setup lands in January, and that
> the bear case gives −₹8.7 lakh in March. (8) Use the case's names; never compare them with real companies. Coin no name for
> the strategy, a lever, a feature or a programme. No AI-use statement. (9) Customer copy goes in a blockquote labelled
> `Customer copy (draft, checked against Exhibit 5):` and must pass every line of Exhibit 5 (no "like new", no "genuine
> parts", no comparison with PhoneBazaar, no urgency, no struck-out price, "refurbished" always present).
>
> Style. First person plural, declarative, plain words, mostly short sentences with some longer ones, reasoning shown, a
> number in most sentences: a strategy team's memo to Tikau's CEO and board. Zero em and en dashes; ranges use "to". No
> hooks, rhetorical questions, "imagine" or exclamation marks; question marks only in §36. Banned words: PLAN 2.2. Expand
> each short form on first use in a section; put an italic expansion line under any table with short-form heads. Introduce
> every table with a sentence and follow it with what it shows. End every slide-feeding section with `Exhibit for the deck: ...`.
>
> Humanizer pass before you finish (HU1). Treat your part file in the humanizer's file mode: prose only; numbers, tags,
> tables, headings and quoted case text unchanged. Fix, strongest first, the tells in PLAN 2.3, then reread for contrasts,
> closers, triads, dashes and bold labels. Add no fact in this pass.
>
> Save after your first two sections and extend. Self-check before replying:
> `python -X utf8 -c "import re,io;t=io.open(r'marksoc-case/research/parts/part-PART.md',encoding='utf-8').read();b=re.split(r'^## 36\.',t,flags=re.M)[0];print(len(t.split()),len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),len(re.findall('[\u2014\u2013]',t)),t.count('!'),b.count('?'),len(re.findall(r'\bnot (?:just|only|merely)\b|\bat its core\b|\bthe real question\b|\bserves as\b|\bpivotal\b|\bcrucial\b',t,re.I)))"`
> Fix until dashes, exclamations, stray question marks and tell hits are 0 and words and tables meet the minimums. Reply with
> the six numbers, the sections written and any figure you wanted but could not find. Edit no other file.

Assignments: W-A §0 to 4; W-B §5 to 11; W-C §12 to 17; W-D §18 to 23; W-E §24 to 31; W-F §32 to 37 plus the appendix files
and `rebuild-card.md`. W-F runs last; add: "Also read `parts/part-A.md` to `part-E.md` and `deck/slide-copy.md`; §35 and §36
quote only numbers that appear in those files."

### 11.3 Expansion line (when a part is short)
"Expand sections <list> by <n> words by adding worked examples from the model tables (show the arithmetic) and one more table
a section, keeping the option template where it applies. Do not change any number. Run the humanizer pass again on the added text."

### 11.4 Critic prompt (research)

> You are critic CR. Invoke `case-competition-deck` and read `references/critique_rubric.md`, `rhetoric.md`,
> `case_types/marketing.md` and `case_types/operations.md`; invoke `humanizer`. Read `marksoc-case/PLAN.md` sections 2 to 7,
> then `research/dobaara-research.md` in full. Score the argument with the rubric re-based for a research document (say so in
> one line): executive summary §2; context §3 to 17; actors §13, §18, §19; quantitative §4 to 9 and §21 to 25; feasibility §23,
> §29 to 32; alternative §20 to 28; conclusion §2 and §35; all 38 H2 titles scored for full sentence and number; "appendix
> depth" becomes "every number has a tag that resolves"; "third-party validation" becomes case-internal validation. Added
> tests: (1) every line in `case/01-case.md` is answered with evidence; (2) the closed-data rule holds: no outside number
> outside §12 to 17 and §36, and none in arithmetic; (3) the honest readings (−₹0.5 lakh against doing nothing, bear −₹8.7
> lakh) appear in §2, §24, §30 and §36; (4) every customer-copy block passes every line of Exhibit 5; (5) the foreshadow works
> (§9 and §10 name the full lab without naming the plan; §23 opens its synthesis with "Conclusively"); (6) check 25 numbers
> against `model_tables.md` and the case and list every mismatch; (7) no real company is compared with a case name; (8) §33
> says it has not been run and no invented quote or test result appears anywhere; (9) humanizer sample of 15 paragraphs with
> tell counts and the worst three quoted. Lead with the two strongest things; at most eight issues, each with section, current
> state, fix and why. Never propose changing a locked number, the recommendation or an H2 title. No dashes. Write `research/critique.md`.

### 11.5 Deck critic prompt (touchpoint G)

> You are the deck critic. Invoke `case-competition-deck` (read `critique_rubric.md`, `archetypes.md`, `rhetoric.md`) and
> `humanizer`. Read the twelve screenshots in `marksoc-case/deck/shots/` (`sN.png`), `deck/slide-copy.md`,
> `deck/derivation.md`, `deck/values.json`, research §35 and `case/01-case.md` (C-S1 to C-S4, C-W1 to C-W4, C-Q1 to C-Q5,
> C-T1t to C-T4t, C-D1 to C-D4). Score the deck with the rubric re-based for eight main slides and two appendix slides (say
> so). Check: S2 is the executive summary and carries the answer and the March swing; every one of Sana's five questions is
> answered on a main slide (map each); the decision table on S7 matches C-D3 exactly, with the below-table items of C-D4; at
> least one rejected plan's numbers appear (S6, S7); three claims made and two refused, each checked against Exhibit 5 (S8);
> three weekly numbers with change-course levels and an April answer (S9); S6 carries "CONCLUSIVELY" and S12 "THEREFORE" with
> no new number; exactly one moneyshot (S7); symmetric treatment of the camps (S6) and segments (S5); every number is in
> `values.json` or a case line; no outside number on any slide except the labelled page-2 context on the cover; every
> assumption a slide relies on is cited by ID on that slide or on A1/A2; the cover mind map has real nodes and the team table
> with three members; zero humanizer tells (§1 to §8) and no banned word. At most five issues; none may change a number, the
> recommendation, the slide count or the approved layouts; each fix must be doable through `deck/overrides.json` or 15.6.
> No dashes. Write `deck/critique.md`.

## 12. What good looks like (calibration for writers and critics)

> Tikau does not need more buyers to break even; it needs to be believed and to have the lab time to prove it. The lab sold
> 7,200 phones a month from 7,200 sellable [C-E4a, T8], so an option that only adds orders loses them under the case's own
> rationing rule [C-E6H4]. Meanwhile 91.6% of the 3.1 lakh people who opened a phone page in October left without adding it
> to the cart [T7], and when 1,500 of them were asked why, the battery came first at 46% and price fifth at 24% [C-E1A]. In
> our model, a report on every phone (B1), a battery of 85% or more with a 12 month warranty (B2) and a third lab shift from
> 1 February lift orders by 16.6%, cut returns to 56% of today's rate and take March EBITDA from −₹14.1 lakh to +₹5.6 lakh
> [T15], for ₹58.0 lakh of the ₹80 lakh [C-B7]. The quarter as a whole ends ₹0.5 lakh below doing nothing [T13], because
> ₹40 lakh of setup lands in January before any benefit arrives [C-E6H1].

Avoid: an adjective without a number; a number without a tag; a table without a sentence before and after it; a model
result called a measurement; an outside number in an analysis section; a sentence that could sit unchanged in a document
about another refurbisher; a paragraph ending in a one-line moral.

## 13. Recovery table

| Symptom | Action |
|---|---|
| `extract.py` prints fewer than 26 files | `PLAN.md` is not a byte copy. Redo B0 |
| Model hash differs or a check fails | A file was edited or a library changed. Re-extract and rerun. If only the hash changes and every section 4 number is identical, log and continue; if a number changes, stop and report |
| `gen.py pre` assertion | A read-only library in section 9 changed. Report the failing string; do not edit those libraries |
| `gen.py mock` FAIL after an override | Shorten the override with the ladder in 15.6 and rerun |
| A build part is over 49,900 characters | Move the last panel of that part into a new `// ===== PART =====` block in the slide file, rerun `mock` and `bind` |
| Preview shows a donut as a full disc | Not used in this deck; ignore |
| A lane has under 20 VERIFIED rows | Re-dispatch once: "Find 15 more rows from primary sources for questions <list>" |
| `ASSEMBLY FAIL` | Read the JSON: fix the named part by hand for banned words or dashes; re-dispatch the owner for words, tables or `context_leaks` |
| `missing_S` not empty | A writer cited an S-ID not in `sources.md`: add the source or remove the claim |
| `ModuleNotFoundError: markdown_it` | `python -m pip install markdown-it-py` |
| Figma not authorised or rate limited | Run `whoami`; if not authorised, stop and ask the user to authorise the Figma connector |
| `setup.js` returns more than 12 slides | List them in `deck/figma.md` and ask the user before removing any |

## 14. Final checks, report and memory

### 14.1 Stage 1 checklist
- [ ] M1 prints `CHECKS 13/13 HASH 9b3628d94d` (or the logged new hash after a 5.3 update).
- [ ] Eight raw files with `## Gaps` and `## Conflicts`; `sources.md` has a URL for every S-ID.
- [ ] `assemble.py md` prints `ASSEMBLY PASS` with `context_leaks` empty; HU2 logged.
- [ ] §1 has a row for every case ID; §33 opens by saying nothing has been run; the −₹0.5 lakh and −₹8.7 lakh readings are in §2, §24, §30 and §36.
- [ ] No AI-use statement; no coined name; no real company compared with a case name.
- [ ] PDF exists and two pages were viewed; `rebuild-card.md` exists; touchpoints A to E and HU1 to HU2 logged.

### 14.2 Reports to the user
Stage 1: paths, word and table counts, critic scores, the most useful context facts found, every conflict. Stage 2: the
Figma URL, the override count and the three biggest copy changes, logo slots filled and left, residuals, the PDF path, and a
reminder that the FAQ says the exact submitted PDF is what finalists present (C-F18).

### 14.3 Memory
Save `project_marksoc_dobaara.md` (type project) in the memory directory: folder, recommendation in one line, model hash,
Figma file key, team (Harsh Kawatra, Gursimran Kaur, Dayita Arora), palette, slide count (12: 8 main, 2 appendix), and that
`marksoc-case/PLAN.md` is the surviving copy of this plan. Save `feedback_closed_data_cases.md` (type feedback): when a
case forbids outside data, the research keeps outside facts in marked context sections and the deck carries none. Add the
two pointers to `MEMORY.md`.

---

# PART V. STAGE 2: THE FIGMA DECK

## 15. Stage 2

### 15.1 Gate (for slides 2 to 12; the cover is built in C0)
- [ ] `STAGE 1 COMPLETE` is in `build-log.md`; `research/critique.md` fixes are applied.

### 15.2 Figma setup and the cover (steps F1 to F4, run in C0)

Tools: one ToolSearch with `select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__create_session,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets`.
Guidance: Skill `figma-use` if listed, otherwise `ReadMcpResourceTool` server `figma-mcp` uri `skill://figma/figma-use/SKILL.md`
(and `skill://figma/figma-use-slides/SKILL.md` if it exists); pass `skillNames: "resource:figma-use"` (plus
`,resource:figma-use-slides` when read) on every `use_figma` call. The deck positions nodes absolutely through the helper
library; that overrides any auto-layout advice. `get_metadata` does not work on Slides files.

| Step | Action | Done when |
|---|---|---|
| F1 | `whoami`. Use plan key `team::1564294484048272772` (admin seat; the other plan is a guest seat). `create_new_file` with `editorType: "slides"`, name `Project DOBAARA | Team IdeaForge`. Then `create_session` with the new key | File key recorded in `deck/figma.md` and `build-log.md` |
| F2 | `use_figma` with the full text of `deck/setup.js` | Returns `count: 12` (or more), twelve ids, `fontsOk` all true. Write `deck/slide-ids.json` as `{"S1": id1, ..., "S12": id12}` |
| F3 | `python -X utf8 marksoc-case/deck/gen.py bind 1`; run `build/slide_01_1.js` then `build/slide_01_2.js` with `use_figma`; then `build/v1_01.js` | Each part returns `warnings: []`; V1 `clean: true` |
| F4 | `get_screenshot` of slide 1 at `maxDimension: 1600`, save to `deck/shots/s1.png` with curl, Read it, compare with `deck/shots/preview_01.png` | Mind map, answer card and three-row team table as in the preview. Tell the user the cover is up |

### 15.3 Step D1: derive the deck from the research (touchpoints F and HU3)
1. Read research §2 to §11, §18 to §31 and §35, `research/critique.md` and the build-log context notes.
2. Create `deck/derivation.md`: per slide `| Panel | Text or number | Research section | Tag | Same (yes or no) | Change |`
   covering every panel title, label, sentence and number in `deck/slide-copy.md`.
3. A number from `values.json` must match the research (if not, fix the research sentence). Wording the research states
   better, or a claim the research could not support, goes into `deck/overrides.json` as `"exact old string": "new string"`,
   never more than 10% longer, no dash, question mark, exclamation mark, banned word or humanizer tell. A central finding no
   slide carries goes under "Candidates for the talk track".
4. `gen.py mock`, `gen.py copy`, `gen.py preview`; `python -X utf8 marksoc-case/deck/checks.py`. Done when twelve `sNN OK`,
   `copy issues 0`, no dash, question mark or placeholder, and every name candidate is a real organisation, a case name or
   a plain phrase. Write `STAGE 2 D1 PASS` with the override count.

### 15.4 Build (main agent only, one call at a time)

| Step | Action | Done when |
|---|---|---|
| D2 | `gen.py bind` (all) | `build/slide_NN_K.js` parts (slides 2 to 9 have three parts, 1, 10 and 11 two, slide 12 one), `v1_NN.js`, `v1_all.js`, `sweeps.js`, `slots.js`, each under 50,000 characters |
| D3 | For N = 2 to 12 (and 1 again if it changed): run every part of slide N in order, each must return `warnings: []`; then `v1_NN.js`; then screenshot to `deck/shots/sN.png` and Read it | V1 `clean: true` or logged residuals; each screenshot described in two lines in `deck/figma.md`. **Stop after slide 2 and compare it with `preview_02.png`, with Arthik Khayal slide `2:4` of `UidfYOpqRKbPxXKJMhftJV` and with SwiftKart slide `2:5` of `7N3v6bAfmXYRrte0zChFDg`; fix the system before building the rest** |
| D4 | `build/sweeps.js` then `build/v1_all.js` | `fontLow`, `copy`, `missing`, `presentBad` empty; `moneyshot` 1; `slides` 12 |
| D5 | Logos and images (15.7) | Log written |
| D6 | Touchpoints G and HU4 (prompt 11.5) | `deck/critique.md`; allowed fixes applied, D3 rerun for those slides |
| D7 | Touchpoint H; final screenshots of slides 1 to 12 at `maxDimension: 1920`, saved as `deck/shots/hi_s01.png` to `hi_s12.png` | Twelve images viewed |
| D8 | `python -X utf8 marksoc-case/deck/make_pdf.py`; report (14.2) | `TeamIdeaForge_ProjectDobaara.pdf` with 12 pages |

Every slide script's first part clears the slide (`wipe` through `skelBT`, or `wipe` directly on S1 and S12), so a rerun is
safe; later parts never clear. If a later part fails, rerun the slide from part 1.

### 15.5 Slide blueprint (what each embedded script draws; geometry is fixed)

| Slide | Ribbon, counter | Headline (from values) | Panels |
|---|---|---|---|
| S1 Cover | none | PROJECT DOBAARA; TIKAU PHONES, JANUARY TO MARCH 2027 | Strip: competition chip, logo slots (MarKSoc DTU, CrackNontech, DTU), team chip. Left: the brief line, OUR ANSWER card, team table (3 rows). Right: mind map "WHO DECIDES WHETHER A TIKAU PHONE GETS BOUGHT" with hub "TIKAU −14.1 LAKH" and 8 nodes (customer image; the three camps as monograms SQ, KA, RB; rivals PB monogram and a shop image; channels MegaKart monogram and a creator image; lab image; rules: Sanchar Saathi, National Consumer Helpline logos; board monogram; why now: Counterpoint Research, GSMA logos, "context only"); FIND, TRUST, BUY chips |
| S2 | SUMMARY, 1 / 8 | Certify every phone ... March EBITDA moves from −₹14.1 lakh to +₹5.6 lakh | 4 KPI tiles; EBITDA line (do nothing against our plan); decision table; four tests grid; five-question matrix with the obvious answer struck through |
| S3 | ECONOMICS, 2 / 8 | Every phone earns money before marketing, but Fair earns ₹716 ... | Cost stack by grade + table; channel bars (negative ads) + per-order table and dashboard note; month waterfall; returns heatmap with 8.1% numeral; distrust cost bars |
| S4 | TRUST, 3 / 8 | Tikau's problem is trust behind a full lab, not demand ... | Funnel with two tiles; lost-sale reasons bars with option tags; offers bars with "two to one" callout; two capacity bars; 200-dot spot check; five whys |
| S5 | CUSTOMER, 4 / 8 | Win family buyers ... from ₹2,524 to ₹2,699 | Segment heat scorecard (6 criteria, totals 22, 13, 24, 16); family-buyer persona with image slot and the case's customer quote; per-phone waterfall for Good with a Fair note; positioning statement, three proofs, the line |
| S6 | OPTIONS, 5 / 8 | We ran all 84 plans ... within ₹0.5 lakh of doing nothing | Camps' plans against four tests (heat grid, 9 rows); 84-plan scatter with test lines; CONCLUSIVELY card; the five plans that pass |
| S7 | PLAN, 6 / 8 | Our plan spends ₹58.0 lakh ... ₹19.7 lakh a month better than doing nothing | CARD: MONEYSHOT (+19.7, two bars, four tiles); the decision table in the case's format with six below-table tiles; March bridge waterfall; what Tikau will not do |
| S8 | LAUNCH, 7 / 8 | The February launch puts the Tikau Report above the price ... | Browser product-page mockup (photos, TIKAU REPORT, price ₹16,640, no dark patterns); the main idea with three dated chips; channels table; claims against Exhibit 5 grid |
| S9 | SIGNALS, 8 / 8 | Three weekly numbers show by mid February whether March clears zero ... | Three layered KPI cards (plan, change-course level, why, then); tornado; three scenarios; April options bars |
| S10 | A1 ribbon, A1 | A1. Every number on the main slides rebuilds ... 13 of 13 checks | Contribution per phone table + formula; channel working table + rule; assumptions A01 to A20 in two tables |
| S11 | A2 ribbon, A2 | A2. Orders rise 16.6% and returns fall to 56% ... | How the options combine; contribution by option; March channels; break-evens; short forms |
| S12 | none | THANK YOU | THEREFORE card with three boxes; team table; logo slots; email line |

### 15.6 Fix rules (the only edits allowed during the build)
A fix goes into `deck/overrides.json` (copy) or the slide file under `deck/slides/` (geometry), then `gen.py mock`, `bind`,
and the slide is rebuilt from part 1. Never edit a build file by hand and never add 240 to a coordinate.

| Issue | Fix |
|---|---|
| `headline 3 lines` | Remove the two weakest words through `overrides.json`; keep every number |
| `source 2 lines` | Drop the least important source group |
| `textOut`, `cellWrap`, overflow | Shortening ladder: drop articles; a shorter word; a short form defined on A2; drop the least important clause. Never below 18 pt for SEC text or 22 pt elsewhere; never drop a number |
| A label touches a line in a screenshot | Nudge it by at most 24 px in the slide file |
| A node sits 240 px off | A hand-written line set x or y before `appendChild`; rerun the full slide |
| `Cannot use unloaded font` | A fragment was run; always run full part files |
| Rotated rail label not centred | Not used in this deck; ignore |
| Strike line in the S2 matrix sits off the text | Acceptable; it marks the cell. Do not move it |

Known false positives: ribbon punch-holes over their tags, `BACK:` rectangles under cards, mockup frames, the scatter's
overlapping dots.

### 15.7 Logos and image slots
Run `build/slots.js`. Expected slots. S1 strip: MarKSoc DTU, CrackNontech, DTU. S1 mind map logos: Sanchar Saathi, National
Consumer Helpline, Counterpoint Research, GSMA; images: "Family buying a phone for a parent", "Neighbourhood phone shop",
"Phone review creator", "Phone testing lab". S5 image: "Parent with a phone a child bought". S8 images: "Real photo: Front",
"Back", "Edges", "Screen on". S12: MarKSoc DTU, CrackNontech, DTU. Monograms (MONO:) are never filled.
1. MarKSoc DTU and CrackNontech marks come from the case PDF itself: run
   `python -X utf8 -c "import fitz,pathlib;d=fitz.open(r'marksoc-case/6adca1651d1c0_project_dobaara_case_by_marksoc_dtu.pdf');o=pathlib.Path('marksoc-case/deck/logos/case');o.mkdir(parents=True,exist_ok=True);[open(o/f'p{p+1}_{i}.{b[\"ext\"]}','wb').write(b['image']) for p in (0,) for i,x in enumerate(d[p].get_images(full=True)) for b in [d.extract_image(x[0])]]"`,
   Read each image and keep the ones that are clearly the MarKSoc DTU and CrackNontech marks. If the marks are vector
   drawings rather than images, render page 1 at 300 dpi with `d[0].get_pixmap(dpi=300)` and crop each mark with Pillow
   (MarKSoc in roughly the top 35% of the page, CrackNontech in the band around 80% to 88% of the height), then Read the crops.
2. Other brands: Wikimedia Commons search (`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<brand>%20logo`
   with a descriptive User-Agent), download with `curl -sL -o "marksoc-case/deck/logos/<slug>.png" "https://commons.wikimedia.org/wiki/Special:FilePath/<File>?width=600"`,
   Read it to confirm the brand. DTU: search "Delhi Technological University logo". GSMA and Counterpoint: Commons first, then
   the organisation's press kit page.
3. Fill: put `{"<slot id>": [pngW, pngH]}` into `MAP` in `deck/logo_rects.js` (at most 8 a call), run it, then one
   `upload_assets` call per returned rectangle (`count: 1`, `nodeId`, `scaleMode: "FIT"`) and POST the bytes.
4. Marks carrying the State Emblem (Department of Consumer Affairs, possibly National Consumer Helpline and Sanchar Saathi)
   stay placeholders. Image slots take only an openly licensed photo (Wikimedia Commons, CC BY or CC BY-SA) whose credit goes
   into the A2 source line through `overrides.json`; otherwise leave the slot and tell the user. Never resize a slot after
   upload. Log each slot as uploaded or placeholder with the reason in `deck/figma.md`.

### 15.8 Export
`deck/make_pdf.py` builds the PDF from the D7 screenshots. Also tell the user that Figma Slides can export natively with
File, Export, PDF, and that the organisers assess only the PDF uploaded on Unstop (C-F3, C-F18).

### 15.9 Stage 2 checklist
- [ ] Twelve slides; `derivation.md` covers every text and number; `overrides.json` holds every change; mock all OK after it.
- [ ] Sweeps empty; one `CARD: MONEYSHOT`; V1 clean or logged residuals; twelve screenshots viewed.
- [ ] Cover: mind map with logo, image and monogram slots, no KPI-card row, three-row team table; same table on S12.
- [ ] Every one of C-Q1 to C-Q5 is answered on a main slide; the decision table matches C-D3 and C-D4.
- [ ] Touchpoints F, G, H and HU3, HU4 logged; `deck/critique.md` exists; PDF has 12 pages.

## 16. End-to-end verification (how to know the whole job is done)
1. `python -X utf8 marksoc-case/model/dobaara_model.py` prints `MODEL PASS` and the locked FINDINGS line.
2. `python -X utf8 marksoc-case/deck/gen.py mock` prints twelve `OK`; `gen.py copy` prints `copy issues 0`.
3. `python -X utf8 marksoc-case/research/assemble.py md` prints `ASSEMBLY PASS`; the PDF opens and shows the three-member cover.
4. In Figma, `build/sweeps.js` returns empty `fontLow`, `copy`, `missing`, `presentBad`, `moneyshot: 1`, `slides: 12`;
   `build/v1_all.js` returns `clean: true` or only the known false positives.
5. The exported PDF has 12 pages; page 2 is the executive summary; page 7 carries the decision table.
6. Spot-rebuild three numbers by hand from the case PDF using `rebuild-card.md`: ₹4,653 (Superb), −₹14.1 lakh (month
   today), +₹5.6 lakh (March under the plan). Each must match.

---

# PART VI. EMBEDDED FILES (the source of truth for every script)

Every block below is extracted byte for byte by `extract.py` (paths relative to `marksoc-case/`). Never retype a block. A fix
is made in the extracted file and logged in `DECISIONS.md`. Step B1 creates `extract.py` itself from the first block by hand.

<!-- FILE: extract.py -->
```python
"""Extract every embedded file from marksoc-case/PLAN.md into marksoc-case/. Run from the repo root:
python -X utf8 marksoc-case/extract.py"""
import re, io, pathlib
AK = pathlib.Path(__file__).resolve().parent; t = io.open(AK / "PLAN.md", encoding="utf-8").read()
n = 0
for m in re.finditer(r"<!-- FILE: (\S+) -->\n```\w+\n(.*?)\n```\n", t, re.S):
    if m.group(1) == "extract.py": continue
    p = AK / m.group(1); p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", m.group(1))
print("files", n)
```

<!-- FILE: case/01-case.md -->
```markdown
# Project DOBAARA: the case, transcribed with reference IDs

Source: `6adca1651d1c0_project_dobaara_case_by_marksoc_dtu.pdf` (7 pages) and `Project_DOBAARA_FAQ.pdf` (2 pages), both in
`marksoc-case/`. Wording is as printed. IDs are cited in the research as `[C-ID]`. All company, survey and financial data
are fictional and for this competition only.

## Cover (page 1)

| ID | Text |
|---|---|
| C-T1 | MarKSoc DTU, Case Competition 2026. Project DOBAARA. "Second hand phone. First class trust." Tikau Phones and the trust problem in refurbished smartphones. Case partner: CrackNontech |
| C-T2 | Participant case document. Fictional company and case. All figures are for this competition only |

## How this case works and ground rules (page 2)

| ID | Text |
|---|---|
| C-H1 | Your team of 3 to 5 is a strategy team hired by Tikau, a refurbished smartphone company in Noida. Read Sana Qureshi's first email (page 3), work through Exhibits 1 to 6 and answer the five questions in her second email (page 7) in one deck. No prior knowledge of phones, finance or consulting is needed |
| C-R1 | Use only the numbers in this document. Outside data earns no credit, and numbers that conflict with this document count against you |
| C-R2 | Some numbers are given indirectly, and some notes change how a number is used. Read every line, including the notes under each table |
| C-R3 | If something you need is missing, make an assumption and state it on the slide where you use it. Stated assumptions are rewarded. Hidden ones are not |
| C-R4 | Money is in Indian rupees, before GST. 1 lakh = 1,00,000 and 1 crore = 100 lakh. Show company totals in ₹ lakh to one decimal place. Show per phone figures in rupees |
| C-R5 | You may use AI tools. Every member of the team must be able to explain every number in the deck. Shortlisted teams will be asked to rebuild their key numbers in front of the judges |
| C-S1 | One deck in PDF: up to 8 main slides and up to 4 appendix slides. The first slide is an executive summary |
| C-S2 | The decision table on page 7 must be in the main slides, filled in for your plan |
| C-S3 | Show your working for every number that drives a decision, on the slide or in the appendix |
| C-S4 | Slide design earns no marks on its own |
| C-W1 | Use of data, 30%: contribution per phone, per channel and per month calculated correctly, with returns, warranty, supply and lab capacity included. Assumptions stated |
| C-W2 | Customer insight, 20%: one clear target customer chosen from the evidence in Exhibit 1 and a reason to trust Tikau that the numbers can pay for |
| C-W3 | Recommendation and trade offs, 30%: levers chosen and timed, every board test passed and a clear list of what Tikau will not do, with reasons |
| C-W4 | Marketing, 20%: a positioning line people remember, a launch that uses the right channels and claims that are true and can be proved |
| C-W5 | There is no single right answer. A team that chooses a different plan from the judges can still win if its numbers are correct and its reasoning is stronger |
| C-RW1 | Real world context (not for calculations): India's refurbished smartphone volumes grew 13% in January to June 2026 while new phone volumes fell about 11% (Counterpoint Research, August 2026) |
| C-RW2 | Complaints about phone and tablet repairs to the National Consumer Helpline rose from 19,057 in FY23 to 22,864 in FY25 (Department of Consumer Affairs, May 2025) |
| C-RW3 | In a GSMA consumer study, 86% of people worried that a refurbished phone might break sooner than a new one (GSMA, "Closing the Trust Gap") |
| C-RW4 | The Sanchar Saathi service of the Department of Telecommunications lets anyone check a phone's IMEI |

## The brief (page 3, Sana's first email)

| ID | Text |
|---|---|
| C-B1 | We sell about 7,200 refurbished phones a month through our website, the MegaKart marketplace and six stores in Delhi NCR |
| C-B2 | Our phones are good, but people do not trust them enough. Last month a customer wrote to us: "Phone theek hai, par bharosa nahi hua." |
| C-B3 | We lost ₹1.7 crore at the EBITDA level over the last twelve months, and our investors expect us to break even in March 2027 |
| C-B4 | Rohan Bedi, Head of Growth, wants to cut prices on Fair phones and spend more on performance ads. He says volume comes first and trust will follow |
| C-B5 | Kabir Arora, my cofounder, runs our lab. He wants every phone certified and a longer warranty before we spend more on ads |
| C-B6 | Our store managers want a trade in programme, so customers bring us their old phones and we depend less on wholesale traders |
| C-B7 | The board has approved ₹80 lakh of growth money for January to March 2027 |

## Company background and competitors (page 3)

| ID | Text |
|---|---|
| C-CO1 | Founded in 2021 in Noida by Sana Qureshi and Kabir Arora. Sana was a marketplace category manager. Kabir grew up working in his father's phone repair shop. "Tikau" means long lasting |
| C-CO2 | Tikau buys used phones in bulk from wholesale traders, tests and repairs them in its own lab and sells them with a 6 month warranty and a 7 day return window |
| C-CO3 | Last twelve months (November 2025 to October 2026): net revenue ₹139 crore, EBITDA minus ₹1.7 crore |
| C-CO4 | Fixed costs (lab staff, rent, technology and head office): ₹58 lakh a month |
| C-CO5 | Grades. Superb: looks almost new, battery health 85% or more. Good: light marks, battery health 80% or more. Fair: visible wear, fully working |
| C-K1 | PhoneBazaar: the largest organised seller of refurbished phones, with 180 stores and a 12 month warranty. Its prices are about 6% above Tikau's |
| C-K2 | Neighbourhood phone shops and markets: about 4 in 5 used phones in Tikau's cities are sold this way, at prices 10% to 15% below Tikau's. There is usually no bill and no warranty, and the condition of the battery and parts is unknown |
| C-K3 | New budget phones: a new phone at ₹10,000 competes directly with Tikau's Fair grade |

## Exhibit 1: Customer research, October 2026 (page 4)

| ID | Text |
|---|---|
| C-E1A | Why visitors did not buy (1,500 people who opened a Tikau product page and left; more than one answer allowed): worried the battery will not last 46%; cannot tell the real condition from photos 41%; 6 month warranty is too short 31%; wanted to see the phone in person 28%; price not low enough compared with a local shop 24%; phone might be stolen or locked 22%; worried about the previous owner's data 12% |
| C-E1B | What would make you buy from Tikau (same 1,500; more than one answer): battery health guaranteed at 85% or more 44%; 12 month warranty 39%; a condition report with real photos, a battery reading and an IMEI check 36%; take my old phone as part payment 31%; a price 5% lower 22% |
| C-E1C | Who buys from Tikau (900 customers who bought August to October 2026): Flagship on a budget, students and first jobbers aged 18 to 26 who want a premium phone they can afford, 34%, mostly Superb; Value seekers, want the cheapest phone that works, 29%, Fair; Family buyers, buy a phone for a parent or a child and want to know who will fix it, 21%, Good; Upgraders, have an old phone they want to sell or exchange, 16%, Superb and Good |
| C-E1D | Website funnel, October 2026: visited 9,60,000; opened a product page 3,10,000; added a phone to cart 26,000; placed an order 4,200. Store and MegaKart orders are not part of the website funnel. In stores, 1 in 3 visitors who pick up a phone buys it |

## Exhibit 2: The economics of one phone (page 4)

| ID | Text |
|---|---|
| C-E2 | Per phone sold, Superb / Good / Fair: average selling price ₹24,000 / ₹16,000 / ₹10,000; price paid to the wholesale trader ₹17,800 / ₹11,600 / ₹7,000; testing and repair in the lab ₹800 / ₹1,000 / ₹1,200; packing, delivery and payment fees ₹600 / ₹600 / ₹600; warranty claims as a share of phones sold 3% / 6% / 10%; returns within 7 days as a share of phones sold 4% / 7% / 13% |
| C-E2N1 | Warranty claims: each claim costs Tikau ₹2,500 on average in parts, labour and courier. Claim rates are the same in every channel |
| C-E2N2 | Returns: each return costs ₹1,800 in two way delivery, retesting, repacking and a lower resale price. Treat the sale as recovered when the returned phone is sold again. Do not reverse the sale. Charge ₹1,800 on the share of phones returned |
| C-E2N3 | Contribution per phone = selling price minus all the costs above, including expected warranty and return costs. It is before any marketing or channel cost |
| C-E2N4 | The return rates above apply to the website. Exhibit 3 gives the channels that differ |

## Exhibit 3: Where orders come from, monthly average August to October 2026 (page 5)

| ID | Text |
|---|---|
| C-E3 | Channel: orders a month; Superb / Good / Fair mix; fixed monthly spend; other cost; cost per order on the growth dashboard. Performance ads: 2,600; 20 / 40 / 40%; ₹60 lakh; none; ₹2,308. MegaKart marketplace: 2,000; 10 / 45 / 45%; ₹0; 12% of the selling price; ₹0. Creators: 900; 40 / 50 / 10%; ₹18 lakh; none; ₹2,000. Stores: 1,000; 45 / 45 / 10%; ₹21 lakh; none; ₹2,100. Referrals: 700; 35 / 50 / 15%; ₹0; ₹350 coupon on each order; ₹350. Total 7,200 orders and ₹99 lakh |
| C-E3N1 | Performance ads: paid social media and search ads. Website return rates apply |
| C-E3N2 | MegaKart keeps 12% of the selling price on every order. Tikau runs no ads there. Website return rates apply |
| C-E3N3 | Creators: phone review creators paid fixed monthly fees. Their buyers return phones 1.5 times as often as the website rate for the same grade |
| C-E3N4 | Stores: the fixed spend is rent and staff. Store buyers return phones half as often as the website rate for the same grade |
| C-E3N5 | Referrals: customers share a code, and each order placed with a code uses a ₹350 coupon. Website return rates apply |
| C-E3N6 | Growth dashboard: the last column is what the growth team reports every week: fixed spend plus coupons, divided by orders. It leaves out MegaKart's commission, returns, warranty and the grade each channel sells |
| C-E3N7 | Contribution after marketing for a channel = contribution of the phones it sells (using its own return rate) minus its fixed spend, commission and coupons |

## Exhibit 4: The lab and phone supply (page 5)

| ID | Text |
|---|---|
| C-E4a | Lab capacity: the lab tests 8,000 phones a month on two shifts. 10% fail the final check and are sold as spare parts for about what Tikau paid for them, so they cause no gain or loss. This leaves 7,200 phones a month that can be sold |
| C-E4b | Supply: wholesale traders can sell Tikau at most 2,000 Superb phones a month. Supply of Good and Fair phones is not a constraint |
| C-E4c | Battery checks: today the lab records the battery health shown on the trader's own testing tool. In a November spot check of 200 Good phones, Tikau's own tester found 22 phones below the 80% printed on their listings |
| C-E4d | Warranty service: repairs take 9 days on average, and 38% of claims need a second visit |
| C-E4e | "We are selling phones faster than we can check them properly." Kabir Arora, Cofounder |

## Exhibit 5: Rules on claims, reviews and data (page 5)

| ID | Text |
|---|---|
| C-E5a | Every claim must be true for every phone it is shown on. A battery claim needs a reading taken in Tikau's own lab |
| C-E5b | Every listing must say "refurbished". "Like new" and "as good as new" may not be used. "Genuine parts" may be used only if every replaced part is made by the phone's brand. Tikau's replacement batteries are compatible batteries, not brand made |
| C-E5c | Comparisons with PhoneBazaar or any other named seller need data Tikau can show. Tikau has none |
| C-E5d | No fake countdown timers, no false "only 1 left" messages and no discounts shown against a price Tikau never charged. These are dark patterns under India's 2023 consumer protection guidelines |
| C-E5e | Reviews must come from verified buyers. Any reward for a review must be disclosed and given whether the review is good or bad. Paid creator content must be labelled as an advertisement |
| C-E5f | No phone may be sold without a completed data wipe, and no phone whose IMEI has been reported lost or stolen may be sold |

## Exhibit 6: The options for January to March 2027 (page 6)

| ID | Text |
|---|---|
| C-E6A | A. Price push: no setup cost; ₹10 lakh a month of extra performance ads from the start month. The price of Fair phones falls 3% in every channel. In performance ads and MegaKart, orders rise 50% and the grade mix changes to 15% Superb, 35% Good and 50% Fair for performance ads, and to 5% Superb, 40% Good and 55% Fair for MegaKart |
| C-E6B1 | B1. Tikau Report: ₹15 lakh setup, no monthly cost. Every phone gets a condition report with real photos, a battery reading taken in Tikau's lab, an IMEI check against the government registry and a data wipe certificate. Cost: ₹120 per phone sold. Orders rise 8% in every channel. Return rates fall by 30% |
| C-E6B2 | B2. Battery 85 and 12 month warranty: ₹25 lakh setup, no monthly cost. Every Good and Fair phone leaves with battery health of 85% or more. 40% of Good phones need a new battery at ₹1,000 and 70% of Fair phones need one at ₹800. The warranty rises to 12 months and claim rates become Superb 4%, Good 6%, Fair 9%. Superb and Good prices rise 4%. Orders rise 8% in every channel. Return rates fall by 20% |
| C-E6B3 | B3. Trust campaign: no setup cost; ₹15 lakh a month. Only possible with B1 or B2. Orders rise 5% in every channel except MegaKart |
| C-E6C | C. Trade in: ₹35 lakh setup, no monthly cost (details below) |
| C-E6SH | Third lab shift: no setup cost; ₹9 lakh a month. The lab can deliver 1,800 more phones a month (9,000 in total). Hiring and training take 4 weeks, so it can start on 1 February or 1 March |
| C-E6TI1 | Trade in, "Purana do, Tikau lo": customers book a pickup and get an instant price for their old phone. Tikau expects 1,000 trade ins in February and 1,800 in March, then 800 more each month until it reaches 4,000 a month |
| C-E6TI2 | Each pickup costs ₹400. Traded phones arrive 30% Superb, 50% Good and 20% Fair. 15% of them fail the final check. Those are sold as spare parts with no gain or loss |
| C-E6TI3 | Each traded phone that passes is sold in the same month in place of a wholesale phone of the same grade, and saves Tikau 8% of the wholesale price for that grade. Traded Superb phones that pass are added to the 2,000 Superb phones available from traders. Traded phones replace wholesale phones in the lab, so they use no extra lab capacity |
| C-E6TI4 | 30% of people who trade in also buy a Tikau phone at the same time. They are new customers who would not otherwise have bought. They buy 40% Superb, 50% Good and 10% Fair, return phones at website rates and get ₹1,000 of extra credit, which reduces the contribution on that order. These orders do need lab capacity |
| C-E6TI5 | The ₹400 pickup cost and the ₹1,000 credit are operating costs. They reduce contribution and do not count against the ₹80 lakh |
| C-E6H1 | Timing: setup costs are paid in January. All changes start on 1 February 2027. In January, orders, prices, costs and return rates stay exactly as they are today, but any setup cost paid in January still reduces January EBITDA |
| C-E6H2 | Combining: you may choose any combination. When options are combined, multiply their effects on orders and on return rates. Price, cost and warranty changes apply to every phone sold, including trade in orders. The order increases from A, B1, B2 and B3 do not apply to trade in orders |
| C-E6H3 | Growth money: the setup costs, the third shift and the monthly cost of A and B3 are paid from the ₹80 lakh. Count each of them once, as growth money, in the month it is spent. Per phone costs (the condition report, new batteries, pickups and the trade in credit) reduce contribution and are not paid from the ₹80 lakh |
| C-E6H4 | When orders exceed what Tikau can deliver: first, if Superb orders exceed the Superb phones available, reduce Superb orders in every channel by the same percentage until they fit. Then, if total orders exceed lab capacity, reduce all remaining orders in every channel and grade by the same percentage until they fit. Orders that cannot be delivered are lost |

## Sana's second email (page 7)

| ID | Text |
|---|---|
| C-Q1 | What is holding Tikau back? Calculate contribution per phone for each grade, contribution after marketing for each channel, our monthly EBITDA today and our return rate. Tell me where we make money, where we lose it and whether our problem is demand or trust |
| C-Q2 | Who should we win? Choose one primary customer segment using Exhibit 1 and the economics. Write a positioning statement and one line a customer would remember. Hindi or Hinglish is welcome |
| C-Q3 | What should we do, and when? Choose your options from Exhibit 6 and, if you add the third shift, its start month. Fill in the table below, show that your plan passes every board test and show the numbers for at least one plan you rejected |
| C-Q4 | How will customers hear about it? Plan the February launch: the main idea, the channels from Exhibit 3 and what a customer sees first on a product page. List three claims you will make and two you will not, each checked against Exhibit 5 |
| C-Q5 | How will we know it is working? Give three numbers to track every week and the level at which you would change course. Tell me what you would do in April with the options you did not choose |
| C-T1t | Board test 1: growth money spent from January to March is at most ₹80 lakh |
| C-T2t | Board test 2: March 2027 EBITDA is ₹0 or more |
| C-T3t | Board test 3: the March 2027 return rate is 6.0% or less |
| C-T4t | Board test 4: every claim and tactic follows Exhibit 5 |
| C-D1 | EBITDA = contribution after marketing for all channels (including trade in orders, trade in savings and pickup costs), minus ₹58 lakh of fixed costs, minus growth money spent that month |
| C-D2 | Return rate = phones returned ÷ phones sold, across all channels |
| C-D3 | Decision table rows: options live; phones sold; contribution after marketing (₹ lakh); growth money spent (₹ lakh); EBITDA (₹ lakh); return rate. Columns: January, February, March |
| C-D4 | Below the table, show total growth money used, your number for each board test and the change in total January to March EBITDA compared with doing nothing |

## FAQ (2 pages)

| ID | Text |
|---|---|
| C-F1 | Up to 8 main slides and up to 4 appendix slides. The cover slide and the thank you slide do not count towards either limit. The executive summary is a main slide and must be the first slide after the cover |
| C-F2 | The decision table goes in the main slides, filled in for January, February and March |
| C-F3 | Only the PDF deck is assessed. Put any working the judges need to follow in the appendix slides |
| C-F4 | No outside data such as real market sizes or real company figures. Use only the numbers in the case. The real world context on page 2 explains why the case is set where it is; do not use it in calculations |
| C-F5 | Slide design earns no marks on its own. Clear slides help the judges follow your reasoning, which does count |
| C-F6 | The positioning line may be in Hindi or Hinglish |
| C-F7 | If something is missing, make a sensible assumption and state it on the slide where you use it |
| C-F8 | Company totals in ₹ lakh to one decimal place; per phone figures in rupees. Small rounding differences do not lose marks |
| C-F9 | "More than one answer allowed" describes the survey: shares add to more than 100% |
| C-F10 | Prices and costs are before GST |
| C-F11 | Everything about how the options work is in Exhibit 6; no further detail will be given |
| C-F12 | No part options: use each option as Exhibit 6 describes it. Other ideas for after March may be suggested, clearly labelled, but January to March numbers must use the options as written |
| C-F13 | EBITDA and the return rate follow the definitions on page 7 |
| C-F14 | All three months of the decision table are filled in |
| C-F15 | "Compared with doing nothing" is the difference between the plan's total January to March EBITDA and the total Tikau would earn over the same months with no changes |
| C-F16 | The judges decide whether claims follow Exhibit 5, using its rules |
| C-F17 | There is no one correct plan |
| C-F18 | Finalists present the exact PDF submitted on Unstop; slides cannot be edited, added or reordered |
| C-F19 | Judges ask questions after the presentation; any team member may be asked, including members who did not present |
```

<!-- FILE: model/dobaara_model.py -->
```python
# ===== DOBAARA MODEL v1 =====
"""Tikau Phones economics and plan model for Project DOBAARA (MarKSoc DTU Case Competition 2026).
Run from the repo root:  python -X utf8 marksoc-case/model/dobaara_model.py
Writes marksoc-case/model/model_outputs.json, marksoc-case/model/model_tables.md and marksoc-case/deck/values.json.
Add --dry to print the summary without writing anything.
Every input is a case number (pages 2, 3 and 7, Exhibits 1 to 6) or a stated assumption A01 to A20 (table T1).
Nothing here uses outside data: the case's ground rules give outside numbers no credit (C-R1, FAQ 4)."""
import io, json, sys, hashlib, itertools, pathlib, datetime

# ---------- formatting (Indian digit grouping; the minus sign is U+2212; no dashes anywhere) ----------
MINUS = "−"
def ind(n):
    s = str(int(round(abs(n))))
    if len(s) <= 3: return s
    head, tail, parts = s[:-3], s[-3:], []
    while len(head) > 2: parts.insert(0, head[-2:]); head = head[:-2]
    if head: parts.insert(0, head)
    return ",".join(parts) + "," + tail
def r1(v): r = round(v + 1e-9, 1); return 0.0 if abs(r) < 0.05 else r
def lk(v, sign=False):
    r = r1(v); return (MINUS if r < 0 else ("+" if sign and r > 0 else "")) + "%.1f" % abs(r)
def rl(v, sign=False):
    r = r1(v); return (MINUS if r < 0 else ("+" if sign and r > 0 else "")) + "₹%.1f lakh" % abs(r)
def rs(v, sign=False):
    return (MINUS if round(v) < 0 else ("+" if sign and round(v) > 0 else "")) + "₹" + ind(v)
def n0(v): return (MINUS if round(v) < 0 else "") + ind(v)
def pc(v, dp=1): return "%.*f%%" % (dp, v * 100)

# ---------- case facts (IDs resolve to marksoc-case/case/01-case.md) ----------
GR = ("S", "G", "F"); GN = {"S": "Superb", "G": "Good", "F": "Fair"}
PRICE = {"S": 24000, "G": 16000, "F": 10000}          # C-E2
BUY = {"S": 17800, "G": 11600, "F": 7000}             # C-E2
LAB = {"S": 800, "G": 1000, "F": 1200}                # C-E2
PACK = 600                                            # C-E2
CLAIM = {"S": 0.03, "G": 0.06, "F": 0.10}             # C-E2
RET = {"S": 0.04, "G": 0.07, "F": 0.13}               # C-E2 (website rates, C-E2N4)
CLAIM_COST, RET_COST = 2500, 1800                     # C-E2N1, C-E2N2
FIXED = 58.0                                          # C-CO4, ₹ lakh a month
LTM_REV_CR, LTM_EBITDA_CR = 139.0, -1.7               # C-CO3
BUDGET = 80.0                                         # C-B7, ₹ lakh, January to March 2027
LAB_TESTED, LAB_FAIL, LAB_SELL = 8000, 0.10, 7200     # C-E4a
SHIFT_ADD, SHIFT_COST = 1800, 9.0                     # C-E6SH (9,000 in total)
SUPERB_CAP = 2000                                     # C-E4b
SPOT_N, SPOT_BAD = 200, 22                            # C-E4c
REPAIR_DAYS, SECOND_VISIT = 9, 0.38                   # C-E4d
# channels: key, label, orders a month, grade mix, fixed spend (₹ lakh), commission share, coupon (₹), return multiplier, dashboard cost per order (₹)
CH = [("ads", "Performance ads", 2600, {"S": .20, "G": .40, "F": .40}, 60.0, 0.00, 0, 1.0, 2308),   # C-E3, C-E3N1
      ("mk", "MegaKart", 2000, {"S": .10, "G": .45, "F": .45}, 0.0, 0.12, 0, 1.0, 0),               # C-E3N2
      ("cr", "Creators", 900, {"S": .40, "G": .50, "F": .10}, 18.0, 0.00, 0, 1.5, 2000),            # C-E3N3
      ("st", "Stores", 1000, {"S": .45, "G": .45, "F": .10}, 21.0, 0.00, 0, 0.5, 2100),             # C-E3N4
      ("rf", "Referrals", 700, {"S": .35, "G": .50, "F": .15}, 0.0, 0.00, 350, 1.0, 350)]           # C-E3N5
CHK = [c[0] for c in CH]; CHN = {c[0]: c[1] for c in CH}; CHN["ti"] = "Trade in orders"
REASONS = [("Worried the battery will not last", 46), ("Cannot tell the real condition from photos", 41), ("6 month warranty is too short", 31),
           ("Wanted to see the phone in person", 28), ("Price not low enough compared with a local shop", 24), ("Phone might be stolen or locked", 22),
           ("Worried about the previous owner's data", 12)]                                        # C-E1A
OFFERS = [("Battery health guaranteed at 85% or more", 44), ("12 month warranty", 39), ("A condition report with real photos, a battery reading and an IMEI check", 36),
          ("Take my old phone as part payment", 31), ("A price 5% lower", 22)]                       # C-E1B
SEGS = [("Flagship on a budget", 34, "Superb"), ("Value seekers", 29, "Fair"), ("Family buyers", 21, "Good"), ("Upgraders", 16, "Superb and Good")]  # C-E1C
FUNNEL = [("Visited the website", 960000), ("Opened a product page", 310000), ("Added a phone to cart", 26000), ("Placed an order", 4200)]  # C-E1D
STORE_CONV = 1 / 3                                                                                  # C-E1D note
# which Exhibit 6 option answers each lost-sale reason (team mapping; T9). "Stores" = an existing channel, not an option.
REASON_FIX = ["B2 (85% battery) with B1 (lab reading)", "B1 (real photos, condition report)", "B2 (12 month warranty)", "Stores (existing channel)",
              "A (Fair price cut only)", "B1 (IMEI check)", "B1 (data wipe certificate)"]
# segment scorecard (team judgement, 1 weak to 5 strong; T10). Criteria and the case basis for each score are printed with the table.
SEG_CRIT = ["Size: share of buyers", "Contribution a phone after the plan", "Room to grow in Q1", "Return risk of the grade", "Their worry is what B1 + B2 fix",
            "A lever that passes the board tests reaches them"]
SEG_SCORE = {"Flagship on a budget": [5, 5, 1, 5, 3, 3], "Value seekers": [4, 1, 5, 1, 1, 1], "Family buyers": [3, 3, 5, 3, 5, 5], "Upgraders": [2, 4, 3, 4, 2, 1]}
SEG_BASIS = {"Flagship on a budget": ["34%", "Superb ₹5,500", "Superb capped at 2,000", "Superb 4%", "photos and condition (41%)", "B1 + B2, but Superb is rationed"],
             "Value seekers": ["29%", "Fair ₹164", "no cap", "Fair 13%", "price (24%)", "only A, which fails tests 2 to 4"],
             "Family buyers": ["21%", "Good ₹2,699", "no cap", "Good 7%", "who will fix it: 12 months (39%), battery (46%)", "B1 + B2"],
             "Upgraders": ["16%", "Superb and Good", "half capped", "4% to 7%", "part payment (31%)", "C, which does not fit the ₹80 lakh with B1 + B2"]}
# levers (C-E6): setup ₹ lakh paid in January; monthly ₹ lakh from February
LEV = {"A": dict(setup=0, monthly=10.0), "B1": dict(setup=15.0, monthly=0), "B2": dict(setup=25.0, monthly=0),
       "B3": dict(setup=0, monthly=15.0), "C": dict(setup=35.0, monthly=0)}
# lever effects as printed in Exhibit 6 (the sensitivity scales k_* change them only in T18 and T19)
BASEP = dict(upA=0.50, upB1=0.08, upB2=0.08, upB3=0.05, rrB1=0.30, rrB2=0.20, gbat=0.40, fbat=0.70, gbat_c=1000, fbat_c=800, rep=120,
             pB2=0.04, pA=0.03, tin_fail=0.15, tin_buy=0.30, tin_save=0.08, pickup=400, credit=1000, kcl=1.0)
MIX_A = {"ads": {"S": .15, "G": .35, "F": .50}, "mk": {"S": .05, "G": .40, "F": .55}}             # C-E6A
CLAIM_B2 = {"S": 0.04, "G": 0.06, "F": 0.09}                                                         # C-E6B2
TIN_ARR = {"S": .30, "G": .50, "F": .20}; TIN_BUYMIX = {"S": .40, "G": .50, "F": .10}               # C-E6TI2, C-E6TI4
TIN_SCHED = {"Jan": 0, "Feb": 1000, "Mar": 1800}                                                     # C-E6TI1
MONTHS = ("Jan", "Feb", "Mar")

# ---------- assumptions (T1): every gap in the case, stated once, used everywhere ----------
A = [
 ("A01", "Lever A's ₹10 lakh of extra performance ads is counted once, as growth money in the month spent, and is not added again to the performance-ads fixed spend", "C-E6H3 says count each growth item once"),
 ("A02", "Each channel's fixed spend (₹99 lakh in all) stays as today in every plan and every month", "No lever in Exhibit 6 changes it"),
 ("A03", "Commission, coupons and every per-phone cost apply only to delivered orders; an order that cannot be delivered earns and costs nothing", "C-E6H4: undelivered orders are lost"),
 ("A04", "Rationing includes trade in orders: Superb first, pro rata across all channels, then all orders pro rata to the lab limit", "C-E6H4 read literally"),
 ("A05", "Return-rate cuts from B1 and B2 multiply each channel's own rate, including the website rate that trade in buyers pay", "C-E6H2: multiply effects on return rates"),
 ("A06", "The 15% trade in failure rate applies equally to each arriving grade", "C-E6TI2 gives one rate"),
 ("A07", "30% of all trade ins, failed or passed, also buy a Tikau phone", "C-E6TI4: 30% of people who trade in"),
 ("A08", "From February the Superb rule (85% or more) is applied to Tikau's own lab reading; with no failure rate in the case, no Superb phone changes grade", "C-E5a, C-E6B1; no data on Superb readings"),
 ("A09", "January is today's month in every plan, so doing nothing earns today's result in each of the three months", "C-E6H1 and FAQ 15"),
 ("A10", "A third shift adds 1,800 sellable phones, so the limit becomes 9,000; its ₹9 lakh is growth money in each month it runs", "C-E6SH, C-E6H3"),
 ("A11", "B2's 4% price rise raises MegaKart's 12% commission on those phones, because the commission is a share of the selling price", "C-E3N2"),
 ("A12", "The ₹120 report cost and the B2 battery costs apply to trade in buyers' phones too", "C-E6H2: cost changes apply to every phone sold"),
 ("A13", "Weekly figures use 4.33 weeks a month", "Team convention"),
 ("A14", "The November spot check (22 of 200 Good phones below 80%) applies to all Good phones sold, so about 351 a month carry an untrue battery claim today", "C-E4c, an indicative scale-up only"),
 ("A15", "In April Tikau has new growth money for the next quarter and the trade in ramp restarts at 1,000, then 1,800, then 800 more a month to 4,000", "C-E6TI1 pattern; April is outside the board tests"),
 ("A16", "Stress tests move only what Tikau does not control (the order rise, the return cut, battery shares, claim rates) 25% worse or better; prices and the ₹120 report cost are Tikau's decisions and stay as printed; the plan uses the printed values", "Team convention for Q5 trigger levels"),
 ("A17", "Revenue in the reconciliation is gross selling price before commission; the case's ₹139 crore is read as that figure", "C-CO3"),
 ("A18", "Month figures are averages of August to October 2026 and stand for November 2026 to January 2027 as well", "C-E3 title, C-E6H1"),
 ("A19", "Store, creator and MegaKart return multipliers stay as today when B1 and B2 apply", "C-E3 notes"),
 ("A20", "Trade in savings count only for traded phones that pass the check; a failed traded phone is sold as parts at cost, like a failed lab phone", "C-E6TI2, C-E4a"),
]

A_SHORT = {"A01": "Lever A's ₹10 lakh counts once, as growth money, not in ads' fixed spend",
           "A02": "Every channel's fixed spend stays as today in every plan and month",
           "A03": "Commission, coupons and per-phone costs apply to delivered orders only",
           "A04": "Rationing covers trade in orders too: Superb first, then all orders pro rata",
           "A05": "Return cuts from B1 and B2 multiply each channel's own return rate",
           "A06": "The 15% trade in failure rate applies equally to every grade",
           "A07": "30% of all trade ins, failed or passed, also buy a Tikau phone",
           "A08": "From February Superb is graded on Tikau's reading; none changes grade",
           "A09": "January is today in every plan; doing nothing repeats today three times",
           "A10": "A third shift adds 1,800 sellable phones for ₹9 lakh of growth money a month",
           "A11": "B2's 4% price rise also raises MegaKart's 12% commission",
           "A12": "The ₹120 report and B2 battery costs apply to trade in buyers' phones too",
           "A13": "Weekly figures use 4.33 weeks a month",
           "A14": "The spot check rate (22 of 200) applies to every Good phone sold",
           "A15": "April brings new growth money; trade in ramps 1,000, 1,800, then +800 a month",
           "A16": "Stress tests move only what Tikau does not control, 25% worse or better",
           "A17": "The case's ₹139 crore is read as selling price before commission",
           "A18": "August to October averages stand for November to January",
           "A19": "Store, creator and MegaKart return multipliers hold under B1 and B2",
           "A20": "Only traded phones that pass save 8%; failed ones go for parts at cost"}

# ---------- the month engine ----------
def month_calc(levers, shift_on, tin, P=None, detail=False):
    """One month of Tikau with the given live levers. Returns orders, deliveries, contribution after marketing (₹ lakh), returns."""
    P = dict(BASEP, **(P or {}))
    A_, B1, B2, B3, Cl = ("A" in levers), ("B1" in levers), ("B2" in levers), ("B3" in levers), ("C" in levers)
    price = dict(PRICE); claim = dict(CLAIM); extra = {g: 0.0 for g in GR}
    if A_: price["F"] = PRICE["F"] * (1 - P["pA"])
    if B2:
        price["S"] = PRICE["S"] * (1 + P["pB2"]); price["G"] = PRICE["G"] * (1 + P["pB2"]); claim = {g: CLAIM_B2[g] * P["kcl"] for g in GR}
        extra["G"] += P["gbat"] * P["gbat_c"]; extra["F"] += P["fbat"] * P["fbat_c"]
    if B1:
        for g in GR: extra[g] += P["rep"]
    retm = (1 - P["rrB1"] if B1 else 1) * (1 - P["rrB2"] if B2 else 1)
    dem = {}
    for k, name, n, mix, fx, cm, cp, rm, dash in CH:
        m, mult = dict(mix), 1.0
        if A_ and k in MIX_A: mult *= 1 + P["upA"]; m = dict(MIX_A[k])
        if B1: mult *= 1 + P["upB1"]
        if B2: mult *= 1 + P["upB2"]
        if B3 and k != "mk": mult *= 1 + P["upB3"]
        dem[k] = {g: n * mult * m[g] for g in GR}
    supS, save, pick, tin_pass = float(SUPERB_CAP), 0.0, 0.0, {g: 0.0 for g in GR}
    if Cl and tin > 0:
        ps = tin * (1 - P["tin_fail"]); tin_pass = {g: ps * TIN_ARR[g] for g in GR}; supS += tin_pass["S"]
        save = sum(tin_pass[g] * BUY[g] * P["tin_save"] for g in GR) / 1e5; pick = tin * P["pickup"] / 1e5
        b = tin * P["tin_buy"]; dem["ti"] = {g: b * TIN_BUYMIX[g] for g in GR}
    deliv = {k: dict(v) for k, v in dem.items()}
    demS = sum(o["S"] for o in deliv.values()); fS = 1.0
    if demS > supS:
        fS = supS / demS
        for o in deliv.values(): o["S"] *= fS
    cap = LAB_SELL + (SHIFT_ADD if shift_on else 0); tot = sum(sum(o.values()) for o in deliv.values()); fC = 1.0
    if tot > cap:
        fC = cap / tot
        for o in deliv.values():
            for g in GR: o[g] *= fC
    rows = {}; cam = rets = sold = 0.0; unit = {}
    for k, o in deliv.items():
        spec = next((c for c in CH if c[0] == k), None)
        fx, cm, cp, rm = (spec[4], spec[5], spec[6], spec[7]) if spec else (0.0, 0.0, 0, 1.0)
        gross = rr = 0.0; u = {}
        for g in GR:
            r = RET[g] * rm * retm
            u[g] = price[g] - BUY[g] - LAB[g] - PACK - extra[g] - claim[g] * CLAIM_COST - r * RET_COST - cm * price[g]
            gross += o[g] * u[g]; rr += o[g] * r
        q = sum(o.values()); after = gross / 1e5 - fx - cp * q / 1e5 - (P["credit"] * q / 1e5 if k == "ti" else 0)
        rows[k] = dict(q=q, grade=dict(o), gross=gross / 1e5, cam=after, fixed=fx, comm=sum(o[g] * cm * price[g] for g in GR) / 1e5,
                       coupons=cp * q / 1e5, credit=(P["credit"] * q / 1e5 if k == "ti" else 0), returns=rr, unit=u, demand=sum(dem[k].values()))
        cam += after; rets += rr; sold += q
        unit[k] = u
    cam += save - pick
    web = {g: price[g] - BUY[g] - LAB[g] - PACK - extra[g] - claim[g] * CLAIM_COST - RET[g] * retm * RET_COST for g in GR}
    return dict(cam=cam, sold=sold, rets=rets, rr=rets / sold, rows=rows, save=save, pick=pick, fS=fS, fC=fC, demS=demS, supS=supS,
                demand=sum(sum(v.values()) for v in dem.values()), cap=cap, web=web, price=price, claim=claim, extra=extra, retm=retm,
                grade_sold={g: sum(o[g] for o in deliv.values()) for g in GR}, tin=tin, tin_pass=tin_pass)

def plan_calc(levers, shift, P=None, sched=None):
    """Three months, January to March 2027. shift is None, 'Feb' or 'Mar'."""
    levers = set(levers); sched = sched or TIN_SCHED
    setup = sum(LEV[l]["setup"] for l in levers); mon = sum(LEV[l]["monthly"] for l in levers)
    gm = {"Jan": setup, "Feb": mon + (SHIFT_COST if shift == "Feb" else 0), "Mar": mon + (SHIFT_COST if shift in ("Feb", "Mar") else 0)}
    ms = {"Jan": month_calc(set(), False, 0, P), "Feb": month_calc(levers, shift == "Feb", sched["Feb"], P),
          "Mar": month_calc(levers, shift in ("Feb", "Mar"), sched["Mar"], P)}
    e = {m: ms[m]["cam"] - FIXED - gm[m] for m in MONTHS}
    tests = {"t1": sum(gm.values()) <= BUDGET + 1e-9, "t2": e["Mar"] >= -1e-9, "t3": ms["Mar"]["rr"] <= 0.06 + 1e-12, "t4": "B1" in levers}
    return dict(levers=sorted(levers, key=lambda x: ["A", "B1", "B2", "B3", "C"].index(x)), shift=shift, gm=gm, gm_tot=sum(gm.values()), m=ms, e=e,
                q1=sum(e.values()), tests=tests, ok=all(tests.values()))

def label(p):
    s = " + ".join(p["levers"]) if p["levers"] else "Do nothing"
    return s + ({"Feb": " + shift from Feb", "Mar": " + shift from Mar"}.get(p["shift"], ""))

def all_plans(P=None):
    out = []
    for r in range(0, 6):
        for combo in itertools.combinations(["A", "B1", "B2", "B3", "C"], r):
            if "B3" in combo and not ({"B1", "B2"} & set(combo)): continue    # C-E6B3: B3 only with B1 or B2
            for sh in (None, "Feb", "Mar"): out.append(plan_calc(combo, sh, P))
    return out

def bridge_march(P=None):
    """Status-quo March to plan March, one effect at a time (the order is fixed so the steps add up exactly)."""
    base = month_calc(set(), False, 0, P); plan = month_calc({"B1", "B2"}, True, 0, P)
    deliv = {k: plan["rows"][k]["grade"] for k in plan["rows"]}
    def cam(price, claim, extra, retm):
        t = 0.0
        for k, name, n, mix, fx, cm, cp, rm, dash in CH:
            o = deliv[k]
            for g in GR: t += o[g] * (price[g] - BUY[g] - LAB[g] - PACK - extra[g] - claim[g] * CLAIM_COST - RET[g] * rm * retm * RET_COST - cm * price[g])
            t -= fx * 1e5 + cp * sum(o.values())
        return t / 1e5
    z = {g: 0.0 for g in GR}; pp = plan["price"]; bat = {"S": 0.0, "G": BASEP["gbat"] * BASEP["gbat_c"], "F": BASEP["fbat"] * BASEP["fbat_c"]}
    rep = {g: bat[g] + BASEP["rep"] for g in GR}
    lv = [base["cam"], cam(PRICE, CLAIM, z, 1), cam(pp, CLAIM, z, 1), cam(pp, CLAIM, bat, 1), cam(pp, CLAIM, rep, 1), cam(pp, CLAIM_B2, rep, 1), cam(pp, CLAIM_B2, rep, plan["retm"])]
    names = ["More phones sold", "Superb and Good prices up 4%", "New batteries (B2)", "Tikau Report, ₹120 a phone", "Warranty claim rates", "Fewer returns"]
    steps = [(names[i], lv[i + 1] - lv[i]) for i in range(6)]
    return dict(start=base["cam"] - FIXED, steps=steps, shift=-SHIFT_COST, end=lv[-1] - FIXED - SHIFT_COST, plan_cam=plan["cam"])

def bisect(f, lo, hi, n=80):
    for _ in range(n):
        mid = (lo + hi) / 2
        if f(mid) < 0: lo = mid
        else: hi = mid
    return hi

def run():
    out = {"meta": {"version": "dobaara-model v1"}}
    base = month_calc(set(), False, 0)
    # ---- T2: one phone, by grade, website rates ----
    t2 = {}
    for g in GR:
        w = CLAIM[g] * CLAIM_COST; r = RET[g] * RET_COST
        t2[g] = dict(price=PRICE[g], buy=BUY[g], lab=LAB[g], pack=PACK, warranty=w, returns=r, contrib=PRICE[g] - BUY[g] - LAB[g] - PACK - w - r)
    # ---- T3: by grade and return regime ----
    t3 = {g: {m: PRICE[g] - BUY[g] - LAB[g] - PACK - CLAIM[g] * CLAIM_COST - RET[g] * m * RET_COST for m in (0.5, 1.0, 1.5)} for g in GR}
    # ---- T4: channels today ----
    t4 = {}
    for k, name, n, mix, fx, cm, cp, rm, dash in CH:
        r = base["rows"][k]
        t4[k] = dict(name=name, orders=n, S=mix["S"], G=mix["G"], F=mix["F"], gross=r["gross"], comm=r["comm"], fixed=fx, coupons=r["coupons"],
                     contrib_before=r["gross"] + r["comm"], cam=r["cam"], cam_per=r["cam"] * 1e5 / n, dash=dash,
                     true_cost=(fx * 1e5 + r["comm"] * 1e5 + r["coupons"] * 1e5) / n, ret_rate=r["returns"] / n, returns=r["returns"],
                     wc=sum(n * mix[g] * CLAIM[g] for g in GR))
    tot_rev = sum(base["grade_sold"][g] * PRICE[g] for g in GR) / 1e5
    claims_n = sum(base["grade_sold"][g] * CLAIM[g] for g in GR)
    t5 = dict(cam=base["cam"], fixed=FIXED, ebitda=base["cam"] - FIXED, ltm=(base["cam"] - FIXED) * 12, ltm_case=LTM_EBITDA_CR * 100,
              rev_month=tot_rev, rev_ltm_cr=tot_rev * 12 / 100, rev_case=LTM_REV_CR, sold=base["sold"], rets=base["rets"], rr=base["rr"],
              claims_n=claims_n, claims_cost=claims_n * CLAIM_COST / 1e5, ret_cost=base["rets"] * RET_COST / 1e5,
              grade_sold=base["grade_sold"], comm_total=sum(base["rows"][k]["comm"] for k in CHK), fixed_ch=sum(c[4] for c in CH),
              coupons=sum(base["rows"][k]["coupons"] for k in CHK), gross_total=sum(base["rows"][k]["gross"] for k in CHK) + sum(base["rows"][k]["comm"] for k in CHK),
              grade_contrib={g: base["grade_sold"][g] * t2[g]["contrib"] / 1e5 for g in GR})
    t5["trust_tax"] = t5["claims_cost"] + t5["ret_cost"]
    # ---- funnel ----
    fun = [dict(step=s, n=v, conv=(v / FUNNEL[i - 1][1] if i else 1.0)) for i, (s, v) in enumerate(FUNNEL)]
    web_orders = sum(t4[k]["orders"] for k in ("ads", "cr", "rf"))
    # ---- capacity and the battery spot check ----
    cap = dict(tested=LAB_TESTED, fail=LAB_FAIL, sellable=LAB_SELL, sold=base["sold"], util=base["sold"] / LAB_SELL, superb=base["grade_sold"]["S"],
               superb_cap=SUPERB_CAP, superb_head=SUPERB_CAP - base["grade_sold"]["S"], spot=SPOT_BAD / SPOT_N,
               bad_month=SPOT_BAD / SPOT_N * base["grade_sold"]["G"], repair_days=REPAIR_DAYS, second=SECOND_VISIT)
    # ---- lever unit effects (website rates) ----
    def web(lv):
        mc = month_calc(set(lv), True, 0); return mc["web"]
    t11 = {"Today": web(()), "A": web(("A",)), "B1": web(("B1",)), "B2": web(("B2",)), "B1 + B2": web(("B1", "B2")), "A + B1 + B2": web(("A", "B1", "B2"))}
    # ---- every plan ----
    plans = all_plans(); feas = [p for p in plans if p["ok"]]; feas.sort(key=lambda p: -p["q1"])
    nothing = plan_calc((), None); best = feas[0]
    assert best["levers"] == ["B1", "B2"] and best["shift"] == "Feb", label(best)
    named = [("Do nothing", (), None), ("Rohan: price push", ("A",), None), ("Rohan with a third shift", ("A",), "Feb"),
             ("Kabir: certify and warranty", ("B1", "B2"), None), ("Store managers: trade in", ("C",), None),
             ("Battery promise without the report", ("B2",), "Feb"), ("Everything that fits on paper", ("B1", "B2", "C"), "Feb"),
             ("Trade in instead of the shift", ("B1", "B2", "C"), None), ("Our plan", ("B1", "B2"), "Feb")]
    t14 = []
    for nm, lv, sh in named:
        p = plan_calc(lv, sh); t14.append(dict(name=nm, label=label(p), gm=p["gm_tot"], e=p["e"], q1=p["q1"], d=p["q1"] - nothing["q1"], rr=p["m"]["Mar"]["rr"],
                                               tests=p["tests"], ok=p["ok"], sold=p["m"]["Mar"]["sold"], demand=p["m"]["Mar"]["demand"]))
    rec = best
    # ---- T15 decision table ----
    t15 = {m: dict(options=("None live; ₹40 lakh of B1 and B2 setup paid" if m == "Jan" else "B1, B2, third shift"), sold=rec["m"][m]["sold"], cam=rec["m"][m]["cam"],
                   gm=rec["gm"][m], ebitda=rec["e"][m], rr=rec["m"][m]["rr"]) for m in MONTHS}
    # ---- bridge ----
    br = bridge_march()
    # ---- sensitivities (T18, T19) ----
    def mar_e(P=None, mult=None):
        PP = dict(BASEP, **(P or {}))
        if mult is not None: PP["upB1"] = mult - 1; PP["upB2"] = 0.0
        m = month_calc({"B1", "B2"}, True, 0, PP); return m["cam"] - FIXED - SHIFT_COST, m
    be_mult = bisect(lambda x: mar_e(mult=x)[0], 1.0, 1.1664)
    be_orders = mar_e(mult=be_mult)[1]["sold"]
    be_gbat = bisect(lambda x: -mar_e({"gbat": x})[0], 0.40, 1.0)
    be_fbat = bisect(lambda x: -mar_e({"fbat": x})[0], 0.70, 1.0)
    def rr_at(retm):
        PP = dict(BASEP); PP["rrB1"] = 1 - retm; PP["rrB2"] = 0.0; return month_calc({"B1", "B2"}, True, 0, PP)["rr"]
    rr_mult_6 = bisect(lambda x: rr_at(x) - 0.06, 0.56, 1.0)
    rr_mult_55 = bisect(lambda x: rr_at(x) - 0.055, 0.56, 1.0)
    # Stress only what Tikau does not control: customers' response, returns, the lab's battery findings and claims.
    # Prices (+4%) and the ₹120 report cost are Tikau's own decisions and stay as printed.
    UP, DN = ("upB1", "upB2", "rrB1", "rrB2"), ("gbat", "fbat", "kcl")
    tor_items = [("Order rise", ["upB1", "upB2"]), ("Good battery swaps", ["gbat"]), ("Fair battery swaps", ["fbat"]),
                 ("Return cut", ["rrB1", "rrB2"]), ("Claim rates after B2", ["kcl"])]
    def stress(keys, k):   # k = 0.75 bear, 1.25 bull: good effects scale with k, cost drivers scale against it
        return {key: (BASEP[key] * k if key in UP else (min(1.0, BASEP[key] * (2 - k)) if key in ("gbat", "fbat") else BASEP[key] * (2 - k))) for key in keys}
    base_e = mar_e()[0]; tor = []
    for nm, keys in tor_items:
        tor.append(dict(name=nm, bear=mar_e(stress(keys, 0.75))[0], bull=mar_e(stress(keys, 1.25))[0]))
        tor[-1]["swing"] = tor[-1]["bull"] - tor[-1]["bear"]
    tor.sort(key=lambda t: -t["swing"])
    def scen(k):
        p = plan_calc(("B1", "B2"), "Feb", stress(UP + DN, k)); return dict(e=p["e"], q1=p["q1"], d=p["q1"] - nothing["q1"], rr=p["m"]["Mar"]["rr"], sold=p["m"]["Mar"]["sold"], ok=p["ok"])
    scenarios = {"Bear": scen(0.75), "Base": scen(1.0), "Bull": scen(1.25)}
    # ---- April options (T20) ----
    april = []
    for nm, lv, tin in [("Keep the plan", {"B1", "B2"}, 0), ("Add B3 trust campaign", {"B1", "B2", "B3"}, 0), ("Add A price push", {"A", "B1", "B2"}, 0)] + \
                       [("Add C trade in, month %d" % (i + 1), {"B1", "B2", "C"}, t) for i, t in enumerate((1000, 1800, 2600, 3400, 4000))]:
        m = month_calc(lv, True, tin); monthly = SHIFT_COST + sum(LEV[l]["monthly"] for l in lv)
        april.append(dict(name=nm, tin=tin, cam=m["cam"], ebitda=m["cam"] - FIXED - monthly, sold=m["sold"], demand=m["demand"], rr=m["rr"]))
    # ---- channels in March under the plan ----
    chm = {k: dict(q=rec["m"]["Mar"]["rows"][k]["q"], cam=rec["m"]["Mar"]["rows"][k]["cam"], per=rec["m"]["Mar"]["rows"][k]["cam"] * 1e5 / rec["m"]["Mar"]["rows"][k]["q"],
                   rr=rec["m"]["Mar"]["rows"][k]["returns"] / rec["m"]["Mar"]["rows"][k]["q"]) for k in CHK}
    # ---- checks ----
    ck = {}
    ck["website orders = funnel orders"] = web_orders == FUNNEL[-1][1]
    ck["orders today = lab sellable"] = abs(base["sold"] - LAB_SELL) < 1e-6 and LAB_TESTED * (1 - LAB_FAIL) == LAB_SELL
    ck["channel fixed spend = ₹99 lakh"] = abs(sum(c[4] for c in CH) - 99) < 1e-9
    ck["dashboard figures reproduce"] = all(abs((c[4] * 1e5 + c[6] * c[2]) / c[2] - c[8]) < 1 for c in CH)
    ck["monthly EBITDA x 12 within ₹1 lakh of LTM"] = abs(t5["ltm"] - t5["ltm_case"]) < 1.0
    ck["revenue x 12 within ₹1 crore of LTM"] = abs(t5["rev_ltm_cr"] - LTM_REV_CR) < 1.0
    ck["grade mixes sum to 100%"] = all(abs(sum(c[3].values()) - 1) < 1e-9 for c in CH) and abs(sum(TIN_ARR.values()) - 1) < 1e-9
    ck["84 plans screened"] = len(plans) == 84
    ck["5 plans pass every test"] = len(feas) == 5
    ck["recommended plan passes all four tests"] = rec["ok"]
    ck["bridge adds up"] = abs(br["start"] + sum(s[1] for s in br["steps"]) + br["shift"] - br["end"]) < 1e-6 and abs(br["end"] - rec["e"]["Mar"]) < 1e-6
    ck["decision table EBITDA = CAM − 58 − growth money"] = all(abs(t15[m]["ebitda"] - (t15[m]["cam"] - FIXED - t15[m]["gm"])) < 1e-9 for m in MONTHS)
    ck["march break-even uplift below plan uplift"] = be_mult < 1.08 * 1.08
    out["checks"] = ck
    out.update(dict(A=[dict(id=a[0], text=a[1], basis=a[2]) for a in A], T2=t2, T3=t3, T4=t4, T5=t5, funnel=fun, web_orders=web_orders, cap=cap,
                    T11=t11, nothing=dict(e=nothing["e"], q1=nothing["q1"]), plans=[dict(label=label(p), levers=p["levers"], shift=p["shift"], gm=p["gm"], gm_tot=p["gm_tot"],
                    e=p["e"], q1=p["q1"], d=p["q1"] - nothing["q1"], rr=p["m"]["Mar"]["rr"], sold=p["m"]["Mar"]["sold"], demand=p["m"]["Mar"]["demand"], tests=p["tests"], ok=p["ok"]) for p in plans],
                    feasible=[label(p) for p in feas], T14=t14, T15=t15, rec=dict(label=label(rec), gm=rec["gm"], gm_tot=rec["gm_tot"], e=rec["e"], q1=rec["q1"], d=rec["q1"] - nothing["q1"],
                    rr={m: rec["m"][m]["rr"] for m in MONTHS}, sold={m: rec["m"][m]["sold"] for m in MONTHS}, demand={m: rec["m"][m]["demand"] for m in MONTHS},
                    grade_sold={m: rec["m"][m]["grade_sold"] for m in MONTHS}, fS=rec["m"]["Mar"]["fS"], demS=rec["m"]["Mar"]["demS"], web=rec["m"]["Mar"]["web"]),
                    bridge=br, chm=chm, sens=dict(be_mult=be_mult, be_orders=be_orders, be_gbat=be_gbat, be_fbat=be_fbat, rr_mult_6=rr_mult_6, rr_mult_55=rr_mult_55,
                    base_e=base_e), tornado=tor, scenarios=scenarios, april=april))
    return out, rec, nothing, base, plans

# ---------- tables for the research document ----------
def tables(o):
    L = []; add = L.append
    def tab(title, head, rows, src):
        add("## " + title); add(""); add("| " + " | ".join(head) + " |"); add("|" + "|".join(["---"] * len(head)) + "|")
        for r in rows: add("| " + " | ".join(str(x) for x in r) + " |")
        add(""); add("*Source: " + src + "*"); add("")
    tab("T1. Assumptions register", ["ID", "Assumption", "Basis"], [[a["id"], a["text"], a["basis"]] for a in o["A"]], "team assumptions, stated on the slide where each is used (C-R3)")
    t2 = o["T2"]
    tab("T2. Contribution per phone by grade, website rates (₹ per phone)", ["Line", "Superb", "Good", "Fair"],
        [["Average selling price"] + [rs(t2[g]["price"]) for g in GR], ["Price paid to the trader"] + [rs(-t2[g]["buy"]) for g in GR],
         ["Testing and repair"] + [rs(-t2[g]["lab"]) for g in GR], ["Packing, delivery, payment"] + [rs(-t2[g]["pack"]) for g in GR],
         ["Warranty: claim rate x ₹2,500"] + [rs(-t2[g]["warranty"]) for g in GR], ["Returns: return rate x ₹1,800"] + [rs(-t2[g]["returns"]) for g in GR],
         ["Contribution per phone"] + [rs(t2[g]["contrib"]) for g in GR], ["Contribution as a share of price"] + [pc(t2[g]["contrib"] / t2[g]["price"]) for g in GR]],
        "case Exhibit 2 (C-E2, C-E2N1 to C-E2N3); team model")
    tab("T3. Contribution per phone by return regime (₹)", ["Grade", "Stores (0.5x returns)", "Website, ads, MegaKart, referrals (1x)", "Creators (1.5x)"],
        [[GN[g]] + [rs(o["T3"][g][m]) for m in (0.5, 1.0, 1.5)] for g in GR], "case Exhibits 2 and 3 (C-E3N3, C-E3N4); before commission, fixed spend and coupons")
    t4 = o["T4"]
    tab("T4. Contribution after marketing by channel, a month today (₹ lakh unless stated)", ["Channel", "Orders", "Superb / Good / Fair", "Contribution of phones", "MegaKart commission", "Fixed spend", "Coupons", "After marketing", "Per order (₹)", "Dashboard cost per order (₹)", "True cost per order (₹)", "Return rate"],
        [[t4[k]["name"], n0(t4[k]["orders"]), "%d / %d / %d%%" % (t4[k]["S"] * 100, t4[k]["G"] * 100, t4[k]["F"] * 100), lk(t4[k]["contrib_before"]), lk(-t4[k]["comm"]), lk(-t4[k]["fixed"]),
          lk(-t4[k]["coupons"]), lk(t4[k]["cam"]), rs(t4[k]["cam_per"]), rs(t4[k]["dash"]), rs(t4[k]["true_cost"]), pc(t4[k]["ret_rate"], 2)] for k in CHK] +
        [["Total", n0(sum(t4[k]["orders"] for k in CHK)), "", lk(sum(t4[k]["contrib_before"] for k in CHK)), lk(-o["T5"]["comm_total"]), lk(-o["T5"]["fixed_ch"]), lk(-o["T5"]["coupons"]),
          lk(o["T5"]["cam"]), rs(o["T5"]["cam"] * 1e5 / 7200), "", "", pc(o["T5"]["rr"], 2)]],
        "case Exhibits 2 and 3; true cost per order = (fixed spend + commission + coupons) / orders; team model")
    t5 = o["T5"]
    tab("T5. Tikau's month today and the reconciliation with the last twelve months", ["Line", "Value"],
        [["Contribution after marketing, all channels", rl(t5["cam"])], ["Fixed costs", rl(-t5["fixed"])], ["Monthly EBITDA", rl(t5["ebitda"])],
         ["Monthly EBITDA x 12", rl(t5["ltm"])], ["Case: EBITDA, Nov 2025 to Oct 2026", rl(t5["ltm_case"])], ["Gross sales a month", rl(t5["rev_month"])],
         ["Gross sales x 12", "₹%.1f crore" % t5["rev_ltm_cr"]], ["Case: net revenue, last twelve months", "₹%.0f crore" % t5["rev_case"]],
         ["Phones sold a month", n0(t5["sold"])], ["Phones returned a month", n0(t5["rets"])], ["Return rate", pc(t5["rr"], 2)],
         ["Warranty claims a month", n0(t5["claims_n"])], ["Cost of claims", rl(t5["claims_cost"])], ["Cost of returns", rl(t5["ret_cost"])], ["Distrust costs a month (claims plus returns)", rl(t5["trust_tax"])]],
        "case page 3 (C-CO3, C-CO4), Exhibits 2 and 3; team model")
    tab("T6. Phones sold and contribution by grade, a month today", ["Grade", "Phones", "Share", "Contribution per phone", "Contribution, ₹ lakh"],
        [[GN[g], n0(t5["grade_sold"][g]), pc(t5["grade_sold"][g] / 7200), rs(o["T2"][g]["contrib"]), lk(t5["grade_contrib"][g])] for g in GR],
        "case Exhibits 2 and 3; contribution at website rates before channel effects")
    tab("T7. Website funnel, October 2026", ["Step", "People", "Conversion from the step before"], [[f["step"], n0(f["n"]), pc(f["conv"]) if i else ""] for i, f in enumerate(o["funnel"])] +
        [["Visit to order", "", pc(4200 / 960000, 2)], ["Store: picks up a phone to buys", "", pc(1 / 3)]], "case Exhibit 1D (C-E1D)")
    cp = o["cap"]
    tab("T8. The lab, Superb supply and the battery spot check", ["Measure", "Value"],
        [["Phones tested a month", n0(cp["tested"])], ["Fail the final check", pc(cp["fail"], 0)], ["Sellable phones a month", n0(cp["sellable"])], ["Phones sold a month", n0(cp["sold"])],
         ["Lab use", pc(cp["util"], 0)], ["Superb sold a month", n0(cp["superb"])], ["Superb available from traders", n0(cp["superb_cap"])], ["Superb headroom", n0(cp["superb_head"])],
         ["Good phones below their printed 80% (spot check)", "22 of 200, " + pc(cp["spot"], 0)], ["Good phones a month with an untrue battery line (A14)", n0(cp["bad_month"])],
         ["Repair time", "9 days"], ["Claims needing a second visit", pc(cp["second"], 0)]], "case Exhibit 4 (C-E4a to C-E4d); A14")
    tab("T9. Why visitors did not buy, and the option that answers each reason", ["Reason (Exhibit 1A)", "Share", "Answered by"],
        [[r[0], "%d%%" % r[1], REASON_FIX[i]] for i, r in enumerate(REASONS)], "case Exhibit 1A (C-E1A), Exhibit 6; team mapping")
    tab("T10. Segment scorecard (1 weak to 5 strong; team judgement on case data)", ["Segment"] + SEG_CRIT + ["Total"],
        [[s] + ["%d (%s)" % (v, SEG_BASIS[s][i]) for i, v in enumerate(SEG_SCORE[s])] + [str(sum(SEG_SCORE[s]))] for s in SEG_SCORE],
        "case Exhibit 1C (C-E1C), Exhibits 2, 4 and 6; team model T11 for contribution after the plan")
    t11 = o["T11"]
    tab("T11. Contribution per phone under each lever, website rates (₹)", ["Case"] + [GN[g] for g in GR], [[k] + [rs(v[g]) for g in GR] for k, v in t11.items()],
        "case Exhibits 2 and 6; per-phone costs and return cuts as printed")
    rows = []
    for p in o["plans"]:
        rows.append([p["label"], lk(p["gm_tot"]), lk(p["e"]["Jan"]), lk(p["e"]["Feb"]), lk(p["e"]["Mar"]), lk(p["q1"]), lk(p["d"], True), pc(p["rr"], 2),
                     "".join("P" if p["tests"][t] else "F" for t in ("t1", "t2", "t3", "t4")), "Passes" if p["ok"] else ""])
    tab("T12. Every plan the options allow: 28 lever sets x 3 shift choices (₹ lakh)", ["Plan", "Growth money", "Jan EBITDA", "Feb EBITDA", "Mar EBITDA", "Q1 EBITDA", "Q1 vs doing nothing", "Mar return rate", "Tests 1 to 4", "Verdict"], rows,
        "team model; test 4 needs B1, because a battery claim needs a reading taken in Tikau's own lab (C-E5a) and today's readings come from the trader's tool (C-E4c)")
    tab("T13. The five plans that pass all four board tests (₹ lakh)", ["Plan", "Growth money", "Mar EBITDA", "Q1 EBITDA", "Q1 vs doing nothing", "Mar return rate"],
        [[p["label"], lk(p["gm_tot"]), lk(p["e"]["Mar"]), lk(p["q1"]), lk(p["d"], True), pc(p["rr"], 2)] for p in sorted([p for p in o["plans"] if p["ok"]], key=lambda p: -p["q1"])], "team model")
    tab("T14. The plans each camp proposed, on the board's tests (₹ lakh)", ["Plan", "Levers", "Growth money", "Mar EBITDA", "Q1 vs doing nothing", "Mar return rate", "Tests failed"],
        [[t["name"], t["label"], lk(t["gm"]), lk(t["e"]["Mar"]), lk(t["d"], True), pc(t["rr"], 2), ", ".join(str(i + 1) for i, k in enumerate(("t1", "t2", "t3", "t4")) if not t["tests"][k]) or "none"] for t in o["T14"]],
        "team model; case page 3 (C-B4 to C-B6)")
    t15 = o["T15"]
    tab("T15. The decision table for our plan", ["Your plan", "January", "February", "March"],
        [["Options live"] + [t15[m]["options"] for m in MONTHS], ["Phones sold"] + [n0(t15[m]["sold"]) for m in MONTHS],
         ["Contribution after marketing (₹ lakh)"] + [lk(t15[m]["cam"]) for m in MONTHS], ["Growth money spent (₹ lakh)"] + [lk(t15[m]["gm"]) for m in MONTHS],
         ["EBITDA (₹ lakh)"] + [lk(t15[m]["ebitda"]) for m in MONTHS], ["Return rate"] + [pc(t15[m]["rr"], 1) for m in MONTHS]], "team model; format from case page 7 (C-D3)")
    b = o["bridge"]
    tab("T16. March EBITDA, doing nothing to our plan, one effect at a time (₹ lakh)", ["Step", "Change", "Running total"],
        [["March EBITDA if Tikau does nothing", "", lk(b["start"])]] + [[s[0], lk(s[1], True), lk(b["start"] + sum(x[1] for x in b["steps"][:i + 1]))] for i, s in enumerate(b["steps"])] +
        [["Third shift, ₹9 lakh of growth money", lk(b["shift"], True), lk(b["end"])], ["March EBITDA, our plan", "", lk(b["end"])]], "team model; steps applied in this order so that they add up exactly")
    s = o["sens"]
    tab("T17. Break-even points for March EBITDA under our plan", ["Input", "Plan value", "March EBITDA reaches zero at"],
        [["Order rise from B1 and B2 together", "16.6%", pc(s["be_mult"] - 1) + " (" + n0(s["be_orders"]) + " phones)"],
         ["Good phones needing a new battery", "40%", pc(s["be_gbat"], 0)], ["Fair phones needing a new battery", "70%", pc(s["be_fbat"], 0)],
         ["Return rate kept by B1 and B2 together (March return rate 6.0%)", "56% of today's rate", pc(s["rr_mult_6"], 0) + " of today's rate"]], "team model")
    tab("T18. Stress test: each Exhibit 6 effect at 75% and 125% (A16), March EBITDA (₹ lakh)", ["Input", "Bear", "Bull", "Swing"],
        [[t["name"], lk(t["bear"]), lk(t["bull"]), lk(t["swing"])] for t in o["tornado"]], "team model; plan value " + lk(s["base_e"]))
    sc = o["scenarios"]
    tab("T19. Three scenarios for our plan (₹ lakh)", ["Scenario", "Feb EBITDA", "Mar EBITDA", "Q1 vs doing nothing", "Mar return rate", "Phones in March", "All four tests"],
        [[k, lk(v["e"]["Feb"]), lk(v["e"]["Mar"]), lk(v["d"], True), pc(v["rr"], 2), n0(v["sold"]), "Pass" if v["ok"] else "Fail"] for k, v in sc.items()], "team model; A16")
    tab("T20. April: the options we did not choose, on top of our plan (₹ lakh a month)", ["Option", "Trade ins", "Phones sold", "Demand", "EBITDA before setup", "Change vs keeping the plan", "Return rate"],
        [[a["name"], n0(a["tin"]), n0(a["sold"]), n0(a["demand"]), lk(a["ebitda"]), lk(a["ebitda"] - o["april"][0]["ebitda"], True), pc(a["rr"], 2)] for a in o["april"]],
        "team model; A15; trade in setup of ₹35 lakh is paid once in its first month")
    tab("T21. Channels in March under our plan", ["Channel", "Phones", "After marketing, ₹ lakh", "Per order (₹)", "Today per order (₹)", "Return rate"],
        [[CHN[k], n0(v["q"]), lk(v["cam"]), rs(v["per"]), rs(o["T4"][k]["cam_per"]), pc(v["rr"], 2)] for k, v in o["chm"].items()], "team model")
    return "\n".join(L)

# ---------- values for the deck (every number on a slide comes from here) ----------
def values(o, rec, nothing, base):
    t2, t4, t5, b, s = o["T2"], o["T4"], o["T5"], o["bridge"], o["sens"]
    V = {}
    V["hash"] = o["meta"]["hash"]
    V["c_S"], V["c_G"], V["c_F"] = (rs(t2[g]["contrib"]) for g in GR)
    V["c_S_n"], V["c_G_n"], V["c_F_n"] = (round(t2[g]["contrib"]) for g in GR)
    V["cp_S"], V["cp_G"], V["cp_F"] = (rs(rec["m"]["Mar"]["web"][g]) for g in GR)
    V["cp_S_n"], V["cp_G_n"], V["cp_F_n"] = (round(rec["m"]["Mar"]["web"][g]) for g in GR)
    V["stack"] = {g: [t2[g]["buy"], t2[g]["lab"], t2[g]["pack"], round(t2[g]["warranty"]), round(t2[g]["returns"]), round(t2[g]["contrib"])] for g in GR}
    V["ch"] = [[t4[k]["name"], n0(t4[k]["orders"]), lk(t4[k]["cam"]), rs(t4[k]["cam_per"]), rs(t4[k]["dash"]), rs(t4[k]["true_cost"]), pc(t4[k]["ret_rate"], 1)] for k in CHK]
    V["ch_cam_n"] = [round(t4[k]["cam"], 2) for k in CHK]
    V["ch_per_n"] = [round(t4[k]["cam_per"]) for k in CHK]
    V["ch_dash_n"] = [t4[k]["dash"] for k in CHK]
    V["ch_true_n"] = [round(t4[k]["true_cost"]) for k in CHK]
    V["ch_names"] = [t4[k]["name"] for k in CHK]
    V["ch_rr_n"] = [round(t4[k]["ret_rate"] * 100, 1) for k in CHK]
    V["mk_comm_per"] = rs(t4["mk"]["comm"] * 1e5 / 2000)
    V["cam0"], V["e0"], V["e0_n"], V["fixed"] = lk(t5["cam"]), lk(t5["ebitda"]), round(t5["ebitda"], 2), lk(FIXED)
    V["ltm"], V["rr0"], V["rr0_n"] = lk(t5["ltm"]), pc(t5["rr"], 1), round(t5["rr"] * 100, 2)
    V["rets0"], V["claims0"] = n0(t5["rets"]), n0(t5["claims_n"])
    V["claims_cost"], V["ret_cost"], V["trust_tax"] = lk(t5["claims_cost"]), lk(t5["ret_cost"]), lk(t5["trust_tax"])
    V["rev_cr"] = "%.1f" % t5["rev_ltm_cr"]
    V["gs0"] = {g: n0(t5["grade_sold"][g]) for g in GR}
    V["gs0_n"] = {g: round(t5["grade_sold"][g]) for g in GR}
    V["gc0"] = {g: lk(t5["grade_contrib"][g]) for g in GR}
    V["gc0_n"] = {g: round(t5["grade_contrib"][g], 1) for g in GR}
    V["funnel"] = [[f["step"], n0(f["n"]), pc(f["conv"]) if i else ""] for i, f in enumerate(o["funnel"])]
    V["funnel_n"] = [f["n"] for f in o["funnel"]]
    V["v2o"] = pc(4200 / 960000, 2)
    V["pdp2cart"] = pc(26000 / 310000); V["cart2order"] = pc(4200 / 26000); V["pdp_leave"] = pc(1 - 26000 / 310000)
    cp = o["cap"]
    V["util0"] = pc(cp["util"], 0); V["superb0"] = n0(cp["superb"]); V["superb_head"] = n0(cp["superb_head"]); V["superb_used"] = pc(cp["superb"] / SUPERB_CAP, 0)
    V["spot_pct"] = pc(cp["spot"], 0); V["spot_month"] = n0(cp["bad_month"])
    V["reasons"] = [[r[0], r[1]] for r in REASONS]; V["offers"] = [[x[0], x[1]] for x in OFFERS]
    V["segs"] = [[x[0], x[1], x[2]] for x in SEGS]
    # plan
    V["gm_tot"] = lk(rec["gm_tot"]); V["gm_left"] = lk(BUDGET - rec["gm_tot"]); V["gm"] = {m: lk(rec["gm"][m]) for m in MONTHS}
    V["e"] = {m: lk(rec["e"][m]) for m in MONTHS}; V["e_n"] = {m: round(rec["e"][m], 2) for m in MONTHS}
    V["cam"] = {m: lk(rec["m"][m]["cam"]) for m in MONTHS}
    V["sold"] = {m: n0(rec["m"][m]["sold"]) for m in MONTHS}; V["sold_n"] = {m: round(rec["m"][m]["sold"]) for m in MONTHS}
    V["rr"] = {m: pc(rec["m"][m]["rr"], 1) for m in MONTHS}; V["rr_n"] = {m: round(rec["m"][m]["rr"] * 100, 2) for m in MONTHS}
    V["rr_mar2"] = pc(rec["m"]["Mar"]["rr"], 2)
    V["q1"] = lk(rec["q1"]); V["q1_0"] = lk(nothing["q1"]); V["dq1"] = lk(rec["q1"] - nothing["q1"], True)
    V["swing"] = lk(rec["e"]["Mar"] - nothing["e"]["Mar"], True)
    V["swing_yr"] = lk((rec["e"]["Mar"] - nothing["e"]["Mar"]) * 12)
    V["demand_mar"] = n0(rec["m"]["Mar"]["demand"]); V["lost_S"] = n0(rec["m"]["Mar"]["demand"] - rec["m"]["Mar"]["sold"])
    V["gsm"] = {g: n0(rec["m"]["Mar"]["grade_sold"][g]) for g in GR}
    V["util_mar"] = pc(rec["m"]["Mar"]["sold"] / 9000, 0)
    V["uplift"] = pc(1.08 * 1.08 - 1)
    BSHORT = ["More phones", "Prices up 4%", "New batteries", "Report ₹120", "Claim rates", "Fewer returns"]
    V["bridge"] = [["Do nothing", round(b["start"], 1)]] + [[BSHORT[i], round(x[1], 1)] for i, x in enumerate(b["steps"])] + [["Third shift", round(b["shift"], 1)], ["Our March", round(b["end"], 1)]]
    V["a_short"] = [[a[0], A_SHORT[a[0]]] for a in A]
    V["be_up"] = pc(s["be_mult"] - 1); V["be_orders"] = n0(s["be_orders"]); V["be_week"] = n0(s["be_orders"] / 4.33)
    V["plan_week"] = n0(rec["m"]["Mar"]["sold"] / 4.33); V["be_gbat"] = pc(s["be_gbat"], 0); V["be_fbat"] = pc(s["be_fbat"], 0)
    V["rr_mult_6"] = pc(s["rr_mult_6"], 0)
    V["tor"] = [[t["name"], round(t["bear"], 1), round(t["bull"], 1)] for t in o["tornado"]]
    V["scen"] = {k: dict(feb=lk(v["e"]["Feb"]), mar=lk(v["e"]["Mar"]), d=lk(v["d"], True), rr=pc(v["rr"], 1), ok=("Pass" if v["ok"] else "Fail")) for k, v in o["scenarios"].items()}
    V["t14"] = [[t["name"], t["label"], lk(t["gm"]), lk(t["e"]["Mar"]), lk(t["d"], True), pc(t["rr"], 1), [bool(t["tests"][k]) for k in ("t1", "t2", "t3", "t4")]] for t in o["T14"]]
    V["n_plans"] = str(len(o["plans"])); V["n_ok"] = str(len(o["feasible"]))
    V["feas"] = [[p["label"], lk(p["gm_tot"]), lk(p["e"]["Mar"]), lk(p["d"], True), pc(p["rr"], 1)] for p in sorted([p for p in o["plans"] if p["ok"]], key=lambda p: -p["q1"])]
    V["scatter"] = [[round(p["e"]["Mar"], 1), round(p["gm_tot"]), 1 if p["ok"] else 0] for p in o["plans"]]
    V["scatter_ours"] = [round(rec["e"]["Mar"], 1), round(rec["gm_tot"])]
    ap = o["april"]; V["apr"] = [[a["name"], n0(a["tin"]), lk(a["ebitda"]), lk(a["ebitda"] - ap[0]["ebitda"], True)] for a in ap]
    V["apr_n"] = [[a["name"], round(a["ebitda"], 1)] for a in ap]
    V["chm"] = [[CHN[k], n0(v["q"]), lk(v["cam"]), rs(v["per"]), pc(v["rr"], 1)] for k, v in o["chm"].items()]
    V["chm_cam_n"] = [round(v["cam"], 2) for v in o["chm"].values()]
    V["unit"] = {k: {g: rs(v[g]) for g in GR} for k, v in o["T11"].items()}
    V["unit_n"] = {k: {g: round(v[g]) for g in GR} for k, v in o["T11"].items()}
    V["fS"] = pc(1 - rec["m"]["Mar"]["fS"], 1)
    V["e_mar"] = V["e"]["Mar"]; V["rr_mar"] = V["rr"]["Mar"]; V["e0_mar"] = lk(nothing["e"]["Mar"])
    # the month today as a waterfall (₹ lakh): phones' contribution, then what the channels and the head office take
    gross = t5["gross_total"]
    V["wf_month"] = [["Phones", round(gross, 1)], ["MegaKart", round(-t5["comm_total"], 1)], ["Channels", round(-t5["fixed_ch"], 1)],
                     ["Coupons", round(-t5["coupons"], 1)], ["Fixed costs", round(-FIXED, 1)], ["EBITDA", round(t5["ebitda"], 1)]]
    V["gross0"] = lk(gross); V["comm0"] = lk(t5["comm_total"])
    V["retgrid"] = [[t4[k]["name"]] + ["%.1f" % (RET[g] * c[7] * 100) for g in GR] + ["%.1f" % (t4[k]["ret_rate"] * 100)] for k, c in zip(CHK, CH)]
    # one Good and one Fair phone, today to our plan (website rates)
    def pw(g):
        price_up = PRICE[g] * BASEP["pB2"] if g in ("S", "G") else 0.0
        bat = {"S": 0.0, "G": BASEP["gbat"] * BASEP["gbat_c"], "F": BASEP["fbat"] * BASEP["fbat_c"]}[g]
        cl = (CLAIM[g] - CLAIM_B2[g]) * CLAIM_COST; rt = RET[g] * (1 - (1 - BASEP["rrB1"]) * (1 - BASEP["rrB2"])) * RET_COST
        return [["Today", round(t2[g]["contrib"])], ["Price up 4%", round(price_up)], ["New battery", round(-bat)], ["Report", -BASEP["rep"]],
                ["Claims", round(cl)], ["Fewer returns", round(rt)], ["Our plan", round(rec["m"]["Mar"]["web"][g])]]
    V["pw_G"], V["pw_F"], V["pw_S"] = pw("G"), pw("F"), pw("S")
    V["seg_rows"] = [[s] + SEG_SCORE[s] + [sum(SEG_SCORE[s])] for s in SEG_SCORE]
    V["seg_basis"] = SEG_BASIS; V["seg_crit"] = SEG_CRIT
    V["reason_fix"] = REASON_FIX
    V["e_gbat50"] = lk(month_calc({"B1", "B2"}, True, 0, {"gbat": 0.5})["cam"] - FIXED - SHIFT_COST)
    V["rr_trig"] = "5.5%"; V["gbat_trig"] = "50%"
    V["good_up"] = n0(rec["m"]["Mar"]["grade_sold"]["G"] - t5["grade_sold"]["G"])
    V["mk_per_mar"] = rs(o["chm"]["mk"]["per"])
    V["pb_gap"] = pc(1.06 / 1.04 - 1)
    V["e0_rl"] = rl(t5["ebitda"]); V["e_mar_rl"] = rl(rec["e"]["Mar"], True); V["gm_rl"] = rl(rec["gm_tot"]); V["swing_rl"] = rl(rec["e"]["Mar"] - nothing["e"]["Mar"])
    V["dq1_rl"] = rl(rec["q1"] - nothing["q1"]); V["q1_rl"] = rl(rec["q1"]); V["q1_0_rl"] = rl(nothing["q1"]); V["ads_rl"] = rl(t4["ads"]["cam"])
    V["trust_rl"] = rl(t5["trust_tax"]); V["ltm_rl"] = rl(t5["ltm"])
    kab = next(t for t in o["T14"] if t["name"].startswith("Kabir")); roh = next(t for t in o["T14"] if t["name"] == "Rohan: price push")
    V["lost_noshift"] = n0(kab["demand"] - kab["sold"]); V["kab_mar"] = rl(kab["e"]["Mar"]); V["roh_mar"] = rl(roh["e"]["Mar"])
    V["roh_lost"] = pc(1 - roh["sold"] / roh["demand"], 0)
    tin = next(t for t in o["T14"] if t["name"].startswith("Store")); V["tin_mar"] = rl(tin["e"]["Mar"]); V["tin_rr"] = pc(tin["rr"], 1)
    allp = next(t for t in o["T14"] if t["name"].startswith("Everything")); V["all_gm"] = lk(allp["gm"]); V["all_mar"] = lk(allp["e"]["Mar"])
    b2o = next(t for t in o["T14"] if t["name"].startswith("Battery")); V["b2_rr"] = pc(b2o["rr"], 1); V["b2_d"] = lk(b2o["d"], True)
    fe = sorted([p for p in o["plans"] if p["ok"]], key=lambda p: -p["q1"]); V["gap2"] = lk(fe[0]["q1"] - fe[1]["q1"])
    V["b3_gain"] = lk(o["april"][1]["cam"] - o["april"][0]["cam"])
    V["tin_payback"] = "%.1f" % (35.0 / (o["april"][3]["ebitda"] - o["april"][0]["ebitda"]))
    V["claims_n0"] = n0(t5["claims_n"]); V["superb_dem"] = n0(rec["m"]["Mar"]["demS"])
    V["ch_rets"] = [[t4[k]["name"], n0(t4[k]["orders"]), "%.1f" % t4[k]["returns"], pc(t4[k]["ret_rate"], 2)] for k in CHK]
    V["t2rows"] = [["Average selling price"] + [rs(t2[g]["price"]) for g in GR], ["Price paid to the trader"] + [rs(-t2[g]["buy"]) for g in GR],
                   ["Testing and repair"] + [rs(-t2[g]["lab"]) for g in GR], ["Packing, delivery, payment"] + [rs(-t2[g]["pack"]) for g in GR],
                   ["Claims: rate x ₹2,500"] + [rs(-t2[g]["warranty"]) for g in GR], ["Returns: rate x ₹1,800"] + [rs(-t2[g]["returns"]) for g in GR],
                   ["Contribution per phone"] + [rs(t2[g]["contrib"]) for g in GR]]
    V["t4rows"] = [[t4[k]["name"], n0(t4[k]["orders"]), lk(t4[k]["contrib_before"]), lk(-t4[k]["comm"]), lk(-t4[k]["fixed"]), lk(-t4[k]["coupons"]), lk(t4[k]["cam"]), pc(t4[k]["ret_rate"], 1)] for k in CHK] + \
                  [["Total", n0(7200), lk(sum(t4[k]["contrib_before"] for k in CHK)), lk(-t5["comm_total"]), lk(-t5["fixed_ch"]), lk(-t5["coupons"]), lk(t5["cam"]), pc(t5["rr"], 1)]]
    V["n_checks"] = "%d of %d" % (sum(1 for v in o["checks"].values() if v), len(o["checks"]))
    return V

def main(argv):
    o, rec, nothing, base, plans = run()
    blob = json.dumps({k: v for k, v in o.items() if k != "meta"}, ensure_ascii=False, sort_keys=True, default=str)
    o["meta"]["hash"] = hashlib.sha1(blob.encode("utf-8")).hexdigest()[:10]
    o["meta"]["run_at"] = datetime.datetime.now().isoformat(timespec="seconds")
    md = "# Model tables\n\nModel " + o["meta"]["hash"] + ", run " + o["meta"]["run_at"] + ".\n\n" + tables(o)
    V = values(o, rec, nothing, base)
    for k, v in o["checks"].items(): print(("PASS " if v else "FAIL ") + k)
    n_ok = sum(1 for v in o["checks"].values() if v)
    print("CHECKS %d/%d HASH %s" % (n_ok, len(o["checks"]), o["meta"]["hash"]))
    print("FINDINGS", V["c_S"], V["c_G"], V["c_F"], V["e0"], V["rr0"], "|", rec["levers"], rec["shift"], "| GM", V["gm_tot"], "| E", V["e"]["Jan"], V["e"]["Feb"], V["e"]["Mar"],
          "| RR", V["rr"]["Mar"], "| dQ1", V["dq1"], "| plans", V["n_plans"], "ok", V["n_ok"])
    if "--dry" in argv: return o, md, V
    root = pathlib.Path(__file__).resolve().parent.parent
    io.open(root / "model" / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(o, ensure_ascii=False, indent=1, default=str))
    io.open(root / "model" / "model_tables.md", "w", encoding="utf-8").write(md)
    (root / "deck").mkdir(exist_ok=True)
    io.open(root / "deck" / "values.json", "w", encoding="utf-8").write(json.dumps(V, ensure_ascii=False, indent=1))
    print("wrote model_outputs.json, model_tables.md, deck/values.json")
    if n_ok != len(o["checks"]): print("MODEL FAIL"); sys.exit(1)
    print("MODEL PASS")
    return o, md, V

if __name__ == "__main__": main(sys.argv[1:])
```

<!-- FILE: deck/gen.py -->
```python
# ===== DOBAARA DECK GEN v1 (from the Arthik Khayal generator) =====
"""Deck generator. Run from the repo root with python -X utf8.
  python -X utf8 marksoc-case/deck/gen.py pre          build preamble.js, mock_figma.js and values.js (needs deck/values.json from the model)
  python -X utf8 marksoc-case/deck/gen.py mock 2 3     dry-run the listed slides on the offline mock (no list = all 12); exit 1 on any issue
  python -X utf8 marksoc-case/deck/gen.py bind 2 3     write build/slide_NN.js (or _1, _2, _3 parts) and build/v1_NN.js; always rewrite
                                                       v1_all.js, sweeps.js and slots.js
  python -X utf8 marksoc-case/deck/gen.py copy         write deck/slide-copy.md (every text node, from the mock) and check it
  python -X utf8 marksoc-case/deck/gen.py preview 2 3  offline previews on white in deck/shots/preview_NN.png (layout check)"""
import io, json, re, subprocess, sys, pathlib
try: DECK = pathlib.Path(__file__).resolve().parent
except NameError: DECK = pathlib.Path("marksoc-case/deck").resolve()
AK = DECK.parent; ROOT = AK.parent; N = "\n"; NS = 12; ALL = tuple(range(1, NS + 1))
LIB = ROOT / "verdict-mnc" / "deck" / "preamble.js"; MOCKSRC = ROOT / "verdict-mnc" / "deck" / "mock_figma.js"
SB = ROOT / "swasthyagrid-gcp" / "space-beyond" / "deck"     # read-only source of _x2.js, _x3.js, metrics.json and preview.py
ROT = ('Object.defineProperty(Node.prototype, "relativeTransform", { set(m) { this._rt = m; '
       'if (this.type === "TEXT" && Math.abs(m[0][0]) < 1e-6) { const w = this.width, h = this.height; this.x = m[0][2]; this.y = m[1][2] - w; this.width = h; this.height = w; } }, '
       'get() { return this._rt; } });')
BANW = ["here's", "let's", "bottom line", "delve", "game-changer", "game changer", "unlock", "it's not just", "make no mistake", "landscape",
        "robust", "seamless", "holistic", "tapestry", "paradigm", "navigate", "revolutioni", "cutting-edge", "leverage", "empower",
        "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness",
        "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving", "imagine", "ecosystem", "testament", "elevating",
        "what if", "picture this", "dive into", "groundbreaking", "state-of-the-art", "plethora", "myriad", "underscore", "showcase",
        "foster", "bolster", "spearhead", "nuanced", "intricate", "meticulous", "realm", "fast-paced", "in conclusion",
        "it is important to note", "revolutionary", "breakthrough", "hurry", "last chance", "don't miss", "best price", "lowest price"]
ABSENT = ["Anuj", "Aakriti", "Ranvir", "SwiftKart", "SwasthyaGrid", "HarvestBox", "Dream11", "Paytm", "Liminal", "Satoshi", "Alchemy",
          "TiO2", "Eurogrip", "Project Setu", "Arthik", "ONL", "YES Securities", "ecotech", "Trade Private", "TODO", "TBD", "Lorem", "xyz",
          "undefined", "NaN", "Rs ", "Rs.", "ChatGPT"]
TEAM = {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"],
                                          ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University", "Member"],
                                          ["Dayita Arora", "Ramjas College, University of Delhi", "Member"]]}
MUSTK = ["gm_tot", "e0", "e_mar", "rr_mar", "rr0", "swing", "dq1", "c_S", "c_G", "c_F", "be_week", "hash", "n_plans", "trust_tax"]
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
        ('/BIBLIO|FINEPRINT/.test(t.name || "")', '/BIBLIO|FINEPRINT/.test(t.name || "") || (t.name === "SEC" && t.fontSize >= 18)'),
        ('for (let i = 1; i <= 11; i++)', 'for (let i = 1; i <= 12; i++)')]:
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
    c2 = m.count("/LOGO:/.test("); m = m.replace("/LOGO:/.test(", "/LOGO:|IMG:|MONO:/.test(")
    adv = rd("metrics.json").strip(); assert set(json.loads(adv)) == {"Poppins|Bold", "Poppins|ExtraBold", "Inter|Semi Bold", "Inter|Bold"}
    c3 = m.count("function cw(ch, fam) {"); c4 = m.count("let warnings_global = [];")
    m = m.replace("function cw(ch, fam) {", "const ADV = " + adv + ";\nfunction cw(ch, fam) { const a = ADV[fam]; if (a && a[ch] !== undefined) return a[ch] * 1.02;")
    m = m.replace("let warnings_global = [];", ROT + "\nlet warnings_global = [];")
    assert c1 == 1 and c2 == 1 and c3 == 1 and c4 == 1, (c1, c2, c3, c4); m = r2mock(m); wr("mock_figma.js", m)
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

<!-- FILE: deck/_palette.js -->
```js
const C = {
  primary:{r:0.122,g:0.306,b:0.604}, primaryDeep:{r:0.043,g:0.165,b:0.357},
  accent:{r:0.961,g:0.718,b:0.0}, alert:{r:0.843,g:0.149,b:0.239},
  tint:{r:0.863,g:0.902,b:0.961}, alertTint:{r:0.984,g:0.878,b:0.890},
  blue:{r:0.184,g:0.435,b:0.839}, blueDeep:{r:0.071,g:0.231,b:0.478}, blueTint:{r:0.890,g:0.925,b:0.980},
  good:{r:0.118,g:0.541,b:0.298}, goodTint:{r:0.867,g:0.949,b:0.898}, accentTint:{r:1,g:0.957,b:0.820},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
const HG=[null,{r:0.918,g:0.941,b:0.980},{r:0.776,g:0.835,b:0.933},{r:0.557,g:0.667,b:0.859},{r:0.290,g:0.443,b:0.737},{r:0.043,g:0.165,b:0.357}];
const HR=[null,{r:1,g:0.945,b:0.949},{r:0.976,g:0.788,b:0.812},{r:0.933,g:0.498,b:0.549},{r:0.843,g:0.149,b:0.239}];
```

<!-- FILE: deck/_extras.js -->
```js
// ===== DOBAARA DECK EXTRAS (from the Arthik Khayal extras) =====
const RIBN=["SUMMARY","ECONOMICS","TRUST","CUSTOMER","OPTIONS","PLAN","LAUNCH","SIGNALS"];
const RIBAP=["A1 UNIT AND CHANNEL WORKING","A2 PLAN SCREEN AND SENSITIVITY"];
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
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=50, hh=46, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
// Cover strip: competition chip, organiser and partner logo slots, team chip, a wire with dots.
function coverTop(s){ addChip(s,64,48,700,56,"MARKSOC DTU CASE COMPETITION 2026",C.primaryDeep,C.white,22);
  [["MarKSoc DTU",790,150],["CrackNontech",960,200],["DTU",1180,96]].forEach(l=>logoSlot(s,l[1],40,l[2],72,l[0]));
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// Image placeholder (people or product shots): grey, dashed, named IMG.
function imgSlot(p,x,y,w,h,label){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+label); try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,label,4,0,w-8,h,"CENTER","CENTER",false); return f; }
// Monogram tile for the case's fictional names (Tikau, PhoneBazaar, MegaKart, the team): drawn natively, never a logo upload.
function mono(p,x,y,w,h,txt,fill,fg,sz){ sz=sz||20; const f=addFrame(p,x,y,w,h,fill||C.primaryDeep,C.ink,1.5,"MONO: "+txt);
  const t=addText(f,"Poppins","Bold",sz,fg||C.white,txt,4,0,w-8,h,"CENTER","CENTER"); if(sz<22) t.name="SEC"; return f; }
// Mind-map node: one to three brand slots ("IMG:" image slot, "MONO:" monogram, else a logo slot), a title and a wrapped sub-line.
function actorL(p,x,y,w,h,brands,title,sub){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2,"NODE "+title); addRect(f,0,0,6,h,C.accent);
  const n=Math.max(1,brands.length), gap=6, bw=(w-28-gap*(n-1))/n;
  brands.forEach((b,i)=>{ const bx0=16+i*(bw+gap);
    if(b.startsWith("IMG:")) imgSlot(f,bx0,8,bw,56,b.slice(4)); else if(b.startsWith("MONO:")) mono(f,bx0,8,bw,56,b.slice(5),C.primary,C.white,18); else logoSlot(f,bx0,8,bw,56,b); });
  TL(f,16,68,22,title,{color:C.primaryDeep,maxW:w-28}); sT(f,16,102,w-28,18,sub,{family:"Inter",style:"Semi Bold"}); return f; }
// Heat cells.
function ynCell(v){ if(v==="Yes"||v==="Pass") return {t:v,f:C.goodTint,tc:C.good}; if(v==="Part") return {t:"Part",f:C.accentTint,tc:C.ink};
  if(v==="No"||v==="Fail") return {t:v,f:C.alertTint,tc:C.alert}; return {t:String(v),f:C.white,tc:C.ink}; }
function sc5(v){ const k=Math.max(1,Math.min(5,v)); return {t:String(v),f:HG[k],tc:k>=4?C.white:C.ink}; }
function rag(p,x,y,w,h,t){ const f=t==="GREEN"?C.good:(t==="AMBER"?C.accent:C.alert);
  return bx(p,x,y,w,h,t,{fill:f,color:t==="AMBER"?C.ink:C.white,fam:"Poppins",st:"Bold",size:18}); }
// Tornado at 18 pt around a base value: the bear side in red, the bull side in blue.
function torS(p,x,y,w,items,baseV,o){ o=o||{}; const lw=o.lw||240, rh=o.rh||30, span=w-lw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const lo=Math.min(it.lo,it.hi), hi=Math.max(it.lo,it.hi);
    addRect(p,X(lo),ry+5,Math.max(2,X(baseV)-X(lo)),rh-10,C.alert,C.ink,1); addRect(p,X(baseV),ry+5,Math.max(2,X(hi)-X(baseV)),rh-10,C.primary,C.ink,1); });
  addRect(p,X(baseV)-1,y-4,2.5,rh*items.length+8,C.ink);
  (o.ticks||[]).forEach(t=>sTL(p,0,y+rh*items.length+6,18,t.toFixed(1),{family:"Inter",style:"Bold",centerAt:X(t)})); return X; }
// Bullet line with a bold lead at 18 pt; returns the next y.
function bl18(p,x,y,w,items,o){ o=o||{}; let cy=y; items.forEach(it=>{ addRect(p,x,cy+6,9,9,o.dot||C.primary,C.ink,1);
  const t=sRT(p,x+18,cy,w-18,18,it[0],it[1],{leadColor:o.lc||C.primaryDeep}); cy+=t.height+(o.gap===undefined?6:o.gap); }); return cy; }
// Small numeral + label tile.
function tile(p,x,y,w,h,num,label,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,1.5,o.name||"TILE");
  TL(f,10,o.ny===undefined?2:o.ny,o.size||26,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-20,min:18});
  sT(f,10,o.ly||40,w-20,18,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
function tick(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: tick"); addEllipse(f,0,0,d,d,C.good,C.ink,1.5);
  addDiagonalWire(f,d*0.25,d*0.53,d*0.43,d*0.71,C.white,3); addDiagonalWire(f,d*0.43,d*0.71,d*0.76,d*0.32,C.white,3); return f; }
function cross(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: cross"); addEllipse(f,0,0,d,d,C.alert,C.ink,1.5);
  addDiagonalWire(f,d*0.3,d*0.3,d*0.7,d*0.7,C.white,3); addDiagonalWire(f,d*0.7,d*0.3,d*0.3,d*0.7,C.white,3); return f; }
// Table whose rows grow to fit wrapped cells. rows: arrays of strings; o.size (18 default), o.hh, o.pad, o.colors[j], o.fills[i], o.bold[j], o.strike[j].
function wtab(p,x,y,cw,heads,rows,o){ o=o||{}; const sz=o.size||18, hh=o.hh||28, pd=o.pad===undefined?5:o.pad, tw=cw.reduce((a,b)=>a+b,0);
  const t=addFrame(p,x,y,tw,10,C.white,C.ink,2,"TABLE: "+(o.name||"wtab")); const h=addFrame(t,0,0,tw,hh,o.hf||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,i)=>{ nmS(addText(h,"Poppins","Bold",sz,C.ink,l,cx+7,0,cw[i]-12,hh,"LEFT","CENTER"),sz); cx+=cw[i]; });
  let ry=hh;
  rows.forEach((r,i)=>{ const f=addFrame(t,0,ry,tw,10,(o.fills&&o.fills[i])||(i%2?C.surfaceAlt:C.white),null,0,"ROW"); let x2=0, mh=0;
    r.forEach((v,j)=>{ const c=sT(f,x2+7,pd,cw[j]-12,sz,String(v),{family:"Inter",style:(j===0||(o.bold&&o.bold.includes(j)))?"Bold":"Semi Bold",color:(o.colors&&o.colors[j])||C.ink});
      mh=Math.max(mh,c.height); x2+=cw[j]; });
    const rh=Math.ceil(mh+2*pd); f.resize(tw,rh); if(o.strike) o.strike.forEach(j=>{ let sx=0; for(let q=0;q<j;q++) sx+=cw[q]; addRect(f,sx+7,Math.round(rh/2),cw[j]-14,2,C.alert); });
    addRect(t,0,ry-0.75,tw,1.5,C.ink); ry+=rh; });
  t.resize(tw,ry); let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-0.75,0,1.5,ry,C.ink); }); return t; }
// Vertical bars that may be negative. items: [{label, value, color, text}]; o.min, o.max, o.bw, o.size.
function vbarsN(p,x,y,w,h,items,o){ o=o||{}; const sz=o.size||18, lh=Math.ceil(sz*1.25), n=items.length, pitch=w/n, bw=o.bw||Math.min(70,pitch*0.6);
  const top=y+lh+4, base=y+h-(o.lab||lh*2)-4, Y=v=>top+(base-top)*(o.max-v)/(o.max-o.min); addRect(p,x,Y(0)-1,w,2,C.ink);
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, y0=Y(Math.max(0,it.value)), y1=Y(Math.min(0,it.value)), bh=Math.max(3,y1-y0);
    addRect(p,cx-bw/2,y0,bw,bh,it.color||(it.value<0?C.alert:C.primary),C.ink,1.5);
    const tx=it.text||((it.value<0?"−":"")+Math.abs(it.value).toFixed(o.dp===undefined?1:o.dp));
    sTL(p,0,it.value<0?y0+bh+2:y0-lh-2,sz,tx,{family:"Inter",style:"Bold",color:it.value<0?C.alert:C.primaryDeep,centerAt:cx});
    sT(p,cx-pitch/2+2,base+4,pitch-4,sz,it.label,{family:"Inter",style:"Bold",align:"CENTER"}); }); return {Y,base,top}; }
// Horizontal bars that may be negative. items: [{label, value, color, text}]; o.lw label width, o.min, o.max, o.rh.
function hbarsN(p,x,y,w,items,o){ o=o||{}; const lw=o.lw||220, rh=o.rh||30, vw=o.vw||70, span=w-lw-vw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const a=X(Math.min(0,it.value)), b=X(Math.max(0,it.value)); addRect(p,a,ry+5,Math.max(2,b-a),rh-10,it.color||(it.value<0?C.alert:C.primary),C.ink,1);
    const tx=it.text||((it.value<0?"−":"")+Math.abs(it.value).toFixed(1));
    if(it.value<0) sTL(p,0,ry+Math.round((rh-23)/2),18,tx,{family:"Inter",style:"Bold",color:C.alert,rightAt:a-4}); else sTL(p,b+4,ry+Math.round((rh-23)/2),18,tx,{family:"Inter",style:"Bold",color:C.primaryDeep}); });
  addRect(p,X(0)-1,y-4,2,rh*items.length+8,C.ink); return X; }
// Capacity bar: a filled part, a dashed outline for the rest, a label on the left, a value on the right.
function capBar(p,x,y,w,h,used,cap,o){ o=o||{}; const fw=Math.max(3,w*Math.min(1,used/cap)); addRect(p,x,y,fw,h,o.color||C.primary,C.ink,1.5);
  if(used<cap) ghost(p,x+fw,y,w-fw,h,o.ghost||C.primaryDeep); return fw; }
// Grid of dots: n dots, the first k in the alert colour.
function dots(p,x,y,cols,n,k,d,gap){ for(let i=0;i<n;i++){ const r=Math.floor(i/cols), c=i%cols; addEllipse(p,x+c*(d+gap),y+r*(d+gap),d,d,i<k?C.alert:C.tint,C.ink,1); } }
// Browser mockup: returns the content frame.
function browser(p,x,y,w,h,url){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2.5,"MOCKUP: browser"); const bar=addFrame(f,0,0,w,40,C.surface,C.ink,1.5,"BAR");
  [12,32,52].forEach((cx,i)=>addEllipse(bar,cx,13,14,14,[C.alert,C.accent,C.good][i],C.ink,1));
  const u=addFrame(bar,76,7,w-92,26,C.white,C.ink,1,"URL"); sTL(u,10,1,18,url,{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
  const sc=addFrame(f,0,40,w,h-40,C.white,null,0,"SCREEN"); return sc; }
// A numbered step card with a dark header strip and a wrapped body (18 pt).
function step(p,x,y,w,h,head,who,body,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,2,"STEP "+head);
  const hz=o.hs||22, hf=addFrame(f,0,0,w,34,o.hfill||C.primaryDeep,C.ink,1.5,"HEAD"); (hz<22?sTL:TL)(hf,10,Math.round((34-hz*1.5)/2),hz,head,{color:o.hc||C.white,maxW:w-20});
  let y2=40; if(who){ const a=sT(f,8,y2,w-16,18,who,{family:"Inter",style:"Bold",color:C.primaryDeep}); y2+=a.height+2; }
  sT(f,8,y2,w-16,18,body,{family:"Inter",style:"Semi Bold"}); return f; }
// Waterfall with Indian digit grouping (dp 0) or one decimal; first and last items are totals; labels at 18 pt.
function wfN(p,x,y,w,h,items,o){ o=o||{}; const sz=18, n=items.length, pitch=w/n, bw=o.bw||Math.min(80,pitch*0.6), lh=o.lh||48, dp=o.dp===undefined?1:o.dp;
  const fm=v=>dp===0?fmtN(Math.abs(v)):Math.abs(v).toFixed(dp);
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,Y(0)-1,w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=0;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?(it[1]<0?C.alert:C.primaryDeep):(it[1]>=0?C.good:C.alert),C.ink,1.5);
    const neg=it[1]<0, txt=(neg?"−":(tot?"":"+"))+fm(it[1]), ly=(tot&&neg)?y1+bh+2:y1-Math.ceil(sz*1.25)-2;
    sTL(p,0,ly,sz,txt,{family:"Inter",style:"Bold",color:neg?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sT(p,cx-pitch/2+3,base+4,pitch-6,sz,it[0],{family:"Inter",style:"Bold",align:"CENTER"}); }); return {Y,base,top}; }
// ===== END DOBAARA DECK EXTRAS =====
```

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

<!-- FILE: deck/_sweeps.js -->
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const MUST=MUSTLIST;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutioni","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today's","ever-evolving","imagine","ecosystem","testament","elevating","what if","picture this","dive into","groundbreaking","state-of-the-art","plethora","myriad","underscore","showcase","foster","bolster","spearhead","nuanced","intricate","meticulous","realm","fast-paced","in conclusion","it is important to note","game changer","hurry","last chance","don't miss","best price","lowest price"];
const ABSENT=["Anuj","Aakriti","Ranvir","SwiftKart","SwasthyaGrid","HarvestBox","Dream11","Paytm","Liminal","Satoshi","Alchemy","TiO2","Eurogrip","Project Setu","Arthik","ONL","YES Securities","ecotech","Trade Private","TODO","TBD","Lorem","xyz","undefined","NaN","Rs ","Rs.","ChatGPT"];
let radiusFixed=0, money=0; const fontLow=[]; const copy=[]; const density=[]; let all="";
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if(nd.name==="CARD: MONEYSHOT") money++; if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||t.name==="BIBLIO"||c.startsWith("Source:")||(t.name==="SEC"&&t.fontSize>=18); let p=t.parent;
      while(p && !ok){ if(p.name && (p.name.startsWith("LOGO:")||p.name.startsWith("IMG:")||p.name.startsWith("MONO:"))) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[—–]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, moneyshot:money, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density, slides:ids.length};
```

<!-- FILE: deck/setup.js -->
```js
// Creates (or finds) exactly twelve slides in a new Slides file, names them, checks fonts. Safe to rerun: it never makes a second set.
let grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
if (grid === undefined) { figma.createSlide(); grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID"); }
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 12 && guard++ < 16) figma.createSlide();
const names = ["01 Cover", "02 Executive Summary", "03 Economics", "04 Trust", "05 Customer", "06 Options", "07 Plan", "08 Launch", "09 Signals",
               "10 Appendix A1", "11 Appendix A2", "12 Thank You"];
const slides = all(); slides.slice(0, 12).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 12).map(s => s.id), extra: slides.slice(12).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
```

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

<!-- FILE: deck/checks.py -->
```python
"""Cross-checks before the deck critic: dashes, '!', '?', 'Rs' before a digit, placeholders and invented-name candidates in slide-copy.md."""
import io, re, pathlib
D = pathlib.Path(__file__).resolve().parent; t = io.open(D / "slide-copy.md", encoding="utf-8").read()
print("dashes", len(re.findall("[—–]", t)), "excl", t.count("!"), "question", t.count("?"), "rs", len(re.findall(r"\bRs\.? ?\d", t)),
      "placeholders", len(re.findall(r"TODO|TBD|Lorem|Insert|xyz|PLACEHOLDER", t)))
ALLOW = {"Team IdeaForge", "Delhi Technological University", "Guru Gobind Singh Indraprastha University", "Ramjas College", "University of Delhi",
         "Tikau Phones", "Tikau Report", "Sana Qureshi", "Kabir Arora", "Rohan Bedi", "Phone Bazaar", "Sanchar Saathi", "National Consumer Helpline",
         "Counterpoint Research", "Department of Consumer Affairs", "Head of Growth", "Case Competition", "Flagship on", "Value seekers", "Family buyers"}
cands = sorted(set(re.findall(r"\b(?:[A-Z][a-z]+\s){1,3}[A-Z][a-z]+\b", t)) - ALLOW)
print("name candidates to review (each must be a real organisation, a case term or a plain phrase; never a coined programme name)", len(cands))
for c in cands: print("  ", c)
```

<!-- FILE: deck/make_pdf.py -->
```python
"""Build deck/TeamIdeaForge_ProjectDobaara.pdf from deck/shots/hi_s01.png .. hi_s12.png, one 1920 x 1080 page each."""
import pathlib, fitz
D = pathlib.Path(__file__).resolve().parent; doc = fitz.open()
for n in range(1, 13):
    p = D / "shots" / ("hi_s%02d.png" % n); assert p.exists(), p
    page = doc.new_page(width=1920, height=1080); page.insert_image(page.rect, filename=str(p))
out = D / "TeamIdeaForge_ProjectDobaara.pdf"; doc.save(str(out)); print("pages", doc.page_count, "->", out)
```

<!-- FILE: deck/slides/s01.js -->
```js
{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
coverTop(s);
TL(s,64,150,112,"PROJECT DOBAARA",{family:"Poppins",style:"ExtraBold",maxW:920,min:72});
TL(s,64,290,48,"TIKAU PHONES, JANUARY TO MARCH 2027",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:920,min:34});
T(s,64,370,920,22,"A board recommendation: which options to fund from ₹80 lakh of growth money, which customer to win, how to launch in February and how to know by mid February that it is working",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const v=layered(s,64,476,920,276,C.primaryDeep,"CARD: verdict");
T(v,24,14,872,24,"OUR ANSWER: CERTIFY EVERY PHONE, PROMISE 85% BATTERY AND 12 MONTHS, AND OPEN A THIRD LAB SHIFT ON 1 FEBRUARY, FOR FAMILY BUYERS",{family:"Poppins",style:"Bold",color:C.accent});
T(v,24,140,872,22,"In our model March EBITDA moves from "+V.e0_rl+" to "+V.e_mar_rl+" and the return rate from "+V.rr0+" to "+V.rr_mar+", for ₹"+V.gm_tot+" lakh of the ₹80 lakh. All four board tests pass. No price cut, no trust campaign, and trade in waits for April.",{family:"Inter",style:"Semi Bold",color:C.white});
TL(s,64,768,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary});
teamBT(s,64,830,[250,500,170]);
srcLine(s,"Source: case Exhibits 1 to 6 | team model "+V.hash+" | logos identify organisations named in the case; no partnership or endorsement is implied");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S1");
const m=addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map");
TL(m,16,10,24,"WHO DECIDES WHETHER A TIKAU PHONE GETS BOUGHT",{color:C.primary,maxW:808}); addRect(m,16,50,808,2,C.ink);
T(m,16,60,808,22,"One Noida lab, five channels, three grades: Tikau sells "+V.sold.Jan+" phones a month and loses ₹"+V.e0.replace("−","")+" lakh a month doing it.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const A=[[["IMG:Family buying a phone for a parent"],"THE CUSTOMER","46% fear the battery will not last"],[["MONO:SQ","MONO:KA","MONO:RB"],"THE TEAM","price, proof or trade in: three camps"],
  [["MONO:PB","IMG:Neighbourhood phone shop"],"THE RIVALS","PhoneBazaar +6%, shops 10 to 15% less"],[["MONO:MegaKart","IMG:Phone review creator"],"THE CHANNELS","ads lose ₹2.1 lakh a month"],
  [["IMG:Phone testing lab"],"THE LAB",V.sold.Jan+" sold of "+V.sold.Jan+" sellable"],[["Sanchar Saathi","National Consumer Helpline"],"THE RULES","every claim true on every phone"],
  [["MONO:BOARD"],"THE BOARD","₹80 lakh and four tests"],[["Counterpoint Research","GSMA"],"WHY NOW","context only, not in our numbers"]];
const P=[[16,124],[294,124],[572,124],[16,377],[572,377],[16,630],[294,630],[572,630]], W=252, Hh=150, HX=420, HY=452;
P.forEach(q=>addDiagonalWire(m,HX,HY,q[0]+W/2,q[1]+Hh/2,C.ink,2.5));
A.forEach((a,i)=>actorL(m,P[i][0],P[i][1],W,Hh,a[0],a[1],a[2]));
addEllipse(m,HX-105,HY-105,210,210,C.primaryDeep,C.ink,2.5);
TL(m,0,HY-70,26,"TIKAU",{color:C.white,centerAt:HX}); TL(m,0,HY-30,26,V.e0+" LAKH",{color:C.accent,centerAt:HX});
sTL(m,0,HY+14,18,"EBITDA a month today",{family:"Inter",style:"Bold",color:C.white,centerAt:HX});
[["FIND","the report first"],["TRUST","85%, 12 months"],["BUY","store or referral"]].forEach((r,i)=>{ const x=16+278*i;
  const f=addFrame(m,x,800,252,36,i===2?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,7,232,18,r[0]+": ",r[1],{leadColor:C.primaryDeep});
  if(i<2) arrow(m,x+254,818,x+276,818,C.ink,2); });
fine(m,16,850,808,"Monograms mark the case's fictional names; logos mark real bodies the case names.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 8","EXECUTIVE SUMMARY",360,"Certify every phone, promise 85% battery and 12 months, and open a third lab shift on 1 February: March EBITDA moves from "+V.e0_rl+" to "+V.e_mar_rl,
  "Source: case Exhibits 1 to 6 and page 7 | team model "+V.hash+" (T12 to T16) | every number is rebuilt on slides A1 and A2");
const hero=layered(s,64,310,508,130,C.primaryDeep,"KPI: hero");
TL(hero,20,12,48,V.swing,{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:468,min:36});
sT(hero,20,90,468,18,"₹ lakh a month better in March than doing nothing",{family:"Inter",style:"Semi Bold",color:C.white});
const K2=[[V.gm_tot+" of ₹80","growth money used: B1 ₹15, B2 ₹25, shift ₹9",C.primary],[V.rr_mar+" returns","limit 6.0% in March",C.primaryDeep],[V.n_ok+" of "+V.n_plans+" plans","pass all four tests; ours ends Q1 highest",C.good]];
K2.forEach((k,i)=>{ const x=596+428*i; const f=layered(s,x,310,404,130,C.white,"KPI: "+i,k[2]);
  TL(f,16,12,32,k[0],{family:"Poppins",style:"ExtraBold",color:k[2],maxW:372,min:22});
  sT(f,16,58,372,18,k[1],{family:"Inter",style:"Bold"}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
const a=pnl(s,64,444,600,276,"MONTHLY EBITDA, ₹ LAKH");
lcS(a,14,44,572,176,[{values:[V.e0_n,V.e0_n,V.e0_n],color:C.alert,label:"Do nothing"},{values:[V.e_n.Jan,V.e_n.Feb,V.e_n.Mar],color:C.primary,label:"Our plan",dy:-12}],
  ["January","February","March"],{yMin:-60,yMax:10,yTicks:[-40,-20,0],padL:56,padR:130});
sT(a,14,226,572,18,"January carries ₹40 lakh of setup, so Q1 ends "+V.dq1_rl+" against doing nothing.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const b=pnl(s,680,444,560,276,"THE DECISION TABLE");
tbl(b,14,48,[176,108,124,124],["₹ lakh","January","February","March"],[["Options live","Setup only","B1, B2, shift","B1, B2, shift"],["Phones sold",V.sold.Jan,V.sold.Feb,V.sold.Mar],
  ["Contribution",V.cam.Jan,V.cam.Feb,V.cam.Mar],["Growth money",V.gm.Jan,V.gm.Feb,V.gm.Mar],["EBITDA",V.e.Jan,V.e.Feb,V.e.Mar],["Return rate",V.rr.Jan,V.rr.Feb,V.rr.Mar]],
  {hh:28,rh:31,name:"decision",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,C.accentTint,null]});
const c=pnl(s,1256,444,600,276,"THE BOARD'S FOUR TESTS");
hgrid(c,14,48,["1 Growth money","2 March EBITDA","3 March returns","4 Exhibit 5 claims"],["Limit","Ours","Result"],
  [[{t:"₹80 lakh"},{t:"₹"+V.gm_tot},ynCell("Pass")],[{t:"₹0 or more"},{t:"+"+V.e_mar},ynCell("Pass")],[{t:"6.0%"},{t:V.rr_mar},ynCell("Pass")],[{t:"all true"},{t:"3 made"},ynCell("Pass")]],
  {lw:200,cw:124,rh:40,hh:30,name:"tests"});
sT(c,14,232,572,18,"Test 4 needs B1: a battery claim needs Tikau's own lab reading.",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
wtab(s,64,736,[250,330,560,330,322],["Sana asks","The obvious answer","What we found, and what we do","Proof","Result"],[
  ["1 What holds Tikau back","Demand: cut prices and buy ads","Trust behind a full lab: "+V.sold.Jan+" sold of "+V.sold.Jan+" sellable; 5 of 7 lost-sale reasons are trust","Ads lose ₹2.1 lakh a month","EBITDA "+V.e0_rl+" a month"],
  ["2 Who to win","The biggest segment, or value seekers","Family buyers on Good phones: no supply cap, "+V.cp_G+" a phone after the plan","A Fair phone earns "+V.cp_F+" after B2","Har phone ki kundli. Saal bhar ki zimmedari."],
  ["3 What, and when","Price push (A), or every option at once","B1 and B2 set up in January, third shift from 1 February; no A, B3 or C before April",V.n_ok+" of "+V.n_plans+" plans pass all tests","March EBITDA "+V.e_mar_rl],
  ["4 How customers hear","Discount banners and countdown timers","The Tikau Report above the price on every page; stores, referrals, labelled creators","3 claims made, 2 refused","0 breaches of Exhibit 5"],
  ["5 How we know","A monthly P&L review","Weekly orders, return rate and Good battery swaps, each with a trigger","Orders under "+V.be_week+" a week","April: trade in on new money"]],
  {name:"answers",hh:28,pad:4,strike:[1],colors:[C.primaryDeep,C.alert,C.ink,C.ink,C.good],bold:[4]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s03.js -->
```js
{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 8","THE ECONOMICS",300,"Every phone earns money before marketing, but Fair earns "+V.c_F+" to Superb's "+V.c_S+", ads lose ₹2.1 lakh a month and Tikau loses ₹"+V.e0.replace("−","")+" lakh a month",
  "Source: case Exhibits 2 and 3, page 3 | team model "+V.hash+" (T2 to T6) | dashboard cost per order as the growth team reports it: fixed spend plus coupons over orders");
const p=pnl(s,64,310,700,360,"ONE PHONE, ₹: WHERE THE SELLING PRICE GOES");
const G=[["Superb","S",24000],["Good","G",16000],["Fair","F",10000]], cl=[C.primaryDeep,C.blue,HG[2],C.alert,HR[3],C.good], k=500/24000;
G.forEach((g,i)=>{ const y=56+i*48; sTL(p,14,y+6,18,g[0],{family:"Inter",style:"Bold"}); let x=120;
  V.stack[g[1]].forEach((v,j)=>{ const w=Math.max(2,v*k); addRect(p,x,y,w,36,cl[j],C.ink,1);
    if(j===0||j===5){ const tx="₹"+fmtN(v); if(w>=70) sTL(p,0,y+6,18,tx,{family:"Inter",style:"Bold",color:C.white,centerAt:x+w/2}); else if(j===5) sTL(p,x+w+6,y+6,18,tx,{family:"Inter",style:"Bold",color:i===2?C.alert:C.good}); }
    x+=w; }); });
let lx=14; [["Trader price",0],["Lab",1],["Packing",2],["Claims",3],["Returns",4],["Contribution",5]].forEach(l=>{ lx=lgS(p,lx,206,cl[l[1]],l[0]); });
tbl(p,14,244,[170,160,170,172],["Grade","Contribution","Share of price","Claims, returns"],G.map(g=>{ const a=V.stack[g[1]]; return [g[0],"₹"+fmtN(a[5]),(100*a[5]/g[2]).toFixed(1)+"%","₹"+fmtN(a[3]+a[4])]; }),
  {hh:26,rh:24,name:"grades",align:["LEFT","RIGHT","RIGHT","RIGHT"],rc:[C.ink,C.ink,C.alert]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const q=pnl(s,780,310,1076,360,"CONTRIBUTION AFTER MARKETING BY CHANNEL, ₹ LAKH A MONTH");
const SN=["Paid ads","MegaKart","Creators","Stores","Referrals"];
vbarsN(q,14,46,440,300,SN.map((n,i)=>({label:n,value:V.ch_cam_n[i],color:V.ch_cam_n[i]<0?C.alert:(i===4?C.good:C.primary)})),{min:-5,max:22,lab:30});
tbl(q,470,52,[150,76,106,116,144],["Channel","Orders","Per order","Dashboard","True cost"],V.ch.map((r,i)=>[SN[i],r[1],r[3],r[4],r[5]]),
  {hh:26,rh:28,name:"channels",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"],rc:[C.alert,C.ink,C.ink,C.ink,C.good]});
note(q,470,232,592,"The dashboard misleads: ","it shows MegaKart at ₹0 an order, but the 12% commission costs "+V.mk_comm_per+" an order and leaves "+V.ch[1][3]+". Ads look mid-priced and lose money.",{});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const w=pnl(s,64,686,640,346,"THE MONTH TODAY, ₹ LAKH");
wfN(w,14,48,612,240,V.wf_month,{min:-60,max:190,dp:1,bw:56,lh:46});
sT(w,14,298,612,18,"x 12 = "+V.ltm_rl+", against the case's −₹170 lakh for the last twelve months.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const h=pnl(s,720,686,560,346,"RETURN RATE BY CHANNEL AND GRADE, %");
const hc=v=>{ const x=parseFloat(v); return {t:v,f:x<=3.5?HG[1]:(x<=7?HG[2]:(x<=10?HR[2]:HR[3])),tc:C.ink}; };
hgrid(h,14,48,V.retgrid.map(r=>r[0]),["Superb","Good","Fair","Channel"],V.retgrid.map(r=>r.slice(1).map(hc)),{lw:180,cw:86,rh:32,hh:30,name:"returns"});
kv(h,14,262,V.rr0,"of phones come back within 7 days; the board's March limit is 6.0%",{size:40,numW:120,w:400,dy:4});
const d=pnl(s,1296,686,560,346,"WHAT DISTRUST COSTS EACH MONTH, ₹ LAKH");
hbarsN(d,14,54,532,[{label:"Warranty claims",value:parseFloat(V.claims_cost)},{label:"Returns",value:parseFloat(V.ret_cost)},{label:"Both together",value:parseFloat(V.trust_tax),color:C.accent},
  {label:"EBITDA loss",value:-V.e0_n,color:C.alert}],{lw:170,rh:40,min:0,max:25,vw:60});
note(d,14,228,532,"More than the loss: ",V.claims0+" claims and "+V.rets0+" returns a month cost "+V.trust_rl+". Repairs take 9 days and 38% of claims need a second visit.",{});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s04.js -->
```js
{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 8","DEMAND OR TRUST",340,"Tikau's problem is trust behind a full lab, not demand: "+V.pdp_leave+" of product-page visitors leave, battery fear outranks price two to one and the lab sells every phone it can test",
  "Source: case Exhibit 1 (1,500 visitors who left, October funnel), Exhibit 4 (lab, supply, November spot check), Exhibit 5 | team model "+V.hash+" (T7 to T9)");
const f=pnl(s,64,310,560,400,"WEBSITE FUNNEL, OCTOBER 2026");
fun(f,14,50,532,[{t:V.funnel[0][1]+" visited",size:18},{t:V.funnel[1][1]+" opened a phone",size:18},
  {t:V.funnel[2][1]+" added to cart",size:18,f:HG[2],tc:C.ink},{t:V.funnel[3][1]+" ordered",size:18,f:HG[1],tc:C.ink}],{th:34,gap:5,minW:320});
kv(f,14,206,V.pdp_leave,"leave the phone page without adding to cart",{size:30,numW:150,w:346,dy:4});
const STEP=["Visited","Opened a page","Added to cart","Ordered"];
tbl(f,14,270,[160,190,152],["Step","People","Conv."],V.funnel.map((r,i)=>[STEP[i],r[1],r[2]]).concat([["Store pickup","n/a","33%"]]),{hh:24,rh:20,name:"funnel steps",align:["LEFT","RIGHT","RIGHT"]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const RS=["Battery may not last","Condition unclear","Warranty too short","Wanted to see it","Price vs local shop","Stolen or locked","Previous owner's data"], RF=["B2 + B1","B1","B2","Stores","A","B1","B1"];
const r=pnl(s,640,310,600,400,"WHY 1,500 VISITORS DID NOT BUY, %");
hbarsN(r,14,52,572,V.reasons.map((x,i)=>({label:RS[i],value:x[1],text:x[1]+"%  "+RF[i],color:i===4?C.alert:(i===3?HG[3]:C.primary)})),{lw:236,rh:36,min:0,max:60,vw:110});
sT(r,14,318,572,18,"More than one answer allowed. Trust fills 5 of the 7 reasons; price comes fifth. The tag after each bar is the option that answers it.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const OS=["85% battery promise","12 month warranty","Photos, battery, IMEI","Old phone in part","A price 5% lower"], OF=["B2","B2","B1","C","A"];
const o2=pnl(s,1256,310,600,400,"WHAT WOULD MAKE THEM BUY, %");
const hcO=v=>v>=40?HG[4]:(v>=30?HG[3]:(v>=22?HG[2]:HG[1]));
hgrid(o2,14,50,OS,["Share","Fixed by"],V.offers.map((x,i)=>[{t:x[1]+"%",f:hcO(x[1]),tc:x[1]>=40?C.white:C.ink},{t:OF[i],f:C.white,tc:C.primaryDeep}]),{lw:290,cw:130,rh:38,hh:30,name:"offers heat"});
callout(o2,14,284,572,96,"Two to one: ","a battery promise draws 44% of those who left; a 5% price cut draws 22%.",{});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const c=pnl(s,64,726,600,306,"DEMAND IS NOT THE LIMIT: THE LAB IS FULL");
sTL(c,14,54,18,"Lab: sellable phones a month",{family:"Inter",style:"Bold"});
capBar(c,14,82,400,40,7200,7200,{color:C.alert}); sTL(c,424,90,18,V.sold.Jan+" of 7,200",{family:"Inter",style:"Bold",color:C.alert});
sTL(c,14,136,18,"Superb phones from traders a month",{family:"Inter",style:"Bold"});
capBar(c,14,164,400,40,V.gs0_n.S,2000,{color:C.accent}); sTL(c,424,172,18,V.superb0+" of 2,000",{family:"Inter",style:"Bold"});
sT(c,14,220,572,18,"8,000 tested, 10% fail, 7,200 sellable, all sold. Any extra order needs a third shift; without one the case's rule drops it.",{family:"Inter",style:"Semi Bold"});
const b=pnl(s,680,726,580,306,"BATTERY CLAIMS FAIL ON 11% OF GOOD");
dots(b,14,54,25,200,22,12,5);
sT(b,14,198,552,18,"22 of 200 Good phones read below the 80% on their listing in Tikau's own November check: about "+V.spot_month+" Good phones a month (A14). Exhibit 5 needs Tikau's own lab reading, so test 4 fails today.",{family:"Inter",style:"Semi Bold"});
const y5=pnl(s,1276,726,580,306,"FIVE WHYS TO ONE ROOT CAUSE");
const WH=[["1 Loss","claims and returns cost "+V.trust_rl+" a month"],["2 Returns","buyers doubt battery (46%) and condition (41%)"],["3 Doubt","battery figures come from the trader's tool"],
  ["4 Tool","the lab runs at 7,200 of 7,200, no spare time"],["5 Root","Tikau sells what it cannot yet prove"]];
tbl(y5,14,48,[90,462],["Why","Finding"],WH,{hh:26,rh:44,name:"five whys",align:["LEFT","LEFT"],strip:[C.primary,C.primary,C.primary,C.primary,C.alert]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s05.js -->
```js
{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 8","WHO TO WIN",260,"Win family buyers: they buy Good phones, which have no supply cap, and the battery and 12 month promise they ask for lifts a Good phone from "+V.c_G+" to "+V.cp_G,
  "Source: case Exhibit 1 (segments, reasons, offers), Exhibits 2, 4 and 6 | team model "+V.hash+" (T10, T11) | scores are team judgement on the case data named in each row");
const p=pnl(s,64,310,1000,390,"SEGMENT SCORECARD, 1 WEAK TO 5 STRONG");
hgrid(p,14,48,V.seg_rows.map(r=>r[0]),["Size","Margin","Headroom","Returns","Worry fit","Lever fit","Total"],
  V.seg_rows.map((r,i)=>r.slice(1,7).map(sc5).concat([{t:String(r[7]),f:i===2?C.accent:C.white,tc:C.ink}])),{lw:230,cw:104,rh:40,hh:30,name:"segments"});
sT(p,14,246,972,18,"Margin: contribution a phone after the plan. Headroom: Q1 supply left. Returns: grade return rate. Worry fit: share of their worry B1 and B2 fix. Lever fit: a passing option reaches them.",{family:"Inter",style:"Semi Bold"});
sT(p,14,300,972,18,"Family buyers: "+V.seg_basis["Family buyers"].join("; ")+".",{family:"Inter",style:"Bold",color:C.primaryDeep});
sT(p,14,350,972,18,"Flagship buyers still get all 2,000 Superb phones a month; our plan rations "+V.lost_S+" Superb orders.",{family:"Inter",style:"Semi Bold"});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const q=pnl(s,1080,310,776,390,"THE FAMILY BUYER");
imgSlot(q,14,52,220,220,"Parent with a phone a child bought");
tbl(q,250,52,[160,330],["Trait","Evidence"],[
  ["Who buys","21%, mostly Good phones"],
  ["Wants","to know who will fix it"],
  ["Top fear","Battery will not last, 46%"],
  ["Second fear","Condition unclear, 41%"],
  ["Buys at","Stores (1 in 3 buy) and referrals"]],{hh:26,rh:28,name:"persona"});
note(q,14,288,748,"In a customer's words: ","\"Phone theek hai, par bharosa nahi hua.\" The phone is fine, but I never came to trust it.",{});
const w=pnl(s,64,716,700,316,"ONE GOOD PHONE, TODAY TO OUR PLAN, ₹");
wfN(w,14,46,672,206,V.pw_G,{min:0,max:3500,dp:0,bw:56,lh:46});
note(w,14,262,672,"Fair goes the other way: ",V.c_F+" today, "+V.cp_F+" after the battery and the report. We do not chase value seekers.",{});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const z=pnl(s,780,716,1076,316,"POSITIONING");
const st=addFrame(z,14,50,620,162,C.tint,C.ink,1.5,"STATEMENT");
sT(st,12,8,596,18,"For families buying a phone for a parent or a child, who need it to last and need to know who will fix it, Tikau sells refurbished phones that each come with a lab report, battery health of 85% or more and a 12 month warranty, because every phone is tested and its battery read in Tikau's own lab.",{family:"Inter",style:"Semi Bold"});
[["Proof 1: ","battery read in our lab"],["Proof 2: ","IMEI checked, data wiped"],["Proof 3: ","12 months, repaired by Tikau"]].forEach((c,i)=>{ const f=addFrame(z,14+208*i,226,200,74,i===0?C.accent:C.white,C.ink,1.5,"CHIP"); sRT(f,8,6,184,18,c[0],c[1],{leadColor:C.primaryDeep}); });
function kundli(p,cx,cy,R,color){ const r=R*0.5;
  const pts=[[cx,cy-R],[cx+R,cy],[cx,cy+R],[cx-R,cy]];
  const ipts=[[cx-r,cy-r],[cx+r,cy-r],[cx+r,cy+r],[cx-r,cy+r]];
  for(let i=0;i<4;i++) addDiagonalWire(p,pts[i][0],pts[i][1],pts[(i+1)%4][0],pts[(i+1)%4][1],color,2);
  for(let i=0;i<4;i++) addDiagonalWire(p,ipts[i][0],ipts[i][1],ipts[(i+1)%4][0],ipts[(i+1)%4][1],color,2);
  addDiagonalWire(p,pts[0][0],pts[0][1],ipts[0][0],ipts[0][1],color,1.5);
  addDiagonalWire(p,pts[0][0],pts[0][1],ipts[1][0],ipts[1][1],color,1.5);
  addDiagonalWire(p,pts[1][0],pts[1][1],ipts[1][0],ipts[1][1],color,1.5);
  addDiagonalWire(p,pts[1][0],pts[1][1],ipts[2][0],ipts[2][1],color,1.5);
  addDiagonalWire(p,pts[2][0],pts[2][1],ipts[2][0],ipts[2][1],color,1.5);
  addDiagonalWire(p,pts[2][0],pts[2][1],ipts[3][0],ipts[3][1],color,1.5);
  addDiagonalWire(p,pts[3][0],pts[3][1],ipts[3][0],ipts[3][1],color,1.5);
  addDiagonalWire(p,pts[3][0],pts[3][1],ipts[0][0],ipts[0][1],color,1.5); }
sTL(z,654,50,18,"THE LINE A CUSTOMER REMEMBERS",{family:"Poppins",style:"Bold",color:C.alert});
kundli(z,706,138,52,C.primaryDeep);
TL(z,780,96,22,"Har phone ki kundli.",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:282,min:16});
TL(z,780,126,22,"Saal bhar ki zimmedari.",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:282,min:16});
sT(z,654,206,408,18,"Every phone's full report. A year of responsibility. A kundli is the chart a family reads before a big decision.",{family:"Inter",style:"Semi Bold"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s06.js -->
```js
{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,4,"5 / 8","THE OPTIONS",260,"We ran all "+V.n_plans+" plans the options allow: "+V.n_ok+" pass the board's four tests, and only certify, battery and a February shift ends Q1 within ₹0.5 lakh of doing nothing",
  "Source: case Exhibit 6 and page 7 | team model "+V.hash+" (T12 to T14) | test 4 needs B1 because a battery claim needs Tikau's own lab reading (Exhibit 5)");
const RL=["Do nothing","Rohan: price push (A)","Rohan with a shift","Kabir: B1 + B2, no shift","Stores: trade in (C)","B2 + shift, no report","All: B1, B2, C, shift","B1 + B2 + C, no shift","Ours: B1 + B2, Feb shift"];
const p=pnl(s,64,310,1110,470,"EACH CAMP'S PLAN AGAINST THE FOUR BOARD TESTS");
const nc=v=>({t:v,f:v.startsWith("−")?C.alertTint:C.goodTint,tc:v.startsWith("−")?C.alert:C.good});
const gridNode=hgrid(p,14,48,RL,["Growth money","Mar EBITDA","Q1 vs nothing","Mar returns","Test 1","Test 2","Test 3","Test 4"],
  V.t14.map(r=>[{t:r[2]},nc(r[3]),nc(r[4]),{t:r[5],f:parseFloat(r[5])>6?C.alertTint:C.goodTint}].concat(r[6].map(b=>ynCell(b?"Pass":"Fail")))),{lw:300,cw:97,rh:36,hh:50,name:"camps"});
addRect(gridNode,0,50+36*8,6,36,C.accent);
sT(p,14,428,1082,18,"Test 1: money up to ₹80 lakh. Test 2: March EBITDA ₹0 or more. Test 3: returns up to 6.0%. Test 4: Exhibit 5.",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const g=pnl(s,1190,310,666,470,"84 PLANS: MARCH EBITDA AND GROWTH MONEY");
const L=70,R=640,T0=62,B0=392, X=v=>L+(R-L)*v/150, Y=v=>T0+(B0-T0)*(40-v)/120;
addRect(g,L,B0,R-L,2,C.ink); addRect(g,L,T0,2,B0-T0,C.ink);
[0,50,100,150].forEach(v=>sTL(g,0,B0+4,18,String(v),{family:"Inter",style:"Bold",centerAt:Math.min(X(v),R-20)}));
[-80,-40,0,40].forEach(v=>sTL(g,0,Y(v)-11,18,String(v),{family:"Inter",style:"Bold",rightAt:L-6}));
dashedV(g,X(80),T0,B0-T0,C.alert,2); dashedH(g,L,Y(0),R-L,C.alert,2);
sTL(g,X(80)+6,T0+2,18,"₹80 lakh",{family:"Inter",style:"Bold",color:C.alert}); sTL(g,R-112,Y(0)+6,18,"EBITDA ₹0",{family:"Inter",style:"Bold",color:C.alert});
V.scatter.filter(q=>!q[2]).forEach(q=>addEllipse(g,X(q[1])-5,Y(q[0])-5,10,10,HG[2],C.ink,1));
V.scatter.filter(q=>q[2]).forEach(q=>addEllipse(g,X(q[1])-8,Y(q[0])-8,16,16,C.primary,C.ink,1.5));
const our=V.scatter_ours; addEllipse(g,X(our[1])-13,Y(our[0])-13,26,26,C.accent,C.ink,2);
sTL(g,X(our[1])-70,Y(our[0])-40,18,"Ours",{family:"Poppins",style:"Bold",color:C.primaryDeep});
sTL(g,14,B0+26,18,"x: growth money, ₹ lakh. y: March EBITDA, ₹ lakh.",{family:"Inter",style:"Semi Bold"});
let lx=14; lx=lgS(g,lx,444,HG[2],"Fails a test"); lx=lgS(g,lx,444,C.primary,"Passes all four"); lgS(g,lx,444,C.accent,"Our plan");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const k=layered(s,64,796,800,236,C.primaryDeep,"CARD: conclusively");
TL(k,16,8,22,"CONCLUSIVELY: THE OBVIOUS ANSWERS FAIL",{color:C.accent,maxW:768});
const CT=[["Price push (A)","Fair falls to ₹416; March "+V.roh_mar,"Fails tests 2 to 4"],
  ["Certify, no shift",V.lost_noshift+" orders a month miss the lab","Fails test 2 ("+V.kab_mar+")"],
  ["Trade in now (C)","needs ₹"+V.all_gm+" lakh with B1, B2, shift","Fails test 1"]];
tbl(k,16,46,[180,400,196],["Rejected plan","The number that kills it","Verdict"],CT,{hh:26,rh:46,name:"conclusively table",align:["LEFT","LEFT","LEFT"],bold:[0,2]});
const t=pnl(s,880,796,976,236,"THE FIVE PLANS THAT PASS, ₹ LAKH");
tbl(t,14,46,[330,150,150,180,138],["Plan","Growth money","Mar EBITDA","Q1 vs nothing","Mar returns"],V.feas,{hh:26,rh:28,name:"pass",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[C.accentTint,null,null,null,null]});
sT(t,14,214,948,18,"The next best plan ends Q1 ₹"+V.gap2+" lakh lower.",{family:"Inter",style:"Bold",color:C.primaryDeep});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s07.js -->
```js
{ const s = await figma.getNodeByIdAsync("S7");
skelBT(s,5,"6 / 8","THE PLAN",240,"Our plan spends "+V.gm_rl+", passes all four tests and turns March EBITDA from "+V.e0_rl+" to "+V.e_mar_rl+": "+V.swing_rl+" a month better than doing nothing",
  "Source: team model "+V.hash+" (T15, T16); decision table format from case page 7 | EBITDA = contribution after marketing − ₹58 lakh fixed costs − growth money that month");
const m=layered(s,64,310,640,420,C.white,"CARD: MONEYSHOT",C.alert);
TL(m,16,8,22,"MARCH EBITDA, ₹ LAKH A MONTH",{color:C.alert,maxW:608}); addRect(m,16,42,608,2,C.ink);
TL(m,16,48,96,V.swing,{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:330,min:60});
T(m,16,196,320,22,"₹ lakh a month better than doing nothing, from 1 February",{family:"Inter",style:"Bold",color:C.primaryDeep});
vbarsN(m,360,52,264,236,[{label:"Do nothing",value:V.e0_n,color:C.alert},{label:"Our plan",value:V.e_n.Mar,color:C.good}],{min:-20,max:10,bw:70,lab:30});
[[V.gm_rl,"of ₹80 lakh used"],[V.rr_mar,"returns; limit 6.0%"],[V.sold.Mar,"phones in March"],[V.util_mar,"of the 9,000 lab limit"]].forEach((r,i)=>tile(m,16+152*i,300,144,104,r[0],r[1],{size:24,ly:40}));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const d=pnl(s,720,310,1136,420,"THE DECISION TABLE (CASE PAGE 7)");
tbl(d,14,48,[420,230,230,228],["Your plan","January","February","March"],[["Options live","Setup paid","B1, B2, shift","B1, B2, shift"],["Phones sold",V.sold.Jan,V.sold.Feb,V.sold.Mar],
  ["Contribution after marketing (₹ lakh)",V.cam.Jan,V.cam.Feb,V.cam.Mar],["Growth money spent (₹ lakh)",V.gm.Jan,V.gm.Feb,V.gm.Mar],["EBITDA (₹ lakh)",V.e.Jan,V.e.Feb,V.e.Mar],["Return rate",V.rr.Jan,V.rr.Feb,V.rr.Mar]],
  {size:22,hh:36,rh:36,name:"decision table",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,C.accentTint,null]});
[[V.gm_rl,"total growth money, Jan to Mar"],["Pass","Test 1: ₹80 lakh limit"],["+"+V.e_mar,"Test 2: March EBITDA, ₹ lakh"],[V.rr_mar,"Test 3: March returns, limit 6.0%"],["Pass","Test 4: three claims, all true"],
 [V.dq1_rl,"Q1 against doing nothing ("+V.q1+" vs "+V.q1_0+")"]].forEach((r,i)=>tile(d,14+185*i,312,176,104,r[0],r[1],{size:24,ly:38,color:r[0]==="Pass"?C.good:C.primary}));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const b=pnl(s,64,746,1100,286,"MARCH EBITDA, DOING NOTHING TO OUR PLAN, ₹ LAKH");
wfN(b,14,46,1072,230,V.bridge,{min:-30,max:55,dp:1,bw:64,lh:46});
const n=pnl(s,1180,746,676,286,"WHAT TIKAU WILL NOT DO, AND WHY");
wtab(n,14,48,[170,478],["Not this","Because"],[["A price push","March "+V.roh_mar+"; a Fair phone falls to ₹416"],["B3 campaign","₹15 lakh a month buys ₹"+V.b3_gain+" lakh of contribution"],
  ["Trade in now","with B1, B2 and the shift it needs ₹"+V.all_gm+" lakh"],["More ad money","ads already lose ₹2.1 lakh a month"],["Value seekers","a Fair phone earns "+V.cp_F+" after B2"]],{hh:28,pad:3,name:"not",colors:[C.alert,C.ink]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s08.js -->
```js
{ const s = await figma.getNodeByIdAsync("S8");
skelBT(s,6,"7 / 8","THE LAUNCH",250,"The February launch puts the Tikau Report above the price on every product page and sells it through stores, referrals and labelled creators, with three claims true for every phone",
  "Source: case Exhibits 3, 5 and 6 | team model "+V.hash+" (T21) | the product page is an illustration: the battery reading shown is an example, not a measured phone");
const p=pnl(s,64,310,640,722,"WHAT A CUSTOMER SEES FIRST");
const sc=browser(p,14,48,612,660,"Tikau product page, Good grade");
sTL(sc,14,10,18,"Refurbished, Good grade, 128 GB",{family:"Inter",style:"Bold"});
["Front","Back","Edges","Screen on"].forEach((l,i)=>imgSlot(sc,14+148*i,40,136,96,"Real photo: "+l));
const r=addFrame(sc,14,148,584,300,C.accentTint,C.ink,2,"REPORT");
TL(r,14,6,22,"TIKAU REPORT",{color:C.primaryDeep});
[["Battery health: ","87%, read in Tikau's lab on 2 Feb 2027"],["Condition: ","light marks on the back, all shown above"],["IMEI: ","checked; not reported lost or stolen"],["Data: ","wiped, certificate included"],
 ["Warranty: ","12 months, repairs in Tikau's lab"],["Returns: ","7 days"]].forEach((x,i)=>{ const y=44+i*42; tick(r,14,y+2,24); sRT(r,48,y,522,18,x[0],x[1],{leadColor:C.primaryDeep}); });
TL(sc,14,462,32,"₹16,640",{family:"Poppins",style:"ExtraBold",color:C.ink});
sTL(sc,180,474,18,"12 month warranty included",{family:"Inter",style:"Bold",color:C.good});
bx(sc,14,516,584,46,"ADD TO CART",{fill:C.primary,color:C.white,fam:"Poppins",st:"Bold",size:22});
sT(sc,14,574,584,18,"Not on this page: countdown timers, \"only 1 left\" and struck-out prices.",{family:"Inter",style:"Bold",color:C.alert});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S8");
const a=pnl(s,720,310,1136,236,"THE MAIN IDEA");
TL(a,14,48,34,"Har phone ki kundli. Saal bhar ki zimmedari.",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:1108});
sT(a,14,104,1108,18,"Show the report before the price. Every channel carries the same report: the product page, the store counter, the creator's video and the referral link. In English: every phone's full report, a year of responsibility.",{family:"Inter",style:"Semi Bold"});
[["1 February: ","report live on every listing, MegaKart included"],["Week 1: ","stores read batteries in front of buyers"],["Week 2: ","creators open the report on camera, labelled as ads"]].forEach((c,i)=>{
  const f=addFrame(a,14+372*i,166,360,58,i===0?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,5,340,18,c[0],c[1],{leadColor:C.primaryDeep}); });
const c=pnl(s,720,562,1136,218,"CHANNELS IN FEBRUARY");
tbl(c,14,46,[170,488,150,150,150],["Channel","Role in the launch","Per order now","Per order, Mar","Spend"],[["Referrals","Family code shares the report; same ₹350 coupon",V.ch[4][3],V.chm[4][3],"coupons only"],
  ["Stores","Battery read at the counter; report in the box",V.ch[3][3],V.chm[3][3],"₹21 lakh"],["Creators","Open the report on camera, labelled as an ad",V.ch[2][3],V.chm[2][3],"₹18 lakh"],
  ["Paid ads","Report-first creative; no new money",V.ch[0][3],V.chm[0][3],"₹60 lakh"],["MegaKart","Report and 12 months on listings; no ads",V.ch[1][3],V.chm[1][3],"12% fee"]],
  {hh:26,rh:28,name:"channels",align:["LEFT","LEFT","RIGHT","RIGHT","RIGHT"]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S8");
const k=pnl(s,720,796,1136,236,"THREE CLAIMS WE MAKE AND TWO WE DO NOT, AGAINST EXHIBIT 5");
const yc=v=>v==="MAKE"?{t:"MAKE",f:C.good,tc:C.white}:(v==="DO NOT"?{t:"DO NOT",f:C.alert,tc:C.white}:ynCell(v));
hgrid(k,14,46,["Battery 85% or more, read in our own lab","12 month warranty on every phone","IMEI checked and data wiped, with a certificate","\"As good as new, with genuine parts\"","\"Cheaper than PhoneBazaar for 12 months\""],
  ["True on every phone","Says refurbished","Allowed words","Proof we hold","Verdict"],[["Yes","Yes","Yes","Yes","MAKE"],["Yes","Yes","Yes","Yes","MAKE"],["Yes","Yes","Yes","Yes","MAKE"],["No","n/a","No","No","DO NOT"],["No","n/a","Yes","No","DO NOT"]].map(r=>r.map(yc)),
  {lw:480,cw:124,rh:28,hh:46,name:"claims"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s09.js -->
```js
{ const s = await figma.getNodeByIdAsync("S9");
skelBT(s,7,"8 / 8","SIGNALS AND APRIL",300,"Three weekly numbers show by mid February whether March clears zero: orders above "+V.be_week+" a week, returns under 5.5% and fewer than half of Good phones needing a battery",
  "Source: team model "+V.hash+" (T17 to T20) | weekly = monthly / 4.33 (A13) | stress tests move uncertain effects 25% (A16) | April assumes new growth money (A15)");
const K=[["1 ORDERS A WEEK",V.plan_week,"our plan, all channels",V.be_week+" a week, two weeks running","March EBITDA falls below ₹0: a "+V.be_up+" order rise instead of "+V.uplift,"check the report sits above the price on every listing; move store and referral effort to report demos"],
 ["2 RETURN RATE",V.rr_mar,"our plan, all channels","5.5% in any week","the board's limit is 6.0%, reached only if B1 and B2 keep "+V.rr_mult_6+" of today's returns","find the channel: creators return 1.5 times the website rate; retest batteries in that batch"],
 ["3 GOOD PHONES NEEDING A BATTERY","40%","Exhibit 6, our plan","50% in any week","March EBITDA falls to +₹"+V.e_gbat50+" lakh, and to zero at "+V.be_gbat,"read batteries at intake and buy weak-battery Good phones at a lower price"]];
K.forEach((k,i)=>{ const x=64+604*i, f=layered(s,x,310,584,330,C.white,"CARD: kpi "+(i+1));
  TL(f,16,8,22,k[0],{color:C.primary,maxW:552}); addRect(f,16,42,552,2,C.ink);
  TL(f,16,50,48,k[1],{family:"Poppins",style:"ExtraBold",color:C.primaryDeep,maxW:240});
  sT(f,270,66,298,18,k[2],{family:"Inter",style:"Bold"});
  note(f,16,126,552,"Change course at: ",k[3],{fill:C.alertTint,lc:C.alert});
  sT(f,16,174,552,18,"Why: "+k[4],{family:"Inter",style:"Semi Bold"});
  note(f,16,240,552,"Then: ",k[5],{fill:C.tint}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S9");
const t=pnl(s,64,656,540,376,"WHAT MOVES MARCH EBITDA, ₹ LAKH");
torS(t,14,52,512,V.tor.map(x=>({label:x[0],lo:x[1],hi:x[2]})),V.e_n.Mar,{lw:220,rh:40,min:0,max:10,ticks:[0,2.5,5,7.5,10]});
sT(t,14,290,512,18,"Red: the input 25% worse. Blue: 25% better. No single input takes March below zero; all five worse together give "+V.scen.Bear.mar+" ₹ lakh.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const q=pnl(s,620,656,440,376,"THREE SCENARIOS, ₹ LAKH");
tbl(q,14,48,[140,90,90,92],["","Bear","Base","Bull"],[["Feb EBITDA",V.scen.Bear.feb,V.scen.Base.feb,V.scen.Bull.feb],["Mar EBITDA",V.scen.Bear.mar,V.scen.Base.mar,V.scen.Bull.mar],
  ["Q1 vs nothing",V.scen.Bear.d,V.scen.Base.d,V.scen.Bull.d],["Mar returns",V.scen.Bear.rr,V.scen.Base.rr,V.scen.Bull.rr],["All tests",V.scen.Bear.ok,V.scen.Base.ok,V.scen.Bull.ok]],
  {hh:28,rh:32,name:"scenarios",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,C.accentTint,null,null,null]});
note(q,14,244,412,"Bear: ","every uncertain effect 25% worse at once. The weekly numbers show it by the second week of February.",{});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S9");
const ap=pnl(s,1076,656,780,376,"APRIL OPTIONS, EBITDA ₹ LAKH A MONTH");
const AL=["Keep the plan","Add B3 campaign","Add A price push","Trade in, month 1","Trade in, month 2","Trade in, month 3","Trade in, month 4","Trade in, month 5"];
hbarsN(ap,14,50,752,V.apr_n.map((a,i)=>({label:AL[i],value:a[1],color:i===0?C.primary:(i<3?C.alert:C.good)})),{lw:200,rh:32,min:-45,max:50,vw:56});
sT(ap,14,318,752,18,"In April, on new growth money: launch C trade in (₹35 lakh setup, repaid in about "+V.tin_payback+" months); keep A and B3 off; keep the third shift.",{family:"Inter",style:"Bold",color:C.primaryDeep});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s10.js -->
```js
{ const s = await figma.getNodeByIdAsync("S10");
skelBT(s,0,"A1","APPENDIX",240,"A1. Every number on the main slides rebuilds from the case exhibits and twenty stated assumptions, and the model passes "+V.n_checks+" checks",
  "Source: case Exhibits 2 to 4, page 3 | team model "+V.hash+" (T1 to T6) | rerun: python -X utf8 marksoc-case/model/dobaara_model.py",{labels:RIBAP,counterW:120});
const p=pnl(s,64,310,860,352,"CONTRIBUTION PER PHONE, ₹ (EXHIBIT 2)");
tbl(p,14,46,[392,150,150,140],["Line","Superb","Good","Fair"],V.t2rows,{hh:26,rh:28,name:"unit",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,null,null,C.accentTint]});
note(p,14,276,832,"Formula: ","contribution = price − trader price − lab − ₹600 packing − claim rate x ₹2,500 − return rate x ₹1,800. A return does not reverse the sale (Exhibit 2).",{fill:C.tint});
const q=pnl(s,940,310,916,352,"CHANNEL WORKING, ₹ LAKH A MONTH (EXHIBIT 3)");
tbl(q,14,46,[160,80,110,100,100,100,120,96],["Channel","Orders","Phones","Fee","Fixed","Coupons","After mkt","Returns"],V.t4rows.map((r,i)=>[i<5?["Paid ads","MegaKart","Creators","Stores","Referrals"][i]:r[0]].concat(r.slice(1))),
  {hh:26,rh:28,name:"channel work",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,null,C.accentTint]});
note(q,14,248,888,"Rule: ","each channel's phones use its own return rate (creators 1.5x, stores 0.5x), then lose fixed spend, MegaKart's 12% fee and ₹350 referral coupons. EBITDA = "+V.cam0+" − 58.0 = "+V.e0+".",{fill:C.tint});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S10");
const a=pnl(s,64,678,1792,354,"ASSUMPTIONS WE STATED, A01 TO A20 (EACH ALSO SITS ON THE SLIDE THAT USES IT)");
wtab(a,14,46,[70,806],["ID","Assumption"],V.a_short.slice(0,10),{hh:26,pad:2,name:"assumptions 1"});
wtab(a,906,46,[70,802],["ID","Assumption"],V.a_short.slice(10),{hh:26,pad:2,name:"assumptions 2"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s11.js -->
```js
{ const s = await figma.getNodeByIdAsync("S11");
skelBT(s,1,"A2","APPENDIX",240,"A2. Orders rise "+V.uplift+" and returns fall to 56% of today's rate under B1 and B2, the lab caps at 9,000, and March stays above zero down to a "+V.be_up+" order rise",
  "Source: case Exhibit 6 rules | team model "+V.hash+" (T11, T13, T17, T21) | short forms used in the deck sit bottom right",{labels:RIBAP,counterW:120});
const p=pnl(s,64,310,880,352,"HOW THE OPTIONS COMBINE (EXHIBIT 6 RULES)");
tbl(p,14,46,[220,632],["Effect","Working"],[["Orders","1.08 x 1.08 = 1.1664, so +"+V.uplift+" in every channel"],["Returns","0.70 x 0.80 = 0.56 of each channel's rate; March "+V.rr_mar2],
  ["Superb rationing","demand "+V.superb_dem+" against 2,000: "+V.lost_S+" orders ("+V.fS+") lost"],["Lab","sold "+V.sold.Mar+" of 9,000 with the third shift ("+V.util_mar+")"],
  ["Prices","Superb ₹24,960, Good ₹16,640, Fair ₹10,000"],["Batteries","Good 40% x ₹1,000 = ₹400; Fair 70% x ₹800 = ₹560"],["Claims","Superb 4%, Good 6%, Fair 9% at ₹2,500"],
  ["Growth money","Jan ₹40.0 (B1 ₹15, B2 ₹25); Feb ₹9.0; Mar ₹9.0 lakh"]],{hh:26,rh:32,name:"combine"});
const q=pnl(s,960,310,896,352,"CONTRIBUTION PER PHONE UNDER EACH OPTION, ₹");
tbl(q,14,46,[320,180,180,188],["Option","Superb","Good","Fair"],Object.keys(V.unit).map(k=>[k,V.unit[k].S,V.unit[k].G,V.unit[k].F]),{hh:26,rh:30,name:"unit options",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,C.accentTint,null]});
const dS=V.unit_n["B1 + B2"].S-V.unit_n.Today.S, dG=V.unit_n["B1 + B2"].G-V.unit_n.Today.G;
note(q,14,262,868,"Read: ","B1 and B2 together add ₹"+fmtN(dS)+" to a Superb phone and ₹"+fmtN(dG)+" to a Good one, but cut a Fair phone to "+V.cp_F+". With A on top a Fair phone loses money.",{fill:C.tint});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S11");
const r=pnl(s,64,678,760,354,"CHANNELS IN MARCH UNDER OUR PLAN");
tbl(r,14,46,[180,120,170,150,112],["Channel","Phones","After mkt, ₹ lakh","Per order","Returns"],V.chm.map((x,i)=>[["Paid ads","MegaKart","Creators","Stores","Referrals"][i],x[1],x[2],x[3],x[4]]),
  {hh:26,rh:30,name:"march channels",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"]});
sT(r,14,234,732,18,"MegaKart earns "+V.mk_per_mar+" an order in March: its 12% fee grows with the 4% price rise and its mix leans to Fair. We add no MegaKart spend.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const b=pnl(s,840,678,560,354,"BREAK-EVEN POINTS FOR MARCH");
tbl(b,14,46,[250,130,152],["Input","Plan","Zero at"],[["Order rise from B1, B2","+"+V.uplift,"+"+V.be_up],["Orders a week",V.plan_week,V.be_week],["Good battery swaps","40%",V.be_gbat],
  ["Fair battery swaps","70%",V.be_fbat],["Returns kept","56%",V.rr_mult_6]],{hh:26,rh:32,name:"break-even",align:["LEFT","RIGHT","RIGHT"]});
sT(b,14,240,532,18,"Returns kept: the share of today's return rate left after B1 and B2; at "+V.rr_mult_6+" March returns reach the 6.0% limit.",{family:"Inter",style:"Semi Bold"});
const f=pnl(s,1416,678,440,354,"SHORT FORMS");
tbl(f,14,46,[120,292],["Short","Meaning"],[["A to C","the case's options"],["IMEI","a phone's identity number"],["Q1","January to March 2027"],
  ["After mkt","contribution after marketing"],["Fee","MegaKart's 12% commission"],["₹ lakh","₹1,00,000"],["x","multiplied by"]],{hh:26,rh:34,name:"short forms"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: deck/slides/s12.js -->
```js
{ const s = await figma.getNodeByIdAsync("S12"); wipe(s);
TL(s,0,70,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.ink,centerAt:960});
const c=layered(s,260,268,1400,226,C.primaryDeep,"CARD: therefore");
TL(c,28,14,26,"THEREFORE",{color:C.accent});
T(c,28,58,1344,22,"Tikau should certify every phone, promise 85% battery and 12 months, open a third lab shift on 1 February and sell to family buyers. March EBITDA moves from "+V.e0_rl+" to "+V.e_mar_rl+" on ₹"+V.gm_tot+" lakh of growth money, with every board test passed.",{family:"Inter",style:"Semi Bold",color:C.white});
["March EBITDA "+V.e_mar_rl,"Return rate "+V.rr_mar+", limit 6.0%","₹"+V.gm_tot+" of ₹80 lakh spent"].forEach((g,i)=>bx(c,28+448*i,152,430,48,g,{fill:C.accent,fam:"Poppins",st:"Bold",size:20}));
TL(s,0,528,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
teamBT(s,400,590,[300,640,180]);
[["MarKSoc DTU",170],["CrackNontech",220],["DTU",110]].reduce((x,l)=>{ logoSlot(s,x,820,l[1],72,l[0]); return x+l[1]+24; },960-(500+48)/2);
TL(s,0,916,22,"The research document, the model and every working step sit behind this deck",{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:960});
sTL(s,0,956,18,"harshkawatra11@gmail.com  |  Team IdeaForge  |  MarKSoc DTU Case Competition 2026, Project DOBAARA",{family:"Inter",style:"Bold",centerAt:960});
srcLine(s,"Source: team model "+V.hash+" | case Exhibits 1 to 6");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

<!-- FILE: research/build_sources.py -->
```python
# ===== DOBAARA SOURCES BUILDER v1 (from the Arthik Khayal builder) =====
"""Parse research/raw/R-B.md .. R-I.md, build research/raw/sources.md (one row per unique URL, S01 upward, with the R-IDs
citing it) and research/raw/rid_to_sid.json. Run: python -X utf8 marksoc-case/research/build_sources.py"""
import re, io, pathlib, json
from collections import OrderedDict
R = pathlib.Path(__file__).resolve().parent; RAW = R / "raw"; LANES = "BCDEFGHI"
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
    out = ["# Sources: every unique URL cited across the eight research lanes", "", "Built by `research/build_sources.py`. One row per unique URL.",
           "Every source here is context: none of its numbers enters the model or a slide (case ground rule C-R1, FAQ 4).", "",
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

<!-- FILE: research/assemble.py -->
```python
# ===== DOBAARA ASSEMBLE v1 (from the Arthik Khayal assembler) =====
"""Assemble dobaara-research.md from the writer parts and generated appendices, then run the acceptance checks.
  python -X utf8 marksoc-case/research/assemble.py md     assemble and check
  python -X utf8 marksoc-case/research/assemble.py pdf    render HTML and PDF with research/build_pdf.py"""
import re, sys, json, io, pathlib, subprocess
R = pathlib.Path(__file__).resolve().parent; AK = R.parent; ROOT = AK.parent; NAME = "dobaara-research"
HEADER = """# Project DOBAARA: Tikau Phones and the Trust Problem in Refurbished Smartphones

**Certify every phone, promise 85% battery and 12 months, and open a third lab shift on 1 February: in our model March 2027 EBITDA moves from −₹14.1 lakh to +₹5.6 lakh for ₹58.0 lakh of the ₹80 lakh, and every board test passes**

Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader) · Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member) · Dayita Arora (Ramjas College, University of Delhi, Member)

Prepared for: MarKSoc DTU Case Competition 2026, Project DOBAARA, with CrackNontech as case partner, October 2026

---

"""
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "make no mistake", "seamless", "holistic", "tapestry",
       "paradigm", "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative", "synergy", "world-class",
       "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving",
       "imagine if", "testament", "realm", "fast-paced", "groundbreaking", "state-of-the-art", "plethora", "myriad", "delves", "underscores", "showcases",
       "it is important to note", "in conclusion", "landscape of", "ecosystem", "robust", "seamlessly", "vibrant", "meticulous", "intricate"]
MIN_WORDS, MIN_TABLES = 70000, 130
TAGTOK = r"(C-[A-Za-z0-9]+|A\d{2}|M|T\d{1,2}|S\d+|[B-I]\d{2,3})"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def demote(t): t = re.sub(r"^# .*\n", "", t, count=1); return t.strip()
def count_untagged(body):
    # A number-bearing line passes if it carries a tag, is a table, heading, quote or footnote line, is an "Exhibit for the deck:"
    # pointer, or sits in an H2 section that carries a tag. Writers tag a number where it is introduced.
    bad = []
    for sec in re.split(r"(?=^## \d+\.)", body, flags=re.M):
        has_tag = bool(re.search(r"\[" + TAGTOK, sec))
        for ln in sec.splitlines():
            if not re.search(r"₹|\d%|\d,\d{2,3}", ln): continue
            if ln.startswith(("|", "#", ">", "*")) or ln.strip().startswith("Exhibit for the deck:"): continue
            if re.search(r"\[" + TAGTOK, ln) or has_tag: continue
            bad.append(ln)
    return len(bad)
NOTXY = r",\s*not\s+(?:a|an|the)?\s*[a-z][\w\s-]{2,40}(?=[.,;:\n]|$)"
def count_not_x_but_y(authored):
    # Humanizer section 1. Always flags "not just/only/merely". Flags "X, not Y" in a heading, and paragraphs with three or more.
    # Exempt: section 2 (the do-not and do table) and section 23 (the "Conclusively" paragraph), where both halves carry numbers.
    hits = 0
    for sec in re.split(r"(?=^## \d+\.)", authored, flags=re.M):
        m = re.match(r"^## (\d+)\.", sec)
        if m and m.group(1) in ("2", "23"): continue
        hits += len(re.findall(r"\bnot (?:just|only|merely)\b", sec, re.I))
        for ln in sec.splitlines():
            if "Context, not used in any calculation" in ln: continue
            if ln.startswith("#") and re.search(NOTXY, ln, re.I): hits += 1
        for para in sec.split("\n\n"):
            n = len(re.findall(NOTXY, para, re.I))
            if n >= 3: hits += n
    return hits
def count_ai_statement(doc):
    hits = 0
    for m in re.finditer(r"generated (by|with|using) (AI|artificial intelligence)|AI-use statement|AI use disclosure", doc, re.I):
        line_start = doc.rfind("\n", 0, m.start()) + 1
        if doc[line_start:line_start + 1] == "|": continue
        window = doc[max(0, m.start() - 60):min(len(doc), m.end() + 80)]
        if re.search(r"\bno\b", window, re.I) or "not included" in window.lower(): continue
        hits += 1
    return hits
def context_leaks(body):
    # Closed-data guard (C-R1): an external tag [S##] or a raw lane row [B07] may appear only inside sections 12 to 17 (the context
    # sections), Appendix A, or a line that also says "context". Any other use is a leak of outside data into the analysis.
    leaks = []
    for sec in re.split(r"(?=^## \d+\.)", body, flags=re.M):
        m = re.match(r"^## (\d+)\.", sec); n = int(m.group(1)) if m else -1
        if 12 <= n <= 17 or n in (0, 36): continue
        for ln in sec.splitlines():
            if re.search(r"\[(?:S\d+|[B-I]\d{2,3})", ln) and "context" not in ln.lower(): leaks.append(ln[:90])
    return leaks
def md():
    body = "\n\n".join(rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEF")
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \| (.*?) \|", ln)
        if m: reg[m.group(1)] = (m.group(2), m.group(3))
    toks = set(tok.strip() for grp in re.findall(r"\[([^\]]+)\]", body) for tok in grp.split(",") if tok.strip())
    cited = sorted({t for t in toks if re.fullmatch(r"S\d+", t)}, key=lambda s: int(s[1:])); missing = [c for c in cited if c not in reg]
    rid = json.loads(rd(R / "raw" / "rid_to_sid.json"))
    extra = {rid[t] for t in toks if re.fullmatch(r"[B-I]\d+", t) and t in rid}
    allc = sorted(set(cited) | extra, key=lambda s: int(s[1:]))
    app_a = ("| ID | Source | Available at |\n|---|---|---|\n" + "\n".join("| %s | %s | %s |" % (s, reg[s][0], reg[s][1]) for s in allc if s in reg) +
             "\n\nEvery source in this list is context. None of its numbers enters the model, a table of results or a slide, because the case "
             "gives outside data no credit (C-R1, FAQ 4). Assumption tags (`[A05]` style) resolve to section 34 and Appendix B (model table T1). "
             "Case tags (`[C-E3N4]` style) resolve to `case/01-case.md`. Raw research rows (`[D07]` style) resolve through `research/raw/R-D.md`.")
    doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\nSources were opened and checked in October and November 2026. Only sources cited in the text are listed.\n\n" + app_a +
           "\n\n## Appendix B: Model tables\n\n" + demote(rd(AK / "model" / "model_tables.md")) + "\n\n" + rd(R / "parts" / "appendix-C.md").strip() + "\n\n" +
           rd(R / "parts" / "appendix-D.md").strip() + "\n")
    io.open(R / (NAME + ".md"), "w", encoding="utf-8", newline="\n").write(doc)
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M); h2 = re.findall(r"^## (\d+)\. ", body, re.M)
    authored = body + "\n\n" + rd(R / "parts" / "appendix-C.md") + "\n\n" + rd(R / "parts" / "appendix-D.md")
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)), dashes=len(re.findall("[—–]", authored)),
               exclamations=authored.count("!"), question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(re.escape(b), authored, re.I)) for b in BAN if re.search(re.escape(b), authored, re.I)},
               q_outside_36=re.split(r"^## 36\.", authored, flags=re.M)[0].count("?"), not_x_but_y=count_not_x_but_y(authored),
               h2_numbered=len(h2), answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), missing_S=missing,
               dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10], ai_statement=count_ai_statement(doc),
               untagged_number_lines=count_untagged(body), context_leaks=context_leaks(body)[:10])
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0 and not res["question_headings"]
          and not res["banned"] and res["answers"] >= res["h2_numbered"] and not res["missing_S"] and not res["dup_headings"] and res["ai_statement"] == 0
          and res["untagged_number_lines"] <= 25 and res["q_outside_36"] == 0 and res["not_x_but_y"] == 0 and not res["context_leaks"])
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL"); sys.exit(0 if ok else 1)
def pdf():
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:]); p = R / (NAME + ".pdf"); print("PDF", p.exists() and p.stat().st_size)
if __name__ == "__main__": {"md": md, "pdf": pdf}[sys.argv[1]]()
```

<!-- FILE: research/build_pdf.py -->
```python
"""Render dobaara-research.md to a consulting-style PDF (markdown-it -> HTML/CSS -> headless Chrome)."""
import re, html, subprocess, sys, pathlib, shutil
from markdown_it import MarkdownIt
HERE = pathlib.Path(__file__).parent
SRC = HERE / "dobaara-research.md"; HTML_OUT = HERE / "dobaara-research.html"; PDF_OUT = HERE / "dobaara-research.pdf"
text = SRC.read_text(encoding="utf-8")
head, body = text.split("\n---\n", 1)
title = re.search(r"^# (.+)$", head, re.M).group(1)
subtitle = re.search(r"^\*\*(.+?)\*\*", head, re.M).group(1)
prepared = re.search(r"^Prepared for: (.+)$", head, re.M).group(1)
md = MarkdownIt("commonmark").enable("table"); md.options["html"] = False
toc = []
def slug(s): return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
tokens = md.parse(body)
for i, t in enumerate(tokens):
    if t.type == "heading_open" and t.tag in ("h2", "h3"):
        inline = tokens[i + 1].content; sid = slug(inline); t.attrSet("id", sid)
        if t.tag == "h2": toc.append((inline.replace("`", ""), sid))
out = md.renderer.render(tokens, md.options, {})
TAG = re.compile(r"\[((?:C-[A-Za-z0-9]+|A\d{2}|M|T\d{1,2}|S\d+|[B-I]\d{2,3})(?:, ?(?:C-[A-Za-z0-9]+|A\d{2}|M|T\d{1,2}|S\d+|[B-I]\d{2,3}))*)\]")
parts = re.split(r"(<code>.*?</code>|<a [^>]*>.*?</a>)", out, flags=re.S)
parts = [p if p.startswith(("<code>", "<a ")) else TAG.sub(lambda m: f'<span class="tag">{m.group(1)}</span>', p) for p in parts]
out = "".join(parts); out = re.sub(r"<code>(.*?)</code>", r'<span class="code">\1</span>', out)
toc_html = "".join(f'<li><a href="#{sid}">{html.escape(t)}</a></li>' for t, sid in toc)
CSS = """
@page { size: A4; margin: 22mm 18mm 22mm 18mm;
  @bottom-left { content: "Project DOBAARA  |  Team IdeaForge"; font: 600 8pt Inter, 'Segoe UI', sans-serif; color: #1F4E9A; }
  @bottom-right { content: counter(page); font: 600 8pt Inter, 'Segoe UI', sans-serif; color: #0A0A0A; } }
@page :first { margin: 0; @bottom-left { content: none } @bottom-right { content: none } }
:root { --p:#1F4E9A; --pd:#0B2A5B; --a:#F5B700; --tint:#DCE6F5; --ink:#0A0A0A; --grey:#F4F5F4; --line:#D5D9D6; }
* { box-sizing: border-box; }
body { font: 9.6pt/1.5 Inter, 'Segoe UI', Calibri, sans-serif; color: var(--ink); margin: 0; }
.cover { height: 297mm; background: var(--pd); color: #fff; padding: 30mm 22mm; position: relative; page-break-after: always; }
.cover .bar { position:absolute; left:0; top:0; bottom:0; width:10mm; background: var(--a); }
.cover .kicker { font: 700 10pt Poppins,'Segoe UI',sans-serif; letter-spacing: .18em; color: var(--a); text-transform: uppercase; margin-top: 30mm; }
.cover h1 { font: 800 40pt/1.05 Poppins,'Segoe UI',sans-serif; margin: 8mm 0 6mm; border: 0; padding: 0; color:#fff; }
.cover .sub { font: 600 15pt/1.35 Poppins,'Segoe UI',sans-serif; color: var(--tint); max-width: 150mm; }
.cover .meta { position:absolute; left:22mm; right:22mm; bottom:26mm; border-top: 2px solid var(--a); padding-top: 6mm; font-size: 10pt; color:#fff; }
.cover .meta b { color: var(--a); }
.tocpage { page-break-after: always; }
.tocpage h2.tt { font: 800 20pt Poppins,'Segoe UI',sans-serif; color: var(--pd); border-bottom: 3px solid var(--a); padding-bottom: 3mm; margin: 0 0 8mm; }
.tocpage ol { list-style: none; padding: 0; margin: 0; }
.tocpage li { padding: 1.5mm 0; border-bottom: 1px solid var(--line); font-weight: 600; font-size: 9.6pt; }
.tocpage a { color: var(--ink); text-decoration: none; }
h1,h2,h3,h4 { font-family: Poppins,'Segoe UI',sans-serif; color: var(--pd); line-height: 1.2; }
h2 { font-size: 16pt; font-weight: 800; margin: 12mm 0 4mm; padding: 0 0 2.5mm; border-bottom: 3px solid var(--a); page-break-after: avoid; }
h2::before { content: ""; display:inline-block; width: 4mm; height: 4mm; background: var(--p); margin-right: 3mm; vertical-align: 1px; }
h3 { font-size: 11.6pt; font-weight: 700; margin: 7mm 0 2mm; color: var(--p); page-break-after: avoid; }
h4 { font-size: 10pt; font-weight: 700; margin: 5mm 0 1mm; page-break-after: avoid; }
p { margin: 0 0 3mm; } strong { font-weight: 700; }
ul, ol { margin: 0 0 3mm; padding-left: 6mm; } li { margin-bottom: 1mm; }
hr { border: 0; border-top: 1px solid var(--line); margin: 6mm 0; }
blockquote { margin: 4mm 0; padding: 3mm 5mm; background: var(--tint); border-left: 1.5mm solid var(--p); }
blockquote p:last-child { margin: 0; }
table { width: 100%; border-collapse: collapse; margin: 3mm 0 5mm; font-size: 8.3pt; line-height: 1.35; page-break-inside: auto; }
thead { display: table-header-group; } tr { page-break-inside: avoid; }
th { background: var(--pd); color: #fff; text-align: left; font: 700 8pt Poppins,'Segoe UI',sans-serif; padding: 2mm 2.2mm; border: 1px solid var(--pd); }
td { padding: 1.7mm 2.2mm; border: 1px solid var(--line); vertical-align: top; overflow-wrap: anywhere; word-break: break-word; }
tbody tr:nth-child(even) td { background: var(--grey); }
td:first-child { font-weight: 600; min-width: 15mm; }
a { color: var(--p); text-decoration: none; }
.tag { font: 600 7pt Inter,'Segoe UI',sans-serif; color: var(--pd); background: var(--tint); border-radius: 2px; padding: 0 1.3mm; white-space: nowrap; }
.code { font: 500 8pt Consolas,'Courier New',monospace; background: var(--grey); border: 1px solid var(--line); padding: 0 1mm; border-radius: 2px; }
"""
cover = f"""<section class="cover"><div class="bar"></div>
<div class="kicker">MarKSoc DTU Case Competition 2026  |  Project DOBAARA  |  Research deliverable</div>
<h1>Project DOBAARA<br><span style="font-size:24pt;font-weight:700;color:#F5B700">Tikau Phones and the trust problem in refurbished smartphones</span></h1>
<div class="sub">{html.escape(subtitle)}</div>
<div class="meta"><b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University (DTU), Team Leader<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University (GGSIPU), Member<br>Dayita Arora, Ramjas College, University of Delhi, Member<br><br>{html.escape(prepared)}</div></section>"""
doc = f"""<!doctype html><html><head><meta charset="utf-8"><title>{html.escape(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
<style>{CSS}</style></head><body>{cover}
<section class="tocpage"><h2 class="tt">Contents</h2><ol>{toc_html}</ol></section>
{out}</body></html>"""
HTML_OUT.write_text(doc, encoding="utf-8")
chrome = shutil.which("chrome") or r"C:\Program Files\Google\Chrome\Application\chrome.exe"
cmd = [chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=20000", f"--print-to-pdf={PDF_OUT}", HTML_OUT.resolve().as_uri()]
r = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
print(r.returncode, r.stderr[-300:]); print(PDF_OUT, PDF_OUT.exists() and PDF_OUT.stat().st_size)
```
