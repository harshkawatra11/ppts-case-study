{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,4,"5 / 5","EXECUTION",260,"Thirteen weeks, four gates and a 10% holdout: the lift is read every week and any moment that breaks a guardrail stops",
  "Source: team plan and activation model "+V.hash+" (T12, T19) | guardrail thresholds are team targets | SEBI F&O study FY26 | NSE advertisement code | research sections 26 to 29");
rail(s,64,310,300,"THE PLAN",C.primary); rail(s,64,622,214,"THE PROOF",C.good); rail(s,64,848,184,"THE RISKS",C.alert);
const p1=pnl(s,116,310,1100,300,"13 WEEKS FROM 2 NOVEMBER 2026, FOUR GATES");
const RW=[{label:"Consent, ad approval",s:0,e:0,color:C.accent},{label:"Dhanteras notice",s:0,e:1,color:C.alert},{label:"Bank-app tile, sign-on",s:0,e:3},{label:"RM review sprint",s:1,e:9},
  {label:"ETF instalments live",s:5,e:12},{label:"Salary-day card",s:4,e:12,color:C.primaryDeep},{label:"Holdout, weekly read",s:0,e:12,color:C.good}];
const y0=gnt(p1,14,46,230,64,26,["1","2","3","4","5","6","7","8","9","10","11","12","13"],RW);
[["G0",0,0],["G1",2,4],["G2",4,6],["G3",6,13]].forEach(g=>{ const cx=Math.max(14+238,Math.min(14+230+64*g[2],14+230+832-12)), cy=y0+26*g[1]+13; diamond(p1,cx,cy,11,C.accent);
  if(cx>14+230+832-60) sTL(p1,0,cy-12,18,g[0],{family:"Poppins",style:"Bold",rightAt:cx-14}); else sTL(p1,cx+14,cy-12,18,g[0],{family:"Poppins",style:"Bold"}); });
sT(p1,14,y0+26*7+8,1060,18,"Salary credits land in weeks 5, 9 and 13; Dhanteras and Diwali fall in week 1 (6 and 8 November).",{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
const p2=pnl(s,1228,310,628,300,"GO ONLY IF");
tbl(p2,14,46,[64,96,440],["Gate","When","Test"],[["G0","Week 0","creatives cleared; consent text live"],["G1","Week 4","tile and sign-on live; holdout drawn"],
  ["G2","Week 6","rate at or above "+V.bear6+"; else add RM reviews"],["G3","Week 13","lift read; scale or stop each moment"]],{hh:26,rh:30,name:"gates"});
note(p2,14,204,600,"Not yet run: ","30 customer interviews and 2 usability rounds in weeks 1 to 3 test the card and the tile.");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p3=pnl(s,116,622,640,214,"EXTRA ACTIVES ADDED EACH MONTH, BY MOMENT");
const COL=[C.primaryDeep,C.primary,HG[3],C.accent,C.good,C.alert,HG[2]], mt=[0,1,2].map(m=>V.mlev.reduce((a,r)=>a+r[m],0));
cols(p3,14,44,330,164,["Nov","Dec","Jan"],V.mlev.map((r,i)=>({values:r,color:COL[i]})),{max:Math.max(...mt)*1.12,bw:70,totals:V.mtot});
V.mlev_l.forEach((l,i)=>lgS(p3,372,48+22*i,COL[i],l));
const p4=pnl(s,768,622,520,214,"HOLDOUT: LIFT VS DETECTABLE, pp");
const mx=Math.max(...V.hold.map(h=>h[1]/h[2]));
V.hold.forEach((h,i)=>{ const y=52+38*i, k=h[1]/h[2], w=Math.round(150*k/mx);
  sTL(p4,14,y,18,h[0],{family:"Inter",style:"Bold",maxW:120}); addRect(p4,140,y+2,w,22,C.good,C.ink,1);
  sTL(p4,146+w,y,18,Math.round(k)+"x ("+h[1].toFixed(2)+" vs "+h[2].toFixed(2)+" pp)",{family:"Inter",style:"Bold"}); });
const p5=pnl(s,1300,622,556,214,"WHAT WE REPORT EVERY WEEK");
tbl(p5,14,44,[214,90,112,112],["KPI","Today","Week 6","Week 13"],V.kpi,{hh:26,rh:28,name:"kpi",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[C.tint,null,null,null,null]});
const p6=pnl(s,116,848,900,184,"RISKS: PROBABILITY BY IMPACT");
const LV=["Low","Med","High"], CELL={"1,2":"1","0,2":"2, 5","1,1":"3","2,1":"4"};
LV.forEach((l,j)=>sTL(p6,0,46,18,l,{family:"Inter",style:"Bold",centerAt:84+70*j+35}));
[2,1,0].forEach((pi,r)=>{ sTL(p6,14,72+36*r+7,18,LV[pi],{family:"Inter",style:"Bold"});
  [0,1,2].forEach(ii=>{ const v=(pi+1)*(ii+1), k=v>=6?4:(v>=4?3:(v>=2?2:1)); const f=addFrame(p6,84+70*ii,72+36*r,70,36,HR[k],C.ink,1,"CELL");
    const tx=CELL[pi+","+ii]; if(tx) sTL(f,0,7,18,tx,{family:"Inter",style:"Bold",centerAt:35,color:k>=4?C.white:C.ink}); }); });
["Ad approval slips: file every creative in October","App slot not given: bank sponsor signs off first","Consent short: lead with servicing messages",
 "Market falls further: gold, liquid, index ETFs only","Drift into F&O: no F&O prompts, knowledge check"].forEach((x,i)=>{ const y=48+26*i;
  addEllipse(p6,316,y,22,22,C.alert,C.ink,1.5); sTL(p6,0,y-1,18,String(i+1),{family:"Inter",style:"Bold",color:C.white,centerAt:327}); sTL(p6,348,y,18,x,{family:"Inter",style:"Semi Bold",maxW:536}); });
const p7=pnl(s,1028,848,828,184,"GUARDRAILS: STOP LINES, CHECKED WEEKLY");
tbl(p7,14,44,[330,190,280],["Guardrail","Stop line","Action"],[["New actives in F&O","above 5%","pause the moment"],["Opt-outs a send","above 0.5%","stop the message"],
  ["Complaints per 10,000","above 1","compliance review"],["Messages a person a month","more than 4","hold further sends"]],{hh:26,rh:26,name:"guardrails"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
