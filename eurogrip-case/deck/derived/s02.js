{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,-1,"CASE 4","EXECUTIVE SUMMARY",380,V.h2,V.src2,{labels:RIBN});
rail(s,64,312,232,"DIAGNOSIS",C.primaryDeep); rail(s,64,556,232,"PROGRAMME",C.primary); rail(s,64,800,232,"DELIVERY",C.alert);
// P1: mind map of the universe
const p1=panel(s,120,312,660,232,"WHO NAMES THE TYRE: "+V.univ+" LAKH SHOPS");
const r0=addFrame(p1,16,58,628,40,C.primaryDeep,C.ink,2,"NODE root");
addText(r0,"Inter","Bold",22,C.white,V.univ+" lakh outlets name the tyre: bear "+V.univ3[0]+", bull "+V.univ3[2],0,0,628,40,"CENTER","CENTER");
addRect(p1,329,98,2.5,10,C.ink); addRect(p1,116,106,430,2.5,C.ink);
const SF=[C.primaryDeep,C.primary,C.accent], SFT=[C.white,C.white,C.ink], SN=[C.primaryDeep,C.primary,C.ink];
V.seg2.forEach((g,i)=>{ const cx=16+i*214; addRect(p1,cx+99,106,2.5,10,C.ink);
  const f=addFrame(p1,cx,116,200,108,C.white,C.ink,2,"NODE "+g.head);
  const hd=addFrame(f,0,0,200,34,SF[i],C.ink,2,"HEAD"); addText(hd,"Poppins","Bold",22,SFT[i],g.head,0,0,200,34,"CENTER","CENTER");
  TL(f,10,34,30,g.num,{family:"Poppins",style:"ExtraBold",color:SN[i],maxW:130,min:24});
  TL(f,0,42,22,g.share,{family:"Poppins",style:"Bold",rightAt:190});
  TL(f,10,78,22,g.need,{family:"Inter",style:"Bold",maxW:180}); });
// P2: the brief's insights, each answered by a design move
const p2=panel(s,796,312,470,232,"FOUR INSIGHTS, FOUR MOVES");
ct(p2,16,58,[244,194],["The brief says","So we"],V.ins.map(r=>[r[0],{t:r[1],f:C.goodTint}]),{name:"insights"});
// P3: the obvious play, struck through, as a heat comparison
const p3=nm(panel(s,1282,312,574,232,""),"PANEL: obvious play");
const t3=TL(p3,16,10,24,"THE OBVIOUS PLAY: CASH PER TYRE",{color:C.alert,maxW:542}); addRect(p3,16,50,542,2,C.ink);
addRect(p3,16,t3.y+t3.height/2-1.5,t3.width,3,C.alert);
ct(p3,16,58,[156,193,193],["Test","Cash a tyre","Our design"],V.cmp.map(r=>[r[0],{t:r[1],f:C.alertTint},{t:r[2],f:C.goodTint}]),{name:"obvious"});
// P4: tiers with model-derived cost a member a year
const p4=panel(s,120,556,760,232,"THREE TIERS: GETS, COSTS AND RETURNS");
ct(p4,16,58,[96,256,138,138,100],["Tier","Gets, in kind","Referrals","₹ a year","Mix"],V.tierrows,{name:"tiers",al:["LEFT","LEFT","LEFT","RIGHT","RIGHT"]});
T(p4,16,190,728,22,V.repay,{family:"Inter",style:"Bold",color:C.primary});
// P5: the moneyshot
const m=layered(s,896,556,404,232,C.white,"CARD: MONEYSHOT",C.alert); m.strokes=[{type:"SOLID",color:C.alert}]; m.strokeWeight=3;
const big=TL(m,16,-4,80,V.be,{family:"Poppins",style:"ExtraBold",color:C.alert}); const bx=16+big.width+12;
TL(m,bx,10,28,"EXTRA TYRES",{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:388-bx,min:22});
TL(m,bx,50,22,"a shop a year,",{family:"Inter",style:"Bold",maxW:388-bx});
TL(m,bx,78,22,"one per "+V.weeks+" weeks",{family:"Inter",style:"Bold",maxW:388-bx});
const BX=84, SP=228, KC=[C.alert,C.primary,C.primaryDeep];
["Bear","Base","Bull"].forEach((l,i)=>{ const ry=118+i*30; TL(m,16,ry,22,l,{family:"Inter",style:"Bold"});
  const bw=Math.max(4,SP*V.bevals[i]/12); addRect(m,BX,ry+4,bw,20,KC[i],C.ink,1.5);
  if(i===0) TL(m,0,ry-3,22,V.be3[i],{family:"Poppins",style:"Bold",color:C.white,rightAt:BX+bw-6});
  else TL(m,BX+bw+6,ry-3,22,V.be3[i],{family:"Poppins",style:"Bold",color:KC[i]}); });
dashedV(m,BX+SP,112,94,C.ink,2.5);
fine(m,16,208,372,"Dashed line: stop if above 12 a year (kill line)");
// P6: the loop that turns a code into a credit
const p6=panel(s,1316,556,540,232,"ONE CODE, ONE CREDIT: THE LOOP");
const LN=[["Mechanic","advises"],["Rider","buys"],["Retailer","logs code"],["Mechanic","earns ₹60"]], NW=116, NG=14, NY=60, NH=60;
LN.forEach((n,i)=>{ const x=16+i*(NW+NG), dk=i===0, yl=i===3;
  const f=addFrame(p6,x,NY,NW,NH,dk?C.primaryDeep:(yl?C.accent:C.white),C.ink,2,"NODE "+i);
  addText(f,"Inter","Bold",22,dk?C.white:C.ink,n[0],2,2,NW-4,28,"CENTER","CENTER");
  addText(f,"Inter","Semi Bold",22,dk?C.accent:C.ink,n[1],2,30,NW-4,28,"CENTER","CENTER");
  if(i<3) arrow(p6,x+NW+1,NY+NH/2,x+NW+NG-1,NY+NH/2,C.ink,2.5); });
const c1=16+NW/2, c4=16+3*(NW+NG)+NW/2, RY=NY+NH+14;
addRect(p6,c4-1.25,NY+NH,2.5,RY-NY-NH,C.ink); addRect(p6,c1-1.25,RY-1.25,c4-c1+2.5,2.5,C.ink); arrow(p6,c1,RY,c1,NY+NH+2,C.ink,2.5);
TL(p6,0,RY+4,22,"logged in the "+V.app,{family:"Inter",style:"Bold",color:C.primary,centerAt:(c1+c4)/2,maxW:c4-c1-20});
bl(p6,16,170,508,[["Every 6 months: ","re-tiered on logged codes"],["Fraud: ","1 credit a tyre serial, IVR call-backs"]],{gap:4});
// P7: budget by line and scenario
const p7=panel(s,120,800,560,232,V.p7title);
const LC=[C.primaryDeep,C.primary,C.accent,C.alert,C.surface];
stackedCols(p7,16,58,236,166,["Bear","Base","Bull"],V.stack.map((sr,i)=>({values:sr,color:LC[i]})),{totals:V.stot,barW:54});
V.leg.forEach((l,i)=>{ const y=58+i*32; addRect(p7,268,y+6,18,18,LC[i],C.ink,1.5);
  TL(p7,294,y,22,l.label,{family:"Inter",style:"Bold",maxW:126});
  TL(p7,0,y-3,22,l.pct,{family:"Poppins",style:"Bold",rightAt:476});
  TL(p7,0,y,22,l.cr,{family:"Inter",style:"Bold",color:C.primary,rightAt:544}); });
// P8: member ramp with gates and phases
const p8=panel(s,696,800,600,232,V.p8title);
const RC=[C.primaryDeep,C.primaryDeep,C.primary,C.primary,C.alert,C.alert,C.alert,C.alert];
vBars(p8,16,58,568,140,V.ramp.map((r,i)=>({label:r.q,value:r.v,text:r.t,color:RC[i]})),{barW:40});
[[0,2,"2 states",C.primaryDeep],[2,4,"8 states",C.primary],[4,8,"all states, national",C.alert]].forEach(z=>{ const x0=16+568*z[0]/8, x1=16+568*z[1]/8;
  addRect(p8,x0,196,x1-x0,28,z[3],C.ink,1.5); TL(p8,0,196,22,z[2],{family:"Inter",style:"Bold",color:C.white,centerAt:(x0+x1)/2}); });
// P9: gates
const p9=panel(s,1312,800,544,232,"THE BAR TO SCALE, GATE BY GATE");
ct(p9,16,58,[82,90,340],["Gate","When","Pass if"],V.gates.map((r,i)=>i===3?r.map(c=>({t:c,f:C.alertTint})):r),{name:"gates"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
