{ const s = await figma.getNodeByIdAsync("S6");
hdr(s, 6, V.s6.finding, V.s6.source);
const a = panel(s, 64, 224, 1792, 310, "SIX LAYERS: DATA GOES UP, COMMANDS COME DOWN ONLY AFTER A HUMAN APPROVES");
[["PEOPLE", ["Home, shop", "Field worker", "JE, AE, regulator"], "LIVE"], ["SURFACES", ["Next.js dashboard", "Two phone apps", "Voice and text ask"], "LIVE"], ["SERVICES", ["FastAPI, 54 routes", "Live event stream", "6 roles, signed login"], "LIVE"],
 ["ENGINES", ["Thermal, optimiser", "Forecast, power flow", "Baseline, fairness"], "LIVE"], ["ADAPTERS", ["DLMS, OCPP", "OpenADR, Beckn", "WhatsApp, IVR, SMS"], "WIRED"], ["RAILS", ["Smart meters", "Chargers, pumps", "Phones"], "PILOT"]].forEach((q, i) => {
  const f = addFrame(a, 16 + i * 296, 60, 280, 186, i === 3 ? C.tint : C.white, C.ink, 2, "CARD: layer " + q[0]);
  TL(f, 12, 4, 24, q[0], { color: C.primary, maxW: 150 }); statusTag(f, 164, 8, q[2]); q[1].forEach((ln, j) => T(f, 12, 56 + j * 40, 256, 22, ln));
  if (i < 5) addArrow(a, 16 + i * 296 + 281, 153, 16 + (i + 1) * 296 - 1, 153, C.ink, 3, 9); });
const st = addFrame(a, 16, 256, 1760, 44, C.surfaceAlt, C.ink, 2, "CARD: flows"); TB(st, 12, 0, 1736, 44, 22, "Money: the DISCOM pays ₹8 a meter a month and a ₹2 a unit rebate to homes that shift; the home pays nothing", { family: "Inter", style: "Bold" });
const b1 = panel(s, 64, 548, 700, 406, "8 ENGINES, EACH WITH ITS OWN TESTS");
const eng = [["Load model", "5 archetypes, weather", "LIVE"], ["Thermal", "IEEE C57.91, steady state", "LIVE"], ["Optimiser", "MILP on HiGHS, fallback", "LIVE"], ["Baseline", "Rotational cut, trips", "LIVE"], ["Forecaster", "LightGBM, 3 quantiles", "WIRED"], ["Power flow", "Radial sweep solver", "WIRED"], ["DR learning", "Beta-Bernoulli", "WIRED"], ["Fairness", "Jain, Gini, Lorenz", "WIRED"]];
addTable(b1, 16, 62, [190, 340, 138], ["Engine", "Method", "Status"], eng, { headerH: 36, rowH: 37, name: "TABLE: engines", align: ["LEFT", "LEFT", "CENTER"], cellColor: (r, c) => c === 2 ? (eng[r][2] === "LIVE" ? C.good : C.primaryDeep) : C.ink, boldCols: [2] });
const b2 = panel(s, 780, 548, 500, 406, "STATUS, COUNTED HONESTLY");
stackH(b2, 16, 62, 468, 50, [{ value: V.status.live, color: C.good, text: "10", textColor: C.white }, { value: V.status.wired, color: C.orange, text: "12" }, { value: V.status.pilot, color: C.rival, text: "6", textColor: C.white }], { minInside: 40 });
[["LIVE", "Runs in the prototype today"], ["WIRED", "Coded, tested on a simulator"], ["PILOT", "Not built: needs a DISCOM"]].forEach((q, i) => { statusTag(b2, 16, 130 + i * 62, q[0]); T(b2, 132, 126 + i * 62, 352, 22, q[1], { family: "Inter", style: "Bold" }); });
T(b2, 16, 322, 468, 22, "Prototype stage: the screens run on illustrative data");
const b3 = panel(s, 1296, 548, 560, 406, "THERMAL MODEL MEETS THE STANDARD");
addTable(b3, 16, 62, [132, 132, 132, 132], ["Load", "Ambient", "Hot-spot", "Ageing"], [["100%", "30 °C", "110.0 °C", "1.0x"], ["120%", "42 °C", "146.1 °C", "29x"]], { headerH: 40, rowH: 44, name: "TABLE: thermal", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"] });
formulaBox(b3, 16, 204, 528, 84, "Hot-spot = ambient + oil rise + winding rise", { chip: "MODEL", chipW: 120 });
formulaBox(b3, 16, 300, 528, 84, "Over 130% for 30 minutes: out for 2 hours", { chip: "TRIP", chipW: 120 });
soWhat(s, 966, 64, [["Conclusively: ", "A"], [V.s6.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
