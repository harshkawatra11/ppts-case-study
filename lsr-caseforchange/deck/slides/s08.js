{ const s = await figma.getNodeByIdAsync("S8"); tplClear(s); head(s, 8);
nm(TL(s, 0, 150, 60, "THANK YOU", { family: "Poppins", style: "ExtraBold", color: C.primaryDeep, centerAt: 960 }), "TITLE");
nm(addText(s, "Poppins", "Bold", 28, C.primary, V.s8.thesis, 260, 278, 1400, 46, "CENTER", undefined, true), "THESIS");
addChip(s, 780, 364, 360, 46, V.team.name, C.primary, C.white, 22);
teamTable(s, 400, 436);
nm(addText(s, "Inter", "Semi Bold", 24, C.ink, "Prepared for the Case for Change business crisis case, Economics Department, Lady Shri Ram College for Women", 260, 792, 1400, 40, "CENTER", undefined, true), "LINKS");
nm(addText(s, "Inter", "Semi Bold", 24, C.ink, "Questions welcome.", 260, 856, 1400, 40, "CENTER", undefined, true), "CLOSE");
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
