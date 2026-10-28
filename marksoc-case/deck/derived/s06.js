{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,4,"5 / 8","THE OPTIONS",260,"We ran all "+V.n_plans+" plans the options allow: "+V.n_ok+" pass the board's four tests, and only certify, battery and a February shift ends Q1 within ₹0.5 lakh of doing nothing",
  "Source: case Exhibit 6 and page 7 | team model "+V.hash+" (T12 to T14) | test 4 needs B1 because a battery claim needs Tikau's own lab reading (Exhibit 5)");
const RL=["Do nothing","Rohan: price push (A)","Rohan with a shift","Kabir: B1 + B2, no shift","Stores: trade in (C)","B2 + shift, no report","All: B1, B2, C, shift","B1 + B2 + C, no shift","Ours: B1 + B2, Feb shift"];
const p=pnl(s,64,310,1110,470,"EACH CAMP'S PLAN AGAINST THE FOUR BOARD TESTS");
const nc=v=>({t:v,f:v.startsWith("−")?C.alertTint:C.goodTint,tc:v.startsWith("−")?C.alert:C.good});
const gridNode=hgrid(p,14,48,RL,["Growth money","Mar EBITDA","Q1 vs nothing","Mar returns","Test 1","Test 2","Test 3","Test 4"],
  V.t14.map(r=>[{t:r[2]},nc(r[3]),nc(r[4]),{t:r[5],f:parseFloat(r[5])>6?C.alertTint:C.goodTint}].concat(r[6].map(b=>ynCell(b?"Pass":"Fail")))),{lw:300,cw:97,rh:36,hh:50,name:"camps"});
addRect(gridNode,0,50+36*8,6,36,C.accent);
sT(p,14,428,1082,18,"Test 1: money up to ₹80 lakh. Test 2: March EBITDA ₹0 or more. Test 3: returns up to 6.0%. Test 4: Exhibit 5.",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const g=pnl(s,1190,310,666,470,"84 PLANS: MARCH EBITDA AND GROWTH MONEY");
const L=70,R=640,T0=62,B0=392, X=v=>L+(R-L)*v/150, Y=v=>T0+(B0-T0)*(40-v)/120;
addRect(g,L,B0,R-L,2,C.ink); addRect(g,L,T0,2,B0-T0,C.ink);
[0,50,100,150].forEach(v=>sTL(g,0,B0+4,18,String(v),{family:"Inter",style:"Bold",centerAt:Math.min(X(v),R-20)}));
[-80,-40,0,40].forEach(v=>sTL(g,0,Y(v)-11,18,String(v),{family:"Inter",style:"Bold",rightAt:L-6}));
dashedV(g,X(80),T0,B0-T0,C.alert,2); dashedH(g,L,Y(0),R-L,C.alert,2);
sTL(g,X(80)+6,T0+2,18,"₹80 lakh",{family:"Inter",style:"Bold",color:C.alert}); sTL(g,R-112,Y(0)+6,18,"EBITDA ₹0",{family:"Inter",style:"Bold",color:C.alert});
V.scatter.filter(q=>!q[2]).forEach(q=>addEllipse(g,X(q[1])-5,Y(q[0])-5,10,10,HG[2],C.ink,1));
V.scatter.filter(q=>q[2]).forEach(q=>addEllipse(g,X(q[1])-8,Y(q[0])-8,16,16,C.primary,C.ink,1.5));
const our=V.scatter_ours; addEllipse(g,X(our[1])-13,Y(our[0])-13,26,26,C.accent,C.ink,2);
sTL(g,X(our[1])-70,Y(our[0])-40,18,"Ours",{family:"Poppins",style:"Bold",color:C.primaryDeep});
sTL(g,14,B0+26,18,"x: growth money, ₹ lakh. y: March EBITDA, ₹ lakh.",{family:"Inter",style:"Semi Bold"});
let lx=14; lx=lgS(g,lx,444,HG[2],"Fails a test"); lx=lgS(g,lx,444,C.primary,"Passes all four"); lgS(g,lx,444,C.accent,"Our plan");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const k=layered(s,64,796,800,236,C.primaryDeep,"CARD: conclusively");
TL(k,16,8,22,"CONCLUSIVELY: THE OBVIOUS ANSWERS FAIL",{color:C.accent,maxW:768});
const CT=[["Price push (A)","Fair falls to ₹416; March "+V.roh_mar,"Fails tests 2 to 4"],
  ["Certify, no shift",V.lost_noshift+" orders a month miss the lab","Fails test 2 ("+V.kab_mar+")"],
  ["Trade in now (C)","needs ₹"+V.all_gm+" lakh with B1, B2, shift","Fails test 1"]];
tbl(k,16,46,[180,400,196],["Rejected plan","The number that kills it","Verdict"],CT,{hh:26,rh:46,name:"conclusively table",align:["LEFT","LEFT","LEFT"],bold:[0,2]});
const t=pnl(s,880,796,976,236,"THE FIVE PLANS THAT PASS, ₹ LAKH");
tbl(t,14,46,[330,150,150,180,138],["Plan","Growth money","Mar EBITDA","Q1 vs nothing","Mar returns"],V.feas,{hh:26,rh:28,name:"pass",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[C.accentTint,null,null,null,null]});
sT(t,14,214,948,18,"The next best plan ends Q1 ₹"+V.gap2+" lakh lower.",{family:"Inter",style:"Bold",color:C.primaryDeep});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
