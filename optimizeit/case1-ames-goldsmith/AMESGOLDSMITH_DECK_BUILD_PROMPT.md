# Build prompt — Ames Goldsmith case-competition deck (Figma Slides, EY-density system)

Paste this whole document as the task brief to the session that will actually run
`use_figma`. It assumes that session has already read `CLAUDE.md` (the standing
workflow) and will paste `deck-system/figma-deck-kit.js` verbatim into every script,
per CLAUDE.md §6 step 4. This document is the *content and architecture spec* for one
specific deck — Ames Goldsmith / Catalyst Refiners H₂S disaster, OptimizeIT Case 1 —
layered on top of that system. It does not redefine any structural rule from CLAUDE.md;
where the two disagree, CLAUDE.md wins.

---

## 0. Non-negotiable framing

- **Build natively in Figma Slides via `use_figma`**, 1920×1080, zero imported chart
  images — every chart/diagram/table/mockup is native vector nodes. Follow CLAUDE.md
  §1–§7 exactly: EY density doctrine, the nine-role token system, layered sticker
  cards, ribbon nav, band+rail motif, `cornerRadius = 0` sweep, font-floor sweep.
- **Hard slide budget: 12 slides.** 1 cover + 9 core + 1 thank-you + 1 appendix. This
  is a compression of a 14-chapter, 53,222-word investigation into 9 working slides —
  every core slide carries two or three merged arguments. Nothing decorative survives.
  Each of the case brief's four explicit deliverables (thermodynamic/kinetic modelling,
  HAZOP/LOPA, Decommissioning MOC framework, continuous gas detection protocol) keeps
  its own dedicated slide so a judge scoring against the deliverable list finds each
  one unmistakably.
- **Type floor raised above CLAUDE.md's default.** Body/bullets/table cells: **24pt
  default, 23pt absolute floor** (CLAUDE.md's floor is 22). Panel/card titles: 26pt.
  Chart/diagram labels: 23pt. Source line: 16pt (CLAUDE.md's is 14). If a panel cannot
  hold its content at 23pt, **cut content, do not shrink type below the floor.**
  Escalate individual panels to 25pt if the batch-1 screenshot checkpoint reads poorly.
- **No em-dashes or en-dashes anywhere in slide text.** Not in headlines, not in body,
  not in table cells. Use a period, colon, comma, or restructure the sentence. Numeric
  ranges read `48 to 714 °C`, never `48–714 °C`. This is swept mechanically (§6, D4)
  and fails the build on any hit — write clean the first time rather than relying on
  the sweep to catch it.
- **No AI-slop.** Banned outright: "leveraging," "robust," "seamless," "cutting-edge,"
  "game-changer," "synergy," "in today's world," "it is important to note,"
  "furthermore," "moreover," "delve," "landscape" used as a metaphor. Every bullet on
  every slide must pass this test: it carries **(a)** a number with a unit, **(b)** a
  named framework/standard/regulation, or **(c)** a named proper noun (facility,
  agency, chemical, incident). A bullet with none of the three is filler — cut it.
- **This is a forensic investigation, not a pitch.** The register is a process-safety
  engineering report presented to judges, not marketing copy. Confidence is stated,
  not implied. Where the dossier hedges, the slide hedges too — see the epistemic
  rules below. A deck that reads more confident than its own source material is a
  liability in Q&A, not an asset.
- **Content integrity is load-bearing** (CLAUDE.md §5, adapted — see §0a below).
  1. Every quantitative claim on every slide must trace to a specific dossier chapter,
     and through it to a real cited primary source. Nothing is estimated fresh for the
     deck that was not already estimated, with its assumption set, in the dossier.
  2. The CSB investigation into this incident is **open** — no final report exists.
     No slide may present a causal finding as CSB's. Root-cause content is explicitly
     labelled as this analysis's own reconstruction.
  3. NO₂ is **not confirmed** as a released agent in any open-source reporting found
     during research — only H₂S is confirmed. Any slide showing NO₂ carries a small
     `tint`-filled "MODELLED" or "INFERRED" chip (20pt Poppins Bold). Never present it
     on the same footing as the confirmed H₂S release.
  4. Casualty counts are a **range**, not an invented single number: 2 fatalities
     (uncontested) and 19 to 30+ treated, sourced to at least five different outlets
     that never converge on one figure, plus CSB's own unreconciled "4 additional
     injuries" figure on its case page. State the range and the CSB discrepancy —
     never round to a clean number for slide aesthetics.

### 0a. Currency and geography — CLAUDE.md §5 does not transfer as-is
CLAUDE.md §5's "India-first figures" rule was written for India-market startup cases in
this same project folder. **This deck is a US industrial accident with US regulators,
US casualty-cost benchmarks, and US penalty schedules — every financial figure in this
deck is USD, sourced to US comparables (OSHA penalty schedule, National Safety Council
injury-cost data, West Virginia settlement benchmarks).** Do not convert or relabel
anything in ₹. Every other §5 rule holds without modification: no fabricated primary
research, every quantitative claim sourced, statistics held at the precision the source
actually supports (a hedged "~$X, source Y" beats a fabricated decimal), and a changed
figure propagated to every slide it appears on before the build is considered done.

---

## 1. Source material to re-read before building

1. `optimizeit/case1-ames-goldsmith/00-MASTER-INDEX.md` — dossier navigation, word
   counts, epistemic-tier legend, and the deliverable-to-chapter mapping. Read this
   first, it orients everything below.
2. `optimizeit/case1-ames-goldsmith/01-executive-summary.md` — slide 2's direct source.
3. `optimizeit/case1-ames-goldsmith/03-incident-reconstruction.md` — the Contradiction
   Register (§2 of that chapter) is the primary source for slide 3's footnote and the
   whole appendix slide.
4. `optimizeit/case1-ames-goldsmith/04-chemistry.md` §4.6–4.11 — the numeric ranges for
   slide 4: adiabatic ΔT sensitivity (48 °C low / 238 °C mid / 714 °C local-hot-pocket
   high), H₂S yield (~99 L/kg Ag₂S ceiling, 10–100 L/kg realistic working range),
   illustrative pressurisation (~0.58 atm added partial pressure, 5 kg reacting into a
   1 m³ headspace at 350 K). Every number carries its assumption set — copy the
   assumption set onto the slide, not just the number.
5. `05-toxicology-ih.md` — exposure-limit table for slide 5 (OSHA PEL, NIOSH REL,
   IDLH, AEGL for H₂S and NO₂), knockdown mechanism, olfactory fatigue.
6. `06-hazop.md` and `07-lopa-bowtie.md` — slide 7's worksheet, bow-tie, and IPL
   ledger (8-row ledger, 1×10⁻⁴/yr tolerable-frequency benchmark, SIL 2 conclusion).
7. `08-root-cause.md`, `11-regulatory.md`, `12-comparative-accidents.md` — slide 6's
   fishbone, the Tier II/EPCRA finding, and the CSB Safety Bulletin 2003-03-B /
   Georgia-Pacific Naheola precedent pair.
8. `09-instrumentation.md`, `10-emergency-response.md` — slide 9's detection and
   response content.
9. `13-decommissioning-moc.md` — slide 8's six-gate framework and its CCPS contrast.
10. `14-recommendations.md` — slide 10's roadmap tiers (Immediate 0–30d / Near-term
    30–180d / Structural 180+d).
11. `_research/lane8-business-case.md` — **read this last, after it lands from the
    re-dispatched research pass.** If a needed figure is absent, follow §4 below rather
    than inventing one.
12. `CLAUDE.md` — full structural system (tokens, type scale, motifs, failure modes).
13. `deck-system/figma-deck-kit.js` — the helper functions referenced by name below
    (`buildRibbon`, `addLayeredCard`, `addTable`, `addDiagonalWire`, `sectionChip`,
    `sourceLine`, `addBadge`, `addChip`, etc.). Paste verbatim into every script.
14. `deck-system/slide-archetypes.md` — the archetype cookbook. Each slide below names
    its primary archetype(s) by the exact heading used in that file — look the recipe
    up there for the geometry, don't re-derive it.
15. `ppts-inspo/EY.pdf` (render via the PyMuPDF snippet in CLAUDE.md §8) — the density
    benchmark. Re-check the financials/sensitivity pages before building slides 4 and 10.

---

## 2. Ribbon label sets (section-scoped, per CLAUDE.md §1)

Two sections; **rebuild the ribbon per section**, don't force one global tag row
across all 12 slides:

- **Section A — DIAGNOSIS** (slides 2–6): `Summary · Incident · Chemistry · Human Cost
  · Root Cause`
- **Section B — PREVENTION** (slides 7–10): `HAZOP & LOPA · MOC Gates · Detection ·
  Business Case`

Cover (slide 1) and thank-you (slide 11) carry no ribbon. The appendix (slide 12)
carries its own single-tag ribbon reading `Appendix` — do not force either section's
tag set onto it, per CLAUDE.md §1's explicit warning about EY's own appendix pages
using a different ribbon from the main deck.

Active tag: `primary` fill, white text, layered back-card. Inactive tags: `accent`
fill, `ink` text — per the kit's `buildRibbon` default.

---

## 3. Palette

Use the CLAUDE.md §2 defaults verbatim (`primary #5B21E6`, `primaryDeep #3A0CA3`,
`accent #F5C518`, `alert #E5399E`, `tint #C4B5FD`, `ink #0A0A0A`, `surface #EDEDED`,
`surfaceAlt #F5F5F5`, `white #FFFFFF`) — no re-theme. A forensic engineering deck has
no reason to deviate from the proven system. `alert` (#E5399E) is the natural fill for
fatality/high-severity numerals; reserve it for genuinely high-attention figures
(fatality count, IDLH threshold) rather than spreading it across the deck.

---

## 4. Slide-by-slide architecture (12 slides)

Each entry: **archetype(s) from slide-archetypes.md** → **content beat** → **framework
tag** → **source note**. Dossier chapter references are to
`optimizeit/case1-ames-goldsmith/`.

### 1. Cover
No ribbon. Full-bleed `primary` background, giant title "The Ames Goldsmith
Decommissioning Disaster" (100–112pt Poppins ExtraBold, white; if it wraps to 3 lines
at that size, drop to 88–96pt rather than let it collide with the subtitle — check the
archetype cookbook's note on title-chip widening for long titles). Subtitle: "A
Forensic Reconstruction — Institute / Nitro, West Virginia, April 22, 2026" (32–36pt).
Below it, a KPI chip row (3 chips, `addChip`, 24pt Poppins Bold): `2 KILLED` /
`19–30+ TREATED` / `7 RESPONDERS INJURED`. Small case/team credential chip
bottom-left. Bottom-right: `sourceLine` reading "CSB Case Page | Chemical Safety and
Hazard Investigation Board, ongoing investigation."

### 2. Executive summary — BLUF
Ribbon: DIAGNOSIS, index 0. Archetype: **3-column impact split** (What happened / Why
it happened / What must change) + a **confidence table** beneath spanning the full
width. Source: `01-executive-summary.md`.
- Column 1 — **What happened**: nitric acid and Bonderite M2000A introduced into a
  legacy vessel of silver-sulfide ("silver mud") residue during permanent
  decommissioning; violent reaction released H₂S; 2 killed, 19–30+ treated, 7 first
  responders among them.
- Column 2 — **Why it happened**: no continuous online toxic gas detection for the
  decommissioning "transient phase" (case-brief language, quoted); Bonderite M2000A
  absent from the facility's required EPCRA Tier II chemical inventory, so responders
  spent roughly 20 minutes searching for its safety data sheet mid-release; no
  chemical-compatibility review before acid was introduced to an unquantified legacy
  residue.
- Column 3 — **What must change**: the four deliverable headlines in one line each —
  reaction modelling to bound the hazard, HAZOP/LOPA to specify safeguards, a
  Decommissioning MOC framework to gate legacy-vessel work, continuous gas detection
  to close the transient blind spot.
Confidence table (6 rows, `addTable`): claim | confidence (High/Medium/Low) | basis —
pull directly from `01-executive-summary.md`'s confidence table, do not re-derive.
Framework tag: **Answer-first / confidence-tiered findings**. Every non-trivial figure
here reappears verbatim on the slide that expands it — do not let column 1's numbers
drift from slide 3's.

### 3. Incident anatomy and plant context
Ribbon: DIAGNOSIS, index 1. Archetype: **Alternating icon timeline** (upper half) +
**punch-hole and wire process strip** (lower half) + a small **chemical inventory
table** in the corner. Source: `03-incident-reconstruction.md`, `02-plant-overview.md`.
- Timeline (5–6 nodes, alternating above/below the wire): plant scheduled to close
  June 2026 → decommissioning/decontamination work in progress → **9:32 a.m., CSB's
  own stated time** — nitric acid and M2000A introduced to legacy vessel → violent
  reaction, H₂S release → 9:38 a.m. first 911 call → shelter-in-place ordered for
  Kanawha County schools and WV State University. Footnote in 20pt: "Reported
  hospitalization/treatment counts range 19 to 30+ across outlets; CSB's own case page
  separately states 4 additional injuries, unreconciled with its 30+ press language."
- Process strip (4–5 nodes): spent Ag/EO catalyst arrives → grind → nitric acid leach
  → Moebius electrolytic refining → cathode silver + anode slime (the "silver mud").
  One-line annotation directly beneath: silver is the standard ethylene-oxide
  epoxidation catalyst; sulfur compounds are a documented catalyst poison, converting
  surface silver to inert Ag₂S — this is **why** sulfide residue was sitting in a
  legacy vessel, not an anomaly.
- Small inventory table (3–4 rows): nitric acid, silver/silver compounds, Bonderite
  M2000A (composition unconfirmed — state this openly), Ag₂S residue (unquantified,
  per the case brief's own language).
Framework tag: **Value chain (catalyst refining) / incident timeline**.

### 4. Deliverable 1 — Thermodynamic and kinetic reaction modelling
Ribbon: DIAGNOSIS, index 2. Archetype: **Equation layout (A+B=C)** at top +
**break-even-style line chart with in-chart annotation** + **paired data table**
beneath. Source: `04-chemistry.md`. This slide is scored directly against the case
brief's first deliverable — it must read as quantitative modelling, not a chemistry
lecture.
- Equation row (32–40pt glyphs per the archetype spec): `Ag₂S + HNO₃` **(two
  competing pathways)** → **Pathway A**: oxidative nitrate attack, sulfide oxidized to
  elemental sulfur (controlled, high-temperature/pressure leaching conditions) →
  **Pathway B**: simple acid-plus-sulfide, releasing H₂S (any acid class, uncontrolled
  ambient conditions — CAMEO reactive-group data). One-line annotation: uncontrolled
  dumping favours Pathway B — no sustained temperature/pressure forcing, poor mixing,
  no guaranteed stoichiometric excess.
- Chart: a sensitivity band, not a single line — plot adiabatic temperature rise
  across the assumption range as a shaded band from 48 °C to 714 °C, with the 238 °C
  mid-estimate marked by a bold on-chart callout (never relegated to a legend, per
  CLAUDE.md §1). A small `tint`-filled "MODELLED — parameterized estimate, not a
  measured incident value" chip sits directly on the chart.
- Paired table (`addTable`, always alongside the chart per CLAUDE.md §1): rows for
  the three numeric outputs — Adiabatic ΔT (48–714 °C), H₂S yield (10–100 L realistic
  range per kg Ag₂S, ~99 L/kg ceiling), Illustrative pressurization (~0.58 atm added
  partial pressure, 5 kg reacting into 1 m³ headspace at 350 K) — each row's rightmost
  cell stating the assumption set in small text beneath the number.
- NO₂ note in a small callout: chemically expected from HNO₃ decomposition under
  oxidizing conditions but **not independently confirmed** as an actual released
  species in open reporting — carries the INFERRED chip.
Framework tag: **Sensitivity / scenario analysis**.

### 5. Human consequence
Ribbon: DIAGNOSIS, index 3. Archetype: **Horizontal bar rows with inline value pills**
+ a **commentary panel** beside it. Source: `05-toxicology-ih.md`.
- Bar rows, an exposure ladder in ascending concentration: OSHA PEL (20 ppm ceiling) →
  NIOSH REL → ACGIH TLV → IDLH (100 ppm) → knockdown threshold (≥500 ppm, directly
  tied to the case brief's own phrase "rapidly overcome and killed by chemical
  knockdown"). Bar length encodes concentration on a log-ish visual scale; value pill
  at each bar's end states the ppm figure.
- Commentary panel (rail-labelled, 3–4 bullets, bold inline keywords): the
  **olfactory fatigue** mechanism — H₂S's rotten-egg odor is paralyzed within minutes
  above roughly 100 ppm, a false-safety signal that explains non-evacuation; the
  **knockdown** mechanism — cytochrome c oxidase inhibition, sudden collapse, no
  self-rescue; **delayed pulmonary oedema** — up to 72 hours post-exposure, the basis
  for the 24-hour minimum observation-hold recommendation on slide 9.
- Small NO₂ sub-row carries the INFERRED chip, per §0's rule — presented as reference
  toxicology relevant if NO₂ was present, not as a confirmed exposure.
Framework tag: **Dose-response / severity gradient**.

### 6. Root cause and foreseeability
Ribbon: DIAGNOSIS, index 4. Archetype: **Fishbone/Ishikawa** (left two-thirds) +
**Swiss-cheese layer stack** (small, beneath the fishbone) + a **precedent timeline
1971→2026** (right third or full-width band beneath). Source: `08-root-cause.md`,
`11-regulatory.md`, `12-comparative-accidents.md`. This is the deck's thesis slide —
give it the most argumentative weight of any core slide.
- Fishbone, 6 categories (People / Process / Equipment / Materials / Environment /
  Management Systems), 1–2 factors per category pulled directly from
  `08-root-cause.md`. The single bolded, `alert`-colored factor: **Bonderite M2000A
  was absent from Catalyst Refiners' EPCRA Tier II hazardous chemical inventory** —
  responders located its safety data sheet via a roughly 20-minute web search during
  the active release. This is the headline organizational gap, not a footnote.
- Swiss-cheese stack, compressed to 4–5 labelled layers with holes: Tier II/hazard
  communication, chemical-compatibility review, continuous gas detection,
  decommissioning-specific PHA — visually aligned holes, per the model's own logic.
- Precedent timeline: CSB Safety Bulletin No. 2003-03-B (2004) anchors the left end —
  "45 acid/sulfide H₂S incidents tracked, 1971–2004, 32 deaths, 176 injuries." Mark
  Georgia-Pacific Naheola Mill (2002, CSB Investigation Report 2002-01-I-AL) as the
  closest structural twin — no MOC ever connected an acid stream to a sulfide stream
  there either — and Stone Savannah River (1990) as the closest cleaning-operation
  twin. Right end: Ames Goldsmith, 2026.
- Footer line, small but present: "Root-cause synthesis is this analysis's own
  reconstruction. CSB's investigation remains open; no final report has been issued."
Framework tag: **MECE issue tree / 5-Why / Swiss-cheese model**.

### 7. Deliverable 2 — HAZOP and LOPA
Ribbon: PREVENTION, index 0. Archetype: **HAZOP worksheet table** (upper) +
**bow-tie diagram** (lower-left) + **IPL ledger table** (lower-right). Source:
`06-hazop.md`, `07-lopa-bowtie.md`. Scored directly against the case brief's second
deliverable.
- Worksheet excerpt (`addTable`, 4–5 rows, not the full worksheet — the two central
  deviations only): Node/Deviation | Cause | Consequence | Safeguard. Row 1: "Other
  Than — wrong chemical introduced to legacy vessel." Row 2: "No — no detection of
  toxic atmosphere," quoting the case brief's own finding that continuous online
  detection was absent for this transient phase.
- Bow-tie (text/ASCII-style native construction per the archetype recipe): hazard
  (concentrated HNO₃ + Ag₂S residue in legacy vessel) at center, top event
  (uncontrolled exothermic reaction, H₂S release) in `alert`, threats and barriers on
  the left, consequences and mitigations on the right.
- IPL ledger (`addTable`, 5–6 rows): IPL | type | PFD | notes — BPCS alarm, SIS/
  interlock (SIL 2 minimum, per `07-lopa-bowtie.md`'s conclusion), physical
  containment, procedural control. Small callout: mitigated frequency benchmarked
  against a 1×10⁻⁴/yr tolerable-frequency standard (state this as a standard industry
  benchmark, cited, not a facility-specific figure).
Framework tag: **Risk register (probability × impact) / LOPA / bow-tie**.

### 8. Deliverable 3 — Decommissioning MOC framework
Ribbon: PREVENTION, index 1. Archetype: **Numbered badge list**, six gates in a
vertical strip, + a **contrast table** against standard MOC beside it. Source:
`13-decommissioning-moc.md`. Scored directly against the case brief's third
deliverable.
- Six gates (`addBadge` + text row per the archetype recipe), each with a 1-line
  description and a bolded "closes:" clause naming the specific failure mode from
  this incident it would have caught: (1) scope-freeze/change-classification trigger
  — closes: routine work-order treatment of legacy-vessel work; (2) mandatory
  chemical-compatibility review with residue-characterization requirement — closes:
  unquantified Ag₂S residue meeting acid unreviewed; (3) decommissioning-scoped PHA
  before chemical introduction — closes: no pre-task hazard review; (4) Tier II/
  hazard-communication currency check — closes: the M2000A inventory gap directly;
  (5) independent two-signature sign-off; (6) legacy-equipment "unknowns register."
- Contrast table (`addTable`, 4–5 rows): dimension | standard CCPS MOC | this
  framework's decommissioning-specific difference — wound-down procedures, departing
  institutional knowledge, schedule pressure from a fixed closure date, unquantified
  legacy residues.
Framework tag: **Management of Change / stage-gate framework**.

### 9. Deliverable 4 — Continuous gas detection protocol and emergency response
Ribbon: PREVENTION, index 2. Archetype: **Native dashboard mockup** (sensor
placement/status view, upper) + **alarm-tier table** + **hub-and-spoke ICS diagram**
(lower). Source: `09-instrumentation.md`, `10-emergency-response.md`. Scored directly
against the case brief's fourth deliverable — this slide also folds in emergency
response, since detection failure and response failure share one root: nobody knew
what gas was in the building.
- Native dashboard mockup (never a screenshot, per CLAUDE.md's "Native UI mockups"
  archetype): a simplified facility-zone view with 3–4 sensor-point icons (simple
  ink-outlined circles as placeholder glyphs, not an icon library) labelled by
  detection layer — task-point (temporary, around actively-worked legacy vessels),
  personal (portable multi-gas monitors on entry crews), perimeter/building.
- Alarm-tier table (`addTable`, 3–4 rows): tier | H₂S setpoint | action — advisory
  (~10 ppm), action (~20 ppm, PEL-linked), emergency/high-high (~50 ppm,
  IDLH-fraction-linked, triggers SIS: evacuation alarm, forced ventilation, work-permit
  interlock). Setpoints must trace to the exposure limits already established on
  slide 5 — do not introduce new numbers here.
- Hub-and-spoke ICS diagram (per the exact angle-placement recipe in
  `slide-archetypes.md`): hub = Unified Command; spokes = facility ERT, county
  HAZMAT, EMS, WVDEP, schools/WVSU notification chain. Small annotation: the same
  Tier II/hazard-inventory gap from slide 6 reframed as a response-readiness fix —
  facility hazardous-chemical inventories pushed to local dispatch CAD systems in
  real time, not retrieved reactively.
Framework tag: **Layers of protection / incident command structure**.

### 10. Business case and roadmap
Ribbon: PREVENTION, index 3. Archetype: **Cost-vs-prevention stacked bar or tornado
chart** + **ROI/expected-annual-loss table with its formula shown** + a **3-horizon
strip** for the roadmap beneath. Source: `14-recommendations.md` plus
`_research/lane8-business-case.md` (read this only once it exists — see §4 below on
what to do if it is thin).
- Cost comparison: a simple two-bar or tornado-style visual, "cost of the incident"
  (whatever combination of NSC per-fatality/per-injury figures, actual comparable
  OSHA penalties, and named litigation benchmarks the research lane actually sourced)
  against "cost of the safeguards" (installed detection system cost, PHA/MOC program
  cost, per `_research/lane8-business-case.md`). **Every bar segment carries a
  source-line note naming its figure's origin — no segment may be unsourced.**
- Expected-annual-loss table, formula shown per the archetype cookbook's rule that a
  computed table without its formula reads as arbitrary: `Expected Annual Loss = LOPA
  mitigated frequency (from slide 7) × consequence cost`, with the frequency value
  pulled from `07-lopa-bowtie.md` and the consequence cost from the sourced figures
  above — never invented independently on this slide.
- 3-horizon strip beneath (`addFrame` per card, per the archetype recipe): Immediate
  0–30 days / Near-term 30–180 days / Structural 180+ days, pulling the top 2–3 items
  per tier directly from `14-recommendations.md`'s consolidated table (Tier II
  refiling and residue-characterization checklist anchor Immediate; the six-gate MOC
  framework and SIL 2 SIS anchor Structural).
Framework tag: **Cost-benefit / expected annual loss / 3-horizon roadmap**.

**If the research lane returns too thin to support a cost bar** (see §4's fallback):
drop the cost-comparison visual and rebuild this slide as a **qualitative
risk-exposure framing** — four named exposure categories (regulatory, litigation,
schedule/decommissioning-delay, reputational) as a simple 2×2 or column layout, with
the LOPA mitigated frequency from slide 7 as the one quantitative anchor, and give the
3-horizon roadmap more of the slide's width.

### 11. Thank you
No ribbon. Cover-style close: `primary` or `primaryDeep` background, "Thank You"
(72–88pt Poppins ExtraBold, white), one-line thesis restatement beneath in `accent`:
"A documented hazard class since 1971 — not a novel failure." Team/contact chip,
bottom-left, matching the cover's credential chip.

### 12. Appendix
Own ribbon, single tag reading `Appendix` (do not reuse either main-deck ribbon set,
per CLAUDE.md §1). Archetype: **dense multi-panel layout** — three or four stacked/
tiled panels, this is deliberately the densest slide in the deck. Source:
`03-incident-reconstruction.md` §2, `11-regulatory.md`, `14-recommendations.md` §2.
- Panel 1: the Contradiction Register, compressed to its 4–5 highest-value rows
  (location Institute/Nitro, release-time variants, casualty-count variants, the 2013
  spill-volume discrepancy) — `addTable`.
- Panel 2: the compliance gap summary table from `11-regulatory.md` (PSM/RMP/EPCRA
  Tier II/HAZWOPER status column with evidence tier).
- Panel 3: the chemistry model's full assumption set from `04-chemistry.md` §4.6, in
  small structured text (this is the one place a slightly denser text treatment is
  acceptable, still never below the 23pt floor).
- Panel 4 (if space allows, otherwise fold into panel 1's footer): 3–4 open research
  gaps from `14-recommendations.md` §2 — CSB's final report still pending, vessel
  geometry/residue mass unpublished, Bonderite M2000A's exact formulation unconfirmed.
No framework tag required — this slide is reference material, not an argument.

---

## 5. Cross-deck consistency checks (run at the end, per CLAUDE.md §6 steps 8–10)

- **Figure consistency**: grep the whole deck's text nodes for each key figure before
  considering the build done — the casualty range (19 to 30+, plus the CSB "4
  additional injuries" note), the 9:32 a.m. release time, the adiabatic ΔT band (48 to
  714 °C, 238 °C mid), the H₂S yield range (10 to 100 L/kg), and any cost figure that
  appears on both slide 10's chart and its table. One number everywhere it appears.
- **NO₂ chip presence**: confirm every slide showing NO₂ (slides 4 and 5) carries the
  INFERRED chip — this is not optional given the epistemic-integrity framing in §0.
- **Ribbon correctness**: confirm DIAGNOSIS only appears on slides 2–6 and PREVENTION
  only on slides 7–10, with the active-tag index matching each slide's actual position
  within its section — this is the exact per-section-relabeling trap CLAUDE.md §1
  calls out from EY's own appendix pages. The appendix's own single-tag ribbon must
  not leak either main-deck tag set onto it.
- **Type floor + `cornerRadius = 0` sweeps**: run both kit scripts (D2, D3) across all
  12 slides, **with D3's threshold raised to 23pt** per §0 above, not CLAUDE.md's
  default 22pt. Only the 16pt source line is exempt.
- **D4 — em-dash/en-dash sweep (new, write this script)**: scan every text node's
  `characters` across all 12 slides for `—` or `–`. Must return zero hits before the
  build is considered done. If any are found, fix the source text and re-run.
- **D5 — citation-presence sweep (new, write this script)**: assert every slide
  2 through 10, and slide 12, has a text node whose characters start with `Source:`.
  Slides 1 and 11 (cover, thank-you) are exempt.
- **Every content slide has a bottom-right source line**, pipe-separated, 16pt,
  `primary`-colored per the kit's `sourceLine` default — naming real, specific
  sources (dossier chapter plus the underlying primary source, e.g. "Ch.04 |
  Holloway/Merriam/Etsell, Hydrometallurgy 74 (2004) | NIST WebBook"), never "internal
  research" or the dossier alone.
