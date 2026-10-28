{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 4","THE SITUATION",320,V.h1,V.src[1],{labels:RIBN});
rail(s,64,312,250,"TODAY",C.primaryDeep); rail(s,64,578,218,"PRESSURE",C.alert); rail(s,64,812,218,"THE CHALLENGE",C.primary);
// band 1: where SwiftKart stands
kpi(s,120,312,270,113,"100","petrol bikes today",{size:44,ny:2,ly:78});
kpi(s,404,312,270,113,"₹"+V.rev0+" Cr","revenue a year",{size:44,ny:2,ly:78});
kpi(s,120,441,270,113,"₹"+V.rr0+" L","contribution a year",{size:44,ny:2,ly:78,color:C.alert});
kpi(s,404,441,270,113,V.margin0,"contribution margin",{size:44,ny:2,ly:78,color:C.alert});
const p1=panel(s,696,312,524,250,"ONE BIKE-MONTH, ₹ THOUSAND");
waterfall(p1,16,52,492,192,V.wf.map(w=>[w[0],w[1]/1000]),{min:0,max:29,dp:1,labelH:40,labelDy:6,barW:72});
const p2=panel(s,1236,312,620,250,"PER BIKE-MONTH, ₹");
const UEL=["Petrol","EV bought, running","EV bought, all-in","EV leased","EV leased, 100% use"];
wrapTable(p2,16,56,[256,108,108,116],["Bike","Cost","Left","Margin"],V.ue.map((r,i)=>[UEL[i],r[2],r[3],r[4]]),{headerH:34,rowH:30,name:"unit",fills:[C.alertTint,C.white,C.surfaceAlt,C.tint,C.tint]});
// band 2: the pressure
const p3=panel(s,120,578,560,218,"DELHI PETROL, ₹ A LITRE");
const last=V.petrol[V.petrol.length-1];
lineChart(p3,16,52,528,160,[{values:V.petrol.map(d=>d[1]),color:C.alert,label:"₹"+last[1].toFixed(2)}],V.petrol.map(d=>d[0]),{yMin:85,yMax:110,yTicks:[90,100,110],padL:60,padR:110});
const p4=panel(s,696,578,524,218,"CLIENTS ARE GOING ELECTRIC");
V.clients.forEach((c,i)=>{ const y=60+i*50; logoSlot(p4,16,y,100,42,c[0]); T(p4,130,y+6,378,22,c[1],{family:"Inter",style:"Bold"}); });
const p5=panel(s,1236,578,620,218,"DELHI'S RULES SET THE CLOCK");
addWireH(p5,40,580,104,C.ink,3);
V.policy.forEach((q,i)=>{ const cx=90+i*147; addEllipse(p5,cx-10,94,20,20,i===2?C.alert:C.primary,C.ink,2);
  TL(p5,0,58,22,q[0],{centerAt:cx}); T(p5,cx-70,122,140,22,q[1],{align:"CENTER",family:"Inter",style:"Bold"}); });
fine(p5,16,190,588,V.pmline);
// band 3: the challenge
const p6=panel(s,120,812,856,218,"THE CONTRACT, READ CLOSELY");
badgeList(p6,16,60,824,["₹2.8 Cr is 75 × 30 × 26 × ₹40 × 12: full use. At 85% it is ₹"+V.c_rev85+" Cr",
  "One charge covers 30 deliveries, a full day at 100% use",
  "95% fulfilment needs spares; petrol fails the low-emission test",
  "Monthly emissions reports need data SwiftKart does not collect"],{bg:C.alert,d:32,pitch:38});
const c=layered(s,992,812,864,218,C.primaryDeep,"CARD: challenge");
TL(c,24,14,24,"THE CHALLENGE: DO BOTH ON ₹1 CRORE",{color:C.accent,maxW:816});
T(c,24,56,816,22,"Buying the 185 EVs both jobs need costs ₹"+V.capex3+" L after subsidy, twice the crore. Doing both needs a cheaper way to get vehicles than owning them, and a contract won on reliability and data.",{color:C.white});
[["FIX THE MARGIN",24],["WIN THE CONTRACT",304],["STAY LIQUID",584]].forEach(q=>addChip(c,q[1],158,264,44,q[0],C.primary,C.white,22));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
