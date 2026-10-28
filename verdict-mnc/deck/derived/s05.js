{ const s = await figma.getNodeByIdAsync("S5");
skel(s,5,"4 90-DAY PLAN AND KPIs",410,V.f5,"Source: Verdict 2.0 case, deliverable 4 and the ₹15 Cr constraint | research sections 18, 22 to 24 | model "+V.hash+", tables T10, T11");
const gp=panel(s,64,318,1140,354,"90 DAYS: PROPOSAL A LIVE IN FIVE CITIES BY WEEK 12");
gantt(gp,16,58,330,59,31,["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10","W11","W12","W13"],[
 {label:"Build skip, pause, sizes",s:0,e:4},{label:"Pilot in one city",s:5,e:7,color:C.accent},{label:"Roll out to five cities",s:8,e:11},
 {label:"Referral and win-back live",s:8,e:12},{label:"Channel audit, prune paid",s:0,e:3,color:C.alert},{label:"Margin sprint: waste, menu",s:1,e:12,color:C.primaryDeep},
 {label:"Overheads: lease, hiring",s:0,e:5,color:C.primaryDeep},{label:"Board gate review",s:12,e:12,color:C.accent}]);
const up=panel(s,1220,318,636,354,"WHERE THE ₹15 CR GOES IN 24 MONTHS");
const UC=[C.primary,C.alert,C.accent,C.alertTint,C.good];
segBar(up,16,62,604,52,V.uses.map((u,i)=>({v:u[1],c:UC[i],t:u[1]>=1.5?u[1].toFixed(1):"",tc:(i===2||i===3)?C.ink:C.white})));
addTable(up,16,128,[440,164],["Use of cash","₹ Cr"],V.uses.map(u=>[u[0],u[1].toFixed(2)]),{rowH:34,headerH:36,totalRow:null}).name="TABLE: uses of cash";
const kp=panel(s,64,688,1240,342,"SEVEN KPIs FOR THE BOARD, EACH WITH A STOP TRIGGER");
addTable(kp,16,58,[360,120,150,130,130,318],["KPI","Today","Day 90","Month 12","Month 24","Stop trigger"],V.kpi,{rowH:34,headerH:38}).name="TABLE: kpis";
const tc=layered(s,1320,688,529,335,C.primaryDeep,"CARD: therefore");
TL(tc,20,14,28,"THEREFORE: THREE GATES",{color:C.accent,maxW:489});
[["Day 90: ","Proposal A live in five cities, pilot retention 62%."],["Month 6: ","hold, push or cut, read from the seven KPIs."],
 ["Month 12: ","cash of ₹7 Cr and 2.2x release ready-to-eat."],["Miss a gate: ","the contingency halves paid acquisition."]]
 .forEach((r,i)=>rt(tc,20,66+i*66,489,22,r[0],r[1],{color:C.white,leadColor:C.accent}));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
