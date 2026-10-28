{ const s = await figma.getNodeByIdAsync("S4");
const share=Math.round(100/parseFloat(V.host_rows[0][2])), crowd=100-pctN(V.eff_bind_18);
skelAP(s,1,"2 / 5","THE CHALLENGE",290,"Rutile in binder scatters only "+share+"% of the light it would in air, and crowding at "+V.prem_pvc+" costs another "+crowd+"%: the binder, not the pigment, caps whiteness",
  "Source: team optical model "+V.hash+" (T4 to T8) | Asian Paints FY26 | DGTR Feb 2025, Aug 2026 | Calcutta HC Sep 2025 | CBIC 33/2025 | estimates A13, A21 to A23 | force ratings are team judgement");
rail(s,40,312,216,"THE BILL",C.alert); rail(s,40,540,216,"THE PHYSICS",C.primaryDeep); rail(s,40,768,220,"THE TRAP",C.primary);
const p1=pnl(s,92,312,440,216,"WHAT TiO2 COSTS ASIAN PAINTS",{tc:C.alert});
[[V.ap.base.spend,"a year at 15% of raw materials, estimate"],[V.ap.base.tonnes,"of TiO2 a year at ₹250 a kg, estimate"],[V.g_ref,"of TiO2 in each m² of premium white"]].forEach((r,i)=>{ const y=46+56*i;
  TL(p1,14,y,28,r[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:180,min:22}); sT(p1,200,y+2,226,18,r[1],{family:"Inter",style:"Semi Bold"}); });
const p2=pnl(s,544,312,380,216,"₹ CR A YEAR, AGAINST R&D");
cols(p2,14,46,352,160,["TiO2 bill","R&D","Our saving"],[{values:[2998,0,0],color:C.alert},{values:[0,124.9,0],color:C.primaryDeep},{values:[0,0,pctN(V.ap.base.net_cr.replace("₹","").replace(" Cr",""))],color:C.good}],{max:3300,bw:70,totals:["2,998","125",V.ap.base.net_cr.replace("₹","").replace(" Cr","")]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const p3=pnl(s,936,312,560,216,"THE DUTY CLOCK ON CHINESE TiO2");
addWireH(p3,40,520,102,C.ink,2.5);
[["Feb 2025","DGTR findings"],["May 2025","duty imposed"],["Sep 2025","court quashes"],["Dec 2025","CBIC halts duty"],["Aug 2026","new findings"]].forEach((r,i)=>{ const cx=56+112*i, hot=i===2||i===3;
  addEllipse(p3,cx-9,93,18,18,hot?C.alert:C.primary,C.ink,2); sTL(p3,0,60,18,r[0],{family:"Inter",style:"Bold",color:hot?C.alert:C.ink,centerAt:cx});
  sT(p3,cx-52,118,104,18,r[1],{family:"Inter",style:"Semi Bold",align:"CENTER"}); });
note(p3,14,172,532,"So what: ","57% of Indian demand came from China.");
const p4=pnl(s,1508,312,372,216,"DUTY ASKED, $ A TONNE");
[["LB Group",460],["12 others",510],["Shandong",563],["Gold Star",609],["All others",681]].forEach((r,i)=>{ const y=48+26*i, w=Math.round(124*r[1]/681);
  sTL(p4,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:136}); addRect(p4,156,y+3,w,18,i===4?C.alert:C.primary,C.ink,1);
  sTL(p4,164+w,y,18,"$"+r[1],{family:"Inter",style:"Bold"}); });
sT(p4,14,184,344,18,"Recommended, not yet in force",{family:"Inter",style:"Bold",color:C.alert});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const p5=pnl(s,92,540,520,216,"THE MEDIUM SETS THE SCATTERING");
const hv=V.host_num.map(r=>r[1]);
cols(p5,14,44,492,142,V.host_num.map(r=>r[0].toFixed(2)),[{values:hv.map((v,i)=>i===5?0:v),color:C.primary},{values:hv.map((v,i)=>i===5?v:0),color:C.alert}],{max:14,bw:46,totals:V.host_rows.map(r=>r[1])});
sT(p5,14,188,492,18,"Per µm³ of rutile: air 1.00, binder 1.49",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p6=pnl(s,624,540,520,216,"CROWDING COSTS EFFICIENCY, %");
const cr=V.crowd_num.filter(r=>r[2]!==null);
lcS(p6,14,46,492,160,[{values:cr.map(r=>r[1]),color:C.primary,label:"in binder",dy:-14},{values:cr.map(r=>r[2]),color:C.alert,label:"in air",dy:4}],cr.map(r=>r[0]+"%"),{yMin:75,yMax:100,yTicks:[80,90,100],padR:110});
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r]));
const reach=["S06","S07","S08","S09","S11"].filter(k=>SN[k][1]!==null).length;
const p7=pnl(s,1156,540,724,216,"FIVE FORCES ON A PAINT MAKER'S TiO2");
const RF={High:{f:HR[4],tc:C.white},Medium:{f:HR[2],tc:C.ink},Low:{f:HG[2],tc:C.ink}};
[["Supplier power","High","57% from China; duty in dispute"],["New entrants","High","Birla Opus: over 21% of capacity"],["Rivalry","High","JSW to buy up to 74.76% of Akzo India"],
 ["Buyer power","Medium","Repaint is 78% of decorative demand"],["Substitutes","Low",reach+" of 5 TiO2-free whites reach Y "+V.Y_target]].forEach((r,i)=>{ const y=48+33*i;
  sTL(p7,14,y+2,18,r[0],{family:"Inter",style:"Bold",maxW:186}); bx(p7,206,y,96,26,r[1],{fill:RF[r[1]].f,color:RF[r[1]].tc,fam:"Poppins",st:"Bold"});
  sTL(p7,316,y+2,18,r[2],{family:"Inter",style:"Semi Bold",maxW:394}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r]));
const p8=pnl(s,92,768,480,220,"THE USUAL FIXES, UNDER ONE TEST");
tbl(p8,14,46,[176,92,184],["Fix","Saved","Why it stops"],[["Hollow polymer",SN.S02[1]+"%","air sits in a shell"],["Nano-air binder",SN.S03[1]+"%","index barely falls"],["Hollow rutile",SN.S05[1]+"%","walls too thin"],["Yolk-shell TiO2","none","misses Y: "+SN.S04[2]],["High BaSO4","none","1.64, near binder"]],{hh:26,rh:28,name:"fixes",align:["LEFT","CENTER","LEFT"]});
const p9=pnl(s,584,768,600,220,"AIR GAP: TiO2 GAINS, THE FILM LOSES");
lcS(p9,14,44,572,172,[{values:V.halo_rows.map(r=>parseFloat(r[1])),color:C.primary,label:"per µm³ TiO2",dy:0},{values:V.halo_rows.map(r=>parseFloat(r[2])),color:C.alert,label:"per µm³ film",dy:-10}],V.halo_rows.map(r=>r[0].replace(" nm","")),{yMin:0,yMax:30,yTicks:[0,10,20,30],padR:140,padL:44});
const c=layered(s,1196,768,684,220,C.primaryDeep,"CARD: where the air lives");
TL(c,14,6,22,"WHERE SHOULD THE AIR LIVE",{color:C.accent,maxW:656});
const halo=Math.round(parseFloat(V.halo_rows[0][2])/parseFloat(V.halo_rows[4][2]));
[["Inside each particle: ","its own pocket costs "+halo+"x the film"],["In the binder: ","closed nano-air saves only "+SN.S03[1]+"% of TiO2"],["In the film: ","one shared air network costs nothing"]].forEach((r,i)=>sRT(c,14,44+30*i,656,18,r[0],r[1],{color:C.white,leadColor:C.accent}));
T(c,14,140,656,22,"So the air has to live in the film, not in the particle.",{family:"Poppins",style:"Bold",color:C.accent});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
