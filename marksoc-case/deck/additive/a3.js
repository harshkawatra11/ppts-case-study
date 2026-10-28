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
  accent:      { r: 0.961, g: 0.718, b: 0 }, // #F5C518 — back-cards, chips
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




await loadDeckFonts();
const slide = await figma.getNodeByIdAsync('__SLIDE_A3__');
if (!slide || !('children' in slide)) throw new Error('A3 slide missing');
const PREFIX='ADD:A3:';
for (const n of [...slide.children]) if(n.name.startsWith(PREFIX)) n.remove();
const originalIDs=new Set(slide.findAll(()=>true).map(n=>n.id));
const DATA={"feasible":[["B1+B2 / Feb","58","+5.6","−42.9","4.5%"],["B1+B2 / Mar","49","+5.6","−57.2","4.5%"],["B1+C / Feb","68","+1.9","−69.0","5.6%"],["B1+C / Mar","59","+1.9","−76.8","5.6%"],["B1+B2+C / none","75","+3.4","−86.8","4.5%"]],"rationing":[["B1+B2 / Feb","8,398","96.6%","100.0%","8,328"],["B1+B2 / none","8,398","96.6%","86.5%","7,200"],["A / none","9,500","100.0%","75.8%","7,200"],["B1+B2+C / Feb","8,938","100.0%","100.0%","8,938"]],"shift":[["Feb","+5.6","+5.6","−42.9"],["Mar","−8.6","+5.6","−57.2"],["None","−8.6","−8.6","−71.4"]],"heat":[{"v":-3.7742173599999944,"display":"−3.8"},{"v":-7.219417359999994,"display":"−7.2"},{"v":-8.964030400083487,"display":"−9.0"},{"v":-10.664617359999994,"display":"−10.7"},{"v":2.842170943040401e-14,"display":"0.0"},{"v":-3.525353311249688,"display":"−3.5"},{"v":-5.310555145020658,"display":"−5.3"},{"v":-7.050706622499405,"display":"−7.1"},{"v":5.604998083290127,"display":"+5.6"},{"v":1.884182083290142,"display":"+1.9"},{"v":0.0,"display":"0.0"},{"v":-1.8366339167098715,"display":"−1.8"},{"v":7.601493081690137,"display":"+7.6"},{"v":3.773493081690134,"display":"+3.8"},{"v":1.8350341482640715,"display":"+1.8"},{"v":-0.05450691830984056,"display":"−0.1"}],"axes":{"combined_order_uplift":["8%","10.51%","16.64%","20%"],"good_battery_swap_share":["40%","50%","55.06%","60%"]}};
function label(parent,name,text,x,y,w,h=30,size=22,color=C.ink,style='Semi Bold') {
 const n=addText(parent,size>=24?'Poppins':'Inter',style,size,color,text,x,y,w,h,'LEFT','CENTER',false); n.name=PREFIX+name; return n;
}
function panel(name,x,y,w,h,title) {
 const p=addFrame(slide,x,y,w,h,C.white,C.ink,2.5,PREFIX+name);
 const rail=addRect(p,0,0,w,47,C.primaryDeep,C.ink,2); rail.name=PREFIX+name+':rail';
 label(p,name+':title',title,16,4,w-32,39,24,C.white,'Bold'); return p;
}
function tableName(table,name){
 table.name=PREFIX+name+':table'; let k=0;
 for(const n of table.findAll(()=>true)) n.name=PREFIX+name+':table:'+k++;
}
// All stock-kit ribbon/chip children are named before any further mutations.
let before=new Set(slide.children.map(n=>n.id));
buildRibbon(slide,2,['A1','A2','A3','A4'],[210,210,210,210],64,40,60);
let k=0; for(const n of slide.children) if(!before.has(n.id)){n.name=PREFIX+'ribbon:'+k++; let j=0; if('findAll' in n) for(const c of n.findAll(()=>true)) c.name=n.name+':'+j++;}
before=new Set(slide.children.map(n=>n.id)); sectionChip(slide,'APPENDIX 3 | MODEL DEFENCE',590,64,122);
k=0;for(const n of slide.children)if(!before.has(n.id)){n.name=PREFIX+'chip:'+k++;let j=0;if('findAll' in n)for(const c of n.findAll(()=>true))c.name=n.name+':'+j++;}
label(slide,'headline','February capacity gives the strongest feasible Q1 result',64,197,1790,68,44,C.primaryDeep,'Bold');
label(slide,'subtitle','Case-only model | Money in ₹ lakh | March volumes after sequential rationing',64,268,1790,30,22,C.ink);
const p1=panel('feasible',64,310,880,340,'Feasible plans | conditional on claims controls');
tableName(addTable(p1,16,56,[300,122,134,134,158],['Plan / shift','Growth','Mar E','Q1 E','Returns'],DATA.feasible,{cellSize:22,headerH:44,rowH:41}),'feasible');
label(p1,'feasible:note','E = EBITDA; all five pass the numerical screen.',16,307,848,28);
const p2=panel('sensitivity',968,310,888,340,'Two-input sensitivity | March EBITDA, ₹ lakh');
label(p2,'sensitivity:definition','Rows: combined uplift | Columns: Good battery swaps',16,51,856,28);
const gridX=16,gridY=86,widths=[180,169,169,169,169],rh=40;
let px=gridX;
for(let c=0;c<5;c++){
 const r=addRect(p2,px,gridY,widths[c],rh,C.tint,C.ink,2);r.name=PREFIX+'sensitivity:head:'+c;
 label(p2,'sensitivity:headText:'+c,c===0?'Uplift / swap':DATA.axes.good_battery_swap_share[c-1],px+12,gridY,widths[c]-24,rh,22,C.ink,'Bold');px+=widths[c];
}
for(let r=0;r<4;r++){
 const y=gridY+rh*(r+1); const bg=addRect(p2,gridX,y,widths[0],rh,C.tint,C.ink,2); bg.name=PREFIX+'sensitivity:row:'+r;
 label(p2,'sensitivity:rowText:'+r,DATA.axes.combined_order_uplift[r],gridX+12,y,widths[0]-24,rh,22,C.ink,'Bold');
 for(let c=0;c<4;c++){
  const i=r*4+c,cell=DATA.heat[i],x=gridX+widths[0]+169*c;
  const fill=cell.v>0.00001?C.primary:cell.v< -0.00001?C.alert:C.accent;
  const rect=addRect(p2,x,y,169,rh,fill,C.ink,2);rect.name=PREFIX+'sensitivity:cell:'+i;
  label(p2,'sensitivity:value:'+i,cell.display,x+12,y,145,rh,22,Math.abs(cell.v)<0.00001?C.ink:C.white,'Bold');
 }
}
label(p2,'sensitivity:zero','Gold = zero boundary; blue = profit; red = loss.',16,294,856,28);
const p3=panel('rationing',64,674,880,358,'Ordered rationing | selected March plans');
tableName(addTable(p3,16,58,[292,156,126,126,148],['Plan / shift','Demand','S factor','Lab','Sold'],DATA.rationing,{cellSize:22,headerH:46,rowH:44}),'rationing');
label(p3,'rationing:sequence','Demand → Superb supply → total lab → delivered phones',16,291,848,28);
label(p3,'rationing:factor','Factors retain orders proportionately; no demand carries over.',16,323,848,28);
const p4=panel('timing',968,674,888,358,'Third-shift timing | B1+B2 throughout');
tableName(addTable(p4,16,58,[194,220,220,222],['Shift','Feb E','Mar E','Q1 E'],DATA.shift,{cellSize:22,headerH:44,rowH:42}),'timing');
label(p4,'timing:objective','Team objective: highest Q1 EBITDA among feasible plans.',16,238,856,28);
label(p4,'timing:rounding','Rank on unrounded totals; display money to ₹0.1 lakh.',16,272,856,28);
label(p4,'timing:rounding2','Phone totals are rounded expectations; factors shown as %.',16,306,856,28);
const src=label(slide,'Source','Source: Case E3/E4b/E5/E6 | T22-T25 | Independent audit | Model 9b3628d94d',64,1048,1792,24,14,C.primary);
src.textAlignHorizontal='RIGHT';
const created=slide.findAll(n=>!originalIDs.has(n.id));
let index=0;
for(const n of created){ if(!n.name.startsWith(PREFIX)) n.name=PREFIX+'native:'+index++; if('cornerRadius' in n)n.cornerRadius=0; }
const issues=[];
for(const n of created){
 if(n.type==='TEXT' && n.fontSize<22 && n.id!==src.id)issues.push({id:n.id,reason:'font floor'});
 if(n.type==='TEXT' && n.hasMissingFont)issues.push({id:n.id,reason:'missing font'});
}
return {slideId:slide.id,modelHash:'9b3628d94d',createdIDs:created.map(n=>n.id),bounds:created.map(n=>({id:n.id,name:n.name,x:n.x,y:n.y,width:n.width,height:n.height,absolute:n.absoluteBoundingBox})),issues};
