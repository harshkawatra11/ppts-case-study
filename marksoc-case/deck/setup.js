// Creates (or finds) exactly twelve slides in a new Slides file, names them, checks fonts. Safe to rerun: it never makes a second set.
let grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
if (grid === undefined) { figma.createSlide(); grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID"); }
const all = () => grid.children.flatMap(r => r.children);
let guard = 0; while (all().length < 12 && guard++ < 16) figma.createSlide();
const names = ["01 Cover", "02 Executive Summary", "03 Economics", "04 Trust", "05 Customer", "06 Options", "07 Plan", "08 Launch", "09 Signals",
               "10 Appendix A1", "11 Appendix A2", "12 Thank You"];
const slides = all(); slides.slice(0, 12).forEach((s, i) => { s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: slides.length, ids: slides.slice(0, 12).map(s => s.id), extra: slides.slice(12).map(s => ({ id: s.id, children: s.children.length })),
  fontsOk: need.map(n => fonts.some(f => f.fontName.family === n[0] && f.fontName.style === n[1])) };
