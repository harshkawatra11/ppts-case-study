# Slide copy (step D0, per PLAN.md §6.6 step 2)

Every string on every slide, verbatim, as rendered from model hash `b1125880f5`. Character budgets per
PLAN.md §6.4: Inter Semi Bold 22pt ≈ 11.5 px/char, Inter Bold 22pt ≈ 12 px/char, Poppins Bold 22pt ≈
13.5 px/char (uppercase ≈ 15 px), Poppins Bold 24pt ≈ 14.7 px/char. All strings below were confirmed to fit
by the offline mock (`gen.py mock`: all 4 slides OK, 0 warnings), the real-glyph-metrics width check in
Python against `deck/metrics.json`, and visually confirmed in the live Figma screenshots.

**Revision note (Part 2, 2026-10-18):** S2 and S3 rewritten to winning-deck density; team reduced to one row
(Harsh Kawatra) on S1 and S4, by user decision. Logos placed on S1 and S4 in step B11.

**Revision note (Part 3/4, 2026-10-21):** S1 and S4 logo boxes (stroke and fill) removed; the Eurogrip/Unstop/DTU
top-band trio re-spaced closer together. S4 gained two live hyperlinked link rows (research document, model
workbook; a third row for the video is added once the user's uploaded link is known, step L1). S1's four dashed
photo placeholders and the separate retailer-app screen placeholder were replaced with native vector icon tiles
(no external image sourcing was available; see `DECISIONS.md` "S1-icons"). S1 and S4 are now hand-finished live
in Figma and are never rebuilt via `gen.py bind`; further edits are surgical `use_figma` scripts only.

## S1 Cover

- Top chip: `EUROGRIP × UNSTOP | CASE STUDY 4`
- Team chip: `TEAM IDEAFORGE`
- Logo slots (filled, step B11): `Eurogrip`, `Unstop`, `DTU`
- Title line 1: `MECHANIC ADVOCACY`
- Title line 2: `FOR EUROGRIP`
- Subtitle: `Case Study 4: a scalable, cost-effective advocacy ecosystem with mechanics and puncture shops, domestic two-wheeler market`
- Verdict card line 1: `OUR ANSWER: PAY FOR THE ADVICE, NOT THE STOCK, AND PAY IN TOOLS AND STATUS RATHER THAN CASH.`
- Verdict card line 2 (`V.cover_line`): `Every mechanic and puncture shop can join free. A personal code, logged by the retailer in the Bandhan app, earns tools, visibility and training even where Eurogrip is not stocked. Tiers are re-earned every six months.`
- Team label: `TEAM IDEAFORGE`
- Team table: Members | Institution | Role; Harsh Kawatra | Delhi Technological University | Team Leader
- Prepared-for line: `Prepared for the Eurogrip × Unstop Collaboration, Case Study 4`
- Mind-map panel title: `WHO DECIDES THE REPLACEMENT TYRE`
- Mind-map caption: `Advocacy already comes from mechanics who do not stock Eurogrip.`
- Icon tiles (native vector, replacing the dashed photo slots): wrench badge captioned `MECHANIC`; tyre-and-patch
  badge captioned `PUNCTURE`; helmet badge captioned `REPLACEMENT`; concentric-tyre badge captioned `EUROGRIP TYRE`
- Nodes: `THE MECHANIC / advises at replacement`; `THE RIDER / buys on that advice`; `THE RETAILER / logs the code at sale`; `THE RIVALS / MRF, CEAT, Apollo`
- Hub: `Eurogrip` logo (filled, de-boxed), `Case Study 4`
- Logo row: `Eurogrip` (de-boxed), phone-screen icon tile captioned `RETAILER APP` (replacing the dashed slot), `MRF`, `CEAT`, `Apollo Tyres` (all de-boxed)
- Cover video chip (live, step L1): `Watch the two-minute video  →`, blue, underlined, hyperlinked to the
  uploaded video (shown as plain text since the Drive folder URL exceeds the chip's width budget)
- Crest row (5 logos, filled; real benchmarks.csv programmes): `Castrol / lubricants`, `Amaron / batteries`, `Bosch / parts`, `Pidilite / adhesives`, `Havells / electricals`
- Crest caption: `Adjacent categories that already reward influencers`
- Fine print: `Logos mark brands referenced in the analysis; no partnership is implied.`
- Source line (`V.src1`): `Source: Eurogrip x Unstop Case Study 4 brief | TVS Srichakra annual report FY26 | research sections 3, 6, 8 | model b1125880f5`

## S2 Executive Summary (core slide, rebuilt Part 2)

- Ribbon: `INCENTIVE REALISM`, `INSIGHT-GROUNDING`, `SCALABILITY`, `SUSTAINABILITY`, `MEASURABILITY`
- Chip: `CASE 4`
- Headline: `Tools and status for 1.2 lakh shops cost ₹22.0 crore a year, about half a cash-per-tyre scheme, and repay the lot at 4.4 extra tyres a shop`
- Rails: `DIAGNOSIS`, `PROGRAMME`, `DELIVERY`
- P1 title: `WHO NAMES THE TYRE: 7.8 LAKH SHOPS`; root strip `7.8 lakh outlets name the tyre: bear 2.7, bull 15.0`
- P1 nodes: `Stock and fit / 1.9 lakh / 25% / needs margin`; `Service only / 3.1 lakh / 40% / needs tools`; `Puncture fix / 2.7 lakh / 35% / needs refills`
- P2 title: `FOUR INSIGHTS, FOUR MOVES`
- P2 table: The brief says | So we; `Stocking lags / credit advice`; `Non-stockers refer / code, no stock`; `Visibility rising / boards, aprons`; `One-offs fade / 6-month tiers`
- P3 title (struck): `THE OBVIOUS PLAY: CASH PER TYRE`
- P3 table: Test | Cash a tyre | Our design; `Cost a year / ₹41.7 crore / ₹22.0 crore`; `Deadweight / 91% of spend / pilot tests it`; `Pays for / stockists only / every adviser`; `Rival copy / in a week / hard to copy`
- P4 title: `THREE TIERS: GETS, COSTS AND RETURNS`
- P4 table: Tier | Gets, in kind | Referrals | ₹ a year | Mix; `Tier 1 / repair kit, board / 2 a year / ₹230 / 75%`; `Tier 2 / gauge, apron, course / 12 a year / ₹3,753 / 20%`; `Tier 3 / inflator, listing / 40 a year / ₹10,967 / 5%`
- P4 repay line: `Each tier repays its cost at 0.5, 8.8 and 25.7 extra tyres a year`
- P5 moneyshot: `4.4` / `EXTRA TYRES` / `a shop a year,` / `one per 12 weeks`; bars `Bear 11.7`, `Base 4.4`, `Bull 2.2`; fine print `Dashed line: stop if above 12 a year (kill line)`
- P6 title: `ONE CODE, ONE CREDIT: THE LOOP`
- P6 loop nodes: `Mechanic / advises`, `Rider / buys`, `Retailer / logs code`, `Mechanic / earns ₹60`
- P6 captions: `logged in the Bandhan app`; bullets `Every 6 months: re-tiered on logged codes`; `Fraud: 1 credit a tyre serial, IVR call-backs`
- P7 title: `₹22.0 CRORE, 1.63% OF UNIT REVENUE`
- P7 stacked columns: `Bear ₹10.3`, `Base ₹22.0`, `Bull ₹29.2`; legend `Tools 55% ₹12.1`, `Visibility 16% ₹3.5`, `Training 7% ₹1.5`, `Field 14% ₹3.1`, `Tech 8% ₹1.8`
- P8 title: `24 MONTHS: 1.2 LAKH SHOPS, 3 GATES`
- P8 ramp bars: Q1 0.03 to Q8 G3 1.16 (gate labels at Q2 G1, Q4 G2, Q8 G3); phase strip `2 states`, `8 states`, `all states, national`
- P9 title: `THE BAR TO SCALE, GATE BY GATE`
- P9 table: Gate | When | Pass if; `G1 / Q2 / 60% active, audit +15 points`; `G2 / Q4 / 4.4 extra tyres a shop`; `G3 / Q8 / stocking up on re-survey`; `Stop / any / break-even above 12`
- Source line (`V.src2`): `Source: Case Study 4 brief | MoSPI ASUSE, VAHAN | Castrol India (Fast Scan) | IndiaMART, Amazon.in tool prices, Oct 2026 | research sections 6 to 14 | model b1125880f5`

## S3 Appendix (rebuilt Part 2)

- Ribbon: `A1 COUNT`, `A2 COST`, `A3 SENSITIVITY`, `A4 SCENARIOS`, `A5 BENCHMARKS`, `A6 RISKS`
- Chip: `A / 01`; section chip: `APPENDIX`
- Headline: `Appendix: 7.8 lakh shops counted four ways, ₹1,628 a member a year, and break-even from 2.2 to 11.7 tyres a shop, under the kill line of 12`
- A1 title: `A1 FOUR COUNTS, ONE UNIVERSE (LAKH)`
- A1 range rows: `Enterprise survey 5.0 (2.7 to 7.5)`, `Two-wheeler parc 10.5 (7.7 to 15.0)`, `Rival programmes 1.5, floor`, `Eurogrip partners 0.3, floor`; dashed base line labelled `base 7.8`
- A1 base note: `Base 7.8 lakh: mean of two estimates, not below Castrol's 1.5 lakh.`
- A1 pilot line: `Pilots: Tamil Nadu (home) and Uttar Pradesh (thin).`
- A2 title: `A2 ₹1,628 A MEMBER A YEAR, BUILT UP`
- A2 table: ₹ a member | Bear | Base | Bull; `Tools, refills ₹1,470 ₹1,042 ₹741`; `Visibility kits ₹456 ₹304 ₹202`; `Training, meets ₹185 ₹125 ₹75`; `Enrolment ₹158 ₹96 ₹58`; `Messaging ₹80 ₹60 ₹30`; `Total ₹2,350 ₹1,628 ₹1,105`
- A2 note: `Base: 1.16 lakh members × ₹1,628 + ₹3.1 crore fixed = ₹22.0 crore a year`
- A3 title: `A3 BREAK-EVEN: WHAT MOVES IT MOST`
- A3 label: `Extra tyres a shop a year, base 4.4`
- A3 tornado rows (with value column): `Contribution 3.9 to 5.1`, `Tyre MRP 4.1 to 4.8`, `Referral fee 4.3 to 4.7`, `Channel cut 4.3 to 4.7`, `Coverage 4.4 to 4.7`, `Tier 2 kit 4.3 to 4.6`
- A3 kill note: `Kill line is 12: even the bear case, 11.7, stays under it.`
- A4 title: `A4 BEAR, BASE, BULL ON ONE MODEL`
- A4 table: Item | Bear | Base | Bull; `Unit revenue, ₹ cr 1,240 1,350 1,460`; `Budget share 1.50% 1.75% 2.00%`; `Envelope, ₹ cr 18.6 23.6 29.2`; `Spend, ₹ cr 10.3 22.0 29.2`; `Members, lakh 0.27 1.16 2.43`; `Contribution a tyre ₹327 ₹427 ₹539`; `Break-even tyres 11.7 4.4 2.2`; `Weeks a tyre 4 12 23`
- A4 fine print: `Bear is least favourable to the plan. Model hash b1125880f5.`
- A5 title: `A5 SIX PROGRAMMES, SCORED`
- A5 table rows: `Castrol, lubes`, `Schaeffler`, `Pidilite, adh`, `Havells, elec`, `Amaron, batt`, `JK Tyre, tyres`, `Our design` (highlighted); columns `Cash`, `Tools`, `Signs`, `Advice`
- A5 fine print: `Signs = boards and uniforms. Advice = credits a recommendation with no purchase. As published; n/a = not disclosed.`
- A6 title: `A6 RISKS, CONTROLS, VALIDATION`
- A6 table: # | Risk | P×I | Control; `1 Activity fades 9 6-monthly review`; `2 Codes not logged 6 Logging credit`; `3 App downtime 6 WhatsApp fallback`; `4 Code fraud 4 Serial caps, audits`; `5 Distributor apathy 4 Per-enrolment pay`
- A6 callout: `VALIDATE FIRST: 60 interviews, 4 cities`
- A6 audit line: `Audit: 140 shops an arm, 560 visits, ₹3.9 lakh`
- Source line (`V.src3`): `Source: model tables T1 to T12 | research/data: universe_methods, state_parc (VAHAN), benchmarks (15 programmes) | research sections 6, 8, 11, 13, 14 | model b1125880f5`

## S4 Thank You

- Title: `THANK YOU`
- Therefore card: `THEREFORE: equip the mechanic, credit the advice and measure the recommendation. At 4.4 extra tyres a shop a year, ₹22.0 crore pays for itself.`
- Team label: `TEAM IDEAFORGE`
- Team table: same as S1 (one row: Harsh Kawatra, Delhi Technological University, Team Leader)
- Logo slots (filled, step B11; de-boxed and re-spaced in Part 3 F1): `Eurogrip`, `Unstop`, `DTU`
- Link rows (live, blue underlined hyperlinked chips with an arrow, added in Part 3 F2, completed in L1):
  `RESEARCH DOCUMENT` -> `harshkawatra11.github.io/eurogrip-case4/Eurogrip_Research.pdf`;
  `MODEL WORKBOOK` -> `harshkawatra11.github.io/eurogrip-case4/Eurogrip_Model.xlsx`;
  `TWO-MINUTE VIDEO` -> the uploaded Drive folder link, shown as `Open the two-minute video  →` since the
  folder URL exceeds the chip's width budget
- Closing line: `The research document and the model back every number on these slides.`
- Source line (`V.src4`): `Source: Team IdeaForge, Eurogrip x Unstop Case Study 4 submission | model b1125880f5`

## Must-present list (`V.must`, checked by the sweep)

`4.4`, `₹22.0 crore`, `7.8 lakh`, `TEAM IDEAFORGE`, `Harsh Kawatra`, `Delhi Technological University`,
`CASH PER TYRE`, `THE LOOP`, `Case Study 4`, `THANK YOU`, `THEREFORE`, `Tier 1`, `Tier 2`, `Tier 3`,
`INCENTIVE REALISM`, `MEASURABILITY`.

Every row above is confirmed `Matches Y` against `deck/derivation.md` and the live Figma screenshots captured
after the Part 2 rebuild and B11 logo placement. `sweeps.js` confirms `Anuj` and `Gambhir` are absent
deck-wide (ABSENT list).
