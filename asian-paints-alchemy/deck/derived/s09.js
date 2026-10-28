{ const s = await figma.getNodeByIdAsync("S9"); wipeTpl(s);
const RESEARCH_URL="https://harshkawatra11.github.io/ap-alchemy/research.pdf";
const RESEARCH_DISPLAY="harshkawatra11.github.io/ap-alchemy/research.pdf";
const linkRow=(p,centerAt,y,label,display,url,o)=>{ o=o||{}; const labelW=o.labelW||280, h=o.h||44, gap=o.gap||10;
  const linkText=display+"  →";
  const measured=measureW(p,"Inter","Bold",22,linkText);
  const linkW=Math.ceil(measured+32);
  const totalW=labelW+gap+linkW, x=centerAt-totalW/2;
  const lf=addFrame(p,x,y,labelW,h,C.ink,C.ink,1.5,"LINKROW: "+label.toLowerCase()+" label");
  addText(lf,"Poppins","Bold",22,C.white,label,8,0,labelW-16,h,"LEFT","CENTER");
  const rf=addFrame(p,x+labelW+gap,y,linkW,h,C.blueTint,C.blue,1.5,"LINKROW: "+label.toLowerCase()+" link");
  const t=addText(rf,"Inter","Bold",22,C.blue,linkText,16,9,linkW-32,h-18,"LEFT",undefined,true);
  try{ t.setRangeHyperlink(0,t.characters.length,{type:"URL",value:url}); }catch(e){}
  return totalW; };
addChip(s,182,30,780,54,"ASIAN PAINTS ALCHEMY  |  CASE STUDY 1: WHITENESS",C.primaryDeep,C.white,22);
addChip(s,1430,30,300,54,V.team.name,C.primaryDeep,C.white,22);
TL(s,0,140,96,"THANK YOU",{family:"Poppins",style:"ExtraBold",color:C.primary,centerAt:960});
TL(s,0,298,30,"Whiter with less TiO2: keep the rutile, hold it in air, seal the air in",{family:"Poppins",style:"Bold",color:C.primaryDeep,centerAt:960,maxW:1500,min:24});
const c=layered(s,260,360,1400,186,C.primaryDeep,"CARD: recap");
[[V.sav,"less TiO2 per m² at contrast ratio "+V.CR_min+" and brightness "+V.Y_target+", in our model"],[V.ap.base.net_cr,"a year in materials at 40% adoption, with "+V.ap.base.avoided+" of TiO2 not bought, estimate"],
 [V.checks,"model checks pass; a lab plan with pass marks is ready for Gate 0"]].forEach((r,i)=>{ const x=24+466*i;
  TL(c,x,14,44,r[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:420,min:30}); sT(c,x,88,420,18,r[1],{family:"Inter",style:"Bold",color:C.white}); if(i>0) dashedV(c,x-24,20,146,C.white,2); });
linkRow(s,960,580,"RESEARCH DOCUMENT",RESEARCH_DISPLAY,RESEARCH_URL);
TL(s,0,652,32,V.team.name,{family:"Poppins",style:"Bold",color:C.primary,centerAt:960});
teamBT(s,380,706,[300,640,220]);
guardAP(s); results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
