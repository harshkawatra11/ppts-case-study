# Per-account Gmail API usage counter + "Clear all tokens" button

> **STATUS: Implementation complete.** Sections 1-9 (new files `lib/sendErrors.js` and `db/usage.js`, edits to `db/init.js`, `db/schema.sql`, `db/accounts.js`, `server.js`, `public/index.html`) have all been applied and verified: `node --check` clean on every touched file, inline `<script>` parses, `classifySendError` unit tests pass, `/api/usage` returns correct data for all connected accounts, `/api/accounts/clear-all`'s confirmation guard rejects bad input, `/api/oauth/start` now sends `select_account`. The operator has additionally verified the UI in-browser and performed a real "Clear all tokens" reset via localhost (intentional — all senders will re-login). **Remaining work is Section 10 only: commit and push, then verify the Render deploy.** No further code changes are needed.
>
> **Executor instructions (read first).** This plan is written so it can be executed mechanically. Every edit below gives the exact `old_string` (text that exists in the file today) and the exact `new_string`. Apply them in order, using the Edit tool. Do not redesign anything. If an `old_string` is not found, re-Read that region of the file and match the current text exactly. Never guess. Never run `git add -A` / `git add .`. Repo root: `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\rys_email\rys_email_blaster` (all paths below are relative to it). Last commit at planning time: `19cb4b1`.

---

## 0. Context

The app is a Node/Express monolith (`server.js`) with a single-page vanilla-JS frontend (`public/index.html`), deployed on Render (auto-deploys on push to `main` of `github.com/harshkawatra11/rys_email_blaster`), backed by Supabase Postgres via `DATABASE_URL` (`db/pool.js` converts `?` placeholders to `$1…`). Each Gmail sender account is stored in table `accounts` (`id`, `email` UNIQUE, `display_name`, `refresh_token`, `created_at`, `updated_at`). `/api/send` sends one email per CSV row through `gmail.users.messages.send` with a 2-second gap, streaming NDJSON progress lines (`{info}`, `{ok:true,sno,email}`, `{ok:false,sno,email,reason}`) back to the browser.

The operator asked for two things:

1. **Per-account usage counter on the home page (Step 1), directly below the Message Template.** For every email account show how many `gmail.send` API calls were made, so when Gmail starts throttling/limiting the operator can see which account is near its limit. Confirmed decisions: show **last rolling 24h (sent / failed) + all-time (calls / ok / failed)**; compare 24h-sent against Gmail's consumer limit of **500 per rolling 24h** (green < 80%, amber ≥ 80%, red ≥ 95%); **display + warn only, never block** sending.
2. **A small "Clear all tokens" button on the first page.** Deletes every stored refresh token so all senders can log in with Google again and store fresh tokens. Confirmed decisions: protected by a **two-click confirm** (no native dialog) plus a server-side confirm flag; **usage counters are kept** (stored separately, keyed by email).

### Root cause analysis of "re-login doesn't override the old token" (fixed in this plan as well)

- **Why tokens die every week:** the Google Cloud project `rys-email-blaster` OAuth consent screen is in **"Testing"** publishing status. Google expires refresh tokens issued to Testing-mode apps **7 days** after issuance. Every send then fails with `invalid_grant`.
- **Why logging in again appears not to fix it:** `/api/oauth/start` (server.js ≈ line 386) uses `prompt: "consent"` only. When the operator's browser is already signed into some Google account, Google silently re-uses *that* account, so the fresh token is saved against whichever account happened to be active — not the sender who is "logging in again". The stale row for the intended sender is never touched. Fix: `prompt: "consent select_account"` forces the account chooser every time.
- **Secondary bug:** `upsertAccount` (db/accounts.js line 32-43) never updates `updated_at` on re-login in Postgres (no trigger), so there is no way to tell token age. Fix: set `updated_at = CURRENT_TIMESTAMP` in the conflict branch.
- **Secondary bug:** `slugify()` (db/accounts.js line 3-5) builds the primary key from the local part only (`avni@gmail.com` and `avni@other.org` collide → `INSERT` throws on the primary key, `ON CONFLICT (email)` doesn't catch it). Fix: slug the full email.
- **Wasted time bug:** when a token is dead, `/api/send` keeps trying every remaining row (2s each), all failing with `invalid_grant`. Fix: stop the batch on the first `invalid_grant` and tell the operator exactly what to do.
- **Stale UI bug:** `loadAccounts()` (index.html ≈ line 846-849) returns early when there are 0 accounts without calling `onAccountChange()`, so after clearing, the old account badge stays visible and "Continue" stays enabled. Fix included.

### Design summary

- New table `send_log` (one row per `gmail.send` attempt: `email`, `ok`, `error_code`, `created_at`), pruned to the last 8 days → powers the rolling-24h numbers and "token expired" detection.
- New table `send_totals` (one row per email: `total_calls`, `total_ok`, `total_failed`, `last_call_at`) → all-time counters that survive pruning and survive "Clear all tokens" (keyed by email, not by account row).
- New module `db/usage.js` (record, prune, summarize) and `lib/sendErrors.js` (classify a Gmail/googleapis error into `invalid_grant` / `rate_limit` / `other`).
- New endpoints: `GET /api/usage`, `POST /api/accounts/clear-all`.
- `/api/send` records every attempt, stops on `invalid_grant`, and always cleans up its job entry (try/finally).
- Frontend: usage panel in Step 1 under the template, "Clear all tokens" two-click button next to "+ Add account", cap warning in Step 4, fatal-stop handling in the send log.
- All time math is done **in SQL** (`CURRENT_TIMESTAMP - x`) and returned as seconds, so there is no Node/DB timezone skew (Render runs UTC, local dev runs IST).

### Files touched

| File | Change |
|---|---|
| `lib/sendErrors.js` | **new** — `classifySendError(err)` |
| `db/usage.js` | **new** — `recordSend`, `pruneOldLogs`, `getUsageSummary` |
| `db/init.js` | add `send_log` + `send_totals` DDL to `ensureSchema()` |
| `db/schema.sql` | mirror the new DDL (reference only) |
| `db/accounts.js` | full-email slug, `updated_at` on upsert, 3 new functions |
| `server.js` | requires, `GMAIL_DAILY_LIMIT`, OAuth `select_account`, `GET /api/usage`, `POST /api/accounts/clear-all`, rewritten `/api/send`, prune on boot |
| `public/index.html` | CSS, markup (clear button, usage panel, cap warning), JS (usage panel, clear button, send-log fatal handling, fixes) |

---

## 1. Create `lib/sendErrors.js` (new file)

Use the Write tool. Full content:

```js
// Classifies an error thrown by googleapis' gmail.users.messages.send (or by
// the OAuth token refresh that runs right before it) so /api/send can record
// it and decide whether to stop the batch.
//   invalid_grant — the stored refresh token is expired/revoked. Every
//                   remaining row for this account will fail the same way.
//   rate_limit    — Gmail throttled or the account hit its daily send quota.
//   other         — anything else (bad address, network, etc).
function classifySendError(err) {
  const status = Number(err?.code ?? err?.response?.status ?? err?.status);
  const blob = [
    err?.message,
    safeJson(err?.response?.data),
    safeJson(err?.errors),
  ].join(" ");

  if (/invalid_grant/i.test(blob)) return "invalid_grant";
  if (
    status === 429 ||
    /rateLimitExceeded|userRateLimitExceeded|dailyLimitExceeded|quotaExceeded|User-rate limit|Daily Limit|sending limit/i.test(blob)
  ) return "rate_limit";
  return "other";
}

function safeJson(v) {
  if (v === undefined || v === null) return "";
  try { return typeof v === "string" ? v : JSON.stringify(v); } catch { return ""; }
}

module.exports = { classifySendError };
```

---

## 2. Create `db/usage.js` (new file)

Use the Write tool. Full content:

```js
const { query, isPg } = require("./pool");

// All time windows are computed inside the database so Node's timezone
// (UTC on Render, IST locally) never skews the numbers.
const SINCE_24H   = isPg ? "CURRENT_TIMESTAMP - INTERVAL '24 hours'" : "NOW() - INTERVAL 24 HOUR";
const RETENTION   = isPg ? "CURRENT_TIMESTAMP - INTERVAL '8 days'"   : "NOW() - INTERVAL 8 DAY";
const AGE_SECONDS = (col) => isPg
  ? `EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - ${col}))`
  : `TIMESTAMPDIFF(SECOND, ${col}, NOW())`;

// One row per gmail.send attempt (ok or failed). Never throws — a usage
// bookkeeping failure must never break an actual email send.
async function recordSend({ email, ok, errorCode = null }) {
  try {
    await query(
      "INSERT INTO send_log (email, ok, error_code) VALUES (?, ?, ?)",
      [email, !!ok, errorCode]
    );
    const totalsSql = isPg
      ? `INSERT INTO send_totals (email, total_calls, total_ok, total_failed, last_call_at)
         VALUES (?, 1, ?, ?, CURRENT_TIMESTAMP)
         ON CONFLICT (email) DO UPDATE SET
           total_calls  = send_totals.total_calls + 1,
           total_ok     = send_totals.total_ok + EXCLUDED.total_ok,
           total_failed = send_totals.total_failed + EXCLUDED.total_failed,
           last_call_at = CURRENT_TIMESTAMP`
      : `INSERT INTO send_totals (email, total_calls, total_ok, total_failed, last_call_at)
         VALUES (?, 1, ?, ?, CURRENT_TIMESTAMP)
         ON DUPLICATE KEY UPDATE
           total_calls  = total_calls + 1,
           total_ok     = total_ok + VALUES(total_ok),
           total_failed = total_failed + VALUES(total_failed),
           last_call_at = CURRENT_TIMESTAMP`;
    await query(totalsSql, [email, ok ? 1 : 0, ok ? 0 : 1]);
  } catch (err) {
    console.log(`[WARN] Could not record usage for ${email}: ${err.message}`);
  }
}

// send_log only needs to cover the rolling 24h window plus a little history
// for "token expired" detection; all-time numbers live in send_totals.
async function pruneOldLogs() {
  try {
    await query(`DELETE FROM send_log WHERE created_at < ${RETENTION}`);
  } catch (err) {
    console.log(`[WARN] Could not prune send_log: ${err.message}`);
  }
}

// Raw per-email aggregates. Postgres returns SUM/COUNT/EXTRACT as strings,
// so callers must wrap every numeric field in Number().
async function getUsageSummary() {
  const [recent] = await query(
    `SELECT email,
            SUM(CASE WHEN ok THEN 1 ELSE 0 END) AS ok_24h,
            SUM(CASE WHEN ok THEN 0 ELSE 1 END) AS failed_24h
     FROM send_log
     WHERE created_at > ${SINCE_24H}
     GROUP BY email`
  );
  const [totals] = await query(
    `SELECT email, total_calls, total_ok, total_failed,
            ${AGE_SECONDS("last_call_at")} AS last_call_age_s
     FROM send_totals`
  );
  const [grants] = await query(
    `SELECT email, ${AGE_SECONDS("MAX(created_at)")} AS grant_age_s
     FROM send_log
     WHERE error_code = 'invalid_grant'
     GROUP BY email`
  );
  return { recent, totals, grants };
}

module.exports = { recordSend, pruneOldLogs, getUsageSummary };
```

Notes for the executor (no action needed, just don't "fix" these):
- `ok` is passed as a JS boolean; `pg` maps it to `BOOLEAN`, `mysql2` maps it to `1/0`.
- `CASE WHEN ok THEN …` works for both Postgres `BOOLEAN` and MySQL `TINYINT(1)`.
- None of these SQL strings contain a literal `?` other than placeholders, so `db/pool.js`'s `?`→`$n` conversion is safe.

---

## 3. Edit `db/init.js` — add the two new tables

### 3a. Add DDL constants

`old_string`:
```js
const PG_GLOBAL_POSTERS_INDEX = `
CREATE INDEX IF NOT EXISTS idx_global_posters_position ON global_posters (position)`;
```
`new_string`:
```js
const PG_GLOBAL_POSTERS_INDEX = `
CREATE INDEX IF NOT EXISTS idx_global_posters_position ON global_posters (position)`;

// One row per gmail.send attempt — powers the rolling 24h usage numbers.
// Pruned to ~8 days (db/usage.js pruneOldLogs). Keyed by email (not account
// id) so history survives "Clear all tokens".
const MYSQL_SEND_LOG_SCHEMA = `
CREATE TABLE IF NOT EXISTS send_log (
  id          BIGINT AUTO_INCREMENT PRIMARY KEY,
  email       VARCHAR(255) NOT NULL,
  ok          TINYINT(1) NOT NULL,
  error_code  VARCHAR(32),
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_send_log_email_created (email, created_at)
)`;

const PG_SEND_LOG_SCHEMA = `
CREATE TABLE IF NOT EXISTS send_log (
  id          BIGSERIAL PRIMARY KEY,
  email       VARCHAR(255) NOT NULL,
  ok          BOOLEAN NOT NULL,
  error_code  VARCHAR(32),
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)`;

const PG_SEND_LOG_INDEX = `
CREATE INDEX IF NOT EXISTS idx_send_log_email_created ON send_log (email, created_at)`;

// All-time counters per email — never pruned, survives "Clear all tokens".
const MYSQL_SEND_TOTALS_SCHEMA = `
CREATE TABLE IF NOT EXISTS send_totals (
  email         VARCHAR(255) PRIMARY KEY,
  total_calls   INTEGER NOT NULL DEFAULT 0,
  total_ok      INTEGER NOT NULL DEFAULT 0,
  total_failed  INTEGER NOT NULL DEFAULT 0,
  last_call_at  TIMESTAMP NULL
)`;

const PG_SEND_TOTALS_SCHEMA = `
CREATE TABLE IF NOT EXISTS send_totals (
  email         VARCHAR(255) PRIMARY KEY,
  total_calls   INTEGER NOT NULL DEFAULT 0,
  total_ok      INTEGER NOT NULL DEFAULT 0,
  total_failed  INTEGER NOT NULL DEFAULT 0,
  last_call_at  TIMESTAMP
)`;
```

### 3b. Run them in `ensureSchema()`

`old_string`:
```js
  await query(isPg ? PG_GLOBAL_POSTERS_SCHEMA : MYSQL_GLOBAL_POSTERS_SCHEMA);
  if (isPg) await query(PG_GLOBAL_POSTERS_INDEX);
```
`new_string`:
```js
  await query(isPg ? PG_GLOBAL_POSTERS_SCHEMA : MYSQL_GLOBAL_POSTERS_SCHEMA);
  if (isPg) await query(PG_GLOBAL_POSTERS_INDEX);
  await query(isPg ? PG_SEND_LOG_SCHEMA : MYSQL_SEND_LOG_SCHEMA);
  if (isPg) await query(PG_SEND_LOG_INDEX);
  await query(isPg ? PG_SEND_TOTALS_SCHEMA : MYSQL_SEND_TOTALS_SCHEMA);
```

---

## 4. Edit `db/schema.sql` — reference mirror

Append to the **end** of the file (use Edit with the last statement as anchor).

`old_string`:
```sql
  updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_global_posters_position (position)
);
```
`new_string`:
```sql
  updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_global_posters_position (position)
);

-- One row per gmail.send attempt (rolling 24h usage + invalid_grant detection).
CREATE TABLE IF NOT EXISTS send_log (
  id          BIGINT AUTO_INCREMENT PRIMARY KEY,
  email       VARCHAR(255) NOT NULL,
  ok          TINYINT(1) NOT NULL,
  error_code  VARCHAR(32),
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_send_log_email_created (email, created_at)
);

-- All-time per-email counters (survive log pruning and "Clear all tokens").
CREATE TABLE IF NOT EXISTS send_totals (
  email         VARCHAR(255) PRIMARY KEY,
  total_calls   INTEGER NOT NULL DEFAULT 0,
  total_ok      INTEGER NOT NULL DEFAULT 0,
  total_failed  INTEGER NOT NULL DEFAULT 0,
  last_call_at  TIMESTAMP NULL
);
```

---

## 5. Edit `db/accounts.js`

### 5a. Full-email slug (prevents primary-key collisions across domains)

`old_string`:
```js
function slugify(email) {
  return email.split("@")[0].toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
```
`new_string`:
```js
// Full address (not just the local part) so avni@gmail.com and avni@org.in
// can't collide on the primary key. Existing rows keep their old ids — the
// upsert below conflicts on email and never rewrites id.
function slugify(email) {
  return email.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
```

### 5b. Upsert must stamp `updated_at` (token age)

`old_string`:
```js
       ON CONFLICT (email) DO UPDATE SET display_name = EXCLUDED.display_name, refresh_token = EXCLUDED.refresh_token`
    : `INSERT INTO accounts (id, email, display_name, refresh_token)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE display_name = VALUES(display_name), refresh_token = VALUES(refresh_token)`;
```
`new_string`:
```js
       ON CONFLICT (email) DO UPDATE SET display_name = EXCLUDED.display_name,
                                         refresh_token = EXCLUDED.refresh_token,
                                         updated_at = CURRENT_TIMESTAMP`
    : `INSERT INTO accounts (id, email, display_name, refresh_token)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE display_name = VALUES(display_name),
                               refresh_token = VALUES(refresh_token),
                               updated_at = CURRENT_TIMESTAMP`;
```

### 5c. Add three functions and export them

`old_string`:
```js
async function deleteAccount(id) {
  await query("DELETE FROM accounts WHERE id = ?", [id]);
}

module.exports = { listAccounts, getAccountById, upsertAccount, deleteAccount };
```
`new_string`:
```js
async function deleteAccount(id) {
  await query("DELETE FROM accounts WHERE id = ?", [id]);
}

// Token age = seconds since the refresh token was last (re)stored. Computed
// in SQL so there's no Node/DB timezone skew. Google expires refresh tokens
// for OAuth apps in "Testing" status 7 days after issuance.
async function listAccountsWithAge() {
  const ageExpr = isPg
    ? "EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - updated_at))"
    : "TIMESTAMPDIFF(SECOND, updated_at, NOW())";
  const [rows] = await query(
    `SELECT id, email, display_name, ${ageExpr} AS token_age_s FROM accounts ORDER BY display_name`
  );
  return rows.map((r) => ({
    ...toCamel(r),
    tokenAgeSeconds: r.token_age_s === null || r.token_age_s === undefined ? null : Number(r.token_age_s),
  }));
}

async function listAccountsWithTokens() {
  const [rows] = await query("SELECT id, email, display_name, refresh_token FROM accounts");
  return rows.map(toCamel);
}

async function deleteAllAccounts() {
  await query("DELETE FROM accounts");
}

module.exports = {
  listAccounts,
  getAccountById,
  upsertAccount,
  deleteAccount,
  listAccountsWithAge,
  listAccountsWithTokens,
  deleteAllAccounts,
};
```

---

## 6. Edit `server.js`

### 6a. Requires

`old_string`:
```js
const globalPostersDb = require("./db/globalPosters");
const { ensureSchema } = require("./db/init");
const { sanitizeTemplateHtml } = require("./lib/sanitizeConfig");
```
`new_string`:
```js
const globalPostersDb = require("./db/globalPosters");
const usageDb = require("./db/usage");
const { ensureSchema } = require("./db/init");
const { sanitizeTemplateHtml } = require("./lib/sanitizeConfig");
const { classifySendError } = require("./lib/sendErrors");
```

### 6b. Daily limit constant

`old_string`:
```js
const MAX_GLOBAL_POSTERS = 6; // bounds per-email size (see buildRawMessage)
```
`new_string`:
```js
const MAX_GLOBAL_POSTERS = 6; // bounds per-email size (see buildRawMessage)
// Consumer Gmail allows ~500 sends per rolling 24h (Workspace: 2000). Used
// only for display/warnings — sending is never blocked by the app.
const GMAIL_DAILY_LIMIT = Number(process.env.GMAIL_DAILY_LIMIT) || 500;
```

### 6c. Force Google's account chooser on every "Add account"

`old_string`:
```js
  const url = oauth2.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
```
`new_string`:
```js
  const url = oauth2.generateAuthUrl({
    access_type: "offline",
    // select_account: without it Google silently reuses whichever account the
    // browser is already signed into, so "logging in again" stored a fresh
    // token for the wrong sender and the stale row was never replaced.
    // consent: guarantees Google returns a new refresh_token every time.
    prompt: "consent select_account",
```

### 6d. Add `GET /api/usage` (right after the `DELETE /api/accounts/:id` route)

`old_string`:
```js
app.delete("/api/accounts/:id", async (req, res) => {
  try {
    await accountsDb.deleteAccount(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete account: " + err.message });
  }
});
```
`new_string`:
```js
app.delete("/api/accounts/:id", async (req, res) => {
  try {
    await accountsDb.deleteAccount(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete account: " + err.message });
  }
});

// ── Usage (per-email gmail.send counters) ─────────────────────────────────
// Merges connected accounts with usage history. Emails that have history but
// no stored token (e.g. after "Clear all tokens") are returned with
// connected:false so their counters stay visible.
app.get("/api/usage", async (req, res) => {
  try {
    const [accounts, summary] = await Promise.all([
      accountsDb.listAccountsWithAge(),
      usageDb.getUsageSummary(),
    ]);

    const byEmail = new Map();
    const ensure = (email) => {
      if (!byEmail.has(email)) {
        byEmail.set(email, {
          email,
          displayName: email.split("@")[0],
          connected: false,
          accountId: null,
          tokenAgeSeconds: null,
          tokenExpired: false,
          sent24h: 0,
          failed24h: 0,
          totalCalls: 0,
          totalOk: 0,
          totalFailed: 0,
          lastCallAgeSeconds: null,
        });
      }
      return byEmail.get(email);
    };

    for (const a of accounts) {
      Object.assign(ensure(a.email), {
        displayName: a.displayName,
        connected: true,
        accountId: a.id,
        tokenAgeSeconds: a.tokenAgeSeconds,
      });
    }
    for (const r of summary.recent) {
      Object.assign(ensure(r.email), {
        sent24h: Number(r.ok_24h) || 0,
        failed24h: Number(r.failed_24h) || 0,
      });
    }
    for (const t of summary.totals) {
      Object.assign(ensure(t.email), {
        totalCalls: Number(t.total_calls) || 0,
        totalOk: Number(t.total_ok) || 0,
        totalFailed: Number(t.total_failed) || 0,
        lastCallAgeSeconds: t.last_call_age_s === null || t.last_call_age_s === undefined ? null : Number(t.last_call_age_s),
      });
    }
    // Token is "expired" if the latest invalid_grant happened AFTER the token
    // was last stored (i.e. nobody has reconnected since it died).
    for (const g of summary.grants) {
      const u = ensure(g.email);
      const grantAge = Number(g.grant_age_s);
      u.tokenExpired = u.connected && (u.tokenAgeSeconds === null || grantAge < u.tokenAgeSeconds);
    }

    const list = [...byEmail.values()].sort(
      (a, b) => Number(b.connected) - Number(a.connected) || a.email.localeCompare(b.email)
    );
    res.json({ limit: GMAIL_DAILY_LIMIT, accounts: list });
  } catch (err) {
    res.status(500).json({ error: "Failed to load usage: " + err.message });
  }
});
```

### 6e. Add `POST /api/accounts/clear-all` (right after `/api/abort`, so `ACTIVE_JOBS` is already declared above it)

`old_string`:
```js
app.post("/api/abort", (req, res) => {
  const { jobId } = req.body;
  if (jobId && ACTIVE_JOBS[jobId]) {
    ACTIVE_JOBS[jobId].aborted = true;
  }
  res.json({ ok: true });
});
```
`new_string`:
```js
app.post("/api/abort", (req, res) => {
  const { jobId } = req.body;
  if (jobId && ACTIVE_JOBS[jobId]) {
    ACTIVE_JOBS[jobId].aborted = true;
  }
  res.json({ ok: true });
});

// ── Clear all tokens ──────────────────────────────────────────────────────
// Deletes every stored refresh token so every sender can sign in fresh.
// Tokens are revoked at Google first (best-effort, 5s cap each) so the old
// grants are dead too. Usage counters (send_log/send_totals) are kept — they
// are keyed by email, not by account row.
app.post("/api/accounts/clear-all", async (req, res) => {
  if (req.body?.confirm !== "CLEAR_ALL_TOKENS") {
    return res.status(400).json({ error: "Missing confirmation" });
  }
  if (Object.keys(ACTIVE_JOBS).length > 0) {
    return res.status(409).json({ error: "A send batch is still running — terminate it before clearing tokens" });
  }
  try {
    const accounts = await accountsDb.listAccountsWithTokens();
    const results = await Promise.allSettled(
      accounts.map((a) =>
        Promise.race([
          makeOAuthClient().revokeToken(a.refreshToken),
          new Promise((_, reject) => setTimeout(() => reject(new Error("revoke timeout")), 5000)),
        ])
      )
    );
    const revoked = results.filter((r) => r.status === "fulfilled").length;
    await accountsDb.deleteAllAccounts();
    console.log(`[INFO] Cleared ${accounts.length} account token(s) (${revoked} revoked at Google)`);
    res.json({ ok: true, cleared: accounts.length, revoked });
  } catch (err) {
    res.status(500).json({ error: "Failed to clear tokens: " + err.message });
  }
});
```

### 6f. Replace the whole `/api/send` handler

Replace everything from the line `app.post("/api/send", async (req, res) => {` up to and including its closing `});` (the line just before the comment `// Multer errors (oversize/invalid upload) should come back as JSON, not`). Easiest: do it as **two** Edits so the `old_string`s stay small and unique.

**6f-1.** `old_string`:
```js
  const { accountId, rows, subject, jobId } = req.body;
  const acc = await accountsDb.getAccountById(accountId);
  if (!acc) return res.status(400).json({ error: "Unknown account" });
```
`new_string`:
```js
  const { accountId, rows, subject, jobId } = req.body;
  const acc = await accountsDb.getAccountById(accountId);
  if (!acc) return res.status(400).json({ error: "Unknown account — it may have been cleared. Reload the page and pick an account again." });
```

**6f-2.** `old_string` (from the job registration down to the end of the handler):
```js
  if (jobId) {
    ACTIVE_JOBS[jobId] = { aborted: false };
  }

  // Pre-fetch each distinct poster link once (not per-row) across every
```
`new_string`:
```js
  if (jobId) {
    ACTIVE_JOBS[jobId] = { aborted: false };
  }

  // try/finally guarantees the job entry is removed and the response ends
  // even if something throws mid-batch — otherwise "Clear all tokens" would
  // think a batch is still running until the server restarts.
  try {
  // Pre-fetch each distinct poster link once (not per-row) across every
```

**6f-3.** `old_string`:
```js
  for (let i = 0; i < rows.length; i++) {
    if (jobId && ACTIVE_JOBS[jobId].aborted) {
```
`new_string`:
```js
  for (let i = 0; i < rows.length; i++) {
    if (jobId && ACTIVE_JOBS[jobId]?.aborted) {
```

**6f-4.** `old_string` (the send/try-catch through the end of the handler):
```js
    try {
      await gmail.users.messages.send({ userId: "me", requestBody: { raw } });
      res.write(JSON.stringify({ ok: true, sno: row.sno, email: row.email }) + "\n");
    } catch (err) {
      res.write(JSON.stringify({ ok: false, sno: row.sno, email: row.email, reason: err.message }) + "\n");
    }

    // Wait 2 seconds after each email — skip delay after the last one
    if (i < rows.length - 1) await delay(EMAIL_DELAY);
  }

  res.end();
});
```
`new_string`:
```js
    let stopBatch = false;
    try {
      await gmail.users.messages.send({ userId: "me", requestBody: { raw } });
      await usageDb.recordSend({ email: acc.email, ok: true });
      res.write(JSON.stringify({ ok: true, sno: row.sno, email: row.email }) + "\n");
    } catch (err) {
      const errorCode = classifySendError(err);
      await usageDb.recordSend({ email: acc.email, ok: false, errorCode });
      res.write(JSON.stringify({ ok: false, sno: row.sno, email: row.email, reason: err.message }) + "\n");
      if (errorCode === "invalid_grant") {
        // A dead refresh token fails every remaining row identically —
        // stop now instead of burning 2s per row on guaranteed failures.
        res.write(JSON.stringify({
          fatal: `The Google token for ${acc.email} is expired or revoked (invalid_grant). Batch stopped at SNO ${row.sno}. Click "+ Add account", choose ${acc.email} in Google's account picker, then resend from SNO ${row.sno}.`,
        }) + "\n");
        stopBatch = true;
      }
    }
    if (stopBatch) break;

    // Wait 2 seconds after each email — skip delay after the last one
    if (i < rows.length - 1) await delay(EMAIL_DELAY);
  }
  } finally {
    if (jobId) delete ACTIVE_JOBS[jobId];
    usageDb.pruneOldLogs();
    res.end();
  }
});
```

> Indentation note: the code between `try {` (6f-2) and `} finally {` (6f-4) keeps its existing 2-space indentation. That is intentional (smallest diff, fewer chances of a bad Edit). Do not re-indent.

### 6g. Prune old logs on boot

`old_string`:
```js
    await ensureSchema();
    const accounts = await accountsDb.listAccounts();
```
`new_string`:
```js
    await ensureSchema();
    await usageDb.pruneOldLogs();
    const accounts = await accountsDb.listAccounts();
```

---

## 7. Edit `public/index.html`

### 7a. CSS — append before `</style>`

`old_string`:
```css
  .dropzone.compact { padding: 18px 16px; margin-bottom: 10px; }
</style>
```
`new_string`:
```css
  .dropzone.compact { padding: 18px 16px; margin-bottom: 10px; }

  /* ── Small buttons / danger hover ── */
  .btn-sm { padding: 7px 14px; font-size: 0.7rem; }
  .btn-danger:hover { background: rgba(244,63,94,0.2); }
  .btn-danger:disabled { opacity: 0.6; cursor: not-allowed; }

  /* ── Per-account usage panel ── */
  .usage-list { display: flex; flex-direction: column; gap: 8px; }
  .usage-row {
    display: grid; grid-template-columns: minmax(0, 1fr) 150px auto; gap: 14px; align-items: center;
    background: var(--bg); border: 1px solid var(--border2); border-radius: 8px;
    padding: 10px 14px; font-size: 0.75rem;
  }
  .usage-row.selected { border-color: var(--accent); }
  .usage-email { color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .usage-sub { color: var(--muted); font-size: 0.68rem; margin-top: 3px; line-height: 1.5; }
  .usage-bar { height: 6px; background: var(--border); border-radius: 4px; overflow: hidden; }
  .usage-bar > div { height: 100%; background: var(--accent2); transition: width 0.3s ease; }
  .usage-bar.warn > div { background: var(--accent3); }
  .usage-bar.danger > div { background: var(--danger); }
  .usage-count { text-align: right; color: var(--text); font-weight: 600; white-space: nowrap; }
  .usage-badge {
    display: inline-block; font-size: 0.62rem; padding: 1px 7px; border-radius: 10px;
    margin-left: 8px; border: 1px solid; vertical-align: middle;
  }
  .usage-badge.ok     { color: var(--accent2); border-color: rgba(74,222,128,0.35); }
  .usage-badge.warn   { color: var(--accent3); border-color: rgba(249,115,22,0.4); }
  .usage-badge.danger { color: var(--danger);  border-color: rgba(244,63,94,0.4); }
  .usage-badge.muted  { color: var(--muted);   border-color: var(--border2); }
  .usage-empty { color: var(--muted); font-size: 0.75rem; }
  @media (max-width: 640px) {
    .usage-row { grid-template-columns: 1fr; }
    .usage-count { text-align: left; }
  }

  /* ── Step 4 cap warning ── */
  .cap-warn {
    background: rgba(249,115,22,0.08); border: 1px solid rgba(249,115,22,0.35);
    color: var(--accent3); border-radius: 8px; padding: 10px 14px;
    font-size: 0.75rem; line-height: 1.6; margin-bottom: 16px;
  }
</style>
```

### 7b. Markup — "Clear all tokens" button next to "+ Add account"

`old_string`:
```html
    <div class="btn-group mt-12">
      <button class="btn btn-ghost" id="addAccountBtn" onclick="addAccount()">+ Add account (Continue with Google)</button>
    </div>
```
`new_string`:
```html
    <div class="btn-group mt-12">
      <button class="btn btn-danger btn-sm" id="clearTokensBtn" type="button"
              title="Deletes every stored Google refresh token so every sender can sign in fresh">Clear all tokens</button>
      <button class="btn btn-ghost" id="addAccountBtn" onclick="addAccount()">+ Add account (Continue with Google)</button>
    </div>
    <p class="poster-note" style="margin-top:10px; text-align:right;">
      Sends failing with <code style="color:var(--accent)">invalid_grant</code>? Click "Clear all tokens", then have each sender click
      "+ Add account" and pick <strong>their own</strong> Google account in the chooser.
    </p>
```

### 7c. Markup — usage panel directly below the Message Template section

`old_string`:
```html
      <div id="tplEditor" contenteditable="true" spellcheck="true" data-placeholder="Paste or type your email template here…"></div>
    </div>

    <!-- Global poster fallback (repeatable list) -->
```
`new_string`:
```html
      <div id="tplEditor" contenteditable="true" spellcheck="true" data-placeholder="Paste or type your email template here…"></div>
    </div>

    <!-- Per-account Gmail API usage -->
    <div class="tpl-section" id="usageSection">
      <div class="tpl-section-head">
        <div class="card-label" style="margin-bottom:0; flex:1;">Gmail API Usage (per account)</div>
        <button type="button" class="tpl-btn" id="usageRefreshBtn">↻ Refresh</button>
      </div>
      <p class="poster-note">
        Every email sent is one <code style="color:var(--accent)">gmail.send</code> API call. A regular Gmail account can send about
        <strong id="usageLimitLabel">500</strong> emails per rolling 24 hours — bars turn amber at 80% and red at 95%.
        Sending is never blocked by the app; this is for planning which account to use.
      </p>
      <div id="usageList" class="usage-list"><div class="usage-empty">Loading usage…</div></div>
    </div>

    <!-- Global poster fallback (repeatable list) -->
```

### 7d. Markup — cap warning slot in Step 4

`old_string`:
```html
      <div class="stat-chip green">Recipients <strong id="sendCount">—</strong></div>
    </div>
```
`new_string`:
```html
      <div class="stat-chip green">Recipients <strong id="sendCount">—</strong></div>
    </div>
    <div class="cap-warn hidden" id="sendCapWarn"></div>
```

### 7e. JS — usage panel + clear button block (inserted BEFORE the accounts section so its `const`s exist before `init()` runs)

`old_string`:
```js
// ── Accounts (loaded dynamically from MySQL via the server) ──────────────
async function loadAccounts(preselectEmail) {
```
`new_string`:
```js
// ── Per-account Gmail API usage ───────────────────────────────────────────
const usageState = { limit: 500, byEmail: {} };

function fmtAge(seconds) {
  if (seconds === null || seconds === undefined) return '—';
  const s = Math.max(0, Math.round(seconds));
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

// Google expires refresh tokens for "Testing"-mode OAuth apps after 7 days.
function tokenBadge(u) {
  if (!u.connected) return { cls: 'muted', text: 'not connected' };
  if (u.tokenExpired) return { cls: 'danger', text: 'token expired — reconnect' };
  const days = (u.tokenAgeSeconds || 0) / 86400;
  if (days >= 7) return { cls: 'danger', text: `token ${Math.floor(days)}d old — likely expired` };
  if (days >= 5) return { cls: 'warn', text: `token ${Math.floor(days)}d old` };
  return { cls: 'ok', text: 'connected' };
}

function renderUsage() {
  const list = document.getElementById('usageList');
  document.getElementById('usageLimitLabel').textContent = usageState.limit;
  const items = Object.values(usageState.byEmail);
  if (!items.length) {
    list.innerHTML = '<div class="usage-empty">No accounts connected and no sends recorded yet.</div>';
    return;
  }
  const selectedEmail = state.selectedAccount ? state.selectedAccount.email : null;
  list.innerHTML = items.map(u => {
    const pct = Math.min(100, (u.sent24h / usageState.limit) * 100);
    const level = pct >= 95 ? 'danger' : pct >= 80 ? 'warn' : '';
    const badge = tokenBadge(u);
    return `<div class="usage-row${u.email === selectedEmail ? ' selected' : ''}">
      <div>
        <div class="usage-email">${escapeHtml(u.email)}<span class="usage-badge ${badge.cls}">${escapeHtml(badge.text)}</span></div>
        <div class="usage-sub">24h: ${Number(u.sent24h)} sent · ${Number(u.failed24h)} failed
          &nbsp;|&nbsp; All-time: ${Number(u.totalCalls)} calls (${Number(u.totalOk)} ok, ${Number(u.totalFailed)} failed)
          &nbsp;|&nbsp; Last call: ${fmtAge(u.lastCallAgeSeconds)}</div>
      </div>
      <div class="usage-bar ${level}"><div style="width:${pct.toFixed(1)}%"></div></div>
      <div class="usage-count">${Number(u.sent24h)} / ${Number(usageState.limit)}</div>
    </div>`;
  }).join('');
}

async function loadUsage() {
  try {
    const res = await fetch('/api/usage');
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to load usage');
    usageState.limit = Number(data.limit) || 500;
    usageState.byEmail = {};
    data.accounts.forEach(u => { usageState.byEmail[u.email] = u; });
    renderUsage();
  } catch (err) {
    document.getElementById('usageList').innerHTML =
      `<div class="usage-empty">Could not load usage: ${escapeHtml(err.message)}</div>`;
  }
}

document.getElementById('usageRefreshBtn').addEventListener('click', loadUsage);

// ── Clear all tokens (two-click confirm, no native dialog) ────────────────
const clearTokensBtn = document.getElementById('clearTokensBtn');
let clearArmTimer = null;

function disarmClearBtn() {
  clearTimeout(clearArmTimer);
  delete clearTokensBtn.dataset.armed;
  clearTokensBtn.textContent = 'Clear all tokens';
}

clearTokensBtn.addEventListener('click', async () => {
  if (!clearTokensBtn.dataset.armed) {
    clearTokensBtn.dataset.armed = '1';
    clearTokensBtn.textContent = 'Click again to confirm';
    clearArmTimer = setTimeout(disarmClearBtn, 5000);
    return;
  }
  clearTimeout(clearArmTimer);
  clearTokensBtn.disabled = true;
  clearTokensBtn.textContent = 'Clearing…';
  try {
    const res = await fetch('/api/accounts/clear-all', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ confirm: 'CLEAR_ALL_TOKENS' }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Clear failed');
    state.selectedAccount = null;
    await loadAccounts();
    await loadUsage();
    toast(`Cleared ${data.cleared} token(s). Ask each sender to click "+ Add account" and sign in again.`, 'success');
  } catch (err) {
    toast('Failed to clear tokens: ' + err.message, 'error');
  } finally {
    clearTokensBtn.disabled = false;
    disarmClearBtn();
  }
});

// ── Accounts (loaded dynamically from MySQL via the server) ──────────────
async function loadAccounts(preselectEmail) {
```

### 7f. JS — `loadAccounts()`: reset Step-1 state when 0 accounts; escape option text

`old_string`:
```js
    if (state.accounts.length === 0) {
      sel.innerHTML = '<option value="">— no accounts yet, click "Add account" —</option>';
      return;
    }

    sel.innerHTML = '<option value="">— select an account —</option>';
    state.accounts.forEach(acc => {
      sel.innerHTML += `<option value="${acc.id}">${acc.email}</option>`;
    });
```
`new_string`:
```js
    if (state.accounts.length === 0) {
      sel.innerHTML = '<option value="">— no accounts yet, click "Add account" —</option>';
      onAccountChange(); // hides the stale badge + disables Continue after "Clear all tokens"
      return;
    }

    sel.innerHTML = '<option value="">— select an account —</option>';
    state.accounts.forEach(acc => {
      sel.innerHTML += `<option value="${escapeHtml(acc.id)}">${escapeHtml(acc.email)}</option>`;
    });
```

### 7g. JS — load usage on page init

`old_string`:
```js
  loadSettings();
})();
```
`new_string`:
```js
  loadSettings();
  loadUsage();
})();
```

### 7h. JS — refresh usage when Step 4 opens

`old_string`:
```js
  if (n === 4) updateSendSummary();
```
`new_string`:
```js
  if (n === 4) {
    updateSendSummary();
    loadUsage().then(updateSendSummary); // re-check the cap with fresh numbers
  }
```

### 7i. JS — highlight the selected account's usage row

`old_string`:
```js
  } else {
    info.classList.add('hidden');
    next.disabled = true;
  }
}
```
`new_string`:
```js
  } else {
    info.classList.add('hidden');
    next.disabled = true;
  }
  renderUsage();
}
```

> Before applying 7i, confirm this `old_string` is the end of `onAccountChange()` (≈ line 923-927). It should be unique in the file; if the Edit tool reports multiple matches, include the preceding line `    next.disabled = false;` in the `old_string`.

### 7j. JS — cap warning in Step 4

`old_string`:
```js
function updateSendSummary() {
  document.getElementById('sendAccLabel').textContent = state.selectedAccount.label;
  document.getElementById('sendCount').textContent = state.selectedRows.length;
}
```
`new_string`:
```js
function updateSendSummary() {
  if (!state.selectedAccount) return;
  document.getElementById('sendAccLabel').textContent = state.selectedAccount.label;
  document.getElementById('sendCount').textContent = state.selectedRows.length;

  // Warn only — never block. Gmail enforces ~limit sends per rolling 24h.
  const warn = document.getElementById('sendCapWarn');
  const email = state.selectedAccount.email;
  const u = usageState.byEmail[email];
  const used = u ? Number(u.sent24h) || 0 : 0;
  const batch = state.selectedRows.length;
  const after = used + batch;
  const limit = usageState.limit;
  if (u && u.tokenExpired) {
    warn.textContent = `⚠ The Google token for ${email} looks expired (last send failed with invalid_grant). Go back to Step 1, click "+ Add account" and sign in as ${email} before sending.`;
    warn.classList.remove('hidden');
  } else if (after > limit) {
    warn.textContent = `⚠ ${email} has already sent ${used} in the last 24h. This batch of ${batch} would take it to ${after} / ${limit} — Gmail will likely start rejecting sends partway through. Consider a smaller SNO range or a different account.`;
    warn.classList.remove('hidden');
  } else if (after >= limit * 0.8) {
    warn.textContent = `Heads up: after this batch ${email} will be at ${after} / ${limit} sends for the last 24h.`;
    warn.classList.remove('hidden');
  } else {
    warn.classList.add('hidden');
  }
}
```

### 7k. JS — track a fatal stop during sending

`old_string`:
```js
    let sentCount = 0;
    let failCount = 0;
    const total = state.selectedRows.length;
```
`new_string`:
```js
    let sentCount = 0;
    let failCount = 0;
    let fatalMsg = null;
    const total = state.selectedRows.length;
```

### 7l. JS — handle the `{fatal}` stream line

`old_string`:
```js
          if (r.info) {
            logLine('info', r.info);
            continue;
          }
```
`new_string`:
```js
          if (r.info) {
            logLine('info', r.info);
            continue;
          }

          if (r.fatal) {
            fatalMsg = r.fatal;
            logLine('fail', '⛔ ' + r.fatal);
            continue;
          }
```

### 7m. JS — final toast respects a fatal stop

`old_string`:
```js
    toast(`${sentCount} emails sent!`, 'success');
```
`new_string`:
```js
    if (fatalMsg) toast(fatalMsg, 'error');
    else toast(`${sentCount} emails sent!`, 'success');
```

### 7n. JS — refresh usage after every send attempt (success, error or terminate)

`old_string`:
```js
  } finally {
    currentAbortController = null;
  }
}
```
`new_string`:
```js
  } finally {
    currentAbortController = null;
    loadUsage();
  }
}
```

> Before applying 7n, check uniqueness: this `finally { currentAbortController = null; }` block is the end of `sendEmails()` (≈ line 1139-1142). If the Edit tool reports multiple matches, include the two preceding lines (`    sendBtn.disabled = false;` / `    backBtn.disabled = false;`) in the `old_string`.

---

## 8. Static checks (run after all edits, before starting the server)

PowerShell (repo root):

```powershell
node --check server.js; node --check db/usage.js; node --check db/accounts.js; node --check db/init.js; node --check lib/sendErrors.js
```
Expected: no output, exit code 0 for each.

Inline-script syntax check:
```powershell
node -e "const fs=require('fs');const h=fs.readFileSync('public/index.html','utf-8');const m=h.match(/<script>([\s\S]*?)<\/script>/);new Function(m[1]);console.log('inline script OK',m[1].length)"
```
Expected: `inline script OK <number>`.

Error classifier unit test:
```powershell
node -e "const {classifySendError:c}=require('./lib/sendErrors');const t=[[{message:'invalid_grant',response:{data:{error:'invalid_grant',error_description:'Token has been expired or revoked.'}}},'invalid_grant'],[{code:429,message:'Too many'},'rate_limit'],[{code:403,message:'x',errors:[{reason:'dailyLimitExceeded'}]},'rate_limit'],[{code:400,message:'Invalid To header'},'other'],[null,'other']];let ok=true;for(const [e,want] of t){const got=c(e);if(got!==want){ok=false;console.log('FAIL',JSON.stringify(e),got,'!=',want)}}console.log(ok?'ALL PASS':'FAILURES')"
```
Expected: `ALL PASS`.

---

## 9. Run locally

**WARNING — local `.env` points at the PRODUCTION Supabase database** (`DATABASE_URL=...pooler.supabase.com...`). Anything done locally affects the live app. In particular: **never click "Clear all tokens" or call `/api/accounts/clear-all` with the confirm flag during testing** — it deletes all 12 real sender tokens and revokes them at Google. Only the operator does that, deliberately.

1. Free port 3000 (an old server may still be running):
   ```powershell
   Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
   ```
2. Start the server in the background (Bash tool, `run_in_background: true`):
   `cd "C:/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/rys_email/rys_email_blaster" && node server.js`
   Then Read its output file. Expected: `✉  Email Blaster → http://localhost:3000` followed by the account list, and **no** `⚠ Could not reach the database` line.
3. Usage endpoint:
   ```bash
   curl -s http://localhost:3000/api/usage | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>{const j=JSON.parse(d);console.log('limit',j.limit,'accounts',j.accounts.length);j.accounts.forEach(a=>console.log(a.email,a.connected,'age_h',a.tokenAgeSeconds&&Math.round(a.tokenAgeSeconds/3600),'24h',a.sent24h,'/',a.failed24h,'all',a.totalCalls))})"
   ```
   Expected: `limit 500`, every connected account listed with `connected true`, numeric token age, zeros for counters (no sends recorded yet).
4. Seed fake usage for a throwaway address, verify, then clean up (does not touch real accounts):
   ```bash
   node -e "require('dotenv').config();const u=require('./db/usage');(async()=>{for(let i=0;i<3;i++)await u.recordSend({email:'usage-test@example.com',ok:true});await u.recordSend({email:'usage-test@example.com',ok:false,errorCode:'invalid_grant'});console.log('seeded');process.exit(0)})()"
   curl -s http://localhost:3000/api/usage | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>{console.log(JSON.parse(d).accounts.find(a=>a.email==='usage-test@example.com'))})"
   ```
   Expected object: `connected: false, sent24h: 3, failed24h: 1, totalCalls: 4, totalOk: 3, totalFailed: 1, tokenExpired: false` (false because it's not connected), `lastCallAgeSeconds` a small number.
   Cleanup (mandatory):
   ```bash
   node -e "require('dotenv').config();const {query}=require('./db/pool');(async()=>{await query(\"DELETE FROM send_log WHERE email = ?\",['usage-test@example.com']);await query(\"DELETE FROM send_totals WHERE email = ?\",['usage-test@example.com']);console.log('cleaned');process.exit(0)})()"
   ```
5. Clear-all guard tests (safe — none of these delete anything):
   ```bash
   curl -s -w " HTTP:%{http_code}\n" -X POST http://localhost:3000/api/accounts/clear-all -H "Content-Type: application/json" -d "{}"
   curl -s -w " HTTP:%{http_code}\n" -X POST http://localhost:3000/api/accounts/clear-all -H "Content-Type: application/json" -d "{\"confirm\":\"yes\"}"
   ```
   Expected both: `{"error":"Missing confirmation"} HTTP:400`.
6. OAuth start sends the account chooser:
   ```bash
   curl -s -o /dev/null -w "%{redirect_url}\n" http://localhost:3000/api/oauth/start
   ```
   Expected: the Google URL contains `prompt=consent%20select_account` (or `consent+select_account`).
7. Hand off to the operator for a browser check at http://localhost:3000 (Step 1): the "Clear all tokens" button sits left of "+ Add account"; the "Gmail API Usage" panel sits directly under the Message Template with one row per account; clicking "↻ Refresh" reloads it; selecting an account in the dropdown outlines its row in purple. **Tell the operator not to press "Clear all tokens" unless they actually intend to wipe production tokens.** Optional real test: send a 1-row batch to their own address and confirm that account's "24h sent" becomes 1 and "All-time" increments.

---

## 10. Commit and deploy

Only after the operator confirms the local check.

```bash
cd "C:/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/rys_email/rys_email_blaster"
git status --short
git add server.js public/index.html db/accounts.js db/init.js db/schema.sql db/usage.js lib/sendErrors.js
git status --short
```
`git status` after `add` must show exactly those 7 files staged (`M`/`A`). The CSVs, `sample csv`, icons, `mail body.txt` must stay untracked — never stage them.

Commit (HEREDOC; end with the `Co-Authored-By:` line from **your own** system reminder):
```bash
git commit -m "$(cat <<'EOF'
Add per-account Gmail usage counters and a "Clear all tokens" button

Step 1 now shows, for every sender email, gmail.send calls in the rolling
24h window (vs Gmail's ~500/day limit) and all-time, plus token age and an
"expired" flag when the last send failed with invalid_grant. Step 4 warns
when a batch would exceed the limit; sending is never blocked.

"Clear all tokens" (two-click confirm) revokes and deletes every stored
refresh token so all senders can sign in fresh. Usage history is kept.

Also fixes why re-login didn't replace stale tokens: the OAuth flow now
forces Google's account chooser (prompt=select_account), the upsert stamps
updated_at, and /api/send stops a batch on the first invalid_grant instead
of failing every remaining row.

Co-Authored-By: <copy from your system reminder>
EOF
)"
git push origin main
```
If `git push` is rejected (remote has new commits): `git pull --rebase origin main`, re-run the static checks from §8, then push again. Never force-push.

Render auto-deploys from `main`. Verify the deploy (wait ~2-4 min; free instances also cold-start):
```bash
curl -s -w " HTTP:%{http_code}\n" https://rys-email-blaster.onrender.com/api/usage | head -c 400
```
Before the new code is live this returns `Cannot GET /api/usage ... HTTP:404`; after, it returns JSON starting with `{"limit":500,"accounts":[`. Re-run every ~60s until it does (max ~10 min; if still 404 after that, report it to the operator — the Render build may have failed and they should check the Render dashboard logs).

Stop the local server afterwards (§9 step 1 command).

---

## 11. Troubleshooting (known failure modes → fix)

| Symptom | Cause | Fix |
|---|---|---|
| `EADDRINUSE :::3000` on start | old node process | run §9 step 1 |
| `/api/usage` → 500 `relation "send_log" does not exist` | request hit before `ensureSchema()` finished, or boot DDL failed | wait 3s and retry; if persistent, read the server log for the DDL error |
| Usage numbers show as `NaN` or concatenated strings | a numeric field not wrapped in `Number()` | every numeric field in §6d and §7e is already wrapped — re-check the pasted code matches exactly |
| Edit tool: `old_string` not found | file drifted or whitespace differs | Read the surrounding ~30 lines, copy the exact current text into `old_string` |
| Edit tool: multiple matches | anchor not unique | extend `old_string` with 1-2 neighboring lines (notes in 7i/7n) |
| `node --check server.js` reports unexpected `}` | 6f edits misapplied (the `try {` from 6f-2 or `} finally {` from 6f-4 missing) | Read `/api/send` handler; there must be exactly one `try {` right after the `ACTIVE_JOBS[jobId] = …` block and one `} finally {` right after the `for` loop's closing `}` |
| `curl -F` / file paths fail on Windows | git-bash `/tmp` mapping | use the session scratchpad directory for any temp file |
| Clear-all returns 409 | a batch is running (or a crashed one before this fix) | terminate the batch; after this fix entries are always removed in `finally` |
| Revoke count lower than cleared count | tokens already expired at Google (revoke of a dead token fails) | expected and harmless — rows are deleted regardless |

---

## 12. Operator follow-up (manual — the executor must NOT do this)

The weekly expiry is caused by the Google Cloud OAuth consent screen being in **Testing** mode (refresh tokens expire after 7 days). The "Clear all tokens" button makes the weekly reset painless, but the root fix is in Google Cloud Console → project `rys-email-blaster` → **Google Auth Platform → Audience → Publishing status → "Publish app"** (moves it to "In production"). Trade-offs to know before doing it: `gmail.send` is a sensitive scope, so until Google verifies the app every sender sees a "Google hasn't verified this app" screen (Advanced → Go to …) on login, and unverified production apps are capped at 100 users — but refresh tokens no longer expire every 7 days. This is the operator's call; it requires no code change.

Also tell senders: when they click "+ Add account", Google will now always show the account chooser — they must pick **their own sender address**, not whatever account the shared browser is logged into.
