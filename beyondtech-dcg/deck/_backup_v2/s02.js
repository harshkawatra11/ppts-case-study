{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 8","EXECUTIVE SUMMARY",380,V.f2,"Source: case brief B04 to B19 | beyondtech.org.in, Oct 2026 | college_scorecard.csv (32 colleges) | model "+V.hash+", tables T3, T4, T6, T8, T10, T11, T12 | the fee (A01) is an assumption");
// ---- BAND 1: THE CHOICE (skill archetype H: should NOT do the obvious, should do the alternative, three numbered reasons each) ----
rail(s,64,316,348,"THE CHOICE",C.primaryDeep);
const zt=zone(s,116,316,1740,348,"choice");
TL(zt,0,0,22,"The task: grow DTU on a stated organic and paid budget, then enter 3 to 4 Tier-1 campuses with no founder on the ground.",{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:1740});
const col=(x,head,fill,num,rows)=>{ addChip(zt,x,40,520,44,head,fill,C.white,22);
  rows.forEach((r,i)=>{ const y=98+i*84; TL(zt,x,y+12,34,r[0],{family:"Poppins",style:"ExtraBold",color:num,maxW:160,min:26});
    T(zt,x+172,y,348,22,r[1]); if(i<2) addRect(zt,x,y+81,520,1.5,C.surface); }); };
col(0,"NOT THIS: BUY REACH FIRST",C.alert,C.alert,[
 [V.cold[0],"per enrolment on cold Meta ads; LinkedIn costs "+V.cold[1]+". The assumed fee is "+V.fee+"."],
 [V.ref,"already arrive by referral and the brief calls recall strong, so awareness is not the gap."],
 [V.paid_cap,"of "+V.enrol+" enrolments is all four paid channels can reach, at "+V.paid_each+" each."]]);
col(1220,"THIS: DISTRIBUTE PROOF FIRST",C.good,C.good,[
 [V.curve[0][2],"per enrolment from the gated library. Organic: "+V.org_pct0+" of cash, "+V.org_e_pct0+" of enrolments."],
 ["50+","selections are proof that travels where the same recruiters hire: "+V.screen[3]+" of "+V.screen[0]+" colleges fit."],
 [V.cost1,"opens a campus, cash positive in season 1. Founder hours fall from "+V.hours[0]+" to "+V.hours[3]+"."]]);
// centre exhibit: three ways to spend at DTU against the 165 target
const cx=552, B0=cx+170, BW=240, sc=BW/parseFloat(V.paths[2][1]);
TL(zt,cx,40,24,"Neither layer alone reaches "+V.enrol,{color:C.primaryDeep,maxW:636});
V.paths.forEach((p,i)=>{ const y=92+i*56; TL(zt,cx,y+12,22,p[0],{family:"Inter",style:"Bold",maxW:160});
  let bx=B0; [[p[4],C.primary],[p[5],C.primaryDeep]].forEach(sg=>{ if(sg[0]<=0) return; const w=sg[0]*sc; addRect(zt,bx,y+8,w,36,sg[1],C.ink,2);
    const t=TL(zt,0,y+9,22,sg[0].toFixed(1),{color:C.white}); t.x=bx+w/2-t.width/2; bx+=w; });
  if(bx<B0+BW-2) ghost(zt,bx,y+8,B0+BW-bx,36,C.alert);
  TL(zt,B0+BW+14,y,22,p[3],{family:"Inter",style:"Bold"}); TL(zt,B0+BW+14,y+26,22,p[6],{family:"Inter",style:"Semi Bold",color:i===2?C.good:C.alert}); });
dashedV(zt,B0+BW,86,174,C.alert,3);
T(zt,cx,268,636,22,"Organic alone runs out of reach at "+V.org_cap+". Paid alone costs "+V.paid_x+" times more per head and still stops at "+V.paid_cap+".",{family:"Inter",style:"Bold"});
fine(zt,cx,326,636,"Paid only: four paid channels at full modelled reach, "+V.paid_cash+" (T3).");
dashedV(s,652,360,300,C.ink,2); dashedV(s,1320,360,300,C.ink,2);
// ---- BAND 2: THE PLAN IN NUMBERS ----
dashedH(s,64,673,1792,C.ink,2);
rail(s,64,684,346,"THE PLAN IN NUMBERS",C.primary);
const z1=zone(s,116,684,560,346,"enrolment bridge");
TL(z1,0,0,24,"From "+V.now+" to "+V.total_enrol+" enrolments in twelve months",{color:C.primaryDeep,maxW:560});
waterfall(z1,0,36,560,310,[["a",V.bridge[0]],["b",V.bridge[1]],["c",V.bridge[2]],["d",V.bridge[3]]],{min:0,max:270,dp:0,labelH:66,labelDy:8,labels:["DTU today","DTU plan","4 cohorts of "+V.cohort20,"Month 12"]});
dashedV(s,692,692,330,C.ink,2);
const z2=zone(s,708,684,620,346,"spend and scenarios");
TL(z2,0,0,24,V.total_spend+" in total, two thirds of it at DTU",{color:C.primaryDeep,maxW:620});
segBar(z2,0,44,620,44,[{v:V.spend_parts[0],c:C.primaryDeep,t:"DTU "+V.budget_lk},{v:V.spend_parts[1],c:C.primary,t:V.ncamp+" × "+V.cost1}]);
wrapTable(z2,0,104,[164,152,152,152],["12 months","Bear","Base","Bull"],[["Enrolments"].concat(V.t12.map(r=>r[1])),["Spend"].concat(V.t12.map(r=>r[2])),["Contribution"].concat(V.t12.map(r=>r[3]))],{rowH:38,headerH:40,colors:[C.ink,C.alert,C.primaryDeep,C.good],name:"twelve months"});
T(z2,0,268,620,22,"Each campus costs "+V.cost1+" to open and nets "+V.t10[1][4]+" in season 1, base case.",{family:"Inter",style:"Bold",color:C.primaryDeep});
fine(z2,0,326,620,"Bear is a stress case, not a budget (T6, T12).");
dashedV(s,1344,692,330,C.ink,2);
const z3=zone(s,1360,684,496,346,"picks");
TL(z3,0,0,24,V.screen[3]+" of "+V.screen[0]+" colleges clear the screen",{color:C.primaryDeep,maxW:496});
const PK=V.grid.filter(r=>r[4].indexOf("PICK")===0);
hBars(z3,0,44,496,PK.map((r,i)=>({label:r[0],value:parseFloat(r[2]),text:r[2],color:i<2?C.primaryDeep:C.primary})),{labelW:236,rowH:40,barH:26,valueW:64,max:3.2});
const mx=248+184*parseFloat(V.median)/3.2; dashedV(z3,mx,40,168,C.alert,2.5);
TL(z3,0,206,22,"median "+V.median,{family:"Inter",style:"Bold",color:C.alert,centerAt:mx});
let lx=lg(z3,0,236,C.primaryDeep,"Jan 2027"); lg(z3,lx,236,C.primary,"Summer 2027");
rt(z3,0,272,496,22,"First step by 31 October 2026: ","gate the 8 PDFs and publish a fee band.",{leadColor:C.primary});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
