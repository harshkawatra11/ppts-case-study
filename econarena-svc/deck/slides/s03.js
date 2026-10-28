{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 3","TASK 2: PRODUCT AND MOAT",400,"Rent the models and own the evidence: Setu builds the rule engine, the labelled call corpus and each lender's audit file, which take 12 to 18 months to copy, and buys the rest",
  "Source: team reading of public material on 14 players, October 2026 (research section 15) | Sarvam voice-agent price list | AWS Bedrock India inference, Sep 2026 | team model "+V.hash+" (T6, T18, T20, T21)");
const a=layered(s,64,316,1792,52,C.primaryDeep,"CARD: conclusively");
TL(a,16,8,22,"CONCLUSIVELY",{color:C.accent});
T(a,236,11,1540,22,"A base model scores "+V.opt_fm+" of 5 and runs dry in "+V.mf_out+"; collections AI scores "+V.opt_top+" and keeps "+V.cash24+" at month 24.",{family:"Inter",style:"Semi Bold",color:C.white});
rail(s,64,384,226,"WHAT WE BUILD",C.primaryDeep); rail(s,64,620,412,"RIVALS AND MOAT",C.primary);
const p1=pnl(s,116,384,672,226,"FIVE ROUTES, ONE TEST, SCORED 1 TO 5");
const RL=["Train a base model","General Indic API","Voice agents for all","AI services","Collections AI, ours"];
hgrid(p1,14,46,RL,["Cash","Sales","Moat","Aid","Light","Trust","Score"],V.opt.map(r=>r[1].map(v=>sc5(v)).concat([sc5(r[2])])),{lw:196,cw:64,rh:24,hh:26,corner:"Route",name:"routes"});
sT(p1,14,196,644,18,"Cash: fits ₹50 Cr. Sales: by month 24. Aid: state support.",{family:"Inter",style:"Semi Bold",color:C.primaryDeep});
const p2=pnl(s,800,384,520,226,"WHAT SETU BUILDS, BUYS AND BORROWS");
[["BUILD","Rule engine: RBI, DPDP, IT Rules"],["BUILD","Evidence file for each lender"],["BUILD","Labelled Marathi and Hindi calls"],["BUILD","Links to diallers and loan systems"],
 ["BORROW","Open speech and language models"],["BUY","Claude on Bedrock India, hard cases"],["BUY","Telephony and speech synthesis"],["RENT","L40S and H100 GPUs, IndiaAI portal"]].forEach((r,i)=>{ const y=46+22*i;
  tag(p2,14,y,104,22,r[0]); sTL(p2,128,y,18,r[1],{family:"Inter",style:"Bold",maxW:378}); });
const m=layered(s,1332,384,524,226,C.accentTint,"CARD: MONEYSHOT");
TL(m,16,8,22,"SAME ₹50 CR, TWO ROUTES",{color:C.primaryDeep});
TL(m,16,38,44,V.cash24,{family:"Poppins",style:"ExtraBold",color:C.good,maxW:236,min:30});
sT(m,16,104,236,18,"left at month 24, "+V.runway+" of runway",{family:"Inter",style:"Bold"});
TL(m,16,152,30,"Out in "+V.mf_out,{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:236,min:22});
sT(m,16,198,236,18,"on a model-first plan",{family:"Inter",style:"Bold"});
lcS(m,256,48,256,172,[{values:V.path_base,color:C.good},{values:V.path_mf_clip,color:C.alert}],V.path_base.map((_,i)=>i%6===0&&i>0?"M"+i:""),{yMin:0,yMax:50,yTicks:[0,25,50],padL:40,padR:8});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const p4=pnl(s,116,620,1000,412,"14 PLAYERS, 7 CAPABILITIES (TEAM READING OF PUBLIC MATERIAL)");
hgrid(p4,14,46,V.rivals.slice(0,14).map(r=>r[0]),["Indic speech","Lender focus","Call review","Rule evidence","India hosting","Lean price","Mumbai, Pune"],V.rivals.slice(0,14).map(r=>r[1].map(ynCell)),
  {lw:236,cw:104,rh:22,hh:44,corner:"Player",name:"rivals"});
const p5=pnl(s,1128,620,728,206,"THREE MOATS, MONTHS TO BUILD");
const ML=["Call corpus: "+V.moats[0][2]+" mo","Evidence file: "+V.moats[1][2]+" mo","Agency channel: "+V.moats[2][2]+" mo"];
gnt(p5,14,46,262,70,28,["M4","M8","M12","M16","M20","M24"],V.moats.map((r,i)=>({label:ML[i],s:Math.floor(r[1]/4),e:Math.min(5,Math.floor((r[1]+r[2]-1)/4)),color:[C.good,C.primary,C.accent][i]})),{});
sT(p5,14,160,700,18,"A rival needs our lenders' consent and a year of their calls.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p6=pnl(s,1128,836,728,196,"WEAK: A BIGGER RIVAL COPIES THESE IN 12 MONTHS");
tbl(p6,14,46,[230,110,360],["Advantage","Copied in","Why"],V.weak.map(r=>[r[0],r[1]+" months",r[2]]),{hh:26,rh:24,name:"weak",align:["LEFT","CENTER","LEFT"],rc:[C.alert,C.alert,C.alert,C.alert,C.alert]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
