{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 6","THE SOLUTION AND INNOVATION",520,V.h4,V.src[3]);
rail(s,64,310,240,"THE LOOP",C.primaryDeep); rail(s,64,562,232,"HOW IT DECIDES",C.primary); rail(s,64,806,226,"WHY IT IS NEW",C.alert);
// band 1: the daily loop, the rules
const p1=pnl(s,116,310,1080,240,"THE DAILY LOOP: SEE, FLAG, PROPOSE, APPROVE, CONFIRM");
[["1 SEE","District officer","one view of stock, beds and staff in every facility"],["2 FLAG","No person","any item under 3 days of cover is marked"],["3 PROPOSE","No person","nearest surplus ranked; move sized to 21 days"],
 ["4 APPROVE","Named officer","approve, edit or reject; name and time logged"],["5 CONFIRM","Receiving PHC","delivery confirmed; stock updates once"]].forEach((r,i)=>{ const x=14+212*i;
  step(p1,x,46,196,156,r[0],r[1],r[2],i===3?{hfill:C.accent,hc:C.ink,fill:C.accentTint}:{}); if(i<4) arrow(p1,x+198,124,x+210,124,C.ink,2.5); });
dashedH(p1,112,212,856,C.primaryDeep,2.5); addRect(p1,112,202,2.5,12,C.primaryDeep); addRect(p1,966,202,2.5,12,C.primaryDeep);
sTL(p1,0,214,18,"Every confirmed delivery feeds the next morning's view",{family:"Inter",style:"Bold",color:C.primaryDeep,centerAt:540});
const p2=pnl(s,1208,310,648,240,"THE RULES, IN AN OFFICER'S WORDS");
tbl(p2,14,46,[250,370],["Rule","Value"],[["Days of cover","units in stock ÷ average daily use"],["Flag, routine items","under 3 days of cover"],["Flag, emergency drugs","under 5 days (antivenom, anti-rabies)"],
  ["Refill target","21 days of cover"],["Transfer radius","within 40 km"],["Bed redirect","next case to a facility under 90% full"],["Patient data","none, by design"]],{hh:26,rh:23,name:"rules"});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S4");
// band 2: four outcomes, the worked example, before and after
const p3=pnl(s,116,562,500,232,"FOUR OUTCOMES FOR EVERY FLAG");
[["Refill from buffer","district store tops the PHC up to 21 days",C.white],["Lateral transfer","a PHC within 40 km sends its surplus",C.white],
 ["Bed redirect","next case goes to a facility under 90% full",C.white],["Escalate","no surplus anywhere: flagged for purchase",C.alertTint]].forEach((r,i)=>{
  const f=addFrame(p3,14+236*(i%2),48+92*Math.floor(i/2),230,86,r[2],C.ink,1.5,"OUTCOME");
  sTL(f,10,4,20,r[0],{family:"Poppins",style:"Bold",color:i===3?C.alert:C.primaryDeep,maxW:210}); sT(f,10,36,210,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const p4=pnl(s,628,562,600,232,"ONE TRANSFER, WORKED THROUGH");
cols(p4,14,46,180,180,["Before","After"],[{color:C.alert,values:[1.2,0]},{color:C.primary,values:[0,21]}],{max:24,bw:60,totals:["1.2 days","21.0 days"]});
[["See: ","7 ARV vials, 1.2 days of cover"],["Flag: ","under the 3-day line"],["Propose: ","119 vials, district store"],["Approve: ","officer signs, no edit"],["Confirm: ","126 vials, 21.0 days"]].forEach((r,i)=>{
  addBadge(p4,210,48+30*i,24,i+1,C.primaryDeep,C.white); sRT(p4,242,49+30*i,344,18,r[0],r[1],{leadColor:C.primaryDeep}); });
sT(p4,210,202,376,18,"Worked example on simulated data",{family:"Inter",style:"Bold",color:C.alert});
const p5=pnl(s,1240,562,616,232,"BEFORE AND AFTER, FOR THE DISTRICT OFFICER");
tbl(p5,14,46,[176,200,212],["Task","Today","With SwasthyaGrid"],[["Find a shortage","by phone, too late","flagged that morning"],["Pick a source","calls 2 or 3 PHCs","one ranked proposal"],["Record it","nothing kept","name, time logged"],
  ["Expiring stock","written off later","flagged weeks early"],["Daily decisions","one per call","one per flagged item"]],{hh:26,rh:28,name:"beforeafter",bold:[2]});
// band 3: capability grid, ERRC, conclusively
const p6=pnl(s,116,806,700,226,"FIVE PUBLIC SYSTEMS RECORD; NONE PROPOSES A MOVE");
hgrid(p6,14,46,["HMIS","e-Aushadhi","eVIN","IHIP / IDSP","ABDM registry","SwasthyaGrid"],["Stock","District","Medicine","Proposes","Sign-off"],
  [["Part","No","Part","No","No"],["Yes","Part","Yes","No","No"],["Yes","Yes","No","No","No"],["No","Part","No","No","No"],["No","Part","No","No","No"],["SG","SG","SG","SG","SG"]].map(r=>r.map(ynCell)),{lw:170,cw:100,rh:25,hh:25,corner:"System",name:"capability"});
const p7=pnl(s,828,806,500,226,"ERRC: WHAT CHANGES FOR THE OFFICER");
[["ELIMINATE","phone calls to find surplus"],["REDUCE","one approval per flagged item"],["RAISE","speed from flag to sized move"],["CREATE","a move proposed across facilities"]].forEach((r,i)=>{
  const f=addFrame(p7,14+236*(i%2),48+90*Math.floor(i/2),230,84,i===3?C.tint:C.white,C.ink,1.5,"ERRC");
  sTL(f,10,4,20,r[0],{family:"Poppins",style:"Bold",color:C.primaryDeep}); sT(f,10,36,210,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const c=layered(s,1340,806,516,219,C.primaryDeep,"CARD: conclusively");
TL(c,18,8,22,"CONCLUSIVELY",{color:C.accent});
T(c,18,44,480,22,"The medicine is often already inside the district. The missing piece is a daily, ranked proposal a named officer signs, with no patient data and no new hardware.",{family:"Inter",style:"Semi Bold",color:C.white});
["Officer signs","No patient data","Data stays home"].forEach((g,i)=>bx(c,18+162*i,180,156,28,g,{fill:C.accent,size:18,pad:3}));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
