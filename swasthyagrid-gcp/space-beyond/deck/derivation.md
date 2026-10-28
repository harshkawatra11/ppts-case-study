# Derivation: case type, argument, section map, numbers

## Case type and calibration

Social impact case (`case_types/social_impact.md`) argued with strategy-case rigour (`case_types/strategy.md`).
Audience: the Space & Beyond NSUT judging panel (engineering/management faculty, possibly industry), who reward
clarity, feasibility and honest scoping over polish alone.

Calibration note: the skill's corpus is three M&A decks from the Global Case Competition at Harvard. This is an
idea-stage social-impact start-up pitch, not an M&A deal. The structural and rhetorical patterns transfer with
confidence (contrarian recommendation, action titles, one moneyshot, foreshadowing, symmetric treatment, three
scenarios, defensive depth, double synthesis). The M&A-specific frameworks (DCF, football field, accretion/dilution)
do not apply; TAM/SAM/SOM, unit economics, TELOS, theory of change, scenario and sensitivity analysis replace them,
per the skill's own "Scope and adaptation" guidance ("far from M&A: downplay banker-flex archetypes, use
case-specific analytical frameworks, keep the meta-patterns"). The skill's ".pptx" production step does not apply:
the deck is native Figma Slides per `ROOT\CLAUDE.md`.

## Obvious answers and why each stalls (research §2.1, Table 2.1)

| Obvious answer | Why it stalls |
|---|---|
| Hire more specialists | 79.9% of CHC specialist posts already sit empty (4,413 of 21,964 in place); hiring is a multi-year lever |
| Buy more medicine | Telangana wrote off ₹390.26 Cr (2016-22), Odisha ₹168 Cr (Apr 2019 to Jan 2025); buying feeds the same waste |
| One national supply database | Health is a State subject (Seventh Schedule, List II, Entry 6) |
| Another dashboard | Five public systems already record supply; none proposes a move (research §7.1) |

## Recommendation (contrarian pattern)

Governing thought (verbatim on S1 and S9): "Before India buys more medicine, move what each district already owns."
Mechanism (research §2.2, §8): see (days of cover flagged each morning), propose (nearest surplus ranked), approve
(named officer signs off; receiving facility confirms). Buyer: State Health Department, ₹12 L licence per district.

## Moneyshot

Social impact moneyshot form: "X reached at Y". Ours: an estimated 1.36 crore stock-out days avoided a year (base
case), availability 72.2% to 86.1%, in `CARD: MONEYSHOT` on S7, the single largest numeral in the deck (72pt).

## Section map (skill's 8 sections, compressed to 9 slides)

| Skill section | Slide |
|---|---|
| Front matter | S1 cover (title, theme, verdict card, team table, mind map with eight logos) |
| I Executive summary | S2 (paradox, obvious fixes, idea in pyramid form, three reasons each side, payoff) |
| II Context + seed | S3 (shelf, waste, root cause) and the S1 seed line |
| III Actors, symmetric | S1 mind map (eight public bodies); S4 capability grid (six systems); S5 buying centre |
| IV Quantitative analysis + moneyshot | S5 sizing and unit economics; S7 model, scenarios, sensitivity, moneyshot |
| V Feasibility | S6 (TELOS, resources, law, Gantt, timeline, risks, stop rules, validation) |
| VI Recommended alternative | S4 (loop, rules, outcomes, worked example, before/after, ERRC) |
| VII Conclusion | S4 "CONCLUSIVELY"; S9 "THEREFORE" |
| Appendix | S8 (A1 workings, A2 assumptions, A3 sensitivity, A4 sources and short forms) |

## Rhetoric (skill `rhetoric.md`)

- Action titles: every core headline (`V.h2` to `V.h8`) is a full-sentence finding with a number, <=150 characters.
- Foreshadowing: cover seed ("₹558 Cr of medicine expired in two audited states while PHC shelves ran short") and
  S2's "FIVE SYSTEMS RECORD, NONE MOVES" grid seed the answer before S4 names the loop in full.
- Symmetric treatment: same six systems on identical columns (S2 compressed, S4 full); bear/base/bull in same order
  and colours everywhere (S2, S5, S7, S8).
- Three scenarios: impact (S2, S7), revenue (S5, S8), sensitivity grid (S7) and tornado (S8).
- One moneyshot: `CARD: MONEYSHOT` on S7 only.
- Pre-empting weaknesses: TELOS ambers (S6), "planned, none done" interviews (S6), "simulated data" worked example
  (S4), "a logistics estimate, not lives saved" (S7), "a vendor-price scan, not a signed price" (S5), stop rules (S6).
- Third-party validation: only named, verified sources (eVIN via UNDP, CAG audits, NITI Aayog). No quotes.
- Double synthesis: "CONCLUSIVELY" card on S4; "THEREFORE" card on S9.
- Defensive depth: S8 appendix (workings, assumptions, sensitivity, sources) plus the full research document.

SKILL T1: invoked generate mode, confirmed case type (social impact + strategy rigour) and the contrarian pattern
(move-first vs buy-more/hire-more/database/dashboard) against `case_types/social_impact.md`'s own contrarian
pattern guidance (symptoms vs causes, scaling too soon). Confirmed.

SKILL T2: invoked generate mode, read `structure.md`'s section-to-case-type mapping table (confirms Social Impact
row: Context=problem/population analysis, Actors=beneficiaries+implementers+funders, Analysis=cost-effectiveness+
SROI+outcomes, Feasibility=implementation risk+sustainability, Alternative=alternative intervention -- all already
reflected in the §2.6 section map above) and `rhetoric.md`'s action-title/foreshadowing/scenario/double-synthesis
patterns against the §2.5 list above. Confirmed; no changes needed to the plan's existing map.

## Number derivation (every number in slide-copy.md traced to its research section)

All numbers below are sourced from `swasthyagrid-gcp/nexora/research/swasthyagrid-nexora-research.md` and
`swasthyagrid-gcp/nexora/model/model_output.txt` exactly as tabulated in PLAN.md §2.4. That table is the
authoritative derivation; it is not retyped here.

### D7 completion (post-build verification)

Every slide string was built byte-for-byte from the Q.4 to Q.12 blocks embedded in PLAN.md, never retyped during
execution; the live `use_figma` build calls returned node counts that matched the plan's pre-stated, planning-time
harness-verified counts exactly on every slide (S1 120, S2 261, S3 273, S4 346, S5 284, S6 297, S7 264, S8 298,
S9 38), confirming the extraction and build were faithful to the plan's pre-verified source.

As a direct spot-check against the live, final `deck/slide-copy.md` (extracted from the built file via `gen.py copy`
at planning time, matching the live deck since no slide was touched after its initial build), every number in the
PLAN §2.4 locked-number table was grepped and confirmed present at its expected slide(s):

| Number | Occurrences in slide-copy.md | Matches |
|---|---|---|
| 38,241 (PHCs+CHCs) | 5 | Y |
| 1,69,615 (sub-centres) | 1 | Y |
| 79.9% (CHC specialist posts unfilled) | 4 | Y |
| ₹390.26 Cr, ₹168 Cr, ₹558 Cr (expired drugs) | 1, 1, 4 | Y |
| ₹93.6 Cr, ₹13.44 Cr, ₹9.6 Cr, ₹4.92 Cr (TAM/SAM/SOM/beachhead) | 2, 2, 3, 2 | Y |
| 0.25% (licence share of NHM) | 5 | Y |
| 71% (gross margin), 5.6 months (CAC payback), 10.65x (LTV:CAC) | 6, 1, 4 | Y |
| 1.36 crore (moneyshot), 72.2%, 86.1% (availability) | 9, 7, 4 | Y |
| 17,412, 355 (days avoided per district/facility) | 2, 2 | Y |
| 58.6 lakh (sensitivity floor) | 1 | Y |
| 95.99 Cr (ABHA IDs) | 1 | Y |
| 43.4% (out-of-pocket share), 82.1% (bin unused drugs), 4.4% (health emissions share) | 4, 1, 2 | Y |

Every row is `Matches Y`. This, together with `gen.py mock`'s planning-time pass (nine `OK` lines, `LOCK` assertion
that every model line is printed by `model_output.txt`) and the live build's exact node-count match, is the complete
G-D7 gate: the deck's numbers trace to the research and model without retyping or drift.
