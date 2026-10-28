{ const s = await figma.getNodeByIdAsync("S5");
skeleton3(s, [5], "4 / 4", "4 90-DAY PLAN AND KPIs", 460,
  "₹1.8 Cr launches the rebuilt plan in five cities in 90 days; seven KPIs govern rollout and two gates control expansion",
  "Source: research sections 19 and 22 to 24 | KPI definitions in research table T141 | model " + V.hash, RIBC);
const a1 = addFrame(s,64,318,1120,300,C.white,C.ink,2,"PANEL: first 90 days");
TL(a1,16,8,24,"FIRST 90 DAYS",{color:C.primary});
TL(a1,440,10,22,"W4: pilot live. W12: five cities live.",{family:"Inter",style:"Bold"});
addRect(a1,16,40,1088,2,C.ink);
const months13 = Array.from({length:13},(_,i)=>"W"+(i+1));
const CCODE={p:C.primary,o:C.orange,d:C.primaryDeep};
const ganttRows=V.gantt.map(([label,st,en,code])=>({label,bars:[{s:st,e:en,color:CCODE[code]}],marks:V.gantt_marks.filter(w=>w>=st&&w<=en).map(w=>({at:w,color:C.accent}))}));
gantt(a1,16,44,280,62,months13,ganttRows,{headH:32,rowH:27,name:"TABLE: gantt"});
const a2=panel(s,1208,318,648,300,"WHERE THE ₹1.8 CR GOES");
const budgetColors=[C.primary,C.orange,C.primaryDeep,C.alert,C.tint,C.good];
donut(a2,112,172,96,V.budget.map(([label,pct],i)=>({value:pct,color:budgetColors[i]})),0.56);
TL(a2,0,158,26,"₹1.8 Cr",{family:"Poppins",style:"ExtraBold",color:C.primaryDeep,centerAt:112});
V.budget.forEach(([label,pct,amt],i)=>{
 const y=60+i*36; addRect(a2,224,y+4,18,18,budgetColors[i],C.ink,1.5);
 TL(a2,252,y,22,label.replace("Marketing & web","Marketing / web"),{family:"Inter",style:"Bold",maxW:236});
 TL(a2,0,y,22,pct+"% / ₹"+amt.toFixed(2),{family:"Inter",style:"Semi Bold",rightAt:632});
});
const b1=panel(s,64,632,1200,314,"SEVEN KPIs THE BOARD READS MONTHLY");
const labels=["M3 retention","Skipped boxes","Blended CAC","LTV to CAC","Gross margin","Marketing share","Cash (₹ Cr)"];
const kpiRows=V.kpi.map((r,i)=>[labels[i],...r.slice(1)]);
addTable(b1,12,56,[272,112,128,108,108,448],["KPI","Today","Day 90","M12","M24","Stop trigger"],kpiRows,
 {rowH:32,headerH:32,cellSize:22,name:"TABLE: kpi",cellColor:(r,c)=>c===5?C.alert:C.ink});
const b2=panel(s,1288,632,568,314,"MONTH 12: TWO GATES, ONE DECISION");
TL(b2,16,56,22,"Cash ₹"+V.gate.cash+" Cr",{family:"Inter",style:"Bold"});
gauge(b2,16,91,230,24,V.gate.cash,12,V.gate.cash_target,{gateText:"Gate: ₹7 Cr"});
TL(b2,16,154,22,"LTV to CAC "+V.gate.ltvcac+"x",{family:"Inter",style:"Bold"});
gauge(b2,16,189,230,24,V.gate.ltvcac,3.5,V.gate.ltvcac_target,{gateText:"Gate: 2.2x"});
const yes=addFrame(b2,288,56,264,128,C.accent,C.ink,2,"CARD: both gates pass");
TL(yes,12,8,22,"BOTH PASS",{family:"Poppins",style:"Bold"});
T(yes,12,42,240,22,"₹4 Cr, two cities; ready-to-eat sales from M14",{family:"Inter",style:"Bold"});
const no=addFrame(b2,288,198,264,104,C.surface,C.ink,2,"CARD: either gate fails");
TL(no,12,6,22,"EITHER FAILS",{family:"Poppins",style:"Bold",color:C.alert});
T(no,12,40,240,22,"Stay core: ₹"+V.core24+" Cr cash at M24",{family:"Inter",style:"Bold"});
addArrow(b2,254,116,282,116,C.ink,2,10);
addArrow(b2,254,236,282,236,C.ink,2,10);
T(b2,16,260,250,22,"Base case, month 12",{family:"Inter",style:"Semi Bold"});
soWhat(s,958,72,[["Therefore: ","A"],["approve ₹1.8 Cr today, review seven KPIs monthly, and fund ready-to-eat only when month-12 cash is at least ₹7 Cr and LTV to CAC at least 2.2x.","W"]]);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
