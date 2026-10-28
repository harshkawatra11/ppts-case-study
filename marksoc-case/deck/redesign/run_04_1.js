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
  primary:{r:0.122,g:0.306,b:0.604}, primaryDeep:{r:0.043,g:0.165,b:0.357},
  accent:{r:0.961,g:0.718,b:0.0}, alert:{r:0.843,g:0.149,b:0.239},
  tint:{r:0.863,g:0.902,b:0.961}, alertTint:{r:0.984,g:0.878,b:0.890},
  blue:{r:0.184,g:0.435,b:0.839}, blueDeep:{r:0.071,g:0.231,b:0.478}, blueTint:{r:0.890,g:0.925,b:0.980},
  good:{r:0.118,g:0.541,b:0.298}, goodTint:{r:0.867,g:0.949,b:0.898}, accentTint:{r:1,g:0.957,b:0.820},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
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


// ── §D. QA SCRIPTS ───────────────────────────────────────────────────────────
// Paste each as its OWN separate use_figma call (read/write, not part of a
// content-building script). Run the batch validator after every build batch;
// run the full sweeps once at the very end.

// D1. BATCH VALIDATOR — run after every 2-3 slide batch. Flags real bugs;
// ignore flagged pairs that are ribbon punch-holes or layered-card back/front
// (those overlaps are intentional, see CLAUDE.md §7.8).
/*
const slideIds = ["SLIDE_ID_1", "SLIDE_ID_2"]; // fill in
const OVERLAP_PX = 4, OVERFLOW_PX = 1, SLIDE_W = 1920, SLIDE_H = 1080;
const issues = [];
const slides = await Promise.all(slideIds.map(id => figma.getNodeByIdAsync(id)));
for (const slide of slides) {
  const children = slide.children.map(c => ({ id:c.id, name:c.name, type:c.type, x:c.x, y:c.y, w:c.width, h:c.height }));
  for (const c of children) {
    if (c.type !== "FRAME") continue;
    const node = await figma.getNodeByIdAsync(c.id);
    const texts = node.findAllWithCriteria({ types: ["TEXT"] });
    for (const t of texts) {
      const abs = t.absoluteBoundingBox, pAbs = node.absoluteBoundingBox;
      if (!abs || !pAbs) continue;
      if (abs.x + abs.width > pAbs.x + pAbs.width + OVERFLOW_PX || abs.y + abs.height > pAbs.y + pAbs.height + OVERFLOW_PX)
        issues.push({ slide: slide.name, type: "textClip", node: t.name, chars: t.characters.slice(0,30), parent: c.name });
    }
  }
  for (const c of children) {
    if (c.x + c.w < -OVERLAP_PX || c.y + c.h < -OVERLAP_PX || c.x > SLIDE_W + OVERLAP_PX || c.y > SLIDE_H + OVERLAP_PX)
      issues.push({ slide: slide.name, type: "outOfBounds", node: c.name, x:c.x, y:c.y });
  }
}
return { clean: issues.length === 0, issues };
*/

// D2. RADIUS-ZERO SWEEP — run once at the end across all slide IDs.
/*
const slideIds = ["SLIDE_ID_1", "..."]; // all slides in the deck
const slides = await Promise.all(slideIds.map(id => figma.getNodeByIdAsync(id)));
let radiusFixed = 0;
for (const slide of slides) {
  const shapes = slide.findAllWithCriteria({ types: ["RECTANGLE","FRAME","ELLIPSE"] });
  for (const n of shapes) {
    try { if (n.cornerRadius !== undefined && n.cornerRadius !== figma.mixed && n.cornerRadius !== 0) { n.cornerRadius = 0; radiusFixed++; } } catch(e) {}
  }
}
return { radiusFixed };
*/

// D3. FONT-FLOOR SWEEP — run once at the end. Reports any content text below
// 22pt; the only legitimate exemption is the source line (matched by prefix).
/*
const slideIds = ["SLIDE_ID_1", "..."];
const slides = await Promise.all(slideIds.map(id => figma.getNodeByIdAsync(id)));
const smallText = [];
for (const slide of slides) {
  const texts = slide.findAllWithCriteria({ types: ["TEXT"] });
  for (const t of texts) {
    let minSize = null;
    try {
      if (t.fontSize !== figma.mixed) minSize = t.fontSize;
      else { const segs = t.getStyledTextSegments(["fontSize"]); minSize = Math.min(...segs.map(s => s.fontSize)); }
    } catch(e) { continue; }
    const isExempt = t.characters.startsWith("Source:"); // extend with other legit exemptions
    if (minSize < 22 && !isExempt) smallText.push({ slide: slide.name, chars: t.characters.slice(0,40), size: minSize });
  }
}
return { smallTextCount: smallText.length, smallText };
*/

await loadDeckFonts();
// Native chart/table primitives; base geometry comes from figma-deck-kit.js.
const R={navy:C.primaryDeep,blue:C.primary,gold:C.accent,red:C.alert,green:{r:.118,g:.541,b:.298},ltgreen:{r:.867,g:.949,b:.898},ltred:{r:.984,g:.878,b:.890},ltgold:{r:1,g:.957,b:.820}};
function tx(p,x,y,w,s,o={}){const z=o.size||22;const t=addText(p,o.display?'Poppins':'Inter',o.style||(o.display?'Bold':'Semi Bold'),z,o.color||C.ink,String(s),x,y,w,10,o.align||'LEFT',undefined,true);t.name=o.name||'CONTENT';t.lineHeight={unit:'PIXELS',value:Math.round(z*(o.leading||1.24))};return t;}
function label(p,x,y,w,s,c=R.blue){return tx(p,x,y,w,s,{display:true,size:24,color:c});}
function box(p,x,y,w,h,title,o={}){const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,2,'PANEL: '+title);if(o.dark){addRect(f,0,0,w,43,o.dark,C.ink,1.5);label(f,14,5,w-28,title,C.white);}else{label(f,14,5,w-28,title);addRect(f,14,39,w-28,2,C.ink);}return f;}
function tint(p,x,y,w,h,s,o={}){const f=addFrame(p,x,y,w,h,o.fill||R.ltgold,C.ink,1.5,'CALLOUT');tx(f,12,8,w-24,s,{color:o.color||C.ink,style:'Bold',size:o.size||22});return f;}
function table(p,x,y,cw,heads,rows,o={}){const hh=o.hh||36,rh=o.rh||36,w=cw.reduce((a,b)=>a+b,0);const f=addFrame(p,x,y,w,hh+rh*rows.length,C.white,C.ink,2,'TABLE: '+(o.name||heads[0]));
 let yy=0;[heads,...rows].forEach((r,i)=>{let xx=0;const H=i?rh:hh;for(let j=0;j<cw.length;j++){let v=r[j]===undefined?'':r[j];v=typeof v==='object'?v:{t:String(v)};const cell=addFrame(f,xx,yy,cw[j],H,v.bg||(i===0?R.navy:(o.fills&&o.fills[i-1])||(i%2?C.white:C.surfaceAlt)),C.ink,1,'CELL');const t=tx(cell,8,0,cw[j]-16,v.t,{style:(i===0||j===0||v.bold)?'Bold':'Semi Bold',color:v.fg||(i===0?C.white:C.ink),align:(o.align&&o.align[j])||'LEFT'});t.y=Math.max(1,(H-t.height)/2);xx+=cw[j];}yy+=H;});return f;}
function line(p,pts,c=R.blue,weight=3){const minX=Math.min(...pts.map(a=>a[0])),minY=Math.min(...pts.map(a=>a[1]));const maxX=Math.max(...pts.map(a=>a[0])),maxY=Math.max(...pts.map(a=>a[1]));const v=figma.createVector();p.appendChild(v);v.vectorPaths=[{windingRule:'NONZERO',data:pts.map((a,i)=>(i?'L':'M')+' '+(a[0]-minX)+' '+(a[1]-minY)).join(' ')}];v.x=minX;v.y=minY;v.fills=[];v.strokes=[{type:'SOLID',color:c}];v.strokeWeight=weight;return v;}
function elbow(p,x1,y1,x2,y2,c=C.ink){const mx=(x1+x2)/2;addRect(p,Math.min(x1,mx),y1,Math.max(1,Math.abs(mx-x1)),2,c);addRect(p,mx,Math.min(y1,y2),2,Math.max(1,Math.abs(y2-y1)),c);addRect(p,Math.min(mx,x2),y2,Math.max(1,Math.abs(x2-mx)),2,c);}
function bars(p,x,y,w,rows,o={}){const lw=o.lw||210,rh=o.rh||44,min=o.min||0,max=o.max||Math.max(...rows.map(r=>r.v)),vw=o.vw||90,span=w-lw-vw;const X=v=>x+lw+span*(v-min)/(max-min);addRect(p,X(0),y,2,rh*rows.length-10,C.ink);rows.forEach((r,i)=>{const yy=y+i*rh;tx(p,x,yy+3,lw-10,r.l,{style:'Bold'});const v=r.v,a=X(Math.min(v,0)),b=X(Math.max(v,0));addRect(p,a,yy+4,Math.max(2,b-a),26,r.c||(v<0?R.red:R.blue),C.ink,1.5);tx(p,x+w-vw+8,yy+3,vw-8,r.t===undefined?String(v):r.t,{style:'Bold',color:v<0?R.red:R.navy});});return {X};}
function waterfall(p,x,y,w,h,items,o={}){const max=o.max||190,min=o.min||-60,pitch=w/items.length,bw=Math.min(62,pitch*.59),bottom=y+h-64,top=y+34,Y=v=>bottom-(bottom-top)*(v-min)/(max-min);addRect(p,x,Y(0),w,2,C.ink);let run=0;items.forEach((r,i)=>{const total=i===0||i===items.length-1;const a=total?0:run,b=total?r[1]:run+r[1];run=b;const xx=x+i*pitch+(pitch-bw)/2,yy=Math.min(Y(a),Y(b));addRect(p,xx,yy,bw,Math.max(3,Math.abs(Y(a)-Y(b))),total?R.navy:(r[1]>0?R.green:R.red),C.ink,1.5);tx(p,x+i*pitch,yy-32,pitch,((r[1]<0?'−':(total?'':'+'))+Math.abs(r[1]).toFixed(o.dp===undefined?1:o.dp)),{align:'CENTER',style:'Bold',color:r[1]<0?R.red:R.navy});if(i<items.length-1)addRect(p,xx+bw,Y(b),pitch-bw,1.5,C.ink);tx(p,x+i*pitch+2,bottom+16,pitch-4,r[0],{align:'CENTER',style:'Bold'});});}
function donutR(p,cx,cy,d,segments,center,sub){let a=-Math.PI/2,total=segments.reduce((s,v)=>s+v.v,0);for(const seg of segments){const b=a+2*Math.PI*seg.v/total;const e=addEllipse(p,cx-d/2,cy-d/2,d,d,seg.c,C.ink,1.5);e.arcData={startingAngle:a,endingAngle:b,innerRadius:.66};a=b;}tx(p,cx-d/2,cy-30,d,center,{display:true,size:38,align:'CENTER',color:R.navy});if(sub)tx(p,cx-d/2+15,cy+15,d-30,sub,{align:'CENTER',style:'Bold'});}
function rail(p,x,y,w,h,tag){addRect(p,x,y,8,h,R.blue,C.ink,1);const f=addFrame(p,x+16,y,w-16,36,R.navy,C.ink,1.5,'RAIL');tx(f,10,3,w-36,tag,{display:true,color:C.white});}
function bullet(p,x,y,w,plan,trigger,max,o={}){const span=w-100;addRect(p,x,y+14,span,14,C.tint,C.ink,1);addRect(p,x,y+14,span*plan/max,14,o.color||R.blue,C.ink,1);const z=x+span*trigger/max;addRect(p,z,y+5,3,32,R.red);tx(p,x+span+10,y,w-span-10,o.label||String(plan),{style:'Bold',color:R.navy});}
async function resetBody(id,title,source){const s=await figma.getNodeByIdAsync(id);for(const n of [...s.children])if(n.name!=='SOURCE'&&n.y>=300)n.remove();const t=s.children.find(n=>n.name==='HEADLINE');t.characters=title;t.fontSize=40;t.textAutoResize='HEIGHT';t.lineHeight={unit:'PIXELS',value:50};if(source){const q=s.children.find(n=>n.name==='SOURCE');q.characters=source;q.fontSize=14;}return s;}
function stats(s){return {id:s.id,nodes:s.findAll(()=>true).length,texts:s.findAllWithCriteria({types:['TEXT']}).length};}

const V = {};
const s=await resetBody('3:6','Proof is the constraint: 91.6% leave the phone page, while the full lab cannot absorb demand without a third shift','Source: case Exhibits 1, 4, 5 and 6 | team model 9b3628d94d, T7 to T9 | visitor survey: multiple responses allowed | service blueprint and release gates are proposed');
const a=box(s,64,310,400,366,'THE CONVERSION LEAK',{dark:R.navy});
[['9,60,000 visits',368],['3,10,000 phone views',330],['26,000 add to cart',290],['4,200 orders',250]].forEach((r,i)=>{const f=addFrame(a,16+(368-r[1])/2,55+i*39,r[1],32,i===3?R.gold:(i%2?C.tint:R.blue),C.ink,1.5,'FUNNEL');tx(f,5,2,r[1]-10,r[0],{style:'Bold',align:'CENTER',color:i===0?C.white:C.ink});});
table(a,16,226,[194,174],['Stage','Conversion'],[['Visit → phone','32.3%'],['Phone → cart','8.4%'],['Cart → order','16.2%']],{rh:31,hh:31});
const b=box(s,484,310,844,366,'BARRIER → PROOF → COMMERCIAL RESPONSE',{dark:R.blue});
table(b,14,54,[230,78,270,238],['Barrier','%','Proof / response','Lever / channel'],[['Battery may fail','46','Own lab reading','B1 + B2'],['Condition unclear','41','Photos + report','B1'],['Warranty too short','31','12-month cover','B2'],['Want to see it','28','Battery demo','Stores'],['Price vs shop','24','Value, not a cut','Refuse A'],['Stolen / locked','22','IMEI check','B1'],['Previous data','12','Wipe certificate','B1']],{hh:42,rh:36});
const c=box(s,1348,310,508,366,'THE PHYSICAL BOTTLENECK');
label(c,14,57,480,'7,200 / 7,200 SELLABLE');addRect(c,14,100,480,25,R.red,C.ink,1.5);tx(c,14,134,480,'Lab output is fully utilised.',{style:'Bold'});
tx(c,14,174,480,'Superb supply: 1,775 / 2,000',{style:'Bold'});addRect(c,14,211,480,17,C.tint,C.ink,1);addRect(c,14,211,480*1775/2000,17,R.gold,C.ink,1);
tx(c,14,246,480,'22 / 200 Good phones fail 80%',{style:'Bold',color:R.red});
for(let i=0;i<200;i++)addEllipse(c,15+(i%25)*18,291+Math.floor(i/25)*8,6,6,i<22?R.red:C.tint,C.ink,.5);
const d=box(s,64,694,1792,338,'SERVICE BLUEPRINT: MAKE THE PROMISE TRUE BEFORE EVERY SALE',{dark:R.navy});
table(d,14,54,[188,296,296,296,296,392],['Control layer','1 INTAKE','2 TEST + FIX','3 LIST + SELL','4 SERVICE','5 LEARN'],[
 ['Customer touch','Trader supplies the phone','Buyer fears battery and condition','Report before price; store demo','12-month warranty; 7-day returns','Weekly review by batch and channel'],
 ['Evidence held','Record grade, source and IMEI','Own battery read; photos; wipe proof','Reading and real condition report','Repair log; return reason; repeat visit','Orders, returns and Good battery swaps'],
 ['Release gate','Identity and supply check','85% floor or replace the battery','Only claims true for that phone','Named repair owner and closure','Intervene at the thresholds on Signals']
],{hh:40,rh:78});
return stats(s);
