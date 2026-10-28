# PART 4 (CURRENT TASK, 2026-10-20): HUMANIZE THE RESEARCH DOCUMENT AND THE DECK WITH THE `blader/humanizer` SKILL

## P4.0 Context

The user asked, pointing at `https://github.com/blader/humanizer.git`: "use this skill to humanise the written
content across the research and presentation." This project already bans em/en dashes, question/exclamation marks
and a buzzword list (`feedback_no_em_dash_no_hooks.md`, `CLAUDE.md` style contract), but Humanizer catches a wider,
deeper set of 26 AI-writing tells (Wikipedia's "Signs of AI writing"): not-X-but-Y contrasts, one-line closers,
forced triads, staged run-ups, passive voice, hyphenated-pair overuse, decorative bold/headings, borrowed authority,
chatbot residue, and more. A spot-read of `research/parts/part-A.md` §0.4 already found a live instance ("by design,
not by shortfall" — pattern #1, the reversed not-X-but-Y form) even though the doc passes every existing sweep, so
this is a real, additional pass, not a duplicate of work already done.

Two deliverables are in scope, both already built and gated by their own machinery that this work must not break:
1. **The research document**: `research/eurogrip-research.md` (131,224 words assembled, built from 6 writer files
   in `research/parts/part-A.md` to `part-F.md`, 4,616 lines total) plus the derived `.html` and `.pdf`.
2. **The deck**: the live Figma Slides file (`Yv5gClOIsJco4wR3fAhyxB`, 4 slides) plus its source of truth
   `deck/make_values.py`, `deck/slides/s0{1-4}.js`, `deck/slide-copy.md`.

The user already asked me to install the skill ("install the skill globally for my laptop") while I was still
researching in Plan Mode; that install is step H0 below and is the first thing executed once this plan is approved,
since Plan Mode blocks every non-read action including the install itself.

## P4.1 What "humanize" means here, and what stays untouched

The research document is dense with machine-generated content that is not prose and must never be rewritten:
tables, model numbers, citation tags (`[RA12]`, `[S123]`, `[C4-B14]`, `[A07]`, `[M c4.be]`, `[T4.3]`), the exact H2
action-title headings (already required to be declarative findings with a number, which is the *opposite* of an AI
tell, not an instance of one), and the structural `**Answer.**` opener and `### What this section establishes, and
what it does not` closer (mandated by `WRITER-BRIEF.md`, not drafting residue). Humanizer's own file-mode contract
already matches this: "Change prose only. Keep code blocks, inline code, commands, paths, YAML metadata, data, and
link targets unchanged." Here that extends to: table rows, the tag legend, every `[tag]`, every number, and the H2
titles and `**Answer.**`/closer scaffolding.

In scope: the **prose paragraphs** under each H2/H3 (the explanatory sentences between tables and tag-bearing
claims) across all six writer files, section 0's prose, and the glossary's definitions if they read as filler.

For the deck: the **short label and headline strings are findings, not filler** (action titles, panel titles, KPI
numerals, table cells) and are exempt — they are already dense, numbered, and pixel-budget-constrained via
`deck/metrics.json`. The **longer prose strings** are in scope: S1 subtitle, S1 verdict-card body text, S1
prepared-for line; S2 bullet items (`bl()` calls with lead + body), the repay line, the loop annotation lines; S3
appendix prose sentences (base-case note, pilot line, spend-identity note, kill note, benchmark note, validate
callout); S4 the THEREFORE line and the closing sentence. These are the only places a staged run-up, a forced triad,
or a one-line closer could actually appear in this deck's copy.

## P4.2 Step list

| Step | What | Done when |
|---|---|---|
| H0 | Install the skill globally: `npx skills add blader/humanizer --global --agent claude-code` (the `npx skills add` fallback, not the plugin-marketplace route, since it needs no specific Claude Code version and installs non-interactively) | command exits 0; `~/.claude/skills/humanizer` (or wherever the CLI places it) exists |
| H1 | Humanize `research/parts/part-A.md` through `part-F.md`, one file at a time, in writer-letter order, via the installed `/humanizer` skill in **file mode** | each file's prose rewritten; every tag/number/table/H2 title unchanged (grepped, see §P4.3); file's own self-check one-liner (word/table/dash/exclamation/placeholder counts) still clean |
| H2 | Re-run `PY research\assemble.py md` then `... pdf` | `ASSEMBLY PASS`; PDF opens and renders (Read tool on page 1 and 2 random pages) |
| H3 | Humanize the in-scope deck prose strings (§P4.1) by editing them directly in `deck\make_values.py` / `deck\slides\s02.js` / `s03.js` (S2, S3: rebuildable, go through the normal `gen.py pre` to `mock` to `bind` to `use_figma` pipeline) and via a **surgical idempotent `use_figma` text-edit script** for S1 and S4 (hand-finished, never rebuilt with `gen.py bind`, per the standing rule from Part 3 H0) | new strings written; every edited string re-measured against `deck/metrics.json` glyph widths before it is sent to Figma |
| H4 | Re-run deck sweeps (`sweeps.js`) and V1 on all four slides; re-screenshot; rebuild `deck\Eurogrip_Case4_preview.pdf`; update `deck\slide-copy.md` | sweeps clean, V1 clean, preview PDF 4 pages, slide-copy.md matches live text |
| Z | Build-log entries for H0 to H4; update `project_eurogrip_unstop.md` memory (humanizer pass applied, date) | done |

## P4.3 Safety net: proving nothing factual was lost

Before rewriting each research writer file, snapshot every `[tag]` it contains:
`grep -oE '\[(RA|RB|RC|RD|RE|RF|RG|RH|S|C1-B|C2-B|C3-B|C4-B|A|A1-|A2-|A3-|M |T)[0-9A-Za-z.]*\]' part-X.md | sort > before.txt`
(adjust the regex to the tag grammar already used in §0.2 of the document). After the rewrite, re-run the same grep
into `after.txt` and diff; any tag that disappears is a dropped citation and must be restored, per Humanizer's own
rule that a dropped fact is an error unless a tell explicitly calls for cutting it (tags are never filler, so none
should ever be cut). The same word/table/dash/exclamation/placeholder one-liner from Part 1 §4.4 is re-run after
every file.

For the deck, since `deck/metrics.json` already holds real glyph metrics (the same mechanism Part 2 used to
pre-size every string before writing Figma scripts), measure every rewritten string against its box width with the
same method before touching Figma, and only commit a rewrite that fits; if it does not fit, prefer the shorter
faithful rewrite Humanizer's own process already produces over truncating a longer one.

## P4.4 Risks

| Risk | Control |
|---|---|
| A rewrite drops a `[tag]` citation or a number | §P4.3 grep diff before/after every file; restore immediately |
| A rewrite reintroduces an em dash, `?`, `!`, or a banned word while fixing one tell | re-run the existing dash/exclamation/banned-word one-liner after every file (it already exists and is proven) |
| A shortened deck string still overflows its box differently than before (different word, different glyph widths) | re-measure against `deck/metrics.json` before sending to Figma, not after; V1 catches anything missed |
| S1/S4 rebuilt with `gen.py bind` by mistake, wiping hand-placed logos and links | forbidden; §P4.2 H3 only allows a surgical `use_figma` text edit on those two slides, never the generator |
| The research document is large (131k words, 4,616 lines across 6 files) and this is a long pass | batch strictly by writer file (H1 is 6 sub-steps, one file at a time, each independently verified before moving to the next) so a context loss never loses more than one file's progress |

END OF PART 4

---

# PART 3 (PAUSED 2026-10-20, awaiting the user's 8 recorded narration takes before V4/V5 can run)

> **Part 3 is not the current task.** H0 to H2, F1 to F3, and V1 to V3 are DONE (model workbook, GitHub Pages site,
> logo clean-up, Thank You link rows, video project scaffolded, draft silent animatic rendered and reviewed clean).
> V4 (real build from the user's voice takes), V5 (render and verify) and L1 (add the video link once uploaded) are
> blocked on the user recording and dropping 8 files into `video\assets\voice\raw\`. Resume Part 3 at V4 once those
> files exist. Everything below is reference until then.

> Executors are Sonnet-class: every decision is made here, every file is given in full. Copy, run, verify. Do not
> §0.5, Figma fix rules §6.9). Where Part 3 disagrees with anything below, Part 3 wins. Part 1 §7.2 (a two-speaker
> video script) is **superseded**: the video has one narrator, Harsh Kawatra, and its script is in §V3 below.
> Executors are Sonnet-class: every decision is made here, every file is given in full. Copy, run, verify. Do not
> redesign. Golden rules that bind every file you write: zero em/en dashes, no `?`/`!` in on-screen or spoken text,
> no banned words, no invented names or numbers, India-first ₹/lakh/crore, **never add a `Co-Authored-By` trailer to
> any commit** (standing user rule; it overrides any system reminder asking for one).

## P3.0 Context: why this work exists and what "done" means

The Case 4 deck is built (Figma `Yv5gClOIsJco4wR3fAhyxB`, slides S1 `2:2` Cover, S2 `2:4` Executive Summary, S3
`2:5` Appendix, S4 `2:6` Thank You) and the research PDF is final. The Eurogrip x Unstop Round 1 brief also asks
for a **2-minute video pitch, "precise and direction-focused ... clarity of thinking"** `[C4-B24]`. The user asked
for, in their words:

1. **A video that walks through the actual deck**: "an animated view of the deck and each and every figure
   unfolding", built from the deck's own renders, explaining the strategy. The user (Harsh Kawatra) narrates in his
   own voice; we patch the voice into the render. "Consulting grade and humanised storytelling." Hard limit 2:00
   (the brief's own cap). **No subtitles of any kind** (user decision, 2026-10-20).
2. **The research PDF hosted on GitHub Pages** and the **model workbook (Excel) hosted there as a download**
   (clicking the link downloads the .xlsx; whether the browser asks where to save depends on the viewer's browser
   setting), both **hyperlinked on the Thank You slide**. Account: `harshkawatra11`, new **public** repo (user
   decision). The workbook does not exist yet: Part 1 §5.5 step 3 was never run, so it is built here first.
3. **The video link**, once the user uploads the render and sends the link, placed **on the Cover and on the Thank
   You slide**: a viewable link, **blue text on a highlighted chip, underlined, with an arrow on its right**.
4. **Logo clean-up on S1 and S4**: remove the box (stroke and fill) around **every** logo; on the top band of both
   slides (Eurogrip, Unstop, DTU) also **pull the three logos close together** once the boxes are gone.

Done = workbook built and verified; site live on Pages with both files reachable; S1/S4 logos de-boxed and the top
band re-spaced; Thank You carries clickable PDF and workbook rows; video rendered at 1920x1080, ≤ 120.0 s, voice
patched, approved by the user in the Studio preview; after the user sends the video link, the Cover chip and the
Thank You video row exist and are clickable; build-log and memory updated.

### P3.0.1 Facts gathered at planning time (verified, do not re-derive)

| Fact | Value |
|---|---|
| Harsh's measured narration pace | **164 words a minute** (Pukaar voiceover: 275 words in 100.9 s, `videos/pukaar-launch/assets/whisper_transcript.json`). Pukaar's script was written for 80 s and the real voice ran 101 s, so **scene timing is driven by the real takes, never by estimates**. |
| Proven video pipeline on this machine | HyperFrames, `videos/pukaar-launch/` (root `index.html` mounts `compositions/frames/*.html` sub-compositions; each is a `<template>` with one root `data-composition-id` and one paused GSAP timeline registered on `window.__timelines`; user voice as `<audio data-track-index="20">`), pinned `hyperframes@0.8.19`. |
| Tools | `ffmpeg` 8.1.1 on PATH; `whisper` (openai-whisper) under the default `python` (3.14); `node`/`npx`; `PY` = `"C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" -X utf8` (PIL, openpyxl, fitz). |
| Fonts for the video | `C:\Users\harsh\AppData\Local\Microsoft\Windows\Fonts\` has `Poppins-Bold.ttf`, `Poppins-ExtraBold.ttf`, `Inter-Bold.ttf`, `Inter-SemiBold.ttf`. |
| Optional music bed | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform\demo-video\audio\music\bed.wav` (used in the user's own SwasthyaGrid demo video). |
| GitHub | `gh` logged in; active account `harshkawatra11` (scopes repo, workflow). A second account `ranvirkawatraaa` exists; do not use it. |
| Figma hyperlink method | `node.hyperlink = {type:"URL", value}` in try/catch, set on the text and its frame (BeyondTech precedent, plan `working-folder-beyondtech-dcg-dapper-axolotl.md`). For part of a text: `t.setRangeHyperlink(0, t.characters.length, {...})`. |
| High-res slide renders | `mcp__figma-mcp__download_assets` with `defaultFormat:"png"`, `defaultScale:3` returns an `export` URL for a node (5760x3240 for a slide). `get_screenshot` caps at 1920 wide and must not be used for video assets. |
| Link string widths (Inter Bold 22, real metrics) | `harshkawatra11.github.io/eurogrip-case4/Eurogrip_Research.pdf  →` 742 px; `.../Eurogrip_Model.xlsx  →` 714 px. Link chip text area is 776 px, so both fit. |
| S1/S4 are hand-finished live | B11 uploaded logos into live slots on S1 and S4. **Never re-run `gen.py bind` + the slide build for S1 or S4** (the build script wipes the slide and would delete the logos). All S1/S4 changes in Part 3 are surgical, idempotent `use_figma` edits. Log this in DECISIONS.md (step H0). |

## P3.1 Step list (strict order; one executor; Figma calls strictly sequential)

| Step | What | Done when |
|---|---|---|
| H0 | Copy this plan over `EG\PLAN.md`; append to `EG\DECISIONS.md`: `2026-10-20 \| H0 \| Part 3: video, Pages hosting, links, logo clean-up. S1 and S4 are live-finished (logos, links): never rebuild them with gen.py bind; edit surgically only \| user request` | copied, logged |
| H1 | Write `EG\model\build_excel.py` (§H1), run it, run its verify one-liner | `Eurogrip_Model.xlsx` exists; verify prints `WORKBOOK OK` |
| H2 | Build the site folder `EG\site\` (§H2), create the public repo, enable Pages, wait for the build, verify both URLs | both URLs return HTTP 200 with the right content types |
| F1 | Logo clean-up on S1 and S4 (§F1 script), then screenshot S1 and S4 and Read them | every LOGO frame has no stroke and no fill (except the hub logo plate, §F1), top band logos sit 28 px apart |
| F2 | Thank You link rows for the PDF and the workbook (§F2 script with `LINKS` filled), screenshot S4 and Read it | two blue link rows visible, closing line moved to y 908 |
| F3 | Re-run the deck sweeps (`deck\build\sweeps.js`) and V1 on S1 and S4 only (`deck\build\v1_01.js`, `v1_04.js`); refresh `deck\shots\hi_s01.png`, `hi_s04.png`; rebuild `deck\Eurogrip_Case4_preview.pdf` (Part 1 §6.7 D6 one-liner) | sweeps clean, V1 clean, preview PDF 4 pages |
| V1 | Scaffold the video project (§V1) and write every file in §V2 to §V8 | files exist; `npx hyperframes lint` runs |
| V2 | Download the four slide renders at scale 3, dump node geometry, run `tools/check_layers.py`, run `tools/prep.py` (§V5) | `check_layers` prints `LAYERS OK`; crops and skeletons written |
| V3 | Silent animatic: `python tools/build.py --draft`, `npx hyperframes check`, contact sheet, open the Studio preview; send the user the script (§V3) and the recording instructions (§V3.2) | user has the script; animatic reviewed by the executor |
| V4 | **Wait for the user's 8 takes** in `video\assets\voice\raw\`. Then `python tools/audio.py` (gate ≤ 119.5 s), optional bed (§V7), `python tools/build.py`, `npx hyperframes check`, contact sheet, open Studio preview, **ask the user to approve before rendering** | user approves |
| V5 | Render, verify (§V8), copy to `EG\round1\IdeaForge_Eurogrip_Case4_Video.mp4`, tell the user the file path and ask for the uploaded link | video verified |
| L1 | When the user sends the video link: §L1 script (Cover chip + Thank You third row), site landing page video card (§L1.3), push, screenshots, preview PDF | Cover and Thank You show the blue video link; site shows the video card |
| Z | build-log entry for every step above; update memory `project_eurogrip_unstop.md` (video file path, Pages URLs, repo, Cover/Thank You links, de-boxed logos, S1/S4 never-rebuild rule) | done |

## §H1 The model workbook: `EG\model\build_excel.py`

Write exactly, then run `PY "EG\model\build_excel.py"`.

```python
"""Build Eurogrip_Model.xlsx from model_outputs.json, model_tables.md and inputs/assumptions.csv.
  PY eurogrip-case/model/build_excel.py
Sheets: README, Assumptions, Case4_Summary, Case4_BreakEven_Live (live Excel formulas that rebuild the break-even
and check it against the Python model), T1 to T20 (every model table), Risks, Checks. No em or en dashes."""
import csv, io, json, pathlib, re
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Border, Side, Alignment
from openpyxl.utils import get_column_letter

M = pathlib.Path(__file__).resolve().parent
O = json.load(io.open(M / "model_outputs.json", encoding="utf-8"))
SC = ("bear", "base", "bull")
HEADF = PatternFill("solid", fgColor="DCE4F0"); INF = PatternFill("solid", fgColor="FFF4CC")
HB = Font(bold=True, color="111111"); TF = Font(bold=True, size=16, color="184898"); NB = Font(bold=True)
thin = Side(style="thin", color="9CA3AF"); BOX = Border(left=thin, right=thin, top=thin, bottom=thin)
wb = Workbook(); wb.remove(wb.active)


def sheet(name, title):
    ws = wb.create_sheet(name); ws["A1"] = title; ws["A1"].font = TF; return ws


def table(ws, r0, heads, rows):
    for j, h in enumerate(heads, 1):
        c = ws.cell(r0, j, h); c.font = HB; c.fill = HEADF; c.border = BOX
    for i, row in enumerate(rows, r0 + 1):
        for j, v in enumerate(row, 1):
            c = ws.cell(i, j, v); c.border = BOX
    return r0 + len(rows)


def widths(ws, ws_):
    for i, w in enumerate(ws_, 1):
        ws.column_dimensions[get_column_letter(i)].width = w


def num(s):
    t = str(s).strip().replace(",", "").replace("₹", "").replace("−", "-")
    return float(t) if re.fullmatch(r"-?\d+(\.\d+)?", t) else s


c4 = O["c4"]; A = O["A"]

# README
ws = sheet("README", "Eurogrip Case Study 4: model workbook")
lines = ["Team IdeaForge: Harsh Kawatra, Delhi Technological University.",
         "Prepared for the Eurogrip x Unstop Collaboration, Case Study 4.",
         f"Single source of truth: eurogrip_model.py. Model hash {O['meta']['hash']}, run {O['meta']['run_at']}.",
         "This workbook renders the model's outputs. One sheet, Case4_BreakEven_Live, rebuilds the break-even with live",
         "Excel formulas from editable inputs (yellow cells) and checks itself against the Python result.",
         "", "Sheet guide:",
         "Assumptions: all 130 assumptions, bear, base and bull, with units, basis and source IDs.",
         "Case4_Summary: the Case 4 headline outputs by scenario.",
         "Case4_BreakEven_Live: change any yellow cell to see the break-even move.",
         "T1 to T20: every model table (T1 to T12 Case 4, T13 to T15 Case 1, T16 and T17 Case 2, T18 to T20 Case 3).",
         "Risks: the Case 4 risk register with probability, impact and control.",
         "Checks: the model's own internal checks, all of which must read TRUE.",
         "", "Bear is the value least favourable to the recommendation; bull the most favourable."]
for i, line in enumerate(lines, 3):
    ws.cell(i, 1, line)
widths(ws, [120])

# Assumptions
ws = sheet("Assumptions", "Assumptions register (bear, base, bull)")
rows = []
for r in csv.DictReader(io.open(M / "inputs" / "assumptions.csv", encoding="utf-8-sig")):
    rows.append([r["id"], r["case"], r["label"], num(r["bear"]), num(r["base"]), num(r["bull"]), r["unit"], r["basis"], r["source_ids"]])
table(ws, 3, ["ID", "Case", "Assumption", "Bear", "Base", "Bull", "Unit", "Basis", "Sources"], rows)
widths(ws, [9, 6, 58, 11, 11, 11, 14, 90, 22])

# Case4_Summary
ws = sheet("Case4_Summary", "Case 4 headline outputs by scenario")
S = lambda k: [c4[k][s] for s in SC]
rows = [["Relevant unit revenue, ₹ crore"] + S("bu_rev_cr"),
        ["Budget share of unit revenue, %"] + [A["A02"][s] for s in SC],
        ["Budget envelope, ₹ crore"] + S("envelope_cr"),
        ["Programme spend, ₹ crore"] + S("spend_cr"),
        ["Spend as % of unit revenue"] + S("spend_share_pct"),
        ["Member shops, lakh"] + S("members_lakh"),
        ["Cost per member a year, ₹"] + S("cost_per_member"),
        ["Contribution per tyre, ₹"] + S("cpt"),
        ["Break-even extra tyres per member shop a year"] + S("be"),
        ["One extra tyre every (weeks)"] + S("weeks")]
rows = [[r[0]] + [round(v, 3) for v in r[1:]] for r in rows]
end = table(ws, 3, ["Output", "Bear", "Base", "Bull"], rows)
cs = c4["cash_scheme"]
table(ws, end + 3, ["The obvious cash-per-tyre scheme (base)", "Value"],
      [["Annual cost, ₹ crore", round(cs["cost_cr"], 2)], ["Share of spend on tyres that sell anyway, %", round(cs["deadweight_pct"], 1)],
       ["Tyres rewarded, lakh", round(cs["rewarded_units_lakh"], 2)]])
widths(ws, [50, 14, 14, 14])

# Case4_BreakEven_Live (live formulas)
ws = sheet("Case4_BreakEven_Live", "Break-even, rebuilt with live formulas (edit the yellow cells)")
heads = ["Item", "Bear", "Base", "Bull", "How it is computed"]
for j, h in enumerate(heads, 1):
    c = ws.cell(3, j, h); c.font = HB; c.fill = HEADF; c.border = BOX
inputs = [("Weighted replacement tyre MRP, ₹", "A27", "assumption A27"), ("GST on two-wheeler tyres, %", "A28", "assumption A28"),
          ("Channel margin on ex-GST price, %", "A29", "assumption A29"), ("Contribution margin, %", "A30", "assumption A30")]
r = 4
for label, k, how in inputs:
    ws.cell(r, 1, label).border = BOX
    for j, s in enumerate(SC, 2):
        c = ws.cell(r, j, A[k][s]); c.fill = INF; c.border = BOX
    ws.cell(r, 5, how).border = BOX; r += 1
for label, k, how in [("Programme spend, ₹ crore", "spend_cr", "model output c4.spend_cr"), ("Member shops, lakh", "members_lakh", "model output c4.members_lakh")]:
    ws.cell(r, 1, label).border = BOX
    for j, s in enumerate(SC, 2):
        c = ws.cell(r, j, round(c4[k][s], 6)); c.fill = INF; c.border = BOX
    ws.cell(r, 5, how).border = BOX; r += 1
# r is now 10
f = [("Net realisation per tyre, ₹", "={c}4/(1+{c}5/100)*(1-{c}6/100)", "MRP / (1 + GST) x (1 - channel margin)"),
     ("Contribution per tyre, ₹", "={c}10*{c}7/100", "net realisation x contribution margin"),
     ("Break-even extra tyres per shop a year", "=({c}8*10000000)/({c}9*100000)/{c}11", "spend / members / contribution per tyre"),
     ("One extra tyre every (weeks)", "=52/{c}12", "52 / break-even"),
     ("Break-even from the Python model", None, "model output c4.be"),
     ("Check", '=IF(ABS({c}12-{c}14)<0.01,"MATCHES MODEL","CHECK")', "live formula vs model")]
for i, (label, expr, how) in enumerate(f):
    rr = 10 + i
    ws.cell(rr, 1, label).font = NB; ws.cell(rr, 1).border = BOX
    for j, s in enumerate(SC, 2):
        col = get_column_letter(j)
        v = round(c4["be"][s], 6) if expr is None else expr.format(c=col)
        c = ws.cell(rr, j, v); c.border = BOX
    ws.cell(rr, 5, how).border = BOX
widths(ws, [44, 14, 14, 14, 44])
# Python replica of the formulas, so the workbook is proven before Excel ever opens it
for s in SC:
    net = A["A27"][s] / (1 + A["A28"][s] / 100) * (1 - A["A29"][s] / 100); cpt = net * A["A30"][s] / 100
    be = c4["spend_cr"][s] * 1e7 / (c4["members_lakh"][s] * 1e5) / cpt
    assert abs(be - c4["be"][s]) < 0.01, (s, be, c4["be"][s])

# T1 to T20 from model_tables.md
md = io.open(M / "model_tables.md", encoding="utf-8").read()
for block in re.split(r"\n(?=## T\d+\. )", md)[1:]:
    lines_ = block.strip().splitlines(); title = lines_[0][3:].strip(); tid = title.split(".")[0]
    tab = [l for l in lines_ if l.startswith("|")]
    src = next((l.strip("*") for l in lines_ if l.startswith("*Source")), "")
    cells = [[c.strip() for c in l.strip("|").split("|")] for l in tab]
    heads, body = cells[0], [[num(c) for c in row] for row in cells[2:]]
    ws = sheet(tid, title)
    end = table(ws, 3, heads, body)
    ws.cell(end + 2, 1, src)
    widths(ws, [48] + [16] * (len(heads) - 1))

# Risks
ws = sheet("Risks", "Case 4 risk register (probability and impact on a 1 to 3 scale)")
table(ws, 3, ["ID", "Risk", "P", "I", "P x I", "Control"],
      [[x["id"], x["risk_long"], x["p"], x["i"], x["p"] * x["i"], x["control_long"]] for x in c4["risks"]])
widths(ws, [6, 70, 5, 5, 7, 90])

# Checks
ws = sheet("Checks", "Model internal checks")
table(ws, 3, ["Check", "Result"], [[k, bool(v)] for k, v in O["checks"].items()] + [[f"flag: {k}", bool(v)] for k, v in O["flags"].items()])
widths(ws, [48, 12])

out = M / "Eurogrip_Model.xlsx"; wb.save(out); print("wrote", out)
```

Verify (paste output into the build-log):

```
PY -c "import openpyxl;wb=openpyxl.load_workbook(r'EG\model\Eurogrip_Model.xlsx');n=wb.sheetnames;print(n);assert len([s for s in n if s.startswith('T')])==20 and 'Case4_BreakEven_Live' in n;ws=wb['Case4_BreakEven_Live'];print(ws['C12'].value, ws['C15'].value);print('WORKBOOK OK')"
```

Expected: 28 sheets (README, Assumptions, Case4_Summary, Case4_BreakEven_Live, T1 to T20, Risks, Checks), `C12` is the
formula `=(C8*10000000)/(C9*100000)/C11`, `C15` the IF formula, then `WORKBOOK OK`. Open nothing in Excel (not
required); the in-script Python replica assert already proves the formulas reproduce 11.7 / 4.4 / 2.2.

## §H2 GitHub Pages site: `EG\site\`

1. Create `EG\site\` and copy in: `EG\research\eurogrip-research.pdf` → `EG\site\Eurogrip_Research.pdf`;
   `EG\model\Eurogrip_Model.xlsx` → `EG\site\Eurogrip_Model.xlsx`. Create an empty `EG\site\.nojekyll`.
2. Write `EG\site\index.html` exactly:

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Eurogrip Case Study 4 | Team IdeaForge</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@600;700&display=swap" rel="stylesheet">
<style>
:root{--blue:#184898;--ink:#111111;--yellow:#FFC20E;--tint:#DCE4F0;--link:#1D4ED8}
*{box-sizing:border-box;margin:0}
body{font-family:Inter,system-ui,sans-serif;color:var(--ink);background:#fff;padding:48px 16px}
main{max-width:880px;margin:0 auto}
.chip{display:inline-block;background:var(--ink);color:#fff;font:700 15px Poppins,sans-serif;letter-spacing:.04em;padding:8px 14px;border:2px solid var(--ink);box-shadow:5px 5px 0 var(--yellow)}
h1{font:800 clamp(32px,5vw,52px)/1.1 Poppins,sans-serif;margin:26px 0 10px}
h1 span{color:var(--blue)}
.lead{font-size:18px;line-height:1.55;margin-bottom:34px}
.card{display:flex;justify-content:space-between;align-items:center;gap:18px;border:2px solid var(--ink);box-shadow:7px 7px 0 var(--yellow);padding:20px 22px;margin-bottom:24px;background:#fff}
.card h2{font:700 20px Poppins,sans-serif;margin-bottom:4px}
.card p{font-size:15px;line-height:1.45;color:#333}
.card a{flex:none;font-weight:700;color:var(--link);background:var(--tint);border:2px solid var(--link);padding:10px 16px;text-decoration:underline}
footer{margin-top:38px;font-size:14px;line-height:1.5;color:#444}
@media (max-width:640px){.card{flex-direction:column;align-items:flex-start}}
</style>
</head>
<body>
<main>
<span class="chip">EUROGRIP × UNSTOP | CASE STUDY 4</span>
<h1>Mechanic advocacy <span>for Eurogrip</span></h1>
<p class="lead">Pay for the advice, not the stock, and pay in tools and status rather than cash. Team IdeaForge: Harsh Kawatra, Delhi Technological University.</p>
<div class="card"><div><h2>Research document</h2><p>All four Eurogrip cases solved in 140 pages, every number sourced (PDF, 7.8 MB).</p></div><a href="Eurogrip_Research.pdf">Open the PDF →</a></div>
<div class="card"><div><h2>Model workbook</h2><p>The model behind every figure, with a live break-even sheet you can edit (Excel).</p></div><a href="Eurogrip_Model.xlsx" download>Download the workbook →</a></div>
<!--VIDEO-CARD-->
<footer>Model hash b1125880f5. Brand names and logos belong to their owners; no partnership is implied.</footer>
</main>
</body>
</html>
```

3. Commands (Git Bash, from `EG\site`; the folder is a brand-new repo of its own):

```
gh auth status            # confirm "Active account: true" is on harshkawatra11; if not: gh auth switch --user harshkawatra11
git init -b main
git add index.html .nojekyll Eurogrip_Research.pdf Eurogrip_Model.xlsx
git commit -m "Publish the Eurogrip Case 4 research document and model workbook"
gh repo create harshkawatra11/eurogrip-case4 --public --source . --push --description "Team IdeaForge: Eurogrip x Unstop Case Study 4, research document and model workbook"
gh api -X POST repos/harshkawatra11/eurogrip-case4/pages -f "source[branch]=main" -f "source[path]=/"
```

   Commit message has **no co-author trailer**. Do not set git config; the existing global identity is used.
4. Wait for the Pages build with the Monitor tool (until-loop, no sleeps in Bash):
   `until [ "$(gh api repos/harshkawatra11/eurogrip-case4/pages/builds/latest --jq .status 2>/dev/null)" = "built" ]; do sleep 10; done; echo BUILT`
5. Verify (paste into build-log):

```
curl -sI https://harshkawatra11.github.io/eurogrip-case4/Eurogrip_Research.pdf | grep -i -E "^HTTP|content-type"
curl -sI https://harshkawatra11.github.io/eurogrip-case4/Eurogrip_Model.xlsx | grep -i -E "^HTTP|content-type"
curl -s https://harshkawatra11.github.io/eurogrip-case4/ | grep -c "Model workbook"
```

   Expected: `HTTP/2 200` with `application/pdf`; `HTTP/2 200` with
   `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` (browsers download this type rather than
   display it); the landing page count `1`. Record the three URLs in `EG\deck\links.json`:

```json
{"research": "https://harshkawatra11.github.io/eurogrip-case4/Eurogrip_Research.pdf",
 "workbook": "https://harshkawatra11.github.io/eurogrip-case4/Eurogrip_Model.xlsx",
 "site": "https://harshkawatra11.github.io/eurogrip-case4/",
 "video": ""}
```

   If the Pages API call fails with "already exists", continue. If the build status is `errored`, read
   `gh api repos/harshkawatra11/eurogrip-case4/pages/builds/latest` and report; do not retry blindly.

## §F1 Logo clean-up on S1 and S4 (one `use_figma`, fileKey `Yv5gClOIsJco4wR3fAhyxB`, skillNames `figma-use`)

What it does: every frame named `LOGO: ...` on S1 (`2:2`) and S4 (`2:6`) loses its stroke, fill and dash pattern
and is shrink-wrapped to its uploaded `IMG` rectangle (the logo keeps its exact on-screen position). The hub logo
inside the black circle on S1 (the `LOGO: Eurogrip` frame whose parent is the mind-map panel and whose centre lies
within 60 px of the hub centre, panel-local (328, 404)) keeps a **white plate with no stroke** and 6 px padding,
because a dark logo on the black hub would vanish (tell the user this in the hand-off). Then the three top-band
logos (direct slide children with `y < 130`) are laid out left to right from x 696 with a 28 px gap, vertically
centred on y 76. Idempotent: running it twice gives the same result.

```js
const out = [];
for (const sid of ["2:2", "2:6"]) {
  const s = await figma.getNodeByIdAsync(sid);
  const slots = s.findAll(n => n.type === "FRAME" && n.name.startsWith("LOGO: "));
  for (const f of slots) {
    const img = f.children.find(c => c.name === "IMG");
    if (!img) { out.push({ sid, name: f.name, skipped: "no IMG child" }); continue; }
    const p = f.parent;
    const isHub = sid === "2:2" && p && p.type === "FRAME" && p.name.startsWith("PANEL:") &&
      Math.abs(f.x + f.width / 2 - 328) < 60 && Math.abs(f.y + f.height / 2 - 404) < 60;
    const ax = f.x + img.x, ay = f.y + img.y, w = img.width, h = img.height;
    f.strokes = []; try { f.dashPattern = []; } catch (e) {}
    if (isHub) {
      f.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
      f.resize(w + 12, h + 12); f.x = ax - 6; f.y = ay - 6; img.x = 6; img.y = 6;
    } else {
      f.fills = []; f.resize(w, h); f.x = ax; f.y = ay; img.x = 0; img.y = 0;
    }
    f.children.filter(c => c.type === "TEXT").forEach(c => c.remove());
    out.push({ sid, name: f.name, hub: isHub, x: Math.round(f.x), y: Math.round(f.y), w: Math.round(f.width), h: Math.round(f.height) });
  }
  const top = s.children.filter(n => n.type === "FRAME" && n.name.startsWith("LOGO: ") && n.y < 130).sort((a, b) => a.x - b.x);
  let x = 696;
  for (const f of top) { f.x = Math.round(x); f.y = Math.round(76 - f.height / 2); x += f.width + 28; }
  out.push({ sid, topBand: top.map(f => ({ name: f.name, x: f.x, w: Math.round(f.width) })) });
}
return out;
```

Check the return: S1 lists 13 LOGO frames (3 top band, 5 mind-map logos including the hub, 5 crests), S4 lists 3;
no `skipped` rows (a `skipped` row means that slot never got a logo: report it, do not invent one); the top band's
three logos end before x 1500 (the team chip starts at 1556). Then `get_screenshot` of `2:2` and `2:6`
(maxDimension 1600), download each with `curl -sL -o`, Read them, and confirm: no boxes around any logo, the three
top logos sit close together on one line, the hub logo is readable on its white plate, crest captions still sit
under their logos.

## §F2 Thank You link rows (one `use_figma`)

Before running, replace `__LINKS__` with the exact JSON of `EG\deck\links.json` (one line). The script removes the
three dashed `IMG: link: ...` placeholder frames on S4, removes any earlier `LINKROW:` nodes (idempotent), moves the
closing sentence to y 908, and builds one row per non-empty link in this fixed order and slot: research y 728,
workbook y 784, video y 840. Each row: a dark label chip (300x44 at x 410, Poppins Bold 22, white) and a link chip
(808x44 at x 722, fill `#DCE4F0`, 2 px stroke `#1D4ED8`) with the URL (scheme removed) in Inter Bold 22 `#1D4ED8`,
underlined, followed by two spaces and `→`; hyperlink set on the text, the link chip and the label chip. If a URL
does not fit the 776 px text area, the chip shows `Open the <label in lower case>  →` instead (still linked).

```js
const LINKS = __LINKS__;
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Inter",style:"Bold"},{family:"Inter",style:"Semi Bold"}].map(f => figma.loadFontAsync(f)));
const INK = {r:0.039,g:0.039,b:0.039}, DARK = {r:0.067,g:0.067,b:0.067}, WHITE = {r:1,g:1,b:1};
const TINT = {r:0.863,g:0.894,b:0.941}, BLUE = {r:0.114,g:0.306,b:0.847};
const s = await figma.getNodeByIdAsync("2:6");
s.children.filter(n => n.name.startsWith("IMG: link:") || n.name.startsWith("LINKROW:")).forEach(n => n.remove());
const closing = s.children.find(n => n.type === "TEXT" && n.characters.startsWith("The research document and the model back"));
if (closing) closing.y = 908;
function link(n, url) { try { n.hyperlink = { type: "URL", value: url }; } catch (e) {} }
function row(key, label, url, y) {
  const lab = figma.createFrame(); s.appendChild(lab); lab.resize(300, 44);
  lab.fills = [{type:"SOLID",color:DARK}]; lab.strokes = [{type:"SOLID",color:INK}]; lab.strokeWeight = 2; lab.cornerRadius = 0;
  lab.x = 410; lab.y = y; lab.name = "LINKROW: " + key + " label";
  const lt = figma.createText(); lab.appendChild(lt);
  lt.fontName = {family:"Poppins",style:"Bold"}; lt.fontSize = 22; lt.characters = label; lt.fills = [{type:"SOLID",color:WHITE}];
  lt.resize(284, 44); lt.textAutoResize = "NONE"; lt.textAlignHorizontal = "CENTER"; lt.textAlignVertical = "CENTER"; lt.x = 8; lt.y = 0;
  const chip = figma.createFrame(); s.appendChild(chip); chip.resize(808, 44);
  chip.fills = [{type:"SOLID",color:TINT}]; chip.strokes = [{type:"SOLID",color:BLUE}]; chip.strokeWeight = 2; chip.cornerRadius = 0;
  chip.x = 722; chip.y = y; chip.name = "LINKROW: " + key + " link";
  const t = figma.createText(); chip.appendChild(t);
  t.fontName = {family:"Inter",style:"Bold"}; t.fontSize = 22; t.fills = [{type:"SOLID",color:BLUE}];
  let shown = url.replace(/^https?:\/\//, "");
  t.characters = shown + "  →"; t.textAutoResize = "WIDTH_AND_HEIGHT";
  if (t.width > 776) { shown = "Open the " + label.toLowerCase(); t.characters = shown + "  →"; }
  t.setRangeTextDecoration(0, shown.length, "UNDERLINE");
  try { t.setRangeHyperlink(0, t.characters.length, { type: "URL", value: url }); } catch (e) {}
  t.x = 16; t.y = Math.round((44 - t.height) / 2);
  link(t, url); link(chip, url); link(lab, url);
  return { key, chipText: t.characters, w: Math.round(t.width) };
}
const made = [];
if (LINKS.research) made.push(row("research", "RESEARCH DOCUMENT", LINKS.research, 728));
if (LINKS.workbook) made.push(row("workbook", "MODEL WORKBOOK", LINKS.workbook, 784));
if (LINKS.video) made.push(row("video", "TWO-MINUTE VIDEO", LINKS.video, 840));
return { made, closingY: closing ? closing.y : null, children: s.children.length };
```

Check: `made` has 2 rows now (3 after §L1), every `w` ≤ 776, `closingY` 908. Screenshot S4, Read it. A Plugin-API
hyperlink has no visual affordance in a screenshot; tell the user to hover in Figma or export to PDF to see it fire
(BeyondTech precedent).

## §V1 Video project scaffold

```
npx hyperframes usage --json
npx hyperframes skills update general-video
npx hyperframes init "EG/video" --non-interactive --example=blank --skill=general-video
```

Then (paths relative to `EG\video`): create `assets\fonts\` and copy the four font files from §P3.0.1 into it;
create `assets\slides\`, `assets\crops\`, `assets\voice\raw\`, `assets\music\`, `tools\`, `compositions\frames\`.
Write `BRIEF.md`, `frame.md`, `SCRIPT.md`, `STORYBOARD.md`, `scenes.json`, `tools\prep.py`,
`tools\check_layers.py`, `tools\audio.py`, `tools\build.py` exactly as in §V2 to §V7. The `index.html` that `init`
writes is replaced by `build.py`. If the media-use skill's `scripts/prefs.mjs` exists, record the preference
fields once: `node <media-use dir>/scripts/prefs.mjs record --hyperframes "EG/video"` (non-blocking; skip on error).

## §V2 `BRIEF.md`, `frame.md`, `STORYBOARD.md`

`BRIEF.md`:

```markdown
---
workflow: general-video
flow: automation
storyboard: no
message: "Eurogrip should pay mechanics for their advice in tools and status, not cash per tyre: 1.2 lakh shops for ₹22.0 crore a year, repaid at 4.4 extra tyres a shop"
destination: web/presentation
aspect: 1920x1080
language: en
audience: Eurogrip x Unstop Round 1 judges assessing a Case Study 4 submission
length: under 120s
angle: the submitted deck, built up panel by panel in step with the narration
narration: yes
voice: user (Harsh Kawatra), recorded as 8 takes
---

## Intent

A two-minute pitch video for Eurogrip x Unstop Case Study 4. The viewer watches the actual submitted deck assemble
itself: empty panel frames fill with their tables and charts exactly when Harsh names them, the camera moves to the
panel being discussed, and the one number that decides the case (4.4 extra tyres a shop a year) gets its own
full-screen moment. Tone: calm, analytical, plain-spoken, consulting grade; the brief rewards clarity of thinking.

## Assets

- assets/slides/s1@3x.png .. s4@3x.png: the four deck slides rendered by Figma at 3x; every frame is built from these.
- assets/voice/raw/S01.* .. S08.*: Harsh's eight narration takes, one per scene.
- assets/music/bed.wav: optional quiet bed from the user's own SwasthyaGrid demo video.

## Customizations

- Count-up for 1.2 lakh, ₹22.0 crore and 4.4 in the moneyshot frame; bear, base and bull bars grow against the kill line of 12.
- Every table reveals row by row on its spoken cue; every chart wipes in; the camera frames the panel being discussed.

## Notes

- No subtitles or captions of any kind (user decision).
- Hard cap 120 s (the brief's two-minute limit).
- Never re-skin, redraw or re-number the deck; the deck renders are the visual truth.
- Zero em dashes; no question marks or exclamation marks on screen.
```

`frame.md` (design truth for any native element):

```markdown
# frame.md: Eurogrip Case 4 video

- Canvas 1920x1080, background #FFFFFF.
- Palette (the deck's own): primary #184898 (blue), primaryDeep #111111 (ink), accent #FFC20E (yellow sticker
  shadow), alert #B91C1C (moneyshot red, rejected options), good #15803D, tint #DCE4F0, link blue #1D4ED8.
- Type: Poppins ExtraBold / Bold for numerals and labels, Inter Bold / Semi Bold for body. Local font files in
  assets/fonts. Native text never below 22 px.
- Shapes: corner radius 0; 2 px ink borders; layered sticker cards (yellow block shadow offset 7 to 8 px).
- Motion grammar: power2/power3 eases; back.out(1.6) only for node pops; reveals land on the spoken word; camera
  moves use power2.inOut over 0.8 to 1.2 s; no idle drift, no breathing loops, no gradients, no glows beyond the
  4 px outline pulses.
- Highlight grammar: a 4 px outline plus a 16% tint of the same colour, red for the rejected cash scheme, green for
  our design, blue for links, yellow for the verdict.
```

`STORYBOARD.md` (dispatch record; build is inline, single context, 8 scenes):

```markdown
---
format: 1920x1080
duration: under 120s, set by the eight takes
message: "Eurogrip should pay mechanics for their advice in tools and status, not cash per tyre"
arc: problem, rejected obvious answer, design, moneyshot, delivery, proof, close
mode: autonomous
---

## Frame 1 — Cover and verdict
- blueprint: titlecard-reveal
- status: outline
- src: compositions/frames/S01.html
- beat: title wipes in, mind map fades in, team block on "Harsh", verdict card pops on "answer", yellow pulse on "advice".

## Frame 2 — Who names the tyre
- blueprint: spatial-pan-stations (rules: viewport-change, grid-card-assemble)
- status: outline
- src: compositions/frames/S02.html
- beat: camera to band A; 7.8 lakh root strip, bus, three segment nodes pop on their names; camera to P2; insight table rows; green pulse on the non-stocker row.

## Frame 3 — The obvious play, rejected
- blueprint: spatial-pan-stations (rules: viewport-change, asr-keyword-glow)
- status: outline
- src: compositions/frames/S03.html
- beat: struck title wipes in; comparison rows; red pulses on ₹41.7 crore, 91%, "in a week".

## Frame 4 — The programme
- blueprint: spatial-pan-stations (rules: viewport-change, grid-card-assemble)
- status: outline
- src: compositions/frames/S04.html
- beat: green pulse on our column; camera to P4; tier rows one per spoken tier; repay line; camera to P6; loop nodes pop in order; return path wipes right to left; bullets.

## Frame 5 — Moneyshot
- blueprint: dataviz-countup (rules: counting-dynamic-scale, stat-bars-and-fills)
- status: outline
- src: compositions/frames/S05.html
- beat: native full-screen card; 1.2 lakh and ₹22.0 crore count up; ₹41.7 crore struck; 4.4 counts up; bear, base, bull bars grow to the kill line; card dissolves onto the deck's own moneyshot panel.

## Frame 6 — Delivery and gates
- blueprint: spatial-pan-stations, closing with zoom-out-workspace-reveal (rules: viewport-change)
- status: outline
- src: compositions/frames/S06.html
- beat: budget columns and legend; member ramp wipes to Q2, Q4, Q8 on "pilot", "eight", "national"; phase strip; camera to gates; rows on "sixty", "fifteen", "stocking"; Stop row pulse; pull back to the whole page; the five judging-criteria tags light in turn.

## Frame 7 — Appendix
- blueprint: grid-card-assemble
- status: outline
- src: compositions/frames/S07.html
- beat: six appendix panels cascade in; blue pulse on the scenario table on "model".

## Frame 8 — Thank you
- blueprint: titlecard-reveal
- status: outline
- src: compositions/frames/S08.html
- beat: THANK YOU pops; THEREFORE card wipes; team block; link rows fade with a blue pulse on "linked"; hold.
```

## §V3 The narration (`SCRIPT.md`), plus the instructions to send Harsh

`SCRIPT.md` (send this file's text to the user in step V3; it is also the source of the draft timing):

```markdown
# Narration: Eurogrip Case Study 4 (Team IdeaForge)

Voice: Harsh Kawatra. Calm, confident, analytical; a strategist walking a board through one page. Natural pace
(about 164 words a minute, the pace of the Pukaar recording). Let numbers land; never rush the moneyshot.
Total 285 words, about 104 seconds of speech; the finished video must stay under 2 minutes.

Say the numbers like this: 7.8 lakh = "seven point eight lakh"; 41.7 crore = "forty-one point seven crore";
91 percent = "ninety-one percent"; 1.2 lakh = "one point two lakh"; 4.4 = "four point four"; 11.7 = "eleven point
seven". Bandhan = "BUN-dhun". Eurogrip = "YOU-ro-grip".

## S01 (cover, 35 words, about 13 s)
I'm Harsh Kawatra from Team IdeaForge, Delhi Technological University. Our answer to Case Study 4 fits in one line: pay for the advice, not the stock, and pay in tools and status, not cash.

## S02 (who names the tyre, 44 words, about 16 s)
When a rider replaces a tyre, a mechanic usually names the brand. We counted those outlets four ways: about 7.8 lakh, from tyre shops to service garages to puncture shops. Eurogrip's own study shows many who recommend it do not stock it.

## S03 (the obvious play, 33 words, about 12 s)
The obvious play, cash for every tyre sold, misses them. It would cost 41.7 crore a year, and 91 percent of it pays for tyres that sell anyway. Rivals can match it in a week.

## S04 (the programme, 61 words, about 22 s)
Instead, every shop joins free and earns tools and status: a repair kit and board at tier one, a gauge, apron and fitment course at tier two, an inflator and locator listing at tier three. The mechanic shares a code, the retailer logs it in the Bandhan app, and the credit buys tools. Tiers are earned again every six months.

## S05 (the moneyshot, 42 words, about 15 s)
That reaches 1.2 lakh shops for 22 crore rupees a year, about half the cash scheme, and it pays for itself at 4.4 extra tyres per shop a year. Even our bear case, 11.7, stays under the kill line of twelve.

## S06 (delivery and gates, 38 words, about 14 s)
We pilot in Tamil Nadu and Uttar Pradesh, scale to eight states, then go national. Money moves only past three gates: sixty percent of members active, a fifteen point audit lift, and stocking up in the brand re-survey.

## S07 (appendix, 15 words, about 5 s)
The appendix shows the working, all from one model with bear, base and bull cases.

## S08 (thank you, 17 words, about 6 s)
Equip the mechanic, credit the advice, measure the recommendation. Everything is linked on this slide. Thank you.
```

### §V3.2 Recording instructions (send verbatim with the script)

- Record **eight separate files**, one per section, named `S01` to `S08` (any format your phone or laptop saves:
  .m4a, .mp3, .wav, .mpeg all work). Put them in `eurogrip-case\video\assets\voice\raw\`.
- Quiet room, soft furnishings, phone or mic about 30 cm from your mouth, same position for all eight takes.
- Leave about one second of silence before and after each take. If you stumble, re-record the whole take.
- Say the words as written: the video's animations are timed to specific words in each line (for example
  "counted", "service", "puncture", "pilot", "eight", "national", "sixty", "fifteen", "stocking"), so swapping a
  word can mistime a reveal.
- Keep your normal pace; the eight takes together should come to about 1 minute 45 seconds.

## §V4 `scenes.json` (all geometry in slide pixels, 1920x1080; renders are 3x)

Rules the numbers follow (already applied): every layer rect sits strictly inside its panel's border so the
skeleton keeps the empty panel frames visible; table layers start 2 px above the table, so `head` = 36 (2 + 34
header) and `row` = 30; the moneyshot layer `p5` includes its red back-card. `panels` are the full-panel crops used
by the final `settle` cross-fade (identical pixels, a safety net if any pixel was missed).

```json
{
 "head_pad": 0.25, "tail_pad": 0.35, "cam_max": 2.4, "bed_volume": 0.6,
 "slides": {
  "s1": {"layers": {
    "s1_title": {"rect": [60, 154, 1126, 316]}, "s1_verdict": {"rect": [60, 476, 1116, 232]},
    "s1_team": {"rect": [60, 728, 1116, 166]}, "s1_prep": {"rect": [60, 912, 1116, 44]},
    "s1_mind": {"rect": [1196, 156, 672, 852]}}, "panels": {}},
  "s2": {"layers": {
    "p1_title": {"rect": [122, 314, 656, 52]}, "p1_root": {"rect": [134, 368, 632, 44]},
    "p1_bus": {"rect": [230, 408, 440, 22]}, "p1_n1": {"rect": [134, 426, 204, 114]},
    "p1_n2": {"rect": [348, 426, 204, 114]}, "p1_n3": {"rect": [562, 426, 204, 114]},
    "p2_title": {"rect": [798, 314, 466, 52]}, "p2_table": {"rect": [810, 368, 442, 158]},
    "p3_title": {"rect": [1284, 314, 570, 52]}, "p3_table": {"rect": [1296, 368, 546, 158]},
    "p4_title": {"rect": [122, 558, 756, 52]}, "p4_table": {"rect": [134, 612, 732, 128]},
    "p4_repay": {"rect": [134, 744, 732, 32]}, "p5": {"rect": [893, 553, 417, 245]},
    "p6_title": {"rect": [1318, 558, 536, 52]}, "p6_n1": {"rect": [1330, 614, 132, 64]},
    "p6_n2": {"rect": [1460, 614, 132, 64]}, "p6_n3": {"rect": [1590, 614, 132, 64]},
    "p6_n4": {"rect": [1720, 614, 122, 64]}, "p6_return": {"rect": [1330, 678, 512, 48]},
    "p6_bullets": {"rect": [1330, 726, 512, 60]},
    "p7_title": {"rect": [122, 802, 556, 52]}, "p7_chart": {"rect": [134, 856, 240, 170]},
    "p7_legend": {"rect": [384, 854, 288, 166]},
    "p8_title": {"rect": [698, 802, 596, 52]}, "p8_bars": {"rect": [710, 856, 572, 138]},
    "p8_strip": {"rect": [710, 994, 572, 32]},
    "p9_title": {"rect": [1314, 802, 540, 52]}, "p9_table": {"rect": [1326, 856, 516, 158]}},
   "panels": {
    "p1": [118, 310, 664, 236], "p2": [794, 310, 474, 236], "p3": [1280, 310, 578, 236],
    "p4": [118, 554, 764, 236], "p6": [1314, 554, 544, 236], "p7": [118, 798, 564, 236],
    "p8": [694, 798, 604, 236], "p9": [1310, 798, 548, 236]}},
  "s3": {"layers": {
    "a1": {"rect": [66, 314, 596, 350]}, "a2": {"rect": [682, 314, 556, 350]}, "a3": {"rect": [1258, 314, 596, 350]},
    "a4": {"rect": [66, 680, 596, 350]}, "a5": {"rect": [682, 680, 556, 350]}, "a6": {"rect": [1258, 680, 596, 350]}},
   "panels": {}},
  "s4": {"layers": {
    "s4_title": {"rect": [480, 166, 960, 180]}, "s4_therefore": {"rect": [256, 366, 1416, 164]},
    "s4_team": {"rect": [400, 548, 1120, 168]}, "s4_links": {"rect": [400, 722, 1120, 100]},
    "s4_closing": {"rect": [250, 900, 1420, 42]}}, "panels": {}}
 },
 "scenes": [
  {"id": "S01", "slide": "s1", "tail": 0.45,
   "text": "I'm Harsh Kawatra from Team IdeaForge, Delhi Technological University. Our answer to Case Study 4 fits in one line: pay for the advice, not the stock, and pay in tools and status, not cash.",
   "events": [
    {"do": "show", "id": "s1_title", "t": 0.15, "mode": "wipeR", "dur": 0.9},
    {"do": "show", "id": "s1_mind", "t": 0.35, "mode": "fade", "dur": 0.8},
    {"do": "show", "id": "s1_team", "at": "harsh", "fb": 0.05, "mode": "fade"},
    {"do": "show", "id": "s1_prep", "at": "university", "fb": 0.3, "mode": "fade"},
    {"do": "show", "id": "s1_verdict", "at": "answer", "fb": 0.45, "mode": "pop"},
    {"do": "pulse", "rect": [60, 476, 1116, 232], "at": "advice", "fb": 0.65, "color": "accent", "hold": 1.6}]},
  {"id": "S02", "slide": "s2",
   "text": "When a rider replaces a tyre, a mechanic usually names the brand. We counted those outlets four ways: about 7.8 lakh, from tyre shops to service garages to puncture shops. Eurogrip's own study shows many who recommend it do not stock it.",
   "events": [
    {"do": "cam", "rect": [112, 300, 1162, 256], "at": "rider", "fb": 0.04, "dur": 1.1},
    {"do": "show", "id": "p1_title", "at": "mechanic", "fb": 0.12, "mode": "fade"},
    {"do": "show", "id": "p1_root", "at": "counted", "fb": 0.3, "mode": "wipeR", "dur": 0.8},
    {"do": "show", "id": "p1_bus", "at": "ways", "fb": 0.4, "mode": "wipeR", "dur": 0.5},
    {"do": "show", "id": "p1_n1", "at": "from", "fb": 0.5, "mode": "pop"},
    {"do": "show", "id": "p1_n2", "at": "service", "fb": 0.58, "mode": "pop"},
    {"do": "show", "id": "p1_n3", "at": "puncture", "fb": 0.66, "mode": "pop"},
    {"do": "cam", "rect": [784, 300, 494, 256], "at": "study", "fb": 0.78, "dur": 1.0},
    {"do": "show", "id": "p2_title", "at": "study", "fb": 0.78, "mode": "fade"},
    {"do": "rows", "id": "p2_table", "at": "study", "fb": 0.78, "off": 0.3, "head": 36, "row": 30, "upto": 4, "stagger": 0.28},
    {"do": "pulse", "rect": [812, 434, 438, 30], "at": "stock", "fb": 0.95, "color": "good", "hold": 1.4}]},
  {"id": "S03", "slide": "s2",
   "text": "The obvious play, cash for every tyre sold, misses them. It would cost 41.7 crore a year, and 91 percent of it pays for tyres that sell anyway. Rivals can match it in a week.",
   "events": [
    {"do": "cam", "rect": [1270, 300, 598, 256], "t": 0.0, "dur": 1.0},
    {"do": "show", "id": "p3_title", "at": "obvious", "fb": 0.03, "mode": "wipeR", "dur": 0.9},
    {"do": "rows", "id": "p3_table", "at": "sold", "fb": 0.2, "head": 36, "row": 30, "upto": 4, "stagger": 0.25},
    {"do": "pulse", "rect": [1454, 404, 193, 30], "at": "cost", "fb": 0.4, "color": "alert", "hold": 1.3},
    {"do": "pulse", "rect": [1454, 434, 193, 30], "at": "percent", "fb": 0.6, "color": "alert", "hold": 1.3},
    {"do": "pulse", "rect": [1454, 494, 193, 30], "at": "rivals", "fb": 0.85, "color": "alert", "hold": 1.2}]},
  {"id": "S04", "slide": "s2",
   "text": "Instead, every shop joins free and earns tools and status: a repair kit and board at tier one, a gauge, apron and fitment course at tier two, an inflator and locator listing at tier three. The mechanic shares a code, the retailer logs it in the Bandhan app, and the credit buys tools. Tiers are earned again every six months.",
   "events": [
    {"do": "pulse", "rect": [1647, 404, 193, 120], "at": "instead", "fb": 0.02, "color": "good", "hold": 0.9},
    {"do": "cam", "rect": [112, 545, 776, 256], "at": "joins", "fb": 0.08, "dur": 1.0},
    {"do": "show", "id": "p4_title", "at": "joins", "fb": 0.08, "mode": "fade"},
    {"do": "rows", "id": "p4_table", "at": "repair", "fb": 0.15, "head": 36, "row": 30, "upto": 1},
    {"do": "rows", "id": "p4_table", "at": "gauge", "fb": 0.3, "head": 36, "row": 30, "upto": 2},
    {"do": "rows", "id": "p4_table", "at": "inflator", "fb": 0.45, "head": 36, "row": 30, "upto": 3},
    {"do": "show", "id": "p4_repay", "at": "inflator", "fb": 0.45, "off": 1.4, "mode": "wipeR"},
    {"do": "cam", "rect": [1305, 545, 562, 256], "at": "mechanic", "fb": 0.6, "dur": 1.0},
    {"do": "show", "id": "p6_title", "at": "mechanic", "fb": 0.6, "mode": "fade"},
    {"do": "show", "id": "p6_n1", "at": "shares", "fb": 0.63, "mode": "pop"},
    {"do": "show", "id": "p6_n2", "at": "code", "fb": 0.67, "mode": "pop"},
    {"do": "show", "id": "p6_n3", "at": "retailer", "fb": 0.72, "mode": "pop"},
    {"do": "show", "id": "p6_n4", "at": "credit", "fb": 0.82, "mode": "pop"},
    {"do": "show", "id": "p6_return", "at": "tiers", "fb": 0.9, "mode": "wipeL", "dur": 0.8},
    {"do": "show", "id": "p6_bullets", "at": "tiers", "fb": 0.9, "off": 0.6, "mode": "fade"}]},
  {"id": "S05", "slide": "s2", "hero": true, "tail": 0.6,
   "text": "That reaches 1.2 lakh shops for 22 crore rupees a year, about half the cash scheme, and it pays for itself at 4.4 extra tyres per shop a year. Even our bear case, 11.7, stays under the kill line of twelve.",
   "events": [
    {"do": "cam", "rect": [885, 545, 432, 260], "t": 0.0, "dur": 0.01},
    {"do": "heroShow", "el": "chip", "t": 0.1, "mode": "pop"},
    {"do": "heroShow", "el": "c1", "at": "reaches", "fb": 0.05, "mode": "pop"},
    {"do": "count", "el": "c1n", "at": "reaches", "fb": 0.05, "to": "members", "dp": 1, "pre": "", "post": " LAKH", "dur": 0.9},
    {"do": "heroShow", "el": "c2", "at": "crore", "fb": 0.25, "mode": "pop"},
    {"do": "count", "el": "c2n", "at": "crore", "fb": 0.25, "to": "spend", "dp": 1, "pre": "₹", "post": " CRORE", "dur": 1.0},
    {"do": "heroShow", "el": "c3", "at": "half", "fb": 0.35, "mode": "pop"},
    {"do": "strike", "el": "c3s", "at": "half", "fb": 0.35, "off": 0.5},
    {"do": "heroShow", "el": "big", "at": "pays", "fb": 0.5, "mode": "fade"},
    {"do": "count", "el": "big", "at": "pays", "fb": 0.5, "to": "be", "dp": 1, "pre": "", "post": "", "dur": 1.3},
    {"do": "heroShow", "el": "side", "at": "pays", "fb": 0.5, "off": 0.6, "mode": "fade"},
    {"do": "bars", "at": "bear", "fb": 0.75},
    {"do": "kill", "at": "kill", "fb": 0.88},
    {"do": "heroOut", "end": -0.9},
    {"do": "show", "id": "p5", "end": -0.9, "mode": "fade"}]},
  {"id": "S06", "slide": "s2", "tail": 2.8,
   "text": "We pilot in Tamil Nadu and Uttar Pradesh, scale to eight states, then go national. Money moves only past three gates: sixty percent of members active, a fifteen point audit lift, and stocking up in the brand re-survey.",
   "events": [
    {"do": "cam", "rect": [112, 790, 1190, 250], "t": 0.0, "dur": 0.01},
    {"do": "show", "id": "p7_title", "t": 0.1, "mode": "fade"},
    {"do": "show", "id": "p7_chart", "t": 0.3, "mode": "wipeU", "dur": 0.9},
    {"do": "rows", "id": "p7_legend", "t": 0.5, "head": 4, "row": 32, "upto": 5, "stagger": 0.12},
    {"do": "show", "id": "p8_title", "at": "pilot", "fb": 0.05, "mode": "fade"},
    {"do": "clipR", "id": "p8_bars", "at": "pilot", "fb": 0.05, "frac": 0.25},
    {"do": "clipR", "id": "p8_bars", "at": "eight", "fb": 0.2, "frac": 0.5},
    {"do": "clipR", "id": "p8_bars", "at": "national", "fb": 0.3, "frac": 1.0},
    {"do": "show", "id": "p8_strip", "at": "national", "fb": 0.3, "mode": "wipeR", "dur": 0.8},
    {"do": "cam", "rect": [1300, 790, 568, 250], "at": "money", "fb": 0.38, "dur": 1.0},
    {"do": "show", "id": "p9_title", "at": "money", "fb": 0.38, "mode": "fade"},
    {"do": "rows", "id": "p9_table", "at": "sixty", "fb": 0.55, "head": 36, "row": 30, "upto": 1},
    {"do": "rows", "id": "p9_table", "at": "fifteen", "fb": 0.7, "head": 36, "row": 30, "upto": 2},
    {"do": "rows", "id": "p9_table", "at": "stocking", "fb": 0.85, "head": 36, "row": 30, "upto": 3},
    {"do": "rows", "id": "p9_table", "at": "stocking", "fb": 0.85, "off": 0.9, "head": 36, "row": 30, "upto": 4},
    {"do": "pulse", "rect": [1328, 982, 512, 30], "at": "stocking", "fb": 0.85, "off": 1.0, "color": "alert", "hold": 1.0},
    {"do": "settle", "end": -2.6},
    {"do": "cam", "rect": "full", "end": -2.4, "dur": 1.2},
    {"do": "ribbon", "end": -1.3}]},
  {"id": "S07", "slide": "s3", "tail": 0.6,
   "text": "The appendix shows the working, all from one model with bear, base and bull cases.",
   "events": [
    {"do": "show", "id": "a1", "at": "appendix", "fb": 0.05, "mode": "pop"},
    {"do": "show", "id": "a2", "at": "appendix", "fb": 0.05, "off": 0.3, "mode": "pop"},
    {"do": "show", "id": "a3", "at": "appendix", "fb": 0.05, "off": 0.6, "mode": "pop"},
    {"do": "show", "id": "a4", "at": "appendix", "fb": 0.05, "off": 0.9, "mode": "pop"},
    {"do": "show", "id": "a5", "at": "appendix", "fb": 0.05, "off": 1.2, "mode": "pop"},
    {"do": "show", "id": "a6", "at": "appendix", "fb": 0.05, "off": 1.5, "mode": "pop"},
    {"do": "pulse", "rect": [64, 678, 600, 354], "at": "model", "fb": 0.7, "color": "primary", "hold": 1.2}]},
  {"id": "S08", "slide": "s4", "tail": 1.8,
   "text": "Equip the mechanic, credit the advice, measure the recommendation. Everything is linked on this slide. Thank you.",
   "events": [
    {"do": "show", "id": "s4_title", "t": 0.1, "mode": "pop"},
    {"do": "show", "id": "s4_therefore", "at": "equip", "fb": 0.03, "mode": "wipeR", "dur": 1.0},
    {"do": "show", "id": "s4_team", "at": "equip", "fb": 0.03, "off": 1.2, "mode": "fade"},
    {"do": "show", "id": "s4_links", "at": "linked", "fb": 0.6, "mode": "fade"},
    {"do": "pulse", "rect": [406, 724, 1108, 96], "at": "linked", "fb": 0.6, "off": 0.3, "color": "blue", "hold": 1.4},
    {"do": "show", "id": "s4_closing", "at": "linked", "fb": 0.6, "off": 0.8, "mode": "fade"}]}
 ]
}
```

Cue syntax: `t` = seconds from the scene start; `end` = seconds relative to the scene end (negative); `at` = the
word (or space-separated words) whose first occurrence in that take starts the event, `n` = which occurrence
(default 1), `off` = added seconds, `fb` = fallback fraction of the take used only if the word is not found. The
builder prints every cue that fell back; a fallback is acceptable, but more than three in one scene means the take
deviates from the script: compare Whisper's text with SCRIPT.md and ask for that one take again.

## §V5 Slide renders, geometry, layer check, crops (step V2)

1. Renders (run **after F1 and F2**, so the video shows the de-boxed logos and the two link rows; the video row and
   the Cover chip do not exist yet, by design). For each of `2:2`, `2:4`, `2:5`, `2:6`:
   `mcp__figma-mcp__download_assets` with `fileKey` `Yv5gClOIsJco4wR3fAhyxB`, `nodeId`, `defaultFormat` `png`,
   `defaultScale` 3; download the `export` URL at once with `curl -sL -o "EG/video/assets/slides/s<n>@3x.png" "<url>"`
   (n = 1, 2, 3, 4 in that order). Verify each is 5760x3240:
   `PY -c "from PIL import Image;import glob;[print(p,Image.open(p).size) for p in sorted(glob.glob(r'EG\video\assets\slides\s?@3x.png'))]"`
2. Geometry dump (read-only `use_figma`); save the returned JSON's `nodes` object to
   `EG\video\assets\nodes.json` and its `geometry` object to `EG\video\assets\geometry.json`:

```js
const ids = { s1: "2:2", s2: "2:4", s3: "2:5", s4: "2:6" }; const nodes = {}; const geometry = {};
for (const [k, id] of Object.entries(ids)) {
  const s = await figma.getNodeByIdAsync(id); const sb = s.absoluteBoundingBox; const list = [];
  const add = (n, d) => { const b = n.absoluteBoundingBox; if (b) list.push({ name: n.name, type: n.type, d,
    x: +(b.x - sb.x).toFixed(1), y: +(b.y - sb.y).toFixed(1), w: +b.width.toFixed(1), h: +b.height.toFixed(1) }); };
  for (const c of s.children) { add(c, 0); if (c.type === "FRAME" && /^(PANEL|CARD)/.test(c.name)) for (const g of c.children) add(g, 1); }
  nodes[k] = list;
  if (k === "s2" || k === "s3") geometry[k + "_ribbon"] = s.children
    .filter(n => n.type === "RECTANGLE" && Math.abs(n.y - 40) < 1 && Math.abs(n.height - 60) < 1)
    .map(n => ({ x: n.x, y: n.y, w: n.width, h: n.height })).sort((a, b) => a.x - b.x);
}
return { nodes, geometry };
```

   Expect `geometry.s2_ribbon` to have 5 entries and `s3_ribbon` 6.
3. `tools\check_layers.py` (write exactly, run with `PY`):

```python
"""Every deck node must be fully inside one layer rect or fully outside all of them; a node that only partly
overlaps a layer would be cut in half by the reveal. Containers (a node that wholly contains a layer, such as a
panel frame) are exempt. Prints LAYERS OK or every violation with the node and the layer."""
import json, pathlib, sys
P = pathlib.Path(__file__).resolve().parents[1]
S = json.loads((P / "scenes.json").read_text(encoding="utf-8")); N = json.loads((P / "assets" / "nodes.json").read_text(encoding="utf-8"))
bad = []; TOL = 1.0
for slide, spec in S["slides"].items():
    rects = {k: v["rect"] for k, v in spec["layers"].items()}
    for n in N[slide]:
        x, y, w, h = n["x"], n["y"], n["w"], n["h"]
        if w <= 0 or h <= 0: continue
        inside = any(x >= rx - TOL and y >= ry - TOL and x + w <= rx + rw + TOL and y + h <= ry + rh + TOL for rx, ry, rw, rh in rects.values())
        contains = any(x <= rx + TOL and y <= ry + TOL and x + w >= rx + rw - TOL and y + h >= ry + rh - TOL for rx, ry, rw, rh in rects.values())
        hits = [k for k, (rx, ry, rw, rh) in rects.items() if x < rx + rw and x + w > rx and y < ry + rh and y + h > ry]
        if hits and not inside and not contains:
            bad.append((slide, n["name"] or n["type"], [round(v) for v in (x, y, w, h)], hits))
for b in bad: print("PARTIAL", b)
print("LAYERS OK" if not bad else f"{len(bad)} PARTIAL NODES")
sys.exit(0 if not bad else 1)
```

   Fix rule for any PARTIAL node: enlarge the named layer rect in `scenes.json` just enough to contain the node
   fully, never past its panel's inner edge (panel rect inset 2 px), never into another layer of a different
   reveal time; re-run until `LAYERS OK`. If a node legitimately spans two layers (for example a connector line),
   enlarge the earlier-revealed layer to contain it. Log every change in DECISIONS.md.
4. `tools\prep.py` (write exactly, run with `PY`):

```python
"""Cut every layer and full-panel crop from the 3x slide renders and paint each layer area white on a copy, the
skeleton. The skeleton keeps panel borders, ribbon, rails, headline, chips and source line visible from frame 1."""
import json, pathlib
from PIL import Image, ImageDraw
P = pathlib.Path(__file__).resolve().parents[1]; S = json.loads((P / "scenes.json").read_text(encoding="utf-8")); K = 3
(P / "assets" / "crops").mkdir(parents=True, exist_ok=True)
for slide, spec in S["slides"].items():
    src = Image.open(P / "assets" / "slides" / f"{slide}@3x.png").convert("RGB")
    assert src.size == (5760, 3240), (slide, src.size)
    skel = src.copy(); d = ImageDraw.Draw(skel)
    for lid, L in spec["layers"].items():
        x, y, w, h = L["rect"]; box = (round(x * K), round(y * K), round((x + w) * K), round((y + h) * K))
        src.crop(box).save(P / "assets" / "crops" / f"{lid}.png")
        d.rectangle([box[0], box[1], box[2] - 1, box[3] - 1], fill=(255, 255, 255))
    for pid, (x, y, w, h) in spec["panels"].items():
        src.crop((x * K, y * K, (x + w) * K, (y + h) * K)).save(P / "assets" / "crops" / f"{pid}_full.png")
    skel.save(P / "assets" / "slides" / f"{slide}_skel.png")
    print(slide, len(spec["layers"]), "layers,", len(spec["panels"]), "panels")
print("PREP OK")
```

   Then Read `assets\slides\s2_skel.png` once: it must show the ribbon, chip, headline, rails, the nine empty
   panel frames (P5 entirely blank, it is a layer) and the source line, and nothing inside the panels.

## §V6 `tools\audio.py` (step V4; run with the default `python`, which has whisper)

```python
"""Clean the eight narration takes and time every word.
  python tools/audio.py
Reads assets/voice/raw/S01.* .. S08.*, writes assets/voice/S0n.wav (48 kHz mono, -16 LUFS) and assets/voice/words.json.
Exit 2 if the finished video would run past 119.5 s."""
import json, pathlib, subprocess, sys
import whisper
P = pathlib.Path(__file__).resolve().parents[1]
RAW = P / "assets" / "voice" / "raw"; OUT = P / "assets" / "voice"
SPEC = json.loads((P / "scenes.json").read_text(encoding="utf-8"))
CHAIN = ("highpass=f=80,lowpass=f=12000,afftdn=nf=-25,"
         "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.08,areverse,"
         "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.15,areverse,"
         "acompressor=threshold=-20dB:ratio=3:attack=5:release=80,loudnorm=I=-16:TP=-1.5:LRA=7")
PROMPT = "Eurogrip, Team IdeaForge, Bandhan app, lakh, crore, Tamil Nadu, Uttar Pradesh, puncture shops, tyre, re-survey."


def dur(p):
    return float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)]).decode().strip())


model = whisper.load_model("small.en"); res = {}; total = 0.0
for sc in SPEC["scenes"]:
    sid = sc["id"]; src = sorted(RAW.glob(sid + ".*"))
    assert src, f"missing take {sid} in {RAW}"
    wav = OUT / f"{sid}.wav"
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(src[0]), "-af", CHAIN, "-ar", "48000", "-ac", "1", str(wav)], check=True)
    d = dur(wav)
    r = model.transcribe(str(wav), language="en", word_timestamps=True, initial_prompt=PROMPT, condition_on_previous_text=False)
    words = [{"w": w["word"].strip(), "s": round(w["start"], 3), "e": round(w["end"], 3)} for seg in r["segments"] for w in seg.get("words", [])]
    res[sid] = {"duration": round(d, 3), "text": r["text"].strip(), "words": words}
    sd = SPEC["head_pad"] + d + sc.get("tail", SPEC["tail_pad"]); total += sd
    print(f"{sid} take {d:6.2f}s scene {sd:6.2f}s | {r['text'].strip()}")
(OUT / "words.json").write_text(json.dumps(res, indent=1, ensure_ascii=False), encoding="utf-8")
print(f"TOTAL {total:.2f}s (limit 119.5s)")
sys.exit(0 if total <= 119.5 else 2)
```

Over-length ladder (only if exit 2): (1) lower `tail` on S06 to 2.2 and S08 to 1.2 and the global `tail_pad` to
0.25, re-run; (2) if still over by ≤ 5%, speed only the longest takes with pitch-preserving
`ffmpeg -i S0n.wav -af atempo=1.04 S0n_fast.wav`, swap the file in, re-run Whisper by re-running the script on a
raw copy; (3) otherwise ask Harsh to re-record the two longest takes a little brisker. Never cut words.

## §V7 `tools\build.py` (writes every composition and `index.html`)

```python
"""Generate compositions/frames/<id>.html and index.html from scenes.json.
  python tools/build.py           real timing from assets/voice/words.json
  python tools/build.py --draft   silent animatic, timing estimated from the script at 164 words a minute"""
import json, pathlib, re, sys
P = pathlib.Path(__file__).resolve().parents[1]
SPEC = json.loads((P / "scenes.json").read_text(encoding="utf-8"))
GEO = json.loads((P / "assets" / "geometry.json").read_text(encoding="utf-8"))
VTXT = (P.parent / "deck" / "values.js").read_text(encoding="utf-8")
V = json.loads(VTXT[len("const V = "):].rstrip().rstrip(";"))
DRAFT = "--draft" in sys.argv
HEAD = SPEC["head_pad"]; WPM = 164
COL = {"alert": "#B91C1C", "good": "#15803D", "primary": "#184898", "accent": "#FFC20E", "blue": "#1D4ED8", "ink": "#111111"}
GSAP = '<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>'
NUM = {"members": float(V["members"]), "spend": float(V["budget"].replace("₹", "").split()[0]), "be": float(V["be"])}
FONTS = """
@font-face{font-family:Poppins;font-weight:700;src:url('assets/fonts/Poppins-Bold.ttf')}
@font-face{font-family:Poppins;font-weight:800;src:url('assets/fonts/Poppins-ExtraBold.ttf')}
@font-face{font-family:Inter;font-weight:600;src:url('assets/fonts/Inter-SemiBold.ttf')}
@font-face{font-family:Inter;font-weight:700;src:url('assets/fonts/Inter-Bold.ttf')}"""


def norm(t):
    return re.sub(r"[^a-z0-9']", "", t.lower())


def timing(sc):
    if DRAFT:
        toks = sc["text"].split(); d = len(toks) * 60 / WPM; st = d / len(toks)
        return d, [{"w": norm(t), "s": i * st} for i, t in enumerate(toks)]
    W = json.loads((P / "assets" / "voice" / "words.json").read_text(encoding="utf-8"))[sc["id"]]
    return W["duration"], [{"w": norm(x["w"]), "s": x["s"]} for x in W["words"]]


def resolve(ev, words, d, sdur, log):
    off = ev.get("off", 0.0)
    if "t" in ev: return ev["t"] + off
    if "end" in ev: return sdur + ev["end"] + off
    tgt = [norm(x) for x in ev["at"].split()]; want = ev.get("n", 1); seen = 0
    for i in range(len(words) - len(tgt) + 1):
        if [w["w"] for w in words[i:i + len(tgt)]] == tgt:
            seen += 1
            if seen == want: return HEAD + words[i]["s"] + off
    log.append(ev["at"]); return HEAD + ev.get("fb", 0.5) * d + off


def cam(rect):
    if rect == "full": return 1.0, 0.0, 0.0
    x, y, w, h = rect
    s = max(1.0, min(1728 / w, 929 / h, SPEC["cam_max"]))
    tx = 960 - s * (x + w / 2); ty = 540 - s * (y + h / 2)
    tx = min(0.0, max(1920 - 1920 * s, tx)); ty = min(0.0, max(1080 - 1080 * s, ty))
    return s, tx, ty


def hero_html(sid):
    b3, bv = V["be3"], V["bevals"]; L, SPAN = 276, 1300; w = [SPAN * v / 12 for v in bv]
    vals = [(L + w[0] - 130, "#FFFFFF"), (L + w[1] + 16, "#184898"), (L + w[2] + 16, "#111111")]
    rows = ""
    for i, (lab, col) in enumerate([("Bear", "#B91C1C"), ("Base", "#184898"), ("Bull", "#111111")]):
        y = 770 + i * 66
        rows += (f'<div class="h-row" id="{sid}_r{i}" style="top:{y}px"><div class="h-rl">{lab}</div>'
                 f'<div class="h-bar" id="{sid}_b{i}" style="width:{w[i]:.1f}px;background:{col}"></div>'
                 f'<div class="h-val" id="{sid}_v{i}" style="left:{vals[i][0] - 96:.1f}px;color:{vals[i][1]}">{b3[i]}</div></div>')
    return f"""<div id="{sid}_hero">
  <div class="h-chip" id="{sid}_chip">THE BAR TO BEAT</div>
  <div class="h-card" id="{sid}_c1" style="left:96px"><div class="h-num" id="{sid}_c1n">0.0 LAKH</div><div class="h-lab">member shops at full scale</div></div>
  <div class="h-card" id="{sid}_c2" style="left:692px"><div class="h-num" id="{sid}_c2n">₹0.0 CRORE</div><div class="h-lab">a year, {V["p7title"].split(", ")[1].split(" OF")[0]} of unit revenue</div></div>
  <div class="h-card" id="{sid}_c3" style="left:1288px"><div class="h-num h-red">{V["cmp"][0][1].upper()}<span class="h-strike" id="{sid}_c3s"></span></div><div class="h-lab">what cash per tyre would cost</div></div>
  <div class="h-big" id="{sid}_big">0.0</div>
  <div class="h-side" id="{sid}_side"><div class="h-s1">EXTRA TYRES A SHOP A YEAR</div><div class="h-s2">pay for the whole programme,</div><div class="h-s3">one every {V["weeks"]} weeks</div></div>
  {rows}
  <div class="h-kill" id="{sid}_kill"></div><div class="h-killl" id="{sid}_killl">KILL LINE 12</div>
  <div class="h-src">Model {V["hash"]}, base case; bear and bull from the same model</div>
</div>"""


def hero_css(sid):
    h = f"#{sid}_hero"
    return f"""{h}{{position:absolute;inset:0;background:#FFFFFF;color:#111111;font-family:Inter,sans-serif}}
{h} .h-chip{{position:absolute;left:96px;top:64px;padding:10px 22px;background:#184898;color:#FFFFFF;font:700 30px Poppins;border:2px solid #111111;box-shadow:7px 7px 0 #FFC20E}}
{h} .h-card{{position:absolute;top:168px;width:536px;height:176px;border:2px solid #111111;box-shadow:8px 8px 0 #FFC20E;background:#FFFFFF;padding:18px 24px;box-sizing:border-box}}
{h} .h-num{{font:800 64px/1 Poppins;color:#184898;position:relative;display:inline-block}}
{h} .h-red{{color:#B91C1C}}
{h} .h-lab{{font:700 28px/1.25 Inter;margin-top:14px}}
{h} .h-strike{{position:absolute;left:-6px;right:-6px;top:46%;height:7px;background:#B91C1C;transform-origin:0 50%}}
{h} .h-big{{position:absolute;left:96px;top:392px;font:800 300px/1 Poppins;color:#B91C1C}}
{h} .h-side{{position:absolute;left:760px;top:430px}}
{h} .h-s1{{font:800 56px/1.1 Poppins;color:#B91C1C}}
{h} .h-s2{{font:700 40px/1.3 Inter;margin-top:14px}}
{h} .h-s3{{font:700 40px/1.3 Inter;color:#184898}}
{h} .h-row{{position:absolute;left:96px;height:52px;width:1700px}}
{h} .h-rl{{position:absolute;left:0;top:2px;font:700 36px Inter}}
{h} .h-bar{{position:absolute;left:180px;top:4px;height:44px;border:2px solid #111111;box-sizing:border-box;transform-origin:0 50%}}
{h} .h-val{{position:absolute;top:0;font:700 36px Poppins}}
{h} .h-kill{{position:absolute;left:1576px;top:750px;width:0;height:220px;border-left:5px dashed #B91C1C;transform-origin:50% 0}}
{h} .h-killl{{position:absolute;left:1596px;top:828px;font:700 30px Poppins;color:#B91C1C}}
{h} .h-src{{position:absolute;right:96px;bottom:40px;font:600 22px Inter;color:#184898}}"""


clips, audio, t_acc, prev, state, report = [], [], 0.0, None, None, []
for sc in SPEC["scenes"]:
    sid, slide = sc["id"], sc["slide"]; sl = SPEC["slides"][slide]; layers = sl["layers"]
    d, words = timing(sc); sdur = HEAD + d + sc.get("tail", SPEC["tail_pad"]); log = []
    if slide != prev:
        state = {"vis": set(), "clip": {}, "rows": {}, "cam": cam("full"), "settled": False}
    js, ovl = [], []
    s0, x0, y0 = state["cam"]
    js.append(f'tl.set("#{sid}_stage",{{x:{x0:.1f},y:{y0:.1f},scale:{s0:.4f}}},0);')
    for lid in layers:
        if lid not in state["vis"]: js.append(f'tl.set("#{sid}_{lid}",{{opacity:0}},0);')
        elif lid in state["clip"]: js.append(f'tl.set("#{sid}_{lid}",{{clipPath:"{state["clip"][lid]}"}},0);')
    for pid in sl["panels"]:
        if not state["settled"]: js.append(f'tl.set("#{sid}_{pid}_full",{{opacity:0}},0);')
    if slide != prev:
        js.append(f'tl.fromTo("#{sid}_stage",{{opacity:0}},{{opacity:1,duration:0.45,ease:"power1.out"}},0);')
    if sc.get("hero"):
        for el in ["chip", "c1", "c2", "c3", "big", "side", "kill", "killl", "r0", "r1", "r2"]:
            js.append(f'tl.set("#{sid}_{el}",{{opacity:0}},0);')
        js.append(f'tl.set("#{sid}_c3s",{{scaleX:0}},0);')
    for k, ev in enumerate(sc["events"]):
        t = resolve(ev, words, d, sdur, log); op = ev["do"]; T = f"{max(0.0, t):.3f}"
        lid = ev.get("id"); el = f'"#{sid}_{lid}"' if lid else None
        if op == "cam":
            s, tx, ty = cam(ev["rect"]); state["cam"] = (s, tx, ty)
            js.append(f'tl.to("#{sid}_stage",{{x:{tx:.1f},y:{ty:.1f},scale:{s:.4f},duration:{ev.get("dur", 1.0)},ease:"power2.inOut"}},{T});')
        elif op == "show":
            m = ev["mode"]; du = ev.get("dur")
            if m == "fade":
                js.append(f'tl.fromTo({el},{{opacity:0,y:8}},{{opacity:1,y:0,duration:{du or 0.5},ease:"power2.out"}},{T});')
            elif m == "pop":
                js.append(f'tl.fromTo({el},{{opacity:0,scale:0.93}},{{opacity:1,scale:1,duration:{du or 0.55},ease:"back.out(1.6)"}},{T});')
            else:
                a = {"wipeR": "inset(0px 100% 0px 0px)", "wipeL": "inset(0px 0px 0px 100%)", "wipeU": "inset(100% 0px 0px 0px)"}[m]
                b = {"wipeR": "inset(0px 0% 0px 0px)", "wipeL": "inset(0px 0px 0px 0%)", "wipeU": "inset(0% 0px 0px 0px)"}[m]
                js.append(f'tl.set({el},{{opacity:1}},{T});')
                js.append(f'tl.fromTo({el},{{clipPath:"{a}"}},{{clipPath:"{b}",duration:{du or 0.8},ease:"power2.inOut"}},{T});')
            state["vis"].add(lid); state["clip"].pop(lid, None)
        elif op == "rows":
            H = layers[lid]["rect"][3]; head, row, upto = ev["head"], ev["row"], ev["upto"]; st = ev.get("stagger", 0.0)
            cur = state["rows"].get(lid, 0)
            if lid not in state["vis"]:
                js.append(f'tl.set({el},{{opacity:1,clipPath:"inset(0px 0px {H - head:.1f}px 0px)"}},{T});'); state["vis"].add(lid)
            for i, j in enumerate(range(cur + 1, upto + 1)):
                bot = max(0.0, H - head - j * row)
                js.append(f'tl.to({el},{{clipPath:"inset(0px 0px {bot:.1f}px 0px)",duration:0.22,ease:"power1.out"}},{t + 0.05 + i * st:.3f});')
            state["rows"][lid] = upto; state["clip"][lid] = f"inset(0px 0px {max(0.0, H - head - upto * row):.1f}px 0px)"
        elif op == "clipR":
            W = layers[lid]["rect"][2]; css = f"inset(0px {W * (1 - ev['frac']):.1f}px 0px 0px)"
            if lid not in state["vis"]:
                js.append(f'tl.set({el},{{opacity:1,clipPath:"inset(0px {W:.1f}px 0px 0px)"}},{T});'); state["vis"].add(lid)
            js.append(f'tl.to({el},{{clipPath:"{css}",duration:{ev.get("dur", 0.6)},ease:"power2.inOut"}},{T});')
            state["clip"][lid] = css
        elif op == "pulse":
            x, y, w, h = ev["rect"]; c = COL[ev["color"]]; oid = f"{sid}_o{k}"
            ovl.append(f'<div class="ovl" id="{oid}" style="left:{x - 3}px;top:{y - 3}px;width:{w + 6}px;height:{h + 6}px;border-color:{c};background:{c}29"></div>')
            js.append(f'tl.set("#{oid}",{{opacity:0}},0);')
            js.append(f'tl.to("#{oid}",{{opacity:1,duration:0.2}},{T});')
            js.append(f'tl.to("#{oid}",{{opacity:0,duration:0.45}},{t + 0.2 + ev.get("hold", 1.2):.3f});')
        elif op == "ribbon":
            for i, r in enumerate(GEO[slide + "_ribbon"]):
                oid = f"{sid}_rb{i}"
                ovl.append(f'<div class="ovl" id="{oid}" style="left:{r["x"] - 5}px;top:{r["y"] - 5}px;width:{r["w"] + 10}px;height:{r["h"] + 10}px;border-color:#184898;background:#18489826"></div>')
                js.append(f'tl.set("#{oid}",{{opacity:0}},0);')
                js.append(f'tl.fromTo("#{oid}",{{opacity:0,scale:1.08}},{{opacity:1,scale:1,duration:0.35,ease:"back.out(1.6)"}},{t + i * 0.18:.3f});')
        elif op == "settle":
            for pid in sl["panels"]:
                js.append(f'tl.to("#{sid}_{pid}_full",{{opacity:1,duration:0.3}},{T});')
            state["settled"] = True
        elif op == "heroShow":
            m = ev["mode"]; e2 = f'"#{sid}_{ev["el"]}"'
            if m == "pop": js.append(f'tl.fromTo({e2},{{opacity:0,scale:0.93}},{{opacity:1,scale:1,duration:0.5,ease:"back.out(1.6)"}},{T});')
            else: js.append(f'tl.fromTo({e2},{{opacity:0,y:10}},{{opacity:1,y:0,duration:0.5,ease:"power2.out"}},{T});')
        elif op == "count":
            to = NUM[ev["to"]]; e2 = f"{sid}_{ev['el']}"
            js.append(f'(()=>{{const o={{v:0}};tl.to(o,{{v:{to},duration:{ev["dur"]},ease:"power2.out",onUpdate:()=>{{const n=document.getElementById("{e2}");if(n)n.textContent="{ev["pre"]}"+o.v.toFixed({ev["dp"]})+"{ev["post"]}";}}}},{T});}})();')
        elif op == "strike":
            js.append(f'tl.to("#{sid}_{ev["el"]}",{{scaleX:1,duration:0.5,ease:"power2.inOut"}},{T});')
        elif op == "bars":
            for i in range(3):
                js.append(f'tl.set("#{sid}_r{i}",{{opacity:1}},{t + i * 0.18:.3f});')
                js.append(f'tl.fromTo("#{sid}_b{i}",{{scaleX:0}},{{scaleX:1,duration:0.8,ease:"power2.out"}},{t + i * 0.18:.3f});')
                js.append(f'tl.fromTo("#{sid}_v{i}",{{opacity:0}},{{opacity:1,duration:0.3}},{t + i * 0.18 + 0.6:.3f});')
        elif op == "kill":
            js.append(f'tl.set("#{sid}_kill",{{opacity:1}},{T});')
            js.append(f'tl.fromTo("#{sid}_kill",{{scaleY:0}},{{scaleY:1,duration:0.45,ease:"power2.out"}},{T});')
            js.append(f'tl.fromTo("#{sid}_killl",{{opacity:0,x:-10}},{{opacity:1,x:0,duration:0.4}},{t + 0.3:.3f});')
        elif op == "heroOut":
            js.append(f'tl.to("#{sid}_hero",{{opacity:0,duration:0.6,ease:"power1.inOut"}},{T});')
    lay = "".join(f'<div class="lyr" id="{sid}_{lid}" style="left:{r["rect"][0]}px;top:{r["rect"][1]}px;width:{r["rect"][2]}px;height:{r["rect"][3]}px"><img src="assets/crops/{lid}.png" alt=""></div>' for lid, r in layers.items())
    full = "".join(f'<div class="lyr" id="{sid}_{pid}_full" style="left:{r[0]}px;top:{r[1]}px;width:{r[2]}px;height:{r[3]}px"><img src="assets/crops/{pid}_full.png" alt=""></div>' for pid, r in sl["panels"].items())
    hero = hero_html(sid) if sc.get("hero") else ""; hcss = hero_css(sid) if sc.get("hero") else ""
    html = f"""<template>
  {GSAP}
  <style>{FONTS}
    #{sid}_root{{position:relative;width:1920px;height:1080px;overflow:hidden;background:#FFFFFF}}
    #{sid}_stage{{position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;will-change:transform}}
    #{sid}_stage .bg{{position:absolute;left:0;top:0;width:1920px;height:1080px}}
    #{sid}_root .lyr{{position:absolute;will-change:opacity,transform}}
    #{sid}_root .lyr img{{display:block;width:100%;height:100%}}
    #{sid}_root .ovl{{position:absolute;border:4px solid;box-sizing:border-box}}
    {hcss}
  </style>
  <div id="{sid}_root" data-composition-id="{sid}" data-width="1920" data-height="1080">
    <div id="{sid}_stage"><img class="bg" src="assets/slides/{slide}_skel.png" alt="">{lay}{full}{"".join(ovl)}</div>
    {hero}
  </div>
  <script>
    (() => {{
      const tl = gsap.timeline({{ paused: true }});
      {chr(10).join("      " + j for j in js).strip()}
      tl.to({{}}, {{ duration: {sdur:.3f} }}, 0);
      window.__timelines = window.__timelines || {{}};
      window.__timelines["{sid}"] = tl;
    }})();
  </script>
</template>
"""
    (P / "compositions" / "frames" / f"{sid}.html").write_text(html, encoding="utf-8")
    clips.append(f'<div id="clip-{sid}" class="clip" data-composition-id="{sid}" data-composition-src="compositions/frames/{sid}.html" data-start="{t_acc:.3f}" data-duration="{sdur:.3f}" data-track-index="0" data-width="1920" data-height="1080"></div>')
    if not DRAFT:
        audio.append(f'<audio id="vo-{sid}" src="assets/voice/{sid}.wav" data-start="{t_acc + HEAD:.3f}" data-duration="{d:.3f}" data-track-index="20" data-volume="1"></audio>')
    report.append(f"{sid} start {t_acc:7.2f}s dur {sdur:6.2f}s fallbacks {log}")
    t_acc += sdur; prev = slide
if not DRAFT and (P / "assets" / "music" / "bed.wav").exists():
    audio.append(f'<audio id="bed" src="assets/music/bed.wav" data-start="0" data-duration="{t_acc:.3f}" data-track-index="30" data-volume="{SPEC["bed_volume"]}"></audio>')
index = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    {GSAP}
    <style>
      * {{ margin: 0; padding: 0; box-sizing: border-box; }}
      html, body {{ width: 1920px; height: 1080px; overflow: hidden; background: #FFFFFF; }}
      .clip {{ position: absolute; inset: 0; }}
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="{t_acc:.3f}" data-width="1920" data-height="1080">
      {chr(10).join("      " + c for c in clips).strip()}
      {chr(10).join("      " + a for a in audio).strip()}
    </div>
    <script>
      window.__timelines = window.__timelines || {{}};
      const tl = gsap.timeline({{ paused: true }});
      tl.to({{}}, {{ duration: {t_acc:.3f} }});
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
"""
(P / "index.html").write_text(index, encoding="utf-8")
print("\n".join(report)); print(f"TOTAL {t_acc:.2f}s{' (draft estimate)' if DRAFT else ''}")
sys.exit(0 if DRAFT or t_acc <= 119.5 else 2)
```

Run the builder with `PY` (it needs no whisper). Build fix rules:
- `hyperframes check` complains about the sub-composition root element: rename `id="{sid}_root"` to the
  Pukaar-proven form `id="root"` in the template and scope CSS with `[data-composition-id="{sid}"]` instead of
  `#{sid}_root`; rebuild.
- A clip-path wipe renders as an instant pop in the preview: change that layer's wipe to `mode: "fade"` in
  `scenes.json` (log it); never hand-edit generated HTML.
- Hero text overlaps: reduce only the offending font size by 4 px steps in `hero_css`, never below 28 px for
  labels and 48 px for card numbers.

**Optional bed (§V7.1, run before the real build in V4):** compute `TOTAL` from the draft or real build, then
`ffmpeg -y -stream_loop -1 -i "C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform\demo-video\audio\music\bed.wav" -t <TOTAL> -af "afade=t=in:d=1.5,afade=t=out:st=<TOTAL-2.5>:d=2.5,loudnorm=I=-30:TP=-6" -ar 48000 -ac 2 "EG\video\assets\music\bed.wav"`.
After `build.py`, carve the bed under the voice if the script exists:
`node "C:\Users\harsh\.claude\skills\hyperframes-audio\scripts\carve.mjs" --comp index.html`. Tell the user the bed
is there and is one line to remove (delete `assets/music/bed.wav`, rebuild) if they prefer voice only.

## §V8 Checks, preview, render, verification

1. `npx hyperframes check` (it runs lint). Fix by the build fix rules; rebuild; re-check.
2. Contact sheet of scene midpoints (after a render) or snapshots (before): use `npx hyperframes snapshot` per the
   `/hyperframes-cli` skill if available; otherwise render once and extract:
   `ffmpeg -y -i renders\<file>.mp4 -vf "select='eq(n\,<f1>)+eq(n\,<f2>)+...',scale=480:-1,tile=4x2" -frames:v 1 renders\contact.jpg`
   with frame numbers = scene midpoint seconds × fps (from the build report). Read it.
3. Draft animatic (step V3): open the Studio preview (`npm run dev` in `EG\video`) and check the motion order
   scene by scene against STORYBOARD.md. Say once: the HyperFrames desktop app (Edit with Framey) is another way
   to keep editing, per the hyperframes skill §6, only if the preview printed that line.
4. Final (step V4): real build, check, contact sheet, open the Studio preview, ask the user to approve. Render only
   after approval: `npm run render` in `EG\video`.
5. Verify the render (paste into build-log):
   `ffprobe -v error -show_entries format=duration:stream=codec_type,width,height -of compact "<render>.mp4"`
   must show duration ≤ 120.0, a 1920x1080 video stream and an audio stream;
   `ffmpeg -i "<render>.mp4" -af ebur128=framelog=quiet -f null - 2>&1 | grep -E "I:|LRA:"` should show
   integrated loudness about -16 LUFS (−18 to −14 acceptable).
6. Copy to `EG\round1\IdeaForge_Eurogrip_Case4_Video.mp4`. Tell the user: the file path, the duration, and that
   uploading it as **YouTube Unlisted** or **Google Drive with "Anyone with the link can view"** makes the link
   viewable by judges; ask them to send the link.

## §L1 The video link on the Cover and the Thank You slide (after the user sends the link)

1. Put the link into `EG\deck\links.json` as `"video"`.
2. Thank You row: re-run the §F2 script with the updated `LINKS` (idempotent; it rebuilds all three rows, the
   video row at y 840).
3. Cover chip (one `use_figma`; replace `__URL__` with the link, keep the quotes):

```js
const URL = "__URL__";
await Promise.all([{family:"Inter",style:"Bold"}].map(f => figma.loadFontAsync(f)));
const TINT = {r:0.863,g:0.894,b:0.941}, BLUE = {r:0.114,g:0.306,b:0.847};
const s = await figma.getNodeByIdAsync("2:2");
s.children.filter(n => n.name === "LINKCHIP: cover video").forEach(n => n.remove());
const chip = figma.createFrame(); s.appendChild(chip); chip.resize(200, 44);
chip.fills = [{type:"SOLID",color:TINT}]; chip.strokes = [{type:"SOLID",color:BLUE}]; chip.strokeWeight = 2; chip.cornerRadius = 0;
chip.name = "LINKCHIP: cover video";
const t = figma.createText(); chip.appendChild(t);
t.fontName = {family:"Inter",style:"Bold"}; t.fontSize = 22; t.fills = [{type:"SOLID",color:BLUE}];
const lead = "Watch the two-minute video: "; let shown = URL.replace(/^https?:\/\//, "");
t.characters = lead + shown + "  →"; t.textAutoResize = "WIDTH_AND_HEIGHT";
if (t.width > 1068) { shown = ""; t.characters = "Watch the two-minute video  →"; }
if (shown) t.setRangeTextDecoration(lead.length, lead.length + shown.length, "UNDERLINE");
else t.setRangeTextDecoration(0, "Watch the two-minute video".length, "UNDERLINE");
try { t.setRangeHyperlink(0, t.characters.length, { type: "URL", value: URL }); } catch (e) {}
try { t.hyperlink = { type: "URL", value: URL }; } catch (e) {}
try { chip.hyperlink = { type: "URL", value: URL }; } catch (e) {}
chip.resize(Math.ceil(t.width) + 32, 44); t.x = 16; t.y = Math.round((44 - t.height) / 2);
chip.x = 64; chip.y = 956;
return { chipW: chip.width, text: t.characters };
```

   Geometry: the prepared-for line ends at y 947, the chip spans y 956 to 1000, the bottom rule sits at y 1012;
   width ≤ 1100 keeps it clear of the mind-map panel at x 1196.
4. Site: replace `<!--VIDEO-CARD-->` in `EG\site\index.html` with
   `<div class="card"><div><h2>Two-minute video</h2><p>The deck, built up panel by panel, narrated by Harsh Kawatra.</p></div><a href="__URL__">Watch the video →</a></div>`
   (URL filled), then `git add index.html && git commit -m "Add the two-minute video link"` and `git push` (no
   co-author trailer). Re-verify the landing page with curl (count of "Two-minute video" is 1).
5. Screenshots of S1 and S4 (Read them), sweeps + V1 on S1 and S4 (`deck\build\sweeps.js` covers all four;
   `v1_01.js`, `v1_04.js`), refresh `hi_s01.png`/`hi_s04.png` with `download_assets` scale 1 or `get_screenshot`,
   rebuild `deck\Eurogrip_Case4_preview.pdf`, update `deck\slide-copy.md` and `deck\derivation.md` (links rows,
   cover chip, de-boxed logos), build-log, memory.

## P3.9 Risks and recovery

| Risk | Control |
|---|---|
| A take deviates from the script and cues fall back | builder prints fallbacks; > 3 in a scene → re-record that take only |
| Video runs past 2:00 | `audio.py` exit 2 + the over-length ladder in §V6 |
| Whisper splits "re-survey", "IdeaForge" or numbers oddly | anchors deliberately avoid numbers and hyphenated words |
| Clip-path animation unsupported in the renderer | fallback to fade for that layer (build fix rule) |
| Pages build lags or 404s right after creation | wait for `built` with the Monitor until-loop before curl |
| Logo slot without an IMG child | reported as `skipped`, never invented |
| Rebuilding S1/S4 with `gen.py` would erase logos and links | forbidden (H0 log line); surgical scripts only |
| The deck changes after renders were taken | re-run §V5 (renders, dump, check, prep) and rebuild; renders must match the live deck |

END OF PART 3

---

# PART 2 (DONE 2026-10-18): REBUILD THE EXECUTIVE SUMMARY AND APPENDIX TO WINNING-DECK DENSITY

> **Part 2 is complete (B0 to B15 logged in build-log.md). Reference only.** Part 1 (everything below the line "END OF PART 2") is the
> original master plan. It is DONE up to step D3 and stays valid as reference: golden rules §0.3, style §0.5,
> fix rules §6.9, logo rules §6.10, Round 1 extras §7. Where Part 2 and Part 1 disagree, **Part 2 wins.**
> Executors are Sonnet-class. Every decision is already made here. Copy code exactly. Do not redesign.

## R2.0 Context: why this rebuild exists

The 4-slide Case 4 deck is live in Figma (`Yv5gClOIsJco4wR3fAhyxB`, slide IDs S1 `2:2`, S2 `2:4`, S3 `2:5`, S4
`2:6`). All four slides passed V1. The user reviewed them and ruled that **the Executive Summary (S2) and the Appendix
(S3) are not up to the winning standard**. They must be rebuilt to the density of the team's winning and best decks.
The user's decisions in this session:

1. **Keep exactly 4 slides** (Cover, Executive Summary, Appendix, Thank You).
2. **Cover and Thank You keep their layout**; real logos are added (step D4, which was stopped mid-run, is re-run).
3. **Remove Anuj Gambhir from everywhere. Harsh Kawatra is the only name** (team table, research document cover, PDF
   cover, video script). Team name stays TEAM IDEAFORGE.

### R2.0.1 What the benchmark decks do that our S2 and S3 did not (studied by the planner, screenshots read)

| Deck (file key, slide) | What wins |
|---|---|
| SwiftKart, latest and winning (`7N3v6bAfmXYRrte0zChFDg`, 2:4 to 2:8) | 3 rail-labelled bands × 2 to 3 panels; **every panel is a numbered table or a labelled chart**; 2×2 KPI hero block; waterfall; Five Forces tiles coloured HIGH/MED; MECE issue tree with 6 numeric leaves; timeline with dots; scatter; Harvey-ball weighted score with weights in the header; shock × option **heat table**; line charts with in-chart labels; "SO WHAT:" strips; struck obvious answer with 3 numbered reasons. Annexure: 4 quadrants, each an 8-row table (calculations by quarter, assumptions with red bear / green bull text, tornado + scenario table + switch points, method + numbered sources). 244 to 466 nodes a slide. |
| BeyondTech (`cpcsN7ytWMJputcohXOMgz`, 2:4, 2:9, 2:12) | Exec summary as an **argument matrix**: brief asks → obvious move (struck, red ✗) → what we recommend (green ✓) → proof mini-chart → result numeral; waterfall of enrolments; bear/base/bull table; dot-map with numbered pins; 4-step stair diagram. 466 to 601 nodes. |
| HarvestBox (`jpMw7czN5ujU0xJ4xdqPAg`, 2:4) | Six panels, each one table or chart: 5-year P&L table, retention curve with payback marker, two-cohort table, exit-reason heat table, scored options heat table with a **formula strip**, cash runway lines. 393 nodes. |
| Satoshi Gate, prime inspo (`hOJVMGv9nIhDmayTT7DmOt`, 5:4, 5:16) | Do-not vs do two-column with 3 KPI numerals each; scored paths bar; assumption table with basis column; breakeven table; case facts grid. |
| Dream11 (`YoiazGGOribfg69EjEDIlP`, 2:7), Swiggy (`vAIyXmljHlFDuwQo6RsoIN`, 2:7), PRAMAAN (`JLOOyohkQPUrwXEsxDKz4m`, 2:8), HarvestBox v1 (`O7oWkJR37V0H8IDKnt2Ed7`, 3:6) | Weighted heat-score tables with REJECT/IDEAL chips and a FORMULA strip; waterfall of paths; RACI heat table; issue tree; waffle of 100 sign-ups; CONCLUSIVELY cards. |

Our old S2 had 230 nodes and four panels carrying words, not numbers (a 4-bullet list, a 3-line struck card, a
3-row tier table, a small loop). Our old S3 had 4 panels. **The rebuild gives each slide 9 or 6 panels, every one a
table or chart carrying model numbers, target 380 to 520 nodes a slide.**

### R2.0.2 Rules for the rebuild (in addition to Part 1 §0.3 and §0.5)

- Every number comes from `model/model_outputs.json` (hash `b1125880f5`) through `deck/make_values.py`, or from a
  named research CSV row. Nothing is typed by hand into a slide file except the fixed words given in this Part.
- Every string in this Part was **measured with the real glyph metrics** (`deck/metrics.json`, ×1.02) against its box
  by the planner. Do not lengthen any string. If a value changes (it should not), the mock will flag it; fix with
  Part 1 §6.9.
- 22 pt floor. Only `SOURCE`, `FINEPRINT` (16 pt, via `fine()`), and `LOGO:`/`IMG:` captions are exempt.
- No em/en dashes, no `?`, no `!`, no banned words (Part 1 §0.5). The `!` rule also binds JS code: do not write `!==`
  or `!x` anywhere in slide files. Use `===` comparisons and ternaries as written below.

## R2.1 Step list (execute in order; one executor; Figma steps strictly sequential)

| Step | What | Done when |
|---|---|---|
| B0 | Copy this plan file over `EG\PLAN.md` (PowerShell `Copy-Item -LiteralPath "C:\Users\harsh\.claude\plans\working-folder-eurogrip-case-crystalline-globe.md" -Destination "C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\eurogrip-case\PLAN.md" -Force`). Append to `EG\DECISIONS.md`: `2026-10-18 \| B0 \| S2 and S3 rebuilt to winning-deck density; Anuj Gambhir removed everywhere; 4 slides kept \| user review` | file copied |
| B1 | Edit `deck\make_values.py` exactly as R2.2 | `PY deck\gen.py pre` prints `wrote values.js` with no assertion error |
| B2 | Append R2.3 helpers to the end of `deck\_x2.js` | file ends with `// ===== END REBUILD HELPERS v2 =====` |
| B3 | Replace `deck\slides\s02.js` with R2.4 and `deck\slides\s03.js` with R2.5 (whole files) | files written |
| B4 | Edit `deck\slides\s01.js` and `deck\slides\s04.js` per R2.6 (one-row team table re-spacing) | edits applied |
| B5 | Edit `deck\_sweeps.js` per R2.7 (add `Anuj`, `Gambhir` to ABSENT) | edit applied |
| B6 | `PY deck\gen.py pre`; `PY deck\gen.py mock 1 2 3 4`; `PY deck\preview.py 1 2 3 4`; Read the four `deck\shots\preview_0n.png`; fix any FAIL with Part 1 §6.9 and R2.9; repeat (max 4 rounds) | all four print `OK`; previews show no overlap, no clipped text |
| B7 | If any slide prints `FAIL` only because the script length is ≥ 49,900 chars, apply the contingency split R2.10 | n/a unless needed |
| B8 | `PY deck\gen.py bind` | `build\slide_01.js`..`slide_04.js`, `v1_*.js`, `sweeps.js`, `slots.js` rewritten |
| B9 | Figma build, sequential: load the figma-use skill (ReadMcpResourceTool `skill://figma/figma-use/SKILL.md`), then for n = 2, 3, 1, 4: `use_figma` (fileKey `Yv5gClOIsJco4wR3fAhyxB`, `skillNames: "figma-use"`) with the exact text of `build\slide_0n.js`; then `use_figma` with `build\v1_0n.js`; fix per §6.9 by editing the slide file, re-running `gen.py mock n`, `gen.py bind n`, rebuilding that slide only (each script starts with `wipe`, so re-running is safe); max 3 rounds a slide | every V1 returns `clean: true` |
| B10 | Screenshots: `get_screenshot` (fileKey above, nodeId slide id, maxDimension 1600) → the tool returns a URL; download with `curl -sL -o "<EG>\deck\shots\s0n.png" "<url>"` immediately; Read each PNG; check the R2.8 K-card | 4 PNGs read, K-card ticks pasted into build-log |
| B11 | Logos (Part 1 §6.10, unchanged). Brands: Eurogrip, Unstop, DTU, MRF, CEAT, Apollo Tyres, Castrol, Amaron, Bosch, Pidilite, Havells. Slots exist only on S1 and S4. Run `build\slots.js` first | every slot filled at the right aspect or listed as an open item |
| B12 | `use_figma` with `build\sweeps.js`, then `build\v1_all.js`. Then invoke the `case-competition-deck` skill in critique mode (touchpoint T5), read `references/critique_rubric.md`, score S2 and S3 on Dimensions 1, 3, 4, 5, 7, write `deck\critique.md`, fix CRITICAL and IMPORTANT, re-run sweeps and V1. Log `SKILL T5` | sweeps: `radiusFixed 0`, `moneyshot 1`, `fontLow []`, `copy []`, `missing []`, `presentBad []`; density ≥ 380 nodes on S2 and S3 |
| B13 | Research document: remove Anuj Gambhir per R2.11; `PY research\assemble.py md` then `PY research\assemble.py pdf` | `ASSEMBLY PASS`; PDF cover reads "Harsh Kawatra, Delhi Technological University" only |
| B14 | Update `deck\slide-copy.md` and `deck\derivation.md` with R2.12; high-res screenshots (maxDimension 3840) to `deck\shots\hi_s0n.png`; build `deck\Eurogrip_Case4_preview.pdf` with the Part 1 §6.7 D6 one-liner; append a build-log entry | preview PDF has 4 pages |
| B15 | Final greps (Part 1 §8.2) over `deck\slides\*.js`, `deck\slide-copy.md`; plus `Anuj` grep over `deck\`, `research\parts\`, `research\eurogrip-research.md`, `round1\`, `qa\` = 0 hits except `deck\build\` stale copies (rebuilt in B8, so also 0) | 0 dashes, 0 `!`, 0 `Anuj` |

Commands: `PY` = `"C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" -X utf8`. `EG` =
`C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\eurogrip-case`. Run gen/preview from any folder
with full paths.

## R2.2 `deck\make_values.py` edits (B1)

Apply these five edits with the Edit tool. Each old string occurs exactly once.

**Edit 1 (source lines).** Replace the two lines starting `SRC2 = ` and `SRC3 = ` with:

```python
SRC2 = "Source: Case Study 4 brief | MoSPI ASUSE, VAHAN | Castrol India (Fast Scan) | IndiaMART, Amazon.in tool prices, Oct 2026 | research sections 6 to 14 | model "
SRC3 = "Source: model tables T1 to T12 | research/data: universe_methods, state_parc (VAHAN), benchmarks (15 programmes) | research sections 6, 8, 11, 13, 14 | model "
# Pilot shares are the share_pct column of research/data/state_parc.csv (Tamil Nadu 7.6, Uttar Pradesh 13.8; S195, S196).
PILOTLINE = "Pilots: Tamil Nadu (home state, 7.6% of registrations) and Uttar Pradesh (13.8%, thin presence)."
RSN = {"R02": "Codes not logged"}          # display names that fit the A6 risk column (measured)
RCN = {"R03": "6-monthly review"}          # display names that fit the A6 control column (measured)
LEG = ["Tools", "Visibility", "Training", "Field", "Tech"]   # P7 legend names, same order as the model's five lines
```

**Edit 2 (team: one member).** Replace

```python
             team=dict(name="TEAM IDEAFORGE", rows=[["Harsh Kawatra", "Delhi Technological University", "Team Leader"],
                                                     ["Anuj Gambhir", "Delhi Technological University", "Member"]]),
```
with
```python
             team=dict(name="TEAM IDEAFORGE", rows=[["Harsh Kawatra", "Delhi Technological University", "Team Leader"]]),
```

**Edit 3 (headlines).** Replace the line starting `             h2=f"Paying mechanics` and the line starting
`             h3=f"Appendix:` with:

```python
             h2=f"Tools and status for {members} lakh shops cost {budget} a year, about half a cash-per-tyre scheme, and repay the lot at {be} extra tyres a shop",
             h3=f"Appendix: {univ} lakh shops counted four ways, ₹{inr(c['cost_per_member'][b])} a member a year, and break-even from {be3[2]} to {be3[0]} tyres a shop, under the kill line of {round(A['A26']['base'])}",
```

**Edit 4 (must list).** Replace `"Harsh Kawatra", "Anuj Gambhir", "Delhi Technological University",` with
`"Harsh Kawatra", "Delhi Technological University", "CASH PER TYRE", "THE LOOP",`.

**Edit 5 (new keys).** Insert this block immediately **before** the line `    V["must"] = [` (keep its 4-space indent):

```python
    # ===== REBUILD v2 KEYS (PLAN.md Part 2, R2.2) =====
    cs = c["cash_scheme"]
    assert 0.4 < c["spend_cr"][b] / cs["cost_cr"] < 0.6, "headline says 'about half a cash-per-tyre scheme'"
    cpt = c["cpt"][b]; am = A["A11"]["base"]; cr = A["A20"]["base"]
    mix = [A["A07a"]["base"], A["A07b"]["base"], A["A07c"]["base"]]
    trn = A["A13"]["base"] * A["A13s"]["base"] + A["A33"]["base"]
    TK = [("A08", "A08v", "A12a", "A15a"), ("A09", "A09v", "A12b", "A15"), ("A10", "A10v", "A12c", "A16")]
    tier_cost = [A[t]["base"] / am + A[v]["base"] / am + 4 * A[r]["base"] + A[n]["base"] * cr + (trn if k else 0)
                 for k, (t, v, r, n) in enumerate(TK)]
    pb_ = c["parts"][b]
    assert abs(sum(m * x for m, x in zip(mix, tier_cost)) - (pb_["tools"] + pb_["visibility"] + pb_["training"])) < 1, \
        "tier costs must rebuild the model's per-member tools + visibility + training"
    V["seg2"] = [{"head": hd, "num": f1(g["lakh"]) + " lakh", "share": pc(g["share"] * 100), "need": nd}
                 for g, hd, nd in zip(c["segments"], ["Stock and fit", "Service only", "Puncture fix"],
                                      ["needs margin", "needs tools", "needs refills"])]
    V["ins"] = [["Stocking lags", "credit advice"], ["Non-stockers refer", "code, no stock"],
                ["Visibility rising", "boards, aprons"], ["One-offs fade", "6-month tiers"]]
    V["cmp"] = [["Cost a year", "₹" + f1(cs["cost_cr"]) + " crore", budget],
                ["Deadweight", pc(cs["deadweight_pct"]) + " of spend", "pilot tests it"],
                ["Pays for", "stockists only", "every adviser"],
                ["Rival copy", "in a week", "hard to copy"]]
    V["tierrows"] = [["Tier %d" % (k + 1), gets, "%d a year" % round(A[n]["base"]), "₹" + inr(tc), pc(m * 100)]
                     for k, (gets, n, tc, m) in enumerate(zip(["repair kit, board", "gauge, apron, course", "inflator, listing"],
                                                              ["A15a", "A15", "A16"], tier_cost, mix))]
    V["repay"] = "Each tier repays its cost at %s, %s and %s extra tyres a year" % tuple(f1(x / cpt) for x in tier_cost)
    V["stack"] = [[c["lines_sc"][s][i]["cr"] for s in SC] for i in range(5)]
    V["stot"] = ["₹" + f1(c["spend_cr"][s]) for s in SC]
    V["leg"] = [{"label": LEG[i], "pct": pc(l["pct"]), "cr": "₹" + f1(l["cr"])} for i, l in enumerate(c["lines"])]
    GL = {1: " G1", 3: " G2", 7: " G3"}
    V["ramp"] = [{"q": q["q"] + GL.get(i, ""), "v": q["members_lakh"], "t": f"{q['members_lakh']:.2f}"} for i, q in enumerate(c["rollout"])]
    V["p8title"] = f"24 MONTHS: {members} LAKH SHOPS, 3 GATES"
    V["gates"] = [["G1", "Q2", f"{pc(A['A23']['base'] * 100)} active, audit +{round(A['A24']['base'])} points"],
                  ["G2", "Q4", f"{be} extra tyres a shop"], ["G3", "Q8", "stocking up on re-survey"],
                  ["Stop", "any", f"break-even above {round(A['A26']['base'])}"]]
    tri2 = []
    for mth in c["universe"]["methods"]:
        est = mth["kind"] == "estimate"
        tri2.append({"label": mth["method"], "lo": mth["low"], "base": mth["base"], "hi": mth["high"], "floor": not est,
                     "text": (f"{f1(mth['base'])} ({f1(mth['low'])} to {f1(mth['high'])})" if est else f"{f1(mth['base'])}, floor")})
    V["tri2"] = tri2; V["univb"] = c["universe"]["base"]
    V["a1note"] = f"Base {univ} lakh: mean of the two estimates, never below the {f1(c['universe']['floor'])} lakh Castrol already enrols."
    V["pilotline"] = PILOTLINE
    V["cpm"] = inr(c["cost_per_member"][b])
    P_ = c["parts"]
    CK = [("Tools, refills", "tools"), ("Visibility kits", "visibility"), ("Training, meets", "training"), ("Enrolment", "field"), ("Messaging", "tech")]
    V["cpmrows"] = [[lab] + ["₹" + inr(P_[s][k]) for s in SC] for lab, k in CK] + [["Total"] + ["₹" + inr(c["cost_per_member"][s]) for s in SC]]
    fixed = c["spend_cr"][b] - c["members_lakh"][b] * 1e5 * c["cost_per_member"][b] / 1e7
    V["a2note"] = f"Base: {c['members_lakh'][b]:.2f} lakh members × ₹{V['cpm']} + ₹{f1(fixed)} crore fixed = {budget} a year"
    V["tor6"] = [{"label": TORL.get(t["id"], t["id"]), "lo": t["be_low"], "hi": t["be_high"], "txt": f"{f1(t['be_low'])} to {f1(t['be_high'])}"}
                 for t in c["tornado"][:6]]
    V["killnote"] = f"Kill line is {round(A['A26']['base'])}: even the bear case, {be3[0]}, stays under it."
    V["scen8"] = [["Unit revenue, ₹ cr"] + [inr(c["bu_rev_cr"][s]) for s in SC],
                  ["Budget share"] + [f"{A['A02'][s]:.2f}%" for s in SC],
                  ["Envelope, ₹ cr"] + [f1(c["envelope_cr"][s]) for s in SC],
                  ["Spend, ₹ cr"] + [f1(c["spend_cr"][s]) for s in SC],
                  ["Members, lakh"] + [f"{c['members_lakh'][s]:.2f}" for s in SC],
                  ["Contribution a tyre"] + ["₹" + inr(c["cpt"][s]) for s in SC],
                  ["Break-even tyres"] + be3,
                  ["Weeks a tyre"] + [str(round(c["weeks"][s])) for s in SC]]
    V["bench4"] = [[r_["short"], r_["cash"], r_["tools"], r_["visibility"], r_["advice"]] for r_ in c["bench"]]
    V["a5note"] = "Signs = boards and uniforms. Advice = credits a recommendation with no purchase. As published; n/a = not disclosed."
    V["risk5"] = [[RSN.get(r_["id"], r_["risk_short"]), r_["p"] * r_["i"], RCN.get(r_["id"], r_["control_short"])] for r_ in c["risks"][:5]]
    au = c["audit"]
    V["auditline"] = f"Audit: {au['n_per_arm']} shops an arm, {round(au['audits_per_year'])} visits, ₹{f1(au['cost_lakh'])} lakh"
    assert all(len(r_[1]) <= 15 and len(r_[2]) <= 14 for r_ in V["cmp"]) and len(V["repay"]) <= 66
    assert len(V["tor6"]) == 6 and all(len(t["label"]) <= 12 for t in V["tor6"])
    # ===== END REBUILD v2 KEYS =====
```

Expected values after B1 (check `deck\values.js` by eye; any difference means the model changed, stop and report):
`seg2` 1.9 / 3.1 / 2.7 lakh, 25% / 40% / 35%; `cmp` row 1 `₹41.7 crore` vs `₹22.0 crore`, row 2 `91% of spend`;
`tierrows` costs `₹230`, `₹3,753`, `₹10,967`, mix 75% / 20% / 5%; `repay` "… at 0.5, 8.8 and 25.7 …"; `stot`
`₹10.3`, `₹22.0`, `₹29.2`; `leg` 55% / 16% / 7% / 14% / 8%; `ramp` 0.03, 0.07, 0.29, 0.52, 0.76, 0.93, 1.10, 1.16;
`cpm` `1,628`; `cpmrows` Total `₹2,350`, `₹1,628`, `₹1,105`; `a2note` "… 1.16 lakh members × ₹1,628 + ₹3.1 crore fixed
= ₹22.0 crore a year"; `tor6` first row `Contribution` 3.9 to 5.1; `scen8` weeks 4 / 12 / 23; `risk5` P×I 9, 6, 6, 4, 4;
`auditline` "Audit: 140 shops an arm, 560 visits, ₹3.9 lakh".

## R2.3 Helpers to append to `deck\_x2.js` (B2)

Append exactly (after the existing `// ===== END REDESIGN HELPERS =====` line):

```js
// ===== REBUILD HELPERS v2 =====
// ct: table whose cells each take their own fill, text colour and weight. A cell is a string or {t,f,tc,b}.
// al: per-column "LEFT"|"CENTER"|"RIGHT". Header text pads 2 px, body text pads 8 px. Rows 30 px, header 34 px.
function ct(p,x,y,cw,heads,rows,o){ o=o||{}; const hh=o.hh||34, rh=o.rh||30, tw=cw.reduce((a,b)=>a+b,0), H=hh+rh*rows.length, al=o.al||[];
  const t=addFrame(p,x,y,tw,H,C.white,C.ink,2.5,"TABLE: "+(o.name||"ct"));
  const h=addFrame(t,0,0,tw,hh,o.hf||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,j)=>{ addText(h,"Poppins","Bold",22,C.ink,l,cx+2,0,cw[j]-4,hh,al[j]||"LEFT","CENTER"); cx+=cw[j]; });
  rows.forEach((r,i)=>{ let x2=0; const ry=hh+rh*i;
    r.forEach((c,j)=>{ const q=(typeof c==="string")?{t:c}:c; const bg=q.f||(i%2===1?C.surfaceAlt:C.white);
      const cf=addFrame(t,x2,ry,cw[j],rh,bg,null,0,"CELL");
      addText(cf,"Inter",(q.b||j===0)?"Bold":"Semi Bold",22,q.tc||C.ink,q.t,8,0,cw[j]-16,rh,al[j]||"LEFT","CENTER"); x2+=cw[j]; });
    addRect(t,0,ry-1,tw,1.5,C.ink); });
  addRect(t,0,hh-1,tw,2,C.ink); let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-1,0,1.5,H,C.ink); }); return t; }
// rangeBars: one row per counting method; estimates get a low-to-high bar with a base tick, floors a single tick.
function rangeBars(p,x,y,items,o){ const lw=o.lw, bx=x+lw, span=o.span, mx=o.max, rh=o.rh||40, X=v=>bx+span*v/mx;
  items.forEach((it,i)=>{ const ry=y+i*rh;
    TL(p,x,ry+(rh-27)/2,22,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    addRect(p,bx,ry+rh/2-1,span,2,C.surface);
    if(it.floor){ addRect(p,X(it.base)-3,ry+6,6,rh-12,C.primaryDeep,C.ink,1.5); }
    else { addRect(p,X(it.lo),ry+8,Math.max(4,X(it.hi)-X(it.lo)),rh-16,C.tint,C.ink,2); addRect(p,X(it.base)-3,ry+4,6,rh-8,C.primary,C.ink,1.5); }
    TL(p,0,ry+(rh-33)/2,22,it.text,{family:"Poppins",style:"Bold",rightAt:o.right}); });
  return X; }
// ===== END REBUILD HELPERS v2 =====
```

## R2.4 `deck\slides\s02.js`, Executive Summary (B3; whole file)

Layout (1920×1080): three bands with rails, each 232 px tall: **A** y 312 to 544 (DIAGNOSIS), **B** y 556 to 788
(PROGRAMME), **C** y 800 to 1032 (DELIVERY). Panels x 120 to 1856 with 16 px gutters. Panel content area is panel-local
y 58 to 224.

| Band | Panel | x, w | Exhibit | Criterion it answers |
|---|---|---|---|---|
| A | P1 `WHO NAMES THE TYRE: 7.8 LAKH SHOPS` | 120, 660 | mind map: root strip (7.8 lakh, bear 2.7, bull 15.0) → bus → 3 child nodes, each a coloured head + lakh numeral + share + what it needs | Scalability, insight |
| A | P2 `FOUR INSIGHTS, FOUR MOVES` | 796, 470 | 2-column table, answer column filled green | Insight-grounding |
| A | P3 `THE OBVIOUS PLAY: CASH PER TYRE` (struck in red) | 1282, 574 | heat comparison table: cash (red cells) vs our design (green cells): ₹41.7 crore vs ₹22.0 crore, 91% deadweight, stockists only vs every adviser, rival copy | Incentive realism (contrast) |
| B | P4 `THREE TIERS: GETS, COSTS AND RETURNS` | 120, 760 | 5-column tier table with model-derived ₹ a member a year and mix; repay line 0.5 / 8.8 / 25.7 | Incentive realism, sustainability |
| B | P5 `CARD: MONEYSHOT` | 896, 404 | 4.4 at 80 pt red + "EXTRA TYRES / a shop a year, / one per 12 weeks"; bear/base/bull bars against a dashed kill line at 12 | Measurability (the bar) |
| B | P6 `ONE CODE, ONE CREDIT: THE LOOP` | 1316, 540 | 4-node loop with return arrow labelled "logged in the Bandhan app"; 2 rule bullets (6-month re-tiering, fraud controls) | Sustainability, measurability |
| C | P7 `₹22.0 CRORE, 1.63% OF UNIT REVENUE` | 120, 560 | stacked columns bear/base/bull by the five lines + legend with % and ₹ crore | Scalability (budget) |
| C | P8 `24 MONTHS: 1.2 LAKH SHOPS, 3 GATES` | 696, 600 | member ramp bars Q1 to Q8 with gates in the axis labels + phase strip (2 states, 8 states, all states) | Scalability |
| C | P9 `THE BAR TO SCALE, GATE BY GATE` | 1312, 544 | gate table G1, G2, G3 + red Stop row | Measurability |

```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,-1,"CASE 4","EXECUTIVE SUMMARY",380,V.h2,V.src2,{labels:RIBN});
rail(s,64,312,232,"DIAGNOSIS",C.primaryDeep); rail(s,64,556,232,"PROGRAMME",C.primary); rail(s,64,800,232,"DELIVERY",C.alert);
// P1: mind map of the universe
const p1=panel(s,120,312,660,232,"WHO NAMES THE TYRE: "+V.univ+" LAKH SHOPS");
const r0=addFrame(p1,16,58,628,40,C.primaryDeep,C.ink,2,"NODE root");
addText(r0,"Inter","Bold",22,C.white,V.univ+" lakh outlets name the tyre: bear "+V.univ3[0]+", bull "+V.univ3[2],0,0,628,40,"CENTER","CENTER");
addRect(p1,329,98,2.5,10,C.ink); addRect(p1,116,106,430,2.5,C.ink);
const SF=[C.primaryDeep,C.primary,C.accent], SFT=[C.white,C.white,C.ink], SN=[C.primaryDeep,C.primary,C.ink];
V.seg2.forEach((g,i)=>{ const cx=16+i*214; addRect(p1,cx+99,106,2.5,10,C.ink);
  const f=addFrame(p1,cx,116,200,108,C.white,C.ink,2,"NODE "+g.head);
  const hd=addFrame(f,0,0,200,34,SF[i],C.ink,2,"HEAD"); addText(hd,"Poppins","Bold",22,SFT[i],g.head,0,0,200,34,"CENTER","CENTER");
  TL(f,10,34,30,g.num,{family:"Poppins",style:"ExtraBold",color:SN[i],maxW:130,min:24});
  TL(f,0,42,22,g.share,{family:"Poppins",style:"Bold",rightAt:190});
  TL(f,10,78,22,g.need,{family:"Inter",style:"Bold",maxW:180}); });
// P2: the brief's insights, each answered by a design move
const p2=panel(s,796,312,470,232,"FOUR INSIGHTS, FOUR MOVES");
ct(p2,16,58,[244,194],["The brief says","So we"],V.ins.map(r=>[r[0],{t:r[1],f:C.goodTint}]),{name:"insights"});
// P3: the obvious play, struck through, as a heat comparison
const p3=nm(panel(s,1282,312,574,232,""),"PANEL: obvious play");
const t3=TL(p3,16,10,24,"THE OBVIOUS PLAY: CASH PER TYRE",{color:C.alert,maxW:542}); addRect(p3,16,50,542,2,C.ink);
addRect(p3,16,t3.y+t3.height/2-1.5,t3.width,3,C.alert);
ct(p3,16,58,[156,193,193],["Test","Cash a tyre","Our design"],V.cmp.map(r=>[r[0],{t:r[1],f:C.alertTint},{t:r[2],f:C.goodTint}]),{name:"obvious"});
// P4: tiers with model-derived cost a member a year
const p4=panel(s,120,556,760,232,"THREE TIERS: GETS, COSTS AND RETURNS");
ct(p4,16,58,[96,256,138,138,100],["Tier","Gets, in kind","Referrals","₹ a year","Mix"],V.tierrows,{name:"tiers",al:["LEFT","LEFT","LEFT","RIGHT","RIGHT"]});
T(p4,16,190,728,22,V.repay,{family:"Inter",style:"Bold",color:C.primary});
// P5: the moneyshot
const m=layered(s,896,556,404,232,C.white,"CARD: MONEYSHOT",C.alert); m.strokes=[{type:"SOLID",color:C.alert}]; m.strokeWeight=3;
const big=TL(m,16,-4,80,V.be,{family:"Poppins",style:"ExtraBold",color:C.alert}); const bx=16+big.width+12;
TL(m,bx,10,28,"EXTRA TYRES",{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:388-bx,min:22});
TL(m,bx,50,22,"a shop a year,",{family:"Inter",style:"Bold",maxW:388-bx});
TL(m,bx,78,22,"one per "+V.weeks+" weeks",{family:"Inter",style:"Bold",maxW:388-bx});
const BX=84, SP=228, KC=[C.alert,C.primary,C.primaryDeep];
["Bear","Base","Bull"].forEach((l,i)=>{ const ry=118+i*30; TL(m,16,ry,22,l,{family:"Inter",style:"Bold"});
  const bw=Math.max(4,SP*V.bevals[i]/12); addRect(m,BX,ry+4,bw,20,KC[i],C.ink,1.5);
  if(i===0) TL(m,0,ry-3,22,V.be3[i],{family:"Poppins",style:"Bold",color:C.white,rightAt:BX+bw-6});
  else TL(m,BX+bw+6,ry-3,22,V.be3[i],{family:"Poppins",style:"Bold",color:KC[i]}); });
dashedV(m,BX+SP,112,94,C.ink,2.5);
fine(m,16,208,372,"Dashed line: stop if above 12 a year (kill line)");
// P6: the loop that turns a code into a credit
const p6=panel(s,1316,556,540,232,"ONE CODE, ONE CREDIT: THE LOOP");
const LN=[["Mechanic","advises"],["Rider","buys"],["Retailer","logs code"],["Mechanic","earns ₹60"]], NW=116, NG=14, NY=60, NH=60;
LN.forEach((n,i)=>{ const x=16+i*(NW+NG), dk=i===0, yl=i===3;
  const f=addFrame(p6,x,NY,NW,NH,dk?C.primaryDeep:(yl?C.accent:C.white),C.ink,2,"NODE "+i);
  addText(f,"Inter","Bold",22,dk?C.white:C.ink,n[0],2,2,NW-4,28,"CENTER","CENTER");
  addText(f,"Inter","Semi Bold",22,dk?C.accent:C.ink,n[1],2,30,NW-4,28,"CENTER","CENTER");
  if(i<3) arrow(p6,x+NW+1,NY+NH/2,x+NW+NG-1,NY+NH/2,C.ink,2.5); });
const c1=16+NW/2, c4=16+3*(NW+NG)+NW/2, RY=NY+NH+14;
addRect(p6,c4-1.25,NY+NH,2.5,RY-NY-NH,C.ink); addRect(p6,c1-1.25,RY-1.25,c4-c1+2.5,2.5,C.ink); arrow(p6,c1,RY,c1,NY+NH+2,C.ink,2.5);
TL(p6,0,RY+4,22,"logged in the "+V.app,{family:"Inter",style:"Bold",color:C.primary,centerAt:(c1+c4)/2,maxW:c4-c1-20});
bl(p6,16,170,508,[["Every 6 months: ","re-tiered on logged codes"],["Fraud: ","1 credit a tyre serial, IVR call-backs"]],{gap:4});
// P7: budget by line and scenario
const p7=panel(s,120,800,560,232,V.p7title);
const LC=[C.primaryDeep,C.primary,C.accent,C.alert,C.surface];
stackedCols(p7,16,58,236,166,["Bear","Base","Bull"],V.stack.map((sr,i)=>({values:sr,color:LC[i]})),{totals:V.stot,barW:54});
V.leg.forEach((l,i)=>{ const y=58+i*32; addRect(p7,268,y+6,18,18,LC[i],C.ink,1.5);
  TL(p7,294,y,22,l.label,{family:"Inter",style:"Bold",maxW:126});
  TL(p7,0,y-3,22,l.pct,{family:"Poppins",style:"Bold",rightAt:476});
  TL(p7,0,y,22,l.cr,{family:"Inter",style:"Bold",color:C.primary,rightAt:544}); });
// P8: member ramp with gates and phases
const p8=panel(s,696,800,600,232,V.p8title);
const RC=[C.primaryDeep,C.primaryDeep,C.primary,C.primary,C.alert,C.alert,C.alert,C.alert];
vBars(p8,16,58,568,140,V.ramp.map((r,i)=>({label:r.q,value:r.v,text:r.t,color:RC[i]})),{barW:40});
[[0,2,"2 states",C.primaryDeep],[2,4,"8 states",C.primary],[4,8,"all states, national",C.alert]].forEach(z=>{ const x0=16+568*z[0]/8, x1=16+568*z[1]/8;
  addRect(p8,x0,196,x1-x0,28,z[3],C.ink,1.5); TL(p8,0,196,22,z[2],{family:"Inter",style:"Bold",color:C.white,centerAt:(x0+x1)/2}); });
// P9: gates
const p9=panel(s,1312,800,544,232,"THE BAR TO SCALE, GATE BY GATE");
ct(p9,16,58,[82,90,340],["Gate","When","Pass if"],V.gates.map((r,i)=>i===3?r.map(c=>({t:c,f:C.alertTint})):r),{name:"gates"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## R2.5 `deck\slides\s03.js`, Appendix (B3; whole file)

Layout: two bands, each 354 px tall: y 312 to 666 and y 678 to 1032. Panels x 64 to 1856: widths 600, 560, 600 with
16 px gutters (x 64, 680, 1256). Ribbon becomes six tags, one per panel.

| Panel | Exhibit |
|---|---|
| A1 `A1 FOUR COUNTS, ONE UNIVERSE (LAKH)` | range chart of the 4 counting methods (low-to-high bars with base ticks; floors as single ticks), dashed red base line at 7.8, then the base rule sentence and the pilot-state sentence with VAHAN shares |
| A2 `A2 ₹1,628 A MEMBER A YEAR, BUILT UP` | cost-per-member table, 5 components + total × bear/base/bull (bear red, bull green), then the spend identity sentence |
| A3 `A3 BREAK-EVEN: WHAT MOVES IT MOST` | tornado of the 6 largest swings with a "lo to hi" value column and the kill-line sentence |
| A4 `A4 BEAR, BASE, BULL ON ONE MODEL` | 8-row scenario table (unit revenue, budget share, envelope, spend, members, contribution a tyre, break-even, weeks a tyre) |
| A5 `A5 SIX PROGRAMMES, SCORED` | heat table: 6 benchmark programmes + Our design (yellow) × Cash, Tools, Signs, Advice |
| A6 `A6 RISKS, CONTROLS, VALIDATION` | top-5 risk table with a P×I heat cell, VALIDATE FIRST callout, audit-design line |

```js
{ const s = await figma.getNodeByIdAsync("S3");
const RIBA6=["A1 COUNT","A2 COST","A3 SENSITIVITY","A4 SCENARIOS","A5 BENCHMARKS","A6 RISKS"];
skelBT(s,-1,"A / 01","APPENDIX",280,V.h3,V.src3,{labels:RIBA6});
// A1: four counts
const a1=panel(s,64,312,600,354,"A1 FOUR COUNTS, ONE UNIVERSE (LAKH)");
rangeBars(a1,16,58,V.tri2,{lw:212,span:164,max:16,rh:40,right:584});
const X1=228+164*V.univb/16; dashedV(a1,X1,58,160,C.alert,2.5);
TL(a1,X1+6,210,22,"base "+V.univ,{family:"Inter",style:"Bold",color:C.alert});
T(a1,16,240,568,22,V.a1note,{family:"Inter",style:"Bold"});
T(a1,16,294,568,22,V.pilotline,{family:"Inter",style:"Semi Bold",color:C.primary});
// A2: cost per member, built up
const a2=panel(s,680,312,560,354,"A2 ₹"+V.cpm+" A MEMBER A YEAR, BUILT UP");
ct(a2,16,58,[196,104,104,124],["₹ a member","Bear","Base","Bull"],V.cpmrows.map((r,i)=>r.map((c,j)=>({t:c,tc:j===1?C.alert:(j===3?C.good:C.ink),f:i===5?C.tint:undefined,b:i===5}))),{name:"cost",al:["LEFT","RIGHT","RIGHT","RIGHT"]});
T(a2,16,280,528,22,V.a2note,{family:"Inter",style:"Bold"});
// A3: tornado
const a3=panel(s,1256,312,600,354,"A3 BREAK-EVEN: WHAT MOVES IT MOST");
TL(a3,16,58,22,"Extra tyres a shop a year, base "+V.be,{family:"Inter",style:"Bold",color:C.primary});
tornado(a3,16,96,450,V.tor6,V.be_base,{labelW:190,rowH:32});
V.tor6.forEach((t,i)=>TL(a3,0,96+i*32-2,22,t.txt,{family:"Poppins",style:"Bold",rightAt:584}));
T(a3,16,296,568,22,V.killnote,{family:"Inter",style:"Bold",color:C.alert});
// A4: scenarios
const a4=panel(s,64,678,600,354,"A4 BEAR, BASE, BULL ON ONE MODEL");
ct(a4,16,58,[224,108,116,120],["Item","Bear","Base","Bull"],V.scen8.map(r=>r.map((c,j)=>({t:c,tc:j===1?C.alert:(j===3?C.good:C.ink)}))),{name:"scenarios",al:["LEFT","RIGHT","RIGHT","RIGHT"]});
fine(a4,16,334,568,"Bear is the value least favourable to the plan; one model, hash "+V.hash+".");
// A5: benchmark heat table
const a5=panel(s,680,678,560,354,"A5 SIX PROGRAMMES, SCORED");
const HC={"Yes":HG[4],"Part":HG[2],"No":C.white,"n/a":C.surface};
ct(a5,16,58,[176,88,88,88,88],["Programme","Cash","Tools","Signs","Advice"],V.bench4.map(r=>[{t:r[0],f:r[0]==="Our design"?C.accent:undefined,b:true}].concat(r.slice(1).map(c=>({t:c,f:HC[c]})))),{name:"bench",al:["LEFT","CENTER","CENTER","CENTER","CENTER"]});
fine(a5,16,304,528,V.a5note);
// A6: risks and validation
const a6=panel(s,1256,678,600,354,"A6 RISKS, CONTROLS, VALIDATION");
const PI=v=>v>=9?HG[5]:(v>=6?HG[4]:HG[3]);
ct(a6,16,58,[40,236,64,228],["#","Risk","P×I","Control"],V.risk5.map((r,i)=>[String(i+1),r[0],{t:String(r[1]),f:PI(r[1]),tc:r[1]>=9?C.white:C.ink,b:true},r[2]]),{name:"risks",al:["CENTER","LEFT","CENTER","LEFT"]});
callout(a6,16,252,568,44,"VALIDATE FIRST: ",V.valid,{py:8});
T(a6,16,306,568,22,V.auditline,{family:"Inter",style:"Bold"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

## R2.6 Cover and Thank You edits for a one-row team table (B4)

The team table now has one row (Harsh Kawatra | Delhi Technological University | Team Leader), so it is 54 px
shorter. Re-space so no hole appears.

`deck\slides\s01.js`, three Edit calls:
- `nm(TL(s,64,716,28,V.team.name,{color:C.primary}),"TEAM LABEL");` → `nm(TL(s,64,736,28,V.team.name,{color:C.primary}),"TEAM LABEL");`
- `teamBT(s,64,764,[300,500,300]);` → `teamBT(s,64,784,[300,500,300]);`
- `T(s,64,944,1100,22,"Prepared for` → `T(s,64,920,1100,22,"Prepared for` (only the y changes; keep the rest of the line)

`deck\slides\s04.js`, two Edit calls:
- `forEach(l=>imgSlot(s,l[1],790,340,80,l[0]));` → `forEach(l=>imgSlot(s,l[1],744,340,80,l[0]));`
- `"The research document and the model back every number on these slides.",260,900,` → `"The research document and the model back every number on these slides.",260,860,`

## R2.7 `deck\_sweeps.js` (B5)

Edit: `const ABSENT=["BeyondTech",` → `const ABSENT=["Anuj","Gambhir","BeyondTech",`

## R2.8 K-card for the new S2 and S3 screenshots (B10)

1. S2 shows 3 rails and 9 panels; no empty region over about 120×120 px inside the content zone.
2. P1 reads as a mind map: dark root strip, a bus, three coloured child heads, each with a lakh numeral, a % and a need.
3. P3 title is struck through in red; cash cells are pale red, our cells pale green; ₹41.7 crore and 91% visible.
4. P4 shows ₹230, ₹3,753, ₹10,967 and the repay line on one line.
5. P5 "4.4" is the largest numeral on the slide and red; three bars; the dashed kill line sits right of the bear bar.
6. P6 loop: 4 nodes left to right, return arrow underneath, label on the return path; 2 bullets below.
7. P7 three stacked columns with ₹10.3 / ₹22.0 / ₹29.2 above; legend percentages sum to 100 (±1).
8. P8 eight bars with values; axis labels Q2 G1, Q4 G2, Q8 G3; phase strip under the axis.
9. P9 Stop row pale red.
10. S3 ribbon has six tags; A1 shows 2 range bars and 2 floor ticks with a red dashed base line; A3 tornado has a
    value column on the right; A5 "Our design" row is yellow and is the only all-Yes row in the Advice column; A6 P×I
    cells shade by value.
11. No text below 22 pt except source, fine print and slot captions; every number matches `deck\values.js`.

## R2.9 Extra fix rules for the rebuild

| Symptom | Fix |
|---|---|
| `cellWrap` on a `ct` header | shorten nothing; move 8 px from the widest column of that table to the flagged column (keep the total) |
| `cellWrap` on a `ct` body cell | same as above |
| Moneyshot "EXTRA TYRES" shrinks below 24 pt in the mock | change the big numeral size from 80 to 72 in s02.js (both the TL size and nothing else) |
| P8 a value label collides with the title rule | change vBars height 140 → 136 and the strip y 196 → 192 |
| A1 base label overlaps the A1 note | move the label to y 206 |
| A3 value column text overlaps a tornado bar | reduce the tornado width 450 → 430 |
| Mock reports text outside a panel by ≤ 4 px at the bottom | move that text up by the overflow + 2 px |
| `ribbon too wide` on S3 | cannot happen at measured widths (912 px of text); if it does, report |

## R2.10 Contingency: split a slide script that exceeds 49,900 characters (B7, only if needed)

Expected sizes: S2 ≈ 44,000, S3 ≈ 41,000 characters. Apply this only if `gen.py mock` fails on length alone.
1. In the long slide file, insert a line `// ===== PART B =====` before the `// P7` comment (S2) or before `// A4` (S3),
   and after it add a fresh opening line `{ const s = await figma.getNodeByIdAsync("S2");` (or `"S3"`); close part A by
   adding `}` on the line before the separator. Move the final `results.push(...)` so each part has one.
2. Patch `deck\gen.py`: in `compose(n, sid)` change the signature to `compose(n, sid, part=None)`, and after
   `s = rd("derived/s%02d.js" % n)` add `SEP = "// ===== PART B ====="` then
   `if part is not None and SEP in s: s = s.split(SEP)[0 if part == "a" else 1]`; change
   `assert s.count(old) == 1, n` to `assert s.count(old) >= 1, n`.
   In `mock`, replace `len(code) < 49900` with
   `max(len(compose(n, "S%d" % n, q)) for q in (("a", "b") if "// ===== PART B =====" in rd("derived/s%02d.js" % n) else (None,))) < 49900`.
   In `bind`, replace the two lines that write `build/slide_%02d.js` with: if the separator is in the derived file,
   write `build/slide_%02da.js` from `compose(n, ids[...], "a")` and `build/slide_%02db.js` from part `"b"`; else the old
   single file. In B9 run part a, then part b, then V1.
3. Log the split in DECISIONS.md.

## R2.11 Remove Anuj Gambhir from the research document (B13)

1. `research\assemble.py`: Edit `Team: Harsh Kawatra and Anuj Gambhir, Delhi Technological University, Team IdeaForge`
   → `Team: Harsh Kawatra, Delhi Technological University, Team IdeaForge`; and in the cover block replace the substring
   starting `(Team Leader)<br>Anuj Gambhir, ` up to the next `<br>` with `(Team Leader)<br>` (read the line first; keep
   the rest).
2. `research\build_pdf.py` line ~96: replace `(Team Leader)<br>Anuj Gambhir, Delhi Technological University<br>` with
   `(Team Leader)<br>`.
3. `research\parts\part-A.md`: two sentences. Replace `Team IdeaForge (Harsh Kawatra and Anuj Gambhir, Delhi
   Technological University)` → `Team IdeaForge (Harsh Kawatra, Delhi Technological University)` and `Team IdeaForge
   (Harsh Kawatra and Anuj Gambhir) set` → `Team IdeaForge (Harsh Kawatra) set`.
4. `research\parts\part-C.md` deck table row: `Harsh Kawatra, Anuj Gambhir, Delhi Technological University` →
   `Harsh Kawatra, Delhi Technological University`.
5. Do **not** edit `research\raw\R-E-case1-segments-media.md`: its match is a cited source's author, not our team
   (confirm by reading the line; if it is our team member, remove it the same way).
6. Leave `patch_assemble.py` (a historical one-time patch script) untouched.
7. Re-run `PY research\assemble.py md` (must print ASSEMBLY PASS) and `PY research\assemble.py pdf`; render page 1 with
   PyMuPDF to `%LOCALAPPDATA%\Temp\eg_p1.png` and Read it to confirm.
8. Part 1 §7.2 video script: **single speaker, Harsh Kawatra, all six beats.** Part 1 §1.5 team table: one row.

## R2.12 Derivation rows to add to `deck\derivation.md` (B14)

| Slide | Panel | Number | Model key or source |
|---|---|---|---|
| S2 | headline, P5, P9 | 4.4 tyres | `c4.be.base` |
| S2 | headline, P7 | ₹22.0 crore, 1.63% | `c4.spend_cr.base`, `c4.spend_share_pct.base` |
| S2 | headline, P8 | 1.2 lakh shops | `c4.members_lakh.base` |
| S2 | headline, P3 | ₹41.7 crore, 91% | `c4.cash_scheme.cost_cr`, `.deadweight_pct` |
| S2 | P1 | 7.8 / 2.7 / 15.0 lakh; 1.9 / 3.1 / 2.7 lakh; 25 / 40 / 35% | `c4.universe`, `c4.segments` |
| S2 | P4 | ₹230 / ₹3,753 / ₹10,967; 75 / 20 / 5%; 0.5 / 8.8 / 25.7 | A08 to A16, A20, A13, A13s, A33, A07 (formula in make_values, asserted equal to `c4.parts`); ÷ `c4.cpt.base` |
| S2 | P5 | 11.7 / 4.4 / 2.2; 12 weeks; kill 12 | `c4.be`, `c4.weeks.base`, A26 |
| S2 | P6 | ₹60 a code; Bandhan app | A20; `c4.app_name` |
| S2 | P7 | ₹10.3 / ₹22.0 / ₹29.2; 55 / 16 / 7 / 14 / 8% | `c4.spend_cr`, `c4.lines`, `c4.lines_sc` |
| S2 | P8 | 0.03 to 1.16 lakh by quarter | `c4.rollout` |
| S2 | P9 | 60%, +15 points, 12 | A23, A24, A26 |
| S3 | A1 | 5.0 (2.7 to 7.5), 10.5 (7.7 to 15.0), 1.5, 0.3; TN 7.6%, UP 13.8% | `c4.universe.methods`; `research/data/state_parc.csv` |
| S3 | A2 | component table, ₹1,628, ₹3.1 crore fixed | `c4.parts`, `c4.cost_per_member`; spend − members × cost |
| S3 | A3 | six ranges | `c4.tornado` |
| S3 | A4 | eight rows | `c4.bu_rev_cr`, A02, `c4.envelope_cr`, `c4.spend_cr`, `c4.members_lakh`, `c4.cpt`, `c4.be`, `c4.weeks` |
| S3 | A5 | Yes/Part/No/n/a | `c4.bench` (from `research/data/benchmarks.csv`) |
| S3 | A6 | P×I 9, 6, 6, 4, 4; 140 a shop arm, 560 visits, ₹3.9 lakh; 60 interviews, 4 cities | `c4.risks`, `c4.audit`, `c4.validation` |

## R2.13 Hand-off (after B15)

Tell the user: Figma URL `https://www.figma.com/slides/Yv5gClOIsJco4wR3fAhyxB`, node counts per slide, the critique
score, logos placed vs still open, and that the research PDF now names Harsh Kawatra only. Update memory: create
`project_eurogrip_unstop.md` (type project) recording the 4-slide Case 4 deck, Figma key, palette (#184898 / #111111 /
#FFC20E / #B91C1C), **solo team (Harsh Kawatra only, by user decision 2026-10-18)**, and the struck-insight ruling; add
its one-line pointer to `MEMORY.md`. No git commit unless asked; never a co-author trailer.

END OF PART 2

---

# PART 1: Eurogrip × Unstop · Four-Case Research Deliverable + Case Study 4 Figma Deck · Master Execution Plan

> **Executors: Sonnet-class subagents.** This plan is written so that you spend your time executing, not deciding.
> Every decision that can be made in advance has been made here. When this plan conflicts with your instinct, follow
> the plan. When something is genuinely missing, apply §0.6 ("Default when unspecified"). Never stop to redesign.

**Contents:** §0 Context, golden rules, skill touchpoints, style contract · §1 The four briefs decoded (traceability,
judging maps, edits in the brief, team, machine facts) · §2 The solved argument for all four cases (Case 4 in full) ·
§3 Workstreams, dispatch, folders · §4 Phase R: research (lanes, verification, writers, assembly, PDF) · §5 Phase M:
the model · §6 Phase D: the Figma deck (4 slides) with full slide code · §7 Phase S: Round 1 extras (exec summary
PDF, 2-minute video script, Q&A bank) · §8 Verification gates and greps · §9 Risks and recovery · §10 Open items for
the user · §11 Hand-off and memory · Appendix P (the four briefs, verbatim, with IDs) · Appendix Q (embedded code).

**Order of work (fixed):** research lanes → verification → model → research writers → research assembly + PDF →
deck → Round 1 extras → final verification. The deck never starts before the model and the research document pass
their gates, because every deck number is derived from them.

---

## §0 CONTEXT AND HOW TO USE THIS PLAN

### §0.1 Why this work exists

Harsh Kawatra (team lead) and Anuj Gambhir (both Delhi Technological University, **Team IdeaForge**) are entering the
**Eurogrip × Unstop Collaboration** case challenge. Eurogrip is the two-wheeler, three-wheeler and off-highway tyre
brand of **TVS Srichakra Ltd** (Madurai; NSE: TVSSRICHAK, BSE: 509243). The organiser released **four separate
problem statements** (PDFs in `eurogrip-case\raw\`). Each has the same format: Round 1 = a one-page executive
summary + a 2-minute video; Round 2 = a deck of up to 15 slides.

The user asked for three things:

1. **A very deep research deliverable covering all four problem statements**, each one *solved* (recommendation,
   numbers, frameworks), consulting grade, no length limit.
2. **A native Figma Slides deck for ONE case: Case Study 4 (mechanic and puncture-shop advocacy)** — user decision,
   2026-10-14. Exactly **4 slides: 1 cover, 1 core, 1 appendix, 1 thank-you.** The single core slide is the case's
   Round 1 one-page executive summary and must be the densest, best slide this folder has produced.
3. **This plan**, detailed enough that Sonnet executors only execute.

The core slide doubles as the Round 1 "1-page executive summary of the strategic approach". §7 adds the cheap,
high-value Round 1 extras the brief requires (exec-summary PDF export, 2-minute video script).

### §0.2 Deliverables, locations, done-when

| # | Deliverable | Location | Done when |
|---|---|---|---|
| 1 | Research document (md + html + pdf), all four cases solved | `eurogrip-case\research\eurogrip-research.{md,html,pdf}` | `assemble.py md` prints `ASSEMBLY PASS`; PDF renders with cover, contents, page numbers; critique fixed (G-R) |
| 2 | Model (Python + Excel), all four cases, Case 4 in full | `eurogrip-case\model\` | `eurogrip_model.py` prints `MODEL PASS` and writes `model_outputs.json`, `model_tables.md`; workbook built (G-M) |
| 3 | Figma Slides deck, Case 4, 4 slides | new Figma Slides file `Eurogrip Case 4 | Team IdeaForge` | V1 clean, sweeps clean, critique ≥ 40/45, logos placed or listed (G-D) |
| 4 | Round 1 extras | `eurogrip-case\round1\` | exec-summary PDF (1 page = slide 2), video script ≤ 300 spoken words, Q&A bank 30 items (G-S) |

### §0.3 Golden rules (every file, every slide, every commit)

1. **Zero em dashes (U+2014) and zero en dashes (U+2013)** in anything we author (research parts, glossary,
   conflicts, deck text, video script, Q&A). Use commas, colons, full stops, parentheses, or "to" for ranges ("FY21 to
   FY26"). Hyphens inside compound words are fine. The brief itself contains em dashes; when you quote the brief
   verbatim inside the research document, put the quote inside a Markdown blockquote that starts with `> Brief:` and
   replace each em dash in the quote with a comma (note this once in §0 of the document: "quotations from the brief
   are reproduced with dashes rendered as commas").
2. **No hooks, no rhetorical questions, no exclamation marks, no AI slop.** Banned list in §0.5. Open every section
   with the finding. Language is graded, humanised analytical storytelling: plain declarative sentences, concrete
   numbers, named sources, a clear "so what".
3. **Never invent names.** No coined programme names, acronyms, mascots, or "Project X" labels (user rule, memory
   `feedback_no_invented_names.md`; the LSR "Project Setu" was rejected for exactly this). Use the case's own words:
   "the Eurogrip mechanic advocacy programme", "advocacy ecosystem", "mechanics and puncture shops". Tiers are
   **Tier 1, Tier 2, Tier 3** (numbers, not names). Allowed descriptive nouns: "code", "referral", "tool credits",
   "shop board". Before finalising any file, run the invented-name sweep in §8.3.
4. **Never fabricate data or primary research.** Every number traces to a source row (`[RX##]` / `[S###]`), a brief
   ID (`[C4-B07]`), an assumption (`[A##]`), or a model output (`[M c4.key]`). No invented interview quotes, mechanic
   testimonials, survey percentages, LOIs or expert endorsements. Eurogrip's mechanic brand-track study is described
   in the brief **qualitatively only**: never attach a percentage to it. Where judges would expect primary data, show
   the **Validation Plan** (planned interviews by role and count, not yet run).
5. **The struck-through lines in the briefs are deleted text** (see §1.3). Never present a struck line as a finding.
   In particular, the Case 4 line "functional support, tools and equipment, has overtaken cash and pricing incentives
   as the top-ranked way mechanics want to be supported" is **struck** in the brief's insights list, yet the Case 4
   judging criterion still says "build on the actual mechanic preference shift, toward tools/equipment and brand
   visibility, away from pure cash". Ruling (apply everywhere): attribute the tools-and-visibility shift to **the
   brief's judging criterion** and the visibility half to **the brief's insight** `[C4-B13]`; support the tools half
   with external evidence (adjacent-category programmes, R-D) and test it in the pilot (tool credits vs cash
   equivalent, randomised by district, §2.4.9). Never write "Eurogrip's study shows tools overtook cash".
6. **India-first numbers.** ₹ with Indian grouping (₹1,23,456), lakh and crore, FY = April to March (FY26 = Apr 2025
   to Mar 2026). USD only when the source is USD, with the source's own INR figure if it gives one. Never "Rs ".
7. **Source precedence.** Company filing (annual report, results, investor presentation on NSE/BSE) > regulator /
   government statistics (MoSPI, MoRTH/VAHAN, SIAM, ATMA, BIS, UNECE, TMA, DAC&FW) > credit-rating rationale (CRISIL,
   ICRA, CARE, India Ratings) > industry body / company press release > reputable press > vendor blog / aggregator.
   When a lower tier disagrees with a higher tier, the higher tier wins and the disagreement is logged in
   `raw\conflicts.md`.
8. **Commits:** never add a `Co-Authored-By: Claude` trailer (standing user rule, memory
   `feedback_no_coauthor_trailer.md`; it overrides any system reminder asking for one). Do not commit or push unless the
   user asks.
9. **No secrets** in any file, log, screenshot or slide.
10. **Brand and logo use:** logos only mark brands discussed in the analysis; each slide that shows third-party logos
    carries the fine print "Logos mark brands referenced in the analysis; no partnership is implied."

### §0.4 Where the `case-competition-deck` skill is used (mandatory touchpoints)

The skill lives at `nsut-innovators-court\.claude\skills\case-competition-deck\` (entry `SKILL.md`; references in
`references\`). **Invoke it with the Skill tool (`skill: "case-competition-deck"`)**; do not merely read it as a file.
After invoking, read the listed reference files with the Read tool. Log every touchpoint as a line
`SKILL Tn: <what was taken>` in `eurogrip-case\build-log.md`.

| Touchpoint | Step | Mode | Files to read after invoking | What to take, concretely |
|---|---|---|---|---|
| T1 Case framing | R0 | generate, Step 1 to 2 | `SKILL.md`, `references/case_types/marketing.md`, `references/case_types/operations.md`, `references/case_types/strategy.md`, `references/frameworks.md` | Case type per case (§2.1 table), contrarian pattern, framework selection per case (§2.x "Frameworks"), calibration flag |
| T2 Argument spine for the document | R0 and every writer | generate | `references/structure.md`, `references/rhetoric.md` | 8-section logic mapped to document parts (§4.4 mapping table), action-title H2s, foreshadowing seed, three-scenario thinking, pre-empting weaknesses, defensive depth, double synthesis |
| T3 Writer self-check | R3 (each writer, before finishing) | critique-lite | `references/rhetoric.md` §10, §11, §14 | Every H2 is an action title with a number; every number cited; no topic labels |
| T4 Deck content plan | D0 | generate (compressed) | `SKILL.md` §C and §D, `references/structure.md` (compression guidance), `references/archetypes.md` (A Cover, H Executive summary, J Multi-chart dense, P Moneyshot, X Appendix, W Conclusion synthesis), `references/rhetoric.md` §2, §3, §9, §10, §12 | The 8-sections-on-1-slide mapping (§6.5), moneyshot, double synthesis placement, action titles |
| T5 Deck critique | D5 | critique | `references/critique_rubric.md`, `references/case_types/marketing.md` (failure modes) | Score the built deck; fix top 3 to 5 issues |
| T6 Research critique | R5 | critique | `references/critique_rubric.md` (Dimensions 1, 3, 4, 6, 7 adapted to a document) | Score the document; fix CRITICAL and IMPORTANT issues |
| T7 Q&A prep | S3 | generate | `references/rhetoric.md` §6 (pre-empting weaknesses), §8 (defensive depth) | 30-question bank with answers |
| T8 Slide-mode drafting | D1 (before writing each slide file) | slide | `references/archetypes.md` entry for the slide's archetype | Confirm the slide's archetype content is all present |

**Calibration note (write it once, honestly, in §0 of the document and in `research\ARGUMENT.md`):** the skill's
corpus is three GCCH M&A decks. These four cases are marketing (Cases 1, 4), product engineering (Case 2) and go-to-
market strategy (Case 3). The structural and rhetorical patterns transfer (contrarian recommendation, action titles,
moneyshot, foreshadowing, symmetric treatment, defensive depth, three scenarios); the M&A-specific frameworks (DCF,
premium decomposition, EPS accretion) do not apply and are replaced by the case-type frameworks named in §2.

### §0.5 Writing style contract (research document, deck, video script, Q&A)

- **Action titles everywhere.** Every H2 in the document and every slide headline is a declarative finding with a
  number. Bad: "Mechanic universe". Good: "India has about `<n>` lakh outlets where a two-wheeler tyre gets
  recommended, and `<p>`% of them do not stock tyres at all" (numbers come from the work, never from this example).
- Paragraphs 3 to 6 sentences, topic sentence first, one idea each. "We" for the team's decisions.
- **Every table** is introduced by one sentence and followed by one sentence saying what it shows, then a line
  `Source: ...` (italic) naming tags. Abbreviated column heads are expanded in an italic line under the table.
- **Banned words and phrases** (grep gate in §8; word-boundary, case-insensitive): here's, let's, bottom line, delve,
  game-changer, unlock, it's not just, make no mistake, landscape, robust, seamless, holistic, tapestry, paradigm,
  navigate the, revolutionis, revolutioniz, cutting-edge, leverage, empower, transformative, synergy, world-class,
  best-in-class, next-gen, reimagine, supercharge, harness, crucial, pivotal, furthermore, moreover, in today's,
  ever-evolving, imagine, what if, picture this, dive into, testament, realm, fast-paced, groundbreaking,
  state-of-the-art, plethora, myriad, underscore, showcase, foster, bolster, spearhead, nuanced, intricate,
  meticulous, elevate, in conclusion, it is important to note, journey, ecosystem.
  **Allow-list (the case's own words and framework names, permitted verbatim only):** "influencer advocacy
  ecosystem", "advocacy ecosystem", "ownership journey", "customer journey", "rider journey", "replacement journey",
  "next-gen tyre technology", "next-generation tyre", "competitive landscape" (the last three appear in the Case 2
  and Case 3 briefs). The assembler and the deck sweep strip these exact phrases before checking.
- No question marks in headings or slide text. No exclamation marks anywhere. No emoji.
- Numbers: percentages to one decimal unless the source gives more or less; ₹ crore with Indian grouping; always state
  the period. Model outputs keep the precision the model prints (`model_tables.md`), never more.
- Uncertain numbers appear as **bear / base / bull**, never as a lone point estimate (rhetoric tactic 5).
- Anything resting only on an aggregator or vendor page is labelled "(vendor-reported)" or "(aggregator-reported)".
- Customer and mechanic behaviour claims from secondary sources are labelled "association, not proof" where causal
  language would otherwise creep in.

### §0.6 Default when unspecified

(a) Look for the pattern in the reference projects in §1.6 (BeyondTech first, then Verdict/HarvestBox); (b) choose
the simplest option that keeps every golden rule; (c) append one line to `eurogrip-case\DECISIONS.md`:
`YYYY-MM-DD | step | decision | why`. Do not ask the user unless the action is destructive, outward-facing (pushing,
publishing, submitting on Unstop, emailing), or needs a credential that is missing. Figma file creation is pre-approved
by this plan.

### §0.7 The Sonnet execution contract (read twice)

DO: read the sections named in your dispatch prompt in full before acting; copy code blocks from Appendix Q exactly;
run every self-check and paste its output into `build-log.md`; write files incrementally (append after each section)
so a context loss never loses more than one section; report in ≤ 12 lines ending with
`STATUS: PASS | PASS WITH RESIDUALS | FAIL`.

DO NOT: redesign a slide, rename a section, change a palette value, add a framework that §2 did not choose, browse
during writing steps (writers use only `research\raw\*`, `research\data\*`, `model\*`), invent a number to fill a gap
(write "not found" and log the gap), run two Figma calls at the same time, or create a second Figma file.

---

## §1 THE FOUR BRIEFS, DECODED

The full verbatim text of all four briefs, with sentence IDs, is in **Appendix P**. Step R0 copies it to
`eurogrip-case\case\01-brief.md`. IDs: `C1-B01..`, `C2-B01..`, `C3-B01..`, `C4-B01..`.

### §1.1 Key facts common to all four

| Item | Fact | Brief ID |
|---|---|---|
| Organiser | Eurogrip × Unstop Collaboration | all, line 1 |
| Round 1 | 1-page executive summary + 2-minute video pitch ("precise and direction-focused, not a polished production"; "clarity of thinking, not creativity or presentation quality") | C1-B15/16, C2-B19/20, C3-B13/14, C4-B23/24 |
| Round 2 | Up to 15 slides excluding annexures, 1 to 2 weeks | C1-B17, C2-B21, C3-B15, C4-B25 |
| Budget rule (Cases 1, 3, 4) | 1.5% to 2% of operating revenue (Case 1) / of the relevant business-unit revenue (Cases 3, 4) | C1-B12, C3-B10, C4-B19 |
| Case 2 constraints | Global viability, cost realism (mass-market band), manufacturability on largely existing processes | C2-B16, C2-B17, C2-B18 |
| Chosen deck case | Case Study 4 (user decision 2026-10-14) | n/a |
| Deck format | 4 slides: Cover, Core (= Round 1 exec summary), Appendix, Thank you (user decision) | n/a |

### §1.2 Requirements traceability matrix (Case 4, the deck case)

Every requirement of Case 4 maps to a research section and a deck panel. Executors keep this table true; the D5
critique re-checks it.

| Req | Brief wording (abridged) | ID | Research § | Deck panel (§6) |
|---|---|---|---|---|
| R1 | Mechanics are the most frequented touchpoint; mechanic most often recommends the tyre at replacement | C4-B03/04 | §6, §7 | S1 mind map (THE MECHANIC node); S2 P1 |
| R2 | Advocacy today is informal: unstructured, inconsistent, hard to place on the same plans as peers | C4-B05 | §7, §9 | S2 P2 (insight 4), P4 (tiers make it structured) |
| R3 | Brand awareness lukewarm; recommendations not in Eurogrip's favour | C4-B06/07 | §7 | S2 P2 insight 1 |
| R4 | Build a scalable, cost-effective advocacy ecosystem across India | C4-B09 | §10, §12 | Headline; P4; P6 |
| R5 | Genuine, lasting recommendation, without high-cost one-off incentives that are hard to sustain or track | C4-B10 | §9, §10, §13 | P3 (obvious play rejected), P4 loop, P8 |
| R6 | Insight: awareness average, stocking lags competitors, opportunity is awareness → stocking → recommendation | C4-B11 | §7 | P2 insight 1; P4 Tier 3 asks for stocking |
| R7 | (STRUCK) tools overtook cash as top-ranked support | C4-B12 [STRUCK] | §1.3 ruling | Never cited as a finding |
| R8 | Insight: preference for brand-visibility items (merchandise, display boards, uniforms) rising quickly; association and status | C4-B13 | §7, §10 | P2 insight 3; P4 Gets column |
| R9 | Insight: meaningful advocacy from mechanics who do not stock Eurogrip; influence ≠ stocking | C4-B14 | §7, §10 | P2 insight 2; P4 loop (code works without stock); cover seed |
| R10 | Research: scale of the mechanic and puncture-shop universe (numbers, geography, fragmentation) | C4-B16 | §6 | P1; Appendix A1 |
| R11 | Research: cost benchmarks for tools/equipment and branded merchandise at scale | C4-B17 | §8, §11 | P7 budget; Appendix A2 |
| R12 | Research: how adjacent categories (auto parts, lubricants, batteries) or competitors structure programmes | C4-B18 | §8 | Appendix A3 heat grid; cover crests |
| R13 | Budget 1.5% to 2% of relevant BU revenue | C4-B19 | §11 | P7 title; Appendix A2 |
| R14 | Scalable nationally, not boutique | C4-B20 | §12 | P6 gantt (national by Q5 to Q8) |
| R15 | Sustain advocacy over time, not one sign-up incentive | C4-B21 | §10, §13 | P4 loop ("tiers renew every 6 months"); P2 insight 4 |
| R16 | Some mechanism to track or estimate effectiveness, even if imperfect | C4-B22 | §13 | P8 scorecard; P5 moneyshot (break-even) |
| R17 | Round 2 content: programme structure, incentive design, scale/rollout plan, budget allocation | C4-B25 | §10 to §12 | P4, P4, P6, P7 |
| R18 | Judging: incentive realism, insight-grounding, scalability, sustainability, measurability | C4-B26..30 | §1.4 | S2 ribbon = the five criteria |

Equivalent RTMs for Cases 1 to 3 are written in research §1 by writer A (same columns minus "Deck panel", plus
"Slide in a 15-slide version" from §2.5 to §2.7 below).

### §1.3 Edits visible in the briefs (blue text and strikethroughs) and how to treat them

The PDFs carry editing marks: some sentences are in **blue** (added or emphasised in a late revision) and some are
**struck through** (deleted). Text extraction loses these marks, so they are recorded here and in Appendix P.

| Case | Mark | Text | Treatment |
|---|---|---|---|
| 2 | Blue | "Tyre construct:" (label of the first technical area) | Use "tyre construct" as the case's term for carcass + compound architecture |
| 2 | Blue | "Optimized performance on vital needs like grip, high speed stability, damage resistance, durability." | A required technical area; Case 2 concept must show all four |
| 2 | **Struck** | "Thermal management: addressing heat build-up from frequent regenerative-braking cycles." | Removed from scope. Mention heat only where it follows from rolling resistance / hysteresis physics; do not present thermal management as a required pillar |
| 3 | Blue | Research bullets 1 and 2 (competitive landscape incl. "Define the current standing of Brand TVS EUROGRIP"; farmer and fleet buying behaviour) | Mandatory research outputs for Case 3; note the brief's own name "TVS EUROGRIP" for the tractor brand |
| 4 | Blue | "most frequented"; "the mechanic most often becoming the person recommending ... hard to place on the same plans as their peers"; the second background paragraph; "one that drives genuine, lasting brand recommendation ... hard to sustain or track"; insight 1; research bullet 3; the heading "Challenges" | Emphasised by the organiser: these are the scoring anchors; every one is mapped in §1.2 |
| 4 | **Struck** | "own" in "Eurogrip's own brand-track research"; "here" in "a real opportunity here" | Cosmetic; quote the edited sentence |
| 4 | **Struck** | Insight bullet 2: "Mechanic preferences for brand support have shifted: functional support, tools and equipment to change tyres, has overtaken cash and pricing incentives as the top-ranked way mechanics want to be supported by a brand." | Deleted finding. Ruling in §0.3 rule 5 |

### §1.4 Judging criteria → where Case 4 wins each one

| Criterion (C4-B26..30) | What the judges look for | Where we win it | Evidence the judge sees |
|---|---|---|---|
| Incentive realism | Would mechanics and puncture-shop owners actually engage | Tier ladder priced per member per year from real tool prices; Tier 1 is free and costs the mechanic nothing; rewards are things a shop uses daily (repair kit consumables) | S2 P4 table; Appendix A2 cost per member; research §11 tool price table |
| Insight-grounding | Builds on the preference shift toward tools/equipment and brand visibility, away from pure cash | Every design element is traced to a brief insight (S2 P2 maps four insights to four design responses) and the obvious cash play is explicitly rejected (P3) | S2 P2, P3 |
| Scalability | Works nationally within budget | Universe sized four ways; members affordable inside 1.5% to 2% of BU revenue; distributor-led enrolment; national by Q5 to Q8 | S2 P1, P6, P7; Appendix A1, A2 |
| Sustainability | Advocacy persists after the first incentive | Rewards recur (consumables refill, tool upgrades), status is re-qualified every 6 months, visibility compounds (shop board, listing), training creates identity | S2 P4 loop, P2 insight 4 |
| Measurability | Tracking feasible, even if imperfect | Code logged by the retailer in Eurogrip's existing retailer app; mystery-rider audits; matched-district pilot; brand-track re-run; explicit gates G1 to G3 | S2 P8, P5 moneyshot, P6 gates; Appendix A4 |

### §1.5 Team, institution, naming (resolved from earlier decks and memory)

| Field | Value | Basis |
|---|---|---|
| Team name | TEAM IDEAFORGE | every earlier IdeaForge deck (BeyondTech, Next Signal plans) |
| Member 1 | Harsh Kawatra · Delhi Technological University · Team Leader | `next-signal-bits\PLAN.md` §1.5, BeyondTech `make_values.py` |
| Member 2 | Anuj Gambhir · Delhi Technological University · Member | same |
| Research document team line | `Team: Harsh Kawatra and Anuj Gambhir, Delhi Technological University, Team IdeaForge` | |
| Cover table | Members \| Institution \| Role (memory `feedback_cover_style.md`); the same table repeats on the thank-you slide; **no KPI-card row on the cover** | |

The sweep rule "bare Harsh" (deck sweeps) stays: always "Harsh Kawatra".

### §1.6 Reference material and prior work (read the named lines before your phase)

| Purpose | Path | Read |
|---|---|---|
| Deck doctrine | `nsut-innovators-court\CLAUDE.md` | all, before any deck step |
| Figma generator to copy (proven, critique 43/45) | `beyondtech-dcg\deck\` (`gen.py`, `_palette.js`, `_extras.js`, `_x2.js`, `_v1.js`, `_sweeps.js`, `setup.js`, `metrics.json`, `preview.py`, `slides\s01.js`, `s03.js`, `s11.js`) | D1 |
| Shared preamble and offline mock (read-only, referenced by path) | `verdict-mnc\deck\preamble.js`, `verdict-mnc\deck\mock_figma.js` | D1 (do not edit) |
| Research assembler and PDF builder to copy | `beyondtech-dcg\research\assemble.py`; PDF template `iim-lucknow-pivot\research\build_pdf.py` | R4 |
| Writer brief to imitate | `beyondtech-dcg\research\parts\WRITER-BRIEF.md` | R3 |
| Register and honesty conventions | lines 1 to 140 of `verdict-mnc\research\harvestbox-research.md` and of `beyondtech-dcg\research\beyondtech-gtm-research.md` | R3 (register only, never content) |
| Best per-slide geometry precedent | `C:\Users\harsh\.claude\plans\working-folder-verdict-mnc-binary-pizza.md` §9 | D1 (style only) |
| Visual inspiration (screenshots, read-only) | Figma Slides: prime inspo `hOJVMGv9nIhDmayTT7DmOt`; others `e5VEexsLMhDampx7gvhFmM`, `vAIyXmljHlFDuwQo6RsoIN`, `APbOstO4SSU7iAjYIgEeSd`, `JLOOyohkQPUrwXEsxDKz4m`, `YoiazGGOribfg69EjEDIlP`, `O7oWkJR37V0H8IDKnt2Ed7`; BeyondTech `cpcsN7ytWMJputcohXOMgz` (cover mind map slide `2:2`) | D0 |
| Do NOT use as a template | `lsr-caseforchange\` (rejected by the user), the Satoshi Gate cover (plain text card; the user disliked it) | never |

### §1.7 Machine facts (verified at planning time, 2026-10-14)

| Fact | Value |
|---|---|
| Python | `PY` = `"C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" -X utf8` (has `markdown_it`, `openpyxl`, `fitz` (PyMuPDF), `PIL`, `docx`, `requests`). Do not use the default `python` (3.14, lacks PDF libraries). |
| Node | v24.15.0 on PATH (the generator's offline mock runs `node -`) |
| Chrome | `C:\Program Files\Google\Chrome\Application\chrome.exe` (headless PDF rendering) |
| Shells | PowerShell 5.1 primary (no `&&`; use `;` and `if ($?) {}`), Git Bash available |
| Figma plan key | `team::1564294484048272772` (from the Next Signal plan; confirm with `whoami` in D2) |
| Repo root | `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court` (abbreviated `ROOT` below) |
| Case folder | `ROOT\eurogrip-case` (abbreviated `EG`) |

### §1.8 Planning-time evidence (leads to re-verify from primary sources; never cite as-is)

These came from quick searches while planning. Lanes must open the primary source and confirm or correct each one.

| Lead | What was seen | Where to verify | Lane |
|---|---|---|---|
| L1 | TVS Srichakra FY26 consolidated revenue about ₹3,643 crore, up about 12%; PAT about ₹71 crore | FY26 results filing on NSE/BSE; FY26 annual report | R-A |
| L2 | FY25: standalone sales + other income ₹3,030.53 crore; consolidated ₹3,260.04 crore (42nd annual report, as reproduced by IIFL) | FY25 annual report PDF | R-A |
| L3 | Q2 FY26 revenue ₹926.49 crore (Business Standard); Q1 FY27 reports conflict (₹1,067.61 crore vs other figures) | quarterly results filings | R-A |
| L4 | Website `eurogriptyres.com` (redirect from `tvseurogrip.com`): "Exports spanning over 6 Continents, 85 Countries, 100+ Distributors"; OEM clients listed: Aprilia, Bajaj, Hero, Honda, Piaggio, Suzuki, TVS Motor, Yamaha; logo file `eurogriptyres-logo-apr25.png`; product lines 2W, 3W, ULT, agricultural, industrial, OTR; a "Tyre Shop Locator" at `/tyre-shop-near-me` | website (fetch again; the counters loaded as 0) | R-A |
| L5 | TVS Eurogrip **Bandhan** app (2019) for retailer loyalty, later e-ordering (May 2020 reports); **Click to Connect** warranty app (2021) for retail partners; a 2024 CSK campaign promoted "retail and mechanic outlets", "over 30,000 partners" targeted | autocarpro.in, tyre-trends.com, company press releases, Play Store listing (check whether Bandhan is still live and what it is called today) | R-A |
| L6 | Castrol India "Fast Scan" digital incentive platform: 1.5 lakh mechanics and retailers enrolled (2019), over 1 lakh coupons scanned daily, about ₹6 crore rewards a month, IMPS payout, Standard Chartered partner | castrol.com/en_in newsroom 2019 | R-D |
| L7 | Castrol Super Mechanic Contest: 2021-22 edition, more than 1,40,000 mechanics via IVR and website; skilling with ASDC | castrol.com press releases 2021, 2022 | R-D |
| L8 | Mobil (ExxonMobil Lubricants) "Mission Mechanic Unnati" 2016 (CV mechanics; top 50 trained, workshops upgraded to Mobil service centres); "Udaan" retailer training | commercialvehicle.in, autocarpro.in | R-D |
| L9 | Amara Raja "Amaron Mileage" app: mechanic engagement for Amaron Hi-Life lubes, QR coupon scan | App Store listing; Amara Raja site | R-D |
| L10 | Two-wheeler tyres about 123.5 million units and USD 2.85 billion in FY25 (autobei.com, aggregator); main 2W brands named MAXXIS, MRF, TVS, CEAT | autobei (aggregator) → confirm against ATMA, ICRA/CRISIL sector notes | R-B |
| L11 | 2W tyre changer machine about ₹45,000 (IndiaMART listing); tubeless repair kits ₹199 to ₹1,500 online; nitrogen inflators ₹50,000 to ₹2.2 lakh | IndiaMART, Amazon.in, Moglix | R-D |
| L12 | No credible national count of two-wheeler mechanics or puncture shops surfaced in quick search; MoSPI ASUSE and Economic Census tables by NIC code are the primary route | MoSPI ASUSE 2022-23 and 2023-24 reports and data portal; 6th Economic Census | R-C |
| L13 | India e-2W sales FY25 1,149,334 units (ANI, May 2026) | VAHAN dashboard; SIAM | R-F |
| L14 | GST on tyres changed in the September 2025 GST rate rationalisation (verify the rate for two-wheeler tyres before and after) | CBIC notification; PIB | R-B |

---

## §2 THE SOLVED ARGUMENT (skill generate mode, Steps 1 to 7, decided at planning time)

R0 confirms this section through the skill (touchpoint T1/T2) and writes it into `research\ARGUMENT.md` in final
wording. Lanes may **correct facts** that feed it; they may not change the recommendations. If a lane finds a fact
that breaks a recommendation (kill criteria in §2.2.13 and per case), the lane writes it in its `## Conflicts`
section and the orchestrator reports it to the user before writers start.

### §2.1 Case type, audience and moneyshot form (skill Step 1)

| Case | Skill case type (closest) | Calibration flag | Audience | Moneyshot form |
|---|---|---|---|---|
| 1 Brand across Commuter, Gig, Premium | Marketing (`case_types/marketing.md`) | extrapolated (skill says marketing patterns are not corpus-derived) | Eurogrip brand and marketing leadership | The share of the fixed budget that lands where the tyre is chosen (`c1.chosen_share_pct`, retail + on-ground) and what it buys (`c1.reach`: outlets branded, gig riders enrolled, unique reach) |
| 2 EV tyre concept | Operations + Strategy hybrid (no exact fit) | extrapolated; product-engineering case | R&D and product leadership | "+x% EV range for ₹y more per tyre (z% of tyre cost), on existing lines" |
| 3 OHT tractor share | Strategy (`case_types/strategy.md`), GTM flavour of Marketing | extrapolated | OHT business head, domestic sales | Rear-pair cost per working hour for a commercial operator (`c3.tco_per_hour`) and the share points the budget must win to pay back (`c3.share_points_sc`), bear / base / bull |
| 4 Mechanic advocacy (deck) | Marketing (trade / influencer) + Operations (programme operations) | extrapolated | Aftermarket sales and marketing leadership | **Break-even extra tyres per member shop per year** (and "one tyre every N weeks"), bear / base / bull |

### §2.2 Case 4, solved in full (this drives the deck)

#### §2.2.1 The obvious answer and why it falls short

**Obvious answer:** a scan-and-earn loyalty app for mechanics. Each Eurogrip tyre sold or fitted earns points or cash
(the lubricant-industry model: QR coupon in the pack, instant bank payout), plus a one-time sign-up kit.

Three reasons it falls short (final wording for document §9 and S2 panel P3; numbers come from lanes and model):
1. **It pays stockers, but advice comes from everyone.** Points per tyre sold reward only shops that stock Eurogrip,
   while the brief says a meaningful share of advocacy already comes from mechanics who do not stock it `[C4-B14]`.
   Deck short form: "Pays stockers; advice comes from all".
2. **Tyres sell too rarely per shop for points to add up.** A lubricant is changed several times a year per bike; a
   tyre lasts years. Points that accrue a few times a year are either too small to change behaviour or so large that
   they become the "high-cost, one-off incentive" the brief rules out `[C4-B10]`. Quantify with R-B (replacement
   interval) and R-C (tyres fitted per shop per month) in document §9. Deck short form: "Too few tyre sales per shop
   for points".
3. **Cash is the easiest thing for rivals to match and it measures sales, not recommendations.** A rival matches a
   higher payout within a week; the payout stops, the advocacy stops; and a QR scan records a sale at a stocking shop,
   not a recommendation at a non-stocking one, which is what the measurability criterion asks for `[C4-B22]`. Deck
   short form: "Rivals can match cash within a week". Also compute (model `c4.cash_scheme`) the **deadweight share**:
   the fraction of a per-tyre cash scheme's spend that rewards tyres that would have sold anyway.

#### §2.2.2 The recommendation (the contrarian design thesis)

**Governing thought (verbatim for ARGUMENT.md, document §2, cover verdict card):**
"Pay for the advice, not the stock, and pay in tools and status rather than cash."

Expanded (document §10 lead): every mechanic and puncture shop can join for free. Members get the tools of their
trade, visible Eurogrip association and training, all of which they use every day; in return they recommend Eurogrip
using a personal code. The rider can buy the tyre at any Eurogrip retailer; the retailer logs the code when the tyre
is sold, in the retailer app Eurogrip already runs; the code earns the mechanic tool credits and keeps or lifts their
tier. Tiers are re-qualified every six months, so the programme renews itself instead of fading after a sign-up gift.

Three reasons (S2 and document §2):
1. **It credits the advice where it happens**, including shops that never stock a tyre (`[C4-B14]`), and pulls
   stocking along at Tier 3, where the brief says the gap is (`[C4-B11]`).
2. **It pays in what a shop uses every day and wants to be seen with:** repair kits, gauges, inflators, boards and
   uniforms (`[C4-B13]` and the judging criterion `[C4-B27]`). Consumables run out every quarter, which creates a
   recurring, low-cost reason to stay active (sustainability).
3. **It is measurable with what Eurogrip already owns**: the retailer app logs each code against a tyre serial;
   mystery-rider audits measure unprompted recommendation; a matched-district pilot measures the lift.

**Counter-positioning (7 Powers, document §10.6):** rivals running purchase-linked cash schemes cannot copy a
stock-independent design without paying for advice on tyres they do not sell to that shop and cannibalising their own
schemes. State this as reasoning, not as a claim about rivals' internal economics.

#### §2.2.3 The mechanic universe, segmented (MECE by role at the moment of replacement)

| Segment | Role at replacement | Typical shop | What it needs from a brand | Programme entry point |
|---|---|---|---|---|
| S-A Stocking mechanic-retailers | Sells and fits tyres | Tyre shop or multi-brand workshop with tyre stock | Margin, fast-moving stock, credibility, fitting equipment | Tier 3 (fitting hub); already a retailer in the app |
| S-B Service mechanics, non-stocking | Diagnoses wear, recommends, often buys from a nearby retailer on the rider's behalf | General two-wheeler service garage | Tools, look of a professional shop, quick sourcing of the recommended tyre | Tier 1 → Tier 2 |
| S-C Puncture and tyre-repair shops | Declares "this tyre is finished" at the puncture, the most frequent tyre moment | Roadside or small shop, compressor, patches | Repair consumables, gauge, inflator, signage | Tier 1 → Tier 2 |
| (S-D OEM authorised workshops) | Fit OE-brand tyres under OEM contracts | Dealer workshop | Out of scope: governed by OEM supply terms; mention as boundary | none |

Sizes (lakh outlets, share) come from R-C triangulation (§4.2 lane R-C) and the model (`c4.segments`). If R-C cannot
split S-B from S-C from any source, the model uses the assumption register `A05` (stated, bear/base/bull) and the
document says so plainly.

#### §2.2.4 The tier ladder (incentive design)

Thresholds and costs are model assumptions (register in §5.3) priced from R-D. The **words** below are fixed.

| Tier | Who / entry rule | Gets (in kind, never cash) | Gives back | Renewal |
|---|---|---|---|---|
| Tier 1 | Any mechanic or puncture shop; free sign-up by distributor sales staff or by missed call / WhatsApp; phone, shop photo, GPS pin | Starter tubeless puncture-repair kit, small shop board with QR code, member code card, monthly tips on WhatsApp | Shares their code with riders who need a tyre (any referral in 6 months keeps them active) | Inactive after 6 months without a logged code; kit refills stop |
| Tier 2 | `A14` logged referrals in 6 months **or** completes the 2-hour tyre-fitment course (tubeless repair, correct pressures, EV tyre handling) | Digital pressure gauge, tyre levers and bead breaker, apron or uniform, larger board, certificate, quarterly consumables refill (plugs, patches, valve cores) | `A15` referrals a year | Drops to Tier 1 if below threshold at the 6-month review |
| Tier 3 | `A16` referrals a year **or** stocks the agreed Eurogrip core sizes | Electric inflator or compressor (cost-shared), tyre changer for the top hubs (cost-shared or lease), shop fascia, featured listing in Eurogrip's online tyre-shop locator, priority stock through the distributor, annual meet | `A16` referrals a year and stocks core sizes | Same 6-month review |

S2 short forms (fixed; column widths in §6.6 are sized for these exact strings):
`["Tier 1","repair kit and board","any referral"]`, `["Tier 2","gauge, apron, course", A15+" referrals"]`,
`["Tier 3","inflator and listing", A16+" referrals"]` (make_values fills the numbers; "12 referrals" is ≤ 12 chars).

#### §2.2.5 The recommendation loop (how a code becomes a credit)

1. Mechanic recommends Eurogrip and hands the rider the code (card, board QR, or WhatsApp message with a store
   locator link).
2. Rider buys at any Eurogrip retailer (or at the Tier 3 hub itself).
3. Retailer logs the mechanic code against the tyre's serial number in the retailer app at the point of sale (the
   retailer earns a small logging credit inside its own existing scheme, so it has a reason to log).
4. The mechanic's tool credits rise; credits redeem only against the programme catalogue (tools, consumables,
   visibility items, training seats).
5. Every six months each member is re-tiered on logged codes.

Fraud controls (document §13.5; Appendix A4 risks): one credit per tyre serial; monthly cap per member; random IVR
call-backs to riders; flags when retailer and mechanic are more than `A21` km apart; distributor audit of top earners.

**App dependency rule:** R-A must confirm the retailer app's current name and status (planning lead L5: "Bandhan",
2019). If it is live, the deck says "Bandhan app". If it is renamed, use the current name. If no live retailer app
exists, `rulings.json` `app_name` = `retailer app` (≤ 20 characters; the deck then reads "logged in the retailer
app"; the "to be extended" qualifier appears only in the research document) and the model raises `A22` to a one-time
build cost. Record
the ruling in `DECISIONS.md`; `make_values.py` reads it from `model_outputs.json["c4"]["app_name"]`.

#### §2.2.6 What keeps advocacy alive after month one (sustainability engine)

| Mechanism | Why it persists | Cost behaviour |
|---|---|---|
| Consumables refill each quarter, only for active members | Plugs and patches run out; the refill is a recurring reason to log codes | variable, small |
| Six-month tier review | Loss of status and tools is a stronger motive than a one-off gift (loss aversion; cite a behavioural-economics source from R-H) | none |
| Visibility compounds | A board, apron and locator listing bring the shop customers; the shop wants to keep them | one-time, amortised |
| Skills and certificate | Tubeless and EV tyre fitment are new skills; a certificate is a professional identity | per head, one-time |
| Community and recognition | Cluster meets run by distributors; state-level recognition for top members (non-cash) | small, annual |

#### §2.2.7 Scale and rollout (24 months, three gates)

| Phase | Quarters | Coverage | Purpose | Gate to pass before next phase |
|---|---|---|---|---|
| Pilot | Q1 to Q2 | 2 states, treated districts vs matched control districts | Prove engagement and lift; run the tool-credit vs cash-equivalent arm test | **G1** at end of Q2 (metrics in §2.2.9) |
| Scale | Q3 to Q4 | 8 states covering the largest share of the two-wheeler parc (R-C picks them from VAHAN registrations) | Prove cost per member at volume, distributor-led enrolment | **G2** at end of Q4 |
| National | Q5 to Q8 | all states through the distributor network | Steady state; annual brand-track re-run | **G3** at end of Q8 (annual review: brand-track re-survey) |

Pilot state rule (deterministic, applied by R-C with data): Pilot A = the state with the highest Eurogrip presence
among the top 10 two-wheeler registration states (default Tamil Nadu, Eurogrip's home state); Pilot B = the state with
the largest two-wheeler registrations where Eurogrip presence is weaker (default Uttar Pradesh). If data changes the
defaults, log it.

#### §2.2.8 Budget logic

- Envelope: `A02` (1.5% bear, 1.75% base, 2.0% bull) × relevant BU revenue `A01` (domestic two-wheeler and
  three-wheeler replacement revenue; derivation rule in §5.3). The base case spends at 1.75% and treats the headroom to
  2.0% as contingency.
- Lines (exactly five on the slide; the model keeps these five names):
  `Tools, refills` · `Visibility kits` · `Training, meets` · `Field teams` · `Tech and audits`.
- Members affordable = (envelope − fixed costs) ÷ blended cost per member per year, capped at the coverage plan.
- Year 1 (pilot + scale) and Year 2 (national) are both checked against the envelope; the slide shows Year 2.

#### §2.2.9 Measurement system (four layers, one experiment)

| Layer | Metric (slide short form) | Definition | Source | Gate value (assumption) |
|---|---|---|---|---|
| Activity | Monthly active | members with ≥ 1 logged code or catalogue redemption in the month ÷ members | retailer app + programme log | G1 ≥ `A23` (base 60%) |
| Advocacy | Mystery audit | share of audited shops that name Eurogrip unprompted when a "rider" asks which tyre to buy; member vs control districts | audit agency | G1: +`A24` points vs control (base 15) |
| Sales | Code-linked tyres | tyres logged with a member code per member per year | retailer app | G2 ≥ break-even (model `c4.be`) |
| Brand | Brand re-survey | Eurogrip's own mechanic brand-track study re-run: awareness, stocking, recommendation | Eurogrip | G3: stocking up vs baseline |

Experiment: matched-district difference-in-differences in the pilot (treated vs control districts matched on
two-wheeler registrations and baseline Eurogrip sell-in), plus a randomised reward-currency arm (tool credits vs cash
equivalent of equal value) across pilot districts to test the tools-vs-cash preference the brief's criterion names.
The model computes the audit sample size per arm with the two-proportion formula
`n = 2 × (z₀.₉₇₅ + z₀.₈₀)² × p(1 − p) ÷ d²` (base p = `A25`, d = `A24`/100) and the audit cost.

#### §2.2.10 The moneyshot (one per deck; rhetoric §12)

**"A member shop needs `<be>` extra Eurogrip tyres a year, one every `<weeks>` weeks, for the whole programme to pay
for itself."** `be = steady-state annual programme cost (c4.spend_cr) ÷ members ÷ contribution per tyre`, bear / base /
bull from the model.
Contribution per tyre = average replacement tyre MRP ÷ (1 + GST) × (1 − channel margin) × contribution margin (all
in the register, §5.3). It is honest because it claims no uplift; it states the bar the pilot must clear. On S2 it is
the largest numeral in the deck (80 pt), card named `CARD: MONEYSHOT`.

#### §2.2.11 Foreshadowing and symmetry

- **Seed** (planted before the recommendation is named): on the cover mind map, sub-caption
  "Advocacy already comes from mechanics who do not stock Eurogrip." and S2 P2 insight 2. Document: the seed sentence
  appears in §5 (rider journey) before §10 names the design.
- **Symmetry:** the three segments get the same table structure everywhere (document §6, §7, §10; Appendix A1); the
  four cases get the same chapter skeleton in the document (§4.4).

#### §2.2.12 Frameworks used in Case 4, and where

| Framework (skill `frameworks.md`) | Use | Document § |
|---|---|---|
| MECE issue tree | Why mechanic advocacy for Eurogrip is weak (awareness, stocking, recommendation, sustainability, tracking branches) | §7 |
| Customer journey map | Rider's replacement journey with mechanic touchpoints and the moment the tyre is declared finished | §5 |
| Jobs to be done | Mechanic's jobs: fix fast, earn, look professional, keep the customer | §7 |
| Kano model (hypothesis, flagged) | Cash = performance attribute rivals match; tools = basic need; visibility = delighter, to be tested in the pilot | §10 |
| Feature-parity matrix | Adjacent-category programmes vs our design | §8 |
| 7 Powers: counter-positioning | Why rivals struggle to copy | §10 |
| Unit economics, break-even | Cost per member, contribution per tyre, break-even tyres | §11 |
| Scenario analysis + tornado | Bear / base / bull and the five assumptions that move break-even most | §11 |
| Three Horizons (as 3 phases) + stage gates | Rollout | §12 |
| KPI tree / balanced scorecard | Four-layer measurement | §13 |
| Difference-in-differences, power calculation | Pilot design | §13 |
| Pre-mortem + risk heat map with 1:1 mitigation | Risks | §14 |
| RACI | Who runs what (TVS Srichakra aftermarket team, distributors, retailers, audit agency, training partner) | §12 |

#### §2.2.13 What would change our mind (kill and pivot criteria; document §2.8 and §15)

- R-C finds that most two-wheeler tyres are bought without any mechanic involvement (for example, a credible study
  showing riders mostly choose at the retailer unaided): keep the programme but move weight from S-B/S-C to retailer
  staff; the core thesis (pay advice, not stock) still holds.
- R-A finds no retailer app or POS logging capability: add build cost `A22`, push pilot to Q2 start.
- Model break-even (base) above `A26` tyres per member per year (base 12, i.e. one a month): cut Tier 3 hardware to
  lease-only and re-run; if still above, narrow to S-A and S-B only.
- Pilot G1 fails on activity (< `A23`) but passes on advocacy: fix onboarding; fails on advocacy: stop at 2 states.

#### §2.2.14 Third-party validation (real, sourced only)

Up to three published statements, verbatim with source and date, that support "influencer programmes in Indian
automotive aftermarket work at national scale" (for example Castrol India's statements on its mechanic platform and
skilling contest, R-D) and one TVS Srichakra management statement on its retail or mechanic network (R-A, annual
report or press). If none is found verbatim, the document says so and uses programme scale facts instead. Never
paraphrase a quote as if verbatim.

### §2.3 Case 1, solved (document §17 to §20)

- **Obvious answer:** three separate campaigns (commuter: mass digital and TV; gig: discounts; premium: influencers
  and motorsport) on top of the existing sports sponsorship.
- **Why it falls short:** three campaigns fragment one budget and break the coherence constraint `[C1-B14]`; discounts
  to gig riders buy share, not preference; premium influencers without product proof read as paid.
- **Recommendation:** **one brand, one proof currency, three entry points.** The proof currency is distance: the gig
  fleet (riders doing the most kilometres per day, R-E) is enrolled through fleet operators and platforms (EV fleet
  operators, delivery and ride-hailing partner programmes) with tracked tyre life; that real-world distance evidence
  is what commuters see at the retail counter and the mechanic's shop (built on the Case 4 programme), and premium
  riders get the technology story through peer advocacy in riding communities and track or test events. Masterbrand
  architecture (Eurogrip as the only brand; segment proof points underneath).
- **Channel × segment budget matrix** (Digital / Retail / On-ground × Commuter / Gig / Premium / Brand platform) priced
  from R-E benchmarks, inside 1.5% to 2% of operating revenue (model `c1`).
- **Frameworks:** STP, personas built from data (no invented quotes; personas are archetypes with sourced facts),
  Keller CBBE pyramid, brand funnel (awareness → consideration → preference), customer journey per segment, 4Ps,
  budget allocation matrix, media cost benchmarks (CPM, cost per lead), KPI tree.
- **Moneyshot:** the share of the budget spent where the tyre is chosen (`c1.chosen_share_pct`) and what it buys
  (`c1.reach`), with the budget bear / base / bull (`c1.budget_cr`).
- **Sample campaign ideas:** described plainly, three per segment, each with channel, mechanic, cost line and KPI;
  any sample copy line is labelled "sample copy" and is never a programme name.

### §2.4 Case 2, solved (document §21 to §25)

- **Obvious answer:** a premium, dedicated EV tyre range with an expensive new compound and a new construction, sold at
  a premium.
- **Why it falls short:** the brief requires a mass-market cost band `[C2-B17]` and largely existing processes
  `[C2-B18]`; most EV two-wheeler volume in India is scooters on 10 to 12 inch rims (R-F confirms with VAHAN model mix),
  a price-sensitive segment.
- **Recommendation:** **an EV-ready variant of the mass-market platform, not a new premium tyre.** Four engineering
  moves, each on existing equipment:
  1. *Tyre construct:* dual-layer tread (cap and base) from the existing duplex extruder: cap compound silica-rich
     solution SBR / natural rubber with silane coupling for lower hysteresis at running temperature (rolling
     resistance) and better wet grip; base compound low-hysteresis natural rubber / carbon black for heat and cost.
  2. *Tread pattern:* variable-pitch sequencing (three to five pitch lengths) to spread tread noise across
     frequencies, closed shoulder blocks and a continuous centre rib for straight-line stability and even wear under
     regenerative braking; groove volume kept for wet drainage.
  3. *Load:* raise the load index one to two steps in the same size via cord and bead reinforcement (marked as a
     reinforced tyre per ETRTO conventions), so battery weight does not force a size change.
  4. *Optimized performance on vital needs* `[C2-B13]`: grip, high-speed stability, damage resistance (puncture and
     cut resistance from a breaker or cap ply option), durability (wear index).
- **Compliance approach:** India BIS standard for two-wheeler tyres under the Quality Control Order, UNECE Regulation 75
  (motorcycle and moped tyres) for Europe and other 1958-Agreement markets, US FMVSS 119 and DOT marking, plus GCC,
  Indonesia SNI, Brazil INMETRO as R-F confirms; rolling-resistance and noise labelling regimes that apply only to car
  and truck tyres (UNECE R117, EU 2020/740) are named honestly as **not applicable** to two-wheelers, so the concept
  uses voluntary drum tests and states the method.
- **Cost and manufacturability:** cost build-up per tyre for one reference size (R-F picks the highest-volume EV
  scooter size), ICE baseline vs EV-ready variant, bill of materials by compound ingredient at current prices, extra
  mixing pass for silica, target ≤ `A2-03` (base +8%) cost delta.
- **Frameworks:** first-principles physics (hysteresis and tan δ, the "magic triangle" of rolling resistance, wet
  grip and wear), QFD house of quality (rider needs → engineering characteristics), TRIZ contradiction (grip vs rolling
  resistance), DFM, FMEA, standards compliance matrix, TRL ladder and stage gates.
- **Moneyshot:** "+x% range for ₹y more per tyre (z% of tyre cost), on existing lines", with the range-sensitivity
  derived from literature R-F finds (rolling-resistance share of energy use at urban speeds); bear / base / bull.

### §2.5 Case 3, solved (document §26 to §29)

- **Obvious answer:** more dealers, deeper discounts, farmer meets and wall paintings.
- **Why it falls short:** dealer loyalty is regional and entrenched `[C3-B04]`; discounts start a price war with
  bigger rivals; awareness spend does not move a relationship-driven, low-brand-salience purchase `[C3-B06]`.
- **Recommendation:** **win the hardest-working tractors first, and let their tyre life sell the brand to
  smallholders through the dealer.** Segments: (1) commercial and haulage operators and custom hiring centres, whose
  tractors run the most hours (sugarcane, brick kiln, sand and construction haulage, rental), buy on total cost of
  ownership and talk to many farmers; (2) smallholder owner-operators, who buy on price, credit and dealer trust, at
  harvest-linked cash-flow moments; (3) the dealer and the village mechanic as the channel and influencer. Value
  proposition: a dealer-administered tyre-life assurance for high-use segments (hours- or season-based, priced in the
  model), harvest-timed credit through NBFC or co-operative partners for smallholders, and regional pattern and size
  priorities (wet-paddy lugs vs dry haulage) from R-G.
- **Frameworks:** Porter's Five Forces for tractor tyres, bottom-up market sizing (tractor parc by state × replacement
  cycle), buying-centre map, TCO model, regional heat map (state × cropping × terrain × farm size), dealer economics,
  GE-McKinsey style state prioritisation.
- **Moneyshot:** the rear-pair cost per working hour for a commercial operator (`c3.tco_per_hour`) and the share
  points the GTM budget must win to pay for itself (`c3.share_points_sc`, bear / base / bull), inside 1.5% to 2% of
  domestic OHT revenue.

### §2.6 Cross-case links (document §30)

The four answers reinforce each other and the document says so once, plainly: the Case 4 mechanic programme is the
retail proof channel for Case 1's commuter and gig messages; Case 2's EV-ready tyre needs trained fitment (Case 4 Tier 2
course covers EV tyre handling); Case 3 reuses the Case 4 influencer logic for village mechanics and tractor dealers.
This is reasoning about fit, not a claim that Eurogrip runs these links today.

---

## §3 WORKSTREAMS, SEQUENCE AND DISPATCH

### §3.1 Step sequence and gates (no calendar dates were given; run continuously)

| Order | Step | Agents | Output | Gate |
|---|---|---|---|---|
| 1 | R0 setup | 1 (orchestrator may do it) | folders, `PLAN.md` copy, `case\01-brief.md`, `research\ARGUMENT.md`, registers | G-R0 |
| 2 | R1 wave 1: lanes R-A, R-B, R-C | 3 parallel | `research\raw\R-A..R-C.md`, CSVs | — |
| 3 | R1 wave 2: lanes R-D, R-E, R-F | 3 parallel | `R-D..R-F.md`, CSVs | — |
| 4 | R1 wave 3: lanes R-G, R-H | 2 parallel | `R-G`, `R-H` | G-R1 |
| 5 | R2 verification V1, V2 | 2 parallel | `raw\R0-verify.md`, corrected rows, `conflicts.md` | G-R2 |
| 6 | M1 model build | 1 | `model\*` | G-M |
| 7 | R3 writers A, B, C | 3 parallel | `parts\part-A..C.md` | — |
| 8 | R3 writers D, E, F | 3 parallel | `parts\part-D..F.md`, glossary | G-R3 |
| 9 | R4 assemble | 1 | `eurogrip-research.md` | ASSEMBLY PASS |
| 10 | R5 critique + polish (skill T6) | 1 | `research\critique.md`, fixes | — |
| 11 | R6 PDF | 1 | `.html`, `.pdf` | G-R |
| 12 | D0 content lock (skill T4) | 1 | `deck\slide-copy.md`, `deck\derivation.md` | G-D0 |
| 13 | D1 tooling + slide files + mock | 1 | `deck\*` | mock OK ×4 |
| 14 | D2 Figma file + setup | 1 (Figma) | `deck\slide-ids.json`, `deck\figma.md` | — |
| 15 | D3 build + V1 per slide | 1 (Figma), sequential | 4 slides built | V1 clean |
| 16 | D4 logos and images | 1 (Figma) | slots filled or listed | — |
| 17 | D5 sweeps + critique (skill T5) | 1 (Figma) | `deck\critique.md` | G-D |
| 18 | D6 previews | 1 | `deck\shots\*.png`, `deck\Eurogrip_Case4_preview.pdf` | — |
| 19 | S1 to S3 Round 1 extras | 1 | `round1\*`, `qa\qa-bank.md` | G-S |
| 20 | Final verification §8 + hand-off §11 | orchestrator | build-log, memory | DONE |

### §3.2 Dispatch rules (for the orchestrating agent)

- Executors: Agent tool, `subagent_type: "general-purpose"`, `model: "sonnet"`. **At most 3 subagents at once.**
  Figma steps (D2 to D5) never run in parallel with each other or with any other Figma call.
- **First action of the whole build:** copy this plan byte-for-byte to `EG\PLAN.md` (PowerShell
  `Copy-Item -LiteralPath "C:\Users\harsh\.claude\plans\working-folder-eurogrip-case-crystalline-globe.md" -Destination "<EG>\PLAN.md"`).
  Executors read `EG\PLAN.md`, never the `.claude\plans` copy (it can be overwritten by later sessions).
- Every dispatch prompt starts with this block (fill `<>`):
  ```
  You are executor <step id> for the Eurogrip case build. Working folder:
  C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\eurogrip-case
  Read EG\PLAN.md sections §0, §1 and <sections for your task> in full before acting.
  Follow the golden rules in §0.3 and the style contract in §0.5. Invoke the case-competition-deck skill where your
  section says so (touchpoint <Tn>) and log "SKILL Tn: ..." in build-log.md.
  Append your log entry to EG\build-log.md: step id, what you did, verification output pasted, residuals.
  Report in at most 12 lines, ending with STATUS: PASS | PASS WITH RESIDUALS | FAIL.
  ```
- A FAIL is re-dispatched once with the failure text appended. A second FAIL stops that phase and the orchestrator
  reports to the user.
- After each wave, the orchestrator runs the gate check for that wave (§8.1) itself before dispatching the next.

### §3.3 Folder layout (create exactly in R0)

```
eurogrip-case\
  PLAN.md  DECISIONS.md  build-log.md
  raw\                         (the four brief PDFs, untouched)
  case\01-brief.md             (Appendix P, verbatim with IDs and edit marks)
  case\02-rtm.md               (§1.2 table + RTMs for Cases 1 to 3, written by writer A later)
  research\
    ARGUMENT.md
    raw\R-A-eurogrip-company.md  R-B-tyre-industry.md  R-C-mechanic-universe.md  R-D-programmes-costs.md
        R-E-case1-segments-media.md  R-F-case2-ev-tyres.md  R-G-case3-tractor-tyres.md  R-H-methods.md
        sources.md  conflicts.md  R0-verify.md
    data\universe_methods.csv  state_parc.csv  tool_costs.csv  visibility_costs.csv  benchmarks.csv
         tyre_brands.csv  media_costs.csv  ev_models.csv  materials_prices.csv  tractor_states.csv  prices.csv
    parts\WRITER-BRIEF.md  part-A.md .. part-F.md  appendix-E-glossary.md
    assemble.py  build_pdf.py  eurogrip-research.md  eurogrip-research.html  eurogrip-research.pdf  critique.md
  model\
    inputs\assumptions.csv  inputs\risks.csv  inputs\rulings.json
    eurogrip_model.py  build_excel.py  model_outputs.json  model_tables.md  Eurogrip_Model.xlsx
  deck\
    gen.py  _palette.js  _extras.js  _x2.js  _v1.js  _sweeps.js  setup.js  metrics.json  preview.py
    make_values.py  slides\s01.js .. s04.js  slide-copy.md  derivation.md  slide-ids.json  figma.md  critique.md
    logos\ (+ manifest.json)  shots\  build\ (generated)
  round1\IdeaForge_Eurogrip_Case4_Executive_Summary.pdf  video-script.md
  qa\qa-bank.md
```

---

## §4 PHASE R: THE RESEARCH DELIVERABLE

### §4.0 Targets and acceptance (G-R)

| Metric | Minimum | Checked by |
|---|---|---|
| Words (whole document) | 80,000 (target 100,000) | `assemble.py md` |
| Markdown tables | 180 (target 230) | `assemble.py md` |
| H2 sections opening with `**Answer.**` | 31 (§1 to §31) | `assemble.py md` |
| Em/en dashes in authored prose | 0 | `assemble.py md` |
| Exclamation marks; question-mark headings | 0 | `assemble.py md` |
| Banned words (after allow-list strip) | 0 | `assemble.py md` |
| Unfilled `<...>` placeholders in headings or text | 0 | `assemble.py md` (added check) |
| Cited S-IDs missing from register | 0 | `assemble.py md` |
| Duplicate headings | 0 | `assemble.py md` |
| Distinct sources in register | ≥ 300 | row count of `raw\sources.md` |
| Sources actually cited | ≥ 200 | `assemble.py md` (`cited_S`) |
| Primary-tier share of cited sources (company filings, government statistics, regulators, standards bodies, rating rationales) | ≥ 45% | `assemble.py md` (added check, host list in §4.6) |
| PDF renders: cover, contents, page numbers | yes | open PDF pages 1 to 3 and 3 random pages with the Read tool |
| Critique (T6) | all CRITICAL and IMPORTANT fixed | `research\critique.md` |

Depth benchmarks: `beyondtech-dcg\research\beyondtech-gtm-research.md` (4,448 lines) and
`verdict-mnc\research\harvestbox-research.md` (87,917 words, 193 tables). This document covers four cases and must be
deeper than either.

### §4.1 Step R0: setup (one agent, ~1 hour)

1. Copy the plan (§3.2). Create the §3.3 folders. Create `DECISIONS.md` (header line `date | step | decision | why`)
   and `build-log.md` (header `# Build log`).
2. Write `case\01-brief.md` from **Appendix P** of this plan, verbatim, including the `[BLUE]` and `[STRUCK]` marks.
   Add at the top: SHA-1 of each PDF (`Get-FileHash -Algorithm SHA1`), and the line "Edit marks were read from the PDF
   rendering; text extraction drops them." Then run `PY -c "import fitz;[print(p,len(fitz.open(p))) for p in __import__('glob').glob(r'<EG>\raw\*.pdf')]"`
   and record page counts (expect 2 each).
3. Invoke the skill (T1, T2). Read the files listed for T1 and T2 in §0.4. Write `research\ARGUMENT.md` with these
   headings, filling each from §2 in final wording: `## Case types and calibration`, `## Case 4: obvious answer and
   three reasons`, `## Case 4: recommendation and three reasons`, `## Case 4: moneyshot template`, `## Case 4: seed and
   where it appears`, `## Case 4: frameworks and where`, `## Case 4: kill criteria`, then the same seven headings for
   Cases 1, 2, 3 (from §2.3 to §2.5), then `## Cross-case links`. Log `SKILL T1` and `SKILL T2`.
4. Create `research\raw\sources.md`:
   ```
   # Source register
   | S-ID | Source (Publisher (year) 'Title') | URL | Accessed | Used in |
   |---|---|---|---|---|
   | S001 | Eurogrip x Unstop (2026) 'Case Study 1 to 4 briefs' | local PDFs eurogrip-case/raw | 14 Oct 2026 | all |
   ```
   The assembler's register regex is `^\| (S\d{3}) \|(.+?)\|(.+?)\|(.+?)\|(.+?)\|$` (exactly five cells; never put a
   pipe inside a cell; replace `|` in titles with `/`).
5. Create `research\raw\conflicts.md` with `# Appendix F: Data conflicts and rulings` and the table header
   `| C-ID | Claim | Source A says | Source B says | Ruling | Basis |`.
6. Create every CSV in `research\data\` with only its header row (headers in §4.2 per lane).

Gate G-R0: all files exist; `ARGUMENT.md` has 4 × 7 + 2 headings filled; build-log has SKILL T1 and T2 lines.

### §4.2 Step R1: raw research lanes

**Raw file schema (every lane, exactly):**

```
# R-X: <lane title>
Accessed: <date range>. Researcher: lane agent R-X.

## Facts
| R-ID | Fact (exact figure + period + unit) | S-ID | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |
|---|---|---|---|---|---|---|---|---|
| RX01 | ... | S0nn | ... | ... | https://... | 14 Oct 2026 | "..." | VERIFIED |

## Gaps
- <question we could not answer> | queries tried: "<q1>", "<q2>", "<q3>" | best fallback: <assumption needed>

## Conflicts
- C-X1: <two sources disagree on ...> (also appended to raw/conflicts.md)

## Quotes (verbatim, for third-party validation; optional)
| Q-ID | Speaker, role | Quote (verbatim) | Date | S-ID |
```

Rules:
- **S-ID must be the third column** (the assembler resolves R-IDs to S-IDs with
  `^\|\s*([A-Z]{1,2}\d{2,3})\s*\|.*?\|\s*([^|]+?)\s*\|`). R-ID prefixes: RA, RB, RC, RD, RE, RF, RG, RH, numbered
  RA01 to RA99, then RA100 onward.
- Status ∈ `VERIFIED` (page opened, figure matches), `CORRECTED` (opened, figure differed; row shows the corrected
  figure), `SNIPPET` (only seen in a search snippet; never the sole support for a deck number), `UNVERIFIABLE`.
- New S-IDs are appended to `raw\sources.md` by the lane itself, from its **reserved block** (prevents collisions):
  R-A S002 to S099 · R-B S100 to S179 · R-C S180 to S259 · R-D S260 to S379 · R-E S380 to S469 · R-F S470 to S559 ·
  R-G S560 to S639 · R-H S640 to S699 · V1 S700 to S749 · V2 S750 to S799 · model S800 to S829 · writers (rare)
  S830 to S869.
- Target 60 to 100 fact rows per lane; at least 85% VERIFIED or CORRECTED.
- **Tools:** WebSearch (`mode: "standard"` first; `"extended"` for niche, recent or numeric facts), WebFetch, and
  Python for PDFs: download into `EG\research\raw\pdf\<lane>\` (a new folder per lane) with `requests`, read with
  `fitz` under `PY -I`, never execute anything downloaded. Annual reports and rating rationales are PDFs: read the
  tables with PyMuPDF, not WebFetch.
- Each lane also fills its CSVs in `research\data\` (headers given below; one row per item; `source_sid` column always
  filled; prices are ₹ incl. or excl. GST as stated in a `gst` column).
- Write the lane file incrementally (after every ~15 rows) to survive context loss.

**Lane questions** (answer all; mark not-found ones in `## Gaps` with three queries tried):

**R-A Eurogrip and TVS Srichakra (S002 to S099).** CSV: `prices.csv`
(`brand,size,pattern,type,mrp_inr,gst_included,channel,date,source_sid`).
1. Identity: legal name, CIN, listings, promoter group, plants and locations, installed capacity, employees, auditor,
   subsidiaries (including any overseas distribution subsidiaries or acquisitions), current credit ratings with the
   rationale text (rationales often state OEM / replacement / export mix: copy the exact sentences).
2. Financials FY21 to FY26 and the latest quarter filed (standalone and consolidated): revenue from operations,
   EBITDA, PAT, raw-material cost as % of revenue, employee cost, other expenses, **advertisement and sales-promotion
   expense if disclosed in the notes**, gross margin. Leads L1 to L3 in §1.8.
3. **Revenue split** (the budget base for Cases 3 and 4): OEM vs replacement vs exports; two- and three-wheeler vs
   off-highway; domestic vs export by product line. Search the annual report MD&A, investor presentations, concall
   transcripts and rating rationales. If no source gives a split, record every partial statement and write a `## Gaps`
   entry; the model will derive the split with bear/base/bull assumptions (A01 rule in §5.3).
4. Brand history and naming: TVS Tyres → TVS Eurogrip (2019 launch) → Eurogrip (current website naming, logo file
   `eurogriptyres-logo-apr25.png`); what name the company uses today for the brand in India and abroad; sponsorships
   (Chennai Super Kings partnership: dates and nature; any motorsport); advertising campaigns 2019 to 2026.
5. Distribution: distributors, depots, retailers (counts with dates), the online tyre-shop locator, **the retailer app
   (Bandhan) today: name, live status on Play Store, features, retailer count, whether mechanics can use it**, Click to
   Connect warranty app, any existing mechanic initiatives (search annual reports and press for "mechanic").
6. Product range breadth: number of two-wheeler SKUs or sizes ("widest range" `[C1-B08]`), EV-specific tyres launched
   (names, sizes, claims), premium ranges, OHT ranges (agricultural, industrial, OTR) and export markets.
7. Market-position statements by the company or rating agencies (two-wheeler OE and replacement share; OHT share).
8. Verbatim management statements (with date) on aftermarket, retail, mechanics, EV, OHT domestic, brand.
9. Concall commentary FY25 to FY27 on replacement demand, pricing actions, natural rubber costs.
10. Replacement MRPs for the five highest-volume two-wheeler sizes (for example 90/90-12, 90/100-10, 3.00-18,
    90/90-17, 100/90-17) for Eurogrip and two rivals, from the company site, dealer sites or e-commerce, with date →
    `prices.csv`.

**R-B Indian tyre industry and the two-wheeler tyre market (S100 to S179).** CSV: `tyre_brands.csv`
(`brand,owner,segment,oe_presence,replacement_share_stmt,positioning,retail_format,mechanic_or_retailer_programme,source_sid`).
1. ATMA production and sales by category FY21 to FY26 (two-wheeler, three-wheeler, tractor front and rear), OE vs
   replacement, exports.
2. Two-wheeler tyre market size (units and ₹) FY21 to FY26 from rating-agency sector notes (ICRA, CRISIL, CARE, India
   Ratings) and listed companies' presentations; lead L10 is an aggregator figure to confirm or replace.
3. Brand shares in two-wheeler tyres (OE and replacement) for MRF, Eurogrip/TVS, CEAT, Apollo, JK, Michelin, Pirelli,
   Metzeler, Bridgestone, Maxxis, Ralco and others, only as sourced.
4. Two-wheeler sales (SIAM, domestic, by sub-segment incl. EV) FY21 to FY26; registered two-wheeler stock (MoRTH Road
   Transport Year Book, latest); replacement interval for two-wheeler tyres (km or years, from company or study);
   tubeless share trend; size mix.
5. Replacement channel structure: multi-brand dealers, brand-exclusive outlets (MRF, CEAT, Apollo formats), mechanics,
   e-commerce; typical distributor and retailer margins as % of MRP.
6. GST on tyres before and after the September 2025 rate rationalisation (CBIC notification, PIB); natural-rubber price
   trend FY21 to FY26 (Rubber Board).
7. Rival programmes for retailers or mechanics in tyres (for example JK Tyre's dealer app; CEAT, MRF, Apollo schemes):
   what exists, reward type, scale.
8. Advertising and sales-promotion spend as % of revenue for MRF, CEAT, Apollo, JK and TVS Srichakra (annual report
   notes) to benchmark the brief's 1.5% to 2% rule.
9. Porter's Five Forces inputs for two-wheeler replacement tyres (supplier power: natural rubber; buyer power:
   dealers; substitutes: retreads are rare in 2W; entrants: Chinese imports and import restrictions; rivalry).

**R-C Mechanic and puncture-shop universe, geography, rider journey (S180 to S259).** CSVs: `universe_methods.csv`
(`method,kind,low_lakh,base_lakh,high_lakh,inputs,assumption_ids,source_sids,notes`; exactly four rows:
`Enterprise survey` and `Two-wheeler parc` with kind `estimate`, `Rival programmes` and `Eurogrip partners` with kind
`floor`; method labels exactly these, ≤ 17 characters), `state_parc.csv`
(`state,two_wheeler_registrations_fy,two_wheeler_stock,share_pct,eurogrip_presence_note,source_sid`).
1. MoSPI Annual Survey of Unincorporated Sector Enterprises (ASUSE) 2021-22, 2022-23, 2023-24: establishments in NIC
   group 45 and the finest available code for motorcycle maintenance and repair (NIC 2008: 4540 / 45403), all-India and
   by state; own-account vs hired-worker establishments (fragmentation); workers; rural/urban.
2. Sixth Economic Census (2013-14) counts for the same NIC codes by state (older baseline).
3. PLFS or Census occupation counts for motor-vehicle mechanics (NCO 2015 code 7231) if published.
4. Parc-based method inputs: registered two-wheelers (MoRTH latest), a sourced active-parc ratio, services per bike per
   year, punctures per bike per year (any study), jobs per mechanic per day; compute in the CSV with stated assumptions.
5. Programme-based bounds: published enrolment of mechanic programmes (Castrol, others from R-D) as a lower bound of
   the engageable universe.
6. Eurogrip's own partner counts (cross-reference R-A; for example "over 30,000 partners" target, lead L5).
7. State-wise two-wheeler registrations (VAHAN dashboard, latest full FY) for the top 15 states → `state_parc.csv`;
   apply the pilot-state rule in §2.2.7 and record the result with reasoning.
8. Mechanic economics: income ranges, shop size, labour charges for tube and tubeless puncture repair and tyre fitting
   (₹ per job), whether mechanics buy tyres on the rider's behalf, credit practices (studies, news, vendor surveys
   labelled as such).
9. Who influences two-wheeler tyre choice: any published survey or study of riders (tyre companies, consultancies,
   academic papers) giving the share who rely on the mechanic or retailer.
10. Skilling: ASDC two-wheeler service technician qualification packs (codes, hours), course fees, PMKVY or ASDC
    training counts; EV two-wheeler mechanic training initiatives.
11. The rider's replacement journey: triggers (puncture, tread wear, monsoon, inspection), time to decide, where they
    buy, and the role of the puncture moment.

**R-D Benchmark programmes and cost benchmarks (S260 to S379).** CSVs: `benchmarks.csv`
(`programme,company,category,short,influencer,launch_year,enrolment,reward_cash,reward_tools,reward_visibility,reward_skill,tracks,tracks_via,credits_without_purchase,tiers,outcome_stmt,source_sids`
with reward, `tracks` and credit fields = exactly `Yes|Part|No|n/a`; `short` ≤ 16 characters such as
`Castrol, lubes`; `category` one of `lubricants|batteries|auto parts|tyres|paints|adhesives|cement|electricals`), `tool_costs.csv`
(`item,spec,unit,price_low_inr,price_high_inr,gst,bulk_note,source_sid,date`), `visibility_costs.csv` (same columns).
1. Lubricants: Castrol India (Fast Scan, Super Mechanic Contest, any tiering), Gulf Oil, IndianOil Servo, HP
   Lubricants, Shell, Valvoline/Veedol, Motul, ExxonMobil (Mission Mechanic Unnati, Udaan), Amara Raja (Amaron Mileage
   for lubes). Leads L6 to L9.
2. Batteries: Exide, Amaron (Amara Raja) mechanic or retailer schemes.
3. Auto parts: Bosch, Schaeffler (REPXPERT), Uno Minda, Lumax, Rane, myTVS / TVS Automobile Solutions, OEM genuine-parts
   mechanic programmes (Bajaj, Hero, TVS Motor, Honda) where public.
4. Tyres: any MRF, CEAT, Apollo, JK, Michelin India scheme for retailers or mechanics (cross-check R-B item 7).
5. Influencer programmes outside auto, labelled "pattern benchmark": Pidilite (carpenters), Asian Paints and Berger
   (painters), UltraTech / ACC / Ambuja (masons), Havells / Polycab (electricians): scale, reward currency, tiers,
   tracking.
6. Platform and messaging costs: public pricing of loyalty platforms (vendor-reported), WhatsApp Business API
   per-message pricing for India (Meta), IVR or missed-call service pricing.
7. Tool and equipment prices (≥ 25 rows): tubeless repair kit, tube patch kit, tyre levers, manual bead breaker,
   digital pressure gauge, foot pump, 12 V and 230 V portable inflators, 1 to 2 HP compressor, two-wheeler tyre changer,
   valve-core tool, wheel balancer, toolbox; consumables (plug strings ×50, patches ×100, valve cores ×100, rubber
   solution). Lead L11.
8. Visibility items (≥ 12 rows): flex board 3×2 ft, ACP lit signboard, shop fascia, aprons, uniforms or T-shirts, caps,
   stickers, posters, rate cards, at bulk prices.
9. Training costs: per trainee per day (ASDC partners, private institutes), trainer day rates.
10. Field force: sales representative or merchandiser monthly cost ranges in India (aggregator-reported).
11. Mystery-shopping cost per audit in India and brand-tracking study costs (agency pages; else gap → assumption).

**R-E Case 1: segments and media (S380 to S469).** CSV: `media_costs.csv`
(`channel,unit,cost_low_inr,cost_high_inr,metric,source_sid,date`).
1. Commuter: daily distance, usage patterns, purchase drivers (surveys), share of motorcycles vs scooters.
2. Gig riders: NITI Aayog (2022) gig and platform economy report (77 lakh in 2020-21, projection for 2029-30; confirm);
   delivery and ride-hailing partner counts from DRHPs and annual reports (Swiggy, Eternal/Zomato, Zepto if filed,
   Rapido, Uber, Porter); km per day; earnings per order or day; EV fleet operators (Zypp, Yulu and others: fleet
   sizes); downtime and puncture economics; policy (Code on Social Security 2020, Rajasthan and Karnataka gig worker
   laws, Union Budget 2025 measures).
3. Premium: sales of motorcycles above 250 cc / premium brands (Royal Enfield, KTM, Triumph-Bajaj, Harley-Davidson-Hero,
   Honda BigWing), OE tyre fitments, riding communities and peer-recommendation evidence.
4. Media and activation costs: digital CPM/CPC in India (Meta, YouTube, Google), OOH, radio, cinema, IPL sponsorship
   ranges, retail branding, on-ground activation per event.
5. Eurogrip's current campaigns and rivals' segment campaigns (MRF, CEAT, Apollo, Michelin) 2023 to 2026.

**R-F Case 2: EV two-wheelers and tyre engineering (S470 to S559).** CSVs: `ev_models.csv`
(`model,maker,segment,kerb_weight_kg,peak_torque_nm,front_tyre,rear_tyre,rim_in,fy_sales_units,source_sid`),
`materials_prices.csv` (`material,grade,price_inr_per_kg,date,source_sid`; `material` values exactly `natural
rubber`, `SBR`, `solution SBR`, `carbon black`, `silica`, `silane`, `process oil`, `chemicals`, `other`, one row each;
`chemicals` and `other` may be a reasoned blended price with the basis in `grade`).
1. EV two-wheeler sales FY22 to FY26 (VAHAN; lead L13), top models, their OE tyre sizes, kerb weights and torque vs ICE
   equivalents.
2. Physics literature: rolling resistance from hysteresis, tan δ at 0 °C and 60 °C as wet-grip and rolling-resistance
   indicators, silica-silane technology history, the "magic triangle"; share of energy use from rolling resistance for
   light EVs or scooters at urban speeds (peer-reviewed or SAE papers).
3. Noise: tyre noise mechanisms, pitch sequencing literature or patents, why NVH matters more on a silent drivetrain.
4. Regenerative braking and wear: studies on EV tyre wear rates and torque effects.
5. Load: ETRTO load-index table values for the reference sizes, reinforced marking conventions.
6. Standards and scope (exact titles and scope clauses): BIS standard for two- and three-wheeler tyres and the tyre
   Quality Control Order; UNECE R75; UNECE R117 scope (C1 to C3); FMVSS 119 scope; EU 2020/740 scope; ISO 28580 scope;
   any standard rolling-resistance test for motorcycle tyres.
7. Competitor EV two-wheeler tyres in India and abroad: names, claims (rolling resistance, noise, load).
8. Material prices (₹/kg, latest): natural rubber RSS4 (Rubber Board), SBR 1502, solution SBR, precipitated silica,
   carbon black N220/N330, silane (TESPT), nylon 6,6 tyre cord, bead wire, chemicals; typical two-wheeler tyre mass and
   material composition by weight.
9. Mixing and process notes for silica compounds (silanisation temperature window, extra mixing pass, duplex extrusion
   of cap and base).

**R-G Case 3: tractors and tractor tyres (S560 to S639).** CSV: `tractor_states.csv`
(`state,tractor_sales_fy,avg_holding_ha,share_small_marginal_pct,main_crops,terrain_note,haulage_note,source_sid`).
1. Tractor sales FY21 to FY26 (TMA), state-wise sales, HP mix; tractor parc estimates.
2. Tractor-tyre market (front/rear, OE/replacement, ₹ and units) and brand shares (MRF, Apollo, BKT, Goodyear India,
   CEAT, JK, Eurogrip/TVS) as sourced; brand positioning statements.
3. Farm structure (Agriculture Census landholding classes by state), cropping patterns, terrain.
4. Tractor usage: hours per year, agricultural vs haulage share (studies), custom hiring centres (SMAM counts), tractor
   finance.
5. Buying behaviour: studies on who influences tractor-tyre purchase (dealer, mechanic, peers), price sensitivity,
   timing (harvest cash flow).
6. Prices of common rear and front sizes (13.6-28, 14.9-28, 12.4-28, 6.00-16) by brand; warranty practices; tyre life
   in hours by use.
7. Eurogrip/TVS OHT domestic standing (cross-reference R-A).

**R-H Methods and behaviour (S640 to S699).** No CSV.
Cite the original sources for: Keller CBBE; JTBD (Christensen); Kano (Kano et al., 1984); 7 Powers (Helmer, 2016);
loss aversion (Kahneman and Tversky, 1979); loyalty tiers and status (Drèze and Nunes, 2009); cash vs non-cash
incentives (Jeffrey, 2009; Shaffer and Arkes, 2009); mystery-shopping methodology; difference-in-differences (Angrist
and Pischke, 2009); two-proportion sample-size formula; pre-mortem (Klein, 2007); QFD (Akao); TRIZ (Altshuller); FMEA
(AIAG-VDA handbook); marketing budget norms (any published benchmark of marketing spend as % of revenue in B2B or
industrial goods).

Gate G-R1: every lane file has ≥ 60 rows, ≥ 85% VERIFIED/CORRECTED, sections Gaps and Conflicts present; every CSV has
its rows with `source_sid` filled; S-IDs unique across the register. Check with:
`PY -c "import re,glob,collections;rows=[l for f in glob.glob(r'<EG>\research\raw\R-*.md') for l in open(f,encoding='utf-8') if re.match(r'^\|\s*R[A-H]\d',l)];print(len(rows));reg=[l.split('|')[1].strip() for l in open(r'<EG>\research\raw\sources.md',encoding='utf-8') if l.startswith('| S')];d=[k for k,v in collections.Counter(reg).items() if v>1];print(len(reg),'dups',d)"`

### §4.3 Step R2: verification (2 agents in parallel)

V1 checks R-A, R-B, R-C, R-D; V2 checks R-E, R-F, R-G, R-H. For a random 20% of VERIFIED rows per lane (pick with
`random.Random(20261014).sample`), reopen the URL and confirm figure and snippet. **100% check** for rows that will
feed the deck or the model base case: every row cited in `universe_methods.csv`, `tool_costs.csv`,
`visibility_costs.csv`, `prices.csv`, `benchmarks.csv`, and R-A revenue rows. Mismatch → flip to CORRECTED or
UNVERIFIABLE and log in `conflicts.md`. Output `raw\R0-verify.md` with
`| Lane | Rows checked | Pass | Corrected | Unverifiable |`.
Gate G-R2: pass rate ≥ 90% per lane; otherwise the lane agent re-runs its failing questions once.

### §4.4 Step R3: writers (six parts; at most 3 at once; order A, B, C then D, E, F)

**Skill mapping (T2): the 8-section logic per case inside the document**

| Skill section | Case 4 (§5 to §16) | Case 1 (§17 to §20) | Case 2 (§21 to §24) | Case 3 (§25 to §28) |
|---|---|---|---|---|
| I Executive summary | §2 (all four) | §2 | §2 | §2 |
| II Context (+ seed) | §4, §5 (seed), §6 | §17 | §21 | §25 |
| III Actors (symmetric) | §6, §7 (segments, JTBD) | §17 (three segments, same template) | §21 (EV vs ICE demands) | §26 (buyers) |
| IV Quantitative analysis | §6, §9, §11 (moneyshot) | §19 | §21, §24 | §27, §28 |
| V Feasibility | §12, §14 | §20 | §23, §24 | §28 |
| VI Recommended alternative | §10 to §13 | §18 to §20 | §22 | §27 |
| VII Conclusion | §15 closer + §29 | §20 closer | §24 closer | §28 closer + §29 |
| Appendix | Appendices A to F | same | same | same |

**Writer rules** (put verbatim into `parts\WRITER-BRIEF.md`; also paste into every writer prompt):
- Use the exact H2 titles from the outline below, in order. Replace every `<...>` in a title with the real number from
  the raw files or model, with its unit. Each H2 opens with `**Answer.** <2 to 4 sentences: the finding with
  numbers and tags>`. Each H2 ends with `### What this section establishes, and what it does not` (3 to 6 bullets).
  H3s are numbered `### N.M Title`.
- **No browsing.** Use only `research\raw\*`, `research\data\*.csv`, `model\model_tables.md`, `model\model_outputs.json`,
  `case\01-brief.md`, `research\ARGUMENT.md`. Arithmetic on cited numbers is allowed: show it inline once.
- Tags (in backticks or square brackets, as in BeyondTech): `[RA12]` raw fact (primary provenance), `[S123]` source,
  `[C4-B14]` brief sentence, `[A07]` / `[A1-03]` assumption, `[M c4.be]` model output, `[T4.3]` model table.
- Every number carries a tag. Any paragraph using an assumption says "assumption" once. Aggregator- or vendor-only
  facts carry "(aggregator-reported)" / "(vendor-reported)".
- Symmetric templates: the three Case 4 segments use the same H3 skeleton everywhere; the four case chapters each
  close with a "Conclusively" paragraph (section closer, rhetoric tactic 9).
- Each Case 4 section ends with a line `Exhibit for the deck: <panel id from §6.6 or "none">`.
- Style §0.5. No em/en dashes. No question headings. No exclamation marks. Indian notation.
- Self-check after every H2 (paste output in your report):
  `PY -c "import re,io;t=io.open(r'<part>',encoding='utf-8').read();print('words',len(t.split()),'tables',len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),'dashes',len(re.findall('[\u2014\u2013]',t)),'excl',t.count('!'),'ph',len(re.findall(r'<[a-z][^>]{0,20}>',t)))"`
  must print `dashes 0`, `excl 0`, `ph 0`.
- Append to the file after each H2 (protects against context loss).
- Before finishing, invoke the skill (T3) and check every H2 title against `rhetoric.md` §10 and §11; log `SKILL T3`.

**Outline (exact H2 titles; `<...>` filled from data, never invented):**

| § | H2 title (exact) | Must contain | Tables min | Words min | Writer |
|---|---|---|---|---|---|
| 0 | 0. Document control | purpose and reader; tag legend; source hierarchy (7 tiers per §0.3 rule 7); verification status by lane (from R0-verify); model version and hash; honesty conventions (case fact vs assumption vs model vs outside evidence); brief edit marks and the Case 4 struck-insight ruling; skill calibration note; AI-use disclosure; document map (writer per section) | 6 | 1,800 | A |
| 1 | 1. Four briefs, `<n>` requirements: where each is answered, and for Case 4 on which slide panel | RTM for each case (Case 4 = §1.2 expanded); judging criteria map per case (where we win each criterion); "where the evidence is thinnest" table | 10 | 3,000 | A |
| 2 | 2. The four answers on one page: pay mechanics for advice in tools and status, prove distance through the gig fleet, build the EV tyre on existing lines, and win the hardest-working tractors first | per case: obvious answer + 3 reasons; recommendation + 3 reasons; moneyshot with bear/base/bull; kill criteria; a 120-word version of each; headline numbers table | 8 | 3,200 | A |
| 3 | 3. Eurogrip today: TVS Srichakra earned ₹`<x>` crore in FY26, sells in `<n>` countries and reaches riders through `<k>` distributors | identity; FY21 to FY26 tables; revenue split (with derivation if estimated); brand history and naming; distribution and apps (retailer app ruling §2.2.5); product breadth; management statements; Eurogrip's standing in 2W and OHT | 10 | 4,000 | A |
| 4 | 4. India buys about `<n>` crore two-wheeler tyres a year, `<p>`% of them as replacements, and a handful of brands sell most of them | ATMA and market size; shares; SIAM sales and parc; replacement interval; channel structure and margins; GST change; rubber prices; A&P benchmarks vs the 1.5% to 2% rule; Porter's Five Forces | 10 | 4,000 | A |
| 5 | 5. A replacement tyre is chosen at a puncture or a worn tread, and the mechanic is usually the person in the room | rider journey map (stages × touchpoints × who influences); triggers; evidence on mechanic influence (labelled association, not proof); **the seed sentence** on non-stocking advocates `[C4-B14]` | 5 | 2,500 | A |
| 6 | 6. India has about `<n>` lakh outlets where a two-wheeler tyre gets recommended, and `<p>`% of them never stock one | four counting methods side by side (universe_methods.csv); segments S-A, S-B, S-C (same template each); state table and pilot-state rule result; fragmentation | 10 | 4,000 | B |
| 7 | 7. Awareness is not Eurogrip's gap: it loses at stocking and recommendation, and the mechanic's jobs explain why | MECE issue tree as nested table; brief insights (qualitative only, no invented percentages); JTBD per segment; mechanic economics; the struck-insight ruling stated once | 7 | 3,500 | B |
| 8 | 8. `<n>` influencer programmes in lubricants, batteries, parts and building materials show how India pays mechanics, and `<k>` of them credit advice without a purchase | programme teardown (one H3 per category, same template); feature-parity heat matrix from benchmarks.csv; what transfers to tyres and what does not; third-party validation quotes (verbatim only) | 10 | 4,500 | B |
| 9 | 9. A cash-per-tyre scheme would spend about `<p>`% of its money on tyres that sell anyway and fails three of the brief's five criteria | the obvious answer stated fairly; deadweight model `[M c4.cash_scheme]`; tyre purchase frequency vs lubricant; criteria scoring table | 6 | 2,500 | B |
| 10 | 10. The programme: every shop joins free, earns tools and status for each logged recommendation, and re-qualifies every six months | tier ladder (§2.2.4); loop (§2.2.5) and app ruling; reward catalogue with prices; sustainability engine (§2.2.6); counter-positioning; Kano hypothesis (flagged); fraud controls | 10 | 4,500 | B |
| 11 | 11. ₹`<x>` crore a year, `<p>`% of business-unit revenue, equips `<n>` lakh shops and pays back at `<be>` extra tyres per shop a year | BU revenue derivation; envelope; cost per member by tier; five budget lines; Year 1 vs Year 2; bear/base/bull; tornado (five largest swings); **moneyshot** with formula and arithmetic; deadweight comparison | 12 | 4,500 | C |
| 12 | 12. Two states, then eight, then all of India: three gates in 24 months decide whether more money is spent | phase table; pilot-state rule result; distributor-led enrolment operations; RACI; quarter-by-quarter members and spend; gate definitions | 7 | 3,000 | C |
| 13 | 13. Four layers of measurement and one experiment show whether recommendations moved, at a known cost per audit | KPI tree; definitions; difference-in-differences design; mystery-rider protocol; sample size and cost `[M c4.audit]`; reward-currency arm test; fraud controls; reporting cadence | 8 | 3,500 | C |
| 14 | 14. `<n>` ways the programme could fail, each paired with one control | pre-mortem; 5×5 or 3×3 heat map (probability × impact); 1:1 risk → control table (from `model\inputs\risks.csv`) | 4 | 2,000 | C |
| 15 | 15. What we have not tested yet, and the `<n>` interviews that would test it first | validation plan (roles × counts × cities × questions), what would change our mind, kill criteria; "Conclusively" closer for Case 4 | 4 | 1,500 | C |
| 16 | 16. Four slides carry the Case 4 answer: what each panel shows and where its numbers come from | slide blueprint (from §6 of this plan), derivation table panel → section → tag → model key | 4 | 1,500 | C |
| 17 | 17. Three riders, three jobs: commuters buy reliability, gig riders buy uptime, premium riders buy proof from peers | segment profiles (same template ×3); gig-rider profile built from research (the brief leaves it open `[C1-B11]`); personas as data archetypes; journeys | 12 | 5,000 | D |
| 18 | 18. One brand, one proof currency: distance travelled is the claim all three segments can check | positioning per segment; masterbrand architecture; CBBE; message hierarchy; why not three campaigns | 6 | 3,000 | D |
| 19 | 19. ₹`<x>` crore across Digital, Retail and On-ground puts `<p>`% of the money where the tyre is chosen | segment × channel matrix `[M c1]`; activation plan; media costs; fleet partnerships; bear/base/bull | 8 | 3,500 | D |
| 20 | 20. Nine campaign ideas, three per segment, each with a cost line and a measure | ideas table; KPI tree; roadmap; risks; "Conclusively" closer | 5 | 2,500 | D |
| 21 | 21. An electric scooter asks five things of a tyre that a petrol scooter does not, and rolling resistance decides about `<p>`% of its range | EV vs ICE demand table (torque, regen, NVH, load, range); size mix from ev_models.csv; physics with sources | 8 | 4,000 | E |
| 22 | 22. The EV-ready tyre: a silica-rich cap on a cool base, a variable-pitch tread and a load index `<n>` steps higher, on existing lines | concept per technical area (construct, tread, vital performance, load); QFD matrix; TRIZ contradiction; why not a premium dedicated tyre | 10 | 4,500 | E |
| 23 | 23. One tyre for `<n>` markets: compliance runs through BIS, UNECE R75 and FMVSS 119, and the car-tyre labels do not apply | compliance matrix (market × standard × tests × scope); voluntary test plan; validation stage gates | 6 | 2,500 | E |
| 24 | 24. The EV-ready variant costs about `<p>`% more to make than its petrol-scooter twin and adds `<r>`% range | cost build-up `[M c2]`; BOM by ingredient; manufacturability; FMEA; TRL ladder; moneyshot; "Conclusively" closer | 8 | 3,000 | E |
| 25 | 25. India's tractor-tyre market is worth about ₹`<x>` crore a year, and `<k>` brands hold most of it | market and shares; Five Forces; Eurogrip/TVS standing `[C3-B07]` | 8 | 3,500 | F |
| 26 | 26. A tractor tyre is chosen by the dealer, the mechanic and the neighbour, and the order changes by state | buying-centre map; regional heat map from tractor_states.csv; price sensitivity by farm size | 7 | 3,000 | F |
| 27 | 27. Win the hardest-working tractors first: haulage operators and hiring centres buy on cost per hour and talk to many farmers | segments (≥ 2, same template); value proposition; TCO model `[M c3]`; assurance pricing; credit timing | 8 | 3,500 | F |
| 28 | 28. A dealer-led plan for ₹`<x>` crore a year, `<p>`% of domestic OHT revenue | channel approach, dealer tiers, mechanic influence, budget, rollout, KPIs, risks, "Conclusively" closer | 7 | 3,000 | F |
| 29 | 29. Four answers, one company: the mechanic programme is the shared channel for three of them | cross-case links (§2.6); sequencing; shared assets; "Therefore" synthesis | 3 | 1,200 | F |
| 30 | 30. Forty questions the judges are likely to ask, and our answers | 25 for Case 4, 5 each for Cases 1 to 3; reported-speech framing ("The panel may ask: ...") | 2 | 3,500 | F |
| 31 | 31. Method, limits and what we would validate next | calibration note; desk research vs model vs assumption; limits per case; next validation | 3 | 1,500 | F |

Appendices (assembled): A Bibliography (generated) · B Model tables (from `model_tables.md`) · C Datasets (generated
from `research\data\*.csv`) · D Assumptions register (generated from `model\inputs\assumptions.csv`) · E Glossary
(writer F, ≥ 70 terms incl. ASUSE, ATMA, ASDC, BIS, BU, CBBE, CHC, CPM, DiD, DOT, ETRTO, FMEA, FMVSS, GST, ICE, JTBD,
MECE, MRP, NIC, NVH, OE, OHT, OTR, PLFS, POS, QCO, QFD, RACI, RR, S-SBR, SIAM, SKU, TCO, TMA, TRIZ, TRL, UNECE, VAHAN)
· F Data conflicts and rulings (`raw\conflicts.md`).

### §4.5 Writer prompt (copy verbatim; fill `<>`)

```
You are writer <A..F> for the Eurogrip research deliverable (Eurogrip x Unstop, four cases, Team IdeaForge).
Read in order: EG\PLAN.md §0, §1, §2, §4.4; EG\research\ARGUMENT.md; EG\research\parts\WRITER-BRIEF.md;
lines 1-140 of ROOT\beyondtech-dcg\research\beyondtech-gtm-research.md (register only; do not copy content);
EG\model\model_tables.md; the raw files and CSVs you need: <list>.
Write EG\research\parts\part-<X>.md containing exactly these H2 sections, in order, with these exact titles:
<paste the rows of §4.4 for this writer>.
Each H2 opens with **Answer.**, meets the table and word minimums, and closes with
"### What this section establishes, and what it does not".
Cite every number with its R-ID, S-ID, brief ID, assumption ID or model key. Never browse. Never invent a figure,
quote, name or label. Use the case's own words for the programme ("the Eurogrip mechanic advocacy programme"; tiers
are Tier 1, Tier 2, Tier 3).
Append to the file after each H2. Run the self-check one-liner after each H2 and fix any dash, exclamation or
unfilled placeholder before moving on.
Before finishing, invoke the case-competition-deck skill (touchpoint T3) and check every H2 title is an action title
with a number.
Finish with: words, tables, dashes, exclamations, placeholders per H2, then the STATUS line.
```

### §4.6 Step R4 to R6: assemble, critique, polish, PDF

**R4 assemble.** Copy `ROOT\beyondtech-dcg\research\assemble.py` to `EG\research\assemble.py` and patch it with a
small script `EG\research\patch_assemble.py` that asserts each old string occurs exactly once before replacing:

| Old | New |
|---|---|
| `# ===== BEYONDTECH ASSEMBLE v1 =====` | `# ===== EUROGRIP ASSEMBLE v1 =====` |
| the whole `HEADER = """...` block | `# Eurogrip: Four Cases, Solved` / blank / `**Brand perception across three rider segments, an EV-ready two-wheeler tyre, tractor-tyre share at home, and a mechanic advocacy programme for the domestic two-wheeler market**` / blank / `Team: Harsh Kawatra and Anuj Gambhir, Delhi Technological University, Team IdeaForge` / blank / `Prepared for: Eurogrip x Unstop Collaboration, Case Studies 1 to 4 (deck submitted for Case Study 4)` / blank / `---` / blank |
| `"in today's", "ever-evolving", "imagine if", "testament", "realm", "fast-paced"]` | `"in today's", "ever-evolving", "imagine", "testament", "realm", "fast-paced", "what if", "picture this", "dive into", "groundbreaking", "state-of-the-art", "plethora", "myriad", "underscore", "showcase", "foster", "bolster", "spearhead", "nuanced", "intricate", "meticulous", "elevate", "in conclusion", "it is important to note", "ecosystem"]` (note: `journey` is already in the list) |
| `MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 45000, 110, 26` | `MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 80000, 180, 31` |
| Appendix B/C/D/E/F builder block (from `# ---- Appendix B` to the end of `app_f = ...`) | B: `demote(rd(BT / "model" / "model_tables.md"))`; C: for each CSV in sorted `R/"data"/*.csv`, an H3 with the file name and `csv_to_table(path, <all columns>)`; D: `csv_to_table(BT/"model"/"inputs"/"assumptions.csv", ["id","case","label","bear","base","bull","unit","basis","source_ids"])`; E: glossary as before (`appendix-E-glossary.md`); F: `conflicts.md` |
| TOC and `doc = (...)` appendix titles | `Appendix A: Bibliography`, `Appendix B: Model tables`, `Appendix C: Research datasets`, `Appendix D: Assumptions register`, `Appendix E: Glossary`, `Appendix F: Data conflicts and rulings` (update both the TOC list and the concatenation; fix the "421-source" wording to use `len(reg)`) |
| `"beyondtech-gtm-research.md"` (output file) | `"eurogrip-research.md"` |
| in the checks: `prose = body + "\n" + app_e + "\n" + app_f` | `ALLOW = ["influencer advocacy ecosystem", "advocacy ecosystem", "ownership journey", "customer journey", "rider journey", "replacement journey", "next-gen tyre technology", "next-generation tyre", "competitive landscape"]` then `prose = re.sub("|".join(map(re.escape, ALLOW)), " ", body + "\n" + app_e + "\n" + app_f, flags=re.I)` |
| `res = dict(` | add keys `placeholders=len(re.findall(r"<[a-z][^>]{0,20}>", body))` and `primary_share=<share>` where share = cited S-IDs whose URL host matches `nseindia|bseindia|tvssrichakra|eurogriptyres|mospi|morth|parivahan|vahan|siam|atma|bis.gov|unece|ecfr|nhtsa|pib.gov|cbic|rubberboard|tmaindia|agricoop|agcensus|niti.gov|crisil|icra|careedge|indiaratings|castrol.com|exxonmobil|amararaja|pidilite|asianpaints|sebi.gov|mca.gov` divided by cited count |
| `ok = (...)` | add `and res["placeholders"] == 0 and res["primary_share"] >= 0.45` |
| the `pdf()` function | see R6 below |

Run `PY research\assemble.py md` until `ASSEMBLY PASS`. Fix rules: dash → rewrite the sentence (never a mechanical
hyphen); banned word → plain synonym; missing S-ID → add a register row or remove the citation; short section →
re-dispatch that writer for that H2 only; placeholder → fill from data.

**R5 critique (T6).** Invoke the skill in critique mode; read `references/critique_rubric.md`; score Dimensions 1
(recommendation strength, per case), 3 (quantitative rigour), 4 (action titles: sample 12 H2s), 6 (defensive depth),
7 (polish). Write `research\critique.md` with the top 5 issues in the rubric's format; fix all CRITICAL and IMPORTANT.
Then the invented-name sweep (§8.3). Log `SKILL T6`.

**R6 PDF.** Replace BeyondTech's `pdf()` with the same structure and these replacements on the iim template
(`rep(old, new, count)` asserts counts):
- `rep("dream11-pivot-research", "eurogrip-research", 4)`
- `rep("Dream11: Life After the Ban  |  Team IdeaForge", "Eurogrip: Four Cases, Solved  |  Team IdeaForge", 1)`
- `rep("else 'Dream11: Life After the Ban'}", "else 'Eurogrip: Four Cases, Solved'}", 1)`
- `rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "Eurogrip x Unstop Collaboration  |  Case Studies 1 to 4  |  Research deliverable", 1)`
- `rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:<primary hex>; --pd:<primaryDeep hex>; --a:<accent hex>; --tint:<tint hex>;", 1)` (hex values from the final `deck\_palette.js` in §6.2; if the deck palette is not final yet, use the §6.2 defaults)
- `rep("color: #C4161C; }", "color: <primary hex>; }", 1)`
- team block: `'<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi'` → `'<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University (Team Leader)<br>Anuj Gambhir, Delhi Technological University'`
Run `PY research\assemble.py pdf`. Open the PDF with the Read tool (pages 1 to 3 and three random pages) and check the
cover, contents and tables render. Log G-R with the assembler JSON pasted.

---

## §5 PHASE M: THE MODEL (one agent, after G-R2, before writers)

### §5.1 What the model is for

One deterministic Python file, `EG\model\eurogrip_model.py`, is the **only** source of computed numbers for the
document (§9, §11, §13, §19, §24, §27, §28) and the deck. Writers and `make_values.py` never re-compute. Code for the
whole file is in **Appendix Q.1** (copy it; then fill `assumptions.csv` and `risks.csv` from the lanes). The modeller
may fix a bug in Q.1 but may not change formulas, keys, or line names without a `DECISIONS.md` entry.

### §5.2 Inputs

- `model\inputs\assumptions.csv` columns (exact): `id,case,label,bear,base,bull,unit,basis,source_ids`.
  `bear` = the value worse for our thesis (higher cost, lower margin, lower revenue), `bull` = better. If a value
  has no spread, repeat it in all three columns. `basis` is one sentence naming the source rows (`RD14, RD15`) or the
  reasoning for a judgement call; the word `PLACEHOLDER` is forbidden (the model refuses to run if it appears; every
  planning default in §5.3 is written as `PLACEHOLDER: <default>` in the plan only and must be replaced by a sourced or
  reasoned value).
- `model\inputs\risks.csv` columns: `id,risk_short,p,i,control_short,risk_long,control_long` (p and i ∈ 1, 2, 3;
  `risk_short + ": " + control_short` ≤ 40 characters; 8 to 12 rows; the five highest `p × i` go on the slide).
- `model\inputs\rulings.json`: `{"app_name": "<Bandhan app | current name | retailer app>", "pilot_states":
  "<State A and State B>"}` from the R-A app ruling (§2.2.5) and the R-C pilot-state rule (§2.2.7).
- Research CSVs read directly by the code: `research\data\universe_methods.csv`, `benchmarks.csv`,
  `materials_prices.csv`. The others (`prices.csv`, `media_costs.csv`, `tractor_states.csv`, `tool_costs.csv`,
  `visibility_costs.csv`) feed assumption values, with the arithmetic written in each `basis`.

### §5.3 Assumption register (IDs fixed; values from lanes; planning defaults shown only to make the scale clear)

**Case 4 (no prefix).** Percent values are stored as numbers (1.75 means 1.75%).

| ID | Label | Unit | Planning default (bear / base / bull) | Where the value comes from |
|---|---|---|---|---|
| A01 | Relevant BU revenue: domestic two- and three-wheeler replacement revenue, FY26 | ₹ crore | PLACEHOLDER: 1,250 / 1,450 / 1,650 | R-A item 3. Rule: if a source gives the replacement share and the 2W/3W share, BU = consolidated revenue from operations × replacement share × 2W/3W share of replacement; else bear/base/bull = three defensible readings of partial statements, each written in `basis` |
| A02 | Budget share of BU revenue | % | 1.5 / 1.75 / 2.0 | brief `[C4-B19]` |
| A05a / A05b / A05c | Share of outlets: S-A stocking / S-B service / S-C puncture | share | PLACEHOLDER: 0.25 / 0.40 / 0.35 (same in all columns) | R-C; if no source splits them, a reasoned split stated as assumption |
| A06 | Coverage cap: members ÷ universe at steady state | share | PLACEHOLDER: 0.15 / 0.25 / 0.35 | judgement benchmarked on Castrol's 1.5 lakh enrolment vs its universe (R-D, R-C) |
| A07a / A07b / A07c | Member mix Tier 1 / Tier 2 / Tier 3 at steady state | share | 0.75 / 0.20 / 0.05 (same in all) | design decision, benchmarked on tier pyramids in R-D programmes |
| A08 / A09 / A10 | One-time tools per member, Tier 1 / 2 / 3 (Eurogrip's share after any cost-sharing) | ₹ | PLACEHOLDER: 700 / 2,500 / 9,000 (bull lower) | `tool_costs.csv` (median of low and high, bulk) |
| A08v / A09v / A10v | One-time visibility items per member, Tier 1 / 2 / 3 | ₹ | PLACEHOLDER: 400 / 1,800 / 8,000 | `visibility_costs.csv` |
| A11 | Amortisation period for one-time items | years | 3 / 3 / 3 | accounting judgement |
| A12a / A12b / A12c | Consumables refill per quarter, Tier 1 / 2 / 3 | ₹ | PLACEHOLDER: 0 / 300 / 600 | `tool_costs.csv` consumables |
| A13 | Training cost per trainee (2-hour course) | ₹ | PLACEHOLDER: 900 / 700 / 500 | R-D item 9 |
| A13s | Share of Tier 2 and 3 members trained per year | share | 0.6 / 0.5 / 0.4 | design |
| A14 | Tier 2 entry: logged referrals in 6 months | count | 6 / 6 / 6 | design |
| A15a | Expected referrals a year, Tier 1 | count | 2 / 2 / 2 | design |
| A15 | Tier 2 referrals a year (also the slide's "Gives back") | count | 12 / 12 / 12 | design |
| A16 | Tier 3 referrals a year | count | 40 / 40 / 40 | design |
| A17 | Enrolment cost per new member (distributor staff incentive + visit) | ₹ | PLACEHOLDER: 250 / 180 / 120 | R-D item 10 |
| A17c | Annual member churn replaced | share | 0.30 / 0.20 / 0.15 | judgement |
| A18 | Programme team and state coordinators (fixed) | ₹ lakh / year | PLACEHOLDER: 250 / 200 / 160 | R-D item 10 |
| A19 | Tech fixed: app extension running cost, analytics, IVR rental | ₹ lakh / year | PLACEHOLDER: 80 / 60 / 45 | R-D item 6 |
| A19m | Messaging per member per year (WhatsApp or SMS) | ₹ | PLACEHOLDER: 60 / 40 / 30 | R-D item 6 (Meta pricing) |
| A20 | Tool credit per logged referral | ₹ | 80 / 60 / 50 | design: kept below a typical cash coupon (A34) |
| A21 | Fraud flag: retailer to mechanic distance | km | 15 / 15 / 15 | design |
| A22 | Retailer-app one-time extension or build | ₹ lakh | PLACEHOLDER: 60 / 40 / 25 (higher if no live app) | R-A item 5 ruling |
| A23 | G1 gate: monthly active share | share | 0.60 / 0.60 / 0.60 | design |
| A24 | G1 gate: advocacy lift vs control | points | 15 / 15 / 15 | design |
| A25 | Baseline unprompted Eurogrip recommendation rate (for sample size only) | share | 0.20 / 0.20 / 0.20 | judgement; the brief says recommendations are "not much in favour" `[C4-B07]`; flagged as assumption |
| A26 | Kill threshold: break-even tyres per member per year | count | 12 / 12 / 12 | design (one a month) |
| A27 | Weighted average replacement tyre MRP | ₹ | PLACEHOLDER: 1,800 / 2,000 / 2,200 | `prices.csv` weighted by size mix (R-B) |
| A28 | GST on two-wheeler tyres | % | PLACEHOLDER: 18 / 18 / 18 | R-B item 6 |
| A29 | Channel margin (distributor + retailer) on the ex-GST price | % | PLACEHOLDER: 22 / 18 / 15 | R-B item 5 |
| A30 | Contribution margin on the company's net realisation | % | PLACEHOLDER: 26 / 30 / 34 | R-A item 2 (1 − raw-material % − variable conversion %) |
| A31 | Cost per mystery-rider audit | ₹ | PLACEHOLDER: 900 / 700 / 500 | R-D item 11 |
| A31n | Audit rounds per year at steady state | count | 2 / 2 / 2 | design (quarterly in the pilot) |
| A32 | Brand-track re-run | ₹ lakh / year | PLACEHOLDER: 40 / 30 / 20 | R-D item 11 |
| A33 | Meets and recognition per Tier 2 and 3 member | ₹ / year | PLACEHOLDER: 200 / 150 / 100 | R-D items 8, 9 |
| A34 | Cash coupon per tyre in the obvious scheme | ₹ | PLACEHOLDER: 60 / 80 / 100 | R-D lubricant reward rates scaled to tyre price; bull = higher coupon (worse for cash) |
| A35 | Share of Eurogrip replacement tyres fitted through mechanics today | % | PLACEHOLDER: 40 / 50 / 60 | R-C item 9 or judgement |
| A36 | Volume lift a cash scheme achieves | % | PLACEHOLDER: 15 / 10 / 6 | judgement, flagged |
| A37a..d | Ramp, share of steady-state members active in Q1, Q2, Q3, Q4 | share | 0.03 / 0.06 / 0.25 / 0.45 (same in all) | rollout plan §2.2.7 |
| A37e..h | Ramp Q5 to Q8 | share | 0.65 / 0.80 / 0.95 / 1.00 (same in all) | rollout plan |
| A38 | Validation interviews before pilot | count | 60 / 60 / 60 | design: 20 per segment |
| A39 | Validation cities | count | 4 / 4 / 4 | design: two per pilot state |

**Case 1 (prefix A1-).** A1-01 consolidated revenue from operations FY26 (₹ crore, R-A); A1-02 budget share 1.5 /
1.75 / 2.0 (`[C1-B12]`); A1-03..A1-06 shares of the budget for Commuter / Gig / Premium / Brand platform (design,
default 0.40 / 0.25 / 0.20 / 0.15); A1-07..A1-18 channel split (Digital, Retail, On-ground) inside each of the four
(design: Commuter 0.35 / 0.40 / 0.25; Gig 0.25 / 0.25 / 0.50; Premium 0.45 / 0.15 / 0.40; Brand 0.60 / 0.20 / 0.20);
A1-19 digital CPM (₹, `media_costs.csv`); A1-20 retail branding cost per outlet per year (₹); A1-21 cost per
on-ground event (₹); A1-22 riders reached per event; A1-23 cost per gig rider enrolled through a fleet partner (₹);
A1-24 average frequency for digital reach.

**Case 2 (prefix A2-).** A2-02 reference tyre mass (kg, R-F); A2-03 cost-delta ceiling (%, design 8); A2-04 tread
share of tyre mass; A2-05 cap share of tread; A2-06 baseline factory cost per tyre (₹; derive from MRP via A28, A29
and a stated factory margin, or from R-A cost structure); A2-07 extra mixing cost per kg of silica compound (₹);
A2-08 reinforcement material per tyre for the higher load index (₹); A2-10..A2-15 ICE tread recipe weight fractions
(NR, SBR, carbon black, oil, chemicals, other); A2-16..A2-22 EV cap recipe fractions (NR, solution SBR, silica,
silane, carbon black, oil, chemicals); A2-23 rolling-resistance reduction (%, literature R-F); A2-24 rolling
resistance share of energy use at urban duty (share, literature R-F); A2-25 reference EV range (km, R-F model mix).
Material prices come from `materials_prices.csv` by name.

**Case 3 (prefix A3-).** A3-01 domestic OHT revenue (₹ crore, R-A rule as for A01); A3-02 budget share; A3-03
tractor parc (lakh, R-G); A3-04 / A3-05 / A3-06 parc shares commercial-haulage / smallholder / hiring centre; A3-07 /
A3-08 / A3-09 rear-tyre replacement interval in years by segment; A3-10 rear tyre price (₹, 13.6-28 class, R-G);
A3-11 tyre life in hours, commercial use; A3-12 hours per year, commercial use; A3-13 assurance threshold (hours
guaranteed); A3-14 expected claim rate under assurance (%); A3-15 contribution margin per OHT tyre (%); A3-16 dealers
in the programme; A3-17 dealer programme cost per dealer per year (₹); A3-18 village mechanics enrolled; A3-19 cost
per mechanic per year (₹, reuse the Case 4 Tier 1 cost logic); A3-20 field days per year; A3-21 cost per field day
(₹); A3-22 financed tyre sets per year; A3-23 credit subvention per set (₹); A3-24 tyre sets sold under the
assurance per year; A3-25 average payout per claim as a share of the set price; A3-26 GST on tractor tyres (%, R-B
item 6); A3-27 channel margin on tractor tyres (%).

### §5.4 Outputs (`model_outputs.json`), the contract with writers and `make_values.py`

```
meta   {hash (sha1[:10] of assumptions.csv + risks.csv + the CSVs read), run_at, version: "eurogrip-model v1"}
checks {name: bool, ...}          all must be true; any false → MODEL FAIL
A      {id: {bear, base, bull, unit, label, case}}
c4 {
  universe   {methods:[{method, low, base, high}], bear, base, bull}         lakh
  segments   [{key: "S-A"|"S-B"|"S-C", lakh, share}]                         base universe
  bu_rev_cr, envelope_cr, spend_cr, spend_share_pct, headroom_to_2pct_cr      {bear, base, bull}
  members_lakh, cost_per_member, affordable_lakh, cap_lakh                   {bear, base, bull}
  lines      [{line, cr, pct}]   five lines, base, names exactly: Tools, refills | Visibility kits | Training, meets | Field teams | Tech and audits
  lines_sc   {bear: [...], base: [...], bull: [...]}
  cpt        {bear, base, bull}   contribution per tyre, ₹
  be         {bear, base, bull}   break-even extra tyres per member per year
  weeks      {bear, base, bull}
  cash_scheme {cost_cr, deadweight_pct, rewarded_units_lakh}  base
  audit      {n_per_arm, audits_per_year, cost_lakh}
  rollout    [{q: "Q1".."Q8", members_lakh, spend_cr}]
  year1_spend_cr, year2_spend_cr                                              base
  tornado    [{id, label, be_low, be_high, swing}]  top 6
  tiers      {t2_entry, t2_refs, t3_refs}
  app_name   string   ("Bandhan app" | "<current name>" | "retailer app")
  pilot_states string ("Tamil Nadu and Uttar Pradesh" unless R-C rules otherwise)
  validation {interviews, cities}
  bench      [{short, category, cash, tools, visibility, skill, advice, tracks}]  ≤ 6 rows + "Our design" row
  risks      [{id, risk_short, p, i, control_short}]   all rows, sorted by p×i desc
}
c1 { budget_cr {bear,base,bull}, matrix [{segment, digital_cr, retail_cr, onground_cr}], chosen_share_pct, reach {...} }
c2 { cost_ice, cost_ev, delta_pct, delta_inr, range_gain_pct {bear,base,bull}, km_gain {bear,base,bull} }
c3 { budget_cr {bear,base,bull}, sets {by segment}, market_sets, lines [...], used_cr, tco_per_hour, contrib_per_set,
     payback_sets, share_points, share_points_sc {bear,base,bull}, assurance_cost_cr }
flags  {c2_delta_within_target_base, c4_be_below_kill_base}   informational; a false flag is reported, not a failure
```

`model_tables.md` holds the same numbers as Markdown tables `T1` (Case 4 universe) to `T12` (Case 4 risks), `T13` to
`T15` (Case 1), `T16` and `T17` (Case 2), `T18` to `T20` (Case 3), each with an H2 `## T<n>. <title>` and a source
line.

### §5.5 Build steps and gate G-M

1. Create `model\inputs\assumptions.csv` from §5.3: every ID present, every `basis` sourced or reasoned, no
   `PLACEHOLDER`. Create `risks.csv` (10 rows; draft the risks from §2.2.13 and the pre-mortem prompts: code fraud,
   retailer does not log codes, low activity after month 3, distributor apathy, rivals copy, tool resale, audit
   contamination, app downtime, budget overrun, brand-track not re-run). Create `model\inputs\rulings.json` per §5.2
   from the R-A app ruling and the R-C pilot-state result (the model crashes without it).
2. Copy Appendix Q.1 to `eurogrip_model.py`. Run `PY model\eurogrip_model.py`. It prints a JSON summary and
   `MODEL PASS`. Fix data, not formulas, until it passes.
3. Copy `beyondtech-dcg\model\build_excel.py` to `model\build_excel.py` and adapt it to write `Eurogrip_Model.xlsx`
   with sheets `Assumptions` (from the CSV), `Case4`, `Case1`, `Case2`, `Case3`, `Risks`, each from
   `model_outputs.json` (values, not formulas, plus a note row naming the Python file and hash).
4. Sanity reading (write 6 lines in build-log): base break-even, weeks, members, spend and share, deadweight %, and
   whether break-even exceeds A26 (if it does, apply §2.2.13 and report to the orchestrator before writers start).

G-M: `MODEL PASS`; `model_outputs.json`, `model_tables.md`, workbook exist; build-log has the sanity lines.

---

## §6 PHASE D: THE FIGMA SLIDES DECK (Case 4, 4 slides, native vectors, EY density)

### §6.0 Entry gate, doctrine, visual models

Start only after G-R (research PDF done) and G-M. The deck never introduces a number that is not in
`model_outputs.json` or a cited research section. Doctrine: `ROOT\CLAUDE.md` §1 to §7 (zero dead space, bands and
rails, 4 to 5 type levels, charts paired with tables, in-chart annotation, sources bottom-right, cornerRadius 0, ink
outlines, layered sticker cards, 22 pt floor except source line and named fine print, Poppins + Inter). Density bar
for the core slide: ≥ 8 distinct visual forms, ≥ 9 named panels, 250 to 450 nodes.

**Visual models (D0: screenshot each with `get_screenshot`, read-only, maxDimension 1600, save to `deck\shots\inspo_*.png`, look before building):**
- Prime inspo `hOJVMGv9nIhDmayTT7DmOt`: list its slides with a read-only `use_figma`
  (`return figma.currentPage.children.find(c=>c.type==="SLIDE_GRID").children.flatMap(r=>r.children).map(s=>({id:s.id,name:s.name}))`)
  and screenshot its 3 densest slides (most nodes). Take: band rhythm, chart pairing, heat-map treatment.
- BeyondTech cover `cpcsN7ytWMJputcohXOMgz` slide `2:2` (mind map with hub, nodes, logo slots, dashed bus to crests;
  our S1 follows it) and its executive summary `2:4`.
- Dream11 `YoiazGGOribfg69EjEDIlP` slide `2:2` (cover mind map variant with dashed connectors).
- SwasthyaGrid `APbOstO4SSU7iAjYIgEeSd` (rails with chips, closed-loop step row).
- The other inspo decks (`e5VEexsLMhDampx7gvhFmM`, `vAIyXmljHlFDuwQo6RsoIN`, `JLOOyohkQPUrwXEsxDKz4m`,
  `O7oWkJR37V0H8IDKnt2Ed7`): one screenshot each of the densest slide. Note defects to avoid (off-canvas nodes, a
  headline colliding with a banner, clipped bar text).
- Never copy the Satoshi Gate cover (plain "case in numbers" text card).

### §6.1 Tooling (step D1): reuse the BeyondTech generator, patched

Copy from `ROOT\beyondtech-dcg\deck\` into `EG\deck\`: `gen.py`, `_palette.js`, `_extras.js`, `_x2.js`, `_v1.js`,
`_sweeps.js`, `setup.js`, `metrics.json`, `preview.py`. The generator reads `ROOT\verdict-mnc\deck\preamble.js` and
`ROOT\verdict-mnc\deck\mock_figma.js` **read-only by path** (keep `LIB` and `MOCKSRC` as they are). With `DECK =
EG\deck`, `BT` becomes `EG` and `ROOT` stays `nsut-innovators-court`, so `BT / "model" / "model_outputs.json"` resolves
to `EG\model\model_outputs.json` with no edit.

Write `EG\deck\patch_tooling.py` (Appendix Q.9) and run it once; it asserts every old string occurs exactly once:

| File | Change |
|---|---|
| `gen.py` | `# ===== BEYONDTECH DECK GEN v2 =====` → `# ===== EUROGRIP DECK GEN v1 =====`; `NS = 11` → `NS = 4`; `X2 = (2, 3, 5)  # the redesigned slides` → `X2 = (1, 2, 3, 4)  # glyph metrics and rail helpers on every slide` |
| `setup.js` | replace the whole file with Appendix Q.8 |
| `_palette.js` | replace the whole file with §6.2 |
| `_extras.js` | `// ===== BEYONDTECH DECK EXTRAS =====` → `// ===== EUROGRIP DECK EXTRAS =====`; `// ===== END BEYONDTECH DECK EXTRAS =====` → `// ===== END EUROGRIP DECK EXTRAS =====`; the `RIBN` line, the `RIBAP` line and the whole `coverTop` function → Appendix Q.3 |
| `_sweeps.js` | the `BAN` line, the `ABSENT` line and the banned-word test → Appendix Q.9 strings |
| `_v1.js`, `_x2.js`, `metrics.json`, `preview.py` | unchanged |

Then write `deck\make_values.py` (Appendix Q.2) and `deck\slides\s01.js` to `s04.js` (Appendix Q.4 to Q.7).

### §6.2 Palette (`deck\_palette.js`) and the brand-colour rule

Default palette (Eurogrip-derived: tyre black, Eurogrip yellow, amber, signal red). **Before writing the file, D1
samples the official logo** (download the logo image referenced by `https://eurogriptyres.com/`, file
`eurogriptyres-logo-apr25.png` or the current one, into `deck\logos\eurogrip.png`; read it with the Read tool to
confirm it is the Eurogrip logo) and runs:

```
PY -I -c "from PIL import Image;from collections import Counter;import colorsys,sys;im=Image.open(sys.argv[1]).convert('RGBA');px=[(r,g,b) for r,g,b,a in im.getdata() if a>200 and max(r,g,b)-min(r,g,b)>60];c=Counter((r//8*8,g//8*8,b//8*8) for r,g,b in px).most_common(6);print([( '#%02X%02X%02X'%k, n, round(colorsys.rgb_to_hsv(*[v/255 for v in k])[0]*360)) for k,n in c])" "<EG>\deck\logos\eurogrip.png"
```

Mapping rule (deterministic; log the result in `DECISIONS.md`):
- Dominant chromatic hue 35° to 60° (yellow or orange): set `accent` to that colour; keep the other defaults.
- Hue below 20° or above 340° (red): set `primary` to that colour darkened until its contrast on white is ≥ 4.5
  (multiply RGB by 0.9 per step); keep `accent` #FFC20E.
- Hue 190° to 250° (blue): set `primary` to that colour darkened to contrast ≥ 4.5; keep the rest.
- No chromatic pixels (black-and-white logo): keep all defaults.
- Recompute `tint` as 15% of the new primary on white only if `primary` changed.

```js
const C = {
  primary:{r:0.631,g:0.384,b:0.027}, primaryDeep:{r:0.067,g:0.067,b:0.067},
  accent:{r:1,g:0.761,b:0.055}, alert:{r:0.725,g:0.110,b:0.110},
  tint:{r:1,g:0.957,b:0.800}, alertTint:{r:0.992,g:0.886,b:0.886},
  blue:{r:0.247,g:0.247,b:0.275}, blueDeep:{r:0.067,g:0.067,b:0.067}, blueTint:{r:0.929,g:0.929,b:0.929},
  good:{r:0.082,g:0.502,b:0.239}, goodTint:{r:0.863,g:0.988,b:0.906}, accentTint:{r:1,g:0.976,b:0.902},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.961,g:0.961,b:0.961}, white:{r:1,g:1,b:1}
};
const HG=[null,{r:1,g:0.969,b:0.839},{r:1,g:0.894,b:0.541},{r:1,g:0.761,b:0.055},{r:0.851,g:0.545,b:0},{r:0.541,g:0.353,b:0}];
```

Roles: `primary` amber #A16207 (panel titles, KPI numerals, the PROGRAMME rail); `primaryDeep` black #111111 (active
or dark cards, hub, chips, counter); `accent` Eurogrip yellow #FFC20E (sticker back-cards, inactive ribbon tags,
chips' backs); `alert` red #B91C1C (moneyshot, the rejected obvious play, DELIVERY rail); `tint` cream #FFF4CC (quiet
fills, table headers). Heat scale `HG` runs cream → yellow → amber → brown. **Text on HG[1] to HG[4] is ink; only
HG[5] takes white text** (contrast).

### §6.3 Section mapping (skill touchpoint T4; record in `deck\derivation.md`)

| Skill section | Where in this 4-slide deck |
|---|---|
| Front matter | S1 cover: title, verdict card, team table, mind map of who decides the tyre |
| I Executive summary (recommendation in headline, for/against) | S2 headline + P3 (obvious play, struck) vs P4/P5 (our design and its payback) |
| II Context + foreshadowing seed | S1 mind-map caption (non-stockers advocate) + S2 P1 (where the decision is made) + P2 insight 2 |
| III Actors (symmetric) | S1 four nodes (mechanic, rider, retailer, rivals) + S2 P1 three segments |
| IV Quantitative analysis + moneyshot | S2 P1, P5 (moneyshot), P7; S3 A1, A2 |
| V Feasibility | S2 P6 (gates), P7 (budget inside envelope); S3 A4 (risks, validation) |
| VI Recommended alternative | S2 P4 (tiers and loop), P8 (measurement) |
| VII Conclusion (double synthesis) | S2 headline as the section closer; S4 "THEREFORE" card as the final synthesis |
| Appendix (defensive depth) | S3 A1 to A4 |
| Bibliography | source lines on S1 to S4 + research document Appendix A |

### §6.4 Global skeleton and naming

- Content slides S2 and S3: `skelBT(s, -1, counter, chip, chipW, headline, source, {labels: RIBN|RIBAP})`.
  Ribbon y 40 to 100 (no active tag: on a one-page summary the ribbon lists the brief's five judging criteria, which
  the bands answer; on the appendix it lists the four appendix panels). Chip and counter at y 118. Headline 40 pt at
  y 188, max 2 lines (≤ 112 px; skelBT shrinks to 34 pt if needed). Content y 312 to 1030. Source line y 1046 (14 pt).
- Every top-level panel, card, table is named `PANEL:`, `CARD:`, `KPI:` or `TABLE:` (V1 checks overlaps among these).
  Back-cards are `BACK:` (ignored). Logo slots `LOGO: <brand>`, image slots `IMG: <name>` (font sweep exempts their
  14 pt captions).
- Gutters 16 px on S2, 24 px on S3. Rails 40 px wide at x 64; S2 panels start at x 120.
- Character budgets used below: Inter Semi Bold 22 pt ≈ 11.5 px per character, Inter Bold 22 pt ≈ 12 px, Poppins
  Bold 22 pt ≈ 13.5 px (uppercase ≈ 15 px), Poppins Bold 24 pt ≈ 14.7 px. Strings in this plan are already sized to
  these budgets; the mock with real glyph metrics (X2) is the final judge.

### §6.5 Slide-by-slide specification (code in Appendix Q.4 to Q.7)

**S1 Cover** (`slides\s01.js`, Appendix Q.4; archetype A Cover + mind-map hub per `slide-archetypes.md`)

| Element | Geometry (x, y, w, h) | Content |
|---|---|---|
| Top band `coverTop` | chip (64, 48, 600, 56); logo slots Eurogrip (696, 40, 190, 72), Unstop (902, 40, 150, 72), DTU (1068, 40, 72, 72); team chip (1556, 48, 300, 56); rule y 140 with five station circles | `EUROGRIP × UNSTOP  \|  CASE STUDY 4`; `TEAM IDEAFORGE` |
| Title | (64, 160) 76 pt ExtraBold ink; (64, 276) 76 pt ExtraBold amber | `MECHANIC ADVOCACY` / `FOR EUROGRIP` |
| Subtitle | (64, 390, 1100) 26 pt Poppins Bold black, 2 lines | `Case Study 4: a scalable, cost-effective advocacy ecosystem with mechanics and puncture shops, domestic two-wheeler market` |
| Verdict card | `layered(64, 480, 1100, 216)` black front, yellow back | line 1 (26 pt Poppins Bold yellow): `OUR ANSWER: PAY FOR THE ADVICE, NOT THE STOCK, AND PAY IN TOOLS AND STATUS RATHER THAN CASH.`; line 2 (22 pt white): `V.cover_line` |
| Team | label (64, 716) 28 pt amber `TEAM IDEAFORGE`; `teamBT(64, 764, [300, 500, 300])` | Members \| Institution \| Role; Harsh Kawatra \| Delhi Technological University \| Team Leader; Anuj Gambhir \| Delhi Technological University \| Member |
| Prepared-for line | (64, 944, 1100) 22 pt Inter Bold | `Prepared for the Eurogrip × Unstop Collaboration, Case Study 4` |
| Mind map panel | `panel(1200, 160, 656, 836, "WHO DECIDES THE REPLACEMENT TYRE", {fill: tint, layered})` | seed caption at (16, 58): `Advocacy already comes from mechanics who do not stock Eurogrip.` |
| Image row (top) | imgSlots 141×82 at (16, 114), (165, 114), (350, 114), (499, 114) (below the 2-line seed caption) | `photo: mechanic at work`, `photo: puncture shop`, `photo: rider at replacement`, `product: Eurogrip tyre` |
| Nodes | `node2` 290×72 at (16, 204), (350, 204), (16, 532), (350, 532) | `THE MECHANIC / advises at replacement`; `THE RIDER / buys on that advice`; `THE RETAILER / logs the code at sale`; `THE RIVALS / MRF, CEAT, Apollo` (fill accentTint) |
| Hub | black circle 172 at centre (328, 404); logo slot `Eurogrip` 132×56 inside; text `Case Study 4` (22 pt Inter Bold yellow) | wires hub → (161, 276), (495, 276), (161, 532), (495, 532) |
| Logo row (bottom) | `LOGO: Eurogrip` (16, 614, 141, 60), `IMG: screen: retailer app` (165, 614, 141, 60), `LOGO: MRF` (350, 614, 92, 60), `LOGO: CEAT` (446, 614, 92, 60), `LOGO: Apollo Tyres` (542, 614, 98, 60) | |
| Dashed bus | dashedV hub bottom (328, 490) to y 684; dashedH x 76 to 580 at y 684; drops at x 76, 202, 328, 454, 580 | five crests `logoSlot(cx − 60, 696, 120, 50)` with captions (22 pt Inter Bold, centred at cx, y 750) |
| Crests | default `Castrol / lubricants`, `Mobil / lubricants`, `Exide / batteries`, `Asian Paints / paints`, `Pidilite / adhesives` | **D0 replaces any brand whose programme is not a row in `benchmarks.csv`** with one that is (same category order) |
| Captions | (16, 782) 22 pt amber `Adjacent categories that already reward influencers`; fine print (16, 812) `Logos mark brands referenced in the analysis; no partnership is implied.` | |
| Bottom | rule y 1012; source line | `V.src1` |

**S2 Executive summary, the core slide** (`slides\s02.js`, Appendix Q.5; archetypes H + J + P)

- Skeleton: `skelBT(s, -1, "CASE 4", "EXECUTIVE SUMMARY", 380, V.h2, V.src2, {labels: RIBN})`.
- Headline (`V.h2`): `Paying mechanics in tools and status, not cash, reaches ${members} lakh shops for ${budget} a year and breaks even at ${be} extra tyres each`.
- Rails: `DIAGNOSIS` (64, 312, h 230, black), `PROGRAMME` (64, 558, h 230, amber), `DELIVERY` (64, 804, h 226, red).

| Panel | (x, y, w, h) | Title (exact) | Content (helpers) | Criterion answered |
|---|---|---|---|---|
| P1 | (120, 312, 566, 230) | `ONE DECISION, THREE KINDS OF SHOP` | `segBar` 534×48 at (16, 62) of `V.seg` (S-A black, S-B amber, S-C yellow; % inside if ≥ 15%); three legend rows at y 124, 158, 192: swatch + `<lakh> lakh` (Poppins Bold) + label (Inter Bold, maxW 380): `stock and fit tyres`, `service bikes, stock none`, `fix punctures, refer` | Scalability |
| P2 | (702, 312, 566, 230) | `THE BRIEF'S INSIGHTS, ACTED ON` | `bl` 4 items with bold leads: `Stocking lags awareness: ` credit the advice · `Non-stockers advocate: ` no stock needed · `Visibility is rising: ` boards and aprons · `One-off cash fades: ` tools and tiers renew | Insight-grounding |
| P3 | (1284, 312, 572, 230) | `THE OBVIOUS PLAY: CASH PER TYRE` (red, struck through with a 3 px red rule) | `badgeList` red badges d 38 pitch 54: `Pays stockers; advice comes from all` · `Too few tyre sales per shop for points` · `Rivals can match cash within a week` | Incentive realism (by contrast) |
| P4 | (120, 558, 1148, 230) | `THE PROGRAMME: EQUIP, RECOGNISE, CREDIT THE ADVICE` | left `wrapTable` (16, 58) cw [96, 270, 190], heads `Tier / Gets / Gives back`, rows `V.tiers`, headerH 36, rowH 42; right loop of 4 nodes 118×64 at x 588 + i×142, y 74: `Mechanic / advises` (black), `Rider / buys`, `Retailer / logs code`, `Credits / buy tools` (yellow), arrows between; return path from node 4 down to y 182, left to node 1, arrow up; labels `logged in the ${V.app}` (amber, y 146) and `tiers renew every 6 months` (y 188) | Incentive realism, Sustainability |
| P5 | `layered(1284, 558, 572, 230, white, "CARD: MONEYSHOT", alert)`, stroke 3 red | (none) | `V.be` 80 pt ExtraBold red at (20, 0); beside it `EXTRA TYRES` 30 pt ExtraBold red and `per member shop a year` 22 pt; line (20, 118, 532) 24 pt Poppins Bold `PAY BACK THE WHOLE PROGRAMME: ONE TYRE EVERY ${V.weeks} WEEKS`; line (20, 194) 22 pt Inter Bold amber `Bear ${be3[0]}  \|  base ${be3[1]}  \|  bull ${be3[2]} tyres a shop` | Measurability (the bar), the moneyshot |
| P6 | (120, 804, 566, 226) | `24 MONTHS, THREE GATES` | `gantt` (16, 58) labelW 150, colW 48, rowH 40, Q1 to Q8; rows `2 states` Q1 to Q2 (black), `8 states` Q3 to Q4 (amber), `National` Q5 to Q8 (red, text `all states`); yellow diamonds G1 at end of Q2 (row 1), G2 at end of Q4 (row 2), G3 at end of Q8 (row 3, white label inside the bar) | Scalability |
| P7 | (702, 804, 566, 226) | `V.p7title` = `₹<spend> CRORE, <share>% OF UNIT REVENUE` | `donut` d 156 at (96, 142), inner 0.5, five slices; legend rows at y 60 + 32i: swatch (196), label (218, maxW 186), % (right at 458, Poppins Bold), ₹ crore (right at 550, amber) | Scalability (budget realism) |
| P8 | (1284, 804, 572, 226) | `GATES G1 TO G3: THE BAR TO SCALE` | `wrapTable` (16, 56) cw [132, 224, 184], heads `Layer / Metric / Gate`, rows `V.kpis` (`Activity / Monthly active / G1 ≥ 60%`, `Advocacy / Mystery audit / G1 +15 points`, `Sales / Code-linked tyres / G2 ≥ <be> each`, `Brand / Brand re-survey / G3 stocking up`), headerH 34, rowH 33 | Measurability |

Forms on S2: rails, segmented bar with legend, keyword bullets, struck card with numbered badges, table, closed-loop
flow with return arrow and in-diagram annotation, moneyshot numeral, Gantt with gate diamonds, donut with legend,
scorecard table = 10.

**S3 Appendix** (`slides\s03.js`, Appendix Q.6; archetype X)

- Skeleton: `skelBT(s, -1, "A / 01", "APPENDIX", 280, V.h3, V.src3, {labels: RIBAP})`; headline `V.h3`:
  `Appendix: ${univ} lakh shops counted four ways, break-even between ${be bull} and ${be bear} tyres a shop, and ${n} programmes compared`.

| Panel | (x, y, w, h) | Title | Content |
|---|---|---|---|
| A1 | (64, 312, 884, 350) | `A1 FOUR WAYS TO COUNT THE SHOPS` | `hBars` (16, 62, 500) labelW 212, rowH 46, barH 26, valueW 110 from `V.tri` (the two estimates amber, the two floors black); text (16, 256, 500) `Base case <univ> lakh: mean of the two estimates, never below the largest programme count.`; `wrapTable` (532, 62) cw [150, 90, 96] `Segment / Lakh / Share` rows `V.segrows` (3 segments + Total); text (532, 272, 336) `Pilot states: <V.pilots>` |
| A2 | (972, 312, 884, 350) | `A2 BUDGET MODEL, BEAR TO BULL` | `wrapTable` (16, 58) cw [230, 110, 110, 110] `Line / Bear / Base / Bull`, 6 rows `V.scen`; label (600, 58) `Break-even tyres a shop`; `vBars` (600, 92, 268, 240) bear red / base amber / bull black |
| A3 | (64, 686, 884, 344) | `A3 HOW ADJACENT CATEGORIES PAY INFLUENCERS` | `grid` (16, 56) labelW 220, cellW 104, rowH 32, headH 40, corner `Programme`, columns `Cash / Tools / Boards / Skills / Advice / Tracks`, rows `V.bench.rows` (≤ 7 incl. `Our design`), cells Yes (HG[4]) / Part (HG[2]) / No (white) / n/a (surface); fine print (16, 322): `Advice = credits a recommendation without a purchase. Tracks = logs activity by app or code. As published.` |
| A4 | (972, 686, 884, 344) | `A4 RISKS, CONTROLS AND VALIDATION` | `grid` (16, 56) 3×3 probability (High, Med, Low rows) × impact (Low, Med, High columns), labelW 80, cellW 84, rowH 60, headH 36, corner `P / I`, cells = risk numbers, fill `HG[1 + (2 − i) + j]`; caption (16, 282) `P = probability, I = impact`; `badgeList` (356, 56, 512) red, d 34, pitch 46, five `risk: control` strings; `callout` (356, 286, 512, 46) lead `VALIDATE FIRST: ` text `V.valid` |

**S4 Thank you** (`slides\s04.js`, Appendix Q.7; centred, mirrors the cover table per memory rule)

`coverTop`; `THANK YOU` 104 pt ExtraBold centred at y 176; `layered(260, 370, 1400, 150, black, "CARD: therefore")`
with centred 26 pt Poppins Bold yellow `THEREFORE: ${V.thanks}`; team label centred y 556; `teamBT(410, 604, [300,
500, 300])`; three link slots `imgSlot` 340×80 at x 410, 790, 1170, y 790: `link: research document (PDF)`,
`link: two-minute video`, `link: model workbook`; line y 900 `The research document and the model back every number
on these slides.`; rule y 1012; source `V.src4`.

### §6.6 Content lock (step D0, before any code)

0. Create `deck\` and write `deck\make_values.py` from Appendix Q.2 (D0 needs it to compute the strings).
1. Invoke the skill (T4). Read the files listed for T4. Log `SKILL T4`. Write `deck\derivation.md` with the §6.3
   mapping and a table `| Slide | Panel | Text or number | Research § | Tag | Model key | Matches (Y/N) |` covering
   every number on S1 to S4.
2. Write `deck\slide-copy.md`: every string on every slide, verbatim (copy from §6.5 and Appendix Q; fill V values
   from the current `model_outputs.json` by running `PY -c` on `make_values.build`). Check each string against its
   character budget (§6.4). If a model value makes a string too long (for example a 3-digit break-even), apply the
   shortening ladder in §6.9 and record it.
3. Finalise crests and benchmark rows: the 5 cover crests and the ≤ 6 benchmark rows must be programmes present in
   `benchmarks.csv` with VERIFIED sources; short labels ≤ 16 characters (`Castrol, lubes`).
4. Finalise the three source lines (`SRC1` to `SRC4` constants in `make_values.py`), each one line at 14 pt
   (≤ 230 characters), naming publishers short (`MoSPI ASUSE 2023-24`, `TVS Srichakra AR FY26`, `VAHAN`, ...).
5. `must` list (sweeps check presence): `TEAM IDEAFORGE`, `Harsh Kawatra`, `Anuj Gambhir`, `Delhi Technological
   University`, `Case Study 4`, `THANK YOU`, `THEREFORE`, `Tier 1`, `Tier 2`, `Tier 3`, `INCENTIVE REALISM`,
   `MEASURABILITY`, the V values of `be`, `budget`, and `univ + " lakh"`.

Gate G-D0: both files exist; every number row says `Matches Y`.

### §6.7 Build procedure

| Step | What | Done when |
|---|---|---|
| D1 | Copy and patch tooling (§6.1, Q.9); palette rule (§6.2); write `slides\s01.js` to `s04.js` (Q.4 to Q.7; `make_values.py` already exists from D0); invoke the skill in slide mode once per slide (T8) and confirm the archetype elements; run `PY deck\gen.py pre`, then `PY deck\gen.py mock`; then `PY deck\preview.py 1 2 3 4` and Read each `deck\shots\preview_0n.png` | mock prints `OK` for s01 to s04 (`warnings: []`, `ISSUES 0`, script < 49,900 chars); previews show no overlaps, no clipped text, no empty regions |
| D2 | ToolSearch `select:mcp__figma-mcp__whoami,mcp__figma-mcp__create_new_file,mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__upload_assets,ReadMcpResourceTool`; read the figma-use skill (`ReadMcpResourceTool` on `skill://figma/figma-use/SKILL.md`, or the Skill tool if a `figma-use` skill is listed); `whoami` (confirm plan key `team::1564294484048272772`; if the user has several teams and this key is absent, ask the user); `create_new_file` editorType `slides`, name `Eurogrip Case 4 \| Team IdeaForge`; run `setup.js` via `use_figma`; save ids to `deck\slide-ids.json` as `{"S1":"<id>","S2":"<id>","S3":"<id>","S4":"<id>"}`; write `deck\figma.md` (file key, URL, ids, fonts check) | 4 slides, `fontsOk` all true, no extras |
| D3 | `PY deck\gen.py bind`; for n in 1..4 in order: `use_figma` with the exact contents of `build\slide_0n.js`; then `use_figma` with `build\v1_0n.js`; fix issues by §6.9 (edit `slides\s0n.js`, re-run `gen.py mock n`, `gen.py bind n`, rebuild that slide only; never hand-patch nodes); ≤ 3 rounds per slide; `get_screenshot` of the slide (maxDimension 1600) saved to `deck\shots\s0n.png`; Read it and compare with `preview_0n.png` | all 4 slides V1 `clean: true`; screenshots saved |
| D4 | Logos and images (§6.10) | every slot filled at the correct aspect or listed in open items |
| D5 | `use_figma` with `build\sweeps.js`, then `build\v1_all.js`; then critique (T5): invoke the skill in critique mode, read `references/critique_rubric.md`; for a 4-slide deck score Dimensions 1, 3, 4 (on S2 and S3), 5, 7 and the pass/fail items that apply (recommendation in the executive-summary headline; for/against present; action titles; sources on all slides; moneyshot present once; conclusion synthesis present; no placeholder text other than the named image slots); write `deck\critique.md`; fix CRITICAL and IMPORTANT; re-run sweeps and V1 | sweeps: `radiusFixed 0`, `moneyshot 1`, `fontLow []`, `copy []`, `missing []`, `presentBad []`; V1 clean; critique ≥ 40/45 equivalent |
| D6 | `get_screenshot` maxDimension 3840 of each slide → `deck\shots\hi_s0n.png`; build `deck\Eurogrip_Case4_preview.pdf` (one page per PNG) with `PY -c "import fitz,glob;d=fitz.open();[ (lambda p:(d.new_page(width=1920,height=1080).insert_image(fitz.Rect(0,0,1920,1080),filename=p)))(p) for p in sorted(glob.glob(r'<EG>\deck\shots\hi_s0*.png'))];d.save(r'<EG>\deck\Eurogrip_Case4_preview.pdf')"`; update `deck\figma.md` and build-log | preview PDF has 4 pages |

### §6.8 What the executor must check on every screenshot (K-card, from the BeyondTech build)

1. No region of the content zone is empty larger than about 120×120 px (EY zero dead space).
2. Every text sits inside its panel; nothing touches a panel border; no text below 22 pt except source, fine print
   and slot captions.
3. The moneyshot numeral is the largest numeral on S2 and is red; the obvious-play title is visibly struck through.
4. The loop in P4 reads left to right with a return arrow; labels sit on the return path, not on the nodes.
5. The gantt diamonds sit on bar ends; the donut has five slices and the legend values sum to 100% (±1 for rounding).
6. Ribbon tags are evenly spaced, wires connect punch holes, no tag is active (by design).
7. Cover: four spokes from the hub reach the four node edges; the dashed bus reaches all five crests; the seed
   caption is visible.

### §6.9 Fix rules (one rule per V1 or mock issue type)

| Issue | Fix (in `slides\s0n.js` or `make_values.py`, then mock, bind, rebuild that slide) |
|---|---|
| `overlap` between two named panels | move the lower panel down by overlap + 16 or reduce the upper panel's height; never overlap a layered back-card counted as a panel (they are `BACK:` and ignored) |
| `bounds` | shrink width or move left/up |
| `belowContent` (panel bottom > 1038) | reduce row heights (never below 30 px for 22 pt text) or panel height |
| `headline3lines` | shortening ladder: (1) drop adjectives, (2) replace an "and" clause with a comma clause, (3) round numbers to whole units, (4) let skelBT shrink to 34 pt |
| `source2lines` | shorten publisher names; drop "accessed" dates |
| `textOut` / `overflow` | widen the text box or the panel column; shorten the string with a plain synonym; never go below 22 pt |
| `cellWrap` | widen the column (take width from the widest other column), shorten the cell text, or raise `rowH` by 4 |
| `rail label too long` | use the shorter rail label already chosen (`DELIVERY`); never shrink below 22 pt |
| font sweep hit | raise to 22 pt; if it then overflows, shorten the text |
| copy hit (dash, `?`, `!`, banned word) | rewrite the sentence |
| `ribbon too wide` | the helper drops to 22 pt automatically; if still too wide, shorten `INSIGHT-GROUNDING` to `INSIGHT` (log it) |

### §6.10 Logos and images (step D4)

1. `use_figma` with `build\slots.js` to list every `LOGO:` and `IMG:` slot with its size. Save to `deck\slots.json`.
2. Logos: fetch each brand's official logo (organisation's own press or brand page first; Wikimedia Commons second)
   into `deck\logos\<brand>.png` (convert SVG to PNG at ≥ 2× slot size with a headless Chrome screenshot or PIL from a
   PNG rendition; do not run downloaded code). Read each file with the Read tool to confirm it is the right brand.
   Write `deck\logos\manifest.json` entries `{brand, file, source_url, licence_note, w, h}`.
   Expected brands: Eurogrip (×3 slots: cover top, hub, retailer row; thank-you top), Unstop, DTU, MRF, CEAT, Apollo
   Tyres, and the five crest brands.
3. For each logo slot: create inside it a child rectangle named `IMG` sized to the logo's aspect ratio, fitted within
   the slot minus 6 px padding and centred; `upload_assets` (count 1, nodeId = that rectangle, scale mode FIT) and POST
   the bytes to the returned URL; then remove the slot's caption text and its dash pattern. Never resize the slot.
4. Photos (`IMG: photo: ...`, `IMG: product: ...`, `IMG: screen: ...`): only openly licensed images (Wikimedia
   Commons; record author and licence in the manifest) or images the user supplies. Crop locally with PIL to the slot's
   exact aspect ratio before upload (FILL), per `CLAUDE.md` §7.4 and §7.5. If no suitable licensed image exists,
   leave the dashed slot and list it in §10 open items. The retailer-app screen stays a slot unless the user supplies a
   screenshot.
5. Link slots on S4 stay as slots until the user gives the links (open items).
6. Re-run `build\sweeps.js` (the caption removal changes text content).

### §6.11 Rate limits and recovery

On a Figma HTTP 429 or timeout: wait 60 s, then check the slide's child count with a read-only `use_figma`
(`return (await figma.getNodeByIdAsync("<id>")).children.length`). Every slide script starts with `wipe(s)` (via
`skelBT` or directly), so re-running that slide's build script is always safe. Never run two Figma calls at once.
Never create a second file; `setup.js` is idempotent.

---

## §7 PHASE S: ROUND 1 EXTRAS (after G-D)

### §7.1 S1: the one-page executive summary PDF

The brief's Round 1 asks for a "1-page executive summary of the strategic approach" `[C4-B23]`. Slide 2 is that page.
Export it: `get_screenshot` of S2 at maxDimension 3840 (already `deck\shots\hi_s02.png` from D6) → one-page PDF
`round1\IdeaForge_Eurogrip_Case4_Executive_Summary.pdf` (PyMuPDF, page 1920×1080 pt, image fitted). Read the PDF
page with the Read tool to confirm legibility. If the user prefers a portrait A4 page instead, that is an open item
(§10), not a default.

### §7.2 S2: the 2-minute video script (`round1\video-script.md`)

The brief: "precise and direction-focused, not a polished production ... clarity of thinking" `[C4-B24]`. Write a
script of 260 to 300 spoken words (about 2 minutes at 140 words a minute), two speakers, following S2 top to bottom:

| Time | Speaker | Beat | On screen |
|---|---|---|---|
| 0:00 to 0:15 | Harsh Kawatra | The finding: where the tyre decision is made and what the brief's study says (no hook, open with the finding) | S2 P1, P2 |
| 0:15 to 0:35 | Harsh Kawatra | Why the obvious cash-per-tyre scheme fails (three reasons) | P3 |
| 0:35 to 1:05 | Anuj Gambhir | The programme: tiers, the code loop, the six-month review | P4 |
| 1:05 to 1:25 | Anuj Gambhir | Rollout and gates | P6, P8 |
| 1:25 to 1:50 | Harsh Kawatra | Budget and the break-even bar (the moneyshot) | P7, P5 |
| 1:50 to 2:00 | Harsh Kawatra | The one-line answer | S4 card |

Style §0.5 (no hooks, no questions, no exclamations, no dashes). Include every number exactly as on the slide.

### §7.3 S3: the Q&A bank (`qa\qa-bank.md`, skill touchpoint T7)

Invoke the skill; read `rhetoric.md` §6 and §8. Write 30 questions the panel may ask about Case 4 with answers of 40 to
90 words, each naming the research section and appendix panel that backs it. Cover at least: universe count method;
why non-stockers count; tool vs cash evidence given the struck brief line (answer honestly: the criterion names it,
our pilot tests it); fraud; retailer incentive to log codes; app dependency; break-even arithmetic; what if
break-even is not met; why 1.75%; distributor capacity; puncture shops' literacy and phone access; rival response;
measurement validity of mystery audits; scaling cost curve; EV tyre link; data we did not have. Log `SKILL T7`.

Gate G-S: the three files exist; the script word count is 260 to 300; the Q&A has 30 entries; dash and exclamation
grep is clean.

---

## §8 VERIFICATION

### §8.1 Gate table

| Gate | Check | Command or method |
|---|---|---|
| G-R0 | folders, brief, ARGUMENT, registers, SKILL T1/T2 | `Test-Path` each file; grep build-log for `SKILL T1` |
| G-R1 | lane rows, statuses, CSVs, unique S-IDs | §4.2 one-liner |
| G-R2 | verification pass ≥ 90% per lane | `raw\R0-verify.md` table |
| G-M | `MODEL PASS`; outputs exist | `PY model\eurogrip_model.py` |
| G-R3 | each part meets its section minimums; self-check clean | writers' reports |
| G-R | `ASSEMBLY PASS`; PDF renders; critique fixed | `PY research\assemble.py md`, `... pdf`, Read PDF |
| G-D0 | slide copy and derivation complete | files exist; all rows `Matches Y` |
| G-D | mock OK ×4; V1 clean ×4; sweeps clean; critique ≥ 40/45 | §6.7 |
| G-S | Round 1 extras | §7 |

### §8.2 Cross-deliverable greps (run before G-R, G-D and G-S)

```
PY -c "import re,glob,io;fs=[f for p in [r'<EG>\research\parts\*.md',r'<EG>\research\raw\conflicts.md',r'<EG>\deck\slides\*.js',r'<EG>\deck\slide-copy.md',r'<EG>\round1\*.md',r'<EG>\qa\*.md'] for f in glob.glob(p)];[print(f,len(re.findall('[—–]',io.open(f,encoding='utf-8').read())),io.open(f,encoding='utf-8').read().count('!')) for f in fs]"
```
Every file must print `0 0` (the `!` count in `.js` files must be 0 too: the slide code never uses `!==`; if a helper
needs a negation in slide code, write `=== false` or restructure). Then grep for
`TODO|TBD|Lorem|Insert|xyz|Placeholder|PLACEHOLDER` across the same files plus `model\inputs\*.csv`: 0 hits (the
`IMG:` and `LOGO:` slot names are not placeholders in this sense; their captions start with `photo:`, `product:`,
`screen:`, `link:` or end with `logo`).

**Consistency grep (golden rule §0.3 and CLAUDE.md §5):** collect every ₹ figure, lakh figure and percentage on the
four slides (from `slide-copy.md`) and confirm each appears in `model_outputs.json` or in the research document with
the same value. Paste the table into `deck\derivation.md`.

### §8.3 Invented-name sweep

List every capitalised multi-word phrase in the research parts and the deck strings (`re.findall(r"\b(?:[A-Z][a-z]+\s){1,3}[A-Z][a-z]+\b", text)`)
that is not in the briefs, the raw files, or this allow-list: {Team IdeaForge, Delhi Technological University,
Eurogrip, TVS Srichakra, Tier 1, Tier 2, Tier 3, Case Study, Bandhan, Click to Connect, Unstop}. Review each; remove any
coined label for the programme, a tier, a campaign or a method.

### §8.4 Final check by the orchestrator (before reporting to the user)

1. Open the research PDF (pages 1 to 3) and the deck preview PDF (all 4 pages) with the Read tool and look at them.
2. Re-run the sweeps and V1 on the live Figma file (it may have been edited).
3. Confirm the deck's headline numbers equal `model_outputs.json` base values.
4. Confirm the build-log has SKILL T1 to T8 lines.

---

## §9 RISKS AND RECOVERY

| Risk | Likelihood | Control |
|---|---|---|
| No source splits TVS Srichakra revenue by replacement and product line | high | A01 and A3-01 rules (§5.3): three readings of partial statements; the document states the derivation; the deck says "unit revenue" with the appendix showing bear to bull |
| No national count of mechanics exists | high | four-method triangulation (R-C); median as base; the appendix shows all four; the document says what each method misses |
| Retailer app no longer live | medium | §2.2.5 app rule: generic wording + build cost A22 |
| Benchmark programmes are poorly documented | medium | `n/a` cells allowed; at least 6 rows with ≥ 4 known fields required; rows chosen by sourcing strength |
| Break-even above the kill threshold | low to medium | §2.2.13: adjust Tier 3 hardware to lease-only; narrow segments; report before writers start |
| Core slide too dense for the 22 pt floor | medium | strings pre-sized (§6.4); mock with real glyph metrics; preview PNGs before Figma; fix ladder §6.9 |
| Writers drift into invented quotes or labels | medium | writer rules; invented-name sweep §8.3; critique T6 |
| Figma rate limits or partial builds | medium | §6.11 |
| Plan file overwritten by a later session | medium | first action copies it to `EG\PLAN.md` |
| Struck brief line used as a finding | medium | §0.3 rule 5; Q&A item; critique checks it |

---

## §10 OPEN ITEMS FOR THE USER (list in every hand-off message until resolved)

1. Photos for the cover image slots (mechanic at work, puncture shop, rider at replacement, Eurogrip tyre) if no
   openly licensed image fits; a screenshot of the retailer app.
2. Links for the thank-you slide (research PDF location, 2-minute video, model workbook).
3. Confirmation of roles on the team table (default: Harsh Kawatra, Team Leader; Anuj Gambhir, Member).
4. Any logo that could not be sourced officially (expected: Unstop and DTU have public logos; confirm use).
5. Whether the Round 1 one-page summary should also exist as a portrait A4 page.
6. Recording the 2-minute video (script provided).

---

## §11 HAND-OFF AND MEMORY

- Final message to the user (orchestrator): links (Figma URL from `deck\figma.md`), file paths (research PDF, model
  workbook, round1 files), the four moneyshots, gate results, open items. Written for the user, plain, no hooks.
- Memory (orchestrator, after G-S): create `project_eurogrip_unstop.md` in the memory folder with frontmatter
  (`type: project`): four-case research done, deck for Case 4 (4 slides), Figma key, palette, team (Harsh Kawatra and
  Anuj Gambhir, DTU, Team IdeaForge), the struck-insight ruling, the allow-listed case words; add one line to
  `MEMORY.md`: `- [Eurogrip x Unstop](project_eurogrip_unstop.md) — 4 cases researched, Case 4 deck (4 slides), Figma <key>`.
- No git commit unless the user asks; never add a co-author trailer.

---

## APPENDIX P: THE FOUR BRIEFS, VERBATIM, WITH IDS AND EDIT MARKS

Copied from the four PDFs in `eurogrip-case\raw\` (2 pages each). `[BLUE]` = text shown in blue in the PDF (late
revision or emphasis). `[STRUCK]` = text struck through in the PDF (deleted). Em dashes are the brief's own and are
kept here verbatim; the document renders them as commas when quoting (§0.3 rule 1).

### P.1 Case Study 1: Strengthening Brand Perception Across Consumer Segments — Commuter, Gig Worker & Premium

- C1-B01: EUROGRIP × UNSTOP COLLABORATION. Case Study 1.
- C1-B02: Strengthening Brand Perception Across Consumer Segments — Commuter, Gig Worker & Premium
- Background
- C1-B03: Eurogrip is a leading two-wheeler tyre brand in India, competing across a wide spread of riders — from daily commuters to premium motorcycle owners to the fast-growing gig economy segment (delivery and ride-hailing riders).
- C1-B04: Brand perception varies across these groups, shaped by different needs: commuters value reliability and everyday usage, gig workers value durability and uptime, premium riders value performance and status.
- C1-B05: Eurogrip already enjoys strong brand awareness.
- C1-B06: The opportunity ahead is to build on that foundation — strengthening top-of-mind recall and sharpening how that awareness converts into consideration and preference across each segment.
- The Challenge
- C1-B07: How should we build & strengthen Brand Eurogrip distinctly across Commuter, Gig Worker, and Premium segments — with messaging, channels, and activations tailored to each, while staying coherent as one brand?
- Segment Insights. Commuter:
- C1-B08: Eurogrip is a strong player here — seen as suitable for all types of applications (bikes) roads. Is known for having the widest range of tyres.
- Premium:
- C1-B09: This is the segment with the most room to grow. Premium riders weigh peer recommendation and performance heavily — a different mindset from commuters, who respond more to functionality.
- C1-B10: Building a stronger, more rounded impression — on performance, technology, and peer advocacy — is the key opportunity.
- Gig Worker:
- C1-B11: This segment is intentionally left fully open. Students are expected to research the gig-worker rider profile independently and build their own view of what this audience needs from a tyre brand.
- Constraints
- C1-B12: Budget: Assume 1.5%–2% of operating revenue as a realistic marketing budget benchmark.
- C1-B13: Channel mix: Must span Digital, Retail, and On-ground — no single-channel strategies.
- C1-B14: Brand coherence: Strategy must work as one coherent brand architecture, not as different / heterogenous approaches.
- Format & Timeline. Round 1 — Executive Summary + Video Submission
- C1-B15: 1-page executive summary of the strategic approach.
- C1-B16: 2-minute video pitch — precise and direction-focused, not a polished production. The purpose is to convey clarity of thinking, not creativity or presentation quality at this stage.
- Round 2 — Detailed Submission (1–2 weeks)
- C1-B17: A strategy deck of up to 15 slides (excluding annexures), covering: segment insights/personas, positioning per segment, channel-wise activation plan (Digital/Retail/On-ground), budget allocation, and sample creative/campaign ideas.
- Evaluation Criteria (apply to the Round 2 submission)
- C1-B18: Segment specificity: Does the strategy address Commuter, Gig Worker, and Premium distinctly — not one generic approach applied to all three?
- C1-B19: Insight-grounding: Is the approach grounded in the brand insights (Provided & researched)
- C1-B20: Channel realism: Is the Digital / Retail / On-ground mix realistic within the given budget guidance?
- C1-B21: Differentiation: Is there a clear, distinctive idea — not just "do social media + billboards"?
- C1-B22: Feasibility: Could Eurogrip actually execute this within a realistic timeframe and structure?

### P.2 Case Study 2: Winning the EV Two-Wheeler Opportunity Through Next-Gen Tyre Technology

- C2-B01: EUROGRIP × UNSTOP COLLABORATION. Case Study 2.
- C2-B02: Winning the EV Two-Wheeler Opportunity Through Next-Gen Tyre Technology
- Background
- C2-B03: Electric two-wheelers place fundamentally different demands on tyres than internal-combustion bikes.
- C2-B04: Instant motor torque changes acceleration-phase wear patterns;
- C2-B05: regenerative braking creates different heat and stress cycles;
- C2-B06: silent motors make tyre noise (NVH) far more noticeable to riders;
- C2-B07: and battery weight increases load requirements.
- C2-B08: Meanwhile, rolling resistance directly affects vehicle range — making the tyre a lever on the EV's core value proposition, not just a wear component.
- C2-B09: As EV adoption accelerates across two-wheeler categories, there is a clear opportunity for a tyre brand to lead with technology purpose-built for this shift, rather than adapting existing ICE-era tyre designs.
- The Challenge
- C2-B10: How should Eurogrip design a next-generation tyre concept purpose-built for EV two-wheelers — addressing compound composition, tread design, and load rating — that meets these engineering demands while remaining manufacturable and commercially viable at scale?
- Technical Areas to Address
- C2-B11: [BLUE: "Tyre construct:"] balancing low rolling resistance (for range) against grip and durability under instant-torque acceleration.
- C2-B12: Tread pattern: optimising for reduced road noise (NVH) and even wear under regenerative-braking load cycles.
- C2-B13: [BLUE] Optimized performance on vital needs like grip, high speed stability, damage resistance, durability.
- C2-B14: Load rating: accommodating higher kerb weight from battery packs without compromising handling.
- C2-B15: [STRUCK] Thermal management: addressing heat build-up from frequent regenerative-braking cycles.
- Constraints
- C2-B16: Global viability: Must be a globally viable product, meeting internationally accepted tyre compliance and testing standards — not India-only — since Eurogrip sells across multiple markets.
- C2-B17: Cost realism: Target cost-per-tyre must stay within a realistic commercial band for the mass-market EV segment, not a premium/niche positioning.
- C2-B18: Manufacturability: Concept must be manufacturable on largely existing tyre-plant processes, not requiring a wholly new production line.
- Format & Timeline. Round 1 — Executive Summary + Video Submission
- C2-B19: 1-page executive summary of the technical concept and direction.
- C2-B20: 2-minute video pitch — precise and direction-focused, not a polished production. The purpose is to convey clarity of thinking, not creativity or presentation quality at this stage.
- Round 2 — Detailed Submission (1–2 weeks)
- C2-B21: A technical deck of up to 15 slides (excluding annexures), covering: the engineering concept, compound and tread rationale, compliance approach, and cost/manufacturability feasibility.
- Evaluation Criteria
- C2-B22: Technical soundness: Is the engineering approach sound and well-reasoned — grounded in actual material science and tyre-design principles?
- C2-B23: EV-specific understanding: Does the concept demonstrate genuine understanding of how EV two-wheeler demands differ from ICE (torque, regen braking, NVH, load)?
- C2-B24: Innovation: Is there a clear point of differentiation from existing tyre technology, not just a minor tweak to current designs?
- C2-B25: Manufacturability & cost realism: Could this concept realistically be produced at the target cost, using largely existing processes?
- C2-B26: Clarity of communication: Is the technical thesis communicated clearly and precisely, especially in the Round 1 video?

Note for writer E: the innovation criterion `[C2-B24]` warns against "a minor tweak to current designs". The
EV-ready variant must therefore show a clear point of difference (the combination of a dual-layer silica cap, a
pitch-sequenced tread designed for a silent drivetrain and a higher load index in the same size, specified and
validated as one EV-ready standard), while the constraints `[C2-B17]` `[C2-B18]` keep it on existing lines. State this
tension and how the concept resolves it.

### P.3 Case Study 3: Accelerating Domestic Growth in the Off-Highway Tyre (OHT) Tractor Business

- C3-B01: EUROGRIP × UNSTOP COLLABORATION. Case Study 3.
- C3-B02: Accelerating Domestic Growth in the Off-Highway Tyre (OHT) Tractor Business
- Background
- C3-B03: Eurogrip's off-highway tyre (OHT) business serves a very different buyer than the two-wheeler business — farmers, fleet operators, and agricultural equipment dealers, with purchase decisions driven by durability, total cost of ownership, and trust built through dealer relationships rather than brand advertising.
- C3-B04: India's tractor tyre market is large and growing, but highly fragmented, with strong regional dealer loyalties and price sensitivity that varies sharply by farm size and geography.
- C3-B05: This makes it a category where the right go-to-market and channel strategy matters as much as the product itself.
- The Challenge
- C3-B06: How should Eurogrip accelerate its domestic market share in the tractor tyre business — identifying the right customer segments, channel strategy, and value proposition to win share from entrenched competitors in a relationship-driven, low-brand-salience category?
- What Students Will Need to Research
- C3-B07: [BLUE] The competitive landscape in Indian tractor/OHTs — key players, market shares, and how they position themselves. Define the current standing of Brand TVS EUROGRIP.
- C3-B08: [BLUE] Farmer and fleet-operator buying behaviour — how purchase decisions are actually made, and who influences them (dealers, mechanics, peers).
- C3-B09: Regional variation — tractor tyre needs likely differ across cropping patterns, terrain, and farm sizes across India.
- Constraints
- C3-B10: Budget: Assume 1.5%–2% of the relevant business-unit revenue as a realistic marketing/GTM budget benchmark.
- C3-B11: Distribution model: Strategy must work within a dealer-led distribution model — this is not a direct-to-consumer or heavy-digital-advertising category.
- C3-B12: Segment coverage: Must address at least two distinct customer segments (for example, smallholder farmers vs. larger fleet/commercial operators).
- Format & Timeline. Round 1 — Executive Summary + Video Submission
- C3-B13: 1-page executive summary of the strategic approach.
- C3-B14: 2-minute video pitch — precise and direction-focused, not a polished production. The purpose is to convey clarity of thinking, not creativity or presentation quality at this stage.
- Round 2 — Detailed Submission (1–2 weeks)
- C3-B15: A strategy deck of up to 15 slides (excluding annexures), covering: segment strategy, channel/dealer approach, value proposition, and budget allocation.
- Evaluation Criteria
- C3-B16: Segment specificity: Does the strategy address distinct customer segments — not one generic farmer persona?
- C3-B17: Channel realism: Is the dealer-channel strategy realistic for how this category actually buys and sells?
- C3-B18: Insight-grounding: Does the approach show genuine insight into what drives OHT tyre purchase decisions?
- C3-B19: Differentiation: Is there a clear point of difference from how competitors currently operate in this category?
- C3-B20: Feasibility: Could this realistically be executed within the given budget and distribution constraints?

### P.4 Case Study 4: Building a Scalable & Cost-Effective Influencer Advocacy Ecosystem — Mechanics & Puncture Shops | Domestic Two-Wheeler Market

- C4-B01: EUROGRIP × UNSTOP COLLABORATION. Case Study 4.
- C4-B02: Building a Scalable & Cost-Effective Influencer Advocacy Ecosystem — Mechanics & Puncture Shops | Domestic Two-Wheeler Market
- Background
- C4-B03: Mechanics and puncture shops are one of the [BLUE: "most frequented"] touchpoints in a two-wheeler rider's ownership journey —
- C4-B04: [BLUE] the mechanic most often becoming the person recommending which tyre to buy at the moment of replacement.
- C4-B05: [BLUE] This makes them a powerful but informal advocacy channel: highly influential, but typically unstructured, inconsistent, and hard to place on the same plans as their peers.
- C4-B06: [BLUE] Eurogrip's [STRUCK: "own"] brand-track research among mechanics points to a real opportunity [STRUCK: "here"].
- C4-B07: [BLUE] Brand awareness is lukewarm, mechanic preferences / recommendations are not much in favour of Eurogrip.
- C4-B08: [BLUE] Building a more structured, sustainable advocacy ecosystem with this touchpoint is a genuine opportunity to convert an already-trusted channel into a lasting driver of brand preference.
- The Challenge
- C4-B09: How should Eurogrip build a scalable, cost-effective advocacy ecosystem with mechanics and puncture shops across India —
- C4-B10: [BLUE] one that drives genuine, lasting brand recommendation by this touchpoint without relying on high-cost, one-off incentives that are hard to sustain or track?
- Insights from Eurogrip's Mechanic Brand-Track Study
- C4-B11: [BLUE] Awareness among mechanics is average / lukewarm, but Eurogrip's tyre stocking lags well behind competing brands — the opportunity lies in converting awareness into stocking and recommendation.
- C4-B12: [STRUCK] Mechanic preferences for brand support have shifted: functional support — tools and equipment to change tyres — has overtaken cash and pricing incentives as the top-ranked way mechanics want to be supported by a brand.
- C4-B13: Preference for brand-visibility items (branded merchandise, display boards, uniforms) is rising quickly — mechanics increasingly value association and status, not just utility or money.
- C4-B14: A meaningful share of brand advocacy already comes from mechanics who don't even stock Eurogrip tyres — showing that influence and stocking are not the same thing, and advocacy can be built independent of inventory commitment.
- C4-B15: What Students Will Need to Research
- C4-B16: The approximate scale of the mechanic/puncture-shop universe in India (numbers, geographic spread, degree of fragmentation).
- C4-B17: Realistic cost benchmarks for tools/equipment and branded merchandise programs to run at scale.
- C4-B18: [BLUE] How similar advocacy or incentive programs are structured in adjacent categories (for example, auto parts, lubricants, batteries). Or any benchmark programs by competing brands.
- [BLUE heading] Challenges
- C4-B19: Budget: Assume 1.5%–2% of the relevant business-unit revenue as a realistic marketing/GTM budget benchmark.
- C4-B20: Scalability: Solution must be scalable nationally, not a boutique program limited to a few cities.
- C4-B21: Sustainability: Must include a way to sustain advocacy over time, not just a one-time sign-up incentive.
- C4-B22: Measurability: Must include some mechanism to track or estimate program effectiveness, even if not a perfect measurement system.
- Format & Timeline. Round 1 — Executive Summary + Video Submission
- C4-B23: 1-page executive summary of the strategic approach.
- C4-B24: 2-minute video pitch — precise and direction-focused, not a polished production. The purpose is to convey clarity of thinking, not creativity or presentation quality at this stage.
- Round 2 — Detailed Submission (1–2 weeks)
- C4-B25: A strategy deck of up to 15 slides (excluding annexures), covering: the program structure, incentive design, scale/rollout plan, and budget allocation.
- Evaluation Criteria
- C4-B26: Incentive realism: Would mechanics and puncture-shop owners actually engage with this structure?
- C4-B27: Insight-grounding: Does the approach build on the actual mechanic preference shift — toward tools/equipment and brand visibility, away from pure cash — rather than defaulting to cash incentives?
- C4-B28: Scalability: Could this genuinely work at a national level within the given budget?
- C4-B29: Sustainability: Does advocacy persist beyond the first incentive, or does it fade once the initial hook wears off?
- C4-B30: Measurability: Is the tracking/measurement approach feasible, even if imperfect?

---

## APPENDIX Q: EMBEDDED CODE (copy exactly; adapt only where a comment says `ADAPT`)

### Q.1 `EG\model\eurogrip_model.py`

Inputs it expects beyond §5.2: `model\inputs\rulings.json` = `{"app_name": "Bandhan app", "pilot_states": "Tamil
Nadu and Uttar Pradesh"}` (values from the R-A app ruling and the R-C pilot-state rule). `universe_methods.csv` has an
extra column `kind` = `estimate` or `floor` (exactly two of each: enterprise survey and parc method are estimates;
rival-programme enrolment and Eurogrip partner count are floors; `method` labels ≤ 17 characters:
`Enterprise survey`, `Two-wheeler parc`, `Rival programmes`, `Eurogrip partners`). `benchmarks.csv` has the columns
`short` (≤ 16 characters) and `tracks` (Yes, Part, No, n/a). `materials_prices.csv` `material` values are exactly:
`natural rubber`, `SBR`, `solution SBR`, `carbon black`, `silica`, `silane`, `process oil`, `chemicals`, `other`.
Case 3 adds `A3-24` (tyre sets sold under assurance per year), `A3-25` (average payout per claim as a share of set
price), `A3-26` (GST on tractor tyres, %), `A3-27` (channel margin on tractor tyres, %) to the register.

```python
# ===== EUROGRIP MODEL v1 =====
"""Eurogrip four-case model: the single source of every computed number in the research document and the deck.
  PY eurogrip-case/model/eurogrip_model.py    writes model_outputs.json and model_tables.md, prints MODEL PASS or MODEL FAIL
Inputs: model/inputs/assumptions.csv, risks.csv, rulings.json; research/data/*.csv (PLAN.md section 5)."""
import csv, io, json, hashlib, math, pathlib, statistics, datetime, sys

M = pathlib.Path(__file__).resolve().parent
EG = M.parent
D = EG / "research" / "data"
SC = ("bear", "base", "bull")
LINES = ["Tools, refills", "Visibility kits", "Training, meets", "Field teams", "Tech and audits"]
Z = 1.959964 + 0.841621          # two-sided 95% confidence, 80% power
INPUTS = [M / "inputs" / "assumptions.csv", M / "inputs" / "risks.csv", M / "inputs" / "rulings.json",
          D / "universe_methods.csv", D / "benchmarks.csv", D / "materials_prices.csv"]


def rows(p):
    with io.open(p, encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def load_A():
    A = {}
    for r in rows(M / "inputs" / "assumptions.csv"):
        k = r["id"].strip()
        assert (r["basis"] or "").strip(), "empty basis " + k
        assert "PLACEHOLDER" not in r["basis"].upper(), "unsourced assumption " + k
        A[k] = {s: float(r[s]) for s in SC}
        A[k].update(unit=r["unit"], label=r["label"], case=r["case"])
    return A


def inr(x):
    n = abs(round(x)); s = str(n)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2:
            parts.append(head[-2:]); head = head[:-2]
        if head:
            parts.append(head)
        s = ",".join(reversed(parts)) + "," + tail
    return ("−" if round(x) < 0 else "") + s


def f1(x): return f"{x:.1f}"
def f2(x): return f"{x:.2f}"


# ---------------- Case 4: mechanic advocacy ----------------
def universe():
    rs = rows(D / "universe_methods.csv")
    est = [r for r in rs if r["kind"].strip() == "estimate"]
    flo = [r for r in rs if r["kind"].strip() == "floor"]
    assert len(est) == 2 and len(flo) == 2, "universe_methods.csv needs exactly 2 estimates and 2 floors"
    floor = max(float(r["base_lakh"]) for r in flo)
    base = max(statistics.mean(float(r["base_lakh"]) for r in est), floor)
    return {"methods": [{"method": r["method"].strip(), "kind": r["kind"].strip(), "low": float(r["low_lakh"]),
                         "base": float(r["base_lakh"]), "high": float(r["high_lakh"])} for r in rs],
            "bear": max(min(float(r["low_lakh"]) for r in est), floor), "base": base,
            "bull": max(float(r["high_lakh"]) for r in est), "floor": floor}


def c4_core(A, s, U, over=None):
    over = over or {}
    def a(k): return over.get(k, A[k][s])
    E = a("A01") * 1e7 * a("A02") / 100.0
    mix = [a("A07a"), a("A07b"), a("A07c")]
    tools = [a("A08"), a("A09"), a("A10")]
    vis = [a("A08v"), a("A09v"), a("A10v")]
    refill = [a("A12a"), a("A12b"), a("A12c")]
    refs = [a("A15a"), a("A15"), a("A16")]
    am = a("A11")
    c_tools = sum(m * (t / am + 4 * r + n * a("A20")) for m, t, r, n in zip(mix, tools, refill, refs))
    c_vis = sum(m * v / am for m, v in zip(mix, vis))
    c_train = (mix[1] + mix[2]) * (a("A13") * a("A13s") + a("A33"))
    c_field = a("A17") * (1.0 / am + a("A17c"))
    c_tech = a("A19m")
    cm = c_tools + c_vis + c_train + c_field + c_tech
    d = a("A24") / 100.0
    p = a("A25") + d / 2
    n_arm = math.ceil(2 * Z ** 2 * p * (1 - p) / d ** 2)
    audits = 2 * n_arm * a("A31n")
    audit_cost = audits * a("A31")
    fixed_field = a("A18") * 1e5
    fixed_tech = (a("A19") + a("A22") / am + a("A32")) * 1e5 + audit_cost
    F = fixed_field + fixed_tech
    afford = max(0.0, (E - F) / cm)
    cap = a("A06") * U[s] * 1e5
    members = min(afford, cap)
    spend = F + members * cm
    lines = [members * c_tools, members * c_vis, members * c_train,
             members * c_field + fixed_field, members * c_tech + fixed_tech]
    net = a("A27") / (1 + a("A28") / 100.0) * (1 - a("A29") / 100.0)
    cpt = net * a("A30") / 100.0
    be = spend / members / cpt if members > 0 else float("inf")
    return dict(E=E, F=F, cm=cm, members=members, afford=afford, cap=cap, spend=spend, lines=lines, cpt=cpt,
                be=be, net=net, n_arm=n_arm, audits=audits, audit_cost=audit_cost,
                parts=dict(tools=c_tools, visibility=c_vis, training=c_train, field=c_field, tech=c_tech))


def cash(A, s):
    def a(k): return A[k][s]
    net = a("A27") / (1 + a("A28") / 100.0) * (1 - a("A29") / 100.0)
    units = a("A01") * 1e7 / net
    base_units = units * a("A35") / 100.0
    rewarded = base_units * (1 + a("A36") / 100.0)
    return {"cost_cr": rewarded * a("A34") / 1e7, "deadweight_pct": 100.0 / (1 + a("A36") / 100.0),
            "rewarded_units_lakh": rewarded / 1e5}


TOR = ["A27", "A30", "A29", "A20", "A10", "A09", "A08", "A17", "A18", "A06", "A33", "A13"]


def tornado(A, U):
    out = []
    for k in TOR:
        lo = c4_core(A, "base", U, {k: A[k]["bear"]})["be"]
        hi = c4_core(A, "base", U, {k: A[k]["bull"]})["be"]
        out.append({"id": k, "label": A[k]["label"], "be_low": min(lo, hi), "be_high": max(lo, hi), "swing": abs(hi - lo)})
    return sorted(out, key=lambda x: -x["swing"])[:6]


def rollout(A, r):
    ramp = [A[k]["base"] for k in ("A37a", "A37b", "A37c", "A37d", "A37e", "A37f", "A37g", "A37h")]
    return [{"q": "Q%d" % (i + 1), "members_lakh": r["members"] * f / 1e5,
             "spend_cr": (r["F"] / 4 + r["members"] * f * r["cm"] / 4) / 1e7} for i, f in enumerate(ramp)]


def pick_bench():
    K = ("reward_cash", "reward_tools", "reward_visibility", "reward_skill", "credits_without_purchase", "tracks")
    rs = [r for r in rows(D / "benchmarks.csv") if (r.get("short") or "").strip()]
    for r in rs:
        for k in K:
            assert r[k].strip() in ("Yes", "Part", "No", "n/a"), (r["programme"], k, r[k])
    rs.sort(key=lambda r: -sum(r[k].strip() != "n/a" for k in K))
    pick, cats = [], set()
    for r in rs:
        if r["category"] not in cats and len(pick) < 6:
            pick.append(r); cats.add(r["category"])
    for r in rs:
        if r not in pick and len(pick) < 6:
            pick.append(r)
    out = [{"short": r["short"].strip(), "category": r["category"].strip(), "cash": r["reward_cash"].strip(),
            "tools": r["reward_tools"].strip(), "visibility": r["reward_visibility"].strip(),
            "skill": r["reward_skill"].strip(), "advice": r["credits_without_purchase"].strip(),
            "tracks": r["tracks"].strip()} for r in pick]
    out.append({"short": "Our design", "category": "tyres", "cash": "No", "tools": "Yes", "visibility": "Yes",
                "skill": "Yes", "advice": "Yes", "tracks": "Yes"})
    return out


def load_risks():
    out = [{"id": r["id"].strip(), "risk_short": r["risk_short"].strip(), "p": int(r["p"]), "i": int(r["i"]),
            "control_short": r["control_short"].strip(), "risk_long": r["risk_long"].strip(),
            "control_long": r["control_long"].strip()} for r in rows(M / "inputs" / "risks.csv")]
    return sorted(out, key=lambda r: -(r["p"] * r["i"]))


# ---------------- Case 1: brand across segments ----------------
SEG1 = [("Commuter", "A1-03", ("A1-07", "A1-08", "A1-09")), ("Gig", "A1-04", ("A1-10", "A1-11", "A1-12")),
        ("Premium", "A1-05", ("A1-13", "A1-14", "A1-15")), ("Brand platform", "A1-06", ("A1-16", "A1-17", "A1-18"))]


def c1(A, s):
    def a(k): return A[k][s]
    B = a("A1-01") * 1e7 * a("A1-02") / 100.0
    mat = []
    for name, sk, ch in SEG1:
        v = B * a(sk)
        mat.append({"segment": name, "digital_cr": v * a(ch[0]) / 1e7, "retail_cr": v * a(ch[1]) / 1e7,
                    "onground_cr": v * a(ch[2]) / 1e7})
    tot = sum(m["digital_cr"] + m["retail_cr"] + m["onground_cr"] for m in mat)
    dig = sum(m["digital_cr"] for m in mat) * 1e7
    gig_on = [m for m in mat if m["segment"] == "Gig"][0]["onground_cr"] * 1e7
    other_on = sum(m["onground_cr"] for m in mat if m["segment"] != "Gig") * 1e7
    events = other_on / a("A1-21")
    reach = {"impressions_crore": dig / a("A1-19") * 1000 / 1e7,
             "unique_reach_lakh": dig / a("A1-19") * 1000 / a("A1-24") / 1e5,
             "outlets_branded": sum(m["retail_cr"] for m in mat) * 1e7 / a("A1-20"),
             "events": events, "event_reach_lakh": events * a("A1-22") / 1e5,
             "gig_riders_enrolled_lakh": gig_on / a("A1-23") / 1e5}
    return {"budget_cr": B / 1e7, "matrix": mat, "total_cr": tot,
            "chosen_share_pct": sum(m["retail_cr"] + m["onground_cr"] for m in mat) / tot * 100, "reach": reach}


# ---------------- Case 2: EV-ready tyre ----------------
ICE = {"natural rubber": "A2-10", "SBR": "A2-11", "carbon black": "A2-12", "process oil": "A2-13",
       "chemicals": "A2-14", "other": "A2-15"}
EV = {"natural rubber": "A2-16", "solution SBR": "A2-17", "silica": "A2-18", "silane": "A2-19",
      "carbon black": "A2-20", "process oil": "A2-21", "chemicals": "A2-22"}


def c2(A, s):
    def a(k): return A[k][s]
    P = {r["material"].strip(): float(r["price_inr_per_kg"]) for r in rows(D / "materials_prices.csv")}
    ice_kg = sum(a(k) * P[m] for m, k in ICE.items())
    ev_kg = sum(a(k) * P[m] for m, k in EV.items()) + a("A2-07")
    cap_kg = a("A2-02") * a("A2-04") * a("A2-05")
    delta = cap_kg * (ev_kg - ice_kg) + a("A2-08")
    gain = 1.0 / (1 - a("A2-23") / 100.0 * a("A2-24")) - 1
    return {"compound_ice_per_kg": ice_kg, "compound_ev_per_kg": ev_kg, "cap_kg": cap_kg, "delta_inr": delta,
            "cost_ice": a("A2-06"), "cost_ev": a("A2-06") + delta, "delta_pct": delta / a("A2-06") * 100,
            "range_gain_pct": gain * 100, "km_gain": a("A2-25") * gain,
            "ice_sum": sum(a(k) for k in ICE.values()), "ev_sum": sum(a(k) for k in EV.values())}


# ---------------- Case 3: tractor tyres ----------------
def c3(A, s):
    def a(k): return A[k][s]
    B = a("A3-01") * 1e7 * a("A3-02") / 100.0
    parc = a("A3-03") * 1e5
    seg = {"Commercial": (a("A3-04"), a("A3-07")), "Smallholder": (a("A3-05"), a("A3-08")),
           "Hiring centre": (a("A3-06"), a("A3-09"))}
    sets = {k: parc * sh / yrs for k, (sh, yrs) in seg.items()}
    set_price = 2 * a("A3-10")
    lines = {"Dealer programme": a("A3-16") * a("A3-17"), "Village mechanics": a("A3-18") * a("A3-19"),
             "Field days": a("A3-20") * a("A3-21"), "Harvest credit": a("A3-22") * a("A3-23"),
             "Tyre-life assurance": a("A3-24") * a("A3-14") / 100.0 * a("A3-25") * set_price}
    used = sum(lines.values())
    lines["Measurement and contingency"] = max(0.0, B - used)
    contrib = set_price / (1 + a("A3-26") / 100.0) * (1 - a("A3-27") / 100.0) * a("A3-15") / 100.0
    payback = (sum(lines.values())) / contrib
    return {"budget_cr": B / 1e7, "sets": sets, "market_sets": sum(sets.values()),
            "lines": [{"line": k, "cr": v / 1e7} for k, v in lines.items()], "used_cr": used / 1e7,
            "assurance_cost_cr": lines["Tyre-life assurance"] / 1e7,
            "tco_per_hour": set_price / a("A3-11"), "contrib_per_set": contrib, "payback_sets": payback,
            "share_points": payback / sum(sets.values()) * 100}


# ---------------- tables ----------------
def T(title, heads, rs, src):
    out = ["## " + title, "", "| " + " | ".join(heads) + " |", "|" + "|".join(["---"] * len(heads)) + "|"]
    out += ["| " + " | ".join(str(c) for c in r) + " |" for r in rs]
    return "\n".join(out + ["", "*Source: " + src + "*", ""])


def main():
    A = load_A(); U = universe()
    rul = json.loads(io.open(M / "inputs" / "rulings.json", encoding="utf-8").read())
    R = {s: c4_core(A, s, U) for s in SC}
    tor = tornado(A, U)
    ro = rollout(A, R["base"])
    y1 = sum(q["spend_cr"] for q in ro[:4]); y2 = sum(q["spend_cr"] for q in ro[4:])
    shares = [A["A05a"]["base"], A["A05b"]["base"], A["A05c"]["base"]]
    segs = [{"key": k, "share": sh, "lakh": sh * U["base"]} for k, sh in zip(("S-A", "S-B", "S-C"), shares)]
    bench = pick_bench(); risks = load_risks()
    lines_sc = {s: [{"line": n, "cr": v / 1e7, "pct": v / R[s]["spend"] * 100} for n, v in zip(LINES, R[s]["lines"])]
                for s in SC}
    c4 = dict(universe=U, segments=segs,
              bu_rev_cr={s: A["A01"][s] for s in SC}, envelope_cr={s: R[s]["E"] / 1e7 for s in SC},
              spend_cr={s: R[s]["spend"] / 1e7 for s in SC},
              spend_share_pct={s: R[s]["spend"] / (A["A01"][s] * 1e7) * 100 for s in SC},
              headroom_to_2pct_cr={s: A["A01"][s] * 0.02 - R[s]["spend"] / 1e7 for s in SC},
              members_lakh={s: R[s]["members"] / 1e5 for s in SC}, cost_per_member={s: R[s]["cm"] for s in SC},
              affordable_lakh={s: R[s]["afford"] / 1e5 for s in SC}, cap_lakh={s: R[s]["cap"] / 1e5 for s in SC},
              lines=lines_sc["base"], lines_sc=lines_sc, cpt={s: R[s]["cpt"] for s in SC},
              be={s: R[s]["be"] for s in SC}, weeks={s: 52 / R[s]["be"] for s in SC},
              parts={s: R[s]["parts"] for s in SC}, cash_scheme=cash(A, "base"),
              audit={"n_per_arm": R["base"]["n_arm"], "audits_per_year": R["base"]["audits"],
                     "cost_lakh": R["base"]["audit_cost"] / 1e5},
              rollout=ro, year1_spend_cr=y1, year2_spend_cr=y2, tornado=tor,
              tiers={"t2_entry": int(A["A14"]["base"]), "t2_refs": int(A["A15"]["base"]), "t3_refs": int(A["A16"]["base"])},
              app_name=rul["app_name"], pilot_states=rul["pilot_states"],
              validation={"interviews": A["A38"]["base"], "cities": A["A39"]["base"]}, bench=bench, risks=risks)
    C1 = {s: c1(A, s) for s in SC}; C2 = {s: c2(A, s) for s in SC}; C3 = {s: c3(A, s) for s in SC}
    o1 = {"budget_cr": {s: C1[s]["budget_cr"] for s in SC}, "matrix": C1["base"]["matrix"],
          "chosen_share_pct": C1["base"]["chosen_share_pct"], "reach": C1["base"]["reach"]}
    o2 = {k: C2["base"][k] for k in C2["base"]}
    o2.update(range_gain_pct={s: C2[s]["range_gain_pct"] for s in SC}, km_gain={s: C2[s]["km_gain"] for s in SC},
              delta_pct_sc={s: C2[s]["delta_pct"] for s in SC})
    o3 = {k: C3["base"][k] for k in C3["base"]}
    o3.update(budget_cr={s: C3[s]["budget_cr"] for s in SC}, share_points_sc={s: C3[s]["share_points"] for s in SC})
    checks = {
        "envelope_positive": all(R[s]["E"] > 0 for s in SC),
        "spend_within_envelope": all(R[s]["spend"] <= R[s]["E"] * 1.0001 for s in SC),
        "members_positive": all(R[s]["members"] > 0 for s in SC),
        "lines_sum": all(abs(sum(R[s]["lines"]) - R[s]["spend"]) < 1 for s in SC),
        "be_order": R["bear"]["be"] >= R["base"]["be"] >= R["bull"]["be"],
        "be_sane": 0 < R["base"]["be"] < 100,
        "year1_within": y1 <= R["base"]["E"] / 1e7 * 1.0001,
        "year2_within": y2 <= R["base"]["E"] / 1e7 * 1.0001,
        "segments_sum": abs(sum(shares) - 1) < 0.01,
        "mix_sum": abs(A["A07a"]["base"] + A["A07b"]["base"] + A["A07c"]["base"] - 1) < 0.01,
        "risk_strings": all(len(r["risk_short"] + ": " + r["control_short"]) <= 40 for r in risks[:5]),
        "risk_count": 8 <= len(risks) <= 12,
        "bench_rows": 5 <= len(bench) <= 7 and all(len(b["short"]) <= 16 for b in bench),
        "c1_segment_shares": abs(sum(A[k]["base"] for _, k, _ in SEG1) - 1) < 0.01,
        "c1_channel_shares": all(abs(sum(A[c]["base"] for c in ch) - 1) < 0.01 for _, _, ch in SEG1),
        "c2_recipes_sum": abs(C2["base"]["ice_sum"] - 1) < 0.01 and abs(C2["base"]["ev_sum"] - 1) < 0.01,
        "c3_within_budget": all(C3[s]["used_cr"] <= C3[s]["budget_cr"] * 1.0001 for s in SC),
    }
    flags = {"c2_delta_within_target_base": C2["base"]["delta_pct"] <= A["A2-03"]["base"],
             "c4_be_below_kill_base": R["base"]["be"] <= A["A26"]["base"]}
    h = hashlib.sha1(b"".join(io.open(p, "rb").read() for p in INPUTS)).hexdigest()[:10]
    O = {"meta": {"hash": h, "run_at": datetime.datetime.now().isoformat(timespec="seconds"), "version": "eurogrip-model v1"},
         "checks": checks, "flags": flags, "A": A, "c4": c4, "c1": o1, "c2": o2, "c3": o3}
    io.open(M / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(O, ensure_ascii=False, indent=1))
    b = R["base"]; cs = c4["cash_scheme"]
    tabs = [
        T("T1. Case 4: four ways to count the mechanic and puncture-shop universe (lakh outlets)", ["Method", "Kind", "Low", "Base", "High"],
          [[m["method"], m["kind"], f1(m["low"]), f1(m["base"]), f1(m["high"])] for m in U["methods"]] + [["Model universe", "bear / base / bull", f1(U["bear"]), f1(U["base"]), f1(U["bull"])]],
          "research/data/universe_methods.csv; base = mean of the two estimates, floored at the larger programme count"),
        T("T2. Case 4: the three segments (base universe)", ["Segment", "Share", "Lakh outlets"],
          [[g["key"], f"{g['share'] * 100:.0f}%", f1(g["lakh"])] for g in segs], "A05a to A05c; T1"),
        T("T3. Case 4: cost per member per year (₹)", ["Component"] + list(SC),
          [[k] + [inr(R[s]["parts"][k]) for s in SC] for k in ("tools", "visibility", "training", "field", "tech")] + [["Total"] + [inr(R[s]["cm"]) for s in SC]],
          "A07 to A20, A33, A19m"),
        T("T4. Case 4: annual budget by line (₹ crore) and members", ["Line"] + list(SC),
          [[LINES[i]] + [f2(lines_sc[s][i]["cr"]) for s in SC] for i in range(5)] + [["Spend"] + [f2(R[s]["spend"] / 1e7) for s in SC], ["Envelope"] + [f2(R[s]["E"] / 1e7) for s in SC], ["Share of BU revenue"] + [f"{c4['spend_share_pct'][s]:.2f}%" for s in SC], ["Members (lakh)"] + [f2(R[s]["members"] / 1e5) for s in SC]],
          "A01, A02 and T3"),
        T("T5. Case 4: contribution per tyre and break-even", ["Item"] + list(SC),
          [["Net realisation per tyre (₹)"] + [inr(R[s]["net"]) for s in SC], ["Contribution per tyre (₹)"] + [inr(R[s]["cpt"]) for s in SC], ["Break-even extra tyres per member a year"] + [f1(R[s]["be"]) for s in SC], ["One tyre every (weeks)"] + [f1(52 / R[s]["be"]) for s in SC]],
          "A27 to A30; T4"),
        T("T6. Case 4: what moves break-even most (base case, one assumption at a time)", ["Assumption", "Label", "Break-even low", "Break-even high", "Swing"],
          [[t["id"], t["label"], f1(t["be_low"]), f1(t["be_high"]), f1(t["swing"])] for t in tor], "assumption register; model tornado"),
        T("T7. Case 4: rollout by quarter (base)", ["Quarter", "Members (lakh)", "Spend (₹ crore)"], [[q["q"], f2(q["members_lakh"]), f2(q["spend_cr"])] for q in ro] + [["Year 1", "", f2(y1)], ["Year 2", "", f2(y2)]], "A37a to A37h; T4"),
        T("T8. Case 4: mystery-rider audit design", ["Item", "Value"], [["Shops per arm per round", str(b["n_arm"])], ["Audits per year", str(b["audits"])], ["Audit cost per year (₹ lakh)", f2(b["audit_cost"] / 1e5)]], "A24, A25, A31, A31n; two-proportion formula"),
        T("T9. Case 4: the obvious cash-per-tyre scheme (base)", ["Item", "Value"], [["Tyres rewarded (lakh)", f1(cs["rewarded_units_lakh"])], ["Cost (₹ crore)", f2(cs["cost_cr"])], ["Share spent on tyres that would sell anyway", f"{cs['deadweight_pct']:.0f}%"]], "A27 to A29, A34 to A36"),
        T("T10. Case 4: benchmark programmes as scored", ["Programme", "Category", "Cash", "Tools", "Visibility", "Skill", "Credits advice", "Tracks"], [[x["short"], x["category"], x["cash"], x["tools"], x["visibility"], x["skill"], x["advice"], x["tracks"]] for x in bench], "research/data/benchmarks.csv"),
        T("T11. Case 4: tiers", ["Tier", "Entry", "Referrals a year"], [["Tier 1", "free", f1(A["A15a"]["base"])], ["Tier 2", "%d referrals in 6 months or the course" % A["A14"]["base"], f1(A["A15"]["base"])], ["Tier 3", "%d referrals a year or core-size stock" % A["A16"]["base"], f1(A["A16"]["base"])]], "A14 to A16"),
        T("T12. Case 4: risks and controls", ["ID", "Risk", "P", "I", "Control"], [[r["id"], r["risk_long"], r["p"], r["i"], r["control_long"]] for r in risks], "model/inputs/risks.csv"),
        T("T13. Case 1: budget by segment and channel (₹ crore, base)", ["Segment", "Digital", "Retail", "On-ground"], [[m["segment"], f2(m["digital_cr"]), f2(m["retail_cr"]), f2(m["onground_cr"])] for m in C1["base"]["matrix"]], "A1-01 to A1-18"),
        T("T14. Case 1: what the budget buys (base)", ["Item", "Value"], [[k, f1(v)] for k, v in C1["base"]["reach"].items()] + [["Share where the tyre is chosen (retail + on-ground)", f"{C1['base']['chosen_share_pct']:.0f}%"]], "A1-19 to A1-24"),
        T("T15. Case 1: budget by scenario (₹ crore)", ["Scenario", "Budget"], [[s, f2(C1[s]["budget_cr"])] for s in SC], "A1-01, A1-02"),
        T("T16. Case 2: compound cost (₹ per kg)", ["Item"] + list(SC), [["Petrol-scooter tread compound"] + [f1(C2[s]["compound_ice_per_kg"]) for s in SC], ["EV-ready cap compound incl. extra mixing"] + [f1(C2[s]["compound_ev_per_kg"]) for s in SC], ["Cap mass per tyre (kg)"] + [f2(C2[s]["cap_kg"]) for s in SC]], "materials_prices.csv; A2-02 to A2-22"),
        T("T17. Case 2: cost delta and range gain", ["Item"] + list(SC), [["Cost delta per tyre (₹)"] + [inr(C2[s]["delta_inr"]) for s in SC], ["Cost delta (%)"] + [f1(C2[s]["delta_pct"]) for s in SC], ["Range gain (%)"] + [f1(C2[s]["range_gain_pct"]) for s in SC], ["Range gain (km per charge)"] + [f1(C2[s]["km_gain"]) for s in SC]], "A2-06 to A2-08, A2-23 to A2-25"),
        T("T18. Case 3: rear-tyre sets replaced a year by segment (base)", ["Segment", "Sets a year (lakh)"], [[k, f2(v / 1e5)] for k, v in C3["base"]["sets"].items()], "A3-03 to A3-09"),
        T("T19. Case 3: budget lines (₹ crore, base)", ["Line", "₹ crore"], [[x["line"], f2(x["cr"])] for x in C3["base"]["lines"]], "A3-14 to A3-25"),
        T("T20. Case 3: cost per hour, payback and share points", ["Item"] + list(SC), [["Rear pair cost per hour, commercial (₹)"] + [f1(C3[s]["tco_per_hour"]) for s in SC], ["Contribution per set (₹)"] + [inr(C3[s]["contrib_per_set"]) for s in SC], ["Sets to pay back the budget"] + [inr(C3[s]["payback_sets"]) for s in SC], ["Share points that implies"] + [f2(C3[s]["share_points"]) for s in SC]], "A3-10 to A3-27"),
    ]
    io.open(M / "model_tables.md", "w", encoding="utf-8").write("# Model tables\n\nModel " + h + ", run " + O["meta"]["run_at"] + ".\n\n" + "\n".join(tabs))
    print(json.dumps({"hash": h, "be": {s: round(R[s]["be"], 2) for s in SC}, "members_lakh": {s: round(R[s]["members"] / 1e5, 2) for s in SC},
                      "spend_cr": {s: round(R[s]["spend"] / 1e7, 2) for s in SC}, "checks_failed": [k for k, v in checks.items() if not v], "flags": flags}, indent=1))
    ok = all(checks.values())
    print("MODEL PASS" if ok else "MODEL FAIL")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
```

### Q.2 `EG\deck\make_values.py`

```python
"""Build V for the Eurogrip Case 4 slides from model/model_outputs.json. gen.py calls build(O); nothing here writes a file.
Every string is pre-formatted (rupee sign, Indian grouping). SRC1 to SRC4 and CRESTS are finalised in step D0."""
SC = ("bear", "base", "bull")
SRC1 = "Source: Eurogrip x Unstop Case Study 4 brief | eurogriptyres.com, Oct 2026 | Team IdeaForge research and model "   # ADAPT in D0
SRC2 = "Source: Case Study 4 brief | TVS Srichakra annual report FY26 | MoSPI ASUSE | VAHAN | programme sources: research section 8 | tool prices: IndiaMART, Amazon.in, Oct 2026 | model "   # ADAPT in D0
SRC3 = "Source: research sections 6, 8, 11 and 14; Appendices B to D | research/data/benchmarks.csv | model "   # ADAPT in D0
SRC4 = "Source: Team IdeaForge, Eurogrip x Unstop Case Study 4 submission | model "
CRESTS = [["Castrol", "lubricants"], ["Mobil", "lubricants"], ["Exide", "batteries"], ["Asian Paints", "paints"], ["Pidilite", "adhesives"]]   # ADAPT in D0 (must be programmes in benchmarks.csv)
SEGL = {"S-A": "stock and fit tyres", "S-B": "service bikes, stock none", "S-C": "fix punctures, refer"}
SEGS = {"S-A": "Stocking", "S-B": "Service", "S-C": "Puncture"}


def inr(x):
    n = abs(round(x)); s = str(n)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2:
            parts.append(head[-2:]); head = head[:-2]
        if head:
            parts.append(head)
        s = ",".join(reversed(parts)) + "," + tail
    return ("\u2212" if round(x) < 0 else "") + s


def f1(x): return f"{x:.1f}"
def pc(x): return f"{round(x)}%"


def build(O):
    assert all(O["checks"].values()), [k for k, v in O["checks"].items() if not v]
    A = O["A"]; c = O["c4"]; h = O["meta"]["hash"]; b = "base"
    be3 = [f1(c["be"][s]) for s in SC]; be = be3[1]
    weeks = str(round(52 / c["be"][b]))
    members = f1(c["members_lakh"][b]); spend = f1(c["spend_cr"][b]); budget = "\u20b9" + spend + " crore"
    share = f"{c['spend_share_pct'][b]:.2f}%"
    univ = f1(c["universe"]["base"]); univ3 = [f1(c["universe"][s]) for s in SC]
    app = c["app_name"]
    seg = [{"label": SEGL[g["key"]], "lakh": f1(g["lakh"]), "v": g["share"],
            "t": pc(g["share"] * 100) if g["share"] >= 0.15 else ""} for g in c["segments"]]
    tiers = [["Tier 1", "repair kit and board", "any referral"],
             ["Tier 2", "gauge, apron, course", "%d referrals" % c["tiers"]["t2_refs"]],
             ["Tier 3", "inflator and listing", "%d referrals" % c["tiers"]["t3_refs"]]]
    alloc = [{"label": l["line"], "v": l["cr"], "pct": pc(l["pct"]), "cr": "\u20b9" + f1(l["cr"])} for l in c["lines"]]
    gantt = [["2 states", 0, 1, ""], ["8 states", 2, 3, ""], ["National", 4, 7, "all states"]]
    kpis = [["Activity", "Monthly active", "G1 \u2265 " + pc(A["A23"]["base"] * 100)],
            ["Advocacy", "Mystery audit", "G1 +%d points" % round(A["A24"]["base"])],
            ["Sales", "Code-linked tyres", "G2 \u2265 " + be + " each"],
            ["Brand", "Brand re-survey", "G3 stocking up"]]
    meths = c["universe"]["methods"]
    tri = [{"label": m["method"], "v": m["base"], "text": f1(m["base"]) + " lakh", "est": m["kind"] == "estimate"} for m in meths]
    segrows = [[SEGS[g["key"]], f1(g["lakh"]), pc(g["share"] * 100)] for g in c["segments"]] + [["Total", univ, "100%"]]
    scen = [["BU revenue, \u20b9 cr"] + [inr(c["bu_rev_cr"][s]) for s in SC],
            ["Budget share"] + [f"{A['A02'][s]:.2f}%" for s in SC],
            ["Spend, \u20b9 cr"] + [f1(c["spend_cr"][s]) for s in SC],
            ["Members, lakh"] + [f1(c["members_lakh"][s]) for s in SC],
            ["Cost per member"] + ["\u20b9" + inr(c["cost_per_member"][s]) for s in SC],
            ["Break-even tyres"] + be3]
    bench = {"rows": [r["short"] for r in c["bench"]],
             "cells": [[r[k] for k in ("cash", "tools", "visibility", "skill", "advice", "tracks")] for r in c["bench"]]}
    rk = c["risks"][:5]
    cells = [["" for _ in range(3)] for _ in range(3)]
    for n, r in enumerate(rk, 1):
        i, j = 3 - int(r["p"]), int(r["i"]) - 1          # row 0 = high probability, column 2 = high impact
        cells[i][j] = (cells[i][j] + ", " if cells[i][j] else "") + str(n)
    risks = [r["risk_short"] + ": " + r["control_short"] for r in rk]
    V = dict(hash=h,
             team=dict(name="TEAM IDEAFORGE", rows=[["Harsh Kawatra", "Delhi Technological University", "Team Leader"],
                                                     ["Anuj Gambhir", "Delhi Technological University", "Member"]]),
             h2=f"Paying mechanics in tools and status, not cash, reaches {members} lakh shops for {budget} a year and breaks even at {be} extra tyres each",
             h3=f"Appendix: {univ} lakh shops counted four ways, break-even between {be3[2]} and {be3[0]} tyres a shop, and {len(bench['rows']) - 1} programmes compared",
             src1=SRC1 + h, src2=SRC2 + h, src3=SRC3 + h, src4=SRC4 + h, crests=CRESTS,
             seg=seg, univ=univ, univ3=univ3, tiers=tiers, app=app, be=be, be3=be3,
             bevals=[c["be"][s] for s in SC], weeks=weeks, budget=budget,
             p7title=f"\u20b9{spend} CRORE, {share} OF UNIT REVENUE", alloc=alloc, members=members, gantt=gantt, kpis=kpis,
             cover_line=f"Every mechanic and puncture shop can join free. A personal code, logged by the retailer in the {app}, earns tools, visibility and training even where Eurogrip is not stocked. Tiers are re-earned every six months.",
             thanks=f"equip the mechanic, credit the advice and measure the recommendation. At {be} extra tyres a shop a year, {budget} pays for itself.",
             tri=tri, segrows=segrows, pilots=c["pilot_states"], scen=scen, bench=bench, riskcells=cells, risks=risks,
             valid=f"{int(c['validation']['interviews'])} interviews, {int(c['validation']['cities'])} cities")
    V["must"] = [be, budget, univ + " lakh", "TEAM IDEAFORGE", "Harsh Kawatra", "Anuj Gambhir", "Delhi Technological University",
                 "Case Study 4", "THANK YOU", "THEREFORE", "Tier 1", "Tier 2", "Tier 3", "INCENTIVE REALISM", "MEASURABILITY"]
    assert len(V["h2"]) <= 150 and len(V["h3"]) <= 150, (len(V["h2"]), len(V["h3"]))
    assert all(len(x) <= 40 for x in risks) and 5 <= len(bench["rows"]) <= 7 and all(len(r) <= 16 for r in bench["rows"])
    assert len(tri) == 4 and all(len(t["label"]) <= 17 for t in tri) and len(CRESTS) == 5
    assert all(len(src) <= 230 for src in (V["src1"], V["src2"], V["src3"], V["src4"]))
    return V
```

### Q.3 `EG\deck\_extras.js` replacements (inserted by Q.9)

```js
const RIBN=["INCENTIVE REALISM","INSIGHT-GROUNDING","SCALABILITY","SUSTAINABILITY","MEASURABILITY"];
const RIBAP=["A1 SHOP UNIVERSE","A2 BUDGET MODEL","A3 BENCHMARKS","A4 RISKS AND VALIDATION"];
```
```js
function coverTop(s){ addChip(s,64,48,600,56,"EUROGRIP × UNSTOP  |  CASE STUDY 4",C.primaryDeep,C.white,22);
  logoSlot(s,696,40,190,72,"Eurogrip"); logoSlot(s,902,40,150,72,"Unstop"); logoSlot(s,1068,40,72,72,"DTU");
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
```

### Q.4 `EG\deck\slides\s01.js` (Cover)

```js
{ const s = await figma.getNodeByIdAsync("S1"); wipe(s); coverTop(s);
nm(TL(s,64,160,76,"MECHANIC ADVOCACY",{family:"Poppins",style:"ExtraBold",maxW:1100,min:60}),"TITLE");
nm(TL(s,64,276,76,"FOR EUROGRIP",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:1100,min:60}),"TITLE 2");
nm(T(s,64,390,1100,26,"Case Study 4: a scalable, cost-effective advocacy ecosystem with mechanics and puncture shops, domestic two-wheeler market",{family:"Poppins",style:"Bold",color:C.primaryDeep}),"SUBTITLE");
const v=layered(s,64,480,1100,216,C.primaryDeep,"CARD: verdict");
T(v,28,16,1044,26,"OUR ANSWER: PAY FOR THE ADVICE, NOT THE STOCK, AND PAY IN TOOLS AND STATUS RATHER THAN CASH.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,28,96,1044,22,V.cover_line,{color:C.white});
nm(TL(s,64,716,28,V.team.name,{color:C.primary}),"TEAM LABEL");
teamBT(s,64,764,[300,500,300]);
T(s,64,944,1100,22,"Prepared for the Eurogrip × Unstop Collaboration, Case Study 4",{family:"Inter",style:"Bold",color:C.primaryDeep});
const pm=panel(s,1200,160,656,836,"WHO DECIDES THE REPLACEMENT TYRE",{fill:C.tint,layered:true});
T(pm,16,58,624,22,"Advocacy already comes from mechanics who do not stock Eurogrip.",{family:"Inter",style:"Bold"});
[["photo: mechanic at work",16],["photo: puncture shop",165],["photo: rider at replacement",350],["product: Eurogrip tyre",499]].forEach(q=>imgSlot(pm,q[1],114,141,82,q[0]));
const HUB=[328,404];
[[161,276],[495,276],[161,532],[495,532]].forEach(q=>addDiagonalWire(pm,HUB[0],HUB[1],q[0],q[1],C.ink,2.5));
dashedV(pm,328,490,194,C.primaryDeep,2.5); dashedH(pm,76,684,504,C.primaryDeep,2.5);
[76,202,328,454,580].forEach(cx=>dashedV(pm,cx,684,12,C.primaryDeep,2.5));
node2(pm,16,204,290,72,"THE MECHANIC","advises at replacement");
node2(pm,350,204,290,72,"THE RIDER","buys on that advice");
node2(pm,16,532,290,72,"THE RETAILER","logs the code at sale");
node2(pm,350,532,290,72,"THE RIVALS","MRF, CEAT, Apollo",{fill:C.accentTint});
logoSlot(pm,16,614,141,60,"Eurogrip"); imgSlot(pm,165,614,141,60,"screen: retailer app");
logoSlot(pm,350,614,92,60,"MRF"); logoSlot(pm,446,614,92,60,"CEAT"); logoSlot(pm,542,614,98,60,"Apollo Tyres");
addEllipse(pm,HUB[0]-86,HUB[1]-86,172,172,C.primaryDeep,C.ink,2.5);
logoSlot(pm,HUB[0]-66,HUB[1]-52,132,56,"Eurogrip");
addText(pm,"Inter","Bold",22,C.accent,"Case Study 4",HUB[0]-80,HUB[1]+14,160,32,"CENTER","CENTER");
[76,202,328,454,580].forEach((cx,i)=>{ logoSlot(pm,cx-60,696,120,50,V.crests[i][0]); TL(pm,0,750,22,V.crests[i][1],{family:"Inter",style:"Bold",centerAt:cx,maxW:124}); });
TL(pm,16,782,22,"Adjacent categories that already reward influencers",{family:"Inter",style:"Bold",color:C.primary,maxW:624});
fine(pm,16,812,624,"Logos mark brands referenced in the analysis; no partnership is implied.");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,V.src1);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Q.5 `EG\deck\slides\s02.js` (Executive summary, the core slide)

```js
{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,-1,"CASE 4","EXECUTIVE SUMMARY",380,V.h2,V.src2,{labels:RIBN});
rail(s,64,312,230,"DIAGNOSIS",C.primaryDeep); rail(s,64,558,230,"PROGRAMME",C.primary); rail(s,64,804,226,"DELIVERY",C.alert);
// P1: where the tyre decision is made
const p1=panel(s,120,312,566,230,"ONE DECISION, THREE KINDS OF SHOP");
const SC1=[C.primaryDeep,C.primary,C.accent], ST1=[C.white,C.white,C.ink];
segBar(p1,16,62,534,48,V.seg.map((g,i)=>({v:g.v,c:SC1[i],t:g.t,tc:ST1[i]})));
V.seg.forEach((g,i)=>{ const y=124+i*34; addRect(p1,16,y+6,18,18,SC1[i],C.ink,1.5);
  TL(p1,44,y,22,g.lakh+" lakh",{family:"Poppins",style:"Bold"}); TL(p1,170,y,22,g.label,{family:"Inter",style:"Bold",maxW:380}); });
// P2: the brief's insights, acted on
const p2=panel(s,702,312,566,230,"THE BRIEF'S INSIGHTS, ACTED ON");
bl(p2,16,62,534,[["Stocking lags awareness: ","credit the advice"],["Non-stockers advocate: ","no stock needed"],["Visibility is rising: ","boards and aprons"],["One-off cash fades: ","tools and tiers renew"]],{gap:12});
// P3: the obvious play, struck through
const p3=nm(panel(s,1284,312,572,230,""),"PANEL: obvious play");
const t3=TL(p3,16,10,24,"THE OBVIOUS PLAY: CASH PER TYRE",{color:C.alert,maxW:540}); addRect(p3,16,50,540,2,C.ink);
addRect(p3,16,t3.y+t3.height/2-1.5,t3.width,3,C.alert);
badgeList(p3,16,62,540,["Pays stockers; advice comes from all","Too few tyre sales per shop for points","Rivals can match cash within a week"],{bg:C.alert,d:38,pitch:54});
// P4: the programme, tiers plus the recommendation loop
const p4=panel(s,120,558,1148,230,"THE PROGRAMME: EQUIP, RECOGNISE, CREDIT THE ADVICE");
wrapTable(p4,16,58,[96,270,190],["Tier","Gets","Gives back"],V.tiers,{headerH:36,rowH:42,name:"tiers"});
const LX=588,NW=118,NG=24,NY=74,NH=64, LN=[["Mechanic","advises"],["Rider","buys"],["Retailer","logs code"],["Credits","buy tools"]];
LN.forEach((n,i)=>{ const x=LX+i*(NW+NG), dark=i===0;
  const f=addFrame(p4,x,NY,NW,NH,dark?C.primaryDeep:(i===3?C.accent:C.white),C.ink,2,"NODE "+n[0]);
  addText(f,"Inter","Bold",22,dark?C.white:C.ink,n[0],4,2,NW-8,30,"CENTER","CENTER");
  addText(f,"Inter","Semi Bold",22,dark?C.accent:C.ink,n[1],4,32,NW-8,30,"CENTER","CENTER");
  if(i<3) arrow(p4,x+NW+2,NY+NH/2,x+NW+NG-2,NY+NH/2,C.ink,3); });
const c1=LX+NW/2, c4=LX+3*(NW+NG)+NW/2, RY=NY+NH+44;
addRect(p4,c4-1.5,NY+NH,3,RY-NY-NH,C.ink); addRect(p4,c1-1.5,RY-1.5,c4-c1+3,3,C.ink); arrow(p4,c1,RY,c1,NY+NH+3,C.ink,3);
TL(p4,0,NY+NH+8,22,"logged in the "+V.app,{family:"Inter",style:"Bold",color:C.primary,centerAt:(c1+c4)/2,maxW:c4-c1-24});
TL(p4,0,RY+6,22,"tiers renew every 6 months",{family:"Inter",style:"Bold",centerAt:(c1+c4)/2});
// P5: the moneyshot
const m=layered(s,1284,558,572,230,C.white,"CARD: MONEYSHOT",C.alert); m.strokes=[{type:"SOLID",color:C.alert}]; m.strokeWeight=3;
const big=TL(m,20,0,80,V.be,{family:"Poppins",style:"ExtraBold",color:C.alert}); const bx=20+big.width+16;
TL(m,bx,18,30,"EXTRA TYRES",{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:552-bx,min:24});
TL(m,bx,60,22,"per member shop a year",{family:"Inter",style:"Bold",maxW:552-bx});
T(m,20,118,532,24,"PAY BACK THE WHOLE PROGRAMME: ONE TYRE EVERY "+V.weeks+" WEEKS",{family:"Poppins",style:"Bold"});
T(m,20,194,532,22,"Bear "+V.be3[0]+"  |  base "+V.be3[1]+"  |  bull "+V.be3[2]+" tyres a shop",{family:"Inter",style:"Bold",color:C.primary});
// P6: rollout and gates
const p6=panel(s,120,804,566,226,"24 MONTHS, THREE GATES");
const GC=[C.primaryDeep,C.primary,C.alert];
gantt(p6,16,58,150,48,40,["Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8"],V.gantt.map((r,i)=>({label:r[0],s:r[1],e:r[2],text:r[3],color:GC[i],tc:C.white})));
diamond(p6,262,118,11,C.accent); TL(p6,278,103,22,"G1",{family:"Poppins",style:"Bold"});
diamond(p6,358,158,11,C.accent); TL(p6,374,143,22,"G2",{family:"Poppins",style:"Bold"});
diamond(p6,550,198,11,C.accent); TL(p6,504,183,22,"G3",{family:"Poppins",style:"Bold",color:C.white});
// P7: budget
const p7=panel(s,702,804,566,226,V.p7title);
const AC=[C.primaryDeep,C.primary,C.accent,C.alert,C.surface];
donut(p7,96,142,156,V.alloc.map((a,i)=>({v:a.v,c:AC[i]})),0.5);
V.alloc.forEach((a,i)=>{ const y=60+i*32; addRect(p7,196,y+6,18,18,AC[i],C.ink,1.5);
  TL(p7,218,y,22,a.label,{family:"Inter",style:"Bold",maxW:186});
  TL(p7,0,y,22,a.pct,{family:"Poppins",style:"Bold",rightAt:458});
  TL(p7,0,y,22,a.cr,{family:"Inter",style:"Bold",color:C.primary,rightAt:550}); });
// P8: measurement and gates
const p8=panel(s,1284,804,572,226,"GATES G1 TO G3: THE BAR TO SCALE");
wrapTable(p8,16,56,[132,224,184],["Layer","Metric","Gate"],V.kpis,{headerH:34,rowH:33,name:"kpis"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Q.6 `EG\deck\slides\s03.js` (Appendix)

```js
{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,-1,"A / 01","APPENDIX",280,V.h3,V.src3,{labels:RIBAP});
// A1: universe
const a1=panel(s,64,312,884,350,"A1 FOUR WAYS TO COUNT THE SHOPS");
hBars(a1,16,62,500,V.tri.map(t=>({label:t.label,value:t.v,text:t.text,color:t.est?C.primary:C.primaryDeep})),{labelW:212,rowH:46,barH:26,valueW:110});
T(a1,16,256,500,22,"Base case "+V.univ+" lakh: mean of the two estimates, never below the largest programme count.",{family:"Inter",style:"Bold"});
wrapTable(a1,532,62,[150,90,96],["Segment","Lakh","Share"],V.segrows,{headerH:36,rowH:40,name:"segments"});
T(a1,532,272,336,22,"Pilot states: "+V.pilots,{family:"Inter",style:"Bold",color:C.primary});
// A2: budget model
const a2=panel(s,972,312,884,350,"A2 BUDGET MODEL, BEAR TO BULL");
wrapTable(a2,16,58,[230,110,110,110],["Line","Bear","Base","Bull"],V.scen,{headerH:36,rowH:40,name:"scenarios"});
TL(a2,600,58,22,"Break-even tyres a shop",{family:"Inter",style:"Bold",maxW:268});
vBars(a2,600,92,268,240,["Bear","Base","Bull"].map((l,i)=>({label:l,value:V.bevals[i],text:V.be3[i],color:[C.alert,C.primary,C.primaryDeep][i]})),{barW:56});
// A3: benchmark heat grid
const a3=panel(s,64,686,884,344,"A3 HOW ADJACENT CATEGORIES PAY INFLUENCERS");
const HC={"Yes":[HG[4],C.ink],"Part":[HG[2],C.ink],"No":[C.white,C.ink],"n/a":[C.surface,C.ink]};
grid(a3,16,56,V.bench.rows,["Cash","Tools","Boards","Skills","Advice","Tracks"],V.bench.cells.map(r=>r.map(c=>({t:c,f:HC[c][0],tc:HC[c][1]}))),{labelW:220,cellW:104,rowH:32,headH:40,corner:"Programme",name:"TABLE: bench"});
fine(a3,16,322,852,"Advice = credits a recommendation without a purchase. Tracks = logs activity by app or code.");
// A4: risks and validation
const a4=panel(s,972,686,884,344,"A4 RISKS, CONTROLS AND VALIDATION");
grid(a4,16,56,["High","Med","Low"],["Low","Med","High"],V.riskcells.map((r,i)=>r.map((c,j)=>({t:c,f:HG[1+(2-i)+j],tc:(2-i)+j===4?C.white:C.ink}))),{labelW:80,cellW:84,rowH:60,headH:36,corner:"P / I",name:"TABLE: risk"});
TL(a4,16,282,22,"P = probability, I = impact",{family:"Inter",style:"Bold"});
badgeList(a4,356,56,512,V.risks,{bg:C.alert,d:34,pitch:46});
callout(a4,356,286,512,46,"VALIDATE FIRST: ",V.valid,{py:8});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Q.7 `EG\deck\slides\s04.js` (Thank you)

```js
{ const s = await figma.getNodeByIdAsync("S4"); wipe(s); coverTop(s);
nm(TL(s,0,176,104,"THANK YOU",{family:"Poppins",style:"ExtraBold",centerAt:960}),"TITLE");
const v=layered(s,260,370,1400,150,C.primaryDeep,"CARD: therefore");
addText(v,"Poppins","Bold",26,C.accent,"THEREFORE: "+V.thanks,28,0,1344,150,"CENTER","CENTER");
nm(TL(s,0,556,28,V.team.name,{color:C.primary,centerAt:960}),"TEAM LABEL");
teamBT(s,410,604,[300,500,300]);
[["link: research document (PDF)",410],["link: two-minute video",790],["link: model workbook",1170]].forEach(l=>imgSlot(s,l[1],790,340,80,l[0]));
addText(s,"Inter","Bold",22,C.primaryDeep,"The research document and the model back every number on these slides.",260,900,1400,30,"CENTER","CENTER");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,V.src4);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Q.8 `EG\deck\setup.js`

```js
// Creates (or finds) exactly four slides, names them, checks fonts. Safe to rerun: it never makes a second set.
let grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
if (grid === undefined) { figma.createSlide(); grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID"); }
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 4 && guard++ < 7) figma.createSlide();
const names = ["01 Cover", "02 Executive Summary", "03 Appendix", "04 Thank You"];
const slides = all(); slides.slice(0, 4).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 4).map(s => s.id), extra: slides.slice(4).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
```

### Q.9 `EG\deck\patch_tooling.py`

```python
"""One-time patch of the copied BeyondTech tooling for the Eurogrip deck. Every old string must occur exactly once."""
import io, re, pathlib
D = pathlib.Path(__file__).resolve().parent


def rd(rel): return io.open(D / rel, encoding="utf-8").read().replace("\r", "")
def wr(rel, t): io.open(D / rel, "w", encoding="utf-8", newline="\n").write(t)


def sub(rel, old, new):
    t = rd(rel); assert t.count(old) == 1, (rel, old[:60], t.count(old)); wr(rel, t.replace(old, new)); print("patched", rel, "|", old[:50])


def line(rel, prefix, new):
    t = rd(rel); ls = t.split("\n"); idx = [i for i, l in enumerate(ls) if l.lstrip().startswith(prefix)]
    assert len(idx) == 1, (rel, prefix, idx); ls[idx[0]] = new; wr(rel, "\n".join(ls)); print("replaced line", rel, "|", prefix)


sub("gen.py", "# ===== BEYONDTECH DECK GEN v2 =====", "# ===== EUROGRIP DECK GEN v1 =====")
sub("gen.py", "NS = 11", "NS = 4")
sub("gen.py", "X2 = (2, 3, 5)  # the redesigned slides", "X2 = (1, 2, 3, 4)  # glyph metrics and rail helpers on every slide")
sub("_extras.js", "// ===== BEYONDTECH DECK EXTRAS =====", "// ===== EUROGRIP DECK EXTRAS =====")
line("_extras.js", "const RIBN=[", 'const RIBN=["INCENTIVE REALISM","INSIGHT-GROUNDING","SCALABILITY","SUSTAINABILITY","MEASURABILITY"];')
line("_extras.js", "const RIBAP=[", 'const RIBAP=["A1 SHOP UNIVERSE","A2 BUDGET MODEL","A3 BENCHMARKS","A4 RISKS AND VALIDATION"];')
COVER = '''function coverTop(s){ addChip(s,64,48,600,56,"EUROGRIP \u00d7 UNSTOP  |  CASE STUDY 4",C.primaryDeep,C.white,22);
  logoSlot(s,696,40,190,72,"Eurogrip"); logoSlot(s,902,40,150,72,"Unstop"); logoSlot(s,1068,40,72,72,"DTU");
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// ===== END EUROGRIP DECK EXTRAS ====='''
t = rd("_extras.js"); a = t.index("function coverTop(s){"); END = "// ===== END BEYONDTECH DECK EXTRAS ====="
assert t.count("function coverTop(s){") == 1 and t.count(END) == 1
b = t.index(END) + len(END); wr("_extras.js", t[:a] + COVER + t[b:]); print("replaced coverTop and end marker")
line("_sweeps.js", "const BAN=[", 'const BAN=["here\'s","let\'s","bottom line","delve","game-changer","unlock","it\'s not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutioni","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today\'s","ever-evolving","imagine","ecosystem","testament","elevate","what if","picture this","dive into","groundbreaking","state-of-the-art","plethora","myriad","underscore","showcase","foster","bolster","spearhead","nuanced","intricate","meticulous","realm","fast-paced","in conclusion","it is important to note"]; const ALLOW=["influencer advocacy ecosystem","advocacy ecosystem","ownership journey","customer journey","rider journey","replacement journey","next-gen tyre technology","next-generation tyre","competitive landscape"];')
line("_sweeps.js", "const ABSENT=[", 'const ABSENT=["BeyondTech","Beyond Tech","DTU Plan","Dream11","FanCode","Paytm","Liminal","Satoshi","Setu","PRAMAAN","Maudrik","SwasthyaGrid","NEXORA","HarvestBox","Perennial","Gousto","Verdict","Next Signal","NEXT SIGNAL","Track D","ATMOS","TODO","TBD","Lorem","Insert","xyz","undefined","NaN","Rs "];')
sub("_sweeps.js", "const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b))",
    'let low=c.toLowerCase(); ALLOW.forEach(w=>{ low=low.split(w).join(" "); }); for(const b of BAN) if(new RegExp("\\\\b"+b.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")).test(low))')
print("patch_tooling done")
```

After running it, open `_sweeps.js` and confirm the banned-word test line reads exactly
`let low=c.toLowerCase(); ALLOW.forEach(w=>{ low=low.split(w).join(" "); }); for(const b of BAN) if(new RegExp("\\b"+b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).test(low))`
(single backslashes inside the JS regex literal, a doubled backslash inside the JS string `"\\b"`). If Python escaping
produced anything else, fix that one line by hand with the Edit tool and record it in `DECISIONS.md`. Then
syntax-check (compile only, nothing runs) both patched validator files:
`node -e "const A=Object.getPrototypeOf(async function(){}).constructor;for(const f of process.argv.slice(1)){new A(require('fs').readFileSync(f,'utf8').replace('const ids=IDS;','const ids=[];').replace('MUSTLIST','[]'));console.log('ok',f)}" "<EG>\deck\_sweeps.js" "<EG>\deck\_v1.js"`
A syntax error in `_extras.js` or a slide file shows up in `gen.py mock`.

---

## END OF PLAN

