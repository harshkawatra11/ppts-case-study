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
function kpi(s,x,y,w,h,num,label,o){ o=o||{}; const f=layered(s,x,y,w,h,o.fill||C.white,"KPI: "+label.slice(0,24),o.back);
  TL(f,16,o.ny===undefined?4:o.ny,o.size||48,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-32,min:30});
  T(f,16,o.ly||72,w-32,22,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
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
function cols(p,x,y,w,h,cats,series,o){ o=o||{}; const sz=o.size||18, lh=Math.ceil(sz*1.25), n=cats.length, pitch=w/n, bw=o.bw||Math.min(60,pitch*0.6);
  const top=y+lh+4, base=y+h-lh-2, max=o.max; addRect(p,x,base,w,2,C.ink);
  cats.forEach((c,i)=>{ const cx=x+pitch*i+pitch/2; let acc=0;
    series.forEach(s=>{ const v=s.values[i]; if(!(v>0)) return; const hh=(base-top)*v/max; addRect(p,cx-bw/2,base-(base-top)*(acc+v)/max,bw,Math.max(1.5,hh),s.color,C.ink,1); acc+=v; });
    if(o.totals&&o.totals[i]) sTL(p,0,base-(base-top)*acc/max-lh,sz,o.totals[i],{family:"Inter",style:"Bold",centerAt:cx});
    sTL(p,0,base+2,sz,c,{family:"Inter",style:"Bold",centerAt:cx}); }); return {base,top,pitch}; }
const V = {"hash": "8fe043dc97", "price": "₹3,960", "today": "₹640", "reformed": "₹1,038", "wh": "₹892", "cts_today": "₹1,531", "team": {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"], ["Dayita Arora", "Delhi Technological University", "Member"]]}, "ret_loss_today": "₹2,132"};
const results=[];
{ const s = await figma.getNodeByIdAsync("2:4");
skelBT(s,0,"1 / 3","R1 MARKET AND ACCESS",420,
"Paperwork and returns, not freight, decide whether a small parcel pays: a cluster desk, one rate card and a pooled return point lift a seller's margin from "+V.today+" to "+V.reformed+" an order with no freight subsidy",
"Source: team model "+V.hash+" (T2 to T6), representative ₹3,960 item, 0.5 kg | Lok Sabha USQ 2786 | SBI | EY-ASSOCHAM | MSME Ministry | CBIC Circular 17/2026 | DGFT 27/2026-27 | CBP, EU Council, HMRC, ATO | forces are team judgement");
rail(s,64,310,240,"TODAY",C.primaryDeep); rail(s,64,562,232,"THE MARKET",C.alert); rail(s,64,806,226,"THE CHALLENGE",C.primary);
function wfN(p,x,y,w,h,items,o){ o=o||{}; const sz=18, n=items.length, pitch=w/n, bw=o.bw||Math.min(56,pitch*0.6), lh=o.lh||30;
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,Y(0),w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=0;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?((o.tc&&o.tc[i])||C.primaryDeep):(it[1]>=0?C.good:C.alert),C.ink,1.5);
    sTL(p,0,y1-Math.ceil(sz*1.25)-2,sz,(it[1]<0?"−":(tot?"":"+"))+fmtN(Math.abs(it[1])),{family:"Inter",style:"Bold",color:it[1]<0?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sTL(p,0,base+4,sz,it[0],{family:"Inter",style:"Bold",centerAt:cx}); }); }
// band 1: one order today
kpi(s,116,310,268,112,V.price,"price of one order",{size:40,ny:2,ly:66});
kpi(s,392,310,268,112,V.today,"kept by the seller",{size:40,ny:2,ly:66,color:C.alert});
kpi(s,116,438,268,112,V.cts_today,"cost to serve a parcel",{size:40,ny:2,ly:66});
kpi(s,392,438,268,112,"16.2%","of the price kept",{size:40,ny:2,ly:66,color:C.alert});
const p1=pnl(s,676,310,560,240,"ONE ORDER TODAY, ₹");
wfN(p1,14,46,532,156,[["Price",3960],["Fee",-594],["Goods",-800],["Freight",-1000],["Forms",-232],["Returns",-693],["Kept",640]],{min:0,max:4300,bw:46,lh:28,tc:[C.primaryDeep,0,0,0,0,0,C.primary]});
note(p1,14,204,532,"Hidden: ","forms and returns ₹925; freight ₹1,000");
const p2=pnl(s,1248,310,608,240,"FIVE WAYS TO SHIP ONE ORDER, ₹");
tbl(p2,14,46,[190,96,80,96,118],["Lane","Freight","Forms","Kept","Margin"],[["Parcel today","₹1,000","₹232",V.today,"16.2%"],["+ cluster desk","₹1,000","₹38","₹835","21.1%"],["+ one rate card","₹880","₹38","₹955","24.1%"],["+ pooled returns","₹880","₹38",V.reformed,"26.2%"],["Warehouse lane","₹1,118","₹15",V.wh,"22.5%"]],
  {hh:26,rh:26,name:"lanes",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[C.alertTint,null,null,C.tint,C.surfaceAlt]});
note(p2,14,206,580,"SO WHAT: ","the reformed parcel keeps 1.6x today");
}
{ const s = await figma.getNodeByIdAsync("2:4");
// band 2: the market around one seller
const p3=pnl(s,116,562,572,232,"MSME EXPORTS, AND THE ONLINE SLICE");
cols(p3,14,46,220,180,["FY21","FY25"],[{color:C.primary,values:[52849,173350]}],{max:185000,bw:60,totals:["52,849","1,73,350"]});
sTL(p3,22,50,18,"3.3x",{family:"Inter",style:"Bold",color:C.alert});
sTL(p3,22,74,18,"in 4 years",{family:"Inter",style:"Bold",color:C.primaryDeep});
[["46%","MSME share of exports, FY25"],["$4 to 5 bn","e-commerce exports, FY23"],["7.3 crore","Udyam units; 1 in 420 export"]].forEach((m,i)=>{ const y=50+i*58;
  TL(p3,250,y,26,m[0],{family:"Poppins",style:"ExtraBold",color:i===0?C.primary:C.alert,maxW:140}); sT(p3,398,y+2,160,18,m[1],{family:"Inter",style:"Bold"}); });
const p4=pnl(s,700,562,572,232,"FIVE FORCES ON ONE CLUSTER SELLER");
const PX=[14,198,382], PY=[46,108,170], RF={H:HR[3],M:HR[2],L:HG[2],X:C.primaryDeep,C:C.surfaceAlt,S:C.accentTint};
[[0,0,"One seller, few parcels","","C"],[0,1,"New entrants","HIGH","H"],[0,2,"Platforms: 15% fee, own data","","C"],
 [1,0,"Carriers","HIGH","H"],[1,1,"Rivalry","HIGH","X"],[1,2,"Buyers abroad","HIGH","H"],
 [2,0,"Destinations tighten rules","","C"],[2,1,"Substitutes: EOR","MEDIUM","M"],[2,2,"Win on cost a parcel","","S"]].forEach(q=>{
  const dk=q[4]==="X", f=addFrame(p4,PX[q[1]],PY[q[0]],176,56,RF[q[4]],C.ink,dk?2.5:1.5,"FORCE");
  if(q[3]){ sT(f,6,4,164,18,q[2],{family:"Inter",style:"Bold",align:"CENTER",color:dk?C.white:C.ink}); sT(f,6,28,164,18,q[3],{family:"Poppins",style:"Bold",align:"CENTER",color:dk?C.accent:C.ink}); }
  else sT(f,6,6,164,18,q[2],{family:"Inter",style:q[4]==="S"?"Bold":"Semi Bold",align:"CENTER",color:q[4]==="S"?C.alert:C.ink}); });
const p5=pnl(s,1284,562,572,232,"DESTINATIONS CLOSE THE LOW-VALUE DOOR");
tbl(p5,14,46,[96,280,168],["Market","Rule for low-value parcels","Who pays"],[["US","de minimis gone, Aug 2025","duty, ad valorem"],["EU","€3 an item from 1 Jul 2026","€3 per item line"],["UK","£135: marketplace VAT","the marketplace"],["UAE","duty-free to AED 1,000","the importer"],["Australia","GST on A$1,000 or less","seller registers"]],
  {hh:26,rh:25,name:"destinations",fills:[C.alertTint,C.alertTint,null,null,null]});
note(p5,14,199,544,"SO WHAT: ","every parcel must be declared well");
// band 3: the clock and the question
const p6=pnl(s,116,806,600,226,"THE 2026 CLOCK: EVERY ROUTE IS NOW OPEN");
addRect(p6,30,90,540,3,C.ink);
[["Sep 2024","Courier benefits",0],["Jan 2026","Postal benefits",0],["Apr 2026","Cap gone, returns eased",1],["Jul 2026","Press Note 3",0],["Aug 2026","EOR framework",0]].forEach((q,i)=>{ const cx=70+i*115;
  addEllipse(p6,cx-10,81,20,20,q[2]?C.alert:C.primary,C.ink,2);
  sTL(p6,0,50,18,q[0],{family:"Poppins",style:"Bold",centerAt:cx,color:q[2]?C.alert:C.ink}); sT(p6,cx-56,106,112,18,q[1],{family:"Inter",style:"Bold",align:"CENTER"}); });
note(p6,14,172,572,"SO WHAT: ","the routes are open; per-parcel cost is left");
const p7=pnl(s,728,806,1128,226,"THE KEY QUESTION, BROKEN DOWN: A MECE ISSUE TREE");
bx(p7,14,52,212,164,"How can a ₹3,960 parcel pay without a lighter check?",{fill:C.primaryDeep,color:C.white,size:22,pad:10});
const BC=[C.alert,C.primary,C.primaryDeep], BY=[52,110,168];
[["CUT THE FORMS",["45 minutes and a ₹120 agent fee a parcel (A07, A09)","CSB-V keyed by hand; three routes, three rule books"]],
 ["CUT FREIGHT",["₹1,000 for a 0.5 kg parcel; no bulk rate for a few parcels","A 12% rate-card saving is the least certain lever (A28)"]],
 ["FIX RETURNS",["20% to 25% of e-commerce exports come back (CBIC)","One return costs "+V.ret_loss_today+"; most are abandoned abroad (T2)"]]].forEach((b,i)=>{
  bx(p7,262,BY[i],240,50,b[0],{fill:BC[i],color:C.white,fam:"Poppins",size:20}); elb(p7,226,134,262,BY[i]+25,C.ink,2);
  b[1].forEach((leaf,j)=>{ const ly=BY[i]+j*26; const lf=addFrame(p7,526,ly,588,24,j?C.surfaceAlt:C.white,C.ink,1,"LEAF"); sT(lf,8,1,572,18,leaf,{family:"Inter",style:"Semi Bold"}); elb(p7,502,BY[i]+25,526,ly+12,BC[i],2); }); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
return {results,warnings};