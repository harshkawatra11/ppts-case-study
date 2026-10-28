{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 5","EXECUTIVE SUMMARY",360,"ONL can add "+V.pp+" of activation by 31 January 2027 by meeting salary customers inside the bank, for "+V.cash+" of cash and with no offers or F&O prompts",
  "Source: case Exhibits 1 and 2 | NSE active clients and demat accounts, Sep 2026 | SEBI F&O study FY26 | team activation model "+V.hash+" (T8, T10, T11, T14, T17)");
const a=layered(s,64,306,1792,56,C.primaryDeep,"CARD: answer");
TL(a,16,10,22,"OUR ANSWER",{color:C.accent});
T(a,200,13,1576,22,"Show customers their forgotten ONL account where they already bank: on salary day, in a holdings check, at the RM review and at Dhanteras.",{family:"Inter",style:"Semi Bold",color:C.white});
const p1=pnl(s,64,378,500,330,"ONL AGAINST THE MARKET, %");
const bx0=30, bw=78, BASE=290, TOP=112, Yv=v=>BASE-(BASE-TOP)*v/42;
addRect(p1,14,BASE,472,2,C.ink);
[["ONL 2025",V.rate25_n,C.alert],["ONL 2026",V.rate26_n,C.alert],["India 2026",19.2,C.primary]].forEach((r,i)=>{ const x=bx0+112*i;
  addRect(p1,x,Yv(r[1]),bw,BASE-Yv(r[1]),r[2],C.ink,1.5); sTL(p1,0,Yv(r[1])-26,18,r[1].toFixed(1)+"%",{family:"Inter",style:"Bold",centerAt:x+bw/2,color:r[2]});
  sTL(p1,0,BASE+4,18,r[0],{family:"Inter",style:"Bold",centerAt:x+bw/2}); });
const xi=bx0+336; addRect(p1,xi,Yv(40),bw,Yv(20)-Yv(40),C.goodTint,C.good,1.5); ghost(p1,xi,Yv(20),bw,BASE-Yv(20),C.good);
sTL(p1,0,Yv(40)-26,18,"20 to 40%",{family:"Inter",style:"Bold",centerAt:xi+bw/2,color:C.good}); sTL(p1,0,BASE+4,18,"Industry",{family:"Inter",style:"Bold",centerAt:xi+bw/2});
dashedH(p1,14,Yv(V.rate26_n),472,C.alert,1.5);
note(p1,14,46,472,"Flat: ","a year of messages moved it 0.04 pp",{fill:C.alertTint});
const p2=pnl(s,580,378,440,330,"EXHIBIT 1 AS A FUNNEL");
const FW=[330,262,196,150], FC=[C.primaryDeep,C.primary,HG[3],C.accent];
V.fun.forEach((r,i)=>{ const y=48+62*i, w=FW[i], x=14+(330-w)/2; const f=addFrame(p2,x,y,w,56,FC[i],C.ink,1.5,"TIER");
  TL(f,0,1,22,r[0],{family:"Poppins",style:"ExtraBold",color:i<2?C.white:C.ink,centerAt:w/2}); sTL(f,0,34,18,r[1],{family:"Inter",style:"Semi Bold",color:i<2?C.white:C.ink,centerAt:w/2});
  if(i>0) sTL(p2,352,y-14,18,V.fun_drop[i-1],{family:"Poppins",style:"Bold",color:C.alert}); });
sT(p2,14,298,412,18,V.never+" in 100 accounts: no trade in a year",{family:"Inter",style:"Bold",color:C.alert});
const p3=pnl(s,1036,378,820,330,"THE TARGET, AND WHERE WE LAND, pp");
const L=40,R=780, X=v=>L+(R-L)*v/4.5, YB=118;
addRect(p3,X(2),YB-34,X(3)-X(2),68,C.accentTint,C.accent,1.5); sTL(p3,X(3)+8,YB-58,18,"the brief: +2.0 to +3.0",{family:"Inter",style:"Bold",color:C.primaryDeep});
addRect(p3,L,YB-2,R-L,4,C.ink); [0,1,2,3,4].forEach(v=>{ addRect(p3,X(v)-1,YB+8,2,10,C.ink); sTL(p3,0,YB+40,18,String(v),{family:"Inter",style:"Bold",centerAt:X(v)}); });
[["Status quo",0.04,C.surface,22,-1],["Bear",V.pp_bear_n,C.alert,26,1],["Base",V.pp_n,C.primaryDeep,40,-1],["Bull",V.pp_bull_n,C.good,26,1]].forEach(m=>{
  addEllipse(p3,X(m[1])-m[3]/2,YB-m[3]/2,m[3],m[3],m[2],C.ink,2);
  const lab=m[0]+" "+(m[1]>=0?"+":"")+m[1].toFixed(m[0]==="Status quo"?2:1); sTL(p3,0,m[4]<0?YB-m[3]/2-26:YB+m[3]/2+2,18,lab,{family:"Inter",style:"Bold",centerAt:Math.max(L+60,X(m[1]))}); });
sTL(p3,14,190,18,"Where the "+V.inc+" extra actives come from, base case",{family:"Inter",style:"Bold",color:C.primaryDeep});
const PT=[["Salary day",V.lev[0],C.primaryDeep],["RM review",V.lev[2],C.primary],["Holdings",V.lev[1],HG[3]],["Dhanteras",V.lev[3],C.accent],["New",V.new_n,C.good],["Warm",V.warm_n,C.alert],["Workplace",V.lev[4],HG[2]]];
let sx=14; const tot=PT.reduce((a,r)=>a+r[1],0);
PT.forEach(r=>{ const w=792*r[1]/tot; addRect(p3,sx,218,w,40,r[2],C.ink,1); if(w>70) sTL(p3,0,227,18,fmtN(r[1]),{family:"Inter",style:"Bold",color:(r[2]===C.accent||r[2]===HG[3]||r[2]===HG[2])?C.ink:C.white,centerAt:sx+w/2}); sx+=w; });
let lx=14; PT.forEach((r,i)=>{ lx=lgS(p3,lx,272,r[2],r[0]); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
[["THE BRIEF ASKS",100,C.primaryDeep],["THE OBVIOUS MOVE",345,C.alert],["WHAT WE DO",715,C.good],["THE PROOF",1095,C.primaryDeep],["THE RESULT",1545,C.primaryDeep]].forEach(h=>TL(s,h[1],724,22,h[0],{color:h[2]}));
addRect(s,60,760,1796,2,C.ink); addRect(s,73,772,2.5,252,C.primaryDeep);
const NO=(x,y)=>{ const f=addFrame(s,x,y,28,28,null,null,0,"ICON: no"); addEllipse(f,0,0,28,28,C.alert,C.ink,1.5); addDiagonalWire(f,9,9,19,19,C.white,3); addDiagonalWire(f,19,9,9,19,C.white,3); };
const bar=(x,y,lab,v,max,col,txt)=>{ sTL(s,x,y,18,lab,{family:"Inter",style:"Bold",maxW:150}); const w=Math.max(3,Math.round(200*v/max)); addRect(s,x+156,y+3,w,18,col,C.ink,1); sTL(s,x+164+w,y,18,txt,{family:"Inter",style:"Bold"}); };
const ROW=(yR,n,A,B,Cc,Pt,Pb,E)=>{ addBadge(s,60,yR+4,28,n,C.primaryDeep,C.white);
  TL(s,100,yR,22,A[0],{color:C.primaryDeep,maxW:232}); sT(s,100,yR+36,232,18,A[1],{family:"Inter",style:"Semi Bold"});
  NO(345,yR+4); const b=TL(s,381,yR,22,B[0],{color:C.alert,maxW:320}); addRect(s,b.x,b.y+b.height/2,b.width,2.5,C.alert); sT(s,345,yR+38,350,18,B[1],{family:"Inter",style:"Semi Bold"});
  tick(s,715,yR+4,28); TL(s,751,yR,22,Cc[0],{color:C.good,maxW:330}); sT(s,715,yR+38,362,18,Cc[1],{family:"Inter",style:"Semi Bold"});
  sTL(s,1095,yR,18,Pt,{family:"Inter",style:"Bold",color:C.primaryDeep}); Pb.forEach((r,i)=>bar(1095,yR+26+24*i,r[0],r[1],r[2],r[3],r[4]));
  TL(s,1545,yR-4,40,E[0],{family:"Poppins",style:"ExtraBold",color:E[2],maxW:300,min:30}); sTL(s,1545,yR+58,18,E[1],{family:"Inter",style:"Bold",maxW:310}); };
ROW(772,1,["ACTIVATE","+200 to +300 bps in 3 months"],["More market messages","a year of them moved it 0.04 pp"],["Meet it in the bank","salary day, holdings check, RM review, Dhanteras"],
  "Activation rate, %",[["Today",V.rate26_n,18,C.alert,V.rate26],["31 Jan 2027",V.rate_end_n,18,C.good,V.rate_end]],[V.pp,"bear "+V.pp_bear+", bull "+V.pp_bull,C.good]);
dashedH(s,60,857,1796,C.ink,2);
ROW(862,2,["SPEND LITTLE","lean budget, owned assets first"],["Buy users with paid media",V.paid_cpa+" for each activated account"],["Use rails the bank owns","app, statements, RM, WhatsApp, branch"],
  "Extra actives for "+V.cash,[["Bank moments",V.inc_n,V.inc_n,C.good,V.inc],["Paid media",V.paid_nn,V.inc_n,C.alert,V.paid_n]],[V.cpa,"cash each; "+V.ratio+"x paid media",C.alert]);
dashedH(s,60,947,1796,C.ink,2);
ROW(952,3,["STAY COMPLIANT","SEBI, consent, no dark patterns"],["Offers, contests, F&O push","88.5% of under-30 F&O traders lost money"],["Facts only, consent first","no advice, no returns, no urgency"],
  "Checks passed, out of 5",[["Past messages",2,5,C.alert,"2"],["Our messages",5,5,C.good,"5"]],["0","offers, contests, F&O prompts",C.primaryDeep]);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
