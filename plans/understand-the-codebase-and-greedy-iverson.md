# v1.6.0: Pacing profiles, human-like sending, Pause/Resume. Execution spec

> **Audience: Sonnet-class executor subagents.** Every decision has already been made. Do not redesign anything. Copy the code blocks exactly, and keep to your own files. Where a block says "replace X with Y", find X by its exact text: line numbers may have drifted. If an instruction looks impossible because the text isn't found, STOP and report back. Do not improvise.

Repo root (every path below is relative to it): `c:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\rys_email\rys_whatsapp_blaster`

---

## 0. Context (read once)

WhatsApp Blaster is an Electron + Express + `node:sqlite` desktop app. It sends invites by **keyboard-automating the installed WhatsApp Desktop app**:
- Windows: PowerShell + `System.Windows.Forms.SendKeys`, in `wa/desktop.win.js`.
- macOS: `osascript` + System Events, in `wa/desktop.mac.js`.

The send loop is `wa/sender.js`. It is driven by `POST /api/campaigns/:id/send` in `server.js`, which streams NDJSON events to `public/index.html`.

Today the app runs back-to-back, at about 8s per recipient:
- the delay settings are 0/0;
- every internal wait is a fixed constant;
- the whole message is pasted in a single action;
- every recipient gets byte-identical wording.

That is the most bot-like pattern possible, and it risks getting the sender number restricted.

**What the user decided:**
1. Keep the ⚙ Settings button, but its modal now offers **only three pacing profiles**: Cautious, **Balanced (default)** and Fast. The old raw inputs are removed: min/max delay, batch size, daily cap, country code.
   - `defaultCountry` stays as a hidden backend setting ("91").
2. **Hybrid typing:**
   - the first line ("Hi Priya,") is typed key by key with human-like gaps;
   - the line breaks after it are typed as Shift+Enter;
   - the rest is pasted;
   - then a short "re-reading" dwell before Enter.
3. **Keystroke jitter:** every tuned wait is stretched randomly by 0–40% (never shortened), and the phone number is typed digit by digit.
4. **Pause/Resume** button next to Abort.
5. **Greeting variation:** an opening "Hi" or "Hello" is randomly swapped between the two, per recipient. Nothing else changes.
6. Live test against the user's own WhatsApp Desktop, sending to **8595856713** and **9818873750**. Then publish v1.6.0.

Honest limit (goes into the docs, not the code): this lowers the risk of restriction but cannot guarantee it. WhatsApp mostly restricts numbers because recipients block or report them.

### Profiles (single source of truth: `pacing.js`)

| key | label | gap between recipients | break every | break length | daily cap | hourly cap |
|---|---|---|---|---|---|---|
| `cautious` | Cautious | 45–120 s | 6–10 sends | 5–15 min | 100 | 25 |
| `balanced` | Balanced (default) | 20–60 s | 8–15 sends | 3–8 min | 150 | 40 |
| `fast` | Fast | 8–25 s | 15–25 sends | 2–4 min | 200 | none |

---

## 1. Orchestration (for the main agent)

The work is split into **5 executor tasks with disjoint files**, so they can run **in parallel** as Sonnet subagents. Give each one a single prompt containing:
- the "Rules for every executor" block below;
- section 0 (Context);
- its own task section, copied verbatim.

| Task | Files owned (only these may be edited) |
|---|---|
| **T1** pure logic + tests | `pacing.js` (new), `template.js`, `test/pacing.test.js` (new), `test/template.test.js` (new), `package.json` (scripts + build.files ONLY, not version) |
| **T2** keystroke backends | `wa/desktop.win.js`, `wa/desktop.mac.js`, `wa/desktop.js` |
| **T3** server side | `db/campaigns.js`, `db/settings.js`, `wa/sender.js`, `server.js`, `config.js` (comment only), `.env.example` (comment only) |
| **T4** UI | `public/index.html` |
| **T5** docs | `docs/operations.md`, `docs/user-guide.md`, `docs/architecture.md`, `docs/decisions.md`, `README.md` |

**Rules for every executor** (paste into each prompt):
- Edit only the files your task owns. Never touch `rys-wa-*.txt`, `dist/`, `node_modules/`, or any other file.
- Do not run `git commit`, `git push`, `npm install`, the app, or anything that sends keystrokes. Running `node --check <file>` and `npm test` is allowed.
- Match the surrounding code style. That means double quotes in Node files and single quotes in `public/index.html`'s script. It also means explanatory block comments for any non-obvious reason, the way the existing files do.
- Other tasks are building the modules you call (e.g. `pacing.js`) in parallel, to the exact interfaces in this spec. Code against those interfaces and do not create them yourself.
- When done, report every file changed and anything that did not match the spec.

**After all 5 return**, the main agent runs section 8 (static checks), then section 9 (live test, with the user present), then section 10 (publish).

---

## 2. T1: `pacing.js`, `template.js`, tests, `package.json`

### 2.1 Create `pacing.js` at the repo root (next to `template.js`)

```js
// Pacing profiles and human-like timing helpers, shared by wa/sender.js
// (gaps between recipients), wa/desktop.*.js (per-keystroke waits) and
// db/settings.js (validating the chosen profile). Lives at the repo root
// like template.js, so db/ never has to depend on wa/.
//
// Replaces the free-form min/max delay, batch size and daily cap settings
// (v1.6.0). Those had been set to 0/0 for speed, which made every run one
// fixed back-to-back rhythm, the most bot-like pattern this app could
// produce. Operators now pick one of three named profiles instead, and every
// wait inside a profile is randomised.

const PACING_PROFILES = {
  cautious: {
    label: "Cautious",
    description: "Safest. Use for a new number or a list of people who have never messaged you.",
    gapMs: [45000, 120000],
    breakEvery: [6, 10],
    breakMs: [300000, 900000],
    dailyCap: 100,
    hourlyCap: 25,
  },
  balanced: {
    label: "Balanced",
    description: "Recommended for most campaigns.",
    gapMs: [20000, 60000],
    breakEvery: [8, 15],
    breakMs: [180000, 480000],
    dailyCap: 150,
    hourlyCap: 40,
  },
  fast: {
    label: "Fast",
    description: "Closest to the old speed. Least protection for the sending number.",
    gapMs: [8000, 25000],
    breakEvery: [15, 25],
    breakMs: [120000, 240000],
    dailyCap: 200,
    hourlyCap: null,
  },
};

const DEFAULT_PACING_PROFILE = "balanced";

// Object.hasOwn, not `key in` / truthiness: PACING_PROFILES is a plain object
// literal, so PACING_PROFILES["toString"] is truthy and would otherwise pass
// validation as a "profile".
function isProfileKey(key) {
  return typeof key === "string" && Object.hasOwn(PACING_PROFILES, key);
}

function resolveProfile(key) {
  return PACING_PROFILES[isProfileKey(key) ? key : DEFAULT_PACING_PROFILE];
}

// Uniform integer in [min, max].
function randomBetween(min, max, rand = Math.random) {
  return min + Math.floor(rand() * (max - min + 1));
}

// Mean of two uniform draws: still bounded by [min, max], but clusters toward
// the middle, so gaps don't spread flat across the range the way a single
// uniform draw does.
function humanGap([min, max], rand = Math.random) {
  return Math.round((randomBetween(min, max, rand) + randomBetween(min, max, rand)) / 2);
}

// Stretches a tuned wait by 0-40%, never shortens it. Every Start-Sleep /
// delay in wa/desktop.*.js was tuned as the minimum WhatsApp needs to settle,
// so jitter only ever adds time. It exists so no two sends share an identical
// keystroke rhythm.
function jitter(ms, spread = 0.4, rand = Math.random) {
  return Math.round(ms * (1 + rand() * spread));
}

// Per-character delays (ms) for typing `text`, one entry per character:
// 45-140ms each, plus a 150-450ms "thinking" pause after roughly a third of
// spaces and commas.
function typingDelays(text, rand = Math.random) {
  return Array.from(String(text)).map((ch) => {
    let ms = randomBetween(45, 140, rand);
    if ((ch === " " || ch === ",") && rand() < 0.35) ms += randomBetween(150, 450, rand);
    return ms;
  });
}

// Per-digit delays (ms) for typing a phone number: 70-220ms each, and about
// one digit in eight gets an extra 300-600ms hesitation.
function digitDelays(digits, rand = Math.random) {
  return Array.from(String(digits)).map(() => {
    let ms = randomBetween(70, 220, rand);
    if (rand() < 0.125) ms += randomBetween(300, 600, rand);
    return ms;
  });
}

// How long the finished message sits in the composer before Enter, roughly
// "re-reading what you wrote". Scales with length, clamped to 1.2-4.5s, then
// jittered.
function composeDwellMs(textLength, rand = Math.random) {
  const base = Math.min(4500, Math.max(1200, textLength * 15));
  return jitter(base, 0.4, rand);
}

// Pause after a chat opens, before anything is typed: 0.8-2.5s.
function chatOpenPauseMs(rand = Math.random) {
  return randomBetween(800, 2500, rand);
}

// Splits a message for hybrid typing:
//   head       - the first line, typed key by key
//   lineBreaks - how many newlines follow it, typed as Shift+Enter
//   body       - everything after those newlines, pasted
// head is "" (and body is the whole message) when the first line isn't safe
// to type: too long, or containing anything beyond plain ASCII letters,
// digits and , . ! ? ' -. SendKeys / System Events can't reliably type emoji
// or non-Latin script, and ":" opens WhatsApp's emoji picker. Those messages
// are pasted whole, exactly as before v1.6.0.
const TYPEABLE_HEAD = /^[A-Za-z0-9 ,.!?'-]+$/;
const MAX_TYPED_HEAD = 48;

function splitForTyping(text) {
  const s = String(text).replace(/\r\n/g, "\n");
  const nl = s.indexOf("\n");
  const head = nl === -1 ? s : s.slice(0, nl);
  if (!head || head.length > MAX_TYPED_HEAD || !TYPEABLE_HEAD.test(head)) {
    return { head: "", lineBreaks: 0, body: s };
  }
  if (nl === -1) return { head, lineBreaks: 0, body: "" };
  const rest = s.slice(nl);
  const lineBreaks = rest.match(/^\n*/)[0].length;
  return { head, lineBreaks, body: rest.slice(lineBreaks) };
}

module.exports = {
  PACING_PROFILES,
  DEFAULT_PACING_PROFILE,
  MAX_TYPED_HEAD,
  isProfileKey,
  resolveProfile,
  randomBetween,
  humanGap,
  jitter,
  typingDelays,
  digitDelays,
  composeDwellMs,
  chatOpenPauseMs,
  splitForTyping,
};
```

### 2.2 `template.js`

**(a)** Replace the header comment's first sentence block (lines 1–7, starting `// The message is now user-editable from the app's Settings/Template panel`) with:

```js
// The message is user-editable from Step 1's Message Template editor and is
// stored in the `settings` table (db/settings.js), NOT here. This file only
// holds the built-in default (used to seed the DB on first run, and as the
// "Reset to default" target) and the fill logic. A packaged app's files are
// inside a read-only asar, so a template that had to be edited by changing
// this file would be unreachable for a non-technical teammate.
```

Keep the second comment paragraph, but change `(Settings — a Drive link or a direct upload` to `(Step 1's Poster section: a Drive link or a direct upload`.

**(b)** Replace the existing `buildMessageText` function, and the `module.exports` line, with:

```js
// Opening-greeting variation (v1.6.0). Byte-identical text sent to many new
// contacts is a classic bulk-spam signature, so when a message opens with
// "Hi" or "Hello" that one word is swapped at random between the two, per
// recipient. Deliberately nothing else changes (operator request: "keep hi
// and hello only"). The (?![a-z]) lookahead stops "History..." or
// "Hillary..." from matching.
const GREETING_RE = /^(\s*)(hi|hello)(?![a-z])/i;

function matchCase(word, model) {
  if (model.length > 1 && model === model.toUpperCase()) return word.toUpperCase();
  if (model[0] === model[0].toUpperCase()) return word[0].toUpperCase() + word.slice(1);
  return word;
}

function varyGreeting(text, rand = Math.random) {
  const m = String(text).match(GREETING_RE);
  if (!m) return text;
  const pick = rand() < 0.5 ? "hi" : "hello";
  return m[1] + matchCase(pick, m[2]) + text.slice(m[0].length);
}

// options.varyGreeting is opt-in so the preview, tests and any other caller
// stay deterministic; only wa/sender.js turns it on for real runs.
function buildMessageText(row, templateText, nameFallback, options = {}) {
  const text = templateText || DEFAULT_TEMPLATE;
  const filled = fillTemplate(text, row, nameFallback || DEFAULT_NAME_FALLBACK);
  return options.varyGreeting ? varyGreeting(filled, options.rand) : filled;
}

module.exports = { buildMessageText, varyGreeting, DEFAULT_TEMPLATE, DEFAULT_NAME_FALLBACK };
```

Note: `varyGreeting(filled, undefined)` must use the default `Math.random`. Default parameters already handle `undefined`, so that works.

### 2.3 Create `test/pacing.test.js`

```js
const test = require("node:test");
const assert = require("node:assert/strict");
const pacing = require("../pacing");

const lo = () => 0;
const hi = () => 0.999999;

test("every profile is internally consistent", () => {
  for (const [key, p] of Object.entries(pacing.PACING_PROFILES)) {
    assert.ok(p.label, key);
    assert.ok(p.gapMs[0] > 0 && p.gapMs[0] < p.gapMs[1], key);
    assert.ok(p.breakEvery[0] >= 1 && p.breakEvery[0] <= p.breakEvery[1], key);
    assert.ok(p.breakMs[0] < p.breakMs[1], key);
    assert.ok(p.dailyCap > 0, key);
    assert.ok(p.hourlyCap === null || p.hourlyCap > 0, key);
  }
  assert.ok(pacing.isProfileKey(pacing.DEFAULT_PACING_PROFILE));
});

test("isProfileKey / resolveProfile reject junk and inherited keys", () => {
  assert.equal(pacing.isProfileKey("toString"), false);
  assert.equal(pacing.isProfileKey(undefined), false);
  assert.equal(pacing.resolveProfile("nope"), pacing.PACING_PROFILES.balanced);
  assert.equal(pacing.resolveProfile("fast"), pacing.PACING_PROFILES.fast);
});

test("humanGap stays inside the range", () => {
  for (const p of Object.values(pacing.PACING_PROFILES)) {
    assert.equal(pacing.humanGap(p.gapMs, lo), p.gapMs[0]);
    assert.equal(pacing.humanGap(p.gapMs, hi), p.gapMs[1]);
    for (let i = 0; i < 200; i++) {
      const g = pacing.humanGap(p.gapMs);
      assert.ok(g >= p.gapMs[0] && g <= p.gapMs[1]);
    }
  }
});

test("jitter only ever lengthens, by at most 40%", () => {
  assert.equal(pacing.jitter(1000, 0.4, lo), 1000);
  assert.equal(pacing.jitter(1000, 0.4, hi), 1400);
  for (let i = 0; i < 200; i++) {
    const j = pacing.jitter(2500);
    assert.ok(j >= 2500 && j <= 3500);
  }
});

test("typing and digit delays: one per char, bounded", () => {
  const d = pacing.typingDelays("Hi Priya, welcome");
  assert.equal(d.length, 17);
  for (const ms of d) assert.ok(ms >= 45 && ms <= 140 + 450);
  const g = pacing.digitDelays("918595856713");
  assert.equal(g.length, 12);
  for (const ms of g) assert.ok(ms >= 70 && ms <= 220 + 600);
});

test("composeDwellMs clamps then jitters", () => {
  assert.equal(pacing.composeDwellMs(10, lo), 1200);
  assert.equal(pacing.composeDwellMs(100000, lo), 4500);
  assert.equal(pacing.composeDwellMs(200, lo), 3000);
});

test("splitForTyping: normal invite", () => {
  assert.deepEqual(pacing.splitForTyping("Hi Priya,\n\nYou're invited!\nThanks"), {
    head: "Hi Priya,",
    lineBreaks: 2,
    body: "You're invited!\nThanks",
  });
});

test("splitForTyping: CRLF is normalised", () => {
  assert.deepEqual(pacing.splitForTyping("Hello A,\r\n\r\nBody"), { head: "Hello A,", lineBreaks: 2, body: "Body" });
});

test("splitForTyping: single line is typed whole", () => {
  assert.deepEqual(pacing.splitForTyping("Hi Priya"), { head: "Hi Priya", lineBreaks: 0, body: "" });
});

test("splitForTyping: unsafe first lines fall back to a full paste", () => {
  for (const text of ["Hi José,\n\nx", "Hi 🎉\nx", "Hi: there\nx", "\nHi", "Hi (A)\nx", "x".repeat(pacing.MAX_TYPED_HEAD + 1) + "\nmore"]) {
    const t = text.replace(/\r\n/g, "\n");
    assert.deepEqual(pacing.splitForTyping(text), { head: "", lineBreaks: 0, body: t }, JSON.stringify(text));
  }
});
```

### 2.4 Create `test/template.test.js`

```js
const test = require("node:test");
const assert = require("node:assert/strict");
const { buildMessageText, varyGreeting } = require("../template");

const pickHi = () => 0.1;
const pickHello = () => 0.9;

test("Hi <-> Hello swap keeps case and the rest of the text", () => {
  assert.equal(varyGreeting("Hi Priya,\n\nBody", pickHello), "Hello Priya,\n\nBody");
  assert.equal(varyGreeting("Hello Priya,\n\nBody", pickHi), "Hi Priya,\n\nBody");
  assert.equal(varyGreeting("hello there", pickHi), "hi there");
  assert.equal(varyGreeting("HELLO TEAM", pickHi), "HI TEAM");
  assert.equal(varyGreeting("  Hi,", pickHello), "  Hello,");
});

test("non-greeting openings are untouched", () => {
  for (const s of ["History lesson", "Hillary", "Hey Priya", "Dear Priya, hi", "Highlights"]) {
    assert.equal(varyGreeting(s, pickHello), s);
  }
});

test("buildMessageText is deterministic unless varyGreeting is requested", () => {
  const row = { name: "Priya" };
  assert.equal(buildMessageText(row, "Hi {{name}},", "there"), "Hi Priya,");
  assert.equal(buildMessageText(row, "Hi {{name}},", "there", { varyGreeting: true, rand: pickHello }), "Hello Priya,");
  assert.equal(buildMessageText({ name: "" }, "Hello {{name}}", "there", { varyGreeting: true, rand: pickHi }), "Hi there");
});
```

### 2.5 `package.json`: scripts and build.files only (**do NOT change `version`**; the main agent bumps it)

- In `"scripts"`, after `"mac:doctor": ...`, add: `"test": "node --test"`. Fix the comma on the previous line.
- In `"build"."files"`, after `"template.js",` add `"pacing.js",`. **Critical:** without it, the packaged app crashes with `Cannot find module '../pacing'`.

### 2.6 T1 self-check
Run `npm test`. All tests must pass. Also run `node --check pacing.js` and `node --check template.js`.

---

## 3. T2: keystroke backends

### 3.1 `wa/desktop.js`
In `CONTRACT`, add `"typeText",` after `"pasteCaption",`. Change the header comment's `15-function contract` to `16-function contract`.

### 3.2 `wa/desktop.win.js`

**(a) Imports.** After line 3 (`const { normaliseLineEndings, ... } = require("./verify");`) add:

```js
const { jitter, randomBetween, typingDelays, digitDelays } = require("../pacing");
```

**(b) Timeout constant.** After `const PS_TIMEOUT_MS = 20000;` add:

```js

// openChatByNumber (digit-by-digit typing) and typeText (key-by-key typing)
// legitimately run longer than the 20s default above: the humanised per-key
// delays alone can add 10-30s. A separate, longer ceiling keeps the hang
// protection without killing a normal slow-typed run.
const LONG_PS_TIMEOUT_MS = 60000;
```

**(c) Jitter rule.** Every `Start-Sleep -Milliseconds N` inside the functions listed below becomes `Start-Sleep -Milliseconds ${jitter(N)}`, keeping the same N. **Do NOT touch** the `PS_PREAMBLE` string (`Set-ForegroundReliable`'s 150) or `focus()`'s 400s. Those are focus mechanics, not keystrokes.

**(d) Replace `openChatByNumber`.** Keep its big comment above it, and append one more comment paragraph to it:

```js
//
// v1.6.0: the digits are typed one at a time with uneven human-like gaps
// (pacing.digitDelays) instead of one instant SendWait burst, and every
// settle wait is jittered (never shortened, see pacing.jitter).
async function openChatByNumber(digits) {
  await ensureForeground();
  const delays = digitDelays(digits);
  const typed = Array.from(String(digits))
    .map((d, i) => `[System.Windows.Forms.SendKeys]::SendWait('${psQuote(sendKeysEscape(d))}')\nStart-Sleep -Milliseconds ${delays[i]}`)
    .join("\n");
  const script = `${PS_PREAMBLE}
[System.Windows.Forms.SendKeys]::SendWait("^n")
Start-Sleep -Milliseconds ${jitter(900)}
${typed}
Start-Sleep -Milliseconds ${jitter(2500)}
[System.Windows.Forms.SendKeys]::SendWait("{ENTER}")
Start-Sleep -Milliseconds ${jitter(1500)}
`;
  await runPowerShell(script, LONG_PS_TIMEOUT_MS);
}
```

**(e) `pasteIntoComposer`.** Sleeps become `${jitter(150)}`, `${jitter(200)}`, `${jitter(300)}`, `${jitter(500)}`.

**(f) Add `typeText` directly after `pasteIntoComposer`:**

```js
// Types `text` key by key into whatever holds focus, with human-like uneven
// gaps (pacing.typingDelays), then presses Shift+Enter `lineBreaks` times
// (Shift+Enter is WhatsApp's newline; plain Enter would send). Does NOT clear
// the composer first, and does NOT send. wa/sender.js only ever passes the
// message's first line here, and only after pacing.splitForTyping has
// confirmed it is plain ASCII that SendKeys can type reliably. Everything
// else is still pasted.
async function typeText(text, lineBreaks = 0) {
  await ensureForeground();
  const chars = Array.from(String(text));
  const delays = typingDelays(text);
  const lines = chars.map(
    (ch, i) => `[System.Windows.Forms.SendKeys]::SendWait('${psQuote(sendKeysEscape(ch))}')\nStart-Sleep -Milliseconds ${delays[i]}`
  );
  for (let i = 0; i < lineBreaks; i++) {
    lines.push(`[System.Windows.Forms.SendKeys]::SendWait("+{ENTER}")\nStart-Sleep -Milliseconds ${randomBetween(120, 260)}`);
  }
  if (lines.length === 0) return;
  await runPowerShell(`${PS_PREAMBLE}\n${lines.join("\n")}`, LONG_PS_TIMEOUT_MS);
}
```

**(g) The other sleeps:**
- `pasteImage`: `Start-Sleep -Milliseconds 1500` → `${jitter(1500)}`. This sits inside a template literal already, so just replace the number.
- `pasteCaption`: `300` → `${jitter(300)}`, `500` → `${jitter(500)}`.
- `discardAttachment` and `resetToCleanState`: `Start-Sleep -Milliseconds 200` → `Start-Sleep -Milliseconds ${jitter(200)}`. These are already template literals.
- `verifyComposer`: `250`, `200`, `400` → `${jitter(250)}`, `${jitter(200)}`, `${jitter(400)}`.
- `pressEnterToSend`: `200`, `800` → `${jitter(200)}`, `${jitter(800)}`.
- `clearComposer`: `150` → `${jitter(150)}`.

**(h) Exports.** Add `typeText,` to `module.exports` after `pasteCaption,`.

### 3.3 `wa/desktop.mac.js`

**(a) Imports.** After the `require("./verify")` line add:

```js
const { jitter, randomBetween, typingDelays, digitDelays } = require("../pacing");
```

**(b) Helper.** After `const OSA_TIMEOUT_MS = 20000;` add:

```js

// Same reasoning as desktop.win.js's LONG_PS_TIMEOUT_MS: humanised
// digit-by-digit and key-by-key typing legitimately outlasts the 20s default.
const LONG_OSA_TIMEOUT_MS = 60000;

// AppleScript `delay` takes seconds. Every TIMINGS value is a tuned minimum,
// so it's jittered upward only (pacing.jitter) and never shortened. TIMINGS
// itself stays unjittered because `npm run mac:doctor` prints and edits it.
function d(ms) {
  return (jitter(ms) / 1000).toFixed(3);
}
```

**(c) Delays.** In every keystroke script (`openChatByNumber`, `pasteIntoComposer`, `pasteImage`, `pasteCaption`, `discardAttachment`, `verifyComposer`, `pressEnterToSend`, `resetToCleanState`, `clearComposer`), replace each `delay ${TIMINGS.X / 1000}` with `delay ${d(TIMINGS.X)}`. Leave `focus()`'s `await sleep(TIMINGS.afterActivate)` untouched.

**(d) `openChatByNumber`.** Replace only the function body, keeping its comment:

```js
async function openChatByNumber(digits) {
  await ensureForeground();
  const delays = digitDelays(digits);
  const typed = Array.from(String(digits))
    .map((ch, i) => `  keystroke "${asQuote(ch)}"\n  delay ${(delays[i] / 1000).toFixed(3)}`)
    .join("\n");
  await runOsascript(
    keystrokeScript(`
  keystroke "n" using command down
  delay ${d(TIMINGS.afterNewChat)}
  key code 48
  key code 48
  delay ${d(TIMINGS.afterTab)}
${typed}
  delay ${d(TIMINGS.afterDigits)}
  key code 125
  delay ${d(TIMINGS.afterArrowDown)}
  key code 36
  delay ${d(TIMINGS.afterChatOpen)}
`),
    LONG_OSA_TIMEOUT_MS
  );
}
```

**(e) Add `typeText` after `pasteIntoComposer`:**

```js
// Mac twin of desktop.win.js's typeText: types `text` key by key with
// human-like gaps, then Shift+Return `lineBreaks` times (newline without
// sending). No clearing, no sending. Only ever called with a first line that
// pacing.splitForTyping has confirmed is plain ASCII.
async function typeText(text, lineBreaks = 0) {
  await ensureForeground();
  const chars = Array.from(String(text));
  const delays = typingDelays(text);
  const lines = chars.map((ch, i) => `  keystroke "${asQuote(ch)}"\n  delay ${(delays[i] / 1000).toFixed(3)}`);
  for (let i = 0; i < lineBreaks; i++) {
    lines.push(`  key code 36 using shift down\n  delay ${(randomBetween(120, 260) / 1000).toFixed(3)}`);
  }
  if (lines.length === 0) return;
  await runOsascript(keystrokeScript(lines.join("\n")), LONG_OSA_TIMEOUT_MS);
}
```

**(f) Exports.** Add `typeText,` to `module.exports` after `pasteCaption,`.

### 3.4 T2 self-check
Run `node --check wa/desktop.win.js wa/desktop.mac.js wa/desktop.js`. The pacing module may not exist yet if T1 hasn't finished, which is fine: `--check` only parses. Grep `wa/desktop.win.js` for `Start-Sleep -Milliseconds [0-9]`. The only remaining hits must be in `PS_PREAMBLE` (the 150) and `focus()` (400, ×3).

---

## 4. T3: server side

### 4.1 `db/campaigns.js`

**(a)** Replace `countRecentSends` and its comment with:

```js
// How many messages this sender has actually submitted, across ALL
// campaigns, in the trailing window: 24h by default, for the daily cap.
// wa/sender.js's hourly cap uses msUntilHourlySlot below instead. The cutoff
// is plain epoch-ms computed in JS.
async function countRecentSends(senderPhone, windowMs = 24 * 60 * 60 * 1000) {
  const cutoff = Date.now() - windowMs;
  const row = db
    .prepare(
      `SELECT COUNT(*) AS c FROM recipients r
       JOIN campaigns c ON c.id = r.campaign_id
       WHERE c.sender_phone = ? AND r.state = 'submitted' AND r.sent_at > ?`
    )
    .get(senderPhone, cutoff);
  return row.c;
}

// Hourly cap (v1.6.0 pacing profiles): returns 0 if another send fits in
// the trailing hour right now, otherwise how many ms until the oldest send
// that's in the way ages out of it (+1s of margin).
async function msUntilHourlySlot(senderPhone, hourlyCap) {
  const windowMs = 60 * 60 * 1000;
  const now = Date.now();
  const rows = db
    .prepare(
      `SELECT r.sent_at AS t FROM recipients r
       JOIN campaigns c ON c.id = r.campaign_id
       WHERE c.sender_phone = ? AND r.state = 'submitted' AND r.sent_at > ?
       ORDER BY r.sent_at ASC`
    )
    .all(senderPhone, now - windowMs);
  if (rows.length < hourlyCap) return 0;
  const blocking = rows[rows.length - hourlyCap];
  return Math.max(0, blocking.t + windowMs - now) + 1000;
}
```

**(b)** Add `msUntilHourlySlot,` to `module.exports` after `countRecentSends,`.

### 4.2 `db/settings.js`

**(a)** Line 2 stays as is. After it, add:

```js
const { PACING_PROFILES, DEFAULT_PACING_PROFILE, isProfileKey } = require("../pacing");
```

**(b)** Replace the header comment (lines 4–8, `// User-tunable send settings, ...`) with:

```js
// Operator settings, stored in the SQLite `settings` table rather than
// .env. A packaged app's working directory is inside a read-only install
// (or absent), so .env is unreachable there. Sending speed is chosen as one
// of three named pacing profiles (pacing.js) from the ⚙ Settings panel. The
// message template, name fallback and poster are edited in Step 1.
// defaultCountry has no UI anymore, but stays here as a backend default.
```

**(c)** In `DEFAULTS`, delete the whole comment block that starts `// Changed from 8000/20000 at explicit operator request`, and delete the four lines `sendMinDelayMs: 0,`, `sendMaxDelayMs: 0,`, `sendBatchSize: 50,`, `dailyCap: 200,`. Insert in their place:

```js
  // v1.6.0: replaces sendMinDelayMs / sendMaxDelayMs / sendBatchSize /
  // dailyCap. One of the keys of pacing.js's PACING_PROFILES; that profile
  // supplies the gaps, breaks, daily cap and hourly cap together.
  pacingProfile: DEFAULT_PACING_PROFILE,
```

The result starts `const DEFAULTS = {` then `pacingProfile`, then `defaultCountry: "91",` etc.

**(d)** Delete the line `const NUMERIC_KEYS = new Set([...]);`.

**(e)** Replace `getSettings` with:

```js
async function getSettings() {
  const rows = db.prepare("SELECT key, value FROM settings").all();
  const stored = Object.fromEntries(rows.map((r) => [r.key, r.value]));
  const merged = { ...DEFAULTS, ...stored };
  // A stale or hand-edited value must never leave a run without a pacing
  // profile. Fall back to the default rather than failing the send.
  if (!isProfileKey(merged.pacingProfile)) merged.pacingProfile = DEFAULT_PACING_PROFILE;
  return merged;
}
```

**(f)** In `saveSettings`, delete everything from the comment `// Type-checking MUST run before the min/max comparison below.` down to and including the closing `}` of the `if (next.sendMaxDelayMs < next.sendMinDelayMs) { ... }` block. Put this in its place:

```js
  if (!isProfileKey(next.pacingProfile)) {
    throw new Error(
      `Unknown sending speed "${next.pacingProfile}". Pick one of: ${Object.keys(PACING_PROFILES).join(", ")}`
    );
  }
```

The `defaultCountry` validation that follows stays unchanged.

**(g)** Add a new function before `module.exports`:

```js
// v1.6.0 cleanup: the free-form pacing keys replaced by pacingProfile. Plain
// idempotent DELETEs with no marker key needed, since deleting an absent row
// is a no-op. This leaves no stale "0/0 delay" rows behind to confuse anyone
// reading the DB.
const RETIRED_SETTING_KEYS = ["sendMinDelayMs", "sendMaxDelayMs", "sendBatchSize", "dailyCap"];

function dropRetiredSettings() {
  const del = db.prepare("DELETE FROM settings WHERE key = ?");
  for (const key of RETIRED_SETTING_KEYS) del.run(key);
}
```

**(h)** Change the exports to: `module.exports = { getSettings, saveSettings, seedTemplateIfMissing, clearStalePosterOnce, dropRetiredSettings };`

### 4.3 `wa/sender.js`: full replacements

**(a) Imports.** Add after line 6:

```js
const pacing = require("../pacing");
```

**(b)** Delete the `randomDelay` function entirely (lines 32–34). Nothing will use it after this change.

**(c)** Replace `abortableSleep` and its comment with:

```js
// Sleeps in short steps so Abort (and Pause) are responsive everywhere, not
// just between sends: a break can be 15 minutes of otherwise
// uninterruptible sleep. While paused, the clock stops, so a 40s gap with a
// 5-minute pause in the middle still waits 40s of un-paused time after
// Resume. onPauseChange fires on each paused/unpaused transition so the
// caller can log it and update the overlay.
async function abortableSleep(ms, isAborted, isPaused = () => false, onPauseChange = () => {}) {
  const step = 500;
  let elapsed = 0;
  let wasPaused = false;
  while (elapsed < ms) {
    if (isAborted()) return;
    const chunk = Math.min(step, ms - elapsed);
    await sleep(chunk);
    const pausedNow = isPaused();
    if (pausedNow !== wasPaused) {
      onPauseChange(pausedNow);
      wasPaused = pausedNow;
    }
    if (!pausedNow) elapsed += chunk;
  }
}

// Blocks while the operator has the run paused. Called before each
// recipient, so a Pause pressed mid-message takes effect as soon as that
// message finishes.
async function waitWhilePaused(isAborted, isPaused, onPauseChange) {
  if (!isPaused()) return;
  onPauseChange(true);
  while (isPaused() && !isAborted()) await sleep(500);
  if (!isAborted()) onPauseChange(false);
}

// Puts `text` in the open chat's composer the way a person would (v1.6.0):
// the first line typed key by key, the blank lines after it as Shift+Enter,
// the rest pasted. If the first line isn't safe to type
// (pacing.splitForTyping: emoji, non-Latin script, ":" etc.), the whole
// message is pasted exactly as before. Verification is unchanged and still
// checks the FULL text before Enter.
async function composeLikeHuman(text) {
  const { head, lineBreaks, body } = pacing.splitForTyping(text);
  if (!head) {
    await desktop.pasteIntoComposer(text);
    return;
  }
  await desktop.clearComposer();
  await desktop.typeText(head, lineBreaks);
  // pasteCaption is the non-clearing paste. Reused here deliberately,
  // because pasteIntoComposer's select-all + delete would wipe the line
  // just typed.
  if (body) await desktop.pasteCaption(body);
}

// Caption variant: no clearComposer, since select-all + delete against an
// attached-image preview could delete the image itself (see
// desktop.pasteImage).
async function captionLikeHuman(text) {
  const { head, lineBreaks, body } = pacing.splitForTyping(text);
  if (!head) {
    await desktop.pasteCaption(text);
    return;
  }
  await desktop.typeText(head, lineBreaks);
  if (body) await desktop.pasteCaption(body);
}
```

**(d) `sendOne`.** Apply exactly these edits and leave every existing comment in place:
1. After `await desktop.openChatByNumber(digits);` (the first one, near the top of the `try`), add:
   ```js
       // A person glances at the chat before typing. Fixed zero-wait here was
       // one more machine-regular beat.
       await sleep(pacing.chatOpenPauseMs());
   ```
2. In the `if (posterPath && dryRun)` branch, change `await desktop.pasteIntoComposer(text);` to `await composeLikeHuman(text);`.
3. In the `if (posterPath)` branch, change the FIRST `await desktop.pasteCaption(text);` (the one right after the first `pasteImage()`) to `await captionLikeHuman(text);`. **The retry inside `if (!cap.ok) { ... }` keeps the plain `desktop.pasteCaption(text)`**: retries use the proven full-paste path.
4. In the same branch, just before `await desktop.pressEnterToSend();`, add:
   ```js
         // "Re-reading" dwell before Enter: scales with length (pacing.composeDwellMs).
         await sleep(pacing.composeDwellMs(text.length));
   ```
5. In the text-only path, change the first `await desktop.pasteIntoComposer(text);` (directly before `let v = await desktop.verifyComposer(text);`) to `await composeLikeHuman(text);`. **The retry inside `if (!v.ok) { ... }` keeps `desktop.pasteIntoComposer(text)`.**
6. In the text-only path, just before the final `await desktop.pressEnterToSend();` (after the `if (dryRun) { ... }` block), add the same two dwell lines as in step 4.

**(e) Replace the whole `runCampaign` function** (from `async function runCampaign(` to its closing `}` before `module.exports`) with:

```js
async function runCampaign({ senderId, campaignId, recipients, onEvent, isAborted, isPaused = () => false, dryRun }) {
  // Read fresh each run, so a profile changed in ⚙ Settings applies to the
  // very next run (never to one already in progress).
  const settings = await settingsDb.getSettings();
  const profile = pacing.resolveProfile(settings.pacingProfile);
  let remaining = profile.dailyCap - (await campaigns.countRecentSends(senderId));

  // focus() runs BEFORE any network I/O (poster preflight, below).
  // Previously preflight ran first, so pressing Send Invites could sit for
  // many seconds (up to a 30s download timeout) with WhatsApp never coming
  // to the foreground and the app looking frozen.
  try {
    await desktop.focus();
  } catch (e) {
    onEvent({ type: "aborted", reason: `could not focus WhatsApp Desktop: ${e.message}` });
    return { stoppedEarly: true, reason: "focus_failed" };
  }

  onEvent({
    type: "info",
    message: dryRun
      ? `Sending speed: ${profile.label} (rehearsal uses short 2-4s gaps, no breaks)`
      : `Sending speed: ${profile.label}: ${Math.round(profile.gapMs[0] / 1000)}-${Math.round(
          profile.gapMs[1] / 1000
        )}s gaps, a break every ${profile.breakEvery[0]}-${profile.breakEvery[1]} messages, max ${profile.dailyCap}/day` +
        (profile.hourlyCap ? `, ${profile.hourlyCap}/hour` : ""),
  });

  // verifyComposer/pasteIntoComposer repeatedly overwrite the clipboard for
  // the whole run; give the operator theirs back however the run ends.
  const originalClipboard = await desktop.getClipboard();
  let consecutiveFails = 0;

  // WhatsApp is maximised and focused for the whole run, burying the
  // browser's progress log. This always-on-top bar (wa/overlay.js) is the
  // only progress visible while that's true. It never takes focus.
  const total = recipients.filter((r) => r.state !== "skipped").length;
  const tally = { submitted: 0, unknown: 0, skipped: 0, rehearsed: 0 };
  const overlayCounts = () => ({
    ...tally,
    remaining: total - tally.submitted - tally.unknown - tally.skipped - tally.rehearsed,
  });
  overlay.start();
  overlay.update({ status: "preparing poster…" });

  let stoppedEarly = false;
  let stopReason = null;

  // Pause bookkeeping. Pausing almost always means the operator clicked
  // back into WhatsApp Blaster (or elsewhere), so WhatsApp must be re-focused
  // before the next keystroke. pausedSinceLastSend records that.
  let pausedSinceLastSend = false;
  const onPauseChange = (paused) => {
    if (paused) {
      pausedSinceLastSend = true;
      onEvent({ type: "paused" });
      overlay.update({ status: "paused: press Resume in WhatsApp Blaster" });
    } else {
      onEvent({ type: "resumed" });
      overlay.update({ status: "resuming…" });
    }
  };
  const sleepFor = (ms) => abortableSleep(ms, isAborted, isPaused, onPauseChange);

  // A rehearsal never presses Enter, so it carries no ban risk and shouldn't
  // take hours. Real runs take a break every N sends, with N re-rolled after
  // each break so there's no fixed cadence to detect.
  let sinceBreak = 0;
  let nextBreakAt = pacing.randomBetween(profile.breakEvery[0], profile.breakEvery[1]);

  // No gap/break after the last recipient that will actually be attempted:
  // waiting a minute just to end the run helps nobody.
  let lastSendableIndex = -1;
  recipients.forEach((r, i) => {
    if (r.state !== "skipped") lastSendableIndex = i;
  });

  // A dry run must leave no trace in the DB, abort-skips included (this
  // previously wrote "skipped" rows even during a rehearsal).
  const skipAsAborted = async (row, base) => {
    if (!dryRun) {
      await campaigns.updateRecipientResult(campaignId, row.sno, {
        state: "skipped",
        error: "run aborted by operator",
        sentAt: null,
      });
    }
    onEvent({ ...base, state: "skipped", error: "run aborted by operator" });
  };

  try {
    // Poster preflight runs here, inside the try/finally that owns
    // overlay.stop() + the clipboard restore, AFTER focus() and
    // overlay.start(). A slow or dead Drive link therefore shows as a live
    // "preparing poster…" status instead of a silent pre-focus stall.
    const posterResult = await preflightPoster(settings, onEvent);

    for (let i = 0; i < recipients.length; i++) {
      const row = recipients[i];
      const base = { sno: row.sno, name: row.name, phone: row.phone };

      await waitWhilePaused(isAborted, isPaused, onPauseChange);

      if (isAborted()) {
        await skipAsAborted(row, base);
        continue;
      }
      if (row.state === "skipped") {
        onEvent({ ...base, state: "skipped", error: row.error });
        continue;
      }
      if (remaining <= 0) {
        tally.skipped++;
        await campaigns.updateRecipientResult(campaignId, row.sno, {
          state: "skipped",
          error: "daily cap reached for this sender",
          sentAt: null,
        });
        onEvent({ ...base, state: "skipped", error: "daily cap reached for this sender" });
        overlay.update({ counts: overlayCounts(), status: "daily cap reached" });
        continue;
      }

      // Hourly cap: wait (abortable, pausable) until the oldest send in the
      // trailing hour ages out. Real sends only, because a rehearsal records
      // nothing for the window to count anyway.
      if (!dryRun && profile.hourlyCap) {
        const waitMs = await campaigns.msUntilHourlySlot(senderId, profile.hourlyCap);
        if (waitMs > 0) {
          onEvent({ type: "pause", reason: "hourly", ms: waitMs });
          overlay.update({
            status: `hourly limit (${profile.hourlyCap}/h): resuming in ~${Math.ceil(waitMs / 60000)} min`,
          });
          await sleepFor(waitMs);
          if (isAborted()) {
            await skipAsAborted(row, base);
            continue;
          }
        }
      }

      if (pausedSinceLastSend) {
        pausedSinceLastSend = false;
        try {
          await desktop.focus();
        } catch (e) {
          onEvent({ type: "aborted", reason: `could not re-focus WhatsApp Desktop after the pause: ${e.message}` });
          overlay.update({ status: "aborted: could not re-focus WhatsApp" });
          stoppedEarly = true;
          stopReason = "focus_failed";
          break;
        }
      }

      overlay.update({ counts: overlayCounts(), current: `${row.name || "?"} (${row.phone})`, status: "sending..." });

      // varyGreeting: an opening "Hi"/"Hello" is randomly alternated per
      // recipient (template.js), so the run isn't one byte-identical message.
      const text = buildMessageText(row, settings.messageTemplate, settings.nameFallback, { varyGreeting: true });

      let result;
      if (posterResult && !posterResult.ok) {
        // Already logged loudly once at preflight. Don't retry the same
        // resolution per recipient, just report the consequence.
        result = { outcome: "error", error: `poster unavailable: ${posterResult.error || "unavailable"}` };
      } else {
        result = await sendOne(row.phone, text, dryRun, posterResult?.path);
      }

      const state =
        result.outcome === "submitted" ? "submitted" : result.outcome === "rehearsed" ? "rehearsed" : "unknown";
      const succeeded = state === "submitted" || state === "rehearsed";
      // A rehearsal with a poster configured never tests the image attach
      // itself (see sendOne). Say so on every such line, not just once.
      const errorText = succeeded
        ? result.posterNotRehearsed
          ? "poster attach was not rehearsed; only the message text was checked"
          : null
        : `send failed: ${result.error}`;

      // tally[state]++ always runs, since it only drives the overlay. What
      // must NOT happen during a dry run is a DB write.
      tally[state]++;
      if (!dryRun) {
        await campaigns.updateRecipientResult(campaignId, row.sno, {
          state,
          error: errorText,
          sentAt: state === "submitted" ? new Date() : null,
        });
      }
      onEvent({ ...base, state, error: errorText });
      overlay.update({
        counts: overlayCounts(),
        current: `${row.name || "?"} (${row.phone})`,
        status: succeeded ? state : errorText,
      });

      if (succeeded) {
        if (!dryRun) remaining--;
        consecutiveFails = 0;
      } else {
        consecutiveFails++;
      }

      if (consecutiveFails >= CONSECUTIVE_FAIL_LIMIT) {
        onEvent({
          type: "aborted",
          reason: `${CONSECUTIVE_FAIL_LIMIT} consecutive failures, stopping (e.g. WhatsApp lost focus)`,
        });
        overlay.update({ status: "aborted: too many consecutive failures" });
        stoppedEarly = true;
        stopReason = "consecutive_failures";
        break;
      }

      if (i >= lastSendableIndex) continue;

      if (dryRun) {
        const gap = pacing.randomBetween(2000, 4000);
        overlay.update({ status: `next rehearsal in ${Math.round(gap / 1000)}s` });
        await sleepFor(gap);
        continue;
      }

      sinceBreak++;
      if (sinceBreak >= nextBreakAt) {
        sinceBreak = 0;
        nextBreakAt = pacing.randomBetween(profile.breakEvery[0], profile.breakEvery[1]);
        const pause = pacing.randomBetween(profile.breakMs[0], profile.breakMs[1]);
        onEvent({ type: "pause", reason: "break", ms: pause });
        overlay.update({ status: `taking a ${Math.round(pause / 60000)} min break` });
        await sleepFor(pause);
      } else {
        const gap = pacing.humanGap(profile.gapMs);
        overlay.update({ status: `next send in ${Math.round(gap / 1000)}s` });
        await sleepFor(gap);
      }
    }
  } finally {
    overlay.stop();
    // getClipboard() returns null (not "") when the read itself failed, and
    // setClipboard() treats null as "leave it alone".
    await desktop.setClipboard(originalClipboard);
  }

  return { stoppedEarly, reason: stopReason };
}
```

**(f)** The old header comment (lines 8–26) stays. Append this paragraph at its end:

```js
//
// v1.6.0 humanisation: pacing comes from a named profile (pacing.js),
// with randomised gaps, randomly-spaced breaks and daily/hourly caps. The
// first line of every message is typed key by key (composeLikeHuman), every
// keystroke wait is jittered, and an opening Hi/Hello is varied per
// recipient. None of this changes WHAT is verified: the full message is still
// checked in the composer before Enter.
```

### 4.4 `server.js`

**(a) Imports.** After `const { DEFAULT_TEMPLATE, DEFAULT_NAME_FALLBACK } = require("./template");` add:

```js
const { PACING_PROFILES, DEFAULT_PACING_PROFILE } = require("./pacing");
```

**(b) Pause map.** After the `activeAborts` declaration (`const activeAborts = new Map();`) add:

```js

// Per-campaign pause flags, same lifecycle as activeAborts: set to false when
// a run starts, deleted when it ends, and only toggleable while that
// campaign is actually running.
const activePauses = new Map();
```

**(c) Settings comment.** Replace the comment under `// --- Settings ---` (`// Pacing, daily cap, default country, ...` 4 lines) with:

```js
// The pacing profile, the message template, name fallback and poster.
// Editable here rather than via .env/a file, since a packaged app's working
// directory is inside a read-only install.
```

**(d) New route.** Directly after the `app.post("/api/settings", ...)` route, add:

```js
// The three sending-speed profiles (pacing.js), so the ⚙ Settings panel
// renders straight from the same numbers the send loop uses and the two can
// never drift apart.
app.get("/api/pacing-profiles", (req, res) => {
  res.json({ profiles: PACING_PROFILES, defaultProfile: DEFAULT_PACING_PROFILE });
});
```

**(e)** In the send route, change `activeAborts.set(campaignId, false);` to:

```js
    activeAborts.set(campaignId, false);
    activePauses.set(campaignId, false);
```

**(f)** In the `sender.runCampaign({ ... })` call, add after the `isAborted:` line:

```js
      isPaused: () => activePauses.get(campaignId) === true,
```

**(g)** In both cleanup places, on the success path and in the `catch` block, add `activePauses.delete(campaignId);` immediately after each `activeAborts.delete(campaignId);`.

**(h) New routes.** Directly after the `/abort` route, add:

```js
// Pause/Resume (v1.6.0). Cooperative, like abort: the loop stops starting
// new recipients and freezes any gap/break countdown while paused. On resume
// it re-focuses WhatsApp before the next keystroke. 404 unless this campaign
// has an active run, for the same stale-flag reason as /abort.
app.post("/api/campaigns/:id/pause", (req, res) => {
  const id = req.params.id;
  if (!activePauses.has(id)) return res.status(404).json({ error: "No active send for this campaign" });
  activePauses.set(id, true);
  res.json({ ok: true, paused: true });
});

app.post("/api/campaigns/:id/resume", (req, res) => {
  const id = req.params.id;
  if (!activePauses.has(id)) return res.status(404).json({ error: "No active send for this campaign" });
  activePauses.set(id, false);
  res.json({ ok: true, paused: false });
});
```

**(i)** In `startServer()`, after `settingsDb.clearStalePosterOnce(attachments.deleteLocalPoster);`, add:

```js
  // v1.6.0: drop the free-form pacing keys that pacingProfile replaced.
  settingsDb.dropRetiredSettings();
```

### 4.5 `config.js` (comment only)
Replace the comment lines `// Everything that's actually tunable by the operator (pacing, daily cap,` through `// place a non-technical teammate could ever reach to change a limit.` with:

```js
// Everything that's actually tunable by the operator (the pacing profile,
// the message template, the poster) lives in the settings table
// (db/settings.js), editable from the app itself, not here. A packaged app's
// working directory is inside a read-only install (or absent), so .env is
// not a place a non-technical teammate could ever reach.
```

### 4.6 `.env.example` (comment only)
Read the file. If any comment mentions pacing, delay, batch or daily-cap settings living in the "Settings panel", reword it to say pacing is chosen as a profile in ⚙ Settings (Cautious / Balanced / Fast). Change no variable lines.

### 4.7 T3 self-check
- Run `node --check db/campaigns.js db/settings.js wa/sender.js server.js config.js`.
- Grep the repo (excluding `node_modules`, `rys-wa-*.txt`, `docs/`) for `sendMinDelayMs|sendMaxDelayMs|sendBatchSize|randomDelay|NUMERIC_KEYS`. The only allowed hits are `RETIRED_SETTING_KEYS` in `db/settings.js`, the `pacingProfile` comment in DEFAULTS, and anything in `public/index.html` (T4 removes those).

---

## 5. T4: `public/index.html`

**(a) CSS.** Insert directly after the `.icon-btn:hover { ... }` rule:

```css
  .profile-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
  .profile-card {
    display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px;
    background: var(--bg); border: 1px solid var(--border2); border-radius: 8px;
    cursor: pointer; transition: all 0.15s;
  }
  .profile-card:hover { border-color: var(--muted); }
  .profile-card.sel { border-color: var(--accent); background: rgba(37,211,102,0.06); }
  .profile-card input { margin-top: 3px; flex-shrink: 0; }
  .profile-name { font-size: 0.85rem; font-weight: 600; color: var(--text); }
  .profile-tag { font-size: 0.6rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); margin-left: 8px; }
  .profile-desc { font-size: 0.7rem; color: var(--muted); margin-top: 4px; line-height: 1.55; }
```

**(b) Header button.** Change `title="Settings"` on the ⚙ button to `title="Sending speed"`. Keep `onclick="showSettings()"`.

**(c) Greeting note.** Directly after `<div class="preview-label">Preview — as it will look to a real recipient</div>`, insert:

```html
    <div class="note hidden" id="tplGreetingNote" style="margin-bottom:8px">
      Your message opens with “Hi” or “Hello”. The app alternates between the two per recipient,
      so not every message is word-for-word identical.
    </div>
```

**(d) Step 4 note.** Replace the sentence `Pacing follows your Settings
      values, with a longer pause every 50, and the run stops automatically after 3 failures in a row.` (it spans a line break in the source) with:

```html
Sending speed: <strong id="pacingNoteProfile">Balanced</strong>
      (change it with ⚙). Gaps are random, the app takes regular breaks and stops at the
      profile's daily/hourly limits, and the run stops automatically after 3 failures in a row.
      <strong>Pause</strong> freezes the run; Resume brings WhatsApp back to the front.
```

**(e) Pause button.** Directly after the `<button class="btn btn-danger hidden" id="abortBtn" ...>■ Abort</button>` line, insert:

```html
      <button class="btn btn-ghost hidden" id="pauseBtn" onclick="togglePause()">❚❚ Pause</button>
```

**(f) Settings modal.** Replace the entire `<div class="modal-back hidden" id="settingsModal"> ... </div>` block (from that opening tag down to its matching closing `</div>`, just before `<script>`) with:

```html
<div class="modal-back hidden" id="settingsModal">
  <div class="modal" style="width:min(540px, 92vw); text-align:left">
    <h3 style="margin-bottom:4px">Sending speed</h3>
    <p>How fast the app works through your list. Slower looks more like a person and keeps the
      sending number safer. Every speed randomises its gaps, takes breaks, types the greeting key
      by key, and stops at its daily and hourly limits.</p>
    <div class="profile-list" id="profileList"><div class="note">Loading…</div></div>
    <p class="note" style="margin-bottom:16px">
      <strong>No speed is ban-proof.</strong> What protects a number most is sending to people who
      expect your message and won't report it. See the Operations guide for warm-up advice.
    </p>
    <div class="btn-group" style="justify-content:center">
      <button class="btn btn-ghost" onclick="closeSettings()">Cancel</button>
      <button class="btn btn-primary" onclick="saveSettingsForm()">Save</button>
    </div>
  </div>
</div>
```

**(g) Settings JS.** Replace the three functions `showSettings`, `closeSettings`, `saveSettingsForm` (the whole `// ── settings ──` section, up to just before `// ── message template ──`) with:

```js
// ── settings: sending speed ──────────────────────────────────────────────
// The ⚙ panel picks one of three pacing profiles. The profiles themselves
// come from the server (/api/pacing-profiles, i.e. pacing.js), so what's
// described here is exactly what the send loop does.
let pacingProfiles = null;
let defaultProfileKey = 'balanced';
let chosenProfile = 'balanced';

async function loadPacingProfiles() {
  if (pacingProfiles) return;
  const meta = await (await fetch('/api/pacing-profiles')).json();
  pacingProfiles = meta.profiles;
  defaultProfileKey = meta.defaultProfile;
}

function secs(ms) { return Math.round(ms / 1000); }
function mins(ms) { return Math.round(ms / 60000); }

function describeProfile(p) {
  return secs(p.gapMs[0]) + '–' + secs(p.gapMs[1]) + 's between messages · ' +
    mins(p.breakMs[0]) + '–' + mins(p.breakMs[1]) + ' min break every ' + p.breakEvery[0] + '–' + p.breakEvery[1] + ' · ' +
    'max ' + p.dailyCap + '/day' + (p.hourlyCap ? ', ' + p.hourlyCap + '/hour' : '');
}

function renderProfiles() {
  $('profileList').innerHTML = Object.entries(pacingProfiles).map(([key, p]) => `
    <div class="profile-card ${key === chosenProfile ? 'sel' : ''}" onclick="pickProfile('${esc(key)}')">
      <input type="radio" name="pacingProfile" ${key === chosenProfile ? 'checked' : ''} />
      <div>
        <div class="profile-name">${esc(p.label)}${key === defaultProfileKey ? '<span class="profile-tag">Recommended</span>' : ''}</div>
        <div class="profile-desc">${esc(p.description)}<br>${esc(describeProfile(p))}</div>
      </div>
    </div>`).join('');
}

function pickProfile(key) { chosenProfile = key; renderProfiles(); }

async function showSettings() {
  try {
    await loadPacingProfiles();
    const s = await (await fetch('/api/settings')).json();
    chosenProfile = s.pacingProfile || defaultProfileKey;
    renderProfiles();
    $('settingsModal').classList.remove('hidden');
  } catch (e) { toast('Could not load settings: ' + e.message, 'error'); }
}
function closeSettings() { $('settingsModal').classList.add('hidden'); }

async function saveSettingsForm() {
  if (sending) return toast('A batch is running. Pause or let it finish; the new speed applies to the next run', 'error');
  try {
    const res = await fetch('/api/settings', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pacingProfile: chosenProfile })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to save settings');
    closeSettings();
    toast('Sending speed: ' + pacingProfiles[data.pacingProfile].label, 'success');
    renderPacingNote(data.pacingProfile);
  } catch (e) { toast(e.message, 'error'); }
}

function renderPacingNote(key) {
  const p = pacingProfiles && pacingProfiles[key];
  $('pacingNoteProfile').textContent = p ? p.label : key;
}

async function refreshPacingNote() {
  try {
    await loadPacingProfiles();
    const s = await (await fetch('/api/settings')).json();
    renderPacingNote(s.pacingProfile || defaultProfileKey);
  } catch { /* the note keeps its static "Balanced" default */ }
}
```

**(h) Greeting note toggle.** In `renderTplPreview()`, directly after the line `renderPosterActiveLine();` inside that function, add:

```js
  // Mirrors template.js's GREETING_RE: the note only shows when a real send
  // would actually vary the greeting.
  $('tplGreetingNote').classList.toggle('hidden', !/^\s*(hi|hello)(?![a-z])/i.test(text));
```

**(i) `startSend`:**
1. After `$('abortBtn').classList.remove('hidden');` add:
   ```js
     $('pauseBtn').classList.remove('hidden');
     setPausedUi(false);
   ```
2. In the event loop, replace the line `if (evt.type === 'pause') { log('… long pause ' ... continue; }` with:
   ```js
           if (evt.type === 'pause') {
             log(evt.reason === 'hourly'
               ? '… hourly limit reached, waiting ' + fmtDuration(evt.ms) + ' before the next message'
               : '… taking a ' + fmtDuration(evt.ms) + ' break (normal: it keeps the number safe)', 'log-warn');
             continue;
           }
           if (evt.type === 'paused') { setPausedUi(true); log('❚❚ Paused. Nothing new starts until you press Resume.', 'log-warn'); continue; }
           if (evt.type === 'resumed') { setPausedUi(false); log('▶ Resumed: bringing WhatsApp back to the front', 'log-info'); continue; }
           if (evt.type === 'info') { log(evt.message, 'log-info'); continue; }
   ```
3. In the `finally` block, after `$('abortBtn').classList.add('hidden');`, add:
   ```js
       $('pauseBtn').classList.add('hidden');
       setPausedUi(false);
   ```

**(j) `resetSendUi`.** Change `['abortBtn', 'retryBtn', 'startOverBtn', 'anotherBatchBtn']` to `['abortBtn', 'pauseBtn', 'retryBtn', 'startOverBtn', 'anotherBatchBtn']`.

**(k) Pause JS.** Directly after the `abortRun()` function, add:

```js
// Pause/Resume. The server's "paused"/"resumed" stream events are the source
// of truth for the button state; the click updates it immediately too, so it
// never looks unresponsive while the current message finishes.
let runPaused = false;

function setPausedUi(on) {
  runPaused = on;
  const b = $('pauseBtn');
  b.textContent = on ? '▶ Resume' : '❚❚ Pause';
  b.classList.toggle('btn-primary', on);
  b.classList.toggle('btn-ghost', !on);
}

async function togglePause() {
  const action = runPaused ? 'resume' : 'pause';
  $('pauseBtn').disabled = true;
  try {
    const res = await fetch('/api/campaigns/' + campaignId + '/' + action, { method: 'POST' });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Could not ' + action);
    setPausedUi(action === 'pause');
    if (action === 'pause') log('Pause requested. The message in progress (if any) finishes first.', 'log-warn');
  } catch (e) {
    toast(e.message, 'error');
  } finally {
    $('pauseBtn').disabled = false;
  }
}

function fmtDuration(ms) {
  const s = Math.round(ms / 1000);
  return s >= 120 ? Math.round(s / 60) + ' min' : s + 's';
}
```

**(l) Init.** At the bottom, after `loadTemplate();`, add `refreshPacingNote();`.

**(m) T4 self-check.**
- Grep `public/index.html` for `setMinDelay|setMaxDelay|setBatchSize|setDailyCap|setDefaultCountry|sendMinDelayMs`. There must be zero hits.
- Every `$('...')` id used in new code must exist in the HTML: `profileList`, `pacingNoteProfile`, `pauseBtn`, `tplGreetingNote`, `settingsModal`.
- Extract the `<script>` body to a temp file in the scratchpad and run `node --check` on it, to catch syntax errors.

---

## 6. T5: docs

### 6.1 `docs/operations.md`: rewrite the whole file to:

```markdown
# Operations: sending safely

This app drives the real WhatsApp Desktop app, so to WhatsApp every message looks like it
came from you. That's also why a WhatsApp number can get restricted or banned if it sends
like a machine. Since v1.6.0 the app tries hard not to. **No setting makes a number
ban-proof**, though. Read the "What actually gets numbers banned" section below.

## Sending speed (⚙ Settings)

Click ⚙ in the header and pick one of three speeds. The choice applies from the next run.

| Speed | Gap between messages | Break | Daily cap | Hourly cap |
|---|---|---|---|---|
| Cautious | random 45–120 s | 5–15 min every 6–10 messages | 100 | 25 |
| **Balanced** (default) | random 20–60 s | 3–8 min every 8–15 messages | 150 | 40 |
| Fast | random 8–25 s | 2–4 min every 15–25 messages | 200 | none |

As a rough guide, Balanced gets through about 45–60 messages an hour, so 150 people take
about 3–4 hours. Caps count every message this sender submitted across all campaigns in the
last 24 hours / 60 minutes. When the hourly cap is reached the run **waits** and carries
on by itself. When the daily cap is reached, the remaining rows are skipped (send them
tomorrow with **Retry failed** or **Send another batch**).

## What the app does to look human

- **Random gaps and breaks.** No two gaps are the same, and the break interval changes
  after every break, so there's no fixed rhythm.
- **Typed greeting.** The first line of the message (e.g. "Hi Priya,") is typed key by key
  at a human pace, the blank lines after it are typed too, and the rest is pasted. If the
  first line has emoji or non-English letters, the whole message is pasted instead, because
  key-by-key typing can't reproduce those reliably.
- **Phone numbers typed digit by digit**, with uneven gaps.
- **Jittered timing.** Every internal wait is randomly 0–40% longer than its minimum.
- **A pause before typing and before sending**, like someone glancing at the chat and
  re-reading the message.
- **Hi / Hello variation.** If your message starts with "Hi" or "Hello", the app alternates
  between the two, so the run isn't one identical message copied hundreds of times.

## Pause, Resume, Abort

- **Pause** stops the run from starting anything new, and freezes the countdown to the next
  message. If a message is mid-way, it finishes first. You can use your computer while paused.
- **Resume** brings WhatsApp back to the front and carries on.
- **Abort** ends the run. Rows not reached are marked skipped.

## What actually gets numbers banned

Pacing helps, but WhatsApp's main signals are about the *people you message*:

- **Recipients blocking or reporting you** is the biggest factor by far. Message people who
  expect to hear from you (e.g. they registered for the event), and say who you are in
  the first line.
- **Cold contacts.** A list of people who have never messaged this number is riskier.
  Use Cautious for those, and consider asking people to save your number or message you first.
- **New numbers.** See warm-up below.
- **Replies are good.** Messages that start conversations look like normal use, so invite a reply.

## Warming up a new number

- Use it normally for a few days first, with regular 1:1 chats, not just as a send-only number.
- Day one: a few dozen messages on **Cautious**, not a full list.
- Increase gradually over a week or two before using Balanced.

## Safe-batch practice

- Split very large lists across several days, even if the cap would allow one long run.
- Watch WhatsApp Desktop during a run. If you see a warning, a logout, or messages not
  sending, press **Abort** immediately.
- Don't change the speed to Fast to "catch up" on a number that has had any warning.

## If a number gets flagged or banned

- Stop sending from it immediately. Don't retry expecting the ban to lift on its own.
- Restrictions are either temporary (often 24–72 hours with no further violations) or a
  permanent ban. There's no way to know in advance which one applies.
- Use a different number for the next campaign, and warm it up as a new number.
- Use Cautious on any number that has ever had a flag, even after it lifts.
```

### 6.2 `docs/user-guide.md`
Replace the bullet starting `- Sends are deliberately paced with random gaps and occasional longer pauses` (2 lines) and the bullet starting `- If you need to stop, click **Abort**.` (2 lines) with:

```markdown
- Sends are deliberately paced with random gaps, a typed greeting and regular breaks. That's
  not a bug, it's what keeps the sending number safe. Pick the speed with **⚙** in the
  header (Cautious / Balanced / Fast; Balanced is the default). See
  [operations.md](operations.md).
- **Pause** freezes the run (the message in progress finishes first) so you can use your
  computer; **Resume** brings WhatsApp back to the front and carries on.
- If you need to stop for good, click **Abort**. It finishes whatever message is currently in
  progress and then stops before starting the next one.
```

In the `## Editing the message` section, append a final bullet after the preview bullet:

```markdown
- If your message starts with **Hi** or **Hello**, the app alternates between the two per
  recipient, so not every message is word-for-word identical. Nothing else in your text changes.
```

### 6.3 `docs/architecture.md`
- In the `settings` table row (`| \`settings\` | Plain key/value. Pacing, daily cap, default country code, ...`), replace `Pacing, daily cap, default country code,` with `The pacing profile key (\`pacingProfile\`: cautious/balanced/fast, defined in \`pacing.js\`), the default country code (no UI),`.
- In the API table:
  - change the `GET /api/settings` purpose to `Current settings (pacing profile, country, template, poster), merged with defaults.`
  - add a row after `POST /api/settings`: `| GET | \`/api/pacing-profiles\` | The three pacing profiles from \`pacing.js\` plus the default key, for the ⚙ panel. |`
  - add after the `/abort` row: `| POST | \`/api/campaigns/:id/pause\` | Cooperative pause of the active send (freezes gaps/breaks; current message finishes). 404 if nothing is running. |` and `| POST | \`/api/campaigns/:id/resume\` | Resume a paused send; WhatsApp is re-focused before the next keystroke. |`
- In "The send stream": change the example line `{"type":"pause","ms":153000}` to `{"type":"pause","reason":"break","ms":253000}`. Change the sentence listing the type-only events so it reads `(\`info\`, \`pause\` (with \`reason\`: \`break\` | \`hourly\`), \`paused\`, \`resumed\`, \`aborted\`, \`error\`, \`warning\`)`.
- In the send-loop state machine block, replace the line `      → pace: short random delay, or a longer pause every \`sendBatchSize\` sends` and the line after it with:
  ```
      → pace (pacing.js profile): humanGap() between recipients, a randomly-spaced long
        break every breakEvery sends, hourly-cap wait before a send, none after the last one
        (abort- AND pause-aware: checked every 500ms; the countdown freezes while paused)
  ```
- In the same block, change `NO POSTER: pasteIntoComposer → verifyComposer` to `NO POSTER: composeLikeHuman (type first line + Shift+Enter, paste rest) → verifyComposer`. Change `POSTER path: setClipboardImage → pasteImage → pasteCaption(text) →` to `POSTER path: setClipboardImage → pasteImage → captionLikeHuman(text) →`.
- In the module list near the top, add a line next to `template.js` describing `pacing.js — pacing profiles + human-timing helpers (jitter, typing delays, splitForTyping)`. Match the existing list format exactly; read the top of the file first.

### 6.4 `docs/decisions.md`
After the paragraph ending `back per-sender without a rebuild if a number gets flagged.` (end of the "Anti-ban pacing" section), insert a new section:

```markdown
## v1.6.0: pacing profiles replace free-form numbers; humanised keystrokes

The 0/0 delay above did what it was asked to do (speed), but it left every run as one
fixed, back-to-back rhythm with identical text, which is the most bot-like pattern this app
could produce. v1.6.0 reverses it at the operator's request, with these changes:

- **Three named profiles instead of raw numbers** (`pacing.js`: Cautious / Balanced /
  Fast, Balanced the default). The ⚙ panel now only picks one. The free-form min/max delay,
  batch size and daily cap are retired (their DB rows are deleted at startup by
  `dropRetiredSettings`). A teammate can no longer set "0 seconds" by accident, and the
  profile carries gaps, breaks, daily cap and a new **hourly cap** together. Default
  country code keeps its backend default (91) with no UI.
- **Gaps** are the mean of two uniform draws (they cluster mid-range instead of spreading
  flat). The break interval is re-rolled after every break, so there's no fixed cadence.
- **Hybrid typing, not full typing.** Only the first line is typed key by key (then
  Shift+Enter for the blank lines), and the rest is pasted. Typing every character through
  SendKeys would take 30-60s+ per message, can't reliably produce emoji or non-Latin text,
  and fails more often. Typing the greeting gets the human-looking part without that
  cost. A first line that isn't plain ASCII (or contains `:`, which opens WhatsApp's emoji
  picker) falls back to the old full paste. **Retries always use the old full paste**, as
  the proven path.
- **Jitter only lengthens.** Every keystroke wait in `wa/desktop.*.js` was tuned as a
  minimum, so `jitter()` adds 0-40% and never subtracts. Humanising must not cost reliability.
- **Greeting variation is limited to Hi/Hello** (operator request), applied only to the
  first word. Full spintax was considered and not built.
- **Pause/Resume** freezes the countdown rather than skipping it, and always re-focuses
  WhatsApp before the next keystroke, since pausing nearly always means the operator clicked
  elsewhere.
- **Rehearsals** use short 2-4s gaps and no breaks or hourly waits (they never press Enter,
  so they carry no ban risk). An aborted rehearsal also no longer writes "skipped" rows to
  the DB.

Stated plainly: none of this makes a number ban-proof. WhatsApp's strongest signals are
recipients blocking or reporting, and cold-contact ratio. See [operations.md](operations.md).
```

### 6.5 `README.md`
In the `## Development` code block, add a line after `npm run electron ...`: `npm test           # unit tests for pacing + template logic (node:test, no deps)`. Align the `#` column with the neighbouring lines.

---

## 7. Interfaces cheat-sheet (all tasks code against this)

| Symbol | Where | Signature / shape |
|---|---|---|
| `PACING_PROFILES` | `pacing.js` | `{ cautious, balanced, fast }`, each `{ label, description, gapMs:[min,max], breakEvery:[min,max], breakMs:[min,max], dailyCap, hourlyCap|null }` |
| `DEFAULT_PACING_PROFILE` | `pacing.js` | `"balanced"` |
| `isProfileKey(k)` / `resolveProfile(k)` | `pacing.js` | bool / profile object (falls back to balanced) |
| `randomBetween(min,max,rand?)`, `humanGap([min,max],rand?)`, `jitter(ms,spread=0.4,rand?)` | `pacing.js` | integers (ms) |
| `typingDelays(text,rand?)`, `digitDelays(digits,rand?)` | `pacing.js` | `number[]`, one per char |
| `composeDwellMs(len,rand?)`, `chatOpenPauseMs(rand?)` | `pacing.js` | ms |
| `splitForTyping(text)` | `pacing.js` | `{ head, lineBreaks, body }`; `head===""` means paste the whole `body` |
| `varyGreeting(text,rand?)`, `buildMessageText(row,tpl,fallback,{varyGreeting,rand}?)` | `template.js` | string |
| `desktop.typeText(text, lineBreaks=0)` | `wa/desktop.*.js` | types, Shift+Enter ×lineBreaks; no clear, no send |
| `campaigns.countRecentSends(phone, windowMs=24h)` | `db/campaigns.js` | number |
| `campaigns.msUntilHourlySlot(phone, hourlyCap)` | `db/campaigns.js` | ms (0 = go now) |
| `settingsDb.dropRetiredSettings()` | `db/settings.js` | void |
| `runCampaign({..., isPaused})` | `wa/sender.js` | `isPaused: () => boolean` (defaults to never paused) |
| NDJSON events | stream | existing plus `{type:"info",message}`, `{type:"pause",reason:"break"|"hourly",ms}`, `{type:"paused"}`, `{type:"resumed"}` |
| Routes | `server.js` | `GET /api/pacing-profiles` → `{profiles, defaultProfile}`; `POST /api/campaigns/:id/pause` / `resume` → `{ok, paused}` or 404 |

---

## 8. Static verification (main agent, after T1–T5)

1. `npm test`: all pass.
2. `node --check` on: `pacing.js template.js server.js config.js db/settings.js db/campaigns.js wa/sender.js wa/desktop.js wa/desktop.win.js wa/desktop.mac.js`.
3. `node -e "require('./wa/sender'); require('./server'); console.log('ok')"`. Loading `server.js` in plain Node must not throw. It only listens when it's the main module.
4. Grep the repo (exclude `node_modules`, `rys-wa-*.txt`, `dist`) for `sendMinDelayMs|sendMaxDelayMs|sendBatchSize|randomDelay|setMinDelay|NUMERIC_KEYS`. The only hits allowed are `RETIRED_SETTING_KEYS` and the DEFAULTS comment in `db/settings.js`, plus the docs' historical mentions in `decisions.md`.
5. Confirm `package.json` `build.files` contains `"pacing.js"`.
6. Read the full diff (`git diff`) once, end to end, checking for:
   - a stray `pasteIntoComposer` → `composeLikeHuman` swap inside a retry block (retries must stay plain paste);
   - a jittered sleep inside `PS_PREAMBLE`/`focus()` (must stay fixed);
   - `activePauses` cleanup missing in either path of the send route.
   Fix anything wrong before going on.
7. Optionally use `/code-review` on the diff.

## 9. Live test (main agent, **user present**; real messages go to the user's two test numbers)

Tell the user before starting:
- WhatsApp Desktop must be open and logged in.
- **Don't touch the keyboard or mouse while a run is going.**
- Real messages will go to **8595856713** and **9818873750**.

All commands go through the **Bash** tool. Use the scratchpad for files: `SP="C:/Users/harsh/AppData/Local/Temp/claude/c--Users-harsh-Desktop-HARSH-WEB-DEV-PROJECTS-rys-email-rys-whatsapp-blaster/abb846ec-92e6-42a9-8ad5-b6faa9ff7dc5/scratchpad"`. An isolated DB keeps the user's real data untouched.

1. Start the server in the background (`run_in_background: true`):
   `cd <repo> && WABLASTER_DB_PATH="$SP/qa/qa.sqlite3" PORT=3123 node server.js`
2. Run `curl -s http://127.0.0.1:3123/healthz` and expect `{"ok":true}`. Run `curl -s http://127.0.0.1:3123/api/pacing-profiles` and expect 3 profiles with default `balanced`.
3. Run `curl -s http://127.0.0.1:3123/api/settings` and expect `"pacingProfile":"balanced"`, with no `sendMinDelayMs` key.
4. Register a sender:
   `curl -s -X POST http://127.0.0.1:3123/api/numbers -H "Content-Type: application/json" -d '{"phoneNumber":"9000000001","displayName":"QA sender"}'`
   Note `id`; it's just a label for cap tracking.
5. Write `$SP/qa/qa.csv`:
   ```
   S.No,Name,Phone
   1,Test One,8595856713
   2,Test Two,9818873750
   ```
   Upload it with `curl -s -F "file=@$SP/qa/qa.csv" -F "senderId=<id>" http://127.0.0.1:3123/api/campaigns`, then note `campaignId`. Expect pending 2.
6. **UI check via Claude in Chrome** (load the chrome tools in one ToolSearch call, open a new tab at `http://127.0.0.1:3123`):
   - click ⚙ and confirm 3 cards with Balanced marked Recommended and selected;
   - pick Cautious, Save, reload and re-open ⚙ to confirm Cautious persisted;
   - set it back to Balanced and Save;
   - confirm the greeting note appears under the preview (the default template starts with "Hi").
   - Close the tab afterwards. Do not press Send from the browser.
7. **Rehearsal** (nothing is sent):
   `curl -sN -X POST http://127.0.0.1:3123/api/campaigns/<cid>/send -H "Content-Type: application/json" -d '{"snos":[1,2],"dryRun":true}'`
   - Expect an `info` event, then 2 `rehearsed` events.
   - Ask the user whether they saw the digits typed one by one and the greeting typed key by key.
   - If a row fails with `verification failed`, see the troubleshooting list below.
8. **Real text send, with Pause/Resume.** Run in the background, writing to `$SP/qa/run1.ndjson`:
   `curl -sN -X POST http://127.0.0.1:3123/api/campaigns/<cid>/send -H "Content-Type: application/json" -d '{"snos":[1,2],"dryRun":false}' > "$SP/qa/run1.ndjson"`
   - Watch the file until the line with `"sno":1,...,"state":"submitted"` appears. Then immediately `curl -s -X POST .../api/campaigns/<cid>/pause`, and expect `{"ok":true,"paused":true}`.
   - Within about 1s the file must show `{"type":"paused"}`.
   - Wait 30s and confirm no new recipient line appeared, even though the Balanced gap is at most 60s. The countdown is frozen.
   - `curl -s -X POST .../resume`. Expect `{"type":"resumed"}`, then WhatsApp is re-focused, then sno 2 is submitted after the remaining gap.
   - Ask the user to confirm on the phones that both messages arrived, and whether the greetings differed. Hi vs Hello is random, so they may match.
9. **Poster send.** Upload `build/icon.png`:
   `curl -s -F "file=@build/icon.png;type=image/png" http://127.0.0.1:3123/api/settings/poster-upload`
   - Upload the CSV again as a NEW campaign (step 5 command, new `cid2`), then real-send `{"snos":[1]}` only, to 8595856713.
   - The user confirms that the image arrived with the full caption, line breaks intact.
   - Then remove the poster: `curl -s -X DELETE http://127.0.0.1:3123/api/settings/poster-upload`.
10. **Abort while paused:** new campaign `cid3`, send `{"snos":[1,2],"dryRun":true}` in the background, pause after the first `rehearsed`, then `curl -X POST .../abort`. Expect the stream to end with sno 2 `skipped`/`run aborted by operator`. In the DB, `GET /api/campaigns/<cid3>` must still show sno 2 as `pending`, because a rehearsal writes nothing.
11. Stop the background server. Delete `$SP/qa`.

**Troubleshooting** (fix, then re-run from step 7):
- **`composer verification failed`, with `got` missing the typed greeting:** typing landed before the composer was ready. Increase the `chatOpenPauseMs` range in `pacing.js` to 1200–3000 and re-test.
- **`got` shows the greeting but the body is missing or duplicated:** check that `composeLikeHuman` uses `pasteCaption` (non-clearing) for the body, not `pasteIntoComposer`.
- **The message was sent in two parts:** Shift+Enter isn't being honoured. On Windows the SendKeys token must be exactly `"+{ENTER}"`. If WhatsApp still sends, set `lineBreaks` handling to paste the newlines instead: in `splitForTyping` return `{ head, lineBreaks: 0, body: rest }`, so the body keeps its leading newlines. Update the corresponding test and record the change in decisions.md.
- **PowerShell timeout:** confirm `openChatByNumber`/`typeText` pass `LONG_PS_TIMEOUT_MS`.

If something fails and the fix isn't obvious, stop and report to the user. Do not publish.

## 10. Publish (only after section 9 passes)

1. `package.json` `"version": "1.5.2"` → `"1.6.0"`.
2. Stage **only** the intended files. `rys-wa-*.txt` stay untracked:
   `git add pacing.js template.js package.json test/ wa/desktop.js wa/desktop.win.js wa/desktop.mac.js wa/sender.js db/campaigns.js db/settings.js server.js config.js .env.example public/index.html docs/ README.md`
   Run `git status` to confirm nothing else is staged. If `.env.example` was unchanged it simply won't stage.
3. Commit (HEREDOC):
   ```
   feat: v1.6.0 pacing profiles, human-like typing, Pause/Resume

   - Settings (⚙) now picks Cautious / Balanced (default) / Fast; free-form delay,
     batch and cap settings retired
   - Random gaps, randomly-spaced breaks, daily + hourly caps per profile
   - Greeting line typed key by key, digits typed one by one, all waits jittered
   - Opening Hi/Hello varied per recipient
   - Pause/Resume during a run; rehearsal aborts no longer write to the DB
   - node:test unit tests for pacing + template logic

   Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
   ```
4. `git push origin main`. The push triggers `.github/workflows/release.yml`, which builds Windows and Mac and runs `gh release create v1.6.0`.
5. `gh run list --workflow=release.yml --limit 1`, then `gh run watch <id> --exit-status` (run in the background and wait for the notification).
6. `gh release view v1.6.0 --repo harshkawatra11/whatsapp-blaster` must list `WhatsApp-Blaster-Setup-1.6.0.exe`, `latest.yml`, the `.dmg` files and the `.zip` files.
7. Report to the user:
   - the release link;
   - that existing Windows installs pick it up through the in-app update banner;
   - that Mac users download it manually;
   - that the app now defaults to Balanced, so runs are much slower than before (about 45–60/hour).
