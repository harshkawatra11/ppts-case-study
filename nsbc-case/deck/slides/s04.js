{ const s = await figma.getNodeByIdAsync("S4"); s.children.slice().forEach(c => c.remove());
skeleton(s, 2, "3 / 8", "THE UNDER-₹150 CUSTOMER, FROM PUBLIC DATA", 760,
  "Toing found a real under-₹150 customer, 33 million weekly users in a year, and every low-basket model that survived did it by moving the trip cost off the order",
  "Source: Storyboard18 citing CLSA and Sensor Tower (Sep 2026) | Swiggy Q1 FY27 letter | Entrackr and MediaNama on Snacc (Feb 2026) | Case C11 | MediaNama on Ownly (Mar 2026) | Business Today (Jul 2026) | IIFL (Aug 2022) | MediaNama bill comparison (Sep 2025)");
// A1 demand grid
const a1 = panel(s, 64, 318, 620, 330, "DEMAND IS REAL: TOING IN YEAR ONE");
[["33M", "weekly users, Aug 2026"], ["14.5M", "downloads in a quarter"], ["~50", "cities by Q1 FY27"], ["2 in 3", "new users new or dormant"]]
  .forEach((k, i) => { const x = 16 + (i % 2) * 298, y = 62 + Math.floor(i / 2) * 134;
    const f = addFrame(a1, x, y, 286, 124, i === 3 ? C.tint : C.surfaceAlt, C.ink, 1.5, "CELL");
    TL(f, 12, 4, 40, k[0], { family: "Poppins", style: "ExtraBold", color: C.primary, maxW: 262 });
    T(f, 12, 64, 262, 22, k[1]); });
// A2 precedents table (the seed)
const a2 = panel(s, 708, 318, 1148, 330, "WHO LASTED AT LOW BASKET VALUES, AND HOW THEY PAID FOR THE TRIP");
addTable(a2, 16, 60, [300, 520, 296], ["Model", "How the trip was paid for", "Outcome"], [
  ["Snacc (Swiggy)", "A solo trip per snack, micro-kitchens", "Shut within a year"],
  ["Zomato Everyday, Quick", "A solo trip per ₹89 meal or 15-min order", "Both shut May 2025"],
  ["Dunzo 60-min tier", "Batched orders in a slower window", "Saved ₹8 to ₹10 an order"],
  ["Instamart", "Denser stores: ₹5 an order from density", "CM breakeven May 2026"],
  ["Rapido Ownly", "Customer pays ₹30 a trip, 0% commission", "60k orders a day, BLR"],
  ["Zomato Now pods", "Office pickup pods, no doorstep trip", "Pilot, Gurugram"]],
  { rowH: 36, headerH: 40, name: "TABLE: precedents", align: ["LEFT", "LEFT", "LEFT"],
    rowFills: [C.alertTint, C.alertTint, C.tint, C.goodTint, C.goodTint, C.tint] });
// Row B: public-evidence band with rail
dashedH(s, 64, 664, 1792);
addRect(s, 64, 680, 10, 250, C.primary, C.ink, 1.5);
addChip(s, 86, 680, 300, 44, "PUBLIC EVIDENCE", C.primary, C.white, 22);
const b1 = panel(s, 86, 736, 600, 196, "SAME TWO ITEMS, TWO APPS (SEP 2025)");
hBars(b1, 16, 58, 568, [
  { label: "Swiggy bill", value: 486, color: C.primaryDeep, text: "₹486" },
  { label: "Toing bill", value: 346, color: C.primary, text: "₹346" }],
  { labelW: 170, rowH: 40, barH: 28, valueW: 90, max: 500 });
RT(b1, 16, 140, 568, 22, [["29% cheaper: ", "B"], ["lower fee, no packaging or rain fee", ""]]);
const b2 = panel(s, 710, 736, 560, 196, "WHO TOING REACHES (SWIGGY, Q1 FY27)");
stackH(b2, 16, 60, 528, 44, [{ value: 67, color: C.primary, text: "New or dormant 2 in 3", textColor: C.white }, { value: 33, color: C.surface, text: "Active 1 in 3" }], { minInside: 70 });
RT(b2, 16, 116, 528, 22, [["1 in 3 new Toing users was already active on Swiggy, ", ""], ["so a price fence matters", "B"]]);
const b3 = panel(s, 1294, 736, 562, 196, "DOWNLOADS IN THE QUARTER (M)");
hBars(b3, 16, 56, 530, [
  { label: "Toing", value: 14.5, color: C.primary, text: "14.5" },
  { label: "Zomato", value: 12.4, color: C.rival, text: "12.4" },
  { label: "Swiggy", value: 10.1, color: C.primaryDeep, text: "10.1" }],
  { labelW: 120, rowH: 34, barH: 24, valueW: 70, max: 16 });
RT(b3, 16, 162, 530, 22, [["Zomato still has more daily users", ""]]);
soWhat(s, 948, 82, [["The seed of our answer: ", "A"], ["the models that lasted made the trip cheaper or made the customer pay for it; the ones that closed paid a full trip for a small basket", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
