// ===== EUROGRIP DECK EXTRAS =====
const RIBN=["INCENTIVE REALISM","INSIGHT-GROUNDING","SCALABILITY","SUSTAINABILITY","MEASURABILITY"];
const RIBAP=["A1 SHOP UNIVERSE","A2 BUDGET MODEL","A3 BENCHMARKS","A4 RISKS AND VALIDATION"];
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
function coverTop(s){ addChip(s,64,48,600,56,"EUROGRIP × UNSTOP  |  CASE STUDY 4",C.primaryDeep,C.white,22);
  logoSlot(s,696,40,190,72,"Eurogrip"); logoSlot(s,902,40,150,72,"Unstop"); logoSlot(s,1068,40,72,72,"DTU");
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// ===== END EUROGRIP DECK EXTRAS =====
