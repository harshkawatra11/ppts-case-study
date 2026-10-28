{ const s = await figma.getNodeByIdAsync("S1"); s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.white }];
addChip(s, 64, 48, 520, 56, "NSBC · CONSILIUM'26 · NSUT", C.primary, C.white, 22);
addChip(s, 608, 48, 360, 56, "PRELIMS DECK", C.accent, C.ink, 22);
addChip(s, 1476, 48, 380, 56, "TEAM IDEAFORGE", C.primaryDeep, C.white, 22);
addWireH(s, 64, 1856, 140, C.ink, 2.5);
[64, 460, 860, 1260, 1848].forEach(cx => addEllipse(s, cx - 8, 132, 16, 16, C.white, C.ink, 2));
nm(TL(s, 64, 172, 96, "TOING: SWIGGY'S ₹99 PROBLEM", { family: "Poppins", style: "ExtraBold", maxW: 1120, min: 56 }), "TITLE");
T(s, 64, 340, 1120, 32, "A Board recommendation from Swiggy's internal strategy team on the ₹99 meals app", { family: "Poppins", style: "Bold", color: C.primary });
const v = layered(s, 64, 440, 1120, 280, C.primaryDeep, "CARD: verdict");
T(v, 28, 22, 1064, 30, "Keep Toing but stop paying for ₹99 trips: rebuild it around pooled Drops and slot batching, and grow it only where the trip pays for itself", { family: "Poppins", style: "Bold", color: C.accent });
T(v, 28, 170, 1064, 22, "A ₹99 order loses " + r1(V.t.contrib).replace("−", "") + " today because a ₹" + V.t.rider.toFixed(0) + " trip sits on ₹" + V.t.rev.toFixed(0) + " of revenue. The rebuild reaches " + r1p(V.br.end) + " an order and is worth " + cr(V.ms.gap_R_S) + " over three years against scaling Toing as it runs.", { color: C.white });
TL(s, 64, 744, 26, "TEAM IDEAFORGE", { color: C.primary });
teamTable(s, 64, 788);
const r = layered(s, 1236, 172, 620, 808, C.tint, "CARD: arithmetic");
TL(r, 24, 18, 24, "THE ARITHMETIC IN FIVE LINES", { color: C.primaryDeep, maxW: 572 });
addRect(r, 24, 58, 572, 2, C.ink);
[["₹" + V.t.cust.toFixed(0), "is what a Toing customer pays for a ₹99 meal, after GST and a ₹12 fee"],
 ["₹" + V.t.rev.toFixed(0), "is what Swiggy keeps, against a ₹" + V.t.rider.toFixed(0) + " rider trip"],
 [r1(V.t.contrib), "contribution per order today; a ₹700 order earns ₹" + V.c.ebitda.toFixed(0) + " of EBITDA"],
 [V.ns.toFixed(1) + " meals", "per Drop run is where a ₹99 order stops losing money"],
 [r1p(V.br.end), "blended per order once seven levers are on"]].forEach((f, i) => { const y = 72 + i * 124;
  TL(r, 24, y, 40, f[0], { family: "Poppins", style: "ExtraBold", color: i === 2 ? C.alert : C.primary, maxW: 572 }); T(r, 24, y + 62, 572, 22, f[1]); });
logoSlot(r, 24, 700, 270, 80, "Swiggy"); logoSlot(r, 326, 700, 270, 80, "NSUT FES");
addWireH(s, 64, 1856, 1004, C.ink, 2.5);
const src = addText(s, "Inter", "Semi Bold", 14, C.primary, "Source: NSBC case document (C01 to C14) | Swiggy Q1 FY27 shareholder letter | Team IdeaForge model and research document (appendix)", 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
