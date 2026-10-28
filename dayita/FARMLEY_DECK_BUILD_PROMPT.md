# FARMLEY Pumpkin Seeds GTM — Deck Build Prompt

Paste this whole document as the task brief to the session that will actually run `use_figma`.
It assumes that session has already read `CLAUDE.md` (the standing workflow doctrine) and will
paste `deck-system/figma-deck-kit.js` verbatim into every script that touches slide content, per
`CLAUDE.md` §6 step 4. This document is the content and architecture spec for one specific deck.
The locked content (evidence ledger, recomputation log, slide copy) lives in
`dayita/FARMLEY_CONTENT.md` — read it before building; every number below must trace to it.
Where this document and `CLAUDE.md` disagree, `CLAUDE.md` wins, except where §0a below
explicitly says otherwise.

---

## §0 Non-negotiable framing

- Build natively via `use_figma` at **1920×1080**, `cornerRadius = 0` everywhere. Zero imported
  chart images — every chart, table, matrix and diagram is native Figma vector nodes.
- **Hard slide budget: 8.** Cover · Method · Market/Price (moneyshot) · Geography ·
  Competition · GTM · Appendix · Thank-you. Do not add slides; if content overflows, cut to
  the appendix or compress, per `CLAUDE.md`'s zero-dead-space doctrine — density on the page,
  not more pages.
- **Type floor: 22pt for all content text**, per `CLAUDE.md` §2. Source line (14pt) is the only
  exemption. No per-deck override needed here — cut content before shrinking type.
- **No em/en-dashes anywhere** in slide text (swept by D4 below). Use "—" nowhere; rephrase with
  a period, colon, or "to" for ranges.
- **Every bullet or callout carries a number with a unit, a named entity (company/country/HS
  code), or both.** No generic consulting filler ("leverage synergies", "drive growth").
- **Register: forensic data analysis for a hiring case, not a sales pitch.** The deck's power
  comes from showing the correction to the obvious read, not from enthusiasm.
- **Content-integrity rules** (binding, per `CLAUDE.md` §5 and the confirmed scope decision):
  - Every number on every slide must trace to a `T1` or `T2` entry in `FARMLEY_CONTENT.md`
    Part A. Anything in Part A's `T3` tier must carry a visible `INFERRED` or equivalent tag on
    the slide, per that entry's "Label used on slide" column.
  - Nothing in the `CUT` table of `FARMLEY_CONTENT.md` may appear on any slide, in any form —
    no invented TAM, no Farmley financials, no external market data, no FX-converted ₹ figures.
  - No primary research is fabricated (no invented interviews, LOIs, or WTP figures) — none
    were conducted; the deck argues entirely from the transaction data.
  - If a headline figure changes during the build, propagate it to every slide it appears on
    and grep the whole deck for the old value before considering the change done.

### §0a Which CLAUDE.md rules do NOT transfer to this deck

- **§5's "India-first ₹/lakh/crore figures" rule is voided.** The source data is natively
  denominated in USD FOB values; converting to ₹ would require assuming an FX rate not present
  in either supplied file, which is fabrication. **All monetary figures on this deck stay in
  US$.**
- Every other CLAUDE.md rule holds, in particular: never fabricate primary research, every
  quantitative claim carries a source, statistics stay at the precision the source supports
  (do not manufacture false decimal precision beyond what the underlying pivot supports — where
  `FARMLEY_CONTENT.md` gives a figure to 2 decimals because that's the raw pivot output, keep
  it; do not round arbitrarily either way).

---

## §1 Source material to read before building

1. `dayita/FARMLEY_CONTENT.md` — the locked evidence ledger, recomputation log, and full S1–S8
   slide copy. This is the primary content source; read it in full.
2. `dayita/Pumpkin_Seeds_Data_Analysis_report.xlsx` — `Cleaning Summary`, `Analysis` sheets, for
   spot-checking any figure against the raw pivot.
3. `dayita/Pumpkin_Seeds_Data_Analysis_Report.docx` — narrative report, for phrasing/context on
   the data-quality caveats carried into S2 and S7.
4. `CLAUDE.md` (root) — full standing doctrine, especially §1 (EY density doctrine), §2 (design
   system), §3 (structural motifs), §7 (failure modes).
5. `deck-system/figma-deck-kit.js` — paste verbatim (retinted, see §3 below) into every content
   script. Helpers used in this deck: `loadDeckFonts`, `addFrame`, `addRect`, `addEllipse`,
   `addText`, `addWireH`, `addDiagonalWire`, `addDashedRow`, `addLayeredCard`, `addChip`,
   `addBadge`, `buildRibbon`, `sectionChip`, `sourceLine`, `addTable`.
6. `deck-system/slide-archetypes.md` — geometry recipes; archetypes named explicitly per slide
   in §4 below.
7. `ppts-inspo/EY.pdf` — density benchmark; re-render with the PyMuPDF snippet in `CLAUDE.md` §8
   if a visual refresher is needed before building the moneyshot slide (S3).

---

## §2 Ribbon (section-scoped, per CLAUDE.md §1/§3)

Single flat 5-tag ribbon on the five core content slides:

```
Method · Market · Geography · Competition · GTM
```

- S2 Method → activeIndex 0
- S3 Market → activeIndex 1
- S4 Geography → activeIndex 2
- S5 Competition → activeIndex 3
- S6 GTM → activeIndex 4

S7 Appendix gets its **own single-tag ribbon**: `Appendix` (no activeIndex logic needed, just
one active tag). S1 Cover and S8 Thank-you carry **no ribbon**.

Suggested tag widths (sum + gaps should center reasonably under the 1920 canvas with the
64px `startX` default): `[280, 280, 320, 320, 240]` for the 5-tag set (Method/Market/
Geography/Competition/GTM), single `[300]` for the Appendix tag.

---

## §3 Palette (retint — structure unchanged, role names identical)

Replace the `C` object's hex-derived values only. Do not rename roles; every helper function
references them by name.

```js
const C = {
  primary:     { r: 0.106, g: 0.420, b: 0.231 }, // #1B6B3A — active ribbon, rails, primary KPI numerals
  primaryDeep: { r: 0.055, g: 0.251, b: 0.137 }, // #0E4023 — secondary tier
  accent:      { r: 0.949, g: 0.718, b: 0.020 }, // #F2B705 — back-cards, chips, so-what callouts
  alert:       { r: 0.839, g: 0.271, b: 0.000 }, // #D64500 — price-collapse numerals, masked-consignee flag, risk tier
  tint:        { r: 0.749, g: 0.890, b: 0.784 }, // #BFE3C8 — table headers, quiet fills
  ink:         { r: 0.039, g: 0.039, b: 0.039 }, // #0A0A0A — ALL strokes/text, unchanged
  surface:     { r: 0.929, g: 0.929, b: 0.929 }, // #EDEDED — unchanged
  surfaceAlt:  { r: 0.965, g: 0.965, b: 0.965 }, // #F5F5F5 — unchanged
  white:       { r: 1,     g: 1,     b: 1     }, // #FFFFFF — unchanged
};
```

Reserve `alert` (#D64500 burnt orange) specifically for: the realized-price collapse numerals
on S3, the "Z To Order and NA" masked-consignee bar on S5, and risk-tier items on S6. Do not use
`alert` decoratively elsewhere — it should read as a flag every time it appears.

---

## §4 Slide-by-slide architecture (8 slides)

Full copy (headlines, table rows, exact `Source:` strings) is in `FARMLEY_CONTENT.md` Part C —
this section maps that copy to archetypes and geometry. Quoted archetype names match
`deck-system/slide-archetypes.md` headings exactly.

### 1. Cover
- No ribbon. Full-bleed `primary` or `white` background per deck convention (check
  ConsentGrid/NavSight cover treatment for the exact motif — likely a giant title + layered
  chip row).
- Title (100–112pt, Poppins ExtraBold): *"Pumpkin Seeds Export Data — A Go-to-Market Analysis
  for Farmley"*.
- Subtitle (44–50pt): *"The market grew 9.5×. Realized price fell 52%. Don't chase the
  volume."* — this is the deck's thesis stated up front (foreshadowing).
- Three `addChip` KPI chips: `440 clean shipment records` · `$779,361 recorded FOB trade,
  2022-25` · `Realized price down 52% since 2022`.
- Byline: **Dayita Arora**, 24–26pt, bottom of frame.

### 2. Method & Data Integrity
Ribbon idx 0. `sectionChip`: *"724 raw records to 440 defensible ones. The cleaning logic,
shown."*
- Archetype: **numbered badge list / punch-hole and wire process strip** for the 5-step
  pipeline (scope definition → product-description vs HS-code cross-check → exclusion →
  duplicate check → column reduction). Use `addBadge` + `addWireH` chain, 5 nodes.
- Archetype: **table wall** — `addTable` for the exclusion taxonomy, 2 columns (Reason, Count):
  sowing/planting seed 206 · processed/non-food derivative 59 · explicitly non-seed 9 ·
  mixed/other food product 6 · medicinal/botanical 4. `totalRow: ["Total excluded", "284"]`.
- Archetype: **layered-card callout** (`addLayeredCard`) for the disclosure panel: 9
  manual-review rows, 10 potential-duplicate rows retained, 5 missing-currency rows not
  imputed.
- Archetype: second **layered-card callout**, `alert`-tinted accent: *"3 corrections made to
  the source pivots"* naming the three recomputations (realized price, calendar-month
  seasonality, normalised entity rollups), *"detailed in the appendix."*
- Framework tag chip: `MECE scope decomposition`.
- `sourceLine`: `Port Data Analysis Task 2022-25, Data Sheet-Pumpkin Seeds n=724 | Cleaning Summary, Excluded Rows, Manual Review sheets`

### 3. Market Size & the Price Correction — MONEYSHOT
Ribbon idx 1. `sectionChip`: *"$779K in recorded trade. Every dollar of growth bought cheaper
kilos."*
Three horizontal bands with rails, per `CLAUDE.md` §1's band+rail doctrine:
- **Band 1, rail "THE HEADLINE"**: dual bar chart, value bars (`primary`) + volume bars
  (`accent`) side by side per year 2022–25, YoY `addChip` pills above each year
  (+159.6%/+134.5%/+56.0% value; +96.0%/+350.6%/+126.3% volume).
- **Band 2, rail "THE CORRECTION"** — the moneyshot itself: **break-even-style line chart with
  in-chart annotation**. Two series via chained `addDiagonalWire`: unweighted average rate
  (near-flat $6.27→$6.13→$4.33→$5.34, drawn in `ink` or `tint`) against realized $/kg
  (collapsing $3.95→$5.23→$2.72→$1.88, drawn in `alert`, thicker weight). Dashed vertical
  marker (`addDashedRow`, rotated or drawn as a vertical dash column) at 2025 with bold on-plot
  callout: *"−52% realized, on 9.5× the volume."* **Formula callout box** (tinted `addFrame` +
  text, not optional per the archetype spec): `Realized $/kg = Sum of FOB Value / Sum of
  Standard Qty`.
- **Band 3, rail "THE TIMING"**: 12-node **alternating icon timeline** or simple bar-per-month
  volume-index strip, Jan–Dec, Jul/Aug/Sep bars shaded `accent` (36.9% of annual volume),
  labelled *"trade shipment seasonality, not verified consumer demand"*.
- Framework tag: `Volume / price / mix decomposition`.
- `sourceLine`: `Analysis sheet rows 3-31 (recomputed) | Final Clean Data n=440`

### 4. Geography: Where the Volume Went vs. Where the Money Is
Ribbon idx 2. `sectionChip`: *"Nepal is 70% of the kilos and the cheapest kilo in the
dataset."*
- Archetype: **table wall** — `addTable`, 8 rows × 6 columns (Country, FOB $, % value, Volume
  kg, % volume, Shipments, Realized $/kg — 7 cols total). Data from `FARMLEY_CONTENT.md` S4.
  Colour the Realized $/kg column values `alert` for Nepal/Bangladesh (low), `primary` for
  UK/Singapore/NZ (high) via per-cell text color override (not a full addTable feature — draw
  this column's text manually alongside the table if `addTable` doesn't support per-cell color,
  or accept uniform `ink` and let the numbers speak).
- Archetype: **cost-share segmented bar with legend** for the Nepal-vs-RoW realized-price
  trajectory by year (Nepal $6.05→$1.98→$1.55 vs RoW $3.95→$4.80→$4.61→$2.91), or a simple
  2-line small multiple beside the country table.
- Archetype: **stacked bar** for HS-code split: HS 2008 prepared/preserved 83.9% ($653,509,
  343 shipments) vs raw seed group 12.9% ($100,582, 81 shipments) vs other 3.2%.
- Archetype: **horizontal bar rows with inline value pills** for origin ports: Raxaul $344,090
  · JNPT $144,997 · Mundra $120,464.
- Framework tag: `Value-pool / whitespace mapping`.
- `sourceLine`: `Analysis sheet rows 38-77 | Final Clean Data, HS Code and Port of Origin fields, n=440`

### 5. Competitive Structure: Locked Corridors
Ribbon idx 3. `sectionChip`: *"111 shippers. Top 5 hold 63%. The #1 buyer isn't a buyer at
all."*
- Archetype: **horizontal bar rows with inline value pills** for top-5 shippers (STARAGRO CROP
  $275,698/35.4% · Jalaram Agriexports $91,611/11.8% · Mohini Fine Foods $55,573/7.1% · Laxmi
  Narayan Bishnu Kumar $36,888/4.7% · Greens Pulses Spices $34,644/4.4%), cumulative pill
  callout *"63.4% in 5 of 111 shippers, 78.0% in the top 10."*
- Archetype: **layered-card callout** for STARAGRO profile: *"$275,698. 111 shipments. 100%
  Nepal. 100% road. Realized $1.71/kg."*
- Archetype: same bar-row pattern for top-5 consignees, with the **Z To Order and NA bar drawn
  in `alert`** and annotated *"21.3% of recorded value has no identifiable buyer."*
- Archetype: **the twin Consignee×Shipper matrix — this deck's second moneyshot.** Two
  `addTable`s side by side (or two custom 6×6 grids if `addTable` proves too rigid for a
  cross-tab with row+column totals), Orientation A (rows=Consignee) and Orientation B
  (rows=Shipper), both from `FARMLEY_CONTENT.md` S5. Empty cells render as an ink en-dash
  glyph is banned — use a plain hyphen-minus "-" or a centered dot "·" instead, populated cells
  in `primary`-weight text. So-what `addLayeredCard` beneath both: *"6 of 25 cells populated.
  Every top buyer is single-sourced. Jalaram's entire book ships to the masked consignee."*
  tagged `INFERRED` (small 18-20pt superscript-style tag chip is acceptable here as a label,
  not a claim — keep body claims at 22pt+).
- Framework tag: `Buyer-supplier concentration / switching costs`.
- `sourceLine`: `Analysis sheet rows 154-1246 | Final Clean Data, normalised (see FARMLEY_CONTENT.md Part B-3)`

### 6. GTM: The Corridor Farmley Should Not Enter
Ribbon idx 4. Action title: *"Nepal is the obvious market. It is also the wrong one to
chase."*
- Archetype: **symmetric two-column comparison** (two `addLayeredCard` or `addFrame` panels,
  primary-tint vs alert-tint), 4 shared scoring rows each (realized price, buyer
  identifiability, corridor concentration, defensibility) — "The obvious play: Nepal-first" vs
  "The recommended play: HS-2008 branded-retail corridors". Full copy in
  `FARMLEY_CONTENT.md` S6.
- Archetype: **numbered badge list** for the 5 named target accounts (Gandhi Oriental Foods Ltd
  · Omega Traders · Aussee Oats Milling Pvt Ltd · Bhat Bhateni Food Products · Down to Earth
  Foods Ltd), each row: company, corridor, realized $/kg, recorded value.
- Archetype: **3-horizon strip** (Now/Next/Later) — content per `FARMLEY_CONTENT.md` S6.
- Archetype: **risk tree with 1:1 mitigation** — 3 risk/mitigation pairs (masked-buyer risk,
  thin-sample risk, concentration risk), per `FARMLEY_CONTENT.md` S6.
- Framework tag: `3-horizon roadmap + risk register`.
- `sourceLine`: `Final Clean Data, normalised consignee/shipper rollup, n=440 | Analysis sheet rows 41-77, 154-319, 752-865`

### 7. Appendix
Own single-tag `Appendix` ribbon (not the 5-tag set — watch for the appendix-ribbon-leak trap,
`CLAUDE.md` §1).
- **Table wall**: full 36-country table (all rows, not just top 8).
- **Table wall**: full exclusion log with the 5 category definitions spelled out.
- **Table**: entity-normalisation before/after (the JSS International example from
  `FARMLEY_CONTENT.md` Part B-3).
- **Table**: price-vs-country pivot with an added shipment-count (`n=`) column, callout: *"High
  averages on under 5 shipments (Sierra Leone, Indonesia, Hong Kong) are not premium-market
  evidence."*
- Bulleted data-quality notes panel (verbatim list in `FARMLEY_CONTENT.md` S7).
- `sourceLine`: `Analysis sheet (full) | Final Clean Data n=440 | Pumpkin Seeds Data Cleaning and Analysis Report.docx section 20`

### 8. Thank You
No ribbon. **Dayita Arora**, restated, large.

---

## §5 Cross-deck consistency checks (run at the end, CLAUDE.md §6 steps 8-10)

1. **Figure-consistency grep** across all text nodes for every headline number appearing on
   more than one slide: `440`, `724`, `284`, `779,361` / `779361`, `1.88`, `3.95`, `52%` (or
   `52.4%`), `35.4%`, `21.3%`, `69.9%`, `83.9%`, `63.4%`, `78.0%`, `275,698`, `1.71`, `1.81`,
   `5.41`. Every occurrence must match `FARMLEY_CONTENT.md` exactly — this catches the "stale
   figure on one slide" failure mode CLAUDE.md §5 warns about.
2. **Ribbon-correctness check**: slides 2-6 carry the 5-tag `Method/Market/Geography/
   Competition/GTM` set with the correct active index (0-4 respectively); slide 7 carries only
   the single `Appendix` tag; slides 1 and 8 carry no ribbon at all.
3. **D2 radius-zero sweep** (kit §D2) across all 8 slide IDs — `radiusFixed` should be 0 on a
   second run after the first fix pass.
4. **D3 font-floor sweep** (kit §D3, 22pt threshold) — zero hits except nodes whose text starts
   with `Source:`.
5. **D4 dash sweep** (write fresh, deck-specific) — scan all TEXT nodes across all 8 slides for
   the em-dash (—, U+2014) and en-dash (–, U+2013) characters; must return zero hits.
   ```js
   const slideIds = [/* all 8 */];
   const slides = await Promise.all(slideIds.map(id => figma.getNodeByIdAsync(id)));
   const hits = [];
   for (const slide of slides) {
     for (const t of slide.findAllWithCriteria({ types: ["TEXT"] })) {
       if (/[–—]/.test(t.characters)) hits.push({ slide: slide.name, chars: t.characters.slice(0,40) });
     }
   }
   return { hits };
   ```
6. **D5 citation-presence sweep** (write fresh) — every one of slides 2-7 must contain a TEXT
   node whose `characters` starts with `"Source:"`. Slides 1 and 8 are exempt (cover/thank-you).
7. **Ledger traceback** — spot-check 10 random numerals visible in the final screenshots against
   `FARMLEY_CONTENT.md` Part A; confirm every `T3`-tier statement (the Nepal-transit inference,
   the trade-vs-demand seasonality caveat, the locked-corridor inference) carries its labelled
   tag on-slide, not stated as bare fact.
8. **Batch validator (D1)** after every 2-slide batch during the build, not just at the end.
9. **Final full-deck screenshot review**: `get_screenshot` every slide, check against this
   document's per-slide archetype list, fix anything found, re-run D2-D5.
