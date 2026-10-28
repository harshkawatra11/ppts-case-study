---
workflow: product-launch-video
flow: automation
storyboard: no
message: "Adhikaar turns filing an RTI, understanding your rights, and checking scheme eligibility into one guided flow, where a deterministic legal engine decides and AI only phrases"
destination: web/general
aspect: 1920x1080
language: en
audience: general viewers and evaluators assessing a civic-tech product for India
length: 100s
angle: two-half structure — live product walkthrough, then a plain-language technical explainer
narration: yes
---

## Intent

A demo video for Adhikaar, a live, deployed citizen-facing civic and legal empowerment
platform for India (https://adhikaar-app.vercel.app). It helps a citizen file a Right to
Information (RTI) request correctly, understand their legal rights via a Rights Navigator
grounded in real statutory text, and check eligibility for government welfare schemes, as
one connected flow. Tone: confident, clear, a little proud of specific engineering choices,
never hypey. No filler superlatives ("revolutionary", "game-changing"). Total runtime must
stay under 1 minute 50 seconds.

First half (~45-55s): a citizen actually using the product — homepage claim (a real sourced
stat: ~2,797 of 3,128 RTI applications from one government department's own disposal
register went unanswered), one-click "Enter as a demo citizen" sign-in, My filings with
real seeded cases, an open filing showing the statutory deadline countdown, Start a new
filing's guided interview, the Rights Navigator answering with a cited source, and the
Scheme Eligibility Reader giving a reasoned eligible/not-eligible verdict. Show 4-5 of these
beats well rather than cramming all of them.

Second half (~45-55s): a technical explainer, typography/diagram-driven (no real
architecture-diagram assets exist to capture) covering: Next.js 16 App Router + TypeScript +
React 19 on Vercel; Firebase Authentication with the app's own signed session cookie layered
on top as a deliberate least-privilege security choice (the service account is scoped
minimally, so a bare Firebase session would need more permission than the design allows);
Firestore as the data layer; the core legal logic (jurisdiction routing, legal-soundness
checks, deadline computation) is deterministic code, tested with 160+ automated tests — AI
(Gemini) is used only to phrase and translate, never to decide anything legally
consequential ("the model proposes, the code decides" is the single most important claim to
land clearly); and the Rights Navigator's retrieval is a custom-built lexical search engine
with a confidence floor that declines to answer rather than guessing below a threshold — an
honesty feature, stated outright.

## Assets

- Live capture of https://adhikaar-app.vercel.app — homepage, demo sign-in, My filings,
  a filing detail, new-filing interview, Rights Navigator, Scheme Eligibility Reader.

## Customizations

- Demo login: use the one-click "Enter as a demo citizen" button on /login to reach
  authenticated screens (My filings, filing detail, Rights Navigator, Scheme Eligibility
  Reader) with real seeded sample data.
- Second half renders as typography/graphic scenes (stat callouts, code/architecture-style
  diagram treatment) rather than more screen capture, since no architecture-diagram assets
  exist.

## Notes

- HARD CONSTRAINT: never mention any hackathon name, anywhere — not in narration, not in
  any on-screen text, not reused verbatim from a crawled source. Refer to the product only
  as "Adhikaar."
- Never fabricate statistics; use only the disposal-register figure and technical facts
  given in this brief.
- flow/storyboard are fixed as automation/no (autonomous, no live board) — this is a
  background, non-interactive build; post checkpoint summaries as heads-ups and continue
  rather than pausing to ask.
- No cloud TTS/BGM credentials configured; using local Kokoro (voice) and MusicGen (music),
  confirmed ready via `hyperframes auth status`.
