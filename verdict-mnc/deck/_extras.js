// ===== HARVESTBOX DECK EXTRAS =====
const RIB4=["DIAGNOSE AND EVALUATE","RECOMMEND","FINANCIAL AND RISK CASE","90-DAY PLAN AND KPIs"];
const RIBX=["APPENDIX 1: ASSUMPTIONS AND CHECKS","APPENDIX 2: SHORT FORMS AND SOURCES"];
const HG=[null,{r:0.918,g:0.965,b:0.925},{r:0.749,g:0.890,b:0.784},{r:0.525,g:0.796,b:0.596},{r:0.247,g:0.639,b:0.361},{r:0.055,g:0.302,b:0.145}];
function hcell(v){ return {t:String(v),f:HG[v],tc:v>=4?C.white:C.ink}; }
function wipe(s){ s.children.slice().forEach(c=>c.remove()); s.fills=[{type:"SOLID",color:C.white}]; }
function skel(s,n,chip,chipW,title,source){ wipe(s); return skeleton2(s,n-2,(n-1)+" / 4",chip,chipW,title,source,RIB4); }
function srcLine(s,text){ const src=addText(s,"Inter","Semi Bold",14,C.primary,text,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+s.name); return src; }
function fine(p,x,y,w,text){ const t=addText(p,"Inter","Semi Bold",16,C.ink,text,x,y,w,20,"LEFT",undefined,true); t.name="FINEPRINT"; return t; }
function rt(p,x,y,w,size,lead,rest,o){ o=o||{}; const t=T(p,x,y,w,size,lead+rest,{color:o.color});
  t.setRangeFontName(0,lead.length,{family:"Inter",style:"Bold"}); if(o.leadColor) t.setRangeFills(0,lead.length,[{type:"SOLID",color:o.leadColor}]); return t; }
function dashedV(p,x,y,h,color,th){ th=th||2.5; let cy=y; while(cy<y+h){ const hh=Math.min(12,y+h-cy); addRect(p,x-th/2,cy,th,hh,color||C.ink); cy+=20; } }
function segBar(p,x,y,w,h,segs){ const tot=segs.reduce((a,s)=>a+s.v,0); let cx=x;
  segs.forEach(sg=>{ const sw=w*sg.v/tot; addRect(p,cx,y,sw,h,sg.c,C.ink,2);
    if(sg.t){ const t=TL(p,0,0,22,sg.t,{family:"Poppins",style:"Bold",color:sg.tc||C.white}); t.x=cx+sw/2-t.width/2; t.y=y+h/2-t.height/2; } cx+=sw; }); }
function teamTableN(p,x,y,cw){ const X=[0,cw[0],cw[0]+cw[1]], rh=54, hh=50, tw=cw[0]+cw[1]+cw[2], rows=V.team.rows;
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2,"TABLE: team");
  const h=addFrame(t,0,0,tw,hh,C.tint,C.ink,2,"HEAD");
  ["Team Members","Institution","Role"].forEach((l,i)=>addText(h,"Poppins","Bold",22,C.ink,l,X[i]+16,0,cw[i]-24,hh,"LEFT","CENTER"));
  rows.forEach((m,i)=>{ const r=addFrame(t,0,hh+rh*i,tw,rh,i%2?C.surfaceAlt:C.white,C.ink,2,"ROW");
    m.forEach((v,j)=>addText(r,"Inter",j===0?"Bold":"Semi Bold",22,C.ink,v,X[j]+16,0,cw[j]-24,rh,"LEFT","CENTER")); });
  [X[1],X[2]].forEach(vx=>addRect(t,vx-1,0,2,hh+rh*rows.length,C.ink)); return t; }
// Table whose cells wrap: every cell is an auto-height text in a fixed-height row.
function wrapTable(p,x,y,cw,heads,rows,o){ o=o||{}; const hh=o.headerH||40, rh=o.rowH||64, tw=cw.reduce((a,b)=>a+b,0);
  const t=addFrame(p,x,y,tw,hh+rh*rows.length,C.white,C.ink,2.5,"TABLE: "+(o.name||"wrap"));
  const h=addFrame(t,0,0,tw,hh,o.headFill||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,i)=>{ addText(h,"Poppins","Bold",22,C.ink,l,cx+12,0,cw[i]-20,hh,"LEFT","CENTER"); cx+=cw[i]; });
  rows.forEach((r,i)=>{ const f=addFrame(t,0,hh+rh*i,tw,rh,(o.fills&&o.fills[i])||(i%2?C.surfaceAlt:C.white),null,0,"ROW"); let x2=0;
    r.forEach((v,j)=>{ const c=T(f,x2+12,0,cw[j]-20,22,v,{family:"Inter",style:j===0?"Bold":"Semi Bold",color:(o.colors&&o.colors[j])||C.ink});
      c.y=Math.max(0,(rh-c.height)/2); if(c.height>rh+1) warnings.push("wrapTable overflow: "+v.slice(0,30)); x2+=cw[j]; });
    addRect(t,0,hh+rh*i-1,tw,1.5,C.ink); });
  let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-1,0,1.5,hh+rh*rows.length,C.ink); }); return t; }
// Waterfall: items [[label, value]]; the first and last items are totals, the rest are steps.
function waterfall(p,x,y,w,h,items,o){ o=o||{}; const n=items.length, pitch=w/n, bw=o.barW||Math.min(96,pitch*0.62), lh=o.labelH||96;
  const top=y+34, base=y+h-lh, min=o.min, max=o.max; const Y=v=>base-(base-top)*(v-min)/(max-min);
  addRect(p,x,Y(0),w,2.5,C.ink); let run=0;
  items.forEach((it,i)=>{ const cx=x+pitch*i+pitch/2, tot=(i===0||i===n-1); let a,b;
    if(tot){ a=0; b=it[1]; run=it[1]; } else { a=run; b=run+it[1]; run=b; }
    const y1=Math.min(Y(a),Y(b)), bh=Math.max(4,Math.abs(Y(a)-Y(b)));
    addRect(p,cx-bw/2,y1,bw,bh,tot?C.primaryDeep:(it[1]>=0?C.good:C.alert),C.ink,2);
    const txt=(it[1]<0?"−":(tot?"":"+"))+Math.abs(it[1]).toFixed(o.dp===undefined?1:o.dp);
    const below=tot&&it[1]<0; TL(p,0,below?y1+bh+2:y1-32,22,txt,{family:"Poppins",style:"Bold",color:it[1]<0?C.alert:C.primaryDeep,centerAt:cx});
    if(i<n-1) addRect(p,cx+bw/2,Y(run)-1,pitch-bw,1.5,C.ink);
    const lb=T(p,cx-pitch/2+4,base+(o.labelDy||40),pitch-8,22,o.labels?o.labels[i]:it[0],{family:"Inter",style:"Bold",align:"CENTER"});
    if(lb.height>lh-(o.labelDy||40)+2) warnings.push("waterfall label tall: "+lb.characters); }); return {Y}; }
function node2(p,x,y,w,h,title,sub,o){ o=o||{}; const f=addFrame(p,x,y,w,h,o.fill||C.white,C.ink,2,"NODE "+title);
  TL(f,12,6,22,title,{family:"Poppins",style:"Bold",color:o.titleColor||C.primaryDeep,maxW:w-20});
  TL(f,12,36,22,sub,{family:"Inter",style:"Semi Bold",color:o.subColor||C.ink,maxW:w-20}); return f; }
function kv(p,x,y,num,label,o){ o=o||{}; TL(p,x,y,o.size||40,num,{family:"Poppins",style:"ExtraBold",color:o.color||C.primary,maxW:o.numW||220,min:26});
  return T(p,x+(o.numW||220)+12,y+(o.dy||6),o.w||300,22,label,{family:"Inter",style:"Bold",color:o.textColor||C.ink}); }
// ===== END HARVESTBOX DECK EXTRAS =====
