// ===== NEXORA PREAMBLE v1 =====
const C = {
  primary:{r:0.122,g:0.306,b:0.604}, primaryDeep:{r:0.043,g:0.165,b:0.357},
  accent:{r:0.961,g:0.718,b:0.0}, alert:{r:0.843,g:0.149,b:0.239},
  tint:{r:0.863,g:0.902,b:0.961}, alertTint:{r:0.984,g:0.878,b:0.890},
  blue:{r:0.184,g:0.435,b:0.839}, blueDeep:{r:0.071,g:0.231,b:0.478}, blueTint:{r:0.890,g:0.925,b:0.980},
  good:{r:0.118,g:0.541,b:0.298}, goodTint:{r:0.867,g:0.949,b:0.898}, accentTint:{r:1,g:0.957,b:0.820},
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

// ===== HARVESTBOX DECK EXTRAS =====
const RIB4=["DIAGNOSE AND EVALUATE","RECOMMEND","FINANCIAL AND RISK CASE","90-DAY PLAN AND KPIs"];
const RIBX=["APPENDIX 1: ASSUMPTIONS AND CHECKS","APPENDIX 2: SHORT FORMS AND SOURCES"];
const HG=[null,{r:0.918,g:0.941,b:0.980},{r:0.776,g:0.835,b:0.933},{r:0.557,g:0.667,b:0.859},{r:0.290,g:0.443,b:0.737},{r:0.043,g:0.165,b:0.357}];
const HR=[null,{r:1,g:0.945,b:0.949},{r:0.976,g:0.788,b:0.812},{r:0.933,g:0.498,b:0.549},{r:0.843,g:0.149,b:0.239}];
function hcell(v){ return {t:String(v),f:HG[v],tc:v>=4?C.white:C.ink}; }
function wipe(s){ s.children.slice().forEach(c=>c.remove()); s.fills=[{type:"SOLID",color:C.white}]; }
function skel(s,n,chip,chipW,title,source){ wipe(s); return skeleton2(s,n-2,(n-1)+" / 4",chip,chipW,title,source,RIB4); }
function srcLine(s,text){ const src=addText(s,"Inter","Semi Bold",14,C.primary,text,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+s.name); return src; }
function fine(p,x,y,w,text){ const t=addText(p,"Inter","Semi Bold",16,C.ink,text,x,y,w,20,"LEFT",undefined,true); t.name="FINEPRINT"; return t; }
function rt(p,x,y,w,size,lead,rest,o){ o=o||{}; const t=T(p,x,y,w,size,lead+rest,{color:o.color});
  t.setRangeFontName(0,lead.length,{family:"Inter",style:"Bold"}); if(o.leadColor) t.setRangeFills(0,lead.length,[{type:"SOLID",color:o.leadColor}]); return t; }
function dashedV(p,x,y,h,color,th){ th=th||2.5; let cy=y; while(cy<y+h){ const hh=Math.min(12,y+h-cy); addRect(p,x-th/2,cy,th,hh,color||C.ink); cy+=20; } }
function segBar(p,x,y,w,h,segs){ const tot=segs.reduce((a,s)=>a+s.v,0); let cx=x;
  segs.forEach(sg=>{ const sw=w*sg.v/tot; addRect(p,cx,y,sw,h,sg.c,C.ink,2);
    if(sg.t){ const t=TL(p,0,0,22,sg.t,{family:"Poppins",style:"Bold",color:sg.tc||C.white}); t.x=cx+sw/2-t.width/2; t.y=y+h/2-t.height/2; } cx+=sw; }); }
function teamTableN(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
// Table whose cells wrap: every cell is an auto-height text in a fixed-height row.
function wrapTable(p,x,y,cw,heads,rows,o){ o=o||{}; const hh=o.headerH||40, rh=o.rowH||64, tw=cw.reduce((a,b)=>a+b,0);
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2.5,"TABLE: "+(o.name||"wrap"));
  const h=addFrame(t,0,0,tw,hh,o.headFill||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,i)=>{ addText(h,"Poppins","Bold",22,C.ink,l,cx+12,0,cw[i]-20,hh,"LEFT","CENTER"); cx+=cw[i]; });
  rows.forEach((r,i)=>{ const f=addFrame(t,0,hh+rh*i,tw,rh,(o.fills&&o.fills[i])||(i%2?C.surfaceAlt:C.white),null,0,"ROW"); let x2=0;
    r.forEach((v,j)=>{ const c=T(f,x2+12,0,cw[j]-20,22,v,{family:"Inter",style:j===0?"Bold":"Semi Bold",color:(o.colors&&o.colors[j])||C.ink});
      c.y=Math.max(0,(rh-c.height)/2); if(c.height>rh+1) warnings.push("wrapTable overflow: "+v.slice(0,30)); x2+=cw[j]; });
    addRect(t,0,hh+rh*i-1,tw,1.5,C.ink); });
  let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-1,0,1.5,hh+rh*rows.length,C.ink); }); return t; }
// Waterfall: items [[label, value]]; the first and last items are totals, the rest are steps.
function waterfall(p,x,y,w,h,items,o){ o=o||{}; const n=items.length, pitch=w/n, bw=o.barW||Math.min(96,pitch*0.62), lh=o.labelH||96;
  const top=y+34, base=y+h-lh, min=o.min, max=o.max; const Y=v=>base-(base-top)*(v-min)/(max-min);
  addRect(p,x,Y(0),w,2.5,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b;
    if(tot){ a=0; b=it[1]; run=it[1]; } else { a=run; b=run+it[1]; run=b; }
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(4,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?C.primaryDeep:(it[1]>=0?C.good:C.alert),C.ink,2);
    const txt=(it[1]<0?"−":(tot?"":"+"))+Math.abs(it[1]).toFixed(o.dp===undefined?1:o.dp);
    const below=tot&&it[1]<0; TL(p,0,below?y1+bh+2:y1-32,22,txt,{family:"Poppins",style:"Bold",color:it[1]<0?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-1,pitch-bw,1.5,C.ink);
    const lb=T(p,cx-pitch/2+4,base+(o.labelDy||40),pitch-8,22,o.labels?o.labels[i]:it[0],{family:"Inter",style:"Bold",align:"CENTER"});
    if(lb.height>lh-(o.labelDy||40)+2) warnings.push("waterfall label tall: "+lb.characters); }); return {Y}; }
function node2(p,x,y,w,h,title,sub,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,2,"NODE "+title);
  TL(f,12,6,22,title,{family:"Poppins",style:"Bold",color:o.titleColor||C.primaryDeep,maxW:w-20});
  TL(f,12,36,22,sub,{family:"Inter",style:"Semi Bold",color:o.subColor||C.ink,maxW:w-20}); return f; }
function kv(p,x,y,num,label,o){ o=o||{}; TL(p,x,y,o.size||40,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:o.numW||220,min:26});
  return T(p,x+(o.numW||220)+12,y+(o.dy||6),o.w||300,22,label,{family:"Inter",style:"Bold",color:o.textColor||C.ink}); }
// ===== END HARVESTBOX DECK EXTRAS =====

// ===== DOBAARA DECK EXTRAS (from the Arthik Khayal extras) =====
const RIBN=["SUMMARY","ECONOMICS","TRUST","CUSTOMER","OPTIONS","PLAN","LAUNCH","SIGNALS"];
const RIBAP=["A1 UNIT AND CHANNEL WORKING","A2 PLAN SCREEN AND SENSITIVITY"];
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
function donut(p,cx,cy,d,segs,inner){ const tot=segs.reduce((a,s)=>a+s.v,0);
  if(!ARCS){ let yy=cy-d/2; segs.forEach(sg=>{ const hh=d*sg.v/tot; addRect(p,cx-d/2,yy,d,hh,sg.c,C.ink,2); yy+=hh; }); return; }
  let a=-Math.PI/2; segs.forEach(sg=>{ const b=a+2*Math.PI*sg.v/tot; arc(p,cx,cy,d,a,b,sg.c,inner===undefined?0.55:inner); a=b; }); }
function arrow(p,x1,y1,x2,y2,color,th){ color=color||C.ink; th=th||2.5; addDiagonalWire(p,x1,y1,x2,y2,color,th);
  const a=Math.atan2(y2-y1,x2-x1); [a+2.6,a-2.6].forEach(b=>addDiagonalWire(p,x2,y2,x2+10*Math.cos(b),y2+10*Math.sin(b),color,th)); }
function callout(p,x,y,w,h,lead,text,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.accentTint,C.ink,2,"CALLOUT");
  rt(f,14,o.py===undefined?10:o.py,w-28,22,lead,text,{color:o.color,leadColor:o.leadColor||C.primaryDeep}); return f; }
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=50, hh=46, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
// Cover strip: competition chip, organiser and partner logo slots, team chip, a wire with dots.
function coverTop(s){ addChip(s,64,48,700,56,"MARKSOC DTU CASE COMPETITION 2026",C.primaryDeep,C.white,22);
  [["MarKSoc DTU",790,150],["CrackNontech",960,200],["DTU",1180,96]].forEach(l=>logoSlot(s,l[1],40,l[2],72,l[0]));
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// Image placeholder (people or product shots): grey, dashed, named IMG.
function imgSlot(p,x,y,w,h,label){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+label); try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,label,4,0,w-8,h,"CENTER","CENTER",false); return f; }
// Monogram tile for the case's fictional names (Tikau, PhoneBazaar, MegaKart, the team): drawn natively, never a logo upload.
function mono(p,x,y,w,h,txt,fill,fg,sz){ sz=sz||20; const f=addFrame(p,x,y,w,h,fill||C.primaryDeep,C.ink,1.5,"MONO: "+txt);
  const t=addText(f,"Poppins","Bold",sz,fg||C.white,txt,4,0,w-8,h,"CENTER","CENTER"); if(sz<22) t.name="SEC"; return f; }
// Mind-map node: one to three brand slots ("IMG:" image slot, "MONO:" monogram, else a logo slot), a title and a wrapped sub-line.
function actorL(p,x,y,w,h,brands,title,sub){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2,"NODE "+title); addRect(f,0,0,6,h,C.accent);
  const n=Math.max(1,brands.length), gap=6, bw=(w-28-gap*(n-1))/n;
  brands.forEach((b,i)=>{ const bx0=16+i*(bw+gap);
    if(b.startsWith("IMG:")) imgSlot(f,bx0,8,bw,56,b.slice(4)); else if(b.startsWith("MONO:")) mono(f,bx0,8,bw,56,b.slice(5),C.primary,C.white,18); else logoSlot(f,bx0,8,bw,56,b); });
  TL(f,16,68,22,title,{color:C.primaryDeep,maxW:w-28}); sT(f,16,102,w-28,18,sub,{family:"Inter",style:"Semi Bold"}); return f; }
// Heat cells.
function ynCell(v){ if(v==="Yes"||v==="Pass") return {t:v,f:C.goodTint,tc:C.good}; if(v==="Part") return {t:"Part",f:C.accentTint,tc:C.ink};
  if(v==="No"||v==="Fail") return {t:v,f:C.alertTint,tc:C.alert}; return {t:String(v),f:C.white,tc:C.ink}; }
function sc5(v){ const k=Math.max(1,Math.min(5,v)); return {t:String(v),f:HG[k],tc:k>=4?C.white:C.ink}; }
function rag(p,x,y,w,h,t){ const f=t==="GREEN"?C.good:(t==="AMBER"?C.accent:C.alert);
  return bx(p,x,y,w,h,t,{fill:f,color:t==="AMBER"?C.ink:C.white,fam:"Poppins",st:"Bold",size:18}); }
// Tornado at 18 pt around a base value: the bear side in red, the bull side in blue.
function torS(p,x,y,w,items,baseV,o){ o=o||{}; const lw=o.lw||240, rh=o.rh||30, span=w-lw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const lo=Math.min(it.lo,it.hi), hi=Math.max(it.lo,it.hi);
    addRect(p,X(lo),ry+5,Math.max(2,X(baseV)-X(lo)),rh-10,C.alert,C.ink,1); addRect(p,X(baseV),ry+5,Math.max(2,X(hi)-X(baseV)),rh-10,C.primary,C.ink,1); });
  addRect(p,X(baseV)-1,y-4,2.5,rh*items.length+8,C.ink);
  (o.ticks||[]).forEach(t=>sTL(p,0,y+rh*items.length+6,18,t.toFixed(1),{family:"Inter",style:"Bold",centerAt:X(t)})); return X; }
// Bullet line with a bold lead at 18 pt; returns the next y.
function bl18(p,x,y,w,items,o){ o=o||{}; let cy=y; items.forEach(it=>{ addRect(p,x,cy+6,9,9,o.dot||C.primary,C.ink,1);
  const t=sRT(p,x+18,cy,w-18,18,it[0],it[1],{leadColor:o.lc||C.primaryDeep}); cy+=t.height+(o.gap===undefined?6:o.gap); }); return cy; }
// Small numeral + label tile.
function tile(p,x,y,w,h,num,label,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,1.5,o.name||"TILE");
  TL(f,10,o.ny===undefined?2:o.ny,o.size||26,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-20,min:18});
  sT(f,10,o.ly||40,w-20,18,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
function tick(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: tick"); addEllipse(f,0,0,d,d,C.good,C.ink,1.5);
  addDiagonalWire(f,d*0.25,d*0.53,d*0.43,d*0.71,C.white,3); addDiagonalWire(f,d*0.43,d*0.71,d*0.76,d*0.32,C.white,3); return f; }
function cross(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: cross"); addEllipse(f,0,0,d,d,C.alert,C.ink,1.5);
  addDiagonalWire(f,d*0.3,d*0.3,d*0.7,d*0.7,C.white,3); addDiagonalWire(f,d*0.7,d*0.3,d*0.3,d*0.7,C.white,3); return f; }
// Table whose rows grow to fit wrapped cells. rows: arrays of strings; o.size (18 default), o.hh, o.pad, o.colors[j], o.fills[i], o.bold[j], o.strike[j].
function wtab(p,x,y,cw,heads,rows,o){ o=o||{}; const sz=o.size||18, hh=o.hh||28, pd=o.pad===undefined?5:o.pad, tw=cw.reduce((a,b)=>a+b,0);
  const t=addFrame(p,x,y,tw,10,C.white,C.ink,2,"TABLE: "+(o.name||"wtab")); const h=addFrame(t,0,0,tw,hh,o.hf||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,i)=>{ nmS(addText(h,"Poppins","Bold",sz,C.ink,l,cx+7,0,cw[i]-12,hh,"LEFT","CENTER"),sz); cx+=cw[i]; });
  let ry=hh;
  rows.forEach((r,i)=>{ const f=addFrame(t,0,ry,tw,10,(o.fills&&o.fills[i])||(i%2?C.surfaceAlt:C.white),null,0,"ROW"); let x2=0, mh=0;
    r.forEach((v,j)=>{ const c=sT(f,x2+7,pd,cw[j]-12,sz,String(v),{family:"Inter",style:(j===0||(o.bold&&o.bold.includes(j)))?"Bold":"Semi Bold",color:(o.colors&&o.colors[j])||C.ink});
      mh=Math.max(mh,c.height); x2+=cw[j]; });
    const rh=Math.ceil(mh+2*pd); f.resize(tw,rh); if(o.strike) o.strike.forEach(j=>{ let sx=0; for(let q=0;q<j;q++) sx+=cw[q]; addRect(f,sx+7,Math.round(rh/2),cw[j]-14,2,C.alert); });
    addRect(t,0,ry-0.75,tw,1.5,C.ink); ry+=rh; });
  t.resize(tw,ry); let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-0.75,0,1.5,ry,C.ink); }); return t; }
// Vertical bars that may be negative. items: [{label, value, color, text}]; o.min, o.max, o.bw, o.size.
function vbarsN(p,x,y,w,h,items,o){ o=o||{}; const sz=o.size||18, lh=Math.ceil(sz*1.25), n=items.length, pitch=w/n, bw=o.bw||Math.min(70,pitch*0.6);
  const top=y+lh+4, base=y+h-(o.lab||lh*2)-4, Y=v=>top+(base-top)*(o.max-v)/(o.max-o.min); addRect(p,x,Y(0)-1,w,2,C.ink);
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, y0=Y(Math.max(0,it.value)), y1=Y(Math.min(0,it.value)), bh=Math.max(3,y1-y0);
    addRect(p,cx-bw/2,y0,bw,bh,it.color||(it.value<0?C.alert:C.primary),C.ink,1.5);
    const tx=it.text||((it.value<0?"−":"")+Math.abs(it.value).toFixed(o.dp===undefined?1:o.dp));
    sTL(p,0,it.value<0?y0+bh+2:y0-lh-2,sz,tx,{family:"Inter",style:"Bold",color:it.value<0?C.alert:C.primaryDeep,centerAt:cx});
    sT(p,cx-pitch/2+2,base+4,pitch-4,sz,it.label,{family:"Inter",style:"Bold",align:"CENTER"}); }); return {Y,base,top}; }
// Horizontal bars that may be negative. items: [{label, value, color, text}]; o.lw label width, o.min, o.max, o.rh.
function hbarsN(p,x,y,w,items,o){ o=o||{}; const lw=o.lw||220, rh=o.rh||30, vw=o.vw||70, span=w-lw-vw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const a=X(Math.min(0,it.value)), b=X(Math.max(0,it.value)); addRect(p,a,ry+5,Math.max(2,b-a),rh-10,it.color||(it.value<0?C.alert:C.primary),C.ink,1);
    const tx=it.text||((it.value<0?"−":"")+Math.abs(it.value).toFixed(1));
    if(it.value<0) sTL(p,0,ry+Math.round((rh-23)/2),18,tx,{family:"Inter",style:"Bold",color:C.alert,rightAt:a-4}); else sTL(p,b+4,ry+Math.round((rh-23)/2),18,tx,{family:"Inter",style:"Bold",color:C.primaryDeep}); });
  addRect(p,X(0)-1,y-4,2,rh*items.length+8,C.ink); return X; }
// Capacity bar: a filled part, a dashed outline for the rest, a label on the left, a value on the right.
function capBar(p,x,y,w,h,used,cap,o){ o=o||{}; const fw=Math.max(3,w*Math.min(1,used/cap)); addRect(p,x,y,fw,h,o.color||C.primary,C.ink,1.5);
  if(used<cap) ghost(p,x+fw,y,w-fw,h,o.ghost||C.primaryDeep); return fw; }
// Grid of dots: n dots, the first k in the alert colour.
function dots(p,x,y,cols,n,k,d,gap){ for(let i=0;i<n;i++){ const r=Math.floor(i/cols), c=i%cols; addEllipse(p,x+c*(d+gap),y+r*(d+gap),d,d,i<k?C.alert:C.tint,C.ink,1); } }
// Browser mockup: returns the content frame.
function browser(p,x,y,w,h,url){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2.5,"MOCKUP: browser"); const bar=addFrame(f,0,0,w,40,C.surface,C.ink,1.5,"BAR");
  [12,32,52].forEach((cx,i)=>addEllipse(bar,cx,13,14,14,[C.alert,C.accent,C.good][i],C.ink,1));
  const u=addFrame(bar,76,7,w-92,26,C.white,C.ink,1,"URL"); sTL(u,10,1,18,url,{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
  const sc=addFrame(f,0,40,w,h-40,C.white,null,0,"SCREEN"); return sc; }
// A numbered step card with a dark header strip and a wrapped body (18 pt).
function step(p,x,y,w,h,head,who,body,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,2,"STEP "+head);
  const hz=o.hs||22, hf=addFrame(f,0,0,w,34,o.hfill||C.primaryDeep,C.ink,1.5,"HEAD"); (hz<22?sTL:TL)(hf,10,Math.round((34-hz*1.5)/2),hz,head,{color:o.hc||C.white,maxW:w-20});
  let y2=40; if(who){ const a=sT(f,8,y2,w-16,18,who,{family:"Inter",style:"Bold",color:C.primaryDeep}); y2+=a.height+2; }
  sT(f,8,y2,w-16,18,body,{family:"Inter",style:"Semi Bold"}); return f; }
// Waterfall with Indian digit grouping (dp 0) or one decimal; first and last items are totals; labels at 18 pt.
function wfN(p,x,y,w,h,items,o){ o=o||{}; const sz=18, n=items.length, pitch=w/n, bw=o.bw||Math.min(80,pitch*0.6), lh=o.lh||48, dp=o.dp===undefined?1:o.dp;
  const fm=v=>dp===0?fmtN(Math.abs(v)):Math.abs(v).toFixed(dp);
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,Y(0)-1,w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=0;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?(it[1]<0?C.alert:C.primaryDeep):(it[1]>=0?C.good:C.alert),C.ink,1.5);
    const neg=it[1]<0, txt=(neg?"−":(tot?"":"+"))+fm(it[1]), ly=(tot&&neg)?y1+bh+2:y1-Math.ceil(sz*1.25)-2;
    sTL(p,0,ly,sz,txt,{family:"Inter",style:"Bold",color:neg?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sT(p,cx-pitch/2+3,base+4,pitch-6,sz,it[0],{family:"Inter",style:"Bold",align:"CENTER"}); }); return {Y,base,top}; }
// ===== END DOBAARA DECK EXTRAS =====

// ===== REDESIGN HELPERS: appended after the preamble for slides 2, 3 and 5 only =====
const RAILROT=true; // fix rule F5: set to false only if a rail label is not drawn bottom-to-top, centred inside its bar, in Figma
// A zone is an invisible frame: no fill, no stroke. It groups one exhibit so nothing but text and charts shows.
function zone(s,x,y,w,h,name){ const f=addFrame(s,x,y,w,h,null,null,0,"ZONE: "+name); try{ f.clipsContent=false; }catch(e){} return f; }
// EY rail: a 40 px filled bar on the left edge of a band with its label rotated 90 degrees, reading bottom to top.
function rail(s,x,y,h,label,color,fg){ const r=addRect(s,x,y,40,h,color||C.primaryDeep,C.ink,2); r.name="RAIL: "+label;
  const t=addText(s,"Poppins","Bold",22,fg||C.white,label,0,0); t.name="RAILTEXT";
  if(t.width>h-12) warnings.push("rail label too long: "+label);
  const tw=t.width, th=t.height;
  if(RAILROT){ t.relativeTransform=[[0,1,x+(40-th)/2],[-1,0,y+h/2+tw/2]]; return r; }
  // fallback: rotate with the rotation property, then centre the rotated box on the bar using measured boxes
  t.x=x; t.y=y; t.rotation=90; const b=t.absoluteBoundingBox, rb=r.absoluteBoundingBox;
  t.x+=(rb.x+20)-(b.x+b.width/2); t.y+=(rb.y+h/2)-(b.y+b.height/2); return r; }
// Lead line of a zone: the one-sentence finding of the exhibit under it. Wraps.
function lead(p,x,y,w,text,o){ o=o||{}; return T(p,x,y,w,o.size||24,text,{family:"Poppins",style:"Bold",color:o.color||C.primaryDeep}); }
// Dashed outline with no fill: the part of a bar that is missing.
function ghost(p,x,y,w,h,color){ const r=addRect(p,x,y,w,h,null,color||C.alert,2); try{ r.dashPattern=[6,4]; }catch(e){} return r; }
// ===== END REDESIGN HELPERS =====

// ===== R2 HELPERS: appended after the preamble and _x2.js for slides 2 to 5 =====
// Text below 22 pt is secondary text (user decision, 16 Oct 2026): never below 18 pt, always named SEC.
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
function elb(p,x1,y1,x2,y2,c,th){ th=th||2; c=c||C.ink; const mx=Math.round((x1+x2)/2);
  addRect(p,x1,y1-th/2,Math.max(2,mx-x1),th,c); addRect(p,mx-th/2,Math.min(y1,y2)-th/2,th,Math.abs(y2-y1)+th,c); addRect(p,mx,y2-th/2,Math.max(2,x2-mx),th,c); }
function tbl(p,x,y,cw,heads,rows,o){ o=o||{}; const sz=o.size||18, hh=o.hh||26, rh=o.rh||24, tw=cw.reduce((a,b)=>a+b,0), al=o.align||[];
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: "+(o.name||"t")); const h=addFrame(t,0,0,tw,hh,o.hf||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,i)=>{ nmS(addText(h,"Inter","Bold",sz,C.ink,l,cx+7,0,cw[i]-12,hh,al[i]||"LEFT","CENTER"),sz); cx+=cw[i]; });
  rows.forEach((r,i)=>{ const f=addFrame(t,0,hh+rh*i,tw,rh,(o.fills&&o.fills[i])||(i%2?C.surfaceAlt:C.white),null,0,"ROW"); let x2=0;
    if(o.strip) addRect(f,0,0,5,rh,o.strip[i]);
    r.forEach((v,j)=>{ nmS(addText(f,"Inter",(j===0||(o.bold&&o.bold.includes(j)))?"Bold":"Semi Bold",sz,(o.rc&&o.rc[i])||C.ink,String(v),x2+7,0,cw[j]-12,rh,al[j]||"LEFT","CENTER"),sz); x2+=cw[j]; });
    addRect(t,0,hh+rh*i-1,tw,1.5,C.ink); });
  let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-1,0,1.5,hh+rh*rows.length,C.ink); }); return t; }
function lgS(p,x,y,c,label,sz){ sz=sz||18; addRect(p,x,y+4,14,14,c,C.ink,1); const t=sTL(p,x+20,y,sz,label,{family:"Inter",style:"Bold"}); return x+20+t.width+14; }
function cols(p,x,y,w,h,cats,series,o){ o=o||{}; const sz=o.size||18, lh=Math.ceil(sz*1.25), n=cats.length, pitch=w/n, bw=o.bw||Math.min(60,pitch*0.6);
  const top=y+lh+4, base=y+h-lh-2, max=o.max; addRect(p,x,base,w,2,C.ink);
  cats.forEach((c,i)=>{ const cx=x+pitch*i+pitch/2; let acc=0;
    series.forEach(s=>{ const v=s.values[i]; if(!(v>0)) return; const hh=(base-top)*v/max; addRect(p,cx-bw/2,base-(base-top)*(acc+v)/max,bw,Math.max(1.5,hh),s.color,C.ink,1); acc+=v; });
    if(o.totals&&o.totals[i]) sTL(p,0,base-(base-top)*acc/max-lh,sz,o.totals[i],{family:"Inter",style:"Bold",centerAt:cx});
    sTL(p,0,base+2,sz,c,{family:"Inter",style:"Bold",centerAt:cx}); }); return {base,top,pitch}; }
function wf(p,x,y,w,h,items,o){ o=o||{}; const sz=o.size||18, n=items.length, pitch=w/n, bw=o.bw||Math.min(80,pitch*0.6), lh=o.lh||48;
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,Y(0),w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=0;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?C.primaryDeep:(it[1]>=0?C.good:C.alert),C.ink,1.5);
    sTL(p,0,y1-Math.ceil(sz*1.25)-2,sz,(it[1]<0?"−":(tot?"":"+"))+Math.abs(it[1]).toFixed(o.dp===undefined?1:o.dp),{family:"Inter",style:"Bold",color:it[1]<0?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sT(p,cx-pitch/2+3,base+4,pitch-6,sz,it[0],{family:"Inter",style:"Bold",align:"CENTER"}); }); return {Y}; }
function lcS(p,x,y,w,h,series,xl,o){ o=o||{}; const sz=o.size||18, L=x+(o.padL||56), R=x+w-(o.padR||120), Tp=y+8, B=y+h-Math.ceil(sz*1.3)-6;
  const X=i=>L+(R-L)*i/(xl.length-1), Y=v=>B-(B-Tp)*(v-o.yMin)/(o.yMax-o.yMin);
  (o.yTicks||[]).forEach(v=>{ addRect(p,L,Y(v),R-L,1,C.surface); sTL(p,0,Y(v)-Math.round(sz*0.62),sz,String(v),{family:"Inter",style:"Semi Bold",rightAt:L-6}); });
  addRect(p,L,B,R-L,2,C.ink); addRect(p,L,Tp,2,B-Tp,C.ink);
  xl.forEach((lb,i)=>sTL(p,0,B+4,sz,lb,{family:"Inter",style:"Bold",centerAt:X(i)}));
  series.forEach(se=>{ const pts=se.values.map((v,i)=>[X(i),Y(v)]);
    for(let i=0;i<pts.length-1;i++) addDiagonalWire(p,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],se.color,3.5);
    pts.forEach(pt=>addEllipse(p,pt[0]-5,pt[1]-5,10,10,se.color,C.ink,1.5));
    if(se.label){ const l=pts[pts.length-1]; sTL(p,l[0]+10,l[1]-Math.round(sz*0.62)+(se.dy||0),sz,se.label,{family:"Inter",style:"Bold",color:se.color}); } });
  return {X,Y,L,R,Tp,B}; }
function hgrid(p,x,y,rl,cl,cells,o){ o=o||{}; const sz=o.size||18, lw=o.lw||200, cw=o.cw||70, rh=o.rh||24, hh=o.hh||24, W=lw+cw*cl.length, H=hh+rh*rl.length;
  const g=addFrame(p,x,y,W,H,C.white,C.ink,2,"TABLE: "+(o.name||"grid")); addFrame(g,0,0,W,hh,C.tint,null,0,"HEAD");
  if(o.corner) nmS(addText(g,"Inter","Bold",sz,C.ink,o.corner,7,0,lw-12,hh,"LEFT","CENTER"),sz);
  cl.forEach((c,j)=>nmS(addText(g,"Inter","Bold",sz,C.ink,c,lw+cw*j+3,0,cw-6,hh,"CENTER","CENTER"),sz));
  rl.forEach((r,i)=>{ const ry=hh+rh*i; nmS(addText(g,"Inter","Bold",sz,C.ink,r,7,ry,lw-12,rh,"LEFT","CENTER"),sz);
    cells[i].forEach((c,j)=>{ const cf=addFrame(g,lw+cw*j,ry,cw,rh,c.f||C.white,C.ink,1,"CELL"); nmS(addText(cf,"Inter","Bold",sz,c.tc||C.ink,c.t,3,0,cw-6,rh,"CENTER","CENTER"),sz); });
    addRect(g,0,ry-0.75,W,1.5,C.ink); });
  addRect(g,lw-1,0,2,H,C.ink); return g; }
function gnt(p,x,y,lw,cw,rh,cl,rows,o){ o=o||{}; const sz=o.size||18, hy=Math.ceil(sz*1.3)+4;
  cl.forEach((c,j)=>{ sTL(p,0,y,sz,c,{family:"Inter",style:"Bold",centerAt:x+lw+cw*j+cw/2}); addRect(p,x+lw+cw*j,y+hy-2,1.5,rh*rows.length+4,C.surface); });
  const y0=y+hy;
  rows.forEach((r,i)=>{ const ry=y0+rh*i; sTL(p,x,ry+(rh-Math.ceil(sz*1.25))/2,sz,r.label,{family:"Inter",style:"Bold",maxW:lw-10});
    addRect(p,x+lw+cw*r.s+3,ry+3,cw*(r.e-r.s+1)-6,rh-6,r.color||C.primary,C.ink,1.5); }); return y0; }
function fun(p,x,y,w,tiers,o){ o=o||{}; const th=o.th||32, gap=o.gap===undefined?4:o.gap, minW=o.minW||w*0.4, n=tiers.length;
  tiers.forEach((t,i)=>{ const tw=w-(w-minW)*i/Math.max(1,n-1), tx=x+(w-tw)/2, ty=y+i*(th+gap), sz=t.size||20;
    const f=addFrame(p,tx,ty,tw,th,t.f||HG[5-Math.min(4,i)],C.ink,1.5,"TIER");
    nmS(addText(f,"Poppins","Bold",sz,t.tc||C.white,t.t,4,0,tw-8,th,"CENTER","CENTER"),sz); }); }
function bub(p,cx,cy,d,label,fill,fg){ addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,1.5); const t=sTL(p,0,0,18,label,{color:fg||C.white}); t.x=cx-t.width/2; t.y=cy-t.height/2; return t; }
// ===== END R2 HELPERS =====


let V;
{
V = {"feas": [["B1 + B2 + shift from Feb", "58.0", "5.6", "−0.5", "4.5%"], ["B1 + B2 + shift from Mar", "49.0", "5.6", "−14.8", "4.5%"], ["B1 + C + shift from Feb", "68.0", "1.9", "−26.6", "5.6%"], ["B1 + C + shift from Mar", "59.0", "1.9", "−34.4", "5.6%"], ["B1 + B2 + C", "75.0", "3.4", "−44.4", "4.5%"]], "lost_noshift": "1,198", "kab_mar": "−₹8.6 lakh", "roh_mar": "−₹55.7 lakh", "all_gm": "93.0", "gap2": "14.2", "team": {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"], ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University", "Member"], ["Dayita Arora", "Ramjas College, University of Delhi", "Member"]]}};
const results=[];

{ const s = await figma.getNodeByIdAsync("3:8");
const k=layered(s,64,796,800,236,C.primaryDeep,"CARD: conclusively");
TL(k,16,8,22,"CONCLUSIVELY: THE OBVIOUS ANSWERS FAIL",{color:C.accent,maxW:768});
const CT=[["Price push (A)","Fair falls to ₹416; March "+V.roh_mar,"Fails tests 2 to 4"],
  ["Certify, no shift",V.lost_noshift+" orders a month miss the lab","Fails test 2 ("+V.kab_mar+")"],
  ["Trade in now (C)","needs ₹"+V.all_gm+" lakh with B1, B2, shift","Fails test 1"]];
tbl(k,16,46,[180,400,196],["Rejected plan","The number that kills it","Verdict"],CT,{hh:26,rh:46,name:"conclusively table",align:["LEFT","LEFT","LEFT"],bold:[0,2]});
const t=pnl(s,880,796,976,236,"THE FIVE PLANS THAT PASS, ₹ LAKH");
tbl(t,14,46,[330,150,150,180,138],["Plan","Growth money","Mar EBITDA","Q1 vs nothing","Mar returns"],V.feas,{hh:26,rh:28,name:"pass",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[C.accentTint,null,null,null,null]});
sT(t,14,214,948,18,"The next best plan ends Q1 ₹"+V.gap2+" lakh lower.",{family:"Inter",style:"Bold",color:C.primaryDeep});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }


}
{
V = {"hash": "9b3628d94d", "e0_n": -14.14, "e_n": {"Jan": -54.14, "Feb": 5.6, "Mar": 5.6}, "sold": {"Jan": "7,200", "Feb": "8,328", "Mar": "8,328"}, "swing": "+19.7", "util_mar": "93%", "rr_mar": "4.5%", "e0_rl": "−₹14.1 lakh", "e_mar_rl": "+₹5.6 lakh", "gm_rl": "₹58.0 lakh", "swing_rl": "₹19.7 lakh", "team": {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"], ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University", "Member"], ["Dayita Arora", "Ramjas College, University of Delhi", "Member"]]}};
const results=[];
{ const s = await figma.getNodeByIdAsync("3:9");
skelBT(s,5,"6 / 8","THE PLAN",240,"Our plan spends "+V.gm_rl+", passes all four tests and turns March EBITDA from "+V.e0_rl+" to "+V.e_mar_rl+": "+V.swing_rl+" a month better than doing nothing",
  "Source: team model "+V.hash+" (T15, T16); decision table format from case page 7 | EBITDA = contribution after marketing − ₹58 lakh fixed costs − growth money that month");
const m=layered(s,64,310,640,420,C.white,"CARD: MONEYSHOT",C.alert);
TL(m,16,8,22,"MARCH EBITDA, ₹ LAKH A MONTH",{color:C.alert,maxW:608}); addRect(m,16,42,608,2,C.ink);
TL(m,16,48,96,V.swing,{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:330,min:60});
T(m,16,196,320,22,"₹ lakh a month better than doing nothing, from 1 February",{family:"Inter",style:"Bold",color:C.primaryDeep});
vbarsN(m,360,52,264,236,[{label:"Do nothing",value:V.e0_n,color:C.alert},{label:"Our plan",value:V.e_n.Mar,color:C.good}],{min:-20,max:10,bw:70,lab:30});
[[V.gm_rl,"of ₹80 lakh used"],[V.rr_mar,"returns; limit 6.0%"],[V.sold.Mar,"phones in March"],[V.util_mar,"of the 9,000 lab limit"]].forEach((r,i)=>tile(m,16+152*i,300,144,104,r[0],r[1],{size:24,ly:40}));
}


}
const affected=await Promise.all(["3:8","3:9"].map(id=>figma.getNodeByIdAsync(id)));return {createdNodeIds:affected.flatMap(s=>s.findAll(()=>true).map(n=>n.id)),mutatedNodeIds:affected.map(s=>s.id),slides:affected.map(s=>({id:s.id,name:s.name,nodes:s.findAll(()=>true).length})),warnings};