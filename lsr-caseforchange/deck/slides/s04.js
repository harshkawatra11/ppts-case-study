{ const s = await figma.getNodeByIdAsync("S4"); const D = V.s4;
hdr(s, 4, D.finding, D.source);
const m = layered(s, 64, 224, 500, 350, C.primaryDeep, "CARD: moneyshot");
addChip(m, 20, 18, 270, 44, "JOBS AT MONTH 12", C.accent, C.ink, 22);
nm(TL(m, 20, 64, 96, D.money, { family: "Poppins", style: "ExtraBold", color: C.accent }), "MONEYSHOT");
T(m, 20, 212, 460, 22, "of 2,400 people still employed, with no forced exit in the base case", { family: "Inter", style: "Bold", color: C.white });
RT(m, 20, 274, 460, 22, [["Lowest cash " + D.money2, "A"], [": " + D.money3, "W"]], { color: C.white });
const a2 = panel(s, 580, 224, 740, 350, "CASH UNDER EACH ROUTE (₹ CR)");
const lc = lineChart(a2, 8, 60, 724, 246, [{ values: D.cash.p3, color: C.rival, dash: [8, 6] }, { values: D.cash.p1, color: C.orange }, { values: D.cash.drift, color: C.alert }, { values: D.cash.setu, color: C.primary }],
  ["0", "", "", "3", "", "", "6", "", "", "9", "", "", "12"], { yMin: -12, yMax: 40, yTicks: [0, 15, 30], padL: 56, padR: 24, zeroLine: true });
floorLine(a2, lc, "₹15 Cr covenant");
legend(a2, 16, 312, [[C.primary, "Setu"], [C.alert, "Drift"], [C.orange, "Reskill everyone"], [C.rival, "Pivot"]]);
const a3 = panel(s, 1336, 224, 520, 350, "WHY NOT THE STANDARD ROUTES");
badgeList(a3, 16, 62, 488, D.why, { d: 40, pitch: 70, bg: C.alert });
const b1 = panel(s, 64, 588, 1130, 366, "FIVE ROUTES AND SETU ON SIX TESTS (1 WEAK, 5 STRONG)");
heatmap(b1, 16, 60, D.routes, D.crit.concat(["Score"]), D.scores, { labelW: 300, colW: 114, rowH: 40, headH: 44, scale: HG, min: 1, max: 5, corner: "Route", fmt: (v, i, j) => j === 6 ? v.toFixed(2) : String(v), name: "TABLE: routes" });
const b2 = panel(s, 1210, 588, 646, 366, "HOW THE SCORE IS BUILT, WHO AGREES");
formulaBox(b2, 16, 62, 614, 100, D.formula, { chip: "FORMULA", chipW: 140 });
RT(b2, 16, 174, 614, 22, [["Klarna, 2025: ", "B"], ["brought human agents back after an AI-only service lost quality.", ""]]);
RT(b2, 16, 238, 614, 22, [["NASSCOM, 2026: ", "B"], ["Indian providers are moving from headcount pricing to outcome pricing.", ""]]);
fine(b2, 16, 304, 614, "Runway, cash and jobs scores follow the model. Control, upside and speed are team judgement.");
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
