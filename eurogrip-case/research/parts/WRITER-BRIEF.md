# Writer brief: Eurogrip research deliverable (parts A to F)

Copied from PLAN.md §4.4 (step R3). Read this file plus PLAN.md §0, §1, §2, §4.4 and ARGUMENT.md before writing.

### §4.4 Step R3: writers (six parts; at most 3 at once; order A, B, C then D, E, F)

**Skill mapping (T2): the 8-section logic per case inside the document**

| Skill section | Case 4 (§5 to §16) | Case 1 (§17 to §20) | Case 2 (§21 to §24) | Case 3 (§25 to §28) |
|---|---|---|---|---|
| I Executive summary | §2 (all four) | §2 | §2 | §2 |
| II Context (+ seed) | §4, §5 (seed), §6 | §17 | §21 | §25 |
| III Actors (symmetric) | §6, §7 (segments, JTBD) | §17 (three segments, same template) | §21 (EV vs ICE demands) | §26 (buyers) |
| IV Quantitative analysis | §6, §9, §11 (moneyshot) | §19 | §21, §24 | §27, §28 |
| V Feasibility | §12, §14 | §20 | §23, §24 | §28 |
| VI Recommended alternative | §10 to §13 | §18 to §20 | §22 | §27 |
| VII Conclusion | §15 closer + §29 | §20 closer | §24 closer | §28 closer + §29 |
| Appendix | Appendices A to F | same | same | same |

**Writer rules** (put verbatim into `parts\WRITER-BRIEF.md`; also paste into every writer prompt):
- Use the exact H2 titles from the outline below, in order. Replace every `<...>` in a title with the real number from
  the raw files or model, with its unit. Each H2 opens with `**Answer.** <2 to 4 sentences: the finding with
  numbers and tags>`. Each H2 ends with `### What this section establishes, and what it does not` (3 to 6 bullets).
  H3s are numbered `### N.M Title`.
- **No browsing.** Use only `research\raw\*`, `research\data\*.csv`, `model\model_tables.md`, `model\model_outputs.json`,
  `case\01-brief.md`, `research\ARGUMENT.md`. Arithmetic on cited numbers is allowed: show it inline once.
- Tags (in backticks or square brackets, as in BeyondTech): `[RA12]` raw fact (primary provenance), `[S123]` source,
  `[C4-B14]` brief sentence, `[A07]` / `[A1-03]` assumption, `[M c4.be]` model output, `[T4.3]` model table.
- Every number carries a tag. Any paragraph using an assumption says "assumption" once. Aggregator- or vendor-only
  facts carry "(aggregator-reported)" / "(vendor-reported)".
- Symmetric templates: the three Case 4 segments use the same H3 skeleton everywhere; the four case chapters each
  close with a "Conclusively" paragraph (section closer, rhetoric tactic 9).
- Each Case 4 section ends with a line `Exhibit for the deck: <panel id from §6.6 or "none">`.
- Style §0.5. No em/en dashes. No question headings. No exclamation marks. Indian notation.
- Self-check after every H2 (paste output in your report):
  `PY -c "import re,io;t=io.open(r'<part>',encoding='utf-8').read();print('words',len(t.split()),'tables',len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),'dashes',len(re.findall('[\u2014\u2013]',t)),'excl',t.count('!'),'ph',len(re.findall(r'<[a-z][^>]{0,20}>',t)))"`
  must print `dashes 0`, `excl 0`, `ph 0`.
- Append to the file after each H2 (protects against context loss).
- Before finishing, invoke the skill (T3) and check every H2 title against `rhetoric.md` §10 and §11; log `SKILL T3`.

**Outline (exact H2 titles; `<...>` filled from data, never invented):**

| § | H2 title (exact) | Must contain | Tables min | Words min | Writer |
|---|---|---|---|---|---|
| 0 | 0. Document control | purpose and reader; tag legend; source hierarchy (7 tiers per §0.3 rule 7); verification status by lane (from R0-verify); model version and hash; honesty conventions (case fact vs assumption vs model vs outside evidence); brief edit marks and the Case 4 struck-insight ruling; skill calibration note; AI-use disclosure; document map (writer per section) | 6 | 1,800 | A |
| 1 | 1. Four briefs, `<n>` requirements: where each is answered, and for Case 4 on which slide panel | RTM for each case (Case 4 = §1.2 expanded); judging criteria map per case (where we win each criterion); "where the evidence is thinnest" table | 10 | 3,000 | A |
| 2 | 2. The four answers on one page: pay mechanics for advice in tools and status, prove distance through the gig fleet, build the EV tyre on existing lines, and win the hardest-working tractors first | per case: obvious answer + 3 reasons; recommendation + 3 reasons; moneyshot with bear/base/bull; kill criteria; a 120-word version of each; headline numbers table | 8 | 3,200 | A |
| 3 | 3. Eurogrip today: TVS Srichakra earned ₹`<x>` crore in FY26, sells in `<n>` countries and reaches riders through `<k>` distributors | identity; FY21 to FY26 tables; revenue split (with derivation if estimated); brand history and naming; distribution and apps (retailer app ruling §2.2.5); product breadth; management statements; Eurogrip's standing in 2W and OHT | 10 | 4,000 | A |
| 4 | 4. India buys about `<n>` crore two-wheeler tyres a year, `<p>`% of them as replacements, and a handful of brands sell most of them | ATMA and market size; shares; SIAM sales and parc; replacement interval; channel structure and margins; GST change; rubber prices; A&P benchmarks vs the 1.5% to 2% rule; Porter's Five Forces | 10 | 4,000 | A |
| 5 | 5. A replacement tyre is chosen at a puncture or a worn tread, and the mechanic is usually the person in the room | rider journey map (stages × touchpoints × who influences); triggers; evidence on mechanic influence (labelled association, not proof); **the seed sentence** on non-stocking advocates `[C4-B14]` | 5 | 2,500 | A |
| 6 | 6. India has about `<n>` lakh outlets where a two-wheeler tyre gets recommended, and `<p>`% of them never stock one | four counting methods side by side (universe_methods.csv); segments S-A, S-B, S-C (same template each); state table and pilot-state rule result; fragmentation | 10 | 4,000 | B |
| 7 | 7. Awareness is not Eurogrip's gap: it loses at stocking and recommendation, and the mechanic's jobs explain why | MECE issue tree as nested table; brief insights (qualitative only, no invented percentages); JTBD per segment; mechanic economics; the struck-insight ruling stated once | 7 | 3,500 | B |
| 8 | 8. `<n>` influencer programmes in lubricants, batteries, parts and building materials show how India pays mechanics, and `<k>` of them credit advice without a purchase | programme teardown (one H3 per category, same template); feature-parity heat matrix from benchmarks.csv; what transfers to tyres and what does not; third-party validation quotes (verbatim only) | 10 | 4,500 | B |
| 9 | 9. A cash-per-tyre scheme would spend about `<p>`% of its money on tyres that sell anyway and fails three of the brief's five criteria | the obvious answer stated fairly; deadweight model `[M c4.cash_scheme]`; tyre purchase frequency vs lubricant; criteria scoring table | 6 | 2,500 | B |
| 10 | 10. The programme: every shop joins free, earns tools and status for each logged recommendation, and re-qualifies every six months | tier ladder (§2.2.4); loop (§2.2.5) and app ruling; reward catalogue with prices; sustainability engine (§2.2.6); counter-positioning; Kano hypothesis (flagged); fraud controls | 10 | 4,500 | B |
| 11 | 11. ₹`<x>` crore a year, `<p>`% of business-unit revenue, equips `<n>` lakh shops and pays back at `<be>` extra tyres per shop a year | BU revenue derivation; envelope; cost per member by tier; five budget lines; Year 1 vs Year 2; bear/base/bull; tornado (five largest swings); **moneyshot** with formula and arithmetic; deadweight comparison | 12 | 4,500 | C |
| 12 | 12. Two states, then eight, then all of India: three gates in 24 months decide whether more money is spent | phase table; pilot-state rule result; distributor-led enrolment operations; RACI; quarter-by-quarter members and spend; gate definitions | 7 | 3,000 | C |
| 13 | 13. Four layers of measurement and one experiment show whether recommendations moved, at a known cost per audit | KPI tree; definitions; difference-in-differences design; mystery-rider protocol; sample size and cost `[M c4.audit]`; reward-currency arm test; fraud controls; reporting cadence | 8 | 3,500 | C |
| 14 | 14. `<n>` ways the programme could fail, each paired with one control | pre-mortem; 5×5 or 3×3 heat map (probability × impact); 1:1 risk → control table (from `model\inputs\risks.csv`) | 4 | 2,000 | C |
| 15 | 15. What we have not tested yet, and the `<n>` interviews that would test it first | validation plan (roles × counts × cities × questions), what would change our mind, kill criteria; "Conclusively" closer for Case 4 | 4 | 1,500 | C |
| 16 | 16. Four slides carry the Case 4 answer: what each panel shows and where its numbers come from | slide blueprint (from §6 of this plan), derivation table panel → section → tag → model key | 4 | 1,500 | C |
| 17 | 17. Three riders, three jobs: commuters buy reliability, gig riders buy uptime, premium riders buy proof from peers | segment profiles (same template ×3); gig-rider profile built from research (the brief leaves it open `[C1-B11]`); personas as data archetypes; journeys | 12 | 5,000 | D |
| 18 | 18. One brand, one proof currency: distance travelled is the claim all three segments can check | positioning per segment; masterbrand architecture; CBBE; message hierarchy; why not three campaigns | 6 | 3,000 | D |
| 19 | 19. ₹`<x>` crore across Digital, Retail and On-ground puts `<p>`% of the money where the tyre is chosen | segment × channel matrix `[M c1]`; activation plan; media costs; fleet partnerships; bear/base/bull | 8 | 3,500 | D |
| 20 | 20. Nine campaign ideas, three per segment, each with a cost line and a measure | ideas table; KPI tree; roadmap; risks; "Conclusively" closer | 5 | 2,500 | D |
| 21 | 21. An electric scooter asks five things of a tyre that a petrol scooter does not, and rolling resistance decides about `<p>`% of its range | EV vs ICE demand table (torque, regen, NVH, load, range); size mix from ev_models.csv; physics with sources | 8 | 4,000 | E |
| 22 | 22. The EV-ready tyre: a silica-rich cap on a cool base, a variable-pitch tread and a load index `<n>` steps higher, on existing lines | concept per technical area (construct, tread, vital performance, load); QFD matrix; TRIZ contradiction; why not a premium dedicated tyre | 10 | 4,500 | E |
| 23 | 23. One tyre for `<n>` markets: compliance runs through BIS, UNECE R75 and FMVSS 119, and the car-tyre labels do not apply | compliance matrix (market × standard × tests × scope); voluntary test plan; validation stage gates | 6 | 2,500 | E |
| 24 | 24. The EV-ready variant costs about `<p>`% more to make than its petrol-scooter twin and adds `<r>`% range | cost build-up `[M c2]`; BOM by ingredient; manufacturability; FMEA; TRL ladder; moneyshot; "Conclusively" closer | 8 | 3,000 | E |
| 25 | 25. India's tractor-tyre market is worth about ₹`<x>` crore a year, and `<k>` brands hold most of it | market and shares; Five Forces; Eurogrip/TVS standing `[C3-B07]` | 8 | 3,500 | F |
| 26 | 26. A tractor tyre is chosen by the dealer, the mechanic and the neighbour, and the order changes by state | buying-centre map; regional heat map from tractor_states.csv; price sensitivity by farm size | 7 | 3,000 | F |
| 27 | 27. Win the hardest-working tractors first: haulage operators and hiring centres buy on cost per hour and talk to many farmers | segments (≥ 2, same template); value proposition; TCO model `[M c3]`; assurance pricing; credit timing | 8 | 3,500 | F |
| 28 | 28. A dealer-led plan for ₹`<x>` crore a year, `<p>`% of domestic OHT revenue | channel approach, dealer tiers, mechanic influence, budget, rollout, KPIs, risks, "Conclusively" closer | 7 | 3,000 | F |
| 29 | 29. Four answers, one company: the mechanic programme is the shared channel for three of them | cross-case links (§2.6); sequencing; shared assets; "Therefore" synthesis | 3 | 1,200 | F |
| 30 | 30. Forty questions the judges are likely to ask, and our answers | 25 for Case 4, 5 each for Cases 1 to 3; reported-speech framing ("The panel may ask: ...") | 2 | 3,500 | F |
| 31 | 31. Method, limits and what we would validate next | calibration note; desk research vs model vs assumption; limits per case; next validation | 3 | 1,500 | F |

Appendices (assembled): A Bibliography (generated) · B Model tables (from `model_tables.md`) · C Datasets (generated
from `research\data\*.csv`) · D Assumptions register (generated from `model\inputs\assumptions.csv`) · E Glossary
(writer F, ≥ 70 terms incl. ASUSE, ATMA, ASDC, BIS, BU, CBBE, CHC, CPM, DiD, DOT, ETRTO, FMEA, FMVSS, GST, ICE, JTBD,
MECE, MRP, NIC, NVH, OE, OHT, OTR, PLFS, POS, QCO, QFD, RACI, RR, S-SBR, SIAM, SKU, TCO, TMA, TRIZ, TRL, UNECE, VAHAN)
· F Data conflicts and rulings (`raw\conflicts.md`).

