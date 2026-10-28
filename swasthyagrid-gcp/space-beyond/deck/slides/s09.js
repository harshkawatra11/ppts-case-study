{ const s = await figma.getNodeByIdAsync("S9"); wipe(s);
TL(s,0,96,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.ink,centerAt:960});
const c=layered(s,260,300,1400,214,C.primaryDeep,"CARD: therefore");
TL(c,28,14,26,"THEREFORE",{color:C.accent});
T(c,28,62,1344,24,"Before India buys more medicine, it should move what each district already owns: one morning view, one ranked transfer, one officer's sign-off, and an estimated 1.36 crore stock-out days avoided a year in the base case.",{family:"Inter",style:"Semi Bold",color:C.white});
["1.36 crore days a year, an estimate","₹12 L a district, 0.25% of its NHM share","6 weeks from MoU to a live district"].forEach((g,i)=>bx(c,28+448*i,138,430,48,g,{fill:C.accent,fam:"Poppins",st:"Bold",size:20}));
TL(s,0,552,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
teamBT(s,440,620,[300,560,180]);
[["NSUT",150],["Space and Beyond",180],["DTU",150],["GGSIPU",150]].reduce((x,l)=>{ logoSlot(s,x,800,l[1],72,l[0]); return x+l[1]+24; },960-(630+72)/2);
TL(s,0,900,22,"The prototype and its user flow are demonstrated in Round 2",{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:960});
sTL(s,0,940,18,"harshkawatra11@gmail.com  |  Team IdeaForge  |  Space & Beyond 2026, NSUT",{family:"Inter",style:"Bold",centerAt:960});
srcLine(s,V.src[8]);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
