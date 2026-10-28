{ const s = await figma.getNodeByIdAsync("S10"); s.children.slice().forEach(c => c.remove());
const A = V.A;
skeleton(s, [0, 1, 2, 3], "A1", "APPENDIX: ASSUMPTIONS, METHOD, MODEL AND SOURCES", 900,
  "Every number in this deck traces to the case, a cited public source or our model; the recommendation beats Scale and Funnel in all 45 stress-test cells",
  "Source: Team IdeaForge model (toing_model.py, 44 assumptions A01 to A44) | Swiggy Q1 FY27 letter | full research document (72 pages) holds the register, tables and bibliography", RIB_APP);
// A1 assumptions
const a1 = panel(s, 64, 318, 1010, 372, "TEN LOAD-BEARING ASSUMPTIONS");
addTable(a1, 16, 58, [70, 330, 170, 420], ["ID", "Assumption", "Value", "Basis"], [
  ["A05", "Rider pay, solo trip", "₹" + A.T_RIDER, "Case C01; ₹20 to ₹35 base"],
  ["A02", "Toing commission", pc(A.T_COMM), "Core 17 to 25%; Swiggy says lower"],
  ["A03", "Customer fees", "₹" + A.T_FEES_CUST, "Toing ₹12 platform fee (bill)"],
  ["A17", "Orders at Drops", pc(A.DROP_SHARE), "Tested 20% to 80%"],
  ["A21", "Meals per Drop run", String(A.RUN_N), "Breakeven 3.3; flip 5.5"],
  ["A24", "Door fee outside Drops", "₹" + A.DOOR_FEE, "Ownly charges ₹30"],
  ["A28", "New or dormant users", pc(A.NEW_TO_CAT), "Swiggy: 2 in 3"],
  ["A27", "Paid CAC", "₹" + A.CAC_PAID, "Range ₹400 to ₹1,200 tested"],
  ["A35", "Trade-down share", pc(A.CANNIB), "Halved by the fence"],
  ["A31", "12-month migration", pc(A.MIGRATE_12M), "Graduation bound"]],
  { rowH: 27, headerH: 34, name: "TABLE: assumptions", align: ["LEFT", "LEFT", "LEFT", "LEFT"], cellSize: 22 });
// A2 method
const a2 = panel(s, 1098, 318, 758, 372, "EVIDENCE BASE AND ITS LIMITS");
RT(a2, 16, 62, 726, 22, [["Public data only: ", "B"], ["Swiggy's Q1 FY27 letter read in full, plus 14 dated press and filing sources; no fieldwork was run", ""]]);
RT(a2, 16, 168, 726, 22, [["Behaviour we could not observe ", "B"], ["(Drop take-up, trade-down, migration) is an assumption, tested across its full range", ""]]);
RT(a2, 16, 274, 726, 22, [["How Swiggy validates in 90 days: ", "R"], ["a 4-city A/B of the door fee and Drops, plus a core-app holdout", ""]]);
// Row B
dashedH(s, 64, 704, 1792);
const b1 = panel(s, 64, 716, 580, 222, "STRESS TESTS: REBUILD VS OTHERS");
addTable(b1, 16, 58, [232, 170, 130], ["Input varied", "Range", "Wins"], [
  ["Rider pay", "₹32 to ₹48", "5/5"], ["Commission", "8% to 18%", "5/5"], ["Trade-down", "0% to 40%", "5/5"]],
  { rowH: 30, headerH: 36, name: "TABLE: stress", align: ["LEFT", "LEFT", "RIGHT"] });
RT(b1, 16, 188, 548, 22, [["45 of 45 cells ", "G"], ["favour Rebuild", ""]]);
const b2 = panel(s, 668, 716, 620, 222, "DATA CONFLICTS AND HOW WE RESOLVED THEM");
addTable(b2, 16, 58, [180, 400], ["Topic", "Resolution"], [
  ["Core AOV", "Case ₹700 used; tested at ₹500"], ["Toing scale", "Case framing; 50 cities cited"], ["Loss split", "Estimate, grid in doc §6"], ["CAC", "₹400 to ₹1,200 tested"]],
  { rowH: 34, headerH: 38, name: "TABLE: conflicts", align: ["LEFT", "LEFT"] });
const b3 = panel(s, 1312, 716, 544, 222, "SOURCES");
const bib = ["Swiggy Q1 FY27 shareholder letter (Jul 2026)", "MediaNama: Toing bill (Sep 2025); Swiggy call (Aug 2026)", "Storyboard18 citing CLSA, Sensor Tower (Sep 2026)", "MediaNama: Eternal and Zomato Now (Aug 2026)", "Entrackr: Snacc shut (Feb 2026)", "MediaNama, Business Today: Rapido Ownly (2026)", "Deccan Herald: Karnataka fee (2026); Inc42: GST (2025)", "IIFL: Dunzo batching (2022); Morwitz et al. (2007)"];
bib.forEach((b, i) => { const t = addText(b3, "Inter", "Semi Bold", 16, C.ink, (i + 1) + ". " + b, 16, 58 + i * 20, 512, 20, "LEFT", undefined, true); t.name = "BIBLIO"; });
soWhat(s, 948, 82, [["The research document holds the register: ", "A"], ["44 assumptions, 11 model tables, 20 judge questions and a 15-source bibliography sit behind this page", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
