### §4.5 Step R3: writers (seven parts; at most 3 at once; order A, B, C, then D, E, F, then G)

**Writer rules** (copy verbatim into `parts/WRITER-BRIEF.md`; paste into every writer prompt):
- Use the exact H2 titles below, in order, numbered `## N. Title`. Replace every `<...>` with the real number from the raw
  files or the model, with its unit. Each H2 opens with `**Answer.** <2 to 4 sentences: the finding with numbers and
  tags>` and ends with `### What this section establishes, and what it does not` (3 to 6 bullets). H3s are `### N.M Title`.
- **No browsing.** Use only `research/raw/*`, `research/data/*.csv`, `model/model_tables.md`, `model/model_outputs.json`,
  `case/01-case-brief.md`, `research/ARGUMENT.md`. Arithmetic on cited numbers is allowed: show it inline once.
- Tags, in square brackets: `[C D05]` brief sentence, `[A12]` assumption, `[M]` model output, `[T5]` model table,
  `[RA12]` raw fact (primary provenance), `[S123]` source. Every number carries a tag. Any paragraph that uses an
  assumption says "assumption" once. Aggregator-only or vendor-only facts carry "(aggregator-reported)" or "(vendor-reported)".
- Options are always "option 1" to "option 6" with the descriptions in T4 ("option 6, leasing both fleets and
  electrifying first"); the no-award branch is "the no-award branch". No other labels.
- Symmetric template for each option in §14 to §16, H3s in this order: `What it is`, `Cash and debt`, `Value over 48
  months`, `Run-rate and margin`, `Emissions and the contract test`, `Exposure to the seven uncertainties`,
  `What would make it right`.
- Each section that feeds a slide ends with a line `Exhibit for the deck: <slide and panel from §5.5, or "none">`.
- Style §0.5. No em or en dashes. No question headings. No exclamation marks. ₹ with Indian grouping, never "Rs".
- Self-check after every H2 (paste the output in your report):
  `PY -c "import re,io;t=io.open(r'<part>',encoding='utf-8').read();print('words',len(t.split()),'tables',len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),'dashes',len(re.findall('[\u2014\u2013]',t)),'excl',t.count('!'),'ph',len(re.findall(r'<[a-z][^>]{0,20}>',t)),'rs',len(re.findall(r'\bRs\.? ?\d',t)))"`
  must print `dashes 0`, `excl 0`, `ph 0`, `rs 0`. (Run it from a `.py` file if PowerShell mangles the quotes: §1.6.)
- Append to the file after each H2.
- Before finishing, invoke the skill (T3) and check every H2 and H3 title against `rhetoric.md`; log `SKILL T3`.

**Outline (exact H2 titles; `<...>` filled from data, never invented):**

| § | H2 title (exact) | Must contain | Tables min | Words min | Writer |
|---|---|---|---|---|---|
| 0 | 0. Document control | purpose and reader; tag legend; source hierarchy (§0.3 rule 7); verification status by lane (from R0-verify); model version and hash; what is case fact, assumption, model output and outside evidence; the skill's calibration note; how to rerun the model; document map | 6 | 1,800 | A |
| 1 | 1. Every line of the brief, mapped: where it is answered and on which slide | RTM for every brief ID (H01 to I08) with how we use it, section and slide; judging criteria map (§1.3); where the evidence is thinnest | 4 | 2,500 | A |
| 2 | 2. The answer on one page: lease every bike, electrify first, win the contract, and keep ₹15.2 L of the crore in reserve | recommendation; obvious answers and why each falls short (§2.2); three reasons each side; the moneyshot; kill criteria; the no-award branch; a 150-word version for the cover; headline numbers table | 8 | 3,200 | A |
| 3 | 3. SwiftKart today: ₹3.18 crore of revenue a year, ₹3,520 kept per bike a month, and petrol takes 34% | unit economics per bike-month (T2); annual P and L at contribution level; cost structure shares; what the case does not tell us (overheads, debt, cash beyond the crore) | 8 | 3,500 | A |
| 4 | 4. Reading the case closely: seven numbers that change the answer | insights 2, 3, 4, 6, 11, 14 and the subsidy wording (X06 "may"); each with arithmetic; what we would ask SwiftKart's finance head on day 1 | 7 | 3,500 | A |
| 5 | 5. The market: last-mile delivery in Delhi-NCR is growing on quick commerce, and fleets compete on reliability | R-A facts with every conflict between reports stated; demand drivers; what the case's 85% utilisation means in this market | 8 | 4,000 | B |
| 6 | 6. The clients: `<n>` large Indian e-commerce buyers have public EV commitments, and listed clients now need suppliers' emissions data | R-C commitments table; BRSR Core; Scope 3 Category 4; what "monthly reporting of emissions-related metrics" `[C O05]` requires in practice | 8 | 3,800 | B |
| 7 | 7. Competition: a 100-bike operator wins on uptime and data, not on price | five forces with evidence per force; strategic groups (platform-owned fleets, national 3PLs, EV-native fleet providers, small operators); where SwiftKart sits | 7 | 3,500 | B |
| 8 | 8. The policy clock: Delhi makes new two-wheeler registrations electric-only from `<date>`, so a petrol delivery bike loses value every month | R-E timeline; PM E-DRIVE amounts and dates; Delhi EV Policy 2.0; aggregator and delivery scheme; labour codes; insight 14 with A17 | 8 | 3,800 | B |
| 9 | 9. Vehicle economics: a bought EV costs ₹5,684 a month all-in, a leased one ₹3,500 | T2, T3 with the annuity arithmetic; contribution per configuration; R-D TCO studies compared; insight 4 and 5 | 9 | 4,200 | C |
| 10 | 10. The leasing market: who rents EVs to fleets in Delhi-NCR, at what price, and why leasing wins up to ₹5,151 a month | R-B providers and quotes normalised; switch points (T13); subsidy needed to flip (₹94,521); real market rates against the case's ₹3,500 stated plainly (§2.10 point 1) | 8 | 3,800 | C |
| 11 | 11. Range, charging and downtime: 30 deliveries a charge is a full day with no headroom at full use | insight 3; battery degradation evidence; depot versus swap; spares sizing (10 spares, 95% availability, A15); heat | 7 | 3,200 | C |
| 12 | 12. Emissions: 245 g of CO2 a delivery today, 108 g on the leased fleet, reported every month | method (A19 to A24 with sources); T14; ISO 14083 and GLEC; the monthly report's contents; green power as upside | 8 | 3,500 | C |
| 13 | 13. Six options, one scorecard: how the alternatives are built and scored | MECE option filter (T4); the scoring rules and formula (T6) with each band stated; why these six cover the case's list `[C T04]` | 7 | 3,200 | D |
| 14 | 14. Options 1 and 2: staying petrol keeps ₹42.2 L a year, and buying 100 EVs spends ₹90 L of the crore on one job | symmetric template ×2 | 7 | 3,200 | D |
| 15 | 15. Options 3 and 4: buying for the contract needs ₹25 L of debt, and buying both needs ₹1.00 crore | symmetric template ×2; option 4 as the obvious answer, fairly stated | 8 | 3,400 | D |
| 16 | 16. Options 5 and 6: leasing for both fleets is worth ₹5.79 crore over 48 months, ₹1.10 crore more than buying both | symmetric template ×2; the T5 comparison; heat map T12; closes with a paragraph beginning "Conclusively" | 8 | 3,400 | D |
| 17 | 17. The ₹1 crore decision: ₹84.8 L goes to five uses a lease cannot cover and ₹15.2 L stays in reserve | T9 with the arithmetic per line and its timing; sources and uses including ₹29.7 L of petrol sales; why nothing goes on vehicles | 8 | 3,600 | E |
| 18 | 18. Financial case: contribution rises from ₹42.2 L to ₹2.06 crore a year by month 24, with no debt | T7, T8, T15 bridge with a paragraph per step; cash path against buying both; the moneyshot; §2.10 points 2 and 4 in full | 10 | 3,800 | E |
| 19 | 19. Scenarios and sensitivity: the plan holds in bear and bull, and the price per delivery moves it most | T10, T11, T12, T13; which three inputs matter most and what evidence would firm each up; §2.10 points 1 and 3 | 9 | 3,600 | E |
| 20 | 20. Financing: why no debt, what the 11% loan really costs, and the option to buy at renewal | EMI ₹3,601 against the lease; debt each option needs; Ind AS 116 treatment of leases (lease liabilities still exist); real option at month 36 | 7 | 3,000 | E |
| 21 | 21. Risk register: twelve risks, each with a trigger and a control | 12 risks with probability, impact, early signal, trigger, control, owner; 3×3 heat map as a table; pre-mortem ("it is month 12 and the plan has failed: the three most likely stories") | 5 | 2,800 | F |
| 22 | 22. The 24-month roadmap: four gates decide each next step | quarter-by-quarter plan; gates G1 (M3), G2 (M8), G3 (M12), G4 (M24) with tests and both outcomes; the no-award branch | 6 | 2,800 | F |
| 23 | 23. Operating model: two lessors, ten spares, one depot and pooled dispatch keep fulfilment at 95% | riders, hiring, training; lessor selection and split; depot; dispatch pooling across clients; RACI with letters expanded | 7 | 3,000 | F |
| 24 | 24. KPIs and the monthly report: `<n>` numbers management and the client see every month | KPI tree from contribution down; definitions, formulas, sources, cadence, owner, targets, triggers; the client emissions report layout | 5 | 2,400 | F |
| 25 | 25. Impact: 88% more deliveries, 56% less CO2 per delivery and 4.9 times the contribution | people (riders, training, safety), planet (T14), profit (T15); closes with a paragraph beginning "Therefore" | 6 | 2,600 | F |
| 26 | 26. The deck: four slides and an annexure, and where every number on them comes from | slide blueprint per §5.5; derivation table panel → section → tag → model key; cover mind-map nodes and logo slots | 4 | 1,800 | G |
| 27 | 27. Forty questions the judges are likely to ask, and our answers | 40 questions, hardest ten first, each `**Q7.** "..."` with a 60 to 120 word answer citing a number and its tag (T7) | 2 | 5,000 | G |
| 28 | 28. Method, limits and the validation we would run next | desk research versus model versus assumption; limits; validation plan (first sentence: none of it has been run): lessor RFP, client SLA terms, rider time-and-motion on 10 EVs, emissions pilot report | 4 | 2,200 | G |

Writer G also writes `parts/appendix-E-glossary.md` starting `## Appendix E: Glossary` with ≥ 70 terms (3PL, AIS-156, BRSR,
CEA, contribution, DERC, DRHP, EMI, EV, EV100, GHG, GLEC, Ind AS 116, ISO 14083, kWh, LFP, MHI, NPV, PM E-DRIVE, PPAC,
QC, RACI, Scope 1, Scope 2, Scope 3, SLA, SoH, TCO, VAHAN and more).

Part files: `part-A.md` §0 to §4; `part-B.md` §5 to §8; `part-C.md` §9 to §12; `part-D.md` §13 to §16; `part-E.md` §17
to §20; `part-F.md` §21 to §25; `part-G.md` §26 to §28. Assignments as in the table. Writer G runs last and also reads
parts A to F.

