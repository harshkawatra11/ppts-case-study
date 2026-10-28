# UrjaGrid product facts (audited from the code on 3 Oct 2026; the deck may state only these)

Source: Team IdeaForge code audit of `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\yuvayodha-hack` (read-only).

## 1. What the prototype is

- **Backend.** FastAPI, Python 3.12, 54 operations under `/api/v1` (39 GET, 15 POST). One SSE stream (`tick, event, plan, plans, risk, kpis`) and one WebSocket (`/ws/voice`).
- **Frontend.** Next.js 16, 29 `page.tsx` files, which are 28 screens and a redirect.
- **Tests.** 352 backend test functions and 162 frontend tests, all counted from code.
- **Network.** The seed network is 2 DISCOMs (MVVNL Bareilly, DVVNL Mathura), 5 sub-divisions, 12 feeders, 48 DTs and 7,000 connections.
  - DT ratings: 9 x 100, 14 x 160, 14 x 250 and 11 x 315 kVA, 10,105 kVA in total.
  - Tiers: T0 69, T1 4,863, T2 1,463, T3 605.
  - Five load archetypes, each about 20%.
  - The coordinates are approximations ("fallback" geocode), so call it "a simulated network on real Bareilly and Mathura localities".
- **Weather.** Three real archive days from Open-Meteo: 2024-05-28 (44.2 C), 2024-07-15 and 2024-10-10. `re_2047` is synthetic and uses the same 15% RE share as the others, so the deck does not use it.
- **Constants.**
  - Lifeline floors: T1 300 W, T2 500 W.
  - Cap ladder: 1,000/2,000, 500/1,000 and 300/500 W.
  - Notice: at least 30 minutes.
  - Dispatch: notify T-120, signal T-30, HES T-15, start, end, verify T+15.
  - Trip rule: above 130% for 2 intervals means 8 intervals (2 h) out.
  - Fee Rs 8 a meter a month; rebate Rs 2 a kWh; P2P charge Rs 0.42 a kWh.
- **Six safety invariants and 13 tests:**
  - T0 is never capped.
  - No cap goes below 300 W.
  - Every cap carries an expiry.
  - Every cap gets at least 30 minutes of notice.
  - Nothing dispatches without a named approver.
  - No LLM SDK is imported in any engine.
- **Roles.** Six roles. Only JE and AE can approve a plan, and the approver's name comes from the token.
- **Tools.** 15 read-only grid tools and 4 consumer tools.
- **Engines.**
  - Thermal (IEEE C57.91): 110.0 C and 1.0x at rated load and 30 C; 146.1 C and about 29x at 1.2 pu and 42 C.
  - Optimiser: HiGHS MILP with a tested greedy fallback.
  - Forecaster: LightGBM, 3 quantiles, 13 features, trained on synthetic data.
  - Power flow: radial sweep.
  - DR learning: Beta-Bernoulli.
  - Fairness: Jain, Gini and Lorenz.
- **Adapters.** DLMS class 71 limiter (OBIS 0.0.17.0.0.255), OCPP 1.6J `SetChargingProfile` (schema-validated), OpenADR 3 events, Beckn/UEI, WhatsApp, IVR and SMS. Templates are in Hindi (Latin script) and English.

## 2. Soft spots the deck must not trip over

- The live site runs only on hand-written fixtures. Fixture numbers are never quoted on the deck.
- The backend is not deployed. Not relevant to this submission (deck + 500-word pitch only), but never denied.
- The product's Scenario Lab shows mixed relief on unserved energy (-333.7, -142.7, +2,143.8 and +2,733.7 kW-intervals at 96 intervals). The reason: its planner targets only the supply gap, not transformer overload. The impact model built for this submission measures outage hours with the lever ladder applied to each DT's shortfall, including the thermal limit, and says so on slide 10.
- The dispatcher, the adapters, the forecaster, the power flow and the DR model are coded and unit-tested but not called by the running simulator. That is exactly why they are tagged WIRED.
- A DLMS limiter trips the relay when a home stays above the limit, then auto-reconnects. The deck says "must trim load" and never "nothing is switched off".

## 3. Build-status audit (the only source for LIVE, WIRED and PILOT)

| # | Capability | Status |
|---|---|---|
| 1 | Dashboard, 28 screens | LIVE |
| 2 | Home (consumer) phone view | LIVE |
| 3 | Field-worker app | LIVE |
| 4 | REST API, 54 routes | LIVE |
| 5 | Live event stream (SSE) | LIVE |
| 6 | Sign-in with 6 roles (JWT) | LIVE |
| 7 | Load model on real weather days | LIVE |
| 8 | Thermal model | LIVE |
| 9 | Optimiser with fallback | LIVE |
| 10 | Two-track simulator: baseline cut and trips | LIVE |
| 11 | Quantile forecaster | WIRED |
| 12 | Power-flow solver | WIRED |
| 13 | DR learning model | WIRED |
| 14 | Fairness indices | WIRED |
| 15 | Dispatcher timeline | WIRED |
| 16 | DLMS / HES limiter adapter | WIRED |
| 17 | OCPP adapter | WIRED |
| 18 | OpenADR adapter | WIRED |
| 19 | Beckn / UEI adapter | WIRED |
| 20 | WhatsApp, IVR, SMS channels | WIRED |
| 21 | Voice and typed ask (grounded tools) | WIRED |
| 22 | Protocol ledger | WIRED |
| 23 | Real head-end (HES/MDM) link | PILOT |
| 24 | Real charger links | PILOT |
| 25 | Production messaging contract | PILOT |
| 26 | India Energy Stack consent | PILOT |
| 27 | Hosted backend with persistence | PILOT |
| 28 | Forecaster trained on real meter data | PILOT |

Totals: **10 LIVE, 12 WIRED, 6 PILOT**. These are the numbers on slide 6.
