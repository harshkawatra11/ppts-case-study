{ const s = await figma.getNodeByIdAsync("S7");
hdr(s, 7, V.s7.finding, V.s7.source);
const a1 = panel(s, 64, 224, 1072, 350, "6 FEATURES, 6 PRODUCTS, ONE SET OF ROWS");
const P7 = [["n/s", "n/s", "Yes", "Yes", "n/s", "Part"], ["Part", "Yes", "Yes", "Yes", "Yes", "Yes"], ["n/s", "n/s", "n/s", "n/s", "n/s", "Yes"], ["n/s", "n/s", "n/s", "n/s", "n/s", "Part"], ["n/s", "n/s", "n/s", "Yes", "n/s", "Yes"], ["n/s", "Part", "n/s", "n/s", "n/s", "Yes"]];
const lv = w => w === "Yes" ? 5 : (w === "Part" ? 3 : 1);
heatmap(a1, 16, 62, ["Transformer forecast", "Automated DR", "Meter limit, not a cut", "Fairness accounting", "Human approval gate", "Message to home"], ["DERMS", "Fluentgrid", "Itron", "Bidgely", "Kimbal", "UrjaGrid"], P7.map(r => r.map(lv)),
  { labelW: 262, colW: 127, rowH: 38, headH: 40, scale: HG, min: 1, max: 5, fmt: (v, i, j) => P7[i][j], name: "TABLE: parity" });
const ol = addRect(a1, 16 + 262 + 5 * 127, 62, 127, 268, null, C.primary, 4); ol.name = "OUTLINE";
const a2 = panel(s, 1168, 224, 688, 350, "WHO THE COMFORT CAP ACTUALLY TOUCHES");
hBars(a2, 16, 62, 656, V.equity.map(e => ({ label: e[0], value: Math.max(e[1], 1), text: e[1] + "%", color: e[1] === 0 ? C.good : C.orange })), { labelW: 220, rowH: 42, barH: 26, valueW: 90, max: 100 });
RT(a2, 16, 278, 656, 22, [["54% of connections ", "B"], ["are constrained at the peak; ", ""], ["none of the two lowest-use home types", "G"], [" (simulated)", ""]]);
const b1 = panel(s, 64, 588, 560, 366, "FIVE CHOICES, NEW TOGETHER");
badgeList(b1, 16, 62, 528, ["Limit, do not cut: the home keeps 300 W", "The meter is the unit of fairness", "Softest lever first, by rule", "A named engineer signs each plan", "Engines decide, the model phrases"], { d: 40, pitch: 58 });
const b2 = panel(s, 640, 588, 600, 366, "BESIDE THE GRID STACK, NOT OVER IT");
[["ADMS", "Feeders, switching, restoration", C.surfaceAlt, C.ink], ["DERMS", "Solar, storage, load relief", C.surfaceAlt, C.ink], ["URJAGRID", "Below the transformer: homes, shops", C.tint, C.primary]].forEach((q, i) => {
  const f = addFrame(b2, 16, 62 + i * 88, 568, 72, q[2], q[3], i === 2 ? 3 : 2, "CARD: stack " + q[0]); TL(f, 12, 2, 22, q[0], { color: C.primary, maxW: 200 }); TL(f, 12, 34, 22, q[1], { family: "Inter", style: "Bold", maxW: 544 });
  if (i < 2) addArrow(b2, 300, 62 + i * 88 + 73, 300, 62 + (i + 1) * 88 - 1, C.ink, 3, 8); });
T(b2, 16, 326, 568, 22, "Team view: complements, does not replace");
const b3 = panel(s, 1256, 588, 600, 366, "BORROWED, THEN CHANGED");
addTable(b3, 16, 62, [130, 216, 222], ["From", "Their rule", "Ours"], [["Eskom", "Meter cuts if over 10 A", "300 W floor, approver"], ["Germany", "Dim large devices", "Dim by tier, with expiry"], ["Delhi DR", "₹50 to ₹100 an event", "₹2 a unit, by WhatsApp"]], { headerH: 40, rowH: 62, name: "TABLE: borrowed", align: ["LEFT", "LEFT", "LEFT"] });
T(b3, 16, 300, 568, 22, "No Indian DISCOM use of the limiter for reliability was found");
soWhat(s, 966, 64, [["New here: ", "A"], [V.s7.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
