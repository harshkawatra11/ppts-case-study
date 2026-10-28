{ const s = await figma.getNodeByIdAsync("S5"); const D = V.s5;
hdr(s, 5, D.finding, D.source);
const a1 = panel(s, 64, 224, 1040, 350, "SIX WORKSTREAMS, PACED SO PEOPLE ALWAYS HAVE SOMEWHERE TO GO");
gantt(a1, 16, 60, 300, 59, ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12"], [
  { label: "Stop the bleed", bars: [{ s: 0, e: 3, color: C.alert, text: "Freeze hires" }] }, { label: "Price by complexity", bars: [{ s: 1, e: 4, text: "₹48 and ₹31" }] },
  { label: "AI engine, clean files", bars: [{ s: 2, e: 9, text: "20% to 100% of volume" }] }, { label: "Hard-file desk", bars: [{ s: 2, e: 12, color: C.good, text: "AI-assisted exception team" }] },
  { label: "AI data services", bars: [{ s: 1, e: 12, color: C.rival, text: "30 to 400 people" }] }, { label: "Seats and footprint", bars: [{ s: 3, e: 8, color: C.orange, text: "Seats cut by half", textColor: C.ink }] }], { headH: 40, rowH: 40, name: "TABLE: plan", corner: "Workstream" });
const a2 = panel(s, 1120, 224, 736, 350, "WHERE THE ₹15 CR BUDGET GOES");
const BC = [C.primary, C.rival, C.orange, C.tint, C.accent], BT = [C.white, C.white, C.ink, C.ink, C.ink];
stackH(a2, 16, 62, 704, 44, D.budget.map((b, i) => ({ value: b.value, color: BC[i], text: String(b.value), textColor: BT[i] })), { minInside: 70 });
addTable(a2, 16, 118, [270, 84, 350], ["Use", "₹ Cr", "What it buys"], D.budget_rows, { headerH: 38, rowH: 36, name: "TABLE: budget", align: ["LEFT", "RIGHT", "LEFT"], rowFills: [null, null, null, null, C.amberTint] });
const b1 = panel(s, 64, 588, 620, 366, "CASH IN THREE SCENARIOS (₹ CR)");
const lc = lineChart(b1, 8, 60, 604, 262, [{ values: D.cash.bear, color: C.alert }, { values: D.cash.bull, color: C.good }, { values: D.cash.base, color: C.primary }],
  ["0", "", "", "3", "", "", "6", "", "", "9", "", "", "12", "", "", "15", "", "", "18"], { yMin: -5, yMax: 45, yTicks: [0, 15, 30, 45], padL: 56, padR: 24 });
floorLine(b1, lc, "₹15 Cr covenant");
legend(b1, 16, 328, [[C.primary, "Base"], [C.good, "Bull"], [C.alert, "Bear"]]);
const b2 = panel(s, 700, 588, 600, 366, "THREE SCENARIOS, NAMED ASSUMPTIONS");
addTable(b2, 16, 62, [220, 116, 116, 116], ["Line", "Bear", "Base", "Bull"], D.scen, { headerH: 38, rowH: 36, name: "TABLE: scenarios", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"], rowFills: [null, null, null, C.tint, C.tint, C.tint] });
fine(b2, 16, 322, 568, "Labelling in ₹ a month. Cash and EBITDA run-rate in ₹ Cr at month 12.");
const b3 = panel(s, 1316, 588, 540, 366, "FOUR CASH GATES");
addTable(b3, 16, 62, [90, 230, 188], ["Gate", "Test", "If missed"], D.gates, { headerH: 40, rowH: 52, name: "TABLE: gates", align: ["LEFT", "LEFT", "LEFT"] });
fine(b3, 16, 318, 508, D.gate_note + " M: month.");
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
