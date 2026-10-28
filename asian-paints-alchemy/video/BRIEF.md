---
workflow: general-video
flow: automation
storyboard: no
message: "Keep the rutile TiO2, move the air that sits inside engineered particles into the film itself, and seal it in with a second coat: 39% less TiO2 per m² in our model, at the same contrast ratio and brightness as a premium white"
destination: web/presentation
aspect: 1920x1080
language: en
audience: Asian Paints Alchemy judging panel, Case Study 1 (Future of Whiteness Development through Material Science)
length: under 120s
angle: the submitted deck, built up panel by panel in step with the narration
narration: yes
voice: user (Harsh Kawatra), to be recorded or generated later; not yet captured
---

## Intent

A two-minute pitch video for Asian Paints Alchemy, Case Study 1. The viewer watches the team's own submitted
deck assemble itself: empty panel frames fill with their tables and charts exactly when Harsh names them, the
camera moves to the panel being discussed, and the one number that decides the case (39% less TiO2 per m²)
gets its own full-screen moment. Tone: calm, analytical, plain-spoken, consulting grade; the brief rewards
clear engineering reasoning and a scalable, non-conventional answer.

**Length note.** `asian-paints-alchemy/case/01-briefs.md` carries no stated video or presentation duration limit
for the Alchemy round. In the absence of an organiser-stated cap, this brief defaults to the same hard cap as
the sibling Eurogrip project (under 120 seconds) rather than inventing a different number. If the organisers
publish a video length rule later, this file and `SCRIPT.md` must be revisited against it before recording.

## Assets

- `assets/slides/s02@3x.png` .. `s09@3x.png`: the deck's eight content slides (cover, 5 core argument slides,
  appendix, thank-you) rendered by Figma at 3x. NOT YET EXPORTED — see `README.md`. Every frame will be built
  from these; slide 1 is the organisers' own template cover and is not narrated.
- `assets/voice/raw/S01.* .. S08.*`: Harsh's eight narration takes, one per scene. NOT YET RECORDED.
- `assets/music/bed.wav`: optional quiet bed, reused from a prior project if one fits; not yet chosen.

## Customizations

- Count-up for 39% (TiO2 saved), ₹298 Cr (net materials saving a year) and 7,551 t (TiO2 avoided a year) in the
  moneyshot frame; bear/base/bull bars (15%, 39%, 65% TiO2 saved) grow against the premium reference.
- Every table reveals row by row on its spoken cue (the twelve-design screen, the cost waterfall, the scenario
  table); every chart wipes in; the camera frames the panel being discussed.
- The 12-design screen (slide 5, "THE SCREEN" rail) gets a dedicated beat: rows fill in as the narration counts
  down the alternatives rejected, landing on the one design kept.

## Notes

- No subtitles or captions of any kind, matching the Eurogrip project's standing decision for this deck style.
- Hard cap under 120 s (see length note above).
- Never re-skin, redraw or re-number the deck; the deck renders are the visual truth.
- Zero em dashes anywhere, in the script or on screen (standing project rule, `feedback_no_em_dash_no_hooks.md`).
- No rhetorical hooks, no AI-sounding phrasing; same rule.
- No question marks or exclamation marks on screen.
- Every number spoken or shown must match a number that already appears in `deck/slides/s0N.js` or in section 0
  of `research/alchemy-whiteness-research.md` exactly. Never round differently, never invent a figure.
