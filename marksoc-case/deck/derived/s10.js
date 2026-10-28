{ const s = await figma.getNodeByIdAsync("S10");
skelBT(s,0,"A1","APPENDIX",240,"A1. Every number on the main slides rebuilds from the case exhibits and twenty stated assumptions, and the model passes "+V.n_checks+" checks",
  "Source: case Exhibits 2 to 4, page 3 | team model "+V.hash+" (T1 to T6) | rerun: python -X utf8 marksoc-case/model/dobaara_model.py",{labels:RIBAP,counterW:120});
const p=pnl(s,64,310,860,352,"CONTRIBUTION PER PHONE, ₹ (EXHIBIT 2)");
tbl(p,14,46,[392,150,150,140],["Line","Superb","Good","Fair"],V.t2rows,{hh:26,rh:28,name:"unit",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,null,null,C.accentTint]});
note(p,14,276,832,"Formula: ","contribution = price − trader price − lab − ₹600 packing − claim rate x ₹2,500 − return rate x ₹1,800. A return does not reverse the sale (Exhibit 2).",{fill:C.tint});
const q=pnl(s,940,310,916,352,"CHANNEL WORKING, ₹ LAKH A MONTH (EXHIBIT 3)");
tbl(q,14,46,[160,80,110,100,100,100,120,96],["Channel","Orders","Phones","Fee","Fixed","Coupons","After mkt","Returns"],V.t4rows.map((r,i)=>[i<5?["Paid ads","MegaKart","Creators","Stores","Referrals"][i]:r[0]].concat(r.slice(1))),
  {hh:26,rh:28,name:"channel work",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,null,C.accentTint]});
note(q,14,248,888,"Rule: ","each channel's phones use its own return rate (creators 1.5x, stores 0.5x), then lose fixed spend, MegaKart's 12% fee and ₹350 referral coupons. EBITDA = "+V.cam0+" − 58.0 = "+V.e0+".",{fill:C.tint});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S10");
const a=pnl(s,64,678,1792,354,"ASSUMPTIONS WE STATED, A01 TO A20 (EACH ALSO SITS ON THE SLIDE THAT USES IT)");
wtab(a,14,46,[70,806],["ID","Assumption"],V.a_short.slice(0,10),{hh:26,pad:2,name:"assumptions 1"});
wtab(a,906,46,[70,802],["ID","Assumption"],V.a_short.slice(10),{hh:26,pad:2,name:"assumptions 2"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
