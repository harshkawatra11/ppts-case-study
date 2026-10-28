// Creates (or finds) exactly eight slides, names them, checks fonts. Safe to rerun: it never makes a second set.
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 8 && guard++ < 10) figma.createSlide();
const names = ["01 Cover", "02 Diagnosis and Evaluation", "03 Strategic Recommendation", "04 Financial and Risk Case", "05 90-Day Plan and KPIs", "06 Appendix 1", "07 Appendix 2", "08 Thank You"];
const slides = all(); slides.slice(0, 8).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 8).map(s => s.id), extra: slides.slice(8).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
