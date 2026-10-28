{ const s = await figma.getNodeByIdAsync("S3");
hdr(s, 3, V.s3.finding, V.s3.source);
const a1 = panel(s, 64, 224, 1100, 350, "SIX LEVERS, ALWAYS IN THIS ORDER, SOFTEST FIRST");
addTable(a1, 16, 62, [60, 230, 450, 220, 108], ["#", "Lever", "What happens", "Rail", "Status"], [
  ["L1", "Voluntary ask", "WhatsApp or IVR ask, ₹2 a unit", "Channels", "WIRED"], ["L2", "Managed charging", "E-rickshaw and EV hubs slowed", "OCPP 1.6J", "WIRED"],
  ["L3", "Shiftable loads", "Pumps and towers moved off peak", "OpenADR 3", "WIRED"], ["L4", "Existing storage", "Batteries already on the network", "Beckn, UEI", "WIRED"],
  ["L5", "Lifeline limit", "Cap with expiry, floor of 300 W", "DLMS via HES", "WIRED"], ["L6", "Rotational cut", "Status quo, the last resort only", "Feeder", "LIVE"]],
  { headerH: 40, rowH: 40, name: "TABLE: levers", align: ["LEFT", "LEFT", "LEFT", "LEFT", "CENTER"], rowFills: [null, null, null, null, C.amberTint, C.alertTint], cellColor: (r, c) => c === 4 ? (r === 5 ? C.good : C.primaryDeep) : C.ink, boldCols: [1, 4] });
const a2 = panel(s, 1180, 224, 676, 350, "100 HOMES ON THE HEATWAVE DAY");
const wall = (x, n) => meterWall(a2, x, 100, 10, 10, 20, 3, i => i < n[0] ? C.ink : (i < n[0] + n[1] ? C.orange : C.good));
TL(a2, 16, 62, 22, "Status quo", { family: "Inter", style: "Bold" }); wall(16, [V.out.hitSq, 0]);
TL(a2, 270, 62, 22, "UrjaGrid", { family: "Inter", style: "Bold" }); wall(270, [V.out.hitUg, V.out.capPeak]);
legend(a2, 520, 104, [[C.ink, "Cut off"]]); legend(a2, 520, 140, [[C.orange, "Capped"]]); legend(a2, 520, 176, [[C.good, "Normal"]]);
RT(a2, 520, 220, 140, 22, [["62 cut", "R"], [" to ", ""], ["9", "G"]]);
T(a2, 520, 262, 140, 22, "Simulated, base case");
const b1 = panel(s, 64, 588, 560, 366, "4 TIERS, 3 CAP LEVELS, 1 FLOOR");
addTable(b1, 16, 62, [70, 230, 228], ["Tier", "Who", "Rule"], [["T0", "Critical loads", "Never capped"], ["T1", "Homes", "Floor of 300 W"], ["T2", "Shops", "Floor of 500 W"], ["T3", "Flexible loads", "Shifted first"]], { headerH: 34, rowH: 30, name: "TABLE: tiers", align: ["LEFT", "LEFT", "LEFT"] });
heatmap(b1, 16, 224, ["Comfort", "Essential", "Lifeline"], ["Home", "Shop"], [[1000, 2000], [500, 1000], [300, 500]], { labelW: 228, colW: 150, rowH: 34, headH: 34, scale: HO, levels: v => v >= 1000 ? 0 : (v >= 500 ? 2 : 3), fmt: v => fmtN(v) + " W", name: "TABLE: caps" });
const b2 = panel(s, 640, 588, 600, 366, "ONE EVENING, SIX TIMED STEPS");
addWireH(b2, 48, 552, 122, C.ink, 3);
[["T−120", "Notice to homes"], ["T−30", "Signal chargers"], ["T−15", "Limit set in meter"], ["T", "Window starts"], ["End", "Limit expires"], ["T+15", "Reads verify"]].forEach((q, i) => { const x = 48 + i * 100.8;
  addEllipse(b2, x - 12, 110, 24, 24, i === 2 ? C.orange : C.primary, C.ink, 2);
  TL(b2, 0, 70, 22, q[0], { family: "Poppins", style: "Bold", color: C.primary, centerAt: x });
  const f = addFrame(b2, 16 + (i % 3) * 192, 152 + Math.floor(i / 3) * 62, 184, 54, i === 2 ? C.amberTint : C.surfaceAlt, C.ink, 1.5, "CELL"); TB(f, 6, 0, 172, 54, 22, (i + 1) + ". " + q[1], { family: "Inter", style: "Bold" }); });
formulaBox(b2, 16, 284, 568, 64, "No cap command with under 30 minutes of notice", { chip: "RULE", chipW: 100 });
const b3 = panel(s, 1256, 588, 600, 366, "SIX SAFETY RULES, EACH WITH A TEST");
badgeList(b3, 16, 62, 568, ["T0 sites and homes are never capped", "No cap goes below 300 W", "Every cap carries an expiry time", "At least 30 minutes of notice", "No dispatch without a named approver", "No language model inside an engine"], { d: 38, pitch: 49 });
soWhat(s, 966, 64, [["Day one: ", "A"], [V.s3.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
