// ===== ASIAN PAINTS ALCHEMY TEMPLATE HELPERS =====
// Every built slide keeps the organisers' background: one locked image rectangle named "TPL: background" (Asian Paints logo top
// left, Alchemy mark top right, Unstop mark bottom right, purple bar at the foot). Nothing may be drawn on those zones.
const KEEP=[[0,0,165,122,"Asian Paints logo"],[1745,0,1920,118,"Alchemy mark"],[1605,995,1920,1080,"Unstop mark"],[0,1060,1920,1080,"purple foot bar"]];
const RIBAPC=["THE TECHNOLOGY","THE CHALLENGE","WHY IT IS UNIQUE","MECHANISM AND PROOF","COST AND SCALE"];
const RIBANX=["A1 MODEL","A2 ASSUMPTIONS","A3 SENSITIVITY","A4 SOURCES"];
function wipeTpl(s){ s.children.slice().forEach(c=>{ if(!String(c.name||"").startsWith("TPL:")) c.remove(); }); }
function ribbonAP(s,active,labels){ const y=30,h=54,n=labels.length,X0=182,ROOM=1378; let size=22;
  let tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l));
  const fits=pad=>tw.reduce((a,b)=>a+b,0)+pad*n+26*(n-1)<=ROOM;
  let pad=56; while(!fits(pad)&&pad>36) pad-=4;
  if(!fits(pad)){ size=20; tw=labels.map(l=>measureW(s,"Poppins","Bold",size,l)); pad=56; while(!fits(pad)&&pad>36) pad-=4; }
  if(!fits(pad)) warnings.push("ribbon too wide");
  const widths=tw.map(w=>Math.ceil(w+pad)), used=widths.reduce((a,b)=>a+b,0), gap=n>1?Math.min(70,Math.max(26,(ROOM-used)/(n-1))):0;
  let x=X0; const bxs=[];
  for(let i=0;i<n;i++){ const w=widths[i], act=i===active;
    if(act) addRect(s,x+7,y+7,w,h,C.accent,C.ink,2.5);
    addRect(s,x,y,w,h,act?C.primary:C.accent,C.ink,2);
    addText(s,"Poppins","Bold",size,act?C.white:C.ink,labels[i],x,y+Math.round((h-size*1.5)/2),w,Math.round(size*1.5),"CENTER","CENTER");
    addEllipse(s,x+3,y+h/2-7,14,14,C.white,C.ink,2); addEllipse(s,x+w-17,y+h/2-7,14,14,C.white,C.ink,2);
    bxs.push({x,w}); x+=w+gap; }
  for(let i=0;i<n-1;i++) addWireH(s,bxs[i].x+bxs[i].w-10,bxs[i+1].x+10,y+h/2,C.ink,2.5); }
function srcAP(s,text){ const t=addText(s,"Inter","Semi Bold",14,C.primary,text,40,1032,1550,20,"LEFT",undefined,true); t.name="SOURCE";
  if(t.height>22) warnings.push("source 2 lines: "+s.name); return t; }
// Core-slide skeleton inside the template: ribbon between the two logos, section chip, counter, a two-line action title, source line.
function skelAP(s,active,counter,chip,chipW,title,source,o){ o=o||{}; wipeTpl(s); ribbonAP(s,active,o.labels||RIBAPC);
  addChip(s,1590,30,140,54,counter,C.primaryDeep,C.white,22);
  addChip(s,40,130,chipW,48,chip,C.primary,C.white,22);
  const t=addText(s,"Poppins","Bold",36,C.ink,title,40,190,1840,100,"LEFT",undefined,true); t.name="HEADLINE";
  while(t.height>110&&t.fontSize>32){ t.fontSize=t.fontSize-1; }
  if(t.height>110) warnings.push("headline 3 lines: "+counter);
  srcAP(s,source); return t; }
// Run at the end of every slide: nothing on a logo zone, and panels end above the source line.
function guardAP(s){ for(const c of s.children){ const n=String(c.name||""); if(n.startsWith("TPL:")) continue;
    for(const k of KEEP) if(c.x<k[2]&&c.x+c.width>k[0]&&c.y<k[3]&&c.y+c.height>k[1]) warnings.push("keepOut "+k[4]+": "+(n||c.type).slice(0,30));
    if(/^(PANEL|CARD|TABLE|ZONE|RAIL):/.test(n)&&c.y+c.height>1024) warnings.push("belowContent: "+n.slice(0,30)); } }
function imgSlot(p,x,y,w,h,label){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+label); try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,label,4,0,w-8,h,"CENTER","CENTER",false); return f; }
// Cross-section of the two-coat film: seal coat, air-network base coat with rutile and chalk, wall putty. Deterministic placement.
function film(p,x,y,w,o){ o=o||{}; const hs=o.hs||40, hb=o.hb||120, hp=o.hp||30; let seed=o.seed||11;
  const rnd=()=>{ seed=(seed*16807)%2147483647; return seed/2147483647; };
  const seal=addFrame(p,x,y,w,hs,C.tint,C.ink,2,"FILM: seal coat");
  for(let i=0;i<Math.round(w/(o.sealPitch||46));i++){ const d=7; addEllipse(seal,4+rnd()*(w-d-8),5+rnd()*(hs-d-10),d,d,C.primary,null,0); }
  const base=addFrame(p,x,y+hs,w,hb,C.white,C.ink,2,"FILM: base coat");
  const nP=Math.round(w*hb/(o.pccArea||1400)), nT=Math.round(w*hb/(o.tiArea||2600));
  for(let i=0;i<nP;i++){ const d=12+Math.round(rnd()*8); addEllipse(base,2+rnd()*(w-d-4),2+rnd()*(hb-d-4),d,d,C.surface,C.ink,1); }
  for(let i=0;i<nT;i++){ const d=7; addEllipse(base,2+rnd()*(w-d-4),2+rnd()*(hb-d-4),d,d,C.primary,null,0); }
  addRect(p,x,y+hs+hb,w,hp,C.accentTint,C.ink,2);
  return {ySeal:y,yBase:y+hs,yPutty:y+hs+hb,yEnd:y+hs+hb+hp}; }
// Line chart with a numeric x axis and 18 pt labels. series: [{pts:[[x,y],...],color,label,at,dx,dy}]
function xyS(p,x,y,w,h,series,o){ o=o||{}; const sz=o.size||18, L=x+(o.padL||64), R=x+w-(o.padR||20), Tp=y+8, B=y+h-Math.ceil(sz*1.3)-8;
  const X=v=>L+(R-L)*(v-o.xMin)/(o.xMax-o.xMin), Y=v=>B-(B-Tp)*(v-o.yMin)/(o.yMax-o.yMin);
  (o.yTicks||[]).forEach(v=>{ addRect(p,L,Y(v),R-L,1,C.surface); sTL(p,0,Y(v)-Math.round(sz*0.62),sz,o.yFmt?o.yFmt(v):String(v),{family:"Inter",style:"Semi Bold",rightAt:L-6}); });
  (o.xTicks||[]).forEach(v=>sTL(p,0,B+4,sz,o.xFmt?o.xFmt(v):String(v),{family:"Inter",style:"Bold",centerAt:X(v)}));
  addRect(p,L,B,R-L,2,C.ink); addRect(p,L,Tp,2,B-Tp,C.ink);
  series.forEach(se=>{ const pts=se.pts.map(q=>[X(q[0]),Y(q[1])]);
    for(let i=0;i<pts.length-1;i++) addDiagonalWire(p,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],se.color,3.5);
    pts.forEach(q=>addEllipse(p,q[0]-5,q[1]-5,10,10,se.color,C.ink,1.5));
    if(se.label){ const q=pts[se.at===undefined?pts.length-1:se.at]; sTL(p,q[0]+(se.dx||8),q[1]+(se.dy||-30),sz,se.label,{family:"Inter",style:"Bold",color:se.color}); } });
  return {X,Y,L,R,Tp,B}; }
function pctN(s){ return parseFloat(String(s).replace("%","")); }
// ===== END ASIAN PAINTS ALCHEMY TEMPLATE HELPERS =====
