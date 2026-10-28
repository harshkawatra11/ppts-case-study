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
const HG=[null,{r:0.918,g:0.965,b:0.925},{r:0.749,g:0.890,b:0.784},{r:0.525,g:0.796,b:0.596},{r:0.247,g:0.639,b:0.361},{r:0.055,g:0.302,b:0.145}];
const HR=[null,{r:1,g:0.957,b:0.945},{r:0.988,g:0.820,b:0.780},{r:0.957,g:0.553,b:0.471},{r:0.878,g:0.227,b:0.118}];
function wipe(s){ s.children.slice().forEach(c=>c.remove()); s.fills=[{type:"SOLID",color:C.white}]; }
function srcLine(s,text){ const src=addText(s,"Inter","Semi Bold",14,C.primary,text,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+s.name); return src; }
function rt(p,x,y,w,size,lead,rest,o){ o=o||{}; const t=T(p,x,y,w,size,lead+rest,{color:o.color});
  t.setRangeFontName(0,lead.length,{family:"Inter",style:"Bold"}); if(o.leadColor) t.setRangeFills(0,lead.length,[{type:"SOLID",color:o.leadColor}]); return t; }
const RIBN=["R1 MARKET AND ACCESS","R2 RULES AND INTEGRITY","R3 + R4 COORDINATION AND PILOT"];
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
function arrow(p,x1,y1,x2,y2,color,th){ color=color||C.ink; th=th||2.5; addDiagonalWire(p,x1,y1,x2,y2,color,th);
  const a=Math.atan2(y2-y1,x2-x1); [a+2.6,a-2.6].forEach(b=>addDiagonalWire(p,x2,y2,x2+10*Math.cos(b),y2+10*Math.sin(b),color,th)); }
function diamond(p,cx,cy,r,fill){ const sd=r*Math.SQRT2, q=Math.SQRT1_2; const d=figma.createRectangle(); p.appendChild(d); d.resize(sd,sd);
  d.fills=[{type:"SOLID",color:fill}]; d.strokes=[{type:"SOLID",color:C.ink}]; d.strokeWeight=2; d.cornerRadius=0;
  d.relativeTransform=[[q,-q,cx],[q,q,cy-r]]; return d; }
const INDIA_MAP=[[[6,3]],[[5,6]],[[7,8]],[[7,7]],[[7,6]],[[8,6]],[[8,5]],[[8,6]],[[7,9]],[[6,9]],[[5,10],[32,3]],[[4,13],[25,1],[30,6]],[[2,18],[24,2],[29,5]],[[3,22],[26,7]],[[3,22],[27,6]],[[4,20],[30,2]],[[0,25],[28,3]],[[1,25],[30,1]],[[2,3],[6,20],[30,1]],[[2,3],[6,17]],[[6,17]],[[6,16]],[[6,14]],[[6,14]],[[6,12]],[[6,11]],[[7,9]],[[7,8]],[[8,7]],[[8,7]],[[8,7],[30,1]],[[9,5]],[[9,5]],[[10,4]],[[10,3]],[[11,1]],[],[[31,1]]];
function pin(p,cx,cy,d,label,fill,fg){ addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,2);
  if(label){ const t=TL(p,0,0,22,label,{color:fg||C.white}); t.x=cx-t.width/2; t.y=cy-t.height/2; } }
function mapDots(p,x,y,w,h,rows,nc,fill){ const cw=w/nc, ch=h/rows.length, d=Math.min(cw,ch)*0.72;
  rows.forEach((runs,r)=>runs.forEach(u=>{ for(let k=u[0];k<u[0]+u[1];k++){ const e=addRect(p,x+k*cw+(cw-d)/2,y+r*ch+(ch-d)/2,d,d,fill); e.name="MAPDOT"; } })); }
function geo(x,y,w,h,lat,lon){ return [x+(lon-68.1)/29.3*w, y+(37.1-lat)/30.4*h]; }
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
function gnt(p,x,y,lw,cw,rh,cl,rows,o){ o=o||{}; const sz=o.size||18, hy=Math.ceil(sz*1.3)+4;
  cl.forEach((c,j)=>{ sTL(p,0,y,sz,c,{family:"Inter",style:"Bold",centerAt:x+lw+cw*j+cw/2}); addRect(p,x+lw+cw*j,y+hy-2,1.5,rh*rows.length+4,C.surface); });
  const y0=y+hy;
  rows.forEach((r,i)=>{ const ry=y0+rh*i; sTL(p,x,ry+(rh-Math.ceil(sz*1.25))/2,sz,r.label,{family:"Inter",style:"Bold",maxW:lw-10});
    addRect(p,x+lw+cw*r.s+3,ry+3,cw*(r.e-r.s+1)-6,rh-6,r.color||C.primary,C.ink,1.5); }); return y0; }
const V = {"hash": "8fe043dc97", "sellers": "2,400", "clusters": 6, "budget_cr": "₹3.58 crore", "team": {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"], ["Dayita Arora", "Delhi Technological University", "Member"]]}, "reformed": "₹1,038", "bear_today": "₹14", "bear_ref": "₹385", "bull_ref": "₹1,623", "act": {"bear": 600, "base": 960, "bull": 1320}, "gain_cr": {"bear": "₹0.80 crore", "base": "₹2.29 crore", "bull": "₹4.92 crore"}, "cpa": {"bear": "₹59,620", "base": "₹37,262", "bull": "₹27,100"}};
const results=[];
{ const s = await figma.getNodeByIdAsync("2:6");
skelBT(s,2,"3 / 3","R3 + R4 COORDINATION AND PILOT",560,
"One compact gives every agency a duty and a gain; a "+V.sellers+"-seller pilot in "+V.clusters+" clusters tests the reform for "+V.budget_cr+" and scales only if seller margin rises and integrity holds",
"Source: team model "+V.hash+" (T10, T11) | DGFT Towns of Export Excellence list | GI registry | ODOP | India Post 2025 (1,013 DNKs) | compact, pilot design, gates and targets are proposals");
rail(s,64,310,240,"THE COMPACT",C.primaryDeep); rail(s,64,562,470,"THE PILOT",C.primary);
// band 1: who holds what the seller needs; give and get
const p1=pnl(s,116,310,560,240,"MIND MAP: WHO HOLDS WHAT SELLERS NEED");
const L=[["CBIC\nrisk engine",HG[3]],["DGFT\nEOR, hubs",HG[3]],["DoP\n1,013 DNKs",HG[3]],["RBI\npayment feed",HG[2]]];
const R=[["GSTN\nrefund match",HG[2]],["Platforms\nfee sheet",C.accentTint],["Carriers\nrate card",C.accentTint],["Councils\nseller drive",C.accentTint]];
const hx=280, hy=141;
[0,1,2,3].forEach(i=>{ const y=48+48*i+22; addDiagonalWire(p1,154,y,hx,hy,C.ink,2); addDiagonalWire(p1,406,y,hx,hy,C.ink,2); });
L.forEach((b,i)=>bx(p1,14,48+48*i,140,44,b[0],{fill:b[1]}));
R.forEach((b,i)=>bx(p1,406,48+48*i,140,44,b[0],{fill:b[1]}));
addEllipse(p1,hx-55,hy-55,110,110,C.primaryDeep,C.ink,2.5);
TL(p1,0,hy-30,22,"DPIIT",{color:C.white,centerAt:hx}); sTL(p1,0,hy+2,18,"compact",{family:"Inter",style:"Bold",color:C.accent,centerAt:hx});
const p2=pnl(s,688,310,1168,240,"GIVE AND GET: ONE DUTY, ONE GAIN, ONE SCORECARD LINE");
const hd=["Actor","Gives","Gets","KPI"], cw2=[112,170,170,110];
tbl(p2,14,46,cw2,hd,[["DPIIT","Convenes, funds","Export growth","Exporters"],["DGFT","EOR rules, hubs","District data","New firms"],["CBIC","Risk engine, tiers","Item-level data","Error rate"],["DoP","Desks at DNKs","Parcel volume","Ship days"]],{hh:26,rh:32,name:"givegetA",strip:[C.primaryDeep,HG[3],HG[3],HG[3]]});
tbl(p2,588,46,cw2,hd,[["RBI, banks","Payment feed","Fewer open bills","Realised"],["GSTN","Refund match","Lower refund risk","Refunds"],["Platforms","Fee sheet, data","New supply","Fees"],["Carriers","Cluster rate card","Pooled volume","₹ a parcel"]],{hh:26,rh:32,name:"givegetB",strip:[HG[2],HG[2],C.accent,C.accent]});
note(p2,14,206,1140,"Rule: ","the scorecard is published monthly; any blocker goes to the committee within two weeks");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
{ const s = await figma.getNodeByIdAsync("2:6");
// the six clusters on the map
const mp=pnl(s,116,562,520,470,"SIX CLUSTERS, SIX PRODUCTS, SIX REGIONS");
const MX=14,MY=50,MW=290,MH=301;
mapDots(mp,MX,MY,MW,MH,INDIA_MAP,36,HG[2]);
const P=[[1,26.91,75.79,"Jaipur","block print, North"],[2,28.84,78.77,"Moradabad","brassware, North"],[3,25.32,82.99,"Varanasi","silk stoles, East"],
 [4,23.25,69.67,"Kutch","embroidery, West"],[5,12.65,77.21,"Channapatna","wooden toys, South"],[6,23.83,91.28,"Agartala","cane, bamboo, NE"]];
P.forEach(q=>{ const g=geo(MX,MY,MW,MH,q[1],q[2]); pin(mp,g[0],g[1],28,String(q[0]),q[0]<=3?C.primaryDeep:C.alert,C.white); });
P.forEach((q,i)=>{ const y=48+i*52; TL(mp,318,y,22,q[0]+" "+q[3],{color:C.primaryDeep,maxW:188}); sTL(mp,318,y+30,18,q[4],{family:"Inter",style:"Bold",maxW:188}); });
note(mp,14,366,492,"Why: ","three are named in the brief, two are GI crafts, one is a remote north-east site");
sT(mp,14,430,492,18,"Waves: 1,200 sellers from M3, 1,200 from M7",{family:"Inter",style:"Bold",color:C.primaryDeep});
// twelve months, four gates
const p4=pnl(s,648,562,780,232,"12 MONTHS, TWO WAVES, FOUR GATES");
const GC=[C.primaryDeep,C.accent,C.primary,HG[3],C.alert,HG[4]];
const y0=gnt(p4,14,46,190,46,24,["1","2","3","4","5","6","7","8","9","10","11","12"],[["Legal, tenders",0,1],["Rate card priced",0,1],["Wave 1, 1,200",2,11],["Wave 2, 1,200",6,11],["Integrity audit",3,11],["Evaluation",9,11]].map((r,i)=>({label:r[0],s:r[1],e:r[2],color:GC[i]})));
[["G1",2,1],["G2",6,2],["G3",9,4],["G4",12,5]].forEach(g=>{ const gx=14+190+46*g[1], gy=y0+24*g[2]+12; diamond(p4,gx,gy,11,C.accent);
  sTL(p4,g[1]===12?gx-44:gx+14,gy-12,18,g[0],{family:"Poppins",style:"Bold"}); });
const p5=pnl(s,1440,562,416,232,"GO ONLY IF");
tbl(p5,14,46,[56,74,258],["Gate","When","Test"],[["G1","M2","rate card saves 5% or more"],["G2","M6","wave 1 margin up ₹200+"],["G3","M9","discrepancy no worse"],["G4","M12","3 of 4 KPI targets met"]],{hh:26,rh:30,name:"gates"});
note(p5,14,198,388,"Else: ","revise or stop at that gate");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
{ const s = await figma.getNodeByIdAsync("2:6");
// what the pilot buys, three scenarios, risks
const c=layered(s,648,806,400,219,C.primaryDeep,"CARD: pilot");
TL(c,20,6,22,"THE PILOT IN OUR MODEL, BASE",{color:C.accent,maxW:360});
const a1=TL(c,20,48,32,V.budget_cr,{family:"Poppins",style:"ExtraBold",color:C.white});
arrow(c,20+a1.width+10,72,20+a1.width+50,72,C.accent,5);
TL(c,20+a1.width+60,40,44,fmtN(V.act.base),{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:380-a1.width-60,min:30});
T(c,20,104,360,22,"active of "+V.sellers+" by month 12",{family:"Inter",style:"Bold",color:C.white});
addDashedRow(c,20,146,360,C.accent,14,9,2);
[[V.cpa.base,"per seller"],[V.gain_cr.base.replace(" crore"," cr"),"seller gain"],["6","clusters"]].forEach((k,i)=>{ const x=20+i*122;
  TL(c,x,154,22,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:114}); sTL(c,x,186,18,k[1],{family:"Inter",style:"Bold",color:C.white,maxW:114}); });
const p7=pnl(s,1060,806,436,226,"THREE SCENARIOS IN OUR MODEL");
const cr=v=>v.replace(" crore"," cr");
tbl(p7,14,46,[132,92,92,92],["Measure","Bear","Base","Bull"],[["Active",fmtN(V.act.bear),fmtN(V.act.base),fmtN(V.act.bull)],["Seller gain",cr(V.gain_cr.bear),cr(V.gain_cr.base),cr(V.gain_cr.bull)],["₹ per active",V.cpa.bear,V.cpa.base,V.cpa.bull],["Kept/order",V.bear_ref,V.reformed,V.bull_ref]],
  {hh:26,rh:30,name:"scen",align:["LEFT","RIGHT","RIGHT","RIGHT"]});
addRect(p7,14+132+92,46,92,146,null,C.primary,3);
note(p7,14,196,408,"Bear: ","an order still goes from "+V.bear_today+" to "+V.bear_ref);
const p8=pnl(s,1508,806,348,226,"TOP RISKS, ONE FIX EACH");
tbl(p8,14,46,[134,186],["Risk","What we do"],[["Rate card","desk-only package"],["Misuse rises","tighten tiers at G3"],["Delays","2-week escalation"],["Low uptake","local desks"]],{hh:26,rh:34,name:"risks",strip:[C.alert,C.alert,C.accent,C.accent]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
return {results,warnings};