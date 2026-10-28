{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,3,"4 / 6","TARGET MARKET AND BUSINESS MODEL",600,V.h5,V.src[4]);
rail(s,64,310,240,"SIZE",C.primaryDeep); rail(s,64,562,232,"BUYER",C.primary); rail(s,64,806,226,"MONEY",C.alert);
// band 1: bottom-up sizing, licence build, top-down check
const p1=pnl(s,116,310,620,240,"BOTTOM-UP: DISTRICTS × ₹12 L LICENCE");
[["TAM 780",780,"₹93.6 Cr",C.primaryDeep],["SAM 112",112,"₹13.44 Cr",C.primary],["SOM 80",80,"₹9.6 Cr",C.accent],["Rajasthan 41",41,"₹4.92 Cr",C.alert]].forEach((r,i)=>{ const y=50+40*i, w=Math.max(4,110*r[1]/780);
  sTL(p1,14,y+2,18,r[0],{family:"Inter",style:"Bold",maxW:120}); addRect(p1,140,y,w,26,r[3],C.ink,1.5); sTL(p1,140+w+6,y+2,18,r[2],{family:"Inter",style:"Bold"}); });
tbl(p1,346,46,[110,150],["Segment","Basis"],[["TAM","LGD, about 780"],["SAM","NITI list, 112"],["SOM","base path, Y3"],["Entry","Rajasthan, 41"]],{hh:26,rh:28,name:"basis"});
note(p1,14,206,592,"","SOM: 10.3% of TAM. Rajasthan: 5 of 41 aspirational");
const p2=pnl(s,748,310,520,240,"THE ₹12 L LICENCE, BUILT UP, ₹ L");
wf(p2,14,46,320,190,[["Base",4],["PHCs",7],["Support",1],["Licence",12]],{min:0,max:13,dp:0,lh:40,bw:46});
bl18(p2,344,52,162,[["₹4 L ","base platform"],["₹7 L ","= 50 × ₹14,000"],["49.0 ","facilities per district"]],{gap:14});
const p3=pnl(s,1280,310,576,240,"TOP-DOWN CHECK: 0.25% OF NHM SHARE");
sTL(p3,14,46,18,"Union NHM, ₹ '000 Cr",{family:"Inter",style:"Bold",color:C.primaryDeep});
lcS(p3,14,72,330,160,[{values:[28.9,29.1,36.0,37.2],color:C.primary,label:"₹37,227 Cr"}],["FY23","FY24","FY25","FY26"],{yMin:25,yMax:40,yTicks:[30,35,40],padL:44,padR:110});
TL(p3,362,52,26,"₹47.73 Cr",{family:"Poppins",style:"ExtraBold",color:C.primaryDeep,maxW:200});
sT(p3,362,92,200,18,"central NHM share per district",{family:"Inter",style:"Bold"});
TL(p3,362,138,40,"0.25%",{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:200});
sT(p3,362,200,200,18,"of it pays the licence",{family:"Inter",style:"Bold"});
}
// ===== PART 2 =====
{ const s = await figma.getNodeByIdAsync("S5");
// band 2: buying centre, STP, why now
const p4=pnl(s,116,562,560,232,"WHO DECIDES: THE BUYING CENTRE");
tbl(p4,14,46,[120,200,212],["Role","Who","What they need"],[["Signs","State NHM director","an NHM budget line"],["Champions","District Collector","health weighs 30%"],["Uses daily","DHO","one approval per flag"],["Reports","Pharmacist, MO","one confirmation"],["Benefits","Patients","drug on the shelf"]],
  {hh:26,rh:30,name:"buying",strip:[C.primaryDeep,C.primary,C.accent,HG[3],HG[2]]});
const p5=pnl(s,688,562,560,232,"STP: SEGMENT, TARGET, POSITION");
tbl(p5,14,46,[140,392],["Step","Our choice"],[["Segment","about 780 districts, split by a scored health goal and a digital stock export"],["Target","112 aspirational districts first; Rajasthan's 41 as the beachhead"],
  ["Position","not a new system to learn: a layer that moves what a district owns"]],{hh:26,rh:42,name:"stp"});
note(p5,14,200,532,"Rajasthan: ","the design models 5 of its districts");
const p6=pnl(s,1260,562,596,232,"WHY NOW: FOUR RAILS ALREADY EXIST");
[["95.99 Cr","ABHA IDs created by 31 Jul 2026"],["31","States and UTs on the e-Aushadhi dashboard"],["1 lakh+","facilities with an ABDM registry ID"],["₹37,227 Cr","NHM budget 2025-26, up every year"]].forEach((r,i)=>{
  tile(p6,14+284*(i%2),48+90*Math.floor(i/2),276,84,r[0],r[1],{fill:i%3===0?C.tint:C.white}); });
// band 3: revenue path, unit economics, price band
const p7=pnl(s,116,806,620,226,"REVENUE PATH, ₹ CR, BASE CASE");
let lx=lgS(p7,14,46,C.primary,"Recurring"); lgS(p7,lx,46,C.accent,"Onboarding");
cols(p7,14,70,300,150,["Year 1","Year 2","Year 3"],[{color:C.primary,values:[1.44,5.40,9.60]},{color:C.accent,values:[0.36,0.99,1.05]}],{max:11.5,bw:60,totals:["1.80","6.39","10.65"]});
tbl(p7,326,46,[70,100,110],["Case","Districts","ARR Y3"],[["Bear","50","₹6.0 Cr"],["Base","80","₹9.6 Cr"],["Bull","105","₹12.6 Cr"]],{hh:26,rh:26,name:"cases",fills:[null,C.tint,null],align:["LEFT","RIGHT","RIGHT"]});
sT(p7,326,158,280,18,"Year 3: 90.1% of billings recur; ₹3 L onboarding per new district",{family:"Inter",style:"Semi Bold"});
const p8=pnl(s,748,806,560,226,"UNIT ECONOMICS, ONE DISTRICT, BASE");
[["71%","gross margin"],["₹4 L","cost to win"],["5.6 mo","payback"],["10.65x","LTV to CAC"]].forEach((r,i)=>tile(p8,14+132*i,48,126,96,r[0],r[1],{fill:i===3?C.accentTint:C.white}));
callout(p8,14,154,532,64,"LTV: ","₹12 L × 71% × 5 years = ₹42.6 L, against ₹4 L to win the district");
const p9=pnl(s,1320,806,536,226,"PRICE AGAINST INDIAN HEALTH SOFTWARE");
addRect(p9,14,112,508,28,C.tint,C.ink,1.5); addRect(p9,14,112,4,28,C.primaryDeep); addRect(p9,518,112,4,28,C.primaryDeep);
const mx=14+508*(12-3)/(25-3); diamond(p9,mx,126,16,C.accent);
TL(p9,0,62,22,"₹12 L a district",{color:C.primaryDeep,centerAt:mx});
sTL(p9,14,148,18,"₹3 L, entry HMIS",{family:"Inter",style:"Bold"}); sTL(p9,0,148,18,"₹25 L, enterprise EHR",{family:"Inter",style:"Bold",rightAt:522});
note(p9,14,184,508,"","A vendor-price scan, not a signed price");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
