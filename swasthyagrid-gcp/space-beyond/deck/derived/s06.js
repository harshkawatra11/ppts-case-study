{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,4,"5 / 6","IMPLEMENTATION AND FEASIBILITY",560,V.h6,V.src[5]);
rail(s,64,310,240,"CAN IT RUN",C.primaryDeep); rail(s,64,562,232,"THE PLAN",C.primary); rail(s,64,806,226,"RISKS",C.alert);
// band 1: TELOS, resources, law
const p1=pnl(s,116,310,600,240,"TELOS: THREE GREEN, TWO AMBER");
const TE=[["Technical","reads exports states already run","GREEN"],["Economic","licence is 0.25% of NHM share","GREEN"],["Legal","no patient data in scope","GREEN"],["Operational","needs a daily officer habit","AMBER"],["Schedule","MoU must land in week 1","AMBER"]];
tbl(p1,14,46,[140,300,132],["Test","Evidence","Rating"],TE.map(r=>[r[0],r[1],""]),{hh:26,rh:33,name:"telos"});
TE.forEach((r,i)=>rag(p1,14+440+8,46+26+33*i+4,116,25,r[2]));
const p2=pnl(s,728,310,560,240,"RESOURCES REQUIRED: NO NEW HARDWARE");
tbl(p2,14,46,[150,382],["Resource","What it takes"],[["Data","nightly stock export the state makes"],["Facility IDs","ABDM registry IDs, 1 lakh+ facilities"],["People","nodal officer; DHO signs off daily"],["Devices","phones and PCs in use; offline entry"],["Money","₹12 L licence, ₹3 L onboarding"],["Team","first hire paid by first fee"]],{hh:26,rh:27,name:"resources"});
const p3=pnl(s,1300,310,556,240,"WHY A STATE CAN SAY YES: THE LAW");
tbl(p3,14,46,[170,358],["Instrument","What it means here"],[["State List","each state licenses; data stays home"],["DPDP Act, 2023","no patient data in scope"],["CDSCO 2025","governs stock that could not move"],["GeM","a standing route to buy software"]],{hh:26,rh:30,name:"law"});
note(p3,14,198,528,"Our reading: ","counsel confirms before any contract");
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S6");
// band 2: six-week Gantt, twelve-month timeline
const p4=pnl(s,116,562,760,232,"SIX WEEKS FROM MoU TO A LIVE DISTRICT");
const y0=gnt(p4,14,46,220,85,26,["W1","W2","W3","W4","W5","W6"],[{label:"Data MoU signed",s:0,e:0,color:C.primaryDeep},{label:"Map nightly export",s:0,e:1},{label:"Facility logins",s:1,e:2},
  {label:"Train staff",s:2,e:3},{label:"Shadow mode",s:3,e:4,color:C.accent},{label:"Go live, 2 districts",s:5,e:5,color:C.primaryDeep}]);
diamond(p4,14+220+85*5,y0+26*4+13,11,C.alert);
const p5=pnl(s,888,562,968,232,"TWELVE MONTHS: FROM 1 TO 12 DISTRICTS");
addRect(p5,30,70,904,2.5,C.ink);
[["M1","Data MoU signed, first district"],["M1.5","First district live"],["M2 to 3","Shadow review: adoption gate"],["M4 to 6","Districts 2 and 3, same state"],["M7 to 9","Second state MoU: data gate"],["M10 to 12","Districts 4 to 12 live"]].forEach((r,i)=>{
  const x=14+158*i; addEllipse(p5,x+74-7,64,14,14,i%2?C.accent:C.primaryDeep,C.ink,1.5); addRect(p5,x+73,78,2,14,C.ink);
  const f=addFrame(p5,x,92,148,104,i===2||i===4?C.accentTint:C.white,C.ink,1.5,"MILESTONE"); sTL(f,8,2,20,r[0],{color:C.primaryDeep,maxW:132}); sT(f,8,34,132,18,r[1],{family:"Inter",style:"Semi Bold"}); });
[2,4,5].forEach(i=>diamond(p5,14+158*i+104,71,9,C.alert));
diamond(p5,24,214,8,C.alert); sTL(p5,40,203,18,"NITI Aayog's quarterly Delta Ranking: three outside checks in year 1",{family:"Inter",style:"Bold",color:C.primaryDeep});
// band 3: risk heat map, stop rules, validation plan
const p6=pnl(s,116,806,560,226,"SIX RISKS, EACH WITH A FIX");
["I low","I med","I high"].forEach((l,j)=>sTL(p6,0,48,18,l,{family:"Inter",style:"Bold",centerAt:122+64*j}));
const RG=[["R5","R1",""],["","R3 R6","R2"],["","","R4"]], RF=[[C.accentTint,C.accent,C.alert],[HG[1],C.accentTint,C.accent],[HG[1],HG[1],C.accentTint]];
["P high","P med","P low"].forEach((l,i)=>{ sTL(p6,14,74+48*i+13,18,l,{family:"Inter",style:"Bold",maxW:72});
  RG[i].forEach((c,j)=>bx(p6,90+64*j,74+48*i,64,48,c,{fill:RF[i][j],size:18,pad:2})); });
bl18(p6,296,50,250,[["R1 ","freshness flag on data"],["R2 ","buffer when use rises"],["R3 ","alert on an idle queue"],["R4 ","one keen district first"],["R5 ","offline entry, sync"],["R6 ","hire from pilot fees"]],{gap:7});
const p7=pnl(s,688,806,560,226,"THREE STOP RULES, WRITTEN IN ADVANCE");
tbl(p7,14,46,[140,392],["Rule","Stop if"],[["Adoption","under 50% approved after 4 weeks"],["Data","no MoU in 8 weeks, in two states"],["Expiry","pilot expiry share under 6.1%"]],{hh:26,rh:30,name:"stop",strip:[C.alert,C.alert,C.alert]});
note(p7,14,170,532,"Funding: ","no investment asked; a paid pilot, or an AIM digital-health grant of up to ₹65 lakh");
const p8=pnl(s,1260,806,596,226,"40 INTERVIEWS PLANNED, NONE DONE");
[["District health officers",10],["Medical officers",9],["District Collectors",8],["Pharmacists",8],["State NHM officials",5]].forEach((r,i)=>{ const y=48+30*i;
  sTL(p8,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:220}); addRect(p8,240,y+3,28*r[1],18,i===0?C.primaryDeep:C.primary,C.ink,1); sTL(p8,240+28*r[1]+6,y,18,String(r[1]),{family:"Inter",style:"Bold"}); });
sT(p8,14,200,568,18,"A plan, not a result: none done yet",{family:"Inter",style:"Bold",color:C.alert});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
