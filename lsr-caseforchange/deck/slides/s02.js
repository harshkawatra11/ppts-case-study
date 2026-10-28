{ const s = await figma.getNodeByIdAsync("S2"); const D = V.s2;
hdr(s, 2, D.finding, D.source);
const a1 = panel(s, 64, 224, 700, 350, "REVENUE FELL 31%, COST DID NOT (₹ CR)");
stackV(a1, 16, 56, 668, 250, ["FY23", "FY24", "FY25", "Run-rate"].map((l, i) => ({ label: l, total: "Rev " + D.rev[i],
  segs: [{ value: D.emp[i], color: C.primary, text: String(Math.round(D.emp[i])), textColor: C.white }, { value: D.non[i], color: C.tint, text: String(Math.round(D.non[i])) }] })), { max: 290, labelH: 40, barW: 96 });
legend(a1, 16, 312, [[C.primary, "Employee cost"], [C.tint, "Other cost"]]);
TL(a1, 0, 312, 22, "EBITDA " + D.ebitda.join(", ").replace("-", "−"), { family: "Inter", style: "Bold", color: C.alert, rightAt: 684 });
const a2 = panel(s, 780, 224, 520, 350, "THE CLOCK RUNS TO ₹15 CR");
const lc = lineChart(a2, 8, 60, 504, 250, [{ values: D.flat, color: C.rival, dash: [8, 6] }, { values: D.drift, color: C.alert }], ["0", "", "", "3", "", "", "6", "", "", "9"], { yMin: -5, yMax: 40, yTicks: [0, 15, 30], padL: 56, padR: 24 });
floorLine(a2, lc, "₹15 Cr floor");
legend(a2, 16, 312, [[C.alert, "Drift"], [C.rival, "Flat"]]);
TL(a2, 0, 312, 22, "Breach: month 6", { family: "Poppins", style: "Bold", color: C.alert, rightAt: 504 });
const a3 = panel(s, 1316, 224, 540, 350, "₹40 CR OF CASH, ₹10 CR FREE");
stackH(a3, 16, 66, 508, 56, [{ value: D.cashbar[0], color: C.alert, text: "15", textColor: C.white }, { value: D.cashbar[1], color: C.accent, text: "15" }, { value: D.cashbar[2], color: C.good, text: "10", textColor: C.white }], { minInside: 60 });
badgeList(a3, 16, 138, 508, [[["₹15 Cr ", "B"], ["must stay in the bank under the loan covenant", ""]], [["₹15 Cr ", "B"], ["is the emergency budget, inside the ₹40 Cr", ""]], [["₹10 Cr ", "B"], ["is free: " + D.free_months + " months of burn at ₹2.6 Cr", ""]]], { d: 36, pitch: 68, labels: ["A", "B", "C"] });
const b1 = panel(s, 64, 588, 760, 366, "THREE RIVALS, ONE PRICE GAP (₹ PER BFSI FILE)");
addTable(b1, 16, 62, [200, 78, 78, 110, 262], ["Player", "Price", "Cost", "Margin", "Weak spot"], D.rivals, { headerH: 40, rowH: 44, name: "TABLE: rivals", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT", "LEFT"], rowFills: [C.amberTint, null, null, null] });
RT(b1, 16, 284, 728, 22, [["The AI-native firm has ₹18 of margin: ", "B"], ["it can cut price again and still earn.", ""]]);
fine(b1, 16, 342, 728, "BFSI: banking, financial services and insurance. n/s: not stated in the case.");
const b2 = panel(s, 840, 588, 520, 366, "REVENUE DOWN 31%, STAFF DOWN 6%");
hBars(b2, 16, 62, 488, D.hid.map((h, i) => ({ label: h.label, value: h.value, text: h.text, color: [C.alert, C.rival, C.orange][i] })), { labelW: 230, rowH: 46, barH: 28, valueW: 96, max: 34 });
RT(b2, 16, 212, 488, 22, [[D.leavers + " people ", "B"], ["leave in a normal year. Headcount fell by only 150 from its peak, so most leavers were replaced while revenue fell ₹80 Cr.", ""]]);
const b3 = panel(s, 1376, 588, 480, 366, "THE GAP AI LEAVES OPEN");
badgeList(b3, 16, 62, 448, ["The AI-native firm is weaker on handwritten and regional-language forms", "The voice AI start-up cannot train its models without human labellers", "The Company has 420 exception handlers and multilingual staff in five cities"], { d: 40, pitch: 98, bg: C.good });
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
