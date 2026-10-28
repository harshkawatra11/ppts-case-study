// ===== SETU EXTRAS v1 =====
function teamTable(p, x, y, cw) { cw = cw || [300, 660, 160]; const X = [0, cw[0], cw[0] + cw[1]], rh = 76, hh = 50, tw = cw[0] + cw[1] + cw[2], rows = V.team.rows, nr = rows.length;
  const t = addFrame(p, x, y, tw, hh + rh * nr, C.white, C.ink, 2, "TABLE: team");
  const h = addFrame(t, 0, 0, tw, hh, C.tint, C.ink, 2, "HEAD");
  ["Team Members", "Institution", "Role"].forEach((l, i) => addText(h, "Poppins", "Bold", 22, C.ink, l, X[i] + 16, 0, cw[i] - 24, hh, "LEFT", "CENTER"));
  rows.forEach((m, i) => { const r = addFrame(t, 0, hh + rh * i, tw, rh, i % 2 ? C.surfaceAlt : C.white, C.ink, 2, "ROW");
    m.forEach((v, j) => addText(r, "Inter", j === 0 ? "Bold" : "Semi Bold", 22, C.ink, v, X[j] + 16, 0, cw[j] - 24, rh, "LEFT", "CENTER")); });
  [cw[0], cw[0] + cw[1]].forEach(vx => addRect(t, vx - 1, 0, 2, hh + rh * nr, C.ink)); return t; }
const RIB5 = { labels: ["DIAGNOSE", "QUANTIFY", "CHOOSE", "PLAN", "PEOPLE AND RISKS"], widths: [196, 196, 166, 134, 316] };
const RIBA = { labels: ["APPENDIX", "ASSUMPTIONS", "SENSITIVITY", "ABBREVIATIONS"], widths: [196, 250, 236, 286] };
const TOTAL = 8;
function tplClear(s) { s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.cream }]; }
function head(s, n) { const rb = n === 7 ? RIBA : RIB5; const act = n === 7 ? 0 : (n >= 2 && n <= 6 ? n - 2 : -1);
  const endX = buildRibbon(s, act, rb.labels, rb.widths, 64, 36, 56); addWireH(s, endX - 10, 1730, 64, C.ink, 2.5);
  addChip(s, 1730, 36, 126, 56, "0" + n + " / 0" + TOTAL, C.primaryDeep, C.white, 24); }
function finding(s, y, text) { const f = layered(s, 64, y, 1792, 92, C.white, "CARD: finding");
  addChip(f, 16, 24, 150, 44, "FINDING", C.primary, C.white, 22);
  const t = addText(f, "Poppins", "Bold", 28, C.ink, text, 186, 0, 1590, 80, "LEFT", undefined, true); t.name = "HEADLINE";
  while (t.height > 86 && t.fontSize > 24) { t.fontSize = t.fontSize - 1; }
  if (t.height > 86) warnings.push("finding over 2 lines: " + text.slice(0, 40));
  t.y = Math.max(3, (92 - t.height) / 2); return f; }
function hdr(s, n, findingText, source) { tplClear(s); head(s, n); finding(s, 112, findingText);
  const src = addText(s, "Inter", "Semi Bold", 14, C.primary, source, 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE"; return 224; }
function legend(p, x, y, items, o) { o = o || {}; let cx = x; items.forEach(it => { addRect(p, cx, y + 6, 20, 20, it[0], C.ink, 1.5);
  const t = TL(p, cx + 28, y, 22, it[1], { family: "Inter", style: "Bold" }); cx += 28 + t.width + (o.gap || 22); }); return cx; }
function mapNode(p, x, y, w, h, num, title, sub, o) { o = o || {}; const f = layered(p, x, y, w, h, o.fill || C.white, "CARD: node " + title);
  addBadge(f, 10, 9, 36, num, o.badge || C.primary, C.white); TL(f, 54, 8, 22, title, { color: o.titleColor || C.primary, maxW: w - 62 });
  TB(f, 12, 48, w - 24, h - 52, 22, sub); return f; }
// Fine print: abbreviations and method notes, the only content text allowed under 22pt besides SOURCE and BIBLIO.
function fine(p, x, y, w, text, size) { const t = addText(p, "Inter", "Semi Bold", size || 16, C.ink, text, x, y, w, 20, "LEFT", undefined, true); t.name = "FINEPRINT"; return t; }
function floorLine(p, lc, label) { addLine(p, lc.L, lc.Y(15), lc.R, lc.Y(15), C.ink, 3, [10, 6]);
  TL(p, lc.L + 10, lc.Y(15) + 6, 22, label, { family: "Inter", style: "Bold" }); }
// ===== END SETU EXTRAS =====
