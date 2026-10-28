# Deck derivation check (step D5)

Every panel on every slide, checked against `deck/values.js` (written by the relabelled model, hash `06111c6c33`)
and the research sections named in DECK-PLAN.md section 2. `values.js` figures are model outputs the research also
uses, so a "yes" there means the two deliverables report the same number; the few constants hand-written into the
slide scripts (not from `values.js`) are checked against the research location given in DECK-PLAN.md section 4.

## Slide 1, Cover

| Panel | Text or number on the slide | Research section | Tag | Matches | Change |
|---|---|---|---|---|---|
| Verdict card | "FUND PROPOSAL A, REBUILT. Free skipping with a floor, a ₹3,600 entry plan and referral, alongside the smaller operational improvements the case allows." | §2 | `[C G2]`, `[A09]` | yes | none |
| Verdict card | "break-even in month 21 ... cash never below ₹2.9 Cr" | §19 | `[M]` | yes, from `V.be`/`V.mincash` | none |
| Dinner map, Cook from scratch | "groceries in minutes" | §9.2 | no verified India figure, stated as a gap in the research | yes (qualitative, matches the gap) | none |
| Dinner map, Order in | "₹499 to ₹660 an order" | §9.2 | `[S12]` | yes | none |
| Dinner map, Ten-minute food | "₹250 to ₹450 a meal" | §9.2 | `[C M2]` | yes | none |
| Dinner map, Private-label kit | "₹3,500 a box" | §9.2 | `[C M3]` | yes | none |
| Dinner map, HarvestBox kit | "₹5,200 a box" | §9.2 | `[C K2]` | yes | none |
| Rebuilt node | "₹3,600, ₹5,200 and ₹6,600 plans, free skipping" | §17.3 | `[A09]` | yes | none |
| Precedent strip | "Gousto: third profitable year in a row. Blue Apron: lost 95% of its IPO value." | §11.9 | `[S27]`, `[S25]` `[S26]` | yes | none |
| Source line | "research, sections 2, 9 and 11" | n/a | n/a | yes | none |

## Slide 2, Diagnosis and evaluation

| Panel | Text or number | Research section | Tag | Matches | Change |
|---|---|---|---|---|---|
| History table | 4-year table, 2022-2025, Revenue/GM/Mktg/Other/EBITDA | §3 | `[C P22]` to `[C P25]` | yes, from `V.hist` | none |
| Survival curve | 12-month curve, payback marker month 10, 23% remain | §5 | `[C R1]` to `[C R4]`, `[M]` | yes, from `V.surv`/`V.payback`/`V.pay_surv` | none |
| Two customers | 45%/55% split, 1.4/11.2 boxes, ₹2,281/₹17,915 gross profit | §6 | `[M]` | yes, from `V.two` | none |
| Exit reasons heat table | Case shares 34/27/18/11/10%; review mix 42.5/16.2/1.8/12.4/27.1%; who answers A/none/A,C/A/none | §7.1, §7.2, Appendix C table V3 | `[C W1]` to `[C W5]`, `[V3]` | yes, from `V.why` and hand-written `RVM` array matching Appendix C exactly | none |
| History/two-customer/scorecard headers | "Rev", "By M3"/"Past M3", "Grw" | §3, §6 | n/a | yes, shortened for real-Figma text width during D8; meaning unchanged | header words shortened after a V1 validator fail (see build-log D8) |
| Scorecard | A 1,2,4,4=2.80; B 5,3,3,2=3.20; C 4,5,1,2=3.00; A rebuilt 1,5,4,4=3.70 | §16.2 | `[T9]` | yes, from `V.opt` | none |
| Cash paths | 4 lines to zero: M18/M16/M16/M15 | §13 to §16 | `[M]` | yes, from `V.cashq`/`V.zero` | none |
| Source line | "research sections 3 to 8 and 13 to 16" | n/a | n/a | yes | none |

## Slide 3, Strategic recommendation

| Panel | Text or number | Research section | Tag | Matches | Change |
|---|---|---|---|---|---|
| Do not card | A as written ₹0.29 Cr worse Y1; B ₹8,333/store/month; C ₹5 Cr into a leaking base | §13, §14, §15 | `[M]` | yes, from `V.aw1`/`V.b_store` | none |
| Do card | Skip floor, break-even skip rate 12.6%; ₹3,600 plan; CAC to ₹4,745 | §17 | `[M]`, `[A09]` | yes, from `V.be_skip`/`V.cac24` | none |
| Skip-rate heat grid | 4x4 grid, retention 55-70% by skip 0-15% | §20.4, §20.5 (grid table) | `[T8]` | yes, from `V.grid`/`V.grid_raw` | none |
| Feature table | 5 features, as written vs rebuilt | §17.1 to §17.6 | `[C PA1]`, `[A08]` to `[A11]` | yes, hand-written to match | none |
| LTV ladder | 1.55x to 2.70x across 4 steps to a 3.0x benchmark | §6.2 (ladder) | `[T12]` | yes, from `V.ladder`/`V.lc24` | none |
| Conclusively card | Gate: cash ₹7 Cr, LTV to CAC 2.2x, month 12; staged RTE ₹4 Cr of C's ₹5 Cr; Gousto precedent | §24.2, §24 | `[M]`, `[A23]`, `[S27]` | yes | none |
| Source line | "research sections 2, 11, 13, 16, 17" + Gousto citation | n/a | n/a | yes | none |

## Slide 4, Financial and risk case

| Panel | Text or number | Research section | Tag | Matches | Change |
|---|---|---|---|---|---|
| EBITDA bridge | 10-step waterfall, -9.24 to +0.10 | §19.3 | `[M]`, `[T6]` | yes, from `V.bridge` | none |
| Moneyshot card | "MONTH 21"; lowest cash ₹2.9 Cr at month 20; ₹5.6 Cr without RTE | §19 | `[M]` | yes, from `V.be`/`V.mincash`/`V.minm`/`V.core_cash24` | none |
| Scenario table | Revenue/GM/Mktg/EBITDA/cash/retention/LTV-CAC across 2025/Y1/Y2/Bear/Bull | §20.1 | `[M]`, `[T4]` | yes, from `V.scen` | none |
| Risk heat map | 5x5 grid, risks 1 to 12 placed by probability/impact | §21.1, §21.2 (corrected in D2) | team judgement, stated as such | yes, hand-written `RK` array matches §21.1's table exactly, including the §21.2 fix (risk 4 now at P2/I5) | none |
| 4 nearest risks | Risks 1, 4, 5, 10 with triggers and responses | §21.1 | `[A10]`, `[M]`, `[A18]` | yes, hand-written to match §21.1's table | none |
| Source line | "research sections 19 to 21" | n/a | n/a | yes | none |

## Slide 5, 90-day plan and KPIs

| Panel | Text or number | Research section | Tag | Matches | Change |
|---|---|---|---|---|---|
| Gantt | 8 workstreams, 13 weeks | §22.1 | `[A09]`, `[A15]`, `[A17]`, `[A19]` | yes, hand-written to match the week-by-week table | none |
| Uses of cash | 5-row segmented bar/table, ₹1.8/5.53/4.0/0.75/2.92 Cr | §19 (T10) | `[M]`, `[T10]` | yes, from `V.uses` | none |
| KPI table | 7 KPIs, today/day90/M12/M24/stop trigger | §23.1 | `[M]`, `[T11]` | yes, from `V.kpi` | none |
| Therefore card | "Proposal A live in five cities, pilot retention 62%"; gate cash ₹7 Cr and 2.2x | §22, §24.2 | team target, `[M]` | yes | none |
| Source line | "research sections 18, 22 to 24" | n/a | n/a | yes | none |

## Slide 6, Appendix 1

| Panel | Text or number | Research section | Tag | Matches | Change |
|---|---|---|---|---|---|
| Assumptions table | 9 assumptions, A08 to A23 | §25.3 | `[A08]` to `[A23]` | yes, from `V.assum` | none |
| Data check | 5 rows, boxes/lifetime/new customers/subscribers/web orders | §4 | `[C]`, `[M]` | yes, from `V.check` | none |
| Tornado | 8 inputs ranked by run-rate swing | §20.3 | `[T7]` | yes, from `V.torn` | none |
| Options table | 6 rows, as written and with improvements | §16.2, §16.3 | `[T9]` | yes, from `V.optab` | none |
| Break-even inputs | 5 inputs with base and flip values | §20.5 | `[T7]` | yes, hand-written, matches §20.5's table exactly | none |

## Slide 7, Appendix 2

| Panel | Text or number | Research section | Tag | Matches | Change |
|---|---|---|---|---|---|
| Short forms 1 and 2 | 25 abbreviations with meanings | Appendix D | n/a | yes, consistent with the glossary's terms | none |
| Where each slide comes from | Document structure counts: 29 sections, 6 appendices, 65 cited sources, 8,052 reviews | Document structure, `assemble.py` output, Appendix C method | n/a | yes, 29 sections (0-28) + 6 appendices (A-F) confirmed from the assembled document; 65 sources confirmed from `sources.md`; 8,052 reviews confirmed from V-G's review-mining report | none |

## Slide 8, Thank you

Repeats slide 1's verdict and team table. No new claims. Matches.

## For the talk track (research findings no slide carries directly)

- The three unreconciled case figures (§4: 62,000 subscribers vs 6,731 boxes a month; web traffic vs implied new
  customers) are on Appendix 1's data-check table but not narrated on a core slide. Available if a judge asks.
- The honest reading (§19.6, §20: break-even not profit, every single downside turns the run-rate negative, bear
  survives only with the contingency) is implicit in the moneyshot card's wording ("EBITDA turns positive on cash
  in hand") but not spelled out as bluntly as the research states it. A speaker should be ready to say this plainly
  if pressed in cross-questioning.
- §11.10's dropped HelloFresh marketing-efficiency figure and the three-way retention conflict (§6, §5) are research
  texture that supports the recommendation but has no room on a core slide; both are available via Appendix 2's
  "where each slide comes from" panel pointing back to the full document.

## Summary

All panels and all values on all eight slides trace to a research section or a locked model output. No slide
contains a claim the research cannot support. No override was required in `deck/overrides.json` (it stays empty).
`gen.py mock` printed eight OK lines before and after this check with no further changes needed.
