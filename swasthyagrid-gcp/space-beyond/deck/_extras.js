// ===== SWASTHYAGRID SPACE & BEYOND DECK EXTRAS =====
const RIBN=["SUMMARY","PROBLEM","SOLUTION","MARKET","FEASIBILITY","IMPACT"];
const RIBAP=["A1 MODEL","A2 ASSUMPTIONS","A3 SENSITIVITY","A4 SOURCES AND SHORT FORMS"];
const ARCS=true; // set to false if the S3 donut renders as a full disc in Figma
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
function diamond(p,cx,cy,r,fill){ const sd=r*Math.SQRT2, q=Math.SQRT1_2; const d=figma.createRectangle(); p.appendChild(d); d.resize(sd,sd);
  d.fills=[{type:"SOLID",color:fill}]; d.strokes=[{type:"SOLID",color:C.ink}]; d.strokeWeight=2; d.cornerRadius=0;
  d.relativeTransform=[[q,-q,cx],[q,q,cy-r]]; return d; }
function callout(p,x,y,w,h,lead,text,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.accentTint,C.ink,2,"CALLOUT");
  rt(f,14,o.py===undefined?10:o.py,w-28,22,lead,text,{color:o.color,leadColor:o.leadColor||C.primaryDeep}); return f; }
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
function coverTop(s){ addChip(s,64,48,780,56,"SPACE & BEYOND  |  NSUT  |  INNOVATION IDEATHON 2026",C.primaryDeep,C.white,22);
  logoSlot(s,868,40,72,72,"NSUT"); logoSlot(s,956,40,180,72,"Space and Beyond");
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// Heat cells for capability grids: Yes, Part, No, and the SwasthyaGrid row ("SG").
function ynCell(v){ if(v==="Yes") return {t:"Yes",f:HG[3],tc:C.ink}; if(v==="Part") return {t:"Part",f:C.accentTint,tc:C.ink};
  if(v==="No") return {t:"No",f:C.alertTint,tc:C.alert}; return {t:"Yes",f:C.primaryDeep,tc:C.accent}; }
// Sequential green heat cell between lo and hi; hl marks the base cell.
function heatG(v,lo,hi,hl){ if(hl) return {t:String(v),f:C.primaryDeep,tc:C.accent}; const k=Math.max(1,Math.min(4,1+Math.round(3*(v-lo)/(hi-lo))));
  return {t:String(v),f:HG[k],tc:k>=4?C.white:C.ink}; }
// RAG chip.
function rag(p,x,y,w,h,t){ const f=t==="GREEN"?C.primary:(t==="AMBER"?C.accent:C.alert);
  return bx(p,x,y,w,h,t,{fill:f,color:t==="AMBER"?C.ink:C.white,fam:"Poppins",st:"Bold",size:18}); }
// Cover mind-map node: logo slot on top, title, one-line role.
function actor(p,x,y,w,h,brand,title,sub){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2,"NODE "+title); addRect(f,0,0,6,h,C.accent);
  logoSlot(f,16,8,w-32,56,brand); TL(f,16,66,22,title,{color:C.primaryDeep,maxW:w-28}); sTL(f,16,100,18,sub,{family:"Inter",style:"Semi Bold",maxW:w-28}); return f; }
// A numbered step card with a dark header strip and a wrapped body (18 pt).
function step(p,x,y,w,h,head,who,body,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,2,"STEP "+head);
  const hz=o.hs||22, hf=addFrame(f,0,0,w,34,o.hfill||C.primaryDeep,C.ink,1.5,"HEAD"); (hz<22?sTL:TL)(hf,10,Math.round((34-hz*1.5)/2),hz,head,{color:o.hc||C.white,maxW:w-20});
  let y2=40; if(who){ const a=sT(f,8,y2,w-16,18,who,{family:"Inter",style:"Bold",color:C.primaryDeep}); y2+=a.height+2; }
  sT(f,8,y2,w-16,18,body,{family:"Inter",style:"Semi Bold"}); return f; }
// Bullet line with a bold lead at 18 pt; returns the next y.
function bl18(p,x,y,w,items,o){ o=o||{}; let cy=y; items.forEach(it=>{ addRect(p,x,cy+6,9,9,o.dot||C.primary,C.ink,1);
  const t=sRT(p,x+18,cy,w-18,18,it[0],it[1],{leadColor:o.lc||C.primaryDeep}); cy+=t.height+(o.gap===undefined?6:o.gap); }); return cy; }
// Small numeral + label tile.
function tile(p,x,y,w,h,num,label,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,1.5,"TILE");
  TL(f,10,o.ny===undefined?2:o.ny,o.size||26,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-20,min:18});
  sT(f,10,o.ly||40,w-20,18,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
// ===== END SWASTHYAGRID SPACE & BEYOND DECK EXTRAS =====
