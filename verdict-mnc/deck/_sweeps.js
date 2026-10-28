await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS; const MUST=MUSTLIST;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutionise","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today's","ever-evolving","imagine if"];
const ABSENT=["Dream11","FanCode","Paytm","Liminal","Setu","PRAMAAN","Maudrik","SwasthyaGrid","NEXORA","Aakriti","Perennial","Flex","reset","HelloFresh","TODO","TBD","Lorem","Insert","xyz","undefined","NaN"];
let radiusFixed=0; const fontLow=[]; const copy=[]; const density=[]; let all="";
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||c.startsWith("Source:"); let p=t.parent;
      while(p && !ok){ if(p.name && p.name.startsWith("LOGO:")) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[—–]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density, slides:ids.length};
