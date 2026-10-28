// ===== R2 HELPERS: appended after the preamble and _x2.js for slides 2 to 5 =====
// Text below 22 pt is secondary text (user decision, 16 Oct 2026): never below 18 pt, always named SEC.
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
function lgS(p,x,y,c,label,sz){ sz=sz||18; addRect(p,x,y+4,14,14,c,C.ink,1); const t=sTL(p,x+20,y,sz,label,{family:"Inter",style:"Bold"}); return x+20+t.width+14; }
function cols(p,x,y,w,h,cats,series,o){ o=o||{}; const sz=o.size||18, lh=Math.ceil(sz*1.25), n=cats.length, pitch=w/n, bw=o.bw||Math.min(60,pitch*0.6);
  const top=y+lh+4, base=y+h-lh-2, max=o.max; addRect(p,x,base,w,2,C.ink);
  cats.forEach((c,i)=>{ const cx=x+pitch*i+pitch/2; let acc=0;
    series.forEach(s=>{ const v=s.values[i]; if(!(v>0)) return; const hh=(base-top)*v/max; addRect(p,cx-bw/2,base-(base-top)*(acc+v)/max,bw,Math.max(1.5,hh),s.color,C.ink,1); acc+=v; });
    if(o.totals&&o.totals[i]) sTL(p,0,base-(base-top)*acc/max-lh,sz,o.totals[i],{family:"Inter",style:"Bold",centerAt:cx});
    sTL(p,0,base+2,sz,c,{family:"Inter",style:"Bold",centerAt:cx}); }); return {base,top,pitch}; }
function wf(p,x,y,w,h,items,o){ o=o||{}; const sz=o.size||18, n=items.length, pitch=w/n, bw=o.bw||Math.min(80,pitch*0.6), lh=o.lh||48;
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,Y(0),w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=0;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?C.primaryDeep:(it[1]>=0?C.good:C.alert),C.ink,1.5);
    sTL(p,0,y1-Math.ceil(sz*1.25)-2,sz,(it[1]<0?"−":(tot?"":"+"))+Math.abs(it[1]).toFixed(o.dp===undefined?1:o.dp),{family:"Inter",style:"Bold",color:it[1]<0?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sT(p,cx-pitch/2+3,base+4,pitch-6,sz,it[0],{family:"Inter",style:"Bold",align:"CENTER"}); }); return {Y}; }
function lcS(p,x,y,w,h,series,xl,o){ o=o||{}; const sz=o.size||18, L=x+(o.padL||56), R=x+w-(o.padR||120), Tp=y+8, B=y+h-Math.ceil(sz*1.3)-6;
  const X=i=>L+(R-L)*i/(xl.length-1), Y=v=>B-(B-Tp)*(v-o.yMin)/(o.yMax-o.yMin);
  (o.yTicks||[]).forEach(v=>{ addRect(p,L,Y(v),R-L,1,C.surface); sTL(p,0,Y(v)-Math.round(sz*0.62),sz,String(v),{family:"Inter",style:"Semi Bold",rightAt:L-6}); });
  addRect(p,L,B,R-L,2,C.ink); addRect(p,L,Tp,2,B-Tp,C.ink);
  xl.forEach((lb,i)=>sTL(p,0,B+4,sz,lb,{family:"Inter",style:"Bold",centerAt:X(i)}));
  series.forEach(se=>{ const pts=se.values.map((v,i)=>[X(i),Y(v)]);
    for(let i=0;i<pts.length-1;i++) addDiagonalWire(p,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],se.color,3.5);
    pts.forEach(pt=>addEllipse(p,pt[0]-5,pt[1]-5,10,10,se.color,C.ink,1.5));
    if(se.label){ const l=pts[pts.length-1]; sTL(p,l[0]+10,l[1]-Math.round(sz*0.62)+(se.dy||0),sz,se.label,{family:"Inter",style:"Bold",color:se.color}); } });
  return {X,Y,L,R,Tp,B}; }
function hgrid(p,x,y,rl,cl,cells,o){ o=o||{}; const sz=o.size||18, lw=o.lw||200, cw=o.cw||70, rh=o.rh||24, hh=o.hh||24, W=lw+cw*cl.length, H=hh+rh*rl.length;
  const g=addFrame(p,x,y,W,H,C.white,C.ink,2,"TABLE: "+(o.name||"grid")); addFrame(g,0,0,W,hh,C.tint,null,0,"HEAD");
  if(o.corner) nmS(addText(g,"Inter","Bold",sz,C.ink,o.corner,7,0,lw-12,hh,"LEFT","CENTER"),sz);
  cl.forEach((c,j)=>nmS(addText(g,"Inter","Bold",sz,C.ink,c,lw+cw*j+3,0,cw-6,hh,"CENTER","CENTER"),sz));
  rl.forEach((r,i)=>{ const ry=hh+rh*i; nmS(addText(g,"Inter","Bold",sz,C.ink,r,7,ry,lw-12,rh,"LEFT","CENTER"),sz);
    cells[i].forEach((c,j)=>{ const cf=addFrame(g,lw+cw*j,ry,cw,rh,c.f||C.white,C.ink,1,"CELL"); nmS(addText(cf,"Inter","Bold",sz,c.tc||C.ink,c.t,3,0,cw-6,rh,"CENTER","CENTER"),sz); });
    addRect(g,0,ry-0.75,W,1.5,C.ink); });
  addRect(g,lw-1,0,2,H,C.ink); return g; }
function gnt(p,x,y,lw,cw,rh,cl,rows,o){ o=o||{}; const sz=o.size||18, hy=Math.ceil(sz*1.3)+4;
  cl.forEach((c,j)=>{ sTL(p,0,y,sz,c,{family:"Inter",style:"Bold",centerAt:x+lw+cw*j+cw/2}); addRect(p,x+lw+cw*j,y+hy-2,1.5,rh*rows.length+4,C.surface); });
  const y0=y+hy;
  rows.forEach((r,i)=>{ const ry=y0+rh*i; sTL(p,x,ry+(rh-Math.ceil(sz*1.25))/2,sz,r.label,{family:"Inter",style:"Bold",maxW:lw-10});
    addRect(p,x+lw+cw*r.s+3,ry+3,cw*(r.e-r.s+1)-6,rh-6,r.color||C.primary,C.ink,1.5); }); return y0; }
function fun(p,x,y,w,tiers,o){ o=o||{}; const th=o.th||32, gap=o.gap===undefined?4:o.gap, minW=o.minW||w*0.4, n=tiers.length;
  tiers.forEach((t,i)=>{ const tw=w-(w-minW)*i/Math.max(1,n-1), tx=x+(w-tw)/2, ty=y+i*(th+gap), sz=t.size||20;
    const f=addFrame(p,tx,ty,tw,th,t.f||HG[5-Math.min(4,i)],C.ink,1.5,"TIER");
    nmS(addText(f,"Poppins","Bold",sz,t.tc||C.white,t.t,4,0,tw-8,th,"CENTER","CENTER"),sz); }); }
function bub(p,cx,cy,d,label,fill,fg){ addEllipse(p,cx-d/2,cy-d/2,d,d,fill,C.ink,1.5); const t=sTL(p,0,0,18,label,{color:fg||C.white}); t.x=cx-t.width/2; t.y=cy-t.height/2; return t; }
// ===== END R2 HELPERS =====
