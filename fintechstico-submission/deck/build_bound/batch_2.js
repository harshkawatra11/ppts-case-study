// ===== FINTECHSTICO PREAMBLE v1 =====
const C = {
  primary:{r:0.851,g:0.373,b:0.055}, orange:{r:1.000,g:0.569,b:0.302}, primaryDeep:{r:0.231,g:0.039,b:0.039},
  accent:{r:0.961,g:0.722,b:0.255}, alert:{r:0.784,g:0.118,b:0.118}, alertTint:{r:0.992,g:0.886,b:0.886},
  rival:{r:0.114,g:0.306,b:0.537}, rivalTint:{r:0.863,g:0.902,b:0.969},
  good:{r:0.071,g:0.502,b:0.361}, goodTint:{r:0.847,g:0.941,b:0.902},
  tint:{r:1.000,g:0.910,b:0.839}, cream:{r:1.000,g:0.933,b:0.859}, ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:1.000,g:0.965,b:0.925}, white:{r:1,g:1,b:1}
};
const HO=[{r:1.000,g:0.945,b:0.902},{r:0.992,g:0.788,b:0.627},{r:0.984,g:0.604,b:0.333},{r:0.851,g:0.373,b:0.055},{r:0.541,g:0.227,b:0.024}];
const HG=[{r:0.918,g:0.965,b:0.941},{r:0.749,g:0.898,b:0.827},{r:0.486,g:0.788,b:0.651},{r:0.180,g:0.620,b:0.431},{r:0.043,g:0.420,b:0.278}];
const HR=[{r:0.992,g:0.886,b:0.886},{r:0.961,g:0.639,b:0.639},{r:0.906,g:0.357,b:0.357},{r:0.784,g:0.118,b:0.118},{r:0.498,g:0.063,b:0.063}];
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},
  {family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const warnings = [];
function addFrame(parent, x, y, w, h, fill, strokeColor, strokeWeight, name) {
  const f = figma.createFrame(); parent.appendChild(f); f.resize(w, h);
  f.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { f.strokes = [{ type: "SOLID", color: strokeColor }]; f.strokeWeight = strokeWeight || 2; }
  f.cornerRadius = 0; f.clipsContent = false; f.x = x; f.y = y; if (name) f.name = name; return f; }
function addRect(parent, x, y, w, h, fill, strokeColor, strokeWeight) {
  const r = figma.createRectangle(); parent.appendChild(r); r.resize(Math.max(w,0.5), Math.max(h,0.5));
  r.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { r.strokes = [{ type: "SOLID", color: strokeColor }]; r.strokeWeight = strokeWeight || 2; }
  r.cornerRadius = 0; r.x = x; r.y = y; return r; }
function addEllipse(parent, x, y, w, h, fill, strokeColor, strokeWeight) {
  const e = figma.createEllipse(); parent.appendChild(e); e.resize(w, h);
  e.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { e.strokes = [{ type: "SOLID", color: strokeColor }]; e.strokeWeight = strokeWeight || 2; }
  e.x = x; e.y = y; return e; }
function addText(parent, family, style, size, color, chars, x, y, w, h, hAlign, vAlign, autoH) {
  const t = figma.createText(); parent.appendChild(t);
  t.fontName = { family, style }; t.fontSize = size; t.characters = chars; t.fills = [{ type: "SOLID", color }];
  if (w !== undefined) { t.resize(w, h || 10); t.textAutoResize = autoH ? "HEIGHT" : "NONE"; }
  if (hAlign) t.textAlignHorizontal = hAlign;
  if (vAlign && !autoH) t.textAlignVertical = vAlign;
  t.x = x; t.y = y; return t; }
function addWireH(parent, x1, x2, y, color, thickness) { thickness = thickness || 2.5;
  return addRect(parent, Math.min(x1, x2), y - thickness / 2, Math.abs(x2 - x1), thickness, color); }
function addWireV(parent, x, y1, y2, color, thickness) { thickness = thickness || 2.5;
  return addRect(parent, x - thickness / 2, Math.min(y1, y2), thickness, Math.abs(y2 - y1), color); }
function addLine(p, x1, y1, x2, y2, color, th, dash) { const v = figma.createVector(); p.appendChild(v);
  const mx = Math.min(x1, x2), my = Math.min(y1, y2);
  v.vectorPaths = [{ windingRule: "NONE", data: "M " + (x1 - mx) + " " + (y1 - my) + " L " + (x2 - mx) + " " + (y2 - my) }];
  v.fills = []; v.strokes = [{ type: "SOLID", color: color || C.ink }]; v.strokeWeight = th || 2.5; v.strokeCap = "NONE";
  if (dash) { try { v.dashPattern = dash; } catch (e) {} }
  v.x = mx; v.y = my; return v; }
function addPoly(p, pts, fill, stroke, sw) { const v = figma.createVector(); p.appendChild(v);
  const mx = Math.min(...pts.map(q => q[0])), my = Math.min(...pts.map(q => q[1]));
  const d = pts.map((q, i) => (i ? "L " : "M ") + (q[0] - mx) + " " + (q[1] - my)).join(" ") + " Z";
  v.vectorPaths = [{ windingRule: "NONZERO", data: d }];
  v.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (stroke) { v.strokes = [{ type: "SOLID", color: stroke }]; v.strokeWeight = sw || 2; } else { v.strokes = []; }
  v.x = mx; v.y = my; return v; }
function addArrow(p, x1, y1, x2, y2, color, th, head) { head = head || 16; color = color || C.ink;
  const a = Math.atan2(y2 - y1, x2 - x1), bx = x2 - head * Math.cos(a), by = y2 - head * Math.sin(a), w = head * 0.55;
  addLine(p, x1, y1, bx, by, color, th || 3);
  return addPoly(p, [[x2, y2], [bx + w * Math.sin(a), by - w * Math.cos(a)], [bx - w * Math.sin(a), by + w * Math.cos(a)]], color); }
function addDashedRow(parent, x, y, totalW, color, dashW, gapW, thickness) {
  dashW = dashW || 16; gapW = gapW || 10; thickness = thickness || 3; let cx = x;
  while (cx < x + totalW) { const w = Math.min(dashW, x + totalW - cx); addRect(parent, cx, y, w, thickness, color); cx += dashW + gapW; } }
function addChip(slide, x, y, w, h, text, frontColor, textColor, size) {
  addRect(slide, x + 5, y + 5, w, h, C.accent, C.ink, 2);
  const f = addFrame(slide, x, y, w, h, frontColor, C.ink, 2, "CHIP: " + text.slice(0, 20));
  addText(f, "Poppins", "Bold", size || 22, textColor, text, 10, 0, w - 20, h, "CENTER", "CENTER"); return f; }
function buildRibbon(slide, active, labels, widths, startX, y, h) {
  const act = Array.isArray(active) ? active : [active];
  startX = startX === undefined ? 64 : startX; y = y === undefined ? 40 : y; h = h === undefined ? 60 : h;
  const gap = 26; let x = startX; const centers = [];
  for (let i = 0; i < labels.length; i++) { const w = widths[i]; const on = act.indexOf(i) >= 0;
    if (on) addRect(slide, x + 8, y + 8, w, h, C.accent, C.ink, 2.5);
    const tag = addFrame(slide, x, y, w, h, on ? C.primary : C.accent, C.ink, 2, "TAG: " + labels[i]);
    addText(tag, "Poppins", "Bold", 24, on ? C.white : C.ink, labels[i], 0, 12, w, 36, "CENTER", "CENTER");
    const holeR = 7, holeY = y + h / 2 - holeR;
    addEllipse(slide, x + 10 - holeR, holeY, holeR * 2, holeR * 2, C.white, C.ink, 2);
    addEllipse(slide, x + w - 10 - holeR, holeY, holeR * 2, holeR * 2, C.white, C.ink, 2);
    centers.push({ x, w, y, h }); x += w + gap; }
  for (let i = 0; i < centers.length - 1; i++) { const a = centers[i], b = centers[i + 1];
    addWireH(slide, a.x + a.w - 10, b.x + 10, a.y + a.h / 2, C.ink, 2.5); }
  return x - gap; }
function sectionChip(slide, text, w, x, y) { return addChip(slide, x === undefined ? 64 : x, y === undefined ? 118 : y, w || 440, 56, text, C.primary, C.white, 22); }
function addTable(parent, x, y, colWidths, headerLabels, rows, opts) {
  opts = opts || {}; const headerFill = opts.headerFill || C.tint; const rowH = opts.rowH || 52; const headerH = opts.headerH || 52; const cellSize = opts.cellSize || 22;
  const align = opts.align || colWidths.map((w, c) => c === 0 ? "LEFT" : (c === colWidths.length - 1 ? "RIGHT" : "LEFT"));
  const tableW = colWidths.reduce((a, w) => a + w, 0); const bodyH = rowH * rows.length; const totalH = headerH + bodyH + (opts.totalRow ? 56 : 0);
  const table = addFrame(parent, x, y, tableW, totalH, C.white, C.ink, 2.5, opts.name || "TABLE: t");
  const header = addFrame(table, 0, 0, tableW, headerH, headerFill, null, 0, "HEAD"); let cx = 0;
  for (let c = 0; c < headerLabels.length; c++) {
    addText(header, "Poppins", "Bold", cellSize, opts.headerText || C.ink, headerLabels[c], cx + 12, 0, colWidths[c] - 20, headerH, align[c], "CENTER"); cx += colWidths[c]; }
  addRect(table, 0, headerH - 1, tableW, 2, C.ink); let ry = headerH;
  for (let r = 0; r < rows.length; r++) { const bg = (opts.rowFills && opts.rowFills[r]) || (r % 2 === 0 ? C.white : C.surfaceAlt);
    const row = addFrame(table, 0, ry, tableW, rowH, bg, null, 0, "ROW"); let cx2 = 0;
    for (let c = 0; c < rows[r].length; c++) {
      const col = (opts.cellColor && opts.cellColor(r, c)) || C.ink;
      const bold = c === 0 || (opts.boldCols && opts.boldCols.indexOf(c) >= 0);
      addText(row, "Inter", bold ? "Bold" : "Semi Bold", cellSize, col, rows[r][c], cx2 + 12, 0, colWidths[c] - 20, rowH, align[c], "CENTER"); cx2 += colWidths[c]; }
    addRect(table, 0, ry - 1, tableW, 1.5, C.ink); ry += rowH; }
  if (opts.totalRow) { const tf = addFrame(table, 0, ry, tableW, 56, opts.totalFill || C.primary, null, 0, "TOTAL");
    addText(tf, "Poppins", "Bold", 22, C.white, opts.totalRow[0], 12, 0, tableW - colWidths[colWidths.length - 1] - 20, 56, "LEFT", "CENTER");
    const lastColStart = colWidths.slice(0, -1).reduce((a, w) => a + w, 0);
    addText(tf, "Poppins", "Bold", 24, C.white, opts.totalRow[1], lastColStart + 12, 0, colWidths[colWidths.length - 1] - 20, 56, "RIGHT", "CENTER"); }
  let vx = 0; for (let c = 0; c < colWidths.length - 1; c++) { vx += colWidths[c]; addRect(table, vx - 1, 0, 1.5, totalH, C.ink); }
  return table; }
// ===== EXTRAS =====
function nm(n, name) { n.name = name; return n; }
function fmtN(v) { const neg = v < 0; let s = String(Math.round(Math.abs(v)));
  if (s.length > 3) { const last = s.slice(-3); let rest = s.slice(0, -3); const parts = [];
    while (rest.length > 2) { parts.unshift(rest.slice(-2)); rest = rest.slice(0, -2); }
    if (rest) parts.unshift(rest); s = parts.join(",") + "," + last; }
  return (neg ? "−" : "") + s; }
function rs(v) { return (v < 0 ? "−₹" : "₹") + fmtN(Math.abs(v)); }          // signed rupees: −₹24, ₹12
function rsp(v) { return (v < 0 ? "−₹" : "+₹") + fmtN(Math.abs(v)); }        // explicit sign: +₹12
function r1(v) { return (v < 0 ? "−₹" : "₹") + Math.abs(v).toFixed(1); }      // one decimal: −₹27.3
function r1p(v) { return (v < 0 ? "−₹" : "+₹") + Math.abs(v).toFixed(1); }    // one decimal, explicit sign: +₹5.7
function n1(v) { return (v < 0 ? "−" : "") + Math.abs(v).toFixed(1); }        // bare one-decimal number: −27.3
function n1p(v) { return (v < 0 ? "−" : "+") + Math.abs(v).toFixed(1); }      // bare, explicit sign: +7.2
function cr(v) { return (v < 0 ? "−₹" : "₹") + fmtN(Math.abs(v)) + " Cr"; }   // crore: −₹1,744 Cr
function crp(v) { return (v < 0 ? "−₹" : "+₹") + fmtN(Math.abs(v)) + " Cr"; } // crore, explicit sign
function pc(v, d) { return (v * 100).toFixed(d || 0) + "%"; }                  // 0.67 -> "67%"
function pv(v, suffix) { return (v === null || v === undefined) ? "n/a" : String(v) + (suffix || ""); } // primary values may be null
function fitText(t, maxW, min) { min = min || 22; while (t.width > maxW && t.fontSize > min) { t.fontSize = t.fontSize - 1; }
  if (t.width > maxW + 1) warnings.push("overflow: " + t.characters.slice(0, 40)); return t; }
function TL(p, x, y, size, chars, o) { o = o || {}; const t = addText(p, o.family || "Poppins", o.style || "Bold", size, o.color || C.ink, chars, x, y);
  if (o.maxW) fitText(t, o.maxW, o.min);
  if (o.rightAt !== undefined) t.x = o.rightAt - t.width;
  if (o.centerAt !== undefined) t.x = o.centerAt - t.width / 2;
  return t; }
function T(p, x, y, w, size, chars, o) { o = o || {};
  return addText(p, o.family || "Inter", o.style || "Semi Bold", size, o.color || C.ink, chars, x, y, w, o.h || 30, o.align || "LEFT", undefined, true); }
function TB(p, x, y, w, h, size, chars, o) { o = o || {};
  return addText(p, o.family || "Inter", o.style || "Semi Bold", size, o.color || C.ink, chars, x, y, w, h, o.align || "LEFT", "CENTER", false); }
// Rich text: parts = [["plain ", ""], ["bold keyword", "B"], [" orange keyword", "O"], [" red", "R"], [" green", "G"]]
function RT(p, x, y, w, size, parts, o) { o = o || {}; const chars = parts.map(q => q[0]).join("");
  const t = addText(p, "Inter", "Semi Bold", size, o.color || C.ink, chars, x, y, w, o.h || 30, o.align || "LEFT", undefined, true);
  let i = 0; parts.forEach(q => { const n = q[0].length, s = q[1] || "";
    if (n && s) { t.setRangeFontName(i, i + n, { family: "Inter", style: "Bold" });
      const col = s === "O" ? C.primary : s === "R" ? C.alert : s === "G" ? C.good : s === "D" ? C.primaryDeep : s === "W" ? C.white : s === "A" ? C.accent : null;
      if (col) t.setRangeFills(i, i + n, [{ type: "SOLID", color: col }]); }
    i += n; }); return t; }
function layered(p, x, y, w, h, front, name, back) { const b = addRect(p, x + 7, y + 7, w, h, back || C.accent, C.ink, 2.5); b.name = "BACK: " + (name || "");
  return addFrame(p, x, y, w, h, front, C.ink, 2, name); }
function panel(s, x, y, w, h, title, o) { o = o || {}; let f;
  if (o.layered) f = layered(s, x, y, w, h, o.fill || C.white, "PANEL: " + title, o.back);
  else f = addFrame(s, x, y, w, h, o.fill || C.white, C.ink, 2, "PANEL: " + title);
  if (title) { TL(f, 16, 10, 24, title, { color: o.titleColor || C.primary, maxW: w - 32 - (o.reserve || 0) }); addRect(f, 16, 50, w - 32, 2, C.ink); }
  return f; }
function addBadge(p, x, y, d, num, bg, fg) { addEllipse(p, x, y, d, d, bg, C.ink, 2);
  const t = TL(p, 0, 0, 22, String(num), { family: "Poppins", style: "Bold", color: fg }); t.x = x + d / 2 - t.width / 2; t.y = y + d / 2 - t.height / 2; return t; }
function badgeList(p, x, y, w, items, o) { o = o || {}; const d = o.d || 40, pitch = o.pitch || 58;
  items.forEach((t, i) => { const ry = y + i * pitch; addBadge(p, x, ry, d, o.labels ? o.labels[i] : i + 1, o.bg || C.primary, o.fg || C.white);
    if (Array.isArray(t)) RT(p, x + d + 14, ry + Math.max(0, (d - 28) / 2), w - d - 14, 22, t);
    else T(p, x + d + 14, ry + Math.max(0, (d - 28) / 2), w - d - 14, 22, t, { family: "Inter", style: o.style || "Semi Bold" }); }); }
function dashedH(p, x, y, w, color, th) { addDashedRow(p, x, y, w, color || C.ink, 14, 9, th || 2.5); }
function logoSlot(p, x, y, w, h, brand) { const f = addFrame(p, x, y, w, h, C.white, C.primaryDeep, 1.5, "LOGO: " + brand);
  try { f.dashPattern = [6, 4]; } catch (e) {}
  addText(f, "Inter", "Semi Bold", 14, C.primaryDeep, brand + " logo", 0, 0, w, h, "CENTER", "CENTER", false); return f; }
function hBars(p, x, y, w, items, o) { o = o || {}; const lw = o.labelW || 180, rh = o.rowH || 48, bh = o.barH || 30, vw = o.valueW || 110;
  const max = o.max || Math.max(...items.map(i => i.value)); const span = w - lw - 12 - vw;
  items.forEach((it, i) => { const ry = y + i * rh;
    TL(p, x, ry + (rh - 30) / 2, 22, it.label, { family: "Inter", style: "Bold", maxW: lw - 8 });
    const bw = Math.max(4, span * it.value / max);
    addRect(p, x + lw + 12, ry + (rh - bh) / 2, bw, bh, it.color || C.primary, C.ink, 2);
    TL(p, x + lw + 12 + bw + 10, ry + (rh - 30) / 2, 22, it.text || String(it.value), { family: "Poppins", style: "Bold", color: it.textColor || C.ink }); }); }
function vBars(p, x, y, w, h, items, o) { o = o || {}; const n = items.length, pitch = w / n, bw = o.barW || Math.min(120, pitch * 0.6);
  const labH = o.labelH || 60, top = y + 40, base = y + h - labH;
  const max = o.max !== undefined ? o.max : Math.max(...items.map(i => i.value)); const min = o.min !== undefined ? o.min : 0;
  const Y = v => base - (base - top) * (v - min) / (max - min); const zero = Y(Math.max(min, 0));
  addRect(p, x, zero - 1.25, w, 2.5, C.ink);
  items.forEach((it, i) => { const cx = x + pitch * i + pitch / 2; const yv = Y(it.value); const top2 = Math.min(yv, zero), hgt = Math.max(3, Math.abs(zero - yv));
    addRect(p, cx - bw / 2, top2, bw, hgt, it.color || C.primary, C.ink, 2);
    const vt = TL(p, 0, 0, o.valSize || 24, it.text || String(it.value), { family: "Poppins", style: "Bold", color: it.textColor || C.ink, centerAt: cx });
    vt.y = it.value >= 0 ? top2 - 34 : top2 + hgt + 4;
    T(p, cx - pitch / 2 + 2, base + 8, pitch - 4, 22, it.label, { align: "CENTER", family: "Inter", style: "Bold" }); });
  return { Y, zero }; }
function stackH(p, x, y, w, h, segs, o) { o = o || {}; const tot = segs.reduce((a, s) => a + s.value, 0); let cx = x;
  segs.forEach((s, i) => { let sw = Math.round(w * s.value / tot); if (i === segs.length - 1) sw = x + w - cx;
    addRect(p, cx, y, sw, h, s.color, C.ink, 2);
    if (s.text && sw >= (o.minInside || 110)) TL(p, 0, y + (h - 32) / 2, 22, s.text, { family: "Poppins", style: "Bold", color: s.textColor || C.ink, centerAt: cx + sw / 2 });
    cx += sw; }); }
// Stacked vertical bars. cols = [{label, segs:[{value,color,text,textColor}], total}]
function stackV(p, x, y, w, h, cols, o) { o = o || {}; const n = cols.length, pitch = w / n, bw = o.barW || Math.min(130, pitch * 0.6);
  const labH = o.labelH || 60, top = y + 44, base = y + h - labH;
  const max = o.max || Math.max(...cols.map(c => c.segs.reduce((a, s) => a + s.value, 0)));
  addRect(p, x, base - 1.25, w, 2.5, C.ink);
  cols.forEach((c, i) => { const cx = x + pitch * i + pitch / 2; let yy = base;
    c.segs.forEach(s => { const hh = (base - top) * s.value / max; yy -= hh;
      addRect(p, cx - bw / 2, yy, bw, Math.max(2, hh), s.color, C.ink, 2);
      if (s.text && hh >= 34) TL(p, 0, yy + hh / 2 - 16, 22, s.text, { family: "Poppins", style: "Bold", color: s.textColor || C.ink, centerAt: cx }); });
    if (c.total) TL(p, 0, yy - 36, 24, c.total, { family: "Poppins", style: "Bold", centerAt: cx });
    T(p, cx - pitch / 2 + 2, base + 8, pitch - 4, 22, c.label, { align: "CENTER", family: "Inter", style: "Bold" }); }); }
function heatmap(p, x, y, rowLabels, colLabels, vals, o) { o = o || {}; const lw = o.labelW || 260, cw = o.colW || 120, rh = o.rowH || 48, hh = o.headH || 52;
  const sc = o.scale || HO; const flat = vals.reduce((a, r) => a.concat(r), []);
  const lo = o.min !== undefined ? o.min : Math.min(...flat), hi = o.max !== undefined ? o.max : Math.max(...flat);
  const lvl = v => { if (o.levels) return o.levels(v); const t = (v - lo) / ((hi - lo) || 1); return Math.min(4, Math.max(0, Math.floor(t * 5 - 1e-9))); };
  const W = lw + cw * colLabels.length, H = hh + rh * rowLabels.length;
  const f = addFrame(p, x, y, W, H, C.white, C.ink, 2.5, o.name || "TABLE: heatmap");
  const head = addFrame(f, 0, 0, W, hh, o.headFill || C.tint, null, 0, "HEAD");
  if (o.corner) addText(head, "Poppins", "Bold", 22, C.ink, o.corner, 12, 0, lw - 20, hh, "LEFT", "CENTER");
  colLabels.forEach((c, j) => addText(head, "Poppins", "Bold", 22, C.ink, c, lw + j * cw + 4, 0, cw - 8, hh, "CENTER", "CENTER"));
  addRect(f, 0, hh - 1, W, 2, C.ink);
  rowLabels.forEach((r, i) => { const ry = hh + i * rh;
    addText(f, "Inter", "Bold", 22, C.ink, r, 12, ry, lw - 20, rh, "LEFT", "CENTER");
    vals[i].forEach((v, j) => { const L = lvl(v); addRect(f, lw + j * cw, ry, cw, rh, sc[L], C.ink, 1.5);
      const txt = o.fmt ? o.fmt(v, i, j) : String(v);
      addText(f, "Poppins", "Bold", 22, L >= 3 ? C.white : C.ink, txt, lw + j * cw + 2, ry, cw - 4, rh, "CENTER", "CENTER"); });
    addRect(f, 0, ry + rh - 1, lw, 1.5, C.ink); });
  addRect(f, lw - 1, 0, 2, H, C.ink); return f; }
function gantt(p, x, y, labelW, colW, months, rows, o) { o = o || {}; const hh = o.headH || 46, rh = o.rowH || 50;
  const W = labelW + colW * months.length, H = hh + rh * rows.length;
  const f = addFrame(p, x, y, W, H, C.white, C.ink, 2.5, o.name || "TABLE: gantt");
  rows.forEach((r, i) => { if (i % 2) addRect(f, 0, hh + i * rh, W, rh, C.surfaceAlt); });
  for (let j = 1; j < months.length; j++) addRect(f, labelW + j * colW - 0.5, hh, 1, H - hh, C.surface);
  const head = addFrame(f, 0, 0, W, hh, C.tint, null, 0, "HEAD");
  if (o.corner) addText(head, "Poppins", "Bold", 22, C.ink, o.corner, 12, 0, labelW - 20, hh, "LEFT", "CENTER");
  months.forEach((m, j) => addText(head, "Poppins", "Bold", 22, C.ink, m, labelW + j * colW, 0, colW, hh, "CENTER", "CENTER"));
  addRect(f, 0, hh - 1, W, 2, C.ink);
  rows.forEach((r, i) => { const ry = hh + i * rh;
    addText(f, "Inter", "Bold", 22, r.labelColor || C.ink, r.label, 12, ry, labelW - 20, rh, "LEFT", "CENTER");
    (r.bars || []).forEach(b => { const bx = labelW + b.s * colW + 3, bw = (b.e - b.s) * colW - 6;
      addRect(f, bx, ry + 6, bw, rh - 12, b.color || C.primary, C.ink, 1.5);
      if (b.text) addText(f, "Inter", "Bold", 22, b.textColor || C.white, b.text, bx + 8, ry + 6, bw - 14, rh - 12, "LEFT", "CENTER"); });
    (r.marks || []).forEach(mk => { const mx = labelW + mk.at * colW, my = ry + rh / 2;
      addPoly(f, [[mx, my - 14], [mx + 14, my], [mx, my + 14], [mx - 14, my]], mk.color || C.accent, C.ink, 2); });
    addRect(f, 0, ry + rh - 1, W, 1, C.surface); });
  addRect(f, labelW - 1, 0, 2, H, C.ink); return f; }
function phone(p, x, y, w, h, title) { const f = addFrame(p, x, y, w, h, C.white, C.ink, 3, "CARD: phone " + title);
  addRect(f, 0, 0, w, 44, C.primaryDeep); addRect(f, w / 2 - 40, 14, 80, 12, C.ink);
  addText(f, "Poppins", "Bold", 22, C.ink, title, 12, 44, w - 24, 44, "LEFT", "CENTER", false);
  addRect(f, 0, 88, w, 2, C.ink); addRect(f, w / 2 - 50, h - 18, 100, 6, C.ink); return f; }
function quoteCard(p, x, y, w, h, text, meta, o) { o = o || {}; const f = layered(p, x, y, w, h, o.fill || C.white, "CARD: quote", o.back);
  TL(f, 14, -6, 72, "“", { family: "Poppins", style: "ExtraBold", color: C.primary });
  T(f, 60, 16, w - 76, 22, text, { family: "Inter", style: "Semi Bold" });
  TL(f, 60, h - 40, 22, meta, { family: "Inter", style: "Bold", color: C.primary, maxW: w - 76 }); return f; }
function formulaBox(p, x, y, w, h, formula, o) { o = o || {}; const f = addFrame(p, x, y, w, h, o.fill || C.surfaceAlt, C.ink, 2, "CARD: formula " + (o.chip || "FORMULA"));
  addChip(f, 12, (h - 44) / 2, o.chipW || 150, 44, o.chip || "FORMULA", C.primaryDeep, C.white, 22);
  TB(f, (o.chipW || 150) + 30, 0, w - (o.chipW || 150) - 46, h, 22, formula, { family: "Inter", style: "Bold" }); return f; }
function ragChip(p, x, y, w, h, label, lvl) { const fill = lvl === "G" ? C.good : (lvl === "A" ? C.accent : C.alert);
  const f = addFrame(p, x, y, w, h, fill, C.ink, 1.5, "RAG"); addText(f, "Poppins", "Bold", 22, lvl === "A" ? C.ink : C.white, label, 4, 0, w - 8, h, "CENTER", "CENTER", false); return f; }
// Tornado: items [{label, lo, hi, loText, hiText}] around base; left bars alert (downside), right bars good (upside)
function tornado(p, x, y, w, items, o) { o = o || {}; const lw = o.labelW || 300, rh = o.rowH || 52, bh = o.barH || 32;
  const span = Math.max(...items.map(it => Math.max(Math.abs(it.lo - o.base), Math.abs(it.hi - o.base)))) || 1;
  const cx = x + lw + (w - lw) / 2, half = (w - lw) / 2 - 90;
  addWireV(p, cx, y - 10, y + rh * items.length + 6, C.ink, 2.5);
  items.forEach((it, i) => { const ry = y + i * rh;
    TL(p, x, ry + (rh - 30) / 2, 22, it.label, { family: "Inter", style: "Bold", maxW: lw - 12 });
    const dl = (it.lo - o.base) / span * half, dh = (it.hi - o.base) / span * half;
    [[dl, it.loText], [dh, it.hiText]].forEach(([d, txt]) => { if (Math.abs(d) < 1) return;
      const bx = d < 0 ? cx + d : cx, col = d < 0 ? C.alert : C.good;
      addRect(p, bx, ry + (rh - bh) / 2, Math.abs(d), bh, col, C.ink, 1.5);
      const t = TL(p, 0, ry + (rh - 30) / 2, 22, txt, { family: "Poppins", style: "Bold", color: col });
      t.x = d < 0 ? bx - t.width - 8 : bx + Math.abs(d) + 8; }); });
  if (o.baseLabel) TL(p, 0, y - 44, 22, o.baseLabel, { family: "Poppins", style: "Bold", centerAt: cx }); }
// Flow chain: cards [{title, sub, fill, titleColor}] left to right with arrows between
function flow(p, x, y, w, h, cards, o) { o = o || {}; const n = cards.length, gap = o.gap || 44, cw = (w - gap * (n - 1)) / n;
  cards.forEach((c, i) => { const cx = x + i * (cw + gap);
    const f = layered(p, cx, y, cw, h, c.fill || C.white, "CARD: flow " + (i + 1));
    addBadge(f, 10, 10, 38, i + 1, c.badge || C.primary, C.white);
    TL(f, 56, 12, 22, c.title, { color: c.titleColor || C.primary, maxW: cw - 68 });
    T(f, 12, 58, cw - 24, 22, c.sub);
    if (i < n - 1) addArrow(p, cx + cw + 8, y + h / 2, cx + cw + gap - 4, y + h / 2, C.ink, 3, 14); }); }
// Threshold gauge: bar with fill to value, a dashed marker at the gate threshold
function gauge(p, x, y, w, h, value, max, gate, o) { o = o || {};
  addRect(p, x, y, w, h, C.white, C.ink, 2);
  const fw = Math.max(3, Math.min(w, w * value / max)); addRect(p, x, y, fw, h, o.color || (value >= gate ? C.good : C.alert), C.ink, 1.5);
  const gx = x + w * gate / max; addLine(p, gx, y - 10, gx, y + h + 10, C.ink, 3, [6, 4]);
  if (o.gateText) TL(p, 0, y + h + 12, 22, o.gateText, { family: "Inter", style: "Bold", centerAt: gx }); }
// Number card: big numeral + caption (allowed on core slides; never on the cover)
function numCard(p, x, y, w, h, big, cap, o) { o = o || {}; const f = layered(p, x, y, w, h, o.fill || C.white, "CARD: num " + big.slice(0, 12), o.back);
  TL(f, 16, 10, o.size || 48, big, { family: "Poppins", style: "ExtraBold", color: o.color || C.primary, maxW: w - 32, min: 30 });
  T(f, 16, 8 + (o.size || 48) * 1.5, w - 32, 22, cap); return f; }
// So-what bar: the last band of every core slide
function soWhat(s, y, h, text) { const f = layered(s, 64, y, 1792, h, C.primaryDeep, "CARD: so what");
  addChip(f, 16, (h - 44) / 2, 170, 44, "SO WHAT", C.accent, C.ink, 22);
  const t = Array.isArray(text) ? RT(f, 206, 0, 1566, 24, text, { color: C.white })
                                : T(f, 206, 0, 1566, 24, text, { family: "Poppins", style: "Bold", color: C.white });
  t.y = Math.max(6, (h - t.height) / 2); t.name = "SOWHAT TEXT";
  return f; }
const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Aakriti Aggarwal","Maharaja Agrasen Institute of Management Studies","Member"]];
function teamTable(p, x, y) { const cw = [300, 660, 160], X = [0, 300, 960], rh = 76, hh = 50, tw = 1120, nr = TEAM.length;
  const t = addFrame(p, x, y, tw, hh + rh * nr, C.white, C.ink, 2, "TABLE: team");
  const h = addFrame(t, 0, 0, tw, hh, C.tint, C.ink, 2, "HEAD");
  ["Team Members", "Institution", "Role"].forEach((l, i) => addText(h, "Poppins", "Bold", 22, C.ink, l, X[i] + 16, 0, cw[i] - 24, hh, "LEFT", "CENTER"));
  TEAM.forEach((m, i) => { const r = addFrame(t, 0, hh + rh * i, tw, rh, i % 2 ? C.surfaceAlt : C.white, C.ink, 2, "ROW");
    m.forEach((v, j) => addText(r, "Inter", j === 0 ? "Bold" : "Semi Bold", 22, C.ink, v, X[j] + 16, 0, cw[j] - 24, rh, "LEFT", "CENTER")); });
  [cw[0], cw[0] + cw[1]].forEach(vx => addRect(t, vx - 1, 0, 2, hh + rh * nr, C.ink)); return t; }
const RIB = { labels: ["SUMMARY", "UNIT MATH", "CUSTOMER", "LEVERS", "OPTIONS", "THE CALL", "RIVALS", "SIGNALS"], widths: [172, 208, 192, 160, 172, 190, 160, 172] };
const RIB_APP = { labels: ["ASSUMPTIONS", "METHOD", "MODEL", "SOURCES"], widths: [260, 190, 170, 210] };
function skeleton(s, active, counter, chip, chipW, title, source, rb) { rb = rb || RIB;
  s.fills = [{ type: "SOLID", color: C.white }];
  const endX = buildRibbon(s, active, rb.labels, rb.widths, 64, 40, 60);
  addWireH(s, endX - 10, 1720, 70, C.ink, 2.5);
  addChip(s, 1720, 40, 136, 60, counter, C.primaryDeep, C.white, 24);
  sectionChip(s, chip, chipW, 64, 118);
  const t = addText(s, "Poppins", "Bold", 40, C.ink, title, 64, 188, 1792, 100, "LEFT", undefined, true); t.name = "HEADLINE";
  while (t.height > 112 && t.fontSize > 34) { t.fontSize = t.fontSize - 1; }
  if (t.height > 112) warnings.push("headline 3 lines: " + counter);
  const src = addText(s, "Inter", "Semi Bold", 14, C.primary, source, 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
  return t; }
function lineChart(p, x, y, w, h, series, xLabels, o) { o = o || {}; const L = x + (o.padL || 70), R = x + w - (o.padR || 120), Tp = y + 16, B = y + h - 40;
  const X = i => L + (R - L) * i / (xLabels.length - 1); const Y = v => B - (B - Tp) * (v - o.yMin) / (o.yMax - o.yMin);
  (o.yTicks || []).forEach(v => { addRect(p, L, Y(v), R - L, 1, C.surface);
    TL(p, 0, Y(v) - 14, 22, o.yFmt ? o.yFmt(v) : String(v), { family: "Inter", style: "Semi Bold", rightAt: L - 8 }); });
  addRect(p, L, B, R - L, 2.5, C.ink); addRect(p, L, Tp, 2.5, B - Tp, C.ink);
  if (o.zeroLine && o.yMin < 0) addRect(p, L, Y(0) - 1.25, R - L, 2.5, C.ink);
  xLabels.forEach((lb, i) => { if (lb) TL(p, 0, B + 8, 22, lb, { family: "Inter", style: "Bold", centerAt: X(i) }); });
  series.forEach(se => { const pts = se.values.map((v, i) => v === null ? null : [X(i), Y(v)]);
    for (let i = 0; i < pts.length - 1; i++) if (pts[i] && pts[i + 1]) addLine(p, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], se.color, 4, se.dash);
    pts.forEach(pt => { if (pt) addEllipse(p, pt[0] - 6, pt[1] - 6, 12, 12, se.color, C.ink, 1.5); });
    if (se.label) { const last = pts.filter(Boolean).pop(); TL(p, last[0] + 12, last[1] - 15 + (se.labelDy || 0), 22, se.label, { family: "Poppins", style: "Bold", color: se.labelColor || se.color }); } });
  return { X, Y, L, R, Tp, B }; }
function waterfall(p, x, y, w, h, steps, o) { o = o || {}; const n = steps.length, pitch = w / n, bw = o.barW || Math.min(110, pitch * 0.62);
  const top = y + 40, base = y + h - (o.labelH || 64), span = base - top, max = o.max, min = o.min || 0;
  const Y = v => base - span * (Math.min(Math.max(v, min), max) - min) / (max - min);
  addRect(p, x, Y(0), w, 2.5, C.ink); let run = 0;
  steps.forEach((s, i) => { const cx = x + pitch * i + pitch / 2; let y0, y1;
    if (s.kind === "total") { y0 = 0; y1 = s.value; } else { y0 = run; y1 = run + s.value; }
    const lo = Math.min(y0, y1), hi = Math.max(y0, y1);
    addRect(p, cx - bw / 2, Y(hi), bw, Math.max(3, Y(lo) - Y(hi)), s.color, C.ink, 2);
    if (i > 0) { const lvl = s.kind === "total" ? s.value : run; addRect(p, cx - pitch + bw / 2, Y(lvl), pitch - bw, 1.5, C.ink); }
    run = (s.kind === "total") ? s.value : y1;
    const lab = TL(p, 0, 0, 22, s.text, { family: "Poppins", style: "Bold", color: s.textColor || C.ink, centerAt: cx });
    lab.y = (s.below ? Y(lo) + 6 : Y(hi) - 32);
    T(p, cx - pitch / 2 + 4, base + 8, pitch - 8, 22, s.label, { align: "CENTER", family: "Inter", style: "Bold" }); });
  return { Y }; }
function donut(p, cx, cy, r, segs, inner) { const tot = segs.reduce((a, s) => a + s.value, 0); let a0 = -Math.PI / 2;
  segs.forEach(s => { const a1 = a0 + 2 * Math.PI * s.value / tot; const e = figma.createEllipse(); p.appendChild(e); e.resize(2 * r, 2 * r);
    e.fills = [{ type: "SOLID", color: s.color }]; e.strokes = [{ type: "SOLID", color: C.ink }]; e.strokeWeight = 2;
    e.arcData = { startingAngle: a0, endingAngle: a1, innerRadius: inner || 0.56 }; e.x = cx - r; e.y = cy - r; a0 = a1; }); }
// ===== END PREAMBLE =====
// ===== FINTECHSTICO EXTRAS v4 (own design, organisers' headers) =====
const RIB7 = { labels: ["PROBLEM STATEMENT", "TEAM", "SOLUTION", "ARCHITECTURE", "TECHNOLOGY USED", "FEATURE / USP"], widths: [352, 130, 192, 262, 316, 280] };
const HDR = { 3: "Problem Statement", 4: "Team Name", 5: "Solution", 6: "Architecture", 7: "Technology Used", 8: "Feature / USP", 9: "Appendix", 10: "Thank You" };
function tplClear(s) { s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.cream }]; }
function head(s, n) { const act = n >= 3 && n <= 8 ? n - 3 : -1;
  const endX = buildRibbon(s, act, RIB7.labels, RIB7.widths, 64, 40, 60); addWireH(s, endX - 10, 1856, 70, C.ink, 2.5);
  const h = TL(s, 64, 112, 56, HDR[n], { family: "Poppins", style: "ExtraBold" }); h.name = "HEADER";
  if (n === 4) { const sub = TL(s, 64 + h.width + 28, 144, 26, "TEAM MEMBERS", { color: C.primary }); sub.name = "SUBHEADER"; }
  const r = addRect(s, 64, 226, 1792, 3, C.ink); r.name = "RULE"; return 226; }
function finding(s, y, text) { const f = layered(s, 64, y, 1792, 92, C.white, "CARD: finding");
  addChip(f, 16, 24, 150, 44, "FINDING", C.primary, C.white, 22);
  const t = addText(f, "Poppins", "Bold", 28, C.ink, text, 186, 0, 1590, 80, "LEFT", undefined, true); t.name = "HEADLINE";
  while (t.height > 86 && t.fontSize > 24) { t.fontSize = t.fontSize - 1; }
  if (t.height > 86) warnings.push("finding over 2 lines: " + text.slice(0, 40));
  t.y = Math.max(3, (92 - t.height) / 2); return f; }
function hdr(s, n, findingText, source) { tplClear(s);
  const ry = head(s, n); finding(s, ry + 18, findingText);
  const src = addText(s, "Inter", "Semi Bold", 14, C.primary, source, 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
  return 352; }
function browser(p, x, y, w, h, title) { const f = addFrame(p, x, y, w, h, C.white, C.ink, 2.5, "CARD: mock " + title);
  addRect(f, 0, 0, w, 40, C.primaryDeep, C.ink, 2);
  [16, 40, 64].forEach((cx, i) => addEllipse(f, cx, 12, 16, 16, [C.alert, C.accent, C.good][i], C.ink, 1.5));
  addText(f, "Inter", "Bold", 22, C.white, title, 96, 0, w - 112, 40, "LEFT", "CENTER", false); return f; }

const V = {
  // Slide 2 facts (F01 to F07, F21); numerals are display strings, series are plain numbers
  evasion5y: "₹7.08 lakh Cr",            // F01
  itc5y: "₹1.79 lakh Cr",               // F02
  itcCases: "44,938",                   // F02
  evasionCases: "91,370",               // F01
  taxpayers: "1.67 Cr",                 // F07
  itcByYear: [["FY21", 31233], ["FY22", 28022], ["FY23", 24140], ["FY24", 36374], ["FY25", 58772]], // F03
  itcJump: "+62% in one year",          // derived from F03: 58,772 / 36,374 = 1.616
  itcMultiple: "FY25 is 2.4 times FY23", // derived: 58,772 / 24,140 = 2.43
  matchPain: [["2023 survey", 64], ["Latest survey", 37]], // F21 (CORRECTED at V0: year label of the 37% unconfirmed)
  // Slide 4 and 7 moneyshot (assumptions A01 to A08, plan section 12.2)
  moneyshot: "₹54 lakh",
  risk: { low: 18, base: 54, high: 90 },       // Rs lakh per Rs 100 Cr of purchases
  protect: { low: 14.4, base: 43.2, high: 72.0 }, // at the 80% design target (A08)
  example: [["Blocked", 90000], ["Interest", 8100], ["Capital", 3000]], // worked invoice, plan 7.3, total 101100
  // Slide 5 dataset (plan section 8)
  families: [["Amount, tax value", 2.5], ["Rate, tax head", 1.8], ["Date shift", 1.2], ["Number variant", 1.5], ["Duplicates", 1.1], ["Missing, unpaid", 3.1], ["Anomalies", 0.8]],
  // Parity (V0, VA-2): Yes, Part, No, n/s (not stated on the vendor page). Columns: Portal+IMS, Tally, SaaS, Sheet+CA, Hisaab (design)
  parityRows: ["Matches invoice to return", "Three-way with bank, ledger", "Verifies rate by HSN, date", "Finds duplicates", "Flags anomalies, with reasons", "Prices each exception", "Ranks by deadline, owner"],
  parity: [["Yes","Yes","Yes","Part","Yes"], ["n/s","Part","n/s","Part","Yes"], ["n/s","Part","n/s","No","Yes"], ["n/s","Part","Part","No","Yes"], ["n/s","n/s","n/s","No","Yes"], ["n/s","Part","n/s","No","Yes"], ["n/s","n/s","n/s","No","Yes"]],
  // Slide 2 table rows: Matches rows, Checks rate, Prices it, Ranks it
  tools2: [["GST portal + IMS","Yes","n/s","n/s","n/s"], ["TallyPrime","Yes","Part","Part","n/s"], ["Compliance SaaS","Yes","n/s","n/s","n/s"], ["Sheet + CA firm","Part","No","No","No"]],
  s8: {
    finding: "Every figure in this deck traces to one of 20 sources or 11 stated assumptions; nothing is built, so every performance number is a design target",
    sowhat: "the 1% to 5% band is assumed, n/s cells were not stated on public pages, and no interview has been run",
    source: "Source: Team IdeaForge research notes and verification log, 3 Oct 2026" },
  trend: { labels: ["FY21", "FY22", "FY23", "FY24", "FY25"], evasion: [0.49, 0.73, 1.32, 2.30, 2.23], itc: [0.31, 0.28, 0.24, 0.36, 0.59] },
  s2: {
    finding: "ITC fraud detected rose 62% in a year to ₹58,772 Cr in FY25, yet the tools a finance team uses match and flag but do not state a rupee price or deadline rank per mismatch",
    sowhat: "the tools report what does not match; none states a rupee price or says what to fix before the 20th",
    source: "Source: Ministry of Finance reply, Lok Sabha (Aug 2025) | GSTN statistics (Jun 2026) | Deloitte GST survey as reported by Deccan Herald | CGST Rule 88D | Vendor product pages | Team IdeaForge analysis" },
  s3: {
    finding: "Two members cover tax logic, data and build: each of the 8 Hisaab modules has a named owner and a first deliverable for the prototype round",
    sowhat: "one owner per module, and the engine is built before any model touches it",
    source: "Source: Team IdeaForge build plan (design stage)" },
  s4: {
    finding: "Hisaab gives every mismatch a rupee value, an owner and a date, so the ₹54 lakh of credit at risk per ₹100 Cr of purchases is fixed costliest first",
    sowhat: "the accountant opens a queue sorted by rupees and days left, not a list of unmatched rows",
    source: "Source: Team IdeaForge worked example, assumptions A01 to A08 (est.) | CGST Rules 37 and 37A | Console values are the synthetic dataset design, not results" },
  s5: {
    finding: "One pipeline of six stages covers all 7 capabilities, 7,200 injected errors make each one measurable, and the language model only reads back what the engine computed",
    sowhat: "one pipeline, seven capabilities, labelled errors, and a model that never computes money",
    source: "Source: Team IdeaForge design | Dataset rates are design choices (assumption A09) | Thresholds 0.92 and 0.80 are design values" },
  s6: {
    finding: "An open-source core that runs on one laptop, with Sarvam speech and a swappable Sarvam 105B or Gemini model on top: 7 layers, each chosen against an alternative",
    sowhat: "the core needs no key and no network; the voice layer is one interface with two models behind it",
    source: "Source: Team IdeaForge design | Model comparison is team judgement | CGST Rules 37, 37A and 88D" },
  s7: {
    finding: "Hisaab is designed to price each exception and rank it by deadline, which no compared option states; at an 80% target it protects ₹43 lakh per ₹100 Cr of purchases",
    sowhat: "build Hisaab as the layer that prices and ranks exceptions, on top of matching that is already free",
    source: "Source: Vendor product pages (Oct 2026) | GSTN e-invoice statistics (Oct 2025) | Team IdeaForge assumptions A03, A08, A10, A11 (est.) | Hisaab column is a design, not a product" }
};

const results=[];
{ const s = await figma.getNodeByIdAsync("6:5");
hdr(s, 5, V.s4.finding, V.s4.source);
const a1 = panel(s, 64, 352, 1100, 250, "FIVE STEPS FROM RAW BOOKS TO A RANKED QUEUE");
flow(a1, 16, 62, 1068, 172, [{ title: "INGEST", sub: "Books, bank file, GSTR-2B" }, { title: "MATCH", sub: "Exact, fuzzy, classifier" }, { title: "SORT", sub: "12 types, one root cause" }, { title: "PRICE", sub: "Rupees at risk, last date" }, { title: "ACT", sub: "Ranked queue, Ask Hisaab" }], { gap: 36 });
const m = layered(s, 1180, 352, 676, 250, C.primaryDeep, "CARD: moneyshot");
addChip(m, 20, 16, 330, 44, "CREDIT AT RISK (EST.)", C.accent, C.ink, 22);
nm(TL(m, 20, 62, 64, V.moneyshot, { family: "Poppins", style: "ExtraBold", color: C.accent }), "MONEYSHOT");
T(m, 368, 76, 288, 22, "of input tax credit at risk per ₹100 Cr of purchases (base)", { color: C.white });
RT(m, 20, 174, 636, 22, [["Low ₹18 lakh, base ₹54 lakh, high ₹90 lakh: ", "A"], ["1%, 3%, 5% of ₹18 Cr credit a year (assumption band)", "W"]], { color: C.white });
const b1 = panel(s, 64, 618, 620, 336, "EVERY BRIEF ITEM HAS ONE MODULE");
addTable(b1, 16, 62, [190, 200, 198], ["Brief", "Module", "Output"], [
  ["Reconcile", "3-way match", "Status, score"], ["Mismatches", "Classifier", "Typed errors"], ["Tax check", "Rate verifier", "Rate errors"], ["Missing", "Gap finder", "Ageing buckets"],
  ["Anomalies", "Pattern watch", "Ranked reasons"], ["Liability", "Liability view", "Payable band"], ["Dashboard", "Console", "Ranked queue"], ["Dataset", "Synthetic set", "12 error types"]],
  { headerH: 34, rowH: 27, name: "TABLE: coverage", align: ["LEFT", "LEFT", "LEFT"] });
const b2 = panel(s, 700, 618, 560, 336, "THE CONSOLE (ILLUSTRATIVE SCREEN)");
const br = browser(b2, 16, 62, 528, 262, "Hisaab console");
const ask = addFrame(br, 330, 4, 190, 32, C.accent, C.ink, 1.5, "CHIP: ask"); addText(ask, "Poppins", "Bold", 22, C.ink, "ASK HISAAB", 4, 0, 182, 32, "CENTER", "CENTER", false);
[["Matched 52,800", C.goodTint], ["Unmatched 1,860", C.alertTint], ["Duplicate 660", C.tint], ["Discrepant 4,680", C.tint]].forEach((q, i) => {
  const f = addFrame(br, 8 + (i % 2) * 260, 48 + Math.floor(i / 2) * 44, 252, 38, q[1], C.ink, 1.5, "CELL"); TB(f, 8, 0, 236, 38, 22, q[0], { family: "Inter", style: "Bold" }); });
addTable(br, 8, 138, [250, 140, 122], ["Exception", "₹ at risk", "Days"], [["Supplier not filed", "4.2 lakh", "6"], ["Old GST rate used", "1.1 lakh", "6"], ["Near duplicate", "0.6 lakh", "0"]], { headerH: 34, rowH: 28, name: "TABLE: queue", align: ["LEFT", "RIGHT", "RIGHT"] });
const b3 = panel(s, 1276, 618, 580, 336, "HOW ONE EXCEPTION IS PRICED (EST.)");
waterfall(b3, 16, 62, 548, 200, [{ label: "Blocked", value: V.example[0][1], color: C.alert, text: "₹90,000" }, { label: "Interest", value: V.example[1][1], color: C.orange, text: "₹8,100" }, { label: "Capital", value: V.example[2][1], color: C.accent, text: "₹3,000" }, { label: "At risk", kind: "total", value: 101100, color: C.primaryDeep, text: "₹1,01,100" }], { max: 110000, min: 0, labelH: 40 });
formulaBox(b3, 16, 268, 548, 58, "₹ at risk = tax × P(blocked) + interest + capital cost", { chip: "FORMULA", chipW: 130 });
soWhat(s, 966, 64, [["Day one: ", "A"], [V.s4.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }

{ const s = await figma.getNodeByIdAsync("6:6");
hdr(s, 6, V.s5.finding, V.s5.source);
const a = panel(s, 64, 352, 1792, 280, "SIX STAGES, ONE PASS: FROM FILES TO A PRICED QUEUE");
[["INGEST", ["Books CSV", "Bank file", "GSTR-2B JSON"]], ["NORMALISE", ["GSTIN check", "Invoice no. clean", "Date, period"]], ["MATCH", ["Exact keys", "Fuzzy keys", "Pair classifier"]],
 ["VERIFY TAX", ["Dated rate master", "Tax head", "Rounding"]], ["DETECT", ["Duplicates", "Gaps", "Anomalies"]], ["PRICE, ACT", ["Rupees at risk", "Owner, date", "Queue, voice"]]].forEach((q, i) => {
  const f = addFrame(a, 16 + i * 296, 60, 280, 150, i === 5 ? C.tint : C.white, C.ink, 2, "CARD: stage " + q[0]);
  TL(f, 12, 4, 24, q[0], { color: C.primary, maxW: 256 }); q[1].forEach((ln, j) => T(f, 12, 46 + j * 32, 256, 22, ln));
  if (i < 5) addArrow(a, 16 + i * 296 + 281, 135, 16 + (i + 1) * 296 - 1, 135, C.ink, 3, 9); });
const st = addFrame(a, 16, 222, 1760, 44, C.surfaceAlt, C.ink, 2, "CARD: store"); TB(st, 12, 0, 1736, 44, 22, "FastAPI services over DuckDB tables: books, bank, returns, rate master, labels, exceptions", { family: "Inter", style: "Bold" });
const b1 = panel(s, 64, 648, 430, 306, "7 ERROR FAMILIES, 12%");
const fl = ["Amount, tax", "Rate, head", "Date shift", "Number variant", "Duplicates", "Missing, unpaid", "Anomalies"];
hBars(b1, 16, 62, 398, V.families.map((f, i) => ({ label: fl[i], value: f[1], text: f[1].toFixed(1) + "%", color: i === 5 ? C.alert : C.primary })), { labelW: 200, rowH: 33, barH: 22, valueW: 70, max: 3.2 });
const b2 = panel(s, 510, 648, 430, 306, "60,000 INVOICES, 9 TABLES");
addTable(b2, 16, 62, [250, 148], ["Entity", "Rows"], [["purchase_invoice", "36,000"], ["sales_invoice", "24,000"], ["bank_transaction", "58,000"], ["ledger_entry", "1,20,000"], ["return_2b", "35,000"], ["vendor", "400"], ["rate_master", "200"]], { headerH: 34, rowH: 27, name: "TABLE: entities", align: ["LEFT", "RIGHT"] });
const b3 = panel(s, 956, 648, 430, 306, "RULES, MODEL, THEN HUMAN");
[["Exact keys agree: matched", C.goodTint], ["Fuzzy 0.92+: matched, flagged", C.tint], ["Classifier 0.80+: suggested", C.tint], ["Else: human, by ₹ at risk", C.alertTint]].forEach((q, i) => {
  const f = addFrame(b3, 16, 62 + i * 58, 398, 46, q[1], C.ink, 2, "CARD: tier " + (i + 1)); TB(f, 8, 0, 382, 46, 22, q[0], { family: "Inter", style: "Bold", align: "CENTER" });
  if (i < 3) addArrow(b3, 215, 62 + i * 58 + 47, 215, 62 + (i + 1) * 58 - 1, C.ink, 3, 7); });
const b4 = panel(s, 1402, 648, 454, 306, "VOICE READS THE ENGINE");
[["Mic: Hindi or English", C.white], ["STT: Sarvam Saaras v3", C.white], ["LLM: Sarvam 105B or Gemini", C.tint], ["Tools call the engine", C.goodTint], ["TTS: Sarvam Bulbul v3", C.white]].forEach((q, i) => {
  const f = addFrame(b4, 16, 62 + i * 48, 422, 40, q[1], i === 2 ? C.primary : C.ink, i === 2 ? 3 : 2, "CARD: voice " + (i + 1)); TB(f, 8, 0, 406, 40, 22, q[0], { family: "Inter", style: "Bold", align: "CENTER" });
  if (i < 4) addWireV(b4, 227, 62 + i * 48 + 40, 62 + (i + 1) * 48, C.ink, 3); });
soWhat(s, 966, 64, [["Conclusively: ", "A"], [V.s5.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }

{ const s = await figma.getNodeByIdAsync("6:7");
hdr(s, 7, V.s6.finding, V.s6.source);
const a1 = panel(s, 64, 352, 900, 292, "7 LAYERS, EACH CHOSEN AGAINST AN ALTERNATIVE");
addTable(a1, 16, 62, [150, 290, 170, 258], ["Layer", "Choice", "Rejected", "Why"], [
  ["Data", "Polars, DuckDB", "pandas alone", "Fast, zero setup"], ["Match", "RapidFuzz, LightGBM", "Rules alone", "Recall on variants"], ["Explain", "Isolation Forest, SHAP", "Deep network", "Reasons per case"],
  ["API", "FastAPI, Pydantic", "Flask", "Typed, WebSocket"], ["Console", "Next.js, Recharts", "Streamlit", "A real product UI"], ["Speech", "Saaras v3, Bulbul v3", "Generic API", "Sarvam: Hindi mix"], ["LLM", "Sarvam 105B or Gemini", "One model", "Swappable"]],
  { headerH: 34, rowH: 27, name: "TABLE: stack", align: ["LEFT", "LEFT", "LEFT", "LEFT"] });
const a2 = panel(s, 980, 352, 876, 292, "WHY A LAYERED MATCHER: 4 OPTIONS, 5 TESTS");
heatmap(a2, 16, 62, ["Rules only", "Fuzzy only", "Layered (ours)", "LLM matcher"], ["Prec.", "Recall", "Clear", "Speed", "Build"], [[5, 2, 5, 5, 5], [3, 4, 3, 4, 4], [5, 5, 4, 4, 3], [4, 4, 2, 1, 3]], { labelW: 200, colW: 88, rowH: 38, headH: 40, scale: HG, min: 1, max: 5, name: "TABLE: options" });
[["Low recall", "R"], ["Low precision", "R"], ["Chosen", "G"], ["Slow to audit", "R"]].forEach((q, i) => ragChip(a2, 664, 62 + 40 + i * 38 + 2, 196, 34, q[0], q[1]));
T(a2, 16, 260, 844, 22, "Team judgement, 1 to 5");
const b1 = panel(s, 64, 660, 640, 294, "DESIGN TARGETS, NOT RESULTS");
[["Match precision", 0.98], ["Match recall", 0.95], ["Duplicate F1", 0.95]].forEach((q, i) => { const y = 64 + i * 74;
  TL(b1, 16, y, 22, q[0], { family: "Inter", style: "Bold" }); gauge(b1, 16, y + 34, 440, 24, q[1], 1, q[1], { color: C.good });
  TL(b1, 476, y + 30, 22, "target " + q[1].toFixed(2), { color: C.good }); });
const b2 = panel(s, 720, 660, 560, 294, "BUILD PLAN: 5 STREAMS, 4 BLOCKS");
gantt(b2, 16, 62, 220, 76, ["B1", "B2", "B3", "B4"], [{ label: "Dataset", bars: [{ s: 0, e: 1 }] }, { label: "Match", bars: [{ s: 0, e: 2 }] }, { label: "Tax, gaps", bars: [{ s: 1, e: 2 }] }, { label: "Anomaly, price", bars: [{ s: 2, e: 3 }] }, { label: "Console, voice", bars: [{ s: 2, e: 4 }] }], { headH: 40, rowH: 36, name: "TABLE: plan" });
const b3 = panel(s, 1296, 660, 560, 294, "CORE OFFLINE, VOICE FALLS BACK");
addTable(b3, 16, 62, [200, 328], ["If this fails", "Hisaab does"], [["Primary LLM", "Second LLM answers"], ["Both LLMs", "Typed query, no model"], ["Speech out", "Answer shown as text"], ["Network", "Core still reconciles"]], { headerH: 36, rowH: 32, name: "TABLE: ladder", align: ["LEFT", "LEFT"] });
RT(b3, 16, 236, 528, 22, [["Ship: ", "B"], ["Docker, GitHub Actions, Vercel, Cloud Run", ""]]);
soWhat(s, 966, 64, [["Buildable: ", "A"], [V.s6.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }

return {results,warnings};
