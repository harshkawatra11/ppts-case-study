{ const s = await figma.getNodeByIdAsync("S5");
hdr(s, 5, V.s4.finding, V.s4.source);
const a1 = panel(s, 64, 352, 1100, 250, "FIVE STEPS FROM RAW BOOKS TO A RANKED QUEUE");
flow(a1, 16, 62, 1068, 172, [{ title: "INGEST", sub: "Books, bank file, GSTR-2B" }, { title: "MATCH", sub: "Exact, fuzzy, classifier" }, { title: "SORT", sub: "12 types, one root cause" }, { title: "PRICE", sub: "Rupees at risk, last date" }, { title: "ACT", sub: "Ranked queue, Ask Hisaab" }], { gap: 36 });
const m = layered(s, 1180, 352, 676, 250, C.primaryDeep, "CARD: moneyshot");
addChip(m, 20, 16, 330, 44, "CREDIT AT RISK (EST.)", C.accent, C.ink, 22);
nm(TL(m, 20, 62, 64, V.moneyshot, { family: "Poppins", style: "ExtraBold", color: C.accent }), "MONEYSHOT");
T(m, 368, 76, 288, 22, "of input tax credit at risk per ₹100 Cr of purchases (base)", { color: C.white });
RT(m, 20, 174, 636, 22, [["Low ₹18 lakh, base ₹54 lakh, high ₹90 lakh: ", "A"], ["1%, 3%, 5% of ₹18 Cr credit a year (assumption band)", "W"]], { color: C.white });
const b1 = panel(s, 64, 618, 620, 336, "EVERY BRIEF ITEM HAS ONE MODULE");
addTable(b1, 16, 62, [190, 200, 198], ["Brief", "Module", "Output"], [
  ["Reconcile", "3-way match", "Status, score"], ["Mismatches", "Classifier", "Typed errors"], ["Tax check", "Rate verifier", "Rate errors"], ["Missing", "Gap finder", "Ageing buckets"],
  ["Anomalies", "Pattern watch", "Ranked reasons"], ["Liability", "Liability view", "Payable band"], ["Dashboard", "Console", "Ranked queue"], ["Dataset", "Synthetic set", "12 error types"]],
  { headerH: 34, rowH: 27, name: "TABLE: coverage", align: ["LEFT", "LEFT", "LEFT"] });
const b2 = panel(s, 700, 618, 560, 336, "THE CONSOLE (ILLUSTRATIVE SCREEN)");
const br = browser(b2, 16, 62, 528, 262, "Hisaab console");
const ask = addFrame(br, 330, 4, 190, 32, C.accent, C.ink, 1.5, "CHIP: ask"); addText(ask, "Poppins", "Bold", 22, C.ink, "ASK HISAAB", 4, 0, 182, 32, "CENTER", "CENTER", false);
[["Matched 52,800", C.goodTint], ["Unmatched 1,860", C.alertTint], ["Duplicate 660", C.tint], ["Discrepant 4,680", C.tint]].forEach((q, i) => {
  const f = addFrame(br, 8 + (i % 2) * 260, 48 + Math.floor(i / 2) * 44, 252, 38, q[1], C.ink, 1.5, "CELL"); TB(f, 8, 0, 236, 38, 22, q[0], { family: "Inter", style: "Bold" }); });
addTable(br, 8, 138, [250, 140, 122], ["Exception", "₹ at risk", "Days"], [["Supplier not filed", "4.2 lakh", "6"], ["Old GST rate used", "1.1 lakh", "6"], ["Near duplicate", "0.6 lakh", "0"]], { headerH: 34, rowH: 28, name: "TABLE: queue", align: ["LEFT", "RIGHT", "RIGHT"] });
const b3 = panel(s, 1276, 618, 580, 336, "HOW ONE EXCEPTION IS PRICED (EST.)");
waterfall(b3, 16, 62, 548, 200, [{ label: "Blocked", value: V.example[0][1], color: C.alert, text: "₹90,000" }, { label: "Interest", value: V.example[1][1], color: C.orange, text: "₹8,100" }, { label: "Capital", value: V.example[2][1], color: C.accent, text: "₹3,000" }, { label: "At risk", kind: "total", value: 101100, color: C.primaryDeep, text: "₹1,01,100" }], { max: 110000, min: 0, labelH: 40 });
formulaBox(b3, 16, 268, 548, 58, "₹ at risk = tax × P(blocked) + interest + capital cost", { chip: "FORMULA", chipW: 130 });
soWhat(s, 966, 64, [["Day one: ", "A"], [V.s4.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
