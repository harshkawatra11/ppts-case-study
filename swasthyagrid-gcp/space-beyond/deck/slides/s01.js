{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
coverTop(s);
TL(s,64,150,112,"SWASTHYAGRID",{family:"Poppins",style:"ExtraBold",maxW:930,min:80});
addChip(s,64,322,600,50,"THEME: SMART WORLD, BETTER FUTURE",C.accent,C.ink,22);
T(s,64,388,920,28,"Moves the medicine a district already owns, before the state buys more",{family:"Poppins",style:"Bold",color:C.primary});
const v=layered(s,64,492,920,250,C.primaryDeep,"CARD: verdict");
T(v,24,16,872,26,"OUR IDEA: BEFORE INDIA BUYS MORE MEDICINE, MOVE WHAT EACH DISTRICT ALREADY OWNS. ONE MORNING VIEW, ONE RANKED TRANSFER, ONE OFFICER'S SIGN-OFF.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,24,150,872,22,"An estimated 1.36 crore stock-out days avoided a year across India's 38,241 PHCs and CHCs in the base case, from a stated model. This deck presents the idea; the prototype is shown separately in Round 2.",{family:"Inter",style:"Semi Bold",color:C.white});
TL(s,64,764,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary});
teamBT(s,64,830,[250,500,170]);
sT(s,64,994,920,18,"harshkawatra11@gmail.com  |  file: TeamIdeaForge_SpaceAndBeyond",{family:"Inter",style:"Bold",color:C.primaryDeep});
srcLine(s,V.src[0]);
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S1");
const m=addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map");
TL(m,16,10,24,"ONE DISTRICT VIEW, EIGHT ACTORS IT CONNECTS",{color:C.primary,maxW:808}); addRect(m,16,50,808,2,C.ink);
T(m,16,60,808,22,"₹558 Cr of medicine expired in two audited states while PHC shelves ran short: the fix sits inside each district.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const A=[["National Health Mission","State NHM","signs the licence"],["District officer","District officer","approves each move"],["Ayushman Bharat","PHCs and CHCs","38,241 facilities"],
  ["e-Aushadhi","e-Aushadhi","stock ledger we read"],["eVIN","eVIN precedent","80% fewer stock-outs"],
  ["ABDM","ABDM registry","1 lakh+ facility IDs"],["NITI Aayog","NITI Aayog","aspirational list: 112"],["Government of Rajasthan","Rajasthan","41-district beachhead"]];
const P=[[16,140],[294,140],[572,140],[16,410],[572,410],[16,680],[294,680],[572,680]], W=252, Hh=124, HX=420, HY=472;
P.forEach(q=>addDiagonalWire(m,HX,HY,q[0]+W/2,q[1]+Hh/2,C.ink,2.5));
A.forEach((a,i)=>actor(m,P[i][0],P[i][1],W,Hh,a[0],a[1],a[2]));
addEllipse(m,HX-105,HY-105,210,210,C.primaryDeep,C.ink,2.5);
TL(m,0,HY-62,26,"DISTRICT",{color:C.white,centerAt:HX}); TL(m,0,HY-24,26,"VIEW",{color:C.white,centerAt:HX});
TL(m,0,HY+20,22,"SwasthyaGrid",{color:C.accent,centerAt:HX});
[["SEE","under 3 days"],["PROPOSE","nearest stock"],["APPROVE","one officer"]].forEach((r,i)=>{ const x=16+278*i;
  const f=addFrame(m,x,816,252,36,i===2?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,7,232,18,r[0]+": ",r[1],{leadColor:C.primaryDeep});
  if(i<2) arrow(m,x+254,834,x+276,834,C.ink,2); });
fine(m,16,858,808,"Logos mark public bodies referenced in the analysis; no partnership or endorsement is implied.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
