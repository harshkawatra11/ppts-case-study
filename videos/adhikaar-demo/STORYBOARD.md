---
format: 1920x1080
duration: 95s
message: "Adhikaar turns filing an RTI, understanding your rights, and checking scheme eligibility into one guided flow, where a deterministic legal engine decides and AI only phrases"
arc: Demo Loop (walkthrough) into Feature-Benefit Cascade (technical explainer)
audience: general viewers and evaluators assessing a civic-tech product for India
mode: autonomous
---

## Video direction

- **Palette system** (from `frame.md`, roles not raw hex): `ink` (#241A10) for all text/hairlines on `cream` (#F2EAD9) in walkthrough-half frames and typographic frames alike; `coral` (#93691F, the remixed gilt-gold "voltage") is the ONE scarce accent — hero numerals, active states, the drafted-appeal glow, the wordmark stroke; `navy`/`navy-soft`/`navy-elev` is the code-surface register reserved for the technical-explainer half's diagram/stack frames (Frames 9–13), giving that half a distinct "under the hood" register the viewer feels immediately on the Frame 8→9 cut. Screen-capture frames (1, 3–8) keep the real captured cream/ink/seal palette untouched — never re-skin a real screenshot.
- **Motion grammar + reveal model**: long-tail `power3` settles everywhere, no bounce/overshoot except the wordmark's single spring-pop landing in Frame 14 (explicitly playful, once, at the very end). Every frame reveals piece-by-piece on its spoken cue, back ~50%-weighted; nothing dumps at t=0. Screenshot-based frames (3–8) reveal via cursor-led focus + crop/zoom moves onto the real captured UI, never by re-animating fabricated DOM.
- **Rhythm / held-frame allocation**: Frame 5 (deadline + auto-drafted appeal) is the walkthrough half's held climax — it earns the longest duration and a genuine still hold on the appeal text once revealed. Frame 12 (deterministic core) is the technical half's held climax, closing on the still two-line "The model proposes. The code decides." Frames 2, 9, and 14 are deliberate breather/title beats — short, low-density, mostly typographic stillness — so the video doesn't run at one energy throughout.
- **Negative list**: no invented UI chrome standing in for real screenshots; no browser chrome/scrollbars visible in captured frames beyond what was actually captured; no purple-blue generic "AI" gradient bloom; no bouncy/elastic entrances (Frame 14's single spring-pop excepted); no lazy breathing loops; no slow pan/push in any frame's back half; never render, reference, or zoom into the "GitHub" nav button's destination on any captured screenshot; never render any hackathon name anywhere, sourced from any crawled text or otherwise.

## Frame 1 — Hook: the number

- type: hook
- blueprint: dataviz-countup
- status: outline
- src: compositions/frames/01-hook.html
- duration: 8.32s
- transition_in: cut
- scene: The homepage's own KPI card counts up on a cream ground — a real government disclosure-register figure.
- voiceover: "Two thousand seven hundred ninety-seven of three thousand one hundred twenty-eight. Unanswered — by the government's own count."
- asset_candidates: screenshots/scroll-000.png — KPI card region "2,797 / 3,128", sourced to Department of Land Resources RTI disposal register

Cold open on the single strongest evidence-based claim on the page: one government
department's own disposal register shows 2,797 of 3,128 applications returned to the
applicant unanswered. No product yet — the number carries the whole tension. Source stays
legible on screen (Department of Land Resources RTI disposal register, 2024 edition).

- focal: screenshots/scroll-000.png (KPI numeral card, cropped tight to "2,797 / 3,128" + its source line)
- roles: KPI-card = cutout · homepage background = background (dimmed ~40%, out of focus)
- sfx: riser (into the count-up)

Reproduce dataviz-countup's count-up-ring signature, adapted to this product's real card
(no invented ring graphic — the numerals themselves are the hero).

Scene 1 (0.0–1.5s): solid dimmed cream backdrop; "2,797" counts up 0→2,797 dead-center in coral, oversized — Centered template, ~45% of frame. Nothing else on screen yet.
Scene 2 (1.5–3.2s): as the VO says "out of three thousand one hundred twenty-eight," "/ 3,128" settles in beside it in ink, smaller weight — per-word staggered reveal, hierarchy by size (3:1).
Scene 3 (3.2–5.0s): as the VO lands "unanswered — by the government's own count," the source line ("Department of Land Resources RTI disposal register") fades up small beneath, and the frame holds still — no further motion, subtle jitter at most.

## Frame 2 — Thesis: not a records problem

- type: pain_point
- blueprint: kinetic-type-beats
- status: outline
- src: compositions/frames/02-thesis.html
- duration: 5.568s
- transition_in: cut
- scene: The homepage's own headline builds phrase by phrase on a bare cream field.
- voiceover: "You don't have a records problem. You have a government problem — and it was never one question."
- asset_candidates: screenshots/scroll-000.png — hero headline text and the "one citizen, four disconnected tools" eyebrow

Real homepage copy, reset as kinetic type. Names the actual thesis: a citizen is really
asking four questions at once (eligible? what are my rights? which office? will this
survive contact with a bureaucracy?) and today those four live in four places that don't
talk to each other.

- focal: none (typographic; homepage headline text quoted, not screenshotted)
- roles: n/a
- sfx: none

Compose from kinetic-type-beats' hard-cut word-swap signature: two flat statements, hard
cut between them, no product yet.

Scene 1 (0.0–2.0s): "You don't have a records problem." lands centered on bare cream, per-word staggered reveal — Centered template, generous negative space.
Scene 2 (2.0–4.0s): hard cut (not fade) to "You have a government problem — and it was never one question." in ink with "government problem" in coral for weight contrast — Centered, hierarchy by color + weight. Holds to the cut.

## Frame 3 — Product intro: one click in

- type: product_intro
- blueprint: cursor-ui-demo
- status: outline
- src: compositions/frames/03-product-intro.html
- duration: 4.267s
- transition_in: crossfade
- scene: A cursor lands on "Enter as a demo citizen" on the login page; the app resolves straight into a real, populated "My filings" list.
- voiceover: "One click in — and you're looking at real filings, already in motion."
- asset_candidates: screenshots/login-page.png — the real one-click demo button and demo credentials box; screenshots/my-filings-list.png — the resulting My filings table with status chips and a deadline column

No sign-up flow to show, and none invented. The real demo entry point IS the product story:
zero typing, straight into a caseload that already has history — filings triaged, filings
drafted, some awaiting response.

- focal: screenshots/my-filings-list.png (the populated table is the payoff of this beat)
- roles: login-page = supporting (opening frame) · my-filings-list = cutout (payoff, full-bleed)
- sfx: cursor-click-ripple (on the demo-citizen click), soft whoosh (on the crossfade into the list)

Reproduce cursor-ui-demo's cursor-led-look signature: a visible cursor performs the one
click, the surface changes state on it.

Scene 1 (0.0–2.5s): login-page screenshot full-bleed, a visible cursor moves to and lands on "Enter as a demo citizen" — cursor click + ripple on contact — Centered UI template, real captured chrome only.
Scene 2 (2.5–6.0s): cut-the-curve seam into the my-filings-list screenshot, cropped to hide nav/footer edges; as the VO says "real filings, already in motion," the table rows reveal top-to-bottom in a quick staggered wipe (not all at once) — Full-width strip, ≥3 rows visible.

## Frame 4 — Key feature: the jurisdiction engine catches a mistake

- type: feature_showcase
- blueprint: cursor-ui-demo
- status: outline
- src: compositions/frames/04-jurisdiction.html
- duration: 9.877s
- transition_in: crossfade
- scene: Open Suresh Patil's land-record filing; scroll to "Who is legally required to answer you" where a flagged panel explains the wrong authority was selected.
- voiceover: "Before anything is drafted, Adhikaar checks who's allowed to answer. Here, it caught a mistake — a State matter, wrongly headed to a Central office."
- asset_candidates: screenshots/filing-jurisdiction-mismatch-caught.png — flagged warning panel citing DoPT OM No. 10/2/2008-IR, then the correct State authority with a 78% confidence score and reasoning

The single clearest proof of the deterministic jurisdiction engine: it does not just name an
office, it explains why a Central authority was wrong for a State subject, cites the actual
rule, and proposes the corrected authority with its own confidence and reasoning — this is
the beat that earns the "the code decides" claim paid off in Frame 12.

- focal: screenshots/filing-jurisdiction-mismatch-caught.png (the flagged warning panel is the hero)
- roles: filing-jurisdiction-mismatch-caught = cutout, cropped tight around the warning box + the corrected-authority card
- sfx: none (let the read carry it)

Adapt cursor-ui-demo: no cursor click needed here (this is a scroll-and-read beat, not an
interaction), so the signature move becomes a slow scroll-reveal onto the flagged panel —
keeps the "surface changes state" spirit while fitting a read-heavy beat.

Scene 1 (0.0–2.5s): filing header + grievance text visible, dimmed; as the VO says "checks who's actually allowed to answer," a slow scroll/pan moves the frame down toward the jurisdiction section — camera pan, asymmetric 70/30.
Scene 2 (2.5–5.0s): the flagged amber-bordered warning panel ("Land and land revenue is a State subject... under DoPT OM No. 10/2/2008-IR...") lands centered and is highlighted with a subtle marker-sweep under the key phrase "will be returned to the applicant" — Centered, ~50% of frame.
Scene 3 (5.0–7.0s): the corrected authority card (Revenue and Forest Department, Government of Maharashtra, confidence 78%) reveals beneath it as the VO finishes "the wrong office" — per-word staggered reveal, holds still to the cut.

## Frame 5 — Key feature: the statutory clock, and an appeal drafted the moment it lapsed

- type: feature_showcase
- blueprint: cursor-ui-demo
- status: outline
- src: compositions/frames/05-deadline-appeal.html
- duration: 9.216s
- transition_in: crossfade
- scene: Scroll to "Your deadline" on Ananya Iyer's filing — a missed 30-day response deadline, a live 9-day appeal countdown, then the auto-drafted first-appeal letter beneath it.
- voiceover: "Every filing runs on the law's own clock. This deadline passed — so the appeal was drafted automatically, citing the exact sections."
- asset_candidates: screenshots/filing-deadline-countdown-and-appeal-text.png — response due marked MISSED, first appeal due showing 9 days left, then the drafted appeal heading; screenshots/filing-drafted-appeal-fullscroll.png — the full appeal letter body citing sections 7(2), 19(1), 7(6)

The money shot for the casework half: a live statutory countdown, a missed deadline
honestly marked MISSED (not hidden), and a legally-cited appeal letter the system produced
on its own the day the clock ran out — for human review, not auto-sent.

- focal: screenshots/filing-deadline-countdown-and-appeal-text.png (the "Your deadline" panel, MISSED + 9 DAY(S) LEFT chips)
- roles: filing-deadline-countdown-and-appeal-text = cutout (primary) · filing-drafted-appeal-fullscroll = supporting (scroll payoff)
- sfx: soft impact (on the MISSED chip reveal)

Reproduce cursor-ui-demo's cursor-led-look signature as a scroll-driven reveal (this is the
held climax of the walkthrough half — allocate it the longest duration and end on a real
still hold, per Video direction).

Scene 1 (0.0–2.5s): "Response due (30 days)" row lands with the MISSED chip in coral, held briefly as the VO says "this one's response deadline passed" — Centered, hierarchy by color contrast.
Scene 2 (2.5–5.0s): "First appeal due (deemed refusal)" row reveals beneath it with "9 DAY(S) LEFT" as the VO says "so the appeal was drafted automatically" — per-word staggered reveal, asymmetric 60/40.
Scene 3 (5.0–8.0s): scroll/pan down into the drafted appeal letter text (opening lines: "FIRST APPEAL UNDER SECTION 19(1)... Section 7(2)... 19(6)... 7(6)") as the VO names "the exact sections" — slow camera pan onto the cited section numbers, then a genuine still hold — no further motion, the read finishes in silence before the cut.

## Frame 6 — Key feature: starting a filing in plain language

- type: feature_showcase
- blueprint: cursor-ui-demo
- status: outline
- src: compositions/frames/06-start-filing.html
- duration: 4.096s
- transition_in: crossfade
- scene: The "Start a new filing" guided interview, a single question already answered in a citizen's own words.
- voiceover: "Starting one is just describing what went wrong — in your own words."
- asset_candidates: screenshots/start-filing-guided-interview.png — "What went wrong?" prompt with a real typed example already filled into the textarea

The guided interview's own copy makes the point better than any voiceover could — keep it
legible on screen.

- focal: screenshots/start-filing-guided-interview.png (headline + filled textarea)
- roles: start-filing-guided-interview = cutout, cropped to the headline + textarea + Continue button
- sfx: type-tick (light, under the second scene)

Reproduce typewriter-reveal's live-typing signature, adapted onto the real captured
textarea instead of an invented text field.

Scene 1 (0.0–1.5s): "What went wrong?" headline + subhead settle in, Centered template.
Scene 2 (1.5–5.0s): the real typed example text appears in the textarea via type-on-with-caret as the VO speaks "describing what went wrong, in your own words" — caret blink visible, text arrives in sync with the VO's cadence, holds on the filled box + Continue button.

## Frame 7 — Key feature: the Rights Navigator cites its source

- type: feature_showcase
- blueprint: cursor-ui-demo
- status: outline
- src: compositions/frames/07-rights-navigator.html
- duration: 5.184s
- transition_in: crossfade
- scene: A typed rights question resolves into cited answer cards, each headed by its exact statutory section.
- voiceover: "Ask a right in plain language, and the answer cites the actual law — not a guess."
- asset_candidates: screenshots/rights-navigator-answer.png — cited answer cards headed by exact statutory sections (Model Tenancy Act 2021 Section 12, RTI Act 2005 8(1)(a)), each with a "Read the text" link

- focal: screenshots/rights-navigator-answer.png, cropped to the question box + first cited answer card
- roles: rights-navigator-answer = cutout
- sfx: none

Reproduce cursor-ui-demo's cursor-led-look signature as a read-driven reveal: the question
is already typed, the cited card is the payoff.

Scene 1 (0.0–2.0s): the typed question ("Can my landlord refuse to return my security deposit without giving a reason?") sits in the box, Centered template.
Scene 2 (2.0–5.0s): the first answer card reveals beneath it as the VO says "cites the actual law," with the citation line ("Model Tenancy Act, 2021, Section 12") emphasized via keyword glow — per-word staggered reveal, holds on the citation.

This closes with a citation held on screen, not a generic checkmark — the citation IS the
proof.

## Frame 8 — Key feature: scheme eligibility, with the reason why

- type: feature_showcase
- blueprint: cursor-ui-demo
- status: outline
- src: compositions/frames/08-schemes.html
- duration: 6.997s
- transition_in: crossfade
- scene: The Scheme Eligibility Reader form, framed by its own promise of a reasoned verdict rather than a bare yes or no.
- voiceover: "Scheme eligibility works the same way — not a yes or no, but which rule you meet, and which one you don't."
- asset_candidates: screenshots/schemes-form-empty.png — headline "Do you actually qualify?" and its promise of an exact rule applied, criterion by criterion, not a bare yes or no

Closes the walkthrough half on the same honesty principle as Frames 4 and 7: the product
always shows its reasoning, never just a verdict.

- focal: screenshots/schemes-form-empty.png, cropped to headline + promise line
- roles: schemes-form-empty = cutout
- sfx: none

Compose from the same read-driven reveal as Frames 5 and 7, closing the walkthrough half on
a matching rhythm rather than reaching for a new blueprint.

Scene 1 (0.0–2.0s): "Do you actually qualify?" headline settles, Centered template.
Scene 2 (2.0–5.0s): as the VO says "which rule you meet, and which one you don't," the promise line ("every answer here shows the exact rule applied, criterion by criterion") reveals beneath it — per-word staggered reveal, holds still into the hard cut to Frame 9.

## Frame 9 — Section title: how it's built

- type: branding
- blueprint: titlecard-reveal
- status: outline
- src: compositions/frames/09-section-title.html
- duration: 1.984s
- transition_in: cut
- scene: A clean title card on the dark code-surface tone: "How it's actually built."
- voiceover: "Here's how it's actually built."
- asset_candidates: none — typographic title card, no capture asset

Hard pivot from screen capture to the typography-driven technical half. Signals the tone
shift plainly rather than a soft dissolve.

- focal: none (typographic title card)
- roles: n/a
- sfx: whoosh (on the cut from Frame 8)

Reproduce titlecard-reveal's single-restrained-move signature: one clean line, one move,
then a still hold — on the navy code-surface register (Video direction).

Scene 1 (0.0–1.2s): navy-soft ground; the line slides up + crossfades in, centered, coral rule beneath it.
Scene 2 (1.2–3.0s): held still, no further motion — the breather beat before the denser Frames 10–13.

## Frame 10 — Stack

- type: feature_showcase
- blueprint: grid-card-assemble
- status: outline
- src: compositions/frames/10-stack.html
- duration: 6.869s
- transition_in: cut
- scene: Six labeled tiles self-assemble in a staggered cascade: Next.js 16, App Router, TypeScript, React 19, Firestore, Vercel.
- voiceover: "Next.js 16, the App Router, TypeScript, React 19, Firestore — deployed on Vercel."
- asset_candidates: none — typographic/diagram frame, no capture asset

- focal: none (typographic/diagram)
- roles: n/a
- sfx: soft impact (per tile landing)

Reproduce grid-card-assemble's staggered-cascade signature exactly: N items self-assemble
into a grid, camera holds.

Scene 1 (0.0–1.0s): bare navy-soft ground, empty grid guide (near-invisible hairlines).
Scene 2 (1.0–5.0s): tiles cascade in one per spoken word — "Next.js 16" first (largest, top-left), then "App Router," "TypeScript," "React 19," "Firestore," landing in reading order as each is named — grid-card-assemble cascade, 3×2 grid, ≥3 depth layers via drop-shadow stagger.
Scene 3 (5.0–6.0s): "Vercel" lands last, centered-bottom, coral accent tile, whole grid holds still.

## Frame 11 — Security: a deliberate design choice, not a buzzword

- type: benefit_highlight
- blueprint: comparison-split
- status: outline
- src: compositions/frames/11-security.html
- duration: 11.371s
- transition_in: cut
- scene: Two paired cards enter with mirrored book-open tilts — "Firebase session" on the left, "Adhikaar's signed cookie" on the right — and hold, with a badge on the right explaining why.
- voiceover: "Sign-in uses real Firebase Authentication. But instead of a bare session, the app issues its own signed cookie — because its service account is scoped to least privilege."
- asset_candidates: none — typographic/diagram frame, no capture asset

This is the single most deliberate security decision in the product and deserves its own
frame rather than a bullet buried in the stack list: least-privilege by design, stated as
the reason, not just the fact.

- focal: none (typographic/diagram)
- roles: n/a
- sfx: none

Reproduce comparison-split's mirrored-book-open-tilt signature exactly: two paired items of
equal weight, opposite entrances, a punctuating badge.

Scene 1 (0.0–2.0s): "Firebase Authentication" card enters from the left with a book-open tilt as the VO says "real Firebase Authentication" — split-tilt cards, left 50%.
Scene 2 (2.0–4.0s): "Adhikaar's signed cookie" card enters from the right with the mirrored tilt as the VO says "issues its own signed cookie instead" — split-tilt cards, right 50%, both now held side-by-side.
Scene 3 (4.0–7.0s): a small badge spring-pops onto the right card reading "least-privilege service account" as the VO explains why; frame holds still to the cut — split-screen comparison, hierarchy via the badge's coral fill.

## Frame 12 — The deterministic core, tested

- type: benefit_highlight
- blueprint: dataviz-countup
- status: outline
- src: compositions/frames/12-deterministic-core.html
- duration: 12.757s
- transition_in: cut
- scene: A count-up on "160+" automated tests, then the line resolves onto a two-part statement: the model proposes, the code decides.
- voiceover: "Jurisdiction, legal soundness, deadlines — none of that is an AI guess. It's deterministic code, tested over one hundred sixty times. The model proposes. The code decides."
- asset_candidates: none — typographic/diagram frame, no capture asset

The single most important technical claim in the video — the whole design philosophy in
one line.

- focal: none (typographic/diagram)
- roles: n/a
- sfx: soft impact (on "160")

Reproduce dataviz-countup's count-up signature for the numeral, then hands off to
kinetic-type-beats' hard-cut for the two-part closing statement — a deliberate blueprint
handoff within one Adapt, justified because the beat itself has two distinct halves (a
number, then a thesis).

Scene 1 (0.0–2.2s): three short words land one at a time, each on a bare line, as the VO lists them — "Jurisdiction." "Legal soundness." "Deadlines." — per-word staggered reveal, Centered, stacked.
Scene 2 (3.0–5.5s): as the VO says "tested over one hundred sixty times," "160+" counts up 0→160 in coral, oversized, with "automated tests" settling beside it — value-scaled counter, Centered, ~45% of frame.
Scene 3 (5.5–8.0s): hard cut to the two-line finale — "The model proposes." then, a half-beat later, "The code decides." in coral, larger weight — kinetic beat-slam, equal-weight stacked lines, holds still to the cut (the technical half's climax; per Video direction, a real still hold here).

## Frame 13 — Honest retrieval: the confidence floor

- type: benefit_highlight
- blueprint: kinetic-type-beats
- status: outline
- src: compositions/frames/13-confidence-floor.html
- duration: 8.469s
- transition_in: cut
- scene: Short type beats build the claim: a custom lexical search engine, then a confidence floor, then the decline behavior.
- voiceover: "The Rights Navigator's search is a lexical engine we built ourselves. Below a confidence floor, it says so — instead of guessing."
- asset_candidates: none — typographic frame, no capture asset

Pays off Frame 7's cited-answer beat with the mechanism behind it, and states the decline
behavior as a deliberate honesty feature, not a limitation.

- focal: none (typographic)
- roles: n/a
- sfx: none

Reproduce kinetic-type-beats' escalating-statement signature: short beats building to one
payoff line.

Scene 1 (0.0–2.0s): "A lexical search engine — built ourselves." lands centered as the VO opens the line — per-word staggered reveal.
Scene 2 (2.0–5.0s): hard cut to "Below a confidence floor, it says so instead of guessing." with "instead of guessing" in coral — Centered, holds still to the crossfade into Frame 14.

## Frame 14 — Brand outro

- type: branding
- blueprint: logo-assemble-lockup
- status: outline
- src: compositions/frames/14-outro.html
- duration: 4.245s
- transition_in: crossfade
- scene: The Adhikaar wordmark settles center frame on the cream ground with a short closing line beneath it.
- voiceover: "Adhikaar — filed correctly, understood clearly, checked honestly."
- asset_candidates: none — typographic brand card, no capture asset

Close on the product name alone, no hackathon reference anywhere, no CTA button invented —
just the wordmark and the three-part promise the whole video has been proving.

- focal: none (typographic brand card)
- roles: n/a
- sfx: soft chime (on the wordmark's spring-pop landing)

Reproduce logo-assemble-lockup's spring-bloomed-whole signature — the one sanctioned
overshoot moment in the whole video (Video direction negative list exception).

Scene 1 (0.0–1.5s): cream ground clears to empty; "Adhikaar" wordmark spring-pops in from zero, centered, coral stroke — the video's one deliberately playful overshoot landing.
Scene 2 (1.5–4.0s): as the VO speaks the three-part line, "filed correctly, understood clearly, checked honestly" types in beneath it in three short per-word groups timed to the three phrases — type-on with caret, then the whole card holds still, final frame.
