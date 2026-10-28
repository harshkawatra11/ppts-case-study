# Project DOBAARA: research and calculation record

**Fund the Tikau Report and Battery85 promise, then add the February shift to reach modelled March break-even.**

Prepared for: MarKSoc DTU Case Competition 2026. Research version 1.0, 28 October 2026. Model 9b3628d94d.

---

## 0. Document control and the basis of the recommendation

We recommend funding B1 and B2 in January and starting the third lab shift on 1 February. In our model, this gives March EBITDA of +₹5.6 lakh, returns of 4.5% and total January to March growth spending of ₹58.0 lakh. Q1 EBITDA is ₹0.5 lakh lower than doing nothing, and its compliance result remains conditional on executing every Exhibit 5 control. These qualifications belong beside the recommendation wherever it is presented. [C-E6B1, C-E6B2, C-E6SH, C-E5a, C-E5b, C-E5c, C-E5d, C-E5e, C-E5f, C-F15, T15, M]

### The decision and its readers

This research supports a decision by Tikau's board and a competition submission assessed by the judges. The fictional board needs a plan that reaches March operating break-even within its growth allocation while reducing returns and following the case's claims rules. Judges also need enough working to rebuild the recommendation without trusting a spreadsheet or a polished slide. We therefore distinguish the calculation result, the assumptions supporting it and the implementation evidence that would be needed before Tikau could make its promises to customers. No new primary research has been conducted for this report. The customer evidence comes from the surveys and operating observations supplied in the case. [C-T2, C-B3, C-B7, C-Q1, C-Q3, C-Q4, C-R5]

The unit of decision is the complete January to March plan. A February campaign considered alone would omit January setup; a March EBITDA comparison considered alone would conceal the cost of arriving there. Conversely, rejecting a plan because January loses money would ignore the case's explicit requirement to pay setup before customer-facing benefits begin. We compare complete plans under the same timing rules and then explain the monthly path. The team's selection criterion is the highest unrounded quarterly EBITDA among plans passing all four board tests. This criterion is our analytical choice; the case permits other recommendations with correct numbers and stronger reasoning. [C-E6H1, C-D4, C-W5, C-F17, T12, T13]

Table R00-01. Evidence classes and the decisions each can support.

| Class | Example | Permitted analytical use | Boundary and source |
|---|---|---|---|
| Case fact | Good phones cost ₹11,600 to buy | Enter the base contribution calculation | Preserve the exhibit value [C-E2] |
| Explicit assumption | Existing channel spending stays fixed | Complete an unspecified operating treatment | Identify assumption A02 beside affected calculations [A02] |
| Derived result | Good contribution is ₹2,524 | Compare grade and plan economics | Rebuild from price and expected costs [T2, M] |
| Proposed control | Review battery swap share weekly | Explain how management could respond | It is a recommendation, not an observed practice [T27] |
| External context | Manufacturer measurement caveats | Explain scope in contextual sections | Never enter case forecasts [C-R1, C-F4] |

### Source hierarchy and reproducibility

The original case and FAQ govern interpretation. The reconciled transcription supplies stable case IDs, the assumptions register records judgments, and the audited model supplies derived values. External research appears separately in the permitted context sections. A real-world number that differs from a fictional exhibit cannot replace it. The FAQ is particularly clear that outside figures receive no credit; its purpose is to keep every competitor solving the same numerical problem. That rule also prevents a well-sourced market statistic from being used to manufacture demand that Exhibit 6 does not provide. [C-R1, C-R2, C-R3, C-F4, C-F11]

The frozen input bundle is DOBAARA-inputs-v1.1, dated 28 October 2026, with model hash `9b3628d94d`. The model outputs, independent audit and extended tables are recorded in `research/input-freeze.json`. The independent audit rebuilt exhibit calculations independently before comparing outputs. Its status is PASS, with 31 independent checks, alongside 13 original checks and 13 extension checks. These counts describe completed analytical checks, not assurance about a real company's sales or compliance. [M, research/input-freeze.json, audit/independent-audit.json, audit/economics-audit.md]

The original model can be inspected with `python -X utf8 marksoc-case/model/dobaara_model.py --dry`. That command checks the inherited model without regenerating protected outputs. Reproducing the recommendation also requires respecting the calculation order: apply timing and demand, ration Superb supply, ration total lab capacity, calculate delivered-phone costs, then deduct channel and company costs. The order matters because the case specifies that undeliverable orders disappear. Charging batteries on lost orders, or treating an unfilled Superb order as a Good sale, would silently change the strategy being evaluated. [C-E6H4, A03, A04, T1]

Table R00-02. Citation examples and what a reader should verify.

| Citation | Meaning | Check required before reuse |
|---|---|---|
| [C-E2N2] | Case return-cost rule | Sale remains recovered; charge expected return expense |
| [A11] | Commission interpretation | Apply commission to the changed selling price |
| [T15] | Recommended monthly decision table | Keep January setup and February commencement separate |
| [T24] | Joint sensitivity working | Apply the combined demand uplift once |
| [M] | Frozen model result | Preserve units, period, denominator and rounding |

Table R00-03. Completed audit layers and remaining execution boundaries.

| Layer | Recorded result | What remains outside that result | Record |
|---|---|---|---|
| Original calculation checks | 13 passed | Independent derivation | Model checks [M] |
| Independent economics | 31 passed | Actual commercial outcomes | Independent audit |
| Added analytical tables | 13 passed | Management adoption | Extension checks [T22, T23, T24, T25, T26, T27, T28, T29] |
| Case coverage | 111 IDs reconciled | Final slide visibility | Coverage ledger |
| External evidence freeze | 77 sources, 67 primary | Permission to use external model inputs | Input freeze |

Table R00-06. Evidence-lane verification tally at the frozen research milestone. These are research-control counts, not market observations or forecasting inputs. Source: frozen `research/raw/evidence-register.json` and `research/input-freeze.json`.

| Lane | Verified | Corrected | Other status | Treatment |
|---|---:|---:|---|---|
| B, market context | 40 | 1 | 1 unverifiable | Use eligible rows in contextual research only |
| C, rules and claims | 47 | 5 | 1 superseded | Retain current text and disclose status corrections |
| D, trust research | 29 | 4 | None | Preserve study populations and transfer limits |
| E, technical operations | 35 | 0 | None | Preserve device-specific measurement and repair scope |
| F, launch practice | 25 | 0 | None | Import no channel uplift assumption |
| G, comparable practices | 30 | 0 | None | Compare promises with proof and remedies |
| H, allocated quotations | 10 | 0 | None | Respect the shared quotation budget |
| I, language context | 15 | 0 | None | Treat copy interpretation as distinct from tested response |

### Units, names and interpretation limits

Money is before GST. Company totals are presented in ₹ lakh to one decimal and per-phone values in rupees, with more precision retained in explicit working when needed to explain rounding. A rounded component waterfall can differ slightly from its rounded total because all totals are calculated from unrounded components. In particular, the referral coupon expense is exactly ₹245,000, or ₹2.45 lakh; the inherited table shows ₹2.4 lakh under its formatting convention. No analyst should alter the underlying expense merely to make displayed rounded numbers add visually. [C-R4, C-F8, C-F10, C-E3N5, T4, audit/economics-audit.md]

Tikau, PhoneBazaar and MegaKart remain the fictional entities in the case. Their names are not aliases for real companies. A report illustration, monogram or product-page mockup must not imply that a real business endorsed this recommendation. Team identity belongs only in the verified original team table; analytical writing does not require inventing new advisers, interviewees or partners. The same discipline applies to the Tikau Report: its proposed certificate records an action and verification process, while purchasing B1 in the model cannot prove that an actual phone has been erased. [C-T2, C-E5c, C-E5f, C-E6B1]

Table R00-04. Frequent wording errors and the bounded statement to retain.

| Tempting wording | Required statement | Reason and source |
|---|---|---|
| The plan is profitable | March EBITDA is positive in our base model | Q1 remains negative [T15] |
| Returns fall by 56% | 56% of former rates remains, a 44% reduction | Effects multiply [C-E6H2] |
| B1 makes Tikau compliant | B1 supports compliance if records and tactics meet Exhibit 5 | Screening proxy has limits [C-F16] |
| Survey customers will convert | Survey responses help prioritise proposed benefits | Multiple answers and intentions [C-E1B, C-F9] |
| The battery sample proves every Good listing is wrong | The sample found 22 exceptions among 200 inspected | Sample scope [C-E4c] |

### Framework choice and accountability

We classify this as a marketing and operating-turnaround case. Contribution economics explains where value is retained, the theory of constraints explains why orders can fail to become sales, and segmentation connects an affordable promise to a buyer need. The case-deck skill's recommendation-first structure, symmetric alternatives and defensive working are useful here. Its calibration comes from M&A decks, however, so we do not import acquisition valuation methods, financing assumptions or expert quotations into this closed-data exercise. A framework is useful only when it changes a decision or makes a calculation easier to challenge. [C-Q1, C-Q2, C-Q3, C-E4a, C-F4]

Table R00-05. Analytical accountability by decision.

| Decision | Evidence needed | Responsible analytical treatment | Slide support |
|---|---|---|---|
| Fund the promise | Per-grade costs and channel deductions | Unit and cost-layer decomposition [C-E2, C-E3] | Economics, A1 |
| Add capacity | Delivered orders after both rationing stages | Constraint analysis [C-E6H4, T22] | Trust, Options |
| Select the plan | All board tests and complete quarter | Feasible-plan ranking [T12, T23] | Options, Plan |
| State the claim | Per-phone evidence and correct wording | Exhibit 5 review [C-E5a, C-E5b, C-E5f] | Launch, A3 |
| Continue in April | New funding and incremental benefit | Separate post-March decision [A15, T28] | Signals, A4 |

The main limitation is that this report solves a fictional decision with supplied average effects. It does not estimate Tikau's actual price elasticity, customer lifetime value, diagnostic error rate or cash runway. Those quantities would require observations absent from the case. The research therefore supports the Summary and Plan slides with an auditable base recommendation and visible uncertainty, while the proposed validation work describes how management could gather missing evidence later. This separation allows the board to act on the case without pretending that a numerical answer has already been tested in market. [C-T2, C-R3, C-Q5, C-F11, A16]

## 1. Coverage of the case, FAQ and assessment requirements

Every case and FAQ ID has a place in the argument, a research destination and a slide destination. The coverage matrix below retains all 111 IDs from the reconciled ledger and explains how each affects the answer. Coverage is an obligation to address a rule or fact accurately; it does not require putting every sentence of the case on the main slides. The appendix carries working that judges need to inspect, while the main deck carries the decision and its consequences. [C-R2, C-S2, C-S3, C-F2, C-F3, audit/coverage-ledger.json]

### Complete case-to-answer matrix

Table R01-01. All case IDs, their analytical treatment and where the answer belongs. Each fact summary is deliberately brief; the case ID governs exact wording. Section numbers refer to the research. Slide names refer to the preserved logical sequence, with A3 and A4 added for defensive working.

| Case ID | Fact or requirement, summarised | How the answer treats it | Research | Slide |
|---|---|---|---|---|
| C-T1 | Competition, project and case identities | Retain Project DOBAARA and the supplied fictional setting | 0, 2 | Cover, Summary |
| C-T2 | Fictional company and competition-only data | Label forecasts as case-model results; invent no actual outcomes | 0, 34 | Cover, A1 |
| C-H1 | Strategy team must answer both emails | Connect economics, customer choice, levers, launch and monitoring | 1, 2 | Summary, Plan |
| C-R1 | Only case numbers earn credit | Isolate external research from every assessed calculation | 0, 34 | A1 |
| C-R2 | Notes change numerical interpretation | Preserve return, timing, cost and rationing mechanics | 3, 34 | Economics, A1 |
| C-R3 | Missing information needs explicit assumptions | State A01 to A20 and test material alternatives | 0, 34 | A1, A4 |
| C-R4 | Rupees before GST; prescribed display units | Use rupees per phone and one-decimal lakh company totals | 0, 3 | Economics, Plan |
| C-R5 | Team must rebuild every important number | Supply calculations, rebuild card and speaker preparation | 36, 37 | A1, A2 |
| C-S1 | Main and appendix limits; executive summary first | Keep eight main slides and four appendix slides | 1, 35 | Summary, A4 |
| C-S2 | Decision table must be in main deck | Put all January to March rows on Plan | 24, 35 | Plan |
| C-S3 | Decision-driving working must be shown | Pair headline results with appendix arithmetic | 4, 25, 35 | A1, A2 |
| C-S4 | Design earns no marks independently | Use visual structure to expose the reasoning | 1, 35 | All main slides |
| C-W1 | Data accuracy carries 30% weight | Rebuild unit, channel, monthly and capacity economics | 3, 4, 5, 6, 9 | Economics, A1 |
| C-W2 | Customer insight carries 20% weight | Choose family buyers using needs and affordable proof | 18, 19, 20 | Customer |
| C-W3 | Recommendation and trade-offs carry 30% | Compare complete alternatives under the four tests | 21, 22, 23, 26 | Options, Plan |
| C-W4 | Marketing carries 20% weight | Show message, channels, product page and provable claims | 27, 28, 29 | Launch, Signals |
| C-W5 | More than one recommendation can succeed | State the team's objective and acknowledge competing criteria | 2, 22, 23 | Options |
| C-RW1 | Supplied market growth context | Retain only as labelled case context; exclude from forecast | 12 | Cover context |
| C-RW2 | Supplied repair-complaint context | Do not treat category complaints as Tikau observations | 12, 14 | Cover context |
| C-RW3 | Supplied consumer worry context | Keep separate from Tikau survey evidence | 12, 15 | Cover context |
| C-RW4 | Government IMEI checking service | Link to proposed per-phone verification control | 16, 28 | Launch, A3 |
| C-B1 | 7,200 monthly phones across website, marketplace and stores | Reconcile channel totals and website-only funnel | 3, 5, 8 | Economics, Trust |
| C-B2 | Customer expressed distrust despite phone quality | Use supplied voice without inventing new interviews | 10, 19 | Trust, Customer |
| C-B3 | Historical loss and March break-even expectation | Show monthly baseline, March result and quarterly cost | 2, 3, 6 | Summary, Plan |
| C-B4 | Growth head favours Fair price cuts and ads | Evaluate A under identical financial and capacity rules | 21, 23 | Options |
| C-B5 | Lab cofounder favours certification and warranty | Test B1 and B2 together with capacity support | 21, 23 | Options, Plan |
| C-B6 | Store managers favour trade in | Separate sourcing savings, buyer demand and setup cost | 21, 31 | Options, Signals |
| C-B7 | ₹80 lakh quarterly growth allocation | Count setup and monthly growth items once | 2, 24 | Plan |
| C-CO1 | Tikau history, founders and meaning | Keep background factual; infer no hidden capabilities | 0, 10 | Cover |
| C-CO2 | Wholesale sourcing, own lab, warranty and return window | Use as current operating architecture and promise baseline | 3, 16, 28 | Trust, Launch |
| C-CO3 | Historical revenue and EBITDA | Reconcile rounded annual figures with exhibit month | 3, 6 | Economics, A1 |
| C-CO4 | ₹58 lakh monthly company fixed costs | Deduct separately after channel contribution | 3, 6, 24 | Economics, Plan |
| C-CO5 | Superb, Good and Fair definitions | Preserve cosmetic and battery distinctions | 4, 11, 16 | Economics, A1 |
| C-K1 | PhoneBazaar case price and warranty corridor | Compare case positioning; make no unsupported public superiority claim | 13, 20, 28 | Customer, Launch |
| C-K2 | Informal case competitors have lower prices and weaker proof | Explain affordability versus evidence trade-off within case | 13, 18 | Customer |
| C-K3 | ₹10,000 new budget phone competes with Fair | Test whether Fair can afford expensive trust promises | 4, 13, 21 | Economics, Options |
| C-E1A | Multiple-answer reasons for leaving product pages | Prioritise trust barriers without adding percentages | 8, 10, 19 | Trust |
| C-E1B | Multiple-answer offers visitors say could persuade them | Separate intentions from Exhibit 6 demand assumptions | 8, 18, 20 | Trust, Customer |
| C-E1C | Four buyer segments and broad grade preferences | Use symmetric segment ranking and disclose judgment scores | 18, 19 | Customer |
| C-E1D | Website funnel and store interaction conversion | Exclude marketplace and store orders from website rates | 3, 8 | Trust, A1 |
| C-E2 | Grade prices, costs, warranty and return rates | Derive expected contribution line by line | 4 | Economics, A1 |
| C-E2N1 | Warranty claim costs ₹2,500; rates common across channels | Apply grade-specific expected claims without channel multiplier | 4, 7 | Economics, A1 |
| C-E2N2 | Returned phone costs ₹1,800; sale not reversed | Charge expected return expense while retaining recovered sale | 3, 4, 7 | A1 |
| C-E2N3 | Contribution is before marketing and channel costs | Keep unit contribution distinct from company EBITDA | 4, 5, 6 | Economics |
| C-E2N4 | Exhibit return rates are website rates | Adjust only where Exhibit 3 specifies a different regime | 4, 5, 7 | A1 |
| C-E3 | Orders, mixes, fixed spend, commission and coupons | Rebuild contribution by channel before ranking channels | 3, 5 | Economics, A1 |
| C-E3N1 | Performance ads use website returns | Apply common website grade rates to ad orders | 5, 7 | A1 |
| C-E3N2 | MegaKart commission is 12% of price | Recalculate commission when B2 changes selling prices | 3, 5, 25 | Economics, A2 |
| C-E3N3 | Creator buyers return at 1.5 times website rates | Retain the multiplier before applying trust reductions | 4, 5, 7 | Economics, A1 |
| C-E3N4 | Store returns are half website rates | Keep lower return expense separate from store fixed cost | 4, 5, 7 | Economics, A1 |
| C-E3N5 | Referral order uses ₹350 coupon | Charge delivered referral orders; retain exact ₹2.45 lakh baseline | 3, 5 | Economics, A1 |
| C-E3N6 | Dashboard omits commission, service costs and mix | Explain why reported acquisition cost cannot rank profitability | 3, 5 | Economics |
| C-E3N7 | Channel contribution deducts its own costs | Aggregate channels before company fixed cost and growth spend | 5, 6 | Economics, Plan |
| C-E4a | Gross lab tests lose 10%; 7,200 remain sellable | Use sellable capacity and no invented failure profit | 3, 9 | Trust, A1 |
| C-E4b | Wholesale Superb supply capped at 2,000 | Ration Superb before total-lab rationing | 9, 22 | Trust, Options |
| C-E4c | Own tester found 22 low readings among 200 Good phones | Treat as sample evidence; label any scale-up A14 | 11, 16 | Trust, A3 |
| C-E4d | Repairs average nine days; 38% need repeat visit | Explain service credibility gap without inventing additional costs | 7, 10, 32 | Trust, Signals |
| C-E4e | Lab cofounder says checking lags selling | Test against full capacity and measurement evidence | 9, 10 | Trust |
| C-E5a | Claims need per-phone truth and own-lab battery reading | Require unit-linked records before publishing battery promise | 11, 28 | Launch, A3 |
| C-E5b | Refurbished wording and strict parts-claim limits | Refuse like-new and genuine-parts wording for compatible batteries | 14, 16, 28 | Launch, A3 |
| C-E5c | Named competitor comparisons need available proof | Refuse unsupported PhoneBazaar comparison | 13, 28 | Launch |
| C-E5d | False urgency and fictional reference prices prohibited | Check timer, stock and discount tactics in launch review | 14, 28 | Launch, A3 |
| C-E5e | Verified reviews, disclosed rewards and labelled creators | Apply review and advertisement controls without sentiment conditions | 14, 27, 28 | Launch, A3 |
| C-E5f | Completed wipes and clean lost/stolen IMEI status required | Stop sale when either required record is incomplete | 16, 28 | Launch, A3 |
| C-E6A | Fair price falls 3%; selected channels gain orders and change mix | Apply all linked A effects together, not a partial option | 21, 23 | Options, A2 |
| C-E6B1 | Report setup, per-phone cost, demand and return effects | Charge ₹120 on delivery and multiply eligible effects | 21, 25, 28 | Options, Plan |
| C-E6B2 | Battery, warranty, price and claims package | Use grade-specific swaps and claims; price only Superb and Good | 4, 21, 25 | Options, Plan |
| C-E6B3 | Campaign needs B1 or B2; excludes marketplace uplift | Exclude invalid standalone campaign combinations | 21, 22 | Options |
| C-E6C | Trade in has ₹35 lakh setup | Assess complete programme and defer Q1 commitment | 21, 31 | Options, Signals |
| C-E6SH | Shift adds 1,800 sellable phones with four weeks training | Compare February, March and no-shift timing | 9, 24, 30 | Plan, A4 |
| C-E6TI1 | Trade-in arrivals follow a specified ramp | Distinguish Q1 option from assumed April restart | 21, 31, 34 | Signals, A4 |
| C-E6TI2 | Pickup cost, arrival mix and failure share | Charge every pickup; apply proportional failures under A06 | 21, 31, 34 | A2, A4 |
| C-E6TI3 | Passed phones replace wholesale supply and save 8% | Add passed Superb supply; preserve total lab constraint | 9, 21, 31 | A2, A4 |
| C-E6TI4 | 30% create new orders with credit and their own mix | Model buyer demand separately and ration before credit cost | 21, 31 | A2, A4 |
| C-E6TI5 | Pickup and buyer credit are operating costs | Exclude them from the ₹80 lakh growth ledger | 24, 31 | Plan, A4 |
| C-E6H1 | Setup January; customer-facing changes February | Keep January baseline operations and deduct setup | 2, 24 | Plan |
| C-E6H2 | Effects multiply; trade-in orders excluded from demand uplifts | Apply demand product once and retain return regimes | 21, 25, 30 | A2 |
| C-E6H3 | Growth items count once; per-phone costs are separate | Reconcile cost layers without double counting | 3, 24 | Plan, A2 |
| C-E6H4 | Superb rationing precedes total-lab rationing | Reduce each eligible cell proportionately; lose unmet orders | 9, 22 | Options, A2 |
| C-Q1 | Diagnose grades, channels, EBITDA, returns and cause | Build baseline and connect commercial loss to trust and capacity | 4, 5, 6, 7, 10 | Economics, Trust |
| C-Q2 | Choose customer and memorable positioning | Select family buyers with evidence and affordable proof | 18, 19, 20 | Customer |
| C-Q3 | Choose timed options and show rejected plan | Rank feasible plans and give main-deck decision table | 21, 22, 23, 24 | Options, Plan |
| C-Q4 | Plan launch and prove three accepted, two refused claims | Show first product-page view and complete rule check | 27, 28 | Launch |
| C-Q5 | Give weekly measures, change-course levels and April choice | Define denominators, warnings, actions and post-March funding | 29, 30, 31 | Signals, A4 |
| C-T1t | Growth spending at most ₹80 lakh | Show ₹58.0 lakh and ₹22.0 lakh allocation headroom | 2, 24 | Plan |
| C-T2t | March EBITDA at least zero | Show base +₹5.6 lakh and bear failure | 2, 24, 30 | Plan, Signals |
| C-T3t | March returns at most 6.0% | Show base 4.5%; separate warning from board boundary | 7, 24, 29 | Plan, Signals |
| C-T4t | Every claim and tactic follows Exhibit 5 | Treat numerical B1 flag as conditional on executed controls | 14, 28 | Launch, A3 |
| C-D1 | EBITDA includes all operating contribution, fixed and growth costs | Deduct both distinct fixed-cost layers correctly | 3, 6, 24 | Economics, Plan |
| C-D2 | Return rate is returned phones divided by sold phones | Use weighted delivered volumes and expected returns | 7, 29 | Plan, Signals |
| C-D3 | Required January, February and March decision rows | Include options, deliveries, contribution, growth, EBITDA and returns | 24 | Plan |
| C-D4 | Total growth, four tests and quarterly comparison required | State quarterly disadvantage despite positive March result | 2, 24 | Summary, Plan |
| C-F1 | Cover and thank-you excluded; summary is first main slide | Maintain fourteen physical slides within permitted categories | 1, 35 | Cover, Summary, A4 |
| C-F2 | Decision table belongs in main slides | Keep it readable on Plan rather than appendix only | 24, 35 | Plan |
| C-F3 | Only PDF assessed; working belongs in appendix | Preserve all decision-driving arithmetic in submission PDF | 35, 37 | A1, A2, A3, A4 |
| C-F4 | Outside numbers excluded from assessed solution | Keep external market and technical context separate | 0, 12, 34 | A1 |
| C-F5 | Clear design helps reasoning; design itself unscored | Prioritise comparisons, units and traceable working | 1, 35 | All main slides |
| C-F6 | Hindi or Hinglish positioning allowed | Retain chosen line and explain its intended meaning | 20 | Customer, Launch |
| C-F7 | Sensible missing assumptions should be stated | Publish assumptions and material alternative interpretations | 34 | A1, A4 |
| C-F8 | Prescribed rounding; small differences accepted | Calculate unrounded and display consistently | 0, 3 | Plan, A1 |
| C-F9 | Multiple-answer survey shares exceed 100% | Never sum answers into exclusive customer groups | 8, 18 | Trust, Customer |
| C-F10 | Prices and costs exclude GST | Keep tax treatment unchanged throughout | 0, 4 | A1 |
| C-F11 | Exhibit 6 fully specifies option mechanics | Avoid unsupported Q1 redesign or imported elasticities | 21, 34 | Options, A2 |
| C-F12 | No partial options; later ideas allowed if labelled | Retain complete packages and mark April proposals separately | 21, 26, 31 | Plan, Signals |
| C-F13 | Use stated EBITDA and return definitions | Reconcile numerator, denominator and expense treatment | 6, 7 | Economics, A1 |
| C-F14 | Fill all three monthly columns | Do not hide January setup behind March operating success | 24 | Plan |
| C-F15 | Compare complete quarter against unchanged operations | Use unrounded three-month totals before presentation | 2, 24 | Plan |
| C-F16 | Judges apply Exhibit 5 to claims | Supply claim-by-claim evidence requirements | 28 | Launch, A3 |
| C-F17 | No uniquely correct plan | Defend selection criterion and acknowledge alternative priorities | 2, 22, 23 | Options |
| C-F18 | Finalists present exact submitted PDF | Freeze submission after final verification | 35, 37 | Submission control |
| C-F19 | Any member may answer judge questions | Prepare shared rebuild drills and source familiarity | 36, 37 | A1, A2 |

### Coverage quality and assessment priorities

A coverage matrix can be formally complete and still fail the case if its links are superficial. For example, citing the trade-in notes beside one savings figure does not address the new buyer orders, pickup costs or supply consequences. We therefore treat a row as answered only when its operative distinction survives into the relevant calculation or claim review. The supplier replacement and incremental buyer flows have separate destinations because combining them would alter both demand and costs. The same principle applies to return rules: the grade base, channel multiplier and B1/B2 reduction each need visible treatment. [C-E2N4, C-E3N3, C-E3N4, C-E6TI2, C-E6TI3, C-E6TI4, C-E6H2]

Table R01-02. Assessment weights translated into verifiable deliverables.

| Assessed dimension | Weight | Evidence judges should find | Failure that would weaken the answer | Source |
|---|---:|---|---|---|
| Data use | 30% | Rebuilt unit economics, weighted returns, rationed deliveries | Quoting the dashboard as profit | [C-W1, C-E3N6] |
| Customer insight | 20% | One segment, its need and a funded reason to believe | Choosing the largest share without supply implications | [C-W2, C-E1C, C-E4b] |
| Recommendation and trade-offs | 30% | Complete timing, rejected alternatives and all tests | Hiding January costs or forbidden partial options | [C-W3, C-E6H1, C-F12] |
| Marketing | 20% | Product-page hierarchy, channel roles and checked claims | A slogan unsupported by per-phone proof | [C-W4, C-E5a] |

The scoring weights encourage an integrated answer. A customer promise consumes the same contribution that funds capacity, and the capacity decision determines whether marketing uplift can become delivered sales. This means that a standalone creative recommendation can be numerically unaffordable, while a financially attractive plan can fail because its claims are unprovable. We use each scoring dimension as a distinct check on the same plan. None provides permission to weaken another. The family-buyer recommendation must therefore survive the per-grade and channel economics, and the positive March result must survive the claim review. [C-W1, C-W2, C-W3, C-W4, C-T4t]

Table R01-03. Board tests and their different proof requirements.

| Test | Numerical or documentary proof | Base-plan answer | Important boundary | Source |
|---|---|---|---|---|
| Growth allocation | Sum January to March eligible spending | ₹58.0 lakh | ₹22.0 lakh is allocation headroom, not demonstrated cash | [C-T1t, T15] |
| March EBITDA | Contribution less company fixed and growth spending | +₹5.6 lakh | Quarter remains loss-making | [C-T2t, T15] |
| March returns | Expected returned phones over delivered phones | 4.5% | 6.0% is the board boundary | [C-T3t, C-D2, T15] |
| Claims and tactics | Unit records plus communication review | Conditional | Selecting B1 alone is insufficient | [C-T4t, C-E5a, C-F16] |

The fourth test differs from the first three because the model cannot observe a completed wipe, a truthful photograph or a verified review. It uses B1 as a screening proxy because B1 creates the specified report process. The manuscript and deck must preserve the conditional language. A numerical plan can pass its financial screen while remaining blocked operationally for a particular device. The correct control is to stop that device's sale until the missing evidence is resolved, rather than averaging its failure against compliant phones. Every-claim and every-phone language in Exhibit 5 makes this distinction consequential. [C-E5a, C-E5e, C-E5f, C-E6B1, C-F16]

Table R01-04. Submission architecture and how each category is used.

| Category | Planned count | Required role | Acceptance interpretation | Source |
|---|---:|---|---|---|
| Cover | 1 | Project and verified team identity | Excluded from main-slide count | [C-F1] |
| Main slides | 8 | Summary through Signals, including decision table | Summary immediately follows cover | [C-S1, C-F1, C-F2] |
| Appendix | 4 | Unit, lever, claims and sensitivity working | Decision support remains inside assessed PDF | [C-S3, C-F3] |
| Thank-you | 1 | Existing synthesis and team table | Excluded from both substantive limits | [C-F1] |
| Physical total | 14 | Complete enriched submission | No extra unclassified content slide | [C-F1, C-F3] |

The deck is the assessed deliverable, while this longer report is the evidence base and preparation aid. That distinction changes how much responsibility can be delegated to a report citation. A judge looking at the submitted PDF must be able to find the calculation that drives the decision in its main or appendix slides. Saying that a long research manuscript contains the answer would not satisfy the working requirement. We therefore use the coverage matrix as a compression map: detailed derivations feed a compact appendix exhibit, and the main slide shows the economic implication with the exact assumptions that change it. [C-S3, C-F3, C-R5]

Table R01-05. Dependencies that must survive compression into slides.

| Headline | Necessary supporting distinction | Consequence if omitted | Source |
|---|---|---|---|
| More trust creates more sales | Existing sellable lab is already full | Uplift gets mistaken for delivered demand | [C-E4a, C-E6H4] |
| Battery 85 is affordable | Good and Fair replacement shares differ | Battery expense is understated | [C-E6B2] |
| March breaks even | Setup is paid in January | Quarterly cost disappears | [C-E6H1, C-F15] |
| Stores are attractive | Store cost remains fixed and returns are lower | Channel comparison mixes different cost layers | [C-E3N4, A02] |
| Trade in has sourcing value | Replacement supply differs from incremental buyer orders | Demand, credit and capacity are double counted | [C-E6TI3, C-E6TI4] |

### Ambiguity, evidence strength and final review

Some case facts answer one question strongly and another weakly. The visitor survey identifies worries among people who left product pages, but it does not measure the worries of all buyers or predict a realised conversion increase. The customer survey gives segment shares among purchasers, but it does not provide a segment-by-channel matrix. The battery spot check demonstrates exceptions within the inspected sample, while its application to a whole month's Good volume requires the explicit A14 assumption. These boundaries are not reasons to ignore the evidence. They determine whether a sentence should say observed, modelled or proposed. [C-E1A, C-E1B, C-E1C, C-E4c, A14]

Table R01-06. Coverage completion checks that distinguish traceability from unsupported certainty.

| Review area | Completed research treatment | Final artifact check still required | Source |
|---|---|---|---|
| Every ID | All 111 ledger IDs appear in R01-01 | No material rule lost in slide compression | [audit/coverage-ledger.json] |
| Every monetary result | Calculation or canonical model tag | Same rounded value on every repeated slide | [C-R5, C-F8, M] |
| Every assumption | Named register entry | State relevant assumption beside affected slide claim | [C-R3, C-F7, T1] |
| Every customer assertion | Case evidence or explicit inference | No invented validation result | [C-E1A, C-E1C] |
| Every customer claim | Exhibit 5 control and evidence requirement | Complete device and communication review before launch | [C-E5a, C-E5f, C-F16] |

The counterargument to this level of traceability is that it can obscure a simple decision. The response is to keep the presentation hierarchy clear: recommendation and trade-off first, comparable alternatives next, technical working in the appendix. The research does not need to repeat every caveat in every sentence, but no caveat may vanish from the place where it changes interpretation. A short statement that March improves while the quarter remains slightly worse carries more decision value than a long narrative that only presents successful metrics. The matrix supports Summary, Economics, Plan and the four appendices by specifying what each must prove. [C-D4, C-F3, C-F15, T15]

The coverage ledger records the case as reconciled, not the final deck as submitted. Slide production, visual checks and export verification remain later acceptance steps. The submitted PDF must use the planned logical architecture and preserve the evidence needed by judges; the exact PDF is then frozen for the final round. Any later revision to a headline number requires revisiting every linked panel and appendix entry before that freeze. The operational value of the matrix is therefore practical: it gives the team a list of places to inspect when an assumption, rounding convention or claim wording changes. [C-F18, C-F19, C-R5, C-S3]

## 2. Fund the report, battery promise and February shift to reach March break-even

We would pay for the Tikau Report and Battery 85 and 12 month warranty in January, launch both in February and start the third lab shift on 1 February. We would target family buyers with the report before the price, retaining existing channel spending and using stores, referrals and labelled creator content to explain the promise. In our model, the plan delivers 8,328 phones in March at +₹5.6 lakh EBITDA and 4.5% returns, using ₹58.0 lakh of quarterly growth money; the complete quarter remains ₹0.5 lakh worse than doing nothing. [C-E1C, C-E6B1, C-E6B2, C-E6SH, A02, T15, M]

### Why this combination addresses the decision

Tikau's problem has a commercial and an operating component. The lab already produces the full sellable volume supported by its two shifts, so a demand stimulus by itself can displace orders without increasing deliveries. At the same time, the supplied visitor evidence puts battery confidence and visible condition ahead of price as stated barriers. The report creates per-phone proof, the battery and warranty package supplies a funded promise, and the shift lets additional eligible demand become sales. Each part addresses a different constraint; none should be presented as a complete turnaround on its own. [C-E4a, C-E1A, C-E1B, C-E6B1, C-E6B2, C-E6SH, C-E6H4]

We select family buyers because the case describes them as buying for a parent or child and wanting to know who will fix the phone. Their association with Good grade fits a promise that earns positive contribution after its battery and report costs. This is a strategic inference from the case, not a newly observed family-buyer response. The model's demand effects apply across channels, not selectively to the chosen segment. Targeting therefore determines message and launch emphasis; it does not authorise replacing the prescribed channel mixes or claiming a separate family-buyer conversion rate. [C-E1C, C-E6B1, C-E6B2, C-E6H2, T11, T26]

Table R02-01. The recommended combination answers different constraints with separately funded mechanisms.

| Constraint | Chosen mechanism | Financial or operating consequence | Residual limitation | Source |
|---|---|---|---|---|
| Condition cannot be judged from photos | Real unit photos and report | ₹120 per delivered phone plus report setup | Photos must represent the actual phone | [C-E1A, C-E6B1, C-E5a] |
| Battery and warranty confidence | Battery 85 and 12 month warranty | Grade-specific battery and claims expense | Compatible batteries cannot support genuine-parts wording | [C-E6B2, C-E5b] |
| Full sellable lab | Third shift in February | 1,800 additional sellable capacity at ₹9 lakh monthly | Superb wholesale cap remains | [C-E6SH, C-E4b] |
| Accountable service for family buyer | Report-led explanation of remedy | Existing channels explain the same promise | No segment-specific uplift is assumed | [C-E1C, A02, C-E6H2] |

### A symmetric reading of the price-led alternative

Rohan's price push has a coherent customer rationale. The case has buyers who want the cheapest functional phone and visitors who see insufficient value against local shops. A lower Fair price and more performance advertising directly address that concern, while requiring no January setup. It also produces substantially more stated demand in the channels it affects. Those arguments deserve the same care as the trust plan's arguments. We reject A because its complete operating and financial consequences fail the board tests under the supplied mechanics, not because price-sensitive customers are unimportant. [C-B4, C-E1A, C-E1C, C-E6A, T14]

Table R02-02. Three reasons to consider the price push and the corresponding reasons to choose the recommended plan.

| Decision lens | Case for A | Case for B1, B2 and February shift | Verdict under the case |
|---|---|---|---|
| Customer relevance | 24% mention insufficient price advantage and 29% of buyers are value seekers [C-E1A, C-E1C] | Battery worry is cited by 46%; Battery 85 attracts 44% of stated offer responses [C-E1A, C-E1B] | Prioritise proof while retaining an affordable Good proposition |
| Demand and delivery | A raises orders 50% in ads and marketplace [C-E6A] | Combined trust factor is 1.1664 with capacity available after the shift [C-E6H2, T15] | Delivered profitable orders matter more than unconstrained demand |
| Quarter and feasibility | No setup; ₹20.0 lakh quarterly growth spending standalone [C-E6A, T14] | ₹58.0 lakh funds the bundle; March EBITDA is +₹5.6 lakh and compliance is conditional [T15] | Lower spending alone does not satisfy all tests |

The demand increase under A is not economically neutral. Fair contributes only ₹716 before channel costs at its existing price; a 3% reduction on ₹10,000 removes ₹300 and leaves ₹416 under website returns. The mix also moves towards Fair in the two affected channels. With the original lab, A produces demand for 9,500 phones but delivers 7,200, and March EBITDA becomes −₹55.7 lakh. Adding the shift improves delivery but still leaves March at −₹36.9 lakh. This is a complete alternative analysis using the same cost layers, not a claim that every possible real-world discount would fail. [C-E2, C-E6A, C-E6H4, T11, T14]

### The monthly commitment and its quarterly consequence

January pays for future capability without receiving its demand or return benefits. The report costs ₹15 lakh to set up and B2 costs ₹25 lakh, so January growth spending is ₹40.0 lakh. Baseline operating EBITDA of −₹14.1 lakh becomes −₹54.1 lakh after that payment. February and March each carry ₹9.0 lakh for the shift. The customer-facing packages begin only in February, so it would be incorrect to apply their lower return rates or higher prices to January while still describing the result as the case plan. [C-E6B1, C-E6B2, C-E6SH, C-E6H1, T15]

Required decision table, reproduced from T15 for the executive answer; excluded from the authored analytical-table count. Company money is ₹ lakh, deliveries are displayed as whole phones and totals use unrounded model values. [C-D3, C-F8, T15]

| Measure | January | February | March |
|---|---:|---:|---:|
| Options live | None; B1 and B2 setup paid | B1, B2, third shift | B1, B2, third shift |
| Phones delivered | 7,200 | 8,328 | 8,328 |
| Contribution after marketing | 43.9 | 72.6 | 72.6 |
| Growth money spent | 40.0 | 9.0 | 9.0 |
| EBITDA | −54.1 | +5.6 | +5.6 |
| Return rate | 8.1% | 4.5% | 4.5% |

The one moneyshot is the March improvement of +₹19.7 lakh a month relative to doing nothing. Its working is +₹5.604998 lakh minus −₹14.136950 lakh, or +₹19.741948 lakh before presentation rounding. That improvement is not quarterly payback. The live months together improve EBITDA by ₹39.483896 lakh, just short of the January setup burden of ₹40 lakh, leaving the quarter ₹0.516104 lakh worse. We display the result as −₹0.5 lakh rather than choosing rounded monthly values that manufacture a different total. [C-F15, T15, T16, M]

Table R02-03. Reconcile March improvement with the quarterly disadvantage.

| Component of comparison against doing nothing | Working basis | Effect, ₹ lakh | Interpretation | Source |
|---|---|---:|---|---|
| January setup | ₹15 lakh plus ₹25 lakh | −40.0 | No January operating benefit | [C-E6H1] |
| February improvement | Plan EBITDA less unchanged baseline | +19.7 | Includes monthly shift cost | [T15, M] |
| March improvement | Same base operating month | +19.7 | Still depends on supplied effects | [T15, M] |
| Quarterly result | Sum unrounded differences | −0.5 | March target is purchased with a small Q1 disadvantage | [C-F15, M] |

The board asked for March break-even, not positive cumulative quarterly EBITDA. Doing nothing loses slightly less over the quarter but fails March EBITDA, return and claims screens. A plan that spends less and fails mandatory conditions is not an eligible substitute under our stated selection criterion. Among the five feasible plans, the recommendation has the highest unrounded Q1 EBITDA. Its advantage over the next feasible plan is ₹14.2 lakh; the next plan delays the shift until March. The recommendation therefore accepts a small disadvantage against an ineligible status quo to avoid a much larger disadvantage against the next eligible plan. [C-T2t, C-T3t, C-T4t, T12, T13, T23, T25]

Table R02-04. Distinguish three legitimate comparisons instead of calling every positive difference a win.

| Comparator | Question answered | Recommended-plan result | Decision meaning | Source |
|---|---|---|---|---|
| Doing nothing in March | Does the exit month improve | +₹19.7 lakh monthly EBITDA difference | Supports March turnaround | [T15, T16] |
| Doing nothing over Q1 | Does the quarter recover setup | −₹0.5 lakh EBITDA difference | Setup is not quite recovered by March | [C-F15, M] |
| Next feasible plan | Which passing plan loses least in Q1 | ₹14.2 lakh advantage | Supports February shift timing | [T23, T25] |
| Four board thresholds | Is the plan admissible | Financial tests pass; claims pass conditionally | Eligibility precedes ranking | [C-T1t, C-T2t, C-T3t, C-T4t] |

### What the plan deliberately declines to fund

We leave A and B3 off during Q1 and defer C until after March. Existing performance-ad spending remains in the model; choosing not to add A's extra spend is not permission to cancel the existing channel budget. B3 needs a trust package and provides additional eligible demand, but more demand must still compete for capacity and Superb availability. Trade in offers sourcing value and new buyers, yet it requires ₹35 lakh setup. Combining it with the recommended shift and both trust packages would use ₹93 lakh, exceeding the board's ₹80 lakh allocation. [C-E6A, C-E6B3, C-E6C, C-E6H3, A02, T14]

Table R02-05. Refusals preserve explicit opportunity costs and later review conditions.

| Q1 refusal | Why it is declined | What remains possible | Evidence needed to revisit | Source |
|---|---|---|---|---|
| A price push | Lowers already thin Fair contribution and fails March tests | Keep case baseline price unless selected option changes it | Revised case-permitted plan, not selective removal of A costs | [T11, T14, C-F12] |
| B3 campaign | Adds spend and eligible demand to a constrained system | Use existing channels to explain B1/B2 | Feasible full-plan economics and capacity headroom | [C-E6B3, T12] |
| C trade in | Complete recommended combination exceeds allocation | Examine April under new funding | Setup cash, restart ramp and incremental payback | [T14, A15, T28] |
| Unsupported superiority copy | Tikau has no named-comparison evidence | Describe its own inspected phone and remedy | Claim-specific substantiation | [C-E5c] |
| Genuine-parts wording | Replacement batteries are compatible | State refurbishment and accurate battery evidence | Every replaced part must meet the case definition | [C-E5b] |

### The bear reading and the conditions that change our answer

The recommendation's margin of safety is limited. In the joint bear scenario, the declared uncertain effects move adversely under A16, while controlled prices and the report cost remain fixed. March EBITDA falls to −₹8.7 lakh even though the return rate remains below the board limit. The plan therefore fails the EBITDA test in that scenario. This finding prevents us from treating base feasibility as guaranteed execution. It also explains why the launch needs operating warnings before the board boundary is crossed. The stress test is a team-defined sensitivity, not a probability forecast or evidence that those adverse conditions have already occurred. [A16, T18, T19, T27, audit/independent-audit.json]

Table R02-06. Scenario interpretation uses the same recommendation and different declared uncertain inputs.

| Scenario | March EBITDA, ₹ lakh | March returns | Board interpretation | Appropriate reading | Source |
|---|---:|---:|---|---|---|
| Bear | −8.7 | 5.3% | EBITDA fails | Joint downside can overturn the base case | [A16, T19, M] |
| Base | +5.6 | 4.5% | Financial conditions pass | Uses printed Exhibit 6 effects | [T15, T19] |
| Bull | +20.5 | 3.8% | Financial conditions pass | Upside remains constrained by supply and capacity | [A16, T19] |

We would change course if demand conversion, service cost or proof execution invalidated the case for continuing. The operating trigger must specify an action rather than merely change the colour of a dashboard. For example, a rising Good battery replacement share calls for checking intake quality and supplier lots, because it directly changes the cost of the promise. Rising returns call for reason-coded diagnosis and claim review. A missing wipe or lost/stolen flag calls for stopping the affected sale immediately. These responses are proposed operating rules; the case provides no historical record that Tikau already follows them. [C-E4c, C-E5a, C-E5f, C-Q5, T27]

Table R02-07. Five findings that would require reconsidering continuation or timing.

| New finding | Why it changes the answer | Proposed response | Boundary to retain | Source |
|---|---|---|---|---|
| Delivered demand remains below the operating warning | Fixed shift cost is spread over fewer sales | Diagnose demand and capacity before extra promotion | Combined uplift EBITDA boundary is about 10.5% | [T24, T27] |
| Good swaps reach 50% | Battery expense approaches its model boundary | Review incoming lots and repair allocation | 50% is a warning; about 55% is the local zero-EBITDA boundary | [T24, T27] |
| Returns reach the proposed 5.5% warning | Customer failure is worsening before board limit | Review reasons, sellers and claims; correct source of failure | 6.0% remains the board boundary | [C-T3t, T27] |
| Shift cannot start in February | Lost February deliveries reduce quarterly result | Recalculate complete timing alternative | Do not retain February sales with March hiring | [C-E6SH, T25] |
| Device proof or claims are incomplete | Test 4 is violated for affected communication or sale | Stop publication or delivery until corrected | B1 spending cannot waive Exhibit 5 | [C-E5a, C-E5f, C-F16] |

The recommendation does not claim that every metric should improve simultaneously. Fair's website contribution falls sharply after the promise, the business still loses money across Q1, and the shift creates capacity headroom that is not entirely used in the base case. We accept those trade-offs because the whole eligible plan best meets the board decision under the chosen objective. A different objective, such as preserving the most immediate cash or maximising a later sourcing programme, could change the ranking. The case provides no cash-flow statement or longer-term demand evidence to make those alternative objectives quantitatively superior here. [T11, T15, T23, C-W5, C-F17]

One reasonable objection is that unused growth allocation should be spent immediately to protect the plan from downside. The remaining ₹22.0 lakh is not automatically an effective intervention: each permitted lever has a defined package, capacity effect and cost. B3 cannot be evaluated as a free source of confidence, and the full trade-in combination breaches the allocation. Holding headroom therefore preserves flexibility without assuming an unmodelled sales benefit. The base recommendation is still exposed to weaker demand and higher battery needs. Its defence is the comparative result and proposed control system, not the existence of an unspent balance. [C-E6B3, C-E6C, C-E6H3, T12, T14, T27]

Another objection is that a family-buyer message might exclude students or upgraders who also value a battery guarantee. The primary-segment decision sets the clearest customer problem for the launch; it does not refuse other buyers or rewrite the case's delivery mix. A student buying Superb still receives the same report and warranty. A value seeker buying Fair receives the B2 promise even though its contribution is thinner. This uniformity costs money and helps keep claims consistent. We therefore describe segment focus as a choice of emphasis and evidence, while the model continues to serve the full portfolio under its supplied channel shares. That distinction prevents a narrative segmentation choice from becoming a hidden financial assumption. [C-E1C, C-E3, C-E6B1, C-E6B2, C-E6H2, C-F12]

### Executive version for rapid reading

We recommend paying for B1 and B2 in January and opening the third lab shift on 1 February. The Tikau Report should lead the February launch, supported by Battery 85 and the 12 month warranty. We would target family buyers and explain the promise through existing stores, referrals and labelled creators. In our model, March delivers 8,328 phones, earns ₹5.6 lakh EBITDA and returns 4.5%, using ₹58.0 lakh of quarterly growth money. January still carries ₹40 lakh of setup. Consequently, quarterly EBITDA is ₹42.9 lakh negative, ₹0.5 lakh worse than doing nothing. The recommendation improves March by ₹19.7 lakh but does not recover setup fully during Q1. We leave A and B3 off and defer trade in to April, subject to new funding. Claims remain conditional on per-phone proof and every Exhibit 5 control. Joint downside can still make March loss-making, so weekly warnings need actions and named accountability. [C-E6H1, C-E5a, C-E5f, A15, A16, T15, T19]

This section supports Summary, Options and Plan. The Plan main slide should carry the decision table, the four tests, the quarterly disadvantage and the sole named monthly-improvement moneyshot. The appendix should make the contribution and rationing arithmetic reproducible. Launch and Signals then show how the operating promise would be explained and controlled. The remaining uncertainty is execution of the case's assumed effects, not an unresolved numerical discrepancy between the original model and independent audit. [C-S2, C-S3, C-Q4, C-Q5, audit/economics-audit.md]

The board should approve the complete sequence together, since removing the capacity commitment while retaining the forecast would change delivered volume and invalidate the financial justification. [C-E6H4, T25]

The launch review should also separate approval of a spending package from permission to publish a particular listing: each listing still needs its own completed proof record. [C-E5a, C-E5f]

## 3. Reconcile the exhibits before interpreting the performance dashboard

The exhibits produce a coherent baseline of 7,200 delivered phones and monthly EBITDA of −₹14.1 lakh. Annualising the unrounded month gives a loss of ₹169.6 lakh, within ₹0.4 lakh of the case's rounded historical loss, while gross selling values annualise to about ₹139.2 crore against reported revenue of ₹139 crore. This is a reconciliation under stated revenue and period assumptions; it does not establish that a representative month exactly reconstructs every historical transaction. The largest apparent contradictions disappear when website orders, channel costs and company costs retain their different scopes. [C-B1, C-CO3, C-CO4, C-E3, A17, A18, T5]

### What each exhibit contributes to the model

Exhibit 1 supplies reasons, preferences, customer groups and a website funnel. It does not supply the causal demand increase of a chosen lever; Exhibit 6 supplies that increase. Exhibit 2 supplies grade economics before channel costs. Exhibit 3 supplies orders, mix and channel-specific deductions and return multipliers. Exhibit 4 supplies a total sellable limit, a separate Superb supply limit and operational observations. Exhibit 5 governs truth and proof. Exhibit 6 defines the allowed changes, their costs, timing, interactions and rationing. Reading any exhibit in isolation leaves a material part of the decision unresolved. [C-E1A, C-E1B, C-E1C, C-E1D, C-E2, C-E3, C-E4a, C-E4b, C-E5a, C-E6H1, C-E6H2, C-E6H4]

Table R03-01. Exhibit inputs, valid transformations and tempting transformations that change the case.

| Input source | Valid model treatment | Treatment to reject | Decision affected | Source |
|---|---|---|---|---|
| Visitor and buyer research | Prioritise needs and compare segment fit | Substitute survey offer shares for order uplift | Positioning and forecast | [C-E1A, C-E1B, C-E1C] |
| Grade economics | Deduct expected warranty and returns | Reverse every returned sale | Unit contribution | [C-E2, C-E2N2] |
| Channel mix and costs | Multiply each channel's orders by its grade mix | Apply company-average mix to every channel | Channel ranking | [C-E3] |
| Lab and supply | Use sellable throughput and separate Superb cap | Treat all gross tests as sellable phones | Delivery forecast | [C-E4a, C-E4b] |
| Claim rules | Require per-phone proof and truthful tactics | Average away a device's false claim | Launch permission | [C-E5a, C-E5f] |
| Option mechanics | Apply full package and timing | Choose uplift while discarding associated expense | Plan feasibility | [C-E6H1, C-F12] |

The baseline is constructed from delivered channels rather than inferred from website traffic. The website accounts for performance ads, creators and referrals: 2,600 plus 900 plus 700 equals 4,200. That matches the funnel's order count exactly. The other 3,000 company orders consist of 2,000 MegaKart and 1,000 stores. Using total company orders in the website funnel would raise apparent conversion by including people who did not enter that funnel. The error is a denominator mismatch, not a dispute about the order total. It would also distort the proposed launch measurement because changes in store activity could appear as website improvements. [C-E1D, C-E3, T7]

### Orders and capacity conserve the same delivered units

Table R03-02. Reconcile sales paths with the appropriate denominator.

| Reconciliation | Arithmetic | Result | Interpretation | Source |
|---|---|---:|---|---|
| Website orders | 2,600 + 900 + 700 | 4,200 | Matches product-funnel orders | [C-E1D, C-E3] |
| Other company orders | 2,000 + 1,000 | 3,000 | Marketplace plus stores | [C-E3] |
| Company deliveries | 4,200 + 3,000 | 7,200 | Baseline monthly sales | [C-B1, C-E3] |
| Sellable lab output | 8,000 × 90% | 7,200 | Gross tests less failures | [C-E4a] |
| Website visit conversion | 4,200 / 9,60,000 | 0.4375% | Website only, not whole-company conversion | [C-E1D] |
| Product-page to cart | 26,000 / 3,10,000 | 8.3871% | A separate stage with its own denominator | [C-E1D] |

Equal current orders and sellable output establish a binding aggregate capacity boundary in the case model. They do not prove that every real work station is fully occupied every minute or that every extra order is valuable. The case provides average monthly throughput and a prescribed rationing procedure, not cycle-time distributions or queue lengths. We therefore use the binding monthly limit to evaluate Exhibit 6. We do not apply a speculative productivity gain, reduce the failure rate through an unpriced process improvement or borrow a manufacturing utilisation benchmark from outside the case. Those changes would create capacity that the allowed options do not provide. [C-E4a, C-E6SH, C-E6H4, C-F4, C-F11, C-F12]

Grade mix is another conservation check. Multiplying each channel's orders by its three shares gives 1,775 Superb, 3,190 Good and 2,235 Fair. Their sum is 7,200. Current Superb demand is below the 2,000 wholesale limit, leaving 225 possible Superb units under that constraint. It does not create 225 free slots in the total lab, because the lab is already full with all grades combined. This distinction explains why the supply mix and total processing constraint must be assessed separately. A shift can relax the total processing limit while leaving Superb availability binding. [C-E3, C-E4a, C-E4b, T6, T8]

The model retains fractional expected volumes internally because channel shares, return probabilities and demand multipliers are averages. A displayed whole-phone count is a presentation of that expectation, not a scheduling instruction to dispatch a fraction of a device. Rounding every grade-channel cell before summation would create or remove phones and could change allocation near a cap. We preserve full precision through the calculation and round the final presentation. Actual operations would need integer allocation and daily scheduling, neither of which is specified in the case. [C-F8, C-E6H4, M]

### Revenue and EBITDA use different stages of the same waterfall

The baseline selling value comes from each grade's price and volume. Superb contributes 1,775 × ₹24,000, or ₹426.0 lakh of gross selling value; Good contributes ₹510.4 lakh and Fair ₹223.5 lakh. Together they produce ₹1,159.9 lakh a month. Multiplying by twelve yields ₹139.188 crore, displayed as approximately ₹139.2 crore. Under A17, we compare that gross selling-price basis with the case's rounded net-revenue label. This assumption is a reconciliation convention and must remain visible because the case does not provide a full accounting definition of net revenue. [C-E2, C-E3, C-CO3, A17, T5]

Table R03-03. Historical reconciliation separates exact working from rounded comparison.

| Measure | Exhibit-built working | Case history | Difference and interpretation | Source |
|---|---|---|---|
| Monthly gross selling value | ₹1,159.9 lakh | No monthly revenue stated | Constructed from grade volumes and prices | [C-E2, C-E3, T5] |
| Annual selling-value comparison | ₹139.188 crore | ₹139 crore | ₹0.188 crore; compatible with rounding and A17 | [C-CO3, A17] |
| Monthly EBITDA | −₹14.13695 lakh | No exact month stated | Derived after every specified cost layer | [C-D1, T5] |
| Annual EBITDA comparison | −₹169.6434 lakh | −₹170 lakh | ₹0.3566 lakh less negative | [C-CO3, A18, T5] |
| Historical period | Representative average applied by A18 | November 2025 to October 2026 | Period equivalence is an assumption, not observed monthly uniformity | [C-CO3, C-E3, A18] |

Forcing the annual figures into exact agreement would be a substantive error. It would require altering an exhibit price, cost or volume, or introducing a balancing item unsupported by the case. The small differences are compatible with rounded historical figures and a monthly average covering a different stated period. We disclose the difference and retain the supplied operating detail. The interpretation should therefore be that the baseline is consistent with the historical scale and loss, not that it recovers a hidden accounting ledger. That is enough to support a comparative option model because every plan uses the same declared baseline. [C-R1, C-R3, C-CO3, C-E3, A17, A18]

Contribution after marketing is ₹43.86305 lakh. The separate company fixed cost of ₹58 lakh produces −₹14.13695 lakh EBITDA. This cost layer must not be confused with the ₹99 lakh of channel fixed spend already deducted inside contribution after marketing. Stores' rent and staff are included in their channel spend; company fixed costs separately cover the case's lab, head office, technology and other listed items. We follow the case's categories without inventing an overlap adjustment. Deducting either layer twice would exaggerate the loss, while omitting one would create a false turnaround. [C-CO4, C-E3, C-E3N4, C-E3N7, C-D1, T4, T5]

Table R03-04. Cost layers and the point at which each enters the calculation.

| Cost layer | Baseline example | Calculation position | Double-counting risk | Source |
|---|---|---|---|---|
| Phone purchase and refurbishment | Grade-specific trader and lab costs | Before grade contribution | Deducting again after channel aggregation | [C-E2] |
| Expected service cost | Warranty and returns | Before channel cost deductions | Adding claims again to company EBITDA | [C-E2N1, C-E2N2] |
| Variable channel charge | Commission and coupons | Within channel contribution | Omitting marketplace commission from dashboard | [C-E3N2, C-E3N5] |
| Channel fixed spend | ₹99.0 lakh total | Within contribution after marketing | Combining with growth additions and charging twice | [C-E3, A01, A02] |
| Company fixed spend | ₹58.0 lakh | After channel contribution | Assuming channel deductions replace it | [C-CO4, C-D1] |
| Growth money | Setup and allowed monthly additions | In month spent, once | Counting it as both funding and an extra duplicate expense | [C-E6H3] |

### The dashboard reproduces correctly and still answers the wrong question

The growth dashboard's arithmetic is reproducible. Performance ads show ₹60 lakh divided by 2,600 orders, rounded to ₹2,308. Creators show ₹18 lakh divided by 900, or ₹2,000. Stores show ₹21 lakh divided by 1,000, or ₹2,100. Referrals show their ₹350 coupon, and MegaKart shows zero because it has no fixed spend or coupons under the dashboard definition. None of those calculations is itself an arithmetic error. The problem is that their common label invites an economic comparison without the costs and mix that determine contribution. [C-E3, C-E3N6, T4]

Table R03-05. Dashboard reconciliation and the omitted economic question.

| Channel | Dashboard rebuild | Displayed result | Missing question | Source |
|---|---|---:|---|---|
| Performance ads | ₹60,00,000 / 2,600 | ₹2,308 | Does grade contribution cover this fixed spend | [C-E3, T4] |
| MegaKart | ₹0 fixed spend / 2,000 | ₹0 | What does 12% commission remove | [C-E3N2, C-E3N6] |
| Creators | ₹18,00,000 / 900 | ₹2,000 | How does the higher return regime affect margin | [C-E3N3, T4] |
| Stores | ₹21,00,000 / 1,000 | ₹2,100 | How much is retained after lower returns | [C-E3N4, T4] |
| Referrals | ₹350 per delivered order | ₹350 | What contribution remains after the coupon | [C-E3N5, T4] |

MegaKart illustrates the distortion most clearly. Its average selling price is ₹14,100 from its prescribed mix, making commission ₹1,692 per order. Across 2,000 orders that is ₹33.84 lakh, even though the dashboard reports zero acquisition cost. That does not make the channel unprofitable: it still contributes ₹4.626 lakh after commission. It does mean that a zero dashboard cost cannot justify calling the channel free. A commission-paid channel and a fixed-budget channel scale differently, so a plan that changes price must update commission while a plan that changes orders spreads the existing fixed budget over a different volume. [C-E2, C-E3, C-E3N2, A02, A11, T4]

Referrals and stores also require canonical rounding discipline. Referrals retain ₹18.53565 lakh over 700 orders, or ₹2,647.95 per order, displayed as ₹2,648. Stores retain ₹12.575 lakh over 1,000 orders, or ₹1,257.50, displayed as ₹1,258. These figures are after the relevant channel deductions and before the separate company fixed layer. Calling either one the net profit of an individual phone would erase that distinction. They are useful for describing existing channel economics, while a proposed reallocation still needs an allowed mechanism and evidence of incremental demand. [C-E3N7, C-D1, A02, T4, audit/economics-audit.md]

### Return and warranty counts reconcile different probabilities

Expected warranty claims are 468.15 phones, computed from grade volumes and the common grade-specific rates. Expected returns are 582.4 phones after applying each channel's return regime. These are separate expected expenses, not mutually exclusive customer groups. The case does not specify whether a given buyer appears in both groups over time, so we neither subtract one probability from the other nor invent a combined unique-customer failure rate. Their expenses sum to ₹22.18695 lakh, which describes the supplied cost burden. It does not prove that every rupee can be eliminated through a campaign or a new report. [C-E2N1, C-E2N2, C-E3N3, C-E3N4, T5]

Table R03-06. Reconcile event counts, expenses and the company return denominator.

| Event or ratio | Working | Unrounded result | Meaning | Source |
|---|---|---:|---|---|
| Warranty claims | 1,775 × 3% + 3,190 × 6% + 2,235 × 10% | 468.15 | Expected claims, common grade rates | [C-E2, C-E2N1] |
| Warranty expense | 468.15 × ₹2,500 | ₹11.70375 lakh | Expense already in unit contribution | [C-E2N1] |
| Returns | Sum channel-grade expected returned phones | 582.4 | Channel-weighted expected count | [C-E3N3, C-E3N4, T4] |
| Return expense | 582.4 × ₹1,800 | ₹10.4832 lakh | Recovered sales are not reversed | [C-E2N2] |
| Company return rate | 582.4 / 7,200 | 8.0888889% | Ratio of phones, not channel-rate average | [C-D2] |

An unweighted average of the five channel return rates would give each channel the same influence despite their different order volumes. It would therefore answer an artificial question about an equal-channel portfolio. The board test concerns all phones sold, so each channel's expected returned phones must enter the numerator and every delivered phone the denominator. The same logic applies after rationing, when delivered mix may differ from requested mix. Maintaining the numerator and denominator at the same stage of fulfilment prevents a plan from appearing to improve returns merely because unfilled orders were counted as sales. [C-D2, C-E6H4, T22]

### Notes that materially change a calculation

Table R03-07. Indirect rules and the numerical error each prevents.

| Rule hidden in a note or interaction | Correct reading | Error avoided | Source |
|---|---|---|---|
| Returned sales are recovered | Retain selling price and charge ₹1,800 expected expense | Treating a return as a full revenue reversal | [C-E2N2] |
| Commission follows selling price | Increase Superb and Good commission under B2 | Retaining old commission after raising prices | [C-E3N2, A11] |
| Shift adds sellable output | Add 1,800 to 7,200 | Applying a second 10% failure haircut | [C-E6SH, A10] |
| Setup precedes benefits | Deduct January setup before February launch | Pulling demand and savings into January | [C-E6H1] |
| Trade-in buyer orders are distinct | Add their demand without lever multiplication | Multiplying 300 buyer orders by B1/B2 uplift | [C-E6TI4, C-E6H2] |
| Failed phones still require pickup | Charge all trade-in arrivals | Making failed pickups costless | [C-E6TI2, C-E6TI5] |
| Superb rationing comes first | Reduce constrained grade proportionately | Replacing lost Superb with another grade without permission | [C-E6H4] |

These notes make a larger difference than a small rounding disagreement. A double-counted report cost understates plan EBITDA, but a report charged only to incremental orders overstates it. A missed commission increase overstates the value of B2's price rise. A trade-in supply addition mistaken for lab capacity can make a constrained sourcing programme seem able to fulfil orders that it cannot. The independent audit therefore compares intermediate deliveries, commission, pickups, credit, supply and capacity factors for every plan-month, not just the final recommended EBITDA. Agreement at the endpoint alone could conceal offsetting errors in those components. [C-E6B1, C-E6H2, C-E6H4, audit/independent-audit.json]

### Check results and their limits

Table R03-08. The original thirteen checks, grouped by what they establish. [M]

| Original check | Result | What it establishes | What it does not establish |
|---|---|---|---|
| Website orders equal funnel orders | PASS | Correct channel scope | Website visitors' future behaviour |
| Current orders equal sellable lab | PASS | Correct capacity basis | Daily queue behaviour |
| Channel fixed spend equals ₹99 lakh | PASS | Correct fixed-spend aggregation | Permission to reallocate budgets |
| Dashboard figures reproduce | PASS | Correct stated dashboard formula | Economic completeness of dashboard |
| Annual EBITDA within ₹1 lakh of history | PASS | Rounded loss reconciliation | Exact historical monthly ledger |
| Annual revenue within ₹1 crore of history | PASS | Scale reconciliation under A17 | Full net-revenue accounting definition |
| Grade mixes sum to 100% | PASS | Input conservation | Segment-by-channel identification |
| 84 plans screened | PASS | Enumerated valid option space | All conceivable real-world strategies |
| Five plans pass all tests | PASS | Screen result under stated proxy | Executed claim compliance |
| Recommended plan passes | PASS | Base-plan eligibility | Guaranteed downside protection |
| Bridge adds up | PASS | Reconciled component changes | Unique causal decomposition order |
| Monthly EBITDA follows stated identity | PASS | Cost-layer arithmetic | Cash-flow or tax result |
| Uplift boundary below planned uplift | PASS | Local base-case operating cushion | Joint sensitivity immunity |

Source for every row of R03-08: frozen model checks [M], with assumptions [A17, A18] and independent confirmation in `audit/independent-audit.json`.

The thirteen original checks are supplemented by independent rebuilding and extension tests. The independent audit compared all 84 valid plans and found no numerical discrepancy requiring a change to the inherited engine. Its largest compared floating-point difference was approximately 0.00000000000364 in the recorded fields, which is a computational representation difference rather than a commercial amount to interpret. We do not use that tiny residual as evidence of forecast accuracy. The relevant conclusion is that separately written arithmetic reproduces the same case solution under the same stated assumptions. [audit/independent-audit.json, audit/economics-audit.md]

The return definition also changes how a reader should interpret a growing company. A larger delivered denominator can increase the absolute number of returns while lowering the rate, and a shrinking business can report fewer returns without improving quality. We therefore reconcile counts, expense and rate rather than treating any one as a complete performance verdict. The recommended plan is evaluated on the ratio specified by the board, with the expected expense still deducted on all delivered grade-channel cells. Later weekly monitoring should preserve that denominator and avoid comparing an incomplete return window with a fully matured one. Such monitoring is a proposed implementation discipline; it does not alter the case's monthly probability convention. [C-D2, C-E2N2, C-Q5, T27]

The growth allocation has a similarly specific meaning. It measures only the case-designated setup and monthly growth items. Operating costs such as reports, replacement batteries, pickups and buyer credits remain expenses even when excluded from that allocation. Passing the spending test therefore does not establish that the business has financed every working-capital need. The case does not supply the collections and payments needed for a cash forecast, so the research keeps its conclusion at EBITDA and eligible growth spending. This boundary protects the recommendation from being read as a complete treasury plan. [C-E6H3, C-E6TI5, C-D1, C-T1t]

What remains unknown is substantial: no daily demand series, cash collection schedule, supplier payment terms, customer retention history or segment-specific causal response is supplied. We therefore do not calculate cash runway, lifetime value, a statistical conversion experiment or a confidence interval for March EBITDA. The case's forecast is conditional on its option effects, and sensitivity analysis changes declared inputs without inventing observations. The reconciliation supports Economics and A1, while the capacity and indirect-rule working supports Trust, Options and A2. It establishes a clean baseline for the later argument and a clear boundary around what the data can bear. [C-R3, C-Q5, C-F4, C-F11, A16]

Readers should retain both the representative-period assumption and the stated revenue convention when using this reconciliation to explain historical performance during questioning. [A17, A18, C-R5]

## 4. Superb earns ₹4,653, Good ₹2,524 and Fair ₹716 before channel costs

All three grades make positive contribution before marketing at the website return rates, but the amounts available to fund a promise differ sharply. Superb retains ₹4,653, Good ₹2,524 and Fair ₹716 after purchase, refurbishment, delivery, expected warranty and expected return costs. Fair's small surplus makes an apparently modest discount or service commitment economically material. These are grade-level expected contributions, not the profit of a phone after its channel and company cost allocations. [C-E2, C-E2N1, C-E2N2, C-E2N3, T2]

### Grade labels combine condition with different battery commitments

Superb looks almost new and requires at least 85% battery health in the case definition. Good allows light marks and requires at least 80%. Fair has visible wear but must work fully; the case does not supply an initial numerical Fair battery floor. We preserve that absence instead of assigning an invented percentage. B2 later raises the leaving-lab promise for Good and Fair to at least 85%, while Superb's existing threshold remains. B1 provides the own-lab measurement and report. The appearance label, measured battery and functional state therefore need distinct treatment even when a listing presents them together. [C-CO5, C-E6B1, C-E6B2, C-E5a]

Table R04-01. Grade definitions, required proof and the economic question each creates.

| Grade | Current case promise | Proof issue to retain | Economic question | Source |
|---|---|---|---|---|
| Superb | Almost-new appearance; battery at least 85% | Use own-lab reading; avoid prohibited like-new advertising wording | How much valuable supply can the plan obtain | [C-CO5, C-E5a, C-E5b, C-E4b] |
| Good | Light marks; battery at least 80% | November sample found below-listing readings | Can price uplift fund replacement and proof | [C-CO5, C-E4c, C-E6B2] |
| Fair | Visible wear; fully working | No invented current battery percentage | Can a low price absorb the common promise | [C-CO5, C-K3, C-E6B2] |

The distinction between a case grade definition and approved advertising is material for Superb. The background describes its appearance as almost new, while Exhibit 5 prohibits using like new or as good as new. We can use the supplied grade definition analytically without adopting the forbidden phrase as launch copy. The report should describe actual condition with photographs and accurate marks, rather than converting an internal category into an unconditional equivalence with a new device. This is an example of why numeric grading and claims compliance need separate reviews. A high contribution does not relax the communication rules. [C-CO5, C-E5a, C-E5b, C-E6B1]

### Rebuild one phone from selling price to expected contribution

For Superb, begin with ₹24,000 selling price. Deduct ₹17,800 paid to the wholesale trader, leaving ₹6,200. Testing and repair cost ₹800, leaving ₹5,400, and packing, delivery and payment cost ₹600, leaving ₹4,800 before expected warranty and returns. Warranty costs 3% × ₹2,500 = ₹75 per sold phone. Website returns cost 4% × ₹1,800 = ₹72. The final expected contribution is ₹4,800 − ₹75 − ₹72 = ₹4,653. Every deduction belongs to the same unit basis: one sold phone, with uncertain later expenses represented by their expected cost. [C-E2, C-E2N1, C-E2N2, T2]

For Good, ₹16,000 less ₹11,600 purchase cost leaves ₹4,400. Lab testing and repair of ₹1,000 reduces that to ₹3,400, and the common ₹600 delivery and payment layer leaves ₹2,800. Warranty cost is 6% × ₹2,500 = ₹150; website return expense is 7% × ₹1,800 = ₹126. The result is ₹2,524. The higher lab cost than Superb is explicitly supplied; we do not infer that a lower selling price should imply a cheaper repair process. This grade illustrates why a price comparison alone cannot describe the resources required to deliver a refurbished phone. [C-E2, C-E2N1, C-E2N2, T2]

For Fair, ₹10,000 less ₹7,000 purchase cost leaves ₹3,000. Lab cost of ₹1,200 and packing, delivery and payment of ₹600 leave ₹1,200 before expected service. Warranty costs 10% × ₹2,500 = ₹250 and returns cost 13% × ₹1,800 = ₹234. That leaves ₹716. Although the purchase price is the lowest, Fair carries the highest repair cost and highest expected service cost in the exhibits. The remaining amount must still cover any channel charge, report, battery intervention and contribution towards company fixed costs. This is the financial reason to resist treating Fair volume as equivalent to Good or Superb volume. [C-E2, C-E2N1, C-E2N2, C-E2N3, T2]

Table R04-02. Cost intensity explains why lower purchase-price share does not guarantee a better margin. Percentages are derived from Exhibit 2 and rounded only for this comparison.

| Grade | Trader cost as share of selling price | Lab cost as share of selling price | Surplus before expected service | Contribution as share of price | Source |
|---|---:|---:|---:|---:|---|
| Superb | 74.2% | 3.3% | ₹4,800 | 19.4% | [C-E2, T2] |
| Good | 72.5% | 6.3% | ₹2,800 | 15.8% | [C-E2, T2] |
| Fair | 70.0% | 12.0% | ₹1,200 | 7.2% | [C-E2, T2] |

This cost-intensity comparison is a warning against a simple procurement argument. Fair's acquisition price consumes a smaller share of revenue, yet lab and expected service costs consume more of the remaining amount. A proposal to grow Fair must therefore demonstrate where additional contribution will come from after all these costs. The case's new budget phone at ₹10,000 adds a customer-choice challenge, but it supplies no licence to cut Tikau's refurbishment cost or assume customers accept a weaker warranty. We retain the prescribed package and evaluate its consequences, even when the customer price corridor makes those consequences uncomfortable. [C-K3, C-E2, C-E6A, C-F12]

### Expected service burden is disproportionately large for Fair

Table R04-03. Compare expected service expense with the margin available to absorb it.

| Grade | Warranty plus website returns | Share of pre-service surplus | Expense divided by final contribution | Interpretation | Source |
|---|---:|---:|---:|---|---|
| Superb | ₹147 | 3.1% | 3.2% | Service burden is small against its unit surplus | [C-E2, T2] |
| Good | ₹276 | 9.9% | 10.9% | Better proof must still justify its cost | [C-E2, T2] |
| Fair | ₹484 | 40.3% | 67.6% | Service consumes a large share before channel costs | [C-E2, T2] |

The last column of ratios is not a claim rate or customer dissatisfaction measure. For Fair, ₹484 / ₹716 gives 67.6%, meaning that expected service expense is large relative to the contribution left after that expense. The claim probability remains the case's 10% and the website return probability remains 13%. Mixing these ratios would turn a cost comparison into a false behavioural claim. The more useful management reading is that a relatively small increase in repair or service expense consumes a much larger fraction of Fair's contribution than Superb's. That sensitivity helps explain the recommendation's emphasis on Good rather than an unrestricted Fair-volume strategy. [C-E2, C-E2N1, C-E2N2, C-E1C, T2]

The ₹1,800 return charge is already a composite allowance for delivery, retesting, repacking and reduced resale value. It is not simply courier expense, and the case explicitly treats the sale as recovered on resale. An analyst must not deduct the full selling price again or append another invented markdown allowance. Likewise, the ₹2,500 warranty cost includes parts, labour and courier. The observed repeat-visit rate identifies service friction, but the case supplies no instruction to multiply that ₹2,500 again by a repeat-visit factor. We discuss the service problem without silently converting it into additional unpriced expense. [C-E2N1, C-E2N2, C-E4d]

### Channel returns alter grade contribution before channel charges

Website-grade rates apply to ads, MegaKart and referrals. Creators use 1.5 times those rates and stores half, while warranty remains common by grade. A lower-return store Superb therefore saves ₹36 relative to website returns; a store Good saves ₹63 and Fair ₹117. Creator orders incur equal increases relative to the website. These amounts are simply the change in expected return expense: half the relevant website rate multiplied by ₹1,800. They say nothing about store rent, creator fees, commission or referral coupons, which enter afterward. [C-E2N4, C-E3N1, C-E3N2, C-E3N3, C-E3N4, C-E3N5, T3]

Table R04-04. Incremental return cost compared with the website baseline, before other channel charges.

| Grade | Store expected return expense | Website expected return expense | Creator expected return expense | Store saving or creator excess versus website | Source |
|---|---:|---:|---:|---:|---|
| Superb | ₹36 | ₹72 | ₹108 | ₹36 | [C-E2, C-E3N3, C-E3N4] |
| Good | ₹63 | ₹126 | ₹189 | ₹63 | [C-E2, C-E3N3, C-E3N4] |
| Fair | ₹117 | ₹234 | ₹351 | ₹117 | [C-E2, C-E3N3, C-E3N4] |

Subtracting those expenses from the same pre-return amount gives store contributions of ₹4,689, ₹2,587 and ₹833; website contributions of ₹4,653, ₹2,524 and ₹716; and creator contributions of ₹4,617, ₹2,461 and ₹599. The differences matter most proportionately for Fair. Even so, lower returns alone cannot establish the best channel because store fixed spend must be paid. Conversely, creators' higher returns do not prove the channel should be closed because its supplied mix and existing spending still produce positive channel contribution. Section 5 carries that complete comparison; here we preserve the correct sequence from grade economics to channel economics. [T3, T4, C-E3N7]

### A bounded cost tolerance is useful for diagnosing fragility

Table R04-05. Unit-level diagnostic stress, holding price, volume and every other input fixed. These are arithmetic comparisons, not additional Q1 levers or forecasts.

| Grade | Baseline website contribution | After ₹100 extra purchase or repair cost | Fraction of contribution consumed by ₹100 | Maximum pure price reduction before unit contribution reaches zero | Source |
|---|---:|---:|---:|---:|---|
| Superb | ₹4,653 | ₹4,553 | 2.1% | ₹4,653 | [C-E2, T2] |
| Good | ₹2,524 | ₹2,424 | 4.0% | ₹2,524 | [C-E2, T2] |
| Fair | ₹716 | ₹616 | 14.0% | ₹716 | [C-E2, T2] |

The final column is deliberately narrow. It holds every expense fixed and excludes channel costs, so it cannot be used as a safe-discount recommendation. A phone reaching zero before channel costs would still fail to support channel fixed spending and company costs. In commission channels, a price change also changes the commission deduction, while A changes demand and mix as well. The diagnostic shows relative fragility and nothing more. That is why the option screen uses complete packages rather than replacing A's defined price effect with a convenient custom discount derived from this table. [C-E3N2, C-E6A, C-F12]

### The chosen promise redistributes contribution across grades

B1 and B2 together increase Superb's website contribution to ₹5,499.68, Good's to ₹2,699.44 and reduce Fair's to ₹163.96. The combined per-grade bridge separates price, battery expense, report expense, warranty change and return saving. Superb gains ₹960 price, pays ₹120 report and ₹25 additional expected warranty, and saves ₹31.68 of returns, for a ₹846.68 increase. Good gains ₹640 price, pays ₹400 expected battery and ₹120 report, keeps the same expected warranty and saves ₹55.44 returns, for a ₹175.44 increase. Fair receives no price rise, pays ₹560 expected battery and ₹120 report, saves ₹25 warranty and ₹102.96 returns, for a ₹552.04 decline. [C-E6B1, C-E6B2, C-E6H2, T11]

Table R04-06. Incremental website contribution from the complete B1/B2 promise, ₹ per phone.

| Grade | Price benefit | Expected battery expense | Report expense | Warranty effect on contribution | Return saving | Net change | Source |
|---|---:|---:|---:|---:|---:|---:|---|
| Superb | +960 | 0 | −120 | −25 | +31.68 | +846.68 | [C-E6B1, C-E6B2, C-E6H2, T11] |
| Good | +640 | −400 | −120 | 0 | +55.44 | +175.44 | [C-E6B1, C-E6B2, C-E6H2, T11] |
| Fair | 0 | −560 | −120 | +25 | +102.96 | −552.04 | [C-E6B1, C-E6B2, C-E6H2, T11] |

This bridge explains why the report cannot be justified solely by the return cost it saves on every grade. B1 is a complete package with proof and demand effects, and its value must be assessed at plan level. Similarly, B2's battery expense differs by replacement share and grade. A 40% Good replacement share at ₹1,000 gives ₹400 expected cost per delivered Good phone; 70% Fair at ₹800 gives ₹560. Charging the replacement price to every phone overstates expense, while charging only a portion of the percentage again understates it. The uncertainty is the replacement share, which later sensitivity tests vary explicitly. [C-E6B1, C-E6B2, T24]

Table R04-07. Marketplace grade contribution after commission but before fixed company costs, demonstrating why grade economics cannot be copied unchanged across channels.

| Grade | Current contribution after 12% commission | B1/B2 contribution after changed commission | Change | Decision implication | Source |
|---|---:|---:|---:|---|---|
| Superb | ₹1,773 | ₹2,504.48 | +₹731.48 | Price benefit is partly shared through commission | [C-E3N2, A11, T11] |
| Good | ₹604 | ₹702.64 | +₹98.64 | Positive but much less than direct grade contribution | [C-E3N2, A11, T11] |
| Fair | −₹484 | −₹1,036.04 | −₹552.04 | A profitable channel average can include a loss-making grade | [C-E3N2, C-E6B2, T11] |

The marketplace comparison is not a request to remove Fair or redesign channel mix in Q1. Exhibit 6 prescribes which mixes change, and the recommendation must retain those rules. It does, however, make the trade-off visible: the plan succeeds as a portfolio while some delivered grade-channel cells remain unattractive. The Fair warranty and battery promise is still applied because B2 is indivisible. A claim that the recommendation makes every sale profitable would therefore be false even before allocating company fixed costs. The correct statement is that the complete allowed plan reaches base March EBITDA break-even and the required return level. [C-F12, C-E6H2, T15]

The strongest competing interpretation favours concentrating entirely on Superb because it has the highest unit contribution. Its weakness is the separate wholesale cap. The plan already encounters that cap, and the case does not permit an unlimited shift from other grades into Superb supply. Good offers a larger supplied volume and fits the chosen family-buyer need, while Fair remains part of the complete portfolio. These are reasons to choose a primary segment and explain the mix, not to claim that segment preferences establish exact future grade demand. The customer-to-grade associations are broad and the channel mixes remain the quantitative basis. [C-E4b, C-E1C, C-E3, C-E6H4]

For the viva, the most reliable starting point is the expected-cost equation itself. Write selling price, trader payment, lab cost and fulfilment cost first, then show warranty probability times claim cost and return probability times return cost. Only after establishing that grade result should the speaker add the channel-specific deductions. This sequence makes an omitted expense easier to identify and prevents the same service cost from appearing twice. [C-E2N1, C-E2N2, C-E2N3, C-R5]

This section supports the Economics slide and A1's per-phone working, with the B1/B2 bridge feeding A2. Its limitation is the expected-cost structure: supplied averages do not reveal distributions of repair severity, model-level battery measurement error or individual failure timing. A single phone may cost more or less than the expected allowance. The recommended claim nevertheless must be true for that phone, so commercial averages fund the programme while unit-linked evidence governs sale permission. Keeping these two levels separate is necessary to defend both the financial model and the launch promise. [C-E2, C-E5a, C-E5f, C-S3]


## 5. Channels: referrals earn ₹2,648 an order, paid ads lose ₹81 and the growth dashboard hides the costs that change the ranking

**Answer.** Referrals produce the strongest contribution per order after the channel costs specified in the case, while performance ads already lose money before the company fixed-cost layer. MegaKart's reported acquisition cost of zero excludes a commission that absorbs most of its phone contribution. The appropriate comparison therefore combines grade mix, channel-specific returns and every channel charge; it cannot be made from the growth dashboard's last column alone. [C-E3, C-E3N2 to C-E3N7, T4]

Tikau has several distinct distribution economics inside the same business. A Superb phone sold through a store has the same selling price, trader cost, lab cost and warranty expectation as a Superb phone sold through a creator, but its return expectation differs. A MegaKart sale introduces another distinction because the marketplace keeps a share of the selling price. A referral sale uses a coupon. Treating these transactions as if the same contribution number reached the company would hide the main diagnosis requested by Sana. The calculation must preserve the sale's grade and originating channel until all variable charges have been deducted. [C-Q1, C-E2, C-E3N2 to C-E3N5]

The first reconstruction connects order counts to the grades that generate contribution. This is an analytical quantity ledger, not an assumption that the customer segments in the survey exactly match these grade shares.

Table R05-01. Channel-grade quantities and the cost rule attached to each cell. Quantities are monthly case averages calculated as orders multiplied by grade share. [C-E3, C-E3N1 to C-E3N5]

| Channel | Superb calculation | Good calculation | Fair calculation | Rule carried into all three cells |
|---|---|---|---|---|
| Performance ads | 2,600 × 20% = 520 | 2,600 × 40% = 1,040 | 2,600 × 40% = 1,040 | Website returns; ₹60 lakh fixed spend |
| MegaKart | 2,000 × 10% = 200 | 2,000 × 45% = 900 | 2,000 × 45% = 900 | Website returns; 12% selling-price commission |
| Creators | 900 × 40% = 360 | 900 × 50% = 450 | 900 × 10% = 90 | Return rates multiplied by 1.5; ₹18 lakh fixed |
| Stores | 1,000 × 45% = 450 | 1,000 × 45% = 450 | 1,000 × 10% = 100 | Return rates multiplied by 0.5; ₹21 lakh fixed |
| Referrals | 700 × 35% = 245 | 700 × 50% = 350 | 700 × 15% = 105 | Website returns; ₹350 coupon per order |
| Check across channels | 1,775 | 3,190 | 2,235 | Total 7,200; fixed spend ₹99 lakh |

The ledger separates two decisions often confused in a channel discussion. One is how much contribution the current mix produces. The other is whether Tikau could deliberately change that mix without changing demand. The case supplies the first and specifies particular mix changes under the price-push option; it does not give an unrestricted ability to redirect buyers into whichever grade appears most profitable. Current mix therefore describes the baseline rather than a menu of freely selectable transactions. [C-E3, C-E6A, C-F12]

For performance ads, the three grade contributions use website return rates: ₹4,653 for Superb, ₹2,524 for Good and ₹716 for Fair. Multiplying by the quantities above gives ₹24,19,560, ₹26,24,960 and ₹7,44,640, respectively. Their sum is ₹57,89,160. After the ₹60,00,000 monthly spend, this channel contributes minus ₹2,10,840, or minus ₹81.0923 per order. Thus the loss does not arise because every advertised phone has a negative unit contribution. It arises because the mix-weighted pool does not recover the channel's existing fixed acquisition spend. [C-E2, C-E3, T2, T4]

That distinction matters to the proposed response. A profitable additional phone, if it could be supplied without another expense, would add contribution. It would not make the entire advertising operation profitable merely by existing. Conversely, a negative average after fixed spend is not evidence that cancelling the channel saves every rupee of that average loss. Cancellation changes both the contribution pool and its associated spending, and its effect depends on avoidability and replacement demand. Exhibit 6 does not authorize cancelling the baseline campaign or reallocating its spend during the assessed quarter. Any such change would require an explicitly separate analysis after March. [C-E3, C-E6H3, C-F12, A02]

Creators require the same multiplication with different expected return expenses. Their Superb contribution is ₹4,617 because returns are 6% and cost ₹108 per sold phone. Good earns ₹2,461 because returns are 10.5% and cost ₹189. Fair earns ₹599 because returns are 19.5% and cost ₹351. Quantities of 360, 450 and 90 produce a phone-contribution pool of ₹28,23,480. Deducting the ₹18,00,000 creator fees leaves ₹10,23,480, or ₹1,137.20 per order. Stronger grade mix partly offsets the elevated return burden; the return multiplier alone cannot determine the channel ranking. [C-E2, C-E3, C-E3N3, T3, T4]

Stores use the lower return regime. Their Superb, Good and Fair contributions are ₹4,689, ₹2,587 and ₹833. The resulting phone pool is ₹33,57,500, from which ₹21,00,000 of store rent and staff expense is deducted. The balance is ₹12,57,500, or ₹1,257.50 per order, presented as ₹1,258. Store costs belong to the channel layer under the case definition even though rent and staff would usually be described as operating overhead. Reclassifying them into the separate company layer would preserve profit only if the original channel charge were removed; adding them again would double count them. [C-E3, C-E3N4, C-E3N7, C-CO4, T4]

Referrals have no fixed monthly charge in the exhibit. Their grade-weighted phone contribution is ₹20,98,565, and 700 coupons at ₹350 cost exactly ₹2,45,000. The remaining ₹18,53,565 gives ₹2,647.95 per order, presented as ₹2,648. The exact monthly coupon figure is ₹2.45 lakh. The inherited generated table's one-decimal display can show 2.4 because of its rounding convention; the working here retains 2.45 and uses the unrounded amount in every reconciliation. No economic difference follows from that display choice. [C-E3, C-E3N5, C-F8, T4]

Table R05-02. Recovery of fixed acquisition costs and the residual pool. The final column distinguishes the current full-channel result from marginal unit economics; all working uses exact rupees. [C-E2, C-E3, C-E3N7, T3, T4]

| Channel | Phone contribution arithmetic | Channel charge arithmetic | Residual and interpretation |
|---|---|---|---|
| Performance ads | 520 × 4,653 + 1,040 × 2,524 + 1,040 × 716 = ₹57,89,160 | ₹60,00,000 fixed | −₹2,10,840; insufficient recovery at current mix |
| Creators | 360 × 4,617 + 450 × 2,461 + 90 × 599 = ₹28,23,480 | ₹18,00,000 fixed | ₹10,23,480; mixed premium economics overcome high returns |
| Stores | 450 × 4,689 + 450 × 2,587 + 100 × 833 = ₹33,57,500 | ₹21,00,000 fixed | ₹12,57,500; lower returns and mix fund physical service |
| Referrals | 245 × 4,653 + 350 × 2,524 + 105 × 716 = ₹20,98,565 | 700 × ₹350 = ₹2,45,000 | ₹18,53,565; positive variable-cost channel without stated fixed spend |
| MegaKart | 200 × 4,653 + 900 × 2,524 + 900 × 716 = ₹38,46,600 | 12% × ₹2,82,00,000 = ₹33,84,000 | ₹4,62,600; a large phone pool mostly transferred as commission |

MegaKart's calculation deserves its own grade-level check because the zero on the dashboard can look attractive before any multiplication is done. Average revenue per order is 10% × ₹24,000 plus 45% × ₹16,000 plus 45% × ₹10,000, or ₹14,100. A 12% fee is therefore ₹1,692 per order. The mix-weighted phone contribution before this fee is ₹1,923.30, leaving ₹231.30. The fee is charged on the selling price, not on the margin and not on the channel's eventual profitability. A thin grade can therefore become negative after commission while the channel as a whole remains positive. [C-E3, C-E3N2, T4]

Table R05-03. Marketplace contribution remaining after the revenue-share charge. This isolates a variable charge before any comparison with fixed acquisition spend. [C-E2, C-E3N2, T2, T4]

| MegaKart grade | Phone contribution ₹ | Commission calculation ₹ | Remaining per sold phone ₹ | Monthly pool at case mix |
|---|---:|---:|---:|---:|
| Superb | 4,653 | 24,000 × 12% = 2,880 | 1,773 | 200 × 1,773 = ₹3,54,600 |
| Good | 2,524 | 16,000 × 12% = 1,920 | 604 | 900 × 604 = ₹5,43,600 |
| Fair | 716 | 10,000 × 12% = 1,200 | −484 | 900 × −484 = −₹4,35,600 |
| Weighted order | 1,923.30 | 14,100 × 12% = 1,692 | 231.30 | Sum ₹4,62,600 |

The negative Fair cell makes the price-led interpretation particularly weak. A lower selling price reduces the commission a little, but the seller retains most of the price reduction as its own lost revenue. In this channel a ₹300 Fair-price cut reduces the fee by ₹36 and the contribution before other changes by ₹264. It does not become harmless because the platform fee moves in the same direction. Option A also changes the mix towards Fair and raises marketplace orders, so the complete option must be evaluated with all those effects and capacity rationing together. [C-E6A, C-E3N2, T11, T12]

A cost dashboard is still useful if its numerator is understood. It reports fixed spend plus coupons divided by orders. For ads this reproduces ₹60,00,000 ÷ 2,600 = ₹2,307.69, presented as ₹2,308. For creators, ₹18,00,000 ÷ 900 = ₹2,000; for stores, ₹21,00,000 ÷ 1,000 = ₹2,100; for referrals, coupons divided by orders give ₹350. The marketplace has neither fixed spend nor coupons in that numerator, hence zero. The arithmetic is consistent with the dashboard definition; the management error would be to interpret it as complete cost-to-serve or profitability. [C-E3, C-E3N6]

The corrected comparison shows why a cheap acquisition number can point to a weak economic result and why the headline that the dashboard ranks channels backwards needs precision. Referrals remain attractive under both measures. MegaKart moves from apparently free acquisition to low contribution after a material omitted fee. Store cost looks higher than creator cost, but the store contribution per order is also higher. The reversal is therefore specific to the omitted economics; it is not a claim that every pairwise ranking mechanically reverses. [C-E3N6, T4]

Table R05-04. Decisions supported by the two channel measures. Ranking here describes this baseline only and does not estimate an incremental return on new spending. [C-E3, C-E3N6, T4]

| Channel | Dashboard interpretation | More complete economic observation | Decision implication |
|---|---|---|---|
| MegaKart | ₹0 reported acquisition cost | ₹1,692 revenue-share cost and ₹231 contribution per order | Do not call it free distribution |
| Referrals | ₹350 coupon cost | ₹2,648 contribution per order after coupon | Preserve credibility and code discipline; no unsupported growth estimate |
| Creators | ₹2,000 fixed spend per order | ₹1,137 contribution after higher grade-specific returns | Set truthful expectations and advertisement labels |
| Stores | ₹2,100 fixed spend per order | ₹1,258 contribution with lower returns | Use physical proof without assuming a new store expansion lever |
| Ads | ₹2,308 fixed spend per order | −₹81 contribution per order at existing mix | Challenge more spending until the full plan funds its delivery |

The financial distinction between an average and a marginal decision also constrains how these findings should appear in the launch. A team may place more attention on referral explanations and store demonstrations without changing the assessed model's fixed spend. It may not book a saving from cutting ads while retaining all the baseline ad orders, nor assume that every extra referral arrives for one more coupon and no other constraint. Referral orders share the same lab and Superb supply limits as every other channel. Their high observed contribution does not exempt them from rationing or establish an unlimited supply of willing referrers. [C-E3N5, C-E4a, C-E4b, C-E6H4, A02]

Table R05-05. Accounting treatment for a change in channel activity. These controls prevent a descriptive ranking from becoming an unauthorized forecast. [C-E3N2 to C-E3N7, C-E6H3, C-F12, A02, A03]

| Item | Baseline treatment | Treatment if a delivered order changes | Unsupported shortcut |
|---|---|---|---|
| Ad fees | Fixed ₹60 lakh a month | Hold fixed in listed Q1 options | Assume the fee disappears for each rationed order |
| Store rent and staff | Fixed ₹21 lakh a month | Hold fixed despite delivery changes | Treat average cost per order as a variable saving |
| Creator fees | Fixed ₹18 lakh a month | Hold fixed; return rate remains channel-specific | Pay only for fulfilled orders without contractual basis |
| MegaKart fee | 12% of actual selling price | Recalculate on delivered grade and changed price | Apply old fee after a price increase |
| Referral coupon | ₹350 per delivered referral order | Varies with delivered referrals | Deduct coupons on lost demand |
| Company fixed costs | Separate ₹58 lakh monthly layer | Deduct after total channel contribution | Allocate it into channels and deduct it again |

The existing channel mix also explains why the same lever has different local consequences. B1's return reduction produces more expected savings on grades and channels that began with higher return rates, but its report costs the same amount for every delivered phone. B2 raises Superb and Good prices, while its expected battery burden falls on Good and Fair; MegaKart takes a share of the relevant price uplift. A puts extra weight on lower-margin Fair sales in two channels. B3 excludes MegaKart from its order uplift. These interactions are specified, so the model needs no outside channel benchmarks to establish their direction. [C-E6A, C-E6B1 to C-E6B3, C-E3N2]

Table R05-06. Lever interactions the channel diagnosis must retain. This is a causal map for later plan calculations, not a new set of demand assumptions. [C-E6A, C-E6B1 to C-E6B3, C-E6H2, C-E6H4]

| Lever | Ads and MegaKart | Creators | Stores | Referrals | Constraint to preserve |
|---|---|---|---|---|---|
| A | Specified order and mix change; Fair price falls in every channel | Fair price cut without stated order uplift | Same Fair-price effect | Same Fair-price effect | More demand does not create capacity |
| B1 | Report cost and return reduction | Same report cost; reduction on creator return base | Reduction on lower store return base | Coupon stays separate | Charge report on delivered phones only |
| B2 | Price changes; marketplace commission follows price | Grade economics change at creator return rates | Grade economics change at store return rates | Grade economics plus coupon | Battery and claim changes apply by grade |
| B3 | Ads uplift; no MegaKart uplift | Eligible order uplift | Eligible order uplift | Eligible order uplift | Requires B1 or B2 |
| Third shift | Potentially fewer lost orders | Same | Same | Same | Changes sellable capacity, not unit prices |

A credible counterargument is that the strongest referral and store results simply reflect self-selection. Customers arriving through personal advice may already be more confident; shoppers willing to visit a store may have needs different from online visitors. The case does not isolate causal channel effects from customer mix. That limitation prevents a claim that moving an identical customer from one channel to another would reproduce the observed difference. It does not prevent using the specified channel-grade rates in the competition model, because the case explicitly instructs that they govern calculations. Management should interpret the ranking as the economics of the supplied operating pattern, then validate mechanisms before expanding beyond it. [C-E1C, C-E3, C-E3N3, C-E3N4, C-F11]

The channel findings consequently support a disciplined communication choice and a restrained financial choice. Referrals can carry an explanation backed by a known customer, stores can show the phone and its record, and creators can explain the promise if the content is labelled correctly. The model still pays every baseline fixed charge, preserves each grade mix unless an option changes it, and follows the same rationing rule across channels. This preserves both the case's economics and the difference between a proposed marketing role and a quantified order effect. [C-E1A, C-E3, C-E5e, C-E6H4, A02]

The channel ledger should also preserve order attribution over time. A referral code identifies how an order enters the coupon calculation, while a creator or ad label identifies the return regime the case assigns. Reassigning an order after a return appears could make a weekly channel report look better without improving the company result. Proposed operating records should therefore retain the original order channel, grade at sale, delivered status and subsequent service event. This is a control recommendation, not evidence that Tikau currently changes attribution. It protects the denominator and allows the team to explain how the channel totals aggregate to the company figures. [C-E3N1 to C-E3N7, C-D2]

The dashboard's complete channel-cost measure still has a limited purpose. Adding commission to fixed spend and coupons repairs the omitted distribution charge, but the resulting number does not itself include trader cost, testing, packing or expected service expense. Those costs already sit in the phone contribution used beside it. A manager should compare the complete channel charge with the appropriate contribution pool rather than call the charge alone the entire economic cost of a sale. Keeping the two measures together avoids solving one omission by creating another ambiguous label. [C-E2N3, C-E3N6, C-E3N7, T4]

Exhibit for the deck: diagnosis slide channel panel, supported by the contribution and accounting detail in the economics appendix. Use ₹2,648 for referrals and ₹1,258 for stores; retain the exact coupon amount in rebuild working. [T4, C-F8]

## 6. The month: ₹179.2 lakh of phone contribution becomes −₹14.1 lakh after ₹33.8 lakh of MegaKart fees, ₹99 lakh of channel spend and ₹58 lakh of fixed costs

**Answer.** The baseline loses ₹14.1 lakh a month because its phone contribution does not cover the channel charges and the separate company fixed-cost layer. At unchanged spending, monthly contribution after marketing must rise from ₹43.9 lakh to at least ₹58.0 lakh to reach EBITDA zero. Grade mix, expected service expense and the distinction between fixed and variable charges explain that gap more usefully than revenue growth alone. [C-D1, C-CO4, T4, T5]

The company bridge starts after expected warranty and return costs have already been charged to individual phones. Summing the actual channel-specific grade contributions produces ₹179.15305 lakh. Deducting ₹33.84 lakh of marketplace commission, ₹99 lakh of fixed channel spend and the exact ₹2.45 lakh coupon charge leaves ₹43.86305 lakh after marketing. The further ₹58 lakh of company fixed costs yields minus ₹14.13695 lakh. This is the month the recommendation must improve, and it is also the operating baseline retained in January before any customer-facing changes begin. [C-E2N3, C-E3N7, C-CO4, C-E6H1, T5]

The ₹179.2 lakh number is a contribution pool, not gross revenue. The case's expected repair, packing and service costs have already reduced the selling prices before this pool is reached. Calling it gross revenue would overstate the margin available to pay channel charges. Similarly, calling ₹43.9 lakh EBITDA would omit company overhead. A waterfall makes these boundaries visible and gives the team a short reconstruction that can be performed without opening the entire model. [C-E2, C-E2N3, C-D1, T5]

Table R06-01. Accounting boundaries in the monthly bridge. Exact working is in lakh; one-decimal display follows the case rule. The control column explains which mistake each boundary prevents. [C-E2N3, C-E3N7, C-D1, T5]

| Boundary | Exact working | Display | Control |
|---|---|---|---|
| Phones before channel charges | Sum actual channel-grade contributions = 179.15305 | ₹179.2 lakh | Warranty and returns already included |
| After marketplace share | 179.15305 − 33.84 = 145.31305 | ₹145.3 lakh | Commission is not in the dashboard numerator |
| After fixed channel spend | 145.31305 − 99 = 46.31305 | ₹46.3 lakh | Advertising, creators and stores charged once |
| After referral coupons | 46.31305 − 2.45 = 43.86305 | ₹43.9 lakh | Exact coupon working avoids display drift |
| After company costs | 43.86305 − 58 = −14.13695 | −₹14.1 lakh | Company costs are a separate layer |
| Baseline growth money | No live new option = 0 | ₹0.0 lakh | Baseline contains no Q1 growth expense |

The grade pools reveal a different weakness from the channel ranking. At website rates, Superb contributes 1,775 × ₹4,653 = ₹82.59075 lakh, Good contributes 3,190 × ₹2,524 = ₹80.5156 lakh, and Fair contributes 2,235 × ₹716 = ₹16.0026 lakh. These figures are useful reference pools because they apply one consistent return regime. They sum to ₹179.10895 lakh, slightly below the actual ₹179.15305 lakh because stores and creators have different return rates. A report must identify that convention instead of pretending the reference grade table and the actual channel bridge are identical. [C-E2, C-E3, T2, T3, T5, T6]

The adjustment is small in this baseline because the lower expected store returns and higher creator returns partly offset. It remains conceptually necessary. Actual Superb phone contribution is ₹82.62315 lakh and actual Fair contribution ₹16.0143 lakh; actual Good contribution happens to equal the website-rate pool because the relevant store and creator quantities offset their opposite return adjustments. This coincidence does not authorize replacing channel-specific rates in another plan. Once volumes or mixes change, the offset can change as well. [C-E3, T3, independent-audit.json baseline cells]

Table R06-02. Grade pool reconciliation before channel charges. The difference is actual return-regime contribution less a uniform website-rate reference. [C-E2, C-E3N3, C-E3N4, T6, independent-audit.json baseline]

| Grade | Uniform website reference ₹ lakh | Actual channel-rate pool ₹ lakh | Adjustment ₹ lakh | Interpretation |
|---|---:|---:|---:|---|
| Superb | 82.59075 | 82.62315 | +0.03240 | Store benefit exceeds creator penalty |
| Good | 80.51560 | 80.51560 | 0 | Equal relevant store/creator quantities offset |
| Fair | 16.00260 | 16.01430 | +0.01170 | Lower store returns add a small net amount |
| Total | 179.10895 | 179.15305 | +0.04410 | Use actual pool in company bridge |

Superb and Good generate similar contribution pools despite very different volumes. Superb accounts for about one quarter of delivered phones while Good accounts for more than two fifths. Fair supplies almost one third of units but a much smaller share of the pre-channel contribution pool. That contrast does not justify removing Fair from the business within the case model; the offered options do not include deleting a grade. It does explain why a strategy that expands Fair-heavy demand should face a demanding profitability test. Unit volume is an incomplete measure of progress when contributions differ this much by grade. [C-E3, T2, T5, T6, C-F12]

It is also tempting to assign a fraction of the ₹99 lakh fixed channel spend to each grade and call the resulting number a grade profit. Such a calculation would depend on a chosen allocation rule, because the case provides channels' fixed spend rather than grade-specific acquisition fees. Allocating in proportion to units, revenue or contribution would give different grade results without changing total EBITDA. The report therefore uses grade pools before fixed channel cost and complete channel results after their known charges. This preserves a meaningful decomposition without inventing precision about which grade caused an existing rent or creator contract. [C-E3, C-E3N7, T4, T6]

Break-even can now be expressed in the same contribution language. With no new growth spending, a gain of ₹14.13695 lakh after marketing closes the baseline loss. Spread mechanically over 7,200 phones, that is ₹196.3465 per delivered phone. This is an arithmetic hurdle, not a proposed price increase or a forecast that customers will accept one. The case permits specific price changes under particular options, and any such option also changes costs, demand and capacity. The hurdle simply provides a common scale against which proposed solutions can be tested. [C-D1, C-E6A to C-E6H4, C-F12, T5]

Table R06-03. Different break-even questions and their correct denominators. These are diagnostic calculations holding the stated surrounding conditions fixed. [C-D1, C-CO4, T5, C-E6SH]

| Question | Arithmetic | Result | Use and limit |
|---|---|---|---|
| Baseline company gap | 58 − 43.86305 | ₹14.13695 lakh | Needed after marketing with no new growth cost |
| Gap per current delivered phone | ₹14,13,695 ÷ 7,200 | ₹196.35 | Illustrative average, not authorized price lever |
| Contribution required with live third shift | 58 + 9 | ₹67.0 lakh | Shift growth expense also needs funding |
| Recommended contribution cushion | 72.6049980833 − 67 | ₹5.6049980833 lakh | March forecast, not baseline surplus |
| Baseline to recommended operating change | 5.6049980833 − (−14.13695) | ₹19.7419480833 lakh | Monthly EBITDA improvement includes shift cost |

The company can cross the March threshold while the quarter remains worse than doing nothing. January setup costs arrive before the operating improvement, so a profitable March does not imply positive Q1 EBITDA or rapid recovery of every rupee spent. The recommended combination's March improvement is approximately ₹19.7 lakh relative to the baseline, but its Q1 EBITDA is minus ₹42.9 lakh versus minus ₹42.4 lakh without change. The difference is minus ₹0.5 lakh after presentation rounding. Those are different time frames and both belong in the decision. [C-E6H1, C-F15, T15, independent-audit.json canonical]

Several simple fixes look plausible if one examines only this monthly bridge. Each must be tested against what the case permits and what the capacity can deliver. More positive-contribution sales can help only if those sales can be supplied. Cutting a channel must consider the contribution lost with its demand. Eliminating all returns would remove only one part of the service burden, and a lower return rate is not a substitute for the required proof on listings. The baseline accounting identifies a gap; it does not establish that any isolated lever can close it. [C-E4a, C-E6H4, C-E5a to C-E5f, T5]

Table R06-04. Naive repairs to the monthly loss and the condition each overlooks. These calculations illustrate scale; they are not additional case options. [C-E2, C-E3, C-E4a, C-E4b, C-F12, T2, T5]

| Naive repair | Arithmetic or immediate attraction | Overlooked condition | Verdict for Q1 model |
|---|---|---|---|
| Sell more Superb phones | Gap ÷ ₹4,653 ≈ 304 extra phones | Only 225 Superb supply headroom; lab already full | Cannot insert unconstrained volume |
| Sell more Good phones | Gap ÷ ₹2,524 ≈ 560 extra phones | No grade supply cap, but lab has no spare sellable capacity | Capacity must be addressed |
| Sell more Fair phones | Gap ÷ ₹716 ≈ 1,974 extra phones | Very large volume requirement before channel cost | Price-led volume needs full option test |
| Remove all return expense | Saves at most baseline ₹10.4832 lakh | Still below ₹14.13695 lakh gap; not an offered lever | Does not alone reach EBITDA zero |
| Cancel ads and keep their orders | Avoids ₹60 lakh while retaining phone pool | Demand retention unsupported and cancellation outside listed levers | Invalid counterfactual |

A fair reading of the ad cancellation argument deserves more than a dismissal. If both all ad orders and their full fixed spend vanished, the baseline channel loss of ₹2.1084 lakh would disappear in a simple accounting subtraction. The resulting company would still lose about ₹12.02855 lakh, before considering replacement demand or operational consequences. This exercise shows that the ad channel's loss is real but is not the whole corporate loss. It also remains outside the assessed Q1 option set, so it cannot replace the canonical forecast. [C-E3, C-F12, T4, T5]

The annual reconciliation provides another guard against overstating the precision of these figures. Multiplying the reconstructed monthly EBITDA by twelve yields minus ₹169.6434 lakh, near the case's rounded minus ₹170 lakh over the historical year. Monthly gross selling prices similarly annualize to ₹139.188 crore, close to the case's ₹139 crore revenue figure under the stated revenue interpretation. The periods are not identical: channel averages are from August to October while the company history covers November to October. The small difference is consistent with rounded case averages and is disclosed, not corrected by adjusting a trader cost or a return rate. [C-CO3, C-E3, A17, A18, T5]

Table R06-05. What the service-cost pool can and cannot explain. Baseline values are expected monthly costs, not an attribution study of customer distrust. [C-E2N1, C-E2N2, C-D1, T5]

| Cost pool | Expected calculation | Diagnostic implication | Limit on interpretation |
|---|---|---|---|
| Warranty | 468.15 expected claims × ₹2,500 | ₹11.70375 lakh funds repair obligations | Not every claim is caused by misleading marketing |
| Returns | 582.4 expected returns × ₹1,800 | ₹10.4832 lakh includes stated resale consequences | Does not reverse original sale revenue |
| Combined | 11.70375 + 10.4832 | ₹22.18695 lakh of explicit service expense | Cannot call all of it avoidable distrust cost |
| Baseline loss | 58 − 43.86305 | ₹14.13695 lakh EBITDA deficit | Smaller than combined expense does not imply easy removal |
| If returns vanished only | −14.13695 + 10.4832 | −₹3.65375 lakh still lost | Pure hypothetical, not a promise |

The inherited shorthand for the combined service pool is a useful attention device only when its limits are clear. Claims and returns are costs the model recognizes, while customer distrust is an inferred mechanism supported by the survey and proof gaps. A customer may exercise a valid warranty despite accurate disclosure; a return may occur for reasons not identified in the case. No causal study allocates each rupee of this pool to a particular belief. The analysis therefore uses the explicit costs to fund decisions and uses customer evidence to explain why a proof-based response is credible, without relabelling the entire pool as waste. [C-E1A, C-E1B, C-E2N1, C-E2N2, C-E4c]

The monthly bridge is also an EBITDA construction rather than a cash balance. It follows the case's instruction to deduct growth money in the month spent, including setup, and it applies expected claim and return expense to sold phones. The case provides no receivables cycle, inventory financing schedule or timing distribution for individual warranty payments. A profitable March therefore demonstrates the specified earnings test; it cannot establish that the company has enough cash to fund every purchase or that all setup cash has been recovered. A real funding review would need those additional records, but inserting guessed working-capital days would violate the closed-data forecast. [C-D1, C-E2N1, C-E2N2, C-E6H1, C-E6H3, C-T2t, C-R1]

An analyst can preserve that distinction without weakening the recommendation. The board's growth envelope limits specified setup and monthly lever spending, while ordinary per-phone expenses reduce contribution outside that envelope. Unspent growth money is consequently not a forecast of bank cash. It is the arithmetic difference between the authorized envelope and counted growth items. Keeping those labels precise helps explain why a plan can meet the spending limit and still have negative Q1 EBITDA, or reach positive March EBITDA after paying substantial January setup. Neither result is contradictory once the period and expense definition are stated. [C-B7, C-E6H3, C-D1, C-F15, T15]

Exhibit for the deck: diagnosis slide monthly waterfall and grade-economics panel; economics appendix reconciles the website reference pool with the actual channel-rate pool and retains exact coupon working. [T4, T5, T6]

## 7. Returns run at 8.09%, about a third above the board's 6.0%, and claims plus returns cost ₹22.2 lakh a month

**Answer.** Baseline expected returns total 582.4 phones against 7,200 delivered, giving 8.09% when the case's channel-grade rules are applied. The board threshold would allow 432 returned phones at that same denominator, so the baseline needs 150.4 fewer expected returns before any volume change. Warranty claims add a separate service obligation, while slow repair and repeat visits expose a delivery risk that a longer warranty alone cannot solve. [C-D2, C-T3t, C-E2N1, C-E3N3, C-E3N4, C-E4d, T5]

Returns and claims are different events in the economic model. A return during the stated window incurs ₹1,800 because the phone must travel back, be tested and packed again, and be resold at a lower price. The case specifically says to treat the sale as recovered on resale and not reverse the original selling price. A warranty claim costs ₹2,500 on average in parts, labour and courier. Applying both expected costs does not require a claim that the same customer necessarily experiences both; they are separate expected expense categories supplied by the case. [C-E2N1, C-E2N2]

The weighted return rate cannot be calculated as the simple average of Superb, Good and Fair rates. It also cannot be the simple average of the five channel rates. Each cell contributes its quantity multiplied by the relevant grade rate and channel multiplier. For example, creator Good returns are 450 × 7% × 1.5 = 47.25, whereas store Good returns are 450 × 7% × 0.5 = 15.75. The equal Good quantities make the return difference particularly easy to inspect, but the company calculation retains all cells rather than generalizing from this pair. [C-E2, C-E3, C-E3N3, C-E3N4, independent-audit.json baseline]

Table R07-01. Expected returns by channel and grade, with the multiplication visible. These are modeled expected counts, so fractional phones are retained for aggregation. [C-E2, C-E3N1 to C-E3N5, independent-audit.json baseline cells]

| Channel | Superb returns | Good returns | Fair returns | Total and denominator |
|---|---|---|---|---|
| Performance ads | 520 × 4% = 20.8 | 1,040 × 7% = 72.8 | 1,040 × 13% = 135.2 | 228.8 / 2,600 = 8.80% |
| MegaKart | 200 × 4% = 8 | 900 × 7% = 63 | 900 × 13% = 117 | 188 / 2,000 = 9.40% |
| Creators | 360 × 6% = 21.6 | 450 × 10.5% = 47.25 | 90 × 19.5% = 17.55 | 86.4 / 900 = 9.60% |
| Stores | 450 × 2% = 9 | 450 × 3.5% = 15.75 | 100 × 6.5% = 6.5 | 31.25 / 1,000 = 3.125% |
| Referrals | 245 × 4% = 9.8 | 350 × 7% = 24.5 | 105 × 13% = 13.65 | 47.95 / 700 = 6.85% |
| Sum | 69.2 | 223.3 | 289.9 | 582.4 / 7,200 = 8.0888889% |

This distribution separates the highest rate from the largest burden. Creator Fair has the highest cell rate at 19.5%, yet its small quantity generates 17.55 expected returns. Ad Fair generates 135.2 expected returns at a lower 13% rate because it sells many more phones. MegaKart Fair adds another 117. Operational attention therefore needs both the severity of an individual cell and its volume. A rate-only heat map can identify poor experience but may misdirect resources if the economic and workload burden is concentrated elsewhere. [C-E2, C-E3, C-E3N3, R07-01]

The two Fair cells in ads and MegaKart together account for 252.2 expected returns. That is approximately 43.3% of the company total, calculated as 252.2 ÷ 582.4. This concentration helps explain why a Fair-heavy volume push is risky even when its order projection is large. It does not justify rewriting A's specified return rates or assuming that a targeted repair programme would eliminate these events. The case provides no cause-level breakdown of Fair returns and no separate approved intervention for those two cells. [C-E6A, C-F12, R07-01]

Table R07-02. Rate, count and value perspectives on the baseline return burden. The comparison avoids mistaking a high rate for the largest total expense. [C-E2N2, C-E3, independent-audit.json baseline]

| Diagnostic lens | Working | Finding | Decision consequence |
|---|---|---|---|
| Highest cell return rate | Creator Fair: 13% × 1.5 | 19.5% on 90 phones | Expectations and disclosure need attention |
| Largest cell return count | Ad Fair: 1,040 × 13% | 135.2 expected returns | Volume concentration drives workload |
| Fair share of all returns | 289.9 ÷ 582.4 | About 49.8% | Fair contributes disproportionate return volume |
| Ad/MegaKart Fair concentration | (135.2 + 117) ÷ 582.4 | About 43.3% | Test price push with mix and capacity together |
| Return expense | 582.4 × ₹1,800 | ₹10.4832 lakh | Deduct expense once, not sale revenue |

The company limit is a ratio, so it must be re-evaluated whenever delivered volume changes. At baseline, 6% × 7,200 equals 432. The gap is 582.4 minus 432, or 150.4 expected returned phones. Relative to baseline returns, the required reduction is 150.4 ÷ 582.4 = 25.8242%, which differs from the 2.0889 percentage-point gap between the two rates. Saying the baseline is about one third above the threshold refers to 8.0889% ÷ 6% minus one, approximately 34.8%; it does not mean that a one-third reduction is required to reach the threshold. [C-T3t, C-D2, T5]

The recommended plan changes both the numerators within cells and the delivered mix. B1 and B2 leave 0.7 × 0.8 = 0.56 of each channel's former return rate, a 44% reduction in those cell rates. Superb rationing slightly changes the company mix, so the final weighted company rate must come from the delivered cells. It is 4.5496037%, not an assertion that every phone now has that individual return probability. At 8,327.72 delivered phones, the board's permitted expected return count is about 499.66; the recommendation has about 378.88 expected returns. [C-E6B1, C-E6B2, C-E6H4, T15, T22, independent-audit.json recommendation]

Table R07-03. Ratio discipline for the board test. Both rows use delivered phones as the denominator; the final row is a warning against an invalid cross-period comparison. [C-D2, C-T3t, T5, T15, independent-audit.json recommendation]

| Case | Delivered denominator | Expected returns | 6% allowance | Correct interpretation |
|---|---:|---:|---:|---|
| Baseline | 7,200 | 582.4 | 432 | Fails by 150.4 expected returns |
| Recommended March | 8,327.72 | About 378.88 | About 499.66 | Passes with about 120.78 expected-return headroom |
| Wrong shortcut | Baseline 7,200 used for plan | Plan numerator | 432 | Mixes different populations and overstates required reduction |

No part of this calculation measures the number of distinct dissatisfied customers. A returned phone may have generated dissatisfaction, but the case defines a phone-based metric, not a customer sentiment score. Warranty claims may overlap with return events or arise later; no unique-customer linkage is supplied. Combining return counts and warranty claims into a total number of unhappy people would count unidentified overlap and mix different periods. The report can sum expected expense because the case supplies separate cost rules, while keeping the event counts and customer interpretation distinct. [C-D2, C-E2N1, C-E2N2]

Warranty rates are grade-specific and do not change by channel in the baseline. Superb produces 1,775 × 3% = 53.25 expected claims, Good 3,190 × 6% = 191.4, and Fair 2,235 × 10% = 223.5. The sum, 468.15, costs ₹11,70,375 at ₹2,500 each. Unlike return rates, a store's warranty rate is not halved and a creator's is not multiplied by 1.5. Carrying those channel multipliers into warranty costs would exaggerate the differences between channels and break the case instructions. [C-E2, C-E2N1, C-E3N3, C-E3N4, T5]

Table R07-04. Warranty workload and the distinct unit cost of each grade's expectation. No channel multiplier is applied to claims. [C-E2, C-E2N1, independent-audit.json baseline]

| Grade | Quantity and claim-rate working | Expected claims | Expense working | Expected expense per phone |
|---|---|---:|---|---:|
| Superb | 1,775 × 3% | 53.25 | 53.25 × ₹2,500 = ₹1,33,125 | ₹75 |
| Good | 3,190 × 6% | 191.4 | 191.4 × ₹2,500 = ₹4,78,500 | ₹150 |
| Fair | 2,235 × 10% | 223.5 | 223.5 × ₹2,500 = ₹5,58,750 | ₹250 |
| Company | Sum grade claims | 468.15 | ₹11,70,375 = ₹11.70375 lakh | Depends on delivered mix |

The service experience gives this expense a customer meaning. Repairs currently take nine days on average and 38% of claims need a second visit. A buyer acquiring a phone for a parent or child wants to know who will fix it, according to the case's family-buyer description. A twelve-month warranty extends the period of responsibility, but it does not by itself shorten repair time or eliminate repeat visits. If the launch promises reassurance without making service ownership and terms visible, it may draw attention to the same uncertainty the customer was trying to avoid. This is an interpretation of the case, not an additional surveyed family-buyer preference. [C-E4d, C-E1C, C-E6B2]

The second-visit statistic must also be handled carefully in cost working. Multiplying 468.15 expected claims by 38% gives about 177.897 claim episodes associated with a second visit if the historical rate applies to the modeled monthly claim volume. The case does not supply a separate price for that visit, its timing or its incremental labour burden beyond the average ₹2,500 claim cost. Adding another full claim cost for these visits would therefore introduce an unsupported expense. The number can indicate service complexity and follow-up demand, but it cannot create a second warranty-cost line. [C-E4d, C-E2N1, T5]

Table R07-05. Service promises, operational evidence and financial limits. Proposed controls in the final column are management actions, not additional modeled cost reductions. [C-E4d, C-E2N1, C-E6B2, C-E5a, C-E1C]

| Service issue | Case evidence | Permitted inference | Proposed control and boundary |
|---|---|---|---|
| Repair duration | Nine-day average | Customers may lose use during repair | Record receipt, diagnosis and completion dates; no invented service-level achievement |
| Repeat visits | 38% of claims | First repair does not always end service | Track repeat-visit cause; no extra ₹2,500 automatically charged |
| Warranty length | Current six months; B2 twelve months | Responsibility extends under B2 | Publish scope and claim route; do not promise instant repair |
| Family-buyer fit | Wants to know who will fix it | Named ownership supports the chosen positioning | Make service contact visible; validate comprehension |
| Battery promise | Own-lab reading required | Warranty alone cannot establish condition | Release only with attributable reading and applicable terms |

A competing interpretation is that reducing returns should be the sole objective because the board names a maximum rate. The economics rejects that narrow optimization. A plan can achieve a low return rate and still lose money through report cost, batteries, growth spend or constrained volume. Conversely, attractive EBITDA does not excuse a return rate above the board limit. The independent screen consequently treats the tests as separate requirements, while this section explains the underlying operational variables. The target is compliant delivery at sustainable contribution, not a single favorable ratio. [C-T1t to C-T4t, T12, independent-audit.json limitations]

The forecast is also an expected-value model rather than a promise about the number returned in a particular week. Observed weekly returns can fluctuate, refer to earlier deliveries and be delayed by the return window. An operating dashboard should define cohorts consistently before comparing them with the March case result. That clarification does not alter the case's monthly board definition, and no unsupplied delay distribution is inserted into the model. It makes the monitoring proposal interpretable when a real operations team begins recording events. [C-E2, C-D2, C-Q5, A13]

Warranty interpretation requires another time distinction. The expected claim rate in the per-phone model is attached to sales under the relevant option; it is not a schedule showing the month in which each physical repair occurs. When the warranty term changes, the model uses B2's specified claim rates, including the Superb increase and Fair decrease, without inventing a second stream for later months. The case supplies those expected economics directly. An operating team should retain sale cohorts and service dates so future experience can be compared with the obligation, but that recordkeeping proposal adds no new forecast expense. [C-E2N1, C-E6B2, C-E6H2, T11]

This distinction also prevents misleading early validation. A few weeks of returns can provide evidence about an initial return window, while a few weeks of warranty claims cannot establish the full experience of a twelve-month promise. Reporting a low early claim count as proof that the longer term costs less would ignore incomplete exposure. The assessment forecast remains the case's expected-rate calculation, and the proposed monitoring should acknowledge that mature warranty evidence arrives later. Service quality can still be watched through turnaround and repeat visits before a full cohort matures. [C-E2, C-E4d, C-E6B2, C-Q5]

For the board discussion, the most useful service explanation therefore pairs the economic provision with the actual obligation. The expected cost funds the modeled sale; the named repair route explains how responsibility is exercised. Neither an average claim rate nor a low return percentage tells a buyer which person to contact when the device fails. The launch should make that route understandable while retaining the narrower financial and statistical meanings of the measured rates. [C-E1C, C-E2N1, C-E4d, C-Q4]

Exhibit for the deck: diagnosis slide return heat map and service-risk annotation, with the weighted numerator and denominator in the economics appendix. Keep claims, returns and repeat visits separate in both labels and working. [C-E2N1, C-E2N2, C-E4d, T5]

## 8. Demand or trust: 3.1 lakh people opened a phone page in October and 91.6% did not add to cart, while several stated barriers concern proof

**Answer.** Tikau already attracts substantial website attention, yet only a small fraction of product-page visitors progress to an order. The visitor research points more strongly to battery, condition and warranty uncertainty than to price, although its multiple-answer design cannot establish mutually exclusive causes or realized uplift. The useful diagnosis is a trust and delivery problem inside existing demand, with capacity limiting how much successful conversion can become fulfilled sales. [C-E1A, C-E1B, C-E1D, C-E4a, C-Q1]

The funnel begins with 9,60,000 website visits, then 3,10,000 product-page openers, 26,000 cart additions and 4,200 orders. These stages describe a website population. Store and MegaKart orders are explicitly excluded, so dividing all 7,200 company orders by website visits would misstate conversion. The case's channel table independently reconciles website orders as 2,600 from performance ads plus 900 from creators plus 700 referrals, equalling 4,200. That reconciliation is useful because it prevents a persuasive-looking funnel from silently changing its population between stages. [C-E1D, C-E3]

Stage conversion must preserve the relevant predecessor. Product-page opening is 3,10,000 ÷ 9,60,000 = 32.2917%. Cart addition from a product page is 26,000 ÷ 3,10,000 = 8.3871%. Order completion from cart is 4,200 ÷ 26,000 = 16.1538%. Product-page-to-order conversion is 4,200 ÷ 3,10,000 = 1.3548%, while visit-to-order conversion is 4,200 ÷ 9,60,000 = 0.4375%. These rates answer different questions and should not share an unlabeled conversion heading. [C-E1D, T7]

Table R08-01. Funnel losses with explicit denominators and stage meaning. All arithmetic concerns the October website funnel. [C-E1D, T7]

| Transition | Calculation | Rate | Did not advance | What the stage can reveal |
|---|---|---:|---:|---|
| Visit to product page | 3,10,000 / 9,60,000 | 32.2917% | 6,50,000 | Navigation or relevance questions |
| Product page to cart | 26,000 / 3,10,000 | 8.3871% | 2,84,000 | Product and offer evaluation |
| Cart to order | 4,200 / 26,000 | 16.1538% | 21,800 | Checkout and final commitment |
| Product page to order | 4,200 / 3,10,000 | 1.3548% | 3,05,800 | Combined post-page completion |
| Visit to order | 4,200 / 9,60,000 | 0.4375% | 9,55,800 | Full website progression only |

The often-used 91.6% leakage figure comes from one minus 26,000 ÷ 3,10,000. It describes people who opened a product page but did not add to cart under the exhibit's aggregate counts. It does not establish that every one of those people abandoned the site because of distrust. Some may have been comparing models, returning later or looking for information; the case does not enumerate such behaviors. The survey supplies the case's direct evidence on stated reasons, and even that evidence belongs to a particular sample of product-page leavers rather than to every visitor. [C-E1D, C-E1A, T7]

The largest absolute stage loss is before product-page opening, whereas the most directly relevant proof problem is visible among those who examined a product and left. Those observations can coexist. A navigation diagnosis might investigate the first loss, but the available decision levers focus on price, evidence, warranty, campaign, sourcing and capacity. The report should not claim that a report-first page solves every site-navigation issue or that a redesigned checkout has a quantified effect. Neither proposition is supplied by the case. [C-E1D, C-E6A to C-E6C, C-F11, C-F12]

The visitor survey helps choose what the product page should explain. Battery longevity concerns appear at 46%, inability to judge condition from photos at 41%, a short warranty at 31%, wanting to see the phone at 28%, insufficient price advantage at 24%, stolen or locked status at 22%, and previous-owner data at 12%. These are statements from 1,500 people who opened a product page and left, with multiple responses allowed. They rank reported barriers within that sample; they do not divide the sample into seven nonoverlapping groups. [C-E1A, C-F9]

Table R08-02. Reported barrier, operational response and evidence limit. Indicative response counts multiply the stated share by the sample of 1,500 and are counts of selections, not unique customer segments. [C-E1A, C-E6B1, C-E6B2, C-E3N4, C-F9]

| Barrier | Share and indicative selections | Response supported by case options | Limit |
|---|---|---|---|
| Battery will not last | 46%; about 690 | B2 minimum plus B1 own-lab reading | Does not identify replacement share by respondent |
| Cannot judge condition | 41%; about 615 | B1 real photos and condition record | No tested page-layout uplift |
| Warranty too short | 31%; about 465 | B2 twelve months | Longer term does not shorten repair |
| Want to see phone | 28%; about 420 | Existing store inspection | No new-store expansion assumption |
| Price gap insufficient | 24%; about 360 | A gives a narrower Fair-price change | Not evidence that price is irrelevant |
| Stolen or locked concern | 22%; about 330 | B1 IMEI check; release rule | No guarantee beyond completed prescribed check |
| Previous-owner data | 12%; about 180 | Completed wipe and B1 certificate | Certificate must correspond to actual completion |

The seven barrier shares sum to 204%, or approximately 3,060 selections across the sample if the printed percentages are used exactly. That is consistent with multiple answers and is not evidence of a data error. It is also why adding the five proof-related categories would not produce the share of visitors deterred by trust. Their overlap is unknown. A person concerned about battery life could also dislike the warranty and doubt the photos. Any statement that trust accounts for a particular combined percentage would require respondent-level intersections absent from the case. [C-E1A, C-F9]

The wording of the inherited demand headline also needs care. Battery, condition, warranty, stolen-or-locked status and prior-owner data are straightforward assurance concerns. Wanting to see the phone can also support confidence, but it might reflect shopping preference rather than distrust. Price is clearly an economic comparison. Grouping five reasons as proof-related is a useful qualitative classification, provided it is not represented as a measured latent factor or as five independent causal effects. The framework organizes the evidence without adding a new statistic. [C-E1A]

Responses to the buying-offer question point in a similar direction. A battery-health guarantee at 85% or more attracts 44%, a twelve-month warranty 39%, a condition report 36%, trade-in part payment 31%, and a price 5% lower 22%. These responses identify what people say could help, not what they would actually purchase at a specified grade, price and channel. They also allow multiple answers. The economics therefore takes realized option effects from Exhibit 6 rather than deriving an order multiplier from these survey percentages. [C-E1B, C-E6A to C-E6H4, C-F9]

Table R08-03. Stated offer preference versus the quantity that belongs in the model. The distinction prevents survey responses from becoming invented sales. [C-E1B, C-E6B1, C-E6B2, C-E6C, C-E6H2]

| Offer response | Printed survey share | What can be concluded | Model treatment |
|---|---:|---|---|
| Battery at least 85% | 44% | Most selected offer in this question | B2 uses its specified 8% order effect |
| Twelve-month warranty | 39% | Term of responsibility matters to respondents | Bundled within B2, not a second independent uplift |
| Report with photos, reading and IMEI | 36% | Evidence package merits priority | B1 uses its specified 8% effect |
| Old phone as part payment | 31% | Sourcing proposition has stated interest | C follows pickup and buyer rules, not 31% conversion |
| Price 5% lower | 22% | Price remains a relevant offer | A uses its own price, channel and mix rules |

The difference between survey price and option A is material. A survey respondent considered a price 5% lower, without the same stated restriction to Fair grade or the same channel mix change. A reduces Fair prices by 3% in every channel and adds orders only in ads and MegaKart under new mixes. Applying the survey's 22% directly to A would confuse both the treatment and the outcome. Equally, the survey does not prove that A must fail; its failure in the plan screen follows from the specified economics and constraints, which are analyzed separately. [C-E1B, C-E6A, T12]

Table R08-04. Why the survey price offer cannot calibrate the price-push forecast. Each difference changes the interpretation of the response. [C-E1B, C-E6A, C-E6H4]

| Dimension | Survey offer | Option A | Consequence |
|---|---|---|---|
| Price reduction | 5% | 3% | Different magnitude |
| Grade scope | Not specified by response line | Fair only | Cannot infer Superb or Good response |
| Channel scope | Product-page leaver sample | Order increase in ads and MegaKart | Different delivery populations |
| Mix consequence | No specified mix | More Fair in both affected channels | Contribution must be recomputed |
| Outcome measure | Stated willingness trigger | Case-specified order effect | Survey share is not realized conversion |
| Capacity | Not a survey condition | Superb then lab rationing | Raw interest can exceed deliveries |

Store conversion is another tempting but invalid shortcut. One in three visitors who pick up a phone buys it. The denominator consists of store visitors who have already handled a device, a more selected stage than total website visitors or even product-page openers. Dividing that store rate by the site's visit-to-order rate would produce a large ratio but would not measure the causal benefit of physical stores. The populations, selection stages and visit definitions differ. The case does support using stores as an existing channel for inspection; it does not support transferring their rate to the website. [C-E1D, C-E3, C-F11]

The same discipline applies to the buyer segment survey. The 900 customers who bought during August to October are not the same population as the 1,500 October page leavers. Buyer shares help describe who currently purchases, whereas leaver responses describe barriers among nonbuyers sampled at a particular stage. Combining the two into a claim that a measured proportion of family buyers specifically selected the battery offer would require a cross-tabulation that the case does not provide. The family-buyer choice is a reasoned fit between description, economics and feasible levers, not a survey segmentation result created after the fact. [C-E1A, C-E1B, C-E1C]

Table R08-05. Evidence populations and the decisions they can support. All limitations concern the case data structure rather than a claim that the underlying research was improperly conducted. [C-E1A to C-E1D, C-E3]

| Evidence | Population or denominator | Useful decision | Claim it does not establish |
|---|---|---|---|
| Barrier survey | 1,500 product-page leavers | Rank stated obstacles | Percentage of all visitors deterred by one unique cause |
| Offer survey | Same 1,500; multiple answers | Prioritize proposed reassurance | Realized conversion or willingness to pay |
| Buyer segments | 900 August-October buyers | Understand current customer types | Barriers within each segment |
| Website funnel | October website stages | Locate progression losses | Store or marketplace conversion |
| Store handling conversion | Visitors who picked up a phone | Value of inspection as a channel role | Causal conversion lift versus website |
| Channel table | Average orders August-October | Reconcile fulfilled demand economics | Experimentally isolated channel effectiveness |

One credible competing interpretation is that Tikau's principal problem is demand, because its website conversion is low. The funnel alone supports investigating demand quality and page performance. It does not show that buying more visits is the best use of capital, especially when existing sellable lab capacity is fully used. The survey then gives a more specific reason to improve the information and responsibility behind the offer. The recommended response combines assurance with enough delivery capacity to monetize its specified demand effect, rather than assuming that additional attention automatically becomes profitable volume. [C-E1D, C-E1A, C-E1B, C-E4a, C-E6SH]

Another competing interpretation is that price ranks only fifth because respondents prefer to sound quality-conscious. That possibility cannot be tested from the supplied aggregate survey. The analysis does not dismiss price or claim that all buyers accept a premium. It uses the published response ordering as one input to problem diagnosis, then tests the exact price-led option on contribution, returns and board requirements. This separation gives the price proposal a fair hearing while preventing a speculative explanation of survey bias from replacing the case's specified data. [C-E1A, C-E6A, C-T1t to C-T4t, T12]

The report-first product page is accordingly a proposed presentation of evidence, not a new quantified lever. A buyer should be able to see the individual device, its own-lab battery reading, the grade, the refurbished label and the route to warranty service before being asked to trust broad adjectives. B1 supplies the package specified in the case, while B2 changes the battery and warranty offer. Neither the page layout nor the supporting store script earns an extra model uplift beyond those option effects. Customer understanding should be tested in the proposed validation work before anyone claims that the message itself caused the forecast. [C-E5a, C-E5b, C-E6B1, C-E6B2, C-Q4]

The direct answer to Sana's demand-or-trust question is therefore conditional and specific. Tikau has attention, fulfilled baseline demand and a full lab, alongside stated assurance barriers and a demonstrated battery-proof weakness. It needs to improve the reliability and visibility of what it sells, preserve contribution and fund the capacity needed for the case's order effects. Calling this a trust problem is a synthesis of those observations, not a claim that all lost website visits share one psychological cause. [C-Q1, C-E1A, C-E1D, C-E4a, C-E4c]

The absence of respondent-level overlap also limits how the report can discuss combinations. Battery concerns and condition concerns may be concentrated among many of the same leavers or distributed across different people. A report containing photos and a reading could address both concerns for one person without creating two incremental buyers. The case handles the combined economic effect through its explicit multiplication rule for selected options, not by adding survey percentages. That multiplication is a modeling instruction and should not be described as a behavioral finding inferred from the questionnaire. [C-E1A, C-E6H2]

There is a further distinction between the problem question and the offer question. Someone may report concern about price but select a warranty as the offer that would help most, or report a battery concern and still require a trade-in to afford the phone. Because multiple answers are allowed and no linked response matrix is supplied, the report cannot construct a conversion path from a particular barrier to a particular offer. The barrier-to-option mapping is a reasoned design choice. Proposed interviews and comprehension tests can examine that mechanism, provided their results are not invented in advance. [C-E1A, C-E1B, C-F9]

The funnel's aggregate counts also do not distinguish unique individuals, sessions or repeat model comparisons beyond the wording the case provides. The calculation uses the printed stages faithfully and avoids introducing a customer-frequency adjustment. It would be inappropriate to estimate lifetime value, repeat purchase probability or retargeting reach from these totals alone. Those measures need linked customer histories and costs over time. Within this case, stage conversion and the channel reconciliation are sufficient to locate the stated hesitation and connect it with the permitted offer changes. [C-E1D, C-E3, C-R3, C-Q1]

A useful proposed comprehension check would ask the buyer to explain the battery reading and warranty route in their own words after viewing the page. That would test whether the evidence is understood, rather than merely whether a reassuring badge is noticed. It would still be a proposed test with no results, and it would not estimate a revenue effect by itself. Its value is diagnostic: misunderstanding could reveal that the page obscures the scope of the promise even when the underlying lab record is correct. This gives the validation work a concrete connection to the observed information gap without creating an extra lever in the forecast. [C-E1A, C-E1B, C-E5a, C-E6B1, C-Q4]

Exhibit for the deck: problem slide funnel and barrier bands, with explicit population notes; launch slide report-first product-page mockup. Keep the survey's 5% price offer separate from A's 3% Fair cut in the appendix. [C-E1A, C-E1B, C-E6A, C-Q4]

## 9. The lab is full: Tikau sells 7,200 of 7,200 sellable phones and 1,775 of 2,000 Superb phones, so added orders need a capacity test

**Answer.** Tikau's current sellable output is fully used, even though the trader limit leaves some Superb supply unpurchased. Order growth can therefore be lost at two different constraints: grade-specific supply and total lab delivery. The case requires Superb rationing first and all remaining demand rationing second, so a plan must prove that its forecast phones can be delivered before claiming their contribution. [C-E4a, C-E4b, C-E6H4, T8]

The distinction between tested and sellable capacity is the starting point. The lab tests 8,000 phones across two shifts, and 10% fail the final check. Those failed units are sold as spare parts for about their purchase cost, leaving no gain or loss from that recovery under the case convention. Sellable capacity is 8,000 × 90% = 7,200. Baseline sales also equal 7,200, so the two-shift system has no unused monthly sellable capacity in the case model. The rejected phones are not spare capacity available for sale without testing or repair. [C-E4a, C-B1, T8]

Superb supply is a separate constraint. Wholesale traders can offer at most 2,000 Superb phones a month, while the current channel mix sells 1,775. Headroom is therefore 225 Superb phones. The presence of those potential purchases does not create lab throughput, because a Superb phone still needs to pass through the constrained delivery system. Good and Fair do not face a stated wholesale supply cap, but they use the same total lab limit. The business cannot infer unconstrained Good growth simply from the absence of a Good sourcing ceiling. [C-E4a, C-E4b, T5, T8]

Table R09-01. Constraint identity and the unit that must be measured. This distinguishes supply availability, tests and delivered output. [C-E4a, C-E4b, C-E6SH, C-E6H4]

| Resource or flow | Baseline quantity | What consumes it | What it does not mean |
|---|---:|---|---|
| Gross tests | 8,000 monthly | Phones entering final-check process | 8,000 saleable deliveries |
| Sellable output | 7,200 monthly | Delivered phones across channels and grades | Extra space for all order uplift |
| Superb trader supply | At most 2,000 monthly | Wholesale Superb requirement | An increase in total lab capacity |
| Superb sold | 1,775 monthly | Current mix across channels | A permission to favor one channel |
| Third-shift increment | 1,800 sellable phones | Total delivery capacity rises to 9,000 | 1,800 gross tests subject to another 10% haircut |

Theory of Constraints provides a useful ordering of questions for this evidence. First identify the constraint, then organize other activities around what it can deliver, and finally evaluate whether paying to expand it produces enough incremental contribution. Here the immediate system constraint is the full sellable lab, while Superb supply can become a second constraint when the mix changes. This framework is an analytical application, not additional case evidence that Tikau has measured every work station or identified a specific machine as the physical bottleneck. No cycle-time, staffing or queue data identifies such a station. [C-E4a, C-E4b, C-E6SH]

The phrase that the lab is full also needs scope. It refers to monthly modeled sellable output, not proof that each employee is continuously busy or that every individual process has identical utilization. A full monthly total can coexist with local idle time, scheduling problems or uneven arrival patterns; the case provides no hourly data to distinguish them. The analysis should not invent an efficiency programme that releases capacity at no cost. The permitted capacity change is the third shift with its specified timing and expense. [C-E4a, C-E6SH, C-F11, C-F12]

The case's rationing rule can be demonstrated with the B1 and B2 combination before deciding whether to fund a shift. Their order effects multiply to 1.1664, taking 7,200 raw orders to 8,398.08. Superb demand rises from 1,775 to 2,070.36. The Superb factor is 2,000 ÷ 2,070.36 = 0.9660156, applied to every channel's Superb demand. This removes 70.36 Superb orders, leaving 8,327.72 total orders after the first constraint. If the lab remains at 7,200, a further factor of 7,200 ÷ 8,327.72 = 0.8645824 applies to all surviving cells. [C-E6B1, C-E6B2, C-E6H2, C-E6H4, T22]

Table R09-02. Ordered rationing for B1 plus B2 with no third shift. This is the specified option combination, not a new simulation assumption. [C-E6H4, T22, independent-audit.json plans]

| Step | Superb | Good | Fair | Total and rule |
|---|---:|---:|---:|---|
| Demand after order effects | 2,070.36 | 3,720.816 | 2,606.904 | 8,398.08 |
| After Superb limit | 2,000 | 3,720.816 | 2,606.904 | 8,327.72; only Superb reduced |
| Apply total-lab factor | × 0.8645824 | × 0.8645824 | × 0.8645824 | Same percentage applied to all surviving cells |
| Delivered | 1,729.1648 | 3,216.9520 | 2,253.8833 | 7,200 |
| Lost at Superb step | 70.36 | 0 | 0 | Supply loss occurs before lab rationing |
| Further lab loss | About 270.84 | About 503.86 | About 353.02 | 1,127.72 post-Superb orders lost |

An important consequence appears in the delivered Superb count. Although traders could supply 2,000 after the first step, the total-lab factor reduces final Superb delivery below that level. The model does not restore unused Superb supply after the second step or move it into a preferred channel. Doing so would replace the case's prescribed proportional rule with an optimization policy the team invented. The same is true of prioritizing high-contribution referral orders: the economic attraction is real, but the stated rationing rule governs the assessed forecast. [C-E6H4, T22, A04]

A different sequence could also distort contribution. Applying the total-lab factor first would reduce Superb demand while shrinking other grades before assessing the grade limit. Depending on the plan, that can alter which supply is considered binding and which mix survives. The required order avoids that ambiguity. A rebuild should therefore show raw demand, the Superb factor and the post-Superb total before the lab factor, rather than presenting a single unexplained reduction from projected orders to final sales. This is particularly important when trade-in adds both replacement supply and incremental buyer orders. [C-E6H4, C-E6TI3, C-E6TI4, T22]

With the third shift, the same post-Superb demand of 8,327.72 lies below 9,000 sellable capacity, so the total-lab factor is one. The forecast delivers about 8,328 phones, keeps all 2,000 Superb units and leaves 672.28 sellable slots unused. Utilization is about 92.5%, commonly presented as 93%. This is headroom within a monthly model, not evidence that the extra time automatically funds an additional uncosted inspection step or that service queues disappear. All promised checks still need an operational release process. [C-E6SH, T15, T22, C-E5a, C-E5f]

Table R09-03. Capacity value and timing for the same assurance package. Monetary values are forecast lakh, and the comparison holds the lever set constant. [C-E6SH, T25, independent-audit.json plans]

| Capacity choice | February deliveries | February EBITDA | March EBITDA | Interpretation |
|---|---:|---:|---:|---|
| No shift | 7,200 | −8.6333 | −8.6333 | Order effect is largely rationed |
| Shift from February | 8,327.72 | +5.6050 | +5.6050 | Extra contribution exceeds the ₹9 lakh monthly cost |
| Shift from March | 7,200 | −8.6333 | +5.6050 | Saves February shift expense but loses more contribution |
| February versus March start | +1,127.72 February phones | +14.2383 | No March difference | Earlier shift improves Q1 by ₹14.2 lakh |

Hiring and training take four weeks, and the case allows the third shift to start on either 1 February or 1 March. That lead time means a capacity decision belongs before the launch effect arrives. Waiting until product-page evidence persuades buyers in February would miss the stated earliest readiness date unless recruitment had already been authorized. The operating plan therefore needs a January staffing and training checkpoint, while January customer-facing orders, prices and return rates remain unchanged. Preparing capacity is different from recognizing its output or expense before the permitted month. [C-E6SH, C-E6H1]

Kabir's concern that Tikau is selling faster than it can check properly is consistent with both the full-lab quantity and the battery spot check. It is not enough to prove exactly how much certification time each phone requires or how many additional technicians a report needs. The case supplies a paid capacity lever and a report-cost lever rather than a detailed process-engineering study. The report can connect them as complementary requirements, but should not claim that the new shift alone causes better measurement or that a specific shift staffing mix has been validated. [C-E4c, C-E4e, C-E6B1, C-E6SH]

The workflow implication is a release condition rather than an arbitrary productivity target. A phone should reach the delivered pool only after its prescribed checks and evidence are complete. Demand that exceeds compliant output is lost under the case rule; it should not be booked as delivered revenue with a promise to complete a report later. This distinction matters because the very purpose of the reassurance package is to make an individual phone's condition verifiable. Treating documentation as a retrospective marketing task would weaken the claim without changing the physical phone. [C-E5a, C-E5f, C-E6B1, C-E6H4]

Table R09-04. Capacity and proof controls needed before order growth can be recognized. Proposed recordkeeping clarifies execution and supplies no additional modeled benefit. [C-E4a to C-E4e, C-E5a, C-E5f, C-E6H4]

| Process point | Case risk | Proposed release or planning control | Forecast boundary |
|---|---|---|---|
| Sourcing | Superb supply ceiling | Record available units separately from demand | Do not exceed stated supply |
| Testing | Gross tests include failures | Reconcile passed phones with sellable output | No sales contribution on failed units |
| Battery evidence | Trader-tool record can misstate listing | Link own-lab reading to device identity | No uncosted yield or downgrade assumption |
| Data and IMEI | Certain phones cannot be sold | Complete checks before release | A clean summary flag is insufficient evidence |
| Capacity planning | Launch demand arrives after setup | Confirm shift readiness before live date | No early capacity before permitted start |
| Fulfilment | Demand exceeds deliveries | Record lost demand by rationing stage | Costs and contribution apply to delivered phones |

A competing reading is that Tikau could improve processes enough to absorb the specified growth within two shifts. That is a reasonable post-case operational hypothesis, but no improvement rate or no-cost capacity increment is provided. The economics cannot assume that certification creates time while simultaneously adding work. Another reading is that the shift should be delayed until demand is observed. The audited comparison shows the cost of that delay under the case's given order effects; real management could still choose caution if observed demand weakens, but the base case must use the printed effects consistently. [C-F11, C-F12, C-E6B1, C-E6SH, T25]

Capacity therefore constrains the interpretation of marketing success. A stronger product page may raise raw interest under the case levers, but the paid operating plan needs enough contribution from fulfilled phones to cover the added shift. The recommendation earns that capacity through the changed offer and economics, while the diagnosis establishes why neither volume rhetoric nor assurance language can stand alone. This is the operational connection the three competing camps leave incomplete when their proposals are considered separately. [C-B4 to C-B6, C-E6A to C-E6C, C-E6SH, T12]

The binding constraint can move after the decision. Before the shift, total sellable capacity limits even a modest order increase. With the shift and the selected assurance package, total capacity has some headroom while Superb availability is fully used. A further demand increase in Good could fit differently from the same increase concentrated in Superb, even if the total raw order count were identical. This is why the monitoring proposal must retain grade availability as well as total lab utilization. A single company-level capacity percentage cannot reveal which customers' requested grades are unavailable. [C-E4b, C-E6H4, T22]

Exhibit for the deck: problem slide capacity band and solution slide dependency sequence; appendix rationing working shows Superb reduction before the total-lab factor. [C-E6H4, T22, T25]

## 10. Five whys and an issue tree connect the loss to an assurance offer that the full lab cannot yet substantiate

**Answer.** The evidence supports a connected failure of contribution, assurance and delivery capacity rather than a single isolated marketing symptom. A five-whys chain helps explain why buying more demand does not resolve that combination, while an issue tree keeps independent financial branches separate. The root-cause statement remains an analytical synthesis: the case demonstrates specific proof gaps and constraints, but it does not provide a causal experiment proving that one operational failure caused every lost sale. [C-E1A, C-E4a, C-E4c, C-E5a, T4, T5]

The starting outcome is the company loss after its specified expense layers. The first question is why a business with positive grade-level contribution still loses money. The channel and company bridge answers that directly: the phone pool does not cover commission, fixed acquisition and distribution spend, coupons and company costs. The next question is why simply adding volume is not enough. Current sellable capacity is full, and the proposed price push shifts demand toward thin Fair economics. These are separate mechanisms, so the chain should not pretend that one wording change explains both. [C-E2, C-E3, C-E4a, C-E6A, T2, T4, T5]

The further questions concern what customers hesitate to buy and what the firm can prove. Battery, photos and warranty lead the stated barrier list, while the lab currently records the trader tool's battery reading. The spot check finds phones below their printed threshold, providing direct evidence that the assurance process is incomplete for at least the sampled units. Kabir's observation and the full-capacity figure make operating pressure a plausible contributor, although they do not quantify causality. The resulting root cause is a mismatch among the advertised assurance, its evidence and the throughput required to deliver it profitably. [C-E1A, C-E4a, C-E4c, C-E4e, C-E5a]

Table R10-01. Five-whys chain with the evidential strength of each link. The final column prevents a reasoned chain from becoming an unsupported causal finding. [C-E1A, C-E2, C-E3, C-E4a, C-E4c, C-E4e, C-E5a, T5]

| Step | Diagnostic question | Answer from the case | Evidence status and limit |
|---|---|---|---|
| Starting outcome | Why does the company miss break-even | Contribution after marketing is below fixed company costs | Direct arithmetic |
| First why | Why does positive unit contribution not suffice | Channel charges absorb much of the phone pool | Direct accounting; varies by channel |
| Second why | Why not add more demand at current offer | Lab output is fully used; Fair has thin economics | Direct capacity and margin facts |
| Third why | Why does the current offer leave hesitation | Visitors report battery, condition and warranty concerns | Stated barriers; not a causal experiment |
| Fourth why | Why is reassurance not already credible | Trader-tool battery records fail the own-lab requirement | Direct process gap and sampled mismatch |
| Fifth why | Why do marketing and operations need a joint response | Proof must be attached to each delivered phone within capacity | Analytical dependency, not a measured universal cause |

The chain is deliberately not a personnel judgment. Rohan's concern about volume addresses the need to fund fixed costs; Kabir's concern addresses product evidence and responsibility; store managers identify an alternate source of phones and a customer offer. Each sees a real part of the system. The analytical task is to compare their complete consequences and dependencies, not to make one executive careless and another visionary. Their proposals are evaluated symmetrically in the option screen, with this section providing the common causal structure. [C-B4, C-B5, C-B6, C-Q3]

A MECE issue tree can be built around the EBITDA identity while keeping the customer mechanism in a separate explanatory branch. Revenue per delivered phone depends on grade price and mix. Variable economics depend on sourcing, lab work, packing, claims, returns, commission and coupons. Fixed costs are another branch. Delivered volume is limited by raw demand, grade availability and sellable capacity. Assurance and communication affect demand and returns under the specified levers, but they are not added as a second financial cost after those modeled effects have already been counted. [C-E2, C-E3, C-E4a, C-E4b, C-E6A to C-E6H4, C-D1]

Table R10-02. Issue tree organized to avoid double counting. Every financial effect enters one economic branch even when several operational causes influence it. [C-E2, C-E3, C-E4a, C-E4b, C-E5a to C-E5f, C-E6A to C-E6H4, C-D1]

| Branch | Case question | Current diagnosis | Place in calculation | Evidence still missing |
|---|---|---|---|---|
| Price and grade mix | Does each sale retain enough value | Fair is thin; marketplace fee follows price | Delivered quantity × grade-specific net contribution | No free choice of customer mix |
| Raw demand | Do enough buyers want the offer | Website attention exists; reassurance barriers stated | Eligible option multipliers before rationing | No segment-by-channel response experiment |
| Assurance and service | Can the promise be shown and supported | Battery proof gap; slow repairs and repeat visits | Specified demand, return and warranty effects | No unit-level execution records in case |
| Sellable throughput | Can demand become delivered phones | Baseline lab is full | Total-lab rationing after Superb | No hourly station capacity |
| Grade sourcing | Is the requested grade available | Superb capped; Good and Fair supply uncapped | First rationing step and trade-in replacement savings | No unsupplied supplier expansion |
| Channel burden | Does distribution retain the phone pool | Marketplace commission hidden; ads underrecover fees | Commission, coupons and fixed channel spend | No authorized baseline reallocation |
| Company fixed burden | Does residual cover the business | Separate ₹58 lakh exceeds baseline residual | Final deduction before growth money | No overhead-reduction lever |

Calling the operational branches MECE does not mean their causes never interact. A battery reading can influence a listing claim, a return and a customer's willingness to order. The financial tree handles this by charging each effect through its defined variable once. An issue tree becomes misleading if the analyst adds a separate distrust loss equal to service expense and also retains the service expense inside unit contribution. The report avoids that error by treating trust as an explanatory hypothesis and using the explicit case cost and demand terms for the arithmetic. [C-E1A, C-E2N1, C-E2N2, C-E6B1, C-E6B2, C-D1]

The framework also distinguishes a measured defect from an absence of evidence. The spot check directly establishes a mismatch in sampled Good phones. The case does not supply evidence that Tikau fabricates reviews, fails every data wipe or sells stolen devices. Those become control questions because Exhibit 5 requires compliance and the current description does not demonstrate completed records. They cannot be converted into observed violations merely to make the root-cause narrative stronger. This distinction matters because a credible recommendation repairs what is shown and verifies what is unknown. [C-E4c, C-E5a to C-E5f]

The next table makes those different evidential standards explicit. A supported working hypothesis can guide a decision even when the case does not prove a complete causal model, but an unverified allegation should never be presented as fact.

Table R10-03. Hypothesis register and the decision each result supports. Verdicts concern the case evidence, not external company behavior. [C-E1A, C-E1B, C-E1D, C-E3, C-E4a to C-E4e, C-E5a to C-E5f, T4, T5]

| Hypothesis | Evidence for it | Competing reading | Verdict and action |
|---|---|---|---|
| More traffic alone fixes the loss | Low website conversion appears to leave room | Lab already full; acquisition spend can consume value | Insufficient; test complete economics |
| Price is the dominant stated barrier | Local-shop comparison appears in survey | Battery, condition and warranty rank higher | Not supported as the leading stated barrier |
| Phone condition needs stronger proof | Trader reading and sampled battery mismatch | Sample does not describe every unit | Supported process gap; own-lab evidence required |
| Stores cause lower return rates | Store multiplier is lower in the case | Selection and mix can explain observed patterns | Use given rates; avoid causal generalization |
| Current data wiping is always incomplete | Exhibit 5 requires completion | No observed failure count supplied | Unverified; require release evidence |
| A longer warranty alone passes the brief | Term responds to a stated concern | Does not prove battery reading or satisfy every board test | Incomplete; test B2 with full requirements |
| Capacity is part of the turnaround | Sellable output equals sales | No work-station study identifies physical detail | Supported system constraint; use specified shift lever |

The strongest objection to a root-cause narrative is that it may oversimplify an accounting problem. A company could have excellent proof and still lose money through excessive spending or weak prices. The case supports that objection in part: commission and fixed spend matter independently, and the response cannot be financed by trust language. This is why the report does not prescribe assurance as a universal remedy. It tests whether the specific B1 and B2 economics, with the paid capacity expansion, can cover the cost structure and pass the return limit. [C-E3, C-E6B1, C-E6B2, C-E6SH, C-D1, T12]

A second objection is that full capacity should make conversion irrelevant. If the company sells all current output, perhaps it should focus only on productivity. That reasoning overlooks the economics and customer promise of the delivered mix. The firm needs to improve the contribution and credibility of what it sells, and additional capacity must be accompanied by profitable demand to fund it. The current full lab therefore makes indiscriminate demand growth unhelpful; it does not make customer understanding unnecessary. [C-E1A, C-E4a, C-E6B1, C-E6B2, C-E6SH, T25]

A third objection concerns the survey's interpretation. People can state that they want warranty and proof while ultimately choosing the lowest price. The case offers no new primary validation to settle that question. It does, however, prescribe order and return effects for each option, so the solution can remain internally consistent without pretending those effects were experimentally established by the team. The proposed validation plan tests comprehension and preference mechanisms; the competition forecast remains the specified expected-value model. [C-E1B, C-E6A to C-E6H4, C-F11, C-Q5]

The practical diagnostic implication is ownership across functions. Growth should not publish a stronger promise before the lab can attach the required record. The lab should not assume a report pays for itself without contribution analysis. Service should not treat a longer warranty as a marketing-only extension if repair duration and repeat visits remain difficult. Finance should keep setup, channel and per-phone expenses in their correct layers. These are proposed management responsibilities derived from the dependencies, not claims that current staff have refused such coordination. [C-E4d, C-E5a, C-E6B1, C-E6B2, C-E6H3, C-D1]

The synthesis that carries into the next sections is consequently narrow enough to defend. Tikau has a demonstrable battery evidence weakness, stated customer assurance concerns, a full sellable lab and an insufficient contribution residual. Those facts justify a combined assurance and capacity response if its economics pass. They do not justify claims that every phone is defective, every customer distrustful or every current tactic unlawful. Keeping the limits visible makes the recommendation testable and gives judges a clear path from observation to inference to calculation. [C-E1A, C-E4a, C-E4c, C-E5a, T5]

The hypothesis register can guide what evidence management should collect next without altering the frozen answer. If properly documented phones still produce poor comprehension, the communication design needs revision. If customers understand the promise but the lab cannot release enough compliant phones, throughput becomes the immediate operating issue. If deliveries rise while contribution deteriorates, grade mix, service expense and channel charges need investigation before further spending. Each observation points to a different branch of the tree. None requires assuming that a favorable survey response is a sale or that a paid report guarantees correct execution. [C-E1A, C-E1B, C-E4a, C-E5a, C-E6B1, C-D1]

Exhibit for the deck: problem slide issue tree and diagnosis commentary, with evidential limits retained in the compliance appendix and proposed validation section. [C-Q1, C-E4c, C-E5a to C-E5f, T5]

## 11. The battery spot check exposes an Exhibit 5 proof failure; scaling it to about 351 Good phones a month is indicative

**Answer.** Tikau's recorded battery process does not meet the case requirement for an own-lab reading, and the spot check directly identifies 22 sampled Good phones below their printed threshold. Extending that sample rate to monthly Good volume gives an indicative 350.9 phones, not a census of current misstatements. The wider Exhibit 5 review must distinguish demonstrated gaps from controls whose execution is unknown, because selecting B1 is only a screening proxy for compliant implementation. [C-E4c, C-E5a, C-F16, A14, T8]

The evidence begins with the measurement process. The lab currently records the battery health shown on the trader's own testing tool. Exhibit 5 requires a battery claim to have a reading taken in Tikau's own lab. Even if a trader reading happened to be correct for a particular phone, relying on that record would not meet the stated evidence requirement for the displayed battery claim. The November spot check goes further: Tikau's own tester found 22 of 200 Good phones below the 80% printed on their listings. That is direct evidence about those sampled phones, rather than an inference from customer anxiety. [C-E4c, C-E5a]

The sample share is 22 ÷ 200 = 11%. The modeled baseline includes 3,190 Good phones each month, so applying that share gives 3,190 × 11% = 350.9, presented as about 351. This step is A14, an explicitly indicative extrapolation. The case does not describe a random sampling method, confidence interval, channel distribution or repeated measurement protocol for the spot check. The monthly scale therefore communicates possible operational significance; it cannot prove the exact number of false Good listings in any month. [C-E4c, C-E3, A14, T5, T8]

Table R11-01. What each battery statement actually establishes. The extrapolation remains separate from both sampled evidence and the financial model. [C-E4c, C-E5a, A14, T8]

| Statement | Basis | Status | Permitted use |
|---|---|---|---|
| 22 sampled phones were below printed 80% | Own-tester result on 200 Good phones | Case observation | Demonstrated sampled mismatch |
| Sample mismatch share was 11% | 22 / 200 | Derived sample result | Describe the spot check |
| About 351 monthly Good phones may be implicated | 11% × 3,190 = 350.9 | A14 indicative extrapolation | Show potential scale with caveat |
| All Good phones are wrongly listed | Not established | Unsupported generalization | Exclude |
| The mismatch has a known downgrade cost | No unit remedy/yield data | Unquantified | Do not add an invented model charge |
| Trader-tool records meet own-lab rule | Conflicts with required evidence process | Process gap | Replace proof workflow before claim release |

The case's grade definition makes the mismatch substantive. Good is described as having light marks and battery health of at least 80%; Superb requires at least 85%, while Fair is fully working with visible wear. A reading below the printed Good threshold is not merely a cosmetic difference. However, no supplied rule states which of those sampled phones could be repaired, regraded or rejected, or at what incremental cost beyond the listed options. The solution should not invent a downgrade yield, replacement rate or loss from the sample. B2's specified Good battery replacement share is a separate model input and must not be replaced with the spot-check share. [C-CO5, C-E4c, C-E6B2, C-F11]

That separation also prevents a misleading comparison between 11% sampled below the current threshold and 40% needing a new battery under Battery 85. The first refers to a sample below 80%; the second is the option's expected replacement requirement to ensure Good phones leave at 85% or above. The thresholds, population and intended treatment differ. Their numerical difference does not reveal an inconsistency and cannot be used to reduce B2's expected cost. [C-E4c, C-E6B2]

The compliance problem extends beyond the one sample. Every claim must be true for every phone on which it appears, so aggregate performance is not enough. A high average battery reading would not justify a minimum claim on a device below the threshold. A sample certificate could not stand in for a unit record. The release process needs to connect the specific device to the reading, photos, IMEI status and completed wipe. Those are implementation controls proposed to deliver the case requirements; the report does not claim that any such new records already exist. [C-E5a, C-E5f, C-E6B1]

Table R11-02. Exhibit 5 review of the present position. Unknown execution is a verification gap, not an allegation of observed illegal behavior. [C-E4c, C-E5a to C-E5f, C-F16]

| Rule | What is established today | Gap classification | Required decision |
|---|---|---|---|
| Every claim true; own-lab battery reading | Trader-tool record and sampled mismatch | Demonstrated proof-process gap | Own-lab reading linked to device before claim |
| Refurbished wording; restricted adjectives | Required wording supplied by case | Current listing text not fully provided | Audit every listing and remove prohibited terms |
| Genuine replaced parts only if brand made | Batteries are compatible, not brand made | Incompatible with a genuine-parts battery claim | State compatible battery; avoid genuine-parts claim |
| Named comparisons need evidence | Tikau has none | Demonstrated absence of comparative evidence | Do not publish named comparisons |
| No false urgency or fictitious reference price | Rule is explicit | No observed current tactic documented | Review timers, stock and pricing records |
| Verified reviews and disclosed rewards/creators | Rule is explicit | No current execution records supplied | Verify buyer link and disclosure before use |
| Completed wipe; no lost/stolen IMEI | Release requirement explicit | Completion evidence not supplied | Block release without completed records |

A formal review should therefore use more than a binary lawful/unlawful label. Some proposed language is explicitly prohibited regardless of whether a phone is well repaired. Other language becomes permissible only when the required evidence exists. Some conduct is mandatory before any sale, even if the customer never sees a promotional claim about it. The operational response differs in each category: remove prohibited wording, substantiate conditional promises and complete mandatory release checks. This classification makes the task actionable without importing an external legal interpretation into the closed case. [C-E5a to C-E5f, C-F16]

B1 is the natural compliance-enabling lever because every phone gets real photos, a lab battery reading, an IMEI check and a wipe certificate. These elements address the evidence chain the baseline lacks. But paying its setup cost does not prove that a phone was checked correctly or that every page was updated. The model's fourth board test is represented by B1 selection for screening purposes. The case and FAQ leave actual claim compliance to the judges under Exhibit 5. The report must therefore keep the numerical screen conditional on a completed claim-by-claim implementation review. [C-E6B1, C-T4t, C-F16, independent-audit.json limitations]

B2 alone changes the physical minimum and warranty economics, but it does not provide B1's full report and evidence package. A team could not take its 85% promise as permission to omit the required own-lab reading. It also could not describe compatible replacement batteries as brand-made parts. The quality of the physical outcome and the truthfulness of the description are related but distinct obligations. Neither a warranty term nor a setup payment substitutes for a record that the specific advertised phone satisfies its claim. [C-E6B1, C-E6B2, C-E5a, C-E5b]

Table R11-03. Promise, proof and release dependencies under the proposed assurance options. These are requirement checks, not extra model benefits. [C-E5a, C-E5b, C-E5f, C-E6B1, C-E6B2]

| Proposed statement or act | Physical condition or act needed | Evidence needed | Why a selected lever is insufficient alone |
|---|---|---|---|
| Battery at least 85% | Device meets minimum when released | Own-lab reading attached to device | B2's printed effect still requires execution |
| Twelve-month warranty | Covered sale and supported term | Clear term, scope and claim route | Length does not prove fast repair |
| Condition report | Photos and record match device | Identity-linked report available before sale | B1 budget does not certify record accuracy |
| IMEI checked | Prescribed registry check complete | Device identity and result recorded | A generic badge cannot prove each unit |
| Data wiped | Required wipe completed | Certificate linked to completed process | Certificate without completion fails release rule |
| Compatible battery description | Replacement matches described category | Repair record and truthful wording | B2 does not convert compatible into genuine |

The same caution applies to reviews and creators. A reward can be offered only with disclosure and without depending on whether the review is favorable. A paid creator must be labelled as an advertisement. The report does not invent current review abuse or claim that creator buyers return more often because content was undisclosed; the higher creator return multiplier is a supplied economic parameter, while disclosure is a separate rule. Combining the two into an accusation would overstate both pieces of evidence. [C-E3N3, C-E5e]

Named comparisons are even clearer. The case states that Tikau lacks data to support them. Internal arithmetic can compare case competitors for strategy, but that does not authorize customer copy naming a seller as worse, more expensive or less reliable. Nor can real-world policy research about a different vendor fill the evidence gap for the fictional comparator. Customer-facing language should describe Tikau's verified device and obligations without borrowing an unsupported competitive claim. [C-E5c, C-K1, C-R1, C-F4]

The release control should also preserve exceptions. A unit that fails a required check should be stopped and investigated, not averaged into the month's compliant stock. A listing that lacks an attached record should not retain the claim while someone promises to complete it later. A failed IMEI check and an incomplete wipe are restrictions on sale under the case, so removing the associated badge is not an adequate remedy. These are proposed controls derived from Exhibit 5, not assertions that the model has estimated the frequency or financial cost of such exceptions. [C-E5a, C-E5f, C-E6B1]

Table R11-04. Proposed exception decisions before launch. No new failure rate, staffing cost or sales loss is inserted into the audited forecast. [C-E5a to C-E5f, C-E6B1, C-R3]

| Exception | Immediate control | Evidence required for release | Financial treatment boundary |
|---|---|---|---|
| Reading below shown minimum | Stop affected claim and phone release | Retest or documented compliant remedy | No invented downgrade cost |
| Report photos do not match device | Hold listing | Correct identity-linked record | Do not count as certified merely because B1 selected |
| IMEI reported lost/stolen | Do not sell phone | Permitted resolution under case requirement | No unsupplied recovery value |
| Wipe incomplete | Do not sell phone | Completed wipe record | No sale credited before release |
| Creator advertisement label absent | Hold content publication | Visible advertisement disclosure | No new assumed media uplift |
| Unsupported named comparison | Remove proposed comparison | Tikau lacks required comparative data | Preserve internal strategic analysis only |

A reasonable objection is that this control review seems stricter than the model's simple fourth-test flag. It is stricter in execution because the flag is a convenient option-screen representation, not a compliance audit. The remedy is to disclose the abstraction, retain B1's enabling role and show the actual checklist judges can evaluate. This does not change the numerical ranking; it prevents an economic result from being presented as proof of conduct that the model never observes. [C-T4t, C-F16, independent-audit.json limitations]

Record freshness is another practical requirement implied by a claim about the phone being sold. The proposed report should identify which device was tested and which listing uses that result, so a later battery replacement or stock substitution does not leave old evidence attached to a changed unit. The case does not prescribe a test-validity interval or repeat-test cost, so the report does not invent one. It does require truthful phone-level claims, and that requirement is difficult to demonstrate if device identity, repair activity and publication record are disconnected. The proposed control is therefore traceability through release, with any additional operating design to be validated separately. [C-E5a, C-E5b, C-E6B1]

Exhibit for the deck: diagnosis slide battery-proof annotation and launch slide claim matrix, with A14 explicitly labelled indicative in the compliance appendix. The status quo's proof gap and the recommended plan's conditional compliance both remain visible. [C-E4c, C-E5a to C-E5f, A14]





## 12. Context: refurbished-market growth, supply limits and buyer reassurance need separate evidence

> Context only. Outside evidence in this section explains the setting and supplies no input to the case model or assessed slide statistics. [C-R1, C-F4]

**Answer.** The verified market material describes a growing secondary-device category with uneven supply, inconsistent market boundaries and unresolved buyer concerns. It supports treating trustworthy product information and after-sale service as commercially relevant capabilities. Tikau's actual diagnosis still comes from its own fictional exhibits, which show battery, condition and warranty concerns alongside a full lab; national growth does not remove that operating constraint. [B01-B08; C-E1A, C-E4a]

### Separate the category story from the company decision

Counterpoint's H1 2026 release reports Indian refurbished volumes growing 13% year on year while new-phone volumes fell approximately 11%. It estimates organized and unorganized shares at approximately 20% and 80%. The original release is dated 1 September, correcting the case's contextual attribution to August without changing any case input. Its public tracker release does not expose a complete sampling or estimation method. These are analyst estimates for the defined period, not audited company sales or a forecast of Tikau's demand. [B01-B05; S011]

The board therefore needs two different documents in its reasoning. The case model determines the orders, contribution and capacity that a proposed plan can produce under the exercise's rules. The external-source register explains why those rules describe a plausible commercial problem. Merging them would create an unsupported forecast. For example, applying a national growth rate to the current company order base would assume that Tikau follows the category, retains its mix and can process the additional demand. None of those links follows from a national estimate. The closed-data rule expressly excludes that calculation. [C-R1, C-F4]

Table R12-01 is an analytical boundary register. Its decisions concern how an author may use a statistic, rather than repeating a market-sizing exhibit.

| Table R12-01. Statistic boundary and permitted interpretation | Observation retained | Denominator or period risk | Decision for this report |
|---|---|---|---|
| Current Indian category direction | Refurbished growth and new-phone decline in H1 2026 | Units sold in different categories are not company orders | Use only to explain setting. [B01-B02; S011] |
| Earlier Indian direction | H1 2025 refurbished growth reported at 4.9% | Different comparison period; not a quarterly series | Do not calculate acceleration as a Tikau input. [B06; S010] |
| Global secondary-device direction | Global refurbished sales grew 5% in 2024 | Geography and period differ from India | Keep global observations in a separate context paragraph. [B09; S008] |
| Organized used-device forecast | IDC projected 20 million Indian units for 2024 | Forecast at publication; excludes peer-to-peer sales | Do not multiply by informal share to manufacture total market size. [B19-B20; S062] |
| Repair-related complaints | Official category counts rose over three fiscal years | No sales or installed-base denominator | Treat as a service-information signal, not defect incidence. [B25-B26; S072] |

A useful commercial reading is that buyers can choose a reused device while remaining selective about who supplies it. Category growth does not imply that buyers accept unsupported claims. Tikau's product-page problem is especially specific: the relevant visitor has already shown some interest in a device. The question is whether the available information and remedy justify completing that transaction. This differs from a broad awareness campaign aimed at persuading someone that refurbished phones exist. The case's lost-sale reasons and offer responses are the appropriate evidence for that narrower task. [C-E1A, C-E1B]

### Supply deserves equal weight in the market interpretation

The H1 2025 Counterpoint release describes limited availability of recent-generation premium devices despite demand, and attention to warranty and authenticity. A separate historical release describes longer holding periods as restricting secondary supply in 2022; its Indian growth figure concerns that year. Neither source establishes today's available Superb supply for Tikau. Their useful contribution is a warning about assuming that demand growth automatically creates a proportional stock of desirable used devices. [B06-B08; S010] [B13-B15; S009]

This distinction is material to a turnaround. A demand proposal can look persuasive when considered against the whole category while failing at the level of the next deliverable phone. The case already supplies separate limits for total sellable lab output and Superb wholesale supply. Those limits must be tested independently. An extra inquiry about a premium handset does not become a cheaper substitute for a different grade, and an accepted order does not create an inspected device. A board discussion that asks only about market demand will miss this second half of the transaction. [C-E4a, C-E4b, C-E6H4]

Table R12-02 separates demand, supply and proof so each produces an operational question. The proposed observations are management work to conduct; they are not findings from a new study.

| Table R12-02. Market signal translated into an operating inquiry | Why the signal matters | Proposed observation before expansion | What it cannot justify |
|---|---|---|---|
| Interest in premium reused devices | Desirable stock can be scarce | Record incoming and rejected stock by model and grade | A higher Superb supply assumption. [B07; C-E4b] |
| Longer consumer holding periods | Supply timing can diverge from inquiries | Track sourcing lead times and accepted offers separately | A fabricated wholesale price increase. [B15; C-R3] |
| Concern over authenticity | One defect allegation can concern origin or lock status | Keep identity screening separate from functional tests | A permanent ownership guarantee. [B08; C-E5f] |
| Concern over warranty | Buyers need a usable remedy | Test comprehension of coverage and the claims route | A measured conversion lift. [B08; C-E1B] |
| Preference for seeing condition | The information gap can concern a particular unit | Check whether listed photos identify the delivered handset | Permission to describe refurbished goods as new. [C-E1A, C-E5b] |

### Definitions prevent misleading market arithmetic

IDC's October 2024 analysis includes second-hand and refurbished devices moving through organized players and explicitly excludes peer-to-peer transactions. It forecasts a larger annual market by 2028 and describes an extended replacement cycle. Its boundary is narrower than a definition that includes private resale. FDM CCS Insight's commentary includes peer-to-peer sellers and small shops in an estimated 85% unorganized share; its separate 4% figure compares organized secondary sales with the primary market. Those percentages have different denominators and cannot be substituted for each other. [B19-B22; S062] [B37-B38; S055]

The consequence is a source-conflict resolution, not an invitation to average estimates. An organized-share estimate and a primary-market ratio can both be internally consistent while answering different questions. Combining them into a new market size would add assumptions about category coverage and time alignment. This report has no reason to perform that exercise: the company's short-term decision is constrained by supplied economics and capacity. The context section should demonstrate definition discipline without pretending that a larger external dataset solves the fictional case. [C-R1, C-F4]

| Table R12-03. Denominator reconciliation | Numerator | Denominator | Safe comparison | Unsafe comparison |
|---|---|---|---|---|
| Organized secondary share | Organized used-device transactions | All used-device transactions under the source definition | Within-source channel composition | Organized sales divided by new-phone sales. [B03; S011] |
| Secondary-to-primary ratio | Organized secondary transactions | Primary smartphone market | Relative scale under that source's definitions | Share of the total used market. [B38; S055] |
| New-phone shipment estimate | OEM shipments including stated B2B scope | Shipment universe in the stated period | New-device supply direction | Retail consumer spending or Tikau revenue. [B16-B18; S012] |
| Used-device forecast | Projected organized second-hand and refurbished units | Future period covered by the forecast | Planning context with a forecast label | Realized market outcome after the forecast date. [B20-B21; S062] |
| Complaint trend | Recorded category complaints | Fiscal-year reporting period | Change in recorded complaints | Probability that a purchased phone fails. [B25; S072] |

Counterpoint's 2024 Indian new-smartphone release estimates 153 million shipments, 1% unit growth and 9% wholesale-revenue growth, with preliminary figures including B2B OEM shipments. It explicitly uses wholesale prices. This provides a useful illustration of units and value moving differently; it cannot establish a retail selling price, a refurbished margin or Tikau's revenue potential. A separate IDC worldwide forecast for 2025 describes used-device growth exceeding new-device growth. That is a dated global forecast, with no authority to replace a realized Indian series. [B16-B18; S012] [B23-B24; S063]

A buyer's affordability problem also cannot be read directly from a global average. Counterpoint's global release distinguishes technically refurbished devices from as-is phones that receive cleaning and repackaging without technical work. Its global brand mix and average prices refer to that report's coverage. The distinction helps the team ask what work sits behind a label; the reported global price level is deliberately excluded from this report's Indian operating calculations. Relabelling such a price in rupees would bypass the required local cost structure. [B09-B12; S008] [C-R4, C-F4]

### Complaint and survey context should change the questions asked

The official repairability release reports mobile-and-tablet complaints of 19,057, 21,020 and 22,864 across FY2022-23 to FY2024-25. The category is broader than refurbished phones, and complaint counts do not identify unique defective devices or a failure probability. The committee's proposed repairability-information display remains a recommendation in the verified release. It suggests attention to service accessibility and information at purchase; it does not establish a new universal legal display obligation. [B25-B27; S072]

For Tikau, this external context adds a question about the usefulness of the remedy after purchase. A warranty term can be easy to print and difficult to use. The case already reports repair time and repeat visits, so the research can ask how a family buyer would locate support, understand eligibility and know what happens during a repair. A proposal should specify the handover record and escalation route without inventing a service-level achievement. This is a different task from lengthening the advertised term. [C-E4d, C-E6B2]

| Table R12-04. Post-sale information as a service decision | Information gap | Proposed response | Evidence of execution needed | Failure interpretation |
|---|---|---|---|---|
| Buyer cannot find the claims route | Remedy exists only in advertising | Put contact and invoice reference on the handover record | Completed sample handover and support check | Communication failure, even if terms are valid. [C-E4d, C-E5a] |
| Buyer confuses return and warranty | Different triggers become one vague assurance | Explain both routes separately | Comprehension test and approved terms | Misunderstanding risk, not measured dissatisfaction. [C-CO2, C-E6B2] |
| Service requires repeated visits | Ownership inconvenience persists | Track claim stages and revisit reasons | Claim-linked service history | Process defect requiring diagnosis. [C-E4d] |
| Repairability information is unavailable | Buyer cannot evaluate support | Disclose actual service arrangements | Current repair policy and parts records | Information gap, not automatic legal breach. [B26-B27; C-E5a] |

A commissioned European survey release describes performance doubts and concern about losing manufacturer warranty. It covered five European countries over a stated period in March 2025, and reports intended future behavior among previous refurbished buyers. These details matter because a European intention sample does not estimate Indian demand or actual repurchase. Cashify's own whitepaper commentary describes changes within its shipment mix and reasons people retain unused phones, including data concerns. It is vendor evidence from a selected customer base, useful for identifying interview topics rather than national prevalence. [B31-B33; S045] [B28-B30; S052]

### Choose research questions that could change execution

The planned validation should separate comprehension from preference. A buyer may like the idea of a battery guarantee while misunderstanding what the reading means. Another may understand the report but find the repair process inconvenient. A third may distrust the seller's ability to carry out the promise. Each answer requires a different response. Repeating the same broad trust question would make these problems look interchangeable and could lead to an advertising change when an operational correction is required. These are proposed research distinctions, not findings attributed to the outside surveys. [C-E1A, C-E1B, C-R3]

| Table R12-05. Proposed validation decision tree | Observation sought | Interpretation to test | Appropriate next action | Decision to defer |
|---|---|---|---|---|
| Buyer misreads the battery percentage | Incorrect explanation in own words | Measurement communication is unclear | Revise explanatory copy and retest | Changing the battery threshold without evidence. [C-E5a] |
| Buyer cannot find warranty exclusions | Failure to locate terms | Information hierarchy is weak | Place terms beside the promise | Assuming a longer term alone solves comprehension. [C-E6B2] |
| Buyer distrusts report identity | Cannot connect report and handset | Unit linkage is missing | Add a stable report reference | Buying more traffic before fixing identity. [C-E6B1] |
| Buyer understands but declines price | Clear explanation followed by refusal | Affordability may remain binding | Analyze separately from trust objections | Importing national demand elasticity. [C-E1A, C-F4] |
| Buyer needs physical inspection | Requests handling before purchase | Channel reassurance is valuable | Test store-assisted explanation | Treating every online visitor as store-convertible. [C-E1A, C-E1D] |

### Board use and limitations

The strongest competing reading is that category momentum makes a price-led volume strategy attractive. The external sources cannot decide that question. They describe a market with multiple customer needs, supply boundaries and seller types; they do not show the marginal profitability of Tikau's chosen offer. The internal option screen must therefore carry the verdict on price-led expansion. Context can make the board alert to competitor activity, but it cannot rescue an option that fails the supplied economics. [C-B4, C-R1, T14]

A second reading is that a national trust problem automatically favors the most elaborate certification system. That also exceeds the evidence. Buyers need information that resolves a decision, and the company needs a process it can perform on each unit. The report's purpose should be specified before its visual design or number of checks. An omitted high-value field can matter more than a long checklist, while an accurate field that cannot be linked to the delivered phone is weak evidence for the transaction. This is the team's proposed design standard under Exhibit 5, not a finding that a particular commercial system has succeeded. [C-E5a, C-E6B1]

| Table R12-06. Context-to-decision firewall | Context can inform | Case authority retained | Review control | Escalation condition |
|---|---|---|---|---|
| Category relevance | Reason to investigate buyer confidence | Exhibit-based demand and cost assumptions | Separate context and model source tags | External growth appears in a forecast cell. [C-R1, C-F4] |
| Sourcing questions | Need to examine availability and provenance | Supplied Superb and lab limits | Reconcile delivered volumes | Market size is used as available inventory. [C-E4a, C-E4b] |
| Service design | Topics for a usable warranty explanation | Supplied claim rates and costs | Compare promises with operating records | Vendor policy becomes a claimed outcome. [C-E2, C-E5a] |
| Research priorities | Questions for future interviews | No invented primary research | Label every proposed test | Intention evidence becomes realized uplift. [C-E1B, C-R3] |

Exhibit for the deck: the Trust slide's issue tree and the Customer slide's evidence caveat use the case alone. The external market tables remain in this research section and supply no assessed chart values. [C-F4]

## 13. Context: PhoneBazaar, neighbourhood shops and ₹10,000 new phones bound Tikau's price on both sides

> Context only. Public comparables explain possible trust mechanisms. The competitive corridor below uses fictional case inputs, and no case company is identified with a real business. [C-R1, C-F4]

**Answer.** Tikau occupies a difficult middle position: local sellers offer lower prices, the named organized competitor offers a longer warranty at a premium, and a new budget phone competes with Fair. A defensible response must make the paid-for difference understandable without implying that every buyer values it equally. The recommendation's price increases remain a case-model decision; the external comparisons below identify questions about promise design and evidence, not a market-validated price premium. [C-K1, C-K2, C-K3, C-E6B2]

### The corridor is a relative-price argument

The case describes PhoneBazaar at approximately 6% above Tikau's current prices, while neighborhood sellers sit 10% to 15% below. These are case-level comparisons, with no unit-level public competitor dataset. Under B2, Superb and Good prices increase 4%. On a current Tikau price index of 100, the new index is 104 and the case competitor index is 106. The relative gap is 1 − 104/106, or approximately 1.9% below the competitor. This is internal arithmetic under a simplifying like-for-like reading; it cannot support a named public price claim because the case expressly says Tikau lacks showable comparison data. [C-K1, C-K2, C-E6B2, C-E5c]

A percentage-point difference and a relative percentage are different quantities. The index difference is two points, while the relative percentage uses the competitor's price as denominator. Neither calculation proves that equivalent model, storage, condition, warranty and delivery terms are being compared. The calculation tells the board how close its new price may move to the supplied competitor anchor. Marketing must still avoid presenting that internal anchor as a verified offer comparison. This preserves useful strategic analysis without converting a case simplification into a claim a buyer might act on. [C-E5a, C-E5c, C-R3]

| Table R13-01. Case price corridor and strategic consequence | Relative position using current Tikau = 100 | Offer difference supplied by the case | Implication for Tikau | Boundary |
|---|---|---|---|---|
| Neighborhood sellers | 85 to 90 | Usually no bill or warranty; uncertain battery and parts | Explain the paid-for documentation and remedy | Do not generalize this case description to every real shop. [C-K2] |
| Current Tikau | 100 | Refurbished grades, existing warranty and returns | Current price needs evidence buyers can use | Existing labels do not resolve the spot-check mismatch. [C-CO2, C-CO5, C-E4c] |
| B2 Superb and Good | 104 | Battery and warranty changes under the option | Make the funded promise legible | This is a modeled option price, not observed willingness to pay. [C-E6B2] |
| PhoneBazaar case anchor | Approximately 106 | Organized presence and longer warranty | Expect comparison with a close premium alternative | Named public comparison lacks required proof. [C-K1, C-E5c] |
| New budget phone | ₹10,000 anchor rather than an equivalent index | New status at a competing entry price | Fair must justify its particular use case | Product equivalence and features are not supplied. [C-K3] |

The Fair alternative deserves symmetric treatment. A new handset may offer a different model, capability or brand from the used handset under consideration. The case gives only the price anchor, so this report cannot invent a superior camera, processor or service network for either side. The correct question is what the buyer receives at the offered price and what uncertainty remains. A Fair unit with visible wear cannot be advertised through language that suppresses that fact. Keeping its description honest may narrow the audience, which is preferable to funding a promise whose economics and interpretation are unclear. [C-CO5, C-K3, C-E5b]

### Strategic groups compete through different reassurance systems

A strategic-group map should use observable dimensions instead of assigning a high-quality score to whichever company offers the longest warranty. Useful dimensions include the visibility of unit evidence, clarity of the remedy, physical inspection opportunities and the source of the warranty. These dimensions can be compared without pretending that the report has independently measured the quality of every seller. A policy page establishes what an organization says it offers. A service outcome requires separate evidence about what happened after a qualifying claim. [C-E5a; G01-G30]

| Table R13-02. Strategic-group map as a buyer decision comparison | Buyer reassurance sought | Evidence available in the case | Main exposure for Tikau | Proposed response |
|---|---|---|---|---|
| Price-led local purchase | Affordability and immediate inspection | Lower case price and informal transaction terms | A documented promise may look expensive | Demonstrate unit evidence and explain its practical use. [C-K2, C-E6B1] |
| Organized refurbished purchase | Known process and repair accountability | PhoneBazaar's scale and warranty anchor | Tikau may appear less established | State the actual responsible party and route to remedy. [C-K1, C-E5a] |
| New budget purchase | Certainty about prior use | New-device price anchor | Refurbished status itself may be rejected | Make condition explicit and accept segment limits. [C-K3, C-E5b] |
| Tikau report-led purchase | Evidence attached to the chosen unit | B1 defines photos, measurement and checks | Report may be perceived as self-issued advertising | Link each field to a record and disclose scope. [C-E6B1] |
| Tikau store-assisted purchase | Ability to see and discuss the unit | Case visitor research and store channel | Advice can diverge from published terms | Use the same approved proof and remedy explanation. [C-E1A, C-E3, C-E5a] |

The useful external analogies are narrower than a competitive ranking. Google Merchant guidance requires product condition in submitted data to agree with the landing page, illustrating the need for consistent condition information across channels. ASCI's practical creator guidance asks brands to explain benefits correctly and include disclosure expectations in contracts. These sources support operational questions about data consistency and message control; they do not show that Tikau currently uses either system or that compliance increases its sales. [F20-F21; S040] [F16-F19; S048]

The proposal should therefore maintain a shared claim dictionary across product pages, store scripts, referral messages and creator briefs. Each field needs the same meaning even when space differs. A store employee can explain an exclusion at length, while a short creator video may only point to the relevant terms, but neither should replace a measured condition with a broader impression. The dictionary would be a proposed control, not a substitute for testing the phone. A perfectly synchronized incorrect claim is still incorrect. [C-E5a, C-E5b, C-E5e]

### Five forces identify bargaining pressure without inventing scores

Supplier power is salient because the case places a hard limit on Superb wholesale supply. Buyer power is salient because visitors compare several purchase routes and identify multiple concerns. Substitutes include the stated new budget phone. Rivalry is visible in the price corridor and warranty comparison. Entry should be discussed cautiously: the case does not provide startup costs, local regulation or competitor economics from which to calculate an entry barrier. This is a qualitative application of Porter's framework using case evidence, with unknowns left visible. [C-E4b, C-E1A, C-K1, C-K2, C-K3]

| Table R13-03. Five-forces diagnosis and decision consequence | Case evidence | Pressure interpretation, team judgment | Decision consequence | Missing information |
|---|---|---|---|---|
| Supplier bargaining | Superb supply cap | Availability matters alongside purchase cost | Do not aim all growth at capped stock | Supplier concentration and contract terms. [C-E4b] |
| Buyer bargaining | Alternatives and product-page objections | Buyer can decline or choose a different route | Resolve objections at the product decision | Observed segment-specific price elasticity. [C-E1A, C-K1-C-K3] |
| Substitution | New budget phone competes with Fair | New status can offset a lower used-device specification | Keep Fair claims and economics distinct | Like-for-like feature comparisons. [C-K3] |
| Rivalry | Organized premium and local discount corridor | Tikau must explain its middle position | Avoid an unsupported cheapest-price claim | Competitor response timing and unit economics. [C-K1, C-K2, C-E5c] |
| Entry | No quantified entry-cost evidence | No justified barrier rating | Build reliable processes before claiming a moat | Investment, skills and access data. [C-R3] |

This framework does not produce a numerical industry-attractiveness score. Its purpose is to identify a decision consequence that the rest of the report can test. For example, a capped grade limits the value of targeting buyers who mainly want that grade, regardless of an attractive category trend. Likewise, strong buyer choice does not automatically justify a discount when the discount moves mix toward a thin-margin grade. The option screen supplies those numerical consequences elsewhere; the framework prevents the qualitative discussion from contradicting them. [C-E4b, C-E6A, T11, T14]

### Customer acquisition should be compared by value and fit

Schmitt and colleagues' referral study follows customers at a German bank and examines contribution and retention separately from acquisition cost. It is observational and not a handset experiment. A related paper on the same banking setting examines matching and social enrichment, including dependence on the referrer's continued presence. These are distinct analyses of a shared setting rather than independent replications. They justify separating possible referral mechanisms when designing validation, not borrowing a retention premium or lifetime-value coefficient for Tikau. [F01-F05; S015] [F06-F10; S016]

The case's referral channel already has its own cost and grade mix. Its apparent attractiveness could arise from those economics rather than from a universal social-trust effect. A sound explanation should distinguish a financially attractive delivered order from a causal explanation for why it arrived. For proposed interviews, ask what the referrer actually supplied: a recommendation, a demonstration, help choosing a model, or assistance resolving a concern. Those answers would guide execution but remain unmeasured until the validation occurs. Existing channel costs stay fixed in the January-to-March model. [C-E3, C-F12, A02]

| Table R13-04. Channel advantage claims and alternative explanations | Candidate explanation | Observable implication to test | Case constraint | Avoided overclaim |
|---|---|---|---|---|
| Referrer helps match needs | Buyer can describe relevant advice | Record advice before offering an incentive | Case channel economics already include its coupon | Every referral is trusted or more loyal. [F06-F10; C-E3] |
| Store enables inspection | Buyer identifies a concern resolved in person | Observe explanation and handling tasks | Store demand is separate from website funnel | All abandoned website orders can move to stores. [C-E1A, C-E1D] |
| Creator explains proof | Buyer understands report scope after exposure | Test comprehension of a concrete field | Paid content must carry ad disclosure | Creator reach proves credibility. [C-E5e] |
| Marketplace supplies convenience | Buyer selects route despite common product | Ask about route separately from unit choice | Commission remains part of channel economics | Dashboard acquisition cost equals total channel cost. [C-E3N2, C-E3N6] |
| Price attracts a different mix | Buyer chooses a cheaper grade or substitute | Separate grade preference from traffic | Option A has specified mix changes | Every added order has baseline contribution. [C-E6A] |

A possible objection is that elaborate evidence slows the sale. That is plausible enough to test, but it does not justify hiding the required information. The proposed design can use a concise summary with accessible detail and a direct route to the unit report. Comprehension and speed should both be observed. A buyer who cannot find the battery reading may complete checkout quickly while misunderstanding the purchase, so transaction speed alone would be a poor success criterion. The report should evaluate explanation quality alongside commercial measures. [C-E5a, C-E6B1, C-R3]

### Public comparables supply design dimensions rather than case identities

Amazon India's public program page verifies the existence of a Renewed seller program and admission criteria. It does not establish the buyer warranty, remedy or battery threshold for every listed product. Apple Certified Refurbished describes testing and a one-year limited warranty, with a new battery and shell specifically for refurbished iOS devices. These policies demonstrate that a program name and a detailed product-specific promise are different evidence objects. Neither establishes availability, unit quality or outcomes for Tikau. [G30; S032] [G07-G09; S047]

A public benchmark table should record unknowns with the same prominence as advertised strengths. If battery coverage is missing, the analyst should not fill it from a different product page or country. If a replacement policy is visible but a refund route is not, the correct entry remains limited to the available terms. This preserves symmetry: the team should not compare a fully qualified Tikau promise with an unqualified competitor headline, or the reverse. The detailed comparable analysis in section 17 follows that discipline. [C-E5a, C-E5c]

| Table R13-05. Competitive-response rehearsal, proposed | Possible rival move | Why it could matter | Tikau response within approved scope | Evidence required before a broader response |
|---|---|---|---|---|
| Rival matches warranty duration | Headline difference narrows | Duration alone becomes less distinctive | Show the existing report and actual claims route | Current comparable terms and service evidence. [C-K1, C-E6B1, C-E6B2] |
| Local seller lowers price | Affordability gap widens | Some buyers remain price-constrained | Keep funded promise and segment focus | Case-compatible alternative economics. [C-K2, T14] |
| Rival advertises more checks | Checklist length becomes a comparison cue | Buyer may mistake count for assurance | Explain relevant measured fields | Test definitions and unit-level records. [C-E5a] |
| Marketplace changes presentation | Required disclosure becomes less visible | Channel page can weaken the promise | Escalate listing consistency before promotion | Approved listing screenshots and change history. [C-E5b, C-E5e] |
| Buyer asks for a named price comparison | Staff may improvise an unsupported claim | Public statement could exceed proof | Explain Tikau's own price and included terms | Showable like-for-like evidence, currently absent. [C-E5c] |

The strategic conclusion is bounded. Tikau should compete on a promise it can fund and prove for the chosen buyer, while accepting that a lower-price local offer and a new budget handset remain credible alternatives. It cannot claim a universal superiority from the available information. The board can still choose the recommended plan because the case's audited screen evaluates its own constraints and outcomes. Keeping the public-comparable evidence separate makes that recommendation easier to defend: its economics do not depend on an invented competitor identity, imported market share or borrowed conversion result. [C-R1, C-E5c, T13, T15]

A proposed competitor-monitoring file should distinguish an offer change from a change in the underlying comparison. Staff should record the exact model, storage, grade, seller, delivery inclusion and policy version before escalating a price gap. If the available product differs on a material attribute, the observation remains a lead for diligence. It cannot become a comparative advertisement. This prevents a competitor response from being exaggerated by comparing a discounted damaged unit with a differently specified Tikau handset. The case provides no such live comparison file, so this is a future control rather than new evidence. [C-E5c, C-R3]

The board should also ask whether responding would change the approved plan or only its explanation. Clarifying the included report is an execution adjustment. Adding a service, cutting a price or funding an extra campaign changes economics and requires separate assessment. A monitoring process is useful only if it routes those decisions correctly. Otherwise staff could react to every visible offer by weakening the promise or spending money absent from the case screen. [C-E6A, C-E6B1, C-E6B2, C-F12]

Exhibit for the deck: the Customer positioning panel may use the case corridor and explain the paid-for proof. A named competitor-price slogan remains excluded, and the full public-comparable register stays in the research. [C-E5c, C-F4]

## 14. Context: Indian consumer law sets the claims Tikau may make, from the CCPA's dark pattern list to ASCI's influencer labels, review standards, Sanchar Saathi and the e-waste rules

> Context only. This section distinguishes verified legal instruments, scheduled commencement, explanatory material and proposed operating controls. Exhibit 5 governs the competition's claim assessment. [C-F16]

**Answer.** Tikau should use Exhibit 5 as its direct claims checklist and use the external legal material to understand implementation duties and evidence boundaries. A paid report cannot by itself establish truthful advertising, consent, completed erasure, a lawful listing or an accessible remedy. The verified sources include final rules with different commencement stages, so a document's publication date must never be treated as proof that all its provisions already apply. [C-E5a-C-E5f; C16, C35-C40]

### Distinguish authority, commencement and explanatory support

The Consumer Protection Act's definitions include misleading advertising and misrepresentation of rebuilt or second-hand goods as new. The final 2022 misleading-advertising guidelines require honest claims and substantiable factual descriptions, and prevent a disclaimer from curing a misleading main statement. The final 2023 dark-pattern guidelines address specified practices including false urgency, basket sneaking, drip pricing and disguised advertising. These instruments supply different routes to evaluating a tactic; a truthful footnote cannot make a false headline safe. [C20-C21; S005] [C06-C09; S004] [C01-C05; S007]

The verified 2026 e-commerce amendment is final, with express commencement on 1 January 2027. It was therefore scheduled rather than already operating on the research access date. The amendment covers prominent sponsored-listing identification, prior-price display using the lowest preceding-30-day price, and yearly dark-pattern self-audits with certificate display. Its timing matters to the January-to-March implementation, while the source must remain labelled as not yet in force on 28 October 2026. The inspection record specifically checked the PDF page where text extraction lost digits. [C16-C19; S003]

| Table R14-01. Authority and temporal status register | Verified source category | Status relevant to this report | Practical use | Interpretation excluded |
|---|---|---|---|---|
| Consumer Protection Act | Enacted statute | Operative consumer-protection framework; original text read | Define misleading or misdescribed offers | Treat original PDF as a consolidated update service. [C20-C21; S005] |
| Misleading-advertising guidelines | Final statutory guidelines | Effective from Gazette publication | Require support for objective claims | Use a disclaimer to repair a misleading headline. [C06-C10; S004] |
| Dark-pattern guidelines | Final statutory guidelines | In force from publication | Review interface and checkout tactics | Treat annexure examples as adjudication of every fact pattern. [C01-C05; S007] |
| E-commerce amendment | Final notified amendment | Scheduled for 1 January 2027 | Prepare launch controls for commencement | Describe it as operating in October 2026. [C16-C19; S003] |
| Online-review standard explanation | Official explanatory account | Voluntary status confirmed in parliamentary answer | Design review governance | Claim full BIS standard inspection or mandatory status. [C22-C25; S017, S073] |
| Influencer guidance | Final self-regulatory guidance | ASCI framework, distinct from legislation | Specify ad labels and material connections | Attribute statutory fines to ASCI. [C26-C31; S050, S051] |

The original 2020 e-commerce rules address review impersonation, affirmative purchase consent, disclosure of warranty and refund information, and specified take-back duties for defective or misdescribed goods. They also provide complaint acknowledgment and redress periods. The inspected PDF is an original instrument subject to amendments, so a claim about the applicable launch regime requires reading it with the verified later amendment. A seller's voluntary return policy does not erase the duties described in those rules. [C11-C15; S006]

For implementation, the proposed control owner should record three separate dates: when an instrument was notified, when the relevant provision commences, and when Tikau's process was reviewed. This prevents an apparently current policy from being built on an obsolete assumption. A product manager cannot determine the status of a rule from a web page's upload month. A legal reviewer also needs the scope of the activity, the relevant entity and any amendments before concluding that a particular obligation applies. This is a proposed governance method, with no assertion about Tikau's actual legal files. [C16, C35-C48]

### Map each Exhibit 5 tactic to an auditable decision

The case's battery rule is especially strict: every shown claim must be true for that phone, with a reading taken in Tikau's own lab. Its parts rule distinguishes compatible replacements from brand-made parts. Its comparison rule requires showable data that Tikau currently lacks. These instructions can be applied directly without debating whether an external instrument would permit a narrower exception. The real-world advertising guideline's qualified occasional-lapse provision does not override the exercise's every-phone standard. [C-E5a, C-E5b, C-E5c; C10]

| Table R14-02. Rule-by-tactic decision matrix | Case rule | External context | Required proposed evidence | Release decision |
|---|---|---|---|---|
| Battery percentage on listing | Own-lab reading; true for shown unit | Objective factual claims need substantiation | Unit-linked reading and approved description | Hold if provenance or unit link is missing. [C-E5a; C07] |
| Refurbished description | Must state refurbished; prohibited new-like phrases | Reconditioned goods must not be misrepresented as new | Approved title, condition field and page capture | Remove incompatible language before publication. [C-E5b; C21] |
| Genuine-parts claim | Every replaced part must be brand-made | Main claim cannot be repaired by a disclaimer | Complete replaced-parts provenance | Refuse for compatible-battery units. [C-E5b; C08] |
| Named competitor comparison | Showable evidence required | Factual comparisons must be supportable | Like-for-like dated comparison file | Refuse while the case says evidence is absent. [C-E5c; C07] |
| Countdown or scarcity prompt | No false urgency | False scarcity is a specified dark pattern | Real stock and timing logic, if used at all | Suppress fabricated urgency. [C-E5d; C02] |
| Review reward | Verified buyer, disclosed and sentiment-independent | Review impersonation prohibited | Order linkage and unconditional reward record | Exclude fabricated or selectively rewarded reviews. [C-E5e; C11] |
| Creator endorsement | Paid content labelled advertisement | Material connection disclosure | Approved creative and visible disclosure capture | Pause unlabelled content. [C-E5e; C09] |
| Sale readiness | Completed wipe and acceptable IMEI status | Registry checks have limited scope | Separate erasure and screening records | Do not release a failed or unresolved unit. [C-E5f; C33-C34] |

The matrix is intended to change the release process. A claim should have a defined evidence object before it reaches a designer or creator. The person approving the advertisement must be able to retrieve the record and understand its limits. If the field is unavailable, the response is to withhold or qualify the supported claim, not fill the gap with a generic badge. This makes the same decision repeatable across a website listing, a store card and a product demonstration. [C-E5a, C-E5e]

### Reviews and endorsements require different checks

A March 2026 parliamentary answer still describes IS 19000:2022 as voluntary and distinguishes the earlier self-audit advisory from later rulemaking. The official BIS framework explanation describes review-author verification and a written code of practice. It is explanatory material, not the paid full standard. Its examples of identity checks cannot establish that an author bought a phone. The case's verified-buyer requirement therefore needs a transaction link in addition to any account or identity check. [C22-C25; S017, S073]

ASCI's final guidance treats noncash benefits as material connections and requires prominent disclosure at viewing. Its short-video rule specifies at least three seconds for videos lasting no more than fifteen seconds; the older two-second draft is excluded. The official guide explains ASCI's self-regulatory role and lack of fine-imposing power. Its FAQ addresses disclosure at the beginning and end of live or audio content. These are format controls rather than evidence that an endorsement's product claims are correct. [C26-C29; S051] [C30-C31; S050] [C32; S049]

| Table R14-03. Review and creator controls separated by failure mode | Object being checked | Proposed control | Why the adjacent control is insufficient | Owner proposed |
|---|---|---|---|---|
| Real account | Identity or account verification | Verify usable contact and account record | A real person may never have purchased | Review operations. [C24; C-E5e] |
| Real purchase | Order-linked buyer status | Match review eligibility to transaction | Purchase does not guarantee honest wording | Review operations. [C-E5e] |
| Incentive neutrality | Reward policy and payment | Reward regardless of sentiment and disclose it | Disclosure alone does not remove conditional rewards | Marketing finance. [C-E5e] |
| Material connection | Creator contract and benefits | Record cash, barter and free-product connections | A truthful testimonial can still hide sponsorship | Campaign owner. [C26, C31] |
| Visible disclosure | Published creative | Check the actual viewing experience | A contract clause does not prove visible execution | Campaign quality reviewer. [C27-C28, C32] |
| Product substantiation | Statement and evidence file | Approve only supported facts | An ad label does not substantiate performance | Claims approver. [C07, C-E5a] |

The proposed review workflow should preserve critical feedback rather than interpret every negative review as a moderation problem. The case requires the reward to be independent of sentiment, so staff need a written instruction that a complaint does not disqualify the buyer. Moderation can address relevance and authenticity without turning into an undisclosed positivity filter. The report does not claim that such a policy has been implemented or that it would create a particular rating. Its function is to make the rule operational before a campaign asks buyers to contribute. [C-E5e]

### Privacy commencement does not replace transfer hygiene

The DPDP Act allows different provisions to commence on different dates. Its final commencement notification activates definitions and institutional provisions while deferring major data-fiduciary duties and rights to a later tranche; consent-manager-related provisions have a separate one-year stage. The final Rules likewise distinguish immediate, one-year and eighteen-month stages. The standalone notice requirement belongs to the later tranche. December corrigenda amend commencement wording. The dates in the verified Gazette materials have nominal and electronic identifiers, so this report retains the stated stage formulas rather than inventing a day-level conversion. [C35; S066] [C38-C39; S068] [C36-C37; S067] [C40; S069]

These stages should be recorded in a launch compliance calendar. They do not justify retaining a prior owner's personal information in a phone being resold: the case independently requires completed erasure. They also do not prove that a factory-reset label represents a successful operation on a particular device. Privacy-law commencement, customer authorization, technical erasure and sale readiness are separate questions. A process can meet one and fail another. The detailed technical controls in the next section deal with that distinction without claiming that a US technical guide is Indian law. [C-E5f, C-R3]

| Table R14-04. Data and device transfer responsibilities | Responsibility | Evidence to retain, proposed | Dependence on commencement | Consequence of missing evidence |
|---|---|---|---|---|
| Authority to handle device | Seller handover and service instruction | Consent or ownership-transfer record appropriate to activity | Requires activity-specific review; no blanket conclusion | Hold transfer pending clarification. [C35-C40; C-E5f] |
| Removal of prior data | Completed operation and outcome | Unit-linked sanitization record | Independently required by the case | Do not sell. [C-E5f] |
| Claim about erasure | Certificate wording and scope | Method, result and approver | Substantiation remains a separate claim issue | Remove unsupported certification language. [C-E5a, C07] |
| Buyer-facing notices | Notice, purpose and data practices | Version-controlled notice review | Match the applicable scheduled tranche | Escalate gaps before relevant commencement. [C37] |
| Ongoing records | Access and retention controls | Defined permissions and disposal policy | Specific obligations require scope review | Do not assume a report authorizes indefinite retention. [C35-C40] |

Sanchar Saathi's official explanation describes Know Your Mobile for pre-purchase checks and CEIR's lost-or-stolen-device blocking and unblocking process. A registry response is bounded: it is not a battery test, ownership-title adjudication or erasure result. A clean response cannot be expanded into a promise that no future report or lock issue will arise. The operating record should preserve the lookup's date and device identity so a later question can be investigated accurately. [C33-C34; S071]

### Waste and standards claims need entity and activity scope

The original E-Waste 2022 rules commenced in April 2023, with scope exclusions including separately regulated waste batteries and the specified micro-enterprise category. Covered refurbishers face registration, recycling and reporting duties; actual applicability requires activity and entity review with amendments. CPCB's implementation SOP describes registration categories and supporting facility documents. Its administrative process is context for a compliance file, not evidence of Tikau registration. [C41-C43; S026] [C44-C45; S014]

Battery-waste rules cover batteries under their stated scope and require segregation and transfer to appropriate registered handlers. Their battery-refurbisher category concerns refurbishing batteries, which differs from replacing a handset battery. A compatibility decision for a purchased replacement therefore cannot establish whether Tikau itself falls into that activity category. Keep removed-battery handling, supplier conformity evidence and any applicable registration in separate records. [C46-C48; S013]

| Table R14-05. Waste and standards applicability worksheet | Issue to establish | Evidence required, proposed | Verified contextual source | Unsupported shortcut rejected |
|---|---|---|---|---|
| Entity coverage | Business activity and applicable exclusions | Entity classification and activity map | Original E-Waste rules | All sellers automatically share identical registration duties. [C41-C43] |
| Registration category | Actual covered activity and site | Registration and facility documents | CPCB SOP | A product report proves facility authorization. [C44-C45] |
| Removed batteries | Segregation and authorized downstream handling | Handover and recycler records | Battery-waste rules | Swapping a battery proves the firm refurbishes batteries. [C46-C48] |
| Battery safety standard | Applicable product and conformity scope | Supplier test and conformity documentation | BIS laboratory listing | An 85% health reading proves safety conformity. [C51-C52] |
| Laboratory accreditation | Accredited entity and testing scope | Current certificate and scope, if obtained | NABL scheme description | An in-house lab is automatically accredited. [C49-C50] |

NABL describes accreditation of testing laboratories against ISO/IEC 17025 and permits in-house labs to seek it. The source does not establish that Tikau is accredited. The BIS live laboratory listing identifies portable lithium battery safety-standard titles and test headings; the full standards text was not inspected. It does not establish a universal remaining-health sales threshold. These distinctions prevent a generic certification badge from combining measurement, safety, accreditation and warranty into one unsupported statement. [C49-C50; S027] [C51-C52; S025]

### Release governance and the credible competing reading

A reasonable concern is that the proposed control file becomes too complex for launch. The response should be a concise responsibility structure, not a reduction in required truthfulness. The board can require each public claim to have an owner, a supporting record and a stop condition, while specialists maintain detailed legal and technical files. The customer sees a clear explanation; the company retains the depth needed to substantiate it. This is a proposed operating design with no added claim of legal certification. [C-E5a-C-E5f]

| Table R14-06. Proposed claims-release responsibilities | Release object | Accountable role | Approval basis | Stop condition |
|---|---|---|---|---|
| Unit report | Lab lead | Completed measurements and checks | Evidence matches the actual handset | Missing reading, wipe or screening record. [C-E5a, C-E5f] |
| Product page | Commerce lead | Approved unit report and terms | Refurbished and parts disclosures visible | Unsupported universal or genuine-parts wording. [C-E5b] |
| Campaign creative | Marketing lead | Approved claim dictionary | Actual published format inspected | Hidden ad disclosure or false urgency. [C-E5d, C-E5e] |
| Review request | Customer operations lead | Verified purchase and reward rules | Sentiment-independent execution | Reward depends on positive review. [C-E5e] |
| Compliance calendar | Designated compliance reviewer | Instrument, scope and commencement record | Relevant changes reflected before launch | Scheduled provision treated as already active or ignored. [C16-C19, C35-C40] |

The strongest limitation is that this research has not audited a real Tikau legal entity, contracts, facilities or live interfaces. It provides a verified source map and a proposed control architecture. The exercise's numerical compliance flag remains conditional on implementing Exhibit 5; it cannot certify legal compliance in the real world. That boundary should be visible to the board because otherwise an affordable line in the model could be mistaken for proof that the operational work is finished. [C-F16, C-E5a-C-E5f; independent-audit.json limitations]

For a proposed review-reward audit, sample the entire chain from eligibility to payout. The reviewer should see that the customer bought the relevant phone, received the same invitation regardless of satisfaction, saw the reward disclosure and remained eligible after submitting criticism. Comparing published positive reviews alone would miss customers whose invitations or rewards were suppressed. The audit should therefore start from orders and invitations rather than selecting only the reviews that reached the public page. This is a control design; no audit has been conducted for this report. [C-E5e, C-R3]

A similar reconstruction applies to a creator post. Retaining the brief proves what Tikau requested, while retaining the actual published version shows what the audience could see. A later edit can change the claim or disclosure, so approval should identify the version and publication location. If the published content differs materially, the campaign owner should pause that asset and resolve the discrepancy. The record should show the correction rather than quietly replacing the original and losing the explanation of what changed. [C-E5a, C-E5e]

Exhibit for the deck: A4 should show the case claims-control matrix and evidence owners. Legal-source detail, staged commencement and standards limitations remain here and cannot be converted into external statistics on assessed slides. [C-F4, C-F16]

## 15. Context: reports, warranties and returns address different buyer uncertainties

> Context only. Theory and outside studies explain possible mechanisms; they do not estimate Tikau's uplift, validate its assumptions or replace its customer exhibits. [C-R1, C-F4]

**Answer.** Reports, warranties and return rights address different uncertainties, so the trust proposition should explain which problem each instrument solves. The literature supports investigating information quality, credible commitments and remedy design, while also reporting null results and limits. Tikau's supplied option effects remain case assumptions: the outside evidence cannot establish that its proposed report or battery promise will produce those effects in practice. [D01-D33; C-E6B1, C-E6B2]

### Information asymmetry explains a transaction problem

Akerlof's formal used-car example gives sellers more information about quality than buyers and shows how pooled valuation can discourage good-quality sellers. Guarantees and brand names appear as counteracting institutions. The paper explicitly uses the automobile example for clarity rather than realism. It supplies a mechanism, with no sampled smartphone population and no conversion coefficient for this case. [D01-D03; S044]

Spence's labor-market model distinguishes alterable signals from indices and requires signaling costs to be negatively correlated with productive capability for the signal to separate applicants. It also permits multiple equilibria and divergent private and social returns. Applying that condition to refurbished phones is an analogy: a costly-looking badge does not prove that low-quality sellers find it harder to imitate. [D04-D06; S077]

Grossman's formal models consider verifiable disclosure and warranties contingent on observable outcomes. Under specified rational-expectations and cost assumptions, incomplete disclosure can be interpreted pessimistically. The paper also discusses interpretation costs and noisy disclosure. Its warranty conclusions depend on assumptions such as outcome observability and excluded consumer moral hazard. It cannot justify unlimited report detail or a claim that every warranty reveals quality. [D07-D09; S075]

Table R15-01 translates these distinct mechanisms into testable design questions. The proposed tests are the team's application, not results attributed to the theorists.

| Table R15-01. Mechanism-to-design comparison | Uncertainty addressed | Proposed Tikau instrument | Credibility condition | Evidence that would weaken the mechanism |
|---|---|---|---|---|
| Quality is hard to distinguish | Buyer cannot judge the individual phone | Unit-linked report | Content identifies the offered device | Buyer cannot connect photos and reading to the unit. [D01-D03; C-E6B1] |
| A seller can imitate a claim cheaply | Badge alone may be uninformative | Documented measurement and exception handling | Claim rests on repeatable costly work | Failed units receive the same badge without correction. [D04-D06; C-E5a] |
| Outcome risk remains after inspection | Future defect cannot be fully known | Explicit warranty and claims route | Remedy is enforceable and operationally usable | Coverage is hidden or claims cannot be processed. [D07-D08; C-E6B2] |
| Disclosure overwhelms the buyer | More facts do not necessarily aid a decision | Summary with accessible detail | Buyer understands the material fields | Buyer misreads the main promise after explanation. [D09; C-E5a] |

A product report should therefore be evaluated as a communication instrument attached to an operational record. Its field count is not an outcome measure. If a buyer primarily needs to know whether a handset is locked, a long cosmetic checklist may leave the decisive uncertainty unresolved. If the buyer worries about future repair, a battery reading cannot answer who will handle a claim. The proposed product page should help the buyer move between the present-condition evidence and the future-remedy terms without treating them as interchangeable assurances. [C-E1A, C-E6B1, C-E6B2]

### Empirical disclosure studies show both opportunity and measurement limits

Jin and Leslie examine Los Angeles hygiene disclosure using restaurant inspections and quarterly tax-based revenues for 1996-1998, alongside hospital records. They report revenue responsiveness to disclosed grades, while noting that revenue alone does not separately identify price and quantity. The undated working-paper version and imperfect record matching limit interpretation. Restaurant disclosure is a useful mechanism example, not an Indian phone effect. [D16-D18; S057]

Dai and Luca's working paper studies 2013 score posting and a later 2015 Yelp alert through quasi-experimental comparisons. Principal outcomes include calls, directions and website clicks as intention proxies; supplementary takeout data cover a narrower sample. The additional response to salience supports attention to presentation, but the report must not describe all engagement as completed purchases. [D19-D21; S060]

Lewis's February 2009 working paper uses retained eBay Motors listings, disclosure measures and software-upgrade comparisons. It reports 82,538 retained auctions in its methods and cautions that photograph counts contain less information than buyers observe. Software adoption and selected listings complicate causal interpretation. The precise contractible-disclosure setting differs from Tikau's proposed self-issued report. [D31-D33; S061]

| Table R15-02. Disclosure study appraisal and permitted inference | Research setting | Outcome or method boundary | Useful question for Tikau | Inference withheld |
|---|---|---|---|---|
| Restaurant window grades | Policy-based panel comparison | Revenues combine price and quantity | Does disclosure make material condition visible | A numeric phone-sales elasticity. [D16-D18] |
| Digitized restaurant scores | Two disclosure stages | Engagement proxies differ from transactions | Is proof visible at the decision point | Every click represents a completed order. [D19-D21] |
| Online used-car listings | Auction regressions and disclosure-cost comparisons | Quantity measures omit content richness | Is the actual unit clearly described | More photographs always cause profitable demand. [D31-D33] |
| Comic-book auctions | Selected collectible listings | Certification choices are endogenous | Which assurance does the buyer consider credible | Any guarantee must command a premium. [D22-D24] |

Dewally and Ederington compare reputation, third-party certification, money-back guarantees and scans in 3,664 retained eBay auctions of 30 selected Silver Age comic books. Certification and reputation relate to price, while offered guarantees show no statistically significant price effect in that setting. Seller choices are endogenous and collectibles differ from phones. The null result belongs beside the positive associations because it challenges a universal guarantee-premium story. [D22-D24; S070]

The case's own offer responses should be read with the same discipline. Battery, warranty and report percentages are answers to a multiple-response survey, so they indicate expressed priorities without identifying the causal return from implementing each offer. The effects specified for B1 and B2 are separate model inputs supplied by the case. The report must not present the survey as an experiment that measured those inputs or present outside studies as independent confirmation of their magnitude. This distinction preserves the recommendation's arithmetic while acknowledging what remains to be validated. [C-E1B, C-E6B1, C-E6B2]

### Returns create an option with a cost

Janakiraman, Syrdal and Freling's original meta-analysis synthesizes 21 papers containing 31 heterogeneous studies and separates time, money, effort, scope and exchange leniency. It finds a larger pooled association with purchase proclivity than return proclivity; scope's positive return relationship has weaker statistical support. Proclivity includes attitudes and behavior, and the designs vary. The pooled results cannot become a handset multiplier. [D10-D12; S074]

Anderson, Hansen and Simester fit a structural purchase-and-return model to 987 catalog customers' histories across clothing and footwear over 126 months. Return-option value varies by category and customer, while positive customer value need not ensure higher net demand or profit. These are structural counterfactuals under taste-and-fit assumptions, not randomized evidence about phone defects. [D13-D15; S064]

Confente and colleagues randomly assign 378 UK panel recruits to tablet-purchase scenarios varying product type, return leniency and channel, with 302 participants retained after checks. Lower perceived risk mediates higher intentions under lenient returns in the tested scenarios. A nonsignificant channel difference does not establish equivalence of stores and online channels, and intention is not realized purchase or return behavior. [D28-D30; S076]

| Table R15-03. Return-policy decisions require distinct denominators | Management question | Relevant measure | Proposed operating record | Incorrect substitute |
|---|---|---|---|---|
| Does the remedy support consideration | Buyer understanding and stated preference | Comprehension and intention task | Record explanation and eligibility understanding | Completed-sales uplift inferred from intention. [D10-D12, D28-D30] |
| Are more orders kept | Delivered and retained orders | Completed-cohort outcomes | Link returns to delivered units | Gross orders treated as net retained demand. [D13-D15] |
| Is service affordable | Expected cost under supplied rates | Case contribution calculation | Keep warranty and return expenses distinct | Longer term assumed to pay for itself. [C-E2, C-E6B2] |
| Does the case board test pass | Returned phones over delivered phones | Supplied model's weighted rate | Match channel and grade denominators | Survey dissatisfaction used as return incidence. [C-E3N3, C-T3t] |
| Is the promise usable | Correct understanding and access | Service journey observation | Trace a claim from contact to resolution | Policy availability treated as fulfillment evidence. [C-E4d, C-E5a] |

A generous return policy can be helpful to a customer and expensive to the seller without any contradiction. The case's expected return expense is part of per-phone economics, while warranty claims are a separate cost. A board can prefer a stronger remedy when the funded plan supports it, but the decision should remain explicit about the cost and risk. It should also avoid interpreting a lower return rate as proof of greater satisfaction: friction, misunderstanding or delayed reporting can change the observed rate. The case does not provide data that separate those mechanisms. [C-E2N1, C-E2N2, C-E4d, C-R3]

### Product category and language affect what must be tested

Chen, Wang and Jia study hypothetical choices involving new, remanufactured and third-party refurbished MP4 players and cartridges among 537 Chinese participants. Their two-stage design and regressions show category-dependent relationships involving quality, price and environmental considerations. The young, educated sample and hypothetical task limit transfer. The study helps identify competing interpretations of reused-product labels; it does not establish an Indian buyer's willingness to pay. [D25-D27; S058]

Mathur and colleagues' US online experiments examine affiliate disclosures with 1,052 YouTube participants and 753 Pinterest participants. Explanation-style wording helped understanding under some conditions, with platform-specific null results also reported. The bilingual-advertising experiments with 198 evening MBA students and 122 university students in Delhi separately assessed language formats, product category and firm origin, using translation checks. Neither study estimates Tikau conversion. They suggest that comprehension should be measured directly rather than assumed from an approved label or familiar language. [F22-F25; S001] [I01-I05; S002]

A descriptive corpus of more than 900 Indian print advertisements across six product categories collected in 2006 distinguishes language mixing from Hindi written in Roman script. A separate naturalistic study of six educated bilingual speakers describes generational differences in switching patterns. Both are limited observations, with no campaign-success estimate or representative family-buyer sample. Their appropriate use is to avoid assuming that script, mixed vocabulary and audience comprehension are the same creative decision. [I06-I10; S065] [I11-I15; S024]

| Table R15-04. Proposed comprehension test design | Element tested | Task for participant | Result recorded | Decision supported |
|---|---|---|---|---|
| Refurbished status | Meaning of prior use | Describe what has and has not changed | Correct meaning and uncertainty stated | Revise any phrase implying new status. [C-E5b] |
| Battery reading | Meaning of capacity percentage | Explain what the number predicts | Distinguish measurement from runtime guarantee | Rewrite unsupported runtime implications. [C-E5a] |
| Warranty | Coverage and remedy | Locate term and claims route | Eligibility, exclusions and contact understood | Fix information hierarchy before promotion. [C-E6B2] |
| Advertisement label | Material connection | Identify why a creator recommends the phone | Recognition without prompting | Change presentation if relationship stays hidden. [C-E5e; F22-F25] |
| Language format | Same factual meaning | Explain the line in participant's own words | Equivalent interpretation across versions | Select clear copy without inventing conversion benefit. [I03-I05] |

The proposed evaluation should preserve the content while varying presentation. If one version omits an exclusion or uses broader wording, a difference in response cannot be attributed only to language or layout. Likewise, asking whether a participant likes a slogan measures something different from asking whether the participant understands the purchase. The report should keep those results separate if future testing occurs. No new interviews, comprehension tests or experiments have been conducted for this manuscript. [C-R3; proposed validation plan]

### Make the trust chain inspectable

The trust proposition has a sequence: a real device enters the process; the lab records its condition; the public description reflects the record; the buyer understands the supported promise; the delivered device matches it; and the remedy works when eligible. A failure at an early stage cannot be repaired by improving a later advertisement. Conversely, technically correct testing can fail commercially if the result never reaches the buyer in a usable form. This sequence is the team's proposed application of the case evidence and must not be attributed as an empirically validated outside model. [C-E4c, C-E5a-C-E5f, C-E6B1]

| Table R15-05. Proposed trust-chain failure diagnosis | Failure observed | First evidence to inspect | Likely process question | Action before scaling |
|---|---|---|---|---|
| Listing and handset disagree | Unit report and dispatch identity | Was evidence attached to the correct phone | Identity control or data update failed | Hold affected units and trace the link. [C-E5a] |
| Reading is present but misunderstood | Customer explanation task | Does copy overstate runtime or certainty | Communication scope failed | Revise the field explanation and retest. [C-E5a] |
| Warranty exists but buyer cannot claim | Terms, contact route and service log | Is remedy operationally accessible | Handover or support failed | Correct route and resolve open cases. [C-E4d, C-E6B2] |
| Creator message exceeds report | Published content and approved brief | Did claim approval survive execution | Campaign governance failed | Pause unsupported creative. [C-E5e] |
| Returns decline without clear explanation | Completed cohorts and contact reasons | Are customers better served or facing friction | Metric interpretation remains uncertain | Diagnose before attributing satisfaction. [C-T3t, C-R3] |

A skeptical board member may argue that these controls create overhead while the company needs immediate sales. The case already funds the report and capacity change as explicit levers; the research's role is to show what their promise entails and what evidence would make their implementation reviewable. It does not add another cost saving or extra uplift to the audited model. If execution requires resources beyond those supplied, that becomes an explicit assumption or a future funding decision. Hiding the workload would make both the trust claim and the financial story less defensible. [C-E6B1, C-E6SH, C-R3, C-F4]

Future validation should predefine what counts as a failed explanation. A participant who repeats a slogan accurately may still infer that battery capacity guarantees a full day's use or that a warranty covers accidental damage. The interviewer should ask for an explanation in the participant's own words before offering a correction, and record both the initial interpretation and the corrected understanding. Otherwise the test would measure the interviewer's ability to teach the answer rather than the product page's ability to communicate independently. These are proposed measurement choices, with no observed results. [C-E5a, C-E6B2, C-R3]

Commercial and comprehension outcomes should also remain separate in the eventual analysis. A clear explanation could reduce purchase intention among people whose needs do not fit the offer, which would not automatically make the explanation defective. Conversely, a vague promise could attract favorable intentions by encouraging an unsupported assumption. The team should inspect the meaning of the response before optimizing a single intention score. This prevents a test designed to improve truthfulness from rewarding copy that makes the offer sound broader than it is. [C-E5a, C-E5b, C-R3]

Exhibit for the deck: the Trust and Launch panels should connect case objections with specific proof and remedy. The literature, study samples and causal limitations remain in research; no study coefficient enters the forecast or the slide charts. [C-F4]

## 16. Context: battery health, data wiping and IMEI checks are lab operations, while the third shift supplies stipulated sellable capacity

> Context only. Manufacturer instructions and technical guidance inform proposed controls. They do not add throughput, technician productivity, battery life or cost assumptions to the case model. [C-R1, C-F4]

**Answer.** A credible report requires unit identity, measurement provenance, completed transfer checks and a clear release decision. The case supplies a third shift's sellable output but provides no report-test time or independent tester-throughput data, so the capacity figure cannot prove measurement quality or workload feasibility. The audited model accepts Exhibit 6's bundled operating effects; the controls below are proposed implementation requirements whose additional resource needs have not been independently costed. [C-E6B1, C-E6SH, C-E6H4, C-R3]

### Battery capacity is a bounded measurement

Apple describes maximum capacity relative to the battery when new and distinguishes it from peak-power capability. Its cycle-design statements depend on iPhone generation and ideal conditions. Google describes Pixel capacity as a fuel-gauge estimate, with model-dependent displays and cycle recommendations. These sources do not establish a universal remaining-life prediction or an industry-wide 85% sales threshold. The case's threshold is a specified commercial promise, which must be measured and described under its own rules. [E01-E03; S033] [E07-E10; S041] [C-E5a, C-E6B2]

A buyer can reasonably interpret a single percentage more broadly than the measurement supports. The proposed explanation should identify the metric, the date and the tested unit, while avoiding claims about hours of use, years remaining or every possible operating condition. Runtime depends on use that the case does not quantify. The report can explain the distinction without adding a new deterioration curve to the forecast. If a measurement cannot be obtained reliably, a blank or uncertain result must not be converted into a pass merely to preserve a universal headline. [C-E5a, C-E6B1, C-R3]

| Table R16-01. Battery evidence and claim scope | Evidence object | What it can support | What remains unproved | Proposed release rule |
|---|---|---|---|---|
| Capacity reading | Own-lab result linked to unit | Stated measured capacity under recorded method | Exact runtime or remaining life | Publish only supported measurement language. [C-E5a; E01, E07] |
| Peak-power information | Device-supported diagnostic | Separate power-capability description | Full safety or reliability assurance | Keep distinct from capacity percentage. [E02] |
| Missing health display | Model or software limitation | A documented measurement limitation | A successful battery-health result | Escalate method choice; do not infer a pass. [E09] |
| Unverified battery | Device provenance warning | Need for further inspection | Accurate displayed health or counterfeit identity | Review provenance and reading reliability. [E04, E06] |
| Replacement record | Compatible part and installation details | Work actually completed | Brand manufacture or universal compatibility | Use compatible wording unless brand provenance is proved. [C-E5b; E05-E06] |

Apple's battery guidance warns that unverified batteries can produce inaccurate health information and recommends trained technicians. Its parts-history guidance distinguishes Genuine, Unknown, Used and Unverified labels, with model-dependent coverage and the latest service recorded per part. An Unknown label alone does not uniquely establish counterfeit origin, and absence of a record is not complete lifetime provenance. These are reasons to preserve device-specific evidence rather than treat one screen or label as an exhaustive history. [E04-E06; S035] [E17-E19; S034]

The own-lab requirement does not mean that the lab can create certainty by reading a number on any available tool. The proposed procedure should specify an approved method for each supported device family, the information that method exposes, the conditions that make the result questionable and the action for an exception. The case's spot check already demonstrates disagreement with trader-tool listings. It does not establish the independent tool's error distribution, a calibration interval or a universal correction factor. Those remain implementation questions to resolve before relying on the measurement across inventory. [C-E4c, C-E5a, C-R3]

### Separate cosmetic grading, functional status and repair provenance

Apple's pre-owned-device buying guidance treats cosmetic inspection, functions, seller terms and Activation Lock as separate checks. It advises against purchasing an iPhone with Activation Lock enabled. Repair Assistant installs calibration data after supported repairs, subject to device, software, connectivity and charge prerequisites. These manufacturer workflows support device-specific inspection questions; they do not certify Tikau staff or demonstrate that every device in the case can use the same workflow. [E11-E13; S036] [E20-E21; S038]

A single grade can be useful for browsing while being too compressed for the sale decision. Cosmetic wear, a replacement battery, an unlocked state and a completed wipe are different attributes. The proposed report should record them in distinct fields so the grade does not silently promise more than its definition. The case defines Superb and Good battery thresholds, but Fair's visible wear and working condition also require accurate description. B2 changes the battery promise for Good and Fair; it does not erase visible wear or turn compatible batteries into brand-made parts. [C-CO5, C-E5b, C-E6B2]

| Table R16-02. Proposed unit report field design | Field | Evidence source | Exception route | Customer interpretation controlled |
|---|---|---|---|---|
| Unit identity | IMEI and stable internal reference | Intake and device verification | Quarantine mismatched identity | Report applies to this handset. [C-E6B1] |
| Appearance | Actual photographs and recorded grade | Visual inspection | Regrade or correct listing | Cosmetic condition is visible and specific. [C-CO5, C-E5b] |
| Battery measurement | Own-lab method, reading and date | Approved device-specific test | Retest or hold if unreliable | Percentage is a measurement, not lifetime. [C-E5a; E01-E10] |
| Replacement parts | Component and provenance description | Repair and supplier records | Resolve unsupported brand claim | Compatible and genuine remain distinct. [C-E5b; E17-E21] |
| Transfer readiness | Account-lock and reset outcome | Post-transfer checks | Return to authorized resolution | Erasure alone does not guarantee usability. [E13, E34-E35] |
| Public promise | Approved warranty and return references | Current policy version | Hold misleading or missing wording | Remedy scope is explicit. [C-CO2, C-E6B2] |

The report should be versioned after a repair or retest. A unit can enter the lab with one battery and leave with another, so a pre-repair screenshot cannot automatically substantiate the final listing. The proposed handover should make the final approved record easy to retrieve and prevent obsolete photos or measurements from following the device. This is an identity and change-control problem as much as a testing problem. The case provides no realized error rate for such a system, and the model does not award a separate improvement for implementing it. [C-E5a, C-E6B1, C-R3]

### Erasure requires a completed process and an acceptable result

NIST SP 800-88 Revision 2 supersedes Revision 1 and describes media sanitization, including voluntary nongovernmental use. Method selection depends on media and confidentiality needs. Verification examines completion, errors and anomalies; validation evaluates whether outcomes are acceptable. A sample record is not NIST product certification. The guidance is US technical context and does not independently impose an Indian legal duty or certify a Tikau process. [E22-E26; S029]

Apple's sale-preparation guidance includes backup, transfer and personal-data removal, with relevant eSIM and Activation Lock steps. Google's Pixel trade-in guidance points to a Settings reset and distinguishes reset methods that may leave different software versions. Android protection can require prior-owner credentials after a reset; removing the account turns off the relevant protection. These instructions demonstrate why resale preparation needs an authorized device-specific workflow and a separate readiness check. [E14-E16; S037] [E32-E33; S043] [E34-E35; S039]

Table R16-03. Proposed sanitization and transfer control sequence

| Stage | Record to create | Failure response | Claim allowed after the stage |
|---|---|---|---|
| Authorized intake | Handover instruction and identity | Stop unauthorized processing | Device accepted for stated work only. [E14; C-E5f] |
| Method selection | Device, media and approved procedure | Escalate unsupported model | Procedure selected, not erasure completed. [E23] |
| Execution | Tool or device completion output | Investigate failure or interruption | Operation attempted until verified. [E24] |
| Verification | Completion, errors and anomalies checked | Repeat approved work or hold | Execution status checked. [E24] |
| Validation | Authorized acceptance decision | Reject inadequate outcome | Sanitization accepted under stated scope. [E25] |
| Transfer readiness | Lock, activation and setup-state checks | Resolve through authorized owner process | Ready for the supported buyer setup. [E13, E34-E35] |
| Certificate release | Final record linked to device | Withhold unsupported certificate | Completed wipe statement under case requirements. [E26; C-E5f] |

Pixel Repair mode uses a separate clean environment during servicing and has eligibility requirements. It does not itself complete resale erasure. Keeping that distinction explicit avoids a plausible operational mistake: a technician may protect personal information during a repair yet still leave the device unsuitable for a new owner. The case's no-sale-without-wipe rule concerns resale readiness, not merely privacy during service. Both can matter, but they require different records. [E30-E31; S042] [C-E5f]

The proposed certificate should describe what was done and approved, not claim that a standards organization personally tested the unit. A buyer-facing sentence can be simple while the internal record retains method and result. If a customer asks for detail, staff should be able to explain the scope without promising an impossible absence of every conceivable risk. The management task is to align evidence, wording and escalation. This report makes no assertion that a particular erasure product has been purchased, integrated or validated. [C-E5a, C-E6B1, C-R3]

### IMEI screening is a dated check with limited reach

The CEIR mobile-user manual describes pre-purchase handset-status checks, including the KYM SMS route and a web process requiring verification. The result should be retained against the actual unit and its lookup date. A status response does not evaluate battery condition, function, data erasure or permanent ownership title. Separate activation checks remain necessary because an erased device can still require a previous owner's credentials. [E27-E29; S056] [E34-E35]

Table R16-04. Device release checks that cannot substitute for one another

| Check | Failure it addresses | Adjacent question still open | Proposed hold condition |
|---|---|---|---|
| Government IMEI screening | Reported lost or stolen status | Account locks and future reports | Adverse, missing or mismatched result. [C-E5f; E27-E29] |
| Account and activation readiness | Previous-owner credentials | Registry status and physical condition | Buyer setup requires unresolved credentials. [E13, E34-E35] |
| Completed erasure | Prior-user data | Activation and functional performance | Execution or validation incomplete. [C-E5f; E24-E25] |
| Functional inspection | Present operating behavior | Future warranty performance | Required function fails. [C-CO5; E12] |
| Battery reading | Capacity evidence | Safety conformity and exact runtime | Measurement cannot substantiate shown claim. [C-E5a; E01-E04] |
| Parts provenance | Meaning of replacement description | Calibration and full functionality | Genuine-parts assertion lacks proof. [C-E5b; E17-E21] |

A proposed release checklist should include an exception queue, not just pass boxes. Without an exception route, staff under throughput pressure may treat uncertainty as approval. Each exception should retain the reason, responsible reviewer and eventual disposition. The report cannot assign a processing time or expected rejection share because the case does not supply those inputs. Such observations would be required to move from a conceptual process to a real staffing plan. They belong in future operational validation rather than hidden inside the current capacity calculation. [C-E4a, C-E6SH, C-R3]

### The third shift changes a stipulated capacity, not the truth standard

The case explicitly adds sellable phones through the third shift after hiring and training. The model uses that delivered-capacity increment once. It does not contain separate time standards for report photography, independent readings, erase validation, exception review or claim administration. It therefore assumes the supplied lever bundle can operate as described; it cannot demonstrate that a proposed detailed control design fits within each shift. The implementation plan should state that dependence plainly. [C-E6SH, C-E6B1, C-E6H4]

Table R16-05. Proposed operational feasibility review before launch

| Workstream | Case commitment | Additional observation needed | Approval boundary |
|---|---|---|---|
| Third-shift hiring | Stated training and start choices | Staff availability and completed training | Do not infer staffing readiness from model output. [C-E6SH] |
| Own-lab measurements | Reading on each relevant unit | Method support, repeatability and exception workload | Hold claims whose readings cannot be supported. [C-E5a, C-E6B1] |
| Photo and report production | Report for sold phones | Unit linkage and final-record completion | A generated document alone is insufficient. [C-E6B1] |
| Data transfer | Completed wipe before sale | Device-specific completion and acceptance | No unresolved wipe record at dispatch. [C-E5f] |
| Repair service | Longer warranty under B2 | Backlog, revisit causes and service capacity | No invented service improvement in forecast. [C-E4d, C-E6B2] |
| Safety and labor arrangements | No detailed case specification | Applicable requirements and real facility review | Do not invent night-shift norms or compliance status. [C-R3] |

A credible competing proposal would postpone demand activation until the control process has been demonstrated. That would be an operational contingency if real readiness fails, but it changes the case's stipulated timing and would require a separate modeled assumption. The submitted plan should retain the audited schedule while showing a readiness gate in management recommendations. If the gate fails in reality, the board should reconsider timing rather than publish unproved claims to protect a forecast. The distinction allows firm commitment to the case answer alongside an honest account of real implementation uncertainty. [C-E6H1, C-E6SH, C-R3]

A proposed cross-shift readiness exercise should follow actual units through the complete record sequence, including exceptions and handover between staff. The reviewer should check whether a later technician can reproduce the release decision from the retained evidence without relying on the previous operator's memory. Particular attention should go to a replaced component, a repeated battery reading and a reset that required additional owner action. Those cases exercise change control more effectively than an uninterrupted pass through the simplest workflow. This remains a proposed exercise, not evidence that staffing or testing capacity has been validated. [C-E5a, C-E5f, C-E6SH, C-R3]

If the exercise reveals additional work, management should record its nature before assigning a productivity improvement or cost. The case does not provide the time needed for each report field, and its capacity increment is already stated as sellable output. Deducting an invented test allowance would change the case model; ignoring a real readiness failure in execution would risk an untrue promise. The correct response is to keep the submitted arithmetic intact and disclose the unresolved implementation requirement to the board. [C-E6SH, C-E6H4, C-R3]

Exhibit for the deck: A4's service-control sequence should show identity, measurement, erasure, screening and release. The Plan slide uses only the stipulated sellable-capacity increase; it must not call that figure proof of tester throughput, accreditation or third-party certification. [C-E6SH, C-E6B1, C-F4]

## 17. Context: comparable trust mechanisms show how promises are specified, while outcome and failure claims require separate evidence

> Context only. Comparable policies are vendor statements accessed on 28 October 2026. They establish published terms or stated processes, not independently verified fulfillment, customer outcomes or Tikau capabilities. [G01-G30; C-F4]

**Answer.** Comparable programs combine condition descriptions, testing statements, battery terms and remedies in materially different ways. Tikau can borrow the discipline of specifying those components while preserving its own case-funded promise and evidence requirements. The verified register does not establish a causal success ranking or a documented shutdown narrative, so this section examines transferability and failure risks without inventing what happened to a company. [G01-G30; C-E5a-C-E5f]

### Compare promises through the same fields

A headline warranty duration is too narrow a basis for comparing offers. The buyer also needs to know when coverage begins, which parts are included, what event triggers a remedy, who handles the claim and what evidence is required. A return window can operate independently from defect coverage. Country, channel and program tier can change any of these terms. The comparison below uses the same questions for every program and leaves unverified fields visible. Its purpose is to improve promise design, not to recommend a real vendor or rank its products. [G01-G30]

Cashify's published terms distinguish a base refurbished-mobile warranty, online refund or replacement and store policies. Battery and accessory coverage differ from the main device term, with claim documentation and pickup charges specified. The policy permits repair, replacement or refund under conditions. These are published terms; the verification did not measure claim acceptance, turnaround or customer satisfaction. The separate screen-repair refund policy asks for defect evidence and device identification, but it is not the sale-return policy for refurbished phones. [G01-G06; S054] [B40; S053]

Table R17-01. Indian policy comparison as remedy design

| Published program | Promise or channel distinction | Proof or route specified | Outcome established | Transfer decision |
|---|---|---|---|---|
| Cashify refurbished mobiles | Base warranty and channel-specific return routes | Invoice, identity and claim evidence | No independent fulfillment outcome | Separate mobile, accessory and channel terms in Tikau copy. [G01-G06; S054] |
| Cashify screen repair | Covered repair-fault reporting policy | Video and identifying information | No measured repair success | Borrow evidence discipline, not the sale-policy terms. [B40; S053] |
| CeX India warranty | Published 24-month term with consumable exceptions | Applicable store-policy fault verification | No independent claim outcome | Avoid comparing duration without exclusions. [G26-G28; S022, S023] |
| CeX India grading | Mint, Good and Working descriptions | Testing determines grade and value | No battery-capacity threshold verified | Treat grade labels as vendor-specific definitions. [G29; S021] |
| Amazon India Renewed program | Seller-program existence and admission criteria | Program-level requirements described | Buyer warranty details not verified here | Leave missing remedy and battery fields unknown. [G30; S032] |

CeX India's unwanted-store-purchase policy provides a short return route for a voucher after checks, distinct from cash or card refund. Its covered-fault policy can lead to repair, replacement or a voucher under stated value rules; removable batteries and unauthorized repairs have separate limitations. The grading page describes appearance, packaging and accessories, with no verified battery threshold. These distinctions prevent the report from treating a long warranty headline as a simple equivalent of Tikau's proposed remedy. [G27-G29; S023, S021]

The first transfer lesson is to define the actual buyer journey before drafting a promise. Tikau's case gives a return window, a warranty option and a report. The operational design should specify where each is explained, what a buyer retains and how a claim is initiated. It must not quietly import another company's pickup fee, depreciation schedule or voucher remedy. Those terms could change both buyer understanding and the model's costs. A comparable can expose a missing question without supplying its answer. [C-CO2, C-E6B1, C-E6B2, C-R1]

### Manufacturer programs have different provenance advantages

Apple's Certified Refurbished page describes functional testing, inspection, cleaning and genuine replacement parts as needed, with a new battery and shell for refurbished iOS devices and a standard limited warranty. Its US return policy provides a separate eligible-item return window. Samsung's announced US Amazon.com Certified Re-Newed program describes specialists, genuine parts, a certified new battery, a checkpoint count and a limited manufacturer warranty. Neither source provides independent outcomes or authority to apply the same promise to an Indian third-party refurbisher. [G07-G10; S047, S046] [G19-G21; S028]

Table R17-02. Manufacturer-program comparison and transfer limit

| Component | Apple program evidence | Samsung US program evidence | Tikau application |
|---|---|---|---|
| Process statement | Functional testing, inspection and cleaning | Specialists and stated checkpoint process | Describe work actually completed, without implying manufacturer authorization. [G07, G19-G20; C-E5a] |
| Battery promise | New battery for refurbished iOS devices | Certified new battery in announced program | Retain the case's measured threshold and compatible-parts disclosure. [G08, G19; C-E6B2, C-E5b] |
| Warranty source | Manufacturer limited warranty | Manufacturer limited warranty | Identify Tikau's actual responsibility; do not borrow brand backing. [G09, G21; C-E6B2] |
| Return route | Separate US shopping policy | Full standard remedies not verified in release | State case return terms independently. [G10, G21; C-CO2] |
| Outcome evidence | Published promise | Published announcement | No claims of comparable satisfaction or defect reduction. [G07-G10, G19-G21] |

A manufacturer can make certain provenance statements because of its relationship to components, software and service systems. A third-party seller should not imply the same relationship merely because it performs testing. Tikau's compatible batteries are explicit in the case. A well-performing compatible replacement can meet the commercial battery promise while still making a genuine-parts statement false. The comparison should help the team distinguish quality claims from origin claims, each of which requires its own evidence. [C-E5a, C-E5b, C-E6B2]

The checkpoint count deserves similar caution. A larger number can reflect a more detailed checklist, repeated measurement or a different division of tasks. Without test definitions, the analyst cannot infer rigor, coverage or failure probability from count alone. Tikau's report should therefore prioritize material, interpretable evidence over a borrowed count of inspections. It can show the battery reading, unit photographs and required screening without claiming that its checklist is equivalent to a manufacturer's program. This is the team's proposed communication choice under the case rules. [C-E6B1, C-E5a]

### Marketplace grades do not create a universal standard

Back Market's US condition page describes appearance grades and full function, with a Premium-specific genuine-parts and battery promise. Its battery article states different arrival thresholds by device class, but the general condition page conflicts on other-device thresholds. A repair-charge sentence is also internally ambiguous. The report preserves those conflicts rather than silently selecting a stronger warranty interpretation. The seller-warranty page separately describes a limited term, remedy order, exclusions and a return window. [G11-G18; S018, S020, S019]

| Table R17-03. Policy conflict resolution and affected claim | Evidence conflict or gap | Why it matters | Interpretation selected | Tikau design implication |
|---|---|---|---|---|
| Other-device battery thresholds differ across pages | Different statements in the inspected vendor material | A universal threshold would be unsupported | Retain conflict; do not resolve by averaging | Keep one approved policy source and resolve inconsistencies before publication. [G11, G16] |
| Battery repair-charge wording repeats timing unclearly | Remedy interpretation is uncertain | Buyer may infer an unsupported protection | Leave intended meaning unresolved | Use explicit trigger, timing and remedy fields. [G12] |
| Appearance grades coexist with functional promise | Grade describes one dimension | Buyer may read grade as complete quality score | Preserve appearance/function distinction | Separate cosmetic grade from test results. [G13-G16] |
| Warranty and returns have different routes | Defect and change-of-mind handling differ | Duration alone obscures eligibility | Compare separate policy components | Present Tikau's return and warranty information separately. [G17-G18; C-CO2] |
| Premium has distinct provenance terms | Tier-specific statement | Generalizing overstates ordinary grades | Apply only to stated tier | Do not place genuine-parts language on compatible-battery units. [G14; C-E5b] |

A public page inconsistency is a limitation of evidence, not proof of failed customer service. It may reflect drafting, versioning, localization or a substantive policy difference; the available record does not settle the cause. The report should therefore say what was observed and what inference was withheld. This is also a useful standard for Tikau's own future policy review: when two pages disagree, staff should resolve the approved promise before asking buyers to rely on either version. A confident interpretation by the analyst cannot substitute for the responsible party's clarification. [G11-G18]

eBay's US program assigns different warranty durations to its own refurbished tiers and identifies a claims servicer. The full contract identifies the seller as warrantor, restricts the territorial scope and describes repair, replacement or reimbursement with exclusions. Servicer and warrantor are different roles. The program's grade names and remedies therefore should not be transferred to a Tikau offer merely because similar adjectives appear in a listing. [G22-G25; S031, S030]

### Distinguish proof creation from proof administration

The comparable evidence suggests several different roles that can be obscured in a badge: a seller makes the promise, a laboratory performs tests, a platform administers admission or listing rules, and a service organization handles claims. One company can perform several roles, but the buyer should know who is responsible. Tikau's B1 is an own-lab report. It is not third-party certification, NABL accreditation or manufacturer authorization. Its credibility must come from the actual records and controls the case specifies, with those limits visible. [C-E6B1; C49-C50; G22-G25]

Table R17-04. Role and evidence separation

| Role | Evidence expected, proposed | What the role does not establish | Tikau wording decision |
|---|---|---|---|
| Seller | Offer, invoice and terms | Independent technical certification | Identify Tikau as seller and promise owner. [C-CO2, C-E5a] |
| Own lab | Recorded methods and results | Third-party independence | State that the reading is taken in Tikau's lab. [C-E5a, C-E6B1] |
| Accredited testing organization | Current scope and certificate | Every test or every phone automatically covered | Use no accreditation claim without actual evidence. [C49-C50] |
| Platform | Listing and admission policy | Every unit outcome or all buyer remedies | Keep platform terms separate from seller claims. [G30] |
| Claims servicer | Claim process and responsibility | Identity of the warrantor | Name the responsible remedy party accurately. [G23-G25] |
| Parts manufacturer | Traceable part provenance | Installation quality or completed calibration | Distinguish origin from functional release. [C-E5b; E17-E21] |

This separation also improves internal accountability. If a report field is wrong, the team should be able to determine whether the error arose in testing, transcription, listing, picking or dispatch. A vague certification label makes that investigation harder because it does not identify the responsible evidence object. The proposed unit report should preserve the path from source observation to public claim. That can be implemented conceptually without claiming a particular software vendor, automation capability or guaranteed error reduction. [C-E5a, C-E6B1, C-R3]

### Transfer principles through a controlled adaptation

The team should distinguish a design principle from an operating term. Separating warranty from returns is a principle that helps clarity. Charging for pickup is an operating term with economic and customer consequences. Preserving a unit's final test record is a control principle. Replacing every battery with a new brand-made part would be a different offer requiring new sourcing and cost inputs. The first category can inform the implementation proposal; the second requires explicit authorization and recalculation if it departs from the supplied case. [C-E6B1, C-E6B2, C-R1, C-R3]

Table R17-05. Transferability screen for Project DOBAARA

| Comparable feature | Transfer classification | Case-compatible adaptation | New assumption avoided |
|---|---|---|---|
| Clear condition definition | Communication principle | Show wear and functions separately | Universal external grade equivalence. [G13, G29; C-CO5] |
| Distinct battery term | Promise specification | Explain measured capacity and compatible replacement | New manufacturer battery for every device. [G08, G19; C-E6B2] |
| Invoice-linked claims | Administrative control | Link support to unit and sale record | Imported pickup fees or depreciation. [G05-G06; C-E5a] |
| Separate return policy | Remedy clarity | State case return window beside warranty | Competitor's longer return window. [G10, G18; C-CO2] |
| Identified warrantor and servicer | Accountability principle | State who accepts and resolves a claim | Platform backing that Tikau has not obtained. [G23-G25; C-E6B2] |
| Program-specific tier | Eligibility control | Publish only the promise for the actual unit | Premium wording on all grades. [G14, G22; C-E5a] |
| Evidence before refund decision | Process discipline | Define eligible claim evidence fairly | Automatic rejection from one missing screenshot. [B40; C-E5a] |

A difficult implementation question is how much detail to place in the customer-facing report. The proposal should make the supported summary understandable and the underlying terms accessible. It should not require a buyer to interpret a laboratory log before making an ordinary purchase, yet the company needs that log when a claim is challenged. The product page, report and internal record therefore serve different readers. Their facts must agree even when their presentation differs. This is an information-architecture choice to validate, with no assumed effect on conversion or service cost. [C-E5a, C-E6B1, C-R3]

### Failure analysis must remain evidential

The verified sources do not support the old plan's suggested narratives about a platform shutdown or a refurbisher's collapse. Repeating an unverified cautionary story would add drama without a defensible decision. A stronger pre-mortem uses the case's own possible failures: a unit-linked claim is wrong, a remedy is inaccessible, a creator hides the relationship, a policy differs by channel or an uncompleted wipe reaches dispatch. Those are explicit mechanisms the proposed controls can address. They are risks to test, not invented events attributed to a real organization. [C-E5a-C-E5f]

| Table R17-06. Proposed pre-mortem derived from promise design | Hypothetical failure | First warning to observe | Control to inspect | Board decision supported |
|---|---|---|---|---|
| A policy headline exceeds actual coverage | Staff explain different terms from the page | Conflicting scripts or repeated eligibility questions | Version-controlled terms and training | Correct wording before expanding promotion. [C-E5a, C-E6B2] |
| A report follows the wrong unit | Buyer finds mismatch in photos or identity | Dispatch-to-report discrepancy | Unit linkage and final approval | Hold affected stock and trace records. [C-E6B1] |
| A compatible part is called genuine | Public description exceeds provenance | Unsupported blanket parts claim | Parts ledger and claim dictionary | Remove claim and review affected listings. [C-E5b] |
| Return rights become confused with warranty | Buyer expects a different remedy | Repeated support explanation failures | Separate terms and handover record | Revise communication and resolve cases. [C-CO2, C-E6B2] |
| Platform and seller responsibilities blur | Buyer cannot identify claim recipient | Support transfers without ownership | Named accountable remedy route | Assign ownership before further launch. [C-E5a] |
| Trust is inferred from a falling metric alone | Returns decline while support friction rises | Conflicting cohort and complaint signals | Metric definitions and qualitative diagnosis | Withhold satisfaction claims pending investigation. [C-T3t, C-E4d] |

A competing reading is that Tikau should match whichever public program offers the strongest headline. That approach ignores the economics and authority behind the promise. A manufacturer program, a seller warranty and a marketplace-administered remedy can have different funding and responsibility structures. The case supplies a particular affordable bundle and an explicit restriction on outside inputs. Matching an external headline would change the question unless the team also rebuilt the cost, operational feasibility and disclosure requirements. The report therefore selects transfer principles while retaining the audited case plan. [C-R1, C-F4, C-E6B1, C-E6B2]

The research also cannot rank actual service quality from terms alone. A clear policy can be poorly fulfilled; a short headline may sit beside an effective service process. To compare outcomes, future diligence would need eligible-claim volumes, resolution definitions, timing, rejection reasons and a sample that avoids selecting only visible complaints. None of that is supplied by the verified vendor pages. The correct outcome cell remains unverified rather than zero, excellent or poor. Keeping that distinction visible is essential when the board evaluates whether a promised remedy has become a delivered capability. [G01-G30; proposed diligence]

A useful proposed customer-handover rehearsal would assign the same hypothetical fault to different documented purchase routes. Staff would identify whether the issue falls under the return window, the warranty, a parts-specific condition or an excluded event, then show the buyer the actual route to resolution. The purpose would be to find contradictory explanations before launch. It would not estimate a rejection rate or demonstrate that another seller's remedy is better. Tikau's case terms and its own future operating records would remain the relevant basis for the decision. [C-CO2, C-E5a, C-E6B2]

The board should retain a separate unknown category in the comparable register. An unverified battery term is not evidence of no battery promise, and an unmeasured outcome is not evidence of poor performance. Equally, a visible badge is not proof of favorable outcomes. Maintaining this distinction gives the team a disciplined diligence agenda: seek the missing policy or outcome evidence only when it could change a decision, and retain the boundary when it cannot be obtained. That approach avoids a falsely precise ranking assembled from uneven public information. [G01-G30; proposed diligence]

Exhibit for the deck: the Launch product-page mockup should show Tikau's own report and funded warranty with refurbished and compatible-parts language. A4 should carry accountable proof and remedy controls. Public vendor terms, country differences and unresolved policy wording remain research context and supply no claimed Tikau result. [C-E5a-C-E5f, C-F4]



## 18. Family buyers lead the equal-weight screen, while flagship buyers tie under stronger size or margin weights

We would make family buyers the primary audience for the February launch because their stated need for accountable service fits the funded Good-phone promise. The judgment scorecard gives them 24 out of 30, ahead of flagship-on-a-budget buyers at 22, but this is a structured team assessment rather than a measured customer preference ranking. Doubling either the size or margin weight produces a tie at 27, so the sensitivity supports a defensible choice without establishing a uniquely superior segment. The final choice rests on service fit, Good availability and the plan's existing Superb constraint. [C-E1C, C-E4b, C-E6B1, C-E6B2, T10, T26]

### Separate segment facts from the team's scoring decisions

The case identifies four buyer groups among 900 customers purchasing during August to October. Flagship-on-a-budget buyers are 34%, value seekers 29%, family buyers 21% and upgraders 16%. These shares describe supplied historical purchasers, not all people in the market and not the shares of website visitors who abandoned a product page. The associations with grades are broad: flagship buyers mostly choose Superb, value seekers Fair, family buyers Good, and upgraders Superb and Good. No table links these groups to every channel or to a separate demand response under B1 and B2. We therefore use the groups to choose a customer problem and message, while retaining Exhibit 3's channel-grade mix in the forecast. [C-E1C, C-E1A, C-E3, C-E6H2]

An alternative would be to select the largest historical group automatically. That approach has the advantage of using one directly supplied fact and avoiding subjective scores. Its weakness is that it treats historical share as available incremental opportunity. Superb wholesale supply is capped at 2,000 a month, and the recommended plan already requests 2,070.36 before rationing. More interest from flagship buyers cannot be treated as additional fulfilled Superb sales without changing sourcing or displacing other orders. Size remains relevant, but it has to be read with contribution, supply and the available Q1 levers. This is why the largest group is a serious alternative rather than an automatic winner. [C-E1C, C-E4b, C-E6H4, T22]

Table R18-01. Evidence strength for the six scorecard criteria.

| Criterion | What the case directly supplies | What the team must judge | Misinterpretation to avoid | Source |
|---|---|---|---|---|
| Size | Buyer shares from supplied research | How much size should influence launch focus | Historic share equals future demand | [C-E1C] |
| Contribution per phone | Grade contribution and broad grade associations | Segment's relative economic attraction | Segment lifetime value has been measured | [C-E2, T2, C-E1C] |
| Q1 room to grow | Superb cap and unconstrained Good/Fair supply | Which audience can grow under allowed levers | Unconstrained supply means free lab slots | [C-E4a, C-E4b] |
| Grade return risk | Grade probabilities and channel multipliers | Broad relative exposure of each audience | A direct segment return rate exists | [C-E2, C-E3N3, C-E3N4] |
| Worry addressed | Visitor concerns and offer responses | Fit between promise and segment need | All family buyers gave the same survey answer | [C-E1A, C-E1B, C-E1C] |
| Feasible lever reach | Package mechanics and board tests | How directly the funded Q1 plan serves the audience | Segment targeting adds an unpriced uplift | [C-E6B1, C-E6B2, T12] |

### Formula and interpretation of the equal-weight comparison

Each criterion receives a team score from 1, weak, to 5, strong. The weighted total is the sum of score multiplied by criterion weight; the weighted mean divides that total by the sum of weights. Equal weights make the denominator six and the maximum total 30. Family's scores are 3, 3, 5, 3, 5 and 5, adding to 24. Flagship scores are 5, 5, 1, 5, 3 and 3, adding to 22. Value seekers total 13 and upgraders 16. These are ordinal judgments converted into a transparent decision aid. A two-point difference is not a statistically estimated advantage or a probability that one campaign will succeed. [T10, T26]

The size scores follow the case's order of buyer shares without pretending to measure distance exactly. Flagship gets 5, value seekers 4, family buyers 3 and upgraders 2. Giving a smaller group a score of 1 instead would be another reasonable judgment, but it would not create new customer evidence. Contribution scores reflect the economics associated with the broad grades: Superb is strong, Good positive and Fair thin. Upgraders sit between because the case associates them with both Superb and Good. Their precise grade proportions are unknown, so a blended segment contribution is not calculated. We score the evidence directionally and leave the missing mix visible. [C-E1C, T2, T10, T26]

Table R18-02. Every segment score, with its decision rationale. Scores are team judgments, not case observations. Source for all numeric score cells: T10 and T26.

| Segment | Size | Contribution | Growth room | Return risk | Worry fit | Lever reach | Why the combined score is defensible |
|---|---:|---:|---:|---:|---:|---:|---|
| Flagship on a budget | 5 | 5 | 1 | 5 | 3 | 3 | Largest group and best-grade economics, with a binding Superb supply limit |
| Value seekers | 4 | 1 | 5 | 1 | 1 | 1 | Substantial group and available supply, but price emphasis and thin Fair contribution |
| Family buyers | 3 | 3 | 5 | 3 | 5 | 5 | Moderate size, Good economics and strong fit with proof and accountable service |
| Upgraders | 2 | 4 | 3 | 4 | 2 | 1 | Attractive broad grade mix, with its distinctive trade-in need deferred by Q1 funding |

The growth-room criterion needs careful interpretation. Good and Fair supply is not constrained by wholesalers, so family and value groups receive strong relative scores there. The total lab remains constrained until the shift opens. A score of 5 therefore means the grade-specific supply problem is less restrictive, not that Tikau can deliver unlimited Good or Fair phones. Flagship's score of 1 recognises a real constraint even after the shift. Upgraders receive an intermediate score because their grade association includes Superb and because their most distinctive programme requires sourcing and buyer flows that complicate the immediate plan. [C-E4a, C-E4b, C-E6SH, C-E6TI3, C-E6TI4, T10]

The return-risk scores should also remain relative judgments. Superb's lower supplied grade rate makes it attractive, while Fair's higher rate makes the same service promise more expensive to fund. Family buyers do not have a measured return probability of their own. A family buyer who orders through a creator would still carry the creator return regime in the model; a student purchasing in a store would carry the store regime. Segment labels never replace the channel-grade probability calculation. This prevents a persuasive persona from becoming an unrecorded improvement in expected costs. [C-E2, C-E3N3, C-E3N4, C-D2, A19]

The final two criteria connect the chosen package to a job rather than a demographic stereotype. Family buyers are explicitly described as wanting to know who will fix a phone bought for a parent or child. B1 supplies a condition report and B2 a longer warranty and battery promise. That is a close conceptual fit, which is why the team gives family buyers strong scores. It remains an inference: the visitor survey does not cross-tabulate family status with particular concerns. Upgraders' low Q1 reach score reflects deferral of C, not a claim that they never care about reports or warranties. [C-E1A, C-E1B, C-E1C, C-E6B1, C-E6B2, C-E6C, T10]

### Weight sensitivity makes the trade-off visible

Doubling size adds each segment's size score once more to its equal-weight total. Family moves from 24 to 27, flagship from 22 to 27, value seekers from 13 to 17 and upgraders from 16 to 18. Doubling margin instead adds the contribution score: family again reaches 27, flagship 27, value seekers 14 and upgraders 20. The maximum under either seven-weight scheme is 35. A score of 27 out of 35 should not be compared as if its denominator were the equal scheme's 30. The weighted means are approximately 3.86 for both leading segments in either stress. [T26]

Table R18-03. Hand-worked weighting changes and what they do to the decision.

| Segment | Equal total | Double-size working | Double-margin working | Ranking implication | Source |
|---|---:|---|---|---|---|
| Flagship | 22 | 22 + 5 = 27 | 22 + 5 = 27 | Becomes joint first under both stresses | [T26] |
| Family | 24 | 24 + 3 = 27 | 24 + 3 = 27 | Remains first, with a tie rather than a unique lead | [T26] |
| Value seekers | 13 | 13 + 4 = 17 | 13 + 1 = 14 | Remains fourth | [T26] |
| Upgraders | 16 | 16 + 2 = 18 | 16 + 4 = 20 | Remains third | [T26] |

The tie means that the primary-segment decision needs a qualitative justification beyond the score total. We prefer the family job because it gives the report, battery reading and service remedy one coherent role in the buying decision, while its associated grade avoids the separate Superb supply limit. A flagship-led launch is still defensible if the team puts more weight on established segment scale and per-unit economics. The correct presentation acknowledges that choice. Calling the ranking robust without specifying joint first would overstate what the sensitivity demonstrates and weaken the credibility of an otherwise reasonable recommendation. [C-E1C, C-E4b, T26]

There is also a possible overlap between criteria. Grade contribution already reflects expected service costs, so contribution and return risk are not independent measures. Growth room and lever reach can both reward near-term feasibility. We keep the inherited scorecard to preserve the original argument, but we do not treat six criteria as six independent proofs. A judge could reasonably reduce or combine related weights. The tie under stronger size or margin weights gives an immediate indication that the narrow lead is partly a matter of preference. The segment recommendation survives as a transparent managerial choice rather than a mechanically compelled answer. [T2, T10, T26, C-W5]

### Treat each alternative audience fairly

Flagship buyers offer substantial historical presence and the highest-contribution associated grade. They can be reached with the same report-first system and should not be excluded from the launch. What we decline is making them the central incremental-growth story when Superb is already rationed in the chosen plan. The remaining lost Superb demand is about 70 phones per live month before whole-phone presentation, and that loss is allocated across channels proportionately. We cannot promise to recover it by steering all additional interest towards Good unless the case provides such substitution. It does not. [C-E1C, C-E4b, C-E6H4, T22]

Value seekers matter because they represent 29% of historical buyers, and the case explicitly puts a ₹10,000 new budget phone in their consideration set. Their need for a working affordable phone is legitimate. The reason not to lead with them is financial: Fair website contribution under B1/B2 is only ₹163.96 before channel charges and fixed costs. Adding a price-led message would put attention on a grade least able to absorb further concessions. The plan still serves Fair customers under the indivisible B2 package, but it does not finance an additional custom discount or assume that a trust message makes the price comparison irrelevant. [C-E1C, C-K3, C-E6B2, C-F12, T11]

Upgraders bring a different appeal. They already have a phone to exchange and may find the case's trade-in proposition directly useful. C can improve sourcing and add new buyers; it is not dismissed as a bad idea. Its Q1 role is constrained by setup funding and the economics of combining it with the chosen trust packages and shift. Deferral to April is a timing and funding decision, subject to a new allocation and a stated restart ramp. We do not claim upgraders should wait because they have weak needs or low value; their case association with Superb and Good suggests the opposite economic possibility. [C-E1C, C-E6TI1, C-E6TI3, C-E6TI4, A15, T14, T28]

Table R18-04. Audience focus, continued service and the specific reason for declining primary status.

| Audience | Strongest case for focus | Why it is not the chosen primary story | How it remains served | Source |
|---|---|---|---|---|
| Flagship | Size and unit contribution | Incremental Superb constrained | Same report and warranty on eligible purchases | [C-E1C, C-E4b, T11] |
| Value seekers | Price-oriented need and available Fair supply | Thin post-promise economics and new-phone alternative | Transparent Fair condition and full package | [C-K3, T11, C-F12] |
| Family | Accountable service and Good fit | Selected, with judgment caveats | Primary message and demonstration emphasis | [C-E1C, T26] |
| Upgraders | Exchange convenience and sourcing value | Distinctive C lever deferred | Buy under current plan; reconsider exchange after March | [C-E6C, A15, T28] |

### Validate the choice without changing the forecast

The next useful evidence would be a comparison of how different audiences interpret the same proof and remedy. Proposed interviews should ask family buyers what information they need to choose for someone else, how they understand battery health, and what a warranty changes about responsibility for a repair. The same questions should be adapted for flagship and value buyers so that the team can discover a stronger competing job. Those questions have not been asked as new primary research for this report, and no answers should be invented. A future finding could change launch emphasis without retroactively validating the supplied order uplift. [C-E1C, C-Q2, C-Q5]

Table R18-05. Evidence that could change the primary audience, with a boundary against unsupported forecasting.

| Proposed finding | Possible interpretation | Permitted strategic response | What it would not establish | Source basis |
|---|---|---|---|---|
| Families do not understand the report | Proof format is unclear | Change explanation and test comprehension | B1's case uplift is false or true | [C-E6B1, C-Q4] |
| Flagship buyers value the same remedy more | Alternative audience may fit | Reassess message emphasis and supply | New Superb supply exists | [C-E1C, C-E4b] |
| Fair buyers require further price relief | Trust alone may not resolve value gap | Preserve price discipline and reconsider later proposition | Custom Q1 partial A is allowed | [C-K3, C-F12] |
| Upgraders respond to April exchange terms | C may have launch relevance | Reassess funded post-March programme | Actual pickup or conversion results have occurred | [A15, C-E6TI1] |

The choice should not be expressed as a fictional market share ambition. The case has no segment-specific target pool, acquisition cost or available inventory by buyer group. Saying that Tikau will capture a given percentage of family buyers would introduce a model outside the permitted evidence. The useful output is narrower and more operational: write the page and demonstration for the person who wants to know the condition of the phone and who will remedy a failure. Keep every eligible buyer able to inspect the same proof. This gives the team a clear creative brief without pretending to know more about the segment than the exhibits reveal. [C-E1C, C-R1, C-R3, C-F4]

This section supports the Customer slide's segment comparison and its reason for choosing family buyers. The compact exhibit should show the equal scores, the broad grade association and the Superb constraint, with a footnote that doubled size or margin produces a tie. The appendix can retain the score formula and sensitivity arithmetic. The major limitation is that the scores measure the team's interpretation of supplied facts; neither their precision nor their repetition creates new customer evidence. The choice is defensible because its reasoning is explicit and connected to affordable delivery. [C-W2, C-S3, T26]

## 19. The family-buyer proposition must explain both the phone and responsibility for repair

The family buyer in the case buys for a parent or child and wants to know who will fix the phone. We infer a buying job that combines choosing a functional device with making its condition and remedy understandable to another user. B1 and B2 can answer that job with per-phone evidence, a battery threshold and a stated warranty, but the supplied repair delays and repeat visits remain a credibility risk. This persona is an analytical inference from the case, not a newly interviewed household or a measured segment-by-channel profile. [C-E1C, C-E6B1, C-E6B2, C-E4d]

### Define the job without inventing a person

The useful persona has a decision role, a beneficiary and a practical uncertainty. The purchaser chooses the phone; the parent or child may be the principal user; and either may later need help if it fails. We do not assign a name, salary, neighbourhood, occupation or exact age beyond what the case supplies. Such details can make a persona feel familiar while creating evidence that does not exist. The family relationship itself is enough to explain why visible condition and responsibility for remedy belong together. The proposition should let the purchaser show the report to the user and understand how the promise would be honoured. [C-E1C, C-R3, C-W2]

A battery reading is relevant to this job because the visitor survey makes battery endurance the most frequently selected concern. However, that survey covers product-page abandoners and does not identify which respondents were family buyers. We therefore avoid writing that a measured percentage of families fears batteries or that all families prefer a longer warranty to price. The inference is that a funded battery promise is plausibly relevant to the case-defined family need. Its financial feasibility comes from the supplied option mechanics; its exact meaning to actual families remains a proposed validation question. This preserves the difference between a useful working hypothesis and a demonstrated finding. [C-E1A, C-E1B, C-E1C, C-E6B2]

Table R19-01. Persona elements classified by evidence strength.

| Element | Statement used in the brief | Evidence classification | What must remain unstated | Source |
|---|---|---|---|---|
| Purchase role | Buys for a parent or child | Direct case description | All buyers have identical households | [C-E1C] |
| Broad product association | Mostly Good | Direct broad association | Exact Good share within the segment | [C-E1C] |
| Service need | Wants to know who will fix it | Direct case description | Measured willingness to pay for service | [C-E1C] |
| Proof need | Wants information usable by purchaser and recipient | Team inference | New interview quotation | [C-E1A, C-E1C] |
| Preferred route | Store demonstration and referral explanation may help | Proposed channel role | Observed family channel mix | [C-E1A, C-E3, C-Q4] |
| Response to warranty | Longer accountability may support confidence | Proposed interpretation | Segment-specific realised conversion | [C-E1B, C-E6B2] |

The functional job is to obtain a working phone at a defensible price with known condition. The emotional job is to avoid making a purchase that later feels careless. The social aspect is limited to being able to explain the choice to the recipient or another family member. These latter two dimensions are inferred motivations, not survey constructs measured in the case. They help choose what information to make easy to inspect, but they must not become promotional claims about peace of mind, zero risk or universal household approval. A report can make evidence accessible without promising that a purchase can never disappoint. [C-E1A, C-E1C, C-E5a, C-Q2]

### Follow the journey from initial search through a possible repair

At discovery, the family-oriented message should establish that the device is refurbished and that its own report is available. It should not begin with a blanket equivalence to a new phone. At comparison, the purchaser needs real photos, visible marks, the battery reading and a clear explanation of the warranty. At commitment, the page should show price, applicable terms and the route to assistance without false urgency. The model does not assign extra conversion to this information order beyond the case's B1/B2 effects. Its role is to make the proposed promise intelligible and consistent with Exhibit 5. [C-E5a, C-E5b, C-E5d, C-E6B1, C-E6B2, C-Q4]

Delivery adds another check: the device that arrives should match the report shown. That correspondence is a proposed control implied by the every-phone truth rule, not a result already achieved. The purchaser and recipient should be able to find the device record and service route again after the buying session. If the phone is returned or repaired, the team should keep the issue and action connected to the same unit. The case supplies no application architecture or operational tracking system, so the brief states the required relationship without inventing a finished product or an implementation cost beyond B1. [C-E5a, C-E5f, C-E6B1, C-Q5]

Table R19-02. Customer journey requirements and their link to the funded packages.

| Stage | Buyer question inferred for the brief | Proposed response | Package or control | Boundary | Source |
|---|---|---|---|---|---|
| Discover | Is this refurbished phone credible | State refurbishment and point to its own report | B1 plus truthful wording | No like-new equivalence | [C-E5b, C-E6B1] |
| Inspect | What condition am I actually buying | Show real unit photos and battery reading | B1 | No stock-photo substitution for condition evidence | [C-E5a, C-E6B1] |
| Compare | What happens if it needs repair | Explain 12 month warranty and service route | B2 | Do not invent a repair-time guarantee | [C-E6B2, C-E4d] |
| Buy | What price and terms apply | Give clear price and accurate offer | Exhibit 5 review | No fictional reference discount | [C-E5d] |
| Receive | Does this match the chosen device | Make report retrievable and check correspondence | Proposed unit-record control | No claimed test result | [C-E5a, C-Q5] |
| Seek remedy | Who takes responsibility now | Explain contact and claim process | Proposed service communication | Warranty duration does not prove service speed | [C-E1C, C-E4d] |

### Give channels distinct jobs without inventing a family channel mix

Stores can help a prospective buyer see the phone and ask how the report relates to its physical condition. That role fits the case's visitor preference for seeing a phone in person. It does not show that family buyers already choose stores at a known rate. A store demonstration should explain battery health and the warranty in the same language as the website, then let the buyer inspect the actual unit. The economics must still retain the supplied store fixed spend and return regime; a better explanation is not a reason to erase those costs or attribute every store sale to a new campaign. [C-E1A, C-E1D, C-E3N4, A02]

Referrals can carry an explanation from an existing buyer, but the case supplies a coupon mechanism rather than evidence about who refers whom. We therefore propose giving referrers an accurate report link and a clear explanation of the promise. We do not say that parents recommend Tikau to other parents, that referrals have a measured higher trust score or that the coupon produces a new uplift beyond the case. Creators have a demonstration role, with explicit advertisement labelling. Their buyers' higher baseline return regime is retained, so the communication must not be treated as proof that creator demand is intrinsically more reliable. [C-E3N3, C-E3N5, C-E5e, C-Q4]

Table R19-03. Proposed channel roles and the evidence that does not yet exist.

| Channel | Useful role for the inferred job | Supplied economic discipline | Missing evidence | Source |
|---|---|---|---|---|
| Stores | Inspect device and explain responsibility | Fixed spend and half website returns remain | Family share of store customers | [C-E3N4, C-E1C] |
| Referrals | Share a verifiable phone-specific explanation | ₹350 coupon per delivered coded order | Segment-specific referral response | [C-E3N5] |
| Creators | Demonstrate how to read report and terms | Higher return multiplier remains | Measured comprehension improvement | [C-E3N3, C-E5e] |
| Performance ads | Point existing audience towards proof | Existing budget retained | A separately measured family targeting effect | [A02, C-E3N1] |
| MegaKart | Present consistent listing information | Commission rises with affected prices | Any B3 marketplace uplift | [C-E3N2, C-E6B3] |

### The service gap is the strongest challenge to the persona promise

The lab records average repair time of nine days and says 38% of claims require a second visit. Those figures do not support a fast-repair promise, a first-time-fix promise or an assertion that a longer warranty eliminates inconvenience. A family buyer may be especially concerned about the consequence of a device being unavailable, but the case does not quantify that consequence by segment. The safe and useful claim is the duration and actual route of responsibility. Proposed operational work should improve how the business records, explains and responds to service needs, while the financial model retains the supplied average claim cost and B2 rates. [C-E4d, C-E1C, C-E2N1, C-E6B2]

The distinction matters because a warranty can increase the period during which a seller promises remedy without reducing the time a repair takes. In the case, B2 directly changes warranty rates and cost expectations; it does not specify a new repair turnaround. A message about one year of responsibility therefore needs terms that identify covered events and how to claim, but no invented same-day service. If the team wants to recommend a service-time target after the case period, it must label it as proposed and identify what evidence would support it. It cannot quietly attach a service guarantee to the Q1 package for free. [C-E6B2, C-E4d, C-F12]

Table R19-04. Service-promise stress points and the proposed evidence trail.

| Stress point | Why it matters for this buying job | Proposed control | Claim to avoid | Source |
|---|---|---|---|---|
| Repair takes longer than expected | Purchaser may need to explain disruption to recipient | Explain process and status before and during claim | Guaranteed immediate repair | [C-E4d, C-E1C] |
| Repeat visit | First remedy may not resolve issue | Record repeat reason and prior action | Fixed right the first time on every claim | [C-E4d] |
| Battery reading unclear | Threshold may be mistaken for hours of runtime | Explain reading and threshold separately from usage | All-day battery for every user | [C-E5a, C-E6B2] |
| Report cannot be retrieved | Buyer loses proof after checkout | Preserve unit-linked record access | Every record already integrated | [C-E6B1, C-Q5] |
| Warranty wording is vague | Responsibility becomes difficult to use | Publish plain coverage and claim route | All damage covered without limitation | [C-E5a, C-E6B2] |

### Competing readings and proposed validation

A reasonable competing reading is that every buyer, not just a family buyer, wants battery confidence and a clear remedy. That is likely as a general proposition, but the case does not establish its degree across groups. The primary audience is a way of making the message specific enough to guide a page and demonstration. It should not become an exclusive eligibility rule or a statement that students do not value service. The family job earns focus because it is explicit in the case and fits Good economics; other buyers receive the same factual proof. This interpretation avoids an artificial conflict between a focused message and a common operating promise. [C-E1C, C-E6B1, C-E6B2, C-Q2]

Proposed interviews should test whether the purchaser and recipient interpret the promise in the same way. A useful task would ask each to explain what the battery percentage means, identify the warranty duration and locate the route for a repair. A second task could ask the purchaser to compare an actual report with a condition photograph and explain what remains uncertain. These tasks have not been conducted. Their value is in detecting misunderstanding before it becomes a false expectation, not in producing a fictional satisfaction score. Results, if later collected, would need to report recruitment, task wording and the limits of a small sample. [C-Q5, C-E5a, C-R3]

This section supports Customer's persona and Launch's product-page and demonstration brief. The exhibit should identify the case fact, the inferred job, the B1/B2 response and the repair-service limitation in one connected view. It should avoid a fabricated portrait with unsupported life details. The remaining uncertainty is whether the chosen explanation actually improves understanding for this audience; the model uses the case's supplied effects regardless of that unanswered empirical question. The recommendation is therefore an evidence-grounded brief accompanied by proposed validation, not a claim that the persona has already been proven. [C-W2, C-Q4, C-Q5, C-F4]

## 20. Har phone ki kundli connects the phone's report with a year of responsibility

We retain the positioning line, "Har phone ki kundli. Saal bhar ki zimmedari." Its intended English gloss is "Every phone's full report. A year of responsibility." The first sentence points to B1's phone-specific report and the second to B2's 12 month warranty; both need a clear literal explanation beside the line. The choice is a creative recommendation supported by package fit, not a claim that the phrase has been tested or preferred by the surveyed buyers. [C-E6B1, C-E6B2, C-F6, C-Q2]

### Positioning statement and its boundaries

For families buying a phone for a parent or a child, who need it to last and need to know who will fix it, Tikau sells refurbished phones that each come with a lab report, battery health of 85% or more and a 12 month warranty, because every phone is tested and its battery read in Tikau's own lab. This statement describes the chosen post-launch offer under B1 and B2. It is not current-state copy for January or an assertion that a report provides certainty about the device's entire future. The launch must make its commencement and actual phone eligibility clear. [C-E1C, C-E6B1, C-E6B2, C-E6H1, C-E5a]

The phrase kundli is used here as a metaphor for an individual phone's report. We do not need to claim that every family uses the same cultural practice or that this word will resonate equally across India. Its job is to distinguish a unit-specific record from generic certification language. A nearby descriptor should make the meaning concrete: real photos, Tikau-lab battery reading, IMEI check and completed data-wipe record. Without that explanation, the metaphor could obscure the offer. Clarity is a condition of the creative choice, and the proposed comprehension work should be allowed to replace or simplify the line if people misunderstand it. [C-E6B1, C-E5a, C-Q4, C-Q5]

Table R20-01. Positioning components and the evidence each must carry.

| Component | Chosen expression | Case basis | Claim boundary | Source |
|---|---|---|---|---|
| Audience | Families buying for a parent or child | Supplied buyer description | Do not infer exclusive eligibility | [C-E1C] |
| Category | Refurbished phones | Listing rule | Never replace with like-new equivalence | [C-E5b] |
| Benefit | Know condition and who takes responsibility | Family service need and visitor concerns | No promise of failure-free ownership | [C-E1A, C-E1C] |
| Reason to believe | Phone-specific report and lab reading | B1 package | Every shown claim must match actual unit | [C-E6B1, C-E5a] |
| Remedy | 12 month warranty | B2 package | Do not invent repair speed or unlimited coverage | [C-E6B2, C-E4d] |

### Build the message from the promise down to inspectable proof

The top-level message is that this refurbished phone has a report the buyer can inspect and a stated year of warranty responsibility. Below it, the first reason to believe is condition visibility through real photographs. The second is a battery reading from Tikau's own lab, with the threshold stated accurately for the chosen package. The third is a usable warranty explanation. These reasons are supported by proof fields, not by an unqualified trust badge. The IMEI and wipe checks remain mandatory release controls and can be displayed accurately, without suggesting that a clean lookup proves every possible aspect of provenance or that a certificate prevents all future problems. [C-E5a, C-E5f, C-E6B1, C-E6B2]

The order of the message should answer a practical buying question before asking the customer to accept a broad brand adjective. A reader should be able to open the report, match its photos to the phone and find what the battery number means. Price remains clear and visible; report-first does not mean hiding the price or requiring a long educational journey before checkout. It means that the first supporting explanation justifies the proposition with the actual device. The financial forecast does not receive a separate uplift for that layout choice. Its effect remains whatever the case assigns to B1 and B2, with proposed tests used only to assess comprehension. [C-Q4, C-E6B1, C-E6B2, C-E6H2]

Table R20-02. Message hierarchy and evidence needed at each level.

| Level | Customer-facing content | Inspectable backing | Review question | Source |
|---|---|---|---|---|
| Main line | Har phone ki kundli. Saal bhar ki zimmedari. | Report availability and warranty terms | Does literal explanation sit beside metaphor | [C-Q2, C-E6B1, C-E6B2] |
| Condition | Real photos of this refurbished phone | Unit-linked photographs and marks | Does image describe delivered phone | [C-E5a, C-E6B1] |
| Battery | At least 85% battery health, read in Tikau's lab | Recorded reading for this unit | Is the reading current and qualifying | [C-E5a, C-E6B2] |
| Warranty | 12 month warranty | Published scope and route to claim | Does copy avoid a false repair-time promise | [C-E6B2, C-E4d] |
| Release checks | IMEI checked and data wipe completed | Dated check and completion record | Is either missing or adverse | [C-E5f, C-E6B1] |

### Alternatives considered on the same basis

We considered a literal evidence line, a family-service line and a battery-led line. Each could work as a descriptor, but none should claim demonstrated preference. The comparison is a team's creative judgment against specificity, completeness and proof burden. A line that mentions the battery is easy to connect to the leading visitor worry, yet it may leave the condition report and remedy unclear. A purely family-service line can state the job but be less specific to an individual phone. A report-only line can be precise while underplaying the funded warranty. The retained phrase joins the report and period of responsibility, with literal detail supplying its missing technical meaning. [C-E1A, C-E1C, C-E6B1, C-E6B2, C-Q2]

Table R20-03. Three draft alternatives and why they remain supporting copy rather than the main line.

| Draft alternative | Strength | Limitation | Possible retained role | Evidence basis |
|---|---|---|---|---|
| Is phone ki report dekhiye. | Direct invitation to inspect this phone | Says little about remedy | Report button or demonstration opening | [C-E6B1, C-Q4] |
| Apnon ke liye, zimmedari ke saath. | Connects family purchase and responsibility | Does not identify the proof or warranty period | Supporting family-oriented introduction | [C-E1C, C-E6B2] |
| Battery 85, bharose ka saboot. | Names the battery threshold | Could imply one reading proves broad trust | Use literal threshold with narrower explanation instead | [C-E5a, C-E6B2] |

These are draft creative alternatives authored for the case. They have not been shown to customers. The retained wording should therefore be accompanied by an explicit validation question rather than a claim of memorability measured in market. A proposed test could ask a reader to restate the meaning without prompting, identify what the warranty covers and distinguish an own-lab battery reading from a runtime guarantee. A preferred line is useful only if it leads to a correct understanding. A phrase that is recalled but misunderstood can create exactly the expectation gap the report is meant to reduce. [C-Q2, C-Q5, C-E5a]

### The line itself must survive Exhibit 5

The report claim is universal in the wording, so every phone on which it appears needs the report. The year-of-responsibility language should be interpreted through the actual warranty, not as a statement that every issue or accidental damage is covered. The category descriptor must still say refurbished. Neither the phrase nor its surrounding design can imply brand-made parts, a new device, a named competitor advantage or a risk-free purchase. Customer understanding depends on the complete page, so the review includes photographs, badges, price treatment and creator explanation as well as the slogan. A technically careful footnote cannot repair a prominent false claim. [C-E5a, C-E5b, C-E5c, C-E5d, C-E5e, C-E6B1, C-E6B2]

Table R20-04. Claim review for the retained line and its immediate surroundings.

| Exhibit 5 requirement | Relevant risk | Required treatment | Release decision | Source |
|---|---|---|---|---|
| Every claim true for each phone | Universal report language without a record | Link complete report to unit | Hold listing if record missing | [C-E5a] |
| Refurbished and parts wording | Metaphor presented like new-device assurance | State refurbished; avoid genuine-parts claim | Remove forbidden wording | [C-E5b] |
| Named comparison proof | Adding a cheaper-than-rival subheading | Describe Tikau offer only | Refuse unsupported comparison | [C-E5c] |
| Honest urgency and pricing | Countdown or fictional reference price | Use actual stock and actual charged prices | Remove invented pressure | [C-E5d] |
| Reviews and creators | Slogan repeated as unpaid personal endorsement | Verify reviews and label advertising | Disclose relationship and reward | [C-E5e] |
| Wipe and IMEI | Trust line appears before release checks complete | Require completed wipe and acceptable registry result | Stop affected sale | [C-E5f] |

### Language context, kept outside the forecast

Context only: the verified language study checked equivalent meanings through back translation and separately pretested slogan clarity, appeal and flow. Those procedures support checking the intended meaning of this draft. They do not establish that the retained line works for Tikau's family buyers. No study effect enters the case model. [I03, I05]

For this report, the practical transfer is a proposed process. Write the intended English meaning, ask fluent readers to restate the Hindi or Hinglish line, compare what changes, and then ask prospective buyers to explain the actual offer. The team should look for a misunderstanding of responsibility, a belief that the device is new, or an assumption that battery health promises hours of use. Those are claim-comprehension issues, not reasons to attach an external language-study percentage to Tikau's conversion. The supplied order effects remain case assumptions and the proposed review remains unperformed. [C-E5a, C-E5b, C-E6B1, C-E6B2, C-F4]

The strongest alternative is a fully literal headline that states the battery threshold and warranty duration. It may require less interpretation and could outperform the metaphor in comprehension. We retain the original line because it connects the distinctive report and the remedy in a compact phrase, but we would let evidence about misunderstanding change its prominence. The headline can sit above a literal descriptor rather than replace it. This is a reversible creative choice within the funded proposition, provided it neither changes the promised package nor adds an invented performance effect to the forecast. [C-Q2, C-Q4, C-F6, C-F12]

This section supports Customer's positioning statement and Launch's message hierarchy. The slide exhibit should show the retained line, its literal gloss, the three reasons to believe and the unit-level proof below them. It should identify the wording as the proposed February message, not a tested result or a January promise. The main limitation is audience comprehension: the phrase's intended meaning is clear to the team, while the case supplies no test of whether prospective buyers understand it correctly. That uncertainty belongs in the proposed validation plan. [C-E6H1, C-Q5]

## 21. B1, B2 and a February third shift work together where no individual option clears the full screen

The individual levers solve different problems, so their standalone results cannot identify the best package. B1 makes evidence visible and lowers returns, B2 changes the paid promise and grade economics, and the third shift lets Tikau deliver the resulting demand; A, B3 and C each have a credible role but a weaker Q1 fit under the case's constraints. We evaluate all six options through the same ten questions and keep growth money separate from operating costs. A numerical pass on the claims field remains conditional on executing Exhibit 5 controls. [C-E6A, C-E6B1, C-E6B2, C-E6B3, C-E6C, C-E6SH, T12, T23]

### A: price push

#### 1. What Exhibit 6 specifies

A adds ₹10 lakh of performance advertising in each active month and reduces the Fair price by 3% in every channel. It increases orders by 50% in performance ads and MegaKart, while changing those channels' grade mixes toward Fair. The effect starts in February, so a January to March choice spends two months of incremental advertising and receives no January sales improvement. The proposal answers Rohan's stated concern that price and volume must improve, but the exact intervention is a modest price cut attached to a large demand increase in channels already selling substantial Fair volume. It is a specified case option, not permission to redesign the advertising budget or change its assumed elasticity. [C-B4, C-E6A, C-E6H1]

The visitor research provides a reason to consider price, although it does not validate this particular response curve. Some nonbuyers cited the local-shop price difference, and some selected a hypothetical 5% reduction as a reason to buy. Neither answer is a measured elasticity for A's 3% cut. The multiple-response format also means a respondent could care about price and battery condition simultaneously. We therefore use the exhibit's order effect in the model while keeping the research interpretation narrower: price matters to a part of the audience, and this specific price package must earn its place through the supplied economics. [C-E1A, C-E1B, C-E6A, C-R2]

#### 2. Effect on each grade's economics

At website return rates A leaves Superb and Good unit contribution unchanged and reduces Fair contribution from ₹716 to ₹416. The calculation is straightforward: 3% of the ₹10,000 Fair selling price is ₹300; no offsetting unit-cost saving is supplied. On MegaKart, the commission falls with the Fair selling price, so the net channel loss per Fair phone is smaller than the full price reduction. That commission relief does not erase the low-margin issue. Once B1 and B2 are added, website Fair contribution is only about ₹164 before A and becomes about negative ₹136 after the cut. These are unit calculations before the relevant fixed channel spend. [C-E2, C-E3N2, C-E6A, C-E6H2, T11]

Table R21-01. A's price arithmetic and the distinct research question it leaves unanswered.

| Comparison | Working or interpretation | Decision consequence | Source |
|---|---|---|---|
| Fair price change | ₹10,000 × 3% = ₹300 reduction | Contribution absorbs the price cut | [C-E2, C-E6A] |
| Fair website contribution | ₹716 minus ₹300 = ₹416 | Positive before fixed marketing, with little protection | [T2, T11] |
| Fair MegaKart commission relief | ₹300 × 12% = ₹36 | Net price effect after commission is negative ₹264 | [C-E3N2, C-E6A] |
| Fair with B1 and B2, then A | About ₹164 minus ₹300 = negative ₹136 | Trust package and broad Fair discount conflict economically | [T11] |
| Survey offer versus actual lever | Survey asks about 5%; A cuts 3% | Do not treat response share as A's measured conversion effect | [C-E1B, C-E6A] |

#### 3. Effect on orders, mix and returns by channel

A's order increase is concentrated in performance ads and MegaKart. Performance ads move from 20/40/40 to 15/35/50 Superb/Good/Fair; MegaKart moves from 10/45/45 to 5/40/55. Creators, stores and referrals receive the Fair price cut without an assigned order increase. That asymmetry matters because a universal discount reduces revenue in channels where the model grants no extra demand. The intervention also moves aggregate demand toward the grade with the lowest contribution and highest website return rate. A does not itself reduce any grade's return probability. The weighted company return rate can change because the mix changes, even though each grade's rate is unchanged. [C-E3, C-E6A, C-E2N4, T12]

A fair reading of Rohan's proposal is that additional orders could spread fixed expenses over more phones. That logic is valid when delivered incremental contribution exceeds the discount and advertising burden. It fails if the lab cannot deliver much of the extra demand or if the added mix produces too little contribution. Lost orders receive no forecast lifetime value, future referral benefit or unmeasured brand effect in this case. Adding any such benefit would require a new assumption outside the closed option economics. We judge A on delivered phones, actual selling prices and specified costs rather than on a count of orders before rationing. [C-E6H4, C-E2N3, C-F4, T22]

#### 4. Setup, monthly growth money and operating costs

A has no setup payment. Its February and March advertising totals ₹20 lakh of growth money. The ₹10 lakh monthly charge enters the growth ledger once and reduces that month's EBITDA under the case convention. We do not also add it to the existing performance-ad fixed spend, which would double count the option. The Fair discount instead reduces contribution through the selling price; it is not a separate allocation from the growth envelope. Existing channel spending remains in the model because the option provides no cancellation or reallocation instruction. A's zero setup cost therefore does not mean it has zero economic cost. [C-E6A, C-E6H3, C-D1, A01, A02]

#### 5. Supply and lab consequences

The company already fills its sellable capacity in the baseline. A creates demand that must pass through the same lab and the same Superb supply screen. The prescribed sequence first caps Superb demand proportionally and then rations all remaining orders proportionally if the lab is full. This can displace orders from channels that did not receive an uplift, so one cannot attribute every extra ad order to incremental company volume. A February shift allows more delivery but does not selectively reserve new slots for the highest-margin phones. The case requires proportional rationing. A commercial allocation redesign might be worth studying later, but it is not one of the permitted calculations. [C-E4a, C-E4b, C-E6H4, T22]

#### 6. Standalone result under all four tests

A alone uses ₹20.0 lakh, produces March EBITDA of negative ₹55.7 lakh and a March return rate of 8.87%. It clears the growth cap but misses March profitability, the return limit and the model's claims proxy. Adding a February shift uses ₹38.0 lakh and improves March EBITDA to negative ₹36.9 lakh, which remains a substantial loss. It does not fix returns or provide the own-lab evidence needed for battery claims. These comparisons should be shown together: dismissing the proposal only in its capacity-constrained form would understate the strongest reasonable version of Rohan's volume argument. Even that stronger version fails the board screen. [T12, T14, C-T1t, C-T2t, C-T3t, C-T4t]

Table R21-02. A's approval logic, with the stronger capacity version treated explicitly.

| Question | A alone | A with February shift | Consequence | Source |
|---|---|---|---|---|
| Growth money | ₹20.0 lakh | ₹38.0 lakh | Both affordable inside cap | [T12, T14] |
| March EBITDA | Negative ₹55.7 lakh | Negative ₹36.9 lakh | Capacity helps but does not repair economics | [T14] |
| March returns | 8.87% | 8.87% | Mix problem survives added capacity | [T12] |
| Claims evidence | No B1 proxy | No B1 proxy | No demonstrated compliant battery evidence route | [C-E4c, C-E5a, T12] |
| Interaction with trust package | Fair discount remains costly | Shift still cannot repair discounted Fair margin | Reject as Q1 package addition | [T11, T12] |

#### 7. Role in combinations

A can combine mathematically with the other levers, with order multipliers applied as specified and price changes applied to the eligible grades. B1 and B2 can reduce the return rates of A's changed mix, but they cannot remove its Fair price cut or advertising payment. A plus the complete trust package and February shift fits the funding cap at ₹78 lakh yet still loses about ₹40.3 lakh in March. That is a useful counterexample to the view that adding every customer-facing improvement must create a stronger plan. The changes interact through contribution, mix and rationing, so a feasible spend ledger alone cannot establish economic feasibility. [C-E6H2, T11, T12]

#### 8. Q1 verdict

Reject A for Q1. The reason is not that price never matters; it is that the permitted price intervention makes the March profit test harder while leaving other concerns unresolved. Tikau can still display its actual price plainly and explain value. It cannot insert an unmodelled alternative discount and claim to have evaluated Exhibit 6. The board should see the strongest counterargument, namely improved absorption with more capacity, followed by its failed result. That sequence makes the refusal an economic choice rather than a moral preference for a trust narrative. [C-E6A, C-Q3, C-W3, T14]

#### 9. April relevance

The audited April comparison also rejects adding A to the operating recommendation. It raises modeled demand well above capacity but produces March-like ongoing EBITDA of negative ₹40.3 lakh, compared with positive ₹5.6 lakh when the chosen plan continues. The roughly ₹45.9 lakh deterioration is recurring in the specified month and does not depend on charging a new setup fee. Waiting until April therefore does not by itself turn this version of price-led growth into an attractive intervention. A later proposal would need different economics and approval, not merely a later date. [T20, C-Q5]

#### 10. Conditions under which the verdict changes

Reconsider only if the decision inputs change with evidence and authorization: a different acquisition cost, a different discount mechanism, more profitable incremental mix, or unused deliverable capacity could alter the result. Those possibilities are not forecasts and receive no credit in Q1. A narrow test would need to separate customer response from capacity availability and would have to report contribution after the discount, returns and paid acquisition. A lift in clicks or gross orders would be insufficient. The relevant decision is whether a revised intervention adds delivered contribution without breaching the return and claims conditions. [C-E2N3, C-E3N7, C-E6H4, C-R3, C-Q5]

### B1: Tikau Report

#### 1. What Exhibit 6 specifies

B1 pays ₹15 lakh of setup and attaches a condition report to every sold phone. The report contains real photos, a battery reading taken in Tikau's own lab, an IMEI check against the government registry and a data-wipe certificate. It costs ₹120 per sold phone, lifts orders by 8% in every channel and reduces return rates by 30%. The model takes those effects as the case stipulates. It does not infer that a certificate alone changes customer behavior or that all report fields already exist reliably in January. The setup must create a repeatable release process rather than an attractive empty report template. [C-E6B1, C-E6H1, C-E5a, C-E5f]

#### 2. Effect on each grade's economics

B1 has an immediate unit cost and a smaller expected-return saving. At website rates, Superb saves ₹21.60 of expected return cost and pays ₹120, leaving ₹4,554.60 contribution. Good saves ₹37.80 and leaves ₹2,441.80. Fair saves ₹70.20 and leaves ₹666.20. The return savings are larger for Fair because its starting return probability is higher, but the report remains a net unit cost for every grade before order growth. Calling B1 a pure cost-saving project would therefore misstate its economics. Its case rests on the combined value of better evidence, fewer returns and incremental deliverable orders. [C-E2, C-E2N2, C-E6B1, T11]

Table R21-03. B1's unit cost compared with its expected website return saving.

| Grade | Expected return saving | Report cost | Net unit contribution change | Interpretation | Source |
|---|---|---|---|---|---|
| Superb | 4% × 30% × ₹1,800 = ₹21.60 | ₹120 | Negative ₹98.40 | Evidence cost exceeds return saving | [C-E2, C-E6B1] |
| Good | 7% × 30% × ₹1,800 = ₹37.80 | ₹120 | Negative ₹82.20 | Order and compliance roles matter | [C-E2, C-E6B1] |
| Fair | 13% × 30% × ₹1,800 = ₹70.20 | ₹120 | Negative ₹49.80 | Larger saving still does not fully pay report | [C-E2, C-E6B1] |
| Store regime | Half website return saving by grade | ₹120 | More negative than corresponding website change | Lower original returns mean less financial saving | [C-E3N4, C-E6B1] |
| Creator regime | 1.5 times website return saving by grade | ₹120 | Less negative than corresponding website change | Larger saving starts from higher risk | [C-E3N3, C-E6B1] |

#### 3. Effect on orders, mix and returns by channel

All channels receive the same 1.08 order multiplier, with their existing grade mixes preserved before any supply rationing. Each channel's own return rate is multiplied by 0.70. Stores therefore remain lower-return than website orders, and creator orders remain higher-return for a given grade. A uniform relative reduction does not make channel rates equal. The aggregate rate must be recomputed on delivered channel-grade volumes after rationing. Using the website rate on all phones would erase the supplied store and creator differences and change the financial result. [C-E6B1, C-E3N3, C-E3N4, C-E6H4, T22]

The evidence package also has channel-specific work to do even though the model grants a uniform demand effect. Stores can demonstrate the report against a physical device; creators can explain how to read it; referral recipients can inspect it without relying solely on the referrer's word. These are proposed execution roles, not separately measured response rates. MegaKart's marketplace format may limit presentation, but the per-phone evidence obligation remains. None of those practical differences authorizes changing the model's common 8% effect or attributing unobserved conversion to a particular report field. [C-E3, C-E6B1, C-Q4, C-F4]

#### 4. Setup, monthly growth money and operating costs

The ₹15 lakh setup is paid in January and charged to growth money and January EBITDA once. The ₹120 report cost applies to delivered sales from February and reduces contribution. It is not growth money and has no stated monthly cap. This distinction is important when comparing B1 with a campaign: an affordable setup can create a material ongoing per-phone cost, whereas B3 has a monthly growth charge. Both reduce EBITDA, but they enter different ledger layers. There is no separate monthly B1 fee in the case, and inventing one for data storage or staff would mix outside operational assumptions into the protected forecast. [C-E6B1, C-E6H1, C-E6H3, C-D1]

#### 5. Supply and lab consequences

B1 increases requested orders while requiring better phone-specific records. The numerical model treats capacity as the exhibit states and does not assign additional test minutes to the report. That is a limitation, not proof that the report is effortless. A third shift expands sellable capacity under the case, but there is no supplied time-and-motion evidence showing that it guarantees report quality. Operations must separately demonstrate unit identification, own-lab battery readings, photo matching, IMEI status and wipe completion. If the report process cannot support the claimed throughput, management must correct the launch rather than treating the model's B1 flag as operational certification. [C-E4a, C-E4c, C-E4e, C-E6B1, C-E6SH, C-E5a, C-E5f]

#### 6. Standalone result under all four tests

B1 alone spends ₹15.0 lakh and reduces March returns to about 5.66%, below the board's 6.0% limit, but March EBITDA remains negative ₹19.6 lakh without a shift. A February shift raises its growth spending to ₹33.0 lakh and improves March EBITDA to negative ₹17.6 lakh. The report helps returns and supplies the model's claims proxy, yet the economics do not clear the profit test. The comparison separates a necessary piece of the recommended package from a sufficient solution. Board approval cannot rest on the fact that a lever addresses a real problem if the selected overall plan still fails a mandatory outcome. [T12, C-T1t, C-T2t, C-T3t, C-T4t]

Table R21-04. B1's numerical proxy compared with the evidence required for an actual release.

| Control question | What selecting B1 supplies in model | Evidence operations must retain | Failure response | Source |
|---|---|---|---|---|
| Battery claim | Own-lab reading included in package | Reading linked to sold unit | Hold claim and affected listing | [C-E6B1, C-E5a] |
| Condition statement | Real photos included | Photos of same unit and disclosed marks | Correct mismatch before sale | [C-E6B1, C-E5a] |
| IMEI | Registry check included | Acceptable result for same device | Stop sale on adverse result | [C-E5f, C-E6B1] |
| Data wipe | Certificate included | Completed wipe with unit reference | Stop sale if incomplete | [C-E5f, C-E6B1] |
| Marketing conduct | No automatic enforcement | Claim review, verified review and ad disclosure checks | Remove or amend tactic | [C-E5b, C-E5c, C-E5d, C-E5e] |

#### 7. Role in combinations

B1 combines with B2 to create inspectable proof for the more expensive battery and warranty promise. Their order multipliers produce 1.08 × 1.08 = 1.1664, while their return multipliers produce 0.70 × 0.80 = 0.56. The latter means a 44% reduction from the former rate, not a 50% reduction. B1 also combines with C in two conditionally feasible shift plans, showing that a warranty extension is not the only mathematically feasible route. The recommendation chooses among those routes on stated economics and execution priorities rather than declaring B2 logically compulsory in every compliant plan. [C-E6H2, T23, T29]

#### 8. Q1 verdict

Select B1 as part of B1 plus B2 with the February shift. Its role is to make the proposition verifiable at the unit level and contribute to the modeled return reduction, while B2 and capacity make the package economically viable. B1 is not selected because its standalone return savings exceed its cost; they do not. It is selected because the combined plan performs best on Q1 EBITDA among the plans that meet the numerical screen, conditional on operational claim compliance. This reasoning should remain visible so judges can distinguish a package decision from an unsupported claim that every trust investment is automatically profitable. [T11, T23, C-W1, C-W3]

#### 9. April relevance

Keep B1 in operation if the proof chain works and costs remain within the supplied assumptions. A deferred trade-in program should inherit the same report requirements for every phone sold, including new customers who buy while trading in. It would be wrong to treat trade-in origin as a substitute for testing or to exempt those orders from the report fee. April therefore adds sourcing and acquisition activity to an existing release standard, rather than creating a less controlled channel. No second B1 setup payment is assumed in that continuation scenario. [C-E6H2, A12, A15, T28]

#### 10. Conditions under which the verdict changes

The immediate reason to pause B1's public claim would be a broken evidence trail, not a small shortfall in orders. Missing photographs, a trader reading substituted for Tikau's own reading, incomplete wipes or an adverse IMEI result invalidate the affected claim or sale. Economically, a higher per-phone report cost or a weaker delivered-order response would require a refreshed forecast; the base model does not establish an unlimited willingness to pay for documentation. A proposed page test can check understanding but has not been run, and it should not retroactively supply a forecast effect. Continue only with truthful records and a measured operating process. [C-E4c, C-E5a, C-E5f, C-Q5, C-R3]

### B2: Battery 85 and 12 month warranty

#### 1. What Exhibit 6 specifies

B2 pays ₹25 lakh of setup, brings Good and Fair phones to battery health of at least 85%, extends the warranty to 12 months and changes warranty claim rates to 4%, 6% and 9% for Superb, Good and Fair. It raises Superb and Good prices by 4%, increases orders by 8% in every channel and reduces return rates by 20%. The case expects battery replacement on 40% of Good and 70% of Fair phones, at different battery costs. These are package terms: one cannot take the price rise while omitting the funded battery promise or replace the warranty assumptions with a convenient lower claims rate. [C-E6B2, C-E6H2]

#### 2. Effect on each grade's economics

Superb gains ₹960 in price, pays ₹25 more expected warranty cost and saves ₹14.40 of expected website return cost, producing ₹5,602.40 contribution. Good gains ₹640 in price, pays ₹400 expected battery cost, has unchanged expected warranty cost and saves ₹25.20 in expected return cost, producing ₹2,789.20. Fair receives no price increase, pays ₹560 expected battery cost, saves ₹25 in expected warranty cost and ₹46.80 in expected return cost, leaving ₹227.80. This distribution shows why the recommendation emphasizes Good without suggesting Fair buyers deserve a weaker claim standard. The uniform promise has very different economic support across grades. [C-E2, C-E2N1, C-E2N2, C-E6B2, T11]

Table R21-05. B2's promise is funded differently by each grade at website return rates.

| Grade | Price gain | Expected battery cost | Warranty change | Return saving | Net change versus today | Source |
|---|---|---|---|---|---|---|
| Superb | ₹960 | None specified | Negative ₹25 | ₹14.40 | Positive ₹949.40 | [C-E2, C-E6B2] |
| Good | ₹640 | ₹400 | Zero | ₹25.20 | Positive ₹265.20 | [C-E2, C-E6B2] |
| Fair | Zero | ₹560 | Positive ₹25 | ₹46.80 | Negative ₹488.20 | [C-E2, C-E6B2] |
| MegaKart adjustment | 12% of eligible price increase goes to commission | Same battery rule | Same grade claim rule | Channel return rule retained | Price gain cannot be kept in full | [C-E3N2, A11] |

#### 3. Effect on orders, mix and returns by channel

B2 applies an equal order multiplier across channels and preserves their original mixes before rationing. Its 20% return cut multiplies each channel-grade rate, so a Fair creator order remains riskier than a Fair store order. The higher Superb and Good prices also raise MegaKart commission. This is one reason the marketplace's March contribution can disappoint despite more demand: the platform retains a share of the price gain while Tikau bears the report and battery obligations. Referrals retain their coupon cost and stores retain their fixed spend. B2 does not authorize eliminating any of those costs in exchange for a stronger warranty. [C-E6B2, C-E3N2, C-E3N3, C-E3N4, C-E3N5, T21, A11]

The survey gives B2 a plausible customer rationale because respondents selected the battery threshold and longer warranty as potential reasons to buy. It does not tell us that the same people selected both, nor does it establish that family buyers alone prefer them. We use the responses to explain proposition fit and the case's supplied effect to forecast demand. Keeping those roles separate prevents an apparently persuasive but invalid calculation that adds survey percentages into a conversion uplift. The package also needs clear wording: battery health is a measured condition at release, not a guarantee of hours of use under every workload. [C-E1B, C-E6B2, C-E5a, C-W2]

#### 4. Setup, monthly growth money and operating costs

The ₹25 lakh setup hits January growth money and EBITDA once. Expected battery replacements reduce per-phone contribution from February, and the revised warranty probabilities enter expected warranty cost on sold phones. Neither is charged to the ₹80 lakh growth envelope. The absence of a monthly B2 growth fee does not make its ongoing promise free: Good and Fair battery costs alone are substantial. Conversely, charging them again as growth money would wrongly reject otherwise affordable plans. The board needs both ledgers, one establishing whether the company can fund the selected investment and the other showing whether the resulting offer earns a positive monthly operating outcome. [C-E6B2, C-E6H3, C-D1, T16]

#### 5. Supply and lab consequences

The extra orders encounter the existing sellable limit and the Superb supply ceiling. Good has no stated wholesale supply cap, which supports its role in the primary segment choice, but it still uses finite lab delivery capacity. B2's replacement shares must be tracked against the relevant tested batches, not inferred from total company orders. The case supplies no independent labor-time estimate for battery swaps, so the model cannot prove that every replacement and report can be completed at the stated throughput. Management should verify work instructions, tester consistency and release records before publicizing the claim at scale. The model provides the volume boundary, while the operating plan must prove execution inside it. [C-E4a, C-E4b, C-E6B2, C-E6SH, T27]

#### 6. Standalone result under all four tests

B2 alone spends ₹25.0 lakh but leaves March EBITDA slightly negative at about ₹0.7 lakh below zero and returns at 6.47%. With a February shift, it spends ₹43.0 lakh and earns positive ₹2.8 lakh in March, yet still misses the 6.0% return limit and lacks B1's model proxy for own-lab evidence. This is a financially credible rival, not an obviously wasteful plan: its Q1 result improves on doing nothing. It nevertheless fails the full board screen. The fact that it saves spending relative to the recommendation does not permit the analyst to treat returns and truthful claims as optional preferences. [T12, T14, C-T2t, C-T3t, C-T4t]

Table R21-06. B2's measurable economic controls and their claim boundaries.

| Variable | Base input or result | Proposed interpretation | What would be incorrect | Source |
|---|---|---|---|---|
| Good replacements | 40% at ₹1,000 each | ₹400 expected cost per Good phone | Charging ₹1,000 on every Good phone | [C-E6B2] |
| Fair replacements | 70% at ₹800 each | ₹560 expected cost per Fair phone | Giving Fair the Good price increase | [C-E6B2] |
| Good warning | Proposed 50% | Investigate before economic boundary | Calling warning the zero-profit point | [T27] |
| Good single-input boundary | 55.0638948104% | March EBITDA zero with other base inputs held | Treating as a universal safe swap rate | [T24, T27] |
| Battery claim | At least 85%, own-lab reading | Verify actual unit qualification | Promising all-day runtime from health percentage | [C-E5a, C-E6B2] |

#### 7. Role in combinations

B2 works best here with B1 and the shift. B1 supplies the report and a further return reduction; the shift releases enough profitable sales to cover its own recurring charge. With B1 and B2 but no added capacity, March remains negative ₹8.6 lakh despite the stronger unit economics. With the February shift it becomes positive ₹5.6 lakh. C can improve sourcing and add buyers but uses setup money that conflicts with the shift inside Q1. B3 adds demand for a monthly campaign fee and does not produce an attractive incremental result at its stipulated effect. These interactions explain selection without pretending B2 alone achieves every objective. [T12, T23, T25]

#### 8. Q1 verdict

Select B2 within the recommended package and publish its terms only after the operating evidence is ready. Good economics can support the family promise, while the Superb cap prevents simply moving all demand toward the highest contribution grade. The plan should disclose Fair's narrow contribution and monitor actual battery replacement shares. There is no license to lower quality on Fair phones to preserve margin; all promised eligibility conditions still apply. If costs worsen, management must change sourcing, the offer or future approval, rather than silently weaken the public claim. [T11, T24, C-E4b, C-E5a, C-E6B2]

#### 9. April relevance

Keep the battery and warranty promise if it remains properly funded and verifiable. It applies to trade-in buyers' purchases as well as existing channels. The April trade-in case should therefore inherit the same replacement costs, report costs, prices and warranty rates rather than modelling an inexpensive acquisition cohort exempt from the promise. A warranty is a continuing obligation, so ending a campaign does not remove responsibility for eligible phones already sold. The forecast uses expected claims costs as specified and does not supply a separate cash schedule for future claim payments. April profitability should not be mistaken for proof of cash sufficiency through the warranty period. [C-E6H2, C-E6B2, C-E2N1, A12, T28]

#### 10. Conditions under which the verdict changes

The most immediate financial threat is a replacement share above plan alongside weaker order response. At the base combined uplift, Good replacements reaching about 55.06% erase March profit with all other inputs fixed; a warning at 50% leaves time to inspect supplier lots and tester consistency. At only an 8% combined uplift, March is already negative under the base replacement share. These are different dimensions and should not be collapsed into one safety threshold. The recommendation changes if measured economics no longer support the promise, but a model boundary cannot justify selling a phone with a false reading. Truthful unit-level release remains binding at every margin. [T24, T27, C-E5a]

### B3: trust campaign

#### 1. What Exhibit 6 specifies

B3 costs ₹15 lakh per active month and increases orders by 5% in every channel except MegaKart. It is only permitted with B1 or B2. There is no legal standalone B3 plan, so its isolated evaluation must show the dependency rather than invent a campaign without a funded offer. The option can communicate genuine improvements, but the case assigns it no separate change to prices, warranty, battery replacement or return rates. Its economic question is whether the extra deliverable orders are worth the recurring campaign payment after the underlying package has already paid to create the promise. [C-E6B3, C-E6H2]

#### 2. Effect on each grade's economics

B3 does not change contribution per phone within a grade-channel cell. Its ₹15 lakh monthly cost is paid at the company growth-money layer. The campaign can increase total contribution if it delivers incremental sales with positive contribution, yet the fixed campaign expense can exceed that gain. This distinction matters because reporting a lower average channel acquisition cost after higher volume can hide an added central campaign payment. The appropriate comparison holds the chosen offer constant, recomputes delivery after constraints and deducts B3 once. It does not give B3 credit for the price increases or return cuts belonging to B1 and B2. [C-E6B3, C-E6H3, C-D1, T12]

Table R21-07. B3's incremental comparison should hold the underlying offer constant.

| Comparison choice | Proper treatment | Why it matters | Source |
|---|---|---|---|
| Grade economics | Keep underlying package contribution | B3 has no new price or cost promise | [C-E6B3, T11] |
| MegaKart orders | No B3 uplift | Campaign does not reach that channel in case | [C-E6B3] |
| Other channel orders | Multiply by 1.05 before rationing | Gross demand is not delivered sales | [C-E6B3, C-E6H4] |
| Campaign expense | ₹15 lakh each active month | A continuing charge must earn continuing contribution | [C-E6B3, C-E6H3] |
| Claims | Depend on actual offer and tactic review | A funded campaign does not certify its copy | [C-E5a, C-E5e] |

#### 3. Effect on orders, mix and returns by channel

The campaign preserves each reached channel's grade mix before rationing and has no direct return-rate effect. However, the aggregate delivered mix can change because MegaKart receives no uplift and supply constraints affect high-Superb channels. A small change in aggregate return rate after B3 therefore does not show the campaign made individual phones more reliable. It reflects volume weighting. Creators and stores have stronger Superb exposure than MegaKart, so the supply screen can remove a portion of their requested increase. An analysis that applies 5% to the entire company, including the marketplace, would overstate both reach and available contribution. [C-E3, C-E6B3, C-E6H4, T22]

The marketing case for B3 deserves a fair hearing. A newly improved product needs explanation, and messages about reports and warranty may be easier to understand with demonstrations. The choice to reject the dedicated paid lever does not mean Tikau should launch silently. Existing creators, stores, referral communication and product pages can explain the offer within the channel structure already funded in the case. The model assumes those baseline fixed costs continue. We distinguish that launch work from buying the separate ₹15 lakh campaign. Otherwise the recommendation would appear to select an awareness effect for free after explicitly rejecting its fee. [C-E3, C-E6B3, C-Q4, A02]

#### 4. Setup, monthly growth money and operating costs

B3 has no setup cost and uses ₹30 lakh of growth money across February and March. Its dependency means every valid Q1 package also carries B1 or B2 setup and any associated per-phone costs. The ₹30 lakh is charged once at the growth layer, and should not also appear inside creator fees or performance advertising. Although there is no setup, the campaign is not a reversible zero-cost experiment in the model: the full active-month payment is supplied, with no smaller pilot option or partial refund. A proposed later test must be presented as a new design requiring its own approval rather than inserted into the Q1 screen. [C-E6B3, C-E6H1, C-E6H3, A02]

#### 5. Supply and lab consequences

B3 adds demand to a constrained operation without increasing either Superb supply or lab capacity. With a third shift some additional orders become deliverable, but the Superb screen remains first. It can therefore consume growth money while producing fewer extra deliveries than a headline demand multiplier suggests. The base recommendation has spare total sellable capacity but already faces a Superb limit; those are two separate facts. Campaign demand following the existing channel mixes can hit the scarce grade even while the lab is not full. This explains why headroom alone is an incomplete argument for buying more demand. [C-E4b, C-E6B3, C-E6SH, C-E6H4, T22]

#### 6. Standalone result under all four tests

Standalone B3 is invalid under Exhibit 6, rather than merely a failed result. As a dependency-respecting isolated comparison, B1 plus B3 uses ₹45.0 lakh without a shift, produces March EBITDA of negative ₹33.0 lakh and returns around 5.65%; it misses the profit test. B1 plus B3 with a February shift costs ₹63.0 lakh and still loses about ₹25.5 lakh in March. B2 plus B3 with a February shift is also negative in March and does not clear the return limit. These examples cover both eligible bases, so the rejection does not depend on choosing only the weaker one. [C-E6B3, T12]

Table R21-08. Dependency-aware B3 decisions compared with the matching operating base.

| Package or comparison | Economic finding | Board interpretation | Source |
|---|---|---|---|
| B3 alone | Not a permitted package | Exclude before the 84-plan screen | [C-E6B3, T12] |
| B1 plus B3, February shift | March negative ₹25.5 lakh | Report and capacity do not fund campaign | [T12] |
| B2 plus B3, February shift | March negative ₹4.0 lakh | Stronger price economics still insufficient | [T12] |
| B1 plus B2 plus B3, February shift | Growth ₹88.0 lakh; March negative ₹5.5 lakh | Fails both funding and profitability | [T12] |
| April B3 added to recommendation | About negative ₹11.1 lakh incremental ongoing benefit | Delay alone does not fix stipulated economics | [T20] |

#### 7. Role in combinations

B3 can amplify the order multipliers of its eligible bases, but multiplication is not the same as profitable scaling. B1 plus B2 plus B3 with a February shift needs ₹88 lakh, exceeding the Q1 limit, and remains loss-making in March. Delaying the shift to March brings spending to ₹79 lakh but does not repair the March operating loss. Adding C makes the funding problem larger. The full plan universe therefore contains no conditionally feasible B3 package. That is an output of the supplied costs and effects, not a general claim that trust advertising has no value. [C-E6H2, T12, T23]

#### 8. Q1 verdict

Do not fund B3 in Q1. Use existing channels to explain the actual improvements, with paid creator disclosure and factual demonstrations. This refusal protects the recommendation's operating gain and available funding headroom. It should be explained in language the growth team can accept: the campaign is judged on the same delivered-contribution basis as a lab shift or trade-in program. If the extra orders cannot repay their acquisition cost, the company should not buy them merely because the creative subject is trust. The report and warranty need customer-facing clarity, but clarity does not automatically require this specific recurring spend. [C-E5e, C-Q4, T12, T21]

#### 9. April relevance

Adding B3 in April to the ongoing recommendation takes EBITDA from about positive ₹5.6 lakh to negative ₹5.5 lakh before any new setup issue. That comparison isolates the ongoing campaign economics after the initial trust investment is already in place. The case consequently supports continued communication through funded channels and a refusal of the dedicated campaign at its stated price. April is an opportunity to measure understanding and to reconsider a redesigned acquisition test, not a reason to approve an unchanged money-losing lever. The forecast does not include a delayed reputation dividend that would reverse this result later. [T20, C-Q5, C-F4]

#### 10. Conditions under which the verdict changes

A different fee, a stronger evidenced delivered response, a more favorable mix or less binding supply could change B3's incremental economics. Any revised proposal should specify the counterfactual: how many deliverable orders occur with the existing product and channel spending, and how many the added campaign causes. It should also examine matured returns and claim comprehension, since an advertisement that attracts inappropriate expectations can create avoidable service cost. No such test has been completed. Until a revised, funded proposal demonstrates a credible contribution path, the team should retain the rejection and avoid claiming that impressions or engagement prove profitability. [C-E3N7, C-E5a, C-Q5, C-R3]

### C: trade in, "Purana do, Tikau lo"

#### 1. What Exhibit 6 specifies

C pays ₹35 lakh of setup and begins with 1,000 trade-ins in February and 1,800 in March, increasing thereafter according to the case ramp. Each pickup costs ₹400. Arrivals are 30% Superb, 50% Good and 20% Fair; 15% fail the final check and recover their acquisition cost as spare parts. Passing phones replace wholesale purchases of the same grade and save 8% of the grade's wholesale price. Separately, 30% of participants buy a Tikau phone that they otherwise would not have bought, with a specified mix and ₹1,000 extra credit. These are two value streams with different denominators. [C-E6C, C-E6TI1, C-E6TI2, C-E6TI3, C-E6TI4]

#### 2. Effect on each grade's economics

The sourcing saving per passing traded phone is ₹1,424 for Superb, ₹928 for Good and ₹560 for Fair, calculated from the wholesale prices. These savings are not a selling-price change and should not be added to every sold phone indiscriminately. The buyer order receives the underlying package's sale contribution less the ₹1,000 credit; it is separate from the sourcing saving on the participant's old phone. In a given transaction the incoming phone's grade need not match the phone the customer buys. Treating the two as the same unit would confuse acquisition, inventory replacement and retail margin. The forecast keeps sourcing and incremental sales lines separate. [C-E2, C-E6TI3, C-E6TI4, A20]

Table R21-09. Trade-in value streams use different populations and must not be netted prematurely.

| Flow | Relevant population | Working at 1,000 arrivals | Decision interpretation | Source |
|---|---|---|---|---|
| Passing inventory | 85% of arriving phones | 850 phones | Eligible for wholesale replacement savings | [C-E6TI2, A06] |
| Superb saving | 255 passing Superb | 255 × ₹1,424 = ₹3.6312 lakh | Also expands scarce Superb availability | [C-E6TI3, A06] |
| Good saving | 425 passing Good | 425 × ₹928 = ₹3.9440 lakh | Saving without a Good supply bottleneck | [C-E6TI3, A06] |
| Fair saving | 170 passing Fair | 170 × ₹560 = ₹0.9520 lakh | Saving still subject to actual passed inventory | [C-E6TI3, A06] |
| Pickup cost | All arrivals | 1,000 × ₹400 = ₹4.0 lakh | Failed phones still incur pickup | [C-E6TI2] |
| New buyer demand | 30% of participants | 300 orders before rationing | Not restricted to participants whose old phone passes | [C-E6TI4, A07] |
| Buyer credit | Delivered new buyer orders | ₹1,000 each | Reduce sale contribution only when delivered | [C-E6TI4, A03] |

#### 3. Effect on orders, mix and returns by channel

The incremental buyers have a 40/50/10 Superb/Good/Fair mix and website return rates. A, B1, B2 and B3 order increases do not apply to this new buyer stream, although their relevant price, cost, warranty and return changes do. The regular channels still receive any selected order multipliers. This prevents double counting, particularly in a package that combines the report, battery promise and trade-in. New buyers are not placed into a convenient existing channel with its fixed acquisition cost removed. Their credit is explicit, and their demand must pass through the same rationing rules as other orders. [C-E6TI4, C-E6H2, A04, A05, A12]

The store managers' strategic rationale is credible because trade-in reduces reliance on wholesale traders and creates a visible reason for an upgrader to transact. The survey includes a stated interest in old-phone part payment, and the buyer segmentation identifies upgraders. Those facts explain fit but do not demonstrate the model's pickup volume or purchase conversion empirically. The case supplies those assumptions directly. We should not call the expected participants signed customers or describe the sourcing loop as already validated. Its value remains conditional on actual intake, pass rates and buyers appearing at the assumed pace. [C-B6, C-E1B, C-E1C, C-E6TI1, C-E6TI4]

#### 4. Setup, monthly growth money and operating costs

C uses ₹35 lakh of January growth money and has no monthly growth fee. Pickup charges and buyer credit reduce operating contribution and do not use the ₹80 lakh envelope. Passing inventory savings increase contribution separately. This ledger treatment explains why C can be a valuable ongoing intervention but difficult to combine with every desired Q1 investment: the setup consumes scarce approved funding even when later unit economics are favorable. Charging pickup and credit to growth money would be wrong, while excluding them from EBITDA would be equally wrong. The comparison must respect both the funding definition and the profit definition. [C-E6TI5, C-E6H3, C-D1]

#### 5. Supply and lab consequences

Passing traded Superb expands the 2,000-unit wholesale limit. The traded inventory replaces wholesale inventory in the lab and therefore needs no extra lab capacity under the case. The participant's new purchase, however, is an additional retail order and does require capacity. These statements are consistent because they describe different activities. It would be a mistake to infer that C creates capacity merely because it replaces sourcing, or that all trade-in activity is capacity neutral. On the recommendation's April path, the additional Superb stock initially removes a supply restriction, and buyer demand later fills the remaining lab headroom. [C-E4b, C-E6TI3, C-E6TI4, T22, T28]

#### 6. Standalone result under all four tests

C alone uses ₹35.0 lakh, remains negative ₹4.9 lakh in March and returns about 7.97%. It clears the funding limit but fails profitability, returns and the model claims proxy. A February shift improves March to negative ₹3.1 lakh, with ₹53.0 lakh of growth money, so capacity alone is still insufficient. The direction of February performance also matters: paying a shift early for a ramping trade-in stream can cost more than its first month's additional contribution. We therefore avoid assuming that the timing best for B1 plus B2 must also be best for C alone. Each plan's monthly ramp needs its own calculation. [T12, T14, C-E6TI1]

Table R21-10. Trade-in assumptions that can change rejected-plan economics without changing their status automatically.

| Assumption | Canonical treatment | Credible alternative | Analytical consequence | Source |
|---|---|---|---|---|
| Failure by grade | Equal 15% share in each grade | Failures concentrated in a grade | Changes Superb relief and sourcing saving | [A06, T29] |
| Participant purchase rate | 30% of all participants | Restrict buyers to passed phones | Reduces new buyer demand | [A07, T29] |
| Pickup charge | Every arrival | Charge only passing units | Alternative overstates profit and conflicts with pickup rule | [C-E6TI2, T29] |
| Savings eligibility | Passing units only | Include failed units | Alternative adds unsupported saving | [C-E6TI3, A20, T29] |
| Deferred April timing | Restart at 1,000 arrivals | Continue calendar ramp at 2,600 | Different launch outcome; neither is established April fact | [A15, T28, T29] |

#### 7. Role in combinations

B1 plus C with a February or March shift meets the numerical screen, and B1 plus B2 plus C without a shift also meets it. These are real alternatives, not footnotes to a predetermined recommendation. C with both trust levers and the February shift produces a much stronger March EBITDA, about ₹31.2 lakh, but spends ₹93 lakh and fails the cap. Removing the shift reduces spending to ₹75 lakh yet sacrifices delivery and Q1 performance. This interaction is the central reason to defer C rather than declare it unattractive. The opportunity has value, but not every valuable opportunity fits the same quarter's budget and capacity plan. [T12, T23, T14]

#### 8. Q1 verdict

Defer C for the chosen Q1 package. The best feasible trade-in alternatives finish with weaker Q1 EBITDA than B1 plus B2 with the February shift. The recommendation preserves the family-buyer promise and early capacity while leaving a future sourcing option open. The remaining ₹22 lakh of the growth envelope cannot fund the ₹35 lakh C setup, and the current approval does not allow the team to borrow an unstated amount. An analyst should show the rejected feasible C packages explicitly, since saying only that C is unaffordable would be false: C is affordable in other combinations, just not in the preferred complete package. [T23, C-B7, C-E6C, C-W3]

#### 9. April relevance

C is the strongest deferred option under the stated continuation assumptions. With new funding and a restarted ramp, April ongoing EBITDA is about ₹21.4 lakh, an incremental ₹15.8 lakh above keeping the plan. Deducting ₹35 lakh setup gives April EBITDA of negative ₹13.6 lakh and cumulative incremental benefit of negative ₹19.2 lakh after setup. The ramp-aware cumulative model recovers the setup during May, approximately 1.75 months after launch under even within-month accrual. The inherited 2.2-month approximation holds first-month incremental benefit constant; it is not the ramp-aware result. Neither calculation divides setup by total company EBITDA. [A15, T28, T29]

#### 10. Conditions under which the verdict changes

Approve an April launch only after new funding, intake readiness, valuation rules, pickup records and lab controls are demonstrated. No new primary research or pilot has yet verified the assumed participants, pass mix or purchase conversion. The ramp also reaches lab capacity, so later intake cannot be evaluated solely by multiplying an unconstrained buyer count. If new funding is denied, the base Q1 recommendation continues without C. If management chooses a different ramp, it should show the new monthly ledger and recovery path rather than preserve the attractive payback claim from a different assumption set. The future option is conditional and specific, not an unfunded commitment. [C-E6TI1, C-E6TI2, C-E6H4, A15, T28, T29]

### Third lab shift

#### 1. What Exhibit 6 specifies

The third shift costs ₹9 lakh per active month and adds 1,800 sellable phones to monthly delivery capacity, taking it from 7,200 to 9,000. It has no setup payment, but hiring and training require four weeks, so it can begin on February 1 or March 1. These dates are the permitted timing choices; a January shift or a partially active February shift is outside the plan universe. The incremental capacity is already stated in sellable phones, so applying another 10% failure deduction would count the baseline yield loss twice. [C-E4a, C-E6SH, A10]

#### 2. Effect on each grade's economics

The shift does not change the selling price, grade procurement cost, repair charge, expected warranty rate or return probability of a sold phone in the supplied model. Its economic value comes from additional delivered contribution less ₹9 lakh. Average cost per delivered phone can improve if enough profitable volume uses the shift, but that is not a new grade contribution assumption. Conversely, when demand does not exceed existing capacity, the shift creates cost without sales. This makes it a complementary capacity lever rather than a universal efficiency initiative. The decision must follow the selected offer's deliverable order profile, not the mere existence of lab complaints. [C-E6SH, C-E2N3, C-E6H4, T25]

Table R21-11. Capacity and quality effects must be separated when judging the third shift.

| Dimension | What the case grants | What remains unproven | Decision consequence | Source |
|---|---|---|---|---|
| Sellable capacity | 1,800 extra monthly | Actual trained staffing readiness | Begin hiring in time for selected date | [C-E6SH] |
| Final-check yield | Increment already sellable | Different yield under rushed execution | Do not deduct 10% again in model | [C-E4a, A10] |
| Superb supply | No increase | Supplier access beyond cap | Retain first-stage rationing | [C-E4b, C-E6H4] |
| Report quality | No quantified time guarantee | Accurate reading, photos and traceability | Verify release controls separately | [C-E4c, C-E6B1, C-E5a] |
| Warranty service | No revised repair-time promise | Faster or fewer repeat repairs | Do not advertise improved service speed | [C-E4d, C-E6SH] |

#### 3. Effect on orders, mix and returns by channel

The shift creates no demand. It changes the number of existing requested orders that survive the lab-capacity screen after the Superb cap. When the lab had been rationing all channels proportionally, lifting that screen restores a proportional part of the remaining channel-grade demand. Return rates within those cells do not change. The aggregate rate can remain identical when the restored mix is proportional, which is why a shift can materially improve profit without improving the return metric. An attribution claim that the third shift itself produces the return reduction would confuse the roles of B1, B2 and capacity. [C-E6SH, C-E6H4, C-E6B1, C-E6B2, T25]

For the recommendation, raw demand is about 8,398 phones before the Superb screen and delivery is about 8,328 after it. The 9,000 capacity does not force output to 9,000, nor does spare lab capacity create the unavailable Superb phones. This is useful discipline in a board discussion: the plan buys enough general capacity to avoid the second bottleneck, but the first bottleneck still loses some high-grade demand. Trade-in could address that supply issue later. The unsold capacity is not proof of a mistaken shift if the released contribution exceeds the shift's cost. [T20, T22, T25, C-E4b]

#### 4. Setup, monthly growth money and operating costs

A February start uses ₹18 lakh across two months, while a March start uses ₹9 lakh. Both amounts count as growth money and reduce EBITDA in their active months under the case definition. There is no separate training setup fee, and no basis for charging existing fixed lab costs again. A hiring plan may identify operational tasks and owners without fabricating additional financial entries. The difference between the two permitted starts is therefore a clean timing trade-off: pay ₹9 lakh earlier to retain February sales that the no-shift month would lose. That comparison should use the unrounded contribution gain, not only the rounded board table. [C-E6SH, C-E6H3, C-D1, A10, T25]

#### 5. Supply and lab consequences

The third shift removes the binding total-lab constraint for the base trust package but leaves the Superb supply ceiling. Its hiring and training must begin during January to meet February availability. We should not infer that unused January sellable slots or future overtime can be banked, because the case provides monthly capacity and loses unfulfilled orders. Nor does the model provide a queue that shifts February demand into March. An early shift therefore has value that cannot be recovered simply by running the same extra capacity one month later. Missing February delivery loses that month's contribution permanently under the specified rule. [C-E6SH, C-E6H4, T25]

#### 6. Standalone result under all four tests

With no demand or proposition change, a February shift uses ₹18 lakh and lowers monthly February and March EBITDA from about negative ₹14.1 lakh to negative ₹23.1 lakh. It does not change returns or claims compliance. A March-only start incurs one month of that cost. Both fail the March profit and return tests, as well as lacking the model's claims proxy. This standalone failure is compatible with selecting the shift in the recommended combination. Capacity is valuable only when the incremental demand and contribution are present. Rejecting every lever with a poor isolated result would wrongly eliminate several necessary complements. [T12, C-E6SH, C-T2t, C-T3t, C-T4t]

Table R21-12. The February shift's timing value is incremental contribution minus its extra monthly payment.

| Comparison under B1 plus B2 | February shift | March shift | Interpretation | Source |
|---|---|---|---|---|
| February delivered phones | 8,327.72 | 7,200 | Extra deliveries occur before March deadline | [T25] |
| February EBITDA | ₹5.60499808329 lakh | Negative ₹8.63334187512 lakh | Difference ₹14.2383399584 lakh | [T25] |
| Q1 growth money | ₹58 lakh | ₹49 lakh | Earlier capacity costs ₹9 lakh more | [T25] |
| March outcome | Same ₹5.60499808329 lakh | Same ₹5.60499808329 lakh | Endpoint alone misses timing value | [T25] |
| Implied February contribution released | ₹23.2383399584 lakh | Not captured | Contribution gain exceeds ₹9 lakh shift cost | [T25, C-D1] |

#### 7. Role in combinations

The shift enables the preferred B1 plus B2 package to pass the March profit test. It also supports feasible B1 plus C alternatives and improves some plans that remain infeasible for other reasons. The right timing depends on the monthly order path. The trust package has its full supplied demand uplift from February, while C ramps over time. The February shift is therefore evaluated against each package, rather than awarded a generic positive score. In the preferred package, the extra February contribution exceeds the early shift cost and improves Q1 EBITDA by ₹14.2383399584 lakh relative to a March start. [T12, T23, T25]

#### 8. Q1 verdict

Select the February start and begin the permitted hiring and training work in January. The earlier start spends more growth money but produces the best Q1 outcome among conditionally feasible plans. It does not sacrifice March profitability or return performance relative to the March-start alternative. The decision is an explicit preference for less total quarter loss within the approved cap, not a claim that the earlier start dominates on every dimension. A board focused solely on minimizing committed growth spend could choose March; it would need to accept the disclosed February loss and weaker Q1 result. [C-E6SH, T23, T25]

#### 9. April relevance

Continue the shift if the operating plan remains in place and ongoing funding permits it. The April trade-in scenario assumes that capacity continues, with no repeated setup charge. At the early intake steps, extra traded Superb supply allows more of the existing demand to be fulfilled, and later the additional buyer stream takes delivery to the 9,000 limit. Once that happens, further intake cannot be evaluated as unconstrained retail growth. Any proposal for another capacity step lies outside Exhibit 6 and needs a separate business case. The existing third shift is part of the April scenario, not a free resource newly created by C. [A15, T28, C-E6SH, C-E6H4]

#### 10. Conditions under which the verdict changes

If staffing cannot be trained by February, the implementation must report the delay and rerun the affected month. If demand or contribution falls enough, the added capacity may not repay its monthly charge. If quality records show shortcuts, management must correct the process before claiming the expanded output is compliant. None of those conditions is measured in the case, so the recommendation identifies them as operational checks rather than invented probabilities. The plan's economics are conditional on the stated capacity becoming available and the promised evidence being produced accurately. Approving the shift authorizes preparation; it does not prove that preparation has succeeded. [C-E6SH, C-E4e, C-E5a, C-E5f, C-R3]

The slide exhibit for this section is the Options comparison backed by Appendix A3: six lever columns using the same cost, unit economics, capacity, test result and timing rows. The main slide should show why proof, promise and deliverability are complementary, with a visible refusal of the recurring demand levers. The detailed ten-step treatment belongs in the research and speaker preparation so the team can explain each option without substituting a slogan for its calculation. [C-Q3, C-S3, C-F3, C-W3]

## 22. Screening all 84 plans leaves five conditional candidates, led by the February shift package

B1 plus B2 with the February shift has the highest unrounded Q1 EBITDA among the five plans that pass the numerical screen. Its quarter loss is ₹42.9269538334 lakh, which is ₹14.2383399584 lakh less than the next feasible plan but ₹0.5161038334 lakh worse than doing nothing. We choose to minimize quarter loss subject to the board conditions, while acknowledging that minimizing growth spend or minimizing returns can lead to a different feasible choice. The claims field is a proxy for evidence infrastructure and cannot establish actual compliance by itself. [T12, T23, T25, C-T1t, C-T2t, C-T3t, C-T4t]

### Construct the universe before ranking the answer

The five binary commercial levers A, B1, B2, B3 and C would ordinarily produce 32 subsets. Four are invalid because B3 is selected without either B1 or B2: B3 alone, A plus B3, B3 plus C, and A plus B3 plus C. Removing them leaves 28 valid lever sets. Each set has three permitted capacity choices, no third shift, February start or March start, giving 84 plans. This construction includes doing nothing and a shift without commercial changes. Including unattractive combinations is necessary to show the boundary of the search rather than comparing only a shortlist favorable to the preferred answer. [C-E6B3, C-E6SH, T12]

Every plan uses the same January convention, supplied order and return multipliers, grade prices and expected costs. For February and March, the calculation creates channel-grade demand, adds the separate trade-in buyer stream where relevant, computes available Superb including passing traded units, and rations Superb first. It then compares remaining total demand with sellable lab capacity and applies the second proportional reduction if necessary. Only delivered phones earn sale contribution and incur the sale-linked costs. Pickup costs remain linked to arriving traded phones. This sequence is visible in T22; changing the sequence or selectively preserving a favored channel would create a different model. [C-E6H1, C-E6H2, C-E6H4, C-E6TI2, A03, A04, T22]

The exhaustive numerical enumeration belongs in T12, and the detailed channel-grade traces in T22 allow a judge to rebuild the difficult rationing cases. The screen below adds an analytical classification rather than replacing those underlying rows. Counts in a sequential screen depend on the order of tests, while the final intersection does not. Showing both sequential and separate test counts prevents a misleading claim that only the last rejected group failed a particular requirement. Some plans fail several tests at once and must not be counted as independent failures when calculating the total universe. [T12, T22, T23]

Table R22-01. Derived screening waterfall over every valid plan; counts are calculated from T12's Boolean test fields.

| Screen stage | Plans entering | Plans retained | Newly excluded at this stage | Interpretation | Source |
|---|---|---|---|---|---|
| Permitted universe | 84 | 84 | None | Dependency-respecting levers and capacity dates | [T12, C-E6B3, C-E6SH] |
| Growth cap first | 84 | 52 | 32 | Rejects unaffordable packages before economic ranking | [T12, C-T1t] |
| March profit next | 52 | 10 | 42 | Affordable does not mean profitable | [T12, C-T2t] |
| March return limit next | 10 | 5 | 5 | Profitable affordable plans can still fail returns | [T12, C-T3t] |
| Claims proxy last | 5 | 5 | None | Remaining candidates still require operating controls | [T12, T23, C-T4t] |

Separately considered, 52 plans meet the spending test, 16 meet March profit, 36 meet returns and 48 have the B1 claims proxy. These are overlapping sets. For example, a profitable plan above budget appears in the profit count but not among affordable survivors. No analyst should add those four counts or infer their intersection from the smallest count. A conjunction of tests is stricter than a weighted score: exceptional March profit cannot compensate for overspending or untruthful claims. That interpretation follows the board's wording and should remain explicit when presenting a high-profit rejected rival. [T12, C-T1t, C-T2t, C-T3t, C-T4t]

Table R22-02. Failure signatures distinguish the complete universe without double counting. P means numerical pass and F means fail, in board-test order; the fourth field remains a conditional proxy.

| Signature | Plans | Economic reading | Decision treatment | Source |
|---|---|---|---|---|
| PFFF | 21 | Affordable, but misses all other fields | Reject, identify actual missing controls separately | [T12] |
| PFPP | 14 | Affordable and low-return with B1, but unprofitable | Reject on March result | [T12] |
| FFPP | 13 | Low-return with B1, but over budget and unprofitable | Reject on both constraints | [T12] |
| FFFF | 8 | Misses every numerical field | Reject without using a composite score | [T12] |
| PFFP | 7 | Affordable with B1, but profit and returns fail | Reject, retain valid proof work if useful elsewhere | [T12] |
| PPFF | 5 | Affordable and profitable, but return and proxy fail | Do not rank as feasible | [T12] |
| PPPP | 5 | Numerical intersection | Rank subject to actual claim controls | [T12, T23] |
| FFFP | 5 | B1 selected, other outcomes fail | Documentation cannot offset economics | [T12] |
| FPPP | 4 | Attractive operations beyond cap | Seek separate authorization rather than call feasible | [T12] |
| FPFF | 2 | Profitable but over budget and too many returns | Reject on binding constraints | [T12] |

### Rank feasible plans using an explicit objective

The board asks for March break-even and limits funding and returns; it does not prescribe a unique objective among passing plans. Our added objective is to maximize Q1 EBITDA within that feasible set. This is a team decision rule, not an extra case fact. It favors an earlier shift because it values February delivery as well as the March endpoint. It also means the recommendation must disclose that all feasible plans still lose money over the quarter. Passing March is a transition to a positive monthly run rate, not evidence that the company has repaid the setup or eliminated the historical loss. [C-Q3, C-D4, T23, T25]

The next feasible candidate is the same B1 plus B2 package with a March shift. Its Q1 EBITDA is negative ₹57.1652937918 lakh. Subtracting that result from the recommendation gives positive ₹14.2383399584 lakh, displayed as ₹14.2 lakh. Subtracting the displayed negative ₹42.9 and negative ₹57.2 instead would produce a different answer. Rounding belongs after the difference is calculated. The same principle applies to doing nothing: negative ₹42.9269538334 minus negative ₹42.41085 is negative ₹0.5161038334 lakh, displayed as negative ₹0.5 lakh. [T23, T25, C-R4]

Table R22-03. Feasible-plan opportunity costs relative to the recommended package; differences are calculated before display rounding.

| Feasible alternative | Extra Q1 loss versus recommendation, ₹ lakh | Growth-money difference versus recommendation, ₹ lakh | What the alternative buys or saves | Source |
|---|---|---|---|---|
| B1 plus B2, March shift | 14.2 | Negative 9.0 | Saves early shift payment but loses February contribution | [T23, T25] |
| B1 plus C, February shift | 26.1 | Positive 10.0 | Adds sourcing route while foregoing B2 promise | [T23] |
| B1 plus C, March shift | 33.9 | Positive 1.0 | Defers capacity within report and sourcing plan | [T23] |
| B1 plus B2 plus C, no shift | 43.8 | Positive 17.0 | Achieves lowest feasible return rate but constrains delivery | [T23] |

The B1 plus C options deserve consideration because they pass the screen without the full warranty and battery package. With a February shift their Q1 EBITDA is negative ₹69.0272644 lakh and March EBITDA positive ₹1.8969548 lakh; the March-shift version has the same March endpoint but a weaker quarter. Their spending is also higher than the corresponding B1 plus B2 choices. This makes them inferior on the selected combination of spending, profit and returns in T23, although they develop a sourcing capability that the short horizon does not price separately. That strategic benefit is a legitimate qualitative consideration, but it cannot erase the measured Q1 opportunity cost without an explicit change in objective. [T23, C-E6C, C-Q5]

### Pareto comparison does not produce a single inevitable winner

T23 defines dominance across growth spending, March EBITDA, Q1 EBITDA and return rate: one candidate dominates another only if it is at least as good on every dimension and strictly better on at least one. By that definition the two B1 plus C shift plans are dominated by either B1 plus B2 shift choice. The recommendation, the delayed-shift trust package and the no-shift package including C remain Pareto efficient. They survive because each offers something the others do not: stronger quarter profit, lower growth spending or lower returns. The model therefore supports an explicit choice among objectives, not a claim of universal superiority. [T23]

Table R22-04. Objective changes that can select a different member of the feasible frontier.

| Board objective after mandatory screen | Candidate favored | Benefit prioritized | Cost accepted | Source |
|---|---|---|---|---|
| Highest Q1 EBITDA | B1 plus B2, February shift | Lowest quarter loss among conditional candidates | ₹9 lakh more than March start | [T23, T25] |
| Lowest Q1 growth commitment | B1 plus B2, March shift | ₹49 lakh growth spend | ₹14.2 lakh extra quarter loss | [T23, T25] |
| Lowest March return rate | B1 plus B2 plus C, no shift | About 4.47% returns | Much weaker quarter result and lower delivery | [T23] |
| Highest March EBITDA | Both B1 plus B2 shift timings tie | About ₹5.6 lakh endpoint | Needs secondary objective to choose timing | [T23] |
| Sourcing capability priority | B1 plus C warrants discussion | Traded inventory experience | Dominated on listed numerical dimensions | [T23, C-E6TI3] |

The low-return no-shift option is especially useful for testing our own preference. It spends ₹75 lakh, earns positive ₹3.4 lakh in March and has the lowest return rate among feasible plans. A board willing to accept a materially deeper quarter loss to launch trade-in immediately could select it honestly. Our disagreement is about timing and objective: with a near-term break-even requirement and limited growth money, we prefer the quarter economics and stronger March operating cushion of the February-shift package. We preserve C for a funded April decision rather than claim its benefits do not exist. [T23, T28, C-B3, C-B7]

### Bound the conclusion by the model's assumptions

The screen is exhaustive over the permitted options, not over every strategy Tikau could conceivably adopt. It does not optimize channel budgets, renegotiate wholesale prices, add a fourth shift or introduce a different warranty. Those may be reasonable managerial ideas, but the closed case gives no inputs for forecasting them. Likewise, the order increases and return cuts are stipulated effects, not causal estimates measured by our team. The recommended plan is the best feasible quarter result under those inputs and the selected objective. A joint bear case can fail March profitability even when isolated sensitivities remain positive, so numerical selection must be accompanied by the weekly controls. [C-E6H2, C-F4, T18, T19, T27]

Actual Exhibit 5 compliance is broader than the numerical B1 flag. The selected plan must retain truthful listings, correct parts language, substantiated comparisons, honest pricing, verified reviews, creator disclosure, completed wipes and acceptable IMEI results. B1 gives a specified route to several of those requirements, but it does not review an advertisement or prevent a false urgency widget by itself. If those controls fail, a displayed PPPP result does not authorize release. Conversely, a hypothetical alternative compliance process could be designed without B1, but its cost and effects are not supplied, so it cannot be silently inserted to make a rejected plan feasible. [C-E5a, C-E5b, C-E5c, C-E5d, C-E5e, C-E5f, T23, T29]

This section supports the Options screen on the main deck and the complete enumeration and ordered-rationing exhibits in Appendix A3. The visible claim should be "84 plans screened, five conditional candidates, ₹14.2 lakh Q1 advantage over the next feasible plan," accompanied by the negative ₹0.5 lakh comparison against doing nothing. The exhibit should state the objective and the compliance qualification so the selection remains reproducible and fairly bounded. [C-Q3, C-D4, T12, T23, T25]

## 23. Each rival camp solves a real problem but leaves a binding Q1 condition unmet

Rohan identifies a price concern, Kabir identifies a proof and service concern, and the stores identify a sourcing and exchange opportunity. Their proposals deserve the same evaluation: strongest rationale, numerical outcome, binding failure, best permitted repair, Q1 verdict and conditions for reconsideration. The recommended package retains Kabir's proof and warranty logic while adding the early capacity that makes it work, and defers the stores' opportunity rather than dismissing it. B2 without B1 and the full package including C are also credible counterfactuals, but neither clears every current condition. [C-B4, C-B5, C-B6, T14, T23]

### Rohan: price and volume

The strongest case for Rohan is that Tikau competes with cheaper informal sellers and new budget devices, and a sizable part of the observed audience buys Fair. The visitor research also records price concern. Volume can improve fixed-cost absorption if it is deliverable and earns adequate contribution. We should acknowledge that commercial logic before showing its limits. It is possible for a company to overinvest in assurance that customers will not pay for, so the price proposal is a useful discipline on a trust-led recommendation. The question is whether this particular discount and advertising package resolves that risk economically. [C-K2, C-K3, C-E1A, C-E1C, C-B4]

A alone produces negative ₹55.7 lakh March EBITDA, and its strongest simple capacity repair, the February shift, still produces negative ₹36.9 lakh. Return rates remain about 8.87%, and the own-lab evidence issue remains unresolved. The refusal is therefore based on both poor contribution absorption and unaddressed board conditions. The plan's demand headline can look impressive while delivered economics deteriorate because the Fair mix and discount reduce value per capacity slot. We do not improve the comparison by inventing cheaper advertising, a different Fair discount or selective order allocation. Those would be new proposals rather than A. [T14, T12, C-E6A, C-E6H4]

Table R23-01. Rohan and Kabir under the same decision questions.

| Decision question | Rohan's A | Kabir's B1 plus B2 | Source |
|---|---|---|---|
| Real problem addressed | Price gap and demand | Proof, battery and warranty confidence | [C-B4, C-B5, C-E1A] |
| Stated plan March EBITDA | Negative ₹55.7 lakh | Negative ₹8.6 lakh | [T14] |
| Return result | About 8.87% | About 4.55% | [T12, T14] |
| Binding failure | Profit, returns and proxy | Profit without extra capacity | [T14] |
| Strongest direct capacity repair | February shift still loses ₹36.9 lakh | February shift earns ₹5.6 lakh | [T14, T25] |
| Q1 treatment | Reject specified intervention | Retain package and add February shift | [T23, T25] |

Reconsider Rohan's direction only if a revised proposal shows profitable incremental delivered orders after discounts, returns and acquisition expense. The team should also ask whether the original price concern reflects an absolute affordability barrier or a value-for-risk comparison. The case survey cannot distinguish those explanations for individual respondents. A proposed interview can examine that distinction, but there are no completed interviews to report. Until a revised option is both evidenced and authorized, the current numbers support displaying value clearly without buying A's specified price-led volume. [C-E1A, C-E1B, C-Q5, C-R3]

### Kabir: certify and extend the promise

Kabir's concern is supported by the discrepancy in the Good battery spot check, the condition-photo and warranty objections, and his warning about checking speed. His preferred direction also creates a reason to trust that is visible at the phone level. The strongest objection is not that trust lacks relevance; it is that additional report and battery costs can overwhelm the benefit if output remains constrained. The case gives no measurement proving that every report process can be performed at the promised volume, so the operating plan must still verify quality even after funding the package. [C-B5, C-E4c, C-E4e, C-E1A, C-E6B1, C-E6B2]

B1 plus B2 without a shift spends ₹40 lakh and lowers returns below the board limit, yet March EBITDA stays negative ₹8.6 lakh. The permitted repair is concrete: add capacity from February. That raises total spending to ₹58 lakh, produces positive ₹5.6 lakh March EBITDA and improves the quarter by ₹28.4766799168 lakh relative to no shift. A March start would pass the endpoint test but give away one month's capacity benefit. The recommendation is therefore an amended version of Kabir's direction, not a claim that his initial package already solves profitability. We retain its customer logic and repair its throughput economics. [T25, T23]

The condition for continuing that direction is accurate evidence attached to each released phone and enough delivered contribution to cover the promise. A shift cannot be advertised as a guarantee of better testing or faster warranty repair because neither effect is quantified. Repairs currently average nine days and many need a second visit; the longer warranty extends coverage rather than proving service speed improves. Proposed service controls should address that gap in customer experience. They receive no invented cost saving or conversion effect in the Q1 forecast. A credible trust proposal must be honest about the service obligation it has not yet improved. [C-E4d, C-E6SH, C-E6B2, C-E5a]

### Store managers: trade-in and sourcing

The stores' strongest rationale combines a customer job with a supply benefit. Upgraders want part payment for their old device, and passed traded Superb can expand the scarce grade's available stock. Sourcing savings also reduce wholesale dependence. This is a different argument from buying ad volume, and it deserves a separate calculation. The important limitation is timing: setup is paid before the trade-in ramp reaches its stronger months, and new buyer orders still need lab capacity. The first quarter therefore bears both the investment and the early ramp, which can conceal later value if one looks only at a single quarter total. [C-B6, C-E1B, C-E1C, C-E6TI1, C-E6TI3, C-E6TI4]

C alone loses about ₹4.9 lakh in March and returns about 7.97%. Adding the February shift does not create a passing standalone C plan. The strongest permitted repair adds B1 and a shift, producing a conditionally feasible package, but that package has materially worse Q1 EBITDA than the recommendation and weaker March profit. We reject it as the primary quarter choice while acknowledging it passes. That distinction matters: a losing standalone proposal can have a valid combined form, and the board should not hear the inaccurate claim that every trade-in choice fails. [T14, T12, T23]

Table R23-02. The stores' proposal through the same repair and timing lens used for other camps.

| Decision question | C alone | Best feasible C direction discussed | Deferred direction | Source |
|---|---|---|---|---|
| Problem addressed | Exchange and wholesale reliance | Same, with report and capacity | Same, after trust package is operating | [C-E6TI3, C-E6TI4, T23, T28] |
| March result | Negative ₹4.9 lakh | B1 plus C, February shift: positive ₹1.9 lakh | April ongoing incremental benefit ₹15.8 lakh | [T14, T23, T28] |
| Funding | ₹35 lakh | ₹68 lakh | New funding required for ₹35 lakh setup | [T14, T23, A15] |
| Binding comparison | Fails profit, returns and proxy | Worse Q1 result than preferred plan | Must separate setup month from ongoing benefit | [T14, T23, T28] |
| Q1 verdict | Do not select alone | Feasible but not preferred | Prepare approval case for April | [T23, C-Q5] |

April reconsideration requires a fresh funding decision and a stated launch ramp. Restarting at 1,000 trade-ins gives a different first month from assuming the original calendar ramp continued during deferral. The former is our disclosed assumption. Its cumulative incremental recovery reaches positive territory during May, about 1.75 months after launch under even accrual within the month. Actual cash recovery could differ because the model is an EBITDA framework and does not provide settlement timing or working-capital flows. The stores' opportunity is attractive enough to develop, but that does not turn a forecast into a pilot result or a committed budget. [A15, T28, T29, C-D1]

### B2 without B1: lower spending with a strong operating result

This rival deserves particular care because it can outperform the recommendation on Q1 EBITDA while staying inside the spending cap. With a February shift it uses ₹43 lakh and earns about ₹2.8 lakh in March. Its promise addresses two leading stated purchase triggers and avoids the report's per-phone fee. A financially focused board could reasonably ask why Tikau should pay for B1 on top. The answer cannot simply be that reports sound trustworthy. It must connect the incremental proof and return reduction to mandatory conditions and the actual claim-evidence gap. [C-E1B, C-E6B2, T14, T12]

The rival's return rate is about 6.47%, above the 6.0% board limit, and the model lacks an own-lab proof route without B1. Selecting B2 says Good and Fair leave with the new threshold, but that flag alone does not document a compliant battery reading or complete the other release checks. One can imagine management building a cheaper compliant process, yet the case provides no cost or response assumptions for it. We cannot silently add that process and label the original plan passing. Even if the evidence issue were resolved, the stated return limit would remain binding under the supplied effects. [C-E5a, C-E5f, C-E6B2, T14, T29]

### Do everything: highest visible March gain beyond the current cap

The strongest full-package rival is B1 plus B2 plus C with the February shift, rather than literally selecting A and B3 as well. It develops the report, battery and warranty promise, sourcing loop and capacity together. It earns about ₹31.2 lakh in March and improves Q1 EBITDA by about ₹5.9 lakh versus doing nothing. Those numbers show that trade-in can add economic value when capacity and the trust offer are funded. Its failure is not a lack of commercial rationale. It needs ₹93 lakh of growth money, which exceeds the board cap by ₹13 lakh. [T14, C-B7, C-E6H3]

Table R23-03. B2 without B1 and the full-package rival receive the same feasibility treatment.

| Decision question | B2 with February shift | B1 plus B2 plus C with February shift | Source |
|---|---|---|---|
| Strongest rationale | Less expensive promise with positive March EBITDA | Source, proof, promise and capacity together | [C-E6B2, C-E6TI3, T14] |
| Growth money | ₹43 lakh | ₹93 lakh | [T14] |
| March EBITDA | Positive ₹2.8 lakh | Positive ₹31.2 lakh | [T14] |
| Return result | About 6.47% | About 4.47% | [T12, T14] |
| Binding failures | Return limit and claims proxy | Funding cap | [T14] |
| Direct repair | Add B1 and verify controls | Seek new funding or change package/timing | [T23, C-T1t, C-T4t] |
| Q1 verdict | Reject current form | Reject under existing approval | [T14, C-B7] |

If the board increased funding, the full package would become a different decision problem and should be reranked. The present recommendation does not assert it remains optimal under an expanded budget. It answers the approved ₹80 lakh case. Alternatively, removing the shift from the full package fits at ₹75 lakh and passes the numerical screen, but its quarter EBITDA is negative ₹86.8 lakh and delivery remains constrained. Delaying the shift to March still spends ₹84 lakh and misses the cap. These repairs show why the attractive March headline cannot be preserved while simply declaring the excess money optional. [T12, T23, C-T1t]

### Distinguish disagreement about objectives from mistakes in arithmetic

A rival can be rejected for a binding board condition, for an unfavorable result on the chosen objective, or for an unsupported input. Those are different reasons and should not be mixed. The feasible B1 plus C package is a strategic alternative we decline on quarter economics, while B2 without B1 misses mandatory conditions. The full package exceeds available approved money, while A fails economically even after capacity repair. Explaining those categories helps judges understand what evidence or authorization could change the choice. It also avoids presenting the preferred plan as the only idea with merit. [C-W3, C-W5, T14, T23]

The strongest objection to our own plan is its weak Q1 comparison with inaction. It loses about ₹0.5 lakh more over the quarter, uses ₹58 lakh of growth money and depends on the supplied order and return effects. The benefit is a positive March operating result, a return rate below the board limit and a funded evidence-and-promise package. Doing nothing avoids setup but continues to fail the March profit and return requirements and leaves the claim gap unresolved. The board is therefore choosing a transition under constraints rather than a quarter windfall. That is a defensible answer only if the weakness remains visible beside the positive endpoint. [T14, T15, T23, C-D4]

No camp receives a hidden favorable assumption. Price effects, return multipliers, commissions, coupon costs, battery shares, setup timing and rationing follow the same rules. A report is not free for one plan, a pickup is not avoided because the acquired phone fails, and a paid creator does not become an unpaid advocate because the message concerns trust. Symmetry in these details is more important than giving each camp equal rhetorical praise. The outcome should change when the underlying economics or approval changes, not when the presenter changes which cost is emphasized. [C-E6H2, C-E6H3, C-E6TI2, C-E5e, A01, A03, A11, A12, A20]

This section supports the rejected-plan exhibit on Options and the viva backup in Appendix A3. Each rival should appear with its strongest rationale, exact binding failure and best permitted repair, with the recommendation's own quarter cost visible alongside. The final trade-off is specific: fund proof, the paid battery and warranty promise, and February deliverability now; retain trade-in as a conditional April investment; decline the specified additional price and campaign spending. [C-Q3, C-Q5, C-W3, T14, T23, T28]


## 24. Our plan, month by month: the decision table, growth-money ledger and four board tests

**Answer.** Pay for B1 and B2 in January, then activate both with the third shift on 1 February. The forecast delivers about 8,328 phones in each live month, earns March EBITDA of ₹5.6 lakh and holds March returns at 4.5%, using ₹58.0 lakh of growth money. Compliance remains conditional on implementing Exhibit 5 at phone and claim level, and the quarter still earns ₹0.5 lakh less than doing nothing because setup precedes the operating improvement. [C-E6B1, C-E6B2, C-E6SH, C-E6H1, T15, C-F15, C-F16]

The decision follows the team's stated selection criterion: maximize unrounded January-to-March EBITDA among plans that pass all four board screens. That objective is a team choice consistent with the brief, not an instruction that the case explicitly imposes. The plan is neither the cheapest feasible configuration nor the best unconstrained Q1 result. It is the highest-Q1-EBITDA configuration within the feasible set under the audited case interpretation. Preserving that distinction prevents a comparison with an over-budget alternative from displacing the board's spending constraint. [C-Q3, C-T1t to C-T4t, T12, T23]

The required decision table below follows the six rows and three months requested by Sana. Company amounts use one decimal lakh and phones use whole units for presentation; calculations retain full precision. This is the required reproduction of T15 and is excluded from this part's authored-word and authored-table counts. [C-D3, C-F2, C-F8, C-F14, T15]

Required decision table, reproduced from T15. [C-D3, T15]

| Decision row | January | February | March |
|---|---|---|---|
| Options live | None live; B1/B2 setup paid | B1, B2, third shift | B1, B2, third shift |
| Phones sold | 7,200 | 8,328 | 8,328 |
| Contribution after marketing, ₹ lakh | 43.9 | 72.6 | 72.6 |
| Growth money spent, ₹ lakh | 40.0 | 9.0 | 9.0 |
| EBITDA, ₹ lakh | −54.1 | +5.6 | +5.6 |
| Return rate | 8.1% | 4.5% | 4.5% |

Below-table board disclosures: total growth money is ₹58.0 lakh, below the ₹80.0 lakh limit, leaving ₹22.0 lakh of the envelope unused. March EBITDA is +₹5.6 lakh against a minimum of zero. March returns are 4.5% against a maximum of 6.0%. The fourth test passes only if the phone-level checks, truthful claims, review rules and other Exhibit 5 controls are executed; the model's B1 flag is an enabling screen rather than evidence of actual compliance. [C-D4, C-T1t to C-T4t, C-E5a to C-E5f, T15, independent-audit.json limitations]

The required Q1 comparison uses all three months on both sides. Recommended Q1 EBITDA is minus ₹42.9269538334 lakh; doing nothing gives minus ₹42.41085 lakh. The difference is minus ₹0.5161038334 lakh, presented as minus ₹0.5 lakh. Comparing March improvement with the entire setup payment, or comparing recommended Q1 against a single baseline month, would answer a different question. The case specifically asks for total January-to-March EBITDA relative to the unchanged three-month baseline. [C-F15, C-D4, T15, independent-audit.json canonical]

Table R24-01. Board-test proof and the record needed to support it. All financial values are forecast case results; the compliance row is an execution condition. [C-T1t to C-T4t, C-E5a to C-E5f, T15, T23]

| Board test | Forecast or condition | Evidence to retain | Failure response |
|---|---|---|---|
| Growth spending | 58.0 ≤ 80.0 lakh | Setup invoices and monthly shift ledger | Reject an added option that breaches envelope |
| March EBITDA | +5.6 ≥ 0 lakh | Delivered contribution and expense reconciliation | Reforecast if demand or costs deteriorate |
| March return rate | 4.5% ≤ 6.0% | Delivered-cohort returns by channel and grade | Correct cause and escalate at boundary |
| Claim and tactic compliance | Conditional on all Exhibit 5 controls | Device records, approved copy, disclosure and release logs | Hold affected release or content; do not rely on B1 flag |

January contains the economic cost of preparation without the live customer benefits. B1 costs ₹15 lakh to set up and B2 ₹25 lakh, giving ₹40 lakh deducted from that month's EBITDA. Orders, prices, battery costs and return rates remain at baseline in January under the timing rule. Thus January EBITDA is baseline minus ₹14.13695 lakh less ₹40 lakh, or minus ₹54.13695 lakh. Launching part of the promise early to make January look better would violate the explicit timing rule rather than improve the same plan. [C-E6B1, C-E6B2, C-E6H1, T15]

February and March each deduct ₹9 lakh for the active third shift. No further monthly B1 or B2 growth fee is specified. Their per-phone report and battery costs nevertheless remain material operating expenses and are already deducted in contribution. The growth-money ledger must therefore exclude those per-phone expenses without pretending that they are free. A board envelope is a definition of eligible spending, not a complete statement of the plan's economic cost. [C-E6B1, C-E6B2, C-E6SH, C-E6H3, C-D1]

Table R24-02. Growth eligibility versus operating expense. Exact timing follows the case; the control column prevents counting the same item twice. [C-E6B1, C-E6B2, C-E6SH, C-E6H1, C-E6H3, T15]

| Cost item | January growth ledger | February growth ledger | March growth ledger | Operating treatment |
|---|---:|---:|---:|---|
| B1 setup | ₹15 lakh | Zero | Zero | Deduct once in January EBITDA |
| B2 setup | ₹25 lakh | Zero | Zero | Deduct once in January EBITDA |
| Third shift | Zero | ₹9 lakh | ₹9 lakh | Growth expense in active month |
| Report per delivered phone | Not live | Not growth money | Not growth money | ₹120 in delivered contribution |
| B2 battery replacements | Not live | Not growth money | Not growth money | Expected grade-specific delivered expense |
| Existing channel and company costs | Not new growth | Not new growth | Not new growth | Retained in their separate baseline layers |

The ₹22 lakh unspent is not a discretionary fund to spend merely because it remains. A and B3 introduce recurring expenses and their specified demand effects; C adds setup and different operating flows. Each must be evaluated as a complete option. The remaining envelope cannot finance a partial campaign or a reduced trade-in setup invented by the team. It is also not bank cash: the case provides no working-capital statement, and ordinary phone purchases, service and per-phone costs sit outside the envelope. [C-B7, C-E6A, C-E6B3, C-E6C, C-E6H3, C-F12]

Delivered quantities require their own proof. B1 and B2 multiply raw order demand by 1.08 × 1.08 = 1.1664. Total demand becomes 8,398.08. Superb demand reaches 2,070.36 against 2,000 available; its first-stage factor is 0.9660155722. Removing 70.36 Superb orders leaves 8,327.72 across all grades. The new 9,000 sellable limit then imposes no further reduction, so the final delivery figure is about 8,328. This sequence is essential because charging contribution on raw demand would overstate the plan. [C-E6H2, C-E6H4, C-E4b, C-E6SH, T22]

Good delivery is 3,720.816 and Fair 2,606.904, alongside the 2,000 Superb phones. Monthly utilization is 8,327.72 ÷ 9,000, about 92.5%, often displayed as 93%. The remaining 672.28 slots are monthly headroom rather than a measured allowance for a particular inspection task. The case does not supply seconds-per-test or staff utilization proving that the third shift guarantees report accuracy. Compliant release still requires each record to be completed and matched to the phone. [C-E5a, C-E6B1, C-E6SH, T22]

Table R24-03. Delivery arithmetic and the forecast error each check prevents. This converts the output into auditable release controls rather than repeating the detailed T22 cell table. [C-E4b, C-E6H2, C-E6H4, T22]

| Check | Working | Accepted quantity | Error prevented |
|---|---|---:|---|
| Combined demand | 7,200 × 1.1664 | 8,398.08 raw orders | Adding survey shares as uplift |
| Superb availability | 1,775 × 1.1664 versus 2,000 | 70.36 raw orders lost | Booking unavailable grade supply |
| After supply reduction | 8,398.08 − 70.36 | 8,327.72 | Charging costs on lost demand |
| Total capacity | 8,327.72 < 9,000 | Lab factor 1 | Applying another 10% failure haircut |
| Grade conservation | 2,000 + 3,720.816 + 2,606.904 | 8,327.72 | Inconsistent grade and company totals |
| Release evidence | One completed record per released phone | Operational condition | Treating a paid setup as proof |

The channel totals also remain constrained by the specified mixes and proportional Superb rationing. March delivers approximately 3,012 ad phones, 2,325 MegaKart phones, 1,035 creator phones, 1,149 store phones and 807 referral phones. Their contribution after marketing sums to ₹72.6049980833 lakh. It would be financially appealing to transfer more sales into referrals or stores, but the assessed model does not offer free reallocation. The launch can give those channels clear communication roles while retaining the case's underlying spend and demand mechanics. [C-E3, C-E6H4, T21, A02]

The shift timing comparison explains why February is selected. Waiting until March preserves the same March result but leaves February at two-shift capacity. Under B1 and B2, that February earns minus ₹8.6333418751 lakh instead of plus ₹5.6049980833 lakh. The earlier shift thus improves Q1 by ₹14.2383399584 lakh, after its ₹9 lakh February expense. This advantage is larger than the expense saved by delay because the full post-Superb order pool can be delivered. [C-E6SH, T25]

Table R24-04. Period reconciliation for the recommendation and the principal timing alternative. This compares where the Q1 difference arises, rather than reproducing the full plan screen. [C-F15, T25, independent-audit.json canonical]

| Component | February shift | March shift | Interpretation |
|---|---:|---:|---|
| January operating and setup result | −54.13695 lakh | −54.13695 lakh | Identical setup timing |
| February result | +5.604998 lakh | −8.633342 lakh | Capacity decision creates entire Q1 difference |
| March result | +5.604998 lakh | +5.604998 lakh | Same final operating configuration |
| Q1 | −42.926954 lakh | −57.165294 lakh | Earlier shift ahead by 14.238340 lakh |
| Relative to doing nothing | −0.516104 lakh | −14.754444 lakh | Neither timing should be judged from March alone |

A credible counterargument is that doing nothing preserves slightly more Q1 EBITDA. That is true under the given figures. It fails the March EBITDA test, the return-rate test and the current proof requirement, so it is not a feasible solution to the brief. The recommended plan pays a small net Q1 cost relative to that invalid baseline to reach the specified March operating state. This is a trade-off to disclose, not a comparison to conceal behind a monthly improvement headline. [C-T2t to C-T4t, C-F15, T12, T15]

A different counterargument prefers the lower growth spending of the March shift because both pass the board screen. The team's Q1 objective selects February because its improved February contribution more than funds its cost. If the board instead prioritized minimum growth spending among feasible plans, that could select a different option. No scoring rule should be retroactively presented as uniquely mandated by the case. Showing the objective and the alternative makes the recommendation defensible even when judges prefer a different trade-off. [C-W5, C-F17, T23, T25]

Table R24-05. January-to-March readiness gates and proposed accountable roles. These are execution controls, not additional modeled benefits or claims of work already completed. [C-E6SH, C-E6H1, C-E5a to C-E5f, C-Q4, C-Q5]

| Gate | Proposed role | Required evidence | Decision if incomplete |
|---|---|---|---|
| January commitment | CEO and finance | Approved B1/B2 setup and shift plan | Do not assume live benefits before setup |
| Shift readiness | Lab/operations lead | Hiring and training completion | Reforecast delayed capacity |
| Device-record readiness | Lab and product teams | Battery, photos, IMEI and wipe linkage | Hold affected phone or claim |
| Copy readiness | Growth and compliance owner | Claim and disclosure review | Hold unapproved content |
| February launch | Cross-functional launch owner | All release conditions signed | Launch only supported promises |
| March board review | CEO and finance | Defined-period results and full expense ledger | Escalate any failed test |

The table should be managed as a living execution record while the competition numbers remain frozen to the case. A gate can expose a risk early, but no gate authorizes changing an option's price, replacement share or order effect without labelling a scenario. Likewise, the proposed owners identify responsibility; they do not imply that named people have accepted new commitments. Sana retains the board decision, Kabir's lab expertise informs operations, and the growth function owns how verified evidence reaches the buyer. [C-H1, C-CO1, C-Q3, C-Q4, C-R3]

The Q1 comparison can also be rebuilt as a timing identity. Relative to doing nothing, January is worse by exactly ₹40 lakh because the operating cells are unchanged and setup is paid. February improves by ₹19.7419480833 lakh and March improves by the same amount. Adding those differences gives −40 + 19.7419480833 + 19.7419480833 = −₹0.5161038334 lakh. This working explains the near-neutral quarterly comparison without implying that setup is recovered in cash or that April benefits have been included. It also makes the sign of the comparison clear when the rounded decision table is used in the presentation. [C-E6H1, C-F15, T15, T16]

The growth envelope and the EBITDA ledger should be reconciled independently. The growth total adds setup and active shift months, while the EBITDA calculation deducts each month's growth expense after contribution and company costs. The same ₹9 lakh shift payment therefore appears in two reporting views, but it is deducted only once in the earnings calculation. An analyst who subtracts it from contribution and then again as growth money would understate both live months. An analyst who treats setup as a financing item outside the case's EBITDA definition would overstate January. The decision table follows the specific case convention even if another accounting presentation might classify setup differently. [C-D1, C-E6H3, C-E6SH, T15]

The proposed board record should preserve the exact version of the calculation and the evidence supporting each yes/no test. A later change in wording must not be allowed to carry an earlier compliance sign-off to a different promise. Likewise, a delivery update should show which denominator and period changed rather than overwrite a headline without reconciliation. These are proposed review practices, not additional economic assumptions. They help a presenter explain why the base recommendation remains the same while an operating warning can still require a new forecast or a hold on an affected phone. [C-R5, C-F16, C-Q5, C-T1t to C-T4t]

Finally, a positive March result should not be presented as proof that every future month is profitable. The case defines a quarter and supplies specified effects. Continuing those effects after March is the keep-plan reference used in the explicitly labelled April scenario, not an independently validated long-run business plan. The board can use the March state as the next decision point while requiring service and sourcing evidence before expanding the offer. [C-Q5, C-F12, A15, T28]

For presentation, the decision table should be read down each month before comparing across months. January explains the investment burden, February establishes the live operating configuration and March answers the board's deadline. This reading avoids letting identical February and March figures obscure the setup payment or letting January's loss appear to describe the live offer. The appendix should retain unrounded working so any team member can reconstruct the change without trying to add rounded display cells. [C-D3, C-D4, C-R5, C-F8, T15]

Exhibit for the deck: main plan slide decision table and below-table tests; economics appendix ordered-rationing working; execution panel January setup and February shift dependency. [C-S2, C-D3, C-D4, T15, T22, T25]

## 25. The March bridge: changed prices and delivered volume fund the assurance package, and fewer returns cover part of the report

**Answer.** March EBITDA improves by ₹19.7419480833 lakh from the baseline to the recommended configuration after paying the third shift. The bridge separates additional delivered volume, net price effect, batteries, reports, warranty expectations and return savings in a declared sequence. Its positive price bar already includes the effect of changed MegaKart commission, and its small warranty saving is a net result across grades rather than evidence that a longer warranty has no cost. [C-D1, T16, C-E3N2, C-E6B2]

The bridge begins at minus ₹14.13695 lakh and ends at plus ₹5.6049980833 lakh. Its effects are applied sequentially, keeping an explicit attribution convention so they add exactly. Additional delivered quantities are first valued using baseline unit economics. Price changes then apply to the resulting delivered mix, with commission following the new price. Batteries, reports, changed claims and reduced returns are applied to that same delivered pool, followed by the shift expense. Other mathematically valid decompositions can distribute interaction effects differently; they must preserve the final total. [T16, C-E6H2, C-E3N2]

The extra-phone contribution bar is +₹20.7595903741 lakh. It values the change from baseline deliveries to the plan's delivered cells using the baseline prices, costs and return regime, with the applicable channel charges. It is not raw demand multiplied by a company-average contribution. Superb rationing changes which quantities are actually available, and channel mix matters because commission, coupons and return rates differ. That is why the bridge uses delivered cell quantities rather than an invented contribution on all interested buyers. [C-E6H4, C-E3N2 to C-E3N5, T16, T22]

Table R25-01. Bridge attribution audit with exact effects and interpretation. The final two columns add the economic meaning and prevent gross-revenue or warranty mislabelling. [T16, C-E2N1, C-E3N2, C-E6B1, C-E6B2, C-E6SH]

| Effect in declared order | Change, ₹ lakh | Running EBITDA, ₹ lakh | What is inside the bar | Wrong interpretation |
|---|---:|---:|---|---|
| Baseline | 0 | −14.136950 | Existing economics | Revenue before costs |
| Delivered volume | +20.759590 | +6.622640 | New delivered cells at old unit rules | All raw demand becomes sales |
| Price | +41.947401 | +48.570041 | Superb/Good uplift net of fee effect | Gross incremental revenue |
| Batteries | −29.481926 | +19.088115 | Expected Good/Fair replacements | Setup money |
| Reports | −9.993264 | +9.094851 | ₹120 on every delivered phone | Optional documentation |
| Warranty | +0.151726 | +9.246577 | Net expense change across grades | Longer term is costless |
| Returns | +5.358421 | +14.604998 | Lower expected return expense | Reversal of sales removed |
| Third shift | −9.000000 | +5.604998 | Monthly growth expense | Another fixed-cost layer omitted |

The price effect can be rebuilt from the grade quantities. Superb rises by ₹960 and Good by ₹640, while Fair has no B2 price increase. At 2,000 Superb and 3,720.816 Good deliveries, gross incremental selling-price revenue is ₹43.0132224 lakh. Increased MegaKart commission on its delivered Superb and Good phones absorbs approximately ₹1.0658213138 lakh, leaving ₹41.9474010862 lakh. The bar is therefore a net contribution effect from price, not a claim that the business receives all of the displayed additional revenue. [C-E6B2, C-E3N2, T16, T22]

The report expense is particularly simple to reconstruct: 8,327.72 × ₹120 = ₹9,99,326.40, or ₹9.993264 lakh. It applies to every delivered grade and channel. Battery expense is 3,720.816 × 40% × ₹1,000 plus 2,606.904 × 70% × ₹800, giving ₹29.4819264 lakh. These are expected costs using the supplied replacement shares. No additional battery cost is inserted for Superb because the case does not specify one under B2. [C-E6B1, C-E6B2, T16, T22]

At unit level the package has very different consequences across grades. Superb starts at ₹4,653 at website rates, gains price, incurs a report and higher expected claim cost, and benefits from fewer returns. Good's higher price must fund its expected battery and report costs. Fair gets no price uplift but carries the larger expected battery burden, leaving very little contribution even after service savings. These differences help explain the chosen customer emphasis and the refusal to add a Fair-price cut. They do not permit changing the case's delivery mix at will. [C-E2, C-E6B1, C-E6B2, C-E6A, T11]

Table R25-02. Per-phone bridge at website return rates. These are before channel-specific commission, fixed spend and coupons, so they should not be labelled channel profit. [C-E2, C-E2N1, C-E2N2, C-E6B1, C-E6B2, T11]

| Component, ₹ per phone | Superb | Good | Fair |
|---|---:|---:|---:|
| Baseline contribution | 4,653 | 2,524 | 716 |
| Selling-price change | +960 | +640 | 0 |
| Expected battery cost | 0 | −400 | −560 |
| Report | −120 | −120 | −120 |
| Expected warranty change | −25 | 0 | +25 |
| Return saving at 44% reduction | +31.68 | +55.44 | +102.96 |
| Final contribution | 5,499.68 | 2,699.44 | 163.96 |

The small positive warranty bar follows from two offsetting movements. At the new delivered quantities, Superb's rate rises from 3% to 4%, increasing expected cost by 2,000 × 1% × ₹2,500 = ₹50,000. Good remains at 6%. Fair falls from 10% to 9%, reducing expense by 2,606.904 × 1% × ₹2,500 = ₹65,172.60. The net saving is ₹15,172.60, or ₹0.151726 lakh. A positive net bar therefore coexists with a real increase in Superb obligation. [C-E2, C-E6B2, T16, T22]

The return bar similarly uses the changed delivered mix, not only the old monthly return bill. B1 and B2 leave 56% of each former return rate, giving a 44% reduction on that cell's expected expense. Applied to the plan's delivered cells, the saving is ₹5.3584210230 lakh. This covers approximately 53.6% of the ₹9.993264 lakh report bill. It does not fund the batteries, shift and setup by itself, and it should not be described as a cash refund generated immediately by each report. The bridge is expected contribution arithmetic. [C-E6B1, C-E6B2, C-E2N2, T16]

Table R25-03. Which benefit can cover which cost, under the declared bridge. Coverage ratios are diagnostic comparisons, not causal claims that one intervention alone generated a benefit. [T16, C-E6B1, C-E6B2, C-E6SH]

| Comparison | Working | Result | Meaning |
|---|---|---|---|
| Returns versus reports | 5.358421 / 9.993264 | About 53.6% | Service savings cover part of documentation |
| Net price versus batteries | 41.947401 − 29.481926 | ₹12.465475 lakh | Price effect exceeds expected battery expense |
| Volume versus shift | 20.759590 − 9 | ₹11.759590 lakh | Delivered-volume bar exceeds shift cost in this decomposition |
| Net operating improvement | Sum six operating bars − 9 | ₹19.741948 lakh | Improvement from baseline after active shift |
| Setup in March bridge | No January setup charged again | Zero | Setup remains in Q1 comparison |

The order matters because price, cost and quantity effects interact. If an analyst applied the new margin to extra volume first, some price benefit would move into the volume bar. If return savings were calculated only on baseline volume, the additional-volume share of those savings would appear elsewhere. Neither allocation is inherently wrong if definitions are explicit and totals reconcile. The report retains T16's declared order to make the chart reproducible and prevent rounded bars from being interpreted as independent experiments. [T16, C-E6H2]

Table R25-04. Interpretation rules for alternative decompositions. The controls make a chart review possible without changing the underlying model. [T16, T22, C-E3N2, C-E6H3, C-E6H4]

| Review question | Required treatment | Error if ignored | Final check |
|---|---|---|---|
| Which quantities are valued first | Delivered cells after both constraints | Contribution booked on lost orders | Match T22 |
| Where does commission change enter | Net price effect or separately labelled fee bar | Gross price gain overstated | Sum to net price bar |
| Where do interactions enter | Declared sequential order | Two bars claim same benefit | Sum unrounded effects |
| When is setup charged | January only for B1/B2 | March profit understated or setup omitted | Match decision table |
| What is the warranty bar | Net expected expense movement | Positive net mistaken for no obligation | Explain grade offsets |
| What do rounded bars show | Display only | One-decimal sums appear inconsistent | Reconcile exact total |

A strong objection is that the bridge gives considerable credit to higher prices despite a customer survey that mentions price concerns. The forecast uses the case's B2 price and order effects together; it does not estimate an independent demand curve. This is a material limitation, and the joint scenarios test the uncertain order effect rather than inventing an elasticity. In execution, weak delivered demand after the price change would trigger a reforecast, but the team cannot selectively keep the favorable uplift while removing the unfavorable cost assumptions. [C-E1A, C-E6B2, A16, T19, T27]

Another objection is that the net price effect appears to fund most of the change, so assurance might be unnecessary. That conclusion confuses an accounting decomposition with a feasible option. The case offers B2 as a complete package, not a standalone price increase. The report and warranty also support the selected customer promise and compliance requirements. Splitting the package to charge higher prices without providing its specified battery and warranty terms would violate the no-part-options rule and would be a different offer. [C-E6B2, C-F12, C-E5a, C-T4t]

The bridge should be used to explain funding, not to promise that each bar can be managed independently. Battery cost can rise with lot quality; returns can disappoint; volume can be lost at supply or capacity constraints. The chart's contribution is to show where those uncertainties enter the final margin and which apparent gains already include offsetting charges. A live review should use the same definitions when comparing actual results with the plan, so that a price gain cannot hide in revenue while the corresponding commission is left out of the explanation. [C-E3N2, C-E6H4, A16, T24, T27]

The unit bridges also show why the warranty term should not be used as a shorthand for its expected cost. Good's claim rate remains unchanged despite the longer term, while Superb's rises and Fair's falls. These movements are supplied by B2 and are not estimates the team derived from a warranty-duration formula. Doubling the term and mechanically doubling every claim rate would contradict the option, while assuming no expense because the net bar is positive would ignore the grade obligations. The complete package retains the printed expected rates and explains their net arithmetic. [C-E2N1, C-E6B2, T11, T16]

The distinction between gross and net price is similarly important in operating review. A revenue report might show the full additional selling price, but finance must place the changed marketplace fee somewhere in the reconciliation. If the bridge already deducts that effect inside the price bar, a separate adverse commission bar for the same increase would count it twice. If the bridge starts with gross price instead, it needs the separate fee adjustment. The chosen chart uses the first approach, so its price label should say net of the commission effect or carry that meaning in its annotation. [C-E3N2, T16]

Reports and replacement batteries should also remain separate even if a future supplier invoice bundles activities. The report is charged on every delivered phone under B1, while expected battery cost depends on grade and replacement need under B2. Treating the report as a cost only on phones receiving a battery would omit documentation for the rest; charging a battery to every Good phone would ignore the replacement share. The bridge keeps those drivers visible so the team can explain both the funded promise and the warning metric without inventing a common per-phone package cost. [C-E6B1, C-E6B2, T16, T27]

Exhibit for the deck: March EBITDA bridge on the plan-economics slide, with exact in-chart effect labels and appendix per-grade funding detail. Preserve the net-price and net-warranty annotations. [T16, T11, T22]

## 26. What Tikau will not do, and why each refusal preserves money or a required claim control

**Answer.** Keep A and B3 off in Q1, defer C until a separately funded April decision and retain the baseline channel spending assumed in the audited forecast. Do not lead the offer with the cheapest Fair phone or publish claims that the phone-level evidence cannot support. These refusals preserve the feasible combination and its economics; they are not a judgment that price, creators or trade-in have no role in every future situation. [C-E6A, C-E6B3, C-E6C, C-F12, T12, T15, T20]

A refusal is useful when it identifies the exact option, its opportunity cost and the condition under which the decision could change. Simply listing fashionable tactics the team dislikes would add little to the recommendation. Here the rejected activities either consume growth money needed for the selected configuration, reduce contribution under the case's specified demand and mix effects, or fail a mandatory rule. The board should be able to trace each refusal to that mechanism rather than accept a general preference for trust over growth. [C-Q3, C-Q4, C-T1t to C-T4t, T12]

The first refusal is the price push. A adds ₹10 lakh of monthly advertising from February and cuts Fair prices by 3% in every channel. It raises orders in ads and MegaKart while shifting their mixes toward Fair. Standalone, it forecasts March EBITDA of minus ₹55.7330189474 lakh and a return rate of 8.8689474%, failing the required operating outcomes. Adding the third shift improves delivery but still leaves March EBITDA at minus ₹36.9162736842 lakh. Capacity alone cannot make the price-led economics attractive. [C-E6A, C-E6SH, T14]

The combination with the selected assurance package is also unattractive. Adding A on top of B1, B2 and the February shift takes March EBITDA to minus ₹40.2788606948 lakh. Its Fair website-rate contribution becomes negative at minus ₹136.04 before channel charges, because the battery and report burden remains while the price falls. It is therefore insufficient to say that assurance first makes any subsequent volume growth profitable. Every added lever still needs its own full contribution and capacity test. [C-E6A, C-E6B1, C-E6B2, T11, T12, T20]

Table R26-01. Refused growth levers and the mechanism behind the decision. Values use the audited complete-option comparisons; no partial options are assumed. [C-E6A, C-E6B3, C-E6C, C-F12, T12, T14, T20]

| Refusal | Relevant result or cost | Why it is refused now | Reconsideration condition |
|---|---|---|---|
| A alone | March −₹55.7 lakh | Lower Fair contribution, expense and constrained volume | A different post-March proposition with new evidence |
| A with selected plan | March −₹40.3 lakh | Assurance costs remain while Fair price falls | Rebuild complete economics; no free demand assumption |
| B3 with selected plan | March −₹5.5 lakh; Q1 growth ₹88 lakh | Incremental contribution below campaign fee; envelope breach in Q1 | Changed measured economics under new approval |
| C with selected plan and shift | Q1 growth ₹93 lakh | Exceeds ₹80 lakh envelope | New next-quarter funding and release readiness |
| C instead of shift | Feasible but Q1 −₹86.8 lakh | Saves shift fee while constraining more valuable deliveries | Board adopts a different objective with disclosure |

B3 deserves a fair assessment because its stated order uplift sounds complementary to a trust-led launch. It costs ₹15 lakh a month, raises orders 5% outside MegaKart and requires B1 or B2. On top of the selected plan, the April comparison raises contribution after marketing from ₹72.6049980833 lakh to ₹76.5269751887 lakh, a gain of only ₹3.9219771054 lakh before its ₹15 lakh fee. EBITDA falls by ₹11.0780228946 lakh. In Q1 the same recurring cost also raises total growth money from ₹58 lakh to ₹88 lakh, above the board ceiling. [C-E6B3, C-E6H3, T12, T20]

This refusal does not mean the company will say nothing about the new offer. The case already includes paid creators, advertising, stores and referrals, and the launch assigns them clearer roles while preserving baseline spend. B3 is a specific incremental funded campaign with a stated order effect. Calling ordinary rollout communication a free version of B3 would either claim its uplift without cost or remove its cost without changing the model. The report therefore distinguishes execution of B1/B2 through existing channels from selecting the extra B3 lever. [C-E3, C-E6B3, C-F12, A02]

The C refusal is a timing decision rather than a rejection of sourcing economics. Its setup requires ₹35 lakh, so adding it to the selected ₹58 lakh Q1 plan would reach ₹93 lakh. The alternative without the shift fits at ₹75 lakh and passes the numerical screen, but earns substantially worse Q1 EBITDA because the lab constrains deliveries. The post-March analysis shows potential incremental value with additional funding and an explicit ramp assumption. That is a reason to prepare the April decision, not to smuggle C's benefit into the unfunded Q1 forecast. [C-E6C, C-E6TI1 to C-E6TI5, T12, T23, T28]

A second group of refusals concerns how the team uses channels and segments. Current referral contribution and store inspection make them useful communication routes, but the case does not authorize cutting ad spend or adding stores while keeping the same demand. It also supplies no MegaKart advertising lever. The plan cannot book savings from deleting an existing channel cost while retaining its orders, nor buy an unspecified marketplace campaign and claim a favorable response. The assessed Q1 economics must remain the printed option set. [C-E3, C-E3N2, C-F12, A02]

Table R26-02. Commercial choices deliberately kept outside the Q1 forecast. These distinctions separate a communication emphasis from an unmodeled investment. [C-E1C, C-E3, C-E4b, C-E6A to C-E6H4, C-F12, T11, T21]

| Choice declined | Evidence behind refusal | What remains permitted | Boundary |
|---|---|---|---|
| Lead with lowest-price Fair | Fair package contribution only ₹163.96 at website rates | Serve existing Fair demand under B1/B2 | No invented grade deletion |
| Chase only flagship buyers | Superb supply capped at 2,000 | Sell available Superb with truthful evidence | No unlimited premium supply |
| Cancel baseline ads and retain orders | Fixed spend and current demand remain in model | Diagnose ad economics and improve truthful copy | No unprovided reallocation saving |
| Open extra stores | No setup, demand or operating lever supplied | Use six existing stores for inspection | No free expansion forecast |
| Add MegaKart ads | No such Exhibit 6 option | Correct marketplace listings and fulfill orders | No invented campaign effect |
| Call ordinary launch B3 without fee | B3 is a defined paid option | Explain selected offer through existing channels | No uplift counted twice |

The family emphasis likewise does not authorize a claim that all other buyers are unprofitable. Superb remains highly contributive and existing flagship demand remains part of the forecast. Fair retains positive website contribution under the selected package, although thin and vulnerable to channel charges. The strategic choice identifies which customer job the message should address first; the model still supplies the full specified channel and grade mix. Changing that mix because the persona sounds more attractive would require a new assumption and would cease to be the canonical result. [C-E1C, C-E3, C-E4b, T11, T21]

The final group of refusals follows Exhibit 5. Compatible replacement batteries cannot support a genuine-parts claim. Listings must say refurbished and cannot use the prohibited like-new language. Named comparisons require data Tikau lacks. Urgency, review rewards and creator labels must follow the stated rules. These are requirements even if a tactic might improve a short-term conversion metric. A marketing return cannot compensate for failing the board's claim test, and no numerical uplift is supplied for prohibited conduct. [C-E5a to C-E5f, C-T4t]

Table R26-03. Claims and tactics rejected independently of their possible conversion appeal. The final column states the constructive alternative within the case. [C-E5a to C-E5f, C-E6B1, C-E6B2]

| Refused tactic | Rule or evidence problem | Permitted alternative |
|---|---|---|
| Like new or as good as new | Explicitly prohibited | Refurbished plus actual grade and photos |
| Genuine replacement battery | Batteries are compatible, not brand made | Accurate compatible-battery description |
| Cheaper or better than named seller | Tikau has no comparative evidence | Describe own verified offer |
| Fake countdown or false stock scarcity | Explicit dark-pattern restriction | Accurate availability information |
| Reward only favorable reviews | Reward cannot depend on sentiment | Verified buyer reviews with disclosed unconditional reward |
| Unlabelled paid creator endorsement | Advertisement disclosure required | Upfront advertisement label and supported script |
| Sale with incomplete wipe or disallowed IMEI | Mandatory release restriction | Hold device until requirement can lawfully be met |

An objection to this refusal list is that it seems cautious when investors demand a turnaround. The numerical answer is that the selected plan already changes the offer, its economics and delivery capacity materially. Adding activities for the appearance of ambition can destroy that feasible result. Another objection is that preserving unprofitable baseline ads seems inconsistent with refusing more ads. The distinction is the case's decision set: new A expense is an offered choice, while cancelling the inherited programme is not. The report should challenge the baseline economics while refusing to invent an unauthorized saving. [C-B3, C-E3, C-E6A, C-F12, T4, T15]

These refusals should survive the launch review. A team under pressure may relabel an extra campaign as necessary execution, add an unsupported promotional claim, or spend the unused envelope without examining its complete effects. The safeguard is to require every proposed deviation to identify its case lever or its explicitly post-March status, its cost layer, its effect on the four tests and the record supporting any customer claim. That is proposed governance rather than an additional cost or benefit in the model. [C-R3, C-E6H3, C-F12, C-T1t to C-T4t]

The refusal discipline should apply to internal targets as well as customer copy. A channel owner should not be rewarded only for raw orders when the case loses orders at supply or lab constraints. A lab target should not encourage releasing a below-threshold phone to reduce replacement cost. A review target should not encourage suppressing unfavorable verified feedback. These are proposed incentive safeguards that follow from the chosen measures and claim rules; no new incentive cost is assumed. They keep the economic refusal list connected to everyday decisions that could otherwise undermine the same plan without formally selecting another lever. [C-E5a, C-E5e, C-E6H4, C-Q5]

Exhibit for the deck: main recommendation slide do/do-not panel and rejected-options appendix. Keep each refusal attached to its economic or compliance reason and distinguish April preparation from a Q1 live option. [C-Q3, C-Q5, T12, T20, T28]

## 27. The February launch: the report before the price, through referrals, stores and labelled creators

**Answer.** Launch the verified phone record before the promotional message, using existing channels to explain what the buyer can inspect and who carries the warranty responsibility. January preparation aligns lab release, listings, service and creator copy so the February offer is operationally consistent. The proposed launch creates no additional quantified uplift beyond B1 and B2, and all scripts remain drafts conditional on the specific phone and terms being verified. [C-E6B1, C-E6B2, C-E6H1, C-E5a to C-E5f, C-Q4]

The main idea is simple: the customer should encounter the phone's evidence before being asked to trust its price or a broad adjective. The retained line, Har phone ki kundli. Saal bhar ki zimmedari., expresses an individual record and a year of responsibility. Its English explanation should immediately identify those meanings as the Tikau Report and the twelve-month warranty, rather than imply a prediction that the phone cannot fail. The line is part of the proposed positioning and must be tested for comprehension; it is not a claim that customer research has already validated it. [C-E6B1, C-E6B2, C-F6, C-E5a, C-Q4]

The family buyer provides the message's focal job. The case describes someone buying for a parent or child who wants to know who will fix the phone. The launch therefore connects a visible device record with an understandable service route. It does not invent the relative's age, occupation, budget, city within the region or a measured preference for one language. Those details could make a fictional advertisement vivid but would add unsupported persona precision to the research. The proposal stays with the buyer job actually supplied. [C-E1C, C-B1, C-CO1]

January work must respect the timing rule. Setup is paid in January, but changed orders, prices, costs and return rates begin in February. The team can prepare assets, train staff and test the completeness of the record workflow in January without booking the live option's benefits. A rehearsal is a proposed activity, not an invented successful pilot. Its purpose is to identify mismatched device records, unclear terms or staffing gaps before the public message depends on them. [C-E6H1, C-E6SH, C-E6B1, C-E6B2]

Table R27-01. Proposed launch calendar from January preparation through March review. Dates are management proposals within the case's live-start rule, not completed work. [C-E6H1, C-E6SH, C-Q4, C-Q5, C-E5a to C-E5f]

| Period | Proposed work | Evidence of readiness | Decision |
|---|---|---|---|
| 5-11 January | Confirm device-record fields, wording and expense ownership | Approved report specification and claims checklist | Resolve missing scope before content production |
| 12-18 January | Train lab, store and service teams; begin shift recruitment/training plan | Rehearsed record-to-device linkage | Correct mismatches before release |
| 19-25 January | Prepare product pages, creator scripts and referral explanations | Copy approval and disclosure review | Hold unsupported statements |
| 26-31 January | Reconcile inventory, record completeness and shift readiness | Signed launch gate | Reforecast any delayed capacity |
| 1-7 February | Activate B1/B2 and shift; publish verified offer | Released phones match published records | Monitor delivery and exceptions |
| 8-14 February | Review first completed return cohorts and batch battery data | Defined-cohort dashboard | Diagnose, do not mix immature cohorts |
| 15-28 February | Continue controls and correct specific operating causes | Updated full-month forecast | Escalate deteriorating economics |
| March | Preserve controlled rollout and board-test reporting | Month-end decision table and evidence archive | Evaluate April separately |

The calendar separates an operating release gate from a marketing publishing gate. The lab confirms the specific phone's reading, record and required checks. Product and growth confirm that the page uses those records and describes the applicable warranty correctly. Service confirms the claim route staff will explain. A creator asset can be approved as a draft while remaining unpublished until the underlying offer is live. The sequence reduces the chance that promotional content gets ahead of the stock to which it refers. [C-E5a, C-E5b, C-E5e, C-E5f, C-E6B1, C-E6H1]

The website should open with the refurbished identification, the actual phone's images and the condition-report access point. The minimum battery promise should sit beside the own-lab reading with a clear distinction between measured condition and expected daily runtime. Warranty length should identify the service route and applicable terms, not become an unlimited-replacement claim. Price remains visible and accurate, but it follows evidence rather than a fictitious crossed-out reference price or urgency device. This is a proposed information hierarchy, with no separate assumed conversion effect. [C-E5a, C-E5b, C-E5d, C-E6B1, C-E6B2]

Table R27-02. Product-page information sequence and the buyer question it answers. All fields refer to verified records for the actual phone, not stock imagery substituted as proof. [C-E1A, C-E1B, C-E5a to C-E5f, C-E6B1, C-E6B2]

| Sequence | Proposed content | Buyer question | Release check |
|---|---|---|---|
| Identity | Refurbished phone, model and grade | What am I buying | Model and grade match stock |
| Device evidence | Actual photos and condition record | What marks does this phone have | Photos match device |
| Battery | Own-lab reading and at-least-85% promise where valid | What is its measured battery condition | Reading and release threshold verified |
| Responsibility | Twelve-month warranty and service route | Who fixes a covered problem | Term and route approved |
| Required checks | IMEI-check and wipe completion record | Has the prescribed check been done | Completed record, not generic badge |
| Price and order | Current price and truthful availability | What will I pay and can it be supplied | No fictitious reference or scarcity |
| Reviews | Verified buyer feedback and disclosed reward if any | What did actual buyers experience | Eligibility and disclosure retained |

Each existing channel has a different explanatory role. Referrals can carry the record link from someone with an existing customer relationship, stores can put the actual phone and record together, and labelled creators can demonstrate how to read the evidence. Performance ads should lead to the supported offer rather than another price-only promise. MegaKart listings must carry consistent grade, battery and warranty information even though B3 would not apply its uplift there. These roles do not change the model's channel spending or demand allocation. [C-E3, C-E6B3, C-E5e, A02]

Table R27-03. Channel role, message and economic guardrail. Contribution figures describe the March forecast, not an experimental return from the proposed copy. [C-E3, C-E5e, T21, A02]

| Channel | Proposed job | Message or interaction | March guardrail |
|---|---|---|---|
| Referrals | Explain the record through a known buyer | Share report access and service route with code | ₹350 coupon charged per delivered referral |
| Stores | Let buyer compare phone and record | Show actual marks, reading and warranty contact | Existing spend retained; no extra stores |
| Creators | Demonstrate how to inspect evidence | Upfront advertisement label; walkthrough of actual record | Higher channel return base remains in model |
| Performance ads | Bring relevant buyers to proof | Refurbished identification plus evidence-led page | Existing fixed spend retained; A remains off |
| MegaKart | Keep marketplace offer consistent | Same supported grade and service description | Commission recalculated on changed price |

A proposed store explanation should be short enough for a buyer to repeat. Staff should begin by identifying the phone as refurbished and showing its real photos beside the unit. They should point to the reading recorded by Tikau's lab, explain the minimum promise, then identify where the buyer goes for a covered warranty issue. If a buyer asks for expected hours of battery life, staff should distinguish the reading from runtime rather than invent a usage guarantee. The case supplies battery-health thresholds, not a universal number of hours between charges. [C-CO5, C-E5a, C-E6B1, C-E6B2]

Customer copy, proposed store script, conditional on the verified phone and approved warranty terms: This is a refurbished Tikau phone. Yeh isi phone ki photos aur condition report hai. Battery reading Tikau ki lab mein li gayi hai; Battery 85 offer mein phone release ke waqt battery health kam se kam 85% hoti hai. Warranty baarah mahine ki hai. Covered problem aaye to is service route par contact kijiye; hum aapko claim ka process samjhayenge. Reading battery ki condition batati hai, har tarah ke use mein ek jaisa runtime promise nahi karti. Aap phone aur report saath dekh lijiye. [C-E5a, C-E5b, C-E6B1, C-E6B2]

The script deliberately avoids a promise that every problem will be fixed immediately or that a compatible replacement is brand-made. It also does not say a passed IMEI check makes all future risks impossible. The buyer should leave understanding the specific evidence and the service responsibility. This is the customer-facing meaning of the offer, and a comprehension test should ask the buyer to explain it back before the team assumes that a memorable phrase did the work. [C-E5a, C-E5b, C-E5f, C-E1C]

A creator demonstration should show the process of reading the report rather than imply that the creator has independently certified every phone. The paid relationship must be labelled as an advertisement. The walkthrough can identify the actual phone used, its photos, the lab reading and the warranty route, while explaining that another listed device has its own record. No script should convert a demonstration unit into evidence for all stock or present the creator's enthusiasm as a substitute for the prescribed checks. [C-E5a, C-E5e, C-E6B1]

Customer copy, proposed creator script, conditional on the verified demonstration phone: Advertisement. Aaj main Tikau ka refurbished phone aur uska report dekh raha hoon. Is report mein isi device ki photos, Tikau lab ki battery reading, IMEI-check record aur data-wipe certificate hain. Battery 85 aur baarah mahine ki warranty wale offer ko samajhne ke liye reading aur warranty terms dono dekhiye. Har listing ka apna device record check kijiye; sirf meri screen par dikh rahe phone se doosre phone ki condition assume mat kijiye. Covered service issue ke liye Tikau ka diya hua claim route use kijiye. [C-E5a, C-E5b, C-E5e, C-E6B1, C-E6B2]

Referral language should preserve the difference between personal experience and a guarantee. A current buyer may share a code and point to the report, but should not be coached to say every Tikau phone is faultless. The coupon is a selling incentive defined in the case, while any review reward is a separate disclosure matter. Combining those activities without clear records could make it difficult to tell whether feedback is an eligible review or merely incentivized promotion. The proposal keeps the code, order and review records distinct. [C-E3N5, C-E5e]

Customer copy, proposed referral message: Agar aap refurbished phone dekh rahe hain, model ke saath us phone ka Tikau Report bhi dekhiye. Photos, lab battery reading aur warranty ka claim route samajh kar choose kijiye. Mera referral code order par applicable coupon ke liye hai; phone ki condition uski listing aur report se check kijiye. The copy should appear only with the actual referral terms and should not add an invented benefit for the sender. [C-E3N5, C-E5a, C-E6B1]

Table R27-04. Script review and evidence controls by format. Draft scripts supply no additional modeled order effect. [C-E5a to C-E5f, C-E6B1, C-E6B2, C-E3N5]

| Format | Required opening or identification | Evidence shown | Phrase to remove | Approval condition |
|---|---|---|---|---|
| Store explanation | Refurbished identification | Actual unit and own report | Guaranteed all-day runtime | Staff can explain scope |
| Creator video | Advertisement label | Demonstration phone and record | Independently certified every phone | Paid-content label and unit scope visible |
| Referral message | Code terms and record link | Recipient's chosen listing | My phone proves yours cannot fail | No invented sender reward |
| Product page | Refurbished, grade and actual photos | Device-specific record | Like new or genuine compatible battery | Correct identity and approved terms |
| Review request | Verified purchase and reward disclosure if relevant | Order-review linkage | Reward only for positive review | Sentiment-independent incentive |

The review policy should be written before the launch, not improvised after negative feedback appears. Reviews must come from verified buyers. If Tikau offers a reward, it must disclose it and provide it whether the review is good or bad. Staff should not ask customers to change a rating as a condition of receiving the reward or warranty assistance. The latter is a proposed operating safeguard consistent with the case's unconditional-reward rule, not a claim that current staff have made such demands. [C-E5e]

The launch also needs a content correction route. If a photo is mismatched, the affected listing should be held until corrected. If a creator omits the advertisement label, publication should stop until the disclosure is repaired. If a battery reading does not support the displayed minimum, the phone and claim need review rather than a silent edit that leaves the original buyer misinformed. These controls apply even when delivery or conversion is below plan; a numerical shortfall does not justify relaxing the claim requirement. [C-E5a, C-E5e, C-T4t]

Labelled launch and language context, excluded from calculations: ASCI's official FAQ says material connections can include gifts or barter and that disclosure should be prominent upfront. This supports checking the visibility and relationship scope of creator labels; it supplies no Tikau conversion estimate. [S049, F11, F12]

Labelled language context, excluded from calculations: The language study registered as S002 found effects varied with firm origin and product category and separately tested slogan clarity, appeal and flow. Tikau should test whether buyers understand its line rather than assume that a bilingual phrase works uniformly. [S002, I04, I05]

Labelled language context, excluded from calculations: The descriptive advertising analysis in S065 treats Hindi written in Roman script separately from slogans mixing Hindi and English. Script choice and language choice should therefore be checked as distinct creative decisions, with no inferred sales uplift. [S065, I07, I08, I09]

Table R27-05. Proposed validation and correction loop for the launch. These activities have not been conducted and their results are not supplied. [C-E1A, C-E1B, C-E5a to C-E5f, C-Q4, C-Q5]

| Proposed check | Observation to collect | Interpretation | Response |
|---|---|---|---|
| Report comprehension | Buyer explains reading, photos and identity | Tests understanding of evidence | Rewrite confusing description |
| Warranty comprehension | Buyer identifies term and service route | Tests responsibility message | Clarify scope before scaling content |
| Record completeness | Released unit has all required linked fields | Tests process execution | Hold incomplete release |
| Disclosure visibility | Viewer sees advertisement status at outset | Tests labelled paid content | Correct asset before publication |
| Channel consistency | Same phone/offer terms across pages and stores | Tests operational coordination | Resolve contradictory wording |
| Negative feedback handling | Verified complaint and response recorded | Tests service ownership | Correct cause without suppressing review |

A competing launch approach would lead with a large price and discount headline because attention is scarce. The case's survey does not show price to be irrelevant, and price should remain clear. The reason to put proof first is that the selected offer is funded by higher Superb/Good prices and a service promise, not a Fair discount. A price-first message that implies lowest price would misdescribe the proposition and could attract expectations the economics cannot support. The proposed page test can examine the hierarchy without adding an unprovided uplift to the plan. [C-E1A, C-E1B, C-E6A, C-E6B2, C-Q4]

Another objection is that detailed evidence may overwhelm a buyer. The response is progressive explanation: make the core facts visible, allow the buyer to open the record, and use staff or creator demonstrations to explain the few concepts that affect the decision. Simplifying the interface should not remove the refurbished label, hide warranty scope or replace the battery reading with an unsupported quality badge. The proposed tests should distinguish comprehension from visual preference, and the launch should retain the proof needed to substantiate every claim. [C-E5a, C-E5b, C-E6B1]

A useful staff rehearsal would follow one device through the full explanation. The trainee first matches the physical phone with its record, then explains the battery reading, grade, refurbished status and warranty route without using a prohibited adjective. A second person can play a buyer asking whether the replacement is brand-made or whether the reading guarantees a full day's use. The correct response is the supported description and scope, not an improvised reassurance. This proposed rehearsal tests consistency of explanation; it does not count as customer validation or a successful operating pilot. [C-E5a, C-E5b, C-E6B1, C-E6B2]

The same rehearsal should include an exception. If the record is missing or the device differs from the photos, staff should stop the sale process for that phone and request correction rather than narrate around the gap. If the buyer cannot find the warranty route, the team should improve its visibility before using the script as a promise of responsibility. These responses turn the message hierarchy into a practical release discipline. The case does not supply time or cost for a training exercise, so no additional saving or productivity rate is added to the assessed forecast. [C-E5a, C-E5f, C-E6B1, C-R3]

Channel rollout also needs a shared version of the offer. A marketplace listing, a store card and a creator description can differ in length while preserving the same battery minimum, warranty term and meaning of the report. The launch owner should keep a record of the approved wording and the phone evidence used in each asset. A correction to one channel should trigger a check of the others when it concerns the same promise. This is proposed coordination across existing channels, not a new technology project or a quantified campaign effect. [C-E3, C-E5a, C-E5e, C-Q4]

Customer-service preparation should explain what happens after purchase as clearly as what happens before it. The buyer should know how to identify the order and reach the appropriate service route. Staff should distinguish an initial return from a warranty claim and avoid promising a remedy not specified in the approved terms. The existing repair-duration and repeat-visit evidence makes this handoff important, but it does not supply a new turnaround target. The launch should therefore promise the actual warranty responsibility while keeping proposed service improvement separate from a claimed result. [C-CO2, C-E2N1, C-E2N2, C-E4d, C-E6B2]

These rehearsals and version checks are deliberately described as proposals. No interview, comprehension score or launch test has been run for this manuscript. The team can recommend what to observe and how to correct an error, but it cannot write a favorable customer quotation or claim that a family buyer preferred the report-first page. That evidence belongs to the proposed validation plan and would need to be collected before it could change the operating interpretation. [C-R3, C-R5, C-E1C, C-Q4]

Exhibit for the deck: February launch slide product-page mockup, channel-role panel and claims strip; execution appendix launch gates and script conditions. No script or context source supplies an extra forecast effect. [C-Q4, C-E6H2, T21]

## 28. Claims: three we make and two we refuse, with every tactic checked against Exhibit 5

**Answer.** The launch can promise a device-specific Tikau Report, battery health of at least 85% on released phones covered by the offer, and a twelve-month warranty under approved terms. It cannot call the phones like new or describe compatible replacement batteries as genuine brand parts. Each permitted statement remains conditional on the actual phone and operating records, while reviews, pricing, creator labels, IMEI checks and wiping need their own controls regardless of the headline promise. [C-E5a to C-E5f, C-E6B1, C-E6B2]

The claims review begins with the distinction between the selected option and the published sentence. B1 requires a report with photos, own-lab battery reading, IMEI check and wipe certificate. B2 changes the battery and warranty offer. Those specifications define what the team plans to deliver, but a customer sees words attached to a particular device. Approval therefore asks whether that device satisfies the sentence and whether the evidence can be shown. A model flag or a paid setup invoice cannot answer those questions on its own. [C-E6B1, C-E6B2, C-E5a, C-F16]

The first permitted claim is that the phone has its own Tikau Report containing the specified evidence. The word own matters because generic photographs and a stock report would not show the condition of the item being sold. The report must match the device identity and should remain accessible through the buying decision. The case does not define a separate audit certification authority, so the copy should not imply an independent laboratory endorsement or a government certificate for the whole phone. The IMEI check is one required registry check, not a government guarantee of product quality. [C-E6B1, C-E5a, C-E5f]

The second permitted claim concerns battery health at release. Good and Fair receive the minimum under B2, while Superb already has the 85% grade minimum and is assessed using the own-lab reading under the stated assumption. The numerical promise describes battery condition, not an invariant number of runtime hours or a promise that degradation never occurs. The record must support the specific phone before release. A higher average reading across a batch cannot justify a minimum claim on a phone below that minimum. [C-CO5, C-E6B2, C-E5a, A08]

The third permitted claim is a twelve-month warranty. The message should identify the term and the service route while making approved terms understandable. It should not translate length into instant repair, unlimited replacement or a promise that no defect will occur. The case's existing nine-day repair average and repeat visits make service clarity especially important, but the team has no evidence that a new repair-speed target has already been achieved. Warranty communication should therefore describe responsibility without inventing service outcomes. [C-E6B2, C-E4d, C-E5a]

Table R28-01. Three permitted claims and their phone-level evidence tests. These are draft claim specifications, not assertions that launch execution is complete. [C-E5a, C-E5b, C-E5f, C-E6B1, C-E6B2, A08]

| Permitted claim | Scope of statement | Required evidence | Qualification kept visible |
|---|---|---|---|
| This phone has a Tikau Report | Actual listed device | Photos, own-lab reading, IMEI record and completed wipe certificate | No independent certification implied |
| Battery health at least 85% | Phone released under verified grade/offer | Own-lab reading and any required replacement record | Condition at release, not fixed runtime |
| Twelve-month warranty | Eligible sale under B2 | Applicable terms and usable claim route | No instant-repair or faultless-product promise |

The two principal refusals follow directly from the case. Like new and as good as new are prohibited even if a phone looks exceptionally clean. Genuine parts is allowed only when every replaced part is made by the brand, whereas Tikau's replacement batteries are compatible batteries. A company cannot resolve this by using genuine as an undefined compliment beside a battery graphic; the likely meaning would still exceed the evidence. Accurate product descriptions should use refurbished, the actual grade and compatible replacement wording where relevant. [C-E5b]

A complete claims review also tests what surrounds each sentence. A truthful battery claim shown beside a false countdown remains part of an impermissible tactic. A correctly labelled creator may still make an unsupported runtime statement. A valid review source may still be presented with a hidden reward. Compliance therefore cannot be reduced to approving three headline phrases once. It requires the content, incentive and release context in which the claim appears. [C-E5a, C-E5d, C-E5e, C-F16]

Table R28-02. Claim-and-tactic matrix against every Exhibit 5 rule. The same rule can govern several assets; approval is at the relevant device or content level. [C-E5a to C-E5f, C-E6B1, C-E6B2]

| Exhibit 5 rule | Report claim | Battery claim | Warranty claim | Tactics and release consequence |
|---|---|---|---|---|
| Truth for each phone; own-lab reading | Record matches device | Reading supports minimum | Terms apply to sale | Hold claim if evidence incomplete |
| Refurbished wording and parts limits | Avoid like-new implication | Compatible battery described accurately | Do not imply brand warranty if not supplied | Review title, imagery and spoken script |
| Named comparisons need data | No superiority claim over named seller | No comparative battery claim without data | No unsupported best-warranty claim | Remove named comparison; Tikau has none |
| No false urgency/reference pricing | Do not add a countdown to report | No fictitious discount tied to threshold | No artificial expiry of standard term | Validate stock and historic price statements |
| Verified reviews/rewards and paid labels | Reviews do not certify record accuracy | Creator cannot replace lab evidence | Reward independent of favorable opinion | Verify buyer and disclose material incentive |
| Completed wipe; disallowed IMEI barred | Certificate follows actual completion | Battery pass cannot override another failure | Warranty does not legalize barred sale | Block device release until requirements met |

This matrix clarifies why the financial compliance flag remains conditional. The model can screen out plans that omit B1, but it does not inspect a page, read a creator's spoken words or verify a wipe log. The judges decide claim compliance under the FAQ. The final submission should therefore show the concrete claims and refused language with the operating evidence needed, rather than write a simple yes in the decision table and leave its meaning unexplained. [C-T4t, C-F16, C-E5a to C-E5f, independent-audit.json limitations]

Some phrases deserve rejection because they are prohibited, while others are unsupported as proposed. The distinction matters. A true current stock statement might be permissible if the inventory record supports it; a false only-one-left message is not. A price comparison might be possible with substantiating data in another situation, but Tikau has none for named sellers here. A claim of safety can be too broad even when a specific registry check is complete. The review should state the actual evidential problem rather than announce that every similar word is universally illegal. [C-E5a, C-E5c, C-E5d, C-E5f]

Table R28-03. Ten proposed phrases that are excluded from this launch and the narrower evidence-based alternative. The reasons refer to the case's claim restrictions and current evidence. [C-E5a to C-E5f, C-E4d]

| Excluded phrase or device | Reason in this case | Better treatment |
|---|---|---|
| Like new | Explicit prohibition | Refurbished and actual grade |
| As good as new | Explicit prohibition | Describe actual function and condition evidence |
| Genuine replacement battery | Compatible, not brand-made battery | Compatible battery with verified reading |
| Best price | No substantiating comparative data supplied | Current price with truthful terms |
| False only 1 left | False scarcity prohibited | Accurate stock status |
| Fake countdown | False urgency prohibited | Real applicable deadline only if supported |
| Discount against never-charged price | Fictitious reference price prohibited | Verifiable price presentation |
| Cheaper than PhoneBazaar | No named-comparison evidence | Own offer without named comparison |
| 100% safe | Broader than supplied checks establish | State exact completed check |
| Unbreakable or instant repair | Unsupported physical/service promise | Warranty scope and real claim route |

The control owner should approve a claim category and the evidence attachment, while operations must still verify each affected phone. A reusable template can reduce variation but cannot replace the unit record. If a battery is replaced after an earlier reading, the linked report must describe the released configuration. If a different phone is substituted in fulfilment, its own record must travel with it. Those are traceability requirements inferred from phone-level truth, not extra measured failure rates or additional modeled expenses. [C-E5a, C-E5b, C-E6B1]

Table R28-04. Proposed claim-control workflow and exception handling. All roles are proposed, and no completion result is invented. [C-E5a to C-E5f, C-E6B1, C-Q4]

| Stage | Proposed accountable function | Record to keep | Exception action |
|---|---|---|---|
| Evidence generation | Lab | Identity, photos, reading, repair and required checks | Hold phone if incomplete |
| Claim drafting | Growth/product | Exact page and script language | Remove unsupported extension |
| Approval | Designated claims owner | Rule-to-evidence checklist | Return asset for correction |
| Publication | Channel owner | Approved version and disclosure | Stop unapproved asset |
| Sale release | Operations | Device-record match and completed wipe/IMEI conditions | Block affected shipment |
| Service feedback | Customer service | Complaint, claim and resolution record | Correct cause and related copy |
| Version change | Product and lab | Updated record after device change | Prevent stale evidence reuse |

A credible objection is that strict evidence checks could slow the launch. That risk should be recorded rather than used to justify unsupported publication. The case treats the checks as requirements, and the operating plan pays for B1 and additional delivery capacity. It does not give a productivity rate proving every check can be completed automatically. If readiness slips, management must reforecast delivery and timing while preserving truthful claims. Shipping an unverified phone to protect the order metric would fail the purpose of the assurance offer and the board's fourth test. [C-E5a, C-E5f, C-E6B1, C-E6SH, C-T4t]

Another objection is that competitors use broader language. The case explicitly withholds supporting named-comparison data and gives its own rules. Real-world examples belong only in labelled context and do not relax those rules. The team's strongest customer promise is a narrow one it can substantiate for each phone, backed by the service term it can fund. A claim review should remove uncertainty about what was checked, while leaving ordinary product risk and warranty exclusions understandable rather than promising perfection. [C-E5a to C-E5f, C-R1, C-F4]

The report should preserve the difference between a process statement and an outcome statement. Saying the prescribed IMEI check was completed describes an action and its record. Saying the phone is impossible to lock or will never be involved in an ownership dispute would extend beyond that action. Likewise, a wipe certificate should correspond to a completed wipe, but the case supplies no independent audit result or security test that supports a broader absolute guarantee. The claim review should retain the exact action the case requires without adding a universal assurance simply because the technical subject sounds reassuring. [C-E5a, C-E5f, C-E6B1]

Warranty wording needs the same discipline about who is responsible. The case describes Tikau's warranty offer and compatible replacements, not a brand manufacturer's renewed-product programme. Copy should therefore identify the actual service route and should not use a manufacturer logo in a way that implies the brand warrants every repair. This is a proposed guardrail against an unsupported implication, not an allegation about current packaging. The underlying requirement remains that every claim, including one conveyed by design or context, must be true for the phone on which it appears. [C-E5a, C-E5b, C-E6B2]

Finally, the release log and approved copy should be reviewable together. If the customer sees a minimum reading claim, the reviewer should be able to find the corresponding own-lab record without reconstructing it from an aggregate spreadsheet. If a reward is disclosed, the reviewer should be able to see that eligibility does not depend on rating. These links make the board's fourth test concrete and expose missing evidence before the submission relies on a categorical yes. [C-E5a, C-E5e, C-F16]

Exhibit for the deck: launch slide three permitted/two refused claims and appendix expanded claim matrix. Keep the phrase approval and release controls distinct from the model's conditional B1 screen. [C-Q4, C-T4t, C-F16]

## 29. Three weekly numbers and the levels at which Tikau should change course

**Answer.** Track all-channel delivered phones, returns within fully matured seven-day sales cohorts and the Good-battery replacement share in tested batches. Their base levels are approximately 1,923 delivered phones a week, 4.55% cohort returns and a 40% replacement share, with different warnings and different model boundaries. Weekly monitoring is a proposed management convention, and the tested-batch battery share needs an explicit representativeness assumption before it can forecast cost on delivered phones. [C-Q5, C-D2, A13, T27, C-E6B2]

The dashboard should connect to the EBITDA identity rather than collect attractive activity metrics. Delivered volume governs how many phone contributions are earned. Return experience changes expected expense and the board's rate test. Battery replacement share is a major variable-cost exposure under the selected offer. Together these measures cover demand realization, service quality and a key cost uncertainty, while secondary records explain which grade, channel or operating constraint caused an exception. They do not replace the four monthly tests. [C-D1, C-T1t to C-T4t, T24, T27]

Delivered phones means phones actually fulfilled across every channel in the completed week. It excludes visits, carts, raw orders lost to rationing and trade-in pickup counts. The weekly plan uses 8,327.72 ÷ 4.33 = 1,923.26097 phones under A13. The order-related EBITDA-zero boundary corresponds to 7,956.91029498 monthly delivered phones at the relevant base mix and costs, or 1,837.62362 a week using the same convention. The proposed response is to investigate two completed weeks below that boundary and update the full-month forecast. [C-E6H4, A13, T17, T27]

A weekly conversion should not be read as a calendar guarantee. Months differ in length and delivery days, and the model supplies monthly averages rather than a week-by-week ramp. The 4.33 convention makes the dashboard comparable to the plan but does not reveal natural demand variability or shipping schedules. An observed week below the translated threshold therefore prompts diagnosis; it does not mathematically prove that March will fail. Managers should reconcile the remaining pipeline, supply and sellable output before changing the forecast. [A13, C-E3, C-E6SH, T27]

Table R29-01. Metric definitions, population and boundary meaning. The boundary type is part of the metric and must travel with its displayed number. [C-D1, C-D2, A13, T24, T27]

| Metric | Numerator and denominator | Plan | Proposed warning or action level | Boundary meaning |
|---|---|---|---|---|
| Delivered phones | Count of completed all-channel deliveries in week | About 1,923/week | Below about 1,838 for two completed weeks | Local EBITDA zero under base mix/costs |
| Completed-cohort return rate | Returns within seven days / deliveries in same mature cohort | About 4.55% | Warning 5.5%; escalation at 6.0% | 6.0% is board limit, not EBITDA zero |
| Good replacement share | Good phones needing replacement / Good phones tested in same batch | 40% early-indicator target | Warning 50%; local cost boundary about 55.06% | EBITDA boundary only if representative of delivered Good cost |

Returns need a cohort rule because a return observed this week may relate to a phone delivered earlier. Dividing all returns received in one week by that week's deliveries mixes different populations and can produce a misleading trend. The proposed measure waits until the seven-day window is complete for the relevant delivered cohort, then counts returns attributable to those same deliveries across all channels. Immature cohorts are shown separately and excluded from the completed-cohort rate. This convention is proposed for monitoring the case's return window, not a change to the monthly board definition. [C-CO2, C-E2, C-D2, T27]

The aggregation must be weighted. Each cohort's returned phones are summed and divided by the total delivered phones in those same cohorts. An average of channel percentages would give the small referral or store population the same weight as a larger channel. Channel-grade drilldowns remain useful because creators and stores have different starting return regimes, but the top-line rate needs the actual all-channel denominator. This preserves the link between the dashboard and the case's phones-returned divided by phones-sold definition. [C-E3N3, C-E3N4, C-D2, T27]

Table R29-02. Proposed cohort handling for the return dashboard. This table specifies inclusion rules rather than inventing weekly performance observations. [C-CO2, C-E2, C-D2, T27]

| Record or situation | Include in completed-cohort numerator | Include in denominator | Reason |
|---|---|---|---|
| Delivered phone with full return window elapsed | Relevant in-window return if any | Yes | Mature observation |
| Delivery whose seven days are not complete | No, keep pending separately | No in mature-rate denominator | Avoid incomplete exposure |
| Return received this week for an earlier cohort | Attribute to original cohort if in window | Original cohort only | Avoid mixing weeks |
| Raw order lost to rationing | No | No | No delivered phone |
| Warranty claim outside return definition | No automatic inclusion | No new delivery added | Claims and returns are separate |
| Channel subtotal | Sum valid cohort returns | Same cohort deliveries | Preserve weights |
| Company total | Sum eligible subtotals | Sum eligible deliveries | Match phone-based ratio |

The 5.5% return warning is a management convention designed to prompt inspection before the 6% board maximum. It is not an estimated probability of board failure or an EBITDA-zero point. At the warning, service and growth should inspect grade, channel, issue reason and content consistency. At the board boundary, the CEO should receive an updated forecast and corrective plan. Pausing misleading creative is appropriate if it is found, but poor returns do not by themselves prove that a particular asset was misleading. The root cause still needs evidence. [C-T3t, C-E5a, T27]

The Good-battery measure is intentionally earlier in the process. It counts Good phones requiring replacement among Good phones tested in the same relevant batch, with the tester version and batch record retained. The model, however, charges expected battery expense on delivered Good phones: a delivered share of 40% at ₹1,000 each gives ₹400 per delivered Good phone. The tested-batch share can forecast that delivered cost only if tested phones are representative of the eventual delivered pool with respect to replacement need, or if management adjusts for the selection between testing and delivery. [C-E6B2, T24, T27]

Selection can matter in several ways. Phones failing another check may never be delivered; high-replacement lots may be held; channel or grade reassignment may change which tested phones become Good deliveries; an operating team might prioritize easier phones when demand rises. The case does not quantify these mechanisms, so the monitoring proposal cannot assume they are absent as a fact. It states representativeness as a management assumption and asks for a reconciliation between batch need, completed replacements and delivered Good phones. That reconciliation is a control on interpretation, not a new model input. [C-E4a, C-E4c, C-E6B2, C-E6H4, T27]

Table R29-03. Tested-batch warning versus delivered-unit cost. The population distinction prevents an early indicator from being silently treated as booked expense. [C-E4a, C-E6B2, T24, T27]

| Measure | Population | What it tells management | Assumption needed for cost forecast |
|---|---|---|---|
| Need-to-replace share | Good phones tested in batch | Early quality of incoming lot | Tested mix represents delivered Good mix |
| Completed replacement count | Phones actually repaired | Work executed | Repairs linked to eventual released units |
| Delivered replacement share | Good phones delivered | Relevant share for per-delivered cost | Correct repair-to-sale linkage |
| Failed or held phones | Tested but not delivered | Potential selection bias | Exclude or adjust explicitly |
| Model cost | Delivered Good × share × ₹1,000 | Expected operating expense | Use delivered share or defensible adjusted indicator |
| Warning at 50% | Tested-batch indicator | Investigate before local margin boundary | Do not call 50% EBITDA zero |

At the proposed 50% warning, Kabir's lab should examine supplier lots, tester consistency and the link between test results and released phones. Near the 55.0638948104% local boundary, finance should rerun the delivered-cost economics with the reconciled share before accepting further lots under the same economics. The operating response must not ship a phone below the promised threshold to reduce the replacement statistic. That would improve the displayed cost measure by breaking the customer claim and the board's fourth test. [C-E5a, C-E6B2, T24, T27]

The delivery metric likewise needs diagnosis before action. A shortfall can arise from weak raw demand, lost Superb orders, inadequate sellable capacity or phones held for missing required checks. Growth should not buy more demand when the issue is release capacity, and operations should not assume a shift solves a demand problem. The proposed joint ownership by growth and operations reflects that ambiguity. A full-month reforecast should retain the observed mix and cost implications rather than scale the entire business by one headline order ratio. [C-E4a, C-E4b, C-E6H4, T22, T27]

Table R29-04. Escalation logic linking warnings to the relevant decision. Roles and responses are proposed controls, not observed behavior. [C-E5a, C-E6H4, C-Q5, T24, T27]

| Signal | Proposed owner | First diagnosis | Response boundary |
|---|---|---|---|
| Deliveries below translated threshold | Growth and operations leads | Demand versus supply, capacity and release holds | Reforecast full month; no unsupported claims |
| Mature returns at 5.5% | Service lead | Grade/channel cohorts and issue causes | Correct operating cause and inspect content |
| Mature returns at 6.0% | CEO with service/finance | Board-test exposure | Escalate; do not relabel as EBITDA zero |
| Good tested share at 50% | Lab lead | Lot quality, tester and selection | Warning only; reconcile to delivered cost |
| Reconciled Good share near 55.06% | Lab and finance | Full cost and demand combination | Rerun economics before further commitment |
| Two warnings together | Cross-functional review | Joint movement in margin drivers | Use T24/scenarios; do not rely on isolated boundaries |

The dashboard needs secondary quantities to explain these three numbers. Sellable output, available Superb supply, report completeness, claim counts, repair duration and repeat visits provide that explanation. They should not displace the three required headline metrics or become claimed improvements without data. In particular, a longer warranty makes service maturity important: early low claim counts cannot validate a twelve-month obligation before cohorts have sufficient exposure. The case's expected claim rates remain the forecast basis. [C-E4a to C-E4d, C-E6B2, C-Q5, T27]

A competing proposal would track revenue, traffic and social engagement because they are immediate and easy to observe. Those measures can support diagnosis, but they are poor substitutes for delivered economics and customer experience. Revenue may rise while commission and battery cost absorb the gain; traffic may rise while a full lab loses the orders; engagement may reward an unsupported claim. The chosen metrics bring the operating risk closer to the board tests without pretending three numbers capture every responsibility. [C-E3N2, C-E4a, C-E5a, C-D1, C-T1t to C-T4t]

Small or empty denominators need an explicit display convention. A batch with no tested Good phones cannot have a meaningful replacement percentage, and a week without a fully matured sales cohort cannot supply a completed-cohort return rate. The proposed dashboard should display not yet measurable with the underlying counts rather than show zero. That prevents absence of exposure from looking like perfect quality. The case does not provide statistical confidence rules, so the team should avoid claiming significance from a short run of percentages and should retain counts beside rates for review. [C-D2, T27]

Return records may also be corrected after an initial dashboard cut. The proposed convention is to attribute a valid in-window return to its originating delivery cohort and retain a record of the update. Reporting both the observation date and delivery date helps service reconcile what arrived operationally with the rate used analytically. This does not invent a new return window or change the board's definition. It makes the week-to-week monitoring reproducible and avoids a quiet denominator change when staff discover a late-entered record. [C-CO2, C-E2N2, C-D2, T27]

The battery indicator needs a similar reconciliation trail. Management should retain the batch identifier, grade tested, replacement decision, any failed release condition and the final delivered identity. If high-replacement phones are disproportionately held, the tested share may overstate current delivered cost while signaling a future supply problem. If easier phones are shipped first, the early delivered share may understate the burden in the remaining stock. Neither pattern is observed in the case; both explain why the representativeness assumption must be tested rather than silently adopted. [C-E4a, C-E6B2, C-E6H4, T27]

Warnings should trigger a decision record rather than an automatic change to the published promise. The owner can document the issue, the population checked, the forecast effect and the proposed response. Finance then distinguishes a temporary timing shortfall from a changed unit-cost assumption, and the claims owner confirms that the response preserves the required evidence. Keeping those roles connected reduces the risk of solving one metric by shifting an event into another category or releasing an unsupported phone. These are proposed controls without added forecast benefit. [C-E5a, C-E5f, C-Q5, T27]

Exhibit for the deck: weekly-control slide or launch dashboard panel with three metric cards, each showing denominator, warning, boundary type and proposed owner. Appendix notes retain return-cohort maturity and tested-versus-delivered selection limits. [C-Q5, T27]

Management may investigate an emerging shortfall immediately. Two completed weeks is the proposed escalation rule, rather than a requirement to wait before investigating. [T27, A13]

## 30. Sensitivity: isolated adverse changes retain positive March EBITDA, while the joint bear case loses ₹8.7 lakh

**Answer.** The selected plan remains above EBITDA zero in each specified one-factor adverse test, but fails when the uncertain effects worsen together under A16. The two-input grid shows why separate break-even points cannot be combined as if they were independent safety margins. Monitoring must therefore connect demand and replacement costs, keep the 6% return board limit separate from EBITDA zero and update the complete forecast when several warnings appear. [A16, T18, T19, T24, T27]

Sensitivity analysis here uses the case values as the base and the team's declared uncertainty convention as the stress range. It does not replace printed inputs with outside evidence. The uncertain families are order uplift, return reductions, battery replacement shares and warranty claim rates, with Good and Fair replacement shares examined separately. Prices and the report cost remain fixed because they are specified offer choices rather than estimated external effects. A scenario that also cuts prices or removes the report would be a different option or assumption and must be labelled accordingly. [C-E6B1, C-E6B2, A16, T18, T19]

The one-factor adverse results are useful for ranking exposure. Raising Good replacement need from 40% to 50% leaves March EBITDA at ₹1.8841820833 lakh. Raising Fair replacement need from 70% to 87.5% leaves ₹1.9553324833 lakh. Increasing B2 claim rates by 25% leaves ₹2.2433085833 lakh. Reducing each 8% order effect to 6% leaves ₹2.7748975688 lakh. Weakening the return reductions by 25% leaves ₹4.4023979105 lakh. Each calculation holds the other base inputs fixed, so their positive results are not evidence that the plan survives their combination. [A16, T18]

Table R30-01. Isolated adverse tests and the interpretation of their margin. The last column distinguishes sensitivity range from a true model boundary. [A16, T17, T18, T24, T27]

| Input tested alone | Adverse setting | March EBITDA, ₹ lakh | Interpretation |
|---|---|---:|---|
| Good replacement share | 50% instead of 40% | +1.8842 | Warning; local zero is about 55.06% at base uplift |
| Fair replacement share | 87.5% instead of 70% | +1.9553 | Local zero about 96.88% holding others fixed |
| B2 claim rates | 25% higher | +2.2433 | Expected service obligation remains material |
| Each order uplift | 6% instead of 8% | +2.7749 | Combined effect is 12.36%, not 12% |
| Each return reduction | 22.5% and 15% | +4.4024 | A return-rate limit is a different boundary |

The local roots provide more precise financial boundaries than the stress points. Combined order uplift reaches EBITDA zero at 10.5126429859% when Good replacement share remains 40% and the other base inputs remain unchanged. Good replacement share reaches zero at 55.0638948104% when combined uplift remains 16.64%. Fair replacement share reaches zero at 96.8757407412% under its own fixed-surroundings calculation. These are conditional model solutions, not independently available reserves that can all deteriorate to their limits together. [T24, T17, independent-audit.json boundaries]

The return boundary is different in kind. A remaining-rate multiplier of 0.7385258693 takes the modeled company return rate to the board's 6% limit. The base multiplier is 0.56, leaving 56% of former rates and reducing them by 44%. The 6% result is not the condition that EBITDA equals zero. The inherited T17 grouping can make that distinction easy to miss, so every manuscript and dashboard label should identify whether it refers to profitability, a board maximum or a proposed early warning. [C-T3t, C-E6H2, T27, independent-audit.json boundaries]

The following heat map reproduces the T24 model values in a compact grid. It is supporting model reproduction, excluded from authored-word and authored-table counts. Rows apply the combined uplift once as 1 plus the stated value, while columns change delivered Good replacement share; other inputs stay at base. Values are March EBITDA in lakh. [T24]

Supporting T24 heat map, reproduced. [T24]

| Combined uplift | 40% Good swaps | 50% | 55.0639% | 60% |
|---|---:|---:|---:|---:|
| 8% | −3.7742 | −7.2194 | −8.9640 | −10.6646 |
| 10.5126% | 0.0000 | −3.5254 | −5.3106 | −7.0507 |
| 16.64% | +5.6050 | +1.8842 | 0.0000 | −1.8366 |
| 20% | +7.6015 | +3.7735 | +1.8350 | −0.0545 |

The crossing of the two isolated roots is especially instructive. At the zero-uplift root and the zero-Good-share root together, EBITDA is minus ₹5.3105551450 lakh, not zero. Each root was calculated while the other variable stayed at base. The negative intersection shows that falling demand reduces the contribution available to absorb replacement cost, while the higher share increases expense on delivered Good units. A team that reports both roots as comfortable individual tolerances could miss this combined exposure. [T24]

Table R30-02. Decisions implied by selected heat-map cells. These are interpretations of modeled combinations, not measured weekly outcomes. [T24, T27]

| Joint condition | Model result | What it changes in the decision |
|---|---:|---|
| Base uplift and 40% Good share | +₹5.6050 lakh | Retain base plan with controls |
| Base uplift and 50% Good share | +₹1.8842 lakh | Warning has meaningful margin consequence |
| Only 8% combined uplift and base Good share | −₹3.7742 lakh | Weak demand alone can cross zero beyond tested one-factor setting |
| Both isolated roots together | −₹5.3106 lakh | Do not combine separate roots as independent buffers |
| 20% uplift and 60% Good share | −₹0.0545 lakh | Stronger demand does not guarantee cost absorption |
| 20% uplift and 50% Good share | +₹3.7735 lakh | Additional demand helps, with remaining risk |

The joint bear case changes each uncertain family adversely under A16. Both order effects become 6%, return reductions become 22.5% and 15%, Good replacement need becomes 50%, Fair becomes 87.5%, and B2 claim rates rise by 25%. It delivers 8,089.92 phones and March EBITDA of minus ₹8.7435794038 lakh. Returns are 5.3285556%, so the plan fails EBITDA while remaining below the return limit. This is why a favorable service ratio cannot substitute for the economics test. [A16, T19, independent-audit.json scenarios]

The bull case applies the symmetric favorable convention: both order effects become 10%, return reductions strengthen, replacement shares fall and claim rates fall. March EBITDA becomes ₹20.4583526391 lakh, with 8,564.25 deliveries and a 3.8255530% return rate. These are scenario outputs, not probability-weighted expectations. The case gives no probabilities for the scenarios or correlations among drivers, so the report does not calculate an expected scenario average or assign a chance of success. [A16, T19, independent-audit.json scenarios]

Table R30-03. Scenario mechanism, board outcome and management meaning. This adds interpretation to the generated scenario outputs rather than treating them as alternative promises. [A16, T19, C-T2t, C-T3t]

| Scenario | Mechanism | March outcome | Management interpretation |
|---|---|---|---|
| Bear | Weaker demand and return effects; higher replacement/claim burden | −₹8.7 lakh; returns 5.33% | Economic failure despite service-rate pass |
| Base | Printed option effects | +₹5.6 lakh; returns 4.55% | Conditional feasible forecast |
| Bull | Stronger effects and lower variable burden | +₹20.5 lakh; returns 3.83% | Upside with no assigned probability |
| All scenarios | January setup unchanged | January −₹54.1 lakh | Operating uncertainty does not move setup timing |

By mid-February, the dashboard should reveal directional evidence rather than claim to identify a scenario with certainty. Completed deliveries can expose a demand or release shortfall quickly. Tested-batch replacement need is early but must be reconciled with delivered selection. Mature return cohorts arrive later than raw orders. Warranty experience matures more slowly still. The operating team should therefore combine the available evidence with a full-month forecast and keep immature observations labelled, rather than declare a scenario from one favorable week. [C-E2, C-E6B2, T27]

Table R30-04. Proposed mid-February diagnostic response to combined warnings. These are management rules and contain no invented observed results. [T24, T27, A16]

| Pattern to investigate | Necessary denominator check | Likely review branch | Response |
|---|---|---|---|
| Low deliveries, normal batch replacements | All-channel fulfilled phones, not raw orders | Demand versus release/supply | Reforecast quantity and mix |
| Normal deliveries, high replacements | Tested share versus delivered share | Sourcing quality and cost | Reconcile selection before margin estimate |
| Low deliveries and high replacements | Both populations consistently defined | Joint cost-demand exposure | Use heat map; isolated roots insufficient |
| High returns with good EBITDA estimate | Fully matured same-sales cohort | Service and board compliance | Escalate return rule independently |
| Low early claims | Incomplete warranty exposure | Cohort maturity | Do not declare long-term service success |

A competing interpretation is that all isolated tests passing makes the plan robust enough to recommend without further caveat. The joint bear result contradicts that reading. Conversely, one adverse joint scenario does not prove that the recommendation should be rejected, because it is a stress convention rather than a forecast with an assigned probability. The appropriate conclusion is to select the best feasible base plan while exposing the specific drivers that can break it and monitoring their combination. [T18, T19, T24, C-F17]

The shape of the two-input surface is not a simple unconstrained volume line. At low combined uplift, Superb demand may still fit within its supplier ceiling. At higher uplift, Superb is rationed before total capacity, changing the grade composition of delivered phones. The contribution gained from another percentage point of demand therefore depends on where the plan sits relative to those constraints. A straight line drawn through a few headline results could conceal that change. The audited grid recalculates the delivered cells at each intersection, which is why its values should be used instead of extrapolating a single average contribution indefinitely. [C-E4b, C-E6H4, T24]

The battery-cost direction is more transparent within a fixed delivered mix. A higher Good replacement share increases expected expense on each delivered Good phone by the change in share times ₹1,000. But when uplift also changes, the number of delivered Good phones changes, so the total cost increment changes with it. This is the interaction the heat map captures. It also explains why the early tested-batch indicator cannot be placed directly on the financial surface without checking its relationship to the delivered share. A production selection effect could move the observed indicator without moving delivered cost by the same amount. [C-E6B2, T24, T27]

Scenario interpretation should keep decisions separate from uncertainty. Under the declared stress convention, the report cost and B2 price increase remain fixed, while the achieved order response and service effects can disappoint. If management proposes a different price to address that disappointment, the result requires a new scenario and an explicit account of the allowed option scope. It cannot be inserted into the base stress chart as if the original plan had always contained that flexibility. The same discipline applies to a delayed shift: timing sensitivity is evaluated separately in T25 rather than hidden inside a demand shock. [A16, C-F12, T24, T25]

The chart also does not tell management which uncertain movement is more likely. Supplier quality, buyer response and service execution could move together, but the case supplies no joint probability distribution. The joint bear convention demonstrates a coherent adverse combination without estimating its frequency. A probability-weighted expected value would require additional assumptions and could create spurious precision. The recommendation therefore uses the base feasible ranking, discloses the downside and specifies observable warnings, leaving actual likelihood assessment to future evidence rather than a fabricated probability. [A16, T19, T23, T27]

Finally, a boundary is local to the remaining base conditions and the model's definitions. An order boundary translated into weekly deliveries assumes the relevant mix and cost structure; it is not a universal minimum sales quota. A replacement boundary assumes the other costs and demand response; it is not permission to accept every lot below it without checking the claim. A return board maximum remains binding even if a separate financial forecast is favorable. These qualifications are part of the decision logic and should remain in the appendix annotations. [C-T3t, C-T4t, T24, T27]

Exhibit for the deck: sensitivity appendix two-input heat map and scenario comparison; weekly-control panel distinguishes warnings, local EBITDA roots and the 6% board return limit. [T24, T27, C-T3t]

## 31. April: seek new funding for trade-in, retain the shift and keep A and B3 off

**Answer.** After March, evaluate C as a separately funded addition to the selected plan, with its pickup, sourcing and incremental-buyer flows kept distinct. Under A15's restarted ramp, first-month ongoing EBITDA is ₹21.4 lakh before C setup, but April EBITDA after its ₹35 lakh setup is minus ₹13.6 lakh. Incremental setup recovery occurs during May, approximately 1.75 months after launch under even within-month accrual, and should not be confused with either total company earnings or the inherited constant-first-month 2.2-month approximation. [C-Q5, C-F12, A15, T28]

April lies outside the Q1 board tests and needs an explicit funding assumption. The unused ₹22 lakh from the Q1 envelope is below the ₹35 lakh C setup, and the case does not state that it automatically carries forward as an April authorization. A15 therefore assumes new next-quarter growth funding. It also restarts arrivals at 1,000 because C was deferred rather than live in February. Continuing the original calendar ramp would be an alternative assumption, not evidence that a delayed programme instantly reaches the volume it might have had if launched earlier. [C-B7, C-E6C, C-E6TI1, C-F12, A15, T28, T29]

The trade-in proposition, Purana do, Tikau lo, combines sourcing replacement with additional buyers. At 1,000 pickups, the arriving grade mix is 30% Superb, 50% Good and 20% Fair. With proportional 15% failure under A06, 850 pass: 255 Superb, 425 Good and 170 Fair. Passing phones replace wholesale purchases of the same grade and save 8% of those wholesale prices; passing Superb phones also expand available Superb supply. They do not create extra lab capacity. Separately, 30% of all participants generate 300 incremental buyer orders that do require capacity. [C-E6TI1 to C-E6TI4, A06, A07]

Table R31-01. First-month trade-in flows and their different economic roles. This separates replacement supply from incremental demand rather than counting both as new output. [C-E6TI2 to C-E6TI5, A06, A07, T28]

| Flow | April working | Economic role | Control |
|---|---|---|---|
| Pickups | 1,000 × ₹400 | ₹4 lakh operating cost | Charge failed and passed pickups |
| Passing Superb | 1,000 × 30% × 85% = 255 | Adds supply and saves wholesale cost | Does not add lab slots |
| Passing Good | 1,000 × 50% × 85% = 425 | Replaces equivalent wholesale units | Savings only on passes |
| Passing Fair | 1,000 × 20% × 85% = 170 | Same replacement role | No savings on failed units |
| Incremental buyer demand | 1,000 × 30% = 300 | New orders needing capacity | No B1/B2 order multiplier |
| Buyer credit | 300 delivered × ₹1,000 | ₹3 lakh contribution reduction | Charge delivered buyers only |

The first month's sourcing saving is ₹8.5272 lakh. It equals 255 × 8% × ₹17,800 plus 425 × 8% × ₹11,600 plus 170 × 8% × ₹7,000. Pickup cost is ₹4 lakh and buyer credit ₹3 lakh. These flows sit alongside the contribution of the incremental buyers and the benefit of more available Superb supply. It would understate the option to examine savings alone, and overstate it to treat every trade-in as an additional sellable phone on top of existing demand without the replacement logic. [C-E6TI2 to C-E6TI5, T28]

With the selected plan retained, April demand and deliveries reach 8,698.08, below the 9,000 sellable limit. The contribution after marketing is ₹88.4290092512 lakh. Deducting ₹58 lakh company costs and ₹9 lakh shift gives ongoing EBITDA of ₹21.4290092512 lakh. Relative to keeping the selected plan at ₹5.6049980833 lakh, incremental ongoing benefit is ₹15.8240111679 lakh. None of those ongoing figures includes the new ₹35 lakh C setup until it is deducted explicitly. [T20, T28, C-D1]

Table R31-02. April earnings, incremental benefit and setup recovery. The alternative baseline is keeping B1/B2 and the shift; it is not doing nothing. [A15, T28]

| Measure | Working, ₹ lakh | Result | Interpretation |
|---|---|---:|---|
| Ongoing company EBITDA | 88.429009 − 58 − 9 | +21.429009 | Before C setup |
| Keep-plan company EBITDA | Existing selected plan | +5.604998 | Opportunity-cost baseline |
| Incremental ongoing benefit | 21.429009 − 5.604998 | +15.824011 | Relevant benefit for C recovery |
| April EBITDA after setup | 21.429009 − 35 | −13.570991 | Company result in launch month |
| Incremental after setup | 15.824011 − 35 | −19.175989 | Remaining incremental setup deficit |
| May incremental ongoing | 31.209140 − 5.604998 | +25.604142 | Larger ramp month recovers deficit |

The ramp then reaches 1,800 arrivals in May, 2,600 in June, 3,400 in July and 4,000 in August under A15. May deliveries are 8,938.08, still below capacity. June raw demand reaches 9,178.08 and the total-lab limit becomes binding at 9,000. Incremental buyer delivery is then lower than raw incremental buyer demand, so credit is charged only on the fulfilled share. The physical replacement supply does not exempt buyer orders from the proportional rationing rule. [C-E6TI1, C-E6TI3, C-E6TI4, C-E6H4, A15, T28]

Table R31-03. Ramp milestones and the decision each capacity state creates. Results are model scenarios under restarted A15 arrivals, not completed trade-in activity. [A15, T28, C-E6H4]

| Month | Arrivals | Delivered phones | Ongoing EBITDA, ₹ lakh | Operating implication |
|---|---:|---:|---:|---|
| April | 1,000 | 8,698.08 | 21.4290 | Fund setup and establish flow controls |
| May | 1,800 | 8,938.08 | 31.2091 | Incremental recovery occurs during month |
| June | 2,600 | 9,000 | 37.2015 | Total lab binds; buyer credits follow deliveries |
| July | 3,400 | 9,000 | 41.8300 | More sourcing value but limited sales throughput |
| August | 4,000 | 9,000 | 45.2684 | Ramp ceiling; do not extrapolate unit sales indefinitely |

Payback must accumulate incremental benefit against the keep-plan alternative. After April the remaining deficit is ₹19.1759888321 lakh. May adds ₹25.6041423679 lakh, taking cumulative incremental benefit after setup to positive ₹6.4281535358 lakh. Assuming benefit accrues evenly within May, the recovery fraction is 19.1759888321 ÷ 25.6041423679 = 0.7489408767 of that month. Total elapsed time is therefore about 1.74894 months from April launch. This interpolation is not a cash-flow forecast because the case gives no daily receipt, purchase or claim-payment timing. [T28]

The inherited 2.2-month figure divides ₹35 lakh by the first month's incremental ongoing benefit of ₹15.8240111679 lakh, giving about 2.21183 months. That method holds the first-month benefit constant rather than recognizing the ramp. It is a useful constant-rate approximation if clearly labelled, but the ramp-aware headline should be about 1.75 months with recovery during May. Dividing setup by the total ₹21.4290092512 lakh company EBITDA would be a third, inappropriate method because it credits C with earnings the keep-plan business would have generated anyway. [T28]

The other rejected options should also be revisited fairly after March. Keeping the selected plan alone yields about ₹5.6 lakh ongoing monthly EBITDA. Adding B3 gives approximately minus ₹5.5 lakh, and adding A gives minus ₹40.3 lakh in the provided April comparisons. Their adverse economics do not disappear because the quarter changes. C is distinctive because its sourcing savings and buyer flow add value under the stated assumptions, although setup, failed pickups, service quality and capacity must still be funded and controlled. [T20, C-E6A, C-E6B3, C-E6TI2 to C-E6TI5]

Table R31-04. April choices and the approval question that remains. The table distinguishes modeled value from an automatic authorization to proceed. [T20, T28, T29, A15, C-F12]

| Choice | Modeled ongoing result | Main approval issue | Decision |
|---|---|---|---|
| Keep plan | +₹5.6 lakh/month | Maintain assurance and service execution | Reference alternative |
| Add B3 | −₹5.5 lakh/month | Fee exceeds incremental contribution | Keep off at supplied economics |
| Add A | −₹40.3 lakh/month | Price/mix burden overwhelms gain | Keep off at supplied economics |
| Add C, restarted ramp | +₹21.4 lakh first month before setup | New funding and launch readiness | Conditional next-quarter proposal |
| Assume calendar ramp at 2,600 immediately | Different scenario, not launch evidence | Unsupported readiness/arrival assumption | Disclose separately; do not use base headline |

A reasonable objection is that the ramp-aware recovery is too attractive to defer. Within Q1, the full selected package plus C breaches the growth envelope, so the decision remains constrained. Another objection is that the restarted ramp is arbitrary. It is explicitly A15 because the case supplies a pattern for a programme beginning in February, while the proposal delays it. The report makes the new start and funding assumptions visible and uses the audited alternative calendar-ramp result only as sensitivity. Neither assumption should be disguised as a case fact. [C-T1t, C-E6TI1, A15, T12, T29]

Before asking for April approval, management should verify pickup operations, grade-level failures, savings evidence, buyer-credit linkage and record completeness. No new interviews or pilot results are claimed. The proposed review should also confirm that warranty service can support a larger delivered base without relabelling the existing repair time as solved. The post-March opportunity is economically promising in the model, but it remains a conditional launch whose actual execution would need evidence beyond a table of expected results. [C-E4d, C-E5a to C-E5f, C-E6TI2 to C-E6TI5, T28]

The sourcing arithmetic can be inspected per pickup as another check. At the proportional passed-grade mix, first-month savings of ₹8.5272 lakh across 1,000 pickups equal ₹852.72 per pickup before pickup expense. Deducting ₹400 leaves ₹452.72 per pickup from sourcing alone, before considering incremental buyer contribution, buyer credit and any released Superb demand. This is not the full option's profit per participant. It isolates one component and helps explain why failed pickups must remain in the cost denominator even though only passed phones generate sourcing savings. [C-E6TI2, C-E6TI3, T28]

The failed-phone recovery convention also has a narrow meaning. Selling a failed traded phone as parts at its acquisition cost avoids an additional gain or loss on that phone under the case, but the pickup has already occurred. It does not recover the pickup fee or create the 8% wholesale saving assigned to a passing replacement. The same participant can still contribute incremental buyer demand under A07 because the case describes people who trade in, not only passing phones. These flows should remain in separate records so a failed source unit does not automatically erase the buyer or the pickup expense. [C-E6TI2 to C-E6TI5, A07, A20]

As the lab binds later in the ramp, further trade-ins can still change sourcing economics without increasing total deliveries. That does not imply unlimited value: the model remains subject to the grade replacement rule, passing-phone assumptions, pickup expense and the supplied ramp ceiling. Operationally, management should review whether the actual grade and failure mix supports the modeled savings before expanding arrivals. This proposed verification is especially important because the case provides one overall failure rate rather than measured grade-specific pass rates. The April decision should retain A06 openly instead of presenting its proportional mix as a tested fact. [C-E6TI1 to C-E6TI3, A06, T28, T29]

The April approval request should also distinguish reversible operating preparation from the commitment to pay setup. Management can prepare the record requirements and explain what evidence would support the decision without claiming the programme has launched. The actual funding decision should consider the new-quarter envelope, the remaining assurance obligations and the forecast under the chosen arrival assumption. No loan terms, investor commitment or partner arrangement is supplied in the case, so the research cannot name a financing provider or assume funding is already secured. [C-E6C, C-Q5, C-F12, A15]

The recovery calculation has a limited horizon and purpose. It tests when cumulative incremental expected benefit covers the specified setup, relative to retaining the existing plan. It is not a valuation of all future trade-in cash flows, a return on invested capital or a guarantee that the customer-acquisition mechanism persists indefinitely. The ramp is capped at the supplied arrival ceiling, and future warranty obligations remain governed by the modeled expected cost. Adding a discounted terminal value or customer lifetime value would require data and assumptions outside the case and would not improve the answer to Sana's April question. [C-E6TI1, C-E2N1, C-Q5, C-R1, T28]

A disciplined handoff to the next quarter therefore preserves three separate approvals: funding for setup, operational readiness for the source-and-buyer flows and continued permission for the published claims. A favorable payback estimate does not substitute for any of them. The board can authorize the next stage conditionally while requiring the same evidence standard that justified the Q1 offer. This is the proposed decision process; the manuscript makes no claim that a new budget, pickup network or completed validation result exists. [C-E5a to C-E5f, C-F12, A15, T28]

Any approval should preserve the keep-plan comparison as its reference, so future reporting can distinguish trade-in's incremental benefit from earnings already funded by the existing assurance package and shift. [T28]

Exhibit for the deck: April appendix showing separate supply and buyer flows, first-month setup deduction and cumulative incremental recovery during May. The main-slide refusal should say deferred subject to new funding, not rejected forever. [C-Q5, C-F12, A15, T28]






## 32. Risks: a register with probability, impact, early signal and response

**Answer.** The plan's principal risk is a gap between a funded promise and the work required to deliver it consistently. The board should monitor demand, battery replacement, completed-cohort returns and claim execution together, because a favorable result in one measure cannot compensate for an untrue listing or an incomplete wipe. The ratings below are qualitative team judgment, and every owner, escalation and operating action is proposed rather than already implemented. [C-E5a-C-E5f, T27]

### Use risks to assign decisions

A risk register is useful when it changes who acts and what evidence they inspect. It is less useful when it merely repeats the sensitivity chart or assigns precise probabilities unsupported by the case. This register uses High, Medium and Low as relative priorities within this plan. They are not estimated event frequencies and do not enter an expected-loss calculation. The case supplies no distribution from which to calculate such a loss. The financial scenarios remain the audited model's declared tests, while the register covers both quantified exposures and nonfinancial release failures. [A16, T18, T19, C-R3]

The first group concerns the ability to deliver a correctly described phone. Each row has one primary response paired with its risk; a general instruction to work harder would not be an adequate mitigation.

Table R32-01. Delivery and measurement risk register; ratings are team judgment

| Risk | Probability | Impact | Early signal proposed | Accountable owner proposed | Paired response |
|---|---|---|---|---|---|
| Third-shift readiness misses the intended start | Medium | High | Training or staffing gate incomplete | Operations lead | Escalate readiness and rerun the delayed-start case before accepting unsupported orders. [C-E6SH, T25] |
| Good battery replacement exceeds plan | Medium | High | Tested-batch share approaches warning | Lab lead | Audit lot and measurement provenance, then update the cost exposure without weakening the threshold. [C-E6B2, T27] |
| Return reduction is weaker than assumed | Medium | High | Matured cohort rises toward warning | Customer-service lead | Diagnose grade/channel causes and correct the operating issue; preserve truthful claims. [C-E6B1, C-E6B2, T27] |
| Superb supply falls below the case cap | Medium | Medium | Accepted stock below planned demand | Sourcing lead | Reapply Superb rationing before total capacity and review affected orders. [C-E4b, C-E6H4] |
| Own-lab reading cannot substantiate a listing | Medium | High | Tool disagreement or missing unit linkage | Lab lead | Hold the unit's claim until supported by an approved reading. [C-E4c, C-E5a] |
| Erasure is incomplete or its result unverified | Low | High | Missing completion or approval record | Data-handling owner | Stop sale and resolve the device-specific wipe process. [C-E5f] |

The second group concerns the buyer's understanding, service experience and route to remedy. These exposures can arise even when a phone passes a functional inspection. A valid battery reading does not make an unsupported creator statement truthful, and a signed claim policy does not establish that the buyer can use it. The control should therefore follow the public promise through the sale and any subsequent service contact. [C-E5a, C-E5e, C-E4d]

Table R32-02. Promise and service risk register; ratings are team judgment

| Risk | Probability | Impact | Early signal proposed | Accountable owner proposed | Paired response |
|---|---|---|---|---|---|
| Longer warranty produces unresolved repair backlog | Medium | High | Aging claims and repeat visits | Service lead | Inspect claim stages and remove the bottleneck before making unsupported service assurances. [C-E4d, C-E6B2] |
| Creator omits advertisement disclosure | Medium | High | Published asset differs from approved brief | Campaign owner | Pause the asset and require compliant disclosure in the actual viewing format. [C-E5e] |
| Marketplace page omits required condition wording | Medium | High | Listing differs from approved product record | Commerce lead | Correct or hold the listing before promotion. [C-E5b] |
| Buyer misreads battery percentage as runtime | Medium | Medium | Failed comprehension in proposed testing | Customer-experience lead | Rewrite the supported explanation and retest meaning. [C-E5a, C-R3] |
| IMEI or account status is unresolved | Low | High | Adverse lookup or failed transfer readiness | Device-release owner | Hold the unit and resolve through the approved screening and transfer route. [C-E5f] |
| Rival matches the headline warranty | Medium | Medium | Verified change in competing offer | Commercial lead | Explain Tikau's own proof and remedy; do not improvise a named comparison. [C-K1, C-E5c] |

These rows do not establish that the lower-probability events are acceptable. Sale-blocking conditions remain blocking even if the team judges them unlikely. A model result can tolerate an economic variation within its assumptions; it cannot authorize selling a reported stolen phone or making a false claim. That distinction should guide escalation: financial warnings trigger diagnosis and forecast review, while a failed release condition stops the affected sale immediately. [C-E5a, C-E5f, C-F16]

### Separate warnings, boundaries and stop conditions

T27 defines the proposed weekly conventions. Delivered orders use all channels and the stated monthly-to-weekly conversion. Returns use completed seven-day cohorts, excluding immature deliveries. Good battery replacements use the tested batch as denominator. These measures have different clocks and cannot be combined into a single daily traffic light without preserving their definitions. A recent rise in deliveries does not immediately enlarge the denominator of a matured return cohort. [A13, T27]

Table R32-03. Response priority by trigger type

| Trigger | Example | Meaning | Immediate decision | Follow-up evidence |
|---|---|---|---|---|
| Operating warning | Good swaps at 50% | Proposed early warning before the local boundary | Audit the batch and supplier evidence | Tested counts and measurement version. [T27] |
| Financial boundary | Good swaps near 55.06% | Local March EBITDA-zero result with other inputs fixed | Rerun economics before further exposure | Updated joint input set. [T24, T27] |
| Board limit | Return rate reaches 6.0% | Board-test boundary, not EBITDA zero | Escalate and correct cause | Completed cohort and channel-grade detail. [C-T3t, T27] |
| Claim stop | Battery claim lacks own-lab reading | Evidence condition has failed | Hold that claim and unit release | Supported reading and identity link. [C-E5a] |
| Device stop | Wipe or lost/stolen screening unresolved | Sale-readiness condition has failed | Do not sell the affected unit | Completed required records. [C-E5f] |
| Readiness gate | Shift training incomplete | Planned capacity may not be available | Review delivery promise and timing | Actual readiness record. [C-E6SH] |

The warning levels are proposed management conventions. They do not amend the board tests or demonstrate a statistically significant process change. A small batch can move a replacement share sharply, while a large aggregate can conceal a bad lot. The dashboard should retain numerator, denominator, period and relevant version rather than display only the percentage. Managers can then investigate whether the change reflects mix, measurement or actual device condition. No new control-chart thresholds or confidence bands are asserted because the case does not provide the observations needed to estimate them. [T27, C-R3]

### Pre-mortem: explain a failed launch before it happens

Consider a hypothetical review after launch in which orders rose but the board still lost confidence. The immediate temptation would be to attribute the outcome to weak demand or a competitor response. The pre-mortem should instead test the full chain: whether the extra capacity was ready, whether each promised record existed, whether the delivered unit matched it and whether the service route worked. This is a rehearsal of possible failure, not a claim about events that have occurred. [C-E6B1, C-E6SH, C-E5a-C-E5f]

Table R32-04. Proposed pre-mortem and evidence that would distinguish causes

| Hypothetical failure | Evidence to inspect first | Alternative explanation | Preventive action proposed |
|---|---|---|---|
| Report produced but buyer receives a mismatch | Dispatch identity and final report | Correct device with obsolete photograph | Lock final evidence to the dispatched unit. [C-E6B1] |
| Demand appears weak despite more inquiries | Delivered versus requested orders | Capacity or supply rationing | Diagnose lost deliveries before changing message. [C-E6H4] |
| Warranty promise creates dissatisfaction | Claim stages and repeat visits | Unclear coverage rather than technical defect | Fix the identified service or communication cause. [C-E4d, C-E6B2] |
| Battery cost exceeds plan | Tested shares and lot history | Measurement-method inconsistency | Review provenance before blaming supplier quality. [C-E4c, T27] |
| Return rate improves but trust remains weak | Matured cohorts and support reasons | Return friction or selective reporting | Avoid satisfaction claims until mechanism is understood. [C-T3t, C-R3] |
| Campaign reaches audience with wrong meaning | Published asset and buyer interpretation | Clear wording delivered to unsuitable segment | Separate comprehension and targeting decisions. [C-E5a, C-E1C] |

The preventive action should be feasible within the authorized scope. The register does not quietly add a new laboratory, service guarantee or paid campaign to the forecast. Where the proposed control requires unprovided resources, management must identify that dependency and seek a separate decision. The submitted economics continue to use the case's stated bundle, and real readiness remains an implementation condition. A risk response that changes costs or timing must return to the model rather than claim the original result unchanged. [C-R3, C-E6H1, C-E6H3]

### Joint risk matters more than isolated comfort

The audited one-input stresses remain positive for March, while the joint bear case produces negative EBITDA. This difference is commercially important: battery replacement, weaker order response and claims can move together. The report cannot assign a probability to that combination, but it can show why observing each warning separately is insufficient. The board should ask whether the combined forecast still passes after updated observations, using the same calculation order and cost definitions. [A16, T18, T19, T24]

Table R32-05. Proposed joint-risk review sequence

| Observation | First diagnostic | Combined check required | Decision boundary |
|---|---|---|---|
| Orders below normalized plan | Demand versus rationing | Recalculate contribution with actual mix and costs | Do not infer a pure marketing problem. [T22, T27] |
| Battery replacement above plan | Lot and grade exposure | Combine cost change with demand variation | Single-input headroom is not guaranteed joint headroom. [T24] |
| Claims above B2 assumptions | Grade and completed claim record | Recompute warranty expense alongside swaps | Keep claim and return costs separate. [C-E2N1, T18] |
| Return cut weaker than expected | Completed channel-grade cohorts | Update weighted return and EBITDA | Retain the separate 6.0% board limit. [T27] |
| Service or claim evidence fails | Unit or asset control | Evaluate compliance independently of profit | Profit does not override Exhibit 5. [C-F16] |

The credible competing reading is to reserve more budget and defer the shift until uncertainty resolves. That saves a month's shift expense but sacrifices contribution from delivered demand under the case. T25 evaluates that trade-off rather than treating caution as automatically free. The chosen February start remains the best quarter among the screened feasible plans. Real implementation failure could require a revised timing decision, but that contingency should be compared against the audited alternatives rather than described as an equally profitable version of the original plan. [T23, T25, C-E6SH]

### Board ownership and closure

A proposed weekly review should end with named decisions and unresolved evidence, not a declaration that all risk is managed. The owner of a warning provides the relevant cohort or batch; the economics owner updates the combined view; the claims owner confirms whether any sale or creative is held. The CEO resolves conflicts between commercial timing and evidence readiness. These are governance proposals, with no assertion that the fictional company has adopted the structure. [T27, C-R3]

Table R32-06. Proposed risk closure standard

| Item | Minimum closure evidence | Inadequate closure | Decision retained by board |
|---|---|---|---|
| Shift readiness | Training and staffing record | Calendar date has arrived | Change launch timing if readiness fails. [C-E6SH] |
| Battery-cost warning | Supported batch explanation and updated economics | Percentage falls without denominator | Accept further sourcing exposure. [T24, T27] |
| Claim mismatch | Corrected unit record and affected-stock review | New generic badge | Release supported claims only. [C-E5a] |
| Service backlog | Traceable case resolution and bottleneck action | Longer advertised warranty | Fund or change actual service process separately. [C-E4d] |
| Creator disclosure | Corrected published asset | Contract promise alone | Restart the affected asset. [C-E5e] |
| Joint financial deterioration | Rebuilt full-month forecast | One favorable weekly measure | Revisit the plan under all board tests. [T19, T27] |

The register's limitation is that its qualitative ratings are judgments informed by case exposure, not observed probabilities. The process is intended to make a later decision reviewable. It does not prove that the selected plan will meet its forecast, and it does not add a risk-adjusted premium to the economics. The board receives a conditional recommendation with specified evidence responsibilities, which is more defensible than either an unqualified guarantee or a list of risks without owners. [C-R3, T19]

Risk ownership should follow the authority to change the relevant process. The lab lead can investigate a battery lot but cannot approve a misleading campaign; the campaign owner can withdraw an asset but cannot certify a device. Where a response crosses functions, the weekly record should identify the coordinating owner and the unresolved dependency. This avoids closing a warning merely because one department completed its task while the actual buyer exposure remains. The proposed register should retain open items until the evidence supports closure. [C-E5a, C-E5e, T27]

An exception review should also preserve what was known when a decision was made. Replacing a report after a complaint without retaining its earlier version would make it difficult to explain whether the original sale was supported. The same principle applies to a changed measurement method or a corrected creator post. A traceable correction is a proposed control, not an admission that any such event has occurred in the fictional company. [C-E5a, C-R3]

Exhibit for the deck: A4's risk panel should display the most decision-relevant paired controls, while the Signals slide retains the defined warnings and boundaries. The full register and pre-mortem remain here. [T27, C-F16]

## 33. Customer validation plan, not yet run: proposed interviews and product-page tests would examine the recommendation's weakest links

**Answer.** No new primary research has been conducted for this report. The proposed programme combines thirty interviews with two product-page tests to investigate buyer understanding, unresolved objections and the practical meaning of the promise. It does not supply measured conversion, willingness to pay or evidence that the case's option uplifts will occur. [C-R3, C-E1A, C-E1B]

### Recruit for a decision rather than a flattering response

The interview allocation is twelve family buyers and six each of flagship-on-a-budget buyers, value seekers and upgraders. These are proposed quotas chosen to explore the recommended audience while retaining the alternatives. They are not prevalence weights or a representative sample of Tikau customers. Family status should be established through the purchase job, such as buying for a parent or child, rather than inferred from age or household appearance. A person can have more than one motive, so the researcher should record the primary purchase task and secondary considerations. [C-E1C; proposed validation design]

Table R33-01. Proposed interview recruitment and decision purpose

| Audience | Planned interviews | Recruitment screen | Evidence sought | Interpretation limit |
|---|---|---|---|---|
| Family buyers | 12 | Responsible for selecting a phone for a household recipient | Battery, remedy and explanation needs in the actual task | Cannot estimate the whole segment's conversion. [C-E1C; proposed design] |
| Flagship-on-a-budget | 6 | Considering premium capability within a constrained budget | Importance of model, condition and capped-grade availability | Cannot remove Superb supply limits. [C-E1C, C-E4b; proposed design] |
| Value seekers | 6 | Comparing low purchase price and acceptable function | Trade-offs against the new budget alternative | Cannot make Fair economics attractive by preference alone. [C-K3, T11; proposed design] |
| Upgraders | 6 | Replacing a current device and considering part payment | Ownership transfer, credit and sourcing expectations | Cannot validate a trade-in ramp from interviews. [C-E6TI1-C-E6TI5; proposed design] |
| Programme total | 30 | Distinct participants with recorded primary task | Compare mechanisms across the four audiences | Qualitative coverage, not a probability sample. [Proposed design] |

Recruitment should include people who decline refurbished phones as well as those already interested. Otherwise the team would learn mainly how to reassure an audience that has accepted the category. The proposed screen should record whether the person has a current device, who uses the prospective phone, the alternatives considered and prior exposure to refurbishment. It should avoid implying that the preferred answer is trust rather than price. An interviewer's enthusiasm for the report could itself change how a participant responds. [C-E1A, C-E1C; proposed design]

The interviewer should not present the complete solution immediately. Begin with the purchase task, then show the relevant offer and ask the participant to explain its meaning. Introducing the report first would make it difficult to distinguish an existing concern from a concern created by the interview. The guide should record the order of exposure and preserve the participant's original interpretation before any correction. These controls improve interpretability without turning a qualitative sample into a causal experiment. [C-E1A, C-E1B; proposed design]

### Use prompts that distinguish preference, comprehension and feasibility

The guide should elicit a concrete recent or intended purchase decision. General agreement that trust matters is too broad to determine whether a battery reading, a repair route or a lower price addresses the actual obstacle. The interviewer should seek examples of how the participant compares offers and what evidence would be sufficient, while avoiding invented verification tasks that no ordinary buyer could perform. A request for independent assurance should be recorded as an objection to investigate, not answered by calling B1 independent certification. [C-E6B1; proposed design]

Table R33-02. Proposed interview prompts and coding purpose

| Prompt | Prompt instruction | What to record | Rival interpretation to preserve | Decision connection |
|---|---|---|---|---|
| Describe the intended user's phone needs | Recipient, task and alternatives | Capability and inconvenience priorities | Family label may hide different jobs | Check persona inference. [C-E1C] |
| Explain why an offer was accepted or rejected | Actual comparison and decisive missing fact | Stated objection before exposure | Price and uncertainty may coexist | Separate affordability from proof. [C-E1A] |
| Describe the battery number in own words | Meaning without interviewer correction | Runtime, lifetime or capacity inference | Familiar percentage can still be misunderstood | Refine claim explanation. [C-E5a] |
| Locate warranty and return information | Search path and terms understood | Coverage, exclusions and responsible party | Longer term may not solve service inconvenience | Design handover and support route. [C-CO2, C-E4d] |
| Identify the phone to which the report applies | Use of photos and unit reference | Evidence-link comprehension | More detail may overwhelm | Test report usefulness. [C-E6B1] |
| Explain a creator's relationship to the seller | Recognition from displayed content | Advertisement understanding | Product claim can remain unclear despite ad recognition | Review disclosure and message separately. [C-E5e] |

The proposed coding file should distinguish an unprompted concern from agreement after a feature is suggested. It should also distinguish a factual misunderstanding from a legitimate dislike of the offer. A participant who accurately understands compatible batteries and still prefers brand-made replacements has expressed a preference, not failed comprehension. The commercial team can decide whether that preference fits the target, but it must not rewrite the interpretation to make every objection look fixable through copy. [C-E5b; proposed design]

Interview notes should avoid turning individual comments into quantified customer facts. A vivid account can reveal an overlooked mechanism, yet it does not establish its frequency. The report should retain a traceable coding rationale and identify contradictions across participants rather than select only comments supporting the recommendation. No invented quotation is needed to make the plan persuasive: the evidence is the proposed research question and the decision it would inform. [C-R3; proposed design]

### Test information hierarchy and comprehension separately

The first proposed page test compares report-first with price-first hierarchy while holding product, price, disclosures and remedy terms constant. Its hypothesis is that hierarchy changes how clearly participants locate and understand the unit evidence. The second proposed test examines battery-reading and warranty explanation, with the hypothesis that supported explanations reduce material misinterpretation. Neither test should vary the underlying offer while claiming to measure only presentation. [C-E5a, C-E6B1, C-E6B2; proposed design]

Table R33-03. Proposed product-page test design

| Test | Test | Controlled elements | Primary outcome | Secondary observations | Boundary |
|---|---|---|---|---|---|
| Report-first versus price-first | Information order differs | Same device, price, report fields and terms | Correct location and explanation of material proof | Navigation, hesitation and stated preference | No conversion uplift assumed from a prototype task. [Proposed design] |
| Battery and warranty explanation | Wording and presentation evaluated | Same threshold, coverage and eligibility | Correct meaning without coaching | Unsupported runtime or remedy inference | No claim that favorable intention proves purchase. [Proposed design] |
| Common validity control | Exposure recorded consistently | Same task and facilitation script | Comparable observation conditions | Device familiarity and prior purchase route | Distinguish task effect from offer changes. [Proposed design] |
| Common integrity control | Published claim scope unchanged | Refurbished and compatible wording retained | Truthful interpretation | Confusion caused by missing disclosures | No winning variant may violate Exhibit 5. [C-E5a, C-E5b] |

If a later field experiment observes actual purchases, its design would require a separate protocol, sufficient exposure and defined assignment. The current proposal does not invent a traffic allocation or sample size that the case cannot support. Before collecting data, the team should specify eligibility, repeat visits, device availability and any exclusions so outcomes cannot be selected after inspection. A real inventory constraint could affect observed purchases independently of page hierarchy, so available stock and delivery loss would need to be recorded. [C-E4b, C-E6H4; proposed design]

### Define outcomes before interpreting them

The team should decide how to score comprehension before reviewing responses. A buyer must distinguish measured battery capacity from guaranteed runtime, identify refurbished status and understand that warranty and returns have different triggers. The assessor should record partial understanding rather than force every answer into an unqualified pass. A favorable intention with an unsupported interpretation should be flagged as a communication problem, not celebrated as a stronger offer. [C-E5a, C-E5b, C-CO2; proposed design]

Table R33-04. Proposed outcome definitions and evidential limits

| Outcome | Unit of observation | Definition | Insufficient proxy | Inference excluded |
|---|---|---|---|---|
| Battery comprehension | Participant response | Supported meaning stated without coaching | Recognition of a number alone | Runtime or lifespan validation. [C-E5a; proposed design] |
| Warranty comprehension | Participant task | Coverage and claims route correctly located and explained | General approval of a longer term | Actual service delivery. [C-E6B2; proposed design] |
| Report usefulness | Participant task | Material field located and connected to the offered unit | Number of fields remembered | Quality of the physical handset. [C-E6B1; proposed design] |
| Stated purchase intention | Participant response | Declared response to the shown offer | Actual payment or retained order | Realized conversion. [Proposed design] |
| Interview concern | Coded account | Concern and exposure order recorded | Population prevalence | Segment size or uplift. [Proposed design] |
| Operational readiness | Observed workflow | Required evidence created and retrievable | Customer comprehension | Staff productivity or cost without timing evidence. [C-E6SH; proposed design] |

Decision rules should be chosen for their consequence, not dressed as statistical significance. A material misunderstanding that makes the offer seem broader than the supported claim should trigger wording correction before release. A clear but disliked offer should trigger a targeting or product discussion. An unresolved unit-evidence problem should trigger a process hold. These are proposed management responses; they do not promise that every participant will understand or that a small study settles the commercial decision. [C-E5a-C-E5f; proposed design]

Table R33-05. Proposed validation findings and authorized response

| Possible finding | Possible finding, not observed | Interpretation to test | Proposed response | Change requiring a separate decision |
|---|---|---|---|---|
| Report meaning is unclear | Information design is weak | Rewrite and retest while preserving facts | Rework hierarchy | Added feature or certification expense. [C-E6B1] |
| Battery threshold is understood but insufficient | Preference differs from offer | Record segment fit and alternatives | Refine target explanation | Different battery promise and cost model. [C-E6B2] |
| Warranty is valued but route is inconvenient | Service process matters | Improve actual handover and escalation | Resolve operational dependency | Unfunded guaranteed turnaround. [C-E4d] |
| Price remains decisive after comprehension | Affordability remains binding | Retain competing interpretation | Revisit the audited alternative screen | Unmodeled discount or spend reallocation. [C-E6A, C-F12] |
| Report cannot be tied to unit | Evidence process is incomplete | Hold affected release | Fix identity and record control | Claiming independent certification. [C-E5a, C-E6B1] |

The programme's limitation is deliberate: it investigates meaning and mechanisms before claiming results. It cannot validate the full demand multiplier, warranty incidence or national category behavior. The board should use it to reduce avoidable execution errors and identify assumptions requiring later evidence. The case answer remains based on supplied option effects, with the proposed research clearly separated from observed facts. [C-R1, C-R3, C-E6H2]

Exhibit for the deck: the Customer panel should label its persona as inferred, and A4 may identify the proposed readiness checks. No interview result or test uplift may appear because none has been collected. [C-E1C, C-R3]

## 34. Assumptions register: twenty stated assumptions, their basis and the consequence of another reading

**Answer.** The model uses A01 to A20 to resolve missing detail and preserve a consistent calculation order. Several assumptions concern rejected trade-in plans rather than the recommendation, while others govern the recommended economics, reporting conventions or post-March scenario. A different reading must be classified as a genuine ambiguity, a proposed convention or an explicit-rule error before anyone treats it as a competing strategy. [A01-A20, T29]

### Cost recognition must preserve the same economic event

A01 counts A's extra advertising once in growth money in the month spent. It prevents double counting the same campaign expense in both growth money and the existing channel cost layer. The recommendation leaves A off, so this issue affects the rejected price-push comparisons rather than its own result. A02 keeps existing channel fixed spend unchanged because the case provides no reallocation lever. It is consequential to the recommendation: the team cannot claim the audited demand while silently removing the advertising cost associated with the baseline channel structure. [A01, A02, C-E6H3, C-F12]

A03 applies commission, coupons and per-phone costs only to delivered orders. The case says undeliverable orders are lost. That reading keeps a lost inquiry from producing either revenue or a delivered-phone report charge. It does not mean that every real operational expense disappears when an order fails; it means that the exercise specifies costs on the delivered-phone basis used in this model. A broader cancellation-cost model would require a stated new assumption, which the report does not introduce. [A03, C-E6H4, C-R3]

A11 updates MegaKart's commission when B2 raises selling price, because the fee is a percentage of actual price. A12 applies report and battery costs to delivered trade-in buyer phones as well as ordinary orders. These are consistency rules: the same promised phone cannot receive a price or cost exception merely because it arrives through a different buyer route. T29 shows that freezing commission at old prices overstates the recommended plan's quarter result. [A11, A12, C-E3N2, C-E6H2, T29]

Table R34-01. Cost assumptions classified by decision exposure

| Assumption category | Assumption | Recommendation exposure | Alternative reading | Treatment |
|---|---|---|---|---|
| Advertising counted once | A01 | No direct effect because A is off | Deduct it twice | Reject double counting, not a strategy. [C-E6H3] |
| Existing fixed spend retained | A02 | Direct | Remove spend while retaining orders | Requires a new lever absent from the case. [C-F12] |
| Delivered-phone charging | A03 | Direct | Charge all inquiries like sales | Unsupported cost basis for lost orders. [C-E6H4] |
| Commission follows changed price | A11 | Direct | Keep commission at old price | Reject because fee is a price percentage. [C-E3N2] |
| Trade-in buyer operating costs | A12 | Deferred-plan exposure | Exempt incremental buyers from report or battery cost | Reject inconsistency with every-phone cost changes. [C-E6H2] |

### Flow assumptions separate sourcing from buyer demand

A04 applies Superb rationing first across all affected channels, then total-lab rationing to the remaining orders, including trade-in buyer demand. The procedure is not a discretionary channel prioritization rule. A management proposal to favor stores or referrals would change allocation and would need its own analysis. It cannot be presented as the existing plan with the same cell results. The case's specified proportional rule makes the calculation reproducible and prevents preferred channels from receiving an implicit priority. [A04, C-E6H4]

A05 multiplies return reductions against each channel's own rate, including the rate used for trade-in buyers. This preserves the baseline difference between stores, creators and other routes. Adding reductions would retain a different fraction and contradict the explicit combining instruction. A19 separately keeps those channel multipliers in place after B1 and B2; the improvements do not erase the channel-return structure. The distinction matters because an overall average rate cannot be substituted into each cell without changing its expected cost. [A05, A19, C-E3N3, C-E3N4, C-E6H2]

A06 distributes the stated trade-in failure share proportionally across arriving grades because grade-specific failures are missing. A07 interprets the buyer share as a share of all trade-in participants, including those whose submitted phones fail. These are genuine sensitivity questions rather than excuses to choose a favorable grade failure pattern. A20 limits sourcing savings to passed phones; failed-phone parts recovery does not create the saving or eliminate pickup cost. The recommendation has no Q1 trade-in exposure, but these readings matter to the rejected combinations and April. [A06, A07, A20, C-E6TI2-C-E6TI4]

Table R34-02. Trade-in ambiguities and conservation checks

| Assumption | Quantity affected | Check preserved | Recommended Q1 implication |
|---|---|---|---|
| A04 rationing | Delivered incremental buyers | Delivered totals obey both caps in order | None from trade-in because C is off. [C-E6H4] |
| A06 proportional failures | Passed supply by grade | Total passed stock matches stated failure rate | None; April and C alternatives remain sensitive. [T29] |
| A07 participant denominator | Incremental buyer demand | Source-flow count differs from buyer-flow count | None; C alternatives change. [T29] |
| A12 costs on trade-in buyer phone | Delivered-buyer contribution | Promise costs apply to every eligible delivery | None in Q1; relevant after launch of C. [C-E6H2] |
| A20 savings only on passed stock | Sourcing benefit | No benefit assigned to failed phones | None in Q1; prevents overstated C economics. [C-E6TI3] |

An analyst should test these flows independently before joining them. A passed trade-in can replace a wholesale unit without representing an additional buyer, while a participant can buy even if the submitted phone fails under A07. Mixing those events would create or destroy orders. The source phone's grade mix and the incremental buyer's purchase mix also differ. A single trade-in volume column therefore cannot substitute for the full sourcing and demand records. [C-E6TI1-C-E6TI5, A06, A07]

### Measurement assumptions do not establish observed compliance

A08 applies the Superb battery rule to Tikau's own reading from February and assumes no grade migration because the case gives no failure rate for Superb. This is a limit of available data, not evidence that every actual Superb unit would pass an independent measurement. If real units fail the claim, the company must hold or correct them. The absence of a quantified downgrade input cannot authorize an untrue sale, even though the model cannot cost that missing process. [A08, C-E5a, C-E6B1, C-R3]

A14 scales the Good-phone spot check to illustrate potential monthly exposure. The sample finding is 22 of 200 below the printed threshold, or 11%. Applying that share to the baseline Good volume gives 350.9, displayed as about 351 phones. The extrapolation is indicative; it does not establish a census, a statistically representative estimate or a remediation cost. T29 assigns no new quarter loss from it because the case does not specify downgrade, scrap or correction expenses for that extrapolated population. [A14, C-E4c, T8, T29]

Table R34-03. Quality and rate assumptions with evidence limits

| Assumption | Supported use | Unsupported extension | Management response proposed |
|---|---|---|---|
| A08 own-lab Superb threshold | Preserve case claim and no supplied migration rate | All Superb stock proven to pass | Test actual units and hold unsupported claims. [C-E5a] |
| A14 spot-check scale-up | Show indicative exposure | Exact number of defective monthly phones | Investigate lots and measurement; do not invent cost. [C-E4c, T29] |
| A19 channel multipliers retained | Maintain specified relative return regimes | Same absolute return rate in every route | Keep channel-grade cohort records. [C-E3 notes, T27] |
| Conditional B1 compliance proxy | Screen plans using provided lever | Certify legal and operational execution | Apply the full Exhibit 5 matrix separately. [C-F16, T29] |

### Timing and reporting conventions have bounded roles

A09 keeps January's operating cells at baseline in every plan and uses baseline performance for doing nothing throughout the quarter. Setup paid in January still reduces that month's EBITDA. It would be wrong to activate customer benefits immediately because the setup is paid then. A10 uses the third shift's stated sellable increment and charges its monthly growth expense once when active. Applying the existing failure deduction again would understate capacity relative to the case. Neither assumption measures the actual time needed for each report task. [A09, A10, C-E6H1, C-E6SH]

A13 converts monthly values to weekly references using 4.33 weeks. It is a management reporting convention, not a change to monthly board tests. A weekly order reference should therefore be interpreted with the actual completed-week denominator and the original full-month economic boundary. A15 assumes fresh funding after March and restarts the trade-in ramp at the first month's arrivals. The case does not establish those post-quarter funding and timing conditions, so the April comparison remains an explicitly labelled scenario. [A13, A15, T27, T28]

Table R34-04. Timing assumptions and the decision they govern

| Assumption | Scope | Alternative considered | Consequence |
|---|---|---|---|
| A09 January unchanged | Q1 operations | Benefits start with setup payment | Reject contradiction of February activation. [C-E6H1] |
| A10 sellable shift capacity | Active shift months | Treat increment as gross slots | Reject repeated failure deduction. [C-E6SH] |
| A13 weekly normalization | Management dashboard | Use calendar weeks as if identical | Keep period labels and monthly tests separate. [T27] |
| A15 restarted April ramp | Post-March scenario | Continue the original calendar ramp | Compare openly; neither new funding nor faster arrivals is established. [T28, T29] |

### Stress and historical interpretation need separate controls

A16 varies the declared uncertain order, return, battery-share and claim inputs while holding chosen prices and report cost at printed values. The base recommendation uses the case's values. A stress result is not a probability-weighted forecast, and one-input headroom does not prove joint resilience. The two-input grid and joint scenarios answer different questions: the grid holds specified inputs at selected intersections, while the joint bear case changes the declared uncertain effects together. [A16, T18, T19, T24]

A17 reads the historical revenue comparison as gross selling price before commission. A18 treats the supplied average operating month as the baseline for the specified bridge period. Together they allow reconciliation without editing the rounded historical facts. T29 shows the small difference created by replacing exhibit-built monthly EBITDA with annual loss divided by months; that replacement is rejected because the historical periods and rounding differ. The purpose of reconciliation is to explain closeness, not force equality by changing case inputs. [A17, A18, C-CO3, T5, T29]

Table R34-05. Interpretation assumptions and audit safeguards

| Assumption | Evidence function | Safeguard | Error prevented |
|---|---|---|---|
| A16 declared stresses | Explore uncertain effects | Preserve changed-input list | Stressing chosen price or report cost without disclosure. [T18-T19] |
| A17 gross selling-price revenue | Reconcile historical scope | Keep commission separate | Deducting marketplace fee twice in revenue and cost. [T4-T5] |
| A18 representative average month | Build consistent baseline | Retain source period and rounding caveat | Replacing supplied exhibits with an invented seasonality curve. [C-E3, T29] |
| Full precision until display | Compare and sum results | Round at output only | Selecting plans from rounded ties or summing rounded rows. [C-R4, C-F8, T23] |

### T29 makes alternative readings reviewable

The strongest alternative readings deserve quantified treatment where the model can represent them. T29 tests participant denominators, grade-failure concentration, commission mistakes and other interpretations. It distinguishes sensitivities from rejected rule violations. The table below classifies selected consequences rather than reproducing its full output. Every delta compares the alternative with the same canonical lever set, so a change to a trade-in plan is not presented as a change to the recommendation. [T29]

Table R34-06. Alternative-reading decision audit

| Reading | Reading | Q1 delta versus same canonical plan, ₹ lakh | Interpretation | Recommendation relevance |
|---|---|---|---|---|
| Add B1 and B2 return cuts | Explicit combining rule violated | +1.46 | Reject favorable overstatement | Direct recommended-plan error. [T29] |
| Keep old MegaKart commission prices | Percentage fee misapplied | +2.13 | Reject omitted fee increase | Direct recommended-plan error. [T29] |
| Only passed trade-in participants buy | Buyer denominator narrowed | −3.23 | Sensitivity with disclosed wording choice | Applies to C combination, not recommended Q1. [T29] |
| Concentrate failures in Superb | Grade distribution changed | −4.65 | Sensitivity without supplied grade failure data | Applies to C combination. [T29] |
| Pay savings on failed trade-ins | Failed stock credited incorrectly | +4.21 | Reject unsupported benefit | Applies to C combination. [T29] |
| Charge pickup only on passed stock | Real pickups omitted | +1.68 | Reject cost understatement | Applies to C combination. [T29] |

The appendix retains the post-March ramp comparison and source conflicts in more detail. The controlling principle is that a disclosed assumption is not automatically valid merely because it is disclosed. If the case expressly says multiply, an additive reading is an error. Where detail is absent, a convention can be stated and tested. Where the proposed control has not been observed, its success remains unproved. Those categories should remain separate in both the research and oral defense. [C-R2, C-R3, T29]

The assumption register should travel with any revised output. If a team member changes the participant denominator or the April ramp, the new result needs a version label and a comparison against the canonical calculation. It should not overwrite the original interpretation silently. This matters even when the recommendation is unchanged, because the alternative can alter the ranking or apparent attractiveness of a rejected plan. The audit trail should state the changed input, the held inputs, the affected scope and the reason the change was accepted or rejected. Stating only that assumptions were tested would not make the result reproducible. [C-R3, T29]

Exhibit for the deck: A1 retains the assumption register and cost definitions; A2 clarifies boundaries and rounding; A3 carries the material quantitative alternatives. A4 shows the claim controls that the model's compliance proxy cannot prove. [T24, T29, C-F16]

## 35. Slide blueprint: fourteen slides carry the argument, and each displayed result traces to the case or frozen model

**Answer.** The enriched deck should preserve the original architecture while using the research to correct numbers, clarify conditions and add defensive working. Its physical order contains the cover, eight main slides, four appendices and the thank-you slide; the executive summary remains first after the cover. External context stays in the research, and this blueprint is a proposed content mapping rather than evidence that the final Figma file has been built or inspected. [C-S1-C-S4, C-F4; operational plan F5]

### Organize the argument around decisions

The slide sequence should help a judge follow the answer without reading the report. The Summary states the recommendation and its quarter trade-off. Economics explains the contribution problem. Trust distinguishes expressed objections from measured outcomes and shows the evidence gap. Customer explains the chosen job and limits of the segment score. Options gives symmetric alternatives and the selection criterion. Plan presents timing and funding. Launch shows what the buyer sees. Signals explains when management should change course. The appendices provide the arithmetic and controls that make those statements defensible. [C-Q1-C-Q5, T2-T29]

The table below maps physical order to the question each page must settle. It does not authorize a redesign or duplication of the original content. Additions should fit the preserved panel system or move to the defensive appendices rather than force unreadable density. Every new chart value should come from the frozen manifest rather than be recalculated in a drawing script. [C-S3, C-R4; operational plan F2-F5]

Table R35-01. Physical slide and argument mapping

| Slide | Logical slide | Decision answered | Primary evidence | Critical qualification |
|---|---|---|---|---|
| Cover | Cover | What Project DOBAARA recommends | Case and executive answer | Fictional competition company and case. [C-T1, C-T2] |
| Main opening | Summary | What is chosen and why | Decision table and board tests | Q1 remains slightly worse than doing nothing. [T15, C-F15] |
| Economics | Economics | Where contribution is lost | Unit, channel and company bridge | Channel spend and company fixed costs differ. [T2-T5] |
| Diagnostic | Trust | Which evidence gaps inhibit purchase | Funnel, objections, spot check | Survey is multiple-response; spot check is a sample. [C-E1A, C-E4c] |
| Target | Customer | Which buyer the offer serves | Segment score and grade economics | Scores are judgment; weighted ties remain visible. [T10, T26] |
| Decision screen | Options | Why this feasible plan wins | Full screen and Pareto comparison | Objective is the team's stated selection rule. [T12-T14, T23] |
| Commitment | Plan | What happens in each month | Case-format table and growth ledger | Setup and shift charged once in their months. [T15, C-E6H3] |
| Buyer experience | Launch | How proof reaches the customer | Native product-page mockup and claims grid | Illustration and draft copy are labelled. [C-E5a-C-E5f] |
| Management | Signals | What warnings prompt action | Boundaries, scenarios and April comparison | April setup and new funding distinguished. [T17-T20, T27-T28] |
| Appendix working | A1 | How unit and channel results rebuild | Cost definitions and assumptions | Use canonical rounded displays. [T1-T5] |
| Appendix boundaries | A2 | How option effects and limits work | Unit effects, channels and glossary | Return limit is not EBITDA zero. [T11, T17, T21] |
| Appendix screen | A3 | How alternatives and sensitivity compare | Rationing, Pareto and heat map | Use full-precision ranking. [T22-T25] |
| Appendix execution | A4 | What supports each public promise | Claims, weekly definitions and service controls | Proposed controls are not observed outcomes. [T27, C-F16] |
| Close | Thank you | What the team has established | Existing recap and team information | No new evidence or undelivered supporting-file claim. [C-R5] |

### Claim-to-panel mapping needs a stable evidence path

The proposed manifest should identify a claim, the research section that explains it, the source or model field, the display value and its destination panel. It should also record the assumption that changes the claim's meaning. A number without its unit or timing label can be accurate yet misleading. The quarter comparison, for example, needs the setup treatment and the do-nothing denominator, while the March return value needs the delivered-phone basis. [T15, C-D1, C-D2, C-F15]

Table R35-02. Proposed claim-to-panel evidence path

| Claim | Research working | Model or case authority | Panel destination | Meaning to preserve |
|---|---|---|---|---|
| Recommended March EBITDA | Monthly bridge and option selection | T15 and T16 | Summary KPI and Plan bridge | After the active shift expense. [C-E6H3] |
| Quarter difference | Full-precision month totals | T13 and T15 | Summary annotation | Recommended minus doing nothing, with January setup. [C-F15] |
| Referral contribution | Channel-cost reconciliation | T4 | Economics table | After coupon and channel costs, before company fixed. [C-E3] |
| Delivered volume | Ordered rationing | T22 | Capacity panel and Plan | Demand is not delivery; Superb limited first. [C-E6H4] |
| Battery warning | Tested-batch denominator | T27 | Signals card | Warning at 50%, local boundary about 55%. [T24] |
| April recovery | Incremental ramp accumulation | T28 | Signals comparison and working pointer | Setup deducted; recovery during May under assumptions. [A15] |

A useful check is to read the slide without its spoken explanation. If a reader could reasonably confuse a forecast with an observed result, or a warning with a board limit, the panel needs a short qualifier. That should be solved through precise wording and placement, not by adding a source line too small to carry the meaning. The report supplies the full derivation; the slide carries the decisive definition beside the displayed figure. [C-R4, C-S3]

### Use different analytical forms for different questions

The preserved original already has varied charts and tables. The additive edition should strengthen their interpretation rather than select a new form merely for visual novelty. A cost stack should reconcile to the unit contribution. A waterfall should show an additive bridge in a stated order. A heat map should define its row and column inputs. A scenario panel should distinguish simultaneous changes from isolated sensitivities. The form should make the relevant comparison easier to audit. [T2, T16, T18-T19, T24]

Table R35-03. Exhibit form and verification question

| Form | Proposed analytical form | Decision function | Required annotation | Common error to reject |
|---|---|---|---|---|
| Cost stack with table | Show per-phone margin composition | Explain thin Fair economics | Costs and expected-rate basis | Sum labels that do not match contribution. [T2] |
| Channel bars with table | Compare contribution after marketing | Reveal fee and mix distortion | MegaKart commission included | Dashboard cost mistaken for complete cost. [T4] |
| Ordered demand bridge | Explain lost deliveries | Show Superb then lab rationing | Demand versus delivery labels | Proportional reduction applied in wrong order. [T22] |
| Option scatter and shortlist | Compare feasible and rejected plans | Explain selection objective | Full-precision quarter ranking | Choose by March alone. [T23] |
| Two-input heat map | Show joint local exposure | Separate demand and swap effects | Combined uplift applied once | Multiply combined uplift twice. [T24] |
| Native product mockup | Show evidence hierarchy | Explain actual buyer promise | Refurbished and compatible wording | Badge substituted for unit evidence. [C-E5a, C-E5b] |

### Appendices should answer a specific objection

A defensive appendix is not a storage area for material that would not fit elsewhere. Each panel should resolve a likely challenge to the main argument. A3 is especially important because the recommendation is not the cheapest plan and its quarter comparison with doing nothing is weak. The panel should let a judge see why the chosen objective and constraints still select it. A4 addresses the difference between a model flag and the operational records needed for truthful claims. [T23-T25, C-F16]

Table R35-04. Appendix objection routing

| Challenge | Likely challenge | First appendix panel | Working needed | Main-slide cross-reference |
|---|---|---|---|---|
| Contribution omits returns or commission | A1 economics | Cell costs and channel layer | Rate times cost and actual selling price | Economics pointer. [T2-T5] |
| Another feasible plan is better | A3 Pareto | Growth, March and Q1 comparison | Objective and full-precision ranking | Options pointer. [T23] |
| Extra demand exceeds supply | A3 rationing | Demand, Superb adjustment and final delivery | Calculation order | Plan capacity annotation. [T22] |
| Good replacement cost worsens | A3 heat map | Joint order/swap grid | Local boundaries and held inputs | Signals pointer. [T24] |
| B1 is called compliant too easily | A4 proof matrix | Claim, evidence, owner and stop condition | Exhibit 5 tactic review | Launch proof pointer. [C-F16] |
| April benefit excludes setup | Signals and research working | Ongoing versus incremental after setup | Ramp and payback convention | Explicit April scope label. [T28] |

The title and source footer should carry the same conclusion as the main chart. A panel showing March profitability should not have a title implying full-quarter profitability. A source footer saying case and model cannot support a newly introduced outside statistic. These checks are content controls before visual review. A native chart can still be misleading if the axis, denominator or title changes its meaning. [C-R1, C-R4, C-S3]

### Verification is separate from authorship

The final deck needs numerical, argument and visual review. Writing the correct copy does not establish that the rendered text is unclipped, that every chart remains editable or that a photo's licence and crop are appropriate. Those remain later build checks owned by the coordinator. This blueprint should make them easier by specifying what each panel is supposed to communicate and what source establishes it. It should not report those checks as passed before the artifact exists. [C-S3; operational plan H1-H4]

Table R35-05. Proposed deck acceptance gates

| Gate | Gate | Evidence required | Reject condition | Responsible review |
|---|---|---|---|---|
| Structural | Physical order and slide-count manifest | Wrong main/appendix count | Submission structure review | Case/FAQ reviewer. [C-S1] |
| Numerical | Display-to-frozen-value comparison | Stale value or wrong sign | Full-precision source check | Economics reviewer. [C-R4] |
| Claim | Panel claim-to-evidence mapping | Unproved universal or named comparison | Exhibit 5 review | Claims reviewer. [C-F16] |
| Native construction | Object-level inspection | Flattened analytical chart | Figma object check | Build reviewer. [Operational plan G4] |
| Visual | Full-size screenshot review | Clipping, collision or unreadable addition | Rendered-slide inspection | Visual reviewer. [Operational plan H1] |
| Delivery | Export and page-order inspection | Missing or stale page | Final PDF check | Coordinator. [C-S1-C-S3] |

The credible alternative is to make the deck shorter by removing defensive detail. That would improve apparent simplicity while leaving the team exposed on the exact points judges can rebuild. The better compression is to preserve the action and its key qualification on the main page and route detailed arithmetic to the appendix. The report can carry broader context, but the assessed deck should remain an answer to the case rather than a miniature literature review. [C-R5, C-F4, C-S3]

The proposed manifest should distinguish logical identity from physical position. A claim mapped to the Plan slide remains the same claim if an appendix is inserted before the closing page, while a physical page number can change. The final export must therefore verify both the logical panel and the ordered PDF page. This reduces the chance that a correct appendix pointer sends judges to the wrong working after assembly. The mapping table is a content specification; the coordinator must replace proposed references with the final verified locations. [C-S2, C-S3; operational plan F1, H4]

The most important addition should be chosen by the objection it resolves. A new sensitivity panel is useful when it makes the demand and battery interaction inspectable. Repeating the same rounded KPI in another decorative card adds little defensive value. Conversely, a short qualification beside the original KPI can materially improve accuracy by stating that April profit is before setup or that a battery level is a warning. The team should preserve the original chart forms while making those distinctions explicit. [T24, T27, T28]

A final content review should compare titles, annotations, table labels and speaker notes together. A corrected number in the main chart is insufficient if a stale figure survives in an adjacent explanation. The same applies to the segment tie and the conditional B1 screen. The reviewer should trace each material claim through all its occurrences before declaring the new edition consistent. This is a proposed verification responsibility, separate from the later visual inspection of clipping and overlap. [C-R4, C-R5, T26, C-F16]

Exhibit for the deck: this section defines the proposed physical-to-logical mapping for all fourteen slides. The coordinator's final claim manifest, native object inspection and export QA must establish that the built edition actually follows it. Operational plan, sections F5 and H2 to H4.

The Plan slide contains the sole named moneyshot: +₹19.7 lakh a month against doing nothing. The summary may repeat that figure as a recap. [T15, T16]

## 36. Forty questions the judges could ask, answered

**Answer.** The hardest objections concern the quarter trade-off, the choice of buyer, deferred trade-in funding and the difference between a modeled compliance flag and executed proof. The team should answer from the relevant case rule and reproduce the calculation before discussing interpretation. These responses use the frozen case and model; external context is unnecessary to defend the assessed numbers. [C-R1, C-R5, T13-T29]

### 1. Why recommend a plan that is worse than doing nothing over Q1?

The recommendation is not presented as a Q1 improvement over inaction. Its unrounded quarter EBITDA is −₹42.9269538334 lakh versus −₹42.41085 lakh, a difference of −₹0.5161038334 lakh. January pays the setup before benefits begin. Doing nothing fails the March operating and returns tests, while the recommendation passes the modeled screen subject to claim controls. Our stated selection objective maximizes Q1 EBITDA among feasible plans, not among every possible plan regardless of the board conditions. The team should show both comparisons: the small disadvantage against an infeasible do-nothing baseline and the advantage against the next feasible alternative. Hiding either would make the choice less defensible. [T13, T15, T23, C-F15, C-F16]

### 2. Why family buyers when flagship buyers have better unit economics?

Family buyers lead the team's equal-weight score because the offer addresses their inferred concerns and Good supply is not capped. The score is judgment, not measured segment profitability or conversion. T26 also shows that doubling size or margin weight produces a tie at 27 between family and flagship buyers; we do not claim unique leadership under every weighting. The operational distinction is the Superb cap, which already constrains recommended deliveries. A profitable premium order that cannot be supplied is not equivalent to an available Good order. Family focus is therefore a bounded targeting judgment supported by case needs and headroom, with the flagship alternative treated as credible and validation still proposed. [T10, T26, C-E1C, C-E4b, T22]

### 3. Why defer trade in when it can make March much more profitable?

The attractive combination with B1, B2 and a February shift spends ₹93 lakh of Q1 growth money against the ₹80 lakh limit. That is a feasibility failure even though its March operating result is stronger. A trade-in combination without the shift can fit the budget, but capacity rationing weakens its quarter result. The recommendation is chosen from the feasible set using full-precision Q1 EBITDA. Deferral does not mean C has no value; the April analysis treats it as a separately funded option with setup, ramp and incremental recovery visible. We cannot use later funding to make a Q1 budget violation disappear or quote ongoing April profit without its initial setup effect. [T14, T23, T28, C-T1t]

### 4. What happens if the order uplift is only half as large?

Define the change before answering. Half of the combined 16.64% uplift is 8.32%; halving each individual 8% effect instead gives 1.04 × 1.04 − 1 = 8.16%. Both are below the model's approximately 10.51% combined-uplift EBITDA-zero boundary with the other base inputs held fixed. The appropriate response is to rerun the exact chosen interpretation through demand, Superb rationing, delivered costs and channel fees rather than multiply profit by one half. The case model has nonlinear effects from supply and delivery limits, so proportional profit scaling is wrong. This is a sensitivity, not a claimed observation or a new forecast replacing the printed option effects. [C-E6H2, T17, T24, A16]

### 5. Does A01 understate the cost of Rohan's advertising option?

A01 counts the option's extra advertising once as growth money in the month spent, following the explicit instruction to count each growth item once. It does not remove the existing performance-ad channel spend. Adding the same incremental campaign to that fixed layer and again to growth money would double count it. The team should point to the two ledgers and identify the event each line represents. This assumption affects A alternatives, not the recommended Q1 plan, because A is off. It remains important for fair comparison: we reject the price-led plan on the correctly counted economics, not by imposing an extra cost that the case does not require. [A01, A02, C-E6A, C-E6H3, T14]

### 6. Why does Battery 85 alone not satisfy the claims test?

The battery promise changes the product and warranty but does not by itself create the own-lab reading, report evidence and other controls required by Exhibit 5. A claim must be true for every phone on which it appears, and the battery reading must come from Tikau's lab. B1 supplies the specified report bundle, which is why the model uses its presence as a conditional screening proxy. Even B1 selection is insufficient proof that all controls were executed. The final review still needs refurbished wording, compatible-parts disclosure, truthful comparisons, review and creator controls, completed erasure and acceptable IMEI screening. Profitability alone cannot replace that review. [C-E5a-C-E5f, C-E6B1, C-E6B2, C-F16]

### 7. Why keep ₹22 lakh unused while the company is losing money?

The growth budget is a limit, not a requirement to spend every rupee. The recommended setup and shift ledger totals ₹58 lakh, leaving ₹22 lakh. The option screen evaluates the available additions and their economics; spending the remainder on an unprovided campaign or assumed cost reallocation would leave the case's feasible lever set. Keeping headroom is not modeled as an interest benefit or a cash reserve with a quantified payoff. It simply avoids funding an inferior or infeasible addition. If actual implementation reveals new needs, the board can review them separately, but the submitted plan cannot claim that unmodeled spending preserves the same demand and profit result. [C-B7, C-E6H3, T12-T15, C-F12]

### 8. What if Superb supply is below the stated maximum?

The case supplies a maximum, and the recommended plan uses that limit after demand uplift. A lower availability scenario should first reduce Superb deliveries proportionally across channels, then apply the total-lab rule if necessary. It should not assume that every lost Superb order automatically becomes a Good order, because no such substitution rate is supplied. The financial effect depends on the affected channel and associated commission and costs, so it requires cell-level rebuilding. This exposure reinforces the case for avoiding exclusive dependence on flagship demand. It does not establish a new lower supply forecast; it identifies a material assumption to monitor through actual accepted stock and sourcing records. [C-E4b, C-E6H4, T22, A04]

### 9. How exactly is the 6.0% return test computed?

Use returned phones divided by delivered phones, weighted by each delivered channel-grade cell. At baseline, expected returns total 582.4 across 7,200 deliveries, giving 8.0888889%. Under the recommendation, B1 and B2 multiply each channel's own rate and the delivered mix reflects Superb rationing, producing approximately 4.55%, displayed as 4.5%. The numerator can be fractional because it is an expected count. The 6.0% threshold is the board limit, not an EBITDA-zero label or a share of dissatisfied customers. For weekly operations, T27 proposes fully matured seven-day cohorts so recent deliveries do not dilute returns that have had time to occur. [C-D2, C-T3t, T5, T15, T27]

### 10. Why does MegaKart earn only about ₹92 per recommended order?

The channel contribution is calculated after its commission and expected product costs. B2 raises Superb and Good prices, but MegaKart's percentage commission also rises on those phones. Its delivered mix includes thin-margin Fair units, and the report and battery costs still apply. T21 gives approximately ₹2.144 lakh of contribution after marketing across approximately 2,324.872 delivered phones; dividing unrounded contribution in rupees by delivered orders gives about ₹92.22. This is before the separate company fixed-cost layer. The growth dashboard's zero acquisition-spend label is not zero total channel cost, so the team should show the commission and mix rather than rank channels from that dashboard alone. [C-E3N2, T11, T21]

Table R36-01. Hard-objection navigation and rebuild route

| Objection | First evidence | Rebuild step | Qualification to state |
|---|---|---|---|
| Quarter disadvantage | T15 | Sum full-precision monthly EBITDA | Inaction is infeasible under board tests. [T13] |
| Buyer selection | T26 | Compare weights and capacity | Weighted alternatives can tie. [C-E4b] |
| Trade-in deferral | T23 | Check growth budget before ranking | April requires fresh funding. [T28] |
| Compliance proxy | Exhibit 5 | Inspect each claim and tactic | B1 selection is conditional evidence. [C-F16] |

### 11. Rebuild the contribution of a Superb phone.

Start with its ₹24,000 selling price and deduct ₹17,800 wholesale purchase, ₹800 testing and repair, ₹600 packing and payment, expected warranty expense of 3% × ₹2,500 and expected return expense of 4% × ₹1,800. The result is ₹4,653 before marketing and marketplace commission. The rate-times-cost terms are ₹75 and ₹72, not the full event cost on every phone. This calculation uses the website-rate regime; store and creator returns produce different contributions. A team member should identify the return regime before quoting the figure and explain that contribution is not company EBITDA. Good and Fair follow the same structure with their own grade inputs. [C-E2, C-E2N1-C-E2N3, T2, T3]

### 12. Why not reverse the selling price when a phone is returned?

The case explicitly says the sale is recovered on resale and specifies a ₹1,800 cost for the returned share. The model therefore deducts the expected return expense without subtracting the entire selling price again. A real business might need a more detailed revenue-recognition and working-capital treatment, but that is outside this closed-data exercise. Using a different convention here would contradict the supplied instruction and materially distort thin-margin grades. The correct oral answer identifies the event cost, the probability and the case's resale treatment. It should also distinguish returns from warranty claims, which have their own rates and ₹2,500 event cost. [C-E2N1, C-E2N2, C-D1, T2]

### 13. Where do the ₹58 lakh fixed costs sit relative to marketing?

The ₹58 lakh company layer covers the stated lab staff, rent, technology and head office. It is separate from the existing channel fixed spend and the commission and coupon items deducted before contribution after marketing. At baseline, channel contributions sum to ₹43.86305 lakh; deducting the company layer gives −₹14.13695 lakh EBITDA. Under the active recommendation, the shift expense is also deducted once according to the growth-money convention. A common error is either to treat channel contribution as EBITDA or to deduct a fixed item twice because it appears in two descriptive places. The rebuild should name the layer before subtracting it. [C-CO4, C-E3, C-E6H3, T4, T5, T15]

### 14. Why does the monthly model not exactly equal the annual history?

The case's historical figures are rounded and cover a different scope from the supplied average operating month. Annualizing the exhibit-built monthly EBITDA gives about −₹169.6 lakh, close to the stated −₹170 lakh. The model preserves both facts rather than replacing the monthly engine with annual loss divided by months. T29 quantifies the small difference from that replacement and rejects it as the operating baseline. The same discipline applies to revenue: explain the gross selling-price interpretation and period rather than force equality by changing a case input. Reconciliation establishes that the figures are broadly consistent, not that different rounded historical measures must match exactly. [C-CO3, A17, A18, T5, T29]

### 15. Why not stop the paid-ad channel immediately if it loses contribution?

The diagnosis identifies its weak contribution after existing spend, but Exhibit 6 does not provide a lever to remove that spend while retaining its orders. The model holds channel fixed spend unchanged under A02. Cutting ads in the forecast would therefore require a new demand and cost assumption, rather than simply adding the current loss back to EBITDA. The launch can emphasize the stronger explanatory role of stores and referrals without claiming a budget reallocation that the case does not authorize. This is a distinction between channel-role design and financial-model inputs. A real later decision to change spend would need its own measured consequences and rebuilt economics. [C-E3, C-F12, A02, T4, T21]

### 16. Why does January become more negative when the launch starts in February?

Setup is paid in January, while customer-facing prices, costs, orders and return rates remain at baseline until February. The recommendation pays ₹15 lakh for B1 and ₹25 lakh for B2, so January EBITDA is baseline −₹14.13695 lakh minus ₹40 lakh, or −₹54.13695 lakh. There is no January uplift to offset that payment under the timing rule. This explains much of the quarter trade-off and is why quoting March alone would be incomplete. The growth ledger records the setup once; it must not be charged again when the report and warranty become active. Per-phone costs begin with the active offer and remain operating costs. [C-E6H1, C-E6H3, T15]

### 17. Why are recommended demand and delivered phones different?

Eligible base demand is multiplied by 1.1664, giving 8,398.08 requested phones. Superb demand becomes 2,070.36 against 2,000 available, so the first rationing step removes 70.36 Superb orders proportionally across channels. The remaining 8,327.72 phones fit within the shift's 9,000 sellable capacity. The displayed delivery count is therefore 8,328. A model that uses all requested orders for revenue would overstate sales, while one that applies total-lab rationing before Superb would alter the channel-grade allocation. The case treats lost orders as lost rather than deferred, so the financial calculation must follow delivered cells throughout. [C-E6H2, C-E6H4, T22]

### 18. Why is the return reduction 44% rather than 50% or 56%?

B1 leaves 70% of the former return rate, and B2 leaves 80%. The combining rule says multiply, so 0.70 × 0.80 = 0.56 remains. The reduction is 1 − 0.56 = 0.44, or 44%. Adding the reductions would incorrectly leave 50%, while calling 0.56 a 56% reduction confuses remaining share with reduction. Apply the combined factor to each channel's own grade rate, not to a single unweighted company average. This matters both for cost and the board's weighted-return result. T29 shows the favorable overstatement produced by the additive mistake; it is rejected rather than offered as another plan. [C-E6H2, A05, A19, T29]

### 19. Why does the model ration Superb before total lab capacity?

That is the explicit order in the case. First fit Superb demand to available Superb stock using the same percentage reduction across channels. Then compare all remaining orders with sellable lab capacity and apply any second proportional reduction. The two constraints represent different shortages: inventory of one grade and total operating output. Reversing them can change delivered grade mix and contribution, so an apparently small procedural choice becomes a financial error. The team should demonstrate the sequence on T22 rather than use a single overall fill rate. This also prevents an unsupported assumption that unused total capacity automatically creates more Superb phones. [C-E4b, C-E6H4, T22]

### 20. Are the cover and thank-you included in the main-slide limit?

The final physical structure follows the FAQ allowance: cover, eight main slides, four appendices and thank you. The executive summary is the first substantive slide after the cover. The case-format decision table remains in the main slides rather than being displaced into an appendix. The team should verify the actual export order and page count, not rely only on logical names in a script. A correct content plan does not prove that the final PDF contains the right pages. Section 35 supplies the proposed mapping, while the coordinator's export QA must establish the built artifact's compliance. [C-S1, C-S2, case FAQ; operational plan F5, H4]

Table R36-02. Calculation trap register

| Trap | Correct distinction | Evidence to show | Consequence of error |
|---|---|---|---|
| Return expense treated as full reversal | Expected event cost versus revenue | Unit formula | Understates grade contribution. [T2] |
| January benefits activated early | Payment timing versus live operations | Monthly table | Overstates quarter result. [T15] |
| Demand treated as delivery | Requests versus fulfilled cells | Rationing bridge | Overstates volume and cost basis. [T22] |
| Return reductions added | Remaining factors multiply | T29 alternative | Overstates improvement. [C-E6H2] |

### 21. Why keep B3 off if it is described as a trust campaign?

The word trust does not establish incremental profit. B3 has its own eligibility, channel demand effects and monthly growth expense, so it must be evaluated through the same delivered-volume and contribution calculation as other levers. The audited alternatives show that adding it does not improve the selected feasible quarter under our objective. Its message could also duplicate proof already funded through B1 and B2 without creating proportional deliverable stock. We therefore distinguish the content needed to explain the promise from the paid B3 option. The team cannot assume a free version of the option's demand effect while omitting its stated cost, or add extra campaign spending outside the screened plan. [C-E6B3, T12-T14, T20]

### 22. Why not target value seekers when Good and Fair supply is unrestricted?

Unrestricted grade supply is only one part of the choice. Fair has a much thinner contribution cushion, and the funded battery and report promise leaves it especially exposed to channel costs. The case also places a new budget phone at the competing entry price. Value seekers remain a legitimate audience, but the recommendation must prioritize the buyer whose concern and grade economics fit the offer. T26's judgment scores make that logic visible without pretending to measure segment demand response. A larger number of low-margin inquiries can consume scarce lab output without funding the same promise. The answer should therefore connect need, contribution and deliverable capacity rather than cite segment size alone. [C-K3, C-E4a, T11, T26]

### 23. Why can warranty claims change while returns also fall?

They are separate outcomes with separate expected expenses. B2 changes the grade-specific warranty claim rates and extends the term, while B1 and B2 reduce return rates according to the combining rule. The case provides those effects directly, so the model need not infer one from the other. A returned phone incurs the stated return cost, and a warranty claim incurs its separate event cost. The team should not add the rates into a single dissatisfied-customer share because the case does not describe their overlap or unique people. For real operating review, each event needs its own definition and record. In the submitted arithmetic, the supplied rates remain authoritative. [C-E2N1, C-E2N2, C-E6B1, C-E6B2]

### 24. Is 50% Good battery replacement the break-even point?

No. It is a proposed warning chosen before the local financial boundary. The exact modeled Good replacement share for zero March EBITDA is approximately 55.0639%, holding all other base inputs fixed. The planned share is 40%. At 50%, management should inspect tested batches, sourcing and measurement before further exposure, but the label must remain warning. The two-input grid also shows why the local boundary is not a guarantee when demand changes at the same time. A battery-share result without its tested-batch denominator can be misleading, particularly if the lot mix changes. The correct answer separates plan, warning, local boundary and combined scenario. [C-E6B2, T24, T27]

### 25. Can Tikau advertise that it remains cheaper than PhoneBazaar?

The case's relative-price arithmetic can inform internal strategy, but Exhibit 5 requires showable data for a named seller comparison and says Tikau has none. The internal index calculation does not establish equivalent model, storage, condition, warranty and delivery terms. We therefore do not turn the case corridor into a public comparative slogan. Tikau can explain its own actual price, report and remedy. If it later wants a named comparison, it would need evidence that supports the specific claim at the relevant time. That later evidence is not invented here, and the financial recommendation does not depend on obtaining permission to make that advertisement. [C-K1, C-E5c, C-E6B2]

### 26. Is the Tikau Report independent certification?

It is an own-lab report specified by B1, with real photographs, a Tikau battery reading, government-registry IMEI check and data-wipe certificate. The case does not supply a third-party accreditor or certification contract. Calling it independent would therefore overstate the source of assurance. Its credibility should come from accurate unit-linked evidence and clear responsibility for the promise. The model's compliance proxy depends on B1 being selected, but executed controls remain a separate assessment. The team should be explicit about who measured the phone and what each field establishes, rather than use a broad badge to imply manufacturer approval or external laboratory accreditation. [C-E6B1, C-E5a, C-F16]

### 27. Why refuse genuine-parts wording if the replacement works well?

Origin and function are different claims. The case says Tikau uses compatible batteries, not batteries made by the phone's brand, and permits genuine-parts wording only when every replaced part is brand-made. A compatible battery can support the funded health promise if the required reading substantiates it, while still making a blanket genuine-parts claim false. The team should disclose the compatible replacement and preserve its actual installation and measurement record. Adding a small disclaimer to a contradictory headline would not satisfy the case's every-phone truth requirement. The refusal is therefore about the precise claim, not an invented conclusion that compatible parts are necessarily defective. [C-E5a, C-E5b, C-E6B2]

### 28. Can Tikau reward reviews and keep only positive ones?

The case permits a disclosed reward only if it is given whether the review is good or bad, and reviews must come from verified buyers. The proposed workflow therefore starts with purchase eligibility and a sentiment-independent invitation and reward record. Selecting only positive responses would defeat that rule even if the reward were disclosed. Moderation can address authenticity and relevance under a defined policy, but it cannot become an undisclosed positivity filter. The team has not run this process or produced any review results. Its role in the launch is to establish truthful feedback collection, not to promise a rating increase or create invented customer quotations for the deck. [C-E5e, C-R3]

### 29. What should happen when a creator hides the ad label?

The proposed campaign owner should pause the affected asset, inspect the actual published format and require visible advertisement disclosure before restarting it. Retaining an approved brief or a contract clause does not prove that the audience saw the label. The product claims also require a separate check: an ad label cannot substantiate a battery or parts statement. The case's paid-content rule is sufficient to make this decision without importing an outside campaign-performance assumption. The report describes a proposed control, not an observed incident or a claim that Tikau already has a compliant creator network. The launch budget and modeled effects remain those supplied by the case. [C-E5a, C-E5e, C-E6B3]

### 30. Does a clean IMEI check prove the phone is safe to sell?

It addresses only one required part of sale readiness. The case separately requires completed data wiping and prohibits sale of reported lost or stolen devices. A phone also needs the claimed condition, battery evidence and usable transfer state; the report cannot substitute one check for another. The proposed control should retain the lookup against the actual unit and keep erasure completion and approval as distinct records. The team must avoid a universal safety guarantee, because the case supplies neither a comprehensive certification standard nor evidence that every possible future issue is excluded. The release decision follows the specified checks and supported claims, with unresolved units held. [C-E5a, C-E5b, C-E5f, C-E6B1]

Table R36-03. Claims defense and evidence route

| Claim | Required proof | Recommended answer boundary | Escalation |
|---|---|---|---|
| Independent certification | Actual independent scheme | B1 is an own-lab report | Correct the phrase. [C-E6B1] |
| Genuine parts | Every replaced part brand-made | Compatible batteries do not qualify | Remove blanket claim. [C-E5b] |
| Best or cheaper named price | Showable comparison data | Case says data are absent | Use own-offer explanation. [C-E5c] |
| Verified positive feedback | Buyer and neutral reward record | Negative sentiment remains eligible | Audit collection process. [C-E5e] |

### 31. Why include external research if the competition forbids outside inputs?

The research separates context from the assessed analysis. The case explicitly says outside market numbers earn no credit and must not enter calculations. Sections 12 to 17 explain terminology, plausible mechanisms and evidence limits, while the model and slide statistics remain case-only. A judge can reproduce the recommendation without any external source. We do not use a market growth rate to inflate orders, a vendor policy to infer conversion or an academic coefficient to replace Exhibit 6. If an outside fact conflicts with the case, the case still governs the solution and the conflict stays in the research limitations. This makes the supporting report broader without changing the exercise's data boundary. [C-R1, C-F4]

### 32. Do the survey percentages prove the option uplifts?

They do not. The same respondents could select multiple reasons or offers, so the percentages cannot be summed into a customer share. The survey records expressed responses, not randomized implemented outcomes. The battery, warranty and report figures help prioritize concerns, while the numerical order and return effects come separately from Exhibit 6. The 5% lower-price survey offer also differs from A's 3% Fair-price reduction. Treating those as the same treatment would misread the evidence. The recommendation can use the survey for customer logic and the supplied option effects for calculation, provided the team does not describe that combination as newly measured causal validation. [C-E1A, C-E1B, C-E6A, C-E6B1, C-E6B2]

### 33. Are about 351 Good phones proven to have a false listing each month?

That is an indicative extrapolation, not a census. The observed spot check found 22 of 200 below the printed battery threshold. A14 applies the resulting 11% to the baseline Good volume to show possible scale, giving 350.9. The sample's representativeness and the wider stock's measurement distribution are not supplied. The model does not invent a remediation expense or downgrade rate from that estimate. The operational conclusion is to replace unsupported trader-tool reliance with the required own-lab evidence and investigate actual units. The team should preserve the observed sample finding while qualifying the monthly scale-up whenever it appears in research or the deck. [C-E4c, A14, T8, T29]

### 34. Does adding a third shift prove the lab can issue reliable reports?

The case supplies a sellable-capacity increment, not a time study of independent battery testing, photography, wipe validation or exception review. The model accepts the Exhibit 6 bundle's stated operating feasibility and uses the shift increment once. It cannot prove measurement quality or staffing readiness. The proposed implementation therefore needs a readiness gate and unit-record checks, with any additional real resource requirement escalated separately. We should not invent extra productivity, reduce the stated capacity through an arbitrary test allowance or call the own-lab report third-party certification. The distinction keeps the submitted arithmetic faithful while acknowledging a material execution dependency. [C-E6SH, C-E6B1, C-E5a, C-R3]

### 35. Have the proposed interviews or page tests been conducted?

No new primary research has been conducted for this report. Section 33 proposes the interview allocation, recruitment, prompts, outcomes and decision rules, and distinguishes the two page-test purposes. The persona is an inference from the case rather than a named interviewed customer. There are no new quotations, willingness-to-pay estimates, conversion results or statistically significant findings to report. This limitation does not invalidate the exercise's supplied effects, which are intended inputs to the case model. It means the team must describe future validation honestly and avoid presenting a polished product mockup or a proposed test protocol as evidence of observed buyer behavior. [C-R3, C-E1C, section 33]

### 36. Is April's ₹21.4 lakh profit available after paying for trade in?

That figure is ongoing company EBITDA before the ₹35 lakh C setup payment. Under the stated April assumption, subtracting setup gives −₹13.5709907488 lakh for April. To assess the new investment, compare ongoing EBITDA with the keep-plan baseline: ₹21.4290092512 lakh minus ₹5.6049980833 lakh gives ₹15.8240111679 lakh of incremental ongoing benefit. After setup, the first month's cumulative incremental position is −₹19.1759888321 lakh. Those are different measures and should be labelled separately. April also requires fresh growth funding and a restarted arrival ramp; the unused Q1 budget does not silently authorize or finance the full setup. [A15, T28]

### 37. Why does the payback change from 2.2 months to about 1.75 months?

The earlier approximation divides ₹35 lakh by the first month's incremental ongoing benefit and holds that benefit constant. T28 instead accumulates the restarted ramp's incremental benefit: April leaves ₹19.1759888321 lakh unrecovered, and May contributes ₹25.6041423679 lakh incrementally. Recovery occurs during May; even within-month accrual gives 1 + 19.1759888321/25.6041423679 = approximately 1.74894 months. This is incremental setup recovery relative to keeping the plan, not setup divided by total company EBITDA. The interpolation is a convention, not a cash-flow promise. Different arrivals, costs or funding could change the result, so the ramp and baseline must be stated with the figure. [T28, A15]

### 38. Are the segment scores objective evidence that family buyers win?

They are the team's structured judgment on six criteria, informed by case size, economics, supply and concerns. The calculation is reproducible, but reproducibility does not make the underlying judgments measured facts. Equal weights give family buyers the highest total; doubling size or margin weight creates a tie with flagship buyers. That sensitivity should be disclosed rather than hidden behind a colored heat map. The final choice also considers the operating constraint and fit of the funded promise. Proposed interviews can challenge those interpretations, but their existence does not validate the scores before research occurs. The team should defend each score's rationale and remain open about the lack of segment-specific demand elasticity. [T10, T26, C-E1C, C-E4b]

### 39. What evidence would make you change the recommendation?

A changed case input, an independently demonstrated calculation error or a properly specified alternative that passes all tests and improves the stated objective would require revision. During real execution, failed readiness, unsupported claims, materially weaker demand or adverse battery and claim costs would require an updated combined forecast and operating response. The current warnings are proposed early signals, not automatic instructions to discard the plan from one noisy observation. Any change should preserve the data boundary and recompute delivered cells, fees and growth timing. The team should distinguish a new fact from a preference for a different objective, since either can change a decision but they require different explanations to the board. [C-R2, C-R3, T23-T27]

### 40. How do you know the model is independently checked rather than self-confirming?

The independent auditor rebuilt baseline and plan calculations using separate exhibit constants and channel-grade records before comparing them with the inherited engine. It did not rely only on calling the original functions. The audit compares all valid plans and key outputs, while the extension checks additional tables and boundaries. The original model hash remains 9b3628d94d; the input-freeze serialization refresh changes no parsed values. These checks establish numerical agreement under stated assumptions, not observed commercial success or executed compliance. A team member should still be able to rebuild the central figures from the case and explain the limitations, rather than cite a passing script as a substitute for understanding. [C-R5; independent audit, input freeze, T22-T29]

Table R36-04. Interpretation challenges and response discipline

| Challenge | Challenge type | First response | Evidence route | Claim avoided |
|---|---|---|---|---|
| Survey causality | Separate response from implemented effect | Exhibit 1 versus Exhibit 6 | Customer and model sections | Survey proves uplift. [C-E1B] |
| Sample extrapolation | State sample and assumption | A14 and T29 | Battery diagnostic | Census-level finding. [C-E4c] |
| Post-quarter recovery | Separate ongoing, setup and incremental | T28 | April working | Total EBITDA is investment payback. [A15] |
| Numerical assurance | Explain independent reconstruction | Audit and rebuild card | Cell formulas | Passing model proves execution. [C-F16] |

The oral defense should remain an extension of the research. When a question changes an assumption, the speaker should identify the changed input and show the affected calculation path. When evidence is absent, the answer should preserve the uncertainty and state the proposed validation. A confident but invented number would weaken the recommendation more than a clear boundary. The conclusion stays the same as the audited answer, with the quarter disadvantage, joint bear case and conditional claims controls visible. [C-R3, C-R5, T15, T19, C-F16]

Exhibit for the deck: A1 to A4 provide the first working routes for these questions. The team should practice navigating to the relevant panel and rebuilding the result without adding outside assumptions. [C-S3, C-R5]

## 37. A talk track for three speakers and a rebuild drill for every member

**Answer.** The proposed speaking plan divides the story while keeping numerical responsibility shared. Harsh, Gursimran and Dayita should each be able to rebuild the core economics, explain the quarter trade-off and identify the source behind any displayed claim. A passing script, a polished slide or another speaker's expertise cannot replace that understanding during the judge rebuild. [C-R5, T2-T29]

### Divide the story without dividing ownership of the answer

Harsh can open with the recommendation, the baseline economics and the reason contribution matters more than the growth dashboard. Gursimran can explain the trust diagnosis, inferred family-buyer choice and symmetric option screen. Dayita can close with timing, funded claims, weekly controls and the post-March option. This is a proposed allocation rather than a confirmed presentation schedule. Each speaker should know the opening and closing sentence of the adjacent block so transitions preserve the argument instead of restarting it. [C-Q1-C-Q5; proposed rehearsal plan]

Table R37-01. Proposed speaker sequence and handoff

| Speaker | Main responsibility | Finding to land | Handoff dependency |
|---|---|---|---|
| Harsh | Summary and Economics | The selected plan funds a specific promise within the board constraints | Pass the unresolved buyer concern to the diagnostic block. [T2-T5, T15] |
| Gursimran | Trust, Customer and Options | Customer fit and supply make the choice narrower than a generic trust campaign | Pass the selected levers and limitations to implementation. [C-E1A-C-E1C, T23, T26] |
| Dayita | Plan, Launch and Signals | Timing, proof and intervention rules make the recommendation conditional and reviewable | Close without adding new evidence. [T15, T27-T28, C-F16] |
| Any speaker | Appendix navigation | Working is available for every decision-driving number | Identify the formula before the rounded result. [C-S3, C-R5] |

The narrative should not open with a long market summary. The case asks for a decision, so the first block states the chosen levers and the qualification that quarter EBITDA remains slightly worse than doing nothing. That admission prevents a later question from appearing to reveal a hidden weakness. The second block explains why the promise and buyer choice fit the supplied evidence, without claiming the persona was interviewed. The final block shows who must create and check the evidence before the promise reaches a customer. [T15, C-E1C, C-E5a-C-E5f]

A speaker should use the appendix as working rather than as a place to hide the answer. When asked about the commission or battery boundary, state the conclusion briefly, identify the relevant panel and then rebuild. If the panel does not support the exact question, say which assumption has changed. This is especially important for hypotheticals about supply, channel reallocation and half-strength demand, where a familiar rounded number may no longer apply. The team should practice changing the calculation path instead of defending an obsolete result. [C-R3, C-R5, T22-T29]

### Rebuild from the transaction outward

The rehearsal begins in rupees and at the channel-grade cell. A member should identify selling price, acquisition, testing, packing/payment and expected event costs before using a contribution label. The unit formula can then be aggregated, with channel commission, fixed spend and coupons deducted in their correct layer. Only after channel contributions are summed should company fixed costs and the relevant growth payment be subtracted. This order prevents the most common double counts and denominator substitutions. [C-E2, C-E3, C-D1, C-E6H3]

Table R37-02. Every-member drill and the error it must expose

| Drill | Required reconstruction | Check against source | Failure to correct before presenting |
|---|---|---|---|
| Superb contribution | Price minus costs and two expected event expenses | ₹4,653 under website return regime | Full event cost charged to every phone. [T2] |
| Baseline EBITDA | Channel contributions minus company fixed | −₹14.13695 lakh before display rounding | Contribution confused with EBITDA. [T4-T5] |
| Weighted returns | Expected returned cells divided by delivered cells | 582.4 divided by 7,200 | Unweighted average of grade rates. [T5] |
| Recommended March | Rebuilt delivered economics minus fixed and shift | +₹5.6049980833 lakh | Shift deducted twice or missed. [T15] |
| Growth money | Setup plus active shift months | ₹58 lakh | Per-phone operating costs added to budget ledger. [C-E6H3] |
| Quarter comparison | Sum both plans before subtraction | −₹0.5161038334 lakh versus inaction | Rounded monthly values used as exact inputs. [T13, T15] |

For the Superb drill, the member should say why expected warranty is ₹75 and expected returns are ₹72. For the baseline drill, the member should reconstruct at least one channel from its mix rather than memorize only the company total. Performance ads provide a useful check: 520 Superb, 1,040 Good and 1,040 Fair contribute ₹5,789,160 before the ₹6,000,000 channel spend, leaving −₹210,840. The coordinator's corrected rebuild card and the frozen table agree on that value. A verbal slip between those figures should be corrected immediately rather than allowed to propagate into the company bridge. [C-E3, T2, T4]

For weighted returns, use the expected counts by channel and explain why they can be fractional. The denominator is delivered phones rather than visitors, orders requested or unique people. For March, demonstrate the two multipliers and ordered rationing before calculating revenue. The remaining total after Superb rationing is not an arbitrary adjusted forecast; it follows the explicit supply rule. The member should be able to explain why spare total capacity does not restore lost Superb orders. [C-D2, C-E6H2, C-E6H4, T22]

### Practice errors deliberately

A useful rehearsal includes a reviewer who inserts a plausible wrong step. The speaker must identify its source conflict and correct the affected result. This is more demanding than repeating a memorized formula because it tests whether the member understands the cost layer and timing. The reviewer should avoid turning the exercise into a guessing game about facts absent from the case. Missing information should lead to an explicit assumption or a statement that the result cannot be computed from the supplied inputs. [C-R2, C-R3, C-R5]

Table R37-03. Proposed deliberate-error rehearsal

| Wrong step | Why it is plausible | Correct response | Working to inspect |
|---|---|---|---|
| Add return reductions | Percentages appear additive | Multiply remaining factors | State 56% remains and 44% falls. [C-E6H2] |
| Freeze MegaKart commission | Fee is described separately from price | Recompute on raised price | Inspect the affected Superb/Good cells. [C-E3N2] |
| Start benefits in January | Setup paid then | Keep January operations unchanged | Separate payment from activation. [C-E6H1] |
| Use 50% as Good break-even | Warning is a prominent round value | Distinguish warning and local zero | Show T24/T27 labels. [T24, T27] |
| Divide setup by total April EBITDA | Total profit is visible | Use incremental benefit and ramp | Rebuild cumulative recovery. [T28] |
| Claim family wins every weight | Equal-weight lead is memorable | Disclose weighted ties | Inspect T26 totals. [T26] |

The review should record whether the member corrected the concept, the arithmetic and the label. Correct arithmetic with the wrong denominator remains a failure. Correcting the number but continuing to call an own-lab report independent certification also remains a failure. The goal is a defensible explanation that another person can follow, with every qualification retained. A team member should be willing to pause and rebuild rather than improvise an answer that sounds plausible. [C-R5, C-E6B1, C-F16]

Table R37-04. Proposed rehearsal feedback record

| Observation | Meaning | Required follow-up | Closure evidence |
|---|---|---|---|
| Formula correct, unit wrong | Knowledge not yet presentation-ready | Repeat in rupees and lakh | Unit-labelled reconstruction. [C-R4] |
| Rounded result correct, working missing | Memorization risk | Rebuild from exhibits | Traceable intermediate steps. [C-S3] |
| Source identified, scope overstated | Semantic risk | Restate claim with its condition | Corrected spoken explanation. [C-E5a] |
| Assumption changed silently | Hypothetical not controlled | Name change and rerun path | Comparison with held inputs stated. [T29] |
| Missing fact invented | Evidence integrity failure | Remove unsupported claim | Honest boundary or labelled assumption. [C-R3] |

### Keep timing and growth money visible

The quarter ledger is short enough to rebuild without software: B1 and B2 setup in January, then the shift in each active month. The operating report and battery costs are already in delivered contribution. The member should explain the unused budget without claiming it has already been allocated to April. The quarter comparison then sums the exact monthly outcomes, not the rounded labels on a line chart. This connects the board's funding limit to the recommendation's actual economic trade-off. [C-E6H3, T15, A15]

Table R37-05. Rebuild route by judge emphasis

| Emphasis | Start with | Then show | Qualification |
|---|---|---|---|
| Unit economics | Grade cost formula | Channel-specific rate adjustment | Contribution precedes marketing. [T2-T3] |
| Cash discipline in case convention | Growth ledger | Monthly EBITDA timing | Growth spend counted once. [T15] |
| Feasible-plan selection | Board tests | Full-precision Q1 ranking | Objective is team choice. [T23] |
| Operating resilience | Defined metric | Warning versus boundary | One-input root is local. [T24, T27] |
| Claim truthfulness | Exact wording | Unit evidence and stop condition | Model flag is not execution. [C-F16] |
| April investment | Keep-plan baseline | Incremental ramp recovery | New funding and restarted ramp assumed. [T28] |

The proposed speaking plan should allow a reviewer to interrupt at any point. If only one member can explain supply rationing, the answer has not been shared sufficiently. Each person should practice the other blocks and the appendix route, including the uncomfortable quarter comparison and joint bear result. This does not require every speaker to recite every table. It requires them to know how the result is built, where to find the working and which uncertainty prevents a stronger claim. [C-R5, T19, T22]

### End with established findings

The closing statement should repeat the selected levers, target and timing, then retain the cost and execution conditions already established. It should not introduce a new market fact, a partnership or an unperformed test result. The team can explain that the submitted deck is supported by research and a rebuildable model only after those files actually exist and have passed the coordinator's final checks. Writing this section does not certify the eventual native deck or PDF. [C-R1, C-R5, C-S1-C-S3]

Table R37-06. Proposed final speaking and artifact gate

| Item | Evidence to check | Spoken claim allowed | Claim withheld until verified |
|---|---|---|---|
| Model version | Frozen hash and checks | Results under stated case assumptions | Commercial outcome guarantee. [T15, input freeze] |
| Research | Complete checked manuscript | Supporting working is available | Undelivered or unreviewed report claim. [Operational plan E5] |
| Native deck | Object and visual QA | Editable analysis after inspection | Completed native build before verification. [Operational plan G4] |
| Export | Correct final PDF and order | Submission artifact ready after QA | Competition submission already made. [C-S1] |
| Team understanding | Every-member rebuild | Each member can explain the figures | Understanding inferred from a script pass. [C-R5] |

The limitation of rehearsal is that it cannot prove the underlying assumptions will hold in operation. It can reveal calculation, interpretation and communication failures before presentation. The final defense should therefore be precise rather than absolute: this is the best screened feasible plan under the team's stated objective and the supplied case effects, with Q1 sacrifice, joint downside and evidence requirements disclosed. That conclusion adds no new claim and gives the board a clear basis for approval and later review. [T23, T19, C-F16]

A useful final rehearsal begins from a blank sheet with no slide visible. The speaker first identifies the decision being rebuilt, writes its denominator and cost layer, and then locates the relevant exhibit. Only after the arithmetic is complete should the speaker compare it with the displayed answer. This sequence makes a memorized rounded label less likely to conceal a conceptual error. Another member should explain the same calculation in different words, checking that the underlying meaning survives the change in phrasing. [C-R5, C-S3]

The team should also practice an honest boundary statement for missing information. If a judge asks for a measured report-testing time, a real customer conversion result or a verified service outcome, the case does not provide it. The member should identify the proposed validation or readiness check and explain that the audited result uses the supplied effects. Giving that answer clearly preserves the evidence standard without abandoning the recommendation or inventing certainty. [C-R3, C-E6B1, C-E6SH]

The rehearsal record should note unresolved disagreements and the evidence needed to settle them. A member should correct a meaningful error openly, then verify the affected downstream figures before returning to the prepared presentation. [C-R5]

Exhibit for the deck: the thank-you slide retains the existing synthesis and team information. Speaker notes and rebuild drills support all main slides and A1-A4 without creating new assessed statistics. [C-R5, C-F4]



## Appendix A: verified bibliography

# Verified source register

Context only. Access dates refer to actual full-text inspections. Excluded statuses remain in the raw evidence register.

|ID|Publisher and source|Published|Accessed|Type|Evidence IDs|
|---|---|---|---|---|---|
|S001|[Mathur, Narayanan and Chetty: Endorsements on Social Media: An Empirical Study of Affiliate Marketing Disclosures on YouTube and Pinterest](https://arxiv.org/html/1809.00620)|2018-10-06|2026-10-28|Primary|F22, F23, F24, F25, H07|
|S002|[Aradhna Krishna and Rohini Ahluwalia: Language Choice in Advertising to Bilinguals: Asymmetric Effects for Multinationals versus Local Firms](https://assets.csom.umn.edu/assets/108422.pdf)|2008-08-27|2026-10-28|Primary|H08, I01, I02, I03, I04, I05|
|S003|[Department of Consumer Affairs: Consumer Protection (E-Commerce) (Amendment) Rules, 2026, G.S.R. 789(E)](https://consumeraffairs.gov.in/public/upload/admin/cmsfiles/whatsnews/E_Commerce_Amendment_Rules_2026_2026-09-11_18-12-39.pdf)|2026-09-09|2026-10-28|Primary|C16, C17, C18, C19|
|S004|[CCPA: Guidelines for Prevention of Misleading Advertisements and Endorsements for Misleading Advertisements, 2022](https://consumeraffairs.gov.in/public/upload/files/CCPA_Notification_1732707665.pdf)|2022-06-09|2026-10-28|Primary|C06, C07, C08, C09, C10|
|S005|[Parliament of India / Department of Consumer Affairs: Consumer Protection Act, 2019](https://consumeraffairs.gov.in/public/upload/files/CP%20Act%202019_1732700731.pdf)|2019-08-09|2026-10-28|Primary|C20, C21|
|S006|[Department of Consumer Affairs: Consumer Protection (E-Commerce) Rules, 2020](https://consumeraffairs.gov.in/public/upload/files/E%20commerce%20rules_1732703966.pdf)|2020-07-23|2026-10-28|Primary|C11, C12, C13, C14, C15|
|S007|[CCPA: Guidelines for Prevention and Regulation of Dark Patterns, 2023](https://consumeraffairs.gov.in/public/upload/files/The%20Guidelines%20for%20Prevention%20and%20Regulation%20of%20Dark%20Patterns,%202023_1732707717.pdf)|2023-11-30|2026-10-28|Primary|C01, C02, C03, C04, C05|
|S008|[Counterpoint Research: Apple Reaches New High in Global Refurbished Market in 2024, But Supply Remains a Challenge](https://counterpointresearch.com/en/insights/apple-reaches-new-high-in-global-refurbished-market-in-2024-but-supply-remains-a-challenge)|2025-02-24|2026-10-28|Primary|B09, B10, B11, B12|
|S009|[Counterpoint Research: Refurbished iPhone Volumes Grew 16% YoY Globally in 2022](https://counterpointresearch.com/en/insights/apple-refurbished-smartphone-volumes-grew-16-yoy-globally-in-2022)|2023-04-24|2026-10-28|Primary|B13, B14, B15|
|S010|[Counterpoint Research: India’s Evolving Refurbished Smartphone Growth Story: Shifting Demand From iPhone Base Models to Pro Variants](https://counterpointresearch.com/en/insights/india-refurbished-smartphone-market-h1-2025)|2025-09-30|2026-10-28|Primary|B06, B07, B08|
|S011|[Counterpoint Research: India Refurbished Smartphone Volumes Grew 13% YoY in H1 2026 as Rising Component Costs Boost Demand](https://counterpointresearch.com/en/insights/india-refurbished-smartphone-volumes-grew-13-percent-yoy-in-h1-2026)|2026-09-01|2026-10-28|Primary|B01, B02, B03, B04, B05|
|S012|[Counterpoint Research: India Smartphone Market’s Revenue Hits All-time High in 2024, Volume Growth Remains Stable](https://counterpointresearch.com/en/insights/post-insight-research-notes-blogs-india-smartphone-markets-revenue-hits-alltime-high-in-2024-volume-growth-remains-stable)|2025-01-30|2026-10-28|Primary|B16, B17, B18|
|S013|[MoEFCC / CPCB: Battery Waste Management Rules, 2022, S.O.3984(E)](https://eprbattery.cpcb.gov.in/upload/adminDoc/Battery-WasteManagementRules-2022.pdf)|2022-08-24|2026-10-28|Primary|C46, C47, C48|
|S014|[CPCB: SOPs for E-Waste Refurbisher](https://eprewaste.cpcb.gov.in/assets/landingpage%20PDF/SOPs_for_E-Waste_Refurbisher.pdf)|Undated|2026-10-28|Primary|C44, C45|
|S015|[Schmitt, Skiera and Van den Bulte: Referral Programs and Customer Value](https://faculty.wharton.upenn.edu/wp-content/uploads/2012/04/Schmitt-Skiera-vandenBulte-2011-Referral-Programs-Customer-Value.pdf)|2011-01|2026-10-28|Primary|F01, F02, F03, F04, F05, H01|
|S016|[Van den Bulte, Bayer, Skiera and Schmitt: How Customer Referral Programs Turn Social Capital into Economic Capital](https://faculty.wharton.upenn.edu/wp-content/uploads/2017/07/VdB-et-al.-JMR-2018.pdf)|2018-02|2026-10-28|Primary|F06, F07, F08, F09, F10, H02|
|S017|[Department of Consumer Affairs / Lok Sabha: Starred Question 361: Protection of rights of consumers in e-commerce](https://fcainfoweb.nic.in/PMS/writereaddata/2026_LS_B_361.pdf)|2026-03-18|2026-10-28|Primary|C22, C23|
|S018|[Back Market: All about Android battery health](https://help.backmarket.com/en-us/articles/844849-all-about-android-battery-health)|2026-09-25|2026-10-28|Primary|G11, G12|
|S019|[Back Market: How does the 1-year limited warranty work?](https://help.backmarket.com/en-us/articles/844919-how-does-the-1-year-limited-warranty-work)|2026-09-25|2026-10-28|Primary|G17, G18|
|S020|[Back Market: What condition will my device be in?](https://help.backmarket.com/en-us/articles/844928-what-condition-will-my-device-be-in)|Relative update only: over 2 weeks ago|2026-10-28|Primary|G13, G14, G15, G16|
|S021|[CeX India: How are your items graded?](https://in.support.webuy.com/support/solutions/articles/80000944185-how-are-your-items-graded-)|Not stated|2026-10-28|Primary|G29|
|S022|[CeX India: Is there a warranty on items that I buy from CeX?](https://in.support.webuy.com/support/solutions/articles/80000944200-is-there-a-warranty-on-items-that-i-buy-from-cex-)|Not stated|2026-10-28|Primary|G26|
|S023|[CeX India: What is your store returns policy?](https://in.support.webuy.com/support/solutions/articles/80000944276-what-is-your-store-returns-policy-)|Not stated|2026-10-28|Primary|G27, G28|
|S024|[Anita Klingler: Changes in Code-Switching Patterns among Hindi-English Bilinguals in Northern India](https://journals.ed.ac.uk/lifespansstyles/article/download/1827/pdf_17)|2017-03-26|2026-10-28|Primary|H10, I11, I12, I13, I14, I15|
|S025|[Bureau of Indian Standards: LIMS search: IS16046 laboratory scopes and test breakdowns](https://lims.bis.gov.in/home/search_is_number?is_number__doc_no=16046)|Undated|2026-10-28|Primary|C51, C52|
|S026|[MoEFCC / MPCB official repository: E-Waste (Management) Rules, 2022, G.S.R.801(E)](https://mpcb.gov.in/sites/default/files/Establishment%20of%20MPCB/Seniority%20list/2014/E-Waste_Management_Rules-2022.pdf)|2022-11-02|2026-10-28|Primary|C41, C42, C43|
|S027|[NABL / Quality Council of India: Testing Laboratories (ISO/IEC 17025)](https://nabl-india.org/testing-laboratories)|Undated|2026-10-28|Primary|C49, C50|
|S028|[Samsung Electronics America: A Galaxy First: Samsung Certified Re-Newed Now Available on Amazon.com](https://news.samsung.com/us/samsung-galaxy-first-certified-re-newed-now-available-amazon)|2026-10-21|2026-10-28|Primary|G19, G20, G21|
|S029|[NIST: Guidelines for Media Sanitization, NIST SP 800-88 Revision 2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-88r2.pdf)|2025-09|2026-10-28|Primary|E22, E23, E24, E25, E26|
|S030|[eBay: eBay Refurbished and Certified Open Box Limited Product Warranty](https://pages.ebay.com/promo/2020/0612/warranty.html)|Not stated; URL path is not publication evidence|2026-10-28|Primary|G24, G25|
|S031|[eBay: eBay Refurbished Warranty](https://pages.ebay.com/refurbishedprogramwarranty)|Not stated|2026-10-28|Primary|G22, G23|
|S032|[Amazon India: Custom Selling Programs that focuses on your specific business needs](https://sell.amazon.in/grow-your-business/programs)|Not stated|2026-10-28|Primary|G30|
|S033|[Apple: iPhone battery and performance](https://support.apple.com/en-in/101575)|2026-06-17|2026-10-28|Secondary|E01, E02, E03|
|S034|[Apple: iPhone Parts and Service History](https://support.apple.com/en-in/102658)|2026-10-24|2026-10-28|Secondary|E17, E18, E19|
|S035|[Apple: About genuine iPhone batteries](https://support.apple.com/en-in/103269)|2026-10-23|2026-10-28|Secondary|E04, E05, E06|
|S036|[Apple: If you want to buy a pre-owned iPhone](https://support.apple.com/en-in/104999)|2026-03-23|2026-10-28|Secondary|E11, E12, E13|
|S037|[Apple: What to do before you sell, give away or trade in your iPhone or iPad](https://support.apple.com/en-in/109511)|2026-06-12|2026-10-28|Secondary|E14, E15, E16|
|S038|[Apple: Use Repair Assistant to finish an iPhone or iPad repair](https://support.apple.com/en-in/120579)|2026-10-24|2026-10-28|Secondary|E20, E21|
|S039|[Google: Help prevent others from using your device without permission](https://support.google.com/android/answer/9459346?hl=en)|Not stated on inspected page|2026-10-28|Secondary|E34, E35|
|S040|[Google: Inconsistent condition between product data and website](https://support.google.com/merchants/answer/10898486?hl=en)|Undated|2026-10-28|Primary|F20, F21, H06|
|S041|[Google: Understand your Pixel battery](https://support.google.com/pixelphone/answer/15738128?hl=en)|Not stated on inspected page|2026-10-28|Secondary|E07, E08, E09, E10|
|S042|[Google: Learn how Repair mode works](https://support.google.com/pixelphone/answer/16444475?hl=en)|Not stated on inspected page|2026-10-28|Secondary|E30, E31|
|S043|[Google: How to factory reset your Google Pixel phone](https://support.google.com/pixelphone/answer/4596836?hl=en)|Not stated on inspected page|2026-10-28|Secondary|E32, E33|
|S044|[George A. Akerlof; The Quarterly Journal of Economics: The Market for "Lemons": Quality Uncertainty and the Market Mechanism](https://web.pdx.edu/~nwallace/EHP/AkerlofLemons.pdf)|1970-08|2026-10-28|Primary|D01, D02, D03|
|S045|[Wuppertal Institute: Germany Lagging Well Behind in the Purchase of Refurbished Smartphones](https://wupperinst.org/en/a/wi/a/s/ad/9066)|2025-09-10|2026-10-28|Primary|B31, B32, B33|
|S046|[Apple: Returns & Refunds - Shopping Help](https://www.apple.com/shop/help/returns_refund)|Not stated|2026-10-28|Primary|G10|
|S047|[Apple: Discover the Apple Certified Refurbished promise](https://www.apple.com/shop/refurbished/about)|Undated|2026-10-28|Primary|B34, B35, B36, G07, G08, G09|
|S048|[ASCI: Influencer Advertising Dos and Donts](https://www.ascionline.in/social/dos-dont)|Undated|2026-10-28|Primary|F16, F17, F18, F19, H05|
|S049|[ASCI: FAQs: Influencer Advertising Guidelines and Compliance](https://www.ascionline.in/social/faqs)|Undated|2026-10-28|Primary|C32, F11, F12, F13, F14, F15, H03, H04|
|S050|[ASCI: ASCI's Guide for Social Media Influencers](https://www.ascionline.in/social/wp-content/uploads/2024/03/ASCIs-Guide-For-Influencers-1.pdf)|Undated|2026-10-28|Primary|C30, C31|
|S051|[ASCI: Influencer Advertising in Digital Media: Guidelines](https://www.ascionline.in/social/wp-content/uploads/2025/04/ASCI-Influencer-Guidelines.pdf)|Undated|2026-10-28|Primary|C26, C27, C28, C29|
|S052|[Cashify: Elevating A New Gen Of Recommerce: A Look Into Cashify Whitepaper 2025](https://www.cashify.in/elevating-a-new-gen-of-recommerce-a-look-into-cashify-white-paper-2025)|2025-09-25|2026-10-28|Primary|B28, B29, B30|
|S053|[Cashify: Refund Policy](https://www.cashify.in/refund-policy)|Undated|2026-10-28|Primary|B40|
|S054|[Cashify: Refurbished Warranty Policy](https://www.cashify.in/refurbished-warranty-policy)|Not stated|2026-10-28|Primary|G01, G02, G03, G04, G05, G06|
|S055|[FDM CCS Insight: India’s Refurbished Smartphone Market Enters a New Phase](https://www.ccsinsight.com/blog/indias-refurbished-smartphone-market-enters-a-new-phase)|2026-06-22|2026-10-28|Primary|B37, B38, B39|
|S056|[C-DOT / Department of Telecommunications: CEIR User Manual for Mobile User, Version 03](https://www.ceir.gov.in/HelpDocuments/English/CEIR_Mobile_User_Manual_English_v03.pdf)|Not stated on inspected page|2026-10-28|Primary|E27, E28, E29|
|S057|[Ginger Zhe Jin and Phillip Leslie; author working paper hosted by University of Maryland: The Effect of Information on Product Quality: Evidence from Restaurant Hygiene Grade Cards](https://www.econ.umd.edu/sites/www.econ.umd.edu/files/pubs/restaurant-hygiene-wpversion.pdf)|Undated|2026-10-28|Primary|D16, D17, D18|
|S058|[Yao Chen, Jinfei Wang and Xuening Jia; Frontiers in Psychology: Refurbished or Remanufactured? An Experimental Study on Consumer Choice Behavior](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.00781/full)|2020-05-19|2026-10-28|Primary|D25, D26, D27|
|S059|[GSMA Intelligence: Mobile phone circularity: growing momentum, with financial incentives a driving force](https://www.gsmaintelligence.com/research/mobile-phone-circularity-growing-momentum-with-financial-incentives-a-driving-force)|2025-02|2026-10-28|Primary|B42|
|S060|[Weijia (Daisy) Dai and Michael Luca; Harvard Business School working paper: Digitizing Disclosure: The Case of Restaurant Hygiene Scores](https://www.hbs.edu/ris/Publication%20Files/18-088_7781070c-6910-4e26-aafd-9150b93a2d93.pdf)|2019-03-12|2026-10-28|Primary|D19, D20, D21|
|S061|[Gregory Lewis; author working paper hosted by Caltech: Asymmetric Information, Adverse Selection and Online Disclosure: The Case of eBay Motors](https://www.hss.caltech.edu/~mshum/ec106/lewiscars.pdf)|2009-02-03|2026-10-28|Primary|D31, D32, D33|
|S062|[IDC: From Discard to Demand: The Growing Popularity of Used Smartphones](https://www.idc.com/resource-center/blog/from-discard-to-demand-the-growing-popularity-of-used-smartphones)|2024-10-09|2026-10-28|Primary|B19, B20, B21, B22|
|S063|[IDC: The Smartphone Shifts: Why Second-Hand Devices are Outpacing New Ones](https://www.idc.com/resource-center/blog/the-smartphone-shifts-why-second-hand-devices-are-outpacing-new-ones)|2025-08-27|2026-10-28|Primary|B23, B24|
|S064|[Eric T. Anderson, Karsten Hansen and Duncan Simester; Marketing Science: The Option Value of Returns: Theory and Empirical Evidence](https://www.kellogg.northwestern.edu/faculty/anderson_e/htm/PersonalPage_Files/Papers/Option%20Value%20Final.pdf)|2009-01-07|2026-10-28|Primary|D13, D14, D15|
|S065|[Renu Gupta: Bilingual Advertising in a Multilingual Country](https://www.languageinindia.com/april2007/bilingualadvertising.pdf)|2007-04|2026-10-28|Primary|H09, I06, I07, I08, I09, I10|
|S066|[Parliament / MeitY: Digital Personal Data Protection Act, 2023](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf)|2023-08-11|2026-10-28|Primary|C35|
|S067|[MeitY: Digital Personal Data Protection Rules, 2025, G.S.R.846(E)](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf)|2025-11-13|2026-10-28|Primary|C36, C37|
|S068|[MeitY: DPDP Act commencement notification, G.S.R.843(E)](https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf)|2025-11-13|2026-10-28|Primary|C38, C39|
|S069|[MeitY: Corrigenda to DPDP Rules, G.S.R.892(E)](https://www.meity.gov.in/static/uploads/2025/12/3c7ebbae0e5456f493f486e6845df86b.pdf)|2025-12-10|2026-10-28|Primary|C40|
|S070|[Michaël Dewally and Louis Ederington; author working paper hosted by University of Oklahoma: A Comparison of Reputation, Certification, Warranties, and Disclosure as Remedies for Information Asymmetries: Lessons from the On-line Comic Book Market](https://www.ou.edu/dam/price/Finance/CFS/paper/pdf/comic%20paper.pdf)|2002-11|2026-10-28|Primary|D22, D23, D24|
|S071|[Department of Telecommunications / PIB: Launch of SancharSaathi Portal](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1924541)|2023-05-16|2026-10-28|Primary|C33, C34|
|S072|[Department of Consumer Affairs via Press Information Bureau: Report for Framework on Repairability Index (RI) in Mobile and Electronic Sector submitted](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2126409&reg=48&lang=2)|2025-05-03|2026-10-28|Primary|B25, B26, B27|
|S073|[Department of Consumer Affairs / PIB: BIS notifies framework to protect consumers from fake and deceptive reviews](https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1885397&lang=2&reg=48)|2022-12-21|2026-10-28|Primary|C24, C25|
|S074|[Narayan Janakiraman, Holly A. Syrdal and Ryan Freling; Journal of Retailing: The Effect of Return Policy Leniency on Consumer Purchase and Return Decisions: A Meta-analytic Review](https://www.researchgate.net/profile/Narayan-Janakiraman/publication/285044986_The_Effect_of_Return_Policy_Leniency_on_Consumer_Purchase_and_Return_Decisions_A_Meta-analytic_Review/links/576d5cee08ae142e675c2303/The-Effect-of-Return-Policy-Leniency-on-Consumer-Purchase-and-Return-Decisions-A-Meta-analytic-Review.pdf)|2015-11-28|2026-10-28|Primary|D10, D11, D12|
|S075|[Sanford J. Grossman; Journal of Law and Economics: The Informational Role of Warranties and Private Disclosure about Product Quality](https://www.researchgate.net/publication/24100578_The_Informational_Role_of_Warranties_and_Private_Disclosure_about_Product_Quality)|1981-12|2026-10-28|Primary|D07, D08, D09|
|S076|[Ilenia Confente, Ivan Russo, Simone Peinkofer and Robert Frankel; International Journal of Physical Distribution & Logistics Management: The challenge of remanufactured products: the role of returns policy and channel structure to reduce consumers’ perceived risk](https://www.researchgate.net/publication/351409914_The_challenge_of_remanufactured_products_the_role_of_returns_policy_and_channel_structure_to_reduce_consumers'_perceived_risk)|2021|2026-10-28|Primary|D28, D29, D30|
|S077|[Michael Spence; The Quarterly Journal of Economics: Job Market Signaling](https://www.sfu.ca/~allen/Spence.pdf)|1973-08|2026-10-28|Primary|D04, D05, D06|


## Appendix B: model working T1 to T29


Model 9b3628d94d, run 2026-10-27T13:10:48.

## T1. Assumptions register

| ID | Assumption | Basis |
|---|---|---|
| A01 | Lever A's ₹10 lakh of extra performance ads is counted once, as growth money in the month spent, and is not added again to the performance-ads fixed spend | C-E6H3 says count each growth item once |
| A02 | Each channel's fixed spend (₹99 lakh in all) stays as today in every plan and every month | No lever in Exhibit 6 changes it |
| A03 | Commission, coupons and every per-phone cost apply only to delivered orders; an order that cannot be delivered earns and costs nothing | C-E6H4: undelivered orders are lost |
| A04 | Rationing includes trade in orders: Superb first, pro rata across all channels, then all orders pro rata to the lab limit | C-E6H4 read literally |
| A05 | Return-rate cuts from B1 and B2 multiply each channel's own rate, including the website rate that trade in buyers pay | C-E6H2: multiply effects on return rates |
| A06 | The 15% trade in failure rate applies equally to each arriving grade | C-E6TI2 gives one rate |
| A07 | 30% of all trade ins, failed or passed, also buy a Tikau phone | C-E6TI4: 30% of people who trade in |
| A08 | From February the Superb rule (85% or more) is applied to Tikau's own lab reading; with no failure rate in the case, no Superb phone changes grade | C-E5a, C-E6B1; no data on Superb readings |
| A09 | January is today's month in every plan, so doing nothing earns today's result in each of the three months | C-E6H1 and FAQ 15 |
| A10 | A third shift adds 1,800 sellable phones, so the limit becomes 9,000; its ₹9 lakh is growth money in each month it runs | C-E6SH, C-E6H3 |
| A11 | B2's 4% price rise raises MegaKart's 12% commission on those phones, because the commission is a share of the selling price | C-E3N2 |
| A12 | The ₹120 report cost and the B2 battery costs apply to trade in buyers' phones too | C-E6H2: cost changes apply to every phone sold |
| A13 | Weekly figures use 4.33 weeks a month | Team convention |
| A14 | The November spot check (22 of 200 Good phones below 80%) applies to all Good phones sold, so about 351 a month carry an untrue battery claim today | C-E4c, an indicative scale-up only |
| A15 | In April Tikau has new growth money for the next quarter and the trade in ramp restarts at 1,000, then 1,800, then 800 more a month to 4,000 | C-E6TI1 pattern; April is outside the board tests |
| A16 | Stress tests move only what Tikau does not control (the order rise, the return cut, battery shares, claim rates) 25% worse or better; prices and the ₹120 report cost are Tikau's decisions and stay as printed; the plan uses the printed values | Team convention for Q5 trigger levels |
| A17 | Revenue in the reconciliation is gross selling price before commission; the case's ₹139 crore is read as that figure | C-CO3 |
| A18 | Month figures are averages of August to October 2026 and stand for November 2026 to January 2027 as well | C-E3 title, C-E6H1 |
| A19 | Store, creator and MegaKart return multipliers stay as today when B1 and B2 apply | C-E3 notes |
| A20 | Trade in savings count only for traded phones that pass the check; a failed traded phone is sold as parts at cost, like a failed lab phone | C-E6TI2, C-E4a |

*Source: team assumptions, stated on the slide where each is used (C-R3)*

## T2. Contribution per phone by grade, website rates (₹ per phone)

| Line | Superb | Good | Fair |
|---|---|---|---|
| Average selling price | ₹24,000 | ₹16,000 | ₹10,000 |
| Price paid to the trader | −₹17,800 | −₹11,600 | −₹7,000 |
| Testing and repair | −₹800 | −₹1,000 | −₹1,200 |
| Packing, delivery, payment | −₹600 | −₹600 | −₹600 |
| Warranty: claim rate x ₹2,500 | −₹75 | −₹150 | −₹250 |
| Returns: return rate x ₹1,800 | −₹72 | −₹126 | −₹234 |
| Contribution per phone | ₹4,653 | ₹2,524 | ₹716 |
| Contribution as a share of price | 19.4% | 15.8% | 7.2% |

*Source: case Exhibit 2 (C-E2, C-E2N1 to C-E2N3); team model*

## T3. Contribution per phone by return regime (₹)

| Grade | Stores (0.5x returns) | Website, ads, MegaKart, referrals (1x) | Creators (1.5x) |
|---|---|---|---|
| Superb | ₹4,689 | ₹4,653 | ₹4,617 |
| Good | ₹2,587 | ₹2,524 | ₹2,461 |
| Fair | ₹833 | ₹716 | ₹599 |

*Source: case Exhibits 2 and 3 (C-E3N3, C-E3N4); before commission, fixed spend and coupons*

## T4. Contribution after marketing by channel, a month today (₹ lakh unless stated)

| Channel | Orders | Superb / Good / Fair | Contribution of phones | MegaKart commission | Fixed spend | Coupons | After marketing | Per order (₹) | Dashboard cost per order (₹) | True cost per order (₹) | Return rate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Performance ads | 2,600 | 20 / 40 / 40% | 57.9 | 0.0 | −60.0 | 0.0 | −2.1 | −₹81 | ₹2,308 | ₹2,308 | 8.80% |
| MegaKart | 2,000 | 10 / 45 / 45% | 38.5 | −33.8 | 0.0 | 0.0 | 4.6 | ₹231 | ₹0 | ₹1,692 | 9.40% |
| Creators | 900 | 40 / 50 / 10% | 28.2 | 0.0 | −18.0 | 0.0 | 10.2 | ₹1,137 | ₹2,000 | ₹2,000 | 9.60% |
| Stores | 1,000 | 45 / 45 / 10% | 33.6 | 0.0 | −21.0 | 0.0 | 12.6 | ₹1,258 | ₹2,100 | ₹2,100 | 3.12% |
| Referrals | 700 | 35 / 50 / 15% | 21.0 | 0.0 | 0.0 | −2.4 | 18.5 | ₹2,648 | ₹350 | ₹350 | 6.85% |
| Total | 7,200 |  | 179.2 | −33.8 | −99.0 | −2.4 | 43.9 | ₹609 |  |  | 8.09% |

*Source: case Exhibits 2 and 3; true cost per order = (fixed spend + commission + coupons) / orders; team model*

## T5. Tikau's month today and the reconciliation with the last twelve months

| Line | Value |
|---|---|
| Contribution after marketing, all channels | ₹43.9 lakh |
| Fixed costs | −₹58.0 lakh |
| Monthly EBITDA | −₹14.1 lakh |
| Monthly EBITDA x 12 | −₹169.6 lakh |
| Case: EBITDA, Nov 2025 to Oct 2026 | −₹170.0 lakh |
| Gross sales a month | ₹1159.9 lakh |
| Gross sales x 12 | ₹139.2 crore |
| Case: net revenue, last twelve months | ₹139 crore |
| Phones sold a month | 7,200 |
| Phones returned a month | 582 |
| Return rate | 8.09% |
| Warranty claims a month | 468 |
| Cost of claims | ₹11.7 lakh |
| Cost of returns | ₹10.5 lakh |
| Distrust costs a month (claims plus returns) | ₹22.2 lakh |

*Source: case page 3 (C-CO3, C-CO4), Exhibits 2 and 3; team model*

## T6. Phones sold and contribution by grade, a month today

| Grade | Phones | Share | Contribution per phone | Contribution, ₹ lakh |
|---|---|---|---|---|
| Superb | 1,775 | 24.7% | ₹4,653 | 82.6 |
| Good | 3,190 | 44.3% | ₹2,524 | 80.5 |
| Fair | 2,235 | 31.0% | ₹716 | 16.0 |

*Source: case Exhibits 2 and 3; contribution at website rates before channel effects*

## T7. Website funnel, October 2026

| Step | People | Conversion from the step before |
|---|---|---|
| Visited the website | 9,60,000 |  |
| Opened a product page | 3,10,000 | 32.3% |
| Added a phone to cart | 26,000 | 8.4% |
| Placed an order | 4,200 | 16.2% |
| Visit to order |  | 0.44% |
| Store: picks up a phone to buys |  | 33.3% |

*Source: case Exhibit 1D (C-E1D)*

## T8. The lab, Superb supply and the battery spot check

| Measure | Value |
|---|---|
| Phones tested a month | 8,000 |
| Fail the final check | 10% |
| Sellable phones a month | 7,200 |
| Phones sold a month | 7,200 |
| Lab use | 100% |
| Superb sold a month | 1,775 |
| Superb available from traders | 2,000 |
| Superb headroom | 225 |
| Good phones below their printed 80% (spot check) | 22 of 200, 11% |
| Good phones a month with an untrue battery line (A14) | 351 |
| Repair time | 9 days |
| Claims needing a second visit | 38% |

*Source: case Exhibit 4 (C-E4a to C-E4d); A14*

## T9. Why visitors did not buy, and the option that answers each reason

| Reason (Exhibit 1A) | Share | Answered by |
|---|---|---|
| Worried the battery will not last | 46% | B2 (85% battery) with B1 (lab reading) |
| Cannot tell the real condition from photos | 41% | B1 (real photos, condition report) |
| 6 month warranty is too short | 31% | B2 (12 month warranty) |
| Wanted to see the phone in person | 28% | Stores (existing channel) |
| Price not low enough compared with a local shop | 24% | A (Fair price cut only) |
| Phone might be stolen or locked | 22% | B1 (IMEI check) |
| Worried about the previous owner's data | 12% | B1 (data wipe certificate) |

*Source: case Exhibit 1A (C-E1A), Exhibit 6; team mapping*

## T10. Segment scorecard (1 weak to 5 strong; team judgement on case data)

| Segment | Size: share of buyers | Contribution a phone after the plan | Room to grow in Q1 | Return risk of the grade | Their worry is what B1 + B2 fix | A lever that passes the board tests reaches them | Total |
|---|---|---|---|---|---|---|---|
| Flagship on a budget | 5 (34%) | 5 (Superb ₹5,500) | 1 (Superb capped at 2,000) | 5 (Superb 4%) | 3 (photos and condition (41%)) | 3 (B1 + B2, but Superb is rationed) | 22 |
| Value seekers | 4 (29%) | 1 (Fair ₹164) | 5 (no cap) | 1 (Fair 13%) | 1 (price (24%)) | 1 (only A, which fails tests 2 to 4) | 13 |
| Family buyers | 3 (21%) | 3 (Good ₹2,699) | 5 (no cap) | 3 (Good 7%) | 5 (who will fix it: 12 months (39%), battery (46%)) | 5 (B1 + B2) | 24 |
| Upgraders | 2 (16%) | 4 (Superb and Good) | 3 (half capped) | 4 (4% to 7%) | 2 (part payment (31%)) | 1 (C, which does not fit the ₹80 lakh with B1 + B2) | 16 |

*Source: case Exhibit 1C (C-E1C), Exhibits 2, 4 and 6; team model T11 for contribution after the plan*

## T11. Contribution per phone under each lever, website rates (₹)

| Case | Superb | Good | Fair |
|---|---|---|---|
| Today | ₹4,653 | ₹2,524 | ₹716 |
| A | ₹4,653 | ₹2,524 | ₹416 |
| B1 | ₹4,555 | ₹2,442 | ₹666 |
| B2 | ₹5,602 | ₹2,789 | ₹228 |
| B1 + B2 | ₹5,500 | ₹2,699 | ₹164 |
| A + B1 + B2 | ₹5,500 | ₹2,699 | −₹136 |

*Source: case Exhibits 2 and 6; per-phone costs and return cuts as printed*

## T12. Every plan the options allow: 28 lever sets x 3 shift choices (₹ lakh)

| Plan | Growth money | Jan EBITDA | Feb EBITDA | Mar EBITDA | Q1 EBITDA | Q1 vs doing nothing | Mar return rate | Tests 1 to 4 | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| Do nothing | 0.0 | −14.1 | −14.1 | −14.1 | −42.4 | 0.0 | 8.09% | PFFF |  |
| Do nothing + shift from Feb | 18.0 | −14.1 | −23.1 | −23.1 | −60.4 | −18.0 | 8.09% | PFFF |  |
| Do nothing + shift from Mar | 9.0 | −14.1 | −14.1 | −23.1 | −51.4 | −9.0 | 8.09% | PFFF |  |
| A | 20.0 | −14.1 | −55.7 | −55.7 | −125.6 | −83.2 | 8.87% | PFFF |  |
| A + shift from Feb | 38.0 | −14.1 | −36.9 | −36.9 | −88.0 | −45.6 | 8.87% | PFFF |  |
| A + shift from Mar | 29.0 | −14.1 | −55.7 | −36.9 | −106.8 | −64.4 | 8.87% | PFFF |  |
| B1 | 15.0 | −29.1 | −19.6 | −19.6 | −68.4 | −26.0 | 5.66% | PFPP |  |
| B1 + shift from Feb | 33.0 | −29.1 | −17.6 | −17.6 | −64.4 | −22.0 | 5.66% | PFPP |  |
| B1 + shift from Mar | 24.0 | −29.1 | −19.6 | −17.6 | −66.4 | −24.0 | 5.66% | PFPP |  |
| B2 | 25.0 | −39.1 | −0.7 | −0.7 | −40.5 | +1.9 | 6.47% | PFFF |  |
| B2 + shift from Feb | 43.0 | −39.1 | 2.8 | 2.8 | −33.5 | +9.0 | 6.47% | PPFF |  |
| B2 + shift from Mar | 34.0 | −39.1 | −0.7 | 2.8 | −37.0 | +5.4 | 6.47% | PPFF |  |
| C | 35.0 | −49.1 | −9.0 | −4.9 | −63.1 | −20.7 | 7.97% | PFFF |  |
| C + shift from Feb | 53.0 | −49.1 | −12.0 | −3.1 | −64.3 | −21.9 | 7.97% | PFFF |  |
| C + shift from Mar | 44.0 | −49.1 | −9.0 | −3.1 | −61.3 | −18.9 | 7.97% | PFFF |  |
| A + B1 | 35.0 | −29.1 | −60.9 | −60.9 | −151.0 | −108.6 | 6.21% | PFFP |  |
| A + B1 + shift from Feb | 53.0 | −29.1 | −43.4 | −43.4 | −115.9 | −73.5 | 6.21% | PFFP |  |
| A + B1 + shift from Mar | 44.0 | −29.1 | −60.9 | −43.4 | −133.5 | −91.1 | 6.21% | PFFP |  |
| A + B2 | 45.0 | −39.1 | −50.4 | −50.4 | −140.0 | −97.6 | 7.10% | PFFF |  |
| A + B2 + shift from Feb | 63.0 | −39.1 | −30.3 | −30.3 | −99.7 | −57.3 | 7.10% | PFFF |  |
| A + B2 + shift from Mar | 54.0 | −39.1 | −50.4 | −30.3 | −119.9 | −77.5 | 7.10% | PFFF |  |
| A + C | 55.0 | −49.1 | −49.8 | −45.2 | −144.2 | −101.8 | 8.74% | PFFF |  |
| A + C + shift from Feb | 73.0 | −49.1 | −30.7 | −25.8 | −105.6 | −63.2 | 8.74% | PFFF |  |
| A + C + shift from Mar | 64.0 | −49.1 | −49.8 | −25.8 | −124.7 | −82.3 | 8.74% | PFFF |  |
| B1 + B2 | 40.0 | −54.1 | −8.6 | −8.6 | −71.4 | −29.0 | 4.55% | PFPP |  |
| B1 + B2 + shift from Feb | 58.0 | −54.1 | 5.6 | 5.6 | −42.9 | −0.5 | 4.55% | PPPP | Passes |
| B1 + B2 + shift from Mar | 49.0 | −54.1 | −8.6 | 5.6 | −57.2 | −14.8 | 4.55% | PPPP | Passes |
| B1 + B3 | 45.0 | −29.1 | −33.0 | −33.0 | −95.1 | −52.7 | 5.65% | PFPP |  |
| B1 + B3 + shift from Feb | 63.0 | −29.1 | −25.5 | −25.5 | −80.1 | −37.7 | 5.65% | PFPP |  |
| B1 + B3 + shift from Mar | 54.0 | −29.1 | −33.0 | −25.5 | −87.6 | −45.2 | 5.65% | PFPP |  |
| B1 + C | 50.0 | −64.1 | −14.6 | −10.5 | −89.2 | −46.8 | 5.59% | PFPP |  |
| B1 + C + shift from Feb | 68.0 | −64.1 | −6.8 | 1.9 | −69.0 | −26.6 | 5.59% | PPPP | Passes |
| B1 + C + shift from Mar | 59.0 | −64.1 | −14.6 | 1.9 | −76.8 | −34.4 | 5.59% | PPPP | Passes |
| B2 + B3 | 55.0 | −39.1 | −13.8 | −13.8 | −66.7 | −24.3 | 6.46% | PFFF |  |
| B2 + B3 + shift from Feb | 73.0 | −39.1 | −4.0 | −4.0 | −47.2 | −4.8 | 6.46% | PFFF |  |
| B2 + B3 + shift from Mar | 64.0 | −39.1 | −13.8 | −4.0 | −57.0 | −14.5 | 6.46% | PFFF |  |
| B2 + C | 60.0 | −74.1 | 5.2 | 9.8 | −59.2 | −16.8 | 6.38% | PPFF |  |
| B2 + C + shift from Feb | 78.0 | −74.1 | 15.3 | 25.3 | −33.5 | +9.0 | 6.38% | PPFF |  |
| B2 + C + shift from Mar | 69.0 | −74.1 | 5.2 | 25.3 | −43.6 | −1.2 | 6.38% | PPFF |  |
| A + B1 + B2 | 60.0 | −54.1 | −58.4 | −58.4 | −171.0 | −128.6 | 4.99% | PFPP |  |
| A + B1 + B2 + shift from Feb | 78.0 | −54.1 | −40.3 | −40.3 | −134.7 | −92.3 | 4.99% | PFPP |  |
| A + B1 + B2 + shift from Mar | 69.0 | −54.1 | −58.4 | −40.3 | −152.8 | −110.4 | 4.99% | PFPP |  |
| A + B1 + B3 | 65.0 | −29.1 | −74.6 | −74.6 | −178.2 | −135.8 | 6.20% | PFFP |  |
| A + B1 + B3 + shift from Feb | 83.0 | −29.1 | −56.7 | −56.7 | −142.5 | −100.1 | 6.20% | FFFP |  |
| A + B1 + B3 + shift from Mar | 74.0 | −29.1 | −74.6 | −56.7 | −160.4 | −118.0 | 6.20% | PFFP |  |
| A + B1 + C | 70.0 | −64.1 | −55.2 | −50.6 | −169.9 | −127.5 | 6.12% | PFFP |  |
| A + B1 + C + shift from Feb | 88.0 | −64.1 | −37.3 | −32.5 | −134.0 | −91.6 | 6.12% | FFFP |  |
| A + B1 + C + shift from Mar | 79.0 | −64.1 | −55.2 | −32.5 | −151.8 | −109.4 | 6.12% | PFFP |  |
| A + B2 + B3 | 75.0 | −39.1 | −63.9 | −63.9 | −167.0 | −124.6 | 7.09% | PFFF |  |
| A + B2 + B3 + shift from Feb | 93.0 | −39.1 | −43.4 | −43.4 | −126.0 | −83.6 | 7.09% | FFFF |  |
| A + B2 + B3 + shift from Mar | 84.0 | −39.1 | −63.9 | −43.4 | −146.5 | −104.1 | 7.09% | FFFF |  |
| A + B2 + C | 80.0 | −74.1 | −43.8 | −38.7 | −156.6 | −114.2 | 7.00% | PFFF |  |
| A + B2 + C + shift from Feb | 98.0 | −74.1 | −23.2 | −17.6 | −114.9 | −72.5 | 7.00% | FFFF |  |
| A + B2 + C + shift from Mar | 89.0 | −74.1 | −43.8 | −17.6 | −135.6 | −93.2 | 7.00% | FFFF |  |
| B1 + B2 + B3 | 70.0 | −54.1 | −24.0 | −24.0 | −102.1 | −59.7 | 4.56% | PFPP |  |
| B1 + B2 + B3 + shift from Feb | 88.0 | −54.1 | −5.5 | −5.5 | −65.1 | −22.7 | 4.56% | FFPP |  |
| B1 + B2 + B3 + shift from Mar | 79.0 | −54.1 | −24.0 | −5.5 | −83.6 | −41.2 | 4.56% | PFPP |  |
| B1 + B2 + C | 75.0 | −89.1 | −1.1 | 3.4 | −86.8 | −44.4 | 4.47% | PPPP | Passes |
| B1 + B2 + C + shift from Feb | 93.0 | −89.1 | 21.4 | 31.2 | −36.5 | +5.9 | 4.47% | FPPP |  |
| B1 + B2 + C + shift from Mar | 84.0 | −89.1 | −1.1 | 31.2 | −59.0 | −16.6 | 4.47% | FPPP |  |
| B1 + B3 + C | 80.0 | −64.1 | −28.0 | −24.0 | −116.1 | −73.7 | 5.58% | PFPP |  |
| B1 + B3 + C + shift from Feb | 98.0 | −64.1 | −14.5 | −5.9 | −84.5 | −42.1 | 5.58% | FFPP |  |
| B1 + B3 + C + shift from Mar | 89.0 | −64.1 | −28.0 | −5.9 | −98.0 | −55.5 | 5.58% | FFPP |  |
| B2 + B3 + C | 90.0 | −74.1 | −8.0 | −3.5 | −85.7 | −43.3 | 6.37% | FFFF |  |
| B2 + B3 + C + shift from Feb | 108.0 | −74.1 | 8.6 | 18.6 | −47.0 | −4.5 | 6.37% | FPFF |  |
| B2 + B3 + C + shift from Mar | 99.0 | −74.1 | −8.0 | 18.6 | −63.6 | −21.2 | 6.37% | FPFF |  |
| A + B1 + B2 + B3 | 90.0 | −54.1 | −73.6 | −73.6 | −201.3 | −158.8 | 5.00% | FFPP |  |
| A + B1 + B2 + B3 + shift from Feb | 108.0 | −54.1 | −55.4 | −55.4 | −165.0 | −122.6 | 5.00% | FFPP |  |
| A + B1 + B2 + B3 + shift from Mar | 99.0 | −54.1 | −73.6 | −55.4 | −183.1 | −140.7 | 5.00% | FFPP |  |
| A + B1 + B2 + C | 95.0 | −89.1 | −49.9 | −44.8 | −183.9 | −141.4 | 4.90% | FFPP |  |
| A + B1 + B2 + C + shift from Feb | 113.0 | −89.1 | −30.7 | −25.3 | −145.2 | −102.8 | 4.90% | FFPP |  |
| A + B1 + B2 + C + shift from Mar | 104.0 | −89.1 | −49.9 | −25.3 | −164.3 | −121.9 | 4.90% | FFPP |  |
| A + B1 + B3 + C | 100.0 | −64.1 | −68.5 | −64.0 | −196.6 | −154.2 | 6.11% | FFFP |  |
| A + B1 + B3 + C + shift from Feb | 118.0 | −64.1 | −50.2 | −45.5 | −159.8 | −117.4 | 6.11% | FFFP |  |
| A + B1 + B3 + C + shift from Mar | 109.0 | −64.1 | −68.5 | −45.5 | −178.1 | −135.7 | 6.11% | FFFP |  |
| A + B2 + B3 + C | 110.0 | −74.1 | −56.9 | −51.8 | −182.9 | −140.5 | 6.98% | FFFF |  |
| A + B2 + B3 + C + shift from Feb | 128.0 | −74.1 | −35.8 | −30.3 | −140.3 | −97.8 | 6.98% | FFFF |  |
| A + B2 + B3 + C + shift from Mar | 119.0 | −74.1 | −56.9 | −30.3 | −161.4 | −119.0 | 6.98% | FFFF |  |
| B1 + B2 + B3 + C | 105.0 | −89.1 | −14.9 | −9.8 | −113.9 | −71.5 | 4.47% | FFPP |  |
| B1 + B2 + B3 + C + shift from Feb | 123.0 | −89.1 | 13.7 | 19.7 | −55.8 | −13.4 | 4.47% | FPPP |  |
| B1 + B2 + B3 + C + shift from Mar | 114.0 | −89.1 | −14.9 | 19.7 | −84.4 | −41.9 | 4.47% | FPPP |  |
| A + B1 + B2 + B3 + C | 125.0 | −89.1 | −64.0 | −58.0 | −211.2 | −168.8 | 4.89% | FFPP |  |
| A + B1 + B2 + B3 + C + shift from Feb | 143.0 | −89.1 | −44.7 | −38.0 | −171.9 | −129.4 | 4.89% | FFPP |  |
| A + B1 + B2 + B3 + C + shift from Mar | 134.0 | −89.1 | −64.0 | −38.0 | −191.2 | −148.8 | 4.89% | FFPP |  |

*Source: team model; test 4 needs B1, because a battery claim needs a reading taken in Tikau's own lab (C-E5a) and today's readings come from the trader's tool (C-E4c)*

## T13. The five plans that pass all four board tests (₹ lakh)

| Plan | Growth money | Mar EBITDA | Q1 EBITDA | Q1 vs doing nothing | Mar return rate |
|---|---|---|---|---|---|
| B1 + B2 + shift from Feb | 58.0 | 5.6 | −42.9 | −0.5 | 4.55% |
| B1 + B2 + shift from Mar | 49.0 | 5.6 | −57.2 | −14.8 | 4.55% |
| B1 + C + shift from Feb | 68.0 | 1.9 | −69.0 | −26.6 | 5.59% |
| B1 + C + shift from Mar | 59.0 | 1.9 | −76.8 | −34.4 | 5.59% |
| B1 + B2 + C | 75.0 | 3.4 | −86.8 | −44.4 | 4.47% |

*Source: team model*

## T14. The plans each camp proposed, on the board's tests (₹ lakh)

| Plan | Levers | Growth money | Mar EBITDA | Q1 vs doing nothing | Mar return rate | Tests failed |
|---|---|---|---|---|---|---|
| Do nothing | Do nothing | 0.0 | −14.1 | 0.0 | 8.09% | 2, 3, 4 |
| Rohan: price push | A | 20.0 | −55.7 | −83.2 | 8.87% | 2, 3, 4 |
| Rohan with a third shift | A + shift from Feb | 38.0 | −36.9 | −45.6 | 8.87% | 2, 3, 4 |
| Kabir: certify and warranty | B1 + B2 | 40.0 | −8.6 | −29.0 | 4.55% | 2 |
| Store managers: trade in | C | 35.0 | −4.9 | −20.7 | 7.97% | 2, 3, 4 |
| Battery promise without the report | B2 + shift from Feb | 43.0 | 2.8 | +9.0 | 6.47% | 3, 4 |
| Everything that fits on paper | B1 + B2 + C + shift from Feb | 93.0 | 31.2 | +5.9 | 4.47% | 1 |
| Trade in instead of the shift | B1 + B2 + C | 75.0 | 3.4 | −44.4 | 4.47% | none |
| Our plan | B1 + B2 + shift from Feb | 58.0 | 5.6 | −0.5 | 4.55% | none |

*Source: team model; case page 3 (C-B4 to C-B6)*

## T15. The decision table for our plan

| Your plan | January | February | March |
|---|---|---|---|
| Options live | None live; ₹40 lakh of B1 and B2 setup paid | B1, B2, third shift | B1, B2, third shift |
| Phones sold | 7,200 | 8,328 | 8,328 |
| Contribution after marketing (₹ lakh) | 43.9 | 72.6 | 72.6 |
| Growth money spent (₹ lakh) | 40.0 | 9.0 | 9.0 |
| EBITDA (₹ lakh) | −54.1 | 5.6 | 5.6 |
| Return rate | 8.1% | 4.5% | 4.5% |

*Source: team model; format from case page 7 (C-D3)*

## T16. March EBITDA, doing nothing to our plan, one effect at a time (₹ lakh)

| Step | Change | Running total |
|---|---|---|
| March EBITDA if Tikau does nothing |  | −14.1 |
| More phones sold | +20.8 | 6.6 |
| Superb and Good prices up 4% | +41.9 | 48.6 |
| New batteries (B2) | −29.5 | 19.1 |
| Tikau Report, ₹120 a phone | −10.0 | 9.1 |
| Warranty claim rates | +0.2 | 9.2 |
| Fewer returns | +5.4 | 14.6 |
| Third shift, ₹9 lakh of growth money | −9.0 | 5.6 |
| March EBITDA, our plan |  | 5.6 |

*Source: team model; steps applied in this order so that they add up exactly*

## T17. Break-even points for March EBITDA under our plan

Interpretation note: the return-rate row gives the 6.0% board limit, not an EBITDA-zero point. The other rows concern local EBITDA break-even. Preserve the case denominator and read the return row with T27. [C-T3t, T27]

| Input | Plan value | March EBITDA reaches zero at |
|---|---|---|
| Order rise from B1 and B2 together | 16.6% | 10.5% (7,957 phones) |
| Good phones needing a new battery | 40% | 55% |
| Fair phones needing a new battery | 70% | 97% |
| Return rate kept by B1 and B2 together (March return rate 6.0%) | 56% of today's rate | 74% of today's rate |

*Source: team model*

## T18. Stress test: each Exhibit 6 effect at 75% and 125% (A16), March EBITDA (₹ lakh)

| Input | Bear | Bull | Swing |
|---|---|---|---|
| Good battery swaps | 1.9 | 9.3 | 7.4 |
| Fair battery swaps | 2.0 | 9.3 | 7.3 |
| Claim rates after B2 | 2.2 | 9.0 | 6.7 |
| Order rise | 2.8 | 8.2 | 5.4 |
| Return cut | 4.4 | 6.7 | 2.3 |

*Source: team model; plan value 5.6*

## T19. Three scenarios for our plan (₹ lakh)

| Scenario | Feb EBITDA | Mar EBITDA | Q1 vs doing nothing | Mar return rate | Phones in March | All four tests |
|---|---|---|---|---|---|---|
| Bear | −8.7 | −8.7 | −29.2 | 5.33% | 8,090 | Fail |
| Base | 5.6 | 5.6 | −0.5 | 4.55% | 8,328 | Pass |
| Bull | 20.5 | 20.5 | +29.2 | 3.83% | 8,564 | Pass |

*Source: team model; A16*

## T20. April: the options we did not choose, on top of our plan (₹ lakh a month)

| Option | Trade ins | Phones sold | Demand | EBITDA before setup | Change vs keeping the plan | Return rate |
|---|---|---|---|---|---|---|
| Keep the plan | 0 | 8,328 | 8,398 | 5.6 | 0.0 | 4.55% |
| Add B3 trust campaign | 0 | 8,539 | 8,701 | −5.5 | −11.1 | 4.56% |
| Add A price push | 0 | 9,000 | 11,081 | −40.3 | −45.9 | 4.99% |
| Add C trade in, month 1 | 1,000 | 8,698 | 8,698 | 21.4 | +15.8 | 4.50% |
| Add C trade in, month 2 | 1,800 | 8,938 | 8,938 | 31.2 | +25.6 | 4.47% |
| Add C trade in, month 3 | 2,600 | 9,000 | 9,178 | 37.2 | +31.6 | 4.45% |
| Add C trade in, month 4 | 3,400 | 9,000 | 9,418 | 41.8 | +36.2 | 4.43% |
| Add C trade in, month 5 | 4,000 | 9,000 | 9,598 | 45.3 | +39.7 | 4.41% |

*Source: team model; A15; trade in setup of ₹35 lakh is paid once in its first month*

## T21. Channels in March under our plan

| Channel | Phones | After marketing, ₹ lakh | Per order (₹) | Today per order (₹) | Return rate |
|---|---|---|---|---|---|
| Performance ads | 3,012 | 7.0 | ₹231 | −₹81 | 4.95% |
| MegaKart | 2,325 | 2.1 | ₹92 | ₹231 | 5.27% |
| Creators | 1,035 | 18.3 | ₹1,769 | ₹1,137 | 5.40% |
| Stores | 1,149 | 21.6 | ₹1,881 | ₹1,258 | 1.76% |
| Referrals | 807 | 23.6 | ₹2,923 | ₹2,648 | 3.86% |

*Source: team model*



Frozen original model: 9b3628d94d. All company monetary fields ending _lakh are INR lakh; rates/shares are fractions; phone counts are expected delivered units. JSON floats are unrounded.

Tables below show numeric values to 12 significant digits for audit readability. Use JSON floats for calculations. Company totals in a submitted deck must be shown to one decimal lakh. Every table is generated from the same object as the JSON.

## T22. Delivered demand and sequential rationing by channel and grade

Inputs: Case E3 channel orders/mixes; E4b Superb 2000; E6 effects, trade-in arrivals and supply, H4 rationing order.

Cell definitions: {"demand": "orders before rationing", "post_superb": "demand multiplied by Superb factor for S only", "delivered": "post_superb multiplied by total lab factor", "lost_to_superb": "demand minus post_superb", "lost_to_lab": "post_superb minus delivered", "superb_factor": "min(1,available Superb / demanded Superb)", "lab_factor": "min(1,capacity / all post-Superb orders)"}

| case | plan | month | channel | grade | demand | post_superb | delivered | superb_factor | lab_factor | superb_capacity | lab_capacity | lost_to_superb | lost_to_lab |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Recommended | B1 + B2 + shift from Feb | Feb | ads | S | 606.528 | 585.915492958 | 585.915492958 | 0.966015572171 | 1 | 2000 | 9000 | 20.6125070423 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | ads | G | 1213.056 | 1213.056 | 1213.056 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | ads | F | 1213.056 | 1213.056 | 1213.056 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | mk | S | 233.28 | 225.352112676 | 225.352112676 | 0.966015572171 | 1 | 2000 | 9000 | 7.92788732394 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | mk | G | 1049.76 | 1049.76 | 1049.76 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | mk | F | 1049.76 | 1049.76 | 1049.76 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | cr | S | 419.904 | 405.633802817 | 405.633802817 | 0.966015572171 | 1 | 2000 | 9000 | 14.2701971831 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | cr | G | 524.88 | 524.88 | 524.88 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | cr | F | 104.976 | 104.976 | 104.976 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | st | S | 524.88 | 507.042253521 | 507.042253521 | 0.966015572171 | 1 | 2000 | 9000 | 17.8377464789 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | st | G | 524.88 | 524.88 | 524.88 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | st | F | 116.64 | 116.64 | 116.64 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | rf | S | 285.768 | 276.056338028 | 276.056338028 | 0.966015572171 | 1 | 2000 | 9000 | 9.71166197183 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | rf | G | 408.24 | 408.24 | 408.24 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Feb | rf | F | 122.472 | 122.472 | 122.472 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | ads | S | 606.528 | 585.915492958 | 585.915492958 | 0.966015572171 | 1 | 2000 | 9000 | 20.6125070423 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | ads | G | 1213.056 | 1213.056 | 1213.056 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | ads | F | 1213.056 | 1213.056 | 1213.056 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | mk | S | 233.28 | 225.352112676 | 225.352112676 | 0.966015572171 | 1 | 2000 | 9000 | 7.92788732394 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | mk | G | 1049.76 | 1049.76 | 1049.76 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | mk | F | 1049.76 | 1049.76 | 1049.76 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | cr | S | 419.904 | 405.633802817 | 405.633802817 | 0.966015572171 | 1 | 2000 | 9000 | 14.2701971831 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | cr | G | 524.88 | 524.88 | 524.88 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | cr | F | 104.976 | 104.976 | 104.976 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | st | S | 524.88 | 507.042253521 | 507.042253521 | 0.966015572171 | 1 | 2000 | 9000 | 17.8377464789 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | st | G | 524.88 | 524.88 | 524.88 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | st | F | 116.64 | 116.64 | 116.64 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | rf | S | 285.768 | 276.056338028 | 276.056338028 | 0.966015572171 | 1 | 2000 | 9000 | 9.71166197183 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | rf | G | 408.24 | 408.24 | 408.24 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Recommended | B1 + B2 + shift from Feb | Mar | rf | F | 122.472 | 122.472 | 122.472 | 0.966015572171 | 1 | 2000 | 9000 | 0 | 0 |
| Rohan price push | A | Feb | ads | S | 585 | 585 | 443.368421053 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 141.631578947 |
| Rohan price push | A | Feb | ads | G | 1365 | 1365 | 1034.52631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 330.473684211 |
| Rohan price push | A | Feb | ads | F | 1950 | 1950 | 1477.89473684 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 472.105263158 |
| Rohan price push | A | Feb | mk | S | 150 | 150 | 113.684210526 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 36.3157894737 |
| Rohan price push | A | Feb | mk | G | 1200 | 1200 | 909.473684211 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 290.526315789 |
| Rohan price push | A | Feb | mk | F | 1650 | 1650 | 1250.52631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 399.473684211 |
| Rohan price push | A | Feb | cr | S | 360 | 360 | 272.842105263 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 87.1578947368 |
| Rohan price push | A | Feb | cr | G | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Feb | cr | F | 90 | 90 | 68.2105263158 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 21.7894736842 |
| Rohan price push | A | Feb | st | S | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Feb | st | G | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Feb | st | F | 100 | 100 | 75.7894736842 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 24.2105263158 |
| Rohan price push | A | Feb | rf | S | 245 | 245 | 185.684210526 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 59.3157894737 |
| Rohan price push | A | Feb | rf | G | 350 | 350 | 265.263157895 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 84.7368421053 |
| Rohan price push | A | Feb | rf | F | 105 | 105 | 79.5789473684 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 25.4210526316 |
| Rohan price push | A | Mar | ads | S | 585 | 585 | 443.368421053 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 141.631578947 |
| Rohan price push | A | Mar | ads | G | 1365 | 1365 | 1034.52631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 330.473684211 |
| Rohan price push | A | Mar | ads | F | 1950 | 1950 | 1477.89473684 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 472.105263158 |
| Rohan price push | A | Mar | mk | S | 150 | 150 | 113.684210526 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 36.3157894737 |
| Rohan price push | A | Mar | mk | G | 1200 | 1200 | 909.473684211 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 290.526315789 |
| Rohan price push | A | Mar | mk | F | 1650 | 1650 | 1250.52631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 399.473684211 |
| Rohan price push | A | Mar | cr | S | 360 | 360 | 272.842105263 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 87.1578947368 |
| Rohan price push | A | Mar | cr | G | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Mar | cr | F | 90 | 90 | 68.2105263158 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 21.7894736842 |
| Rohan price push | A | Mar | st | S | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Mar | st | G | 450 | 450 | 341.052631579 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 108.947368421 |
| Rohan price push | A | Mar | st | F | 100 | 100 | 75.7894736842 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 24.2105263158 |
| Rohan price push | A | Mar | rf | S | 245 | 245 | 185.684210526 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 59.3157894737 |
| Rohan price push | A | Mar | rf | G | 350 | 350 | 265.263157895 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 84.7368421053 |
| Rohan price push | A | Mar | rf | F | 105 | 105 | 79.5789473684 | 1 | 0.757894736842 | 2000 | 7200 | 0 | 25.4210526316 |
| Rohan price push with shift | A + shift from Feb | Feb | ads | S | 585 | 585 | 554.210526316 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 30.7894736842 |
| Rohan price push with shift | A + shift from Feb | Feb | ads | G | 1365 | 1365 | 1293.15789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 71.8421052632 |
| Rohan price push with shift | A + shift from Feb | Feb | ads | F | 1950 | 1950 | 1847.36842105 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 102.631578947 |
| Rohan price push with shift | A + shift from Feb | Feb | mk | S | 150 | 150 | 142.105263158 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 7.89473684211 |
| Rohan price push with shift | A + shift from Feb | Feb | mk | G | 1200 | 1200 | 1136.84210526 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 63.1578947368 |
| Rohan price push with shift | A + shift from Feb | Feb | mk | F | 1650 | 1650 | 1563.15789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 86.8421052632 |
| Rohan price push with shift | A + shift from Feb | Feb | cr | S | 360 | 360 | 341.052631579 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 18.9473684211 |
| Rohan price push with shift | A + shift from Feb | Feb | cr | G | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Feb | cr | F | 90 | 90 | 85.2631578947 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 4.73684210526 |
| Rohan price push with shift | A + shift from Feb | Feb | st | S | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Feb | st | G | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Feb | st | F | 100 | 100 | 94.7368421053 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 5.26315789474 |
| Rohan price push with shift | A + shift from Feb | Feb | rf | S | 245 | 245 | 232.105263158 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 12.8947368421 |
| Rohan price push with shift | A + shift from Feb | Feb | rf | G | 350 | 350 | 331.578947368 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 18.4210526316 |
| Rohan price push with shift | A + shift from Feb | Feb | rf | F | 105 | 105 | 99.4736842105 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 5.52631578947 |
| Rohan price push with shift | A + shift from Feb | Mar | ads | S | 585 | 585 | 554.210526316 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 30.7894736842 |
| Rohan price push with shift | A + shift from Feb | Mar | ads | G | 1365 | 1365 | 1293.15789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 71.8421052632 |
| Rohan price push with shift | A + shift from Feb | Mar | ads | F | 1950 | 1950 | 1847.36842105 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 102.631578947 |
| Rohan price push with shift | A + shift from Feb | Mar | mk | S | 150 | 150 | 142.105263158 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 7.89473684211 |
| Rohan price push with shift | A + shift from Feb | Mar | mk | G | 1200 | 1200 | 1136.84210526 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 63.1578947368 |
| Rohan price push with shift | A + shift from Feb | Mar | mk | F | 1650 | 1650 | 1563.15789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 86.8421052632 |
| Rohan price push with shift | A + shift from Feb | Mar | cr | S | 360 | 360 | 341.052631579 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 18.9473684211 |
| Rohan price push with shift | A + shift from Feb | Mar | cr | G | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Mar | cr | F | 90 | 90 | 85.2631578947 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 4.73684210526 |
| Rohan price push with shift | A + shift from Feb | Mar | st | S | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Mar | st | G | 450 | 450 | 426.315789474 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 23.6842105263 |
| Rohan price push with shift | A + shift from Feb | Mar | st | F | 100 | 100 | 94.7368421053 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 5.26315789474 |
| Rohan price push with shift | A + shift from Feb | Mar | rf | S | 245 | 245 | 232.105263158 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 12.8947368421 |
| Rohan price push with shift | A + shift from Feb | Mar | rf | G | 350 | 350 | 331.578947368 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 18.4210526316 |
| Rohan price push with shift | A + shift from Feb | Mar | rf | F | 105 | 105 | 99.4736842105 | 1 | 0.947368421053 | 2000 | 9000 | 0 | 5.52631578947 |
| Kabir report and warranty without shift | B1 + B2 | Feb | ads | S | 606.528 | 585.915492958 | 506.572212958 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 20.6125070423 | 79.3432799996 |
| Kabir report and warranty without shift | B1 + B2 | Feb | ads | G | 1213.056 | 1213.056 | 1048.78684682 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 164.26915318 |
| Kabir report and warranty without shift | B1 + B2 | Feb | ads | F | 1213.056 | 1213.056 | 1048.78684682 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 164.26915318 |
| Kabir report and warranty without shift | B1 + B2 | Feb | mk | S | 233.28 | 225.352112676 | 194.835466522 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 7.92788732394 | 30.5166461537 |
| Kabir report and warranty without shift | B1 + B2 | Feb | mk | G | 1049.76 | 1049.76 | 907.604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 142.155997944 |
| Kabir report and warranty without shift | B1 + B2 | Feb | mk | F | 1049.76 | 1049.76 | 907.604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 142.155997944 |
| Kabir report and warranty without shift | B1 + B2 | Feb | cr | S | 419.904 | 405.633802817 | 350.70383974 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 14.2701971831 | 54.9299630766 |
| Kabir report and warranty without shift | B1 + B2 | Feb | cr | G | 524.88 | 524.88 | 453.802001028 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 71.0779989721 |
| Kabir report and warranty without shift | B1 + B2 | Feb | cr | F | 104.976 | 104.976 | 90.7604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 14.2155997944 |
| Kabir report and warranty without shift | B1 + B2 | Feb | st | S | 524.88 | 507.042253521 | 438.379799675 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 17.8377464789 | 68.6624538458 |
| Kabir report and warranty without shift | B1 + B2 | Feb | st | G | 524.88 | 524.88 | 453.802001028 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 71.0779989721 |
| Kabir report and warranty without shift | B1 + B2 | Feb | st | F | 116.64 | 116.64 | 100.844889117 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 15.7951108827 |
| Kabir report and warranty without shift | B1 + B2 | Feb | rf | S | 285.768 | 276.056338028 | 238.67344649 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 9.71166197183 | 37.3828915383 |
| Kabir report and warranty without shift | B1 + B2 | Feb | rf | G | 408.24 | 408.24 | 352.957111911 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 55.2828880894 |
| Kabir report and warranty without shift | B1 + B2 | Feb | rf | F | 122.472 | 122.472 | 105.887133573 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 16.5848664268 |
| Kabir report and warranty without shift | B1 + B2 | Mar | ads | S | 606.528 | 585.915492958 | 506.572212958 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 20.6125070423 | 79.3432799996 |
| Kabir report and warranty without shift | B1 + B2 | Mar | ads | G | 1213.056 | 1213.056 | 1048.78684682 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 164.26915318 |
| Kabir report and warranty without shift | B1 + B2 | Mar | ads | F | 1213.056 | 1213.056 | 1048.78684682 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 164.26915318 |
| Kabir report and warranty without shift | B1 + B2 | Mar | mk | S | 233.28 | 225.352112676 | 194.835466522 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 7.92788732394 | 30.5166461537 |
| Kabir report and warranty without shift | B1 + B2 | Mar | mk | G | 1049.76 | 1049.76 | 907.604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 142.155997944 |
| Kabir report and warranty without shift | B1 + B2 | Mar | mk | F | 1049.76 | 1049.76 | 907.604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 142.155997944 |
| Kabir report and warranty without shift | B1 + B2 | Mar | cr | S | 419.904 | 405.633802817 | 350.70383974 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 14.2701971831 | 54.9299630766 |
| Kabir report and warranty without shift | B1 + B2 | Mar | cr | G | 524.88 | 524.88 | 453.802001028 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 71.0779989721 |
| Kabir report and warranty without shift | B1 + B2 | Mar | cr | F | 104.976 | 104.976 | 90.7604002056 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 14.2155997944 |
| Kabir report and warranty without shift | B1 + B2 | Mar | st | S | 524.88 | 507.042253521 | 438.379799675 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 17.8377464789 | 68.6624538458 |
| Kabir report and warranty without shift | B1 + B2 | Mar | st | G | 524.88 | 524.88 | 453.802001028 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 71.0779989721 |
| Kabir report and warranty without shift | B1 + B2 | Mar | st | F | 116.64 | 116.64 | 100.844889117 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 15.7951108827 |
| Kabir report and warranty without shift | B1 + B2 | Mar | rf | S | 285.768 | 276.056338028 | 238.67344649 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 9.71166197183 | 37.3828915383 |
| Kabir report and warranty without shift | B1 + B2 | Mar | rf | G | 408.24 | 408.24 | 352.957111911 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 55.2828880894 |
| Kabir report and warranty without shift | B1 + B2 | Mar | rf | F | 122.472 | 122.472 | 105.887133573 | 0.966015572171 | 0.864582382693 | 2000 | 7200 | 0 | 16.5848664268 |
| Store managers trade in | C | Feb | ads | S | 520 | 520 | 499.2 | 1 | 0.96 | 2255 | 7200 | 0 | 20.8 |
| Store managers trade in | C | Feb | ads | G | 1040 | 1040 | 998.4 | 1 | 0.96 | 2255 | 7200 | 0 | 41.6 |
| Store managers trade in | C | Feb | ads | F | 1040 | 1040 | 998.4 | 1 | 0.96 | 2255 | 7200 | 0 | 41.6 |
| Store managers trade in | C | Feb | mk | S | 200 | 200 | 192 | 1 | 0.96 | 2255 | 7200 | 0 | 8 |
| Store managers trade in | C | Feb | mk | G | 900 | 900 | 864 | 1 | 0.96 | 2255 | 7200 | 0 | 36 |
| Store managers trade in | C | Feb | mk | F | 900 | 900 | 864 | 1 | 0.96 | 2255 | 7200 | 0 | 36 |
| Store managers trade in | C | Feb | cr | S | 360 | 360 | 345.6 | 1 | 0.96 | 2255 | 7200 | 0 | 14.4 |
| Store managers trade in | C | Feb | cr | G | 450 | 450 | 432 | 1 | 0.96 | 2255 | 7200 | 0 | 18 |
| Store managers trade in | C | Feb | cr | F | 90 | 90 | 86.4 | 1 | 0.96 | 2255 | 7200 | 0 | 3.6 |
| Store managers trade in | C | Feb | st | S | 450 | 450 | 432 | 1 | 0.96 | 2255 | 7200 | 0 | 18 |
| Store managers trade in | C | Feb | st | G | 450 | 450 | 432 | 1 | 0.96 | 2255 | 7200 | 0 | 18 |
| Store managers trade in | C | Feb | st | F | 100 | 100 | 96 | 1 | 0.96 | 2255 | 7200 | 0 | 4 |
| Store managers trade in | C | Feb | rf | S | 245 | 245 | 235.2 | 1 | 0.96 | 2255 | 7200 | 0 | 9.8 |
| Store managers trade in | C | Feb | rf | G | 350 | 350 | 336 | 1 | 0.96 | 2255 | 7200 | 0 | 14 |
| Store managers trade in | C | Feb | rf | F | 105 | 105 | 100.8 | 1 | 0.96 | 2255 | 7200 | 0 | 4.2 |
| Store managers trade in | C | Feb | ti | S | 120 | 120 | 115.2 | 1 | 0.96 | 2255 | 7200 | 0 | 4.8 |
| Store managers trade in | C | Feb | ti | G | 150 | 150 | 144 | 1 | 0.96 | 2255 | 7200 | 0 | 6 |
| Store managers trade in | C | Feb | ti | F | 30 | 30 | 28.8 | 1 | 0.96 | 2255 | 7200 | 0 | 1.2 |
| Store managers trade in | C | Mar | ads | S | 520 | 520 | 483.720930233 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 36.2790697674 |
| Store managers trade in | C | Mar | ads | G | 1040 | 1040 | 967.441860465 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 72.5581395349 |
| Store managers trade in | C | Mar | ads | F | 1040 | 1040 | 967.441860465 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 72.5581395349 |
| Store managers trade in | C | Mar | mk | S | 200 | 200 | 186.046511628 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 13.9534883721 |
| Store managers trade in | C | Mar | mk | G | 900 | 900 | 837.209302326 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 62.7906976744 |
| Store managers trade in | C | Mar | mk | F | 900 | 900 | 837.209302326 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 62.7906976744 |
| Store managers trade in | C | Mar | cr | S | 360 | 360 | 334.88372093 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 25.1162790698 |
| Store managers trade in | C | Mar | cr | G | 450 | 450 | 418.604651163 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 31.3953488372 |
| Store managers trade in | C | Mar | cr | F | 90 | 90 | 83.7209302326 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 6.27906976744 |
| Store managers trade in | C | Mar | st | S | 450 | 450 | 418.604651163 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 31.3953488372 |
| Store managers trade in | C | Mar | st | G | 450 | 450 | 418.604651163 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 31.3953488372 |
| Store managers trade in | C | Mar | st | F | 100 | 100 | 93.023255814 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 6.97674418605 |
| Store managers trade in | C | Mar | rf | S | 245 | 245 | 227.906976744 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 17.0930232558 |
| Store managers trade in | C | Mar | rf | G | 350 | 350 | 325.581395349 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 24.4186046512 |
| Store managers trade in | C | Mar | rf | F | 105 | 105 | 97.6744186047 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 7.32558139535 |
| Store managers trade in | C | Mar | ti | S | 216 | 216 | 200.930232558 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 15.0697674419 |
| Store managers trade in | C | Mar | ti | G | 270 | 270 | 251.162790698 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 18.8372093023 |
| Store managers trade in | C | Mar | ti | F | 54 | 54 | 50.2325581395 | 1 | 0.93023255814 | 2459 | 7200 | 0 | 3.76744186047 |
| Battery promise without report | B2 + shift from Feb | Feb | ads | S | 561.6 | 561.6 | 561.6 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | ads | G | 1123.2 | 1123.2 | 1123.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | ads | F | 1123.2 | 1123.2 | 1123.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | mk | S | 216 | 216 | 216 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | mk | G | 972 | 972 | 972 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | mk | F | 972 | 972 | 972 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | cr | S | 388.8 | 388.8 | 388.8 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | cr | G | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | cr | F | 97.2 | 97.2 | 97.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | st | S | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | st | G | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | st | F | 108 | 108 | 108 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | rf | S | 264.6 | 264.6 | 264.6 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | rf | G | 378 | 378 | 378 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Feb | rf | F | 113.4 | 113.4 | 113.4 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | ads | S | 561.6 | 561.6 | 561.6 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | ads | G | 1123.2 | 1123.2 | 1123.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | ads | F | 1123.2 | 1123.2 | 1123.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | mk | S | 216 | 216 | 216 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | mk | G | 972 | 972 | 972 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | mk | F | 972 | 972 | 972 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | cr | S | 388.8 | 388.8 | 388.8 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | cr | G | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | cr | F | 97.2 | 97.2 | 97.2 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | st | S | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | st | G | 486 | 486 | 486 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | st | F | 108 | 108 | 108 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | rf | S | 264.6 | 264.6 | 264.6 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | rf | G | 378 | 378 | 378 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Battery promise without report | B2 + shift from Feb | Mar | rf | F | 113.4 | 113.4 | 113.4 | 1 | 1 | 2000 | 9000 | 0 | 0 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ads | S | 606.528 | 606.528 | 502.06500745 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 104.46299255 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ads | G | 1213.056 | 1213.056 | 1004.1300149 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 208.9259851 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ads | F | 1213.056 | 1213.056 | 1004.1300149 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 208.9259851 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | mk | S | 233.28 | 233.28 | 193.101925942 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 40.1780740577 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | mk | G | 1049.76 | 1049.76 | 868.95866674 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 180.80133326 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | mk | F | 1049.76 | 1049.76 | 868.95866674 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 180.80133326 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | cr | S | 419.904 | 419.904 | 347.583466696 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 72.3205333039 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | cr | G | 524.88 | 524.88 | 434.47933337 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 90.4006666299 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | cr | F | 104.976 | 104.976 | 86.895866674 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 18.080133326 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | st | S | 524.88 | 524.88 | 434.47933337 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 90.4006666299 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | st | G | 524.88 | 524.88 | 434.47933337 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 90.4006666299 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | st | F | 116.64 | 116.64 | 96.5509629711 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 20.0890370289 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | rf | S | 285.768 | 285.768 | 236.549859279 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 49.2181407207 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | rf | G | 408.24 | 408.24 | 337.928370399 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 70.311629601 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | rf | F | 122.472 | 122.472 | 101.37851112 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 21.0934888803 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ti | S | 120 | 120 | 99.3322664312 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 20.6677335688 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ti | G | 150 | 150 | 124.165333039 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 25.834666961 |
| Report warranty and trade in without shift | B1 + B2 + C | Feb | ti | F | 30 | 30 | 24.8330666078 | 1 | 0.827768886927 | 2255 | 7200 | 0 | 5.1669333922 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ads | S | 606.528 | 606.528 | 488.583856936 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 117.944143064 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ads | G | 1213.056 | 1213.056 | 977.167713871 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 235.888286129 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ads | F | 1213.056 | 1213.056 | 977.167713871 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 235.888286129 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | mk | S | 233.28 | 233.28 | 187.916868052 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 45.3631319478 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | mk | G | 1049.76 | 1049.76 | 845.625906235 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 204.134093765 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | mk | F | 1049.76 | 1049.76 | 845.625906235 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 204.134093765 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | cr | S | 419.904 | 419.904 | 338.250362494 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 81.653637506 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | cr | G | 524.88 | 524.88 | 422.812953117 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 102.067046883 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | cr | F | 104.976 | 104.976 | 84.5625906235 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 20.4134093765 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | st | S | 524.88 | 524.88 | 422.812953117 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 102.067046883 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | st | G | 524.88 | 524.88 | 422.812953117 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 102.067046883 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | st | F | 116.64 | 116.64 | 93.9584340261 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 22.6815659739 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | rf | S | 285.768 | 285.768 | 230.198163364 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 55.5698366361 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | rf | G | 408.24 | 408.24 | 328.854519091 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 79.3854809087 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | rf | F | 122.472 | 122.472 | 98.6563557274 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 23.8156442726 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ti | S | 216 | 216 | 173.997100048 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 42.0028999517 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ti | G | 270 | 270 | 217.49637506 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 52.5036249396 |
| Report warranty and trade in without shift | B1 + B2 + C | Mar | ti | F | 54 | 54 | 43.4992750121 | 1 | 0.805542129853 | 2459 | 7200 | 0 | 10.5007249879 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ads | S | 606.528 | 606.528 | 606.528 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ads | G | 1213.056 | 1213.056 | 1213.056 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ads | F | 1213.056 | 1213.056 | 1213.056 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | mk | S | 233.28 | 233.28 | 233.28 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | mk | G | 1049.76 | 1049.76 | 1049.76 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | mk | F | 1049.76 | 1049.76 | 1049.76 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | cr | S | 419.904 | 419.904 | 419.904 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | cr | G | 524.88 | 524.88 | 524.88 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | cr | F | 104.976 | 104.976 | 104.976 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | st | S | 524.88 | 524.88 | 524.88 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | st | G | 524.88 | 524.88 | 524.88 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | st | F | 116.64 | 116.64 | 116.64 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | rf | S | 285.768 | 285.768 | 285.768 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | rf | G | 408.24 | 408.24 | 408.24 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | rf | F | 122.472 | 122.472 | 122.472 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ti | S | 120 | 120 | 120 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ti | G | 150 | 150 | 150 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Feb | ti | F | 30 | 30 | 30 | 1 | 1 | 2255 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ads | S | 606.528 | 606.528 | 606.528 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ads | G | 1213.056 | 1213.056 | 1213.056 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ads | F | 1213.056 | 1213.056 | 1213.056 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | mk | S | 233.28 | 233.28 | 233.28 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | mk | G | 1049.76 | 1049.76 | 1049.76 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | mk | F | 1049.76 | 1049.76 | 1049.76 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | cr | S | 419.904 | 419.904 | 419.904 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | cr | G | 524.88 | 524.88 | 524.88 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | cr | F | 104.976 | 104.976 | 104.976 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | st | S | 524.88 | 524.88 | 524.88 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | st | G | 524.88 | 524.88 | 524.88 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | st | F | 116.64 | 116.64 | 116.64 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | rf | S | 285.768 | 285.768 | 285.768 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | rf | G | 408.24 | 408.24 | 408.24 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | rf | F | 122.472 | 122.472 | 122.472 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ti | S | 216 | 216 | 216 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ti | G | 270 | 270 | 270 | 1 | 1 | 2459 | 9000 | 0 | 0 |
| Report warranty and trade in with shift | B1 + B2 + C + shift from Feb | Mar | ti | F | 54 | 54 | 54 | 1 | 1 | 2459 | 9000 | 0 | 0 |

## T23. Five conditionally feasible plans and Pareto comparison

Inputs: All 84 permitted plans. Tests: growth <=80 lakh, March EBITDA >=0, March returns <=6%, B1 proxy for claims controls.

Cell definitions: {"sort": "descending unrounded Q1 EBITDA; team objective", "pareto_efficient": "no other feasible plan has no higher growth money, no lower March/Q1 EBITDA, and no higher return rate, with at least one strict gain", "conditional_pass": "Exhibit 5 operating controls remain to be demonstrated"}

| plan | growth_money_lakh | march_ebitda_lakh | q1_ebitda_lakh | march_return_rate | march_delivered | tests | conditional_pass | dominated_by | pareto_efficient |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B1 + B2 + shift from Feb | 58 | 5.60499808329 | -42.9269538334 | 0.0454960366285 | 8327.72 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | [] | True |
| B1 + B2 + shift from Mar | 49 | 5.60499808329 | -57.1652937918 | 0.0454960366285 | 8327.72 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | [] | True |
| B1 + C + shift from Feb | 68 | 1.8969548 | -69.0272644 | 0.0558545454545 | 8316 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | ["B1 + B2 + shift from Feb", "B1 + B2 + shift from Mar"] | False |
| B1 + C + shift from Mar | 59 | 1.8969548 | -76.805932674 | 0.0558545454545 | 8316 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | ["B1 + B2 + shift from Feb", "B1 + B2 + shift from Mar"] | False |
| B1 + B2 + C | 75 | 3.44490043113 | -86.7644225081 | 0.0447263798937 | 7200 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | [] | True |

## T24. March EBITDA by combined order uplift and Good battery swap share

Inputs: {"combined_order_uplift": [0.08, 0.1051264298588438, 0.1664, 0.2], "good_battery_swap_share": [0.4, 0.5, 0.5506389481041294, 0.6], "options": ["B1", "B2"], "shift": true, "other_inputs": {"upA": 0.5, "upB1": 0.08, "upB2": 0.08, "upB3": 0.05, "rrB1": 0.3, "rrB2": 0.2, "gbat": 0.4, "fbat": 0.7, "kcl": 1.0, "rep": 120.0, "pB2": 0.04, "pA": 0.03, "tin_fail": 0.15, "tin_buy": 0.3, "tin_save": 0.08, "pickup": 400.0, "credit": 1000.0, "gbat_c": 1000.0, "fbat_c": 800.0}}

Cell definitions: {"row_axis": "combined order uplift, applied once as 1+u", "column_axis": "Good battery replacement share g, per delivered Good cost g*1000", "march_ebitda_lakh": "delivered contribution less 99 channel fixed, 58 company fixed and 9 shift; report/batteries/claims/returns/commission included", "break_even_rows": "exact uplift root holds Good swaps at 40%", "break_even_columns": "exact Good swap root holds uplift at 16.64%; their intersection need not be zero"}

| combined_order_uplift | good_swap_share | march_ebitda_lakh | delivered |
| --- | --- | --- | --- |
| 0.08 | 0.4 | -3.77421736 | 7776 |
| 0.08 | 0.5 | -7.21941736 | 7776 |
| 0.08 | 0.550638948104 | -8.96403040008 | 7776 |
| 0.08 | 0.6 | -10.66461736 | 7776 |
| 0.105126429859 | 0.4 | 2.84217094304e-14 | 7956.91029498 |
| 0.105126429859 | 0.5 | -3.52535331125 | 7956.91029498 |
| 0.105126429859 | 0.550638948104 | -5.31055514502 | 7956.91029498 |
| 0.105126429859 | 0.6 | -7.0507066225 | 7956.91029498 |
| 0.1664 | 0.4 | 5.60499808329 | 8327.72 |
| 0.1664 | 0.5 | 1.88418208329 | 8327.72 |
| 0.1664 | 0.550638948104 | 0 | 8327.72 |
| 0.1664 | 0.6 | -1.83663391671 | 8327.72 |
| 0.2 | 0.4 | 7.60149308169 | 8510 |
| 0.2 | 0.5 | 3.77349308169 | 8510 |
| 0.2 | 0.550638948104 | 1.83503414826 | 8510 |
| 0.2 | 0.6 | -0.0545069183098 | 8510 |

## T25. Third shift timing and Q1 consequences

Inputs: B1+B2 setups 40 lakh in January; shift 9 lakh each active month; January unchanged.

Cell definitions: {"q1_delta_vs_feb_shift_lakh": "alternative Q1 EBITDA minus February shift Q1 EBITDA", "conditional_pass": "all four numerical screen fields, with claims proxy conditional"}

| plan | growth_money_lakh | march_ebitda_lakh | q1_ebitda_lakh | march_return_rate | march_delivered | tests | conditional_pass | january_ebitda_lakh | february_ebitda_lakh | february_delivered | february_growth_lakh | march_growth_lakh | q1_delta_vs_feb_shift_lakh |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B1 + B2 + shift from Feb | 58 | 5.60499808329 | -42.9269538334 | 0.0454960366285 | 8327.72 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | -54.13695 | 5.60499808329 | 8327.72 | 9 | 9 | 0 |
| B1 + B2 + shift from Mar | 49 | 5.60499808329 | -57.1652937918 | 0.0454960366285 | 8327.72 | {"t1": true, "t2": true, "t3": true, "t4": true} | True | -54.13695 | -8.63334187512 | 7200 | 0 | 9 | -14.2383399584 |
| B1 + B2 | 40 | -8.63334187512 | -71.4036337502 | 0.0454960366285 | 7200 | {"t1": true, "t2": false, "t3": true, "t4": true} | False | -54.13695 | -8.63334187512 | 7200 | 0 | 0 | -28.4766799168 |

## T26. Segment ranking sensitivity to stated judgement weights

Inputs: {"criteria": ["Size", "Contribution per phone", "Q1 room to grow", "Grade return risk", "Worry addressed by B1+B2", "Board-feasible lever reach"], "scores": {"Flagship on a budget": [5, 5, 1, 5, 3, 3], "Value seekers": [4, 1, 5, 1, 1, 1], "Family buyers": [3, 3, 5, 3, 5, 5], "Upgraders": [2, 4, 3, 4, 2, 1]}, "basis": "Inherited T10 team judgement, 1 weak to 5 strong. Size order follows E1C; contribution and capacity follow E2/E4/E6. No measured segment-specific demand elasticity is available."}

Cell definitions: {"weighted_total": "sum(score_i * weight_i)", "weighted_mean": "weighted_total / sum(weights)", "rank": "1 + number of strictly larger totals; ties share rank"}

| scheme | segment | scores | weights | weighted_total | weighted_mean | rank |
| --- | --- | --- | --- | --- | --- | --- |
| Equal | Flagship on a budget | [5, 5, 1, 5, 3, 3] | [1, 1, 1, 1, 1, 1] | 22 | 3.66666666667 | 2 |
| Equal | Value seekers | [4, 1, 5, 1, 1, 1] | [1, 1, 1, 1, 1, 1] | 13 | 2.16666666667 | 4 |
| Equal | Family buyers | [3, 3, 5, 3, 5, 5] | [1, 1, 1, 1, 1, 1] | 24 | 4 | 1 |
| Equal | Upgraders | [2, 4, 3, 4, 2, 1] | [1, 1, 1, 1, 1, 1] | 16 | 2.66666666667 | 3 |
| Double size | Flagship on a budget | [5, 5, 1, 5, 3, 3] | [2, 1, 1, 1, 1, 1] | 27 | 3.85714285714 | 1 |
| Double size | Value seekers | [4, 1, 5, 1, 1, 1] | [2, 1, 1, 1, 1, 1] | 17 | 2.42857142857 | 4 |
| Double size | Family buyers | [3, 3, 5, 3, 5, 5] | [2, 1, 1, 1, 1, 1] | 27 | 3.85714285714 | 1 |
| Double size | Upgraders | [2, 4, 3, 4, 2, 1] | [2, 1, 1, 1, 1, 1] | 18 | 2.57142857143 | 3 |
| Double margin | Flagship on a budget | [5, 5, 1, 5, 3, 3] | [1, 2, 1, 1, 1, 1] | 27 | 3.85714285714 | 1 |
| Double margin | Value seekers | [4, 1, 5, 1, 1, 1] | [1, 2, 1, 1, 1, 1] | 14 | 2 | 4 |
| Double margin | Family buyers | [3, 3, 5, 3, 5, 5] | [1, 2, 1, 1, 1, 1] | 27 | 3.85714285714 | 1 |
| Double margin | Upgraders | [2, 4, 3, 4, 2, 1] | [1, 2, 1, 1, 1, 1] | 20 | 2.85714285714 | 3 |

## T27. Proposed weekly operating definitions and response levels

Inputs: {"weeks_per_month": 4.33, "model_boundary_order_uplift": 0.1051264298588438, "good_swap_break_even": 0.5506389481041294, "return_warning": 0.055, "return_board_limit": 0.06, "good_swap_warning": 0.5}

Cell definitions: {"status": "All owners, cohort conventions, warning periods and actions are proposed management rules, not observed performance. Monthly board tests remain authoritative.", "warning_vs_boundary": "50% Good swaps is a warning; the model boundary is about 55%. Return 6% is a board boundary and is not an EBITDA zero point."}

| metric | definition | owner | planned | warning | boundary | boundary_type | unit | proposed_action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Delivered orders | All-channel delivered phones in the completed week; monthly comparison divided by 4.33. | Growth lead and operations lead | 1923.26096998 | 1837.62362471 | 1837.62362471 | March EBITDA zero at base mix and costs | phones/week | If below this level for two completed weeks, diagnose channel demand and delivery loss; preserve claims controls and retest the full-month forecast. |
| Completed seven-day cohort return rate | Phones returned within seven days divided by phones delivered in the same fully matured sales cohort, aggregated across channels. Exclude immature cohorts. | Customer service lead | 0.0454960366285 | 0.055 | 0.06 | March board test limit; not EBITDA zero | fraction | At 5.5%, inspect grade/channel cohorts and pause misleading creative; at 6%, escalate to CEO and correct the operating cause. |
| Good battery replacement share | Good phones requiring replacement divided by Good phones tested in the same relevant batch. Keep batch counts and tracker version. | Lab lead | 0.4 | 0.5 | 0.550638948104 | March EBITDA zero holding all other base inputs | fraction | At 50%, audit supplier lots and tester calibration; near 55.06%, rerun sourcing and margin economics before accepting further lots. |

## T28. April trade-in ramp, setup payment and recovery

Inputs: {"setup_lakh": 35.0, "tradein_ramp": [1000, 1800, 2600, 3400, 4000], "assumption": "A15: new next-quarter growth funding; April launch restarts the case ramp at 1000. Keep B1+B2 and February third shift running. No second B1/B2 setup charge. Months after August held at 4000."}

Cell definitions: {"ongoing_ebitda_lakh": "contribution after marketing minus 58 company fixed minus 9 shift, before C setup", "incremental_ongoing_ebitda_lakh": "ongoing EBITDA minus keep-plan ongoing EBITDA", "setup_cash_lakh": "35 in April, zero thereafter; under case convention also deduct from April EBITDA", "month_ebitda_after_setup_lakh": "ongoing EBITDA minus setup in that month", "cumulative_incremental_benefit_after_setup_lakh": "sum incremental ongoing EBITDA since April minus one-off 35", "payback": "first cumulative nonnegative month; fractional estimate assumes within-month incremental benefit accrues evenly, not a promised cash-flow forecast"}

Payback: {"month_index": 2, "month": "May", "fraction_of_month": 0.7489408766967244, "elapsed_months": 1.7489408766967243}

Payback-method correction: Inherited 2.2 months holds first-month incremental benefit constant. Ramp-aware cumulative incremental recovery occurs during May, interpolated about 1.75 months. Never divide setup by total company EBITDA.

| month | tradeins | passed_tradeins | incremental_buyer_demand | incremental_buyer_delivered | delivered | demand | sourcing_savings_lakh | pickup_cost_lakh | buyer_credit_lakh | ongoing_ebitda_lakh | keep_plan_ebitda_lakh | incremental_ongoing_ebitda_lakh | setup_cash_lakh | month_ebitda_after_setup_lakh | month_incremental_after_setup_lakh | cumulative_incremental_benefit_after_setup_lakh | return_rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| April | 1000 | 850 | 300 | 300 | 8698.08 | 8698.08 | 8.5272 | 4 | 3 | 21.4290092512 | 5.60499808329 | 15.8240111679 | 35 | -13.5709907488 | -19.1759888321 | -19.1759888321 | 0.0449715755201 |
| May | 1800 | 1530 | 540 | 540 | 8938.08 | 8938.08 | 15.34896 | 7.2 | 5.4 | 31.2091404512 | 5.60499808329 | 25.6041423679 | 0 | 31.2091404512 | 25.6041423679 | 6.42815353582 | 0.0447263798937 |
| June | 2600 | 2210 | 780 | 764.865854296 | 9000 | 9178.08 | 22.17072 | 10.4 | 7.64865854296 | 37.201494722 | 5.60499808329 | 31.5964966387 | 0 | 37.201494722 | 31.5964966387 | 38.0246501746 | 0.0444940076356 |
| July | 3400 | 2890 | 1020 | 974.720962234 | 9000 | 9418.08 | 28.99248 | 13.6 | 9.74720962234 | 41.8300368758 | 5.60499808329 | 36.2250387925 | 0 | 41.8300368758 | 36.2250387925 | 74.2496889671 | 0.044273478416 |
| August | 4000 | 3400 | 1200 | 1125.22504501 | 9000 | 9598.08 | 34.1088 | 16 | 11.2522504501 | 45.2684018434 | 5.60499808329 | 39.6634037601 | 0 | 45.2684018434 | 39.6634037601 | 113.913092727 | 0.0441153190638 |
| September | 4000 | 3400 | 1200 | 1125.22504501 | 9000 | 9598.08 | 34.1088 | 16 | 11.2522504501 | 45.2684018434 | 5.60499808329 | 39.6634037601 | 0 | 45.2684018434 | 39.6634037601 | 153.576496487 | 0.0441153190638 |
| October | 4000 | 3400 | 1200 | 1125.22504501 | 9000 | 9598.08 | 34.1088 | 16 | 11.2522504501 | 45.2684018434 | 5.60499808329 | 39.6634037601 | 0 | 45.2684018434 | 39.6634037601 | 193.239900247 | 0.0441153190638 |
| November | 4000 | 3400 | 1200 | 1125.22504501 | 9000 | 9598.08 | 34.1088 | 16 | 11.2522504501 | 45.2684018434 | 5.60499808329 | 39.6634037601 | 0 | 45.2684018434 | 39.6634037601 | 232.903304007 | 0.0441153190638 |

## T29. Material assumption alternatives and consequences

Inputs: All alternatives hold remaining exhibit inputs fixed. Rejected readings diagnose model errors and are not permitted Q1 strategies.

Cell definitions: {"q1_delta_vs_canonical_same_plan_lakh": "alternative calculation minus canonical same levers/shift result", "April scope": "post-Q1, requires fresh funding and explicit ramp assumption", "compliance": "B1 screen is conditional; removing the proxy cannot demonstrate compliance or price missing controls"}

| reading | scope | plan | march_ebitda_lakh | q1_ebitda_lakh | q1_delta_vs_canonical_same_plan_lakh | march_return_rate | growth_money_lakh | tests | basis | interpretation | tradeins | ongoing_ebitda_lakh | after_setup_lakh | incremental_ongoing_vs_keep_lakh | sample_fail_share | extrapolated_monthly_below_claim | incremental_q1_ebitda_lakh | monthly_from_annual_lakh | exhibit_monthly_lakh | monthly_difference_lakh | q1_difference_if_repeated_lakh |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Canonical multiplicative effects | Jan to Mar | B1 + B2 + shift from Feb | 5.60499808329 | -42.9269538334 | 0 | 0.0454960366285 | 58 | {"t1": true, "t2": true, "t3": true, "t4": true} | C-E6H2 explicitly says multiply order and return effects. | Retain |  |  |  |  |  |  |  |  |  |  |  |
| Only passed trade-in participants buy | Jan to Mar | B1 + B2 + C + shift from Feb | 29.1306901712 | -39.7319451776 | -3.23314488 | 0.0448076478478 | 93 | {"t1": false, "t2": true, "t3": true, "t4": true} | A07: 30% of people who trade in is read as all participants. Alternative restricts to passed phones. | Disclose sensitivity; case wording supports canonical all-participant reading |  |  |  |  |  |  |  |  |  |  |  |
| All trade-in failures concentrated in Superb | Jan to Mar | B1 + B2 + C + shift from Feb | 29.2456908064 | -41.1442220989 | -4.64542180133 | 0.0447682633527 | 93 | {"t1": false, "t2": true, "t3": true, "t4": true} | A06 assumes the 15% failure rate is proportional across grades. This alternative puts all failed units in Superb, leaving total passed units unchanged. | Sensitivity only: grade-level failure rates are absent from the case |  |  |  |  |  |  |  |  |  |  |  |
| All trade-in failures concentrated in Fair | Jan to Mar | B1 + B2 + C + shift from Feb | 32.4057804512 | -34.6373602976 | 1.86144 | 0.0447263798937 | 93 | {"t1": false, "t2": true, "t3": true, "t4": true} | A06 alternative puts all failed units in Fair; total passed units remain 85%. | Sensitivity only: neither concentration is evidenced |  |  |  |  |  |  |  |  |  |  |  |
| Add B1 and B2 return reductions | Jan to Mar | B1 + B2 + shift from Feb | 6.33569185915 | -41.4655662817 | 1.46138755173 | 0.0406214612755 | 58 | {"t1": true, "t2": true, "t3": true, "t4": true} | Would retain 50% of former rates, rather than 56%. | Reject: C-E6H2 requires multiplication |  |  |  |  |  |  |  |  |  |  |  |
| MegaKart commission retains original prices | Jan to Mar | B1 + B2 + shift from Feb | 6.67081939709 | -40.7953112058 | 2.13164262761 | 0.0454960366285 | 58 | {"t1": true, "t2": true, "t3": true, "t4": true} | Would fail to raise commission on Superb and Good when B2 price rises. | Reject: C-E3N2 commission is 12% of selling price |  |  |  |  |  |  |  |  |  |  |  |
| Savings paid on failed trade-ins too | Jan to Mar | B1 + B2 + C + shift from Feb | 33.9177804512 | -32.2853602976 | 4.21344 | 0.0447263798937 | 93 | {"t1": false, "t2": true, "t3": true, "t4": true} | A20 charges savings only on passed phones; failed phones recover acquisition cost as parts. | Reject: C-E6TI3 limits savings to phones that pass |  |  |  |  |  |  |  |  |  |  |  |
| Pickup charged on passed phones only | Jan to Mar | B1 + B2 + C + shift from Feb | 32.2891404512 | -34.8188002976 | 1.68 | 0.0447263798937 | 93 | {"t1": false, "t2": true, "t3": true, "t4": true} | A failed trade-in still had a pickup. | Reject: C-E6TI2 charges every pickup |  |  |  |  |  |  |  |  |  |  |  |
| Restart April ramp | April only |  |  |  |  |  |  |  | A15. If C was deferred in Q1, restarting at 1000 is the stated team assumption. A continued calendar ramp at 2600 is an alternative, not case-confirmed. | Scenario comparison; secure new funding before either | 1000 | 21.4290092512 | -13.5709907488 | 15.8240111679 |  |  |  |  |  |  |  |
| Continue original calendar ramp | April only |  |  |  |  |  |  |  | A15. If C was deferred in Q1, restarting at 1000 is the stated team assumption. A continued calendar ramp at 2600 is an alternative, not case-confirmed. | Scenario comparison; secure new funding before either | 2600 | 37.201494722 | 2.20149472203 | 31.5964966387 |  |  |  |  |  |  |  |
| Good battery sample extrapolation | diagnostic only |  |  |  |  |  |  |  | A14 extrapolates a sample to show indicative scale; no downgrade/scrap rate or remediation cost was specified. | Keep qualitative limitation; do not charge an invented Q1 loss |  |  |  |  | 0.11 | 350.9 | 0 |  |  |  |  |
| Use annual rounded EBITDA as monthly baseline | historical reconciliation only |  |  |  |  |  |  |  | LTM and Exhibit 3 averages cover different/rounded historical scopes. | Reject replacement: preserve case facts and use exhibit-built monthly model |  |  |  |  |  |  |  | -14.1666666667 | -14.13695 | -0.0297166666667 | -0.08915 |

## Checks

- PASS: T22 both months all selected plans complete
- PASS: T22 each channel-grade demand reconciles
- PASS: T23 contains five conditionally feasible plans
- PASS: T24 contains 16 distinct intersections
- PASS: T24 combined uplift applied once
- PASS: T24 exact single-input boundaries return zero
- PASS: T25 March and no shift comparison complete
- PASS: T26 family ranks first all stated weights
- PASS: T27 weekly figures independently reconcile
- PASS: T27 warns separately from failure boundaries
- PASS: T28 setup charged exactly once
- PASS: T28 cumulative recovery and April EBITDA separate
- PASS: T29 alternative calculations remain scoped


## Appendix C: Glossary and short forms

This glossary defines terms as used in the DOBAARA case and model. A familiar business term can carry a different denominator or cost layer in another setting, so the working definition should be stated before comparing figures. External technical and legal detail remains in sections 12 to 17; the entries here do not introduce new outside facts. [C-R1, C-F4]

Table AC-01. Economics and decision terms

| Term | Meaning in this report |
|---|---|
| Contribution before marketing | Selling price less acquisition, testing and repair, packing/payment and expected warranty and return costs. It precedes marketplace commission, channel fixed spend and referral coupons. It is not company profit. [T2-T4] |
| Contribution after marketing | Delivered channel contribution after commission, channel fixed spend and coupons. Channel totals feed the company bridge; they still precede the separate company fixed-cost layer and relevant growth charges. [T4-T5] |
| EBITDA | The case's operating measure after company fixed costs and growth money in the month spent. Setup is deducted under the exercise convention; the report does not substitute a different accounting treatment. [C-D1, C-E6H3] |
| Expected expense | An event's probability multiplied by its stated cost and relevant delivered volume. Fractional expected counts are averages, not claims that a fraction of a physical phone was returned. [C-E2N1, C-D2] |
| Warranty claim | A separate service event with a grade-specific rate and stated event cost. It is not automatically the same event or person as a return; overlap is not supplied. [C-E2N1, C-E6B2] |
| Return expense | The stated cost on the returned share. The case recovers the sale through resale, so the model does not reverse the full selling price again. [C-E2N2] |
| Channel fixed spend | Existing channel expenditure retained under A02. It is different from variable commission and coupons, and different from the company fixed costs. [C-E3, A02] |
| Company fixed costs | The separate monthly layer for the stated lab staff, rent, technology and head office. It is deducted after channel contribution, rather than hidden inside a per-phone margin. [C-CO4, T5] |
| Growth money | Setup, shift and specified monthly option expenses counted once in their spending month. Per-phone reports, batteries, pickups and credits reduce contribution instead of this ledger. [C-E6H3] |
| Commission | MegaKart's percentage of actual selling price on delivered phones. A B2 price increase changes the fee; a zero dashboard acquisition-spend label does not eliminate it. [C-E3N2, A11] |
| Referral coupon | The delivered-order incentive charged in the referral channel. Its exact baseline total is retained in working even when a protected source table displays rounded lakh. [C-E3N5, T4] |
| Feasible plan | A plan passing the modeled board screen, with the claims test still conditional on actual Exhibit 5 implementation. Feasibility is not a guarantee of realized performance. [T13, C-F16] |
| Selection objective | The team's rule of maximizing full-precision Q1 EBITDA among feasible plans. It is a stated decision criterion rather than an optimization instruction attributed to the case. [T23] |
| Local break-even | An input value where March EBITDA reaches zero while other base inputs remain fixed. It does not guarantee profitability when several inputs change together. [T24] |
| Warning | A proposed management response level before or alongside a boundary. A warning does not amend the board test and is not evidence of statistical significance. [T27] |
| Board limit | A condition set by the case, such as the maximum return rate. The return limit is not the same as the financial zero point. [C-T3t, T27] |
| Incremental benefit | The difference between the new option's ongoing result and the specified keep-plan baseline. It is the relevant flow for the setup-recovery comparison. [T28] |
| Ramp-aware payback | Cumulative incremental benefit recovering setup as arrivals change over time. The fractional estimate assumes even accrual within the recovery month and is not a cash-flow promise. [T28] |

Table AC-02. Demand, evidence and operating terms

| Term | Meaning in this report |
|---|---|
| Demand | Requested orders after eligible option effects and separate incremental trade-in buyer demand. It can exceed stock or lab output and should not automatically be counted as sales. [C-E6H2, T22] |
| Delivered phones | Orders remaining after Superb rationing and total-lab rationing. This volume determines revenue and specified delivered-phone costs, as well as the return-rate denominator. [C-E6H4, A03] |
| Sellable capacity | The case's output available for sale after its stated testing failure treatment. The third-shift increment is already sellable, so no second failure deduction is applied. [C-E4a, C-E6SH] |
| Superb supply cap | Availability of the particular grade from wholesale sourcing. Unused total lab capacity does not create extra Superb stock or justify automatic grade substitution. [C-E4b, C-E6H4] |
| Rationing | The specified proportional reduction: Superb across channels first, then all remaining orders if total capacity binds. It is not discretionary prioritization of the most profitable channel. [C-E6H4] |
| Grade mix | The distribution of delivered phones across Superb, Good and Fair. A channel's contribution can change because its mix changes even if each grade's unit formula is unchanged. [C-E3, T4] |
| Return multiplier | A channel adjustment to a grade's return rate, retained when B1 and B2 apply. It affects expected cost and must not be confused with a demand multiplier. [A05, A19] |
| Completed cohort | Delivered phones whose full return window has elapsed under the proposed weekly convention. Immature deliveries are excluded so recent sales cannot dilute the observed cohort result. [T27] |
| Replacement share | Good phones needing replacement divided by Good phones tested in the relevant batch. It is not the share of all company sales or the fraction of customer complaints. [T27] |
| Trade-in sourcing flow | Submitted phones that can replace wholesale purchases if they pass. This flow creates savings and grade availability; it is different from participants buying another phone. [C-E6TI2-C-E6TI4] |
| Incremental trade-in buyer | A participant creating separate purchase demand under the stated share and mix. That demand is not multiplied by the ordinary lever uplifts. [C-E6H2, C-E6TI4] |
| Tikau Report | B1's own-lab condition report with the specified unit evidence. It does not establish third-party certification, manufacturer authorization or accreditation. [C-E6B1] |
| Compatible battery | A replacement described in the case as not brand-made. Its working condition does not justify blanket genuine-parts language; origin and function remain different claims. [C-E5b] |
| Claim substantiation | Evidence supporting the exact public statement for the shown unit. A paid setup or general policy does not prove that every required record exists. [C-E5a] |
| Verified buyer | Review eligibility linked to an actual purchase under the case rule. A real account or a favorable opinion alone is insufficient. Rewards remain disclosed and sentiment-independent. [C-E5e] |
| Primary research proposed | Interviews and page tests designed for future execution. Their protocol is useful, but no result, quotation, uplift or willingness-to-pay finding is invented before data collection. [C-R3, section 33] |
| Team judgment | A reasoned score or qualitative priority chosen by the authors. Its arithmetic can be reproducible while the underlying assessment remains subjective and open to challenge. [T26, section 32] |
| Context evidence | Verified outside material explaining setting or mechanisms. It is isolated from the closed-data model, case-result tables and assessed slide statistics. [C-F4, sections 12-17] |

These definitions should travel with any revised comparison. If a speaker changes a denominator, baseline, period or cost layer, the result is no longer directly comparable even when its label sounds familiar. The rebuild should make that change explicit before interpreting a difference. [C-R3, C-R5]


## Appendix D: Case ambiguities, our readings and method limits

The canonical result is conditional on explicit readings, not on an assertion that the case contains every operating detail. This appendix distinguishes missing inputs from clear instructions, reporting conventions and external-source limitations. Section 34 explains A01 to A20 individually; T29 quantifies material alternatives where the model can represent them. No ambiguity is resolved by importing a real-world market number into the fictional company model. [C-R1-C-R3, T29]

### Classify a disputed reading before changing the calculation

A stated assumption is appropriate when the case leaves a required detail open. It is not a license to contradict an explicit rule. For example, treating the combining instruction as additive is an error rather than a discretionary sensitivity to choose for a better result. Conversely, distributing a single trade-in failure rate across grades requires a convention because grade-specific rates are absent. The audit trail must preserve that distinction so a judge can see which result is uncertain and which alternative is simply inconsistent with the case. [C-E6H2, A06, T29]

Table AD-01. Complete assumption scope and alternative-reading route

| Assumption | Canonical role | Alternative or limitation to preserve |
|---|---|---|
| A01 | Count incremental A advertising once | Double counting is rejected; recommendation leaves A off. [C-E6H3] |
| A02 | Retain existing channel fixed spend | Removing spend requires a new demand/cost lever. [C-F12] |
| A03 | Charge specified variable items on delivery | Lost orders do not become sales; cancellation costs are not supplied. [C-E6H4] |
| A04 | Include trade-in buyer demand in rationing | No preferred channel or buyer priority is supplied. [C-E6H4] |
| A05 | Multiply reductions on channel rates | Additive reduction is explicitly rejected. [T29] |
| A06 | Spread trade-in failures proportionally | Grade concentration is a sensitivity, not measured evidence. [T29] |
| A07 | Use all trade-in participants for buyer share | Passed-only denominator is quantified separately. [T29] |
| A08 | Apply Superb claim to own-lab reading | No supplied grade-migration rate proves actual pass status. [C-E5a] |
| A09 | Keep January operations unchanged | Setup timing does not activate early benefits. [C-E6H1] |
| A10 | Use sellable shift increment once | No repeated failure deduction or independent time study. [C-E6SH] |
| A11 | Commission follows actual price | Freezing old prices overstates the recommendation. [T29] |
| A12 | Apply report and battery costs to incremental buyers | Promise costs do not disappear in trade-in channels. [C-E6H2] |
| A13 | Normalize weekly values using convention | Weekly reference does not replace monthly board tests. [T27] |
| A14 | Scale sample indicatively | No census, downgrade rate or remediation cost is established. [T29] |
| A15 | Restart April ramp with new funding | Faster calendar continuation remains a separate scenario. [T28-T29] |
| A16 | Stress declared uncertain inputs | No probability or unlisted price stress is inferred. [T18-T19] |
| A17 | Read reconciliation revenue before commission | Do not conflate wholesale/retail outside definitions with case revenue. [T5] |
| A18 | Use supplied average month consistently | Do not invent a seasonality curve to force history. [T29] |
| A19 | Retain channel return multipliers | Do not replace cells with one company-average rate. [C-E3 notes] |
| A20 | Credit savings only on passed sourcing | Failed-phone recovery does not recover pickup cost. [C-E6TI2-C-E6TI3] |

The numerical consequences in T29 use the same plan on both sides of each delta. A change to a C combination must not be described as a change to the recommended no-C quarter. Several trade-in sensitivities leave the budget violation intact, even where operating profit improves. This is why interpretation requires both the altered result and the remaining constraints. The comparison is not complete when only the most favorable March number is selected. [T29, T23]

### April has a different decision boundary from Q1

April is outside the board-tested quarter and requires explicit new funding. Under A15, arrivals restart at the first ramp month rather than continue automatically from a programme that was deferred. The first month's ongoing EBITDA is ₹21.4290092512 lakh, but deducting ₹35 lakh setup gives −₹13.5709907488 lakh. Relative to keeping the plan, incremental ongoing benefit is ₹15.8240111679 lakh and cumulative incremental benefit after setup is −₹19.1759888321 lakh. These are different measures, not alternative rounded descriptions of one result. [A15, T28]

The cumulative ramp calculation recovers the setup during May. Even within-month accrual gives approximately 1.74894 months from launch. The older 2.2-month approximation holds the first month's incremental benefit constant; it remains a methodological comparison rather than the headline. Dividing setup by total company EBITDA would credit the investment with profit the baseline already earns. Continuing the original calendar ramp is another scenario in T29, with a different arrival assumption, and must not be substituted silently. Neither interpolation establishes a real cash-flow timing forecast. [T28, T29]

### External-source conflicts stay outside the economics

Sections 12 to 17 preserve the relevant source-specific limitations. Market estimates use different channel boundaries, periods and denominators; they are not averaged into a new total. The comparable-policy register preserves unresolved vendor wording and geographic or channel differences. The legal discussion distinguishes status, commencement and explanatory material. This appendix does not repeat those facts or consume a second source-summary budget. Its purpose is to define what the team does when source evidence cannot support a stronger statement. [Sections 12-17; C-F4]

Table AD-02. Conflict handling and decision boundary

| Conflict category | Required response | Inference withheld | Location of detailed evidence |
|---|---|---|---|
| Market definition | Compare numerator, denominator and period | A synthetic total or company forecast | Section 12 source-boundary tables. |
| Vendor wording | Retain ambiguity and request clarification if material | Guaranteed remedy inferred from unclear copy | Section 17 conflict table. |
| Legal commencement | Separate enactment from applicable stage | Every provision already operative | Section 14 status register. |
| Standards access | Identify explanatory scope actually inspected | Full standards-text inspection | Sections 14 and 16. |
| Study transfer | Preserve population, design and outcome | Imported Tikau uplift | Section 15 appraisal. |
| Technical measurement | State device and method limits | Universal remaining-life or quality guarantee | Section 16 field design. |

An inaccessible or unclear source can be omitted when the remaining evidence is sufficient. It should not be promoted from a discovery lead to a verified claim merely because the report has a length or source target. The final evidence register controls which rows can support prose. A quoted fragment also cannot be rewritten to improve its meaning or reused beyond its allocation. The manuscript's own interpretation should remain distinguishable from what the source directly establishes. [Operational plan C1-C5]

### Quotation verification and aggregate count

The H register contains verified short-fragment leads, but this manuscript does not reproduce them. The current report uses zero external direct quotations, so each listed URL consumes zero quoted words. This is an audit of nonuse, not a claim that the fragments were substantively quoted. The coordinator should repeat the aggregate check if any writer later inserts a quotation. The table deliberately omits the fragment wording to preserve the unused allocation. [H01-H10; source register]

Table AD-03. Quotation verification and report use

| Fragment lead | Source ID | Evidence status | Report use | Quoted words per corresponding URL |
|---|---|---|---|---|
| H01 | S015 | VERIFIED | Omitted | 0 |
| H02 | S016 | VERIFIED | Omitted | 0 |
| H03 | S049 | VERIFIED | Omitted | 0 |
| H04 | S049 | VERIFIED | Omitted | 0 |
| H05 | S048 | VERIFIED | Omitted | 0 |
| H06 | S040 | VERIFIED | Omitted | 0 |
| H07 | S001 | VERIFIED | Omitted | 0 |
| H08 | S002 | VERIFIED | Omitted | 0 |
| H09 | S065 | VERIFIED | Omitted | 0 |
| H10 | S024 | VERIFIED | Omitted | 0 |

### Definition and rounding traps during oral defense

Table AD-04. Judge traps requiring an explicit definition

| Trap | Correct basis | Wrong shortcut | Working reference |
|---|---|---|---|
| Company totals | Sum unrounded rupees, then display lakh | Add displayed rounded rows as exact inputs | T4-T5 and C-R4. |
| Referral coupons | Retain exact expense in working | Edit protected original rounding to force a sum | T4 and canonical correction. |
| Quarter comparison | Same months and setup convention | Compare ongoing March with all-in quarter | T15 and C-F15. |
| Weekly returns | Completed cohort deliveries | Include immature recent sales in denominator | T27. |
| Battery replacement | Tested Good batch | Divide by total company deliveries | T27. |
| Investment recovery | Incremental benefit versus keep plan | Divide setup by total company EBITDA | T28. |

### Method limits affect what the recommendation means

The model operates at monthly averages and expected rates. It does not simulate every repair queue, inventory delay, weekly seasonal pattern or customer journey. The third shift's output is stipulated as sellable capacity; report-testing time and independent measurement throughput are not supplied. Proposed readiness and service controls therefore require observation before real execution. Their inclusion in the plan does not create an additional cost saving, independently costed staffing budget or demonstrated service improvement. [C-E4a, C-E4d, C-E6SH, C-R3]

The segment score is structured judgment. Changing weights tests one part of that judgment but does not validate the underlying scores or measure segment-specific response. T26's weighted ties must remain visible. Likewise, the survey identifies multiple stated concerns and offers, not unique-customer shares or realized causal effects. The spot check is a sample, and its indicative scale-up has no supplied remediation cost. These limitations narrow the interpretation without changing the audited arithmetic. [C-E1A-C-E1C, A14, T26, T29]

The B1 compliance flag is conditional. The case's every-phone truth requirement, parts language, comparison evidence, review rules, creator labels, erasure and IMEI conditions need actual records and claim-by-claim review. A numerical PASS cannot establish that a published asset or dispatched phone met them. The report therefore distinguishes the feasible model plan from the controls proposed to implement it. [C-E5a-C-E5f, C-F16]

If new evidence changes a material input, the team should version the interpretation, rerun affected cells and compare the revised decision against the original objective. It should not average two disagreeing calculations or keep a stale headline because the overall recommendation appears unchanged. The conclusion remains conditional on the case inputs, disclosed assumptions and evidence controls. That is the boundary the team must preserve in research, slides and oral defense. [C-R2-C-R5, T23, T29]
