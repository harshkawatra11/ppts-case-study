# HarvestBox deck plan (Verdict 2.0, Motilal Nehru College): the Figma deck, derived from the finished research

> **Who executes this.** A Sonnet-class main agent (plus Sonnet sub-agents only where a step says so). Everything is
> decided here: slide content, every string, every script. The job is execution.
>
> **Where things stand (9 Oct 2026).** Stage 1 is complete: `verdict-mnc/research/harvestbox-research.md` (87,917 words,
> 193 tables, 131-page PDF), the model (hash `06111c6c33`), six verified research lanes, 8,052 mined reviews and a
> critique. The full record is `verdict-mnc/build-log.md`. A first set of slide scripts (7 slides) already sits in
> `verdict-mnc/deck/` and passes the offline Figma mock. **This plan is Stage 2: it brings those scripts into line with the
> finished research, removes every invented name, adds a second appendix slide, and builds the deck in Figma.**
>
> **Verified at planning time, in memory, nothing written to disk:** `deck/derive_v2.py` applies cleanly to the slide
> files on disk; `model/patch_labels.py` relabels the model without moving its hash; with the relabelled values all eight
> slides pass the offline mock with `warnings: []` and `ISSUES 0` (section 9.2 lists the node counts).

## 0. The two rules that sit above everything else

**Rule 1: no invented names (user instruction, 9 Oct 2026, and the reason the LSR entry was rejected).** The deck and the
research use only the words the case itself uses. The three labels coined during Stage 1 are removed from every
deliverable:

| Coined label (banned everywhere) | Use instead |
|---|---|
| "Project Perennial" | No project name at all. Where a noun is needed: "the recommended plan", "our plan" |
| "Flex with a floor", "Flex" | "Proposal A, rebuilt" (the case's own name for the proposal, plus the plain word "rebuilt") |
| "the operating reset", "the reset" | "operational improvements" (the case's wording: "smaller operational improvements") |

No new label, programme name, codename, acronym or slogan may be introduced during execution. If a short name seems
needed, use the case's proposal letter (A, B, C) or a plain description.

**Rule 2: the deck is a derivative of the research.** Every number on a slide comes from `deck/values.js` (written by the
model) or is a constant listed in section 4 with the research section it was taken from. Every sentence on a slide
restates something the research establishes. Every slide's source line names the research sections it draws on. Step D5
checks all of this before any Figma call.

Standing rules that still apply: no em dash or en dash, no hooks, no rhetorical question, no exclamation mark, no banned
word; no KPI-card row on the cover; team in a Members, Institution, Role table on the cover and the thank-you slide; no
fabricated primary research; no Co-Authored-By trailer if anything is committed (nothing is committed here); do not use
`lsr-caseforchange/` or `lsr-revive/` as a model.

## 1. Decisions locked with the user

| Item | Decision |
|---|---|
| Slides | **8**: 1 cover, 4 core (one per case deliverable D1 to D4), 2 appendix, 1 thank-you. The rules allow 4 main slides plus thank-you plus up to 4 appendix slides |
| Cover and the 4-slide cap | The user treats the cover as outside the cap. The rules do not say so in words, so step D11 tells the user to confirm with skill@mln.du.ac.in and names the fallback |
| Appendix | A1: assumptions, data check, sensitivity, options, break-even inputs. A2: every short form and abbreviation used on the deck, plus where each slide comes from |
| Team | Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader), Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member), Dayita Arora (Ramjas College, University of Delhi, Member) |
| Palette | Harvest green and tomato: primary `#1B7F3B`, deep `#0E4D25`, accent yellow `#FFC72C`, alert tomato `#E03A1E`, tint `#D5EFDC` |
| Visual system | The Dream11 and Satoshi Gate system (white ground, 2px ink outlines, layered cards, ribbon with punch-holes, section chip, two-line action headline, panels), native Figma Slides, 1920 by 1080, corner radius 0, 22pt floor |
| Inspiration (read-only) | Prime `hOJVMGv9nIhDmayTT7DmOt`; "an amazing one" `YoiazGGOribfg69EjEDIlP`; also `e5VEexsLMhDampx7gvhFmM`, `vAIyXmljHlFDuwQo6RsoIN`, `APbOstO4SSU7iAjYIgEeSd`, `JLOOyohkQPUrwXEsxDKz4m` |
| Cover | A real mind map with brand image placeholders, not a plain text panel |
| Logos | Named placeholder slots: four organiser marks (Project Avsar, The Skill Development Cell, Motilal Nehru College, University of Delhi) on the cover and thank-you slide; real brands wherever the deck names them; a HarvestBox slot |

## 2. The deck, slide by slide

Skeleton of slides 2 to 7: ribbon y 40 to 100; section chip and counter y 118 to 174; headline (node `HEADLINE`, 40pt
stepping to 34pt, two lines) from y 188; content zone y 318 to 1030; source line (node `SOURCE`, 14pt) at y 1046. Fine
print (node `FINEPRINT`, 16pt) expands any short form used in the panel above it; everything else is 22pt or larger.

| # | Slide | Headline (from `values.js` unless quoted) | Panels and visual forms | Research it is derived from |
|---|---|---|---|---|
| 1 | Cover | "HARVESTBOX", subtitle "Growing without burning out: 24 months to profit on ₹15 Cr" | Verdict card; team table; four organiser logo slots; **mind map** "Five ways to solve a weekday dinner": hub, five route nodes with prices, eight brand slots, a "Proposal A, rebuilt" node with the three plan prices, a precedent strip (Gousto, Blue Apron) | §2 (verdict), §9.2 (dinner map and prices), §11.9 (two precedent lines), §17.3 (price ladder) |
| 2 | 1 Diagnosis and evaluation (D1) | `f2`: loses ₹4,719 on each of the 45% gone by month 3; no proposal as written keeps cash above zero | **Table** four-year history; **line chart** survival curve with payback marker; **table** two customers; **heat table** exit reasons, case against 2,435 mined low-star reviews, and which proposal answers each; **heat-map scorecard** of A, B, C and A rebuilt with its formula; **line chart** four cash paths to zero | §3, §5, §6, §7 (and Appendix C table V3), §13 to §16; T1 to T4, T9 |
| 3 | 2 Strategic recommendation (D2) | `f3`: fund Proposal A, rebuilt with a floor on skipping; LTV to CAC 1.55x to 2.70x for ₹1.8 Cr | **Two cards** do not / do; **heat grid** 24-month EBITDA by retention and skip rate; **table** five features as written against rebuilt; **bar chart** LTV to CAC ladder to the 3.0x target; **card** "Conclusively" with the month 12 gate and the Gousto precedent | §2, §11.9, §13, §16, §17; T8, T9, T12 |
| 4 | 3 Financial and risk case (D3) | `f4`: loss ₹9.2 Cr to ₹0.8 Cr, break-even month 21, cash never below ₹2.9 Cr | **Waterfall** EBITDA bridge, ten bars; **moneyshot card** (node `MONEYSHOT`); **table** three scenarios across revenue, margin, marketing, EBITDA, cash, retention, LTV to CAC; **5 by 5 risk heat map** with all twelve risks; **table** four nearest risks with trigger and response | §19, §20, §21.1; T4 to T7 |
| 5 | 4 90-day plan and KPIs (D4) | `f5`: ninety days put Proposal A live in five cities for ₹1.8 Cr; seven KPIs with stop triggers | **Gantt** 13 weeks, eight workstreams; **segmented bar and table** where the ₹15 Cr goes; **table** seven KPIs at today, day 90, month 12, month 24 with stop triggers; **card** "Therefore" with three gates | §18, §22, §23, §24; T10, T11 |
| 6 | Appendix 1 | `f6`: every number traces to the case, an assumption or the model; three case figures do not reconcile | **Table** nine assumptions; **table** data check; **tornado** run-rate EBITDA swing; **table** three proposals as written and with the same improvements; reading notes; **table** break-even inputs | §4, §16, §20.3, §20.5, §25; T7, T9 |
| 7 | Appendix 2 | "Every short form, abbreviation and tag on these slides is expanded here, and each slide is tied to the research sections it was derived from" | **Two tables**, 25 short forms with meanings; panel tying each slide to its research sections, the review sample and the bibliography | Appendix D (glossary), Appendix A, Appendix C |
| 8 | Thank you | "THANK YOU" | Verdict card; team table; logo slots | Repeats slide 1 |

Every core slide carries five or six distinct visual forms and no empty region (node counts in section 9.2).

**Rhetoric carried from the `case-competition-deck` skill:** action titles with a number on all four core slides;
contrarian recommendation (A as written scores lowest, rebuilt highest); symmetric treatment (one scorecard row per
option); three scenarios; exactly one moneyshot (slide 4); double synthesis ("Conclusively" on slide 3, "Therefore" on
slide 5); pre-empted weaknesses (break-even inputs and the data check on Appendix 1); defensive depth (two appendix slides).

## 3. What changes from the slide scripts already on disk

`deck/derive_v2.py` (section 14) makes these changes with exact-match asserts. Nothing is retyped by hand.

| Slide | Change | Why |
|---|---|---|
| All | Unicode escapes normalised; coined labels removed from every string; source lines now name research sections | Rules 1 and 2 |
| 1 | Hub "A WEEKDAY DINNER"; "ORDER IN" shows "₹499 to ₹660 an order"; "READY-TO-EAT" becomes "TEN-MINUTE FOOD"; slots "Zepto Cafe" and "Bistro" replace ITC and MTR; node "PROPOSAL A, REBUILT" shows the three plan prices; precedent strip is Gousto and Blue Apron | Research §9.2 and §11.9 established these, not the planning-time guesses |
| 2 | Exit-reason bars become a heat table: case share against mined-review mix, with the answering proposal | Research §7 adds the review evidence |
| 3 | Titles use "Proposal A"; precedent line is Gousto | Rule 1; §11.9 names Gousto and Blue Apron as the only two lines strong enough to carry |
| 4 | Scenario table relabelled; cash line chart replaced by the 5 by 5 risk heat map built from the twelve scored risks; risk table shows risks 1, 4, 5 and 10 with the research's triggers and responses | Research §21. Cash stays on the slide in the moneyshot card and the scenario table, and on slide 5 |
| 5 | Titles use "Proposal A" | Rule 1 |
| 6 | Becomes Appendix 1; abbreviations move to Appendix 2; a break-even inputs table is added | User instruction on the appendix; research §20.5 |
| 7 | New: Appendix 2, short forms and sources | User instruction |
| 8 | The old slide 7 (thank you) | Renumbering |

## 4. Constants on the slides that do not come from `values.js` (step D5 checks each against the research)

| Constant on a slide | Value | Research location | Tag there |
|---|---|---|---|
| Order-in price, slide 1 | ₹499 to ₹660 an order | §9.2 dinner map table | `[S12]` |
| Ten-minute food price, slide 1 | ₹250 to ₹450 a meal | §9.2 | `[C M2]` |
| Private-label kit, slide 1 | ₹3,500 a box | §9.2 | `[C M3]` |
| HarvestBox kit, slide 1 | ₹5,200 a box | §9.2 | `[C K2]` |
| Plan prices, slides 1 and 3 | ₹3,600, ₹5,200, ₹6,600 | §17.3 price ladder | `[A09]` |
| Gousto, slides 1 and 3 | Third consecutive profitable year, FY2025, on a recipe-mix shift | §11.9 | `[S27]` |
| Blue Apron, slide 1 | About $1.9 bn IPO valuation (2017) to a $103 m sale (2023), roughly 95% lower | §11.9 | `[S25]` `[S26]` |
| Review mix, slide 2 | 42.5, 16.2, 1.8, 12.4, 27.1% across the five reasons; 2,435 low-star reviews; six apps | §7.2, Appendix C table V3; `research/reviews/review_outputs.json` | `[V3]` |
| Which proposal answers each reason, slide 2 | A, none, A and C, A, none (63% for A) | §7.1 | `[C W1]` to `[C W5]` |
| Feature table, slide 3 | Five rows, as written against rebuilt | §17.1 to §17.6 | `[C PA1]`, `[A08]` to `[A11]` |
| Gate, slides 3 and 5 | Cash of ₹7 Cr and LTV to CAC of 2.2x at month 12 | §24.2 | `[M]` |
| Staged ready-to-eat, slide 3 | ₹4 Cr of Proposal C's ₹5 Cr, two cities | §24 | `[A23]` |
| Risk scores, slide 4 | Twelve risks, probability and impact as in the `RK` array | §21.1 table | none (team judgement, stated as such) |
| Risk triggers and responses, slide 4 | Risks 1, 4, 5, 10 | §21.1 | `[A10]`, `[M]`, `[A18]` |
| Gantt rows, slide 5 | Eight workstreams, 13 weeks | §22.1 | `[A09]`, `[A15]`, `[A17]`, `[A19]` |
| Pilot retention, slide 5 | 62% on the pilot cohort's early read | §22 | team target |
| Break-even inputs, slide 6 | 18.1%, 5.6%, 64.5%, 3.27%, +3.8 points | §20.5 table | `[T7]` |
| Counts, slide 7 | 29 sections, 6 appendices, 65 cited sources, 8,052 reviews | Document structure; `assemble.py md` output | none |

**One research correction found while planning (fix in step D2):** the heat-map table in research §21.2 omits risk 4, which
§21.1 scores probability 2, impact 5. The cell "5 (severe) / 2 (unlikely)" must read `4, 10, 12`, and the sentence under
the table must name risk 4 (skip rate) alongside risks 10 and 12 as unlikely but severe.

## 5. Execution sequence

All commands run from the repo root `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court` with
`python -X utf8`. Log every step in `verdict-mnc/build-log.md` under a new heading `## Stage 2` with `STATUS: PASS` or
`FAIL`.

| Step | Who | Action | Done when |
|---|---|---|---|
| D0 | Main | Copy this plan to `verdict-mnc/DECK-PLAN.md` (`python -c "import shutil; shutil.copyfile(r'C:\Users\harsh\.claude\plans\working-folder-verdict-mnc-binary-pizza.md', r'verdict-mnc\DECK-PLAN.md')"`). Open it, find the block marked `FILE: extract_deck.py` in section 15, create `verdict-mnc/extract_deck.py` with exactly that content using the Write tool, run it | Prints `files 3` |
| D1 | Main | Save the memory in section 11 now, before anything else, so the naming rule survives the session | Memory files updated, `MEMORY.md` pointer added |
| D2 | Main | **Rename in the research.** Run `python -X utf8 verdict-mnc/research/rename_labels.py`. Then apply the §21.2 correction from section 4 to `research/parts/part-F.md` by hand | Prints the changed-line count and the `LEFT` lines; `changed_lines.json` written |
| D2b | Three Sonnet sub-agents in parallel (prompt 6.1), files split `part-A, part-B, part-C` / `part-D, part-E` / `part-F, part-G, appendix-D, appendix-E, appendix-F` | Copy-edit every changed line so it reads as natural English | Each replies with lines fixed; main agent then runs the acceptance grep in 6.2 and gets zero hits |
| D3 | Main | `python -X utf8 verdict-mnc/model/patch_labels.py`, then `python -X utf8 verdict-mnc/research/assemble.py md`, then `... assemble.py pdf` | Model prints 14 PASS lines, `HASH 06111c6c33` and `FINDINGS [135, 146, 134, 148, 150]` (labels changed, numbers did not); `ASSEMBLY PASS`; PDF rebuilt; `grep -c "Perennial" verdict-mnc/research/harvestbox-research.md` is 0 |
| D4 | Main | `python -X utf8 verdict-mnc/deck/derive_v2.py`, then `python -X utf8 verdict-mnc/deck/gen.py pre`, then `... gen.py mock` | `derive_v2` prints `v2 written 14 files`; eight lines `sNN OK` |
| D5 | Main | **Derivation check.** Create `deck/derivation.md`: one table per slide, `Panel | Text or number on the slide | Research section | Tag | Matches (yes or no) | Change`. Fill it by reading each `deck/slides/sNN.js`, `deck/values.js`, section 4 of this plan and the research sections named in section 2. Apply the rule table in section 7 | Every row is "yes" or has an override; `gen.py mock` still prints eight OK lines |
| D6 | Main | Skill touchpoint F (section 8) | Logged |
| D7 | Main | Figma: tools, `whoami`, calibration screenshots, `create_new_file`, `setup.js` (section 9) | Eight slide ids in `deck/slide-ids.json`; fonts all true |
| D8 | Main | `gen.py bind`; then build slides in the order 2, 3, 4, 5, 6, 7, 1, 8, each followed by its validator and a screenshot (section 9) | Each V1 clean or logged residual; each screenshot viewed |
| D9 | Main | Sweeps, full validator, logos (section 9.4) | Sweeps empty; logo log written |
| D10 | Sonnet sub-agent | Skill touchpoint G: critique of the built deck (prompt 6.3) | `deck/critique.md`; fixes under section 9.3 applied |
| D11 | Main | Final screenshots, export instructions, final report (section 10) | Checklist in section 10 ticked |

Figma calls are made by the main agent only, one at a time. No Figma call before D5 passes.

## 6. Prompts and acceptance tests

### 6.1 Copy-edit prompt (D2b; fill FILES)

> You are a copy editor. Repo root: `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`. Three coined
> labels were just replaced mechanically in a research document: "Project Perennial" became "the recommended plan",
> "Flex" became "the rebuilt Proposal A", and "the reset" became "the operational improvements". Read
> `verdict-mnc/research/changed_lines.json` and, for each entry whose file is one of FILES (under
> `verdict-mnc/research/parts/`), open that line and fix it so it reads as natural English. Fix only these things: doubled
> words ("the the"); subject and verb agreement after "the operational improvements" (plural); a heading or sentence that
> now starts with a lower-case letter; repeated words such as "the rebuilt Proposal A, rebuilt" or "Proposal A rebuilt as
> the rebuilt Proposal A"; clumsy repetition where "it" or "the plan" reads better; any leftover "reset", "Flex" or
> "Perennial" used as a label, including hyphenated forms such as "operating-reset" or "same-reset" (rewrite with
> "operational improvements" or "improvements"). Also fix every entry under `left` in that JSON for your files. Do not
> change any number, tag, table structure or meaning. Do not introduce any new name or label for anything. No em dashes
> or en dashes, no exclamation marks. Reply with the count of lines you edited per file.

### 6.2 Acceptance grep after D2b (each must print 0 for every file)

```
grep -c "Perennial" verdict-mnc/research/parts/*.md
grep -cE "\bFlex\b" verdict-mnc/research/parts/*.md
grep -ciE "\breset\b|operating-reset|same-reset" verdict-mnc/research/parts/*.md
grep -cE "\b[Tt]he the\b" verdict-mnc/research/parts/*.md
grep -cE "^#{2,3} [0-9.a-z]+ the " verdict-mnc/research/parts/*.md
```

Any non-zero file goes back to a sub-agent with the exact lines.

### 6.3 Deck critic prompt (D10)

> You are a deck critic. Invoke the `case-competition-deck` skill and read `references/critique_rubric.md`. Read
> `verdict-mnc/DECK-PLAN.md` sections 0, 2 and 4, `verdict-mnc/deck/values.js`, `verdict-mnc/deck/derivation.md`, and view
> the eight images in `verdict-mnc/deck/shots/`. The rubric assumes a 100-slide deck; re-base it: the four mandated
> deliverables on four slides replace the 8-section test; the two appendix slides replace the appendix-depth test; score
> all four core headlines for a full-sentence finding and a number. Check three things the rubric lacks: no invented
> project name, programme name or coined label appears anywhere; every short form on slides 1 to 6 is expanded in fine
> print on that slide or on Appendix 2; every panel's content can be found in `derivation.md`. Lead with the two strongest
> things. Give at most five issues, each with slide, current state, specific fix and why it matters. Do not propose
> changing a number, the recommendation or the slide count. Do not use dashes. Write `verdict-mnc/deck/critique.md`.

## 7. Derivation rules (step D5)

| Finding | Action |
|---|---|
| A number from `values.js` | It comes from the model the research also uses. Confirm the research states the same figure. If the research differs, fix the research sentence |
| A constant from section 4 that does not match the research | The research wins. Add an entry to `deck/overrides.json` as `"exact old string": "new string"` and note it in `derivation.md` |
| A sentence the research words differently in substance | Override to match the research. The new string may not be more than 10% longer and may not contain a dash, question mark, exclamation mark, banned word or coined label |
| A claim the research marks UNVERIFIABLE or dropped | Replace through `overrides.json` with a VERIFIED fact of the same kind or a case fact |
| A short form on a slide that is not in the Appendix 2 list | Add fine print on that slide, or override the string to spell it out. Do not add rows to Appendix 2 without re-running the mock |
| A central research finding that no slide carries | Do not redesign. List it in `derivation.md` under "For the talk track" |

`gen.py` applies `overrides.json` when it builds `deck/derived/sNN.js`, and fails if an override key matches nothing.

## 8. Skill touchpoints

| Touchpoint | When | What | Pass test |
|---|---|---|---|
| F | D6 | Skill tool `case-competition-deck`; read `references/archetypes.md` and `references/rhetoric.md`. Check `f2` to `f5` in `values.js` are full-sentence findings with a number; slide 3 carries "CONCLUSIVELY" and slide 5 "THEREFORE"; exactly one node named `MONEYSHOT` | Logged with the four headlines quoted |
| G | D10 | Critique mode, prompt 6.3 | `deck/critique.md`; every issue fixed under 9.3 or logged with a reason |

## 9. Figma build

**Tools.** `ToolSearch` with
`select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets`.
Load the Figma guidance: Skill `figma-use` if listed, otherwise `ReadMcpResourceTool`, server `figma-mcp`, uri
`skill://figma/figma-use/SKILL.md`. Pass `skillNames: "resource:figma-use"` on every `use_figma` call. This deck
positions nodes absolutely through the helper library; that is deliberate. `get_metadata` does not work on Slides files.
If the Figma server is not authorised, stop and tell the user.

### 9.1 Steps

| Step | Action | Done when |
|---|---|---|
| a | `whoami`. Use `planKey: "team::1564294484048272772"`; if it is not listed, ask the user. Screenshot `YoiazGGOribfg69EjEDIlP` nodes `2:2` (cover) and `2:7` (a dense slide) for calibration | Two images viewed |
| b | `create_new_file`, `editorType: "slides"`, name `HarvestBox: Growing Without Burning Out | Team IdeaForge | Verdict 2.0`. Then `use_figma` with the contents of `deck/setup.js` | Returns `count: 8` or more, eight ids, `fontsOk` all true. Write `deck/slide-ids.json` as `{"S1": id1, ..., "S8": id8}`; write the file key and URL to `deck/figma.md`. Remove any `extra` slide with 0 children by id |
| c | `python -X utf8 verdict-mnc/deck/gen.py bind` | 8 `slide_NN.js`, 8 `v1_NN.js`, `v1_all.js`, `sweeps.js`, `logos.js`, each slide file under 50,000 characters |
| d | For N = 2, 3, 4, 5, 6, 7, 1, 8: `use_figma` with the full text of `build/slide_0N.js` (return has `warnings: []`); `use_figma` with `build/v1_0N.js`; `get_screenshot` at `maxDimension: 1600` saved to `deck/shots/sN.png` and Read; apply 9.3 if needed, at most three attempts | V1 `clean: true` or logged residuals; each screenshot described in two lines in `deck/figma.md`. **Stop after slide 2 and compare with the calibration images before building the rest** |
| e | `use_figma` with `build/sweeps.js`, then `build/v1_all.js` | `fontLow`, `copy`, `missing`, `presentBad` all empty; `slides` is 8 |

Each slide script clears its slide first, so a rerun is safe.

### 9.2 Offline mock results at planning time (reference for step D4)

| Slide | Nodes | Result |
|---|---|---|
| 1 Cover | 103 | clean |
| 2 Diagnosis and evaluation | 393 | clean |
| 3 Strategic recommendation | 173 | clean |
| 4 Financial and risk case | 265 | clean |
| 5 90-day plan and KPIs | 191 | clean |
| 6 Appendix 1 | 249 | clean |
| 7 Appendix 2 | 143 | clean |
| 8 Thank you | 49 | clean |

The mock's text metrics are approximate; the in-Figma validator is final.

### 9.3 Fix rules (the only edits allowed during the build)

A copy fix goes into `deck/overrides.json`; a geometry fix goes into the file under `deck/slides/`. Then `gen.py mock`,
`gen.py bind`, rebuild that slide. Never edit a build file by hand; never add 240 to a coordinate.

| Issue | Fix |
|---|---|
| `headline3lines` | Remove the two weakest words through `overrides.json`, keeping every number |
| `source2lines` | Drop the least important source group |
| `textOut`, `cellWrap`, a `warnings` overflow | Shortening ladder: drop articles; shorter synonym; a short form already on Appendix 2; drop the least important clause. Never below 22pt, never drop a number, never coin a label |
| `overlap`, `bounds`, `belowContent` | Move the later node by the overlap plus 8px if it stays inside y 318 to 1030; otherwise report |
| A label collides with a line or bar in a screenshot | Nudge that label by at most 24px |
| A node sits 240px off | A hand-written line set `x` or `y` before `appendChild`. Remove it and rerun the slide file |
| `Cannot use unloaded font` | A fragment was run. Always run the full `build/slide_NN.js` |
| Dead space larger than about 200 by 200 | Report it. Do not add decoration |

Known false positives: ribbon punch-holes over their tags and `BACK:` rectangles under their cards are by design.

### 9.4 Logos

Every slot is a dashed frame named `LOGO: <brand>` with a small caption and stays that way unless a real logo is placed.
Run `build/logos.js` (expected 13 slots on the cover, 5 on the thank-you slide). For Blinkit, Zepto, Swiggy, Zomato,
Zepto Cafe, Bistro, Gousto and Blue Apron: search Wikimedia Commons
(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&format=json&srsearch=<brand>%20logo`),
download with `curl -sL -o "verdict-mnc/deck/logos/<slug>.png" "https://commons.wikimedia.org/wiki/Special:FilePath/<File name>?width=600"`,
Read the image to confirm it is that brand, upload with `upload_assets` (`count: 1`, `nodeId` = the slot, FIT if
offered), POST the bytes, then remove that slot's caption and dash pattern. Never resize a slot. If a logo cannot be
confirmed, leave the placeholder. HarvestBox is fictional: its slot stays a placeholder. The four organiser marks stay
placeholders for the user to drop in. Log every slot as uploaded or placeholder with the reason.

## 10. Final checks and report

- [ ] `grep -rc "Perennial" verdict-mnc/research/harvestbox-research.md verdict-mnc/deck/slides verdict-mnc/deck/values.js` is 0 everywhere; the sweeps' `presentBad` is empty (it lists Perennial, Flex, reset).
- [ ] `ASSEMBLY PASS` after the rename; PDF rebuilt; model hash still `06111c6c33`.
- [ ] `deck/derivation.md` has a row for every text and number on every slide.
- [ ] Exactly 8 slides, named as in `setup.js`; `gen.py mock` eight OK lines; sweeps empty; one `MONEYSHOT` node.
- [ ] Every short form on slides 1 to 6 is in fine print on that slide or on Appendix 2.
- [ ] Cover: mind map with brand slots, four organiser slots, no KPI-card row, team table. Same table on slide 8.
- [ ] Eight screenshots saved and viewed. Touchpoints F and G logged. `deck/critique.md` exists.

Final report to the user: the Figma URL; what the rename changed (line counts); the overrides the derivation step made;
logo slots filled and left; residuals; and these two reminders. First, export from Figma Slides with File, Export, PDF and
name it `TeamIdeaForge_<CollegeName>.pdf`. Second, confirm with skill@mln.du.ac.in whether a cover counts towards the four
main slides; if it does, delete slide 1, since the thank-you slide (which the rules exempt) already carries the verdict
and the team table.

## 11. Memory (step D1)

Update `C:\Users\harsh\.claude\projects\c--Users-harsh-Desktop-HARSH-PPTS-CASE-STUDY-nsut-innovators-court\memory\`:

1. New file `feedback_no_invented_names.md` (type `feedback`): never invent a project name, programme name, codename or
   coined label for a case deliverable (deck or research). Use only the names the case itself gives (for example
   "Proposal A"). Why: the user said on 9 Oct 2026 that the LSR entry, which carried the invented name "Project Setu",
   was rejected and that an invented name reads as AI-generated; they had this build's "Project Perennial", "Flex with a
   floor" and "the operating reset" removed from both deliverables. How to apply: in any plan, research document or slide
   for this project, describe things in plain words or the case's own terms; if a short handle seems needed, ask.
2. Edit `project_verdict_harvestbox.md`: remove the names "Project Perennial" and "Flex with a floor" from its text;
   record that the deck is 8 slides (2 appendix), that `verdict-mnc/DECK-PLAN.md` is the Stage 2 plan, and the Figma URL
   once it exists.
3. Add the pointer for file 1 to `MEMORY.md`.

## 12. Recovery

| Symptom | Action |
|---|---|
| `derive_v2.py` prints `already v2` | The slide files were already converted. Continue |
| `derive_v2.py` assertion error | A slide file on disk differs from Stage 1. Restore `deck/` by running `python -X utf8 verdict-mnc/extract.py` (it re-extracts the Stage 1 files from `verdict-mnc/PLAN.md`; it also rewrites the Stage 1 model and research scripts, so rerun `model/patch_labels.py` afterwards and do not rerun the research writers), then rerun |
| `patch_labels.py` assertion error | The model file differs from Stage 1. Re-extract as above, then rerun |
| Model hash changes after `patch_labels.py` | A number was touched. Re-extract and rerun; report if it persists |
| `gen.py mock` FAIL after an override | Shorten that override with the ladder in 9.3 |
| `ASSEMBLY FAIL` after the rename | Read the printed dict: a banned word or duplicate heading came from the copy-edit. Fix that line |
| A `use_figma` call errors mid-slide | Rerun the same build file |
| MCP connection drops | Rerun `setup.js` (it never creates a second set) and re-read the ids |

---

# Embedded files

Extracted by `extract_deck.py`. Never retype a block.

## 13. Research rename

<!-- FILE: research/rename_labels.py -->
```python
# ===== HARVESTBOX RENAME v1 =====
"""Remove the three coined labels from the research parts. Run from anywhere:
  python -X utf8 verdict-mnc/research/rename_labels.py
Writes the parts in place and research/changed_lines.json. HB_DRY=1 writes nothing."""
import re, io, glob, json, os, pathlib
R = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(os.environ["HB_R"])
DRY = os.environ.get("HB_DRY") == "1"
RULES = [
 (r"## 17\. Flex with a floor: five features, each rebuilt to protect order frequency", "## 17. Proposal A, rebuilt: five features, each redesigned to protect order frequency"),
 (r"## 18\. The operating reset: six levers", "## 18. Operational improvements: six levers"),
 (r"A rebuilt, Perennial", "A rebuilt"), (r"A rebuilt: Perennial", "A rebuilt"),
 (r"Perennial, base", "Recommended plan, base"), (r"Perennial, core", "Recommended plan, core"),
 (r"Perennial core's", "the core plan's"), (r"Perennial core", "the core plan"), (r"Perennial base", "the base case"),
 (r"Project Perennial's", "the recommended plan's"), (r"Project Perennial", "the recommended plan"),
 (r"Perennial's", "the recommended plan's"), (r"Perennial", "the recommended plan"),
 (r"Flex with a floor's", "the rebuilt Proposal A's"), (r"Flex with a floor", "the rebuilt Proposal A"),
 (r"\bFlex's", "the rebuilt Proposal A's"), (r"\bFlex\b", "the rebuilt Proposal A"),
 (r"[Tt]he operating reset's", "the operational improvements'"), (r"[Tt]he operating reset", "the operational improvements"),
 (r"operating reset", "operational improvements"), (r"Reset only", "Improvements only"),
 (r"[Tt]he reset's", "the operational improvements'"), (r"[Tt]he reset", "the operational improvements"),
 (r"\breset levers\b", "improvement levers"), (r"\bsame reset\b", "same improvements"), (r"\bidentical reset\b", "identical improvements"),
 (r"\bthe the\b", "the"),
]
CAP = re.compile(r"(?m)(^|(?<=[.:] )|(?<=\| )|(?<=\*\* ))the (rebuilt Proposal A|operational improvements|recommended plan|core plan|base case)")
HEAD = re.compile(r"(?m)^(#{2,3} [0-9.a-z]+ )the ")
changed = []; left = []
for fn in sorted(glob.glob(str(R / "parts" / "*.md"))):
    o = io.open(fn, encoding="utf-8").read(); t = o
    for a, b in RULES: t = re.sub(a, b, t)
    t = CAP.sub(lambda m: m.group(1) + "The " + m.group(2), t)
    t = HEAD.sub(lambda m: m.group(1) + "The ", t)
    name = os.path.basename(fn)
    for i, (x, y) in enumerate(zip(o.split("\n"), t.split("\n"))):
        if x != y: changed.append(dict(file=name, line=i + 1))
    left += [dict(file=name, text=m.group(0)) for m in re.finditer(r".{0,40}(\breset\b|Perennial|\bFlex\b).{0,40}", t)]
    if not DRY and t != o: io.open(fn, "w", encoding="utf-8", newline="\n").write(t)
print("changed lines", len(changed), "| left for the copy editors", len(left))
for l in left: print("LEFT", l["file"], "|", l["text"].encode("ascii", "replace").decode())
if not DRY:
    io.open(R / "changed_lines.json", "w", encoding="utf-8").write(json.dumps(dict(changed=changed, left=left), indent=1, ensure_ascii=False))
    print("wrote changed_lines.json")
```
<!-- END FILE -->

## 14. Model relabel and deck conversion

<!-- FILE: model/patch_labels.py -->
```python
# ===== HARVESTBOX MODEL RELABEL v1 =====
"""Replace coined labels inside harvestbox_model.py (strings only, no number changes), then rerun the model.
  python -X utf8 verdict-mnc/model/patch_labels.py        HB_DRY=1 prints the values object and writes nothing."""
import io, os, sys, pathlib, subprocess
M = (pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(os.environ["HB_M"])) / "harvestbox_model.py"
DRY = os.environ.get("HB_DRY") == "1"
src = io.open(M, encoding="utf-8").read().replace("\r", "")
REPS = [
 ('"""Project Perennial: 24-month cohort and cash model', '"""24-month cohort and cash model', 1),
 ('("Flex: retention net of skips"', '("Proposal A: retention net of skips"', 1),
 ('("Flex: referral, win-back, conversion"', '("Proposal A: referral, win-back, conversion"', 1),
 ('PER = dict(label="A rebuilt: Perennial"', 'PER = dict(label="A rebuilt"', 1),
 ('f5="Ninety days put Flex live in all five cities for %s1.8 Cr, and seven KPIs', 'f5="Ninety days put Proposal A live in five cities for %s1.8 Cr, and seven KPIs', 1),
 ('uses=[["Flex build (Proposal A)"', 'uses=[["Proposal A build"', 1),
 ('[["B with the reset", RU + "1.3 Cr"', '[["B + improvements", RU + "1.3 Cr"', 1),
 ('["C with the reset", RU + "5.0 Cr"', '["C + improvements", RU + "5.0 Cr"', 1),
 ('("reset_only", "Reset only")', '("reset_only", "Improvements only")', 1),
 ('("B_reset", "B with the reset"), ("C_reset", "C with the reset")', '("B_reset", "B with the same improvements"), ("C_reset", "C with the same improvements")', 1),
 ('("core", "Perennial, core (A rebuilt)")', '("core", "Recommended plan, core (A rebuilt)")', 1),
 ('("base", "Perennial, base (with staged ready-to-eat)")', '("base", "Recommended plan, base (with staged ready-to-eat)")', 1),
 ('"T3 Survival curve, months 1 to 12, today and with Flex"', '"T3 Survival curve, months 1 to 12, today and with Proposal A rebuilt"', 1),
 ('["Flex (65% at month 3)"]', '["A rebuilt (65% at month 3)"]', 1),
 ('scen=[["Revenue (" + RU + " Cr)", "42.0"', 'scen=[["Revenue", "42.0"', 1),
 ('["EBITDA (" + RU + " Cr)", MIN + "9.2"', '["EBITDA", MIN + "9.2"', 1),
 ('["Cash at year end", "15.0"', '["Year-end cash", "15.0"', 1),
]
if "Proposal A: retention net of skips" in src:
    print("already relabelled")
else:
    for a, b, n in REPS:
        assert src.count(a) == n, (a[:60], src.count(a)); src = src.replace(a, b)
    for bad in ("Perennial", "Flex"):
        assert bad not in src, bad
if DRY:
    os.environ["HB_HERE"] = str(M.parent); exec(compile(src, "model", "exec"), {"__name__": "hb"})
else:
    io.open(M, "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(M)], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-1500:], r.stderr[-800:])
```
<!-- END FILE -->

<!-- FILE: deck/derive_v2.py -->
```python
# ===== HARVESTBOX DECK V2 =====
"""Convert the Stage 1 slide scripts in deck/ into the 8-slide, research-derived, label-free version.
  python -X utf8 verdict-mnc/deck/derive_v2.py            HB_DRY=1 prints the files as JSON and writes nothing."""
import io, os, json, pathlib
D = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(os.environ["HB_D"])
DRY = os.environ.get("HB_DRY") == "1"
NAMES = ["_palette.js", "_extras.js"] + ["slides/s0%d.js" % i for i in range(1, 8)] + ["gen.py", "setup.js", "_v1.js", "_sweeps.js"]
B = {n: io.open(D / n, encoding="utf-8").read().replace("\r", "").rstrip("\n") for n in NAMES}
if "HARVESTBOX DECK EXTRAS" in B["_extras.js"]:
    print("already v2"); raise SystemExit(0)
for n in B:
    if n.endswith(".js") and n != "_sweeps.js":
        for code, ch in (("\\u20b9", "\u20b9"), ("\\u00b7", "\u00b7"), ("\\u2212", "\u2212")): B[n] = B[n].replace(code, ch)
def rep(n, a, b, cnt=1):
    assert B[n].count(a) == cnt, (n, a[:60], B[n].count(a)); B[n] = B[n].replace(a, b)
def line(n, prefix, new):
    L = B[n].split("\n"); idx = [i for i, l in enumerate(L) if l.startswith(prefix)]; assert len(idx) == 1, (n, prefix, len(idx)); L[idx[0]] = new; B[n] = "\n".join(L)
def span(n, start, end, new):
    a = B[n].index(start); b = B[n].index(end, a); B[n] = B[n][:a] + new + B[n][b:]
RU = "\u20b9"
# ---- extras
rep("_extras.js", 'const RIBX=["APPENDIX","ASSUMPTIONS","DATA CHECK","SENSITIVITY","SOURCES"];', 'const RIBX=["APPENDIX 1: ASSUMPTIONS AND CHECKS","APPENDIX 2: SHORT FORMS AND SOURCES"];')
rep("_extras.js", "// ===== PERENNIAL EXTRAS =====", "// ===== HARVESTBOX DECK EXTRAS =====")
rep("_extras.js", "// ===== END PERENNIAL EXTRAS =====", "// ===== END HARVESTBOX DECK EXTRAS =====")
# ---- slide 1
s = "slides/s01.js"
line(s, 'T(v,28,18,1064,26,"OUR VERDICT', 'T(v,28,18,1064,26,"OUR VERDICT: FUND PROPOSAL A, REBUILT. Free skipping with a floor, a ' + RU + '3,600 entry plan and referral, alongside the smaller operational improvements the case allows.",{family:"Poppins",style:"Bold",color:C.accent});')
rep(s, "FIVE WAYS TO SOLVE TONIGHT'S DINNER", "FIVE WAYS TO SOLVE A WEEKDAY DINNER")
rep(s, '"TONIGHT\'S DINNER"', '"A WEEKDAY DINNER"')
rep(s, '"ORDER IN","hot food in 30 minutes"', '"ORDER IN","' + RU + '499 to ' + RU + '660 an order"')
rep(s, '"READY-TO-EAT","', '"TEN-MINUTE FOOD","')
rep(s, 'logoSlot(pm,460,316,76,72,"ITC"); logoSlot(pm,544,316,76,72,"MTR");', 'logoSlot(pm,460,316,76,72,"Zepto Cafe"); logoSlot(pm,544,316,76,72,"Bistro");')
rep(s, '"HARVESTBOX, REBUILT"', '"PROPOSAL A, REBUILT"')
rep(s, '"skip freely, start at ' + RU + '3,600, bring a friend"', '"' + RU + '3,600, ' + RU + '5,200 and ' + RU + '6,600 plans, free skipping"')
rep(s, '"HelloFresh"', '"Gousto"')
rep(s, '"One added ready-to-eat after its kit base held. One never fixed churn."', '"Gousto: third profitable year in a row. Blue Apron: lost 95% of its IPO value."')
rep(s, '| Team IdeaForge model "+V.hash+" and research document"', '| Team IdeaForge research, sections 2, 9 and 11 | model "+V.hash')
# ---- slide 2
s = "slides/s02.js"
span(s, "// B1 exit reasons", "// B2 scorecard", '''// B1 exit reasons: case against mined reviews
const b1=panel(s,64,678,560,352,"A ANSWERS 63% OF EXITS, B NONE");
const WL=["Too rigid to skip","Too expensive","Repetitive menu","Waste, portions","Delivery problems"], RVM=[42.5,16.2,1.8,12.4,27.1], who=["A","none","A, C","A","none"];
const hf2=v=>v>=25?HG[3]:(v>=15?HG[2]:HG[1]);
grid(b1,16,58,WL,["Case","Review","Fix"],V.why.map((w,i)=>[{t:w[1]+"%",f:hf2(w[1])},{t:RVM[i]+"%",f:hf2(RVM[i])},{t:who[i],f:who[i]==="none"?C.alertTint:C.white}]),{labelW:248,cellW:93,rowH:40,headH:38,corner:"Exit reason",name:"TABLE: exit reasons"});
fine(b1,16,300,528,"Review: mix in 2,435 low-star Play Store reviews of six meal-kit apps. Association, not proof. Fix: proposal as written.");
''')
rep(s, '| Team IdeaForge model "+V.hash+", tables T1 to T4 and T9"', '| research sections 3 to 8 and 13 to 16 | model "+V.hash+", tables T1 to T4, T9"')
# ---- slide 3
s = "slides/s03.js"
rep(s, '"DO: FUND A, REBUILT AS FLEX WITH A FLOOR"', '"DO: FUND A, REBUILT WITH A SKIP FLOOR"')
rep(s, '"FLEX WITH A FLOOR: FIVE FEATURES, REBUILT"', '"PROPOSAL A: FIVE FEATURES, REBUILT"')
rep(s, 'name:"flex features"', 'name:"proposal a features"')
rep(s, '"Flex and the operating reset, ' + RU + '1.8 Cr."', '"Proposal A, rebuilt, plus operational improvements."')
rep(s, '["Precedent: ","HelloFresh bought ready-to-eat maker Factor in 2020, after its kit base held."]', '["Precedent: ","Gousto, three profitable years on a new recipe mix, not discounts."]')
rep(s, '| HelloFresh SE annual report 2020 (Factor acquisition) | Team IdeaForge model "+V.hash+", tables T4, T8, T9 and T12"', '| research sections 2, 11, 13, 16, 17 | Gousto FY2025 results (Grocery Gazette, May 2026) | model "+V.hash+", tables T8, T9, T12"')
# ---- slide 4
s = "slides/s04.js"
span(s, "const sp=panel(", "results.push(", '''const sp=panel(s,64,688,700,342,"THREE SCENARIOS, ONE SET OF LEVERS");
addTable(sp,16,58,[212,88,88,88,96,96],["Measure","2025","Y1","Y2","Bear","Bull"],V.scen,{rowH:32,headerH:36}).name="TABLE: scenarios";
fine(sp,16,322,668,"''' + RU + ''' Cr or %. Y1, Y2: base case. Bear, Bull: year 2 of each scenario.");
const hp=panel(s,780,688,560,342,"NO RISK IS BOTH LIKELY AND SEVERE");
const RK=[[1,3,4],[2,3,3],[3,3,3],[4,2,5],[5,3,4],[6,2,3],[7,2,2],[8,2,2],[9,3,3],[10,2,5],[11,2,4],[12,2,5]];
grid(hp,16,58,["5","4","3","2","1"],["1","2","3","4","5"],[5,4,3,2,1].map(im=>[1,2,3,4,5].map(p=>{ const ids=RK.filter(r=>r[1]===p&&r[2]===im).map(r=>r[0]); const sc=p*im; return {t:ids.join(" "),f:sc>=15?C.alert:(sc>=10?C.alertTint:(sc>=6?C.accentTint:C.white))}; })),{labelW:68,cellW:92,rowH:40,headH:38,corner:"I",name:"TABLE: risk heat"});
fine(hp,16,300,528,"Rows: impact, 1 to 5. Columns: probability, 1 to 5. Cells: risk numbers (research, section 21).");
const rp=panel(s,1356,688,500,342,"THE FOUR NEAREST THE CORNER");
wrapTable(rp,16,56,[56,200,212],["#","Trigger","Response"],[
 ["1","Referral under 15%, M6","Raise reward, add win-back"],
 ["4","Skips over 10%, 2 months","Tighten floor, fee on 3rd skip"],
 ["5","Margin under 32%, M9","Packaging and buying first"],
 ["10","Cash under ''' + RU + '''7 Cr, M12","Pull contingency early"]],{rowH:58,headerH:36,name:"risks"});
''')
rep(s, '| Team IdeaForge model "+V.hash+", tables T4 to T7 and T13 | assumptions A01 to A25 in the appendix and research document"', '| research sections 19 to 21 | model "+V.hash+", tables T4 to T7 | assumptions A01 to A25"')
# ---- slide 5
s = "slides/s05.js"
rep(s, '"90 DAYS: FLEX LIVE IN FIVE CITIES BY WEEK 12"', '"90 DAYS: PROPOSAL A LIVE IN FIVE CITIES BY WEEK 12"')
rep(s, '"Flex live in five cities, pilot retention at 62%."', '"Proposal A live in five cities, pilot retention 62%."')
rep(s, '| Team IdeaForge model "+V.hash+", tables T10 and T11 | research document sections 15 to 17"', '| research sections 18, 22 to 24 | model "+V.hash+", tables T10, T11"')
# ---- slide 6 becomes appendix 1
s = "slides/s06.js"
rep(s, 'skeleton2(s,0,"A1","APPENDIX: ASSUMPTIONS AND CHECKS",560,', 'skeleton2(s,0,"A1","APPENDIX 1: ASSUMPTIONS AND CHECKS",590,')
span(s, "const xp=panel(", "results.push(", '''const xp=panel(s,900,700,956,330,"READING NOTES AND BREAK-EVEN INPUTS");
["Case facts are used as given. Each team assumption has an ID (A01 to A25), a rationale and a sensitivity in the research, section 25.",
 "No customer interview, survey or pilot has been run. The validation plan in the research, Appendix E, is a plan and says so.",
 "Real brands on the cover mark alternatives and precedents only. HarvestBox is the fictional company in the case."]
 .forEach((x,i)=>{ fine(xp,56,62+i*84,400,x); addBadge(xp,16,62+i*84,32,i+1,C.primary,C.white); });
addTable(xp,480,58,[230,100,130],["Input","Base","Flips at"],[["Referral share","20%","18.1%"],["Skip rate","5%","5.6%"],["M3 retention","65%","64.5%"],["Web conversion","3.3%","3.27%"],["Margin levers","+4.0","+3.8"]],{rowH:34,headerH:36}).name="TABLE: break-even inputs";
fine(xp,480,268,460,"Flips at: the input value where run-rate EBITDA is zero (research, section 20.5).");
''')
rep(s, '"THREE PROPOSALS, AS WRITTEN AND WITH THE SAME RESET"', '"THREE PROPOSALS, AS WRITTEN AND IMPROVED"')
# ---- slide 8 is the old slide 7; slide 7 is new
B["slides/s08.js"] = B["slides/s07.js"].replace('getNodeByIdAsync("S7")', 'getNodeByIdAsync("S8")')
AB = [["A, B, C", "Proposals: subscription, retail, ready-to-eat"], ["A rebuilt", "Proposal A with the five redesigned features on slide 3"],
      ["A01 to A25", "Team assumption IDs, listed in the research, section 25"], ["Bear, bull", "Low and high scenarios; base is the expected case"],
      ["CAC", "Customer acquisition cost: spend to win one customer"], ["Cr", "Crore: ten million rupees"],
      ["EBITDA", "Earnings before interest, tax, depreciation, amortisation"], ["GM", "Gross margin: gross profit as a share of revenue"],
      ["Risk scores", "Impact (rows) and probability (columns), each 1 to 5"], ["KPI", "Key performance indicator"], ["lakh", "One hundred thousand"],
      ["LTV", "Lifetime gross profit earned from one customer"], ["LTV to CAC", "Lifetime gross profit divided by acquisition cost"],
      ["M3, M12, M24", "Month 3, 12 or 24, of a customer or of the plan"], ["Mktg", "Marketing spend"],
      ["Other", "Operating cost other than cost of goods and marketing"], ["p", "Paise: one hundredth of a rupee"],
      ["pts", "Percentage points"], ["Run-rate", "Months 22 to 24 of the plan, scaled to a full year"], ["Stop trigger", "The KPI level at which the Board acts"],
      ["T1 to T13", "Model tables, reproduced in the research, Appendix B"], ["W1 to W13", "Weeks 1 to 13 of the 90-day plan"],
      ["x", "Times: 2.70x means 2.70 times"], ["Y1, Y2", "Plan year 1 (months 1 to 12) and year 2 (13 to 24)"], ["Zero month", "The month in which cash in the bank reaches zero"]]
B["slides/s07.js"] = '''{ const s = await figma.getNodeByIdAsync("S7"); wipe(s);
skeleton2(s,1,"A2","APPENDIX 2: SHORT FORMS AND SOURCES",600,"Every short form, abbreviation and tag on these slides is expanded here, and each slide is tied to the research sections it was derived from","Source: Team IdeaForge research document (29 sections, 6 appendices) | model "+V.hash,RIBX);
const AB=''' + json.dumps(AB, ensure_ascii=False) + ''';
const p1=panel(s,64,318,880,712,"SHORT FORMS USED IN THIS DECK (1 OF 2)");
wrapTable(p1,16,58,[170,678],["Short form","Meaning as used here"],AB.slice(0,17),{rowH:36,headerH:38,name:"abbreviations 1"});
const p2=panel(s,960,318,896,400,"SHORT FORMS USED IN THIS DECK (2 OF 2)");
wrapTable(p2,16,58,[170,694],["Short form","Meaning as used here"],AB.slice(17),{rowH:36,headerH:38,name:"abbreviations 2"});
const p3=panel(s,960,734,896,296,"WHERE EACH SLIDE COMES FROM");
["Case: Verdict 2.0, HarvestBox: Growing Without Burning Out (Motilal Nehru College, 2026).",
 "Model: harvestbox_model.py, hash "+V.hash+", tables T1 to T13 (research, Appendix B).",
 "Slide 1: research sections 2, 9 and 11. Slide 2: sections 3 to 8 and 13 to 16.",
 "Slide 3: sections 2, 11, 13, 16 and 17. Slide 4: sections 19 to 21. Slide 5: sections 18 and 22 to 24.",
 "Reviews: 8,052 Play Store reviews of six meal-kit apps since January 2024 (research, Appendix C).",
 "Outside sources: 65 cited sources, listed in full in the research, Appendix A."].forEach((x,i)=>fine(p3,16,60+i*38,864,x));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }'''
# ---- generator, setup and sweeps for eight slides
rep("gen.py", "# ===== PERENNIAL GEN v1 =====", "# ===== HARVESTBOX DECK GEN v2 =====")
B["gen.py"] = B["gen.py"].replace("range(1, 8)", "range(1, 9)").replace("all 7 slides", "all 8 slides")
rep("setup.js", "all().length < 7", "all().length < 8")
B["setup.js"] = B["setup.js"].replace("slice(0, 7)", "slice(0, 8)").replace("slice(7)", "slice(8)").replace("exactly seven slides", "exactly eight slides")
rep("setup.js", '"06 Appendix", "07 Thank You"]', '"06 Appendix 1", "07 Appendix 2", "08 Thank You"]')
rep("_sweeps.js", '"SwasthyaGrid","NEXORA","Aakriti"', '"SwasthyaGrid","NEXORA","Aakriti","Perennial","Flex","reset","HelloFresh"')
for n, c in B.items():
    for bad in ("Perennial", "FLEX", "Flex ", "operating reset"):
        assert n == "_sweeps.js" or bad not in c, (n, bad)
if DRY:
    print("DECKJSON " + json.dumps(B, ensure_ascii=False))
else:
    for n, c in B.items(): io.open(D / n, "w", encoding="utf-8", newline="\n").write(c + "\n")
    print("v2 written", len(B), "files")
```
<!-- END FILE -->

## 15. Bootstrap

<!-- FILE: extract_deck.py -->
```python
import re, io, pathlib
CF = pathlib.Path(__file__).resolve().parent
t = io.open(CF / "DECK-PLAN.md", encoding="utf-8").read().replace("\r", "")
n = 0
for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S):
    if m.group(1).strip() == "extract_deck.py": continue
    p = CF / m.group(1).strip(); p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", p.relative_to(CF).as_posix(), len(m.group(2)))
for d in ("deck/build", "deck/shots", "deck/logos", "deck/derived"): (CF / d).mkdir(parents=True, exist_ok=True)
print("files", n)
```
<!-- END FILE -->
