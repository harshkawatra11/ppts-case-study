{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 4","STRATEGIC ALTERNATIVES",420,V.h2x,V.src3x,{labels:RIBN});
rail(s,64,310,240,"SIX OPTIONS",C.primaryDeep); rail(s,64,562,232,"TRADE-OFFS",C.primary); rail(s,64,806,226,"VERDICT",C.alert);
// band 1: MECE matrix, options table, Harvey scorecard
const p1=pnl(s,116,310,520,240,"TWO CHOICES, SIX OPTIONS (MECE)");
bx(p1,14,46,120,28,"Fleet / deal",{fill:C.tint});
["Decline","Win, buy","Win, lease"].forEach((c,j)=>bx(p1,134+124*j,46,124,28,c,{fill:C.tint}));
const MF={R:C.primaryDeep,O:C.alertTint,N:C.surfaceAlt,B:HG[1],P:HG[2]};
V.mece.forEach((row,i)=>{ bx(p1,14,74+52*i,120,52,row[0],{fill:C.white}); row[1].forEach((c,j)=>bx(p1,134+124*j,74+52*i,124,52,c[0],{fill:MF[c[1]],color:c[1]==="R"?C.white:C.ink})); });
const p2=pnl(s,648,310,760,240,"SIX OPTIONS ON ONE SET OF NUMBERS");
tbl(p2,14,46,[180,64,78,70,70,78,92,70],["Option","Deal","Capex","Debt","Floor","NPV","Run-rate","gCO2"],V.opts2,{hh:26,rh:24,name:"options",align:["LEFT","LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,C.alertTint,null,C.tint]});
fine(p2,14,218,732,"₹ lakh; NPV in ₹ Cr, 48 months, 11%; floor = lowest cash; gCO2 at M24");
const p3=pnl(s,1420,310,436,240,"WEIGHTED SCORE, 5 CRITERIA");
bx(p3,14,46,28,44,"#",{fill:C.tint,pad:2});
V.hcrit.forEach((c,j)=>bx(p3,42+64*j,46,64,44,c,{fill:C.tint,pad:3}));
bx(p3,362,46,60,44,"Total",{fill:C.tint,pad:3});
V.cards.forEach((r,i)=>{ const y=90+24*i, hl=i===5, f=addFrame(p3,14,y,408,24,hl?C.tint:(i%2?C.surfaceAlt:C.white),C.ink,1,"ROW");
  sTL(f,0,1,18,String(i+1),{family:"Inter",style:"Bold",centerAt:14}); r.forEach((v,j)=>harvey(f,28+64*j+32,12,18,v-1));
  sTL(f,0,1,18,V.scores[i].toFixed(2),{family:"Inter",style:"Bold",centerAt:378,color:hl?C.primaryDeep:C.ink}); });
// band 2: capture-versus-cost 2x2, the obvious answer, lease against own
const p4=pnl(s,116,562,520,232,"VALUE AGAINST CAPITAL TIED UP");
const L0=62,R0=500,T0=72,B0=194,X=v=>L0+24+(R0-L0-40)*v/220,Y=v=>B0-(B0-T0)*v/7;
sTL(p4,L0,46,18,"NPV, ₹ Cr",{family:"Inter",style:"Bold",color:C.primaryDeep});
addRect(p4,X(110),T0,1.5,B0-T0,C.surface); addRect(p4,L0,Y(3.5),R0-L0,1.5,C.surface);
addRect(p4,L0,B0,R0-L0,2,C.ink); addRect(p4,L0,T0,2,B0-T0,C.ink);
[0,100,200].forEach(v=>sTL(p4,0,B0+3,18,String(v),{family:"Inter",style:"Semi Bold",centerAt:X(v)}));
[2,4,6].forEach(v=>sTL(p4,0,Y(v)-11,18,String(v),{family:"Inter",style:"Semi Bold",rightAt:L0-6}));
sTL(p4,0,B0+3,18,"Capex, ₹ L",{family:"Inter",style:"Bold",centerAt:(X(100)+X(200))/2});
sTL(p4,X(110)+8,T0+2,18,"Value, needs debt",{family:"Inter",style:"Bold",color:C.alert});
sTL(p4,0,B0-26,18,"Capital, less value",{family:"Inter",style:"Bold",rightAt:R0-4});
V.bub.forEach(b=>bub(p4,X(b[0]),Y(b[1]),26+b[3]/5,String(b[2]),b[2]===6?C.primaryDeep:(b[2]===4?C.alert:C.blueDeep),C.white));
const p5=nm(pnl(s,648,562,520,232,""),"PANEL: obvious");
const t5=TL(p5,14,5,22,"THE OBVIOUS ANSWER: BUY BOTH",{color:C.alert,maxW:492}); addRect(p5,14,39,492,2,C.ink); strike(p5,t5,C.alert);
V.obvious.forEach((b,i)=>{ const y=50+i*34; addEllipse(p5,14,y,26,26,C.alert,C.ink,1.5); sTL(p5,0,y,18,String(i+1),{color:C.white,centerAt:27}); sT(p5,50,y+2,456,18,b,{family:"Inter",style:"Semi Bold"}); });
callout(p5,14,156,492,68,"CONCLUSIVELY: ","lease both, and buy only if a lease tops ₹"+V.sw_lease+" a month.",{fill:C.tint});
const p6=pnl(s,1180,562,676,232,"ONE BIKE, ₹ A MONTH: LEASE BEATS OWN");
let lx=lgS(p6,14,46,C.alert,"Petrol"); lx=lgS(p6,lx,46,C.primaryDeep,"Capital"); lgS(p6,lx,46,C.primary,"Running");
cols(p6,14,70,300,156,["Petrol","Bought","Leased"],[{color:C.alert,values:[9000,0,0]},{color:C.primaryDeep,values:[0,V.own_cap+V.own_chg,0]},{color:C.primary,values:[0,V.own_run,3500]}],{max:9500,bw:66,totals:["9,000",V.own_all,V.lease]});
tbl(p6,326,46,[226,110],["Check","₹ a month"],V.costfacts,{hh:26,rh:28,name:"costfacts",align:["LEFT","RIGHT"],fills:[C.tint,null,null,C.alertTint]});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S3");
const p7=pnl(s,116,806,760,226,"7 SHOCKS FROM THE CASE: CHANGE IN NPV, ₹ L");
hgrid(p7,14,46,V.heat_rows2,["1","2","3","4","5","6"],V.heat.map(r=>r.map(v=>dvCell(v))),{lw:240,cw:76,rh:22,hh:24,corner:"Option",name:"shocks"});
const p8=pnl(s,888,806,520,226,"NPV, ₹ CR, WITH BEAR-BULL RANGE");
const NX=v=>186+300*v/7;
V.npvr.forEach((r,i)=>{ const y=48+i*25; sTL(p8,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:166}); addRect(p8,NX(0),y+3,Math.max(2,NX(r[1])-NX(0)),14,i===5?C.primaryDeep:(i===3?C.alert:C.surface),C.ink,1);
  sTL(p8,NX(r[1])+6,y-2,18,r[1].toFixed(2),{family:"Inter",style:"Bold",color:i===5?C.primaryDeep:C.ink});
  if(r[2]!==null){ addRect(p8,NX(r[2]),y+20,Math.max(2,NX(r[3])-NX(r[2])),2.5,C.ink); addRect(p8,NX(r[2])-1,y+16,2.5,9,C.ink); addRect(p8,NX(r[3])-1,y+16,2.5,9,C.ink); } });
fine(p8,14,202,492,"Bar: base. Line: bear to bull, options 1, 4, 6.");
const c=layered(s,1420,806,436,219,C.primaryDeep,"CARD: verdict");
TL(c,18,8,22,"THE VERDICT: OPTION 6",{color:C.accent,maxW:400});
bl(c,18,50,400,V.verdict,{color:C.white,leadColor:C.accent,dot:C.accent,gap:8});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
