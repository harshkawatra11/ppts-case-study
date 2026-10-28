{ const s = await figma.getNodeByIdAsync("S3");
skeleton3(s, [2], "2 / 4", "2 STRATEGIC RECOMMENDATION", 560,
  "Proposal A, rebuilt lifts LTV to CAC from 1.55x to 2.70x for ₹1.8 Cr; ready-to-eat follows only after two gates",
  "Source: Verdict 2.0 case, proposals A to C | research sections 2, 10, 13 to 18 | assumptions A08 to A14 | model " + V.hash,
  RIBC);

// A1 do-not-fund-first: badge list on alertTint card
const a1 = panel(s, 64, 318, 520, 358, "DO NOT FUND THESE FIRST", { layered: true, fill: C.alertTint, titleColor: C.alert });
badgeList(a1, 16, 68, 472, [
  [["A as written: ", "B"], ["free skipping from day one makes year 1 ₹" + V.aw1 + " Cr worse than doing nothing", ""]],
  [["B: ", "B"], ["₹8 Cr across 800 stores is " + V.bstore + " a store a month, beside a " + V.pl + " private-label kit", ""]],
  [["C first: ", "B"], [V.cneed + " is a third of the cash, spent on a base that loses " + V.wf[0] + "% of sign-ups by month 3", ""]]
], { bg: C.alert, fg: C.white, pitch: 94, d: 40 });

// A2 table: proposal A as written vs rebuilt
const a2 = panel(s, 608, 318, 600, 358, "PROPOSAL A, AS WRITTEN AND REBUILT");
addTable(a2, 16, 56, [140, 180, 248], ["Lever", "As written", "Rebuilt"], [
  ["Skip or pause", "No penalty, no limit", "Free, but 2 boxes in any 3 months"],
  ["Plan sizes", "Two more sizes", V.plans[0][0] + " entry and " + V.plans[2][0] + " family"],
  ["Recipe swaps", "Any recipe", "Within one ingredient family"],
  ["Bigger menu", "More recipes", "40 recipes from 120 ingredients"],
  ["Referral", "Paid at sign-up", "₹1,000 each side on the 3rd box"]
], { rowH: 52, headerH: 32, cellSize: 22, name: "TABLE: proposal a" });

// A3 plan cards + skip strip
const a3 = panel(s, 1232, 318, 624, 358, "THE PLANS A CUSTOMER SEES");
const shareTxt = v => v.replace(" of sign-ups", " share");
planCard(a3, 16, 56, 184, 150, V.plans[0][0], [V.plans[0][1], V.plans[0][2], shareTxt(V.plans[0][3])]);
planCard(a3, 220, 56, 184, 150, V.plans[1][0], [V.plans[1][1], V.plans[1][2], shareTxt(V.plans[1][3])], { fill: C.tint });
planCard(a3, 424, 56, 184, 150, V.plans[2][0], [V.plans[2][1], V.plans[2][2], shareTxt(V.plans[2][3])]);
dashedH(a3, 16, 208, 592);
T(a3, 16, 216, 592, 22, "Private label: " + V.pl + " a box", { align: "CENTER", family: "Inter", style: "Bold" });
skipStrip(a3, 16, 246, 592, [
  { m: "M1", t: "BOX", k: "box" }, { m: "M2", t: "SKIP", k: "skip" }, { m: "M3", t: "BOX", k: "refused" },
  { m: "M4", t: "BOX", k: "box" }, { m: "M5", t: "SKIP", k: "skip" }, { m: "M6", t: "BOX", k: "box" }
], { h: 36 });
fine(a3, 16, 317, 592, "M3: second skip refused; the box ships");

// B1 funnel: what the rebuilt funnel changes
const b1 = panel(s, 64, 690, 640, 258, "WHAT THE REBUILT FUNNEL CHANGES");
const aarrrShort = ["Conversion 2.8% to 3.3%", "First box, " + V.plans[0][0] + " plan", "Retention 55% to 65%", "20%, ₹1,000 each side", "Order value " + V.aov];
funnel(b1, 16, 50, 576, 182, V.aarrr.map(([name], i) => ({ value: name, label: aarrrShort[i], color: [C.primary, C.orange, C.good, C.primaryDeep, C.alert][i], textColor: C.white })), { fw: 200, gap: 8, minF: 0.65 });

// B2 ltv-to-cac ladder
const b2 = panel(s, 728, 690, 520, 258, "LTV TO CAC, ONE LEVER AT A TIME");
const ladderItems = V.ladder.map(([label, value], i) => ({ label: label === "Retention" ? "Repeat" : label, value, color: i === 0 ? C.alert : (i === 4 ? C.surface : C.primary), textColor: i === 4 ? C.ink : undefined, text: value.toFixed(2) + "x" }));
const vg = vBars(b2, 16, 46, 488, 170, ladderItems, { min: 0, max: 3.5, valSize: 22, labelH: 46, barW: 66 });
addLine(b2, 16, vg.Y(3.0), 504, vg.Y(3.0), C.ink, 2, [8, 5]);
fine(b2, 16, 226, 488, "Dashed line: 3.0x case benchmark");

// B3 counter-view table against C with same improvements
const b3 = panel(s, 1272, 690, 584, 258, "AGAINST C: SAME IMPROVEMENTS");
const d1 = (V.ins12.c_cum - V.ins12.core_cum).toFixed(2);
const d2 = (V.ins12.core_cash - V.ins12.c_cash).toFixed(2);
const d3 = (Math.abs(V.ins12.c_rr) - Math.abs(V.ins12.core_rr)).toFixed(2);
function cr2(v) { return (v < 0 ? "−₹" : "₹") + Math.abs(v).toFixed(2) + " Cr"; }
addTable(b3, 16, 56, [250, 150, 150], ["Measure", "Ours", "C"], [
  ["24-month EBITDA", cr2(V.ins12.core_cum), cr2(V.ins12.c_cum)],
  ["Cash at month 24", cr2(V.ins12.core_cash), cr2(V.ins12.c_cash)],
  ["Run-rate EBITDA", cr2(V.ins12.core_rr), cr2(V.ins12.c_rr)]
], { rowH: 28, headerH: 34, cellSize: 22, name: "TABLE: counter view" });
RT(b3, 16, 182, 552, 22, [["C earns ₹" + d1 + " Cr more, ", "B"], ["but ₹" + d2 + " Cr less cash and a ₹" + d3 + " Cr worse run-rate", ""]]);

soWhat(s, 960, 70, [
  ["Conclusively, sequence beats selection: ", "A"],
  ["A rebuilt is funded now on ₹" + V.uses[0][1] + " Cr, and ready-to-eat opens at ₹" + V.uses[2][1] + " Cr in month 13 only if cash is at least ₹" + V.gate.cash_target + " Cr and LTV to CAC at least " + V.gate.ltvcac_target + "x.", "W"]
]);

results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
