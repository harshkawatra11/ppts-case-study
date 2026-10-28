await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE|ZONE):/;
const KEEP=[[0,0,165,122,"Asian Paints logo"],[1745,0,1920,118,"Alchemy mark"],[1605,995,1920,1080,"Unstop mark"],[0,1060,1920,1080,"purple foot bar"]];
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const tpl=s.children.filter(c=>String(c.name||"").startsWith("TPL:")); if(tpl.length!==1) issues.push({s:s.name,t:"templateLayer",count:tpl.length});
  else if(s.children.indexOf(tpl[0])!==0) issues.push({s:s.name,t:"templateNotAtBack"});
  const ch=s.children.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.n,b:b.n}); }
  for(const c of s.children){ const n=String(c.name||""); if(n.startsWith("TPL:")) continue;
    if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n,x:Math.round(c.x),y:Math.round(c.y)});
    for(const k of KEEP) if(c.x<k[2]&&c.x+c.width>k[0]&&c.y<k[3]&&c.y+c.height>k[1]) issues.push({s:s.name,t:"keepOut",zone:k[4],n:n.slice(0,30)});
    if(KEY.test(n) && c.y+c.height>1024) issues.push({s:s.name,t:"belowContent",n}); }
  const hl=s.children.find(c=>c.name==="HEADLINE"); if(hl&&hl.height>111) issues.push({s:s.name,t:"headline3lines"});
  const src=s.children.find(c=>c.name==="SOURCE"); if(src&&src.height>22) issues.push({s:s.name,t:"source2lines"});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({s:s.name,t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({s:s.name,t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,80)};
