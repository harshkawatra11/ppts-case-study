{ const s = await figma.getNodeByIdAsync("S3");
hdr(s, 3, V.s2.finding, V.s2.source);
const a1 = panel(s, 64, 352, 560, 292, "₹7.08 LAKH CR EVADED IN 5 YEARS");
[[V.evasion5y, "evaded, FY21 to FY25"], [V.itc5y, "of it was ITC fraud"], [V.evasionCases, "evasion cases"], [V.taxpayers, "active taxpayers"]].forEach((k, i) => {
  const f = addFrame(a1, 16 + (i % 2) * 270, 62 + Math.floor(i / 2) * 112, 258, 104, i === 1 ? C.tint : C.surfaceAlt, C.ink, 1.5, "CELL");
  TL(f, 12, 6, 34, k[0], { family: "Poppins", style: "ExtraBold", color: i === 1 ? C.alert : C.primary, maxW: 234 }); T(f, 12, 64, 234, 22, k[1]); });
const a2 = panel(s, 640, 352, 600, 292, "DETECTED, ₹ LAKH CR, BY YEAR");
lineChart(a2, 16, 62, 568, 196, [{ values: V.trend.evasion, color: C.rival, label: "Evasion 2.23" }, { values: V.trend.itc, color: C.alert, label: "ITC 0.59" }], V.trend.labels, { yMin: 0, yMax: 2.6, yTicks: [1, 2], padL: 44, padR: 190 });
RT(a2, 16, 260, 568, 22, [["ITC fraud +62% in a year, ", "R"], ["2.4 times FY23", "B"]]);
const a3 = panel(s, 1256, 352, 600, 292, "WHY CREDIT LEAKS: 3 CAUSES, 1 GAP");
[106, 300, 494].forEach(x => addLine(a3, x, 126, 300, 150, C.ink, 2.5));
[["Supplier: late or wrong", 16], ["Timing: lands next period", 210], ["Books: rate, duplicate", 404]].forEach(q => { const f = addFrame(a3, q[1], 62, 180, 64, C.white, C.ink, 2, "CARD: cause"); TB(f, 6, 0, 168, 64, 22, q[0], { family: "Inter", style: "Bold", align: "CENTER" }); });
const hub = addFrame(a3, 190, 150, 220, 48, C.primaryDeep, C.ink, 2, "CARD: hub"); TB(hub, 6, 0, 208, 48, 22, "Credit leaks", { family: "Poppins", style: "Bold", color: C.white, align: "CENTER" });
addArrow(a3, 300, 198, 300, 220, C.ink, 3, 10);
const gap = addFrame(a3, 16, 220, 568, 56, C.tint, C.primary, 3, "CARD: gap"); TB(gap, 8, 0, 552, 56, 22, "No tool states which to fix first", { family: "Poppins", style: "Bold", color: C.primary, align: "CENTER" });
const b1 = panel(s, 64, 660, 700, 294, "TODAY'S TOOLS MATCH ROWS AND STOP THERE");
const cc = v => v === "Yes" ? C.good : (v === "Part" ? C.primary : (v === "No" ? C.alert : C.ink));
addTable(b1, 16, 62, [236, 108, 108, 108, 108], ["Tool", "Matches", "Rate", "Prices", "Ranks"], V.tools2, { rowH: 36, headerH: 40, name: "TABLE: tools", align: ["LEFT", "CENTER", "CENTER", "CENTER", "CENTER"], cellColor: (r, c) => c === 0 ? C.ink : cc(V.tools2[r][c]), boldCols: [1, 2, 3, 4] });
RT(b1, 16, 256, 668, 22, [["n/s: ", "B"], ["not stated on the vendor's public page", ""]]);
const b2 = panel(s, 780, 660, 520, 294, "WHO FEELS IT, AND WHEN");
heatmap(b2, 16, 62, ["Accounts", "CFO", "Supplier", "CA firm"], ["Bill", "Pay", "Return", "Notice"], [[4, 3, 5, 4], [1, 3, 4, 5], [2, 4, 3, 2], [2, 1, 5, 5]], { labelW: 136, colW: 88, rowH: 36, headH: 40, scale: HR, min: 1, max: 5, name: "TABLE: pain" });
T(b2, 16, 256, 488, 22, "Team reading of practitioner guides");
const b3 = panel(s, 1316, 660, 540, 294, "MATCHING STILL HURTS 37% OF MSMEs");
hBars(b3, 16, 66, 508, [{ label: V.matchPain[0][0], value: V.matchPain[0][1], color: C.orange, text: V.matchPain[0][1] + "%" }, { label: V.matchPain[1][0], value: V.matchPain[1][1], color: C.alert, text: V.matchPain[1][1] + "%" }], { labelW: 184, rowH: 48, barH: 30, valueW: 70, max: 70 });
RT(b3, 16, 176, 508, 22, [["Down from 64%, yet more than 1 in 3 remain. ", ""], ["6 days to fix, 7 to answer a notice", "B"]]);
soWhat(s, 966, 64, [["The gap: ", "A"], [V.s2.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
