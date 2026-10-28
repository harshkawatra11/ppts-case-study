# HarvestBox (Verdict 2.0): research repair, then a rebuilt consulting-grade Figma deck (v3)

> **Who executes this.** A Sonnet-class orchestrator in Claude Code, dispatching Sonnet sub-agents where a step says so.
> Every decision is made here: slide count, layout boxes, every headline, every panel, every number's source, every
> script that is not pure layout. The executor's job is to execute, run the checks, and fix only through the fix
> ladders in section 12. If something in this plan turns out to be wrong against the files, the files win: log the
> difference in `deck3/build-log.md` and take the smallest change that restores the rule it was serving.
>
> **Working directory for every command:** `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\verdict-mnc`
> (the session's cwd). Python is always `python -X utf8`. Node is `node`.

---

## 0. Context

**Why this plan exists.** The v2 deck (Figma file `jpMw7czN5ujU0xJ4xdqPAg`, built in `deck/`) was judged by the user as
"not at all up to the mark" against the team's other decks. Side-by-side comparison done during planning (screenshots of
the Dream11 deck `YoiazGGOribfg69EjEDIlP`, the Toing deck `JLOOyohkQPUrwXEsxDKz4m`, PRAMAAN `vAIyXmljHlFDuwQo6RsoIN`,
the prime inspo `hOJVMGv9nIhDmayTT7DmOt`, and the built v2 slides) found four gaps, three of which the user confirmed:

1. **Too few diagram forms** (confirmed). v2 core slides were tables, small line charts and heat grids only. The
   references use issue trees, funnels, loops, game trees, architecture planes, decision trees, waffles, plan cards,
   gauges, quote cards, donuts and a full-width **so-what bar** on every core slide.
2. **Cramped, cryptic text** (confirmed). Headers such as "Grw", "Chg", "By M3", "Rev" were introduced to dodge
   text-width failures. The user reads this as spreadsheet output.
3. **Thin argument per slide** (confirmed). Each v2 slide carried one finding. The references wrap the main finding with
   evidence, a counter-view and a "what we would watch".
4. No brand imagery on core slides.

**Decisions locked with the user (AskUserQuestion, this session):**

| Item | Decision |
|---|---|
| Structure | **8 slides: cover, 4 core (one per case deliverable D1 to D4), 2 appendix, thank-you.** The case rule (PDF p.6, `case/01-case-brief.md` G4) caps the main deck at 4 slides plus thank-you plus up to 4 appendix slides. The user's request for "5 core" is satisfied by moving the would-be fifth slide (market, competition, precedents) into a dense Appendix 1 |
| HarvestBox visuals | **Native-drawn only.** No app screens (the user asked why they would be needed; they are not, the case is about plan design, pricing and cash). Native visuals carry numbers: three plan cards, a price ladder, a skip-floor month strip, a box-and-skip calendar. Real logos only for real brands |
| Figma | A **completely new Figma Slides file**. The v2 file is superseded and never edited again |
| Research | Assessed in depth before any deck work; every defect found is repaired first (Stage R) |

**Standing rules (memory, CLAUDE.md, user):** no em dash or en dash anywhere; no hooks, no rhetorical questions, no
exclamation marks, no AI-slop phrasing; **no invented names** (no project name, programme name, codename or coined
label; only the case's own words such as "Proposal A", "Proposal A, rebuilt", "operational improvements"); no fabricated
primary research; India-first ₹ / lakh / crore; 22pt floor (source line 14pt and FINEPRINT 16pt are the only
exemptions); corner radius 0; 2px ink outlines; layered cards; cover has no KPI-card row and carries a Team Members |
Institution | Role table that repeats on the thank-you slide; do not use `lsr-caseforchange/` or `lsr-revive/` as a
model; do not add a Co-Authored-By trailer to any commit (nothing is committed in this plan).

**Intended outcome.** A repaired, re-assembled research document and PDF; then an 8-slide native Figma deck in which every
core slide carries 8 or more distinct visual forms, 230 to 420 nodes, three bands, a so-what bar, full-word labels, and
a source line naming research sections, each panel traceable to a research section or model output.

---

## 1. Context carried over from the previous account ("old organisation")

The session's account changed mid-planning. Everything below was gathered under the old account and is recorded here so
execution does not depend on re-reading it.

| Item | Value | Use now |
|---|---|---|
| v2 Figma file | `jpMw7czN5ujU0xJ4xdqPAg` (old team) | Superseded. Do not open or edit |
| Old team plan key | `team::1564294484048272772` ("25/A16/057 HARSH KAWATRA's team") | Use only if `whoami` on the current account lists it. Otherwise use the plan key `whoami` returns; if it returns more than one team, ask the user which one |
| Inspiration decks (read-only) | Dream11 `YoiazGGOribfg69EjEDIlP` (the user's "amazing one"); prime inspo `hOJVMGv9nIhDmayTT7DmOt`; Toing `JLOOyohkQPUrwXEsxDKz4m`; PRAMAAN `vAIyXmljHlFDuwQo6RsoIN`; SwasthyaGrid `APbOstO4SSU7iAjYIgEeSd`, `e5VEexsLMhDampx7gvhFmM` | If the new account cannot read them, section 3 holds the patterns that matter; do not block on access |
| Model | `model/harvestbox_model.py`, hash `06111c6c33` (computed only from scenario summary numbers, line 258), 14 checks | Unchanged numerically by this plan |
| Research | `research/harvestbox-research.md` (88,317 words, 193 tables), parts in `research/parts/`, assembled by `research/assemble.py` | Repaired in Stage R |
| Review mining | `research/reviews/` (8,052 Play Store reviews, 2,435 low-star, six apps) | Source for slide 2 heat table and quote |
| v2 deck pipeline | `deck/` (gen.py, slides, values.js) | Left untouched. v3 lives in a new folder `deck3/` |
| Memory | `feedback_no_invented_names.md`, `feedback_cover_style.md`, `feedback_no_em_dash_no_hooks.md`, `feedback_lsr_not_a_template.md`, `project_verdict_harvestbox.md` | Rules apply; update the project memory at the end (section 15) |

---

## 2. Assessment of the research deliverable (done during planning; drives Stage R)

### 2.1 What the research already does well (keep, and put on slides)

- Quantified cohort survival and unit economics (§4, §5, §6): leavers 45%, 1.4 boxes, ₹2,281 gross profit, −₹4,719
  each; stayers 55%, 11.2 boxes, ₹17,915, 2.56x; payback month 10 with 23% of the cohort left.
- Review mining with a precision check (§7, Appendix C): rigidity 42.5% of reason mentions against the case's 34%;
  delivery 27.1% against 10%; menu repetition 1.8% against 18%.
- Twelve-scenario model, EBITDA bridge, tornado, retention by skip grid, break-even values per input (§19, §20).
- Insight 12, stated honestly (§16.4): C with the same improvements beats the core plan on 24-month cumulative EBITDA by
  ₹0.46 Cr but leaves ₹2.73 Cr less cash and a ₹1.50 Cr worse run-rate.
- Real precedents with numbers (§11, §12): Gousto, Blue Apron, HelloFresh, Marley Spoon; six Indian meal-kit firms,
  none past ₹42 Cr; seven scaled Indian fresh-food brands.
- Real-options gate (§2.4, §24.2): ready-to-eat staged at ₹4 Cr from month 13 only if cash ≥ ₹7 Cr and LTV to CAC ≥ 2.2x.

### 2.2 Defects found (all verified against files during planning) and the repair for each

| # | Defect | Where | Repair (Stage R step) |
|---|---|---|---|
| D1 | **Scorecard rule mismatch.** The text says growth is scored by Ansoff quadrant and gives profit bands that differ from the model. The model (`harvestbox_model.py` lines 225 to 240) scores growth on year-1 revenue added (bands at 1, 3, 5, 7), profit on 24-month EBITDA added (bands at 0.5, 1.5, 2.5, 3.5), cash as 6 minus band(cash needed; 1.5, 2.5, 3.5, 4.5). The revenue column mixes year-1 rows (A, B, C) with a 24-month row (A rebuilt) | §16.2 and its band-rule table; model T9 | R1 |
| D2 | **Risk heat map contradicts the register.** Register: risk 6 is P2/I3, risks 7 and 8 are P2/I2. Heat map plots 6 at P3/I3 and 7, 8 at P2/I3 | §21.2 | R2 |
| D3 | **Retention by skip grid described three ways.** Model line 220 builds it from `var()`, which starts from the **base** scenario (with staged ready-to-eat). §6.6 is right; §13.4 (calls it Proposal A as written) and §20.4 (calls it the core path) are wrong | §13.4, §20.4 | R3 |
| D4 | **Two different "break-even skip rates" and a stop trigger above both.** 12.6% is the skip rate that cancels Proposal A's retention gain (`UNIT be_skip`); 5.6% is the skip rate at which base run-rate EBITDA turns negative (§20.5, T127). The KPI stop trigger "over 10% for 2 months" sits far above the 5.6% at which the plan already fails, and risk 4 is scored "unlikely" while the base case (5%) is 0.6 points from its break-even | §13, §17.1, §20.5, §21.1 risk 4, §21.3 story two, §23 KPI table; model line 323 | R4 |
| D5 | Bear cash path in T124 uses the no-decision drift series as a proxy for "bear, no response" (model gives −₹2.70 Cr at month 24, zero in month 20) | §20 T124 | R5 |
| D6 | **Day-90 KPI cells are impossible.** "Boxes skipped 0% (not yet live)" while §22 has the feature live by week 12; "pilot 62%" month-3 retention at day 90 although a pilot cohort launched in weeks 3 to 4 is only about 9 weeks old at day 90 | §22, §23 T141, part-E line 375; model line 322 | R6 |
| D7 | §19.1 says ready-to-eat launches "in the second half of year 1"; the model spends months 13 to 15 and sells from month 14 | §19.1 | R7 |
| D8 | T103 lists 39,200 first orders as the current activation reading, though §4 shows it cannot be reconciled with 990 new customers a month | §18.1 T103 | R8 |
| D9 | FreshMenu "collapsed in 2022", while the cited source S52 is titled "How FreshMenu bounced back from near collapse…" | §12.2 | R9 |
| D10 | Every bibliography entry is dated "(2026)", including 2011 to 2017 articles | Appendix A | R10 |
| D11 | The largest bridge step (+₹3.77 Cr, "referral, win-back, conversion") is one bundled number resting on A10 (one outside study) and A14 (no outside evidence) | §18, §19.3 T114; model lines 197 to 209 | R11 (split into three steps; hash unaffected) |
| D12 | Leftover label risk: "Perennial", "Flex", "reset" as a label | all parts | R12 (scan; expected clean) |

### 2.3 What the research cannot support (the deck must never show it)

Any HarvestBox customer quote, survey, persona or interview; named cities (the case never names the five cities, so
**no city map**); named private-label chains; a single India meal-kit market size or TAM; competitor market shares; a
settled meal-kit retention benchmark; a profit claim (the base case is break-even: run-rate +₹0.10 Cr); the 62,000
subscribers as a base. Allowed and real: verbatim Play Store review quotes about **other** meal-kit apps, attributed by app,
star rating and month (research lines 724 to 731).

### 2.4 Framework coverage after repair (what the deck can draw)

Quantified: cohort survival, unit economics, issue tree of the margin gap (§3.2), price ladder, weighted scorecard,
AARRR (partly), EBITDA bridge, scenarios, tornado, two-way grid, break-even values, risk register and 5x5 heat map,
Gantt, KPI table, real-options gate, precedent comparables, review mining. Qualitative but citable: Porter's five
forces (rated in words), strategic groups, Ansoff, Kano, five routes to dinner. Absent and **not to be invented on the
deck**: PESTLE, TAM/SAM/SOM, personas, journey map, city breakdown, competitor share, SWOT, BCG.

---

## 3. The quality bar, taken from the reference decks

Patterns every v3 core slide must carry (seen in Dream11, Toing, PRAMAAN and the prime inspo):

| Pattern | Rule for v3 |
|---|---|
| Skeleton | Ribbon of 6 tags (y 40 to 100) with punch-holes and wires, 1 or 2 active; counter chip at x 1720; section chip at (64,118); two-line action headline from y 188, 40pt stepping to 34pt; source line 14pt at y 1046 |
| Bands | Band A from y 318, dashed divider, band B, then a **so-what bar** (dark layered band, accent chip "SO WHAT", 24pt white text, bold accent lead-in) ending at y 1030 |
| Density | **8 or more distinct visual forms per core slide, at least 3 of them data visualisations; 230 to 420 nodes; no empty region larger than about 150 x 150 px** |
| Labels | Full words. No "Grw", "Chg", "By M3", "Rev". If a word does not fit, the layout changes (wider column, transposed table, fewer columns), never the word into a fragment |
| Annotation | Every chart has an in-chart callout (dashed marker, labelled point, threshold line) |
| Evidence | Each slide pairs a chart with a table or a number card, and carries one counter-view or caveat in plain words |
| Brands | Logo slots beside every real brand that appears in a panel (dashed frame named `LOGO: <brand>`) |
| Fine print | One 16pt FINEPRINT line at most per panel, only to expand a short form or state a sample size |

Measured densities for comparison (from the build logs): Toing core slides 165 to 341 nodes; PRAMAAN 143 to 321;
Dream11 about 180 to 290; v2 HarvestBox 173 to 393 but with only 4 to 6 forms.

---

## 4. Execution model: who does what

| Role | Model | Responsibilities |
|---|---|---|
| **Orchestrator (main session)** | Sonnet | Runs every command and every Figma call (Figma calls are sequential and only from the orchestrator); dispatches sub-agents; runs checks; keeps `deck3/build-log.md` |
| SA-R (research repair) | Sonnet sub-agent, foreground | Stage R edits to `research/parts/*.md` (R1 to R10 text), prompt 13.1 |
| SA-C (content engineer) | Sonnet sub-agent, foreground | **Invokes the `case-competition-deck` skill (generate mode)**; checks the slide specification in section 9 against the skill; writes `deck3/slide-copy.md` and `deck3/derivation.md`, prompt 13.2 |
| SA-L (library) | Sonnet sub-agent, foreground | Builds `deck3/lib/`, `deck3/gen3.py`, mock patches, and a helper test slide; prompt 13.3 |
| SA-S1, SA-S2 (slide scripts) | Two Sonnet sub-agents **in parallel** | SA-S1 writes `slides/s02.js` to `s05.js`; SA-S2 writes `s01.js`, `s06.js`, `s07.js`, `s08.js`. Each **invokes the `case-competition-deck` skill (slide mode)** for the archetypes on its slides before coding; each iterates against the offline mock until clean; prompt 13.4 |
| SA-K (critic) | Sonnet sub-agent | **Invokes the `case-competition-deck` skill (critique mode)** on the eight screenshots; prompt 13.5 |

Every sub-agent prompt below states: the skill must be invoked with the Skill tool (`case-competition-deck`), CLAUDE.md
and `deck-system/` are the build rules, the five writing rules, and the no-invented-names rule.

**Deferral rule (user instruction).** If a slide fails its Figma build or V1 twice after fix-ladder attempts, log it,
move on to the next slide, and return to it after all other slides are built.

---

## 5. Stage R: research repair (must finish before any deck work)

### R0. Setup
1. Create `deck3/` and `deck3/build-log.md` with a heading `# HarvestBox deck v3 build log` and a `## Stage R` section.
2. Run `python -X utf8 model/harvestbox_model.py` and record: 14 PASS lines, `HASH 06111c6c33`.

### R-model. Orchestrator edits to `model/harvestbox_model.py` (strings and the bridge only; numbers untouched)

| Edit | Exact change |
|---|---|
| M1 (R11, bridge split) | In `steps` (line ~204), replace the single tuple `("Proposal A: referral, win-back, conversion", dict(ref=A["A10_ref_share"], refcac=A["A11_ref_cac_rs"], cro=F["conv"] / A["A14_conv_to"], wb=A["A12_wb"]))` with three tuples in this order: `("Proposal A: referral on the third box", dict(ref=A["A10_ref_share"], refcac=A["A11_ref_cac_rs"]))`, `("Proposal A: win-back of lapsed customers", dict(wb=A["A12_wb"]))`, `("Proposal A: website conversion", dict(cro=F["conv"] / A["A14_conv_to"]))`. The final `acc` is identical, so the last bridge value and the "bridge sums" check are unchanged |
| M2 (R4) | Line 323: `"over 10% for 2 months"` becomes `"over 6% for 2 months"` |
| M3 (R6) | Line 322: `"pilot 62%"` becomes `"M2: 81%"`. Line 323: the day-90 cell `k3["skip"]` stays (it is 0% because the model launches in month 4); in the research table it is written "launches month 4" |
| M4 (R1) | T9 table (line ~364): replace the header list with `["Option", "Year-1 revenue vs no decision", "24-month revenue vs no decision", "24-month EBITDA vs no decision", "Cash needed", "Growth", "Profit", "Cash", "Risk", "Score"]`; for the three OPT rows insert `sg(o["drev"]), sg(d24(<key>, "rev"))` where `<key>` is the scenario key (`A_written`, `B_written`, `C_written`; iterate `OPT.items()` to have the key); for the PER row insert `sg(SUM["core"]["rev1"] - SUM["drift"]["rev1"]), sg(d24("core", "rev"))` |

Then rerun the model. **Done when:** 14 PASS, `HASH 06111c6c33`, `model/model_tables.md` T6 shows 12 bridge rows whose three
new Proposal A rows sum to 3.77 (±0.01), T9 shows two revenue columns (A +0.0 / +4.6, B +7.6 / +18.0, C +5.4 / +13.2,
A rebuilt −0.7 / +5.1). Record the three split values in the build log; they are used on slide 4 and in R11 text.

### R-text. SA-R edits (prompt 13.1), one row per repair

| Step | Repair text (the agent locates each by grep, not line number) |
|---|---|
| R1 | §16.2: rewrite the scoring paragraph to state the model's actual rule: growth from year-1 revenue added against no decision (below ₹1 Cr scores 1; ₹1 to 3 Cr, 2; ₹3 to 5 Cr, 3; ₹5 to 7 Cr, 4; ₹7 Cr and above, 5), with one sentence that this ordering matches the Ansoff reading in §16.1; profit from 24-month EBITDA added (below ₹0.5 Cr, 1; ₹0.5 to 1.5 Cr, 2; ₹1.5 to 2.5 Cr, 3; ₹2.5 to 3.5 Cr, 4; ₹3.5 Cr and above, 5); cash from cash needed (below ₹1.5 Cr, 5; ₹1.5 to 2.5 Cr, 4; ₹2.5 to 3.5 Cr, 3; ₹3.5 to 4.5 Cr, 2; ₹4.5 Cr and above, 1); risk by judgement (reversible software and process change 4, named brand, retailer or food-safety exposure 2). Replace the table with the T9 columns from M4. Delete the paragraph that discloses the mixed time base and replace it with: "On 24-month revenue, A rebuilt adds the least of the four options (+₹5.1 Cr against +₹18.0 Cr for B); the weights put profit and cash first `[A24]`." Rewrite the band-rule table to the bands above. Scores do not change (2.80, 3.20, 3.00, 3.70) |
| R2 | §21.2 heat map rows become: impact 5: P2 `4, 10, 12`; impact 4: P2 `11`, P3 `1, 5`; impact 3: P2 `6`, P3 `2, 3, 9`; impact 2: P2 `7, 8`. Then apply R4b's change to risk 4 (moves it to P3, impact 5). Fix the sentence under the table to match |
| R3 | §13.4 and §20.4: wherever the retention by skip grid is described, state that it is the base case including staged ready-to-eat, and that the 65% and 5% cell (−₹6.3 Cr) equals base year-1 plus year-2 EBITDA (−5.53 − 0.75) |
| R4 | (a) Everywhere "break-even skip rate 12.6%" or equivalent appears, write "the skip rate that cancels Proposal A's retention gain, 12.6%". (b) Add to §20.5 and §21.1 that base run-rate EBITDA turns negative at a 5.6% skip rate against the 5% base. (c) Risk 4 row: probability 3 (was 2), early signal "skip rate above 5% in month 5", trigger "over 6% for two consecutive months"; add one sentence of rationale: the base case sits 0.6 points from the run-rate break-even. (d) §21.2 sentence: risk 4 is now the one risk scored possible and severe. (e) §21.3 story two: the softer watch level becomes 6%. (f) §23 KPI table "Boxes skipped" stop trigger: "Over 6% for two months" |
| R4b | Register and heat map reflect risk 4 at P3 I5 (score 15) |
| R5 | §20 T124: replace the "bear, no response" row with the model's `bear` monthly cash at months 0, 3, …, 24 (read from `model/model_outputs.json` → `monthly.bear[i].cash` for i = 2, 5, …, 23), ending −2.70, zero in month 20 |
| R6 | §23 T141 and part-E table near line 375: day-90 retention cell "month-2 retention 81% (pilot; today 74%)"; day-90 skip cell "launches month 4". §22: replace any "13-week read" or month-3 pilot claim with "first two-month read of the week-3 and week-4 cohorts". The 81% and 74% are the model's survival at month 2 for 65% and 55% three-month retention (`surv12(0.65)[1]` = 0.806, `surv12(0.55)[1]` = 0.742) |
| R7 | §19.1: "ready-to-eat spending runs in months 13 to 15 and sales start in month 14" |
| R8 | T103: activation reading becomes "not measurable from case data; the web funnel and revenue do not reconcile (§4)" |
| R9 | §12.2: "FreshMenu's revenue fell from ₹104.5 Cr to ₹50 Cr before a reported recovery `[S52]`" |
| R10 | Appendix A: each "(2026)" becomes "(accessed 2026)" unless the entry itself states its publication year, in which case use that year |
| R11 | §18 and §19.3: the bridge table gets the three split rows from the model (values recorded in R-model); add two sentences: referral rests on A10 (one outside study); conversion on A14 (no outside evidence); win-back on A12 |
| R12 | Grep `Perennial`, `\bFlex\b`, `\breset\b` (as a label, not the verb "resets") in `research/parts/*.md`; expected zero. Also grep capitalised multi-word phrases not in the case brief and confirm none is a coined name |

### R-close
1. `python -X utf8 research/assemble.py md` must print `ASSEMBLY PASS`.
2. `python -X utf8 research/assemble.py pdf`; open pages 1 and the last page with PyMuPDF to confirm rendering.
3. Acceptance greps on `research/harvestbox-research.md`: `over 10% for` = 0; `pilot 62%` = 0; `break-even skip rate` = 0;
   `13-week read` = 0; `Perennial` = 0.
4. Log Stage R in the build log with STATUS PASS.

---

## 6. Stage D0: content engineering with the skill (SA-C, prompt 13.2)

SA-C invokes the `case-competition-deck` skill in generate mode and reads `references/structure.md` (compression
guidance near line 363), `references/archetypes.md`, `references/rhetoric.md`, `references/frameworks.md`,
`case_types/strategy.md` and `case_types/marketing.md`. It then checks section 9 of this plan against the skill and
writes two files:

- `deck3/slide-copy.md`: for each slide, the final strings exactly as they will appear (headline, chip, every panel title,
  every cell, every label, so-what text, source line), keeping section 9's strings unless a string breaks a rule; any
  change is listed in a "changes from plan" table with the reason.
- `deck3/derivation.md`: one table per slide, `Panel | Text or number | Research section | Tag | Model key | Matches`.
  Every number either comes from `deck3/values.json` (section 8) or is a constant listed with its research table.

Archetype mapping SA-C must confirm (skill names in brackets): cover verdict = executive summary [H]; slide 2 scorecard =
MECE option filter and symmetric grid [K, L]; slide 3 do-not/do + insight 12 = contrarian recommendation with
pre-empted weakness, "Conclusively" closer [V]; slide 4 = moneyshot with decomposition [P], three scenarios [M]; slide 5 =
implementation plan [U] and "Therefore" synthesis [W]; appendix 1 = context and actors compressed; appendix 2 =
sensitivity matrix [N] and defensive depth. Exactly one node named `MONEYSHOT` (slide 4). Action titles with a number on
all four core slides.

**Done when:** both files exist, every number row says "yes", and SA-C's reply lists the archetype mapping and any
changes. The orchestrator reads the "changes from plan" table and accepts or rejects each change before Stage D2.

---

## 7. Stage D1: the v3 build pipeline (SA-L, prompt 13.3)

Folder layout:

```
deck3/
  build-log.md        figma.md          slide-ids.json     values.json    mock_k.txt
  make_values.py      gen3.py           mock_figma.js      calibrate.py
  lib/palette.js      lib/extras3.js    lib/v1.js          lib/sweeps.js  lib/probe.js
  slides/s01.js … s08.js                slides/s99_test.js
  build/ (generated)  shots/            logos/             slide-copy.md  derivation.md
```

### 7.1 Base library
The preamble is the Toing library `../../nsbc-case/deck/preamble.js` (30.7k characters, 58 functions including
`heatmap`, `gantt` with diamond marks, `waterfall` with step objects, `donut`, `tornado` with value labels, `flow`,
`gauge`, `numCard`, `quoteCard`, `formulaBox`, `soWhat`, `RT` rich text, `addLine`, `addPoly`, `addArrow`, `stackH`,
`stackV`, `vBars` with negatives, `lineChart` with dashed series and null gaps). `gen3.py pre` swaps in the HarvestBox
palette and team, and appends `lib/extras3.js` (section 14.3). Do not edit the Toing file itself.

### 7.2 Mock fixes (the v2 failure, fixed at the root)
The v2 slide-2 and slide-4 failures came from two mock gaps: the mock never flags a **single word wider than its box**
(its greedy wrap keeps an over-long word on one line; real Figma breaks it mid-word or wraps a cell), and its character
widths run a few percent narrow. SA-L copies `../deck/mock_figma.js` to `deck3/mock_figma.js` and applies the three
patches in section 14.5 (scale factor `MOCK_K`, `wordBreak` check, `childOut` check). The Toing build log also showed a
heat map and a Gantt overflowing their own panel, which only a screenshot caught; `childOut` catches that offline and
in Figma.

### 7.3 Helper test
SA-L writes `slides/s99_test.js` that draws one instance of every new helper (funnel, matrix2x2, issueTree, waffle,
legendV, planCard, skipStrip, kv, teamTable3) on slide `S9` of the mock, and runs it until the mock prints
`warnings: []` and `ISSUES 0`. This test slide is never built in Figma.

**Done when:** `python -X utf8 deck3/gen3.py pre` prints the preamble length and no assertion; the test slide is clean
in the mock.

---

## 8. Values: `deck3/make_values.py` → `deck3/values.json`

Written by SA-L. It runs the model with `runpy.run_path("model/harvestbox_model.py", run_name="hb_values")` and reads
`SUM`, `RUNS`, `UNIT`, `BRIDGE`, `TORN`, `GRID`, `OPT`, `PER`, `V` (the model's deck dict), `HASH`, `surv12`, `F`, `A`.
It writes `values.json` as a flat dict. Formatting: minus sign is U+2212 "−", rupee "₹", one decimal for ₹ Cr unless
stated. **It asserts** `HASH == "06111c6c33"` and each "check" value listed.

| Key | Expression or constant | Check |
|---|---|---|
| `hash` | `HASH` | `06111c6c33` |
| `wf` | from `S0 = surv12(0.55)`: gone by M3 `round(100*(1-S0[2]))`, gone M4 to M6 `round(100*(S0[2]-S0[5]))`, gone M7 to M12 `round(100*(S0[5]-S0[11]))`, still ordering `100 - sum` | `[45, 21, 15, 19]` |
| `pay` | `UNIT["payback"]`, `round(100*UNIT["pay_surv"])` | `[10, 23]` |
| `unit` | leaver gp `₹2,281`, leaver loss `−₹4,719`, leaver boxes `1.4`, stayer gp `₹17,915`, stayer boxes `11.2`, stayer ratio `2.56x`, leaver drag `₹2.5 Cr`, CAC `₹7,000` | as shown |
| `gm`, `mk`, `ox` | 2022 to 2025 gross margin, marketing, other cost as % of revenue from `F["hist"]` | `[38,36,33,31]`, `[22,25,28,30]`, `[28,26,24,23]` |
| `revh` | `[19, 29, 38, 42]` | |
| `dmk` | `V["dmk"]` | `["31p","38p","49p"]` |
| `why` | case shares `[34,27,18,11,10]` | |
| `rv` | constant from research §7.2 T38: `[42.5, 16.2, 1.8, 12.4, 27.1]` | |
| `fix` | constant §7.1 T34: `["A", "none", "A, C", "A", "none"]` | |
| `score` | rows for A, B, C as written and A rebuilt: `[growth, profit, cash, risk, score]` from `OPT` and `PER` | `[[1,2,4,4,"2.80"],[5,3,3,2,"3.20"],[4,5,1,2,"3.00"],[1,5,4,4,"3.70"]]` |
| `cashq` | quarterly cash `[15.0] + [RUNS[k][i]["cash"] for i in 2,5,…,23]` rounded to 2 dp, for `drift`, `A_written`, `B_written`, `C_written`, `base`, `core`, `bear`, `bear_cont`, `bull` | `base` ends 2.92, `core` 5.65, `bear` −2.70, `bear_cont` 1.46 |
| `zero` | `SUM[k]["zero"]` for drift, A, B, C written | `18, 16, 16, 15` |
| `aw1`, `bstore`, `cneed`, `pl` | `"0.29"`, `"₹8,333"`, `"₹5 Cr"`, private label `"₹3,500"`, cheaper by `"32.7%"` (§10.3) | |
| `skip` | cancels gain `"12.6%"` (`UNIT["be_skip"]`), run-rate break-even `"5.6%"` (§20.5 T127), base `"5%"` | |
| `plans` | `[["₹3,600","8 meals","₹450 a meal","20% of sign-ups"],["₹5,200","12 meals","₹433 a meal","65%"],["₹6,600","16 meals","₹412 a meal","15%"]]` (§10.3 T55, §17.3 T96, A09) | |
| `aov` | `"₹5,091"` (`5200*A09_aovf`, rounded) | |
| `aarrr` | `[["Acquisition","website conversion 2.8% to 3.3%"],["Activation","first box on the ₹3,600 plan"],["Retention","month-3 retention 55% to 65%"],["Referral","20% of sign-ups, ₹1,000 each side"],["Revenue","order value ₹5,091 on the new mix"]]` (§18.1 T102/T103, A10, A11, A14) | |
| `ladder` | `V["ladder"]` | `1.55, 1.67, 1.83, 2.70, 3.0` |
| `ins12` | core vs C_reset: cumulative EBITDA `−7.55` / `−7.09`; cash M24 `5.65` / `2.92`; run-rate `−1.69` / `−3.19` | |
| `bridge` | `BRIDGE` (12 items after M1), each `[label, round(v,2)]` | first −9.24, last +0.10, sum check |
| `split` | the three Proposal A sub-steps from `BRIDGE` | sum 3.77 ±0.01 |
| `be`, `mincash`, `minm`, `core24` | `"MONTH 21"`, `"₹2.9 Cr"`, `20`, `"₹5.6 Cr"` | |
| `scen` | rows Revenue, Gross margin, Marketing % of revenue, EBITDA, Year-end cash, Month-3 retention, LTV to CAC; columns 2025, base Y1, base Y2, bear with contingency Y2, bull Y2 = `V["scen"]` | |
| `risk` | `[[1,3,4],[2,3,3],[3,3,3],[4,3,5],[5,3,4],[6,2,3],[7,2,2],[8,2,2],[9,3,3],[10,2,5],[11,2,4],[12,2,5]]` (after R4b) | |
| `kpi` | `V["kpi"]` after M2 and M3, with the KPI label column replaced by: "Month-3 retention, new", "Boxes skipped, % due", "Blended CAC", "LTV to CAC, new", "Gross margin", "Marketing, % revenue", "Cash in bank, ₹ Cr"; stop triggers shortened to "under 60% at M6", "over 6% for 2 months", "over ₹6,000 at M6", "under 2.0x at M9", "under 32% at M9", "over 25% at M9", "under ₹7 Cr at M12"; day-90 skip cell "from M4" | |
| `gate` | cash M12 `round(RUNS["base"][11]["cash"],2)` = 7.67 vs 7; LTV to CAC M12 `RUNS["base"][11]["ltv"]/RUNS["base"][11]["cac"]` = 2.74 vs 2.2 | |
| `gantt` | eight rows from research §22.1 T134 (SA-L reads the table): label ≤ 18 characters, start week, end week, colour (green build, orange marketing, deep ops); milestone diamonds at W4 (pilot live), W8, W12 (five cities live) | |
| `budget` | ₹1.8 Cr split from §22 T140 (35, 15, 15, 10, 10, 15%) with the table's own category names shortened to ≤ 16 characters, and ₹ Cr each | sums to 1.80 |
| `uses` | `V["uses"]` | sums to 15.00 |
| `forces` | §10.1 T52: buyers High (4), substitutes High and rising (5), entrants Moderate (3), suppliers Low to moderate (2), rivalry Low (1) | |
| `routes` | §9.2 T46 five routes with price text | |
| `dark` | §9 T48: Blinkit 969, Zepto 828, Flipkart Minutes 627, Instamart 615, BigBasket 497 | |
| `reports` | §9 T47: IMARC $6.2bn, 7.61%; Ken Research $1.28bn, 16.4%; Technavio $2.17bn, 28.8%; GlobalData ₹19,931.6m, 14.29% | |
| `india` | §12 T66 revenue ₹ Cr: Country Delight 1,380; Rebel Foods 1,420; Licious 795; iD Fresh 681; Curefoods 635; FreshToHome 421; plus HarvestBox 42 and Chef's Basket "under 10" from T65 | |
| `glob` | §11 T63: Gousto £342m revenue, £45m adjusted EBITDA, third profitable year; HelloFresh about €6.76bn, meal-kit margin 13.5%; Marley Spoon €330.1m, 34.7% contribution margin; Blue Apron about $1.9bn IPO value to a $103m sale | |
| `assum` | `V["assum"]` (9 rows) | |
| `check` | `V["check"]` (5 rows) | |
| `torn` | `TORN` → `[short label, lo rr, hi rr]` with short labels "Referral share", "Skip rate", "Month-3 retention", "Ready-to-eat sales", "Margin levers", "Website conversion", "Brand spend cut", "Overhead cut", ordered by swing; base 0.10 | swings 2.77 … 0.93 |
| `beIn` | §20.5 T127: Referral share 20% → 18.1%; Skip rate 5% → 5.6%; Month-3 retention 65% → 64.5%; Website conversion 3.3% → 3.27%; Margin levers +4.0 → +3.8 | |
| `quote` | research line 724: text and "Play Store review of HelloFresh, 1 star, Aug 2026" | |

`gen3.py` passes each slide only the keys it references (regex `V\.(\w+)`), which keeps every bound file under 49,500
characters.

---

## 9. The deck, slide by slide (the specification SA-C and SA-S agents implement)

Canvas 1920 x 1080. Coordinates are slide-absolute `x, y, w, h`. Panel inner content starts 56px below the panel top
(title 24pt plus rule). "Inner" heights below are panel height minus 56 minus 8. Core-slide vertical grid:
**band A y 318 to 640 (h 322)**, dashed divider at y 647, **band B y 654 to 946 (h 292)**, **so-what bar y 958, h 72**.
Slide 3 and appendix 2 use band A 318 to 676 and band B 690 to 948 with the so-what bar at y 960, h 70. Horizontal gap
between panels 24. Ribbon labels (core): `["DIAGNOSIS","OPTIONS","RECOMMENDATION","FINANCIALS","RISK","90 DAYS AND KPIs"]`.

### Slide 1, cover (no ribbon; no KPI cards)

| Box | Content |
|---|---|
| Top strip y 40 to 100 | Chip `VERDICT 2.0 · MOTILAL NEHRU COLLEGE` (64,40,620,60); four organiser `logoSlot`s 90x60 at x 708, 810, 912, 1014: "Project Avsar", "The Skill Development Cell", "Motilal Nehru College", "University of Delhi"; chip `TEAM IDEAFORGE` (1556,40,300,60). Wire y 128 from 64 to 1856 with five white punch-hole ellipses |
| Title | `HARVESTBOX` Poppins ExtraBold 64 primary at (64,156); `GROWING WITHOUT BURNING OUT` Poppins ExtraBold 54 ink at (64,236) (the case's own title words) |
| Sub line | 28pt alert at (64,330): "One initiative, ₹15 Cr in the bank, a path to profit inside 24 months: our answer." |
| Verdict card | layered, primaryDeep fill, (64,392,1116,208): accent 26pt "OUR VERDICT: FUND PROPOSAL A, REBUILT, WITH THE SMALLER OPERATIONAL IMPROVEMENTS THE CASE ALLOWS." then white 22pt "Free skipping with a floor, a ₹3,600 entry plan and referral paid on the third box. EBITDA breaks even in month 21 on the cash already in the bank, and ready-to-eat opens in year 2 only if cash and LTV to CAC pass a month 12 gate." |
| Team | `TEAM IDEAFORGE` 32pt primary at (64,628); `teamTable3` at (64,680) with widths `[300,640,180]` |
| Precedent strip | two layered cards (64,930,548,86) and (632,930,548,86): `logoSlot` 70x60 "Gousto" + "Gousto: third profitable year in a row, on a new recipe mix"; `logoSlot` "Blue Apron" + "Blue Apron: about $1.9bn at IPO, sold for $103m" |
| Mind map panel | layered, tint fill, (1236,160,620,856), title "FIVE WAYS TO SOLVE A WEEKDAY DINNER". Hub card primaryDeep (1386,222,320,64) "A WEEKDAY DINNER". Vertical spine x 1290 from y 254 to 814, wire from hub to spine. Five route cards (1320, y, 380, 86) at y 306, 412, 518, 624, 730, each joined to the spine by a horizontal wire: COOK FROM SCRATCH / "groceries in minutes" with `logoSlot`s "Blinkit", "Zepto" (64x64 at x 1714 and 1786); ORDER IN / "₹499 to ₹660 an order" with "Swiggy", "Zomato"; TEN-MINUTE FOOD / "₹250 to ₹450 a meal" with "Zepto Cafe", "Blinkit Bistro"; PRIVATE-LABEL KIT / "₹3,500 a box, retail chains" (no logo, the case names none); HARVESTBOX KIT (primary fill, white text) / "₹5,200 a box". Arrow down from the HarvestBox card to an accent card (1320,850,516,140) "PROPOSAL A, REBUILT" / "₹3,600, ₹5,200 and ₹6,600 plans" / "free skipping with a floor" |
| Source | "Source: Verdict 2.0 case | research sections 2, 9, 11 and 17 | Gousto FY2025 results; Blue Apron IPO and sale | model " + V.hash |

### Slide 2, core 1: Diagnosis and evaluation (D1). Ribbon active [0,1]. Counter "1 / 4". Chip "1 DIAGNOSIS AND EVALUATION" (w 520)

**Headline:** "HarvestBox pays ₹7,000 to win a customer, 45% leave by month 3 having returned ₹2,281 of gross profit, and each
proposal as written runs out of cash by month 16"

| Panel (x,y,w,h) | Title | Content (helpers) | Source |
|---|---|---|---|
| A1 (64,318,700,322) | WHERE THE MARGIN WENT, 2022 TO 2025 | `issueTree`: root "EBITDA −12% to −22% of revenue"; branches "Gross margin −7 pts" (alertTint; leaves "Food waste 6% of input", "Kitchens 68% used", fine print: candidate causes §8.1), "Marketing +8 pts" (alertTint; leaves "₹8.31 Cr explained by CAC", "₹4.29 Cr not explained"), "Overheads −5 pts" (goodTint; leaf "The one line that improved") | §3.2 T14, §8 T41, T42 |
| A2 (788,318,520,322) | MARGIN FELL AS MARKETING ROSE | `lineChart` two series over 2022 to 2025: gross margin `V.gm` (primary) and marketing `V.mk` (alert), y 15% to 45%, end labels "Gross margin 31%" "Marketing 30%"; in-chart callout box: "Each new ₹1 of revenue cost 31p, 38p, then 49p of marketing" | §3, T13, T15 |
| A3 (1332,318,524,322) | 100 SIGN-UPS, ONE YEAR LATER | `waffle` 10x10, cell 18, gap 4, groups from `V.wf`: alert 45, orange 21, tint 15, primary 19; `legendV` right: "Gone by month 3: 45", "Gone months 4 to 6: 21", "Gone months 7 to 12: 15", "Still ordering: 19"; under legend `kv` "−₹4,719" "each leaver" and "2.56x" "each stayer"; caption "CAC paid back in month 10, when 23 remain" | §5, §6 T24, T28 |
| B1 (64,654,500,292) | A ANSWERS 63% OF STATED EXITS | `heatmap` rows "Rigid to skip", "Too expensive", "Same menu", "Food waste", "Delivery"; columns "Case" (80), "Review" (104), "Fix" (90); label column 190; Case and Review cells scaled by value on the green scale; Fix column fmt shows `V.fix`, "none" cells alertTint; fine print "Review: share of reason mentions in 2,435 low-star Play Store reviews of six meal-kit apps; association, not cause" | §7.1 T34, §7.2 T38 |
| B2 (588,654,520,292) | AS WRITTEN, A SCORES LOWEST | transposed `heatmap`: rows "Growth (20%)", "Profit (30%)", "Cash (30%)", "Risk (20%)", "Score"; columns "A", "B", "C", "Ours"; values from `V.score`, Score row accent fill on "Ours"; fine print "Ours: Proposal A, rebuilt. 1 low, 5 high" | §16.2 T89 (repaired) |
| B3 (1132,654,300,292) | WHAT LEAVERS SAY | `quoteCard` with `V.quote` text and meta; `logoSlot` "HelloFresh" 64x48 top-right inside the card | §7, research line 724 |
| B4 (1456,654,400,292) | EVERY PATH AS WRITTEN HITS ZERO | `lineChart` of `V.cashq` drift, A, B, C over M0 to M24, zero line dashed, dots where each crosses zero; `legendV` two rows below: "No decision M18, A M16" / "B M16, C M15" | §13 to §16, model |
| So-what | | lead "The leak is retention, not demand. " + "A as written fixes the right problem too weakly to score above 2.80, while B and C buy growth on a base that still loses 45% of sign-ups in three months." | |

Forms: issue tree, line chart, callout, waffle, legend, number pair, heat table, scorecard heat grid, quote card, logo,
multi-line cash chart, so-what = 12. **Source:** "Source: Verdict 2.0 case sections 1 to 5 | research sections 3 to 8 and
13 to 16 | 8,052 Play Store reviews of six meal-kit apps, Jan 2024 to Sep 2026 | model " + V.hash

### Slide 3, core 2: Strategic recommendation (D2). Ribbon active [2]. Counter "2 / 4". Chip "2 STRATEGIC RECOMMENDATION" (w 560)

**Headline:** "Fund Proposal A, rebuilt: free skipping with a floor, a ₹3,600 entry plan and referral paid on the third box lift
LTV to CAC from 1.55x to 2.70x on the same ₹1.8 Cr"

Band A y 318 to 676; band B y 690 to 948; so-what y 960 h 70.

| Panel | Title | Content | Source |
|---|---|---|---|
| A1 (64,318,520,358) layered alertTint | DO NOT FUND THESE FIRST | `badgeList` (alert badges), 3 items: "A as written: free skipping from day one makes year 1 ₹0.29 Cr worse than doing nothing"; "B: ₹8 Cr across 800 stores is ₹8,333 a store a month, beside a ₹3,500 private-label kit"; "C first: ₹5 Cr is a third of the cash, spent on a base that loses 45% of sign-ups by month 3" | §13, §14, §15 |
| A2 (608,318,600,358) | PROPOSAL A, AS WRITTEN AND REBUILT | `addTable` widths `[150,190,260]`, rowH 54, header 32, rows: Skip or pause / "No penalty, no limit" / "Free, but 2 boxes in any 3 months"; Plan sizes / "Two more sizes" / "₹3,600 entry and ₹6,600 family"; Recipe swaps / "Any recipe" / "Within one ingredient family"; Bigger menu / "More recipes" / "40 recipes from 120 ingredients"; Referral / "Paid at sign-up" / "₹1,000 each side on the 3rd box" | §2 T9, §17 |
| A3 (1232,318,624,358) | THE PLANS A CUSTOMER SEES | three `planCard`s (184x150) from `V.plans`, middle card tint fill; dashed line under the cards labelled "Private label: ₹3,500 a box"; `skipStrip` of six months: BOX, SKIP, BOX (red, refused), BOX, SKIP, BOX with month labels; caption "Month 3: a second skip within three months is refused and the box ships" | §10.3, §17.1, §17.3 |
| B1 (64,690,640,258) | WHAT THE REBUILT FUNNEL CHANGES | `funnel` five stages from `V.aarrr` (stage names inside, change text right) | §18.1 T102, A10, A11, A14 |
| B2 (728,690,520,258) | LTV TO CAC, ONE LEVER AT A TIME | `vBars` from `V.ladder` (Today alert, three steps primary, Target surface), dashed line at 3.0 labelled "3.0x case benchmark" | §6 T30, T117 |
| B3 (1272,690,584,258) | AGAINST C WITH THE SAME IMPROVEMENTS | `addTable` widths `[250,150,150]`: Measure / Ours / C; "24-month EBITDA" −7.55 / −7.09; "Cash at month 24" 5.65 / 2.92; "Run-rate EBITDA" −1.69 / −3.19; `RT` below: **"C earns ₹0.46 Cr more over 24 months"** and ends with ₹2.73 Cr less cash and a ₹1.50 Cr worse run-rate | §16.4 T92 |
| So-what | | lead "Conclusively, sequence beats selection: " + "A rebuilt is funded now on ₹1.8 Cr, and ready-to-eat opens at ₹4 Cr in month 13 only if cash is at least ₹7 Cr and LTV to CAC at least 2.2x." | §2.4, §24.2 |

Forms: do-not card with badges, comparison table, plan cards, price marker, month strip, funnel, bar ladder with
benchmark, counter-view table, rich text, so-what = 10. **Source:** "Source: Verdict 2.0 case, proposals A to C |
research sections 2, 10, 13 to 18 | assumptions A08 to A14 | model " + V.hash

### Slide 4, core 3: Financial and risk case (D3). Ribbon active [3,4]. Counter "3 / 4". Chip "3 FINANCIAL AND RISK CASE" (w 520)

**Headline:** "The loss falls from ₹9.2 Cr to ₹0.8 Cr in year 2 and EBITDA breaks even in month 21 with cash never below
₹2.9 Cr; retention, skips and referral each sit within two points of break-even"

| Panel | Title | Content | Source |
|---|---|---|---|
| A1 (64,318,1180,322) | EBITDA BRIDGE: 2025 TO THE MONTH 24 RUN-RATE (₹ CR A YEAR) | Toing `waterfall` with **10 bars** (the three Proposal A acquisition sub-steps are summed into one bar "Cheaper CAC"; their split is shown in A2): labels "2025", "Costs up", "Brand cut", "Prune paid", "Overheads", "Margin", "Retention", "Cheaper CAC", "Ready to eat", "Month 24"; totals primaryDeep, positives good, negatives alert; min −12, max 1.5 | §19.3 T114 |
| A2 (1268,318,588,322) layered primaryDeep | BREAK-EVEN, BASE CASE | accent 24pt title; numeral `V.be` Poppins ExtraBold 64 white, node named `MONEYSHOT`; `kv` rows "₹2.9 Cr" "lowest cash, month 20" and "₹0" "new funding needed"; then 22pt accent "The ₹3.77 Cr acquisition step, split:" and a `stackH` of `V.split` (referral, win-back, conversion) with values; fine print "Referral rests on one outside study (A10); conversion on none (A14)" | §19, §18, model |
| B1 (64,654,640,292) | THREE SCENARIOS, ONE SET OF LEVERS | `addTable` widths `[190,90,90,90,90,90]`, rowH 28, header 32, `V.scen`, header "Measure","2025","Y1","Y2","Bear","Bull"; fine print "₹ Cr or %. Y1, Y2: base. Bear (contingency pulled), Bull: year 2" | §20.1 T121 |
| B2 (728,654,500,292) | CASH BY SCENARIO, ₹ CR | `lineChart` quarterly `V.cashq` base, core, bear, bear_cont, bull; dashed line at ₹7 Cr labelled "Month 12 gate"; marker at M20 "Low ₹2.9 Cr"; `legendV` or end labels; bear (no response) dashed alert, labelled "Bear, no response: zero M20" | §19, §20 T124 (repaired) |
| B3 (1252,654,604,292) | ONE RISK IS POSSIBLE AND SEVERE: SKIPS | left: `heatmap` 5x5 (label column 40, cells 52, rows impact 5 to 1, columns probability 1 to 5), fmt shows risk numbers from `V.risk`, levels by p x i (≥15 → 4, ≥10 → 3, ≥6 → 2, ≥3 → 1, else 0), red scale; right: `badgeList` labels 4, 1, 5, 10: "Skips over 6% for 2 months: tighten the floor", "Referral under 15% at M6: raise the reward", "Margin under 32% at M9: packaging first", "Cash under ₹7 Cr at M12: pull the contingency" | §21.1, §21.2 (repaired) |
| So-what | | lead "A break-even plan, not a profit plan: " + "every single downside turns the month 24 run-rate negative, so the month 7 contingency and the stop triggers are binding, not advisory." | §19.6, §20 |

Forms: waterfall, moneyshot numeral, kv pair, stacked split bar, scenario table, multi-line cash chart with gate line,
5x5 heat map, badge mitigation list, so-what = 9+. **Source:** "Source: Verdict 2.0 case (2025 revenue, margins, cash) |
research sections 18 to 21 | assumptions A08 to A25 | model " + V.hash + ", 12 scenarios"

### Slide 5, core 4: 90-day plan and KPIs (D4). Ribbon active [5]. Counter "4 / 4". Chip "4 90-DAY PLAN AND KPIs" (w 460)

**Headline:** "Ninety days put Proposal A, rebuilt live in five cities on ₹1.8 Cr, and seven KPIs with stop triggers tell the
Board by month 6 whether to hold, push or pull back"

| Panel | Title | Content | Source |
|---|---|---|---|
| A1 (64,318,1120,322) | WEEK BY WEEK, FIRST 90 DAYS | Toing `gantt` labelW 260, colW 62, months "W1" … "W13", eight rows from `V.gantt`, rowH 28, headH 32, diamonds at W4, W8, W12 | §22.1 T134 |
| A2 (1208,318,648,322) | WHERE THE ₹1.8 CR GOES | `donut` r 96 at left (inner 0.56) with centre text "₹1.8 Cr"; `legendV` right with six `V.budget` lines "35% Product build ₹0.63 Cr" style; under it `stackH` of `V.uses` (₹15 Cr over 24 months) with a one-line legend | §22 T140, §19 T115 |
| B1 (64,654,1000,292) | SEVEN KPIs THE BOARD READS MONTHLY | `addTable` widths `[280,100,120,100,100,268]`, rowH 28, header 32: "KPI","Today","Day 90","M12","M24","Stop trigger" from `V.kpi`; stop-trigger column text alert | §23 T141 (repaired) |
| B2 (1088,654,768,292) | THE MONTH 12 GATE | two `gauge`s: "Cash ₹7.67 Cr against ₹7 Cr" (max 12) and "LTV to CAC 2.74x against 2.2x" (max 3.5), each with gate text; decision tree right: box "Both pass" arrow to accent box "Ready-to-eat: ₹4 Cr, two cities, sales from M14"; box "Either fails" arrow to surface box "Stay on the core plan: ₹5.6 Cr cash at M24" | §24.2 T148 |
| So-what | | lead "Therefore: " + "approve ₹1.8 Cr today, read seven KPIs monthly, and decide ready-to-eat at month 12 on two numbers, ₹7 Cr of cash and LTV to CAC of 2.2x." | |

Forms: Gantt with diamonds, donut, legend, stacked uses bar, KPI table, two gauges, decision tree with arrows, so-what = 8+.
**Source:** "Source: research sections 19 and 22 to 24 | KPI definitions in research table T141 | model " + V.hash

### Slide 6, Appendix 1: market and precedents. Ribbon RIBX active [0]. Counter "A1". Chip "APPENDIX 1: MARKET AND PRECEDENTS" (w 620)

**Headline:** "A weekday dinner has five routes and HarvestBox is the dearest per box; no Indian meal kit has reached ₹42 Cr, and
Gousto shows a subscription can turn profitable"

| Panel | Title | Content | Source |
|---|---|---|---|
| A1 (64,318,560,322) | FIVE FORCES: SUBSTITUTES SET THE CEILING | `hBars` five rows from `V.forces` (value 1 to 5, text "High and rising" etc.), substitutes alert; fine print "Ratings are team judgement from research section 10.1" | §10.1 T52 |
| A2 (648,318,600,322) | WHERE EACH ROUTE SITS | `matrix2x2`, x "More cooking effort", y "Higher price per meal", points: ten-minute food, order in, private label, HarvestBox (primary, larger), cook from scratch; quadrant labels kept short; fine print "Positions are qualitative; prices in research section 9.2" | §9.2 T46, §10.2 T54 |
| A3 (1272,318,584,322) | DARK STORES, MID-2026 | `hBars` from `V.dark` with a `logoSlot` 48x40 left of each bar label row (Blinkit, Zepto, Flipkart Minutes, Instamart, BigBasket) | §9 T48 |
| B1 (64,654,560,292) | FOUR REPORTS, FOUR MARKET SIZES | `addTable` widths `[200,170,160]` "Report","Size","Growth" from `V.reports`; `RT` "No single India market size is used in this deck" | §9 T47 |
| B2 (648,654,600,292) | NO INDIAN MEAL KIT HAS SCALED | `hBars` of `V.india` revenue (₹ Cr), HarvestBox primary, others surface; caption "Chef's Basket, the largest pure meal kit, never crossed ₹10 Cr" | §12 T65, T66 |
| B3 (1272,654,584,292) | GLOBAL PRECEDENTS | `addTable` widths `[170,374]` with `logoSlot` 40x40 inside each row's first cell area (Gousto, HelloFresh, Marley Spoon, Blue Apron) and one-line facts from `V.glob` | §11 T63 |
| So-what | | lead "Substitution, not rivalry, sets the price ceiling: " + "ten-minute food at ₹250 to ₹450 a meal and a ₹3,500 private-label kit cap what a ₹5,200 box can charge, which is why the rebuilt plan adds a ₹3,600 entry tier." | |

**Source:** "Source: research sections 9 to 12 | IMARC, Ken Research, Technavio, GlobalData | company filings and press as listed in research Appendix A"

### Slide 7, Appendix 2: model, checks and short forms. Ribbon RIBX active [1]. Counter "A2". Chip "APPENDIX 2: MODEL, CHECKS AND SHORT FORMS" (w 760)

**Headline:** "Every number traces to the case, one of 25 stated assumptions or the model; 14 of 14 model checks pass and three
case figures that do not reconcile are left out"

Band A 318 to 676; band B 690 to 948; so-what y 960 h 70.

| Panel | Title | Content | Source |
|---|---|---|---|
| A1 (64,318,900,358) | NINE ASSUMPTIONS THAT MOVE THE ANSWER | `addTable` widths `[90,470,308]` "ID","Assumption","Value", rowH 28, `V.assum` | §25 T154 |
| A2 (988,318,868,358) | SHORT FORMS USED ON THESE SLIDES | two side-by-side `addTable`s, each widths `[120,282]`, rowH 28, seven rows each: CAC, LTV, LTV to CAC, EBITDA, Cr, lakh, KPI, M3/M12/M24, Y1/Y2, W1 to W13, pts, p (paise), x (times), Run-rate (months 22 to 24 ×4); meanings ≤ 22 characters | glossary, Appendix D |
| B1 (64,690,640,258) | THREE CASE FIGURES DO NOT RECONCILE | `addTable` widths `[180,190,170,92]` from `V.check` "Figure","Case says","Implies","Used" | §4 T19 to T21 |
| B2 (728,690,620,258) | WHAT MOVES THE RUN-RATE, ₹ CR | Toing `tornado` labelW 200, rowH 28, barH 18, `V.torn`, base label "Base +0.10" | §20.3 T125 |
| B3 (1372,690,484,258) | WHERE EACH INPUT TURNS NEGATIVE | `addTable` widths `[220,100,132]` "Input","Base","Flips at" from `V.beIn` | §20.5 T127 |
| So-what | | lead "Nothing here is primary research: " + "no customer interview or pilot has been run, and research Appendix E sets out the validation plan as a plan." | Appendix E |

**Source:** "Source: research sections 4, 20 and 25, Appendices A to F | model harvestbox_model.py, hash " + V.hash + ", 14 of 14 checks"

### Slide 8, thank you (centred; no ribbon)

`THANK YOU` Poppins ExtraBold 112 centred at y 150; verdict line accent on primaryDeep layered card (360,330,1200,120)
"Fund Proposal A, rebuilt, with the operational improvements: break-even in month 21 on the ₹15 Cr in the bank";
`TEAM IDEAFORGE` 32pt centred at y 500; `teamTable3` centred at x 400, y 556; four organiser logo slots in a row at
y 860 (each 120x80, centred); source line "Team IdeaForge | Verdict 2.0, Motilal Nehru College".

---

## 10. Figma build (orchestrator)

1. **Tools:** `ToolSearch` with `select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets`. Invoke the `figma-use` skill (or read MCP resource `skill://figma/figma-use/SKILL.md`). Pass `skillNames: "resource:figma-use"` on every `use_figma` call. `get_metadata` does not work on Slides files.
2. **Account:** `whoami`. Choose the plan key per section 1. If the Figma server is not authorised for this account, stop and tell the user.
3. **Create:** `create_new_file`, `editorType: "slides"`, name `HarvestBox v3 | Team IdeaForge | Verdict 2.0`. Write the key and URL to `deck3/figma.md`.
4. **Setup:** run `../deck/setup.js` content via `use_figma` (it creates and names 8 slides and checks fonts). Write `deck3/slide-ids.json` as `{"S1": id, …, "S8": id}`. Delete any extra empty slide by id.
5. **Calibrate the mock** (fixes the v2 text-width surprise before any slide is drawn): run `lib/probe.js` with `__HOST__` replaced by the S8 id; save the returned JSON to `deck3/probe.json`; run `python -X utf8 deck3/calibrate.py`, which writes `deck3/mock_k.txt`. Then `python -X utf8 deck3/gen3.py mock`; any slide that now fails goes back to its SA-S agent via SendMessage with the mock output.
6. `python -X utf8 deck3/gen3.py bind`.
7. **Build order 2, 3, 4, 5, 6, 7, 1, 8.** For each slide: `use_figma` with the full text of `build/slide_0N.js` (expect `warnings: []`); `use_figma` with `build/v1_0N.js` (expect `clean: true`); `get_screenshot` at `maxDimension 1600`, save with curl to `deck3/shots/sN.png`, Read it, and tick the slide's form list from section 9. **Checkpoint after slide 2:** compare its screenshot with the Dream11 and Toing patterns in section 3 (density, so-what bar, full words, in-chart callouts) and fix the system, not just the slide, before building slide 3.
8. **Sweeps:** `build/sweeps.js`, then `build/v1_all.js`. Required: `radiusFixed` 0, `fontLow`, `dash`, `punct`, `banned`, `absentHit`, `mustMissing` all empty; every core slide node count 230 to 420.
9. **Logos** (section 11).
10. **Critic** (SA-K, prompt 13.5), then fixes under section 12, then re-run step 8 and re-screenshot changed slides.
11. **Headline-only read:** print the four core headlines in order; they must read as one argument (diagnosis, choice, money and risk, plan), each with a number. Log it.

---

## 11. Logos

Every slot is a dashed frame named `LOGO: <brand>` with a 14pt caption. For each real brand (Blinkit, Zepto, Swiggy,
Zomato, Zepto Cafe, Blinkit Bistro, Gousto, Blue Apron, HelloFresh, Marley Spoon, Flipkart Minutes, Instamart,
BigBasket): search Wikimedia Commons
(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<brand>%20logo`),
download into `deck3/logos/<slug>.png` with
`curl -sL -o "deck3/logos/<slug>.png" "https://commons.wikimedia.org/wiki/Special:FilePath/<File name>?width=600"`,
Read the image to confirm the brand, `upload_assets` with `count: 1` and the slot's `nodeId` (FIT if offered), POST the
bytes, then remove that slot's caption and dash pattern by a small `use_figma` script. Never resize a slot after upload.
Unconfirmed logos stay as placeholders. HarvestBox is fictional and gets no logo. The four organiser marks stay
placeholders for the user. Log every slot in `deck3/figma.md` as uploaded or placeholder with the reason.

---

## 12. Fix ladders (the only edits allowed once building)

| Issue | Fix, in order |
|---|---|
| `wordBreak`, `cellWrap`, `textOut`, waterfall label tall | 1) widen the column by taking width from the widest neighbouring column in the same table; 2) transpose the table or drop to fewer columns; 3) a shorter **full word** with the same meaning ("Overheads" to "Overhead", "Costs up" for "Headwinds"); 4) two-line label with a taller row if the band allows. Never a fragment ("Grw"), never below 22pt, never drop a number |
| `childOut` | reduce rowH by up to 4px (never below 28 for 22pt Inter, 34 for 22pt Poppins headers), or reduce the number of rows shown, or enlarge the panel inside its band |
| `headline3lines` | remove the two weakest words, keep every number |
| `source2lines` | drop the least important source group |
| `overlap`, `belowContent` | move the later panel by the overlap plus 8px inside its band; otherwise shrink its width |
| Label collides with a line in a screenshot | nudge the label up to 24px |
| Node 240px off | a line set `x`/`y` before `appendChild`; fix the helper call |
| `Cannot use unloaded font` | a fragment was run; always run the full bound file |
| Dead space over 150 x 150 | enlarge the nearest chart into it; do not add decoration |
| Copy change | edit `deck3/slide-copy.md` and the slide file together and re-run `gen3.py mock` and `bind` |

Known false positives: punch-holes over ribbon tags; `BACK:` rectangles under their cards.

---

## 13. Sub-agent prompts (copy verbatim; fill angle-bracket fields)

### 13.1 SA-R, research repair
> You are a research editor for a case-competition report. Working directory:
> `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\verdict-mnc`. First invoke the Skill tool with
> `case-competition-deck` and read its `references/rhetoric.md` section on pre-empting weaknesses; the repairs below are
> that tactic applied honestly. Then read the plan at `C:\Users\harsh\.claude\plans\working-folder-verdict-mnc-binary-pizza.md`
> sections 2.2 and 5 (R-text table). Apply repairs R1 to R10 and R11's text, plus the R12 scan, to
> `research/parts/*.md` only. Use the model values recorded in `deck3/build-log.md` (bridge split) and
> `model/model_outputs.json`. Locate each passage by grep, read the surrounding paragraph, and edit so the result reads as
> natural English in the document's voice. Rules: no em dashes or en dashes, no exclamation marks, no rhetorical
> questions, no hooks, no new names or labels for anything (use only the case's words: Proposal A, Proposal A rebuilt,
> operational improvements), keep every citation tag format (backticked `[C id]`, `[A##]`, `[M]`, `[T#]`, `[S##]`), change
> no number except those the repair table specifies. Reply with a table: repair id, file, what changed, in under 400 words.

### 13.2 SA-C, content engineer
> You are the content engineer for an 8-slide consulting-grade case-competition deck. Working directory:
> `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\verdict-mnc`. Step 1: invoke the Skill tool with
> `case-competition-deck` (generate mode). Read `references/structure.md` (including the compression guidance for short
> decks), `references/archetypes.md`, `references/rhetoric.md`, `references/frameworks.md`, `case_types/strategy.md`,
> `case_types/marketing.md`. Step 2: read `../CLAUDE.md` and `../deck-system/slide-archetypes.md` for the visual rules.
> Step 3: read the plan `C:\Users\harsh\.claude\plans\working-folder-verdict-mnc-binary-pizza.md` sections 0, 2, 3, 8 and 9,
> then `deck3/values.json`, then the research sections each slide cites in `research/harvestbox-research.md`. Step 4:
> write `deck3/slide-copy.md` (every final string per slide and panel) and `deck3/derivation.md` (one row per text or
> number: panel, string, research section, tag, values key, matches yes/no). Keep the plan's strings unless one breaks a
> rule or disagrees with the research; list every change in a "changes from plan" table with the reason. Confirm the
> archetype mapping in plan section 6 and that each core headline is a full-sentence finding with a number. Rules: no em or
> en dashes, no question marks, no exclamation marks, no hooks or AI-slop phrasing, no invented names or labels, no
> fabricated primary research, no HarvestBox customer quotes, no city names, no single India market size, no profit
> claim. Labels are full words. Reply in under 500 words: the change table, the archetype mapping, and any number that did
> not match.

### 13.3 SA-L, library and pipeline
> You build the deck pipeline. Working directory:
> `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\verdict-mnc`. Read `../CLAUDE.md` (section 7
> failure modes), `../nsbc-case/deck/preamble.js` (the base library; do not edit it), `deck/mock_figma.js`, and the plan
> `C:\Users\harsh\.claude\plans\working-folder-verdict-mnc-binary-pizza.md` sections 7, 8 and 14. Create `deck3/` exactly as
> section 7 lists: write `lib/palette.js`, `lib/extras3.js`, `lib/v1.js`, `lib/sweeps.js`, `lib/probe.js`, `gen3.py` and
> `calibrate.py` from section 14 verbatim; copy `deck/mock_figma.js` to `deck3/mock_figma.js` and apply the three patches
> in section 14.5; write `make_values.py` from the key table in section 8 (assert every check value; read research tables
> where the table says so, quoting their row text exactly in a comment). Run `python -X utf8 deck3/make_values.py`, then
> `python -X utf8 deck3/gen3.py pre`, then write `slides/s99_test.js` exercising every new helper on slide "S9" and run
> `node deck3/mock_figma.js deck3/build/preamble.js <values js> deck3/slides/s99_test.js` until it prints `warnings: []`
> and `ISSUES 0`. Never set x or y before appendChild. Reply in under 300 words with file sizes, the values checks that
> passed, and the mock output.

### 13.4 SA-S1 and SA-S2, slide scripts (two agents in parallel; SLIDES = "s02 to s05" or "s01, s06, s07, s08")
> You write Figma Slides build scripts for slides SLIDES. Working directory:
> `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\verdict-mnc`. Step 1: invoke the Skill tool with
> `case-competition-deck` in slide mode and read the archetypes your slides use (plan section 6 lists them). Step 2: read
> `../CLAUDE.md`, `../deck-system/slide-archetypes.md`, the plan
> `C:\Users\harsh\.claude\plans\working-folder-verdict-mnc-binary-pizza.md` sections 3, 9 and 12, `deck3/slide-copy.md`,
> `deck3/values.json`, `deck3/build/preamble.js` (the helper library) and, as worked examples of the style, the Toing
> scripts `../nsbc-case/deck/slides/s05.js` and `s08.js`. Step 3: for each slide write `deck3/slides/sNN.js` as one block
> `{ const s = await figma.getNodeByIdAsync("SN"); … results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }`.
> Core slides start with `skeleton3(...)`; cover and thank-you start with `wipe(s)`. Use the panel boxes in plan section 9
> exactly; every string comes from slide-copy.md; every number from `V.<key>`. Draw the so-what bar with `soWhat(s, y, h, parts)`.
> Name the moneyshot numeral node `MONEYSHOT` (slide 4 only). Step 4: run `python -X utf8 deck3/gen3.py mock` and fix
> your slides with the plan's section 12 ladder until each prints OK. Labels are full words; never shorten a word into a
> fragment; never go below 22pt except the 14pt source and 16pt FINEPRINT. Reply in under 300 words: per slide, node
> count, form count, and the mock result.

### 13.5 SA-K, critic
> You are a deck critic. Invoke the Skill tool with `case-competition-deck` in critique mode and read
> `references/critique_rubric.md` and `references/rhetoric.md`. Working directory:
> `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\verdict-mnc`. Read the plan sections 0, 2.3, 3 and 9,
> `deck3/derivation.md`, and view the eight images in `deck3/shots/`. Re-base the rubric for an 8-slide deck: the four
> case deliverables on four core slides replace the 8-section test; two appendix slides replace the appendix-depth test.
> Check also: no invented name or coined label anywhere; every short form is expanded on its slide or in Appendix 2;
> every core slide has 8 or more distinct visual forms, a so-what bar and full-word labels; nothing from plan section 2.3
> appears. Lead with the two strongest things. Give at most five issues, each with slide, current state, specific fix,
> and why it matters to a judge. Do not propose changing a number, the recommendation or the slide count. No dashes.
> Write `deck3/critique.md` and reply with its contents.

---

## 14. Embedded files (SA-L writes these verbatim)

### 14.1 `deck3/lib/palette.js`
```js
const C = {
  primary:{r:0.106,g:0.498,b:0.231}, orange:{r:0.941,g:0.541,b:0.141}, primaryDeep:{r:0.055,g:0.302,b:0.145},
  accent:{r:1.000,g:0.780,b:0.173}, alert:{r:0.878,g:0.227,b:0.118}, alertTint:{r:0.988,g:0.894,b:0.871},
  rival:{r:0.114,g:0.306,b:0.537}, rivalTint:{r:0.863,g:0.902,b:0.969},
  good:{r:0.180,g:0.620,b:0.310}, goodTint:{r:0.847,g:0.941,b:0.875},
  tint:{r:0.835,g:0.937,b:0.863}, ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
```

### 14.2 `deck3/gen3.py`
```python
# ===== HARVESTBOX DECK V3 GEN =====
import io, os, re, json, sys, subprocess, pathlib
D = pathlib.Path(__file__).resolve().parent
BASE = D.parent.parent / "nsbc-case" / "deck" / "preamble.js"
N = 8
TEAM = [["Harsh Kawatra", "Delhi Technological University (DTU)", "Team Leader"],
        ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University (GGSIPU)", "Member"],
        ["Dayita Arora", "Ramjas College, University of Delhi (DU)", "Member"]]
NEED = ["skeleton3", "funnel", "matrix2x2", "issueTree", "waffle", "legendV", "planCard", "skipStrip", "kv", "teamTable3", "fine", "wipe",
        "heatmap", "gantt", "waterfall", "donut", "tornado", "gauge", "soWhat", "quoteCard", "numCard", "lineChart", "vBars", "hBars",
        "stackH", "addTable", "RT", "logoSlot", "addArrow", "addLine", "addPoly", "badgeList", "buildRibbon", "layered", "panel"]
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def wr(p, s): p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(s)
def pre():
    b = rd(BASE)
    a = b.index("const C = {"); z = b.index("};", a) + 2
    b = b[:a] + rd(D / "lib" / "palette.js").strip() + b[z:]
    a = b.index("const TEAM="); z = b.index("\n", a)
    b = b[:a] + "const TEAM=" + json.dumps(TEAM, ensure_ascii=False) + ";" + b[z:]
    assert "// ===== END PREAMBLE =====" in b
    b = b.replace("// ===== END PREAMBLE =====", rd(D / "lib" / "extras3.js").strip() + "\n// ===== END PREAMBLE =====")
    for f in NEED: assert len(re.findall(r"function " + f + r"\(", b)) == 1, f
    wr(D / "build" / "preamble.js", b); print("preamble", len(b))
def mini(js): return "\n".join(l.strip() for l in js.split("\n") if l.strip() and not l.strip().startswith("//"))
def vals_for(slide_js):
    V = json.loads(rd(D / "values.json")); keys = sorted(set(re.findall(r"\bV\.(\w+)", slide_js)))
    miss = [k for k in keys if k not in V]; assert not miss, miss
    return "const V = " + json.dumps({k: V[k] for k in keys}, ensure_ascii=False) + ";"
def mock():
    k = rd(D / "mock_k.txt").strip() if (D / "mock_k.txt").exists() else "1.06"; ok = True
    for i in range(1, N + 1):
        p = D / "slides" / ("s%02d.js" % i)
        if not p.exists(): print("s%02d MISSING" % i); ok = False; continue
        sj = rd(p); wr(D / "build" / "_v.js", vals_for(sj))
        r = subprocess.run(["node", str(D / "mock_figma.js"), str(D / "build" / "preamble.js"), str(D / "build" / "_v.js"), str(p)],
                           capture_output=True, text=True, encoding="utf-8", env=dict(os.environ, MOCK_K=k))
        good = "warnings: []" in r.stdout and "ISSUES 0" in r.stdout; ok = ok and good
        print("s%02d" % i, "OK" if good else "FAIL", "|", " | ".join(l.strip() for l in (r.stdout + r.stderr).strip().split("\n")[:16]))
    print("ALL OK" if ok else "SOME FAIL")
def bind():
    ids = json.loads(rd(D / "slide-ids.json")); pj = mini(rd(D / "build" / "preamble.js")); allids = [ids["S%d" % i] for i in range(1, N + 1)]
    for i in range(1, N + 1):
        sj = rd(D / "slides" / ("s%02d.js" % i)); sid = ids["S%d" % i]
        assert sj.count('"S%d"' % i) == 1, ("slide id literal", i)
        out = pj + "\n" + vals_for(sj) + "\nconst results=[];\n" + sj.replace('"S%d"' % i, '"%s"' % sid) + "\nreturn {results,warnings};"
        assert len(out) < 49500, ("too long", i, len(out))
        wr(D / "build" / ("slide_%02d.js" % i), out)
        wr(D / "build" / ("v1_%02d.js" % i), rd(D / "lib" / "v1.js").replace("__IDS__", json.dumps([sid])))
        print("slide_%02d.js" % i, len(out))
    wr(D / "build" / "v1_all.js", rd(D / "lib" / "v1.js").replace("__IDS__", json.dumps(allids)))
    wr(D / "build" / "sweeps.js", rd(D / "lib" / "sweeps.js").replace("__IDS__", json.dumps(allids)))
    wr(D / "build" / "probe.js", rd(D / "lib" / "probe.js").replace("__HOST__", ids["S8"]))
if __name__ == "__main__": {"pre": pre, "mock": mock, "bind": bind}[sys.argv[1]]()
```
Note: `probe.js` needs only `slide-ids.json`; if run before slide scripts exist, call `pre` then build `probe.js` by hand
with the same replacement.

### 14.3 `deck3/lib/extras3.js`
```js
// ===== HARVESTBOX V3 EXTRAS =====
const RIBC=["DIAGNOSIS","OPTIONS","RECOMMENDATION","FINANCIALS","RISK","90 DAYS AND KPIs"];
const RIBX=["APPENDIX 1: MARKET AND PRECEDENTS","APPENDIX 2: MODEL, CHECKS AND SHORT FORMS"];
function wipe(s){ s.children.slice().forEach(c=>c.remove()); s.fills=[{type:"SOLID",color:C.white}]; }
function measureW(parent,family,style,size,chars){ const t=figma.createText(); parent.appendChild(t);
  t.fontName={family,style}; t.fontSize=size; t.characters=chars; const w=t.width; t.remove(); return w; }
function skeleton3(s,active,counter,chip,chipW,title,source,labels){ wipe(s); labels=labels||RIBC;
  const n=labels.length, tw=labels.map(l=>measureW(s,"Poppins","Bold",24,l)), sum=tw.reduce((a,b)=>a+b,0), room=1720-26-64;
  let pad=64; while(sum+pad*n+26*(n-1)>room && pad>36) pad-=4;
  if(sum+pad*n+26*(n-1)>room) warnings.push("ribbon too wide");
  const endX=buildRibbon(s,active,labels,tw.map(w=>Math.ceil(w+pad)),64,40,60);
  if(endX<1710) addWireH(s,endX-10,1720,70,C.ink,2.5);
  addChip(s,1720,40,136,60,counter,C.primaryDeep,C.white,24);
  sectionChip(s,chip,chipW,64,118);
  const t=addText(s,"Poppins","Bold",40,C.ink,title,64,188,1792,100,"LEFT",undefined,true); t.name="HEADLINE";
  while(t.height>112&&t.fontSize>34) t.fontSize=t.fontSize-1;
  if(t.height>112) warnings.push("headline 3 lines: "+counter);
  const src=addText(s,"Inter","Semi Bold",14,C.primary,source,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+counter);
  return t; }
function fine(p,x,y,w,text){ const t=addText(p,"Inter","Semi Bold",16,C.ink,text,x,y,w,20,"LEFT",undefined,true); t.name="FINEPRINT"; return t; }
function kv(p,x,y,num,label,o){ o=o||{}; TL(p,x,y,o.size||36,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:o.numW||180,min:26});
  return T(p,x+(o.numW||180)+12,y+(o.dy||8),o.w||260,22,label,{family:"Inter",style:"Bold",color:o.textColor||C.ink}); }
// Funnel: stages [{value, label, color, textColor}] drawn as stacked trapezoids, labels to the right
function funnel(p,x,y,w,h,stages,o){ o=o||{}; const n=stages.length, gap=o.gap||5, fw=o.fw||Math.round(w*0.48), minF=o.minF||0.4;
  const sh=(h-gap*(n-1))/n, cx=x+fw/2;
  stages.forEach((s,i)=>{ const yt=y+i*(sh+gap), wt=fw*(1-(1-minF)*i/n), wb=fw*(1-(1-minF)*(i+1)/n);
    addPoly(p,[[cx-wt/2,yt],[cx+wt/2,yt],[cx+wb/2,yt+sh],[cx-wb/2,yt+sh]],s.color||C.primary,C.ink,2);
    const v=TL(p,0,0,22,s.value,{family:"Poppins",style:"Bold",color:s.textColor||C.white,maxW:wb-12}); v.x=cx-v.width/2; v.y=yt+(sh-v.height)/2;
    const t=T(p,x+fw+16,yt,w-fw-16,22,s.label,{family:"Inter",style:"Bold"}); t.y=yt+Math.max(0,(sh-t.height)/2); }); }
// 2x2 matrix: o {xLabel, yLabel, q:[tl,tr,bl,br], tint:[quadrant indices], pts:[{x,y,r,label,color,left}]} with x,y in 0..1
function matrix2x2(p,x,y,w,h,o){ const L=x, R=x+w, Tp=y+32, B=y+h-34, mx=(L+R)/2, my=(Tp+B)/2;
  TL(p,L,y,22,o.yLabel,{family:"Inter",style:"Bold",maxW:w});
  (o.tint||[]).forEach(q=>addRect(p,q%2?mx:L,q<2?Tp:my,(R-L)/2,(B-Tp)/2,o.tintColor||C.tint));
  addRect(p,L,Tp,R-L,B-Tp,null,C.ink,2); addWireH(p,L,R,my,C.ink,1.5); addWireV(p,mx,Tp,B,C.ink,1.5);
  (o.q||[]).forEach((lb,q)=>{ if(lb) TL(p,(q%2?mx:L)+8,(q<2?Tp:my)+6,22,lb,{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:(R-L)/2-16}); });
  T(p,L,B+4,w,22,o.xLabel,{family:"Inter",style:"Bold",align:"CENTER"});
  const X=v=>L+(R-L)*v, Y=v=>B-(B-Tp)*v;
  (o.pts||[]).forEach(pt=>{ const r=pt.r||14; addEllipse(p,X(pt.x)-r,Y(pt.y)-r,2*r,2*r,pt.color||C.primary,C.ink,2);
    const t=TL(p,0,0,22,pt.label,{family:"Inter",style:"Bold",color:pt.labelColor||C.ink});
    t.x=pt.left?X(pt.x)-r-6-t.width:X(pt.x)+r+6; t.y=Y(pt.y)-t.height/2; });
  return {X,Y}; }
// Issue tree: root text, branches [{title, fill, color, leaves:[text]}], elbow connectors
function issueTree(p,x,y,w,h,root,branches,o){ o=o||{}; const rw=o.rootW||190, bw=o.branchW||220, g=34, n=branches.length, slot=h/n;
  const lx=x+rw+g+bw+g, lw=x+w-lx, rh=o.rootH||120;
  const r=addFrame(p,x,y+(h-rh)/2,rw,rh,C.primaryDeep,C.ink,2,"NODE root");
  addText(r,"Poppins","Bold",22,C.white,root,10,0,rw-20,rh,"CENTER","CENTER");
  const jx=x+rw+g/2; addWireH(p,x+rw,jx,y+h/2,C.ink,2.5); addWireV(p,jx,y+slot/2,y+h-slot/2,C.ink,2.5);
  branches.forEach((b,i)=>{ const cy=y+slot*i+slot/2, bh=o.branchH||62;
    addWireH(p,jx,x+rw+g,cy,C.ink,2.5);
    const bf=addFrame(p,x+rw+g,cy-bh/2,bw,bh,b.fill||C.tint,C.ink,2,"NODE branch "+(i+1));
    addText(bf,"Poppins","Bold",22,b.color||C.ink,b.title,8,0,bw-16,bh,"CENTER","CENTER");
    const Lv=b.leaves||[], lh=Math.min(o.leafH||44,(slot-6)/Math.max(1,Lv.length)), top=cy-lh*Lv.length/2, kx=x+rw+g+bw+g/2;
    if(Lv.length){ addWireH(p,x+rw+g+bw,kx,cy,C.ink,2); if(Lv.length>1) addWireV(p,kx,top+lh/2,top+lh*(Lv.length-0.5),C.ink,2); }
    Lv.forEach((t,j)=>{ const ly=top+j*lh; addWireH(p,kx,lx,ly+lh/2,C.ink,2);
      const lf=addFrame(p,lx,ly+3,lw,lh-6,C.white,C.ink,1.5,"NODE leaf");
      addText(lf,"Inter","Semi Bold",22,C.ink,t,8,0,lw-16,lh-6,"LEFT","CENTER"); }); }); }
// Waffle: groups [{n, color}] filled row-major into a grid of `cols` columns
function waffle(p,x,y,cols,cell,gap,groups){ let i=0; groups.forEach(g=>{ for(let k=0;k<g.n;k++,i++){ const r=Math.floor(i/cols), c=i%cols;
  addRect(p,x+c*(cell+gap),y+r*(cell+gap),cell,cell,g.color,C.ink,1); } }); }
function legendV(p,x,y,items,o){ o=o||{}; const pitch=o.pitch||34;
  items.forEach((it,i)=>{ addRect(p,x,y+i*pitch+5,20,20,it.color,C.ink,1.5); T(p,x+30,y+i*pitch,o.w||300,22,it.label,{family:"Inter",style:"Bold"}); }); }
function planCard(p,x,y,w,h,price,lines,o){ o=o||{}; const f=layered(p,x,y,w,h,o.fill||C.white,"CARD: plan "+price,o.back);
  const sz=o.size||34; TL(f,12,8,sz,price,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-24,min:26});
  lines.forEach((ln,i)=>TL(f,12,12+sz*1.5+i*30,22,ln,{family:"Inter",style:i===0?"Bold":"Semi Bold",maxW:w-24})); return f; }
// Month strip: cells [{m, t, k}] with k "box" | "skip" | "refused"
function skipStrip(p,x,y,w,cells,o){ o=o||{}; const n=cells.length, g=8, cw=(w-g*(n-1))/n, ch=o.h||44;
  cells.forEach((c,i)=>{ const cx=x+i*(cw+g), fill=c.k==="box"?C.primary:(c.k==="skip"?C.accent:C.alert);
    const f=addFrame(p,cx,y,cw,ch,fill,C.ink,2,"CELL "+c.m);
    addText(f,"Poppins","Bold",22,c.k==="skip"?C.ink:C.white,c.t,4,0,cw-8,ch,"CENTER","CENTER");
    TL(p,0,y+ch+4,22,c.m,{family:"Inter",style:"Bold",centerAt:cx+cw/2}); }); }
function teamTable3(p,x,y,cw){ cw=cw||[300,640,180]; const X=[0,cw[0],cw[0]+cw[1]], rh=56, hh=50, tw=cw[0]+cw[1]+cw[2];
  const t=addFrame(p,x,y,tw,hh+rh*TEAM.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  TEAM.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*TEAM.length,C.ink)); return t; }
// ===== END HARVESTBOX V3 EXTRAS =====
```

### 14.4 `deck3/lib/v1.js`
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=__IDS__; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
for(const id of ids){ const s=await figma.getNodeByIdAsync(id); const top=s.children.filter(c=>KEY.test(c.name));
  for(let i=0;i<top.length;i++)for(let j=i+1;j<top.length;j++){ const a=top[i],b=top[j];
    const ox=Math.min(a.x+a.width,b.x+b.width)-Math.max(a.x,b.x), oy=Math.min(a.y+a.height,b.y+b.height)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.name,b:b.name}); }
  for(const c of s.children){ if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n:c.name});
    if(KEY.test(c.name)&&c.y+c.height>1038) issues.push({s:s.name,t:"belowContent",n:c.name}); }
  for(const c of top){ const cb=c.absoluteBoundingBox; for(const d of c.findAll(n=>n.type==="FRAME"||n.type==="TEXT")){ const db=d.absoluteBoundingBox; if(!db) continue;
    if(db.x+db.width>cb.x+cb.width+1||db.y+db.height>cb.y+cb.height+1||db.x<cb.x-1||db.y<cb.y-1)
      issues.push({s:s.name,t:"childOut",n:(d.name||"").slice(0,30),chars:d.type==="TEXT"?d.characters.slice(0,30):"",in:c.name}); } }
  const hl=s.children.find(c=>c.name==="HEADLINE"); if(hl&&hl.height>113) issues.push({s:s.name,t:"headline3lines"});
  const src=s.children.find(c=>c.name==="SOURCE"); if(src&&src.height>22) issues.push({s:s.name,t:"source2lines"});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({s:s.name,t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({s:s.name,t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,80)};
```

### 14.5 Mock patches to `deck3/mock_figma.js`
1. After the `CW` table add `const K = parseFloat(process.env.MOCK_K || "1.06");` and change `measure` to
   `function measure(s, fam, size) { let w = 0; for (const ch of s) w += cw(ch, fam) * size; return w * K; }`.
2. Inside the `for (const t of texts)` loop, after the `cellWrap` line, add:
```js
      if (t.textAutoResize !== "WIDTH_AND_HEIGHT") { const words = String(t.characters).split(/\s+/).filter(Boolean);
        const mw = words.length ? Math.max(...words.map(wd => measure(wd, t._fam(), t.fontSize))) : 0;
        if (mw > t.width + 1) issues.push(`[${sid}] wordBreak: "${t.characters.slice(0, 40)}" longest word ${Math.round(mw)} > box ${Math.round(t.width)}`); }
```
3. After the overlap loop add:
```js
    for (const c of top) { const cb = c.absoluteBoundingBox; for (const d of c.findAll(n => n.type === "FRAME" || n.type === "TEXT")) { const db = d.absoluteBoundingBox;
      if (db.x + db.width > cb.x + cb.width + 1 || db.y + db.height > cb.y + cb.height + 1 || db.x < cb.x - 1 || db.y < cb.y - 1)
        issues.push(`[${sid}] childOut: ${d.name} in ${c.name}`); } }
```
Mock line heights stay (Poppins 1.5, Inter 1.21). Single-line `TL` texts are `WIDTH_AND_HEIGHT` and are judged by
`maxW`/`fitText` warnings and `childOut`.

### 14.6 `deck3/lib/probe.js`
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const S=["30.0%","32.2%","−₹4,719","₹17,915","₹8,333","2.70x","MONTH 21","Retention","Overheads","Conversion","Referral","Win-back","Ready to eat","Gross margin","Year-end cash","Month-3 retention, new","Too expensive","Rigid to skip","over 6% for 2 months","DIAGNOSIS","RECOMMENDATION","90 DAYS AND KPIs","Growth (20%)","Ours"];
const F=[["Inter","Semi Bold",22],["Inter","Bold",22],["Poppins","Bold",22],["Poppins","Bold",24],["Poppins","ExtraBold",36]];
const host=await figma.getNodeByIdAsync("__HOST__"); const tmp=figma.createFrame(); host.appendChild(tmp); const out=[];
for(const f of F) for(const s of S){ const t=figma.createText(); tmp.appendChild(t); t.fontName={family:f[0],style:f[1]}; t.fontSize=f[2]; t.characters=s; out.push([f[0]+"|"+f[1],f[2],s,Math.round(t.width*10)/10]); }
tmp.remove(); return out;
```

### 14.7 `deck3/calibrate.py`
```python
import json, io, math, pathlib
D = pathlib.Path(__file__).resolve().parent
CW = {"Poppins|Bold": dict(up=0.70, lo=0.58, dg=0.62, sp=0.27, pu=0.30), "Poppins|ExtraBold": dict(up=0.73, lo=0.60, dg=0.64, sp=0.27, pu=0.31),
      "Inter|Semi Bold": dict(up=0.68, lo=0.55, dg=0.60, sp=0.26, pu=0.30), "Inter|Bold": dict(up=0.70, lo=0.57, dg=0.62, sp=0.26, pu=0.31)}
def cw(ch, t):
    if ch == " ": return t["sp"]
    if ch.isdigit(): return t["dg"]
    if ch in "MW@%": return t["up"] * 1.2
    if ch.isupper() or ch == "₹": return t["up"]
    if ch.islower(): return t["lo"]
    return t["pu"]
rows = json.load(io.open(D / "probe.json", encoding="utf-8")); worst = 0
for fam, size, s, real in rows:
    raw = sum(cw(c, CW[fam]) for c in s) * size; r = real / raw; worst = max(worst, r)
    print("%-18s %3d %-26s real %6.1f mock %6.1f ratio %.3f" % (fam, size, s, real, raw, r))
k = math.ceil(worst * 100) / 100 + 0.01
io.open(D / "mock_k.txt", "w").write("%.2f" % k); print("MOCK_K", "%.2f" % k)
```
Note the mock's class order checks `%` as upper before the multiplier in JS (`/[A-Z₹]/` precedes `/[MW@%]/`, so "M" and
"W" never get the 1.2 factor, but "%" does). The calibration ratio absorbs this; do not change the class order.

### 14.8 `deck3/lib/sweeps.js`
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=__IDS__;
const BANNED=["delve","leverage","synergy","seamless","robust","holistic","game-changer","game changer","unlock","empower","cutting-edge","paradigm","revolutioniz","realm","tapestry","landscape","navigate","elevate","journey","testament","pivotal","crucial","furthermore","moreover","in conclusion","worth noting","here's the thing","bottom line","let's","make no mistake","imagine","what if"];
const ABSENT=["Perennial","Flex","Grw","Chg","By M3","pilot 62%","break-even skip rate","13-week read","Project "];
const MUST=["₹4,719","1.55x","2.70x","MONTH 21","₹2.9 Cr","₹1.8 Cr","₹7 Cr","2.2x","12.6%","5.6%","63%","₹3,600","₹5,200","₹6,600","2.80","3.70"];
const out={radiusFixed:0,fontLow:[],dash:[],punct:[],banned:[],absentHit:[],mustMissing:[],nodes:{},moneyshot:0}; const all=[];
for(const id of ids){ const s=await figma.getNodeByIdAsync(id); const nodes=s.findAll(()=>true); out.nodes[s.name]=nodes.length;
  for(const n of nodes){ if(n.name==="MONEYSHOT") out.moneyshot++;
    if(n.type!=="ELLIPSE" && "cornerRadius" in n && typeof n.cornerRadius==="number" && n.cornerRadius!==0){ n.cornerRadius=0; out.radiusFixed++; }
    if(n.type!=="TEXT") continue; let a=n.parent, logo=false; while(a&&a.type!=="SLIDE"){ if((a.name||"").startsWith("LOGO:")) logo=true; a=a.parent; }
    const ch=n.characters; if(logo) continue; all.push(ch);
    if(n.name!=="SOURCE"&&n.name!=="FINEPRINT"&&typeof n.fontSize==="number"&&n.fontSize<22) out.fontLow.push([s.name,ch.slice(0,30),n.fontSize]);
    if(/[\u2013\u2014]/.test(ch)) out.dash.push([s.name,ch.slice(0,40)]);
    if(/[?!]/.test(ch)) out.punct.push([s.name,ch.slice(0,40)]);
    const lc=ch.toLowerCase(); BANNED.forEach(b=>{ if(lc.includes(b)) out.banned.push([s.name,b,ch.slice(0,40)]); });
    ABSENT.forEach(b=>{ if(ch.includes(b)) out.absentHit.push([s.name,b,ch.slice(0,40)]); }); } }
const joined=all.join(" | "); MUST.forEach(m=>{ if(!joined.includes(m)) out.mustMissing.push(m); });
return out;
```
Required: `moneyshot` is 1.

---

## 15. Final checks, report and memory

**Checklist (all must be true before reporting done):**
- [ ] Stage R logged PASS; `ASSEMBLY PASS`; PDF rebuilt; model 14 PASS, hash `06111c6c33`; acceptance greps in R-close all 0.
- [ ] `deck3/slide-copy.md` and `deck3/derivation.md` exist; every derivation row "yes".
- [ ] New Figma file with exactly 8 slides named as in `../deck/setup.js`; URL in `deck3/figma.md`.
- [ ] `gen3.py mock` prints ALL OK with the calibrated `MOCK_K`; every V1 clean (or a logged residual a screenshot shows is a known false positive).
- [ ] Sweeps: radius 0 fixes, `fontLow`, `dash`, `punct`, `banned`, `absentHit`, `mustMissing` empty; `moneyshot` 1; core slides 230 to 420 nodes.
- [ ] Each core slide screenshot shows its full form list from section 9 (8 or more forms), a so-what bar, full-word labels, an in-chart callout.
- [ ] Cover: mind map with brand slots, four organiser slots, no KPI-card row, team table; same table on slide 8.
- [ ] Logos logged (uploaded or placeholder with reason). `deck3/critique.md` exists and every issue is fixed or logged with a reason.
- [ ] Headline-only read logged.

**Final report to the user** (written for the team, in plain prose): the Figma URL; what Stage R changed (one line per
repair); what changed versus v2 (forms per slide, node counts); logo slots filled and left; residuals; and two reminders:
export from Figma Slides with File, Export, PDF and name the file `TeamName_CollegeName.pdf` as the case rules require
(for example `TeamIdeaForge_DelhiTechnologicalUniversity.pdf`, confirm the college name the team registered with); and
confirm with skill@mln.du.ac.in whether the cover counts toward the four main slides (if it does, delete slide 1; the
thank-you slide already carries the verdict and team table).

**Memory (orchestrator, at the end):**
1. Update `project_verdict_harvestbox.md`: v3 deck in `deck3/`, new Figma URL, 8-slide structure (4 core + 2 appendix),
   Stage R repairs done, v2 file superseded.
2. New `feedback_deck_density_bar.md` (type feedback): the user rejected the v2 HarvestBox deck as thin next to Dream11 and
   Toing; the bar is 8 or more distinct forms per core slide, a so-what bar, full-word labels (no fragments such as "Grw"),
   evidence plus a counter-view on each slide, logos beside real brands. How to apply: plan every core slide against
   this before writing scripts. Add its pointer to `MEMORY.md`.

---

## 16. Recovery

| Symptom | Action |
|---|---|
| Model hash changes after R-model | A number was touched; revert the edit (`git diff model/`) and redo only the string edits and the bridge split |
| `ASSEMBLY FAIL` after Stage R | Read the printed dict (banned word, dash, duplicate heading, missing source) and fix that line |
| `make_values.py` assertion fails | The research or model value differs from section 8; the file wins; record the true value in the build log and update slide-copy.md |
| A bound slide over 49,500 characters | Move repeated literal arrays into `values.json` keys; never edit the preamble |
| `use_figma` error mid-slide | Rerun the same bound file (each slide script wipes its slide first) |
| Figma not authorised on the new account | Stop and tell the user |
| Inspiration files unreadable on the new account | Proceed; section 3 holds the patterns |
| A slide fails twice | Defer it (section 4) and return after the others |
