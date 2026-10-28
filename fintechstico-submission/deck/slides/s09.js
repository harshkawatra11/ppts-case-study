{ const s = await figma.getNodeByIdAsync("S9");
hdr(s, 9, V.s8.finding, V.s8.source);
const a1 = panel(s, 64, 352, 900, 320, "8 ASSUMPTIONS BEHIND THE ₹54 LAKH");
addTable(a1, 16, 62, [70, 548, 250], ["ID", "Assumption", "Value"], [["A01", "Annual purchases, reference firm", "₹100 Cr"], ["A02", "Average GST rate on purchases", "18%"], ["A03", "Credit unreconciled at a return date", "1%, 3%, 5%"], ["A04", "Interest on reversed credit", "18% a year"],
  ["A05", "Months before correction", "6"], ["A06", "Cost of working capital", "10% a year"], ["A07", "Months a credit is deferred", "2"], ["A08", "Resolved before filing (target)", "80%"]], { headerH: 34, rowH: 27, name: "TABLE: assumptions", align: ["LEFT", "LEFT", "RIGHT"] });
const a2 = panel(s, 980, 352, 876, 320, "THE ARITHMETIC, LOW TO HIGH (EST.)");
addTable(a2, 16, 62, [380, 150, 150, 164], ["Line", "Low", "Base", "High"], [["Input tax credit a year", "₹18 Cr", "₹18 Cr", "₹18 Cr"], ["Credit at risk", "₹18 lakh", "₹54 lakh", "₹90 lakh"], ["Interest exposure", "₹1.62 lakh", "₹4.86 lakh", "₹8.10 lakh"], ["Working-capital cost", "₹0.30 lakh", "₹0.90 lakh", "₹1.50 lakh"], ["Protected at 80% target", "₹14.4 lakh", "₹43.2 lakh", "₹72.0 lakh"]],
  { headerH: 36, rowH: 40, name: "TABLE: arithmetic", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"], rowFills: [null, C.tint, null, null, null] });
const b1 = panel(s, 64, 688, 820, 266, "12 INJECTED ERRORS, 7,200 OF 60,000");
addTable(b1, 16, 62, [70, 236, 88, 70, 236, 88], ["ID", "Error", "Rate", "ID", "Error", "Rate"], [["D01", "Amount differs", "1.5%", "D07", "Exact duplicate", "0.6%"], ["D02", "Tax value differs", "1.0%", "D08", "Near duplicate", "0.5%"], ["D03", "Old rate used", "1.2%", "D09", "Missing in 2B", "1.5%"],
  ["D04", "Wrong tax head", "0.6%", "D10", "Missing in books", "0.8%"], ["D05", "Date shifted", "1.2%", "D11", "Unpaid 180 days", "0.8%"], ["D06", "Number variant", "1.5%", "D12", "Anomalous pattern", "0.8%"]], { headerH: 34, rowH: 27, name: "TABLE: errors", align: ["LEFT", "LEFT", "RIGHT", "LEFT", "LEFT", "RIGHT"], boldCols: [3] });
const b2 = panel(s, 900, 688, 400, 266, "SIX DESIGN TARGETS");
addTable(b2, 16, 62, [248, 120], ["Measure", "Target"], [["Match precision", "0.98"], ["Match recall", "0.95"], ["Duplicate F1", "0.95"], ["Rate error recall", "0.99"], ["Anomaly top-100", "0.60"], ["50,000 invoices", "60 s"]], { headerH: 34, rowH: 27, name: "TABLE: targets", align: ["LEFT", "RIGHT"] });
const b3 = panel(s, 1316, 688, 540, 266, "SOURCES");
const bib = addText(b3, "Inter", "Semi Bold", 16, C.ink, ["1 Ministry of Finance reply, Lok Sabha, Aug 2025 (PTI)", "2 GSTN nine-year statistics, Jun 2026", "3 GSTN advisory, Invoice Management System, Oct 2024", "4 CGST Rules 37, 37A and 88D", "5 56th GST Council meeting, Sep 2025", "6 GST@8 survey, Deloitte, via Deccan Herald", "7 TallyPrime, Zoho Books, Vyapar TaxOne pages", "8 RBI lending rates release, Jul 2026", "AI tools assisted search, drafting and layout; every figure was checked against its source."].join("\n"), 16, 60, 508, 196, "LEFT", undefined, true); bib.name = "BIBLIO";
soWhat(s, 966, 64, [["Honest scope: ", "A"], [V.s8.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
