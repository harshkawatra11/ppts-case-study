# Project DOBAARA: research-first execution plan for Sonnet agents and additive Figma enrichment

## 1. Outcome, sequence, and preservation rules

Produce two deliverables in this order:

1. **A complete research deliverable**, with the case solved, calculations independently checked, external context verified, assumptions disclosed, and writing edited with the humanizer skill. Deliver Markdown, HTML, and PDF versions first.
2. **A native Figma Slides deck derived from that frozen research**, followed by its submission PDF.

Research delivery is a hard dependency. Do not create the enriched Figma file or edit slide content before the research milestone passes and its files have been delivered to the user. Delivering the research does not require a second permission request before continuing to the deck.

This is an **addition to the restored Claude draft**. Preserve its recommendation, visual language, slide sequence, charts, tables, and panel architecture. Do not reuse the rejected redesigns.

The existing Figma file remains the protected original:

[Original Claude draft](https://www.figma.com/slides/KZO1f42mxT6YHTwCofkcLs)

Build the enriched edition in a separate Figma Slides file. Reproduce the original slides from Claude’s original scripts, then apply the additions specified below. Keep the original PDF and scripts unchanged.

The enriched edition will contain:

| Component | Count | Treatment |
|---|---:|---|
| Cover | 1 | Preserve original architecture; finish verified assets |
| Main slides | 8 | Preserve original sequence and enrich selectively |
| Appendix slides | 4 | Preserve A1 and A2; add A3 and A4 |
| Thank-you slide | 1 | Preserve original synthesis and team table |
| Total physical slides | **14** | Within the FAQ allowance |

The FAQ permits eight main slides and four appendix slides, excluding the cover and thank-you slide. The executive summary remains the first slide after the cover.

At execution start, save this specification as `marksoc-case/plan/research-first-additive-execution.md`. Treat it as the operational plan. Retain the previous `PLAN.md` as historical reference and a source of existing specifications, not as a bootstrap script to rerun wholesale.

### Non-negotiable constraints

- All January to March calculations use only the case and explicitly stated assumptions.
- External research provides context in the research document. It does not supply model inputs or assessed slide statistics.
- No invented interviews, customer quotations, willingness-to-pay estimates, partnerships, tests, or validation results.
- No new strategy name. Retain Project DOBAARA, Tikau Report, Battery 85 and 12 month warranty, and the case’s trade-in wording.
- No em dashes, en dashes, speech hooks, dramatic fragments, or unsupported promotional language in authored report or slide prose.
- No imported chart images. Charts, tables, heat maps, diagrams, and product mockups remain native Figma objects.
- Do not modify other case folders. Read them only for research structure or design calibration.
- Do not commit, push, submit on Unstop, or send messages to external people.
- Do not count a finished research document as a submitted competition deliverable. The FAQ says the assessed submission is the PDF deck.

---

## 2. Verified starting point and authoritative sources

### 2.1 What already exists

The current workspace contains:

- The seven-page case and two-page FAQ.
- A case transcription with reference IDs.
- A functioning Python economics model.
- Model outputs and tables T1 to T21.
- Claude’s original twelve-slide build scripts.
- The restored original Figma deck and original-draft PDF.
- Research assembly, source-register, and PDF-rendering scripts.
- An older research specification, but **no completed DOBAARA research manuscript**.

The existing model was checked in read-only mode:

```text
python -X utf8 marksoc-case/model/dobaara_model.py --dry
```

It reports:

```text
CHECKS 13/13 HASH 9b3628d94d
MODEL FINDINGS:
Superb ₹4,653
Good ₹2,524
Fair ₹716
Baseline EBITDA −₹14.1 lakh
Baseline returns 8.1%
Recommended options B1 + B2
Third shift from February
Growth money ₹58.0 lakh
March EBITDA +₹5.6 lakh
March returns 4.5%
Q1 versus doing nothing −₹0.5 lakh
84 plans screened
5 plans pass
```

These are the inherited results to audit, not conclusions that may bypass independent checking.

### 2.2 Source hierarchy

Apply this order:

1. Case PDF.
2. FAQ.
3. Case transcription, reconciled against both PDFs.
4. Explicit assumptions register.
5. Independently checked model outputs.
6. Verified external sources, for context only.
7. Other case documents and Figma decks, for structure and design only.

If the case and real-world research disagree, retain the case input for the solution. Record the disagreement in the research limitations appendix.

Do not import an assumption, company statistic, regulatory interpretation, team member, or recommendation from another competition.

### 2.3 Skills and their mandatory usage

The root `case-competition-deck.skill` archive matches the installed `.claude/skills/case-competition-deck/` entry point and checked reference files. Use the installed files during execution.

Read:

- `SKILL.md`
- `references/structure.md`
- `references/frameworks.md`
- `references/archetypes.md`
- `references/rhetoric.md`
- `references/critique_rubric.md`
- `references/case_types/marketing.md`
- `references/case_types/operations.md`
- `references/case_types/strategy.md` where option selection needs it

Classify this as a **marketing and operating-turnaround case**, supported by contribution economics and capacity analysis.

Apply the skill’s structural patterns:

- Recommendation first.
- A fully analysed alternative to the price-led answer.
- Symmetric treatment of options and segments.
- Foreshadowing of the capacity constraint.
- One moneyshot.
- Three scenarios.
- Cost and benefit decomposition.
- Explicit trade-offs.
- Defensive appendix working.
- Conclusion containing no new claims.

Do not import the M&A rubric literally. DCFs, acquisition financing, a hundred-slide structure, and external expert quotations on the main slides are inappropriate here. The skill’s calibration comes from M&A decks; its marketing and operations applications are adaptations.

Use the humanizer at:

`C:/Users/harsh/.claude/skills/humanizer/SKILL.md`

Apply its full process: mark patterns, rewrite, check for changed meaning, and produce the final prose. A banned-word search alone is insufficient.

### 2.4 Reference calibration

Use these references in this priority order:

| Reference | What to adopt |
|---|---|
| [Prime inspiration: Project Satoshi Gate](https://www.figma.com/slides/hOJVMGv9nIhDmayTT7DmOt) | Answer-first synthesis, symmetric alternatives, quantified argument, useful commentary |
| [Arthik Khayal](https://www.figma.com/slides/UidfYOpqRKbPxXKJMhftJV) | Dense diagnostic bands, table/chart pairings, causal chains, annotations |
| [SwiftKart](https://www.figma.com/slides/7N3v6bAfmXYRrte0zChFDg) | Option screens, compact working, sensitivity grids, varied analytical forms |
| Other six user-supplied decks | Supporting examples of architecture, mockups, sources, implementation, and appendix depth |
| `ppts-inspo/EY.pdf` | Bands, rails, commentary, formula callouts, mixed chart forms |
| `ppts-inspo/Goal Diggers_DTU.pdf` | Layered cards, badges, punch-hole and wire motifs |

All nine supplied Figma references have been structurally inspected during planning. The prime, Arthik Khayal, and SwiftKart examples have also been visually inspected.

The research references have approximately:

| Research reference | Words | Tables |
|---|---:|---:|
| Satoshi Gate | 21,154 | 74 |
| Setu | 59,047 | 117 |
| Dream11 | 49,771 | 99 |
| PRAMAAN | 54,256 | 87 |

Adopt their traceability, worked calculations, competing readings, limitations, and judge preparation. Do not copy their subject matter or inflate the report with repeated prose.

---

## 3. Team structure and execution contracts

### 3.1 Roles

Use one coordinator and up to three Sonnet-class workers at once.

| Role | Responsibility | Write access |
|---|---|---|
| Coordinator | Owns case interpretation, dependencies, canonical outputs, assembly, Figma, final delivery | DOBAARA project files |
| Economics auditor | Independently checks calculations and model mechanics | Audit files only |
| Research verifiers B to I | Verify assigned external-context lanes | Their assigned raw lane files |
| Writers W-A to W-F | Write assigned research sections from frozen evidence | Their assigned manuscript files |
| Research critic | Applies case-deck critique and humanizer review | Critique report only |
| Deck critic | Reviews rendered deck and claim traceability | Review report only |

Only the coordinator calls Figma mutation tools. Workers may prepare addition specifications or scripts, but must not edit the live file.

In Claude Code, use the actual available Sonnet model through its agent configuration. Do not invent model identifiers. If Sonnet is unavailable, report that execution-environment limitation rather than silently claiming Sonnet ran the work.

### 3.2 Every worker packet must contain

1. Task ID and role.
2. Exact input files.
3. Exact output path.
4. Assigned section or source IDs.
5. Relevant skill files.
6. Frozen model version and hash.
7. Required tables, calculations, and conclusions.
8. Word and table expectations.
9. Prohibited actions.
10. Acceptance checks.
11. Dependency status.
12. Required handoff format.

Do not send “research this deeply” as a complete assignment.

### 3.3 Worker handoff format

Every worker returns:

```text
Task:
Output:
Status: PASS or FAIL
Inputs used:
Sections or evidence IDs completed:
Checks run:
Unresolved issues:
Changes requiring coordinator attention:
```

A worker must not declare PASS while a required source is unverified or a required section is missing.

### 3.4 Scheduling

Run in dependency order:

1. Coordinator preflight and baseline preservation.
2. Economics auditor, verifier B, verifier C.
3. Verifiers D, E, F.
4. Verifiers G, H, I.
5. Coordinator evidence and model freeze.
6. Writers W-A, W-B, W-C.
7. Writers W-D, W-E, W-F.
8. Research critic, economics cross-check, humanizer integration review.
9. Coordinator assembly and research delivery.
10. Deck preparation and native Figma execution.
11. Deck critique, visual verification, final export.

Workers may continue independent assigned work while another lane is being repaired. Dependent work waits for its required frozen inputs.

---

## 4. Phase A: preserve the original and audit the case

### A0. Preserve the restored draft

Before executing generators:

- Record checksums of original slide scripts, preamble, model, case PDFs, FAQ, and original-draft PDF.
- Record the original Figma file key and logical slide mapping.
- Keep the original twelve-slide sources immutable.
- Put enriched scripts, mappings, previews, and exports under a separate `deck/additive/` directory.
- Exclude `deck/redesign/` and the earlier `finish_visuals.js` from the enriched build manifest.
- Do not rerun the old extraction/bootstrap workflow over the existing project.

**Acceptance:** the coordinator can reproduce the restored original without depending on any rejected redesign file.

### A1. Audit every case and FAQ detail

Read the PDFs in full, including table notes, footers that establish scope, and both emails.

Reconcile the transcription against:

- Every exhibit cell.
- Every grade definition.
- Every channel mix.
- Every fixed and variable cost.
- Every timing rule.
- Every return multiplier.
- Every trade-in rule.
- Every board test.
- Every decision-table requirement.
- Every FAQ item.

Create a coverage ledger with:

| Field | Meaning |
|---|---|
| Case ID | Existing reference ID |
| PDF location | Page and exhibit or paragraph |
| Requirement or fact | Faithful summary |
| Input or rule | How the model uses it |
| Research section | Where it is explained |
| Main slide or appendix | Where judges can find it |
| Verification status | Checked, discrepancy, resolved |
| Resolution | Required when a discrepancy exists |

**Acceptance:** every case and FAQ ID is represented; no unresolved transcription discrepancy remains.

### A2. Preserve the distinctions judges will test

The research must explain these explicitly:

- The website funnel excludes store and MegaKart orders.
- Survey responses allow multiple answers; they cannot be summed into a share of customers.
- The survey’s 5% price-cut offer differs from option A’s 3% Fair-price reduction.
- Returns cost ₹1,800 on returned phones; the sale is not reversed.
- Warranty rates are grade-specific and common across channels.
- Return rates are grade-specific and modified by channel.
- MegaKart’s commission is a share of selling price and rises when B2 raises price.
- Fixed channel spend and ₹58 lakh company fixed costs are different cost layers.
- Growth money is counted once and deducted in the month spent.
- Per-phone report, battery, pickup, and trade-in credit costs are operating costs.
- Setup is paid in January while customer-facing changes begin in February.
- The third shift adds 1,800 **sellable** phones, not 1,800 gross test slots.
- Superb rationing happens before total-lab rationing.
- Trade-in replacement supply and incremental trade-in buyer orders are different flows.
- Lever demand uplifts do not multiply incremental trade-in buyer orders.
- Trade-in failure recovery does not eliminate pickup costs.
- A modeled compliance flag does not replace the Exhibit 5 claim-by-claim review.
- Survey evidence supports prioritisation; it does not prove realised conversion uplift.
- The November spot check is a sample, not a census of all Good phones.

### A3. Independent economics audit

The auditor must calculate baseline results independently from the exhibits before comparing them with the existing model.

Do not verify the model solely by invoking its own functions.

Independently rebuild:

1. Per-phone contribution by grade.
2. Per-phone contribution under each return regime.
3. Channel contribution before marketing.
4. Commission, fixed spend, coupons, and contribution after marketing.
5. Company monthly EBITDA.
6. Weighted monthly return rate.
7. Claims and return expense.
8. Grade volumes.
9. Website funnel reconciliation.
10. Recommended-plan monthly results.

Use full precision internally. Apply presentation rounding only at output.

### A4. Canonical numbers and stale prose

Use the generated model values after audit. Do not copy numbers out of the old prose when the model differs.

Known corrections:

| Item | Canonical presentation |
|---|---:|
| Referral contribution per order | **₹2,648** |
| Store contribution per order | **₹1,258** |
| Recommended Q1 EBITDA | **−₹42.9 lakh** |
| Doing-nothing Q1 EBITDA | **−₹42.4 lakh** |
| Q1 difference | **−₹0.5 lakh** |
| Q1 advantage over the next feasible plan | **₹14.2 lakh**, calculated from unrounded totals |
| Good-battery swap break-even | Approximately **55%** |
| Fair-battery swap break-even | Approximately **97%** |

Search the old plan and all new prose for ₹2,649, ₹1,257, and ₹14.3 lakh in these contexts. Replace them through the canonical-output process, with a correction log.

Do not change raw case facts to make annual and monthly figures match perfectly. The case contains rounded historical figures.

---

## 5. Phase B: solve and extend the analytical model

### B1. Recommendation and selection criterion

The inherited recommendation is:

- Pay for B1 and B2 in January.
- Start the third lab shift on 1 February.
- Target family buyers buying Good phones.
- Put the Tikau Report before price.
- Use stores, referrals, and labelled creator content.
- Defer trade in until April, subject to new funding.
- Keep A and B3 off in Q1.

Audit this recommendation against every valid combination.

Use the following selection criterion:

> Among plans passing all four board tests, select the plan with the highest total January to March EBITDA.

State this as the team’s selection criterion. Do not imply the case explicitly mandates that optimisation objective.

### B2. Calculation order

For each month and plan:

1. Apply timing rules.
2. Determine prices and grade mixes.
3. Multiply eligible order effects.
4. Calculate trade-in supply and incremental buyer demand separately.
5. Apply the Superb supply limit proportionately across channels.
6. Apply the total sellable-lab limit proportionately.
7. Charge per-phone costs only on delivered orders.
8. Apply channel-specific returns.
9. Deduct commission, coupons, and channel fixed spend.
10. Add eligible trade-in sourcing savings.
11. Deduct all pickup costs and delivered trade-in buyer credits.
12. Deduct ₹58 lakh company fixed costs.
13. Deduct that month’s growth money.
14. Calculate returns divided by delivered phones.
15. Evaluate the four board tests.

### B3. Baseline and recommendation checkpoints

| Measure | Baseline | Recommended plan |
|---|---:|---:|
| Phones sold per month | 7,200 | 8,328 in February and March |
| Sellable capacity | 7,200 | 9,000 |
| Superb wholesale supply limit | 2,000 | 2,000 |
| Combined B1/B2 demand factor | 1.0000 | 1.1664 |
| Return-rate factor | 1.00 | 0.56 |
| Monthly contribution after marketing | ₹43.9 lakh | ₹72.6 lakh |
| January growth money | ₹0 | ₹40.0 lakh |
| February growth money | ₹0 | ₹9.0 lakh |
| March growth money | ₹0 | ₹9.0 lakh |
| January EBITDA | −₹14.1 lakh | −₹54.1 lakh |
| February EBITDA | −₹14.1 lakh | +₹5.6 lakh |
| March EBITDA | −₹14.1 lakh | +₹5.6 lakh |
| March return rate | 8.1% | 4.5% |
| Q1 growth money | ₹0 | ₹58.0 lakh |

Explain that 0.56 means **56% of the former return rate remains**, equivalent to a 44% reduction.

### B4. Preserve and extend model tables

Retain T1 to T21. Add:

| Table | Required content |
|---|---|
| T22 | Delivered demand and rationing by channel and grade for the recommended plan and principal rejected plans |
| T23 | Pareto comparison of feasible plans: growth money, March EBITDA, Q1 EBITDA, returns |
| T24 | Two-input EBITDA sensitivity: combined order uplift against Good-battery replacement share |
| T25 | Third-shift timing: February, March, and no shift, including Q1 effects |
| T26 | Segment-ranking sensitivity under equal weights, doubled size weight, and doubled margin weight |
| T27 | Weekly metric definitions, calculation basis, operating warnings, boundaries, and proposed actions |
| T28 | April trade-in ramp, incremental contribution, setup cash, cumulative benefit, and payback |
| T29 | Alternative readings of material assumptions and their numerical consequences |

Use explicit inputs and column definitions. T27 contains proposed operating rules, not observed results.

For T24:

- Combined order uplift values: 8%, the exact modelled break-even uplift, 16.64%, and 20%.
- Good-battery replacement shares: 40%, 50%, the exact modelled break-even share, and 60%.
- Hold other inputs at the base case.
- Label the horizontal variable as combined order uplift.
- Do not accidentally apply that combined uplift twice.

For T28:

- Show the ₹35 lakh setup payment separately from ongoing operating EBITDA.
- Distinguish monthly EBITDA, incremental EBITDA, and cumulative setup recovery.
- Do not describe ₹21.4 lakh as the first month’s result after deducting setup.
- State the new-funding and restarted-ramp assumptions.

### B5. Compliance evaluation

The existing model uses B1 availability as a compliance proxy. Retain that numerical screening convention only with an explicit explanation.

Separately evaluate:

- Own-lab battery reading.
- Refurbished label.
- Compatible battery wording.
- Warranty terms.
- IMEI status.
- Data wipe completion.
- Verified reviews.
- Unconditional and disclosed review rewards.
- Creator advertisement disclosure.
- Genuine reference pricing.
- Absence of false urgency.
- Evidence for any named comparison.

A plan passes test 4 only conditionally on these operating controls being followed. The report must not equate purchasing B1 with demonstrated compliance.

### B6. Minimum model tests

In addition to the existing thirteen checks:

- January operating assumptions remain unchanged.
- January setup reduces January EBITDA.
- A’s advertising cost is charged once.
- B3 cannot exist without B1 or B2.
- B3 does not uplift MegaKart.
- B1 and B2 effects multiply.
- A’s mix changes affect only its specified channels.
- B2 price changes affect only Superb and Good.
- B2 commission uses the changed selling price.
- No-shift plans cannot exceed 7,200 delivered phones.
- Shift plans cannot exceed 9,000 delivered phones.
- Superb rationing precedes lab rationing.
- Trade-in buyer uplifts are not multiplied by the other levers.
- All trade-ins incur pickup cost.
- Failed trade-ins do not produce sourcing savings.
- Trade-in credits apply to delivered incremental buyers.
- Every plan conserves grade and channel totals.
- Feasible-plan ranking uses unrounded Q1 results.
- The March bridge sums to the final result.
- Scenarios change only the declared uncertain effects.
- Return-limit boundaries are not labelled EBITDA break-even points.
- Presentation values agree across JSON, tables, report, and deck data.

**Acceptance:** original checks pass; independent baseline agrees; extended tests pass; all discrepancies have written resolutions.

---

## 6. Phase C: external research programme

External research begins alongside the economics audit, but writers receive only verified evidence after the evidence freeze.

### C1. Evidence record

Every raw evidence row must contain:

```text
evidence_id
lane
claim
publisher
source_title
source_url
publication_date
period_covered
access_date
page_or_section
supporting_excerpt
status
source_type
jurisdiction_or_population
limitations
permitted_report_section
```

Use statuses:

- `VERIFIED`
- `CORRECTED`
- `SEARCH_ONLY`
- `UNVERIFIABLE`
- `SUPERSEDED`
- `OUT_OF_SCOPE`

Only VERIFIED and CORRECTED rows may support factual prose.

A search snippet is a lead, not verified full-text evidence. Do not use the old “VERIFIED (search only)” status.

Use actual access dates. Remove the old assembler’s hard-coded statement that sources were checked in October and November 2026.

### C2. Research lanes

| Lane | Assignment | Target evidence rows | Required emphasis |
|---|---|---:|---|
| B | Indian refurbished-phone market and consumer context | 40 | Scope, period, organised versus informal channels, complaints, category trust |
| C | Consumer claims, reviews, data, devices, and applicable rules | 45 | Primary legal texts, in-force versus draft status, Exhibit 5 mapping |
| D | Information asymmetry, warranties, disclosure, and trust | 30 | Original studies, study design, population, limitations, transferability |
| E | Battery health, grading, erasure, IMEI, repair, and lab operations | 35 | Technical definitions, device-specific caveats, evidence required for a claim |
| F | Channels, referrals, stores, creator disclosure, and launch practice | 25 | Practices and mechanisms; no imported channel uplift assumptions |
| G | Refurbishment and used-goods comparable practices | 30 | Symmetric comparison of promise, proof, warranty, remedy, and limits |
| H | Verbatim context quotations | 10 | Named sources, exact wording, short quotation, research only |
| I | Hinglish, positioning, and creative precedent | 15 | Meaning, audience fit, clarity, evidence limits, alternative copy |

Targets guide breadth. Do not invent or duplicate evidence to meet them.

Seek at least sixty distinct, substantively used, full-text sources across the report. At least 70% should be primary sources. Every legal obligation and technical-standard claim must trace to the appropriate primary source.

### C3. Starting sources

Use the following verified discovery points, then check the full source before writing:

- GSMA’s [Closing the Trust Gap](https://www.gsma.com/solutions-and-impact/connectivity-for-good/external-affairs/climate-action/closing-the-trust-gap-how-better-refurbished-phone-labelling-could-accelerate-the-circular-economy/).
- The Department of Consumer Affairs’ [consumer-protection documents](https://consumeraffairs.gov.in/pages/consumer-protection-acts), including the final dark-pattern guidelines.
- [NIST SP 800-88 Revision 2](https://csrc.nist.gov/pubs/sp/800/88/r2/final), which supersedes Revision 1.
- Counterpoint’s original refurbished-smartphone release.
- ASCI’s official influencer-advertising guidance.
- DoT and Sanchar Saathi documentation.
- CPCB and official e-waste rules.
- Manufacturer battery-health documentation.
- Original journal publications on disclosure, warranties, and return policies.
- Official refurbisher warranty, grading, and battery-policy pages.

Do not turn device-specific battery-cycle guidance into a universal battery rule.

Do not use an old plan’s publication dates, shutdown stories, competitor policies, or legal claims without verification.

### C4. Quotations and source conflicts

- Use no more than twenty quoted words from one external source across the deliverable.
- Quote a source once; refer back to it thereafter.
- Do not paraphrase inside quotation marks.
- Record publication date and period covered separately.
- If sources disagree, compare definitions and time periods before deciding.
- Keep a conflict register with the competing claims, selected interpretation, and reason.
- Mark vendor evidence as vendor evidence.
- Do not infer an outcome merely because a company offers a guarantee.
- Do not map Tikau, PhoneBazaar, or MegaKart to real companies.

### C5. Context isolation

External evidence may appear only in:

- Research sections 12 to 17.
- Explicit context boxes in launch or language discussion.
- The bibliography.
- Research limitations and carefully labelled judge-context answers.

No external number enters:

- The economics model.
- A case-result table.
- A main-slide chart.
- A claim about Tikau’s observed customers.
- A January to March forecast.

**Acceptance:** every cited external claim resolves to a verified row; no search-only source is cited; context-isolation checks pass.

---

## 7. Phase D: research manuscript specification

### D1. Depth and length

Target a report of approximately 90,000 words or more, with no upper limit when additional material adds distinct evidence, derivation, or a useful counterargument.

Minimum acceptance:

- At least **85,000 authored words**, excluding generated model tables and bibliography.
- At least **90,000 total words**.
- At least **180 distinct authored analytical tables**.
- Model tables T1 to T29 reproduced separately.
- Forty substantive judge questions and answers.
- Full assumptions, conflicts, and limitations appendices.

The old section budgets already total 82,900 words before glossary and limitations material. Preserve their substantive scope and add the missing audits and analyses below.

Repeated summaries, duplicated model tables, boilerplate introductions, and empty framework templates do not count toward depth.

### D2. Section allocation

Retain numbered sections 0 to 37 so the existing assembly structure remains recognisable. Correct stale figures in headings using canonical values.

| Sections | Owner | Required content | Inherited minimum words |
|---|---|---|---:|
| 0–4 | W-A | Document control, full coverage matrix, executive answer, case reconciliation, per-phone economics | 10,700 |
| 5–11 | W-B | Channels, company EBITDA, returns, funnel, capacity, root cause, present claim gaps | 13,800 |
| 12–17 | W-C | Verified market, competition, legal, trust, technical, and comparable context | 13,200 |
| 18–23 | W-D | Segments, family-buyer job, positioning, individual options, all-plan screen, rejected camps | 15,600 |
| 24–31 | W-E | Decision table, bridge, refusals, launch, claims, weekly controls, sensitivity, April | 15,600 |
| 32–37 | W-F | Risk, proposed validation, assumptions, slide blueprint, judge questions, speaker preparation | 14,000 |

Each writer adds at least 600 words of useful new analysis beyond the inherited scope. W-F also supplies the glossary and ambiguity appendices.

### D3. Exact section subjects

| § | Subject and mandatory analysis |
|---:|---|
| 0 | Purpose, readers, source hierarchy, evidence types, model version, skill calibration, limitations |
| 1 | Every case and FAQ ID mapped to the answer, section, main slide, and appendix |
| 2 | Recommendation, three reasons for and against the principal alternative, four tests, Q1 cost, bear case, 150-word summary |
| 3 | Exhibit interpretation and independent reconciliation of revenue, EBITDA, orders, channel spend, and dashboard numbers |
| 4 | Superb, Good, and Fair economics, with line-by-line calculations and return-regime comparisons |
| 5 | Every channel’s grade mix, commission, fixed spend, coupons, returns, contribution, and dashboard distortion |
| 6 | Company monthly bridge, grade contribution pools, fixed costs, and the contribution needed to break even |
| 7 | Weighted returns, claims, cost of repeat service, denominator definitions, and the 6.0% test |
| 8 | Website funnel, conversion arithmetic, lost-sale reasons, offer responses, and interpretation limits |
| 9 | Sellable-lab constraint, Superb supply constraint, ordered rationing, and capacity implications |
| 10 | Evidence-based five whys, MECE issue tree, and hypothesis table |
| 11 | Battery spot check, sample extrapolation caveat, and current Exhibit 5 gaps |
| 12 | Indian refurbished-phone context, with period and definition discipline |
| 13 | Case competitor corridor, strategic-group comparison, and external comparables kept separate |
| 14 | Legal and standards context mapped to each Exhibit 5 tactic |
| 15 | Trust, disclosure, warranties, and returns evidence, with study limitations |
| 16 | Battery measurement, grading, erasure, IMEI, lab operations, and compatible-parts distinctions |
| 17 | Comparable trust mechanisms, what transfers to Tikau, and what does not |
| 18 | Symmetric segment scorecard, score rationales, weighting sensitivity, and supply constraints |
| 19 | Family-buyer persona and customer journey using only case evidence |
| 20 | Positioning statement, retained Hinglish line, meaning, proof hierarchy, alternatives, and claim check |
| 21 | A, B1, B2, B3, C, and the third shift evaluated through the same template |
| 22 | All 84 valid plans, five feasible plans, selection criterion, Pareto comparison, and ranking |
| 23 | Rohan, Kabir, store managers, B2 without B1, and “do everything” evaluated symmetrically |
| 24 | January to March decision table, growth-money ledger, four tests, and Q1 comparison |
| 25 | March EBITDA bridge and per-grade economics of the promise |
| 26 | What Tikau declines to fund, with the economic or compliance reason for each refusal |
| 27 | February launch, message hierarchy, channel roles, customer-facing sequence, and draft scripts |
| 28 | Three permitted claims and two refused claims, plus review, creator, pricing, and disclosure controls |
| 29 | Three weekly metrics, definitions, plan values, warnings, boundaries, owners, and actions |
| 30 | One-input sensitivity, joint scenarios, two-input heat map, and limits of the model |
| 31 | April trade-in choice, ramp, funding, capacity, incremental contribution, setup recovery, and alternatives |
| 32 | At least twelve risks, proposed qualitative scores, early signals, owners, mitigations, and pre-mortem |
| 33 | Customer validation plan, explicitly not yet run |
| 34 | A01 to A20 explained, alternative readings, and effects on results |
| 35 | Fourteen-slide logical blueprint and claim-to-panel mapping |
| 36 | Forty judge questions, with the hardest objections first and reproducible answers |
| 37 | Three-speaker structure and numerical rebuild drills for every team member |

### D4. Required additional analytical tables

Add these eleven tables to the inherited section requirements:

1. Case fact versus derived result versus assumption classification.
2. Independent baseline reconciliation and discrepancy resolution.
3. Contribution terminology and cost-layer reconciliation.
4. Survey 5% price-cut response versus option A’s 3% price change.
5. Legal source status: final, draft, superseded, or guidance.
6. External quotation verification and aggregate quotation count.
7. Segment-ranking sensitivity under alternative weights.
8. Feasible-plan Pareto comparison and objective choice.
9. Two-input March EBITDA sensitivity.
10. April operating benefit versus setup cash recovery.
11. Judge-trap register covering definitions, denominators, timing, and rounding.

Do not count an exact reproduction of an appendix model table as a second distinct analytical table.

### D5. Section writing standard

Each section must:

- Open with its answer in two to four sentences.
- Establish the relevant evidence.
- Show arithmetic where a decision-driving result first appears.
- Explain what the evidence changes about the decision.
- Address a credible competing interpretation.
- State limitations that affect the conclusion.
- Identify the slide exhibit it supports, where applicable.

Use connected prose. Tables carry comparisons and working; prose interprets them.

Do not open every paragraph with a label. Do not repeat a section heading in its first sentence.

### D6. Symmetric option template

For each option, use this sequence:

1. What Exhibit 6 specifies.
2. Effect on each grade’s economics.
3. Effect on orders, mix, and returns by channel.
4. Setup, monthly growth money, and operating costs.
5. Supply and lab consequences.
6. Standalone result under all four tests.
7. Role in combinations.
8. Q1 verdict.
9. April relevance.
10. Conditions under which that verdict changes.

### D7. Proposed validation

The report must state that no new primary research has been conducted.

Specify thirty proposed interviews:

- Twelve family buyers.
- Six flagship buyers.
- Six value seekers.
- Six upgraders.

Add two proposed product-page tests:

- Report-first versus price-first information hierarchy.
- Battery-reading and warranty explanation comprehension.

Specify hypotheses, recruiting criteria, questions, outcome definitions, proposed decision rules, and limitations. Do not invent sample results, statistical significance, conversion uplift, or willingness to pay.

### D8. Appendices and supporting files

Include:

- Bibliography with actual publication and access dates.
- Model tables T1 to T29.
- Glossary and short forms.
- Case ambiguities and alternative readings.
- Source conflicts and resolutions.
- Calculation rebuild guide.

Produce a separate two-page rebuild card covering:

1. Superb contribution.
2. Monthly baseline EBITDA.
3. Weighted return rate.
4. Recommended March EBITDA.
5. Q1 growth money.
6. Q1 comparison against doing nothing.

Every member must be able to reproduce these results.

---

## 8. Phase E: humanization, research critique, and first delivery

### E1. Humanizer procedure

Each writer runs the humanizer on their own sections before handoff.

The integration editor then reviews the assembled report for:

- Unsupported contrasts.
- Repeated dramatic closers.
- Staged openings.
- Forced lists of three.
- Inflated claims.
- Vague authority.
- Decorative bold labels.
- Repeated sentence openings.
- Em dashes and en dashes.
- Chatbot residue.
- Missing subjects.
- Claims added during rewriting.
- Numbers, units, dates, or qualifications dropped during rewriting.

Preserve technical accuracy. Do not simplify “share of phones returned” into “share of customers dissatisfied.”

Use plain, professional prose addressed to Tikau’s board and the judges. Narrative comes from the progression of evidence and decisions.

### E2. Research critique

The critic uses the case-deck skill in critique mode, adapted to the case.

Check:

- Does the recommendation answer all five questions?
- Does the economics actually fund the customer promise?
- Are the obvious alternatives treated fairly?
- Is capacity part of the explanation?
- Are subjective scores labelled as judgement?
- Is the weak Q1 comparison disclosed?
- Is the joint bear case visible?
- Is April distinguished from Q1?
- Does every case number trace to the source or model?
- Are external facts isolated?
- Is the report repetitive?
- Can a team member rebuild the result without the author?

Return the five most consequential issues with exact sections and fixes. The coordinator resolves every critical issue before delivery.

### E3. Strengthen the existing validators

Do not rely on the current assembler’s permissive rule that one tag anywhere in a section can cover every number in it.

Add checks for:

- Claim-level citations.
- Missing case IDs.
- Orphan source IDs.
- Unverified evidence references.
- Unsupported numeric claims in tables.
- Duplicate table IDs.
- Repeated paragraphs.
- Stale canonical values.
- Context leakage.
- Unlabelled assumptions.
- Future or fabricated access dates.
- Changes to numeric meaning during humanization.

Count authored and generated material separately.

### E4. Research rendering

Use the existing Python and HTML workflow, with these refinements:

- Local or embedded fonts rather than a live Google Fonts dependency.
- Searchable text in the PDF.
- Clickable contents and internal headings.
- Repeating table headers.
- Rows kept intact where possible.
- No clipped columns.
- Sensible breaks before large tables.
- Page numbers and document version.
- Clear distinction between case analysis and external context.

Inspect every rendered page for overflow and blank-page defects. Manually inspect the cover, contents, dense economics pages, long tables, context sections, and appendices at full size.

### E5. Research milestone acceptance

Deliver the report only when all are true:

- All case and FAQ requirements mapped.
- Independent economics audit passes.
- Model checks pass.
- Source verification passes.
- Word and substantive-table requirements met.
- Forty judge questions completed.
- Humanizer review completed.
- No em dashes or en dashes in authored prose.
- No invented primary research.
- No critical critique findings.
- HTML and PDF inspected.
- Rebuild card completed.
- Checksums and version manifest recorded.

Deliver:

```text
research/dobaara-research.md
research/dobaara-research.html
research/dobaara-research.pdf
rebuild-card.md
research/acceptance-report.md
research/research-freeze.json
```

Send the user the report links and a concise statement of what was verified. Then begin the deck phase.

---

## 9. Phase F: research-to-slide translation and additive design

### F1. Protect the original

Create a new file named:

**Project DOBAARA | Team IdeaForge | Research-backed edition**

Use the personal team that has admin access and code-layer capability:

```text
planKey: team::1564294484048272772
```

Do not use the guest E-Cell team.

Create a new Figma session for this execution task. Verify fonts before building.

Reproduce the original twelve-slide design from the original scripts in the new file. Add A3 and A4 before the thank-you slide.

Keep mappings for logical slides and physical order separate:

```text
Cover
Summary
Economics
Trust
Customer
Options
Plan
Launch
Signals
A1
A2
A3
A4
Thank you
```

### F2. Data and content contract

Create a research-to-deck manifest containing:

```text
claim_id
research_section
case_ids
model_table
model_value_key
display_value
unit
assumption_ids
logical_slide
panel_name
node_name
source_footer
```

All new quantitative labels must come from this manifest.

Slide scripts may format values but must not independently recalculate the solution.

### F3. Preserve the baseline system

Retain:

- Navy, blue, gold, red, and tint palette.
- Original ribbon and section hierarchy.
- Original action-title sequence.
- Layered-card treatment.
- Original panel boundaries and chart forms.
- Original option scatter and comparison table.
- Original moneyshot and decision table.
- Original customer line and positioning argument.

Do not:

- Replace slide 2’s KPI strip with a new architecture.
- Rebuild slide 3 into the rejected layouts.
- Convert whole slides into text walls.
- Add decorative charts lacking a decision.
- Increase density by shrinking type.
- Reuse rejected redesign code.

Original approved secondary typography may remain as part of the preserved draft. New analytical content uses at least 22 pt, with 14 pt source lines. Existing text must not be made smaller.

Where an addition cannot fit at readable size, place its detail on A3 or A4 and add a short cross-reference.

### F4. Density criteria

Treat density as analytical coverage.

Each substantive slide must have:

- A clear finding.
- Evidence supporting that finding.
- At least one decision implication.
- Visible source or model references.
- Appropriate chart/table pairing.
- An annotation explaining a meaningful feature of its main chart.

Use varied analytical forms across the deck:

- Stacked cost bars.
- Waterfalls.
- Line charts.
- Heat maps.
- Scoring matrices.
- Funnel diagrams.
- Scatter plots.
- Timeline and milestone elements.
- Native product-page mockup.
- Two-input sensitivity grid.
- Probability-by-impact risk grid, labelled as team judgement.

Do not force every form onto every slide.

### F5. Slide-by-slide implementation specification

| Physical slide | Preserve | Add or strengthen |
|---:|---|---|
| 1 Cover | Title, answer card, team table, mind map | Finish verified logos and licensed images; retain fictional-actor monograms; clear source disclaimer |
| 2 Summary | KPI strip, EBITDA line, decision table, board tests, five-question matrix | Clarify that the shift costs ₹9 lakh in each of February and March; use canonical numbers; add a concise Q1 trade-off annotation and appendix pointer |
| 3 Economics | Cost stack, channel bars and table, monthly waterfall, return heat map, distrust-cost bars | Verify every cost-stack total; annotate MegaKart’s hidden commission; distinguish grade-return assumptions from channel-adjusted results; add concise reconciliation and working references |
| 4 Trust | Funnel, reasons, offers, capacity, spot check, five whys | Make multi-response caveat explicit; identify where the website funnel excludes other channels; label spot-check extrapolation as indicative; cross-reference the proposed service controls on A4 |
| 5 Customer | Segment heat map, persona, Good-phone bridge, positioning panel | State the scoring formula and judgement basis; add ranking-sensitivity reference; distinguish family-buyer evidence from inference; retain the original architecture |
| 6 Options | All 84 plans scatter, symmetric camps table, shortlist, conclusion | Add selection criterion; use ₹14.2 lakh next-best Q1 advantage; explain the compliance proxy; point to full screening and sensitivity on A3 |
| 7 Plan | Moneyshot, case-format decision table, bridge, refusals | Verify monthly growth-money arithmetic and Q1 comparison; improve in-chart working annotations only; retain one named moneyshot |
| 8 Launch | Original product-page mockup, main idea, channel economics, claims grid | Finish licensed illustrative device assets; label examples; reduce repeated prose without losing facts; make refurbished status, warranty, and creator disclosure clear |
| 9 Signals | Three KPI cards, tornado, scenarios, April comparison | Add precise metric definitions and owners; distinguish warnings from failure boundaries; explain April setup treatment; put detailed intervention logic on A4 |
| 10 A1 | Unit economics, channel reconciliation, assumptions | Correct stale numbers; improve formula and cost-layer explanations; retain full A01–A20 coverage; avoid adding unreadable rows |
| 11 A2 | Option combination maths, unit effects, March channels, boundaries, glossary | Relabel the returns boundary as the 6.0% board limit rather than EBITDA zero; add exact working references and rounding notes |
| 12 A3, new | Not applicable | Option-screen working, feasible-plan Pareto table, two-input EBITDA heat map, third-shift timing comparison |
| 13 A4, new | Not applicable | Full claims-control matrix, weekly operating definitions, proposed service-control sequence, risk/mitigation register, case/model source index |
| 14 Thank you | Original recap, team table, contact | Verified logos; only describe supporting files that actually exist and have been delivered |

### F6. New appendix geometry

Use 1920 × 1080. Content remains within the baseline content zone.

#### A3: quantitative defensive working

Use two horizontal bands and four panels:

| Panel | Position and size | Content |
|---|---|---|
| Feasible-plan comparison | x64, y310, w880, h340 | Five feasible plans, growth money, March EBITDA, Q1 EBITDA, returns |
| Two-input sensitivity | x968, y310, w888, h340 | T24 four-by-four heat map with row/column definitions and zero boundary |
| Rationing working | x64, y674, w880, h358 | Demand, Superb adjustment, lab adjustment, delivered volume for selected plans |
| Shift timing and ranking | x968, y674, w888, h358 | February/March/no-shift comparison; objective and rounding explanation |

Use a section-scoped four-tag appendix ribbon.

#### A4: operational and compliance defensive working

| Panel | Position and size | Content |
|---|---|---|
| Claims and proof | x64, y310, w1088, h350 | Three claims made, two refused, proof requirement, owner, stop condition |
| Weekly definitions | x1176, y310, w680, h350 | Delivered orders, completed return cohorts, Good swaps, warnings and boundaries |
| Service-control sequence | x64, y684, w1088, h348 | Intake, measurement, report/listing, sale, repair, feedback |
| Risk and evidence index | x1176, y684, w680, h348 | Six principal risks, one-to-one responses, case/model references |

The research carries the complete twelve-risk register. A4 shows the six most decision-relevant risks.

### F7. Weekly metric definitions

Use:

1. Delivered orders across all channels, normalised using 4.33 weeks per month.
2. Return rate for a completed seven-day sales cohort, with its denominator stated.
3. Good phones requiring battery replacement divided by Good phones tested for the relevant batch.

Label cohort handling, owners, and operating warnings as proposed management conventions.

Retain inherited plan values and boundaries:

- Delivered orders: approximately 1,923 per week.
- Order break-even: approximately 1,838 per week.
- Return warning: 5.5%; board limit: 6.0%.
- Good swaps: plan 40%; warning 50%; modelled EBITDA boundary approximately 55%.

Do not call 50% the break-even rate.

---

## 10. Phase G: native Figma execution and asset completion

### G1. Build mechanics

- Load the Figma guidance available in the execution environment before authoring.
- Use the approved deck preamble verbatim for replaying original slides.
- Use `deck-system/figma-deck-kit.js` for authored additions, preserving its base node helpers.
- Keep replay and addition scripts separate to avoid duplicate helper declarations.
- Append every node to its final parent before positioning it.
- Keep exact font style strings: Inter `Semi Bold`; Poppins `ExtraBold`.
- Load every font touched by a script.
- Use fixed-width, height-resizing text for wrapping content.
- Build in small, deterministic batches.
- Validate each batch immediately.
- Capture checkpoints after the first enriched slide, after the two new appendices, and at completion.

Every addition gets a stable semantic name. Do not identify it only by position.

### G2. Reproducible changes

Store:

- Original-script replay manifest.
- Additive change manifest.
- New logical-to-node mapping.
- Data manifest.
- Text overrides.
- Addition scripts.
- Asset placements.
- Validation reports.
- Final exports.

Make additive scripts idempotent by removing or updating only nodes with their own semantic addition IDs.

Do not delete slide content with broad coordinate filters.

If a replay part fails, rebuild that slide from its first original part and rerun its additions. Do not rerun later parts blindly.

### G3. Logos and imagery

Finish assets after analytical content passes.

Use:

- MarKSoc DTU and CrackNontech marks rendered from the case PDF.
- DTU’s verified official logo.
- Verified official marks where suitable for other named bodies.
- Neutral text identifiers when an appropriate mark is unavailable.
- Fictional-name monograms for fictional companies and people.

For PDF-extracted marks, render the visible PDF region to preserve masks and white backgrounds. Do not reuse the raw extracted images that produced black backgrounds.

For photographs:

- Use a verified openly licensed image.
- Record creator, source, licence, and credit.
- Treat people as illustrative, not interviewed customers.
- Treat device photographs as illustrative, not evidence from a measured Tikau device.
- Use fit/crop settings consistent with source aspect ratio.
- Re-upload after any target-frame resize.
- Do not leave “logo” or “image” placeholder captions in the final edition.

If suitable photography cannot be sourced, use a restrained native illustration with an explicit illustration label. Do not present drawings as real condition photographs.

### G4. Native-object check

Inspect the final file to confirm:

- Tables contain editable text and cells.
- Charts contain native shapes and text.
- Heat-map values are editable text.
- The product page is a native mockup.
- Images are used only for permitted visual assets.
- No entire slide or chart has been flattened into an image.
- No PowerPoint or HTML screenshot import substitutes for native construction.

---

## 11. Phase H: verification, recovery, and final delivery

### H1. Three separate review passes

**Argument review**

Use the case-deck critique rubric adapted to the case. Check recommendation, evidence, alternatives, feasibility, customer fit, defensive depth, and conclusion.

**Numerical review**

Check every displayed number against the frozen manifest, including chart labels, footers, cover chips, tables, and narrative sentences.

**Visual review**

Inspect screenshots of all fourteen slides at 1920 px. Check:

- Text clipping.
- Text-on-text collisions.
- Text hidden by sibling frames.
- Chart labels touching bars or lines.
- Table rows covered by callouts.
- Legends crossing chart bounds.
- Low contrast.
- Stranded back-cards.
- Misleading chart scales.
- Oversized decorative gaps.
- Orphan placeholders.
- Source-line wrapping.

A geometry validator passing does not replace visual review.

### H2. Automated deck acceptance

Require:

- Eight main slides.
- Four appendix slides.
- Cover and thank-you excluded from those counts.
- All five questions answered.
- Decision table present in the main slides.
- All required below-table items present.
- One named moneyshot.
- Zero unresolved clipping or out-of-bounds errors.
- Zero unauthorised quantitative values.
- Zero unresolved text overlaps.
- Zero non-zero corner radii.
- Zero new content text below 22 pt, excluding source lines.
- No reduction in original font sizes.
- No external statistical claims in assessed analysis.
- No placeholders or foreign-case residue.
- No em dashes or en dashes in authored prose.
- Every claim mapped to the research or model.
- Every slide visually inspected.

### H3. Recovery rules

| Failure | Required recovery |
|---|---|
| Case transcription differs from PDF | Correct transcription, audit affected model inputs, regenerate dependent outputs |
| Model result differs from independent audit | Resolve before writing; never average the two |
| Old prose differs from canonical values | Correct prose and log affected sections |
| Source accessible only through a snippet | Mark SEARCH_ONLY; replace or omit the claim |
| Legal source is a draft | Label as draft context; do not describe as an obligation |
| Humanization changes meaning | Restore the supported fact and rewrite around it |
| Writer misses a requirement | Return that packet with exact missing items |
| Report length met through repetition | Remove repetition and add missing derivation or counterargument |
| Text does not fit | Shorten repeated wording, reflow within its panel, or move detail to appendix; never shrink below the allowed floor |
| Addition would replace original architecture | Reject the addition and use A3/A4 |
| A slide build part fails | Replay that slide from part 1, then rerun its additions |
| Font is unloaded | Inspect actual text font styles, load them, and rerun |
| Coordinate offset appears | Fix append-before-position order; never add 240 as compensation |
| Back-card remains after deletion | Remove the matching front/back pair by semantic identity |
| Asset crop is wrong | Correct frame ratio and repeat upload |
| Upload URL has been used | Request a new single-use URL |
| Validator flags intentional layering | Record the exact allowed pair; do not suppress broad classes of overlaps |
| Screenshot reveals a collision missed by validation | Fix it and add a regression check |
| Research changes after its freeze | Version the report and rerun affected numerical, prose, and deck checks |
| Figma PDF export fails | Retry bounded exports; use screenshot PDF only as an explicitly labelled fallback |

### H4. Export

Prefer native per-slide PDF exports combined in the frozen physical order.

Verify:

- Fourteen pages.
- Each page is 1920 × 1080 or an exact 16:9 equivalent.
- Page 2 is the executive summary.
- Page 7 contains the case-format decision table.
- Pages 10 to 13 are A1 to A4.
- Page 14 is the thank-you slide.
- Figures remain sharp when enlarged.
- No missing fonts or glyphs.
- No stale interim slides.
- Export order matches the Figma file and manifest.

Produce final checksums. Retain the exact final PDF for presentation, consistent with the FAQ’s prohibition on changing the submitted deck.

### H5. Final deliverables

**Delivered first**

- Research Markdown.
- Research HTML.
- Research PDF.
- Two-page rebuild card.
- Research acceptance report.
- Evidence and source registers.
- Verified model outputs and T1 to T29.

**Delivered after research**

- Enriched native Figma Slides file.
- Fourteen-page submission PDF.
- Original Claude draft link and preserved PDF.
- Claim-to-slide manifest.
- Model and research version manifest.
- Deck QA and critique reports.
- Asset credits and licence register.

The final message should link the research and deck, state the verified page counts and model version, and disclose only material remaining limitations.

## 12. Completion criteria

The task is complete when:

1. The case and FAQ have been audited in full.
2. The numerical solution has an independent reconciliation.
3. The research is complete, humanized, verified, rendered, and delivered.
4. The deck is derived from the frozen research.
5. The restored original remains preserved.
6. The enriched edition adds analytical depth without repeating the rejected redesigns.
7. The main slides and appendices satisfy the competition rules.
8. Every quantitative claim is traceable.
9. All fourteen slides pass numerical, structural, and visual review.
10. The final native Figma file and exact submission PDF are delivered.
