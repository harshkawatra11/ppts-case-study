# SwasthyaGrid launch demo video: complete production plan

> **Audience: Sonnet-class executor.** Every creative and technical decision is already made in this document. Your job is to type it in, run it, and check the gates. Do not redesign the story, the look, the timing model or the file layout. Where a detail is genuinely missing, pick the smallest option consistent with this plan and write one line about it in `demo-video/EXECUTION-NOTES.md`.

---

## 0. Context

SwasthyaGrid (repo root `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform`, live at `https://swasthyagrid.vercel.app`) needs a **16:9 launch and demo video of at most 3 minutes 30 seconds** for hackathon judges. The brief the judges score against: a federated AI platform for PHC supply chains, with real-time visibility of stock, beds and staff, demand forecasting, early warnings, and cross-district redistribution.

User requirements (all binding):
- The user's **own voiceover**, recorded from a script in this plan.
- Every screen of the app appears and is scrolled as far as the time allows: Command Centre through the supply chain console, voice, operations pages and the CRM delivery loop.
- The feel of an agency-produced SaaS launch video (Linear, Vercel or Stripe launch style): a calm off-white canvas, the product in a floating browser window, cursor-led interaction, measured zoom-ins, clean callouts, chapter cards, restrained music and burned-in captions.
- Humanised storytelling. **No em dashes or en dashes anywhere** (voiceover text, on-screen text, captions, file content, commit messages). No AI-slop wording. Section 12 lists the banned words and the gate that enforces them.
- The tools: the **/brag** Claude skill (`https://github.com/latent-spaces/brag`), **HyperFrames** (the HTML-to-video engine /brag is built on), **Remotion** and **ffmpeg**.

User decisions already taken:
1. The CRM appears on screen: the facility portal at `http://127.0.0.1:3001` confirms the delivery live.
2. The assistant's real Sarvam AI voice is heard replying in Hindi for about 6 seconds, with the user's narration paused.
3. The end card credits the product only: SwasthyaGrid, the live URL and the GitHub repo. No personal or event names.

### Why the tools split the way they do

Verified facts behind the split:
- /brag writes a creative plan and hands it to HyperFrames. Its duration is strictly **15 to 25 seconds**. It reads code, not screens, and its narration can only be Kokoro TTS. It cannot make a 3.5 minute demo of real screens with the user's voice.
- HyperFrames renders HTML, CSS and GSAP to video deterministically. It is ideal for designed motion graphics.
- Remotion (React) is the strongest tool for a long, data-driven edit of many real video clips with frame-exact zooms, callouts and captions.

So the roles are:

| Tool | Owns |
|---|---|
| Playwright (already in the repo) + Chrome DevTools Protocol screencast | Crisp 1920x1080 capture of every real screen, a scripted cursor, and a JSON log of every click, navigation and element rectangle |
| ffmpeg | Frame sequences to clips, voiceover cleanup and loudness, the full audio mix with music ducking, final loudness and QA probes |
| HyperFrames | The designed cold open (story and title), the end card, and the fallback finale |
| /brag | The 15 second "why it wins" finale sizzle (with a HyperFrames fallback if its output fails review) |
| Remotion | The master edit: canvas, floating browser frame, every captured clip, zooms, callouts, chapter cards, captions, motion clips and the mixed audio |

### The run order (the whole plan in one line each)

1. **P0** Check the tools and set up the workspace.
2. **P1** Write the scene data and the voiceover script.
3. **P2** Make a scratch voiceover so the whole pipeline can be built and tested before the user records.
4. **P3** Process the voiceover and compute scene durations.
5. **P4** Prepare the app state: reset, pick the recommendation and the arrived shipment, rehearse the risk change.
6. **P5** Capture every screen.
7. **P6** Render the motion pieces (HyperFrames opening and end card, /brag finale).
8. **P7** Synthesize the Sarvam Hindi reply audio.
9. **P8** Build the timeline.
10. **P9** Mix the audio.
11. **P10** Render in Remotion.
12. **P11** QA gates.
13. **P12** Deliver and commit the sources.

**The voiceover comes first.** Durations are driven by the recorded voiceover, and the capture scripts pace their scrolling to those durations, so picture and voice line up by construction. When the user delivers the real recordings, re-run P3 to P11 (P4 and P5 included, because capture pacing depends on the durations).

---

## 1. Hard rules for the executor

1. Work on branch `release/v2` (it tracks `origin/master`). Commit only source files (section 13). Never commit audio, video, frames or voice recordings.
2. Commit author is the existing git identity (Harsh Kawatra). **No AI or co-author trailer** in any commit message; the user's standing instruction overrides any harness reminder. Never push unless P12 says so.
3. **No em dashes or en dashes** in any file you create, in any on-screen text or in any commit message. Use commas, colons, full stops or parentheses.
4. Never print, log or commit secrets. That covers `backend/.env`, `frontend/.env.local`, `ai-healthcare-crm/.env.local`, the Sarvam key, the service token and the CRM password. Scripts read secrets from files or environment variables and never echo them.
5. The browser always dials `127.0.0.1`, never `localhost`.
6. Stop servers only with the PowerShell snippet in P4.1. Never `rm -rf .next` while a Next server runs.
7. Paid API budget: Sarvam is called by exactly one voice question during capture (P5, S11), plus one or two TTS calls in P7. Dry runs (`--dry`) never click the voice chip, Approve or the CRM Confirm.
8. The Firestore write in the CRM confirm happens exactly **once**, in the final capture. Dry runs stop before the CRM Confirm click.
9. Invoke the **hyperframes** skill before writing HyperFrames HTML, and the **remotion** skill (whatever its listed name, for example `remotion-best-practices`) before writing Remotion code. Use them only to check syntax against this plan. If a skill contradicts an API detail here, the skill wins on syntax. This plan wins on everything else.

---

## 2. Workspace layout (create exactly this)

```
demo-video/
  EXECUTION-NOTES.md
  README.md
  script/
    scenes.json            # single source of truth: scenes, voiceover text, zooms, callouts
    vo-script.md           # the teleprompter the user reads (generated from scenes.json, also committed)
  tools/
    package.json           # playwright + helpers for all node tools
    scratch-vo.mjs
    process-vo.mjs
    prepare-state.mjs
    capture.mjs
    assemble-clips.mjs
    pick-assets.mjs
    sarvam-reply.py
    build-timeline.mjs
    mix-audio.mjs
    qa.mjs
    lib/text.mjs
  vo/raw/                  # user recordings (gitignored)
  vo/clean/                # processed (gitignored)
  vo/timings.json          # measured durations (gitignored)
  vo/durations.json        # scene durations (gitignored)
  capture/state.json       # gitignored
  capture/raw/<SCENE>/frames/*.jpg, frames.json, events.json   # gitignored
  capture/clips/<SCENE>.mp4                                     # gitignored
  motion/opening/index.html      + assets/logo.png
  motion/endcard/index.html      + assets/logo.png
  motion/finale-fallback/index.html
  motion/out/opening.mp4, endcard.mp4, finale.mp4               # gitignored
  audio/music/bed.(mp3|ogg|wav), audio/sfx/{click,whoosh,chime}.wav, audio/sarvam/reply.wav, audio/mix.wav   # gitignored
  remotion/ (package.json, tsconfig.json, remotion.config.ts, src/**, public/**)  # public/ gitignored
  out/SwasthyaGrid-demo.mp4, SwasthyaGrid-demo.srt, poster.jpg, contact-sheet.jpg, share-copy.txt  # gitignored
```

Append to the repo root `.gitignore`:
```
# demo video media
demo-video/**/node_modules/
demo-video/vo/raw/
demo-video/vo/clean/
demo-video/vo/*.json
demo-video/capture/state.json
demo-video/capture/raw/
demo-video/capture/clips/
demo-video/motion/**/renders/
demo-video/motion/out/
demo-video/audio/
demo-video/remotion/public/
demo-video/remotion/out/
demo-video/out/
brag-output*/
```

---

## 3. The story, the timing budget and the voiceover script

### 3.1 Structure (target 3:26, hard cap 3:30)

| # | Scene | Kind | Screen(s) | Target s | Chapter card |
|---|---|---|---|---|---|
| S00 | Cold open story | HyperFrames `opening` (0 to 15s) | designed | 15 | none |
| S01 | Title | HyperFrames `opening` (15 to 21s) | designed | 6 | none |
| S02 | Command Centre | screen | `/command` | 21 | 01 SEE |
| S03 | Districts | screen | `/districts` then `/districts/district_kota` | 12 | |
| S04 | Facilities | screen | `/facilities`, command palette, `/facilities/kota_phc_4` | 10 | |
| S05 | Geo Intelligence | screen | `/map` | 8 | |
| S06 | Recommendations | screen | `/recommendations` (approve live) | 18 | 02 DECIDE |
| S07 | Dispatch | screen | `/supply` | 14 | 03 MOVE |
| S08 | Shipment tracking | screen | `/supply/shipments/<id>` | 11 | |
| S09 | Fleet and Drivers | screen | `/supply/fleet`, `/supply/drivers` | 10 | |
| S10 | Load Planning and Warehouses | screen | `/supply/planning`, `/supply/warehouses` | 9 | |
| S11 | Voice | screen | `/voice` (live Hindi question, Sarvam audio) | about 22 | 04 ASK |
| S12 | Operations montage | screen | `/inventory`, `/footfall`, `/beds`, `/doctors`, `/diagnostics`, `/analytics` | 15 | 05 OPERATE |
| S13 | Close the loop | screen | CRM `127.0.0.1:3001/dashboard`, then `/facilities/phc_18` | 14 | 06 CLOSE THE LOOP |
| S14 | Why it wins | /brag `finale` | designed | 15 | none |
| S15 | End card | HyperFrames `endcard` | designed | 6 | none |

Screen scene duration = `0.4 s lead + voiceover length + 0.9 s tail`. The budget gate is in P8: total at most 210 s.

### 3.2 The voiceover script (verbatim; these strings go into `scenes.json`)

Pace: about 150 words a minute, conversational, like explaining the product to one person across a table. The "Max s" column is the longest the recording may run; P3 enforces it.

| File | Text | Words | Max s |
|---|---|---|---|
| `S00.wav` | Tuesday morning. A health centre in rural Kota runs out of anti-rabies vaccine. The district office finds out on Friday, from a paper register. Forty minutes away, a warehouse had the stock all along. | 34 | 13.8 |
| `S01.wav` | This is SwasthyaGrid. Built so that Friday never comes. | 9 | 5.0 |
| `S02.wav` | Every morning starts in the Command Centre. Forty facilities, five districts, and the six numbers that matter, right at the top. The map shows where the pressure is. Below, the risk matrix scores every clinic on stock, beds, staffing and diagnostics, so the worst problems stand out. | 48 | 20.0 |
| `S03.wav` | Compare districts side by side. Open Kota, and you get its map, every facility, the footfall forecast and the causes behind each risk. | 23 | 10.8 |
| `S04.wav` | Every clinic has a case file: medicine cover, beds today and next week, doctors, diagnostics, and what's already on its way. | 21 | 8.8 |
| `S05.wav` | Geo Intelligence layers live trucks, warehouses and risk on real district boundaries. | 12 | 6.8 |
| `S06.wav` | When stock runs low, SwasthyaGrid proposes the fix: where the medicine comes from, how much, how long it takes and how sure it is, with every reason written out. Nothing moves until an officer approves. | 36 | 16.7 |
| `S07.wav` | Approval hands off to the supply chain console. A planner picks the right vehicle, refrigerated for vaccines, and a driver on shift. Dispatch tracks every truck on real road routes. | 30 | 12.7 |
| `S08.wav` | Open a shipment for a live ETA, every stage of the journey, the driver, and the cold-chain temperature, minute by minute. | 21 | 9.7 |
| `S09.wav` | Fleet shows what every truck is carrying, pallet by pallet. Drivers shows who's on shift and how many hours they have left. | 22 | 8.7 |
| `S10.wav` | Load planning puts the day on one timeline. Warehouses shows stock, reservations and expiry across every depot. | 17 | 7.7 |
| `S11a.wav` | Or just ask it. In Hindi, Hinglish or English. | 9 | 4.0 |
| `S11b.wav` | The voice agent, built on Sarvam AI, checks the live data first, shows its working, and answers only from what it finds. | 22 | 9.0 |
| `S12.wav` | Underneath sit the operational views: stock cover heatmaps, footfall forecasts, bed pressure, doctor attendance, diagnostics, and analytics that explain why a score moved. Every view works for the whole state or a single district. | 33 | 13.7 |
| `S13.wav` | When the truck arrives, the clinic confirms delivery in its own portal. Stock goes up, and back in the district office, the facility's risk drops. Live, no refresh. | 28 | 12.7 |
| `S13alt.wav` | When the truck arrives, the clinic confirms delivery in its own portal. Stock goes up, and back in the district office, the case file updates. Live, no refresh. | 28 | 12.7 |
| `S14.wav` | Every decision is plain, checkable arithmetic. Each district runs on one shared model, so a new state plugs in without a rebuild. | 22 | 10.0 |
| `S15.wav` | SwasthyaGrid. See it early. Move it fast. Close the loop. | 10 | 5.0 |

`S13alt` is used only if the P4 rehearsal shows the facility's risk level does not change on delivery (it is then true that the stock rises but not that the risk drops). Record both.

### 3.3 Recording guide (put this at the top of `vo-script.md`)

- Quiet room, soft furnishings, phone or USB mic 15 to 20 cm from the mouth, slightly off-axis. Record WAV at 48 kHz if possible. Phone voice memos (`.m4a`) are fine too: P3 converts them.
- One file per row, named exactly as in the table, into `demo-video/vo/raw/`. Leave about half a second of silence at each end. Re-record any take that runs past "Max s".
- Pronunciation: SwasthyaGrid is "SWUS-thyuh grid". Sarvam is "SUR-vum".
- Energy: warm and assured, not a sales voice. Smile on "Built so that Friday never comes" and "Live, no refresh".

---

## P0. Tools and workspace

Run and paste the outputs into `EXECUTION-NOTES.md`:
```bash
node -v                         # must be >= 22
ffmpeg -hide_banner -version | head -1
ffmpeg -hide_banner -filters | grep -E "sidechaincompress|loudnorm|afftdn|silenceremove"   # all four must print
npx --yes hyperframes doctor    # every required line ok (Chrome, FFmpeg, Node)
python --version || backend/.venv/Scripts/python --version
```
Install /brag (either command; the plugin form needs an interactive Claude Code, so the CLI form is used here):
```bash
npx --yes skills add https://github.com/latent-spaces/brag --skill brag
```
Then find where it landed (for P6 and `pick-assets`):
```bash
ls -d ~/.claude/skills/brag ./.claude/skills/brag ~/.agents/skills/brag 2>/dev/null
```
Record the path in `EXECUTION-NOTES.md` as `BRAG_DIR`.

Create the workspace:
```bash
cd "/c/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/ai-healthcare platform"
mkdir -p demo-video/{script,tools/lib,vo/raw,vo/clean,capture/raw,capture/clips,motion/opening/assets,motion/endcard/assets,motion/finale-fallback/assets,motion/out,audio/music,audio/sfx,audio/sarvam,remotion/src/components,remotion/public,out}
cp frontend/public/brand/swasthyagrid-logo.png demo-video/motion/opening/assets/logo.png
cp frontend/public/brand/swasthyagrid-logo.png demo-video/motion/endcard/assets/logo.png
cp frontend/public/brand/swasthyagrid-logo.png demo-video/motion/finale-fallback/assets/logo.png
```
Then apply the `.gitignore` block from section 2.

`demo-video/tools/package.json`:
```json
{
  "name": "swasthyagrid-demo-tools",
  "private": true,
  "type": "module",
  "dependencies": {}
}
```
Then install the same Playwright version the frontend uses (the browsers are already in the shared cache):
```bash
cd demo-video/tools
PW=$(node -p "require('../../frontend/node_modules/@playwright/test/package.json').version")
npm i --save-exact playwright@$PW
```

---

## P1. Scene data

### `demo-video/script/scenes.json` (write exactly)

Rules for this file:
- `zooms` and `callouts` reference **mark keys** that `capture.mjs` records. The timeline places each one at the moment its mark happened in the capture.
- `hold` is in seconds. `scale` is the zoom factor.
- Every `label` is on-screen text, so the dash and banned-word rules apply.

```json
{
  "fps": 30,
  "leadSec": 0.4,
  "tailSec": 0.9,
  "maxTotalSec": 210,
  "chapters": {
    "S02": { "num": "01", "name": "See", "line": "The state at a glance" },
    "S06": { "num": "02", "name": "Decide", "line": "A proposed fix, with its reasons" },
    "S07": { "num": "03", "name": "Move", "line": "The supply chain console" },
    "S11": { "num": "04", "name": "Ask", "line": "Voice, in Hindi or English" },
    "S12": { "num": "05", "name": "Operate", "line": "Every operational view" },
    "S13": { "num": "06", "name": "Close the loop", "line": "Delivery confirmed, risk updated" }
  },
  "vo": {
    "S00": "Tuesday morning. A health centre in rural Kota runs out of anti-rabies vaccine. The district office finds out on Friday, from a paper register. Forty minutes away, a warehouse had the stock all along.",
    "S01": "This is SwasthyaGrid. Built so that Friday never comes.",
    "S02": "Every morning starts in the Command Centre. Forty facilities, five districts, and the six numbers that matter, right at the top. The map shows where the pressure is. Below, the risk matrix scores every clinic on stock, beds, staffing and diagnostics, so the worst problems stand out.",
    "S03": "Compare districts side by side. Open Kota, and you get its map, every facility, the footfall forecast and the causes behind each risk.",
    "S04": "Every clinic has a case file: medicine cover, beds today and next week, doctors, diagnostics, and what's already on its way.",
    "S05": "Geo Intelligence layers live trucks, warehouses and risk on real district boundaries.",
    "S06": "When stock runs low, SwasthyaGrid proposes the fix: where the medicine comes from, how much, how long it takes and how sure it is, with every reason written out. Nothing moves until an officer approves.",
    "S07": "Approval hands off to the supply chain console. A planner picks the right vehicle, refrigerated for vaccines, and a driver on shift. Dispatch tracks every truck on real road routes.",
    "S08": "Open a shipment for a live ETA, every stage of the journey, the driver, and the cold-chain temperature, minute by minute.",
    "S09": "Fleet shows what every truck is carrying, pallet by pallet. Drivers shows who's on shift and how many hours they have left.",
    "S10": "Load planning puts the day on one timeline. Warehouses shows stock, reservations and expiry across every depot.",
    "S11a": "Or just ask it. In Hindi, Hinglish or English.",
    "S11b": "The voice agent, built on Sarvam AI, checks the live data first, shows its working, and answers only from what it finds.",
    "S12": "Underneath sit the operational views: stock cover heatmaps, footfall forecasts, bed pressure, doctor attendance, diagnostics, and analytics that explain why a score moved. Every view works for the whole state or a single district.",
    "S13": "When the truck arrives, the clinic confirms delivery in its own portal. Stock goes up, and back in the district office, the facility's risk drops. Live, no refresh.",
    "S13alt": "When the truck arrives, the clinic confirms delivery in its own portal. Stock goes up, and back in the district office, the case file updates. Live, no refresh.",
    "S14": "Every decision is plain, checkable arithmetic. Each district runs on one shared model, so a new state plugs in without a rebuild.",
    "S15": "SwasthyaGrid. See it early. Move it fast. Close the loop."
  },
  "maxSec": {
    "S00": 13.8, "S01": 5.0, "S02": 20.0, "S03": 10.8, "S04": 8.8, "S05": 6.8, "S06": 16.7, "S07": 12.7,
    "S08": 9.7, "S09": 8.7, "S10": 7.7, "S11a": 4.0, "S11b": 9.0, "S12": 13.7, "S13": 12.7, "S13alt": 12.7,
    "S14": 10.0, "S15": 5.0
  },
  "screenScenes": ["S02", "S03", "S04", "S05", "S06", "S07", "S08", "S09", "S10", "S11", "S12", "S13"],
  "fx": {
    "S02": {
      "callouts": [
        { "key": "kpi", "label": "Six numbers that matter", "hold": 2.6 },
        { "key": "map", "label": "Live district risk", "hold": 2.2 },
        { "key": "matrix", "label": "Every clinic, six dimensions", "hold": 3.6 },
        { "key": "medicine", "label": "Emergency medicine cover", "hold": 2.4 }
      ],
      "zooms": [ { "key": "matrix", "scale": 1.22, "hold": 3.6 } ]
    },
    "S03": {
      "callouts": [
        { "key": "cards", "label": "Five districts, side by side", "hold": 2.2 },
        { "key": "dmap", "label": "Kota, drilled down", "hold": 2.0 },
        { "key": "causal", "label": "The causes behind the risk", "hold": 2.0 }
      ],
      "zooms": []
    },
    "S04": {
      "callouts": [
        { "key": "grid", "label": "All 40 clinics", "hold": 1.6 },
        { "key": "palette", "label": "Jump anywhere with Ctrl K", "hold": 1.4 },
        { "key": "cover", "label": "Cover against 21 days of need", "hold": 2.4 }
      ],
      "zooms": [ { "key": "cover", "scale": 1.18, "hold": 2.4 } ]
    },
    "S05": {
      "callouts": [ { "key": "drawer", "label": "Kota district detail", "hold": 2.4 } ],
      "zooms": []
    },
    "S06": {
      "callouts": [
        { "key": "card", "label": "Reasons and confidence", "hold": 2.6 },
        { "key": "options", "label": "Every option it weighed", "hold": 3.0 },
        { "key": "toast", "label": "A shipment, created on approval", "hold": 2.4 }
      ],
      "zooms": [ { "key": "card", "scale": 1.28, "hold": 2.6 }, { "key": "options", "scale": 1.28, "hold": 3.0 } ]
    },
    "S07": {
      "callouts": [
        { "key": "stats", "label": "Live across the state", "hold": 2.2 },
        { "key": "order", "label": "The shipment we just approved", "hold": 2.6 },
        { "key": "kpis", "label": "Delivery performance", "hold": 2.0 }
      ],
      "zooms": [ { "key": "order", "scale": 1.2, "hold": 2.6 } ]
    },
    "S08": {
      "callouts": [
        { "key": "eta", "label": "Live ETA", "hold": 2.4 },
        { "key": "reefer", "label": "Cold chain, 2 to 8 C", "hold": 2.4 },
        { "key": "events", "label": "Every stage, logged", "hold": 2.0 }
      ],
      "zooms": [ { "key": "eta", "scale": 1.25, "hold": 2.4 } ]
    },
    "S09": {
      "callouts": [
        { "key": "cargo", "label": "Pallet by pallet", "hold": 2.2 },
        { "key": "hours", "label": "Hours left on shift", "hold": 2.0 }
      ],
      "zooms": [ { "key": "cargo", "scale": 1.2, "hold": 2.2 } ]
    },
    "S10": {
      "callouts": [
        { "key": "gantt", "label": "The whole day, one timeline", "hold": 2.2 },
        { "key": "stock", "label": "Stock, reservations, expiry", "hold": 2.0 }
      ],
      "zooms": []
    },
    "S11": {
      "callouts": [
        { "key": "trace", "label": "The data it checked", "hold": 2.6 },
        { "key": "fact", "label": "Answer card from live data", "hold": 3.0 }
      ],
      "zooms": [ { "key": "fact", "scale": 1.22, "hold": 3.0 } ]
    },
    "S12": { "callouts": [], "zooms": [] },
    "S13": {
      "callouts": [
        { "key": "form", "label": "The clinic confirms receipt", "hold": 2.2 },
        { "key": "crm_toast", "label": "Stock updated", "hold": 1.4 },
        { "key": "risk_toast", "label": "Risk improved, live", "hold": 3.0 },
        { "key": "risk_chip", "label": "Case file updated, live", "hold": 3.0 }
      ],
      "zooms": [ { "key": "risk_toast", "scale": 1.3, "hold": 3.0 } ]
    }
  }
}
```

### `demo-video/tools/lib/text.mjs`

```js
export const BANNED = ["seamless", "seamlessly", "revolutionize", "revolutionise", "leverage", "empower", "cutting-edge",
  "game-changer", "game changer", "unlock", "robust", "delve", "elevate", "harness", "transformative",
  "state-of-the-art", "next-generation", "synergy", "unleash", "supercharge", "in today's world"];
export function lintText(label, s) {
  const problems = [];
  if (/[\u2014\u2013]/.test(s)) problems.push(`${label}: contains an em or en dash`);
  for (const w of BANNED) if (s.toLowerCase().includes(w)) problems.push(`${label}: banned word "${w}"`);
  return problems;
}
```

### `vo-script.md`

Write the recording guide (3.3) followed by the table in 3.2, exactly as shown. This file is the teleprompter the user reads from.

---

## P2. Scratch voiceover (Windows SAPI, only fills missing files)

`demo-video/tools/scratch-vo.mjs`:
```js
import fs from "node:fs"; import path from "node:path"; import { execFileSync } from "node:child_process";
const ROOT = path.resolve(import.meta.dirname, "..");
const scenes = JSON.parse(fs.readFileSync(path.join(ROOT, "script/scenes.json"), "utf8"));
const rawDir = path.join(ROOT, "vo/raw");
fs.mkdirSync(rawDir, { recursive: true });
const made = [];
for (const [id, text] of Object.entries(scenes.vo)) {
  const exists = fs.readdirSync(rawDir).some(f => f.replace(/\.[^.]+$/, "") === id);
  if (exists) continue;
  const out = path.join(rawDir, `${id}.wav`).replace(/\//g, "\\");
  const ps = `Add-Type -AssemblyName System.Speech; $s = New-Object System.Speech.Synthesis.SpeechSynthesizer; $s.Rate = 1; $s.SetOutputToWaveFile('${out}'); $s.Speak(@'\n${text}\n'@); $s.Dispose()`;
  execFileSync("powershell", ["-NoProfile", "-Command", ps], { stdio: "inherit" });
  made.push(id);
}
if (made.length) fs.writeFileSync(path.join(rawDir, "SCRATCH.json"), JSON.stringify(made, null, 2));
console.log(made.length ? `scratch VO generated for: ${made.join(", ")}` : "no scratch needed, all recordings present");
```
When the user drops real recordings in, delete the matching `.wav` scratch files and update `SCRATCH.json` (or delete it entirely once every file is real). QA fails the final render while `SCRATCH.json` lists any file, unless `--allow-scratch` is passed.

---

## P3. Process the voiceover and compute durations

`demo-video/tools/process-vo.mjs`:
```js
import fs from "node:fs"; import path from "node:path"; import { execFileSync } from "node:child_process";
const ROOT = path.resolve(import.meta.dirname, "..");
const scenes = JSON.parse(fs.readFileSync(path.join(ROOT, "script/scenes.json"), "utf8"));
const rawDir = path.join(ROOT, "vo/raw"), cleanDir = path.join(ROOT, "vo/clean");
fs.mkdirSync(cleanDir, { recursive: true });
const probe = f => parseFloat(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).toString().trim());
const timings = {}; const problems = [];
for (const id of Object.keys(scenes.vo)) {
  const src = fs.readdirSync(rawDir).find(f => f.replace(/\.[^.]+$/, "") === id && !f.endsWith(".json"));
  if (!src) { problems.push(`missing recording ${id}`); continue; }
  const out = path.join(cleanDir, `${id}.wav`);
  // clean: high-pass, gentle denoise, trim leading and trailing silence, compress, normalise speech loudness
  const af = [
    "highpass=f=80", "afftdn=nf=-25",
    "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05",
    "areverse", "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.08", "areverse",
    "acompressor=threshold=-20dB:ratio=3:attack=10:release=150:makeup=2",
    "loudnorm=I=-16:TP=-1.5:LRA=7"
  ].join(",");
  execFileSync("ffmpeg", ["-y", "-v", "error", "-i", path.join(rawDir, src), "-af", af, "-ar", "48000", "-ac", "1", "-c:a", "pcm_s24le", out]);
  let d = probe(out);
  const max = scenes.maxSec[id];
  if (d > max) {
    const ratio = d / max;
    if (ratio <= 1.06) {
      const tmp = out.replace(".wav", ".tmp.wav");
      execFileSync("ffmpeg", ["-y", "-v", "error", "-i", out, "-af", `atempo=${ratio.toFixed(4)}`, "-c:a", "pcm_s24le", tmp]);
      fs.renameSync(tmp, out); d = probe(out);
      console.log(`${id}: sped up x${ratio.toFixed(3)} to fit ${max}s`);
    } else problems.push(`${id}: ${d.toFixed(2)}s is over the ${max}s limit by more than 6 percent, re-record faster`);
  }
  timings[id] = +d.toFixed(3);
}
fs.writeFileSync(path.join(ROOT, "vo/timings.json"), JSON.stringify(timings, null, 2));
const lead = scenes.leadSec, tail = scenes.tailSec;
const T = id => +(lead + (timings[id] ?? scenes.maxSec[id]) + tail).toFixed(3);
const durations = {
  S02: T("S02"), S03: T("S03"), S04: T("S04"), S05: T("S05"), S06: T("S06"), S07: T("S07"),
  S08: T("S08"), S09: T("S09"), S10: T("S10"),
  S11: 34,   // capture length; the edit length is computed in P8 from the reply time
  S12: T("S12"),
  S13: +(lead + Math.max(timings.S13 ?? 12.7, timings.S13alt ?? 12.7) + tail + 0.6).toFixed(3)
};
fs.writeFileSync(path.join(ROOT, "vo/durations.json"), JSON.stringify(durations, null, 2));
console.log(JSON.stringify({ timings, durations }, null, 2));
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
```
Gate: exits 0, and `vo/durations.json` exists.

---

## P4. Prepare the app state

### P4.1 Bring the stack up (local, not the deployed site)

Why local: the admin reset, the CRM and the service token only work locally, and the captures are the same build as the live site.

1. Stop anything on the three ports (PowerShell):
```powershell
foreach ($p in 8080,3000,3001) { Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue |
  ForEach-Object { $id=$_.OwningProcess; Get-CimInstance Win32_Process | Where-Object { $_.ProcessId -eq $id -or $_.ParentProcessId -eq $id } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue } } }
```
2. Check the service token is configured on both sides **without printing it**. The backend must have `LOGISTICS_SERVICE_TOKEN` and the CRM must have `SWASTHYAGRID_SERVICE_TOKEN`, with equal values:
```bash
node -e "const fs=require('fs');const g=(f,k)=>{const m=fs.readFileSync(f,'utf8').match(new RegExp('^'+k+'=(.*)$','m'));return m?m[1].trim():''};const a=g('backend/.env','LOGISTICS_SERVICE_TOKEN'),b=g('ai-healthcare-crm/.env.local','SWASTHYAGRID_SERVICE_TOKEN');console.log('backend set:',!!a,'crm set:',!!b,'equal:',a===b&&!!a)"
```
If either is unset or they differ, stop and ask the user. Do not generate or write tokens into their env files yourself.
3. Start the backend: `cd backend && source .venv/Scripts/activate && nohup python -m uvicorn app.main:app --host 0.0.0.0 --port 8080 > /tmp/sg_backend.log 2>&1 & disown`
4. Build and start the frontend: `cd frontend && npm run build && (nohup npx next start -p 3000 > /tmp/sg_frontend.log 2>&1 & disown)`
5. Start the CRM: `cd ai-healthcare-crm && (nohup npm run dev > /tmp/sg_crm.log 2>&1 & disown)`
6. In a new command, check health: `curl -s -o /dev/null -w "%{http_code}\n"` against `http://127.0.0.1:8080/health`, `http://127.0.0.1:3000/command` and `http://127.0.0.1:3001/login`. All three must return 200.

### P4.2 `demo-video/tools/prepare-state.mjs`

```js
import fs from "node:fs"; import path from "node:path"; import crypto from "node:crypto";
const ROOT = path.resolve(import.meta.dirname, "..");
const REPO = path.resolve(ROOT, "..");
const API = process.env.API_URL ?? "http://127.0.0.1:8080";
const env = fs.readFileSync(path.join(REPO, "backend/.env"), "utf8");
const TOKEN = (env.match(/^LOGISTICS_SERVICE_TOKEN=(.*)$/m) || [])[1]?.trim();
if (!TOKEN) { console.error("LOGISTICS_SERVICE_TOKEN missing in backend/.env"); process.exit(1); }
const j = async (p, init = {}) => { const r = await fetch(API + p, { ...init, headers: { "content-type": "application/json", ...(init.headers || {}) } }); if (!r.ok) throw new Error(`${p} -> ${r.status} ${await r.text()}`); return r.json(); };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const reset = async () => { await j("/api/v1/logistics/admin/reset", { method: "POST", body: "{}" }); await j("/api/v1/logistics/admin/time-scale", { method: "POST", body: JSON.stringify({ scale: 60 }) }); await sleep(4000); };
const arrivedToPhc18 = async () => {
  const s = await j("/api/v1/logistics/shipments?status=arrived&facility_id=phc_18&limit=10");
  const it = (s.items || []).find(x => x.kind === "replenishment") || (s.items || [])[0];
  if (!it) throw new Error("no arrived shipment to phc_18 after reset");
  return it;
};
const risk = async () => (await j("/api/v1/facilities/phc_18/profile")).risk_level ?? (await j("/api/v1/facilities/phc_18/profile")).facility?.risk_level;

// 1. rehearsal: does confirming the phc_18 delivery change its risk level?
await reset();
let ship = await arrivedToPhc18();
const detail = await j(`/api/v1/logistics/shipments/${ship.id}`);
const before = await risk();
await j(`/api/v1/logistics/shipments/${ship.id}/pod`, { method: "POST", headers: { "X-Service-Token": TOKEN }, body: JSON.stringify({
  pod_id: crypto.randomUUID(), facility_id: "phc_18", confirmed_by: "rehearsal",
  received: (detail.lines || []).map(l => ({ medicine_name: l.medicine_name, units: l.units })), condition: "ok", note: null }) });
await sleep(3000);
const after = await risk();
const RISK_IMPROVES = before !== after;
console.log(`rehearsal: phc_18 risk ${before} -> ${after}; RISK_IMPROVES=${RISK_IMPROVES}`);

// 2. real state for capture
await reset();
ship = await arrivedToPhc18();
const recs = await j("/api/v1/recommendations?status=pending&district_id=district_kota&type=replenishment");
const list = recs.recommendations || recs.items || recs;
const rank = r => (r.priority === "critical" ? 0 : r.priority === "high" ? 1 : 2) + (/ARV|Rabies/i.test(r.medicine_name || r.subject || "") ? -0.5 : 0);
const rec = [...list].sort((a, b) => rank(a) - rank(b))[0];
if (!rec) throw new Error("no pending Kota replenishment recommendation");
const state = { recId: rec.id, recSubject: rec.subject, recFacilityId: rec.target_facility_id, phc18ShipmentId: ship.id, RISK_IMPROVES, preparedAt: new Date().toISOString() };
fs.writeFileSync(path.join(ROOT, "capture/state.json"), JSON.stringify(state, null, 2));
console.log(state);
```
Adjust these field paths once, if needed, after reading one real response with `curl`: the recommendations list key, `risk_level` on the profile, and `lines` on shipment detail. Note any change in `EXECUTION-NOTES.md`.

Gate: `capture/state.json` exists. If `RISK_IMPROVES` is false, P8 uses `S13alt`.

**Run P5 immediately after P4** (within about 3 minutes), so the scenario is fresh and the tick loop is fast. If more time passes, run P4 again.

---

## P5. Capture every screen

### P5.1 How it works (decided)

- **Headed Chromium** (real GPU, for the WebGL orb and the Leaflet maps), viewport 1920x1080, `deviceScaleFactor: 1`, light theme.
- **Frames come from a CDP screencast**: JPEG quality 92, frames arrive whenever the page paints, and each is timestamped. P5.3 turns them into constant 30 fps clips. Text stays crisp and still pages cost nothing.
- **One page session for the whole dashboard run.** Navigation happens by clicking the sidebar with a visible scripted cursor. This is real single-page navigation, so the SWR cache stays warm and nothing flashes.
- A second browser window (separate context) holds the CRM for S13.
- A **fake cursor** is injected (an arrow that follows real `mousemove` events, with a green ripple on click). Scrollbars are hidden.
- Each scene has a length `T` from `vo/durations.json`. Actions fire at fractions of `T`, so scrolling paces itself to the voiceover. Capture runs until `T + 1.2 s` so the edit has room for crossfades.
- The script records `mark` events (an element's rectangle at the moment a callout should appear), `click`, `url` and special events into `events.json`. P8 turns them into frame-exact zooms, callouts, URL bar changes and sound effects.

### P5.2 `demo-video/tools/capture.mjs` (write exactly)

```js
import { chromium } from "playwright";
import fs from "node:fs"; import path from "node:path"; import { execFileSync } from "node:child_process";

const ROOT = path.resolve(import.meta.dirname, "..");
const APP = process.env.APP_URL ?? "http://127.0.0.1:3000";
const CRM = process.env.CRM_URL ?? "http://127.0.0.1:3001";
const API = process.env.API_URL ?? "http://127.0.0.1:8080";
const DRY = process.argv.includes("--dry");
const ONLY = process.argv.slice(2).filter(a => !a.startsWith("--"));
const D = JSON.parse(fs.readFileSync(path.join(ROOT, "vo/durations.json"), "utf8"));
const STATE = JSON.parse(fs.readFileSync(path.join(ROOT, "capture/state.json"), "utf8"));
const RAW = path.join(ROOT, "capture/raw");
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ---------- silent fake microphone, so the voice page never asks for a mic and never hears a beep ----------
const SILENCE = path.join(ROOT, "capture/silence.wav");
if (!fs.existsSync(SILENCE)) execFileSync("ffmpeg", ["-y", "-v", "error", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", "60", SILENCE]);

// ---------- injected cursor and polish ----------
const INIT = `(() => {
  try { localStorage.setItem('sg-theme','light'); localStorage.removeItem('sg-scope'); } catch (e) {}
  const css = document.createElement('style');
  css.textContent = '::-webkit-scrollbar{width:0!important;height:0!important} html{scroll-behavior:auto!important}';
  const add = () => {
    if (document.getElementById('demo-cursor')) return;
    document.documentElement.appendChild(css);
    const c = document.createElement('div'); c.id = 'demo-cursor';
    c.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24"><path d="M4 2 L4 19 L8.5 14.8 L11.4 21.5 L14 20.4 L11.1 13.8 L17.5 13.8 Z" fill="#0f172a" stroke="#ffffff" stroke-width="1.6" stroke-linejoin="round"/></svg>';
    Object.assign(c.style, { position: 'fixed', left: '-100px', top: '-100px', zIndex: '2147483647', pointerEvents: 'none', transform: 'translate(-4px,-3px)', filter: 'drop-shadow(0 2px 5px rgba(15,23,42,.35))' });
    document.documentElement.appendChild(c);
    document.addEventListener('mousemove', e => { c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px'; }, true);
    document.addEventListener('mousedown', e => {
      const r = document.createElement('div');
      Object.assign(r.style, { position: 'fixed', left: (e.clientX - 20) + 'px', top: (e.clientY - 20) + 'px', width: '40px', height: '40px', borderRadius: '50%', border: '3px solid #0f9f7a', zIndex: '2147483646', pointerEvents: 'none', opacity: '0.95', transition: 'transform 450ms ease-out, opacity 450ms ease-out' });
      document.documentElement.appendChild(r);
      requestAnimationFrame(() => { r.style.transform = 'scale(1.9)'; r.style.opacity = '0'; });
      setTimeout(() => r.remove(), 520);
    }, true);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add); else add();
})();`;

// ---------- recorder ----------
class Recorder {
  constructor(page, id) { this.page = page; this.id = id; this.dir = path.join(RAW, id); this.frames = []; this.events = []; }
  async start() {
    fs.rmSync(this.dir, { recursive: true, force: true });
    fs.mkdirSync(path.join(this.dir, "frames"), { recursive: true });
    this.cdp = await this.page.context().newCDPSession(this.page);
    this.t0 = Date.now();
    this.cdp.on("Page.screencastFrame", async f => {
      const t = Date.now() - this.t0;
      const name = String(this.frames.length).padStart(6, "0") + ".jpg";
      if (!DRY) fs.writeFileSync(path.join(this.dir, "frames", name), Buffer.from(f.data, "base64"));
      this.frames.push({ name, t });
      try { await this.cdp.send("Page.screencastFrameAck", { sessionId: f.sessionId }); } catch {}
    });
    this.onNav = fr => { if (fr === this.page.mainFrame()) this.ev("url", { url: fr.url() }); };
    this.page.on("framenavigated", this.onNav);
    await this.cdp.send("Page.startScreencast", { format: "jpeg", quality: 92, maxWidth: 1920, maxHeight: 1080, everyNthFrame: 1 });
    this.ev("url", { url: this.page.url() });
  }
  now() { return Date.now() - this.t0; }
  ev(type, data = {}) { this.events.push({ type, t: this.now(), ...data }); }
  async at(sec) { const w = sec * 1000 - this.now(); if (w > 0) await sleep(w); }
  async stop() {
    await this.cdp.send("Page.stopScreencast").catch(() => {});
    this.page.off("framenavigated", this.onNav);
    const endT = this.now();
    fs.writeFileSync(path.join(this.dir, "frames.json"), JSON.stringify({ endT, frames: this.frames }, null, 1));
    fs.writeFileSync(path.join(this.dir, "events.json"), JSON.stringify({ endT, events: this.events }, null, 1));
    console.log(`${this.id}: ${this.frames.length} frames, ${(endT / 1000).toFixed(1)}s`);
  }
}

// ---------- helpers ----------
const box = async loc => { const b = await loc.boundingBox(); if (!b) throw new Error("no bounding box"); return b; };
async function moveTo(page, loc, steps = 26) { const b = await box(loc); await page.mouse.move(b.x + b.width / 2, b.y + Math.min(b.height / 2, 40), { steps }); }
async function glide(page, x, y, ms) { await page.mouse.move(x, y, { steps: Math.max(8, Math.round(ms / 16)) }); }
async function click(page, rec, loc, { important = false, label = "" } = {}) {
  await loc.scrollIntoViewIfNeeded().catch(() => {});
  const b = await box(loc);
  await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2, { steps: 24 });
  await sleep(160);
  rec.ev("click", { important, label });
  await page.mouse.down(); await sleep(60); await page.mouse.up();
}
async function scrollWindowTo(page, y, ms) {
  await page.evaluate(async ({ y, ms }) => {
    const s = window.scrollY, max = document.documentElement.scrollHeight - innerHeight, tgt = Math.max(0, Math.min(max, y)), t0 = performance.now();
    const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    await new Promise(res => { const step = now => { const p = Math.min(1, (now - t0) / ms); window.scrollTo(0, s + (tgt - s) * ease(p)); p < 1 ? requestAnimationFrame(step) : res(); }; requestAnimationFrame(step); });
  }, { y, ms });
}
async function scrollToLoc(page, loc, ms = 1000) {
  const y = await loc.evaluate(el => { const r = el.getBoundingClientRect(); const h = Math.min(r.height, innerHeight - 140); return window.scrollY + r.top - Math.max(90, (innerHeight - h) / 2); });
  await scrollWindowTo(page, y, ms);
}
async function scrollToBottom(page, ms) { await scrollWindowTo(page, 1e7, Math.max(400, ms)); }
async function scrollInto(loc, ms = 800) { await loc.evaluate(el => el.scrollIntoView({ block: "center", behavior: "smooth" })); await sleep(ms); }
// rectangle of the card that owns an eyebrow or heading text (walks up to the bordered, rounded container)
async function cardRect(page, text) {
  return page.evaluate(text => {
    const els = [...document.querySelectorAll("p,span,h1,h2,h3,h4,div,dt,label")].filter(e => e.childElementCount === 0 && e.textContent.trim() === text && e.getBoundingClientRect().height > 0);
    const e = els[0]; if (!e) return null;
    let n = e;
    while (n && n !== document.body) {
      const cs = getComputedStyle(n), r = n.getBoundingClientRect();
      if (parseFloat(cs.borderTopWidth) > 0 && parseFloat(cs.borderTopLeftRadius) >= 6 && r.height > 120) return { x: r.x, y: r.y, w: r.width, h: r.height, top: r.top + scrollY };
      n = n.parentElement;
    }
    const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height, top: r.top + scrollY };
  }, text);
}
async function scrollToCard(page, text, ms = 1000) {
  const r = await cardRect(page, text); if (!r) return null;
  await scrollWindowTo(page, r.top - Math.max(90, (1080 - Math.min(r.h, 940)) / 2), ms);
  return cardRect(page, text);
}
async function mark(rec, key, locOrRect) {
  let rect = null;
  try {
    if (locOrRect && typeof locOrRect.boundingBox === "function") { const b = await locOrRect.boundingBox(); if (b) rect = { x: b.x, y: b.y, w: b.width, h: b.height }; }
    else if (locOrRect) rect = { x: locOrRect.x, y: locOrRect.y, w: locOrRect.w, h: locOrRect.h };
  } catch {}
  if (rect) { rect.y = Math.max(4, rect.y); rect.h = Math.min(rect.h, 1076 - rect.y); }
  rec.ev("mark", { key, rect });
  if (!rect) console.warn(`mark ${key}: element not found`);
}
const nav = page => page.locator('nav[aria-label="Primary"]');
async function navTo(page, rec, label, urlRe, readyLoc) {
  await click(page, rec, nav(page).getByRole("link", { name: new RegExp("^" + label) }).first(), { label });
  await page.waitForURL(urlRe, { timeout: 15000 });
  await readyLoc.first().waitFor({ state: "visible", timeout: 20000 });
  await sleep(500);
}
const tid = (page, id) => page.getByTestId(id);
async function palette(page, rec, query, urlRe) {
  rec.ev("click", { important: false, label: "ctrl+k" });
  await page.keyboard.press("Control+K");
  const input = page.getByRole("combobox", { name: "Search pages, districts, facilities, shipments" });
  await input.waitFor({ state: "visible", timeout: 5000 });
  await input.pressSequentially(query, { delay: 70 });
  await sleep(450);
  await mark(rec, "palette", page.locator('[role="dialog"]').last());
  await sleep(700);
  await page.keyboard.press("Enter");
  await page.waitForURL(urlRe, { timeout: 10000 });
  await sleep(500);
}

// ---------- scenes ----------
let SHIP = null; // shipment created by the S06 approval
const shipInfo = async id => { try { return await (await fetch(`${API}/api/v1/logistics/shipments/${id}`)).json(); } catch { return null; } };

const SCENES = {
  async S02(page, rec, T) {
    const kpi = tid(page, "kpi-band");
    const kb = await box(kpi);
    await glide(page, kb.x + 80, kb.y + kb.height / 2, 700);
    await rec.at(0.15 * T); await mark(rec, "kpi", kpi);
    await glide(page, kb.x + kb.width - 80, kb.y + kb.height / 2, 0.18 * T * 1000);
    await rec.at(0.40 * T); await moveTo(page, tid(page, "card-map")); await mark(rec, "map", tid(page, "card-map"));
    await rec.at(0.52 * T); await scrollToLoc(page, tid(page, "card-facility-matrix"), 1200);
    await rec.at(0.57 * T); await mark(rec, "matrix", tid(page, "card-facility-matrix"));
    await rec.at(0.78 * T); await moveTo(page, tid(page, "card-medicine-matrix")); await mark(rec, "medicine", tid(page, "card-medicine-matrix"));
    await rec.at(0.90 * T); await scrollToBottom(page, 0.1 * T * 1000);
  },
  async S03(page, rec, T) {
    await navTo(page, rec, "District Comparison", /\/districts(\?|$)/, page.locator('section[aria-label="District small multiples"]'));
    await rec.at(0.18 * T); const sm = page.locator('section[aria-label="District small multiples"]');
    await scrollToLoc(page, sm, 900); await mark(rec, "cards", sm);
    await rec.at(0.42 * T);
    const card = page.getByLabel("Kota district card");
    await click(page, rec, card.locator("a").first().or(card).first(), { label: "Kota" });
    try { await page.waitForURL(/\/districts\/district_kota/, { timeout: 3000 }); }
    catch { await page.goto(`${APP}/districts/district_kota`); }
    await page.getByText("District map", { exact: true }).first().waitFor({ timeout: 15000 });
    await rec.at(0.60 * T); await mark(rec, "dmap", await cardRect(page, "District map"));
    await rec.at(0.74 * T); await mark(rec, "causal", await scrollToCard(page, "Causal chain", 1000));
    await rec.at(0.90 * T); await scrollToBottom(page, 0.09 * T * 1000);
  },
  async S04(page, rec, T) {
    await navTo(page, rec, "Facilities", /\/facilities(\?|$)/, tid(page, "facility-grid"));
    await rec.at(0.14 * T); await mark(rec, "grid", tid(page, "facility-grid"));
    await rec.at(0.26 * T);
    try { await palette(page, rec, "Kota-4", /\/facilities\/kota_phc_4/); }
    catch { await page.keyboard.press("Escape"); await click(page, rec, tid(page, "facility-tile").filter({ hasText: "Kota-4" }).first()); await page.waitForURL(/\/facilities\/kota_phc_4/); }
    await page.locator('section[aria-label="Case header"]').waitFor({ timeout: 15000 });
    await rec.at(0.55 * T); await mark(rec, "cover", await scrollToCard(page, "Medicine cover against 21 days", 900));
    await rec.at(0.80 * T); await scrollToCard(page, "Beds: now, tomorrow, next week", 800);
    await rec.at(0.92 * T); await scrollToCard(page, "Inbound shipments", 600);
  },
  async S05(page, rec, T) {
    await navTo(page, rec, "Geo Intelligence", /\/map/, tid(page, "base-map"));
    await rec.at(0.22 * T); await click(page, rec, page.getByLabel("Active routes"), { label: "Active routes" });
    await rec.at(0.45 * T); await click(page, rec, page.getByRole("button", { name: "Open drawer for Kota District" }), { label: "Kota drawer" });
    const drawer = page.locator('aside[aria-label="Selection details"]');
    await drawer.waitFor({ timeout: 8000 }); await sleep(300);
    await mark(rec, "drawer", drawer);
  },
  async S06(page, rec, T) {
    await navTo(page, rec, "Recommendations", /\/recommendations/, tid(page, "decision-board"));
    const id = STATE.recId;
    const card = tid(page, `rec-${id}`);
    await rec.at(0.12 * T); await scrollInto(card, 900); await moveTo(page, card);
    await rec.at(0.20 * T); await mark(rec, "card", card);
    await rec.at(0.38 * T); await click(page, rec, card.getByRole("button", { name: "Options considered" }), { label: "Options" });
    await tid(page, `options-${id}`).waitFor({ timeout: 5000 }); await scrollInto(card, 500);
    await mark(rec, "options", tid(page, `options-${id}`));
    await rec.at(0.62 * T); await click(page, rec, tid(page, `approve-${id}`), { label: "Approve" });
    await tid(page, `confirm-approve-${id}`).waitFor({ timeout: 5000 });
    await rec.at(0.72 * T);
    if (DRY) { await page.keyboard.press("Escape"); return; }
    await click(page, rec, tid(page, `confirm-approve-${id}`), { important: true, label: "Confirm approve" });
    const toast = page.locator('div[aria-live="polite"]').getByText(/Approved\. Shipment/).first();
    await toast.waitFor({ timeout: 10000 });
    const txt = await toast.innerText();
    SHIP = (txt.match(/SHP-\d+/) || [])[0] || null;
    rec.ev("approve_toast", { ship: SHIP });
    await mark(rec, "toast", toast.locator("xpath=ancestor::div[contains(@class,'rounded')][1]").first());
    fs.writeFileSync(path.join(ROOT, "capture/state.json"), JSON.stringify({ ...STATE, SHIP }, null, 2));
  },
  async S07(page, rec, T) {
    await navTo(page, rec, "Dispatch", /\/supply(\?|$)/, tid(page, "orders-list"));
    await rec.at(0.14 * T); await mark(rec, "stats", tid(page, "map-stats"));
    await rec.at(0.34 * T);
    const row = SHIP ? page.getByRole("button", { name: `Select ${SHIP} on the map` }) : tid(page, "orders-list").getByRole("button").first();
    const target = (await row.count()) ? row.first() : tid(page, "orders-list").getByRole("button").first();
    await scrollInto(target, 700); await click(page, rec, target, { label: "select order" });
    await sleep(600); await mark(rec, "order", target);
    await rec.at(0.62 * T); await moveTo(page, tid(page, "sim-clock"));
    await rec.at(0.74 * T); await scrollToLoc(page, tid(page, "kpi-band").last(), 1000); await mark(rec, "kpis", tid(page, "kpi-band").last());
  },
  async S08(page, rec, T) {
    await scrollWindowTo(page, 0, 500);
    const open = SHIP ? page.getByRole("button", { name: `Open tracking for ${SHIP}` }) : page.getByRole("button", { name: /^Open tracking for / });
    const target = (await open.count()) ? open.first() : page.getByRole("button", { name: /^Open tracking for / }).first();
    await scrollInto(target, 500); await click(page, rec, target, { label: "open tracking" });
    await page.waitForURL(/\/supply\/shipments\//, { timeout: 10000 });
    await tid(page, "eta-headline").waitFor({ timeout: 15000 }); await sleep(400);
    await rec.at(0.18 * T); await mark(rec, "eta", tid(page, "eta-headline"));
    await rec.at(0.45 * T);
    const reefer = tid(page, "reefer");
    if (await reefer.count()) { await scrollToLoc(page, reefer, 900); await mark(rec, "reefer", reefer); }
    else { await mark(rec, "reefer", await scrollToCard(page, "Vehicle", 900)); }
    await rec.at(0.72 * T); await scrollToLoc(page, tid(page, "event-log"), 900); await mark(rec, "events", tid(page, "event-log"));
  },
  async S09(page, rec, T) {
    const info = SHIP ? await shipInfo(SHIP) : null;
    await navTo(page, rec, "Fleet", /\/supply\/fleet/, page.getByRole("listbox", { name: "Vehicles" }));
    if (info?.vehicle?.registration) { const s = page.getByLabel("Search vehicles"); await click(page, rec, s); await s.pressSequentially(info.vehicle.registration.slice(0, 7), { delay: 60 }); await sleep(300); }
    await click(page, rec, page.getByRole("listbox", { name: "Vehicles" }).getByRole("option").first(), { label: "vehicle" });
    await rec.at(0.24 * T);
    const cargo = page.locator('svg[viewBox="0 0 640 220"]').first();
    if (await cargo.count()) { await scrollToLoc(page, cargo, 700); await mark(rec, "cargo", cargo); } else await mark(rec, "cargo", null);
    await rec.at(0.50 * T);
    await navTo(page, rec, "Drivers", /\/supply\/drivers/, page.getByRole("listbox", { name: "Drivers" }));
    if (info?.driver?.name) { const s = page.getByLabel("Search drivers"); await click(page, rec, s); await s.pressSequentially(info.driver.name.split(" ")[0], { delay: 60 }); await sleep(300); }
    await click(page, rec, page.getByRole("listbox", { name: "Drivers" }).getByRole("option").first(), { label: "driver" });
    await rec.at(0.74 * T); await mark(rec, "hours", await cardRect(page, "Hours today"));
  },
  async S10(page, rec, T) {
    const gantt = page.getByRole("img", { name: "Fleet schedule for the simulated day" });
    await navTo(page, rec, "Load Planning", /\/supply\/planning/, gantt);
    await rec.at(0.16 * T); await mark(rec, "gantt", gantt);
    await rec.at(0.50 * T);
    await navTo(page, rec, "Warehouses", /\/supply\/warehouses/, page.getByRole("listbox", { name: "Warehouses" }));
    const s = page.getByLabel("Search warehouses"); await click(page, rec, s); await s.pressSequentially("Kota", { delay: 60 }); await sleep(300);
    await click(page, rec, page.getByRole("listbox", { name: "Warehouses" }).getByRole("option").first(), { label: "warehouse" });
    await rec.at(0.76 * T); await mark(rec, "stock", await scrollToCard(page, "Stock cover", 700));
  },
  async S11(page, rec, T) {
    await navTo(page, rec, "Voice Control Room", /\/voice/, page.getByRole("group", { name: "Suggested prompts" }));
    await rec.at(3.6);
    if (DRY) return;
    const chip = page.getByRole("group", { name: "Suggested prompts" }).getByRole("button", { name: "कोटा में अभी क्या हाल है?" });
    await click(page, rec, chip, { important: true, label: "Hindi question" });
    const reply = page.locator('li[data-speaker]:not([data-speaker="officer"])').last();
    await page.waitForFunction(() => { const l = [...document.querySelectorAll('li[data-speaker]:not([data-speaker="officer"])')].pop(); return l && l.innerText.replace(/\.\.\./g, "").trim().length > 12; }, null, { timeout: 30000 });
    rec.ev("reply_start");
    const trace = page.locator('ul[aria-label="Data checked"]').last();
    try { await trace.waitFor({ timeout: 8000 }); await mark(rec, "trace", trace); } catch {}
    const fact = page.getByTestId("fact-card").last();
    try { await fact.waitFor({ timeout: 20000 }); await scrollInto(fact, 600); await mark(rec, "fact", fact); } catch {}
    let last = "", stable = 0;
    while (stable < 3 && rec.now() < (T - 2) * 1000) { await sleep(500); const cur = await reply.innerText(); stable = cur === last ? stable + 1 : 0; last = cur; }
    fs.mkdirSync(path.join(RAW, "S11"), { recursive: true });
    fs.writeFileSync(path.join(RAW, "S11", "reply.txt"), last, "utf8");
  },
  async S12(page, rec, T) {
    const pages = [
      ["Inventory", /\/inventory/, "Stock cover heatmap"],
      ["Footfall", /\/footfall/, "Footfall forecast studio"],
      ["Beds", /\/beds/, "Bed capacity board"],
      ["Doctors", /\/doctors/, "Roster and attendance"],
      ["Diagnostics", /\/diagnostics/, "Test availability matrix"],
      ["Analytics", /\/analytics/, null]
    ];
    const seg = T / pages.length;
    for (let i = 0; i < pages.length; i++) {
      const [label, re, h1] = pages[i];
      await rec.at(i * seg);
      const ready = h1 ? page.getByRole("heading", { name: h1 }) : page.locator("main h1");
      await navTo(page, rec, label, re, ready);
      rec.ev("montage", { label });
      if (i === 4) { // show the district scope switch once
        await click(page, rec, page.getByRole("button", { name: "District scope" }).first(), { label: "scope" });
        await click(page, rec, page.getByRole("option", { name: "Kota" }), { label: "Kota" });
        await sleep(500);
      }
      await scrollToBottom(page, (seg - 1.1) * 1000 - (i === 4 ? 1600 : 0));
    }
  }
};

// ---------- S13: CRM confirm, then the dashboard reacts ----------
async function S13(page, crm, T) {
  // position the dashboard on the receiving facility before recording
  await palette(page, { ev() {} }, "Rural-14", /\/facilities\/phc_18/).catch(async () => { await page.goto(`${APP}/facilities/phc_18`); });
  await page.locator('section[aria-label="Case header"]').waitFor({ timeout: 15000 });
  await crm.bringToFront();
  await crm.goto(`${CRM}/dashboard`); await crm.getByText("Incoming Deliveries").first().waitFor({ timeout: 20000 });
  await crm.getByRole("button", { name: "Confirm receipt" }).first().waitFor({ timeout: 20000 });
  await crm.evaluate(() => window.scrollTo(0, 0));
  const A = new Recorder(crm, "S13a"); await A.start();
  await A.at(0.5); await mark(A, "incoming", await cardRect(crm, "Incoming Deliveries"));
  await A.at(0.10 * T); const btn = crm.getByRole("button", { name: "Confirm receipt" }).first();
  await scrollInto(btn, 600); await click(crm, A, btn, { label: "Confirm receipt" });
  await A.at(0.20 * T); await mark(A, "form", btn.locator("xpath=ancestor::*[.//button[normalize-space()='Confirm']][1]"));
  await A.at(0.34 * T);
  if (!DRY) {
    await click(crm, A, crm.getByRole("button", { name: "Confirm", exact: true }), { important: true, label: "Confirm" });
    A.ev("confirm_click");
    await crm.getByText("Receipt confirmed, stock updated.").waitFor({ timeout: 15000 });
    await mark(A, "crm_toast", crm.getByText("Receipt confirmed, stock updated."));
  }
  await sleep(1100);
  await A.stop();
  await page.bringToFront();
  const B = new Recorder(page, "S13b"); await B.start();
  const toast = page.locator('div[aria-live="polite"]').getByText(/improved from/).first();
  let found = false;
  try { await toast.waitFor({ timeout: 3500 }); found = true; } catch {}
  B.ev("risk_toast_found", { found });
  if (found) await mark(B, "risk_toast", toast.locator("xpath=ancestor::div[contains(@class,'rounded')][1]").first());
  else await mark(B, "risk_chip", page.locator('section[aria-label="Case header"]'));
  const remain = T - A.endT / 1000;
  await B.at(Math.max(4, remain) + 1.2);
  await B.stop();
}

// ---------- main ----------
const browser = await chromium.launch({
  headless: false,
  args: [
    "--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream", `--use-file-for-fake-audio-capture=${SILENCE}`,
    "--disable-backgrounding-occluded-windows", "--disable-renderer-backgrounding", "--disable-background-timer-throttling",
    "--force-device-scale-factor=1", "--hide-scrollbars"
  ]
});
const ctxOpts = { viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1, colorScheme: "light" };
const ctx = await browser.newContext({ ...ctxOpts, permissions: ["microphone"] });
await ctx.addInitScript(INIT);
const page = await ctx.newPage();
const crmCtx = await browser.newContext(ctxOpts);
await crmCtx.addInitScript(INIT);
const crm = await crmCtx.newPage();

// CRM login (password from the environment, never printed); falls back to a manual login
await crm.goto(`${CRM}/login`);
if (process.env.CRM_DEMO_PASSWORD) {
  await crm.locator('input[autocomplete="username"]').fill("phc-rural-14");
  await crm.locator('input[type="password"]').fill(process.env.CRM_DEMO_PASSWORD);
  await crm.getByRole("button", { name: "Sign in" }).click();
} else console.log("Log in to the CRM window as phc-rural-14 (3 minutes)...");
await crm.waitForURL(/\/dashboard/, { timeout: 180000 });

// warm-up: visit every tab once through single-page navigation so data is cached
await page.goto(`${APP}/command`);
await tid(page, "kpi-band").waitFor({ timeout: 30000 });
const warm = { ev() {} };
for (const [label, re] of [["Voice Control Room", /\/voice/], ["Recommendations", /\/recommendations/], ["District Comparison", /\/districts/], ["Facilities", /\/facilities/], ["Geo Intelligence", /\/map/], ["Dispatch", /\/supply(\?|$)/], ["Fleet", /fleet/], ["Drivers", /drivers/], ["Load Planning", /planning/], ["Warehouses", /warehouses/], ["Inventory", /inventory/], ["Footfall", /footfall/], ["Beds", /beds/], ["Doctors", /doctors/], ["Diagnostics", /diagnostics/], ["Analytics", /analytics/], ["Command Centre", /\/command/]]) {
  await nav(page).getByRole("link", { name: new RegExp("^" + label) }).first().click();
  await page.waitForURL(re, { timeout: 15000 }); await sleep(900);
}
await scrollWindowTo(page, 0, 10); await page.mouse.move(1500, 700); await sleep(1500);

for (const id of ["S02", "S03", "S04", "S05", "S06", "S07", "S08", "S09", "S10", "S11", "S12"]) {
  if (ONLY.length && !ONLY.includes(id)) continue;
  const T = D[id];
  const rec = new Recorder(page, id);
  await rec.start();
  try { await SCENES[id](page, rec, T); } catch (e) { console.error(`${id} failed: ${e.message}`); rec.ev("error", { message: e.message }); }
  await rec.at(T + 1.2);
  await rec.stop();
}
if (!ONLY.length || ONLY.includes("S13")) await S13(page, crm, D.S13);
await browser.close();
```

Run order:
1. A selector smoke test, which touches no paid APIs or data: `node tools/capture.mjs --dry`. Every scene must log frames with no `failed:` lines. Fix selectors if needed, record each fix in `EXECUTION-NOTES.md`, and re-run.
2. Re-run P4, so the state is fresh after the dry run.
3. The real run: `CRM_DEMO_PASSWORD=... node tools/capture.mjs`. Set the environment variable in the user's own terminal, or leave it unset and let the user log in by hand in the CRM window.
4. To redo a single scene: re-run P4, then `node tools/capture.mjs S07`. S07 to S10 depend on `SHIP`, which S06 sets in memory, so when redoing S07 to S10 run `node tools/capture.mjs S06 S07 S08 S09 S10`. S13 can only be redone once more, because the CRM writes a delivery record to Firestore (see risk R6).

### P5.3 `demo-video/tools/assemble-clips.mjs` (frames to constant 30 fps clips)

```js
import fs from "node:fs"; import path from "node:path"; import { execFileSync } from "node:child_process";
const ROOT = path.resolve(import.meta.dirname, "..");
const RAW = path.join(ROOT, "capture/raw"), OUT = path.join(ROOT, "capture/clips");
fs.mkdirSync(OUT, { recursive: true });
for (const id of fs.readdirSync(RAW)) {
  const fj = path.join(RAW, id, "frames.json"); if (!fs.existsSync(fj)) continue;
  const { endT, frames } = JSON.parse(fs.readFileSync(fj, "utf8"));
  if (!frames.length) { console.warn(`${id}: no frames`); continue; }
  const lines = [];
  for (let i = 0; i < frames.length; i++) {
    const start = i === 0 ? 0 : frames[i].t, end = i + 1 < frames.length ? frames[i + 1].t : endT;
    lines.push(`file 'frames/${frames[i].name}'`, `duration ${Math.max(0.001, (end - start) / 1000).toFixed(4)}`);
  }
  lines.push(`file 'frames/${frames[frames.length - 1].name}'`);
  fs.writeFileSync(path.join(RAW, id, "list.txt"), lines.join("\n"));
  execFileSync("ffmpeg", ["-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", "list.txt",
    "-vf", "scale=1920:1080:flags=lanczos,fps=30,format=yuv420p", "-c:v", "libx264", "-preset", "slow", "-crf", "14",
    "-movflags", "+faststart", path.join(OUT, `${id}.mp4`)], { cwd: path.join(RAW, id), stdio: "inherit" });
  console.log(`${id}.mp4 ready`);
}
```
Gate: `capture/clips/` holds S02 to S12, S13a and S13b. Each clip's duration from `ffprobe` must be at least that scene's `T`. Extract one frame per clip with `ffmpeg -ss 2 -i clip -frames:v 1 check.jpg` and **look at them** (Read tool). They must show a crisp light theme, the cursor visible, no scrollbars and no offline banner.

---

## P6. Motion pieces

### P6.1 HyperFrames: `motion/opening/index.html` (21 s: story 0 to 14.6 s, title 14.6 to 21 s)

Before writing it: invoke the hyperframes skill, then run `npx hyperframes init motion/_scaffold --non-interactive --resolution landscape` once to see the canonical file. Copy any required boilerplate you notice (for example a required meta or script tag) into the file below, then delete `_scaffold`.

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap">
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<style>
  html, body { margin: 0; background: #f5f7fa; }
  #root { position: relative; width: 1920px; height: 1080px; overflow: hidden; background: #f5f7fa; font-family: Geist, system-ui, sans-serif; color: #0f172a; }
  .grid { position: absolute; inset: 0; background-image: radial-gradient(#0f172a 1.2px, transparent 1.2px); background-size: 28px 28px; opacity: .05; }
  .glow { position: absolute; left: -260px; top: -320px; width: 1000px; height: 1000px; border-radius: 50%; background: radial-gradient(circle, rgba(15,159,122,.16), rgba(15,159,122,0) 68%); }
  .eyebrow { position: absolute; left: 180px; top: 170px; font: 500 22px/1 'Geist Mono', monospace; letter-spacing: .18em; text-transform: uppercase; color: #475467; }
  .h { position: absolute; left: 180px; top: 225px; width: 1560px; font: 600 92px/1.04 Geist, sans-serif; letter-spacing: -.035em; }
  .h .w { display: inline-block; margin-right: .22em; }
  .card { position: absolute; background: #fff; border: 1px solid #e2e7ee; border-radius: 28px; box-shadow: 0 30px 90px rgba(15,23,42,.10), 0 6px 18px rgba(15,23,42,.05); }
  #stock { left: 180px; top: 470px; display: flex; align-items: center; gap: 34px; padding: 34px 46px; }
  #stock .label { font: 500 32px Geist; color: #475467; }
  #stock .count { font: 600 120px/1 'Geist Mono', monospace; color: #d63447; min-width: 150px; text-align: right; }
  #stock .unit { font: 500 30px Geist; color: #475467; }
  #days { left: 180px; top: 470px; display: flex; align-items: center; gap: 28px; padding: 30px 44px; font: 600 64px 'Geist Mono', monospace; }
  #days .tue { color: #0f172a; } #days .arrow { color: #98a2b3; } #days .fri { color: #d63447; }
  #days .note { font: 500 28px Geist; color: #475467; margin-left: 12px; }
  #map { left: 180px; top: 430px; width: 1560px; height: 460px; }
  .tag { position: absolute; padding: 12px 18px; border-radius: 999px; font: 600 26px Geist; background: #0f172a; color: #fff; white-space: nowrap; }
  .tag.soft { background: #f1f4f8; color: #0f172a; border: 1px solid #e2e7ee; }
  #title { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 28px; }
  #title img { height: 150px; }
  #title .word { font: 700 132px/1 Geist; letter-spacing: -.045em; }
  #title .word b { color: #0f9f7a; font-weight: 700; }
  #title .line { font: 500 34px Geist; color: #475467; letter-spacing: -.01em; }
</style>
</head>
<body>
<div id="root" data-composition-id="opening" data-width="1920" data-height="1080" data-start="0" data-duration="21">
  <div class="grid"></div><div class="glow"></div>

  <div id="eb" class="clip eyebrow" data-start="0.3" data-duration="14.1" data-track-index="1">Tuesday, 09:40 &middot; Rural Kota</div>

  <div id="h1" class="clip h" data-start="0.8" data-duration="4.0" data-track-index="2"><span class="w">A</span><span class="w">health</span><span class="w">centre</span><span class="w">runs</span><span class="w">out</span><span class="w">of</span><span class="w">vaccine.</span></div>
  <div id="stock" class="clip card" data-start="1.9" data-duration="2.9" data-track-index="3"><span class="label">Anti-rabies vaccine</span><span id="count" class="count">9</span><span class="unit">vials left</span></div>

  <div id="h2" class="clip h" data-start="5.0" data-duration="3.4" data-track-index="2"><span class="w">The</span><span class="w">district</span><span class="w">office</span><span class="w">finds</span><span class="w">out</span><span class="w">three</span><span class="w">days</span><span class="w">later.</span></div>
  <div id="days" class="clip card" data-start="5.7" data-duration="2.7" data-track-index="3"><span class="tue">TUE</span><span class="arrow">&rarr;</span><span class="fri">FRI</span><span class="note">from a paper register</span></div>

  <div id="h3" class="clip h" data-start="8.6" data-duration="5.8" data-track-index="2"><span class="w">The</span><span class="w">stock</span><span class="w">was</span><span class="w">forty</span><span class="w">minutes</span><span class="w">away.</span></div>
  <div id="map" class="clip card" data-start="9.2" data-duration="5.2" data-track-index="3">
    <svg width="1560" height="460" viewBox="0 0 1560 460" style="position:absolute;inset:0">
      <path id="route" d="M 260 300 C 520 120, 980 420, 1300 180" fill="none" stroke="#0f9f7a" stroke-width="6" stroke-linecap="round" stroke-dasharray="14 14"/>
      <circle id="phc" cx="260" cy="300" r="18" fill="#d63447"/><circle id="phcRing" cx="260" cy="300" r="18" fill="none" stroke="#d63447" stroke-width="4"/>
      <circle id="wh" cx="1300" cy="180" r="18" fill="#0f9f7a"/>
    </svg>
    <div class="tag" style="left:150px;top:350px">PHC, rural Kota &middot; 0 vials</div>
    <div class="tag soft" style="left:640px;top:190px">40 min by road</div>
    <div class="tag" style="left:1140px;top:230px;background:#0f9f7a">District warehouse &middot; in stock</div>
  </div>

  <div id="title" class="clip" data-start="14.6" data-duration="6.4" data-track-index="4">
    <img src="assets/logo.png" alt="">
    <div class="word">Swasthya<b>Grid</b></div>
    <div class="line">A district health control room for Rajasthan</div>
  </div>
</div>
<script>
  const tl = gsap.timeline({ paused: true });
  tl.from("#eb", { opacity: 0, y: 12, duration: 0.6, ease: "power2.out" }, 0.3);
  tl.from("#h1 .w", { opacity: 0, y: 26, duration: 0.5, stagger: 0.09, ease: "power3.out" }, 0.8);
  tl.from("#stock", { opacity: 0, y: 30, scale: 0.97, duration: 0.6, ease: "power3.out" }, 1.9);
  const c = { v: 9 };
  tl.to(c, { v: 0, duration: 2.0, ease: "power1.in", onUpdate: () => { document.getElementById("count").textContent = Math.round(c.v); } }, 2.4);
  tl.to(["#h1", "#stock"], { opacity: 0, y: -20, duration: 0.4, ease: "power2.in" }, 4.5);
  tl.from("#h2 .w", { opacity: 0, y: 26, duration: 0.5, stagger: 0.08, ease: "power3.out" }, 5.0);
  tl.from("#days", { opacity: 0, y: 30, duration: 0.6, ease: "power3.out" }, 5.7);
  tl.from("#days .fri", { opacity: 0, x: -20, duration: 0.5, ease: "power3.out" }, 6.4);
  tl.to(["#h2", "#days"], { opacity: 0, y: -20, duration: 0.4, ease: "power2.in" }, 8.1);
  tl.from("#h3 .w", { opacity: 0, y: 26, duration: 0.5, stagger: 0.08, ease: "power3.out" }, 8.6);
  tl.from("#map", { opacity: 0, y: 30, duration: 0.6, ease: "power3.out" }, 9.2);
  tl.fromTo("#route", { strokeDashoffset: 1400 }, { strokeDashoffset: 0, duration: 2.2, ease: "power2.inOut" }, 9.6);
  tl.fromTo("#phcRing", { attr: { r: 18 }, opacity: 0.9 }, { attr: { r: 46 }, opacity: 0, duration: 1.2, repeat: 3, ease: "power1.out" }, 9.6);
  tl.to(["#eb", "#h3", "#map"], { opacity: 0, duration: 0.5, ease: "power2.in" }, 13.9);
  tl.from("#title img", { opacity: 0, scale: 0.9, duration: 0.8, ease: "power3.out" }, 14.7);
  tl.from("#title .word", { opacity: 0, y: 24, duration: 0.7, ease: "power3.out" }, 15.0);
  tl.from("#title .line", { opacity: 0, y: 16, duration: 0.6, ease: "power3.out" }, 15.5);
  tl.to("#title", { opacity: 0, duration: 0.5, ease: "power2.in" }, 20.5);
  window.__timelines = window.__timelines || {};
  window.__timelines["opening"] = tl;
</script>
</body>
</html>
```
Notes:
- The route's `stroke-dasharray` fights the dashoffset draw-on. If `check` snapshots show no draw-on, set `stroke-dasharray` to `1400` and keep the dashed look with a second path on top that has `stroke-dasharray="14 14"` and appears at 11.8 s.
- The finite `repeat: 3` on the ring is deliberate (determinism rule: no infinite repeats).

Render and check:
```bash
cd demo-video/motion/opening
npx hyperframes lint .
npx hyperframes check . --at 1,3.5,6.5,11,17 --snapshots
npx hyperframes render --output ../out/opening.mp4 --fps 30 --quality high
```
Open the snapshots (Read tool). Text must be inside the frame, not clipped, and in the correct order.

### P6.2 HyperFrames: `motion/endcard/index.html` (6 s)

Use the same `<head>` block as P6.1. Body:
```html
<div id="root" data-composition-id="endcard" data-width="1920" data-height="1080" data-start="0" data-duration="6">
  <div class="grid"></div><div class="glow"></div>
  <div id="end" class="clip" data-start="0" data-duration="6" data-track-index="1" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px">
    <img src="assets/logo.png" alt="" style="height:130px">
    <div class="word" style="font:700 120px/1 Geist;letter-spacing:-.045em">Swasthya<b style="color:#0f9f7a">Grid</b></div>
    <div id="tag" style="font:600 40px Geist;color:#0f172a;letter-spacing:-.015em">See it early. Move it fast. Close the loop.</div>
    <div id="links" style="display:flex;gap:18px;margin-top:18px">
      <div class="tag soft" style="position:static">swasthyagrid.vercel.app</div>
      <div class="tag soft" style="position:static">github.com/harshkawatra11/SwasthyaGrid-HealthTech</div>
    </div>
    <div id="fine" style="position:absolute;bottom:56px;font:500 20px Geist;color:#667085;text-align:center;width:1400px">Pilot data: 40 illustrative facilities across five Rajasthan districts. Fleet and shipments are simulated on real road routes (OpenStreetMap, OSRM).</div>
  </div>
</div>
<script>
  const tl = gsap.timeline({ paused: true });
  tl.from("#end img", { opacity: 0, scale: 0.9, duration: 0.7, ease: "power3.out" }, 0.1);
  tl.from("#end .word", { opacity: 0, y: 22, duration: 0.6, ease: "power3.out" }, 0.3);
  tl.from("#tag", { opacity: 0, y: 16, duration: 0.6, ease: "power3.out" }, 0.8);
  tl.from("#links > div", { opacity: 0, y: 12, duration: 0.5, stagger: 0.12, ease: "power3.out" }, 1.3);
  tl.from("#fine", { opacity: 0, duration: 0.6 }, 1.8);
  window.__timelines = window.__timelines || {};
  window.__timelines["endcard"] = tl;
</script>
```
Carry over the `.grid`, `.glow` and `.tag` rules from P6.1's `<style>`. Render with `npx hyperframes render --output ../out/endcard.mp4 --fps 30 --quality high`, after `lint` and `check`.

### P6.3 /brag finale (15 s, S14)

From the repo root, in the Claude Code session, invoke the brag skill with exactly this request:

> let's /brag --format landscape --duration 15 --no-music --title "SwasthyaGrid" --tone "calm, premium public-health control room launch; consulting grade; light off-white canvas #f5f7fa, ink #0f172a, one accent green #0f9f7a; Geist font; restrained motion, no neon, no hype". On-screen copy may use only these facts, word for word or shortened: "40 facilities, 5 districts", "Forecasts stock-outs days ahead", "Proposes the fix, a human approves", "Live supply chain console", "Voice in Hindi and English", "Every decision is checkable arithmetic", "A new state plugs in without a rebuild". No em dashes or en dashes, no exclamation marks, no words like seamless, revolutionize, leverage, empower, unlock, game changer, cutting-edge.

Then:
1. `cp brag-output/brag.mp4 demo-video/motion/out/finale.mp4`, and keep `brag-output/share-copy.txt` as `demo-video/out/share-copy.txt`.
2. Review gate: extract 8 frames with `ffmpeg -i demo-video/motion/out/finale.mp4 -vf "fps=8/15,scale=960:-1" demo-video/out/finale-%02d.jpg` and look at every frame. It fails if any frame shows a claim outside the allowed facts, a dash, a banned word, a misspelling, an off-brand colour scheme (dark or neon), or text clipped at the edges. It also fails if the duration is not between 14 and 16 s.
3. If it fails, fix `brag-output/composition/` (it is HyperFrames HTML) and re-render with `npx hyperframes render --output ../../demo-video/motion/out/finale.mp4` from that folder. If it is still not right after one fix, use the fallback in P6.4.
4. Share copy: run `lintText` over `share-copy.txt` and remove any dash or banned word.

### P6.4 Fallback finale: `motion/finale-fallback/index.html` (15 s)

Use the same head, grid and glow as P6.1. Three statements, one at a time, centred, 84 px, 600 weight, each with a small mono eyebrow above:
- 0.4 to 4.8 s: eyebrow `DETERMINISTIC`, text `Every decision is checkable arithmetic.`
- 5.0 to 9.4 s: eyebrow `HUMAN IN THE LOOP`, text `It proposes. An officer approves.`
- 9.6 to 14.6 s: eyebrow `BUILT TO SCALE`, text `One shared model. A new state plugs in without a rebuild.`

Give each statement the same word-stagger entry as `#h1` in P6.1 and a 0.4 s fade out. Register it as `window.__timelines["finale"]` with `data-composition-id="finale"` and `data-duration="15"`. Render to `motion/out/finale.mp4`.

---

## P7. Sarvam reply audio (S11)

`demo-video/tools/sarvam-reply.py` (run it with the backend interpreter from the `backend/` folder, so `.env` loads):
```python
import asyncio, base64, re, sys, pathlib
HERE = pathlib.Path(__file__).resolve().parent
DEMO = HERE.parent
BACKEND = DEMO.parent / "backend"
sys.path.insert(0, str(BACKEND))
from app.core.config import get_settings          # noqa: E402
from app.voice.sarvam_tts import synthesize       # noqa: E402

async def main() -> None:
    s = get_settings()
    text = (DEMO / "capture/raw/S11/reply.txt").read_text(encoding="utf-8").strip()
    parts = [p.strip() for p in re.split(r"(?<=[।.!?])\s+", text) if p.strip()]
    chosen = ""
    for p in parts:
        if len(chosen) + len(p) + 1 > 150:
            break
        chosen = (chosen + " " + p).strip()
    chosen = chosen or text[:150]
    res = await synthesize(api_key=s.sarvam_api_key, text=chosen, speaker=s.sarvam_speaker,
                           model=s.sarvam_tts_model, language="hi-IN")
    out = DEMO / "audio/sarvam"
    out.mkdir(parents=True, exist_ok=True)
    (out / "reply-raw.wav").write_bytes(base64.b64decode(res.wav_base64))
    (out / "reply.txt").write_text(chosen, encoding="utf-8")
    print("synthesized", len(chosen), "chars")

asyncio.run(main())
```
Verify the settings attribute names first with `grep -n "sarvam_api_key\|sarvam_speaker\|sarvam_tts_model" backend/app/core/config.py`, and adjust the three names if they differ. Then run:
```bash
cd backend && .venv/Scripts/python ../demo-video/tools/sarvam-reply.py && cd ..
ffmpeg -y -v error -i demo-video/audio/sarvam/reply-raw.wav -af "atrim=0:6.3,afade=t=out:st=5.8:d=0.5,loudnorm=I=-16:TP=-1.5" -ar 48000 -ac 1 demo-video/audio/sarvam/reply.wav
```
Gate: `reply.wav` runs 3 to 6.3 s, and `reply.txt` is in Devanagari. If the reply came back in English, use it anyway and note it. The caption in P8 shows whatever was said.

---

## P8. Build the timeline

### P8.1 `demo-video/tools/pick-assets.mjs` (music and sound effects from the /brag install)

```js
import fs from "node:fs"; import path from "node:path"; import os from "node:os"; import { execFileSync } from "node:child_process";
const ROOT = path.resolve(import.meta.dirname, "..");
const roots = [path.join(os.homedir(), ".claude/skills/brag"), path.join(os.homedir(), ".agents/skills/brag"), path.resolve(ROOT, "../.claude/skills/brag"), process.env.BRAG_DIR].filter(Boolean).filter(fs.existsSync);
const files = [];
const walk = d => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) walk(p); else if (/\.(mp3|ogg|wav|m4a)$/i.test(f.name)) files.push(p); } };
roots.forEach(walk);
const dur = f => { try { return parseFloat(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).toString()); } catch { return 0; } };
const withDur = files.map(f => ({ f, d: dur(f) }));
console.log(withDur.map(x => `${x.d.toFixed(1)}s  ${x.f}`).join("\n"));
const musicDir = path.join(ROOT, "audio/music"), sfxDir = path.join(ROOT, "audio/sfx");
fs.mkdirSync(musicDir, { recursive: true }); fs.mkdirSync(sfxDir, { recursive: true });
if (!fs.readdirSync(musicDir).some(f => /^bed\./.test(f))) {
  const music = withDur.filter(x => x.d >= 45).sort((a, b) => (/business|move/i.test(b.f) - /business|move/i.test(a.f)) || b.d - a.d)[0];
  if (!music) { console.error("No music found. Put a licensed track at demo-video/audio/music/bed.mp3 and re-run."); process.exit(1); }
  execFileSync("ffmpeg", ["-y", "-v", "error", "-i", music.f, "-ar", "48000", "-ac", "2", path.join(musicDir, "bed.wav")]);
  console.log("music:", music.f);
}
const pick = (re, name, synth) => {
  const out = path.join(sfxDir, `${name}.wav`); if (fs.existsSync(out)) return;
  const hit = withDur.filter(x => x.d > 0 && x.d < 3).find(x => re.test(path.basename(x.f)));
  if (hit) execFileSync("ffmpeg", ["-y", "-v", "error", "-i", hit.f, "-ar", "48000", "-ac", "2", out]);
  else execFileSync("ffmpeg", ["-y", "-v", "error", "-f", "lavfi", "-i", synth, "-ar", "48000", "-ac", "2", out]);
  console.log(`${name}:`, hit ? hit.f : "synthesized");
};
pick(/click|tap|select/i, "click", "sine=f=1800:d=0.04,afade=t=out:st=0.01:d=0.03,volume=0.5");
pick(/swoosh|whoosh|swish|transition/i, "whoosh", "anoisesrc=d=0.45:c=pink:a=0.3,highpass=f=600,lowpass=f=4000,afade=t=in:d=0.18,afade=t=out:st=0.2:d=0.25");
pick(/confirm|success|chime|bell|positive/i, "chime", "sine=f=988:d=0.5,afade=t=out:st=0.05:d=0.45,volume=0.4");
```
Licence note for `EXECUTION-NOTES.md`: /brag bundles the ende.app track and Kenney sound effects (Kenney is CC0). Tell the user in the final report to confirm the music licence allows a public hackathon video. The alternative is to drop a track they own at `audio/music/bed.mp3`.

### P8.2 `demo-video/tools/build-timeline.mjs` (write exactly)

```js
import fs from "node:fs"; import path from "node:path"; import { execFileSync } from "node:child_process";
import { lintText } from "./lib/text.mjs";
const ROOT = path.resolve(import.meta.dirname, "..");
const J = p => JSON.parse(fs.readFileSync(path.join(ROOT, p), "utf8"));
const sc = J("script/scenes.json"), vt = J("vo/timings.json"), D = J("vo/durations.json"), state = J("capture/state.json");
const fps = sc.fps, F = s => Math.round(s * fps);
const probe = f => parseFloat(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).toString());
const ev = id => { const p = path.join(ROOT, `capture/raw/${id}/events.json`); return fs.existsSync(p) ? J(`capture/raw/${id}/events.json`) : { endT: 0, events: [] }; };
const APPHOST = "swasthyagrid.vercel.app";
const urlText = u => { try { const x = new URL(u); if (x.port === "3001") return `127.0.0.1:3001${x.pathname}`; return APPHOST + x.pathname + (x.search || ""); } catch { return APPHOST; } };

const vo = [], sfx = [], captions = [], chapters = [], motion = [];
const addVo = (id, atSec) => { vo.push({ file: `vo/clean/${id}.wav`, atSec }); captionize(sc.vo[id], atSec, vt[id]); };
function captionize(text, at, dur) {
  const chunks = [];
  for (const sent of text.split(/(?<=[.?!:])\s+/)) {
    let cur = "";
    for (const w of sent.split(" ")) { if ((cur + " " + w).trim().length > 64 && cur) { chunks.push(cur.trim()); cur = w; } else cur = (cur + " " + w).trim(); }
    if (cur) chunks.push(cur);
  }
  const total = chunks.reduce((a, c) => a + c.length, 0); let t = at;
  for (const c of chunks) { const d = dur * c.length / total; captions.push({ from: F(t), to: F(t + d) - 1, text: c }); t += d; }
}

// 1. opening (S00 + S01)
const openingDur = probe(path.join(ROOT, "motion/out/opening.mp4"));
motion.push({ id: "opening", src: "motion/opening.mp4", from: 0, duration: F(openingDur), fadeIn: 0, fadeOut: 12 });
addVo("S00", 0.6); addVo("S01", 15.0);
sfx.push({ file: "audio/sfx/whoosh.wav", atSec: 14.5, gain: 0.5 });

// 2. main span of screen scenes
const spanStart = openingDur - 0.4;
const span = { id: "main", from: F(spanStart), clips: [], urls: [] };
let t = 0;
const S13voice = state.RISK_IMPROVES === false ? "S13alt" : "S13";
const markMap = (events) => Object.fromEntries(events.filter(e => e.type === "mark" && e.rect).map(e => [e.key, e]));
function pushClip(id, src, durSec, trimSec, fxId, overlapNext = true) {
  const e = ev(id); const marks = markMap(e.events); const fx = sc.fx[fxId] || { callouts: [], zooms: [] };
  const rel = m => F(m.t / 1000 - trimSec);
  const callouts = fx.callouts.filter(c => marks[c.key] && rel(marks[c.key]) >= 0 && rel(marks[c.key]) < F(durSec)).map((c, i) => ({ id: `${id}-${c.key}-${i}`, from: rel(marks[c.key]), duration: F(c.hold), rect: marks[c.key].rect, label: c.label }));
  const zooms = fx.zooms.filter(z => marks[z.key] && rel(marks[z.key]) >= 0).map(z => { const r = marks[z.key].rect; return { from: rel(marks[z.key]) + 6, duration: F(z.hold), scale: z.scale, ox: Math.round(r.x + r.w / 2), oy: Math.round(r.y + r.h / 2) }; });
  const startF = F(t);
  span.clips.push({ id, src, from: startF, duration: F(durSec) + (overlapNext ? 8 : 0), trimStart: F(trimSec), fadeIn: span.clips.length ? 8 : 0, zooms, callouts });
  for (const u of e.events.filter(x => x.type === "url")) { const f = startF + F(u.t / 1000 - trimSec); span.urls.push({ from: Math.max(startF, f), text: urlText(u.url) }); }
  for (const c of e.events.filter(x => x.type === "click" && x.important)) sfx.push({ file: "audio/sfx/click.wav", atSec: spanStart + t + c.t / 1000 - trimSec, gain: 0.55 });
  return e;
}
for (const id of sc.screenScenes) {
  const ch = sc.chapters[id];
  if (ch) { chapters.push({ ...ch, from: F(spanStart + t) + 6, duration: 96 }); if (t > 0) sfx.push({ file: "audio/sfx/whoosh.wav", atSec: spanStart + t - 0.1, gain: 0.35 }); }
  if (id === "S11") {
    const e = ev("S11"); const rs = e.events.find(x => x.type === "reply_start");
    const replyAt = rs ? rs.t / 1000 : 7.5;
    const sarvamDur = probe(path.join(ROOT, "audio/sarvam/reply.wav"));
    const sarvamAt = replyAt + 0.5, bAt = sarvamAt + sarvamDur + 0.35;
    const T11 = Math.min(bAt + vt.S11b + 0.8, e.endT / 1000 - 0.4);
    addVo("S11a", spanStart + t + 0.4);
    vo.push({ file: "audio/sarvam/reply.wav", atSec: spanStart + t + sarvamAt, sarvam: true });
    const hindi = fs.readFileSync(path.join(ROOT, "audio/sarvam/reply.txt"), "utf8").trim();
    captions.push({ from: F(spanStart + t + sarvamAt), to: F(spanStart + t + sarvamAt + sarvamDur) - 1, text: `Sarvam AI, in Hindi: ${hindi}` });
    addVo("S11b", spanStart + t + bAt);
    pushClip("S11", "clips/S11.mp4", T11, 0, "S11");
    t += T11; continue;
  }
  if (id === "S13") {
    const a = ev("S13a"); const aDur = a.endT / 1000; const T13 = D.S13;
    addVo(S13voice, spanStart + t + 0.4);
    pushClip("S13a", "clips/S13a.mp4", aDur, 0, "S13");
    t += aDur;
    const b = ev("S13b");
    const rt = b.events.find(x => x.type === "mark" && (x.key === "risk_toast" || x.key === "risk_chip"));
    if (rt) sfx.push({ file: "audio/sfx/chime.wav", atSec: spanStart + t + rt.t / 1000, gain: 0.5 });
    pushClip("S13b", "clips/S13b.mp4", Math.max(4, T13 - aDur), 0, "S13", false);
    t += Math.max(4, T13 - aDur); continue;
  }
  const T = D[id];
  addVo(id, spanStart + t + sc.leadSec);
  const e = pushClip(id, `clips/${id}.mp4`, T, 0, id);
  if (id === "S06") { const at = e.events.find(x => x.type === "approve_toast"); if (at) sfx.push({ file: "audio/sfx/chime.wav", atSec: spanStart + t + at.t / 1000, gain: 0.45 }); }
  t += T;
}
span.duration = F(t);
span.urls.sort((a, b) => a.from - b.from);
span.urls = span.urls.map(u => ({ ...u, from: u.from }));

// 3. finale (brag) and end card
const finaleAt = spanStart + t - 0.4, finaleDur = probe(path.join(ROOT, "motion/out/finale.mp4"));
motion.push({ id: "finale", src: "motion/finale.mp4", from: F(finaleAt), duration: F(finaleDur), fadeIn: 12, fadeOut: 10 });
addVo("S14", finaleAt + 1.2);
const bragAudio = { file: "motion/out/finale.mp4", atSec: finaleAt, gain: 0.6 };
const endAt = finaleAt + finaleDur - 0.3, endDur = probe(path.join(ROOT, "motion/out/endcard.mp4"));
motion.push({ id: "endcard", src: "motion/endcard.mp4", from: F(endAt), duration: F(endDur), fadeIn: 10, fadeOut: 0 });
addVo("S15", endAt + 0.6);
sfx.push({ file: "audio/sfx/whoosh.wav", atSec: endAt - 0.1, gain: 0.4 });
const totalSec = endAt + endDur;

// 4. gates
const problems = [];
if (totalSec > sc.maxTotalSec) problems.push(`total ${totalSec.toFixed(1)}s is over ${sc.maxTotalSec}s`);
for (const [k, v] of Object.entries(sc.vo)) problems.push(...lintText(`vo ${k}`, v));
for (const c of Object.values(sc.chapters)) problems.push(...lintText("chapter", c.name + " " + c.line));
for (const f of Object.values(sc.fx)) for (const c of f.callouts) problems.push(...lintText("callout", c.label));
for (const c of captions) problems.push(...lintText("caption", c.text));
const routes = new Set(span.urls.map(u => u.text.replace(APPHOST, "").split("?")[0]));
for (const r of ["/command", "/districts", "/districts/district_kota", "/facilities", "/facilities/kota_phc_4", "/map", "/recommendations", "/supply", "/supply/fleet", "/supply/drivers", "/supply/planning", "/supply/warehouses", "/voice", "/inventory", "/footfall", "/beds", "/doctors", "/diagnostics", "/analytics", "/facilities/phc_18"]) if (![...routes].some(x => x === r)) problems.push(`route not captured: ${r}`);
if (![...routes].some(x => x.startsWith("/supply/shipments/"))) problems.push("route not captured: shipment tracking");
if (![...routes].some(x => x.includes("127.0.0.1:3001"))) problems.push("CRM not captured");

const timeline = { fps, totalFrames: F(totalSec), totalSec: +totalSec.toFixed(3), motion, spans: [span], chapters, captions, audio: "audio/mix.wav",
  audioEvents: { vo, sfx, brag: bragAudio, music: "audio/music/bed.wav", totalSec } };
fs.writeFileSync(path.join(ROOT, "remotion/src/timeline.json"), JSON.stringify(timeline, null, 2));
// SRT
const ts = f => { const s = f / fps, h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60, sec = Math.floor(s) % 60, ms = Math.round((s % 1) * 1000); return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")},${String(ms).padStart(3, "0")}`; };
fs.mkdirSync(path.join(ROOT, "out"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "out/SwasthyaGrid-demo.srt"), captions.map((c, i) => `${i + 1}\n${ts(c.from)} --> ${ts(c.to)}\n${c.text}\n`).join("\n"));
console.log(`total ${totalSec.toFixed(2)}s, ${captions.length} captions, ${span.clips.length} clips, ${sfx.length} sfx`);
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
```
Gate: exits 0 and prints a total of at most 210 s. If it is over, re-record the longest voiceover takes a little faster. Never cut screens.

### P8.3 Stage media for Remotion

```bash
cd demo-video
mkdir -p remotion/public/{clips,motion,audio,fonts}
cp capture/clips/*.mp4 remotion/public/clips/
cp motion/out/opening.mp4 motion/out/finale.mp4 motion/out/endcard.mp4 remotion/public/motion/
```
`audio/mix.wav` is copied in after P9.

---

## P9. Audio mix

`demo-video/tools/mix-audio.mjs`:
```js
import fs from "node:fs"; import path from "node:path"; import { execFileSync } from "node:child_process";
const ROOT = path.resolve(import.meta.dirname, "..");
const tl = JSON.parse(fs.readFileSync(path.join(ROOT, "remotion/src/timeline.json"), "utf8"));
const A = tl.audioEvents, total = A.totalSec.toFixed(3);
const inputs = [], filters = [], voLabels = [], fxLabels = [];
const add = f => { inputs.push("-i", path.join(ROOT, f)); return inputs.filter(x => x === "-i").length - 1; };
const ms = s => Math.max(0, Math.round(s * 1000));
for (const v of A.vo) { const i = add(v.file); const l = `v${i}`; filters.push(`[${i}:a]aformat=sample_rates=48000:channel_layouts=stereo,volume=${v.sarvam ? 0.95 : 1.0},adelay=${ms(v.atSec)}|${ms(v.atSec)}[${l}]`); voLabels.push(`[${l}]`); }
for (const s of A.sfx) { const i = add(s.file); const l = `s${i}`; filters.push(`[${i}:a]aformat=sample_rates=48000:channel_layouts=stereo,volume=${s.gain},adelay=${ms(s.atSec)}|${ms(s.atSec)}[${l}]`); fxLabels.push(`[${l}]`); }
const bi = add(A.brag.file); filters.push(`[${bi}:a]aformat=sample_rates=48000:channel_layouts=stereo,volume=${A.brag.gain},adelay=${ms(A.brag.atSec)}|${ms(A.brag.atSec)}[brag]`);
inputs.push("-stream_loop", "-1", "-i", path.join(ROOT, A.music)); const mi = inputs.filter(x => x === "-i").length - 1;
filters.push(`${voLabels.join("")}amix=inputs=${voLabels.length}:normalize=0:dropout_transition=0,apad,atrim=0:${total}[vo]`);
filters.push(`[vo]asplit=2[vomix][vokey]`);
filters.push(`[${mi}:a]aformat=sample_rates=48000:channel_layouts=stereo,atrim=0:${total},asetpts=N/SR/TB,volume=0.30,afade=t=in:d=1.2,afade=t=out:st=${(A.totalSec - 3).toFixed(3)}:d=3[mus]`);
filters.push(`[mus][vokey]sidechaincompress=threshold=0.035:ratio=8:attack=20:release=450:makeup=1[musd]`);
filters.push(`${fxLabels.join("")}[brag]amix=inputs=${fxLabels.length + 1}:normalize=0,apad,atrim=0:${total}[fx]`);
filters.push(`[vomix][musd][fx]amix=inputs=3:normalize=0,alimiter=limit=0.95,loudnorm=I=-14:TP=-1.5:LRA=11[out]`);
fs.mkdirSync(path.join(ROOT, "audio"), { recursive: true });
const out = path.join(ROOT, "audio/mix.wav");
execFileSync("ffmpeg", ["-y", "-v", "error", ...inputs, "-filter_complex", filters.join(";"), "-map", "[out]", "-ar", "48000", "-ac", "2", "-c:a", "pcm_s24le", "-t", total, out], { stdio: "inherit" });
fs.copyFileSync(out, path.join(ROOT, "remotion/public/audio/mix.wav"));
console.log("mix.wav ready");
```
If the brag render has no audio stream (`ffprobe` shows none), replace its filter with `anullsrc=r=48000:cl=stereo,atrim=0:0.1[brag]` and note it.

Listen gate: render a 25 s preview of the busiest stretch, the Voice scene, with `ffmpeg -ss <S11 start - 2> -t 25 -i audio/mix.wav demo-video/out/preview-voice.wav`. Then check loudness with `ffmpeg -i demo-video/audio/mix.wav -af ebur128 -f null - 2>&1 | tail -12`. Integrated loudness must be between -15 and -13 LUFS.

---

## P10. Remotion master edit

Invoke the remotion skill first. Then:
```bash
cd demo-video/remotion
npm init -y
V=$(npm view remotion version)
npm i --save-exact remotion@$V @remotion/cli@$V @remotion/google-fonts@$V react@19 react-dom@19
npm i -D --save-exact typescript @types/react@19
```
Use the same exact version for every `@remotion/*` package. Remotion's licence is free for individuals and small teams; note this in `EXECUTION-NOTES.md`.

In `package.json`, add these scripts:
```json
"scripts": {
  "studio": "remotion studio src/index.ts",
  "render": "remotion render src/index.ts Demo ../out/SwasthyaGrid-demo.mp4 --codec=h264 --crf=16 --audio-bitrate=320k --image-format=jpeg --jpeg-quality=95"
}
```

`tsconfig.json`:
```json
{ "compilerOptions": { "target": "ES2022", "module": "ESNext", "moduleResolution": "bundler", "jsx": "react-jsx", "strict": true, "resolveJsonModule": true, "esModuleInterop": true, "skipLibCheck": true, "noEmit": true }, "include": ["src"] }
```

`remotion.config.ts`:
```ts
import { Config } from "@remotion/cli/config";
Config.setVideoImageFormat("jpeg");
Config.setJpegQuality(95);
Config.setOverwriteOutput(true);
```

`src/index.ts`:
```ts
import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";
registerRoot(RemotionRoot);
```

`src/Root.tsx`:
```tsx
import React from "react";
import { Composition } from "remotion";
import { Main } from "./Main";
import tl from "./timeline.json";
export const RemotionRoot: React.FC = () => (
  <Composition id="Demo" component={Main} durationInFrames={tl.totalFrames} fps={tl.fps} width={1920} height={1080} />
);
```

`src/theme.ts`:
```ts
export const C = { bg: "#f5f7fa", surface: "#ffffff", surface2: "#f1f4f8", border: "#e2e7ee", ink: "#0f172a", muted: "#475467", brand: "#0f9f7a", brandSoft: "rgba(15,159,122,0.14)" };
export const FRAME = { x: 160, y: 34, w: 1600, h: 940 };
export const CHROME_H = 40;
export const CONTENT_H = 900;
export const SCALE = 1600 / 1920;
export const FONT = "Geist, 'Nirmala UI', 'Noto Sans Devanagari', system-ui, sans-serif";
export const MONO = "'Geist Mono', ui-monospace, monospace";
```

`src/fonts.ts`:
```ts
import { loadFont as loadGeist } from "@remotion/google-fonts/Geist";
import { loadFont as loadGeistMono } from "@remotion/google-fonts/GeistMono";
loadGeist("normal", { weights: ["400", "500", "600", "700"] });
loadGeistMono("normal", { weights: ["400", "500", "600"] });
```
If `@remotion/google-fonts/Geist` does not exist in the installed version, use the local fallback instead:
1. Copy `frontend/node_modules/next/dist/next-devtools/server/font/geist-latin.woff2` and `geist-mono-latin.woff2` to `remotion/public/fonts/`.
2. Install `@remotion/fonts` at the same exact version.
3. Load both with `loadFont({ family: "Geist", url: staticFile("fonts/geist-latin.woff2"), weight: "100 900" })` and `loadFont({ family: "Geist Mono", url: staticFile("fonts/geist-mono-latin.woff2"), weight: "100 900" })`.

`src/anim.ts`:
```ts
import { interpolate, Easing } from "remotion";
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
export const ramp = (f: number, from: number, dur: number, e: number) => {
  if (f < from || f > from + dur) return 0;
  const up = interpolate(f, [from, from + e], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  const down = interpolate(f, [from + dur - e, from + dur], [1, 0], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  return Math.min(up, down);
};
export const fade = (f: number, a: number, b: number) => interpolate(f, [a, b], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
```

`src/components/Background.tsx`:
```tsx
import React from "react";
import { AbsoluteFill } from "remotion";
import { C } from "../theme";
export const Background: React.FC = () => (
  <AbsoluteFill style={{ background: `linear-gradient(180deg, #eef2f6 0%, ${C.bg} 60%)` }}>
    <AbsoluteFill style={{ backgroundImage: "radial-gradient(#0f172a 1.2px, transparent 1.2px)", backgroundSize: "28px 28px", opacity: 0.045 }} />
    <div style={{ position: "absolute", left: -260, top: -320, width: 1000, height: 1000, borderRadius: "50%", background: "radial-gradient(circle, rgba(15,159,122,.12), rgba(15,159,122,0) 68%)" }} />
  </AbsoluteFill>
);
```

`src/components/Chrome.tsx`:
```tsx
import React from "react";
import { C, CHROME_H, MONO } from "../theme";
export const Chrome: React.FC<{ url: string }> = ({ url }) => (
  <div style={{ position: "absolute", left: 0, top: 0, right: 0, height: CHROME_H, background: C.surface, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center" }}>
    <div style={{ display: "flex", gap: 8, marginLeft: 18 }}>{[0, 1, 2].map(i => <div key={i} style={{ width: 12, height: 12, borderRadius: 6, background: C.border }} />)}</div>
    <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", height: 26, minWidth: 560, padding: "0 16px", borderRadius: 8, background: C.surface2, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: MONO, fontSize: 14, color: C.muted }}>
      <svg width="12" height="12" viewBox="0 0 24 24"><path d="M6 10V7a6 6 0 1 1 12 0v3h1v12H5V10h1Zm2 0h8V7a4 4 0 1 0-8 0v3Z" fill="#98a2b3" /></svg>
      {url}
    </div>
  </div>
);
```

`src/components/Callout.tsx`:
```tsx
import React from "react";
import { useCurrentFrame } from "remotion";
import { ramp } from "../anim";
import { C, FONT } from "../theme";
type R = { x: number; y: number; w: number; h: number };
export const Callout: React.FC<{ from: number; duration: number; rect: R; label?: string }> = ({ from, duration, rect, label }) => {
  const f = useCurrentFrame(); const p = ramp(f, from, duration, 8); if (p <= 0) return null;
  const pad = 8; const x = Math.max(6, rect.x - pad), y = Math.max(6, rect.y - pad);
  const w = Math.min(1914 - x, rect.w + pad * 2), h = Math.min(1074 - y, rect.h + pad * 2);
  const labelAbove = y > 78; const ly = labelAbove ? y - 58 : Math.min(1080 - 58, y + h + 12);
  return (
    <>
      <div style={{ position: "absolute", left: x, top: y, width: w, height: h, border: `3px solid ${C.brand}`, borderRadius: 14, boxShadow: `0 0 0 8px ${C.brandSoft}`, opacity: p, transform: `scale(${1.03 - 0.03 * p})` }} />
      {label ? (
        <div style={{ position: "absolute", left: Math.min(x, 1920 - 620), top: ly, opacity: p, transform: `translateY(${(1 - p) * 8}px)`, display: "flex", alignItems: "center", gap: 10, padding: "10px 18px", borderRadius: 999, background: C.ink, color: "#fff", fontFamily: FONT, fontWeight: 600, fontSize: 26, whiteSpace: "nowrap", boxShadow: "0 10px 30px rgba(15,23,42,.25)" }}>
          <span style={{ width: 10, height: 10, borderRadius: 5, background: C.brand }} />{label}
        </div>
      ) : null}
    </>
  );
};
```

`src/components/ClipLayer.tsx`:
```tsx
import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile, useCurrentFrame } from "remotion";
import { ramp, fade } from "../anim";
import { Callout } from "./Callout";
export type Clip = { id: string; src: string; from: number; duration: number; trimStart: number; fadeIn: number;
  zooms: { from: number; duration: number; scale: number; ox: number; oy: number }[];
  callouts: { id: string; from: number; duration: number; rect: { x: number; y: number; w: number; h: number }; label?: string }[] };
export const ClipLayer: React.FC<{ clip: Clip }> = ({ clip }) => {
  const f = useCurrentFrame();
  const op = clip.fadeIn ? fade(f, 0, clip.fadeIn) : 1;
  let s = 1, ox = 960, oy = 540;
  for (const z of clip.zooms) { const p = ramp(f, z.from, z.duration, 16); if (p > 0) { s = 1 + (z.scale - 1) * p; ox = z.ox; oy = z.oy; } }
  return (
    <AbsoluteFill style={{ opacity: op }}>
      <AbsoluteFill style={{ transform: `scale(${s})`, transformOrigin: `${ox}px ${oy}px` }}>
        <OffthreadVideo src={staticFile(clip.src)} startFrom={clip.trimStart} muted style={{ width: 1920, height: 1080 }} />
        {clip.callouts.map(c => <Callout key={c.id} from={c.from} duration={c.duration} rect={c.rect} label={c.label} />)}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
```
If `startFrom` is flagged as removed in the installed Remotion version, use `trimBefore` with the same value.

`src/components/FrameSpan.tsx`:
```tsx
import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, interpolate, Easing } from "remotion";
import { C, FRAME, CHROME_H, CONTENT_H, SCALE } from "../theme";
import { Chrome } from "./Chrome";
import { ClipLayer, Clip } from "./ClipLayer";
export type Span = { id: string; from: number; duration: number; urls: { from: number; text: string }[]; clips: Clip[] };
export const FrameSpan: React.FC<{ span: Span }> = ({ span }) => {
  const f = useCurrentFrame();
  const enter = interpolate(f, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const exit = interpolate(f, [span.duration - 14, span.duration], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.cubic) });
  const v = Math.min(enter, exit);
  const url = [...span.urls].reverse().find(u => u.from <= f)?.text ?? span.urls[0]?.text ?? "";
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: FRAME.x, top: FRAME.y, width: FRAME.w, height: FRAME.h, borderRadius: 14, overflow: "hidden", background: C.surface, border: `1px solid ${C.border}`,
        boxShadow: "0 40px 100px rgba(15,23,42,.16), 0 10px 30px rgba(15,23,42,.08)", opacity: v, transform: `translateY(${(1 - v) * 40}px) scale(${0.97 + 0.03 * v})` }}>
        <Chrome url={url} />
        <div style={{ position: "absolute", left: 0, top: CHROME_H, width: FRAME.w, height: CONTENT_H, overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, transform: `scale(${SCALE})`, transformOrigin: "0 0" }}>
            {span.clips.map(c => (
              <Sequence key={c.id} from={c.from} durationInFrames={c.duration} name={c.id}>
                <ClipLayer clip={c} />
              </Sequence>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
```

`src/components/ChapterCard.tsx`:
```tsx
import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { C, FRAME, CHROME_H, FONT, MONO } from "../theme";
export const ChapterCard: React.FC<{ num: string; name: string; line: string; duration: number }> = ({ num, name, line, duration }) => {
  const f = useCurrentFrame();
  const inP = interpolate(f, [0, 14], [0, 1], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const outP = interpolate(f, [duration - 12, duration], [1, 0], { extrapolateLeft: "clamp", easing: Easing.in(Easing.cubic) });
  const p = Math.min(inP, outP);
  return (
    <div style={{ position: "absolute", left: FRAME.x + 28, top: FRAME.y + CHROME_H + 24, opacity: p, transform: `translateX(${(1 - p) * -24}px)`,
      display: "flex", alignItems: "center", gap: 18, padding: "16px 24px", borderRadius: 16, background: "rgba(15,23,42,0.93)", color: "#fff", boxShadow: "0 18px 50px rgba(15,23,42,.35)" }}>
      <span style={{ fontFamily: MONO, fontWeight: 600, fontSize: 26, color: C.brand }}>{num}</span>
      <span style={{ width: 1, height: 30, background: "rgba(255,255,255,.25)" }} />
      <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 26, letterSpacing: ".14em", textTransform: "uppercase" }}>{name}</span>
      <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 24, color: "rgba(255,255,255,.75)" }}>{line}</span>
    </div>
  );
};
```

`src/components/Captions.tsx`:
```tsx
import React from "react";
import { useCurrentFrame } from "remotion";
import { C, FONT } from "../theme";
export const Captions: React.FC<{ cues: { from: number; to: number; text: string }[] }> = ({ cues }) => {
  const f = useCurrentFrame();
  const cue = cues.find(c => f >= c.from && f <= c.to);
  if (!cue) return null;
  const op = Math.min(1, (f - cue.from) / 4, (cue.to - f) / 4);
  return (
    <div style={{ position: "absolute", left: 0, right: 0, top: 986, height: 80, display: "flex", alignItems: "center", justifyContent: "center", opacity: op }}>
      <div style={{ maxWidth: 1560, textAlign: "center", fontFamily: FONT, fontWeight: 500, fontSize: 30, lineHeight: 1.25, color: C.ink }}>{cue.text}</div>
    </div>
  );
};
```

`src/components/MotionClip.tsx`:
```tsx
import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile, useCurrentFrame, interpolate } from "remotion";
export const MotionClip: React.FC<{ src: string; duration: number; fadeIn: number; fadeOut: number }> = ({ src, duration, fadeIn, fadeOut }) => {
  const f = useCurrentFrame();
  const a = fadeIn ? interpolate(f, [0, fadeIn], [0, 1], { extrapolateRight: "clamp" }) : 1;
  const b = fadeOut ? interpolate(f, [duration - fadeOut, duration], [1, 0], { extrapolateLeft: "clamp" }) : 1;
  return <AbsoluteFill style={{ opacity: Math.min(a, b) }}><OffthreadVideo src={staticFile(src)} muted /></AbsoluteFill>;
};
```

`src/Main.tsx`:
```tsx
import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import "./fonts";
import tl from "./timeline.json";
import { Background } from "./components/Background";
import { FrameSpan, Span } from "./components/FrameSpan";
import { ChapterCard } from "./components/ChapterCard";
import { Captions } from "./components/Captions";
import { MotionClip } from "./components/MotionClip";
export const Main: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#f5f7fa" }}>
    <Background />
    {(tl.spans as Span[]).map(sp => (
      <Sequence key={sp.id} from={sp.from} durationInFrames={sp.duration} name={sp.id}><FrameSpan span={sp} /></Sequence>
    ))}
    {tl.motion.map(m => (
      <Sequence key={m.id} from={m.from} durationInFrames={m.duration} name={m.id}>
        <MotionClip src={m.src} duration={m.duration} fadeIn={m.fadeIn} fadeOut={m.fadeOut} />
      </Sequence>
    ))}
    {tl.chapters.map(c => (
      <Sequence key={c.num} from={c.from} durationInFrames={c.duration} name={`chapter-${c.num}`}>
        <ChapterCard num={c.num} name={c.name} line={c.line} duration={c.duration} />
      </Sequence>
    ))}
    <Captions cues={tl.captions} />
    <Audio src={staticFile(tl.audio)} />
  </AbsoluteFill>
);
```
The motion clips render after the frame span, so where the two overlap (the 0.4 s crossfades) the full-screen motion piece fades over or under the floating window as intended.

Run:
```bash
cd demo-video/remotion
npx tsc --noEmit
npx remotion still src/index.ts Demo ../out/still-%d.png --frame=<frames at: S02 matrix zoom, S06 options callout, S11 fact card, S13 risk toast>
npm run render
```
To find those frames: each zoom's `from` in `timeline.json` plus `span.from` plus the clip's `from` gives the absolute frame. Compute them with a two-line node snippet. Render the stills first and **look at them** (Read tool) before the full render: the callout box must sit exactly on its element, labels must be readable, and captions must stay clear of the frame.

---

## P11. QA gates

`demo-video/tools/qa.mjs`:
```js
import fs from "node:fs"; import path from "node:path"; import { execFileSync } from "node:child_process";
const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "out/SwasthyaGrid-demo.mp4");
const run = (cmd, args) => execFileSync(cmd, args, { stdio: ["ignore", "pipe", "pipe"] }).toString();
const runErr = (cmd, args) => { try { return execFileSync(cmd, args, { stdio: ["ignore", "pipe", "pipe"] }).toString(); } catch (e) { return (e.stderr || "").toString(); } };
const problems = [];
const info = JSON.parse(run("ffprobe", ["-v", "error", "-show_streams", "-show_format", "-of", "json", OUT]));
const v = info.streams.find(s => s.codec_type === "video"), a = info.streams.find(s => s.codec_type === "audio");
const dur = parseFloat(info.format.duration);
if (dur > 210.5) problems.push(`duration ${dur.toFixed(2)}s over 3:30`);
if (v.width !== 1920 || v.height !== 1080) problems.push(`resolution ${v.width}x${v.height}`);
if (!/^30(\/1)?$/.test(v.r_frame_rate)) problems.push(`fps ${v.r_frame_rate}`);
if (!a) problems.push("no audio stream");
const eb = execFileSync("ffmpeg", ["-hide_banner", "-i", OUT, "-af", "ebur128=peak=true", "-f", "null", "-"], { stdio: ["ignore", "pipe", "pipe"] }).toString() || "";
const ebErr = runErr("ffmpeg", ["-hide_banner", "-nostats", "-i", OUT, "-af", "ebur128=peak=true", "-f", "null", "-"]);
const I = parseFloat((ebErr.match(/I:\s+(-?\d+\.\d) LUFS/g) || []).pop()?.match(/-?\d+\.\d/)[0]);
if (!(I >= -15 && I <= -13)) problems.push(`integrated loudness ${I} LUFS, expected -14 +/- 1`);
const bd = runErr("ffmpeg", ["-hide_banner", "-nostats", "-i", OUT, "-vf", "blackdetect=d=0.25:pix_th=0.10", "-an", "-f", "null", "-"]);
if (/black_start/.test(bd)) problems.push("black frames detected:\n" + bd.split("\n").filter(l => l.includes("black_start")).join("\n"));
const fz = runErr("ffmpeg", ["-hide_banner", "-nostats", "-i", OUT, "-vf", "freezedetect=n=0.001:d=3.5", "-an", "-f", "null", "-"]);
const freezes = fz.split("\n").filter(l => l.includes("freeze_duration"));
if (freezes.length) console.warn("WARN long static stretches (review, they may be intentional holds):\n" + freezes.join("\n"));
const scratch = path.join(ROOT, "vo/raw/SCRATCH.json");
if (fs.existsSync(scratch) && JSON.parse(fs.readFileSync(scratch, "utf8")).length && !process.argv.includes("--allow-scratch")) problems.push("scratch voiceover still in use: " + fs.readFileSync(scratch, "utf8"));
execFileSync("ffmpeg", ["-y", "-v", "error", "-i", OUT, "-vf", "fps=1/6,scale=480:-1,tile=6x6", "-frames:v", "1", path.join(ROOT, "out/contact-sheet.jpg")]);
console.log(`duration ${dur.toFixed(2)}s, ${v.width}x${v.height} @ ${v.r_frame_rate}, loudness ${I} LUFS`);
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
console.log("QA passed");
```
Remove the unused first `eb` line if it throws; `ebErr` is the one that carries the reading.

Then, by eye (use the Read tool on each image):
1. `out/contact-sheet.jpg`: every chapter appears, the order is right, and nothing is dark, broken or showing an offline banner.
2. The four stills from P10.
3. Play the first 30 s and the Voice scene with any player, if one is available, and note sync. Voice must start within about 0.3 s of its scene's first action.

Poster: `ffmpeg -y -ss <S02 matrix zoom seconds + 1> -i out/SwasthyaGrid-demo.mp4 -frames:v 1 out/poster.jpg`.

---

## P12. Deliver

1. Deliverables in `demo-video/out/`:
   - `SwasthyaGrid-demo.mp4` (1920x1080, 30 fps, H.264, AAC 320k, -14 LUFS, at most 3:30)
   - `SwasthyaGrid-demo.srt`
   - `poster.jpg`
   - `contact-sheet.jpg`
   - `share-copy.txt`
2. Commit only sources: `demo-video/README.md`, `EXECUTION-NOTES.md`, `script/**`, `tools/**` (not `node_modules`), `motion/*/index.html`, `motion/*/assets/logo.png`, `remotion/{package.json,package-lock.json,tsconfig.json,remotion.config.ts,src/**}` (excluding `src/timeline.json`, which holds capture-specific data; add it to `.gitignore`), and `.gitignore`. Run the secrets scan and the em dash scan on staged lines as in every earlier task. Commit message: `feat(video): add the demo video pipeline (capture, HyperFrames, Remotion, mix)`. No trailer. Push `release/v2:master` only if the user asks.
3. `demo-video/README.md`: the run order P2 to P11 as a numbered command list, and how to re-record one voiceover line and rebuild (P3, P4, P5 for that scene, then P8 to P11).
4. Final report to the user:
   - the output path, duration and loudness
   - the chapter list with timestamps
   - whether scratch voiceover is still in use
   - whether `S13alt` was used and why
   - a one-line music licence reminder
   - the known imperfections from the freeze warnings

---

## 13. Look and sound reference (the agency-grade checklist; every item is already built into the code above)

| Area | Decision |
|---|---|
| Canvas | Off-white `#f5f7fa` with a faint 28 px dot grid and one soft green glow, top left. Nothing else moves in the background. |
| Product framing | The app floats in a 1600x940 browser window with a 40 px chrome bar showing the real route, 14 px radius and a two-layer soft shadow. The window stays put while its content changes, so the viewer never loses their bearings. |
| Motion language | One easing family (cubic in-out), 8-frame crossfades between screens, zooms of 1.18 to 1.30 about the feature being narrated with 16-frame ramps, callouts that draw on in 8 frames. No spins, no bounces, no flashy shader transitions. |
| Cursor | Always visible and always purposeful: it moves to what the voice is talking about, and clicks show a green ripple. |
| Type | Geist and Geist Mono (the product's own fonts). Captions 30 px ink. Callout labels are ink pills with a green dot. Chapter cards are dark glass with a green mono number. |
| Colour | Product light tokens only: ink `#0f172a`, muted `#475467`, brand `#0f9f7a`, critical `#d63447`. |
| Story arc | Problem (a vaccine runs out) to promise (Friday never comes) to See, Decide, Move, Ask, Operate, Close the loop, to why it wins, to the end card. Every chapter hands off to the next, the way the product does. |
| Proof moments | A live approval creates a real shipment. The same shipment is tracked. A real Hindi question gets a real Sarvam answer, heard aloud. A real CRM confirmation moves a real risk indicator. |
| Honesty | The voiceover names Sarvam for voice. The end card states the pilot data honestly. No claim goes beyond what the build does. |
| Sound | The music bed sits well under the voice (sidechain ducked). Clicks only on decisive actions. A soft whoosh at chapter changes. A chime on approval and on the risk change. -14 LUFS master. |
| Language | No dashes, no banned words, short sentences, verbs over adjectives. |

---

## 14. Risks and fallbacks (already decided)

| Risk | Fallback |
|---|---|
| R1. /brag fails on Windows, or its output breaks the brand or truth rules | The HyperFrames `finale-fallback` (P6.4) |
| R2. The recommendation id in `state.json` is missing from the board | P4 picked it right after the reset. Re-run P4 and then capture immediately. |
| R3. The approval toast wording differs | Loosen the regex to `/Approved|Shipment/` and log it |
| R4. `SHIP` is null (the approval failed) | S07 and S08 fall back to the first order row or tracking link. Note it. |
| R5. The voice reply takes more than 30 s or the socket fails | Re-run `node tools/capture.mjs S11` once (one more Sarvam call). If it fails again, use `/voice?ask=` with the English chip "Which district needs attention first?", and change `S11b` to keep its wording (the S11a narration still holds). |
| R6. The CRM confirm fails, or reports the delivery as already confirmed on a rerun | This happens because the CRM wrote a Firestore delivery marker the first time. Do not delete Firestore data. Re-run P4 (the reset re-creates the backend state) and capture S13 again; the backend accepts the POD, and the CRM transaction no-ops but still shows success. If the CRM shows an error, record S13a up to the form, then confirm through the backend POD endpoint off camera and keep S13b. Note it. |
| R7. The risk toast does not arrive in 3.5 s | The script already marks `risk_chip` instead. Use `S13alt` if `RISK_IMPROVES` is false. |
| R8. The total runs over 210 s | Re-record the longest takes faster. `process-vo` already allows up to a 6 percent speed-up. Never drop a screen. |
| R9. The backend tick loop slows over a long session | P4 resets it right before capture. If a capture is repeated after more than 30 minutes, run P4 again first. |
| R10. Screencast frames arrive at the wrong size | Add `--window-size=1920,1200` to the launch args. `assemble-clips` scales to 1920x1080 regardless. |
| R11. The Windows display is scaled to 125 percent | Already neutralised by `deviceScaleFactor: 1` and `--force-device-scale-factor=1`. |
| R12. The Remotion render is slow | Render at `--concurrency=50%`. Use Studio preview (`npm run studio`) for iteration and render only for the final. |

## 15. Verification summary

The work is done when all of the following hold:
- `qa.mjs` prints "QA passed" without `--allow-scratch`: at most 3:30, 1920x1080 at 30 fps, -14 ±1 LUFS, no black frames.
- The route gate in `build-timeline` passes: all 20 dashboard routes, a shipment tracking page and the CRM were captured.
- The contact sheet and the four stills have been viewed and are clean.
- No em or en dash appears in any committed file, caption, label or voiceover line.
- The final report lists everything under P12 item 4.
