# Nari Kavach — Idea Sheet v2 (independent generation + scoring pass)

## 0. Methodology

This file is a **from-scratch idea generation and scoring pass**, independent of the
prior file in this folder (`nari-kavach-all-tracks.md`). None of the 12 ideas below were
copied or lightly reskinned from that file's B1/A1/D1/etc. picks — each was generated
fresh, then researched, then scored against a single rubric. Where a new idea happens to
land near an old one conceptually (route-anomaly detection, complaint drafting), it was
still scored as if seeing it for the first time, and the differentiation from the old
version is called out explicitly rather than assumed.

**Scope constraints applied throughout:**
- Software-only team — Smart Wearables (hardware track) excluded.
- 4 tracks in scope: Women's Personal Safety, AI For Safety, Cyber Safety, Community Safety.
- 3 ideas per track × 4 tracks = 12 ideas.
- Deployment: Vercel + Google Cloud only. **Railway and Render are excluded by team preference.**
- Build model: ~7–8 days solo/small-team build with Claude Code before the Sept 1 PPT
  deadline. The 160-minute offline round is live refinement + pitch, not from-scratch build.
- No fabricated stats or invented adoption numbers anywhere below — every quantitative
  claim below is sourced from the live research pass in §1, with a citation. Where a
  number is a heuristic or an estimate, it's labeled as such.

## 1. Research pass — the landscape, so gap claims aren't asserted from memory

**Existing India women's-safety apps** (the baseline every idea below must differentiate
against): 112 India (police/ambulance/fire one-tap SOS), Raksha (SMS-based, works
offline), SafetiPin (area safety scoring + safer-route suggestions), bSafe (live location
+ auto audio/video + fake call), Himmat Plus (Delhi Police, distress alert + location
share). [Comparison source](https://savvywomen.tomorrowmakers.com/wise/best-safety-apps-women-article), [Himmat](https://en.wikipedia.org/wiki/Himmat_(app)), [2026 SOS app guide](https://hersafety.blog/best-women-safety-apps-with-sos-feature-2026/). Every one of these is
**trigger-based** (button, voice, or SMS) or **informational** (a safety score) — none run
a live two-way interaction, a covert motion-based trigger, or a permission/spyware audit.
That gap is what several ideas below target directly.

**Crime-against-women baseline:** NCRB recorded ~4.01 lakh cases in 2025 (down 2.5% from
2024); ~51 FIRs registered every hour nationally; crime rate of 66.4 per lakh female
population. NFHS-5 (2019–21) separately found 32% of ever-married women report lifetime
physical/sexual/emotional violence by a husband — official crime data undercounts the true
scale. [NCRB 2025 summary](https://www.shakshamfoundation.org/crimes-against-women-in-india-2026/), [NCRB/NFHS analysis](https://newssutra.com/news/womens-safety-ncrb-report-2025-analysis).

**Cyber-safety baseline:** cybercrime complaints involving women rose from roughly 50,000
(2024) to near 80,000 (2026), about a 60% jump in two years. Globally, 93% of deepfake
victims are women, with a reported ~900% rise in non-consensual synthetic content; 62% of
deepfake-abuse cases involving women go unreported. [Deepfake crisis reporting](https://www.digit.in/features/general/indias-deepfake-crisis-women-are-falling-prey-to-ai-menace-more-than-men.html), [Delhi sextortion ring](https://the420.in/delhi-cybercrime-ring-ai-deepfakes/). Separately, India **leads the Asia-Pacific
region in stalkerware victims** (2,492 recorded), and women report digital stalking (42%)
at a materially higher rate than men (36%) — stalkerware is flagged as a documented
precursor to physical abuse, not just a privacy nuisance. [AV-Comparatives Stalkerware Test 2025](https://av-comparatives.org/tests/stalkerware-test-2025/), [stalkerware/abuse link](https://safeescape.org/stalkerware-threatens-womens-privacy/). No India-specific,
women's-safety-framed stalkerware/permission auditor turned up anywhere in this search —
existing detection tools (Malwarebytes, Bitdefender-class scanners) are generic security
products, not positioned for this use case.

**Community/institutional baseline:** UGC has directed all higher-education institutions
to strengthen POSH compliance and report through the **SHe-Box** portal (the government's
single-window workplace/campus harassment complaint system) and the **SAKSHAM** portal for
institutional reporting; Odisha separately launched **Shaktishree**, a state-run app for
anonymous text/audio/video campus complaints across 730+ colleges. [UGC SAKSHAM directive](https://news.careers360.com/ugc-directive-women-safety-ncw-posh-guidelines-sexual-harassment-workplace-university-campus-saksham-portal), [Shaktishree](https://news.careers360.com/odisha-cm-launches-shaktishree-initiative-for-safety-security-of-female-students-on-campus). This means campus-safety ideas
now have a **real, current, named compliance target** to build against, rather than
inventing an ICC dashboard from scratch.

**Reporting-infrastructure baseline:** India's National Cybercrime Reporting Portal and the
1930 helpline exist, but investigations are structurally delayed by too few cybercrime
police stations/trained officers, and underreporting is worsened by victims lacking
privacy, literacy, or a clear sense of which authority/section applies. [Enforcement gap analysis](https://www.ijllr.com/post/cyber-crime-against-women-in-india-the-gap-between-legal-protection-and-effective-enforcement).

**Messaging infra note (carried forward as still valid):** Twilio's WhatsApp path is
either a sandbox (free but requires the recipient to send a join code first — bad for a
live demo with a judge's phone) or a paid production number. **WhatsApp click-to-chat deep
links remain the correct free, frictionless choice** for any alert-dispatch mechanism
below — confirmed nothing better/free emerged in this pass. [Twilio WhatsApp API constraints](https://chatarmin.com/en/blog/twilio-whats-app-api).

---

## 2. Scoring rubric

Applied identically to all 12 ideas. Five criteria, each **1–5**, summed to **/25**. The
criteria mirror the organizer's own 5-slide PPT structure 1:1, so the score is already
argument-ready for the submission. Per the user's explicit instruction, weighting is
**even across all five (no numeric multiplier)** — but **Solution & Demo-Causality is the
named tiebreaker**: when two ideas are within 1 point of each other on total, the higher
demo-causality score wins the tie, because a judge falling in love with a live "it worked"
moment is the single highest-value outcome this sheet is optimizing for.

| # | Criterion | Mirrors slide | What a 5 looks like |
|---|---|---|---|
| 1 | Problem Significance | Slide 1 | Evidenced, current, India-specific harm — not a vague generality |
| 2 | Gap / Differentiation | Slide 2 | Named competitors checked; the gap is real and stated, not asserted |
| 3 | Solution & Demo-Causality | Slide 3 | A live, undeniable "it worked" moment — a judge sees cause → effect, not a description of one |
| 4 | Technical Feasibility | Slide 4 | Buildable solo in ~8 days, Vercel/GCloud-only, no fragile paid API blocking the live demo |
| 5 | Expected Impact & Scalability | Slide 5 | Real social value, honest about limits, believable scale story |

---

## 3. The 12 ideas

### Track: Women's Personal Safety

#### P1 — Saathi Call: AI Voice Companion for Unsafe Commutes

**Problem:** Every existing "fake call" pattern (including this folder's own prior file)
is a **one-way ringtone spoof** — it looks like an incoming call, but there's no one
actually talking back, which falls apart the moment a threat listens for more than a few
seconds or the user has to fake both sides of a conversation herself.

**Gap:** None of the five baseline apps in §1 run a live two-way interaction. bSafe's fake
call is the closest competitor and is still a one-way spoof, confirmed in the research pass.

**Solution:** User taps "start commute call." The app places a simulated outbound call UI
and an AI voice (LLM + text-to-speech, low-latency turn-taking) plays the role of a
friend/family member — asking real questions, reacting to her answers, sustaining a
believable two-sided conversation for the length of the walk. A configured duress phrase
spoken by the user (e.g., "no I already told mom") is heard by the AI mid-conversation and
silently triggers a live-location alert to trusted contacts, with the AI call continuing
uninterrupted so nothing looks different to anyone nearby.

**Stack:** Next.js/PWA, a low-latency voice API for the AI side (realtime TTS/STT turn-taking), Web Speech API as
a fallback for phrase-spotting the duress trigger locally (keeps the safety-critical
trigger working even if the voice API has a hiccup), WhatsApp click-to-chat for alert
dispatch, Vercel hosting.

**8-day build:** Days 1–2 realtime voice call UI + baseline AI conversation flow (get one
believable exchange working end to end first). Days 3–4 duress-phrase detection running
in parallel with the AI call. Day 5 alert dispatch + Vercel deploy. Days 6–7 test call
latency/believability repeatedly, build a scripted fallback conversation for demo-day
network flakiness. Day 8 demo video + submission.

**Demo:** Presenter starts the call live on stage, has an actual back-and-forth exchange
with the AI voice audible to judges, then says the duress phrase mid-sentence — a second
phone visibly receives the alert while the AI call keeps talking naturally, exactly as it
would in a real threat scenario.

**Limitations, stated honestly:** Realtime voice-AI latency is the single biggest live-demo
risk on this entire list — if the API stutters, the illusion breaks in front of judges;
budget real rehearsal time and have a scripted offline fallback recording as backup. Data/
cost of a sustained voice API call is a real per-use cost, unlike every other idea here —
say so rather than imply it's free at scale.

#### P2 — Duress PIN: Decoy-Mode App Lock

**Problem:** In coercive-control and stalking situations (documented as a real precursor
pattern in the stalkerware research below), a woman is sometimes forced to unlock her own
phone in front of an abuser — any app screen that visibly says "safety" or "SOS" at that
moment is itself dangerous.

**Gap:** Duress-PIN patterns are well-established in banking/ATM security but not applied
to a personal-safety context in any of the five baseline apps.

**Solution:** A single lock-screen PIN entry point. The real PIN opens a genuinely boring
decoy screen (e.g., a note-taking app) that functions completely normally under scrutiny.
A second, secret duress PIN opens the *same* decoy screen — visually identical — but
silently starts audio recording and sends a live-location alert in the background.

**Stack:** Next.js/PWA, IndexedDB for local PIN config, Web Audio API for background
recording, WhatsApp click-to-chat for alerts, Vercel hosting.

**8-day build:** Days 1–2 decoy note-app UI that has to genuinely work (same "it has to
survive scrutiny" bar as any disguise pattern). Days 3–4 dual-PIN logic + background
recording. Day 5 alert dispatch. Days 6–7 test under realistic phone-handoff scenarios.
Day 8 demo + submission.

**Demo:** Presenter hands a "locked" phone to a volunteer judge, who is told to enter the
real PIN and sees a normal note app; presenter then privately enters the duress PIN on a
second device — a third screen shows the alert landing live.

**Limitations, stated honestly:** Requires the duress PIN to be memorized under real
stress, the same UX risk as any pre-set covert trigger; app-store review policies can be
hostile to "hidden functionality" apps, but a PWA sidesteps that entirely — worth stating
in the pitch as a deliberate architecture choice, not an accident.

#### P3 — Trip Watch: Unlicensed-Ride Verification & Driver Log

**Problem:** Ride-hailing "share my trip" features (Uber, Ola) only cover rides booked
inside their own apps — autos hailed off the street, shared shuttles, and informal cab
rides have no verification or tracking layer at all.

**Gap:** SafetiPin scores areas, not specific trip legs; none of the five baseline apps
log an individual, non-app ride. This is a genuine, unaddressed slice of the unsafe-travel
problem.

**Solution:** Before boarding an off-app ride, the user photographs or types the vehicle
number and driver-visible ID. The app instantly sends the details plus a live-tracking
link to trusted contacts via WhatsApp, and separately checks the vehicle number against a
community-flagged watchlist (crowdsourced reports of past unsafe incidents tied to that
plate) — flagging a match before she gets in, not after.

**Stack:** Next.js/PWA, Google Maps `watchPosition` for live tracking, Firestore for the
watchlist, OCR (a lightweight vision API call) for photographing plates instead of typing,
WhatsApp click-to-chat, Vercel + Firebase hosting.

**8-day build:** Days 1–2 vehicle-entry UI + live tracking link generation. Days 3–4
watchlist lookup + community-flag submission flow. Day 5 OCR plate-photo shortcut. Days
6–7 test with real vehicle numbers end to end. Day 8 demo + submission.

**Demo:** Presenter photographs a (pre-seeded, disclosed-as-seeded) flagged test plate live
— the app immediately surfaces the prior community flag before boarding, then a second
device shows the live tracking link land with the contact.

**Limitations, stated honestly:** The watchlist half has the same cold-start problem as
any crowdsourced database — seed it with disclosed test data for the demo, don't imply it
has real coverage yet; a bad-faith false flag on an innocent driver is a real misuse risk
worth acknowledging and designing a lightweight moderation/report-count threshold against.

---

### Track: AI For Safety

#### AI1 — Pocket Pulse: Silent Motion-Gesture SOS

**Problem:** Voice-trigger and button-trigger tools both fail in the same scenario: hands
occupied, can't look at or speak into a phone (being physically restrained, in a crowd, in
a situation too loud or too dangerous to speak into a phone), phone in a pocket or bag.

**Gap:** None of the five baseline apps offer a covert *motion-based* trigger — all rely on
a visible tap, a spoken phrase, or a physical button combination.

**Solution:** User enables a covert gesture pattern (e.g., three sharp wrist-flicks in
quick succession, distinguishable from normal walking/pocket motion) using the phone's
accelerometer/gyroscope. Performing the gesture — through fabric, without looking at the
phone — silently triggers a live-location alert with no screen interaction and no sound.

**Stack:** `DeviceMotionEvent` (browser-native, free, works on modern mobile browsers with
a permission prompt), a simple pattern-matching heuristic (peak-detection + timing window,
explicitly a heuristic, not a trained classifier — say this plainly, same honesty standard
this idea sheet holds everywhere else), Firebase for alert dispatch, WhatsApp click-to-chat,
Vercel hosting.

**8-day build:** Days 1–2 raw motion-data capture UI, get the sensor stream visible/
loggable first. Day 3 gesture pattern-matching heuristic, hand-tuned against real walking/
running/pocket-jostling motion samples recorded by the team themselves (not synthetic data
— this needs real motion capture to tune credibly). Days 4–5 alert dispatch + permission-
flow UX (motion sensors require an explicit user gesture to request permission on iOS
Safari — build this in from day one, it's a real platform constraint). Days 6–7 test the
gesture in noisy real-world conditions (walking, in a bag, in a pocket while running for a
bus), document the measured false-positive/false-negative rate honestly. Day 8 demo video
+ submission.

**Demo:** Presenter puts the phone in a pocket, keeps talking to the judges normally, and
performs the gesture through the fabric without looking down — a second device visibly
receives the alert within seconds, with no visible interaction on the first phone at all.
This is the most viscerally "how did that just happen" moment across all 12 ideas — the
trigger is genuinely invisible to an observer, which is exactly the threat model it's
built for.

**Limitations, stated honestly:** Heuristic gesture detection will have a real false-
positive rate against ordinary phone handling (dropping the phone, vigorous walking) —
report the tested rate rather than claim high accuracy. iOS motion-permission prompts
require a user tap to enable, which has to be part of the onboarding flow, not something
that can run invisibly from a first visit.

#### AI2 — Structured Complaint Copilot

**Problem:** The 62%-underreporting figure for deepfake/cyber abuse in §1 isn't primarily
about victims not caring — it's about not knowing which of several authorities (local
police, 1930 helpline, National Cybercrime Portal, SHe-Box) applies, and not having the
emotional bandwidth to structure a coherent complaint while distressed.

**Gap:** This is deliberately scoped narrower than a generic "evidence vault" — the
differentiator is the trauma-informed **conversational intake** plus **authority routing**,
not evidence hashing (that's a separate, narrower cyber-safety problem, kept distinct from
this idea below in C-track).

**Solution:** A calm, structured conversational flow (not a blank form) walks the user
through what happened. An LLM turns the conversation into a properly structured complaint,
maps it to the correct authority (police / 1930 / cybercrime portal / SHe-Box) and the
relevant legal section, and generates a submission-ready draft the user can review, edit,
and file herself — the tool never files anything automatically or claims to give legal
advice.

**Stack:** Next.js/Vercel, an LLM API for conversational intake and drafting, a small
researched (not scraped) static table of authority contact points and legal-section
references, Firebase for saving drafts.

**8-day build:** Days 1–3 conversational intake flow + researching the authority/section
mapping table properly (this table has to be accurate — a wrong legal-section reference is
a real credibility risk under judge questioning). Days 4–5 draft-generation prompt tuning.
Days 6–7 test with several realistic scripted scenarios, verify routing accuracy. Day 8
demo + submission.

**Demo:** Presenter walks through a scripted (clearly disclosed as scripted, sensitive-
content-appropriate) intake conversation live, and the tool produces a structured,
correctly-routed draft complaint on screen in real time.

**Limitations, stated honestly:** This is a document-generation demo, not a live-alert
demo — it has to win judges on the quality and correctness of the output, not on
spectacle; the legal-section mapping must be genuinely researched, not LLM-hallucinated,
or it fails under any technical judge's scrutiny.

#### AI3 — Passive Anomaly Escalation

**Problem:** Every active-trigger tool (voice phrase, gesture, button) still requires the
user to be conscious and able to act — incapacitation (a fall, being physically restrained
long enough to stop moving) is a real scenario none of them cover.

**Gap:** Closest existing concept is a route-deviation/expected-arrival contract (which
requires explicit destination/time setup); this idea is scoped to detect an anomaly —
sudden stop, prolonged stillness in an active session — **without requiring the user to
pre-declare a route**, which is a real but modest differentiation, not a new category.

**Solution:** During an active safety session (opened before an unfamiliar or risky
journey, same honest scoping as any browser-based passive tool), the app watches motion
data for a sudden stop followed by prolonged stillness in a non-home location. On
detection, it surfaces a check-in prompt with a short countdown; if there's no response,
it auto-alerts trusted contacts with the last known location.

**Stack:** Same motion-sensing stack as AI1 (`DeviceMotionEvent`), Geolocation API,
Firebase Cloud Functions for the countdown/escalation logic, WhatsApp click-to-chat.

**8-day build:** Days 1–2 session start/stop + stillness-detection heuristic. Days 3–4
check-in prompt + countdown escalation logic, tuned against ordinary pauses (waiting at a
red light, sitting down). Day 5 alert dispatch. Days 6–7 test against real staged
scenarios. Day 8 demo + submission.

**Demo:** Presenter starts a session, then deliberately stays still past the threshold —
the check-in prompt appears, presenter lets the countdown lapse on purpose, and a second
device receives the escalation alert.

**Limitations, stated honestly:** Same active-session constraint as any browser-based
passive tool — doesn't run silently once the phone is locked or the browser tab is closed;
staging a convincing "incapacitation" demo without it looking contrived takes real
rehearsal, and the false-positive risk against ordinary pauses (a red light, sitting on a
bench) needs a genuinely tuned, disclosed threshold.

---

### Track: Cyber Safety

#### C1 — Kavach Scan: Stalkerware & Permission Audit

**Problem:** India leads the Asia-Pacific region in recorded stalkerware victims, and women
report digital stalking at a meaningfully higher rate than men (§1) — stalkerware is a
documented precursor to physical abuse, and yet **zero** India-specific, women's-safety-
framed detection tool for it turned up anywhere in this research pass.

**Gap:** This is the single least-covered gap found across all 12 ideas — existing
detection tools (Malwarebytes-class scanners) are generic consumer-security products, not
positioned around coercive-control/domestic-abuse threat models, and none surfaced in the
Indian women's-safety app landscape specifically.

**Solution:** The user runs a scan that lists installed apps and their granted permissions
(camera, mic, location, accessibility service, SMS access), cross-references against a
public, disclosed stalkerware-signature/behavior list, and flags matches with a plain-
language explanation of what that app can see. Critically, the tool does **not**
auto-remove anything — per documented safety-planning guidance, abrupt removal can alert an
abuser and escalate risk — instead it produces a private, exportable audit and a
safety-planning checklist (e.g., "document this before acting," "consider a trusted second
device," relevant helpline numbers).

**Stack:** This is the one idea on this list that cannot be a pure PWA — installed-app and
permission enumeration requires OS-level access, so it needs a native or near-native
Android client (React Native/Expo is the fastest realistic path for a solo Claude Code
build). A companion dashboard/landing page and any backend logic (signature list, audit
storage) can still live on Vercel + Google Cloud, satisfying the deployment constraint for
everything except the client itself, which ships as a downloadable/sideloadable APK for
the demo.

**8-day build (higher-risk schedule, stated honestly):** Days 1–2 Expo project scaffold +
installed-app/permission enumeration working at all (this is the make-or-break step — de-
risk it first, before building any UI polish). Days 3–4 signature-matching against a
curated, disclosed public list (e.g., patterns documented by stalkerware-research
organizations) — this list must be honestly sourced, not invented. Day 5 the plain-language
explanation + safety-checklist UI. Days 6–7 test on a real device with a real installed
test app that intentionally matches a known pattern. Day 8 demo + submission, with an
explicit fallback plan (a pre-recorded scan segment) if the live scan is flaky on
unfamiliar demo hardware.

**Demo:** Presenter installs a labeled test app with stalkerware-like permissions live on
an Android device, runs Kavach Scan, and watches it get flagged in seconds with a plain-
language explanation of exactly what it can access — a strong, immediate, undeniable
causal moment.

**Limitations, stated honestly:** This is the **highest technical-feasibility risk of all
12 ideas** — a native Android client with real OS-level permission enumeration is
materially harder to ship solo in 8 days than any PWA on this list, and the demo depends on
having a physical/emulated Android device on stage, not just a browser tab. If the team
picks this idea, budget the first 2 days entirely to proving the core enumeration works
before committing further, and have a fallback scope (e.g., limit to a curated list of the
most common stalkerware package names rather than full behavioral signature-matching) ready
if time runs short.

#### C2 — Early Warning: Grooming/Coercion Pattern Analyzer

**Problem:** Existing anti-abuse tools intervene *after* exploitative material exists
(evidence preservation, takedown requests) — by then real harm has already occurred. The
900% rise in non-consensual synthetic content and the sextortion pattern documented in §1
(AI-generated video calls, screen-recording without consent, escalating blackmail) usually
follows an earlier grooming/coercion conversation that goes unnoticed until it's too late.

**Gap:** This is deliberately positioned as a *before* tool, distinct from an evidence-
vault/takedown tool (a genuinely different point in the incident timeline, not a reskin).

**Solution:** User pastes or screenshots (OCR'd) a suspicious conversation. An LLM,
prompted specifically for known grooming/coercion linguistic patterns (isolation language,
escalating personal requests, secrecy demands, financial/image requests), returns a risk
score with the specific flagged lines highlighted and a plain-language explanation — never
a bare "safe/unsafe" verdict, always the reasoning shown, so the user can judge for
herself rather than blindly trust a black-box score.

**Stack:** Next.js/Vercel, an LLM API for classification with a carefully engineered prompt
(pattern-based, explicitly not claiming to "detect predators," just to flag concerning
language patterns for the user's own judgment), a vision/OCR API for screenshot input.

**8-day build:** Days 1–2 text-paste analysis flow with the classification prompt. Days
3–4 screenshot OCR input. Day 5 UI for highlighted flagged lines + explanation. Days 6–7
test against a range of scripted example conversations (clearly disclosed as
research-derived scripted examples, not real victim data) spanning low-to-high risk. Day 8
demo + submission.

**Demo:** Presenter pastes a scripted example conversation live, and the tool highlights
the specific concerning lines with a risk score and reasoning in real time.

**Limitations, stated honestly:** LLM-based pattern-flagging is not a validated clinical or
forensic tool — the pitch must frame it explicitly as a decision-support aid for the user's
own judgment, never as a definitive predator-detection system, both because that's the
honest claim and because overclaiming here is a real reputational/legal risk in a safety
context.

#### C3 — Scam Screener: Job/Matrimonial/Loan Risk Check for Women

**Problem:** Part-time job scams, fraudulent matrimonial profiles, and predatory/harassing
loan-app schemes disproportionately target women, distinct from — but adjacent to — the
sextortion/deepfake pattern in §1.

**Gap:** Generic scam-checker tools exist broadly; a women-safety-specific framing (matri-
monial-profile and part-time-job-scam pattern libraries specifically) is a real but modest
differentiator, not a novel category.

**Solution:** User pastes a suspicious message, job posting, or profile description. An LLM
classification pass, backed by a small researched pattern library of known scam
structures, returns a risk score and explanation, plus a link to the correct reporting
channel (1930, cybercrime portal) if risk is high.

**Stack:** Next.js/Vercel, LLM API for classification, a small researched static pattern
library, no exotic dependencies.

**8-day build:** Days 1–3 pattern library research + classification prompt. Days 4–5 UI +
reporting-channel routing. Days 6–7 test against real public scam examples (news-reported
cases, cited not invented). Day 8 demo + submission.

**Demo:** Paste a scripted scam message live, get an immediate risk score and explanation.

**Limitations, stated honestly:** This idea reads as financial-fraud-adjacent rather than
physical/sexual-safety-coded, which is a real theme-fit risk in front of a women's-safety-
specific judging panel — worth weighing against the other two Cyber Safety ideas, which
sit more squarely in the competition's stated themes.

---

### Track: Community Safety

#### Com1 — Circle Commute: Verified Group Commute Coordinator

**Problem:** Being alone is a large share of unsafe-travel risk, but matching with a
verified stranger (even email-domain-verified) still introduces a real trust gap.

**Gap:** This is a deliberate refinement, not a new category — matching is restricted to
users who share at least one mutual connection already inside the verified network (e.g.,
same hostel floor, same friend group), not just the same email domain, closing the
"verified stranger" gap a step further than a domain check alone can.

**Solution:** College-email-verified sign-up; users post commute windows ("leaving library
9pm"); the app surfaces only matches with at least one mutual connection in the network,
and shares live location between matched users plus each user's own chosen trusted contact
for the duration of the walk.

**Stack:** Firebase Auth with domain restriction, Firestore for the mutual-connection graph
and matching queue, Google Maps for live tracking, Vercel hosting.

**8-day build:** Days 1–2 auth + domain restriction. Days 3–4 mutual-connection graph +
matching logic. Days 5–6 live location sharing between matched pairs. Day 7 end-to-end test
with two real devices. Day 8 demo + submission.

**Demo:** Two phones matching live on a shared commute window, live map updating on both in
real time in front of judges.

**Limitations, stated honestly:** Requiring a mutual-connection graph makes the cold-start
problem *worse* than a simple domain check, not better — this needs a critical mass of
pre-existing connections to produce any matches at all, and the prototype itself can't
prove that will happen; say so rather than imply the demo proves adoption.

#### Com2 — SHe-Box Smart Intake Wizard

**Problem:** UGC now formally requires institutions to route harassment complaints through
the government's SHe-Box portal and report via SAKSHAM (§1) — a real, current compliance
requirement, not a hypothetical one — but the portal itself is a bureaucratic form, and
students facing a genuine incident often don't know how to structure a complaint that will
be taken seriously.

**Gap:** Positioned explicitly as a **compliance-tech front-end** to the real government
system, not a competing dashboard — this is a materially stronger institutional pitch than
a generic from-scratch ICC tracker, because it plugs into a requirement colleges already
have to meet.

**Solution:** A calm, structured conversational intake (same trauma-informed pattern as
AI2, applied to the campus/POSH context specifically) helps a student describe an incident,
classifies its severity and the correct POSH provision, and generates a submission-ready
draft formatted for SHe-Box/institutional ICC submission — again, never auto-filing, always
a reviewable draft.

**Stack:** Next.js/Vercel, LLM API for intake and drafting, a small researched POSH-
provision reference table, Firebase for draft storage.

**8-day build:** Days 1–3 intake flow + POSH-provision research (must be accurate — this is
a legally sensitive domain). Days 4–5 draft generation formatted to match SHe-Box's actual
required fields. Days 6–7 test with scripted scenarios. Day 8 demo + submission.

**Demo:** Scripted intake conversation live, producing a structured, correctly-formatted
draft on screen.

**Limitations, stated honestly:** This is the weakest live-demo story on the entire list —
fundamentally a form-generation tool, and it depends on accurately representing SHe-Box's
real submission format and POSH provisions, which needs genuine legal research the team
must actually do, not assume; a POSH-Act claim proven wrong under judge questioning is a
real credibility risk in this specific idea more than any other.

#### Com3 — Safe Stop: Hyperlocal Verified Safe-Zone Network

**Problem:** In an unsafe-travel moment, knowing the *nearest place that will actually help*
— not just calling someone far away — matters, and no existing baseline app routes to a
physical safe point.

**Gap:** SafetiPin scores area safety in general; it doesn't route to a specific,
opted-in, contactable safe location. Community "safe shop" networks exist as a concept in
some international/pilot contexts but nothing India-specific surfaced in this research
pass — a moderate, not category-defining, gap.

**Solution:** Local businesses (shops, pharmacies, cafes) opt in as verified "safe stops."
A user in distress taps SOS; the app routes her to the nearest verified stop and sends that
business a real-time alert ("someone needs help, arriving now") alongside the usual
trusted-contact alert — creating a hyperlocal responder layer, not just a passive map.

**Stack:** Next.js/Vercel, Google Maps for routing, Firestore for the verified-business
registry and live alert dispatch, a lightweight business-facing sign-up/alert-receiving
interface as a second surface.

**8-day build:** Days 1–2 business registry + sign-up flow. Days 3–4 nearest-stop routing
logic. Day 5 dual alert dispatch (business + trusted contact). Days 6–7 test end to end
with seeded (disclosed) business data. Day 8 demo + submission.

**Demo:** Tap SOS live, watch the map highlight the nearest safe stop and a second "business"
device receive the real-time alert simultaneously with the trusted-contact alert.

**Limitations, stated honestly:** Same cold-start problem as any two-sided network —
usefulness is capped by verified-business density, which the prototype can't demonstrate at
real scale; seed the demo with clearly disclosed test data, and building a second
business-facing interface is genuinely more scope than a single-sided app, a real 8-day
schedule risk.

---

## 4. Full scoring table (ranked)

| Rank | Idea | Track | Problem (1-5) | Gap (1-5) | Demo-Causality (1-5) | Feasibility (1-5) | Impact (1-5) | Total /25 |
|---|---|---|---|---|---|---|---|---|
| 1 | **AI1 — Pocket Pulse (motion-gesture SOS)** | AI For Safety | 4 | 4 | **5** | 4 | 4 | **21** |
| 2 (tie) | **P1 — Saathi Call (AI voice companion)** | Personal Safety | 4 | 4 | **5** | 3 | 4 | **20** |
| 2 (tie) | **C1 — Kavach Scan (stalkerware audit)** | Cyber Safety | 5 | 5 | 4 | 2 | 4 | **20** |
| 4 (tie) | P3 — Trip Watch (unlicensed-ride verification) | Personal Safety | 4 | 4 | 3 | 4 | 4 | 19 |
| 4 (tie) | C2 — Early Warning (grooming pattern analyzer) | Cyber Safety | 4 | 4 | 3 | 4 | 4 | 19 |
| 6 (tie) | AI2 — Structured Complaint Copilot | AI For Safety | 4 | 3 | 3 | 4 | 4 | 18 |
| 6 (tie) | Com2 — SHe-Box Smart Intake Wizard | Community Safety | 4 | 4 | 2 | 4 | 4 | 18 |
| 8 (tie) | P2 — Duress PIN (decoy-mode lock) | Personal Safety | 3 | 3 | 3 | 5 | 3 | 17 |
| 8 (tie) | Com1 — Circle Commute (verified group commute) | Community Safety | 3 | 3 | 4 | 4 | 3 | 17 |
| 8 (tie) | Com3 — Safe Stop (hyperlocal safe-zone network) | Community Safety | 4 | 3 | 4 | 3 | 3 | 17 |
| 11 (tie) | AI3 — Passive Anomaly Escalation | AI For Safety | 4 | 3 | 3 | 3 | 3 | 16 |
| 11 (tie) | C3 — Scam Screener (job/matrimonial/loan) | Cyber Safety | 3 | 3 | 3 | 4 | 3 | 16 |

---

## 5. Round 1 cut — top 5 of 12

**Kept:** AI1 (21), P1 (20), C1 (20), P3 (19), C2 (19).

**Cut, with reasons:**
- **AI2 / Com2 (18 each)** — both are genuinely solid, evidenced, well-researched ideas,
  but both share the same structural weakness: a document-generation demo has no live
  causal "it worked" moment, which is the tiebreaker criterion this whole exercise is
  built around. Keep either as written-submission breadth material if the team wants range
  in the PPT, but neither should lead.
- **P2 (17)** — highest feasibility on the list (5/5, trivially buildable) but the
  narrowest problem scope and a quieter demo; a safe, low-risk backup, not a lead.
- **Com1 (17)** — the mutual-connection-graph refinement is real but makes the underlying
  cold-start problem *worse*, not better, which caps how convincing the demo can be
  without visibly seeded data.
- **Com3 (17)** — a two-sided network (users + businesses) is more build scope than any
  single-sided idea on this list for the same 8 days; cut on feasibility risk relative to
  its score.
- **AI3 (16)** — conceptually sound but the hardest of the 12 to stage convincingly live
  without looking contrived (waiting for "incapacitation" to trigger).
- **C3 (16)** — real gap, but the weakest theme-fit against a women's-safety-specific
  judging panel; a financial-fraud tool reads as adjacent, not central, to the brief.

## 6. Round 2 cut — top 3 of 5, pressure-tested

**AI1 — Pocket Pulse.** Steelmanned objection: "a shake/gesture trigger will misfire
constantly against normal phone handling." Response, honestly: true, and the pitch must
show a measured false-positive rate from real testing (§ idea detail above), not claim
perfection — but the *category* of trigger (covert, hands-free, silent) fills a real gap
none of the five baseline apps cover, and the live demo (gesture through fabric, no visible
interaction, alert lands on a second device) is genuinely undeniable in a way a described
feature never is. No platform dealbreaker found — `DeviceMotionEvent` is broadly supported
on modern mobile browsers, with the known iOS permission-prompt caveat already scoped into
the build plan. **Survives.**

**P1 — Saathi Call.** Steelmanned objection: "realtime voice AI latency will break the
illusion live, in front of the exact audience that matters most." Response, honestly: this
is the single largest technical risk of the three survivors — worth explicit rehearsal time
and a scripted fallback recording as insurance, not something to discover on demo day. The
gap and demo-causality case is genuinely the strongest of all 12 ideas if it works — a
judge hearing an actual AI conversation happen, then watching a duress phrase silently
trigger an alert mid-sentence, is a stronger single moment than any other idea here. The
honest tradeoff is real technical risk for the single best possible outcome. **Survives, flagged high-risk-high-reward.**

**C1 — Kavach Scan.** Steelmanned objection: "no PWA can enumerate installed apps and
permissions — this requires native Android work that is genuinely the hardest build on
this list, in the same 8 days as everything else." Response, honestly: correct, and this is
the real reason it isn't the #1 recommendation despite having the single strongest
problem+gap combination of all 12 ideas (5/5 and 5/5 — no other idea ties that). If the
team has any member with prior React Native/Android experience, this idea's differentiation
is worth the risk; if not, the 2-day de-risking checkpoint in the build plan above is a hard
go/no-go gate, not optional. **Survives as the high-differentiation, high-risk option, not
the safe recommendation.**

---

## 7. Final recommendation

### Lead pick: AI1 — Pocket Pulse (Silent Motion-Gesture SOS), AI For Safety track

It has the highest total score (21/25), ties for the highest demo-causality score (5/5,
the named tiebreaker), and — unlike its two closest competitors — carries no unusual
technical risk: it's a pure PWA, buildable solo in 8 days on Vercel + Firebase, with a
well-understood platform caveat (iOS motion-permission prompts) that's already accounted
for in the build plan rather than discovered late. The demo moment — a gesture performed
invisibly through fabric, triggering a live alert on a second device with zero visible
interaction — is the single cleanest "how did that just happen" beat across all 12 ideas,
and it fills a real, evidenced gap (every baseline app requires a visible tap or an audible
phrase) rather than a marginal one.

**Mapped to the organizer's 5-slide PPT structure:**
- **Slide 1 (Problem Statement):** hands-occupied, can't-speak, can't-look-at-phone
  scenarios are invisible to every existing trigger mechanism; cite the NCRB/NFHS baseline
  from §1 for why unsafe-travel/assault scenarios specifically demand a silent, hands-free
  trigger.
- **Slide 2 (Problem Analysis):** name the five baseline apps from §1, show they're all
  tap/voice/SMS-triggered, state the covert-motion-trigger gap plainly.
- **Slide 3 (Proposed Solution):** the gesture-detection flow, honestly framed as a tuned
  heuristic (not a trained ML classifier), with the measured false-positive rate from
  real testing shown on the slide, not hidden.
- **Slide 4 (Technical Architecture):** `DeviceMotionEvent` → peak-detection heuristic →
  Firebase Cloud Function → WhatsApp click-to-chat alert dispatch, all on Vercel/Firebase.
- **Slide 5 (Expected Impact):** broad applicability (no setup friction beyond a one-time
  permission grant), honest scope limits (active-session only, same as any browser-based
  tool), a believable path to wider deployment without overclaiming.

### Strong alternate / hedge: P1 — Saathi Call (AI Voice Companion), Personal Safety track

If the team is confident about realtime voice-API latency and wants to gamble on the single
most memorable possible demo moment across all 12 ideas, this is the pick — it ties for the
top demo-causality score and has the strongest gap story after C1. The honest tradeoff:
strictly higher technical risk than AI1 for a comparable (arguably better, if it lands)
payoff. A reasonable team decision is to prototype AI1 as the safe lead and keep P1's voice-
call flow as a stretch feature added only if AI1 ships early with days to spare.

**Not recommended as the lead, despite genuinely being the most differentiated idea on the
list:** C1 (Kavach Scan). Its problem+gap case is the strongest of all 12 by a real margin,
and the team should seriously consider it *only if* someone on the team already has native-
Android/React-Native experience — absent that, its feasibility risk (2/5, the lowest score
anywhere in this sheet) is a genuine threat to having a working demo at all, which would
cost more in front of judges than the differentiation gains.

---

## 8. Not in scope for this deliverable

Per the user's own 4-stage sequencing (idea sheet → PPT → product build → demo video), this
file stops at the idea/scoring stage. The following are explicitly the next steps, not
covered here:
- Screen-by-screen flow design for the chosen idea.
- PPT/Figma-slides construction (reserved for `.claude/skills/case-competition-deck/` and
  this repo's Figma deck workflow per `CLAUDE.md` §0, once an idea is locked in).
- Any product build directory, repo, or Claude Code implementation work.
- Demo video recording/OBS setup.
