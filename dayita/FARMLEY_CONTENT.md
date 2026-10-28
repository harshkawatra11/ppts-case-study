# FARMLEY — Pumpkin Seeds GTM — locked content + evidence ledger

Author: **Dayita Arora**. Source files (only two, per scope decision): `Port Data Analysis
Task (07.08.2026).xlsx` (raw 726-row sheet + problem statement) and
`Pumpkin_Seeds_Data_Analysis_report.xlsx` (cleaning + pivots, `Final Clean Data` n=440) plus
`Pumpkin_Seeds_Data_Analysis_Report.docx` (narrative report). No external research. Nothing
reaches a slide unless it is in Part A below.

---

## Part A — Evidence ledger

### T1 — read directly off the workbook (sheet + location cited)

| # | Figure | Value | Source |
|---|---|---|---|
| A1 | Raw data rows | 724 | `Cleaning Summary` |
| A2 | Raw data columns | 54 | `Cleaning Summary` |
| A3 | Exact duplicate rows | 0 | `Cleaning Summary` |
| A4 | Final edible-pumpkin-seed rows | 440 | `Cleaning Summary` |
| A5 | Excluded rows | 284 | `Cleaning Summary` |
| A6 | Manual classification review rows | 9 | `Cleaning Summary` / `Manual Review` sheet |
| A7 | Missing Rate Currency in final data | 5 | `Cleaning Summary` |
| A8 | Potential duplicate rows in final data | 10 | `Cleaning Summary` / `Potential Duplicates` sheet |
| A9 | Final analysis columns | 25 | `Cleaning Summary` |
| A10 | FOB value by year 2022–25 | $40,630 / $105,465 / $247,325 / $385,941 | `Analysis` rows 4–7 |
| A11 | Grand total FOB value | $779,361 | `Analysis` row 8 |
| A12 | Volume by year 2022–25 (kg) | 10,282 / 20,158 / 90,835 / 205,573 | `Analysis` rows 16–19 |
| A13 | Grand total volume | 326,848 kg | `Analysis` row 20 |
| A14 | Average of Standard Unit Rate by year | $6.27 / $6.13 / $4.33 / $5.34 | `Analysis` rows 27–30 |
| A15 | Exclusion reasons (counts) | sowing/planting 206, processed/non-food derivative 59, explicitly non-seed 9, mixed/other food 6, medicinal/botanical 4 | `Excluded Rows` sheet, column A tally |
| A16 | Country-of-destination table (value, volume, shipments) — all 36 countries | see Appendix table | `Analysis` rows 41–77 |
| A17 | Top consignees pivot (value, volume, count) — 162 rows incl. Grand Total | `Analysis` rows 157–319 |
| A18 | Top shippers pivot (value, volume, count) — 109 rows incl. Grand Total | `Analysis` rows 755–865 |
| A19 | Consignee × Shipper value matrix (full cross-tab) | `Analysis` rows 991–1246 |
| A20 | Price vs Country pivot (avg of standard unit rate, unweighted) | `Analysis` rows 1166–1202 |
| A21 | HS Code split (value, qty) — direct from `Final Clean Data` column groupby | computed from `Final Clean Data`, cols C (HS Code), J (Estimated FOB), G (Standard Qty) |
| A22 | Shipment mode split (Sea/Road/Air) | computed from `Final Clean Data` column O (Shipment mode) |
| A23 | Port of Origin ranking | computed from `Final Clean Data` column N (Port of Origin) |
| A24 | Date range of clean data | 2022-01-05 to 2025-10-31 | computed from `Final Clean Data` column A |

### T2 — derived, arithmetic shown on-slide

| # | Figure | Value | Formula |
|---|---|---|---|
| B1 | Realized price $/kg, by year | $3.95 / $5.23 / $2.72 / $1.88 (2022–25) | Σ FOB Value ÷ Σ Standard Qty, per year, from `Final Clean Data` |
| B2 | Realized price decline 2022→2025 | −52.4% | (1.88−3.95)/3.95 |
| B3 | YoY value growth | +159.6% (23), +134.5% (24), +56.0% (25) | `Analysis` col D, restated |
| B4 | YoY volume growth | +96.0% (23), +350.6% (24), +126.3% (25) | `Analysis` col D of volume pivot |
| B5 | Nepal share of value / volume | 53.0% / 69.9% | Nepal row ÷ Grand Total, `Analysis` row 41 vs row 77 |
| B6 | Nepal realized price by year | 2023 $6.05 → 2024 $1.98 → 2025 $1.55 | Nepal-filtered Σ FOB ÷ Σ Qty per year, `Final Clean Data` |
| B7 | Rest-of-world realized price by year | 2022 $3.95 → 2023 $4.80 → 2024 $4.61 → 2025 $2.91 | non-Nepal filtered Σ FOB ÷ Σ Qty per year |
| B8 | STARAGRO CROP — value share | 35.4% of total FOB | $275,698 / $779,361 |
| B9 | STARAGRO CROP — volume share | 49.4% of total volume | 161,375 / 326,848 kg |
| B10 | STARAGRO CROP — profile | 111 shipments, 100% Nepal, 100% Road, realized $1.71/kg | filtered `Final Clean Data` rows where Shipper = STARAGRO CROP |
| B11 | Top-5 shipper concentration | 63.4% of value | Σ(top 5 shippers) / $779,361 |
| B12 | Top-10 shipper concentration | 78.0% of value | Σ(top 10 shippers) / $779,361 |
| B13 | Unique shipper / consignee counts | 111 shippers, 168 consignees | distinct count, `Final Clean Data`, post name-normalisation |
| B14 | "Z To Order and NA" consignee share | 21.3% of total value ($166,052) | $166,052 / $779,361 |
| B15 | HS 2008 (prepared/preserved) share | 83.9% of value ($653,509), 343 shipments | HS-code-prefix groupby |
| B16 | HS 1207/1212/1206/1209 (raw seed) share | 12.9% of value ($100,582), 81 shipments | HS-code-prefix groupby |
| B17 | Origin port ranking | Raxaul $344,090 > JNPT $144,997 > Mundra $120,464 | groupby Port of Origin |
| B18 | Monthly seasonality index (calendar-month regrouped, all years pooled) | Jul 12.3%, Sep 12.5%, Aug 12.1% of volume (Jul–Sep = 36.9%); Oct 5.4%, Nov 3.9%, Dec 6.6% (Oct–Dec = 15.9%) | Σ volume by calendar month ÷ total volume — corrects the workbook's per-date (not per-month) `Seasonality` pivot rows 325–751, which explode dates into ~280 separate rows and never re-aggregate to 12 months |
| B19 | Realized-price premium corridors | UK $5.41/kg (33 shp) · Singapore $6.25/kg (25 shp) · New Zealand $7.46/kg (10 shp) · Mauritius $4.19/kg (17 shp) · Dominican Rep. $5.36/kg (4 shp) | Σ FOB ÷ Σ Qty per country, `Final Clean Data` |
| B20 | Top-5×5 Consignee×Shipper matrix, name-normalised | see Part C, S5 | normalise both name columns (strip Pvt/Ltd/LLC/Inc/&/legal suffixes, case-fold), re-aggregate the cross-tab — corrects the raw `Analysis` cross-tab (rows 991+), which double-counts identical buyers/sellers under >1 spelling, e.g. "JSS International" vs "J S S INTERNATIONAL", "BS TRIX Pvt Ltd" vs "B S Trix Pvt. Ltd.", "Gandhi Oriental Foods Ltd" vs "Ltd." |
| B21 | Named target-account profiles | Gandhi Oriental Foods Ltd (UK corridor, $55,573, 10,428kg, $5.33/kg) · Omega Traders (Sri Lanka, $34,644, 17,000kg, $2.04/kg) · Aussee Oats Milling Pvt Ltd (Sri Lanka/AU, $16,913, 2,460kg, $6.88/kg) · Bhat Bhateni Food Products (Nepal — premium retail, $24,708, 4,225kg, $5.85/kg) · Down to Earth Foods Ltd (New Zealand, $3,254, 450kg, $7.23/kg) | name-normalised roll-up, `Final Clean Data` |

### T3 — interpretation, explicitly labelled on-slide as inference, not fact

| # | Statement | Basis | Label used on slide |
|---|---|---|---|
| C1 | Nepal's volume pattern (100% road freight, origin concentrated at the Raxaul land border, single-operator-dominated, 21% of value masked as "Z To Order") is consistent with a transit/re-export or bulk-arbitrage trade rather than a branded end-consumer market. | B10, B17, B14, B6 taken together | tagged `INFERRED` |
| C2 | "Trade seasonality" (B18) reflects shipment timing, not verified consumer demand seasonality — the dataset is trade records, not retail sell-through. | stated directly in `.docx` §11, carried forward | tagged `TRADE DATA, NOT DEMAND DATA` |
| C3 | Locked bilateral corridors (B20: only 6 of 25 top-5×5 cells populated) suggest switching costs / relationship exclusivity between named shippers and consignees, not open competitive bidding. | B20 | tagged `INFERRED` |

### CUT — explicitly not used, with reason

| Item | Reason for cut |
|---|---|
| Farmley's own revenue, margins, current export book | Not in either supplied file; scope is dataset-only per confirmed decision |
| TAM/SAM/SOM in ₹ or market-research-sourced global pumpkin seed trade size | No external market-sizing source permitted in this build |
| Retail shelf prices in destination markets | Not in dataset; only FOB/export-transaction prices are known |
| Price-vs-Country ranking as a headline claim (e.g. "Sierra Leone $28.10/kg is the top price market") | `Analysis` rows 1166+ — Sierra Leone rests on a handful of shipments; workbook itself doesn't show shipment count on this pivot. Recomputed n for Sierra Leone from `Final Clean Data`: extremely thin sample. Demoted to appendix with explicit `n=` flag, never used to prioritise a market |
| Tariff rates, FSSAI/import regulatory detail, DGFT policy | Not present in either file; would require external research, out of scope |
| Any FX/₹ conversion of FOB figures | Data is natively USD; CLAUDE.md's India-first ₹ convention is voided for this deck (see build prompt §0a) — converting would fabricate an assumed FX rate not present in the source |

---

## Part B — Recomputation log (the "process" deliverable)

The brief states explaining the process matters more than a "correct" answer. Three places
this build corrects the supplied workbook's pivots, each shown before → after:

**1. Unweighted average price → realized (volume-weighted) price.**
The `Analysis` sheet's "Average of Standard Unit Rate $" pivot (A14) weights every shipment
equally regardless of size — a 10kg parcel counts the same as a 5,000kg truckload. Recomputing
as Σ FOB Value ÷ Σ Standard Qty per year (B1) shows realized price falling 52% while the
unweighted average shows near-stability ($6.27→$5.34, only −14.9%). The `.docx` itself (§7)
flags this as a needed supplementary metric; this build computes it and treats it as the
headline, not a footnote.

**2. Per-date seasonality pivot → true calendar-month seasonality.**
The workbook's `Seasonality` section (`Analysis` rows 322–751) has ~280 rows because it treats
every individual shipment date as its own row (2022-09-01, 2022-09-02, 2022-09-03…) rather than
grouping to 12 months. Regrouped by calendar month across all years (B18), the real pattern is
a Jul–Sep peak (36.9% of volume) and an Oct–Dec trough (15.9%) — invisible in the raw pivot.

**3. Raw entity-name strings → normalised consignee/shipper rollups.**
Both cross-tab pivots (`Analysis` rows 154+ consignees, 752+ shippers, 991+ cross-tab) treat
"JSS International", "J S S INTERNATIONAL" and "J S S International" as three different buyers,
and similarly for shipper spelling variants. Normalising (case-fold, strip legal suffixes
Pvt/Ltd/LLC/Inc/PLC/HUF/&/"and", collapse whitespace) and re-aggregating changes the ranked
top-5 lists and raises J S S International from a fragmented middle-tier buyer to the #1
identifiable consignee at $63,168 (B20/B21). Before/after for the top consignee, unnormalised
vs normalised:

| Raw label (workbook) | Raw value | | Normalised entity | Normalised value |
|---|---|---|---|---|
| JSS International | $48,248 | → | **J S S INTERNATIONAL** | **$63,168** |
| J S S INTERNATIONAL | $14,920 | | | |

---

## Part C — Slide copy (S1–S8)

### S1 — Cover
- Title: **"Pumpkin Seeds Export Data — A Go-to-Market Analysis for Farmley"**
- Subtitle (contrarian framing, action-title style): **"The market grew 9.5×. Realized price fell 52%. Don't chase the volume."**
- Three chips: `440 clean shipment records` · `$779,361 recorded FOB trade, 2022–25` · `Realized price −52% since 2022`
- Byline: **Dayita Arora**
- No ribbon.

### S2 — Method & Data Integrity
- Ribbon: `Method · Market · Geography · Competition · GTM`, active index 0.
- Section chip: **"724 raw records → 440 defensible ones — the cleaning logic, shown"**
- Funnel strip: 724 raw → 284 excluded → 440 final (25 of 54 columns retained).
- Exclusion table (A15): sowing/planting seed 206 · processed/non-food derivative 59 ·
  explicitly non-seed 9 · mixed/other food product 6 · medicinal/botanical 4.
- Disclosure card (not deleted, flagged): 9 manual-review rows (HS 1209 sowing-code vs.
  explicit "for human consumption" wording in the description) · 10 potential-duplicate rows
  retained pending verification · 5 rows with missing Rate Currency, not imputed.
- Layered-card callout: **"3 corrections made to the source pivots"** — realized price (B1),
  calendar-month seasonality (B18), normalised entity rollups (B20) — "detailed in the
  appendix."
- Framework tag: MECE scope decomposition.
- Source: `Port Data Analysis Task 2022-25, Data Sheet-Pumpkin Seeds n=724 | Cleaning Summary, Excluded Rows, Manual Review sheets`

### S3 — Market Size & the Price Correction (MONEYSHOT)
- Ribbon active index 1.
- Section chip: **"$779K in recorded trade. But every dollar of growth bought cheaper kilos."**
- Band 1 rail "THE HEADLINE": value + volume dual bars 2022–25, YoY pills (+159.6%, +134.5%,
  +56.0% value; +96.0%, +350.6%, +126.3% volume).
- Band 2 rail "THE CORRECTION": two-line chart — unweighted avg rate (near-flat, $6.27→$5.34)
  vs. realized $/kg (falling $3.95→$1.88) — dashed marker + on-plot callout **"−52% realized,
  on 9.5× the volume."** Formula callout box: `Realized $/kg = Σ FOB Value ÷ Σ Standard Qty`.
- Band 3 rail "THE TIMING": 12-month volume-index strip, Jul–Sep shaded (36.9% of annual
  volume), labelled **"trade shipment seasonality, not verified consumer demand"** (C2).
- Framework tag: volume/price/mix decomposition.
- Source: `Analysis sheet rows 3-31 (recomputed) | Final Clean Data n=440`

### S4 — Geography: Where the Volume Went vs. Where the Money Is
- Ribbon active index 2.
- Section chip: **"Nepal is 70% of the kilos and the cheapest kilo in the dataset"**
- Country table, top 8 by value, columns: FOB $ · % of value · Volume kg · % of volume ·
  Shipments · Realized $/kg. Rows: Nepal $413,375/53.0%/228,350kg/69.9%/163shp/$1.81 ·
  Dominican Rep. $68,351/8.8%/12,750/3.9%/4/$5.36 · UK $63,650/8.2%/11,763/3.6%/33/$5.41 ·
  Sri Lanka $58,660/7.5%/23,308/7.1%/31/$2.52 · Mauritius $38,121/4.9%/9,095/2.8%/17/$4.19 ·
  Bangladesh $22,246/2.9%/17,550/5.4%/4/$1.27 · Singapore $8,892/1.1%/1,422/0.4%/25/$6.25 ·
  New Zealand $6,230/0.8%/835/0.3%/10/$7.46. Realized-price column colour-ramped ink→alert
  low, primary high.
- Nepal-vs-RoW mini-matrix by year: Nepal volume 0 → 7,000 → 65,120 → 156,230 kg while Nepal
  realized price runs $6.05 (23) → $1.98 (24) → $1.55 (25); RoW realized price $3.95(22) →
  $4.80(23) → $4.61(24) → $2.91(25).
- HS-code segmented bar: HS 2008 prepared/preserved 83.9% ($653,509, 343 shp) vs. raw seed
  (1207/1212/1206/1209) 12.9% ($100,582, 81 shp) vs. other 3.2%.
- Origin-port pill row: Raxaul $344,090 · JNPT $144,997 · Mundra $120,464.
- Framework tag: value-pool / whitespace mapping.
- Source: `Analysis sheet rows 38-77 | Final Clean Data, HS Code & Port of Origin fields, n=440`

### S5 — Competitive Structure: Locked Corridors
- Ribbon active index 3.
- Section chip: **"111 shippers. Top 5 hold 63%. The #1 buyer isn't a buyer at all."**
- Shipper concentration bar row (top 5 of 111): STARAGRO CROP $275,698 (35.4%) ·
  Jalaram Agriexports $91,611 (11.8%) · Mohini Fine Foods $55,573 (7.1%) · Laxmi Narayan
  Bishnu Kumar $36,888 (4.7%) · Greens Pulses Spices $34,644 (4.4%) — cumulative pill: **63.4%
  in 5 of 111 shippers, 78.0% in the top 10.**
- STARAGRO layered-card callout: **"$275,698 · 111 shipments · 100% Nepal · 100% road ·
  realized $1.71/kg."**
- Consignee concentration bars (top 5 of 168, `Z To Order and NA` drawn in `alert`):
  Z To Order and NA $166,052 (21.3%, masked) · J S S INTERNATIONAL $63,168 (8.1%) ·
  Gandhi Oriental Foods Ltd $55,573 (7.1%) · B S Trix Pvt Ltd $40,451 (5.2%) · Omega Traders
  $34,644 (4.4%). Callout on the masked bar: **"21.3% of recorded value has no identifiable
  buyer."**
- Twin matrix (B20), rendered both orientations side by side:

  **Orientation A — rows Consignee, cols Shipper**
  | | STARAGRO | Jalaram | Mohini | Laxmi Narayan | Greens Pulses | Total |
  |---|---|---|---|---|---|---|
  | J S S International | 36,232 | – | – | 23,430 | – | 63,168 |
  | Gandhi Oriental Foods | – | – | 55,573 | – | – | 55,573 |
  | B S Trix Pvt Ltd | 40,451 | – | – | – | – | 40,451 |
  | Omega Traders | – | – | – | – | 34,644 | 34,644 |
  | Supriya Trading | 25,285 | – | – | 3,548 | – | 28,832 |
  | **Total** | 275,698 | 91,611 | 55,573 | 36,888 | 34,644 | |

  **Orientation B — rows Shipper, cols Consignee**
  | | J S S Intl | Gandhi Oriental | B S Trix | Omega Traders | Supriya Trading | Total |
  |---|---|---|---|---|---|---|
  | STARAGRO CROP | 36,232 | – | 40,451 | – | 25,285 | 275,698 |
  | Jalaram Agriexports | – | – | – | – | – | 91,611 |
  | Mohini Fine Foods | – | 55,573 | – | – | – | 55,573 |
  | Laxmi Narayan B.K. | 23,430 | – | – | 3,548 | – | 36,888 |
  | Greens Pulses Spices | – | – | – | 34,644 | – | 34,644 |

  So-what card: **"6 of 25 cells populated. Every top buyer is single-sourced. Jalaram's
  entire book ships to the masked consignee."** Tagged `INFERRED` per C3.
- Framework tag: buyer-supplier concentration / switching costs.
- Source: `Analysis sheet rows 154-1246 | Final Clean Data, normalised (see FARMLEY_CONTENT.md Part B-3)`

### S6 — GTM: The Corridor Farmley Should Not Enter
- Ribbon active index 4.
- Action title: **"Nepal is the obvious market. It is also the wrong one to chase."**
- Symmetric two-column comparison, scored on 4 shared dimensions (realized price, buyer
  identifiability, corridor concentration, defensibility):
  - **The obvious play — Nepal-first**: $1.55–1.81/kg realized · 21% of the market's value
    unidentified · 35% controlled by one road-freight operator · low defensibility (commodity
    corridor, price-taker position).
  - **The recommended play — HS-2008 prepared-goods, branded-retail corridors**: $4.19–7.46/kg
    realized (UK, Mauritius, Singapore, NZ, Dominican Rep.) · buyers are named, addressable
    companies · corridors are thin but open (25-45 shipments across 5 target accounts, not
    single-operator-owned) · defensible on product form (HS 2008 = prepared/processed, Farmley's
    actual category) rather than raw commodity.
- Named target accounts (B21), each with corridor + realized price: Gandhi Oriental Foods Ltd
  (UK, $5.33/kg, $55,573 recorded) · Omega Traders (Sri Lanka, $2.04/kg, $34,644) · Aussee Oats
  Milling Pvt Ltd (Sri Lanka/AU, $6.88/kg, $16,913) · Bhat Bhateni Food Products (Nepal —
  premium retail exception, $5.85/kg, $24,708 — evidence that even inside Nepal, retail-grade
  buyers pay 3.4× STARAGRO's bulk price) · Down to Earth Foods Ltd (New Zealand, $7.23/kg,
  $3,254).
- 3-horizon strip: **Now** — benchmark against the 5 named accounts' current suppliers, price
  to beat their realized $/kg. **Next** — pilot 2–3 HS-2008 corridors with the thinnest
  shipment counts (Costa Rica, Kuwait, NZ — 2, 2, 10 shipments) where a new entrant isn't
  displacing an entrenched 100+-shipment incumbent. **Later** — use the Jul–Sep seasonality
  window (B18) to time procurement/inventory against the corridors that actually order in that
  window.
- Risk register (1:1 mitigation): masked-buyer risk (21% of comparable "market size" is
  unverifiable) → mitigate by never using the masked total to size opportunity, only
  identifiable accounts · thin-sample risk (some premium corridors run 2–10 shipments) →
  mitigate with a pilot-and-scale approach, not upfront capacity commitment · concentration
  risk (STARAGRO's Nepal dominance could compress margins further if Farmley entered that lane)
  → mitigate by not entering it.
- Framework tag: 3-horizon roadmap + risk register.
- Source: `Final Clean Data, normalised consignee/shipper rollup, n=440 | Analysis sheet rows 41-77, 154-319, 752-865`

### S7 — Appendix
- Own single-tag ribbon: `Appendix`.
- Full 36-country table (A16) — all rows from `Analysis` 41–76.
- Full exclusion log (A15) with category definitions.
- Entity-normalisation before/after table (Part B-3).
- Price-vs-country pivot (A20) with explicit `n=` shipment-count column added, and a callout:
  **"High averages on <5 shipments (Sierra Leone, Indonesia, Hong Kong) are not premium-market
  evidence — sample too thin to prioritise."**
- Data-quality notes (verbatim from `.docx` §20): 10 potential duplicates retained pending
  verification · 9 manual-review rows · 5 missing-currency rows not imputed · consignee-name
  variance requires normalisation before concentration claims (this build performs it, see
  Part B-3).
- Source: `Analysis sheet (full) | Final Clean Data n=440 | Pumpkin Seeds Data Cleaning and Analysis Report.docx §20`

### S8 — Thank You
- **Dayita Arora**, restated. No ribbon.
