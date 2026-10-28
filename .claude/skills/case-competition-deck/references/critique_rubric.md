# Critique Rubric

Use this when the user shares a draft case competition deck for feedback. The rubric is calibrated against the GCCH-style M&A pattern observed in the three corpus winners.

The rubric has three layers:
1. **Pass/fail items** — load-bearing elements that must be present for the deck to feel like a winner
2. **Quality dimensions** — scaled assessments of how well key elements are executed
3. **Polish check** — common mistakes to flag

When critiquing, don't dump every issue. Prioritize the top 3–5 that would lose the most points. Each suggestion should be specific enough to act on.

---

## Phase 1: Pass/fail items

Check each of these. If any fail, that's a critical issue to surface.

### Structure pass/fail

- [ ] **Deck has ≤100 slides** (the GCCH cap from 2020 onwards)
- [ ] **8 main sections present:** Exec Summary, Industry/Market Analysis, Company Analysis, Strategic Fit (within Company Analysis or standalone), Financial Analysis (with Comparables + DCF + Synergies sub-sections), Acquisition Feasibility, Alternative Solution, Conclusion
- [ ] **Cover slide** with team name, members, school, date
- [ ] **Table of contents** with page numbers
- [ ] **Abbreviations table** with 30+ acronyms
- [ ] **Section dividers** for each main section
- [ ] **Appendix** with deep dives (10+ slides)
- [ ] **Bibliography** with Harvard-style references (5+ slides)

### Recommendation pass/fail

- [ ] **Recommendation is in the executive summary headline** (not buried in body text)
- [ ] **Executive summary has a 2-column for/against structure** with 3+ reasons per side
- [ ] **The "don't acquire" side wins** (the deck recommends against the obvious target)
- [ ] **An alternative target is named** (not just "do nothing" or "wait")
- [ ] **The alternative target gets the same financial rigor** as the rejected target (DCF, football field, etc.)
- [ ] **The alternative is foreshadowed** in the industry/market analysis section ≥20 slides before being named

### Quantitative analysis pass/fail

### Quantitative analysis pass/fail

For an M&A case, all of these are expected. For other case types, the rough equivalents (see `case_types/*.md` for case-specific frameworks) should be present.

- [ ] **MECE option-filter table** with retain/discard verdicts (peers / segments / interventions / policy options / etc.)
- [ ] **Quantitative methodology applied** to the target (multiples for M&A, market sizing for strategy, LTV for marketing, cost-effectiveness for social impact, welfare analysis for policy, throughput for ops)
- [ ] **Core valuation / impact model** with explicit assumptions (DCF, NPV, customer LTV, SROI, welfare model, throughput model)
- [ ] **Three-scenario projection** (Pessimistic / Realistic / Optimistic or equivalent)
- [ ] **Range-based valuation / impact synthesis** (football field for M&A, scenario synthesis for others)
- [ ] **Cost/premium decomposition** with named components (not a single number)
- [ ] **Moneyshot slide** as the climax with central number
- [ ] **Synergy/cost categorization** with at least 2 components quantified

### Rhetorical pass/fail

- [ ] **Action titles** (full-sentence findings) on content slides — sample 5 random slides; count how many have full-sentence titles vs topic labels
- [ ] **Source citations** on content slides — sample 5; check for citation footers
- [ ] **Section-closer slide** before pivoting from rejection to alternative (e.g., "Conclusively…")
- [ ] **Conclusion synthesis slide** with no new content
- [ ] **Persistent navigation bar** on content slides

### Polish pass/fail

- [ ] **No placeholder text** ("TODO", "Insert", "Placeholder", "TBD", "xyz", "Lorem")
- [ ] **No copy-paste artifacts** from template sources (search for company names that don't match the case — e.g., if the case is Amazon/Netflix, search for "GM", "Tesla", "Rivian" which would indicate a Cash Cows template residue)
- [ ] **Consistent navigation bar** across slides (same sections listed, current section highlighted)
- [ ] **No slides without source citations** for quantitative claims

---

## Phase 2: Quality dimensions

For each dimension, score the deck 1–5.

### Dimension 1: Strength of the recommendation

| Score | Description |
|---|---|
| 5 | Contrarian recommendation, foreshadowed, with full alternative analysis (case-appropriate quantitative model + implementation plan) |
| 4 | Contrarian recommendation, foreshadowed, alternative partially analyzed |
| 3 | Contrarian recommendation but no foreshadowing; alternative arrives as a surprise |
| 2 | Recommendation defends obvious target but doesn't stress-test alternatives |
| 1 | Recommendation is hedged or unclear |

### Dimension 2: Industry analysis funnel

| Score | Description |
|---|---|
| 5 | Funnel from broad to narrow; ends on a slide that surfaces the gap the alternative target fills |
| 4 | Funnel from broad to narrow; ends on a relevant trend but doesn't quite seed the alternative |
| 3 | Multiple trend slides but no clear funnel structure |
| 2 | Industry analysis is generic, not specifically connected to the recommendation |
| 1 | Industry section feels like filler |

### Dimension 3: Quantitative rigor

| Score | Description |
|---|---|
| 5 | Option filter, core methodology (case-appropriate), 3 scenarios, range-based synthesis, decomposed cost/premium/impact, moneyshot. Plus 1–2 sophistication archetypes appropriate to case type (sensitivity matrix, pro forma model, second-order effects, etc.). |
| 4 | All load-bearing elements present, weak sophistication signals |
| 3 | Load-bearing elements mostly present, but missing one or two |
| 2 | Core methodology shown but missing key elements (scenarios, sensitivity, decomposition) |
| 1 | Quantitative analysis is thin or hand-wavy |

### Dimension 4: Action titles and quantification

Sample 10 content slides. Score each:
- 1 point if the title is a full-sentence finding
- 1 point if the title includes a specific number

Total possible: 20 points.

| Score | Total |
|---|---|
| 5 | 17–20 |
| 4 | 13–16 |
| 3 | 9–12 |
| 2 | 5–8 |
| 1 | 0–4 |

### Dimension 5: Visual discipline

| Score | Description |
|---|---|
| 5 | Consistent nav bar, consistent chart styling, 2–3 charts per content slide, annotations on every chart, source citations everywhere |
| 4 | Mostly consistent, occasional 4-chart slide or missing annotation |
| 3 | Some visual variation across sections; some over-crowded slides |
| 2 | Inconsistent layout; some slides feel unfinished |
| 1 | No visual discipline; chaotic |

### Dimension 6: Defensive depth (appendix quality)

| Score | Description |
|---|---|
| 5 | Appendix has its own TOC, 15–25 deep-dive slides, every quantitative main-deck claim has a backup |
| 4 | Appendix has 10–14 slides, most claims backed |
| 3 | Appendix has 5–9 slides, key claims backed but gaps exist |
| 2 | Appendix is thin (3–5 slides), few backups |
| 1 | No appendix or unrelated content in appendix |

### Dimension 7: Polish

| Score | Description |
|---|---|
| 5 | No placeholder text; no copy-paste artifacts; all sources cited; bibliography complete and Harvard-style |
| 4 | Minor inconsistencies (1–2 missing sources, slight format inconsistency) |
| 3 | Some unfinished elements (occasional missing source, inconsistent citation format) |
| 2 | Visible polish issues (placeholder text, copy-paste artifacts, missing bibliography slides) |
| 1 | Many polish issues |

---

## Phase 3: Targeted feedback

Based on the pass/fail and quality dimensions, prioritize the top 3–5 issues. For each, give:

1. **Specific issue** — what's wrong, on which slide
2. **Specific fix** — what to change to, with example wording where possible
3. **Why it matters** — which corpus pattern this connects to

### Sample feedback structure

```
TOP 5 ISSUES TO FIX

1. CRITICAL: Recommendation is buried (Slide 5)
   Current state: The executive summary headline reads "Strategic Recommendation for the Board."
   The actual recommendation appears in body text on the third bullet.
   Fix: Move the recommendation to the headline. Example wording:
   "Should X acquire Y? X should not acquire Y, but instead acquire Z, whose [strategic value] aligns with X's future positioning in [industry trend]."
   Why it matters: All 3 corpus winners put the recommendation in the headline. Burying it is a clarity loss.

2. CRITICAL: No foreshadowing of the alternative (Slides 9-14, alternative named on Slide 60)
   Current state: The industry analysis ends with general market growth findings. The alternative target (Company Z) appears for the first time on Slide 60 with no setup.
   Fix: Add or modify Slide 14 to surface the specific gap Z fills. Example: "Limited availability of [Z's specific capability] in the [specific segment] represents a huge market opportunity" — without naming Z.
   Why it matters: All 3 corpus winners foreshadow the alternative 30+ slides before naming it. Without this, the recommendation feels arbitrary.

3. IMPORTANT: Premium not decomposed (Slide 49)
   Current state: The purchase price calculation uses a single 50% premium ("M&A premium").
   Fix: Decompose into industry premium (e.g., 37.5% based on Reuters M&A data for [sector]) + company-specific premium (e.g., 10% for [reason — control premium / Poison Pill / dual-class shares / etc.]).
   Why it matters: 2 of 3 corpus winners decomposed the premium with a specific reason. The decomposition signals more rigor.

4. IMPORTANT: 4 charts on one slide (Slide 11)
   Current state: Slide 11 has 4 charts (revenue forecast, geographic breakdown, EV adoption, battery prices) on one slide. Each is too small to read clearly.
   Fix: Split into 2 slides. Combine the closest-related pair on the first slide, the other pair on the second.
   Why it matters: Cash Cows averaged 2 charts per slide; over-crowding is observed only in lower-quality slides in the corpus.

5. NICE-TO-HAVE: Conclusion contains new content (Slide 78)
   Current state: The conclusion slide introduces a new bullet about regulatory risks that hasn't appeared in earlier sections.
   Fix: Either remove the new content from the conclusion, or add it to the Acquisition Feasibility section first.
   Why it matters: All 3 corpus winners' conclusions are pure recap. New content on the conclusion suggests structural sloppiness.
```

---

## What NOT to critique

Some things won't matter (or are matters of style preference):

- **Specific color choices** — color discipline matters but specific palette choices don't
- **Specific font choices** — as long as fonts are readable and consistent
- **Hook quote presence** — Cash Cows had one, the others didn't. It's optional.
- **Number of authors on the team** — irrelevant
- **Whether the deck uses a specific banker-flex archetype** like EPS accretion or pro forma P&L — these are nice-to-haves, not load-bearing
- **Methodology roadmap** — only Cash Cows used this; not load-bearing

Don't flag these unless the user specifically asks.

---

## How to deliver the critique

1. **Lead with the strongest 1–2 things the deck does well.** Build trust before delivering criticism. Be specific.
2. **Present the top 3–5 issues** in the structured format above.
3. **End with a single highest-leverage suggestion.** What's the one change that would most improve the deck?
4. **Offer to dive deeper on any specific section.** The user may want to drill into a particular concern.

**Tone:** Honest, specific, constructive. Don't soften the assessment, but don't dump every issue. The goal is actionable feedback the team can use in the next 24–48 hours before submission.
