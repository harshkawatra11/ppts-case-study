{ const s = await figma.getNodeByIdAsync("S7"); const D = V.s7;
hdr(s, 7, D.finding, D.source);
const a1 = panel(s, 64, 224, 900, 350, "EIGHT ASSUMPTIONS THAT MOVE THE ANSWER");
addTable(a1, 16, 60, [76, 500, 292], ["ID", "Assumption", "Value"], D.assume, { headerH: 36, rowH: 31, name: "TABLE: assumptions", align: ["LEFT", "LEFT", "RIGHT"] });
const a2 = panel(s, 980, 224, 876, 350, "LOWEST CASH IF ONE ASSUMPTION GOES WRONG (₹ CR)");
tornado(a2, 16, 100, 844, D.tor, { base: D.tor_base, labelW: 340, rowH: 34, barH: 24, baseLabel: "Base " + D.tor_base.toFixed(1) });
const b1 = panel(s, 64, 588, 640, 366, "ABBREVIATIONS USED IN THIS DECK");
fine(b1, 16, 60, 608, ["AI: artificial intelligence. HC: headcount. TL: team lead.", "BFSI: banking, financial services and insurance.", "QC: quality control (e-commerce catalogue checks).",
  "EBITDA: earnings before interest, tax, depreciation, amortisation.", "Cr: crore, ₹1 Cr is ₹10 million. Lakh: ₹100,000.", "FY: financial year ending 31 March. Run-rate: last 3 months x 4.",
  "M1 to M18: months counted from the board decision.", "P and I: probability and impact. H, M, L: high, medium, low.", "n/s: not stated in the case. LSR: Lady Shri Ram College for Women.",
  "NASSCOM: National Association of Software and Service Companies.", "Clean file: typed, standard-language form an AI engine can read.", "Hard file: handwritten or regional-language form.", "Engine: licensed document AI that reads clean files.",
  "Bench: staff between roles, paid 75% while they retrain.", "Bridge grant: one-off payment to a person leaving for a new job.", "Setu: Hindi for bridge, the name of the recommended programme."].join("\n"), 15);
const b2 = panel(s, 720, 588, 560, 366, "THE FALLBACKS, PRICED");
addTable(b2, 16, 60, [272, 84, 84, 88], ["Sale at month 5", "Low", "Mid", "High"], D.sale, { headerH: 36, rowH: 40, name: "TABLE: sale", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"] });
addTable(b2, 16, 190, [272, 84, 84, 88], ["Wind-down from", "Now", "M3", "M6"], D.wind, { headerH: 36, rowH: 40, name: "TABLE: wind", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"] });
T(b2, 16, 276, 528, 22, D.bear);
const b3 = panel(s, 1296, 588, 560, 366, "SOURCES");
const bib = addText(b3, "Inter", "Semi Bold", 16, C.ink, ["1 Case for Change case brief, LSR Economics Department, 2026", "2 Team model, setu_model.py: base, bear and bull cases", "3 NASSCOM, Technology Sector Strategic Review 2026",
  "4 Industrial Relations Code 2020, in force 21 Nov 2025", "5 Code on Social Security 2020 (gratuity)", "6 Code on Wages 2019 (50% wage rule)", "7 Insolvency and Bankruptcy Code 2016, section 53",
  "8 World Bank, South Asia Development Update, Oct 2025", "9 Klarna statements on human agents, 2025", "10 NASSCOM, data annotation in India, 2021", "11 Sarvam AI and Gnani.ai model releases, 2025 and 2026"].join("\n"), 16, 60, 528, 290, "LEFT", undefined, true); bib.name = "BIBLIO";
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
