const V = {
  // Slide 2 facts (F01 to F07, F21); numerals are display strings, series are plain numbers
  evasion5y: "₹7.08 lakh Cr",            // F01
  itc5y: "₹1.79 lakh Cr",               // F02
  itcCases: "44,938",                   // F02
  evasionCases: "91,370",               // F01
  taxpayers: "1.67 Cr",                 // F07
  itcByYear: [["FY21", 31233], ["FY22", 28022], ["FY23", 24140], ["FY24", 36374], ["FY25", 58772]], // F03
  itcJump: "+62% in one year",          // derived from F03: 58,772 / 36,374 = 1.616
  itcMultiple: "FY25 is 2.4 times FY23", // derived: 58,772 / 24,140 = 2.43
  matchPain: [["2023 survey", 64], ["Latest survey", 37]], // F21 (CORRECTED at V0: year label of the 37% unconfirmed)
  // Slide 4 and 7 moneyshot (assumptions A01 to A08, plan section 12.2)
  moneyshot: "₹54 lakh",
  risk: { low: 18, base: 54, high: 90 },       // Rs lakh per Rs 100 Cr of purchases
  protect: { low: 14.4, base: 43.2, high: 72.0 }, // at the 80% design target (A08)
  example: [["Blocked", 90000], ["Interest", 8100], ["Capital", 3000]], // worked invoice, plan 7.3, total 101100
  // Slide 5 dataset (plan section 8)
  families: [["Amount, tax value", 2.5], ["Rate, tax head", 1.8], ["Date shift", 1.2], ["Number variant", 1.5], ["Duplicates", 1.1], ["Missing, unpaid", 3.1], ["Anomalies", 0.8]],
  // Parity (V0, VA-2): Yes, Part, No, n/s (not stated on the vendor page). Columns: Portal+IMS, Tally, SaaS, Sheet+CA, Hisaab (design)
  parityRows: ["Matches invoice to return", "Three-way with bank, ledger", "Verifies rate by HSN, date", "Finds duplicates", "Flags anomalies, with reasons", "Prices each exception", "Ranks by deadline, owner"],
  parity: [["Yes","Yes","Yes","Part","Yes"], ["n/s","Part","n/s","Part","Yes"], ["n/s","Part","n/s","No","Yes"], ["n/s","Part","Part","No","Yes"], ["n/s","n/s","n/s","No","Yes"], ["n/s","Part","n/s","No","Yes"], ["n/s","n/s","n/s","No","Yes"]],
  // Slide 2 table rows: Matches rows, Checks rate, Prices it, Ranks it
  tools2: [["GST portal + IMS","Yes","n/s","n/s","n/s"], ["TallyPrime","Yes","Part","Part","n/s"], ["Compliance SaaS","Yes","n/s","n/s","n/s"], ["Sheet + CA firm","Part","No","No","No"]],
  s8: {
    finding: "Every figure in this deck traces to one of 20 sources or 11 stated assumptions; nothing is built, so every performance number is a design target",
    sowhat: "the 1% to 5% band is assumed, n/s cells were not stated on public pages, and no interview has been run",
    source: "Source: Team IdeaForge research notes and verification log, 3 Oct 2026" },
  trend: { labels: ["FY21", "FY22", "FY23", "FY24", "FY25"], evasion: [0.49, 0.73, 1.32, 2.30, 2.23], itc: [0.31, 0.28, 0.24, 0.36, 0.59] },
  s2: {
    finding: "ITC fraud detected rose 62% in a year to ₹58,772 Cr in FY25, yet the tools a finance team uses match and flag but do not state a rupee price or deadline rank per mismatch",
    sowhat: "the tools report what does not match; none states a rupee price or says what to fix before the 20th",
    source: "Source: Ministry of Finance reply, Lok Sabha (Aug 2025) | GSTN statistics (Jun 2026) | Deloitte GST survey as reported by Deccan Herald | CGST Rule 88D | Vendor product pages | Team IdeaForge analysis" },
  s3: {
    finding: "Two members cover tax logic, data and build: each of the 8 Hisaab modules has a named owner and a first deliverable for the prototype round",
    sowhat: "one owner per module, and the engine is built before any model touches it",
    source: "Source: Team IdeaForge build plan (design stage)" },
  s4: {
    finding: "Hisaab gives every mismatch a rupee value, an owner and a date, so the ₹54 lakh of credit at risk per ₹100 Cr of purchases is fixed costliest first",
    sowhat: "the accountant opens a queue sorted by rupees and days left, not a list of unmatched rows",
    source: "Source: Team IdeaForge worked example, assumptions A01 to A08 (est.) | CGST Rules 37 and 37A | Console values are the synthetic dataset design, not results" },
  s5: {
    finding: "One pipeline of six stages covers all 7 capabilities, 7,200 injected errors make each one measurable, and the language model only reads back what the engine computed",
    sowhat: "one pipeline, seven capabilities, labelled errors, and a model that never computes money",
    source: "Source: Team IdeaForge design | Dataset rates are design choices (assumption A09) | Thresholds 0.92 and 0.80 are design values" },
  s6: {
    finding: "An open-source core that runs on one laptop, with Sarvam speech and a swappable Sarvam 105B or Gemini model on top: 7 layers, each chosen against an alternative",
    sowhat: "the core needs no key and no network; the voice layer is one interface with two models behind it",
    source: "Source: Team IdeaForge design | Model comparison is team judgement | CGST Rules 37, 37A and 88D" },
  s7: {
    finding: "Hisaab is designed to price each exception and rank it by deadline, which no compared option states; at an 80% target it protects ₹43 lakh per ₹100 Cr of purchases",
    sowhat: "build Hisaab as the layer that prices and ranks exceptions, on top of matching that is already free",
    source: "Source: Vendor product pages (Oct 2026) | GSTN e-invoice statistics (Oct 2025) | Team IdeaForge assumptions A03, A08, A10, A11 (est.) | Hisaab column is a design, not a product" }
};
