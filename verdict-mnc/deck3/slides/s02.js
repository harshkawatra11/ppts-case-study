{ const s = await figma.getNodeByIdAsync("S2");
skeleton3(s, [0,1], "1 / 4", "1 DIAGNOSIS AND EVALUATION", 520,
  "₹7,000 CAC buys only ₹2,281 gross profit from early leavers; all three proposals exhaust cash by month 16",
  "Source: Verdict 2.0 case sections 1 to 5 | research sections 3 to 8 and 13 to 16 | 8,052 Play Store reviews of six meal-kit apps, Jan 2024 to Sep 2026 | model " + V.hash,
  RIBC);

// A1 issue tree: where the margin went
const a1 = panel(s, 64, 318, 700, 322, "WHERE THE MARGIN WENT, 2022 TO 2025");
issueTree(a1, 16, 60, 668, 236,
  "EBITDA −12% to −22% of revenue",
  [
    { title: "Gross margin −7 pts", fill: C.alertTint, color: C.alert, leaves: ["6% waste", "68% kitchens"] },
    { title: "Marketing +8 pts", fill: C.alertTint, color: C.alert, leaves: ["CAC: ₹8.31 Cr", "Gap: ₹4.29 Cr"] },
    { title: "Overheads −5 pts", fill: C.goodTint, color: C.good, leaves: ["Bright spot"] }
  ], { branchH: 70 });
fine(a1, 16, 290, 668, "Candidate causes, research section 8.1");

// A2 line chart, gross margin vs marketing, with in-chart callout
const a2 = panel(s, 788, 318, 520, 322, "MARGIN FELL AS MARKETING ROSE");
lineChart(a2, 16, 56, 488, 150,
  [{ values: V.gm, color: C.primary }, { values: V.mk, color: C.alert }],
  ["2022", "2023", "2024", "2025"],
  { yMin: 15, yMax: 45, yTicks: [20, 30, 40], yFmt: v => v + "%", padL: 46, padR: 110, zeroLine: false });
const cal2 = addFrame(a2, 118, 64, 372, 88, C.alertTint, C.ink, 2, "CARD: callout margin");
RT(cal2, 14, 8, 344, 22, [["Each new ₹1 of revenue cost ", ""], [V.dmk.join(", "), "R"], [" of marketing", ""]]);
legendV(a2, 16, 208, [
  { color: C.primary, label: "Gross margin: " + V.gm[0] + "% down to " + V.gm[3] + "%" },
  { color: C.alert, label: "Marketing: " + V.mk[0] + "% up to " + V.mk[3] + "%" }
], { pitch: 30, w: 460 });

// A3 waffle + legend + number pairs + caption
const a3 = panel(s, 1332, 318, 524, 322, "100 SIGN-UPS, ONE YEAR LATER");
waffle(a3, 16, 56, 10, 14, 3, [
  { n: V.wf[0], color: C.alert }, { n: V.wf[1], color: C.orange }, { n: V.wf[2], color: C.tint }, { n: V.wf[3], color: C.primary }
]);
legendV(a3, 200, 56, [
  { color: C.alert, label: "Gone by month 3: " + V.wf[0] },
  { color: C.orange, label: "Months 4-6: " + V.wf[1] + " gone" },
  { color: C.tint, label: "Months 7-12: " + V.wf[2] + " gone" },
  { color: C.primary, label: "Still ordering: " + V.wf[3] }
], { pitch: 30, w: 290 });
kv(a3, 16, 230, V.unit.leaver_loss, "each leaver", { numW: 110, w: 100, size: 24, dy: 6 });
kv(a3, 250, 230, V.unit.stayer_ratio, "each stayer", { numW: 80, w: 160, size: 24, dy: 6 });
fine(a3, 16, 290, 492, "Payback M" + V.pay[0] + "; " + V.pay[1] + " of 100 remain");

// B1 table: stated exits vs review mining vs fix
const b1 = panel(s, 64, 654, 500, 292, "A ANSWERS 63% OF STATED EXITS");
const reasons = ["Rigid to skip", "Too expensive", "Same menu", "Food waste", "Delivery"];
addTable(b1, 10, 56, [205, 85, 110, 80], ["Reason", "Case", "Review", "Fix"],
  reasons.map((r, i) => [r, V.why[i] + "%", V.rv[i] + "%", V.fix[i]]),
  { rowH: 32, headerH: 32, cellSize: 22, name: "TABLE: exits" });
fine(b1, 16, 254, 468, "2,435 low-star reviews; six apps");

// B2 transposed scorecard heat grid
const b2 = panel(s, 588, 654, 520, 292, "AS WRITTEN, A SCORES LOWEST");
const metrics = ["Growth (20%)", "Profit (30%)", "Cash (30%)", "Risk (20%)", "Score"];
const scoreVals = [0, 1, 2, 3].map(j => V.score[j]);
const grid = [0, 1, 2, 3, 4].map(i => scoreVals.map(row => i === 4 ? parseFloat(row[4]) : row[i]));
heatmap(b2, 16, 56, metrics, ["A", "B", "C", "Ours"], grid,
  {
    labelW: 190, colW: 72, rowH: 34, headH: 34, scale: HG, min: 1, max: 5,
    fmt: (v, i, j) => i === 4 ? scoreVals[j][4] : String(v), name: "TABLE: scorecard"
  });
fine(b2, 16, 258, 486, "Ours = A rebuilt. 1 low, 5 high");

// B3 quote card + logo
const b3 = panel(s, 1132, 654, 300, 292, "WHAT LEAVERS SAY");
const qc = layered(b3, 4, 40, 292, 250, C.white, "CARD: quote");
const qt = T(qc, 12, 10, 266, 22, "“no option to cancel subscription in the app.”", { family: "Inter", style: "Semi Bold" });
fine(qc, 12, 10 + qt.height + 6, 266, "HelloFresh, Play Store, 1 star, Aug 2026");

// B4 cash lines, every path as written hits zero
const b4 = panel(s, 1456, 654, 400, 292, "EVERY PATH HITS ZERO");
const xl4 = ["M0", "", "M6", "", "M12", "", "M18", "", "M24"];
lineChart(b4, 16, 56, 368, 110,
  [
    { values: V.cashq.drift, color: C.alert },
    { values: V.cashq.A_written, color: C.primary },
    { values: V.cashq.B_written, color: C.orange },
    { values: V.cashq.C_written, color: C.primaryDeep }
  ], xl4, { yMin: -10, yMax: 16, yTicks: [], yFmt: v => String(v), padL: 40, padR: 16, zeroLine: true });
legendV(b4, 16, 192, [
  { color: C.alert, label: "No decision M" + V.zero.drift + ", A M" + V.zero.A },
  { color: C.orange, label: "B M" + V.zero.B + ", C M" + V.zero.C }
], { pitch: 28, w: 320 });

soWhat(s, 958, 72, [
  ["The leak is retention, not demand. ", "A"],
  ["A as written fixes the right problem too weakly to score above 2.80, while B and C buy growth on a base that still loses 45% of sign-ups in three months.", "W"]
]);

results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
