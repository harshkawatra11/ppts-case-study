{ const s = await figma.getNodeByIdAsync("S3"); s.children.slice().forEach(c => c.remove());
const t = V.t, c = V.c;
const other = t.ins + t.coss + t.pg + t.sup + t.disc + t.tech;
const coreOther = c.coss + c.pg + c.sup + c.disc + c.other + 1 + 1;   // + insurance + tech
skeleton(s, 1, "2 / 8", "B1 · UNIT ECONOMICS OF A TOING ORDER TODAY", 700,
  "A ₹99 Toing order loses about " + r1(t.contrib).replace("−", "") + " before marketing, because a ₹" + t.rider.toFixed(0) + " rider trip sits on ₹" + t.rev.toFixed(0) + " of Swiggy revenue; a ₹700 order clears ₹" + c.ebitda.toFixed(0) + " of EBITDA on the same trip",
  "Source: NSBC case (C01, C04 to C07) | Swiggy Q1 FY27 letter (food CM 7.6% of GOV, segment results) | MediaNama (Sep 2025): ₹12 platform fee, no delivery or packaging fee | Inc42 and Angel One (Sep 2025): 18% GST on delivery under sec 9(5) | Assumptions A01 to A14 (appendix)");
// A1 hero waterfall
const a1 = panel(s, 64, 318, 1000, 350, "WHERE THE CUSTOMER'S ₹" + Math.round(t.cust) + " GOES, AND WHAT SWIGGY KEEPS (₹ PER ORDER)");
waterfall(a1, 16, 56, 968, 290, [
  { label: "Customer pays", value: t.cust, kind: "total", color: C.primaryDeep, text: "₹" + t.cust.toFixed(0) },
  { label: "Restaurant keeps", value: -t.rest_keeps, color: C.surface, text: "−" + t.rest_keeps.toFixed(0) },
  { label: "GST", value: -t.gov_tax, color: C.surface, text: "−" + t.gov_tax.toFixed(1) },
  { label: "Swiggy revenue", value: t.rev, kind: "total", color: C.orange, text: "₹" + t.rev.toFixed(0) },
  { label: "Rider", value: -t.rider, color: C.alert, text: "−" + t.rider.toFixed(0), textColor: C.alert },
  { label: "Other costs", value: -other, color: C.alert, text: "−" + other.toFixed(1), textColor: C.alert, below: true },
  { label: "Contri-bution", value: t.contrib, kind: "total", color: C.alert, text: n1(t.contrib), textColor: C.alert, below: true }],
  { min: -60, max: 125, labelH: 62 });
// A2 side-by-side table
const a2 = panel(s, 1088, 318, 768, 350, "₹99 TOING ORDER VS ₹700 CORE ORDER");
addTable(a2, 16, 60, [320, 200, 216], ["Per order, ₹", "Toing ₹99", "Core ₹700"], [
  ["Swiggy revenue", t.rev.toFixed(1), c.rev.toFixed(1)],
  ["Rider pay", n1(-t.rider), n1(-c.rider)],
  ["Other variable costs", n1(-other), n1(-coreOther)],
  ["Contribution", n1(t.contrib), n1p(c.cm)],
  ["Overheads (core)", "n/a", n1(-c.ovh)],
  ["Adj. EBITDA", "below " + n1(t.contrib), n1p(c.ebitda) + " (3.1%)"],
  ["Rider as % of basket", Math.round(t.rider_pct_gov) + "%", Math.round(c.rider_pct_gov) + "%"]],
  { rowH: 34, headerH: 40, name: "TABLE: toing vs core", boldCols: [], align: ["LEFT", "RIGHT", "RIGHT"],
    cellColor: (r, col) => (col === 1 && (r === 1 || r === 2 || r === 3)) ? C.alert : (col === 2 && (r === 3 || r === 5)) ? C.good : null });
// Formula strip
formulaBox(s, 64, 684, 1792, 60, "Contribution per order = commission + platform fee net of GST + ads − rider pay − insurance − CoSS − payments − support and refunds − coupons − tech", { chip: "FORMULA" });
// Row B
const b1 = panel(s, 64, 760, 560, 176, "WHO KEEPS THE ₹" + Math.round(t.cust));
donut(b1, 90, 116, 54, [{ value: t.rest_keeps, color: C.orange }, { value: t.gov_tax, color: C.surface }, { value: t.rev, color: C.primary }], 0.5);
[["Restaurant ₹" + t.rest_keeps.toFixed(0) + " (" + Math.round(100 * t.rest_keeps / t.cust) + "%)", C.orange],
 ["GST ₹" + t.gov_tax.toFixed(1) + " (" + Math.round(100 * t.gov_tax / t.cust) + "%)", C.surface],
 ["Swiggy ₹" + t.rev.toFixed(0) + " (" + Math.round(100 * t.rev / t.cust) + "%)", C.primary]
].forEach((l, i) => { addRect(b1, 170, 66 + i * 34 + 5, 18, 18, l[1], C.ink, 1.5); TL(b1, 196, 66 + i * 34, 22, l[0], { family: "Inter", style: "Semi Bold", maxW: 350 }); });
const b2 = panel(s, 648, 760, 600, 176, "RIDER PAY AS A SHARE OF THE BASKET");
hBars(b2, 16, 60, 568, [
  { label: "₹99 Toing", value: t.rider_pct_gov, color: C.alert, text: Math.round(t.rider_pct_gov) + "%" },
  { label: "₹149 Toing", value: V.t149.rider_pct_gov, color: C.orange, text: Math.round(V.t149.rider_pct_gov) + "%" },
  { label: "₹700 core", value: c.rider_pct_gov, color: C.primaryDeep, text: Math.round(c.rider_pct_gov) + "%" }],
  { labelW: 150, rowH: 36, barH: 26, valueW: 70, max: 45 });
const b3 = panel(s, 1272, 760, 584, 176, "CHECK AGAINST SWIGGY'S BOOKS");
RT(b3, 16, 60, 552, 22, [["Platform Innovations lost ₹131 Cr in Q1 FY27. ", ""], ["Toing's share (est.): " + cr(-V.tri.t_loss_q), "B"], [" from ~" + V.tri.orders_lakh_day.toFixed(1) + " lakh orders a day: ", ""], [cr(-V.tri.contrib_loss_q) + " per-order losses", "R"], [" + " + cr(-V.tri.acq_q) + " installs", ""]]);
soWhat(s, 948, 82, [["A ₹99 order needs a fuller trip, not a cheaper rider: ", "A"], ["at ₹" + t.rider.toFixed(0) + " a trip the rider alone takes " + Math.round(t.rider_pct_gov) + "% of the basket, so the fix must change how many meals ride together", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
