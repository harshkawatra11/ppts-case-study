{ const s = await figma.getNodeByIdAsync("S3");
skel(s,3,"2 STRATEGIC RECOMMENDATION",470,V.f3,"Source: Verdict 2.0 case, sections 2 to 4 | research sections 2, 11, 13, 16, 17 | Gousto FY2025 results (Grocery Gazette, May 2026) | model "+V.hash+", tables T8, T9, T12");
function three(card,items,bg,fg,tc){ items.forEach((b,i)=>{ const y=62+i*88; addBadge(card,20,y,40,i+1,bg,fg); T(card,74,y,card.width-94,22,b,{color:tc||C.ink}); }); }
const dn=layered(s,64,318,640,332,C.alertTint,"CARD: do not");
TL(dn,20,12,24,"DO NOT FUND THESE FIRST",{color:C.alert,maxW:600}); addRect(dn,20,50,600,2,C.ink);
three(dn,["A as written: everyone can skip from day one, while retention builds cohort by cohort. Year 1 ends ₹"+V.aw1+" Cr worse than no decision.",
 "B: ₹8 Cr across 800 stores is "+V.b_store+" a store a month, at 22% margin, beside a ₹3,500 private-label kit.",
 "C first: ₹5 Cr is a third of the cash, spent to sell into a base that loses 45% of sign-ups in three months."],C.alert,C.white);
const dy=layered(s,720,318,640,332,C.tint,"CARD: do");
TL(dy,20,12,24,"DO: FUND A, REBUILT WITH A SKIP FLOOR",{color:C.primaryDeep,maxW:600}); addRect(dy,20,50,600,2,C.ink);
three(dy,["Free skipping, with a floor: a return date on every pause and two boxes in any three months. Break-even skip rate: "+V.be_skip+".",
 "A ₹3,600 two-meal plan answers the ₹3,500 private label without a discount on the ₹5,200 box.",
 "Referral paid on a friend's third box, win-back of lapsed accounts and a better web page cut CAC to "+V.cac24+"."],C.primary,C.white);
const hp=panel(s,1376,318,480,332,"SKIPPING DECIDES IF A PAYS");
const hf=v=>v>-5.5?HG[4]:(v>-7?HG[3]:(v>-8.5?HG[2]:C.alertTint));
grid(hp,16,58,["55%","60%","65%","70%"],["0%","5%","10%","15%"],V.grid_raw.map((r,i)=>r.map((v,j)=>({t:V.grid[i][j],f:(i===2&&j===1)?C.accent:hf(v),tc:(v>-5.5&&!(i===2&&j===1))?C.white:C.ink}))),{labelW:120,cellW:82,rowH:40,headH:40,corner:"M3 kept",name:"TABLE: skip grid"});
fine(hp,16,266,448,"24-month EBITDA, ₹ Cr, by month 3 retention (rows) and share of boxes skipped (columns). Base case in yellow.");
const fp=panel(s,64,666,760,364,"PROPOSAL A: FIVE FEATURES, REBUILT");
wrapTable(fp,16,56,[150,200,378],["Feature","As written","Rebuilt"],[
 ["Skip or pause","No penalty, no limit","Free, with a return date; 2 boxes in any 3 months"],
 ["2 or 4 meals","Two more sizes","₹3,600 entry plan and a ₹6,600 family plan"],
 ["Swap recipes","Any recipe","Swap within one ingredient family"],
 ["Larger menu","More recipes","40 recipes from the same 120 ingredients"],
 ["Refer friends","Rewards on sign-up","₹1,000 each side, paid on the friend's 3rd box"]],{rowH:54,headerH:36,name:"proposal a features"});
const lp=panel(s,840,666,500,364,"LTV TO CAC: 1.55x TO "+V.lc24);
vBars(lp,16,56,468,250,V.ladder.map((l,i)=>({label:["Today","Retain","Margin","CAC","Target"][i],value:l[1],text:l[1].toFixed(2)+"x",color:[C.alert,C.primary,C.primary,C.primaryDeep,C.surface][i]})),{max:3.4,barW:64});
fine(lp,16,312,468,"Cumulative: each bar adds one lever. Retention is net of a 5% skip rate. 3.0x is the case benchmark.");
const cc=layered(s,1356,666,493,357,C.primaryDeep,"CARD: conclusively");
TL(cc,20,14,28,"CONCLUSIVELY: A, THEN C",{color:C.accent,maxW:453});
[["Months 1 to 12: ","Proposal A, rebuilt, plus operational improvements."],["Month 12 gate: ","cash of ₹7 Cr and LTV to CAC of 2.2x."],
 ["Months 13 to 24: ","ready-to-eat in two cities, ₹4 Cr of C's ₹5 Cr."],["Precedent: ","Gousto, three profitable years on a new recipe mix, not discounts."]]
 .forEach((r,i)=>rt(cc,20,66+i*62,453,22,r[0],r[1],{color:C.white,leadColor:C.accent}));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
