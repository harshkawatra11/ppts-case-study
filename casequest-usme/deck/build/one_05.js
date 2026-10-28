const C = {
  primary:{r:0.106,g:0.498,b:0.231}, primaryDeep:{r:0.055,g:0.302,b:0.145},
  accent:{r:1,g:0.780,b:0.173}, alert:{r:0.878,g:0.227,b:0.118},
  tint:{r:0.835,g:0.937,b:0.863}, alertTint:{r:0.988,g:0.894,b:0.871},
  blue:{r:0.145,g:0.388,b:0.922}, blueDeep:{r:0.114,g:0.306,b:0.722}, blueTint:{r:0.859,g:0.914,b:0.996},
  good:{r:0.180,g:0.620,b:0.310}, goodTint:{r:0.878,g:0.957,b:0.898}, accentTint:{r:1,g:0.957,b:0.820},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},
  {family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const warnings = [];
function addFrame(parent, x, y, w, h, fill, strokeColor, strokeWeight, name) {
  const f = figma.createFrame(); parent.appendChild(f); f.resize(w, h);
  f.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { f.strokes = [{ type: "SOLID", color: strokeColor }]; f.strokeWeight = strokeWeight || 2; }
  f.cornerRadius = 0; f.x = x; f.y = y; if (name) f.name = name; return f; }
function addRect(parent, x, y, w, h, fill, strokeColor, strokeWeight) {
  const r = figma.createRectangle(); parent.appendChild(r); r.resize(w, h);
  r.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { r.strokes = [{ type: "SOLID", color: strokeColor }]; r.strokeWeight = strokeWeight || 2; }
  r.cornerRadius = 0; r.x = x; r.y = y; return r; }
function addEllipse(parent, x, y, w, h, fill, strokeColor, strokeWeight) {
  const e = figma.createEllipse(); parent.appendChild(e); e.resize(w, h);
  e.fills = fill ? [{ type: "SOLID", color: fill }] : [];
  if (strokeColor) { e.strokes = [{ type: "SOLID", color: strokeColor }]; e.strokeWeight = strokeWeight || 2; }
  e.x = x; e.y = y; return e; }
function addText(parent, family, style, size, color, chars, x, y, w, h, hAlign, vAlign, autoH) {
  const t = figma.createText(); parent.appendChild(t);
  t.fontName = { family, style }; t.fontSize = size; t.characters = chars; t.fills = [{ type: "SOLID", color }];
  if (w !== undefined) { t.resize(w, h || 10); t.textAutoResize = autoH ? "HEIGHT" : "NONE"; }
  if (hAlign) t.textAlignHorizontal = hAlign;
  if (vAlign && !autoH) t.textAlignVertical = vAlign;
  t.x = x; t.y = y; return t; }
function addWireH(parent, x1, x2, y, color, thickness) { thickness = thickness || 2.5;
  return addRect(parent, Math.min(x1, x2), y - thickness / 2, Math.abs(x2 - x1), thickness, color); }
function addChip(slide, x, y, w, h, text, frontColor, textColor, size) {
  addRect(slide, x + 5, y + 5, w, h, C.accent, C.ink, 2);
  const f = addFrame(slide, x, y, w, h, frontColor, C.ink, 2);
  addText(f, "Poppins", "Bold", size || 22, textColor, text, 10, 0, w - 20, h, "CENTER", "CENTER"); return f; }
function fmtN(v){ const neg=v<0; let s=String(Math.round(Math.abs(v)));
  if(s.length>3){ const last=s.slice(-3); let rest=s.slice(0,-3); const parts=[];
    while(rest.length>2){ parts.unshift(rest.slice(-2)); rest=rest.slice(0,-2); }
    if(rest) parts.unshift(rest); s=parts.join(",")+","+last; }
  return (neg?"−":"")+s; }
function fitText(t,maxW,min){ min=min||22; while(t.width>maxW && t.fontSize>min){ t.fontSize=t.fontSize-1; }
  if(t.width>maxW+1) warnings.push("overflow: "+t.characters.slice(0,40)); return t; }
function TL(p,x,y,size,chars,o){ o=o||{}; const t=addText(p,o.family||"Poppins",o.style||"Bold",size,o.color||C.ink,chars,x,y);
  if(o.maxW) fitText(t,o.maxW,o.min);
  if(o.rightAt!==undefined) t.x=o.rightAt-t.width;
  if(o.centerAt!==undefined) t.x=o.centerAt-t.width/2;
  return t; }
function T(p,x,y,w,size,chars,o){ o=o||{};
  return addText(p,o.family||"Inter",o.style||"Semi Bold",size,o.color||C.ink,chars,x,y,w,o.h||30,o.align||"LEFT",undefined,true); }
function measureW(parent,family,style,size,chars){ const t=figma.createText(); parent.appendChild(t);
  t.fontName={family,style}; t.fontSize=size; t.characters=chars; const w=t.width; t.remove(); return w; }
const HG=[null,{r:0.918,g:0.965,b:0.925},{r:0.749,g:0.890,b:0.784},{r:0.525,g:0.796,b:0.596},{r:0.247,g:0.639,b:0.361},{r:0.055,g:0.302,b:0.145}];
const HR=[null,{r:1,g:0.957,b:0.945},{r:0.988,g:0.820,b:0.780},{r:0.957,g:0.553,b:0.471},{r:0.878,g:0.227,b:0.118}];
function wipe(s){ s.children.slice().forEach(c=>c.remove()); s.fills=[{type:"SOLID",color:C.white}]; }
function srcLine(s,text){ const src=addText(s,"Inter","Semi Bold",14,C.primary,text,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+s.name); return src; }
function fine(p,x,y,w,text){ const t=addText(p,"Inter","Semi Bold",16,C.ink,text,x,y,w,20,"LEFT",undefined,true); t.name="FINEPRINT"; return t; }
function rt(p,x,y,w,size,lead,rest,o){ o=o||{}; const t=T(p,x,y,w,size,lead+rest,{color:o.color});
  t.setRangeFontName(0,lead.length,{family:"Inter",style:"Bold"}); if(o.leadColor) t.setRangeFills(0,lead.length,[{type:"SOLID",color:o.leadColor}]); return t; }
const RIBN=["R1 MARKET AND ACCESS","R2 RULES AND INTEGRITY","R3 + R4 COORDINATION AND PILOT"];
const RIBAP=["A1 MODEL","A2 ASSUMPTIONS","A3 SENSITIVITY","A4 SHORT FORMS AND SOURCES"];
function ribbonBT(s,active,labels){ const y=40,h=60,n=labels.length; let size=24;
  let tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l));
  const fits=pad=>tw.reduce((a,b)=>a+b,0)+pad*n+26*(n-1)<=1792;
  let pad=64; while(!fits(pad)&&pad>44) pad-=4;
  if(!fits(pad)){ size=22; tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l)); pad=64; while(!fits(pad)&&pad>44) pad-=4; }
  if(!fits(pad)) warnings.push("ribbon too wide");
  const widths=tw.map(w=>Math.ceil(w+pad)), used=widths.reduce((a,b)=>a+b,0), gap=n>1?Math.min(80,Math.max(26,(1792-used)/(n-1))):0;
  let x=64; const bxs=[];
  for(let i=0;i<n;i++){ const w=widths[i], act=i===active;
    if(act) addRect(s,x+8,y+8,w,h,C.accent,C.ink,2.5);
    addRect(s,x,y,w,h,act?C.primaryDeep:C.accent,C.ink,2);
    addText(s,"Poppins","Bold",size,act?C.white:C.ink,labels[i],x,y+Math.round((h-size*1.5)/2),w,Math.round(size*1.5),"CENTER","CENTER");
    addEllipse(s,x+3,y+h/2-7,14,14,C.white,C.ink,2); addEllipse(s,x+w-17,y+h/2-7,14,14,C.white,C.ink,2);
    bxs.push({x,w}); x+=w+gap; }
  for(let i=0;i<n-1;i++) addWireH(s,bxs[i].x+bxs[i].w-10,bxs[i+1].x+10,y+h/2,C.ink,2.5); }
function skelBT(s,active,counter,chip,chipW,title,source,o){ o=o||{}; wipe(s);
  ribbonBT(s,active,o.labels||RIBN);
  addChip(s,64,118,chipW,56,chip,C.primary,C.white,22);
  const cw=o.counterW||156; addChip(s,1856-cw,118,cw,56,counter,C.primaryDeep,C.white,24);
  const t=addText(s,"Poppins","Bold",40,C.ink,title,64,188,1792,100,"LEFT",undefined,true); t.name="HEADLINE";
  while(t.height>112 && t.fontSize>34){ t.fontSize=t.fontSize-1; }
  if(t.height>112) warnings.push("headline 3 lines: "+counter);
  srcLine(s,source); return t; }
function callout(p,x,y,w,h,lead,text,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.accentTint,C.ink,2,"CALLOUT");
  rt(f,14,o.py===undefined?10:o.py,w-28,22,lead,text,{color:o.color,leadColor:o.leadColor||C.primaryDeep}); return f; }
function torS(p,x,y,w,items,baseV,o){ o=o||{}; const lw=o.lw||240, rh=o.rh||30, span=w-lw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const lo=Math.min(it.lo,it.hi), hi=Math.max(it.lo,it.hi);
    addRect(p,X(lo),ry+5,Math.max(2,X(baseV)-X(lo)),rh-10,C.alert,C.ink,1); addRect(p,X(baseV),ry+5,Math.max(2,X(hi)-X(baseV)),rh-10,C.primary,C.ink,1); });
  addRect(p,X(baseV)-1,y-4,2.5,rh*items.length+8,C.ink);
  (o.ticks||[]).forEach(t=>sTL(p,0,y+rh*items.length+6,18,t.toFixed(1),{family:"Inter",style:"Bold",centerAt:X(t)})); return X; }
function lead(p,x,y,w,text,o){ o=o||{}; return T(p,x,y,w,o.size||24,text,{family:"Poppins",style:"Bold",color:o.color||C.primaryDeep}); }
function nmS(t,sz){ if(sz<22) t.name="SEC"; return t; }
function sT(p,x,y,w,sz,s,o){ return nmS(T(p,x,y,w,sz,s,o||{}),sz); }
function sTL(p,x,y,sz,s,o){ o=o||{}; if(sz<22&&o.min===undefined) o.min=sz; return nmS(TL(p,x,y,sz,s,o),sz); }
function sRT(p,x,y,w,sz,a,b,o){ return nmS(rt(p,x,y,w,sz,a,b,o||{}),sz); }
function pnl(s,x,y,w,h,title,o){ o=o||{}; const f=addFrame(s,x,y,w,h,o.fill||C.white,C.ink,2,"PANEL: "+title);
  if(title){ TL(f,14,5,22,title,{color:o.tc||C.primary,maxW:w-28}); addRect(f,14,39,w-28,2,C.ink); } return f; }
function note(p,x,y,w,a,b,o){ o=o||{}; const sz=o.size||18, f=addFrame(p,x,y,w,10,o.fill||C.accentTint,C.ink,1.5,"NOTE");
  const t=a?sRT(f,10,4,w-20,sz,a,b,{leadColor:o.lc||C.alert}):sT(f,10,4,w-20,sz,b,{family:"Inter",style:"Bold"}); f.resize(w,Math.ceil(t.height)+8); return f; }
function tbl(p,x,y,cw,heads,rows,o){ o=o||{}; const sz=o.size||18, hh=o.hh||26, rh=o.rh||24, tw=cw.reduce((a,b)=>a+b,0), al=o.align||[];
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: "+(o.name||"t")); const h=addFrame(t,0,0,tw,hh,o.hf||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,i)=>{ nmS(addText(h,"Inter","Bold",sz,C.ink,l,cx+7,0,cw[i]-12,hh,al[i]||"LEFT","CENTER"),sz); cx+=cw[i]; });
  rows.forEach((r,i)=>{ const f=addFrame(t,0,hh+rh*i,tw,rh,(o.fills&&o.fills[i])||(i%2?C.surfaceAlt:C.white),null,0,"ROW"); let x2=0;
    if(o.strip) addRect(f,0,0,5,rh,o.strip[i]);
    r.forEach((v,j)=>{ nmS(addText(f,"Inter",(j===0||(o.bold&&o.bold.includes(j)))?"Bold":"Semi Bold",sz,(o.rc&&o.rc[i])||C.ink,String(v),x2+7,0,cw[j]-12,rh,al[j]||"LEFT","CENTER"),sz); x2+=cw[j]; });
    addRect(t,0,hh+rh*i-1,tw,1.5,C.ink); });
  let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-1,0,1.5,hh+rh*rows.length,C.ink); }); return t; }
const V = {"hash": "8fe043dc97", "a1_rows": [["Price abroad", "₹3,960", "₹3,960", "₹3,960"], ["Platform fee", "₹594", "₹594", "₹594"], ["Product cost", "₹800", "₹800", "₹800"], ["Freight and delivery", "₹1,000", "₹880", "₹1,118"], ["Paperwork and agent", "₹232", "₹38", "₹15"], ["Consolidator, stock, write-off", "₹0", "₹0", "₹171"], ["Expected return effect", "₹693", "₹610", "₹370"], ["Contribution per order", "₹640", "₹1,038", "₹892"]], "a3_rows": [["A05", "Parcel freight, 0.5 kg, ₹", "1100", "1000", "900"], ["A07", "Paperwork today, minutes", "60", "45", "35"], ["A09", "Agent fee, ₹", "150", "120", "100"], ["A10", "Return rate today", "0.22", "0.2", "0.18"], ["A11", "Returns abandoned abroad", "0.85", "0.8", "0.75"], ["A27", "Paperwork at the desk, minutes", "25", "15", "10"], ["A28", "Rate-card saving", "0.05", "0.12", "0.18"], ["A31", "Returns sent to pooled point", "0.5", "0.65", "0.8"]], "team": {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"], ["Dayita Arora", "Delhi Technological University", "Member"]]}, "today": "₹640", "reformed": "₹1,038", "wh": "₹892", "uplift": "₹398", "bear_today": "₹14", "bear_ref": "₹385", "bear_wh": "₹176", "bull_today": "₹1,209", "bull_ref": "₹1,623", "bull_wh": "₹1,532", "tornado": [["A28", "pooled rate-card saving on direct parcel freight", -70, 60], ["A07", "minutes of seller paperwork per direct parcel", 38, -25], ["A09", "INR agent or CHA fee per direct parcel", 30, -20], ["A27", "minutes of seller paperwork per parcel with the cluster desk and pre-filled declaration", -25, 12], ["A31", "share of direct returns routed to a pooled return point abroad", -14, 14], ["A05", "INR direct parcel freight 0.5 kg", 12, -12], ["A04", "INR seller product cost", 9, -4], ["A10", "return rate, direct parcel", 8, -8]]};
const results=[];
{ const s = await figma.getNodeByIdAsync("2:7");
skelBT(s,0,"A1 TO A4","APPENDIX",280,"Every number on slides 2 to 4 traces to the case brief, a named source or one model with 31 stated assumptions",
"Source: team model "+V.hash+" | research document, Appendix A (bibliography) and section 30 (assumptions register) | all values are assumptions or model outputs unless sourced",{labels:RIBAP,counterW:220});
const a1=pnl(s,64,310,900,352,"A1 MODEL: ONE ORDER, THREE LANES, BASE, ₹");
callout(a1,14,46,872,72,"Contribution = ","(1 − return rate) × (price − fee − product − freight − paperwork) − return rate × loss on a return",{fill:C.tint});
tbl(a1,14,126,[296,190,190,196],["Line","Today","Reformed parcel","Warehouse"],V.a1_rows,{hh:26,rh:24,name:"a1",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,null,null,null,C.tint]});
const a2=pnl(s,980,310,876,352,"A2 ASSUMPTIONS THAT MOVE THE ANSWER");
const PC={A10:1,A11:1,A28:1,A31:1}, RS={A05:1,A09:1}, CK={A05:"Lane D",A07:"time study",A09:"to measure",A10:"Lane C, CBIC",A11:"team",A27:"time study",A28:"Lane D",A31:"Lane C, D"};
const fm=(k,v)=>PC[k]?Math.round(parseFloat(v)*100)+"%":(RS[k]?"₹"+fmtN(parseFloat(v)):v);
tbl(a2,14,46,[70,300,110,110,110,148],["ID","Input","Bear","Base","Bull","Checked in"],V.a3_rows.map(r=>[r[0],r[1].replace(", ₹",""),fm(r[0],r[2]),fm(r[0],r[3]),fm(r[0],r[4]),CK[r[0]]]),{hh:30,rh:30,name:"a2",align:["LEFT","LEFT","RIGHT","RIGHT","RIGHT","LEFT"]});
fine(a2,14,322,848,"Bear is the value least favourable to the recommendation. Case facts are never varied.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
{ const s = await figma.getNodeByIdAsync("2:7");
const a3=pnl(s,64,678,900,354,"A3 SENSITIVITY AND SCENARIOS");
const NM={A28:"A28 Rate card",A07:"A07 Forms today",A09:"A09 Agent fee",A27:"A27 Desk minutes",A31:"A31 Returns pooled",A05:"A05 Parcel freight",A04:"A04 Product cost",A10:"A10 Return rate"};
const base=parseInt(V.uplift.replace(/[^0-9]/g,""));
torS(a3,14,50,470,V.tornado.map(t=>({label:NM[t[0]],lo:base+t[2],hi:base+t[3]})),base,{lw:230,rh:30,min:base-80,max:base+70});
tbl(a3,500,46,[134,84,84,84],["₹ an order","Bear","Base","Bull"],[["Today",V.bear_today,V.today,V.bull_today],["Reformed",V.bear_ref,V.reformed,V.bull_ref],["Warehouse",V.bear_wh,V.wh,V.bull_wh],["Uplift","₹371",V.uplift,"₹414"]],{hh:26,rh:30,name:"a3",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,C.tint,null,C.goodTint]});
note(a3,500,200,386,"Switch point: ","the warehouse never beats the reformed parcel per order (T12)");
fine(a3,14,316,872,"Uplift "+V.uplift+" in the base case; bars show each input at its bear (red) and bull (green) value");
const a4=pnl(s,980,678,876,354,"A4 SHORT FORMS AND SOURCES");
tbl(a4,14,46,[100,320],["Short","Meaning"],[["AEO","Authorised Economic Operator"],["CBIC","indirect taxes and customs board"],["CSB-V","courier shipping bill, form V"],["DGFT","foreign trade directorate"],["DNK","Dak Ghar Niryat Kendra"],["DoP","Department of Posts"],["ECCS","express cargo clearance system"],["EOR","Exporter on Record"],["PBE-III","postal bill of export, form III"],["RoDTEP","export duty and tax remission"]],{hh:26,rh:24,name:"short"});
sT(a4,14,318,420,18,"Not yet run: interviews, time study (§29)",{family:"Inter",style:"Bold",color:C.alert});
TL(a4,446,46,22,"Sources",{color:C.primary});
const b=addText(a4,"Inter","Semi Bold",16,C.ink,["1. CaseQuest 2026 case brief, USME DTU","2. CBIC Circular 17/2026; Notification 45/2017","3. CBIC Circular 54/2020, MSME AEO package","4. DGFT Notification 27/2026-27, PN 25/2026-27","5. India Post year-end review, Dec 2025","6. Lok Sabha USQ 2786, 12 Dec 2024","7. EY-ASSOCHAM on e-commerce exports, FY23","8. GTRI e-commerce export reports, 2023, 2024","9. UPU, PromPerú, SENAE on Exporta Fácil","10. GACC on China cross-border e-commerce, 2024","11. CBP, EU Council, HMRC, ATO, 2025 to 2026","12. CAG Report 33 of 2025; WTO TFA Art. 7.4","13. Team model "+V.hash+"; research Appendix A"].join("\n"),446,80,416,20,"LEFT",undefined,true); b.name="BIBLIO";
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
return {results,warnings};