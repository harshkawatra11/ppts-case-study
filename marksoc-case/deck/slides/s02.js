{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 8","EXECUTIVE SUMMARY",360,"Certify every phone, promise 85% battery and 12 months, and open a third lab shift on 1 February: March EBITDA moves from "+V.e0_rl+" to "+V.e_mar_rl,
  "Source: case Exhibits 1 to 6 and page 7 | team model "+V.hash+" (T12 to T16) | every number is rebuilt on slides A1 and A2");
const hero=layered(s,64,310,508,130,C.primaryDeep,"KPI: hero");
TL(hero,20,12,48,V.swing,{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:468,min:36});
sT(hero,20,90,468,18,"₹ lakh a month better in March than doing nothing",{family:"Inter",style:"Semi Bold",color:C.white});
const K2=[[V.gm_tot+" of ₹80","growth money used: B1 ₹15, B2 ₹25, shift ₹9",C.primary],[V.rr_mar+" returns","limit 6.0% in March",C.primaryDeep],[V.n_ok+" of "+V.n_plans+" plans","pass all four tests; ours ends Q1 highest",C.good]];
K2.forEach((k,i)=>{ const x=596+428*i; const f=layered(s,x,310,404,130,C.white,"KPI: "+i,k[2]);
  TL(f,16,12,32,k[0],{family:"Poppins",style:"ExtraBold",color:k[2],maxW:372,min:22});
  sT(f,16,58,372,18,k[1],{family:"Inter",style:"Bold"}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
const a=pnl(s,64,444,600,276,"MONTHLY EBITDA, ₹ LAKH");
lcS(a,14,44,572,176,[{values:[V.e0_n,V.e0_n,V.e0_n],color:C.alert,label:"Do nothing"},{values:[V.e_n.Jan,V.e_n.Feb,V.e_n.Mar],color:C.primary,label:"Our plan",dy:-12}],
  ["January","February","March"],{yMin:-60,yMax:10,yTicks:[-40,-20,0],padL:56,padR:130});
sT(a,14,226,572,18,"January carries ₹40 lakh of setup, so Q1 ends "+V.dq1_rl+" against doing nothing.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const b=pnl(s,680,444,560,276,"THE DECISION TABLE");
tbl(b,14,48,[176,108,124,124],["₹ lakh","January","February","March"],[["Options live","Setup only","B1, B2, shift","B1, B2, shift"],["Phones sold",V.sold.Jan,V.sold.Feb,V.sold.Mar],
  ["Contribution",V.cam.Jan,V.cam.Feb,V.cam.Mar],["Growth money",V.gm.Jan,V.gm.Feb,V.gm.Mar],["EBITDA",V.e.Jan,V.e.Feb,V.e.Mar],["Return rate",V.rr.Jan,V.rr.Feb,V.rr.Mar]],
  {hh:28,rh:31,name:"decision",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,C.accentTint,null]});
const c=pnl(s,1256,444,600,276,"THE BOARD'S FOUR TESTS");
hgrid(c,14,48,["1 Growth money","2 March EBITDA","3 March returns","4 Exhibit 5 claims"],["Limit","Ours","Result"],
  [[{t:"₹80 lakh"},{t:"₹"+V.gm_tot},ynCell("Pass")],[{t:"₹0 or more"},{t:"+"+V.e_mar},ynCell("Pass")],[{t:"6.0%"},{t:V.rr_mar},ynCell("Pass")],[{t:"all true"},{t:"3 made"},ynCell("Pass")]],
  {lw:200,cw:124,rh:40,hh:30,name:"tests"});
sT(c,14,232,572,18,"Test 4 needs B1: a battery claim needs Tikau's own lab reading.",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S2");
wtab(s,64,736,[250,330,560,330,322],["Sana asks","The obvious answer","What we found, and what we do","Proof","Result"],[
  ["1 What holds Tikau back","Demand: cut prices and buy ads","Trust behind a full lab: "+V.sold.Jan+" sold of "+V.sold.Jan+" sellable; 5 of 7 lost-sale reasons are trust","Ads lose ₹2.1 lakh a month","EBITDA "+V.e0_rl+" a month"],
  ["2 Who to win","The biggest segment, or value seekers","Family buyers on Good phones: no supply cap, "+V.cp_G+" a phone after the plan","A Fair phone earns "+V.cp_F+" after B2","Har phone ki kundli. Saal bhar ki zimmedari."],
  ["3 What, and when","Price push (A), or every option at once","B1 and B2 set up in January, third shift from 1 February; no A, B3 or C before April",V.n_ok+" of "+V.n_plans+" plans pass all tests","March EBITDA "+V.e_mar_rl],
  ["4 How customers hear","Discount banners and countdown timers","The Tikau Report above the price on every page; stores, referrals, labelled creators","3 claims made, 2 refused","0 breaches of Exhibit 5"],
  ["5 How we know","A monthly P&L review","Weekly orders, return rate and Good battery swaps, each with a trigger","Orders under "+V.be_week+" a week","April: trade in on new money"]],
  {name:"answers",hh:28,pad:4,strike:[1],colors:[C.primaryDeep,C.alert,C.ink,C.ink,C.good],bold:[4]});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
