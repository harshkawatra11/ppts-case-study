{ const s = await figma.getNodeByIdAsync("S8");
hdr(s, 8, V.s7.finding, V.s7.source);
const a1 = panel(s, 64, 352, 980, 322, "5 OPTIONS, 7 FEATURES, ONE SET OF ROWS");
const lv = w => w === "Yes" ? 5 : (w === "Part" ? 3 : 1);
heatmap(a1, 16, 62, V.parityRows, ["Portal", "Tally", "SaaS", "Sheet", "Hisaab"], V.parity.map(r => r.map(lv)), { labelW: 400, colW: 109, rowH: 32, headH: 34, scale: HG, min: 1, max: 5, fmt: (v, i, j) => V.parity[i][j], name: "TABLE: parity" });
const ol = addRect(a1, 16 + 400 + 4 * 109, 62, 109, 258, null, C.primary, 4); ol.name = "OUTLINE";
const a2 = panel(s, 1060, 352, 796, 322, "THREE THINGS HISAAB IS DESIGNED TO DO");
["Price every exception in rupees, with root cause and owner", "Order the queue by the last useful date before the 20th", "Answer by voice in Hindi or English, read from the engine"].forEach((t, i) => {
  const f = layered(a2, 16 + i * 260, 62, 244, 236, C.white, "CARD: usp " + (i + 1)); addBadge(f, 12, 12, 40, i + 1, C.primary, C.white); T(f, 12, 66, 220, 22, t, { family: "Inter", style: "Bold" }); });
const b1 = panel(s, 64, 690, 480, 264, "PROTECTED, ₹ LAKH (EST.)");
vBars(b1, 16, 56, 448, 152, [{ label: "Low", value: V.protect.low, text: V.protect.low.toFixed(1), color: C.orange }, { label: "Base", value: V.protect.base, text: V.protect.base.toFixed(1), color: C.primary }, { label: "High", value: V.protect.high, text: V.protect.high.toFixed(1), color: C.orange }], { labelH: 36, max: 80, valSize: 22 });
formulaBox(b1, 16, 212, 448, 46, "at risk × 80% target", { chip: "EST.", chipW: 90 });
const b2 = panel(s, 560, 690, 720, 264, "6 RISKS, EACH WITH ONE MITIGATION");
addTable(b2, 16, 62, [240, 44, 44, 360], ["Risk", "P", "I", "Mitigation"], [["Unreal test data", "M", "H", "Test on 2 real ledgers"], ["False matches", "M", "H", "0.92 threshold, human tier"], ["Stale rate master", "M", "M", "Dated table, change log"], ["Format changes", "H", "M", "One adapter per format"], ["Personal data", "L", "H", "Synthetic now, DPDP review"], ["Scope creep", "M", "M", "Cut order fixed"]],
  { headerH: 34, rowH: 27, name: "TABLE: risks", align: ["LEFT", "CENTER", "CENTER", "LEFT"], cellColor: (r, c) => (c === 1 || c === 2) ? C.alert : C.ink, boldCols: [1, 2] });
const b3 = panel(s, 1296, 690, 560, 264, "FROM PROTOTYPE TO PILOT IN 3 STEPS");
["Prototype: 7 capabilities, synthetic", "90 days: 2 CA firms, real books", "12 months: TDS, Form 26AS"].forEach((t, i) => { const f = addFrame(b3, 16, 62 + i * 42, 528, 36, i === 0 ? C.tint : C.surfaceAlt, C.ink, 2, "CARD: step " + (i + 1)); TB(f, 10, 0, 508, 36, 22, t, { family: "Inter", style: "Bold" }); });
RT(b3, 16, 192, 528, 22, [["Market (est.): ", "B"], ["13.1 lakh GSTINs × ₹12,000 = ₹1,577 Cr", ""]]);
soWhat(s, 966, 64, [["Therefore: ", "A"], [V.s7.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
