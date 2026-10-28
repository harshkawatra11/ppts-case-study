{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
// ===== top strip =====
addChip(s, 64, 40, 620, 60, "VERDICT 2.0 · MOTILAL NEHRU COLLEGE", C.primary, C.white, 22);
const ORG = ["Project Avsar", "The Skill Development Cell", "Motilal Nehru College", "University of Delhi"];
[715, 785, 855, 925].forEach((ox, i) => logoSlot(s, ox, 40, 60, 60, ORG[i]));
addChip(s, 1556, 40, 300, 60, "TEAM IDEAFORGE", C.primaryDeep, C.white, 22);
addWireH(s, 64, 1856, 128, C.ink, 2.5);
[64, 512, 960, 1408, 1856].forEach(cx => addEllipse(s, cx - 8, 120, 16, 16, C.white, C.ink, 2));
// ===== title block =====
nm(TL(s, 64, 138, 100, "HARVESTBOX", { family: "Poppins", style: "ExtraBold", color: C.primary, maxW: 1150, min: 40 }), "TITLE");
TL(s, 64, 292, 44, "GROWING WITHOUT BURNING OUT", { family: "Poppins", style: "ExtraBold", color: C.ink, maxW: 1150, min: 34 });
TL(s, 64, 360, 22, "₹15 Cr funds a gated route to EBITDA break-even in month 21.", { family: "Poppins", style: "Bold", color: C.alert, maxW: 1150, min: 22 });
// ===== verdict card =====
const v = layered(s, 64, 410, 1116, 208, C.primaryDeep, "CARD: verdict");
const vt = T(v, 24, 20, 1068, 26, "OUR VERDICT: FUND PROPOSAL A, REBUILT, WITH THE SMALLER OPERATIONAL IMPROVEMENTS THE CASE ALLOWS.", { family: "Poppins", style: "Bold", color: C.accent });
T(v, 24, 20 + vt.height + 12, 1068, 22, "Free skipping with a floor, a " + V.plans[0][0] + " entry plan and referral paid on the third box. EBITDA breaks even in " + V.be.toLowerCase() + " on the cash already in the bank, and ready-to-eat opens in year 2 only if cash and LTV to CAC pass a month 12 gate.", { family: "Inter", style: "Semi Bold", color: C.white });
// ===== team =====
TL(s, 64, 628, 32, "TEAM IDEAFORGE", { family: "Poppins", style: "Bold", color: C.primary });
teamTable3(s, 64, 680, [300, 640, 180]);
// ===== precedent strip =====
const p1 = layered(s, 64, 930, 548, 86, C.white, "CARD: precedent gousto");
logoSlot(p1, 16, 13, 70, 60, "Gousto");
T(p1, 100, 14, 432, 22, "Gousto: third profitable year in a row, on a new recipe mix", { family: "Inter", style: "Semi Bold" });
const p2 = layered(s, 632, 930, 548, 86, C.white, "CARD: precedent blueapron");
logoSlot(p2, 16, 13, 70, 60, "Blue Apron");
T(p2, 100, 14, 432, 22, "Blue Apron: about $1.9bn at IPO, sold for $103m", { family: "Inter", style: "Semi Bold" });
// ===== mind map panel =====
const PX = 1236, PY = 160; const rx = x => x - PX, ry = y => y - PY;
const mm = panel(s, PX, PY, 620, 856, "FIVE WAYS TO SOLVE A WEEKDAY DINNER", { layered: true, fill: C.tint, titleColor: C.primaryDeep });
const hub = addFrame(mm, rx(1386), ry(222), 320, 64, C.primaryDeep, C.ink, 2, "CARD: hub");
addText(hub, "Poppins", "Bold", 24, C.white, "A WEEKDAY DINNER", 0, 0, 320, 64, "CENTER", "CENTER", false);
addWireH(mm, rx(1290), rx(1386), ry(254), C.ink, 2.5);
addWireV(mm, rx(1290), ry(254), ry(814), C.ink, 2.5);
const ROUTES = [
  { y: 306, title: "COOK FROM SCRATCH", sub: "groceries in minutes", fill: C.white, logos: ["Blinkit", "Zepto"] },
  { y: 412, title: "ORDER IN", sub: "₹499 to ₹660 an order", fill: C.white, logos: ["Swiggy", "Zomato"] },
  { y: 518, title: "TEN-MINUTE FOOD", sub: "₹250 to ₹450 a meal", fill: C.white, logos: ["Zepto Cafe", "Blinkit Bistro"] },
  { y: 624, title: "PRIVATE-LABEL KIT", sub: V.pl + " a box, retail chains", fill: C.white, logos: [] },
  { y: 730, title: "HARVESTBOX KIT", sub: V.plans[1][0] + " a box", fill: C.primary, logos: [], textColor: C.white }
];
ROUTES.forEach(r => {
  addWireH(mm, rx(1290), rx(1320), ry(r.y + 43), C.ink, 2);
  const card = addFrame(mm, rx(1320), ry(r.y), 380, 86, r.fill, C.ink, 2, "CARD: route " + r.title);
  TL(card, 12, 8, 22, r.title, { family: "Poppins", style: "Bold", color: r.textColor || C.primaryDeep, maxW: 356 });
  T(card, 12, 41, 356, 22, r.sub, { family: "Inter", style: "Semi Bold", color: r.textColor || C.ink });
  if(r.title === "TEN-MINUTE FOOD") {
    const brands=addFrame(mm,rx(1714),ry(r.y+2),136,118,C.white,C.ink,2,"BRANDS: ten-minute food");
    T(brands,6,6,124,22,"Zepto Cafe / Blinkit Bistro",{family:"Inter",style:"Bold"});
  } else r.logos.forEach((brand, i) => logoSlot(mm, rx(1714 + i * 72), ry(r.y + 11), 64, 64, brand));
});
const acc = layered(mm, rx(1320), ry(850), 516, 140, C.accent, "CARD: proposal rebuilt");
TL(acc, 12, 8, 24, "PROPOSAL A, REBUILT", { family: "Poppins", style: "ExtraBold", color: C.primaryDeep, maxW: 492 });
T(acc, 12, 44, 492, 22, V.plans[0][0] + ", " + V.plans[1][0] + " and " + V.plans[2][0] + " plans", { family: "Inter", style: "Bold" });
T(acc, 12, 72, 492, 22, "free skipping with a floor", { family: "Inter", style: "Semi Bold" });
addArrow(mm, rx(1510), ry(816), rx(1510), ry(848), C.ink, 3, 14);
// ===== source =====
nm(addText(s, "Inter", "Semi Bold", 14, C.primary, "Source: Verdict 2.0 case | research sections 2, 9, 11 and 17 | Gousto FY2025 results; Blue Apron IPO and sale | model " + V.hash, 64, 1046, 1792, 20, "RIGHT", undefined, true), "SOURCE");
s.findAll(n=>n.name.startsWith("LOGO:")).forEach(n=>{n.strokes=[];n.dashPattern=[];if(n.children) [...n.children].forEach(c=>c.remove());});
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
