{ const s = await figma.getNodeByIdAsync("S7"); wipe(s); coverTop(s);
nm(TL(s,0,176,104,"THANK YOU",{family:"Poppins",style:"ExtraBold",centerAt:960}),"TITLE");
const v=layered(s,260,370,1400,150,C.primaryDeep,"CARD: therefore");
addText(v,"Poppins","Bold",26,C.accent,"THEREFORE: "+V.thanks,28,0,1344,150,"CENTER","CENTER");
nm(TL(s,0,556,28,V.team.name,{color:C.primary,centerAt:960}),"TEAM LABEL");
teamBT(s,410,604,[300,560,240]);
[["link: research document (PDF)",410],["link: financial model",790],["link: Figma deck",1170]].forEach(l=>imgSlot(s,l[1],800,340,80,l[0]));
addText(s,"Inter","Bold",22,C.primaryDeep,"Every number on these slides comes from the research document and its model, hash "+V.hash+".",260,910,1400,30,"CENTER","CENTER");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,V.src[6]);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
