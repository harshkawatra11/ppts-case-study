{ const s = await figma.getNodeByIdAsync("S8");
hdr(s, 8, V.s8.finding, V.s8.source);
const m = layered(s, 64, 224, 600, 350, C.primaryDeep, "CARD: moneyshot");
addChip(m, 20, 16, 520, 44, "OUTAGE PER HOME, HEATWAVE DAY", C.accent, C.ink, 22);
nm(TL(m, 20, 70, 64, "4.2 h to 0.4 h", { family: "Poppins", style: "ExtraBold", color: C.accent, maxW: 560, min: 48 }), "MONEYSHOT");
T(m, 20, 170, 560, 22, "90% fewer hours without supply, simulated on 48 transformers and 7,000 connections", { color: C.white });
[["Bear", "0.83 h"], ["Base", "0.40 h"], ["Bull", "0.00 h"]].forEach((q, i) => { const f = addFrame(m, 20 + i * 190, 244, 180, 88, i === 1 ? C.accent : C.white, C.ink, 2, "CELL");
  TL(f, 12, 2, 22, q[0], { family: "Inter", style: "Bold" }); TL(f, 12, 34, 30, q[1], { family: "Poppins", style: "ExtraBold", color: C.primaryDeep }); });
const a2 = panel(s, 680, 224, 600, 350, "HOURS WITHOUT SUPPLY, 3 DAY TYPES");
hBars(a2, 16, 62, 568, [{ label: "Heatwave, today", value: V.out.base, text: "4.21", color: C.alert }, { label: "Heatwave, UrjaGrid", value: V.out.mid, text: "0.40", color: C.good },
  { label: "Monsoon, today", value: V.out.monsoon[0], text: "3.71", color: C.alert }, { label: "Monsoon, UrjaGrid", value: 0.03, text: "0.00", color: C.good },
  { label: "October, today", value: V.out.mild[0], text: "3.58", color: C.alert }, { label: "October, UrjaGrid", value: 0.03, text: "0.00", color: C.good }], { labelW: 250, rowH: 42, barH: 26, valueW: 80, max: 4.4 });
T(a2, 16, 318, 568, 22, "Hours per home per day");
const a3 = panel(s, 1296, 224, 560, 350, "A 30% EVENING DIP IS ABSORBED");
lineChart(a3, 16, 56, 528, 230, [{ values: V.dip.sq, color: C.alert, label: "Today" }, { values: V.dip.ug, color: C.good, label: "UrjaGrid" }], V.dip.labels, { yMin: 0, yMax: 7, yTicks: [2, 4, 6], padL: 44, padR: 130 });
T(a3, 16, 290, 528, 22, "Hours cut per home against extra evening shortfall");
const b1 = panel(s, 64, 588, 560, 366, "WHAT THE HOME GIVES UP INSTEAD");
stackH(b1, 16, 62, 528, 50, [{ value: V.caps.hh[0], color: C.amberTint, text: "Comfort" }, { value: V.caps.hh[1], color: C.orange, text: "" }, { value: V.caps.hh[2], color: C.alert, text: "", textColor: C.white }], { minInside: 120 });
legend(b1, 16, 120, [[C.amberTint, "1,000 W"], [C.orange, "500 W"], [C.alert, "300 W"]]);
addTable(b1, 16, 164, [338, 190], ["Heatwave day, base case", "Value"], [["Capped at the peak", "3,402"], ["Must trim load", "1,751"], ["Minimum kept", "300 W"]], { headerH: 36, rowH: 38, name: "TABLE: caps", align: ["LEFT", "RIGHT"] });
T(b1, 16, 326, 528, 22, "A cap is a limit, not a cut");
const b2 = panel(s, 640, 588, 600, 366, "₹383 A METER A YEAR, ₹0 TO THE HOME");
waterfall(b2, 16, 56, 568, 216, [{ label: "Fee", value: V.econ.fee, color: C.primary, text: "₹96" }, { label: "Rebates", value: V.econ.rebate, color: C.accent, text: "₹188" }, { label: "Messages", value: V.econ.msg, color: C.orange, text: "₹99" }, { label: "Total", kind: "total", value: V.econ.total, color: C.primaryDeep, text: "₹383" }], { max: 420, min: 0, labelH: 40 });
RT(b2, 16, 280, 568, 22, [["Rebates go to homes. ", "B"], ["Homes pay nothing for the service, and the rebate is paid in cash", ""]]);
const b3 = panel(s, 1256, 588, 600, 366, "₹ PER KW OF PEAK RELIEF, A YEAR");
hBars(b3, 16, 62, 568, [{ label: "UrjaGrid", value: V.econ.kw, text: "₹1,448", color: C.good }, { label: "Battery, 2026", value: V.econ.bess[0], text: "₹3,591", color: C.orange }, { label: "Battery, 2024", value: V.econ.bess[1], text: "₹5,700", color: C.orange }], { labelW: 190, rowH: 44, barH: 28, valueW: 110, max: 5700 });
addTable(b3, 16, 204, [330, 238], ["Sustainability", "A year"], [["New hardware", "None"], ["Transformer overload", "−79% hours"], ["Storage", "Plugs in, lever 4"]], { headerH: 36, rowH: 38, name: "TABLE: sustain", align: ["LEFT", "RIGHT"] });
soWhat(s, 966, 64, [["Therefore: ", "A"], [V.s8.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
