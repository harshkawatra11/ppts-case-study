{ const s = await figma.getNodeByIdAsync("S9");
skelBT(s,7,"8 / 8","SIGNALS AND APRIL",300,"Three weekly numbers show by mid February whether March clears zero: orders above "+V.be_week+" a week, returns under 5.5% and fewer than half of Good phones needing a battery",
  "Source: team model "+V.hash+" (T17 to T20) | weekly = monthly / 4.33 (A13) | stress tests move uncertain effects 25% (A16) | April assumes new growth money (A15)");
const K=[["1 ORDERS A WEEK",V.plan_week,"our plan, all channels",V.be_week+" a week, two weeks running","March EBITDA falls below ₹0: a "+V.be_up+" order rise instead of "+V.uplift,"check the report sits above the price on every listing; move store and referral effort to report demos"],
 ["2 RETURN RATE",V.rr_mar,"our plan, all channels","5.5% in any week","the board's limit is 6.0%, reached only if B1 and B2 keep "+V.rr_mult_6+" of today's returns","find the channel: creators return 1.5 times the website rate; retest batteries in that batch"],
 ["3 GOOD PHONES NEEDING A BATTERY","40%","Exhibit 6, our plan","50% in any week","March EBITDA falls to +₹"+V.e_gbat50+" lakh, and to zero at "+V.be_gbat,"read batteries at intake and buy weak-battery Good phones at a lower price"]];
K.forEach((k,i)=>{ const x=64+604*i, f=layered(s,x,310,584,330,C.white,"CARD: kpi "+(i+1));
  TL(f,16,8,22,k[0],{color:C.primary,maxW:552}); addRect(f,16,42,552,2,C.ink);
  TL(f,16,50,48,k[1],{family:"Poppins",style:"ExtraBold",color:C.primaryDeep,maxW:240});
  sT(f,270,66,298,18,k[2],{family:"Inter",style:"Bold"});
  note(f,16,126,552,"Change course at: ",k[3],{fill:C.alertTint,lc:C.alert});
  sT(f,16,174,552,18,"Why: "+k[4],{family:"Inter",style:"Semi Bold"});
  note(f,16,240,552,"Then: ",k[5],{fill:C.tint}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S9");
const t=pnl(s,64,656,540,376,"WHAT MOVES MARCH EBITDA, ₹ LAKH");
torS(t,14,52,512,V.tor.map(x=>({label:x[0],lo:x[1],hi:x[2]})),V.e_n.Mar,{lw:220,rh:40,min:0,max:10,ticks:[0,2.5,5,7.5,10]});
sT(t,14,290,512,18,"Red: the input 25% worse. Blue: 25% better. No single input takes March below zero; all five worse together give "+V.scen.Bear.mar+" ₹ lakh.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const q=pnl(s,620,656,440,376,"THREE SCENARIOS, ₹ LAKH");
tbl(q,14,48,[140,90,90,92],["","Bear","Base","Bull"],[["Feb EBITDA",V.scen.Bear.feb,V.scen.Base.feb,V.scen.Bull.feb],["Mar EBITDA",V.scen.Bear.mar,V.scen.Base.mar,V.scen.Bull.mar],
  ["Q1 vs nothing",V.scen.Bear.d,V.scen.Base.d,V.scen.Bull.d],["Mar returns",V.scen.Bear.rr,V.scen.Base.rr,V.scen.Bull.rr],["All tests",V.scen.Bear.ok,V.scen.Base.ok,V.scen.Bull.ok]],
  {hh:28,rh:32,name:"scenarios",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,C.accentTint,null,null,null]});
note(q,14,244,412,"Bear: ","every uncertain effect 25% worse at once. The weekly numbers show it by the second week of February.",{});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S9");
const ap=pnl(s,1076,656,780,376,"APRIL OPTIONS, EBITDA ₹ LAKH A MONTH");
const AL=["Keep the plan","Add B3 campaign","Add A price push","Trade in, month 1","Trade in, month 2","Trade in, month 3","Trade in, month 4","Trade in, month 5"];
hbarsN(ap,14,50,752,V.apr_n.map((a,i)=>({label:AL[i],value:a[1],color:i===0?C.primary:(i<3?C.alert:C.good)})),{lw:200,rh:32,min:-45,max:50,vw:56});
sT(ap,14,318,752,18,"In April, on new growth money: launch C trade in (₹35 lakh setup, repaid in about "+V.tin_payback+" months); keep A and B3 off; keep the third shift.",{family:"Inter",style:"Bold",color:C.primaryDeep});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
