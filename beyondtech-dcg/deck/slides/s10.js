{ const s = await figma.getNodeByIdAsync("S10");
skelBT(s,0,"A1","APPENDIX",260,V.fA,"Source: college_scorecard.csv | model "+V.hash+", tables T8, T12, T16 | sources.md, 518 sources | research sections 13, 14, 24, 27",{labels:RIBAP,counterW:120});
const pa=panel(s,64,316,900,714,"THE 18 COLLEGES THAT FAIL THE SCREEN");
[0,1].forEach(k=>wrapTable(pa,16+k*434,60,[204,80,150],["College","Fit","Fails on"],V.rest.slice(k*9,k*9+9),{rowH:54,headerH:40,name:"fails "+k}));
const cal=V.cal.map(r=>r[0]+" "+r[2]).join(", ");
T(pa,16,598,868,22,"Calibration: "+cal+"; all at or above the "+V.median+" longlist median.",{family:"Inter",style:"Bold"});
T(pa,16,656,868,22,"Twelve months, DTU plus four campuses: "+V.t12.map(r=>r[0].toLowerCase()+" "+r[1]+" enrolments, "+r[3]).join("; ")+".",{family:"Inter",style:"Semi Bold"});
const pb=panel(s,980,316,876,570,"ASSUMPTIONS THAT MOVE THE ANSWER");
addTable(pb,16,60,[76,330,140,150,148],["ID","Assumption","Bear","Base","Bull"],V.asm,{rowH:38,headerH:40});
const pc=panel(s,980,902,876,128,"METHOD AND SOURCES");
nm(addText(pc,"Inter","Semi Bold",14,C.ink,"Desk research only: no surveys or interviews; a Customer Validation Plan with target counts by segment is in research section 27. 518 sources registered, 203 cited. Scorecard data: institute NIRF submissions and placement reports first, aggregators labelled as such. Model: Python, seed 20261009, "+V.n_asm+" assumptions, seven identity checks passing. Fee, enrolments today and every conversion rate are assumptions with bear, base and bull values.",16,56,844,60,"LEFT",undefined,true),"BIBLIO");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
