{ const s = await figma.getNodeByIdAsync("S7");
skelAP(s,4,"5 / 5","COST AND SCALE",270,"At 40% adoption in interior emulsions the system saves about "+V.ap.base.net_cr+" a year in materials and "+V.ap.base.avoided+" of TiO2, with no new plant or painter training",
  "Source: team model "+V.hash+" (T12 to T14) | Asian Paints FY26 | Apcolite TDS coverage | TiO2 price, share and adoption are team assumptions A13, A23 to A25 | risk register, research section 24");
rail(s,40,312,216,"COST",C.alert); rail(s,40,540,216,"SCALE",C.primaryDeep); rail(s,40,768,220,"ROLL-OUT",C.primary);
const R=V.cost_ref, P=V.cost_prop, d=k=>Math.round((P[k]-R[k])*100)/100, tot=o=>Object.values(o).reduce((a,b)=>a+b,0);
const p1=pnl(s,92,312,540,216,"MATERIAL COST PER m², TWO COATS, ₹");
wf(p1,14,44,512,145,[["Premium",Math.round(tot(R)*10)/10],["TiO2",d("TiO2")],["Binder",d("binder")],["Fine chalk",d("PCC")],["Coarse chalk",d("GCC")],["Ours",Math.round(tot(P)*10)/10]],{min:0,max:21,dp:1});
fine(p1,14,193,512,"₹18.36 to ₹12.04 before rounding, to the nearest ₹0.1.");
const p2=pnl(s,644,312,620,216,"RAW MATERIALS AND HANDLING");
tbl(p2,14,46,[190,200,202],["Material","What changes","Handling"],[["Rutile TiO2","less of it","same dust controls"],["Fine chalk (PCC)","lime plus CO2","not GHS-classified"],
  ["Acrylic latex","larger latex","closed storage, PPE"],["Silane, exterior","keeps pores dry","diluted in water"]],{hh:26,rh:28,name:"materials"});
sT(p2,14,188,592,18,"TiO2 limits: OSHA 15 mg/m³; NIOSH 2.4 mg/m³ fine",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const p3=pnl(s,1276,312,604,216,"THREE SCENARIOS");
tbl(p3,14,46,[96,100,96,150,134],["Case","TiO2 cut","₹ a m²","₹ a year","TiO2 a year"],["bear","base","bull"].map(k=>[k[0].toUpperCase()+k.slice(1),V.scen[k].sav,V.econ[k].prop,V.ap[k].net_cr,V.ap[k].avoided]),
  {hh:26,rh:26,name:"scenarios",align:["LEFT","CENTER","CENTER","CENTER","CENTER"],fills:[null,C.tint,null]});
const lt=v=>(parseFloat(v.replace("₹",""))*6.71).toFixed(1);
note(p3,14,154,576,"Per litre, two coats: ","₹"+lt(V.inr_ref)+" to ₹"+lt(V.inr_prop)+" at 13.42 m² a litre a coat.");
const tn=parseFloat(V.ap.base.tonnes.replace(/[^0-9.]/g,"")), touched=Math.round(tn*0.4*0.4);
const p4=pnl(s,92,540,470,216,"FROM TiO2 BOUGHT TO TiO2 AVOIDED");
fun(p4,14,46,442,[{t:V.ap.base.tonnes+" TiO2 a year, estimate",size:20,f:HG[5]},{t:"40% sits in interior emulsions",size:18,f:HG[4]},{t:"40% adopt: "+fmtN(touched)+" t",size:18,f:HG[3],tc:C.ink},{t:V.ap.base.m2+" a year",size:18,f:HG[2],tc:C.ink},{t:V.ap.base.avoided+" TiO2 avoided",size:18,f:C.accent,tc:C.ink}],{th:28,gap:4,minW:250});
const p5=pnl(s,574,540,560,216,"WHAT MOVES THE SAVING MOST, % SAVED");
const X0=240, W=280, X=v=>X0+W*v/70, TLB={"What surrounds base-coat particles":"What surrounds rutile","Base-coat porosity":"Base-coat porosity","Seal-coat infiltration into pores":"Seal coat in pores","Minimum seal-coat film":"Seal coat minimum","Base-coat extender size":"Extender size"};
V.tornado_num.forEach((r,i)=>{ const y=48+28*i, lo=Math.min(r[3],r[4]), hi=Math.max(r[3],r[4]);
  sTL(p5,14,y,18,TLB[r[0]]||r[0],{family:"Inter",style:"Bold",maxW:222});
  addRect(p5,X(lo),y+2,Math.max(3,X(hi)-X(lo)),20,i===0?C.alert:C.tint,C.ink,1.5);
  sTL(p5,X(lo)-44,y,18,lo+"%",{family:"Inter",style:"Bold",color:C.primaryDeep}); sTL(p5,X(hi)+6,y,18,hi+"%",{family:"Inter",style:"Bold"}); });
addRect(p5,X(V.sav_num)-1,44,2,144,C.primaryDeep);
sTL(p5,14,190,18,"Base "+V.sav+"; bars span low to high setting",{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:532});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const p6=pnl(s,1146,540,734,216,"WHERE IT APPLIES, AND HOW READY");
const RD={Highest:{f:HG[4],tc:C.white},Medium:{f:HG[2],tc:C.ink},Lower:{f:C.accentTint,tc:C.ink},Lowest:{f:C.alertTint,tc:C.alert}};
const SEG=[["Interior, white, new walls","water","Phase 2","Highest"],["Repaint, 78% of demand","water","Phase 3","Medium"],["Interior, tinted","water","Phase 3","Medium"],["Exterior emulsions","water","Phase 3","Lower"],["Industrial, automotive","solvent","Phase 4","Lowest"]];
hgrid(p6,14,46,SEG.map(r=>r[0]),["Medium","Phase","Ready"],SEG.map(r=>[{t:r[1],f:C.white},{t:r[2],f:C.white},{t:r[3],f:RD[r[3]].f,tc:RD[r[3]].tc}]),{lw:322,cw:128,rh:28,hh:26,corner:"Segment",name:"segments"});
const p7=pnl(s,92,768,620,220,"THREE HORIZONS, THREE GATES, BY MONTH");
gnt(p7,14,48,222,60,26,["0","6","12","18","24","36"],[{label:"Lab panels, gate 0",s:0,e:0,color:C.accent},{label:"Interior pilot, gate 1",s:1,e:2,color:C.primary},
  {label:"P3 interior, gate 2",s:3,e:4,color:C.primaryDeep},{label:"Exterior adaptation",s:3,e:4,color:C.primary},{label:"P4 organic crystals",s:5,e:5,color:C.alert}]);
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const p8=pnl(s,724,768,516,220,"12 RISKS, IMPACT BY PROBABILITY");
const RG=[["","","1 2 4 10","",""],["","","","",""],["","7 11","5 6 8","3",""],["","","9","",""],["12","","","",""]];
hgrid(p8,14,46,["High","4","Med","2","Low"],["Low","2","Med","4","High"],RG.map((r,i)=>r.map((t,j)=>{ const sc=(5-i)*(j+1); return {t,f:sc>=15?C.alert:(sc>=10?HR[2]:(sc>=6?C.accentTint:C.white)),tc:sc>=15?C.white:C.ink}; })),{lw:76,cw:82,rh:28,hh:26,corner:"",name:"risk heat"});
const p9=pnl(s,1252,768,628,220,"TOP RISKS, EARLY SIGNAL, RESPONSE");
tbl(p9,14,46,[210,190,200],["Risk","Early signal","Response"],[["Binder wets rutile","FIB-SEM at gate 0","leaner base binder"],["Seal fills pores","interface FIB-SEM","latex 2x pore size"],
  ["Thin seal coat","film below 15 µm","enforce 15 µm floor"]],{hh:26,rh:28,name:"risks"});
note(p9,14,162,600,"Therefore: ","panels in 6 months, an interior pilot by month 12; no new pigment, plant or painter skill.",{lc:C.primaryDeep});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
