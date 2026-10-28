# Nari Kavach – Women Safety Innovation Challenge
## All Software Tracks: Idea Shortlist (Smart Wearables excluded — hardware track)

Build model: prototype built at home over the ~8 days before the Sept 1 PPT deadline, using Claude Code + free-tier infra (Vercel, Firebase, Google Cloud, Google Maps, HuggingFace, Twilio free trial). Demo video recorded from the deployed prototype. The 160-minute offline round is refinement and live presentation, not construction. All ideas below are picked and pressure-tested against one bar: **does it produce a visible, causal "it worked" moment in front of judges**, not just a slide claiming it works.

---

## Recommendation matrix (read this first)

| Idea | Track | 8-day feasibility | Demo causality | Originality risk | Verdict |
|---|---|---|---|---|---|
| B1: Voice Trigger SOS | AI For Safety | High | **Highest** — live phrase → live alert, <3 sec | Low — heuristic detection is honestly scoped, not oversold | **Lead pick** |
| A1: Covert Disguised SOS | Personal Safety | High | High — visual disguise + live alert | Medium — panic-button apps are common; disguise angle differentiates | Strong second |
| D1: Verified Walk-With-Me | Community Safety | Medium-High | High — two-device live map | Medium — needs a believable closed-community framing | Strong, higher build risk |
| A2: Route Deviation Escort | Personal Safety | High | High — live deviation triggers alert | Low-medium | Strong |
| Cyber 1: Evidence Vault | Cyber Safety | High | Medium — document generation, less visually dramatic | Low — genuine gap | Solid, lower demo drama |
| D2: Incident Heatmap + Auto-Complaint | Community Safety | Medium | Medium — map fills live but needs seed data | **High** — direct SafetiPin overlap, must be disclosed | Only if routing angle is real |
| A3: Fake Call + Silent Log | Personal Safety | High | High, but iOS PWA limits | Medium | Good third pick |
| B2: Predictive Risk-Zone Score | AI For Safety | Medium | Medium | Medium — risk of "AI-washing" if not transparent | Good if explainability is foregrounded |
| Cyber 2: Deepfake Triage + Dispatch | Cyber Safety | Medium | Medium | Low-medium | Solid, higher topical resonance |
| Cyber 3: Scam/Sextortion Scanner | Cyber Safety | Medium-High | Medium-high | Low | Solid |
| D3: Campus ICC Dashboard | Community Safety | Medium | **Low** — B2institution, hard to demo live | Low | Weakest demo, include only for breadth |
| B3: Helpline Triage Assist | AI For Safety | Low-Medium | Low — needs institutional data, likely synthetic | Low | Backup only, not a lead |

**Top overall pick: B1 (Voice Trigger SOS), AI For Safety track.** Reasoning below in its own section — it's the only idea on this list where the demo itself, not a description of the demo, is the pitch.

---

# Track: Women's Personal Safety

## A1: Covert Trigger SOS with Disguised UI

**Problem:** Visible panic-button apps fail exactly when a phone is being watched or controlled by the threat itself (stalker, abusive partner) — an obvious SOS app gets noticed, deleted, or blocked before it's used.

**Gap:** India's official "112 India" app and most commercial SOS apps require an open, visible interaction. Few offer a genuinely disguised trigger that survives someone glancing at the phone.

**Counterargument, addressed:** "Some Android phones already have native power-button-mashing SOS triggers — this is redundant." Not universal across devices/OEMs, and doesn't extend to a disguised, memorable, app-agnostic trigger. The differentiator is the disguise itself (a working calculator app that silently activates on a secret code), not the alert mechanism.

**Flow:** App presents as a functioning calculator. Entering a pre-set code silently triggers: live location broadcast to trusted contacts (via WhatsApp click-to-chat links — no paid SMS API needed) and optional background audio recording.

**Stack:** Next.js PWA, Geolocation API, WhatsApp click-to-chat deep links (free), IndexedDB for offline queuing if signal drops.

**8-day build:** Days 1–2 calculator UI + real calculator logic (has to actually work as a calculator or the disguise fails under scrutiny). Days 3–4 secret-code trigger + location broadcast. Day 5 audio recording + upload. Days 6–7 test across real scenarios, harden offline queuing. Day 8 demo video + submission.

**Demo:** Judges watch a "calculator" get used normally, then the secret code is entered — cut to a second phone receiving a live location link and audio starting.

**Limitations:** Requires advance setup and code memorization — a real UX risk under panic. Doesn't function with phone off/dead. Say this plainly in the pitch rather than let judges discover it in Q&A.

## A2: Route Deviation & Expected-Arrival Escort

**Problem:** "Text me when you're home" is manual and fails silently — no one is alerted if something goes wrong mid-route, only if she forgets to text.

**Gap:** Ride-hailing "share trip" features (Uber) only work inside their own app for their own rides — nothing works across walking, autos, public transport, or a personal vehicle, and none auto-escalate.

**Counterargument, addressed:** "Google/Life360 live location sharing already does this." Those are passive — someone has to actively watch the map. This is the differentiator: an "expected arrival" contract with **automatic** escalation (route deviation, unexplained stop, missed arrival time) with zero manual monitoring required from the contact.

**Flow:** Before starting a journey, user sets destination + expected arrival time. App tracks live location; on route deviation, unusual stop duration, or arrival timeout, it auto-alerts trusted contacts with last known location — no manual action needed from anyone.

**Stack:** Next.js/PWA, Google Maps Directions API (free tier) for planned-vs-actual route comparison, Geolocation `watchPosition`, Firebase Cloud Functions for the deviation/timeout check, WhatsApp click-to-chat for alerts.

**8-day build:** Days 1–2 route input + live tracking. Days 3–4 deviation/timeout detection logic, tuned against false positives (normal traffic reroutes). Day 5 alert dispatch. Days 6–7 live walk-test the actual deviation trigger repeatedly. Day 8 demo + submission.

**Demo:** Presenter walks a scripted deviation live during the pitch — alert fires on a second device without anyone touching a phone.

**Limitations:** Continuous GPS tracking drains battery — state the tradeoff honestly. Deviation sensitivity needs real tuning or it will false-alarm on normal detours; show the tuning process as part of the technical narrative, not just the happy path.

## A3: One-Tap Fake Call + Silent Log

**Problem:** Sometimes the safest immediate move isn't alerting anyone — it's a socially acceptable reason to leave a situation (harassment, an unsafe date, a workplace threat) without visibly escalating danger.

**Gap:** Novelty fake-caller-ID apps already exist on app stores, but standalone — they don't simultaneously log the incident to a real safety network.

**Counterargument, addressed:** "This already exists as a commercial novelty app." True for the fake-call mechanic alone — the differentiator is pairing it with the same trusted-contact/location backend as A1, so one tap both extracts the user socially and quietly logs the incident, rather than requiring two separate apps.

**Flow:** One tap triggers a realistic incoming-call UI (customizable caller name/ringtone) while silently logging location and timestamp to trusted contacts in the background.

**Stack:** Shared backend with A1, custom call-screen overlay component, Web Audio API for ringtone.

**Limitations:** iOS Safari PWA background-execution restrictions are real — scope the demo to Android/browser and say so, rather than claim cross-platform parity that will fail live.

---

# Track: AI For Safety

## B1: Voice Distress & Trigger-Phrase Detector — lead pick

**Problem:** In an assault or threat situation, reaching for a phone to tap or type is often not possible. Help needs to activate from a spoken word or a scream, hands-free.

**Gap:** Most existing tools require a button press. Passive audio-triggered activation, accessible through a browser without a native background service, is rare — and for good reason, addressed below.

**Counterargument, addressed directly, not softened:** "Continuous background audio listening on mobile web is restricted by browser sandboxing — this can't run silently 24/7 while the phone is locked." Correct, and this must be scoped honestly rather than oversold: the tool works during an **active foregrounded session** — the user opens the app and taps "start session" before a risky commute or walk, and detection runs while that session is active. That's a real, valuable, honestly-scoped product, not a compromised version of a false promise.

**Flow:** User starts a session before walking somewhere risky. The app listens locally via the Web Speech API for a configured trigger phrase, and via Web Audio API amplitude/frequency analysis for a scream/distress-pitch heuristic (explicitly a heuristic, not a trained ML classifier — say this in the pitch; a false claim of "AI scream detection" that's actually a volume threshold will not survive a technical judge's question). On trigger, it silently alerts trusted contacts with live location.

**Stack:** Web Speech API (browser-native, free) for phrase detection, Web Audio API for amplitude/frequency heuristics, Firebase for alert dispatch, Next.js/Vercel for the app shell.

**8-day build:** Days 1–2 session start/stop UI + Web Speech API integration, get phrase detection reliable in a quiet room first. Day 3 amplitude/frequency heuristic for scream detection, tested against real audio samples (laughter, traffic, genuine distress recordings from public safety-awareness content) to measure a real false-positive rate. Days 4–5 alert dispatch + location. Days 6–7 test in noisier real-world conditions, tune thresholds, document the measured false-positive rate honestly. Day 8 demo video + submission.

**Demo:** Presenter says the trigger phrase live, mid-pitch — a second device visibly receives the alert within seconds. This is the single most visceral, causal demo moment across all twelve ideas in this document: judges watch a spoken word produce an instant, undeniable effect.

**Limitations:** Only works in an active foregrounded session, not silently while the phone is locked — state this upfront, don't let it surface as a "gotcha" in Q&A. Scream-heuristic will have real false positives; report the tested rate rather than claiming high accuracy.

## B2: Predictive Risk-Zone Advisory

**Problem:** Women in unfamiliar areas have no fast way to check whether a route or area is currently risky before committing to it.

**Gap and honest scoping:** This overlaps with crowdsourced mapping ideas (see Community Safety D2) — the "AI For Safety" version must differentiate as a transparent scoring model, not a raw map. Counterargument, addressed: "A hackathon-scale risk score from sparse data is just a weighted heuristic dressed up as AI — that risks looking like AI-washing to judges." The honest response is to build it explicitly as a rules-based, explainable scoring system (time of day, streetlight/lighting tag density from OpenStreetMap, incident recency where genuinely public data exists) with the factor weights shown on screen — an explainable score is a stronger safety-domain claim than an opaque one, and it preempts the AI-washing objection instead of hiding from it.

**Flow:** User enters a route or area; app pulls OSM lighting/infrastructure tags via the Overpass API, applies a transparent weighted formula, displays a route heatmap with the factor breakdown visible.

**Stack:** OpenStreetMap Overpass API (free), Google Maps for rendering, a simple documented weighted-scoring function, Next.js/Vercel.

**Demo:** Enter two different routes live, show differing scores with the breakdown visible on screen.

**Limitations:** Granular public incident data at street level is largely unavailable in India — the demo will lean mostly on lighting/infrastructure proxies. State this as a known data-availability gap, not something to gloss over.

## B3: AI-Assisted Distress Call Triage for Helplines

**Problem:** Helplines (1091, 181, 1930) get calls of mixed urgency; responders need fast triage.

**Honest assessment:** This is institutional/B2G, not personally usable, and without real institutional data or partnership, the live demo would necessarily run on synthetic scripted calls. Given the explicit bar of "judges love things that feel real and work," this is the weakest of the AI-track ideas for a live pitch — include it for breadth in the PPT if the track needs range, but don't lead with it.

---

# Track: Community Safety

## D1: Verified "Walk With Me" Buddy Matching

**Problem:** Much of unsafe-travel risk is simply being alone; a matched companion for the same route and time reduces it — but unverified stranger-matching for safety is itself a real risk.

**Gap:** Ride-pooling apps (BlaBlaCar-style) exist for rides, not for short-distance walking companionship, and typically lack safety-specific verification.

**Counterargument, addressed — this one doesn't fully resolve without a real scope restriction:** "Matching a woman with a stranger 'for safety' could itself introduce risk, and that's hard to make credible in a demo." Correct. The resolution is to restrict the whole system to a closed, verified community (e.g., college-email-verified DTU students) rather than open public matching, and to require both matched users' live location shared with a third-party trusted contact for the whole walk — so neither party is ever unsupervised without a witness on record. This restriction has to be real in the access-control logic, not just stated in the pitch.

**Flow:** Sign up with verified college email, request a same-route/same-time match, both parties' live location shared with their own chosen trusted contact for the walk's duration, check-in confirmation at destination.

**Stack:** Firebase Auth with email-domain restriction, Firestore matching queue, Google Maps for live tracking, Next.js/Vercel.

**8-day build:** Days 1–2 auth + domain restriction. Days 3–4 matching queue logic. Days 5–6 live location sharing between matched pairs + third-party contact visibility. Day 7 test with two real devices end to end. Day 8 demo + submission.

**Demo:** Two phones/browser tabs matching live and sharing location on a shared map in real time in front of judges — strong visual demo.

**Limitations:** Cold-start problem — needs a critical mass of verified users to actually produce matches. This is a real rollout challenge the prototype itself doesn't solve; say so rather than imply the demo proves adoption will happen.

## D2: Crowdsourced Incident + Infrastructure Heatmap with Auto-Routed Complaints

**Problem:** Local safety issues (broken streetlights, unsafe alleys, harassment hotspots) are known anecdotally within a community but never aggregated into something actionable.

**Gap and direct competitive disclosure:** SafetiPin already does crowdsourced safety mapping in India — this must be named and differentiated, not ignored, or a judge familiar with the space will flag it as derivative. The differentiator: tie infrastructure-category reports (broken lighting) directly to an auto-generated municipal corporation complaint, so the pitch is "this doesn't just show you the risk, it also files the fix" — data to action, not just data to map.

**Counterargument, addressed:** "This competes with an existing funded product." True, and this idea is only worth pitching if the auto-routed complaint piece is actually built, not just mentioned on a slide. If the team can't commit engineering time to that routing logic, don't pick this idea — it becomes indistinguishable from SafetiPin without it.

**Flow:** User drops a pin with a category (lighting, harassment report, unsafe infrastructure) and optional photo. Lighting/infrastructure reports auto-generate a drafted complaint to the relevant municipal body (researched static contact table). Harassment reports feed the community heatmap only — no auto-complaint, since those need human judgment, not automated routing.

**Stack:** Google Maps + Firestore, Claude API for complaint drafting, static municipal contact/portal table (researched, not live-scraped).

**Demo:** Drop a pin live, watch the heatmap update in real time, show the auto-drafted municipal complaint appear.

**Limitations:** A heatmap needs report volume to be meaningful — cold start again. Address it honestly by seeding the demo with disclosed public data (published unsafe-area surveys), labeled clearly as seed data, not real-time reports, so judges aren't misled about what's live versus pre-loaded.

## D3: Campus/Institution Safety Committee Dashboard

**Problem:** Colleges and workplaces have legally mandated Internal Complaints Committees (ICC) under the POSH Act, but often lack a simple digital intake and deadline-tracking system, so complaints get lost or delayed.

**Honest assessment:** B2institution, not personal-use, and the weakest of the twelve ideas for a live, exciting demo in front of a women's-safety hackathon audience. Legally sensitive domain (POSH Act procedural timelines) requiring real verification before any compliance claims are made. Include only for track breadth in the written submission, not as the team's lead pitch.

---

# Track: Cyber Safety (carried forward, unchanged reasoning from prior audit)

## Cyber 1: Evidence Vault + Auto-Complaint Drafter
Hashes and timestamps harassment evidence before it disappears, drafts a complaint mapped to the correct legal sections. Cleanest legal/technical gap of all twelve ideas, lowest liability surface. Demo is a working document, not a live causal moment — solid but less visually dramatic than B1 or D1.

## Cyber 2: Deepfake/Morph Triage + Multi-Platform Takedown Dispatcher
Runs an actual manipulation-detection signal (free-tier model) but treats it strictly as one input to severity, never a verdict — the user's self-report always drives escalation. Genuinely topical given the prominence of non-consensual AI imagery as a policy issue; higher emotional resonance with judges than most other ideas here.

## Cyber 3: Scam/Sextortion Message Risk Scanner
Rule-based severity gate (not model-based) for blackmail/threat language, LLM classification only for lower-stakes scam categories. Strong technical narrative around responsible LLM deployment in a high-stakes-error domain.

(Full build plans, architecture, and demo scripts for these three are in the earlier cybersecurity-only file — reuse that content directly; the reasoning hasn't changed, only the timeline framing has, which is already reflected in these summaries.)

---

## Final call: how to actually choose

If the team wants a single track and the strongest live-demo moment: **AI For Safety, Idea B1**. It's the only idea in this set where the causal chain (spoken word → alert) is instant, undeniable, and impossible to fake with a canned recording, which is exactly the "people love things working" bar you set. Pair it with A2 (Route Deviation) as a second live-demo moment in the same pitch if time allows — both are Personal Safety-adjacent and would let the team narrate one continuous story: "here's how she stays safe passively (B1) and here's how her people know if something's wrong even when she can't act (A2)."

If the team wants to hedge toward differentiation risk instead of demo drama: **Cyber Safety, Idea 1** remains the cleanest, lowest-risk, most defensible gap — just a quieter demo.

Don't pick D2 or D3 unless the team is genuinely committing engineering time to their stated differentiators (auto-complaint routing, real POSH timeline logic) — both are the ideas most likely to look like a slide-deck promise rather than a working product if under-built.
