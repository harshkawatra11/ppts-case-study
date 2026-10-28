{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 4","THE SITUATION",320,V.h1x,V.src2x,{labels:RIBN});
rail(s,64,310,240,"TODAY",C.primaryDeep); rail(s,64,562,232,"MARKET",C.alert); rail(s,64,806,226,"THE CHALLENGE",C.primary);
// band 1: unit economics
kpi(s,116,310,268,112,"100","petrol bikes today",{size:40,ny:2,ly:66});
kpi(s,392,310,268,112,"₹"+V.rev0+" Cr","revenue a year",{size:40,ny:2,ly:66});
kpi(s,116,438,268,112,"₹"+V.rr0+" L","contribution a year",{size:40,ny:2,ly:66,color:C.alert});
kpi(s,392,438,268,112,V.margin0,"of revenue kept",{size:40,ny:2,ly:66,color:C.alert});
const p1=pnl(s,676,310,472,240,"ONE BIKE-MONTH, ₹ THOUSAND");
wf(p1,14,46,444,156,V.wf.map(w=>[w[0],w[1]/1000]),{min:0,max:28,dp:1,lh:28,bw:62});
note(p1,14,204,444,"",V.wf_note);
const p2=pnl(s,1160,310,696,240,"FIVE WAYS TO RUN ONE BIKE, ₹ A MONTH");
tbl(p2,14,46,[236,110,110,110,102],["Bike","Revenue","Vehicle","Left","Margin"],V.ue2,{hh:26,rh:26,name:"unit",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[C.alertTint,C.white,C.surfaceAlt,C.tint,C.tint]});
note(p2,14,206,668,"SO WHAT: ",V.ue_note);
// band 2: market, five forces, clients
const p3=pnl(s,116,562,572,232,"LAST-MILE MARKET, INDIA, USD BN");
cols(p3,14,46,240,180,["2025","2026","2031"],[{color:C.primary,values:[3.15,3.66,7.57]}],{max:8,bw:52,totals:["3.15","3.66","7.57"]});
sTL(p3,22,50,18,"15.6% CAGR",{family:"Inter",style:"Bold",color:C.alert});
V.mkt.forEach((m,i)=>{ const y=50+i*58; sTL(p3,268,y,26,m[0],{family:"Poppins",style:"ExtraBold",color:i===2?C.alert:C.primary,maxW:122}); sT(p3,396,y+2,162,18,m[1],{family:"Inter",style:"Bold"}); });
const p4=pnl(s,700,562,572,232,"FIVE FORCES: BUYERS HOLD THE POWER");
const PX=[14,198,382], PY=[46,108,170], RF={H:HR[3],M:HR[2],L:HG[2],X:C.primaryDeep,C:C.surfaceAlt,S:C.accentTint};
V.porter.forEach(q=>{ const dk=q[4]==="X", f=addFrame(p4,PX[q[1]],PY[q[0]],176,56,RF[q[4]],C.ink,dk?2.5:1.5,"FORCE");
  if(q[3]){ sT(f,6,4,164,18,q[2],{family:"Inter",style:"Bold",align:"CENTER",color:dk?C.white:C.ink}); sT(f,6,28,164,18,q[3],{family:"Poppins",style:"Bold",align:"CENTER",color:dk?C.accent:C.ink}); }
  else sT(f,6,6,164,18,q[2],{family:"Inter",style:q[4]==="S"?"Bold":"Semi Bold",align:"CENTER",color:q[4]==="S"?C.alert:C.ink}); });
const p5=pnl(s,1284,562,572,232,"5 OF 6 BIG CLIENTS HAVE EV TARGETS");
tbl(p5,14,46,[128,186,230],["Client","EV target","Progress"],V.clients6,{hh:26,rh:26,name:"clients",fills:[null,null,null,null,null,C.alertTint]});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S2");
const p6=pnl(s,116,806,600,226,"THE POLICY CLOCK IS ALREADY RUNNING");
addRect(p6,30,90,540,3,C.ink);
V.policy5.forEach((q,i)=>{ const cx=70+i*115; addEllipse(p6,cx-10,81,20,20,q[2]?C.alert:C.primary,C.ink,2);
  sTL(p6,0,50,18,q[0],{family:"Poppins",style:"Bold",centerAt:cx,color:q[2]?C.alert:C.ink}); sT(p6,cx-56,106,112,18,q[1],{family:"Inter",style:"Bold",align:"CENTER"}); });
note(p6,14,160,572,"SO WHAT: ",V.policy_note);
const p7=pnl(s,728,806,1128,226,"THE KEY QUESTION, BROKEN DOWN: A MECE ISSUE TREE");
bx(p7,14,52,212,164,V.tree_root,{fill:C.primaryDeep,color:C.white,size:22,pad:10});
const BC=[C.alert,C.primary,C.blueDeep], BY=[52,110,168];
V.tree.forEach((b,i)=>{ bx(p7,262,BY[i],240,50,b[0],{fill:BC[i],color:C.white,fam:"Poppins",size:20}); elb(p7,226,134,262,BY[i]+25,C.ink,2);
  b[1].forEach((leaf,j)=>{ const ly=BY[i]+j*26; const lf=addFrame(p7,526,ly,588,24,j?C.surfaceAlt:C.white,C.ink,1,"LEAF"); sT(lf,8,1,572,18,leaf,{family:"Inter",style:"Semi Bold"}); elb(p7,502,BY[i]+25,526,ly+12,BC[i],2); }); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
