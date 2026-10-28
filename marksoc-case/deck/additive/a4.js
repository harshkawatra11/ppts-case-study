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
  primary:     { r: 0.122, g: 0.306, b: 0.604 }, // #5B21E6 — dominant accent
  primaryDeep: { r: 0.043, g: 0.165, b: 0.357 }, // #3A0CA3 — secondary tier
  accent:      { r: 0.961, g: 0.718, b: 0.0 }, // #F5C518 — back-cards, chips
  alert:       { r: 0.843, g: 0.149, b: 0.239 }, // #E5399E — high-attention
  tint:        { r: 0.863, g: 0.902, b: 0.961 }, // #C4B5FD — lightest tier
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



// A4 authored addition. Kit sections A-C above copied verbatim except token RGB values.
await loadDeckFonts();
const slide = await figma.getNodeByIdAsync('__SLIDE_A4__');
if (!slide || !('children' in slide)) throw new Error('A4 slide missing');
for (const n of [...slide.children]) if (n.name.startsWith('ADD:A4:')) n.remove();
const prior = new Set(slide.findAll().map(n=>n.id));
const PREFIX='ADD:A4:';
const named=(n,key)=>{n.name=PREFIX+key;return n;};
function tx(p,key,text,x,y,w,size=22,color=C.ink,bold=false){
  const t=named(addText(p,bold?'Poppins':'Inter',bold?'Bold':'Semi Bold',size,color,text,x,y,w,10,'LEFT',undefined,true),key);
  t.lineHeight={unit:'PIXELS',value:size===22?25:Math.ceil(size*1.19)};
  return t;
}
function panel(key,x,y,w,h,title){
  const p=named(addFrame(slide,x,y,w,h,C.white,C.ink,2.5,PREFIX+key),key);
  named(addRect(p,0,0,w,40,C.primaryDeep,C.ink,2),key+':header');
  tx(p,key+':title',title,14,5,w-28,24,C.white,true);
  return p;
}
// All generated ribbon nodes are named after construction below for safe reruns.
buildRibbon(slide,3,['A1','A2','A3','A4'],[390,390,390,390],64,40,60);
sectionChip(slide,'A4 | OPERATING & CLAIMS CONTROLS',600,64,122);
tx(slide,'headline','Three claims need proof; weekly warnings protect the plan',64,201,1788,44,C.primaryDeep,true);
tx(slide,'qualification','Proposed controls and owners. Compliance is conditional; no tests, approvals or service gains are claimed as completed.',64,264,1792,22);
const claims=panel('claims',64,310,1088,350,'Claims and proof | proposed owners and release stops');
const cols=[210,360,150,340], labels=['Claim / refusal','Evidence required','Owner','Stop / correction'];
let cx=14;
for(let j=0;j<4;j++){named(addRect(claims,cx,43,cols[j],30,C.tint,C.ink,2),'claims:header-cell:'+j);tx(claims,'claims:column:'+j,labels[j],cx+7,45,cols[j]-14,22,C.ink,true);cx+=cols[j];}
const claimRows=[
 ['Tikau Report','Own photos, lab reading,\nIMEI and wipe certificate','Lab +\nproduct','Hold phone if record\nis missing or mismatched'],
 ['Battery ≥85%','Own-lab release reading;\nreplacement record','Lab','Hold below threshold;\nno runtime guarantee'],
 ['12-month\nwarranty','Approved terms and\naccessible claim route','Service','Hold unsupported term;\nno instant-repair claim'],
 ['REFUSE:\nLike new','Refurbished wording\nrequired on every listing','Commerce','Remove prohibited\ncondition wording'],
 ['REFUSE:\nGenuine battery','Replacements are\ncompatible, not brand-made','Growth','Use compatible wording;\nreject brand-parts claim']
];
claimRows.forEach((row,i)=>{let x=14;row.forEach((s,j)=>{named(addRect(claims,x,73+i*50,cols[j],50,i%2?C.surfaceAlt:C.white,C.ink,2),'claims:cell:'+i+':'+j);tx(claims,'claims:row:'+i+':col:'+j,s,x+7,73+i*50,cols[j]-14,22,j===0&&i>2?C.alert:C.ink);x+=cols[j];});});
tx(claims,'claims:conditional','Also: comparisons, true prices/stock, verified reviews and ad labels. Full matrix: research §28.',14,324,1060,22);
const weekly=panel('weekly',1176,310,680,350,'Weekly definitions | proposed conventions');
const metrics=[
 ['Deliveries ~1,923/wk; zero ~1,838','All-channel deliveries; month ÷ 4.33 weeks','Growth + Ops: 2 weeks below ~1,838, reforecast'],
 ['Returns ~4.5%; warn 5.5%','7-day returns / same mature cohort deliveries','Service lead: exclude immature; board max 6.0%'],
 ['Good swaps 40%; warn 50%; zero ~55%','Good needing swap / Good tested in same batch','Lab lead: audit lots; rerun delivered-cost model']
];
metrics.forEach((lines,i)=>{named(addRect(weekly,12,43+i*91,656,90,i%2?C.surfaceAlt:C.white,C.ink,2),'weekly:metric:'+i);lines.forEach((s,k)=>tx(weekly,'weekly:metric:'+i+':line:'+k,s,20,47+i*91+k*26,640,22,k===0?C.primaryDeep:C.ink,k===0));});
tx(weekly,'weekly:boundary','Zero points hold other base inputs fixed. T27 / A13.',14,319,652,22);
const service=panel('service',64,684,1088,348,'Service-control sequence | proposed, with phone-level release gates');
const steps=[
 ['1 Intake','Link identity + IMEI;\nbar lost/stolen units'],
 ['2 Measurement','Own-lab battery test;\nreplace if required'],
 ['3 Report / listing','Link photos + wipe;\nmatch claim to device'],
 ['4 Sale','Say refurbished; show\nterms + claim route'],
 ['5 Repair','Record claim stage,\nage and repeat visit'],
 ['6 Feedback','Trace issue to cohort;\ncorrect cause + copy']
];
steps.forEach((s,i)=>{const col=i<3?i:5-i, row=i<3?0:1, x=14+col*354,y=52+row*108;const p=named(addFrame(service,x,y,336,98,i<3?C.tint:C.surfaceAlt,C.ink,2),'service:step:'+i);tx(p,'service:step:'+i+':title',s[0],10,6,316,22,C.primaryDeep,true);tx(p,'service:step:'+i+':body',s[1],10,36,316,22);});
// Native connector wires; down at right, then right-to-left for feedback row.
[[350,52+49,368,52+49],[704,52+49,722,52+49],[350,160+49,368,160+49],[704,160+49,722,160+49]].forEach((v,i)=>named(addRect(service,v[0],v[1],v[2]-v[0],3,C.ink,C.ink,1),'service:wire:'+i));
named(addRect(service,1036,150,3,10,C.ink,C.ink,1),'service:wire:down');
tx(service,'service:hold','Missing proof, failed wipe or barred IMEI: stop the sale. No new repair-time target.',14,267,1060,22);
tx(service,'service:selection','Tested Good share must represent delivered Good cost; reconcile held versus delivered phones.',14,298,1060,22);
const risks=panel('risks',1176,684,680,348,'Risk → paired response | proposed');
const riskLines=[
 'Shift delay → rerun start timing [T25]',
 'Good swap cost → audit lot + reforecast [T27]',
 'Weak return cut → diagnose mature cohorts [T27]',
 'Lab proof mismatch → hold unit claim [E5a]',
 'Wipe / IMEI failure → stop affected sale [E5f]',
 'Repair backlog → inspect stages + repeat visits [E4d]'
];
riskLines.forEach((s,i)=>{named(addRect(risks,12,43+i*36,656,36,i%2?C.surfaceAlt:C.white,C.ink,2),'risks:cell:'+i);tx(risks,'risks:item:'+i,s,19,47+i*36,642,22);});
tx(risks,'risks:index','Case: E5a-f; E6B1/B2/SH; D2; F16.\nModel: T24/25/27. Research: §§28/29/32.\nFull 12-risk register: §32; no observed outcomes.',14,267,652,22);
const footer='Source: Case Exhibit 5/6, D2, FAQ16 | Model T24/T25/T27 (9b3628d94d) | Research §§28/29/32 | Proposed controls';
const ft=named(addText(slide,'Inter','Semi Bold',14,C.primary,footer,64,1050,1792,22,'RIGHT','CENTER',false),'Source:footer');
// Every created node receives a stable semantic ownership prefix.
const created=slide.findAll().filter(n=>!prior.has(n.id));
for(const n of created) if(n.type==='TEXT' && ['A1','A2','A3','A4'].includes(n.characters)) n.lineHeight={unit:'PIXELS',value:28};
let seq=0;
for(const n of created){if(!n.name.startsWith(PREFIX))n.name=PREFIX+'structure:'+String(++seq).padStart(3,'0');if('cornerRadius' in n)n.cornerRadius=0;}
const issues=[];
for(const n of created){if(n.type==='TEXT'&&n.fontSize<22&&!n.name.includes('Source:'))issues.push({type:'font-floor',id:n.id});if(n.type==='TEXT'&&n.parent!==slide){if(n.y+n.height>n.parent.height+1)issues.push({type:'textClip',id:n.id,name:n.name,height:n.height,parent:n.parent.name});}}
return {slideId:slide.id,created:created.map(n=>({id:n.id,name:n.name,type:n.type,bounds:n.absoluteBoundingBox,local:{x:n.x,y:n.y,width:n.width,height:n.height}})),issues};
