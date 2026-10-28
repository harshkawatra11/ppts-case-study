// ===== NEXORA SWEEPS =====
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=["2:2", "2:4", "2:5", "2:6", "2:7", "2:8", "2:9", "2:10", "2:11", "2:12"];
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutionise","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today's","ever-evolving","imagine if"];
const MUST=["1.36 crore","1.36 Cr","72.2% → 86.1%","38,241","81.5 lakh","2.17 crore","17,412","₹93.6 Cr","₹13.4 Cr","₹9.6 Cr","₹12 L","71%","5.6 mo","10.65x","₹10.65 Cr","₹390.26 Cr","₹168 Cr","₹1.97 Cr","₹0.96 Cr","6.1%","12.5%","0.25%","79.9%","66 to 80%","43.4%","1.2 → 21.0 days","95.99 Cr","₹37,227 Cr","29,000+","40 INTERVIEWS","SIX WEEKS","6 weeks","₹558 CR","Harsh Kawatra","Delhi Technological University","harshkawatra11@gmail.com","SATYAWATI","NEXORA","SDG 3.8","TEAM IDEAFORGE"];
const ABSENT=["₹960","960 Cr","480 Cr","Rs 4.0","Ranvir","Gursimran","Gemini","Vertex","BigQuery","Google","Cloud Run","Sarvam","p95","8,776","3+ days","20x","PRAMAAN","Maudrik","Dayita","TODO","TBD","Lorem","Insert","xyz"];
let radiusFixed=0; const fontLow=[]; const copy=[]; const density=[]; let all="";
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=c.startsWith("Source:")||t.name==="SOURCE"; let p=t.parent;
      while(p && !ok){ if(p.name && p.name.startsWith("LOGO:")) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[\u2014\u2013]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density};
