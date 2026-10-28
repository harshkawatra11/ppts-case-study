{ const s = await figma.getNodeByIdAsync("S5");
skelBT(s,0,"A1 TO A4","APPENDIX",280,"Every number on slides 2 to 4 traces to the case brief, a named source or one model with 31 stated assumptions",
"Source: team model "+V.hash+" | research document, Appendix A (bibliography) and section 30 (assumptions register) | all values are assumptions or model outputs unless sourced",{labels:RIBAP,counterW:220});
const a1=pnl(s,64,310,900,352,"A1 MODEL: ONE ORDER, THREE LANES, BASE, ₹");
callout(a1,14,46,872,72,"Contribution = ","(1 − return rate) × (price − fee − product − freight − paperwork) − return rate × loss on a return",{fill:C.tint});
tbl(a1,14,126,[296,190,190,196],["Line","Today","Reformed parcel","Warehouse"],V.a1_rows,{hh:26,rh:24,name:"a1",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,null,null,null,null,null,null,C.tint]});
const a2=pnl(s,980,310,876,352,"A2 ASSUMPTIONS THAT MOVE THE ANSWER");
const PC={A10:1,A11:1,A28:1,A31:1}, RS={A05:1,A09:1}, CK={A05:"Lane D",A07:"time study",A09:"to measure",A10:"Lane C, CBIC",A11:"team",A27:"time study",A28:"Lane D",A31:"Lane C, D"};
const fm=(k,v)=>PC[k]?Math.round(parseFloat(v)*100)+"%":(RS[k]?"₹"+fmtN(parseFloat(v)):v);
tbl(a2,14,46,[70,300,110,110,110,148],["ID","Input","Bear","Base","Bull","Checked in"],V.a3_rows.map(r=>[r[0],r[1].replace(", ₹",""),fm(r[0],r[2]),fm(r[0],r[3]),fm(r[0],r[4]),CK[r[0]]]),{hh:30,rh:30,name:"a2",align:["LEFT","LEFT","RIGHT","RIGHT","RIGHT","LEFT"]});
fine(a2,14,322,848,"Bear is the value least favourable to the recommendation. Case facts are never varied.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S5");
const a3=pnl(s,64,678,900,354,"A3 SENSITIVITY AND SCENARIOS");
const NM={A28:"A28 Rate card",A07:"A07 Forms today",A09:"A09 Agent fee",A27:"A27 Desk minutes",A31:"A31 Returns pooled",A05:"A05 Parcel freight",A04:"A04 Product cost",A10:"A10 Return rate"};
const base=parseInt(V.uplift.replace(/[^0-9]/g,""));
torS(a3,14,50,470,V.tornado.map(t=>({label:NM[t[0]],lo:base+t[2],hi:base+t[3]})),base,{lw:230,rh:30,min:base-80,max:base+70});
tbl(a3,500,46,[134,84,84,84],["₹ an order","Bear","Base","Bull"],[["Today",V.bear_today,V.today,V.bull_today],["Reformed",V.bear_ref,V.reformed,V.bull_ref],["Warehouse",V.bear_wh,V.wh,V.bull_wh],["Uplift","₹371",V.uplift,"₹414"]],{hh:26,rh:30,name:"a3",align:["LEFT","RIGHT","RIGHT","RIGHT"],fills:[null,C.tint,null,C.goodTint]});
note(a3,500,200,386,"Switch point: ","the warehouse never beats the reformed parcel per order (T12)");
fine(a3,14,316,872,"Uplift "+V.uplift+" in the base case; bars show each input at its bear (red) and bull (green) value");
const a4=pnl(s,980,678,876,354,"A4 SHORT FORMS AND SOURCES");
tbl(a4,14,46,[100,320],["Short","Meaning"],[["AEO","Authorised Economic Operator"],["CBIC","indirect taxes and customs board"],["CSB-V","courier shipping bill, form V"],["DGFT","foreign trade directorate"],["DNK","Dak Ghar Niryat Kendra"],["DoP","Department of Posts"],["ECCS","express cargo clearance system"],["EOR","Exporter on Record"],["PBE-III","postal bill of export, form III"],["RoDTEP","export duty and tax remission"]],{hh:26,rh:24,name:"short"});
sT(a4,14,318,420,18,"Not yet run: interviews, time study (§29)",{family:"Inter",style:"Bold",color:C.alert});
TL(a4,446,46,22,"Sources",{color:C.primary});
const b=addText(a4,"Inter","Semi Bold",16,C.ink,["1. CaseQuest 2026 case brief, USME DTU","2. CBIC Circular 17/2026; Notification 45/2017","3. CBIC Circular 54/2020, MSME AEO package","4. DGFT Notification 27/2026-27, PN 25/2026-27","5. India Post year-end review, Dec 2025","6. Lok Sabha USQ 2786, 12 Dec 2024","7. EY-ASSOCHAM on e-commerce exports, FY23","8. GTRI e-commerce export reports, 2023, 2024","9. UPU, PromPerú, SENAE on Exporta Fácil","10. GACC on China cross-border e-commerce, 2024","11. CBP, EU Council, HMRC, ATO, 2025 to 2026","12. CAG Report 33 of 2025; WTO TFA Art. 7.4","13. Team model "+V.hash+"; research Appendix A"].join("\n"),446,80,416,20,"LEFT",undefined,true); b.name="BIBLIO";
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
