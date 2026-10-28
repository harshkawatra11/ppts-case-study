# Slide archetype cookbook

Component recipes observed across `ppts-inspo/EY.pdf` (primary) and
`ppts-inspo/Goal Diggers_DTU.pdf` (secondary — source of the layered-card and
punch-hole/wire motifs). Each entry: what it is, when to reach for it, its
geometry recipe in terms of the helpers in `figma-deck-kit.js`, and its
**minimum type sizes** — designed in from the start, not retrofitted (this was
the single most repeated correction across both prior builds).

Every recipe assumes the kit's `C` token object and a 1920×1080 slide. Adjust
absolute coordinates to your slide's actual content zone.

---

## Navigation & structure

### Chevron ribbon nav (section-scoped)
Row of interlocking tags across the top; active tag = `primary` fill + layered
back-card. **Rebuild the label set per section** — EY's appendix pages use a
completely different 4-tag ribbon from the main deck (`buildRibbon` takes
`labels`/`widths` as parameters for exactly this reason).
`buildRibbon(slide, activeIndex, labels, widths)`. Tag label: 24pt Poppins Bold.

### Band + rotated rail
Thin coloured vertical bar (10px wide) running the height of a content band,
with a small label chip at its head (not literally rotated text — a
horizontal pill reads more reliably than rotated text in the Slides API).
`addRect` for the bar + `addChip` for the head, 20pt Poppins Bold.
Use on your 2–3 densest slides only — overuse flattens the hierarchy.

### Dashed band divider
Thin dashed line separating stacked content zones on one slide.
`addDashedRow(slide, x, y, totalWidth, C.ink)`.

### Section chip
The slide's own title-tag, directly under the ribbon. `sectionChip(slide, text)`.
22–26pt Poppins Bold.

### Source line
Bottom-right, pipe-separated citations. `sourceLine(slide, text)`. 14pt —
the only font-floor exemption in the whole system.

---

## KPI & stat forms

### KPI hero band
Row of 3 layered stat cards spanning near-full width, each pairing a giant
numeral with a caption. `addLayeredCard` per card, then inside it:
numeral 56–72pt Poppins ExtraBold (vary color: `primary`/`primaryDeep`/`alert`
across the row for visual rhythm), caption 22pt Inter Semi Bold with `autoH`.

### Circle-callout with curved connector
A number/percentage inside a filled circle, with a short curved line
pointing at what it annotates (EY's "$1.5 billion → 2023 market size" style).
`addEllipse` for the circle + `addDiagonalWire` for a straight pointer (true
curves aren't worth the complexity — a straight ink line reads fine).
Numeral 32–44pt Poppins Bold inside the circle.

### Icon + giant numeral + label row
`90% less landfill waste` style: no icon library needed — use a simple ink-
outlined shape (rect/circle) as a placeholder glyph, numeral 48pt+ Poppins
ExtraBold immediately beside it, label 22pt Inter Semi Bold underneath.

### Horizontal bar rows with inline value pills
A labelled category (`Consumer Electronics Recycling`) next to a horizontal
ink-outlined bar whose length encodes the value, with the number as a small
pill at the bar's end. `addRect` for the bar + `addChip` for the value pill.
Bar label 22pt, pill value 22pt Poppins Bold.

---

## Market forms

### Nested TAM / SAM / SOM circles
Three concentric ink-outlined circles (`addEllipse`, decreasing radius),
each carrying its own numeral centered inside. Outer=TAM, middle=SAM,
inner=SOM. Label + numeral pair per ring: 18–20pt label, 24–32pt numeral,
both Poppins Bold, white or ink text depending on ring fill.
**Always bottom-up sourced** (named institution counts), per CLAUDE.md §5.

### CAGR bar set with value pills
Row of vertical bars of increasing height (`addRect`), each topped with a
percentage-CAGR pill (`addChip`, small) and a value label above the bar.
Bar category label 22pt, pill/value 22pt Poppins Bold.

### Regulatory / market timeline
Horizontal ink wire (`addWireH`) with circular year-nodes (`addEllipse`)
along it; labels alternate above/below the wire to avoid collision — this
alternation is the EY signature for timelines specifically (vs. the
non-alternating icon timeline used for execution roadmaps, see below).
Year label 22pt Poppins Bold, event description 22pt Inter Semi Bold.

### Positioning scatter (2-axis)
X/Y axis lines (`addWireH` + a vertical variant via `addRect` with swapped
w/h) with competitor "bubbles" (`addEllipse` + name label) plotted by two
dimensions (e.g. Technology Innovation × Production Capacity). Axis labels
22pt, bubble labels 18–20pt (bubble labels are the one place slightly under
the 22pt content floor is acceptable, as pure map annotation — keep them
≥16pt minimum and never use this exemption for anything with a claim in it).

### Whitespace quadrant
Two axis lines dividing a square into 4 zones, one zone tinted (`surface`/
`tint` fill) to highlight the open whitespace; dots plot known players,
a star/badge marks your own position. Axis labels 22pt, dot labels 20–22pt.

---

## Analysis forms

### Five-gauge row (Porter's Five Forces)
Five identical semicircular "gauge" shapes in a row (approximate with a
half-`addEllipse` — a full ellipse with the bottom half clipped by an
overlapping white rect is simplest), a needle line pointing to a
qualitative position, and a label underneath each. Label 22pt Inter Bold.

### Weighted scoring matrix + formula callout
`addTable` with business models/options as rows and scoring dimensions as
columns (Market Demand, Scalability, Capital Intensity, etc.), an
"Overall Viability" computed column, PLUS a separate tinted callout box
below stating the actual formula
(`Overall Viability = Demand × Scalability × Regulatory Support × Innovation ÷ Capital Intensity`).
**The formula callout is not optional** — a scoring table without its formula
shown reads as arbitrary. Formula text 20–22pt Inter Semi Bold in a `surface`
or `tint`-filled box.

### Competitive comparison table
`addTable` with companies as columns and attributes as rows (Annual Capacity,
Key Partnerships, Technology, Core Strengths, Weaknesses). Pair with a
"Market Gaps" callout box beneath (`addLayeredCard`, `accent` or `tint` fill)
listing 3–4 named gaps.

### Learnings / Obstacles paired panels
Two side-by-side tinted panels (`addFrame`, one green/`primary`-tint, one
red/`alert`-tint) each with a bulleted list — Learnings and Obstacles as a
pair is a distinct EY pattern from a single "Risks" list. Body 22pt.

### Concept cluster around a semicircle fan
Central "Growth Drivers"-style hub with 4–6 outlined tinted pill nodes
arranged in a fan/arc around it, each connected by a dashed line
(`addDashedRow` at an angle, or `addDiagonalWire` with a dashed look
approximated by several short segments). Node label 20–22pt.

---

## Strategy & flow forms

### Decision / strategy tree
Tiered pill nodes connected by arrows, branching top-down or left-right
(e.g. "Business Risks" → 4 categories → 2 sub-items each). Use `addChip` per
node, `addDiagonalWire` for branch lines. Root label 22–24pt, leaf labels
20–22pt.

### Mindmap hub with dashed connectors
A central concept card with dashed lines radiating to surrounding concept
nodes (distinct from hub-and-spoke below by using dashed rather than solid
wires, and by nodes being concepts, not physical components).

### Hub-and-spoke
Central `addLayeredCard` with solid `addDiagonalWire` spokes to surrounding
outlined boxes — used in NavSight for the "NavSight Kit" future-ecosystem
diagram. Place spoke nodes at evenly-spaced angles around the hub:
```js
const modules = [...]; // labels
const nodePos = modules.map((m, i) => {
  const angleDeg = -90 + i * (360 / modules.length);
  const rad = angleDeg * Math.PI / 180;
  return { m, x: cx + rx * Math.cos(rad), y: cy + ry * Math.sin(rad) };
});
```
Draw all wires first, spoke nodes second, hub card last (z-order = draw order).
Spoke label 20–22pt, hub label 22–24pt.

### Layered arc funnel
Stacked overlapping arc/ring shapes narrowing toward a conclusion (EY's
"Rationale" funnel). Approximate with successive `addEllipse` shapes of
decreasing width, each labelled on the left.

### Equation layout (A + B = C)
Three content blocks connected by literal `+` and `=` glyphs as large text
elements (32–40pt) — used for "Rationale = driver stack + evidence chart =
conclusion" style slides. Keep each side's content block internally simple
(a small chart or bullet list); the equation IS the structure.

### People / Planet / Profit (or similar 3-column impact split)
Three equal-width columns, each with its own big numeral(s) + short bullet
list, separated by thin vertical dividers. Column header 24pt, numerals
44–56pt, body 22pt.

### Pentagon / radar
5-sided outlined shape (approximate with a `figma.createStar` or manually
placed vector points) with a labelled node at each vertex — used for GTM
strategy pillars (Brand Positioning, Target Market, Marketing Channels,
Customer Engagement, Promotional Strategies). Vertex label 20–22pt.

---

## Financial forms

### Break-even line chart with in-chart annotation
Native polyline (`addDiagonalWire` chained point-to-point) for 2-3 series
(Total Cost / Profit / Operating Cost), plotted against a Y-axis, PLUS a
dashed vertical marker (`addDashedRow` rotated, or a thin dashed rect) at the
break-even X position with a bold callout label sitting directly on/beside
the marker — never relegate this to an external legend. Axis + series labels
22pt, in-chart callout 22–24pt Poppins Bold.

### Financial summary table
`addTable`: Year × Revenue × Variable Cost × Contribution Margin (or
equivalent). **Always pairs with a chart on the same slide** — a financial
table alone or a chart alone is under-EY; both together is the pattern.

### Stacked bar
Vertical bars with 2+ colored segments stacked (Operating Cost + Contribution
Margin, by year). `addRect` per segment, stacked by cumulative y-offset.
Segment value 20–22pt if space allows; segment legend swatch + label 22pt.

### Donut with center total
Ring built from `figma.createEllipse` with an inner white ellipse cut out
(or simulate with a large stroke-only ellipse, `strokeWeight` = ring
thickness, no fill), a bold total numeral centered inside, wedge labels
around the outside. Center numeral 32–40pt, wedge labels 20–22pt.

### Tornado / sensitivity chart
Horizontal mirrored bar pairs (one direction = `primary`, other = `accent`),
each row a variable name with the two bars extending left/right from a
center axis. Row label 22pt, bar value 20–22pt.

### Cost-share segmented bar with legend
Single horizontal bar divided into proportional-width colored segments
(`addFrame` per segment, width computed from `Math.round(totalBarWidth *
value/total)` — absorb rounding drift into the last segment), title above,
legend grid below (color swatch `addRect` + `label — ₹value` text, 2-3
columns). **Do not cram value labels inside narrow segments** (a segment
under ~100px cannot legibly hold 22pt text) — put the value in the legend
instead, which is where NavSight's cost-share slide landed after iteration.
Legend text 22pt Inter Semi Bold.

---

## Execution forms

### Alternating icon timeline
Horizontal wire (`addWireH`) with evenly-spaced circular quarter-markers
(`addEllipse`), content alternating above/below the wire per node (Q1 above,
Q2 below, Q3 above...) to avoid vertical collision across 6-8 nodes. Node
label 22pt Inter Bold, quarter tag 20-22pt Poppins Bold.

### 3-horizon strip
Three equal-width cards side by side — NOW / NEXT / LATER (or Year 1/2/3) —
each with a bold tag and 2-3 lines of description. `addFrame` per card, tag
20-22pt Poppins Bold in an accent color, description 18-22pt Inter Semi Bold
with `autoH`.

### TRL / readiness ladder
Horizontal rows, each an ink-outlined bar with a filled progress track
(color-coded by tier — green/amber/red or primary/tint/alert) plus a badge
chip showing the tier label. Row label 22pt, badge 20-22pt.

### Risk tree with 1:1 mitigation
Tree structure (see Decision/strategy tree above) where every leaf risk node
has a paired mitigation node directly beneath it in a contrasting (calmer)
color — the 1:1 pairing is the point; a risk list without paired mitigations
reads as incomplete. Risk label 22pt, mitigation label 22pt.

### Numbered badge list
Vertical list of `addBadge` (numbered circle) + text row pairs — used for
Objectives, Key Recommendations, ranked lists generally. Badge diameter
40-44px, list text 22pt Inter Bold, vertically centered against the badge.

### Punch-hole + wire strip
Reuses the ribbon's supply-chain motif for a process flow (not navigation) —
a horizontal row of nodes connected by wires with punch-holes at each
junction, used for e.g. a user-journey or signal-path diagram. Same
`addWireH` + `addEllipse` construction as `buildRibbon`, but the nodes are
process steps rather than section tags. Node label 22pt.

---

## Product forms

### Native UI mockups
Phone/browser/dashboard frames built entirely from native shapes — never
imported screenshots. Phone: outlined rect (radius=0, per §2) with a thin
top/bottom bar suggesting a notch/home indicator. Browser: rect with 3 small
circles (traffic lights) + a thin URL bar rect at top. Dashboard: rect with a
grid of smaller KPI-tile rects inside. All UI text inside mockups still
respects the 22pt floor — do not carve out a "realism" exemption for small
mockup text; this was tried and explicitly overridden by user feedback in a
prior build.

### Photo card in a layered ink frame
`addLayeredCard` with the front frame sized to **match the source photo's
aspect ratio** before uploading (fixes CLAUDE.md §7.4) — check both
dimensions first:
```js
// frame aspect should be within ~0.7-1.3x of photo aspect for portrait/
// square photos, or match closely for landscape photos. A 3:1+ aspect
// mismatch WILL crop the subject out of frame under FILL scale mode.
```
Caption below the frame: 14pt Inter Semi Bold, `primary` color (same
treatment as the source line — captions are a legitimate second exemption
from the 22pt floor, being metadata rather than content).
