{ const s = await figma.getNodeByIdAsync("S6");
skelBT(s,1,"A2","APPENDIX",220,"Every number traces to the case packet, a stated assumption or a cited source, and the model passes "+V.checks+" checks",
  "Source: team model "+V.hash+" | research document Appendix A (bibliography) and section 22 (assumptions register) | RBI, MeitY, CERT-In and IndiaAI notifications as listed",{labels:RIBAP,counterW:120});
const p1=pnl(s,64,316,900,380,"ASSUMPTIONS THAT MOVE THE ANSWER");
tbl(p1,14,46,[64,476,112,112,108],["ID","Assumption","Bear","Base","Bull"],V.arows,{hh:26,rh:24,name:"assumptions",align:["LEFT","LEFT","RIGHT","RIGHT","RIGHT"]});
const p2=pnl(s,976,316,880,380,"GOVERNMENT SUPPORT: UPSIDE ONLY, AS THE CASE ASKS");
tbl(p2,14,46,[330,372,150],["Scheme","What it is worth to us","Treatment"],V.gov,{hh:26,rh:44,name:"support",align:["LEFT","LEFT","LEFT"]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S6");
const p3=pnl(s,64,708,640,324,"RULES WE BUILD TO");
tbl(p3,14,46,[190,134,288],["Rule","Date","What it asks of us"],[["RBI recovery code","Aug 2022; 2026 draft","8 am to 7 pm, no threats; record calls"],
  ["RBI FREE-AI framework","Aug 2025","board AI policy, vendor terms, audit logs"],["DPDP Act and Rules","Nov 2025 to May 2027","notice, consent, purpose limits"],
  ["IT Rules amendment","Feb 2026","label synthetic voice, keep provenance"],["CERT-In directions","Apr 2022","report incidents within 6 hours"]],{hh:26,rh:44,name:"rules"});
const p4=pnl(s,716,708,560,324,"CUSTOMER VALIDATION PLAN (NOT YET RUN)");
tbl(p4,14,46,[200,76,256],["Who","Count","What we test"],[["Heads of collections","8","cost of a breach today"],["Compliance heads","6","what inspectors ask for"],
  ["CTOs and CISOs","4","what blocks a review"],["Agency owners","6","price after the subsidy"],["Free call audits","3","accuracy on their calls"]],{hh:26,rh:30,name:"validation",align:["LEFT","RIGHT","LEFT"]});
note(p4,14,232,532,"Status: ","nothing here has been run; interviews start in week 1 and can cut a weak lever.",{lc:C.alert});
const p5=pnl(s,1288,708,568,324,"FORMULAS, SHORT FORMS, SOURCES");
note(p5,14,46,540,"Energy = ","GPU-hours x kW x draw x PUE",{fill:C.tint,lc:C.primaryDeep});
note(p5,14,80,540,"CO2e = ","energy x "+V.ef+" kg/kWh x (1 − renewable share)",{fill:C.tint,lc:C.primaryDeep});
note(p5,14,114,540,"Water = ","IT energy x WUE + energy x off-site L/kWh",{fill:C.tint,lc:C.primaryDeep});
const b=T(p5,14,150,540,16,"ACV contract value a year; ARR annual recurring revenue; CAC cost to win a customer; DPDP Digital Personal Data Protection; FREE-AI RBI's responsible AI framework; NBFC non-bank lender; PUE power usage effectiveness; WUE water use effectiveness.\nSources: case packet; RBI; MeitY; IndiaAI; CEA; Hugging Face; Yotta; Sarvam; AWS. Full list: research document, Appendix A.",{family:"Inter",style:"Semi Bold"}); b.name="BIBLIO";
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
