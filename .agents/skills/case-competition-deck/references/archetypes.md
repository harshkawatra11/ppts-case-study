# Slide Archetype Catalog (Case-Agnostic)

The universal slide templates that work across any case type. Each archetype includes:
- **Job** — the slide's purpose
- **When to use** — which deck position
- **Layout** — content structure
- **Required elements** — non-negotiable components
- **Case-type variations** — how the archetype adapts across case types
- **Common mistakes** — what to avoid

Case-type-specific archetypes (like football field for M&A, customer journey for marketing, theory-of-change diagram for social impact) are in the respective `case_types/*.md` files.

---

## Table of contents

**Front matter:**
- [A. Cover slide](#a-cover-slide)
- [B. Hook quote slide](#b-hook-quote-slide)
- [C. Table of contents](#c-table-of-contents)
- [D. Abbreviations table](#d-abbreviations-table)

**Structural elements:**
- [E. Section divider](#e-section-divider)
- [F. Sub-section progress tracker](#f-sub-section-progress-tracker)
- [G. Persistent navigation bar](#g-persistent-navigation-bar)

**Core content templates:**
- [H. Executive summary (recommendation + 2-column for/against)](#h-executive-summary)
- [I. Two-chart action-title slide](#i-two-chart-action-title-slide-the-workhorse)
- [J. Multi-chart dense slide](#j-multi-chart-dense-slide)

**Analytical templates:**
- [K. MECE option-filter table](#k-mece-option-filter-table)
- [L. Symmetric comparison grid](#l-symmetric-comparison-grid)
- [M. Three-scenario projection](#m-three-scenario-projection)
- [N. Sensitivity analysis matrix](#n-sensitivity-analysis-matrix)
- [O. Strategic fit / alignment grid](#o-strategic-fit--alignment-grid)

**Climax templates:**
- [P. The moneyshot — single-number value waterfall](#p-the-moneyshot)
- [Q. Methodology roadmap (optional)](#q-methodology-roadmap)

**Recommendation templates:**
- [R. 3-path option comparison (Build / Buy / Partner analog)](#r-3-path-option-comparison)
- [S. Option shortlist comparison table](#s-option-shortlist-comparison-table)
- [T. Deep dive on chosen alternative](#t-deep-dive-on-chosen-alternative)
- [U. Implementation plan](#u-implementation-plan)

**Closing templates:**
- [V. Section-closer "Conclusively…"](#v-section-closer-conclusively)
- [W. Conclusion synthesis slide](#w-conclusion-synthesis-slide)
- [X. Appendix table of contents](#x-appendix-table-of-contents)
- [Y. Bibliography slides](#y-bibliography-slides)

---

## A. Cover slide

**Job:** Identify the deck and team.

**When:** Slide 1.

**Layout:** Centered text, ample white space. Optional thematic image as background or accent.

**Required elements:**
- Deck title (often thematic, evocative)
- Team name
- Member names separated by `|`
- School name (or organization)
- City, date

**No nav bar on this slide.**

**Examples by case type:**
- M&A: "The Road Ahead" / "Conquering the Subscription Video on Demand Market"
- Strategy: "Crossing the Chasm in Southeast Asia"
- Marketing: "From Volume to Value: Repositioning [Brand]"
- Social impact: "Beyond Direct Aid: A New Theory of Change"
- Policy: "Strategic Patience in the Pacific"
- Operations: "Reimagining the Last Mile"

**Mistakes to avoid:** Generic title ("Case Competition Deck"), missing date, no school/org name.

---

## B. Hook quote slide

**Job:** Set the rhetorical frame for the contrarian recommendation.

**When:** Optional, between cover and TOC.

**Layout:** Single large quote centered on slide. Attribution beneath, smaller type. No nav bar.

**Required elements:**
- A famous quote (50–150 characters)
- Attribution (named person, role/credential)

**Why it works:** A well-chosen quote sets up the frame "the obvious answer is the wrong answer" or "look where others aren't looking" — which the recommendation then delivers on.

**Examples by case type:**
- M&A (Cash Cows 2019): "If I had asked people what they wanted, they would have said faster horses…" — Henry Ford
- Strategy: "The essence of strategy is choosing what not to do" — Michael Porter
- Marketing: "People don't buy what you do, they buy why you do it" — Simon Sinek
- Social impact: "We cannot solve our problems with the same thinking we used when we created them" — Einstein
- Policy: "It is not enough to be busy. The question is, what are we busy about?" — Thoreau
- Operations: "Form follows function" — Louis Sullivan

**Mistakes to avoid:** A quote that doesn't thematically connect to the recommendation. A generic motivational quote. Over-styled type.

---

## C. Table of contents

**Job:** Show the deck's full structure with page numbers.

**When:** Slide 3 (after cover and hook quote).

**Layout:** Two halves. Left half: section names listed vertically with page numbers. Sub-sections indented under their parents. Right half (optional): the nav bar preview.

**Required elements:**
- 7–8 main sections (Executive Summary + 6 analytical sections + Conclusion)
- Page numbers for each
- Sub-sections shown for any section with multiple parts
- Appendix and Bibliography listed at the bottom

---

## D. Abbreviations table

**Job:** Pre-define all acronyms used in the deck. Signals technical seriousness.

**When:** Slide 4–5.

**Layout:** Two-column layout. Each column has Abbreviation | Explanation pairs. 30–50 acronyms.

**Universal acronyms** (every analytical deck): EV (enterprise value), NPV, ROI, IRR, CAGR, YoY, FY, bn, mm, mn, R&D, GDP, USD, P/L.

**Add 15–25 case-type-specific acronyms.** See the relevant `case_types/*.md` for typical lists.

**Mistakes to avoid:** Defining only obvious acronyms, missing case-specific ones, or scattering acronym definitions across the deck.

---

## E. Section divider

**Job:** Mark a section break. Set the thematic frame for what's coming.

**When:** Start of each of the 8 main sections + Appendix + Bibliography.

**Layout:** Mostly empty. Section number + name. A thematic sub-title (often a complete sentence). Large image or graphic. **No nav bar on dividers** (the section title functions as wayfinding).

**Required elements:**
- Roman numeral section number
- Section name in all caps or large type
- Thematic sub-title (one sentence)

**Examples:**
```
I
EXECUTIVE SUMMARY
The right choice for [actor]

II
CONTEXT
The future of [domain]

V
FEASIBILITY
Beyond the value of [obvious answer]

VII
CONCLUSION
Sometimes it is simply not meant to be
```

---

## F. Sub-section progress tracker

**Job:** Wayfinding within a multi-part section.

**When:** First slide of each sub-section within sections that have multiple parts (Actors section, Quantitative Analysis section, Alternative Solution section).

**Layout:** Three (or however many sub-sections) labeled cells arranged horizontally. Current sub-section highlighted (bolder, different color, larger).

The same slide reappears before each sub-section with rotated highlighting.

**Mistakes to avoid:** Only one tracker for the whole section (instead of rotating before each sub-section); no highlighting of current section; omitting sub-section numbers.

---

## G. Persistent navigation bar

**Not a slide archetype** but a deck-wide design element.

**Job:** On every content slide (not on dividers, not on the cover), show where the reader is in the deck.

**Layout:** Horizontal bar at the top or bottom of slide. Each main section name appears. The current section is highlighted (different color, bold, or underlined).

Page number appears at the right end of the bar.

**Mistakes to avoid:** Forgetting to update highlighting between sections. Putting the nav bar on dividers. Inconsistent formatting.

---

## H. Executive Summary

**Job:** Lock in the recommendation. The most important content slide in the deck.

**When:** Right after the Executive Summary divider.

**Layout:**

```
[ NAV BAR ]                                              | 6

                  [ Case question as sub-headline ]
       [ Recommendation in one sentence as main headline ]

┌────────────────────────────┬────────────────────────────┐
│   X should NOT [obvious]   │   X should [alternative]   │
│                            │                            │
│ • Reason 1 (quantitative)  │ • Reason 1 (quantitative)  │
│ • Reason 2 (strategic fit) │ • Reason 2 (strategic fit) │
│ • Reason 3 (feasibility)   │ • Reason 3 (implementation)│
└────────────────────────────┴────────────────────────────┘
```

**Required elements:**
- The case question repeated as a sub-headline
- The recommendation in a single sentence as headline
- Two columns, opposite verdicts
- 3 bullets per column
- Each bullet is a finding (not a topic), with a number where possible

**Case-type variations** (what reasons typically appear):

| Case type | Reason 1 (quantitative) | Reason 2 (strategic fit) | Reason 3 (feasibility) |
|---|---|---|---|
| M&A | Target X% overvalued | Limited synergies | Financing infeasible / governance |
| Strategy | Option ROI of X% | Capability gap | Competitive response / time-to-impact |
| Marketing | LTV/CAC ratio of X | Brand stretch limit | Channel readiness / measurement |
| Social impact | $X per outcome | Theory-of-change weakness | Institutional capacity / sustainability |
| Policy | $X welfare loss / X% GDP | Strategic counterproductivity | Political infeasibility / retaliation |
| Operations | $X cost / X% leakage | Capability mismatch | Change cost / supplier dependence |

**Mistakes to avoid:** Bullets without numbers; bullets that are topics not findings; the obvious-answer column winning; recommendation hidden in body text rather than headline.

---

## I. Two-chart action-title slide (the workhorse)

**Job:** The default content slide. Two related charts with a single headline finding.

**When:** Most content slides in Context, Actors, and Analysis sections.

**Layout:**
```
[ NAV BAR ]                                              | N

[ Headline: full-sentence finding with a number ]
[ Sub-headline if needed, smaller type ]

┌───────────────────┐  ┌───────────────────┐
│   Left chart      │  │   Right chart     │
│   "Trend"         │  │   "Implication"   │
│                   │  │                   │
│  + annotations    │  │  + annotations    │
│  + callouts       │  │  + callouts       │
└───────────────────┘  └───────────────────┘
[ Sub-section label: BOTTOM-LEFT ]
[ Source: Author, Year, Publication ]
```

**Required elements:**
- Action-title headline (full sentence with a number ideally)
- Two charts side by side, each with its own sub-headline
- Annotation callouts on each chart pointing to specific data
- Source citation in small type at bottom
- Sub-section label

**Why left-chart-trend + right-chart-implication:** Chart 1 establishes the trend; chart 2 shows the deeper insight (e.g., trend is accelerating faster than expected, or has uneven distribution, or has structural drivers).

**Mistakes to avoid:**
- Topic headlines instead of finding headlines ("Market Growth" → "Market is growing at 17% CAGR, 5x the broader sector")
- Charts that show the same thing twice
- No annotation callouts
- Headline ending in a noun phrase instead of a full sentence

---

## J. Multi-chart dense slide

**Job:** When the argument needs 3–4 charts, not 2.

**When:** Slides where a single finding has multiple supporting dimensions.

**Layout:** 3 or 4 charts in a grid, all serving the same headline finding.

**When to use this vs two-chart:** Only when each chart is independently necessary AND can be kept legible at slide size. With 4 charts, each gets about half a quarter of slide area. Three is usually safer.

**Mistakes to avoid:** Over-stuffing. Three charts is fine. Four is risky. Five is over the line.

---

## K. MECE option-filter table

**Job:** Eliminate candidates from a broader set using MECE criteria, retain the relevant subset.

**When:** Early in Quantitative Analysis section, especially when selecting a peer group / segment / target / intervention type / policy option set for further analysis.

**Layout:** Table.
- Rows: candidate options (typically 4–6)
- Columns: criteria + Retain/Discard verdict

**Standard criteria columns** (adapt by case type):
- Market size / scale
- Growth rate (CAGR)
- Relevance to the case
- Revenue / cost / impact drivers
- Strategic fit / alignment
- Retain / Discard verdict (with reasoning)

**Case-type variations:**
- M&A: peer companies → retain those most similar to target
- Strategy: market segments → retain those with right size+growth+addressability
- Marketing: customer cohorts → retain those with highest LTV potential
- Social impact: intervention types → retain those with strongest evidence base
- Policy: policy levers → retain those with right size+precedent+political viability
- Operations: process redesigns → retain those with right cost+capability+risk profile

**Mistakes to avoid:**
- No verdict column
- Retaining all candidates (defeats MECE filtering)
- No reasoning for discards

---

## L. Symmetric comparison grid

**Job:** Compare two or more actors, options, or scenarios on identical axes.

**When:** Actor sub-sections (comparing acquirer vs target, or company vs competitors); option evaluation in Recommended Alternative section.

**Layout:** Grid with the same row structure for each entity being compared. Identical chart types and data points across columns.

**Why symmetric:** The reader pattern-matches between entries. Cognitive cost falls; substance engagement rises.

**Mistakes to avoid:**
- Different chart types for the same metric across entities (apples to oranges)
- Different number of data points across entities (creates impression of weight differences)
- Different layout structure between entities

---

## M. Three-scenario projection

**Job:** Show a forecast as a range of scenarios with explicit assumptions.

**When:** Quantitative Analysis section, whenever projecting an uncertain quantity over time.

**Layout:** Single big chart showing 3 lines/areas over the projection horizon (typically 5–15 years). Below the chart: 3 small boxes (one per scenario) showing the named assumptions.

**Three scenario names — pick one set per deck:**
- Pessimistic / Realistic / Optimistic (most common)
- Grey Sky / Realistic / Blue Sky
- Bear / Base / Bull (especially for financial cases)
- Slow / Steady / Fast
- Status Quo / Reform / Transformation (for policy cases)
- Low / Medium / High impact (for social cases)

**Required for each scenario box:**
- 2–3 key assumption variables with explicit values

**Output:** Cumulative or terminal-year values for each scenario, shown as 3 numbers.

**Case-type variations:**
- M&A: revenue growth / margin / production assumptions
- Strategy: market share capture / pricing / capability ramp
- Marketing: adoption rate / retention / ARPU
- Social impact: program reach / cost per outcome / scale-up speed
- Policy: compliance rate / retaliation severity / economic spillover
- Operations: throughput uplift / implementation speed / change cost

**Mistakes to avoid:** Three lines without separate assumption tables. Too-similar scenarios.

---

## N. Sensitivity analysis matrix

**Job:** Show the central result is robust across reasonable parameter ranges.

**When:** Optional, after the main analytical output.

**Layout:** Matrix. Rows = one key variable (5 values), columns = another key variable (5 values), cells = the output metric.

**Case-type variations:**
- M&A: WACC × terminal growth → implied share price / EV
- Strategy: market growth × win rate → NPV
- Marketing: retention rate × ARPU → LTV
- Social impact: cost per beneficiary × scale → total cost / outcomes
- Policy: compliance rate × duration → welfare impact
- Operations: throughput uplift × cost reduction → annual savings

**Use:** The center cell is your base case. The matrix shows how much the answer changes if parameters are wrong.

**Mistakes to avoid:** Too-narrow ranges (no real sensitivity shown); only one matrix (often want two — base output and a derived output).

---

## O. Strategic fit / alignment grid

**Job:** Evaluate fit between actors (or between an action and its desired outcome) across multiple dimensions.

**When:** End of Actors section (after individual actor coverage).

**Layout:** Rows = dimensions of fit (5–8 dimensions). Columns = description per actor + verdict.

**Case-type variations for "dimensions":**

| Case type | Typical fit dimensions |
|---|---|
| M&A | R&D, production, products/brand, sales networks, tech/IP, geography |
| Strategy | Customer overlap, capability fit, scale fit, geographic fit, brand fit, value chain |
| Marketing | Brand fit, segment fit, channel fit, message fit, capability fit |
| Social impact | Beneficiary need fit, theory-of-change fit, implementer capability, funder strategy fit |
| Policy | Strategic interest alignment, capability alignment, alliance compatibility, domestic political fit |
| Operations | Process fit, capability fit, tech infrastructure fit, supplier fit, customer service fit |

**Verdict column:** Fit / Partial Fit / No Fit, often color-coded (green/yellow/red).

**Output:** Some dimensions show fit, others don't. Strong fits set up the analytical section (these are the "synergies"). Poor fits set up the Feasibility section.

**Mistakes to avoid:** All dimensions get "fit" (over-claiming); no verdict column; only binary fit/no-fit.

---

## P. The moneyshot

**The single most important slide in the deck.** The visual climax. The number people remember.

**Job:** Show, in one slide, why the contrarian recommendation matters quantitatively.

**When:** End of the Quantitative Analysis section.

**Layout:** A waterfall chart with two columns and a gap between them.

**Left column — value built up by following the recommendation:**
- Base value
- + Strategic value / synergies / impact
- = Total value of recommended path

**Right column — value/cost built up by NOT following the recommendation (or by following the obvious path):**
- Base reference value
- + Premium / cost / opportunity loss components
- = Total value/cost of obvious path

**Below the chart, in large bold type:**
*"[Doing the obvious thing] would [destroy/cost/forgo] $X bn"*
*or*
*"[Doing the alternative] would [generate/save/reach] $X / Y people / Z%"*

**Required elements:**
- The two columns with their respective stack composition
- The central number in large bold type
- Decomposition of any "premium" / "cost" / "uplift" into named components
- Source citation
- Section label

**Case-type variations:**

| Case type | Moneyshot framing |
|---|---|
| M&A | "Acquiring [target] would destroy USD $X bn" — value built up vs purchase price (market cap + premium decomposition) |
| Strategy | "Entering [alt market] vs [obvious market] captures $X bn more NPV" |
| Marketing | "Repositioning to [segment Y] vs [segment X] delivers Y% higher LTV at Z% lower CAC" |
| Social impact | "[Approach A] reaches X people at $Y/beneficiary vs [Approach B] at $Z/beneficiary" |
| Policy | "Targeted [lever] reduces [adversary metric] by X% at Y% domestic cost" |
| Operations | "[Redesign] saves $X annually while improving [service level] from Y% to Z%" |

**Mistakes to avoid:**
- Single premium/cost number (always decompose into named components — see "decomposition" archetype below)
- The central number in small type
- Missing comparison to the obvious-path value
- No waterfall structure (just bullet points listing values)

---

## P-supplement. Premium / cost decomposition

**Embedded in the Moneyshot slide but worth calling out separately.**

**Job:** Decompose the gap between recommended-value and obvious-path-cost into named components.

**Layout:** The right-stack of the moneyshot waterfall, broken into 2+ named premium/cost line items.

**Why it works:** A single premium / cost / uplift number looks like napkin math. A decomposed number with a specific reason for each component looks rigorous.

**Common decompositions by case type:**

| Case type | Base component | Special component |
|---|---|---|
| M&A | Industry M&A average premium (~30–55%) | Control premium / Poison Pill / founder voting / strategic value |
| Strategy | Industry-average growth-investment | Capability-build premium / competitive-response cost / time-to-impact discount |
| Marketing | Industry CAC benchmark | Brand-stretch tax / channel-learning cost / measurement uncertainty |
| Social impact | Direct cost per beneficiary | Institutional overhead / sustainability investment / spillover effects |
| Policy | Direct welfare impact | Retaliation discount / diplomatic cost / unintended consequences |
| Operations | Direct cost saving | Change cost / capability investment / supplier transition |

**Even if you don't have an obvious "special component" reason, find one.** A decomposed cost is more rigorous than a unified one.

---

## Q. Methodology roadmap

**Job:** Before the analytical section dives in, show the whole methodology that follows.

**When:** Optional, first slide after the Quantitative Analysis section divider.

**Layout:** Single diagram. Boxes for each methodology step with arrows showing flow to the moneyshot.

**Case-type variations:**
- M&A: Comparables → Standalone EV ← DCF; + Synergies = Purchase Price; compare to market cap
- Strategy: Market sizing → TAM/SAM/SOM; × Win rate = Revenue capture; − Cost = NPV
- Marketing: Customer segmentation → LTV per segment; × Reach = Segment value; − CAC = Net value
- Social impact: Population sizing → Reach; × Outcomes/beneficiary = Outcomes; ÷ Cost = Cost-effectiveness
- Policy: Impact channels → Welfare impact per channel; × Probability = Expected impact; − Cost = Net welfare
- Operations: Process map → Cost/throughput per stage; × Volume = Total cost; − Redesign = Savings

**Why it works:** A reader who sees the whole methodology upfront can follow the analytical section more easily. Each subsequent slide becomes "here's step N from the roadmap."

**Mistakes to avoid:** Over-styled diagram; not connecting clearly to the moneyshot logic.

---

## R. 3-path option comparison

**Job:** For pursuing an opportunity, compare 3 broad option types. One wins.

**When:** Alternative Solution section, early on.

**Layout:** Three columns, each describing one path with feasibility analysis.

**Case-type variations:**

| Case type | Path 1 | Path 2 | Path 3 |
|---|---|---|---|
| M&A | Develop in-house | Acquire | Partner / JV |
| Strategy | Direct attack | Adjacent positioning | Defer / wait |
| Marketing | Repositioning | New segment / sub-brand | New product launch |
| Social impact | Direct service | Institution building | Behavior change |
| Policy | Unilateral action | Coalition / multilateral | Negotiation / wait |
| Operations | Optimize current | Redesign | Outsource / partner |

Each column has: One-line description + Pros + Cons + Verdict.

**Mistakes to avoid:** Generic pros/cons; no clear verdict; all paths recommended.

---

## S. Option shortlist comparison table

**Job:** Evaluate 4–8 candidate options, eliminate all but one.

**When:** After the 3-path comparison, when narrowing to specific options within the chosen path.

**Layout:** Table.
- Rows: candidate options (with name, logo if applicable)
- Columns: criteria + verdict

**Standard columns:**
- Overview / Description
- Strategic Feasibility (does this option address the gap?)
- Financial/Quantitative Feasibility (can the actor afford / scale this option?)
- Implementation Feasibility (can the actor execute this option?)
- Verdict (Infeasible / Feasible / Ideal)

**Number of candidates:** Minimum 4. Typical 6–8.

**Mistakes to avoid:**
- Too few candidates (2 is suspiciously narrow)
- No verdict column
- All candidates rejected (you need exactly one Ideal)
- No reasoning for rejections

---

## T. Deep dive on chosen alternative

**Job:** Build credibility for the alternative. Show why it works, market validation, expert backing.

**When:** Alternative Solution section, after picking the option.

**Layout:** Often a 2–3 slide treatment.

**Slide 1: Why this option.** Sub-sections covering:
- Direct fit with the case prompt's actor (e.g., for M&A: the target's products fit the acquirer's customer base)
- Capability / asset alignment
- Market position / track record
- Future positioning (addresses the trend foreshadowed in Context section)

**Critical inclusion:** 2–4 third-party expert quotes from named sources.

**Sources by case type:**
- M&A: equity analysts, industry journalists, executives
- Strategy: industry analysts, consulting firms, academic experts
- Marketing: brand consultants, market researchers, customer testimony
- Social impact: program evaluators, beneficiary representatives, academic experts
- Policy: foreign policy think tanks, academic experts, former officials
- Operations: industry analysts, technology assessors, customer/supplier feedback

**Slide 2: Asset / capability / approach base.** Visual map of what the alternative brings.

**Slide 3 (optional): Business model / theory of change.** How the alternative creates value or impact.

**Mistakes to avoid:**
- Anonymous "industry expert" quotes
- Quotes from the alternative's own marketing
- Quotes that praise the industry but not the specific alternative
- Old quotes (2+ years) without an update

---

## U. Implementation plan

**Job:** Show the alternative gets implemented thoughtfully, not chaotically.

**When:** End of Alternative Solution.

**Common patterns:**

**Pattern 1: Phasing diagram** — Year 1 / Year 2 / Year 3 with specific milestones and metrics per year.

**Pattern 2: Stakeholder action matrix** — Who does what, when, with what resources.

**Pattern 3: Asset / activity disposition** — What to keep, what to add, what to discontinue, what to integrate.

**Pattern 4: Risk register** — Key risks × likelihood × mitigation.

**Required for any pattern:**
- Specific milestones with dates / metrics
- Named owner or actor responsible
- Quantified impact / cost
- At least one risk + mitigation

**Mistakes to avoid:** Vague "integration" / "scaling" / "implementation" claims; no specific decisions about what changes; no quantified impact; no timeline.

---

## V. Section-closer "Conclusively…"

**Job:** Lock in a section's verdict before transitioning to the next section.

**When:** End of Feasibility section (always). Optionally end of other sections.

**Layout:** Three-column synthesis.

**Standard layout:**
- Column 1: The quantitative case ("Would [destroy/cost/forgo] $X" / "Yields X% lower [metric]")
- Column 2: The strategic/feasibility issues ("Several challenges fundamentally question feasibility")
- Column 3: The verdict ("[Actor] should NOT [obvious action]")

**Mistakes to avoid:** New content on the closer (it's recap only); no verdict in third column.

---

## W. Conclusion synthesis slide

**Job:** The deck's final synthesis. Compress the whole deck into one slide.

**When:** Last main-deck slide (before the appendix).

**Three accepted formats:**

**Format 1: Q&A grid**
- Headline: the final recommendation
- Rows: the case question + sub-questions
- Each row has 2–3 bulleted answers

**Format 2: Three-card**
- Headline: the final recommendation
- Three cards horizontally covering rationale (typically: Quantitative case / Strategic case / Implementation case)

**Format 3: Five-card section recap**
- Headline: the final recommendation
- 5+ cards summarizing each main section's finding

**Required elements:**
- The final recommendation in the headline
- A recap structure touching all major sections
- **No new content**

**Mistakes to avoid:** Adding new arguments. Missing the recommendation from the headline.

---

## X. Appendix table of contents

**Job:** Wayfinding for an appendix exceeding ~15 slides.

**When:** First or second slide of the appendix.

**Layout:** Two slides showing what's in the appendix, organized into:
- Referenced deep dives (in main-deck order)
- Additional analyses (supplementary)

Each entry references the main-deck slide it supports.

---

## Y. Bibliography slides

**Job:** Harvard-style references for every cited source.

**When:** Final 5–13 slides of the deck.

**Format:** *Author, Initial. (Year) Title. Publication [online]. Available at: URL (Accessed: Date)*

Dense text slides — 15–25 references per slide. Alphabetical by author surname.

**Universal rule:** Every source cited anywhere in the deck appears in the bibliography.

---

## Reusable patterns across all archetypes

**Action titles always.** Every content slide headline is a full-sentence finding with a number where possible.

**Annotation callouts on charts.** Every chart should have at least one annotation pointing to a specific data point and what it means.

**Source citations on every content slide.** Small type, bottom of slide. Format: "Source: Author, Year, Publication"

**Sub-section labels.** Bottom-right or bottom-corner of each content slide. Tells readers what specific sub-section the slide belongs to.

**Page numbers on every content slide.** Top-right, as part of the nav bar or just below it.

**Three is the magic number.** Three columns of arguments, three scenarios, three sub-sections per major section. Triadic structure is highly readable.

**Color discipline.** Don't introduce new colors per slide. Use 3–5 colors deck-wide. Reserve the strongest color (red, orange) for the moneyshot number and other critical findings.

**Symmetry.** When comparing two or more things (actors, options, scenarios), use identical slide structures.

**Defensive depth.** Every quantitative claim in the main deck should have an appendix backup.
