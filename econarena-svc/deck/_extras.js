// ===== ECON-ARENA DECK EXTRAS (from the Arthik Khayal extras) =====
const RIBN=["GO-TO-MARKET AND BUDGET","PRODUCT AND MOAT","ENVIRONMENTAL STRATEGY"];
const RIBAP=["A1 FINANCIAL SKETCH","A2 ASSUMPTIONS, RULES AND SOURCES"];
const ARCS=true;
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
function callout(p,x,y,w,h,lead,text,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.accentTint,C.ink,2,"CALLOUT");
  rt(f,14,o.py===undefined?10:o.py,w-28,22,lead,text,{color:o.color,leadColor:o.leadColor||C.primaryDeep}); return f; }
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
// Cover strip: event chip, organiser and team-institution logo slots, team chip, a wire with dots.
function coverTop(s){ addChip(s,64,48,560,56,"ECON-ARENA  |  BLISSPOINT'26-27",C.primaryDeep,C.white,22);
  [["SVC",644,84],["Econ-Arena",748,170],["DTU",938,84],["GGSIPU",1042,84],["Ramjas College",1146,84]].forEach(l=>logoSlot(s,l[1],40,l[2],72,l[0]));
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// Image placeholder (people or product shots): grey, dashed, named IMG.
function imgSlot(p,x,y,w,h,label){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+label); try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,label,4,0,w-8,h,"CENTER","CENTER",false); return f; }
// Mind-map node with one to three logo slots ("IMG:" prefix makes an image slot), a title and a wrapped sub-line.
function actorL(p,x,y,w,h,brands,title,sub){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2,"NODE "+title); addRect(f,0,0,6,h,C.accent);
  const n=Math.max(1,brands.length), gap=6, bw=(w-28-gap*(n-1))/n;
  brands.forEach((b,i)=>{ const bx0=16+i*(bw+gap); if(b.startsWith("IMG:")) imgSlot(f,bx0,8,bw,56,b.slice(4)); else logoSlot(f,bx0,8,bw,56,b); });
  TL(f,16,68,22,title,{color:C.primaryDeep,maxW:w-28}); sT(f,16,102,w-28,18,sub,{family:"Inter",style:"Semi Bold"}); return f; }
// Heat cells. ynCell for Yes, Part, No; sc5 for a 1 to 5 score; heatN for counts with ascending cut points.
function ynCell(v){ if(v==="Yes") return {t:"Yes",f:HG[3],tc:C.ink}; if(v==="Part") return {t:"Part",f:C.accentTint,tc:C.ink};
  if(v==="No") return {t:"No",f:C.alertTint,tc:C.alert}; return {t:String(v),f:C.white,tc:C.ink}; }
function sc5(v,dp){ const n=parseFloat(v); const k=n>=4?5:(n>=3.25?4:(n>=2.5?3:(n>=1.75?2:1)));
  return {t:typeof v==="string"?v:(dp===undefined?String(n):n.toFixed(dp)),f:HG[k],tc:k>=4?C.white:C.ink}; }
function heatN(v,cuts){ if(!v) return {t:"",f:C.surfaceAlt,tc:C.ink}; let k=1; cuts.forEach((c,i)=>{ if(v>=c) k=i+2; }); k=Math.min(5,k);
  return {t:fmtN(v),f:HG[k],tc:k>=4?C.white:C.ink}; }
// Tornado at 18 pt: red to the bear side, teal to the bull side, a black base line, optional tick labels.
function torS(p,x,y,w,items,baseV,o){ o=o||{}; const lw=o.lw||240, rh=o.rh||30, span=w-lw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const lo=Math.min(it.lo,it.hi), hi=Math.max(it.lo,it.hi);
    addRect(p,X(lo),ry+5,Math.max(2,X(baseV)-X(lo)),rh-10,C.alert,C.ink,1); addRect(p,X(baseV),ry+5,Math.max(2,X(hi)-X(baseV)),rh-10,C.good,C.ink,1); });
  addRect(p,X(baseV)-1,y-4,2.5,rh*items.length+8,C.ink);
  (o.ticks||[]).forEach(t=>sTL(p,0,y+rh*items.length+6,18,t.toFixed(1),{family:"Inter",style:"Bold",centerAt:X(t)})); return X; }
// Small numeral + label tile.
function tile(p,x,y,w,h,num,label,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,1.5,"TILE");
  TL(f,10,o.ny===undefined?2:o.ny,o.size||26,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-20,min:18});
  sT(f,10,o.ly||40,w-20,18,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
function tick(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: tick"); addEllipse(f,0,0,d,d,C.good,C.ink,1.5);
  addDiagonalWire(f,d*0.25,d*0.53,d*0.43,d*0.71,C.white,3); addDiagonalWire(f,d*0.43,d*0.71,d*0.76,d*0.32,C.white,3); return f; }
function cross(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: no"); addEllipse(f,0,0,d,d,C.alert,C.ink,1.5);
  addDiagonalWire(f,d*0.32,d*0.32,d*0.68,d*0.68,C.white,3); addDiagonalWire(f,d*0.68,d*0.32,d*0.32,d*0.68,C.white,3); return f; }
// A tag box for build, buy, borrow, rent.
const TAGC={BUILD:C.good,BUY:C.blue,BORROW:C.primary,RENT:C.accent};
function tag(p,x,y,w,h,t){ return bx(p,x,y,w,h,t,{fill:TAGC[t]||C.surface,color:t==="RENT"?C.ink:C.white,fam:"Inter",st:"Bold",size:18,name:"TAG"}); }
// Horizontal bar row: label, bar scaled to max, value text after the bar.
function hbar(p,x,y,lw,bw,v,max,label,txt,color){ sTL(p,x,y,18,label,{family:"Inter",style:"Bold",maxW:lw-6}); const w=Math.max(3,Math.round(bw*v/max));
  addRect(p,x+lw,y+3,w,18,color||C.primary,C.ink,1); sTL(p,x+lw+w+6,y,18,txt,{family:"Inter",style:"Bold",color:color===C.alert?C.alert:C.ink}); return w; }
// ===== END ECON-ARENA DECK EXTRAS =====
