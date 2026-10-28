{ const s = await figma.getNodeByIdAsync("S5"); s.children.slice().forEach(c => c.remove());
const st = V.br.steps;
skeleton(s, 3, "4 / 8", "B2 · LEVERS THAT CHANGE THE ARITHMETIC", 640,
  "Seven levers take a ₹99 order from " + r1(V.br.start) + " to " + r1p(V.br.end) + "; pooled Drops and slot batching need dense orders, and three ask the customer to give something up",
  "Source: Team IdeaForge model (A17 to A26) | Swiggy Q1 FY27 letter (Instamart: ₹5 an order from densification) | IIFL (Aug 2022): Dunzo batching saved ₹8 to ₹10 an order | MediaNama (Mar 2026): Ownly ₹30 trip fee | Rider pay: base ₹20 to ₹35 per order plus distance (2026 partner guides)");
// A1 hero lever bridge
const a1 = panel(s, 64, 318, 1080, 332, "LEVER BRIDGE: CONTRIBUTION PER ₹99 ORDER, ₹ (BLENDED MIX, BASE)");
const short = ["Slot batching", "Pooled Drops", "Door fee", "Fixed menus", "Ad load", "Fewer coupons", "Toing Pass"];
const wsteps = [{ label: "Today", value: V.br.start, kind: "total", color: C.alert, text: n1(V.br.start), textColor: C.alert }]
  .concat(st.map((x, i) => ({ label: short[i], value: x.delta, color: i < 2 ? C.primary : C.orange, text: n1p(x.delta) })))
  .concat([{ label: "Rebuilt", value: V.br.end, kind: "total", color: C.good, text: n1p(V.br.end), textColor: C.good }]);
waterfall(a1, 16, 56, 1048, 272, wsteps, { min: -30, max: 12, labelH: 62, barW: 70 });
// A2 heatmap: who controls, what it costs
const a2 = panel(s, 1168, 318, 688, 332, "WHO CONTROLS EACH LEVER, AND AT WHAT COST");
const LBL = [["+7.2", "Swiggy", "Wait", "Some"], ["+9.7", "Mixed", "Walk", "Yes"], ["+8.3", "Cust.", "Pays", "No"], ["+3.4", "Rest.", "Choice", "No"], ["+1.5", "Rest.", "None", "No"], ["+2.0", "Mixed", "Coupons", "No"], ["+1.0", "Cust.", "None", "No"]];
st.forEach((x, i) => { LBL[i][0] = n1p(x.delta); });
const SC = [[4, 5, 3, 3], [5, 3, 2, 1], [5, 2, 1, 5], [3, 2, 3, 5], [2, 2, 5, 5], [2, 3, 4, 5], [1, 2, 5, 5]];
heatmap(a2, 16, 58, short, ["₹/order", "Owner", "CX cost", "Density"], SC,
  { labelW: 216, colW: 110, rowH: 33, headH: 40, scale: HG, min: 1, max: 5, levels: v => v - 1, fmt: (v, i, j) => LBL[i][j], name: "TABLE: lever heatmap", corner: "Lever" });
// Row B
dashedH(s, 64, 664, 1792);
const b1 = panel(s, 64, 678, 820, 256, "THE DENSITY CURVE: ₹ PER DROP ORDER BY MEALS PER RUN");
const xl = V.dens.map(d => (d.n % 2 === 1 ? String(d.n) : ""));
const g = lineChart(b1, 16, 58, 788, 190, [{ values: V.dens.map(d => d.contrib), color: C.primary, label: "Drop order" }], xl,
  { yMin: -25, yMax: 12, yTicks: [-20, -10, 0, 10], yFmt: v => (v > 0 ? "+" : "") + v, zeroLine: true, padL: 70, padR: 150 });
const nx = g.X(V.ns - 1);
addLine(b1, nx, g.Tp, nx, g.B, C.alert, 2.5, [8, 6]);
TL(b1, nx + 8, g.Y(-17), 22, "Breakeven " + V.ns.toFixed(1) + " meals", { family: "Poppins", style: "Bold", color: C.alert });
const tx = g.X(9), ty = g.Y(V.dens[9].contrib);
TL(b1, tx - 60, ty + 14, 22, n1p(V.dens[9].contrib) + " at 10", { family: "Poppins", style: "Bold", color: C.primary });
const b2 = panel(s, 908, 678, 460, 256, "RIDERS EARN MORE AN HOUR");
vBars(b2, 16, 50, 428, 150, [
  { label: "Solo trips", value: V.rid.solo_pay_hr, color: C.surface, text: "₹" + Math.round(V.rid.solo_pay_hr) + "/hr" },
  { label: "Drop runs", value: V.rid.drop_pay_hr, color: C.primary, text: "₹" + Math.round(V.rid.drop_pay_hr) + "/hr" }],
  { min: 0, max: 150, valSize: 22, labelH: 36, barW: 110 });
RT(b2, 16, 204, 428, 22, [[Math.round(V.rid.drop_orders_hr) + " meals an hour vs " + V.rid.solo_orders_hr.toFixed(0), "B"], [" at ₹" + (V.rid.drop_pay_per_run / V.A.RUN_N).toFixed(1) + " a meal", ""]]);
formulaBox(s, 1392, 678, 464, 256, "Rider cost per meal = trip pay × (1 + 0.15 × (n − 1)) ÷ n. At n = 10: ₹40 × 2.35 ÷ 10 = ₹9.4, plus a ₹4 Drop host fee. Breakeven at " + V.ns.toFixed(1) + " meals a run.", { chip: "FORMULA", chipW: 140 });
soWhat(s, 948, 82, [["Swiggy can switch on three levers itself this month. ", "A"], ["The two that need density decide where Toing lives: a Drop run must carry at least 4 meals, and 10 earns " + r1p(V.dens[9].contrib) + " a meal", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
