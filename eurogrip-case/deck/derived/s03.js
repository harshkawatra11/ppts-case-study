{ const s = await figma.getNodeByIdAsync("S3");
const RIBA6=["A1 COUNT","A2 COST","A3 SENSITIVITY","A4 SCENARIOS","A5 BENCHMARKS","A6 RISKS"];
skelBT(s,-1,"A / 01","APPENDIX",280,V.h3,V.src3,{labels:RIBA6});
// A1: four counts
const a1=panel(s,64,312,600,354,"A1 FOUR COUNTS, ONE UNIVERSE (LAKH)");
rangeBars(a1,16,58,V.tri2,{lw:212,span:164,max:16,rh:40,right:584});
const X1=228+164*V.univb/16; dashedV(a1,X1,58,160,C.alert,2.5);
TL(a1,X1+6,192,22,"base "+V.univ,{family:"Inter",style:"Bold",color:C.alert});
T(a1,16,228,568,22,V.a1note,{family:"Inter",style:"Bold"});
T(a1,16,290,568,22,V.pilotline,{family:"Inter",style:"Semi Bold",color:C.primary});
// A2: cost per member, built up
const a2=panel(s,680,312,560,354,"A2 ₹"+V.cpm+" A MEMBER A YEAR, BUILT UP");
ct(a2,16,58,[196,104,104,124],["₹ a member","Bear","Base","Bull"],V.cpmrows.map((r,i)=>r.map((c,j)=>({t:c,tc:j===1?C.alert:(j===3?C.good:C.ink),f:i===5?C.tint:undefined,b:i===5}))),{name:"cost",al:["LEFT","RIGHT","RIGHT","RIGHT"]});
T(a2,16,280,528,22,V.a2note,{family:"Inter",style:"Bold"});
// A3: tornado
const a3=panel(s,1256,312,600,354,"A3 BREAK-EVEN: WHAT MOVES IT MOST");
TL(a3,16,58,22,"Extra tyres a shop a year, base "+V.be,{family:"Inter",style:"Bold",color:C.primary});
tornado(a3,16,96,450,V.tor6,V.be_base,{labelW:190,rowH:32});
V.tor6.forEach((t,i)=>TL(a3,0,96+i*32-2,22,t.txt,{family:"Poppins",style:"Bold",rightAt:584}));
T(a3,16,296,568,22,V.killnote,{family:"Inter",style:"Bold",color:C.alert});
// A4: scenarios
const a4=panel(s,64,678,600,354,"A4 BEAR, BASE, BULL ON ONE MODEL");
ct(a4,16,58,[224,108,116,120],["Item","Bear","Base","Bull"],V.scen8.map(r=>r.map((c,j)=>({t:c,tc:j===1?C.alert:(j===3?C.good:C.ink)}))),{name:"scenarios",al:["LEFT","RIGHT","RIGHT","RIGHT"]});
fine(a4,16,334,568,"Bear is least favourable to the plan. Model hash "+V.hash+".");
// A5: benchmark heat table
const a5=panel(s,680,678,560,354,"A5 SIX PROGRAMMES, SCORED");
const HC={"Yes":HG[4],"Part":HG[2],"No":C.white,"n/a":C.surface};
ct(a5,16,58,[176,88,88,88,88],["Programme","Cash","Tools","Signs","Advice"],V.bench4.map(r=>[{t:r[0],f:r[0]==="Our design"?C.accent:undefined,b:true}].concat(r.slice(1).map(c=>({t:c,f:HC[c]})))),{name:"bench",al:["LEFT","CENTER","CENTER","CENTER","CENTER"]});
fine(a5,16,304,528,V.a5note);
// A6: risks and validation
const a6=panel(s,1256,678,600,354,"A6 RISKS, CONTROLS, VALIDATION");
const PI=v=>v>=9?HG[5]:(v>=6?HG[4]:HG[3]);
ct(a6,16,58,[40,236,64,228],["#","Risk","P×I","Control"],V.risk5.map((r,i)=>[String(i+1),r[0],{t:String(r[1]),f:PI(r[1]),tc:r[1]>=9?C.white:C.ink,b:true},r[2]]),{name:"risks",al:["CENTER","LEFT","CENTER","LEFT"]});
callout(a6,16,252,568,44,"VALIDATE FIRST: ",V.valid,{py:8});
T(a6,16,306,568,22,V.auditline,{family:"Inter",style:"Bold"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
