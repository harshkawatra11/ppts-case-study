{ const s = await figma.getNodeByIdAsync("S9");
skelBT(s,7,"8 / 8","ROADMAP AND RISKS",380,V.f9,"Source: research sections 21 to 23 | model "+V.hash+", T12, T13, T14 | claims: CCPA coaching guidelines 2024 and ASCI education code, secondary sources (R-H)");
const rp=panel(s,64,316,760,714,"TWELVE MONTHS, TWO WAVES, ONE ROAD");
nm(addRect(rp,24,60,44,640,C.primaryDeep,C.ink,2),"ROADSEG"); dashedV(rp,46,72,616,C.accent,3);
[["OCT TO DEC 2026: DTU FIRST","Gate the library, publish a fee band, start workshops and the mock drive."],
 ["JAN 2027: SEASON 1 OPENS","BITS Pilani and NIT Tiruchirappalli open with cohorts of "+V.cohort20+"; DTU batch on 15 January."],
 ["FEB TO APR 2027: SEASON 1 GATES","Day 30, 60 and 90 checks on applications, fill and offers decide scale, hold or stop."],
 ["MAY TO JUN 2027: SEASON 2 OPENS","PEC Chandigarh and COEP Pune, run on the playbook Season 1 has tested."],
 ["JUL TO SEP 2027: HAND OVER, REVIEW","Season 1 ambassadors start; year one closes near "+V.total_enrol+" enrolments, base case."]]
.forEach((st,i)=>{ const y=64+i*128; pin(rp,46,y+58,34,String(i+1),C.primary,C.white);
  const f=addFrame(rp,88,y,656,116,i===1||i===3?C.accentTint:C.white,C.ink,2,"STOP "+(i+1)); TL(f,16,8,22,st[0],{color:C.primary,maxW:624}); T(f,16,44,624,22,st[1]); });
const mp=panel(s,840,316,500,714,"ONE NORTH STAR, FIVE MEASURES");
const ns=addFrame(mp,16,60,468,84,C.primaryDeep,C.ink,2,"NORTH STAR");
TL(ns,14,6,22,"NORTH STAR: DTU ENROLMENTS",{color:C.accent,maxW:440}); TL(ns,14,44,22,V.now+" now, "+V.enrol+" by month 12 (base)",{family:"Inter",style:"Bold",color:C.white,maxW:440});
wrapTable(mp,16,156,[168,100,100,100],["By month","M3","M6","M12"],V.t13.map(r=>[r[0],r[2],r[3],r[4]]),{rowH:54,headerH:40,name:"kpi"});
[["CAN SAY","Named results, with consent after the offer",C.goodTint],["CANNOT SAY","Guaranteed selection or 100% placement",C.alertTint]]
.forEach((b,i)=>{ const f=addFrame(mp,16+i*240,478,228,120,b[2],C.ink,2,"CLAIM "+b[0]); TL(f,10,4,22,b[0],{color:C.primaryDeep}); T(f,10,36,208,22,b[1]); });
T(mp,16,612,468,22,"Tracked with a UTM link per channel, a referral code per ambassador and one shared lead sheet.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const kp=panel(s,1356,316,500,530,"TWELVE RISKS, ONE MITIGATION EACH");
const e={t:"",f:C.white}, A=C.accentTint, G=C.goodTint;
grid(kp,16,60,["High","Medium","Low"],["Low","Med.","High"],[[e,{t:"1 2 4",f:A},e],[{t:"3 7 9 12",f:G},{t:"6 8 11",f:A},e],[{t:"5 10",f:G},e,e]],{labelW:120,cellW:116,rowH:44,headH:44,corner:"Impact",name:"TABLE: risk grid"});
fine(kp,16,242,468,"Rows: impact. Columns: probability. Amber: 1, 2, 4, 6, 8, 11. Green: the rest.");
bl(kp,16,290,468,[["1 Society dependency: ","sign co-host terms before any cash; name a second society."],["2 Founder overload: ","no Season 1 until DTU hours track toward "+(V.hours[0]+V.hours[1])+"."],
 ["4 Bear-case CAC: ","the gates stop spend; the "+V.t6[0][2]+" stress spend is never funded."]],{gap:8});
const c=layered(s,1356,852,500,170,C.primaryDeep,"CARD: therefore");
TL(c,18,10,24,"THEREFORE: THE FIRST STEP",{color:C.accent,maxW:464});
T(c,18,50,464,22,"By 31 October 2026: gate the 8 PDFs, publish the fee band, and sign DCG and 180DC DTU for the December and February workshops.",{color:C.white});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
