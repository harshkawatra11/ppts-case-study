// ===== URJAGRID SETUP =====
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const flat = () => { const a = []; for (const r of grid.children) for (const s of r.children) a.push(s); return a; };
for (let k = flat().length; k < 11; k++) figma.createSlide();
let all = flat();
while (all.length > 11) { const e = all.slice().reverse().find(s => s.children.length === 0); if (!e) break; e.remove(); all = flat(); }
const names = ["01 Cover", "02 Problem", "03 Solution", "04 Challenge Fit", "05 Features", "06 Tech", "07 Innovation", "08 Impact", "09 Roadmap", "10 Appendix", "11 Thank You"];
all.forEach((s, i) => { if (names[i]) s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins", "Bold"], ["Poppins", "ExtraBold"], ["Inter", "Semi Bold"], ["Inter", "Bold"]];
return { count: all.length, ids: all.map(s => s.id), fontsOk: need.map(([f, st]) => fonts.some(x => x.fontName.family === f && x.fontName.style === st)) };
