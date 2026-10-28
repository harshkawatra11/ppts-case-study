# SWASTHYAGRID: 12-slide Figma pitch deck for Google "Build with AI: Code for Communities" (PHC supply chain challenge)

> **Who executes this.** A Sonnet-class main agent (the orchestrator) plus Sonnet sub-agents dispatched with the
> Agent tool (`subagent_type: "general-purpose"`, `model: "sonnet"`, `run_in_background: false`).
>
> **The job is execution, not design.** This plan fixes everything in advance:
> - the argument, recommendation and moneyshot (engineered with the `case-competition-deck` skill on 30 Sep 2026),
> - every fact with its source, every model number (the model was run while the plan was written; §5.3 is the
>   reference output),
> - the palette, the preamble patch, the helper code, and the full slide code with coordinates for all 12 slides,
> - the validators, fix rules, sub-agent prompts, recovery table and final report.
>
> Paste, run and validate. Do not rewrite the argument, re-derive numbers, browse for new facts, or invent layout.
> When a validator flags a problem, apply the §10 fix rule for that problem type and nothing broader. If something
> here is impossible (a tool is missing, a file is absent), stop and report; do not improvise a substitute.

---

## 0. Table of contents

1. Context and locked decisions
2. The argument (do not change)
3. Source register
4. Product facts (from the SwasthyaGrid code, audited 30 Sep 2026)
5. Impact model (code, run, reference output)
6. Deck design system (palette, type, skeleton, ribbon)
7. Preamble: build script and extras
8. Slide code (12 slides, final copy)
9. Figma setup
10. Validators and fix rules
11. Execution playbook for Sonnet sub-agents (authoritative)
12. Q&A defence sheet content
13. Final report and verification checklist

---

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

## 2. The argument (engineered with the `case-competition-deck` skill; do not change)

### 2.1 Case type and audience

Operations (public-health supply chain) with social-impact and policy overlays. Audience: Google Developer
Group / hackathon judges scoring the §1.1 rubric, reading as if they were a Union or state health ministry deciding
whether to pilot. Register: consulting-grade, numbers first, honest about build status. The skill's M&A-derived
frameworks are extrapolated here (skill §"Calibration honesty"); the structural patterns (contrarian answer,
action titles, one moneyshot, foreshadowing, symmetric comparison, three scenarios) apply fully.

### 2.2 The contrarian recommendation

- **Obvious answer the prompt invites:** build one national platform, i.e. a central database of every PHC's stock,
  a national AI model, and a dashboard for every facility.
- **Why it fails:**
  1. Health is a State subject (Seventh Schedule, List II, Entry 6), and 36 States and UTs own their data.
  2. States already run stock ledgers (e-Aushadhi / DVDMS), and ripping them out takes years.
  3. A PHC pharmacist works on a phone, in Hindi, between patients. A dashboard is the wrong interface for them.
  4. An AI that auto-orders has no accountable signatory, and the first wrong order ends trust.
- **Our answer:** "Federate the forecast." SwasthyaGrid is a **decision layer** on top of the ledgers states
  already keep:
  1. Data stays in each state's own cloud project (BigQuery in an Indian region).
  2. Vertex AI trains a model per state and shares only weights and aggregates.
  3. PHC staff get voice-first access.
  4. The district gets a control room.
  5. A named officer approves every move.
- **Foreshadowing:** S4 shows eVIN, the national precedent. It did this for vaccines alone and cut stock-outs by
  80%. S11 uses eVIN's 80% as the bull case and its 12-to-36-state path as the scaling precedent.
- **Double synthesis:**
  - S2 "What one federated layer buys" states the payoff up front.
  - S11's headline and moneyshot state it again at the end.
  - S12 closes with the one-line thesis.

### 2.3 The moneyshot (exactly one; it lives on S11)

**"1.36 crore stock-out days a year avoided"**: the base case, from §5. It sits alongside "72.2% → 86.1%" key-medicine
availability, 38,241 facilities, and 36 States and UTs. It is foreshadowed on S1 (verdict card) and S2 (payoff
card).

### 2.4 Headline numbers (all from §3, §4 or §5; never alter)

| Number | Meaning | Source |
|---|---|---|
| 38,241 | PHCs (31,882) + CHCs (6,359), 31 Mar 2023 | [S01] |
| 1,69,615 / 1,340 / 714 | Sub-centres / sub-divisional hospitals / district hospitals | [S01] |
| 79.9% | CHC specialist shortfall (4,413 of 21,964 in place) | [S01] |
| 66 to 80% | Availability range of 50 key essential medicines across 10 surveyed public facilities; state PHC mean 72.2%, central PHC 77% | [S02] |
| 74.2% | Essential-medicine availability, 15 PHCs, Gadag taluk | [S03] |
| 60% for 3 to 6 months | Share of essential medicines stocked out for 3 to 6 months, Haryana | [S04] |
| 40% | Health-worker absence on unannounced visits, India | [S05] |
| 58,000 | Snakebite deaths a year, India, 2000 to 2019 average; 70% in 8 states | [S06] |
| 18,000 to 20,000; 36% | Rabies deaths a year in India; India's share of global rabies deaths | [S07] |
| 93 | Maternal mortality ratio per 1,00,000 live births, SRS 2019-21; haemorrhage is the leading cause | [S08] |
| 4 to 6 weeks | Dengue Rt crosses the epidemic threshold 4 to 6 weeks before the case peak (IDSP 2021 to 2025) | [S09] |
| 43.4% | Out-of-pocket share of total health expenditure, 2022-23 | [S10] |
| 30.84% | Pharmaceutical share of current health expenditure, 2021-22 | [S11] |
| 80%; 29,000+; 733; 12 → 36 | eVIN: stock-outs cut 80%, cold chain points live, districts, states at 2015 launch vs all 36 now | [S12] |
| 1,78,154 | Ayushman Arogya Mandirs operational, 15 Jul 2025 (reference only; not on slides) | [S13] |
| 1.2 → 21.0 days | ARV cover at PHC Kota-4 after one approved shipment (7 → 126 units, 119 vials by reefer van) | [P01] |
| 642 | Automated tests: 348 backend + 272 frontend + 22 CRM | [P02] |
| 48; 65 ms | API paths; worst p95 across 35 GET endpoints | [P02] |
| 13; 37 / 40; 836 ms; 1,249 ms | Read-only voice tools; voice eval cases passed; median to first audio without tools; with tools | [P03] |
| 40 / 5 / 30 / 10 | Facilities, Rajasthan districts, PHCs, CHCs in the prototype | [P04] |
| 6 / 31 / 2 / 40 / 7 / 365 | Warehouses / vehicles / refrigerated / drivers / medicines / OSRM road routes | [P04] |
| 2.72 crore | Baseline stock-out days a year, 7 tracer medicines, 38,241 facilities | [M] |
| 81.5 lakh / 1.36 crore / 2.17 crore | Avoided a year at 30% / 50% / 80% cut (bear / base / bull) | [M] |
| 72.2% → 80.5% / 86.1% / 94.4% | Availability after bear / base / bull | [M] |
| 58.6 to 265.8 lakh | 3×3 sensitivity range | [M] |
| 8 LIVE / 1 WIRED / 14 PILOT | Google services by build status (S8) | [P05] |

### 2.5 Third-party anchors (named, sourced; no invented quotes)

- UNDP on eVIN: stock-outs cut 80%, and replenishment time more than halved. [S12]
- The eLife 2020 Million Death Study: most snakebite deaths are preventable with timely antivenom, and the study
  names PHC networking for antivenom distribution as a gap. [S06]
- WHO: India carries 36% of global rabies deaths. [S07]
- The Constitution (Seventh Schedule) makes health a State subject. [S14]

There are no interviews, LOIs or user quotes. S9 shows a **Customer Validation Plan** (planned, none done) per
`CLAUDE.md` §5.

### 2.6 Framework map (each must be visible where listed)

| Framework | Slide / panel |
|---|---|
| Five Whys issue tree (root cause) | S3 panel "WHY THE SHELF EMPTIES" |
| Feature-parity heat grid (competitive capability) | S4 panel "FIVE SYSTEMS, ONE MISSING CAPABILITY" |
| Symmetric option comparison (obvious vs contrarian) | S4 panel "ONE NATIONAL PLATFORM VS A FEDERATED LAYER" and S2 table |
| Closed-loop value chain (sense to learn) | S5 seven-step loop |
| Decision-rights split (RACI-style: engine / human / LLM) | S7 "ENGINES DECIDE, MODELS PHRASE" |
| Layered technology stack map | S8 five layers |
| Stakeholder mind map + role × channel grid | S9 |
| Customer Validation Plan | S9 |
| Gantt pilot plan with gates | S10 |
| Risk heat map (P × I) with 1:1 mitigations | S10 |
| Three scenarios (bear / base / bull) + 3×3 sensitivity heat map | S11 |
| Three-horizon rollout (waves) | S11 |
| Federated architecture (hub-and-spoke tiers) | S11 |

### 2.7 Slide list and action titles (headlines are final; they appear again in §8 code)

| # | Ribbon tag | Section chip | Criterion chip | Headline |
|---|---|---|---|---|
| S1 | none (cover) | none | none | Title "SWASTHYAGRID" |
| S2 | SUMMARY | EXECUTIVE SUMMARY | JUDGED ON: ALL FIVE CRITERIA | India records PHC stock but nobody forecasts or moves it: SwasthyaGrid federates the forecast across states and removes an estimated 1.36 crore stock-out days a year |
| S3 | PROBLEM | PROBLEM: THE SCALE | PROBLEM-SOLUTION FIT · 20% | India's 38,241 PHCs and CHCs miss up to 1 in 3 key medicines on a given day, and the emergency drugs that go missing decide whether a patient survives |
| S4 | PROBLEM | PROBLEM: WHAT EXISTS | PROBLEM-SOLUTION FIT · 20% | India already built the ledgers: e-Aushadhi, HMIS and eVIN record stock, but only eVIN made it visible in real time, and that cut vaccine stock-outs by 80% |
| S5 | SOLUTION | SOLUTION: THE CLOSED LOOP | PROBLEM-SOLUTION FIT · 20% | SwasthyaGrid closes the loop from shelf to truck: it forecasts each stock-out, proposes the move with a reason, and a district officer approves before anything ships |
| S6 | SOLUTION | SOLUTION: BUILT AND RUNNING | AI / TECHNICAL EXECUTION · 25% | The prototype runs end to end today: 3 live surfaces, 48 API paths with a worst p95 of 65 ms, and 642 automated tests across backend, dashboard and CRM |
| S7 | AI ENGINE | AI ENGINE: FORECAST TO DECISION | AI / TECHNICAL EXECUTION · 25% | Engines compute every number and Gemini only explains it: each stock-out warning carries days of cover, a stated reason and a confidence score from 40 to 98 |
| S8 | AI ENGINE | AI ENGINE: THE GOOGLE STACK | AI / TECHNICAL EXECUTION · 25% | Google AI works in every layer: 8 Google services run in the prototype today, Gemini Live is wired as the voice swap, and 14 more switch on in the pilot |
| S9 | WHO IT SERVES | WHO IT SERVES | DEPTH AND REACH · 20% | One forecast serves eight roles from the ASHA worker to the Union ministry, and each gets the interface it can use, in its language, with the decision it owns |
| S10 | DEPLOY | WHY IT'S DEPLOYABLE | DEPLOYABILITY AND SCALABILITY · 20% | A state can go live in six weeks without new hardware: SwasthyaGrid reads the exports states already produce, runs in an Indian Google Cloud region and needs one approver per district |
| S11 | SCALE | SCALE ACROSS INDIA | IMPACT 15% · DEPTH AND REACH 20% | Rolled out state by state over three years, the federated layer removes an estimated 1.36 crore stock-out days a year and lifts key-medicine availability from 72.2% to 86.1% |
| S12 | none | none | none | "THANK YOU" + thesis line + links + team table |

Counters run "1 / 10" (S2) to "10 / 10" (S11).

---

## 3. Source register (cite on slides by short name; every quantitative claim traces here)

| ID | Source | Used for |
|---|---|---|
| S01 | MoHFW, *Health Dynamics of India (Infrastructure and Human Resources) 2022-23*, PIB release PRID 2053070 (Sep 2024), data as of 31 Mar 2023 | Facility counts, 79.9% CHC specialist shortfall |
| S02 | "Availability of Key Essential Medicines in Public Health Facilities of South Indian Union Territory" (Puducherry), PMC8654139 | 66 to 80% range, 72.2% state PHC mean, 77% central PHC |
| S03 | "An Assessment of the Availability of Essential Medicines in Gadag Taluk, Karnataka", PMC10292169 | 74.2% |
| S04 | "Factors Affecting the Availability and Utilization of Essential Medicines in India: A Systematic Review", PMC11174260 | Haryana: 60% of medicines out for 3 to 6 months |
| S05 | Chaudhury, Hammer, Kremer, Muralidharan, Rogers, "Missing in Action", *Journal of Economic Perspectives* 20(1), 2006 | 40% health-worker absence, India |
| S06 | Suraweera et al., "Trends in snakebite deaths in India from 2000 to 2019", *eLife* 2020;9:e54076 | 58,000 a year; 70% in 8 states (Bihar, Jharkhand, MP, Odisha, UP, AP incl. Telangana, Rajasthan, Gujarat) |
| S07 | WHO rabies epidemiology and burden; National Action Plan for Dog Mediated Rabies Elimination by 2030 | 36% global share; 18,000 to 20,000 deaths a year |
| S08 | Registrar General of India, SRS Special Bulletin on Maternal Mortality 2019-21 | MMR 93; haemorrhage leading cause |
| S09 | "Spatio-temporal analysis of dengue outbreaks in India (2021-2025): evidence from IDSP", PMC13479492 | Rt crosses threshold 4 to 6 weeks before peak |
| S10 | MoHFW, *National Health Accounts Estimates for India 2022-23* (PIB PRID 2265816, May 2026) | OOPE 43.4% of THE |
| S11 | NHSRC, *National Health Accounts Estimates for India 2021-22* | Pharmaceuticals 30.84% of CHE |
| S12 | UNDP India, "Improving Vaccination Systems: eVIN"; NHP India eVIN page | 80% fewer stock-outs; 29,000+ cold chain points; 733 districts; 36 States/UTs; 12 states in 2015 |
| S13 | PIB, "Update on Ayushman Arogya Mandir", PRID 2151239 | 1,78,154 AAMs (reference only) |
| S14 | Constitution of India, Seventh Schedule, List II, Entry 6; Digital Personal Data Protection Act, 2023 | Federation rationale |
| S15 | C-DAC, Drugs and Vaccines Distribution Management System (e-Aushadhi) project page | Incumbent ledger |
| P01 | SwasthyaGrid `docs/v2-reports/final-audit.md` (PHC Kota-4 ARV run) | 1.2 → 21.0 days |
| P02 | SwasthyaGrid `README.md` §Testing; final audit | Tests, endpoints, p95 |
| P03 | SwasthyaGrid `README.md` §Voice agent and §Known limitations | Voice tools, eval, latency |
| P04 | SwasthyaGrid `backend/data/` seed and `README.md` §Supply chain module | Prototype scale |
| P05 | Team IdeaForge build-status audit of the repo, 30 Sep 2026 (§4.2) | LIVE / WIRED / PILOT tags |
| M | Team IdeaForge impact model, `swasthyagrid-gcp/model/impact_model.py` (§5) | 2.72 crore, 1.36 crore, scenarios, sensitivity |

---

## 4. Product facts (audited from the code on 30 Sep 2026; the deck may state only these)

### 4.1 What the prototype does today

The prototype spans 40 facilities (30 PHCs and 10 CHCs) in 5 Rajasthan districts: Jaipur Rural, Alwar, Bikaner,
Udaipur and Kota.

**Surfaces:**
- **Command Centre** (`/command`): state KPIs, a choropleth, the district league table, a facility heatmap, live
  trucks and an AI briefing.
- **Voice Control Room** (`/voice`).
- **Recommendations** (`/recommendations`): approve, modify or reject.
- **Supply chain pages:** dispatch, shipments, tracking, fleet, drivers, load planning and warehouses.
- **Operations pages:** inventory, footfall, beds, doctors and diagnostics.
- **Intake CRM:** a separate Next.js app where facility staff update stock and confirm deliveries in Firestore.
- **Citizen chat** (`/api/v1/public-chat`): Gemini with 2 tools. One finds the nearest PHC via Google Places; the
  other gives first-aid guidance for 6 conditions and always says to call 108.

**Engines are deterministic** (`backend/app/services/forecast_service.py`, `recommendation_service.py`):
- Days of cover = `units / max(avg_daily_use, 0.1)`.
- A trigger fires when cover falls below the facility's reorder threshold (default 5 days).
- Priority: `critical` below 3 days, or an emergency medicine below 5 days; `high` below 4 days.
- Confidence = `0.5 × forecast_conf + 25 × (1 − min(km, 60) / 60) + 10 if emergency + 10 if demand factors`,
  clamped to 40 to 98.
- Refills bring a facility up to 21 days of cover.
- Lateral transfers are for critical items only: same district, within 40 km by road, the target reaches 7 days,
  and the source keeps 14 days. A lateral is chosen only if it arrives 30 minutes sooner than a warehouse refill.
- A bed redirect triggers above 90% occupancy.

**Language models explain; they never decide.** The voice agent and the Ask agent use read-only tools. Every
recommendation needs a human approval.

**Voice runs entirely on Sarvam:**
- STT: `saaras:v3-realtime`.
- Chat: `sarvam-105b-conversations`, with tool calling.
- TTS: `bulbul:v3`.
- Languages: Hindi, Hinglish and English.
- Behaviour: barge-in, and fact cards next to the transcript.
- The 13 tools are already in Gemini function schema (`build_tools`).

**Hosting:**
- Backend on Cloud Run: `swasthyagrid-api-616415200021.asia-south1.run.app`, scaled to zero, keys in Secret
  Manager, built by Cloud Build and pushed to Artifact Registry.
- Frontend: `swasthyagrid.vercel.app`.
- CRM: `swasthyagrid-crm.vercel.app`.
- Repo: `github.com/harshkawatra11/SwasthyaGrid-HealthTech`.

**All operational data is simulated** (labelled so in the app). Routes are real (OpenStreetMap via OSRM, 365
precomputed), and so are district boundaries (geoBoundaries).

### 4.2 Build-status audit (the only source for LIVE / WIRED / PILOT tags)

| Service | Status | Evidence |
|---|---|---|
| Gemini API (`gemini-3.5-flash-lite`, google-genai SDK) | LIVE | Typed Ask agent `/api/v1/ask`; citizen chat `/api/v1/public-chat` |
| Google AI Studio | LIVE | Gemini API key and prompt/tool-schema iteration |
| Firebase: Firestore (+ Admin SDK) | LIVE | CRM writes stock and proof of delivery; backend repository reads Firestore when configured |
| Maps Platform: Places API | LIVE | `backend/app/tools/maps_tool.py` nearest-PHC search |
| Cloud Run | LIVE | Backend in asia-south1 |
| Secret Manager, Cloud Build, Artifact Registry | LIVE | `backend/scripts/deploy.sh` |
| Gemini Live API | WIRED | Tool schema shared; audio adapter not written |
| Vertex AI (AutoML Forecasting, custom training, Endpoints, Model Registry) | PILOT | Only a `use_vertex_ai=False` flag exists; `docs/06-forecasting.md` plans it |
| Gemini multimodal | PILOT | Photo of a paper stock register → rows |
| Vertex AI Vision | PILOT | Cold-chain thermometer and shelf photo checks |
| Cloud Speech-to-Text and Text-to-Speech | PILOT | Fallback for languages outside Sarvam |
| Cloud Translation API | PILOT | UI and SMS text in more languages |
| Dialogflow CX | PILOT | IVR line for PHCs without smartphones |
| Firebase Auth | PILOT | Facility logins (CRM uses its own session JWT today) |
| BigQuery (+ Analytics Hub) | PILOT | State-resident datasets; aggregates shared via Analytics Hub |
| Maps Platform: Routes API | PILOT | Replace precomputed OSRM routes, live ETAs |
| Earth Engine | PILOT | Flood and heat layers as surge signals |
| Pub/Sub, Cloud Scheduler, Cloud Functions | PILOT | Nightly ingest and retrain triggers |
| data.gov.in HMIS, IDSP/IHIP, IMD, ISRO Bhuvan, WHO GHO | PILOT | Public data feeds for backtests and surge signals |
| OpenStreetMap (OSRM) roads, geoBoundaries | LIVE | Precomputed routes, district boundaries |
| Lateral (facility-to-facility) transfers | WIRED | Implemented and tested; never chosen on seed data |
| Firestore as the backend's primary data source | WIRED | Demo runs `DATA_SOURCE=seed` |

**Counts used on S8:** 8 Google services are LIVE:
1. Gemini API
2. AI Studio
3. Firestore
4. Maps Places
5. Cloud Run
6. Secret Manager
7. Cloud Build
8. Artifact Registry

1 is WIRED: Gemini Live.

14 are PILOT:
1. Dialogflow CX
2. Speech-to-Text and TTS
3. Translation API
4. Vertex AI
5. Gemini multimodal
6. Vertex AI Vision
7. Firebase Auth
8. BigQuery
9. Analytics Hub
10. Routes API
11. Earth Engine
12. Pub/Sub
13. Cloud Scheduler
14. Cloud Functions

### 4.3 Numbers from the old `pitch-deck.html` that must NOT appear

- "Gemini 2.5 Flash": the config now uses 3.5-flash-lite.
- "haversine": the optimiser now uses road routes.
- "96% confidence": no run produced it.
- "−38% wait" and "₹0 emergency procurement": nothing in the repo backs them.
- "Firestore live" presented as the backend's source: the backend runs on seed data.
- "50+ centres per officer" and "3+ days before a stock-out is noticed": neither has a source.

### 4.4 Screenshots for S6 (all 1440×900, aspect 1.6; frames are 560×350, aspect 1.6)

| Frame name | File (absolute) |
|---|---|
| `PHOTO: command` | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform\docs\v2-shots\f1-command-light.png` |
| `PHOTO: voice` | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform\docs\v2-shots\e-orb-speaking.png` |
| `PHOTO: dispatch` | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform\docs\v2-shots\d1-dispatch-light.png` |

---

## 5. Impact model

### 5.1 Code (write verbatim to `swasthyagrid-gcp/model/impact_model.py`)

```python
"""SwasthyaGrid impact model (Team IdeaForge, Sep 2026). Deterministic, no inputs, no network.

Stock-out days = facilities x tracer medicines x 365 x (1 - availability).
Avoided days  = stock-out days x cut.  Availability after = a + (1 - a) x cut.
Inputs:
  facilities   31,882 PHCs + 6,359 CHCs (MoHFW Health Dynamics of India 2022-23, 31 Mar 2023)
  tracer meds  7 (the prototype catalogue: Adrenaline, ARV, ASV, ORS, Oxytocin, Paracetamol, Tetanus Toxoid)
  availability 66% low, 72.2% mid, 80% high (PMC8654139: 50 key medicines, 10 public facilities)
  cut          30% bear, 50% base, 80% bull (bull = eVIN's reported stock-out reduction, UNDP)
Assumption: point-in-time non-availability approximates the share of item-days out of stock.
"""
PHC, CHC = 31882, 6359
F = PHC + CHC
ITEMS, DAYS = 7, 365
AVAIL = {"low": 0.66, "mid": 0.722, "high": 0.80}
CUT = {"bear": 0.30, "base": 0.50, "bull": 0.80}


def ind(n):
    s = str(int(round(n)))
    if len(s) <= 3:
        return s
    last, rest, parts = s[-3:], s[:-3], []
    while len(rest) > 2:
        parts.insert(0, rest[-2:])
        rest = rest[:-2]
    if rest:
        parts.insert(0, rest)
    return ",".join(parts) + "," + last


def lakh(x):
    return f"{x/1e5:.1f} lakh"


def crore(x):
    return f"{x/1e7:.2f} crore"


print("facilities", ind(F))
print("facility-medicine lines", ind(F * ITEMS))
base = F * ITEMS * DAYS * (1 - AVAIL["mid"])
print("baseline stock-out days a year", ind(base), "=", crore(base))
for k, c in CUT.items():
    after = (AVAIL["mid"] + (1 - AVAIL["mid"]) * c) * 100
    print(k, f"{int(c*100)}%", ind(base * c), "=", lakh(base * c), "=", crore(base * c),
          "availability after", f"{after:.1f}%")
print("sensitivity (lakh days avoided)")
for a in ("low", "mid", "high"):
    print(f"{AVAIL[a]*100:g}%", " ".join(f"{F*ITEMS*DAYS*(1-AVAIL[a])*c/1e5:.1f}" for c in CUT.values()))
```

### 5.2 Run

`python swasthyagrid-gcp/model/impact_model.py > swasthyagrid-gcp/model/model_output.txt`

### 5.3 Reference output (must match line for line; on any mismatch, stop and report)

```text
facilities 38,241
facility-medicine lines 2,67,687
baseline stock-out days a year 2,71,62,200 = 2.72 crore
bear 30% 81,48,660 = 81.5 lakh = 0.81 crore availability after 80.5%
base 50% 1,35,81,100 = 135.8 lakh = 1.36 crore availability after 86.1%
bull 80% 2,17,29,760 = 217.3 lakh = 2.17 crore availability after 94.4%
sensitivity (lakh days avoided)
66% 99.7 166.1 265.8
72.2% 81.5 135.8 217.3
80% 58.6 97.7 156.3
```

### 5.4 Assumptions register (defend in Q&A; S11 source line names A1 to A3)

| ID | Assumption | Why defensible | Sensitivity shown |
|---|---|---|---|
| A1 | Point-in-time unavailability ≈ share of item-days out of stock | Standard WHO/HAI availability method; no national stock-out-day series exists | Rows of the 3×3 grid (66% to 80%) |
| A2 | 7 tracer medicines, not the full EDL | Conservative: an EDL has well over 100 items; 7 are the prototype catalogue and are life-saving | Understates scale |
| A3 | Cut 30% / 50% / 80% | eVIN achieved 80% for vaccines (UNDP); base halves it | Columns of the grid |
| A4 | All 38,241 PHCs and CHCs by month 36 | eVIN reached all 36 States/UTs from a 12-state start | Wave plan on S11 |

---

## 6. Deck design system

### 6.1 Palette (Maudrik green/gold blended with Google blue, red, yellow, green; locked)

| Token | Hex | Role |
|---|---|---|
| `primary` | `#0F7A4D` | Panel titles, KPI numerals, section chip, source line (Maudrik green) |
| `primaryDeep` | `#0A5233` | Dark cards, rails, verdict/answer cards |
| `accent` | `#FBBC04` | Google yellow: ribbon tags, back-cards, gold text on dark, WIRED tag |
| `alert` | `#EA4335` | Google red: problem numerals, critical cells |
| `blue` | `#1A73E8` | Google blue: active ribbon tag, PILOT tag, Google-stack emphasis |
| `blueDeep` | `#174EA6` | Counter chip, criterion-chip text, links |
| `blueTint` | `#D2E3FC` | Formula boxes, pale Google fills |
| `good` | `#34A853` | Google green: LIVE tag, "working" signals |
| `tint` | `#CFEEDB` | Table headers, pale green cells |
| `alertTint` | `#FCE8E6` | Pale red cards and cells |
| `accentTint` | `#FEF7E0` | Pale yellow cells |
| `ink` | `#0A0A0A` | Every stroke and body text |
| `surface` / `surfaceAlt` / `white` | `#EDEDED` / `#F5F5F5` / `#FFFFFF` | Fills, zebra rows, background |

**Status tags (used identically everywhere):**
- **LIVE:** `good` fill, white text.
- **WIRED:** `accent` fill, ink text.
- **PILOT:** `blue` fill, white text.

### 6.2 Type, skeleton, ribbon

**Fonts:**
- Poppins `Bold` / `ExtraBold`: display, headlines, chips, numerals.
- Inter `Semi Bold` / `Bold`: body text.
- The floor is 22pt everywhere. Only the 14pt source line (named `SOURCE`) and logo-slot captions are exempt.

**Skeleton (S2 to S11):**
- **Ribbon** at y 40, h 60, seven tags `SUMMARY · PROBLEM · SOLUTION · AI ENGINE · WHO IT SERVES · DEPLOY · SCALE`.
  The active tag is Google blue with a yellow back-card; inactive tags are yellow. Punch-holes and a wire join the
  tags.
- **Row two** at y 118, h 56:
  - The green section chip at x 64.
  - The white criterion chip, with blue-deep text, at x = 64 + chipW + 28.
  - The blue-deep counter chip at x 1700.
- **Headline:** Poppins Bold 40pt at (64, 188), width 1792, stepping down to 34pt to stay within two lines.
- **Content zone:** y 318 to 1030, x 64 to 1856.
- **Source line:** 14pt green, right-aligned, at y 1046.

**Every panel:**
- A 2px ink outline and cornerRadius 0.
- A title in 24pt Poppins Bold green (a finding, not a label), with a 2px ink rule under it at y 50.

**Cards:**
- Layered cards draw an accent (or named) back-rect at +7/+7.
- The moneyshot band is a dark layered card.

### 6.3 Density bar (from the Maudrik/Satoshi standard)

- Core slides carry 140 to 360 nodes and at least 4 named panels.
- No empty region larger than about 150 × 150 px inside the content zone.
- Every chart has a one-line bold caption, or a panel title, that states its reading.
- Every analytical slide has at least one in-chart annotation:
  - S3: the tree root.
  - S7: dashed reorder line and stock-out marker.
  - S11: base cell highlighted.

---

## 7. Preamble

The preamble is the proven PRAMAAN preamble (Maudrik deck, built and validated 30 Sep 2026) with a palette,
team, ribbon-colour and counter-colour patch, followed by the SwasthyaGrid extras below. **Never hand-edit
`preamble.js`; regenerate it with §7.1.**

### 7.1 Preamble build script (write verbatim to `swasthyagrid-gcp/deck/build_preamble.py`, run once in F0)

```python
"""Build swasthyagrid-gcp/deck/preamble.js from the validated PRAMAAN preamble plus a fixed patch."""
import pathlib
ROOT = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court")
SRC = ROOT / "maudrik-policy" / "deck" / "batch_1_2_3.js"
DST = ROOT / "swasthyagrid-gcp" / "deck" / "preamble.js"
t = SRC.read_text(encoding="utf-8")
pre = t[:t.index("// ===== END PREAMBLE =====")]


def rep(old, new, count=1):
    global pre
    n = pre.count(old)
    assert n == count, (old[:60], n)
    pre = pre.replace(old, new)


rep("// ===== PRAMAAN PREAMBLE v1 =====", "// ===== SWASTHYAGRID PREAMBLE v1 =====")
start = pre.index("const C = {")
end = pre.index("};", start) + 2
NEWC = """const C = {
  primary:{r:0.059,g:0.478,b:0.302}, primaryDeep:{r:0.039,g:0.322,b:0.200},
  accent:{r:0.984,g:0.737,b:0.016}, alert:{r:0.918,g:0.263,b:0.208},
  tint:{r:0.812,g:0.933,b:0.859}, alertTint:{r:0.988,g:0.910,b:0.902},
  blue:{r:0.102,g:0.451,b:0.910}, blueDeep:{r:0.090,g:0.306,b:0.651}, blueTint:{r:0.824,g:0.890,b:0.988},
  good:{r:0.204,g:0.659,b:0.325}, accentTint:{r:0.996,g:0.969,b:0.878},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};"""
pre = pre[:start] + NEWC + pre[end:]
rep('const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Gursimran Kaur","Guru Gobind Singh Indraprastha University","Member"],["Dayita Arora","Ramjas College, University of Delhi","Member"]];',
    'const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Gursimran Kaur","Guru Gobind Singh Indraprastha University","Member"]];')
rep("hh+rh*3", "hh+rh*TEAM.length", 2)
rep("addRect(slide,x,y,w,h,act?C.primary:C.accent,C.ink,2);", "addRect(slide,x,y,w,h,act?C.blue:C.accent,C.ink,2);")
rep("addChip(s,1700,118,156,56,counter,C.primaryDeep,C.white,24);", "addChip(s,1700,118,156,56,counter,C.blueDeep,C.white,24);")
for bad in ("PRAMAAN PREAMBLE", "Dayita"):
    assert bad not in pre, bad
DST.write_text(pre, encoding="utf-8")
print(DST, len(pre), "chars")
```

Expected: it prints a path and roughly 16,000 to 17,500 characters. Any `AssertionError` means the Maudrik file
changed. Stop and report; do not hand-patch.

**What the inherited preamble provides:**
- Primitives: `addFrame`, `addRect`, `addEllipse`, `addText`, `addWireH`, `addDiagonalWire` (uses
  `relativeTransform`, correct rotation), `addDashedRow`, `addChip`, `sectionChip`, `addTable`.
- `nm`, `fmtN`, `fitText`, `TL` (single-line auto-width text), `T` (fixed width, height auto), `layered`, `panel`.
- `addBadge`, `badgeList`, `dashedH`, `logoSlot`.
- Charts and grids: `hBars`, `lineChart` (returns `{X,Y}`), `teamTable`, `measureW`, `buildRibbonAuto`,
  `skeleton2`, `heatFill`, `grid`, `vBars`, `stackedCols`, `gantt`, `tornado`.
- Fonts: loads Poppins Bold, Poppins ExtraBold, Inter Semi Bold and Inter Bold, and defines `warnings`.

**Signatures you need** (read `preamble.js` if unsure; do not modify it):
- `panel(s,x,y,w,h,title,{fill,titleColor,layered,back,reserve})` returns a frame. Children are positioned
  relative to it; the title sits at y 10 and the rule at y 50.
- `layered(p,x,y,w,h,front,name,back)` returns the front frame.
- `TL(p,x,y,size,chars,{family,style,color,maxW,min,rightAt,centerAt})`.
- `T(p,x,y,w,size,chars,{family,style,color})`. Defaults are Inter Semi Bold, ink.
- `addTable(p,x,y,colWidths,headers,rows,{rowH,headerH,cellSize,headerFill,totalRow})`. The last column is
  right-aligned.
- `grid(p,x,y,rowLabels,colLabels,cells[{t,f,tc}],{labelW,cellW,rowH,headH,corner,name})`.
- `hBars(p,x,y,w,items[{label,value,color,text,textColor}],{labelW,rowH,barH,valueW,max})`.
- `vBars(p,x,y,w,h,items,{max,barW})`.
- `lineChart(p,x,y,w,h,series[{values,color,label,labelDy}],xLabels,{yMin,yMax,yTicks,padL,padR})`.
- `gantt(p,x,y,labelW,colW,rowH,cols,rows[{label,s,e,color,text,tc}])`.
- `badgeList(p,x,y,w,items,{d,pitch,bg,fg})`.
- `addBadge(p,x,y,d,num,bg,fg)`.
- `skeleton2(s,active,counter,chip,chipW,title,source,labels)`.

### 7.2 SwasthyaGrid extras (the generator appends this block after `preamble.js`; do not edit)

```js
// ===== SWASTHYAGRID EXTRAS =====
const RIB7=["SUMMARY","PROBLEM","SOLUTION","AI ENGINE","WHO IT SERVES","DEPLOY","SCALE"];
function skeleton3(s,active,counter,chip,chipW,crit,critW,title,source){
  const t=skeleton2(s,active,counter,chip,chipW,title,source,RIB7);
  addChip(s,64+chipW+28,118,critW,56,crit,C.white,C.blueDeep,22); return t; }
const ST={LIVE:[C.good,C.white],WIRED:[C.accent,C.ink],PILOT:[C.blue,C.white]};
function statusTag(p,x,y,st,w){ w=w||112; const m=ST[st];
  const f=addFrame(p,x,y,w,34,m[0],C.ink,1.5,"TAG "+st);
  addText(f,"Poppins","Bold",22,m[1],st,0,0,w,34,"CENTER","CENTER"); return f; }
function chipFlow(p,x,y,w,items,o){ o=o||{}; const h=o.h||40, gx=o.gx||10, gy=o.gy||10; let cx=x, cy=y;
  items.forEach(it=>{ const tw=Math.ceil(measureW(p,"Inter","Bold",22,it[0]))+28;
    if(cx+tw>x+w && cx>x){ cx=x; cy+=h+gy; }
    const m=ST[it[1]]; const f=addFrame(p,cx,cy,tw,h,m[0],C.ink,1.5,"CHIP "+it[1]);
    addText(f,"Inter","Bold",22,m[1],it[0],0,0,tw,h,"CENTER","CENTER"); cx+=tw+gx; });
  return cy+h; }
function dashedV(p,x,y,h,color,th){ th=th||2.5; let cy=y;
  while(cy<y+h){ const hh=Math.min(14,y+h-cy); addRect(p,x-th/2,cy,th,hh,color||C.ink); cy+=23; } }
function donut(p,x,y,d,frac,color,label){
  const bg=addEllipse(p,x,y,d,d,C.surface,C.ink,2); bg.arcData={startingAngle:0,endingAngle:2*Math.PI,innerRadius:0.58};
  const a=addEllipse(p,x,y,d,d,color,C.ink,2); a.arcData={startingAngle:-Math.PI/2,endingAngle:-Math.PI/2+2*Math.PI*frac,innerRadius:0.58};
  const t=TL(p,0,0,30,label,{family:"Poppins",style:"ExtraBold",color:C.ink}); t.x=x+d/2-t.width/2; t.y=y+d/2-t.height/2; return t; }
function segBar(p,x,y,w,h,segs){ const tot=segs.reduce((a,s)=>a+s.v,0); let cx=x;
  segs.forEach(sg=>{ const sw=w*sg.v/tot; addRect(p,cx,y,sw,h,sg.c,C.ink,2);
    if(sg.t){ const t=TL(p,0,0,22,sg.t,{family:"Poppins",style:"Bold",color:sg.tc||C.white}); t.x=cx+sw/2-t.width/2; t.y=y+h/2-t.height/2; }
    cx+=sw; }); }
function photoFrame(p,x,y,w,h,name){ return addFrame(p,x,y,w,h,C.surface,C.ink,2.5,"PHOTO: "+name); }
function srcLine(s,text){ const src=addText(s,"Inter","Semi Bold",14,C.primary,text,64,1046,1792,20,"RIGHT",undefined,true); src.name="SOURCE";
  if(src.height>22) warnings.push("source 2 lines: "+s.name); return src; }
```

---

## 8. Slide code (final copy; the generator substitutes real IDs for "S1" … "S12")

**Rules for this section:**
- Each block begins with `{ const s = await figma.getNodeByIdAsync("S<n>")`. `gen.py` depends on that exact
  prefix.
- Do not add other code blocks in this section that start with `{ const s`.
- All copy has been linted: zero em or en dashes, zero banned words, zero question marks or exclamation marks.

### Slide 1: Cover (no ribbon, no KPI-tile row; D6)

```js
{ const s = await figma.getNodeByIdAsync("S1"); s.fills=[{type:"SOLID",color:C.white}];
addChip(s,64,48,700,56,"BUILD WITH AI · CODE FOR COMMUNITIES",C.blue,C.white,22);
addChip(s,788,48,560,56,"PHC HEALTH SUPPLY CHAIN CHALLENGE",C.accent,C.ink,22);
addChip(s,1476,48,380,56,"TEAM IDEAFORGE",C.primaryDeep,C.white,22);
addWireH(s,64,1856,140,C.ink,2.5);
[64,460,860,1260,1848].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2));
nm(TL(s,64,172,112,"SWASTHYAGRID",{family:"Poppins",style:"ExtraBold",maxW:1120,min:80}),"TITLE");
T(s,64,330,1120,34,"A federated AI control room that forecasts PHC stock-outs and moves medicine before the shelf empties",{family:"Poppins",style:"Bold",color:C.primary});
const v=layered(s,64,448,1120,250,C.primary,"CARD: verdict");
T(v,28,20,1064,30,"Do not build India another national database. Federate the forecast: data stays with each state, models travel, and a district officer approves every move.",{family:"Poppins",style:"Bold",color:C.accent});
T(v,28,166,1064,22,"Running today on 40 simulated facilities in 5 Rajasthan districts. At national scale, base case: 1.36 crore stock-out days a year avoided on 7 emergency medicines.",{color:C.white});
TL(s,64,722,26,"TEAM IDEAFORGE",{color:C.primary});
teamTable(s,64,768);
const r=layered(s,1236,172,620,808,C.tint,"CARD: five numbers");
TL(r,24,18,24,"THE CASE IN FIVE NUMBERS",{color:C.primaryDeep});
addRect(r,24,58,572,2,C.ink);
[["38,241","PHCs and CHCs run India's frontline care (MoHFW, March 2023)"],
 ["66 to 80%","of key essential medicines found in stock at surveyed public facilities"],
 ["58,000","snakebite deaths a year; antivenom only works if the PHC holds it"],
 ["80%","fewer vaccine stock-outs once eVIN made stock visible (UNDP)"],
 ["1.2 → 21.0 days","ARV cover at PHC Kota-4 after one approved SwasthyaGrid shipment"]].forEach((f,i)=>{ const y=76+i*118;
  TL(r,24,y,36,f[0],{family:"Poppins",style:"ExtraBold",color:i===4?C.blue:C.primary,maxW:572}); T(r,24,y+50,572,22,f[1]); });
logoSlot(r,24,700,270,80,"Build with AI"); logoSlot(r,326,700,270,80,"Team IdeaForge");
addWireH(s,64,1856,1004,C.ink,2.5);
srcLine(s,"Source: MoHFW Health Dynamics of India 2022-23 | PMC8654139 (Puducherry) | Suraweera et al., eLife 2020 | UNDP eVIN | SwasthyaGrid prototype run log (docs/v2-reports/final-audit.md) | Team IdeaForge impact model");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 2: Executive Summary (archetype H; locks the recommendation; brief-to-product map; payoff card)

```js
{ const s = await figma.getNodeByIdAsync("S2");
skeleton3(s,0,"1 / 10","EXECUTIVE SUMMARY",360,"JUDGED ON: ALL FIVE CRITERIA",470,
 "India records PHC stock but nobody forecasts or moves it: SwasthyaGrid federates the forecast across states and removes an estimated 1.36 crore stock-out days a year",
 "Source: MoHFW HDI 2022-23 | PMC8654139 | Chaudhury et al., JEP 2006 | eLife 2020 | Constitution, Seventh Schedule | SwasthyaGrid repository audit (Sep 2026) | Team IdeaForge impact model");
// THE GAP
const pp=panel(s,64,318,560,362,"SEEN LATE, MOVED NEVER");
TL(pp,16,58,44,"66 to 80%",{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:528});
TL(pp,16,118,22,"of key medicines in stock at surveyed PHCs",{family:"Inter",style:"Bold",maxW:528});
[["58,000","snakebite deaths a year"],["40%","health workers absent (2006)"],["79.9%","CHC specialist posts vacant"]].forEach((k,i)=>{ const y=164+i*64;
  TL(pp,16,y,30,k[0],{family:"Poppins",style:"ExtraBold",color:C.alert,maxW:170}); T(pp,196,y+2,348,22,k[1]); });
// WHY THE OBVIOUS ANSWER STALLS
const po=panel(s,648,318,600,362,"WHY THE OBVIOUS ANSWER STALLS");
nm(addTable(po,16,58,[220,348],["Obvious fix","Why it stalls"],[
 ["One national database","Health is a State subject; 36 States and UTs own the data"],
 ["Replace e-Aushadhi","States run it today; a rip-out takes years"],
 ["A dashboard per PHC","Pharmacists work by phone, in Hindi, between patients"],
 ["AI that auto-orders","No officer signs off; one bad order ends trust"]],{rowH:64,headerH:40}),"TABLE: obvious fix");
// OUR ANSWER
const pa=layered(s,1272,318,577,362,C.primaryDeep,"CARD: our answer");
TL(pa,20,12,24,"OUR ANSWER: FEDERATE THE FORECAST",{color:C.accent,maxW:537});
addRect(pa,20,50,537,2,C.accent);
[["1","Decision layer on top of e-Aushadhi, HMIS and eVIN-style feeds, not a new record system"],
 ["2","Each state's data stays in its own BigQuery; Vertex AI shares model weights, never rows"],
 ["3","Voice for the PHC, a control room for the district; a named officer approves every move"]].forEach((b,i)=>{ const y=66+i*96;
  addBadge(pa,20,y,40,b[0],C.accent,C.ink); T(pa,74,y,483,22,b[1],{color:C.white}); });
// THE BRIEF, ANSWERED
const pq=panel(s,64,704,1100,326,"THE BRIEF, ANSWERED LINE BY LINE");
nm(addTable(pq,16,58,[330,560,178],["Organiser asks for","SwasthyaGrid today","Status"],[
 ["Live stock, beds, staff","Command Centre: 40 facilities, live stream",""],
 ["Demand forecast","Days of cover and 7-day footfall forecast",""],
 ["Early stock-out warning","Critical below 3 days, emergency below 5",""],
 ["Cross-district moves","Refills live; lateral transfers tested",""],
 ["Shared models, all states","Vertex AI federated training per state",""],
 ["Voice-first access","Hindi, Hinglish, English; 13 tools",""]],{rowH:38,headerH:38}),"TABLE: brief map");
["LIVE","LIVE","LIVE","WIRED","PILOT","LIVE"].forEach((st,i)=>statusTag(pq,939,58+38+38*i+2,st));
// PAYOFF
const c=layered(s,1188,704,661,326,C.blue,"CARD: payoff");
TL(c,20,12,24,"WHAT ONE FEDERATED LAYER BUYS",{color:C.accent,maxW:621});
[["1.36 Cr","stock-out days a year avoided (base)"],["86.1%","key-medicine availability, from 72.2%"],["6 weeks","from MoU to a live district"]].forEach((k,i)=>{ const f=addFrame(c,20+i*210,60,196,190,C.white,C.ink,2,"KPI TILE");
  TL(f,12,10,40,k[0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:172,min:28}); T(f,12,72,172,22,k[1],{family:"Inter",style:"Bold"}); });
T(c,20,266,621,22,"Bear case still avoids 81.5 lakh days a year; bull, 2.17 crore.",{family:"Inter",style:"Bold",color:C.white});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 3: Problem, the scale (archetype I, two-chart workhorse + issue tree + donut)

```js
{ const s = await figma.getNodeByIdAsync("S3");
skeleton3(s,1,"2 / 10","PROBLEM: THE SCALE",380,"PROBLEM-SOLUTION FIT · 20%",450,
 "India's 38,241 PHCs and CHCs miss up to 1 in 3 key medicines on a given day, and the emergency drugs that go missing decide whether a patient survives",
 "Source: MoHFW HDI 2022-23 | PMC8654139 (Puducherry) | PMC10292169 (Gadag) | PMC11174260 (Haryana) | eLife 2020 | WHO rabies | SRS 2019-21 | IDSP dengue analysis, PMC13479492 | NHA 2021-22 and 2022-23");
// FACILITY TIERS
const pa=panel(s,64,318,700,350,"38,241 PHCS AND CHCS HOLD THE STOCK");
hBars(pa,16,58,668,[
 {label:"Sub-centres",value:169615,color:C.tint,text:"1,69,615"},
 {label:"PHCs",value:31882,color:C.primary,text:"31,882"},
 {label:"CHCs",value:6359,color:C.primary,text:"6,359"},
 {label:"Sub-div. hosp.",value:1340,color:C.surface,text:"1,340"},
 {label:"District hosp.",value:714,color:C.surface,text:"714"}],{labelW:190,rowH:46,barH:30,valueW:120});
T(pa,16,300,668,22,"Green: the 38,241 facilities we target first",{family:"Inter",style:"Bold",color:C.primary});
// AVAILABILITY STUDIES
const pb=panel(s,788,318,560,350,"KEY-MEDICINE AVAILABILITY TOPS OUT AT 80%");
vBars(pb,16,56,528,240,[
 {label:"Low",value:66,color:C.alert,text:"66%"},
 {label:"State",value:72.2,color:C.accent,text:"72.2%"},
 {label:"Gadag",value:74.2,color:C.accent,text:"74.2%"},
 {label:"Central",value:77,color:C.accent,text:"77%"},
 {label:"High",value:80,color:C.primary,text:"80%"}],{max:100,barW:64});
T(pb,16,300,528,22,"Key-medicine availability, by study",{family:"Inter",style:"Bold",color:C.alert});
// THE MISSING DRUG
const pc=layered(s,1372,318,477,350,C.alertTint,"CARD: missing drug",C.alert);
TL(pc,16,12,24,"THE MISSING DRUG DECIDES",{color:C.alert,maxW:445});
addRect(pc,16,50,445,2,C.ink);
[["Antivenom (ASV)","58,000 snakebite deaths a year"],["Anti-rabies vaccine","18,000 to 20,000 rabies deaths"],
 ["Oxytocin","MMR 93; haemorrhage leads"],["ORS, paracetamol","Dengue signal: 4 to 6 weeks ahead"]].forEach((d,i)=>{ const y=62+i*70;
  TL(pc,16,y,22,d[0],{family:"Poppins",style:"Bold",color:C.alert,maxW:445}); T(pc,16,y+32,445,22,d[1]); });
// FIVE WHYS
const pd=panel(s,64,692,1100,338,"WHY THE SHELF EMPTIES: FIVE WHYS, ONE ROOT");
const root=addFrame(pd,16,62,250,234,C.alert,C.ink,2,"NODE root");
T(root,16,14,218,24,"ROOT CAUSE",{family:"Poppins",style:"Bold",color:C.white});
T(root,16,60,218,22,"Stock is recorded but never turned into a decision",{family:"Inter",style:"Bold",color:C.white});
addWireH(pd,266,292,179,C.ink,2.5); addRect(pd,290.75,83,2.5,192,C.ink);
["Seen late: HMIS reports monthly, after the shelf empties",
 "No forecast: nobody computes burn rates or surges",
 "Not moved: a nearby PHC holds surplus nobody sees",
 "No hands: 40% of staff absent; registers on paper",
 "Wrong tool: HQ dashboards, no Hindi voice line"].forEach((w,i)=>{ const y=62+i*48;
  addWireH(pd,292,320,y+21,C.ink,2.5);
  const b=addFrame(pd,320,y,764,42,C.white,C.ink,2,"NODE why"); addRect(b,0,0,8,42,C.alert);
  TL(b,20,7,22,w,{family:"Inter",style:"Bold",maxW:736}); });
T(pd,16,304,1068,22,"Haryana: 60% of essential medicines were out of stock for 3 to 6 months at a time",{family:"Inter",style:"Bold",color:C.alert});
// OUT OF POCKET
const pe=panel(s,1188,692,668,338,"HOUSEHOLDS PAY 43.4% OF THE BILL");
donut(pe,24,70,220,0.434,C.alert,"43.4%");
T(pe,270,62,382,22,"Out-of-pocket share of total health spending, 2022-23",{family:"Inter",style:"Bold"});
T(pe,270,134,382,22,"Medicines are 30.84% of current health spending (2021-22)");
T(pe,270,206,382,22,"An empty PHC shelf sends the family to a private chemist",{family:"Inter",style:"Bold",color:C.alert});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 4: Problem, what exists (feature-parity heat grid; eVIN foreshadow; symmetric obvious-vs-federated)

```js
{ const s = await figma.getNodeByIdAsync("S4");
skeleton3(s,1,"3 / 10","PROBLEM: WHAT EXISTS",400,"PROBLEM-SOLUTION FIT · 20%",450,
 "India already built the ledgers: e-Aushadhi, HMIS and eVIN record stock, but only eVIN made it visible in real time, and that cut vaccine stock-outs by 80%",
 "Source: C-DAC e-Aushadhi / DVDMS | HMIS, data.gov.in | UNDP India eVIN and NHP eVIN page | IHIP / IDSP | ABDM Health Facility Registry | Constitution, Seventh Schedule | DPDP Act 2023 | Team IdeaForge assessment");
// CAPABILITY GRID
const pa=panel(s,64,318,1100,420,"FIVE SYSTEMS, ONE MISSING CAPABILITY: DECIDE");
const Y={t:"Yes",f:C.tint}, P={t:"Part",f:C.accent}, N={t:"No",f:C.alertTint}, SY={t:"Yes",f:C.primary,tc:C.white}, PL={t:"Pilot",f:C.blue,tc:C.white};
grid(pa,16,58,["HMIS (monthly)","e-Aushadhi / DVDMS","eVIN (vaccines)","IHIP / IDSP","ABDM HFR","SwasthyaGrid"],
 ["Record","Live","Forecast","Warn","Move","Voice","Learn"],[
 [Y,N,N,N,N,N,N],
 [Y,P,N,P,P,N,N],
 [Y,Y,P,Y,P,N,N],
 [P,Y,P,Y,N,N,N],
 [P,N,N,N,N,N,N],
 [SY,SY,SY,SY,SY,SY,PL]],{labelW:244,cellW:117,rowH:46,headH:42,corner:"System",name:"TABLE: capability grid"});
T(pa,16,384,1068,22,"Team assessment from public programme documents; eVIN covers vaccines only",{family:"Inter",style:"Bold",color:C.primary});
// THE PRECEDENT
const pb=layered(s,1188,318,668,420,C.primaryDeep,"CARD: evin precedent");
TL(pb,20,12,24,"THE PRECEDENT: EVIN CUT STOCK-OUTS 80%",{color:C.accent,maxW:628});
addRect(pb,20,50,628,2,C.accent);
[["80%","fewer vaccine stock-outs; restock time more than halved"],["29,000+","cold chain points live in 733 districts"],["12 → 36","states at the 2015 launch, then all 36 States and UTs"]].forEach((k,i)=>{ const y=66+i*102;
  TL(pb,20,y,44,k[0],{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:190,min:28}); T(pb,230,y+6,418,22,k[1],{color:C.white}); });
T(pb,20,372,628,22,"Same pattern, now for medicines, beds and staff",{family:"Inter",style:"Bold",color:C.accent});
// SYMMETRIC COMPARISON
const pc=panel(s,64,762,1100,268,"ONE NATIONAL PLATFORM VS A FEDERATED LAYER");
nm(addTable(pc,16,56,[260,404,404],["Test","One national platform","Federated layer"],[
 ["Data ownership","State data moves to Delhi","Stays in each state's cloud"],
 ["Time to pilot","Tender and migration: years","Reads current exports: 6 weeks"],
 ["Blast radius","One outage stops 36 States/UTs","One state node fails alone"],
 ["Model quality","One model, one national average","State models, shared weights"]],{rowH:42,headerH:38}),"TABLE: symmetric");
// LAWFUL DEFAULT
const pd=panel(s,1188,762,668,268,"FEDERATION IS THE LAWFUL DEFAULT");
badgeList(pd,16,60,636,["Health is a State subject (Seventh Schedule, List II, Entry 6)","DPDP Act 2023: stock data carries no patient identity","Google Cloud Mumbai and Delhi regions keep each node in India"],{d:40,pitch:66});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 5: Solution, the closed loop (value-chain loop; surfaces table; prototype proof card)

```js
{ const s = await figma.getNodeByIdAsync("S5");
skeleton3(s,2,"4 / 10","SOLUTION: THE CLOSED LOOP",470,"PROBLEM-SOLUTION FIT · 20%",450,
 "SwasthyaGrid closes the loop from shelf to truck: it forecasts each stock-out, proposes the move with a reason, and a district officer approves before anything ships",
 "Source: SwasthyaGrid repository (README, docs/v2-architecture.md, backend/app/services) | prototype run log, docs/v2-reports/final-audit.md | OpenStreetMap via OSRM | geoBoundaries");
// THE LOOP
const pa=panel(s,64,318,1792,330,"SEVEN STEPS, ONE LOOP, A HUMAN AT STEP FOUR");
[["SENSE","PHC updates stock in the CRM or by voice; Firestore holds it",C.white],
 ["FORECAST","Days of cover, 7-day footfall and bed load per facility",C.white],
 ["PROPOSE","Refill or transfer, with quantity, reason and confidence",C.white],
 ["APPROVE","A district officer approves, edits or rejects",C.accent],
 ["DISPATCH","Planner picks the vehicle, driver and cold chain",C.white],
 ["CONFIRM","PHC confirms receipt; stock updates once, idempotent",C.white],
 ["LEARN","Risk drops live; outcomes feed the next forecast",C.tint]].forEach((st,i)=>{ const x=16+i*252;
  const b=addFrame(pa,x,62,228,200,st[2],C.ink,2,"NODE step");
  addBadge(b,12,12,40,i+1,i===3?C.blue:C.primary,C.white);
  TL(b,62,16,24,st[0],{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:154});
  T(b,12,66,204,22,st[1]);
  if(i<6) addWireH(pa,x+228,x+252,162,C.ink,3); });
addRect(pa,1640.5,262,3,20,C.ink); addWireH(pa,128.5,1643.5,282,C.ink,3); addRect(pa,128.5,262,3,20,C.ink);
TL(pa,0,290,22,"Every confirmed delivery closes the loop: risk falls on the dashboard without a reload",{family:"Inter",style:"Bold",color:C.primary,centerAt:896});
// SURFACES
const pb=panel(s,64,672,1000,358,"FIVE SURFACES, ONE DATA SPINE");
nm(addTable(pb,16,56,[230,500,238],["Surface","What it does","Main user"],[
 ["Command Centre","KPIs, risk map, league table, AI briefing","District officers"],
 ["Voice Control","Hindi, Hinglish, English, grounded in data","PHC staff, MOs"],
 ["Supply Chain","Dispatch map, fleet, load plan, warehouses","Warehouse teams"],
 ["Intake CRM","Stock updates and proof of delivery","Pharmacists"],
 ["Citizen chat","Nearest PHC on Maps; 108 first-aid steps","Patients"]],{rowH:50,headerH:40}),"TABLE: surfaces");
// PROOF CARD
const c=layered(s,1088,672,768,358,C.white,"CARD: kota proof");
TL(c,20,12,24,"ONE APPROVAL MOVED PHC KOTA-4 OUT OF CRITICAL",{color:C.primary,maxW:728});
addRect(c,20,50,728,2,C.ink);
TL(c,20,62,56,"1.2 → 21.0 days",{family:"Poppins",style:"ExtraBold",color:C.blue,maxW:728});
T(c,20,142,728,22,"ARV cover at PHC Kota-4 before and after one approved shipment",{family:"Inter",style:"Bold"});
["7 vials on the shelf: status critical","119 vials left DDW Kota in a refrigerated van","126 vials confirmed in the CRM: status moves to stress"].forEach((t,i)=>{ const y=186+i*44;
  addBadge(c,20,y,36,i+1,C.primary,C.white); T(c,68,y+2,680,22,t); });
T(c,20,322,728,22,"Simulated operations on real OpenStreetMap road routes",{color:C.primaryDeep});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 6: Solution, built and running (three real screenshots; engineering proof; LIVE Google services)

```js
{ const s = await figma.getNodeByIdAsync("S6");
skeleton3(s,2,"5 / 10","SOLUTION: BUILT AND RUNNING",500,"AI / TECHNICAL EXECUTION · 25%",500,
 "The prototype runs end to end today: 3 live surfaces, 48 API paths with a worst p95 of 65 ms, and 642 automated tests across backend, dashboard and CRM",
 "Source: SwasthyaGrid repository, README and docs/v2-reports/final-audit.md (Sep 2026) | swasthyagrid.vercel.app | Cloud Run asia-south1 | github.com/harshkawatra11/SwasthyaGrid-HealthTech");
// SCREENSHOTS
const pa=panel(s,64,318,1792,460,"THREE SURFACES, ONE LIVE LOOP");
[["command","Command Centre: 40 facilities, live risk"],["voice","Voice Control Room: Hindi and English"],["dispatch","Dispatch: trucks on real road routes"]].forEach((ph,i)=>{ const x=16+i*600;
  photoFrame(pa,x,58,560,350,ph[0]); TL(pa,x,418,22,ph[1],{family:"Inter",style:"Bold",maxW:560}); });
// ENGINEERING PROOF
const pb=panel(s,64,802,860,228,"642 TESTS AND A 65 MS WORST P95");
[[["642","automated tests pass"],["48","API paths"],["65 ms","worst p95, 35 GETs"],["13","read-only voice tools"]],
 [["37 / 40","voice eval cases"],["836 ms","median to first audio"],["365","real road routes"],["31","trucks, 2 refrigerated"]]].forEach((col,ci)=>col.forEach((k,i)=>{ const x=16+ci*424, y=60+i*40;
  TL(pb,x,y,24,k[0],{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:120}); T(pb,x+130,y+2,280,22,k[1]); }));
// LIVE ON GOOGLE
const c=layered(s,948,802,908,228,C.white,"CARD: live on google",C.blue);
TL(c,20,12,24,"RUNNING ON GOOGLE TODAY",{color:C.blueDeep,maxW:868});
addRect(c,20,50,868,2,C.ink);
["Cloud Run in Mumbai (asia-south1): API, live stream, voice socket",
 "Gemini API: typed Ask agent and citizen chat on shared tools",
 "Firestore and Firebase Admin: CRM intake and proof of delivery",
 "Maps Places API: nearest PHC for a citizen"].forEach((t,i)=>{ const y=60+i*40;
  statusTag(c,20,y,"LIVE"); T(c,146,y+2,742,22,t); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 7: AI engine, forecast to decision (annotated line chart; decision-rights table; formulas; Vertex AI upgrade)

```js
{ const s = await figma.getNodeByIdAsync("S7");
skeleton3(s,3,"6 / 10","AI ENGINE: FORECAST TO DECISION",580,"AI / TECHNICAL EXECUTION · 25%",500,
 "Engines compute every number and Gemini only explains it: each stock-out warning carries days of cover, a stated reason and a confidence score from 40 to 98",
 "Source: backend/app/services/forecast_service.py and recommendation_service.py | docs/06-forecasting.md | prototype run log (PHC Kota-4) | Google Cloud Vertex AI documentation | IDSP dengue analysis, PMC13479492");
// ANNOTATED FORECAST
const pa=panel(s,64,318,1000,380,"REORDER FIRES 4.2 DAYS BEFORE THE SHELF EMPTIES");
const g=lineChart(pa,16,56,968,290,[
 {values:[30.2,24.4,18.6,12.8,7.0,1.2,0,0,0],color:C.alert,label:"No action",labelDy:-20},
 {values:[30.2,24.4,18.6,12.8,126,120.2,114.4,108.6,102.8],color:C.primary,label:"Approved",labelDy:0}],
 ["−4","−3","−2","−1","0","+1","+2","+3","+4"],{yMin:0,yMax:140,yTicks:[0,40,80,120],padL:70,padR:150});
dashedH(pa,g.X(0),g.Y(29),g.X(8)-g.X(0),C.primaryDeep,2);
TL(pa,600,g.Y(29)-34,22,"Reorder: 5 days of cover",{family:"Inter",style:"Bold",color:C.primaryDeep});
dashedV(pa,g.X(5.2),g.Y(140),g.Y(0)-g.Y(140),C.alert,2.5);
TL(pa,g.X(5.2)+10,150,22,"Stock-out: day +1.2",{family:"Inter",style:"Bold",color:C.alert});
addEllipse(pa,g.X(1)-12,g.Y(24.4)-12,24,24,null,C.accent,3);
TL(pa,g.X(1)-60,g.Y(24.4)-62,22,"Trigger fires",{family:"Inter",style:"Bold"});
T(pa,16,348,968,22,"Burn of 5.8 units a day, from the audited run (7 units = 1.2 days)",{family:"Inter",style:"Bold",color:C.primary});
// DECISION RIGHTS
const pb=panel(s,1088,318,768,380,"ENGINES DECIDE, MODELS PHRASE");
nm(addTable(pb,16,58,[330,196,210],["Decision","Engine","LLM"],[
 ["Days of cover, risk","Decides","Never"],
 ["Bed pressure","Decides","Never"],
 ["Transfer size, priority","Decides","Never"],
 ["Confidence score","Decides","Never"],
 ["Approve or reject","A human","Never"],
 ["Briefings, voice answers","Gives numbers","Phrases them"]],{rowH:44,headerH:40}),"TABLE: decision rights");
// FORMULAS
const pc=panel(s,64,722,600,308,"THE FORMULAS, IN THE OPEN",{fill:C.blueTint,titleColor:C.blueDeep});
T(pc,16,60,568,22,"Days of cover = units ÷ max(daily use, 0.1)",{family:"Poppins",style:"Bold"});
T(pc,16,100,568,22,"Critical below 3 days; emergency drugs below 5",{family:"Inter",style:"Bold",color:C.alert});
T(pc,16,138,568,22,"Confidence = 0.5 × forecast + 25 × (1 − km ÷ 60) + 10 if emergency + 10 if surge, held to 40 to 98",{family:"Poppins",style:"Bold"});
T(pc,16,248,568,22,"Refill to 21 days; lateral only within 40 km",{family:"Inter",style:"Bold",color:C.primaryDeep});
// VERTEX AI UPGRADE
const pd=panel(s,688,722,1168,308,"VERTEX AI TURNS RULES INTO LEARNED FORECASTS");
nm(addTable(pd,16,58,[250,420,466],["Layer","Today (LIVE)","Pilot on Vertex AI"],[
 ["Demand forecast","Burn-rate rules","AutoML Forecasting per state"],
 ["Surge signals","Seeded demand factors","IDSP, IMD, Earth Engine floods"],
 ["Serving","In-process Python","Vertex AI Endpoints, Registry"],
 ["Cross-state","None","Federated averaging of weights"]],{rowH:48,headerH:40}),"TABLE: vertex upgrade");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 8: AI engine, the Google stack (five-layer stack map with status chips; status bar; voice-engine diagram)

```js
{ const s = await figma.getNodeByIdAsync("S8");
skeleton3(s,3,"7 / 10","AI ENGINE: THE GOOGLE STACK",520,"AI / TECHNICAL EXECUTION · 25%",500,
 "Google AI works in every layer: 8 Google services run in the prototype today, Gemini Live is wired as the voice swap, and 14 more switch on in the pilot",
 "Source: SwasthyaGrid repository (backend/app, frontend, ai-healthcare-crm, scripts/deploy.sh) | Google Cloud product documentation | data.gov.in | IDSP | IMD | ISRO Bhuvan | WHO GHO | Team IdeaForge build-status audit (Sep 2026)");
// STACK MAP
const pa=panel(s,64,318,1180,712,"FIVE LAYERS, EVERY SERVICE TAGGED BY STATUS");
[["PEOPLE AND CHANNELS",[["Sarvam voice: STT, LLM, TTS","LIVE"],["Gemini Live API","WIRED"],["Dialogflow CX","PILOT"],["Cloud Speech-to-Text and TTS","PILOT"],["Cloud Translation API","PILOT"]]],
 ["AI AND MODELS",[["Gemini API","LIVE"],["Google AI Studio","LIVE"],["Vertex AI: AutoML, training, Endpoints","PILOT"],["Gemini multimodal","PILOT"],["Vertex AI Vision","PILOT"]]],
 ["DATA AND MAPS",[["Firebase: Firestore","LIVE"],["Firebase Auth","PILOT"],["BigQuery","PILOT"],["BigQuery Analytics Hub","PILOT"],["Maps Places API","LIVE"],["Maps Routes API","PILOT"],["Earth Engine","PILOT"]]],
 ["RUN AND DEPLOY",[["Cloud Run (asia-south1)","LIVE"],["Secret Manager","LIVE"],["Cloud Build","LIVE"],["Artifact Registry","LIVE"],["Pub/Sub","PILOT"],["Cloud Scheduler","PILOT"],["Cloud Functions","PILOT"]]],
 ["PUBLIC DATA",[["data.gov.in HMIS","PILOT"],["IDSP / IHIP","PILOT"],["IMD weather","PILOT"],["ISRO Bhuvan","PILOT"],["WHO GHO","PILOT"],["OpenStreetMap roads","LIVE"],["geoBoundaries","LIVE"]]]].forEach((L,i)=>{ const y=62+i*128;
  const rail=addFrame(pa,16,y,200,118,C.primaryDeep,C.ink,2,"RAIL");
  addText(rail,"Poppins","Bold",22,C.white,L[0],12,0,176,118,"LEFT","CENTER");
  const bottom=chipFlow(pa,232,y+14,932,L[1]);
  if(bottom>y+118) warnings.push("chip rows overflow: "+L[0]); });
// STATUS COUNT
const pb=panel(s,1268,318,588,250,"8 LIVE, 1 WIRED, 14 IN THE PILOT");
segBar(pb,16,62,556,44,[{v:8,c:C.good,t:"8"},{v:1,c:C.accent,t:"1",tc:C.ink},{v:14,c:C.blue,t:"14"}]);
[["LIVE","runs in the prototype today"],["WIRED","code exists, off in the demo"],["PILOT","built in the 6-week pilot"]].forEach((l,i)=>{ const y=120+i*40;
  statusTag(pb,16,y,l[0],104); T(pb,132,y+2,440,22,l[1]); });
// VOICE ENGINES
const c=layered(s,1268,592,588,438,C.white,"CARD: voice engines");
TL(c,20,12,24,"ONE TOOL LAYER, TWO VOICE ENGINES",{color:C.primary,maxW:548});
addRect(c,20,50,548,2,C.ink);
const tb=addFrame(c,20,64,548,84,C.blueTint,C.ink,2,"NODE tools");
T(tb,14,8,520,22,"13 read-only tools in Gemini function schema",{family:"Poppins",style:"Bold"});
addRect(c,292.75,148,2.5,24,C.ink); addWireH(c,152,436,172,C.ink,2.5); addRect(c,150.75,172,2.5,22,C.ink); addRect(c,434.75,172,2.5,22,C.ink);
[[20,"Sarvam","LIVE","STT, LLM and TTS"],[304,"Gemini Live","WIRED","Speech in and out"]].forEach(e=>{ const b=addFrame(c,e[0],194,264,124,C.white,C.ink,2,"NODE engine");
  TL(b,14,8,22,e[1],{family:"Poppins",style:"Bold",color:C.primary,maxW:236}); statusTag(b,14,44,e[2]); TL(b,14,84,22,e[3],{family:"Inter",style:"Semi Bold",maxW:236}); });
T(c,20,330,548,22,"836 ms to first audio; 37 of 40 eval cases",{family:"Inter",style:"Bold"});
T(c,20,366,548,22,"Every number comes from a tool result",{family:"Inter",style:"Bold",color:C.primary});
T(c,20,402,548,22,"Hindi, Hinglish and English today");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 9: Who it serves (stakeholder mind map; role × channel heat grid; Customer Validation Plan)

```js
{ const s = await figma.getNodeByIdAsync("S9");
skeleton3(s,4,"8 / 10","WHO IT SERVES",330,"DEPTH AND REACH · 20%",390,
 "One forecast serves eight roles from the ASHA worker to the Union ministry, and each gets the interface it can use, in its language, with the decision it owns",
 "Source: MoHFW Health Dynamics of India 2022-23 (facility tiers and roles) | SwasthyaGrid voice evaluation, docs/v2-reports/final-audit.md | Sarvam AI and Google Cloud Translation documentation | Team IdeaForge validation plan");
// MIND MAP
const pa=panel(s,64,318,1000,712,"EIGHT ROLES AROUND ONE SHARED FORECAST");
const NODES=[[24,66,"PHC pharmacist","Voice or CRM: stock in, receipt confirmed",C.good],
 [355,66,"Medical officer","Voice: what runs out this week",C.good],
 [686,66,"ASHA and ANM","Hindi voice: flag a local surge",C.good],
 [24,334,"Block MO","Approves moves between PHCs",C.blue],
 [686,334,"Drug warehouse","Dispatch, fleet and load plans",C.blue],
 [24,596,"District officer","Command Centre: approve or reject",C.blue],
 [355,596,"State NHM","State node: forecasts and buffers",C.primaryDeep],
 [686,596,"Union MoHFW","Federated view, national buffers",C.primaryDeep]];
NODES.forEach(n=>addDiagonalWire(pa,500,386,n[0]+145,n[1]+52,C.ink,2.5));
addEllipse(pa,390,276,220,220,C.primary,C.ink,2.5);
addText(pa,"Poppins","Bold",26,C.white,"ONE SHARED FORECAST",405,276,190,220,"CENTER","CENTER");
NODES.forEach(n=>{ const b=addFrame(pa,n[0],n[1],290,104,C.white,C.ink,2,"NODE role"); addRect(b,0,0,8,104,n[4]);
  TL(b,20,8,22,n[2],{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:258}); T(b,20,44,258,22,n[3]); });
// ROLE × CHANNEL
const pb=panel(s,1088,318,768,360,"VOICE FIRST WHERE SCREENS FAIL");
const M={t:"Main",f:C.primary,tc:C.white}, A={t:"Also",f:C.tint}, O={t:"No",f:C.surfaceAlt};
grid(pb,16,56,["PHC staff","ASHA / ANM","Block, district","State, Union","Citizens"],["Voice","Screen","CRM","Chat"],[
 [M,A,M,O],[M,O,O,A],[A,M,O,O],[O,M,O,O],[O,O,O,M]],{labelW:230,cellW:126,rowH:44,headH:44,corner:"Role",name:"TABLE: role channels"});
T(pb,16,326,736,22,"Live: Hindi, Hinglish, English. Pilot: 22 languages",{family:"Inter",style:"Bold",color:C.primary});
// VALIDATION PLAN
const pc=panel(s,1088,702,768,328,"VALIDATION PLAN: 40 INTERVIEWS, NONE DONE YET");
nm(addTable(pc,16,56,[300,120,316],["Role","Target","What we test"],[
 ["PHC pharmacists","12","Voice vs CRM for stock"],
 ["Medical officers","8","Warning lead time needed"],
 ["District officers","8","Trust in confidence score"],
 ["Warehouse staff","6","Load plans vs real trucks"],
 ["State NHM analysts","6","Model governance"]],{rowH:40,headerH:40}),"TABLE: validation plan");
T(pc,16,298,736,22,"Planned before the pilot; no user interviews are claimed",{family:"Inter",style:"Bold",color:C.alert});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 10: Why it's deployable (6-week Gantt; rails states already run; P × I risk map; guardrails)

```js
{ const s = await figma.getNodeByIdAsync("S10");
skeleton3(s,5,"9 / 10","WHY IT'S DEPLOYABLE",400,"DEPLOYABILITY AND SCALABILITY · 20%",600,
 "A state can go live in six weeks without new hardware: SwasthyaGrid reads the exports states already produce, runs in an Indian Google Cloud region and needs one approver per district",
 "Source: SwasthyaGrid deploy script and README (Cloud Run, Secret Manager, Always Free tier) | C-DAC e-Aushadhi / DVDMS | data.gov.in HMIS | ABDM Health Facility Registry | DPDP Act 2023 | Team IdeaForge pilot plan");
// PILOT GANTT
const pa=panel(s,64,318,1100,392,"SIX WEEKS FROM MOU TO A LIVE DISTRICT");
gantt(pa,16,58,390,110,36,["W1","W2","W3","W4","W5","W6"],[
 {label:"Data MoU, nodal officer",s:0,e:0,color:C.primaryDeep,text:"MoU"},
 {label:"State GCP project, Mumbai",s:0,e:1,color:C.blue,text:"asia-south1"},
 {label:"Map e-Aushadhi, HMIS exports",s:1,e:2,color:C.primary,text:"Nightly export"},
 {label:"Facility logins, Firebase Auth",s:2,e:3,color:C.blue,text:"Logins"},
 {label:"Train state model, Vertex AI",s:2,e:4,color:C.blue,text:"AutoML, backtest"},
 {label:"Train officers, pharmacists",s:3,e:4,color:C.accent,text:"Training",tc:C.ink},
 {label:"Shadow mode: AI vs staff",s:4,e:5,color:C.accent,text:"Compare",tc:C.ink},
 {label:"Go live in 2 districts",s:5,e:5,color:C.good,text:"Live"}]);
// RAILS
const pb=panel(s,1188,318,668,392,"FITS THE RAILS STATES ALREADY RUN");
badgeList(pb,16,62,636,["e-Aushadhi / DVDMS: nightly export, no rip-out","HMIS on data.gov.in: baseline for backtests","ABDM facility registry ID as the facility key","Runs on NHM budgets: no new procurement line","Officer sign-off mirrors today's indent approval"],{d:40,pitch:64});
// RISK MAP
const pc=panel(s,64,734,820,296,"FIVE RISKS, EACH WITH A FIX");
grid(pc,16,56,["High","Medium","Low"],["Low","Med","High"],[
 [{t:"R5",f:C.accent},{t:"R1",f:C.alert,tc:C.white},{t:"",f:C.alertTint}],
 [{t:"",f:C.tint},{t:"R3",f:C.accent},{t:"R2",f:C.alert,tc:C.white}],
 [{t:"",f:C.tint},{t:"",f:C.tint},{t:"R4",f:C.accent}]],{labelW:130,cellW:90,rowH:62,headH:40,corner:"P × I",name:"TABLE: risk map"});
[["R1","Stale data: freshness flag"],["R2","Outbreak surge: IDSP signal"],["R3","Queue ignored: SLA alerts"],["R4","State says no: runs solo"],["R5","No signal: offline CRM sync"]].forEach((r,i)=>{ const y=56+i*46;
  TL(pc,430,y,22,r[0],{family:"Poppins",style:"Bold",color:C.alert}); T(pc,476,y,328,22,r[1]); });
// GUARDRAILS
const d=layered(s,908,734,948,296,C.white,"CARD: guardrails");
TL(d,20,12,24,"GUARDRAILS A MINISTRY CAN SIGN",{color:C.primary,maxW:908});
addRect(d,20,50,908,2,C.ink);
["AI proposes; a named officer approves","Voice agent is read-only by design","No patient identity: stock and counts only",
 "Every spoken number traced to a tool","Data stays in the state's Indian region","Runs on the Always Free tier today"].forEach((t,i)=>{ const col=i<3?0:1, row=i%3; const x=20+col*468, y=62+row*72;
  addBadge(d,x,y,40,i+1,C.good,C.white); T(d,x+54,y+2,386,22,t); });
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 11: Scale across India (THE MONEYSHOT band; federated architecture; three waves; scenarios; sensitivity)

```js
{ const s = await figma.getNodeByIdAsync("S11");
skeleton3(s,6,"10 / 10","SCALE ACROSS INDIA",390,"IMPACT 15% · DEPTH AND REACH 20%",520,
 "Rolled out state by state over three years, the federated layer removes an estimated 1.36 crore stock-out days a year and lifts key-medicine availability from 72.2% to 86.1%",
 "Source: Team IdeaForge impact model: 38,241 facilities (MoHFW HDI 2022-23) × 7 tracer medicines × 365 days × 27.8% unavailability (PMC8654139); cuts of 30%, 50%, 80% (UNDP eVIN) | eLife 2020");
// MONEYSHOT
const band=layered(s,64,318,1792,200,C.primaryDeep,"CARD: moneyshot");
TL(band,28,24,64,"1.36 crore",{family:"Poppins",style:"ExtraBold",color:C.white,maxW:600});
T(band,28,122,600,22,"stock-out days avoided a year, base case",{family:"Inter",style:"Bold",color:C.accent});
addRect(band,650,24,4,152,C.accent);
TL(band,680,36,48,"72.2% → 86.1%",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:440,min:32});
T(band,680,122,440,22,"key-medicine availability",{color:C.white});
addRect(band,1140,24,4,152,C.accent);
TL(band,1170,36,48,"38,241",{family:"Poppins",style:"ExtraBold",color:C.accent,maxW:280});
T(band,1170,122,280,22,"PHCs and CHCs",{color:C.white});
addRect(band,1470,24,4,152,C.accent);
TL(band,1500,36,48,"36",{family:"Poppins",style:"ExtraBold",color:C.accent});
T(band,1500,122,266,22,"States and UTs, data kept home",{color:C.white});
// FEDERATED ARCHITECTURE
const pb=panel(s,64,542,620,488,"MODELS MOVE, DATA STAYS HOME");
const u=addFrame(pb,20,62,580,96,C.primaryDeep,C.ink,2,"NODE union");
TL(u,16,10,22,"Union node: MoHFW",{family:"Poppins",style:"Bold",color:C.accent,maxW:548});
T(u,16,50,548,22,"Averages weights; sees national buffers",{color:C.white});
dashedV(pb,106,158,80,C.blue,2.5); dashedV(pb,494,158,80,C.blue,2.5); dashedV(pb,300,204,34,C.blue,2.5);
TL(pb,0,166,22,"weights and aggregates only",{family:"Inter",style:"Bold",color:C.blue,centerAt:300});
[[20,"Rajasthan"],[214,"Bihar"],[408,"+ 34 more"]].forEach(st=>{ const b=addFrame(pb,st[0],238,172,118,C.white,C.ink,2,"NODE state");
  TL(b,12,10,22,st[1],{family:"Poppins",style:"Bold",color:C.primary,maxW:148}); T(b,12,46,148,22,"BigQuery, Vertex AI");
  addRect(pb,st[0]+85,356,2.5,44,C.ink); });
const fac=addFrame(pb,20,400,580,74,C.tint,C.ink,2,"NODE facilities");
TL(fac,16,8,22,"Facilities: PHCs, CHCs, warehouses",{family:"Poppins",style:"Bold",maxW:548});
T(fac,16,40,548,22,"CRM, voice and photos feed the state node");
// WAVES
const pc=panel(s,708,542,560,488,"THREE WAVES TO 36 STATES AND UTS");
[["Wave 1 · months 0 to 6","Rajasthan: 2 pilot districts, then statewide",C.tint],
 ["Wave 2 · months 6 to 18","8 states with 70% of snakebite deaths, Bihar to Gujarat",C.accentTint],
 ["Wave 3 · months 18 to 36","All 36 States and UTs; 38,241 facilities",C.blueTint]].forEach((w,i)=>{ const y=62+i*134;
  const b=addFrame(pc,16,y,528,120,w[2],C.ink,2,"NODE wave");
  TL(b,16,10,22,w[0],{family:"Poppins",style:"Bold",color:C.primaryDeep,maxW:496}); T(b,16,48,496,22,w[1]); });
T(pc,16,456,528,22,"eVIN scaled from 12 states to all 36",{family:"Inter",style:"Bold",color:C.primary});
// SCENARIOS
const pd=panel(s,1292,542,564,236,"BEAR 81.5 LAKH, BULL 2.17 CRORE");
hBars(pd,16,58,532,[
 {label:"Bear, 30%",value:81.5,color:C.accent,text:"81.5 lakh"},
 {label:"Base, 50%",value:135.8,color:C.primary,text:"1.36 crore"},
 {label:"Bull, 80%",value:217.3,color:C.blue,text:"2.17 crore"}],{labelW:150,rowH:46,barH:30,valueW:130,max:217.3});
T(pd,16,200,532,22,"Stock-out days avoided a year, by cut",{family:"Inter",style:"Bold",color:C.primary});
// SENSITIVITY
const pe=panel(s,1292,802,564,228,"ALL NINE CASES CLEAR 58 LAKH DAYS");
const cf=v=>({t:v.toFixed(1),f:v<100?C.tint:(v<200?C.accent:C.good),tc:v>=200?C.white:C.ink});
const SENS=[[99.7,166.1,265.8],[81.5,135.8,217.3],[58.6,97.7,156.3]].map(r=>r.map(cf));
SENS[1][1]={t:"135.8",f:C.blue,tc:C.white};
grid(pe,16,54,["66%","72.2%","80%"],["30% cut","50% cut","80% cut"],SENS,{labelW:130,cellW:134,rowH:40,headH:40,corner:"Avail.",name:"TABLE: sensitivity"});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

### Slide 12: Thank you (fully centred; same team table as the cover; D6)

```js
{ const s = await figma.getNodeByIdAsync("S12"); s.fills=[{type:"SOLID",color:C.white}];
addWireH(s,64,1856,120,C.ink,2.5); [64,960,1848].forEach(cx=>addEllipse(s,cx-8,112,16,16,C.white,C.ink,2));
nm(TL(s,0,190,112,"THANK YOU",{family:"Poppins",style:"ExtraBold",centerAt:960}),"TITLE");
addText(s,"Poppins","Bold",34,C.primary,"SwasthyaGrid: federate the forecast, keep each state's data at home, and let a named officer approve every move",260,360,1400,100,"CENTER",undefined,true);
addText(s,"Inter","Bold",24,C.blueDeep,"swasthyagrid.vercel.app  |  github.com/harshkawatra11/SwasthyaGrid-HealthTech",260,500,1400,40,"CENTER",undefined,true);
TL(s,0,590,26,"TEAM IDEAFORGE",{color:C.primary,centerAt:960});
teamTable(s,400,640);
addWireH(s,64,1856,1004,C.ink,2.5);
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
```

---

## 9. Figma setup (F0 executes this)

0. **Pre-flight.** Call `ToolSearch` with the keyword query `figma use_figma screenshot whoami create_new_file
   upload_assets`. This is a keyword search, not `select:`, because the server prefix has changed between
   sessions: seen `mcp__claude_ai_Figma__*` and `mcp__figma-mcp__*`. Load the returned schemas.
   - If no `use_figma` tool comes back, do every non-Figma step (§11.3 steps 1 to 6), then stop and tell the user:
     "Authorise the Figma connector, then ask me to continue from plan §9."
1. **Load the Figma skills.** Invoke the Skill tool with `figma-use` if it is listed; otherwise read the MCP
   resource `skill://figma/figma-use/SKILL.md`. If a `get_figma_skill` tool exists, fetch
   `skill://figma/figma-use/SKILL.md` and `skill://figma/figma-use-slides/SKILL.md`. If the `use_figma` schema has
   a `skillNames` parameter, pass `"resource:figma-use,resource:figma-use-slides"` on every call.
2. **Read `CLAUDE.md` §7 (failure modes).**
   - The preamble already handles §7.1 (append before positioning), §7.2 (fixed width plus `HEIGHT`), §7.7 (fonts
     loaded once) and §7.10 (`relativeTransform` wires).
   - Never set `x`/`y` before `appendChild`. Never "fix" an offset by adding 240.
3. **Create the file.** Call `whoami`, then `create_new_file` with:
   - `editorType: "slides"`.
   - `planKey`: the plan belonging to Harsh Kawatra's own team. It was `team::1564294484048272772` ("25/A16/057
     HARSH KAWATRA's team") on 30 Sep 2026. If it is not listed and there are several candidates, stop with
     `STATUS: FAIL` and list them; the orchestrator asks the user.
   - `fileName: "SwasthyaGrid | Team IdeaForge | Build with AI"`.
4. **Verify fonts** in a read-only script: `figma.listAvailableFontsAsync()` must include Poppins Bold, Poppins
   ExtraBold, Inter Semi Bold and Inter Bold (exact style strings).
5. **Create and name 12 slides.**
   1. Run `figma.createSlide()` 12 times in one script.
   2. In a second script, read `figma.currentPage.children.find(c=>c.type==="SLIDE_GRID").children[0].children`.
      Do not trust `getSlideGrid()`, which returned stale results in the Maudrik build.
   3. If there are more than 12 slides, remove the extras beyond the 12th that have `children.length===0`.
   4. Name them `01 Cover`, `02 Executive Summary`, `03 Problem Scale`, `04 Problem Exists`, `05 Solution Loop`,
      `06 Solution Built`, `07 AI Engine`, `08 Google Stack`, `09 Who It Serves`, `10 Deployable`, `11 Scale`,
      `12 Thank You`.
   5. Name the row `SWASTHYAGRID`.
   6. Write `swasthyagrid-gcp/deck/slide-ids.json` as `{"fileKey":"…","url":"…","S1":"<id>",…,"S12":"<id>"}`.
6. Never create a second set of slides. If the connection drops, re-read the slide grid before retrying.

---

## 10. Validators and fix rules

**V1: batch validator** (the generator reads it from here; read-only apart from a throwaway clone it removes)

```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=["S_a","S_b","S_c"]; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
const slides=await Promise.all(ids.map(id=>figma.getNodeByIdAsync(id)));
for(const s of slides){
  const ch=s.children.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({s:s.name,t:"overlap",a:a.n,b:b.n}); }
  for(const c of s.children){ if(c.x<-1||c.y<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({s:s.name,t:"bounds",n:c.name,x:Math.round(c.x),y:Math.round(c.y),w:Math.round(c.width),h:Math.round(c.height)});
    if(KEY.test(c.name) && c.y+c.height>1031) issues.push({s:s.name,t:"belowContent",n:c.name}); }
  const hl=s.children.find(c=>c.name==="HEADLINE"); if(hl&&hl.height>113) issues.push({s:s.name,t:"headline3lines"});
  const src=s.children.find(c=>c.name==="SOURCE"); if(src&&src.height>22) issues.push({s:s.name,t:"source2lines"});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){
    const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({s:s.name,t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({s:s.name,t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,80)};
```

**Fix rules** (apply exactly the rule for each issue type; nothing broader):

| Issue | Fix |
|---|---|
| `headline3lines` | Delete the two weakest words, keeping every number. Never below 34pt |
| `source2lines` | Drop the least important source group (keep the model and primary sources) |
| `textOut`, `cellWrap`, a `warnings` overflow | Shorten that string with the §11.1 ladder. Never below 22pt. Keep every number |
| `cellWrap` in a HEAD frame | Shorten the header word |
| Warning `chip rows overflow: <layer>` (S8) | Shorten the longest chip label in that layer. Examples: "Cloud Speech-to-Text and TTS" → "Speech-to-Text, TTS"; "Vertex AI: AutoML, training, Endpoints" → "Vertex AI: AutoML, Endpoints". Keep every service name the §10 MUST list needs |
| `overlap` | Only between this plan's panels; report it; do not move panels |
| `bounds`, `belowContent` | Move that node up inside the content zone by the overflow amount |
| Visual collision in a screenshot (label on a bar, line or wire) | Nudge that label's x or y by at most 20px |
| `ribbon too wide` | Replace `WHO IT SERVES` with `USERS` in `RIB7` for all slides, and re-run affected batches |

**V2 to V5 sweeps** (the generator reads this block; do not edit):

```js
// ===== SWASTHYAGRID SWEEPS =====
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const ids=IDS;
const BAN=["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutionise","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness"];
const MUST=["1.36 crore","1.36 Cr","72.2% → 86.1%","86.1%","38,241","81.5 lakh","2.17 crore","58,000","29,000+","1.2 → 21.0 days","642","65 ms","836 ms","37 / 40","43.4%","79.9%","66 to 80%","6 weeks","12 → 36","40 INTERVIEWS","58 LAKH","4.2 DAYS","40 to 98","8 LIVE, 1 WIRED, 14 IN THE PILOT","Gemini Live","Vertex AI","BigQuery","Earth Engine","Dialogflow CX","Cloud Translation API","Firebase","Cloud Run","data.gov.in","WHO GHO","ISRO Bhuvan","IMD","Google AI Studio","Gemini multimodal","Vertex AI Vision","Maps Places API","Speech-to-Text","Harsh Kawatra","Gursimran Kaur","Guru Gobind Singh Indraprastha University","Delhi Technological University"];
const ABSENT=["PRAMAAN","NEET","Maudrik","Dayita","Anuj","TODO","TBD","Lorem","xyz","96%","−38%","Gemini 2.5","haversine","Insert"];
let radiusFixed=0; const fontLow=[]; const copy=[]; const density=[]; let all="";
for(const id of ids){ const s=await figma.getNodeByIdAsync(id);
  const nodes=s.findAll(()=>true); density.push({slide:s.name,nodes:nodes.length});
  for(const nd of nodes){ if("cornerRadius" in nd && typeof nd.cornerRadius==="number" && nd.cornerRadius!==0){ nd.cornerRadius=0; radiusFixed++; } }
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const c=t.characters; all+=" "+c;
    if(typeof t.fontSize==="number" && t.fontSize<22){ let ok=c.startsWith("Source:")||t.name==="SOURCE"; let p=t.parent;
      while(p && !ok){ if(p.name && p.name.startsWith("LOGO:")) ok=true; p=p.parent; }
      if(!ok) fontLow.push({slide:s.name,size:t.fontSize,chars:c.slice(0,40)}); }
    if(/[\u2014\u2013]/.test(c)) copy.push({slide:s.name,issue:"dash",chars:c.slice(0,60)});
    if(c.includes("?")||c.includes("!")) copy.push({slide:s.name,issue:"question or exclamation",chars:c.slice(0,60)});
    const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b)) copy.push({slide:s.name,issue:"banned: "+b,chars:c.slice(0,60)}); } }
return {radiusFixed, fontLow, copy, missing:MUST.filter(m=>!all.includes(m)), presentBad:ABSENT.filter(a=>all.includes(a)), density};
```

**Screenshots.** For every slide, call `get_screenshot` with `maxDimension: 1600`.
- If it returns a URL, run `curl -sL -o <path> "<url>"`, then Read the PNG.
- Check each slide against §11.5.

---

## 11. Execution playbook (authoritative; written for Sonnet sub-agents)

Every sub-agent prompt below is complete. Paste it as the `prompt` of an Agent call with
`subagent_type: "general-purpose"`, `model: "sonnet"` and `run_in_background: false`. Steps run **strictly in
sequence**, because all of them write to one Figma file. Nobody redesigns anything: the layout, copy, numbers and
helper code in §5, §7 and §8 are final.

### 11.0 Roles, order and stop conditions

| Step | Agent | Job | Leaves on disk |
|---|---|---|---|
| F0 | setup | §11.3: folders, case files, model, preamble, generator, Figma file, 12 slides, fonts, copy lint | `case/*.md`, `model/*`, `deck/preamble.js`, `deck/gen.py`, `deck/slide-ids.json`, `deck/build-log.md` |
| F1 | batch 1 | Slides 1, 2, 3 + V1 + screenshots + fixes | log section, `deck/shots/s1.png` to `s3.png` |
| F2 | batch 2 | Slides 4, 5, 6 | same, `s4` to `s6` |
| F3 | batch 3 | Slides 7, 8, 9 | same, `s7` to `s9` |
| F4 | batch 4 | Slides 10, 11, 12 | same, `s10` to `s12` |
| F4b | photos | Upload 3 screenshots into the S6 PHOTO frames | log section, `deck/shots/s6_photos.png` |
| F5 | sweeps | V2 to V5, density, whole-deck V1 and screenshots | "Sweeps" log section, `deck/shots/final_s<k>.png` |
| F5b | language | Line-by-line copy review (§11.13) | `deck/copy-review.md`, log section |
| F6 | critique | Skill critique mode + hackathon rubric scoring + wording-only fixes | "Critique" log section |
| F7 | export | 3840px screenshots, preview PDF, `qa/qa-defence.md`, final report | PDF, qa file, "Final report" section |

**The orchestrator (main agent) does only this:**

1. **Pre-flight.** Before F0, run the §9 step 0 tool query. If no Figma `use_figma` tool exists:
   - Still dispatch F0. It does the non-Figma steps and reports.
   - Then stop and ask the user to authorise the Figma connector.
2. **Dispatch in order.** Dispatch F0, F1, F2, F3, F4, F4b, F5, F5b, F6 and F7 in that order. After each:
   - Read the sub-agent's report and the new `build-log.md` section.
   - Continue only on `STATUS: PASS` or `PASS WITH RESIDUALS`.
   - On `STATUS: FAIL`, re-dispatch that step once with "Previous attempt failed with: <text>" appended. A second
     failure stops the run and is reported to the user.
3. **Rate limits.** If a dispatch dies with HTTP 429, or returns no `STATUS:` line:
   - First check Figma state: a read-only child count on that batch's slide IDs.
   - Then either resume the step, or run `gen.py clear` for that batch and redo it.
   - If sub-agent dispatch keeps failing, the orchestrator executes the step's prompt itself.
4. **Never let two Figma steps run at once.**
5. **Memory.** After F7, write a project memory file:
   - Path: `C:\Users\harsh\.claude\projects\c--Users-harsh-Desktop-HARSH-PPTS-CASE-STUDY-nsut-innovators-court\memory\project_swasthyagrid_gcp.md`.
   - Frontmatter: `name: project-swasthyagrid-gcp`, `type: project`.
   - Body: the deck, the fileKey, the 12-slide choice, the team (Harsh + Gursimran), and the LIVE/WIRED/PILOT
     honesty rule, with **Why** and **How to apply** lines. Link `[[feedback-cover-style]]` and
     `[[feedback-no-em-dash-no-hooks]]`.
   - Add one line to `MEMORY.md`.

### 11.1 Shared rules (every sub-agent prompt includes "Obey plan §11.1 in full")

**Read first:**
- Plan §1 (context and locked decisions), §2 (the argument, so you know what each slide proves), §6 (design
  system), §7 (preamble), §9 (setup), §10 (validators and fix rules) and §11 (this playbook, especially §11.13
  language).
- `swasthyagrid-gcp/deck/build-log.md`, if it exists.
- In the project root `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`: `CLAUDE.md` §1 (EY
  density), §2 (ink outlines, layered cards, 22pt floor), §3 (ribbon and rails) and §7 (failure modes).

**Tool loading.**
- Call `ToolSearch` with the keyword query `figma use_figma screenshot whoami create_new_file upload_assets` and
  use whatever fully-qualified names it returns. Never hardcode a prefix.
- Read each schema and use its exact parameter names.
- Load the Figma skill as §9 step 1 says, once per sub-agent.

**Never hand-copy code.**
- Generate every script with `python swasthyagrid-gcp/deck/gen.py …`.
- Read the generated `.js` file and pass its full text as the `use_figma` code.
- Small targeted edit scripts (fixes) are the only hand-written code allowed. They must:
  - load the node's font first: `await figma.loadFontAsync(node.fontName)`;
  - find nodes by name or by leading characters, never by a y-coordinate filter.

**Figma rules that cause real bugs** (`CLAUDE.md` §7):
- Append before setting x/y.
- Never add 240 to fix an offset.
- A layered card is two nodes (front + `BACK:` rect). Delete both or neither.
- Never delete by a y-filter.

**Copy voice rules** (every word a sub-agent writes or changes on a slide):
- Zero em dashes (—) and zero en dashes (–). Use a comma, colon, "to" for ranges, "vs" for contrasts. Negative
  numbers use "−" (U+2212).
- No hooks: no questions, no "imagine", no "what if", no teasers, no exclamation marks.
- No banned words (the §10 BAN list).
- Build status wording is sacred:
  - Never change a PILOT or WIRED tag to LIVE.
  - Never write "built", "running" or "live" next to a PILOT item.

**Shortening ladder** (when a validator says a string does not fit). Stop at the first step that fits:
1. Drop articles and "that".
2. Use short synonyms (approximately → about, facilities → sites only inside tables).
3. Use standard abbreviations already on the deck (PHC, CHC, MO, NHM, UTs, vs, yrs).
4. Drop the least important clause.

Never drop a number, a unit, a status tag or a source. Never go below 22pt. Log every change in `build-log.md` as
`S# panel: "old" → "new" (reason)`.

**Stop conditions:**
- A `use_figma` error the §11.10 recovery table does not cover.
- Any need to change layout, numbers or chart data.
- A validator issue type not in §10's fix table.

In each case, log it, report `STATUS: FAIL` with the error text, and stop.

**Report format** (max 12 lines):
- `STATUS: PASS | PASS WITH RESIDUALS | FAIL`
- What was done.
- Validator counts.
- Node counts.
- Copy changes.
- Residuals.

### 11.2 Script generator (F0 writes it verbatim to `swasthyagrid-gcp/deck/gen.py`)

```python
"""Generate Figma scripts from the plan. Usage (run from any directory):
  python gen.py batch 1,2,3   -> deck/batch_1_2_3.js  (preamble + extras + slide blocks, real IDs)
  python gen.py v1 1,2,3      -> deck/v1_1_2_3.js     (batch validator)
  python gen.py sweeps        -> deck/sweeps.js       (V2 radius sweep + V3 font floor + V4 copy + V5 numbers)
  python gen.py clear 1,2,3   -> deck/clear_1_2_3.js  (removes all children of those slides; recovery only)
  python gen.py photos        -> deck/photos.js       (read-only: PHOTO frame IDs on S6)
  python gen.py dump          -> deck/dump.js         (read-only: every text node per slide, for F5b/F6)"""
import re, json, sys, pathlib
PLAN = pathlib.Path(r"C:\Users\harsh\.claude\plans\code-available-at-temporal-graham.md")
DECK = pathlib.Path(__file__).resolve().parent
t = PLAN.read_text(encoding="utf-8")
FENCE = "`" * 3
blocks = re.findall(FENCE + r"js\n(.*?)" + FENCE, t, re.S)
pre = (DECK / "preamble.js").read_text(encoding="utf-8")
extras = next(b for b in blocks if "// ===== SWASTHYAGRID EXTRAS =====" in b)
v1 = next(b for b in blocks if 'const ids=["S_a","S_b","S_c"]' in b)
sweeps = next(b for b in blocks if "// ===== SWASTHYAGRID SWEEPS =====" in b)
slides = {}
for b in blocks:
    m = re.search(r'getNodeByIdAsync\("S(\d+)"\)', b)
    if m and b.lstrip().startswith("{ const s"):
        slides[int(m.group(1))] = b
assert sorted(slides) == list(range(1, 13)), sorted(slides)
ids = json.loads((DECK / "slide-ids.json").read_text(encoding="utf-8"))
mode = sys.argv[1]
nums = [int(x) for x in sys.argv[2].split(",")] if len(sys.argv) > 2 else list(range(1, 13))
idlist = json.dumps([ids["S%d" % n] for n in nums])
if mode == "batch":
    code = pre + "\n" + extras + "\nconst results=[];\n"
    for n in nums:
        code += slides[n].replace('getNodeByIdAsync("S%d")' % n, 'getNodeByIdAsync("%s")' % ids["S%d" % n]) + "\n"
    code += "return {results,warnings};\n"
    out = DECK / ("batch_" + "_".join(map(str, nums)) + ".js")
elif mode == "v1":
    code = v1.replace('const ids=["S_a","S_b","S_c"];', "const ids=%s;" % idlist)
    out = DECK / ("v1_" + "_".join(map(str, nums)) + ".js")
elif mode == "sweeps":
    code = sweeps.replace("const ids=IDS;", "const ids=%s;" % idlist)
    out = DECK / "sweeps.js"
elif mode == "clear":
    code = "const ids=%s; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.children.slice().forEach(c=>c.remove()); } return {cleared:ids};" % idlist
    out = DECK / ("clear_" + "_".join(map(str, nums)) + ".js")
elif mode == "photos":
    code = 'const s=await figma.getNodeByIdAsync("%s"); return s.findAll(n=>n.name.startsWith("PHOTO: ")).map(n=>({id:n.id,name:n.name,w:n.width,h:n.height}));' % ids["S6"]
    out = DECK / "photos.js"
elif mode == "dump":
    code = "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); out.push({slide:s.name,texts:s.findAllWithCriteria({types:['TEXT']}).map(t=>({parent:t.parent?t.parent.name:'',chars:t.characters}))}); } return out;" % idlist
    out = DECK / "dump.js"
out.write_text(code, encoding="utf-8")
print(out, len(code), "chars")
if len(code) > 50000: print("WARNING: over 50,000 characters; split the batch")
```

**Pre-build copy lint** (F0 runs it and pastes the output into the log; it must print `copy hits: []`):

```python
import re, pathlib
t = pathlib.Path(r"C:\Users\harsh\.claude\plans\code-available-at-temporal-graham.md").read_text(encoding="utf-8")
sec = t[t.index("## 8. Slide code"):t.index("## 9. Figma setup")]
code = "\n".join(re.findall("`" * 3 + r"js\n(.*?)" + "`" * 3, sec, re.S))
strings = re.findall(r'"([^"\\]*)"', code)
BAN = ["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutionise","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness"]
hits = [s for s in strings if re.search("[\u2014\u2013?!]", s) or any(b in s.lower() for b in BAN)]
print("strings:", len(strings)); print("copy hits:", hits)
```

### 11.3 F0 setup prompt

> You are the setup agent for a Figma Slides build. Obey plan §11.1 in full.
> - Plan: `C:\Users\harsh\.claude\plans\code-available-at-temporal-graham.md`.
> - Project root: `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`.
> - The SwasthyaGrid code at `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform` is read-only.
>
> 1. Create `swasthyagrid-gcp/` with `case/`, `model/`, `deck/`, `deck/shots/` and `qa/`. Create
>    `deck/build-log.md` titled `# SwasthyaGrid deck build log`, with a "Setup" section.
> 2. Write `case/01-brief.md` (plan §1.1 and §1.2 verbatim) and `case/02-facts.md` (plan §2.4, §3 and §4 verbatim).
> 3. Write plan §5.1 verbatim to `model/impact_model.py` and run §5.2. Compare `model/model_output.txt` with §5.3
>    line by line. On any difference, report `STATUS: FAIL` with the diff.
> 4. Write plan §7.1 verbatim to `deck/build_preamble.py` and run it. It must print a path and a character count.
>    An `AssertionError` is a FAIL; do not hand-patch.
> 5. Write plan §11.2's generator verbatim to `deck/gen.py`.
> 6. Run the §11.2 pre-build copy lint and paste its output into the log. It must print `copy hits: []`.
> 7. Execute plan §9 steps 0 to 6 exactly: tools, skill, whoami, create file, fonts, 12 slides, slide-ids.json.
> 8. Run `python swasthyagrid-gcp/deck/gen.py batch 1,2,3`. It must print a path and a count under 50,000.
> 9. Screenshot two reference slides from the finished Maudrik deck (fileKey `vAIyXmljHlFDuwQo6RsoIN`): the
>    second and ninth slides, whose IDs are `2:4` and `2:11`. Save them to `deck/shots/inspo_1.png` and
>    `inspo_2.png` (use `curl -sL -o` if a URL comes back). If the file is not accessible, log it and continue.
>
> Report in the §11.1 format, including the fileKey, the URL and the twelve IDs.

### 11.4 F1 to F4 batch prompt (fill `<N>`, `<SLIDES>`, `<CSV>`)

> You are batch agent <N> of a Figma Slides build. Obey plan §11.1 in full.
> - Plan: `C:\Users\harsh\.claude\plans\code-available-at-temporal-graham.md`.
> - Root: `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`.
> - Slides in this batch: <SLIDES>.
>
> Before building, invoke the Skill `case-competition-deck` (args: `slide mode, operations/social-impact case,
> checking archetypes for slides <SLIDES>`). Read `references/archetypes.md` "Mistakes to avoid" for the archetypes
> in plan §11.12. Use it to check, never to redesign.
>
> 1. Read `swasthyagrid-gcp/deck/slide-ids.json` and `build-log.md`. If the log shows these slides already built
>    and validated, report PASS and stop. If a slide already has children but no log entry, screenshot it:
>    - If it matches §11.5, accept it.
>    - Otherwise run `gen.py clear` for that slide only and rebuild it.
> 2. Run `python swasthyagrid-gcp/deck/gen.py batch <CSV>`. Read the generated `.js` and pass its full text as the
>    code of ONE `use_figma` call on the fileKey. Log the returned `results` (node counts) and `warnings`.
> 3. If the call errors, use §11.10. If it partly ran, run `gen.py clear <CSV>`, execute that script, and retry
>    step 2 once.
> 4. Run `python swasthyagrid-gcp/deck/gen.py v1 <CSV>` and execute the validator.
>    - Apply exactly the §10 fix rule per issue, using small targeted edits (find the node by name or leading
>      characters, load its font, change only `characters`, or `x`/`y` for bounds).
>    - Resolve every `warnings` entry the same way.
>    - Re-run the validator. Stop after at most three rounds and list any leftovers as residuals.
> 5. Screenshot each slide (`maxDimension` 1600) to `swasthyagrid-gcp/deck/shots/s<k>.png`, Read it, and check
>    §11.5 for that slide. Fix only with the §10 visual rule (a nudge of 20px or less) or the shortening ladder.
>    Re-screenshot anything you touched.
> 6. Batch 1 only: compare `s2.png` with `inspo_1.png` on four points:
>    - panel titles read as findings;
>    - ink outlines on every panel;
>    - layered back-cards visible;
>    - no empty region larger than 150 × 150 px.
>
>    Log a one-line verdict. Batch 2 only: S6 photo frames stay grey until F4b; that is expected.
> 7. Append a "Batch <N>" log section: node counts vs §11.5, validator result, copy changes, screenshot verdicts,
>    residuals.
>
> Report in the §11.1 format.

| Dispatch | `<N>` | `<SLIDES>` | `<CSV>` |
|---|---|---|---|
| F1 | 1 | Cover, Executive Summary, Problem Scale | `1,2,3` |
| F2 | 2 | Problem Exists, Solution Loop, Solution Built | `4,5,6` |
| F3 | 3 | AI Engine, Google Stack, Who It Serves | `7,8,9` |
| F4 | 4 | Deployable, Scale, Thank You | `10,11,12` |

### 11.5 Per-slide acceptance

**Node counts** come from a mock run of the §8 code on 30 Sep 2026: a stub Figma API with approximate font
metrics. That run gave 0 runtime errors, 0 overflow warnings and 0 text-outside-parent issues. Accept ±25%.
"Forms" are the distinct visual forms that must be visible.

Mock counts by slide:

| S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10 | S11 | S12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 57 | 161 | 135 | 218 | 146 | 90 | 232 | 162 | 196 | 173 | 155 | 24 |

| Slide | Nodes (est.) | Forms that must be visible | Visual checklist |
|---|---|---|---|
| 1 Cover | ~57 | 3 chips, punch-hole wire, 112pt title, green verdict card with gold text, 2-row team table, five-numbers card, 2 dashed logo slots | No ribbon; no KPI-tile row; "SWASTHYAGRID" on one line; team table shows Harsh Kawatra and Gursimran Kaur only |
| 2 Executive Summary | ~170 | red stat stack, 2-col table, dark answer card with 3 gold badges, 6-row brief table with coloured status tags, blue payoff card with 3 white tiles | Ribbon SUMMARY active in blue; counter "1 / 10"; criterion chip visible; tags LIVE, LIVE, LIVE, WIRED, PILOT, LIVE sit inside the Status column |
| 3 Problem Scale | ~190 | 5-row horizontal bars, 5-bar vertical chart, pale-red card with 4 drugs, root box + 5 branch boxes joined by a spine, donut at 43.4% | Bar values readable; donut arc in red, about 43% of the ring, starting at 12 o'clock; branch wires touch each box |
| 4 Problem Exists | ~200 | 6×7 heat grid, dark eVIN card with 3 gold numerals, 3-col symmetric table, 3 badges | SwasthyaGrid row solid green with one blue "Pilot" cell; "12 → 36" on one line |
| 5 Solution Loop | ~160 | 7 step boxes with arrows and a return loop, 5-row table, proof card with blue "1.2 → 21.0 days" | Step 4 box yellow; loop line runs under all boxes; caption centred under the loop |
| 6 Solution Built | ~95 before photos | 3 photo frames 560×350 with captions, 8 metric pairs in 2 columns, 4 LIVE tags | After F4b: all three screenshots visible, uncropped; no text wraps into the next row |
| 7 AI Engine | ~200 | 2-series line chart with dashed reorder line, red dashed stock-out marker, yellow ring on the trigger point, 6-row table, blue formula box, 4-row Vertex table | Labels "Reorder: 5 days of cover", "Stock-out: day +1.2", "Trigger fires" do not touch a line; green line jumps at day 0 |
| 8 Google Stack | ~230 | 5 dark rails with chip rows (green/yellow/blue chips), segmented bar 8/1/14 with legend, voice card with tool box feeding 2 engine boxes | No layer has a third chip row; every chip text inside its chip |
| 9 Who It Serves | ~150 | hub circle + 8 role boxes with spokes, 5×4 channel grid, 5-row validation table | Spokes end under boxes, not across them; red "no user interviews are claimed" line visible |
| 10 Deployable | ~190 | 8-row Gantt W1 to W6, 5 badges, 3×3 P×I grid with R1 to R5, 5 mitigation lines, 6 green numbered guardrails | Bar texts inside bars; R1 and R2 red cells |
| 11 Scale | ~170 | dark moneyshot band with 4 numerals and 3 gold dividers, 3-tier federation diagram with dashed blue links, 3 wave cards, 3-bar scenario chart, 3×3 sensitivity grid | "1.36 crore" white and largest on the slide; base cell 135.8 blue; label "weights and aggregates only" not crossed by a dashed line |
| 12 Thank You | ~30 | centred title, thesis line, links line, team table | Fully centred; same table as the cover |

### 11.6 F4b photos prompt

> You are the photo agent. Obey plan §11.1 in full. Plan and root as before.
>
> 1. Run `python swasthyagrid-gcp/deck/gen.py photos`, execute `deck/photos.js` with `use_figma`, and log the three
>    PHOTO frame IDs and sizes. Each must be 560×350.
> 2. Load the `upload_assets` tool schema from the ToolSearch results and read its description fully. For each
>    frame, in the order command, voice, dispatch:
>    - Call `upload_assets` with the fileKey, `nodeId` = that frame's ID and `count: 1` (use the schema's exact
>      parameter names).
>    - POST the raw PNG bytes to the returned upload URL exactly as the tool description instructs, for example
>      `curl -s -X POST -H "Content-Type: image/png" --data-binary @"<absolute png path>" "<upload url>"`.
>    - The files are in plan §4.4.
> 3. Screenshot S6 to `deck/shots/s6_photos.png`, Read it, and confirm all three images fill their frames showing
>    the whole UI. The aspect ratio already matches, 1.6. If a frame shows a crop or stays grey, retry that one
>    upload once. Never resize a frame; per `CLAUDE.md` §7.5, a resize needs a re-upload.
> 4. If `upload_assets` does not exist in this session, log it, leave the grey frames, and report
>    `PASS WITH RESIDUALS`. The user can drag the three PNGs in by hand.
> 5. Append a "Photos" log section. Report in the §11.1 format.

### 11.7 F5 sweeps prompt

> You are the sweeps agent. Obey plan §11.1 in full.
>
> 1. Run `python swasthyagrid-gcp/deck/gen.py sweeps` and execute `deck/sweeps.js`. It sets cornerRadius to 0
>    everywhere and returns font, copy, number and density findings.
> 2. The expected result is:
>    - `fontLow` empty;
>    - `copy` empty;
>    - `missing` empty;
>    - `presentBad` empty;
>    - densities inside §11.5 ranges.
> 3. Fix each finding:
>    - A `copy` hit or a `fontLow` hit: fix it with the ladder. A dash becomes a comma, colon or "to"; a banned
>      word gets a plain synonym.
>    - A `missing` string: find which slide should carry it by searching plan §8, and restore the §8 wording if a
>      fix removed it.
>    - Never add a new element to satisfy the list.
> 4. Re-run the sweeps until clean, at most three rounds.
> 5. Run V1 on all twelve slides (`gen.py v1 1,2,3,4,5,6,7,8,9,10,11,12`) and apply the §10 fixes.
> 6. Take fresh 1600px screenshots of all 12 slides to `deck/shots/final_s<k>.png` and re-check §11.5.
> 7. Append a "Sweeps" log section with every count. Report in the §11.1 format.

### 11.8 F6 critique prompt

> You are the critique agent. Obey plan §11.1 in full.
>
> 1. Invoke the Skill `case-competition-deck` in critique mode (args: `critique mode, operations/social-impact
>    hackathon pitch, 12-slide deck, argument fixed in plan §2`).
> 2. Read `.claude/skills/case-competition-deck/references/critique_rubric.md`, plus
>    `references/case_types/operations.md` and `social_impact.md`.
> 3. Critique the deck from `deck/shots/final_s1.png` to `final_s12.png`, plus the text from
>    `gen.py dump` → `deck/dump.js`.
> 4. Score:
>    - the rubric's quality dimensions (1 to 5) and pass/fail items;
>    - the deck against the hackathon rubric in plan §1.1 (each criterion 1 to 5, with the slide that earns it).
> 5. Mark these rubric items "not applicable, deliberate format choice" and do not act on them: table of contents,
>    abbreviations slide, section dividers, multi-slide appendix, bibliography slides, 100-slide length.
> 6. List the top 3 issues. You may fix only wording, in place, within the same element and at the same length or
>    shorter:
>    - sharper action titles;
>    - clearer panel labels;
>    - a missing hedge.
>
>    You may not change numbers, tags, layout, charts or the argument.
> 7. After any change, re-run V1 for the touched slides and re-screenshot them.
> 8. Append a "Critique" log section: scores, issues, and each change as old → new. Report in the §11.1 format.

### 11.9 F7 export prompt

> You are the export agent. Obey plan §11.1 in full.
>
> 1. For S1 to S12, call `get_screenshot` with `maxDimension` 3840 and save to `deck/shots/hi_s<k>.png`.
> 2. Build the preview PDF with PyMuPDF (installed):
>    ```python
>    import fitz, pathlib
>    d = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\swasthyagrid-gcp\deck")
>    doc = fitz.open()
>    for k in range(1, 13):
>        page = doc.new_page(width=1920, height=1080)
>        page.insert_image(page.rect, filename=str(d / "shots" / f"hi_s{k}.png"))
>    doc.save(str(d / "TeamIdeaForge_SwasthyaGrid_preview.pdf")); print(doc.page_count)
>    ```
>    It must print 12.
> 3. Write plan §12 verbatim to `swasthyagrid-gcp/qa/qa-defence.md`.
> 4. Append a "Final report" log section with the plan §13 items, and tick the §13 checklist lines that are true.
>
> Report in the §11.1 format, including the Figma URL.

### 11.10 Recovery table

| Symptom | Cause | Action |
|---|---|---|
| `Cannot use unloaded font` | A script skipped the preamble | Always run generated scripts; for a one-off edit, first `await figma.loadFontAsync(node.fontName)` |
| Nodes appear 240px up and to the left | x/y set before `appendChild` | Only preamble helpers create nodes; never add 240 |
| `use_figma` times out or the connection drops | Large script or network | Read the slides' child counts; if partial, `gen.py clear` that batch and re-run; split a 3-slide batch into 2 + 1 |
| Script over 50,000 characters | Batch too large | Split the batch |
| `getNodeByIdAsync` returns null | Stale ID | Re-read the slide grid (§9 step 5.2), rewrite `slide-ids.json`, regenerate |
| `arcData` error on the S3 donut | API variant | Replace the donut call with `addEllipse` plus a 44pt "43.4%" label; log it as a residual |
| Text renders in a fallback font | Wrong style string | The styles are exactly "Semi Bold" (Inter) and "ExtraBold" (Poppins) |
| A yellow block is left after a deletion | Only the front of a layered card was removed | Remove the matching `BACK: <name>` rect too |
| The screenshot tool returns a URL | Normal | `curl -sL -o <path> "<url>"`, then Read |
| HTTP 429 on a sub-agent | Rate limit | §11.0 item 3 |
| `build_preamble.py` AssertionError | The Maudrik file changed | Stop, report; do not hand-patch |

### 11.11 The standard every slide must meet (from the finished Maudrik/Satoshi decks)

- Core slides carry 140 to 360 nodes and at least 4 named panels. S6 is the deliberate exception, because of its
  screenshots.
- Every panel title is a finding with a number where possible.
- Headlines are two lines at most, 40pt stepping down to 34pt.
- Heat grids use graded fills, and the key cell stands out: the SwasthyaGrid row on S4, the base cell on S11.
- Each chart carries an in-chart annotation or a bold reading caption.
- Exactly one moneyshot (S11 band).
- The source line sits bottom right, in green, at 14pt, pipe-separated, on every content slide.

### 11.12 Skill touchpoints and archetype map

| Slide | Skill archetype | What it demands | Where the slide satisfies it |
|---|---|---|---|
| 2 | H (exec summary) | Recommendation in the headline; obvious vs answer | Headline; "WHY THE OBVIOUS ANSWER STALLS" vs "OUR ANSWER" |
| 3 | I (two-chart workhorse) | Two charts with an action title; seed the alternative | hBars + vBars; root cause "never turned into a decision" |
| 4 | L (symmetric) + foreshadow | Same axes for compared options; plant the precedent | Capability grid; national vs federated table; eVIN card |
| 5, 7 | I | Two forms, one finding | Loop + proof card; chart + decision table |
| 8 | J (multi-form dense) | Forms justified by one finding | Stack map + status bar + voice diagram |
| 10 | U (implementation) | Phases, gates, owners | Gantt with shadow-mode gate; guardrails |
| 11 | P + M + N | One moneyshot; three scenarios; sensitivity | Band; bear/base/bull bars; 3×3 grid |

### 11.13 Deck language standard (the user's standing rule)

1. **No em dashes (—) or en dashes (–), ever.**
   - Use a comma, colon, semicolon, parentheses, "to" for a range, or "vs" for a contrast.
   - Hyphens inside compound words are fine (stock-out, 7-day, e-Aushadhi).
   - Minus signs use "−".
2. **No hooks:** no questions, no "imagine", no teasers, no exclamation marks.
3. **Storytelling through findings.** Each slide is one step of the argument:
   - S2: the answer.
   - S3: the scale of the loss.
   - S4: what exists and the precedent.
   - S5: the loop.
   - S6: proof it runs.
   - S7: how the numbers are made.
   - S8: where Google AI works.
   - S9: who uses it.
   - S10: why it deploys fast.
   - S11: the payoff at national scale.

   Nothing on a slide restates its own headline.
4. **Plain verbs and named actors:** "a district officer approves", "Vertex AI shares weights". Not "enables",
   "empowers stakeholders".
5. **Banned words:** the §10 BAN list. Also banned: "X is not just Y" constructions, abstract-noun triplets, and
   one-word dramatic sentences.
6. **Numbers carry units and stay at source precision.** Use Indian grouping (1,69,615; 1.36 crore). Never invent a
   decimal.
7. **Build status is never inflated.** PILOT stays PILOT in every sentence.

**F5b language review prompt:**

> You are the language reviewer for a 12-slide Figma deck. Obey plan §11.1 and §11.13 in full.
>
> 1. Run `python swasthyagrid-gcp/deck/gen.py dump`, execute `deck/dump.js` (read-only), and write the result as a
>    numbered list to `swasthyagrid-gcp/deck/copy-review.md`.
> 2. Mark each line PASS, or give a one-line reason plus a replacement. A replacement must:
>    - be the same length or shorter;
>    - keep every number, unit, tag and hedge;
>    - read as a person's analytical sentence.
> 3. Apply only the replacements you marked. Load the font, then change `characters` only.
> 4. Re-run V1 on all 12 slides and fix any new overflow with the ladder.
> 5. Append a "Language review" log section: lines reviewed, lines changed (old → new), and the final V1 count.
>    Report in the §11.1 format.

---

## 12. Q&A defence sheet (F7 writes this verbatim to `swasthyagrid-gcp/qa/qa-defence.md`)

# SwasthyaGrid: judge questions and answers (Team IdeaForge)

1. **Is the forecasting really AI today?**
   - Today the numbers come from deterministic engines: days of cover, priority rules and a confidence formula.
     That is deliberate, because a ministry must be able to audit every number.
   - Gemini and Sarvam explain and answer questions; they do not decide.
   - The pilot swaps the burn-rate rule for Vertex AI AutoML Forecasting, trained per state and backtested on 90
     days of HMIS and export history.
   - Slide 7 shows today vs pilot, row by row.
2. **What does "federated" mean here, concretely?**
   - Each state runs its own Google Cloud project in an Indian region, with its data in BigQuery.
   - Vertex AI trains a state model there.
   - Only model weights and aggregate indicators go to the Union node, which averages the weights and returns a
     better starting model to every state.
   - No state's rows leave the state.
3. **Why not one national database?**
   - Health is a State subject.
   - States already run e-Aushadhi / DVDMS.
   - A single platform means one tender, one migration and one outage for 36 States and UTs.
   - Federation pilots in weeks and fails one state at a time.
4. **Where does 1.36 crore come from?**
   - Stock-out days = 38,241 facilities × 7 tracer medicines × 365 days × 27.8% unavailability. That is 2.72 crore
     a year.
   - The base case halves it.
   - eVIN cut vaccine stock-outs by 80%, which is our bull case.
   - The 3×3 grid on slide 11 shows every combination stays above 58 lakh days.
5. **Is the data real?**
   - Operational data in the prototype is simulated and labelled so.
   - Road routes (OpenStreetMap), district boundaries (geoBoundaries) and every national statistic on the slides
     are real and cited.
6. **Which Google services actually run today?** Eight:
   1. Gemini API
   2. AI Studio
   3. Firestore
   4. Maps Places
   5. Cloud Run
   6. Secret Manager
   7. Cloud Build
   8. Artifact Registry

   Gemini Live is wired as the voice swap. Fourteen more are tagged PILOT on slide 8.
7. **Why Sarvam instead of Google for voice?**
   - Sarvam gave us low-latency Hindi and Hinglish on day one: 836 ms to first audio.
   - The 13 tools are already in Gemini's function schema, so moving to the Gemini Live API is an adapter, not a
     rewrite.
8. **What stops the AI from sending the wrong truck?**
   - Nothing ships without a named officer's approval.
   - The voice agent is read-only.
   - Every recommendation shows its quantity, reason and confidence.
9. **How does cross-district redistribution work?**
   - Warehouse-to-facility refills run today.
   - Facility-to-facility transfers are built and tested, but the demo data never picks them: the van must first
     drive to the donor, so they rarely beat a refill by 30 minutes.
   - The pilot widens the planner to cross-district moves at state level.
10. **How fast can a state start?**
    - Six weeks: MoU, state project, export mapping, logins, model training, shadow mode, go-live in 2 districts.
    - There is no new hardware; PHC staff use a phone.
11. **What about PHCs with poor connectivity?**
    - The CRM syncs when it can.
    - The dashboard survives a backend outage on cached data.
    - The pilot adds a Dialogflow CX phone line for PHCs without smartphones.
12. **Privacy and DPDP?**
    - SwasthyaGrid handles stock, bed and attendance counts, not patient identity.
    - Data stays in the state's Indian region.
13. **Who pays?**
    - It runs on existing NHM programme budgets with no new procurement line.
    - The prototype backend runs inside Cloud Run's free tier today.
    - We do not quote a national cost figure until the pilot measures it.
14. **Have you talked to users?**
    - Not yet, and we do not claim to.
    - Slide 9 lists a 40-interview validation plan by role, to run before the pilot.
15. **Why start with Rajasthan, then those 8 states?**
    - The prototype already models 5 Rajasthan districts.
    - The 8 states in wave 2 carry 70% of India's snakebite deaths, where antivenom stock-outs cost the most lives.

---

## 13. Final report and verification checklist

**Final report to the user** (the orchestrator relays it after F7):
- The Figma URL.
- The preview PDF path.
- The `qa/qa-defence.md` path.
- V1 to V5 results, node counts and critique scores (skill rubric and hackathon rubric).
- Export steps: Figma → File → Export → PDF as `TeamIdeaForge_SwasthyaGrid.pdf`.
- The logo-slot instruction: drop the Build with AI and Team IdeaForge logos into the two dashed slots on S1.
- Plain reminders:
  - PILOT items are not built. Present them as the pilot plan.
  - All operational data in the demo is simulated.
  - The team must review and own every line before submission.

**Verification checklist** (tick in the log):

- [ ] `model_output.txt` matches §5.3 exactly
- [ ] `preamble.js` built with no AssertionError; copy lint `copy hits: []`
- [ ] 12 slides exist, named 01 to 12; `slide-ids.json` complete
- [ ] V1 clean (or residuals listed) on all 12 slides
- [ ] Sweeps: `radiusFixed` reported; `fontLow`, `copy`, `missing` and `presentBad` all empty
- [ ] Every §11.5 visual checklist item confirmed from the `final_s*.png` screenshots
- [ ] S6 shows three real screenshots (or residual logged with manual steps)
- [ ] S8 shows 8 green, 1 yellow and 14 blue Google chips, matching the headline
- [ ] Cover has no KPI-tile row; cover and thank-you team tables list only Harsh Kawatra (DTU, Team Leader) and
      Gursimran Kaur (GGSIPU, Member)
- [ ] Zero em or en dashes, zero banned words, zero question marks on any slide
- [ ] Preview PDF has 12 pages
- [ ] `qa/qa-defence.md` written
- [ ] Memory file and `MEMORY.md` line written (§11.0 item 5)

**End-to-end verification the orchestrator runs itself before reporting:**
1. Read `build-log.md` in full.
2. Open 3 of the `hi_s*.png` files (S2, S8, S11) and confirm by eye that they match §11.5.
3. Re-run `gen.py sweeps` once more and confirm it is clean.
