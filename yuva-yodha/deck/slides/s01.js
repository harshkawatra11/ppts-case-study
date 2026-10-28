{ const s = await figma.getNodeByIdAsync("S1"); s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.primaryDeep }];
addChip(s, 64, 56, 860, 56, "YUVA YODHA ENERGY TECH HACKATHON | SCHNEIDER ELECTRIC", C.accent, C.ink, 22);
nm(TL(s, 64, 130, 112, "URJAGRID", { family: "Poppins", style: "ExtraBold", color: C.white }), "TITLE");
nm(TL(s, 64, 296, 28, "Challenge 03: Grid Reliability and Renewable Intermittency", { color: C.accent }), "SUBTITLE");
const v = layered(s, 64, 362, 840, 262, C.white, "CARD: thesis");
addChip(v, 24, 20, 230, 44, "OUR ANSWER", C.primary, C.white, 22);
T(v, 24, 80, 792, 30, "Brownout, never blackout.", { family: "Poppins", style: "Bold", color: C.primary });
T(v, 24, 134, 792, 22, "The flexibility is already on the wall: smart meters with a remote load limit. UrjaGrid forecasts the shortfall at each transformer and replaces feeder blackouts with a plan an engineer approves.");
nm(TL(s, 64, 664, 26, "TEAM IDEAFORGE", { color: C.accent }), "TEAM LABEL");
teamTable(s, 64, 712, [240, 440, 160]);
T(s, 64, 944, 840, 22, "A working software prototype: every capability is tagged LIVE, WIRED or PILOT.", { color: C.white });
const GX = [976, 1296, 1616], GY = [150, 450, 750], NW = 240, NH = 104;
const wire = C.accent;
[0, 2].forEach(r => { addWireH(s, GX[0] + NW, GX[1], GY[r] + NH / 2, wire, 3); addWireH(s, GX[1] + NW, GX[2], GY[r] + NH / 2, wire, 3); });
[0, 2].forEach(c => { addWireV(s, GX[c] + NW / 2, GY[0] + NH, GY[1], wire, 3); addWireV(s, GX[c] + NW / 2, GY[1] + NH, GY[2], wire, 3); });
addWireV(s, GX[1] + NW / 2, GY[0] + NH, GY[1] - 20, wire, 3); addWireV(s, GX[1] + NW / 2, GY[1] + NH + 20, GY[2], wire, 3);
addWireH(s, GX[0] + NW, GX[1], GY[1] + NH / 2, wire, 3); addWireH(s, GX[1] + NW, GX[2], GY[1] + NH / 2, wire, 3);
const N = [[0, 0, 1, "SENSE", "Meters, weather"], [1, 0, 2, "FORECAST", "36 h, per DT"], [2, 0, 3, "PROPOSE", "Softest lever first"], [2, 1, 4, "APPROVE", "A named engineer"],
  [2, 2, 5, "DISPATCH", "Notice, then limit"], [1, 2, 6, "CONFIRM", "Meter reads verify"], [0, 2, 7, "LEARN", "Fairness rotates"], [0, 1, 8, "PROTECT", "T0 never touched"]];
N.forEach(q => mapNode(s, GX[q[0]], GY[q[1]], NW, NH, q[2], q[3], q[4], q[2] === 4 ? { fill: C.accent, badge: C.primaryDeep, titleColor: C.primaryDeep } : {}));
const hub = layered(s, GX[1], GY[1] - 20, NW, NH + 40, C.accent, "CARD: hub");
TB(hub, 8, 14, NW - 16, 40, 26, "URJAGRID", { family: "Poppins", style: "ExtraBold", align: "CENTER" });
TB(hub, 8, 60, NW - 16, 70, 22, "one loop, a human at step 4", { family: "Inter", style: "Bold", align: "CENTER" });
const src = addText(s, "Inter", "Semi Bold", 14, C.accent, "Source: Yuva Yodha Energy Tech Hackathon brief, Challenge 03 | Team IdeaForge prototype", 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
