{ const s = await figma.getNodeByIdAsync("S5");
hdr(s, 5, V.s5.finding, V.s5.source);
const a1 = panel(s, 64, 224, 1100, 350, "PROTOTYPE SCREENS (ILLUSTRATIVE DATA)");
[["command", "Command centre"], ["plans", "Flex Plans desk"], ["consumer", "Home view"]].forEach((q, i) => { photo(a1, 16 + i * 360, 62, 348, 218, q[0]); TL(a1, 16 + i * 360, 290, 22, q[1], { family: "Inter", style: "Bold" }); });
const a2 = panel(s, 1180, 224, 676, 350, "WHAT THE HOME RECEIVES");
const ph = phone(a2, 16, 62, 330, 276, "UrjaGrid"); const bub = addFrame(ph, 12, 98, 306, 172, C.goodTint, C.ink, 1.5, "CELL");
T(bub, 10, 6, 286, 22, "From 18:00, your connection will be limited to 300W until 20:00. Essential appliances will keep working.");
[["Channels", "WhatsApp, IVR, SMS"], ["Languages", "Hindi and English"], ["First notice", "2 hours ahead"], ["Rebate", "₹2 a unit shifted"]].forEach((q, i) => { const f = addFrame(a2, 362, 62 + i * 70, 298, 62, i === 2 ? C.tint : C.surfaceAlt, C.ink, 1.5, "CELL");
  TL(f, 10, 0, 22, q[0], { color: C.primary, maxW: 278 }); TL(f, 10, 33, 22, q[1], { family: "Inter", style: "Bold", maxW: 278 }); });
const b1 = panel(s, 64, 588, 660, 366, "FIVE ROLES, ONE SCREEN EACH");
addTable(b1, 16, 62, [216, 204, 208], ["Role", "Surface", "Job"], [["Home or shop", "Phone, chat", "Sees notice"], ["Field worker", "Field app", "Registers T0"], ["Junior Engineer", "Plans desk", "Approves, edits"], ["Asst Engineer", "Command centre", "Watches health"], ["Regulator", "Regulator view", "Aggregates only"]],
  { headerH: 40, rowH: 48, name: "TABLE: roles", align: ["LEFT", "LEFT", "LEFT"] });
const b2 = panel(s, 740, 588, 540, 366, "ROLE BY CHANNEL");
const ch = [[1, 5, 5, 3], [1, 5, 3, 1], [5, 1, 1, 1], [5, 1, 1, 3], [5, 1, 1, 1]];
heatmap(b2, 16, 62, ["Home", "Field", "JE", "AE", "Regulator"], ["Desk", "Phone", "Chat", "Voice"], ch, { labelW: 152, colW: 89, rowH: 44, headH: 44, scale: HG, min: 1, max: 5, fmt: v => v === 5 ? "Main" : (v === 3 ? "Also" : "No"), name: "TABLE: channels" });
T(b2, 16, 334, 508, 22, "Chat: WhatsApp or IVR");
const b3 = panel(s, 1296, 588, 560, 366, "BUILT AND COUNTED");
[["28", "screens"], ["54", "API routes"], ["352", "backend tests"], ["162", "frontend tests"], ["6", "safety rules"], ["15", "read-only tools"]].forEach((k, i) => {
  const f = addFrame(b3, 16 + (i % 2) * 268, 62 + Math.floor(i / 2) * 98, 260, 90, i === 4 ? C.tint : C.surfaceAlt, C.ink, 1.5, "CELL");
  TL(f, 12, 2, 34, k[0], { family: "Poppins", style: "ExtraBold", color: C.primary }); T(f, 12, 54, 236, 22, k[1]); });
soWhat(s, 966, 64, [["In use: ", "A"], [V.s5.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
