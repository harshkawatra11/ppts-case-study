# Asian Paints Alchemy, Case Study 1: video scaffold

Status: content-and-structure scaffold only. Nothing has been rendered, recorded, or screenshotted yet.

## What is done

- `BRIEF.md` — frontmatter and intent, mirroring `eurogrip-case/video/BRIEF.md`'s structure. States the
  voice source as not yet recorded, and flags that the Alchemy case briefs (`case/01-briefs.md`) carry no
  stated video-length rule, so this defaults to the same under-120-second cap as the Eurogrip project.
- `SCRIPT.md` — eight-scene narration draft, 300 words, about 110 seconds of speech at a 164-words-a-minute
  pace, under the 120-second cap. Every number in it traces to `deck/values.json` (via the `V.*` placeholders
  used in `deck/slides/s0N.js`) or to section 0 of `research/alchemy-whiteness-research.md`. Carries a
  pronunciation key with one explicit open question (TiO2, see below).
- `STORYBOARD.md` — eight-frame visual blueprint, one frame per script scene, each beat referencing a real
  panel title and the slide script it comes from (`deck/slides/s0N.js`).
- `frame.md` — design tokens pulled directly from `deck/_palette.js` (the purple/gold palette), converted to
  hex, plus the deck's own motion and highlight grammar carried over unchanged from the Eurogrip project's
  conventions.
- `package.json` — same `hyperframes@0.8.181` script wiring as `eurogrip-case/video/package.json`.

## What is NOT done (next session, in this order)

1. **Freeze the deck.** Confirm with the team that `deck/slides/s02.js` through `s09.js` are final (no more
   number or copy changes). The video narrates the deck; if the deck changes after the video is built, every
   downstream asset (screenshots, crops, the `SCRIPT.md` numbers) needs to be re-checked against §5 of
   CLAUDE.md ("a stale figure on one slide is worse than a round number everywhere").
2. **Export slide screenshots at 3x** (Figma `get_screenshot` or equivalent) into `assets/slides/s0N@3x.png`,
   one per slide 2 through 9. This is the step this pass deliberately skipped, per the task's own instruction,
   because the deck's final-state status could not be confirmed from this task alone.
3. **Build `scenes.json` and run the crop/skeleton decomposition**, the equivalent of
   `eurogrip-case/video/tools/prep.py`, once screenshots exist. That script cuts every named layer and
   full-panel crop out of each 3x render and paints a white "skeleton" copy, which is what lets a panel
   assemble itself on screen instead of just appearing as a flat image.
4. **Record or generate the eight narration takes** (`assets/voice/raw/S01.* .. S08.*`), using `SCRIPT.md` as
   the source text, after resolving the TiO2 pronunciation question below with the team.
5. **Copy and adapt the `tools/*.py` pipeline** from `eurogrip-case/video/tools/` (`prep.py`, `audio.py`,
   `build.py`, `check_layers.py`) once steps 1 to 4 are done and the content above is approved. This pass
   deliberately did not write these yet, since adapting them against draft content that might still change
   would be wasted work; they are cheap to port once the deck is frozen and the script is final.
6. **Build `compositions/frames/S0N.html`** per the storyboard, run the layer-partial-overlap check
   (`check_layers.py`'s equivalent), and render.

## Open question carried forward

TiO2 pronunciation is unresolved: say it as "T I O two" (letter by letter) throughout, or as "titanium
dioxide" on first mention only, or as "titanium dioxide" every time? `SCRIPT.md`'s pronunciation key uses
"titanium dioxide" on first mention (S02) and "T I O two" after, as a working default pending a team decision
before recording.
