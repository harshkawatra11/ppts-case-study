// ===== REDESIGN HELPERS: appended after the preamble for slides 2, 3 and 5 only =====
const RAILROT=true; // fix rule F5: set to false only if a rail label is not drawn bottom-to-top, centred inside its bar, in Figma
// A zone is an invisible frame: no fill, no stroke. It groups one exhibit so nothing but text and charts shows.
function zone(s,x,y,w,h,name){ const f=addFrame(s,x,y,w,h,null,null,0,"ZONE: "+name); try{ f.clipsContent=false; }catch(e){} return f; }
// EY rail: a 40 px filled bar on the left edge of a band with its label rotated 90 degrees, reading bottom to top.
function rail(s,x,y,h,label,color,fg){ const r=addRect(s,x,y,40,h,color||C.primaryDeep,C.ink,2); r.name="RAIL: "+label;
  const t=addText(s,"Poppins","Bold",22,fg||C.white,label,0,0); t.name="RAILTEXT";
  if(t.width>h-12) warnings.push("rail label too long: "+label);
  const tw=t.width, th=t.height;
  if(RAILROT){ t.relativeTransform=[[0,1,x+(40-th)/2],[-1,0,y+h/2+tw/2]]; return r; }
  // fallback: rotate with the rotation property, then centre the rotated box on the bar using measured boxes
  t.x=x; t.y=y; t.rotation=90; const b=t.absoluteBoundingBox, rb=r.absoluteBoundingBox;
  t.x+=(rb.x+20)-(b.x+b.width/2); t.y+=(rb.y+h/2)-(b.y+b.height/2); return r; }
// Lead line of a zone: the one-sentence finding of the exhibit under it. Wraps.
function lead(p,x,y,w,text,o){ o=o||{}; return T(p,x,y,w,o.size||24,text,{family:"Poppins",style:"Bold",color:o.color||C.primaryDeep}); }
// Dashed outline with no fill: the part of a bar that is missing.
function ghost(p,x,y,w,h,color){ const r=addRect(p,x,y,w,h,null,color||C.alert,2); try{ r.dashPattern=[6,4]; }catch(e){} return r; }
// ===== END REDESIGN HELPERS =====

// ===== REBUILD HELPERS v2 =====
// ct: table whose cells each take their own fill, text colour and weight. A cell is a string or {t,f,tc,b}.
// al: per-column "LEFT"|"CENTER"|"RIGHT". Header text pads 2 px, body text pads 8 px. Rows 30 px, header 34 px.
function ct(p,x,y,cw,heads,rows,o){ o=o||{}; const hh=o.hh||34, rh=o.rh||30, tw=cw.reduce((a,b)=>a+b,0), H=hh+rh*rows.length, al=o.al||[];
  const t=addFrame(p,x,y,tw,H,C.white,C.ink,2.5,"TABLE: "+(o.name||"ct"));
  const h=addFrame(t,0,0,tw,hh,o.hf||C.tint,null,0,"HEAD"); let cx=0;
  heads.forEach((l,j)=>{ addText(h,"Poppins","Bold",22,C.ink,l,cx+2,0,cw[j]-4,hh,al[j]||"LEFT","CENTER"); cx+=cw[j]; });
  rows.forEach((r,i)=>{ let x2=0; const ry=hh+rh*i;
    r.forEach((c,j)=>{ const q=(typeof c==="string")?{t:c}:c; const bg=q.f||(i%2===1?C.surfaceAlt:C.white);
      const cf=addFrame(t,x2,ry,cw[j],rh,bg,null,0,"CELL");
      addText(cf,"Inter",(q.b||j===0)?"Bold":"Semi Bold",22,q.tc||C.ink,q.t,8,0,cw[j]-16,rh,al[j]||"LEFT","CENTER"); x2+=cw[j]; });
    addRect(t,0,ry-1,tw,1.5,C.ink); });
  addRect(t,0,hh-1,tw,2,C.ink); let vx=0; cw.slice(0,-1).forEach(w=>{ vx+=w; addRect(t,vx-1,0,1.5,H,C.ink); }); return t; }
// rangeBars: one row per counting method; estimates get a low-to-high bar with a base tick, floors a single tick.
function rangeBars(p,x,y,items,o){ const lw=o.lw, bx=x+lw, span=o.span, mx=o.max, rh=o.rh||40, X=v=>bx+span*v/mx;
  items.forEach((it,i)=>{ const ry=y+i*rh;
    TL(p,x,ry+(rh-27)/2,22,it.label,{family:"Inter",style:"Bold",maxW:lw-8});
    addRect(p,bx,ry+rh/2-1,span,2,C.surface);
    if(it.floor){ addRect(p,X(it.base)-3,ry+6,6,rh-12,C.primaryDeep,C.ink,1.5); }
    else { addRect(p,X(it.lo),ry+8,Math.max(4,X(it.hi)-X(it.lo)),rh-16,C.tint,C.ink,2); addRect(p,X(it.base)-3,ry+4,6,rh-8,C.primary,C.ink,1.5); }
    TL(p,0,ry+(rh-33)/2,22,it.text,{family:"Poppins",style:"Bold",rightAt:o.right}); });
  return X; }
// ===== END REBUILD HELPERS v2 =====
