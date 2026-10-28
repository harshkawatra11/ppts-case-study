// Creates (or finds) exactly eleven slides, names them, checks fonts. Safe to rerun: it never makes a second set.
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 11 && guard++ < 14) figma.createSlide();
const names = ["01 Cover", "02 Executive Summary", "03 Diagnosis", "04 DTU Plan", "05 DTU Budget", "06 College Selection", "07 Pan-India Launch", "08 Launch Playbook", "09 Roadmap and Risks", "10 Appendix", "11 Thank You"];
const slides = all(); slides.slice(0, 11).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 11).map(s => s.id), extra: slides.slice(11).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
