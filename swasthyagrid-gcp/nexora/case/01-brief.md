### 1.1 Why this exists

Two Figma decks already pitch the same product, **SwasthyaGrid**, a district health coordination system for India's
public primary-care network:

| Source deck | fileKey | What it is | What it brings to the merge |
|---|---|---|---|
| Deck A | `APbOstO4SSU7iAjYIgEeSd` | 12-slide Google "Build with AI" hackathon deck (Sep 2026), green/gold, validated build | The problem evidence (availability studies, emergency drugs, five whys, OOP), the eVIN precedent, the closed loop, the PHC Kota-4 proof, the 6-week rollout, the risk map, the validation plan, the impact model and its moneyshot (1.36 crore stock-out days) |
| Deck B | `e5VEexsLMhDampx7gvhFmM` | 9-slide startup pitch (Problem, Market, Solution, Model, Moat, GTM, Appendix), green/gold | The startup spine: the State Health Department as buyer, the ₹12 L district licence, unit economics, the bear/base/bull revenue path, the moat argument, the four move types, before/after table, the aspirational-district wedge |

The competition **NEXORA (Satyawati College, University of Delhi)** asks, verbatim:

> Present an innovative, sustainable, and feasible startup or innovation idea with potential real-world impact.
> Submission Guidelines: Format: PDF only. Length: 8–10 slides, including cover.
> Showcase your problem, solution, target market, innovation, sustainability, feasibility and impact.

The job: merge both decks into **one new Figma Slides deck** that reads as a case-competition startup introduction
pitch, plus a **very long research deliverable** that backs every number, plus a Q&A sheet.

### 1.2 Locked decisions (the user answered each; do not reopen)

| # | Decision | Consequence |
|---|---|---|
| D1 | **10 slides: Cover + 8 core + Appendix.** No thank-you slide (the brief caps at 10 including the cover) | Contact details sit on the cover and in the appendix source line |
| D2 | **Team: Harsh Kawatra only** (Delhi Technological University), team name Team IdeaForge, role "Founder" | Gursimran Kaur and Ranvir Kawatra appear nowhere |
| D3 | **Startup introduction pitch, technology near zero.** No investment ask. No cloud, model, vendor, API or engineering metrics on slides | Deck A's Google-stack, AI-engine, voice and test-count content is dropped; deck B's ₹4.0 Cr ask is dropped |
| D4 | Build natively in Figma Slides (1920×1080) with this folder's system (`CLAUDE.md`, `deck-system/`), green/gold palette shared by both source decks | Reuse the validated SwasthyaGrid preamble |
| D5 | Cover carries a real **mind map** with **brand logo slots** for the real public bodies involved; no KPI-tile row on the cover (standing rule `feedback_cover_style`) | S1 mind map with 8 actor nodes, each with a `LOGO:` frame |
| D6 | Writing rule: zero em dashes and en dashes, no hooks, no rhetorical questions, humanised analytical voice (standing rule `feedback_no_em_dash_no_hooks`) | Enforced by lint and sweeps |
| D7 | Never fabricate primary research; the prototype runs on simulated data and says so; no interviews have been done | Validation plan shown as planned, never as done |
