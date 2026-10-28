{ const s = await figma.getNodeByIdAsync("S7");
skelBT(s,5,"6 / 8","PAN-INDIA LAUNCH",360,V.f7,"Source: pick dossiers R-E | Cialdini 1984; Moore 1991; Rogers 1962; Granovetter 1973 | LinkedIn reactions W13, W14 | Business Today, 20 Jan 2025 | model "+V.hash+", T10");
const mp=panel(s,64,316,760,714,"WHERE: FOUR PICKS, FOUR CAMPUSES TODAY");
const MX=16,MY=60,MW=420,MH=436;
mapDots(mp,MX,MY,MW,MH,V.map,36,HG[2]);
[[28.68,77.08],[30.3564,76.3625],[23.4167,85.4403]].forEach(q=>{ const g=geo(MX,MY,MW,MH,q[0],q[1]); addRect(mp,g[0]-8,g[1]-8,16,16,C.primaryDeep,C.ink,1.5); });
const P=[[3,30.7667,76.7833,"PEC Chandigarh","Season 2","EIC, PEC"],[1,28.3639,75.587,"BITS Pilani","Season 1","180DC chapter"],
 [4,18.5306,73.8568,"COEP Pune","Season 2","Consulting Club"],[2,10.762,78.816,"NIT Tiruchirappalli","Season 1","BFC umbrella"]];
const FIT={1:V.grid[0][2]}; V.grid.filter(r=>r[4].indexOf("PICK")===0).forEach(r=>{ FIT[parseInt(r[4].slice(5),10)]=r[2]; });
P.forEach((p,i)=>{ const g=geo(MX,MY,MW,MH,p[1],p[2]), cy=60+i*112+50; addDiagonalWire(mp,g[0],g[1],452,cy,C.primary,2); });
P.forEach((p,i)=>{ const g=geo(MX,MY,MW,MH,p[1],p[2]), y=60+i*112; pin(mp,g[0],g[1],30,String(p[0]),C.primary,C.white); pin(mp,452,y+50,24,"",C.primary);
  const f=addFrame(mp,468,y,276,100,C.white,C.ink,2,"CITY "+p[0]);
  TL(f,12,6,22,p[3],{color:C.primaryDeep,maxW:252}); TL(f,12,40,22,p[0]+": Fit "+FIT[p[0]]+", "+p[4],{family:"Inter",style:"Bold",maxW:252}); TL(f,12,68,22,"Host: "+p[5],{family:"Inter",style:"Semi Bold",maxW:252}); });
addRect(mp,16,514,16,16,C.primaryDeep,C.ink,1.5); TL(mp,42,508,22,"Today: DTU, NSUT, Thapar, BIT Mesra",{family:"Inter",style:"Bold",maxW:700});
addEllipse(mp,16,544,16,16,C.primary,C.ink,1.5); TL(mp,42,538,22,"Picks 1 to 4, numbered by Fit; two in each season",{family:"Inter",style:"Bold",maxW:700});
fine(mp,16,572,728,"Dot map from district boundaries; full Jammu and Kashmir and Ladakh, north up.");
T(mp,16,604,728,22,"“You don't look at an ad and decide to invest in stocks... It's always a friend or family member who influences you.” Nithin Kamath, Zerodha, Business Today, 20 Jan 2025",{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
const tp=panel(s,840,316,1016,714,"HOW: TRUST IN FOUR STEPS, CUSTOMERS BEFORE AMBASSADORS");
const BASE=384, PW=236, H=[230,260,290,320];
[["1 BORROW","A case competition co-branded with the campus consulting society","Social proof, Cialdini"],["2 SEED","A founding cohort of "+V.cohort20+" at 40% off the fee","Beachhead, Moore"],
 ["3 EARN","Their offers become named, consented local proof","Observability, Rogers"],["4 HAND OVER","Ambassadors only from the cohort, paid per enrolment","Weak ties, Granovetter"]]
.forEach((st,i)=>{ const x=16+i*(PW+12), h=H[i], dk=i===3, f=addFrame(tp,x,BASE-h,PW,h,dk?C.primaryDeep:C.white,C.ink,2,"STEP "+(i+1));
  const hd=addFrame(f,0,0,PW,44,dk?C.accent:C.primary,C.ink,2,"HEAD"); TL(hd,12,6,22,st[0],{color:dk?C.ink:C.white,maxW:PW-24});
  const b=T(f,12,54,PW-24,22,st[1],{color:dk?C.white:C.ink}); T(f,12,54+b.height+8,PW-24,22,st[2],{family:"Inter",style:"Bold",color:dk?C.accent:C.primary}); });
const bb=addFrame(tp,16,BASE,980,40,C.primaryDeep,C.ink,2,"BASE");
["Days 1 to 30","Days 31 to 60","Days 61 to 90","Season 2"].forEach((l,i)=>addText(bb,"Inter","Bold",22,C.white,l,i*(PW+12),0,PW,40,"CENTER","CENTER"));
wrapTable(tp,16,436,[214,200,316,164,86],["Pick","Host","Anchor recruiters","Season","Seats"],[
 ["BITS Pilani","180DC BITS Pilani","Bain, Kearney, ZS, Deloitte USI, EY","1, Jan 2027",V.cohort20],
 ["NIT Tiruchirappalli","180DC and ProfNITT","JP Morgan Chase, PwC, Deloitte, Eternal","1, Jan 2027",V.cohort20],
 ["PEC Chandigarh","EIC, PEC","ZS, JP Morgan Chase, American Express","2, summer 2027",V.cohort20],
 ["COEP Pune","Consulting Club","EY, Flipkart, KPMG, Deloitte, PwC","2, summer 2027",V.cohort20]],{rowH:56,headerH:40,name:"picks"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
