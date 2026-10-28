{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 8","DIAGNOSIS",300,V.f3,"Source: case brief B05, B10 to B13 | beyondtech.org.in, Oct 2026 (W06 to W11) | DTU NIRF 2025 | branch packages: Getmyuni, 2025 season | research 6.2, 8.2, 9 | model "+V.hash+", T1, T2, T11, T13");
// ---- BAND 1: WHO IS REACHED ----
rail(s,64,316,380,"WHO IS REACHED",C.primaryDeep);
const za=zone(s,116,316,600,380,"funnel");
TL(za,0,0,24,"About "+V.pen+" of the non-tech pool enrols today",{color:C.primaryDeep,maxW:600});
stepFunnel(za,0,46,400,[{t:V.tam+" in years 2 to 4"},{t:V.sam+" open to non-tech"},{t:V.now+" enrolled ("+V.pen+")",tc:C.ink},{t:"50+ selections",tc:C.ink}],{tierH:50,gap:10,minW:250,size:22});
[[V.open_pct+" of them",387],[V.pen+" of pool",362],[V.sel_pct+" selected",337]].forEach((f,i)=>{ const y=101+i*60;
  addWireH(za,f[1]+6,416,y,C.ink,2); addEllipse(za,f[1],y-5,10,10,C.primary,C.ink,1.5); TL(za,422,y-17,22,f[0],{color:C.primary,maxW:178}); });
fine(za,0,284,600,"Bear to bull: pool "+V.sam3[0]+" to "+V.sam3[2]+", enrolled "+V.now3[0]+" to "+V.now3[2]+", share "+V.pen3[0]+" to "+V.pen3[2]+" (T1, T2). Enrolled is an estimate: 50+ selections at an assumed "+V.sel_pct+" selection rate (A29).");
TL(za,0,350,22,"The brief calls DTU recall strong (B11).",{family:"Inter",style:"Bold",color:C.primary,maxW:600});
dashedV(s,732,324,364,C.ink,2);
const zb=zone(s,748,316,618,380,"intent heat map");
lead(zb,0,0,618,"Referral reaches fourth years in season and misses the earlier years");
const L=1,M=3,H=5, hm=[[L,M,L,L],[M,H,M,H],[H,M,L,H],[M,H,M,H]], hc=v=>({t:v===H?"High":(v===M?"Med.":"Low"),f:HG[v],tc:v>=4?C.white:C.ink});
const g=grid(zb,0,78,["Second year","Third year","Fourth year","Off-campus"],["Oct-Dec","Jan-Mar","Apr-Jun","Jul-Sep"],hm.map(r=>r.map(hc)),{labelW:170,cellW:112,rowH:42,headH:44,corner:"Intent",name:"TABLE: intent"});
[[2,0,1],[2,3,1],[1,3,0]].forEach(d=>addEllipse(g,170+112*d[1]+86,44+42*d[0]+10,22,22,d[2]?C.primaryDeep:C.white,d[2]?C.white:C.primaryDeep,d[2]?2.5:4));
addEllipse(zb,0,301,22,22,C.primaryDeep,C.white,2.5); TL(zb,30,298,22,"reached by referral today",{family:"Inter",style:"Bold"});
addEllipse(zb,340,301,22,22,C.white,C.primaryDeep,4); TL(zb,370,298,22,"reached in part",{family:"Inter",style:"Bold"});
fine(zb,0,332,618,"Every cell is an estimate from four calendar anchors (research 6.2, 6.3). Second-year share of enrolments today: 0% (T13).");
dashedV(s,1382,324,364,C.ink,2);
const zc=zone(s,1398,316,458,380,"branch gap");
lead(zc,0,0,458,"Every circuital branch out-earns every other branch");
hBars(zc,0,76,458,[["Computer",19.85,1],["Software",18.46,1],["IT",16.62,1],["ECE",15.82,1],["Electrical",12.89,0],["Biotech",11,0],["Mechanical",9.58,0],["Civil",9.2,0]].map(b=>({label:b[0],value:b[1],text:b[1].toFixed(2),color:b[2]?C.primary:C.primaryDeep})),{labelW:140,rowH:32,barH:20,valueW:72,max:19.85});
fine(zc,0,336,458,"Average package, ₹ LPA, 2025 season, Getmyuni (aggregator-reported). Orange: circuital branches.");
// ---- BAND 2: WHERE IT LEAKS (five-stage purchase path, one leak per stage, then the seed card) ----
dashedH(s,64,705,1792,C.ink,2);
rail(s,64,716,314,"WHERE IT LEAKS",C.primary);
const zj=zone(s,116,716,1400,314,"path");
TL(zj,0,0,24,"Between hearing and paying, the path leaks at five points",{color:C.primaryDeep,maxW:1400});
[["Hears of it","Referral skips most",V.ref+" by referral","Proof moves through placed seniors, so other branches and earlier years rarely see it."],
 ["Free resources","No net at the top","8 of 8 links open","Eight free PDFs and the sampler are open links that capture no name or number."],
 ["WhatsApp chat","One chat at a time",V.hours[0]+" hours a year","Every enquiry goes to one WhatsApp number, and the founder answers each one."],
 ["Fit interview","Price behind a gate","no fee shown","Application, review and a fit interview come before any fee is shown."],
 ["Pays and enrols","No early-year entry","0% second years","Nothing is built for second or third years before the 15 January batch."]]
.forEach((k,i)=>{ const x=i*284, f=addFrame(zj,x,44,240,52,i===4?C.primary:C.primaryDeep,C.ink,2,"STAGE "+(i+1));
  addText(f,"Poppins","Bold",22,C.white,k[0],6,0,228,52,"CENTER","CENTER"); if(i<4) arrow(zj,x+246,70,x+278,70,C.ink,3);
  addRect(zj,x+16.5,96,3,48,C.alert); TL(zj,x+28,104,22,k[1],{color:C.primaryDeep,maxW:236});
  addBadge(zj,x,144,36,i+1,C.alert,C.white);
  const ch=addFrame(zj,x+44,144,220,36,i===0||i===3?C.surface:C.alertTint,C.ink,1.5,"CHIP"); addText(ch,"Inter","Bold",22,C.ink,k[2],4,0,212,36,"CENTER","CENTER");
  T(zj,x,190,264,22,k[3]); });
const c=layered(s,1548,716,301,307,C.primaryDeep,"CARD: seed");
TL(c,18,10,22,"THE GAP THIS LEAVES",{color:C.accent,maxW:265});
T(c,18,50,265,22,"Proof of 50+ selections travels only as far as the seniors who earned it. No channel yet carries it to earlier years, other branches or other campuses.",{color:C.white});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
