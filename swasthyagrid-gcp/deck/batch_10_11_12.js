// ===== SWASTHYAGRID PREAMBLE v1 =====
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
const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Gursimran Kaur","Guru Gobind Singh Indraprastha University","Member"]];
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
    addRect(slide,x,y,w,h,act?C.blue:C.accent,C.ink,2);
    addText(slide,"Poppins","Bold",size,act?C.white:C.ink,labels[i],x,y+Math.round((h-size*1.5)/2),w,Math.round(size*1.5),"CENTER","CENTER");
    const r=7, hy=y+h/2-r;
    addEllipse(slide,x+10-r,hy,2*r,2*r,C.white,C.ink,2); addEllipse(slide,x+w-10-r,hy,2*r,2*r,C.white,C.ink,2);
    boxes.push({x,w}); x+=w+gap; }
  for(let i=0;i<n-1;i++) addWireH(slide,boxes[i].x+boxes[i].w-10,boxes[i+1].x+10,y+h/2,C.ink,2.5); }
function skeleton2(s,active,counter,chip,chipW,title,source,labels){ labels=labels||RIB8;
  s.fills=[{type:"SOLID",color:C.white}];
  buildRibbonAuto(s,active,labels);
  sectionChip(s,chip,chipW,64,118);
  addChip(s,1700,118,156,56,counter,C.blueDeep,C.white,24);
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

// ===== SWASTHYAGRID EXTRAS =====
const RIB7=["SUMMARY","PROBLEM","SOLUTION","AI ENGINE","WHO IT SERVES","DEPLOY","SCALE"];
function skeleton3(s,active,counter,chip,chipW,crit,critW,title,source){
  const t=skeleton2(s,active,counter,chip,chipW,title,source,RIB7);
  addChip(s,64+chipW+28,118,critW,56,crit,C.white,C.blueDeep,22); return t; }
const ST={LIVE:[C.good,C.white],WIRED:[C.accent,C.ink],PILOT:[C.blue,C.white]};
function statusTag(p,x,y,st,w){ w=w||112; const m=ST[st];
  const f=addFrame(p,x,y,w,34,m[0],C.ink,1.5,"TAG "+st);
  addText(f,"Poppins","Bold",22,m[1],st,0,0,w,34,"CENTER","CENTER"); return f; }
function chipFlow(p,x,y,w,items,o){ o=o||{}; const h=o.h||40, gx=o.gx||10, gy=o.gy||10; let cx=x, cy=y;
  items.forEach(it=>{ const tw=Math.ceil(measureW(p,"Inter","Bold",22,it[0]))+28;
    if(cx+tw>x+w && cx>x){ cx=x; cy+=h+gy; }
    const m=ST[it[1]]; const f=addFrame(p,cx,cy,tw,h,m[0],C.ink,1.5,"CHIP "+it[1]);
    addText(f,"Inter","Bold",22,m[1],it[0],0,0,tw,h,"CENTER","CENTER"); cx+=tw+gx; });
  return cy+h; }
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
function photoFrame(p,x,y,w,h,name){ return addFrame(p,x,y,w,h,C.surface,C.ink,2.5,"PHOTO: "+name); }
function srcLine(s,text){ const src=addText(s,"Inter","Semi Bold",14,C.primary,text,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+s.name); return src; }

const results=[];
{ const s = await figma.getNodeByIdAsync("2:12");
skeleton3(s,5,"9 / 10","WHY IT'S DEPLOYABLE",400,"DEPLOYABILITY AND SCALABILITY · 20%",600,
 "A state can go live in six weeks without new hardware: SwasthyaGrid reads the exports states already produce, runs in an Indian Google Cloud region and needs one approver per district",
 "Source: SwasthyaGrid deploy script and README (Cloud Run, Secret Manager, Always Free tier) | C-DAC e-Aushadhi / DVDMS | data.gov.in HMIS | ABDM Health Facility Registry | DPDP Act 2023 | Team IdeaForge pilot plan");
// PILOT GANTT
const pa=panel(s,64,318,1100,392,"SIX WEEKS FROM MOU TO A LIVE DISTRICT");
gantt(pa,16,58,390,110,36,["W1","W2","W3","W4","W5","W6"],[
 {label:"Data MoU, nodal officer",s:0,e:0,color:C.primaryDeep,text:"MoU"},
 {label:"State GCP project, Mumbai",s:0,e:1,color:C.blue,text:"asia-south1"},
 {label:"Map e-Aushadhi, HMIS exports",s:1,e:2,color:C.primary,text:"Nightly export"},
 {label:"Facility logins, Firebase Auth",s:2,e:3,color:C.blue,text:"Logins"},
 {label:"Train state model, Vertex AI",s:2,e:4,color:C.blue,text:"AutoML, backtest"},
 {label:"Train officers, pharmacists",s:3,e:4,color:C.accent,text:"Training",tc:C.ink},
 {label:"Shadow mode: AI vs staff",s:4,e:5,color:C.accent,text:"Compare",tc:C.ink},
 {label:"Go live in 2 districts",s:5,e:5,color:C.good,text:"Live"}]);
// RAILS
const pb=panel(s,1188,318,668,392,"FITS THE RAILS STATES ALREADY RUN");
badgeList(pb,16,62,636,["e-Aushadhi / DVDMS: nightly export, no rip-out","HMIS on data.gov.in: baseline for backtests","ABDM facility registry ID as the facility key","Runs on NHM budgets: no new procurement line","Officer sign-off mirrors today's indent approval"],{d:40,pitch:64});
// RISK MAP
const pc=panel(s,64,734,820,296,"FIVE RISKS, EACH WITH A FIX");
grid(pc,16,56,["High","Medium","Low"],["Low","Med","High"],[
 [{t:"R5",f:C.accent},{t:"R1",f:C.alert,tc:C.white},{t:"",f:C.alertTint}],
 [{t:"",f:C.tint},{t:"R3",f:C.accent},{t:"R2",f:C.alert,tc:C.white}],
 [{t:"",f:C.tint},{t:"",f:C.tint},{t:"R4",f:C.accent}]],{labelW:130,cellW:90,rowH:62,headH:40,corner:"P × I",name:"TABLE: risk map"});
[["R1","Stale data: freshness flag"],["R2","Outbreak surge: IDSP signal"],["R3","Queue ignored: SLA alerts"],["R4","State says no: runs solo"],["R5","No signal: offline CRM sync"]].forEach((r,i)=>{ const y=56+i*46;
  TL(pc,430,y,22,r[0],{family:"Poppins",style:"Bold",color:C.alert}); T(pc,476,y,328,22,r[1]); });
// GUARDRAILS
const d=layered(s,908,734,948,296,C.white,"CARD: guardrails");
TL(d,20,12,24,"GUARDRAILS A MINISTRY CAN SIGN",{color:C.primary,maxW:908});
addRect(d,20,50,908,2,C.ink);
["AI proposes; a named officer approves","Voice agent is read-only by design","No patient identity: stock and counts only",
 "Every spoken number traced to a tool","Data stays in the state's Indian region","Runs on the Always Free tier today"].forEach((t,i)=>{ const col=i<3?0:1, row=i%3; const x=20+col*468, y=62+row*72;
  addBadge(d,x,y,40,i+1,C.good,C.white); T(d,x+54,y+2,386,22,t); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:13");
skeleton3(s,6,"10 / 10","SCALE ACROSS INDIA",390,"IMPACT 15% · DEPTH AND REACH 20%",520,
 "Rolled out state by state over three years, the federated layer removes an estimated 1.36 crore stock-out days a year and lifts key-medicine availability from 72.2% to 86.1%",
 "Source: Team IdeaForge impact model: 38,241 facilities (MoHFW HDI 2022-23) × 7 tracer medicines × 365 days × 27.8% unavailability (PMC8654139); cuts of 30%, 50%, 80% (UNDP eVIN) | eLife 2020");
// MONEYSHOT
const band=layered(s,64,318,1792,200,C.primaryDeep,"CARD: moneyshot");
TL(band,28,24,64,"1.36 crore",{family:"Poppins",style:"ExtraBold",color:C.white,maxW:600});
T(band,28,122,600,22,"stock-out days avoided a year, base case",{family:"Inter",style:"Bold",color:C.accent});
addRect(band,650,24,4,152,C.accent);
TL(band,680,36,48,"72.2% → 86.1%",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:440,min:32});
T(band,680,122,440,22,"key-medicine availability",{color:C.white});
addRect(band,1140,24,4,152,C.accent);
TL(band,1170,36,48,"38,241",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:280});
T(band,1170,122,280,22,"PHCs and CHCs",{color:C.white});
addRect(band,1470,24,4,152,C.accent);
TL(band,1500,36,48,"36",{family:"Poppins",style:"ExtraBold",color:C.accent});
T(band,1500,122,266,22,"States and UTs, data kept home",{color:C.white});
// FEDERATED ARCHITECTURE
const pb=panel(s,64,542,620,488,"MODELS MOVE, DATA STAYS HOME");
const u=addFrame(pb,20,62,580,96,C.primaryDeep,C.ink,2,"NODE union");
TL(u,16,10,22,"Union node: MoHFW",{family:"Poppins",style:"Bold",color:C.accent,maxW:548});
T(u,16,50,548,22,"Averages weights; sees national buffers",{color:C.white});
dashedV(pb,106,158,80,C.blue,2.5); dashedV(pb,494,158,80,C.blue,2.5); dashedV(pb,300,204,34,C.blue,2.5);
TL(pb,0,166,22,"weights and aggregates only",{family:"Inter",style:"Bold",color:C.blue,centerAt:300});
[[20,"Rajasthan"],[214,"Bihar"],[408,"+ 34 more"]].forEach(st=>{ const b=addFrame(pb,st[0],238,172,118,C.white,C.ink,2,"NODE state");
  TL(b,12,10,22,st[1],{family:"Poppins",style:"Bold",color:C.primary,maxW:148}); T(b,12,46,148,22,"BigQuery, Vertex AI");
  addRect(pb,st[0]+85,356,2.5,44,C.ink); });
const fac=addFrame(pb,20,400,580,74,C.tint,C.ink,2,"NODE facilities");
TL(fac,16,8,22,"Facilities: PHCs, CHCs, warehouses",{family:"Poppins",style:"Bold",maxW:548});
T(fac,16,40,548,22,"CRM, voice and photos feed the state node");
// WAVES
const pc=panel(s,708,542,560,488,"THREE WAVES TO 36 STATES AND UTS");
[["Wave 1 · months 0 to 6","Rajasthan: 2 pilot districts, then statewide",C.tint],
 ["Wave 2 · months 6 to 18","8 states with 70% of snakebite deaths, Bihar to Gujarat",C.accentTint],
 ["Wave 3 · months 18 to 36","All 36 States and UTs; 38,241 facilities",C.blueTint]].forEach((w,i)=>{ const y=62+i*134;
  const b=addFrame(pc,16,y,528,120,w[2],C.ink,2,"NODE wave");
  TL(b,16,10,22,w[0],{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:496}); T(b,16,48,496,22,w[1]); });
T(pc,16,456,528,22,"eVIN scaled from 12 states to all 36",{family:"Inter",style:"Bold",color:C.primary});
// SCENARIOS
const pd=panel(s,1292,542,564,236,"BEAR 81.5 LAKH, BULL 2.17 CRORE");
hBars(pd,16,58,532,[
 {label:"Bear, 30%",value:81.5,color:C.accent,text:"81.5 lakh"},
 {label:"Base, 50%",value:135.8,color:C.primary,text:"1.36 crore"},
 {label:"Bull, 80%",value:217.3,color:C.blue,text:"2.17 crore"}],{labelW:150,rowH:46,barH:30,valueW:130,max:217.3});
T(pd,16,200,532,22,"Stock-out days avoided a year, by cut",{family:"Inter",style:"Bold",color:C.primary});
// SENSITIVITY
const pe=panel(s,1292,802,564,228,"ALL NINE CASES CLEAR 58 LAKH DAYS");
const cf=v=>({t:v.toFixed(1),f:v<100?C.tint:(v<200?C.accent:C.good),tc:v>=200?C.white:C.ink});
const SENS=[[99.7,166.1,265.8],[81.5,135.8,217.3],[58.6,97.7,156.3]].map(r=>r.map(cf));
SENS[1][1]={t:"135.8",f:C.blue,tc:C.white};
grid(pe,16,54,["66%","72.2%","80%"],["30% cut","50% cut","80% cut"],SENS,{labelW:130,cellW:134,rowH:40,headH:40,corner:"Avail.",name:"TABLE: sensitivity"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:14"); s.fills=[{type:"SOLID",color:C.white}];
addWireH(s,64,1856,120,C.ink,2.5); [64,960,1848].forEach(cx=>addEllipse(s,cx-8,112,16,16,C.white,C.ink,2));
nm(TL(s,0,190,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",centerAt:960}),"TITLE");
addText(s,"Poppins","Bold",34,C.primary,"SwasthyaGrid: federate the forecast, keep each state's data at home, and let a named officer approve every move",260,360,1400,100,"CENTER",undefined,true);
addText(s,"Inter","Bold",24,C.blueDeep,"swasthyagrid.vercel.app  |  github.com/harshkawatra11/SwasthyaGrid-HealthTech",260,500,1400,40,"CENTER",undefined,true);
TL(s,0,590,26,"TEAM IDEAFORGE",{color:C.primary,centerAt:960});
teamTable(s,400,640);
addWireH(s,64,1856,1004,C.ink,2.5);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

return {results,warnings};
