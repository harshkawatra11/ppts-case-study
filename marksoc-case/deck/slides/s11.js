{ const s = await figma.getNodeByIdAsync("S11");
skelBT(s,1,"A2","APPENDIX",240,"A2. Orders rise "+V.uplift+" and returns fall to 56% of today's rate under B1 and B2, the lab caps at 9,000, and March stays above zero down to a "+V.be_up+" order rise",
  "Source: case Exhibit 6 rules | team model "+V.hash+" (T11, T13, T17, T21) | short forms used in the deck sit bottom right",{labels:RIBAP,counterW:120});
const p=pnl(s,64,310,880,352,"HOW THE OPTIONS COMBINE (EXHIBIT 6 RULES)");
tbl(p,14,46,[220,632],["Effect","Working"],[["Orders","1.08 x 1.08 = 1.1664, so +"+V.uplift+" in every channel"],["Returns","0.70 x 0.80 = 0.56 of each channel's rate; March "+V.rr_mar2],
  ["Superb rationing","demand "+V.superb_dem+" against 2,000: "+V.lost_S+" orders ("+V.fS+") lost"],["Lab","sold "+V.sold.Mar+" of 9,000 with the third shift ("+V.util_mar+")"],
  ["Prices","Superb ₹24,960, Good ₹16,640, Fair ₹10,000"],["Batteries","Good 40% x ₹1,000 = ₹400; Fair 70% x ₹800 = ₹560"],["Claims","Superb 4%, Good 6%, Fair 9% at ₹2,500"],
  ["Growth money","Jan ₹40.0 (B1 ₹15, B2 ₹25); Feb ₹9.0; Mar ₹9.0 lakh"]],{hh:26,rh:32,name:"combine"});
const q=pnl(s,960,310,896,352,"CONTRIBUTION PER PHONE UNDER EACH OPTION, ₹");
tbl(q,14,46,[320,180,180,188],["Option","Superb","Good","Fair"],Object.keys(V.unit).map(k=>[k,V.unit[k].S,V.unit[k].G,V.unit[k].F]),{hh:26,rh:30,name:"unit options",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,C.accentTint,null]});
const dS=V.unit_n["B1 + B2"].S-V.unit_n.Today.S, dG=V.unit_n["B1 + B2"].G-V.unit_n.Today.G;
note(q,14,262,868,"Read: ","B1 and B2 together add ₹"+fmtN(dS)+" to a Superb phone and ₹"+fmtN(dG)+" to a Good one, but cut a Fair phone to "+V.cp_F+". With A on top a Fair phone loses money.",{fill:C.tint});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S11");
const r=pnl(s,64,678,760,354,"CHANNELS IN MARCH UNDER OUR PLAN");
tbl(r,14,46,[180,120,170,150,112],["Channel","Phones","After mkt, ₹ lakh","Per order","Returns"],V.chm.map((x,i)=>[["Paid ads","MegaKart","Creators","Stores","Referrals"][i],x[1],x[2],x[3],x[4]]),
  {hh:26,rh:30,name:"march channels",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"]});
sT(r,14,234,732,18,"MegaKart earns "+V.mk_per_mar+" an order in March: its 12% fee grows with the 4% price rise and its mix leans to Fair. We add no MegaKart spend.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const b=pnl(s,840,678,560,354,"BREAK-EVEN POINTS FOR MARCH");
tbl(b,14,46,[250,130,152],["Input","Plan","Zero at"],[["Order rise from B1, B2","+"+V.uplift,"+"+V.be_up],["Orders a week",V.plan_week,V.be_week],["Good battery swaps","40%",V.be_gbat],
  ["Fair battery swaps","70%",V.be_fbat],["Returns kept","56%",V.rr_mult_6]],{hh:26,rh:32,name:"break-even",align:["LEFT","RIGHT","RIGHT"]});
sT(b,14,240,532,18,"Returns kept: the share of today's return rate left after B1 and B2; at "+V.rr_mult_6+" March returns reach the 6.0% limit.",{family:"Inter",style:"Semi Bold"});
const f=pnl(s,1416,678,440,354,"SHORT FORMS");
tbl(f,14,46,[120,292],["Short","Meaning"],[["A to C","the case's options"],["IMEI","a phone's identity number"],["Q1","January to March 2027"],
  ["After mkt","contribution after marketing"],["Fee","MegaKart's 12% commission"],["₹ lakh","₹1,00,000"],["x","multiplied by"]],{hh:26,rh:34,name:"short forms"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
