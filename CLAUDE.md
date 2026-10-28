# Consulting-grade Figma Slides decks — standing workflow

This folder builds **content-heavy, McKinsey/BCG/EY-level case-competition decks**, built
**natively in Figma Slides** (1920×1080) via the Figma MCP `use_figma` tool. Zero imported
chart images — every chart, diagram, table, and mockup is drawn with native Figma vector
nodes (rects, ellipses, text, rotated lines). Reference decks already built to this standard:

- **ConsentGrid** — `2uKgT9OUWIhGR3qjn4IsnG` (11 slides, privacy-tech case)
- **NavSight** — `Bd2X2Akr7c4qm0ZogqvUcd` (8 slides, hardware/embedded-systems case)

Open either with `use_figma` read-only scripts to see the system below applied in practice.

Companion files in `deck-system/`:
- **`figma-deck-kit.js`** — copy-paste preamble (tokens, helpers, QA scripts). Paste this
  verbatim into every `use_figma` call that builds slide content. Never re-derive the
  helpers from scratch — that is how the position bug (§7.1) re-enters.
- **`slide-archetypes.md`** — cookbook of ~28 EY/Goal-Diggers slide components with the
  geometry recipe for each, keyed to the kit's helper functions.

---

## §0 Two-layer pipeline — content engineering, then visual execution

Building a deck is two separable jobs, and skipping the first one is the difference
between a deck that *looks* dense and one that actually *argues* something:

1. **Content / argument engineering** — invoke the **`case-competition-deck`** skill
   (installed at `.claude/skills/case-competition-deck/`) first, for any new case. It
   supplies what everything below in this file does not: case-type identification, the
   **contrarian-recommendation pattern** (the winning move is usually to argue against the
   obvious answer the prompt implies), a 40+ framework selection guide, the 8-section
   argument blueprint, and rhetorical tactics (action titles, foreshadowing, symmetric
   treatment, the "moneyshot," defensive depth). It also has a **critique mode** — use it
   to score a draft deck's argument quality, separately from this file's visual QA sweeps.
2. **Visual execution** — everything else in this file (§1–§8, plus `deck-system/`).
   Takes the content plan from step 1 and renders it as a dense EY-style Figma deck.

**Reconciling the two decks' native lengths.** The skill is calibrated on ~100-slide,
one-idea-per-slide Harvard GCCH decks (see its `references/gcch_corpus.md` — three named
winning decks, full section-by-section breakdowns). This folder's decks run 8–11 slides,
each an EY-dense one-pager. The skill's own scope guidance anticipates this: "shorter than
100 slides — keep the 8-section logic but compress aggressively." In practice, compress by
collapsing each of the skill's 8 sections (Exec Summary, Context, Actors, Quantitative
Analysis, Feasibility, Alternative, Conclusion, Appendix) down to **one dense slide each**
in this deck's ribbon, not one slide per sub-topic. The content patterns still apply at
slide-internal granularity:
- Each slide's headline = an **action title** (a declarative finding with a number), never
  a topic label — this is the single highest-leverage carryover.
- The **moneyshot** (§D in the skill's `SKILL.md`) becomes this deck's KPI-hero band or
  giant-numeral moment — every deck should have exactly one.
- **Foreshadowing** and **symmetric treatment** apply across slides, not within one.
- The **contrarian-recommendation pattern** shapes what the Solution/Recommendation slide
  actually argues, before a single Figma node gets drawn.

**Calibration honesty carries over.** The skill's patterns are corpus-derived from M&A
cases specifically; for other case types (as most of this folder's decks are — privacy
tech, embedded hardware), treat its case-type-specific frameworks as plausible
extrapolation, per its own `SKILL.md` §"Calibration honesty." The structural/rhetorical
patterns (contrarian recommendation, action titles, moneyshot, 8-section logic) generalize
with more confidence than the specific frameworks do.

**Where this fits in the build workflow:** run the skill's Step 1–2 (identify case type,
read the relevant `case_types/*.md` + `frameworks.md`) and draft the recommendation,
moneyshot, and per-slide action titles *before* §6 step 1 below. Everything from §6 onward
is unchanged — it now just renders an already-engineered argument instead of raw content.

---

## §1 The EY density doctrine — the actual quality bar

Distilled from `ppts-inspo/EY.pdf` (the primary reference — study it directly with the
PyMuPDF snippet in §8 before starting a new deck). These are the rules that separate an
EY page from a template page:

- **Zero dead space.** Every EY page is a full-bleed grid of content. Whitespace exists
  only as a gutter between panels, never as an empty region. If a slide has an empty
  region after the "required" content is placed, that is a sign a real content block is
  missing — add one (see §4), don't just enlarge decoration to fill it.
- **Bands + rotated rails.** Each slide splits into 2–3 horizontal bands; each band is
  labelled by a small pill on the left edge ("The IDEA", "WHY: Issues & Importance",
  "Rationale", "Timeline", "Risk Identification & Mitigation", "Opportunity for EY"). Rails
  are the single most recognisable EY device — use them on your densest 2–3 slides.
- **Chevron ribbon nav, section-scoped.** Interlocking arrow tags across the top; the
  active tag gets accent fill + dashed border. **The ribbon's label set changes per
  section** — EY's appendix pages carry an entirely different 4-tag ribbon
  (`Appendix-1 / Appendix-2 / Appendix-3 / Appendix-4`), not the main-deck one. Do not
  force one global ribbon across every slide if the deck has a distinct appendix section.
- **4–5 distinct type levels per slide.** Giant coloured KPI numerals (48–72pt) · coloured
  bold concept headings · bold inline keywords in body text · body · small captions.
  Fewer than 4 levels reads flat; MORE reads busy — 4–5 is the EY sweet spot.
- **Charts pair with tables, never replace them.** EY's financials page runs a line chart
  *and* a real Year × Revenue × Variable-Cost × Contribution-Margin table side by side.
- **Chart-type variety within one slide.** Density comes from combining a line chart +
  stacked bar + donut + pie on a single page, not from repeating one chart form.
- **In-chart annotations.** Bold callouts sit *on* the plot — a dashed vertical marker
  labelled "Breakeven on CM level — 3 yrs" sitting directly on the line — not off to the
  side in a legend.
- **Commentary panels.** A rail-labelled 3–4 bullet panel sits beside a chart and narrates
  what it means, with bold keywords inline (`Growing Power Backup Demand in India`).
- **Formula callouts.** Scoring matrices show their own maths in a tinted box, e.g.
  `Overall Viability = (Demand × Scalability × Regulatory Support × Innovation) ÷ Capital Intensity`.
- **Sources bottom-right**, small, accent-coloured, pipe-separated
  (`Niti Aayog | IBEF`, `McKinsey | MeitY`). Every content slide, no exceptions.

---

## §2 Design system — swappable token block

**Structure is fixed. Hues are swappable.** Nine roles, always named the same way so a new
deck is a find-and-replace of values, not a redesign:

```
primary · primaryDeep · accent · alert · tint · ink · surface · surfaceAlt · white
```

**Default values** (from ConsentGrid/NavSight — reuse unless the deck has a reason not to):

| Role | Hex | Used for |
|---|---|---|
| `primary` | `#5B21E6` | dominant accent — active ribbon tag, primary KPI numerals, rails |
| `primaryDeep` | `#3A0CA3` | secondary tier — inactive-but-emphasized elements |
| `accent` | `#F5C518` | back-card layer, chip fills, "so-what" callouts |
| `alert` | `#E5399E` | high-attention numerals, warning tiers, contrast KPI |
| `tint` | `#C4B5FD` | lightest tier — P3/low-priority rows, quiet fills |
| `ink` | `#0A0A0A` | ALL strokes, ALL body text — never a soft grey |
| `surface` | `#EDEDED` | card/panel background fill |
| `surfaceAlt` | `#F5F5F5` | zebra-striping alternate row fill |
| `white` | `#FFFFFF` | slide background, text-on-dark |

**To re-theme a new deck:** replace these nine hex values in the kit's `C` object (see
`deck-system/figma-deck-kit.js`). Every structural rule below stays unchanged regardless
of palette.

### Fixed regardless of palette
- **Canvas 1920×1080. `cornerRadius = 0` on every node, no exceptions.** Swept
  mechanically at the end of the build (§6 step 8) — do not hand-verify per shape.
- **Ink outlines everywhere.** 2–2.5px `ink` stroke on every panel, bar, node, circle, and
  table cell. This single rule is what stops output from reading as AI-generated /
  template output — do not skip it to save a step.
- **Layered "sticker" cards**, the signature motif. Never a soft drop-shadow.
  - BackCard: `accent` fill, 2.5px `ink` stroke, drawn first at `(x+7, y+7)`.
  - FrontCard: solid fill (`white`/`primary`/`accent`), 2px `ink` stroke, drawn second at
    `(x, y)`, carries all text.
- **Type scale — hard floor is 22pt for all content text.** Only the source line is exempt
  (14pt). This was the single most repeated correction across both prior builds — design
  it in from the first script, don't retrofit it.

| Role | Size (pt) |
|---|---|
| Cover title | 100–112 |
| Slide headline | 44–50 |
| Section chip | 22–26 |
| Ribbon tag | 24 |
| KPI numeral | 56–72 |
| Panel / card title | 24–26 |
| Body, bullets, table cells | **22 (floor)** |
| Chart / diagram labels | 22 |
| Source line | 14 (only exemption) |

- **Fonts.** Poppins `Bold` / `ExtraBold` — display, headlines, chips, KPI numerals, chart
  labels. Inter `Semi Bold` / `Bold` — body, table cells, captions. Verify availability
  with `listAvailableFontsAsync` before the first script — see the exact style-string
  gotcha in §7.7.

---

## §3 Reusable structural motifs

- **Ribbon nav** — row of tags across the top of every core slide. Each tag has a white
  punch-hole circle (ink ring) near each end; a 2.5px ink wire connects hole→hole between
  adjacent tags. Inactive: `accent` fill, `ink` text. Active: `primary` fill, `white` text,
  plus the layered back-card treatment. **Re-scope the label set per section** (§1).
- **Band + rail** — a thin coloured vertical bar plus a small label pill at its head,
  marking a horizontal content band. Reserve for your 2–3 densest slides.
- **Dashed divider** — thin dashed ink line separating stacked content zones on one slide.
- **Every slide gets its own architecture.** No repeated template across the deck — vary
  between KPI-hero, quadrant-hero, dashboard-grid, timeline-hero, table-wall, hub-and-spoke.
  See `deck-system/slide-archetypes.md` for the full catalogue.

---

## §4 The consulting content layer — MBA vocabulary is mandatory

A slide is not done because it is full — it is done when it carries a **named framework**.
Reach for these by default, keyed to what the slide is arguing:

- **Market** — TAM / SAM / SOM (bottom-up, by named institution counts — *not* top-down
  percentage-of-TAM slicing), CAGR, market share, whitespace mapping
- **Competition** — Porter's Five Forces, competitive positioning matrix, feature-parity
  matrix, moats, switching costs
- **Problem** — issue tree, MECE decomposition, 5-Whys, root-cause / fishbone, value chain
- **Business model** — unit economics (ACV, CAC, LTV, LTV:CAC, CAC payback, gross margin,
  contribution margin), revenue-mix, pricing tiers
- **Financials** — break-even, opex/capex split, burn & runway, sensitivity (tornado),
  scenario analysis (base / bull / bear)
- **GTM** — ICP, buying-committee map, sales cycle, pilot→paid conversion, land-and-expand
- **Risk** — register with probability × impact, 1:1 risk→mitigation pairing, RAG status
- **Execution** — 3-horizon roadmap, TRL ladder, milestone gates, People/Process/Technology
- **Impact** — ROI, payback period, People/Planet/Profit

---

## §5 Content integrity rules — non-negotiable

- **Never fabricate primary research.** No invented interview quotes, LOIs, or named
  willingness-to-pay figures. Where judges will expect primary data and none exists,
  present an honest **Customer Validation Plan** (planned interviews by role and target
  count) instead of pretending it was done.
- **India-first figures.** Financials must be benchmarked to Indian comparables, not a USD
  model relabelled in ₹ at an exchange rate — judges catch this. Use ₹ / lakh / crore
  notation throughout.
- **Every quantitative claim carries a source** in the bottom-right citation line.
- **Statistics stay at the precision the source actually supports.** Attributed and
  qualitative ("~2.2% — WHO") beats a fabricated decimal ("2.247%").
- **Cost/BOM figures must sum correctly and be defensible under viva questioning.** If a
  headline number changes, propagate it to *every* slide it appears on (cover chip, KPI,
  detail table, footer) — a stale figure on one slide is worse than a round number
  everywhere. Grep the whole deck for the old value before considering the change done.

---

## §6 Build workflow — the steps that worked twice

1. `create_new_file` → `editorType: "slides"`, correct `planKey` (call `whoami` first if
   unknown; ask the user if they belong to more than one team).
2. Verify fonts via `listAvailableFontsAsync` — style strings are exact and asymmetric:
   Inter uses `"Semi Bold"` (with a space), Poppins uses `"ExtraBold"` (no space).
3. Create all slides empty first in one script; capture their node IDs — you will
   reference these constantly.
4. **Paste the kit preamble from `figma-deck-kit.js` verbatim into every `use_figma`
   script that touches slide content.** Do not re-derive `addFrame`/`addText`/etc. inline.
5. Build in batches of 2–3 slides per `use_figma` call. Slides are isolated subtrees in
   the Plugin API — per-slide complexity is the real limit, not total node count across
   the deck.
6. Run the batch validator (overlap / text-clip / out-of-bounds, in the kit) after every
   batch. Screenshot at checkpoints: after batch 1 (confirms the visual system reads
   correctly before you build 20 more slides on a bad foundation) and again at the end.
7. Photos last. One `upload_assets` call per image (`count: 1` + `nodeId`), then POST the
   raw bytes to the returned URL. **Size the frame to the photo's aspect ratio before
   uploading** — see §7.4.
8. Run the `cornerRadius = 0` sweep across the whole deck (kit script).
9. Run the font-floor sweep — assert no content text under 22pt, sources exempted by name
   match (kit script).
10. Full visual review: screenshot every slide, check against the archetype spec it was
    built from, fix anything found, re-run the sweeps, done.

---

## §7 Failure modes — every bug hit building these two decks

1. **`(−240, −240)` coordinate offset.** Caused by setting `x`/`y` on a node *before*
   `appendChild`. Newly created nodes in a Slides file are silently auto-parented to a
   slide-grid origin at `(240, 240)`; setting position first bakes in a wrong relative
   offset that only shows up after the real `appendChild`. **Fix:** always append to the
   real parent first, configure everything (size, fill, position) after — at every level
   of nesting, not just the top. Never "fix" it by adding 240 back; that hides the bug and
   makes the next node worse.
2. **Text clipped inside its own card.** Wrapping text needs `textAutoResize = 'HEIGHT'`
   plus an explicit fixed width set via `resize()`. `layoutSizingHorizontal/Vertical =
   'FILL'` alone, without an auto-layout parent context, collapses the node to near-zero
   width instead of wrapping.
3. **Bulk cleanup via `children.filter(c => c.y > N)` deletes things you meant to keep.**
   A slide headline commonly sits around y≈186–196; a naive "delete everything below the
   chip" filter at y>175 catches it. Filter by node name/ID where possible, or explicitly
   re-verify (and restore) anything structurally important after a bulk delete.
4. **Photo cropped to a meaningless sliver.** Happens when the frame's aspect ratio
   doesn't match the source photo — e.g. an 824×236 (aspect 3.49, very wide) frame against
   a portrait photo showed only the subject's legs after a `FILL` crop. **Fix:** check
   `width/height` of both the frame and the source photo before uploading; reshape the
   frame to a sane aspect (portrait photo → portrait-ish frame, roughly 0.7–1.2 aspect)
   first.
5. **Re-uploading is required after any frame resize.** The `FILL` scale-mode crop is
   computed once at upload time; resizing the frame afterward does not recompute it. If
   you resize a photo frame, you must re-run `upload_assets` + POST for that node.
6. **Orphaned back-cards after "removing" a layered card.** A layered card is two nodes —
   the offset back rectangle and the front frame. Deleting only the front (e.g. by ID)
   leaves the accent-coloured back rectangle behind as a visible orphan block. Always
   locate and remove both, or query by position/size to find the stray one afterward.
7. **`Cannot use unloaded font "<family> <style>"`.** Every font family+style touched
   anywhere in a script — including inside helper functions — needs its own
   `loadFontAsync` call, batched together in one `Promise.all` at the top of the script.
   A script that mutates existing text must load *that node's current* font via
   `getStyledTextSegments(['fontName'])`, not assume a default.
8. **Validator false positives on intentional overlaps.** Ribbon punch-holes overlapping
   their tag rectangle, and layered-card back-rects overlapping their front frame, are
   *by design*. Read what the validator actually flagged before "fixing" it — most
   flagged pairs in a mature deck are these two patterns, not real bugs.
9. **`get_metadata` does not work on Slides files** (only Design files). Use read-only
   `use_figma` scripts for structural inspection, and `get_screenshot` /
   `node.screenshot()` for visual validation on Slides.
10. **Rotated diagonal wires (hub-and-spoke, etc.)** — to rotate a rectangle around a
    specific *pivot point* rather than its own center, compute the midpoint of the two
    endpoints, position the unrotated rectangle centered on that midpoint, resize to the
    endpoint distance, *then* set `.rotation` in degrees. Setting rotation on an
    arbitrarily-positioned rect will not land where you expect.

---

## §8 References

- `ppts-inspo/EY.pdf` — **primary reference**, 13 pages, 1440×810. Study before any new
  deck. `pdftoppm` is not installed in this environment; render pages with PyMuPDF instead:
  ```python
  import fitz
  doc = fitz.open(r"ppts-inspo/EY.pdf")
  for i in range(doc.page_count):
      doc[i].get_pixmap(dpi=110).save(f"ey_{i+1:02d}.png")
  ```
- `ppts-inspo/Goal Diggers_DTU.pdf` — secondary reference; source of the layered-card,
  3-D numbered-badge, and punch-hole/wire motifs used throughout §2–3.
- `ppts-inspo/` also contains BCG, Binance, Asian Paints, ITC, Nestle, Samsung, Salesforce,
  Schneider, Nilkamal, Foreteach, Star_Inspire decks — spot-check these for slide-form
  variety if EY/Goal Diggers don't cover a needed chart type.
- `deck-system/figma-deck-kit.js` — the copy-paste helper preamble (§6 step 4).
- `deck-system/slide-archetypes.md` — the full slide-component cookbook.
- `.claude/skills/case-competition-deck/` — the content-engineering skill (§0). Its
  `SKILL.md` is the entry point; `references/structure.md` has the 8-section blueprint,
  `references/archetypes.md` the case-agnostic slide templates (a different, complementary
  catalogue from this folder's `deck-system/slide-archetypes.md` — that one is Figma
  geometry, this one is argument sequencing), `references/frameworks.md` the 40+
  framework catalog, `references/rhetoric.md` the persuasion tactics,
  `references/critique_rubric.md` for critique mode, `references/gcch_corpus.md` the
  three-deck calibration source, and `references/case_types/*.md` the six case-type guides
  (M&A/finance, strategy, marketing, social impact, policy & trade, operations).
- Prior decks for direct inspection: ConsentGrid (`2uKgT9OUWIhGR3qjn4IsnG`), NavSight
  (`Bd2X2Akr7c4qm0ZogqvUcd`).
