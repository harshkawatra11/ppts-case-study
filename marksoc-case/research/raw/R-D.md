# R-D: information asymmetry, disclosure, warranties and trust

Task: R-D external-context verification. Completed 28 October 2026.

Status: PASS. The register contains 33 useful rows across 11 distinct full-text sources. Ten sources present original theory or empirical studies; one presents an original meta-analysis. The meta-analysis is explicitly identified in `study_design` and should be reported separately when counting original empirical studies.

## Scope and use

All rows are restricted to research section 15. They provide mechanisms and research limitations for the trust discussion. None supplies an economics-model input, an observed Tikau customer result, a conversion uplift, or an assessed slide statistic. The frozen model reference supplied with the assignment is `9b3628d94d`; the coordinator reports 31 independent checks passed. This lane did not rerun or edit the model.

A writer can use the rows to explain why verifiable product information and enforceable remedies deserve investigation. The evidence does not establish the incremental effect of a Tikau Report, Battery 85, or a 12 month warranty. Those effects must remain tied to case assumptions and future validation.

## Full-text verification register

| Evidence | Full text inspected | Type and location |
|---|---|---|
| D01 to D03 | [Akerlof (1970)](https://web.pdx.edu/~nwallace/EHP/AkerlofLemons.pdf) | Formal adverse-selection model; no empirical sample. |
| D04 to D06 | [Spence (1973)](https://www.sfu.ca/~allen/Spence.pdf) | Formal labor-market signaling model; no empirical sample. |
| D07 to D09 | [Grossman (1981)](https://www.researchgate.net/publication/24100578_The_Informational_Role_of_Warranties_and_Private_Disclosure_about_Product_Quality) | Formal disclosure and warranty models; no empirical sample. |
| D10 to D12 | [Janakiraman, Syrdal and Freling (online 2015; issue 2016)](https://www.researchgate.net/profile/Narayan-Janakiraman/publication/285044986_The_Effect_of_Return_Policy_Leniency_on_Consumer_Purchase_and_Return_Decisions_A_Meta-analytic_Review/links/576d5cee08ae142e675c2303/The-Effect-of-Return-Policy-Leniency-on-Consumer-Purchase-and-Return-Decisions-A-Meta-analytic-Review.pdf) | Original meta-analysis; heterogeneous experiments and observational studies. |
| D13 to D15 | [Anderson, Hansen and Simester (2009)](https://www.kellogg.northwestern.edu/faculty/anderson_e/htm/PersonalPage_Files/Papers/Option%20Value%20Final.pdf) | Structural choice model fitted to transaction histories. |
| D16 to D18 | [Jin and Leslie (undated working paper)](https://www.econ.umd.edu/sites/www.econ.umd.edu/files/pubs/restaurant-hygiene-wpversion.pdf) | Observational policy analysis using inspection and revenue panels. |
| D19 to D21 | [Dai and Luca (2019 working paper)](https://www.hbs.edu/ris/Publication%20Files/18-088_7781070c-6910-4e26-aafd-9150b93a2d93.pdf) | Difference-in-differences around two disclosure interventions. |
| D22 to D24 | [Dewally and Ederington (2002 working paper)](https://www.ou.edu/dam/price/Finance/CFS/paper/pdf/comic%20paper.pdf) | Observational auction-price regressions; seller strategy selection. |
| D25 to D27 | [Chen, Wang and Jia (2020)](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.00781/full) | Two-stage hypothetical-choice experiment with logit regressions. |
| D28 to D30 | [Confente and colleagues (2021)](https://www.researchgate.net/publication/351409914_The_challenge_of_remanufactured_products_the_role_of_returns_policy_and_channel_structure_to_reduce_consumers'_perceived_risk) | Randomized 2 by 2 by 2 scenario experiment; mediation analysis. |
| D31 to D33 | [Lewis (3 February 2009 working paper)](https://www.hss.caltech.edu/~mshum/ec106/lewiscars.pdf) | Auction regressions plus software-upgrade comparisons and instrumental-variable analysis. |

The ResearchGate sources expose the uploaded article body, including methods, results and page markers. Their abstracts and related-paper snippets were excluded from verification. Several university PDFs reopened through the browser but timed out on later passage requests; direct HTTP retrieval and in-memory PyMuPDF extraction supplied the missing page checks. The Caltech Lewis PDF was retrieved and inspected directly after the Harvard download returned HTTP 429. No local PDF or extraction file was written.

## Corrections and cautions for assembly

- D05 now uses negative correlation, matching Spence’s cost assumption. The previous inverse wording could suggest a specific mathematical function.
- D12 records the weaker significance threshold for scope leniency. Do not present all five return-policy dimensions as equally supported.
- D13 now points to the actual sample description on journal pages 412 to 413. The transaction window is a duration; calendar endpoints were not inferred.
- D20 now acknowledges supplementary takeout-order data. The earlier wording could imply the paper never observed purchases. Its principal engagement measures remain intention proxies.
- D31 uses the retained sample in Lewis’s methods. The working paper’s introduction describes a larger collection of listings. Do not substitute that discovery-stage count for the analyzed sample or describe this PDF as the final 2011 journal version.
- D30 is a failure to detect a difference under the tested mechanism. It does not establish equivalence of online and store channels in India.
- D24 is a market-specific null warranty-price result. It prevents a blanket claim that any guarantee necessarily commands a premium.

These are scope distinctions across studies, not contradictory estimates of a shared Tikau treatment. Theory has no sampled population; experimental intentions, transaction regressions and policy comparisons answer different questions. Preserve those distinctions when combining them.

## Acceptance checks

The JSON parses successfully. Every row includes the 16 required schema fields plus `study_design`; identifiers are unique; all access dates are 2026-10-28; every permitted section is 15; and every factual row is VERIFIED or CORRECTED. Methods, populations and transfer limits are populated throughout. Excerpts occur once per URL, with at most 20 quoted words per source across this lane. The Markdown adds no quotations. Publication dates retain their observed precision, and the undated working paper remains undated.

The prose was reviewed using the humanizer process: repeated claims and staged contrasts were removed, then methods and numerical meaning were checked against the evidence. Authored prose contains no em or en dashes. Bibliographic titles remain faithful to their source.

## Worker handoff

Task: R-D.

Output: `marksoc-case/research/raw/R-D.json` and `marksoc-case/research/raw/R-D.md`.

Status: PASS.

Inputs used: operational plan C1 to C5 and worker contract; assigned existing R-D register; humanizer skill; the eleven full texts linked above.

Sections or evidence IDs completed: section 15 context, D01 to D33.

Checks run: full-text passage review, schema, unique IDs, status, access dates, source count, method/population/limitation coverage, context restriction, quotation budget, authored-prose punctuation.

Unresolved issues: no required claim depends on an inaccessible source. The undated Jin and Leslie version and the Lewis working-paper version are labelled explicitly.

Changes requiring coordinator attention: use the corrected rows for D05, D12, D13 and D20; add D31 to D33 to the evidence register. Count the original meta-analysis separately if the final source audit distinguishes empirical primary studies from original research syntheses. Enforce the aggregate quotation budget again after merging other lanes.
