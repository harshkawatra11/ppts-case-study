await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=__IDS__;
const BANNED=["delve","leverage","synergy","seamless","robust","holistic","game-changer","game changer","unlock","empower","cutting-edge","paradigm","revolutioniz","realm","tapestry","landscape","navigate","elevate","journey","testament","pivotal","crucial","furthermore","moreover","in conclusion","worth noting","here's the thing","bottom line","let's","make no mistake","imagine","what if"];
const ABSENT=["Perennial","Flex","Grw","Chg","By M3","pilot 62%","break-even skip rate","13-week read"];
const MUST=["₹4,719","1.55x","2.70x","MONTH 21","₹2.9 Cr","₹1.8 Cr","₹7 Cr","2.2x","12.6%","5.6%","63%","₹3,600","₹5,200","₹6,600","2.80","3.70"];
const out={radiusFixed:0,fontLow:[],dash:[],punct:[],banned:[],absentHit:[],mustMissing:[],nodes:{},moneyshot:0}; const all=[];
for(const id of ids){ const s=await figma.getNodeByIdAsync(id); const nodes=s.findAll(()=>true); out.nodes[s.name]=nodes.length;
  for(const n of nodes){ if(n.name==="MONEYSHOT") out.moneyshot++;
    if(n.type!=="ELLIPSE" && "cornerRadius" in n && typeof n.cornerRadius==="number" && n.cornerRadius!==0){ n.cornerRadius=0; out.radiusFixed++; }
    if(n.type!=="TEXT") continue; let a=n.parent, logo=false; while(a&&a.type!=="SLIDE"){ if((a.name||"").startsWith("LOGO:")) logo=true; a=a.parent; }
    const ch=n.characters; if(logo) continue; all.push(ch);
    if(n.name!=="SOURCE"&&typeof n.fontSize==="number"&&n.fontSize<22) out.fontLow.push([s.name,ch.slice(0,30),n.fontSize]);
    if(/[–—]/.test(ch)) out.dash.push([s.name,ch.slice(0,40)]);
    if(/[?!]/.test(ch)) out.punct.push([s.name,ch.slice(0,40)]);
    const lc=ch.toLowerCase(); BANNED.forEach(b=>{ if(lc.includes(b)) out.banned.push([s.name,b,ch.slice(0,40)]); });
    ABSENT.forEach(b=>{ if(ch.includes(b)) out.absentHit.push([s.name,b,ch.slice(0,40)]); }); } }
const joined=all.join(" | "); MUST.forEach(m=>{ if(!joined.includes(m)) out.mustMissing.push(m); });
return out;
