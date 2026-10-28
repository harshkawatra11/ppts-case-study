{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 3","R3 + R4 COORDINATION AND PILOT",560,
"One compact gives every agency a duty and a gain; a "+V.sellers+"-seller pilot in "+V.clusters+" clusters tests the reform for "+V.budget_cr+" and scales only if seller margin rises and integrity holds",
"Source: team model "+V.hash+" (T10, T11) | DGFT Towns of Export Excellence list | GI registry | ODOP | India Post 2025 (1,013 DNKs) | compact, pilot design, gates and targets are proposals");
rail(s,64,310,240,"THE COMPACT",C.primaryDeep); rail(s,64,562,470,"THE PILOT",C.primary);
// band 1: who holds what the seller needs; give and get
const p1=pnl(s,116,310,560,240,"MIND MAP: WHO HOLDS WHAT SELLERS NEED");
const L=[["CBIC\nrisk engine",HG[3]],["DGFT\nEOR, hubs",HG[3]],["DoP\n1,013 DNKs",HG[3]],["RBI\npayment feed",HG[2]]];
const R=[["GSTN\nrefund match",HG[2]],["Platforms\nfee sheet",C.accentTint],["Carriers\nrate card",C.accentTint],["Councils\nseller drive",C.accentTint]];
const hx=280, hy=141;
[0,1,2,3].forEach(i=>{ const y=48+48*i+22; addDiagonalWire(p1,154,y,hx,hy,C.ink,2); addDiagonalWire(p1,406,y,hx,hy,C.ink,2); });
L.forEach((b,i)=>bx(p1,14,48+48*i,140,44,b[0],{fill:b[1]}));
R.forEach((b,i)=>bx(p1,406,48+48*i,140,44,b[0],{fill:b[1]}));
addEllipse(p1,hx-55,hy-55,110,110,C.primaryDeep,C.ink,2.5);
TL(p1,0,hy-30,22,"DPIIT",{color:C.white,centerAt:hx}); sTL(p1,0,hy+2,18,"compact",{family:"Inter",style:"Bold",color:C.accent,centerAt:hx});
const p2=pnl(s,688,310,1168,240,"GIVE AND GET: ONE DUTY, ONE GAIN, ONE SCORECARD LINE");
const hd=["Actor","Gives","Gets","KPI"], cw2=[112,170,170,110];
tbl(p2,14,46,cw2,hd,[["DPIIT","Convenes, funds","Export growth","Exporters"],["DGFT","EOR rules, hubs","District data","New firms"],["CBIC","Risk engine, tiers","Item-level data","Error rate"],["DoP","Desks at DNKs","Parcel volume","Ship days"]],{hh:26,rh:32,name:"givegetA",strip:[C.primaryDeep,HG[3],HG[3],HG[3]]});
tbl(p2,588,46,cw2,hd,[["RBI, banks","Payment feed","Fewer open bills","Realised"],["GSTN","Refund match","Lower refund risk","Refunds"],["Platforms","Fee sheet, data","New supply","Fees"],["Carriers","Cluster rate card","Pooled volume","₹ a parcel"]],{hh:26,rh:32,name:"givegetB",strip:[HG[2],HG[2],C.accent,C.accent]});
note(p2,14,206,1140,"Rule: ","the scorecard is published monthly; any blocker goes to the committee within two weeks");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
// the six clusters on the map
const mp=pnl(s,116,562,520,470,"SIX CLUSTERS, SIX PRODUCTS, SIX REGIONS");
const MX=14,MY=50,MW=290,MH=301;
mapDots(mp,MX,MY,MW,MH,INDIA_MAP,36,HG[2]);
const P=[[1,26.91,75.79,"Jaipur","block print, North"],[2,28.84,78.77,"Moradabad","brassware, North"],[3,25.32,82.99,"Varanasi","silk stoles, East"],
 [4,23.25,69.67,"Kutch","embroidery, West"],[5,12.65,77.21,"Channapatna","wooden toys, South"],[6,23.83,91.28,"Agartala","cane, bamboo, NE"]];
P.forEach(q=>{ const g=geo(MX,MY,MW,MH,q[1],q[2]); pin(mp,g[0],g[1],28,String(q[0]),q[0]<=3?C.primaryDeep:C.alert,C.white); });
P.forEach((q,i)=>{ const y=48+i*52; TL(mp,318,y,22,q[0]+" "+q[3],{color:C.primaryDeep,maxW:188}); sTL(mp,318,y+30,18,q[4],{family:"Inter",style:"Bold",maxW:188}); });
note(mp,14,366,492,"Why: ","three are named in the brief, two are GI crafts, one is a remote north-east site");
sT(mp,14,430,492,18,"Waves: 1,200 sellers from M3, 1,200 from M7",{family:"Inter",style:"Bold",color:C.primaryDeep});
// twelve months, four gates
const p4=pnl(s,648,562,780,232,"12 MONTHS, TWO WAVES, FOUR GATES");
const GC=[C.primaryDeep,C.accent,C.primary,HG[3],C.alert,HG[4]];
const y0=gnt(p4,14,46,190,46,24,["1","2","3","4","5","6","7","8","9","10","11","12"],[["Legal, tenders",0,1],["Rate card priced",0,1],["Wave 1, 1,200",2,11],["Wave 2, 1,200",6,11],["Integrity audit",3,11],["Evaluation",9,11]].map((r,i)=>({label:r[0],s:r[1],e:r[2],color:GC[i]})));
[["G1",2,1],["G2",6,2],["G3",9,4],["G4",12,5]].forEach(g=>{ const gx=14+190+46*g[1], gy=y0+24*g[2]+12; diamond(p4,gx,gy,11,C.accent);
  sTL(p4,g[1]===12?gx-44:gx+14,gy-12,18,g[0],{family:"Poppins",style:"Bold"}); });
const p5=pnl(s,1440,562,416,232,"GO ONLY IF");
tbl(p5,14,46,[56,74,258],["Gate","When","Test"],[["G1","M2","rate card saves 5% or more"],["G2","M6","wave 1 margin up ₹200+"],["G3","M9","discrepancy no worse"],["G4","M12","3 of 4 KPI targets met"]],{hh:26,rh:30,name:"gates"});
note(p5,14,198,388,"Else: ","revise or stop at that gate");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
// what the pilot buys, three scenarios, risks
const c=layered(s,648,806,400,219,C.primaryDeep,"CARD: pilot");
TL(c,20,6,22,"THE PILOT IN OUR MODEL, BASE",{color:C.accent,maxW:360});
const a1=TL(c,20,48,32,V.budget_cr,{family:"Poppins",style:"ExtraBold",color:C.white});
arrow(c,20+a1.width+10,72,20+a1.width+50,72,C.accent,5);
TL(c,20+a1.width+60,40,44,fmtN(V.act.base),{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:380-a1.width-60,min:30});
T(c,20,104,360,22,"active of "+V.sellers+" by month 12",{family:"Inter",style:"Bold",color:C.white});
addDashedRow(c,20,146,360,C.accent,14,9,2);
[[V.cpa.base,"per seller"],[V.gain_cr.base.replace(" crore"," cr"),"seller gain"],["6","clusters"]].forEach((k,i)=>{ const x=20+i*122;
  TL(c,x,154,22,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:114}); sTL(c,x,186,18,k[1],{family:"Inter",style:"Bold",color:C.white,maxW:114}); });
const p7=pnl(s,1060,806,436,226,"THREE SCENARIOS IN OUR MODEL");
const cr=v=>v.replace(" crore"," cr");
tbl(p7,14,46,[132,92,92,92],["Measure","Bear","Base","Bull"],[["Active",fmtN(V.act.bear),fmtN(V.act.base),fmtN(V.act.bull)],["Seller gain",cr(V.gain_cr.bear),cr(V.gain_cr.base),cr(V.gain_cr.bull)],["₹ per active",V.cpa.bear,V.cpa.base,V.cpa.bull],["Kept/order",V.bear_ref,V.reformed,V.bull_ref]],
  {hh:26,rh:30,name:"scen",align:["LEFT","RIGHT","RIGHT","RIGHT"]});
addRect(p7,14+132+92,46,92,146,null,C.primary,3);
note(p7,14,196,408,"Bear: ","an order still goes from "+V.bear_today+" to "+V.bear_ref);
const p8=pnl(s,1508,806,348,226,"TOP RISKS, ONE FIX EACH");
tbl(p8,14,46,[134,186],["Risk","What we do"],[["Rate card","desk-only package"],["Misuse rises","tighten tiers at G3"],["Delays","2-week escalation"],["Low uptake","local desks"]],{hh:26,rh:34,name:"risks",strip:[C.alert,C.alert,C.accent,C.accent]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
