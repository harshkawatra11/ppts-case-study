{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,4,"5 / 8","COLLEGE SELECTION",380,V.f6,"Source: college_scorecard.csv, institute NIRF and placement reports first, Oct 2026 | model "+V.hash+", T8 and T9, 2,000 draws, seed 20261009 | F2 relaxed 5 to 4 under rule 4.6");
const gp=panel(s,64,316,1180,714,"TEN COLLEGES CLEAR THE SCREEN; FOUR EXISTING CAMPUSES CALIBRATE IT");
const rows=V.grid.concat(V.cal);
grid(gp,16,60,rows.map(r=>r[0]),["C1","C2","C3","C4","C5","C6","C7","Fit","Stab."],rows.map(r=>r[1].map(v=>hcell(v)).concat([{t:r[2],f:C.white},{t:r[3],f:C.white}])),{labelW:270,cellW:84,rowH:38,headH:44,name:"TABLE: scorecard"});
addRect(gp,16,60+44+V.grid.length*38-2,1026,4,C.primary);
TL(gp,1052,68,22,"STATUS",{color:C.primaryDeep,maxW:112});
rows.forEach((r,i)=>{ const pk=r[4].indexOf("PICK")===0, f=addFrame(gp,1052,60+44+i*38+3,112,32,pk?C.primary:(r[4]==="LIVE"?C.tint:(r[4]==="BENCH"?C.accentTint:C.surface)),C.ink,1.5,"CHIP");
  addText(f,"Poppins","Bold",22,pk?C.white:C.ink,r[4],2,0,108,32,"CENTER","CENTER"); });
fine(gp,16,642,1148,"C1 recruiters, C2 non-tech offers, C3 batch, C4 societies, C5 prep gap, C6 calendar, C7 access, each scored 1 to 5");
callout(gp,16,670,1148,36,"Fit = ","0.25 C1 + 0.15 C2 + 0.15 C3 + 0.15 C4 + 0.10 C5 + 0.10 C6 + 0.10 C7, maximum 5.00",{py:4});
const sp=panel(s,1260,316,596,380,"THE SCREEN");
stepFunnel(sp,16,60,564,[{t:V.screen[0]+" colleges scored"},{t:V.screen[1]+" pass F1: 600+ graduates"},{t:V.screen[2]+" pass F2: 4+ anchors",tc:C.ink},{t:V.screen[3]+" picks",tc:C.ink}],{tierH:50,minW:300,size:22});
T(sp,16,292,564,22,"IITs pass but lose on calendar: their next season is 11 months after 15 January, so C6 scores 1.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const cc=layered(s,1260,712,596,311,C.primaryDeep,"CARD: conclusively");
TL(cc,20,12,26,"CONCLUSIVELY: FIT, NOT FAME",{color:C.accent,maxW:556});
bl(cc,20,58,556,[["BITS Pilani "+V.grid[0][2]+": ","its own 2024-25 report names Bain, Kearney, ZS, Deloitte USI, EY."],
 ["NIT Tiruchirappalli 2.65: ","no casebook, no rival prep, 1,029 graduates."],["PEC Chandigarh 2.40: ","ZS, JP Morgan Chase, Amex in PEC's own report."],
 ["COEP Pune 2.40: ","741 graduates (NIRF), five anchors, the West pick."]],{color:C.white,leadColor:C.accent,dot:C.accent,gap:6});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
