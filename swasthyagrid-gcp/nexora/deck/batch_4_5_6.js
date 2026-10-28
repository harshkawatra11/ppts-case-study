// ===== NEXORA PREAMBLE v1 =====
const C = {
  primary:{r:0.059,g:0.478,b:0.302}, primaryDeep:{r:0.039,g:0.322,b:0.200},
  accent:{r:0.984,g:0.737,b:0.016}, alert:{r:0.918,g:0.263,b:0.208},
  tint:{r:0.812,g:0.933,b:0.859}, alertTint:{r:0.988,g:0.910,b:0.902},
  blue:{r:0.102,g:0.451,b:0.910}, blueDeep:{r:0.090,g:0.306,b:0.651}, blueTint:{r:0.824,g:0.890,b:0.988},
  good:{r:0.204,g:0.659,b:0.325}, accentTint:{r:0.996,g:0.969,b:0.878},
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
function sectionChip(slide, text, w, x, y) { addChip(slide, x === undefined ? 64 : x, y === undefined ? 118 : y, w || 440, 56, text, C.primary, C.white, 22); }
function addTable(parent, x, y, colWidths, headerLabels, rows, opts) {
  opts = opts || {}; const headerFill = opts.headerFill || C.tint; const rowH = opts.rowH || 52; const headerH = opts.headerH || 52; const cellSize = opts.cellSize || 22;
  const tableW = colWidths.reduce((a, w) => a + w, 0); const bodyH = rowH * rows.length; const totalH = headerH + bodyH + (opts.totalRow ? 56 : 0);
  const table = addFrame(parent, x, y, tableW, totalH, C.white, C.ink, 2.5);
  const header = addFrame(table, 0, 0, tableW, headerH, headerFill); let cx = 0;
  for (let c = 0; c < headerLabels.length; c++) {
    addText(header, "Poppins", "Bold", cellSize, C.ink, headerLabels[c], cx + 16, 0, colWidths[c] - 24, headerH, c === headerLabels.length - 1 ? "RIGHT" : "LEFT", "CENTER"); cx += colWidths[c]; }
  addRect(table, 0, headerH - 1, tableW, 2, C.ink); let ry = headerH;
  for (let r = 0; r < rows.length; r++) { const bg = r % 2 === 0 ? C.white : C.surfaceAlt; const row = addFrame(table, 0, ry, tableW, rowH, bg); let cx2 = 0;
    for (let c = 0; c < rows[r].length; c++) {
      addText(row, "Inter", c === 0 ? "Bold" : "Semi Bold", cellSize, C.ink, rows[r][c], cx2 + 16, 0, colWidths[c] - 24, rowH, c === rows[r].length - 1 ? "RIGHT" : "LEFT", "CENTER"); cx2 += colWidths[c]; }
    addRect(table, 0, ry - 1, tableW, 1.5, C.ink); ry += rowH; }
  if (opts.totalRow) { const tf = addFrame(table, 0, ry, tableW, 56, C.primary);
    addText(tf, "Poppins", "Bold", 22, C.white, opts.totalRow[0], 16, 0, colWidths[0] + 200, 56, "LEFT", "CENTER");
    const lastColStart = colWidths.slice(0, -1).reduce((a, w) => a + w, 0);
    addText(tf, "Poppins", "Bold", 26, C.white, opts.totalRow[1], lastColStart + 16, 0, colWidths[colWidths.length - 1] - 24, 56, "RIGHT", "CENTER"); }
  let vx = 0; for (let c = 0; c < colWidths.length - 1; c++) { vx += colWidths[c]; addRect(table, vx - 1, 0, 1.5, totalH, C.ink); }
  return table; }
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
function panel(s,x,y,w,h,title,o){ o=o||{}; let f;
  if(o.layered) f=layered(s,x,y,w,h,o.fill||C.white,"PANEL: "+title,o.back);
  else f=addFrame(s,x,y,w,h,o.fill||C.white,C.ink,2,"PANEL: "+title);
  if(title){ TL(f,16,10,24,title,{color:o.titleColor||C.primary,maxW:w-32-(o.reserve||0)}); addRect(f,16,50,w-32,2,C.ink); }
  return f; }
function addBadge(p,x,y,d,num,bg,fg){ addEllipse(p,x,y,d,d,bg,C.ink,2);
  const t=TL(p,0,0,22,String(num),{family:"Poppins",style:"Bold",color:fg}); t.x=x+d/2-t.width/2; t.y=y+d/2-t.height/2; return t; }
function badgeList(p,x,y,w,items,o){ o=o||{}; const d=o.d||40, pitch=o.pitch||58;
  items.forEach((t,i)=>{ const ry=y+i*pitch; addBadge(p,x,ry,d,i+1,o.bg||C.primary,o.fg||C.white);
    T(p,x+d+14,ry+Math.max(0,(d-28)/2),w-d-14,22,t,{family:"Inter",style:o.style||"Semi Bold",color:o.color||C.ink}); }); }
function dashedH(p,x,y,w,color,th){ addDashedRow(p,x,y,w,color||C.ink,14,9,th||2.5); }
function logoSlot(p,x,y,w,h,brand){ const f=addFrame(p,x,y,w,h,C.white,C.primaryDeep,1.5,"LOGO: "+brand);
  try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,brand+" logo",0,0,w,h,"CENTER","CENTER",false); return f; }
function hBars(p,x,y,w,items,o){ o=o||{}; const lw=o.labelW||180, rh=o.rowH||48, bh=o.barH||30, vw=o.valueW||110;
  const max=o.max||Math.max(...items.map(i=>i.value)); const span=w-lw-12-vw;
  items.forEach((it,i)=>{ const ry=y+i*rh;
    TL(p,x,ry+(rh-30)/2,22,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const bw=Math.max(4,span*it.value/max);
    addRect(p,x+lw+12,ry+(rh-bh)/2,bw,bh,it.color||C.primary,C.ink,2);
    TL(p,x+lw+12+bw+10,ry+(rh-30)/2,22,it.text||String(it.value),{family:"Poppins",style:"Bold",color:it.textColor||C.ink}); }); }
function lineChart(p,x,y,w,h,series,xLabels,o){ o=o||{}; const L=x+(o.padL||70), R=x+w-(o.padR||120), Tp=y+16, B=y+h-40;
  const X=i=>L+(R-L)*i/(xLabels.length-1); const Y=v=>B-(B-Tp)*(v-o.yMin)/(o.yMax-o.yMin);
  (o.yTicks||[]).forEach(v=>{ addRect(p,L,Y(v),R-L,1,C.surface);
    TL(p,0,Y(v)-14,22,o.yFmt?o.yFmt(v):String(v),{family:"Inter",style:"Semi Bold",rightAt:L-8}); });
  addRect(p,L,B,R-L,2.5,C.ink); addRect(p,L,Tp,2.5,B-Tp,C.ink);
  xLabels.forEach((lb,i)=>TL(p,0,B+8,22,lb,{family:"Inter",style:"Bold",centerAt:X(i)}));
  series.forEach(se=>{ const pts=se.values.map((v,i)=>[X(i),Y(v)]);
    for(let i=0;i<pts.length-1;i++) addDiagonalWire(p,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],se.color,4);
    pts.forEach(pt=>addEllipse(p,pt[0]-6,pt[1]-6,12,12,se.color,C.ink,1.5));
    if(se.label){ const last=pts[pts.length-1]; TL(p,last[0]+12,last[1]-15+(se.labelDy||0),22,se.label,{family:"Poppins",style:"Bold",color:se.labelColor||se.color}); } });
  return {X,Y}; }
const TEAM=[["Harsh Kawatra","Delhi Technological University","Founder"]];
function teamTable(p,x,y){ const cw=[330,600,190], X=[0,330,930], rh=54, hh=50, tw=1120;
  const t=addFrame(p,x,y,tw,hh+rh*TEAM.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  TEAM.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [330,930].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*TEAM.length,C.ink)); return t; }
// ===== PRAMAAN EXTRAS =====
const RIB8=["SUMMARY","DIAGNOSIS","RISK","GOVERNANCE","TECHNOLOGY","ACCOUNTABILITY","ROADMAP","COST-BENEFIT"];
const RIBA=["MODEL","ASSUMPTIONS","SENSITIVITY","SOURCES"];
function measureW(parent,family,style,size,chars){ const t=figma.createText(); parent.appendChild(t);
  t.fontName={family,style}; t.fontSize=size; t.characters=chars; const w=t.width; t.remove(); return w; }
function buildRibbonAuto(slide,activeIndex,labels,o){ o=o||{}; const y=o.y||40, h=o.h||60; const n=labels.length; let size=24;
  let tw=labels.map(l=>measureW(slide,"Poppins","Bold",size,l));
  const fits=pad=>tw.reduce((a,b)=>a+b,0)+pad*n+26*(n-1)<=1792;
  let pad=64; while(!fits(pad)&&pad>44) pad-=4;
  if(!fits(pad)){ size=22; tw=labels.map(l=>measureW(slide,"Poppins","Bold",size,l)); pad=64; while(!fits(pad)&&pad>44) pad-=4; }
  if(!fits(pad)) warnings.push("ribbon too wide");
  const widths=tw.map(w=>Math.ceil(w+pad)); const used=widths.reduce((a,b)=>a+b,0);
  const gap=n>1?Math.min(80,Math.max(26,(1792-used)/(n-1))):0;
  let x=64; const boxes=[];
  for(let i=0;i<n;i++){ const w=widths[i], act=i===activeIndex;
    if(act) addRect(slide,x+8,y+8,w,h,C.accent,C.ink,2.5);
    addRect(slide,x,y,w,h,act?C.primary:C.accent,C.ink,2);
    addText(slide,"Poppins","Bold",size,act?C.white:C.ink,labels[i],x,y+Math.round((h-size*1.5)/2),w,Math.round(size*1.5),"CENTER","CENTER");
    const r=7, hy=y+h/2-r;
    addEllipse(slide,x+10-r,hy,2*r,2*r,C.white,C.ink,2); addEllipse(slide,x+w-10-r,hy,2*r,2*r,C.white,C.ink,2);
    boxes.push({x,w}); x+=w+gap; }
  for(let i=0;i<n-1;i++) addWireH(slide,boxes[i].x+boxes[i].w-10,boxes[i+1].x+10,y+h/2,C.ink,2.5); }
function skeleton2(s,active,counter,chip,chipW,title,source,labels){ labels=labels||RIB8;
  s.fills=[{type:"SOLID",color:C.white}];
  buildRibbonAuto(s,active,labels);
  sectionChip(s,chip,chipW,64,118);
  addChip(s,1700,118,156,56,counter,C.primaryDeep,C.white,24);
  const t=addText(s,"Poppins","Bold",40,C.ink,title,64,188,1792,100,"LEFT",undefined,true); t.name="HEADLINE";
  while(t.height>112 && t.fontSize>34){ t.fontSize=t.fontSize-1; }
  if(t.height>112) warnings.push("headline 3 lines: "+counter);
  const src=addText(s,"Inter","Semi Bold",14,C.primary,source,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+counter);
  return t; }
function heatFill(v){ return v>=15?C.alert:(v>=10?C.alertTint:(v>=6?C.accent:C.tint)); }
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
function vBars(p,x,y,w,h,items,o){ o=o||{}; const n=items.length, pitch=w/n, bw=o.barW||Math.min(90,pitch*0.6);
  const top=y+36, base=y+h-40; const max=o.max||Math.max(...items.map(i=>i.value));
  addRect(p,x,base,w,2.5,C.ink);
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2; const bh=Math.max(3,(base-top)*it.value/max);
    addRect(p,cx-bw/2,base-bh,bw,bh,it.color||C.primary,C.ink,2);
    TL(p,0,base-bh-32,22,it.text||String(it.value),{family:"Poppins",style:"Bold",color:it.textColor||C.ink,centerAt:cx});
    TL(p,0,base+6,22,it.label,{family:"Inter",style:"Bold",centerAt:cx}); }); }
function stackedCols(p,x,y,w,h,cats,series,o){ o=o||{}; const n=cats.length, pitch=w/n, bw=o.barW||Math.min(70,pitch*0.62);
  const top=y+36, base=y+h-40; const tot=cats.map((_,i)=>series.reduce((a,s)=>a+s.values[i],0)); const max=o.max||Math.max(...tot);
  addRect(p,x,base,w,2.5,C.ink);
  cats.forEach((c,i)=>{ const cx=x+pitch*i+pitch/2; let acc=0;
    series.forEach(s=>{ const v=s.values[i]; if(v<=0) return; const hh=(base-top)*v/max;
      addRect(p,cx-bw/2,base-(base-top)*(acc+v)/max,bw,Math.max(2,hh),s.color,C.ink,1.5); acc+=v; });
    if(o.totals) TL(p,0,base-(base-top)*acc/max-30,22,o.totals[i],{family:"Poppins",style:"Bold",centerAt:cx});
    TL(p,0,base+6,22,c,{family:"Inter",style:"Bold",centerAt:cx}); }); }
function gantt(p,x,y,labelW,colW,rowH,years,rows){
  years.forEach((yr,j)=>{ TL(p,0,y,22,yr,{family:"Poppins",style:"Bold",centerAt:x+labelW+colW*j+colW/2});
    addRect(p,x+labelW+colW*j,y+36,1.5,rowH*rows.length+4,C.surface); });
  rows.forEach((r,i)=>{ const ry=y+40+rowH*i;
    TL(p,x,ry+(rowH-30)/2,22,r.label,{family:"Inter",style:"Bold",maxW:labelW-12});
    const bx=x+labelW+colW*r.s+3, bw=colW*(r.e-r.s+1)-6;
    addRect(p,bx,ry+5,bw,rowH-10,r.color||C.primary,C.ink,2);
    if(r.text) TL(p,bx+8,ry+(rowH-30)/2,22,r.text,{family:"Inter",style:"Bold",color:r.tc||C.white,maxW:bw-16}); }); }
function tornado(p,x,y,w,items,baseV,o){ o=o||{}; const lw=o.labelW||400, rh=o.rowH||40, span=w-lw-20;
  const min=o.min!==undefined?o.min:Math.min(...items.map(i=>i.lo)), max=o.max!==undefined?o.max:Math.max(...items.map(i=>i.hi));
  const X=v=>x+lw+10+span*(v-min)/(max-min);
  items.forEach((it,i)=>{ const ry=y+i*rh;
    TL(p,x,ry+(rh-30)/2,22,it.label,{family:"Inter",style:"Bold",maxW:lw-12});
    addRect(p,X(it.lo),ry+6,Math.max(2,X(baseV)-X(it.lo)),rh-12,C.accent,C.ink,1.5);
    addRect(p,X(baseV),ry+6,Math.max(2,X(it.hi)-X(baseV)),rh-12,C.primary,C.ink,1.5); });
  addRect(p,X(baseV)-1,y-4,2.5,rh*items.length+8,C.ink);
  return X; }

// ===== NEXORA EXTRAS =====
const RIBN=["SUMMARY","PROBLEM","SOLUTION","MARKET","INNOVATION","SUSTAINABILITY","FEASIBILITY","IMPACT"];
const RIBX=["A SIZING","B ECONOMICS","C SENSITIVITY","D IMPACT MODEL","E SOURCES"];
function skeleton3(s,active,counter,chip,chipW,crit,critW,title,source){
  const t=skeleton2(s,active,counter,chip,chipW,title,source,RIBN);
  addChip(s,64+chipW+28,118,critW,56,crit,C.white,C.primaryDeep,22); return t; }
function dashedV(p,x,y,h,color,th){ th=th||2.5; let cy=y;
  while(cy<y+h){ const hh=Math.min(14,y+h-cy); addRect(p,x-th/2,cy,th,hh,color||C.ink); cy+=23; } }
function donut(p,x,y,d,frac,color,label){
  const bg=addEllipse(p,x,y,d,d,C.surface,C.ink,2); bg.arcData={startingAngle:0,endingAngle:2*Math.PI,innerRadius:0.58};
  const a=addEllipse(p,x,y,d,d,color,C.ink,2); a.arcData={startingAngle:-Math.PI/2,endingAngle:-Math.PI/2+2*Math.PI*frac,innerRadius:0.58};
  const t=TL(p,0,0,30,label,{family:"Poppins",style:"ExtraBold",color:C.ink}); t.x=x+d/2-t.width/2; t.y=y+d/2-t.height/2; return t; }
function segBar(p,x,y,w,h,segs){ const tot=segs.reduce((a,s)=>a+s.v,0); let cx=x;
  segs.forEach(sg=>{ const sw=w*sg.v/tot; addRect(p,cx,y,sw,h,sg.c,C.ink,2);
    if(sg.t){ const t=TL(p,0,0,22,sg.t,{family:"Poppins",style:"Bold",color:sg.tc||C.white}); t.x=cx+sw/2-t.width/2; t.y=y+h/2-t.height/2; }
    cx+=sw; }); }
function srcLine(s,text){ const src=addText(s,"Inter","Semi Bold",14,C.primary,text,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+s.name); return src; }
function arrowR(p,x1,x2,y,color){ color=color||C.ink; addWireH(p,x1,x2,y,color,2.5);
  addDiagonalWire(p,x2-12,y-9,x2,y,color,2.5); addDiagonalWire(p,x2-12,y+9,x2,y,color,2.5); }
function teamTableN(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2];
  const t=addFrame(p,x,y,tw,hh+rh*TEAM.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Member","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  TEAM.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*TEAM.length,C.ink)); return t; }
function rail(s,x,y,h,label,sub){ const f=addFrame(s,x,y,150,h,C.primaryDeep,C.ink,2,"RAIL: "+label);
  TL(f,0,h/2-44,26,label,{family:"Poppins",style:"ExtraBold",color:C.accent,centerAt:75});
  TL(f,0,h/2+2,22,sub,{family:"Inter",style:"Bold",color:C.white,centerAt:75}); return f; }
function ragChip(p,x,y,kind){ const m=kind==="Green"?[C.good,C.white]:(kind==="Amber"?[C.accent,C.ink]:[C.alert,C.white]);
  const f=addFrame(p,x,y,96,34,m[0],C.ink,1.5,"RAG "+kind); addText(f,"Poppins","Bold",22,m[1],kind,0,0,96,34,"CENTER","CENTER"); return f; }

const results=[];
{ const s = await figma.getNodeByIdAsync("2:6");
skeleton3(s,2,"3 / 8","THE SOLUTION",300,"NEXORA ASKS: SOLUTION",390,
 "SwasthyaGrid gives each district one morning view of every shelf, bed and roster, proposes the nearest transfer, and a named officer approves it before anything moves",
 "Source: SwasthyaGrid product design | SwasthyaGrid prototype run log, PHC Kota-4 (simulated operations) | Team IdeaForge");
// LOOP
const pa=panel(s,64,318,1100,300,"FIVE STEPS, ONE LOOP, A HUMAN AT STEP FOUR");
const STEPS=[["REPORT","Facilities send stock, beds and staff once a day"],["WARN","Flags any item under 3 days of cover"],["PROPOSE","Ranks the nearest surplus and sizes the move"],["APPROVE","A named officer approves, edits or rejects"],["CONFIRM","The receiving PHC confirms; the view updates"]];
STEPS.forEach((st,i)=>{ const x=16+i*218;
  const b=addFrame(pa,x,58,196,172,i===3?C.accent:C.white,C.ink,2,"NODE step");
  addBadge(b,12,12,36,i+1,i===3?C.primaryDeep:C.primary,C.white);
  TL(b,58,14,22,st[0],{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:128});
  T(b,12,58,172,22,st[1]);
  if(i<4) arrowR(pa,x+198,x+216,144,C.ink); });
dashedH(pa,114,252,872,C.primaryDeep,2.5);
addRect(pa,113,230,2.5,22,C.primaryDeep); addRect(pa,985,230,2.5,22,C.primaryDeep);
TL(pa,0,262,22,"Every confirmed delivery feeds the next morning's view",{family:"Inter",style:"Bold",color:C.primary,centerAt:550});
// WIREFRAME
const pb=panel(s,1188,318,668,300,"WHAT THE OFFICER SEES EACH MORNING");
const sc=addFrame(pb,16,58,636,226,C.surfaceAlt,C.ink,2,"MOCKUP screen");
const tb=addFrame(sc,0,0,636,38,C.primaryDeep,null,0,"MOCKUP bar");
TL(tb,12,3,22,"District view: Kota, 7 Oct",{family:"Poppins",style:"Bold",color:C.white,maxW:420});
const mp=addFrame(sc,12,48,250,166,C.tint,C.ink,1.5,"MOCKUP map");
addDiagonalWire(mp,128,78,208,98,C.primaryDeep,2.5);
[[40,30,C.good],[150,24,C.good],[200,90,C.good],[60,120,C.good],[120,70,C.alert],[190,140,C.accent]].forEach(q=>addEllipse(mp,q[0],q[1],16,16,q[2],C.ink,1.5));
const r1=addFrame(sc,276,48,348,48,C.alertTint,C.ink,1.5,"MOCKUP alert");
TL(r1,12,9,22,"PHC Kota-4: ARV, 1.2 days",{family:"Inter",style:"Bold",color:C.alert,maxW:324});
const r2=addFrame(sc,276,104,348,48,C.white,C.ink,1.5,"MOCKUP proposal");
TL(r2,12,9,22,"Move 119 vials, DDW Kota",{family:"Inter",style:"Bold",maxW:324});
[["APPROVE",276,132,C.primary,C.white],["EDIT",416,90,C.white,C.ink],["REJECT",514,110,C.alertTint,C.alert]].forEach(bt=>{ const f=addFrame(sc,bt[1],162,bt[2],44,bt[3],C.ink,1.5,"MOCKUP button");
  addText(f,"Poppins","Bold",22,bt[4],bt[0],0,0,bt[2],44,"CENTER","CENTER"); });
// BEFORE AND AFTER
const pc=panel(s,64,642,760,388,"BEFORE AND AFTER, FOR THE DISTRICT OFFICER");
nm(addTable(pc,16,58,[210,250,268],["Task","Today","With SwasthyaGrid"],[
 ["Spot a shortage","After a patient is turned away","Same morning, before stock-out"],
 ["Find surplus","Phone calls to nearby PHCs","Ranked list on one screen"],
 ["Use near-expiry stock","Expires in the store","Sent first to the busier PHC"],
 ["Audit a decision","Not recorded","Every approval logged"]],{rowH:62,headerH:44}),"TABLE: before after");
T(pc,16,358,728,22,"Design targets; the pilot measures them",{family:"Inter",style:"Bold",color:C.alert});
// MOVE TYPES
const pd=panel(s,848,642,520,388,"FOUR KINDS OF MOVE");
[["Stock transfer","from a surplus PHC or warehouse",C.primary],["Bed redirect","to a facility under 90% full",C.accent],["Staff transfer","a doctor covers a short CHC",C.primaryDeep],["Diagnostic redirect","to the nearest working lab",C.tint]].forEach((m,i)=>{ const y=62+i*74;
  addRect(pd,16,y+4,28,28,m[2],C.ink,2);
  TL(pd,58,y,22,m[0],{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:446}); TL(pd,58,y+34,22,m[1],{family:"Inter",style:"Semi Bold",maxW:446}); });
T(pd,16,356,488,22,"Each move carries a quantity and a reason",{family:"Inter",style:"Bold",color:C.primary});
// PROOF
const e=layered(s,1392,642,457,388,C.tint,"CARD: proof");
TL(e,20,12,24,"ONE APPROVAL, ONE RESCUE",{color:C.primaryDeep,maxW:417}); addRect(e,20,50,417,2,C.ink);
TL(e,20,62,48,"1.2 → 21.0 days",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:417,min:30});
T(e,20,138,417,22,"ARV cover at PHC Kota-4 before and after one approved shipment",{family:"Inter",style:"Bold"});
badgeList(e,20,206,417,["7 vials on shelf: critical","119 vials sent from DDW Kota","126 vials confirmed on receipt"],{d:36,pitch:48});
T(e,20,354,417,22,"Prototype run on simulated data",{family:"Inter",style:"Bold",color:C.alert});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:7");
skeleton3(s,3,"4 / 8","TARGET MARKET",330,"NEXORA ASKS: TARGET MARKET",450,
 "State health departments buy for about 780 districts, a ₹93.6 Cr a year licence pool; we enter through 112 aspirational districts worth ₹13.4 Cr and a Rajasthan beachhead",
 "Source: LGD district count (2025) | NITI Aayog ADP list and indicators | PIB, ABHA IDs (Jul 2026) | PRS DfG 2025-26 | C-DAC e-Aushadhi | Indian HMIS and EHR vendor pricing (team scan, 2026) | Team IdeaForge model");
// SIZING
const pa=panel(s,64,318,700,410,"₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT");
hBars(pa,16,58,668,[
 {label:"TAM: 780",value:93.6,color:C.primaryDeep,text:"₹93.6 Cr"},
 {label:"SAM: 112",value:13.44,color:C.primary,text:"₹13.4 Cr"},
 {label:"SOM, Y3: 80",value:9.6,color:C.accent,text:"₹9.6 Cr"},
 {label:"Rajasthan: 41",value:4.92,color:C.tint,text:"₹4.9 Cr"}],{labelW:200,rowH:46,barH:30,valueW:130,max:93.6});
nm(addTable(pa,16,252,[110,420,138],["Tier","Basis (₹12 L each)","₹ a year"],[
 ["TAM","All ~780 districts in India","₹93.6 Cr"],
 ["SAM","112 aspirational districts (NITI)","₹13.4 Cr"],
 ["SOM","80 districts licensed by Year 3","₹9.6 Cr"]],{rowH:36,headerH:36}),"TABLE: sizing");
// BUYING CHAIN
const pb=panel(s,788,318,520,410,"WHO SIGNS, WHO USES IT DAILY");
[["SIGNS","State NHM (buyer)","annual licence, ₹12 L"],["CHAMPIONS","District Collector","health is 30% of ADP score"],["USES DAILY","District officer (DHO)","approves every move"],["REPORTS","PHC pharmacist, MO","stock and receipts"]].forEach((r,i)=>{ const y=58+i*86;
  const b=addFrame(pb,16,y,488,76,C.white,C.ink,2,"NODE buyer");
  const pl=addFrame(b,0,0,150,76,i===0?C.primaryDeep:C.accent,C.ink,2,"PILL"); addText(pl,"Poppins","Bold",22,i===0?C.white:C.ink,r[0],0,0,150,76,"CENTER","CENTER");
  TL(b,166,8,22,r[1],{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:306}); TL(b,166,42,22,r[2],{family:"Inter",style:"Semi Bold",maxW:306});
  if(i<3) addRect(pb,259,y+76,2.5,10,C.ink); });
// PRICE BAND
const pc=panel(s,1332,318,524,410,"PRICED INSIDE THE INDIAN BAND");
addRect(pc,16,110,492,40,C.tint,C.ink,2);
addRect(pc,214,96,6,68,C.primaryDeep);
TL(pc,0,58,22,"₹12 L ACV",{family:"Poppins",style:"Bold",color:C.primaryDeep,centerAt:217});
TL(pc,16,160,22,"₹3 L",{family:"Poppins",style:"Bold"});
TL(pc,0,160,22,"₹25 L",{family:"Poppins",style:"Bold",rightAt:508});
nm(addTable(pc,16,204,[300,192],["Comparable","₹ a year"],[["HMIS, entry level","₹3 L"],["SwasthyaGrid","₹12 L"],["EHR, upper end","₹25 L"]],{rowH:36,headerH:36}),"TABLE: price band");
T(pc,16,358,492,22,"0.25% of a district's central NHM share",{family:"Inter",style:"Bold",color:C.primary});
// WHY NOW
const pd=panel(s,64,752,700,278,"WHY NOW: THE RAILS ALREADY EXIST");
[["95.99 Cr","ABHA IDs created by 31 Jul 2026"],["₹37,227 Cr","Union NHM budget, 2025-26"],["31","States and UTs on the e-Aushadhi dashboard"]].forEach((k,i)=>{ const x=16+i*224;
  TL(pd,x,58,36,k[0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:204}); T(pd,x,118,204,22,k[1]); });
T(pd,16,214,668,22,"The buyer already has the budget line and the data feed",{family:"Inter",style:"Bold",color:C.primaryDeep});
// BEACHHEAD
const pe=panel(s,788,752,1068,278,"BEACHHEAD: RAJASTHAN, WHERE THE PROTOTYPE IS SET");
[["0 to 6 months","Pilot","2 districts live by week 6"],["6 to 18 months","Rajasthan","41 districts, 5 of them aspirational"],["18 to 36 months","Aspirational","112 districts on NITI's 49-indicator score"]].forEach((b,i)=>{ const x=16+i*346;
  const f=addFrame(pe,x,62,330,196,i===0?C.tint:(i===1?C.accentTint:C.surfaceAlt),C.ink,2,"NODE wedge");
  addChip(f,16,12,230,36,b[0],C.primaryDeep,C.white,22);
  TL(f,16,62,24,b[1],{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:298});
  T(f,16,102,298,22,b[2]);
  if(i<2) arrowR(pe,x+332,x+344,160,C.ink); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:8");
skeleton3(s,4,"5 / 8","INNOVATION",280,"NEXORA ASKS: INNOVATION",410,
 "Five public systems record India's health supply and none of them moves it; SwasthyaGrid adds the missing layer that rebalances stock across a district with a human sign-off",
 "Source: HMIS, data.gov.in | C-DAC e-Aushadhi | UNDP India eVIN | IHIP and IDSP | ABDM Health Facility Registry | Kim and Mauborgne, Blue Ocean Strategy | Helmer, 7 Powers | Team IdeaForge assessment");
// CAPABILITY GRID
const pa=panel(s,64,318,1100,420,"FIVE SYSTEMS RECORD, NONE REBALANCES");
const Y={t:"Yes",f:C.primary,tc:C.white}, P={t:"Part",f:C.accent}, N={t:"No",f:C.surfaceAlt}, G={t:"Yes",f:C.primaryDeep,tc:C.accent};
grid(pa,16,58,["HMIS","e-Aushadhi","eVIN (vaccines)","IHIP / IDSP","ABDM registry","SwasthyaGrid"],["Record","Daily","Warn","Rebalance","Approve","District"],[
 [Y,N,N,N,N,P],[Y,P,P,N,N,P],[Y,Y,Y,P,N,Y],[P,Y,Y,N,N,Y],[P,N,N,N,N,N],[G,G,G,G,G,G]],{labelW:260,cellW:134,rowH:46,headH:46,corner:"System",name:"TABLE: capability"});
T(pa,16,388,1068,22,"Team assessment of public documents; eVIN covers vaccines only",{family:"Inter",style:"Bold",color:C.alert});
// PRECEDENT
const b=layered(s,1188,318,661,420,C.primaryDeep,"CARD: precedent");
TL(b,20,12,24,"THE PRECEDENT: EVIN CUT STOCK-OUTS 80%",{color:C.accent,maxW:621});
addRect(b,20,50,621,2,C.accent);
[["80%","fewer vaccine stock-outs; restock time more than halved"],["29,000+","cold chain points live across 733 districts"],["12 → 36","States and UTs, from the 2015 launch to all"]].forEach((k,i)=>{ const y=66+i*100;
  TL(b,20,y,44,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:200}); T(b,236,y+4,405,22,k[1],{color:C.white}); });
T(b,20,372,621,22,"Same idea, now for medicines, beds and staff",{family:"Inter",style:"Bold",color:C.accent});
// ERRC
const pc=panel(s,64,762,600,268,"WHAT WE REMOVE, CUT, RAISE AND ADD");
[["ELIMINATE","Rip-and-replace of state systems",C.alertTint,C.alert],["REDUCE","Phone calls to hunt for surplus",C.accentTint,C.ink],["RAISE","Days of warning before a stock-out",C.tint,C.primaryDeep],["CREATE","Ranked moves, signed by an officer",C.primary,C.white]].forEach((q,i)=>{ const x=16+(i%2)*284, y=58+Math.floor(i/2)*104;
  const f=addFrame(pc,x,y,268,96,q[2],C.ink,2,"NODE errc");
  TL(f,12,6,22,q[0],{family:"Poppins",style:"Bold",color:q[3],maxW:244}); T(f,12,38,244,22,q[1],{color:i===3?C.white:C.ink}); });
// 7 POWERS
const pd=panel(s,688,762,580,268,"WHY IT GETS HARDER TO COPY EACH MONTH");
[["Switching cost","routines and approval history build up in the tool"],["Process power","transfer rules tuned to each district's roads"],["Counter-position","ledger vendors sell records; we sell decisions"]].forEach((r,i)=>{ const y=60+i*68;
  TL(pd,16,y,22,r[0],{family:"Poppins",style:"Bold",color:C.primary,maxW:222}); T(pd,250,y,314,22,r[1]); });
// CONTRARIAN
const e=layered(s,1292,762,557,268,C.accentTint,"CARD: contrarian");
TL(e,20,12,24,"THE CONTRARIAN CALL",{color:C.primaryDeep,maxW:517}); addRect(e,20,50,517,2,C.ink);
T(e,20,62,517,22,"Most proposals add capacity: more staff, more stock, one national platform. A district already owns enough to cut stock-outs sharply, if it can see and move it.");
T(e,20,200,517,22,"Move first; buy for the gaps that remain",{family:"Inter",style:"Bold",color:C.alert});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

return {results,warnings};
