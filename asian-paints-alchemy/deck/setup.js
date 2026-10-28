// Prepares the master file KJQkGsLgbeLU9vNy24p78y. Slide 1 (1:42) is the Asian Paints cover and stays exactly as given.
// Slide 2 (2:40) is the template background; it becomes our cover, and seven clones of it become slides 3 to 9.
// Safe to rerun: it counts slides that already carry the template and never makes a second set.
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const s1=await figma.getNodeByIdAsync("1:42"), s2=await figma.getNodeByIdAsync("2:40");
if(!s1||!s2) return {error:"slide 1:42 or 2:40 not found; read the grid and report"};
const isImg=n=>n.type==="RECTANGLE"&&Array.isArray(n.fills)&&n.fills.some(f=>f.type==="IMAGE");
const bg1=s1.children.find(isImg), bg2=s2.children.find(isImg);
if(!bg1||!bg2) return {error:"background image rectangle missing", s1:s1.children.map(c=>c.name), s2:s2.children.map(c=>c.name)};
bg1.name="TPL: background"; bg2.name="TPL: background"; bg1.locked=true; bg2.locked=true;
const grid=figma.currentPage.children.find(c=>c.type==="SLIDE_GRID");
const flat=()=>grid.children.flatMap(r=>r.children);
const tplSlides=()=>flat().filter(s=>s.id!==s1.id && s.children.some(c=>String(c.name||"").startsWith("TPL:")));
let guard=0, method="clone"; const fresh=[];
while(tplSlides().length<8 && guard++<10){
  let made=null;
  try{ made=s2.clone(); }catch(e){ made=null; }
  if(!made || !flat().some(s=>s.id===made.id)){
    if(made){ try{ made.remove(); }catch(e){} }
    method="createSlide";
    const ns=figma.createSlide(); const b=bg2.clone(); ns.appendChild(b); b.x=0; b.y=0; b.name="TPL: background"; b.locked=true; made=ns; }
  fresh.push(made.id);
}
// A clone of slide 2 made after our cover exists would copy the cover: a fresh clone keeps only its background.
// Slides made by an earlier run are never touched. NOTE: figma.Slide.clone() inserts the new slide BEFORE the
// source slide's current grid position (not after), so after N clones the original s2 drifts to the end of the
// row. Do not assume s2 lands first; force it explicitly instead.
const allTpl=tplSlides();
allTpl.filter(s=>fresh.includes(s.id)).forEach(s=>s.children.slice().forEach(c=>{ if(!String(c.name||"").startsWith("TPL:")) c.remove(); }));
const ours=[s2, ...allTpl.filter(s=>s.id!==s2.id)].slice(0,8);
const extra=flat().filter(s=>s.id!==s1.id && !ours.some(o=>o.id===s.id));
figma.setSlideGrid([[s1,...ours,...extra]]);
const names=["01 Asian Paints cover","02 Our cover","03 The technology","04 The challenge","05 Why it is unique","06 Mechanism and proof","07 Cost and scale","08 Annexure","09 Thank you"];
[s1,...ours].forEach((s,i)=>{ s.name=names[i]; });
const fonts=await figma.listAvailableFontsAsync();
const need=[["Poppins","Bold"],["Poppins","ExtraBold"],["Inter","Semi Bold"],["Inter","Bold"]];
return {method, count:1+ours.length, ids:[s1.id,...ours.map(s=>s.id)], extra:extra.map(s=>({id:s.id,children:s.children.length})),
  tplCheck:ours.map(s=>s.children.filter(c=>String(c.name||"").startsWith("TPL:")).length),
  fontsOk:need.map(n=>fonts.some(f=>f.fontName.family===n[0]&&f.fontName.style===n[1]))};
