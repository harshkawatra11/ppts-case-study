// ===== SETU V1 =====
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
for (const id of ids) { const s = await figma.getNodeByIdAsync(id);
  for(const c of s.children){ if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n:c.name});
    if(KEY.test(c.name) && c.y+c.height>1040) issues.push({s:s.name,t:"belowContent",n:c.name,bottom:Math.round(c.y+c.height)}); }
  const ch=s.children.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.n,b:b.n}); }
  const hl=s.findOne(n=>n.name==="HEADLINE"); if(hl&&hl.height>88) issues.push({s:s.name,t:"finding3lines",h:Math.round(hl.height)});
  const so=s.findOne(n=>n.name==="SOWHAT TEXT"); if(so&&so.height>62) issues.push({s:s.name,t:"sowhat3lines",h:Math.round(so.height)});
  const sr=s.children.find(c=>c.name==="SOURCE"); if(sr&&sr.height>36) issues.push({s:s.name,t:"source3lines",h:Math.round(sr.height)});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox; if(!tb||!pb) continue;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({s:s.name,t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({s:s.name,t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,60)};
