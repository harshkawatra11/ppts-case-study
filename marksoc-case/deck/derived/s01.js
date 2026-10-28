{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
coverTop(s);
TL(s,64,150,112,"PROJECT DOBAARA",{family:"Poppins",style:"ExtraBold",maxW:920,min:72});
TL(s,64,290,48,"TIKAU PHONES, JANUARY TO MARCH 2027",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:920,min:34});
T(s,64,370,920,22,"A board recommendation: which options to fund from ₹80 lakh of growth money, which customer to win, how to launch in February and how to know by mid February that it is working",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const v=layered(s,64,476,920,276,C.primaryDeep,"CARD: verdict");
T(v,24,14,872,24,"OUR ANSWER: CERTIFY EVERY PHONE, PROMISE 85% BATTERY AND 12 MONTHS, AND OPEN A THIRD LAB SHIFT ON 1 FEBRUARY, FOR FAMILY BUYERS",{family:"Poppins",style:"Bold",color:C.accent});
T(v,24,140,872,22,"In our model March EBITDA moves from "+V.e0_rl+" to "+V.e_mar_rl+" and the return rate from "+V.rr0+" to "+V.rr_mar+", for ₹"+V.gm_tot+" lakh of the ₹80 lakh. All four board tests pass. No price cut, no trust campaign, and trade in waits for April.",{family:"Inter",style:"Semi Bold",color:C.white});
TL(s,64,768,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary});
teamBT(s,64,830,[250,500,170]);
srcLine(s,"Source: case Exhibits 1 to 6 | team model "+V.hash+" | logos identify organisations named in the case; no partnership or endorsement is implied");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S1");
const m=addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map");
TL(m,16,10,24,"WHO DECIDES WHETHER A TIKAU PHONE GETS BOUGHT",{color:C.primary,maxW:808}); addRect(m,16,50,808,2,C.ink);
T(m,16,60,808,22,"One Noida lab, five channels, three grades: Tikau sells "+V.sold.Jan+" phones a month and loses ₹"+V.e0.replace("−","")+" lakh a month doing it.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const A=[[["IMG:Family buying a phone for a parent"],"THE CUSTOMER","46% fear the battery will not last"],[["MONO:SQ","MONO:KA","MONO:RB"],"THE TEAM","price, proof or trade in: three camps"],
  [["MONO:PB","IMG:Neighbourhood phone shop"],"THE RIVALS","PhoneBazaar +6%, shops 10 to 15% less"],[["MONO:MegaKart","IMG:Phone review creator"],"THE CHANNELS","ads lose ₹2.1 lakh a month"],
  [["IMG:Phone testing lab"],"THE LAB",V.sold.Jan+" sold of "+V.sold.Jan+" sellable"],[["Sanchar Saathi","National Consumer Helpline"],"THE RULES","every claim true on every phone"],
  [["MONO:BOARD"],"THE BOARD","₹80 lakh and four tests"],[["Counterpoint Research","GSMA"],"WHY NOW","context only, not in our numbers"]];
const P=[[16,124],[294,124],[572,124],[16,377],[572,377],[16,630],[294,630],[572,630]], W=252, Hh=150, HX=420, HY=452;
P.forEach(q=>addDiagonalWire(m,HX,HY,q[0]+W/2,q[1]+Hh/2,C.ink,2.5));
A.forEach((a,i)=>actorL(m,P[i][0],P[i][1],W,Hh,a[0],a[1],a[2]));
addEllipse(m,HX-105,HY-105,210,210,C.primaryDeep,C.ink,2.5);
TL(m,0,HY-70,26,"TIKAU",{color:C.white,centerAt:HX}); TL(m,0,HY-30,26,V.e0+" LAKH",{color:C.accent,centerAt:HX});
sTL(m,0,HY+14,18,"EBITDA a month today",{family:"Inter",style:"Bold",color:C.white,centerAt:HX});
[["FIND","the report first"],["TRUST","85%, 12 months"],["BUY","store or referral"]].forEach((r,i)=>{ const x=16+278*i;
  const f=addFrame(m,x,800,252,36,i===2?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,7,232,18,r[0]+": ",r[1],{leadColor:C.primaryDeep});
  if(i<2) arrow(m,x+254,818,x+276,818,C.ink,2); });
fine(m,16,850,808,"Monograms mark the case's fictional names; logos mark real bodies the case names.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
