// ===== SWASTHYAGRID SWEEPS =====
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=["2:2", "2:4", "2:5", "2:6", "2:7", "2:8", "2:9", "2:10", "2:11", "2:12", "2:13", "2:14"];
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutionise","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness"];
const MUST=["1.36 crore","1.36 Cr","72.2% → 86.1%","86.1%","38,241","81.5 lakh","2.17 crore","58,000","29,000+","1.2 → 21.0 days","642","65 ms","836 ms","37 / 40","43.4%","79.9%","66 to 80%","6 weeks","12 → 36","40 INTERVIEWS","58 LAKH","4.2 DAYS","40 to 98","8 LIVE, 1 WIRED, 14 IN THE PILOT","Gemini Live","Vertex AI","BigQuery","Earth Engine","Dialogflow CX","Cloud Translation API","Firebase","Cloud Run","data.gov.in","WHO GHO","ISRO Bhuvan","IMD","Google AI Studio","Gemini multimodal","Vertex AI Vision","Maps Places API","Speech-to-Text","Harsh Kawatra","Gursimran Kaur","Guru Gobind Singh Indraprastha University","Delhi Technological University"];
const ABSENT=["PRAMAAN","NEET","Maudrik","Dayita","Anuj","TODO","TBD","Lorem","xyz","96%","−38%","Gemini 2.5","haversine","Insert"];
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
