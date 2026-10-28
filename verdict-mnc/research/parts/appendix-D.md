## Appendix D: Glossary and abbreviations

This glossary gives the meaning of every abbreviation, technical term and tag used anywhere in this document, so a reader does not have to search back through forty prior pages to find where a term was first expanded. Terms are grouped by kind, financial and unit-economics terms, market and regulatory terms, model and document terms, and then the tag and units conventions that run through every section.

### D.1 Financial and unit-economics terms

| Term | Meaning as used in this document |
|---|---|
| EBITDA | Earnings before interest, tax, depreciation and amortisation; the case's own measure of operating profit before financing and non-cash charges `[C K6]` |
| CAC | Customer acquisition cost, the average amount HarvestBox spends to sign up one new customer, stated by the case at ₹7,000 `[C U3]` |
| LTV | Lifetime value, the gross profit a customer returns over the time they stay subscribed, stated by the case at about ₹10,900 `[C U5]` |
| LTV to CAC | The ratio of lifetime value to customer acquisition cost, the case's own headline unit-economics measure, stated at 1.55x today against a 3.0x benchmark `[C U6]` `[C U7]` |
| AOV | Average order value, the rupee value of one box, ₹5,200 `[C K2]` `[C U1]` |
| GP | Gross profit, revenue less the direct cost of producing a box, ₹1,600 a box `[C U2]` |
| Gross margin | Gross profit as a share of revenue; fell from 38% in 2022 to 31% in 2025 `[C P22]` `[C P25]` |
| Run-rate (EBITDA) | The annualised EBITDA a scenario is earning in its final months, used here as the average of months 22 to 24 `[M]`, distinct from cumulative EBITDA, which sums every month |
| Payback month | The month in which a cohort's cumulative gross profit first exceeds its acquisition cost; HarvestBox's is month 10 `[M]` |
| Contribution margin | Revenue less variable costs, used in this document only when quoting a real company's own disclosed figure (for example Marley Spoon's 34.7% `[S28]`), never computed for HarvestBox |
| Working capital | Cash tied up in a business's operating cycle rather than spent outright; relevant to Proposal B's receivables under assumption A21 |
| Cumulative EBITDA | The sum of EBITDA across every month of a period, as distinct from the run-rate, used in table `[T8]` and in insight 12's comparison |

### D.2 Market, competition and regulatory terms

| Term | Meaning as used in this document |
|---|---|
| RTE | Ready-to-eat, a food category requiring no preparation beyond opening, thawing or reheating, the subject of Proposal C and of the four disagreeing market-size reports in section 9.3 |
| CAGR | Compound annual growth rate, the standard way outside market reports state a growth rate over several years |
| FSSAI | Food Safety and Standards Authority of India, the regulator whose licence thresholds and shelf-life rules govern Proposal C `[S64]` `[S65]` |
| FBO | Food business operator, the FSSAI's term for any entity, including an e-commerce seller, subject to its licensing and hygiene rules |
| MAP | Modified atmosphere packaging, a technique for extending a chilled product's shelf life, cited only from unverifiable vendor sources in this research (section 15.5) |
| HPP | High-pressure processing, a second shelf-life-extension technique, cited with the same caveat as MAP |
| Private label | A retailer's own-brand product, as distinct from a manufacturer's branded product; the ₹3,500 meal kit named in the case is private label `[C M3]` |
| Modern trade | Organised retail, supermarkets and chains, as distinct from general or traditional trade (independent kirana stores); the channel Proposal B sells through `[C PB1]` |
| General trade | Independent, unorganised retail outlets (kirana stores), the dominant channel for Indian consumer goods by an older reference-period estimate `[S61]` |
| Dark store | A delivery-only warehouse with no walk-in retail, the physical infrastructure behind quick commerce |
| Quick commerce | Rapid, app-based grocery and food delivery (Blinkit, Zepto, Swiggy Instamart), the fastest-growing adjacent category to HarvestBox's own `[S07]` `[S08]` `[S09]` |

### D.3 Model, framework and document terms

| Term | Meaning as used in this document |
|---|---|
| Survival curve | The month-by-month share of a sign-up cohort still active, fitted geometrically through the case's four retention points `[C R1]` to `[C R4]` under assumption A01 |
| Cohort | A group of customers who signed up in the same month, tracked together on the survival curve |
| Tornado (chart or table) | A sensitivity display ranking inputs by the width of their effect on an outcome, high to low; table `[T7]` in this document |
| Retention-gain cancellation threshold | 12.6% skips cancels the standalone retention uplift `[M T2]`. The full rebuilt base run-rate becomes negative at 5.6% skips `[M T7]`; these thresholds measure different outcomes. |
| Issue tree | A mutually exclusive, collectively exhaustive decomposition of a problem into its component causes, used in section 3.2 on the EBITDA gap and in section 8.1 on gross margin |
| MECE | Mutually exclusive, collectively exhaustive, the discipline behind an issue tree: every branch is distinct and the branches together cover the whole |
| Jobs to be done | A framework that defines competition by the underlying task a customer is trying to accomplish, used in section 9.1 to frame "a weekday dinner" rather than "the meal-kit category" |
| Porter's five forces | A framework assessing industry profitability pressure across new entrants, supplier power, buyer power, substitutes and rivalry, applied in section 10.1 |
| Ansoff matrix | A 1957 growth-strategy framework sorting a move by whether it sells an existing or new product into an existing or new market, applied to the three proposals in section 16.1 |
| Kano model | A framework classifying a feature as a must-have, a performance attribute or a delighter by how its presence or absence changes satisfaction, applied to the five exit reasons in section 7.4 and to the rebuilt Proposal A's features in section 17 |
| Real options | A framework treating a future investment decision (here, the staged ready-to-eat launch) as an option exercised only once a named condition is met, rather than a commitment made today |
| RACI | Responsible, Accountable, Consulted, Informed, a framework for assigning exactly one accountable owner to each workstream, used in section 22.4 |
| KPI tree | A decomposition of one top-level metric (here, EBITDA) into the operational levers that drive it, used in section 23.2 |
| Pre-mortem | An exercise that works backward from an assumed future failure to find its most likely causes, used in section 21.3 |
| Heat map | A table or grid sorting items by two scored dimensions (here, probability and impact) so attention goes first to the highest-risk combination, used in section 21.2 |

### D.4 Tags and units

Every number in this document carries a tag stating where it came from and how far it can be disputed.

| Tag | Meaning | Resolves to |
|---|---|---|
| `[C K5]` | A case fact, by the reference ID given in its transcription | `case/01-case-brief.md` |
| `[A08]` | A team assumption, numbered A01 to A25 | Section 25 of this document, section 5 of `PLAN.md` |
| `[M]` | A number produced by running the HarvestBox model | `model/model_outputs.json` |
| `[T4]` | A table produced by the same model run | `model/model_tables.md`, Appendix B |
| `[S12]` | An external source, numbered in the source register | Appendix A, `research/raw/sources.md` |
| `[V2]` | A table from the review-mining output | Appendix C, `research/reviews/review_tables.md` |

Units follow one rule throughout: Indian rupee figures are written with crore (Cr, ten million) and lakh (one hundred thousand), using Indian digit grouping, and a foreign-currency figure from an outside source stays in that source's own currency (€, $, £) rather than being converted to look like an Indian figure. A negative number carries the minus sign, written as U+2212. A range uses the word "to", never a dash. Where the model gives a figure to one or two decimal places, that precision is kept; where an outside source gives a rounded figure, the rounding is kept rather than implying a precision the source does not support.

| Unit or symbol | Meaning |
|---|---|
| Cr | Crore, ten million (10,000,000) |
| Lakh | One hundred thousand (100,000) |
| ₹ | Indian rupee |
| x (as in "3.0x") | A ratio, read as "times", used throughout for LTV to CAC |
| pp or points | Percentage points, used when comparing two percentages directly rather than as a ratio (for example, gross margin fell 7 points) |
| M (as in "month 12", "M24") | A month number counted from the start of the 24-month plan horizon, month 0 being today |
| Y1, Y2 | Year 1 (months 1 to 12) and year 2 (months 13 to 24) of the plan horizon |

This appendix does not repeat the full tag-resolution table from section 0.2 beyond what is shown above; a reader who needs the complete reading conventions, including how a tag covers a whole sentence unless a later figure in the same sentence carries its own tag, should read section 0.2 directly, since that section's job is the reading convention itself, while this appendix's job is the vocabulary.
