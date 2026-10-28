{ const s = await figma.getNodeByIdAsync("S6"); wipe(s);
skeleton2(s,0,"A1","APPENDIX 1: ASSUMPTIONS AND CHECKS",590,V.f6,"Source: Verdict 2.0 case | Team IdeaForge model "+V.hash+" (harvestbox_model.py, 13 tables) | full bibliography in the research document, Appendix A",RIBX);
const ap=panel(s,64,318,660,366,"NINE ASSUMPTIONS THAT MOVE THE ANSWER");
addTable(ap,16,58,[70,330,228],["ID","Assumption","Value"],V.assum,{rowH:28,headerH:34}).name="TABLE: assumptions";
const dp=panel(s,740,318,600,366,"THREE CASE FIGURES DO NOT TIE");
wrapTable(dp,16,58,[158,150,160,100],["Figure","Case","Implies","Use"],V.check,{rowH:54,headerH:36,name:"data check",fills:[null,null,null,C.alertTint,C.alertTint]});
const tp=panel(s,1356,318,500,366,"RUN-RATE EBITDA SWING, ₹ CR");
const SL=["M3 retention","Skip rate","Referral share","Conversion","Margin levers","Overhead cut","Brand spend cut","Ready-to-eat"];
tornado(tp,16,60,468,V.torn.map((r,i)=>({label:SL[i],lo:r[1],hi:r[2]})).sort((a,b)=>(b.hi-b.lo)-(a.hi-a.lo)),V.torn_base,{labelW:216,rowH:33,min:-1.4,max:1.9});
fine(tp,16,338,468,"Months 22 to 24, annualised. Ranges: model table T7.");
const op=panel(s,64,700,820,330,"THREE PROPOSALS, AS WRITTEN AND IMPROVED");
addTable(op,16,58,[236,120,120,120,192],["Option","Invest","Revenue","EBITDA","Cash"],V.optab,{rowH:32,headerH:36}).name="TABLE: options";
fine(op,16,290,788,"Revenue and EBITDA: 24-month change against no decision, ₹ Cr. Cash: the month cash reaches zero, or cash left at month 24.");
const xp=panel(s,900,700,956,330,"READING NOTES AND BREAK-EVEN INPUTS");
["Case facts are used as given. Each team assumption has an ID (A01 to A25), a rationale and a sensitivity in the research, section 25.",
 "No customer interview, survey or pilot has been run. The validation plan in the research, Appendix E, is a plan and says so.",
 "Real brands on the cover mark alternatives and precedents only. HarvestBox is the fictional company in the case."]
 .forEach((x,i)=>{ fine(xp,56,62+i*84,400,x); addBadge(xp,16,62+i*84,32,i+1,C.primary,C.white); });
addTable(xp,480,58,[230,100,130],["Input","Base","Flips at"],[["Referral share","20%","18.1%"],["Skip rate","5%","5.6%"],["M3 retention","65%","64.5%"],["Web conversion","3.3%","3.27%"],["Margin levers","+4.0","+3.8"]],{rowH:34,headerH:36}).name="TABLE: break-even inputs";
fine(xp,480,268,460,"Flips at: the input value where run-rate EBITDA is zero (research, section 20.5).");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
