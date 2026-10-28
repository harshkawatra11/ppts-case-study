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

