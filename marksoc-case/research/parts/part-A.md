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
