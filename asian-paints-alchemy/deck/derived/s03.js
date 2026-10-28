{ const s = await figma.getNodeByIdAsync("S3");
skelAP(s,0,"1 / 5","THE TECHNOLOGY",300,"Keep rutile and hold it in sealed air: a two-coat white that matches a premium finish with "+V.sav+" less TiO2 and "+V.inr_cut+" lower material cost per m²",
  "Source: team optical model "+V.hash+" (T4, T8, T9, T12, T13) | DGTR findings 2025, 2026 | case scores are team judgement, research section 8 | research sections 2, 8 and 12 to 23");
const a=layered(s,40,306,1840,56,C.primaryDeep,"CARD: our answer");
TL(a,16,10,22,"OUR ANSWER",{color:C.accent}); T(a,190,12,1630,22,"Keep the rutile, move it into a network of air and seal the air in, inside the two coats painters already apply.",{color:C.white});
[["THE BRIEF ASKS",100,C.primaryDeep],["THE OBVIOUS MOVE",345,C.alert],["WHAT WE RECOMMEND",715,C.good],["THE PROOF",1095,C.primaryDeep],["THE RESULT",1545,C.primaryDeep]].forEach(h=>TL(s,h[1],374,22,h[0],{color:h[2]}));
addRect(s,60,410,1820,2,C.ink); addRect(s,73,424,2.5,330,C.primaryDeep);
const NO=(x,y)=>{ const f=addFrame(s,x,y,28,28,null,null,0,"ICON: no"); addEllipse(f,0,0,28,28,C.alert,C.ink,1.5); addDiagonalWire(f,9,9,19,19,C.white,3); addDiagonalWire(f,19,9,9,19,C.white,3); };
const YES=(x,y)=>{ const f=addFrame(s,x,y,28,28,null,null,0,"ICON: yes"); addEllipse(f,0,0,28,28,C.good,C.ink,1.5); addDiagonalWire(f,7,15,12,20,C.white,3); addDiagonalWire(f,12,20,21,9,C.white,3); };
const ROW=(yR,n,A,B,Cc,E)=>{ addBadge(s,60,yR+4,28,n,C.primaryDeep,C.white);
  TL(s,100,yR,22,A[0],{color:C.primaryDeep,maxW:232}); sT(s,100,yR+36,232,18,A[1],{family:"Inter",style:"Bold",color:C.alert}); sT(s,100,yR+82,232,18,A[2],{family:"Inter",style:"Semi Bold"});
  NO(345,yR+4); const b=TL(s,381,yR,22,B[0],{color:C.alert,maxW:320}); addRect(s,b.x,b.y+b.height/2,b.width,2.5,C.alert); sT(s,345,yR+38,350,18,B[1],{family:"Inter",style:"Semi Bold"});
  YES(715,yR+4); TL(s,751,yR,22,Cc[0],{color:C.good,maxW:330}); sT(s,715,yR+38,362,18,Cc[1],{family:"Inter",style:"Semi Bold"});
  TL(s,1545,yR-4,44,E[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:330,min:30}); sT(s,1545,yR+62,330,18,E[1],{family:"Inter",style:"Bold"}); };
const bar=(x,y,lab,v,max,col,txt)=>{ sTL(s,x,y,18,lab,{family:"Inter",style:"Bold",maxW:150}); const w=Math.max(3,Math.round(190*v/max)); addRect(s,x+156,y+3,w,16,col,C.ink,1); sTL(s,x+164+w,y,18,txt,{family:"Inter",style:"Bold"}); };
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r])), reach=["S06","S07","S08","S09","S11"].filter(k=>SN[k][1]!==null).length;
ROW(420,1,["MAKE IT WHITER","Opacity, challenge W-K1","Slides 2 to 4"],["Find a new pigment",reach+" of 5 TiO2-free designs reach Y "+V.Y_target+"; zinc sulfide, the closest, gets "+SN.S06[2]+"."],
  ["Move the TiO2 into air","A base coat above its critical PVC is "+V.P+" air, so rutile sees index "+V.nh+", not 1.49."],[V.sav,"less TiO2 per m² at Y "+V.Y_target+" and CR "+V.CR_min+", in our model"]);
sTL(s,1095,422,18,"Scattering per µm³ of rutile",{family:"Inter",style:"Bold",color:C.primaryDeep});
[["Binder, 1.49",V.host_rows[5][1],C.alert],["Ours, "+V.nh,V.host_rows[2][1],C.primary],["Air, 1.00",V.host_rows[0][1],C.primaryDeep]].forEach((r,i)=>bar(1095,450+26*i,r[0],parseFloat(r[1]),13,r[2],r[1]));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const NO=(x,y)=>{ const f=addFrame(s,x,y,28,28,null,null,0,"ICON: no"); addEllipse(f,0,0,28,28,C.alert,C.ink,1.5); addDiagonalWire(f,9,9,19,19,C.white,3); addDiagonalWire(f,19,9,9,19,C.white,3); };
const YES=(x,y)=>{ const f=addFrame(s,x,y,28,28,null,null,0,"ICON: yes"); addEllipse(f,0,0,28,28,C.good,C.ink,1.5); addDiagonalWire(f,7,15,12,20,C.white,3); addDiagonalWire(f,12,20,21,9,C.white,3); };
const ROW=(yR,n,A,B,Cc,E)=>{ addBadge(s,60,yR+4,28,n,C.primaryDeep,C.white);
  TL(s,100,yR,22,A[0],{color:C.primaryDeep,maxW:232}); sT(s,100,yR+36,232,18,A[1],{family:"Inter",style:"Bold",color:C.alert}); sT(s,100,yR+82,232,18,A[2],{family:"Inter",style:"Semi Bold"});
  NO(345,yR+4); const b=TL(s,381,yR,22,B[0],{color:C.alert,maxW:320}); addRect(s,b.x,b.y+b.height/2,b.width,2.5,C.alert); sT(s,345,yR+38,350,18,B[1],{family:"Inter",style:"Semi Bold"});
  YES(715,yR+4); TL(s,751,yR,22,Cc[0],{color:C.good,maxW:330}); sT(s,715,yR+38,362,18,Cc[1],{family:"Inter",style:"Semi Bold"});
  TL(s,1545,yR-4,44,E[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:330,min:30}); sT(s,1545,yR+62,330,18,E[1],{family:"Inter",style:"Bold"}); };
const bar=(x,y,lab,v,max,col,txt)=>{ sTL(s,x,y,18,lab,{family:"Inter",style:"Bold",maxW:150}); const w=Math.max(3,Math.round(190*v/max)); addRect(s,x+156,y+3,w,16,col,C.ink,1); sTL(s,x+164+w,y,18,txt,{family:"Inter",style:"Bold"}); };
[542,666,792].forEach(y=>dashedH(s,60,y,1820,C.ink,2));
ROW(546,2,["CUT THE BILL","Supply, economics, W-K4","Slides 4 and 7"],["Wait for cheap TiO2","57% of Indian demand came from China; a duty of $460 to $681 a tonne is recommended again."],
  ["Buy less of it",V.g_cut+" less TiO2 and "+(parseFloat(V.binder_ref)-parseFloat(V.binder_prop)).toFixed(1)+" g less binder per m²; finer chalk adds back ₹"+V.cost_prop.PCC.toFixed(1)+"."],[V.ap.base.net_cr,"a year at 40% adoption; "+V.ap.base.avoided+" of TiO2 not bought, estimate"]);
sTL(s,1095,548,18,"Material cost per m², two coats, ₹",{family:"Inter",style:"Bold",color:C.primaryDeep});
bar(1095,576,"Premium",parseFloat(V.inr_ref.replace("₹","")),20,C.alert,V.inr_ref); bar(1095,602,"Ours",parseFloat(V.inr_prop.replace("₹","")),20,C.primary,V.inr_prop);
sTL(s,1095,632,18,V.inr_cut+" lower, "+V.inr_cut_bear+" to "+V.inr_cut_bull+" across cases",{family:"Inter",style:"Bold",color:C.good});
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r]));
ROW(670,3,["MAKE IT AT SCALE","Manufacturing, W-K5; W-Q4 to Q7","Slides 6 and 7"],["Build a new particle","Yolk-shell and hollow particles need a new synthesis line and save at most "+SN.S05[1]+"% of TiO2."],
  ["Same plant, same coats","Base coat and seal coat run on today's dispersers; painters apply two coats as now."],["12 months","to an interior pilot; lab panels and Gate 0 by month 6"]);
sTL(s,1095,672,18,"TiO2 saved under the same test",{family:"Inter",style:"Bold",color:C.primaryDeep});
[["Hollow polymer","S02",C.tint],["Nano-air binder","S03",C.tint],["Hollow rutile","S05",C.tint],["Ours","S10",C.primary]].forEach((r,i)=>bar(1095,698+22*i,r[0],SN[r[1]][1],40,r[2],SN[r[1]][1]+"%"));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
rail(s,40,800,188,"IN TOTAL",C.primary);
const p1=pnl(s,92,800,500,188,"TiO2 PER m², TWO COATS, g");
const gb=parseFloat(V.g_prop_bear), gu=parseFloat(V.g_prop_bull);
cols(p1,14,44,472,136,["Premium","Bear","Base","Bull"],[{values:[V.g_tio2_ref,0,0,0],color:C.alert},{values:[0,gb,0,gu],color:C.primary},{values:[0,0,V.g_tio2_prop,0],color:C.primaryDeep}],{max:46,bw:62,totals:[V.g_ref,V.g_prop_bear,V.g_prop,V.g_prop_bull]});
const p2=pnl(s,604,800,640,188,"THREE CASES, ONE ANSWER");
const K=["bear","base","bull"], CF=[{f:C.alertTint,tc:C.alert},{f:C.primaryDeep,tc:C.accent},{f:C.goodTint,tc:C.good}];
hgrid(p2,14,46,["TiO2 saved","Material cost cut","Net saving a year","TiO2 avoided a year"],["Bear","Base","Bull"],
  [K.map(k=>V.scen[k].sav),K.map(k=>V.econ[k].cut),K.map(k=>V.ap[k].net_cr),K.map(k=>V.ap[k].avoided)].map(r=>r.map((t,j)=>({t,f:CF[j].f,tc:CF[j].tc}))),{lw:228,cw:128,rh:26,hh:26,corner:"Case",name:"cases"});
const p3=pnl(s,1256,800,300,188,"WHY CASE STUDY 1");
[["1 Whiteness",4.5],["2 Thermal",3.3],["3 Bio-based",3.25],["4 AI, data",3.05]].forEach((r,i)=>{ const y=46+26*i, w=Math.round(76*r[1]/4.5);
  sTL(p3,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:128}); addRect(p3,146,y+3,w,16,i===0?C.primaryDeep:C.tint,C.ink,1); sTL(p3,152+w,y,18,r[1].toFixed(2),{family:"Inter",style:"Bold"}); });
sT(p3,14,152,272,18,"Weighted, team judgement",{family:"Inter",style:"Bold",color:C.primaryDeep});
const f=layered(s,1568,800,312,188,C.primaryDeep,"CARD: first step");
TL(f,14,6,22,"THE FIRST STEP",{color:C.accent,maxW:284});
const f1=sT(f,14,42,284,18,"By month 6: 27 panels in a 3 by 3 test of porosity and seal infiltration, read for Y "+V.Y_target+" and CR "+V.CR_min+" at Gate 0.",{family:"Inter",style:"Bold",color:C.white});
sT(f,14,f1.y+f1.height+6,284,18,"Then a pilot batch on existing lines.",{family:"Inter",style:"Bold",color:C.accent});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
