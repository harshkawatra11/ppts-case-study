{ const s = await figma.getNodeByIdAsync("S10");
hdr(s, 10, V.s10.finding, V.s10.source);
const a1 = panel(s, 64, 224, 900, 350, "ASSUMPTIONS BEHIND THE 4.2 H TO 0.4 H");
addTable(a1, 16, 62, [70, 498, 300], ["ID", "Assumption", "Bear, base, bull"], [["A01", "Load shifted on a voluntary ask", "3%, 5%, 10%"], ["A02", "Flexible load deferred", "30%, 50%, 70%"], ["A03", "Capped load that comes off", "85%, 92%, 97%"], ["A04", "Heat, monsoon, mild days", "45, 75, 245"],
  ["P", "Short DTs cut each 15 minutes", "Half, in rotation"], ["P", "Trip rule", "130%, 30 min, 2 h"], ["P", "Load that returns after a cap", "30%"]], { headerH: 36, rowH: 35, name: "TABLE: assumptions", align: ["LEFT", "LEFT", "RIGHT"] });
const a2 = panel(s, 980, 224, 876, 350, "THE RESULT, BEAR TO BULL (SIMULATED)");
addTable(a2, 16, 62, [320, 136, 126, 126, 136], ["Line", "Today", "Bear", "Base", "Bull"], [["Outage h, heatwave day", "4.21", "0.83", "0.40", "0.00"], ["Outage h a year", V.annual.sq, V.annual.bear, V.annual.mid, V.annual.bull], ["Homes cut, heat day", "4,309", "1,244", "593", "0"], ["Transformer trips, day", "32", "0", "0", "0"], ["Cost, ₹ a meter a year", "0", "309", "383", "547"], ["₹ per outage hour avoided", "n/a", "0.26", "0.29", "0.41"]],
  { headerH: 36, rowH: 41, name: "TABLE: results", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT", "RIGHT"], rowFills: [C.tint, null, null, null, null, null] });
const b1 = panel(s, 64, 588, 700, 366, "FIVE HONEST LIMITS");
badgeList(b1, 16, 62, 668, ["The gain is a model estimate on a simulated network", "The product's own Scenario Lab is mixed on unserved energy", "Adapters are simulators; no DISCOM system is connected", "Prototype screens show illustrative data", "No interview, pilot or letter of intent exists"], { d: 40, pitch: 58, bg: C.alert });
const b2 = panel(s, 780, 588, 520, 366, "DEFINITIONS");
addTable(b2, 16, 62, [170, 318], ["Term", "Meaning"], [["Outage hour", "A home with no supply"], ["Cap", "A limit, with an expiry"], ["T0", "Critical, never capped"], ["DT", "Distribution transformer"], ["HES", "Meter head-end system"], ["DR", "Demand response"]], { headerH: 36, rowH: 42, name: "TABLE: terms", align: ["LEFT", "LEFT"] });
const b3 = panel(s, 1316, 588, 540, 366, "SOURCES");
const bib = addText(b3, "Inter", "Semi Bold", 16, C.ink, ["1 CEA, Installed Capacity and LGBR 2026-27", "2 MoP data via Down To Earth, 21 May 2026", "3 EAC-PM working paper, July 2026", "4 CEEW, What Smart Meters Can Tell Us, 2020", "5 CEA smart meter specification, Feb 2020", "6 Rajya Sabha reply on RDSS, July 2026", "7 SEA and GIZ with Eskom, Sept 2024", "8 Bundesnetzagentur, Section 14a EnWG", "9 IEA, Value of Demand Flexibility, Dec 2025", "10 IEEFA-JMK via pv magazine, May 2026", "11 DERC storage tariff orders, 2024 and 2026", "12 Yuva Yodha brief and FAQ, 2026"].join("\n"), 16, 60, 508, 290, "LEFT", undefined, true); bib.name = "BIBLIO";
soWhat(s, 966, 64, [["Sensitivity: ", "A"], [V.s10.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
