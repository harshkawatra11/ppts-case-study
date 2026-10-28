// ===== HARVESTBOX V3 EXTRAS =====
const RIBC=["DIAGNOSIS","OPTIONS","RECOMMENDATION","FINANCIALS","RISK","90 DAYS AND KPIs"];
const RIBX=["APPENDIX 1: MARKET AND PRECEDENTS","APPENDIX 2: MODEL, CHECKS AND SHORT FORMS"];
function wipe(s){ s.children.slice().forEach(c=>c.remove()); s.fills=[{type:"SOLID",color:C.white}]; }
function measureW(parent,family,style,size,chars){ const t=figma.createText(); parent.appendChild(t);
  t.fontName={family,style}; t.fontSize=size; t.characters=chars; const w=t.width; t.remove(); return w; }
function skeleton3(s,active,counter,chip,chipW,title,source,labels){ wipe(s); labels=labels||RIBC;
  const n=labels.length, tw=labels.map(l=>measureW(s,"Poppins","Bold",24,l)), sum=tw.reduce((a,b)=>a+b,0), room=1720-26-64;
  let pad=64; while(sum+pad*n+26*(n-1)>room && pad>36) pad-=4;
  if(sum+pad*n+26*(n-1)>room) warnings.push("ribbon too wide");
  const endX=buildRibbon(s,active,labels,tw.map(w=>Math.ceil(w+pad)),64,40,60);
  if(endX<1710) addWireH(s,endX-10,1720,70,C.ink,2.5);
  addChip(s,1720,40,136,60,counter,C.primaryDeep,C.white,24);
  sectionChip(s,chip,chipW,64,118);
  const t=addText(s,"Poppins","Bold",44,C.ink,title,64,180,1792,132,"LEFT",undefined,true); t.name="HEADLINE";
  if(t.height>136) warnings.push("headline 3 lines: "+counter);
  const src=addText(s,"Inter","Semi Bold",14,C.primary,source,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+counter);
  return t; }
function fine(p,x,y,w,text){ const t=addText(p,"Inter","Semi Bold",22,C.ink,text,x,y,w,28,"LEFT",undefined,true); t.name="FINEPRINT"; return t; }
function kv(p,x,y,num,label,o){ o=o||{}; TL(p,x,y,o.size||36,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:o.numW||180,min:26});
  return T(p,x+(o.numW||180)+12,y+(o.dy||8),o.w||260,22,label,{family:"Inter",style:"Bold",color:o.textColor||C.ink}); }
// Funnel: stages [{value, label, color, textColor}] drawn as stacked trapezoids, labels to the right
function funnel(p,x,y,w,h,stages,o){ o=o||{}; const n=stages.length, gap=o.gap||5, fw=o.fw||Math.round(w*0.48), minF=o.minF||0.4;
  const sh=(h-gap*(n-1))/n, cx=x+fw/2;
  stages.forEach((s,i)=>{ const yt=y+i*(sh+gap), wt=fw*(1-(1-minF)*i/n), wb=fw*(1-(1-minF)*(i+1)/n);
    addPoly(p,[[cx-wt/2,yt],[cx+wt/2,yt],[cx+wb/2,yt+sh],[cx-wb/2,yt+sh]],s.color||C.primary,C.ink,2);
    const v=TL(p,0,0,22,s.value,{family:"Poppins",style:"Bold",color:s.textColor||C.white,maxW:wb-12}); v.x=cx-v.width/2; v.y=yt+(sh-v.height)/2;
    const t=T(p,x+fw+16,yt,w-fw-16,22,s.label,{family:"Inter",style:"Bold"}); t.y=yt+Math.max(0,(sh-t.height)/2); }); }
// 2x2 matrix: o {xLabel, yLabel, q:[tl,tr,bl,br], tint:[quadrant indices], pts:[{x,y,r,label,color,left}]} with x,y in 0..1
function matrix2x2(p,x,y,w,h,o){ const L=x, R=x+w, Tp=y+32, B=y+h-34, mx=(L+R)/2, my=(Tp+B)/2;
  TL(p,L,y,22,o.yLabel,{family:"Inter",style:"Bold",maxW:w});
  (o.tint||[]).forEach(q=>addRect(p,q%2?mx:L,q<2?Tp:my,(R-L)/2,(B-Tp)/2,o.tintColor||C.tint));
  addRect(p,L,Tp,R-L,B-Tp,null,C.ink,2); addWireH(p,L,R,my,C.ink,1.5); addWireV(p,mx,Tp,B,C.ink,1.5);
  (o.q||[]).forEach((lb,q)=>{ if(lb) TL(p,(q%2?mx:L)+8,(q<2?Tp:my)+6,22,lb,{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:(R-L)/2-16}); });
  T(p,L,B+4,w,22,o.xLabel,{family:"Inter",style:"Bold",align:"CENTER"});
  const X=v=>L+(R-L)*v, Y=v=>B-(B-Tp)*v;
  (o.pts||[]).forEach(pt=>{ const r=pt.r||14; addEllipse(p,X(pt.x)-r,Y(pt.y)-r,2*r,2*r,pt.color||C.primary,C.ink,2);
    const t=TL(p,0,0,22,pt.label,{family:"Inter",style:"Bold",color:pt.labelColor||C.ink});
    t.x=pt.left?X(pt.x)-r-6-t.width:X(pt.x)+r+6; t.y=Y(pt.y)-t.height/2; });
  return {X,Y}; }
// Issue tree: root text, branches [{title, fill, color, leaves:[text]}], elbow connectors
function issueTree(p,x,y,w,h,root,branches,o){ o=o||{}; const rw=o.rootW||190, bw=o.branchW||220, g=34, n=branches.length, slot=h/n;
  const lx=x+rw+g+bw+g, lw=x+w-lx, rh=o.rootH||120;
  const r=addFrame(p,x,y+(h-rh)/2,rw,rh,C.primaryDeep,C.ink,2,"NODE root");
  addText(r,"Poppins","Bold",22,C.white,root,10,0,rw-20,rh,"CENTER","CENTER");
  const jx=x+rw+g/2; addWireH(p,x+rw,jx,y+h/2,C.ink,2.5); addWireV(p,jx,y+slot/2,y+h-slot/2,C.ink,2.5);
  branches.forEach((b,i)=>{ const cy=y+slot*i+slot/2, bh=o.branchH||62;
    addWireH(p,jx,x+rw+g,cy,C.ink,2.5);
    const bf=addFrame(p,x+rw+g,cy-bh/2,bw,bh,b.fill||C.tint,C.ink,2,"NODE branch "+(i+1));
    addText(bf,"Poppins","Bold",22,b.color||C.ink,b.title,8,0,bw-16,bh,"CENTER","CENTER");
    const Lv=b.leaves||[], lh=Math.min(o.leafH||44,(slot-6)/Math.max(1,Lv.length)), top=cy-lh*Lv.length/2, kx=x+rw+g+bw+g/2;
    if(Lv.length){ addWireH(p,x+rw+g+bw,kx,cy,C.ink,2); if(Lv.length>1) addWireV(p,kx,top+lh/2,top+lh*(Lv.length-0.5),C.ink,2); }
    Lv.forEach((t,j)=>{ const ly=top+j*lh; addWireH(p,kx,lx,ly+lh/2,C.ink,2);
      const lf=addFrame(p,lx,ly+3,lw,lh-6,C.white,C.ink,1.5,"NODE leaf");
      addText(lf,"Inter","Semi Bold",22,C.ink,t,8,0,lw-16,lh-6,"LEFT","CENTER"); }); }); }
// Waffle: groups [{n, color}] filled row-major into a grid of `cols` columns
function waffle(p,x,y,cols,cell,gap,groups){ let i=0; groups.forEach(g=>{ for(let k=0;k<g.n;k++,i++){ const r=Math.floor(i/cols), c=i%cols;
  addRect(p,x+c*(cell+gap),y+r*(cell+gap),cell,cell,g.color,C.ink,1); } }); }
function legendV(p,x,y,items,o){ o=o||{}; const pitch=o.pitch||34;
  items.forEach((it,i)=>{ addRect(p,x,y+i*pitch+5,20,20,it.color,C.ink,1.5); T(p,x+30,y+i*pitch,o.w||300,22,it.label,{family:"Inter",style:"Bold"}); }); }
function planCard(p,x,y,w,h,price,lines,o){ o=o||{}; const f=layered(p,x,y,w,h,o.fill||C.white,"CARD: plan "+price,o.back);
  const sz=o.size||34; TL(f,12,8,sz,price,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:w-24,min:26});
  lines.forEach((ln,i)=>TL(f,12,12+sz*1.5+i*30,22,ln,{family:"Inter",style:i===0?"Bold":"Semi Bold",maxW:w-24})); return f; }
// Month strip: cells [{m, t, k}] with k "box" | "skip" | "refused"
function skipStrip(p,x,y,w,cells,o){ o=o||{}; const n=cells.length, g=8, cw=(w-g*(n-1))/n, ch=o.h||44;
  cells.forEach((c,i)=>{ const cx=x+i*(cw+g), fill=c.k==="box"?C.primary:(c.k==="skip"?C.accent:C.alert);
    const f=addFrame(p,cx,y,cw,ch,fill,C.ink,2,"CELL "+c.m);
    addText(f,"Poppins","Bold",22,c.k==="skip"?C.ink:C.white,c.t,4,0,cw-8,ch,"CENTER","CENTER");
    TL(p,0,y+ch+4,22,c.m,{family:"Inter",style:"Bold",centerAt:cx+cw/2}); }); }
function teamTable3(p,x,y,cw){ cw=cw||[300,640,180]; const X=[0,cw[0],cw[0]+cw[1]], rh=56, hh=50, tw=cw[0]+cw[1]+cw[2];
  const t=addFrame(p,x,y,tw,hh+rh*TEAM.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  TEAM.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*TEAM.length,C.ink)); return t; }
// ===== END HARVESTBOX V3 EXTRAS =====
