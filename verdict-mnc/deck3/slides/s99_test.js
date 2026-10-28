{ const s = await figma.getNodeByIdAsync("S9"); wipe(s);
skeleton3(s, 0, "TEST", "HELPER SMOKE TEST", 400, "Every new helper drawn once to catch runtime errors before real slides", "Source: test", RIBC);
const a1 = panel(s, 64, 318, 560, 322, "FUNNEL");
funnel(a1, 16, 56, 520, 250, [
  { value: "100%", label: "Website visits", color: C.primary },
  { value: "3.3%", label: "Converts to a first order", color: C.primary },
  { value: "55%", label: "Returns past month 3", color: C.good }]);
const a2 = panel(s, 648, 318, 560, 322, "2x2 MATRIX");
matrix2x2(a2, 16, 70, 520, 230, { xLabel: "More cooking effort", yLabel: "Higher price per meal",
  q: ["Fast, cheap", "Fast, dear", "Slow, cheap", "Slow, dear"], tint: [1],
  pts: [{ x: 0.2, y: 0.8, label: "Ten-minute food", color: C.alert }, { x: 0.8, y: 0.6, label: "HarvestBox", color: C.primary, left: true }] });
const a3 = panel(s, 1232, 318, 624, 322, "ISSUE TREE");
issueTree(a3, 16, 56, 592, 250, "EBITDA -22%", [
  { title: "Gross margin -7 pts", fill: C.alertTint, leaves: ["Waste 6%", "Utilisation 68%"] },
  { title: "Marketing +8 pts", fill: C.alertTint, leaves: ["CAC-explained", "Not explained"] },
  { title: "Overheads -5 pts", fill: C.goodTint, leaves: ["Only improving line"] }]);
const b1 = panel(s, 64, 654, 500, 292, "WAFFLE + LEGEND + KV");
waffle(b1, 16, 56, 10, 18, 4, [{ n: 45, color: C.alert }, { n: 21, color: C.orange }, { n: 15, color: C.tint }, { n: 19, color: C.primary }]);
legendV(b1, 240, 56, [{ color: C.alert, label: "Gone by M3: 45" }, { color: C.orange, label: "Gone M4-6: 21" }, { color: C.tint, label: "Gone M7-12: 15" }, { color: C.primary, label: "Still ordering: 19" }]);
kv(b1, 16, 220, "-₹4,719", "each leaver");
const b2 = panel(s, 588, 654, 500, 292, "PLAN CARDS + SKIP STRIP");
planCard(b2, 16, 56, 150, 120, "₹3,600", ["8 meals", "₹450/meal"]);
planCard(b2, 180, 56, 150, 120, "₹5,200", ["12 meals", "₹433/meal"], { fill: C.tint });
skipStrip(b2, 16, 200, 460, [{ m: "M1", t: "BOX", k: "box" }, { m: "M2", t: "SKIP", k: "skip" }, { m: "M3", t: "BOX", k: "box" }, { m: "M4", t: "X", k: "refused" }]);
const b3 = panel(s, 1112, 654, 744, 292, "HEATMAP + GANTT + TABLE");
heatmap(b3, 16, 56, ["Too expensive", "Rigid"], ["Case", "Review"], [[27, 16.2], [34, 42.5]], { labelW: 150, colW: 90, rowH: 36, headH: 32, scale: HG, min: 0, max: 50 });
gantt(b3, 320, 56, 100, 28, ["W1", "W5", "W9", "W13"], [{ label: "Build", bars: [{ s: 0, e: 3, text: "Go" }], marks: [{ at: 2 }] }], { headH: 28, rowH: 30 });
addTable(b3, 320, 160, [100, 90], ["ID", "Val"], [["A08", "5%"]], { rowH: 28, headerH: 28 });
soWhat(s, 958, 72, [["Smoke test: ", "A"], ["if this slide is clean, every new helper works.", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
