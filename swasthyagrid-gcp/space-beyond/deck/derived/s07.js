{ const s = await figma.getNodeByIdAsync("S7");
skelBT(s,5,"6 / 6","IMPACT AND FUTURE SCOPE",460,V.h7,V.src[6]);
rail(s,64,310,240,"THE NUMBER",C.primaryDeep); rail(s,64,562,232,"HOW IT HAPPENS",C.primary); rail(s,64,806,226,"FUTURE SCOPE",C.alert);
// band 1: the moneyshot, the model, sensitivity
const m=layered(s,116,310,620,233,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,18,8,22,"STOCK-OUT DAYS AVOIDED A YEAR, BASE CASE",{color:C.accent,maxW:584});
TL(m,18,40,72,"1.36 crore",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:584});
[["72.2% to 86.1%","availability",18,224],["17,412","a district a year",262,166],["355","a facility a year",438,164]].forEach(r=>{
  TL(m,r[2],152,24,r[0],{family:"Poppins",style:"Bold",color:C.white,maxW:r[3]}); sTL(m,r[2],190,18,r[1],{family:"Inter",style:"Bold",color:C.tint,maxW:r[3]}); });
const p1=pnl(s,748,310,560,240,"THE MODEL, ONE LINE AT A TIME");
tbl(p1,14,46,[40,330,162],["#","Step","Value"],[["1","PHCs + CHCs","38,241"],["2","× tracer medicines","7"],["3","× days in a year","365"],["4","× share of days out (1 − 72.2%)","27.8%"],["5","= baseline stock-out days","2.72 crore"],["6","× share removed (base)","50%"],["7","= days avoided a year","1.36 crore"]],
  {hh:26,rh:23,name:"model",align:["LEFT","LEFT","RIGHT"],fills:[null,null,null,null,C.surface,null,C.tint]});
const p2=pnl(s,1320,310,536,240,"SENSITIVITY: EVERY CELL CLEARS 58.6 LAKH");
hgrid(p2,14,46,["66% today","72.2% (mid)","80% today"],["30% cut","50% cut","80% cut"],[[99.7,166.1,265.8],[81.5,135.8,217.3],[58.6,97.7,156.3]].map((r,i)=>r.map((v,j)=>heatG(v,58.6,265.8,i===1&&j===1))),{lw:150,cw:110,rh:40,hh:30,corner:"Availability",name:"sens"});
note(p2,14,204,508,"","Lakh stock-out days avoided a year; base cell 135.8");
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S7");
// band 2: theory of change, scenarios
const p3=pnl(s,116,562,760,232,"THEORY OF CHANGE: FROM A DATA READ TO A STOCKED SHELF");
[["INPUTS","daily stock, bed and staff data states hold"],["ACTIVITIES","flag, propose, approve, move, confirm"],["OUTPUTS","transfers approved the day they are proposed"],["OUTCOMES","fewer stock-out days and less expiry"],["IMPACT","emergency drugs on the shelf when needed"]].forEach((r,i)=>{
  const x=14+146*i; step(p3,x,48,136,160,r[0],null,r[1],i===4?{hfill:C.accent,hc:C.ink,fill:C.accentTint,hs:18}:{hs:18}); if(i<4) arrow(p3,x+137,128,x+145,128,C.ink,2); });
const p4=pnl(s,888,562,968,232,"THREE SCENARIOS AND WHAT EACH ONE ASSUMES");
tbl(p4,14,46,[110,150,130,550],["Case","Days avoided","Availability","Why this cut"],[["Bear, 30%","81.5 lakh","80.5%","a floor well below any reported result"],["Base, 50%","1.36 crore","86.1%","half of eVIN's reported 80% cut in stock-outs"],["Bull, 80%","2.17 crore","94.4%","eVIN's own result, used as a ceiling"]],
  {hh:26,rh:32,name:"scen",fills:[null,C.tint,null]});
sRT(p4,14,178,912,18,"Per district: ","17,412 days a year across about 49 facilities; per facility, 355 days",{leadColor:C.primaryDeep});
sRT(p4,14,204,912,18,"Limit: ","a logistics estimate for 7 tracer medicines, not a count of lives saved",{leadColor:C.alert});
// band 3: people planet profit, horizons, beyond year 3
const p5=pnl(s,116,806,600,226,"PEOPLE, PLANET, PROFIT");
[["PEOPLE",[["43.4%","health spend paid out of pocket"],["58,000","snakebite deaths"]]],["PLANET",[["4.4%","of global emissions, 71% supply chain"],["82.1%","bin unused drugs"]]],["PROFIT",[["71%","gross margin, base case"],["10.65x","LTV to CAC"]]]].forEach((c,i)=>{ const x=14+190*i;
  bx(p5,x,48,184,30,c[0],{fill:i===0?C.primaryDeep:(i===1?C.primary:C.accent),color:i===2?C.ink:C.white,fam:"Poppins",st:"Bold",size:20});
  TL(p5,x,82,24,c[1][0][0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:184}); sT(p5,x,118,184,18,c[1][0][1],{family:"Inter",style:"Semi Bold"});
  TL(p5,x,164,24,c[1][1][0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:184}); sTL(p5,x,200,18,c[1][1][1],{family:"Inter",style:"Semi Bold",maxW:184}); });
const p6=pnl(s,728,806,600,226,"FUTURE SCOPE: THREE HORIZONS");
[["H1 CORE","0 to 12 months","12 districts, ₹1.44 Cr ARR"],["H2 EMERGING","12 to 36 months","80 districts, base ₹9.6 Cr ARR"],["H3 FUTURE","36 months on","about 780 districts, not projected"]].forEach((r,i)=>{ const x=14+194*i;
  step(p6,x,48,184,140,r[0],r[1],r[2],i===0?{hfill:C.accent,hc:C.ink}:{}); if(i<2) arrow(p6,x+185,118,x+193,118,C.ink,2); });
sRT(p6,14,196,572,18,"Gate: ","each horizon opens only when the last one's gate is met",{leadColor:C.alert});
const p7=pnl(s,1340,806,516,226,"BEYOND YEAR 3: THE SAME LAYER, WIDER");
const ny=bl18(p7,14,48,488,[["Wider basket: ","beyond 7 tracer drugs to full lists"],["Blocks: ","500 aspirational blocks since Jan 2023"],["Same buyer: ","nutrition and agriculture, later"]],{gap:8});
["SDG 3.8","SDG 10.2","SDG 12.3"].forEach((g,i)=>bx(p7,14+164*i,ny+6,156,30,g,{fill:i===0?C.tint:C.white,size:18}));
sT(p7,14,ny+44,488,18,"A contribution to each target, not a measured change",{family:"Inter",style:"Semi Bold"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
