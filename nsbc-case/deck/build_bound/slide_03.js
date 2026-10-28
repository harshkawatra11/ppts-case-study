// ===== TOING PREAMBLE v1 =====
const C = {
  primary:{r:0.851,g:0.373,b:0.055}, orange:{r:0.988,g:0.502,b:0.098}, primaryDeep:{r:0.157,g:0.173,b:0.247},
  accent:{r:0.961,g:0.773,b:0.094}, alert:{r:0.784,g:0.118,b:0.118}, alertTint:{r:0.992,g:0.886,b:0.886},
  rival:{r:0.114,g:0.306,b:0.537}, rivalTint:{r:0.863,g:0.902,b:0.969},
  good:{r:0.071,g:0.502,b:0.361}, goodTint:{r:0.847,g:0.941,b:0.902},
  tint:{r:1.000,g:0.910,b:0.839}, ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.957,b:0.945}, white:{r:1,g:1,b:1}
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
const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Gursimran Kaur","Guru Gobind Singh Indraprastha University","Member"],["Dayita Arora","Ramjas College, University of Delhi","Member"]];
function teamTable(p, x, y) { const cw = [330, 600, 190], X = [0, 330, 930], rh = 54, hh = 50, tw = 1120;
  const t = addFrame(p, x, y, tw, hh + rh * 3, C.white, C.ink, 2, "TABLE: team");
  const h = addFrame(t, 0, 0, tw, hh, C.tint, C.ink, 2, "HEAD");
  ["Team Members", "Institution", "Role"].forEach((l, i) => addText(h, "Poppins", "Bold", 22, C.ink, l, X[i] + 16, 0, cw[i] - 24, hh, "LEFT", "CENTER"));
  TEAM.forEach((m, i) => { const r = addFrame(t, 0, hh + rh * i, tw, rh, i % 2 ? C.surfaceAlt : C.white, C.ink, 2, "ROW");
    m.forEach((v, j) => addText(r, "Inter", j === 0 ? "Bold" : "Semi Bold", 22, C.ink, v, X[j] + 16, 0, cw[j] - 24, rh, "LEFT", "CENTER")); });
  [330, 930].forEach(vx => addRect(t, vx - 1, 0, 2, hh + rh * 3, C.ink)); return t; }
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
const V = {"t": {"aov": 99.0, "cust": 115.95, "comm": 11.88, "fee_net": 10.17, "ads": 0.99, "rev": 23.04, "rider": 40.0, "ins": 1.0, "coss": 0.35, "pg": 1.04, "sup": 2.98, "disc": 4.0, "tech": 1.0, "cost": 50.37, "contrib": -27.33, "rest_keeps": 83.99, "gov_tax": 8.92, "rider_pct_gov": 40.4}, "t149": {"aov": 149.0, "cust": 168.45, "comm": 17.88, "fee_net": 10.17, "ads": 1.49, "rev": 29.54, "rider": 40.0, "ins": 1.0, "coss": 0.44, "pg": 1.52, "sup": 3.73, "disc": 4.0, "tech": 1.0, "cost": 51.69, "contrib": -22.15, "rest_keeps": 126.41, "gov_tax": 12.5, "rider_pct_gov": 26.85}, "tmix": {"aov": 120.0, "cust": 138.0, "comm": 14.4, "fee_net": 10.17, "ads": 1.2, "rev": 25.77, "rider": 40.0, "ins": 1.0, "coss": 0.39, "pg": 1.24, "sup": 3.3, "disc": 4.0, "tech": 1.0, "cost": 50.93, "contrib": -25.16, "rest_keeps": 101.81, "gov_tax": 10.42, "rider_pct_gov": 33.33}, "c": {"gov": 700.0, "item": 614.5, "comm": 122.9, "pfee": 12.71, "dfee": 12.29, "ads": 18.43, "rev": 166.34, "take_pct": 23.76, "rider": 42.0, "coss": 2.1, "pg": 6.3, "sup": 10.72, "disc": 22.0, "other": 28.02, "cm": 53.2, "ovh": 31.5, "ebitda": 21.7, "rider_pct_gov": 6.0}, "c500": {"gov": 500.0, "item": 439.0, "comm": 87.8, "pfee": 12.71, "dfee": 12.29, "ads": 13.17, "rev": 125.97, "take_pct": 25.19, "rider": 42.0, "coss": 1.89, "pg": 4.5, "sup": 8.09, "disc": 22.0, "other": 7.5, "cm": 38.0, "ovh": 22.5, "ebitda": 15.5, "rider_pct_gov": 8.4}, "ratio": 1.26, "br": {"start": -27.33, "steps": [{"lever": "Slot batching of door orders", "who": "Swiggy", "cx": "+8 to 12 min wait", "delta": 7.2, "after": -20.13}, {"lever": "Pooled Drops (pickup runs)", "who": "Swiggy + Drop host", "cx": "Walk up to 5 min", "delta": 9.7, "after": -10.43}, {"lever": "Door fee outside Drops", "who": "Customer", "cx": "Pays Rs 20 more", "delta": 8.26, "after": -2.18}, {"lever": "Fixed menus, kitchen partners", "who": "Restaurants", "cx": "Less choice", "delta": 3.42, "after": 1.24}, {"lever": "Ad load 1% to 2.5%", "who": "Restaurants", "cx": "None", "delta": 1.46, "after": 2.71}, {"lever": "Everyday low price, fewer coupons", "who": "Swiggy + restaurants", "cx": "Fewer coupons", "delta": 2.0, "after": 4.71}, {"lever": "Toing Pass Rs 49 a month", "who": "Customer", "cx": "None (opt-in)", "delta": 1.02, "after": 5.73}], "end": 5.73}, "rd": {"drop": 7.17, "door": 4.29, "blend": 5.73}, "dens": [{"n": 1, "contrib": -23.43, "rider": 40.0}, {"n": 2, "contrib": -6.43, "rider": 23.0}, {"n": 3, "contrib": -0.76, "rider": 17.33}, {"n": 4, "contrib": 2.07, "rider": 14.5}, {"n": 5, "contrib": 3.77, "rider": 12.8}, {"n": 6, "contrib": 4.9, "rider": 11.67}, {"n": 7, "contrib": 5.71, "rider": 10.86}, {"n": 8, "contrib": 6.32, "rider": 10.25}, {"n": 9, "contrib": 6.79, "rider": 9.78}, {"n": 10, "contrib": 7.17, "rider": 9.4}, {"n": 11, "contrib": 7.48, "rider": 9.09}, {"n": 12, "contrib": 7.74, "rider": 8.83}, {"n": 13, "contrib": 7.96, "rider": 8.62}, {"n": 14, "contrib": 8.14, "rider": 8.43}, {"n": 15, "contrib": 8.3, "rider": 8.27}], "ns": 3.3, "tri": {"t_rev_q": 56.0, "t_loss_q": -81.0, "rev_per_order": 25.77, "contrib_per_order": -25.16, "orders_q_cr": 2.17, "orders_lakh_day": 2.39, "contrib_loss_q": -54.67, "acq_q": -26.33, "acq_share": 0.33, "contrib_share": 0.67, "acq_per_download": -18.16, "annual_loss": -324.0, "pct_of_food_ebitda": 27.74, "pi_pct_of_food_ebitda": 44.86}, "fn": {"loss_per_user_month": 68.34, "ltv_core": 2688.37, "rows": [{"T": 12, "cost_per_user": 450.78, "m_cac": 1.35, "m_ltv": 0.25}, {"T": 24, "cost_per_user": 506.36, "m_cac": 1.51, "m_ltv": 0.28}, {"T": 36, "cost_per_user": 514.27, "m_cac": 1.54, "m_ltv": 0.29}], "cost_per_incr_12m": 4485.33, "multiple_vs_cac": 8.97, "grid_m_cac_pct": {"400": {"0.33": 341, "0.5": 225, "0.67": 168, "1.0": 113}, "500": {"0.33": 273, "0.5": 180, "0.67": 135, "1.0": 90}, "700": {"0.33": 195, "0.5": 129, "0.67": 96, "1.0": 64}, "900": {"0.33": 152, "0.5": 100, "0.67": 75, "1.0": 50}}, "curve": [{"cac": 300, "m_at": {"0.33": 455, "0.67": 224, "1.0": 150}}, {"cac": 400, "m_at": {"0.33": 341, "0.67": 168, "1.0": 113}}, {"cac": 500, "m_at": {"0.33": 273, "0.67": 135, "1.0": 90}}, {"cac": 600, "m_at": {"0.33": 228, "0.67": 112, "1.0": 75}}, {"cac": 700, "m_at": {"0.33": 195, "0.67": 96, "1.0": 64}}, {"cac": 800, "m_at": {"0.33": 171, "0.67": 84, "1.0": 56}}, {"cac": 900, "m_at": {"0.33": 152, "0.67": 75, "1.0": 50}}, {"cac": 1000, "m_at": {"0.33": 137, "0.67": 67, "1.0": 45}}, {"cac": 1100, "m_at": {"0.33": 124, "0.67": 61, "1.0": 41}}, {"cac": 1200, "m_at": {"0.33": 114, "0.67": 56, "1.0": 38}}], "m_ltv_12": 0.25, "m_cac_12": 1.35}, "pa": {"bear": {"S": [-485.88, -562.86, -623.77], "F": [-354.97, -354.97, -354.97], "F_ltv": [-304.3, -304.3, -304.3], "K": [-88.11, 23.85, 23.85], "R": [-72.66, -26.0, -22.14], "R_fail": [-49.41, 23.85, 23.85], "cum": {"S": -1672.51, "F": -1064.92, "F_ltv": -912.9, "K": -40.42, "R": -120.81, "R_fail": -1.71, "R_ev": -73.17}, "exit": {"S": -623.77, "F": -354.97, "K": 23.85, "R": -22.14}}, "base": {"S": [-513.75, -588.07, -642.32], "F": [-379.93, -379.93, -379.93], "F_ltv": [-316.58, -316.58, -316.58], "K": [-88.11, 23.85, 23.85], "R": [-55.8, 17.13, 39.47], "R_fail": [-40.97, 23.85, 23.85], "cum": {"S": -1744.13, "F": -1139.78, "F_ltv": -949.75, "K": -40.42, "R": 0.8, "R_fail": 6.72, "R_ev": 3.17}, "exit": {"S": -642.32, "F": -379.93, "K": 23.85, "R": 39.47}}, "bull": {"S": [-536.51, -605.98, -651.37], "F": [-401.37, -401.37, -401.37], "F_ltv": [-325.37, -325.37, -325.37], "K": [-88.11, 23.85, 23.85], "R": [-36.3, 64.35, 106.92], "R_fail": [-31.23, 23.85, 23.85], "cum": {"S": -1793.86, "F": -1204.12, "F_ltv": -976.1, "K": -40.42, "R": 134.97, "R_fail": 16.47, "R_ev": 87.57}, "exit": {"S": -651.37, "F": -401.37, "K": 23.85, "R": 106.92}}}, "ms": {"gap_R_S": 1744.94, "gap_R_F": 950.56, "gap_R_K": 41.22}, "dc": {"order_losses": 1200.44, "acquisition": 390.0, "overhead": 15.0, "tradedown": 178.09, "migration": -38.59, "total": 1744.94}, "tor": {"base": 5.73, "rows": [{"key": "T_RIDER", "label": "Rider pay per solo trip", "lo_in": 48, "hi_in": 32, "lo": 1.51, "hi": 9.95, "swing": 8.44}, {"key": "DOOR_FEE", "label": "Door fee outside Drops", "lo_in": 10, "hi_in": 30, "lo": 1.6, "hi": 9.86, "swing": 8.26}, {"key": "T_COMM", "label": "Base commission", "lo_in": 0.09, "hi_in": 0.15, "lo": 2.8, "hi": 8.65, "swing": 5.85}, {"key": "BATCH_SHARE", "label": "Door orders batched", "lo_in": 0.3, "hi_in": 0.8, "lo": 3.93, "hi": 6.93, "swing": 3.0}, {"key": "HOST_FEE", "label": "Drop host fee", "lo_in": 7, "hi_in": 2, "lo": 4.23, "hi": 6.73, "swing": 2.5}, {"key": "RUN_N", "label": "Orders per Drop run", "lo_in": 5, "hi_in": 14, "lo": 4.03, "hi": 6.21, "swing": 2.19}, {"key": "DROP_SHARE", "label": "Share of orders at Drops", "lo_in": 0.3, "hi_in": 0.7, "lo": 5.15, "hi": 6.31, "swing": 1.15}]}, "reg": {"coss_toing": 0.35, "coss_core": 2.1, "coss_toing_gov_basis": 1.74, "ka_fee": 0.5, "gst_on_door_fee": 3.05, "pct_gov_toing": 0.85, "pct_gov_core": 0.37}, "rid": {"solo_pay_hr": 80.0, "drop_pay_hr": 125.33, "solo_orders_hr": 2.0, "drop_orders_hr": 13.33, "drop_pay_per_run": 94.0}, "flip": {"T_RIDER": 42.38, "RUN_N": 5.51, "CANNIB": 0.26, "T_COMM": 0.11, "DROP_SHARE": 0.02, "DOOR_FEE": 16.64, "T_FEES_CUST": 10.54}, "A": {"T_AOV": 99.0, "T_COMM": 0.12, "T_FEES_CUST": 12.0, "T_RIDER": 40.0, "T_DISC": 4.0, "DROP_SHARE": 0.5, "BATCH_SHARE": 0.6, "RUN_N": 10, "HOST_FEE": 4.0, "DOOR_FEE": 20.0, "COMM_UP": 0.03, "ADS_TO": 0.03, "PASS_PRICE": 49.0, "CAC_PAID": 500.0, "NEW_TO_CAT": 0.67, "T_FREQ": 2.5, "T_RET": 0.85, "MIGRATE_12M": 0.15, "CANNIB": 0.2, "CANNIB_FENCE": 0.5, "CORE_GOV": 700.0, "CORE_EBITDA_PCT": 0.03, "CORE_CM_PCT": 0.08, "V0": 2.2, "S_VOL": [3.5, 5.0, 6.5], "F_VOL": [2.4, 2.4, 2.4], "R_VOL": [1.8, 2.8, 4.0], "S_ACQ": 150.0, "R_ACQ": 20.0, "P_DENSITY": 0.6, "RUN_MIN": 45.0, "KA_FEE_CAP": 0.5, "CAC_TOING": 60.0}};
const P = {"n_total": 0, "n_carts": 0, "n_toing_carts": 0};
const results=[];
{ const s = await figma.getNodeByIdAsync("2:5"); s.children.slice().forEach(c => c.remove());
const t = V.t, c = V.c;
const other = t.ins + t.coss + t.pg + t.sup + t.disc + t.tech;
const coreOther = c.coss + c.pg + c.sup + c.disc + c.other + 1 + 1;   // + insurance + tech
skeleton(s, 1, "2 / 8", "B1 · UNIT ECONOMICS OF A TOING ORDER TODAY", 700,
  "A ₹99 Toing order loses about " + r1(t.contrib).replace("−", "") + " before marketing, because a ₹" + t.rider.toFixed(0) + " rider trip sits on ₹" + t.rev.toFixed(0) + " of Swiggy revenue; a ₹700 order clears ₹" + c.ebitda.toFixed(0) + " of EBITDA on the same trip",
  "Source: NSBC case (C01, C04 to C07) | Swiggy Q1 FY27 letter (food CM 7.6% of GOV, segment results) | MediaNama (Sep 2025): ₹12 platform fee, no delivery or packaging fee | Inc42 and Angel One (Sep 2025): 18% GST on delivery under sec 9(5) | Assumptions A01 to A14 (appendix)");
// A1 hero waterfall
const a1 = panel(s, 64, 318, 1000, 350, "WHERE THE CUSTOMER'S ₹" + Math.round(t.cust) + " GOES, AND WHAT SWIGGY KEEPS (₹ PER ORDER)");
waterfall(a1, 16, 56, 968, 290, [
  { label: "Customer pays", value: t.cust, kind: "total", color: C.primaryDeep, text: "₹" + t.cust.toFixed(0) },
  { label: "Restaurant keeps", value: -t.rest_keeps, color: C.surface, text: "−" + t.rest_keeps.toFixed(0) },
  { label: "GST", value: -t.gov_tax, color: C.surface, text: "−" + t.gov_tax.toFixed(1) },
  { label: "Swiggy revenue", value: t.rev, kind: "total", color: C.orange, text: "₹" + t.rev.toFixed(0) },
  { label: "Rider", value: -t.rider, color: C.alert, text: "−" + t.rider.toFixed(0), textColor: C.alert },
  { label: "Other costs", value: -other, color: C.alert, text: "−" + other.toFixed(1), textColor: C.alert, below: true },
  { label: "Contri-bution", value: t.contrib, kind: "total", color: C.alert, text: n1(t.contrib), textColor: C.alert, below: true }],
  { min: -60, max: 125, labelH: 62 });
// A2 side-by-side table
const a2 = panel(s, 1088, 318, 768, 350, "₹99 TOING ORDER VS ₹700 CORE ORDER");
addTable(a2, 16, 60, [320, 200, 216], ["Per order, ₹", "Toing ₹99", "Core ₹700"], [
  ["Swiggy revenue", t.rev.toFixed(1), c.rev.toFixed(1)],
  ["Rider pay", n1(-t.rider), n1(-c.rider)],
  ["Other variable costs", n1(-other), n1(-coreOther)],
  ["Contribution", n1(t.contrib), n1p(c.cm)],
  ["Overheads (core)", "n/a", n1(-c.ovh)],
  ["Adj. EBITDA", "below " + n1(t.contrib), n1p(c.ebitda) + " (3.1%)"],
  ["Rider as % of basket", Math.round(t.rider_pct_gov) + "%", Math.round(c.rider_pct_gov) + "%"]],
  { rowH: 34, headerH: 40, name: "TABLE: toing vs core", boldCols: [], align: ["LEFT", "RIGHT", "RIGHT"],
    cellColor: (r, col) => (col === 1 && (r === 1 || r === 2 || r === 3)) ? C.alert : (col === 2 && (r === 3 || r === 5)) ? C.good : null });
// Formula strip
formulaBox(s, 64, 684, 1792, 60, "Contribution per order = commission + platform fee net of GST + ads − rider pay − insurance − CoSS − payments − support and refunds − coupons − tech", { chip: "FORMULA" });
// Row B
const b1 = panel(s, 64, 760, 560, 176, "WHO KEEPS THE ₹" + Math.round(t.cust));
donut(b1, 90, 116, 54, [{ value: t.rest_keeps, color: C.orange }, { value: t.gov_tax, color: C.surface }, { value: t.rev, color: C.primary }], 0.5);
[["Restaurant ₹" + t.rest_keeps.toFixed(0) + " (" + Math.round(100 * t.rest_keeps / t.cust) + "%)", C.orange],
 ["GST ₹" + t.gov_tax.toFixed(1) + " (" + Math.round(100 * t.gov_tax / t.cust) + "%)", C.surface],
 ["Swiggy ₹" + t.rev.toFixed(0) + " (" + Math.round(100 * t.rev / t.cust) + "%)", C.primary]
].forEach((l, i) => { addRect(b1, 170, 66 + i * 34 + 5, 18, 18, l[1], C.ink, 1.5); TL(b1, 196, 66 + i * 34, 22, l[0], { family: "Inter", style: "Semi Bold", maxW: 350 }); });
const b2 = panel(s, 648, 760, 600, 176, "RIDER PAY AS A SHARE OF THE BASKET");
hBars(b2, 16, 60, 568, [
  { label: "₹99 Toing", value: t.rider_pct_gov, color: C.alert, text: Math.round(t.rider_pct_gov) + "%" },
  { label: "₹149 Toing", value: V.t149.rider_pct_gov, color: C.orange, text: Math.round(V.t149.rider_pct_gov) + "%" },
  { label: "₹700 core", value: c.rider_pct_gov, color: C.primaryDeep, text: Math.round(c.rider_pct_gov) + "%" }],
  { labelW: 150, rowH: 36, barH: 26, valueW: 70, max: 45 });
const b3 = panel(s, 1272, 760, 584, 176, "CHECK AGAINST SWIGGY'S BOOKS");
RT(b3, 16, 60, 552, 22, [["Platform Innovations lost ₹131 Cr in Q1 FY27. ", ""], ["Toing's share (est.): " + cr(-V.tri.t_loss_q), "B"], [" from ~" + V.tri.orders_lakh_day.toFixed(1) + " lakh orders a day: ", ""], [cr(-V.tri.contrib_loss_q) + " per-order losses", "R"], [" + " + cr(-V.tri.acq_q) + " installs", ""]]);
soWhat(s, 948, 82, [["A ₹99 order needs a fuller trip, not a cheaper rider: ", "A"], ["at ₹" + t.rider.toFixed(0) + " a trip the rider alone takes " + Math.round(t.rider_pct_gov) + "% of the basket, so the fix must change how many meals ride together", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }

return {results,warnings};
