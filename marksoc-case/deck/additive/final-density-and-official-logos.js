// ============================================================================
// FIGMA DECK KIT — copy-paste preamble for consulting-grade Figma Slides decks
// ============================================================================
// See ../CLAUDE.md for the full doctrine. This file is NOT executable on its
// own — it is a source of truth to paste (in relevant part) into the top of
// every `use_figma` script that builds slide content. Re-derive nothing.
//
// Usage pattern per use_figma call:
//   1. Paste the `C` token block (§A) — retint here if this deck uses a
//      different palette; everything else stays unchanged.
//   2. Paste the font-load block (§B).
//   3. Paste the helper functions you need from §C (or all of them — they're
//      cheap and it saves round-trips later in the same script).
//   4. Write your slide-building code using the helpers.
//   5. `return` all created/mutated node IDs.
//
// QA scripts (§D) are meant to be pasted as their OWN separate use_figma
// calls, run after each build batch and once at the end.
// ============================================================================


// ── §A. COLOR TOKENS (swappable) ────────────────────────────────────────────
// Nine roles. Values below are the ConsentGrid/NavSight defaults — reuse
// unless this deck has a specific reason to retheme. If retheming, replace
// ONLY the hex-derived {r,g,b} values here; keep the role names identical so
// every helper below keeps working unmodified. Figma colors are 0-1 range.
const C = {
  primary:     { r: 0.357, g: 0.129, b: 0.902 }, // #5B21E6 — dominant accent
  primaryDeep: { r: 0.227, g: 0.047, b: 0.639 }, // #3A0CA3 — secondary tier
  accent:      { r: 0.961, g: 0.773, b: 0.094 }, // #F5C518 — back-cards, chips
  alert:       { r: 0.898, g: 0.224, b: 0.620 }, // #E5399E — high-attention
  tint:        { r: 0.769, g: 0.710, b: 0.992 }, // #C4B5FD — lightest tier
  ink:         { r: 0.039, g: 0.039, b: 0.039 }, // #0A0A0A — ALL strokes/text
  surface:     { r: 0.929, g: 0.929, b: 0.929 }, // #EDEDED — card fill
  surfaceAlt:  { r: 0.965, g: 0.965, b: 0.965 }, // #F5F5F5 — zebra alt row
  white:       { r: 1,     g: 1,     b: 1     }, // #FFFFFF
};


// ── §B. FONT LOADS ───────────────────────────────────────────────────────────
// Style strings are exact and asymmetric between families — this bit you the
// first time (see CLAUDE.md §7.7). Always batch in one Promise.all.
async function loadDeckFonts() {
  await Promise.all([
    figma.loadFontAsync({ family: "Poppins", style: "Bold" }),
    figma.loadFontAsync({ family: "Poppins", style: "ExtraBold" }),   // NOT "Extra Bold"
    figma.loadFontAsync({ family: "Inter", style: "Semi Bold" }),     // NOT "SemiBold"
    figma.loadFontAsync({ family: "Inter", style: "Bold" }),
  ]);
}
// Call at the top of every script: await loadDeckFonts();


// ── §C. NODE HELPERS ─────────────────────────────────────────────────────────
// Every helper appends to `parent` BEFORE setting x/y — this is what prevents
// the (-240,-240) offset bug (CLAUDE.md §7.1). Never reorder this.

// Prevents §7.1 (position offset) and standardizes cornerRadius=0 (§2).
function addFrame(parent, x, y, w, h, fill, strokeColor, strokeWeight, name) {
  const f = figma.createFrame();
  parent.appendChild(f);                              // 1. parent first
  f.resize(w, h);
  f.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { f.strokes = [{ type: "SOLID", color: strokeColor }]; f.strokeWeight = strokeWeight || 2; }
  f.cornerRadius = 0;                                  // §2 hard rule
  f.x = x; f.y = y;                                    // 2. position last
  if (name) f.name = name;
  return f;
}

function addRect(parent, x, y, w, h, fill, strokeColor, strokeWeight) {
  const r = figma.createRectangle();
  parent.appendChild(r);
  r.resize(w, h);
  r.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { r.strokes = [{ type: "SOLID", color: strokeColor }]; r.strokeWeight = strokeWeight || 2; }
  r.cornerRadius = 0;
  r.x = x; r.y = y;
  return r;
}

function addEllipse(parent, x, y, w, h, fill, strokeColor, strokeWeight) {
  const e = figma.createEllipse();
  parent.appendChild(e);
  e.resize(w, h);
  e.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { e.strokes = [{ type: "SOLID", color: strokeColor }]; e.strokeWeight = strokeWeight || 2; }
  e.x = x; e.y = y;
  return e;
}

// autoH=true is REQUIRED for any text that might wrap (prevents §7.2 clipping).
// When autoH is true, `h` is a starting height only — Figma recalculates it.
function addText(parent, family, style, size, color, chars, x, y, w, h, hAlign, vAlign, autoH) {
  const t = figma.createText();
  parent.appendChild(t);
  t.fontName = { family, style };
  t.fontSize = size;
  t.characters = chars;
  t.fills = [{ type: "SOLID", color }];
  if (w !== undefined) {
    t.resize(w, h || 10);
    t.textAutoResize = autoH ? "HEIGHT" : "NONE";
  }
  if (hAlign) t.textAlignHorizontal = hAlign;
  if (vAlign && !autoH) t.textAlignVertical = vAlign; // vAlign only meaningful with fixed height
  t.x = x; t.y = y;
  return t;
}

// Horizontal wire segment (straight rectangle, not a Line node — simpler, no rotation math).
function addWireH(parent, x1, x2, y, color, thickness) {
  thickness = thickness || 2.5;
  const w = Math.abs(x2 - x1);
  const x = Math.min(x1, x2);
  return addRect(parent, x, y - thickness / 2, w, thickness, color);
}

// Diagonal wire between two arbitrary points, pivoting correctly (fixes §7.10).
// Key trick: position the UNROTATED rect centered on the true midpoint of
// (x1,y1)-(x2,y2) BEFORE setting rotation, so rotating around its own center
// lands exactly on the two endpoints regardless of angle.
function addDiagonalWire(parent, x1, y1, x2, y2, color, thickness) {
  thickness = thickness || 2.5;
  const dx = x2 - x1, dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angleDeg = Math.atan2(dy, dx) * 180 / Math.PI;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const r = figma.createRectangle();
  parent.appendChild(r);
  r.resize(length, thickness);
  r.fills = [{ type: "SOLID", color }];
  r.cornerRadius = 0;
  r.x = mx - length / 2;
  r.y = my - thickness / 2;
  r.rotation = angleDeg;
  return r;
}

// Dashed horizontal divider, built from small rects (no dependency on
// dashPattern API support).
function addDashedRow(parent, x, y, totalW, color, dashW, gapW, thickness) {
  dashW = dashW || 16; gapW = gapW || 10; thickness = thickness || 3;
  let cx = x;
  while (cx < x + totalW) {
    const w = Math.min(dashW, x + totalW - cx);
    addRect(parent, cx, y, w, thickness, color);
    cx += dashW + gapW;
  }
}

// THE signature motif (§2). BackCard first (offset), FrontCard second (on top,
// carries text). Returns the FrontCard — append your text/children to it.
// To remove a layered card later, you must remove BOTH the returned front
// frame AND its back rect (fixes the orphan bug, §7.6) — locate the back rect
// at (x+offset, y+offset) with matching w/h if you didn't keep its reference.
function addLayeredCard(slide, x, y, w, h, backColor, frontColor, offset, strokeW, name) {
  offset = offset === undefined ? 7 : offset;
  const back = addRect(slide, x + offset, y + offset, w, h, backColor, C.ink, 2.5);
  const front = addFrame(slide, x, y, w, h, frontColor, C.ink, strokeW || 2, name);
  return front;
  // NOTE: if you need to delete this card later, also delete `back` —
  // capture its id in the caller: const backId = back.id;
}

// Small pill/chip — used for ribbon labels, band-rail heads, section chips.
function addChip(slide, x, y, w, h, text, frontColor, textColor, size) {
  addRect(slide, x + 5, y + 5, w, h, C.accent, C.ink, 2);
  const f = addFrame(slide, x, y, w, h, frontColor, C.ink, 2);
  addText(f, "Poppins", "Bold", size || 22, textColor, text, 10, 0, w - 20, h, "CENTER", "CENTER");
  return f;
}

// Numbered circle badge — ranked lists, timeline nodes, objective lists.
function addBadge(slide, x, y, d, num, bg, fg) {
  addEllipse(slide, x, y, d, d, bg, C.ink, 2);
  addText(slide, "Poppins", "Bold", Math.round(d * 0.42), fg, String(num), x, y + (d - d * 0.55) / 2, d, d * 0.55, "CENTER", "CENTER");
}

// Ribbon nav builder — REBUILD labels/widths per section (CLAUDE.md §1 —
// ribbons are section-scoped, don't force one global set across the deck).
// labels: string[], widths: number[] (same length), activeIndex: which tag is "on".
function buildRibbon(slide, activeIndex, labels, widths, startX, y, h) {
  startX = startX === undefined ? 64 : startX;
  y = y === undefined ? 40 : y;
  h = h === undefined ? 60 : h;
  const gap = 26;
  let x = startX;
  const centers = [];
  for (let i = 0; i < labels.length; i++) {
    const w = widths[i];
    const active = i === activeIndex;
    if (active) addRect(slide, x + 8, y + 8, w, h, C.accent, C.ink, 2.5);
    const frontColor = active ? C.primary : C.accent;
    addRect(slide, x, y, w, h, frontColor, C.ink, 2);
    const textColor = active ? C.white : C.ink;
    addText(slide, "Poppins", "Bold", 24, textColor, labels[i], x, y + 14, w, 32, "CENTER", "CENTER");
    const holeR = 7, holeY = y + h / 2 - holeR;
    addEllipse(slide, x + 10 - holeR, holeY, holeR * 2, holeR * 2, C.white, C.ink, 2);
    addEllipse(slide, x + w - 10 - holeR, holeY, holeR * 2, holeR * 2, C.white, C.ink, 2);
    centers.push({ x, w, y, h });
    x += w + gap;
  }
  for (let i = 0; i < centers.length - 1; i++) {
    const a = centers[i], b = centers[i + 1];
    addWireH(slide, a.x + a.w - 10, b.x + 10, a.y + a.h / 2, C.ink, 2.5);
  }
}

// Section chip — the slide's own title-tag, sits just under the ribbon.
function sectionChip(slide, text, w, x, y) {
  addChip(slide, x === undefined ? 64 : x, y === undefined ? 118 : y, w || 440, 56, text, C.primary, C.white, 22);
}

// Source line — bottom-right, 14pt (the ONLY font-floor exemption), pipe-separated.
function sourceLine(slide, text, slideW) {
  slideW = slideW || 1920;
  addText(slide, "Inter", "Semi Bold", 14, C.primary, text, slideW - 64 - 820, 1050, 820, 22, "RIGHT", "CENTER");
}

// Generalised table — tinted header, zebra rows, ink grid, optional accent total row.
// colWidths: number[]; headerLabels: string[] (same length);
// rows: string[][] (each inner array same length as colWidths);
// opts: { headerFill, rowH, headerH, cellSize, totalRow: [label, value] }
function addTable(parent, x, y, colWidths, headerLabels, rows, opts) {
  opts = opts || {};
  const headerFill = opts.headerFill || C.tint;
  const rowH = opts.rowH || 52;
  const headerH = opts.headerH || 52;
  const cellSize = opts.cellSize || 22;
  const tableW = colWidths.reduce((a, w) => a + w, 0);
  const bodyH = rowH * rows.length;
  const totalH = headerH + bodyH + (opts.totalRow ? 56 : 0);

  const table = addFrame(parent, x, y, tableW, totalH, C.white, C.ink, 2.5);
  const header = addFrame(table, 0, 0, tableW, headerH, headerFill);
  let cx = 0;
  for (let c = 0; c < headerLabels.length; c++) {
    addText(header, "Poppins", "Bold", cellSize, C.ink, headerLabels[c], cx + 16, 0, colWidths[c] - 24, headerH,
      c === headerLabels.length - 1 ? "RIGHT" : "LEFT", "CENTER");
    cx += colWidths[c];
  }
  addRect(table, 0, headerH - 1, tableW, 2, C.ink);

  let ry = headerH;
  for (let r = 0; r < rows.length; r++) {
    const bg = r % 2 === 0 ? C.white : C.surfaceAlt;
    const row = addFrame(table, 0, ry, tableW, rowH, bg);
    let cx2 = 0;
    for (let c = 0; c < rows[r].length; c++) {
      addText(row, "Inter", c === 0 ? "Bold" : "Semi Bold", cellSize, C.ink, rows[r][c], cx2 + 16, 0, colWidths[c] - 24, rowH,
        c === rows[r].length - 1 ? "RIGHT" : "LEFT", "CENTER");
      cx2 += colWidths[c];
    }
    addRect(table, 0, ry - 1, tableW, 1.5, C.ink);
    ry += rowH;
  }

  if (opts.totalRow) {
    const totalRowFrame = addFrame(table, 0, ry, tableW, 56, C.primary);
    addText(totalRowFrame, "Poppins", "Bold", 22, C.white, opts.totalRow[0], 16, 0, colWidths[0] + 200, 56, "LEFT", "CENTER");
    const lastColStart = colWidths.slice(0, -1).reduce((a, w) => a + w, 0);
    addText(totalRowFrame, "Poppins", "Bold", 26, C.white, opts.totalRow[1], lastColStart + 16, 0, colWidths[colWidths.length - 1] - 24, 56, "RIGHT", "CENTER");
  }

  let vx = 0;
  for (let c = 0; c < colWidths.length - 1; c++) { vx += colWidths[c]; addRect(table, vx - 1, 0, 1.5, totalH, C.ink); }

  return table;
}



await loadDeckFonts();Object.assign(C,{primary:{r:.122,g:.306,b:.604},primaryDeep:{r:.043,g:.165,b:.357},accent:{r:.961,g:.718,b:0},alert:{r:.843,g:.149,b:.239},tint:{r:.863,g:.902,b:.961}});const changed=[],targets=[],added=[];
async function set(id,value,size){const n=await figma.getNodeByIdAsync(id);for(const s of n.getStyledTextSegments(['fontName']))await figma.loadFontAsync(s.fontName);n.characters=value;if(size)n.fontSize=size;n.textAutoResize='HEIGHT';changed.push(id);return n;}
await set('4:39','March EBITDA improves from −₹14.1 lakh to +₹5.6 lakh; returns fall to 4.5%, using ₹58.0 lakh. Numerical tests pass; claims require Exhibit 5 controls (A4). Trade in waits for April.',22);
await set('4:149','Native illustrations; fictional-name monograms. Official marks identify case bodies.',18);(await figma.getNodeByIdAsync('7:41')).remove();
await set('4:1850','Our plan uses ₹58.0 lakh and improves March EBITDA by ₹19.7 lakh to +₹5.6 lakh; the claims test remains conditional on Exhibit 5 controls');
await set('4:2928','Certify every phone, promise 85% battery and 12 months, open the third lab shift on 1 February and target family buyers. March EBITDA reaches +₹5.6 lakh on ₹58.0 lakh growth money. Numerical tests pass; claims require Exhibit 5 controls.',22);
await set('4:366','5 of 84 clear the conditional screen',18);await set('4:331','Controls',18);await set('4:333','Required',18);await set('4:1718','Conditional pass',18);
await set('4:1392','Source: case E6 and page 7 | model 9b3628d94d, T12-T14/T23 | Test 4 uses B1 as a screening proxy; Exhibit 5 controls remain mandatory (A4) | Q1 ranking: A3',14);
await set('4:1268','Stores and referrals: proposed',20);const ft=await set('4:747','WEB FUNNEL; STORES / MK EXCLUDED',22);ft.resize(532,33);const pt=await set('4:1242','FAMILY BUYER: CASE + INFERENCE',22);pt.resize(722,33);
await set('4:2184','THREE PROPOSED CLAIMS AND TWO REFUSALS | RELEASE ONLY AFTER PROOF',22);await set('4:2188','Required on each',18);await set('4:2191','Proof to record',18);
const april=await set('4:2413','APRIL OPERATING EBITDA, BEFORE SETUP',22);april.resize(752,33);await set('4:2859','Boundary',18);await set('4:2317','2-week trigger: fewer than 1,838/week',22);const w=await figma.getNodeByIdAsync('4:2316');w.resize(w.width,35);
for(const [id,label,ratio,pw,ph,px,py] of [['4:113','sanchar-saathi',320/197,96,56,24,0],['4:115','nch',1,56,56,134,0],['4:127','counterpoint',1284/192,130,56,0,0],['4:129','gsma',2334/762,76,56,142,0]]){const p=await figma.getNodeByIdAsync(id);for(const c of [...p.children])c.remove();p.strokes=[];p.fills=[];p.resize(pw,ph);p.x=px+16;p.y=8;p.name='ADD:OFFICIAL:'+label;const h=Math.min(ph,pw/ratio),ww=h*ratio;const r=addRect(p,(pw-ww)/2,(ph-h)/2,ww,h,C.white);r.name='ADD:ASSET:'+label;targets.push({nodeId:r.id,key:label});changed.push(p.id,r.id);}
for(const [id,key,ratio,pw,px] of [['4:18','marksoc-dtu',796/604,110,790],['4:20','cracknontech',412/289,130,912],['4:22','dtu',300/299,72,1054],['4:2955','marksoc-dtu',796/604,110,768],['4:2957','cracknontech',412/289,130,890],['4:2959','dtu',300/299,72,1032]]){const p=await figma.getNodeByIdAsync(id);p.strokes=[];p.fills=[];p.resize(pw,72);p.x=px;const r=p.children[0];const h=Math.min(72,pw/ratio),ww=h*ratio;r.resize(ww,h);r.x=(pw-ww)/2;r.y=(72-h)/2;r.strokes=[];targets.push({nodeId:r.id,key});changed.push(p.id,r.id);}
function note(parent,x,y,w,text){const t=addText(parent,'Inter','Semi Bold',22,C.ink,text,x,y,w,27,'LEFT','CENTER',true);t.name='ADD:WORKING:'+text.slice(0,35);added.push(t.id);return t;}
const launch=await figma.getNodeByIdAsync('3:10');note(launch,64,254,1792,'February: B1 + B2 go live after January setup. Existing channel budgets stay fixed; every listing requires its own proof.');
const plan=await figma.getNodeByIdAsync('3:9');const refusal=plan.children.find(n=>n.name.startsWith('PANEL:')&&n.x>1150&&n.y>700);if(refusal)note(refusal,14,230,refusal.width-28,'₹22 lakh remains unspent. The plan protects March profit; Q1 is ₹0.5 lakh below doing nothing.');
const a1=await figma.getNodeByIdAsync('3:12');const right=a1.children.find(n=>n.name.startsWith('PANEL:')&&n.x>900&&n.y>300&&n.y<400);if(right)note(right,14,300,right.width-28,'Cost layers: phone contribution → channel costs → ₹58 lakh company fixed costs → monthly growth money.');
const a2=await figma.getNodeByIdAsync('3:13');const bound=await figma.getNodeByIdAsync('4:2852');note(bound,14,302,532,'One input changes; all others fixed. Joint bear: −₹8.7 lakh (Signals).');
for(const [sid,active,old] of [['3:12',0,['4:2443','4:2444','4:2445','4:2446','4:2447','4:2448','4:2449','4:2450','4:2451','4:2452']],['3:13',1,['4:2694','4:2695','4:2696','4:2697','4:2698','4:2699','4:2700','4:2701','4:2702','4:2703']]]){const s=await figma.getNodeByIdAsync(sid);for(const id of old)(await figma.getNodeByIdAsync(id)).remove();const before=new Set(s.children.map(n=>n.id));buildRibbon(s,active,['A1','A2','A3','A4'],[390,390,390,390],64,40,60);for(const n of s.children)if(!before.has(n.id)){n.name='ADD:APPENDIX_NAV:'+n.type;added.push(n.id);}}
const ids=['3:2','3:4','3:5','3:6','3:7','3:8','3:9','3:10','3:11','3:12','3:13','3:14','3:15','3:16'];const resized=[];
for(const id of ids){const s=await figma.getNodeByIdAsync(id);for(const t of s.findAllWithCriteria({types:['TEXT']})){if(t.fontSize===14)continue;const ab=t.absoluteBoundingBox,sb=s.absoluteBoundingBox;const sy=ab.y-sb.y;const isSection=sy>=118&&sy<180&&t.fontSize<37&&t.parent.type==='FRAME'&&t.parent.width>210; if(isSection){t.fontSize=30;t.textAutoResize='HEIGHT';const p=t.parent;const need=Math.min(1450,Math.max(p.width,t.width*30/22+28));p.resize(need,Math.max(p.height,60));t.resize(need-20,Math.max(42,t.height));resized.push(t.id);continue;}if(t.fontSize>=18&&t.fontSize<=24&&!t.name.startsWith('ADD:ILLUSTRATION')&&sy>300&&sy<1035){const size=t.fontSize<22?Math.min(22,t.fontSize+2):t.fontSize+2;const p=t.parent;const k=t.clone();p.appendChild(k);k.fontSize=size;k.textAutoResize='HEIGHT';const maxH=t.textAutoResize==='NONE'?t.height:Math.min(p.height-t.y,Math.min(...p.children.filter(n=>n.id!==k.id&&n.id!==t.id&&n.type==='TEXT'&&n.y>t.y+2&&n.x<t.x+t.width&&n.x+n.width>t.x).map(n=>n.y-t.y),999));if(k.height<=maxH+.1&&k.height<=t.height+12){t.fontSize=size;if(t.textAutoResize!=='NONE')t.textAutoResize='HEIGHT';resized.push(t.id);}k.remove();}}}
const issues=[];for(const id of ids){const s=await figma.getNodeByIdAsync(id);for(const t of s.findAllWithCriteria({types:['TEXT']})){if(t.characters.includes('—')||t.characters.includes('–')){t.characters=t.characters.replace(/[—–]/g,': ');changed.push(t.id);}if(t.parent.type!=='SLIDE'&&(t.y+t.height>t.parent.height+1||t.x+t.width>t.parent.width+1))issues.push({id:t.id,text:t.characters.slice(0,50),over:t.y+t.height-t.parent.height,parent:t.parent.id});}}
return {changed,added,resized,targets,issues};