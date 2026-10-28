{ const s = await figma.getNodeByIdAsync("S4");
skel(s,4,"3 FINANCIAL AND RISK CASE",450,V.f4,"Source: Verdict 2.0 case (2025 revenue, margins, cash, proposals) | research sections 19 to 21 | model "+V.hash+", tables T4 to T7 | assumptions A01 to A25");
const bp=panel(s,64,318,1180,354,"EBITDA BRIDGE: 2025 TO THE MONTH 24 RUN-RATE (₹ CR A YEAR)");
waterfall(bp,16,56,1148,290,V.bridge,{min:-12,max:1.5,labelH:92,labelDy:8,barW:78,labels:["2025","Headwinds","Brand cut","Prune paid","Overheads","Margin","Retention","Cheaper CAC","Ready to eat","Month 24"]});
const mc=layered(s,1260,318,589,347,C.primaryDeep,"CARD: moneyshot");
TL(mc,20,14,24,"BREAK-EVEN, BASE CASE",{color:C.accent,maxW:549});
nm(TL(mc,20,52,72,V.be,{family:"Poppins",style:"ExtraBold",color:C.white,maxW:549,min:56}),"MONEYSHOT");
TL(mc,20,166,22,"EBITDA turns positive on cash in hand",{family:"Inter",style:"Bold",color:C.white,maxW:549});
[["₹"+V.mincash+" Cr","lowest cash, in month "+V.minm],["₹0","new funding needed"],["₹"+V.core_cash24+" Cr","at month 24 without ready-to-eat"]]
 .forEach((k,i)=>kv(mc,20,204+i*46,k[0],k[1],{size:30,color:C.accent,numW:150,w:380,dy:6,textColor:C.white}));
const sp=panel(s,64,688,700,342,"THREE SCENARIOS, ONE SET OF LEVERS");
addTable(sp,16,58,[195,91,91,91,100,100],["Measure","2025","Y1","Y2","Bear","Bull"],V.scen,{rowH:32,headerH:36}).name="TABLE: scenarios";
fine(sp,16,322,668,"₹ Cr or %. Y1, Y2: base case. Bear, Bull: year 2 of each scenario.");
const hp=panel(s,780,688,560,342,"NO RISK IS BOTH LIKELY AND SEVERE");
const RK=[[1,3,4],[2,3,3],[3,3,3],[4,2,5],[5,3,4],[6,2,3],[7,2,2],[8,2,2],[9,3,3],[10,2,5],[11,2,4],[12,2,5]];
grid(hp,16,58,["5","4","3","2","1"],["1","2","3","4","5"],[5,4,3,2,1].map(im=>[1,2,3,4,5].map(p=>{ const ids=RK.filter(r=>r[1]===p&&r[2]===im).map(r=>r[0]); const sc=p*im; return {t:ids.join(" "),f:sc>=15?C.alert:(sc>=10?C.alertTint:(sc>=6?C.accentTint:C.white))}; })),{labelW:68,cellW:92,rowH:40,headH:38,corner:"I",name:"TABLE: risk heat"});
fine(hp,16,300,528,"Rows: impact, 1 to 5. Columns: probability, 1 to 5. Cells: risk numbers (research, section 21).");
const rp=panel(s,1356,688,500,342,"THE FOUR NEAREST THE CORNER");
wrapTable(rp,16,56,[56,200,212],["#","Trigger","Response"],[
 ["1","Referral under 15%, M6","Raise reward, add win-back"],
 ["4","Skips over 10%, 2 months","Tighten floor, fee on 3rd skip"],
 ["5","Margin under 32%, M9","Packaging and buying first"],
 ["10","Cash under ₹7 Cr, M12","Pull contingency early"]],{rowH:58,headerH:36,name:"risks"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
