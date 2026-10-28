# Deploy Current State Live, Then Rebuild the Upcoming-Page Conference Tabs Properly

> **For the executing agent (Sonnet):** do **Phase 0 first, completely, before touching any file**. Phase 0 is a live deployment — follow it exactly and confirm success before moving to Phase 1. Phases 1+ only ever touch the local working tree; nothing in Phases 1+ gets pushed or deployed. Every expected output is written down. If anything differs, STOP and report rather than improvising.

## Context

**Phase 0** is a direct instruction from the user, independent of the redesign below: "apart from the upcoming page problems, everything is correct and can be pushed to live — do that first, then everything else happens locally." Current `HEAD` is `94b6e12`, which already contains the sitewide typography pass, the new intro logo, the Srashti Agarwal fix, and the full client visual-audit pass (bigger headings, justified hero intro, Ashoka Chakra on the Conferences hero, bigger Contact heading, and the first version of the Upcoming conference tabs). The user has reviewed it live-equivalent on localhost and confirmed everything is good **except** the Upcoming-page tabs feature, which they want kept out of further live pushes until it's fixed — but the current commit (bugs included) should still go live now, because the bug only affects a feature the public can still use via the plain "View conference highlights ↓" links and direct scrolling; the user's priority is getting the verified-good 90% of the work live immediately.

**Phases 1+** fix the Upcoming-page tabs locally only (no deploy) based on the user's follow-up critique, delivered with two screenshots (`localhost:8080/upcoming/#hys-4` and `localhost:8080/upcoming/#hys-5`):

1. **Hover does nothing, and deep links into a conference other than HYS 4.0 don't switch to it** — confirmed in the `#hys-5` screenshot: the page sits at the hero, not scrolled to any panel, and (per the user) whichever "View full details" link is clicked, only HYS 4.0 ever shows.
2. **The exact "no gap between Upcoming and Conferences" bug is back** in the `#hys-5` screenshot ("UPCOMINGCONFERENCES" with zero space) — this is the bug Step U1 of the previous audit fixed in `js/upcoming.js`, and it is confirmed fixed and tested in a fresh headless-Chrome profile pointed at the same `localhost:8080`. **Diagnosis: the user's browser tab is serving a stale cached copy of `/js/upcoming.js`** from before that fix — the script tag has no cache-busting version, so a normal reload (not a hard refresh) can silently keep serving the old file from disk/back-forward cache. This single root cause explains both symptoms at once: with the old JS, `initConferenceTabs()` doesn't exist at all, so hovering does nothing and the page stays frozen on whatever the static HTML's default state is (HYS 4.0 visible, others hidden) — and the old word-join bug is also still active. Fix: add a cache-busting query string to the script tag (belt), and also harden `initUpcoming.js`'s init sequence so one throwing function can never silently prevent the others from registering (suspenders) — both are cheap, permanent, and remove this entire class of "it worked for me, not for you" bug.
3. **"This is not a 'Three Flagship Conferences' feature — today it's three, tomorrow it could be one or two, we're not renaming this every time. Frame it as simple Upcoming Conferences."** Three places on the page hardcode "Three"/"3 Flagship Conferences": the hero ribbon, the hero sub-line, and the tab section's heading. All three get reworded to be count-agnostic.
4. **"The UI is very shit / very vibe-coded — rebuild the tabs and the content below them with a professional, consulting-grade touch."** The current tab bar (bordered boxes with emoji icons, a pulsing green "OPEN" dot, a gradient glow background, and a rotated-diamond pointer under the active tab) and the panel content below (a poster card and a text block floating next to each other with no shared container) read as an AI-generated "bento" pattern, not an institutional/editorial design. Full redesign below, built from components already proven elsewhere on this site (the nav's underline-hover mechanic, the existing `.conf-card`/`.flagship-card` restraint) rather than inventing new motifs — this is what makes a result look "designed," not "default."

Everything else from the prior audit (typography, headings, About, Conferences chakra, Contact) is confirmed correct by the user and is explicitly **out of scope** here.

---

## Phase 0 — Deploy current `HEAD` live (do this first, nothing else)

No code changes. Confirmed this session: active `gh` account `harshkawatra11`, active `vercel` account `harshkawatra11`, remote `origin` → `harshkawatra11/rys_final_git`.

```bash
cd "C:/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/rys_final_git"
git log --oneline -1; git status --short
gh auth status 2>&1 | grep -E "Active account|Logged in"
vercel whoami
```
Expected: `HEAD` is `94b6e12 Apply client visual audit…`; `git status --short` shows only `?? new-logo.jpeg`; `harshkawatra11` active on both. If `HEAD` differs or there are unexpected modified/staged files, STOP and report — do not push unreviewed local changes.

```bash
git push origin main
```
Expected: `71557c1..94b6e12  main -> main` (or similar — pushing the 2 local-only commits `b3602ce` and `94b6e12`).

Wait for the GitHub Pages Actions deploy to finish:
```bash
for i in $(seq 1 30); do
  st=$(gh run list --limit 1 --repo harshkawatra11/rys_final_git --json status,conclusion,headSha -q '.[0] | "\(.status) \(.conclusion) \(.headSha[0:7])"')
  echo "$st"
  case "$st" in completed*) break;; esac
  sleep 10
done
```
Expected: ends with `completed success 94b6e12`. (Timeout 600000 on this step.)

Deploy to Vercel:
```bash
vercel --prod --yes
```
Expected output contains `▲ Production` and `▲ Aliased     https://www.rajdhaniyuvasansad.com` and the JSON tail shows `"readyState": "READY"`.

Smoke-test the live site:
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.rajdhaniyuvasansad.com/
curl -s https://www.rajdhaniyuvasansad.com/about/ | grep -c "search.js"
curl -s https://www.rajdhaniyuvasansad.com/ | grep -c "hero-entity-line"
curl -s -o /dev/null -w "%{http_code}\n" https://www.rajdhaniyuvasansad.com/images/loader-logo.png
```
Expected: `200`, `1`, `1`, `200`.

**Report Phase 0's result to the user before continuing to Phase 1** (one line: "live, GitHub Pages + Vercel both deployed from 94b6e12" or the specific failure). Phase 1 begins only after Phase 0 is confirmed done — Phase 1 makes purely local changes and does **not** re-deploy at the end; deployment of the Phase-1 fix happens only when the user asks for it later.

---

## Phase 1 — Fix the Upcoming-page tabs (local only, no deploy)

### 1. Cache-proof the script loading
`upcoming/index.html` line 1114: `<script src="/js/upcoming.js" defer></script>` → `<script src="/js/upcoming.js?v=2" defer></script>`. This guarantees every browser — including the user's current tab on next reload — fetches the current file instead of a cached one, regardless of what's cached from earlier sessions. (`shared.js` is unaffected; it hasn't changed today.)

### 2. Harden `js/upcoming.js`'s init sequence
Replace the `DOMContentLoaded` block so each `init*()` call is independently try/caught — one throwing function can no longer prevent `initConferenceTabs()` (or anything after it) from registering:
```js
  // ─── Init All ───
  document.addEventListener('DOMContentLoaded', function () {
    [initHeroTitle, initHeroParticles, initCtaParticles, initCountdown, initTiltCards,
     initStaggerReveal, initConferenceTabs, initMagneticButtons, initUpcomingCounters, initHeroParallax]
      .forEach(function (fn) { try { fn(); } catch (e) { console.error('[upcoming]', fn.name, e); } });
  });
```
This is a pure robustness change — behavior is identical when nothing throws, which is the expected case once the cache-bust above takes effect.

### 3. Remove the hardcoded "three/3" framing (3 exact edits in `upcoming/index.html`)
| Location | From | To |
|---|---|---|
| Hero ribbon | `🇮🇳 3 Flagship Conferences · 2026` | `🇮🇳 Upcoming Conferences · 2026` |
| Hero sub-line | `Three flagship conferences from Rajdhani Yuva Sansad — explore each below and secure your free registration.` | `Flagship conferences from Rajdhani Yuva Sansad — explore each below and secure your free registration.` |
| Tab section heading | `<h2 class="sec-h2">Three Flagship Conferences</h2>` | `<h2 class="sec-h2">Upcoming Conferences</h2>` |

The tab section's eyebrow tag also changes from "Choose Your Conference" (an instruction, odd as a section label) to "Flagship Conferences" (a plain category label, matching how every other `sec-tag` on this site is a noun phrase, e.g. "Why Attend", "Track Record") — the hint sentence under the heading keeps the "hover/tap" instruction instead.

### 4. Redesign: tab bar (replacing the current boxed/icon/pulsing-dot tabs)
Goal: look like an institutional site's section navigation, not a card grid. Built by reusing the exact underline-hover mechanic already defined for the main nav (`shared.css` `.nav-links a::after` — a `scaleX(0)→scaleX(1)` bottom rule) so it reads as the same design system, not a new motif.

Markup (replaces the current `.uc-tabs` block's children — same `role="tablist"`/`role="tab"`/`aria-*` wiring, same 3 ids, just a different internal structure and no icon/status spans):
```html
<div class="uc-tabs" role="tablist" aria-label="Upcoming conferences">
    <button class="uc-tab is-active" type="button" role="tab" id="tab-hys-4" aria-selected="true" aria-controls="panel-hys-4" tabindex="0">
        <span class="uc-tab-index">01</span>
        <span class="uc-tab-name">Haryana Yuva Samwad 4.0</span>
        <span class="uc-tab-date">First Week of November 2026</span>
    </button>
    <button class="uc-tab" type="button" role="tab" id="tab-hys-5" aria-selected="false" aria-controls="panel-hys-5" tabindex="-1">
        <span class="uc-tab-index">02</span>
        <span class="uc-tab-name">Haryana Yuva Samwad 5.0</span>
        <span class="uc-tab-date">Middle of November 2026</span>
    </button>
    <button class="uc-tab" type="button" role="tab" id="tab-nlpf-2026" aria-selected="false" aria-controls="panel-nlpf-2026" tabindex="-1">
        <span class="uc-tab-index">03</span>
        <span class="uc-tab-name">3rd National Lawyers' Parliament Festival</span>
        <span class="uc-tab-date">28 November 2026</span>
    </button>
</div>
```
CSS (replaces the whole current tab-related block — `.uc-tabs`, `.uc-tab`, `.uc-tab:hover`, `.uc-tab:focus-visible`, `.uc-tab.is-active`, `.uc-tab.is-active::after`, `.uc-tab-icon`, `.uc-tab-text`, `.uc-tab-name`, `.uc-tab-date`, `.uc-tab-status`, `.uc-tab-dot`, and the `html[data-theme="light"] .uc-tab` rule — in `upcoming/index.html`'s inline `<style>`):
```css
    .uc-tabs {
        display: flex; border-top: 1px solid var(--border-gold); border-bottom: 1px solid var(--border-gold);
        max-width: 1240px; margin: 0 auto;
    }
    .uc-tab {
        position: relative; flex: 1; min-width: 0;
        display: flex; flex-direction: column; gap: .3rem;
        padding: 1.5rem 1.8rem; text-align: left; cursor: pointer;
        background: none; color: inherit; font: inherit; border: none;
        border-right: 1px solid var(--border-gold);
    }
    .uc-tab:last-child { border-right: none; }
    .uc-tab::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px;
        background: var(--saffron); transform: scaleX(0); transition: transform .3s;
    }
    .uc-tab:hover::after { transform: scaleX(1); }
    .uc-tab:hover .uc-tab-name { color: var(--cream); }
    .uc-tab:focus-visible { outline: 2px solid var(--saffron); outline-offset: -2px; }
    .uc-tab.is-active::after { transform: scaleX(1); }
    .uc-tab-index {
        font-family: 'Cinzel', serif; font-size: .7rem; font-weight: 600;
        letter-spacing: .14em; color: var(--gold-text); opacity: .7;
    }
    .uc-tab-name {
        font-family: 'Cinzel', serif; font-size: 1.05rem; font-weight: 600;
        color: var(--dim2); line-height: 1.3; transition: color .25s;
    }
    .uc-tab.is-active .uc-tab-name { color: var(--cream); }
    .uc-tab-date { font-size: .82rem; color: var(--dim2); opacity: .75; }
    html[data-theme="light"] .uc-tab { background: none; }
    @media (max-width: 760px) {
        .uc-tabs { flex-direction: column; }
        .uc-tab { border-right: none; border-bottom: 1px solid var(--border-gold); padding: 1.1rem 1.3rem; }
        .uc-tab:last-child { border-bottom: none; }
        .uc-tab::after { top: 0; bottom: auto; left: -1px; right: auto; width: 2px; height: auto; transform: scaleY(0); transform-origin: top; }
        .uc-tab:hover::after, .uc-tab.is-active::after { transform: scaleY(1); }
    }
```
No emoji icons, no colored status pill, no pulsing dot, no gradient glow, no diamond pointer — three equal-width columns separated by hairline rules with a numbered index, the conference name, and its date, and a 2px saffron rule that fills in under the active/hovered tab exactly like the main nav does. This is the entire visual vocabulary the rest of the site already uses for "what's selected."

### 5. Redesign: panel content (fix the "stranded" floating layout)
The problem is structural: `.uc-panel-top` currently places the `.conf-card` (poster) and `.uc-panel-intro` (icon + label + heading + paragraph) as two independent flex/grid children with no shared visual container, so they read as two unrelated blocks that happen to be near each other. Fix: wrap both in one bordered panel so they're legible as a single "about this conference" unit, and simplify the intro header (drop the boxed emoji icon chip, which repeats the icon already shown on the active tab and on the card).

Replace `.uc-panel-top` CSS:
```css
    .uc-panel-top {
        display: grid; grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
        gap: 0; align-items: stretch; margin-bottom: 3rem;
        border: 1px solid var(--border-gold); border-radius: 4px; overflow: hidden;
    }
    .uc-panel-top .conf-card { border: none; border-radius: 0; border-right: 1px solid var(--border-gold); }
    .uc-panel-intro { padding: 2.2rem 2.4rem; display: flex; flex-direction: column; justify-content: center; }
```
Replace `.conf-detail-header`/`.conf-detail-icon` usage **inside the panel only** (the icon chip is still used correctly elsewhere on the site — this only changes how the panel intro renders) by editing the 3 panel-intro blocks in `tabs-block.html`-sourced markup from:
```html
<div class="conf-detail-header">
    <div class="conf-detail-icon">🪷</div>
    <div class="conf-detail-header-text">
        <p class="conf-detail-label">Haryana Yuva Samwad 4.0 · First Week of November 2026</p>
        <h2 class="conf-detail-title">Conference Highlights</h2>
    </div>
</div>
```
to:
```html
<p class="conf-detail-label">Conference Highlights</p>
<h2 class="conf-detail-title">Haryana Yuva Samwad 4.0</h2>
```
(same pattern for the HYS 5.0 and NLPF panels, substituting their own name) — this removes the redundant emoji chip (the conference's identity is already established by the active tab above and the poster to the left) and makes the heading the conference's actual name rather than the generic word "Highlights" repeated three times.

### 6. Redesign: "Previous Editions" cards (reduce visual noise)
Replace `.uc-prev-card`/`.uc-prev-ed`/`.uc-prev-name`/`.uc-prev-meta`/`.uc-prev-desc`/`.uc-prev-stats`/`.uc-prev-link` CSS with a quieter, flatter treatment — remove the box-shadow-on-hover and the oversized tracked edition label, keep a simple border-color + 2px lift, consistent with how `.flagship-card:hover`/`.conf-card:hover` already behave elsewhere on the site (no new hover language invented):
```css
    .uc-prev-card {
        flex: 0 1 calc((100% - 3rem) / 3); min-width: 260px;
        display: flex; flex-direction: column; text-decoration: none; color: inherit;
        background: var(--navy-mid); border: 1px solid var(--border-gold);
        transition: border-color .25s, transform .25s;
    }
    .uc-prev-card:hover { border-color: var(--saffron); transform: translateY(-3px); }
    .uc-prev-card img { width: 100%; height: 160px; object-fit: cover; display: block; }
    .uc-prev-body { padding: 1.1rem 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .4rem; flex: 1; }
    .uc-prev-ed { font-size: .68rem; letter-spacing: .1em; text-transform: uppercase; color: var(--gold-text); font-weight: 600; }
    .uc-prev-name { font-family: 'Cinzel', serif; font-size: 1.05rem; font-weight: 700; color: var(--cream); line-height: 1.3; }
    .uc-prev-meta { font-size: .85rem; color: var(--dim2); }
    .uc-prev-desc { font-size: .92rem; color: var(--dim2); line-height: 1.65; }
    .uc-prev-stats { font-size: .82rem; color: var(--cream); font-weight: 600; margin-top: auto; padding-top: .3rem; }
    .uc-prev-link { font-size: .76rem; letter-spacing: .1em; text-transform: uppercase; color: var(--saffron-text); font-weight: 700; }
```
And drop `.uc-prev-title`'s size slightly (`clamp(1.3rem, 2.2vw, 1.8rem)` → `clamp(1.15rem, 1.8vw, 1.5rem)`) so "How We Conducted Haryana Yuva Samvad" doesn't out-compete the panel's own conference-name heading above it.

### 7. `js/upcoming.js` behavior — unchanged, just verify
`initConferenceTabs()`'s logic (hover-with-120ms-intent-delay, click, arrow-key navigation, capture-phase in-page link handling, `fromHash()` deep-link handling) was already correct — the bug was never in this function, it was that it never ran. No functional changes needed here beyond the init-hardening in step 2 and the cache-bust in step 1.

---

## Execution (Phase 1)

```bash
REPO="C:/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/rys_final_git"
```

1. Make the 7 edits above directly with the Edit tool against `upcoming/index.html` and `js/upcoming.js` (no codemod needed this time — it's one file's `<style>`/body and one `<script>` tag, both small, hand-editing is simpler and less risky than another generated-diff script for a single-file change).
2. Verify no leftover references to the removed classes: `grep -n "uc-tab-icon\|uc-tab-status\|uc-tab-dot\|conf-detail-icon\">🪷\|conf-detail-icon\">🌿\|conf-detail-icon\">⚖" upcoming/index.html` → expect **no matches** (the `conf-detail-icon` class itself is used correctly elsewhere on the site via `.conf-detail-section`'s own header, which this phase does not touch — only the 3 panel-intro occurrences inside the new tabs block are removed).
3. `node --check js/upcoming.js` → `0` exit.
4. Local server: confirm `http://localhost:8080/` returns `200` (start with `python -m http.server 8080` in the repo root, `run_in_background: true`, if not already running).
5. Headless-Chrome regression, reusing `C:/Users/harsh/rys-typo-tools/cdp.js`: write a short script (or reuse `C:/Users/harsh/rys-audit2/audit2-check.js`'s upcoming-page block as a template) that loads `/upcoming/` and asserts:
   - `document.querySelectorAll('.uc-tab').length === 3`
   - only `panel-hys-4` visible on load
   - **`mouseenter` on `tab-hys-5` → after 450ms, only `panel-hys-5` visible** (this is the exact behavior the user said doesn't work — must pass before reporting done)
   - `click` on `tab-nlpf-2026` → only `panel-nlpf-2026` visible
   - fresh navigation straight to `/upcoming/#hys-5` (not a same-page click) → after load, `panel-hys-5` is the only visible panel (this directly tests the deep-link path the user's screenshot showed broken)
   - the "Upcoming"/"Conferences" word gap in the hero is still ≥ 8px
   - no `.uc-tab-icon`/`.uc-tab-status` elements exist; `.uc-tabs` children count is 3 and each has a visible 2px bottom-rule element (`::after`) — check via computed style `transform` on hover/active instead of nonexistent elements
   - page text no longer contains "Three Flagship Conferences" or "3 Flagship Conferences"
6. Screenshot `upcoming-1440-dark` (hero + tabs + first panel) and `upcoming-1440-dark` after simulating hover-to-tab-2 and click-to-tab-3, using `C:/Users/harsh/rys-typo-tools/shots.js` (it doesn't support interaction, so for the hover/click states take a screenshot via a small ad-hoc script using `cdp.js` directly: dispatch the event, sleep, call `screenshot()`). Visually confirm: three equal-width plain tabs with a bottom rule under the hovered/active one, no boxes/icons/dots; the panel below reads as one bordered unit, not two floating pieces; "Upcoming Conferences" (not "Three Flagship Conferences") appears in the hero and the tab section heading.
7. Report the regression-check results and screenshots. **Do not commit or deploy** — this phase stays local until the user reviews it (their own words: "everything has to start to affect locally" after the Phase 0 deploy).

## Verification summary (must all pass before reporting Phase 1 done)
- Hovering tab 2 or 3 switches the visible panel (the user's primary complaint) — verified both by automated dispatch and by the agent visually confirming the screenshot sequence.
- A fresh page load at `/upcoming/#hys-5` or `/upcoming/#nlpf-reg` shows that conference's panel, not HYS 4.0.
- No visible instance of "Three"/"3 Flagship Conferences" remains on the page.
- The tab bar and panel no longer use icon chips, pulsing dots, gradient glows, or the diamond pointer.
- `node --check js/upcoming.js` passes; no new console errors on page load (check via `read_console_messages`-equivalent in the CDP script, or by confirming the regression script's own `evalJs` calls don't throw).
