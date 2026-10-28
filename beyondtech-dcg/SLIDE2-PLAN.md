# BeyondTech x DCG: slide 2 (executive summary), version 3

Working folder `BT/` = `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\beyondtech-dcg\`. `ROOT/` = its parent.
`PY` = `"C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" -X utf8`. Run every command from `BT/`.
Figma file `cpcsN7ytWMJputcohXOMgz`. The only slide rebuilt here is **S2, node `2:4`**. Nothing else in Figma changes.

Written 11 Oct 2026 by the lead (Opus). Executed by one Sonnet session, top to bottom, no subagents. The new slide
script embedded at the end has already run on the offline mock with the real Poppins and Inter glyph widths:
**0 issues, 0 warnings, 467 nodes (407 top level), 38,253 characters**, and its preview was rendered and reviewed.
The whole on-disk flow (steps S2 to S5) was also rehearsed in a scratch copy of `BT/`: extractor `files 1`, 11 slides
OK, preview written, `bind 2` wrote only slide 2's files, and the other ten build files stayed byte-identical.
The executor pastes and verifies; it does not design and never writes slide code by hand.

## 0. Context: why slide 2 is being rebuilt a third time

The redesign of slides 2, 3 and 5 (`BT/REDESIGN-PLAN.md`) is live and V1-clean. The user accepted slides 3 and 5
but says slide 2 "still somewhat just doesn't feel right and structured about the gut of the slide", and that, as the
first impression, it has to be the best slide in the deck.

What is structurally wrong with the live version (`deck/shots/s02.png`), stated plainly:
- **It answers one question, but the brief scores three.** The brief asks for a DTU GTM (30% of the score),
  college selection (25%) and a pan-India launch (25%). The live top band argues only DTU paid against organic.
  Selection is squeezed into a 4-bar chart in the bottom right corner, and the launch method (borrow a society's
  trust, seed a cohort, earn offers, hand over) does not appear at all.
- **There is no line from question to answer.** The NOT and THIS columns mix DTU reasons and campus reasons with no
  axis, so a judge cannot tell which reason answers which part of the brief.
- **The governing thought is buried.** "Distribute proof, not awareness" sits in the headline only; nothing on the
  slide states it as the single answer that everything below supports (Pyramid Principle, playbook P03).

What replaces it: a **storyline matrix**, the executive-summary form consulting firms use when a brief has several
scored asks.
1. **Governing thought** (navy strip, the one filled card at the top): OUR ANSWER, one sentence.
2. **Issue-tree spine** from that answer down the left edge, branching to three numbered questions.
3. **Three rows, one per scored ask of the brief**, each read left to right in the same five columns (symmetric
   treatment): THE BRIEF ASKS (with its score weight and the slides that prove it) → THE OBVIOUS MOVE (red cross,
   struck through, plus the number that kills it) → WHAT WE RECOMMEND (green tick) → THE PROOF (a different chart
   per row: 100% split bars, screen bars, a cash line) → THE RESULT (one giant numeral).
4. **IN TOTAL band** (rail): enrolment bridge 110 → 245, the twelve-month bear/base/bull table, founder hours 220 →
   196, and the dated first step.

The headline (`V.f2`), the ribbon, the counter and every number are unchanged. Only `deck/slides/s02.js` changes.

## 1. Locked rules (do not change)

| Topic | Rule |
|---|---|
| Scope | Rebuild node `2:4` only. Never rebind or rebuild any other slide. Only `deck/slides/s02.js` changes on disk, plus `build/slide_02.js`, `build/v1_02.js`, `build/v1_all.js`, `build/sweeps.js`, `build/slots.js` from `bind 2` |
| Headline | `V.f2`, unchanged: "₹5.3 lakh takes BeyondTech from 110 to 165 DTU enrolments and opens four new campuses in twelve months, by distributing proof before buying reach" |
| Moneyshot | Stays only on slide 5. Slide 2 has no node named `CARD: MONEYSHOT`; its cards are `CARD: answer` and `CARD: first step` |
| Design system | Palette, ink outlines, `cornerRadius` 0, Poppins/Inter, 22 pt floor (source 14 pt, `FINEPRINT` 16 pt exempt), `skelBT` ribbon, chip, counter, headline and source line |
| Copy | No em or en dashes, no `?` or `!`, no banned word, no coined label, never a bare "Harsh" |
| Numbers | All from `V` (`make_values.py` + `values_ext.py`) or constants already ruled in `DECK-PLAN.md` section 3: 50+ selections, 8 PDFs, 20 firms (site stats, 20 companies), 11 months (IIT calendar, C6), 40% off (A18), 31 October 2026 first step |
| Commits | None unless the user asks; if asked, never a Co-Authored-By trailer |

## 2. The argument, engineered with the `case-competition-deck` skill

Case type **marketing / go-to-market** (`references/case_types/marketing.md`) with a strategy component for campus
selection. Audience: DCG judges reading a leave-behind; their own playbook rewards answer-first (P03), titles that
tell the story (P04) and teaching something new (P01).

**Archetype H, adapted to the brief.** Archetype H (`references/archetypes.md`) is "should NOT [obvious] / should
[alternative], three reasons each". This brief has three scored asks, so each ask gets its own NOT/THIS pair: the
contrarian move is made three times, once per scored question, and every rejection carries the number that kills
it. This keeps H's required elements (opposite verdicts, three reasons, each a finding with a number) and adds the
one thing a judge scoring on 30/25/25 needs: where each part of the rubric is answered.

| Row | The brief asks (weight) | Obvious move, and the number that rejects it | What we recommend | Proof chart | Result |
|---|---|---|---|---|---|
| 1 | Grow DTU (30%) | Buy awareness with ads: cold Meta costs ₹12,963 per enrolment, more than the ₹12,000 fee (T3, A01) | Cheapest channels first: gate the 8 PDFs, society workshops, retarget only warm leads; 2 paid channels get ₹0 (T4) | 100% bars: organic is 21% of cash and 39% of enrolments | **165** enrolments at ₹2,131 each, up from 110 |
| 2 | Pick campuses (25%) | Enter the IITs: next season 11 months away, so 1 of 5 on calendar (C6, T8) | Follow the recruiters: seven weighted criteria led by overlap with the 20 firms that hire BeyondTech students | Screen bars: 25 with 600+ graduates, 10 with 4+ anchors, 4 picks, against 28 scored | **4 of 28**, stable in 97% or more of 2,000 draws (T9) |
| 3 | Enter campuses (25%) | Hire ambassadors first: cold ambassador posts drew 15 and 9 reactions, the intern post 269 (W13, W14) | Borrow trust, then earn it: society case competition, seed 20 at 40% off, ambassadors only from that cohort | Cash per campus line, base and bear, start → season 1 → season 2 (T10) | **₹45,000** opens a campus, cash positive in season 1 |

**Pyramid Principle.** The navy strip states the governing thought once; the spine makes the tree visible (answer →
three questions); each row is one supporting key line, and its proof chart is the evidence under it.

**Other skill patterns on this one slide.** Contrarian recommendation (rhetoric 1) three times; quantification at
every opportunity (rhetoric 11): every cell carries a number; three scenarios (rhetoric 5) in the twelve-month table;
pre-empting weakness (rhetoric 6): "the fee (A01) is an assumption" in the source line and "Bear is a stress case,
not a budget" under the table; defensive depth (rhetoric 8): every row names the slides that prove it; foreshadowing
(rhetoric 2): row 3 promises the launch method that slides 7 and 8 pay off; the moneyshot (rhetoric 12) is previewed
by row 1's 21% → 39% bars but stays a card only on slide 5.

## 3. Mandatory skill protocol for the executor

The skill is used three times, each with a written output in `BT/build-log.md`. It checks the slide; it does not
redesign it. A failed check is fixed only under section 7.

**K1, load (step S1).** Call the Skill tool with `skill: "case-competition-deck"` and read the loaded text. Then
Read, under `ROOT/.claude/skills/case-competition-deck/references/`: `archetypes.md` section H and "Reusable
patterns across all archetypes"; `rhetoric.md` sections 1, 3, 5, 6, 10, 11; `structure.md` section "I. Executive
Summary"; `critique_rubric.md` Phase 2. Pass test, written as the first lines of the log block: (1) archetype H's
required elements; (2) what symmetric treatment means and where this slide uses it; (3) why each rejected move on
this slide must carry a number.

**K2, slide-mode check (step S4 on the preview, step S7 on the Figma screenshot).** Fill this card, PASS or FAIL per
field, with what you saw:

| Field | Must show |
|---|---|
| Archetype | Navy OUR ANSWER strip; five column headers (THE BRIEF ASKS navy, THE OBVIOUS MOVE red, WHAT WE RECOMMEND green, THE PROOF, THE RESULT); three rows each with a red cross plus struck-through move and a green tick plus recommendation |
| Issue tree | A vertical ink spine from under the strip down the left edge with a tick into each numbered badge 1, 2, 3 |
| Symmetry | All three rows: badge, question title, "N% of the score", slide pointer; rejected move plus number; recommendation plus how; titled proof chart; numeral plus one line |
| Proof charts | Row 1 two 100% bars (21% / 79%, 39% / 61%); row 2 three screen bars on grey tracks (25, 10, 4); row 3 line chart with Base and Bear lines, ticks 0 and 8, labels Start, Season 1, Season 2 |
| Results | 165, 4 of 28, ₹45,000 in orange ExtraBold, the largest text in the matrix |
| IN TOTAL band | Rotated rail; waterfall 110, +55, +80, 245 labelled Today, DTU plan, New sites, Month 12; table 12 months × Bear/Base/Bull (168/245/330; ₹22.2/5.3/1.5 lakh; −₹15.9/11.3/38.2 lakh); hours bars 220 and 196; navy THE FIRST STEP card |
| Action title | `V.f2` unchanged, two lines |
| Source line | One line, 14 pt, bottom right |
| Type levels | 44 pt numerals, 24 pt answer label and band leads, 22 pt body and labels, 16 pt fine print, 14 pt source |
| Dead space | No empty region larger than about 150 x 150 px |

**K3, critique (step S9).** Follow `SKILL.md` "Critique mode workflow" with `critique_rubric.md`,
`case_types/marketing.md` and `BT/case/03-organiser-playbook-digest.md`. View all 11 screenshots in `deck/shots/`.
Append a section "Slide 2, version 3 (date)" to `BT/deck/critique.md`: what works, the seven rubric dimensions and
nine DCG dimensions rescored for the deck, top three issues with fixes that keep every number. Pass test: no
dimension under 4, and "slide clarity" and "storyline" at 5.

## 4. The slide, zone by zone (slide pixels, 1920 x 1080)

| Element | Box | Content |
|---|---|---|
| `skelBT` | as before | ribbon (SUMMARY active), EXECUTIVE SUMMARY chip, 1 / 8, headline `V.f2`, source line |
| `CARD: answer` | 64, 316, 1792 x 76, layered navy | "OUR ANSWER" gold Poppins 24; white Inter Bold 22, two lines |
| Column headers | y 402, columns at x 116, 381, 746, 1151, 1596 | Poppins Bold 22; ink rule at y 436 across x 116 to 1856 |
| Spine | x 83 to 86, y 400 to the third tick | ticks at each row's badge centre (y row + 20), x 84 to 116 |
| Rows | y 444, 570, 696; 126 high; dashed ink dividers at 566 and 692 | Q column 250 wide (badge, title, weight, slide pointer); rejected 350; recommend 390; proof 430; result 260 |
| `RAIL: IN TOTAL` | 64, 836, 40 x 194, orange | label rotated |
| `ZONE: bridge` | 116, 836, 500 x 194 | lead "110 to 245 enrolments in a year"; `waterfall` |
| `ZONE: twelve months` | 632, 836, 640 x 194 | lead "₹5.3 lakh over twelve months, three cases"; `TABLE: twelve months`, columns 164/158/158/158; fine print |
| `ZONE: founder hours` | 1288, 836, 284 x 194 | lead "Fewer founder hours"; `hBars` Today 220, After plan 196; fine print with capacity 1,040 |
| `CARD: first step` | 1579, 836, 270 x 187, layered navy | "THE FIRST STEP"; "By 31 October 2026: gate the 8 PDFs, publish a fee band, sign DCG and 180DC DTU." |

Helpers used, all already in the preamble or `deck/_x2.js` (unchanged): `skelBT`, `layered`, `TL`, `T`, `addBadge`,
`addEllipse`, `addDiagonalWire`, `addRect`, `dashedH`, `dashedV`, `segBar`, `lineChart`, `rail`, `zone`, `waterfall`,
`wrapTable`, `hBars`, `fine`. Two local helpers live inside the slide file: `mark` (tick or cross in a circle, drawn
with two wires) and `row`. Strikethrough is `textDecoration = "STRIKETHROUGH"` on the rejected-move title.

## 5. Execution sequence

| Step | Action | Done when |
|---|---|---|
| S0 | Read this plan once; read `ROOT/CLAUDE.md` section 7 | |
| S1 | Skill touchpoint K1 (section 3) | K1 answers written |
| S2 | `cp "C:/Users/harsh/.claude/plans/working-folder-beyondtech-dcg-dapper-axolotl.md" SLIDE2-PLAN.md`. Create `BT/extract_s02.py` with the Write tool from the `extract_s02.py` block at the end, character for character. Run `PY extract_s02.py` | Prints three "backed up" lines (or fewer if a backup already exists), `wrote deck/slides/s02.js` and `files 1` |
| S3 | `PY deck/gen.py pre`, then `PY deck/gen.py mock` | 11 lines OK; `s02 OK` about 38,253 characters, nodes total 467, top 407 |
| S4 | `PY deck/preview.py 2`; Read `deck/shots/preview_02.png`; K2 card | All PASS |
| S5 | `PY deck/gen.py bind 2` | Writes `build/slide_02.js`, `build/v1_02.js`, `v1_all.js`, `sweeps.js`, `slots.js` only |
| S6 | Figma build (section 6) | `warnings: []`, V1 `clean: true`, screenshot saved |
| S7 | K2 card again on `deck/shots/s02.png` against the preview | All PASS |
| S8 | `use_figma` with `deck/names.js`, then `build/sweeps.js`, then `build/v1_all.js` | Names restored; sweeps `moneyshot: 1`, `fontLow`, `copy`, `missing`, `presentBad` all empty, `slides: 11`; V1 all clean |
| S9 | Skill touchpoint K3 | Section appended to `deck/critique.md`; pass test met |
| S10 | Logs and memory (section 9) | |
| S11 | Report to the user (section 9) | |

## 6. Figma build (step S6)

Load tools with `ToolSearch` query `select:mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot`. Load the Figma
guidance with `ReadMcpResourceTool` (server `figma-mcp`, uri `skill://figma/figma-use/SKILL.md`; the Skill
`figma-use` is not installed). Pass `skillNames: "resource:figma-use"` on every `use_figma` call. File key
`cpcsN7ytWMJputcohXOMgz`.
1. Read-only check: `const s=await figma.getNodeByIdAsync("2:4"); return {name:s.name,children:s.children.length};`
2. Read `deck/build/slide_02.js` with the Read tool (437 lines, 38,254 characters; the previous executor read these files whole
   without trouble) and pass its full text, unchanged, as `code`. The script wipes the slide first, so a rerun is
   safe. Expect `{"results":[{"slide":"2:4","total":467,"top":407}],"warnings":[]}`.
3. `use_figma` with the full text of `deck/build/v1_02.js`. Expect `clean: true`.
4. `get_screenshot` node `2:4`, `maxDimension: 1920`; download with curl to `deck/shots/s02.png`; Read it; compare with
   `deck/shots/preview_02.png` region by region.
5. Look hardest at what the mock cannot see: the struck-through red titles (line through the text, not under it);
   the tick and cross glyphs inside their circles; the IN TOTAL rail label rotated and centred; the spine and its
   three ticks meeting the badges; the line chart's two lines and both end labels; the waterfall bars and values.

## 7. Fix rules (the only edits allowed)

| Code | Issue | Fix |
|---|---|---|
| F1 | Text overflow, wrap or overlap in V1 or the screenshot | Shorten copy through `deck/overrides.json` (`{"exact old text": "new text"}`, key must match `slides/s02.js` exactly). Drop an article or the least important clause; never a number, never below 22 pt, never a coined label. Then `PY deck/gen.py mock 2`, `PY deck/preview.py 2`, `PY deck/gen.py bind 2`, rebuild |
| F2 | A label touches a line or bar | Nudge it by at most 24 px through an override on its coordinate |
| F3 | Strikethrough missing or drawn as underline | Cosmetic; log it. The red cross and red colour already mark the move as rejected |
| F4 | Rail label not rotated or off its bar | Edit `deck/_x2.js`: `const RAILROT=true;` to `const RAILROT=false;`, then `bind 2` and rebuild slide 2 only (slides 3 and 5 are not rebound, so they keep their working rails) |
| F5 | Node 240 px off | A fragment was run; rerun the full build file |
| F6 | `Cannot use unloaded font` | Same: run the whole file |
| F7 | A number looks wrong | Stop and report; numbers change only through the model |
| F8 | Three failed attempts | Restore the previous version: `use_figma` with the full text of `deck/_backup_v2/slide_02.js`, then report |

Known false positives: `BACK:` rectangles under the two cards; ribbon punch-holes.

## 8. Verification (done when all hold)

1. `gen.py mock` 11 OK; only the five build files named in section 1 changed in `deck/build/`.
2. Figma: slide 2 `warnings: []`, V1 clean; `v1_all.js` clean; sweeps clean with `moneyshot: 1`; names restored.
3. K2 passed on preview and screenshot; K3 pass test met.
4. The slide answers all three scored asks of the brief, each in its own row, with the governing thought above them.

## 9. Logs, memory, report, recovery

**Logs (S10).** Append to `BT/build-log.md` a block "Slide 2, version 3": K1 answers, both K2 cards, node counts,
V1 and sweep results, fixes with before and after, residuals. In `BT/deck/figma.md`, replace the S2 line under
"Slide screenshots" with a two-line description of version 3. Insert as the first line of `BT/REDESIGN-PLAN.md`:
`> Slide 2 is superseded by SLIDE2-PLAN.md (11 Oct 2026); slides 3 and 5 stand.`

**Memory (S10).** The previous run was interrupted before its memory update, so do both now. Edit
`C:\Users\harsh\.claude\projects\c--Users-harsh-Desktop-HARSH-PPTS-CASE-STUDY-nsut-innovators-court\memory\project_beyondtech_dcg.md`:
add one short paragraph saying slides 3 and 5 were redesigned on 10 Oct 2026 (`REDESIGN-PLAN.md`) and slide 2 on
11 Oct 2026 (`SLIDE2-PLAN.md`, storyline matrix answering the brief's three scored asks), that `extract_deck.py`
must never be rerun, and that `deck/preview.py` renders an offline preview from real font metrics. Update the
`modified` date in its frontmatter. Leave `MEMORY.md` as is (its pointer line already covers the file).

**Report (S11).** Figma URL https://www.figma.com/slides/cpcsN7ytWMJputcohXOMgz; what slide 2 now shows in three or
four lines; critique scores; residuals; the unchanged reminder that logo and screenshot slots elsewhere are still
placeholders.

| Symptom | Action |
|---|---|
| `gen.py mock` fails after an override | Shorten further and rerun |
| `use_figma` timeout | Run the read-only check; rerun the same build file |
| Node counts differ a little from 467/407 | Fine if `warnings: []` and V1 is clean |
| The rebuilt slide cannot be fixed | F8: restore from `deck/_backup_v2/slide_02.js` |

---

# Embedded files

<!-- FILE: deck/slides/s02.js -->
```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 8","EXECUTIVE SUMMARY",380,V.f2,"Source: case brief B02 to B19 | beyondtech.org.in and LinkedIn, Oct 2026 (W13, W14) | college_scorecard.csv | model "+V.hash+", tables T3, T4, T8, T9, T10, T11, T12 | the fee (A01) is an assumption");
// ===== 1. GOVERNING THOUGHT: the answer, stated once, above everything =====
const a=layered(s,64,316,1792,76,C.primaryDeep,"CARD: answer");
TL(a,20,20,24,"OUR ANSWER",{color:C.accent});
T(a,220,11,1550,22,"Distribute proof, not awareness. BeyondTech's 50+ selections already sell the course; the plan carries that proof to earlier years at DTU and to four new Tier-1 campuses.",{family:"Inter",style:"Bold",color:C.white});
// ===== 2. STORYLINE MATRIX: the brief's three scored questions, one row each =====
const CX=[116,381,746,1151,1596], R=[444,570,696], RH=126;
[["THE BRIEF ASKS",C.primaryDeep],["THE OBVIOUS MOVE",C.alert],["WHAT WE RECOMMEND",C.good],["THE PROOF",C.primaryDeep],["THE RESULT",C.primaryDeep]]
.forEach((h,i)=>TL(s,CX[i],402,22,h[0],{color:h[1]}));
addRect(s,116,436,1740,2.5,C.ink);
// issue-tree spine from the answer to each question
addRect(s,83,400,3,R[2]+20-400,C.ink);
R.forEach(y=>addRect(s,84,y+18.5,32,3,C.ink));
[R[0]+RH-4,R[1]+RH-4].forEach(y=>dashedH(s,116,y,1740,C.ink,1.5));
const mark=(x,y,ok)=>{ addEllipse(s,x,y,28,28,ok?C.good:C.alert,C.ink,1.5);
  if(ok){ addDiagonalWire(s,x+7,y+14,x+12,y+20,C.white,3); addDiagonalWire(s,x+12,y+20,x+21,y+8,C.white,3); }
  else { addDiagonalWire(s,x+8,y+8,x+20,y+20,C.white,3); addDiagonalWire(s,x+20,y+8,x+8,y+20,C.white,3); } };
const row=(i,q,w,ref,no,noT,yes,yesT,num,lab)=>{ const y=R[i];
  addBadge(s,116,y+2,36,i+1,C.primaryDeep,C.white);
  const qt=T(s,162,y,204,22,q,{family:"Poppins",style:"Bold",color:C.primaryDeep});
  TL(s,162,y+qt.height+2,22,w+" of the score",{family:"Inter",style:"Bold",color:C.primary,maxW:204});
  TL(s,162,y+qt.height+31,22,ref,{family:"Inter",style:"Semi Bold",maxW:204});
  mark(CX[1],y+3,false); const nt=TL(s,CX[1]+38,y,22,no,{color:C.alert,maxW:312}); nt.textDecoration="STRIKETHROUGH";
  T(s,CX[1],y+38,350,22,noT);
  mark(CX[2],y+3,true); TL(s,CX[2]+38,y,22,yes,{color:C.good,maxW:352});
  T(s,CX[2],y+38,390,22,yesT);
  TL(s,CX[4],y-6,44,num,{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:260,min:30});
  T(s,CX[4],y+62,260,22,lab,{family:"Inter",style:"Bold"}); };
row(0,"GROW DTU","30%","Slides 3 to 5","Buy awareness with ads",
 "Cold Meta costs "+V.cold[0]+" per enrolment, more than the "+V.fee+" fee.",
 "Cheapest channels first",
 "Gate the 8 free PDFs, run society workshops, retarget only warm leads; 2 paid channels get ₹0.",
 V.enrol,"enrolments at "+V.cac+" each, up from "+V.now);
row(1,"PICK CAMPUSES","25%","Slide 6","Enter the IITs",
 "Their next season is 11 months away, so they score 1 of 5 on calendar.",
 "Follow the recruiters",
 "Seven weighted criteria, led by overlap with the 20 firms that hire BeyondTech students.",
 V.screen[3]+" of "+V.screen[0],"picks, stable in "+V.stab_min+" or more of 2,000 draws");
row(2,"ENTER CAMPUSES","25%","Slides 7 and 8","Hire ambassadors first",
 "Cold ambassador posts drew "+V.posts[2][1]+" and "+V.posts[3][1]+" reactions; the intern post drew "+V.posts[0][1]+".",
 "Borrow trust, then earn it",
 "Co-host a society case competition, seed "+V.cohort20+" at 40% off, pick ambassadors only from them.",
 V.cost1,"opens a campus, cash positive in season 1");
// proof 1: cash share against enrolment share (100% bars)
TL(s,CX[3],R[0],22,"Organic share of the DTU plan",{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:430});
[["Cash",V.split[0],V.split[1]],["Enrol.",V.split[2],V.split[3]]].forEach((b,j)=>{ const y=R[0]+38+j*42;
  TL(s,CX[3],y+3,22,b[0],{family:"Inter",style:"Bold"});
  segBar(s,CX[3]+84,y,346,34,[{v:b[1],c:C.primary,t:Math.round(b[1])+"%"},{v:b[2],c:C.primaryDeep,t:Math.round(b[2])+"%"}]); });
// proof 2: the screen, 28 colleges to 4 (bar length against the 28 scored)
TL(s,CX[3],R[1],22,"Screened from "+V.screen[0]+" colleges",{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:430});
[[V.screen[1],"with 600+ graduates",HG[3]],[V.screen[2],"with 4+ anchor firms",HG[4]],[V.screen[3],"picks",C.primary]].forEach((b,j)=>{ const y=R[1]+34+j*30, w=Math.max(12,150*b[0]/V.screen[0]);
  addRect(s,CX[3],y+4,150,22,C.surfaceAlt,C.ink,1);
  addRect(s,CX[3],y+4,w,22,b[2],C.ink,1.5);
  TL(s,CX[3]+162,y,22,b[0]+" "+b[1],{family:"Inter",style:"Bold",color:j===2?C.primary:C.ink,maxW:268}); });
// proof 3: cumulative cash per new campus, base against bear
TL(s,CX[3],R[2],22,"Cash per campus, ₹ lakh",{family:"Inter",style:"Bold",color:C.primaryDeep});
lineChart(s,CX[3],R[2]+24,430,104,[{values:V.cash_line[0],color:C.alert,label:"Bear"},{values:V.cash_line[1],color:C.primary,label:"Base"}],["Start","Season 1","Season 2"],{yMin:-1,yMax:9,yTicks:[0,8],padL:44,padR:84});
// ===== 3. IN TOTAL: twelve months, DTU plus four campuses =====
dashedH(s,64,826,1792,C.ink,2);
rail(s,64,836,194,"IN TOTAL",C.primary);
const z1=zone(s,116,836,500,194,"bridge");
TL(z1,0,0,24,V.now+" to "+V.total_enrol+" enrolments in a year",{color:C.primaryDeep,maxW:500});
waterfall(z1,0,24,500,170,[["a",V.bridge[0]],["b",V.bridge[1]],["c",V.bridge[2]],["d",V.bridge[3]]],{min:0,max:270,dp:0,labelH:34,labelDy:4,labels:["Today","DTU plan","New sites","Month 12"]});
dashedV(s,624,844,180,C.ink,2);
const z2=zone(s,632,836,640,194,"twelve months");
TL(z2,0,0,24,V.total_spend+" over twelve months, three cases",{color:C.primaryDeep,maxW:640});
wrapTable(z2,0,40,[164,158,158,158],["12 months","Bear","Base","Bull"],[["Enrolments"].concat(V.t12.map(r=>r[1])),["Spend"].concat(V.t12.map(r=>r[2])),["Contribution"].concat(V.t12.map(r=>r[3]))],{rowH:32,headerH:34,colors:[C.ink,C.alert,C.primaryDeep,C.good],name:"twelve months"});
fine(z2,0,174,640,"Bear is a stress case, not a budget (T6, T12).");
dashedV(s,1280,844,180,C.ink,2);
const z3=zone(s,1288,836,284,194,"founder hours");
TL(z3,0,0,24,"Fewer founder hours",{color:C.primaryDeep,maxW:284});
hBars(z3,0,40,284,[{label:"Today",value:V.hours[0],text:String(V.hours[0]),color:C.alert},{label:"After plan",value:V.hours[3],text:String(V.hours[3]),color:C.good}],{labelW:120,rowH:40,barH:26,valueW:52,max:V.hours[0]});
fine(z3,0,128,284,"Hours a year, of "+V.cap+" available (T11). Four more campuses, fewer hours.");
const c=layered(s,1579,836,270,187,C.primaryDeep,"CARD: first step");
TL(c,16,10,22,"THE FIRST STEP",{color:C.accent,maxW:238});
T(c,16,48,238,22,"By 31 October 2026: gate the 8 PDFs, publish a fee band, sign DCG and 180DC DTU.",{family:"Inter",style:"Bold",color:C.white});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```
<!-- END FILE -->

<!-- FILE: extract_s02.py -->
```python
"""Writes only deck/slides/s02.js from SLIDE2-PLAN.md, after backing up the live slide 2 files into deck/_backup_v2/.
It never reads DECK-PLAN.md or REDESIGN-PLAN.md. Run from anywhere: PY beyondtech-dcg/extract_s02.py"""
import re, io, pathlib, shutil
BT = pathlib.Path(__file__).resolve().parent
t = io.open(BT / "SLIDE2-PLAN.md", encoding="utf-8").read().replace("\r", "")
bk = BT / "deck" / "_backup_v2"; bk.mkdir(parents=True, exist_ok=True); n = 0
for rel in ("deck/slides/s02.js", "deck/build/slide_02.js", "deck/shots/s02.png"):
    p = BT / rel
    if p.exists() and not (bk / p.name).exists(): shutil.copy2(p, bk / p.name); print("backed up", rel)
for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S):
    rel = m.group(1).strip()
    if rel == "extract_s02.py": continue
    assert rel == "deck/slides/s02.js", "unexpected block: " + rel
    io.open(BT / rel, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", rel, len(m.group(2)))
assert n == 1
print("files", n)
```
<!-- END FILE -->
