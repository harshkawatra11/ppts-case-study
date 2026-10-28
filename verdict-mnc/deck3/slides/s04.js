{ const s = await figma.getNodeByIdAsync("S4");
skeleton3(s, [3, 4], "3 / 4", "3 FINANCIAL AND RISK CASE", 520,
  "Year-2 losses fall from ₹9.2 Cr to ₹0.8 Cr; EBITDA breaks even in month 21 with cash never below ₹2.9 Cr",
  "Source: Verdict 2.0 case (2025 revenue, margins, cash) | research sections 18 to 21 | assumptions A08 to A25 | model " + V.hash + ", 12 scenarios",
  RIBC);

// A1 EBITDA bridge waterfall, 10 bars
const a1 = panel(s, 64, 318, 1180, 322, "EBITDA BRIDGE: 2025 TO THE MONTH 24 RUN-RATE (₹ CR A YEAR)");
const splitSum = V.acquisition_total;
const wsteps = [
  { kind: "total", value: V.bridge[0][1], color: C.primaryDeep, text: n1p(V.bridge[0][1]), textColor: C.ink, label: "2025" },
  { value: V.bridge[1][1], color: C.alert, text: n1p(V.bridge[1][1]), label: "Costs up" },
  { value: V.bridge[2][1], color: C.good, text: n1p(V.bridge[2][1]), label: "Brand cut" },
  { value: V.bridge[3][1], color: C.good, text: n1p(V.bridge[3][1]), label: "Prune paid" },
  { value: V.bridge[4][1], color: C.good, text: n1p(V.bridge[4][1]), label: "Opex" },
  { value: V.bridge[5][1], color: C.good, text: n1p(V.bridge[5][1]), label: "Margin" },
  { value: V.bridge[6][1], color: C.good, text: n1p(V.bridge[6][1]), label: "Retain" },
  { value: splitSum, color: C.good, text: n1p(splitSum), label: "Cheaper CAC" },
  { value: V.bridge[10][1], color: C.good, text: n1p(V.bridge[10][1]), label: "Ready to eat" },
  { kind: "total", value: V.bridge[11][1], color: C.primaryDeep, text: n1p(V.bridge[11][1]), textColor: C.ink, label: "Month 24" }
];
waterfall(a1, 16, 54, 1148, 232, wsteps, { min: -12, max: 1.5, labelH: 56, barW: 90 });
fine(a1, 16, 290, 1148, "Cheaper CAC: referral + win-back + conversion (split at right)");

// A2 moneyshot: break-even, base case
const a2 = panel(s, 1268, 318, 588, 322, "BREAK-EVEN, BASE CASE", { layered: true, fill: C.primaryDeep, titleColor: C.accent });
const be = TL(a2, 16, 48, 54, V.be, { family: "Poppins", style: "ExtraBold", color: C.white, maxW: 556 });
be.name = "MONEYSHOT";
kv(a2, 16, 133, "₹" + V.mincash + " Cr", "lowest cash, month " + V.minm, { numW: 150, w: 320, size: 24, color: C.accent, textColor: C.white, dy: 4 });
kv(a2, 16, 171, "₹0", "new funding needed", { numW: 100, w: 260, size: 24, color: C.accent, textColor: C.white, dy: 4 });
T(a2, 16, 209, 556, 22, "The ₹" + splitSum.toFixed(2) + " Cr acquisition step (parts rounded):", { family: "Inter", style: "Bold", color: C.accent });
stackH(a2, 16, 238, 556, 34, V.split.map(([label, value], i) => ({ value, color: [C.primary, C.orange, C.tint][i], text: "", textColor: i === 2 ? C.ink : C.white })), { minInside: 60 });
[["Referral 2.21",16],["Win-back 0.50",202],["Web 1.07",388]].forEach(([txt,x])=>T(a2,x,278,180,22,txt,{family:"Inter",style:"Bold",color:C.white}));

// B1 three scenarios table
const b1 = panel(s, 64, 654, 640, 292, "BASE, BEAR + RESPONSE, BULL");
const measureShort = { "Gross margin": "Margin", "Marketing %": "Marketing", "Year-end cash": "Cash", "M3 retention": "Retention", "LTV to CAC": "LTV:CAC" };
const scenRows = V.scen.map(row => [measureShort[row[0]] || row[0], ...row.slice(1)]);
addTable(b1, 5, 56, [155, 95, 95, 95, 95, 95], ["Measure", "2025", "Y1", "Y2", "Bear", "Bull"], scenRows, { rowH: 27, headerH: 34, cellSize: 22, name: "TABLE: scenarios" });

// B2 cash by scenario
const b2 = panel(s, 728, 654, 500, 292, "CASH BY SCENARIO, ₹ CR");
const xl2 = ["M0", "", "M6", "", "M12", "", "M18", "", "M24"];
const g4 = lineChart(b2, 16, 56, 468, 140, [
  { values: V.cashq.base, color: C.primary },
  { values: V.cashq.core, color: C.good },
  { values: V.cashq.bear, color: C.alert, dash: [8, 5] },
  { values: V.cashq.bear_cont, color: C.orange },
  { values: V.cashq.bull, color: C.primaryDeep }
], xl2, { yMin: -10, yMax: 16, yTicks: [], padL: 40, padR: 16, zeroLine: true });
addLine(b2, g4.L, g4.Y(7), g4.R, g4.Y(7), C.ink, 2, [6, 4]);
TL(b2,210,54,22,"M12 gate: ₹7 Cr",{family:"Inter",style:"Bold"});
[{color:C.primary,label:"Base",x:16},{color:C.good,label:"Core",x:150},{color:C.primaryDeep,label:"Bull",x:290}].forEach(it=>legendV(b2,it.x,204,[it],{w:96}));
legendV(b2,16,244,[{color:C.alert,label:"Bear: M20 zero"}],{w:214});
legendV(b2,264,244,[{color:C.orange,label:"Bear + response"}],{w:206});

// B3 risk heatmap + mitigations
const b3 = panel(s, 1252, 654, 604, 292, "RISK COUNTS: SKIPS RATE HIGHEST");
const cellMap = {};
V.risk.forEach(([id, p, imp]) => { const k = imp + "-" + p; cellMap[k] = cellMap[k] ? cellMap[k] + "," + id : String(id); });
const rowsI = [5, 4, 3, 2, 1], colsP = [1, 2, 3, 4, 5];
const gridV = rowsI.map(imp => colsP.map(p => imp * p));
TL(b3,16,55,22,"P → | I ↓",{family:"Inter",style:"Bold"});
heatmap(b3, 16, 86, rowsI.map(String), colsP.map(String), gridV,
  { labelW: 38, colW: 36, rowH: 32, headH: 32, scale: HR, min: 1, max: 25,
    levels: v => v >= 15 ? 4 : v >= 10 ? 3 : v >= 6 ? 2 : v >= 3 ? 1 : 0,
    fmt: (v, i, j) => { const ids = cellMap[rowsI[i] + "-" + colsP[j]]; if (!ids) return ""; return String(ids.split(",").length); },
    name: "TABLE: risk grid" });
let by = 56;
const bitems = [[4, "Skips over 6% (2 months): tighten the floor"], [1, "Referral under 15% (M6): raise the reward"], [5, "Margin under 32% (M9): packaging first"], [10, "Cash under ₹7 Cr (M12): pull the contingency"]];
bitems.forEach(([id, txt]) => {
  addBadge(b3, 242, by, 36, id, C.alert, C.white);
  const tt = T(b3, 242 + 36 + 14, by + 2, 310, 22, txt, { family: "Inter", style: "Semi Bold" });
  by += Math.max(36, tt.height) + 6;
});

soWhat(s, 958, 72, [
  ["A break-even plan, not a profit plan: ", "A"],
  ["every single downside turns the month 24 run-rate negative, so the month 7 contingency and the stop triggers are binding, not advisory.", "W"]
]);

results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
