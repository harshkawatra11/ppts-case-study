{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 3","R1 MARKET AND ACCESS",420,
"Paperwork and returns, not freight, decide whether a small parcel pays: a cluster desk, one rate card and a pooled return point lift a seller's margin from "+V.today+" to "+V.reformed+" an order with no freight subsidy",
"Source: team model "+V.hash+" (T2 to T6), representative ₹3,960 item, 0.5 kg | Lok Sabha USQ 2786 | SBI | EY-ASSOCHAM | MSME Ministry | CBIC Circular 17/2026 | DGFT 27/2026-27 | CBP, EU Council, HMRC, ATO | forces are team judgement");
rail(s,64,310,240,"TODAY",C.primaryDeep); rail(s,64,562,232,"THE MARKET",C.alert); rail(s,64,806,226,"THE CHALLENGE",C.primary);
function wfN(p,x,y,w,h,items,o){ o=o||{}; const sz=18, n=items.length, pitch=w/n, bw=o.bw||Math.min(56,pitch*0.6), lh=o.lh||30;
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,Y(0),w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=0;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?((o.tc&&o.tc[i])||C.primaryDeep):(it[1]>=0?C.good:C.alert),C.ink,1.5);
    sTL(p,0,y1-Math.ceil(sz*1.25)-2,sz,(it[1]<0?"−":(tot?"":"+"))+fmtN(Math.abs(it[1])),{family:"Inter",style:"Bold",color:it[1]<0?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sTL(p,0,base+4,sz,it[0],{family:"Inter",style:"Bold",centerAt:cx}); }); }
// band 1: one order today
kpi(s,116,310,268,112,V.price,"price of one order",{size:40,ny:2,ly:66});
kpi(s,392,310,268,112,V.today,"kept by the seller",{size:40,ny:2,ly:66,color:C.alert});
kpi(s,116,438,268,112,V.cts_today,"cost to serve a parcel",{size:40,ny:2,ly:66});
kpi(s,392,438,268,112,"16.2%","of the price kept",{size:40,ny:2,ly:66,color:C.alert});
const p1=pnl(s,676,310,560,240,"ONE ORDER TODAY, ₹");
wfN(p1,14,46,532,156,[["Price",3960],["Fee",-594],["Goods",-800],["Freight",-1000],["Forms",-232],["Returns",-693],["Kept",640]],{min:0,max:4300,bw:46,lh:28,tc:[C.primaryDeep,0,0,0,0,0,C.primary]});
note(p1,14,204,532,"Hidden: ","forms and returns ₹925; freight ₹1,000");
const p2=pnl(s,1248,310,608,240,"FIVE WAYS TO SHIP ONE ORDER, ₹");
tbl(p2,14,46,[190,96,80,96,118],["Lane","Freight","Forms","Kept","Margin"],[["Parcel today","₹1,000","₹232",V.today,"16.2%"],["+ cluster desk","₹1,000","₹38","₹835","21.1%"],["+ one rate card","₹880","₹38","₹955","24.1%"],["+ pooled returns","₹880","₹38",V.reformed,"26.2%"],["Warehouse lane","₹1,118","₹15",V.wh,"22.5%"]],
  {hh:26,rh:26,name:"lanes",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[C.alertTint,null,null,C.tint,C.surfaceAlt]});
note(p2,14,206,580,"SO WHAT: ","the reformed parcel keeps 1.6x today");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
// band 2: the market around one seller
const p3=pnl(s,116,562,572,232,"MSME EXPORTS, AND THE ONLINE SLICE");
cols(p3,14,46,220,180,["FY21","FY25"],[{color:C.primary,values:[52849,173350]}],{max:185000,bw:60,totals:["52,849","1,73,350"]});
sTL(p3,22,50,18,"3.3x",{family:"Inter",style:"Bold",color:C.alert});
sTL(p3,22,74,18,"in 4 years",{family:"Inter",style:"Bold",color:C.primaryDeep});
[["46%","MSME share of exports, FY25"],["$4 to 5 bn","e-commerce exports, FY23"],["7.3 crore","Udyam units; 1 in 420 export"]].forEach((m,i)=>{ const y=50+i*58;
  TL(p3,250,y,26,m[0],{family:"Poppins",style:"ExtraBold",color:i===0?C.primary:C.alert,maxW:140}); sT(p3,398,y+2,160,18,m[1],{family:"Inter",style:"Bold"}); });
const p4=pnl(s,700,562,572,232,"FIVE FORCES ON ONE CLUSTER SELLER");
const PX=[14,198,382], PY=[46,108,170], RF={H:HR[3],M:HR[2],L:HG[2],X:C.primaryDeep,C:C.surfaceAlt,S:C.accentTint};
[[0,0,"One seller, few parcels","","C"],[0,1,"New entrants","HIGH","H"],[0,2,"Platforms: 15% fee, own data","","C"],
 [1,0,"Carriers","HIGH","H"],[1,1,"Rivalry","HIGH","X"],[1,2,"Buyers abroad","HIGH","H"],
 [2,0,"Destinations tighten rules","","C"],[2,1,"Substitutes: EOR","MEDIUM","M"],[2,2,"Win on cost a parcel","","S"]].forEach(q=>{
  const dk=q[4]==="X", f=addFrame(p4,PX[q[1]],PY[q[0]],176,56,RF[q[4]],C.ink,dk?2.5:1.5,"FORCE");
  if(q[3]){ sT(f,6,4,164,18,q[2],{family:"Inter",style:"Bold",align:"CENTER",color:dk?C.white:C.ink}); sT(f,6,28,164,18,q[3],{family:"Poppins",style:"Bold",align:"CENTER",color:dk?C.accent:C.ink}); }
  else sT(f,6,6,164,18,q[2],{family:"Inter",style:q[4]==="S"?"Bold":"Semi Bold",align:"CENTER",color:q[4]==="S"?C.alert:C.ink}); });
const p5=pnl(s,1284,562,572,232,"DESTINATIONS CLOSE THE LOW-VALUE DOOR");
tbl(p5,14,46,[96,280,168],["Market","Rule for low-value parcels","Who pays"],[["US","de minimis gone, Aug 2025","duty, ad valorem"],["EU","€3 an item from 1 Jul 2026","€3 per item line"],["UK","£135: marketplace VAT","the marketplace"],["UAE","duty-free to AED 1,000","the importer"],["Australia","GST on A$1,000 or less","seller registers"]],
  {hh:26,rh:25,name:"destinations",fills:[C.alertTint,C.alertTint,null,null,null]});
note(p5,14,199,544,"SO WHAT: ","every parcel must be declared well");
// band 3: the clock and the question
const p6=pnl(s,116,806,600,226,"THE 2026 CLOCK: EVERY ROUTE IS NOW OPEN");
addRect(p6,30,90,540,3,C.ink);
[["Sep 2024","Courier benefits",0],["Jan 2026","Postal benefits",0],["Apr 2026","Cap gone, returns eased",1],["Jul 2026","Press Note 3",0],["Aug 2026","EOR framework",0]].forEach((q,i)=>{ const cx=70+i*115;
  addEllipse(p6,cx-10,81,20,20,q[2]?C.alert:C.primary,C.ink,2);
  sTL(p6,0,50,18,q[0],{family:"Poppins",style:"Bold",centerAt:cx,color:q[2]?C.alert:C.ink}); sT(p6,cx-56,106,112,18,q[1],{family:"Inter",style:"Bold",align:"CENTER"}); });
note(p6,14,172,572,"SO WHAT: ","the routes are open; per-parcel cost is left");
const p7=pnl(s,728,806,1128,226,"THE KEY QUESTION, BROKEN DOWN: A MECE ISSUE TREE");
bx(p7,14,52,212,164,"How can a ₹3,960 parcel pay without a lighter check?",{fill:C.primaryDeep,color:C.white,size:22,pad:10});
const BC=[C.alert,C.primary,C.primaryDeep], BY=[52,110,168];
[["CUT THE FORMS",["45 minutes and a ₹120 agent fee a parcel (A07, A09)","CSB-V keyed by hand; three routes, three rule books"]],
 ["CUT FREIGHT",["₹1,000 for a 0.5 kg parcel; no bulk rate for a few parcels","A 12% rate-card saving is the least certain lever (A28)"]],
 ["FIX RETURNS",["20% to 25% of e-commerce exports come back (CBIC)","One return costs "+V.ret_loss_today+"; most are abandoned abroad (T2)"]]].forEach((b,i)=>{
  bx(p7,262,BY[i],240,50,b[0],{fill:BC[i],color:C.white,fam:"Poppins",size:20}); elb(p7,226,134,262,BY[i]+25,C.ink,2);
  b[1].forEach((leaf,j)=>{ const ly=BY[i]+j*26; const lf=addFrame(p7,526,ly,588,24,j?C.surfaceAlt:C.white,C.ink,1,"LEAF"); sT(lf,8,1,572,18,leaf,{family:"Inter",style:"Semi Bold"}); elb(p7,502,BY[i]+25,526,ly+12,BC[i],2); }); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
