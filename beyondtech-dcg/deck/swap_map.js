// Step D8 only, and only if the generated India map passed the acceptance test. Replace SLIDE_ID with the id of slide S7.
const s=await figma.getNodeByIdAsync("SLIDE_ID"); const panel=s.children.find(c=>c.name==="PANEL: WHERE: FOUR PICKS, FOUR CAMPUSES TODAY");
const dots=panel.children.filter(c=>c.name==="MAPDOT"); dots.forEach(d=>d.remove());
const f=figma.createFrame(); panel.appendChild(f); f.resize(420,436); f.fills=[]; f.cornerRadius=0; f.x=16; f.y=60; f.name="IMG: india-base";
panel.insertChild(0,f);
return {removed:dots.length, slot:f.id};
