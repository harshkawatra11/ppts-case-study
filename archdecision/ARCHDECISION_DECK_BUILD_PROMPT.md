# Build prompt — ArchDecision case-competition deck (Figma Slides, EY-density system)

Paste this whole document as the task brief to the session that will actually run
`use_figma`. It assumes that session has already read `CLAUDE.md` (the standing
workflow) and will paste `deck-system/figma-deck-kit.js` verbatim into every script,
per CLAUDE.md §6 step 4. This document is the *content and architecture spec* for one
specific deck — ArchDecision — layered on top of that system. It does not redefine any
structural rule from CLAUDE.md; where the two disagree, CLAUDE.md wins.

---

## 0. Non-negotiable framing

- **Build natively in Figma Slides via `use_figma`**, 1920×1080, zero imported chart
  images — every chart/diagram/table/mockup is native vector nodes. Follow CLAUDE.md
  §1–§7 exactly: EY density doctrine, the nine-role token system, layered sticker
  cards, 22pt content floor, ribbon nav, band+rail motif, `cornerRadius = 0` sweep,
  font-floor sweep.
- **This is a product pitch, not a slide-count exercise.** ArchDecision is a
  dev-tooling product ("paste a GitHub link → get the ADRs, chat, onboarding doc,
  PR review, drift map, and mind-map for that repo"). Judges are evaluating it the
  way a VC or case-competition panel evaluates any B2B/dev-tools venture: problem
  severity, market sizing rigor, product depth, business model, GTM, unit
  economics, competitive moat, risk awareness, execution roadmap. Every slide must
  carry a **named MBA framework** per CLAUDE.md §4 — a full slide of prose bullets
  with no framework attached is an automatic redo.
- **Content integrity is load-bearing, not decorative** (CLAUDE.md §5). ArchDecision's
  own thesis is "grounded or silent" — a deck that fabricates a stat to look
  impressive undercuts the exact pitch it is making. Two consequences for this build:
  1. Every claim below marked `[VERIFY]` is a plausible figure drawn from the product
     overview or general public knowledge, **not yet source-checked**. Before it goes
     on a slide, either (a) confirm a real citable source and cite it in the
     bottom-right source line, or (b) soften the claim to a qualitative, defensible
     form ("tens of millions of developers worldwide" rather than a fabricated decimal).
  2. There is **no real user research yet** (no interviews, no LOIs, no pilot
     customers). Do not invent quotes or willingness-to-pay numbers. Slide 11 (GTM)
     must present a **Customer Validation Plan** — planned interview targets by role
     and count — instead of pretending validation happened.
- **India-first grounding, bottom-up.** Market sizing is built from named,
  countable populations (India's developer base, global developer base, GitHub's
  public-repo count), not a top-down slice of a vague global "dev-tools TAM" dollar
  figure. Financial/pricing assumptions benchmark to Indian B2B SaaS comparables
  (ACV/CAC bands), not a US SaaS model relabelled in ₹ — see the unit-economics table
  in §9 below.

---

## 1. Source material to re-read before building

1. `archdecision/ARCHDECISION_OVERVIEW.md` — the full product narrative. Every slide's
   content below is derived from it; re-read the relevant section before writing that
   slide's copy so nothing drifts from the source.
2. `CLAUDE.md` — full structural system (tokens, type scale, motifs, failure modes).
3. `deck-system/figma-deck-kit.js` — the helper functions referenced by name below
   (`buildRibbon`, `addLayeredCard`, `addTable`, `addDiagonalWire`, `sectionChip`,
   `sourceLine`, etc.). Paste verbatim into every script.
4. `deck-system/slide-archetypes.md` — the archetype cookbook. Each slide below names
   its primary archetype(s) by the exact heading used in that file — look the recipe
   up there for the geometry, don't re-derive it.
5. `ppts-inspo/EY.pdf` (render via the PyMuPDF snippet in CLAUDE.md §8) — the density
   benchmark. Re-check pages 3–6 (the market-sizing and financials pages) specifically
   before building slides 8 and 12 of this deck.

---

## 2. Ribbon label sets (section-scoped, per CLAUDE.md §1)

This deck has three sections; **rebuild the ribbon per section**, don't force one
global tag row across all 16 slides:

- **Section A — The Case** (slides 2–7): `Problem · Who It's For · The Idea ·
  Product · How It Works · Architecture`
- **Section B — The Business** (slides 8–13): `Market · Competition · Business
  Model · GTM · Financials · Risk`
- **Section C — Close** (slides 14–16): `Roadmap · Impact · The Ask`

Cover (slide 1) carries no ribbon. Active tag gets `primary` fill + layered
back-card per the kit; inactive tags get `accent` fill per CLAUDE.md §3.

---

## 3. Palette

Use the CLAUDE.md §2 defaults verbatim (`primary #5B21E6`, `primaryDeep #3A0CA3`,
`accent #F5C518`, `alert #E5399E`, `tint #C4B5FD`, `ink #0A0A0A`, `surface #EDEDED`,
`surfaceAlt #F5F5F5`, `white #FFFFFF`) — no re-theme. ArchDecision's own product has
no established brand palette to defer to, so there is no reason to deviate from the
proven system.

---

## 4. Slide-by-slide architecture (16 slides)

Each entry: **archetype(s) from slide-archetypes.md** → **content beat** → **framework
tag** → **source note**.

### 1. Cover
No ribbon. Full-bleed dark `primary` background, giant title `ArchDecision` (100–112pt
Poppins ExtraBold, white), subtitle "Why your codebase is the way it is" (32–36pt),
and one-line positioning strap ("Paste a repo. Get the reasoning back.") in `accent`.
Small case/team credential chip bottom-left.

### 2. Problem — issue tree / MECE decomposition
Archetype: **Decision/strategy tree** (root → branches). Root node: "Architectural
intent disappears the moment it isn't written down." Three branches, MECE across who
absorbs the cost: **New engineer** (2–3 weeks reverse-engineering intent) ·
**Senior engineer** (repeated shoulder-taps, same question answered 5th time this
quarter) · **The team** (repeated mistakes, undetected architectural drift in PRs).
Pair with a **Band + rotated rail** labelled "WHY: Issues & Importance" running the
left edge. Framework tag: **Issue tree / MECE decomposition**. Source: ARCHDECISION
overview §"The problem", ADR industry-adoption framing — cite as `[VERIFY: cite a real
stat on ADR non-adoption rate if one exists; otherwise state qualitatively]`.

### 3. Who it's for — segment matrix
Archetype: **Numbered badge list** (6 personas) or a 2×3 grid of `addLayeredCard`
tiles. Six segments from the overview verbatim: engineer being onboarded · senior
engineer who keeps getting interrupted · OSS maintainer · reviewer · student/self-taught
developer · evaluator (recruiter/hiring manager/tech lead). Each tile: persona name,
one-line pain, one-line ArchDecision hook. Framework tag: **ICP / segmentation**.

### 4. The idea — core mechanism
Archetype: **Equation layout (A + B = C)**. `Grounded evidence (deps, config,
structure, README)` **+** `Honest confidence labelling (no fabrication on thin
evidence)` **=** `"Grounded or silent" — every claim traceable to something concrete
in the repo, at the exact commit analyzed`. Use large 32–40pt glyphs for `+`/`=` per
the archetype spec. Pair with a small callout box (tinted `tint`) quoting the
principle from the overview directly: confidence labelled "low" rather than
"presented with the same authority as a well-supported fact."

### 5. Product walkthrough — quadrant hero
Archetype: **dashboard-grid** (own architecture per CLAUDE.md §3 — every slide gets
its own layout). Four quadrants, one per core surface, each a native UI mockup
(CLAUDE.md's "Native UI mockups" archetype — browser-frame + dashboard-tile shapes,
never a screenshot):
1. **Decisions list** — plain-language titles, category tag (Framework/Datastore/
   Architecture/Auth/API), confidence indicator.
2. **Decision detail** — context → decision → rationale → alternatives →
   consequences → evidence, "copy as ADR markdown" chip.
3. **Ask your codebase** — chat pane, streaming answer with inline file citations.
4. **Onboarding doc** — structured markdown preview (stack, run-locally commands,
   key files, reading path, gotchas), download chip.
Small caption strip beneath each mockup, 22pt Inter Semi Bold.

### 6. How it works — alternating icon timeline
Archetype: **Alternating icon timeline**, 5 nodes alternating above/below the wire:
**Fetch** (repo metadata, tree, language breakdown, in parallel) → **Triage** (deps →
infra/CI → README/docs → entry points; skip vendored/generated files) →
**Compress** (one structured profile: dependencies, structural summary, folder facts,
README, highest-signal file contents — sized to fit one model request) →
**Infer + validate** (senior-architect-style prompting, evidence citation required,
schema-checked, one auto-correction pass on failure) → **Serve** (cached per exact
commit; decisions, chat, onboarding doc, PR review, drift map, mind-map all read the
same warm profile). Framework tag: **Value chain / process flow**.

### 7. Architecture — hub-and-spoke
Archetype: **Hub-and-spoke**, per the exact angle-placement recipe in
slide-archetypes.md. Hub: "Shared ingestion + profiling core." Spokes (evenly spaced):
Decisions service · Chat/RAG service · Onboarding-doc service · PR-review service ·
Drift-map service · Mind-map service. Small annotation: "Independent, focused services
— consistent behavior because every feature reads the same profile." Side callout:
streaming-first (pipeline stages tick off live; chat streams token-by-token),
model layer behind a standard, swappable interface (provider is a config choice, not
hardwired), credentials server-side only, GitHub PATs used per-request and never
logged/stored. Framework tag: **Value chain (technology architecture)**.

### 8. Market — TAM/SAM/SOM, nested circles, bottom-up
Archetype: **Nested TAM/SAM/SOM circles**. Bottom-up build, named/counted
populations per CLAUDE.md §5 (no top-down %-of-TAM slicing):
- **TAM** — global developer population who at some point open an unfamiliar
  repository: overview states "tens of millions worldwide."
  `[VERIFY: cite a real source — e.g. GitHub Octoverse / Evans Data Corp active
  developer population estimate — before finalizing the numeral on-slide]`.
- **SAM** — India's developer population specifically, per the overview: "more than
  6 million developers and engineers," a number "climbing every year as the
  country's technology sector expands." `[VERIFY: cite NASSCOM or equivalent for the
  exact figure and year before finalizing]`.
- **SOM** — a defensible near-term beachhead: named institution counts, e.g. count of
  Indian GCCs (2,117 GCCs / 2.36M professionals per Nasscom-Zinnov — already verified
  in project memory, cite as `Nasscom-Zinnov, 2026`) intersected with teams actively
  onboarding engineers onto existing repos in a given year. Show the arithmetic
  on-slide (a small tinted formula callout, same treatment as §9's scoring-matrix
  formula box) rather than asserting a bare SOM numeral.
Pair with a **CAGR bar set** for India's developer-tooling/DevOps spend growth if a
real source is available; otherwise omit rather than fabricate.

### 9. Competition — whitespace quadrant + comparison table
Archetype: **Whitespace quadrant** (axes: "Grounded in this repo's actual code" ×
"Durable, committable output") plotting: generic LLM chat wrappers (low on both),
GitHub Copilot Chat / Copilot Workspace (grounded, but answers are ephemeral/chat-only,
not committable ADRs), Swimm / CodeSee / Mintlify-style docs tools (durable output,
but authored/maintained by humans, not inferred from evidence), manual ADR practice
(durable when it happens, but almost never happens — see slide 2). ArchDecision plots
alone in the top-right: grounded AND durable. Pair beneath with a **Competitive
comparison table** (`addTable`): rows = Core mechanism / Output format / Requires
human authoring? / PR-level review? / Drift detection? / India-specific pricing?,
columns = the 3–4 named categories above vs. ArchDecision. Framework tag:
**Competitive positioning matrix / feature-parity matrix**.

### 10. Business model — unit economics + pricing tiers
Archetype: **KPI hero band** (3 layered stat cards) + **Financial summary table**.
KPI row: ACV, CAC, LTV:CAC — sourced to the **Indian B2B SaaS comparable bands**
already researched for this project (upGrowth, 2026): ACV ₹4–8L at the ₹10–30Cr ARR
band, ₹10–30L at ₹60–100Cr band, ACVs running 40–60% below US comparables, absolute
CAC rarely exceeding ₹5L even at scale. Do **not** invent a USD-native SaaS model and
relabel it in ₹ — CLAUDE.md §5 and project memory both flag this as the single most
common judge-catchable error. Pricing-tier table: Free (public OSS repos, rate-limited)
/ Team (private repos, PR review, seats-based) / Enterprise (SSO, on-prem model
routing, drift-map SLAs) — each row priced inside the Indian ACV bands above, not
above them. Framework tag: **Unit economics / pricing tiers**.

### 11. GTM — funnel + Customer Validation Plan (not fabricated research)
Archetype: **3-horizon strip** repurposed as a funnel (Land → Expand → Land-and-expand
enterprise), OR a **buying-committee map** if more content is needed to fill the band.
**Mandatory inclusion per §0**: a boxed **Customer Validation Plan** panel —
planned interview targets by role (e.g. "12 onboarding engineers at Indian GCCs,
6 OSS maintainers, 4 engineering managers, 3 technical recruiters") and what each
round is meant to validate (willingness to pay, onboarding-time reduction, PR-review
trust threshold). This replaces any invented quote or LOI. Framework tag:
**ICP / land-and-expand / sales funnel**.

### 12. Financials — break-even chart + summary table
Archetype: **Break-even line chart with in-chart annotation** + **Financial summary
table**, always paired per CLAUDE.md §1 ("charts pair with tables, never replace
them"). Chart: Total Cost / Revenue lines over Year 1–3, dashed break-even marker
with an on-chart bold callout ("Breakeven — Year X"), X derived from the ACV/CAC
bands in slide 10, not invented independently. Table: Year × Revenue × Variable Cost
(model-inference cost per repo analyzed is the dominant variable cost — call this out
explicitly, since it's the one line item genuinely unique to an LLM-native product) ×
Contribution Margin. Framework tag: **Break-even / contribution-margin analysis**.

### 13. Risk — risk tree with 1:1 mitigation
Archetype: **Risk tree with 1:1 mitigation**. Five risk/mitigation pairs, drawn
directly from the overview's own stated safeguards — this slide should read as "here
is what we already built to prevent this," not a generic risk list:
- **Prompt injection via repository content** → every prompt states, independently,
  that repo content is material to analyze, never a command to follow (overview
  §"the reasoning is treated as data, never as instructions").
- **Hallucinated/fabricated architectural claims** → strict structural-schema
  validation + one automatic correction pass; confidence labelled honestly, sparse
  repos told plainly "not enough here" rather than filled with invented decisions.
- **Model/provider lock-in or price shock** → thin, swappable standard-interface
  model layer; provider is a config choice.
- **Credential/token leakage** — GitHub PAT used only for the single request it
  accompanies, never logged or stored; model credentials live server-side only.
- **Stale analysis vs. a moving codebase** → every output anchored to the exact
  commit analyzed; cache keyed to that commit, not to the repo generally.
Framework tag: **Risk register (probability × impact) / 1:1 mitigation pairing**.

### 14. Roadmap — 3-horizon strip
Archetype: **3-horizon strip**. NOW: decisions, chat, onboarding doc, PR review, drift
map, mind-map (all shipped, per overview). NEXT: research-library connective layer —
live cross-catalog search, direct paper/document links (overview §"research library" —
"already visible... early preview," "taxonomy... already there," "connective layer"
filling in next). LATER: IDE/editor plugin surfacing decisions inline, org-wide
drift dashboards across a whole GitHub org, not just one repo. Framework tag:
**3-horizon roadmap / TRL ladder**.

### 15. Impact — why this matters
Archetype: **People/Planet/Profit-style 3-column split**, retitled to fit a dev-tools
frame: **Engineer** (weeks of onboarding time returned, senior engineers stop
answering the same question five times a quarter) · **Team** (PRs checked against a
written architecture instead of nobody's memory; drift caught before it compounds) ·
**Ecosystem** (India's ~6M+ developer base — same `[VERIFY]` figure as slide 8, keep
consistent — gets institutional memory that survives attrition, not tied to any one
senior engineer staying). Framework tag: **ROI / stakeholder-impact framing**.

### 16. The ask — close
Archetype: **Numbered badge list** or a simple closing KPI-hero repurposed as a
"what we're asking for" band — scope to whatever this deck's actual submission
context is (case-competition judging ask, e.g. "advance to the next round" /
pilot-partner ask, e.g. "3 pilot repos from GCC engineering teams"). Do not default to
a VC-style funding ask unless that is actually the competition's format — check with
whoever owns this deck before hard-coding a monetary ask. Close with team credential
line and contact, plus the deck's own source-line convention.

---

## 5. Cross-deck consistency checks (run at the end, per CLAUDE.md §6 steps 8–10)

- **Figure consistency**: the `[VERIFY]`-flagged developer-population figures (India
  6M+, global "tens of millions") appear on slides 8 and 15 — they must match exactly
  once sourced. Grep the whole deck's text nodes for the number before considering the
  build done, per CLAUDE.md §5's "propagate to every slide" rule.
- **Ribbon correctness**: confirm each of the three section ribbons (§2 above) only
  appears on its own section's slides, and the active-tag index matches the slide's
  actual position within that section — this is the exact per-section-relabeling trap
  CLAUDE.md §1 calls out from EY's own appendix pages.
- **22pt floor + `cornerRadius = 0` sweeps**: run both kit scripts across all 16 slides,
  not spot-checked.
- **Every content slide (2–16) has a bottom-right source line**, pipe-separated,
  14pt, `accent`-colored, even where the source is currently `[VERIFY: pending]` —
  make the pending-citation state visible on-slide rather than silently omitting it,
  so it doesn't get missed before submission.
