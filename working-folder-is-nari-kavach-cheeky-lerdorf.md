# Pukaar — Nari Kavach Figma Slides deck + product architecture

> **Read this whole file before touching Figma.** It is written to be executed literally: every
> slide below carries exact x/y/w/h coordinates, exact copy strings, and exact chart values. Do not
> improvise layout. Do not re-derive helper functions. If a number is marked `[FETCH]`, run the
> search before you draw the slide and cite what you find. Never leave a placeholder in the deck.

---

## 1. Context

Stage 1 (idea sheet) is done: [nari-kavach-idea-sheet-v2.md](nari-kavach/nari-kavach-idea-sheet-v2.md)
scored 12 ideas. The user picked **P1**, the AI voice companion for unsafe commutes, and renamed it
from "Saathi Call" to **Pukaar**.

This stage produces two things and **writes no product code**:
1. A **7-slide Figma Slides deck** (cover + the 5 organizer-mandated slides + a plain thank you),
   built natively with `use_figma`, at the density of the four inspo decks the user supplied.
2. A **product architecture design** that lands as Slide 4 and doubles as the spec the build stage
   will execute from later.

**Locked decisions:** name is Pukaar. Palette is deep plum and gold. Build directory for the product
code is deferred. No code, no GitHub, no deployment, nothing provisioned this stage.

**Hard constraints (project memory + `CLAUDE.md`):**
- **Zero em dashes** anywhere in slide copy. All copy below already complies. Do not introduce any.
- No AI-voice patterns ("here's the thing", "it's not just X, it's Y", "make no mistake"), no
  rhetorical-question hooks. Humanized analytical voice only.
- **22pt type floor** for all content text. 14pt only for source lines.
- `cornerRadius = 0` on every node. 2 to 2.5px ink stroke on every panel, bar, cell, and node.
- **Density bar: 140 to 180 total nodes per content slide, 6 distinct visual forms each, zero dead
  space.** If a slide comes in under 140, a content form is missing. Add content, never enlarge
  decoration to fill the gap.
- Every content slide carries a source line.

---

## 2. Measured reference standard

Inspected all four inspo decks. `J1YZbQfAXYN3xVzA3S4pCo` (KHELurja) is the geometry benchmark:

| Slide | Top-level | Total | Rects | Texts | Ellipses | Frames |
|---|---|---|---|---|---|---|
| Cover | 64 | 100 | 56 | 27 | 4 | 12 |
| Problem Analysis | 124 | 136 | 61 | 53 | 13 | 8 |
| Solution | 87 | 124 | 33 | 58 | 18 | 14 |
| GTM | 84 | 129 | 27 | 69 | 15 | 17 |
| Business Model | 109 | 135 | 53 | 48 | 23 | 10 |
| Feasibility | 82 | 137 | 34 | 69 | 20 | 13 |
| Appendix | 91 | 176 | 18 | 101 | 2 | 54 |
| Thank you | 2 | 3 | 1 | 1 | 0 | 0 |

Density comes from **many small elements** (a 24-cell strip, a 100-dot matrix, a 7-column table),
not from big shapes. Tables are the cheapest way to add 40 legitimate nodes.

---

## 3. Palette (swap this `C` block into the kit, change nothing else)

```js
const C = {
  primary:     { r: 0.361, g: 0.102, b: 0.294 }, // #5C1A4B plum
  primaryDeep: { r: 0.227, g: 0.055, b: 0.188 }, // #3A0E30 deep plum
  accent:      { r: 0.910, g: 0.702, b: 0.235 }, // #E8B33C gold
  alert:       { r: 0.898, g: 0.224, b: 0.620 }, // #E5399E magenta
  tint:        { r: 0.910, g: 0.835, b: 0.886 }, // #E8D5E2 pale plum
  ink:         { r: 0.039, g: 0.039, b: 0.039 }, // #0A0A0A
  surface:     { r: 0.929, g: 0.929, b: 0.929 }, // #EDEDED
  surfaceAlt:  { r: 0.965, g: 0.965, b: 0.965 }, // #F5F5F5
  white:       { r: 1,     g: 1,     b: 1     },
};
```

Everything else in `deck-system/figma-deck-kit.js` is pasted **verbatim** into every content script.
Helper signatures you will use (already in the kit, do not rewrite them):

```
addFrame(parent,x,y,w,h,fill,strokeColor,strokeWeight,name)
addRect(parent,x,y,w,h,fill,strokeColor,strokeWeight)
addEllipse(parent,x,y,w,h,fill,strokeColor,strokeWeight)
addText(parent,family,style,size,color,chars,x,y,w,h,hAlign,vAlign,autoH)
addWireH(parent,x1,x2,y,color,thickness)
addDiagonalWire(parent,x1,y1,x2,y2,color,thickness)
addDashedRow(parent,x,y,totalW,color,dashW,gapW,thickness)
addLayeredCard(slide,x,y,w,h,backColor,frontColor,offset,strokeW,name)  // returns FRONT frame
addChip(slide,x,y,w,h,text,frontColor,textColor,size)                   // returns front frame
addBadge(slide,x,y,d,num,bg,fg)
buildRibbon(slide,activeIndex,labels,widths,startX,y,h)
sectionChip(slide,text,w,x,y)
sourceLine(slide,text,slideW)
addTable(parent,x,y,colWidths,headerLabels,rows,opts)   // opts:{headerFill,rowH,headerH,cellSize,totalRow}
```

`addText` with `autoH=true` requires an explicit `w`. Always pass one.

---

## 4. Universal slide skeleton (identical on all five content slides)

```js
const RIBBON = ["PROBLEM","ANALYSIS","SOLUTION","ARCHITECTURE","IMPACT"];
const RW     = [230, 250, 250, 330, 220];   // widths, sum 1280 + 4 gaps of 26 = 1384, ends at x=1448

buildRibbon(slide, ACTIVE_INDEX, RIBBON, RW, 64, 40, 60);
addChip(slide, 1700, 40, 156, 60, "0N / 07", C.primary, C.white, 24);   // slide counter, top right
sectionChip(slide, "SECTION NAME", CHIP_W, 64, 118);                     // h is 56, ends y=174
addText(slide,"Poppins","Bold",42,C.ink, ACTION_TITLE, 64, 196, 1660, 110, "LEFT", undefined, true);
sourceLine(slide, SOURCES, 1920);                                        // renders at y=1050, 14pt
```

**Content zone: x 64 to 1856 (width 1792), y 318 to 1035 (height 717).**

Default three-band grid (per-slide overrides are stated in that slide's spec):

| Band | y | height | ends |
|---|---|---|---|
| A | 318 | 126 | 444 |
| B | 468 | 262 | 730 |
| C | 750 | 285 | 1035 |

Layered cards add a +7px back-card offset, which is why the gutters are 24px, not 8px.

**Slide counter strings:** cover has none. Content slides use `02 / 07` through `06 / 07`. Thank you
has none.

---

## 5. The argument, engineered before any node is drawn

Per the `case-competition-deck` skill, the recommendation is **contrarian against what the brief
implies**. Nari Kavach invites "build a better SOS button." The deck argues the opposite:

> India has spent ten years building the alarm layer, and the alarm layer is now about as good as it
> is going to get. The national average 112 response is 18.61 minutes. Every deployed tool in the
> country activates after the threat is already real. The window nobody has built for is the ninety
> seconds before, when an attacker is deciding whether she is alone and unwitnessed. Women already
> run a manual protocol for exactly that window: 72.3 percent fake a phone call. Nobody has built
> the tool for the protocol they already run.

**Moneyshot (Slide 2, form 3):** the incident-clock timeline. Every named existing tool clusters at
T+0. Pukaar sits alone at T-90s. The gap between them is tinted and labelled.

**Foreshadowing:** Slide 1 plants 95.6 percent known-perpetrator. Slide 3 collects on it, because a
known attacker is exactly the case where a visible alarm is the escalation.

---

## 6. Evidence base

Every figure below is researched and ready to cite. Nothing here is invented.

| Claim | Figure | Cite as |
|---|---|---|
| Crimes against women, 2025 | 4.01 lakh cases, ~51 FIRs per hour, rate 66.4 per lakh | NCRB 2025 |
| Delhi is the outlier | Delhi 144.4, Haryana 118.7, Telangana 117.6, national 66.4 per lakh | NCRB |
| Threat is not a stranger | 95.6% of rape cases the accused is known (26,808 of 28,046, 2020) | NCRB 2020 |
| Official count is a floor | NFHS-5: 32% of ever-married women report lifetime spousal violence | NFHS-5 2019-21 |
| Commute harassment | 56% harassed while commuting | ORF 2021 |
| The economic cost | 52% declined an education or job opportunity over commute safety | ORF 2021 |
| Delhi buses after dark | 77% of women feel unsafe | Greenpeace |
| Causal mobility evidence | Delhi resettled 700,000 to the periphery: male employment +5%, female employment **-27%**, travel time tripled | World Bank IEConnect South Asia |
| Transport is the binding constraint | Unsafe transport is the single largest factor limiting women's economic participation | ILO 2017 |
| Alarm-layer latency | National average 112 response 18.61 min (2025); Chandigarh 5.6; UP 6.83; observed worst 53 | ERSS / state police |
| A decade of alarm legislation | DoT panic-button rule notified Apr 2016, due 1 Jan 2017, slipped on handset supply and a non-live 112, Delhi trial jammed by prank calls, effectively shipped 2019 | DoT Panic Button Rules 2017 |
| The protocol already exists | 72.3% of women use fake calls or deceptive texting riding alone at night (n=1,000) | 2026 rideshare safety survey |
| Why it works at all | 68 to 94% of women in developing countries report feeling safer with a phone, using it for deterrence | mobile-and-safety literature |
| Why it is not enough | Fake-call app effectiveness is explicitly unproven in the literature | VAWG tech reviews |

**`[FETCH]` before drawing Slide 5.** Do not invent these:
- AISHE female higher-education enrolment for Delhi, and University of Delhi female enrolment.
- Current per-minute list pricing for the STT, LLM, and TTS legs, to compute cost per commute.

**Mandatory honest disclosure on Slide 2.** **HerSignal** (UCL hackathon winner) already ships
AI-generated realistic fake calls with parent-connected alerts. It is named in the comparison matrix.
Pukaar's differentiation is specific: the call is genuinely **two-way and answers what she actually
says**, the duress trigger lives **inside natural conversation** rather than behind a tap or a power
chord, and it is India-first (Hinglish code-switching, Indian voices, installable PWA, no app store).

---

## 7. SLIDE 0 — Cover  (target 95 to 115 nodes)

No ribbon, no counter, no section chip.

```
addRect(slide, 0, 0, 1920, 1080, C.white);                      // ground
addRect(slide, 0, 0, 26, 1080, C.primary);                      // left plum rail
addRect(slide, 26, 0, 10, 1080, C.accent);                      // gold hairline beside it
```

**Wordmark block**
| Element | Call |
|---|---|
| Wordmark | `addText(slide,"Poppins","ExtraBold",104,C.primary,"Pukaar",84,110,900,130,"LEFT")` |
| Etymology | `addText(slide,"Inter","Bold",26,C.ink,"Pukaar: a call, and also a cry for help.",88,250,900,34,"LEFT")` |
| Rule | `addWireH(slide, 88, 1180, 300, C.ink, 3)` |
| Positioning | `addText(slide,"Poppins","Bold",34,C.ink,"The call she is already pretending to be on, made real, with the alarm hidden inside the conversation.",88,322,1100,130,"LEFT",undefined,true)` |
| Track chip | `addChip(slide,1300,120,420,62,"TRACK: AI FOR SAFETY",C.accent,C.ink,24)` |
| Event chip | `addChip(slide,1300,206,420,62,"NARI KAVACH 2026",C.primary,C.white,24)` |
| Host line | `addText(slide,"Inter","Semi Bold",22,C.ink,"IEEE WiE Affinity Group, Faculty of Technology, University of Delhi. Part of IEEE Yantrika 1.0.",1300,290,540,90,"LEFT",undefined,true)` |

**KPI hero row** — `y=470, h=132`, three layered cards, `x = 84 / 689 / 1294`, `w = 566`, gap 39.
```js
const front = addLayeredCard(slide, X, 470, 566, 132, C.accent, C.white, 7, 2);
addText(front,"Poppins","ExtraBold",58,NUMCOLOR,NUM, 24, 10, 520, 68,"LEFT");
addText(front,"Inter","Semi Bold",22,C.ink,CAP, 24, 80, 520, 44,"LEFT",undefined,true);
```
| # | NUM | NUMCOLOR | CAP |
|---|---|---|---|
| 1 | `18.61 min` | `C.alert` | national average 112 response time, 2025 |
| 2 | `72.3%` | `C.primary` | of women already fake a phone call when travelling alone at night |
| 3 | `95.6%` | `C.primaryDeep` | of accused in rape cases are already known to her |

**Team table** — `addTable(slide, 84, 660, [420,540,260], ["Name","Institution","Role"], rows, {rowH:52, headerH:52, headerFill:C.tint})`. Rows: three or four team members, `[name, institution, "Team Lead" | "Member"]`. Ask the user for real names before building; do not invent them.

**One-sentence explainer panel** — `addLayeredCard(slide, 1360, 660, 480, 250, C.accent, C.surface, 7, 2)`, rail label `"WHAT PUKAAR IS"` at 22pt `C.primary`, then three 22pt `Inter Semi Bold` lines with 22×22 ink-outlined square bullet markers:
- `A two-way AI voice call she starts before an unsafe walk.`
- `It answers what she actually says, so it holds up to anyone listening.`
- `One ordinary-sounding sentence sends her live location and never breaks the call.`

**Density top-up if under 95 nodes:** add a 20-cell gold-and-ink chevron strip along `y=1010, h=24, x=84 to 1836` (20 rects of 82px with 6px gaps), captioned nothing. It reads as a base rule and is legitimate structure, not filler.

---

## 8. SLIDE 1 — Problem Statement  (`ACTIVE_INDEX=0`, counter `02 / 07`, target 165 to 185 nodes)

`sectionChip(slide, "PROBLEM STATEMENT", 470, 64, 118)`

**Action title** (exact string, two lines at 42pt in 1660px):
```
56% of Indian women are harassed on their commute. 52% then decline the job or the college seat that required it.
```

**Band grid override:** A `318..444`, B `468..730`, C `750..1035`.

### Form 1 — KPI hero row (Band A, 12 nodes)
Three layered cards, `x = 64 / 669 / 1274`, `y=318`, `w=581`, `h=126`, `addLayeredCard(..., C.accent, C.white, 7, 2)`.
Numeral `Poppins ExtraBold 56` at `(22, 8, 540, 66)`; caption `Inter Semi Bold 22` at `(22, 76, 540, 42)` with `autoH`.

| # | Numeral | Color | Caption |
|---|---|---|---|
| 1 | `51` | `C.alert` | FIRs for crimes against women registered every hour, nationally |
| 2 | `56%` | `C.primary` | of women report sexual harassment while commuting |
| 3 | `52%` | `C.primaryDeep` | declined an education or work opportunity over commute safety |

### Form 2 — Vertical bar chart, crime rate by state (Band B left, x 64..944, 16 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Crimes against women per lakh female population",64,468,880,28,"LEFT")`
- Baseline: `addWireH(slide, 90, 900, 700, C.ink, 2.5)`
- Bars: `barX = 100 + i*200`, `w=160`, `barY = 700 - h`, `addRect(slide, barX, barY, 160, h, FILL, C.ink, 2)`

| i | Label | Value | h | FILL |
|---|---|---|---|---|
| 0 | Delhi | 144.4 | 170 | `C.alert` |
| 1 | Haryana | 118.7 | 140 | `C.primary` |
| 2 | Telangana | 117.6 | 138 | `C.primary` |
| 3 | All India | 66.4 | 78 | `C.tint` |

- Value label above each bar: `addText(slide,"Poppins","Bold",22,C.ink, "144.4", barX, barY-32, 160, 28, "CENTER")`
- Category label below baseline: `addText(slide,"Inter","Semi Bold",22,C.ink, "Delhi", barX, 708, 160, 28, "CENTER")`
- In-chart callout: `addText(slide,"Inter","Bold",22,C.alert,"Delhi runs at 2.2 times the national rate.",100,520,300,60,"LEFT",undefined,true)`

### Form 3 — Delhi resettlement natural experiment (Band B right, x 976..1856, 10 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Delhi resettled 700,000 people to the periphery. Employment moved in opposite directions.",976,468,880,60,"LEFT",undefined,true)`
- Label column `x=976, w=195`, `Inter Bold 22`. Bar origin `x=1180`. Scale: 380px = 27 points.
- Row 1 `y=560, h=56`: label `Male employment`; bar `addRect(slide,1180,560,70,56,C.primary,C.ink,2)`; value `addText(...,"Poppins","Bold",22,C.ink,"+5%",1262,560,120,56,"LEFT","CENTER")`
- Row 2 `y=636, h=56`: label `Female employment`; bar `addRect(slide,1180,636,380,56,C.alert,C.ink,2)`; value `"-27%"` at `x=1572`
- Callout: `addText(slide,"Inter","Bold",22,C.ink,"Her travel time tripled. The safety of the route decided whether she kept working.",976,704,880,28,"LEFT")`

### Form 4 — 100-dot matrix, "of every 100 women commuters" (Band C left, x 64..624, 104 nodes)
**This is the density engine on this slide. Do not skip it.**
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Of every 100 women who commute",64,750,560,28,"LEFT")`
- Grid: 20 columns × 5 rows, dot `d=18`, pitch 26. `dotX = 64 + col*26`, `dotY = 790 + row*26`. Last dot ends at x=558, y=898.
- Index `n = row*20 + col`, running 0 to 99. Fill: `n < 56 ? C.alert : C.tint`. Stroke `C.ink` weight 1.5.
- Legend: `addRect(slide,64,916,22,22,C.alert,C.ink,2)` + `addText(...,"Inter","Semi Bold",22,C.ink,"56 report harassment on the route",96,916,460,22,"LEFT")`
- Second legend row at `y=950` with `C.tint` swatch and text `44 do not report it, which is not the same as safe`
- Caption: `addText(slide,"Inter","Semi Bold",22,C.ink,"NFHS-5 puts lifetime spousal violence at 32%, so every count here is a floor.",64,988,560,50,"LEFT",undefined,true)`

### Form 5 — Known-perpetrator split bar (Band C middle, x 648..1208, 9 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Who the accused actually is",648,750,560,28,"LEFT")`
- Segment 1: `addFrame(slide,648,790,535,62,C.alert,C.ink,2)`, inside it `addText(front,"Inter","Bold",22,C.white,"Known to her, 95.6%",0,0,535,62,"CENTER","CENTER")`
- Segment 2: `addRect(slide,1183,790,25,62,C.tint,C.ink,2)` — **no text inside, it is 25px wide**
- Legend: `addRect(slide,648,868,22,22,C.tint,C.ink,2)` + `addText(...,22,C.ink,"Stranger, 4.4%",680,868,300,22,"LEFT")`
- Caption: `addText(slide,"Inter","Semi Bold",22,C.ink,"26,808 of 28,046 rape cases in 2020. The danger is usually someone she cannot visibly alarm without making things worse.",648,906,560,120,"LEFT",undefined,true)`

### Form 6 — Issue tree, commute to career (Band C right, x 1232..1856, 14 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"How a commute becomes a career decision",1232,750,624,28,"LEFT")`
- `addChip(slide,1232,790,480,54,"Harassment on the route",C.white,C.ink,22)`
- `addDiagonalWire(slide,1472,844,1472,872,C.ink,2.5)`
- `addChip(slide,1232,872,480,54,"She avoids the route",C.white,C.ink,22)`
- `addDiagonalWire(slide,1472,926,1472,954,C.ink,2.5)`
- `addChip(slide,1232,954,480,54,"She declines the opportunity",C.alert,C.white,22)`
- `addText(slide,"Inter","Bold",22,C.alert,"This never appears in any crime statistic.",1232,1014,624,24,"LEFT")`

**Source line:**
```
NCRB 2025 | NCRB 2020 | NFHS-5, 2019-21 | ORF 2021 | World Bank IEConnect South Asia | ILO 2017
```

---

## 9. SLIDE 2 — Problem Analysis  (`ACTIVE_INDEX=1`, counter `03 / 07`, target 170 to 190 nodes)

`sectionChip(slide, "PROBLEM ANALYSIS", 450, 64, 118)`

**Action title:**
```
India has spent ten years building the alarm. It now arrives in 18.61 minutes on national average, long after the moment that decided the outcome.
```

**Band grid override:** A `318..444`, B `468..730`, C `750..1035`.

### Form 1 — Panic-button mandate timeline (Band A, full width, 22 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"A decade of legislating the alarm layer",64,318,1792,28,"LEFT")`
- Wire: `addWireH(slide, 150, 1790, 400, C.ink, 3)`
- 5 nodes, centers at `cx = [150, 560, 970, 1380, 1790]`, ellipse `addEllipse(slide, cx-22, 378, 44, 44, FILL, C.ink, 2.5)`; last node FILL is `C.alert`, the rest `C.accent`
- Year above: `addText(slide,"Poppins","Bold",22,C.ink, YEAR, cx-90, 342, 180, 26, "CENTER")`
- Event below: `addText(slide,"Inter","Semi Bold",22,C.ink, EVENT, cx-160, 432, 320, 60, "CENTER", undefined, true)` — for node 0 clamp `x` to 64, for node 4 clamp so the right edge stays at 1856

| cx | Year | Event |
|---|---|---|
| 150 | 2016 | DoT notifies the panic button rule for every handset |
| 560 | 2017 | Deadline missed. 112 was not yet live nationally. |
| 970 | 2018 | Delhi trial jams on prank calls, rollout slips a year |
| 1380 | 2019 | The panic button finally ships |
| 1790 | 2026 | Average response is still 18.61 minutes |

### Form 2 — 112 response time bars (Band B left, x 64..884, 17 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"How long the alarm actually takes to arrive, in minutes",64,468,820,28,"LEFT")`
- Label column `x=64, w=240`, `Inter Bold 22`. Bar origin `x=320`. Scale `8.68 px per minute` (460px = 53 min).
- Rows at `y = 516, 568, 620, 672`, `h=44`

| Label | Value | Bar width | Fill |
|---|---|---|---|
| Chandigarh | 5.6 | 49 | `C.tint` |
| Uttar Pradesh | 6.83 | 59 | `C.tint` |
| National average | 18.61 | 162 | `C.primary` |
| Worst observed | 53.0 | 460 | `C.alert` |

- Value pill after each bar: `addText(slide,"Poppins","Bold",22,C.ink, "18.61", 320+w+12, rowY, 110, 44, "LEFT", "CENTER")`
- Vertical marker on the national average: `addRect(slide, 482, 500, 3, 210, C.alert)`
- In-chart callout: `addText(slide,"Inter","Bold",22,C.alert,"18.61 minutes is the national average.",496,708,388,24,"LEFT")`

### Form 3 — THE MONEYSHOT, incident clock (Band B right, x 916..1856, 34 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Where every deployed tool actually sits on the incident clock",916,468,940,28,"LEFT")`
- Tinted whitespace band: `addRect(slide, 940, 512, 330, 88, C.tint, C.ink, 2)` and inside-band label `addText(slide,"Inter","Bold",22,C.primary,"Nobody has built for this window",950,536,310,40,"CENTER",undefined,true)`
- Axis: `addWireH(slide, 940, 1840, 640, C.ink, 3)`
- Ticks at `tx = [990, 1130, 1300, 1500, 1700, 1830]`: `addRect(slide, tx, 632, 3, 16, C.ink)`
- Tick labels below at `y=656`, `Inter Semi Bold 22`, `w=140`, `CENTER`, `x = tx-70`:
  `T-90s`, `T-30s`, `T+0`, `T+5m`, `T+18.6m`, `T+53m`
- **Pukaar marker:** `addEllipse(slide, 1035, 558, 34, 34, C.primary, C.ink, 2.5)` with `addText(slide,"Poppins","Bold",22,C.primary,"Pukaar",1000,524,120,26,"CENTER")`
- **Existing-tool cluster at T+0**, six 20px dots stacked above the axis at `x=1290`, `y = 604, 578, 552, 526, 500, 474`, all `C.alert` fill, `C.ink` stroke 2. Labels to the right at `x=1318, w=180, Inter Semi Bold 22`, vertically aligned to each dot:
  `112 India`, `Himmat Plus`, `Raksha`, `bSafe`, `SafetiPin`, `HerSignal`
- **Arrival marker:** `addEllipse(slide, 1686, 624, 28, 28, C.ink, C.ink, 2)` with label `addText(slide,"Inter","Bold",22,C.ink,"Police arrive",1620,690,160,24,"CENTER")`

### Form 4 — Feature-parity matrix (Band C left, x 64..1244, 62 nodes)
```js
addTable(slide, 64, 750, [280,150,150,130,130,150,190],
  ["", "112 India", "Himmat+", "Raksha", "bSafe", "HerSignal", "Pukaar"],
  [
    ["Trigger",              "Tap",  "Tap",  "SMS",  "Tap",    "Tap",    "Spoken, mid-talk"],
    ["Works while watched",  "No",   "No",   "No",   "No",     "Partly", "Yes"],
    ["Two-way conversation", "No",   "No",   "No",   "No",     "No",     "Yes"],
    ["Deters before the act","No",   "No",   "No",   "Partly", "Partly", "Yes"],
    ["Built for India",      "Yes",  "Yes",  "Yes",  "No",     "No",     "Yes"],
  ],
  { rowH: 44, headerH: 48, headerFill: C.tint, cellSize: 22 });
```
Table height is `48 + 5*44 = 268`, ending at y=1018. **HerSignal is named on purpose.** After the
table add `addText(slide,"Inter","Semi Bold",22,C.ink,"HerSignal is the closest existing product. Its call is a one-way recording and its trigger is still a tap.",64,1024,1180,24,"LEFT")`

### Form 5 — Three opportunity-gap chips (Band C right, x 1276..1856, 11 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"The three gaps nobody has filled",1276,750,580,28,"LEFT")`
- `addChip(slide,1276,792,580,68,"Nothing works in the 90 seconds before",C.white,C.ink,22)`
- `addChip(slide,1276,876,580,68,"Nothing survives the phone being watched",C.white,C.ink,22)`
- `addChip(slide,1276,960,580,68,"72.3% already improvise this by hand",C.alert,C.white,22)`

**Source line:**
```
DoT Panic Button Rules 2017 | ERSS and state police response data, 2025 | 2026 rideshare safety survey, n=1,000 | product documentation, HerSignal and named apps
```

---

## 10. SLIDE 3 — Proposed Solution  (`ACTIVE_INDEX=2`, counter `04 / 07`, target 150 to 175 nodes)

`sectionChip(slide, "PROPOSED SOLUTION", 470, 64, 118)`

**Action title:**
```
Pukaar turns the call she is already pretending to be on into a real conversation, and hides the alarm inside it.
```

**Band grid override:** A `318..444`, B `468..712`, C `732..1035`.

### Form 1 — Spec KPI row (Band A, 12 nodes)
Same card geometry as Slide 1 Form 1 (`x = 64 / 669 / 1274`, `w=581`, `h=126`).

| # | Numeral | Color | Caption |
|---|---|---|---|
| 1 | `1.2 s` | `C.primary` | target time to the AI's first spoken word, so it sounds like a person |
| 2 | `2` | `C.alert` | independent trigger paths, one of which needs no network at all |
| 3 | `0` | `C.primaryDeep` | taps, screens or visible actions needed to raise the alarm |

### Form 2 — Four-step process wire (Band B left, x 64..1244, 20 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"From an ordinary call to a silent alert",64,468,1180,28,"LEFT")`
- Wire: `addWireH(slide, 132, 1176, 538, C.ink, 3)`
- Badges `d=56` centered at `cx = [132, 480, 828, 1176]`, so `addBadge(slide, cx-28, 510, 56, n, FILL, C.white)` with FILL `C.primary` for 1 to 3 and `C.alert` for 4
- Step title `Poppins Bold 22 C.ink` at `(cx-140, 584, 280, 26, "CENTER")`
- Step body `Inter Semi Bold 22 C.ink` at `(cx-150, 616, 300, 90, "CENTER", undefined, true)`; clamp step 1's x to 64 and step 4's right edge to 1244

| n | Step title | Step body |
|---|---|---|
| 1 | She starts a session | One tap before the walk. A call screen opens and someone picks up. |
| 2 | The AI talks and listens | It asks real questions and answers what she actually said. |
| 3 | She says the duress line | An ordinary sentence. No pause, no tell, nothing to notice. |
| 4 | The alert goes out | Contacts get her live location. The call carries on as if nothing happened. |

### Form 3 — What it does and does not do (Band B right, x 1276..1856, 16 nodes)
Two stacked layered cards, `w=580`, `h=116`, at `y=468` and `y=596`.
- Card A `addLayeredCard(slide,1276,468,580,116,C.accent,C.white,7,2)`; rail `addText(front,"Poppins","Bold",22,C.primary,"WHAT PUKAAR DOES",18,10,540,26,"LEFT")`; then two 22pt `Inter Semi Bold` lines at `y=42` and `y=74`:
  `Holds a believable conversation for the whole walk.`
  `Sends live location on a spoken phrase, silently.`
- Card B `addLayeredCard(slide,1276,596,580,116,C.accent,C.surface,7,2)`; rail `"WHAT PUKAAR DOES NOT DO"`; two lines:
  `It does not run while the phone is locked and idle.`
  `It does not call the police for her. She decides that.`

### Form 4 — Conversation transcript proof panel (Band C left, x 64..1064, 30 nodes)
**This is the "oh, it works" moment rendered on paper. Build it exactly.**
- `const p = addLayeredCard(slide, 64, 732, 1000, 303, C.accent, C.white, 7, 2);`
- Rail: `addText(p,"Poppins","Bold",22,C.primary,"WHAT THE JUDGES WILL HEAR IN THE DEMO",20,12,960,26,"LEFT")`
- Five message rows at `ry = [48, 96, 144, 192, 240]`, each `h=42`. AI rows sit left (`x=20, w=600`), her rows sit right (`x=380, w=600`).
- Each row: a speaker tag `addText(p,"Poppins","Bold",22,SPKCOLOR,SPK, tagX, ry+8, 90, 26,"LEFT")` plus a message frame `addFrame(p, msgX, ry, msgW, 42, FILL, C.ink, 2)` with the text inside at `Inter Semi Bold 22`, padded 12px.

| ry | Speaker | Color | Fill | Message |
|---|---|---|---|---|
| 48 | PUKAAR | `C.primary` | `C.tint` | Where are you right now, still near the market? |
| 96 | HER | `C.ink` | `C.surface` | Just crossed it. Ten minutes, maybe. |
| 144 | PUKAAR | `C.primary` | `C.tint` | Okay, stay on the call. I will keep talking. |
| 192 | HER | `C.ink` | `C.alert` | No, I already told mom. I will eat at home. |
| 240 | PUKAAR | `C.primary` | `C.tint` | Haha, fine. So listen, about tomorrow. |

Row 4's text is `C.white Inter Bold 22`, and it is the duress line.
- Margin note: `addText(p,"Inter","Bold",22,C.alert,"The alarm went out on the fourth line. The AI did not react, the call did not stop, and her contact's phone is already open on the map.",20,290,960,50,"LEFT",undefined,true)`

### Form 5 — Phone mockup (Band C middle, x 1096..1296, 12 nodes)
All built from shapes, no imported image, 22pt floor respected inside.
- Body: `addRect(slide,1096,732,200,303,C.white,C.ink,3)`
- Top notch band: `addRect(slide,1096,732,200,14,C.ink)`
- Screen: `addRect(slide,1110,760,172,246,C.primaryDeep,C.ink,2)`
- Caller name: `addText(slide,"Poppins","Bold",22,C.white,"Maa",1110,790,172,26,"CENTER")`
- Timer: `addText(slide,"Inter","Semi Bold",22,C.tint,"02:14",1110,822,172,24,"CENTER")`
- Mic circle: `addEllipse(slide,1140,880,44,44,C.tint,C.ink,2)`
- End circle: `addEllipse(slide,1208,880,44,44,C.alert,C.ink,2)`
- Status strip: `addRect(slide,1110,950,172,34,C.primary,C.ink,2)` with `addText(...,"Inter","Bold",22,C.white,"On call",1110,956,172,24,"CENTER")`
- Caption below the phone: `addText(slide,"Inter","Semi Bold",22,C.ink,"Nothing on this screen says safety.",1096,1010,200,50,"CENTER",undefined,true)`

### Form 6 — Dual-trigger diagram (Band C right, x 1328..1856, 14 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Two paths to the same alarm",1328,732,528,28,"LEFT")`
- Box A: `addFrame(slide,1328,776,250,96,C.white,C.ink,2)` with `Poppins Bold 22 "Path 1"` and `Inter Semi Bold 22 "Model calls raise_alarm"` inside
- Box B: `addFrame(slide,1606,776,250,96,C.white,C.ink,2)` with `"Path 2"` and `"On-device phrase match"`
- `addDiagonalWire(slide,1453,872,1592,928,C.ink,2.5)` and `addDiagonalWire(slide,1731,872,1592,928,C.ink,2.5)`
- Merge box: `addFrame(slide,1467,928,250,72,C.alert,C.ink,2.5)` with `Poppins Bold 22 C.white "raise_alarm"` centered
- Note: `addText(slide,"Inter","Bold",22,C.ink,"Path 2 still fires with the voice relay fully offline.",1328,1010,528,50,"LEFT",undefined,true)`

**Source line:**
```
Web Speech API and MediaDevices specifications | 2026 rideshare safety survey | Pukaar system design
```

---

## 11. SLIDE 4 — Technical Architecture  (`ACTIVE_INDEX=3`, counter `05 / 07`, target 150 to 175 nodes)

`sectionChip(slide, "TECHNICAL ARCHITECTURE", 560, 64, 118)`

**Action title:**
```
Two independent trigger paths, so the alarm never depends on the same network the conversation runs on.
```

**Band grid override:** A `318..508`, B `528..738`, C `758..1035`.

### Form 1 — System diagram, left to right (Band A, full width, 30 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Signal path, from her microphone to her contact's map",64,318,1792,28,"LEFT")`
- Seven boxes at `bx = 64 + i*260`, `y=360`, `w=224`, `h=110`, `addFrame(slide, bx, 360, 224, 110, FILL, C.ink, 2.5)`
- Inside each: `addText(box,"Poppins","Bold",22,C.ink,TITLE,12,14,200,26,"LEFT")` and `addText(box,"Inter","Semi Bold",22,C.ink,SUB,12,46,200,54,"LEFT",undefined,true)`
- Connectors: six `addWireH(slide, bx+224, bx+260, 415, C.ink, 2.5)` for i = 0 to 5

| i | FILL | TITLE | SUB |
|---|---|---|---|
| 0 | `C.tint` | PWA client | Next.js on Vercel |
| 1 | `C.white` | Voice relay | Cloud Run, WebSocket |
| 2 | `C.white` | STT stream | partial transcripts |
| 3 | `C.accent` | LLM persona | holds the raise_alarm tool |
| 4 | `C.white` | TTS stream | audio back to her |
| 5 | `C.white` | Dispatcher | Cloud Run |
| 6 | `C.tint` | Her contacts | FCM push, WhatsApp link, live map |

- Below the diagram: `addText(slide,"Inter","Bold",22,C.alert,"The alarm branches at box 4 and does not wait for boxes 5 or 6 to finish.",64,482,1792,24,"LEFT")`

### Form 2 — Latency budget segmented bar (Band B left, x 64..1144, 17 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Latency budget to first spoken word, target 1,200 ms",64,528,1080,28,"LEFT")`
- One segmented bar at `y=570, h=68`, total width 1080, five `addFrame` segments in a row:

| Segment | ms | Width | x | Fill |
|---|---|---|---|---|
| Mic capture and VAD | 120 | 108 | 64 | `C.tint` |
| STT partial | 220 | 198 | 172 | `C.primary` |
| LLM first token | 380 | 342 | 370 | `C.alert` |
| TTS first chunk | 300 | 270 | 712 | `C.primaryDeep` |
| Playback | 180 | 162 | 982 | `C.accent` |

**Do not put value text inside the segments.** Widths under about 200px cannot hold 22pt legibly.
- Legend, two rows of three, swatch `addRect(x, y, 22, 22, FILL, C.ink, 2)` plus `addText(...,"Inter","Semi Bold",22,C.ink,"STT partial, 220 ms", x+32, y, 320, 22,"LEFT")`. Columns at `x = 64, 424, 784`; rows at `y = 662, 700`.

### Form 3 — Two-tier voice architecture (Band B right, x 1176..1856, 14 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Two tiers, one tool contract",1176,528,680,28,"LEFT")`
- Tier A card: `addLayeredCard(slide,1176,570,680,78,C.accent,C.white,7,2)`; inside, `Poppins Bold 22 C.primary "TIER A, DEFAULT"` and `Inter Semi Bold 22 "Streaming STT, small fast LLM, streaming TTS. A fraction of the per-minute cost."`
- Tier B card: `addLayeredCard(slide,1176,662,680,78,C.accent,C.surface,7,2)`; `"TIER B, PREMIUM AND DEMO"` and `"Realtime speech-to-speech over WebRTC. Sub-500 ms turn taking."`
- Note under: `addText(slide,"Inter","Bold",22,C.ink,"Both expose the identical raise_alarm tool, so no client code changes between them.",1176,752,680,24,"LEFT")` — move this into Band C's top edge, or shorten Band B cards to `h=72` to fit.

### Form 4 — Tech stack table (Band C left, x 64..1164, 34 nodes)
```js
addTable(slide, 64, 762, [220, 400, 480],
  ["Layer", "Choice", "Why this and not the alternative"],
  [
    ["Client",     "Next.js 15 PWA on Vercel",                  "Installable, and no app store review of a covert feature"],
    ["Voice loop", "Streaming STT, small LLM, TTS on Cloud Run", "The cascade costs a fraction of speech-to-speech per minute"],
    ["Trigger",    "Model tool call plus on-device match",       "Two paths, so one network failure cannot mute the alarm"],
    ["Dispatch",   "Firestore, FCM, WhatsApp click-to-chat",     "No paid messaging API, so no sandbox join code in the demo"],
    ["Hosting",    "Vercel and Google Cloud only",               "Billing already linked. No Railway, no Render."],
  ],
  { rowH: 44, headerH: 48, headerFill: C.tint, cellSize: 22 });
```
Height `48 + 220 = 268`, ends at y=1030.

### Form 5 — DPDP privacy panel (Band C right, x 1196..1856, 20 nodes)
- `const p = addLayeredCard(slide, 1196, 762, 660, 268, C.accent, C.surface, 7, 2);`
- Rail: `addText(p,"Poppins","Bold",22,C.primary,"WHAT PUKAAR STORES, AND WHAT IT NEVER TOUCHES",18,12,620,50,"LEFT",undefined,true)`
- Two columns inside, `x=18` and `x=340`, `w=300`:
  - Left header `Poppins Bold 22 C.alert "Never stored"`, then `Inter Semi Bold 22` lines: `Call audio`, `Transcripts`, `Anything about the person nearby`
  - Right header `Poppins Bold 22 C.primary "Stored, session-scoped"`, then: `Session id`, `Her chosen contacts`, `Location trail, during the session`, `Duress timestamp`
- Footer: `addText(p,"Inter","Bold",22,C.ink,"A Firestore TTL deletes the location trail once the session ends. Consent is asked before the first session.",18,208,620,54,"LEFT",undefined,true)`

**Source line:**
```
Vercel and Google Cloud platform documentation | DPDP Act 2023 | Pukaar system design
```

### Architecture, in full, for the later build stage

- **Client.** Next.js 15 PWA on Vercel. Call-screen UI. `getUserMedia` capturing 16 kHz PCM over a
  WebSocket. Streamed TTS playback. `SpeechRecognition` running in parallel purely as the local
  duress spotter. `watchPosition` writing the trail to Firestore.
- **Voice loop, Tier A (default).** Mic to a Cloud Run relay, then streaming STT, then a small fast
  LLM holding the persona prompt and a `raise_alarm` tool, then streaming TTS, then audio back.
  Default because full speech-to-speech is materially costlier per minute and a real friend on a
  real call is forgiven a one-second beat.
- **Voice loop, Tier B (premium and demo).** Realtime speech-to-speech over WebRTC, sub-500 ms.
  Identical tool contract, so no client change.
- **Trigger path 1, server side.** The model calls `raise_alarm` silently the instant the configured
  phrase appears, and carries on without acknowledging it. Survives paraphrase, which exact matching
  cannot.
- **Trigger path 2, client side.** Fuzzy match on the local Web Speech transcript, POSTing directly.
  Works with the relay fully down. Deduplicated server side on session id inside a short window.
- **Dispatch.** A Cloud Run service writes the alert to Firestore, pushes via FCM to contacts who
  installed the PWA, and builds a WhatsApp click-to-chat deep link carrying a short tracking URL. No
  paid messaging API, so nothing in the demo depends on a Twilio sandbox join code.
- **Live tracking.** A public Next.js route behind an unguessable token, reading the Firestore
  location doc in realtime.
- **Privacy.** Audio never persisted. Stored data limited to session id, contacts, session-scoped
  location trail, and the duress event. Firestore TTL clears the trail. Consent screen before the
  first session.

---

## 12. SLIDE 5 — Expected Impact  (`ACTIVE_INDEX=4`, counter `06 / 07`, target 150 to 175 nodes)

`sectionChip(slide, "EXPECTED IMPACT", 430, 64, 118)`

**Action title:** finalise after the `[FETCH]` for AISHE enrolment and voice pricing. Shape it as a
named beachhead count against a stated cost per protected commute, for example:
```
Roughly [N] women students across Delhi NCR are the first cohort, at about Rs [X] per protected commute.
```

**Band grid override:** A `318..514`, B `534..746`, C `766..1035`.

### Form 1 — Bottom-up reach funnel (Band A, full width, 15 nodes)
Bottom-up by named counts, never a percentage slice of TAM (`CLAUDE.md` §5).
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Built bottom up from named counts, not a share of a market",64,318,1792,28,"LEFT")`
- Four bars, all starting `x=64`, `h=38`, at `y = 356, 396, 436, 476`, widths `1600, 1000, 520, 200`,
  fills `C.tint, C.tint, C.primary, C.alert`, stroke `C.ink` 2
- Value at the right end of each bar: `addText(slide,"Poppins","Bold",22,C.ink, VALUE, 64+w+14, y+6, 260, 26, "LEFT")`
- Stage label inside or beside each bar in `Inter Semi Bold 22`:
  1. `Women smartphone users in India` `[FETCH]`
  2. `Urban women who commute daily` `[FETCH]`
  3. `Female higher-education enrolment, Delhi NCR` `[FETCH, AISHE]`
  4. `University of Delhi beachhead` `[FETCH, AISHE]`

### Form 2 — Unit economics table (Band B left, x 64..944, 32 nodes)
```js
addTable(slide, 64, 534, [340, 270, 270],
  ["Cost line", "Tier A cascade", "Tier B realtime"],
  [
    ["Speech to text, per minute", "[FETCH]", "[FETCH]"],
    ["Model, per minute",          "[FETCH]", "[FETCH]"],
    ["Text to speech, per minute", "[FETCH]", "[FETCH]"],
    ["A 20-minute commute",        "[FETCH]", "[FETCH]"],
  ],
  { rowH: 44, headerH: 48, headerFill: C.tint, cellSize: 22,
    totalRow: ["Cost per protected commute", "Rs [FETCH]"] });
```
Every `[FETCH]` must be replaced with a real figure and cited. Do not ship a bracket.

### Form 3 — Three-horizon strip (Band B right, x 976..1856, 26 nodes)
Three cards at `x = 976, 1274, 1572`, `y=534`, `w=274`, `h=212`, `addLayeredCard(..., C.accent, C.white, 7, 2)`.
Each carries a tag chip at the top and three `Inter Semi Bold 22` lines with `autoH`.

| Card | Tag | Lines |
|---|---|---|
| NOW | `C.primary` | Working prototype, one campus. Hinglish voice. Two trigger paths live. |
| NEXT | `C.accent` | Regional voices. Contact fan-out to a group. Battery-aware sessions. |
| LATER | `C.tint` | Transport operator integration. An offline-first fallback that needs no data at all. |

### Form 4 — Risk register with 1:1 mitigations (Band C left, x 64..1164, 30 nodes)
```js
addTable(slide, 64, 766, [300, 380, 420],
  ["Risk", "Why it is real", "Mitigation"],
  [
    ["False trigger",        "A phrase can surface by accident",         "Both paths dedupe, plus a 10-second silent cancel"],
    ["Per-minute cost",      "Voice is not free the way a push is",      "Tier A by default, Tier B only on request"],
    ["Latency breaks it",    "A stuttering AI stops sounding human",     "Local filler lines while the model catches up"],
    ["Misuse as surveillance","Location sharing can itself be coerced",  "She sets the contacts, sees them, revokes in one tap"],
  ],
  { rowH: 52, headerH: 48, headerFill: C.tint, cellSize: 22 });
```
Height `48 + 208 = 256`, ends y=1022.

### Form 5 — Future scope hub and spoke (Band C right, x 1196..1856, 16 nodes)
- Title: `addText(slide,"Poppins","Bold",22,C.primary,"Where this goes next",1196,766,660,28,"LEFT")`
- Draw wires first, then spokes, then the hub last (z-order is draw order).
- Hub center `(1526, 916)`. Hub card `addLayeredCard(slide, 1416, 884, 220, 64, C.accent, C.primary, 7, 2.5)` with `Poppins Bold 22 C.white "Pukaar"` centered.
- Four spokes, `w=200, h=56`, at `(1206, 806)`, `(1650, 806)`, `(1206, 962)`, `(1650, 962)`, each `addFrame(..., C.white, C.ink, 2)` with `Inter Semi Bold 22` text:
  `Campus rollout`, `Transport operators`, `Regional voices`, `Offline fallback`
- Four `addDiagonalWire` from the hub center to each spoke's nearest edge center, `C.ink`, 2.5.

**Source line:** built from whatever the `[FETCH]` pass actually cites, plus `AISHE` and `NCRB 2025`.

---

## 13. SLIDE 6 — Thank you  (target 3 to 5 nodes)

Plain, matching the inspo decks' closer.
```js
addRect(slide, 0, 0, 1920, 1080, C.white);
addText(slide,"Poppins","ExtraBold",108,C.primary,"Thank you",0,460,1920,140,"CENTER");
addText(slide,"Inter","Semi Bold",26,C.ink,"Pukaar. A call, and a cry for help.",0,620,1920,34,"CENTER");
```
No ribbon, no counter, no source line.

---

## 14. Demo video script (planned now, recorded at the demo stage)

Two screens side by side, her phone and a contact's phone.
1. She starts a session. The AI greets her and asks a real question.
2. She answers something unscripted. The AI responds to what she actually said. **This beat is the
   whole demo**, because it is what a recording cannot fake.
3. She says the duress line naturally inside the conversation.
4. The AI does not react. The call keeps going.
5. The contact's phone lights up with the alert and the live map.
6. The technical flex: cut the voice relay's network, say the phrase again, and the alert still
   fires from the on-device fallback.

---

## 15. Build order

1. `whoami` to get the `planKey`. If the user is on more than one plan, ask which.
2. `create_new_file` with `editorType: "slides"`, `fileName: "Pukaar"`.
3. `listAvailableFontsAsync` to confirm fonts. Inter is `"Semi Bold"` with a space, Poppins is
   `"ExtraBold"` without one.
4. One script that creates all 7 slides empty and returns their node IDs. Keep those IDs.
5. **Batch 1: cover + Slide 1.** Paste the kit verbatim with the plum `C` block. Screenshot both
   before going further. Do not build five more slides on a foundation you have not looked at.
6. **Batch 2: Slides 2 and 3.** Run the kit's batch validator after.
7. **Batch 3: Slides 4, 5, and the thank you.** Validator again.
8. `cornerRadius = 0` sweep across the whole file.
9. Font-floor sweep, asserting no content text below 22pt, source lines exempt by name match.
10. Screenshot every slide, compare against its spec above, count nodes, fix, re-sweep.

**Failure modes to avoid** (all bit previous builds, see `CLAUDE.md` §7):
- Always `appendChild` to the real parent **before** setting `x`/`y`, at every level of nesting.
  Setting position first bakes in a `(-240, -240)` offset.
- Any text that wraps needs `autoH=true` **and** an explicit `w`. Without both it clips or collapses.
- The validator will flag ribbon punch-holes overlapping their tag, and layered back-cards
  overlapping their front frame. **Both are intentional.** Read what is flagged before fixing it.
- Deleting a layered card means deleting the back rect too, or an orange orphan block is left behind.
- `get_metadata` does not work on Slides files. Use read-only `use_figma` scripts to inspect.

---

## 16. Verification

- All 7 slides exist and screenshot cleanly at 1920×1080.
- Node count per content slide lands in **140 to 180**, measured with the same recursive walk used on
  the inspo decks. Under 140 means a form is missing, so add content, do not enlarge shapes.
- Six distinct visual forms confirmed on each of the five content slides by screenshot review.
- Font-floor sweep returns zero content text under 22pt.
- `cornerRadius = 0` sweep returns zero non-zero nodes.
- A text dump of every slide returns **zero em dashes** and none of the banned AI-voice patterns.
- Zero occurrences of `[FETCH]`, `TBD`, `TODO`, or any bracket placeholder anywhere in the deck.
- Every content slide has a populated source line, and every figure traces to §6 or to a number
  fetched and cited during the build.
- Team names on the cover came from the user, not from invention.
