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
