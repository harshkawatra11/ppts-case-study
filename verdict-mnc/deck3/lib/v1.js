await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=__IDS__; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
for(const id of ids){ const s=await figma.getNodeByIdAsync(id); const top=s.children.filter(c=>KEY.test(c.name));
  for(let i=0;i<top.length;i++)for(let j=i+1;j<top.length;j++){ const a=top[i],b=top[j];
    const ox=Math.min(a.x+a.width,b.x+b.width)-Math.max(a.x,b.x), oy=Math.min(a.y+a.height,b.y+b.height)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.name,b:b.name}); }
  for(const c of s.children){ if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n:c.name});
    if(KEY.test(c.name)&&c.y+c.height>1038) issues.push({s:s.name,t:"belowContent",n:c.name}); }
  for(const c of top){ const cb=c.absoluteBoundingBox; for(const d of c.findAll(n=>n.type==="FRAME"||n.type==="TEXT")){ const db=d.absoluteBoundingBox; if(!db) continue;
    if(db.x+db.width>cb.x+cb.width+1||db.y+db.height>cb.y+cb.height+1||db.x<cb.x-1||db.y<cb.y-1)
      issues.push({s:s.name,t:"childOut",n:(d.name||"").slice(0,30),chars:d.type==="TEXT"?d.characters.slice(0,30):"",in:c.name}); } }
  const hl=s.children.find(c=>c.name==="HEADLINE"); if(hl&&hl.height>136) issues.push({s:s.name,t:"headline3lines"});
  const src=s.children.find(c=>c.name==="SOURCE"); if(src&&src.height>22) issues.push({s:s.name,t:"source2lines"});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({s:s.name,t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({s:s.name,t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,80)};
