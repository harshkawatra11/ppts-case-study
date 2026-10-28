{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 8","WHO TO WIN",260,"Win family buyers: they buy Good phones, which have no supply cap, and the battery and 12 month promise they ask for lifts a Good phone from "+V.c_G+" to "+V.cp_G,
  "Source: case Exhibit 1 (segments, reasons, offers), Exhibits 2, 4 and 6 | team model "+V.hash+" (T10, T11) | scores are team judgement on the case data named in each row");
const p=pnl(s,64,310,1000,390,"SEGMENT SCORECARD, 1 WEAK TO 5 STRONG");
hgrid(p,14,48,V.seg_rows.map(r=>r[0]),["Size","Margin","Headroom","Returns","Worry fit","Lever fit","Total"],
  V.seg_rows.map((r,i)=>r.slice(1,7).map(sc5).concat([{t:String(r[7]),f:i===2?C.accent:C.white,tc:C.ink}])),{lw:230,cw:104,rh:40,hh:30,name:"segments"});
sT(p,14,246,972,18,"Margin: contribution a phone after the plan. Headroom: Q1 supply left. Returns: grade return rate. Worry fit: share of their worry B1 and B2 fix. Lever fit: a passing option reaches them.",{family:"Inter",style:"Semi Bold"});
sT(p,14,300,972,18,"Family buyers: "+V.seg_basis["Family buyers"].join("; ")+".",{family:"Inter",style:"Bold",color:C.primaryDeep});
sT(p,14,350,972,18,"Flagship buyers still get all 2,000 Superb phones a month; our plan rations "+V.lost_S+" Superb orders.",{family:"Inter",style:"Semi Bold"});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const q=pnl(s,1080,310,776,390,"THE FAMILY BUYER");
imgSlot(q,14,52,220,220,"Parent with a phone a child bought");
tbl(q,250,52,[160,330],["Trait","Evidence"],[
  ["Who buys","21%, mostly Good phones"],
  ["Wants","to know who will fix it"],
  ["Top fear","Battery will not last, 46%"],
  ["Second fear","Condition unclear, 41%"],
  ["Buys at","Stores (1 in 3 buy) and referrals"]],{hh:26,rh:28,name:"persona"});
note(q,14,288,748,"In a customer's words: ","\"Phone theek hai, par bharosa nahi hua.\" The phone is fine, but I never came to trust it.",{});
const w=pnl(s,64,716,700,316,"ONE GOOD PHONE, TODAY TO OUR PLAN, ₹");
wfN(w,14,46,672,206,V.pw_G,{min:0,max:3500,dp:0,bw:56,lh:46});
note(w,14,262,672,"Fair goes the other way: ",V.c_F+" today, "+V.cp_F+" after the battery and the report. We do not chase value seekers.",{});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const z=pnl(s,780,716,1076,316,"POSITIONING");
const st=addFrame(z,14,50,620,162,C.tint,C.ink,1.5,"STATEMENT");
sT(st,12,8,596,18,"For families buying a phone for a parent or a child, who need it to last and need to know who will fix it, Tikau sells refurbished phones that each come with a lab report, battery health of 85% or more and a 12 month warranty, because every phone is tested and its battery read in Tikau's own lab.",{family:"Inter",style:"Semi Bold"});
[["Proof 1: ","battery read in our lab"],["Proof 2: ","IMEI checked, data wiped"],["Proof 3: ","12 months, repaired by Tikau"]].forEach((c,i)=>{ const f=addFrame(z,14+208*i,226,200,74,i===0?C.accent:C.white,C.ink,1.5,"CHIP"); sRT(f,8,6,184,18,c[0],c[1],{leadColor:C.primaryDeep}); });
function kundli(p,cx,cy,R,color){ const r=R*0.5;
  const pts=[[cx,cy-R],[cx+R,cy],[cx,cy+R],[cx-R,cy]];
  const ipts=[[cx-r,cy-r],[cx+r,cy-r],[cx+r,cy+r],[cx-r,cy+r]];
  for(let i=0;i<4;i++) addDiagonalWire(p,pts[i][0],pts[i][1],pts[(i+1)%4][0],pts[(i+1)%4][1],color,2);
  for(let i=0;i<4;i++) addDiagonalWire(p,ipts[i][0],ipts[i][1],ipts[(i+1)%4][0],ipts[(i+1)%4][1],color,2);
  addDiagonalWire(p,pts[0][0],pts[0][1],ipts[0][0],ipts[0][1],color,1.5);
  addDiagonalWire(p,pts[0][0],pts[0][1],ipts[1][0],ipts[1][1],color,1.5);
  addDiagonalWire(p,pts[1][0],pts[1][1],ipts[1][0],ipts[1][1],color,1.5);
  addDiagonalWire(p,pts[1][0],pts[1][1],ipts[2][0],ipts[2][1],color,1.5);
  addDiagonalWire(p,pts[2][0],pts[2][1],ipts[2][0],ipts[2][1],color,1.5);
  addDiagonalWire(p,pts[2][0],pts[2][1],ipts[3][0],ipts[3][1],color,1.5);
  addDiagonalWire(p,pts[3][0],pts[3][1],ipts[3][0],ipts[3][1],color,1.5);
  addDiagonalWire(p,pts[3][0],pts[3][1],ipts[0][0],ipts[0][1],color,1.5); }
sTL(z,654,50,18,"THE LINE A CUSTOMER REMEMBERS",{family:"Poppins",style:"Bold",color:C.alert});
kundli(z,706,138,52,C.primaryDeep);
TL(z,780,96,22,"Har phone ki kundli.",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:282,min:16});
TL(z,780,126,22,"Saal bhar ki zimmedari.",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:282,min:16});
sT(z,654,206,408,18,"Every phone's full report. A year of responsibility. A kundli is the chart a family reads before a big decision.",{family:"Inter",style:"Semi Bold"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
