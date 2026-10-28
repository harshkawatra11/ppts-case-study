{ const s = await figma.getNodeByIdAsync("S2"); s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.primaryDeep }];
addChip(s, 64, 56, 700, 56, "FINTECHSTICO V7.0 | CONSILIUM'26 | NSUT", C.accent, C.ink, 24);
addChip(s, 1416, 56, 440, 56, "TEAM IDEAFORGE", C.white, C.ink, 24);
nm(TL(s, 64, 132, 112, "HISAAB", { family: "Poppins", style: "ExtraBold", color: C.white }), "TITLE");
nm(TL(s, 64, 300, 30, "Intelligent Tax Reconciliation: Problem Statement 2", { color: C.accent }), "SUBTITLE");
const v = layered(s, 64, 372, 1080, 250, C.white, "CARD: thesis");
addChip(v, 24, 20, 260, 44, "OUR ANSWER", C.primary, C.white, 22);
T(v, 24, 84, 1032, 30, "Every mismatch gets a rupee value, an owner and a date.", { family: "Poppins", style: "Bold", color: C.primary });
T(v, 24, 144, 1032, 22, "Matching rows is already free on the GST portal. Hisaab ranks what to fix first, so input tax credit is not lost in the queue.");
addChip(s, 1180, 372, 560, 44, "WHERE THE BRIEF IS ANSWERED", C.primary, C.white, 22);
addTable(s, 1180, 432, [476, 200], ["Brief asks for", "Slide"], [["Transaction reconciliation", "5, 6"], ["Mismatch and duplicates", "5, 6"], ["Tax verification", "5, 6"], ["Missing and unmatched", "5, 6"], ["Anomaly detection", "5, 6"], ["Tax liability", "5, 8"], ["Dashboard", "5"], ["Synthetic dataset", "6"]],
  { rowH: 30, headerH: 36, name: "TABLE: brief map", align: ["LEFT", "CENTER"] });
nm(TL(s, 64, 664, 26, "TEAM IDEAFORGE", { color: C.accent }), "TEAM LABEL");
teamTable(s, 64, 712);
T(s, 64, 950, 1792, 22, "An idea-stage submission: every performance figure is a design target and every rupee impact is a worked estimate.", { color: C.white });
const src = addText(s, "Inter", "Semi Bold", 14, C.accent, "Source: Fintechstico V7.0 problem statement 2 | Team IdeaForge", 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
