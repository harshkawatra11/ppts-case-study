{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 3","R2 RULES AND INTEGRITY",420,
"Grade the seller, not the parcel: one pre-filled declaration and three seller tiers keep every parcel declared, cut forms from 45 to 15 minutes and release incentives only against matched payment",
"Source: team model "+V.hash+" (T3, T6, T8, T13); option scores are team judgement, weights 30/25/15/15/15 | CBIC Circulars 17/2026, 54/2020; Notification 45/2017 | WCO E-Commerce FoS 2018 | WTO TFA Art. 7.4 | tiers are pilot proposals");
rail(s,64,310,240,"SIX OPTIONS",C.primaryDeep); rail(s,64,562,232,"THE RULES",C.primary); rail(s,64,806,226,"THE MONEY",C.alert);
// band 1: score the options, strike the obvious, plot the trade-off
const p1=pnl(s,116,310,520,240,"SIX OPTIONS, OUR SCORES (1 TO 5)");
bx(p1,14,46,140,44,"Option",{fill:C.tint,align:"LEFT",pad:8});
["Cost\n30%","Integ.\n25%","Fiscal\n15%","Time\n15%","2026\n15%"].forEach((c,j)=>bx(p1,154+58*j,46,58,44,c,{fill:C.tint,pad:2}));
bx(p1,444,46,62,44,"Score",{fill:C.tint,pad:2});
const ON=["New portal","Subsidy","Exemption","Marketplace","Warehouses","Our package"];
V.opts.forEach((r,i)=>{ const y=90+24*i, hl=i===5, f=addFrame(p1,14,y,492,24,hl?C.tint:(i%2?C.surfaceAlt:C.white),C.ink,1,"ROW");
  sTL(f,8,0,18,ON[i],{family:"Inter",style:"Bold",maxW:128}); r.slice(1,6).forEach((v,j)=>harvey(f,140+58*j+29,12,18,parseInt(v)-1));
  sTL(f,0,0,18,r[6],{family:"Inter",style:"Bold",centerAt:461,color:hl?C.primaryDeep:C.ink}); });
const p2=nm(pnl(s,648,310,600,240,""),"PANEL: obvious");
const t2=TL(p2,14,5,22,"OBVIOUS: PORTAL, SUBSIDY, EXEMPTION",{color:C.alert,maxW:572}); addRect(p2,14,39,572,2,C.ink); strike(p2,t2,C.alert);
["Portal: rebuilds ICEGATE, ECCS and DNK; slowest to deliver","Subsidy: ₹1,000 a parcel from the exchequer, every year","Exemption: splitting and under-invoicing; 1 of 5 on integrity"].forEach((b,i)=>{ const y=50+i*34;
  addEllipse(p2,14,y,26,26,C.alert,C.ink,1.5); sTL(p2,0,y,18,String(i+1),{color:C.white,centerAt:27}); sT(p2,50,y+2,536,18,b,{family:"Inter",style:"Semi Bold"}); });
callout(p2,14,156,572,68,"CONCLUSIVELY: ","grade the seller, keep every parcel declared: "+V.opts[5][6]+" of 5",{fill:C.tint});
const p3=pnl(s,1260,310,596,240,"SELLER COST AGAINST INTEGRITY");
const L0=56,R0=576,T0=60,B0=184, X=v=>L0+24+(R0-L0-48)*(v-1)/4, Y=v=>B0-14-(B0-T0-28)*(v-1)/4;
addRect(p3,X(3),T0,1.5,B0-T0,C.surface); addRect(p3,L0,Y(3),R0-L0,1.5,C.surface);
addRect(p3,L0,B0,R0-L0,2,C.ink); addRect(p3,L0,T0,2,B0-T0,C.ink);
[1,3,5].forEach(v=>{ sTL(p3,0,B0+3,18,String(v),{family:"Inter",style:"Semi Bold",centerAt:X(v)}); sTL(p3,0,Y(v)-11,18,String(v),{family:"Inter",style:"Semi Bold",rightAt:L0-6}); });
sTL(p3,0,B0+3,18,"Integrity",{family:"Inter",style:"Bold",centerAt:(X(3)+X(5))/2+20});
sTL(p3,L0+10,T0-14,18,"Cheap, leaky",{family:"Inter",style:"Bold",color:C.alert});

[[3,3,1],[4,2,2],[4,1,3],[2,3,4],[3,4,5],[5,4,6]].forEach(b=>bub(p3,X(b[1]),Y(b[0]),30,String(b[2]),b[2]===6?C.primaryDeep:(b[2]===3?C.alert:C.blueDeep),C.white));
sTL(p3,X(4)+22,Y(5)-11,18,"Ours",{family:"Inter",style:"Bold",color:C.primary});
fine(p3,14,214,568,"1 portal, 2 subsidy, 3 exempt, 4 market, 5 warehouses, 6 ours");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
// band 2: the process, the tiers, the controls
const p4=pnl(s,116,562,700,232,"ONE ORDER: FIVE HAND-OFFS TODAY, FOUR AFTER");
bx(p4,14,48,100,64,"TODAY\n45 min",{fill:C.alert,color:C.white,fam:"Poppins",st:"Bold"});
bx(p4,14,122,100,64,"AFTER\n15 min",{fill:C.primary,color:C.white,fam:"Poppins",st:"Bold"});
["IEC, GST, Udyam","Invoice by hand","PBE-III or CSB-V","Agent or CHA","Return = import"].forEach((t,i)=>{ const x=128+114.5*i;
  bx(p4,x,48,100,64,t,{fill:C.alertTint}); if(i<4) arrow(p4,x+100,80,x+114,80,C.ink,2); });
["One seller ID at the desk","Declaration pre-filled","Risk engine scores it","Return to a pooled point"].forEach((t,i)=>{ const x=128+143*i;
  bx(p4,x,122,130,64,t,{fill:C.goodTint}); if(i<3) arrow(p4,x+130,154,x+143,154,C.ink,2); });
note(p4,14,194,672,"Basis: ","CSB-V keyed by hand; ECCS, ICEGATE, DNK portals exist");
const p5=pnl(s,828,562,540,232,"THREE TIERS: CHECKS FOLLOW THE RECORD");
tbl(p5,14,46,[80,176,140,116],["Tier","Entry","Checks","Demoted"],[["Tier 1","KYC at the desk","all scored","any error"],["Tier 2","25 clean parcels","less sampling","unpaid bill"],["Tier 3","12 months clean","audit after","audit flag"]],
  {hh:26,rh:42,name:"tiers",strip:[HG[2],HG[3],HG[4]]});
note(p5,14,199,512,"Every tier: ","all parcels declared; thresholds proposed");
const p6=pnl(s,1380,562,476,232,"EACH MISUSE MEETS TWO CONTROLS");
const Y_="Yes",P_="Part",N_="No";
hgrid(p6,14,46,["Under-invoicing","Incentive misuse","GST refund leak","Banned goods","Split parcels","Fake returns"],["Data","Pay","Test","Audit","Drop"],
  [[Y_,Y_,Y_,Y_,Y_],[Y_,Y_,P_,Y_,Y_],[Y_,Y_,P_,Y_,Y_],[P_,N_,Y_,P_,Y_],[Y_,P_,Y_,Y_,Y_],[Y_,P_,Y_,Y_,Y_]].map(r=>r.map(ynCell)),{lw:168,cw:56,rh:23,hh:24,name:"controls"});
fine(p6,14,210,448,"Pay: payment match. Test: sample. Drop: demote");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
function wfN(p,x,y,w,h,items,o){ o=o||{}; const sz=18, n=items.length, pitch=w/n, bw=o.bw||Math.min(56,pitch*0.6), lh=o.lh||30;
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,Y(0),w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=0;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?((o.tc&&o.tc[i])||C.primaryDeep):(it[1]>=0?C.good:C.alert),C.ink,1.5);
    sTL(p,0,y1-Math.ceil(sz*1.25)-2,sz,(it[1]<0?"−":(tot?"":"+"))+fmtN(Math.abs(it[1])),{family:"Inter",style:"Bold",color:it[1]<0?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sTL(p,0,base+4,sz,it[0],{family:"Inter",style:"Bold",centerAt:cx}); }); }
// band 3: the money
const m=layered(s,116,806,560,219,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,20,6,22,"SELLER KEEPS AN ORDER, SAME CHECKS",{color:C.accent,maxW:520});
const a1=TL(m,20,44,44,V.today,{family:"Poppins",style:"ExtraBold",color:C.white});
arrow(m,20+a1.width+12,78,20+a1.width+56,78,C.accent,5);
TL(m,20+a1.width+68,38,56,V.reformed,{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:520-a1.width-68,min:40});
T(m,20,124,520,22,"+"+V.uplift_pct+" in our model, with no freight subsidy",{family:"Inter",style:"Bold",color:C.white});
addDashedRow(m,20,158,520,C.accent,14,9,2);
[["−84%","paperwork"],[V.cts_ref,"cost to serve"],[V.bear_today+" to "+V.bear_ref,"bear case"]].forEach((k,i)=>{ const x=20+i*176;
  TL(m,x,162,24,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:166,min:22}); sT(m,x,196,166,18,k[1],{family:"Inter",style:"Bold",color:C.white}); });
const p8=pnl(s,688,806,700,226,"HOW "+V.today+" BECOMES "+V.reformed+", ₹ AN ORDER");
wfN(p8,14,46,672,174,[["Today",640],["Cluster desk",195],["Rate card",120],["Pooled returns",83],["Reformed",1038]],{min:0,max:1150,bw:60,lh:30,tc:[C.alert,0,0,0,C.primaryDeep]});
const p9=pnl(s,1400,806,456,226,"WHAT MOVES THE "+V.uplift+", ₹");
const NM={A28:"A28 Rate card",A07:"A07 Forms today",A09:"A09 Agent fee",A27:"A27 Desk minutes",A31:"A31 Returns pooled"};
const base=parseInt(V.uplift.replace(/[^0-9]/g,""));
torS(p9,14,50,428,V.tornado.filter(t=>NM[t[0]]).map(t=>({label:NM[t[0]],lo:base+t[2],hi:base+t[3]})),base,{lw:200,rh:30,min:base-80,max:base+70});
fine(p9,14,204,428,"Red: bear; green: bull. Rate card priced first");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
