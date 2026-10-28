{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 3","TASK 1: GO-TO-MARKET",360,"Win first with mid-sized lenders in Mumbai and Pune: "+V.cust24+" paying lenders and "+V.arr24+" of ARR by month 24 on "+V.spend24+" of spend, with "+V.reserve+" held in reserve",
  "Source: case packet regions table (Savills, Anthropic Economic Index), DPDP and IT Rules rows | RBI FREE-AI, Aug 2025 | RBI recovery directions | team model "+V.hash+" (T3 to T11, T19)");
const a=layered(s,64,316,1792,52,C.primaryDeep,"CARD: answer");
TL(a,16,8,22,"OUR ANSWER",{color:C.accent});
T(a,200,11,1576,22,"Sell mid-sized lenders proof that every collection call followed the rules, on rented models and rented GPUs.",{family:"Inter",style:"Semi Bold",color:C.white});
rail(s,64,384,236,"WHERE",C.primaryDeep); rail(s,64,630,206,"WHO AND HOW",C.primary); rail(s,64,846,186,"THE ₹50 CR",C.good);
const p1=pnl(s,116,384,600,236,"INDUSTRY x REGION, SCORE OUT OF 5");
const IL=["BFSI lenders","Media","Telecom","Retail","IT services, GCCs","Manufacturing","Healthcare"];
hgrid(p1,14,46,IL,["West","South","North","East","Sector"],V.pair.map((r,i)=>r.map(v=>sc5(v,2)).concat([sc5(V.ind[i][2])])),{lw:182,cw:78,rh:23,hh:24,corner:"Industry",name:"pairs"});
const p2=pnl(s,728,384,520,236,"WHY THE WEST: THE CASE'S OWN DATA");
sTL(p2,14,46,18,"Data-centre capacity, MW",{family:"Inter",style:"Bold",color:C.primaryDeep});
[["Mumbai",846],["Pune",182],["Chennai",320],["Delhi-NCR",191]].forEach((r,i)=>hbar(p2,14,74+26*i,104,86,r[1],846,r[0],String(r[1]),i<2?C.primary:C.surface));
sTL(p2,266,46,18,"Claude.ai use, %",{family:"Inter",style:"Bold",color:C.primaryDeep});
[["Maharashtra",15.5],["Tamil Nadu",13.2],["Karnataka",12.7],["Delhi",10.5]].forEach((r,i)=>hbar(p2,266,74+26*i,124,64,r[1],15.5,r[0],r[1].toFixed(1),i===0?C.primary:C.surface));
note(p2,14,180,492,"So what: ","Mumbai and Pune hold "+V.west_dc+" of India's capacity; the South leads on combined use.",{lc:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
const p3=pnl(s,1260,384,596,236,"THE RULE CLOCK THAT MAKES LENDERS BUY");
addWireH(p3,40,556,94,C.ink,2.5);
[["Aug 2025","RBI FREE-AI report"],["Nov 2025","DPDP Rules notified"],["Feb 2026","IT Rules: AI labels"],["2026","RBI draft: record calls"],["Nov 2026","consent systems due"],["May 2027","DPDP in full"]].forEach((r,i)=>{ const cx=60+95*i;
  addEllipse(p3,cx-9,85,18,18,i>=4?C.alert:C.primary,C.ink,2); sTL(p3,0,52,18,r[0],{family:"Inter",style:"Bold",color:i>=4?C.alert:C.ink,centerAt:cx});
  sT(p3,cx-46,110,92,18,r[1],{family:"Inter",style:"Semi Bold",align:"CENTER"}); });
note(p3,14,180,568,"So what: ","by May 2027 a lender must prove each AI call was lawful; fines reach ₹250 Cr.",{lc:C.alert});
const p4=pnl(s,116,630,780,206,"FIRST THREE CUSTOMERS (PROFILES, NOT SIGNED NAMES)");
tbl(p4,14,46,[284,78,76,92,130,92],["Profile","City","Callers","Minutes","First buyer","Contract"],[
  ["Vehicle-loan NBFC, middle layer, own call team","Pune","150","4.5 lakh","Head of collections","₹18 lakh"],
  ["Urban co-operative bank, Marathi first","Mumbai","60","1.8 lakh","CEO, then the board","₹7 lakh"],
  ["Personal-loan NBFC using outside agencies","Mumbai","250","7.5 lakh","Compliance head","₹30 lakh"]],{hh:26,rh:44,name:"first three",align:["LEFT","LEFT","RIGHT","RIGHT","LEFT","RIGHT"]});
const p5=pnl(s,908,630,470,206,"FIRST CALL TO LIVE: 18 WEEKS");
gnt(p5,14,46,156,31,26,["2","4","6","8","10","12","14","16","18"],[{label:"Free audit",s:0,e:0,color:C.accent},{label:"Paid pilot",s:1,e:4,color:C.primary},
  {label:"Security check",s:3,e:6,color:C.blue},{label:"Contract",s:6,e:7,color:C.primaryDeep},{label:"Go live",s:8,e:8,color:C.good}],{});
const p6=pnl(s,1390,630,466,206,"SELLING WITHOUT A BRAND");
tbl(p6,14,46,[196,130,112],["Lever","Pace","Gives us"],[["Free call audit","4 a month","pipeline"],["Readiness report","2 a year","trust"],["Agency partners","35% of wins","reach"],["Lender forums","6 a year","meetings"]],
  {hh:26,rh:28,name:"brand",align:["LEFT","LEFT","LEFT"]});
const p7=pnl(s,116,846,700,186,"THE ₹50 CR SPLIT, ₹ CR (TOTAL "+V.alloc_sum+")");
V.alloc.forEach((r,i)=>{ const col=i<4?0:1, row=i<4?i:i-4, x=14+col*340, y=48+row*32;
  hbar(p7,x,y,118,120,parseFloat(r[1]),22,r[0],r[1]+"  "+r[2],r[0]==="Reserve"?C.good:C.primary); });
const p8=pnl(s,828,846,500,186,"ARR, ₹ CR, AND PAYING LENDERS");
cols(p8,14,46,472,134,V.hy_cust.map((c,i)=>"H"+(i+1)+": "+c),[{values:V.hy_arr,color:C.primary}],{max:7,bw:56,totals:V.hy_arr.map(v=>v.toFixed(1))});
const p9=pnl(s,1340,846,516,186,"MARKET, BOTTOM-UP, ₹ CR A YEAR");
fun(p9,14,48,488,[{t:"TAM "+V.tam+": India's lenders",size:20},{t:"SAM "+V.sam+": "+V.sam_logos+" West lenders",size:20},{t:"SOM "+V.som+": "+V.cust24+" lenders by M24",size:18,tc:C.ink}],{th:38,gap:6,minW:400});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
