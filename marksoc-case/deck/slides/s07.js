{ const s = await figma.getNodeByIdAsync("S7");
skelBT(s,5,"6 / 8","THE PLAN",240,"Our plan spends "+V.gm_rl+", passes all four tests and turns March EBITDA from "+V.e0_rl+" to "+V.e_mar_rl+": "+V.swing_rl+" a month better than doing nothing",
  "Source: team model "+V.hash+" (T15, T16); decision table format from case page 7 | EBITDA = contribution after marketing − ₹58 lakh fixed costs − growth money that month");
const m=layered(s,64,310,640,420,C.white,"CARD: MONEYSHOT",C.alert);
TL(m,16,8,22,"MARCH EBITDA, ₹ LAKH A MONTH",{color:C.alert,maxW:608}); addRect(m,16,42,608,2,C.ink);
TL(m,16,48,96,V.swing,{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:330,min:60});
T(m,16,196,320,22,"₹ lakh a month better than doing nothing, from 1 February",{family:"Inter",style:"Bold",color:C.primaryDeep});
vbarsN(m,360,52,264,236,[{label:"Do nothing",value:V.e0_n,color:C.alert},{label:"Our plan",value:V.e_n.Mar,color:C.good}],{min:-20,max:10,bw:70,lab:30});
[[V.gm_rl,"of ₹80 lakh used"],[V.rr_mar,"returns; limit 6.0%"],[V.sold.Mar,"phones in March"],[V.util_mar,"of the 9,000 lab limit"]].forEach((r,i)=>tile(m,16+152*i,300,144,104,r[0],r[1],{size:24,ly:40}));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const d=pnl(s,720,310,1136,420,"THE DECISION TABLE (CASE PAGE 7)");
tbl(d,14,48,[420,230,230,228],["Your plan","January","February","March"],[["Options live","Setup paid","B1, B2, shift","B1, B2, shift"],["Phones sold",V.sold.Jan,V.sold.Feb,V.sold.Mar],
  ["Contribution after marketing (₹ lakh)",V.cam.Jan,V.cam.Feb,V.cam.Mar],["Growth money spent (₹ lakh)",V.gm.Jan,V.gm.Feb,V.gm.Mar],["EBITDA (₹ lakh)",V.e.Jan,V.e.Feb,V.e.Mar],["Return rate",V.rr.Jan,V.rr.Feb,V.rr.Mar]],
  {size:22,hh:36,rh:36,name:"decision table",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,C.accentTint,null]});
[[V.gm_rl,"total growth money, Jan to Mar"],["Pass","Test 1: ₹80 lakh limit"],["+"+V.e_mar,"Test 2: March EBITDA, ₹ lakh"],[V.rr_mar,"Test 3: March returns, limit 6.0%"],["Pass","Test 4: three claims, all true"],
 [V.dq1_rl,"Q1 against doing nothing ("+V.q1+" vs "+V.q1_0+")"]].forEach((r,i)=>tile(d,14+185*i,312,176,104,r[0],r[1],{size:24,ly:38,color:r[0]==="Pass"?C.good:C.primary}));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const b=pnl(s,64,746,1100,286,"MARCH EBITDA, DOING NOTHING TO OUR PLAN, ₹ LAKH");
wfN(b,14,46,1072,230,V.bridge,{min:-30,max:55,dp:1,bw:64,lh:46});
const n=pnl(s,1180,746,676,286,"WHAT TIKAU WILL NOT DO, AND WHY");
wtab(n,14,48,[170,478],["Not this","Because"],[["A price push","March "+V.roh_mar+"; a Fair phone falls to ₹416"],["B3 campaign","₹15 lakh a month buys ₹"+V.b3_gain+" lakh of contribution"],
  ["Trade in now","with B1, B2 and the shift it needs ₹"+V.all_gm+" lakh"],["More ad money","ads already lose ₹2.1 lakh a month"],["Value seekers","a Fair phone earns "+V.cp_F+" after B2"]],{hh:28,pad:3,name:"not",colors:[C.alert,C.ink]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
