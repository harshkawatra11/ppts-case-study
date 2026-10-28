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
{ const s = await figma.getNodeByIdAsync("2:9");
skeleton2(s,5,"6 / 8","ACCOUNTABILITY",300,
 "Liability that follows the breach: a six-hour clock, uncapped vendor damages and a leak whose expected value to its seller falls from +₹14 Cr to −₹5.4 Cr",
 "Source: PEA 2024 and Amendment 2026 (PRS, Jul 2026) | CERT-In Directions (Apr 2022) | NTA CBT tender cl. 9 to 12 (Mar 2026) | Supreme Court (Jul 2024) | CBI closure, UGC-NET (ThePrint) | PRAMAAN model (A16)");
// BREACH RESPONSE CLOCK
const pk=panel(s,64,318,1180,342,"FROM DETECTION TO PUBLIC REPORT IN 30 DAYS");
const CLK=[["T+0","SOC or tip-off flags a breach"],["T+6h","Notify NEIAA and CERT-In"],["T+24h","Verify leak by watermark"],["T+72h","Cancel only affected forms"],["T+15d","Re-test that segment"],["T+30d","Publish root cause report"],["T+60d","Probe due to close by law"]];
addRect(pk,40,118,1100,3,C.ink);
CLK.forEach((c,i)=>{ const cx=96+i*164;
  TL(pk,0,64,22,c[0],{family:"Poppins",style:"Bold",color:C.primary,centerAt:cx});
  addEllipse(pk,cx-14,105,28,28,i===0?C.alert:C.primary,C.ink,2);
  T(pk,cx-78,146,156,22,c[1],{align:"CENTER",family:"Inter",style:"Semi Bold"}); });
T(pk,16,262,1148,22,"In 2024, UGC-NET was cancelled for 9.08 lakh on an unverified screenshot; in 2026, NEET-UG took nine days to cancel.",{family:"Inter",style:"Bold",color:C.alert});
// LIABILITY LADDER
const pl=panel(s,1268,318,588,342,"WHO PAYS: THE LIABILITY LADDER");
[["Individual: 5 to 10 yrs, ₹50 lakh fine",C.alertTint,C.ink],["Gang: 7+ yrs, ₹10 Cr fine, assets seized",C.alert,C.white],["Vendor: ₹5 Cr, 8-yr bar, uncapped damages",C.accent,C.ink],["Exam body: named officer, re-test on its budget",C.primary,C.white]].forEach((r,i)=>{ const w=556-i*24;
  const f=addFrame(pl,16,58+i*70,w,62,r[1],C.ink,2,"RUNG"); addText(f,"Inter","Bold",22,r[2],r[0],14,0,w-28,62,"LEFT","CENTER"); });
// TODAY VS PRAMAAN
const pv=panel(s,64,684,840,346,"FIVE CONTRACT GAPS, FIVE FIXES");
nm(addTable(pv,16,56,[200,300,308],["Lever","Today","PRAMAAN"],[
 ["Vendor duty","NTA disowns (cl. 11.3)","Strict for subcontracts"],
 ["Bank guarantee","10% of exam value","15% plus insurance"],
 ["Blind spot","₹200 penalty","Centre de-accredited"],
 ["Breach notice","No fixed clock","6 hours to NEIAA"],
 ["Public report","Rarely published","Root cause in 30 days"]],{rowH:48,headerH:40}),"TABLE: today vs pramaan");
// AUDIT CALENDAR
const pau=panel(s,928,684,440,346,"AUDIT CALENDAR");
nm(addTable(pau,16,56,[220,188],["Audit","How often"],[["Readiness check","Each cycle"],["NESS compliance","Annual"],["Red team","Twice a year"],["Answer forensics","Every exam"],["CAG audit","Every 3 years"]],{rowH:48,headerH:40}),"TABLE: audits");
// A LEAK STOPS PAYING
const pe=panel(s,1392,684,464,346,"A LEAK STOPS PAYING (₹ CR)");
addRect(pe,250,64,20,20,C.primaryDeep,C.ink,1.5); TL(pe,276,58,22,"Revenue",{family:"Inter",style:"Bold"});
addRect(pe,250,98,20,20,C.alert,C.ink,1.5); TL(pe,276,92,22,"Seller's value",{family:"Inter",style:"Bold",maxW:170});
const Z=250, K=9;
addRect(pe,16,Z,432,2.5,C.ink);
[[40,15.0,C.primaryDeep,"15.0"],[120,14.0,C.alert,"14.0"],[230,0.56,C.primaryDeep,"0.6"],[310,-5.44,C.alert,"−5.4"]].forEach(b=>{ const h=Math.max(4,Math.abs(b[1])*K);
  const y=b[1]>=0?Z-h:Z+2.5; addRect(pe,b[0],y,70,h,b[2],C.ink,2);
  if(b[1]>=0) TL(pe,0,y-32,22,b[3],{family:"Poppins",style:"Bold",centerAt:b[0]+35}); else TL(pe,b[0]+78,Z+14,22,b[3],{family:"Poppins",style:"Bold",color:C.alert}); });
TL(pe,0,262,22,"Today",{family:"Inter",style:"Bold",centerAt:115}); TL(pe,200,262,22,"PRAMAAN",{family:"Inter",style:"Bold",maxW:104});
TL(pe,16,304,22,"Detection odds: 10% now, 60% after",{family:"Inter",style:"Semi Bold",maxW:432});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:10");
skeleton2(s,6,"7 / 8","10-YEAR ROADMAP",300,
 "Ten years in three horizons: every Tier-1 exam traceable by 2028, national coverage by 2031, and the 80% loss cut held through 2036",
 "Source: Team IdeaForge roadmap and model (coverage path A10) | Radhakrishnan Committee (Oct 2024) | MoE and NTA on NEET-UG CBT from 2027 (Jul 2026) | Nilekani task force (Jul 2026) | PEA Amendment 2026 | DPDP Rules 2025");
const pg=panel(s,64,318,1200,460,"NINE WORKSTREAMS, ALL LIVE BY 2032");
gantt(pg,16,58,330,82,40,["2027","2028","2029","2030","2031","2032","2033","2034","2035","2036"],[
 {label:"NEIAA law and NESS v1",s:0,e:1,color:C.primaryDeep,text:"NESS v1 law"},
 {label:"Tier-1 item banks",s:0,e:2,color:C.primary,text:"NEET, JEE, CUET"},
 {label:"Central item banks",s:2,e:4,color:C.primary,text:"SSC, RRB, UPSC"},
 {label:"Split keys, watermarks",s:0,e:1,color:C.primaryDeep,text:"Tier-1 live"},
 {label:"NEET-UG CBT forms",s:0,e:9,color:C.primary,text:"24 forms, then 96 from 2029"},
 {label:"States adopt NESS",s:1,e:4,color:C.accent,tc:C.ink,text:"36 state cells, 60:40"},
 {label:"2,500 labs hardened",s:1,e:3,color:C.primary,text:"Lab security"},
 {label:"AI forensics, SOC",s:1,e:9,color:C.primaryDeep,text:"Every central exam"},
 {label:"Adaptive tests (CAT)",s:5,e:9,color:C.accent,tc:C.ink,text:"NET and CUET pilots"}]);
const ph=panel(s,1288,318,568,460,"THREE HORIZONS AND GATES");
[["2027 TO 2028: STABILISE","Gate: zero Tier-1 cancellations; every Tier-1 copy traceable",C.primaryDeep,C.accent,C.white],
 ["2029 TO 2031: SCALE","Gate: blast radius under 25,000; 80% of state volume accredited",C.primary,C.white,C.white],
 ["2032 TO 2036: EMBED","Gate: 80% loss cut held; cost at or under ₹135 a sitting",C.tint,C.primaryDeep,C.ink]].forEach((h,i)=>{ const y=58+i*132;
  const f=addFrame(ph,16,y,536,120,h[2],C.ink,2,"HORIZON");
  TL(f,14,10,24,h[0],{color:h[3],maxW:508}); T(f,14,50,508,22,h[1],{color:h[4]}); });
const pk=panel(s,64,802,1000,228,"80% LOSS CUT FROM 2031, HELD TO 2036");
nm(addTable(pk,16,54,[330,150,150,150,188],["KPI","2026","2028","2031","2036"],[
 ["Loss cut vs 2026","0%","28%","80%","80%"],["Blast radius, NEET-UG","22.7 lakh","94,583","23,646","23,646"],["Tier-1 exams traceable","0%","100%","100%","100%"]],{rowH:40,headerH:36}),"TABLE: kpis");
const pa=panel(s,1088,802,768,228,"ACCESS AND AFFORDABILITY (Q6)");
["₹50 levy; SC, ST and PwD waivers paid from the Union share","Centre within 50 km; mobile centres for remote areas","Aadhaar optional: passport, DigiLocker and voter ID accepted","No internet shutdowns; jammers only inside exam rooms"].forEach((t,i)=>{ const y=58+i*40;
  addRect(pa,16,y+9,12,12,C.primary,C.ink,1.5); TL(pa,38,y,22,t,{family:"Inter",style:"Semi Bold",maxW:714}); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:11");
skeleton2(s,7,"8 / 8","COST-BENEFIT AND TRADE-OFFS",480,
 "₹7,092 Cr over ten years returns ₹3.14 per rupee, clears 1.0 even on cash alone, and scores 21 of 24 on resilience against 7 for today's model",
 "Source: Team IdeaForge PRAMAAN model (T2 to T6; PV at 8% real; 2026 prices) | Indian Express (Feb 2024) | NTA finances (Rajya Sabha 2024, 2026) | Gordon and Loeb (2002) | Logical Indian (May 2026) | NTA on NEET CBT shifts (2026)");
// COST BY YEAR
const pc=panel(s,64,318,538,322,"COST PEAKS AT ₹858 CR (₹ CR)");
addRect(pc,16,62,20,20,C.primaryDeep,C.ink,1.5); TL(pc,42,56,22,"Capex and refresh",{family:"Inter",style:"Bold"});
addRect(pc,270,62,20,20,C.primary,C.ink,1.5); TL(pc,296,56,22,"Opex",{family:"Inter",style:"Bold"});
stackedCols(pc,16,84,506,226,["27","28","29","30","31","32","33","34","35","36"],[
 {color:C.primaryDeep,values:[311.8,311.8,155.9,0,0,184.0,0,0,0,0]},
 {color:C.primary,values:[269.4,471.5,673.5,673.5,673.5,673.5,673.5,673.5,673.5,673.5]}],
 {max:900,barW:34,totals:["581","783","829","674","674","858","674","674","674","674"]});
// CUMULATIVE BENEFIT VS COST
const pl=panel(s,626,318,538,322,"BENEFITS OVERTAKE COST IN 2029");
const LC=lineChart(pl,16,56,506,256,[
 {values:[265,1222,2911,5230,8216,11292,14460,17723,21084,24546],color:C.primary,label:"Benefit",labelDy:-4},
 {values:[581,1365,2194,2867,3541,4398,5072,5745,6419,7092],color:C.alert,label:"Cost",labelDy:4}],
 ["27","28","29","30","31","32","33","34","35","36"],{yMin:0,yMax:25000,yTicks:[0,12500,25000],yFmt:v=>fmtN(v),padL:96,padR:100});
for(let yy=72; yy<272; yy+=20) addRect(pl,LC.X(2)-1,yy,2.5,11,C.ink);
TL(pl,LC.X(2)+8,74,22,"Payback 2029",{family:"Inter",style:"Bold",color:C.primaryDeep});
// SCENARIOS AND THE SPENDING TEST
const ps=panel(s,1188,318,668,322,"EVERY CASE CLEARS 1.0, EVEN CASH ONLY");
nm(addTable(ps,16,56,[190,150,130,166],["Case (₹ Cr)","NPV","BCR","Payback"],[["Bear","6,092","2.28","2030"],["Base","10,211","3.14","2029"],["Bull","12,317","3.58","2028"],["Cash only","1,496","1.31","2032"]],{rowH:38,headerH:38}),"TABLE: scenarios");
TL(ps,16,254,22,"Spend is 55% of the Gordon-Loeb ceiling of ₹1,220 Cr",{family:"Inter",style:"Bold",maxW:636});
addRect(ps,16,288,636,26,C.surface,C.ink,1.5); addRect(ps,16,288,636*0.552,26,C.primary,C.ink,1.5);
// RESILIENCE
const pr=panel(s,64,664,1100,366,"PRAMAAN 21 OF 24, TODAY'S MODEL 7 (0 TO 3 PER TEST)");
const RES=[["Insider at creation",0,1,3],["Storage and transport",0,2,3],["Centre and remote access",1,1,2],["Blast radius per breach",0,1,3],["Vendor concentration",1,0,3],["Detection and liability",0,1,3],["Privacy proportionality",2,1,2],["Cost and access",3,1,2]];
const WD=["None","Weak","Partial","Strong"], RFc=[C.alert,C.alertTint,C.accent,C.primary];
const cells=RES.map(r=>r.slice(1).map(v=>({t:WD[v],f:RFc[v],tc:(v===0||v===3)?C.white:C.ink})));
cells.push([{t:"7 / 24",f:C.white},{t:"8 / 24",f:C.white},{t:"21 / 24",f:C.accent}]);
grid(pr,16,54,RES.map(r=>r[0]).concat(["Total"]),["Fragmented today","Central CBT only","PRAMAAN"],cells,{labelW:330,cellW:240,rowH:30,headH:40,corner:"Test",name:"TABLE: resilience"});
// TRADE-OFFS
const pt=panel(s,1188,664,668,366,"TRADE-OFFS WE ACCEPT");
badgeList(pt,16,62,636,["Cost: ₹135 a sitting, 7.9% of the NEET-UG fee","Psychometrics: parallel forms need published equating","Privacy: face match only, deleted in 90 days, DPIA","A new central vault, guarded by 3-of-5 split keys","Federal consent: states join through 60:40 funding"],{d:40,pitch:58});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

return {results,warnings};
