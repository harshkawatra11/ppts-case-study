{ const s = await figma.getNodeByIdAsync("S7");
skeleton3(s, 1, "A2", "APPENDIX 2: MODEL, CHECKS AND SHORT FORMS", 760,
  "14 model checks pass; 25 assumptions remain explicit and two scale metrics do not drive the forecast",
  "Source: research sections 4, 20 and 25, Appendices A to F | model harvestbox_model.py, hash " + V.hash + ", 14 of 14 checks",
  RIBX);
// ===== band A =====
const a1 = panel(s, 64, 318, 900, 358, "NINE ASSUMPTIONS THAT MOVE THE ANSWER");
addTable(a1, 16, 56, [90, 470, 308], ["ID", "Assumption", "Value"], V.assum, { rowH: 28, headerH: 32, cellSize: 22 });
const a2 = panel(s, 988, 318, 868, 358, "TERMS AND MODEL DEFINITIONS");
const SF1 = [["CAC", "Customer cost"], ["LTV", "Lifetime value"], ["LTV:CAC", "LTV over CAC"], ["EBITDA", "Pre-I/T/D/A profit"], ["Cr", "10 million"], ["lakh", "100 thousand"], ["KPI", "Tracked metric"]];
const SF2 = [["M3/M12/M24", "Month 3, 12, 24"], ["Y1/Y2", "Year 1, year 2"], ["W1 to W13", "Weeks 1 to 13"], ["pts", "Percent points"], ["p", "1/100 of rupee"], ["Retention", "Zero at 12.6%"], ["Run-rate", "3 months x4"]];
addTable(a2, 16, 56, [135, 260], ["Term", "Meaning"], SF1, { rowH: 36, headerH: 32, cellSize: 22 });
addTable(a2, 419, 56, [180, 215], ["Term", "Meaning"], SF2, { rowH: 36, headerH: 32, cellSize: 22 });
// ===== dashed divider =====
dashedH(s, 64, 683, 1792);
// ===== band B =====
const b1 = panel(s, 64, 690, 640, 258, "TWO SCALE FIGURES NEED CLARIFICATION");
const checkRows = [V.check[2], V.check[3], V.check[4]];
addTable(b1, 16, 56, [180, 125, 165, 100], ["Figure", "Case", "Implies", "Used"], checkRows, { rowH: 54, headerH: 36, cellSize: 22, cellColor: (r, c) => (c === 3 && checkRows[r][3] !== "Used") ? C.alert : C.ink });
// ===== b2: lightweight panel (tornado needs the vertical room a 56px title reserve would cost) =====
const b2f = addFrame(s, 728, 690, 620, 258, C.white, C.ink, 2, "PANEL: tornado");
TL(b2f, 16, 8, 22, "RUN-RATE SENSITIVITY, ₹ CR (base " + n1p(V.torn_base) + ")", { family: "Poppins", style: "Bold", color: C.primary, maxW: 588 });
addRect(b2f, 16, 36, 588, 2, C.ink);
const tItems = V.torn.slice(0, 6).map(t => ({ label: t[0] === "Website conversion" ? "Conversion" : t[0], lo: t[1], hi: t[2], loText: n1p(t[1]), hiText: n1p(t[2]) }));
tornado(b2f, 16, 44, 588, tItems, { base: V.torn_base, labelW: 260, rowH: 34, barH: 18 });

const b3 = panel(s, 1372, 690, 484, 258, "WHERE INPUTS TURN NEGATIVE");
const SHORT = { "Month-3 retention": "Retention", "Website conversion": "Conversion", "Margin levers": "Margin (pts)" };
const beRows = V.beIn.map(r => [SHORT[r[0]] || r[0], r[1].replace(" pts", ""), r[2].replace(" pts", "")]);
addTable(b3, 16, 56, [240, 106, 106], ["Input", "Base", "Flips"], beRows, { rowH: 34, headerH: 32, cellSize: 22 });
soWhat(s, 960, 70, [["Nothing here is primary research: ", "A"], ["no customer interview or pilot has been run, and research Appendix E sets out the validation plan as a plan.", "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }


