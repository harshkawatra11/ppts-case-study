# Deck derivation: section mapping and per-number trace

Skill touchpoint T4 mapping (PLAN.md §5.4), confirmed against references/archetypes.md:

| Slide | Archetype | Skill section |
|---|---|---|
| S1 Cover | Cover + hub-and-spoke mind map | Front matter |
| S2 The Situation | Multi-chart action-title slide | I Executive summary (seed) + II Context |
| S3 Strategic Alternatives | MECE option filter + sensitivity matrix + section closer | III Actors (symmetric) + V Feasibility |
| S4 The Rs 1 Crore Decision | Moneyshot + implementation uses | IV Quantitative analysis |
| S5 Recommendation and Roadmap | Implementation plan + risk register | VI Recommended alternative |
| S6 Annexure | Appendix deep dives | Appendix |
| S7 Thank you | Conclusion synthesis ("Therefore") | VII Conclusion |

All model-sourced numbers on every slide come from `model/model_outputs.json["deck"]` via `deck/make_values.py`,
which is read directly by `deck/gen.py`; there is no separate hand-typed number anywhere in `deck/slides/*.js`.
Every such number therefore automatically matches `research/ARGUMENT.md`'s locked-numbers section and, once the
research document is assembled, the research document itself, because both derive from the same
`model_outputs.json`. The research constants (PETROL, POLICY, PMLINE, CLIENTS, BIBLIO, SRC) are hand-set in
`make_values.py` from VERIFIED lane rows (R-D, R-E, R-C), each with its row ID in a comment.

Per-panel trace table: completed at step D7 (PLAN.md §5.7), after the research document is assembled, by reading
`research/harvestbox-research.md` equivalent (`research/swiftkart-research.md`) sections 2 to 25 and confirming
every panel's text and number is established there with the same tag. Pending until R4/R6 complete.

| Panel | Text or number | Research section | Tag | Model key | Matches |
|---|---|---|---|---|---|
| S1 verdict card | "do both, lease every bike..." | 2 | n/a | V.cover_line | pending |
| S1 mind map seed | "A leased EV costs Rs 3,500..." | 4, 9 | [M] | V.lease, V.own_all | pending |
| S2 h1 | petrol 34%, Rs 3,520, 100% use | 3, 4 | [M] | V.h1 | pending |
| S2 petrol chart | Delhi petrol series 2022-2026 | 8 | [RD01-12, S240-247] | PETROL | pending |
| S2 policy timeline | Nov 2023 to Apr 2028, incl. Dec 2026 ban | 8 | [RE] | POLICY, PMLINE | pending |
| S2 client panel | Flipkart/Amazon/Zomato commitments | 6 | [RC] | CLIENTS | pending |
| S3 h2, options table, score bars | NPV 5.76 Cr, options 1-6 | 13, 16 | [T4, T5, T6] | V.h2, V.opts, V.scores | pending |
| S3 heat map | 7 uncertainties x 6 options | 19 | [T12] | V.heat | pending |
| S4 h3, donut, uses table | Rs 44.5L working capital, Rs 5.8L reserve | 17 | [T9] | V.h3, V.uses_txt | pending |
| S4 moneyshot | Rs 42.2L to Rs 2.06 Cr, 4.9x | 18 | [M] | V.rr0r, V.rr5, V.mult | pending |
| S4 bridge | contribution bridge 7 steps | 18 | [T15] | V.bridge6 | pending |
| S5 h4, roadmap, gates | 175 EVs, month 12, no debt | 22, 23 | [M] | V.h4, gantt | pending |
| S5 risk grid | 5 of 12 risks shown | 21 | [risk register] | V.risks | pending |
| S6 h5, scenarios, tornado | switch points, bear/base/bull | 19, 20 | [T10, T11, T13] | V.h5, V.scen, V.tor | pending |
| S6 assumptions table | A12, A11, A13, A01, A08, A15, A14, A16 | 25 | [A##] | V.assum | pending |
| S6 bibliography | 12 sources | Appendix A | [S###] | BIBLIO | pending |
| S7 thanks card | "lease every bike..." | 25 close ("Therefore") | n/a | V.thanks | pending |

Gate G-D0: both files exist (this file and slide-copy.md); constants verified against lane data (done); per-panel
trace completed at D7.
