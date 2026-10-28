{ const s = await figma.getNodeByIdAsync("S8"); wipe(s);
addChip(s,64,48,460,56,"VERDICT 2.0 · CASE COMPETITION",C.primary,C.white,22);
[["Avsar",556],["SDC",664],["MNC",772],["DU",880]].forEach(l=>logoSlot(s,l[1],40,96,72,l[0]));
addChip(s,1476,48,380,56,V.team.name,C.primaryDeep,C.white,22);
addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2));
nm(TL(s,0,176,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",centerAt:960}),"TITLE");
const v=layered(s,260,372,1400,150,C.primaryDeep,"CARD: verdict");
addText(v,"Poppins","Bold",26,C.accent,"Fund Proposal A, rebuilt: break-even in "+V.be.toLowerCase()+" on the ₹15 Cr in the bank. Ready-to-eat follows behind a cash gate.",28,0,1344,150,"CENTER","CENTER");
nm(TL(s,0,560,28,V.team.name,{color:C.primary,centerAt:960}),"TEAM LABEL");
teamTableN(s,400,612,[280,620,220]);
logoSlot(s,900,850,120,96,"HarvestBox");
addText(s,"Inter","Bold",22,C.primaryDeep,"Every number on these slides traces to the case, a stated assumption or the model.",260,962,1400,30,"CENTER","CENTER");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,"Source: Verdict 2.0 case, HarvestBox: Growing Without Burning Out (Motilal Nehru College, 2026) | Team IdeaForge model "+V.hash);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
