{ const s = await figma.getNodeByIdAsync("S2"); s.children.slice().forEach(c => c.remove());
const CUM = V.pa.base.cum;
skeleton(s, 0, "1 / 8", "EXECUTIVE SUMMARY: ONE CALL ON TOING", 600,
  "Keep Toing but stop paying for ₹99 trips: rebuild it around pooled Drops and slot batching, and grow it only where the trip pays for itself",
  "Source: NSBC case (C01 to C14) | Swiggy Q1 FY27 shareholder letter (Jul 2026) | MediaNama (Sep 2025; Aug 2026) | Storyboard18 citing CLSA and Sensor Tower (Sep 2026) | Team IdeaForge model and research document (appendix)");
// A1: the three options as written
const a1 = panel(s, 64, 318, 600, 410, "THE THREE OPTIONS, AS WRITTEN");
[["SCALE", "R", [["Loses ", ""], [cr(CUM.S) + " over three years", "R"], [" at today's trip cost; each ₹99 order erases the EBITDA of ", ""], [V.ratio.toFixed(1) + " ₹700 orders", "B"]]],
 ["FUNNEL", "R", [["Beats paid marketing only if ", ""], [Math.round(V.fn.m_cac_12 * 100) + "% of users", "R"], [" migrate within 12 months; at a likely 15% it costs ", ""], [V.fn.multiple_vs_cac.toFixed(1) + "x paid CAC", "B"]]],
 ["KILL", "A", [["Stops the burn at ", ""], [cr(CUM.K), "B"], [" but ends at zero and hands ", ""], [V.tri.orders_lakh_day.toFixed(1) + " lakh orders a day", "B"], [" to Rapido Ownly and Zomato", ""]]]
].forEach((o, i) => { const y = 66 + i * 112; ragChip(a1, 16, y + 4, 130, 40, o[0], o[1]); RT(a1, 160, y, 424, 22, o[2]); });
// A2: hero chart, 3-year result by path
const a2 = panel(s, 688, 318, 560, 410, "3-YEAR RESULT BY PATH, ₹ CR (BASE)");
vBars(a2, 20, 60, 520, 340, [
  { label: "Scale as it runs", value: CUM.S, color: C.alert, text: fmtN(CUM.S) },
  { label: "Funnel", value: CUM.F, color: C.accent, text: fmtN(CUM.F) },
  { label: "Kill", value: CUM.K, color: C.surface, text: fmtN(CUM.K) },
  { label: "Rebuild (ours)", value: CUM.R, color: C.primary, text: (CUM.R >= 0 ? "+" : "") + fmtN(CUM.R) }],
  { min: -2300, max: 250, valSize: 22, labelH: 64 });
// A3: our call
const a3 = layered(s, 1272, 318, 584, 410, C.primaryDeep, "CARD: our call");
TL(a3, 20, 12, 24, "OUR CALL: FIX THE TRIP, NOT THE PRICE", { color: C.accent, maxW: 544 });
addRect(a3, 20, 54, 544, 2, C.accent);
[[["Per order: ", "A"], [r1(V.br.start) + " today, " + r1p(V.br.end) + " rebuilt", "A"], ["; a Drop run of 10 meals earns " + r1p(V.rd.drop) + " a meal", ""]],
 [["Keeps the customer: ", "A"], ["2 in 3 new Toing users were new to Swiggy or dormant, and a separate app fences the ₹700 core", ""]],
 [["Fast and reversible: ", "A"], ["3 of 7 levers are Swiggy's own switches, live in 30 days; a 6-month gate falls back to a clean shutdown", ""]]
].forEach((p, i) => { const y = 72 + i * 110; addBadge(a3, 20, y, 40, i + 1, C.accent, C.ink); RT(a3, 74, y, 490, 22, p, { color: C.white }); });
// Row B
dashedH(s, 64, 740, 1792);
const b1 = panel(s, 64, 754, 720, 184, "WHERE TOING'S LOSS COMES FROM (EST.)");
const cs = Math.round(V.tri.contrib_share * 100), as = 100 - cs;
stackH(b1, 16, 62, 688, 50, [{ value: cs, color: C.alert, text: "Per-order losses " + cs + "%", textColor: C.white }, { value: as, color: C.accent, text: "Installs " + as + "%" }]);
RT(b1, 16, 122, 688, 22, [[cr(-V.tri.t_loss_q) + " a quarter", "B"], [" (" + Math.round(V.tri.pct_of_food_ebitda) + "% of food delivery's adj. EBITDA); cutting installs alone stops a third", ""]]);
addTable(s, 808, 754, [250, 690, 108], ["Board asked", "Our answer", "Slide"], [
  ["Unit economics", r1(V.t.contrib) + " per ₹99 order; ₹" + V.t.rider.toFixed(0) + " rider on ₹" + V.t.rev.toFixed(0) + " of revenue", "3"],
  ["Levers", "7 levers, " + r1(V.br.start) + " to " + r1p(V.br.end) + "; 3 are Swiggy's switches", "5"],
  ["Funnel vs CAC", "Needs " + Math.round(V.fn.m_cac_12 * 100) + "% migration in 12 months; " + V.fn.multiple_vs_cac.toFixed(1) + "x paid CAC", "6"],
  ["Eternal's reply", "Holds back now; copies pickup points once Drops pay", "8"],
  ["Mind-changers", "Trip over ₹" + V.flip.T_RIDER.toFixed(0) + ", runs under " + Math.ceil(V.flip.RUN_N) + ", trade-down over " + Math.round(V.flip.CANNIB * 100) + "%", "9"]],
  { rowH: 30, headerH: 34, name: "TABLE: board checklist", align: ["LEFT", "LEFT", "CENTER"] });
soWhat(s, 948, 82, [["First 30 days: ", "A"], ["a door fee outside Drops, slot batching, fewer coupons and a freeze on paid installs; sign 40 pilot Drop sites in four cities", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
