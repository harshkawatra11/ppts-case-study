{ const s = await figma.getNodeByIdAsync("S8");
skelBT(s,6,"7 / 8","THE LAUNCH",250,"The February launch puts the Tikau Report above the price on every product page and sells it through stores, referrals and labelled creators, with three claims true for every phone",
  "Source: case Exhibits 3, 5 and 6 | team model "+V.hash+" (T21) | the product page is an illustration: the battery reading shown is an example, not a measured phone");
const p=pnl(s,64,310,640,722,"WHAT A CUSTOMER SEES FIRST");
const sc=browser(p,14,48,612,660,"Tikau product page, Good grade");
sTL(sc,14,10,18,"Refurbished, Good grade, 128 GB",{family:"Inter",style:"Bold"});
["Front","Back","Edges","Screen on"].forEach((l,i)=>imgSlot(sc,14+148*i,40,136,96,"Real photo: "+l));
const r=addFrame(sc,14,148,584,300,C.accentTint,C.ink,2,"REPORT");
TL(r,14,6,22,"TIKAU REPORT",{color:C.primaryDeep});
[["Battery health: ","87%, read in Tikau's lab on 2 Feb 2027"],["Condition: ","light marks on the back, all shown above"],["IMEI: ","checked; not reported lost or stolen"],["Data: ","wiped, certificate included"],
 ["Warranty: ","12 months, repairs in Tikau's lab"],["Returns: ","7 days"]].forEach((x,i)=>{ const y=44+i*42; tick(r,14,y+2,24); sRT(r,48,y,522,18,x[0],x[1],{leadColor:C.primaryDeep}); });
TL(sc,14,462,32,"₹16,640",{family:"Poppins",style:"ExtraBold",color:C.ink});
sTL(sc,180,474,18,"12 month warranty included",{family:"Inter",style:"Bold",color:C.good});
bx(sc,14,516,584,46,"ADD TO CART",{fill:C.primary,color:C.white,fam:"Poppins",st:"Bold",size:22});
sT(sc,14,574,584,18,"Not on this page: countdown timers, \"only 1 left\" and struck-out prices.",{family:"Inter",style:"Bold",color:C.alert});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S8");
const a=pnl(s,720,310,1136,236,"THE MAIN IDEA");
TL(a,14,48,34,"Har phone ki kundli. Saal bhar ki zimmedari.",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:1108});
sT(a,14,104,1108,18,"Show the report before the price. Every channel carries the same report: the product page, the store counter, the creator's video and the referral link. In English: every phone's full report, a year of responsibility.",{family:"Inter",style:"Semi Bold"});
[["1 February: ","report live on every listing, MegaKart included"],["Week 1: ","stores read batteries in front of buyers"],["Week 2: ","creators open the report on camera, labelled as ads"]].forEach((c,i)=>{
  const f=addFrame(a,14+372*i,166,360,58,i===0?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,5,340,18,c[0],c[1],{leadColor:C.primaryDeep}); });
const c=pnl(s,720,562,1136,218,"CHANNELS IN FEBRUARY");
tbl(c,14,46,[170,488,150,150,150],["Channel","Role in the launch","Per order now","Per order, Mar","Spend"],[["Referrals","Family code shares the report; same ₹350 coupon",V.ch[4][3],V.chm[4][3],"coupons only"],
  ["Stores","Battery read at the counter; report in the box",V.ch[3][3],V.chm[3][3],"₹21 lakh"],["Creators","Open the report on camera, labelled as an ad",V.ch[2][3],V.chm[2][3],"₹18 lakh"],
  ["Paid ads","Report-first creative; no new money",V.ch[0][3],V.chm[0][3],"₹60 lakh"],["MegaKart","Report and 12 months on listings; no ads",V.ch[1][3],V.chm[1][3],"12% fee"]],
  {hh:26,rh:28,name:"channels",align:["LEFT","LEFT","RIGHT","RIGHT","RIGHT"]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S8");
const k=pnl(s,720,796,1136,236,"THREE CLAIMS WE MAKE AND TWO WE DO NOT, AGAINST EXHIBIT 5");
const yc=v=>v==="MAKE"?{t:"MAKE",f:C.good,tc:C.white}:(v==="DO NOT"?{t:"DO NOT",f:C.alert,tc:C.white}:ynCell(v));
hgrid(k,14,46,["Battery 85% or more, read in our own lab","12 month warranty on every phone","IMEI checked and data wiped, with a certificate","\"As good as new, with genuine parts\"","\"Cheaper than PhoneBazaar for 12 months\""],
  ["True on every phone","Says refurbished","Allowed words","Proof we hold","Verdict"],[["Yes","Yes","Yes","Yes","MAKE"],["Yes","Yes","Yes","Yes","MAKE"],["Yes","Yes","Yes","Yes","MAKE"],["No","n/a","No","No","DO NOT"],["No","n/a","Yes","No","DO NOT"]].map(r=>r.map(yc)),
  {lw:480,cw:124,rh:28,hh:46,name:"claims"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
