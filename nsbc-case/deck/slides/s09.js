{ const s = await figma.getNodeByIdAsync("S9"); s.children.slice().forEach(c => c.remove());
const F = V.flip, A = V.A, tr = V.tor.rows.slice(0, 5);
skeleton(s, 7, "8 / 8", "B5 · WHAT WOULD CHANGE OUR MIND", 620,
  "Three numbers would flip our call to a shutdown, and Swiggy sees each within 90 to 180 days: solo trip cost above ₹" + F.T_RIDER.toFixed(0) + ", Drop runs under " + F.RUN_N.toFixed(1) + " meals, or trade-down above " + Math.round(F.CANNIB * 100) + "%",
  "Source: Team IdeaForge model: flip points by bisection, tornado on blended contribution (A17 to A44) | Swiggy Q1 FY27 letter (contribution and EBITDA definitions) | Gates are set slightly inside the flip points so a miss triggers action before value is lost");
// A1: three flip cards
const flips = [["₹" + F.T_RIDER.toFixed(0), "Solo trip cost", "assumed ₹" + A.T_RIDER + "; seen in the payout ledger by day 90", A.T_RIDER, F.T_RIDER, 60],
  [F.RUN_N.toFixed(1), "Meals per Drop run", "assumed " + A.RUN_N + "; seen in dispatch logs by day 90", A.RUN_N, F.RUN_N, 12],
  [Math.round(F.CANNIB * 100) + "%", "Trade-down share", "assumed " + Math.round(A.CANNIB * 100) + "%; seen in a core-app holdout by day 180", A.CANNIB * 100, F.CANNIB * 100, 40]];
flips.forEach((f, i) => { const x = 64 + i * 384, w = 368;
  const c = layered(s, x, 318, w, 300, i === 1 ? C.tint : C.white, "CARD: flip " + (i + 1));
  addChip(c, 12, 12, 160, 40, "FLIP " + (i + 1), C.alert, C.white, 22);
  TL(c, 12, 58, 56, f[0], { family: "Poppins", style: "ExtraBold", color: C.alert, maxW: w - 24 });
  TL(c, 12, 142, 24, f[1], { color: C.primaryDeep, maxW: w - 24 });
  T(c, 12, 176, w - 24, 22, f[2]);
  gauge(c, 12, 232, w - 32, 22, f[3], f[5], f[4], { color: C.good }); TL(c, 12, 262, 22, "Dashed line = flip value", { family: "Inter", style: "Bold", maxW: w - 24 }); });
// A2: tornado
const a2 = panel(s, 1216, 318, 640, 300, "WHAT MOVES BLENDED CONTRIBUTION (₹/ORDER)");
tornado(a2, 16, 96, 608, tr.map(r => ({ label: r.label, lo: r.lo, hi: r.hi, loText: n1(r.lo), hiText: n1(r.hi) })), { base: V.tor.base, labelW: 330, rowH: 38, barH: 26, baseLabel: "Base " + n1p(V.tor.base) });
// Row B
dashedH(s, 64, 632, 1792);
const b1 = panel(s, 64, 644, 1180, 300, "12-MONTH ROADMAP (OCT 2026 TO SEP 2027)");
gantt(b1, 16, 56, 330, 208, ["Q4 2026", "Q1 2027", "Q2 2027", "Q3 2027"], [
  { label: "Door fee, batching, coupons", bars: [{ s: 0, e: 1, text: "Live in 30 days" }] },
  { label: "Freeze paid installs", bars: [{ s: 0, e: 4, color: C.primaryDeep, text: "₹20 Cr a year" }] },
  { label: "40 pilot Drop sites", bars: [{ s: 0.3, e: 1.6, color: C.orange, textColor: C.ink, text: "4 cities" }] },
  { label: "Fixed menus, Toing Pass", bars: [{ s: 1, e: 3, color: C.orange, textColor: C.ink, text: "15 kitchens" }] },
  { label: "Gates: month 3, 6, 12", bars: [], marks: [{ at: 1, color: C.accent }, { at: 2, color: C.alert }, { at: 4, color: C.good }] }],
  { rowH: 40, headH: 32, name: "TABLE: roadmap", corner: "Workstream" });
const b2 = panel(s, 1268, 644, 588, 292, "GATE SCORECARD");
addTable(b2, 16, 58, [186, 130, 130, 110], ["Metric", "M3", "M6", "M12"], [
  ["Meals per run", "4", "6", "8"],
  ["Contrib. ₹", "−10", "−5", "+3"],
  ["Trade-down", "n/a", "20%", "20%"],
  ["Lakh/day", "1.8", "2.2", "2.8"]],
  { rowH: 38, headerH: 40, name: "TABLE: gates", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"] });
RT(b2, 16, 246, 556, 22, [["Miss at M6: ", "R"], ["shutdown review; default is shut", ""]]);
soWhat(s, 948, 82, [["Therefore: ", "A"], ["keep Toing, stop paying for ₹99 trips, and let the month-6 gate decide. Rebuild is worth " + cr(V.ms.gap_R_S) + " over scaling it as it runs and " + crp(V.ms.gap_R_K) + " over a shutdown", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
