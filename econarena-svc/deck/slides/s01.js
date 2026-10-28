{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
coverTop(s);
TL(s,64,150,112,"SETU AI",{family:"Poppins",style:"ExtraBold",maxW:920,min:80});
TL(s,64,318,56,"WIN THE LENDERS FIRST",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:920,min:40});
T(s,64,404,920,22,"A strategy for a new Indian AI company with ₹50 crore and no data centre: where it wins first, how it sells, what it builds, and why rivals cannot simply copy it",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const v=layered(s,64,512,920,226,C.primaryDeep,"CARD: verdict");
T(v,24,14,872,24,"OUR ANSWER: DO NOT TRAIN A BASE MODEL. SELL MID-SIZED LENDERS IN MUMBAI AND PUNE PROOF THAT EVERY COLLECTION CALL FOLLOWED THE RULES.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,24,128,872,22,"In our model: "+V.cust24+" lenders and "+V.arr24+" of ARR by month 24 on "+V.spend24+" of spend, with "+V.cash24+" left and "+V.runway+" of runway. Compute is rented in Mumbai: "+V.co2l+" of CO2e in 24 months.",{family:"Inter",style:"Semi Bold",color:C.white});
TL(s,64,752,36,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary});
teamBT(s,64,806,[230,520,170]);
srcLine(s,"Source: Econ-Arena case packet, October 2026 | IndiaAI compute portal | Maharashtra AI Policy 2026 | team model "+V.hash+" | logos identify organisations in the analysis; no partnership or endorsement is implied");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S1");
const m=addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map");
TL(m,16,10,24,"WHO DECIDES WHERE SETU AI CAN WIN",{color:C.primary,maxW:808}); addRect(m,16,50,808,2,C.ink);
T(m,16,60,808,22,"By May 2027 a lender must show that every AI call was consented, labelled and lawful. Setu sells that evidence.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const A=[[["IMG:Lender collections floor"],"THE BUYERS","mid-sized lenders in Mumbai and Pune"],[["RBI","MeitY"],"THE RULES","recovery code, DPDP, IT Rules 2026"],
  [["IndiaAI","Yotta","NVIDIA"],"THE COMPUTE","rented at ₹65 to ₹92 a GPU-hour"],[["Sarvam AI","Krutrim","BharatGen"],"MODEL BUILDERS","12 IndiaAI foundation teams"],
  [["Anthropic","OpenAI","Google"],"GLOBAL LABS","Claude now serves from India"],[["Gnani.ai","Convin","Credgenics"],"COLLECTIONS AI","already sell to lenders"],
  [["Government of Maharashtra"],"STATE SUPPORT","₹500 Cr fund, 20% MSME subsidy"],[["IMG:Collection agency partner"],"THE CHANNEL","agencies and loan-software vendors"]];
const P=[[16,124],[294,124],[572,124],[16,377],[572,377],[16,630],[294,630],[572,630]], W=252, Hh=150, HX=420, HY=452;
P.forEach(q=>addDiagonalWire(m,HX,HY,q[0]+W/2,q[1]+Hh/2,C.ink,2.5));
A.forEach((a,i)=>actorL(m,P[i][0],P[i][1],W,Hh,a[0],a[1],a[2]));
addEllipse(m,HX-105,HY-105,210,210,C.primaryDeep,C.ink,2.5);
TL(m,0,HY-66,26,"SETU AI",{color:C.white,centerAt:HX}); TL(m,0,HY-26,26,"₹50 CR",{color:C.accent,centerAt:HX});
sTL(m,0,HY+18,18,"no data centre",{family:"Inter",style:"Bold",color:C.white,centerAt:HX});
[["LISTEN","every call"],["CHECK","three rule sets"],["PROVE","evidence file"]].forEach((r,i)=>{ const x=16+278*i;
  const f=addFrame(m,x,800,252,36,i===2?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,7,232,18,r[0]+": ",r[1],{leadColor:C.primaryDeep});
  if(i<2) arrow(m,x+254,818,x+276,818,C.ink,2); });
fine(m,16,850,808,"Logos identify organisations referred to in the analysis; no partnership or endorsement is implied.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
