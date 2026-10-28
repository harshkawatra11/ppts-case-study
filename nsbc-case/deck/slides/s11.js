{ const s = await figma.getNodeByIdAsync("S11"); s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.white }];
addWireH(s, 64, 1856, 140, C.ink, 2.5);
[64, 460, 960, 1460, 1848].forEach(cx => addEllipse(s, cx - 8, 132, 16, 16, C.white, C.ink, 2));
addChip(s, 700, 48, 520, 56, "NSBC · CONSILIUM'26 · NSUT", C.primary, C.white, 22);
nm(TL(s, 0, 250, 120, "THANK YOU", { family: "Poppins", style: "ExtraBold", centerAt: 960, maxW: 1500, min: 80 }), "TITLE");
const t = T(s, 260, 450, 1400, 30, "Keep Toing, stop paying for ₹99 trips, and let the month-6 gate decide.", { family: "Poppins", style: "Bold", color: C.primary, align: "CENTER" });
TL(s, 0, 560, 26, "TEAM IDEAFORGE", { color: C.primary, centerAt: 960 });
teamTable(s, 400, 610);
T(s, 260, 850, 1400, 22, "Questions are welcome on any number in this deck. Every figure traces to the case, a cited public source, or our model, listed in the appendix.", { align: "CENTER" });
addWireH(s, 64, 1856, 1004, C.ink, 2.5);
const src = addText(s, "Inter", "Semi Bold", 14, C.primary, "Source: NSBC, Consilium'26, NSUT | Team IdeaForge", 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
