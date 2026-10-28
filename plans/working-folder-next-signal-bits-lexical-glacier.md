# Next Signal: the demo video, the GitHub Pages hosting, and the link wiring

> Supersedes every earlier version of this file. Those earlier plans (the audit remediation, the
> Sarvam fix, the research paper) are **done**: Lanes S, P, V, W3 all reported complete and gated
> (engine pytest green, web build/lint/copy-lint clean). Their one unfinished piece, proving the
> product actually works end to end in a browser, becomes **Phase 0** below, because this video
> cannot be filmed against a product that has not been proven to work.
>
> **Executors:** Sonnet-class subagents, dispatched by the main (Opus) thread. Every phase below
> gives exact paths, exact commands, exact text, exact timings. Where a judgement call exists, the
> call has already been made. If the code or a file on disk differs from what a task assumes, stop
> that task, write down the difference, finish the other tasks, and report; do not redesign.

---

## 0. Context

On 20 Oct, after Lanes S/P/V/W3 finished (Sarvam proven live-capable, the research-paper PDF
generator built, the eval CLI built, plain language wired into the UI), the user asked for a
different kind of deliverable: a **demo video** for Next Signal, plus **GitHub + GitHub Pages
hosting** for the research paper and the model/eval workbook, with the resulting links placed on the
Round 1 PDF's footer and the web app's About page.

The request initially named two *other* projects in this account, `swasthyagrid-gcp` and
`eurogrip-case`, as the place to go look. Those are not the subject of the video. They are the
**reference pattern**: `eurogrip-case` already has a working, proven version of exactly this pipeline
(a locked narration script, a HyperFrames video built from real assets with word-anchored timing, and
a small GitHub Pages site serving a research PDF and an Excel workbook with blue link cards). This
plan reuses that pattern for Next Signal, adapted to Next Signal's actual nature: a **live product**,
not a static deck. Four decisions the user made when asked directly:

1. **Scope**: this video is for Next Signal, not SwasthyaGrid. (SwasthyaGrid has no video scaffolding
   and is out of scope here.)
2. **Footage**: real captured footage of the actual running product, not a mocked animation.
3. **Structure**: real footage **plus** animated exhibit cutaways built from the Round 1 PDF's own
   diagrams (the six-stage flow, the tools table), in the same unfolding style as the Eurogrip video.
4. **Links**: no new slide deck. The GitHub Pages links go on the existing Round 1 PDF's footer and
   on the web app's About page, as plain **blue links with a right-pointing arrow**, not QR codes
   (the QR recommendation was for Eurogrip's printed slide; Next Signal's targets are a PDF and a live
   web page, where a clickable link is strictly better than a QR code).
5. **GitHub**: go ahead now. Public repo, GitHub Pages enabled, research PDF and model workbook
   hosted there today.
6. **Video hosting**: the user will upload the finished mp4 to Google Drive themselves. Nothing in
   this plan needs to publish the video anywhere; it only needs to finish a correct mp4 file and hand
   it over. There is accordingly **no video card and no video placeholder** on the GitHub Pages site,
   the About page, or the Round 1 PDF footer, matching the user's explicit "nothing for video" answer.

---

## 1. Ground truth on 20 Oct (verified by reading the code and the filesystem)

### 1.1 Where everything lives

| Thing | Path |
|---|---|
| Code repo (engine + web app) | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits\` (space in the path; always quote it) |
| Case submission materials (brief, research, Round 1 PDF, this video) | `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\next-signal-bits\` |
| Research document | `...\next-signal-bits\research\next-signal-research.{md,html,pdf}` (the PDF is 5.69 MB) |
| Round 1 submission PDF | `...\next-signal-bits\round1\IdeaForge_TrackD_Round1.pdf` (244 KB), built by `round1\build_round1.py` from `round1\round1.html` |
| Model / eval workbook | Does not exist yet as a file. Next Signal's equivalent of Eurogrip's `Eurogrip_Model.xlsx` is the engine's own XLSX export (`GET /api/runs/{run_id}/export.xlsx`, built by `engine/next_signal/export/xlsx.py` in the just-finished Lane P work) run against one real, completed live run. |
| `video/` project | Does not exist yet. Create at `...\next-signal-bits\video\` (sibling to `case/`, `deck/`, `model/`, `research/`, `round1/`), mirroring exactly where Eurogrip's `video/` sits relative to its own siblings. |
| Reference pattern to copy from | `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\eurogrip-case\video\` (BRIEF.md, STORYBOARD.md, SCRIPT.md, hyperframes.json, scenes.json, compositions/frames/S01-S08.html) and `...\eurogrip-case\site\` (the GitHub Pages pattern: `.nojekyll`, a small `index.html`, the PDF and the XLSX committed directly into the Pages folder) |
| GitHub account | `gh auth status` confirms the active account is `harshkawatra11` (same account that owns `eurogrip-case4`) |
| No existing `next-signal` GitHub repo | confirmed via `gh repo view harshkawatra11/next-signal` (404) |
| Code repo git state | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits` has a `.git` folder already (`git init` was run) but **zero commits** and **no remote**. `.gitignore` already correctly excludes `engine/.env`, `apps/web/.env.local`, `engine/.cache/`, `engine/data/*.sqlite`, venvs, node_modules. `git ls-files` for `.env` patterns returns nothing (nothing untracked-but-secret is already staged). No `LICENSE` file yet. |
| Tools confirmed present | `ffmpeg` (two installs, either works), `whisper` (CLI, for forced alignment of the recorded narration against the script), `npx hyperframes` (CLI, v0.8.181), `gh` (authenticated) |
| Browser automation | `mcp__claude-in-chrome__*` tools. Connectivity must be re-checked at execution time (it has been unavailable earlier in this same session); Phase 2 below names the fallback if it still is. |

### 1.2 The six stages, the thesis, and the team (facts the video and the exhibits must not contradict)

Pulled from `round1/round1.html` and `case/01-brief.md`, both already-written, judge-facing, locked
text. Reuse this wording; do not paraphrase it into something new.

- **Team**: Harsh Kawatra (lead), Anuj Gambhir, Gursimran Kaur. Team IdeaForge. ATMOS 2026, Track D
  (Pharma and Healthcare), BITS Pilani Hyderabad Campus.
- **The thesis, verbatim**: "Next Signal computes before it reads, looks outside the company before
  it trusts the company, and spends most of its effort trying to kill its own hypotheses. A discovery
  is whatever survives that effort."
- **The six stages, in fixed order**: Discover, Connect, Calculate, Reason, Challenge, Prove.
- **Discover**: resolves the company, scores candidate angles, keeps the top four.
- **Connect**: fetches documents in parallel; extracts facts with a verbatim quote verified against
  the source page.
- **Calculate**: 44 formulas, peer-relative z-scores, change-point detection, an event study, all
  computed before any language model forms an opinion.
- **Reason**: proposes up to six hypotheses with explicit predictions and disconfirmers.
- **Challenge**: nine falsification tests plus an Analysis of Competing Hypotheses matrix; the
  strongest surviving rival becomes the stated Counterargument.
- **Prove**: a deterministic 0 to 10 strength score (independence, reliability, corroboration,
  survival, persistence, minus penalties), labelled Strong, Moderate or Weak, with the reasoning shown.
- **Required output, eight elements**: Discovery, Why It Matters, Evidence, Timeline, Numbers,
  Counterargument, Falsification Condition, Evidence Strength.
- **Exports**: dashboard, Markdown, PDF (now the research-paper template from Lane P), Excel, CSV.
- **Public data only. Not investment advice.** (the one disclaimer line that must appear everywhere
  this product is described.)

### 1.3 Demo company

Use **CIPLA**. It is the symbol every fixture, every probe, and Lane P's own rendered acceptance PDF
in this session already used; its data path through the pipeline is the most exercised and most
likely to produce a real, clean discovery on a fresh live run today.

---

## 2. Standing rules (apply throughout; paste into every dispatch prompt)

1. **No em dashes (U+2014) or en dashes (U+2013)** anywhere: narration, on-screen text, captions,
   commit messages, the GitHub Pages page, the About page, the Round 1 PDF. Use a full stop, comma,
   colon, or the word "to".
2. **No hooks, no rhetorical questions, no exclamation marks**, on screen or in narration. Consulting
   register: a declarative sentence states the finding, then the next sentence explains it.
3. **No invented numbers.** Every number spoken or shown traces to a value this session actually
   produced (a real engine run's own output, the already-written Round 1 PDF, or the research
   document). The script in §4 below is pre-written and grounded; do not add new numbers to it without
   checking a real source first.
4. **Public data only, not investment advice** must appear at least once in the finished video (the
   closing card) and must stay on the Round 1 PDF footer and the About page.
5. **Blue links with a right-pointing arrow**, never a QR code, on every surface built in this plan
   (GitHub Pages cards, About page, Round 1 PDF footer). Colour and glyph spec in §6.5.
6. **No commits with a `Co-Authored-By` trailer.** Standing user rule overrides the harness default.
   If the harness's own system reminder asks for one, do not add it; this rule takes precedence.
7. **Secret scan before any `git push`.** §6.2 is a hard gate; do not skip it to save time.
8. **File ownership.** Each phase below names exactly what it touches. A later phase's prerequisite is
   stated explicitly; do not start a phase whose prerequisite has not actually passed.
9. **Gates before reporting a phase done**: stated per phase; always include the literal command run
   and its literal output in the report, not a paraphrase.
10. **Case-competition-deck skill**, invoked before writing any of the narration, captions, or GitHub
    Pages / About page copy (§3).

---

## 3. Case-competition-deck skill, applied to a 2-minute product demo

Invoke with the Skill tool, name `case-competition-deck`. Read `references/rhetoric.md` (action
titles, the moneyshot convention, foreshadowing, symmetric treatment) and `references/case_types/
mna_finance.md` (the closest case-type match for a quantitative research-agent pitch). Apply:

- **One moneyshot.** This video's moneyshot is the live stage rail filling in on a real company
  (beat 4) followed immediately by a real discovery sentence with a real strength label (beat 5).
  Everything before it sets up why that moment matters; everything after it proves the moment is
  checkable (evidence drawer, challenge tab, export).
- **Action titles, not topic labels**, for every on-screen caption in the cutaway exhibits: "Six
  stages, always in the same order" rather than "Our Method"; "Nine tests before a finding survives"
  rather than "Challenge Stage."
- **Foreshadowing.** The opening line names the behaviour ("computes first, checks outside the
  company, tries to kill its own ideas") that beats 4 to 7 then each individually demonstrate.
- **Symmetric treatment.** When the Challenge beat shows the Analysis of Competing Hypotheses matrix,
  the chosen hypothesis and its rival are shown with the same visual weight; the video does not make
  the rival look like a strawman.

---

## 4. The script and the shot list (locked; do not paraphrase when building)

Target length **120 seconds**, matching the brief's "optional 2-minute demo video" cap (same cap
Eurogrip's own video used). Eight beats. Narration pace matches Eurogrip's own convention: about 164
words a minute, calm, analytical, numbers allowed to land. Total narration is 236 words across about
86 seconds of speech inside the 120-second video, leaving dwell time for the viewer to actually read
the live product's screen during the longer live beats, which is correct for a product demo (a pure
wall of continuous narration over a UI the viewer has not seen before reads as rushed).

Write this exact text into `video/SCRIPT.md` (§7.2 gives the full file format). Do not alter wording;
only the per-word timing anchors (added once the real recording exists) are a later, mechanical step.

| Beat | Time | Kind | On screen | Narration (verbatim) |
|---|---|---|---|---|
| 1 | 0:00 to 0:13 | Cutaway, titlecard-reveal | "NEXT SIGNAL" wordmark wipes in; subtitle "Finding the Next Signal, ATMOS 2026, Track D" fades in; team names fade in below (Harsh Kawatra, Anuj Gambhir, Gursimran Kaur, Team IdeaForge); the thesis line types in as a strap across the bottom third, timed to land under "prove itself wrong" | "I'm Harsh Kawatra, with Anuj Gambhir and Gursimran Kaur, Team IdeaForge. Most finance tools summarise a filing. Next Signal computes first, checks outside the company, and spends most of its effort trying to prove itself wrong." |
| 2 | 0:13 to 0:23 | Live capture | Home page loads; the Investigate field is typed into with "CIPLA"; the Investigate button is clicked; the page begins navigating to the live run | "Give it any NIFTY fifty pharma or healthcare company. We give it Cipla." |
| 3 | 0:23 to 0:34 | Cutaway, grid-card-assemble | Six numbered cards (01 Discover, 02 Connect, 03 Calculate, 04 Reason, 05 Challenge, 06 Prove) pop in left to right, one per narrated stage name, reusing `round1.html`'s `.stage-row` visual language (numbered tile, bold stage name, thin ink border) | "Six stages, always in the same order: Discover, Connect, Calculate, Reason, Challenge, Prove. The arithmetic runs before any language model sees the numbers." |
| 4 | 0:34 to 0:58 | Live capture | The live run page (`/run/{id}`); the stage rail fills in stage by stage with real millisecond times; the source ticker populates with real NSE fetch rows; the angle and anomaly bars populate as Discover and Calculate finish | "Discover reads the filings and the regulator record. Connect pulls every quarter of results straight from the exchange. Calculate runs the numbers against five years of history and against Cipla's own peers, before anyone forms an opinion about what they mean." |
| 5 | 0:58 to 1:18 | Live capture | The finished report page; the discovery sentence; the strength bar with its Strong/Moderate/Weak thresholds marked and the label it actually received | "Reason proposes what changed. Challenge spends more time trying to kill that idea than defending it, against nine separate tests. What survives gets a strength score, not a guess: strong, moderate or weak, and the reasoning is shown, not hidden." |
| 6 | 1:18 to 1:34 | Live capture | Click one number in the discovery; the evidence drawer opens with the exact quote and the exact filing; cut to the Challenge tab; the Analysis of Competing Hypotheses matrix, the chosen hypothesis and its rival shown with equal visual weight | "Click any number and it opens the exact filing and the exact quote behind it. Every rival explanation sits in the same table, scored the same way, so nothing is quietly favoured." |
| 7 | 1:34 to 1:52 | Live capture | The Export panel; click "Research paper (PDF)"; the downloaded PDF opens in a new tab, scrolled briefly past its title, abstract, and one grayscale figure | "The same run exports as a dashboard, a research paper, an Excel workbook, or a CSV bundle, because a discovery that cannot be checked by someone else is not a discovery." |
| 8 | 1:52 to 2:00 | Cutaway, titlecard-reveal | "THANK YOU" pops; a restated thesis line wipes in; then three blue link rows fade in, each with a right-pointing arrow glyph: "Research paper (PDF)", "Model workbook (XLSX)", "github.com/harshkawatra11/next-signal"; team block; the disclaimer line fades in last and holds | "Public data only. Nothing here is investment advice. The research paper and the model workbook are linked below. Thank you." |

Number pronunciation guide for the recording (same convention as Eurogrip's SCRIPT.md): "NIFTY fifty"
said as two words, not an initialism; "Cipla" said "SIP-la"; stage names said as plain English words,
each with a brief pause before the next, since beat 3's visual pops one card per word.

---

## 5. Phase 0: prove the product actually works (prerequisite for Phase 2)

Phase 2 (footage capture) requires a live run that really produces a discovery with Sarvam actually
answering. This has never been proven end to end. This phase is the same Wave B integration step the
prior plan left unexecuted; it is restated here in full so this plan is self-contained.

**0.1 Start both servers** (Bash, `run_in_background: true`, each command starts with its own `cd`
because the Bash tool resets cwd every call):

```bash
cd "C:/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/next-signal bits/engine" && .venv/Scripts/python.exe -m uvicorn next_signal.main:app --port 8080
cd "C:/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/next-signal bits/apps/web" && npm run build && npm run start
```

**0.2 Prove Sarvam answers live:**

```bash
curl -s http://localhost:8080/api/llm/selftest
```

Pass: `"ok": true` and `"provider": "sarvam"`. If the provider is `gemini`, read the `attempts` field
for the real Sarvam error, fix it, restart the engine, and re-run this check. Do not proceed to 0.3
until this passes.

**0.3 Run CIPLA for real and check the yield:**

```bash
curl -s -X POST http://localhost:8080/api/runs -H "Content-Type: application/json" -d "{\"query\":\"CIPLA\"}"
```

Poll `GET /api/runs/{run_id}` every 10 seconds until `status` leaves `"running"`. Then:

```bash
curl -s http://localhost:8080/api/runs/{run_id}/report
```

Pass criteria, read from that JSON: `facts_count` at least 80; `financials` has at least 8 quarterly
rows; `anomalies` has at least 1 entry; `discovery` is not null, or if it is null, `killed` plus
`runners_up` together have at least 2 entries (an honest no-finding outcome is acceptable, a run that
found and tested nothing is not); `meta.llm_provider_mix` contains `"sarvam"` with a count of at least
1. If any of these fail, do not proceed; diagnose using the decision table in the previous plan's §9
step 4 (same file history; read it if needed for the specific failure-mode table), fix, re-run.

**0.4 Confirm the research paper and the workbook export both work on this real run:**

```bash
curl -s -o cipla_paper.pdf http://localhost:8080/api/runs/{run_id}/export.pdf
curl -s -o cipla_workbook.xlsx http://localhost:8080/api/runs/{run_id}/export.xlsx
```

Pass: both files download, the PDF is at least 6 pages (Read tool, pages "1-10"), the xlsx opens with
`openpyxl` (`.venv/Scripts/python.exe -c "import openpyxl; wb=openpyxl.load_workbook('cipla_workbook.xlsx'); print(wb.sheetnames)"`)
and shows at least a "Discovery" sheet plus table sheets.

**0.5 Record the run id.** Everything downstream (the footage, the published PDF, the published
workbook) comes from this exact `run_id`. Write it down; every later phase refers to it as
`{DEMO_RUN_ID}`.

**Phase 0 gate**: all four checks above pass with their literal command output quoted in the report.

---

## 6. Phase 1: GitHub repository and GitHub Pages

### 6.1 Repository setup

```bash
cd "C:/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/next-signal bits"
```

Write `LICENSE` (MIT, copyright "2026 Harsh Kawatra"). Confirm `.gitignore` already has the entries
listed in §1.1 (it does; do not duplicate them).

### 6.2 Secret scan (hard gate, do not skip)

```bash
git grep -rniE "sk-[a-zA-Z0-9]{20,}|api[_-]?key\s*[:=]\s*['\"][a-zA-Z0-9]{16,}|-----BEGIN [A-Z ]*PRIVATE KEY-----" -- . ':!*.lock' ':!node_modules' ':!.venv'
```

(This runs against the working tree before anything is staged; `git grep` without `--cached` still
works on untracked files once they are at least on disk, which they are.) Also explicitly check:

```bash
git check-ignore -v engine/.env apps/web/.env.local
```

Both must print a match (confirming they are ignored). If the secret scan finds anything, stop and
report before staging; do not `git add -A` over a hit.

### 6.3 First commit and push

```bash
git add README.md LICENSE .gitignore engine apps qa
git commit -m "Initial commit: Next Signal engine and web app"
gh repo create harshkawatra11/next-signal --public --source=. --remote=origin --push
```

(No `Co-Authored-By` trailer; standing rule §2.6.) Confirm:

```bash
gh repo view harshkawatra11/next-signal --json url,visibility
```

### 6.4 GitHub Pages via `/docs`

Create `docs/` at the repo root (sibling to `engine/`, `apps/`), structured exactly like Eurogrip's
`site/` folder but inside the same repo rather than a nested one, since Next Signal has no second
repo to keep separate:

```
docs/
  .nojekyll                (empty file; tells Pages to serve this as-is, no Jekyll processing)
  index.html               (§6.5)
  Next-Signal-Research-Note-CIPLA.pdf     (from Phase 0.4's cipla_paper.pdf, renamed)
  Next-Signal-Model-Workbook-CIPLA.xlsx   (from Phase 0.4's cipla_workbook.xlsx, renamed)
```

Enable Pages:

```bash
gh api -X POST repos/harshkawatra11/next-signal/pages -f "source[branch]=main" -f "source[path]=/docs"
```

(If this 404s because Pages needs to be enabled once via the web UI first on a brand-new repo, report
that exact error and the enablement will need one manual click from the user at
`github.com/harshkawatra11/next-signal/settings/pages`; do not attempt to work around it with a
different mechanism.) Confirm Pages is live once DNS propagates (can take a minute):

```bash
curl -s -o /dev/null -w "%{http_code}" https://harshkawatra11.github.io/next-signal/
```

### 6.5 `docs/index.html`

Same spirit as `eurogrip-case/site/index.html`: a short, consulting-styled landing page, no colour
flourishes beyond the brand's existing ink/signal tokens, two link cards, no video card (per §0).

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Next Signal, Track D</title>
<style>
  body { margin: 0; font-family: Georgia, "Times New Roman", serif; background: #fff; color: #0B0B0C; }
  .wrap { max-width: 720px; margin: 0 auto; padding: 48px 24px; }
  .chip { font: 600 11px "Courier New", monospace; letter-spacing: .1em; text-transform: uppercase; color: #C8102E; }
  h1 { font-size: 28px; margin: 12px 0 8px; }
  p.lede { color: #3A3936; line-height: 1.5; margin-bottom: 32px; }
  .card { display: flex; align-items: center; justify-content: space-between; border: 1px solid #E2DFD9; padding: 16px 20px; margin-bottom: 12px; text-decoration: none; color: #0B0B0C; }
  .card:hover { background: #F6F5F3; }
  .card .label { font-weight: 600; }
  .card .arrow { color: #1D4ED8; font-size: 18px; }
  .card .label a, .link-text { color: #1D4ED8; }
  footer { margin-top: 40px; font-size: 12px; color: #75716A; border-top: 1px solid #E2DFD9; padding-top: 16px; }
</style>
</head>
<body>
<div class="wrap">
  <div class="chip">Next Signal / Track D / ATMOS 2026</div>
  <h1>Finding the Next Signal</h1>
  <p class="lede">An autonomous research agent for NIFTY 50 pharma and healthcare companies. It computes before it
  reads, checks outside the company before it trusts the company, and reports only what survives its own attempts
  to prove it wrong.</p>

  <a class="card" href="Next-Signal-Research-Note-CIPLA.pdf">
    <span class="label link-text">Research paper (PDF)</span><span class="arrow">&#8594;</span>
  </a>
  <a class="card" href="Next-Signal-Model-Workbook-CIPLA.xlsx" download>
    <span class="label link-text">Model workbook (XLSX, downloads)</span><span class="arrow">&#8594;</span>
  </a>
  <a class="card" href="https://github.com/harshkawatra11/next-signal">
    <span class="label link-text">Source code on GitHub</span><span class="arrow">&#8594;</span>
  </a>

  <footer>Team IdeaForge, Harsh Kawatra, Anuj Gambhir, Gursimran Kaur. Public data only. Not investment advice.</footer>
</div>
</body>
</html>
```

The `download` attribute on the workbook link is what makes a browser show a save-location prompt
instead of trying to open the `.xlsx` inline, matching the user's original expectation exactly.

**Phase 1 gate**: `https://harshkawatra11.github.io/next-signal/` returns 200 and shows the page; both
link cards resolve (curl each with `-I` and check for 200); the workbook link's response headers show
`Content-Disposition` is not required for the `download` attribute to work (that attribute is a
browser-side hint, not a server header, so no server configuration is needed here).

---

## 7. Phase 2: build and render the video

### 7.1 Scaffold the HyperFrames project

```bash
cd "C:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/next-signal-bits"
npx hyperframes skills update general-video
```

Create `video/` and write `video/BRIEF.md` directly (do not run the intent interview; every field is
already decided in §0 and §4):

```markdown
---
workflow: general-video
flow: automation
storyboard: yes
message: "Next Signal computes before it reads, looks outside the company before it trusts it, and spends most of its effort trying to kill its own hypotheses; a discovery is whatever survives."
destination: web/presentation
aspect: 1920x1080
language: en
audience: ATMOS 2026 Track D judges and reviewers
length: under 120s
angle: a real live run on CIPLA, captured from the actual running product, with the six-stage method unfolding between live beats
narration: yes
voice: user (Harsh Kawatra), recorded as 8 takes matching SCRIPT.md
---

## Intent

A two-minute product demo for Next Signal, an autonomous financial research agent built for ATMOS 2026 Track D.
The viewer watches a real live run on Cipla: the stage rail filling in with real timings, a real discovery with a
real strength label, a real evidence drawer opening a real filing quote, the Challenge tab's real Analysis of
Competing Hypotheses matrix, and a real PDF export opening. Three cutaway exhibits (titlecard open, six-stage
method strip, titlecard close) carry the method explanation and the sign-off, reusing the exact wording and
numbered-stage visual language already locked in round1/round1.html. Tone: calm, analytical, consulting grade.

## Assets

- assets/footage/raw/beat2.mp4, beat4.mp4, beat5.mp4, beat6.mp4, beat7.mp4: the five live-capture beats, screen
  recorded at 1920x1080 against the real running product on {DEMO_RUN_ID} (Phase 2.2).
- assets/voice/raw/S01.* .. S08.*: Harsh's eight narration takes, one per beat, matching SCRIPT.md verbatim.
- assets/exhibits/stage-row.png and any other exhibit crops pulled from round1.html's own rendered output, used
  only as a visual reference for building beat 3's grid-card-assemble composition natively (never embedded as a
  flat screenshot; every number and label in beat 3 is a real DOM element so it can be animated).

## Notes

- Never re-skin, re-draw, or re-number anything the live product actually shows; the captured footage is the
  visual truth for beats 2, 4, 5, 6, 7.
- Zero em dashes; no question marks or exclamation marks on screen or in narration.
- Hard cap 120s.
- No video link, no QR code, no video card anywhere this project publishes; the user distributes the finished
  file themselves.
```

Write `video/SCRIPT.md` with the exact table from §4 above, reformatted into Eurogrip's own
`SCRIPT.md` convention (a short voice/pace preamble, then one `## S0n (...)` heading per beat with the
word count and estimated seconds, then the verbatim line). Use `eurogrip-case/video/SCRIPT.md` as the
literal formatting template (read it first).

Write `video/STORYBOARD.md` with one `## Frame N` entry per beat, each naming its blueprint
(`titlecard-reveal` for 1 and 8, `grid-card-assemble` for 3, and for the four live-capture beats, a new
blueprint name `live-footage-frame`, since HyperFrames' animation-blueprint catalogue is built around
compositions it animates from scratch, not around placing a pre-recorded clip; a `live-footage-frame`
in this project is simply a `<video>`-backed clip on the main track with a thin ink border and a small
lower-third caption reusing the beat's own first few narrated words, timed to the clip's own start).
Status `outline` for every frame, matching Eurogrip's own convention at this stage.

Run `npx hyperframes init` inside `video/` if it does not already scaffold `hyperframes.json`,
`meta.json`, `package.json`, and the standard folder layout; if `init` and the hand-written BRIEF.md
conflict on any field, the BRIEF.md above is authoritative (edit the generated file to match it).

### 7.2 Capture the live footage

Live capture needs the real product on screen, driven through its real actions, screen recorded at
1920x1080. Two sub-steps per live beat: drive the browser, record the screen.

**7.2.a Check Claude-in-Chrome connectivity first:**

```
ToolSearch "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__resize_window,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"
```

Call `tabs_context_mcp` with `createIfEmpty: true`. If it reports the extension is not connected, stop
here and report to the main thread: the fallback is for the user to record these five beats themselves
using OBS or Xbox Game Bar against the exact action list in the table below (same fallback the
original PLAN.md always allowed), and the plan resumes at 7.3 once those five files exist at
`assets/footage/raw/beat{2,4,5,6,7}.mp4`.

**7.2.b If connected**, create a tab, `resize_window` to 1920x1080, `navigate` to
`http://localhost:3000`, and drive each beat's actions in order while a parallel ffmpeg process
captures the screen region. Start the capture immediately before each beat's first action:

```bash
cd "C:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/next-signal-bits/video/assets/footage/raw" && ffmpeg -y -f gdigrab -framerate 30 -offset_x 0 -offset_y 0 -video_size 1920x1080 -t 15 -i desktop beat2_raw.mp4
```

(Adjust `-t` per beat's target duration from §4 plus 3 seconds of handle on each end, e.g. beat 4's
target is 24s so capture for 30s; trim precisely later in the composition, not in ffmpeg, so nothing is
cut too tight if a real run takes a little longer than the script's estimate.) Repeat for beats 4, 5,
6, 7 with their own actions:

| Beat | Actions to drive in the browser, in order |
|---|---|
| 2 | `navigate` to `/`; `computer` click the Investigate input; `computer` type "CIPLA"; `computer` click the Investigate button; wait 2s for the navigation to `/run/{run_id}` to start |
| 4 | Already on `/run/{DEMO_RUN_ID}` from beat 2 (or navigate there directly if filming out of order); let it run untouched, screenshotting is not needed, only the screen capture, until the stage rail shows at least Discover, Connect, and Calculate as done |
| 5 | `navigate` to `/report/{DEMO_RUN_ID}` once the run finishes; let the page settle 2s before capturing so the fade-in animations are not caught mid-transition |
| 6 | On the report page: `computer` click one number in the discovery's numbers grid; wait for the evidence drawer to open; `computer` click the "Challenge" tab; wait for the ACH matrix to render |
| 7 | `computer` click the "Export" tab or panel; `computer` click "Research paper (PDF)"; wait for the download and for the new tab to open; `computer` scroll the opened PDF tab down past the title and abstract to the first figure |

After each capture, stop the ffmpeg process (it will stop itself at `-t`) and immediately trim handles
with ffmpeg's own copy-mode cut (no re-encode, fast, lossless) once the exact in/out points are chosen
against the captured file:

```bash
ffmpeg -y -i beat2_raw.mp4 -ss 00:00:01.2 -to 00:00:11.8 -c copy beat2.mp4
```

### 7.3 Record and align the narration

This step needs the user's own voice; it cannot be produced by an agent. Hand the user §4's table
(already written above) as the recording brief: 8 takes, one per beat, read calmly at about 164 words
a minute, matching the number-pronunciation guide at the end of §4. Once the 8 files exist at
`assets/voice/raw/S01.* .. S08.*`:

```bash
cd "C:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/next-signal-bits/video"
whisper assets/voice/raw/S01.wav --model small --language en --output_format json --output_dir assets/voice/aligned
```

(repeat per file). Use the word-level timestamps in each resulting `.json` to fill in the word-anchor
events in `scenes.json`, following the exact `{"at": "<word>", "fb": <fallback-seconds>}` pattern
already proven in `eurogrip-case/video/scenes.json` (read that file as the literal template for the
anchor syntax). Every anchor's `fb` value is the script's own estimated per-word timing (word index
divided by the beat's target words-per-second from §4) so the composition still times correctly even
before real audio exists, exactly as Eurogrip's system already does.

### 7.4 Build the compositions

Three cutaway frames (`S01.html`, `S03.html`, `S08.html`) are built natively, GSAP-timed, following
the exact structural conventions in `video/AGENTS.md` (once `hyperframes init` writes it; it will be
near-identical to Eurogrip's own `AGENTS.md`, already read in full during planning): one paused root
GSAP timeline per composition registered on `window.__timelines`, every timed element carrying
`data-start` and `class="clip"`, no `Date.now()`/`Math.random()`/network calls.

- **S01** (titlecard-reveal): wordmark wipe, subtitle fade, team names fade, thesis strap types in
  timed to the narration anchor on "wrong" (the script's last word). Reuse Eurogrip's `S01.html` as
  the structural template; swap in Next Signal's own wordmark text, team names, and thesis line.
- **S03** (grid-card-assemble): six cards in a single row, each popping on the spoken stage name's
  word anchor, built with the same numbered-tile visual language as `round1.html`'s `.stage-row`
  (ink border, bold stage name, small numeral 01 to 06), not a screenshot of that CSS, a fresh HTML/CSS
  build of the same look at video resolution.
- **S08** (titlecard-reveal, closing): "THANK YOU" pop, thesis restatement wipe, then three link rows
  fading in with the same blue-link-and-arrow treatment used in §6.5's `docs/index.html` (`#1D4ED8`
  for the link text, a right-pointing arrow glyph in the same colour), team block, then the
  disclaimer line, held to the end of the clip.

Four live-capture frames (`S02.html` through `S07.html`, skipping none since beat numbering in §4 runs
1 to 8 and frames follow the same numbering) are simple: a full-bleed `<video>` element sourced from
the trimmed beat file, `data-start` matching its place on the timeline, a thin 2px ink border frame
matching the brand's existing panel convention, and a small lower-third caption for the first few
words of that beat's narration, fading out after 3 seconds so it never blocks the live UI underneath.

After every composition edit:

```bash
cd "C:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/next-signal-bits/video" && npm run check
```

Fix every error before moving on (per `video/AGENTS.md`'s own rule, which this plan inherits).

### 7.5 Mix the audio

Lay the 8 narration takes on one voice track in order, trimmed to their beat boundaries. Add a quiet
instrumental bed if the user supplies one (none has been sourced yet; if none exists by render time,
render without a bed rather than inventing one, matching this project's "never fabricate" rule applied
to assets, not just numbers). Duck the bed under the voice by at least 12 dB if a bed exists. No
captions or on-screen subtitles anywhere (matches Eurogrip's own explicit "no subtitles" decision,
which this plan carries over since the brief rewards the visual proof, not read-along text).

### 7.6 Render

```bash
cd "C:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/next-signal-bits/video" && npx hyperframes check
npx hyperframes render
```

If a prior render's transaction folder is stale (a known HyperFrames failure mode: a crashed render
leaves a `.{name}.hf-transaction-*` folder with only an `owner.json` lock and no output, as was found
in the Eurogrip project's own `renders/` folder during this session's exploration), delete that stale
transaction folder before rendering again:

```bash
rm -rf "renders/.video_*.hf-transaction-"*
```

**Phase 2 gate**: a real `renders/*.mp4` file exists, is at or under 125 seconds (2:05, a small buffer
over the 2:00 target), opens and plays correctly (spot check with `ffprobe` for duration and that both
a video and an audio stream are present: `ffprobe -v error -show_entries format=duration -show_entries stream=codec_type renders/<file>.mp4`), and every beat's visual content matches its row in §4's table
when scrubbed at a few timestamps (Read the file is not supported for video; instead extract three
frame stills with ffmpeg at representative timestamps and view them with the Read tool as images:
`ffmpeg -y -ss 00:00:40 -i renders/<file>.mp4 -frames:v 1 check_beat4.png`, one per beat worth
spot-checking).

---

## 8. Phase 3: wire the links onto the Round 1 PDF and the About page

### 8.1 Round 1 PDF footer

Edit `round1/round1.html`'s `.foot` block (currently just the disclaimer and the team/track line) to
add the two new links, styled with the same blue-and-arrow convention as §6.5, sized to fit the
existing 8.8pt-body one-page layout:

```html
<div class="foot">
  <span>Public data only. Not investment advice.</span>
  <span>
    <a href="https://github.com/harshkawatra11/next-signal" style="color:#1D4ED8;text-decoration:none;">GitHub &#8594;</a>
    &nbsp;|&nbsp;
    <a href="https://harshkawatra11.github.io/next-signal/" style="color:#1D4ED8;text-decoration:none;">Research and workbook &#8594;</a>
  </span>
  <span>Next Signal &middot; Team IdeaForge &middot; ATMOS 2026 Track D</span>
</div>
```

Rebuild and re-validate:

```bash
cd "C:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/next-signal-bits/round1" && python build_round1.py
```

Must still print `ROUND1 PASS` (the script's own existing gate: 1 to 2 pages, no em/en dash, no banned
words, every `{{` placeholder resolved, under 3 MB, every link resolves to an https URL, team names
present in the extracted text). If it fails on page count because the footer link row pushed the
document past 2 pages, shrink the footer font to 7pt rather than removing a link.

### 8.2 Web app About page

File: `apps/web/src/app/about/page.tsx` (already a `"use client"` component with a `DataTable` source
catalogue from the earlier work this session). Add a new section after the existing source catalogue,
using the same visual language (the page already imports `DataTable` from `@/components/viz`; for two
simple link rows, a plain styled list is more appropriate than a table). Insert:

```tsx
<section className="mt-10">
  <h2 className="text-lg font-semibold">Research and data</h2>
  <div className="mt-3 space-y-2">
    <a
      href="https://harshkawatra11.github.io/next-signal/Next-Signal-Research-Note-CIPLA.pdf"
      className="flex items-center justify-between border border-rule px-4 py-3 text-ink hover:bg-paper-2"
    >
      <span className="text-blue-700">Research paper (PDF)</span>
      <span className="text-blue-700">&rarr;</span>
    </a>
    <a
      href="https://harshkawatra11.github.io/next-signal/Next-Signal-Model-Workbook-CIPLA.xlsx"
      download
      className="flex items-center justify-between border border-rule px-4 py-3 text-ink hover:bg-paper-2"
    >
      <span className="text-blue-700">Model workbook (XLSX, downloads)</span>
      <span className="text-blue-700">&rarr;</span>
    </a>
    <a
      href="https://github.com/harshkawatra11/next-signal"
      className="flex items-center justify-between border border-rule px-4 py-3 text-ink hover:bg-paper-2"
    >
      <span className="text-blue-700">Source code on GitHub</span>
      <span className="text-blue-700">&rarr;</span>
    </a>
  </div>
</section>
```

Check that `text-blue-700` is an available Tailwind class in this project (it is a standard Tailwind
v4 default colour, not a custom token, so it does not need a new entry in `globals.css`; confirm by
grepping for an existing `text-blue` usage elsewhere, or by running the build and checking it compiles
without an "unknown utility class" warning).

Gate: from `apps/web`, `npm run build`, `npm run lint`, `node scripts/copy-lint.mjs` all clean (the
same three-gate standard every other lane in this project has used).

---

## 9. Verification (definition of done)

1. Phase 0: `/api/llm/selftest` reports `sarvam`; a real CIPLA run yields facts, financials, at least
   one anomaly, and either a discovery or an honest kill log; both the PDF and XLSX export download
   and open correctly. `{DEMO_RUN_ID}` recorded.
2. Phase 1: `github.com/harshkawatra11/next-signal` exists, public, with the secret scan's clean output
   quoted in the report; `harshkawatra11.github.io/next-signal/` serves the landing page; both link
   cards resolve; the workbook link carries `download`.
3. Phase 2: a rendered mp4 exists at or under 125 seconds, has both a video and an audio stream, and
   its five live-capture beats show the real product (not a mock) while its three cutaway beats show
   the exact wording from §4, with no em dash, no exclamation mark, and the blue-and-arrow link
   treatment on the closing card.
4. Phase 3: the Round 1 PDF still passes `build_round1.py`'s own `ROUND1 PASS` gate with the two new
   footer links present and resolving; the web app's About page shows the three new link rows and
   passes its build/lint/copy-lint gates.
5. `grep -rnP "[\x{2013}\x{2014}]"` across `video/`, the edited `round1.html`, `docs/index.html`, and
   the touched `about/page.tsx` prints nothing.
6. No commits carry a `Co-Authored-By` trailer.
7. The finished mp4's file path is handed to the user for them to upload to Google Drive themselves;
   this plan does not publish the video anywhere.
