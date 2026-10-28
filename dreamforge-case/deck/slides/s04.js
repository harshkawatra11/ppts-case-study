{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 4","THE ₹1 CRORE DECISION",480,V.h3x,V.src4x,{labels:RIBN});
rail(s,64,310,246,"ALLOCATION",C.primaryDeep); rail(s,64,568,228,"PAYBACK",C.primary); rail(s,64,808,224,"RETURNS",C.alert);
const UC=[C.primaryDeep,C.primary,HG[3],C.accent,C.blue,C.surface,C.alert];
// band 1: deployment by month, sources and uses
const p1=pnl(s,116,310,760,246,"WHEN THE CRORE GOES OUT, ₹ L A MONTH");
let lx=14; V.dep_names.forEach((n,i)=>{ lx=lgS(p1,lx,46,UC[i],n); });
cols(p1,14,72,732,170,V.dep_m,V.dep_series.map((v,i)=>({color:UC[i],values:v})),{max:25,bw:34,totals:V.dep_tot});
sT(p1,540,110,200,18,V.dep_note,{family:"Inter",style:"Bold",color:C.alert});
const p2=pnl(s,888,310,968,246,"SOURCES AND USES, MONTHS 1 TO 24, ₹ L");
sTL(p2,0,46,18,"SOURCES",{family:"Inter",style:"Bold",centerAt:58}); sTL(p2,0,46,18,"USES",{family:"Inter",style:"Bold",centerAt:170});
const SY=72, SK=166/V.su_total; let y=SY;
V.su_src.forEach((q,i)=>{ const h=q[1]*SK; addRect(p2,22,y,72,h,i?C.alert:C.primaryDeep,C.ink,1.5); sTL(p2,0,y+h/2-11,18,q[0],{family:"Inter",style:"Bold",color:C.white,centerAt:58}); y+=h; });
y=SY; V.su_use.forEach((q,i)=>{ const h=q[1]*SK; addRect(p2,134,y,72,h,UC[i],C.ink,1); if(h>=30) sTL(p2,0,y+h/2-11,18,q[1].toFixed(1),{family:"Inter",style:"Bold",color:C.white,centerAt:170}); y+=h; });
addRect(p2,94,SY,40,1.5,C.ink); addRect(p2,94,SY+100*SK,40,1.5,C.ink); addRect(p2,94,SY+166,40,1.5,C.ink);
tbl(p2,226,46,[214,64,56,374],["Use","₹ L","%","Basis"],V.su_rows,{hh:26,rh:24,name:"uses",align:["LEFT","RIGHT","RIGHT","LEFT"],strip:UC});
// band 2: payback and cash
const p3=pnl(s,116,568,760,228,"PAYBACK: THE ₹"+V.used+" L COMES BACK BY MONTH "+V.payback);
const lc=lcS(p3,14,46,732,176,[{values:V.pb_inv,color:C.blueDeep,label:"Deployed ₹"+V.used+" L",dy:12},{values:V.pb_earn,color:C.primary,label:"Earned ₹"+V.pb_last+" L"}],V.pb_x,{yMin:0,yMax:270,yTicks:[90,180,270],padL:46,padR:190});
const xm=lc.X(V.payback/3); dashedV(p3,xm,lc.Tp,lc.B-lc.Tp,C.alert,2.5);
sTL(p3,xm+8,lc.Tp,18,"Month "+V.payback,{family:"Inter",style:"Bold",color:C.alert});
const p4=pnl(s,888,568,968,228,"CASH IN THE BANK, ₹ L: NO LOAN NEEDED");
const idx=[0,3,6,9,12,15,18,21,24], pick=a=>idx.map(m=>m===0?100:a[m-1]);
const ch=lcS(p4,14,46,940,176,[{values:pick(V.cash5),color:C.primary,label:"Lease both ₹"+V.cash5_24+" Cr",dy:-4},{values:pick(V.cash3),color:C.alert,label:"Buy both ₹"+V.cash3_24+" Cr",dy:-8},{values:pick(V.cash0),color:C.blueDeep,label:"Stay petrol ₹"+V.cash0_24+" Cr",dy:10}],idx.map(m=>"M"+m),{yMin:0,yMax:400,yTicks:[100,200,300,400],padL:52,padR:230});
sTL(p4,ch.L+12,ch.Tp+2,18,V.cash_note,{family:"Inter",style:"Bold",color:C.alert});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S4");
const m=layered(s,116,808,560,217,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,20,6,22,"CONTRIBUTION A YEAR",{color:C.accent,maxW:520});
const a1=TL(m,20,44,44,"₹"+V.rr0r+" L",{family:"Poppins",style:"ExtraBold",color:C.white});
arrow(m,20+a1.width+12,78,20+a1.width+56,78,C.accent,5);
TL(m,20+a1.width+68,38,56,"₹"+V.rr5+" Cr",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:520-a1.width-68,min:40});
T(m,20,122,520,22,V.ms_line,{family:"Inter",style:"Bold",color:C.white});
addDashedRow(m,20,154,520,C.accent,14,9,2);
V.ms_minis.forEach((k,i)=>{ const x=20+i*176; TL(m,x,158,24,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:166,min:22}); sT(m,x,194,166,18,k[1],{family:"Inter",style:"Bold",color:C.white}); });
const p6=pnl(s,688,808,700,224,"HOW ₹"+V.rr0r+" L BECOMES ₹"+V.rr5+" CR A YEAR, ₹ L");
wf(p6,14,46,672,174,V.bridge6,{min:0,max:230,dp:1,lh:46,bw:60});
const p7=pnl(s,1400,808,456,224,"WHAT HAS TO BE TRUE");
tbl(p7,14,46,[214,92,122],["Driver","Base","Breaks at"],V.sw_rows,{hh:26,rh:24,name:"switch",align:["LEFT","RIGHT","RIGHT"]});
note(p7,14,190,428,"",V.sw_note);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
