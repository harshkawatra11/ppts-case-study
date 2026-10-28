{ const s = await figma.getNodeByIdAsync("S8"); s.children.slice().forEach(c => c.remove());
const R = V.reg, B = V.pa.base.cum;
skeleton(s, 6, "7 / 8", "B4 · THE COMPETITIVE AND REGULATORY READING", 760,
  "Eternal's best reply is to hold back while Toing burns cash and copy the pickup idea once it pays; Rapido Ownly is the sharper threat, and regulation adds only ₹" + (R.coss_toing + R.ka_fee).toFixed(1) + " an order",
  "Source: MediaNama (Aug 2026): Eternal and Zomato Now, Swiggy Q1 FY27 call | Storyboard18 (Sep 2026) | MediaNama and Business Today (2026): Rapido Ownly | Deccan Herald (2026): Karnataka fee | Inc42 (Sep 2025): GST on delivery | Case C10 to C13 | Team IdeaForge model and judgment (payoffs are ordinal)");
// A1 game tree
const a1 = panel(s, 64, 318, 1010, 372, "GAME TREE: SWIGGY'S MOVE, ETERNAL'S BEST REPLY");
const root = layered(a1, 16, 150, 170, 74, C.primaryDeep, "CARD: root"); T(root, 8, 12, 154, 24, "Swiggy", { family: "Poppins", style: "Bold", color: C.accent, align: "CENTER" });
const mv = [["Scale as it runs", C.alert, "Hold back, wait", B.S], ["Kill Toing", C.surface, "Take the students", B.K], ["Rebuild (ours)", C.primary, "Hold, copy Drops", B.R]];
mv.forEach((m, i) => { const y = 64 + i * 100;
  addLine(a1, 186, 187, 250, y + 34, C.ink, 2.5);
  const c1 = addFrame(a1, 250, y, 250, 68, m[1], C.ink, 2, "CARD: move " + (i + 1));
  addText(c1, "Poppins", "Bold", 22, i === 1 ? C.ink : C.white, m[0], 0, 0, 250, 68, "CENTER", "CENTER");
  addArrow(a1, 500, y + 34, 560, y + 34, C.ink, 3, 14);
  const c2 = addFrame(a1, 560, y, 250, 68, i === 2 ? C.tint : C.rivalTint, C.ink, 2, "CARD: reply " + (i + 1));
  addText(c2, "Inter", "Bold", 22, C.ink, "Eternal: " + m[2], 8, 0, 234, 68, "CENTER", "CENTER");
  addArrow(a1, 810, y + 34, 850, y + 34, C.ink, 3, 14);
  const rc = m[3] < 0 ? C.alert : C.good;
  TL(a1, 860, y + 14, 26, (m[3] >= 0 ? "+" : "") + fmtN(m[3]), { family: "Poppins", style: "ExtraBold", color: rc, maxW: 140 }); });
TL(a1, 860, 40, 22, "3-yr ₹ Cr", { family: "Inter", style: "Bold" });
// A2 rival table
const a2 = panel(s, 1098, 318, 758, 372, "WHO ELSE IS AT ₹150 AND BELOW");
addTable(a2, 16, 60, [200, 258, 150, 118], ["Player", "Model", "Pays", "Scale"], [
  ["Toing", "Cut commission", "₹12 fee", "33M wk"],
  ["Rapido Ownly", "0% commission", "₹30 trip", "60k/day"],
  ["Zomato Bistro", "Owned kitchens", "Gold ₹99", "n/d"],
  ["Zomato Now", "Office pods", "Pod pickup", "Pilot"],
  ["99 Store", "Flat price in app", "Core fees", "n/d"]],
  { rowH: 40, headerH: 44, name: "TABLE: rivals", align: ["LEFT", "LEFT", "LEFT", "LEFT"], cellSize: 22 });
RT(a2, 16, 312, 726, 22, [["Read: ", "B"], ["only Ownly and Zomato Now also attack the trip cost, which is our lever", ""]]);
// Row B
dashedH(s, 64, 704, 1792);
const b1 = panel(s, 64, 716, 700, 222, "ETERNAL REPLY PAYOFFS (5 = BEST FOR US)");
heatmap(b1, 16, 54, ["Scale", "Kill", "Rebuild"], ["Hold back", "Race", "Copy Drops"], [[3, 2, 4], [4, 3, 3], [5, 4, 3]],
  { labelW: 176, colW: 168, rowH: 42, headH: 42, scale: HG, min: 1, max: 5, levels: v => v - 1, name: "TABLE: payoffs", corner: "Swiggy move" });
const b2 = panel(s, 788, 716, 620, 222, "REGULATORY COST PER ORDER, ₹ (TOING ₹99)");
vBars(b2, 16, 50, 588, 166, [
  { label: "CoSS", value: R.coss_toing, color: C.orange, text: R.coss_toing.toFixed(2) },
  { label: "CoSS, upper", value: R.coss_toing_gov_basis, color: C.primary, text: R.coss_toing_gov_basis.toFixed(2) },
  { label: "Karnataka", value: R.ka_fee, color: C.rival, text: R.ka_fee.toFixed(2), textColor: C.ink },
  { label: "GST, door", value: R.gst_on_door_fee, color: C.surface, text: R.gst_on_door_fee.toFixed(2) }],
  { min: 0, max: 3.6, valSize: 22, labelH: 40, barW: 90 });
const b3 = layered(s, 1432, 716, 424, 222, C.surfaceAlt, "CARD: reg read");
RT(b3, 16, 14, 392, 22, [["Regulation is ", ""], [R.pct_gov_toing.toFixed(2) + "% of a ₹99 basket", "R"], [" against ", ""], [R.pct_gov_core.toFixed(2) + "% of ₹700", "B"], [". Real, and far smaller than the ₹27 trip loss.", ""]]);
RT(b3, 16, 118, 392, 22, [["Pune (Maharashtra) rules: open item. ", "B"], ["The case names Karnataka only.", ""]]);
soWhat(s, 948, 82, [["The scarce asset is the pickup point: ", "A"], ["Eternal holds back today, so lock hostel, PG and office sites first; the ₹" + V.A.DOOR_FEE + " door fee already prices the trip that Ownly charges ₹30 for", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
