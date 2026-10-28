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
