# Case Type: M&A and Financial Analysis

The case-type the meta-playbook was calibrated on. All three corpus decks (GCCH 2019/2020/2021) are M&A cases. The patterns described here are observed in the corpus, not extrapolated.

---

## When this case type applies

**Typical prompts:**
- "Should X acquire Y?"
- "Should X and Y merge?"
- "How should X expand inorganically?"
- "Evaluate this potential M&A deal."
- "Should X divest [business unit]?"
- Any case with a specific deal valuation question

**Audience:** Board of directors, CEO, CFO, M&A committee — sophisticated finance audience expecting banker-level rigor.

**Typical deliverable:** 80–100 slide PowerPoint banker pitch.

---

## Section content adaptation

### II. Context = Industry / Market Analysis

Funnel from broad industry trends to the specific gap. Standard sub-topics:
- Industry size and growth (CAGR)
- Disruption forces (technology, regulation, demographics)
- Sub-segment dynamics
- Competitive landscape
- The specific gap that the alternative target fills (foreshadow)

### III. Actors = Acquirer + Target

Each company gets 5–6 parallel slides:
1. Overview (market cap, revenue, segments)
2. Performance trajectory (revenue, margin, share price)
3. Response to the relevant industry trend
4. Strengths and capabilities
5. Challenges and gaps

Then a Strategic Fit sub-section evaluating fit dimensions (R&D, production, brand, geography, tech, sales).

### IV. Quantitative Analysis = Comparables + DCF + Synergies

The three sub-sections in M&A cases:

**A. Comparables:**
- Peer group candidates (4–6 segments)
- MECE filter to retain one peer group
- Trading multiples table (EV/Sales, EV/EBITDA, EV/EBIT, P/E across peers)
- Precedent transaction multiples (scatter chart of comparable deals)
- Conclusion: target is X% over/under-valued by multiples

**B. DCF (Discounted Cash Flow):**
- Forecast 10–15 years of free cash flow
- WACC build (cost of equity via CAPM, cost of debt, target capital structure)
- Three scenarios (Pessimistic / Realistic / Optimistic) with explicit assumptions
- Realistic-case full year-by-year FCF
- Terminal value (perpetual growth method or exit multiple)
- EV-to-equity bridge waterfall: EV − Debt + Cash − Minority interest = Equity value
- Implied share price vs current market price

**C. Synergies:**
- Synergy categorization matrix (Distribution, Production, R&D, Admin, Post-sale, Tech)
- For each: rationale, quantifiable? (Yes / Limited / No)
- Deep-dive on 2–3 quantifiable categories with NPV
- Total synergy NPV

**The Football Field** (slide ~44):
Combines DCF + multiples into a weighted-average fair value. Horizontal bar chart with:
- DCF (50–75% weight)
- Trading multiples — EV/Sales, EV/EBITDA, EV/EBIT (5–10% each)
- Transaction multiples — EV/Sales, EV/EBITDA (5–10% each)
- Innovation multiples — EV/Patents, EV/Engineers (for tech companies, 5% each)
- Current market EV as reference line

### V. Feasibility = Financing + Governance + Regulatory

Standard sub-topics:
1. **Cash deal infeasibility** — show why a 100% cash acquisition fails (insufficient cash, would require debt issuance that downgrades rating)
2. **Stock deal infeasibility** — show why a stock-for-stock merger fails on governance grounds (founder becomes majority shareholder)
3. **Mixed deal** — even a blended cash/stock deal hits one or both problems
4. **Regulatory** — Antitrust (HHI calculations, FTC/DOJ review risk)
5. **Cultural / HR** — integration risks, talent flight
6. **Anti-takeover provisions** — Poison Pill, supermajority voting, dual-class shares

### VI. Recommended Alternative = Alternative Target

Standard sub-sections:
1. **Evaluating alternatives** — Build/Buy/Partner template + 4–8 candidate target shortlist
2. **Deep dive on chosen target** — Overview, asset base, business model, with 2–4 analyst quotes
3. **Financial feasibility** — DCF for the alternative (full template applied), Football field, Pro forma combined entity P&L, EPS accretion/dilution, Debt financing structure (tranches + amortization schedule), Premium calculation

---

## Case-type-specific archetypes

These are M&A-specific. They don't generalize directly to other case types.

### Football Field Valuation
See archetypes.md "N" — the specific layout shows multiple valuation methods with weights, weighted average EV, and current market EV reference line. Output: target is X% over/under-valued.

### Full DCF Model on One Slide (banker-flex)
Year-by-year line items: Revenue, EBITDA margin, EBIT margin, Tax, NOPAT, D&A, Capex, Working capital changes, Unlevered FCF. Plus terminal value calculation and EV-to-equity bridge. High risk (legibility) high reward (signals technical depth). Used by Providentia 2020.

### Sensitivity Matrix (WACC × Terminal Growth)
Two 5×5 matrices showing implied share price and EV across reasonable WACC and growth rate ranges. Used by Providentia 2020 and Kicking A$$ets 2021.

### Pro Forma Combined Entity P&L
Side-by-side comparison of acquirer-alone vs combined entity for 5–7 forecast years. Shows revenue, EBIT, net income with synergies layered in. Used by Providentia 2020.

### EPS Accretion/Dilution Analysis
Table showing per-share earnings forecasts pre- and post-deal with accretion percentages by year. Banker-flex move. Used by Providentia 2020.

### Debt Tranche Structure with Amortization Schedule
Multiple tranches (e.g., Senior Debt A 4.2% / Senior Debt B 4.8% / Senior Debt C 5.0%) with year-by-year amortization. Shows the deal financing in detail. Used by Providentia 2020.

### Premium Decomposition (M&A-specific form)
The "premium" line in the moneyshot waterfall is split into:
- Comparable transaction premium (industry M&A average, e.g., 37.5%, 55%, 46%)
- Company-specific premium (e.g., 10% for Musk's voting power, 10% for Poison Pill)

---

## The M&A Moneyshot

The "destroys $X bn" slide. See archetypes.md "P" for the universal template.

M&A-specific format:
- **Left stack:** Equity value (from DCF) + DCF synergies = Estimated Value of [Target]
- **Right stack:** Market cap + Comparable premium + Company-specific premium = Estimated Purchasing Price
- **Gap:** "Estimated loss on an investment in [Target] equals USD $X.X bn"

Corpus examples:
- Cash Cows 2019: $26.2bn destroyed (Tesla)
- Providentia 2020: $147.7bn destroyed (Netflix)
- Kicking A$$ets 2021: $57.18bn destroyed (AMD)

---

## Common frameworks used in M&A cases

- **DCF** — Discounted Cash Flow. The dominant valuation method. Usually 50–75% weight in the football field.
- **CAPM** — Capital Asset Pricing Model. For cost of equity in WACC.
- **WACC** — Weighted Average Cost of Capital. Discount rate for the DCF.
- **Comparable Multiples** — EV/Sales, EV/EBITDA, EV/EBIT, P/E ratios across peer companies
- **Precedent Transaction Multiples** — multiples from comparable M&A deals
- **Football Field** — combining methods into a weighted-average valuation
- **Synergy NPV** — quantifying the present value of post-deal cost savings + revenue synergies
- **EPS Accretion/Dilution** — per-share earnings impact of the deal
- **Pro Forma Financial Statements** — what the combined entity looks like

---

## M&A-typical acronyms

Beyond the universal ones (EV, NPV, ROI, CAGR, USD, bn, mm, R&D, FY):

DCF, WACC, CAPM, EBITDA, EBIT, NOPAT, FCF, FCFF, FCFE, LTM, NTM, EV/EBITDA, EV/Sales, P/E, P/B, EPS, BPS, ROE, ROA, ROIC, MoM, M&A, IPO, LBO, MBO, JV, SPAC, NDA, LOI, MoU, FTC, DOJ, HHI, SEC, EBITDA-CFC, DD (due diligence), NWC, D&A, CapEx, OpEx.

Industry-specific acronyms (auto, streaming, semiconductors, pharma, banking, FMCG) — add 15–25 per the case sector.

---

## Example contrarian recommendation patterns (from corpus)

| Year | Case | Obvious target | Contrarian alternative | Foreshadow slide | Premium decomposition | Destroyed value |
|---|---|---|---|---|---|---|
| 2019 | GM acquires Tesla? | Tesla | Rivian | "EV pickup gap" slide 14 | 37.5% industry + 10% Musk premium | $26.2bn |
| 2020 | Amazon acquires Netflix? | Netflix | ViacomCBS | "Amazon doesn't do horizontal" slide 19 | 55% control + 10% Poison Pill | $147.7bn |
| 2021 | Nvidia merges with AMD? | AMD | MediaTek | "ASICs displace GPUs" slide 12 | 46% industry only (missed +) | $57.18bn |

**Pattern:** Don't buy the famous one. Buy something less obvious but specifically aligned with the acquirer's strategic gap.

---

## Common M&A failure modes

1. **Defending the obvious target** — accepting the case prompt's framing without stress-testing the contrarian
2. **Premium as a single number** — not decomposed into industry + company-specific
3. **Synergies hand-waved** — not quantified or unrealistically large
4. **DCF without scenarios** — single point estimate
5. **No football field** — only one valuation method shown
6. **No financing analysis** — claims a deal is feasible without showing how it gets paid for
7. **No combined entity pro forma** — what does the merged company look like?
8. **No anti-takeover analysis** — ignoring governance reality
9. **Recasting merger as acquisition without acknowledging** (Kicking A$$ets 2021 did this and got away with it, but it's a risk)

---

## Cross-reference

- Universal structure: `references/structure.md`
- Universal archetypes: `references/archetypes.md`
- Universal rhetoric: `references/rhetoric.md`
- Corpus calibration: `references/gcch_corpus.md`
- **Frameworks for M&A cases** (`references/frameworks.md`): Porter's 5 Forces (industry attractiveness), VRIO + 7 Powers (target's sustainable advantage), BCG Matrix + GE 9-Box (portfolio fit post-deal), 7-S + Galbraith Star (integration design), CAGE Framework (for cross-border deals), DuPont Analysis (financial decomposition), Profit Pool Analysis (where value lives in target's value chain)
