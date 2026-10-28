{ const s = await figma.getNodeByIdAsync("S7"); s.children.slice().forEach(c => c.remove());
const B = V.pa.base.cum, D = V.dc, gapBear = V.pa.bear.cum.R - V.pa.bear.cum.S, gapBull = V.pa.bull.cum.R - V.pa.bull.cum.S;
skeleton(s, 5, "6 / 8", "THE RECOMMENDATION: REBUILD TOING AROUND THE TRIP", 820,
  "Rebuilding Toing around the trip is worth " + cr(V.ms.gap_R_S) + " over three years against scaling it as it runs, and still beats a shutdown by " + cr(V.ms.gap_R_K) + " while keeping the customer",
  "Source: Team IdeaForge model: path decomposition (A37 to A42) | Swiggy Q1 FY27 letter | MediaNama (Aug 2026): Swiggy Q1 FY27 earnings call, remarks of Rohit Kapoor | MediaNama (Aug 2026): Eternal and Zomato Now, remarks of Deepinder Goyal");
// A1 moneyshot waterfall with named components
const a1 = panel(s, 64, 318, 780, 382, "3-YEAR RESULT, SCALE AS IT RUNS TO REBUILD (₹ CR, BASE)");
waterfall(a1, 16, 56, 748, 322, [
  { label: "Scale as it runs", value: B.S, kind: "total", color: C.alert, text: fmtN(B.S), textColor: C.alert },
  { label: "Order losses", value: D.order_losses, color: C.good, text: "+" + fmtN(D.order_losses) },
  { label: "Paid installs", value: D.acquisition, color: C.good, text: "+" + fmtN(D.acquisition) },
  { label: "Trade-down", value: D.tradedown, color: C.good, text: "+" + fmtN(D.tradedown) },
  { label: "Opex", value: D.overhead, color: C.good, text: "+" + fmtN(D.overhead) },
  { label: "Migr.", value: D.migration, color: C.alert, text: fmtN(D.migration), textColor: C.alert },
  { label: "Rebuild", value: B.R, kind: "total", color: C.primary, text: (B.R >= 0 ? "+" : "") + fmtN(B.R) }],
  { min: -1900, max: 160, labelH: 62, barW: 74 });
// A2 the moneyshot number
const a2 = layered(s, 868, 318, 460, 382, C.primaryDeep, "CARD: moneyshot");
TL(a2, 20, 16, 22, "THE NUMBER THAT DECIDES IT", { color: C.accent, maxW: 420 });
nm(TL(a2, 20, 56, 72, cr(V.ms.gap_R_S), { family: "Poppins", style: "ExtraBold", color: C.accent, maxW: 420, min: 56 }), "MONEYSHOT");
T(a2, 20, 172, 420, 22, "Three-year gain from rebuilding Toing around the trip instead of scaling it as it runs", { color: C.white });
addRect(a2, 20, 260, 420, 2, C.accent);
RT(a2, 20, 274, 420, 22, [["Bear " + cr(gapBear) + ", bull " + cr(gapBull), "A"], [". Against Kill: " + crp(V.ms.gap_R_K) + " base, " + crp(B.R_ev - B.K) + " with the 6-month gate", ""]], { color: C.white });
// A3 phone mockup of the rebuilt Toing
const ph = phone(s, 1352, 318, 236, 382, "Toing");
TL(ph, 12, 100, 22, "Lunch Drop, 1 PM", { family: "Inter", style: "Bold", maxW: 212 });
TL(ph, 12, 132, 22, "Hostel B gate", { family: "Inter", style: "Semi Bold", maxW: 212 });
TL(ph, 12, 164, 22, "Order by 12:15", { family: "Inter", style: "Semi Bold", color: C.primary, maxW: 212 });
const bt = addFrame(ph, 12, 206, 212, 52, C.primary, C.ink, 2, "BTN"); addText(bt, "Poppins", "Bold", 22, C.white, "₹99, no fee", 0, 0, 212, 52, "CENTER", "CENTER");
const bd = addFrame(ph, 12, 270, 212, 52, C.surface, C.ink, 2, "BTN"); addText(bd, "Poppins", "Bold", 22, C.ink, "Door +₹" + V.A.DOOR_FEE, 0, 0, 212, 52, "CENTER", "CENTER");
// A4 per-order results
[[r1p(V.rd.drop), "Drop order", C.good], [r1p(V.rd.door), "door order", C.good], [r1p(V.rd.blend), "blended", C.primary], [V.ns.toFixed(1), "break-even run", C.primaryDeep]]
  .forEach((k, i) => numCard(s, 1612, 318 + i * 96, 244, 88, k[0], k[1], { size: 30, color: k[2] }));
// Row B: how a Drop order moves
flow(s, 64, 722, 1792, 118, [
  { title: "Order to a slot", sub: "Lunch or dinner window, order 45 min ahead" },
  { title: "Cook to the slot", sub: "Fixed menus at kitchen partners" },
  { title: "One run, 10 meals", sub: "One rider, one 45-minute run" },
  { title: "Pick up at a Drop", sub: "Hostel gate, PG lobby, office desk" },
  { title: "Door, for a fee", sub: "₹" + V.A.DOOR_FEE + " outside Drops, batched in pairs", fill: C.tint }]);
const q = layered(s, 64, 856, 1792, 80, C.tint, "CARD: on the record");
addChip(q, 14, 18, 230, 44, "ON THE RECORD", C.primaryDeep, C.white, 22);
RT(q, 262, 10, 1510, 22, [["“Somebody has to pay.” ", "B"], ["Rohit Kapoor, CEO Food Marketplace, Swiggy, on zero commission (Aug 2026). ", ""], ["Lower prices “funded by lower commissions and delivery fees” make “the revenue gap even more unsustainable.” ", "B"], ["Deepinder Goyal, Eternal (Aug 2026)", ""]]);
soWhat(s, 948, 82, [["Keep Toing a separate app: ", "A"], ["one in three new Toing users was already active on Swiggy, and a separate price point is the fence that keeps ₹700 orders at ₹700", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
