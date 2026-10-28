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
{ const s = await figma.getNodeByIdAsync("2:6");
skeleton2(s,2,"3 / 8","RISK FRAMEWORK",300,
 "Insiders drive 31 of 49 coded breaches, and the two highest risks, scored 20 of 25, sit in question creation and storage rather than the exam hall",
 "Source: Team IdeaForge risk assessment (likelihood from the 49-incident dataset; impact from candidates exposed) | NTA CBT tender (Mar 2026) | CBI (JEE Main 2021) | UP STF (2024) | Bihar EOU (2024) | Hans India (TSPSC 2023)");
const ST=["Question creation","Question storage","Personnel access","Transmission","Exam centre","Authentication","Examination","Evaluation & results"];
const HEAT=[[20,5,10,6],[20,15,15,8],[16,6,12,9],[15,12,8,6],[12,9,6,6],[4,6,4,4],[9,8,16,12],[9,2,8,9]];
const pm=panel(s,64,318,880,712,"SEVEN CRITICAL CELLS, SIX BEFORE THE HALL");
grid(pm,16,58,ST,["Insider","Physical","Cyber","Operations"],HEAT.map(r=>r.map(v=>({t:String(v),f:heatFill(v),tc:v>=15?C.white:C.ink}))),{labelW:272,cellW:144,rowH:50,headH:44,corner:"Stage",name:"TABLE: heat map"});
[["≥15 critical",C.alert],["10 to 14 high",C.alertTint],["6 to 9 medium",C.accent],["≤5 low",C.tint]].forEach((l,i)=>{ const x=16+i*212;
  addRect(pm,x,520,24,24,l[1],C.ink,1.5); TL(pm,x+32,516,22,l[0],{family:"Inter",style:"Bold",maxW:172}); });
const fx=addFrame(pm,16,560,848,70,C.tint,C.ink,2,"CARD: formula");
T(fx,14,6,820,22,"Priority = Likelihood (1 to 5, from incident frequency) x Impact (1 to 5, from candidates exposed). 15 or more is critical.",{family:"Inter",style:"Bold"});
TL(pm,16,636,22,"By risk type: Insider 31, Cyber 8, Physical 7, Operations 3",{family:"Inter",style:"Bold",maxW:848});
let bx=16; [[31,C.alert],[8,C.primaryDeep],[7,C.accent],[3,C.tint]].forEach(seg=>{ const w=848*seg[0]/49; addRect(pm,bx,672,w,30,seg[1],C.ink,1.5); bx+=w; });
const pt=panel(s,968,318,888,712,"TOP 10 RISKS WITH 1:1 MITIGATION");
nm(addTable(pt,16,56,[56,290,410,100],["#","Risk (evidence)","Mitigation in PRAMAAN","Score"],[
 ["1","Press or vault insider copies it (BPSC '24)","No full paper before T−60 min; per-copy watermark","20"],
 ["2","Setter or translator leaks items (NEET '26)","20x item bank, 5% cap each, coaching conflict bar","20"],
 ["3","Remote access to CBT nodes (JEE Main '21)","Locked node image, no remote ports, network SOC","16"],
 ["4","Official sells access (TSPSC '23)","Just-in-time access, split keys, vetting, rotation","16"],
 ["5","Stored papers stolen (HP Police '22)","Smart-lock boxes, GPS, tamper-evident seals","15"],
 ["6","Server or file theft (MPPEB '21)","Air-gapped vault, HSM encryption, data-loss control","15"],
 ["7","Logistics staff open sealed boxes (UP '24)","Encrypted e-delivery, print at centre, smart locks","15"],
 ["8","Platform crash or false alarm (SSC '25)","Vendor cap, buffer nodes, 24-hour leak check","12"],
 ["9","Insider misuses admin access (TSPSC '23)","Hardware keys, zero-trust sessions, access logs","12"],
 ["10","Centre staff open strong room (NEET '24)","Keys at centre T−30 min, dual custody, CCTV alert","12"]],{rowH:60,headerH:40}),"TABLE: register");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:7");
skeleton2(s,3,"4 / 8","GOVERNANCE MODEL",320,
 "Hybrid by function: one statutory authority holds standards, keys and audit, while delivery stays federated across exam bodies, 36 states and capped vendors",
 "Source: Team IdeaForge governance design | PEA 2024 and Amendment 2026 (PRS) | Radhakrishnan Committee (Oct 2024) | NTA CBT tender (Mar 2026) | CERT-In Directions (Apr 2022) | NIST SP 800-207 | KNEC Kenya (2016)");
// Q1
const pq=panel(s,64,318,700,328,"Q1: ONLY HYBRID PASSES ALL FIVE TESTS");
const Q1=[["Single failure point",["High",C.alert,C.white],["Low",C.tint],["Low",C.tint]],
 ["Common standards",["Strong",C.tint],["Weak",C.alert,C.white],["Strong",C.tint]],
 ["Uses state capacity",["Weak",C.alertTint],["Strong",C.tint],["Strong",C.tint]],
 ["Blast radius",["22.7 lakh",C.alert,C.white],["Varies",C.accent],["23,646",C.tint]],
 ["Response speed",["Slow",C.alertTint],["Uneven",C.accent],["6 hours",C.tint]]];
grid(pq,16,56,Q1.map(r=>r[0]),["Central","Federal","Hybrid"],Q1.map(r=>r.slice(1).map(c=>({t:c[0],f:c[1],tc:c[2]||C.ink}))),{labelW:272,cellW:132,rowH:44,headH:44,corner:"Criterion",name:"TABLE: option filter"});
// THREE PLANES
const pa=panel(s,788,318,1068,328,"THE PRAMAAN ARCHITECTURE: THREE PLANES");
const PL=[["TRUST PLANE","central",C.primaryDeep,C.accent,["Item bank vault","3-of-5 split keys","National standard","CERT-Exam SOC"]],
 ["ASSURANCE PLANE","independent",C.primary,C.white,["NEIAA accredits","Audits, red teams","Incident command","Public reports"]],
 ["DELIVERY PLANE","federated",C.tint,C.ink,["NTA, UPSC, SSC, RRB","36 state cells","Vendors, 40% cap","2,500 secure labs"]]];
PL.forEach((pl,i)=>{ const y=58+i*90; const b=addFrame(pa,16,y,1036,82,pl[2],C.ink,2,"BAND "+pl[0]);
  TL(b,14,8,22,pl[0],{family:"Poppins",style:"Bold",color:pl[3],maxW:236}); TL(b,14,42,22,pl[1],{family:"Inter",style:"Bold",color:pl[3],maxW:236});
  pl[4].forEach((c,j)=>{ const f=addFrame(b,268+j*190,13,178,56,C.white,C.ink,2,"CHIP"); addText(f,"Inter","Bold",22,C.ink,c,8,0,162,56,"CENTER","CENTER"); }); });
// RACI
const pr=panel(s,64,668,1100,362,"ONE ACCOUNTABLE OWNER PER STAGE (RACI)");
const RACI=[["Creation","C","A/R","·","·","·","I","C"],["Storage","R","A","C","·","·","I","C"],["Personnel access","A","R","C","R","R","C","C"],
 ["Transmission","A","R","R","C","R","I","I"],["Exam centre","C","A","C","R","R","C","I"],["Authentication","C","A","I","C","R","I","I"],
 ["Examination","I","A","R","R","R","C","I"],["Evaluation","C","A/R","C","·","C","I","R"]];
const rf=v=>(v==="A"||v==="A/R")?C.primaryDeep:(v==="R"?C.primary:(v==="C"?C.tint:(v==="I"?C.surfaceAlt:C.white)));
grid(pr,16,54,RACI.map(r=>r[0]),["NEIAA","Exam body","CERT","State cell","Vendor","Police","Auditor"],RACI.map(r=>r.slice(1).map(v=>({t:v,f:rf(v),tc:(v==="A"||v==="A/R"||v==="R")?C.white:C.ink}))),{labelW:250,cellW:116,rowH:31,headH:56,corner:"Stage",name:"TABLE: RACI"});
// TIERS AND RULES
const pt=panel(s,1188,668,668,362,"RISK TIERS AND BINDING RULES");
nm(addTable(pt,16,56,[110,250,276],["Tier","Which exams","Controls"],[
 ["Tier 1","5 lakh+ or national rank","Full stack: bank, keys, SOC"],
 ["Tier 2","50,000 to 5 lakh","Bank, watermark, vendor audit"],
 ["Tier 3","Under 50,000","Custody log and watermark"]],{rowH:56,headerH:40}),"TABLE: tiers");
[["Vendor cap:","no firm above 40% of CBT volume"],["Coaching bar:","setters 3 years clear of coaching"]].forEach((r,i)=>{ const y=276+i*42;
  addRect(pt,16,y+9,12,12,C.primary,C.ink,1.5); TL(pt,38,y,22,r[0]+" "+r[1],{family:"Inter",style:"Semi Bold",maxW:614}); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

{ const s = await figma.getNodeByIdAsync("2:8");
skeleton2(s,4,"5 / 8","TECHNOLOGY FRAMEWORK",380,
 "Item banks, split keys and per-copy watermarks shrink what one NEET-UG compromise exposes from 22.7 lakh candidates to 23,646",
 "Source: Team IdeaForge PRAMAAN model (96 forms = 6 days x 2 shifts x 8 forms; bank 20x paper) | Wikipedia and CBI on NEET-UG 2026 (120 of 180) | College Board | UPSC practice | NIST SP 800-207 | DPDP Rules 2025");
const m=layered(s,64,318,1785,210,C.primaryDeep,"CARD: moneyshot");
TL(m,24,14,24,"THE MONEYSHOT: WHAT ONE COMPROMISE CAN REACH",{color:C.accent,maxW:1737});
addRect(m,24,52,1737,2,C.accent);
TL(m,24,64,56,"22,70,000 → 23,646",{family:"Poppins",style:"ExtraBold",color:C.white,maxW:600,min:40});
T(m,24,148,600,22,"NEET-UG candidates exposed: today vs PRAMAAN",{family:"Inter",style:"Bold",color:C.white});
[[660,"96x","smaller blast radius per breach"],[1040,"67% → 2.5%","of a paper one insider can expose"],[1420,"−₹5.4 Cr","expected value of a leak to its seller"]].forEach(k=>{
  addRect(m,k[0]-20,70,2,120,C.accent);
  TL(m,k[0],64,56,k[1],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:340,min:36});
  T(m,k[0],148,340,22,k[2],{family:"Inter",style:"Bold",color:C.white}); });
const pc=panel(s,64,552,1140,478,"EVERY STAGE GETS PREVENT, DETECT AND RESPOND");
nm(addTable(pc,16,56,[210,310,290,298],["Stage","Prevent","Detect","Respond"],[
 ["Creation","20x bank, 5% cap each","Item-overlap scans","Retire exposed items"],
 ["Storage","Air-gapped HSM vault","Access-log alerts","Re-key, rebuild forms"],
 ["Personnel","Vetting, conflict bar","Behaviour analytics","Suspend, investigate"],
 ["Transmission","Encrypted, keys at T−60","Tamper seals, GPS","Switch to reserve form"],
 ["Exam centre","Hardened lab, jammers","CCTV analytics flags","Cancel one centre only"],
 ["Authentication","1:1 face match","Liveness check","Alternate-ID desk"],
 ["Examination","Locked nodes, 96 forms","Network SOC, logs","Re-test the one form"],
 ["Evaluation","Encrypted responses","Answer-similarity AI","Human panel decides"]],{rowH:46,headerH:40}),"TABLE: controls");
const CARDS=[["ENCRYPTION","Role: backbone. HSM vault, 3-of-5 keys, encrypted answers.","Limit: no body holds a whole key."],
 ["BIOMETRICS","Role: the gate. 1:1 face match with a liveness check.","Limit: deleted 90 days after results."],
 ["AI ANALYTICS","Role: analyst. Flags answer similarity and anomalies.","Limit: a human panel decides."],
 ["SURVEILLANCE","Role: proportionate. Wired CCTV in rooms and vaults.","Limit: no internet shutdowns."]];
CARDS.forEach((c,i)=>{ const x=1228+(i%2)*318, y=552+Math.floor(i/2)*251;
  const f=layered(s,x,y,294,227,C.white,"CARD: "+c[0]);
  TL(f,14,10,24,c[0],{color:C.primary,maxW:266}); addRect(f,14,48,266,2,C.ink);
  T(f,14,58,266,22,c[1]); T(f,14,150,266,22,c[2],{family:"Inter",style:"Bold",color:C.primaryDeep}); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }

return {results,warnings};
