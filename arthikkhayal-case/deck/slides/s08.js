{ const s = await figma.getNodeByIdAsync("S8"); wipe(s);
TL(s,0,96,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.ink,centerAt:960});
const c=layered(s,260,300,1400,214,C.primaryDeep,"CARD: therefore");
TL(c,28,14,26,"THEREFORE",{color:C.accent});
T(c,28,58,1344,22,"ONL Trade should put the account its salary customers already hold in front of them inside the bank: "+V.pp+" and "+V.inc+" more active accounts by 31 January 2027 in our base case, for "+V.cash+" of cash.",{family:"Inter",style:"Semi Bold",color:C.white});
[V.pp+" by 31 Jan 2027, base case",V.cpa+" of cash per extra active","0 offers, 0 F&O prompts, 0 paid media"].forEach((g,i)=>bx(c,28+448*i,140,430,48,g,{fill:C.accent,fam:"Poppins",st:"Bold",size:20}));
TL(s,0,552,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
teamBT(s,420,620,[300,600,180]);
[["DTU",120],["ecotech",150],["YES Securities",220],["Anthill Ventures",170],["Kae Capital",170]].reduce((x,l)=>{ logoSlot(s,x,800,l[1],72,l[0]); return x+l[1]+24; },960-(830+96)/2);
TL(s,0,900,22,"Research document, model and every source are in the appendix",{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:960});
sTL(s,0,940,18,"harshkawatra11@gmail.com  |  Team IdeaForge  |  Arthik Khayal 2026, ecotech, USME DTU",{family:"Inter",style:"Bold",centerAt:960});
srcLine(s,"Source: team activation model "+V.hash+" | case Exhibits 1 and 2");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
