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



await loadDeckFonts();
Object.assign(C,{primary:{r:.122,g:.306,b:.604},primaryDeep:{r:.043,g:.165,b:.357},accent:{r:.961,g:.718,b:0},alert:{r:.843,g:.149,b:.239},tint:{r:.863,g:.902,b:.961}});
const changed=[],issues=[];
const edits=[["4:213","B1 ₹15 + B2 ₹25; shift ₹9 in February and March"],["4:221","Conditional screen; highest Q1 EBITDA"],["4:338","Test 4 requires all Exhibit 5 controls; A4."],["4:375","Proof required; A4"],["4:248","Q1: −₹0.5 lakh vs no change; A3."],["4:581","MegaKart’s ₹0 dashboard hides a 12% fee: ₹1,692/order; ₹231 remains. Working: A1."],["4:744","Trust and a full lab constrain growth: 91.6% leave without adding to cart; battery concern exceeds price concern"],["4:816","Multi-response: shares overlap. Bar tags map concerns to options."],["4:856","Stated interest: battery 85% 44%; 5% price cut 22%. A cuts Fair by 3%, a different offer."],["4:869","SPOT CHECK: 22 OF 200 GOOD"],["4:1071","22/200 were below listed 80%. Scaling 11% to 3,190 Good gives ~351/month, indicative only (A14). Own-lab proof: A4."],["4:1159","Family buyers fit the Good-phone promise: no Good supply cap, with contribution rising from ₹2,524 to ₹2,699"],["4:1238","Score = six equal 1-5 judgements; max 30. Sensitivity: A3."],["4:1239","Family 24; flagship 22. Double size or margin weight: tie 27 (T26)."],["4:1240","Superb cap 2,000; ~70 orders rationed. No segment allocation assumed."],["4:1259","Visitor data"],["4:1263","Visitor data"],["4:1267","Channel plan"],["4:1939","Test 4: controls\nrequired (A4)"],["4:2064","Launch the Tikau Report before price, with claims released only after proof"],["4:2308","Track deliveries, completed return cohorts and Good battery swaps; investigate warnings before March"],["4:2315","All-channel deliveries\nOwner: Growth"],["4:2326","Closed 7-day cohort\nOwner: Service"],["4:2337","Good swaps / tested\nOwner: Lab"],["4:2328","Warning: cohort returns ≥5.5%"],["4:2339","Warning: Good swaps ≥50%"],["4:2318","EBITDA zero: ~1,838/week. Investigate early; A4."],["4:2329","5.5% warns; 6.0% is the board limit, not profit zero."],["4:2340","At 50%: +₹1.9 lakh; EBITDA zero ~55%."],["4:2320","Report demos; review delivery and channel gaps."],["4:2331","Audit closed cohorts; retest affected batches."],["4:2342","Retest batch; review mix; rerun forecast."],["4:2440","C: ₹35 lakh setup; ~1.75-month incremental recovery. April −₹13.6 lakh after setup."],["4:2853","MARCH BOUNDARIES"],["4:2887","Returns: 74% remaining reaches the 6% board limit; not EBITDA zero."],["4:3264","Good swaps 40%; warn 50%; EBITDA zero ~55%"],["4:2961","Audited model and defensive working: A1-A4. Supporting research is a separate deliverable."]];
for(const [id,value] of edits){const n=await figma.getNodeByIdAsync(id); if(!n||n.type!=='TEXT'){issues.push({id,error:'missing text'});continue;} for(const s of n.getStyledTextSegments(['fontName']))await figma.loadFontAsync(s.fontName); n.characters=value; n.fontSize=Math.max(typeof n.fontSize==='number'?n.fontSize:22,22); n.textAutoResize='HEIGHT'; changed.push(id); if(['4:2328','4:2339','4:2320','4:2331','4:2342'].includes(id))n.parent.resize(n.parent.width,Math.max(n.parent.height,n.y+n.height+4)); if(n.y+n.height>n.parent.height+2)issues.push({id,overflow:n.y+n.height-n.parent.height,text:value});}
const logoSlots=[['4:18','marksoc-dtu',796/604],['4:20','cracknontech',412/289],['4:22','dtu',300/299],['4:2955','marksoc-dtu',796/604],['4:2957','cracknontech',412/289],['4:2959','dtu',300/299]]; const targets=[];
for(const [id,key,ratio] of logoSlots){const p=await figma.getNodeByIdAsync(id);for(const c of [...p.children])c.remove();p.dashPattern=[];p.name='ADD:LOGO:'+key;const h=Math.min(p.height-6,(p.width-6)/ratio),w=h*ratio;const r=addRect(p,(p.width-w)/2,(p.height-h)/2,w,h,C.white);r.name='ADD:ASSET:'+key;targets.push({nodeId:r.id,key});changed.push(p.id,r.id);}
for(const [id,label] of [['4:113','Sanchar\nSaathi'],['4:115','NCH'],['4:127','Counterpoint'],['4:129','GSMA']]){const p=await figma.getNodeByIdAsync(id);for(const c of [...p.children])c.remove();p.dashPattern=[];p.name='ADD:IDENTIFIER:'+label;const t=addText(p,'Inter','Bold',22,C.ink,label,4,2,p.width-8,p.height-4,'CENTER','CENTER',false);changed.push(p.id,t.id);}
const illustrations=[['4:75','family'],['4:93','shop'],['4:101','creator'],['4:107','lab'],['4:1244','family'],['4:2078','Front'],['4:2080','Back'],['4:2082','Edges'],['4:2084','Screen on']];
for(const [id,kind] of illustrations){const p=await figma.getNodeByIdAsync(id);for(const c of [...p.children])c.remove();p.name='ADD:ILLUSTRATION:'+kind;p.dashPattern=[];const w=p.width,h=p.height;const before=new Set(p.children.map(c=>c.id));if(kind==='family'){const scale=Math.min(w/150,(h>100?h-36:h)/110);const cx=w/2,cy=(h>100?h-32:h)/2;for(const d of [-1,1]){addEllipse(p,cx+d*28*scale-15*scale,cy-42*scale,30*scale,30*scale,C.tint,C.ink,2);addRect(p,cx+d*28*scale-23*scale,cy-6*scale,46*scale,48*scale,C.tint,C.ink,2);}addRect(p,cx-12*scale,cy+1*scale,24*scale,40*scale,C.primary,C.ink,2);if(h>100)addText(p,'Inter','Semi Bold',22,C.ink,'Illustration',4,h-31,w-8,27,'CENTER','CENTER',true);}else{const label=h>70?kind:'';const ph=Math.min(h-(label?32:10),68),pw=ph*.54;addRect(p,(w-pw)/2,5,pw,ph,C.primaryDeep,C.ink,2);addRect(p,(w-pw)/2+4,10,Math.max(pw-8,5),ph-12,C.tint,C.ink,2);if(label)addText(p,'Inter','Semi Bold',22,C.ink,label,2,h-29,w-4,27,'CENTER','CENTER',true);}for(const c of p.children){c.name='ADD:ILLUSTRATION:'+kind+':'+c.type;changed.push(c.id);}changed.push(p.id);}
const cover=await figma.getNodeByIdAsync('3:2');const illLabel=addText(cover,'Inter','Semi Bold',22,C.ink,'Native illustrations; no customer photographs',64,1010,900,27,'LEFT','CENTER',true);illLabel.name='ADD:ILLUSTRATION:disclosure';changed.push(illLabel.id);
const launch=await figma.getNodeByIdAsync('3:10');for(const t of launch.findAll(n=>n.type==='TEXT')){if(t.characters==='Refurbished, Good grade, 128 GB'){t.characters='Illustrative page | refurbished Good';t.fontSize=22;t.textAutoResize='HEIGHT';changed.push(t.id);}}
const ids=['3:2','3:4','3:5','3:6','3:7','3:8','3:9','3:10','3:11','3:12','3:13','3:14','3:15','3:16'];const names=['Cover','Summary','Economics','Trust','Customer','Options','Plan','Launch','Signals','A1','A2','A3','A4','Thank you'];for(let i=0;i<ids.length;i++){const s=await figma.getNodeByIdAsync(ids[i]);s.name=String(i+1).padStart(2,'0')+' | '+names[i];changed.push(s.id);for(const n of s.findAll(n=>'cornerRadius' in n)){n.cornerRadius=0;}}
return {changed,targets,issues,pageId:figma.currentPage.id};