{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 8","DEMAND OR TRUST",340,"Tikau's problem is trust behind a full lab, not demand: "+V.pdp_leave+" of product-page visitors leave, battery fear outranks price two to one and the lab sells every phone it can test",
  "Source: case Exhibit 1 (1,500 visitors who left, October funnel), Exhibit 4 (lab, supply, November spot check), Exhibit 5 | team model "+V.hash+" (T7 to T9)");
const f=pnl(s,64,310,560,400,"WEBSITE FUNNEL, OCTOBER 2026");
fun(f,14,50,532,[{t:V.funnel[0][1]+" visited",size:18},{t:V.funnel[1][1]+" opened a phone",size:18},
  {t:V.funnel[2][1]+" added to cart",size:18,f:HG[2],tc:C.ink},{t:V.funnel[3][1]+" ordered",size:18,f:HG[1],tc:C.ink}],{th:34,gap:5,minW:320});
kv(f,14,206,V.pdp_leave,"leave the phone page without adding to cart",{size:30,numW:150,w:346,dy:4});
const STEP=["Visited","Opened a page","Added to cart","Ordered"];
tbl(f,14,270,[160,190,152],["Step","People","Conv."],V.funnel.map((r,i)=>[STEP[i],r[1],r[2]]).concat([["Store pickup","n/a","33%"]]),{hh:24,rh:20,name:"funnel steps",align:["LEFT","RIGHT","RIGHT"]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const RS=["Battery may not last","Condition unclear","Warranty too short","Wanted to see it","Price vs local shop","Stolen or locked","Previous owner's data"], RF=["B2 + B1","B1","B2","Stores","A","B1","B1"];
const r=pnl(s,640,310,600,400,"WHY 1,500 VISITORS DID NOT BUY, %");
hbarsN(r,14,52,572,V.reasons.map((x,i)=>({label:RS[i],value:x[1],text:x[1]+"%  "+RF[i],color:i===4?C.alert:(i===3?HG[3]:C.primary)})),{lw:236,rh:36,min:0,max:60,vw:110});
sT(r,14,318,572,18,"More than one answer allowed. Trust fills 5 of the 7 reasons; price comes fifth. The tag after each bar is the option that answers it.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const OS=["85% battery promise","12 month warranty","Photos, battery, IMEI","Old phone in part","A price 5% lower"], OF=["B2","B2","B1","C","A"];
const o2=pnl(s,1256,310,600,400,"WHAT WOULD MAKE THEM BUY, %");
const hcO=v=>v>=40?HG[4]:(v>=30?HG[3]:(v>=22?HG[2]:HG[1]));
hgrid(o2,14,50,OS,["Share","Fixed by"],V.offers.map((x,i)=>[{t:x[1]+"%",f:hcO(x[1]),tc:x[1]>=40?C.white:C.ink},{t:OF[i],f:C.white,tc:C.primaryDeep}]),{lw:290,cw:130,rh:38,hh:30,name:"offers heat"});
callout(o2,14,284,572,96,"Two to one: ","a battery promise draws 44% of those who left; a 5% price cut draws 22%.",{});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const c=pnl(s,64,726,600,306,"DEMAND IS NOT THE LIMIT: THE LAB IS FULL");
sTL(c,14,54,18,"Lab: sellable phones a month",{family:"Inter",style:"Bold"});
capBar(c,14,82,400,40,7200,7200,{color:C.alert}); sTL(c,424,90,18,V.sold.Jan+" of 7,200",{family:"Inter",style:"Bold",color:C.alert});
sTL(c,14,136,18,"Superb phones from traders a month",{family:"Inter",style:"Bold"});
capBar(c,14,164,400,40,V.gs0_n.S,2000,{color:C.accent}); sTL(c,424,172,18,V.superb0+" of 2,000",{family:"Inter",style:"Bold"});
sT(c,14,220,572,18,"8,000 tested, 10% fail, 7,200 sellable, all sold. Any extra order needs a third shift; without one the case's rule drops it.",{family:"Inter",style:"Semi Bold"});
const b=pnl(s,680,726,580,306,"BATTERY CLAIMS FAIL ON 11% OF GOOD");
dots(b,14,54,25,200,22,12,5);
sT(b,14,198,552,18,"22 of 200 Good phones read below the 80% on their listing in Tikau's own November check: about "+V.spot_month+" Good phones a month (A14). Exhibit 5 needs Tikau's own lab reading, so test 4 fails today.",{family:"Inter",style:"Semi Bold"});
const y5=pnl(s,1276,726,580,306,"FIVE WHYS TO ONE ROOT CAUSE");
const WH=[["1 Loss","claims and returns cost "+V.trust_rl+" a month"],["2 Returns","buyers doubt battery (46%) and condition (41%)"],["3 Doubt","battery figures come from the trader's tool"],
  ["4 Tool","the lab runs at 7,200 of 7,200, no spare time"],["5 Root","Tikau sells what it cannot yet prove"]];
tbl(y5,14,48,[90,462],["Why","Finding"],WH,{hh:26,rh:44,name:"five whys",align:["LEFT","LEFT"],strip:[C.primary,C.primary,C.primary,C.primary,C.alert]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
