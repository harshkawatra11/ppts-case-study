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
function addChip(slide, x, y, w, h, text, frontColor, textColor, size) {
  addRect(slide, x + 5, y + 5, w, h, C.accent, C.ink, 2);
  const f = addFrame(slide, x, y, w, h, frontColor, C.ink, 2);
  addText(f, "Poppins", "Bold", size || 22, textColor, text, 10, 0, w - 20, h, "CENTER", "CENTER"); return f; }
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
function logoSlot(p,x,y,w,h,brand){ const f=addFrame(p,x,y,w,h,C.white,C.primaryDeep,1.5,"LOGO: "+brand);
  try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,brand+" logo",0,0,w,h,"CENTER","CENTER",false); return f; }
const HG=[null,{r:0.918,g:0.965,b:0.925},{r:0.749,g:0.890,b:0.784},{r:0.525,g:0.796,b:0.596},{r:0.247,g:0.639,b:0.361},{r:0.055,g:0.302,b:0.145}];
const HR=[null,{r:1,g:0.957,b:0.945},{r:0.988,g:0.820,b:0.780},{r:0.957,g:0.553,b:0.471},{r:0.878,g:0.227,b:0.118}];
function wipe(s){ s.children.slice().forEach(c=>c.remove()); s.fills=[{type:"SOLID",color:C.white}]; }
function srcLine(s,text){ const src=addText(s,"Inter","Semi Bold",14,C.primary,text,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+s.name); return src; }
function fine(p,x,y,w,text){ const t=addText(p,"Inter","Semi Bold",16,C.ink,text,x,y,w,20,"LEFT",undefined,true); t.name="FINEPRINT"; return t; }
function rt(p,x,y,w,size,lead,rest,o){ o=o||{}; const t=T(p,x,y,w,size,lead+rest,{color:o.color});
  t.setRangeFontName(0,lead.length,{family:"Inter",style:"Bold"}); if(o.leadColor) t.setRangeFills(0,lead.length,[{type:"SOLID",color:o.leadColor}]); return t; }
function arrow(p,x1,y1,x2,y2,color,th){ color=color||C.ink; th=th||2.5; addDiagonalWire(p,x1,y1,x2,y2,color,th);
  const a=Math.atan2(y2-y1,x2-x1); [a+2.6,a-2.6].forEach(b=>addDiagonalWire(p,x2,y2,x2+10*Math.cos(b),y2+10*Math.sin(b),color,th)); }
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
function coverTop(s){ addChip(s,64,48,460,56,"CASEQUEST 2026  |  USME DTU",C.primaryDeep,C.white,22);
  [["DTU",548,100],["USME DTU",664,140],["DPIIT",820,140]].forEach(l=>logoSlot(s,l[1],40,l[2],72,l[0]));
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
function imgSlot(p,x,y,w,h,label){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+label); try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,label,4,0,w-8,h,"CENTER","CENTER",false); return f; }
function actorL(p,x,y,w,h,brands,title,sub){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2,"NODE "+title); addRect(f,0,0,6,h,C.accent);
  const n=Math.max(1,brands.length), gap=6, bw=(w-28-gap*(n-1))/n;
  brands.forEach((b,i)=>{ const bx0=16+i*(bw+gap); if(b.startsWith("IMG:")) imgSlot(f,bx0,8,bw,56,b.slice(4)); else logoSlot(f,bx0,8,bw,56,b); });
  TL(f,16,68,22,title,{color:C.primaryDeep,maxW:w-28}); sT(f,16,102,w-28,18,sub,{family:"Inter",style:"Semi Bold"}); return f; }
function lead(p,x,y,w,text,o){ o=o||{}; return T(p,x,y,w,o.size||24,text,{family:"Poppins",style:"Bold",color:o.color||C.primaryDeep}); }
function nmS(t,sz){ if(sz<22) t.name="SEC"; return t; }
function sT(p,x,y,w,sz,s,o){ return nmS(T(p,x,y,w,sz,s,o||{}),sz); }
function sTL(p,x,y,sz,s,o){ o=o||{}; if(sz<22&&o.min===undefined) o.min=sz; return nmS(TL(p,x,y,sz,s,o),sz); }
function sRT(p,x,y,w,sz,a,b,o){ return nmS(rt(p,x,y,w,sz,a,b,o||{}),sz); }
const V = {"hash": "8fe043dc97", "today": "₹640", "reformed": "₹1,038", "uplift_pct": "62%", "sellers": "2,400", "clusters": 6, "budget_cr": "₹3.58 crore", "team": {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University", "Team Leader"], ["Dayita Arora", "Delhi Technological University", "Member"]]}};
const results=[];
{ const s = await figma.getNodeByIdAsync("2:2"); wipe(s);
coverTop(s);
TL(s,64,128,100,"SMALL PARCELS,",{family:"Poppins",style:"ExtraBold",maxW:920,min:72});
TL(s,64,280,100,"FULL CHECKS",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:920,min:72});
T(s,64,446,920,22,"A reform strategy for DPIIT and the 2026 Inter-Ministerial Committee on E-Commerce Exports: simple, affordable online exporting for MSMEs and artisans without weakening customs checks or tax collection",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const v=layered(s,64,568,920,214,C.primaryDeep,"CARD: verdict");
T(v,24,16,872,24,"OUR ANSWER: KEEP EVERY PARCEL DECLARED, GRADE THE SELLER INSTEAD OF INSPECTING THE PARCEL, AND MOVE THE PAPERWORK FROM THE SELLER TO A CLUSTER EXPORT DESK.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,24,140,872,22,"In our model: a ₹3,960 order earns the seller "+V.reformed+" instead of "+V.today+" ("+V.uplift_pct+" more) with no freight subsidy. Pilot: "+V.clusters+" clusters, "+V.sellers+" sellers, "+V.budget_cr+".",{family:"Inter",style:"Semi Bold",color:C.white});
TL(s,64,798,40,V.team.name,{family:"Poppins",style:"ExtraBold",color:C.primary});
teamBT(s,64,856,[230,520,170]);
sTL(s,0,818,18,"harshkawatra11@gmail.com  |  CaseQuest 2026, USME DTU",{family:"Inter",style:"Bold",color:C.primaryDeep,rightAt:984});
srcLine(s,"Source: case brief | CBIC and DGFT 2026 notifications | team model "+V.hash+" | logos identify organisations in the analysis; no partnership or endorsement is implied");
}
{ const s = await figma.getNodeByIdAsync("2:2");
const m=addFrame(s,1016,150,840,882,C.white,C.ink,2,"PANEL: mind map");
TL(m,16,10,24,"WHO DECIDES WHETHER A SMALL PARCEL LEAVES INDIA",{color:C.primary,maxW:808}); addRect(m,16,50,808,2,C.ink);
T(m,16,60,808,22,"MSMEs make about 46% of India's exports; e-commerce carries a small slice. Eight actors shape every parcel.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const A=[[["DPIIT","DGFT","CBIC"],"CUSTOMS RULES","rules, risk engine, incentives"],
  [["India Post","DHL","Shiprocket"],"POST, CARRIERS","1,013 Dak Ghar Niryat Kendras"],
  [["Amazon","Etsy","eBay"],"PLATFORMS","fees, listings, buyer data"],
  [["RBI","GSTN"],"PAYMENTS, TAX","realisation, refunds, LUT"],
  [["IMG:Artisan at work"],"THE SELLER","women-led, first-generation"],
  [["EPCH","Ministry of MSME"],"SELLER BODIES","councils, clusters, credit"],
  [["US CBP","EU","HMRC"],"DESTINATIONS","de minimis gone, €3 EU duty"],
  [["IMG:Jaipur block print","IMG:Moradabad brass"],"CLUSTERS","six pilot sites"]];
const P=[[16,124],[294,124],[572,124],[16,377],[572,377],[16,630],[294,630],[572,630]], W=252, Hh=150, HX=420, HY=452;
P.forEach(q=>addDiagonalWire(m,HX,HY,q[0]+W/2,q[1]+Hh/2,C.ink,2.5));
A.forEach((a,i)=>actorL(m,P[i][0],P[i][1],W,Hh,a[0],a[1],a[2]));
addEllipse(m,HX-105,HY-105,210,210,C.primaryDeep,C.ink,2.5);
TL(m,0,HY-66,26,"MSME SELLER",{family:"Poppins",style:"Bold",color:C.white,maxW:190,centerAt:HX});
TL(m,0,HY-26,26,"IN A CLUSTER",{family:"Poppins",style:"Bold",color:C.accent,maxW:190,centerAt:HX});
sTL(m,0,HY+14,18,"Jaipur, Moradabad,",{family:"Inter",style:"Bold",color:C.white,centerAt:HX});
sTL(m,0,HY+38,18,"Varanasi and more",{family:"Inter",style:"Bold",color:C.white,centerAt:HX});
[["DESK","files for the seller"],["TIERS","checks follow risk"],["POOL","one rate card"]].forEach((r,i)=>{ const x=16+278*i;
  const f=addFrame(m,x,800,252,36,i===2?C.accent:C.tint,C.ink,1.5,"CHIP"); sRT(f,10,7,232,18,r[0]+": ",r[1],{leadColor:C.primaryDeep});
  if(i<2) arrow(m,x+254,818,x+276,818,C.ink,2); });
fine(m,16,838,808,"Logos and images identify organisations and places in the analysis; no partnership or endorsement is implied.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
return {results,warnings};