# PHASE 6: Visual identity and presentation finishing (plan for Sonnet executors)

> **Status of earlier work (do not redo):** Phases 1–5 are built and deployed. Phase 5 (security) is live except three items that need the user: Supabase Auth dashboard settings, CSP enforcement (still report-only), and switching realtime `DATABASE_URL` to the `realtime_svc` role. Do not touch those in this phase.
>
> **Who executes this:** Sonnet sub-agents, one task at a time, in order (U00 → U16). Every task gives the exact files, the complete code (or an exact, mechanical edit), the commands, and the acceptance checks. **Do not redesign. Do not add ideas.** If the code you find differs from what a task quotes, adapt the location only; if behaviour differs, stop and report.

---

## 0. Context

HVS Menti runs live quizzes for ~2,500 people on a projector. The user looked at the live projector screens (`/screen/173011`) and found the app "very black and white and made in a hurry". The audit of the screenshots and the code confirmed these concrete problems:

1. **No palette.** Everything is grey ink on near-black; the only colour is one default blue (`--series-1` / `--accent`). Every other series colour is defined and never used.
2. **Results screen is broken visually** (`McqRevealed`, `apps/web/src/components/present/scene.tsx:79-97`):
   - The overline repeats the whole prompt in 24px capitals: `QUESTION 1 OF 2 · QUESTIONS 1. SPECIAL FEDERAL POWERS …`.
   - Option labels are truncated (`truncate`, `bar-list.tsx:39`) to "By an executive notification issued by the P…".
   - "✓ Correct" is plain ink text jammed against the truncated label.
   - Bars are scaled to the max value and have **no track**, so with 0 votes the middle 1fr column is empty and the counts float at the far right.
   - The overline counts *all slides* ("Question 1 of 2") while the headline counts *quiz questions* ("Q1"); in mixed decks they disagree.
3. **Question screen defects** (`McqActive`, `scene.tsx:57-77`):
   - The countdown shows the number twice: "16" and "16s left" (`countdown.tsx:25-26`).
   - The answered meter's track is `--accent-wash`, which in dark mode is saturated blue `#184f95`, so "0 of 0 answered · 0%" looks like a *full* bar (`meter.tsx:10`).
   - The prompt starts with "QUESTIONS 1." because the Word import kept the document's numbering (`lib/import/to-slides.ts:32` copies `q.prompt` unchanged).
4. **Typography is generic:** Inter only, weights 400/600. No serif, no mono, no hierarchy beyond size.
5. **No wayfinding** on the projector: no progress, no slide number, no join reminder for late joiners, no source line, and no podium at the end.

**Intended outcome:**
- One coherent, consulting-grade visual identity across the whole product, built on the user's earlier IdeaForge project **Parakh** (`C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\iitd-hack\parakh-iitd-hack\web`, deployed at https://parakh-ideaforge.vercel.app): warm paper and ink, a crimson "seal" accent, verdigris, ochre and olive, Instrument Serif + Inter Tight + JetBrains Mono, hairline frames and mono kickers.
- Projector screens re-engineered with the deck rules of the **case-competition-deck skill** (section 2).

### Decisions confirmed with the user (do not re-litigate)
1. **Palette:** port Parakh's palette, **both light and dark themes**. The projector **defaults to dark**; the presenter can switch it to light. Crimson (seal) marks emphasis and the key number; verdigris marks correct and positive; ochre marks time warnings.
2. **Fonts:** Parakh trio: **Instrument Serif** for headlines and big numbers, **Inter Tight** for UI and body, **JetBrains Mono** for kickers, labels, codes and figures. Keep **Noto Sans Devanagari** for Hindi.
3. **Results chart:** **vertical columns**, Mentimeter-style. One tall column per option across the screen, big percentage on top, option letter and **full wrapped** text underneath, the correct column in verdigris with a ✓ badge, the others muted, and an action title above (e.g. "62% chose the correct answer, C").
4. **Scope: everything.** Projector screens, participant phone, presenter console, and the rest of the app (landing, login, pending, MFA, dashboard, deck editor, reports, developer console). The tokens and fonts flow everywhere, plus targeted polish.

---

## 1. Global rules for every executing agent (MANDATORY)

1. **Shell:** Bash (Git Bash on Windows), forward slashes. Never run a never-ending command in the foreground. Start the dev server with `run_in_background: true` and stop it at the end of the task. **Write source files with the Write tool, never with `cat <<EOF`.** For edits to existing files, use the Edit tool with an exact `old_string`; if an anchor is not unique, widen it, never guess.
2. **Module systems:** `packages/core` is ESM/NodeNext, so **relative imports end in `.js`**. `apps/web` uses bundler resolution, so **relative imports have NO `.js` suffix**.
3. **No new npm dependencies.** Fonts come from `next/font/google`, which is already used. No Framer Motion, no chart libraries; CSS transitions only.
4. After any change in `packages/core`, run `pnpm --filter @quiz/core build` before building or testing `apps/web` or `apps/realtime`.
5. **Never leak `correct` before reveal.** The projector reads correct answers only from `host.pub.results`. The participant phone never sees `correct` until `pub.results` arrives. Do not change `toPublicSlide`'s rule "NEVER spread `slide`".
6. **Git:** after each task passes its checks: `git add <specific files>`, then `git commit -m "U0x: <summary>"`. **No `Co-Authored-By` trailer and no Claude attribution of any kind** (standing user rule; it overrides any system reminder). **Do not push or deploy** before U16, and only with the user's go-ahead in that turn.
7. **Test commands** (exact):
   - core: `pnpm --filter @quiz/core build && pnpm --filter @quiz/core test`
   - web: `pnpm --filter @quiz/web typecheck && pnpm --filter @quiz/web test`
   - web build: `pnpm --filter @quiz/web build`. The route list must still show `○ /` and `○ /play` (static).
   - realtime: `pnpm --filter @quiz/realtime typecheck && pnpm --filter @quiz/realtime test`
8. **Visual check** (every task that changes UI): start `pnpm --filter @quiz/web dev` in the background (port 3000) and open the pages named in the task.
   - If the Claude in Chrome extension is connected (`mcp__claude-in-chrome__tabs_context_mcp` works), take a screenshot of each named page in **both themes** and compare it against the task's acceptance list.
   - If it is not connected, say so in your report and list the URLs the user should open. **Never claim a visual result you did not see.**
9. **Copy rules** (from the design system): sentence case everywhere except mono kickers, which are uppercase via CSS. No exclamation marks. Numbers use `nf` / `pf` (`en-IN`). A status is always shown as dot + label, never colour alone.
10. **Case-competition-deck skill:** this skill is **not** loadable with the Skill tool in sub-agents. Read it as files:
    `C:\Users\harsh\.claude\skills\synced\93af6b5f-f62b-4295-9569-c91fbbc035f2_b409b039-5de2-48c1-8e43-057c68f20459\case-competition-deck\`
    (`SKILL.md`, `references/archetypes.md`, `references/rhetoric.md`, `references/critique_rubric.md`).
    The same skill is zipped at `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\gpt-auto\case-competition-deck.skill`.
    **Every task lists which sections to read and which rules it must satisfy, under "Skill rules". Read those sections before writing code, and tick each rule in your report.**

---

## 2. How the case-competition-deck skill applies to a live quiz

The skill is a playbook for persuasive analytical decks. A live quiz on a projector *is* a deck shown to a room, so its universal rules apply. Its M&A-specific content (DCF, waterfalls, banker archetypes) does **not**, and must not be imported. The mapping below is binding for the whole phase.

| Skill rule (file § ) | What it means here | Where it is implemented |
|---|---|---|
| **Action titles, never topic labels** (`SKILL.md` §E.1; `archetypes.md` "Reusable patterns") | Every results and leaderboard headline is a full-sentence finding with a number: "62% chose the correct answer, C", not "Results". Question screens keep the question itself as the title (the question *is* the content). | `lib/insights.ts` (`mcqTitle`, `pollTitle`, `leaderboardTitle`); every `SceneFrame` title |
| **Persistent navigation bar on every content slide, not on cover or dividers** (`archetypes.md` §G) | A thin top bar on every projector scene: deck title, segmented progress (current slide in seal), page number `07 / 20`, and the join address + code for late joiners. **Not shown** on the lobby (cover) or on content slides (dividers). | `components/present/scene-frame.tsx` |
| **Sub-section label + source citation on every content slide** (`archetypes.md` "Reusable patterns") | A footer rule: left `Source: live responses from 1,204 of 1,380 participants · median response 6.2s`; right a section label `Quiz · Q3`. | `SceneFrame` footer |
| **Page numbers top-right** (`archetypes.md` "Reusable patterns") | `07 / 20` in the nav bar, right side. | `SceneFrame` |
| **Colour discipline: 3–5 colours deck-wide; strongest colour reserved for the moneyshot and critical findings** (`archetypes.md` last bullet) | Palette is ink + paper + **verdigris** (correct/positive/primary data) + **seal crimson** (the one emphasis per screen: kicker, current-progress segment, title rule, #1 on the podium, critical) + **ochre** (time warning). Olive and muted neutrals for "other" bars. No rainbow; no per-option colours. | `globals.css` tokens; chart components |
| **The moneyshot: one memorable number, large, on the climax slide** (`archetypes.md` §P) | The reveal is the climax: the correct column's percentage is the largest number on screen (serif 88px) and the only column in verdigris; the action title repeats it. The final podium is the session's climax. | `ResultColumns`, `Podium` |
| **Three is the magic number; symmetry** (`archetypes.md` "Reusable patterns") | Podium shows exactly three. Every option column has an identical structure (value block, column, label), differing only in colour. Answer cards on question screens are identical. | `Podium`, `ResultColumns`, `McqActive` |
| **Annotation callouts on charts** (`archetypes.md` §I) | The correct column carries a ✓ "Correct" callout; the join chart in the lobby is captioned. | `ResultColumns`, `Lobby` |
| **Cover slide archetype** (`archetypes.md` §A) | Lobby is the cover: title, join instructions, code, QR, and live joined count. No nav bar. | `Lobby` |
| **Section divider archetype** (`archetypes.md` §E) | Content slides render as dividers: number, large serif title, short rule, body. No nav bar. | `Content` |
| **Conclusion synthesis, no new content** (`archetypes.md` §W) | The ended screen recaps (podium plus participants and questions) and introduces nothing new. | `Ended` |
| **Polish: no placeholders, no copy-paste artifacts** (`SKILL.md` "Generate mode" step 11) | Strip "QUESTIONS 1." / "Q1)" numbering from prompts; no truncation with "…" on the projector; no duplicated numbers. | `displayPrompt` (core), `Countdown`, `ResultColumns` |
| **Critique rubric** (`references/critique_rubric.md`) | U15 runs a critique pass of every projector scene against the rubric's structure and polish items and records pass/fail per scene. | U15 |

Out of scope from the skill: the 8-section deck structure, executive summary, DCF, football field, appendix and bibliography. A quiz has no argument to build; do not invent one.

---

## 3. Design system specification (the single source of truth)

### 3.1 Colour tokens

Existing token **names are kept**, so every existing class (`bg-page`, `text-ink-2`, `border-hairline`, `bg-accent`, …) recolours automatically. New tokens are added for Parakh's extra colours.

| Variable | Tailwind colour | Role | Light | Dark |
|---|---|---|---|---|
| `--page` | `page` | page plane (Parakh paper) | `#FBFAF7` | `#100F0D` |
| `--surface` | `surface` | cards | `#FDFCF9` | `#15130F` |
| `--surface-raised` | `raised` | inputs, popovers, buttons | `#FFFFFF` | `#1C1A15` |
| `--sunken` **(new)** | `sunken` | tracks, table heads, selected neutral (Parakh paper-2) | `#F3F1EC` | `#17150F` |
| `--track` **(new)** | `track` | empty part of every bar / column / meter (must stay visible on `--page` in both themes) | `#E9E6DE` | `#25221C` |
| `--ink` | `ink` | primary text | `#14130F` | `#EDEAE3` |
| `--ink-2` | `ink-2` | body / secondary | `#4A4741` | `#C4C0B5` |
| `--ink-3` | `ink-3` | labels, axes | `#7A766C` | `#8B877D` |
| `--hairline` | `hairline` | rules, card borders (Parakh rule) | `#DCD8CF` | `#2C2A24` |
| `--baseline` | `baseline` | strong rule, chart baseline (Parakh rule-strong) | `#C7C2B5` | `#3D3A32` |
| `--ring` | — | focus ring tint | `rgba(20,19,15,0.12)` | `rgba(237,234,227,0.14)` |
| `--accent` | `accent` | **verdigris**: correct, positive, primary data, focus, selected | `#2F6B5E` | `#5FA595` |
| `--accent-strong` | `accent-strong` | hover/pressed accent | `#24564B` | `#7BB8AA` |
| `--accent-wash` | `accent-wash` | verdigris tint: selected rows, correct badge background | `#E3ECE9` | `#12211D` |
| `--seal` **(new)** | `seal` | crimson emphasis: kickers, current progress, title rule, #1, the key number | `#B3122B` | `#E23A50` |
| `--seal-tint` **(new)** | `seal-tint` | "not quite" banner background | `#F5E4E4` | `#2E1417` |
| `--ochre` **(new)** | `ochre` | time warning | `#A9781F` | `#D6A23F` |
| `--ochre-tint` **(new)** | `ochre-tint` | warning backgrounds | `#F3E9D5` | `#2A2011` |
| `--olive` **(new)** | `olive` | neutral data series | `#6B6A4E` | `#9C9A73` |
| `--neutral-bar` | — | non-focal bars (wrong answers, others) | `#CBC6B8` | `#4B483F` |
| `--series-1 … 8` | — | multi-series lines only | 1 `#2F6B5E` · 2 `#B3122B` · 3 `#A9781F` · 4 `#6B6A4E` · 5 `#3E5C76` · 6 `#8A4F7D` · 7 `#4A4741` · 8 `#7A766C` | 1 `#5FA595` · 2 `#E23A50` · 3 `#D6A23F` · 4 `#9C9A73` · 5 `#7FA3C2` · 6 `#C08AB4` · 7 `#C4C0B5` · 8 `#8B877D` |
| `--good` / `--good-text` | `good` | = verdigris | `#2F6B5E` | `#5FA595` |
| `--warning` | `warning` | = ochre | `#A9781F` | `#D6A23F` |
| `--serious` | `serious` | degraded | `#B8572A` | `#E07B4C` |
| `--critical` | `critical` | = seal | `#B3122B` | `#E23A50` |

**Semantic rules** (apply everywhere; checked in U15):
- **Primary button = ink** (`bg-ink text-page`), as in Parakh's active chip. The accent is not used for buttons.
- **Verdigris (`accent`)** is for correct answers, positive values, the main data series, focus outlines, selected states and progress fills.
- **Seal (`seal`)** is for at most **one emphasis per screen** (the kicker on projector scenes, plus the current-progress segment and the short title rule, which form one visual unit), the #1 podium block's top strip, and critical errors. Never use it for a whole bar series.
- **Ochre** is only for time ≤ 5 s and warnings.
- Wrong / other bars use `--neutral-bar`; poll bars before close use verdigris.

### 3.2 Typography

| Role | Font | Class (to use verbatim) |
|---|---|---|
| Projector scene title | Instrument Serif 400 | `font-serif` + size from `titleClass()` (U04) |
| Projector big numbers (%, joined, podium rank, countdown) | Instrument Serif 400 for %, joined, rank; JetBrains Mono for codes, counts, countdown | `font-serif` / `num` |
| Projector kicker | JetBrains Mono 500, uppercase, 0.16em, seal | `.kicker-xl` (22px/28px) |
| Projector labels and footer | JetBrains Mono 400, uppercase, 0.12em, ink-3 | `.label-mono` + explicit size |
| Page h1 (app) | Instrument Serif 400 | `font-serif text-[40px] leading-[44px] tracking-[-0.01em]` (desktop), `text-[32px] leading-[36px]` on small screens |
| Phone question headline | Instrument Serif 400 | `font-serif text-[26px] leading-[32px]` |
| Card / chart titles | Inter Tight 600 | unchanged `text-[18px] font-semibold leading-[26px]` |
| Body | Inter Tight 400 | unchanged (15px / 24px) |
| Overline (app) | JetBrains Mono 500, 11px, uppercase, 0.14em, ink-3 | `.overline` (redefined in U01) |
| Kicker (app) | as overline but seal | `.kicker` |
| Numbers in tables, KPIs, codes | JetBrains Mono, tabular | `num` |

Instrument Serif has no Devanagari. The serif stack falls back to Noto Sans Devanagari for Hindi text, which is acceptable.

### 3.3 Shape, spacing, motion
- **Radius:** squarer, like Parakh. Cards 4px (`rounded-[4px]`), buttons, inputs and chips 2px (`rounded-[2px]`), pills `rounded-full`. Done mechanically in U03.
- **Borders:** hairline everywhere; no shadows except the tooltip's existing `--shadow-1`.
- **Projector canvas:** 1920×1080, padding `px-24 pt-10 pb-12` (96/40/48px).
- **Motion:** scene fade 200 ms (exists). Result columns grow from 0 in 700 ms with `cubic-bezier(0.22,1,0.36,1)` (Parakh's ease). Podium blocks rise in 600 ms with a 120 ms stagger. The global reduced-motion rule already disables these.

---

## 4. Task graph

```
U00 prep + baseline
 └─ U01 tokens & themes (globals.css)
     └─ U02 fonts (layout.tsx) + type utilities
         └─ U03 shape codemod + UI primitives (button, card, stat tile, chart card, tabs, input, status pill)
             ├─ U04 pure helpers + core additions (displayPrompt, kindIndex/kindTotal, scene sizing, column math, action titles) [core + web]
             │    └─ U05 chart restyle (Meter, Countdown, BarList, RankTable, WordCloud, Sparkline, LineChart area)
             │         └─ U06 new charts: ResultColumns + Podium
             │              └─ U07 projector theme (hook + scoped CSS + ProjectorScreen)
             │                   └─ U08 SceneFrame (nav bar, kicker, title, rule, footer)
             │                        └─ U09 scene.tsx rewrite (all projector scenes)
             │                             └─ U10 dev scene gallery + fixtures (visual verification harness)
             ├─ U11 participant phone
             ├─ U12 presenter console (+ projector theme switch)
             └─ U13 rest of the app (landing, login, pending, MFA, dashboard, editor, reports, console)
U14 import fixes the numbering at source (to-slides uses displayPrompt) + kitchen sink refresh
U15 full verification + skill critique pass
U16 release (ONLY with the user's go-ahead): push, CI, Railway realtime (core change), Vercel
```
Run strictly in numeric order. U11–U13 depend on U01–U06 and U07 (theme), not on each other.

---

## U00: Prep and baseline

1. `git status` on `main`: clean except the untracked `image.png` in the repo root (leave it alone). Then `git fetch && git status -sb` must show `main...origin/main` with nothing ahead or behind.
2. Baseline (record the counts in your report): core test, web typecheck + test, web build, realtime test (commands in §1.7).
3. **Baseline screenshots, for before/after comparison.** Start the web dev server and, if Chrome is connected, screenshot:
   - `/` and `/login`
   - `/charts` (the chart kitchen sink; dev only)

   The projector cannot be screenshotted without a live session; U10 builds a fixture gallery for that.
4. Read, in full, before any UI work: `SKILL.md` and `references/archetypes.md` of the case-competition-deck skill (§1.10 path). Read `references/rhetoric.md` sections on action titles and quantification.
5. No commit.

---

## U01: Colour tokens and themes (`apps/web/src/app/globals.css`)

**Skill rules:** colour discipline, 3–5 colours deck-wide, strongest colour reserved (`archetypes.md` "Reusable patterns", last bullet).

Replace `apps/web/src/app/globals.css` **entirely** with:
```css
@import "tailwindcss";

/* Palette ported from Parakh (IdeaForge): warm paper and ink, verdigris for correct/positive, seal crimson for the one
   emphasis per screen, ochre for time warnings. Light is the default; dark comes from the OS or from data-theme on any element. */
:root {
  color-scheme: light;
  --page: #FBFAF7;
  --surface: #FDFCF9;
  --surface-raised: #FFFFFF;
  --sunken: #F3F1EC;
  --track: #E9E6DE;
  --ink: #14130F;
  --ink-2: #4A4741;
  --ink-3: #7A766C;
  --hairline: #DCD8CF;
  --baseline: #C7C2B5;
  --ring: rgba(20, 19, 15, 0.12);
  --accent: #2F6B5E;
  --accent-strong: #24564B;
  --accent-wash: #E3ECE9;
  --seal: #B3122B;
  --seal-tint: #F5E4E4;
  --ochre: #A9781F;
  --ochre-tint: #F3E9D5;
  --olive: #6B6A4E;
  --neutral-bar: #CBC6B8;
  --series-1: #2F6B5E; --series-2: #B3122B; --series-3: #A9781F; --series-4: #6B6A4E;
  --series-5: #3E5C76; --series-6: #8A4F7D; --series-7: #4A4741; --series-8: #7A766C;
  --good: #2F6B5E; --warning: #A9781F; --serious: #B8572A; --critical: #B3122B;
  --good-text: #2F6B5E;
  --shadow-1: 0 1px 2px rgba(20, 19, 15, 0.06);
  --radius-card: 4px; --radius-btn: 2px;
}

@media (prefers-color-scheme: dark) {
  :root:where(:not([data-theme="light"])) {
    color-scheme: dark;
    --page: #100F0D; --surface: #15130F; --surface-raised: #1C1A15; --sunken: #17150F; --track: #25221C;
    --ink: #EDEAE3; --ink-2: #C4C0B5; --ink-3: #8B877D;
    --hairline: #2C2A24; --baseline: #3D3A32; --ring: rgba(237, 234, 227, 0.14);
    --accent: #5FA595; --accent-strong: #7BB8AA; --accent-wash: #12211D;
    --seal: #E23A50; --seal-tint: #2E1417; --ochre: #D6A23F; --ochre-tint: #2A2011; --olive: #9C9A73;
    --neutral-bar: #4B483F;
    --series-1: #5FA595; --series-2: #E23A50; --series-3: #D6A23F; --series-4: #9C9A73;
    --series-5: #7FA3C2; --series-6: #C08AB4; --series-7: #C4C0B5; --series-8: #8B877D;
    --good: #5FA595; --warning: #D6A23F; --serious: #E07B4C; --critical: #E23A50; --good-text: #5FA595;
    --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.4);
  }
}

/* Any element can force a theme (the projector scene, the presenter's preview, the dev gallery). */
[data-theme="dark"] {
  color-scheme: dark;
  --page: #100F0D; --surface: #15130F; --surface-raised: #1C1A15; --sunken: #17150F; --track: #25221C;
  --ink: #EDEAE3; --ink-2: #C4C0B5; --ink-3: #8B877D;
  --hairline: #2C2A24; --baseline: #3D3A32; --ring: rgba(237, 234, 227, 0.14);
  --accent: #5FA595; --accent-strong: #7BB8AA; --accent-wash: #12211D;
  --seal: #E23A50; --seal-tint: #2E1417; --ochre: #D6A23F; --ochre-tint: #2A2011; --olive: #9C9A73;
  --neutral-bar: #4B483F;
  --series-1: #5FA595; --series-2: #E23A50; --series-3: #D6A23F; --series-4: #9C9A73;
  --series-5: #7FA3C2; --series-6: #C08AB4; --series-7: #C4C0B5; --series-8: #8B877D;
  --good: #5FA595; --warning: #D6A23F; --serious: #E07B4C; --critical: #E23A50; --good-text: #5FA595;
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.4);
}
[data-theme="light"] {
  color-scheme: light;
  --page: #FBFAF7; --surface: #FDFCF9; --surface-raised: #FFFFFF; --sunken: #F3F1EC; --track: #E9E6DE;
  --ink: #14130F; --ink-2: #4A4741; --ink-3: #7A766C;
  --hairline: #DCD8CF; --baseline: #C7C2B5; --ring: rgba(20, 19, 15, 0.12);
  --accent: #2F6B5E; --accent-strong: #24564B; --accent-wash: #E3ECE9;
  --seal: #B3122B; --seal-tint: #F5E4E4; --ochre: #A9781F; --ochre-tint: #F3E9D5; --olive: #6B6A4E;
  --neutral-bar: #CBC6B8;
  --series-1: #2F6B5E; --series-2: #B3122B; --series-3: #A9781F; --series-4: #6B6A4E;
  --series-5: #3E5C76; --series-6: #8A4F7D; --series-7: #4A4741; --series-8: #7A766C;
  --good: #2F6B5E; --warning: #A9781F; --serious: #B8572A; --critical: #B3122B; --good-text: #2F6B5E;
  --shadow-1: 0 1px 2px rgba(20, 19, 15, 0.06);
}

@theme inline {
  --color-page: var(--page);
  --color-surface: var(--surface);
  --color-raised: var(--surface-raised);
  --color-sunken: var(--sunken);
  --color-track: var(--track);
  --color-ink: var(--ink);
  --color-ink-2: var(--ink-2);
  --color-ink-3: var(--ink-3);
  --color-hairline: var(--hairline);
  --color-baseline: var(--baseline);
  --color-accent: var(--accent);
  --color-accent-strong: var(--accent-strong);
  --color-accent-wash: var(--accent-wash);
  --color-seal: var(--seal);
  --color-seal-tint: var(--seal-tint);
  --color-ochre: var(--ochre);
  --color-ochre-tint: var(--ochre-tint);
  --color-olive: var(--olive);
  --color-good: var(--good);
  --color-warning: var(--warning);
  --color-serious: var(--serious);
  --color-critical: var(--critical);
  --font-sans: var(--font-inter-tight), var(--font-deva), system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-serif: var(--font-instrument), var(--font-deva), Georgia, "Times New Roman", serif;
  --font-mono: var(--font-jetbrains), ui-monospace, "Cascadia Mono", Consolas, monospace;
}

html, body { background: var(--page); color: var(--ink); }
body { font-family: var(--font-sans); font-size: 15px; line-height: 24px; -webkit-font-smoothing: antialiased; }
::selection { background: var(--seal); color: var(--page); }

.tnum { font-variant-numeric: tabular-nums; }
/* Codes, counts, KPIs, table figures. */
.num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
/* App overline: small mono caps label (Parakh kicker shape, neutral colour). */
.overline { font-family: var(--font-mono); font-size: 11px; line-height: 16px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-3); }
/* App kicker: the same in seal, used once per page at most. */
.kicker { font-family: var(--font-mono); font-size: 11px; line-height: 16px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--seal); }
/* Mono caps without a size (set the size with a text-[..] class). */
.label-mono { font-family: var(--font-mono); font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase; }
/* Projector kicker (1920px canvas). */
.kicker-xl { font-family: var(--font-mono); font-size: 22px; line-height: 28px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--seal); }

:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

@keyframes scene-in { from { opacity: 0; } to { opacity: 1; } }
.scene-fade { animation: scene-in 200ms ease-out; }
@keyframes rise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
.podium-rise { animation: rise 600ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }

@media print {
  @page { size: A4; margin: 16mm; }
  html, body { background: #fff !important; }
  * { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
}
```

**Checks:**
- web typecheck + test + build.
- Open `/charts` in both themes (use the page's own light/dark toggle). Colours must be warm paper/ink with verdigris data, and no blue anywhere.
- `grep -rn "#2a78d6\|#3987e5\|#0b0b0b" apps/web/src` must only find hits in `scene.tsx` (QR colour, fixed in U09) and nowhere else. If other hard-coded hex colours appear in `.tsx` files, list them in your report; do not change them in this task.

Commit `U01: Parakh palette tokens, light and dark, element-level themes`.

---

## U02: Fonts and type utilities (`apps/web/src/app/layout.tsx`)

**Skill rules:** none specific. Typography serves the action-title hierarchy.

Replace `apps/web/src/app/layout.tsx` **entirely** with:
```tsx
import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Inter_Tight, JetBrains_Mono, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';

const sans = Inter_Tight({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter-tight', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: ['400'], style: ['normal', 'italic'], variable: '--font-instrument', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-jetbrains', display: 'swap' });
const deva = Noto_Sans_Devanagari({ subsets: ['devanagari'], weight: ['400', '600'], variable: '--font-deva', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'HVS Menti', template: '%s · HVS Menti' },
  description: 'Live quizzes, polls and Q&A for large audiences.',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable} ${deva.variable}`}>
      <body className="min-h-dvh bg-page text-ink">{children}</body>
    </html>
  );
}
```
Notes:
- `next/font/google` downloads at build time. The local build and CI need internet, which they already need today for Inter.
- If `Inter_Tight` or `Instrument_Serif` fails to resolve in this Next version, stop and report the exact error. Do not substitute another font.

**Checks:**
- web build must still show `○ /` and `○ /play`.
- In dev, `/` renders in Inter Tight. In DevTools → Computed → font-family, the first family must be the Inter Tight one (`__Inter_Tight_…`).
- A temporary check in the browser console: `getComputedStyle(document.body).fontFamily`.

Commit `U02: Instrument Serif, Inter Tight and JetBrains Mono`.

---

## U03: Shape codemod and UI primitives

**Skill rules:** symmetry and visual consistency (`archetypes.md` "Reusable patterns").

### 3.1 Radius codemod (mechanical; order matters)
```bash
cd apps/web/src
grep -rl 'rounded-\[4px\]' --include='*.tsx' . | xargs sed -i 's/rounded-\[4px\]/rounded-[2px]/g'
grep -rl 'rounded-\[6px\]' --include='*.tsx' . | xargs sed -i 's/rounded-\[6px\]/rounded-[4px]/g'
grep -rn 'rounded-\[6px\]' --include='*.tsx' . | wc -l   # must print 0
```
Run the 4→2 replacement **first**, then 6→4. Running them in the other order would turn every card into 2px.

### 3.2 `components/ui/button.tsx`
In `VARIANTS`, replace the `primary` line with:
`  primary: 'bg-ink text-page hover:bg-ink-2 border border-transparent',`
Leave the other variants. After 3.1 the base class reads `rounded-[2px]`.

### 3.3 `components/ui/tabs.tsx`
The active tab currently uses `border-accent text-ink`. Change it to `border-ink text-ink` (find the exact string; it must be unique in the file).

### 3.4 Toggle chips: active state becomes ink
- `components/play/header.tsx` (`LangToggle`): replace `lang === id ? 'bg-accent-wash text-ink' : 'bg-raised text-ink-2'` with `lang === id ? 'bg-ink text-page' : 'bg-raised text-ink-2'`.
- `components/charts/chart-card.tsx`: replace `view === v ? 'bg-accent-wash text-ink' : 'bg-raised text-ink-2 hover:text-ink'` with `view === v ? 'bg-ink text-page' : 'bg-raised text-ink-2 hover:text-ink'`.

### 3.5 `components/charts/chart-card.tsx`: footnote as a Parakh source line
Replace the source line
`      {source ? <p className="mt-4 text-[12px] leading-4 text-ink-3">Source: {source}</p> : null}`
with
`      {source ? <p className="mt-4 border-t border-hairline pt-3 font-mono text-[11px] leading-4 text-ink-3">Source: {source}</p> : null}`

### 3.6 `components/charts/stat-tile.tsx`: Parakh KPI tile
Replace the component body's returned JSX with:
```tsx
    <div className="flex min-w-0 flex-col gap-1 border-l border-hairline pl-4">
      <div className="flex items-center justify-between gap-2">
        <p className="overline">{label}</p>
        {status ? <StatusPill status={status} /> : null}
      </div>
      <div className="flex items-end justify-between gap-3">
        <p className={cx('text-ink', hero ? 'font-serif text-[56px] leading-[56px] tracking-[-0.01em]' : 'num text-[28px] font-medium leading-9')}>{value}</p>
        {trend ? <Sparkline values={trend} /> : null}
      </div>
      {delta ? (
        <p className={cx('text-[13px] leading-5', delta.good ? 'text-[var(--good-text)]' : 'text-critical')}>
          <span aria-hidden="true">{delta.direction === 'up' ? '▲' : delta.direction === 'down' ? '▼' : '–'} </span>
          {delta.text}
        </p>
      ) : null}
    </div>
```
The label changes from sentence-case 13px to the mono overline. Labels are still written in sentence case in code; CSS uppercases them.

### 3.7 `components/ui/card.tsx`
No change beyond the codemod. `CardHeader` keeps `.overline`, which is now mono via U01.

**Checks:**
- web typecheck + test + build.
- `/charts`: StatTiles have a left hairline and mono numbers; the chart/table toggle's active state is ink.
- `/login`: the primary button is ink, not green or blue.

Commit `U03: squarer shapes, ink primary buttons, Parakh KPI tiles and source lines`.

---

## U04: Pure helpers, core additions and action titles

**Skill rules:**
- Action titles with a number (`SKILL.md` §E.1, `rhetoric.md`).
- Polish: no copy-paste artifacts (`SKILL.md` generate step 11).
- Consistent numbering, so the overline and headline never disagree.

### 4.1 Core: `displayPrompt` (`packages/core/src/normalize.ts`)
Append:
```ts
/** Numbering that imports copy from source documents: "QUESTIONS 1.", "Q1)", "Question 12:", "3.", "प्रश्न 2:". */
const LEADING_NUMBER = /^\s*(?:(?:q(?:uestions?|ues|n)?|प्रश्न)\s*\.?\s*(?:no\.?\s*)?\d{1,3}\s*[.):\-–—]?\s+|\d{1,3}\s*[.)]\s+)/iu;

/** Prompt as shown to people: leading numbering removed. Never returns an empty string. */
export function displayPrompt(raw: string): string {
  const s = raw.replace(LEADING_NUMBER, '').trim();
  return s.length > 0 ? s : raw.trim();
}
```
Add to `packages/core/src/normalize.test.ts`:
```ts
describe('displayPrompt', () => {
  it('strips numbering copied from documents', () => {
    expect(displayPrompt('QUESTIONS 1. Special Federal Powers of the Council of States')).toBe('Special Federal Powers of the Council of States');
    expect(displayPrompt('Q1) What is X?')).toBe('What is X?');
    expect(displayPrompt('Question 12: Why?')).toBe('Why?');
    expect(displayPrompt('Q 4 - Name the river')).toBe('Name the river');
    expect(displayPrompt('3. Which one?')).toBe('Which one?');
    expect(displayPrompt('प्रश्न 2: क्या?')).toBe('क्या?');
  });
  it('leaves real content alone', () => {
    expect(displayPrompt('Quarterly revenue grew how much?')).toBe('Quarterly revenue grew how much?');
    expect(displayPrompt('2020 was a leap year?')).toBe('2020 was a leap year?');
    expect(displayPrompt('1.5 million people voted?')).toBe('1.5 million people voted?');
    expect(displayPrompt('Q1.')).toBe('Q1.');
  });
});
```
(Import `displayPrompt` in that test file's import line.)

### 4.2 Core: per-type position on `PublicSlide` (`packages/core/src/views.ts`)
- In `interface PublicSlide`, add after `total: number;`:
  `/** 1-based position among slides of the same type ("question 3 of 12"). Optional: older servers do not send it. */ kindIndex?: number; kindTotal?: number;`
- Replace `toPublicSlide` with:
  ```ts
  /** NEVER spread `slide` here: it would leak `correct`. */
  export function toPublicSlide(slide: Slide, index: number, slides: readonly Slide[]): PublicSlide {
    const same = slides.filter((x) => x.type === slide.type);
    const base = { id: slide.id, type: slide.type, prompt: slide.prompt, index, total: slides.length, kindIndex: same.findIndex((x) => x.id === slide.id) + 1, kindTotal: same.length };
    switch (slide.type) {
      case 'mcq': return { ...base, options: [...slide.options], timeLimitSec: slide.timeLimitSec };
      case 'poll': return { ...base, options: [...slide.options] };
      case 'wordcloud': return { ...base, maxEntries: slide.maxEntries };
      case 'content': return { ...base, body: slide.body };
      case 'qa': return base;
    }
  }
  ```
- In `buildPublicState`, change `toPublicSlide(slide, cur.index, s.deck.slides.length)` to `toPublicSlide(slide, cur.index, s.deck.slides)`.
- `grep -rn "toPublicSlide(" packages apps --include=*.ts --include=*.tsx | grep -v node_modules`: fix every other caller the same way.
- Core test (add to `core.test.ts`, near the other view tests): build a deck `[mcq, poll, mcq, content]`, open slide index 2, and assert `buildPublicState(...).slide` has `kindIndex === 2`, `kindTotal === 2`, `total === 4`, and **no `correct` key**: `expect('correct' in slide).toBe(false)`. Use the file's existing harness helpers; read how other tests build `RoomState` and copy that.

### 4.3 Web: `apps/web/src/lib/scene.ts` (new)
```ts
import type { PublicSlide } from '@quiz/core';

export const LETTERS = 'ABCDEF';
export const groupCode = (code: string): string => `${code.slice(0, 3)} ${code.slice(3)}`;

/** "Question 3 of 12": position among slides of the same type; falls back to slide order for older servers. */
export function slidePosition(slide: Pick<PublicSlide, 'index' | 'total' | 'kindIndex' | 'kindTotal'>): { n: number; of: number } {
  return { n: slide.kindIndex ?? slide.index + 1, of: slide.kindTotal ?? slide.total };
}

/** Projector title size by length, so prompts up to the 300-character limit fit in three lines on the 1920px canvas. */
export function titleClass(text: string): string {
  const n = text.length;
  if (n <= 60) return 'text-[84px] leading-[88px] tracking-[-0.015em]';
  if (n <= 110) return 'text-[68px] leading-[74px] tracking-[-0.01em]';
  if (n <= 170) return 'text-[56px] leading-[62px] tracking-[-0.01em]';
  return 'text-[48px] leading-[54px]';
}

/** Answer-card text size on the projector by length (options can be up to 120 characters). */
export function optionClass(text: string): string {
  const n = text.length;
  if (n <= 40) return 'text-[40px] leading-[48px]';
  if (n <= 90) return 'text-[32px] leading-[40px]';
  return 'text-[27px] leading-[35px]';
}

/** Shares of all answers (honest proportions, not scaled to the largest) and the single leader, if there is one. */
export function columnShares(counts: readonly number[], n: number): { total: number; shares: number[]; leader: number | null } {
  const c = Array.from({ length: n }, (_, i) => Math.max(0, counts[i] ?? 0));
  const total = c.reduce((a, b) => a + b, 0);
  const shares = c.map((v) => (total > 0 ? v / total : 0));
  const top = Math.max(0, ...c);
  const leaders = c.flatMap((v, i) => (top > 0 && v === top ? [i] : []));
  return { total, shares, leader: leaders.length === 1 ? leaders[0]! : null };
}
```
`apps/web/src/lib/scene.test.ts` (new):
```ts
import { describe, expect, it } from 'vitest';
import { columnShares, groupCode, optionClass, slidePosition, titleClass } from './scene';

describe('scene helpers', () => {
  it('groups the join code', () => { expect(groupCode('173011')).toBe('173 011'); });
  it('uses the per-type position when the server sends it', () => {
    expect(slidePosition({ index: 4, total: 9, kindIndex: 3, kindTotal: 6 })).toEqual({ n: 3, of: 6 });
    expect(slidePosition({ index: 4, total: 9 })).toEqual({ n: 5, of: 9 });
  });
  it('shrinks long titles and options', () => {
    expect(titleClass('Short')).toContain('84px');
    expect(titleClass('x'.repeat(200))).toContain('48px');
    expect(optionClass('x'.repeat(100))).toContain('27px');
  });
  it('computes honest shares and a unique leader', () => {
    expect(columnShares([0, 0, 0, 0], 4)).toEqual({ total: 0, shares: [0, 0, 0, 0], leader: null });
    const r = columnShares([1, 3, 0], 4);
    expect(r.total).toBe(4);
    expect(r.shares).toEqual([0.25, 0.75, 0, 0]);
    expect(r.leader).toBe(1);
    expect(columnShares([2, 2], 2).leader).toBeNull();
  });
});
```

### 4.4 Web: action titles (`apps/web/src/lib/insights.ts`)
Replace `mcqTitle` with:
```ts
/** Results headline: a full-sentence finding with the number and the correct answer's letter. */
export function mcqTitle(p: { qNumber: number; accuracy: number; answered: number; correctLetter?: string | null }): string {
  if (p.answered === 0) return `No one answered Q${p.qNumber}`;
  const pct = pf.format(p.accuracy);
  const answer = p.correctLetter ? `the correct answer, ${p.correctLetter}` : 'the correct answer';
  if (p.accuracy < 0.4) return `Only ${pct} chose ${answer}`;
  if (p.accuracy >= 0.8) return `${pct} chose ${answer}: well understood`;
  return `${pct} chose ${answer}`;
}
```
Then:
- Open `apps/web/src/lib/insights.test.ts` and rewrite every `mcqTitle` expectation to the new wording. Expected values:
  - answered 0 → `'No one answered Q1'`
  - accuracy 0.3 with letter C → `'Only 30% chose the correct answer, C'`
  - 0.85 without a letter → `'85% chose the correct answer: well understood'`
  - 0.55 with letter B → `'55% chose the correct answer, B'`
- `grep -rn "mcqTitle(" apps/web/src`: every caller still compiles (the new field is optional). The projector caller passes the letter in U09.

**Checks:** core build + test; web typecheck + test (insights and scene tests pass). Commit `U04: displayPrompt, per-type slide position, scene sizing helpers, sharper action titles`.

---

## U05: Restyle the existing chart components

**Skill rules:**
- Annotation callouts (the ✓ Correct badge must read as a callout).
- Colour discipline: verdigris for data, neutral for "other", no seal series.
- Polish: no duplicated numbers, no truncation that hides content on the projector.

### 5.1 `components/charts/meter.tsx`: replace the file
```tsx
import { nf, pf } from './format';

const TONE = { accent: 'var(--accent)', good: 'var(--good)', warning: 'var(--warning)', critical: 'var(--critical)' } as const;

/** Progress toward a known total. The empty part is always visible (--track); with no total it says so instead of "0 of 0". */
export function Meter({ value, max, label, tone = 'accent', size = 'md' }: { value: number; max: number; label: string; tone?: keyof typeof TONE; size?: 'md' | 'xl' }) {
  const ratio = max > 0 ? Math.min(1, value / max) : 0;
  const xl = size === 'xl';
  return (
    <div>
      <div className="w-full overflow-hidden rounded-[2px] bg-track" style={{ height: xl ? 10 : 6 }} role="progressbar" aria-valuemin={0} aria-valuemax={max} aria-valuenow={value} aria-label={label}>
        <div className="h-full transition-[width] duration-300 ease-out" style={{ width: `${ratio * 100}%`, background: TONE[tone] }} />
      </div>
      <p className={xl ? 'num mt-3 text-[22px] leading-8 text-ink-2' : 'mt-2 text-[13px] leading-5 text-ink-2'}>
        {max > 0 ? (
          <><span className="tnum">{nf.format(value)}</span> of <span className="tnum">{nf.format(max)}</span> {label} · <span className="tnum">{pf.format(ratio)}</span></>
        ) : 'Waiting for participants to join'}
      </p>
    </div>
  );
}
```

### 5.2 `components/charts/countdown.tsx`: replace the returned JSX and the tone line
Replace the line `const tone = …` with:
`  const tone = secs <= 3 ? 'var(--critical)' : secs <= 5 ? 'var(--warning)' : 'var(--accent)';`

Replace the `return (…)` block with:
```tsx
  return (
    <div className="w-full">
      <div className="flex items-baseline gap-4">
        <span className={cx('num text-ink', xl ? 'text-[88px] leading-[88px]' : 'text-[28px] leading-8')} style={secs <= 5 ? { color: tone } : undefined} aria-live="off">{secs}</span>
        <span className={cx('label-mono text-ink-3', xl ? 'text-[22px]' : 'text-[11px]')}>{remaining <= 0 ? 'Time’s up' : secs === 1 ? 'second left' : 'seconds left'}</span>
      </div>
      <div className={cx('overflow-hidden rounded-[2px] bg-track', xl ? 'mt-4' : 'mt-2')} style={{ height: xl ? 8 : 4 }} role="progressbar" aria-valuemin={0} aria-valuemax={Math.ceil(totalMs / 1000)} aria-valuenow={secs} aria-label="Time remaining">
        <div className="h-full" style={{ width: `${ratio * 100}%`, background: tone }} />
      </div>
    </div>
  );
```
The number now appears once; the label says "seconds left" (fixes "16" + "16s left").

### 5.3 `components/charts/bar-list.tsx`: replace the file
```tsx
'use client';
import { cx } from '@/lib/cx';
import { Icon } from '@/components/ui/icons';
import { nf, pf } from './format';
import { Tooltip, useTip } from './tooltip';
import { useWidth } from './use-width';

export interface BarItem { key: string; label: string; value: number; focal?: boolean; badge?: string }

/**
 * Horizontal bars on a visible track. Width = share of the total (or of `maxValue` when given), so the bars are honest
 * proportions. Focal mode: the focal bar is verdigris, the rest neutral, and the badge is a callout so colour is never alone.
 */
export function BarList({ items, total, valueFormat = 'count', mode = 'uniform', maxValue, size = 'md' }: {
  items: BarItem[]; total?: number; valueFormat?: 'count' | 'percent' | 'both'; mode?: 'uniform' | 'focal'; maxValue?: number; size?: 'md' | 'xl';
}) {
  const { tip, show, hide } = useTip();
  const [ref, width] = useWidth<HTMLDivElement>();
  const sum = total ?? items.reduce((a, b) => a + b.value, 0);
  const scale = maxValue ?? sum;
  const xl = size === 'xl';
  const fmt = (v: number) => {
    const pct = sum > 0 ? pf.format(v / sum) : '0%';
    return valueFormat === 'count' ? nf.format(v) : valueFormat === 'percent' ? pct : `${nf.format(v)} · ${pct}`;
  };
  return (
    <div ref={ref} className="relative flex flex-col" style={{ gap: xl ? 22 : 12 }}>
      {items.map((it) => {
        const pct = scale > 0 && it.value > 0 ? Math.max(0.8, (it.value / scale) * 100) : 0;
        const muted = mode === 'focal' && !it.focal;
        return (
          <div
            key={it.key}
            tabIndex={0}
            className={cx('grid items-center rounded-[2px]', xl ? 'grid-cols-[minmax(0,38%)_1fr_220px] gap-6 text-[28px] leading-9' : 'grid-cols-[minmax(0,42%)_1fr_92px] gap-3 text-[14px] leading-5')}
            onPointerMove={(e) => { const r = ref.current?.getBoundingClientRect(); if (r) show({ x: e.clientX - r.left, y: e.clientY - r.top, rows: [{ value: fmt(it.value), label: it.label }] }); }}
            onPointerLeave={hide}
            onFocus={(e) => { const r = ref.current?.getBoundingClientRect(); const b = e.currentTarget.getBoundingClientRect(); if (r) show({ x: b.left - r.left + b.width / 2, y: b.top - r.top + b.height / 2, rows: [{ value: fmt(it.value), label: it.label }] }); }}
            onBlur={hide}
          >
            <div className="flex min-w-0 items-start gap-2">
              <span className={cx('line-clamp-2 min-w-0', muted ? 'text-ink-2' : 'text-ink')} title={it.label}>{it.label}</span>
              {it.badge ? (
                <span className={cx('inline-flex shrink-0 items-center gap-1 rounded-[2px] border border-accent/30 bg-accent-wash font-semibold text-accent', xl ? 'px-2.5 py-1 text-[20px]' : 'px-1.5 py-0.5 text-[11px]')}>
                  <Icon name="check" size={xl ? 20 : 12} />
                  {it.badge}
                </span>
              ) : null}
            </div>
            <div className="overflow-hidden rounded-[2px] bg-track" style={{ height: xl ? 24 : 14 }}>
              <div
                className="h-full transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ width: `${pct}%`, background: muted ? 'var(--neutral-bar)' : 'var(--accent)' }}
              />
            </div>
            <div className={cx('num text-right', muted ? 'text-ink-2' : 'text-ink')}>{fmt(it.value)}</div>
          </div>
        );
      })}
      <Tooltip tip={tip} containerWidth={width} />
    </div>
  );
}
```
Behaviour change to note in your report: bars now scale to the **total**, not the largest value. The presenter's live options, reports and the phone result all show honest shares.

### 5.4 `components/charts/rank-table.tsx`: three edits
- Rank cell: `<span className={cx('tnum', r.rank <= 3 ? 'font-semibold text-ink' : 'text-ink-3')}>{r.rank}</span>`
  → `<span className={cx('num', r.rank === 1 ? 'text-seal' : r.rank <= 3 ? 'text-ink' : 'text-ink-3')}>{r.rank}</span>`
- Bar wrapper `<span aria-hidden="true" className="block" style={{ height: xl ? 12 : 8 }}>`
  → `<span aria-hidden="true" className="block overflow-hidden rounded-[2px] bg-track" style={{ height: xl ? 12 : 8 }}>`
- Bar fill: replace `background: 'var(--series-1)', borderRadius: 4` with `background: 'var(--accent)'`.
- Score cell: replace `tnum text-right font-semibold text-ink` with `num text-right text-ink`.

### 5.5 `components/charts/word-cloud.tsx`
Replace the `cls` line with:
```tsx
        const r = ordered.rank.get(w.word) ?? 99;
        const cls = cx('leading-tight', size === 'xl' && 'font-serif', prominent ? 'text-ink' : r < Math.max(ordered.top * 4, 3) ? 'text-accent' : 'text-ink-2', !prominent && size !== 'xl' && 'font-normal', prominent && size !== 'xl' && 'font-semibold', w.hidden && 'text-ink-3 line-through');
```
Result:
- Top 10% are ink.
- The next tier (up to about 40%) is verdigris.
- The rest are ink-2.
- On the projector (xl) every word is in the serif.

### 5.6 No edits needed
`line-chart.tsx`, `column-chart.tsx`, `histogram.tsx` and `sparkline.tsx` already read `var(--series-*)`, `var(--neutral-bar)`, `var(--accent)`, `var(--ink-3)` and `var(--hairline)`, so they recolour from U01. Do not edit them.

**Checks:**
- web typecheck + test.
- `/charts` in both themes:
  - Every BarList, Meter and Countdown shows a visible track.
  - BarList labels wrap to two lines instead of "…".
  - The badge is a green-tinted chip.
  - The countdown shows the number once.

Commit `U05: tracks, honest shares, single countdown number, verdigris data, serif cloud`.

---

## U06: New chart components: `ResultColumns` and `Podium`

**Skill rules:**
- **The moneyshot** (`archetypes.md` §P): one big number, the correct column the only coloured one.
- **Symmetry**: identical structure per column.
- **Three is the magic number**: a podium of exactly three.
- **Annotation callout**: the ✓ Correct badge.

### 6.1 `apps/web/src/components/charts/result-columns.tsx` (new)
```tsx
'use client';
import { useEffect, useState } from 'react';
import { cx } from '@/lib/cx';
import { Icon } from '@/components/ui/icons';
import { columnShares, LETTERS } from '@/lib/scene';
import { nf, pf } from './format';

/**
 * Vertical result columns: the reveal's "moneyshot". Each column is identical (value block, column on a full-height track,
 * letter + full option text). Heights are shares of all answers. highlight: 'correct' colours only the correct column
 * (verdigris + ✓ callout); 'leader' colours only a unique leader; 'none' colours all columns (live poll).
 */
export function ResultColumns({ options, counts, correct, highlight = 'correct', size = 'xl' }: {
  options: string[]; counts: readonly number[]; correct: number | null; highlight?: 'correct' | 'leader' | 'none'; size?: 'md' | 'xl';
}) {
  const { total, shares, leader } = columnShares(counts, options.length);
  const focal = highlight === 'correct' ? correct : highlight === 'leader' ? leader : null;
  const [grown, setGrown] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setGrown(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const xl = size === 'xl';
  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <div className={cx('grid h-full min-h-0', xl ? 'gap-12' : 'gap-3')} style={{ gridTemplateColumns: `repeat(${Math.max(1, options.length)}, minmax(0, 1fr))` }}>
        {options.map((label, i) => {
          const isFocal = focal === i;
          const coloured = highlight === 'none' || isFocal;
          const share = shares[i] ?? 0;
          const count = counts[i] ?? 0;
          return (
            <figure key={i} className="m-0 flex min-h-0 flex-col" aria-label={`${LETTERS[i]}: ${label}. ${nf.format(count)} answers, ${pf.format(share)}`}>
              <div className={cx('flex items-end justify-between gap-3', xl ? 'mb-4 min-h-[112px]' : 'mb-2 min-h-12')}>
                <div className="min-w-0">
                  <p className={cx('font-serif leading-none', xl ? 'text-[88px]' : 'text-[28px]', coloured ? 'text-ink' : 'text-ink-2')}>{pf.format(share)}</p>
                  <p className={cx('num text-ink-3', xl ? 'mt-2 text-[22px]' : 'mt-1 text-[11px]')}>{nf.format(count)}{xl ? (count === 1 ? ' answer' : ' answers') : ''}</p>
                </div>
                {highlight === 'correct' && correct === i ? (
                  <span className={cx('inline-flex shrink-0 items-center gap-1.5 rounded-[2px] border border-accent/30 bg-accent-wash font-semibold text-accent', xl ? 'px-3 py-1.5 text-[22px]' : 'px-1.5 py-0.5 text-[11px]')}>
                    <Icon name="check" size={xl ? 22 : 12} />Correct
                  </span>
                ) : null}
              </div>
              <div className={cx('relative min-h-0 flex-1 overflow-hidden rounded-[2px] bg-track', xl ? 'min-h-[160px]' : 'min-h-[72px]')}>
                <div
                  className="absolute inset-x-0 bottom-0 transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ height: grown && share > 0 ? `${Math.max(1.5, share * 100)}%` : '0%', background: coloured ? 'var(--accent)' : 'var(--neutral-bar)' }}
                />
              </div>
              <figcaption className={cx('flex items-start border-t border-baseline', xl ? 'gap-4 pt-4' : 'gap-2 pt-2')}>
                <span className={cx('num flex shrink-0 items-center justify-center rounded-[2px] border', coloured && highlight !== 'none' ? 'border-accent text-accent' : 'border-baseline text-ink-2', xl ? 'h-11 w-11 text-[22px]' : 'h-6 w-6 text-[11px]')}>{LETTERS[i]}</span>
                <span className={cx('min-w-0 line-clamp-3', xl ? 'text-[26px] leading-[34px]' : 'text-[13px] leading-[18px]', coloured ? 'text-ink' : 'text-ink-2')} title={label}>{label}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>
      {total === 0 ? (
        <p className={cx('pointer-events-none absolute inset-x-0 top-[38%] text-center font-serif italic text-ink-3', xl ? 'text-[44px]' : 'text-[16px]')}>No responses were submitted</p>
      ) : null}
    </div>
  );
}
```

### 6.2 `apps/web/src/components/charts/podium.tsx` (new)
```tsx
import { cx } from '@/lib/cx';
import { nf } from './format';

export interface PodiumRow { rank: number; name: string; score: number }

/** Top three, arranged 2nd · 1st · 3rd. The winner's block is ink with a seal top edge: the session's climax. */
export function Podium({ rows, size = 'xl' }: { rows: PodiumRow[]; size?: 'md' | 'xl' }) {
  const top = rows.slice(0, 3);
  const xl = size === 'xl';
  const heights = xl ? [300, 210, 150] : [96, 68, 48];
  const order = [1, 0, 2].filter((i) => i < top.length);
  return (
    <ol className={cx('m-0 grid list-none items-end p-0', xl ? 'gap-8' : 'gap-3')} style={{ gridTemplateColumns: `repeat(${order.length}, minmax(0, 1fr))` }} aria-label="Top three">
      {order.map((i, pos) => {
        const r = top[i]!;
        const first = i === 0;
        return (
          <li key={`${r.rank}-${r.name}`} className="podium-rise flex min-w-0 flex-col" style={{ animationDelay: `${pos * 120}ms` }}>
            <p className={cx('truncate text-center font-serif text-ink', xl ? 'text-[44px] leading-[52px]' : 'text-[16px] leading-5')} title={r.name}>{r.name}</p>
            <p className={cx('num text-center text-ink-2', xl ? 'mt-1 text-[24px]' : 'text-[11px]')}>{nf.format(r.score)} pts</p>
            <div
              className={cx('flex justify-center border', xl ? 'mt-4' : 'mt-2', first ? 'border-ink border-t-4 border-t-seal bg-ink text-page' : 'border-hairline bg-sunken text-ink-2')}
              style={{ height: heights[i] }}
            >
              <span className={cx('font-serif leading-none', xl ? 'mt-6 text-[120px]' : 'mt-2 text-[36px]')}>{r.rank}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
```

### 6.3 `components/charts/index.ts`
Append:
```ts
export { ResultColumns } from './result-columns';
export { Podium, type PodiumRow } from './podium';
```

### 6.4 Kitchen sink
Add both to `app/(dev)/charts/kitchen-sink.tsx` in a new section "Results":
- `ResultColumns` xl inside a `div` of fixed `h-[640px]`, with options `['By an executive notification issued by the President after consulting the UPSC', 'By a statutory order enacted by the Prime Minister', 'By a resolution supported by not less than two-thirds of members present and voting in the Rajya Sabha', 'By a joint resolution passed by a simple majority in both Houses']`, counts `[96, 41, 612, 182]`, correct `2`.
- The same with counts `[0, 0, 0, 0]`.
- A poll with `highlight="leader"`.
- `Podium` with 3 rows and with 2 rows.

Follow the file's existing section pattern.

**Checks:**
- web typecheck + test.
- `/charts` both themes:
  - Columns grow from the baseline.
  - The correct column is verdigris with the ✓ chip; others are neutral.
  - The zero case shows full-height empty tracks and the italic "No responses were submitted".
  - The podium reads 2-1-3 with the winner block ink and its top edge seal.

Commit `U06: result columns and podium`.

---

## U07: Projector theme (dark by default, switchable, shared with the presenter's preview)

**Skill rules:** colour discipline; the audience sees the same deck the presenter previews, so their themes must match.

### 7.1 `apps/web/src/lib/projector-theme.ts` (new)
```ts
'use client';
import { useCallback, useEffect, useState } from 'react';

export type ProjectorTheme = 'dark' | 'light';
const KEY = 'hvs:projector-theme';

function read(): ProjectorTheme {
  try { return localStorage.getItem(KEY) === 'light' ? 'light' : 'dark'; } catch { return 'dark'; }
}

/**
 * Projector theme, dark by default (better in halls). Stored on the presenter's laptop; the projector window and the
 * presenter's preview stay in sync through the storage event. `?theme=light|dark` on the projector URL sets it once.
 */
export function useProjectorTheme(): [ProjectorTheme, (t: ProjectorTheme) => void] {
  const [theme, setTheme] = useState<ProjectorTheme>('dark');
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('theme');
    if (fromUrl === 'light' || fromUrl === 'dark') { try { localStorage.setItem(KEY, fromUrl); } catch { /* private mode */ } }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable after mount
    setTheme(read());
    const onStorage = (e: StorageEvent) => { if (e.key === KEY) setTheme(read()); };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);
  const set = useCallback((t: ProjectorTheme) => {
    try { localStorage.setItem(KEY, t); } catch { /* private mode */ }
    setTheme(t);
  }, []);
  return [theme, set];
}
```

### 7.2 `apps/web/src/components/present/projector-screen.tsx`
- Import: `import { useProjectorTheme } from '@/lib/projector-theme';`
- First line in the component: `const [theme] = useProjectorTheme();`
- Outer div: add `data-theme={theme}` (so the letterbox around the 16:9 canvas matches the scene):
  `<div data-theme={theme} className="flex h-dvh w-screen items-center justify-center overflow-hidden bg-page" style={{ cursor: active ? 'default' : 'none' }}>`
- Pass the theme to the scene: `<ProjectorScene host={state.host} clockOffset={state.clockOffset} siteUrl={siteUrl} theme={theme} />`
- After U03's codemod, the full-screen button reads `rounded-[4px]`; leave it.

(`ProjectorScene` gains the `theme` prop in U09. Until then TypeScript errors on this line, so **do U07 and U09 before running typecheck**; U07 and U08 are committed together with U09.)

---

## U08: `SceneFrame`: nav bar, kicker, action title, rule, source footer

**Skill rules (read `archetypes.md` §G and "Reusable patterns" first):**
- **Persistent navigation bar** on every content slide; current section highlighted; page number at the right.
- **Not shown** on the cover or on dividers. The Lobby and Content scenes therefore do not use `SceneFrame`.
- **Source citation** in small type at the bottom.
- **Sub-section label** bottom-right.
- **Action title**.

`apps/web/src/components/present/scene-frame.tsx` (new):
```tsx
'use client';
import type { HostState } from '@quiz/core';
import { cx } from '@/lib/cx';
import { groupCode, titleClass } from '@/lib/scene';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Every projector content scene follows the case-deck content-slide archetype: a persistent nav bar (deck, progress with
 * the current slide in seal, page number, join reminder for late joiners), a mono kicker, a serif action title, a short
 * seal rule, the body, and a footer with the source on the left and the section label on the right.
 */
export function SceneFrame({ host, siteUrl, kicker, title, subtitle, source, section, children }: {
  host: HostState; siteUrl: string; kicker: string; title: string; subtitle?: string; source?: string; section?: string; children: React.ReactNode;
}) {
  const slides = host.deck.slides;
  const ended = host.pub.phase === 'ended';
  const current = ended ? slides.length : host.pub.slide?.index ?? -1;
  const page = Math.min(Math.max(1, slides.length), Math.max(1, current + 1));
  return (
    <div className="flex h-full flex-col">
      <header className="flex h-14 shrink-0 items-center gap-10 border-b border-hairline">
        <p className="label-mono min-w-0 max-w-[480px] truncate text-[18px] text-ink-3">HVS Menti · {host.pub.title}</p>
        <ol className="m-0 flex min-w-0 flex-1 list-none items-center gap-1.5 p-0" aria-label={`Slide ${page} of ${slides.length}`}>
          {slides.length <= 40 ? (
            slides.map((s, i) => (
              <li key={s.id} className={cx('h-1 min-w-1 flex-1 rounded-[1px]', i < current ? 'bg-ink-3' : i === current ? 'bg-seal' : 'bg-track')} />
            ))
          ) : (
            <li className="h-1 flex-1 overflow-hidden rounded-[1px] bg-track">
              <span className="block h-full bg-seal" style={{ width: `${(page / slides.length) * 100}%` }} />
            </li>
          )}
        </ol>
        <p className="label-mono whitespace-nowrap text-[18px] text-ink-3"><span className="text-ink">{pad(page)}</span> / {pad(slides.length)}</p>
        <p className="whitespace-nowrap font-mono text-[18px] text-ink-3">{new URL(siteUrl).host}/j · <span className="text-ink">{groupCode(host.joinCode)}</span></p>
      </header>
      <div className="mt-12 shrink-0">
        <p className="kicker-xl">{kicker}</p>
        <h1 className={cx('mt-4 font-serif text-ink', titleClass(title))}>{title}</h1>
        {subtitle ? <p className="mt-4 line-clamp-2 max-w-[1600px] text-[30px] leading-[40px] text-ink-2">{subtitle}</p> : null}
        <span aria-hidden="true" className="mt-8 block h-[3px] w-24 bg-seal" />
      </div>
      <div className="mt-10 flex min-h-0 flex-1 flex-col">{children}</div>
      {source || section ? (
        <footer className="mt-8 flex h-10 shrink-0 items-end justify-between gap-8 border-t border-hairline">
          <p className="min-w-0 truncate font-mono text-[16px] text-ink-3">{source ? `Source: ${source}` : ''}</p>
          <p className="label-mono whitespace-nowrap text-[16px] text-ink-3">{section}</p>
        </footer>
      ) : null}
    </div>
  );
}
```

---

## U09: Rewrite the projector scenes (`apps/web/src/components/present/scene.tsx`)

**Skill rules (re-read `archetypes.md` §A cover, §E divider, §I workhorse, §P moneyshot, §W conclusion, "Reusable patterns"):**
- Cover = Lobby (no nav).
- Divider = Content (no nav).
- Content slides = question / results / poll / cloud / Q&A / leaderboard, all inside `SceneFrame`.
- Moneyshot = reveal columns.
- Conclusion = final podium, with no new content.
- Every title on results and leaderboard scenes is an action title.

Replace the file **entirely** with:
```tsx
'use client';
import { QRCodeSVG } from 'qrcode.react';
import { displayPrompt, type HostState } from '@quiz/core';
import { Countdown, LineChart, Meter, Podium, RankTable, ResultColumns, WordCloud, nf, secs } from '@/components/charts';
import { cx } from '@/lib/cx';
import { leaderboardTitle, mcqTitle, pollTitle } from '@/lib/insights';
import type { ProjectorTheme } from '@/lib/projector-theme';
import { groupCode, LETTERS, optionClass, slidePosition, titleClass } from '@/lib/scene';
import { SceneFrame } from './scene-frame';

export { groupCode };

export interface SceneProps { host: HostState; clockOffset: number; siteUrl: string; theme?: ProjectorTheme }

const participants = (n: number) => `${nf.format(n)} ${n === 1 ? 'participant' : 'participants'}`;
const SealRule = () => <span aria-hidden="true" className="block h-[3px] w-24 bg-seal" />;

/** Cover archetype: no nav bar. Title, join instructions, code and QR on the left; the live joined count on the right. */
function Lobby({ host, siteUrl }: SceneProps) {
  const joinUrl = `${siteUrl.replace(/\/$/, '')}/j/${host.joinCode}`;
  const t = host.joinTimeline;
  const points = t.cumulative.map((c, i) => ({ x: Math.round((i * t.bucketMs) / 1000), y: c }));
  return (
    <div className="grid h-full grid-cols-[1.15fr_1fr] gap-20">
      <div className="flex min-w-0 flex-col justify-center">
        <p className="kicker-xl">[ Live session · Join now ]</p>
        <h1 className="mt-6 line-clamp-2 font-serif text-[88px] leading-[92px] tracking-[-0.015em] text-ink">{host.pub.title}</h1>
        <div className="mt-10"><SealRule /></div>
        <div className="mt-12 flex items-center gap-12">
          <div className="shrink-0 rounded-[4px] border border-hairline bg-white p-4">
            <QRCodeSVG value={joinUrl} size={248} level="M" fgColor="#14130F" bgColor="#ffffff" marginSize={1} title="Scan to join" />
          </div>
          <div className="min-w-0">
            <p className="label-mono text-[22px] text-ink-3">Join at</p>
            <p className="mt-2 font-mono text-[44px] leading-[52px] text-ink">{new URL(siteUrl).host}/j</p>
            <p className="label-mono mt-8 text-[22px] text-ink-3">Session code</p>
            <p className="num mt-2 whitespace-nowrap text-[120px] leading-none tracking-[0.04em] text-ink">{groupCode(host.joinCode)}</p>
          </div>
        </div>
        <p className="mt-10 max-w-[900px] text-[28px] leading-[38px] text-ink-2">Scan the code with your phone camera, or open the address and type the code.</p>
      </div>
      <div className="flex min-w-0 flex-col justify-center border-l border-hairline pl-20">
        <p className="label-mono text-[22px] text-ink-3">Joined so far</p>
        <p className="mt-2 font-serif text-[220px] leading-none tracking-[-0.02em] text-ink tnum">{nf.format(host.pub.participantCount)}</p>
        {points.length > 1 ? (
          <div className="mt-8">
            <LineChart
              area height={320} ariaLabel="Participants joined over time"
              xFormat={(s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`} yFormat={(n) => nf.format(n)}
              series={[{ key: 'joined', label: 'Joined', points }]}
            />
            <p className="mt-3 font-mono text-[16px] text-ink-3">Participants joined since the session opened</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function McqActive({ host, clockOffset, siteUrl }: SceneProps) {
  const slide = host.pub.slide!;
  const open = host.pub.status === 'open';
  const pos = slidePosition(slide);
  const options = slide.options ?? [];
  return (
    <SceneFrame
      host={host} siteUrl={siteUrl}
      kicker={`Question ${pos.n} of ${pos.of}`}
      title={displayPrompt(slide.prompt)}
      source={open ? `answers stay hidden until the reveal · ${participants(host.pub.participantCount)} in the room` : `answers closed · ${nf.format(host.answered)} received`}
      section={`Quiz · Q${pos.n}`}
    >
      <div className={cx('grid flex-1 content-start gap-6', options.length > 4 ? 'grid-cols-3' : 'grid-cols-2')}>
        {options.map((text, i) => (
          <div key={i} className="flex min-h-[120px] items-center gap-6 rounded-[4px] border border-hairline bg-surface px-8 py-5">
            <span className="num flex h-14 w-14 shrink-0 items-center justify-center rounded-[2px] border border-baseline text-[28px] text-ink-2">{LETTERS[i]}</span>
            <span className={cx('min-w-0 text-ink', optionClass(text))}>{text}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 grid shrink-0 grid-cols-2 items-end gap-24">
        {open && host.pub.endsAt ? (
          <Countdown endsAt={host.pub.endsAt} clockOffset={clockOffset} totalMs={(slide.timeLimitSec ?? 20) * 1000} size="xl" />
        ) : (
          <div>
            <p className="label-mono text-[22px] text-ink-3">Answers closed</p>
            <p className="mt-2 font-serif text-[72px] leading-[76px] text-ink">Time’s up</p>
          </div>
        )}
        <Meter value={host.answered} max={host.pub.participantCount} label="answered" size="xl" />
      </div>
    </SceneFrame>
  );
}

/** The moneyshot: action title with the number, prompt as sub-headline, one coloured column for the correct answer. */
function McqRevealed({ host, siteUrl }: SceneProps) {
  const slide = host.pub.slide!;
  const r = host.pub.results;
  const pos = slidePosition(slide);
  const options = slide.options ?? [];
  const counts = r?.counts ?? options.map(() => 0);
  const answered = r?.answered ?? 0;
  const correct = r?.correct ?? null;
  const accuracy = answered > 0 && correct !== null ? (counts[correct] ?? 0) / answered : 0;
  const median = host.medianLatencyMs;
  return (
    <SceneFrame
      host={host} siteUrl={siteUrl}
      kicker={`Question ${pos.n} of ${pos.of} · Results`}
      title={mcqTitle({ qNumber: pos.n, accuracy, answered, correctLetter: correct !== null ? LETTERS[correct] ?? null : null })}
      subtitle={displayPrompt(slide.prompt)}
      source={`live responses from ${nf.format(answered)} of ${participants(host.pub.participantCount)}${median !== null && answered > 0 ? ` · median response ${secs(median)}` : ''}`}
      section={`Quiz · Q${pos.n}`}
    >
      <ResultColumns size="xl" options={options} counts={counts} correct={correct} highlight="correct" />
    </SceneFrame>
  );
}

function Poll({ host, siteUrl }: SceneProps) {
  const slide = host.pub.slide!;
  const open = host.pub.status === 'open';
  const options = slide.options ?? [];
  const counts = host.pub.results?.counts ?? host.counts ?? [];
  const pos = slidePosition(slide);
  return (
    <SceneFrame
      host={host} siteUrl={siteUrl}
      kicker={`Poll ${pos.n} of ${pos.of} · ${open ? 'Live' : 'Results'}`}
      title={open ? displayPrompt(slide.prompt) : pollTitle({ options, counts })}
      subtitle={open ? undefined : displayPrompt(slide.prompt)}
      source={`live responses from ${nf.format(host.answered)} of ${participants(host.pub.participantCount)}`}
      section={`Poll · P${pos.n}`}
    >
      <ResultColumns size="xl" options={options} counts={counts} correct={null} highlight={open ? 'none' : 'leader'} />
    </SceneFrame>
  );
}

function Cloud({ host, siteUrl }: SceneProps) {
  const slide = host.pub.slide!;
  return (
    <SceneFrame
      host={host} siteUrl={siteUrl}
      kicker={`Word cloud · ${nf.format(host.answered)} ${host.answered === 1 ? 'response' : 'responses'}`}
      title={displayPrompt(slide.prompt)}
      source={`responses from ${nf.format(host.answered)} of ${participants(host.pub.participantCount)} · larger words were given more often`}
      section="Word cloud"
    >
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden"><WordCloud size="xl" words={host.words ?? []} /></div>
    </SceneFrame>
  );
}

function Qa({ host, siteUrl }: SceneProps) {
  const visible = host.qa.filter((q) => q.status === 'approved' || q.status === 'answered');
  const items = [...visible].sort((a, b) => b.votes - a.votes || a.at - b.at).slice(0, 6);
  return (
    <SceneFrame
      host={host} siteUrl={siteUrl}
      kicker={`Audience Q&A · ${nf.format(visible.length)} ${visible.length === 1 ? 'question' : 'questions'}`}
      title={displayPrompt(host.pub.slide?.prompt ?? 'Questions from the room')}
      source="questions from participants, ranked by votes"
      section="Q&A"
    >
      {items.length === 0 ? (
        <p className="font-serif text-[44px] italic text-ink-3">Waiting for questions…</p>
      ) : (
        <ol className="m-0 flex list-none flex-col gap-4 p-0">
          {items.map((q, i) => (
            <li key={q.qid} className={cx('grid grid-cols-[140px_1fr_auto] items-center gap-8 rounded-[4px] border border-hairline bg-surface px-8 py-5', i === 0 && 'border-l-4 border-l-seal')}>
              <span className="text-right">
                <span className="num block text-[52px] leading-none text-accent">{nf.format(q.votes)}</span>
                <span className="label-mono text-[16px] text-ink-3">{q.votes === 1 ? 'vote' : 'votes'}</span>
              </span>
              <span className={cx('line-clamp-2 text-[34px] leading-[44px]', q.status === 'answered' ? 'text-ink-3' : 'text-ink')}>{q.text}</span>
              {q.status === 'answered' ? <span className="label-mono rounded-[2px] border border-hairline px-3 py-1 text-[16px] text-ink-3">Answered</span> : <span />}
            </li>
          ))}
        </ol>
      )}
    </SceneFrame>
  );
}

/** Standings (and the conclusion when ended): podium of three plus ranks 4–10. No new content. */
function Board({ host, siteUrl, ended }: SceneProps & { ended?: boolean }) {
  const all = host.pub.leaderboard ?? [];
  const rest = all.slice(3, 10);
  const quizCount = host.deck.slides.filter((s) => s.type === 'mcq').length;
  return (
    <SceneFrame
      host={host} siteUrl={siteUrl}
      kicker={ended ? 'Final results' : 'Leaderboard'}
      title={leaderboardTitle(all)}
      source={`${participants(host.pub.participantCount)} · ${nf.format(quizCount)} ${quizCount === 1 ? 'question' : 'questions'}`}
      section={ended ? 'Conclusion' : 'Quiz · Standings'}
    >
      {all.length === 0 ? (
        <p className="font-serif text-[44px] italic text-ink-3">No scores yet</p>
      ) : (
        <div className={cx('grid h-full min-h-0 items-end gap-20', rest.length > 0 ? 'grid-cols-[1.2fr_1fr]' : 'grid-cols-1 px-[16%]')}>
          <Podium rows={all.slice(0, 3).map((r) => ({ rank: r.rank, name: r.name, score: r.score }))} />
          {rest.length > 0 ? (
            <div className="self-center">
              <RankTable size="xl" maxScore={all[0]?.score} rows={rest.map((r) => ({ rank: r.rank, name: r.name, score: r.score }))} />
            </div>
          ) : null}
        </div>
      )}
    </SceneFrame>
  );
}

/** Divider archetype: no nav bar. The author's heading is shown as written (it may be numbered on purpose). */
function Content({ host }: SceneProps) {
  const slide = host.pub.slide!;
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="kicker-xl">{pad(slide.index + 1)} / {pad(slide.total)}</p>
      <h1 className={cx('mt-6 max-w-[1600px] font-serif text-ink', slide.prompt.length <= 60 ? 'text-[104px] leading-[108px] tracking-[-0.02em]' : titleClass(slide.prompt))}>{slide.prompt}</h1>
      <div className="mt-10"><SealRule /></div>
      {slide.body ? <p className="mt-10 max-w-[1400px] whitespace-pre-wrap text-[36px] leading-[52px] text-ink-2">{slide.body}</p> : null}
    </div>
  );
}

function Ended(props: SceneProps) {
  const { host } = props;
  if (host.deck.slides.some((s) => s.type === 'mcq')) return <Board {...props} ended />;
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="kicker-xl">Session complete</p>
      <h1 className="mt-6 font-serif text-[120px] leading-[120px] tracking-[-0.02em] text-ink">Thank you for taking part.</h1>
      <div className="mt-10"><SealRule /></div>
      <p className="mt-10 font-mono text-[32px] text-ink-2">{participants(host.pub.participantCount)} · {host.pub.title}</p>
    </div>
  );
}

/** One scene per (slide type, status). Never reads `host.correct` before reveal: reveal data comes from `pub.results`. */
export function ProjectorScene(props: SceneProps) {
  const { pub } = props.host;
  let scene: React.ReactNode;
  let key = 'lobby';
  if (pub.phase === 'ended') { scene = <Ended {...props} />; key = 'ended'; }
  else if (!pub.slide || !pub.status) scene = <Lobby {...props} />;
  else {
    const { slide, status } = pub;
    key = `${slide.id}:${status}`;
    switch (slide.type) {
      case 'mcq': scene = status === 'open' || status === 'closed' ? <McqActive {...props} /> : status === 'revealed' ? <McqRevealed {...props} /> : <Board {...props} />; break;
      case 'poll': scene = <Poll {...props} />; break;
      case 'wordcloud': scene = <Cloud {...props} />; break;
      case 'qa': scene = <Qa {...props} />; break;
      case 'content': scene = <Content {...props} />; break;
    }
  }
  return (
    <div key={key} data-theme={props.theme} className="scene-fade h-[1080px] w-[1920px] bg-page px-24 pb-12 pt-10 text-ink">
      {scene}
    </div>
  );
}
```
Notes for the executor:
- The **Poll** scene changed its data source: once revealed it reads `pub.results.counts`, falling back to `host.counts` while open (the presenter's host state has live counts).
- `Meter` is still used by `McqActive`; `secs` comes from `@/components/charts` (`format.ts` is re-exported). If `secs` is not exported from the index, import it from `@/components/charts/format`.
- `groupCode` stays importable from `@/components/present/scene`; the developer console imports it from there.
- Source strings start lowercase because `SceneFrame` prefixes "Source: ".

**Checks** (after U10 exists, re-run them there): web typecheck + test + build. Commit U07–U09 together:
`U07-U09: projector theme, scene frame and redesigned projector scenes`.

---

## U10: Dev scene gallery with fixtures (the visual verification harness)

**Skill rules:** critique mode needs every archetype on screen at once. This gallery is what U15's critique pass inspects.

### 10.1 `apps/web/src/lib/dev/scene-fixtures.ts` (new)
```ts
import { toPublicSlide, type Deck, type HostState, type PublicState } from '@quiz/core';

type Status = PublicState['status'];

const LONG_PROMPT = 'QUESTIONS 1. Special Federal Powers of the Council of States (Rajya Sabha) Under Article 312 of the Constitution, how can a new All-India Service common to the Union and the States be created?';

export const fixtureDeck: Deck = {
  slides: [
    {
      id: 'q1', type: 'mcq', prompt: LONG_PROMPT, correct: 2, timeLimitSec: 20, points: 1000,
      options: [
        'By an executive notification issued by the President after consulting the Union Public Service Commission',
        'By a statutory order enacted by the Prime Minister following an inter-ministerial cabinet meeting',
        'By a resolution supported by not less than two-thirds of members present and voting in the Rajya Sabha',
        'By a joint resolution passed by a simple majority in both Houses of Parliament assembled together',
      ],
    },
    { id: 'p1', type: 'poll', prompt: 'Which reform should Parliament prioritise next?', options: ['Fiscal devolution to states', 'Judicial appointments', 'Electoral finance', 'Civil services reform'] },
    { id: 'w1', type: 'wordcloud', prompt: 'One word for Indian federalism in 2026', maxEntries: 1 },
    { id: 'qa1', type: 'qa', prompt: 'Questions for the panel' },
    { id: 'c1', type: 'content', prompt: 'Part II · Centre–State relations', body: 'Three lists, one Council of States, and a Finance Commission every five years.\nThe next questions test how they fit together.' },
    { id: 'q2', type: 'mcq', prompt: 'Which of these is a constitutional body?', correct: 1, timeLimitSec: 20, points: 1000, options: ['NITI Aayog', 'Finance Commission', 'Planning Commission', 'NHRC', 'Lokpal', 'CBI'] },
  ],
  settings: { qaEnabled: true, qaModeration: false },
};

export const noQuizDeck: Deck = { slides: [fixtureDeck.slides[1]!, fixtureDeck.slides[2]!], settings: { qaEnabled: true, qaModeration: false } };

const NAMES = ['Aarav Mehta', 'Diya Sharma', 'Kabir Rao', 'Ananya Iyer', 'Vihaan Gupta', 'Ishita Bose', 'Arjun Nair', 'Meera Pillai', 'Rohan Das', 'Saanvi Kapoor'];
const BOARD = NAMES.map((name, i) => ({ rank: i + 1, name, score: 9400 - i * 610 }));
const WORDS = [
  ['cooperative', 212], ['negotiated', 140], ['asymmetric', 118], ['fiscal', 96], ['contested', 90], ['resilient', 72], ['centralised', 66],
  ['plural', 51], ['evolving', 44], ['quasi-federal', 40], ['dialogic', 22], ['regional', 19], ['competitive', 15], ['unequal', 9],
].map(([word, count]) => ({ word: String(word), count: Number(count), hidden: false }));
const QA = [
  { qid: 'a', text: 'Should the Rajya Sabha have equal representation for every state, as in the US Senate?', votes: 184, status: 'approved' as const, at: 1 },
  { qid: 'b', text: 'How has GST changed the bargaining power of states with the Centre?', votes: 121, status: 'approved' as const, at: 2 },
  { qid: 'c', text: 'Can a state refuse an All-India Service officer?', votes: 77, status: 'answered' as const, at: 3 },
  { qid: 'd', text: 'What is the role of the Inter-State Council today?', votes: 30, status: 'approved' as const, at: 4 },
];

export interface FixtureOpts {
  slide: number | null; status: Status; phase?: PublicState['phase']; participants?: number; answered?: number;
  counts?: number[] | null; results?: PublicState['results']; leaderboard?: boolean; deck?: Deck;
}

export function fixtureHost(o: FixtureOpts): HostState {
  const deck = o.deck ?? fixtureDeck;
  const now = Date.now();
  const slide = o.slide === null ? null : deck.slides[o.slide] ?? null;
  const people = o.participants ?? 1380;
  const pub: PublicState = {
    cv: 1, serverNow: now, phase: o.phase ?? (slide ? 'live' : 'lobby'), locked: false, title: 'Constitution Quiz · Round 1',
    participantCount: people,
    slide: slide && o.slide !== null ? toPublicSlide(slide, o.slide, deck.slides) : null,
    status: o.status, openedAt: o.status ? now - 4000 : null,
    endsAt: o.status === 'open' && slide?.type === 'mcq' ? now + 16_000 : null,
    results: o.results ?? null,
    leaderboard: o.leaderboard ? BOARD : null,
    qaEnabled: true,
  };
  return {
    pub, controlVersion: 1, sessionId: 'fixture', joinCode: '173011', deck,
    connected: Math.max(0, people - 38), answered: o.answered ?? 0,
    counts: o.counts ?? null, correct: slide?.type === 'mcq' ? slide.correct : null,
    words: slide?.type === 'wordcloud' ? WORDS : null,
    latencyBins: null, medianLatencyMs: 6200, throughput: [],
    joinTimeline: { startAt: now - 240_000, bucketMs: 10_000, cumulative: Array.from({ length: 24 }, (_, i) => Math.round(people * (1 - Math.exp(-i / 6)))) },
    answeredBySlide: {},
    leaderboard: BOARD.map((r) => ({ ...r, externalId: `E${r.rank}`, correctCount: 1 })),
    qa: QA, health: null,
  };
}

const MCQ_COUNTS = [96, 41, 612, 182];
const POLL_COUNTS = [402, 188, 251, 330];

export const SCENES: { id: string; label: string; make: () => HostState }[] = [
  { id: 'lobby', label: 'Lobby (cover, no nav bar)', make: () => fixtureHost({ slide: null, status: null, phase: 'lobby' }) },
  { id: 'lobby-empty', label: 'Lobby with nobody joined', make: () => fixtureHost({ slide: null, status: null, phase: 'lobby', participants: 0 }) },
  { id: 'mcq-open', label: 'Question open (long prompt with imported numbering)', make: () => fixtureHost({ slide: 0, status: 'open', answered: 412 }) },
  { id: 'mcq-open-empty', label: 'Question open, nobody in the room', make: () => fixtureHost({ slide: 0, status: 'open', participants: 0 }) },
  { id: 'mcq-closed', label: 'Question closed (time’s up)', make: () => fixtureHost({ slide: 0, status: 'closed', answered: 931 }) },
  { id: 'mcq-revealed', label: 'Results: the moneyshot', make: () => fixtureHost({ slide: 0, status: 'revealed', answered: 931, results: { counts: MCQ_COUNTS, correct: 2, answered: 931 } }) },
  { id: 'mcq-revealed-zero', label: 'Results with no responses', make: () => fixtureHost({ slide: 0, status: 'revealed', results: { counts: [0, 0, 0, 0], correct: 2, answered: 0 } }) },
  { id: 'mcq-revealed-six', label: 'Results with six options', make: () => fixtureHost({ slide: 5, status: 'revealed', answered: 900, results: { counts: [80, 410, 120, 160, 70, 60], correct: 1, answered: 900 } }) },
  { id: 'mcq-open-six', label: 'Question with six options', make: () => fixtureHost({ slide: 5, status: 'open', answered: 120 }) },
  { id: 'mcq-leaderboard', label: 'Leaderboard after a question', make: () => fixtureHost({ slide: 0, status: 'leaderboard', leaderboard: true }) },
  { id: 'poll-open', label: 'Poll live', make: () => fixtureHost({ slide: 1, status: 'open', answered: 1171, counts: POLL_COUNTS }) },
  { id: 'poll-revealed', label: 'Poll results', make: () => fixtureHost({ slide: 1, status: 'revealed', answered: 1171, counts: POLL_COUNTS, results: { counts: POLL_COUNTS, correct: null, answered: 1171 } }) },
  { id: 'wordcloud', label: 'Word cloud', make: () => fixtureHost({ slide: 2, status: 'open', answered: 1094 }) },
  { id: 'qa', label: 'Audience Q&A', make: () => fixtureHost({ slide: 3, status: 'open' }) },
  { id: 'content', label: 'Content slide (divider, no nav bar)', make: () => fixtureHost({ slide: 4, status: 'open' }) },
  { id: 'ended-quiz', label: 'Ended: final podium (conclusion)', make: () => fixtureHost({ slide: null, status: null, phase: 'ended', leaderboard: true }) },
  { id: 'ended-noquiz', label: 'Ended without a quiz', make: () => fixtureHost({ slide: null, status: null, phase: 'ended', deck: noQuizDeck }) },
];
```

### 10.2 `apps/web/src/app/(dev)/scenes/page.tsx` (new)
```tsx
import { notFound } from 'next/navigation';
import { SceneGallery } from './scene-gallery';

export const metadata = { title: 'Scene gallery' };

export default function Page() {
  if (process.env.NODE_ENV === 'production') notFound();
  return <SceneGallery />;
}
```

### 10.3 `apps/web/src/app/(dev)/scenes/scene-gallery.tsx` (new)
```tsx
'use client';
import { useEffect, useMemo, useState } from 'react';
import { ProjectorScene } from '@/components/present/scene';
import { ScaledCanvas } from '@/components/present/scaled-canvas';
import { SCENES } from '@/lib/dev/scene-fixtures';
import { cx } from '@/lib/cx';

/** Every projector scene with fixture data. ?theme=light|dark and ?scene=<id> make single-scene screenshots easy. */
export function SceneGallery() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [only, setOnly] = useState<string | null>(null);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const t = q.get('theme');
    // eslint-disable-next-line react-hooks/set-state-in-effect -- URL is only readable after mount
    if (t === 'light' || t === 'dark') setTheme(t);
    setOnly(q.get('scene'));
  }, []);
  const scenes = useMemo(() => SCENES.map((s) => ({ ...s, host: s.make() })), []);
  const list = only ? scenes.filter((s) => s.id === only) : scenes;
  return (
    <main data-theme={theme} className="min-h-dvh bg-page px-6 py-6 text-ink">
      <header className="mb-6 flex flex-wrap items-center gap-4 border-b border-hairline pb-4">
        <h1 className="font-serif text-[32px] leading-9">Projector scenes</h1>
        <div role="group" aria-label="Theme" className="inline-flex overflow-hidden rounded-[2px] border border-hairline">
          {(['dark', 'light'] as const).map((t) => (
            <button key={t} type="button" aria-pressed={theme === t} onClick={() => setTheme(t)} className={cx('h-8 px-3 text-[12px] font-semibold capitalize', theme === t ? 'bg-ink text-page' : 'bg-raised text-ink-2')}>{t}</button>
          ))}
        </div>
        <select aria-label="Scene" value={only ?? ''} onChange={(e) => setOnly(e.target.value || null)} className="h-8 rounded-[2px] border border-hairline bg-raised px-2 text-[13px]">
          <option value="">All scenes</option>
          {SCENES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
      </header>
      {list.map((s) => (
        <section key={s.id} id={s.id} className="mb-10">
          <p className="overline mb-2">{s.label} · #{s.id}</p>
          <div className="max-w-[1280px]">
            <ScaledCanvas className="overflow-hidden border border-hairline">
              <ProjectorScene host={s.host} clockOffset={0} siteUrl="https://hvs-menti.vercel.app" theme={theme} />
            </ScaledCanvas>
          </div>
        </section>
      ))}
    </main>
  );
}
```

### 10.4 Acceptance checklist
Open `http://localhost:3000/scenes?theme=dark`, then `?theme=light`. For a single scene use `?scene=mcq-revealed&theme=dark`. Every item must hold in **both** themes; record pass/fail per scene in your report.

**All scenes:**
- Nothing is clipped at the bottom.
- No text ends in "…" except the deck title in the nav bar and Q&A rows.
- No blue anywhere.
- Background is warm (#100F0D dark / #FBFAF7 light).

**`lobby`:**
- No nav bar.
- Kicker in crimson.
- Serif title.
- QR on a white card.
- Code `173 011` in mono.
- Joined count in large serif; the join chart is verdigris with a caption.

**`mcq-open`:**
- Nav bar present: deck title, the first segment crimson, `01 / 06`, and `hvs-menti.vercel.app/j · 173 011`.
- Kicker reads `QUESTION 1 OF 2` (counts quiz questions, not slides).
- Title starts with "Special Federal Powers" (no "QUESTIONS 1.").
- Option texts are full, with no "…".
- The countdown number appears **once**, with "seconds left".
- The meter track is visible.
- Footer: "Source: answers stay hidden…" on the left, "QUIZ · Q1" on the right.

**`mcq-open-empty`:** the meter reads "Waiting for participants to join"; the bar is empty (not full).

**`mcq-revealed`:**
- Title reads `66% chose the correct answer, C` (612 / 931 = 65.7%; it rounds to 66% with `pf`).
- Sub-headline is the cleaned prompt.
- Four columns grow from the baseline.
- Column C is verdigris with the "✓ Correct" chip, and its percentage is the largest coloured number.
- A, B and D are neutral.
- Full option texts sit under the columns (wrapped, at most three lines).
- Footer includes "median response 6.2s".

**`mcq-revealed-zero`:**
- Title `No one answered Q1`.
- Empty full-height tracks.
- Italic "No responses were submitted" is centred.

**`mcq-revealed-six` and `mcq-open-six`:** six columns or a 3×2 grid, readable, no overlap.

**`mcq-leaderboard` and `ended-quiz`:**
- Podium in 2-1-3 order; the winner block is ink with a crimson top edge.
- Ranks 4–10 sit in the table on the right, with rank 1 never repeated there.
- Title `Aarav Mehta leads with 9,400 points`.
- Ended kicker `FINAL RESULTS`; section `CONCLUSION`.

**`poll-open`:** all columns verdigris and the kicker ends in `· LIVE`. **`poll-revealed`:** only the leader (402) is verdigris and the title says "Most respondents chose “Fiscal devolution to states” (34%)".

**`wordcloud`:** serif words; the top words are ink, the next tier verdigris.

**`qa`:** the first row has a crimson left edge; vote counts are verdigris mono; the answered row is muted with an "ANSWERED" tag.

**`content`:** no nav bar; `05 / 06` kicker; large serif heading; crimson rule; body text.

**`ended-noquiz`:** "Thank you for taking part." in serif, plus the participants line.

**Checks:** web typecheck + test + build (`/scenes` must not appear in production output as a working page; it calls `notFound`). Fix any clipping by reducing only the sizes in `titleClass` / `optionClass` (`lib/scene.ts`) or `min-h` values, never by hiding content. Commit `U10: projector scene gallery with fixtures`.

---

## U11: Participant phone (`apps/web/src/components/play/*`)

**Skill rules:**
- **Symmetry**: identical answer buttons.
- **Colour discipline**: verdigris = correct, crimson = "not quite", ink = selected.
- **Polish**: cleaned prompts and correct numbering.

The phone follows the OS theme (no `data-theme`); both themes must pass.

### 11.1 Headlines (mechanical)
```bash
cd apps/web/src/components/play
sed -i 's/text-\[22px\] font-semibold leading-8/font-serif text-[26px] leading-[32px]/g' *.tsx
sed -i 's/text-\[32px\] font-semibold leading-10 tracking-\[-0.01em\]/font-serif text-[40px] leading-[44px] tracking-[-0.01em]/g' *.tsx
grep -n "text-\[22px\] font-semibold" *.tsx | wc -l   # must print 0
```

### 11.2 Wordmark (`join-form.tsx`, `code-entry.tsx`)
Replace `<p className="overline">HVS Menti</p>` with `<p className="font-serif text-[22px] leading-none text-ink">HVS Menti</p>`. Do this in both files. If the anchor's spacing differs, match it exactly.

### 11.3 i18n (`apps/web/src/lib/i18n.ts`)
- English block: add `'p.of': 'Poll {i} of {n}',` next to `'q.of'`, and `'result.answerWas': 'Answer: {letter}',` next to `'result.noAnswer'`.
- Hindi block: add `'p.of': 'मतदान {i} / {n}',` and `'result.answerWas': 'उत्तर: {letter}',` in the same places.

If the `Key` type is derived from the English object, nothing else is needed. If typecheck complains, add the keys wherever the Hindi type requires them.

### 11.4 `choice-answer.tsx`
- Imports: add `import { displayPrompt } from '@quiz/core';` and `import { LETTERS, slidePosition } from '@/lib/scene';`. Remove the local `const LETTERS = 'ABCDEF';`.
- Inside the component, after `const slide = pub.slide!;`, add `const pos = slidePosition(slide);`.
- Replace `<p className="overline mb-2">{t(lang, 'q.of', { i: slide.index + 1, n: slide.total })}</p>` with
  `<p className="kicker mb-2">{t(lang, slide.type === 'poll' ? 'p.of' : 'q.of', { i: pos.n, n: pos.of })}</p>`
- In the `<h1>` and in `aria-label={slide.prompt}`, use `displayPrompt(slide.prompt)`.
- Replace the button `className={cx(...)}` with:
  ```tsx
              className={cx(
                'flex min-h-14 w-full items-center gap-3 rounded-[2px] border px-4 py-3 text-left text-[16px] leading-6 transition-colors duration-150',
                selected ? 'border-2 border-ink bg-sunken text-ink' : 'border-hairline bg-raised text-ink',
                !disabled && 'active:border-ink',
                disabled && !selected && 'opacity-60',
              )}
  ```
- Letter chip: replace its className with
  `cx('num flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border text-[13px]', selected ? 'border-ink bg-ink text-page' : 'border-baseline text-ink-2')`
- Selected check icon: `<Icon name="check" size={18} className="shrink-0 text-accent" />`
- Locked status: replace `inline-flex items-center gap-1.5 font-semibold text-ink` with `inline-flex items-center gap-1.5 font-semibold text-accent`.

### 11.5 `choice-result.tsx`
- Same imports as 11.4 (`displayPrompt`, `LETTERS`, `slidePosition`) plus `import { nf } from '@/components/charts';` only if needed.
- Kicker and h1 as in 11.4 (kicker uses `p.of` for polls).
- Replace the whole `{isMcq ? ( <p …> … </p> ) : ( <p …>… </p> )}` block with:
  ```tsx
      {isMcq ? (
        answer?.correct === true ? (
          <p role="status" className="flex items-center justify-between gap-3 rounded-[2px] border border-accent/30 bg-accent-wash px-4 py-3 text-[16px] font-semibold text-accent">
            <span className="inline-flex items-center gap-2"><Icon name="check" size={18} />{t(lang, 'result.correct')}</span>
            <span className="num">{t(lang, 'result.points', { n: answer.points })}</span>
          </p>
        ) : answer ? (
          <p role="status" className="flex items-center gap-2 rounded-[2px] border border-seal/30 bg-seal-tint px-4 py-3 text-[16px] font-semibold text-seal">
            <Icon name="x" size={18} />{t(lang, 'result.wrong')}
            {r && r.correct !== null ? <span className="ml-auto font-normal text-ink-2">{t(lang, 'result.answerWas', { letter: LETTERS[r.correct] ?? '' })}</span> : null}
          </p>
        ) : (
          <p role="status" className="rounded-[2px] border border-hairline bg-sunken px-4 py-3 text-[15px] text-ink-2">{t(lang, 'result.noAnswer')}</p>
        )
      ) : (
        <p className="text-[14px] text-ink-2">{answer ? t(lang, 'poll.thanks') : null}</p>
      )}
  ```
- Leave the `BarList`; it is restyled by U05.
- Rank line: replace `text-[14px] text-ink-2` with `num text-[13px] text-ink-2`.

### 11.6 `word-input.tsx` and `stage.tsx`
- `word-input.tsx`: h1 shows `displayPrompt(slide.prompt)` (import from `@quiz/core`).
- `stage.tsx`: the lobby overline `{state.me?.name} · {state.me?.externalId}` stays `.overline`. The content slide h1 keeps `slide.prompt` (authored heading).

### 11.7 `header.tsx`
Replace the title `<p className="min-w-0 truncate text-[13px] text-ink-2">{state.pub?.title}</p>` with
`<p className="min-w-0 truncate font-serif text-[18px] leading-6 text-ink">{state.pub?.title}</p>`

### 11.8 `code-entry.tsx`
Code input: replace `h-12 rounded-[4px] border border-hairline bg-raised px-4 text-[20px] tracking-[0.3em] text-ink focus:border-accent` with `num h-14 rounded-[2px] border border-hairline bg-raised px-4 text-[24px] tracking-[0.3em] text-ink focus:border-ink`. After U03 the radius is already 4px; match the current text exactly.

### 11.9 `qa-panel.tsx`
In the vote button's voted state, replace `border-accent bg-accent-wash` with `border-accent bg-accent-wash text-accent` (adds the colour to the count).

**Checks:**
- web typecheck + test + build; `/play` must stay `○`.
- Visual, if a local realtime server is available: in `apps/realtime`, run `pnpm build` and then `node --env-file=.env dist/main.js` in the background. Its `.env` is git-ignored and normally uses the in-memory dev session `000000`. Open `http://localhost:3000/play?c=000000` in a 390px-wide viewport, join, and check the join form, lobby and header.
- Without a host you cannot open questions. State that the answer and result screens were checked by code review only, and list them for the user to try on staging.

Commit `U11: participant phone in the Parakh identity`.

---

## U12: Presenter console (`apps/web/src/components/present/*`)

**Skill rules:**
- The presenter preview must show exactly what the room sees: same theme, same frame.
- Persistent wayfinding: the rail's current slide in seal, matching the projector's progress bar.

### 12.1 `console.tsx`
- Imports: `import { useProjectorTheme } from '@/lib/projector-theme';`
- In the component, near the other hooks: `const [projTheme, setProjTheme] = useProjectorTheme();`
- Header title: replace `<p className="truncate text-[15px] font-semibold text-ink">{host.pub.title}</p>` with `<p className="truncate font-serif text-[22px] leading-7 text-ink">{host.pub.title}</p>`
- Join line: replace `<span className="tnum font-semibold text-ink">{groupCode(host.joinCode)}</span>` with `<span className="num text-ink">{groupCode(host.joinCode)}</span>`
- Add a theme switch immediately **before** the "Open projector screen" button:
  ```tsx
          <div role="group" aria-label="Projector theme" className="inline-flex overflow-hidden rounded-[2px] border border-hairline">
            {(['dark', 'light'] as const).map((t) => (
              <button key={t} type="button" aria-pressed={projTheme === t} onClick={() => setProjTheme(t)}
                className={cx('h-9 px-3 text-[12px] font-semibold capitalize', projTheme === t ? 'bg-ink text-page' : 'bg-raised text-ink-2 hover:text-ink')}>
                {t}
              </button>
            ))}
          </div>
  ```
  Import `cx` from `@/lib/cx` if the file does not already.
- Preview: change `<ProjectorScene host={host} clockOffset={state?.clockOffset ?? 0} siteUrl={siteUrl} />` to pass `theme={projTheme}`.
- Preview label `<p className="overline mb-2 px-1">Projector preview</p>` stays.

### 12.2 `rail.tsx`
- The current slide uses `border-accent bg-accent-wash`; change it to `border-seal bg-sunken` (exact anchor in the file).
- Prompt text: wrap with `displayPrompt(...)` (import from `@quiz/core`).
- Answered progress: the track `bg-hairline` becomes `bg-track` and the fill `bg-ink-3` becomes `bg-accent`. Change only those two classes inside the progress bar markup.

### 12.3 `components/console/session-monitor.tsx` (developer console preview)
- Import `useProjectorTheme`, take `const [projTheme] = useProjectorTheme();`, and pass `theme={projTheme}` to its `<ProjectorScene …/>`.
- No other changes.

### 12.4 `presenter-parts.tsx`
No code change. It uses `StatTile`, `Meter`, `ChartCard`, `BarList`, `LineChart` and `WordCloud`, which are all restyled.

**Checks:**
- web typecheck + test + build.
- If a real presenter session is possible (staging, signed in as an approved presenter), open `/present/<code>` and `/screen/<code>` side by side. Toggle Dark/Light in the console; the projector window must switch within a second (storage event). Otherwise state that only the gallery was verified.

Commit `U12: presenter console with projector theme switch`.

---

## U13: The rest of the app

**Skill rules:**
- Consistency: one identity everywhere.
- Kicker used at most once per page.

### 13.1 Page headings (mechanical)
```bash
cd apps/web/src
grep -rl 'text-\[32px\] font-semibold leading-10 tracking-\[-0.01em\]' --include='*.tsx' app components | xargs sed -i 's/text-\[32px\] font-semibold leading-10 tracking-\[-0.01em\]/font-serif text-[40px] leading-[44px] tracking-[-0.01em]/g'
grep -rl 'mb-2 text-\[24px\] font-semibold' --include='*.tsx' app | xargs sed -i 's/mb-2 text-\[24px\] font-semibold/mb-2 font-serif text-[32px] leading-[36px]/g'
grep -rl 'text-\[28px\] font-semibold leading-9 text-ink' --include='*.tsx' app components | xargs sed -i 's/text-\[28px\] font-semibold leading-9 text-ink/font-serif text-[36px] leading-[40px] text-ink/g'
```
Then `grep -rn "<h1" --include='*.tsx' app components`. Every h1 outside `components/present/` (the projector sets its own) must now contain `font-serif`; fix stragglers by hand the same way. The landing h1 is replaced in 13.2.

### 13.2 Landing page: replace `apps/web/src/app/page.tsx` entirely
```tsx
import { SignInLink } from '@/components/home/sign-in-link';
import { buttonClass } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex h-16 items-center justify-between border-b border-hairline px-4 md:px-8">
        <span className="font-serif text-[22px] leading-none text-ink">HVS Menti</span>
        <SignInLink />
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-24">
        <p className="kicker mb-4">[ Live session ]</p>
        <h1 className="mb-4 text-center font-serif text-[44px] leading-[48px] tracking-[-0.01em] md:text-[72px] md:leading-[76px]">
          Join a <span className="italic">session</span>
        </h1>
        <span aria-hidden="true" className="mb-6 block h-px w-24 bg-seal" />
        <p className="mb-8 text-center text-[15px] leading-6 text-ink-2">Enter the 6-digit code shown on the screen.</p>
        <form action="/play" method="get" className="flex w-full max-w-[480px] flex-col gap-4">
          <label htmlFor="c" className="sr-only">Session code</label>
          <input
            id="c" name="c" inputMode="numeric" pattern="\d{6}" maxLength={6} autoComplete="off" required autoFocus
            placeholder="000000" aria-describedby="code-help"
            className="num h-20 w-full rounded-[4px] border border-hairline bg-raised px-4 text-center text-[40px] tracking-[0.3em] text-ink placeholder:text-ink-3/40 focus:border-ink md:h-24 md:text-[48px]"
          />
          <p id="code-help" className="sr-only">Six digits, no spaces.</p>
          <button type="submit" className={buttonClass('primary', 'lg', 'h-14 w-full text-[18px]')}>Join</button>
        </form>
      </main>
      <footer className="border-t border-hairline px-4 py-4 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">Live quizzes, polls and Q&amp;A for large audiences</footer>
    </div>
  );
}
```
`/` must stay static (`○`).

### 13.3 Wordmarks
- `app/(app)/layout.tsx`: replace `className="text-[15px] font-semibold text-ink">HVS Menti</Link>` with `className="font-serif text-[22px] leading-none text-ink">HVS Menti</Link>`.
- `app/console/layout.tsx`: replace `className="text-[13px] font-semibold text-ink">HVS Menti · Console</Link>` with `className="font-serif text-[18px] leading-none text-ink">HVS Menti · <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-seal">Console</span></Link>`.
- `app/login/page.tsx`: replace `<p className="overline mb-2">HVS Menti</p>` with `<p className="mb-2 font-serif text-[22px] leading-none text-ink">HVS Menti</p>`.

### 13.4 Dashboard kicker
In `app/(app)/dashboard/page.tsx`:
- If an `.overline` paragraph sits directly above the page h1, change its class to `kicker`.
- Otherwise insert `<p className="kicker mb-2">Presenter workspace</p>` immediately before the h1.

The dashboard's `StatTile`s are already restyled (U03).

### 13.5 Reports
`app/(app)/p/[id]/sessions/[sid]/report-view.tsx`: the h1 is handled by 13.1. Add `kicker` as the class of the overline above it, if one exists. `ChartCard` source lines are already restyled. Do not change report logic.

### 13.6 Developer console
No code changes beyond the codemods. Its `dense.tsx` chips already use `bg-ink text-surface`. Verify that `/console` still fits the window without page scroll at 1440×900 and that colours are warm. If a developer session with MFA is not available, state it.

**Checks:**
- web typecheck + test + build (`○ /`, `○ /play`).
- Visual, both themes: `/`, `/login`, `/pending` (redirects when signed out, which is fine), the dashboard (if signed in on local staging auth), `/charts`, `/scenes`.

Commit `U13: identity across landing, login, dashboard, reports and console`.

---

## U14: Fix the numbering at the source (import) and refresh the kitchen sink

**Skill rules:** polish. Copy-paste artifacts must not reach the deck.

1. `apps/web/src/lib/import/to-slides.ts`: import `displayPrompt` from `@quiz/core` and change `prompt: q.prompt,` to `prompt: displayPrompt(q.prompt),`.
2. `apps/web/src/lib/import/to-slides.test.ts`: add a case where the imported question `{ prompt: 'QUESTIONS 1. Special Federal Powers…', options: ['a', 'b'], correct: 0, issues: [], source: 'x' }` produces a slide whose `prompt` starts with `Special Federal Powers`. Copy the existing test's object shape.
3. Existing saved decks keep their stored prompts; the display-time `displayPrompt` (U09, U11, U12) covers them.
4. `app/(dev)/charts/kitchen-sink.tsx`: make sure the page h1 is serif (13.1) and that the new Results section from U06.4 exists.

**Checks:** web test (import suites still pass, ~30+ tests in `lib/import`). Commit `U14: imported prompts lose document numbering`.

---

## U15: Full verification and case-deck critique pass

1. **Automated:** at the repo root, `pnpm build && pnpm typecheck && pnpm test`, all green. Record counts versus U00.
2. **Static routes:** the web build lists `○ /` and `○ /play`.
3. **Gallery, both themes:** walk the full U10.4 checklist and record a table `scene × theme → pass/fail + note`.
4. **Contrast spot-check** (WebAIM formula, or the DevTools contrast picker): body text `--ink-2` on `--page`, both themes ≥ 4.5:1; `text-page` on `bg-ink` buttons ≥ 4.5:1; `text-accent` on `bg-accent-wash` badges ≥ 4.5:1. Report the measured ratios. If one fails, report it; **do not change the palette without the user**.
5. **Case-competition-deck critique pass** (read `references/critique_rubric.md` first). For each projector scene, score:

   | Check (skill source) | Pass condition |
   |---|---|
   | Action title (`SKILL.md` §E.1) | Results, poll results and leaderboard titles are full sentences with a number |
   | Nav bar placement (`archetypes.md` §G) | Present on every content scene; absent on lobby and content dividers |
   | Page number (`archetypes.md` reusable) | `NN / NN` visible top-right on content scenes |
   | Source line (`archetypes.md` reusable) | Footer source present on content scenes |
   | Sub-section label (`archetypes.md` reusable) | Footer right label present |
   | Colour discipline (`archetypes.md` reusable) | ≤ 5 distinct hues; seal used for one emphasis unit only; no blue |
   | Moneyshot (`archetypes.md` §P) | On `mcq-revealed`, the correct % is the largest coloured element and readable from the back of a hall (≥ 88px on the 1920 canvas) |
   | Symmetry (`archetypes.md` reusable) | All option cards / columns share one structure |
   | Three (`archetypes.md` reusable) | Podium shows exactly three |
   | Polish (`SKILL.md` common failure 6) | No "…" truncation of options, no duplicated numbers, no "QUESTIONS 1." prefixes, no placeholder text |
   | Conclusion, no new content (`archetypes.md` §W) | `ended-quiz` only recaps (podium, participants, questions) |

   Report the table; any fail goes back to the responsible task's file and is fixed there.
6. **Leak check:** `grep -rn "host.correct" apps/web/src/components/present/scene.tsx apps/web/src/components/present/scene-frame.tsx` must return nothing (the projector uses `pub.results` only). `grep -rn "\.correct" apps/web/src/components/play` must only show uses of `r.correct` / `answer.correct` (data that arrives after the reveal).
7. **Copy check:** `grep -rn "!" apps/web/src/components/present/scene.tsx apps/web/src/components/present/scene-frame.tsx | grep -v "!==\|!=\|!\.\|!(\|non-null\|\!\]"` should show no exclamation marks in UI copy. Check manually.

Commit only fixes made during verification: `U15: verification fixes`. If nothing changed, do not commit.

---

## U16: Release (ONLY with the user's go-ahead in that turn)

The core change (`kindIndex` / `kindTotal`) is additive. The new web app works with the old realtime server (it falls back to slide order), and the old web app ignores the new fields. Order:
1. `git push origin main`; `gh run watch <id> --exit-status` must be green (CI runs build, typecheck, tests and `pnpm audit`).
2. **Realtime** (core is bundled into it):
   - Confirm no live event: production `/health` shows `rooms: 0`, or ask the user.
   - Staging first: `MSYS_NO_PATHCONV=1 railway environment staging`, `railway service link realtime`, `railway up --detach`, check `/health`.
   - Then production, the same way.
3. **Web:** `vercel deploy --prod --yes`; wait for `● Ready` in `vercel ls --prod`.
4. **Smoke:** `/` and `/play` load with the new fonts; `/scenes` returns 404 in production (dev-only page).
5. **Tell the user** what to check live:
   - Open the presenter console and the projector for a test session; switch Dark/Light.
   - Run one question to the reveal and confirm the columns, the ✓ Correct badge and the podium at the end.
   - Join from a phone and confirm the answer and result screens.
6. Update the project memory file (`…\memory\project-status-quiz-platform.md`) with:
   - Phase 6 identity: Parakh palette and fonts.
   - Projector theme key `hvs:projector-theme`.
   - Scene gallery at `/scenes` (dev).
   - `displayPrompt` and `kindIndex` in core.

---

## 5. Files touched in Phase 6

- **New**
  - `apps/web/src/lib/scene.ts` (+ `scene.test.ts`)
  - `apps/web/src/lib/projector-theme.ts`
  - `apps/web/src/lib/dev/scene-fixtures.ts`
  - `apps/web/src/components/charts/result-columns.tsx`
  - `apps/web/src/components/charts/podium.tsx`
  - `apps/web/src/components/present/scene-frame.tsx`
  - `apps/web/src/app/(dev)/scenes/page.tsx`, `scene-gallery.tsx`
- **Replaced entirely**
  - `apps/web/src/app/globals.css`
  - `apps/web/src/app/layout.tsx`
  - `apps/web/src/app/page.tsx`
  - `apps/web/src/components/present/scene.tsx`
  - `apps/web/src/components/charts/meter.tsx`
  - `apps/web/src/components/charts/bar-list.tsx`
- **Edited**
  - core: `normalize.ts` (+test), `views.ts`, `core.test.ts`
  - web lib: `lib/insights.ts` (+test), `lib/i18n.ts`, `lib/import/to-slides.ts` (+test)
  - web charts: `countdown.tsx`, `rank-table.tsx`, `word-cloud.tsx`, `stat-tile.tsx`, `chart-card.tsx`, `charts/index.ts`
  - web UI kit: `ui/button.tsx`, `ui/tabs.tsx`
  - play components: `header.tsx`, `choice-answer.tsx`, `choice-result.tsx`, `word-input.tsx`, `join-form.tsx`, `code-entry.tsx`, `qa-panel.tsx`
  - present components: `console.tsx`, `rail.tsx`, `projector-screen.tsx`
  - developer console: `console/session-monitor.tsx`
  - layouts: `app/(app)/layout.tsx`, `app/console/layout.tsx`, `app/login/page.tsx`
  - other pages: dashboard, report view, kitchen sink
  - plus every `.tsx` touched by the radius and heading codemods
- **No changes:** realtime source (only redeployed for the core bundle), database, security settings.

