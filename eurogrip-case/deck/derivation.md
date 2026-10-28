# Deck derivation (step D0, per PLAN.md §6.6)

Model run hash: `b1125880f5` (model/model_outputs.json, model/model_tables.md). Every number on every slide
traces to this hash; if the model is re-run and the hash changes, re-check this table before rebuilding.

## Section mapping (skill touchpoint T4, PLAN.md §6.3)

| Skill section | Where in this 4-slide deck |
|---|---|
| Front matter | S1 cover: title, verdict card, team table, mind map of who decides the tyre |
| I Executive summary | S2 headline + P3 (obvious play, struck) vs P4/P5 (our design and its payback) |
| II Context + foreshadowing seed | S1 mind-map caption (non-stockers advocate) + S2 P1 (where the decision is made) + P2 insight 2 |
| III Actors (symmetric) | S1 four nodes (mechanic, rider, retailer, rivals) + S2 P1 three segments |
| IV Quantitative analysis + moneyshot | S2 P1, P5 (moneyshot), P7; S3 A1, A2 |
| V Feasibility | S2 P6 (loop), P7 (budget inside envelope); S3 A4 (scenarios), A6 (risks, validation) |
| VI Recommended alternative | S2 P4 (tiers and loop), P9 (measurement) |
| VII Conclusion (double synthesis) | S2 headline as the section closer; S4 "THEREFORE" card as the final synthesis |
| Appendix (defensive depth) | S3 A1 to A6 |
| Bibliography | source lines on S1 to S4 + research document Appendix A |

## Number-by-number derivation

**Revision note (Part 2, 2026-10-18):** S2 and S3 were rebuilt to winning-deck density per the user's review
(see PLAN.md Part 2). The table below reflects the rebuilt S2 (9 panels) and S3 (6 panels). S1 and S4 are
unchanged except the team table, which now carries one row (Harsh Kawatra, Team Leader) per the user's
decision to remove Anuj Gambhir everywhere.

| Slide | Panel | Text or number | Research § / source | Tag | Model key | Matches |
|---|---|---|---|---|---|---|
| S1 | Title | MECHANIC ADVOCACY FOR EUROGRIP | brief title | `[C4-B02]` | n/a | Y |
| S1 | Verdict card | "pay for the advice, not the stock, tools and status rather than cash" | §2, §10 | ARGUMENT.md | n/a | Y |
| S1 | Mind map caption | "Advocacy already comes from mechanics who do not stock Eurogrip" | §5 (seed) | `[C4-B14]` | n/a | Y |
| S1 | Team table | Harsh Kawatra, Delhi Technological University, Team Leader | §1.5 (revised) | n/a | n/a | Y |
| S2 | Headline | "1.2 lakh shops cost ₹22.0 crore a year, about half a cash-per-tyre scheme, repay at 4.4 extra tyres a shop" | §11 | `[M]` | `c4.members_lakh.base`, `c4.spend_cr.base`, `c4.be.base`, `c4.cash_scheme.cost_cr` | Y |
| S2 | P1 root strip and 3 nodes | 7.8 lakh (bear 2.7, bull 15.0); 1.9/3.1/2.7 lakh, 25%/40%/35%, "needs margin/tools/refills" | §6 | `[M]` | `c4.universe`, `c4.segments` (A05a/b/c) | Y |
| S2 | P2 insight table | 4 rows: stocking lags, credit advice; non-stockers refer, code no stock; visibility rising, boards and aprons; one-offs fade, 6-month tiers | §7, §10 | `[C4-B11]` `[C4-B14]` `[C4-B13]` `[C4-B21]` | n/a | Y |
| S2 | P3 comparison table | Cost a year ₹41.7cr vs ₹22.0cr; deadweight 91% vs pilot-tested; pays stockists only vs every adviser; rival copy in a week vs hard to copy | §9 | `[M c4.cash_scheme]` | `c4.cash_scheme.cost_cr`, `.deadweight_pct`, `c4.spend_cr.base` | Y |
| S2 | P4 tier table | Tier 1/2/3: gets, referrals a year, ₹230/₹3,753/₹10,967 a year, mix 75%/20%/5% | §10, §11 | n/a | `c4.tiers`, `c4.parts.base` (rebuilt independently in make_values.py and assert-checked equal) | Y |
| S2 | P4 repay line | "Each tier repays its cost at 0.5, 8.8 and 25.7 extra tyres a year" | §11 | `[M]` | tier cost divided by `c4.cpt.base` | Y |
| S2 | P5 moneyshot | 4.4 EXTRA TYRES, "one per 12 weeks", bear 11.7, bull 2.2, kill line 12 | §11 | `[M]` | `c4.be` (all 3 scenarios), weeks = 52 / be.base, `A26` | Y |
| S2 | P6 loop | mechanic to rider to retailer to mechanic (earns ₹60), "logged in the Bandhan app"; 6-month re-tier; fraud controls | §10 | n/a | `c4.app_name`, `A20` | Y |
| S2 | P7 title and stacked columns | "₹22.0 CRORE, 1.63% OF UNIT REVENUE"; bear/base/bull ₹10.3/₹22.0/₹29.2cr by 5 lines; legend % and ₹ crore | §11 | `[M]` `[T4]` | `c4.spend_cr`, `c4.spend_share_pct.base`, `c4.lines_sc` | Y |
| S2 | P8 member ramp | 0.03 to 1.16 lakh members, Q1 to Q8, gate labels at Q2/Q4/Q8; phase strip 2 states / 8 states / national | §12 | n/a | `c4.rollout` | Y |
| S2 | P9 gate table | G1/Q2/60% active plus 15pts; G2/Q4/4.4 tyres; G3/Q8/stocking up; Stop/any/above 12 | §13 | n/a | `A23`, `A24`, `c4.be.base`, `A26` | Y |
| S3 | Headline | "7.8 lakh shops counted four ways, ₹1,628 a member a year, break-even 2.2 to 11.7, kill line 12" | §6, §11 | `[M]` | `c4.universe.base`, `c4.cost_per_member.base`, `c4.be`, `A26` | Y |
| S3 | A1 range chart | Enterprise survey 5.0 (2.7 to 7.5), parc 10.5 (7.7 to 15.0), rival programmes 1.5 floor, Eurogrip partners 0.3 floor; base line at 7.8 | §6 | `[T1]` | `c4.universe.methods` | Y |
| S3 | A1 base-case note | "Base 7.8 lakh: mean of two estimates, not below Castrol's 1.5 lakh" | §6 | n/a | `c4.universe.base`, `.floor` | Y |
| S3 | A1 pilot line | "Pilots: Tamil Nadu (home) and Uttar Pradesh (thin)" | §12 | n/a | `c4.pilot_states`; shares from research/data/state_parc.csv (TN 7.6%, UP 13.8%) | Y |
| S3 | A2 cost-per-member table | 5 lines plus Total, bear ₹2,350 / base ₹1,628 / bull ₹1,105 | §11 | `[M]` | `c4.parts`, `c4.cost_per_member` | Y |
| S3 | A2 spend-identity note | "1.16 lakh members times ₹1,628 plus ₹3.1 crore fixed equals ₹22.0 crore a year" | §11 | `[M]` | members base times cost per member base plus fixed (spend minus variable) | Y |
| S3 | A3 tornado | 6 largest break-even swings (Contribution, Tyre MRP, Referral fee, Channel cut, Coverage, Tier 2 kit) with a lo-to-hi value column | §11 | `[T6]` | `c4.tornado` (top 6) | Y |
| S3 | A3 kill note | "Kill line is 12: even the bear case, 11.7, stays under it" | §11 | n/a | `c4.be.bear`, `A26` | Y |
| S3 | A4 scenario table | 8 rows (unit revenue, budget share, envelope, spend, members, contribution a tyre, break-even, weeks a tyre) by bear/base/bull | §11 | `[M]` | `c4.bu_rev_cr`, `A02`, `c4.envelope_cr`, `c4.spend_cr`, `c4.members_lakh`, `c4.cpt`, `c4.be`, `c4.weeks` | Y |
| S3 | A5 benchmark heat table | 6 programmes plus "Our design" by Cash/Tools/Signs/Advice | §8 | n/a | `c4.bench` (from research/data/benchmarks.csv) | Y |
| S3 | A6 risk table | Top 5 risks, P-times-I heat cell (9, 6, 6, 4, 4), control | §14 | `[T12]` | `c4.risks` (top 5 by p times i) | Y |
| S3 | A6 validate and audit lines | "60 interviews, 4 cities"; "140 shops an arm, 560 visits, ₹3.9 lakh" | §15, §13 | n/a | `c4.validation`, `c4.audit` | Y |
| S4 | THEREFORE card | "equip the mechanic, credit the advice and measure the recommendation" closer | §15 closer | n/a | `c4.be.base`, `c4.spend_cr.base` | Y |
| S4 | Team table | Harsh Kawatra, Delhi Technological University, Team Leader | §1.5 (revised) | n/a | n/a | Y |

All rows "Matches Y": confirmed against the live Figma renders (deck/shots/s0{1-4}.png) captured 2026-10-18
after the Part 2 rebuild and B11 logo placement, from model hash `b1125880f5`. No manual overrides pending.

**Part 3/4 update (2026-10-21):** no numbers changed. S1/S4 logos de-boxed and re-spaced; S4 gained live
hyperlinked rows for the research document and the model workbook (text is the literal URL, not a derived
number, so no new row here); S1's dashed photo placeholders and the retailer-app screen placeholder were
replaced with native vector icon tiles (wrench, tyre-and-patch, helmet, concentric tyre, phone screen), each
captioned with a plain descriptive label, not a model-derived figure. Re-confirmed against
deck/shots/hi_s01.png and hi_s04.png captured 2026-10-21.

**L1 update (2026-10-22):** video link added. During this step, S4's closing sentence ("The research document
and the model back...") and its SOURCE line were found missing (cause unclear; no script in this session's log
should have deleted them) and were recreated from the original build script's own styling
(`deck/slides/s04.js`), same position, font and colour. Cover gained a blue underlined video chip (S1); Thank
You gained its third link row (S4); site/index.html gained the video card. All three link to the user's
uploaded Drive folder. No numbers changed; re-verified with V1 (clean on S1 and S4) and sweeps (clean).
