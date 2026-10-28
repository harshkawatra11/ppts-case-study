{ const s = await figma.getNodeByIdAsync("S7"); wipe(s);
skeleton2(s,1,"A2","APPENDIX 2: SHORT FORMS AND SOURCES",600,"Every short form, abbreviation and tag on these slides is expanded here, and each slide is tied to the research sections it was derived from","Source: Team IdeaForge research document (29 sections, 6 appendices) | model "+V.hash,RIBX);
const AB=[["A, B, C", "Proposals: subscription, retail, ready-to-eat"], ["A rebuilt", "Proposal A with the five redesigned features on slide 3"], ["A01 to A25", "Team assumption IDs, listed in the research, section 25"], ["Bear, bull", "Low and high scenarios; base is the expected case"], ["CAC", "Customer acquisition cost: spend to win one customer"], ["Cr", "Crore: ten million rupees"], ["EBITDA", "Earnings before interest, tax, depreciation, amortisation"], ["GM", "Gross margin: gross profit as a share of revenue"], ["Risk scores", "Impact (rows) and probability (columns), each 1 to 5"], ["KPI", "Key performance indicator"], ["lakh", "One hundred thousand"], ["LTV", "Lifetime gross profit earned from one customer"], ["LTV to CAC", "Lifetime gross profit divided by acquisition cost"], ["M3, M12, M24", "Month 3, 12 or 24, of a customer or of the plan"], ["Mktg", "Marketing spend"], ["Other", "Operating cost other than cost of goods and marketing"], ["p", "Paise: one hundredth of a rupee"], ["pts", "Percentage points"], ["Run-rate", "Months 22 to 24 of the plan, scaled to a full year"], ["Stop trigger", "The KPI level at which the Board acts"], ["T1 to T13", "Model tables, reproduced in the research, Appendix B"], ["W1 to W13", "Weeks 1 to 13 of the 90-day plan"], ["x", "Times: 2.70x means 2.70 times"], ["Y1, Y2", "Plan year 1 (months 1 to 12) and year 2 (13 to 24)"], ["Zero month", "The month in which cash in the bank reaches zero"]];
const p1=panel(s,64,318,880,712,"SHORT FORMS USED IN THIS DECK (1 OF 2)");
wrapTable(p1,16,58,[170,678],["Short form","Meaning as used here"],AB.slice(0,17),{rowH:36,headerH:38,name:"abbreviations 1"});
const p2=panel(s,960,318,896,400,"SHORT FORMS USED IN THIS DECK (2 OF 2)");
wrapTable(p2,16,58,[170,694],["Short form","Meaning as used here"],AB.slice(17),{rowH:36,headerH:38,name:"abbreviations 2"});
const p3=panel(s,960,734,896,296,"WHERE EACH SLIDE COMES FROM");
["Case: Verdict 2.0, HarvestBox: Growing Without Burning Out (Motilal Nehru College, 2026).",
 "Model: harvestbox_model.py, hash "+V.hash+", tables T1 to T13 (research, Appendix B).",
 "Slide 1: research sections 2, 9 and 11. Slide 2: sections 3 to 8 and 13 to 16.",
 "Slide 3: sections 2, 11, 13, 16 and 17. Slide 4: sections 19 to 21. Slide 5: sections 18 and 22 to 24.",
 "Reviews: 8,052 Play Store reviews of six meal-kit apps since January 2024 (research, Appendix C).",
 "Outside sources: 65 cited sources, listed in full in the research, Appendix A."].forEach((x,i)=>fine(p3,16,60+i*38,864,x));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
