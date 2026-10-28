// ===== DOBAARA DECK EXTRAS (from the Arthik Khayal extras) =====
const RIBN=["SUMMARY","ECONOMICS","TRUST","CUSTOMER","OPTIONS","PLAN","LAUNCH","SIGNALS"];
const RIBAP=["A1 UNIT AND CHANNEL WORKING","A2 PLAN SCREEN AND SENSITIVITY"];
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
function teamBT(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=50, hh=46, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
// Cover strip: competition chip, organiser and partner logo slots, team chip, a wire with dots.
function coverTop(s){ addChip(s,64,48,700,56,"MARKSOC DTU CASE COMPETITION 2026",C.primaryDeep,C.white,22);
  [["MarKSoc DTU",790,150],["CrackNontech",960,200],["DTU",1180,96]].forEach(l=>logoSlot(s,l[1],40,l[2],72,l[0]));
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// Image placeholder (people or product shots): grey, dashed, named IMG.
function imgSlot(p,x,y,w,h,label){ const f=addFrame(p,x,y,w,h,C.surfaceAlt,C.primaryDeep,1.5,"IMG: "+label); try{ f.dashPattern=[6,4]; }catch(e){}
  addText(f,"Inter","Semi Bold",14,C.primaryDeep,label,4,0,w-8,h,"CENTER","CENTER",false); return f; }
// Monogram tile for the case's fictional names (Tikau, PhoneBazaar, MegaKart, the team): drawn natively, never a logo upload.
function mono(p,x,y,w,h,txt,fill,fg,sz){ sz=sz||20; const f=addFrame(p,x,y,w,h,fill||C.primaryDeep,C.ink,1.5,"MONO: "+txt);
  const t=addText(f,"Poppins","Bold",sz,fg||C.white,txt,4,0,w-8,h,"CENTER","CENTER"); if(sz<22) t.name="SEC"; return f; }
// Mind-map node: one to three brand slots ("IMG:" image slot, "MONO:" monogram, else a logo slot), a title and a wrapped sub-line.
function actorL(p,x,y,w,h,brands,title,sub){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2,"NODE "+title); addRect(f,0,0,6,h,C.accent);
  const n=Math.max(1,brands.length), gap=6, bw=(w-28-gap*(n-1))/n;
  brands.forEach((b,i)=>{ const bx0=16+i*(bw+gap);
    if(b.startsWith("IMG:")) imgSlot(f,bx0,8,bw,56,b.slice(4)); else if(b.startsWith("MONO:")) mono(f,bx0,8,bw,56,b.slice(5),C.primary,C.white,18); else logoSlot(f,bx0,8,bw,56,b); });
  TL(f,16,68,22,title,{color:C.primaryDeep,maxW:w-28}); sT(f,16,102,w-28,18,sub,{family:"Inter",style:"Semi Bold"}); return f; }
// Heat cells.
function ynCell(v){ if(v==="Yes"||v==="Pass") return {t:v,f:C.goodTint,tc:C.good}; if(v==="Part") return {t:"Part",f:C.accentTint,tc:C.ink};
  if(v==="No"||v==="Fail") return {t:v,f:C.alertTint,tc:C.alert}; return {t:String(v),f:C.white,tc:C.ink}; }
function sc5(v){ const k=Math.max(1,Math.min(5,v)); return {t:String(v),f:HG[k],tc:k>=4?C.white:C.ink}; }
function rag(p,x,y,w,h,t){ const f=t==="GREEN"?C.good:(t==="AMBER"?C.accent:C.alert);
  return bx(p,x,y,w,h,t,{fill:f,color:t==="AMBER"?C.ink:C.white,fam:"Poppins",st:"Bold",size:18}); }
// Tornado at 18 pt around a base value: the bear side in red, the bull side in blue.
function torS(p,x,y,w,items,baseV,o){ o=o||{}; const lw=o.lw||240, rh=o.rh||30, span=w-lw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const lo=Math.min(it.lo,it.hi), hi=Math.max(it.lo,it.hi);
    addRect(p,X(lo),ry+5,Math.max(2,X(baseV)-X(lo)),rh-10,C.alert,C.ink,1); addRect(p,X(baseV),ry+5,Math.max(2,X(hi)-X(baseV)),rh-10,C.primary,C.ink,1); });
  addRect(p,X(baseV)-1,y-4,2.5,rh*items.length+8,C.ink);
  (o.ticks||[]).forEach(t=>sTL(p,0,y+rh*items.length+6,18,t.toFixed(1),{family:"Inter",style:"Bold",centerAt:X(t)})); return X; }
// Bullet line with a bold lead at 18 pt; returns the next y.
function bl18(p,x,y,w,items,o){ o=o||{}; let cy=y; items.forEach(it=>{ addRect(p,x,cy+6,9,9,o.dot||C.primary,C.ink,1);
  const t=sRT(p,x+18,cy,w-18,18,it[0],it[1],{leadColor:o.lc||C.primaryDeep}); cy+=t.height+(o.gap===undefined?6:o.gap); }); return cy; }
// Small numeral + label tile.
function tile(p,x,y,w,h,num,label,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,1.5,o.name||"TILE");
  TL(f,10,o.ny===undefined?2:o.ny,o.size||26,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-20,min:18});
  sT(f,10,o.ly||40,w-20,18,label,{family:"Inter",style:"Bold",color:o.tc||C.ink}); return f; }
function tick(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: tick"); addEllipse(f,0,0,d,d,C.good,C.ink,1.5);
  addDiagonalWire(f,d*0.25,d*0.53,d*0.43,d*0.71,C.white,3); addDiagonalWire(f,d*0.43,d*0.71,d*0.76,d*0.32,C.white,3); return f; }
function cross(p,x,y,d){ const f=addFrame(p,x,y,d,d,null,null,0,"ICON: cross"); addEllipse(f,0,0,d,d,C.alert,C.ink,1.5);
  addDiagonalWire(f,d*0.3,d*0.3,d*0.7,d*0.7,C.white,3); addDiagonalWire(f,d*0.7,d*0.3,d*0.3,d*0.7,C.white,3); return f; }
// Table whose rows grow to fit wrapped cells. rows: arrays of strings; o.size (18 default), o.hh, o.pad, o.colors[j], o.fills[i], o.bold[j], o.strike[j].
function wtab(p,x,y,cw,heads,rows,o){ o=o||{}; const sz=o.size||18, hh=o.hh||28, pd=o.pad===undefined?5:o.pad, tw=cw.reduce((a,b)=>a+b,0);
  const t=addFrame(p,x,y,tw,10,C.white,C.ink,2,"TABLE: "+(o.name||"wtab")); const h=addFrame(t,0,0,tw,hh,o.hf||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,i)=>{ nmS(addText(h,"Poppins","Bold",sz,C.ink,l,cx+7,0,cw[i]-12,hh,"LEFT","CENTER"),sz); cx+=cw[i]; });
  let ry=hh;
  rows.forEach((r,i)=>{ const f=addFrame(t,0,ry,tw,10,(o.fills&&o.fills[i])||(i%2?C.surfaceAlt:C.white),null,0,"ROW"); let x2=0, mh=0;
    r.forEach((v,j)=>{ const c=sT(f,x2+7,pd,cw[j]-12,sz,String(v),{family:"Inter",style:(j===0||(o.bold&&o.bold.includes(j)))?"Bold":"Semi Bold",color:(o.colors&&o.colors[j])||C.ink});
      mh=Math.max(mh,c.height); x2+=cw[j]; });
    const rh=Math.ceil(mh+2*pd); f.resize(tw,rh); if(o.strike) o.strike.forEach(j=>{ let sx=0; for(let q=0;q<j;q++) sx+=cw[q]; addRect(f,sx+7,Math.round(rh/2),cw[j]-14,2,C.alert); });
    addRect(t,0,ry-0.75,tw,1.5,C.ink); ry+=rh; });
  t.resize(tw,ry); let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-0.75,0,1.5,ry,C.ink); }); return t; }
// Vertical bars that may be negative. items: [{label, value, color, text}]; o.min, o.max, o.bw, o.size.
function vbarsN(p,x,y,w,h,items,o){ o=o||{}; const sz=o.size||18, lh=Math.ceil(sz*1.25), n=items.length, pitch=w/n, bw=o.bw||Math.min(70,pitch*0.6);
  const top=y+lh+4, base=y+h-(o.lab||lh*2)-4, Y=v=>top+(base-top)*(o.max-v)/(o.max-o.min); addRect(p,x,Y(0)-1,w,2,C.ink);
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, y0=Y(Math.max(0,it.value)), y1=Y(Math.min(0,it.value)), bh=Math.max(3,y1-y0);
    addRect(p,cx-bw/2,y0,bw,bh,it.color||(it.value<0?C.alert:C.primary),C.ink,1.5);
    const tx=it.text||((it.value<0?"−":"")+Math.abs(it.value).toFixed(o.dp===undefined?1:o.dp));
    sTL(p,0,it.value<0?y0+bh+2:y0-lh-2,sz,tx,{family:"Inter",style:"Bold",color:it.value<0?C.alert:C.primaryDeep,centerAt:cx});
    sT(p,cx-pitch/2+2,base+4,pitch-4,sz,it.label,{family:"Inter",style:"Bold",align:"CENTER"}); }); return {Y,base,top}; }
// Horizontal bars that may be negative. items: [{label, value, color, text}]; o.lw label width, o.min, o.max, o.rh.
function hbarsN(p,x,y,w,items,o){ o=o||{}; const lw=o.lw||220, rh=o.rh||30, vw=o.vw||70, span=w-lw-vw-10, X=v=>x+lw+span*(v-o.min)/(o.max-o.min);
  items.forEach((it,i)=>{ const ry=y+i*rh; sTL(p,x,ry+Math.round((rh-23)/2),18,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    const a=X(Math.min(0,it.value)), b=X(Math.max(0,it.value)); addRect(p,a,ry+5,Math.max(2,b-a),rh-10,it.color||(it.value<0?C.alert:C.primary),C.ink,1);
    const tx=it.text||((it.value<0?"−":"")+Math.abs(it.value).toFixed(1));
    if(it.value<0) sTL(p,0,ry+Math.round((rh-23)/2),18,tx,{family:"Inter",style:"Bold",color:C.alert,rightAt:a-4}); else sTL(p,b+4,ry+Math.round((rh-23)/2),18,tx,{family:"Inter",style:"Bold",color:C.primaryDeep}); });
  addRect(p,X(0)-1,y-4,2,rh*items.length+8,C.ink); return X; }
// Capacity bar: a filled part, a dashed outline for the rest, a label on the left, a value on the right.
function capBar(p,x,y,w,h,used,cap,o){ o=o||{}; const fw=Math.max(3,w*Math.min(1,used/cap)); addRect(p,x,y,fw,h,o.color||C.primary,C.ink,1.5);
  if(used<cap) ghost(p,x+fw,y,w-fw,h,o.ghost||C.primaryDeep); return fw; }
// Grid of dots: n dots, the first k in the alert colour.
function dots(p,x,y,cols,n,k,d,gap){ for(let i=0;i<n;i++){ const r=Math.floor(i/cols), c=i%cols; addEllipse(p,x+c*(d+gap),y+r*(d+gap),d,d,i<k?C.alert:C.tint,C.ink,1); } }
// Browser mockup: returns the content frame.
function browser(p,x,y,w,h,url){ const f=addFrame(p,x,y,w,h,C.white,C.ink,2.5,"MOCKUP: browser"); const bar=addFrame(f,0,0,w,40,C.surface,C.ink,1.5,"BAR");
  [12,32,52].forEach((cx,i)=>addEllipse(bar,cx,13,14,14,[C.alert,C.accent,C.good][i],C.ink,1));
  const u=addFrame(bar,76,7,w-92,26,C.white,C.ink,1,"URL"); sTL(u,10,1,18,url,{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
  const sc=addFrame(f,0,40,w,h-40,C.white,null,0,"SCREEN"); return sc; }
// A numbered step card with a dark header strip and a wrapped body (18 pt).
function step(p,x,y,w,h,head,who,body,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,2,"STEP "+head);
  const hz=o.hs||22, hf=addFrame(f,0,0,w,34,o.hfill||C.primaryDeep,C.ink,1.5,"HEAD"); (hz<22?sTL:TL)(hf,10,Math.round((34-hz*1.5)/2),hz,head,{color:o.hc||C.white,maxW:w-20});
  let y2=40; if(who){ const a=sT(f,8,y2,w-16,18,who,{family:"Inter",style:"Bold",color:C.primaryDeep}); y2+=a.height+2; }
  sT(f,8,y2,w-16,18,body,{family:"Inter",style:"Semi Bold"}); return f; }
// Waterfall with Indian digit grouping (dp 0) or one decimal; first and last items are totals; labels at 18 pt.
function wfN(p,x,y,w,h,items,o){ o=o||{}; const sz=18, n=items.length, pitch=w/n, bw=o.bw||Math.min(80,pitch*0.6), lh=o.lh||48, dp=o.dp===undefined?1:o.dp;
  const fm=v=>dp===0?fmtN(Math.abs(v)):Math.abs(v).toFixed(dp);
  const top=y+Math.ceil(sz*1.25)+6, base=y+h-lh, Y=v=>base-(base-top)*(v-o.min)/(o.max-o.min); addRect(p,x,Y(0)-1,w,2,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b; if(tot){a=0;b=it[1];run=it[1];} else {a=run;b=run+it[1];run=b;}
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(3,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?(it[1]<0?C.alert:C.primaryDeep):(it[1]>=0?C.good:C.alert),C.ink,1.5);
    const neg=it[1]<0, txt=(neg?"−":(tot?"":"+"))+fm(it[1]), ly=(tot&&neg)?y1+bh+2:y1-Math.ceil(sz*1.25)-2;
    sTL(p,0,ly,sz,txt,{family:"Inter",style:"Bold",color:neg?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-0.75,pitch-bw,1.5,C.ink);
    sT(p,cx-pitch/2+3,base+4,pitch-6,sz,it[0],{family:"Inter",style:"Bold",align:"CENTER"}); }); return {Y,base,top}; }
// ===== END DOBAARA DECK EXTRAS =====
