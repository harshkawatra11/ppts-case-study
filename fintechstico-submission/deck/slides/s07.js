{ const s = await figma.getNodeByIdAsync("S7");
hdr(s, 7, V.s6.finding, V.s6.source);
const a1 = panel(s, 64, 352, 900, 292, "7 LAYERS, EACH CHOSEN AGAINST AN ALTERNATIVE");
addTable(a1, 16, 62, [150, 290, 170, 258], ["Layer", "Choice", "Rejected", "Why"], [
  ["Data", "Polars, DuckDB", "pandas alone", "Fast, zero setup"], ["Match", "RapidFuzz, LightGBM", "Rules alone", "Recall on variants"], ["Explain", "Isolation Forest, SHAP", "Deep network", "Reasons per case"],
  ["API", "FastAPI, Pydantic", "Flask", "Typed, WebSocket"], ["Console", "Next.js, Recharts", "Streamlit", "A real product UI"], ["Speech", "Saaras v3, Bulbul v3", "Generic API", "Sarvam: Hindi mix"], ["LLM", "Sarvam 105B or Gemini", "One model", "Swappable"]],
  { headerH: 34, rowH: 27, name: "TABLE: stack", align: ["LEFT", "LEFT", "LEFT", "LEFT"] });
const a2 = panel(s, 980, 352, 876, 292, "WHY A LAYERED MATCHER: 4 OPTIONS, 5 TESTS");
heatmap(a2, 16, 62, ["Rules only", "Fuzzy only", "Layered (ours)", "LLM matcher"], ["Prec.", "Recall", "Clear", "Speed", "Build"], [[5, 2, 5, 5, 5], [3, 4, 3, 4, 4], [5, 5, 4, 4, 3], [4, 4, 2, 1, 3]], { labelW: 200, colW: 88, rowH: 38, headH: 40, scale: HG, min: 1, max: 5, name: "TABLE: options" });
[["Low recall", "R"], ["Low precision", "R"], ["Chosen", "G"], ["Slow to audit", "R"]].forEach((q, i) => ragChip(a2, 664, 62 + 40 + i * 38 + 2, 196, 34, q[0], q[1]));
T(a2, 16, 260, 844, 22, "Team judgement, 1 to 5");
const b1 = panel(s, 64, 660, 640, 294, "DESIGN TARGETS, NOT RESULTS");
[["Match precision", 0.98], ["Match recall", 0.95], ["Duplicate F1", 0.95]].forEach((q, i) => { const y = 64 + i * 74;
  TL(b1, 16, y, 22, q[0], { family: "Inter", style: "Bold" }); gauge(b1, 16, y + 34, 440, 24, q[1], 1, q[1], { color: C.good });
  TL(b1, 476, y + 30, 22, "target " + q[1].toFixed(2), { color: C.good }); });
const b2 = panel(s, 720, 660, 560, 294, "BUILD PLAN: 5 STREAMS, 4 BLOCKS");
gantt(b2, 16, 62, 220, 76, ["B1", "B2", "B3", "B4"], [{ label: "Dataset", bars: [{ s: 0, e: 1 }] }, { label: "Match", bars: [{ s: 0, e: 2 }] }, { label: "Tax, gaps", bars: [{ s: 1, e: 2 }] }, { label: "Anomaly, price", bars: [{ s: 2, e: 3 }] }, { label: "Console, voice", bars: [{ s: 2, e: 4 }] }], { headH: 40, rowH: 36, name: "TABLE: plan" });
const b3 = panel(s, 1296, 660, 560, 294, "CORE OFFLINE, VOICE FALLS BACK");
addTable(b3, 16, 62, [200, 328], ["If this fails", "Hisaab does"], [["Primary LLM", "Second LLM answers"], ["Both LLMs", "Typed query, no model"], ["Speech out", "Answer shown as text"], ["Network", "Core still reconciles"]], { headerH: 36, rowH: 32, name: "TABLE: ladder", align: ["LEFT", "LEFT"] });
RT(b3, 16, 236, 528, 22, [["Ship: ", "B"], ["Docker, GitHub Actions, Vercel, Cloud Run", ""]]);
soWhat(s, 966, 64, [["Buildable: ", "A"], [V.s6.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
