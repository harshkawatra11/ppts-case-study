// ===== NEXORA PREAMBLE v1 =====
const C = {
  primary:{r:0.910,g:0.349,b:0.047}, primaryDeep:{r:0.043,g:0.122,b:0.302},
  accent:{r:1,g:0.780,b:0.173}, alert:{r:0.784,g:0.118,b:0.290},
  tint:{r:1,g:0.910,b:0.839}, alertTint:{r:0.984,g:0.867,b:0.894},
  blue:{r:0.122,g:0.306,b:0.620}, blueDeep:{r:0.043,g:0.122,b:0.302}, blueTint:{r:0.863,g:0.902,b:0.969},
  good:{r:0.118,g:0.541,b:0.298}, goodTint:{r:0.847,g:0.941,b:0.878}, accentTint:{r:1,g:0.949,b:0.800},
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
const HG=[null,{r:1,g:0.945,b:0.902},{r:1,g:0.827,b:0.690},{r:1,g:0.667,b:0.420},{r:0.941,g:0.478,b:0.169},{r:0.722,g:0.259,b:0.039}];
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

// ===== BEYONDTECH DECK EXTRAS =====
const RIBN=["SUMMARY","DIAGNOSIS","DTU PLAN","DTU BUDGET","SELECTION","LAUNCH","PLAYBOOK","ROADMAP"];
const RIBAP=["A1 FULL SCORECARD","A2 ASSUMPTIONS","A3 SCENARIOS","A4 METHOD AND SOURCES"];
const ARCS=true; // set to false if a donut or Harvey ball renders as a full disc in Figma
function ribbonBT(s,active,labels){ const y=40,h=60,n=labels.length; let size=24;
  let tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l));
  const fits=pad=>tw.reduce((a,b)=>a+b,0)+pad*n+26*(n-1)<=1792;
  let pad=64; while(!fits(pad)&&pad>44) pad-=4;
  if(!fits(pad)){ size=22; tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l)); pad=64; while(!fits(pad)&&pad>44) pad-=4; }
  if(!fits(pad)) warnings.push("ribbon too wide");
  const widths=tw.map(w=>Math.ceil(w+pad)), used=widths.reduce((a,b)=>a+b,0), gap=n>1?Math.min(80,Math.max(26,(1792-used)/(n-1))):0;
  let x=64; const bx=[];
  for(let i=0;i<n;i++){ const w=widths[i], act=i===active;
    if(act) addRect(s,x+8,y+8,w,h,C.accent,C.ink,2.5);
    addRect(s,x,y,w,h,act?C.primaryDeep:C.accent,C.ink,2);
    addText(s,"Poppins","Bold",size,act?C.white:C.ink,labels[i],x,y+Math.round((h-size*1.5)/2),w,Math.round(size*1.5),"CENTER","CENTER");
    addEllipse(s,x+3,y+h/2-7,14,14,C.white,C.ink,2); addEllipse(s,x+w-17,y+h/2-7,14,14,C.white,C.ink,2);
    bx.push({x,w}); x+=w+gap; }
  for(let i=0;i<n-1;i++) addWireH(s,bx[i].x+bx[i].w-10,bx[i+1].x+10,y+h/2,C.ink,2.5); }
function skelBT(s,active,counter,chip,chipW,title,source,o){ o=o||{}; wipe(s);
  ribbonBT(s,active,o.labels||RIBN);
  addChip(s,64,118,chipW,56,chip,C.primary,C.white,22);
  const cw=o.counterW||156; addChip(s,1856-cw,118,cw,56,counter,C.primaryDeep,C.white,24);
  const t=addText(s,"Poppins","Bold",40,C.ink,title,64,188,1792,100,"LEFT",undefined,true); t.name="HEADLINE";
  while(t.height>112 && t.fontSize>34){ t.fontSize=t.fontSize-1; }
  if(t.height>112) warnings.push("headline 3 lines: "+counter);
  srcLine(s,source); return t; }
function imgSlot(p,x,y,w,h,name,cap){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+name);
  try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,cap||name,4,0,w-8,h,"CENTER","CENTER",false); return f; }
function stepFunnel(p,x,y,w,tiers,o){ o=o||{}; const th=o.tierH||64, gap=o.gap===undefined?8:o.gap, minW=o.minW||w*0.34, n=tiers.length;
  tiers.forEach((t,i)=>{ const tw=w-(w-minW)*i/Math.max(1,n-1), tx=x+(w-tw)/2, ty=y+i*(th+gap);
    const f=addFrame(p,tx,ty,tw,th,t.f||HG[5-Math.min(4,i)],C.ink,2,"TIER "+i);
    addText(f,"Poppins","Bold",t.size||26,t.tc||C.white,t.t,4,0,tw-8,th,"CENTER","CENTER");
    if(i<n-1&&gap>0) addRect(p,x+w/2-1.25,ty+th,2.5,gap,C.ink); }); }
function arc(p,cx,cy,d,a0,a1,fill,inner){ const e=addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,2);
  try{ e.arcData={startingAngle:a0,endingAngle:a1,innerRadius:inner||0}; }catch(err){ warnings.push("arc failed"); } return e; }
function donut(p,cx,cy,d,segs,inner){ const tot=segs.reduce((a,s)=>a+s.v,0);
  if(!ARCS){ let yy=cy-d/2; segs.forEach(sg=>{ const hh=d*sg.v/tot; addRect(p,cx-d/2,yy,d,hh,sg.c,C.ink,2); yy+=hh; }); return; }
  let a=-Math.PI/2; segs.forEach(sg=>{ const b=a+2*Math.PI*sg.v/tot; arc(p,cx,cy,d,a,b,sg.c,inner===undefined?0.55:inner); a=b; }); }
function harvey(p,cx,cy,d,q){
  if(!ARCS){ for(let i=0;i<4;i++) addRect(p,cx-d/2+i*(d/4),cy-d/4,d/4-2,d/2,i<q?C.primaryDeep:C.white,C.ink,1.5); return; }
  addEllipse(p,cx-d/2,cy-d/2,d,d,q>=4?C.primaryDeep:C.white,C.ink,2);
  if(q>0&&q<4) arc(p,cx,cy,d,-Math.PI/2,-Math.PI/2+q*Math.PI/2,C.primaryDeep,0); }
function pin(p,cx,cy,d,label,fill,fg){ addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,2);
  if(label){ const t=TL(p,0,0,22,label,{color:fg||C.white}); t.x=cx-t.width/2; t.y=cy-t.height/2; } }
function mapDots(p,x,y,w,h,rows,nc,fill){ const cw=w/nc, ch=h/rows.length, d=Math.min(cw,ch)*0.72;
  rows.forEach((runs,r)=>runs.forEach(u=>{ for(let k=u[0];k<u[0]+u[1];k++){ const e=addRect(p,x+k*cw+(cw-d)/2,y+r*ch+(ch-d)/2,d,d,fill); e.name="MAPDOT"; } })); }
function geo(x,y,w,h,lat,lon){ return [x+(lon-68.1)/29.3*w, y+(37.1-lat)/30.4*h]; }
function arrow(p,x1,y1,x2,y2,color,th){ color=color||C.ink; th=th||2.5; addDiagonalWire(p,x1,y1,x2,y2,color,th);
  const a=Math.atan2(y2-y1,x2-x1); [a+2.6,a-2.6].forEach(b=>addDiagonalWire(p,x2,y2,x2+12*Math.cos(b),y2+12*Math.sin(b),color,th)); }
function diamond(p,cx,cy,r,fill){ const sd=r*Math.SQRT2, q=Math.SQRT1_2; const d=figma.createRectangle(); p.appendChild(d); d.resize(sd,sd);
  d.fills=[{type:"SOLID",color:fill}]; d.strokes=[{type:"SOLID",color:C.ink}]; d.strokeWeight=2; d.cornerRadius=0;
  d.relativeTransform=[[q,-q,cx],[q,q,cy-r]]; return d; }
function callout(p,x,y,w,h,lead,text,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.accentTint,C.ink,2,"CALLOUT");
  rt(f,14,o.py===undefined?10:o.py,w-28,22,lead,text,{color:o.color,leadColor:o.leadColor||C.primaryDeep}); return f; }
function kpi(s,x,y,w,h,num,label,o){ o=o||{}; const f=layered(s,x,y,w,h,o.fill||C.white,"KPI: "+label.slice(0,24),o.back);
  TL(f,16,o.ny===undefined?4:o.ny,o.size||48,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-32,min:30});
  T(f,16,o.ly||72,w-32,22,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
function bl(p,x,y,w,items,o){ o=o||{}; let cy=y; items.forEach(it=>{ addRect(p,x,cy+9,10,10,o.dot||C.primary,C.ink,1.5);
  const t=Array.isArray(it)?rt(p,x+22,cy,w-22,22,it[0],it[1],{color:o.color,leadColor:o.leadColor}):T(p,x+22,cy,w-22,22,it,{color:o.color});
  cy+=t.height+(o.gap===undefined?10:o.gap); }); return cy; }
function lg(p,x,y,color,label){ addRect(p,x,y+6,18,18,color,C.ink,1.5); const t=TL(p,x+26,y,22,label,{family:"Inter",style:"Bold"}); return x+26+t.width+22; }
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
function coverTop(s){ addChip(s,64,48,560,56,"BEYONDTECH CASE COMPETITION 2026",C.primary,C.white,22);
  logoSlot(s,656,40,170,72,"BeyondTech"); logoSlot(s,842,40,72,72,"DTU"); logoSlot(s,930,40,72,72,"DCG");
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// ===== END BEYONDTECH DECK EXTRAS =====

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

const V = {"hash": "3a53e3745f", "team": {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Dept of ECE, DTU", "Team Lead"], ["Anuj Gambhir", "Dept of Biotechnology, DTU", "Member"]]}, "f2": "₹5.3 lakh takes BeyondTech from 110 to 165 DTU enrolments and opens four new campuses in twelve months, by distributing proof before buying reach", "budget_lk": "₹3.5 lakh", "enrol": "165", "org_pct0": "21%", "org_e_pct0": "39%", "now": "110", "ref": "80%", "median": "2.15", "grid": [["BITS Pilani", [2, 4, 2, 2, 4, 5, 4], "3.00", "100%", "PICK 1"], ["BITS Pilani, Goa", [2, 4, 2, 2, 4, 5, 2], "2.80", "0%", "BENCH"], ["NIT Tiruchirappalli", [2, 1, 3, 3, 5, 5, 1], "2.65", "100%", "PICK 2"], ["PEC Chandigarh", [2, 1, 2, 1, 5, 5, 3], "2.40", "97.5%", "PICK 3"], ["COEP Pune", [2, 1, 2, 3, 4, 5, 1], "2.40", "97.2%", "PICK 4"], ["NIT Warangal", [2, 1, 2, 1, 5, 5, 1], "2.20", "0%", "BENCH"], ["IIT Roorkee", [2, 1, 3, 2, 4, 1, 3], "2.20", "5.3%", "BENCH"], ["IIT Delhi", [2, 1, 3, 1, 5, 1, 3], "2.15", "0%", "BENCH"], ["IIT (BHU) Varanasi", [2, 1, 3, 1, 4, 1, 1], "1.85", "0%", "LOWER"], ["IIT Guwahati", [2, 1, 3, 1, 4, 1, 1], "1.85", "0%", "LOWER"]], "screen": [28, 25, 10, 4], "t10": [["Bear", "12", "₹4,000", "₹60,000", "−₹12,000", "18", "₹1,26,000", "Season 2"], ["Base", "20", "₹7,200", "₹45,000", "₹99,000", "60", "₹8,03,000", "Season 1"], ["Bull", "30", "₹12,600", "₹30,000", "₹3,48,000", "150", "₹30,06,000", "Season 1"]], "cost1": "₹45,000", "cohort20": "20", "hours": [220, -88, 64, 196], "t12": [["Bear", "168", "₹22.2 lakh", "−₹15.9 lakh"], ["Base", "245", "₹5.3 lakh", "₹11.3 lakh"], ["Bull", "330", "₹1.5 lakh", "₹38.2 lakh"]], "total_spend": "₹5.3 lakh", "total_enrol": "245", "curve": [["Gated library", 126, "₹126", true, true, 15.88, "15.9", "₹2,000"], ["Micro-influencers", 309, "₹309", true, false, 32.4, "32.4", "₹10,000"], ["Branch reps", 772, "₹772", true, true, 10.37, "10.4", "₹8,000"], ["Alumni stories", 857, "₹857", true, true, 5.83, "5.8", "₹5,000"], ["Mock placement drive", 1481, "₹1,481", true, true, 10.8, "10.8", "₹16,000"], ["Society workshops", 1975, "₹1,975", true, true, 8.1, "8.1", "₹16,000"], ["Referral reward", 2000, "₹2,000", true, true, 9.62, "9.6", "₹19,246"], ["Placement cell talk", 2469, "₹2,469", true, true, 3.24, "3.2", "₹8,000"], ["Meta retargeting", 3889, "₹3,889", true, false, 68.76, "68.8", "₹2,67,405"], ["Meta geofence", 12963, "₹12,963", false, false, 14.08, "0.0", "₹0"], ["LinkedIn ads", 33333, "₹33,333", false, false, 8.45, "0.0", "₹0"]], "cold": ["₹12,963", "₹33,333"], "paths": [["Organic only", "63.8", "₹74,246", "₹1,163 each", 63.8, 0, "101 short of 165"], ["Paid only", "131.1", "₹7,70,280", "₹5,877 each", 0, 131.1, "34 short of 165"], ["Cheapest first", "165.0", "₹3,51,650", "₹2,131 each", 63.8, 101.2, "target met"]], "org_cap": "64", "paid_cap": "131", "paid_each": "₹5,877", "paid_cash": "₹7,70,280", "paid_x": "2.8", "fee": "₹12,000", "bridge": [110, 55, 80, 245], "spend_parts": [351650, 180000], "ncamp": "4"};
const results=[];
{ const s = await figma.getNodeByIdAsync("2:4");
skelBT(s,0,"1 / 8","EXECUTIVE SUMMARY",380,V.f2,"Source: case brief B04 to B19 | beyondtech.org.in, Oct 2026 | college_scorecard.csv (32 colleges) | model "+V.hash+", tables T3, T4, T6, T8, T10, T11, T12 | the fee (A01) is an assumption");
// ---- BAND 1: THE CHOICE (skill archetype H: should NOT do the obvious, should do the alternative, three numbered reasons each) ----
rail(s,64,316,348,"THE CHOICE",C.primaryDeep);
const zt=zone(s,116,316,1740,348,"choice");
TL(zt,0,0,22,"The task: grow DTU on a stated organic and paid budget, then enter 3 to 4 Tier-1 campuses with no founder on the ground.",{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:1740});
const col=(x,head,fill,num,rows)=>{ addChip(zt,x,40,520,44,head,fill,C.white,22);
  rows.forEach((r,i)=>{ const y=98+i*84; TL(zt,x,y+12,34,r[0],{family:"Poppins",style:"ExtraBold",color:num,maxW:160,min:26});
    T(zt,x+172,y,348,22,r[1]); if(i<2) addRect(zt,x,y+81,520,1.5,C.surface); }); };
col(0,"NOT THIS: BUY REACH FIRST",C.alert,C.alert,[
 [V.cold[0],"per enrolment on cold Meta ads; LinkedIn costs "+V.cold[1]+". The assumed fee is "+V.fee+"."],
 [V.ref,"already arrive by referral and the brief calls recall strong, so awareness is not the gap."],
 [V.paid_cap,"of "+V.enrol+" enrolments is all four paid channels can reach, at "+V.paid_each+" each."]]);
col(1220,"THIS: DISTRIBUTE PROOF FIRST",C.good,C.good,[
 [V.curve[0][2],"per enrolment from the gated library. Organic: "+V.org_pct0+" of cash, "+V.org_e_pct0+" of enrolments."],
 ["50+","selections are proof that travels where the same recruiters hire: "+V.screen[3]+" of "+V.screen[0]+" colleges fit."],
 [V.cost1,"opens a campus, cash positive in season 1. Founder hours fall from "+V.hours[0]+" to "+V.hours[3]+"."]]);
// centre exhibit: three ways to spend at DTU against the 165 target
const cx=552, B0=cx+170, BW=240, sc=BW/parseFloat(V.paths[2][1]);
TL(zt,cx,40,24,"Neither layer alone reaches "+V.enrol,{color:C.primaryDeep,maxW:636});
V.paths.forEach((p,i)=>{ const y=92+i*56; TL(zt,cx,y+12,22,p[0],{family:"Inter",style:"Bold",maxW:160});
  let bx=B0; [[p[4],C.primary],[p[5],C.primaryDeep]].forEach(sg=>{ if(sg[0]<=0) return; const w=sg[0]*sc; addRect(zt,bx,y+8,w,36,sg[1],C.ink,2);
    const t=TL(zt,0,y+9,22,sg[0].toFixed(1),{color:C.white}); t.x=bx+w/2-t.width/2; bx+=w; });
  if(bx<B0+BW-2) ghost(zt,bx,y+8,B0+BW-bx,36,C.alert);
  TL(zt,B0+BW+14,y,22,p[3],{family:"Inter",style:"Bold"}); TL(zt,B0+BW+14,y+26,22,p[6],{family:"Inter",style:"Semi Bold",color:i===2?C.good:C.alert}); });
dashedV(zt,B0+BW,86,174,C.alert,3);
T(zt,cx,268,636,22,"Organic alone runs out of reach at "+V.org_cap+". Paid alone costs "+V.paid_x+" times more per head and still stops at "+V.paid_cap+".",{family:"Inter",style:"Bold"});
fine(zt,cx,326,636,"Paid only: four paid channels at full modelled reach, "+V.paid_cash+" (T3).");
dashedV(s,652,360,300,C.ink,2); dashedV(s,1320,360,300,C.ink,2);
// ---- BAND 2: THE PLAN IN NUMBERS ----
dashedH(s,64,673,1792,C.ink,2);
rail(s,64,684,346,"THE PLAN IN NUMBERS",C.primary);
const z1=zone(s,116,684,560,346,"enrolment bridge");
TL(z1,0,0,24,"From "+V.now+" to "+V.total_enrol+" enrolments in twelve months",{color:C.primaryDeep,maxW:560});
waterfall(z1,0,36,560,310,[["a",V.bridge[0]],["b",V.bridge[1]],["c",V.bridge[2]],["d",V.bridge[3]]],{min:0,max:270,dp:0,labelH:66,labelDy:8,labels:["DTU today","DTU plan","4 cohorts of "+V.cohort20,"Month 12"]});
dashedV(s,692,692,330,C.ink,2);
const z2=zone(s,708,684,620,346,"spend and scenarios");
TL(z2,0,0,24,V.total_spend+" in total, two thirds of it at DTU",{color:C.primaryDeep,maxW:620});
segBar(z2,0,44,620,44,[{v:V.spend_parts[0],c:C.primaryDeep,t:"DTU "+V.budget_lk},{v:V.spend_parts[1],c:C.primary,t:V.ncamp+" × "+V.cost1}]);
wrapTable(z2,0,104,[164,152,152,152],["12 months","Bear","Base","Bull"],[["Enrolments"].concat(V.t12.map(r=>r[1])),["Spend"].concat(V.t12.map(r=>r[2])),["Contribution"].concat(V.t12.map(r=>r[3]))],{rowH:38,headerH:40,colors:[C.ink,C.alert,C.primaryDeep,C.good],name:"twelve months"});
T(z2,0,268,620,22,"Each campus costs "+V.cost1+" to open and nets "+V.t10[1][4]+" in season 1, base case.",{family:"Inter",style:"Bold",color:C.primaryDeep});
fine(z2,0,326,620,"Bear is a stress case, not a budget (T6, T12).");
dashedV(s,1344,692,330,C.ink,2);
const z3=zone(s,1360,684,496,346,"picks");
TL(z3,0,0,24,V.screen[3]+" of "+V.screen[0]+" colleges clear the screen",{color:C.primaryDeep,maxW:496});
const PK=V.grid.filter(r=>r[4].indexOf("PICK")===0);
hBars(z3,0,44,496,PK.map((r,i)=>({label:r[0],value:parseFloat(r[2]),text:r[2],color:i<2?C.primaryDeep:C.primary})),{labelW:236,rowH:40,barH:26,valueW:64,max:3.2});
const mx=248+184*parseFloat(V.median)/3.2; dashedV(z3,mx,40,168,C.alert,2.5);
TL(z3,0,206,22,"median "+V.median,{family:"Inter",style:"Bold",color:C.alert,centerAt:mx});
let lx=lg(z3,0,236,C.primaryDeep,"Jan 2027"); lg(z3,lx,236,C.primary,"Summer 2027");
rt(z3,0,272,496,22,"First step by 31 October 2026: ","gate the 8 PDFs and publish a fee band.",{leadColor:C.primary});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

return {results,warnings};
