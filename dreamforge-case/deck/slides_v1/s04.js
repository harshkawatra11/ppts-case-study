{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 4","THE ₹1 CRORE DECISION",480,V.h3,V.src[3],{labels:RIBN});
rail(s,64,312,310,"ALLOCATION",C.primaryDeep); rail(s,64,638,392,"RETURNS",C.primary);
// band 1: allocation and cash
const p1=panel(s,120,312,820,310,"WHERE THE ₹1 CRORE GOES");
const UC=[C.primaryDeep,C.primary,HG[3],C.accent,C.blue,C.surface];
donut(p1,136,184,224,V.uses_v.map((v,i)=>({v,c:UC[i]})),0.55);
TL(p1,0,166,30,"₹1 Cr",{family:"Poppins",style:"ExtraBold",centerAt:136});
V.uses_rows.forEach((r,i)=>addRect(p1,254,56+34+i*34+8,10,18,UC[i],C.ink,1.5));
wrapTable(p1,272,56,[214,86,76,140],["Use","₹ L","%","When"],V.uses_rows,{headerH:34,rowH:34,name:"uses"});
const p2=panel(s,956,312,900,310,"CASH IN THE BANK, ₹ LAKH");
const idx=[0,3,6,9,12,15,18,21,24], pick=a=>idx.map(m=>m===0?100:a[m-1]);
const ch=lineChart(p2,16,56,868,244,[{values:pick(V.cash5),color:C.primary,label:"Lease both ₹"+V.cash5_24+" Cr"},
  {values:pick(V.cash3),color:C.alert,label:"Buy both ₹"+V.cash3_24+" Cr",labelDy:-14},
  {values:pick(V.cash0),color:C.blueDeep,label:"Stay petrol ₹"+V.cash0_24+" Cr",labelDy:14}],
  idx.map(m=>"M"+m),{yMin:0,yMax:400,yTicks:[100,200,300,400],padL:70,padR:250});
TL(p2,0,ch.Y(V.cash3[2])-38,22,"needs a ₹"+V.loan3+" L loan",{family:"Inter",style:"Bold",color:C.alert,centerAt:ch.X(1)+40});
// band 2: returns
const m=layered(s,120,638,600,392,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,24,10,22,"CONTRIBUTION A YEAR",{color:C.accent,maxW:552});
const a1=TL(m,24,64,48,"₹"+V.rr0r+" L",{family:"Poppins",style:"ExtraBold",color:C.white});
arrow(m,24+a1.width+14,100,24+a1.width+70,100,C.accent,5);
TL(m,24+a1.width+84,50,64,"₹"+V.rr5+" Cr",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:552-a1.width-84,min:44});
T(m,24,154,552,22,V.mult+" the contribution of today, with ₹0 of debt and cash never below ₹"+V.min5+" Cr.",{family:"Inter",style:"Bold",color:C.white});
addDashedRow(m,24,222,552,C.accent,14,9,2);
[["+₹"+V.dnpv5+" Cr","NPV over petrol, 48 months"],["₹"+V.gap53+" Cr","more than buying both"],["−"+V.gcut,"CO2 per delivery"]].forEach((k,i)=>{ const x=24+i*188;
  TL(m,x,240,30,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:176,min:24});
  T(m,x,290,176,22,k[1],{family:"Inter",style:"Bold",color:C.white}); });
const p4=panel(s,736,638,708,392,"HOW ₹"+V.rr0r+" L BECOMES ₹"+V.rr5+" CR A YEAR, ₹ L");
waterfall(p4,16,56,676,326,V.bridge6,{min:0,max:240,dp:1,labelH:70,labelDy:8});
const p5=panel(s,1460,638,396,392,"WHAT HAS TO BE TRUE");
wrapTable(p5,16,56,[244,120],["Assumption","Base"],V.assume,{headerH:34,rowH:36,name:"assume"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
