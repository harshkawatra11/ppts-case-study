# SwasthyaGrid: one-page abstract for Hack@BVP 8.0 (Domain 1, PS6 "The Stockout Shield")

**Plan file:** `C:\Users\harsh\.claude\plans\working-folder-swasthyagrid-gcp-sparkling-elephant.md` (this file; `extract.py`
reads it, so never move or rename it while the build runs).
**Output folder:** `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\swasthyagrid-gcp\hackbvp\` (called HB below).
**Deliverable:** `HB\TeamIdeaForge_SwasthyaGrid_HackBVP8_Abstract.pdf`: exactly one A4 portrait page, vector text, one
clickable link.
**Executors:** two Sonnet sub-agents, one after the other (build, then review); then the orchestrator updates memory.

**Already proven.** On 11 Oct 2026, during planning, these exact files were run end to end in a scratch folder. The
result was `chrome exit 0`, `pages 1`, `size_mm (209.9, 297.0)`, `fill 0.969`, nothing missing, nothing forbidden,
no banned words, no fallback text and `VERIFY PASS`. The render was checked by eye, and the page has about 20px of
vertical slack. The executor reproduces that result; it does not design anything.

---

## 1. Context and locked decisions

Hack@BVP 8.0's first round asks for **a 1-page PDF abstract** covering the problem, the proposed solution, the
approach and the expected impact, aligned to one of the hackathon's problem domains; shortlisted teams advance. The
problem statements are in `swasthyagrid-gcp\PS - Hack@BVP 8.0.md`.

**Domain fit.** Domain 1 (Health and Well Being), **PS6 "The Stockout Shield: Essential Medicine Supply
Optimization"**: "Essential medicines can run out at some healthcare facilities while excess stock at others expires
unused." That is SwasthyaGrid's thesis almost word for word. PS6's six requirements each get a row in the page's
approach table:

| # | PS6 requirement (verbatim) |
|---|---|
| R1 | Forecasts medicine-level demand for each facility |
| R2 | Detects upcoming stockout and expiry risks |
| R3 | Accounts for seasonal trends, outbreaks, and sudden demand changes |
| R4 | Recommends inter-facility transfers and reorder quantities to reduce shortages and wastage |
| R5 | Handles sparse, irregular, and incomplete inventory data |
| R6 | Clearly explains the reason behind every recommendation |

PS6's SDGs are **3, 9 and 12**; the page uses exactly these.

| # | Decision (user-confirmed 11 Oct 2026) | Consequence on the page |
|---|---|---|
| D1 | Team IdeaForge: **Harsh Kawatra** (Delhi Technological University, Team Leader) and **Gursimran Kaur** (Guru Gobind Singh Indraprastha University, Member) | Two-row team table in the header |
| D2 | **Describe the target system only**, with no built-versus-planned split | The approach reads as the proposed design |
| D3 | Only link: the **product walkthrough video** (Drive folder) | One clickable link in the header |
| D4 | Narrative and numbers come from the NEXORA deck (`IdeaForge_NEXORA.pdf`); the technical approach comes from the product-code audit of 11 Oct 2026 | Every number is traced in §2 |
| D5 | A4 portrait, HTML with inline SVG, printed to PDF by headless Chrome | Vector, searchable text; one-page control checked by script |

**Honesty guard (holds even under D2).** The audit found that today's prototype estimates stock-outs with a burn-rate
rule. It has no facility-level expiry logic, no seasonal or outbreak adjustment and no sparse-data handling. Its
transfer and reorder engine and its explanations are real. Because the page presents the target system, **no
sentence may claim anything is live, deployed, running, measured or validated**: no "today", no test counts, no
latency or accuracy figures. Every number is a sourced public figure or a labelled model estimate, and evaluation
goals are written as targets. `verify.py` enforces this with a forbidden-word check.

**Strings that must never appear:** "Gemini 3.8" in any form; "18,000 to 20,000" rabies deaths (a superseded WHO
estimate); "30.84%" (unverified); "Ranvir"; em or en dashes; "?" or "!".

**Skill usage.** Agent 1 invokes `case-competition-deck` in generate mode (non-deck deliverable) as a check:
- section titles are action titles;
- the contrarian answer "move before you buy" leads;
- the moneyshot (1.36 crore) appears as the single dark band.

Agent 2 invokes it in critique mode.

---

## 2. Every number on the page, with its source

| Number | Meaning | Source |
|---|---|---|
| 66 to 80%; 66 / 72.2 / 74.2 / 77 / 80% | key-medicine availability, range and by study | PMC8654139 (Puducherry), PMC10292169 (Gadag) |
| ₹390.26 Cr | drugs expired in Telangana stores, 2016-22 | CAG, Aug 2024 |
| ₹168 Cr | drugs expired in Odisha stores, Apr 2019 to Jan 2025 | CAG, Oct 2026 |
| ₹558 Cr | the two audits combined | arithmetic |
| 43.4% | out-of-pocket share of total health spending, 2022-23 | National Health Accounts 2022-23 |
| 58,000 | snakebite deaths a year in India | eLife 2020 |
| 79.9% | CHC specialist posts unfilled | MoHFW Health Dynamics of India 2022-23 |
| 80%, 733 | eVIN: fewer vaccine stock-outs; districts covered | UNDP India |
| 38,241 | PHCs and CHCs | MoHFW Health Dynamics of India 2022-23 |
| 1.36 crore | stock-out days avoided a year, base case (50% cut) | Team IdeaForge impact model (`swasthyagrid-gcp\nexora\model\model_output.txt`) |
| 81.5 lakh / 2.17 crore | bear (30% cut) / bull (80% cut, eVIN's result) | same model |
| 72.2% → 86.1% | availability before and after the base cut | same model |
| 17,412 | stock-out days avoided per district a year (about 780 districts) | same model |

No other number may appear.

---

## 3. Page design (as built and proven)

Rows, top to bottom (A4, padding 6mm top, 8.5mm sides, 3.5mm bottom; gap between rows `--gap` 1.6mm):

| Row | Block | Content |
|---|---|---|
| A | Header: dark green, gold offset shadow | Kicker "HACK@BVP 8.0 · HEALTH AND WELL BEING · PS6: THE STOCKOUT SHIELD"; title; one-line descriptor; TEAM IDEAFORGE table; walkthrough link |
| B | Thesis bar: pale gold | "Our answer: move before you buy." paragraph, 1.36 crore teaser, 72.2% → 86.1% |
| C | 1 Problem | 4 red KPI tiles · 5-bar availability chart (SVG) · root-cause box with 5 whys |
| D | 2 Solution | 6-step loop (step 5 Approve in gold) · 4 guardrail chips · eVIN precedent |
| E | 3 Approach | R1 to R6 × method × what the officer sees · stack line |
| F | 4 Impact (left) and 5 Evaluation (right) | Dark 1.36 crore band, 3 mini stats, bear/base/bull bars (SVG), SDG 3 · 9 · 12 chips; 5-row evaluation table |
| G | Sources footer | Source groups and the model formula |

**Type for print** (the 22pt floor is for 1920px slides, not A4 print):
- Inter body text at 7.6pt (`--fs`); table text 0.4pt smaller.
- Poppins section titles at 8.3pt, the title at 24pt and the moneyshot at 15pt.
- Sources at 5.8pt.

**Visual system:**
- Palette: green and gold (`#0F7A4D`, `#0A5233`, `#FBBC04`, `#EA4335`).
- Ink outlines on every box, and the sticker shadows from the decks.
- Square corners, except the round step badges.

Section headings are action titles:
1. "Problem: shelves run empty while state stores write off expired stock"
2. "Solution: one district view that forecasts, flags and proposes, and a named officer decides"
3. "Approach: each PS6 requirement mapped to a method and an output"
4. "Expected impact: an estimated 1.36 crore stock-out days avoided a year"
5. "Evaluation: proved on the organisers' data against a burn-rate baseline"

**Known and accepted:**
- Chrome embeds Google's variable Inter font as unnamed Type3 fonts. The text is still vector and searchable, and
  `verify.py` checks for this correctly.
- The arrow glyphs (→) render in an Arial fallback, which `verify.py` allows; no body text may fall back.

---

## 4. Files (Agent 1 creates them with `extract.py`; never retype them)

### 4.1 `extract.py` (the only file typed by hand; save it to HB and run it)

```python
import re, pathlib
PLAN = pathlib.Path(r"C:\Users\harsh\.claude\plans\working-folder-swasthyagrid-gcp-sparkling-elephant.md")
OUT = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\swasthyagrid-gcp\hackbvp")
t = PLAN.read_text(encoding="utf-8")
F = "`" * 3
pairs = re.findall(r"<!-- FILE: ([\w.\-]+) -->\s*\n" + F + r"[a-z]*\n(.*?)" + F, t, re.S)
OUT.mkdir(parents=True, exist_ok=True)
for name, body in pairs:
    (OUT / name).write_text(body, encoding="utf-8", newline="\n")
    print(name, len(body))
print("files", len(pairs))
```

Expected: three lines (`abstract.html`, `build_pdf.py`, `verify.py`), then `files 3`.

### 4.2 `abstract.html`

<!-- FILE: abstract.html -->
```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>SwasthyaGrid · Hack@BVP 8.0 abstract · Team IdeaForge</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
<style>
:root{--fs:7.6pt;--gap:1.6mm;--p:#0F7A4D;--pd:#0A5233;--a:#FBBC04;--al:#EA4335;--tint:#CFEEDB;--at:#FEF7E0;--ink:#0A0A0A;--alt2:#F5F5F5}
@page{size:A4;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:210mm;background:#fff}
body{font-family:'Inter',sans-serif;font-weight:500;color:var(--ink);font-size:var(--fs);line-height:1.3;-webkit-print-color-adjust:exact;print-color-adjust:exact}
b,strong{font-weight:700}
.page{width:210mm;padding:6mm 8.5mm 3.5mm;display:flex;flex-direction:column;gap:var(--gap)}
.hdr{display:grid;grid-template-columns:1fr 92mm;gap:4mm;background:var(--pd);color:#fff;padding:2.8mm 4.2mm;border:.45mm solid var(--ink);box-shadow:1.5mm 1.5mm 0 var(--a)}
.kicker{font-family:'Poppins',sans-serif;font-weight:700;font-size:6.1pt;letter-spacing:.01em;color:var(--a)}
h1{font-family:'Poppins',sans-serif;font-weight:800;font-size:24pt;line-height:1.05;margin:.8mm 0 .8mm}
.tag{font-family:'Poppins',sans-serif;font-weight:600;font-size:7.9pt;line-height:1.28}
.team-t{font-family:'Poppins',sans-serif;font-weight:700;font-size:7.4pt;color:var(--a);margin-bottom:.8mm}
table.team{width:100%;border-collapse:collapse;background:#fff;color:var(--ink);font-size:6.6pt;line-height:1.2}
table.team th{background:var(--tint);font-family:'Poppins',sans-serif;font-weight:700;text-align:left;padding:.5mm 1.2mm;border:.3mm solid var(--ink);white-space:nowrap}
table.team td{padding:.5mm 1.2mm;border:.3mm solid var(--ink);white-space:nowrap}
.link{display:inline-block;margin-top:1.3mm;color:var(--a);font-weight:700;font-size:7.4pt;text-decoration:underline}
.thesis{display:grid;grid-template-columns:1fr auto auto;gap:3mm;align-items:center;background:var(--at);border:.4mm solid var(--ink);padding:1.5mm 3.2mm;box-shadow:1.2mm 1.2mm 0 var(--a)}
.thesis p{font-size:7.7pt;font-weight:600;line-height:1.3}
.bigbox{border-left:.6mm solid var(--a);padding-left:2mm}
.big{font-family:'Poppins',sans-serif;font-weight:800;color:var(--p);font-size:11pt;line-height:1.05;white-space:nowrap}
.big-l{font-size:6.2pt;font-weight:600;max-width:30mm;line-height:1.2}
.sec{border:.4mm solid var(--ink);padding:1.6mm 2.8mm 1.7mm}
.sec h2{font-family:'Poppins',sans-serif;font-weight:700;font-size:8.3pt;color:var(--p);border-bottom:.35mm solid var(--ink);padding-bottom:.8mm;margin-bottom:1.3mm;line-height:1.2}
.n{display:inline-block;background:var(--p);color:#fff;font-size:6.8pt;padding:.1mm 1.3mm;margin-right:1.4mm}
.prob{display:grid;grid-template-columns:62mm 52mm 1fr;gap:3mm;align-items:start}
.kpis{display:grid;grid-template-columns:1fr 1fr;gap:1.3mm}
.kpi{border:.3mm solid var(--ink);padding:.9mm 1.3mm}
.kpi .v{font-family:'Poppins',sans-serif;font-weight:800;font-size:11pt;color:var(--al);line-height:1.1}
.kpi .l{font-size:6.4pt;line-height:1.22}
.chart svg,.scen svg{width:100%;height:auto;display:block}
.cap{font-size:6.3pt;font-weight:600;color:var(--al);margin-top:.4mm;line-height:1.22}
.root{background:var(--al);color:#fff;font-family:'Poppins',sans-serif;font-weight:700;font-size:6.9pt;padding:.9mm 1.5mm;margin-bottom:.9mm;line-height:1.22}
.why ul{list-style:none}
.why li{border:.3mm solid var(--ink);border-left:1.2mm solid var(--al);padding:.4mm 1.2mm;margin-bottom:.7mm;font-size:6.6pt;line-height:1.22;white-space:nowrap}
.flow{display:grid;grid-template-columns:repeat(6,1fr);gap:2.6mm}
.step{border:.3mm solid var(--ink);padding:1mm 1.3mm;position:relative;font-size:6.6pt;line-height:1.25}
.step.hi{background:var(--a)}
.step:not(:last-child)::after{content:"\2192";position:absolute;right:-2.5mm;top:38%;width:2.4mm;text-align:center;font-weight:700;font-size:8pt}
.step .h{font-family:'Poppins',sans-serif;font-weight:700;color:var(--pd);font-size:7.4pt;margin-bottom:.4mm;display:flex;align-items:center}
.badge{display:inline-flex;align-items:center;justify-content:center;width:3.4mm;height:3.4mm;border-radius:50%;background:var(--p);color:#fff;font-size:6pt;margin-right:1mm;font-family:'Poppins',sans-serif;font-weight:700}
.strip{display:flex;flex-wrap:wrap;gap:1.1mm;align-items:center;margin-top:1.3mm}
.chip{border:.3mm solid var(--ink);background:var(--tint);padding:.3mm 1.3mm;font-weight:700;font-size:6.4pt;white-space:nowrap}
.prec{font-size:6.5pt;line-height:1.25}
table.req{width:100%;border-collapse:collapse;font-size:calc(var(--fs) - 0.4pt);line-height:1.25}
table.req th{background:var(--tint);font-family:'Poppins',sans-serif;font-weight:700;text-align:left;padding:.55mm 1.2mm;border:.3mm solid var(--ink);font-size:6.8pt}
table.req td{padding:.55mm 1.2mm;border:.3mm solid var(--ink);vertical-align:top}
table.req tr:nth-child(even) td{background:var(--alt2)}
td.r{font-weight:700;color:var(--pd);width:31mm}
td.o{width:46mm;font-weight:600}
.ev td.r{width:24mm}
.stack{margin-top:1.1mm;font-size:6.4pt;line-height:1.28}
.two{display:grid;grid-template-columns:1fr 1fr;gap:var(--gap)}
.money{background:var(--pd);color:#fff;padding:1.4mm 2.2mm;display:grid;grid-template-columns:auto 1fr;gap:2.4mm;align-items:center;border:.4mm solid var(--ink);box-shadow:1mm 1mm 0 var(--a)}
.money .v{font-family:'Poppins',sans-serif;font-weight:800;font-size:15pt;line-height:1;white-space:nowrap}
.money .l{color:var(--a);font-weight:600;font-size:6.5pt;line-height:1.22}
.mini{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:1.3mm;margin:1.8mm 0 1.2mm}
.mini > div{border:.3mm solid var(--ink);padding:.8mm 1.2mm}
.mv{font-family:'Poppins',sans-serif;font-weight:800;color:var(--p);font-size:9.2pt;line-height:1.1;white-space:nowrap}
.ml{font-size:6.1pt;line-height:1.2}
.sdg{display:flex;flex-wrap:wrap;gap:1.1mm;margin-top:1mm}
.src{font-size:5.8pt;line-height:1.28;color:var(--p);border-top:.35mm solid var(--ink);padding-top:1mm}
</style>
</head>
<body>
<div class="page">

<header class="hdr">
  <div>
    <div class="kicker">HACK@BVP 8.0 · HEALTH AND WELL BEING · PS6: THE STOCKOUT SHIELD</div>
    <h1>SwasthyaGrid</h1>
    <div class="tag">A district medicine engine that forecasts demand at every facility, flags stock-out and expiry risk early, and proposes the transfer or reorder a named officer approves</div>
  </div>
  <div>
    <div class="team-t">TEAM IDEAFORGE</div>
    <table class="team">
      <tr><th>Team member</th><th>Institution</th><th>Role</th></tr>
      <tr><td><b>Harsh Kawatra</b></td><td>Delhi Technological University</td><td>Team Leader</td></tr>
      <tr><td><b>Gursimran Kaur</b></td><td>Guru Gobind Singh Indraprastha University</td><td>Member</td></tr>
    </table>
    <a class="link" href="https://drive.google.com/drive/folders/17kLiFA2hxEaEyMzqQ3xoSuNyD78g82_p?usp=sharing">Watch the product walkthrough ↗</a>
  </div>
</header>

<section class="thesis">
  <p><b>Our answer: move before you buy.</b> Stock-outs and expiry share one cause: nobody sees a district's medicine as one stock. SwasthyaGrid forecasts every shelf and moves surplus and near-expiry stock to where it will be used, before anyone orders more.</p>
  <div class="bigbox"><div class="big">1.36 crore</div><div class="big-l">stock-out days avoided a year, base estimate</div></div>
  <div class="bigbox"><div class="big">72.2% → 86.1%</div><div class="big-l">key-medicine availability</div></div>
</section>

<section class="sec">
  <h2><span class="n">1</span>Problem: shelves run empty while state stores write off expired stock</h2>
  <div class="prob">
    <div class="kpis">
      <div class="kpi"><div class="v">66 to 80%</div><div class="l">of key medicines in stock at public facilities studied</div></div>
      <div class="kpi"><div class="v">₹390.26 Cr</div><div class="l">of drugs expired in Telangana's stores, 2016-22</div></div>
      <div class="kpi"><div class="v">₹168 Cr</div><div class="l">of drugs expired in Odisha's stores, 2019-25</div></div>
      <div class="kpi"><div class="v">43.4%</div><div class="l">of health spending paid out of pocket, often at private chemists</div></div>
    </div>
    <div class="chart">
      <svg viewBox="0 0 220 94" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">
        <text x="4" y="9" font-size="8" font-weight="700" fill="#0F7A4D">KEY-MEDICINE AVAILABILITY, BY STUDY</text>
        <line x1="4" y1="78" x2="216" y2="78" stroke="#0A0A0A" stroke-width="1.2"/>
        <rect x="12" y="38.6" width="26" height="39.4" fill="#EA4335" stroke="#0A0A0A" stroke-width="0.8"/>
        <rect x="54" y="34.9" width="26" height="43.1" fill="#FBBC04" stroke="#0A0A0A" stroke-width="0.8"/>
        <rect x="96" y="33.7" width="26" height="44.3" fill="#FBBC04" stroke="#0A0A0A" stroke-width="0.8"/>
        <rect x="138" y="32.0" width="26" height="46.0" fill="#FBBC04" stroke="#0A0A0A" stroke-width="0.8"/>
        <rect x="180" y="30.3" width="26" height="47.7" fill="#0F7A4D" stroke="#0A0A0A" stroke-width="0.8"/>
        <g font-size="8.5" font-weight="700" text-anchor="middle" fill="#0A0A0A">
          <text x="25" y="35.5">66%</text><text x="67" y="31.8">72.2%</text><text x="109" y="30.6">74.2%</text><text x="151" y="28.9">77%</text><text x="193" y="27.2">80%</text>
        </g>
        <g font-size="8" font-weight="600" text-anchor="middle" fill="#0A0A0A">
          <text x="25" y="88">Low</text><text x="67" y="88">State</text><text x="109" y="88">Gadag</text><text x="151" y="88">Central</text><text x="193" y="88">High</text>
        </g>
      </svg>
      <div class="cap">No study finds availability above 80%. Missing antivenom matters: India records 58,000 snakebite deaths a year.</div>
    </div>
    <div class="why">
      <div class="root">Root cause: stock is recorded, but never seen or moved district-wide</div>
      <ul>
        <li><b>Seen late:</b> HMIS reports monthly, after the shelf empties</li>
        <li><b>No forecast:</b> burn rates, seasons and surges go uncounted</li>
        <li><b>Not moved:</b> surplus at a nearby PHC goes unseen</li>
        <li><b>Not rotated:</b> near-expiry stock never reaches busier PHCs</li>
        <li><b>Hiring is slow:</b> 79.9% of CHC specialist posts sit empty</li>
      </ul>
    </div>
  </div>
</section>

<section class="sec">
  <h2><span class="n">2</span>Solution: one district view that forecasts, flags and proposes, and a named officer decides</h2>
  <div class="flow">
    <div class="step"><div class="h"><span class="badge">1</span>Sense</div>Stock, receipts and issues from existing state exports</div>
    <div class="step"><div class="h"><span class="badge">2</span>Forecast</div>P50 and P90 demand for each facility and medicine</div>
    <div class="step"><div class="h"><span class="badge">3</span>Flag</div>Stock-out risk in the resupply window and units set to expire</div>
    <div class="step"><div class="h"><span class="badge">4</span>Propose</div>Sized transfer, reorder or rotation, with reasons</div>
    <div class="step hi"><div class="h"><span class="badge">5</span>Approve</div>A named officer approves, edits or rejects every move</div>
    <div class="step"><div class="h"><span class="badge">6</span>Learn</div>Receipt is confirmed; outcomes sharpen the next forecast</div>
  </div>
  <div class="strip">
    <span class="chip">Officer approves every move</span>
    <span class="chip">Stock counts only, no patient data</span>
    <span class="chip">State data stays with the state</span>
    <span class="chip">Hindi and English voice for PHC staff</span>
    <span class="prec"><b>Precedent:</b> eVIN cut vaccine stock-outs 80% once stock became visible in 733 districts.</span>
  </div>
</section>

<section class="sec">
  <h2><span class="n">3</span>Approach: each PS6 requirement mapped to a method and an output</h2>
  <table class="req">
    <tr><th>PS6 requirement</th><th>Method</th><th>What the officer sees</th></tr>
    <tr><td class="r">R1 · Demand forecast per facility</td><td>Consumption rebuilt from the stock ledger (opening + receipts − closing). TSB intermittent-demand method for sparse items; a LightGBM quantile model on recent use, season and calendar for the rest.</td><td class="o">P50 and P90 demand; days of cover as a range, e.g. 4.2 days (2.9 at P90)</td></tr>
    <tr><td class="r">R2 · Stock-out and expiry risk</td><td>Chance that P90 demand over the resupply lead time exceeds stock on hand; a first-expiry-first-out batch projection of units still on the shelf at each expiry date.</td><td class="o">A risk band, plus units and ₹ value at risk of expiry</td></tr>
    <tr><td class="r">R3 · Seasons, outbreaks, sudden change</td><td>Monsoon, heat and festival calendar features; IDSP weekly syndromic counts and IMD rain and heat as surge inputs; a CUSUM change-point test on recent consumption.</td><td class="o">The surge raises the forecast itself, and the trigger is named</td></tr>
    <tr><td class="r">R4 · Transfers and reorder quantities</td><td>Min-cost-flow over the district road network (OSRM) that minimises stock-out days, value expired and transport cost. Donors keep 14 days of cover; cold-chain items travel cold; reorders follow an order-up-to rule at P90 lead-time demand.</td><td class="o">Ranked moves, each with quantity, source, km and minutes</td></tr>
    <tr><td class="r">R5 · Sparse, irregular, incomplete data</td><td>Pooling across similar facilities and medicines for thin histories; freshness flags on stale entries; outlier clipping; gaps filled from stock deltas, never invented.</td><td class="o">Confidence that drops when data is thin or stale</td></tr>
    <tr><td class="r">R6 · Explain every recommendation</td><td>The engine writes reason codes (cover, P90 demand, expiry date, donor surplus, distance) and a stated confidence score. Language models only phrase them in Hindi or English; they never compute a number.</td><td class="o">One plain-language reason line on every proposal</td></tr>
  </table>
  <div class="stack"><b>Stack:</b> Python and FastAPI · LightGBM and statsmodels · OR-Tools · OSRM road routes · Next.js dashboard · Firestore · Sarvam voice (saaras STT, Sarvam 105B LLM, bulbul TTS) for Hindi, Hinglish and English · Gemini 3.5 Flash Lite for typed answers</div>
</section>

<div class="two">
  <section class="sec">
    <h2><span class="n">4</span>Expected impact: an estimated 1.36 crore stock-out days avoided a year</h2>
    <div class="money"><div class="v">1.36 crore</div><div class="l">stock-out days avoided a year across 38,241 PHCs and CHCs, base case (half of eVIN's 80% cut)</div></div>
    <div class="mini">
      <div><div class="mv">72.2% → 86.1%</div><div class="ml">key-medicine availability</div></div>
      <div><div class="mv">17,412</div><div class="ml">stock-out days avoided per district a year</div></div>
      <div><div class="mv">₹558 Cr</div><div class="ml">expired in two audited states; rotation targets it</div></div>
    </div>
    <div class="scen">
      <svg viewBox="0 0 290 50" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">
        <g font-size="8" font-weight="700" fill="#0A0A0A">
          <text x="0" y="11">Bear, 30% cut</text><text x="0" y="27">Base, 50% cut</text><text x="0" y="43">Bull, 80% cut</text>
        </g>
        <rect x="70" y="3" width="41.3" height="11" fill="#FBBC04" stroke="#0A0A0A" stroke-width="0.8"/>
        <rect x="70" y="19" width="68.7" height="11" fill="#0F7A4D" stroke="#0A0A0A" stroke-width="0.8"/>
        <rect x="70" y="35" width="110" height="11" fill="#0A5233" stroke="#0A0A0A" stroke-width="0.8"/>
        <g font-size="8" font-weight="700" fill="#0A0A0A">
          <text x="115.3" y="11.5">81.5 lakh</text><text x="142.7" y="27.5">1.36 crore</text><text x="184" y="43.5">2.17 crore</text>
        </g>
      </svg>
    </div>
    <div class="sdg">
      <span class="chip">SDG 3 · medicine access</span>
      <span class="chip">SDG 9 · resilient supply</span>
      <span class="chip">SDG 12 · less waste</span>
    </div>
  </section>
  <section class="sec">
    <h2><span class="n">5</span>Evaluation: proved on the organisers' data against a burn-rate baseline</h2>
    <table class="req ev">
      <tr><th>Test</th><th>How we measure it, and the target</th></tr>
      <tr><td class="r">Forecast accuracy</td><td>Rolling-origin backtest WAPE per facility and medicine; beat the burn-rate baseline on every medicine group</td></tr>
      <tr><td class="r">Calibration</td><td>Weeks with demand at or below the P90 forecast; close to 90%</td></tr>
      <tr><td class="r">Stock-outs and expiry</td><td>Replay held-out months with and without the engine's moves; fewer stock-out days and less ₹ expired than baseline</td></tr>
      <tr><td class="r">Explanations</td><td>Proposals with a reason and a confidence score; 100%</td></tr>
      <tr><td class="r">New shock</td><td>Organiser-injected surge or missing-data block; the forecast adjusts within one review cycle</td></tr>
    </table>
  </section>
</div>

<footer class="src"><b>Sources:</b> availability, PMC8654139 and PMC10292169 · expiry, CAG Telangana (Aug 2024) and CAG Odisha (Oct 2026) · out-of-pocket share, NHA 2022-23 · snakebite, eLife 2020 · facilities and specialist posts, MoHFW HDI 2022-23 · eVIN, UNDP India. <b>Impact model:</b> 38,241 facilities × 7 tracer medicines × 365 days × 27.8% unavailability × a 30%, 50% or 80% cut (80% is eVIN's result); about 780 districts. Estimates, not measured results.</footer>

</div>
</body>
</html>
```

### 4.3 `build_pdf.py`

<!-- FILE: build_pdf.py -->
```python
"""Print abstract.html to a one-page A4 PDF with headless Chrome. Run: python build_pdf.py"""
import pathlib, shutil, subprocess
HERE = pathlib.Path(__file__).resolve().parent
HTML = HERE / "abstract.html"
PDF = HERE / "TeamIdeaForge_SwasthyaGrid_HackBVP8_Abstract.pdf"
candidates = [shutil.which("chrome"), r"C:\Program Files\Google\Chrome\Application\chrome.exe",
              r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"]
chrome = next((c for c in candidates if c and pathlib.Path(c).exists()), None)
assert chrome, "Chrome not found"
if PDF.exists():
    PDF.unlink()
cmd = [chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--run-all-compositor-stages-before-draw",
       "--virtual-time-budget=30000", f"--print-to-pdf={PDF}", HTML.as_uri()]
r = subprocess.run(cmd, capture_output=True, text=True, timeout=240)
print("chrome exit", r.returncode)
print(PDF, PDF.exists() and PDF.stat().st_size)
```

### 4.4 `verify.py`

<!-- FILE: verify.py -->
```python
"""Check the PDF: one A4 page, fonts embedded, link present, page filled, copy rules. Writes preview.png. Run: python verify.py"""
import pathlib, re, fitz
HERE = pathlib.Path(__file__).resolve().parent
PDF = HERE / "TeamIdeaForge_SwasthyaGrid_HackBVP8_Abstract.pdf"
DRIVE = "17kLiFA2hxEaEyMzqQ3xoSuNyD78g82_p"
doc = fitz.open(str(PDF))
page = doc[0]
w_mm, h_mm = page.rect.width / 72 * 25.4, page.rect.height / 72 * 25.4
fonts = sorted({f[3] for f in page.get_fonts(full=True)})
links = [l.get("uri", "") for l in page.get_links()]
pix = page.get_pixmap(dpi=150)
pix.save(str(HERE / "preview.png"))
W, H, N = pix.width, pix.height, pix.n
s = pix.samples
last = 0
for y in range(H - 1, -1, -1):
    if min(s[y * W * N:(y + 1) * W * N]) < 235:
        last = y
        break
fill = last / H
text = " ".join(" ".join(p.get_text() for p in doc).split())
# Chrome embeds the variable Inter font as Type3 (no name); what matters is that no body text falls back to a system font.
fallback = []
for b in page.get_text("dict")["blocks"]:
    for ln in b.get("lines", []):
        for sp in ln["spans"]:
            if re.search(r"Arial|Times|Segoe|Calibri|Helvetica|Courier", sp["font"]) and sp["text"].strip(" \u2192\u2197\u00b7"):
                fallback.append((sp["font"], sp["text"][:24]))
low = text.lower()
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "landscape", "robust",
       "seamless", "holistic", "tapestry", "paradigm", "navigate", "revolutionise", "cutting-edge", "leverage", "empower",
       "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge",
       "harness", "crucial", "pivotal", "furthermore", "moreover"]
MUST = ["HACK@BVP 8.0", "PS6", "SwasthyaGrid", "TEAM IDEAFORGE", "Harsh Kawatra", "Gursimran Kaur", "1.36 crore", "72.2%",
        "86.1%", "81.5 lakh", "2.17 crore", "17,412", "38,241", "₹390.26 Cr", "₹168 Cr", "₹558 Cr", "43.4%", "66 to 80%",
        "79.9%", "58,000", "SDG 3", "SDG 9", "SDG 12", "Watch the product walkthrough", "TSB", "LightGBM", "OSRM", "P90"]
ABSENT_RE = [r"gemini[ -]3\.8", r"\blive\b", r"\btoday\b", r"\bdeployed\b", r"\brunning\b", r"18,000", r"30\.84", r"ranvir",
             r"[\u2014\u2013]", r"\?", r"!"]
res = {
    "pages": doc.page_count,
    "size_mm": (round(w_mm, 1), round(h_mm, 1)),
    "poppins": any("Poppins" in f for f in fonts),
    "inter_embedded": any("Inter" in f for f in fonts) or any(f[2] == "Type3" for f in page.get_fonts(full=True)),
    "fallback_text": fallback,
    "drive_link": any(DRIVE in u for u in links),
    "fill": round(fill, 3),
    "missing": [m for m in MUST if m not in text],
    "present_bad": [p for p in ABSENT_RE if re.search(p, low)],
    "banned": [b for b in BAN if b in low],
}
for k, v in res.items():
    print(k, v)
print("fonts", fonts)
ok = (res["pages"] == 1 and abs(w_mm - 210) < 1 and abs(h_mm - 297) < 1 and res["poppins"] and res["inter_embedded"] and not res["fallback_text"]
      and res["drive_link"] and 0.86 <= fill <= 0.99 and not res["missing"] and not res["present_bad"] and not res["banned"])
print("VERIFY", "PASS" if ok else "FAIL")
```

---

## 5. Fit ladder and fix rules

Expected first-run result: `pages 1`, `fill` about 0.97, `VERIFY PASS`, identical to the planning dry run. If the
machine or network renders differently, the only lever is the `:root` line of `abstract.html` (`--fs`, `--gap`).
Change one value per step, then rebuild and re-verify, and stop at the first PASS.

| Symptom from `verify.py` | Steps, in order |
|---|---|
| `pages` is 2, or `fill` above 0.99 | 1. `--gap:1.3mm` · 2. `--fs:7.4pt` · 3. `--fs:7.2pt` (floor; never lower) |
| `fill` below 0.86 | 1. `--gap:2mm` · 2. `--fs:7.8pt` |
| `poppins` false, `inter_embedded` false, or `fallback_text` not empty (Google Fonts did not load) | Check the internet connection, then edit `--virtual-time-budget=30000` to `60000` in `build_pdf.py` and rebuild once. If it still fails, report; never swap fonts |
| `size_mm` not (210, 297) | Report; do not change the page CSS |
| `drive_link` false | Report; the header `href` must be exactly the Drive URL |
| `missing`, `present_bad` or `banned` not empty | Restore the §4.2 wording (re-run `extract.py`); never invent copy |
| Visual defect in `preview.png` (overlap, clipped text, label on a bar, arrows off the gaps) | Report the region; fix only by the ladder |
| Anything else | Stop; report `STATUS: FAIL` with the printout |

Log every step in `HB\build-log.md` as `--gap 1.6mm → 1.3mm: pages 2 → 1, fill 0.993 → 0.975`.

---

## 6. Execution playbook

Both agents: `subagent_type: "general-purpose"`, `model: "sonnet"`, one after the other.

### 6.1 Agent 1: build

> You are the build agent for a one-page PDF. Read the plan at
> `C:\Users\harsh\.claude\plans\working-folder-swasthyagrid-gcp-sparkling-elephant.md` in full first.
> HB: `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\swasthyagrid-gcp\hackbvp\`.
>
> 1. Invoke the Skill `case-competition-deck` with args `generate mode, non-deck deliverable: one-page hackathon
>    abstract for PS6 Stockout Shield`. Read `references/rhetoric.md`. Check only that the §3 action titles, the "move
>    before you buy" lead and the single moneyshot band are present. Do not rewrite copy.
> 2. Create HB and `HB\build-log.md` titled `# SwasthyaGrid Hack@BVP 8.0 abstract build log`.
> 3. Write plan §4.1 to `HB\extract.py` exactly as shown and run `python "HB\extract.py"`. It must print `files 3`.
>    Never hand-edit `abstract.html` except the `:root` line under §5.
> 4. Run `python "HB\build_pdf.py"`, then `python "HB\verify.py"`. Paste both printouts into the log. The plan's dry
>    run gave `pages 1`, `fill 0.969` and `VERIFY PASS`; expect the same.
> 5. If `VERIFY FAIL`, apply §5 one step at a time, rebuilding and re-verifying after each (at most 5 rebuilds).
> 6. Read `HB\preview.png` and check every row:
>    - A: dark green header with a gold kicker, the 2-row team table and the underlined gold link.
>    - B: pale gold thesis bar with two figures.
>    - C: 4 red tiles, a 5-bar chart and a red root-cause box with 5 lines.
>    - D: 6 steps with arrows in the gaps, and step 5 in gold.
>    - E: the 6-row requirement table and the stack line.
>    - F: the dark 1.36 crore band, 3 mini stats, 3 scenario bars and 3 SDG chips, beside the 5-row evaluation table.
>    - G: the green sources footer, last on the page.
>
>    There must be no overlap and no clipping.
> 7. Append a "Build" section to the log (printouts, ladder steps, visual verdict). Report in at most 12 lines:
>    `STATUS: PASS | PASS WITH RESIDUALS | FAIL`, final `verify.py` values, ladder steps, visual verdict.

### 6.2 Agent 2: review

> You are the review agent. Read the plan (same path) in full, then `HB\build-log.md`. Start only after Agent 1
> reports PASS.
>
> 1. Invoke the Skill `case-competition-deck` with args `critique mode, non-deck deliverable: one-page hackathon
>    abstract for PS6`. Read `references/critique_rubric.md`. Score these 1 to 5: action titles, clarity of the
>    recommendation, quantitative rigour, polish. Confirm that every PS6 requirement R1 to R6 is answered.
> 2. Read `HB\preview.png` and the PDF text
>    (`python -c "import fitz;print(fitz.open(r'HB\TeamIdeaForge_SwasthyaGrid_HackBVP8_Abstract.pdf')[0].get_text())"`,
>    with HB expanded). Check the §1 honesty guard: nothing claims a live, deployed, running, measured or validated
>    result, and every number is in the §2 table.
> 3. You may change wording only in `abstract.html`. A replacement must be the same length or shorter and keep every
>    number. Allowed reasons: an implied measured or live result, a clumsy phrase, a missing hedge. After any change,
>    rebuild; `verify.py` must still print `VERIFY PASS`.
> 4. Append a "Review" section (scores, R1 to R6 coverage, changes as old → new). Report in at most 12 lines.

### 6.3 Orchestrator, after both agents pass

1. Read `HB\preview.png` and the final `verify.py` output once more.
2. Add a short paragraph to
   `C:\Users\harsh\.claude\projects\c--Users-harsh-Desktop-HARSH-PPTS-CASE-STUDY-nsut-innovators-court\memory\project_swasthyagrid_gcp.md`.
   Cover:
   - Hack@BVP 8.0, Domain 1 PS6;
   - the team (Harsh and Gursimran);
   - the target-system framing, chosen by the user;
   - the output path;
   - the build method (HTML to headless Chrome, checked by `verify.py`);
   - Chrome's Type3 embedding of Inter, which is expected;
   - the honesty guard.
3. Tell the user three things:
   - the PDF path, the verify results and the review scores;
   - a reminder that the approach describes forecasting, expiry, outbreak and sparse-data methods the prototype does
     not have yet, which are exactly what to build if the team is shortlisted;
   - a note that `abstract.html` stays in HB for edits, and `python build_pdf.py` plus `python verify.py` rebuild and
     re-check it.

---

## 7. Verification checklist

- [ ] `extract.py` printed `files 3`.
- [ ] `verify.py` printed `VERIFY PASS`: 1 page; A4; Poppins and Inter embedded with no fallback text; the Drive link
      present; fill between 0.86 and 0.99; nothing missing, forbidden or banned.
- [ ] `preview.png` shows rows A to G with no overlap or clipping.
- [ ] The approach table has a row for each of R1 to R6; the SDGs are exactly 3, 9 and 12.
- [ ] No sentence claims a live, deployed, running, measured or validated result.
- [ ] No "Gemini 3.8", no rabies estimate, no "30.84%", no em or en dash.
- [ ] The PDF opens in a viewer and the walkthrough link is clickable.
