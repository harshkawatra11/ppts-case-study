## 1. Context and locked decisions

### 1.1 Why this deck exists

The user (Harsh Kawatra, Team IdeaForge) is entering the Google "Build with AI: Code for Communities" hackathon
with **SwasthyaGrid**, a working AI control room for Primary Health Centre (PHC) supply chains. The code lives at
`C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform` (**read-only**; never write there). An
earlier pitch deck exists there as `pitch-deck.html`. Several of its numbers no longer match the code, and none of
them are sourced (see §4.4). This plan replaces it with a consulting-grade, content-dense Figma Slides deck.

**Organiser problem statement (verbatim):**
> The Problem: Public healthcare systems across India face persistent supply chain vulnerabilities. The inability
> to track medicines, patient footfall, and resource utilisation in real time across vast networks of Primary
> Health Centres leads to stock-outs and limits the country's capacity to respond when it matters most.
> The Challenge: Build a federated AI platform for national-scale health resource and supply chain management —
> real-time visibility into medicine stocks, bed availability, and medical personnel attendance across India's
> entire PHC network. It should forecast demand, generate early warnings for potential stock-outs during health
> emergencies, and recommend automated cross-district resource redistribution, while allowing for shared
> predictive modelling across India's states.

**Deliverable asked:** pitch deck, 10 to 12 slides, covering problem, solution, AI approach, who it serves, why
it is deployable, and how it scales across India.

**Judging rubric (the deck is engineered against it; every slide carries a criterion chip):**

| Weight | Criterion | Question judges ask | Where the deck answers it |
|---|---|---|---|
| 20% | Problem-Solution Fit | Does it directly address the stated challenge? | S2 brief-to-product table, S3, S4, S5 |
| 25% | AI/Technical Execution | Is Google AI doing meaningful work? Does the prototype run end to end? | S6, S7, S8 |
| 20% | Depth and Reach Across India | Can it scale from one state to all of India? | S9, S11 |
| 15% | Impact Potential | How many people, how many states, how much benefit? | S11 moneyshot |
| 20% | Deployability and Scalability | Could a ministry pilot it in weeks? | S10 |

**The organiser's Google tech list must all appear** (it does, on S8, tagged by status): Gemini API, Google AI
Studio, Vertex AI (AutoML, custom training, model serving), Gemini multimodal, Vertex AI Vision, Cloud
Speech-to-Text and Text-to-Speech, Translation API, Dialogflow, Google Maps Platform, Google Earth Engine,
BigQuery, Firebase, Cloud Run / Cloud Functions, data.gov.in, WHO health data, ISRO/Bhuvan, IMD.

### 1.2 Locked decisions (the user answered each; do not reopen)

| # | Decision | Value |
|---|---|---|
| D1 | Tool | Figma Slides via the Figma MCP `use_figma` tool, 1920×1080, per project `CLAUDE.md` |
| D2 | Slide count | **12**: cover, 10 content slides, thank-you |
| D3 | Build status honesty | Every Google service carries a tag: **LIVE** (running in the prototype today), **WIRED** (code path exists, off in the demo), **PILOT** (built in the 6-week pilot). Never present a PILOT item as built |
| D4 | Palette | Maudrik green/gold system blended with Google's four colours (§6.1) |
| D5 | Team | Team IdeaForge: **Harsh Kawatra**, Delhi Technological University, Team Leader; **Gursimran Kaur**, Guru Gobind Singh Indraprastha University, Member. No other members |
| D6 | Cover style (user's standing rule) | No row of KPI tiles on the cover. Caps title, green verdict card with gold headline text, "TEAM IDEAFORGE" heading over a Members / Institution / Role table. Thank-you slide fully centred with the same table |
| D7 | Writing rule (user's standing rule) | Zero em dashes and en dashes, no hooks, no questions, humanised analytical voice (§11.13) |
| D8 | Product screenshots | Allowed on S6 only, as proof the prototype runs (three real screenshots from `docs/v2-shots`). Every chart, table and diagram elsewhere is native Figma vector |
| D9 | Voice engine | Sarvam is LIVE; Gemini Live is the swap target, tagged WIRED (tools already in Gemini function schema; audio adapter not written) |

### 1.3 Deliverables (all under the project root `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\swasthyagrid-gcp\`)

| Path | What |
|---|---|
| `case/01-brief.md` | Problem statement, rubric, tech list, locked decisions (copy §1.1 and §1.2 verbatim) |
| `case/02-facts.md` | Source register (§3) and product facts (§4), verbatim |
| `model/impact_model.py` | §5.1 verbatim; output must match §5.3 |
| `deck/build_preamble.py`, `deck/preamble.js` | §7.1 script and the preamble it writes |
| `deck/gen.py` | §11.2 generator |
| `deck/slide-ids.json`, `deck/build-log.md`, `deck/shots/` | Figma IDs, log, screenshots |
| `deck/copy-review.md` | Language review output (F5b) |
| `deck/TeamIdeaForge_SwasthyaGrid_preview.pdf` | Raster preview PDF (F7) |
| `qa/qa-defence.md` | §12 verbatim: 15 judge questions with answers |
| Figma Slides file | "SwasthyaGrid \| Team IdeaForge \| Build with AI" |

---

