{ const s = await figma.getNodeByIdAsync("S10"); tplClear(s); head(s, 10);
nm(addText(s, "Poppins", "Bold", 30, C.primary, "Hisaab: every mismatch gets a rupee value, an owner and a date.", 260, 300, 1400, 50, "CENTER", undefined, true), "THESIS");
addChip(s, 780, 420, 360, 50, "TEAM IDEAFORGE", C.primary, C.white, 24);
teamTable(s, 400, 500);
nm(addText(s, "Inter", "Semi Bold", 24, C.ink, "Questions welcome.", 260, 760, 1400, 40, "CENTER", undefined, true), "CLOSE");
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
