{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 5","DIAGNOSIS",260,V.sal_idle_sh+" of the "+V.idle_l+" idle accounts belong to salary customers, and a year of market-led messages left activation flat at "+V.rate26,
  "Source: case Exhibits 1, 2a, 2b and funnel table | NSE active clients FY26 and Sep 2026 | demat accounts, Sep 2026 (24.06 crore) | SEBI F&O study FY26 | team model "+V.hash+" (T2 to T8)");
rail(s,64,310,240,"THE BASE",C.primary); rail(s,64,562,232,"THE FUNNEL",C.alert); rail(s,64,806,226,"WHY IT STALLS",C.primaryDeep);
const p1=pnl(s,116,310,650,240,"ACTIVE BY TRAILING WINDOW, SEP 2026, %");
hgrid(p1,14,46,V.seg,["T12","T9","T6","T3","T1","YoY"],V.r26.map((r,i)=>r.map(v=>heatP(v)).concat([(()=>{ const d=r[0]-V.r25[i][0]; return {t:(d>0?"+":(d<0?"−":""))+Math.abs(d)+" pp",f:d<0?C.alertTint:C.goodTint,tc:d<0?C.alert:C.good}; })()])),
  {lw:166,cw:76,rh:26,hh:26,corner:"Segment",name:"cohort heat"});
const p2=pnl(s,778,310,500,240,"IDLE ACCOUNTS BY SEGMENT");
const mx=Math.max(...V.idle_seg);
V.seg.forEach((g,i)=>{ const y=50+28*i, w=Math.max(3,Math.round(226*V.idle_seg[i]/mx));
  sTL(p2,14,y,18,g,{family:"Inter",style:"Bold",maxW:146}); addRect(p2,164,y+3,w,18,i===4?C.alert:C.primary,C.ink,1); sTL(p2,170+w,y,18,V.idle_seg_f[i],{family:"Inter",style:"Bold",color:i===4?C.alert:C.ink}); });
const p3=pnl(s,1290,310,566,240,"SHARE OF THE BASE BY SEGMENT, %");
const SC=[C.primaryDeep,C.primary,HG[3],C.accent,C.alert,HG[2]];
[["Sep 2025",V.sh25s,V.base25_f],["Sep 2026",V.sh26s,V.base26]].forEach((r,j)=>{ const y=52+56*j; sTL(p3,14,y+8,18,r[0],{family:"Inter",style:"Bold"}); let x=104;
  r[1].forEach((v,i)=>{ const w=438*v/100; addRect(p3,x,y,Math.max(1,w),40,SC[i],C.ink,1); if(i===4){ sTL(p3,0,y+8,18,v.toFixed(1)+"%",{family:"Inter",style:"Bold",color:C.white,centerAt:x+w/2}); } x+=w; }); });
const LG=["Prestige","Elite","Elevate","Preferred","Salary","Credit card"]; let lx=14;
LG.forEach((g,i)=>{ if(i===3) lx=14; lx=lgS(p3,lx,i<3?166:192,SC[i],g); });
sT(p3,14,216,538,18,"Salary accounts grew 24% in a year; credit card fell 34%",{family:"Inter",style:"Bold",color:C.alert});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const p4=pnl(s,116,562,700,232,"THE FUNNEL, AND WHERE PAST EFFORT LANDED");
const ST=["Account opened","First login","Funded","First order","Habit"], LK=["healthy volumes","account forgotten","separate funding step","fear of loss","no routine"];
ST.forEach((t,i)=>{ const x=14+136*i; bx(p4,x,46,124,52,t,{fill:(i===1||i===2)?C.alertTint:C.white}); if(i<4) arrow(p4,x+124,72,x+135,72,C.ink,2);
  sT(p4,x,104,124,18,LK[i],{family:"Inter",style:"Semi Bold",color:(i===1||i===2)?C.alert:C.ink,align:"CENTER"}); });
const g=ghost(p4,14,158,396,70,C.alert); sT(p4,24,166,376,18,"Stages 2 and 3: nothing in ONL's plan aimed here",{family:"Inter",style:"Bold",color:C.alert});
bx(p4,422,158,264,70,"ONL's effort: market updates, research calls, offers, literacy",{fill:C.accentTint,size:18});
const p5=pnl(s,828,562,500,232,"THE QUARTER IN ACCOUNTS");
tbl(p5,14,46,[300,172],["Item","Accounts"],[["Active on 30 Sep 2026",V.act26],["Roll off next quarter",V.roll_lo+" to "+V.roll_hi],["Active 31 Jan 2027, no change",V.bau_n],["Needed for +200 bps",V.need200],["Needed for +300 bps",V.need300]],
  {hh:26,rh:25,name:"quarter",align:["LEFT","RIGHT"]});
note(p5,14,199,472,"So what: ","about 11,500 roll off a quarter");
const p6=pnl(s,1340,562,516,232,"THE MARKET AROUND ONL");
tile(p6,14,46,240,86,"−7%","NSE active clients FY26",{color:C.alert,size:30,ly:50}); tile(p6,262,46,240,86,"19.2%","active ratio, India",{size:30,ly:50});
tile(p6,14,140,240,86,V.rate26,"ONL, Sep 2026",{color:C.alert,size:30,ly:50}); tile(p6,262,140,240,86,"87.7%","F&O traders lost, FY26",{color:C.alert,size:30,ly:50});
const p7=pnl(s,116,806,880,226,"FIVE WHYS ON ONE IDLE SALARY ACCOUNT");
["No order in a year: it came with the salary account","It was never chosen, so it is not thought of as theirs","ONL messages arrive as market news, easy to ignore",
 "In a falling market, 'stay invested' sounds like risk","No ONL message reaches them in the bank app"].forEach((w,i)=>{ const x=14+170*i;
  const f=addFrame(p7,x,46,160,132,i===4?C.accent:C.white,C.ink,2,"WHY"); TL(f,8,2,22,"WHY "+(i+1),{color:C.primaryDeep}); sT(f,8,36,144,18,w,{family:"Inter",style:"Semi Bold"});
  if(i<4) arrow(p7,x+161,112,x+169,112,C.ink,2); });
note(p7,14,184,852,"Root cause: ","customers stall before they ever log in.");
const p8=pnl(s,1008,806,848,226,"FIVE BIASES, AND THE DESIGN ANSWER");
tbl(p8,14,44,[190,290,340],["Bias","What it does here","Our design answer"],[["Inattention","account is out of sight","show it in the bank app"],["Loss aversion","falling prices feel like losses","gold, liquid, index ETFs, small"],
  ["Present bias","starting is always next month","act once, on salary day"],["Status quo","idle stays idle","an instalment they set and pause"],["Mental accounting","salary is spending money","a set-aside right after salary"]],{hh:26,rh:30,name:"biases"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
