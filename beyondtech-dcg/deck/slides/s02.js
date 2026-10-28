{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 8","EXECUTIVE SUMMARY",380,V.f2,"Source: case brief B02 to B19 | beyondtech.org.in and LinkedIn, Oct 2026 (W13, W14) | college_scorecard.csv | model "+V.hash+", tables T3, T4, T8, T9, T10, T11, T12 | the fee (A01) is an assumption");
// ===== 1. GOVERNING THOUGHT: the answer, stated once, above everything =====
const a=layered(s,64,316,1792,76,C.primaryDeep,"CARD: answer");
TL(a,20,20,24,"OUR ANSWER",{color:C.accent});
T(a,220,11,1550,22,"Distribute proof, not awareness. BeyondTech's 50+ selections already sell the course; the plan carries that proof to earlier years at DTU and to four new Tier-1 campuses.",{family:"Inter",style:"Bold",color:C.white});
// ===== 2. STORYLINE MATRIX: the brief's three scored questions, one row each =====
const CX=[116,381,746,1151,1596], R=[444,570,696], RH=126;
[["THE BRIEF ASKS",C.primaryDeep],["THE OBVIOUS MOVE",C.alert],["WHAT WE RECOMMEND",C.good],["THE PROOF",C.primaryDeep],["THE RESULT",C.primaryDeep]]
.forEach((h,i)=>TL(s,CX[i],402,22,h[0],{color:h[1]}));
addRect(s,116,436,1740,2.5,C.ink);
// issue-tree spine from the answer to each question
addRect(s,83,400,3,R[2]+20-400,C.ink);
R.forEach(y=>addRect(s,84,y+18.5,32,3,C.ink));
[R[0]+RH-4,R[1]+RH-4].forEach(y=>dashedH(s,116,y,1740,C.ink,1.5));
const mark=(x,y,ok)=>{ addEllipse(s,x,y,28,28,ok?C.good:C.alert,C.ink,1.5);
  if(ok){ addDiagonalWire(s,x+7,y+14,x+12,y+20,C.white,3); addDiagonalWire(s,x+12,y+20,x+21,y+8,C.white,3); }
  else { addDiagonalWire(s,x+8,y+8,x+20,y+20,C.white,3); addDiagonalWire(s,x+20,y+8,x+8,y+20,C.white,3); } };
const row=(i,q,w,ref,no,noT,yes,yesT,num,lab)=>{ const y=R[i];
  addBadge(s,116,y+2,36,i+1,C.primaryDeep,C.white);
  const qt=T(s,162,y,204,22,q,{family:"Poppins",style:"Bold",color:C.primaryDeep});
  TL(s,162,y+qt.height+2,22,w+" of the score",{family:"Inter",style:"Bold",color:C.primary,maxW:204});
  TL(s,162,y+qt.height+31,22,ref,{family:"Inter",style:"Semi Bold",maxW:204});
  mark(CX[1],y+3,false); const nt=TL(s,CX[1]+38,y,22,no,{color:C.alert,maxW:312}); nt.textDecoration="STRIKETHROUGH";
  T(s,CX[1],y+38,350,22,noT);
  mark(CX[2],y+3,true); TL(s,CX[2]+38,y,22,yes,{color:C.good,maxW:352});
  T(s,CX[2],y+38,390,22,yesT);
  TL(s,CX[4],y-6,44,num,{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:260,min:30});
  T(s,CX[4],y+62,260,22,lab,{family:"Inter",style:"Bold"}); };
row(0,"GROW DTU","30%","Slides 3 to 5","Buy awareness with ads",
 "Cold Meta costs "+V.cold[0]+" per enrolment, more than the "+V.fee+" fee.",
 "Cheapest channels first",
 "Gate the 8 free PDFs, run society workshops, retarget only warm leads; 2 paid channels get ₹0.",
 V.enrol,"enrolments at "+V.cac+" each, up from "+V.now);
row(1,"PICK CAMPUSES","25%","Slide 6","Enter the IITs",
 "Their next season is 11 months away, so they score 1 of 5 on calendar.",
 "Follow the recruiters",
 "Seven weighted criteria, led by overlap with the 20 firms that hire BeyondTech students.",
 V.screen[3]+" of "+V.screen[0],"picks, stable in "+V.stab_min+" or more of 2,000 draws");
row(2,"ENTER CAMPUSES","25%","Slides 7 and 8","Hire ambassadors first",
 "Cold ambassador posts drew "+V.posts[2][1]+" and "+V.posts[3][1]+" reactions; the intern post drew "+V.posts[0][1]+".",
 "Borrow trust, then earn it",
 "Co-host a society case competition, seed "+V.cohort20+" at 40% off, pick ambassadors only from them.",
 V.cost1,"opens a campus, cash positive in season 1");
// proof 1: cash share against enrolment share (100% bars)
TL(s,CX[3],R[0],22,"Organic share of the DTU plan",{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:430});
[["Cash",V.split[0],V.split[1]],["Enrol.",V.split[2],V.split[3]]].forEach((b,j)=>{ const y=R[0]+38+j*42;
  TL(s,CX[3],y+3,22,b[0],{family:"Inter",style:"Bold"});
  segBar(s,CX[3]+84,y,346,34,[{v:b[1],c:C.primary,t:Math.round(b[1])+"%"},{v:b[2],c:C.primaryDeep,t:Math.round(b[2])+"%"}]); });
// proof 2: the screen, 28 colleges to 4 (bar length against the 28 scored)
TL(s,CX[3],R[1],22,"Screened from "+V.screen[0]+" colleges",{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:430});
[[V.screen[1],"with 600+ graduates",HG[3]],[V.screen[2],"with 4+ anchor firms",HG[4]],[V.screen[3],"picks",C.primary]].forEach((b,j)=>{ const y=R[1]+34+j*30, w=Math.max(12,150*b[0]/V.screen[0]);
  addRect(s,CX[3],y+4,150,22,C.surfaceAlt,C.ink,1);
  addRect(s,CX[3],y+4,w,22,b[2],C.ink,1.5);
  TL(s,CX[3]+162,y,22,b[0]+" "+b[1],{family:"Inter",style:"Bold",color:j===2?C.primary:C.ink,maxW:268}); });
// proof 3: cumulative cash per new campus, base against bear
TL(s,CX[3],R[2],22,"Cash per campus, ₹ lakh",{family:"Inter",style:"Bold",color:C.primaryDeep});
lineChart(s,CX[3],R[2]+24,430,104,[{values:V.cash_line[0],color:C.alert,label:"Bear"},{values:V.cash_line[1],color:C.primary,label:"Base"}],["Start","Season 1","Season 2"],{yMin:-1,yMax:9,yTicks:[0,8],padL:44,padR:84});
// ===== 3. IN TOTAL: twelve months, DTU plus four campuses =====
dashedH(s,64,826,1792,C.ink,2);
rail(s,64,836,194,"IN TOTAL",C.primary);
const z1=zone(s,116,836,500,194,"bridge");
TL(z1,0,0,24,V.now+" to "+V.total_enrol+" enrolments in a year",{color:C.primaryDeep,maxW:500});
waterfall(z1,0,24,500,170,[["a",V.bridge[0]],["b",V.bridge[1]],["c",V.bridge[2]],["d",V.bridge[3]]],{min:0,max:270,dp:0,labelH:34,labelDy:4,labels:["Today","DTU plan","New sites","Month 12"]});
dashedV(s,624,844,180,C.ink,2);
const z2=zone(s,632,836,640,194,"twelve months");
TL(z2,0,0,24,V.total_spend+" over twelve months, three cases",{color:C.primaryDeep,maxW:640});
wrapTable(z2,0,40,[164,158,158,158],["12 months","Bear","Base","Bull"],[["Enrolments"].concat(V.t12.map(r=>r[1])),["Spend"].concat(V.t12.map(r=>r[2])),["Contribution"].concat(V.t12.map(r=>r[3]))],{rowH:32,headerH:34,colors:[C.ink,C.alert,C.primaryDeep,C.good],name:"twelve months"});
fine(z2,0,174,640,"Bear is a stress case, not a budget (T6, T12).");
dashedV(s,1280,844,180,C.ink,2);
const z3=zone(s,1288,836,284,194,"founder hours");
TL(z3,0,0,24,"Fewer founder hours",{color:C.primaryDeep,maxW:284});
hBars(z3,0,40,284,[{label:"Today",value:V.hours[0],text:String(V.hours[0]),color:C.alert},{label:"After plan",value:V.hours[3],text:String(V.hours[3]),color:C.good}],{labelW:120,rowH:40,barH:26,valueW:52,max:V.hours[0]});
fine(z3,0,128,284,"Hours a year, of "+V.cap+" available (T11). Four more campuses, fewer hours.");
const c=layered(s,1579,836,270,187,C.primaryDeep,"CARD: first step");
TL(c,16,10,22,"THE FIRST STEP",{color:C.accent,maxW:238});
T(c,16,48,238,22,"By 31 October 2026: gate the 8 PDFs, publish a fee band, sign DCG and 180DC DTU.",{family:"Inter",style:"Bold",color:C.white});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
