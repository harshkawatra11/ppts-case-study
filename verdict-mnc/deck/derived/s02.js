{ const s = await figma.getNodeByIdAsync("S2");
skel(s,2,"1 DIAGNOSIS AND EVALUATION",470,V.f2,"Source: Verdict 2.0 case, sections 1 to 5 (snapshot, retention, exit reasons, unit economics, four-year table, proposals) | research sections 3 to 8 and 13 to 16 | model "+V.hash+", tables T1 to T4, T9");
// A1 margin table
const a1=panel(s,64,318,640,344,"15 MARGIN POINTS LOST IN TWO LINES");
addTable(a1,16,58,[104,116,90,90,92,116],["Year","Rev","GM","Mktg","Other","EBITDA"],V.hist,{rowH:34,headerH:36}).name="TABLE: history";
rt(a1,16,270,608,22,"Overheads improved 5 points. ","Each extra ₹1 of revenue cost "+V.dmk[0]+" of marketing in 2023, "+V.dmk[2]+" in 2025.");
fine(a1,16,322,608,"% of revenue. GM: gross margin. Mktg: marketing.");
// A2 survival curve
const a2=panel(s,720,318,540,344,"CAC PAID BACK IN MONTH "+V.payback+", "+V.pay_surv+" REMAIN");
const lc=lineChart(a2,8,56,524,236,[{values:V.surv,color:C.primary}],["1","","3","","","6","","","","10","","12"],{yMin:0,yMax:100,yTicks:[0,50,100],padL:64,padR:28,yFmt:v=>v+"%"});
dashedV(a2,lc.X(9),lc.Y(100),lc.Y(0)-lc.Y(100),C.alert,3);
TL(a2,0,lc.Y(100)-2,22,"payback",{family:"Poppins",style:"Bold",color:C.alert,rightAt:lc.X(9)-10});
[[2,"55%"],[5,"34%"],[11,"19%"]].forEach(q=>TL(a2,0,lc.Y(V.surv[q[0]])-40,22,q[1],{family:"Poppins",style:"Bold",color:C.primaryDeep,centerAt:lc.X(q[0])+6}));
fine(a2,16,298,508,"Share of a sign-up cohort still ordering, by month. Months between the case points are interpolated.");
// A3 two customers
const a3=panel(s,1276,318,580,344,"TWO CUSTOMERS IN ONE AVERAGE");
addTable(a3,16,58,[228,150,170],["Per sign-up","By M3","Past M3"],V.two,{rowH:36,headerH:42}).name="TABLE: two customers";
rt(a3,16,250,548,22,"₹"+V.burn+" Cr a year "," is spent acquiring customers who never pay back. Those who stay six months rate HarvestBox 4.6 of 5.",{leadColor:C.alert});
// B1 exit reasons: case against mined reviews
const b1=panel(s,64,678,560,352,"A ANSWERS 63% OF EXITS, B NONE");
const WL=["Too rigid to skip","Too expensive","Repetitive menu","Waste, portions","Delivery problems"], RVM=[42.5,16.2,1.8,12.4,27.1], who=["A","none","A, C","A","none"];
const hf2=v=>v>=25?HG[3]:(v>=15?HG[2]:HG[1]);
grid(b1,16,58,WL,["Case","Review","Fix"],V.why.map((w,i)=>[{t:w[1]+"%",f:hf2(w[1])},{t:RVM[i]+"%",f:hf2(RVM[i])},{t:who[i],f:who[i]==="none"?C.alertTint:C.white}]),{labelW:248,cellW:93,rowH:40,headH:38,corner:"Exit reason",name:"TABLE: exit reasons"});
fine(b1,16,300,528,"Review: mix in 2,435 low-star Play Store reviews of six meal-kit apps. Association, not proof. Fix: proposal as written.");
// B2 scorecard
const b2=panel(s,640,678,700,352,"AS WRITTEN, A SCORES LOWEST. REBUILT, HIGHEST");
grid(b2,16,58,["A as written","B as written","C as written","A rebuilt (ours)"],["Grw","Profit","Cash","Risk","Score"],V.opt.map((o,i)=>[hcell(o[1]),hcell(o[2]),hcell(o[3]),hcell(o[4]),{t:o[5],f:i===3?C.accent:C.white}]),{labelW:228,cellW:88,rowH:44,headH:44,corner:"1 low, 5 high",name:"TABLE: scorecard"});
const fx=addFrame(b2,16,286,668,50,C.surfaceAlt,C.ink,2,"FORMULA");
addText(fx,"Inter","Bold",22,C.ink,"Score = .20 growth + .30 profit + .30 cash + .20 risk",12,0,644,50,"LEFT","CENTER");
// B3 cash paths
const b3=panel(s,1356,678,500,352,"EVERY PATH AS WRITTEN HITS ZERO");
const cc=lineChart(b3,8,56,484,224,[{values:V.cashq.drift,color:C.ink},{values:V.cashq.A,color:C.primary},{values:V.cashq.B,color:C.blue},{values:V.cashq.C,color:C.alert}],["0","","6","","12","","18","","24"],{yMin:-10,yMax:15,yTicks:[-10,0,15],padL:60,padR:20});
addRect(b3,cc.X(0),cc.Y(0)-1,cc.X(8)-cc.X(0),2.5,C.alert);
T(b3,16,284,468,22,"Cash reaches zero: no decision M"+V.zero.drift+", A M"+V.zero.A+", B M"+V.zero.B+", C M"+V.zero.C+".",{family:"Inter",style:"Bold"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
