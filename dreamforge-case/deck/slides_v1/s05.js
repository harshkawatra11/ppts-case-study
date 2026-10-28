{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 4","RECOMMENDATION AND ROADMAP",560,V.h4,V.src[4],{labels:RIBN});
rail(s,64,312,224,"THE ANSWER",C.primaryDeep); rail(s,64,552,254,"ROADMAP",C.primary); rail(s,64,822,208,"RISK AND KPIs",C.alert);
// band 1: the answer
const c=layered(s,120,312,1000,224,C.primaryDeep,"CARD: answer");
T(c,24,14,952,24,"OUR RECOMMENDATION: LEASE BOTH FLEETS, ELECTRIFY FIRST, AND KEEP THE CRORE LIQUID",{family:"Poppins",style:"Bold",color:C.accent});
bl(c,24,96,952,[["Value: ","₹"+V.npv5+" Cr over 48 months, the highest of the six options"],["Liquidity: ","no debt; cash never falls below ₹"+V.min5+" Cr"],["Resilience: ","fuel, subsidy and resale shocks barely move it"]],{color:C.white,leadColor:C.accent,dot:C.accent,gap:8});
const p2=panel(s,1136,312,720,224,"FLEET AT QUARTER END");
let lx=lg(p2,16,56,C.alert,"Petrol"); lx=lg(p2,lx,56,C.primary,"EV, existing"); lg(p2,lx,56,C.primaryDeep,"EV, contract");
stackedCols(p2,16,84,688,136,V.fleet.map(q=>q[0]),[{color:C.alert,values:V.fleet.map(q=>q[1])},{color:C.primary,values:V.fleet.map(q=>q[2])},{color:C.primaryDeep,values:V.fleet.map(q=>q[3])}],{max:175,barW:52,totals:V.fleet.map(q=>String(q[1]+q[2]+q[3]))});
// band 2: roadmap and gates
const p3=panel(s,120,552,1180,254,"24 MONTHS, FOUR GATES");
gantt(p3,16,56,250,112,26,["Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8"],[
  {label:"Leases, charging",s:0,e:0,color:C.primaryDeep},{label:"Electrify 100 bikes",s:0,e:3,color:C.primary},
  {label:"Contract fleet",s:1,e:2,color:C.primaryDeep},{label:"Volume ramp",s:1,e:3,color:C.accent},
  {label:"Emissions reports",s:1,e:7,color:C.blueDeep},{label:"Renew or buy",s:6,e:7,color:C.alert}]);
[[378,109,"G1",1],[602,161,"G2",1],[714,135,"G3",1],[1162,239,"G4",-1]].forEach(g=>{ diamond(p3,g[0],g[1]-11,11,C.accent);
  TL(p3,g[3]>0?g[0]+16:g[0]-48,g[1]-17,22,g[2],{family:"Poppins",style:"Bold"}); });
const p4=panel(s,1316,552,540,254,"GO ONLY IF");
wrapTable(p4,16,56,[82,96,330],["Gate","When","Test"],[["G1","M3","Signed; EVs 95% ready"],["G2","M8","75 EVs live; 95% fulfilled"],["G3","M12","Petrol gone; reports on time"],["G4","M24","Renew if lease under ₹"+V.sw_lease]],{headerH:34,rowH:40,name:"gates"});
// band 3: risks and KPIs
const p5=panel(s,120,822,860,208,"RISKS: PROBABILITY BY IMPACT");
const RL=[C.white,HR[1],HR[2],HR[3],HR[4]], RC=[["","5",""],["","2, 3","1"],["","4",""]];
grid(p5,16,56,["High","Med","Low"],["Low","Med","High"],RC.map((r,i)=>r.map((t,j)=>({t,f:RL[(2-i)+j],tc:(2-i)+j===4?C.white:C.ink}))),{labelW:90,cellW:64,rowH:34,headH:34,corner:"",name:"TABLE: risk"});
badgeList(p5,312,56,532,["No award: lease the 100 anyway, +₹"+V.dnpv6+" Cr","Lessor slips: split orders across two lessors","Downtime: 10 spares and a depot hub","Lease above ₹"+V.sw_lease+" at renewal: buy then","Client pays late: ₹"+V.reserve+" L reserve"],{bg:C.alert,d:26,pitch:30});
const p6=panel(s,996,822,860,208,"WHAT WE REPORT EVERY MONTH");
wrapTable(p6,16,52,[348,148,160,176],["KPI","Today","Month 12","Month 24"],V.kpi,{headerH:34,rowH:30,name:"kpi"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
