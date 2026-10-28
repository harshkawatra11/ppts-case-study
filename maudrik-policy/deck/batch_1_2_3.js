// ===== PRAMAAN PREAMBLE v1 =====
const C = {
  primary:{r:0.059,g:0.478,b:0.302}, primaryDeep:{r:0.039,g:0.322,b:0.200},
  accent:{r:0.961,g:0.773,b:0.094}, alert:{r:0.863,g:0.149,b:0.149},
  tint:{r:0.812,g:0.933,b:0.859}, alertTint:{r:0.992,g:0.886,b:0.886},
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
const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Aakriti Aggarwal","Maharaja Agrasen Institute of Management Studies (MAIMS)","Member"]];
function teamTable(p,x,y){ const cw=[330,600,190], X=[0,330,930], rh=54, hh=50, tw=1120, th=hh+rh*TEAM.length;
  const t=addFrame(p,x,y,tw,th,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  TEAM.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [330,930].forEach(vx=>addRect(t,vx-1,0,2,th,C.ink)); return t; }
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
// ===== END PREAMBLE =====

const results=[];
{ const s = await figma.getNodeByIdAsync("2:2"); s.fills=[{type:"SOLID",color:C.white}];
addChip(s,64,48,640,56,"MAUDRIK V7.0 · POLICY CASE COMPETITION",C.primary,C.white,22);
addChip(s,728,48,500,56,"10-YEAR SECURITY ARCHITECTURE",C.accent,C.ink,22);
addChip(s,1476,48,380,56,"TEAM IDEAFORGE",C.primaryDeep,C.white,22);
addWireH(s,64,1856,140,C.ink,2.5);
[64,460,860,1260,1848].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2));
nm(TL(s,64,172,112,"PRAMAAN",{family:"Poppins",style:"ExtraBold",maxW:1120,min:80}),"TITLE");
T(s,64,330,1120,34,"A 10-year architecture that centralises trust, federates delivery and makes a stolen paper worthless",{family:"Poppins",style:"Bold",color:C.primary});
const v=layered(s,64,448,1120,250,C.primary,"CARD: verdict");
T(v,28,20,1064,30,"Hybrid by function: one statutory authority holds standards, keys and audit, exam bodies and states deliver, and item banks shrink what any insider can steal.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,28,172,1064,22,"India loses about ₹3,317 Cr a year to cancelled exams. PRAMAAN cuts that by 80% for ₹135 a candidate sitting and returns ₹3.14 per rupee over ten years.",{color:C.white});
TL(s,64,722,26,"TEAM IDEAFORGE",{color:C.primary});
teamTable(s,64,768);
const r=layered(s,1236,172,620,808,C.tint,"CARD: five numbers");
TL(r,24,18,24,"THE CASE IN FIVE NUMBERS",{color:C.primaryDeep});
addRect(r,24,58,572,2,C.ink);
[["22.7 lakh","NEET-UG 2026 candidates whose exam was cancelled after setters and translators leaked it"],
 ["41 leaks","in 15 states over five years hit 1.4 crore job seekers (Indian Express, 2024)"],
 ["87%","of candidates in attributed cancellations lost the paper before it reached a centre"],
 ["39","permanent posts at the NTA, beside 197 contract and outsourced staff (Jul 2026)"],
 ["96x","smaller blast radius under PRAMAAN: 23,646 candidates per breach, not 22.7 lakh"]].forEach((f,i)=>{ const y=76+i*118;
  TL(r,24,y,36,f[0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:572}); T(r,24,y+50,572,22,f[1]); });
logoSlot(r,24,700,270,80,"Maudrik"); logoSlot(r,326,700,270,80,"Team IdeaForge");
addWireH(s,64,1856,1004,C.ink,2.5);
const src=addText(s,"Inter","Semi Bold",14,C.primary,"Source: Maudrik v7.0 problem statement | Wikipedia and CBI on NEET-UG 2026 | Indian Express (Feb 2024) | Rajya Sabha reply (22 Jul 2026) | Team IdeaForge PRAMAAN model and 49-incident dataset",64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:4");
skeleton2(s,0,"1 / 8","EXECUTIVE SUMMARY",360,
 "A federated architecture that centralises trust and shrinks the prize cuts India's ₹3,317 Cr yearly breach loss by 80% for ₹135 a candidate sitting",
 "Source: Indian Express (Feb 2024) | NTA, PIB and Wikipedia on NEET-UG 2026 | Rajya Sabha (Jul 2026) | PRS (Jul 2026) | NTA CBT tender (Mar 2026) | Team IdeaForge PRAMAAN model and 49-incident dataset");
// THE PROBLEM
const pp=panel(s,64,318,560,362,"BREACHES COST ₹3,317 CR A YEAR");
TL(pp,16,58,44,"₹3,317 Cr",{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:528});
TL(pp,16,118,22,"lost a year to cancelled exams (base case)",{family:"Inter",style:"Bold",maxW:528});
[["38.6 lakh","candidates a year sit an exam that is later cancelled"],["87%","of them lost the paper before it reached a centre"],["31 of 49","coded breaches were insider jobs"]].forEach((k,i)=>{ const y=164+i*64;
  TL(pp,16,y,30,k[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:170}); T(pp,196,y+2,348,22,k[1]); });
// WHY THE OBVIOUS FIX FALLS SHORT
const po=panel(s,648,318,600,362,"WHY THE OBVIOUS FIX FALLS SHORT");
nm(addTable(po,16,58,[220,348],["2026 response","What it misses"],[
 ["NEET-UG on CBT from 2027","2026 leak came from setters, before delivery"],
 ["Fines up to ₹10 Cr","Needs detection: 52 FIRs under the 2024 Act"],
 ["One CBT platform","One vendor becomes one point of failure"],
 ["AI cameras in exam halls","Watches candidates, not the vault"]],{rowH:64,headerH:40}),"TABLE: obvious fix");
// OUR ANSWER: PRAMAAN
const pa=layered(s,1272,318,577,362,C.primaryDeep,"CARD: our answer");
TL(pa,20,12,24,"OUR ANSWER: PRAMAAN",{color:C.accent,maxW:537});
addRect(pa,20,50,537,2,C.accent);
[["1","Shrink the prize: item banks and 96 parallel forms, so no full paper exists until an hour before"],
 ["2","Split the keys: 3-of-5 release across independent bodies; no one person can open a paper"],
 ["3","Centralise trust, federate delivery: one authority audits, 36 states and exam bodies deliver"]].forEach((b,i)=>{ const y=66+i*96;
  addBadge(pa,20,y,40,b[0],C.accent,C.ink); T(pa,74,y,483,22,b[1],{color:C.white}); });
// ANSWERS TO THE SIX QUESTIONS
const pq=panel(s,64,704,1100,326,"ANSWERS TO THE SIX QUESTIONS");
nm(addTable(pq,16,56,[300,768],["Question","Our answer"],[
 ["1 Central vs federal","Hybrid by function: central trust, federated delivery"],
 ["2 Cut the four risks","Item banks, split keys, sealed chain, zero-trust nodes"],
 ["3 AI and biometrics","Encryption is the backbone; AI flags, humans decide"],
 ["4 Liability","6-hour clock, uncapped vendor liability, named officer"],
 ["5 Justified spend","₹673.5 Cr a year: 20% of the loss, BCR 3.14"],
 ["6 Access and cost","₹135 a sitting; reserved-group waivers from Union share"]],{rowH:38,headerH:38}),"TABLE: six answers");
// WHAT ₹7,092 CR BUYS
const c=layered(s,1188,704,661,326,C.primary,"CARD: payoff");
TL(c,20,12,24,"WHAT ₹7,092 CR BUYS IN TEN YEARS",{color:C.accent,maxW:621});
[["80%","less expected loss from 2031"],["3.14","rupees back per rupee"],["96x","smaller blast radius"]].forEach((k,i)=>{ const f=addFrame(c,20+i*210,60,196,190,C.white,C.ink,2,"KPI TILE");
  TL(f,12,10,40,k[0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:172,min:28}); T(f,12,72,172,22,k[1],{family:"Inter",style:"Bold"}); });
T(c,20,266,621,22,"Bear case still returns 2.28; counting cash alone, 1.31.",{family:"Inter",style:"Bold",color:C.white});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:5");
skeleton2(s,1,"2 / 8","DIAGNOSIS: THE FRAGMENTED MODEL",540,
 "India's leaks start before the exam hall: 87% of candidates in attributed cancellations lost their paper at creation, storage or transport",
 "Source: Team IdeaForge 49-incident dataset, 2015 to 2026 (Wikipedia list; CBI, STF, SIT and EOU findings via Careers360, ThePrint, Hans India) | Supreme Court (Jul 2024) | Rajya Sabha (Jul 2026) | Vajiram and Ravi (2026)");
// WHERE 49 CODED BREACHES STARTED
const pw=panel(s,64,318,700,350,"25 OF 49 BREACHES START PRE-CENTRE");
vBars(pw,16,56,668,240,[
 {label:"Create",value:4,color:C.alert,text:"4"},{label:"Store",value:12,color:C.alert,text:"12"},
 {label:"Access",value:6,color:C.alert,text:"6"},{label:"Move",value:3,color:C.alert,text:"3"},
 {label:"Centre",value:4,color:C.primaryDeep,text:"4"},{label:"ID",value:3,color:C.primaryDeep,text:"3"},
 {label:"Exam",value:10,color:C.primaryDeep,text:"10"},{label:"Result",value:7,color:C.primaryDeep,text:"7"}],{max:12,barW:52});
T(pw,16,304,668,22,"Red: before a centre (25 of 49 incidents)",{family:"Inter",style:"Bold",color:C.alert});
// CANDIDATES HIT
const ph=panel(s,788,318,560,350,"87% LOST BEFORE THE CENTRE (LAKH)");
hBars(ph,16,58,528,[
 {label:"UP Police '24",value:48.0,color:C.alert,text:"48.0"},
 {label:"NEET-UG '26",value:22.7,color:C.alert,text:"22.7"},
 {label:"REET '21",value:16.0,color:C.alert,text:"16.0"},
 {label:"GPSSB '23",value:9.53,color:C.alert,text:"9.5"},
 {label:"UGC-NET '24",value:9.08,color:C.accent,text:"9.1"},
 {label:"GSSSB '19",value:6.0,color:C.primaryDeep,text:"6.0"},
 {label:"BPSC '24",value:3.75,color:C.alert,text:"3.8"}],{labelW:170,rowH:34,barH:24,max:48,valueW:64});
T(ph,16,300,528,22,"Pre-centre: 100.7 of 115.8 lakh (87%)",{family:"Inter",style:"Bold",color:C.alert});
// ONE PAPER, MANY HANDS
const cr=layered(s,1372,318,477,350,C.alertTint,"CARD: root cause",C.alert);
TL(cr,16,12,24,"ONE PAPER, MANY HANDS",{color:C.alert,maxW:445});
addRect(cr,16,50,445,2,C.ink);
T(cr,16,62,445,22,"A NEET-UG paper is one object shared by 22.7 lakh candidates. Before the exam it passes setters, translators, a press or server, a vault, transporters, a strong room and a centre.",{family:"Inter",style:"Semi Bold"});
T(cr,16,250,445,22,"Stronger locks raise the price of a leak. They do not shrink the prize.",{family:"Inter",style:"Bold",color:C.alert});
// THE CHAIN OF HANDS
const pc=panel(s,64,692,1100,338,"EIGHT HANDS TOUCH THE PAPER; FIVE BREACHED IT BEFORE THE HALL");
const HANDS=[["Setter","NEET-UG '26",C.alert],["Translator","NEET-UG '26",C.alert],["Press","BPSC '24",C.alert],["Vault","REET '21",C.alert],
 ["Transport","UP Police '24",C.alert],["Strong room","NEET-UG '24",C.primaryDeep],["Centre","GSSSB '19",C.primaryDeep],["Evaluator","TRB '17",C.primaryDeep]];
HANDS.forEach((h,i)=>{ const row=Math.floor(i/4), col=i%4; const x=16+col*266, y=62+row*120;
  const b=addFrame(pc,x,y,230,92,C.white,C.ink,2,"NODE hand"); addRect(b,0,0,8,92,h[2]);
  TL(b,20,8,22,h[0],{family:"Poppins",style:"Bold",maxW:198});
  TL(b,20,48,22,h[1],{family:"Inter",style:"Bold",color:h[2],maxW:198});
  if(col<3) addWireH(pc,x+230,x+266,y+46,C.ink,2.5); });
addRect(pc,929,154,2.5,14,C.ink); addWireH(pc,131,931.5,168,C.ink,2.5); addRect(pc,131,168,2.5,14,C.ink);
T(pc,16,286,1068,22,"Red hands sit before the centre: 25 of 49 incidents and 87% of cancelled candidates",{family:"Inter",style:"Bold",color:C.alert});
// WHY MORE RULES HAVE NOT WORKED
const pr=panel(s,1188,692,668,338,"WHY MORE RULES HAVE NOT WORKED");
badgeList(pr,16,62,636,["Radhakrishnan's 101 fixes (Oct 2024): print-at-centre still unused by May 2026","NTA runs crores of tests on 39 permanent posts; 197 staff are contract or outsourced","The CBT tender lets vendors subcontract biometrics and fines a CCTV blind spot ₹200","UPSC: no confirmed leak reported since 1991; its setters do not know which items are used"],{d:40,pitch:68});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

return {results,warnings};
