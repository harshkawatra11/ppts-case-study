// ===== SETU SWEEPS =====
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate the","revolutionis","revolutioniz","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover"];
const MUST=MUSTLIST;
const ABSENT=["UrjaGrid","URJAGRID","Hisaab","Paytm","Dream11","Dunzo","Satoshi","PRAMAAN","SwasthyaGrid","Yuva Yodha","TODO","TBD","Lorem","Insert","undefined","NaN","null","[object"];
let radiusFixed=0; const fontLow=[]; const copy=[]; const density=[]; let all=""; let money=null;
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length,forms:s.children.filter(c=>/^(PANEL|CARD|TABLE):/.test(c.name)).length});
  for(const nd of nodes){ if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } if(nd.name==="MONEYSHOT") money={slide:s.name,chars:nd.characters}; }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22 && !(t.name==="SOURCE"||t.name==="BIBLIO"||t.name==="FINEPRINT")) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)});
    if(typeof t.fontSize==="number" && t.fontSize<14) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40),note:"under 14"});
    if(/[—–]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if((c.includes("?")||c.includes("!"))) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), money, density};
