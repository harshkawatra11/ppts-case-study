{ const s = await figma.getNodeByIdAsync("S8");
skelBT(s,-1,"A1 TO A4","APPENDIX",260,V.h8,V.src[7],{labels:RIBAP,counterW:200});
rail(s,64,310,240,"A1 MODEL",C.primaryDeep); rail(s,64,562,232,"A2, A3",C.primary); rail(s,64,806,226,"A4 SOURCES",C.alert);
const p1=pnl(s,116,310,600,240,"A1 MARKET AND UNIT ECONOMICS WORKINGS");
tbl(p1,14,46,[230,342],["Line","Working"],[["TAM","780 × ₹12 L = ₹93.60 Cr"],["SAM","112 × ₹12 L = ₹13.44 Cr"],["SOM, Y3 base","80 × ₹12 L = ₹9.60 Cr"],["Beachhead","41 × ₹12 L = ₹4.92 Cr"],["Gross profit a month","₹12 L × 71% ÷ 12 = ₹0.71 L"],["CAC payback","₹4 L ÷ ₹0.71 L = 5.6 months"],["LTV : CAC","₹42.6 L ÷ ₹4 L = 10.65x"]],{hh:26,rh:23,name:"workings"});
const p2=pnl(s,728,310,560,240,"A1 CUSTOMER PAYBACK FROM AUDITED EXPIRY");
hBars(p2,14,50,532,[{label:"Telangana",value:6.1,text:"6.1%",color:C.primary},{label:"Odisha",value:12.5,text:"12.5%",color:C.accent}],{labelW:150,rowH:46,barH:28,valueW:90,max:15});
callout(p2,14,150,532,76,"Share = ","₹12 L ÷ (audited expiry ÷ years ÷ districts)");
const p3=pnl(s,1300,310,556,240,"A1 REVENUE PATH, ₹ CR, THREE CASES");
tbl(p3,14,46,[150,64,64,70,100,80],["Line","Y1","Y2","Y3","Bill Y3","GM"],[["Bear ARR","1.44","3.60","6.00","6.60","62%"],["Base ARR","1.44","5.40","9.60","10.65","71%"],["Bull ARR","1.44","7.20","12.60","13.95","76%"],["Bear districts","12","30","50","",""],["Base districts","12","45","80","",""],["Bull districts","12","60","105","",""]],
  {hh:26,rh:26,name:"path",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[null,C.tint,null,null,C.tint,null]});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S8");
const p4=pnl(s,116,562,1100,232,"A2 THE ASSUMPTIONS THAT MOVE THE ANSWER");
tbl(p4,14,46,[70,300,200,502],["ID","Assumption","Value","Basis, and how a pilot tests it"],[["A01","Survey-day availability proxy","72.2%","standard proxy; replaced by daily logs"],["A02","Stock-out days removed","30, 50, 80%","eVIN reported 80%; base is half"],
  ["A05","Licence a district a year","₹12 L","₹4 L + ₹7 L + ₹1 L; first signed price"],["A08","Gross margin","62, 71, 76%","Indian SaaS benchmarks; real delivery cost"],["A09","Cost to win a district","₹4 L","team estimate; cost of the first close"],
  ["A12","Districts at year end","12, 45, 80","base path; pace of sign-ups"],["A16","MoU to a live district","6 weeks","a plan; the first district's real time"]],{hh:26,rh:22,name:"assume"});
const p5=pnl(s,1228,562,628,232,"A3 YEAR-3 ARR SENSITIVITY, ₹ CR");
const TX=v=>260+(v-5)*300/8;
dashedV(p5,TX(9.6),70,140,C.ink,2); sTL(p5,0,46,18,"base 9.6",{family:"Inter",style:"Bold",centerAt:TX(9.6)});
[["Districts, 50 to 105",6.00,12.60],["Licence, ₹9 L to ₹15 L",7.20,12.00],["Facilities, 35 to 65",7.92,11.28]].forEach((r,i)=>{ const y=76+46*i;
  sTL(p5,14,y+4,18,r[0],{family:"Inter",style:"Bold",maxW:230}); addRect(p5,TX(r[1]),y,TX(9.6)-TX(r[1]),30,C.accent,C.ink,1.5); addRect(p5,TX(9.6),y,TX(r[2])-TX(9.6),30,C.primary,C.ink,1.5);
  sTL(p5,0,y+4,18,r[1].toFixed(2),{family:"Inter",style:"Bold",rightAt:TX(r[1])-6}); sTL(p5,TX(r[2])+6,y+4,18,r[2].toFixed(2),{family:"Inter",style:"Bold"}); });
sRT(p5,14,206,600,18,"Reading: ","the pace of district signing moves Y3 ARR most",{leadColor:C.primaryDeep});
const p6=pnl(s,116,806,860,226,"A4 SOURCES THE DECK LEANS ON");
const BIB=["S01 MoHFW, Health Dynamics of India 2022-23","S02 PMC8654139, Puducherry availability study","S03 PMC10292169, Gadag Taluk availability","S44 Kotwani et al. 2015, Punjab and Haryana",
  "S06 Suraweera et al. 2020, eLife, snakebite","S10 MoHFW, National Health Accounts 2022-23","S12 UNDP India, eVIN programme page","S13 Constitution, Seventh Schedule, List II",
  "S14 Digital Personal Data Protection Act 2023","S15 C-DAC, e-Aushadhi (DVDMS)","S16 CAG Telangana via Medical Dialogues 2024","S17 CAG Odisha via UNI, Oct 2026",
  "S18 PRS, Demand for Grants 2025-26, Health","S19, S20 NITI Aayog, aspirational districts","S21 PIB, ABDM statistics, Jul 2026","S25, S26 Codingclave, upGrowth, 2026"];
BIB.forEach((b,i)=>{ const t=addText(p6,"Inter","Semi Bold",16,C.ink,b,14+420*Math.floor(i/8),48+21*(i%8),412,21,"LEFT","CENTER",false); t.name="BIBLIO"; });
const p7=pnl(s,988,806,868,226,"A4 SHORT FORMS USED ON THIS DECK");
tbl(p7,14,46,[84,336,84,336],["Short","Meaning","Short","Meaning"],[["PHC","primary health centre","CHC","community health centre"],["NHM","National Health Mission","DHO","district health officer"],["CAG","Comptroller and Auditor General","OOP","out-of-pocket spending"],
  ["ABDM","Ayushman Bharat Digital Mission","ABHA","Ayushman Bharat Health Account"],["eVIN","electronic vaccine network","DVDMS","drug and vaccine ledger"],["ARR","annual recurring revenue","CAC","cost to win a customer"],["MoU","memorandum of understanding","ARV","anti-rabies vaccine"]],{hh:26,rh:22,name:"short",bold:[2]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
