{ const s = await figma.getNodeByIdAsync("S4");
hdr(s, 4, V.s3.finding, V.s3.source);
addChip(s, 64, 352, 360, 50, "TEAM IDEAFORGE", C.primary, C.white, 24);
addTable(s, 440, 352, [270, 520, 170, 456], ["Team Members", "Institution", "Role", "Owns in the prototype round"], [
  ["Harsh Kawatra", "Delhi Technological University", "Team Leader", "Data, match engine, console"],
  ["Aakriti Aggarwal", "Maharaja Agrasen Inst. of Mgmt Studies", "Member", "Tax rules, rates, pricing, pitch"]],
  { headerH: 50, rowH: 58, name: "TABLE: team", align: ["LEFT", "LEFT", "LEFT", "LEFT"] });
const b1 = panel(s, 64, 534, 600, 420, "WHO LEADS WHAT");
heatmap(b1, 16, 62, ["Harsh", "Aakriti"], ["Res.", "Data", "ML", "API", "UI", "Pitch"], [[3, 5, 5, 5, 5, 3], [5, 3, 3, 1, 3, 5]], { labelW: 118, colW: 74, rowH: 44, headH: 44, scale: HO, min: 1, max: 5, name: "TABLE: leads" });
T(b1, 16, 206, 568, 22, "5 leads, 3 supports, 1 not involved");
badgeList(b1, 16, 252, 568, ["Every number sourced or assumed", "Engine first, model second", "Cut order fixed in advance"], { d: 40, pitch: 52 });
const b2 = panel(s, 680, 534, 580, 420, "8 MODULES, 8 FIRST DELIVERABLES");
addTable(b2, 16, 62, [200, 76, 272], ["Module", "Owner", "First deliverable"], [
  ["Dataset", "HK", "60,000 invoices"], ["Match engine", "HK", "Exact, fuzzy tiers"], ["Exceptions", "HK", "12 typed exceptions"],
  ["Rate verifier", "AA", "Dated rate master"], ["Gap finder", "AA", "Ageing buckets"], ["Pattern watch", "HK", "Top-100 list"],
  ["Pricing", "AA", "Rupees at risk"], ["Console, voice", "Both", "Ranked queue, voice"]],
  { headerH: 40, rowH: 38, name: "TABLE: modules", align: ["LEFT", "CENTER", "LEFT"] });
const b3 = panel(s, 1276, 534, 580, 420, "PROTOTYPE ROUND IN 4 BLOCKS");
gantt(b3, 16, 62, 230, 74, ["B1", "B2", "B3", "B4"], [
  { label: "Dataset", bars: [{ s: 0, e: 1 }] }, { label: "Match engine", bars: [{ s: 0, e: 2 }] }, { label: "Rate, gaps", bars: [{ s: 1, e: 2 }] },
  { label: "Anomaly, pricing", bars: [{ s: 2, e: 3 }] }, { label: "Console, demo", bars: [{ s: 2, e: 4 }] }], { headH: 44, rowH: 52, name: "TABLE: blocks" });
T(b3, 16, 378, 548, 22, "Cut first: anomaly, then liability");
soWhat(s, 966, 64, [["Ownership: ", "A"], [V.s3.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
