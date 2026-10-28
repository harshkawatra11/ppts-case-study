{ const s = await figma.getNodeByIdAsync("S11"); wipe(s); coverTop(s);
nm(TL(s,0,170,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",centerAt:960}),"TITLE");
const v=layered(s,260,370,1400,150,C.primaryDeep,"CARD: verdict");
addText(v,"Poppins","Bold",26,C.accent,"Distribute proof, not awareness: "+V.budget_lk+" at DTU for "+V.enrol+" enrolments, and four new campuses entered through their own societies.",28,0,1344,150,"CENTER","CENTER");
nm(TL(s,0,556,28,V.team.name,{color:C.primary,centerAt:960}),"TEAM LABEL");
teamBT(s,410,604,[300,500,300]);
logoSlot(s,875,790,170,60,"BeyondTech");
addText(s,"Inter","Bold",22,C.primaryDeep,"The research document and the model workbook back every number on these slides.",260,880,1400,30,"CENTER","CENTER");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,"Source: BeyondTech x DCG case brief 2026 | Team IdeaForge research document and model "+V.hash);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
