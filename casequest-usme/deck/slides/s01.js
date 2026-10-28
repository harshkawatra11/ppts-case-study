{ const s = await figma.getNodeByIdAsync("S1"); wipe(s);
coverTop(s);
TL(s,64,128,100,"SMALL PARCELS,",{family:"Poppins",style:"ExtraBold",maxW:920,min:72});
TL(s,64,280,100,"FULL CHECKS",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:920,min:72});
T(s,64,446,920,22,"A reform strategy for DPIIT and the 2026 Inter-Ministerial Committee on E-Commerce Exports: simple, affordable online exporting for MSMEs and artisans without weakening customs checks or tax collection",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const v=layered(s,64,568,920,214,C.primaryDeep,"CARD: verdict");
T(v,24,16,872,24,"OUR ANSWER: KEEP EVERY PARCEL DECLARED, GRADE THE SELLER INSTEAD OF INSPECTING THE PARCEL, AND MOVE THE PAPERWORK FROM THE SELLER TO A CLUSTER EXPORT DESK.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,24,140,872,22,"In our model: a ₹3,960 order earns the seller "+V.reformed+" instead of "+V.today+" ("+V.uplift_pct+" more) with no freight subsidy. Pilot: "+V.clusters+" clusters, "+V.sellers+" sellers, "+V.budget_cr+".",{family:"Inter",style:"Semi Bold",color:C.white});
TL(s,64,798,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary});
teamBT(s,64,856,[230,520,170]);
sTL(s,0,818,18,"harshkawatra11@gmail.com  |  CaseQuest 2026, USME DTU",{family:"Inter",style:"Bold",color:C.primaryDeep,rightAt:984});
srcLine(s,"Source: case brief | CBIC and DGFT 2026 notifications | team model "+V.hash+" | logos identify organisations in the analysis; no partnership or endorsement is implied");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S1");
const m=addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map");
TL(m,16,10,24,"WHO DECIDES WHETHER A SMALL PARCEL LEAVES INDIA",{color:C.primary,maxW:808}); addRect(m,16,50,808,2,C.ink);
T(m,16,60,808,22,"MSMEs make about 46% of India's exports; e-commerce carries a small slice. Eight actors shape every parcel.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const A=[[["DPIIT","DGFT","CBIC"],"CUSTOMS RULES","rules, risk engine, incentives"],
  [["India Post","DHL","Shiprocket"],"POST, CARRIERS","1,013 Dak Ghar Niryat Kendras"],
  [["Amazon","Etsy","eBay"],"PLATFORMS","fees, listings, buyer data"],
  [["RBI","GSTN"],"PAYMENTS, TAX","realisation, refunds, LUT"],
  [["IMG:Artisan at work"],"THE SELLER","women-led, first-generation"],
  [["EPCH","Ministry of MSME"],"SELLER BODIES","councils, clusters, credit"],
  [["US CBP","EU","HMRC"],"DESTINATIONS","de minimis gone, €3 EU duty"],
  [["IMG:Jaipur block print","IMG:Moradabad brass"],"CLUSTERS","six pilot sites"]];
const P=[[16,124],[294,124],[572,124],[16,377],[572,377],[16,630],[294,630],[572,630]], W=252, Hh=150, HX=420, HY=452;
P.forEach(q=>addDiagonalWire(m,HX,HY,q[0]+W/2,q[1]+Hh/2,C.ink,2.5));
A.forEach((a,i)=>actorL(m,P[i][0],P[i][1],W,Hh,a[0],a[1],a[2]));
addEllipse(m,HX-105,HY-105,210,210,C.primaryDeep,C.ink,2.5);
TL(m,0,HY-66,26,"MSME SELLER",{family:"Poppins",style:"Bold",color:C.white,maxW:190,centerAt:HX});
TL(m,0,HY-26,26,"IN A CLUSTER",{family:"Poppins",style:"Bold",color:C.accent,maxW:190,centerAt:HX});
sTL(m,0,HY+14,18,"Jaipur, Moradabad,",{family:"Inter",style:"Bold",color:C.white,centerAt:HX});
sTL(m,0,HY+38,18,"Varanasi and more",{family:"Inter",style:"Bold",color:C.white,centerAt:HX});
[["DESK","files for the seller"],["TIERS","checks follow risk"],["POOL","one rate card"]].forEach((r,i)=>{ const x=16+278*i;
  const f=addFrame(m,x,800,252,36,i===2?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,7,232,18,r[0]+": ",r[1],{leadColor:C.primaryDeep});
  if(i<2) arrow(m,x+254,818,x+276,818,C.ink,2); });
fine(m,16,838,808,"Logos and images identify organisations and places in the analysis; no partnership or endorsement is implied.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

// research link (added after the user's manual edits; Asian Paints linkRow pattern)
{ const s = await figma.getNodeByIdAsync("S1"); const URL="https://github.com/harshkawatra11/ppts-case-study/blob/casequest-usme-build/casequest-usme/research/casequest-research.pdf";
const t0="Read the full research document  →", w=Math.ceil(measureW(s,"Inter","Bold",22,t0)+32);
const f=addFrame(s,64,1022,w,46,C.blueTint,C.blue,1.5,"LINKROW: research"); const t=addText(f,"Inter","Bold",22,C.blue,t0,16,0,w-32,46,"LEFT","CENTER");
t.setRangeHyperlink(0,t0.length,{type:"URL",value:URL}); }
