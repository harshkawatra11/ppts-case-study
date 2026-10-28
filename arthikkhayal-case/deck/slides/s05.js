{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 5","THE IMPACT",280,"Base case adds "+V.inc+" active accounts and "+V.pp+" by 31 January 2027 for "+V.cash+" of cash, "+V.ratio+" times what the same money buys in paid media",
  "Source: team activation model "+V.hash+" (T10 to T16); assumptions A20 to A39 and A61 in the appendix | paid cost per activation is a team assumption checked against broker disclosures | case product table");
const m=layered(s,64,310,700,384,C.white,"CARD: MONEYSHOT",C.alert);
TL(m,16,8,22,"SAME "+V.cash.toUpperCase()+" OF CASH, TWO ROUTES",{color:C.alert,maxW:668}); addRect(m,16,42,668,2,C.ink);
cols(m,16,52,300,236,["Bank moments","Paid media"],[{values:[V.inc_n,0],color:C.primary},{values:[0,V.paid_nn],color:C.alert}],{max:V.inc_n*1.12,bw:90,totals:[V.inc,V.paid_n]});
TL(m,340,52,72,V.ratio+"x",{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:340,min:48});
T(m,340,164,340,22,"the active accounts for the same money, base case",{family:"Inter",style:"Bold",color:C.primaryDeep});
sT(m,340,228,340,18,"Bank moments: "+V.inc+" at "+V.cpa+" each. Paid media: "+V.paid_n+" at "+V.paid_cpa+".",{family:"Inter",style:"Semi Bold"});
[[V.cpa,"cash each"],[V.cpa_all,"all-in each"],[V.rev_per,"revenue a year"],[V.payback,"payback"]].forEach((r,i)=>tile(m,16+170*i,300,160,72,r[0],r[1],{ly:38}));
const p2=pnl(s,780,310,1076,384,"FROM "+V.rate26+" TO "+V.rate_end+": WHERE THE POINTS COME FROM, pp");
const wfr=wfB(p2,14,48,1048,326,V.wf,{min:14,max:17.4,dp:2,bw:64});
const ty=wfr.Y(16.74), tx=14+1048*7/9; dashedH(p2,tx,ty,1048*2/9,C.alert,2); sTL(p2,tx+6,ty+6,18,"+200 bps line",{family:"Inter",style:"Bold",color:C.alert});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const p3=pnl(s,64,710,640,322,"WEEK BY WEEK AGAINST THE TARGET BAND, %");
const yMin=14.5, yMax=19, ch={x:14,y:44,w:612,h:220,padL:56,padR:80}; const B=ch.y+ch.h-Math.ceil(18*1.3)-6, Tp=ch.y+8, Yf=v=>B-(B-Tp)*(v-yMin)/(yMax-yMin);
addRect(p3,ch.x+ch.padL,Yf(17.74),ch.w-ch.padL-ch.padR,Yf(16.74)-Yf(17.74),C.accentTint,null,0);
lcS(p3,ch.x,ch.y,ch.w,ch.h,[{values:V.ramp.bull,color:C.good,label:"Bull",dy:-6},{values:V.ramp.base,color:C.primary,label:"Base",dy:0},{values:V.ramp.bear,color:C.alert,label:"Bear",dy:6}],
  ["1","2","3","4","5","6","7","8","9","10","11","12","13"],{yMin,yMax,yTicks:[15,16,17,18,19],padL:ch.padL,padR:ch.padR});
sT(p3,14,272,612,18,"Shaded: +200 to +300 bps. Week 1 is Dhanteras and Diwali; weeks 5, 9 and 13 carry salary credits.",{family:"Inter",style:"Semi Bold"});
const p4=pnl(s,716,710,560,322,"THREE SCENARIOS");
tbl(p4,14,46,[200,110,110,112],["Measure","Bear","Base","Bull"],V.scen_rows.concat([["Salary-day tap","6%","8%","10%"],["Order after tap","26%","32%","38%"],["RM review to order","11%","15%","19%"]]),
  {hh:26,rh:26,name:"scenarios",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,C.tint,null,null,null,C.surfaceAlt,C.surfaceAlt,C.surfaceAlt]});
note(p4,14,284,532,"Bear: ","the week-6 trigger adds RM capacity");
const p5=pnl(s,1288,710,568,322,"WHAT MOVES THE BASE CASE, pp");
torS(p5,14,50,540,V.tor.slice(0,7).map(t=>({label:V.tor_l[t[0]],lo:t[1],hi:t[2]})),V.pp_n,{lw:250,rh:30,min:2.0,max:2.6,ticks:[2.0,2.3,2.6]});
sT(p5,14,290,540,18,"Every bar stays above +2.0 pp",{family:"Inter",style:"Bold",color:C.good});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
