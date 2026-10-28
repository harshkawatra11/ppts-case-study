{ const s = await figma.getNodeByIdAsync("S11"); tplClear(s); head(s, 11);
nm(TL(s, 0, 190, 72, "THANK YOU", { family: "Poppins", style: "ExtraBold", color: C.primaryDeep, centerAt: 960 }), "TITLE");
nm(addText(s, "Poppins", "Bold", 30, C.primary, "UrjaGrid: brownout, never blackout. The flexibility is already on the wall.", 260, 330, 1400, 50, "CENTER", undefined, true), "THESIS");
addChip(s, 780, 430, 360, 50, "TEAM IDEAFORGE", C.primary, C.white, 24);
teamTable(s, 400, 510);
nm(addText(s, "Inter", "Semi Bold", 24, C.ink, "Built by Team IdeaForge for Challenge 03, Grid Reliability", 260, 760, 1400, 40, "CENTER", undefined, true), "LINKS");
nm(addText(s, "Inter", "Semi Bold", 24, C.ink, "Questions welcome.", 260, 820, 1400, 40, "CENTER", undefined, true), "CLOSE");
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
