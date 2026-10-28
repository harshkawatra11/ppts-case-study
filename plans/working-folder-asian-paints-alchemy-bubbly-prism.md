# Finish the Asian Paints Alchemy deck: fuller cover map, slide 6 photo, research credits, full QA, submission pack

This plan is written to be executed by Sonnet-class subagents with no design thinking left to do. Every
file path, every code block and every command is given in full. Follow it literally. If a step's stated
check fails, follow the stated fallback; if no fallback is given, STOP and report the exact output.

All paths are absolute unless they start with `deck/`, `research/` or `case/`, which are relative to
`C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\asian-paints-alchemy\`.
`REPO` means `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`.
`SCRATCH` means `C:\Users\harsh\AppData\Local\Temp\claude\c--Users-harsh-Desktop-HARSH-PPTS-CASE-STUDY-nsut-innovators-court\b4434244-c27a-4e8b-8916-1cfd2df79a59\scratchpad`.
Figma file key: `KJQkGsLgbeLU9vNy24p78y`. Slide ids: S1 `1:42` (organisers' cover, NEVER touch), S2 `2:40`
(our cover), S3 `13:2`, S4 `13:4`, S5 `13:6`, S6 `13:8`, S7 `13:10`, S8 `13:12`, S9 `13:14`.

---

## Context

- The 8-node "WHO SHAPES A WHITE WALL" ring on the cover (S2) is live, but the user says it feels empty:
  four nodes carry one small mark each, logos render tiny in 40 px strips, and the hub carries a live-only
  text hack ("ASIAN PAINTS" at 22 pt, 156 px wide in a 120 px slot) that is not in `deck/slides/s02.js`.
- Slide 6 (MECHANISM AND PROOF, `13:8`) still shows the dashed empty `IMG: Cyphochilus scale` slot
  (`deck/slides/s06.js:18`).
- The user wants: no video for now; more brand and company logos on the cover map; nothing missed by
  the checks; then finish the slides, the research document and the submission.
- User decisions (asked and answered): **no AI-use statement** is added anywhere (keep it out);
  **yes, push** the updated research PDF to the `ap-alchemy` GitHub Pages repo.

Findings that fix the content:
- **Omya is not named anywhere in the research or in `research/raw/sources.md`.** It is removed from the
  cover and replaced by Arkema (research lines 1206, 1220, 1253, 1534) and Evonik (line 1642).
- Every logo on the cover must be an organisation the research names. Verified list, with the Commons
  file and licence checked on 2026-10-24 through the Commons API:

| Slot name | Organisation (research line) | Commons file title | Licence |
|---|---|---|---|
| LOGO: Chemours | Chemours (L963, L971) | `Chemours.svg` | Public domain |
| LOGO: Tronox | Tronox (L963, L971) | `Tronox logo.png` | Public domain |
| LOGO: Dow | Dow (L1184, L1253) | `Dow Chemical Company logo.svg` | Public domain |
| LOGO: Arkema | Arkema (L1206, L1220, L1253, L1534) | `Logo Arkema.svg` | Public domain |
| LOGO: Evonik | Evonik (L1642) | `Logo Evonik 2020.svg` | Public domain |
| LOGO: Imerys | Imerys (L1206, L1220, L1253) | `Imerys logo.png` | CC BY-SA 4.0 |
| LOGO: Berger | Berger Paints (L389, L398, L965) | `Berger Paints logo.png` | Public domain |
| LOGO: JSW | JSW Paints, JSW Group (L394, L965) | `JSW Group logo.svg` | Public domain |
| LOGO: Indigo | Indigo Paints (L398, L965) | `Indigo-logo.jpg` | CC BY-SA 4.0 |
| LOGO: Kansai | Kansai Nerolac, Kansai Paint's Indian arm (L389, L398, L965) | `Kansai Paint Logo.svg` | CC BY-SA 4.0 |
| LOGO: AkzoNobel | Akzo Nobel India (L394, L965) | `AkzoNobel.svg` (fallback `AkzoNobel wordmark black.svg`) | Public domain |
| LOGO: Exeter | University of Exeter, Vukusic et al. 2007, source S132 behind "5 to 15 µm" | `Uni Exeter.svg` | Public domain |
| LOGO: SciRep | Scientific Reports, Burresi et al. 2014 (L1198, L1230) | `Scientific Reports logo 2023.svg` | Public domain |
| LOGO: BIS | Bureau of Indian Standards (L580, L2301) | `Bureau of Indian Standards Logo.svg` | Public domain |
| LOGO: CPCB | Central Pollution Control Board (L679, L690) | `Logo of the Central Pollution Control Board.svg` | Public domain (PD-India) |
| LOGO: ISO | ISO, ISO 6504-3 (L1079, L1833) | `ISO logo red.svg` | Public domain |
| LOGO: ASTM | ASTM International (L587, L635) | `ASTM International logo.svg` | Public domain |
| LOGO: Asian Paints hub | Asian Paints (the client) | local `deck/logos/asian_paints.png` (already on disk, clean) | Public domain |

- Not available as free files, so they stay out (do NOT pull them from company sites): Kronos, Venator,
  LB Group, KMML, Travancore Titanium, Birla Opus, BEE. DGTR, CBIC and Ministry of Finance marks carry the
  State Emblem of India, whose use is restricted by the State Emblem of India (Prohibition of Improper
  Use) Act 2005, so TRADE RULES keeps an icon. PAINTERS and HOMEOWNERS have no third-party organisation
  in the research, so they keep icons, drawn bigger (full 206 x 66 strip).
- Result: 17 organisation logos + hub logo + 2 photos on the cover map + 3 icons (23 marks, up from 13).

---

## Phase map (who runs what, in which order)

| Phase | Runs as | Depends on | Can run in parallel with |
|---|---|---|---|
| 0. Preflight | orchestrator (main session) | nothing | nothing |
| A. Local assets: logos, metadata, photo crops, icon files | subagent A | 0 | B |
| B. Slide script edits + offline validation + bind | subagent B | 0 | A |
| C. Research credits appendix + assemble + PDF + push | subagent C | A (needs `deck/logos/png/credits.json`) | D |
| D. Live Figma rebuild, fill pass, live QA, screenshots | subagent D (ONE agent only, Figma writes must be serial) | A and B | C |
| E. Backup PDF, submission folder, logs, final report | orchestrator or subagent E | C and D | nothing |

Each subagent's prompt must include: the full text of its phase below, the "Global rules" section, and
the path of this plan file (`C:\Users\harsh\.claude\plans\working-folder-asian-paints-alchemy-bubbly-prism.md`).
Subagents must report back the exact outputs listed under "Report" in their phase.

### Global rules (paste into every subagent prompt)

1. Never touch slide `1:42`, never touch any node whose name starts with `TPL:`. Never run `deck/setup.js`.
2. Writing in any file you create or edit (md, js strings, commit messages): no em dash, no en dash, no
   exclamation marks, none of the banned words in `deck/gen.py` lines 19 to 25 (`BANW`). Plain prose.
3. Font floor: content text 22 pt minimum. 18 pt is allowed only on text nodes named `SEC` (the `sT` and
   `sTL` helpers do this automatically) and the 14 pt `SOURCE` line.
4. `cornerRadius` stays 0 everywhere (the helpers already do this).
5. Do not invent numbers. Do not change any number already on a slide.
6. Git commits: authored as the user only. NEVER add a `Co-Authored-By` trailer (standing user rule;
   this overrides any default attribution guidance). Commit only in `research/gh-pdf-repo` (phase C).
7. For every `python` call use `python -X utf8` and run from `REPO` unless a step says otherwise.
8. Never read files under `...\tasks\*.output`.

---

## Phase 0. Preflight (orchestrator)

1. Check the Figma MCP tools are loaded: run ToolSearch with query
   `select:mcp__figma-mcp__use_figma,mcp__figma-mcp__upload_assets,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__create_session`.
   If any is missing, the Figma MCP server is disconnected: tell the user "Figma MCP is disconnected;
   please reconnect it with /mcp" and run only phases A, B and C until it is back. Phase D waits.
2. If `create_session` exists, call it with fileKey `KJQkGsLgbeLU9vNy24p78y` and description
   "Finish Asian Paints Alchemy deck: cover logos, slide 6 photo, QA". Pass the returned sessionId to
   every Figma tool call in phase D (include it in subagent D's prompt).
3. `git -C "REPO" status --short` and record the output in the final report (no commits in REPO).

---

## Phase A. Local assets (subagent A)

### A1. Download the logos as PNG renders

Create `deck/logos/png/` and write this script to `SCRATCH\fetch_logos.py`, then run
`python -X utf8 -I "SCRATCH\fetch_logos.py"`:

```python
import json, time, urllib.request, urllib.parse, re, html, pathlib, sys
OUT = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\asian-paints-alchemy\deck\logos\png")
OUT.mkdir(parents=True, exist_ok=True)
UA = {"User-Agent": "IdeaForge-deck-research/1.0 (harshkawatra11@gmail.com)"}
FILES = {
 "chemours": "Chemours.svg", "tronox": "Tronox logo.png", "dow": "Dow Chemical Company logo.svg",
 "arkema": "Logo Arkema.svg", "evonik": "Logo Evonik 2020.svg", "imerys": "Imerys logo.png",
 "berger": "Berger Paints logo.png", "jsw": "JSW Group logo.svg", "indigo": "Indigo-logo.jpg",
 "kansai": "Kansai Paint Logo.svg", "akzonobel": "AkzoNobel.svg", "akzonobel_black": "AkzoNobel wordmark black.svg",
 "exeter": "Uni Exeter.svg", "scirep": "Scientific Reports logo 2023.svg",
 "bis": "Bureau of Indian Standards Logo.svg", "cpcb": "Logo of the Central Pollution Control Board.svg",
 "iso": "ISO logo red.svg", "astm": "ASTM International logo.svg",
}
def get(url, tries=6):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
                return r.read(), r.headers.get("Content-Type", "")
        except Exception as e:
            print("retry", i, url[:90], e); time.sleep(5 * (i + 1))
    sys.exit("FAILED " + url)
credits = {}
for key, title in FILES.items():
    q = urllib.parse.urlencode({"action": "query", "titles": "File:" + title, "prop": "imageinfo",
        "iiprop": "url|size|mime|extmetadata", "iiurlwidth": "800", "format": "json"})
    meta, _ = get("https://commons.wikimedia.org/w/api.php?" + q)
    page = next(iter(json.loads(meta)["query"]["pages"].values()))
    ii = page["imageinfo"][0]; m = ii.get("extmetadata", {})
    clean = lambda k: re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", m.get(k, {}).get("value", "")))).strip()
    url = ii.get("thumburl") or ii["url"]
    data, ctype = get(url)
    ext = ".jpg" if ("jpeg" in ctype or url.lower().endswith((".jpg", ".jpeg"))) else ".png"
    (OUT / (key + ext)).write_bytes(data)
    credits[key] = {"file": key + ext, "commons_title": "File:" + title,
        "page": "https://commons.wikimedia.org/wiki/File:" + title.replace(" ", "_"),
        "licence": clean("LicenseShortName"), "author": clean("Artist") or "Unknown", "bytes": len(data)}
    print(key, ext, len(data), credits[key]["licence"], "|", credits[key]["author"][:60])
    time.sleep(2)
(OUT / "credits.json").write_text(json.dumps(credits, indent=1, ensure_ascii=False), encoding="utf-8")
print("DONE", len(credits))
```

Check: the script prints `DONE 18`. If it prints `FAILED`, wait 60 seconds and run it again (it is
idempotent).

### A2. Look at every downloaded logo

Use the Read tool on each of the 18 files in `deck/logos/png/` and confirm it is the right
organisation's logo and that it is visible on a white background (dark or coloured marks).
- If `akzonobel.png` is white or near-invisible on white, use `akzonobel_black.png` instead in phase D
  (record the choice in the report). Otherwise delete nothing; just note `akzonobel.png` is the one used.
- If `indigo.jpg` is not the Indigo Paints logo, drop LOGO: Indigo (phase B fallback below) and report it.
- If any other file is wrong or unreadable, drop that slot (phase B fallback) and report it.

### A3. Crop the photos to their slot shapes (so FILL never makes a sliver)

Write to `SCRATCH\crop_photos.py` and run `python -X utf8 -I "SCRATCH\crop_photos.py"`:

```python
from PIL import Image
import pathlib
D = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\asian-paints-alchemy\deck")
def crop(src, dst, aspect, cx, cy, out_w):
    im = Image.open(src).convert("RGB"); W, H = im.size
    if W / H > aspect: h = H; w = round(H * aspect)
    else: w = W; h = round(W / aspect)
    x0 = min(max(0, round(cx * W - w / 2)), W - w); y0 = min(max(0, round(cy * H - h / 2)), H - h)
    im.crop((x0, y0, x0 + w, y0 + h)).resize((out_w, round(out_w / aspect)), Image.LANCZOS).save(dst, quality=90)
    print(dst, (x0, y0, w, h))
# slide 6 slot is 130 x 186 (portrait); the beetle's head and eye sit at about 40% across the frame
crop(D / "logos/beetle.jpg", D / "images/beetle_portrait.jpg", 130 / 186, 0.40, 0.50, 520)
# cover cells are 100 x 31 (two items in a 206 px row, gap 6; two rows in a 66 px strip, gap 4)
crop(D / "logos/beetle.jpg", D / "images/beetle_cell.jpg", 100 / 31, 0.55, 0.45, 400)
crop(D / "images/tio2.jpg", D / "images/tio2_cell.jpg", 100 / 31, 0.50, 0.50, 400)
```

Then Read the three outputs. `beetle_portrait.jpg` must show the beetle's head, eye and white scaly body
(not just background); `beetle_cell.jpg` must show white scales; `tio2_cell.jpg` must show white powder.
If `beetle_portrait.jpg` shows mostly the dark background, rerun with `cx` 0.35, then 0.45, and pick the
one showing the head and scales.

### A4. Write the three icon SVG files

Write each file exactly as below (UTF-8, one line each is fine).

`deck/logos/png/icon_ship.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><path d="M28 36 H172 L160 50 H40 Z" fill="none" stroke="#33175E" stroke-width="3" stroke-linejoin="round"/><rect x="44" y="22" width="22" height="14" fill="none" stroke="#33175E" stroke-width="3"/><rect x="68" y="22" width="22" height="14" fill="none" stroke="#33175E" stroke-width="3"/><rect x="92" y="22" width="22" height="14" fill="none" stroke="#33175E" stroke-width="3"/><rect x="128" y="12" width="20" height="24" fill="none" stroke="#33175E" stroke-width="3"/><path d="M138 12 V4" fill="none" stroke="#33175E" stroke-width="3" stroke-linecap="round"/><path d="M12 56 Q24 52 36 56 T60 56 T84 56 T108 56 T132 56 T156 56 T180 56" fill="none" stroke="#33175E" stroke-width="3" stroke-linecap="round"/></svg>
```

`deck/logos/png/icon_roller.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><rect x="24" y="8" width="112" height="22" fill="none" stroke="#33175E" stroke-width="3"/><path d="M136 19 H160 V38 H84 V44" fill="none" stroke="#33175E" stroke-width="3" stroke-linejoin="round"/><rect x="78" y="44" width="12" height="14" fill="none" stroke="#33175E" stroke-width="3"/><path d="M30 36 V46 M50 36 V52 M70 36 V42" fill="none" stroke="#33175E" stroke-width="3" stroke-linecap="round"/></svg>
```

`deck/logos/png/icon_house.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><path d="M64 30 L100 6 L136 30" fill="none" stroke="#33175E" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><rect x="74" y="28" width="52" height="28" fill="none" stroke="#33175E" stroke-width="3"/><rect x="94" y="40" width="12" height="16" fill="none" stroke="#33175E" stroke-width="3"/><rect x="80" y="34" width="10" height="8" fill="none" stroke="#33175E" stroke-width="3"/><rect x="110" y="34" width="10" height="8" fill="none" stroke="#33175E" stroke-width="3"/></svg>
```

### A5. Update the manifest

Add to `deck/logos/manifest.json` one entry per file in `credits.json` (key = `png/<file>`, values
`source` = page, `license` = licence, `author` = author), plus `images/beetle_portrait.jpg`,
`images/beetle_cell.jpg` (both: source Commons `File:Cyphochilus_beetle_close_up.jpg`, CC BY-SA 4.0,
Andy Parnell, "cropped") and `images/tio2_cell.jpg` (source `File:Titanium(IV)_oxide.jpg`, public
domain, "cropped"), and the three icons (`"source": "drawn by the team"`). Leave existing entries,
including Omya, in place (Omya is simply no longer used).

**Report (A):** the `DONE` line, the licence and author of every file, any slot dropped and why,
which AkzoNobel file is used, and the crop boxes printed by A3.

---

## Phase B. Slide scripts (subagent B)

### B1. Replace `deck/slides/s02.js` with exactly this content

Part 1 (lines 1 to 28 of the current file) is copied unchanged; the rest is new. Do not change line 14:
`deck/overrides.json` must still find the text `"Rutile scatters "+V.air_gain+" more light`.

```js
{ const s = await figma.getNodeByIdAsync("S2"); wipeTpl(s);
const RESEARCH_URL="https://harshkawatra11.github.io/ap-alchemy/research.pdf";
// ===== top strip, between the two template logos =====
addChip(s,182,30,780,54,"ASIAN PAINTS ALCHEMY  |  CASE STUDY 1: WHITENESS",C.primaryDeep,C.white,22);
addChip(s,1430,30,300,54,V.team.name,C.primaryDeep,C.white,22);
addWireH(s,182,1730,118,C.ink,2.5); [182,569,956,1343,1730].forEach(cx=>addEllipse(s,cx-8,110,16,16,C.white,C.ink,2));
// ===== title block =====
nm(TL(s,40,130,92,"WHITER WITH",{family:"Poppins",style:"ExtraBold",color:C.ink,maxW:1050,min:58}),"TITLE");
TL(s,40,270,92,"LESS TiO2",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:1050,min:58});
TL(s,40,414,28,"Case Study 1: Future of Whiteness Development through Material Science",{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:1050,min:22});
// ===== the answer =====
const c=layered(s,40,470,1050,236,C.primaryDeep,"CARD: answer");
const headline=T(c,24,14,1002,26,"OUR ANSWER: KEEP THE RUTILE, HOLD IT IN A NETWORK OF AIR, AND SEAL THE AIR IN WITH THE SECOND COAT.",{family:"Poppins",style:"Bold",color:C.accent});
T(c,24,headline.y+headline.height+14,1002,22,"Rutile scatters "+V.air_gain+" more light per unit volume in air than in binder. A porous first coat holds "+V.base_pvc+" TiO2 in "+V.P+" air; a "+V.X2+" seal coat keeps the air in and gives the washable surface. Our optical model matches a premium white's contrast ratio and brightness with "+V.g_prop+" of TiO2 per m² instead of "+V.g_ref+".",{family:"Inter",style:"Semi Bold",color:C.white});
// ===== team =====
TL(s,40,722,32,V.team.name,{family:"Poppins",style:"Bold",color:C.primary});
teamBT(s,40,774,[280,560,210]);
// ===== research link, Eurogrip-style chip =====
const linkRow=(p,x,y,label,url,o)=>{ o=o||{}; const h=o.h||46;
  const txt=label+"  →";
  const measured=measureW(p,"Inter","Bold",22,txt);
  const w=Math.ceil(measured+32);
  const f=addFrame(p,x,y,w,h,C.blueTint,C.blue,1.5,"LINKROW");
  const t=addText(f,"Inter","Bold",22,C.blue,txt,16,0,w-32,h,"LEFT","CENTER");
  try{ t.setRangeHyperlink(0,t.characters.length,{type:"URL",value:o.url}); }catch(e){}
  return w; };
linkRow(s,40,942,"Read the full research document",RESEARCH_URL,{url:RESEARCH_URL});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
// mind map panel, insight line, fine print, and the eight hub wires (drawn first so nodes sit on top)
const mm=panel(s,1110,140,770,846,"WHO SHAPES A WHITE WALL",{layered:true,fill:C.tint,titleColor:C.primaryDeep});
const COLX=[16,268,520], NH=200, ROWY=[166,400,634], HUB=[COLX[1]+117,ROWY[1]+NH/2];
const insight=T(mm,16,58,738,22,"Asian Paints buys about "+V.ap.base.tonnes+" of TiO2 a year, our estimate, and 57% of India's supply came from China in DGTR's probe.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const fine=sT(mm,16,132,738,18,"Logos identify organisations in the analysis; no partnership is implied.",{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
if(insight.y+insight.height>fine.y-2) warnings.push("insight hits fine print at "+Math.round(insight.y+insight.height));
if(fine.y+fine.height>ROWY[0]-4) warnings.push("fine print hits node row at "+Math.round(fine.y+fine.height));
COLX.forEach(x=>ROWY.forEach(y=>{ if(x===COLX[1]&&y===ROWY[1]) return; addDiagonalWire(mm,HUB[0],HUB[1],x+117,y+NH/2,C.ink,2.5); }));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
const mm=s.children.find(c=>c.name==="PANEL: WHO SHAPES A WHITE WALL"); if(!mm) throw new Error("panel missing");
const COLX=[16,268,520], NH=200, ROWY=[166,400,634];
const pre=t=>t==="logo"?"LOGO: ":t==="img"?"IMG: ":"ICON: ";
const markStrip=(p,rows)=>{ const SH=66, gap=6, vg=4, rh=rows.length===1?SH:(SH-vg*(rows.length-1))/rows.length;
  rows.forEach((row,r)=>{ const n=row.length, w=(206-gap*(n-1))/n;
    row.forEach((it,i)=>addFrame(p,i*(w+gap),r*(rh+vg),w,rh,null,null,0,pre(it.t)+it.n)); }); };
const mapNode=(x,y,title,number,desc,rows,tint)=>{ const f=addFrame(mm,x,y,234,NH,tint||C.white,C.ink,2,"NODE "+title);
  addRect(f,0,0,6,NH,C.accent);
  const strip=addFrame(f,16,8,206,66,null,null,0,"STRIP"); markStrip(strip,rows);
  const t1=TL(f,16,78,22,title,{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:206});
  const t2=TL(f,16,t1.y+t1.height,22,number,{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:206,min:22});
  const t3=sT(f,16,t2.y+t2.height+2,206,18,desc,{family:"Inter",style:"Semi Bold"});
  if(t3.y+t3.height>NH-4) warnings.push("node text low: "+title+" ends at "+Math.round(t3.y+t3.height));
  return f; };
const L=n=>({t:"logo",n}), I=n=>({t:"img",n}), K=n=>({t:"icon",n});
mapNode(COLX[0],ROWY[0],"PIGMENT","Index 2.75","rutile bends light most; binder is 1.49",[[L("Chemours"),I("TiO2")],[L("Tronox")]]);
mapNode(COLX[1],ROWY[0],"OPACIFIERS","9% less TiO2","from hollow polymer spheres, in our screen",[[L("Dow"),L("Arkema")],[L("Evonik"),L("Imerys")]]);
mapNode(COLX[2],ROWY[0],"RIVALS","Over 21%","of industry capacity is now Birla Opus",[[L("Berger"),L("JSW"),L("Indigo")],[L("Kansai"),L("AkzoNobel")]]);
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
const mm=s.children.find(c=>c.name==="PANEL: WHO SHAPES A WHITE WALL"); if(!mm) throw new Error("panel missing");
const COLX=[16,268,520], NH=200, ROWY=[166,400,634];
const pre=t=>t==="logo"?"LOGO: ":t==="img"?"IMG: ":"ICON: ";
const markStrip=(p,rows)=>{ const SH=66, gap=6, vg=4, rh=rows.length===1?SH:(SH-vg*(rows.length-1))/rows.length;
  rows.forEach((row,r)=>{ const n=row.length, w=(206-gap*(n-1))/n;
    row.forEach((it,i)=>addFrame(p,i*(w+gap),r*(rh+vg),w,rh,null,null,0,pre(it.t)+it.n)); }); };
const mapNode=(x,y,title,number,desc,rows,tint)=>{ const f=addFrame(mm,x,y,234,NH,tint||C.white,C.ink,2,"NODE "+title);
  addRect(f,0,0,6,NH,C.accent);
  const strip=addFrame(f,16,8,206,66,null,null,0,"STRIP"); markStrip(strip,rows);
  const t1=TL(f,16,78,22,title,{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:206});
  const t2=TL(f,16,t1.y+t1.height,22,number,{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:206,min:22});
  const t3=sT(f,16,t2.y+t2.height+2,206,18,desc,{family:"Inter",style:"Semi Bold"});
  if(t3.y+t3.height>NH-4) warnings.push("node text low: "+title+" ends at "+Math.round(t3.y+t3.height));
  return f; };
const L=n=>({t:"logo",n}), I=n=>({t:"img",n}), K=n=>({t:"icon",n});
mapNode(COLX[0],ROWY[1],"SCIENCE","5 to 15 µm","beetle scales, white with no pigment",[[I("Beetle"),L("Exeter")],[L("SciRep")]]);
mapNode(COLX[2],ROWY[1],"TRADE RULES","$460 to $681","a tonne duty, asked again on Chinese TiO2",[[K("ship")]],C.accentTint);
mapNode(COLX[0],ROWY[2],"PAINTERS","13.42 m²","a litre a coat; same rollers as today",[[K("roller")]]);
mapNode(COLX[1],ROWY[2],"HOMEOWNERS","78% repaint","of paint demand goes over an old wall",[[K("house")]]);
mapNode(COLX[2],ROWY[2],"STANDARDS","IS 15489:2024","the BIS spec for emulsion paint",[[L("BIS"),L("CPCB"),L("ISO")],[L("ASTM")]],C.accentTint);
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
const mm=s.children.find(c=>c.name==="PANEL: WHO SHAPES A WHITE WALL"); if(!mm) throw new Error("panel missing");
const HUB=[385,500];
addEllipse(mm,HUB[0]-100,HUB[1]-100,200,200,C.primaryDeep,C.ink,2.5);
const chip=addFrame(mm,HUB[0]-68,HUB[1]-68,136,40,C.white,C.ink,2,"CHIP: hub");
addFrame(chip,4,5,128,30,null,null,0,"LOGO: Asian Paints hub");
const h1=addText(mm,"Poppins","ExtraBold",26,C.accent,V.g_ref+" TiO2",HUB[0]-85,HUB[1]-24,170,40,"CENTER","CENTER"); h1.name="SEC";
const h2=addText(mm,"Inter","Bold",18,C.white,"a m² today",HUB[0]-85,HUB[1]+18,170,26,"CENTER","CENTER"); h2.name="SEC";
srcAP(s,"Source: Alchemy Case Study 1 | model "+V.hash+" | Burresi et al. 2014 | Vukusic et al. 2007 | DGTR 3 Aug 2026 | IS 15489:2024 | Apcolite TDS | photos and logos: Wikimedia Commons, credits in research Appendix D.12");
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

Geometry facts behind these numbers (do not re-derive; for reference only): panel inner height 846;
insight 2 lines of 22 pt ends about y 124; fine print ends about y 154; node rows 166, 400, 634, height
200, gaps 34, last row ends 834; hub centre (385, 500), radius 100; hub chip corners sit 96 px from the
centre, inside the circle; logo cells in two-item rows are 100 x 31, in three-item rows 64.7 x 31,
single items 206 x 31 (two-row strip) or 206 x 66 (one-row strip).

Phase-A fallback: if phase A dropped a logo, delete that `L("...")` item from its row; if a row becomes
empty, delete the row array. If LOGO: Indigo is dropped, RIVALS becomes `[[L("Berger"),L("JSW")],[L("Kansai"),L("AkzoNobel")]]`.

### B2. Edit `deck/slides/s06.js`

1. Line 18: replace
   `imgSlot(p3,14,14,130,186,"Cyphochilus scale");`
   with
   `addFrame(p3,14,14,130,186,null,C.ink,2,"IMG: Cyphochilus beetle");`
2. Line 20: replace the text `"Cyphochilus scale: chitin filaments in air,` with
   `"The Cyphochilus beetle's scales: chitin filaments in air,` (rest of the string unchanged).
3. Line 3 (source string): replace
   `| ISO 6504-3, ASTM D2486 | lab plan not yet run, research section 22 | research sections 14 to 18"`
   with
   `| ISO 6504-3, ASTM D2486 | research sections 14 to 18 and 22 | photo: A. Parnell, Wikimedia Commons, CC BY-SA 4.0"`

### B3. Validate offline and bind

From `REPO`:
```
python -X utf8 asian-paints-alchemy/deck/gen.py mock 2 6
python -X utf8 asian-paints-alchemy/deck/gen.py copy
```
Required: both slides print `OK`, with `warnings: []` and `ISSUES 0`, every part length under 49900,
and `copy issues 0`.

Fixes if not clean (apply only the matching fix, then rerun):
- s02 `node text low` or `textOut`/`cellWrap` on a node description: shorten that description by
  removing words without changing any number or fact (for example "a tonne duty, asked again on Chinese
  TiO2" can become "a tonne duty asked on Chinese TiO2"). Never shrink below 18 pt.
- s02 `fine print hits node row`: change the fine-print `y` from 132 to 128 and the insight `y` from 58
  to 56 in part 2.
- s02 `source 2 lines`: remove ` | Vukusic et al. 2007` from the source string; if still two lines,
  also remove ` | Apcolite TDS`.
- s06 `textOut` or `childOut` inside `CARD: nature`: revert B2 step 2 (restore `"Cyphochilus scale:`).
- s06 `source 2 lines`: remove ` (T7, T9 to T11, T15)` from the source string.
- An `override key matches no slide text` assertion: you changed s02 line 14; restore it exactly.
- Anything else: STOP and report the full output.

Then bind:
```
python -X utf8 asian-paints-alchemy/deck/gen.py bind 2 6
```
Expect files `deck/build/slide_02_1.js` to `deck/build/slide_02_5.js`, `deck/build/slide_06_1.js` to
`slide_06_4.js` (count printed by the `wrote` lines), plus `v1_02.js`, `v1_06.js`, `v1_all.js`,
`sweeps.js`, `slots.js`. Delete the stale single-file `deck/build/slide_02.js` so nobody submits it.

**Report (B):** the final mock and copy lines verbatim, the list of written build files with sizes,
and any fix applied (old and new text).

---

## Phase C. Research credits, PDF, push (subagent C, after A)

### C1. Back up, then add the credits section

1. Copy `research/alchemy-whiteness-research.md` to `SCRATCH\research_before.md`.
2. Append to the end of `research/parts/appendix-D.md` (after the D.11 table, one blank line first) a
   section built from `deck/logos/png/credits.json` plus the two photos. Exact form:

```markdown
### D.12 Image and logo credits for the deck

The deck's cover map and slide 6 use the files below from Wikimedia Commons. The logos identify organisations this document names; no partnership or endorsement is implied. Photos were cropped to fit their frames.

| Item in the deck | Commons file | Licence | Author |
|---|---|---|---|
| Cyphochilus beetle photo, cover and slide 6 | File:Cyphochilus beetle close up.jpg | CC BY-SA 4.0 | Andy Parnell |
| Titanium dioxide powder photo, cover | File:Titanium(IV) oxide.jpg | Public domain | Walkerma (English Wikipedia) |
| <one row per credits.json entry actually used on the cover: "<Organisation> logo, cover" | commons_title | licence | author> |
```
   Use the organisation names from the Context table. Include only logos actually placed (skip
   `akzonobel_black` or `akzonobel`, whichever was not used, and any dropped slot). Add one more row:
   `| Asian Paints logo, cover hub | File:Asian Paints Logo.svg | Public domain | Asian Paints |`.
   If an author field contains a pipe character `|` or a dash, rewrite it in plain words (for example
   "Unknown author").

### C2. Assemble and check

From `REPO`:
```
python -X utf8 asian-paints-alchemy/research/assemble.py md
```
Required: last line `ASSEMBLY PASS`, `dashes 0`, `banned {}`, `missing_S []`, `dup_headings []`,
`ai_statement 0`. Then compare:
```
git diff --no-index --stat "SCRATCH\research_before.md" asian-paints-alchemy/research/alchemy-whiteness-research.md
git diff --no-index "SCRATCH\research_before.md" asian-paints-alchemy/research/alchemy-whiteness-research.md
```
The only added lines must be the D.12 section. If any other line changed, the md had edits that were not
in `parts/`: restore it with `copy "SCRATCH\research_before.md"` back over the md, STOP, and report the
diff. Do not continue to C3.

### C3. Render the PDF

```
python -X utf8 asian-paints-alchemy/research/assemble.py pdf
```
Required: a line `PDF <size>` with a size above 4,000,000. Read pages near the end of the PDF (use
the Read tool with `pages` on `research/alchemy-whiteness-research.pdf`, the last 3 pages) and confirm the
D.12 table renders.

### C4. Publish to GitHub Pages (user approved)

```
copy /Y research\alchemy-whiteness-research.pdf research\gh-pdf-repo\research.pdf   (PowerShell: Copy-Item -Force)
git -C asian-paints-alchemy/research/gh-pdf-repo add research.pdf
git -C asian-paints-alchemy/research/gh-pdf-repo commit -m "Add image and logo credits to the research PDF"
git -C asian-paints-alchemy/research/gh-pdf-repo push origin main
```
No `Co-Authored-By` line. Then wait for Pages (up to 10 minutes) with a background poll:
```
until [ "$(curl -sI https://harshkawatra11.github.io/ap-alchemy/research.pdf | tr -d '\r' | awk -F': ' 'tolower($1)=="content-length"{print $2}')" = "<new size in bytes>" ]; do sleep 15; done; echo LIVE
```
(run with Bash `run_in_background`; substitute the size from `stat -c %s`). If it is not live after
10 minutes, report it and continue; the push itself is what matters.

**Report (C):** the assemble JSON and PASS line, the diff stat, the PDF size and page count, the commit
hash, push output, and whether the live URL now serves the new size.

---

## Phase D. Live Figma (subagent D, ONE agent, after A and B)

Use `mcp__figma-mcp__use_figma` with `fileKey: "KJQkGsLgbeLU9vNy24p78y"`, `skillNames: "resource:figma-use"`,
and the sessionId from phase 0 if one exists. Load `upload_assets` and `get_screenshot` schemas with
ToolSearch before first use and follow their parameter names exactly.

### D1. Rebuild slide 2

Submit, in this order and one call each, the full contents of `deck/build/slide_02_1.js`,
`slide_02_2.js`, `slide_02_3.js`, `slide_02_4.js`, `slide_02_5.js` as the `code` argument. Read each
file and pass its text exactly, with no edits. Each call must return `warnings: []`. Part 1 wipes the
slide; parts 2 to 5 never wipe.
- If a part returns warnings or throws: do NOT resubmit that part alone. Fix the cause in
  `deck/slides/s02.js` (phase B rules), rerun `mock 2` and `bind 2`, then resubmit ALL five parts from
  part 1.

### D2. Rebuild slide 6

Same procedure with `deck/build/slide_06_1.js` to `slide_06_4.js` (part 1 wipes via `skelAP`).

### D3. List the slots

Run:
```js
const out=[]; for(const id of ["2:40","13:8"]){ const s=await figma.getNodeByIdAsync(id);
  s.findAll(n=>/^(LOGO|IMG|ICON): /.test(n.name)).forEach(n=>out.push({slide:id,name:n.name,id:n.id,w:Math.round(n.width*10)/10,h:Math.round(n.height*10)/10})); }
return out;
```
Expect 23 entries on `2:40` (fewer only if phase A dropped slots) and 1 on `13:8`
(`IMG: Cyphochilus beetle`, 130 x 186). Save the result as `deck/fill_ids.json`.

### D4. Icons (vector, no upload)

Run this, with the three SVG strings pasted in from the files in `deck/logos/png/icon_*.svg`:
```js
const SV={ship:`<paste icon_ship.svg>`,roller:`<paste icon_roller.svg>`,house:`<paste icon_house.svg>`};
const s=await figma.getNodeByIdAsync("2:40"); const out=[];
for(const k of Object.keys(SV)){ const slot=s.findOne(n=>n.name==="ICON: "+k); if(!slot) throw new Error("no slot "+k);
  slot.children.slice().forEach(c=>c.remove());
  const v=figma.createNodeFromSvg(SV[k]); slot.appendChild(v);
  const pad=4, sc=Math.min((slot.width-2*pad)/v.width,(slot.height-2*pad)/v.height); v.rescale(sc);
  v.x=(slot.width-v.width)/2; v.y=(slot.height-v.height)/2; v.name="ICON SVG "+k;
  out.push({k,w:Math.round(v.width),h:Math.round(v.height)}); }
return out;
```
Expect three entries, each about 206 to 220 px wide equivalent scaled into 198 x 58.

### D5. Logos and photos (upload_assets)

Call `upload_assets` once for all raster files, `scaleMode: "FIT"` for logos, and a second call with
`scaleMode: "FILL"` for the three photos. Map slot name to local file:

| Slot | File (under `deck/`) | Mode | Content-Type |
|---|---|---|---|
| LOGO: Chemours | logos/png/chemours.png | FIT | image/png |
| LOGO: Tronox | logos/png/tronox.png | FIT | image/png |
| LOGO: Dow | logos/png/dow.png | FIT | image/png |
| LOGO: Arkema | logos/png/arkema.png | FIT | image/png |
| LOGO: Evonik | logos/png/evonik.png | FIT | image/png |
| LOGO: Imerys | logos/png/imerys.png | FIT | image/png |
| LOGO: Berger | logos/png/berger.png | FIT | image/png |
| LOGO: JSW | logos/png/jsw.png | FIT | image/png |
| LOGO: Indigo | logos/png/indigo.jpg | FIT | image/jpeg |
| LOGO: Kansai | logos/png/kansai.png | FIT | image/png |
| LOGO: AkzoNobel | logos/png/akzonobel.png (or akzonobel_black.png per phase A) | FIT | image/png |
| LOGO: Exeter | logos/png/exeter.png | FIT | image/png |
| LOGO: SciRep | logos/png/scirep.png | FIT | image/png |
| LOGO: BIS | logos/png/bis.png | FIT | image/png |
| LOGO: CPCB | logos/png/cpcb.png | FIT | image/png |
| LOGO: ISO | logos/png/iso.png | FIT | image/png |
| LOGO: ASTM | logos/png/astm.png | FIT | image/png |
| LOGO: Asian Paints hub | logos/asian_paints.png | FIT | image/png |
| IMG: TiO2 | images/tio2_cell.jpg | FILL | image/jpeg |
| IMG: Beetle | images/beetle_cell.jpg | FILL | image/jpeg |
| IMG: Cyphochilus beetle (slide 6) | images/beetle_portrait.jpg | FILL | image/jpeg |

Use the node ids from `deck/fill_ids.json`, listed in the same order as the files. For each returned
upload URL, POST (not PUT; PUT returned 404 before) the raw bytes:
```
curl -s -X POST -H "Content-Type: <type>" --data-binary "@<absolute file path>" "<returned url>"
```
Each response must contain `"success":true` and the matching `placedOnNodeId`. If one fails, retry
that single file once with its own `upload_assets` call (count 1).

### D6. Live QA (all must be clean)

1. Submit `deck/build/v1_all.js` exactly: expect `clean: true, count: 0`. The two known false-positive
   patterns (layered back-card overlapping its front, ribbon punch-holes) do not appear in this checker;
   anything it reports is real: fix per phase B rules and rebuild that slide fully.
2. Submit `deck/build/sweeps.js` exactly: expect `fontLow: []`, `copy: []`, `missing: []`,
   `presentBad: []`, `moneyshot` equal to its previous value (1 or more), every `template` count 1.
   `radiusFixed` above 0 is fine (it means the sweep fixed radii); rerun once and expect 0.
3. Empty-slot and placeholder sweep:
```js
const ids=["2:40","13:2","13:4","13:6","13:8","13:10","13:12","13:14"]; const out=[];
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  for(const n of s.findAll(n=>/^(LOGO|IMG|ICON|PHOTO): /.test(n.name))){
    const img=Array.isArray(n.fills)&&n.fills.some(f=>f.type==="IMAGE"); const kids=("children" in n)?n.children.length:0;
    if(!img&&kids===0) out.push({slide:id,id:n.id,name:n.name,issue:"empty"});
    if(Array.isArray(n.dashPattern)&&n.dashPattern.length) out.push({slide:id,id:n.id,name:n.name,issue:"dashed"});
    if(kids&&n.children.some(c=>c.type==="TEXT")) out.push({slide:id,id:n.id,name:n.name,issue:"caption text inside"}); }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})) if(/TODO|TBD|Lorem|xyz|[Pp]laceholder| logo$/.test(t.characters)) out.push({slide:id,id:t.id,issue:"placeholder text",chars:t.characters.slice(0,40)});
  for(const n of s.findAll(n=>Array.isArray(n.dashPattern)&&n.dashPattern.length&&("children" in n)&&n.children.length===1&&n.children[0].type==="TEXT")) out.push({slide:id,id:n.id,name:n.name,issue:"dashed box with caption"}); }
return {count:out.length,out};
```
   Expect `count: 0`. Any `empty` slot: re-run D5 for it. Any dashed caption box: report it with its
   slide and name (it means an unplanned placeholder exists; fill or remove only if it is clearly one).
4. Hyperlink check:
```js
const out=[]; for(const id of ["2:40","13:14"]){ const s=await figma.getNodeByIdAsync(id);
  s.findAllWithCriteria({types:["TEXT"]}).filter(t=>t.characters.includes("→")).forEach(t=>out.push({slide:id,chars:t.characters,link:t.getRangeHyperlink(0,1)})); }
return out;
```
   Expect two entries, each `link` `{type:"URL", value:"https://harshkawatra11.github.io/ap-alchemy/research.pdf"}`.
   Also run `curl -sI https://harshkawatra11.github.io/ap-alchemy/research.pdf` and expect `HTTP/2 200`.
5. Overflow check on slide 2 and slide 6 (fixed text boxes that would wrap):
```js
const out=[]; for(const id of ["2:40","13:8"]){ const s=await figma.getNodeByIdAsync(id);
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ if(t.textAutoResize!=="NONE"||!t.parent||t.parent.type==="SLIDE") continue;
    const k=t.clone(); t.parent.appendChild(k); k.textAutoResize="HEIGHT"; if(k.height>t.height+2) out.push({slide:id,chars:t.characters.slice(0,40),need:Math.round(k.height),has:Math.round(t.height)}); k.remove(); } }
return out;
```
   Expect `[]`.

### D7. Screenshots and visual review

For each of `1:42, 2:40, 13:2, 13:4, 13:6, 13:8, 13:10, 13:12, 13:14` call `get_screenshot` with
`maxDimension: 1920`, download each returned image with `curl -sL -o` to
`deck/shots/final_s1.png` to `final_s9.png`, and Read every one. Check, and write one line per slide in
the report:
- Slide 1: unchanged organisers' cover.
- Slide 2: eight nodes, each with title, bold number and two-line description fully visible; logos
  legible and not stretched (17 logos across PIGMENT, OPACIFIERS, RIVALS, SCIENCE, STANDARDS); the
  TiO2 and beetle cells show recognisable texture, not a black sliver; three icons visible and centred;
  hub shows the Asian Paints logo in a white chip, then "40.8 g TiO2", then "a m² today", all inside the
  circle; wires visible in the gaps between nodes; fine print not touching the top row; left column,
  team table and research chip intact; no Omya anywhere.
- Slide 6: the NATURE GOT HERE FIRST card shows the beetle photo in the left frame with an ink border,
  no dashed box, no caption text over the photo; card text not clipped; source line one line.
- Slides 3, 4, 5, 7, 8, 9: unchanged from before (no visual regressions, no stray nodes).
If a node's logo looks too small or a photo crop is poor, fix only by re-cropping (A3 parameters) or by
swapping the file, then re-run D5 for that slot. Do not resize frames after an upload (a FILL crop is
baked at upload time; a resize needs a re-upload).

**Report (D):** each part's result line, the D3 list, the D4 and D5 results, every D6 result verbatim,
and the per-slide review lines from D7.

---

## Phase E. Submission pack, logs, final report (orchestrator, after C and D)

### E1. Backup deck PDF (screenshots, no hyperlinks; the official export is the user's)

Create `asian-paints-alchemy/submission/` and run:
```python
from PIL import Image
import pathlib
D = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\asian-paints-alchemy")
ims = [Image.open(D / "deck" / "shots" / ("final_s%d.png" % i)).convert("RGB") for i in range(1, 10)]
out = D / "submission" / "Asian-Paints-Alchemy-Case1-TeamIdeaForge-deck-backup.pdf"
ims[0].save(out, save_all=True, append_images=ims[1:], resolution=144)
print(out, out.stat().st_size)
```
Copy `research/alchemy-whiteness-research.pdf` to
`submission/Asian-Paints-Alchemy-Case1-TeamIdeaForge-research.pdf`.

### E2. Logs

1. `deck/figma.md`: append a section "Cover map v3 and slide 6 photo" with the D3 node list (name, id,
   size, file, licence) and the slide 6 photo node. Plain prose, no dashes.
2. `build-log.md`: append an entry covering: why Omya was removed (not named in the research) and
   Arkema and Evonik added; the full logo list with licences; why Kronos, Venator, LB Group, KMML,
   Birla Opus and BEE are absent (no free file); why DGTR and CBIC marks are excluded (State Emblem
   Act 2005); node geometry (height 200, rows 166, 400, 634, strip 66); the hub change from a text hack
   to the logo chip; the slide 6 photo and its crop; the research D.12 credits, the PDF push commit
   hash; and every QA result. Note that the video stays parked by the user's choice.

### E3. Final message to the user (short)

- What changed (cover now 17 logos plus photos and icons; Omya swapped for Arkema and Evonik; slide 6
  photo in; research credits added and pushed) and that every check passed (quote the counts).
- What the user must do on their side, as a checklist:
  1. In Figma Slides, export the deck as PDF (main menu, File, Export, PDF) so the research links stay
     clickable; the backup PDF in `asian-paints-alchemy/submission/` has no live links.
  2. Check the Unstop page for the deadline, file naming rule and whether a video is required; none of
     these is in the case files.
  3. Upload the deck PDF and, if allowed, the research PDF on Unstop.
- One line noting, per the user's choice, that no AI-use statement was added although brief guideline
  G2 (`case/01-briefs.md` line 11) asks for one.

---

## Verification (end to end)

- Offline: `gen.py mock 2 6` prints OK for both with `ISSUES 0`; `gen.py copy` prints `copy issues 0`.
- Research: `assemble.py md` prints `ASSEMBLY PASS`; the diff against the backup adds only D.12;
  `assemble.py pdf` prints a PDF size; the push succeeded; the live URL returns 200 with the new size.
- Live: every build part returned `warnings: []`; `v1_all.js` clean with count 0; `sweeps.js` with
  empty `fontLow`, `copy`, `missing`, `presentBad`; empty-slot sweep count 0; both research links carry
  the URL; overflow check empty.
- Visual: nine screenshots read and each slide's review line written; the cover shows 17 legible
  logos, 2 photos, 3 icons and the hub logo; slide 6 shows the beetle photo.
