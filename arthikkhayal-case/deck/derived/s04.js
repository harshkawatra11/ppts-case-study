{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 5","THE STRATEGY",300,"Meet the account inside four moments the bank already owns: salary day, a holdings check, the RM review and Dhanteras, with no advice and no offers",
  "Source: SEBI finfluencer rules, Aug 2024 | NSE ad code, Feb 2023 | NSE inducement circulars | DPDP Rules 2025 | CCPA dark patterns 2023 | RBI conduct directions 2026 | team model "+V.hash+" (T10, T17 to T19)");
const a=layered(s,64,306,1792,56,C.primaryDeep,"CARD: conclusively");
TL(a,16,10,22,"CONCLUSIVELY",{color:C.accent});
T(a,220,13,1556,22,"Selling the market harder tops out at "+V.opt_s[0]+" of 5; meeting the account inside the bank scores "+V.opt_s[7]+" and clears every guardrail.",{family:"Inter",style:"Semi Bold",color:C.white});
rail(s,64,378,300,"THE CHOICE",C.primary); rail(s,64,690,342,"THE BUILD",C.primaryDeep);
const p1=pnl(s,116,378,662,300,"EIGHT OPTIONS, ONE TEST, SCORED 1 TO 5");
hgrid(p1,14,44,V.opt.map(o=>o[0]),["Lift","Rules","Fall","Cost","Ships","Score"],V.opt.map((o,k)=>o[1].map(v=>hcell(v)).concat([k===7?{t:V.opt_s[k],f:C.primaryDeep,tc:C.accent}:{t:V.opt_s[k],f:C.white,tc:C.ink}])),
  {lw:250,cw:64,rh:24,hh:24,corner:"Option",name:"options"});
note(p1,14,266,634,"","Ours leads under all four weight sets tested (T18)",{fill:C.tint});
const p2=pnl(s,790,378,738,300,"EXTRA ACTIVES BY SEGMENT AND MOMENT");
const CUT=[100,500,1500,3000], RL=["Prestige","Elite","Elevate","Preferred","Salary","Card"];
hgrid(p2,14,44,RL.map((g,i)=>g+" "+V.idle_seg_f[i]).concat(["Total"]),["Salary day","Holdings","RM review","Dhanteras","Workplace"],
  V.rows.map(r=>r.map(v=>heatN(v,CUT))).concat([V.lev.map(v=>({t:fmtN(v),f:C.primaryDeep,tc:C.accent}))]),{lw:190,cw:104,rh:24,hh:24,corner:"Idle pool",name:"lever heat"});
note(p2,14,244,710,"","Plus "+V.warm+" warm-cohort and "+V.new+" new-account first orders; each idle account is counted once.",{fill:C.tint});
const p3=pnl(s,1540,378,316,300,"FIVE CHECKS");
[["No advice","SEBI adviser rules"],["No return claims","SEBI, NSE ad code"],["No inducement","NSE circulars"],["Consent first","DPDP Rules 2025"],["No dark patterns","CCPA 2023, RBI 2026"]].forEach((r,i)=>{ const y=50+48*i;
  tick(p3,14,y+4,30); sTL(p3,54,y,18,r[0],{family:"Inter",style:"Bold",color:C.primaryDeep,maxW:248}); sTL(p3,54,y+22,18,r[1],{family:"Inter",style:"Semi Bold",maxW:248}); });
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const p4=pnl(s,116,690,560,342,"THE BANK APP, ON TWO DAYS");
const s1=phone(p4,14,46,256,260); sTL(s1,10,38,18,"Salary credited",{family:"Inter",style:"Bold",color:C.good});
const c1=addFrame(s1,10,66,220,160,C.tint,C.ink,1.5,"CARD: mock salary");
sT(c1,8,6,204,18,"ONL account: open",{family:"Inter",style:"Bold",color:C.primaryDeep}); sT(c1,8,34,204,18,"Start an instalment",{family:"Inter",style:"Semi Bold"});
sT(c1,8,62,204,18,"Gold, liquid, index",{family:"Inter",style:"Semi Bold",color:C.primary});
bx(c1,8,116,98,32,"Set up",{fill:C.primary,color:C.white}); bx(c1,114,116,98,32,"Later",{fill:C.white});
const s2=phone(p4,290,46,256,260); sTL(s2,10,38,18,"Investments",{family:"Inter",style:"Bold",color:C.primaryDeep});
const c2=addFrame(s2,10,66,220,160,C.white,C.ink,1.5,"CARD: mock tile");
addRect(c2,0,0,6,160,C.accent); sT(c2,14,6,198,18,"ONL Trade demat",{family:"Inter",style:"Bold",color:C.primaryDeep}); sT(c2,14,34,198,18,"Linked to this bank",{family:"Inter",style:"Semi Bold"});
sT(c2,14,62,198,18,"Holdings: one tap",{family:"Inter",style:"Semi Bold",color:C.primary}); bx(c2,14,116,192,32,"Open ONL",{fill:C.primary,color:C.white});
sTL(p4,0,312,18,"Salary day: the card",{family:"Inter",style:"Bold",centerAt:142}); sTL(p4,0,312,18,"Any day: the tile",{family:"Inter",style:"Bold",centerAt:418});
const p5=pnl(s,688,690,600,342,"REACH AND CONVERSION, BUBBLE = ACTIVES");
const L=74,R=580,TP=56,B=284, X=v=>L+(R-L)*v/500000, LY=v=>Math.log(v/0.5)/Math.log(40), Y=v=>B-(B-TP)*LY(v);
[0.5,1,2,5,10,20].forEach(v=>{ addRect(p5,L,Y(v),R-L,1,C.surface); sTL(p5,0,Y(v)-11,18,v+"%",{family:"Inter",style:"Semi Bold",rightAt:L-6}); });
[0,1,2,3,4,5].forEach(v=>sTL(p5,0,B+4,18,String(v),{family:"Inter",style:"Bold",centerAt:X(v*100000)}));
addRect(p5,L,B,R-L,2,C.ink); addRect(p5,L,TP,2,B-TP,C.ink);
sTL(p5,0,B+28,18,"lakh accounts reached; first-order chance (log)",{family:"Inter",style:"Semi Bold",centerAt:(L+R)/2});
const POS={"Salary day":[-1,-1],"Rediscover":[2,-1],"RM review":[1,0],"Dhanteras":[-1,0]}, COL={"Salary day":C.primaryDeep,"Rediscover":HG[3],"RM review":C.primary,"Dhanteras":C.accent,"Workplace":HG[2]};
V.sc.filter(r=>r[0]!=="Workplace").forEach(r=>{ const cx=X(r[1]), cy=Y(r[2]), d=Math.max(16,Math.round(80*Math.sqrt(r[3]/5661))); addEllipse(p5,cx-d/2,cy-d/2,d,d,COL[r[0]],C.ink,1.5);
  const q=POS[r[0]], lab=r[0]+" "+fmtN(r[3]), ly=cy+(q[1]===0?-11:(q[1]<0?-d/2-24:d/2-4));
  if(q[0]===2) sTL(p5,0,ly,18,lab,{family:"Inter",style:"Bold",rightAt:R+4}); else if(q[0]>0) sTL(p5,cx+d/2+6,ly,18,lab,{family:"Inter",style:"Bold"}); else sTL(p5,0,ly,18,lab,{family:"Inter",style:"Bold",rightAt:cx-d/2+(q[1]<0?20:-4)}); });
const p6=pnl(s,1300,690,556,342,"FIVE FUNNEL STEPS, FIVE FIXES");
[["Opened","Guided first order, days 0 to 30","W4"],["Login","Bank-app tile, sign-on; video IPV if dormant","W4"],["Fund","UPI Autopay from the same bank","W5"],
 ["First order","Monthly ETF instalment, customer's pick","W6"],["Habit","Daily holdings and net-worth view","W8"]].forEach((r,i)=>{ const y=48+56*i, w=150-10*i;
  bx(p6,14+5*i,y,w,46,r[0],{fill:HG[5-i],color:i<2?C.white:C.ink,fam:"Poppins",st:"Bold"}); arrow(p6,168,y+23,184,y+23,C.ink,2);
  bx(p6,188,y,272,46,r[1],{fill:C.white,align:"LEFT",pad:8}); bx(p6,468,y,74,46,r[2],{fill:C.accent,fam:"Poppins",st:"Bold"}); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
