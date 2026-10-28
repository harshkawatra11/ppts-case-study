{ const s = await figma.getNodeByIdAsync("S8"); wipe(s);
TL(s, 0, 150, 112, "THANK YOU", { family: "Poppins", style: "ExtraBold", color: C.primary, centerAt: 960 });
TL(s, 0, 500, 32, "TEAM IDEAFORGE", { family: "Poppins", style: "Bold", color: C.primary, centerAt: 960 });
teamTable3(s, 400, 556, [300, 640, 180]);
const ORG = ["Project Avsar", "The Skill Development Cell", "Motilal Nehru College", "University of Delhi"];
[785, 875, 965, 1055].forEach((ox, i) => logoSlot(s, ox, 860, 80, 80, ORG[i]));
nm(addText(s, "Inter", "Semi Bold", 14, C.primary, "Source: Team IdeaForge | Verdict 2.0, Motilal Nehru College", 64, 1046, 1792, 20, "RIGHT", undefined, true), "SOURCE");
s.findAll(n=>n.name.startsWith("LOGO:")).forEach(n=>{n.strokes=[];n.dashPattern=[];if(n.children) [...n.children].forEach(c=>c.remove());});
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
