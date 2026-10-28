{ const s = await figma.getNodeByIdAsync("S9");
hdr(s, 9, V.s9.finding, V.s9.source);
const a1 = panel(s, 64, 224, 1008, 350, "SIX WEEKS: SHADOW, SOFT LEVERS, LIFELINE, WAVES");
gantt(a1, 16, 62, 330, 106, ["W1", "W2", "W3", "W4", "W5", "W6"], [
  { label: "Shadow mode, read only", bars: [{ s: 0, e: 2, text: "No dispatch" }] }, { label: "Levers 1 to 3 live", bars: [{ s: 2, e: 4, text: "DR, charging" }] },
  { label: "Lifeline caps live", bars: [{ s: 4, e: 5, color: C.orange, text: "L5", textColor: C.ink }] }, { label: "Four more sub-divisions", bars: [{ s: 5, e: 6, text: "Waves" }], marks: [{ at: 5 }] },
  { label: "T0 registry, field staff", bars: [{ s: 0, e: 5, color: C.good, text: "Verified before caps" }] }, { label: "Regulator view", bars: [{ s: 0, e: 6, color: C.rival, text: "Aggregates only" }] }], { headH: 40, rowH: 40, name: "TABLE: pilot" });
const a2 = panel(s, 1088, 224, 768, 350, "WHO OWNS, RUNS AND PAYS");
const R9 = [["A", "C", "I", "C", "I"], ["A", "R", "I", "C", "I"], ["A", "I", "R", "C", "I"], ["A", "I", "I", "I", "C"], ["C", "I", "I", "R", "A"]];
heatmap(a2, 16, 62, ["Approve a plan", "Keep T0 registry", "Connect head-end", "Pay fee, rebates", "Audit outcomes"], ["DISCOM", "Field", "AMISP", "Team", "SERC"], R9.map(r => r.map(c => c === "A" ? 5 : (c === "R" ? 4 : (c === "C" ? 2 : 1)))),
  { labelW: 230, colW: 102, rowH: 42, headH: 44, scale: HG, min: 1, max: 5, fmt: (v, i, j) => R9[i][j], name: "TABLE: raci" });
T(a2, 16, 322, 736, 22, "A accountable, R does it, C consulted, I informed");
const b1 = panel(s, 64, 588, 560, 366, "FROM WIRED TO LIVE: 5 LINKS");
addTable(b1, 16, 62, [196, 150, 182], ["Rail", "Today", "Pilot needs"], [["Head-end", "Simulator", "Vendor API"], ["Chargers", "Simulator", "OCPP to hubs"], ["Public loads", "Simulator", "OpenADR link"], ["Messaging", "Mock", "Business API"], ["Backend", "Not live", "Cloud host"]], { headerH: 40, rowH: 48, name: "TABLE: links", align: ["LEFT", "LEFT", "LEFT"] });
const b2 = panel(s, 640, 588, 640, 366, "6 RISKS, EACH WITH ONE MITIGATION");
addTable(b2, 16, 62, [250, 44, 44, 270], ["Risk", "P", "I", "Mitigation"], [["Cap seen as ration", "M", "H", "Floor, rotation"], ["Missed command", "H", "H", "Ack check, shadow"], ["Partial coverage", "H", "M", "Saturated DTs first"], ["Unlisted T0 home", "M", "H", "Field registry, JE"], ["Prepaid mistrust", "M", "H", "Postpaid, 2 h notice"], ["Model is wrong", "M", "M", "Pilot measures first"]],
  { headerH: 36, rowH: 42, name: "TABLE: risks", align: ["LEFT", "CENTER", "CENTER", "LEFT"], cellColor: (r, c) => (c === 1 || c === 2) ? C.alert : C.ink, boldCols: [1, 2] });
const b3 = panel(s, 1296, 588, 560, 366, "VALIDATION PLAN, NOT YET RUN");
addTable(b3, 16, 62, [200, 60, 268], ["Who", "n", "The question"], [["JE and AE", "6", "Would you approve it"], ["Households", "20", "Is 300 W for 2 h fair"], ["Shop owners", "10", "What must stay on"], ["HES vendor", "2", "The command path"]], { headerH: 40, rowH: 46, name: "TABLE: validation", align: ["LEFT", "CENTER", "LEFT"] });
RT(b3, 16, 300, 528, 22, [["No interview is claimed as done. ", "R"], ["4 of 48 transformers still need an upgrade", "B"]]);
soWhat(s, 966, 64, [["Next: ", "A"], [V.s9.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
