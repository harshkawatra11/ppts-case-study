{ const s = await figma.getNodeByIdAsync("S2"); wipeTpl(s);
const RESEARCH_URL="https://harshkawatra11.github.io/ap-alchemy/research.pdf";
// ===== top strip, between the two template logos =====
addChip(s,182,30,780,54,"ASIAN PAINTS ALCHEMY  |  CASE STUDY 1: WHITENESS",C.primaryDeep,C.white,22);
addChip(s,1430,30,300,54,V.team.name,C.primaryDeep,C.white,22);
addWireH(s,182,1730,118,C.ink,2.5); [182,569,956,1343,1730].forEach(cx=>addEllipse(s,cx-8,110,16,16,C.white,C.ink,2));
// ===== title block =====
nm(TL(s,40,130,92,"WHITER WITH",{family:"Poppins",style:"ExtraBold",color:C.ink,maxW:1050,min:58}),"TITLE");
TL(s,40,270,92,"LESS TiO2",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:1050,min:58});
TL(s,40,414,28,"Case Study 1: Future of Whiteness Development through Material Science",{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:1050,min:22});
// ===== the answer =====
const c=layered(s,40,470,1050,236,C.primaryDeep,"CARD: answer");
const headline=T(c,24,14,1002,26,"OUR ANSWER: KEEP THE RUTILE, HOLD IT IN A NETWORK OF AIR, AND SEAL THE AIR IN WITH THE SECOND COAT.",{family:"Poppins",style:"Bold",color:C.accent});
T(c,24,headline.y+headline.height+14,1002,22,"Rutile scatters "+V.host_rows[0][2]+" more light per unit volume in air than in binder. A porous first coat holds "+V.base_pvc+" TiO2 in "+V.P+" air; a "+V.X2+" seal coat keeps the air in and gives the washable surface. Our optical model matches a premium white's contrast ratio and brightness with "+V.g_prop+" of TiO2 per m² instead of "+V.g_ref+".",{family:"Inter",style:"Semi Bold",color:C.white});
// ===== team =====
TL(s,40,722,32,V.team.name,{family:"Poppins",style:"Bold",color:C.primary});
teamBT(s,40,774,[280,560,210]);
// ===== research link, Eurogrip-style chip =====
const linkRow=(p,x,y,label,url,o)=>{ o=o||{}; const h=o.h||46;
  const txt=label+"  →";
  const measured=measureW(p,"Inter","Bold",22,txt);
  const w=Math.ceil(measured+32);
  const f=addFrame(p,x,y,w,h,C.blueTint,C.blue,1.5,"LINKROW");
  const t=addText(f,"Inter","Bold",22,C.blue,txt,16,0,w-32,h,"LEFT","CENTER");
  try{ t.setRangeHyperlink(0,t.characters.length,{type:"URL",value:o.url}); }catch(e){}
  return w; };
linkRow(s,40,942,"Read the full research document",RESEARCH_URL,{url:RESEARCH_URL});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
// mind map panel, insight line, fine print, and the eight hub wires (drawn first so nodes sit on top)
const mm=panel(s,1110,140,770,846,"WHO SHAPES A WHITE WALL",{layered:true,fill:C.tint,titleColor:C.primaryDeep});
const COLX=[16,268,520], NH=200, ROWY=[166,400,634], HUB=[COLX[1]+117,ROWY[1]+NH/2];
const insight=T(mm,16,58,738,22,"Asian Paints buys about "+V.ap.base.tonnes+" of TiO2 a year, our estimate, and 57% of India's supply came from China in DGTR's probe.",{family:"Poppins",style:"Bold",color:C.primaryDeep});
const fine=sT(mm,16,132,738,18,"Logos identify organisations in the analysis; no partnership is implied.",{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
if(insight.y+insight.height>fine.y-2) warnings.push("insight hits fine print at "+Math.round(insight.y+insight.height));
if(fine.y+fine.height>ROWY[0]-4) warnings.push("fine print hits node row at "+Math.round(fine.y+fine.height));
COLX.forEach(x=>ROWY.forEach(y=>{ if(x===COLX[1]&&y===ROWY[1]) return; addDiagonalWire(mm,HUB[0],HUB[1],x+117,y+NH/2,C.ink,2.5); }));
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
const mm=s.children.find(c=>c.name==="PANEL: WHO SHAPES A WHITE WALL"); if(!mm) throw new Error("panel missing");
const COLX=[16,268,520], NH=200, ROWY=[166,400,634];
const pre=t=>t==="logo"?"LOGO: ":t==="img"?"IMG: ":"ICON: ";
const markStrip=(p,rows)=>{ const SH=66, gap=6, vg=4, rh=rows.length===1?SH:(SH-vg*(rows.length-1))/rows.length;
  rows.forEach((row,r)=>{ const n=row.length, w=(206-gap*(n-1))/n;
    row.forEach((it,i)=>addFrame(p,i*(w+gap),r*(rh+vg),w,rh,null,null,0,pre(it.t)+it.n)); }); };
const mapNode=(x,y,title,number,desc,rows,tint)=>{ const f=addFrame(mm,x,y,234,NH,tint||C.white,C.ink,2,"NODE "+title);
  addRect(f,0,0,6,NH,C.accent);
  const strip=addFrame(f,16,8,206,66,null,null,0,"STRIP"); markStrip(strip,rows);
  const t1=TL(f,16,78,22,title,{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:206});
  const t2=TL(f,16,t1.y+t1.height,22,number,{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:206,min:22});
  const t3=sT(f,16,t2.y+t2.height+2,206,18,desc,{family:"Inter",style:"Semi Bold"});
  if(t3.y+t3.height>NH-4) warnings.push("node text low: "+title+" ends at "+Math.round(t3.y+t3.height));
  return f; };
const L=n=>({t:"logo",n}), I=n=>({t:"img",n}), K=n=>({t:"icon",n});
mapNode(COLX[0],ROWY[0],"PIGMENT","Index 2.75","rutile bends light most; binder is 1.49",[[L("Chemours"),I("TiO2")],[L("Tronox")]]);
mapNode(COLX[1],ROWY[0],"OPACIFIERS","9% less TiO2","from hollow polymer spheres, in our screen",[[L("Dow"),L("Arkema")],[L("Evonik"),L("Imerys")]]);
mapNode(COLX[2],ROWY[0],"RIVALS","Over 21%","of industry capacity is now Birla Opus",[[L("Berger"),L("JSW"),L("Indigo")],[L("Kansai"),L("AkzoNobel")]]);
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
const mm=s.children.find(c=>c.name==="PANEL: WHO SHAPES A WHITE WALL"); if(!mm) throw new Error("panel missing");
const COLX=[16,268,520], NH=200, ROWY=[166,400,634];
const pre=t=>t==="logo"?"LOGO: ":t==="img"?"IMG: ":"ICON: ";
const markStrip=(p,rows)=>{ const SH=66, gap=6, vg=4, rh=rows.length===1?SH:(SH-vg*(rows.length-1))/rows.length;
  rows.forEach((row,r)=>{ const n=row.length, w=(206-gap*(n-1))/n;
    row.forEach((it,i)=>addFrame(p,i*(w+gap),r*(rh+vg),w,rh,null,null,0,pre(it.t)+it.n)); }); };
const mapNode=(x,y,title,number,desc,rows,tint)=>{ const f=addFrame(mm,x,y,234,NH,tint||C.white,C.ink,2,"NODE "+title);
  addRect(f,0,0,6,NH,C.accent);
  const strip=addFrame(f,16,8,206,66,null,null,0,"STRIP"); markStrip(strip,rows);
  const t1=TL(f,16,78,22,title,{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:206});
  const t2=TL(f,16,t1.y+t1.height,22,number,{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:206,min:22});
  const t3=sT(f,16,t2.y+t2.height+2,206,18,desc,{family:"Inter",style:"Semi Bold"});
  if(t3.y+t3.height>NH-4) warnings.push("node text low: "+title+" ends at "+Math.round(t3.y+t3.height));
  return f; };
const L=n=>({t:"logo",n}), I=n=>({t:"img",n}), K=n=>({t:"icon",n});
mapNode(COLX[0],ROWY[1],"SCIENCE","5 to 15 µm","beetle scales, white with no pigment",[[I("Beetle"),L("Exeter")],[L("SciRep")]]);
mapNode(COLX[2],ROWY[1],"TRADE RULES","$460 to $681","a tonne duty, asked again on Chinese TiO2",[[K("ship")]],C.accentTint);
mapNode(COLX[0],ROWY[2],"PAINTERS","13.42 m²","a litre a coat; same rollers as today",[[K("roller")]]);
mapNode(COLX[1],ROWY[2],"HOMEOWNERS","78% repaint","of paint demand goes over an old wall",[[K("house")]]);
mapNode(COLX[2],ROWY[2],"STANDARDS","IS 15489:2024","the BIS spec for emulsion paint",[[L("BIS"),L("CPCB"),L("ISO")],[L("ASTM")]],C.accentTint);
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
const mm=s.children.find(c=>c.name==="PANEL: WHO SHAPES A WHITE WALL"); if(!mm) throw new Error("panel missing");
const HUB=[385,500];
addEllipse(mm,HUB[0]-100,HUB[1]-100,200,200,C.primaryDeep,C.ink,2.5);
const chip=addFrame(mm,HUB[0]-68,HUB[1]-68,136,40,C.white,C.ink,2,"CHIP: hub");
addFrame(chip,4,5,128,30,null,null,0,"LOGO: Asian Paints hub");
const h1=addText(mm,"Poppins","ExtraBold",26,C.accent,V.g_ref+" TiO2",HUB[0]-85,HUB[1]-24,170,40,"CENTER","CENTER"); h1.name="SEC";
const h2=addText(mm,"Inter","Bold",18,C.white,"a m² today",HUB[0]-85,HUB[1]+18,170,26,"CENTER","CENTER"); h2.name="SEC";
srcAP(s,"Source: Alchemy Case Study 1 | model "+V.hash+" | Burresi et al. 2014 | Vukusic et al. 2007 | DGTR 3 Aug 2026 | IS 15489:2024 | Apcolite TDS | photos and logos: Wikimedia Commons, credits in research Appendix D.12");
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
