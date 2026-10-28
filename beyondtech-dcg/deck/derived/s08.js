{ const s = await figma.getNodeByIdAsync("S8");
skelBT(s,6,"7 / 8","LAUNCH PLAYBOOK",360,V.f8,"Source: model "+V.hash+", tables T10, T13, T14 | research sections 17 to 20 | precedents: Coding Ninjas, Internshala Student Partner, RiseUpp (R-G) | A14 to A21 are assumptions");
const gp=panel(s,64,316,760,714,"THE FIRST 90 DAYS ON ONE NEW CAMPUS");
gantt(gp,16,64,228,82,46,["D1","D16","D31","D46","D61","D76"],[
 {label:"Society outreach",s:0,e:1,text:"borrow",color:C.primary},{label:"Case competition",s:1,e:2,text:"run it",color:C.primary},
 {label:"Applications",s:2,e:3,text:"seed",color:C.primaryDeep},{label:"Fit interviews",s:3,e:4,text:"founder",color:C.primaryDeep},
 {label:"Mentoring, mocks",s:3,e:5,text:"earn",color:C.good},{label:"Ambassador kit",s:4,e:5,text:"prepare",color:C.accent,tc:C.ink}]);
[[408,"Day 30"],[572,"Day 60"],[736,"Day 90"]].forEach((g,i)=>{ dashedV(gp,g[0],100,288,C.alert,2.5); diamond(gp,g[0],402,12,C.alert);
  TL(gp,0,418,22,g[1],{family:"Inter",style:"Bold",color:C.alert,centerAt:i<2?g[0]:undefined,rightAt:i===2?744:undefined}); });
addTable(gp,16,452,[150,250,160,168],["Gate","Metric","Stop below","Scale above"],V.t14,{rowH:44,headerH:44});
callout(gp,16,640,728,64,"Below a gate: ","stop new spend on that campus; the enrolled cohort still finishes.");
const fp=panel(s,840,316,500,714,"THE FLYWHEEL: CUSTOMERS FIRST");
arrow(fp,350,112,399,232); arrow(fp,399,336,350,464); arrow(fp,150,468,101,336); arrow(fp,101,232,150,116);
[[150,64,200,"Competition","150 sign-ups, A06"],[314,236,170,"Cohort",V.cohort20+" seats, 40% off"],[150,420,200,"Offers","40% selected, A19"],[16,236,170,"Ambassadors",V.amb+" per campus"]]
.forEach(c=>{ const f=addFrame(fp,c[0],c[1],c[2],96,C.white,C.ink,2,"NODE "+c[3]); T(f,10,4,c[2]-20,22,c[3],{family:"Poppins",style:"Bold",color:C.primaryDeep}); T(f,10,40,c[2]-20,22,c[4]); });
addEllipse(fp,200,234,100,100,C.primaryDeep,C.ink,2.5);
addText(fp,"Poppins","ExtraBold",34,C.white,V.enrol2,200,240,100,54,"CENTER","CENTER"); addText(fp,"Inter","Bold",22,C.accent,"season 2",200,294,100,30,"CENTER","CENTER");
TL(fp,380,160,22,"apply",{family:"Inter",style:"Bold",color:C.primary}); TL(fp,380,388,22,"place",{family:"Inter",style:"Bold",color:C.primary});
TL(fp,0,388,22,"recruit",{family:"Inter",style:"Bold",color:C.primary,rightAt:118}); TL(fp,0,160,22,"refer",{family:"Inter",style:"Bold",color:C.primary,rightAt:118});
addTable(fp,16,532,[168,100,100,100],["Lever","Bear","Base","Bull"],V.ladder,{rowH:40,headerH:40});
const pp=panel(s,1356,316,500,714,"ONE CAMPUS, TWO SEASONS");
wrapTable(pp,16,60,[132,112,112,112],["Measure","Bear","Base","Bull"],V.t10t,{rowH:54,headerH:40,name:"pnl"});
TL(pp,16,484,22,"CUMULATIVE CASH, ₹ LAKH",{color:C.primaryDeep,maxW:468});
lineChart(pp,16,516,468,196,[{values:V.cash_line[0],color:C.alert,label:"Bear"},{values:V.cash_line[1],color:C.primary,label:"Base"}],["Start","Season 1","Season 2"],{yMin:-1,yMax:9,yTicks:[0,4,8],padL:60,padR:80});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
