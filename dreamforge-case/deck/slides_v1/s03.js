{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 4","STRATEGIC ALTERNATIVES",420,V.h2,V.src[2],{labels:RIBN});
rail(s,64,312,340,"SIX OPTIONS",C.primaryDeep); rail(s,64,668,362,"TRADE-OFFS",C.primary);
const NAMES=["1 Stay petrol","2 Electrify, buy","3 Grow, buy","4 Both, buy","5 Grow, lease","6 Both, lease"];
const p1=panel(s,120,312,1100,340,"SIX WAYS TO DEPLOY THE CRORE");
wrapTable(p1,16,56,[250,130,110,100,110,130,96,96],["Option","Contract","Capex","Debt","NPV","Run-rate","gCO2","Score"],V.opts.map((r,i)=>[NAMES[i]].concat(r.slice(1))),{headerH:38,rowH:36,name:"options",fills:[C.white,C.surfaceAlt,C.white,C.alertTint,C.white,C.tint]});
fine(p1,16,316,1068,"₹ lakh for capex, debt and run-rate; NPV in ₹ crore over 48 months at 11%; gCO2 per delivery at month 24.");
const p2=panel(s,1236,312,620,340,"WEIGHTED SCORE, OUT OF 5");
hBars(p2,16,60,588,V.scores.map((v,i)=>({label:NAMES[i],value:v,text:v.toFixed(2),color:i===5?C.primary:(i===3?C.alert:C.surface)})),{labelW:220,rowH:30,barH:22,valueW:70,max:5});
callout(p2,16,248,588,80,"FORMULA: ","Score = 0.35 value + 0.20 liquidity + 0.20 resilience + 0.15 emissions + 0.10 growth");
// band 2: trade-offs
const p3=nm(panel(s,120,668,520,362,""),"PANEL: obvious");
const t3=TL(p3,16,10,24,"THE OBVIOUS ANSWER: BUY BOTH",{color:C.alert,maxW:488}); addRect(p3,16,50,488,2,C.ink); strike(p3,t3,C.alert);
badgeList(p3,16,62,488,["Needs ₹"+V.loan3+" L of debt on top of the crore","EMI on one financed EV is ₹"+V.emi+", above the ₹"+V.lease+" lease","Battery wear, resale and subsidy risk stay with SwiftKart"],{bg:C.alert,d:34,pitch:66});
callout(p3,16,262,488,92,"CONCLUSIVELY: ","lease both, and buy nothing unless a lease costs more than ₹"+V.sw_lease+" a month.",{fill:C.tint});
const p4=panel(s,656,668,470,362,"WHAT A BIKE-MONTH COSTS, ₹");
let lx=lg(p4,16,58,C.alert,"Petrol"); lx=lg(p4,lx,58,C.primaryDeep,"Capital"); lg(p4,lx,58,C.primary,"Running");
TL(p4,16,90,22,"Leasing wins below ₹"+V.sw_lease+" a month",{family:"Inter",style:"Bold",color:C.alert,maxW:438});
stackedCols(p4,16,116,438,238,["Petrol","Bought EV","Leased EV"],[{color:C.alert,values:[9000,0,0]},{color:C.primaryDeep,values:[0,V.own_cap+V.own_chg,0]},{color:C.primary,values:[0,V.own_run,3500]}],{max:10000,totals:["9,000",V.own_all,V.lease],barW:90});
const p5=panel(s,1142,668,714,362,"SEVEN SHOCKS FROM THE CASE, ₹ L OF NPV");
grid(p5,16,58,["Petrol +20%","EV prices −15%","Demand −10%","Electricity +25%","Downtime doubles","Subsidy withdrawn","EV-first clients"],["1","2","3","4","5","6"],V.heat.map(r=>r.map(v=>dvCell(v))),{labelW:250,cellW:72,rowH:36,headH:38,corner:"Shock",name:"TABLE: shocks"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
