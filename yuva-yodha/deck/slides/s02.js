{ const s = await figma.getNodeByIdAsync("S2");
hdr(s, 2, V.s2.finding, V.s2.source);
const a1 = panel(s, 64, 224, 600, 350, "THE GAP HAS MOVED TO THE EVENING");
hBars(a1, 16, 62, 568, [{ label: "Solar hours", value: 0.18, text: "0.18 GW", color: C.good }, { label: "After sunset", value: 2.57, text: "2.57 GW", color: C.alert }], { labelW: 170, rowH: 46, barH: 30, valueW: 120, max: 2.6 });
T(a1, 16, 160, 568, 22, "Shortage on 21 May 2026, the day demand hit a record 270.8 GW");
RT(a1, 16, 222, 568, 22, [["36 days ", "R"], ["short after sunset against ", ""], ["6 days", "B"], [" in solar hours, April to May 2026", ""]]);
RT(a1, 16, 284, 568, 22, [["Evening ramp: ", "B"], ["36 GW in May 2023, ", ""], ["74 GW", "R"], [" in May 2026", ""]]);
const a2 = panel(s, 680, 224, 580, 350, "THE FEEDER LOG HIDES THE HOME");
vBars(a2, 16, 52, 548, 204, [{ label: "District HQ", value: 1.3, text: "1.3 h", color: C.orange }, { label: "All homes", value: 2.0, text: "2.0 h", color: C.orange }, { label: "Small towns", value: 3.5, text: "3.5 h", color: C.alert }], { labelH: 40, max: 4, valSize: 22 });
RT(a2, 16, 262, 548, 22, [["Outage hours a day, read from meters. ", ""], ["The feeder log for all of July 2019 showed 3.5 h in Bareilly and 4.8 h in Mathura", "B"]]);
const a3 = panel(s, 1276, 224, 580, 350, "THE TRANSFORMER IS THE WEAK LINK");
[["about 10%", "of transformers fail in a year"], ["1.3 million", "failures a year, CEA meeting"], ["70%", "of areas outside 230 V ±6%"], ["19.54%", "UP loss, 15.04% for India"]].forEach((k, i) => {
  const f = addFrame(a3, 16 + (i % 2) * 278, 62 + Math.floor(i / 2) * 142, 270, 132, i === 0 ? C.alertTint : C.surfaceAlt, C.ink, 1.5, "CELL");
  TL(f, 12, 6, 34, k[0], { family: "Poppins", style: "ExtraBold", color: i === 0 ? C.alert : C.primary, maxW: 246 }); T(f, 12, 62, 246, 22, k[1]); });
const b1 = panel(s, 64, 588, 700, 366, "3 CAUSES, ONE BLUNT TOOL");
[116, 350, 584].forEach(x => addLine(b1, x, 154, 350, 190, C.ink, 2.5));
[["Evening supply dips as solar falls", 16], ["Transformer overheats at the peak", 250], ["No view below the feeder", 484]].forEach(q => { const f = addFrame(b1, q[1], 62, 200, 92, C.white, C.ink, 2, "CARD: cause"); TB(f, 8, 0, 184, 92, 22, q[0], { family: "Inter", style: "Bold", align: "CENTER" }); });
const hub = addFrame(b1, 200, 190, 300, 52, C.primaryDeep, C.ink, 2, "CARD: hub"); TB(hub, 6, 0, 288, 52, 22, "Feeder switched off", { family: "Poppins", style: "Bold", color: C.white, align: "CENTER" });
addArrow(b1, 350, 242, 350, 266, C.ink, 3, 10);
const gap = addFrame(b1, 16, 266, 668, 88, C.tint, C.primary, 3, "CARD: gap"); TB(gap, 10, 0, 648, 88, 22, "The unit of control is the feeder, so a fan, a fridge of insulin and an idle AC are cut alike", { family: "Poppins", style: "Bold", color: C.primary, align: "CENTER" });
const b2 = panel(s, 780, 588, 520, 366, "WHO LOSES WHAT IN A CUT");
heatmap(b2, 16, 62, ["Low income", "Small shop", "Clinic", "Student"], ["Light", "Cool", "Earn", "Care"], [[4, 5, 3, 4], [3, 3, 5, 2], [2, 5, 4, 5], [5, 3, 1, 2]], { labelW: 200, colW: 72, rowH: 48, headH: 48, scale: HR, min: 1, max: 5, name: "TABLE: pain" });
T(b2, 16, 312, 488, 22, "Team reading, 1 low to 5 high");
const b3 = panel(s, 1316, 588, 540, 366, "A LIMITER ON EVERY WALL, UNUSED");
addTable(b3, 16, 62, [300, 208], ["Smart meters", "Status"], [["Installed, Jun 2026", "7.24 crore"], ["Sanctioned, RDSS", "20.33 crore"], ["Load-limit switch", "Required"], ["Used for reliability", "None found"], ["UP prepaid reversed", "83 lakh"]], { headerH: 40, rowH: 44, name: "TABLE: meters", align: ["LEFT", "RIGHT"] });
T(b3, 16, 330, 508, 22, "RDSS tenders name the use case");
soWhat(s, 966, 64, [["The gap: ", "A"], [V.s2.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
