{ const s = await figma.getNodeByIdAsync("S6");
skelAP(s,3,"4 / 5","MECHANISM AND PROOF",380,"A porous first coat holds "+V.base_pvc+" TiO2 in "+V.P+" air under a "+V.X2+" seal coat, and matches the premium white with "+V.g_prop+" of TiO2 per m² against "+V.g_ref,
  "Source: team optical model "+V.hash+" (T7, T9 to T11, T15) | Burresi et al. 2014, Sci. Rep. 4, 6075 | ISO 6504-3, ASTM D2486 | research sections 14 to 18 and 22 | photo: A. Parnell, Wikimedia Commons, CC BY-SA 4.0");
rail(s,40,312,216,"HOW IT WORKS",C.primaryDeep); rail(s,40,540,216,"THE PROOF",C.alert); rail(s,40,768,220,"HOW IT IS MADE",C.primary);
const p1=pnl(s,92,312,780,216,"THE FILM, IN SECTION");
film(p1,14,46,300,{hs:34,hb:110,hp:22});
[["Seal "+V.X2+": latex bigger than pores"],["Base "+V.X1+": "+V.P+" air, rutile, chalk"],["Rutile sees index "+V.nh+", not 1.49"],["Same wet film; air is free volume"]].forEach((r,i)=>{
  addBadge(p1,330,48+40*i,28,i+1,C.primary,C.white); sTL(p1,368,50+40*i,18,r[0],{family:"Inter",style:"Bold",maxW:398}); });
const p2=pnl(s,884,312,440,216,"WHAT THE RUTILE SEES");
const gain=nh=>{ const r=V.host_rows.reduce((a,b)=>Math.abs(parseFloat(b[0])-nh)<Math.abs(parseFloat(a[0])-nh)?b:a); return r[2]; };
hgrid(p2,14,46,["Bear","Base","Bull"],["Air","Index","Gain","Saved"],["bear","base","bull"].map(k=>{ const hl=k==="base", f=hl?C.primaryDeep:(k==="bull"?HG[3]:HG[1]), tc=hl?C.accent:C.ink;
  return [V.scen[k].P,V.scen[k].nh,gain(parseFloat(V.scen[k].nh)),V.scen[k].sav].map(t=>({t,f,tc})); }),{lw:90,cw:80,rh:34,hh:28,corner:"Case",name:"scenarios"});
sT(p2,14,184,412,18,"Gain: scattering against rutile in binder",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p3=layered(s,1336,312,544,216,C.white,"CARD: nature");
addFrame(p3,14,14,130,186,null,C.ink,2,"IMG: Cyphochilus beetle");
TL(p3,158,8,22,"NATURE GOT HERE FIRST",{color:C.primaryDeep,maxW:372});
const tx=sT(p3,158,44,372,18,"The Cyphochilus beetle's scales: chitin filaments in air, about 5 µm thick, white with no pigment. Our base coat copies the network; the seal coat closes it.",{family:"Inter",style:"Semi Bold"});
sT(p3,158,tx.y+tx.height+6,372,18,"“the beetle scales exhibit the lowest transport mean free path length” Burresi et al., 2014",{family:"Inter",style:"Bold",color:C.primary});
const g0=V.hiding_base[3], g1=V.hiding_air[1];
const p4=pnl(s,92,540,540,216,g1[0].toFixed(0)+" g IN AIR HIDES LIKE "+g0[0].toFixed(0)+" g IN BINDER");
xyS(p4,14,46,512,164,[{pts:V.hiding_base,color:C.alert},{pts:V.hiding_air,color:C.primary}],
  {xMin:0,xMax:36,yMin:0.95,yMax:1.0,yTicks:[0.95,0.97,0.99],xTicks:[0,6,12,18,24,30,36],yFmt:v=>v.toFixed(2),padL:60});
lgS(p4,300,128,C.primary,"air network, CR"); lgS(p4,300,152,C.alert,"conventional coat, CR");
const m=layered(s,644,540,470,216,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,16,6,22,"TWO COATS, THE SAME WHITE",{color:C.accent,maxW:438});
TL(m,16,36,60,V.sav+" LESS TiO2",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:438,min:40});
sTL(m,16,126,18,V.g_ref+" to "+V.g_prop+" a m² at CR "+V.CR_min+" and Y "+V.Y_target,{family:"Inter",style:"Bold",color:C.white,maxW:438});
[["Bear",V.sav_bear,C.surfaceAlt],["Base",V.sav,C.accent],["Bull",V.sav_bull,C.surfaceAlt]].forEach((r,i)=>{ const b=addFrame(m,16+148*i,152,138,60,r[2],C.ink,1.5,"CASE");
  sTL(b,10,19,18,r[0],{family:"Inter",style:"Bold"}); TL(b,0,10,28,r[1],{family:"Poppins",style:"ExtraBold",color:i===1?C.primaryDeep:C.primary,rightAt:128}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p6=pnl(s,1126,540,372,216,"THE SAME SPECTRUM");
const lx=lgS(p6,14,46,C.alert,"premium"); lgS(p6,lx,46,C.primary,"ours");
const sp=V.spectral.filter(r=>r[0]>=440);
xyS(p6,14,72,344,140,[{pts:sp.map(r=>[r[0],r[1]]),color:C.alert},{pts:sp.map(r=>[r[0],r[2]]),color:C.primary}],{xMin:440,xMax:720,yMin:0.88,yMax:0.92,yTicks:[0.88,0.9,0.92],xTicks:[450,550,650],yFmt:v=>v.toFixed(2),padL:56});
const p7=pnl(s,1510,540,370,216,"AGAINST THE TARGETS");
tbl(p7,14,46,[154,104,84],["Measure","Premium","Ours"],[["Contrast ratio",V.CR_ref,V.CR_prop],["Brightness Y",V.Y_ref,V.Y_prop],["L*",V.L_ref,V.L_prop],
  ["b*, yellowness",V.b_ref,V.b_prop],["TiO2 a m²",V.g_ref,V.g_prop],["NIR, 1,500 nm",V.nir_rows[3][1],V.nir_rows[3][2]]],{hh:24,rh:24,name:"targets",align:["LEFT","CENTER","CENTER"],fills:[null,null,null,null,C.goodTint,null]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p8=pnl(s,92,768,880,220,"FOUR STEPS ON EQUIPMENT ASIAN PAINTS ALREADY RUNS");
[["1  FINE CHALK","Indian PCC makers","0.6 µm precipitated chalk from lime and CO2"],["2  BASE COAT","plant dispersers","TiO2 and chalk above critical PVC, binder 25% of solids"],
 ["3  SEAL COAT","letdown tanks","acrylic latex larger than the pores, plus "+V.seal_pvc+" TiO2"],["4  ON THE WALL","painters, as today","coat 1, let it dry, coat 2; same rollers and rate"]].forEach((r,i)=>
  step(p8,14+212*i,46,204,164,r[0],r[1],r[2],{hs:20,hfill:i===3?C.primary:C.primaryDeep}));
const p9=pnl(s,984,768,896,220,"THE LAB PLAN, NOT YET RUN: ONE TEST PER CHALLENGE");
tbl(p9,14,46,[200,300,368],["Brief challenge","Test","Pass mark"],[["Opacity","ISO 6504-3, contrast ratio","Y "+V.Y_target+" and CR "+V.CR_min+" or more"],["Durability, yellowing","QUV weathering, ASTM D2486","b* 1.4 ±0.2; scrub as premium"],
  ["Dispersion","porosimetry after storage","porosity stays 25 to 45%"],["Supply, economics","pilot batch costing","materials near "+V.inr_prop+" a m²"],["Manufacturing","pilot on existing lines","no new unit operation"]],{hh:26,rh:28,name:"tests"});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
