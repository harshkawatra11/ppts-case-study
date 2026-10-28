{ const s = await figma.getNodeByIdAsync("S12"); wipe(s);
TL(s,0,70,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.ink,centerAt:960});
const c=layered(s,260,268,1400,226,C.primaryDeep,"CARD: therefore");
TL(c,28,14,26,"THEREFORE",{color:C.accent});
T(c,28,58,1344,22,"Tikau should certify every phone, promise 85% battery and 12 months, open a third lab shift on 1 February and sell to family buyers. March EBITDA moves from "+V.e0_rl+" to "+V.e_mar_rl+" on ₹"+V.gm_tot+" lakh of growth money, with every board test passed.",{family:"Inter",style:"Semi Bold",color:C.white});
["March EBITDA "+V.e_mar_rl,"Return rate "+V.rr_mar+", limit 6.0%","₹"+V.gm_tot+" of ₹80 lakh spent"].forEach((g,i)=>bx(c,28+448*i,152,430,48,g,{fill:C.accent,fam:"Poppins",st:"Bold",size:20}));
TL(s,0,528,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
teamBT(s,400,590,[300,640,180]);
[["MarKSoc DTU",170],["CrackNontech",220],["DTU",110]].reduce((x,l)=>{ logoSlot(s,x,820,l[1],72,l[0]); return x+l[1]+24; },960-(500+48)/2);
TL(s,0,916,22,"The research document, the model and every working step sit behind this deck",{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:960});
sTL(s,0,956,18,"harshkawatra11@gmail.com  |  Team IdeaForge  |  MarKSoc DTU Case Competition 2026, Project DOBAARA",{family:"Inter",style:"Bold",centerAt:960});
srcLine(s,"Source: team model "+V.hash+" | case Exhibits 1 to 6");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
