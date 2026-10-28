{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,0,"A1","APPENDIX",220,"Financial sketch: "+V.budget+" ends month 24 at "+V.cash24+" after "+V.rev24+" of revenue and "+V.spend24+" of spend, leaving "+V.runway+" of runway",
  "Source: team model "+V.hash+" (T7 to T11, T16 to T18) | runway = cash at month 24 / average net burn of months 19 to 24 | grants excluded from the base case, as the case packet asks",{labels:RIBAP,counterW:120});
const p1=pnl(s,64,316,1060,420,"FOUR HALF-YEARS, ₹ CR, BASE CASE");
tbl(p1,14,46,[262,148,148,148,148,178],["Item","M1 to M6","M7 to M12","M13 to M18","M19 to M24","24 months"],V.fin,
  {hh:26,rh:26,name:"sketch",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"],bold:[5],fills:[null,null,C.accentTint,null,null,null,null,null,null,C.tint,C.goodTint]});
const p2=pnl(s,1136,316,720,420,"CASH, ₹ CR, MONTH BY MONTH");
const g=lcS(p2,14,50,692,316,[{values:V.path_bull,color:C.good,label:"Bull"},{values:V.path_base,color:C.primaryDeep,label:"Base"},{values:V.path_gate,color:C.accent,label:"Bear, cut"},{values:V.path_mf_clip,color:C.alert}],
  V.path_base.map((_,i)=>i%6===0&&i>0?"M"+i:""),{yMin:0,yMax:50,yTicks:[0,10,20,30,40,50],padL:44,padR:120});
dashedV(p2,g.X(18),g.Tp,g.B-g.Tp,C.ink,2); sTL(p2,g.X(18)+6,g.Tp,18,"Month-18 milestone",{family:"Inter",style:"Bold"});
sTL(p2,g.X(V.mf_out_n)-250,g.B-30,18,"Model-first: out in "+V.mf_out,{family:"Inter",style:"Bold",color:C.alert});
sT(p2,14,384,692,18,"Base ends at "+V.cash24+"; the bear case with month-18 cuts ends at "+V.gate_cash+".",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const p3=pnl(s,64,748,560,284,"FOUR SCENARIOS AT MONTH 24");
tbl(p3,14,46,[124,100,100,108,100],["Measure","Base","Bear","Bear, cut","Bull"],V.scen,{hh:26,rh:26,name:"scenarios",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"]});
note(p3,14,212,532,"Milestone: ",V.mile+"; if missed, hiring stops at H3 levels.",{lc:C.primaryDeep});
const p4=pnl(s,636,748,640,284,"RUNWAY AT MONTH 24: WHAT MOVES IT, MONTHS");
torS(p4,14,52,612,V.tor.map(r=>({label:r[0],lo:r[1],hi:r[2]})),V.runway_n,{lw:210,rh:24,min:8,max:14,ticks:[8,11,14]});
const p5=pnl(s,1288,748,568,284,"UNIT ECONOMICS AND THE SPLIT");
[[V.acv,"contract value"],[V.cac,"cost to win one"],[V.payback,"payback"],[V.gm,"gross margin"],[V.ltvcac,"LTV to CAC"],[V.reserve,"reserve"]].forEach((r,i)=>
  tile(p5,14+182*(i%3),46+70*Math.floor(i/3),174,64,r[0],r[1],{size:24,ly:36}));
sT(p5,14,190,540,18,"Split, ₹ Cr: "+V.alloc.map(r=>r[0]+" "+r[1]).join(", ")+" = "+V.alloc_sum,{family:"Inter",style:"Semi Bold"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
