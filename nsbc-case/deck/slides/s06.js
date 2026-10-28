{ const s = await figma.getNodeByIdAsync("S6"); s.children.slice().forEach(c => c.remove());
const B = V.pa.base.cum, lo = V.pa.bear.cum, hi = V.pa.bull.cum, F = V.fn;
const rng = k => { const a = Math.min(lo[k], hi[k], B[k]), b = Math.max(lo[k], hi[k], B[k]); return fmtN(a) + " to " + (b > 0 ? "+" : "") + fmtN(b); };
skeleton(s, 4, "5 / 8", "B3 · SCALE, FUNNEL OR KILL: THE SAME FIVE TESTS", 780,
  "Scaling Toing as it runs costs " + cr(-B.S).replace("₹", "₹") + " over three years, and the funnel beats paid marketing only if " + Math.round(F.m_cac_12 * 100) + "% of users migrate within a year; Kill is cheap but ends at zero",
  "Source: Team IdeaForge model: paths, funnel and scoring (A27 to A42) | Swiggy Q1 FY27 letter (2 in 3 new Toing users new or dormant; food CM 7.6%) | Paid CAC range ₹400 to ₹900 from analyst estimates, tested across the full range | AISHE (graduation cadence, A31)");
// A1: 3-year result by path, symmetric
const a1 = panel(s, 64, 318, 700, 372, "3-YEAR RESULT BY PATH, ₹ CR (BASE)");
vBars(a1, 16, 54, 668, 256, [
  { label: "Scale as it runs", value: B.S, color: C.alert, text: fmtN(B.S) },
  { label: "Funnel", value: B.F, color: C.accent, text: fmtN(B.F) },
  { label: "Kill", value: B.K, color: C.surface, text: fmtN(B.K) },
  { label: "Rebuild (ours)", value: B.R, color: C.primary, text: (B.R >= 0 ? "+" : "") + fmtN(B.R) }],
  { min: -2300, max: 250, valSize: 22, labelH: 62 });
RT(a1, 16, 314, 668, 22, [["Bear to bull: ", "B"], ["Scale " + rng("S") + "; Funnel " + rng("F") + "; Kill " + fmtN(B.K) + "; Rebuild " + rng("R"), ""]]);
// A2: the funnel test
const a2 = panel(s, 788, 318, 1068, 372, "THE FUNNEL TEST: MIGRATION NEEDED WITHIN 12 MONTHS");
const xs = F.curve.map(p => p.cac), xl = xs.map((c, i) => (i % 3 === 0 && i < 9 ? "₹" + c : ""));
const g = lineChart(a2, 16, 54, 640, 310, [
  { values: F.curve.map(p => Math.min(480, p.m_at["0.33"])), color: C.alert, label: "1 in 3 new", labelDy: -24 },
  { values: F.curve.map(p => p.m_at["0.67"]), color: C.accent, label: "2 in 3 new", labelDy: -12 },
  { values: F.curve.map(p => p.m_at["1.0"]), color: C.primaryDeep, label: "All new", labelDy: 22 }],
  xl, { yMin: 0, yMax: 480, yTicks: [100, 200, 300, 400], yFmt: v => v + "%", padL: 80, padR: 150 });
addLine(a2, g.L, g.Y(100), g.R, g.Y(100), C.ink, 2.5, [10, 6]);
TL(a2, g.L + 10, g.Y(100) + 4, 22, "100%: every user migrates", { family: "Inter", style: "Bold" });
const cx = g.X(2); addLine(a2, cx, g.Tp, cx, g.B, C.primary, 2.5, [6, 5]);
TL(a2, cx + 8, g.Tp + 4, 22, "Paid CAC ₹" + V.A.CAC_PAID, { family: "Poppins", style: "Bold", color: C.primary });
addTable(a2, 672, 54, [264, 116], ["Per Toing user", "Base"], [
  ["Loss a month", "₹" + Math.round(F.loss_per_user_month)],
  ["Cost of a user, 1 yr", "₹" + Math.round(F.rows[0].cost_per_user)],
  ["Needed, CAC lens", Math.round(F.m_cac_12 * 100) + "%"],
  ["Needed, LTV lens", Math.round(F.m_ltv_12 * 100) + "%"],
  ["Likely (A31)", Math.round(V.A.MIGRATE_12M * 100) + "%"],
  ["Per incremental user", "₹" + fmtN(F.cost_per_incr_12m)]],
  { rowH: 34, headerH: 38, name: "TABLE: funnel", totalRow: ["x paid CAC", F.multiple_vs_cac.toFixed(1) + "x"], totalFill: C.alert,
    cellColor: (r, c) => (c === 1 && (r === 2 || r === 5)) ? C.alert : null });
// Row B
dashedH(s, 64, 704, 1792);
const b1 = panel(s, 64, 716, 1082, 222, "FIVE TESTS, SCORED 1 TO 5 (5 = BEST FOR SWIGGY)");
const SC = [[1, 1, 5, 2, 4], [2, 2, 4, 2, 5], [4, 5, 1, 5, 5], [5, 4, 4, 4, 3]], W = [0.35, 0.20, 0.20, 0.15, 0.10];
const tot = SC.map(r => r.reduce((a, v, j) => a + v * W[j], 0));
heatmap(b1, 16, 54, ["Scale as it runs", "Funnel", "Kill", "Rebuild (ours)"], ["Value", "Downside", "Customer", "Fence", "Speed", "Score"],
  SC.map((r, i) => r.concat([tot[i]])), { labelW: 282, colW: 128, rowH: 32, headH: 34, scale: HG, min: 1, max: 5,
    levels: v => Math.max(0, Math.min(4, Math.round(v) - 1)), fmt: (v, i, j) => (j === 5 ? v.toFixed(2) : String(v)), name: "TABLE: option scores", corner: "Path" });
formulaBox(s, 1170, 716, 686, 96, "Score = 0.35 × value + 0.20 × downside + 0.20 × customer + 0.15 × fence + 0.10 × speed", { chip: "WEIGHTS", chipW: 140 });
const cc = layered(s, 1170, 826, 686, 112, C.alertTint, "CARD: conclusively");
RT(cc, 16, 12, 654, 22, [["Conclusively: ", "R"], ["Swiggy should stop paying for ₹99 trips. Scale and Funnel fail on value; Kill passes on value but gives up the customer and the Drops option", ""]]);
soWhat(s, 948, 82, [["The funnel loses by construction: ", "A"], ["even if every Toing user were new to Swiggy, " + F.grid_m_cac_pct["500"]["1.0"] + "% would need to become ₹700-type customers within a year to beat ₹" + V.A.CAC_PAID + " of paid marketing", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
