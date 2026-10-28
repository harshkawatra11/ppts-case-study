{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 4","RECOMMENDATION AND ROADMAP",560,V.h4x,V.src5x,{labels:RIBN});
rail(s,64,310,236,"THE ANSWER",C.primaryDeep); rail(s,64,558,236,"ROADMAP",C.primary); rail(s,64,806,226,"RISKS AND KPIs",C.alert);
// band 1: pyramid answer, client funnel, decision tree
const c=layered(s,116,310,620,229,C.primaryDeep,"CARD: answer");
T(c,18,8,584,22,"OUR ANSWER: LEASE BOTH FLEETS, ELECTRIFY FIRST AND KEEP THE CRORE LIQUID",{family:"Poppins",style:"Bold",color:C.accent});
addRect(c,309,78,2,12,C.accent); addRect(c,112,88,396,2,C.accent);
V.pillars.forEach((q,i)=>{ const x=18+i*198; addRect(c,x+93,88,2,12,C.accent); const f=addFrame(c,x,100,188,119,C.primary,C.ink,1.5,"PILLAR");
  sTL(f,10,4,18,q[0],{family:"Poppins",style:"Bold",color:C.accent}); TL(f,10,30,26,q[1],{family:"Poppins",style:"ExtraBold",color:C.white,maxW:168,min:22}); sT(f,10,70,168,18,q[2],{family:"Inter",style:"Bold",color:C.white}); });
const p2=pnl(s,748,310,560,236,"LAND AND EXPAND: THE CLIENT FUNNEL");
fun(p2,14,48,250,V.funnel.map((f,i)=>({t:f[0],size:20,tc:i<2?C.white:C.ink})),{th:32,gap:4,minW:96});
V.funnel.forEach((f,i)=>sT(p2,276,48+i*36+5,270,18,f[1],{family:"Inter",style:"Bold"}));
const p3=pnl(s,1320,310,536,236,"TWO DECISIONS STAY OPEN");
bx(p3,14,94,84,64,"Lease\nnow",{fill:C.primaryDeep,color:C.white,size:20,fam:"Poppins"});
addRect(p3,98,125,28,2,C.ink); diamond(p3,140,126,14,C.accent); sTL(p3,0,146,18,"M3",{family:"Inter",style:"Bold",centerAt:140});
elb(p3,154,126,190,74,C.good,2.5); elb(p3,154,126,190,164,C.alert,2.5);
bx(p3,190,50,150,48,"Contract won",{fill:HG[1]}); bx(p3,190,140,150,48,"Not awarded",{fill:C.alertTint});
addRect(p3,340,73,16,2,C.ink); addRect(p3,340,163,16,2,C.ink);
bx(p3,356,50,166,48,"Option 6\n₹"+V.npv5+" Cr NPV",{fill:C.primaryDeep,color:C.white}); bx(p3,356,140,166,48,"No award\n₹"+V.npv6+" Cr NPV",{fill:C.white});
note(p3,14,196,508,"M36: ","renew under ₹"+V.sw_lease+" a month, else buy");
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S5");
// band 2: Gantt with gates, gate tests
const p4=pnl(s,116,558,1180,236,"24 MONTHS IN EIGHT QUARTERS, FOUR GO OR STOP GATES");
const GC=[C.primaryDeep,C.primary,C.alert,C.primaryDeep,C.accent,C.blueDeep,C.alert];
const y0=gnt(p4,14,46,270,106,22,["Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8"],V.gantt.map((r,i)=>({label:r[0],s:r[1],e:r[2],color:GC[i]})));
V.gates.forEach(g=>{ const gx=14+270+106*g[1], gy=y0+22*g[2]+11; diamond(p4,gx,gy,11,C.accent); sTL(p4,gx+14,gy-12,18,g[0],{family:"Poppins",style:"Bold"}); });
const p5=pnl(s,1308,558,548,236,"GO ONLY IF");
tbl(p5,14,46,[58,66,396],["Gate","When","Test"],V.gates_rows,{hh:26,rh:28,name:"gates"});
note(p5,14,190,520,"FALLBACK: ",V.fallback);
// band 3: risk heat map, KPI tree, impact
const p6=pnl(s,116,806,620,226,"12 RISKS: IMPACT BY PROBABILITY");
hgrid(p6,14,46,["High","Med","Low"],["Low","Med","High"],V.riskmap.map((r,i)=>r.map((t,j)=>({t,f:[C.white,HR[1],HR[2],HR[3],HR[4]][(2-i)+j],tc:(2-i)+j===4?C.white:C.ink}))),{lw:64,cw:82,rh:50,hh:24,corner:"",name:"risk"});
V.riskctrl.forEach((r,i)=>sRT(p6,334,48+i*44,272,18,r[0],r[1],{leadColor:C.alert}));
const p7=pnl(s,748,806,600,226,"KPI TREE: 14 NUMBERS EVERY MONTH");
bx(p7,14,52,160,166,"CONTRIBUTION\n₹"+V.rr5+" Cr a year",{fill:C.primaryDeep,color:C.white,size:18,fam:"Poppins"});
V.kpitree.forEach((b,i)=>{ const yy=52+i*58; bx(p7,198,yy,150,50,b[0],{fill:[C.primary,C.blueDeep,C.good][i],color:C.white,size:18,fam:"Poppins"}); elb(p7,174,135,198,yy+25); bx(p7,368,yy,218,50,b[1],{fill:C.surfaceAlt,st:"Semi Bold",align:"LEFT"}); addRect(p7,348,yy+24,20,2,C.ink); });
const p8=pnl(s,1360,806,496,226,"IMPACT: PEOPLE, PLANET, PROFIT");
V.impact.forEach((k,i)=>{ const x=14+i*158; TL(p8,x,46,30,k[0],{family:"Poppins",style:"ExtraBold",color:[C.primary,C.good,C.primaryDeep][i],maxW:150,min:22}); sTL(p8,x,92,18,k[1],{family:"Poppins",style:"Bold"}); sT(p8,x,120,150,18,k[2],{family:"Inter",style:"Semi Bold"}); });
note(p8,14,188,468,"",V.dels_note);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
