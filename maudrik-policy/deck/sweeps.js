// ===== PRAMAAN SWEEPS =====
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=["2:2", "2:4", "2:5", "2:6", "2:7", "2:8", "2:9", "2:10", "2:11", "2:12", "2:13"];
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutionise","cutting-edge"];
const MUST=["₹3,317 Cr","80%","₹135","22,70,000","23,646","96x","67% → 2.5%","−₹5.4 Cr","+₹14 Cr","87%","31 of 49","38.6 lakh","₹7,092 Cr","3.14","2.28","3.58","1.31","10,211","6,092","12,317","1,496","2029","₹673.5 Cr","₹1,220 Cr","55%","21 / 24","7 / 24","8 / 24","94,583","71 sources","39 permanent posts","197","₹200","52 FIRs","22.7 lakh","41 leaks","1.4 crore","7.9%","100.7 of 115.8 lakh"];
const ABSENT=["3,316","Satoshi","Dunzo","Liminal","revival","TODO","TBD","Lorem","Insert","xyz"];
let radiusFixed=0; const fontLow=[]; const copy=[]; const density=[]; let all="";
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=c.startsWith("Source:")||t.name==="BIBLIO"||t.name==="SOURCE"; let p=t.parent;
      while(p && !ok){ if(p.name && p.name.startsWith("LOGO:")) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[\u2014\u2013]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density};
