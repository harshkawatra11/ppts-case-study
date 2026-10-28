{ const s = await figma.getNodeByIdAsync("S5");
skelAP(s,2,"3 / 5","WHY IT IS UNIQUE",320,"We ran 12 white-film designs through one model: no TiO2-free design reaches premium brightness, and only an air network under a seal coat saves more than 30% of TiO2",
  "Source: team optical model "+V.hash+" (T8, same targets for all 12) | prior art: US5147940A, Dow EVOQUE, Imerys Celtix, Mandal et al. 2018, US9636706B2 | Lemcoff et al. 2023 | research sections 11 to 13");
rail(s,40,312,444,"THE SCREEN",C.primaryDeep); rail(s,40,768,220,"THE VERDICT",C.alert);
const NAME={S01:"Rutile in binder (premium today)",S02:"Rutile plus hollow polymer spheres",S03:"Rutile in a nano-air binder",S04:"Rutile in its own air pocket",S05:"Hollow rutile spheres",S06:"Zinc sulfide, no TiO2",S07:"Zirconia, no TiO2",S08:"Barium sulfate, high loading",S09:"Organic crystals (shrimp-eye type)",S10:"Air network under a seal coat (ours)",S11:"Air network, no TiO2 at all",S12:"Air network with organic crystals"};
const FAM={S01:"Reference",S02:"Commercial",S03:"Commercial",S04:"Particle",S05:"Particle",S06:"Substitute",S07:"Substitute",S08:"Substitute",S09:"Substitute",S10:"Film",S11:"Film",S12:"Film"};
const yt=parseFloat(V.Y_target), cm=parseFloat(V.CR_min);
const cells=V.screen_rows.map(r=>{ const miss=r[4]==="not reached", y=parseFloat(r[6]), cr=parseFloat(r[7]);
  const sv=miss?{t:"n/a",f:C.alertTint,tc:C.alert}:Object.assign(heatG(pctN(r[5]),0,80,r[0]==="S10"),{t:r[5]});
  const vd=r[0]==="S01"?{t:"Reference",f:C.tint}:(r[0]==="S10"?{t:"Keep",f:C.primaryDeep,tc:C.accent}:(r[0]==="S12"?{t:"Later",f:C.accentTint}:{t:"Drop",f:C.alertTint,tc:C.alert}));
  return [{t:FAM[r[0]],f:FAM[r[0]]==="Film"?C.tint:C.white},miss?{t:"misses",f:C.alertTint,tc:C.alert}:{t:r[4],f:C.white},sv,
    y>=yt-0.05?{t:r[6],f:C.goodTint,tc:C.good}:{t:r[6],f:HR[Math.min(4,1+Math.floor((yt-y)/7))],tc:yt-y>=21?C.white:C.ink},
    cr>=cm?{t:r[7],f:C.goodTint,tc:C.good}:{t:r[7],f:C.alertTint,tc:C.alert},vd]; });
const p1=pnl(s,92,312,1180,444,"TWELVE DESIGNS, ONE TEST, LEAST TiO2 WINS");
hgrid(p1,14,46,V.screen_rows.map((r,i)=>(i+1)+"  "+NAME[r[0]]),["Family","TiO2 a m²","Saved","Y","CR","Verdict"],cells,{lw:440,cw:118,rh:26,hh:28,corner:"Design",name:"screen"});
[["Reference: 1",170],["Commercial 2: 0 kept",240],["Particle 2: 0 kept",230],["Substitute 4: 0 kept",250],["Film 3: 2 kept",210]].reduce((x,b,i)=>{ bx(p1,x,388,b[1],26,b[0],{fill:i===4?C.goodTint:C.surfaceAlt}); return x+b[1]+12; },14);
fine(p1,14,418,1152,"Design 12 saves more (81%) but uses an unverified pigment, kept for horizon 3, not this recommendation.");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const p2=pnl(s,1284,312,596,196,"THE TEST AND THE MODEL");
sRT(p2,14,46,568,18,"Pass: ","Y "+V.Y_target+" or more and CR "+V.CR_min+" or more, two 30 µm coats over black and white; the least TiO2 wins.",{leadColor:C.alert});
[["Mie: each particle",0,0],["Percus-Yevick: crowding",1,0],["Kubelka-Munk: two coats",0,1],["CIE D65: colour and CR",1,1]].forEach(r=>bx(p2,14+290*r[1],100+48*r[2],278,40,r[0],{fill:C.primaryDeep,color:C.white}));
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r]));
const yt=parseFloat(V.Y_target);
const p3=pnl(s,1284,520,596,236,"HOW FAR EACH MISS FALLS SHORT, Y");
[["Barium sulfate","S08"],["Air, no TiO2","S11"],["Organic crystals","S09"],["Yolk-shell","S04"],["Zirconia","S07"],["Zinc sulfide","S06"]].forEach((r,i)=>{ const y=46+25*i, gap=Math.round((yt-SN[r[1]][2])*10)/10, w=Math.max(3,Math.round(300*gap/30));
  sTL(p3,14,y,18,r[0],{family:"Inter",style:"Bold",maxW:166}); addRect(p3,190,y+3,w,18,C.alert,C.ink,1); sTL(p3,198+w,y,18,gap.toFixed(1),{family:"Inter",style:"Bold",color:C.alert}); });
note(p3,14,200,568,"BaSO4, ","the brief's own example, misses by the most.");
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const SN=Object.fromEntries(V.screen_num.map(r=>[r[0],r]));
const p4=pnl(s,92,768,600,220,"FIVE CHALLENGES, THREE ROUTES");
const cell=t=>t==="Yes"?{t,f:C.goodTint,tc:C.good}:(t==="Part"?{t,f:C.accentTint,tc:C.ink}:(t==="Test"?{t,f:C.tint,tc:C.primaryDeep}:{t,f:C.alertTint,tc:C.alert}));
hgrid(p4,14,46,["Opacity","Durability, yellowing","Dispersion","Supply, economics","Manufacturing"],["Pigment","In particle","In film"],
  [["No","Part","Yes"],["Part","Part","Test"],["No","Part","Yes"],["No","Part","Yes"],["No","No","Yes"]].map(r=>r.map(cell)),{lw:212,cw:120,rh:28,hh:28,corner:"Route for",name:"routes"});
const p5=pnl(s,704,768,610,220,"PRIOR ART: WHO HAS WHICH PIECE");
hgrid(p5,14,46,["Hollow polymer spheres","Spacer-coated TiO2, Dow","Above-CPVC extenders","Porous cooling paint","Multilayer, TiO2-free","This design"],["Air","Seal","TiO2","Rule"],
  [["Part","No","Yes","No"],["No","No","Yes","No"],["Yes","No","Yes","No"],["Yes","No","No","No"],["Part","Yes","No","No"],["own","own","own","own"]].map(r=>r.map(ynCell)),{lw:250,cw:83,rh:24,hh:24,corner:"Prior art",name:"prior"});
const c=layered(s,1326,768,554,220,C.primaryDeep,"CARD: conclusively");
TL(c,14,6,24,"THE TAKEAWAY",{color:C.accent,maxW:526});
sT(c,14,46,526,18,"No new pigment out-scatters rutile in binder: zinc sulfide, the closest, misses brightness ("+SN.S06[2]+" against "+V.Y_target+"). Air inside each particle costs too much film. The gain is in where the film keeps its air.",{family:"Inter",style:"Semi Bold",color:C.white});
sT(c,14,144,526,18,"“biologically benign replacements for artificial scatterers like TiO2” Lemcoff et al., Nature Photonics, 2023",{family:"Inter",style:"Bold",color:C.accent});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
