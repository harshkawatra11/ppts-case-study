{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 6","THE PROBLEM",330,V.h3,V.src[2]);
rail(s,64,310,240,"THE SHELF",C.alert); rail(s,64,562,232,"THE WASTE",C.primaryDeep); rail(s,64,806,226,"ROOT CAUSE",C.primary);
// band 1: availability, the facility pyramid, tracer conditions
const p1=pnl(s,116,310,600,240,"AVAILABILITY OF KEY MEDICINES, FOUR STUDIES, %");
const BW=290, BX=250;
[["Punjab, 80 facilities",45.2,C.alert],["Haryana, same survey",51.1,C.alert],["Puducherry state PHCs",72.2,C.accent],["Gadag, Karnataka",74.2,C.accent],["Puducherry central PHCs",77,C.primary]].forEach((r,i)=>{ const y=50+30*i;
  sTL(p1,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:226}); addRect(p1,BX,y+3,BW*r[1]/100,18,r[2],C.ink,1);
  sTL(p1,BX+BW*r[1]/100+6,y,18,r[1]+"%",{family:"Inter",style:"Bold"}); });
note(p1,14,204,572,"Range: ","45% to 80% by state; up to 1 in 3 items missing");
const p2=pnl(s,728,310,520,240,"38,241 PHCs AND CHCs ARE THE SHELF");
[["714","District hospitals",70,HG[2],C.ink],["1,340","Sub-divisional hospitals",110,HG[2],C.ink],["6,359","CHCs, first referral",150,C.accent,C.ink],["31,882","PHCs, main medicine shelf",190,C.accent,C.ink],["1,69,615","Sub-centres, basic list",230,HG[4],C.white]].forEach((r,i)=>{
  const y=50+36*i; bx(p2,129-r[2]/2,y,r[2],32,r[0],{fill:r[3],color:r[4],size:18,pad:2}); sTL(p2,260,y+5,18,r[1],{family:"Inter",style:"Bold",maxW:246}); });
const p3=pnl(s,1260,310,596,240,"WHERE A MISSING DRUG COSTS MOST");
tbl(p3,14,46,[130,130,308],["Condition","Tracer drug","Burden in India"],[["Snakebite","Antivenom","58,000 deaths a year (eLife)"],["Rabies","Anti-rabies","5,726 deaths a year (WHO)"],["Childbirth","Oxytocin","MMR 93 per 1,00,000 births"],["Dengue","Fluids","signal 4 to 6 weeks pre-peak"]],{hh:26,rh:30,name:"tracer"});
note(p3,14,200,568,"Duration: ","60% of Haryana's gaps last 3 to 6 months");
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S3");
// band 2: audited expiry, per-district arithmetic, who pays
const p4=pnl(s,116,562,560,232,"CAG: EXPIRED IN STATE STORES, ₹ CR");
cols(p4,14,46,440,180,["Telangana","Odisha","Karnataka","Haryana"],[{color:C.alert,values:[390.26,168,23.03,14.52]}],{max:420,bw:56,totals:["390.26","168","23.03","14.52"]});
note(p4,250,52,296,"","Telangana also issued ₹17.13 Cr of drugs with 1 to 89 days of shelf life left",{fill:C.alertTint});
const p5=pnl(s,688,562,520,232,"PER DISTRICT, EVERY YEAR");
tbl(p5,14,46,[180,140,172],["Step","Telangana","Odisha"],[["Expired (audited)","₹390.26 Cr","₹168.00 Cr"],["Years audited","6.00","5.83"],["Per year","₹65.04 Cr","₹28.80 Cr"],["Districts","33","30"],["Per district a year","₹1.97 Cr","₹0.96 Cr"]],
  {hh:26,rh:24,name:"perdistrict",align:["LEFT","RIGHT","RIGHT"],fills:[null,null,null,null,C.tint]});
note(p5,14,198,492,"So what: ","₹12 L repays at 6.1% to 12.5% of this");
const p6=pnl(s,1220,562,636,232,"WHO PAYS WHEN THE SHELF IS EMPTY");
donut(p6,90,135,130,[{v:43.4,c:C.alert},{v:56.6,c:C.tint}],0.55);
TL(p6,0,121,22,"43.4%",{color:C.alert,centerAt:90}); sTL(p6,0,204,18,"out of pocket",{family:"Inter",style:"Bold",centerAt:90});
tbl(p6,180,46,[250,172],["Measure","Value"],[["Out of pocket, 2013-14","64.2%"],["Out of pocket, 2022-23","43.4%"],["Pharmacy share of CHE","19.35% to 21.19%"],["Buy privately, Odisha","over 70%"],["CHC specialists missing","79.9%"]],{hh:26,rh:26,name:"oop",align:["LEFT","RIGHT"]});
// band 3: issue tree and five whys
const p7=pnl(s,116,806,860,226,"FIVE BRANCHES, AND WHAT A DISTRICT VIEW FIXES");
const r=addFrame(p7,14,46,170,170,C.primaryDeep,C.ink,2,"ROOT"); sT(r,10,10,150,18,"Why is a tracer drug missing when the officer checks the shelf",{family:"Inter",style:"Bold",color:C.white});
[["Supply undersized or late at the source","Not fixed",C.alertTint],["Supply exists, but in the wrong facility","Fixed",HG[3]],["Records lag the physical shelf by days","Partly",C.accentTint],
 ["Demand spikes the plan did not expect","Partly",C.accentTint],["Nobody with authority sees it in time","Fixed",HG[3]]].forEach((b,i)=>{ const y=46+36*i;
  elb(p7,184,131,214,y+15,C.ink,2); bx(p7,214,y,470,30,(i+1)+". "+b[0],{fill:C.white,align:"LEFT",pad:10}); bx(p7,696,y,150,30,b[1],{fill:b[2]}); });
const p8=pnl(s,988,806,868,226,"FIVE WHYS ON ONE STOCK-OUT");
["ARV ran out: three bites in a week drained the stock","The register is paper, checked when there is time","The store cannot see which of 49 PHCs runs low","Facility records are never added up district-wide","Adding them up each morning is nobody's job"].forEach((w,i)=>{
  const x=14+168*i; const f=addFrame(p8,x,48,156,140,i===4?C.accent:C.white,C.ink,2,"WHY");
  TL(f,8,2,22,"WHY "+(i+1),{color:C.primaryDeep}); sT(f,8,36,140,18,w,{family:"Inter",style:"Semi Bold"});
  if(i<4) arrow(p8,x+157,118,x+167,118,C.ink,2); });
note(p8,14,194,840,"Root cause: ","the medicine is often already inside the district; no one is tasked to see it.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
