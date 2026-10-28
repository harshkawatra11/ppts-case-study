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
function addDiagonalWire(parent, x1, y1, x2, y2, color, thickness) { thickness = thickness || 2.5;
  const dx = x2 - x1, dy = y2 - y1; const length = Math.sqrt(dx * dx + dy * dy);
  const a = Math.atan2(dy, dx), cs = Math.cos(a), sn = Math.sin(a);
  const r = figma.createRectangle(); parent.appendChild(r); r.resize(Math.max(length,0.5), thickness);
  r.fills = [{ type: "SOLID", color }]; r.cornerRadius = 0;
  r.relativeTransform = [[cs, -sn, x1 + sn * thickness / 2], [sn, cs, y1 - cs * thickness / 2]]; return r; }
function addDashedRow(parent, x, y, totalW, color, dashW, gapW, thickness) {
  dashW = dashW || 16; gapW = gapW || 10; thickness = thickness || 3; let cx = x;
  while (cx < x + totalW) { const w = Math.min(dashW, x + totalW - cx); addRect(parent, cx, y, w, thickness, color); cx += dashW + gapW; } }
function addChip(slide, x, y, w, h, text, frontColor, textColor, size) {
  addRect(slide, x + 5, y + 5, w, h, C.accent, C.ink, 2);
  const f = addFrame(slide, x, y, w, h, frontColor, C.ink, 2);
  addText(f, "Poppins", "Bold", size || 22, textColor, text, 10, 0, w - 20, h, "CENTER", "CENTER"); return f; }
function nm(n,name){ n.name=name; return n; }
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
function layered(p,x,y,w,h,front,name,back){ const b=addRect(p,x+7,y+7,w,h,back||C.accent,C.ink,2.5); b.name="BACK: "+(name||"");
  return addFrame(p,x,y,w,h,front,C.ink,2,name); }
function measureW(parent,family,style,size,chars){ const t=figma.createText(); parent.appendChild(t);
  t.fontName={family,style}; t.fontSize=size; t.characters=chars; const w=t.width; t.remove(); return w; }
function grid(p,x,y,rowLabels,colLabels,cells,o){ o=o||{}; const lw=o.labelW||240, cw=o.cellW||120, rh=o.rowH||44, hh=o.headH||44;
  const W=lw+cw*colLabels.length, H=hh+rh*rowLabels.length;
  const g=addFrame(p,x,y,W,H,C.white,C.ink,2.5,o.name||"TABLE: grid");
  const hd=addFrame(g,0,0,W,hh,o.headFill||C.tint,null,0,"HEAD");
  if(o.corner) addText(hd,"Poppins","Bold",22,C.ink,o.corner,12,0,lw-20,hh,"LEFT","CENTER");
  colLabels.forEach((c,j)=>addText(hd,"Poppins","Bold",22,C.ink,c,lw+cw*j+4,0,cw-8,hh,"CENTER","CENTER"));
  rowLabels.forEach((r,i)=>{ const ry=hh+rh*i;
    const rl=addFrame(g,0,ry,lw,rh,i%2?C.surfaceAlt:C.white,null,0,"ROWLABEL");
    addText(rl,"Inter","Bold",22,C.ink,r,12,0,lw-20,rh,"LEFT","CENTER");
    cells[i].forEach((c,j)=>{ const cf=addFrame(g,lw+cw*j,ry,cw,rh,c.f||C.white,C.ink,1,"CELL");
      addText(cf,"Poppins","Bold",22,c.tc||C.ink,c.t,4,0,cw-8,rh,"CENTER","CENTER"); });
    addRect(g,0,ry-1,W,1.5,C.ink); });
  addRect(g,lw-1,0,2,H,C.ink); addRect(g,0,hh-1,W,2,C.ink);
  return g; }
const HG=[null,{r:0.918,g:0.965,b:0.925},{r:0.749,g:0.890,b:0.784},{r:0.525,g:0.796,b:0.596},{r:0.247,g:0.639,b:0.361},{r:0.055,g:0.302,b:0.145}];
const HR=[null,{r:1,g:0.957,b:0.945},{r:0.988,g:0.820,b:0.780},{r:0.957,g:0.553,b:0.471},{r:0.878,g:0.227,b:0.118}];
function wipe(s){ s.children.slice().forEach(c=>c.remove()); s.fills=[{type:"SOLID",color:C.white}]; }
function srcLine(s,text){ const src=addText(s,"Inter","Semi Bold",14,C.primary,text,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+s.name); return src; }
function fine(p,x,y,w,text){ const t=addText(p,"Inter","Semi Bold",16,C.ink,text,x,y,w,20,"LEFT",undefined,true); t.name="FINEPRINT"; return t; }
function rt(p,x,y,w,size,lead,rest,o){ o=o||{}; const t=T(p,x,y,w,size,lead+rest,{color:o.color});
  t.setRangeFontName(0,lead.length,{family:"Inter",style:"Bold"}); if(o.leadColor) t.setRangeFills(0,lead.length,[{type:"SOLID",color:o.leadColor}]); return t; }
const RIBN=["R1 MARKET AND ACCESS","R2 RULES AND INTEGRITY","R3 + R4 COORDINATION AND PILOT"];
const ARCS=true;
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
function arc(p,cx,cy,d,a0,a1,fill,inner){ const e=addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,2);
  try{ e.arcData={startingAngle:a0,endingAngle:a1,innerRadius:inner||0}; }catch(err){ warnings.push("arc failed"); } return e; }
function arrow(p,x1,y1,x2,y2,color,th){ color=color||C.ink; th=th||2.5; addDiagonalWire(p,x1,y1,x2,y2,color,th);
  const a=Math.atan2(y2-y1,x2-x1); [a+2.6,a-2.6].forEach(b=>addDiagonalWire(p,x2,y2,x2+10*Math.cos(b),y2+10*Math.sin(b),color,th)); }
function callout(p,x,y,w,h,lead,text,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.accentTint,C.ink,2,"CALLOUT");
  rt(f,14,o.py===undefined?10:o.py,w-28,22,lead,text,{color:o.color,leadColor:o.leadColor||C.primaryDeep}); return f; }
function ynCell(v){ if(v==="Yes") return {t:"Yes",f:HG[3],tc:C.ink}; if(v==="Part") return {t:"Part",f:C.accentTint,tc:C.ink};
  if(v==="No") return {t:"No",f:C.alertTint,tc:C.alert}; return {t:String(v),f:C.white,tc:C.ink}; }
function torS(p,x,y,w,items,baseV,o){ o=o||{}; const lw=o.lw||240, rh=o.rh||30, span=w-lw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const lo=Math.min(it.lo,it.hi), hi=Math.max(it.lo,it.hi);
    addRect(p,X(lo),ry+5,Math.max(2,X(baseV)-X(lo)),rh-10,C.alert,C.ink,1); addRect(p,X(baseV),ry+5,Math.max(2,X(hi)-X(baseV)),rh-10,C.primary,C.ink,1); });
  addRect(p,X(baseV)-1,y-4,2.5,rh*items.length+8,C.ink);
  (o.ticks||[]).forEach(t=>sTL(p,0,y+rh*items.length+6,18,t.toFixed(1),{family:"Inter",style:"Bold",centerAt:X(t)})); return X; }
function harvey(p,cx,cy,d,q){
  if(!ARCS){ for(let i=0;i<4;i++) addRect(p,cx-d/2+i*(d/4),cy-d/4,d/4-2,d/2,i<q?C.primaryDeep:C.white,C.ink,1.5); return; }
  addEllipse(p,cx-d/2,cy-d/2,d,d,q>=4?C.primaryDeep:C.white,C.ink,2);
  if(q>0&&q<4) arc(p,cx,cy,d,-Math.PI/2,-Math.PI/2+q*Math.PI/2,C.primaryDeep,0); }
function strike(p,t,color){ return addRect(p,t.x,t.y+t.height/2-1.5,t.width,3,color||C.alert); }
const RAILROT=true; // fix rule F5: set to false only if a rail label is not drawn bottom-to-top, centred inside its bar, in Figma
function rail(s,x,y,h,label,color,fg){ const r=addRect(s,x,y,40,h,color||C.primaryDeep,C.ink,2); r.name="RAIL: "+label;
  const t=addText(s,"Poppins","Bold",22,fg||C.white,label,0,0); t.name="RAILTEXT";
  if(t.width>h-12) warnings.push("rail label too long: "+label);
  const tw=t.width, th=t.height;
  if(RAILROT){ t.relativeTransform=[[0,1,x+(40-th)/2],[-1,0,y+h/2+tw/2]]; return r; }
  // fallback: rotate with the rotation property, then centre the rotated box on the bar using measured boxes
  t.x=x; t.y=y; t.rotation=90; const b=t.absoluteBoundingBox, rb=r.absoluteBoundingBox;
  t.x+=(rb.x+20)-(b.x+b.width/2); t.y+=(rb.y+h/2)-(b.y+b.height/2); return r; }
function lead(p,x,y,w,text,o){ o=o||{}; return T(p,x,y,w,o.size||24,text,{family:"Poppins",style:"Bold",color:o.color||C.primaryDeep}); }
function nmS(t,sz){ if(sz<22) t.name="SEC"; return t; }
function sT(p,x,y,w,sz,s,o){ return nmS(T(p,x,y,w,sz,s,o||{}),sz); }
function sTL(p,x,y,sz,s,o){ o=o||{}; if(sz<22&&o.min===undefined) o.min=sz; return nmS(TL(p,x,y,sz,s,o),sz); }
function sRT(p,x,y,w,sz,a,b,o){ return nmS(rt(p,x,y,w,sz,a,b,o||{}),sz); }
function pnl(s,x,y,w,h,title,o){ o=o||{}; const f=addFrame(s,x,y,w,h,o.fill||C.white,C.ink,2,"PANEL: "+title);
  if(title){ TL(f,14,5,22,title,{color:o.tc||C.primary,maxW:w-28}); addRect(f,14,39,w-28,2,C.ink); } return f; }
function note(p,x,y,w,a,b,o){ o=o||{}; const sz=o.size||18, f=addFrame(p,x,y,w,10,o.fill||C.accentTint,C.ink,1.5,"NOTE");
  const t=a?sRT(f,10,4,w-20,sz,a,b,{leadColor:o.lc||C.alert}):sT(f,10,4,w-20,sz,b,{family:"Inter",style:"Bold"}); f.resize(w,Math.ceil(t.height)+8); return f; }
function bx(p,x,y,w,h,s,o){ o=o||{}; const sz=o.size||18, pd=o.pad===undefined?6:o.pad, f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,o.sw||1.5,o.name||"BOX");
  nmS(addText(f,o.fam||"Inter",o.st||"Bold",sz,o.color||C.ink,s,pd,0,w-2*pd,h,o.align||"CENTER","CENTER"),sz); return f; }
function tbl(p,x,y,cw,heads,rows,o){ o=o||{}; const sz=o.size||18, hh=o.hh||26, rh=o.rh||24, tw=cw.reduce((a,b)=>a+b,0), al=o.align||[];
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: "+(o.name||"t")); const h=addFrame(t,0,0,tw,hh,o.hf||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,i)=>{ nmS(addText(h,"Inter","Bold",sz,C.ink,l,cx+7,0,cw[i]-12,hh,al[i]||"LEFT","CENTER"),sz); cx+=cw[i]; });
  rows.forEach((r,i)=>{ const f=addFrame(t,0,hh+rh*i,tw,rh,(o.fills&&o.fills[i])||(i%2?C.surfaceAlt:C.white),null,0,"ROW"); let x2=0;
    if(o.strip) addRect(f,0,0,5,rh,o.strip[i]);
    r.forEach((v,j)=>{ nmS(addText(f,"Inter",(j===0||(o.bold&&o.bold.includes(j)))?"Bold":"Semi Bold",sz,(o.rc&&o.rc[i])||C.ink,String(v),x2+7,0,cw[j]-12,rh,al[j]||"LEFT","CENTER"),sz); x2+=cw[j]; });
    addRect(t,0,hh+rh*i-1,tw,1.5,C.ink); });
  let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-1,0,1.5,hh+rh*rows.length,C.ink); }); return t; }
function hgrid(p,x,y,rl,cl,cells,o){ o=o||{}; const sz=o.size||18, lw=o.lw||200, cw=o.cw||70, rh=o.rh||24, hh=o.hh||24, W=lw+cw*cl.length, H=hh+rh*rl.length;
  const g=addFrame(p,x,y,W,H,C.white,C.ink,2,"TABLE: "+(o.name||"grid")); addFrame(g,0,0,W,hh,C.tint,null,0,"HEAD");
  if(o.corner) nmS(addText(g,"Inter","Bold",sz,C.ink,o.corner,7,0,lw-12,hh,"LEFT","CENTER"),sz);
  cl.forEach((c,j)=>nmS(addText(g,"Inter","Bold",sz,C.ink,c,lw+cw*j+3,0,cw-6,hh,"CENTER","CENTER"),sz));
  rl.forEach((r,i)=>{ const ry=hh+rh*i; nmS(addText(g,"Inter","Bold",sz,C.ink,r,7,ry,lw-12,rh,"LEFT","CENTER"),sz);
    cells[i].forEach((c,j)=>{ const cf=addFrame(g,lw+cw*j,ry,cw,rh,c.f||C.white,C.ink,1,"CELL"); nmS(addText(cf,"Inter","Bold",sz,c.tc||C.ink,c.t,3,0,cw-6,rh,"CENTER","CENTER"),sz); });
    addRect(g,0,ry-0.75,W,1.5,C.ink); });
  addRect(g,lw-1,0,2,H,C.ink); return g; }
function bub(p,cx,cy,d,label,fill,fg){ addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,1.5); const t=sTL(p,0,0,18,label,{color:fg||C.white}); t.x=cx-t.width/2; t.y=cy-t.height/2; return t; }
const V = {"hash": "8fe043dc97", "opts": [["New single-window export portal", "3", "3", "2", "1", "2", "2.40"], ["Freight subsidy per parcel", "4", "2", "1", "4", "1", "2.60"], ["Exempt low-value parcels from checks", "4", "1", "4", "4", "1", "2.80"], ["Government export marketplace", "2", "3", "2", "1", "2", "2.10"], ["Overseas warehouses for every cluster", "3", "4", "2", "2", "3", "2.95"], ["Cluster desk, seller tiers, pooled rates and returns", "5", "4", "4", "4", "5", "4.45"]], "team": {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"], ["Dayita Arora", "Delhi Technological University", "Member"]]}, "today": "₹640", "reformed": "₹1,038", "uplift": "₹398", "uplift_pct": "62%", "bear_today": "₹14", "bear_ref": "₹385", "cts_ref": "₹959", "tornado": [["A28", "pooled rate-card saving on direct parcel freight", -70, 60], ["A07", "minutes of seller paperwork per direct parcel", 38, -25], ["A09", "INR agent or CHA fee per direct parcel", 30, -20], ["A27", "minutes of seller paperwork per parcel with the cluster desk and pre-filled declaration", -25, 12], ["A31", "share of direct returns routed to a pooled return point abroad", -14, 14], ["A05", "INR direct parcel freight 0.5 kg", 12, -12], ["A04", "INR seller product cost", 9, -4], ["A10", "return rate, direct parcel", 8, -8]]};
const results=[];
{ const s = await figma.getNodeByIdAsync("2:5");
skelBT(s,1,"2 / 3","R2 RULES AND INTEGRITY",420,
"Grade the seller, not the parcel: one pre-filled declaration and three seller tiers keep every parcel declared, cut forms from 45 to 15 minutes and release incentives only against matched payment",
"Source: team model "+V.hash+" (T3, T6, T8, T13); option scores are team judgement, weights 30/25/15/15/15 | CBIC Circulars 17/2026, 54/2020; Notification 45/2017 | WCO E-Commerce FoS 2018 | WTO TFA Art. 7.4 | tiers are pilot proposals");
rail(s,64,310,240,"SIX OPTIONS",C.primaryDeep); rail(s,64,562,232,"THE RULES",C.primary); rail(s,64,806,226,"THE MONEY",C.alert);
// band 1: score the options, strike the obvious, plot the trade-off
const p1=pnl(s,116,310,520,240,"SIX OPTIONS, OUR SCORES (1 TO 5)");
bx(p1,14,46,140,44,"Option",{fill:C.tint,align:"LEFT",pad:8});
["Cost\n30%","Integ.\n25%","Fiscal\n15%","Time\n15%","2026\n15%"].forEach((c,j)=>bx(p1,154+58*j,46,58,44,c,{fill:C.tint,pad:2}));
bx(p1,444,46,62,44,"Score",{fill:C.tint,pad:2});
const ON=["New portal","Subsidy","Exemption","Marketplace","Warehouses","Our package"];
V.opts.forEach((r,i)=>{ const y=90+24*i, hl=i===5, f=addFrame(p1,14,y,492,24,hl?C.tint:(i%2?C.surfaceAlt:C.white),C.ink,1,"ROW");
  sTL(f,8,0,18,ON[i],{family:"Inter",style:"Bold",maxW:128}); r.slice(1,6).forEach((v,j)=>harvey(f,140+58*j+29,12,18,parseInt(v)-1));
  sTL(f,0,0,18,r[6],{family:"Inter",style:"Bold",centerAt:461,color:hl?C.primaryDeep:C.ink}); });
const p2=nm(pnl(s,648,310,600,240,""),"PANEL: obvious");
const t2=TL(p2,14,5,22,"OBVIOUS: PORTAL, SUBSIDY, EXEMPTION",{color:C.alert,maxW:572}); addRect(p2,14,39,572,2,C.ink); strike(p2,t2,C.alert);
["Portal: rebuilds ICEGATE, ECCS and DNK; slowest to deliver","Subsidy: ₹1,000 a parcel from the exchequer, every year","Exemption: splitting and under-invoicing; 1 of 5 on integrity"].forEach((b,i)=>{ const y=50+i*34;
  addEllipse(p2,14,y,26,26,C.alert,C.ink,1.5); sTL(p2,0,y,18,String(i+1),{color:C.white,centerAt:27}); sT(p2,50,y+2,536,18,b,{family:"Inter",style:"Semi Bold"}); });
callout(p2,14,156,572,68,"CONCLUSIVELY: ","grade the seller, keep every parcel declared: "+V.opts[5][6]+" of 5",{fill:C.tint});
const p3=pnl(s,1260,310,596,240,"SELLER COST AGAINST INTEGRITY");
const L0=56,R0=576,T0=60,B0=184, X=v=>L0+24+(R0-L0-48)*(v-1)/4, Y=v=>B0-14-(B0-T0-28)*(v-1)/4;
addRect(p3,X(3),T0,1.5,B0-T0,C.surface); addRect(p3,L0,Y(3),R0-L0,1.5,C.surface);
addRect(p3,L0,B0,R0-L0,2,C.ink); addRect(p3,L0,T0,2,B0-T0,C.ink);
[1,3,5].forEach(v=>{ sTL(p3,0,B0+3,18,String(v),{family:"Inter",style:"Semi Bold",centerAt:X(v)}); sTL(p3,0,Y(v)-11,18,String(v),{family:"Inter",style:"Semi Bold",rightAt:L0-6}); });
sTL(p3,0,B0+3,18,"Integrity",{family:"Inter",style:"Bold",centerAt:(X(3)+X(5))/2+20});
sTL(p3,L0+10,T0-14,18,"Cheap, leaky",{family:"Inter",style:"Bold",color:C.alert});

[[3,3,1],[4,2,2],[4,1,3],[2,3,4],[3,4,5],[5,4,6]].forEach(b=>bub(p3,X(b[1]),Y(b[0]),30,String(b[2]),b[2]===6?C.primaryDeep:(b[2]===3?C.alert:C.blueDeep),C.white));
sTL(p3,X(4)+22,Y(5)-11,18,"Ours",{family:"Inter",style:"Bold",color:C.primary});
fine(p3,14,214,568,"1 portal, 2 subsidy, 3 exempt, 4 market, 5 warehouses, 6 ours");
}
{ const s = await figma.getNodeByIdAsync("2:5");
// band 2: the process, the tiers, the controls
const p4=pnl(s,116,562,700,232,"ONE ORDER: FIVE HAND-OFFS TODAY, FOUR AFTER");
bx(p4,14,48,100,64,"TODAY\n45 min",{fill:C.alert,color:C.white,fam:"Poppins",st:"Bold"});
bx(p4,14,122,100,64,"AFTER\n15 min",{fill:C.primary,color:C.white,fam:"Poppins",st:"Bold"});
["IEC, GST, Udyam","Invoice by hand","PBE-III or CSB-V","Agent or CHA","Return = import"].forEach((t,i)=>{ const x=128+114.5*i;
  bx(p4,x,48,100,64,t,{fill:C.alertTint}); if(i<4) arrow(p4,x+100,80,x+114,80,C.ink,2); });
["One seller ID at the desk","Declaration pre-filled","Risk engine scores it","Return to a pooled point"].forEach((t,i)=>{ const x=128+143*i;
  bx(p4,x,122,130,64,t,{fill:C.goodTint}); if(i<3) arrow(p4,x+130,154,x+143,154,C.ink,2); });
note(p4,14,194,672,"Basis: ","CSB-V keyed by hand; ECCS, ICEGATE, DNK portals exist");
const p5=pnl(s,828,562,540,232,"THREE TIERS: CHECKS FOLLOW THE RECORD");
tbl(p5,14,46,[80,176,140,116],["Tier","Entry","Checks","Demoted"],[["Tier 1","KYC at the desk","all scored","any error"],["Tier 2","25 clean parcels","less sampling","unpaid bill"],["Tier 3","12 months clean","audit after","audit flag"]],
  {hh:26,rh:42,name:"tiers",strip:[HG[2],HG[3],HG[4]]});
note(p5,14,199,512,"Every tier: ","all parcels declared; thresholds proposed");
const p6=pnl(s,1380,562,476,232,"EACH MISUSE MEETS TWO CONTROLS");
const Y_="Yes",P_="Part",N_="No";
hgrid(p6,14,46,["Under-invoicing","Incentive misuse","GST refund leak","Banned goods","Split parcels","Fake returns"],["Data","Pay","Test","Audit","Drop"],
  [[Y_,Y_,Y_,Y_,Y_],[Y_,Y_,P_,Y_,Y_],[Y_,Y_,P_,Y_,Y_],[P_,N_,Y_,P_,Y_],[Y_,P_,Y_,Y_,Y_],[Y_,P_,Y_,Y_,Y_]].map(r=>r.map(ynCell)),{lw:168,cw:56,rh:23,hh:24,name:"controls"});
fine(p6,14,210,448,"Pay: payment match. Test: sample. Drop: demote");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
{ const s = await figma.getNodeByIdAsync("2:5");
function wfN(p,x,y,w,h,items,o){ o=o||{}; const sz=18, n=items.length, pitch=w/n, bw=o.bw||Math.min(56,pitch*0.6), lh=o.lh||30;
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,Y(0),w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=0;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?((o.tc&&o.tc[i])||C.primaryDeep):(it[1]>=0?C.good:C.alert),C.ink,1.5);
    sTL(p,0,y1-Math.ceil(sz*1.25)-2,sz,(it[1]<0?"−":(tot?"":"+"))+fmtN(Math.abs(it[1])),{family:"Inter",style:"Bold",color:it[1]<0?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sTL(p,0,base+4,sz,it[0],{family:"Inter",style:"Bold",centerAt:cx}); }); }
// band 3: the money
const m=layered(s,116,806,560,219,C.primaryDeep,"CARD: MONEYSHOT");
TL(m,20,6,22,"SELLER KEEPS AN ORDER, SAME CHECKS",{color:C.accent,maxW:520});
const a1=TL(m,20,44,44,V.today,{family:"Poppins",style:"ExtraBold",color:C.white});
arrow(m,20+a1.width+12,78,20+a1.width+56,78,C.accent,5);
TL(m,20+a1.width+68,38,56,V.reformed,{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:520-a1.width-68,min:40});
T(m,20,124,520,22,"+"+V.uplift_pct+" in our model, with no freight subsidy",{family:"Inter",style:"Bold",color:C.white});
addDashedRow(m,20,158,520,C.accent,14,9,2);
[["−84%","paperwork"],[V.cts_ref,"cost to serve"],[V.bear_today+" to "+V.bear_ref,"bear case"]].forEach((k,i)=>{ const x=20+i*176;
  TL(m,x,162,24,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:166,min:22}); sT(m,x,196,166,18,k[1],{family:"Inter",style:"Bold",color:C.white}); });
const p8=pnl(s,688,806,700,226,"HOW "+V.today+" BECOMES "+V.reformed+", ₹ AN ORDER");
wfN(p8,14,46,672,174,[["Today",640],["Cluster desk",195],["Rate card",120],["Pooled returns",83],["Reformed",1038]],{min:0,max:1150,bw:60,lh:30,tc:[C.alert,0,0,0,C.primaryDeep]});
const p9=pnl(s,1400,806,456,226,"WHAT MOVES THE "+V.uplift+", ₹");
const NM={A28:"A28 Rate card",A07:"A07 Forms today",A09:"A09 Agent fee",A27:"A27 Desk minutes",A31:"A31 Returns pooled"};
const base=parseInt(V.uplift.replace(/[^0-9]/g,""));
torS(p9,14,50,428,V.tornado.filter(t=>NM[t[0]]).map(t=>({label:NM[t[0]],lo:base+t[2],hi:base+t[3]})),base,{lw:200,rh:30,min:base-80,max:base+70});
fine(p9,14,204,428,"Red: bear; green: bull. Rate card priced first");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
return {results,warnings};