{ const s = await figma.getNodeByIdAsync("S8");
skelAP(s,-1,"A / 1","ANNEXURE",220,"Annexure: one optical model behind every number; "+V.checks+" checks pass, and the answer holds from "+V.sav_bear+" to "+V.sav_bull+" of TiO2 saved",
  "Source: model tables T1 to T16 | research Appendix A bibliography and Appendix B tables | model "+V.hash,{labels:RIBANX});
const p1=pnl(s,40,312,600,330,"A1 MODEL CHAIN AND CHECKS");
[["Mie, multilayer","particles"],["Percus-Yevick","crowding"],["Kubelka-Munk","two coats"],["CIE D65, 2 degree","colour"],["Optimiser","least TiO2"]].forEach((r,i)=>{
  bx(p1,14,48+52*i,190,40,r[0],{fill:i===4?C.accent:C.primaryDeep,color:i===4?C.ink:C.white,fam:"Poppins",st:"Bold"});
  sTL(p1,212,56+52*i,18,r[1],{family:"Inter",style:"Semi Bold",maxW:104}); });
bl18(p1,322,48,264,[["Mie: ","Bohren and Huffman benchmark within 0.1%"],["Layers: ","two-layer sphere equals a solid one"],["Crowding: ","Percus-Yevick limit reproduced"],
  ["Films: ","Kubelka-Munk thick-film limit exact"],["Run: ","hash "+V.hash+", "+V.checks+" pass"]],{gap:6});
const p2=pnl(s,652,312,760,330,"A2 ASSUMPTIONS, BEAR TO BULL");
const AS=[["A05  Base-coat porosity","25%","35%","45%"],["A07  Seal coat in the pores","25%","10%","0%"],["A08  What surrounds rutile","binder-wetted","air, binder","air"],["A28  Minimum seal coat","20 µm","15 µm","12 µm"],
  ["A13  TiO2 price a kg","₹200","₹250","₹300"],["A23  TiO2 share, materials","10%","15%","20%"],["A24  Addressable share","30%","40%","50%"],["A25  Adoption by year 5","20%","40%","60%"]];
hgrid(p2,14,46,AS.map(r=>r[0]),["Bear","Base","Bull"],AS.map(r=>[{t:r[1],f:C.alertTint,tc:C.alert},{t:r[2],f:C.white,tc:C.ink},{t:r[3],f:C.goodTint,tc:C.good}]),{lw:300,cw:140,rh:28,hh:26,corner:"ID and assumption",name:"assumptions"});
sT(p2,14,302,732,18,"Bear is the value least favourable to the recommendation.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p3=pnl(s,1424,312,456,330,"A2 WHAT WOULD CHANGE OUR MIND");
bl18(p3,14,48,428,[["Porosity: ","measured outside 25 to 45%"],["Surroundings: ","binder wets rutile; saving falls to about a fifth"],["Seal coat: ","under 12 to 20 µm fails to form a skin"],
  ["Patent: ","our exact combination already claimed"],["Prices: ","TiO2 price or share outside bear to bull"]],{gap:8,dot:C.alert,lc:C.alert});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S8");
const p4=pnl(s,40,654,920,334,"A3 SENSITIVITY, NEAR-INFRARED AND ONE-INPUT MOVES");
const X0=240, W=280, X=v=>X0+W*v/70;
V.tornado_num.forEach((r,i)=>{ const y=56+40*i, lo=Math.min(r[3],r[4]), hi=Math.max(r[3],r[4]);
  sTL(p4,14,y,18,r[0].replace("What surrounds base-coat particles","What surrounds rutile").replace("Seal-coat infiltration into pores","Seal coat in pores"),{family:"Inter",style:"Bold",maxW:220});
  addRect(p4,X(lo),y+2,Math.max(3,X(hi)-X(lo)),20,C.tint,C.ink,1.5); sTL(p4,X(lo)-44,y,18,lo+"%",{family:"Inter",style:"Bold",color:C.primaryDeep}); sTL(p4,X(hi)+6,y,18,hi+"%",{family:"Inter",style:"Bold",color:C.primaryDeep}); });
addRect(p4,X(V.sav_num)-1,48,2,206,C.alert);
sTL(p4,14,264,18,"Base "+V.sav+"; bars span one input, low to high",{family:"Inter",style:"Bold",color:C.alert,maxW:540});
tbl(p4,574,46,[130,95,95],["Wavelength","Premium","Ours"],V.nir_rows,{hh:26,rh:26,name:"nir",align:["LEFT","CENTER","CENTER"]});
const net=parseFloat(V.ap.base.net_cr.replace(/[^0-9.]/g,""));
tbl(p4,574,190,[190,130],["If this moves","₹ Cr a year"],[["Adoption 20%",Math.round(net*0.5)+" net"],["Adoption 60%",Math.round(net*1.5)+" net"],["TiO2 at ₹200 a kg","151 on TiO2"],["TiO2 at ₹300 a kg","227 on TiO2"]],{hh:26,rh:26,name:"moves",align:["LEFT","CENTER"]});
const p5=pnl(s,972,654,908,334,"A4 SOURCES AND SHORT FORMS");
nm(T(p5,14,46,500,16,"1. Alchemy Case Study 1 brief and references\n2. Bohren and Huffman, 1983 (Mie benchmark)\n3. Wertheim, Phys. Rev. Lett. 10, 321, 1963\n4. Kubelka and Munk 1931; Saunderson, JOSA 32, 727, 1942\n5. Devore, JOSA 41, 416, 1951; Sultanova et al. 2009\n6. CIE 15:2018 colorimetry\n7. Burresi et al., Sci. Rep. 4, 6075, 2014\n8. Lemcoff et al., Nature Photonics, 2023\n9. Asian Paints Annual Report FY2025-26\n10. DGTR final findings, TiO2 from China, 2025 and 2026\n11. Calcutta High Court WPO 148 of 2025; CBIC 33/2025\n12. US5147940A, US9636706B2, EP0538411\n13. Team IdeaForge research and model "+V.hash,{family:"Inter",style:"Semi Bold"}),"BIBLIO");
sT(p5,528,46,366,18,"TiO2 titanium dioxide; PVC pigment volume concentration; CPVC critical PVC; PCC precipitated calcium carbonate; CR contrast ratio; Y luminous reflectance; L*, b* CIELAB lightness, yellowness; NIR near-infrared; µm micrometre; DGTR Directorate General of Trade Remedies; FIB-SEM focused-ion-beam microscopy; H1 to H3 horizons",{family:"Inter",style:"Semi Bold"});
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
