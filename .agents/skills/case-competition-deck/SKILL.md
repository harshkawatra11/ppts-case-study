---
name: case-competition-deck
description: "Use this skill whenever the user is working on a case competition or any structured analytical deliverable — generating a deck, drafting slides, or critiquing a draft. Triggers: 'case competition', 'case comp', 'case study', 'consulting case', 'business case', 'strategy case', 'marketing case', 'social impact case', 'policy case', 'trade case', 'M&A case', 'IR case', 'should X do Y', 'recommend a strategy', 'pitch a solution', any case prompt asking for a recommendation on a structured business / policy / social problem. The skill encodes a meta-playbook for persuasive analytical decks: 8-section structure, the contrarian recommendation pattern, slide archetypes, and rhetorical engineering. Has case-type guides for M&A/finance, strategy, marketing, social impact, policy and trade, and operations. Use even if the user doesn't mention these patterns — they want their deck to look like winners look."
---

# Case Competition Deck Skill

A meta-playbook for persuasive analytical decks. Works for any case type — M&A, strategy, marketing, social impact, policy and trade, international relations, operations — by separating the universal patterns (structure, rhetoric, archetypes) from case-specific frameworks (DCF for M&A, customer LTV for marketing, SROI for social impact, welfare analysis for policy, etc.).

The skill supports three operating modes:
1. **Generate mode** — produce a full deck (or a section) from a case prompt
2. **Slide mode** — draft a specific slide archetype on demand
3. **Critique mode** — evaluate an existing draft against the meta-playbook

---

## Calibration honesty

The meta-patterns in this skill were derived from analysis of three winning M&A decks at the Global Case Competition at Harvard (2019, 2020, 2021). The patterns generalize because they reflect principles of persuasive analytical work that apply across case types — but the further the case is from M&A/finance, the more the case-specific guidance should be treated as plausible extrapolation rather than calibrated truth. Flag the limit honestly to the user when relevant.

Detailed corpus calibration: see `references/gcch_corpus.md`.

---

## How to use this skill

### Step 1: Identify the case type

The user's prompt may or may not specify the case type. Common case types and their indicators:

| Case type | Indicators | Guide file |
|---|---|---|
| **M&A / Finance** | "should X acquire Y", "valuation", "DCF", "merger", deal recommendation | `case_types/mna_finance.md` |
| **Strategy** | "market entry", "competitive response", "growth strategy", "should X enter Y market", "Porter's", "5 forces" | `case_types/strategy.md` |
| **Marketing** | "campaign design", "brand positioning", "rebrand", "go-to-market", "customer acquisition", "CMO audience" | `case_types/marketing.md` |
| **Social impact** | "NGO", "social enterprise", "policy intervention", "philanthropy", "development", "education / health / poverty problem" | `case_types/social_impact.md` |
| **Policy / Trade / IR** | "trade policy", "tariffs", "sanctions", "geopolitical", "foreign policy", "government response", "international relations" | `case_types/policy_and_trade.md` |
| **Operations** | "supply chain", "operational restructuring", "process redesign", "throughput", "lean", "Six Sigma" | `case_types/operations.md` |

If the case doesn't fit neatly into one of these buckets, pick the closest match and adapt — or ask the user.

If the user has a case type the guides don't cover (real estate, healthcare delivery, education curriculum, climate adaptation, etc.), use the meta-playbook directly and adapt frameworks from the closest available guide. The meta-patterns work; only the analytical frameworks need substitution.

### Step 2: Read the right reference files

For **generate mode** (full deck or section):
1. Read `references/structure.md` — the 8-section blueprint
2. Read the relevant `case_types/*.md` for case-specific frameworks and slide adaptations
3. Read `references/frameworks.md` to select the analytical frameworks that fit the case (PESTLE, Porter's 5 Forces, VRIO, 7 Powers, Blue Ocean / ERRC, Wardley Mapping, JTBD, etc.)
4. Read `references/archetypes.md` for the universal slide templates as you build each section
5. Read `references/rhetoric.md` — make sure the argument is engineered persuasively
6. When producing the actual .pptx file, also read `/mnt/skills/public/pptx/SKILL.md` for production mechanics

For **slide mode** (single slide):
1. Read `references/archetypes.md` for the universal template
2. Read the relevant `case_types/*.md` if the slide is case-type-specific
3. Read `references/frameworks.md` if the slide visualizes a specific framework (Porter's 5 Forces, 7-S, BCG matrix, etc.)

For **critique mode**:
1. Read `references/critique_rubric.md`
2. Read the relevant `case_types/*.md` for case-specific evaluation criteria
3. Read `references/frameworks.md` to check whether the deck used appropriate frameworks correctly

---

## The universal meta-playbook (case-agnostic)

These are the patterns observed at GCCH and likely generalizing to any analytical deck. Treat them as defaults unless the user has a specific reason to deviate.

### A. The recommendation is contrarian

The winning deck typically recommends *against* the obvious answer suggested by the case prompt and *for* a less-obvious alternative the team identifies.

| Case framing | Obvious answer (often the wrong one) | Contrarian (often the winning one) |
|---|---|---|
| "Should X acquire Y?" | Yes, here's the integration plan | No, acquire Z instead |
| "How should X enter market Y?" | Direct entry with current product | Partnership / different market / wait |
| "Design a campaign for product X" | Target the obvious demographic | Target an overlooked adjacent segment |
| "How should we address poverty in region X?" | Direct aid scaled up | Institution building / different intervention type |
| "Should country X impose tariffs?" | Yes with these specifics | Targeted sanctions / build a coalition / negotiate from strength |
| "Reorganize the supply chain" | Optimize current network | Redesign for digital / different topology entirely |

Why this works:
1. The contrarian answer is harder to defend, so doing it well signals stronger work
2. It demonstrates critical thinking beyond defending the prompt
3. The recommended alternative is a contribution beyond what was asked

**But the contrarian play is a default, not a rule.** If the user has done genuine analysis and concluded "yes, do the obvious thing," support that — but stress-test it against alternatives first.

### B. Consulting frameworks — the analytical scaffolding

Underneath the structure and rhetoric, a winning deck applies *the right consulting frameworks* to the actual analytical work. The skill includes a comprehensive frameworks catalog at `references/frameworks.md` with 40+ frameworks organized by purpose.

Selection guide — which framework when:

| If you're analyzing… | Reach for these |
|---|---|
| Industry environment / macro forces | PESTLE → Porter's 5 Forces → Industry Life Cycle → Wardley Mapping |
| Competitive positioning | Porter's Generic Strategies → Value Disciplines → Blue Ocean (Strategy Canvas + ERRC) → 7 Powers (Helmer) |
| Internal capability / advantage | McKinsey 7-S → Value Chain → VRIO → Core Competencies |
| Portfolio / growth choice | BCG Matrix → GE 9-Box → Ansoff → Three Horizons → Strategy Diamond |
| Customer / marketing | STP → JTBD → Kano Model → Customer Journey → 4Ps/7Ps → AARRR Pirate Metrics |
| Innovation strategy | Disruptive Innovation (Christensen) → Crossing the Chasm → S-Curve → Wardley Mapping |
| Organizational design | McKinsey 7-S → Galbraith Star → Cynefin → Burke-Litwin |
| Change management | Kotter 8-Step → ADKAR → Lewin → Bridges Transition |
| Decision rights | RACI → RAPID → DACI |
| Root cause / problem-solving | MECE → Issue Tree → 5 Whys → Fishbone → Kepner-Tregoe → Pre-mortem |
| Risk / uncertainty | Scenario Planning → Risk Heat Map → Black Swan → Real Options |
| Operations / process | Lean / TPS → Six Sigma DMAIC → Theory of Constraints → Value Stream Mapping |
| International strategy | CAGE (Ghemawat) → AAA → Transnational Matrix (Bartlett & Ghoshal) |
| Performance management | Balanced Scorecard → OKRs → Hoshin Kanri → KPI Trees |
| Stakeholder / influence | Stakeholder Power-Interest Grid → McKinsey Influence Model |
| Profit / financial decomposition | DuPont Analysis → Profit Pool Analysis → KPI Trees |
| Problem communication | MECE → Pyramid Principle → Hypothesis-driven approach |

Most strong analyses layer 2–4 frameworks. Don't apply every framework — pick the right ones. See `references/frameworks.md` for the layering patterns ("PESTLE + Porter's 5 Forces + Strategic Group Mapping" for industry analysis, "VRIO + 7 Powers" for sustainable advantage, etc.).

### C. The 8-section structure

| # | Section | What it does | Case-type variants |
|---|---|---|---|
| Front | Cover, TOC, abbreviations | Orientation | Universal — always include |
| I | Executive Summary | Lock in the recommendation in a 2-column for/against | Universal — always include |
| II | Context / Environment | Build the disruption thesis; foreshadow the alternative | M&A: industry analysis. Strategy: market analysis. Marketing: consumer + competitive landscape. Social: problem analysis. Policy: geopolitical / economic context. Ops: industry + value chain |
| III | Actors / Stakeholders | Symmetric coverage of the players involved | M&A: acquirer + target. Strategy: company + competitors. Marketing: customer + competitors. Social: beneficiaries + implementers + funders. Policy: countries / blocs / domestic groups. Ops: customers + suppliers + operations |
| IV | Quantitative Analysis | Quantify the case for the recommendation | M&A: comparables + DCF + synergies. Strategy: market sizing + NPV of options. Marketing: customer LTV + ROAS. Social: cost-effectiveness + SROI. Policy: welfare economics + impact assessment. Ops: cost-benefit + throughput |
| V | Feasibility | Show the obvious answer can't work even if quantitatively attractive | M&A: financing + governance. Strategy: capability gap + competitive response. Marketing: brand fit + execution. Social: implementation risk + sustainability. Policy: political feasibility + diplomatic costs. Ops: change management + capability |
| VI | Recommended Alternative | Name and analyze the alternative; quantify it; plan implementation | Universal pattern, case-specific frameworks |
| VII | Conclusion | Single synthesis slide, no new content | Universal |
| Appendix | Deep dives | Defensive depth backing every quantitative claim | Universal |
| Bibliography | Sources | Harvard-style references | Universal |

Total target: typically 100 slides (varies by case rules — could be 30, 60, 100, or unconstrained).

### D. Universal slide archetypes

These templates work for any case type:
- Cover slide
- Hook quote slide (optional)
- Table of contents
- Abbreviations table
- Section dividers
- Sub-section progress trackers (when a section has multiple parts)
- Persistent navigation bar on every content slide
- **Two-chart action-title slide** (the workhorse)
- Multi-chart dense slide (when 3 charts justified)
- MECE option-filter table (eliminates candidates using shared criteria)
- Symmetric comparison grid (actors / options / scenarios across consistent axes)
- Three-scenario projection (Pessimistic / Realistic / Optimistic — works for any uncertain quantity)
- Sensitivity analysis matrix (when two parameters drive the answer)
- The "moneyshot" — the single number / visual that is the deck's climax
- Option shortlist comparison table
- Build / Buy / Partner template (or whatever 3-path framework fits)
- Deep dive on chosen alternative (with 2–4 third-party expert validations)
- Post-decision implementation plan
- Section-closer recap ("Conclusively…")
- Conclusion synthesis (Q&A grid, three-card, or section-recap formats)
- Appendix TOC + deep-dive slides
- Harvard-style bibliography slides

What the "moneyshot" is varies by case type:
- M&A: "$X bn of value destroyed"
- Strategy: "$X bn opportunity / $X bn risk"
- Marketing: "X% LTV improvement / $X CAC reduction"
- Social impact: "X lives reached at $Y per beneficiary" or "X DALYs averted at $Y cost-effectiveness"
- Policy: "$X bn welfare impact / X jobs affected"
- Operations: "$X bn cost savings / X% throughput improvement"

Detailed templates in `references/archetypes.md`. Case-specific archetypes in `case_types/*.md`.

### E. Universal rhetorical tactics

These work across all case types:

1. **Action titles, never topic labels.** Every slide headline is a full-sentence finding with a number ideally.
2. **Foreshadow the alternative.** Seed the alternative thesis in the context/environment section 30+ slides before naming it.
3. **Symmetric treatment.** Same slide structure for comparable things (actors, options, scenarios).
4. **Three-scenario thinking.** Never give a single point estimate for an uncertain number.
5. **Pre-empt your own weaknesses.** Acknowledge methodology limits inline before judges raise them.
6. **Third-party validation.** Include 2–4 named expert quotes supporting the contrarian recommendation.
7. **Defensive depth.** Every main-deck claim has an appendix backup.
8. **Double synthesis.** Section closer ("Conclusively…") + final synthesis ("Therefore…").
9. **Quantification at every opportunity.** Numbers are persuasion currency.
10. **The moneyshot is the climax.** Build the analytical section toward a single memorable number/visual.

Detailed treatment in `references/rhetoric.md`.

---

## Generate mode workflow

When the user asks you to generate a deck (or a section), follow this sequence:

1. **Identify the case type.** Use the table above. If unclear, ask.
2. **Identify the case prompt.** What's the question? Who are the actors? What's the audience (board, government, foundation, CMO)? What's the deliverable format (deck length, time)?
3. **Read the relevant case-type guide.** This tells you what "quantitative analysis" means for this case type, what the moneyshot looks like, what frameworks apply.
4. **Decide the recommendation first.** Default to the contrarian play. To pick the alternative:
   - What gap does the obvious answer leave unaddressed?
   - What less-obvious option specifically fills that gap?
   - Can you foreshadow the alternative in the context section?
5. **Build the foreshadowing.** Pick the context/environment slide that will plant the seed.
6. **Draft the executive summary first.** Recommendation in headline + 3 reasons each side.
7. **Draft the moneyshot next.** What's the central quantitative claim? This shapes the analytical section.
8. **Then everything else.** Context → Actors → Fit/Analysis → Feasibility → Alternative → Conclusion.
9. **Build the appendix in parallel.** Every quantitative claim gets a backup slide.
10. **Check action titles.** Re-read every slide headline. Rewrite topic labels into declarative findings.
11. **Polish pass.** Search for "TODO", "Insert", "Placeholder", "TBD", "xyz", "Lorem", names from other corpus decks.
12. **Produce the .pptx file.** Use the pptx skill for the mechanics.

---

## Slide mode workflow

When the user asks for a single slide:

1. **Identify the archetype.** Match the request to a universal archetype (in `archetypes.md`) or a case-type-specific archetype (in the relevant `case_types/*.md`).
2. **Get the inputs.** Case context, headline finding, supporting data.
3. **Write the slide content** per the archetype: action title + sub-headline + content layout + source citation + sub-section label.

---

## Critique mode workflow

When the user shares a draft deck for feedback:

1. **Identify the case type** (from prompt or by reading the deck).
2. **Read `references/critique_rubric.md`** and the case-type-specific notes in the relevant `case_types/*.md`.
3. **Score against the rubric:** structure pass/fail items, quality dimensions, polish.
4. **Surface the top 3–5 issues** with specific fixes. Don't dump every minor thing.
5. **Lead with what the deck does well**, then deliver the criticism.

---

## Common failure modes across all case types

1. **Generic recommendation.** The recommendation doesn't address the specific case prompt or could apply to any company / context.
2. **No foreshadowing.** The alternative arrives as a surprise.
3. **Descriptive action titles instead of declarative.** "Company X's Position" instead of "Company X holds 25% market share but is losing 2 points/year."
4. **Single point estimates for uncertain numbers.** No scenarios or sensitivity.
5. **Conclusion contains new content.** The conclusion should be pure recap.
6. **Polish failures.** Placeholder text, copy-paste artifacts from templates, missing source citations.
7. **No third-party validation for the contrarian.** Expert quotes are absent or anonymous.
8. **Asymmetric treatment.** Comparable things (actors, options) get different slide structures.
9. **No appendix or thin appendix.** No defensive depth behind main-deck claims.
10. **Audience mismatch.** Banker rigor for a CMO audience, or marketing-speak for a board audience.

---

## Scope and adaptation guidance

The meta-patterns generalize. But the *register* and *frameworks* don't transfer one-for-one. When the case is:

- **Far from M&A** (e.g., social impact, policy, marketing): downplay banker-flex archetypes (football field, EPS accretion). Use case-specific analytical frameworks. Keep the meta-patterns.
- **Shorter than 100 slides** (consulting cases are often 15–30 slides): keep the 8-section logic but compress aggressively. The exec summary and moneyshot stay; the appendix shrinks.
- **Non-deck deliverable** (memo, report, briefing book): the rhetorical patterns still apply (action titles, foreshadowing, scenarios) but the slide archetypes obviously don't.
- **A specific audience** (government policy maker, NGO foundation, marketing team, CEO): adjust register and remove archetypes that don't fit.
- **A case type not covered** by the included guides: use the meta-playbook + the closest case-type guide as a starting point and adapt frameworks. Flag the adaptation to the user.

When in doubt, ask the user the case type and audience explicitly. The case type determines the analytical frameworks; the audience determines the register.

---

## One more thing

The deck is a persuasion artifact, not a research report. Every slide should *do work* — advance the argument, pre-empt a critique, or support a quantified claim. If a slide doesn't earn its keep, cut it.
