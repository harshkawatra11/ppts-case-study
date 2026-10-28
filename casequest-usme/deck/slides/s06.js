{ const s = await figma.getNodeByIdAsync("S6"); wipe(s); coverTop(s);
nm(TL(s,0,176,104,"THANK YOU",{family:"Poppins",style:"ExtraBold",centerAt:960}),"TITLE");
const v=layered(s,260,370,1400,150,C.primaryDeep,"CARD: therefore");
addText(v,"Poppins","Bold",26,C.accent,"THEREFORE: KEEP EVERY PARCEL DECLARED, GRADE THE SELLER INSTEAD OF THE PARCEL, MOVE THE PAPERWORK TO A CLUSTER DESK, AND TEST IT IN SIX CLUSTERS BEFORE IT SCALES.",28,0,1344,150,"CENTER","CENTER");
nm(TL(s,0,556,28,V.team.name,{color:C.primary,centerAt:960}),"TEAM LABEL");
teamBT(s,410,604,[300,560,240]);
[["FIGMA SLIDES","file GUWUkQ9gxWF1P9NeaBCgez",410],["MODEL","31 assumptions, hash "+V.hash,790],["CONTACT","harshkawatra11@gmail.com",1170]].forEach(l=>{ const f=addFrame(s,l[2],800,340,80,C.tint,C.ink,2,"LINK: "+l[0]); TL(f,0,8,22,l[0],{color:C.primaryDeep,centerAt:170}); sTL(f,0,42,18,l[1],{family:"Inter",style:"Bold",centerAt:170,maxW:320}); });
addText(s,"Inter","Bold",22,C.primaryDeep,"Every number on these slides comes from the research document and its model, hash "+V.hash+".",260,910,1400,30,"CENTER","CENTER");
addWireH(s,64,1856,1012,C.ink,2.5);
srcLine(s,"Source: Team IdeaForge, CaseQuest 2026, USME DTU | research document and model "+V.hash);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

// research link (added after the user's manual edits; Asian Paints linkRow pattern)
{ const s = await figma.getNodeByIdAsync("S6"); const URL="https://github.com/harshkawatra11/ppts-case-study/blob/casequest-usme-build/casequest-usme/research/casequest-research.pdf";
const t0="Read the full research document  →", w=Math.ceil(measureW(s,"Inter","Bold",22,t0)+32);
const f=addFrame(s,Math.round(960-w/2),800,w,46,C.blueTint,C.blue,1.5,"LINKROW: research"); const t=addText(f,"Inter","Bold",22,C.blue,t0,16,0,w-32,46,"LEFT","CENTER");
t.setRangeHyperlink(0,t0.length,{type:"URL",value:URL}); }
