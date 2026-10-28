{ const s = await figma.getNodeByIdAsync("S6");
hdr(s, 6, V.s5.finding, V.s5.source);
const a = panel(s, 64, 352, 1792, 280, "SIX STAGES, ONE PASS: FROM FILES TO A PRICED QUEUE");
[["INGEST", ["Books CSV", "Bank file", "GSTR-2B JSON"]], ["NORMALISE", ["GSTIN check", "Invoice no. clean", "Date, period"]], ["MATCH", ["Exact keys", "Fuzzy keys", "Pair classifier"]],
 ["VERIFY TAX", ["Dated rate master", "Tax head", "Rounding"]], ["DETECT", ["Duplicates", "Gaps", "Anomalies"]], ["PRICE, ACT", ["Rupees at risk", "Owner, date", "Queue, voice"]]].forEach((q, i) => {
  const f = addFrame(a, 16 + i * 296, 60, 280, 150, i === 5 ? C.tint : C.white, C.ink, 2, "CARD: stage " + q[0]);
  TL(f, 12, 4, 24, q[0], { color: C.primary, maxW: 256 }); q[1].forEach((ln, j) => T(f, 12, 46 + j * 32, 256, 22, ln));
  if (i < 5) addArrow(a, 16 + i * 296 + 281, 135, 16 + (i + 1) * 296 - 1, 135, C.ink, 3, 9); });
const st = addFrame(a, 16, 222, 1760, 44, C.surfaceAlt, C.ink, 2, "CARD: store"); TB(st, 12, 0, 1736, 44, 22, "FastAPI services over DuckDB tables: books, bank, returns, rate master, labels, exceptions", { family: "Inter", style: "Bold" });
const b1 = panel(s, 64, 648, 430, 306, "7 ERROR FAMILIES, 12%");
const fl = ["Amount, tax", "Rate, head", "Date shift", "Number variant", "Duplicates", "Missing, unpaid", "Anomalies"];
hBars(b1, 16, 62, 398, V.families.map((f, i) => ({ label: fl[i], value: f[1], text: f[1].toFixed(1) + "%", color: i === 5 ? C.alert : C.primary })), { labelW: 200, rowH: 33, barH: 22, valueW: 70, max: 3.2 });
const b2 = panel(s, 510, 648, 430, 306, "60,000 INVOICES, 9 TABLES");
addTable(b2, 16, 62, [250, 148], ["Entity", "Rows"], [["purchase_invoice", "36,000"], ["sales_invoice", "24,000"], ["bank_transaction", "58,000"], ["ledger_entry", "1,20,000"], ["return_2b", "35,000"], ["vendor", "400"], ["rate_master", "200"]], { headerH: 34, rowH: 27, name: "TABLE: entities", align: ["LEFT", "RIGHT"] });
const b3 = panel(s, 956, 648, 430, 306, "RULES, MODEL, THEN HUMAN");
[["Exact keys agree: matched", C.goodTint], ["Fuzzy 0.92+: matched, flagged", C.tint], ["Classifier 0.80+: suggested", C.tint], ["Else: human, by ₹ at risk", C.alertTint]].forEach((q, i) => {
  const f = addFrame(b3, 16, 62 + i * 58, 398, 46, q[1], C.ink, 2, "CARD: tier " + (i + 1)); TB(f, 8, 0, 382, 46, 22, q[0], { family: "Inter", style: "Bold", align: "CENTER" });
  if (i < 3) addArrow(b3, 215, 62 + i * 58 + 47, 215, 62 + (i + 1) * 58 - 1, C.ink, 3, 7); });
const b4 = panel(s, 1402, 648, 454, 306, "VOICE READS THE ENGINE");
[["Mic: Hindi or English", C.white], ["STT: Sarvam Saaras v3", C.white], ["LLM: Sarvam 105B or Gemini", C.tint], ["Tools call the engine", C.goodTint], ["TTS: Sarvam Bulbul v3", C.white]].forEach((q, i) => {
  const f = addFrame(b4, 16, 62 + i * 48, 422, 40, q[1], i === 2 ? C.primary : C.ink, i === 2 ? 3 : 2, "CARD: voice " + (i + 1)); TB(f, 8, 0, 406, 40, 22, q[0], { family: "Inter", style: "Bold", align: "CENTER" });
  if (i < 4) addWireV(b4, 227, 62 + i * 48 + 40, 62 + (i + 1) * 48, C.ink, 3); });
soWhat(s, 966, 64, [["Conclusively: ", "A"], [V.s5.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
