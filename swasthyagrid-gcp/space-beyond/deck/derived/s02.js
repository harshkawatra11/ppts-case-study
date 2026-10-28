{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 6","EXECUTIVE SUMMARY",400,V.h2,V.src[1]);
rail(s,64,310,240,"THE PARADOX",C.alert); rail(s,64,562,232,"THE ANSWER",C.primaryDeep); rail(s,64,806,226,"THE PAYOFF",C.primary);
// band 1: the paradox, the obvious fixes, the systems grid
const p1=pnl(s,116,310,560,240,"SHORT AND WASTED AT ONCE",{tc:C.alert});
[["66 to 80%","key-medicine availability at PHCs in two state studies"],["₹558 Cr","of medicine expired in Telangana and Odisha (CAG)"],
 ["79.9%","of CHC specialist posts unfilled, 4,413 of 21,964 in place"],["43.4%","of health spending paid out of pocket, 2022-23"]].forEach((r,i)=>{ const y=48+47*i;
  TL(p1,14,y,28,r[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:180,min:22});
  sT(p1,204,y,342,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const p2=pnl(s,688,310,640,240,"WHY THE OBVIOUS FIXES STALL",{tc:C.alert});
tbl(p2,14,46,[170,442],["Obvious fix","Why it stalls"],[["Hire more","79.9% of CHC specialist posts already empty"],["Buy more","₹558 Cr already expired in two audited states"],
  ["One database","health is a State subject (List II, Entry 6)"],["New dashboard","five systems record stock; none moves it"]],{hh:26,rh:30,name:"obvious",strip:[C.alert,C.alert,C.alert,C.alert]});
note(p2,14,200,612,"So what: ","none uses what a district already holds.");
const p3=pnl(s,1340,310,516,240,"FIVE SYSTEMS RECORD, NONE MOVES");
hgrid(p3,14,46,["HMIS","e-Aushadhi","eVIN (vaccines)","IHIP / IDSP","ABDM registry","SwasthyaGrid"],["Records","Medicine","Moves"],
  [["Part","Part","No"],["Yes","Yes","No"],["Yes","No","No"],["No","No","No"],["No","No","No"],["SG","SG","SG"]].map(r=>r.map(ynCell)),{lw:188,cw:100,rh:26,hh:26,corner:"System",name:"systems"});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S2");
// band 2: the idea as a pyramid, three reasons each side, the precedent
const c1=layered(s,116,562,600,225,C.primaryDeep,"CARD: idea");
TL(c1,16,8,22,"MOVE FIRST, BUY ONLY FOR THE GAPS",{color:C.accent,maxW:568});
[["1  SEE","Each morning, any item under 3 days of cover is flagged; 5 days for emergency drugs"],["2  PROPOSE","The nearest surplus within 40 km is ranked and sized to refill 21 days of cover"],
 ["3  APPROVE","A named officer approves, edits or rejects; the receiving PHC confirms delivery"]].forEach((r,i)=>{ const f=addFrame(c1,14+192*i,50,182,168,i===2?C.accent:C.white,C.ink,2,"PILLAR");
  TL(f,10,2,22,r[0],{color:C.primaryDeep,maxW:162}); sT(f,10,36,162,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const p4=pnl(s,728,562,760,232,"THREE REASONS EACH SIDE");
tbl(p4,14,46,[120,306,306],["Reason","Against buy or hire","For move first"],[["Numbers","79.9% of specialist posts already empty","up to 1 in 3 key medicines missing on a day"],
  ["Fit","buying feeds ₹558 Cr of audited expiry","eVIN cut vaccine stock-outs by 80%"],["Delivery","a national database clashes with the State List","reads exports states already produce"]],{hh:26,rh:46,name:"reasons"});
const p5=pnl(s,1500,562,356,232,"THE PRECEDENT: eVIN");
logoSlot(p5,14,48,150,48,"eVIN"); logoSlot(p5,176,48,150,48,"UNDP");
[["80%","fewer stock-outs"],["29,000+","cold-chain points"],["12 to 36","states and UTs"]].forEach((r,i)=>{ const y=104+40*i;
  TL(p5,14,y,26,r[0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:140}); sTL(p5,166,y+8,18,r[1],{family:"Inter",style:"Bold",maxW:176}); });
// band 3: the payoff
const p6=pnl(s,116,806,520,226,"THREE SCENARIOS, DAYS AVOIDED");
hBars(p6,14,48,492,[{label:"Bear, 30%",value:81.5,text:"81.5 lakh",color:C.tint},{label:"Base, 50%",value:135.8,text:"1.36 crore",color:C.primary},{label:"Bull, 80%",value:217.3,text:"2.17 crore",color:C.primaryDeep}],{labelW:150,rowH:40,barH:26,valueW:130});
sT(p6,14,172,492,18,"Base case assumes half of eVIN's 80% cut; availability rises from 72.2% to 86.1%",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p7=pnl(s,648,806,600,226,"WHAT A DISTRICT PAYS, AND GETS BACK");
[["₹12 L","licence a district a year"],["0.25%","of the district's central NHM share"],["6.1 to 12.5%","of yearly expiry rescued repays it"],["10.65x","lifetime value to acquisition cost"]].forEach((r,i)=>{
  tile(p7,14+290*(i%2),48+88*Math.floor(i/2),280,84,r[0],r[1],{fill:i%3===0?C.accentTint:C.white}); });
const p8=pnl(s,1260,806,596,226,"WHERE EACH ASK IS ANSWERED");
tbl(p8,14,46,[250,252,66],["Ask in the brief","Where on the deck","Slide"],[["Problem","shelf, waste, root cause","3"],["Solution, innovation","loop, rules, system grid","4"],["Market, business model","sizing, buyer, price","5"],
  ["Implementation","six-week plan, risks","6"],["Impact, future scope","model, horizons","7"],["Assumptions, sources","workings, register","8"]],{hh:26,rh:24,name:"brief",align:["LEFT","LEFT","CENTER"]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
