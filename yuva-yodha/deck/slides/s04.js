{ const s = await figma.getNodeByIdAsync("S4");
hdr(s, 4, V.s4.finding, V.s4.source);
const a1 = panel(s, 64, 224, 880, 350, "THE BRIEF, LINE BY LINE");
addTable(a1, 16, 62, [348, 400, 100], ["The brief asks", "UrjaGrid answers", "Slide"], [
  ["Bridge intermittency gaps", "36 h forecast, lever ladder", "3, 8"], ["Stay local, manageable", "Runs transformer by transformer", "5, 6"],
  ["Be affordable", "Home pays ₹0, fee ₹8 a month", "8"], ["Support the DISCOM", "Risk ranking, DR signals", "5, 6"],
  ["Measured reliability gain", "4.2 h to 0.4 h (simulated)", "8"], ["Ownership, O&M, economics", "DISCOM-run, engineer approves", "9"]],
  { headerH: 40, rowH: 40, name: "TABLE: brief map", align: ["LEFT", "LEFT", "CENTER"] });
const a2 = panel(s, 960, 224, 896, 350, "5 SUGGESTED DIRECTIONS, 5 TESTS (TEAM VIEW, 1 TO 5)");
heatmap(a2, 16, 62, ["Community storage", "Microgrid control", "Peer-to-peer", "Forecast and shift", "DISCOM dashboards", "UrjaGrid"], ["No capex", "Weeks", "Reach", "DISCOM", "Proof"],
  [[1, 2, 3, 3, 4], [2, 2, 2, 3, 4], [3, 2, 2, 3, 3], [5, 4, 3, 4, 3], [5, 4, 3, 5, 3], [5, 4, 5, 5, 5]], { labelW: 264, colW: 120, rowH: 38, headH: 40, scale: HG, min: 1, max: 5, name: "TABLE: options" });
const ol = addRect(a2, 16, 62 + 40 + 5 * 38, 864, 38, null, C.primary, 4); ol.name = "OUTLINE";
const b1 = panel(s, 64, 588, 560, 366, "JUDGED ON FIVE CRITERIA");
stackH(b1, 16, 62, 528, 44, [{ value: 20, color: C.tint, text: "20" }, { value: 20, color: C.accent, text: "20" }, { value: 25, color: C.primary, text: "25", textColor: C.white }, { value: 20, color: C.accent, text: "20" }, { value: 15, color: C.tint, text: "15" }], { minInside: 40 });
addTable(b1, 16, 118, [330, 80, 118], ["Criterion", "%", "Slide"], [["Problem and idea", "20", "2, 7"], ["Architecture, design", "20", "5, 6"], ["Impact, measurability", "25", "8"], ["Feasibility, cost", "20", "8, 9"], ["Sustainability", "15", "8"]],
  { headerH: 36, rowH: 38, name: "TABLE: criteria", align: ["LEFT", "CENTER", "CENTER"], rowFills: [null, null, C.tint, null, null] });
const b2 = panel(s, 640, 588, 640, 366, "LIMIT, DO NOT CUT: 3 PRECEDENTS");
addTable(b2, 16, 62, [150, 250, 208], ["Where", "The rule", "Reported result"], [["South Africa", "10 A limit by meter", "15.3 MW, 9,000 homes"], ["Germany", "Dim devices to 4.2 kW", "Law since Jan 2024"], ["France", "3 kW for two hours", "Use fell 20% in test"]],
  { headerH: 40, rowH: 56, name: "TABLE: precedents", align: ["LEFT", "LEFT", "LEFT"] });
RT(b2, 16, 280, 608, 22, [["Eskom: ", "B"], ["customers favoured load limiting over load shedding; national rollout approved in January 2024", ""]]);
const b3 = panel(s, 1296, 588, 560, 366, "SOFTWARE ARRIVES BEFORE STEEL");
hBars(b3, 16, 62, 528, [{ label: "Awarded, GW", value: 10.4, text: "10.4", color: C.orange }, { label: "Built, GWh", value: 1.8, text: "1.8", color: C.alert }], { labelW: 190, rowH: 44, barH: 28, valueW: 70, max: 10.4 });
T(b3, 16, 154, 528, 22, "Standalone storage awarded in 2025 and installed by March 2026");
const q = addFrame(b3, 16, 220, 528, 132, C.tint, C.primary, 3, "CARD: iea"); T(q, 12, 8, 504, 22, "Flexibility delivers capacity \"at a cost up to three times lower than building new capacity\". IEA, December 2025", { family: "Inter", style: "Bold" });
soWhat(s, 966, 64, [["Fit: ", "A"], [V.s4.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
