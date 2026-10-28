{ const s = await figma.getNodeByIdAsync("S6");
skeleton3(s, 0, "A1", "APPENDIX 1: MARKET AND PRECEDENTS", 620,
  "Five dinner routes cap pricing; adjacent Indian food peers show scale, while Gousto reports a third profitable year",
  "Source: research sections 9 to 12 | IMARC, Ken Research, Technavio, GlobalData | company filings and press as listed in research Appendix A",
  RIBX);
// ===== band A =====
const a1 = panel(s, 64, 318, 560, 322, "SUBSTITUTES CAP THE PRICE");
hBars(a1, 16, 60, 520, V.forces.map(f => ({ label: f[0], value: f[1], text: f[2], color: f[0] === "Substitutes" ? C.alert : C.primary })), { labelW: 170, rowH: 38, barH: 26, valueW: 226, max: 5 });
fine(a1, 16, 270, 528, "Five forces: team judgement, section 10.1");
const a2 = panel(s, 648, 318, 600, 322, "WHERE EACH ROUTE SITS");
matrix2x2(a2, 16, 66, 560, 196, {
  xLabel: "More cooking effort", yLabel: "Higher subscription commitment",
  q: [null, null, null, null], tint: [0],
  pts: [
    { x: 0.08, y: 0.35, label: "Ten-minute food", color: C.alert },
    { x: 0.08, y: 0.82, label: "Order in", color: C.rival },
    { x: 0.85, y: 0.65, label: "Private label kit", color: C.tint, labelColor: C.ink, left: true },
    { x: 0.85, y: 0.18, label: "Cooking", color: C.good, left: true },
    { x: 0.85, y: 0.88, label: "HarvestBox", color: C.primary, r: 18, left: true }
  ]
});
fine(a2, 16, 284, 560, "Qualitative positions; research section 9");
const a3 = panel(s, 1272, 318, 584, 322, "DAILY ORDERS, MID-2026");
hBars(a3, 126, 56, 450, V.dark.map(([l, v]) => ({ label: "", value: v, text: String(v) })), { labelW: 20, rowH: 46, barH: 26, valueW: 90, max: 1000 });
const DK = { "Flipkart Minutes": "Flipkart" };
V.dark.forEach(([brand], i) => {
  if(["Instamart","BigBasket"].includes(brand)) {
    const b=addFrame(a3,16,57+i*46,140,44,C.white,C.ink,2,"BRAND: "+brand);
    addText(b,"Inter","Bold",22,C.ink,brand,2,0,136,44,"CENTER","CENTER");
  } else logoSlot(a3,16,57+i*46,96,44,DK[brand]||brand);
});
fine(a3, 16, 294, 552, "Daily orders, thousands");
// ===== dashed divider =====
dashedH(s, 64, 647, 1792);
// ===== band B =====
const b1 = panel(s, 64, 654, 560, 292, "FOUR REPORTS, FOUR MARKET SIZES");
const repRows = [["IMARC", "$6.2bn", "7.61%"], ["Ken Research", "$1.28bn", "16.40%"], ["Technavio", "$2.17bn", "28.8%"], ["GlobalData", "₹19,931.6m", "14.29%"]];
addTable(b1, 16, 56, [210, 160, 158], ["Report", "Size", "Growth"], repRows, { rowH: 42, headerH: 32, cellSize: 22 });
RT(b1, 16, 260, 528, 22, [["No single India size is used.", "B"]]);
const b2 = panel(s, 648, 654, 600, 292, "ADJACENT FOOD BRANDS, ₹ CR");
hBars(b2, 16, 56, 568, V.india.map(([l, v]) => ({ label: l, value: v, text: "₹" + v + " Cr", color: l === "HarvestBox" ? C.primary : C.surface })), { labelW: 240, rowH: 32, barH: 18, valueW: 140, max: 1420 });
// ===== b3: lightweight panel (saves title height for the taller precedent rows) =====
const b3 = addFrame(s, 1272, 654, 584, 292, C.white, C.ink, 2, "PANEL: GLOBAL PRECEDENTS");
TL(b3, 16, 8, 22, "GLOBAL PRECEDENTS", { family: "Poppins", style: "Bold", color: C.primary, maxW: 552 });
addRect(b3, 16, 36, 552, 2, C.ink);
const glob = [["Gousto", "£342m revenue, £45m EBITDA, 3rd profit year"], ["HelloFresh", "~€6.76bn revenue, 13.5% meal-kit margin"], ["Marley Spoon", "€330.1m revenue, 34.7% contribution margin"], ["Blue Apron", "~$1.9bn IPO value, sold for $103m"]];
const gt = addTable(b3, 16, 44, [120, 424], ["Brand", "What it shows"], glob.map(([n, f]) => ["", f]), { rowH: 53, headerH: 34, cellSize: 22 });
const grows = gt.children.filter(c => c.name === "ROW");
glob.forEach(([n], i) => logoSlot(grows[i], 10, 5, 96, 44, n));
soWhat(s, 958, 72, [["Substitution, not rivalry, sets the price ceiling: ", "A"], ["ten-minute food at ₹250 to ₹450 a meal and a " + V.pl + " private-label kit cap what a " + V.plans[1][0] + " box can charge, which is why the rebuilt plan adds a " + V.plans[0][0] + " entry tier.", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
