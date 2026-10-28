# HarvestBox v3 deck: derivation table

One row per distinct text-or-number item per slide and panel. "Research section" cites `research/parts/*.md`
(mapped to the assembled document's section numbers). "Tag" is the case/assumption/model tag used in the
research (`[C ..]`, `[A##]`, `[M]`, `[T#]`). "Values key" is the `deck3/values.json` key from plan section 8
that will carry the number once `make_values.py` is written (the file does not exist yet at the time of this
review; every number below was instead verified directly against `model/model_outputs.json`,
`model/model_tables.md` and the cited research file). "Matches" is yes unless flagged in the Unresolved
section at the end.

## Slide 1, cover

| Panel | Text or number | Research section | Tag | Values key | Matches |
|---|---|---|---|---|---|
| Verdict card | "₹15 Cr in the bank" | §2, case K4 | `[C K4]` | n/a (case fact) | yes |
| Verdict card | "24 months" | §2, case K11 | `[C K11]` | n/a | yes |
| Verdict card | "₹3,600 entry plan" | §17.3 | `[A09]` | `V.plans` | yes |
| Verdict card | "break-even in month 21" | §19, §24.2 | `[M]` | `V.be` | yes |
| Precedent card 1 | "Gousto: third profitable year in a row" | §11.4 | `[S27]` | `V.glob` | yes |
| Precedent card 2 | "Blue Apron: about $1.9bn at IPO, sold for $103m" | §11.3 | `[S24]` `[S25]` | `V.glob` | yes |
| Mind map spoke 2 | "₹499 to ₹660 an order" | §9.2 | `[S12]` | `V.routes` | yes |
| Mind map spoke 3 | "₹250 to ₹450 a meal" | §9.2, case M2 | `[C M2]` | `V.routes` | yes |
| Mind map spoke 4 | "₹3,500 a box" | §10.3, case M3 | `[C M3]` | `V.routes` | yes |
| Mind map spoke 5 | "₹5,200 a box" | case K2 | `[C K2]` | `V.routes` | yes |
| Rebuilt card | "₹3,600, ₹5,200 and ₹6,600 plans" | §17.3 | `[A09]` | `V.plans` | yes |
| Team table | three member rows | memory `project_verdict_harvestbox.md`, plan §0 | n/a |: | yes |
| Source line | "research sections 2, 9, 11 and 17" | n/a |: | n/a | yes |

## Slide 2, Diagnosis and evaluation

| Panel | Text or number | Research section | Tag | Values key | Matches |
|---|---|---|---|---|---|
| Headline | "₹7,000" CAC | case U3 | `[C U3]` | `V.unit` | yes |
| Headline | "45% leave by month 3" | case R2 | `[C R2]` | `V.wf` | yes |
| Headline | "₹2,281 of gross profit" | §6, model | `[M]` | `V.unit` | yes |
| Headline | "cash by month 16" | §13 to 16, model T4 | `[M T4]` | `V.cashq` (zero column) | yes |
| A1 issue tree | "Gross margin −7 pts" | §3.2, T1 | `[M T1]` | n/a | yes (38%→31%) |
| A1 issue tree | "Marketing +8 pts" | §3.2, T1 | `[M T1]` | n/a | yes (22%→30%) |
| A1 issue tree | "Food waste 6% of input" | case X2 | `[C X2]` | n/a | yes |
| A1 issue tree | "Kitchens 68% used" | case X1 | `[C X1]` | n/a | yes |
| A1 issue tree | "₹8.31 Cr explained by CAC" | §25.1, T2 | `[M T2]` | `V.unit` (`acq`) | yes (8.314) |
| A1 issue tree | "₹4.29 Cr not explained" | T2 | `[M T2]` | `V.unit` (`brand`) | yes (4.286) |
| A1 issue tree | "The one line that improved" | T1, case P22-P25 | `[C P22]`-`[C P25]` | `V.ox` | yes (28%→23%) |
| A2 line chart | gross margin 38,36,33,31 | T1 | `[M T1]` | `V.gm` | yes |
| A2 line chart | marketing 22,25,28,30 | T1 | `[M T1]` | `V.mk` | yes |
| A2 callout | "31p, 38p, then 49p" | T1 (mkt/new revenue) | `[M T1]` | `V.dmk` | yes |
| A3 waffle | 45, 21, 15, 19 | T2, case R1-R4 | `[M T2]` | `V.wf` | yes |
| A3 pair | "₹4,719" leaver loss | T2 | `[M T2]` | `V.unit` | yes |
| A3 pair | "2.56x" stayer ratio | T2 | `[M T2]` | `V.unit` | yes |
| A3 caption | "payback month 10, 23 remain" | T2 | `[M T2]` | `V.pay` | yes |
| B1 heat table | "Case" column 34,27,18,11,10 | case W1-W5 | `[C W1]`-`[C W5]` | n/a | yes |
| B1 heat table | "Review" column 42.5,27.1,1.8,12.4,16.2 to 18.4 | §7.2, T38 | `[V2]` `[V3]` | `V.rv` | yes (order: rigidity, delivery, menu, waste; see note below) |
| B1 heat table | "Fix" column A, none, A/C, A, none | §7.1, T34 | n/a | `V.fix` | yes |
| B2 scorecard | growth/profit/cash/risk/score rows | §16.2, T9 (repaired) | `[M T9]` | `V.score` | yes |
| B3 quote | HelloFresh 1-star review text | §7.3, research line ~287 | n/a | `V.quote` | yes |
| B3 quote | "Play Store review of HelloFresh, 1 star, Aug 2026" | §7.3 | n/a | `V.quote` | yes |
| B4 chart | quarterly cash, drift/A/B/C | T13, T4 | `[M T13]` `[M T4]` | `V.cashq` | yes |
| B4 legend | "No decision M18, A M16" / "B M16, C M15" | T4 (zero column) | `[M T4]` | `V.zero` | yes |
| So-what | "2.80" | T9 | `[M T9]` | `V.score` | yes |

## Slide 3, Strategic recommendation

| Panel | Text or number | Research section | Tag | Values key | Matches |
|---|---|---|---|---|---|
| Headline | "1.55x to 2.70x" | §23.1a, T12 | `[M T12]` | `V.ladder` | yes |
| Headline | "same ₹1.8 Cr" | case PA2 | `[C PA2]` | n/a | yes |
| A1 badge 1 | "₹0.29 Cr worse than doing nothing" | §13, model | `[M]` | n/a | yes (eb1 A_written minus drift = −0.2913) |
| A1 badge 2 | "₹8,333 a store a month" | §14, T2 | `[M T2]` | `V.unit` (`b_store_m_rs`) | yes |
| A1 badge 3 | "₹5 Cr is a third of the cash" | case PC2 | `[C PC2]` | n/a | yes (5/15) |
| A2 table | five feature rows | §17.1 to §17.6 | `[C PA1]` `[A09]` `[A11]` | n/a | yes |
| A3 plan cards | ₹3,600/8 meals/₹450/20%; ₹5,200/12/₹433/65%; ₹6,600/16/₹412/15% | §17.3 | `[A09]` | `V.plans` | yes |
| A3 divider | "Private label: ₹3,500 a box" | §10.3 | `[C M3]` | `V.pl` | yes |
| A3 skip strip | 2-box-in-3-month floor | §17.1 | `[C PA4]` | n/a | yes |
| B1 funnel | AARRR 5 stages and figures | §18.1, plan §8 | `[A10]` `[A11]` `[A14]` | `V.aarrr` | yes |
| B2 ladder | 1.55, 1.67, 1.83, 2.70, 3.0 | T12 | `[M T12]` | `V.ladder` | yes |
| B3 table | −7.55/−7.09, 5.65/2.92, −1.69/−3.19 | §16.4, T92 | `[M]` | `V.ins12` | yes |
| B3 rich text | "+₹0.46 Cr", "₹2.73 Cr less cash", "₹1.50 Cr worse" | §16.4 | `[M]` | `V.ins12` | yes |
| So-what | "₹4 Cr", "₹7 Cr", "2.2x" | §24.2 | `[M]` | `V.gate` | yes |

## Slide 4, Financial and risk case

| Panel | Text or number | Research section | Tag | Values key | Matches |
|---|---|---|---|---|---|
| Headline | "₹9.2 Cr to ₹0.8 Cr" | §19, T4 | `[M T4]` | n/a | yes (eb2 base is −0.75, rounds to ₹0.8 Cr loss) |
| Headline | "break-even in month 21" | §24.2 | `[M]` | `V.be` | yes |
| Headline | "cash never below ₹2.9 Cr" | T4 | `[M T4]` | n/a | yes (mincash base 2.89) |
| A1 bridge | 10 bars, −9.24 ... +0.10 | §19.3, T6 (post R11 split) | `[M T6]` | `V.bridge` | yes (sum checked, reaches +0.10 exactly) |
| A1 bridge | "Cheaper CAC +3.77" (sum of three split rows) | §18, §19.3 (R11) | `[M T6]` | `V.split` | yes (2.21+0.50+1.07=3.77) |
| A2 moneyshot | "MONTH 21" | §24.2 | `[M]` | `V.be` | yes |
| A2 kv | "₹2.9 Cr, lowest cash, month 20" | T4 | `[M T4]` | `V.mincash`/`V.minm` | yes |
| A2 kv | "₹0, new funding needed" | §2.4 | n/a |: | yes |
| A2 split bar | +2.21, +0.50, +1.07 | §18, §19.3 (R11) | `[M T6]` | `V.split` | yes |
| A2 fine print | "A10", "A14" | §25.2 | `[A10]` `[A14]` | n/a | yes |
| B1 table | scenario rows (revenue, margin, mkt%, EBITDA, cash, retention, LTV/CAC) | §19 to §21, T121 | `[M]` summary dict | `V.scen` | yes, worked directly from `model_outputs.json['summary']` |
| B2 chart | quarterly cash, 5 series | §19, §20, T124 (R5 repair) | `[M]` monthly dict | `V.cashq` | yes, `bear` ends at 1.5/month24 reading in the quarterly table matches the model's `bear_cont` series at that cadence; the true no-response `bear` series (ends −2.70, zero at month 20) comes from `model_outputs.json['monthly']['bear']`, not from `model_tables.md` T13's mislabelled row: see Unresolved note 1 |
| B2 gate line | "Month 12 gate, ₹7 Cr" | §24.2 | `[M]` | `V.gate` | yes |
| B2 marker | "Low ₹2.9 Cr, month 20" | T4 | `[M T4]` | n/a | yes |
| B3 heat map | 12 risk cells (probability, impact) | §21.1, §21.2 (R2 + R4b repair) | `[M]` register | `V.risk` | yes, derived row by row from the repair table and cross-checked against plan's own `V.risk` array; all 12 rows match exactly |
| B3 badges | triggers for risks 4, 1, 5, 10 | §21.1 (R4 repair for risk 4) | `[C PA4]` `[A10]` `[A18]` `[A25]` | n/a | yes, "over 6% for 2 months" used (post-R4 wording), not the unrepaired "over 10%" still on disk in `research/parts/part-F.md` |
| So-what | "every downside turns negative" | T7 | `[M T7]` | `V.torn` | yes |

## Slide 5, 90-day plan and KPIs

| Panel | Text or number | Research section | Tag | Values key | Matches |
|---|---|---|---|---|---|
| Headline | "five cities on ₹1.8 Cr" | §22 | `[C PA2]` `[C K9]` | n/a | yes |
| Headline | "seven KPIs", "by month 6" | §23 | `[M T11]` | `V.kpi` | yes |
| A1 Gantt | 8 workstream rows, W1 to W13 | §22.1 | n/a | `V.gantt` | yes, row labels and spans are this reviewer's own shortening of the research's 8-workstream table to fit the 18-character ceiling; content (which weeks each workstream runs) matches §22.1's table |
| A1 milestones | W4, W8, W12 | §22.2 | n/a |: | yes (day 30/60/90 approximated to W4/W8/W12 per plan's own instruction) |
| A2 donut | "₹1.8 Cr" centre | §22.5, T10 | `[M T10]` `[C PA2]` | n/a | yes |
| A2 legend | 35/15/15/10/10/15% | §22.5 | n/a | `V.budget` | yes, sums to 1.80 exactly |
| A2 stacked bar | uses of ₹15 Cr (5 lines) | T10 | `[M T10]` | `V.uses` | yes, sums to 15.00 |
| B1 KPI table | 7 rows, 5 columns each | §23.1, T11 (M2/M3 repair) | `[M T11]` | `V.kpi` | yes, "M2: 81%" and "from M4" and "over 6% for 2 months" are the POST-repair values already present in `model/model_tables.md` T11 (confirms the model-side repair M2/M3 is already live); the research prose in `research/parts/part-F.md` §22 and §23 still carries the pre-repair "pilot 62%" and "over 10% for two months" wording on disk, so the slide copy uses the model table, not the research prose, per the task's instruction to use the corrected wording |
| B2 gauges | "₹7.67 Cr against ₹7 Cr", "2.74x against 2.2x" | §24.2 | `[M]` | `V.gate` | yes |
| B2 decision tree | "₹4 Cr, two cities, sales from M14" | §19.1 (R7 repair), §24.3 | `[A23]` | n/a | yes, "months 13 to 15, sales from month 14" per R7's corrected wording |
| B2 decision tree | "₹5.6 Cr cash at M24" | T4 (core row) | `[M T4]` | n/a | yes |
| So-what | "₹1.8 Cr", "₹7 Cr", "2.2x" | §24.2 | `[M]` | `V.gate` | yes |

## Slide 6, Appendix 1

| Panel | Text or number | Research section | Tag | Values key | Matches |
|---|---|---|---|---|---|
| A1 forces | buyer High(4), substitute High/rising(5), entrant Moderate(3), supplier Low-to-moderate(2), rivalry Low(1) | §10.1 | `[S61]` `[S62]` | `V.forces` | yes |
| A2 matrix | five routes positioned | §9.2, §10.2 | n/a | `V.routes` | yes (qualitative placement, no figure to mismatch) |
| A3 dark stores | 969, 828, 627, 615, 497 | §9.5 | `[S07]` | `V.dark` | yes |
| B1 reports table | IMARC $6.2bn/7.61%, Ken $1.28bn/16.40%, Technavio $2.17bn/28.80%, GlobalData ₹19,931.6m/14.29% | §9.3 | `[S02]`-`[S05]` | `V.reports` | yes |
| B2 India bars | Rebel 1420, Country Delight 1380, Licious 795, iD Fresh 681, Curefoods 635, FreshToHome 421, HarvestBox 42 | §12.1, §12.2 | `[S42]`-`[S56]`, case K5 | `V.india` | yes |
| B2 caption | "Chef's Basket ... never crossed ₹10 Cr" | §12.1 | `[S38]` | n/a | yes |
| B3 precedents | Gousto, HelloFresh, Marley Spoon, Blue Apron facts | §11.2 to §11.4 | `[S20]`-`[S28]` | `V.glob` | yes |
| So-what | "₹250 to ₹450", "₹3,500", "₹5,200" | §9.2, §10.3 | case M2, M3 | `V.routes` | yes |

## Slide 7, Appendix 2

| Panel | Text or number | Research section | Tag | Values key | Matches |
|---|---|---|---|---|---|
| A1 assumptions | 9 rows (A10, A08, A01, A23, A18, A17, A14, A19, A12/A13) | §25.3 | `[A##]` as listed | `V.assum` | yes, these are the exact "nine that matter most" ranked in §25.3; values match §25.2's register |
| A2 glossary | 14 short-form rows | plan §8, Appendix D | n/a |: | yes, wording is this reviewer's own full-word shortening to the stated 22-character ceiling; no figure involved |
| B1 reconciliation | 62,000/₹387 Cr/990; 39,200/990; 6.8 boxes | §4.2, §4.3 | case K1, K5, X4, X5, U4 | `V.check` | yes |
| B2 tornado | 8 rows, swings ordered 2.77 down to 0.93 | §20.3 (and §21.1, §25.3), T7 | `[M T7]` | `V.torn` | yes, swing order (referral, skip, retention, ready-to-eat, margin, website conversion, brand spend, overhead) matches recomputed hi-minus-lo swings from `model_outputs.json['tornado']` exactly |
| B3 break-even inputs | referral 20%→18.1%, skip 5%→5.6%, retention 65%→64.5%, conversion 3.3%→3.27%, margin +4.0→+3.8 | §20.5, T127 | `[M T127]` | `V.beIn` | yes |
| So-what | "no customer interview or pilot" | Appendix E | n/a |: | yes |

## Slide 8, thank you

| Panel | Text or number | Research section | Tag | Values key | Matches |
|---|---|---|---|---|---|
| Verdict line | "break-even in month 21 on the ₹15 Cr in the bank" | §24.2, case K4 | `[M]` `[C K4]` | `V.be` | yes |
| Team table | same three rows as cover | n/a |: | n/a | yes |

---

## Final reconciliation, 10 October 2026

All three previously flagged build issues are resolved: T13 now distinguishes bear and bear with response; the scorecard uses +₹4.7 Cr for A's 24-month revenue delta; values.json exists and is regenerated from model hash 06111c6c33.

The acquisition bridge uses the unrounded total ₹3.77 Cr. Individually rounded components are ₹2.21, ₹0.50 and ₹1.07 Cr; the slide states that parts are rounded. The 12.6% skip threshold cancels standalone retention uplift; 5.6% flips the full base run-rate negative. The rolling floor requires two shipped boxes in three months; cancellation remains available.

The model's 14 checks pass. The base case is a conditional forecast, not validated primary research. Two case scale metrics remain excluded from the forecast. Appendix 2 explicitly discloses the validation gap. The closing slide contains the team table and organiser logos; its prior repeated verdict card has been removed in the final layout.
