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
{ const s = await figma.getNodeByIdAsync("2:2"); s.fills=[{type:"SOLID",color:C.white}];
addChip(s,64,48,700,56,"BUILD WITH AI · CODE FOR COMMUNITIES",C.blue,C.white,22);
addChip(s,788,48,560,56,"PHC HEALTH SUPPLY CHAIN CHALLENGE",C.accent,C.ink,22);
addChip(s,1476,48,380,56,"TEAM IDEAFORGE",C.primaryDeep,C.white,22);
addWireH(s,64,1856,140,C.ink,2.5);
[64,460,860,1260,1848].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2));
nm(TL(s,64,172,112,"SWASTHYAGRID",{family:"Poppins",style:"ExtraBold",maxW:1120,min:80}),"TITLE");
T(s,64,330,1120,34,"A federated AI control room that forecasts PHC stock-outs and moves medicine before the shelf empties",{family:"Poppins",style:"Bold",color:C.primary});
const v=layered(s,64,448,1120,250,C.primary,"CARD: verdict");
T(v,28,20,1064,30,"Do not build India another national database. Federate the forecast: data stays with each state, models travel, and a district officer approves every move.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,28,166,1064,22,"Running today on 40 simulated facilities in 5 Rajasthan districts. At national scale, base case: 1.36 crore stock-out days a year avoided on 7 emergency medicines.",{color:C.white});
TL(s,64,722,26,"TEAM IDEAFORGE",{color:C.primary});
teamTable(s,64,768);
const r=layered(s,1236,172,620,808,C.tint,"CARD: five numbers");
TL(r,24,18,24,"THE CASE IN FIVE NUMBERS",{color:C.primaryDeep});
addRect(r,24,58,572,2,C.ink);
[["38,241","PHCs and CHCs run India's frontline care (MoHFW, March 2023)"],
 ["66 to 80%","of key essential medicines found in stock at surveyed public facilities"],
 ["58,000","snakebite deaths a year; antivenom only works if the PHC holds it"],
 ["80%","fewer vaccine stock-outs once eVIN made stock visible (UNDP)"],
 ["1.2 → 21.0 days","ARV cover at PHC Kota-4 after one approved SwasthyaGrid shipment"]].forEach((f,i)=>{ const y=76+i*118;
  TL(r,24,y,36,f[0],{family:"Poppins",style:"ExtraBold",color:i===4?C.blue:C.primary,maxW:572}); T(r,24,y+50,572,22,f[1]); });
logoSlot(r,24,700,270,80,"Build with AI"); logoSlot(r,326,700,270,80,"Team IdeaForge");
addWireH(s,64,1856,1004,C.ink,2.5);
srcLine(s,"Source: MoHFW Health Dynamics of India 2022-23 | PMC8654139 (Puducherry) | Suraweera et al., eLife 2020 | UNDP eVIN | SwasthyaGrid prototype run log (docs/v2-reports/final-audit.md) | Team IdeaForge impact model");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:4");
skeleton3(s,0,"1 / 10","EXECUTIVE SUMMARY",360,"JUDGED ON: ALL FIVE CRITERIA",470,
 "India records PHC stock but nobody forecasts or moves it: SwasthyaGrid federates the forecast across states and removes an estimated 1.36 crore stock-out days a year",
 "Source: MoHFW HDI 2022-23 | PMC8654139 | Chaudhury et al., JEP 2006 | eLife 2020 | Constitution, Seventh Schedule | SwasthyaGrid repository audit (Sep 2026) | Team IdeaForge impact model");
// THE GAP
const pp=panel(s,64,318,560,362,"SEEN LATE, MOVED NEVER");
TL(pp,16,58,44,"66 to 80%",{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:528});
TL(pp,16,118,22,"of key medicines in stock at surveyed PHCs",{family:"Inter",style:"Bold",maxW:528});
[["58,000","snakebite deaths a year"],["40%","health workers absent (2006)"],["79.9%","CHC specialist posts vacant"]].forEach((k,i)=>{ const y=164+i*64;
  TL(pp,16,y,30,k[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:170}); T(pp,196,y+2,348,22,k[1]); });
// WHY THE OBVIOUS ANSWER STALLS
const po=panel(s,648,318,600,362,"WHY THE OBVIOUS ANSWER STALLS");
nm(addTable(po,16,58,[220,348],["Obvious fix","Why it stalls"],[
 ["One national database","Health is a State subject; 36 States and UTs own the data"],
 ["Replace e-Aushadhi","States run it today; a rip-out takes years"],
 ["A dashboard per PHC","Pharmacists work by phone, in Hindi, between patients"],
 ["AI that auto-orders","No officer signs off; one bad order ends trust"]],{rowH:64,headerH:40}),"TABLE: obvious fix");
// OUR ANSWER
const pa=layered(s,1272,318,577,362,C.primaryDeep,"CARD: our answer");
TL(pa,20,12,24,"OUR ANSWER: FEDERATE THE FORECAST",{color:C.accent,maxW:537});
addRect(pa,20,50,537,2,C.accent);
[["1","Decision layer on top of e-Aushadhi, HMIS and eVIN-style feeds, not a new record system"],
 ["2","Each state's data stays in its own BigQuery; Vertex AI shares model weights, never rows"],
 ["3","Voice for the PHC, a control room for the district; a named officer approves every move"]].forEach((b,i)=>{ const y=66+i*96;
  addBadge(pa,20,y,40,b[0],C.accent,C.ink); T(pa,74,y,483,22,b[1],{color:C.white}); });
// THE BRIEF, ANSWERED
const pq=panel(s,64,704,1100,326,"THE BRIEF, ANSWERED LINE BY LINE");
nm(addTable(pq,16,58,[330,560,178],["Organiser asks for","SwasthyaGrid today","Status"],[
 ["Live stock, beds, staff","Command Centre: 40 facilities, live stream",""],
 ["Demand forecast","Days of cover and 7-day footfall forecast",""],
 ["Early stock-out warning","Critical below 3 days, emergency below 5",""],
 ["Cross-district moves","Refills live; lateral transfers tested",""],
 ["Shared models, all states","Vertex AI federated training per state",""],
 ["Voice-first access","Hindi, Hinglish, English; 13 tools",""]],{rowH:38,headerH:38}),"TABLE: brief map");
["LIVE","LIVE","LIVE","WIRED","PILOT","LIVE"].forEach((st,i)=>statusTag(pq,939,58+38+38*i+2,st));
// PAYOFF
const c=layered(s,1188,704,661,326,C.blue,"CARD: payoff");
TL(c,20,12,24,"WHAT ONE FEDERATED LAYER BUYS",{color:C.accent,maxW:621});
[["1.36 Cr","stock-out days a year avoided (base)"],["86.1%","key-medicine availability, from 72.2%"],["6 weeks","from MoU to a live district"]].forEach((k,i)=>{ const f=addFrame(c,20+i*210,60,196,190,C.white,C.ink,2,"KPI TILE");
  TL(f,12,10,40,k[0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:172,min:28}); T(f,12,72,172,22,k[1],{family:"Inter",style:"Bold"}); });
T(c,20,266,621,22,"Bear case still avoids 81.5 lakh days a year; bull, 2.17 crore.",{family:"Inter",style:"Bold",color:C.white});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:5");
skeleton3(s,1,"2 / 10","PROBLEM: THE SCALE",380,"PROBLEM-SOLUTION FIT · 20%",450,
 "India's 38,241 PHCs and CHCs miss up to 1 in 3 key medicines on a given day, and the emergency drugs that go missing decide whether a patient survives",
 "Source: MoHFW HDI 2022-23 | PMC8654139 (Puducherry) | PMC10292169 (Gadag) | PMC11174260 (Haryana) | eLife 2020 | WHO rabies | SRS 2019-21 | IDSP dengue analysis, PMC13479492 | NHA 2021-22 and 2022-23");
// FACILITY TIERS
const pa=panel(s,64,318,700,350,"38,241 PHCS AND CHCS HOLD THE STOCK");
hBars(pa,16,58,668,[
 {label:"Sub-centres",value:169615,color:C.tint,text:"1,69,615"},
 {label:"PHCs",value:31882,color:C.primary,text:"31,882"},
 {label:"CHCs",value:6359,color:C.primary,text:"6,359"},
 {label:"Sub-div. hosp.",value:1340,color:C.surface,text:"1,340"},
 {label:"District hosp.",value:714,color:C.surface,text:"714"}],{labelW:190,rowH:46,barH:30,valueW:120});
T(pa,16,300,668,22,"Green: the 38,241 facilities we target first",{family:"Inter",style:"Bold",color:C.primary});
// AVAILABILITY STUDIES
const pb=panel(s,788,318,560,350,"KEY-MEDICINE AVAILABILITY TOPS OUT AT 80%");
vBars(pb,16,56,528,240,[
 {label:"Low",value:66,color:C.alert,text:"66%"},
 {label:"State",value:72.2,color:C.accent,text:"72.2%"},
 {label:"Gadag",value:74.2,color:C.accent,text:"74.2%"},
 {label:"Central",value:77,color:C.accent,text:"77%"},
 {label:"High",value:80,color:C.primary,text:"80%"}],{max:100,barW:64});
T(pb,16,300,528,22,"Key-medicine availability, by study",{family:"Inter",style:"Bold",color:C.alert});
// THE MISSING DRUG
const pc=layered(s,1372,318,477,350,C.alertTint,"CARD: missing drug",C.alert);
TL(pc,16,12,24,"THE MISSING DRUG DECIDES",{color:C.alert,maxW:445});
addRect(pc,16,50,445,2,C.ink);
[["Antivenom (ASV)","58,000 snakebite deaths a year"],["Anti-rabies vaccine","18,000 to 20,000 rabies deaths"],
 ["Oxytocin","MMR 93; haemorrhage leads"],["ORS, paracetamol","Dengue signal: 4 to 6 weeks ahead"]].forEach((d,i)=>{ const y=62+i*70;
  TL(pc,16,y,22,d[0],{family:"Poppins",style:"Bold",color:C.alert,maxW:445}); T(pc,16,y+32,445,22,d[1]); });
// FIVE WHYS
const pd=panel(s,64,692,1100,338,"WHY THE SHELF EMPTIES: FIVE WHYS, ONE ROOT");
const root=addFrame(pd,16,62,250,234,C.alert,C.ink,2,"NODE root");
T(root,16,14,218,24,"ROOT CAUSE",{family:"Poppins",style:"Bold",color:C.white});
T(root,16,60,218,22,"Stock is recorded but never turned into a decision",{family:"Inter",style:"Bold",color:C.white});
addWireH(pd,266,292,179,C.ink,2.5); addRect(pd,290.75,83,2.5,192,C.ink);
["Seen late: HMIS reports monthly, after the shelf empties",
 "No forecast: nobody computes burn rates or surges",
 "Not moved: a nearby PHC holds surplus nobody sees",
 "No hands: 40% of staff absent; registers on paper",
 "Wrong tool: HQ dashboards, no Hindi voice line"].forEach((w,i)=>{ const y=62+i*48;
  addWireH(pd,292,320,y+21,C.ink,2.5);
  const b=addFrame(pd,320,y,764,42,C.white,C.ink,2,"NODE why"); addRect(b,0,0,8,42,C.alert);
  TL(b,20,7,22,w,{family:"Inter",style:"Bold",maxW:736}); });
T(pd,16,304,1068,22,"Haryana: 60% of essential medicines were out of stock for 3 to 6 months at a time",{family:"Inter",style:"Bold",color:C.alert});
// OUT OF POCKET
const pe=panel(s,1188,692,668,338,"HOUSEHOLDS PAY 43.4% OF THE BILL");
donut(pe,24,70,220,0.434,C.alert,"43.4%");
T(pe,270,62,382,22,"Out-of-pocket share of total health spending, 2022-23",{family:"Inter",style:"Bold"});
T(pe,270,134,382,22,"Medicines are 30.84% of current health spending (2021-22)");
T(pe,270,206,382,22,"An empty PHC shelf sends the family to a private chemist",{family:"Inter",style:"Bold",color:C.alert});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

return {results,warnings};
