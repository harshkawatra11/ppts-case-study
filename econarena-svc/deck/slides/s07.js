{ const s = await figma.getNodeByIdAsync("S7"); wipe(s);
TL(s,0,70,104,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.ink,centerAt:960});
const c=layered(s,260,250,1400,214,C.primaryDeep,"CARD: therefore");
TL(c,28,14,26,"THEREFORE",{color:C.accent});
T(c,28,58,1344,22,"Setu AI should win mid-sized lenders in Mumbai and Pune first, selling evidence that every collection call followed the rules, on rented models and rented GPUs: "+V.cust24+" lenders, "+V.arr24+" of ARR and "+V.cash24+" in the bank at month 24 in our base case.",{family:"Inter",style:"Semi Bold",color:C.white});
[V.cust24+" lenders by month 24",V.runway+" of runway left","0 GPUs owned, "+V.co2l+" of CO2e"].forEach((g,i)=>bx(c,28+448*i,140,430,48,g,{fill:C.accent,fam:"Poppins",st:"Bold",size:20}));
TL(s,0,496,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
teamBT(s,420,560,[300,600,180]);
[["SVC",100],["Econ-Arena",170],["DTU",100],["GGSIPU",100],["Ramjas College",100]].reduce((x,l)=>{ logoSlot(s,x,792,l[1],72,l[0]); return x+l[1]+24; },960-(570+96)/2);
TL(s,0,890,22,"The research document and the model back every number on these slides",{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:960});
sTL(s,0,930,18,"harshkawatra11@gmail.com  |  Team IdeaForge  |  Econ-Arena, Blisspoint'26-27, Sri Venkateswara College",{family:"Inter",style:"Bold",centerAt:960});
srcLine(s,"Source: team model "+V.hash+" | Econ-Arena case packet, October 2026");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
