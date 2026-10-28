{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
coverTop(s);
TL(s,64,150,112,"ACTIVATION",{family:"Poppins",style:"ExtraBold",maxW:920,min:80});
TL(s,64,326,60,"WITHOUT A BULL MARKET",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:920,min:44});
T(s,64,420,920,22,"Driving user activation on trading and investing platforms in volatile markets: a strategy for ONL Trade, the digital platform of Trade Private Limited",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const v=layered(s,64,500,920,270,C.primaryDeep,"CARD: verdict");
T(v,24,16,872,24,"OUR ANSWER: SHOW SALARY CUSTOMERS THE ONL ACCOUNT THEY ALREADY HOLD, INSIDE THE BANK, ON SALARY DAY, IN A HOLDINGS CHECK, AT THE RM REVIEW AND AT DHANTERAS, WITH A SMALL MONTHLY ETF INSTALMENT THEY CHOOSE.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,24,166,872,22,"In our model: "+V.pp+" by 31 Jan 2027 ("+V.rate26+" to "+V.rate_end+") and "+V.inc+" more active accounts for "+V.cash+" of cash. No advice, no offers, no paid media, no F&O prompts.",{family:"Inter",style:"Semi Bold",color:C.white});
TL(s,64,786,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary});
teamBT(s,64,846,[230,520,170]);
sT(s,64,1008,920,18,"harshkawatra11@gmail.com  |  Arthik Khayal 2026, ecotech, USME DTU",{family:"Inter",style:"Bold",color:C.primaryDeep});
srcLine(s,"Source: case Exhibits 1 and 2 | NSE active clients FY26 | team activation model "+V.hash+" | logos identify organisations in the analysis; no partnership or endorsement is implied");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S1");
const m=addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map");
TL(m,16,10,24,"WHO DECIDES WHETHER AN ACCOUNT GETS USED",{color:C.primary,maxW:808}); addRect(m,16,50,808,2,C.ink);
T(m,16,60,808,22,V.base26+" accounts, "+V.act26+" active: "+V.sal_idle_sh+" of the "+V.idle_l+" idle accounts belong to salary customers of the parent bank.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const A=[[["YES Bank"],"PARENT BANK","6.28 lakh salary accounts sit with ONL"],[["Zerodha","Groww","Angel One"],"RIVAL BROKERS","set the bar on speed and price"],
  [["ICICI Direct","HDFC Sky","Kotak"],"BANK-LED PEERS","bank, demat and trading together"],[["SEBI","NSE","BSE"],"REGULATORS","no advice, no inducement, ad approval"],
  [["NSE Indices"],"THE MARKET","NSE active clients fell 7% in FY26"],[["IMG:Salaried first-time investor"],"THE CUSTOMER","under 30, risk averse, busy"],
  [["WhatsApp"],"OWNED CHANNELS","bank app, email, SMS, RM, branch"],[["MeitY","Sahamati"],"DATA, CONSENT","DPDP Act 2023 and Rules 2025"]];
const P=[[16,124],[294,124],[572,124],[16,377],[572,377],[16,630],[294,630],[572,630]], W=252, Hh=150, HX=420, HY=452;
P.forEach(q=>addDiagonalWire(m,HX,HY,q[0]+W/2,q[1]+Hh/2,C.ink,2.5));
A.forEach((a,i)=>actorL(m,P[i][0],P[i][1],W,Hh,a[0],a[1],a[2]));
addEllipse(m,HX-105,HY-105,210,210,C.primaryDeep,C.ink,2.5);
TL(m,0,HY-66,26,"ONL TRADE",{color:C.white,centerAt:HX}); TL(m,0,HY-26,26,V.rate26+" ACTIVE",{color:C.accent,centerAt:HX});
sTL(m,0,HY+18,18,V.base26+" accounts",{family:"Inter",style:"Bold",color:C.white,centerAt:HX});
[["FIND","bank app tile"],["FUND","same bank"],["START","one ETF unit"]].forEach((r,i)=>{ const x=16+278*i;
  const f=addFrame(m,x,800,252,36,i===2?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,7,232,18,r[0]+": ",r[1],{leadColor:C.primaryDeep});
  if(i<2) arrow(m,x+254,818,x+276,818,C.ink,2); });
fine(m,16,850,808,"Logos identify organisations referred to in the analysis; no partnership or endorsement is implied.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
