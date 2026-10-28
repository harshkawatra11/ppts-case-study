# Dream11 "Life After the Ban": 2-minute video walkthrough plan (HyperFrames)

> **Who executes this.** A Sonnet-class agent. Everything is decided here: the script, the
> storyboard, every command and every file's contents. Paste, run, check. Do not redesign the
> motion, rewrite the narration or add scenes. When something fails, find the row in §11 and
> apply that fix only.
>
> **This file replaces the deck-build plan.** The deck is built (Figma file
> `YoiazGGOribfg69EjEDIlP`, 12 slides). Its build log is in `iim-lucknow-pivot/deck/figma.md`.
> §13 lists the deck items that are still open; they are not part of this job.

---

## 0. Context

The PIVOT '26 case allows an optional 2-minute video walkthrough, linked from the submission.
The team wants a video that walks the judges through the strategy by animating the finished deck:
slides build panel by panel as Harsh narrates, the camera pushes into the panel being discussed,
and the brand logos already placed on the deck pop in on cue.

**Decisions locked with the user (7 Oct 2026)**

| Decision | Choice |
|---|---|
| Engine | HyperFrames 0.8.140 (installed). Remotion is not used |
| brag skill | Used only for its finishing idea: a picked poster frame and share text. Its bundled reference files are missing on this machine and it only makes 15 to 25 second promos, so §10 gives the finishing commands directly. Do not invoke `/brag` |
| HyperFrames route | `general-video` (narrated, multi-scene, custom) |
| Voice | Harsh records it, one file per script line (L01 to L11) |
| Music, sound effects, captions | None. Voice only |
| Logos | The real logo images the user already placed in the Figma deck, exported from Figma. They appear only where the brand is named on the slide. No logo implies a partnership |
| Length | 120.0 s hard ceiling. Target 112 to 118 s |
| Format | 1920×1080, 30 fps, MP4 (H.264 + AAC) |

**What the video is.** Eleven scenes, one per script line. Each scene shows one slide as a faint
"blueprint" (the slide under a white veil), then reveals its panels in the order the voice
mentions them, with a virtual camera moving to each panel. Every scene ends on the full slide.
Scene 8 counts the ₹250 Cr number up from zero. The glossary slide (slide 11) is not shown.

**Why this design.** The slides are dense and already argued. Rebuilding charts in HTML would
cost days and risk number drift. Using the exported slide as the picture keeps every number
identical to the submitted deck, and the reveal-and-camera layer supplies the motion.

---

## 1. Tools confirmed on this machine (7 Oct)

| Tool | Version / path | Used for |
|---|---|---|
| Node | v24.15.0 | HyperFrames CLI |
| HyperFrames | 0.8.140 (`npx hyperframes`) | lint, check, snapshot, preview, render |
| ffmpeg / ffprobe | 8.1.1 | voice clean-up, duration, poster, mux |
| Whisper (Python) | `whisper` CLI on PATH, `import whisper` works | word timestamps |
| Figma MCP | `mcp__figma-mcp__use_figma`, `get_screenshot` | slide and logo export |
| Skills on disk | `C:\Users\harsh\.claude\skills\{hyperframes,general-video,hyperframes-core,hyperframes-animation,hyperframes-cli,media-use}` | contracts |

Load the Figma tools with one call:
`ToolSearch` query `select:mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot`.
Pass `skillNames: "resource:figma-use,resource:figma-use-slides"` on every `use_figma` call.

---

## 2. Ground rules

1. **Writing rules** (standing memory): no em dashes or en dashes anywhere, no rhetorical-question
   hooks, plain spoken voice. The script in §4 already complies. Do not edit it.
2. **Numbers.** Every spoken number is on the deck. Do not add a number that is not on a slide.
3. **Logos.** Only the image nodes exported from the deck. Never download a logo from the web
   for this video. Never draw one.
4. **The deck must be left exactly as found.** §6.3 hides logo nodes for the export and §6.5
   restores them. If a session dies in between, the deck has invisible logos. **Whenever you
   resume this plan, run §6.5 first.** It is safe to run any number of times.
5. **HyperFrames contract** (from `hyperframes-core`), already built into the generator:
   - one paused GSAP timeline registered at `window.__timelines["main"]`
   - timed elements carry `class="clip"` plus `data-start` and `data-duration`
   - never tween `visibility`, `display` or `autoAlpha` on a `.clip`; animate a child
   - no CSS `transform` on a node that GSAP also transforms; initial states go in `fromTo`
   - every `<audio>` has an `id`; no `crossorigin`; no `.play()` calls
   - no clocks, no unseeded random, no `repeat: -1`
   - a named font needs a local `@font-face`
6. **Do not render before the user approves the preview** (§9.4).
7. **No commits are required.** If you commit, add no Co-Authored-By trailer (standing memory).

---

## 3. Folder layout (all under `iim-lucknow-pivot/video/`)

```
video/
  walkthrough-script.md          # §4, for Harsh to read while recording
  voice/raw/                     # Harsh drops L01..L11 here (any of .wav .m4a .mp3)
  walkthrough/                   # the HyperFrames project (created by init, §7.1)
    BRIEF.md
    index.html                   # GENERATED by tools/build.py. Never hand-edit
    data/layout.json             # slide rects and logo rects from Figma (§6.2)
    data/script.json             # the 11 lines (§7.3)
    data/scenes.json             # the storyboard as data (§7.4)
    data/cues/L01.json ...       # Whisper word timestamps (§8.3)
    assets/slides/s01.png ...    # 3840×2160 slide exports, logos hidden (§6.4)
    assets/logos/25-9.png ...    # logo exports (§6.3)
    assets/voice/L01.wav ...     # cleaned voice (§8.2)
    assets/fonts/Poppins-ExtraBold.ttf
    tools/build.py               # §7.5
    tools/voice.py               # §8.2 and §8.3
  out/Dream11_Walkthrough_TeamIdeaForge.mp4
  out/poster.jpg
  out/share-copy.txt
```

---

## 4. The script (locked)

Write this section verbatim to `iim-lucknow-pivot/video/walkthrough-script.md`. It is 266 words.
At a calm 150 words a minute it runs about 106 seconds; with pauses the video lands near 115.

```markdown
# Dream11: Life After the Ban. Video walkthrough script (Team IdeaForge)

Record each line as its own file: L01, L02 ... L11. Read the notes at the bottom first.

## L01 (cover, about 7 s)
We are Team IdeaForge. Dream11 lost its prizes. Our verdict on the pivot: keep it, and sharpen it.

## L02 (executive summary, about 11 s)
The ban took ninety-five percent of revenue. Do not keep the global, multi-sport plan, and do not wait for the court. Make Dream11 India's free cricket skill league.

## L03 (who left, about 12 s)
Three hundred million is a registry. At most one in six was active in a month, and we estimate over half of those who left came for the money.

## L04 (who stayed, about 10 s)
Five behavioural segments explain the base. Two never needed a prize: Cricket Brains and League Captains. That is about thirteen million fans to build for.

## L05 (verdict, about 12 s)
On six criteria, the skill league scores four point three five. The declared platform scores two point six. FanCode is where fans watch. Dream11 is where they play.

## L06 (the loop, about 12 s)
Match day runs on one loop: pick a team, call each over, prove it in a live rating, rank against friends, repeat. No rupee at stake, only your judgment.

## L07 (roadmap, about 10 s)
The loop ships before the Australia Tests and scales on IPL 2027. We say no to seven things, including our own streaming and any prize.

## L08 (revenue, about 10 s)
Five legal revenue lines earn two hundred and fifty crore rupees in twelve months. Each passes three tests: no stake, no prize, nothing bought.

## L09 (metrics and stress test, about 14 s)
The north star is weekly team-builders, doubling to ten million by September 2027. A ninety-day signal can prove us wrong. If the ban falls, Dream11 keeps one rupee in a hundred, so Dream11 stays free.

## L10 (appendix, about 6 s)
Every number is sourced or labelled as an assumption, and our AI use is disclosed.

## L11 (close, about 4 s)
Sharpen the pivot. FanCode watches, Dream11 plays. Thank you.

---

## How to record

- Phone voice-memo app or a laptop mic is fine. Quiet room, phone 15 cm from your mouth, no fan or AC.
- One file per line. Name them L01, L02 ... L11 (any of .wav, .m4a, .mp3).
- Leave about half a second of silence before and after each line. Do not clip the first word.
- Speak at a steady, unhurried pace. Do not rush to hit the seconds shown; the video adapts to you.
- Say the numbers exactly as written ("four point three five", "two hundred and fifty crore rupees").
- If you fluff a line, record that line again. Keep only the good take.
- Put the 11 files in `iim-lucknow-pivot/video/voice/raw/` and say "voice is ready".

## Shorter versions (use only if told the video runs over 2 minutes)

- L09 short: The north star is weekly team-builders, doubling to ten million by September 2027. If the ban falls, Dream11 keeps one rupee in a hundred, so it stays free.
- L05 short: The skill league scores four point three five on six criteria; the declared platform, two point six. FanCode is where fans watch. Dream11 is where they play.
- L03 short: Three hundred million is a registry. At most one in six was active in a month, and most who left came for the money.
```

**Cue words.** The storyboard fires each visual beat on a word in the recording (found with
Whisper). If Harsh changes the wording, the beat falls back to a fixed fraction of the line, so
nothing breaks; it is only slightly less tight.

---

## 5. Storyboard (what the viewer sees)

Common to scenes 2 to 10: the scene opens with the slide's ribbon, section chip and headline
fully visible and everything below it faint (white veil at 86%). Each beat reveals its panel
with a left-to-right wipe and moves the camera there. The last beat removes the veil and pulls
the camera back to the full slide. Scenes cross-fade over 0.30 s.

| Scene | Slide | Line | Beats (cue word → what happens) |
|---|---|---|---|
| 1 | Cover | L01 | start → title block appears, the small Dream11 and IIM marks pop · "prizes" → the attention map opens outward from its hub in a growing circle, camera moves onto the map, the four app logos and the Dream11 mark pop in one after another · "verdict" → camera moves to the verdict card, card wipes in · "sharpen" → full slide |
| 2 | Executive summary | L02 | "ban" → "What the ban took" panel (95% donut) · "keep" → the blue DO NOT panel · "make" → the green DO panel · end → full slide, including the five answer cards |
| 3 | Who left | L03 | "registry" → funnel panel · "left" → "Where the leavers went" and "Who left, by segment" together · end → full slide; the six app logos in the jobs card pop in |
| 4 | Who stayed | L04 | "segments" → segment heatmap · "prize" → "what they want now" table · "brains" → red ring around the two CORE rows · "thirteen" → size and value panel · end → full slide |
| 5 | Verdict | L05 | "criteria" → options heatmap with its verdict chips · "four" → ring on row D (4.35) · "declared" → ring on row A (2.60) · "watch" → FanCode card, seam chips and Dream11 card together, logo pops · "play" → full slide with the CONCLUSIVELY card |
| 6 | The loop | L06 | "loop" → camera on the loop, hub appears · "pick", "call", "prove", "rank", "repeat" → the five loop cards appear one by one; on "repeat" the arrows appear · "rupee" → the three legal-test chips · end → full slide |
| 7 | Roadmap | L07 | "ships" → the Gantt draws left to right (slow wipe, 1.6 s) · "IPL" → ring on the IPL 2027 bar · "seven" → "We will not build" panel · end → full slide |
| 8 | Revenue | L08 | "revenue" → waterfall panel wipes in, with the big number covered · "crore" → the number counts 0 to 250 in the deck's red, then the real slide number takes over · "tests" → legality test panel · end → full slide |
| 9 | Metrics and stress test | L09 | "north" → KPI tree, formula and targets table · "signal" → the blue 90-day card · "ban" → stress-test chip and bar panel · "free" → decision-rule panel · end → full slide |
| 10 | Appendix | L10 | "sourced" → Method and Sources panels · "assumption" → assumptions table · "AI" → camera and ring on the AI-use card · end → full slide |
| 11 | Thank you | L11 | Full slide from the start, slow 5% push-in, Dream11 mark pops under the sign-off. Holds 1.2 s after the last word |

**Motion vocabulary used** (names from `hyperframes-animation/rules/`): `viewport-change` and
`coordinate-target-zoom` (one camera wrapper per scene, targets baked as numbers),
`multi-phase-camera` (slow 1.5% drift on holds), `spring-pop-entrance` (logos),
`counting-dynamic-scale` (the ₹250 Cr count), `css-marker-patterns` (rings). Camera eases are
`power3.inOut`; no springs on the camera.

---

## 6. Phase A: export from Figma

File key `YoiazGGOribfg69EjEDIlP`. Slides are read in grid order, so keys are `s01` to `s12`
whatever the slides are named. On 7 Oct the IDs were: s01 `2:2`, s02 `2:4`, s03 `2:5`, s04 `2:6`,
s05 `2:7`, s06 `2:8`, s07 `2:9`, s08 `2:10`, s09 `2:11`, s10 `2:12`, s11 `14:2`, s12 `2:13`.
The user edits this deck by hand, so always use what §6.2 returns, not these.

### 6.1 Make folders

```bash
cd "c:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/iim-lucknow-pivot"
mkdir -p video/voice/raw video/out
```

(The `walkthrough` folder is created by `hyperframes init` in §7.1. Run §7.1 before saving any
file into it. `init` refuses a non-empty directory.)

### 6.2 Dump the layout (read-only `use_figma`)

```js
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const slides = grid.children[0].children;
const PRE = /^(PANEL|CARD|TABLE|HEADLINE|NODE|MONEYSHOT|TITLE|KICKER|LOGO)/;
const out = {};
slides.forEach((s, i) => {
  const key = "s" + String(i + 1).padStart(2, "0"); const sb = s.absoluteBoundingBox;
  const R = n => { const b = n.absoluteBoundingBox; return [Math.round(b.x - sb.x), Math.round(b.y - sb.y), Math.round(b.width), Math.round(b.height)]; };
  const rects = {}; const put = (name, r) => { let k = name, j = 2; while (rects[k]) { k = name + " #" + j; j++; } rects[k] = r; };
  s.findAll(n => PRE.test(n.name) || (n.parent === s && /^CHIP/.test(n.name))).forEach(n => { if (n.absoluteBoundingBox) put(n.name, R(n)); });
  const logos = s.findAll(n => "fills" in n && Array.isArray(n.fills) && n.fills.some(f => f.type === "IMAGE"))
    .map(n => ({ id: n.id, file: "assets/logos/" + n.id.replace(":", "-") + ".png", rect: R(n) }));
  out[key] = { id: s.id, rects, logos };
});
return out;
```

Save the returned object, exactly as returned, to `video/walkthrough/data/layout.json`.

**Check.** 12 keys. `s01.logos` has about 7 entries, `s03.logos` about 6, `s05.logos` about 1.
If a slide the storyboard uses has changed a lot, `build.py` will name the missing targets in
§7.6 and you fix `scenes.json` there.

### 6.3 Export the logos (while they are still visible)

For every logo in `layout.json` (all slides), call `get_screenshot` with `nodeId` = the logo's
`id`, `maxDimension: 600`, `contentsOnly: true`. Then download each:

```bash
cd "c:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/iim-lucknow-pivot/video/walkthrough"
mkdir -p assets/logos assets/slides
curl -sL -o "assets/logos/25-9.png" "<url for 25:9>"     # repeat per logo; file name = id with ":" → "-"
```

Read three of the PNGs to confirm they are logos and not blank.

### 6.4 Hide the logos and logo placeholders, export the slides, then restore

**Step 1, hide (write, reversible):**

```js
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
let n = 0;
for (const s of grid.children[0].children) {
  s.findAll(x => /^LOGO:/.test(x.name) || ("fills" in x && Array.isArray(x.fills) && x.fills.some(f => f.type === "IMAGE")))
   .forEach(x => { if (x.visible) { x.visible = false; n++; } });
}
return { hidden: n };
```

Record `hidden` (expected about 20).

**Step 2, export.** For each of s01 to s10 and s12 (skip s11), call `get_screenshot` with the
slide `id`, `maxDimension: 3840`. Download each:

```bash
curl -sL -o assets/slides/s01.png "<url>"    # ... s02 to s10, and s12
```

**Step 3, restore (§6.5). Do this immediately, before anything else.**

**Step 4, check sizes:**

```bash
for f in assets/slides/*.png; do ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 "$f"; done
```

Every line must read `3840,2160`. Read `s01.png` and `s03.png`: the logos must be absent.

### 6.5 Restore the deck (run this first on every resume)

```js
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
let shown = 0, stillHidden = 0;
for (const s of grid.children[0].children) {
  s.findAll(x => /^LOGO:/.test(x.name) || ("fills" in x && Array.isArray(x.fills) && x.fills.some(f => f.type === "IMAGE")))
   .forEach(x => { if (!x.visible) { x.visible = true; shown++; } });
  stillHidden += s.findAll(x => !x.visible).length;
}
return { shown, stillHidden };
```

`shown` must equal the `hidden` count from step 1. Then take one `get_screenshot` of the cover
(`maxDimension: 1100`, `enableBase64Response: true`) and confirm the logos are back.
`stillHidden` reports any other invisible node; if it is above 0, tell the user. Do not unhide
those: the user may have hidden them on purpose.

---

## 7. Phase B: the HyperFrames project

### 7.1 Scaffold

```bash
cd "c:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/iim-lucknow-pivot/video"
npx hyperframes skills update general-video
npx hyperframes init "walkthrough" --non-interactive --example=blank --skill=general-video
cd walkthrough
mkdir -p data/cues assets/slides assets/logos assets/voice assets/fonts tools
curl -sL -o assets/fonts/Poppins-ExtraBold.ttf "https://github.com/google/fonts/raw/main/ofl/poppins/Poppins-ExtraBold.ttf"
ls -la assets/fonts    # the .ttf must be larger than 100 KB
```

Then run §6.2 to §6.5.

### 7.2 `BRIEF.md` (write verbatim at the project root)

```markdown
---
workflow: general-video
flow: automation
storyboard: no
message: "Sharpen the pivot: Dream11 becomes India's free cricket skill league"
destination: youtube-unlisted
aspect: 1920x1080
language: en
length: 115s
audience: "IIM Lucknow PIVOT '26 judges"
---

## Intent

A two-minute narrated walkthrough of Team IdeaForge's deck for the Dream11 case. The finished
slides are the picture; panels reveal in the order the voice mentions them and a virtual camera
moves to each. Calm, consulting register. Voice only: no music, no sound effects, no captions.

## Assets

- assets/slides/s01.png to s12.png: 3840x2160 exports of the Figma deck, logos hidden.
- assets/logos/*.png: the logo images the team placed on the deck, exported from Figma.
- assets/voice/L01.wav to L11.wav: the team's own recorded narration, one file per line.

## Customizations

- Count-up on the Rs 250 Cr revenue number in scene 8.
- Logos pop in on cue; they appear only where the slide names the brand.

## Notes

- index.html is generated by tools/build.py. Edit data/scenes.json and re-run; never hand-edit.
- Hard ceiling 120 seconds.
```

### 7.3 `data/script.json` (write verbatim)

```json
{
  "L01": "We are Team IdeaForge. Dream11 lost its prizes. Our verdict on the pivot: keep it, and sharpen it.",
  "L02": "The ban took ninety-five percent of revenue. Do not keep the global, multi-sport plan, and do not wait for the court. Make Dream11 India's free cricket skill league.",
  "L03": "Three hundred million is a registry. At most one in six was active in a month, and we estimate over half of those who left came for the money.",
  "L04": "Five behavioural segments explain the base. Two never needed a prize: Cricket Brains and League Captains. That is about thirteen million fans to build for.",
  "L05": "On six criteria, the skill league scores four point three five. The declared platform scores two point six. FanCode is where fans watch. Dream11 is where they play.",
  "L06": "Match day runs on one loop: pick a team, call each over, prove it in a live rating, rank against friends, repeat. No rupee at stake, only your judgment.",
  "L07": "The loop ships before the Australia Tests and scales on IPL 2027. We say no to seven things, including our own streaming and any prize.",
  "L08": "Five legal revenue lines earn two hundred and fifty crore rupees in twelve months. Each passes three tests: no stake, no prize, nothing bought.",
  "L09": "The north star is weekly team-builders, doubling to ten million by September 2027. A ninety-day signal can prove us wrong. If the ban falls, Dream11 keeps one rupee in a hundred, so Dream11 stays free.",
  "L10": "Every number is sourced or labelled as an assumption, and our AI use is disclosed.",
  "L11": "Sharpen the pivot. FanCode watches, Dream11 plays. Thank you."
}
```

### 7.4 `data/scenes.json` (write verbatim)

How to read a beat:
- `cue`: words to look for in the recording, in order of preference. `at`: fallback position as
  a fraction of the line (also used in draft mode).
- `cam`: where the camera goes. A name is matched by prefix against `layout.json`; a list of four
  numbers is a rectangle `[x, y, w, h]` in 1920×1080 slide pixels; a list of names or rectangles
  means their bounding box; `"wide"` is the full slide.
- `reveal`: panels to wipe in. `wipe`: seconds for the wipe (default 0.55).
- `ring`: draws a red ring around a rectangle for `hold` seconds (default 1.6).
- `logos`: `"all"`, or `{"in": target}` for the logos inside a target.
- `radial`: opens a panel outward in a circle from a point given as fractions of the panel.
- `count`: counts a number up over the named rectangle.
- `unveil`: removes the veil so the whole slide shows.

```json
[
  {"id": "sc01", "slide": "s01", "line": "L01", "header": [[0, 0, 1220, 122]], "beats": [
    {"at": 0.0, "reveal": [[40, 122, 1180, 350]], "logos": {"in": [0, 0, 1220, 480]}},
    {"cue": ["prizes", "prices", "prize"], "at": 0.36, "cam": "CARD: attention map", "radial": {"t": "CARD: attention map", "cx": 0.5, "cy": 0.44}, "logos": {"in": "CARD: attention map"}},
    {"cue": ["verdict"], "at": 0.60, "cam": "CARD: verdict", "reveal": ["CARD: verdict"]},
    {"cue": ["sharpen"], "at": 0.90, "cam": "wide", "unveil": true}
  ]},
  {"id": "sc02", "slide": "s02", "line": "L02", "header": [[0, 0, 1920, 306]], "beats": [
    {"cue": ["ban"], "at": 0.05, "cam": "PANEL: WHAT THE BAN TOOK", "reveal": ["PANEL: WHAT THE BAN TOOK"]},
    {"cue": ["keep"], "at": 0.30, "cam": "PANEL: DO NOT", "reveal": ["PANEL: DO NOT"]},
    {"cue": ["make"], "at": 0.68, "cam": "PANEL: DO: SHARPEN", "reveal": ["PANEL: DO: SHARPEN"]},
    {"at": 0.93, "cam": "wide", "unveil": true}
  ]},
  {"id": "sc03", "slide": "s03", "line": "L03", "header": [[0, 0, 1920, 306]], "beats": [
    {"cue": ["registry"], "at": 0.12, "cam": "PANEL: THE 300M", "reveal": ["PANEL: THE 300M"]},
    {"cue": ["left", "money"], "at": 0.70, "cam": ["PANEL: WHERE THE LEAVERS", "PANEL: WHO LEFT"], "reveal": ["PANEL: WHERE THE LEAVERS", "PANEL: WHO LEFT"]},
    {"at": 0.94, "cam": "wide", "unveil": true, "logos": "all"}
  ]},
  {"id": "sc04", "slide": "s04", "line": "L04", "header": [[0, 0, 1920, 306]], "beats": [
    {"cue": ["segments"], "at": 0.08, "cam": "TABLE: segment heatmap", "reveal": ["TABLE: segment heatmap"]},
    {"cue": ["prize"], "at": 0.40, "cam": "TABLE: wants", "reveal": ["TABLE: wants"]},
    {"cue": ["brains", "brain"], "at": 0.55, "ring": [1146, 490, 710, 108]},
    {"cue": ["thirteen", "13"], "at": 0.78, "cam": "PANEL: SIZE", "reveal": ["PANEL: SIZE"]},
    {"at": 0.94, "cam": "wide", "unveil": true}
  ]},
  {"id": "sc05", "slide": "s05", "line": "L05", "header": [[0, 0, 1920, 306]], "beats": [
    {"cue": ["criteria"], "at": 0.06, "cam": [64, 318, 1248, 400], "reveal": [[64, 318, 1248, 400]]},
    {"cue": ["four", "435", "4"], "at": 0.22, "ring": [64, 532, 1248, 50]},
    {"cue": ["declared"], "at": 0.42, "ring": [64, 382, 1248, 50]},
    {"cue": ["watch"], "at": 0.68, "cam": [64, 742, 1288, 280], "reveal": [[64, 742, 1288, 280]], "logos": {"in": [64, 742, 1288, 280]}},
    {"cue": ["play"], "at": 0.90, "cam": "wide", "unveil": true}
  ]},
  {"id": "sc06", "slide": "s06", "line": "L06", "header": [[0, 0, 1920, 306]], "beats": [
    {"cue": ["loop"], "at": 0.10, "cam": [61, 340, 942, 700], "reveal": ["CARD: loop hub"]},
    {"cue": ["pick"], "at": 0.24, "reveal": ["CARD: loop 1"]},
    {"cue": ["call"], "at": 0.34, "reveal": ["CARD: loop 2"]},
    {"cue": ["prove"], "at": 0.44, "reveal": ["CARD: loop 3"]},
    {"cue": ["rank"], "at": 0.60, "reveal": ["CARD: loop 4"]},
    {"cue": ["repeat"], "at": 0.72, "reveal": ["CARD: loop 5", [61, 340, 942, 640]]},
    {"cue": ["rupee"], "at": 0.80, "reveal": [[61, 980, 942, 56]]},
    {"at": 0.94, "cam": "wide", "unveil": true}
  ]},
  {"id": "sc07", "slide": "s07", "line": "L07", "header": [[0, 0, 1920, 306]], "beats": [
    {"cue": ["ships", "loop"], "at": 0.06, "cam": "TABLE: gantt", "reveal": ["TABLE: gantt"], "wipe": 1.6},
    {"cue": ["ipl"], "at": 0.42, "ring": [1031, 408, 267, 44]},
    {"cue": ["seven", "no"], "at": 0.62, "cam": "PANEL: WE WILL NOT BUILD", "reveal": ["PANEL: WE WILL NOT BUILD"]},
    {"at": 0.93, "cam": "wide", "unveil": true}
  ]},
  {"id": "sc08", "slide": "s08", "line": "L08", "header": [[0, 0, 1920, 306]], "beats": [
    {"cue": ["revenue", "legal"], "at": 0.08, "cam": "PANEL: 12-MONTH", "reveal": ["PANEL: 12-MONTH"]},
    {"cue": ["crore", "fifty", "250"], "at": 0.36, "count": {"t": "MONEYSHOT", "from": 0, "to": 250, "prefix": "₹", "suffix": " Cr", "dur": 1.3}},
    {"cue": ["tests", "passes"], "at": 0.64, "cam": "PANEL: THE LEGALITY", "reveal": ["PANEL: THE LEGALITY"]},
    {"at": 0.93, "cam": "wide", "unveil": true}
  ]},
  {"id": "sc09", "slide": "s09", "line": "L09", "header": [[0, 0, 1920, 306]], "beats": [
    {"cue": ["north"], "at": 0.04, "cam": [64, 318, 1066, 488], "reveal": [[64, 318, 1066, 488]]},
    {"cue": ["signal"], "at": 0.44, "cam": "CARD: kill signal", "reveal": ["CARD: kill signal"]},
    {"cue": ["ban"], "at": 0.62, "cam": [1154, 318, 702, 398], "reveal": [[1154, 318, 702, 398]]},
    {"cue": ["free"], "at": 0.88, "cam": "PANEL: THE DECISION RULE", "reveal": ["PANEL: THE DECISION RULE"]},
    {"at": 0.97, "cam": "wide", "unveil": true}
  ]},
  {"id": "sc10", "slide": "s10", "line": "L10", "header": [[0, 0, 1920, 306]], "beats": [
    {"cue": ["sourced", "source"], "at": 0.12, "reveal": ["PANEL: METHOD", "PANEL: SOURCES"]},
    {"cue": ["assumption"], "at": 0.48, "reveal": ["TABLE: assumptions"]},
    {"cue": ["ai", "disclosed"], "at": 0.72, "cam": "CARD: ai use", "reveal": ["CARD: ai use"], "ring": "CARD: ai use"},
    {"at": 0.95, "cam": "wide", "unveil": true}
  ]},
  {"id": "sc11", "slide": "s12", "line": "L11", "full": true, "push": 1.05, "beats": [
    {"at": 0.25, "place": {"from": "s01", "pick": "largest", "rect": "LOGO: Dream11"}}
  ]}
]
```

Explicit rectangles above come from the deck's build geometry (heatmap rows 50 px tall from
y 382; "wants" rows 54 px from y 382; Gantt columns 122 px from x 386). The user has edited the
deck by hand since, so every ring is checked on a snapshot in §9.2.

### 7.5 `tools/build.py` (write verbatim)

```python
"""Generate index.html for the Dream11 walkthrough.
Usage (from the project root):  python tools/build.py           # real voice + Whisper cues
                                python tools/build.py --draft   # no voice; estimated timings
Reads data/layout.json, data/scenes.json, data/script.json, data/cues/*.json, assets/voice/*.wav
"""
import json, re, subprocess, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
DRAFT = "--draft" in sys.argv
W, H = 1920, 1080
LEAD, TAIL, XF, END_HOLD = 0.30, 0.35, 0.30, 1.20   # seconds
WPS = 2.5            # draft speaking rate, words a second
MAXS = 1.90          # camera zoom ceiling (slides are 2x, so this stays sharp)
ANTICIPATE = 0.20    # visuals lead the cue word by this much
MIN_GAP = 0.50       # minimum time between beats
CEILING = 120.0

layout = json.load(open(ROOT / "data/layout.json", encoding="utf-8"))
scenes = json.load(open(ROOT / "data/scenes.json", encoding="utf-8"))
script = json.load(open(ROOT / "data/script.json", encoding="utf-8"))
norm = lambda s: re.sub(r"[^a-z0-9]", "", s.lower())

# ---------- geometry ----------
def is_rect(t):
    return isinstance(t, list) and len(t) == 4 and all(isinstance(v, (int, float)) for v in t)

def one_rect(slide, t):
    if is_rect(t):
        return list(t)
    names = layout[slide]["rects"]
    hits = [k for k in names if k.startswith(t)]
    if not hits:
        raise SystemExit(f"\n[{slide}] target not found: {t!r}\nAvailable names:\n  " + "\n  ".join(sorted(names)))
    return list(names[hits[0]])

def rect_of(slide, t):
    if t == "wide":
        return [0, 0, W, H]
    if isinstance(t, list) and not is_rect(t):
        rs = [one_rect(slide, x) for x in t]
        x0 = min(r[0] for r in rs); y0 = min(r[1] for r in rs)
        x1 = max(r[0] + r[2] for r in rs); y1 = max(r[1] + r[3] for r in rs)
        return [x0, y0, x1 - x0, y1 - y0]
    return one_rect(slide, t)

def grow(r, l=6, t=6, rr=14, b=14):          # room for the 7 px sticker back-cards
    x = max(0, r[0] - l); y = max(0, r[1] - t)
    return [x, y, min(W, r[0] + r[2] + rr) - x, min(H, r[1] + r[3] + b) - y]

def cam_for(r, pad=44):
    if r == [0, 0, W, H]:
        return (1.0, 0.0, 0.0)
    s = min(W / (r[2] + 2 * pad), H / (r[3] + 2 * pad), MAXS)
    s = max(s, 1.0)
    x = W / 2 - (r[0] + r[2] / 2) * s
    y = H / 2 - (r[1] + r[3] / 2) * s
    x = min(0.0, max(W - W * s, x)); y = min(0.0, max(H - H * s, y))
    return (round(s, 4), round(x, 1), round(y, 1))

def inset(r):
    return f"inset({r[1]}px {W - (r[0] + r[2])}px {H - (r[1] + r[3])}px {r[0]}px)"

def inset_closed(r):                          # zero-width at the left edge, for the wipe
    return f"inset({r[1]}px {W - r[0]}px {H - (r[1] + r[3])}px {r[0]}px)"

# ---------- timing ----------
def voice_dur(line):
    if DRAFT:
        return round(len(script[line].split()) / WPS, 2)
    p = ROOT / f"assets/voice/{line}.wav"
    if not p.exists():
        raise SystemExit(f"missing {p}. Run tools/voice.py first, or use --draft.")
    out = subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)])
    return round(float(out.decode().strip()), 3)

def words_for(line):
    p = ROOT / f"data/cues/{line}.json"
    if DRAFT or not p.exists():
        return []
    j = json.load(open(p, encoding="utf-8")); out = []
    for seg in j.get("segments", []):
        for w in seg.get("words", []):
            out.append((norm(w.get("word", "")), float(w.get("start", 0.0))))
    return [w for w in out if w[0]]

def find_cue(words, alts, after):
    best = None
    for alt in alts or []:
        toks = [norm(t) for t in alt.split() if norm(t)]
        for i in range(len(words) - len(toks) + 1):
            if words[i][1] < after:
                continue
            if all(words[i + k][0] == toks[k] for k in range(len(toks))):
                if best is None or words[i][1] < best:
                    best = words[i][1]
                break
    return best

# ---------- build ----------
els, js, audio, report = [], [], [], []
t0 = 0.0
N = len(scenes)
for si, sc in enumerate(scenes):
    sid, slide, line = sc["id"], sc["slide"], sc["line"]
    vd = voice_dur(line)
    slen = LEAD + vd + TAIL
    clip_dur = slen + (END_HOLD if si == N - 1 else XF)
    png = f"assets/slides/{slide}.png"
    words = words_for(line)
    full = sc.get("full", False)
    inner = [f'<img class="slide" src="{png}" alt="">']
    if not full:
        inner.append(f'<div class="veil" id="{sid}-veil"></div>')
    for hi, hr in enumerate(sc.get("header", [])):
        inner.append(f'<div class="rev" style="clip-path:{inset(rect_of(slide, hr))}"><img class="slide" src="{png}" alt=""></div>')
    W_ID = f"#{sid}-world"
    if si > 0:
        js.append(f'tl.fromTo("{W_ID}",{{opacity:0}},{{opacity:1,duration:{XF},ease:"power1.out"}},{t0:.3f});')
    if sc.get("push"):
        js.append(f'tl.fromTo("{W_ID}",{{scale:1}},{{scale:{sc["push"]},x:{-(sc["push"]-1)*W/2:.1f},y:{-(sc["push"]-1)*H/2:.1f},duration:{clip_dur:.3f},ease:"none"}},{t0:.3f});')
    cur = (1.0, 0.0, 0.0); last_cam_end = None; prev_local = -1.0; prev_cue = 0.0
    used_logos = set(); n = 0
    beats = sc.get("beats", [])
    times = []
    for b in beats:
        ct = find_cue(words, b.get("cue"), prev_cue) if b.get("cue") else None
        if ct is not None:
            local = LEAD + ct - ANTICIPATE; prev_cue = ct; how = "cue"
        else:
            local = LEAD + float(b.get("at", 0.5)) * vd; how = "fallback" if b.get("cue") else "fixed"
        local = max(local, prev_local + MIN_GAP if prev_local >= 0 else 0.0)
        local = min(local, max(0.0, slen - 0.55))
        local = max(local, 0.0)
        prev_local = local; times.append(local)
        report.append(f"{sid} {line} beat@{local:6.2f}s  {how:8s} {b.get('cue') or ''}")
    for bi, b in enumerate(beats):
        local = times[bi]; t = t0 + local
        nxt = (t0 + times[bi + 1]) if bi + 1 < len(beats) else (t0 + slen)
        # reveal layers
        for tgt in b.get("reveal", []):
            r = grow(rect_of(slide, tgt)); n += 1; rid = f"{sid}-r{n}"
            inner.append(f'<div class="rev" id="{rid}"><img class="slide" src="{png}" alt=""></div>')
            d = float(b.get("wipe", 0.55))
            js.append(f'tl.fromTo("#{rid}",{{clipPath:"{inset_closed(r)}",opacity:0}},{{clipPath:"{inset(r)}",opacity:1,duration:{d},ease:"power2.out"}},{t:.3f});')
        if b.get("radial"):
            rd = b["radial"]; r = grow(rect_of(slide, rd["t"])); n += 1; rid = f"{sid}-r{n}"
            cx = r[0] + r[2] * rd["cx"]; cy = r[1] + r[3] * rd["cy"]
            rad = int((max(cx - r[0], r[0] + r[2] - cx) ** 2 + max(cy - r[1], r[1] + r[3] - cy) ** 2) ** 0.5) + 12
            inner.append(f'<div class="rev" style="clip-path:{inset(r)}"><div class="rev" id="{rid}"><img class="slide" src="{png}" alt=""></div></div>')
            js.append(f'tl.fromTo("#{rid}",{{clipPath:"circle(0px at {cx:.0f}px {cy:.0f}px)",opacity:0}},{{clipPath:"circle({rad}px at {cx:.0f}px {cy:.0f}px)",opacity:1,duration:1.1,ease:"power2.out"}},{t:.3f});')
        # count-up
        if b.get("count"):
            c = b["count"]; r = rect_of(slide, c["t"]); n += 1; cid = f"{sid}-c{n}"
            fs = round(r[3] / 1.5, 1); pad = 10
            inner.append(f'<div class="cover" id="{cid}-cover" style="left:{r[0]-pad}px;top:{r[1]-pad}px;width:{r[2]+2*pad}px;height:{r[3]+2*pad}px"></div>')
            inner.append(f'<div class="count" id="{cid}" style="left:{r[0]}px;top:{r[1]}px;width:{r[2]+80}px;height:{r[3]}px;line-height:{r[3]}px;font-size:{fs}px">{c["prefix"]}{c["from"]}{c["suffix"]}</div>')
            js.append(f'(function(){{var o={{v:{c["from"]}}},el=document.getElementById("{cid}");tl.fromTo("#{cid}",{{opacity:0}},{{opacity:1,duration:0.2}},{t:.3f});tl.to(o,{{v:{c["to"]},duration:{c["dur"]},ease:"power2.out",onUpdate:function(){{el.textContent="{c["prefix"]}"+Math.round(o.v)+"{c["suffix"]}";}}}},{t:.3f});}})();')
            end = t + c["dur"] + 0.45
            js.append(f'tl.to(["#{cid}","#{cid}-cover"],{{opacity:0,duration:0.3,ease:"power1.out"}},{end:.3f});')
        # ring
        if b.get("ring"):
            r = grow(rect_of(slide, b["ring"]), 6, 6, 6, 6); n += 1; gid = f"{sid}-g{n}"
            hold = min(float(b.get("hold", 1.6)), max(0.6, nxt - t - 0.1))
            inner.append(f'<div class="ring" id="{gid}" style="left:{r[0]}px;top:{r[1]}px;width:{r[2]}px;height:{r[3]}px"></div>')
            js.append(f'tl.fromTo("#{gid}",{{opacity:0,scale:1.05}},{{opacity:1,scale:1,duration:0.3,ease:"power3.out"}},{t + 0.15:.3f});')
            js.append(f'tl.to("#{gid}",{{opacity:0,duration:0.3,ease:"power1.in"}},{t + 0.15 + hold:.3f});')
        # logos
        if b.get("logos"):
            sel = b["logos"]; pool = [l for l in layout[slide]["logos"] if l["id"] not in used_logos]
            if sel != "all":
                rr = rect_of(slide, sel["in"])
                pool = [l for l in pool if rr[0] <= l["rect"][0] + l["rect"][2] / 2 <= rr[0] + rr[2] and rr[1] <= l["rect"][1] + l["rect"][3] / 2 <= rr[1] + rr[3]]
            pool.sort(key=lambda l: (l["rect"][1] // 60, l["rect"][0]))
            for k, l in enumerate(pool):
                used_logos.add(l["id"]); n += 1; lid = f"{sid}-l{n}"; r = l["rect"]
                if not (ROOT / l["file"]).exists():
                    print("WARNING missing logo file", l["file"]); continue
                inner.append(f'<img class="logo" id="{lid}" src="{l["file"]}" alt="" style="left:{r[0]}px;top:{r[1]}px;width:{r[2]}px;height:{r[3]}px">')
                js.append(f'tl.fromTo("#{lid}",{{opacity:0,scale:0.4}},{{opacity:1,scale:1,duration:0.45,ease:"back.out(1.8)"}},{t + 0.35 + 0.14 * k:.3f});')
        # place a logo from another slide onto a rectangle
        if b.get("place"):
            pl = b["place"]; src = layout[pl["from"]]["logos"]
            if src:
                l = max(src, key=lambda q: q["rect"][2] * q["rect"][3]); r = rect_of(slide, pl["rect"]); n += 1; lid = f"{sid}-l{n}"
                side = max(r[3] * 2.2, 96); cxp = r[0] + r[2] / 2; cyp = r[1] + r[3] / 2
                inner.append(f'<img class="logo" id="{lid}" src="{l["file"]}" alt="" style="left:{cxp - side/2:.0f}px;top:{cyp - side/2:.0f}px;width:{side:.0f}px;height:{side:.0f}px">')
                js.append(f'tl.fromTo("#{lid}",{{opacity:0,scale:0.4}},{{opacity:1,scale:1,duration:0.5,ease:"back.out(1.8)"}},{t:.3f});')
        # veil
        if b.get("unveil") and not full:
            js.append(f'tl.to("#{sid}-veil",{{opacity:0,duration:0.5,ease:"power1.out"}},{t:.3f});')
        # camera
        if b.get("cam"):
            target = cam_for(rect_of(slide, b["cam"]))
            d = 0.9 if target != (1.0, 0.0, 0.0) else 0.8
            d = min(d, max(0.4, nxt - t))
            js.append(f'tl.to("{W_ID}",{{scale:{target[0]},x:{target[1]},y:{target[2]},duration:{d:.2f},ease:"power3.inOut"}},{t:.3f});')
            hold = nxt - (t + d)
            if hold > 0.6 and target[0] > 1.0:       # slow drift so the hold is never frozen
                js.append(f'tl.to("{W_ID}",{{scale:{round(target[0] * 1.015, 4)},duration:{hold:.2f},ease:"none"}},{t + d:.3f});')
            cur = target
    els.append(
        f'<section id="{sid}" class="clip scene" data-start="{t0:.3f}" data-duration="{clip_dur:.3f}" data-track-index="{1 + si % 2}">'
        f'<div class="world" id="{sid}-world" data-layout-allow-overflow>' + "".join(inner) + "</div></section>")
    if not DRAFT:
        audio.append(f'<audio id="vo{si+1:02d}" src="assets/voice/{line}.wav" data-start="{t0 + LEAD:.3f}" data-duration="{vd:.3f}" data-track-index="10" data-volume="1"></audio>')
    t0 += slen
TOTAL = round(t0 + END_HOLD, 3)

HTML = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=1920, height=1080" />
<title>Dream11: Life After the Ban | Team IdeaForge walkthrough</title>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
<style>
@font-face {{ font-family: "Poppins"; font-weight: 800; src: url("assets/fonts/Poppins-ExtraBold.ttf") format("truetype"); }}
html, body {{ margin: 0; background: #ffffff; }}
#root {{ position: relative; width: 100%; height: 100%; overflow: hidden; background: #ffffff; }}
.scene {{ position: absolute; inset: 0; overflow: hidden; }}
.world {{ position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; transform-origin: 0 0; background: #ffffff; }}
.slide {{ position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; display: block; }}
.veil {{ position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; background: #ffffff; opacity: 0.86; }}
.rev {{ position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; }}
.ring {{ position: absolute; box-sizing: border-box; border: 5px solid #C4161C; box-shadow: 6px 6px 0 #F5C518; display: block; }}
.logo {{ position: absolute; display: block; object-fit: contain; }}
.cover {{ position: absolute; background: #ffffff; display: block; }}
.count {{ position: absolute; display: block; font-family: "Poppins"; font-weight: 800; color: #C4161C; white-space: nowrap; }}
</style>
</head>
<body>
<div id="root" data-composition-id="main" data-start="0" data-width="1920" data-height="1080" data-duration="{TOTAL}">
{chr(10).join(els)}
{chr(10).join(audio)}
</div>
<script>
const tl = gsap.timeline({{ paused: true }});
{chr(10).join(js)}
window.__timelines["main"] = tl;
</script>
</body>
</html>
"""
(ROOT / "index.html").write_text(HTML, encoding="utf-8")
print("\n".join(report))
print(f"\nscenes {N} | total {TOTAL:.2f}s | mode {'DRAFT' if DRAFT else 'VOICE'}")
fb = sum(1 for r in report if "fallback" in r)
if not DRAFT and fb:
    print(f"NOTE: {fb} cue(s) fell back to fixed positions. See plan section 11, row C2.")
if TOTAL > CEILING:
    print(f"OVER THE 2-MINUTE CEILING by {TOTAL - CEILING:.2f}s. See plan section 8.4.")
    sys.exit(3)
```

### 7.6 First build, in draft mode (before any voice exists)

```bash
cd "c:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/iim-lucknow-pivot/video/walkthrough"
python tools/build.py --draft
npx hyperframes lint
```

- If `build.py` stops with `target not found`, it prints the names that exist on that slide.
  Open `data/scenes.json`, replace the missing target with the closest name from that list (or,
  if the panel is gone, with the bounding rectangle of what replaced it), and re-run.
- Draft total should print about 113 s.
- Fix every lint **error** using §11 before going on. Lint warnings can stay.

Then go to §9.1 and §9.2 (check and snapshots) while the user records.

---

## 8. Phase C: the voice

### 8.1 Hand-off to the user

After §7.6 passes, tell the user: the script is at `iim-lucknow-pivot/video/walkthrough-script.md`;
record L01 to L11 into `iim-lucknow-pivot/video/voice/raw/`; say "voice is ready". Then stop and
wait. Do not generate a synthetic voice.

### 8.2 `tools/voice.py` (write verbatim)

```python
"""Clean the raw voice files and transcribe them with word timestamps.
Usage (from the project root):  python tools/voice.py            # clean + transcribe
                                python tools/voice.py --tempo 1.04   # also speed up slightly
"""
import glob, json, pathlib, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
RAW = ROOT.parent / "voice" / "raw"
OUT = ROOT / "assets" / "voice"; OUT.mkdir(parents=True, exist_ok=True)
CUES = ROOT / "data" / "cues"; CUES.mkdir(parents=True, exist_ok=True)
tempo = 1.0
if "--tempo" in sys.argv:
    tempo = float(sys.argv[sys.argv.index("--tempo") + 1])
    assert 1.0 <= tempo <= 1.06, "tempo must be between 1.00 and 1.06"

CHAIN = ("highpass=f=80,afftdn=nf=-25,"
         "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.06,areverse,"
         "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.10,areverse,"
         + (f"atempo={tempo}," if tempo != 1.0 else "") +
         "loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000")
total = 0.0; missing = []
for i in range(1, 12):
    line = f"L{i:02d}"
    hits = [p for p in glob.glob(str(RAW / (line + ".*"))) if p.lower().endswith((".wav", ".m4a", ".mp3", ".aac", ".ogg", ".flac"))]
    if not hits:
        missing.append(line); continue
    dst = OUT / f"{line}.wav"
    subprocess.check_call(["ffmpeg", "-y", "-v", "error", "-i", hits[0], "-af", CHAIN, "-ac", "1", "-c:a", "pcm_s16le", str(dst)])
    d = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(dst)]).decode().strip())
    total += d; print(f"{line}  {d:6.2f}s  <- {pathlib.Path(hits[0]).name}")
if missing:
    raise SystemExit("missing raw files: " + ", ".join(missing))
print(f"voice total {total:.2f}s; video will be about {total + 11 * 0.65 + 1.2:.2f}s")
if "--no-whisper" not in sys.argv:
    for i in range(1, 12):
        line = f"L{i:02d}"
        subprocess.check_call(["whisper", str(OUT / f"{line}.wav"), "--model", "small.en", "--language", "en",
                               "--word_timestamps", "True", "--output_format", "json", "--output_dir", str(CUES),
                               "--fp16", "False", "--verbose", "False"])
        j = json.load(open(CUES / f"{line}.json", encoding="utf-8"))
        print(line, "heard:", j.get("text", "").strip()[:110])
```

### 8.3 Run it

```bash
cd "c:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/iim-lucknow-pivot/video/walkthrough"
python tools/voice.py
python tools/build.py
```

- The first Whisper run downloads the `small.en` model (about 460 MB). Allow a few minutes.
- Read the "heard:" lines. Each must match the script in meaning. A wrong word that is not a cue
  word does not matter. If a whole line is garbled, the recording is too noisy: ask the user to
  re-record that line.
- `build.py` prints one row per beat with `cue` or `fallback`. Up to three fallbacks are fine.

### 8.4 If the total is over 120 seconds

Apply the first rule that fits, then re-run §8.3:

| Overrun | Action |
|---|---|
| Up to 4.0 s | `python tools/voice.py --tempo 1.04` then `python tools/build.py`. A 4% speed-up is not audible as a change |
| 4.0 to 7.0 s | `--tempo 1.06`, and if still over, ask the user to re-record L09 using "L09 short" from the script file; update `data/script.json` L09 to the short text |
| More than 7.0 s | Ask the user to re-record L09, L05 and L03 using the short versions; update `data/script.json` for those three lines. Do not go above tempo 1.06 |

Never cut the END_HOLD, never drop a scene, and never trim a line mid-sentence.

---

## 9. Phase D: check, review, render

### 9.1 Check

```bash
npx hyperframes check
```

Zero errors required. Use §11 for anything it reports. `check` runs lint again itself.

### 9.2 Snapshots (look at every scene)

`build.py` printed each beat's time. Take one snapshot 0.8 s after every beat that has a ring or
a count, plus one near the end of each scene. For a quick first pass in draft mode:

```bash
npx hyperframes snapshot --at 3,8,14,20,26,33,40,47,54,60,66,73,80,86,92,99,105,110
```

Read every image and check:
1. The slide fills the frame with no white bars at the edges, at every camera position.
2. Revealed panels sit exactly on their faint copies (no double image, no offset).
3. Each ring surrounds the row or bar it is meant to (scene 4 CORE rows, scene 5 rows D and A,
   scene 7 the IPL 2027 bar). If a ring is off, correct its rectangle in `data/scenes.json`: read
   the right coordinates off the 1920-wide slide (snapshot pixels map 1:1 at full camera).
4. Logos sit where they are on the deck, at the same size, and are not stretched.
5. Scene 8: the count-up number is the same size, colour and position as the slide's own number
   (compare a snapshot during the count with one after it). If it is larger or smaller, change
   `fs = round(r[3] / 1.5, 1)` in `build.py` to `r[3] / 1.6` or `r[3] / 1.4` and rebuild.
6. Scene 1: the map opens from the hub, and nothing outside the map card appears with it.

### 9.3 Preview

```bash
npx hyperframes preview --background
```

Confirm the printed URL returns HTTP 200 and give it to the user with this note: "Watch it once
with sound. Tell me any beat that lands early or late, any ring on the wrong row, or any line
you want to re-record."

### 9.4 Approval gate

Wait for the user. Apply their notes by editing `data/scenes.json` (move a beat with `at`, change
a `cue`, change a rectangle) and re-running `python tools/build.py` then `npx hyperframes check`.
A re-recorded line means re-running §8.3 in full.

### 9.5 Render (only after approval)

```bash
npx hyperframes render --quality delivery --output ../out/Dream11_Walkthrough_TeamIdeaForge.mp4
test -s ../out/Dream11_Walkthrough_TeamIdeaForge.mp4 && echo "render ok"
ffprobe -v error -show_entries format=duration:stream=codec_name,width,height,r_frame_rate -of default=nw=1 ../out/Dream11_Walkthrough_TeamIdeaForge.mp4
```

Required: duration at most 120.0 s and within 0.2 s of the total `build.py` printed; 1920×1080;
one video and one audio stream. Then run the `watch` skill (or extract six frames with ffmpeg)
on the MP4 and confirm the voice is audible and in sync at the start, middle and end.

---

## 10. Phase E: finish (the brag-style delivery, done by hand)

### 10.1 Poster frame

The best frame is scene 8 just after the count-up finishes (the ₹250 Cr slide, camera on the
waterfall). Take `T` = that beat's time from the `build.py` report + 2.2 s.

```bash
cd "c:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/iim-lucknow-pivot/video/out"
ffmpeg -y -v error -ss <T> -i Dream11_Walkthrough_TeamIdeaForge.mp4 -frames:v 1 -q:v 2 poster.jpg
```

Read `poster.jpg`. It must show the red ₹250 Cr clearly. If it caught a camera move, add 0.5 s.

### 10.2 Attach the poster as the file's thumbnail

```bash
ffmpeg -y -v error -i Dream11_Walkthrough_TeamIdeaForge.mp4 -i poster.jpg -map 0 -map 1 -c copy -c:v:1 mjpeg -disposition:v:1 attached_pic tmp.mp4 && mv tmp.mp4 Dream11_Walkthrough_TeamIdeaForge.mp4
```

Re-run the ffprobe line from §9.5: duration unchanged.

### 10.3 `share-copy.txt` (write verbatim, then fill the duration)

```
TITLE
Dream11: Life After the Ban | Team IdeaForge | IIM Lucknow PIVOT '26, Round 1

DESCRIPTION
A two-minute walkthrough of our answer to the PIVOT '26 case. Our verdict: sharpen the pivot.
Dream11 becomes India's free cricket skill league; FanCode is where fans watch, Dream11 is where they play.

Team IdeaForge: Harsh Kawatra (DTU), Gursimran Kaur (GGSIPU), Dayita Arora (Ramjas College, DU).

Narration recorded by the team. Slides and animation built by the team with Claude (Anthropic),
as disclosed in the deck's appendix. Logos belong to their owners and appear for reference only.

UPLOAD NOTES
- YouTube, visibility Unlisted. Upload poster.jpg as the custom thumbnail.
- Paste the link on the deck's cover and in the Unstop submission.
```

### 10.4 Report to the user

Give: the MP4 path, its duration, the poster path, the share-copy path, the number of cues that
fell back, and a reminder that the deck's logos were restored (state the `shown` count from §6.5).

---

## 11. Failure table (find the symptom, apply the fix, nothing broader)

| ID | Symptom | Cause | Fix |
|---|---|---|---|
| A1 | Deck logos invisible in Figma | §6.4 ran without §6.5 | Run §6.5 now |
| A2 | Slide PNG is not 3840×2160 | `maxDimension` omitted | Re-export with `maxDimension: 3840` |
| A3 | A logo PNG is blank or has a grey box | Node is a masked group | Re-export with `contentsOnly: false`; if still wrong, drop that logo's entry from `layout.json` |
| A4 | Screenshot URL expired (curl saves a tiny file) | URLs are short-lived | Call `get_screenshot` again and curl at once |
| B1 | `init` refuses the directory | Folder not empty | Move any files out, run init, move them back |
| B2 | `target not found` from build.py | Deck was edited; a panel was renamed or removed | Use a name from the printed list, or an explicit `[x, y, w, h]` |
| B3 | lint `font_family_without_font_face` | Font file missing or a new font-family was added | Confirm `assets/fonts/Poppins-ExtraBold.ttf` exists and is over 100 KB; do not add other font-family names |
| B4 | lint `gsap_css_transform_conflict` | A CSS `transform` was added to `.world`, `.ring` or `.logo` | Remove it; initial states live in the `fromTo` calls |
| B5 | lint `gsap_animates_clip_element` | A tween targets `#scNN` | Tweens must target `#scNN-world` or children |
| B6 | check reports `container_overflow` or `text_box_overflow` | The camera moves content past the frame | Confirm `data-layout-allow-overflow` is on `.world`; add it to the element named in the finding |
| B7 | check reports a failed request for gsap | No network | `curl -sL -o assets/gsap.min.js https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js`, then in `build.py` change the script `src` to `assets/gsap.min.js` and rebuild |
| B8 | Snapshot shows a blank or white frame mid-scene | Slide PNG path wrong or file missing | `ls assets/slides`; names must be `s01.png` etc. |
| B9 | White gap at an edge when zoomed | Camera clamp bypassed by a hand edit | Rebuild from `build.py`; never hand-edit `index.html` |
| B10 | Reveal looks soft or pixelated | Zoom above 1.9 | Keep `MAXS = 1.90` |
| B11 | A wipe shows a hard vertical edge sweeping across a dark card | Normal for the wipe | Leave it; if the user dislikes it, set `"wipe": 0.3` on that beat |
| B12 | check contrast finding on `.count` | Red on white, large text | Informational; leave |
| C1 | `whisper` fails or is very slow | Model download or CPU | Use `--model base.en` in `voice.py`; if it still fails run `python tools/voice.py --no-whisper` and build (all beats use their `at` positions) |
| C2 | Many cues fall back | Harsh changed the wording, or Whisper wrote digits | Read `data/cues/Lxx.json` "text"; add the heard word to that beat's `cue` list in `scenes.json`; rebuild |
| C3 | A beat fires on the wrong occurrence of a word | Same word twice in a line | Use a two-word cue, e.g. `"ban falls"` |
| C4 | First word of a line is clipped | Silence trim too aggressive | In `voice.py` change both `start_threshold=-45dB` to `-55dB`; rerun |
| C5 | Voice sounds watery | Denoise too strong for a clean recording | Remove `afftdn=nf=-25,` from CHAIN; rerun |
| C6 | Render has no sound | `<audio>` missing an id or built in draft mode | Rebuild without `--draft`; confirm 11 `<audio id="voNN">` tags in `index.html` |
| D1 | Render duration differs from the build total | Root `data-duration` stale | Rebuild, re-check, re-render |
| D2 | Render is very slow | `screenshot` capture path | Acceptable; let it finish. Use `--quality draft` only for a test pass |
| D3 | Audio drifts late by the end | A voice file was replaced without rebuilding | Run §8.3 in full, then render again |

---

## 12. Execution order and stop points

| Step | Section | Stop? |
|---|---|---|
| 1 | §6.5 restore (safety, even on first run) | |
| 2 | §4 write the script file | |
| 3 | §7.1 scaffold; §6.2 layout; §6.3 logos; §6.4 slides; §6.5 restore | |
| 4 | §7.2 to §7.5 write files; §7.6 draft build and lint | |
| 5 | §9.1 check and §9.2 snapshots on the draft; fix rings | |
| 6 | §8.1 hand the script to the user | **STOP: wait for "voice is ready"** |
| 7 | §8.3 voice and build; §8.4 if over length | |
| 8 | §9.1, §9.2 again; §9.3 preview | **STOP: wait for approval** |
| 9 | §9.5 render; §10 finish; §10.4 report | |

**Verification checklist (all must be true at the end)**
- [ ] Figma deck logos visible again (`shown` equals `hidden`).
- [ ] `npx hyperframes check` passes with zero errors.
- [ ] MP4 is 1920×1080, has sound, and is at most 120.0 s.
- [ ] Every scene was looked at in a snapshot; rings sit on the right rows.
- [ ] The count-up ends on 250 and matches the slide's own number.
- [ ] No music, sound effects or captions were added.
- [ ] `poster.jpg` and `share-copy.txt` exist in `video/out/`.

---

## 13. Deck items still open (not part of the video job)

Carried over from the earlier deck plan, for whoever picks the deck up next:
- Abbreviation keys still missing under slide 2 (FY, FPL), slide 6 (AI, vs) and slide 9 (NSM,
  WTB, M1 to M4, A-IDs). The glossary slide covers them meanwhile.
- The research document's Appendix D glossary has not been matched to the deck's glossary slide.
- The 57th GST Council outcome (7 Oct 2026) has not been re-checked against slide 9 and the
  research document.
- The submission PDF is exported from Figma by the user as `TeamIdeaForge_R1.pdf`, at most 25 MB,
  before 10 Oct 2026, 11:59 PM.
