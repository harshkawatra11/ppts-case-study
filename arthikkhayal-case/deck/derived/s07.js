{ const s = await figma.getNodeByIdAsync("S7");
skelBT(s,-1,"A1 TO A4","APPENDIX",240,"Every number in the deck traces to the case exhibits, a stated assumption or a cited source, and the model passes 10 of 10 checks",
  "Source: team activation model "+V.hash+" | research document Appendix A (bibliography) and section 27 (assumptions register)",{labels:RIBAP,counterW:200});
const p1=pnl(s,64,310,900,350,"A1 MODEL: HOW ONE EXTRA ACTIVE ACCOUNT IS COUNTED");
note(p1,14,48,872,"Extra actives = ","sum over segments of idle x (1 − d + d x k) x [1 − (1 − p salary)(1 − p rediscover)(1 − p RM)(1 − p Dhanteras)] + workplace + warm x reach x re-trade + new x lift",{fill:C.tint,lc:C.primaryDeep});
tbl(p1,14,122,[230,150,150,150,192],["Lever, base case","Reach","Tap or meet","First order","Chance per idle"],V.pv,{hh:26,rh:26,name:"chances",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"]});
sT(p1,14,264,872,18,"d = share idle 24 months or more (50%), k = order rate after re-KYC (0.50). Checks: 10 of 10 pass, hash "+V.hash+". Rerun: python -X utf8 arthikkhayal-case/model/activation_model.py",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p2=pnl(s,976,310,880,350,"A2 ASSUMPTIONS THAT MOVE THE ANSWER");
tbl(p2,14,46,[60,300,90,90,90,222],["ID","Assumption","Bear","Base","Bull","Checked in"],V.arows,{hh:26,rh:29,name:"assumptions",align:["LEFT","LEFT","RIGHT","RIGHT","RIGHT","LEFT"]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S7");
const p3=pnl(s,64,676,900,356,"A3 RULES WE DESIGN TO");
tbl(p3,14,46,[230,300,342],["Rule","Source","What it asks of us"],[["No investment advice","SEBI (Investment Advisers) Regulations, 2013","neutral lists, no recommendations"],
  ["Advertisement code","NSE code, February 2023","exchange approval first; a risk line on each"],["Finfluencers","SEBI amended regulations, August 2024","no tie-ups with unregistered persons"],
  ["Inactive accounts","NSE circular, 25 October 2024","24 months idle; video IPV; no push to trade"],["Personal data","DPDP Act 2023; Rules notified November 2025","notice, consent, withdrawal, purpose limits"],
  ["Dark patterns","CCPA Guidelines, November 2023","no false urgency, nagging or confirm-shaming"]],{hh:26,rh:44,name:"rules"});
const p4=pnl(s,976,676,880,356,"A4 SHORT FORMS AND SOURCES");
tbl(p4,14,46,[110,320],["Short","Meaning"],[["AMC","annual maintenance charge"],["BSDA","Basic Services Demat Account"],["DPDP","Digital Personal Data Protection"],["ETF","exchange-traded fund"],["F&O","futures and options"],
  ["IPV","in-person verification"],["KYC","know your customer"],["RM","relationship manager"],["SSO","single sign-on"],["T12, T3","trailing 12 and 3 months"]],{hh:26,rh:26,name:"short forms"});
const b=T(p4,458,48,408,16,"Case: Arthik Khayal 2026 problem statement and Exhibits 1, 2a, 2b\nSEBI: F&O trader study FY26; finfluencer rules, Aug 2024\nNSE: inactive accounts, Oct 2024; advertisement code, Feb 2023\nNSE active clients FY26 (IANS, Apr 2026)\nDemat and active ratio, Aug 2026 (Business Today)\nMeitY: DPDP Rules 2025\nCCPA: dark pattern guidelines 2023\nThaler and Benartzi (2004), Save More Tomorrow\nKarlan et al. (2016), reminders and saving\nFull list: research Appendix A",{family:"Inter",style:"Semi Bold"}); b.name="BIBLIO";
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
