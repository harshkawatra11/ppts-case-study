# Hisaab — build plan (app, deployment, README, HackerVilla deck)

## Context

HackerVilla Nainital 2026, Razorpay **Track 04 — AI Finance Controller**. The track's stated
bar: *"closes one finance-ops loop across a 50+ record batch of synthetic data, reporting its
match rate and the exceptions it could not resolve. Throughput plus measured accuracy plus an
honest exception list. One cherry-picked match proves nothing."*

The decision is already locked in `nsut-innovators-court/razorpay/HACKVILLA-NAINITAL-2026-RESEARCH.md`
§9: one product covering all four example directions (multi-source reconciliation, settlement
Q&A, forward cash forecaster, tax-line matcher) unified by a voice layer, aimed at the informal
retail ledger (the OkCredit / Khatabook problem space) rather than the enterprise back office.

Four deliverables, in order:

1. A Next.js + TypeScript + shadcn/ui app in `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\fintech`
   (that folder **is** the repo root, no subfolder).
2. Deployment to GitHub, Vercel, and Firebase/GCP, all via CLI, all commits as `harshkawatra11`.
3. A README modelled on the Adhikaar README (mermaid mindmap, architecture graph, sequence
   diagram, technology-cards table, measured-evaluation table).
4. **The defining deliverable:** an 8-slide consulting-grade deck built natively in Figma Slides
   using this folder's `deck-system/` kit and the CLAUDE.md density doctrine.

### Decisions locked with the user

| Decision | Locked value |
|---|---|
| Product name | **Hisaab** (हिसाब, accounts / reckoning) |
| Backend | All-TypeScript, one Next.js app. **Firestore** store with a local JSON fallback |
| Deck palette | Retint to fintech ink; every structural rule from CLAUDE.md §2 unchanged |
| Deck length | 8 slides: Cover, Problem, Solution, How It Works, Tech Stack, Feasibility, Impact & Scope, Thank You |

### Two standing rules that override everything

- **No em dashes anywhere.** Not in code comments, UI copy, README, commit messages, or a single
  slide. Use a comma, a full stop, or a colon. Same rule for AI-slop phrasing: no "in today's
  fast-paced world", no "unlock the power of", no rhetorical hooks (those belong in speeches, not
  decks), no "it's not just X, it's Y" constructions.
- **The deck must never disclose that the app exists.** No screenshots, no GitHub or Vercel link,
  no filenames, no `.ts` references, no "our prototype". The user gave a softer version of this
  earlier and then an emphatic final version. The emphatic one governs: the deck is pure idea.
  The Feasibility slide argues buildability prospectively ("this is buildable in a villa night,
  here is why, here is what it costs"), never retrospectively. The prototype exists only to make
  the team confident the claims are true.

---

# PART A — The application

## A-state. What is already built (verified on disk, 60 tests passing)

Build started before this revision. Do not redo any of it. Current state in
`C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\fintech`:

| Done | Files |
|---|---|
| Next.js 16 + TS + Tailwind 4 + shadcn (26 components, radix base, nova preset) | `src/components/ui/*` |
| Scripts, vitest config (`vitest.config.mts`), package renamed to `hisaab` | `package.json` |
| Money layer, paise integers, Indian grouping, GST split | `src/lib/money.ts` + 10 tests |
| Domain types, all entities | `src/lib/types.ts` |
| Ids, IST date helpers | `src/lib/ids.ts` |
| Store router + Firestore store + file store + write rate limiter | `src/lib/store.ts`, `src/lib/store/*`, `src/lib/firestore/*` + 4 tests |
| Double-entry poster, debits equal credits asserted | `src/lib/engine/posting.ts` + 8 tests |
| Khata, FIFO settlement, aging buckets | `src/lib/engine/khata.ts` + 6 tests |
| GST summary and invoice tax check | `src/lib/engine/tax.ts` + 5 tests |
| P&L with weighted-average COGS | `src/lib/engine/pnl.ts` + 3 tests |
| Normalization, four signals, three-layer matcher with the AI confidence clamp | `src/lib/recon/{normalize,signals,match}.ts` + 20 tests |
| Greedy one-to-one assignment | `src/lib/recon/assign.ts` + 4 tests |
| Exception builder, report with precision/recall/F1, run orchestrator | `src/lib/recon/{exceptions,report,run}.ts` |

**Still to build:** `engine/forecast.ts`, `engine/inventory.ts`, the seed generator, the agent
layer, the Gemini Live layer, `limits/budget.ts`, `lib/owner.ts`, the entire frontend (A9), the
eval harness, deployment, README, deck.

## A0. Repo scaffold (done, kept for reference)

Target: `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\fintech` (currently empty).

```bash
cd "/c/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/fintech"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --no-git
npx shadcn@latest init
npx shadcn@latest add button card table tabs badge drawer sheet dialog input label select \
  separator scroll-area tooltip skeleton sonner chart progress alert avatar command popover \
  dropdown-menu accordion
npm i @google/genai firebase firebase-admin zod nanoid date-fns clsx recharts lucide-react
npm i -D vitest @vitest/ui tsx @types/node
```

`package.json` scripts (copy the Adhikaar pattern at
`WEB-DEV-PROJECTS/adhikaar/package.json`):

```json
"dev": "next dev", "build": "next build", "start": "next start",
"lint": "eslint", "typecheck": "tsc --noEmit",
"test": "vitest run", "test:watch": "vitest",
"seed": "tsx scripts/generate-dataset.ts",
"eval": "tsx eval/run.ts",
"verify": "npm run lint && npm run typecheck && npm run test && npm run build"
```

Directory layout:

```
src/
  app/
    page.tsx                       THE master dashboard (Control), not a landing page
    reconcile/page.tsx             sub-dashboard 1
    khata/page.tsx                 sub-dashboard 2, master and detail on one screen
    books/page.tsx                 sub-dashboard 3, forecast + GST + P&L
    api/voice/token/route.ts       mints Gemini ephemeral token
    api/agent/tool/route.ts        executes one tool call against the engine
    api/chat/route.ts              text fallback for the same tools
    api/reconcile/run/route.ts     kicks a reconciliation run
  components/
    voice/                         VoiceButton, VoiceDock, TranscriptPanel, ToolTrace
    recon/                         SplitLedgerTable, MatchRow, AuditDrawer, SignalBars
    khata/                         PartyList, PartyLedger, AgingBar
    charts/                        CashFlowChart, MatchDonut, ExceptionBar, ForecastChart,
                                   IngestionBars, AgingStack, GstBars, InOutBars
    kpi/                           KpiTile, KpiStrip
    shell/                         AppSidebar, MethodologySheet, CommandMenu
  lib/
    owner.ts                       DEMO_OWNER_UID, the seam real auth slots into later
    money.ts                       paise integers, formatting
    types.ts                       every shared type
    store.ts                       the single import surface (router)
    store/{types,firestoreStore,fileStore}.ts
    engine/{ledger,posting,inventory,khata,tax,pnl,forecast}.ts
    recon/{normalize,signals,match,assign,exceptions,report}.ts
    agent/{tools,dispatch,systemPrompt,textChat}.ts
    gemini/{client,live}.ts
    seed/{generator,defects,groundTruth}.ts
scripts/generate-dataset.ts
eval/run.ts
public/worklets/pcm-recorder.js
```

## A1. Money and identity rules (write these first, everything depends on them)

`src/lib/money.ts`:

- **All money is `number` in paise, integer only. Floats are banned in the domain layer.**
  A single rounding drift in a reconciliation demo is fatal on stage.
- `paise(rupees: number): number`, `formatINR(paise: number): string` producing Indian
  grouping (`₹1,42,800.00`), `formatCompactINR` for `₹1.43L` / `₹84.3K` on KPI tiles.
- `splitGst(totalPaise, ratePct)` returns `{ basePaise, cgstPaise, sgstPaise }` with the
  remainder pushed into `basePaise` so the three always sum exactly to total.

Every entity id is `nanoid(12)` prefixed by type: `txn_`, `ext_`, `mch_`, `exc_`, `pty_`, `prd_`.
Every transaction carries an immutable `eventId` so a re-run of reconciliation is idempotent.

## A2. Domain model (`src/lib/types.ts`)

Firestore collections, all documents carrying `ownerUid` and scoped at the store layer the way
`adhikaar/src/lib/store.ts` does it (read that file before writing this one, the ownership-check
pattern transfers directly).

```ts
type PartyKind = "customer" | "supplier";
type TxnType = "purchase" | "cash_sale" | "credit_sale" | "payment_in" | "payment_out" | "expense";
type Source  = "voice" | "pos" | "bank" | "upi" | "invoice" | "manual";
type Account = "CASH" | "BANK" | "RECEIVABLE" | "PAYABLE" | "SALES" | "PURCHASES"
             | "GST_INPUT" | "GST_OUTPUT" | "INVENTORY";

interface Party      { id; ownerUid; kind: PartyKind; name; normalizedName; phone?; creditLimitPaise?; createdAt }
interface Product    { id; ownerUid; name; normalizedName; unit: "packet"|"kg"|"litre"|"piece";
                       unitPricePaise; gstRatePct: 0|5|12|18|28; stockQty }
interface TxnItem    { productId; productName; qty; unitPricePaise; lineTotalPaise; gstRatePct }
interface Transaction{ id; ownerUid; eventId; date: string /* ISO date, IST day */;
                       type: TxnType; source: Source; partyId?; partyNameRaw?;
                       amountPaise; taxPaise; reference?; items: TxnItem[];
                       status: "open"|"settled"|"void"; note?; createdAt }
interface LedgerEntry{ id; ownerUid; transactionId; date; account: Account;
                       debitPaise; creditPaise; memo }
interface ExternalRecord { id; ownerUid; source: "bank"|"upi"|"invoice";
                       date; narration; counterpartyRaw; amountPaise;
                       reference?; feePaise?; taxPaise?; direction: "credit"|"debit" }
interface MatchSignals { amountSim; dateSim; nameSim; refSim: number|null; daysApart; deltaPaise }
interface Match      { id; ownerUid; internalTxnId; externalRecordId; confidence: number;
                       signals: MatchSignals; decision: "MATCHED"|"REVIEW"|"EXCEPTION";
                       method: "exact"|"fuzzy"|"ai"; reason: string; runId; createdAt }
interface Exception  { id; ownerUid; runId; kind: ExceptionKind; severity: "high"|"medium"|"low";
                       subjectIds: string[]; amountPaise?; explanation; recommendedAction;
                       status: "open"|"reviewed"|"resolved" }

type ExceptionKind =
  | "UNMATCHED_LEDGER_ENTRY" | "UNMATCHED_BANK_CREDIT" | "UNMATCHED_BANK_DEBIT"
  | "AMOUNT_MISMATCH" | "DUPLICATE_SUSPECTED" | "MISSING_INVOICE"
  | "UNKNOWN_COUNTERPARTY" | "GST_MISMATCH" | "SPLIT_PAYMENT_SUSPECTED" | "DATE_OUT_OF_WINDOW";
```

## A3. Store layer

Copy the exact router shape from `adhikaar/src/lib/store.ts`: one `src/lib/store.ts` that every
route, action and page imports from, selecting between `firestoreStore` and `fileStore` on
whether `FIREBASE_PROJECT_ID` / `FIREBASE_CLIENT_EMAIL` / `FIREBASE_PRIVATE_KEY` are present.
`fileStore` writes to `.data/hisaab.json` locally and `/tmp` on Vercel (Adhikaar's
`src/lib/store/fileStore.ts` already solves the Vercel read-only-bundle problem, reuse that code
almost verbatim).

Why this matters for the demo: **the whole product runs with `npm install && npm run dev` and no
cloud account at all.** That is a claim the README makes and a judge can verify in thirty seconds.

Also port `adhikaar/src/lib/firestore/rateLimit.ts` (30 writes/min/instance) unchanged. It is a
free backstop against a scripted loop burning the free tier during a demo.

## A4. The deterministic finance engine (`src/lib/engine/`)

**The single most important architectural rule in this product, and the one the deck argues:
the model never computes money.** Every rupee is produced by the code below. The model
understands speech, chooses a tool, and reads back numbers the engine already computed.

`posting.ts` — the double-entry poster. One exported function per event type, each returning
`{ transaction, ledgerEntries, effects }`:

| Event | Debit | Credit |
|---|---|---|
| `postPurchase` (on credit) | INVENTORY + GST_INPUT | PAYABLE |
| `postPurchase` (cash) | INVENTORY + GST_INPUT | CASH |
| `postCashSale` | CASH | SALES + GST_OUTPUT |
| `postCreditSale` | RECEIVABLE | SALES + GST_OUTPUT |
| `postPaymentIn` | CASH or BANK | RECEIVABLE |
| `postPaymentOut` | PAYABLE | CASH or BANK |
| `postExpense` | PURCHASES | CASH or BANK |

Every posting function asserts `sum(debits) === sum(credits)` and throws if not. A unit test
asserts the invariant across the entire generated dataset. That assertion is the honest basis
for saying "the books balance", and it is a one-line answer to a judge asking how you know.

`inventory.ts` — applies item quantities, flags negative stock as a soft warning (never blocks a
posting, because a real shopkeeper's count drifts and refusing the entry would lose the event).

`khata.ts` — per-party outstanding, aging buckets (0-7 / 8-15 / 16-30 / 30+ days), the
chronological item-level statement, and FIFO settlement of a payment against oldest open credit
sales. `settlePayment(partyId, amountPaise)` returns which sales it consumed and the residual.

`tax.ts` — GST output from sales, GST input from purchases, net payable, and
`checkInvoiceTax(invoice)` comparing the invoice's declared CGST+SGST against the rate-derived
expectation, emitting a `GST_MISMATCH` exception when they differ by more than ₹1.

`pnl.ts` — revenue, COGS (weighted average cost), gross margin, expenses, net, for a date range.

`forecast.ts` — the forward cash forecaster. **Not an LLM, not Prophet. A transparent
recurrence model**, which is a strength to state, not a limitation to hide:
1. Detect recurring supplier purchases: group by (partyId, productId), compute the median
   inter-arrival gap in days and the median quantity. A pattern with 4+ observations and a gap
   standard deviation under 40% of the median becomes a `RecurringPattern`.
2. Project forward `horizonDays` by replaying each pattern at its median cadence.
3. Project receivable collections using each party's own historical median days-to-pay, not a
   global assumption.
4. Daily closing = opening + expected sales (trailing 14-day median daily sales) + expected
   collections − projected purchases − scheduled payables − recurring expenses.
5. Return `{ days: ForecastDay[], shortfallDate: string|null, shortfallPaise, drivers: {...} }`
   where `drivers` names the three largest contributors, so the answer is explainable.

This directly serves the user's stated example: a retailer restocks milk from the wholesaler on
a rhythm, the forecaster learns the rhythm from the transaction history rather than being told.

## A5. Synthetic dataset generator (`src/lib/seed/`, `scripts/generate-dataset.ts`)

Seeded `mulberry32` PRNG so the dataset is byte-identical on every run. Default seed `20260903`.

Shape: 60 days, 8 products, 14 customers, 5 suppliers, roughly **420 internal transactions,
390 bank statement lines, 150 UPI settlement rows, 60 supplier invoices**. Well past the track's
50-record floor, and enough that a match rate means something.

Defect injection, deliberately documented in the app's Methodology page and the README:

| Defect | Count | What it tests |
|---|---|---|
| Clean exact match | 300 | Baseline throughput |
| Counterparty name variation only | 40 | Fuzzy name matching |
| Bank posting lag, 1 to 4 days | 25 | Date tolerance |
| Settlement fee delta, ₹2 to ₹40 short | 20 | `AMOUNT_MISMATCH` detection |
| Duplicate record | 12 | `DUPLICATE_SUSPECTED` |
| Missing counterpart in bank | 10 | `UNMATCHED_LEDGER_ENTRY` |
| Unknown counterparty narration | 8 | `UNKNOWN_COUNTERPARTY` |
| GST declared wrong on invoice | 6 | Tax-line matcher |
| Split payment, one sale settled by two credits | 5 | **Expected to fail. Reported as a known limitation.** |

The generator writes a `groundTruth: Array<{internalTxnId, externalRecordId}>` file alongside the
data. **This is the thing that separates this submission from every other team's.** With ground
truth you can report precision, recall and F1, not just a self-graded "match rate". A match rate
alone can be gamed by matching nothing and calling everything an exception. Say that out loud in
the deck and the README.

## A6. Reconciliation engine (`src/lib/recon/`)

`normalize.ts`
- Dates to IST calendar day, `yyyy-MM-dd`.
- Names: uppercase, strip `PVT`, `LTD`, `LIMITED`, `PRIVATE`, `ENTERPRISES`, `TRADERS`, `& SONS`,
  strip UPI narration prefixes (`UPI/CR/`, `UPI/DR/`, `IMPS/`, `NEFT/`, `POS/`), strip digits
  when they are a reference block, collapse whitespace.
- References: uppercase alphanumeric only.

`signals.ts` — four pure, individually testable functions returning 0 to 1:
- `amountSim(a, b) = a === b ? 1 : max(0, 1 - |a-b| / max(a,b))`
- `dateSim(a, b) = max(0, 1 - daysApart / 7)`
- `nameSim(a, b)` — token-set similarity: split both into tokens, for each token in the shorter
  set take the best Levenshtein ratio against the longer set, average. Implement Levenshtein
  in-repo (about 20 lines), no dependency.
- `refSim(a, b)` — longest common substring length divided by the longer reference length.
  Returns `null` when either reference is absent.

`match.ts` — the three layers.

**Layer 1, exact.** Same normalized reference AND identical amount. Confidence `0.99`,
method `exact`. No model involved, no fuzzy math.

**Layer 2, weighted fuzzy.** Blocking first, or the run is O(n²) and slow on stage: bucket
candidates by amount rounded to the nearest ₹1 and by ±5 day window, union the two candidate
sets. Then score:

```
score = 0.40*amountSim + 0.20*dateSim + 0.25*nameSim + 0.15*refSim
```
When `refSim` is null, drop that term and rescale the other three to sum to 1. Bands:

| Band | Decision |
|---|---|
| `>= 0.90` | `MATCHED`, method `fuzzy` |
| `0.72` to `0.90` | `REVIEW`, sent to Layer 3 |
| `< 0.72` | Not a candidate |

**Layer 3, model reasoning, tightly caged.** Only `REVIEW`-band pairs go to Gemini, batched, with
structured output validated by a zod schema. The prompt hands the model **only the candidates the
deterministic layer already produced** and asks it to pick one or none, with reasoning.

Three hard constraints, all enforced in code, not in the prompt:
1. The model may only return an id that was in the candidate list. Anything else is discarded.
2. The model may not return an amount. The engine keeps its own.
3. **The model's confidence is clamped to a maximum of `0.89`, below the auto-post threshold.**
   Therefore *a model decision can never auto-post as MATCHED*. It always lands as `REVIEW` with
   its explanation attached, for a human to accept.

That third constraint is the deck's second contrarian beat and the honest answer to "the 2026
bottleneck is verification capacity, not generation speed". Everyone else will make the LLM the
engine. Hisaab makes it the interface and the explainer, and caps its authority in code.

`assign.ts` — one-to-one greedy assignment over scored pairs, descending by confidence, marking
each record consumed. State plainly in the README that this is greedy and not optimal
(Hungarian), and that greedy is chosen because it is explainable per pair, which matters more
here than the last fraction of a percent.

`exceptions.ts` — everything unmatched, plus matched-but-delta pairs, becomes a typed
`Exception` with a written `explanation` and `recommendedAction`. **Never silently force a
match.** Every exception is generated by deterministic code so the list is reproducible.

`report.ts` — computes and stores per run:
`totalInternal, totalExternal, matchedCount, reviewCount, exceptionCount, matchRatePct,
precision, recall, f1, totalVariancePaise, runtimeMs`, precision and recall measured against the
generator's ground truth.

## A7. The agent layer (`src/lib/agent/`)

`tools.ts` — eight function declarations shared by both the Live voice session and the text
chat fallback. Each has a zod schema for its arguments and a handler that calls the engine.

| Tool | Purpose |
|---|---|
| `record_business_events` | The big one. Accepts an array of typed events (`inventory_purchase`, `cash_sale`, `credit_sale`, `payment_received`, `payment_made`, `expense`), resolves party and product names fuzzily against existing records, posts each through `engine/posting.ts`, returns computed totals and new balances |
| `get_party_balance` | Outstanding, aging buckets, last 10 line items with dates and GST, for one named party |
| `get_cash_position` | Cash, bank, receivables, payables, net |
| `forecast_cash` | Runs `engine/forecast.ts` for a horizon, returns shortfall date and named drivers |
| `list_exceptions` | The honest list, filterable by kind |
| `explain_match` | Signal-by-signal breakdown for one transaction, including why it did not match |
| `get_pnl` | Revenue, COGS, gross margin, GST input and output, net, for a period |
| `focus_dashboard` | **Drives the screen.** Takes `{view, entityId?}` and pushes an event to the client so the UI opens the right panel while the agent is still speaking |

Every handler returns `{ ok, data, spokenSummary }` where `spokenSummary` is a sentence
**assembled by deterministic string templates from the computed numbers**, not by the model. The
system instruction then tells the model to speak the summary and never to state a figure that did
not come from a tool result.

`focus_dashboard` is what delivers the experience the user described: ask "how much udhaar does
Rekha have", and while the agent answers aloud, the Khata panel for Rekha opens on screen showing
every item, every date, the GST split and the aging bar. Voice and dashboard are one interaction,
not two features.

`systemPrompt.ts` — the operating contract, stated to the model in plain terms:
- You are Hisaab, a finance controller for a small Indian retailer.
- You never calculate money. Call a tool and read its `spokenSummary`.
- When the merchant describes a day's activity, decompose it into one or more typed events and
  call `record_business_events` once with all of them.
- Ask a clarifying question only when an amount, a quantity or a party is genuinely absent.
- Call `focus_dashboard` alongside any answer that has a screen equivalent.
- Speak in the merchant's language. Hinglish is normal and expected. Rupee amounts spoken in
  Indian units, "bara sau chalis" style, not "one thousand two hundred forty".

## A8. Gemini Live voice wiring

### A8.0 What this account actually has

Read off the user's own AI Studio quota page, so this is measured, not assumed. Four Live API
models are enabled, and **RPM and RPD are unlimited on all four. TPM is the only binding
constraint.**

| Model shown in console | Role in Hisaab | TPM ceiling |
|---|---|---|
| Gemini 3 Flash Live | Primary dialog agent, native audio in and out, tool calling | 150K |
| Gemini 2.5 Flash Native Audio Dialog | Fallback dialog agent, and the high-headroom option | **1M** |
| Gemini 3.5 Transcribe Live (`gemini-3.5-transcribe-live`) | Cheap transcribe-only path, feeds the text agent | 100K |
| Gemini 3.5 Live Translate (`gemini-3.5-live-translate-preview`) | Merchant-language mode, audio to audio | 100K |

Two consequences that shape the design:

1. **Unlimited RPM plus unlimited RPD means there is no reason to throttle how often a merchant
   talks.** Throttle only token throughput. A request-count limiter would be defending a limit
   that does not exist.
2. **Session memory re-bills at the standard input rate** (1 session-memory token = 1 input
   token). So TPM consumption *grows with session length*, not with session count. A single
   twenty-minute session is a bigger threat to the quota than twenty one-minute sessions. The
   limiter is therefore built around session duration and context size, which is the opposite of
   what a naive rate limiter would target.

Audio input bills at **25 tokens per second**. That is the constant every estimate below uses.
`countTokens` is not supported on Live models, so estimate with the constant and reconcile
against the `usageMetadata` the server returns on messages when it is present.

Having Transcribe Live and Live Translate available at unlimited RPM turns two things from
aspiration into designed capability: a genuinely multilingual merchant mode, and a cheap
degraded path that keeps the product alive when the dialog budget is spent.

### A8.1 Model chain and wiring

- Resolve exact model ids at build time by listing models against the real key rather than
  trusting a string from documentation. The console label "Gemini 3 Flash Live" maps to a
  preview id in the `gemini-3.x-flash-live-preview` family, and Google has already renamed one
  Live model once. Adhikaar hit exactly this class of failure with `gemini-2.5-flash`, which is
  why the chain exists at all.
- Dialog chain in order: resolved Gemini 3 Flash Live id, then
  `gemini-2.5-flash-native-audio-preview-12-2025`, then transcribe-only degradation (A8.2).
  Build the same `generateWithFallback`-style chain Adhikaar uses in `src/lib/gemini/client.ts`,
  moving to the next entry on any request-level failure, empty response, or `429`.
- **Ephemeral tokens, so the standing API key never reaches the browser.** Server side:
  ```ts
  const client = new GoogleGenAI({});
  const token = await client.authTokens.create({
    config: {
      uses: 1,
      expireTime: new Date(Date.now() + 30*60*1000).toISOString(),
      newSessionExpireTime: new Date(Date.now() + 60*1000).toISOString(),
    },
  });
  ```
  Ephemeral tokens work only against the Live API and only on `v1beta`. Client connects with
  `new GoogleGenAI({ apiKey: token.name })` then `ai.live.connect({ model, config, callbacks })`.
- Audio in: raw 16-bit PCM, little endian, mono, 16 kHz, mime `audio/pcm;rate=16000`.
  Audio out: raw 16-bit PCM at **24 kHz** (different rate, use two AudioContexts).
- Config: `responseModalities: [Modality.AUDIO]`, `inputAudioTranscription: {}`,
  `outputAudioTranscription: {}`, `systemInstruction`, `tools: [{ functionDeclarations }]`.

`public/worklets/pcm-recorder.js` — an `AudioWorkletProcessor` that converts Float32 frames to
Int16 and posts them to the main thread in ~100 ms chunks. Do not use `ScriptProcessorNode`.

`src/lib/gemini/live.ts` + `src/components/voice/useLiveSession.ts` handle:
- Mic capture via `getUserMedia({ audio: { channelCount: 1, echoCancellation: true } })`.
- A playback queue on a 24 kHz `AudioContext`, buffers scheduled back to back. On an
  `interrupted` server message, flush the queue immediately so barge-in feels instant.
- `toolCall` messages: POST each call to `/api/agent/tool`, then reply with `sendToolResponse`.
  Tool execution stays server side, always. The browser never touches the ledger.
- Session resumption handles, so a dropped connection reconnects without losing context.
- Every tool call is rendered live in a `ToolTrace` strip under the transcript. A judge watching
  the demo sees `record_business_events → 3 events posted → ₹1,240 receivable created`. Showing
  the mechanism is worth more than hiding it.

### A8.2 Merchant-language mode (not an English product with translation bolted on)

The user's plan carries all four Live models with unlimited RPM and RPD, so multilingual is a
designed capability here, not a stretch goal. It is also the honest requirement: the person this
product is for does not narrate their day in English.

- **Default posture: speak whatever the merchant speaks.** Native-audio dialog models handle
  language selection natively and can switch mid-conversation without a separate translation
  step. Do not force a language picker as a gate. Offer one as an override only.
- **Hinglish is the expected default, not an edge case.** "Do packet doodh aaye Sharma Traders se,
  Rekha ne teen chips udhaar liye." The system instruction states this explicitly and gives
  worked examples, because a model told only "support Hindi" will over-correct into formal Hindi
  that no shopkeeper speaks.
- **Numbers are the failure point, so they are handled in code, not by the model.** Indian
  spoken quantities (`dhai` = 2.5, `sava` = 1.25, `paune` = 0.75, `derh` = 1.5, `bara sau` =
  1200, `lakh`, `crore`) get a deterministic normalizer in `src/lib/agent/numerals.ts` applied to
  tool arguments before posting, with its own test fixtures. A model that mishears `dhai kilo` as
  `2 kilo` writes a wrong ledger entry, and no amount of prompt engineering makes that safe.
- **`gemini-3.5-live-translate-preview` earns its place on a real use case**, not as a demo
  garnish: a Tamil-speaking retailer and a Hindi-speaking wholesaler settling a supply account.
  Each hears their own language, both sides post into one ledger. Wire it as a distinct
  "counterparty call" mode, separate from the single-merchant dialog mode.
- **Verify the actual demo language before the pitch.** The research doc in this folder already
  flags that platform-wide language counts and native-audio *voice* coverage are reported
  differently by different sources. Test the exact languages the demo will use, in the room, and
  never assert a language count on stage that has not been tried.

### A8.3 The rate limiter

The user asked for one explicitly. Because RPM and RPD are unlimited and only TPM binds, this is
a **token budget limiter with a degradation ladder**, not a request counter. Ported from and
sitting alongside Adhikaar's `src/lib/firestore/rateLimit.ts` pattern.

`src/lib/limits/budget.ts`:

- A per-model rolling 60-second token window, ceilinged at **70% of the account's real TPM**
  (105K of 150K for Gemini 3 Flash Live, 700K of 1M for the 2.5 native-audio fallback, 70K of
  100K for transcribe and translate). The 30% headroom absorbs the estimation error that comes
  from `countTokens` being unavailable on Live models.
- Accounting per active session: `25 tokens/second` for streamed input audio, the same constant
  for streamed output, plus the system instruction and tool declarations charged once at session
  open, plus **a growing session-memory term**, since memory re-bills at input rate. Reconcile
  the estimate against `usageMetadata` whenever the server sends it, and let the real figure
  overwrite the estimate.
- **Session duration caps, which is where the real protection lives:** soft warning to the user
  at 6 minutes, hard close at 8, with a one-click resume that opens a fresh session carrying a
  short deterministic summary of the ledger state rather than the full transcript. Enable the
  Live config's context-window compression so the re-billed memory stays bounded inside a
  session too.
- Per-user guards: one active Live session per user, a minimum 2-second gap between token mints
  to stop a retry loop, and a hard daily ceiling per user that exists purely as a bug backstop.

`/api/voice/token` consults the budget before minting. If the budget is exhausted it does not
error, it **degrades**, in this order:

1. Primary dialog model → 2. `gemini-2.5-flash-native-audio-preview-12-2025`, which carries the
   1M TPM headroom → 3. **transcribe-only mode**: `gemini-3.5-transcribe-live` streams speech to
   text, and the existing text agent does the reasoning and tool calling, so the merchant still
   talks and the ledger still posts, only the reply arrives as text instead of speech →
   4. typed input, the text chat path, which never depended on any of this.

Each rung is visible in the UI as a small honest status chip, `voice · full duplex`,
`voice · transcribe only`, `typed`, rather than a silent quality drop. **The product never dies
on stage**, and the ladder itself is a defensible engineering answer to a judge asking what
happens when the quota runs out.

Two more limiters, both cheap:
- Sliding-window per user on `/api/agent/tool` and `/api/chat`, guarding the text path.
- The ported Firestore write limiter at 30 writes per minute per instance, guarding the free
  tier against a scripted loop.

Test all three with fake clocks: budget exhaustion triggers the exact next rung, the duration cap
closes the session and the resume carries state, and the write limiter refuses the 31st write.

### A8.4 Text fallback

**Text fallback is mandatory.** `/api/chat` runs `generateContent` with the identical tool
declarations, driving a normal chat panel. If the venue wifi or the room noise kills the voice
demo, the whole product still demos. Build this before the voice path, not after. It is also the
bottom rung of the degradation ladder above, so it has to be genuinely good, not a stub.

## A9. Frontend: one dense master dashboard, three sub-dashboards, one voice button

### A9.0 The shape, decided

Four nav destinations total. Not nine routes. **One master dashboard carrying extreme content
density, then exactly three sub-dashboards** for the jobs that need their own working surface,
switched from buttons down the left sidebar. One voice button lives in that same sidebar, above
Settings, and is reachable from every screen.

| Nav item | Route | Job |
|---|---|---|
| **Control** | `/` | The master dashboard. Everything, at once, dense |
| Reconcile | `/reconcile` | The matching workbench and the exception list |
| Khata | `/khata` | Party credit, master and detail on one screen |
| Books | `/books` | Forecast, GST and P&L |

Three deliberate collapses from the earlier draft, each because a separate route was not earning
its place: the old `/exceptions` folds into `/reconcile` as a tab (an exception *is* a
reconciliation outcome, and splitting them made the reconcile screen look thinner than it is),
`/khata/[id]` becomes selection state inside `/khata` rather than a navigation, and `/forecast`
plus `/tax` merge into `/books` since both answer "what do the books say about money that has
not moved yet". `/methodology` stops being a route and becomes a slide-over sheet from the
sidebar footer, so it stays available to a judge without occupying a nav slot.

There is no marketing landing page. `/` is the dashboard. The deck carries the argument; the app
carries the product.

### A9.1 Design language

Dense, data-grade, ink on paper. Not a purple SaaS gradient. Echoes the deck without copying it.

- Ground `#FAFAF8`, ink `#0A0A0A`, indigo primary `#14306E`, ledger green `#1E7A5A` for matched
  and positive, rupee gold `#E8B33C` for review and watch, exception red `#D8453C`.
- Corner radius 2px maximum, echoing the deck's radius-0 doctrine. 1px ink hairlines on every
  panel and table cell rather than shadows. Panels sit edge to edge in a grid with a 1px gutter,
  so the screen reads as one instrument rather than a scatter of floating cards.
- **Every figure in `tabular-nums`.** JetBrains Mono for amounts and ids, Inter for body,
  a display face for headings. Columns of rupee figures that do not align vertically are the
  single fastest way to look amateur in a finance product.
- Charts via shadcn's `<ChartContainer>` (Recharts underneath, already installed).
  **Load the `dataviz` skill before writing the first chart**, and the `impeccable` skill before
  laying out the master dashboard grid. Density is the goal, clutter is the failure mode, and
  those two skills are what keep them apart.

### A9.2 The master dashboard, `/` (the screen that has to land)

This is the one the user asked to be genuinely heavy: a technical judge should look at it and
register immediately that there is a real system underneath. Target roughly **8 KPI tiles and
12 to 14 distinct data panels on one screen**, in a 12-column grid, zero dead space, no
decorative filler. Every number traces to the deterministic engine already built.

**Row 1, the KPI strip.** Eight tiles, each with a label, a large tabular numeral, a delta chip
against the prior period, and a micro-sparkline:
Cash position · Bank balance · Receivables (udhaar out) · Payables · Match rate · Open
exceptions · Net GST payable · 30-day net profit.

**Row 2.** Cash position line chart with the forecast continuing as a dashed extension and a
marked shortfall point (6 cols) · reconciliation donut, Matched / Review / Exception, with the
total in the centre and a precision / recall / F1 micro-table beside it (3 cols) · live exception
feed, severity dot, amount, kind chip (3 cols).

**Row 3.** Multi-source ingestion bars, one stacked bar per source (voice ledger, bank, UPI,
invoices) split into matched / review / exception, which is the Side A versus Side B idea from
the reference screenshots compressed into a summary (5 cols) · khata aging stacked bar across
the four buckets plus the top five debtors (4 cols) · today's activity feed of voice-captured
events (3 cols).

**Row 4.** Inflow versus outflow grouped bars across 14 days with a running balance line
(5 cols) · GST input versus output with net payable and the tax-exception count (4 cols) ·
detected recurring patterns, each with its cadence and next expected date, which is the
forecaster showing its working (3 cols).

**Row 5.** Recent matches table, full width, last twelve rows: transaction, counterparty, amount,
source, an inline confidence bar, decision chip, method chip. Row click opens the same audit
drawer `/reconcile` uses, so the component is written once.

### A9.3 The three sub-dashboards

**`/reconcile`.** A four-tile mini KPI strip (processed, match rate, total variance, open
exceptions), then the split Side A / Side B tables with a segmented status bar over each, exactly
the reference-screenshot pattern. Tabs: All · Matched · Review · Exceptions · Manually matched.
Row click opens the **audit drawer**: confidence ring, the four signal bars (amount, date, name,
reference) with their weights shown, the delta in rupees, the written reason, the recommended
action, and an Accept / Reject pair. On an exception, a **"Why didn't you match this?"** button
asks the agent and streams the explanation into the drawer, grounded in `explain_match`.

**`/khata`.** Master and detail on one screen, no navigation between them. Left: You'll get /
You'll give / Net balance tiles, search, and the party list with an aging chip per row. Right:
the selected party's full statement, item level, showing quantity, unit price, GST, date and a
running balance, plus the aging bar, that party's own median days-to-pay, and payment history.
A "Send reminder" control is present but clearly marked as not wired, since WhatsApp automation
is a stated Phase 2 item and pretending otherwise would be the exact dishonesty this project
argues against.

**`/books`.** Three stacked sections. Forecast: projected daily balance line over inflow and
outflow bars, a shortfall banner naming the date and the amount, the named drivers, and the
recurring-pattern table. Tax: GST input versus output, net payable, and the tax exception table
with expected versus recorded and the delta. P&L: revenue, COGS, gross margin, expenses, net,
with a period selector.

### A9.4 The sidebar and the one voice button

Fixed left rail, icon-only at narrow widths, expanding to about 240px. Top to bottom:

1. Brand mark: `Hisaab` with `हिसाब` beneath it.
2. The four nav buttons from A9.0, active state carried by a 2px indigo left edge.
3. Spacer.
4. **The voice button.** Visually the loudest control in the app: filled indigo, larger than the
   nav items, with a mic glyph. **One click starts listening.** Not press-and-hold, not a
   keyboard chord as the primary path (`⌘K` stays as a secondary shortcut). Click again, or say
   so, to stop.
5. A live status chip directly beneath it: `voice · full duplex`, `voice · transcribe only`, or
   `typed`, driven by the degradation ladder in A8.3 so the current capability is never a
   mystery.
6. Settings.
7. Methodology, which opens the honesty sheet.
8. An account slot showing `Prototype · no sign-in`, so a judge is not left wondering whether
   they missed a login.

**The voice experience itself** (this is the differentiator, so it gets built carefully):

- One click opens the Live session and the agent **speaks first**, with real context. On session
  open the client sends a deterministic primer assembled by engine code, not by the model:
  today's transaction count, the credit-sale count, cash position, and open exception count. So
  the opener is grounded, something like "Aaj barah sales hui hain, do udhaar par. Cash position
  chaurasi hazaar hai. Kya record karna hai?" It never invents an opening figure because it is
  reading numbers the engine handed it.
- A voice dock slides in from the right while the session is live, carrying: a listening-state
  waveform, the live input transcript, the agent's reply transcript, and the **tool trace strip**
  where each tool call appears as a chip with its result summary. Showing the mechanism is worth
  more than hiding it, and it is what makes a judge believe the ledger actually moved.
- Barge-in works: speaking over the agent flushes the playback queue immediately.
- `focus_dashboard` fires alongside spoken answers, so asking about Rekha's udhaar opens `/khata`
  with Rekha selected while the agent is still talking. Voice and screen are one interaction.

### A9.5 Authentication, deliberately deferred

**No login for the prototype.** A single `DEMO_OWNER_UID` constant in `src/lib/owner.ts` is the
owner for every store call. This costs nothing later because the store layer already takes
`ownerUid` on every read and write and checks it internally, so real auth is a change to one
function rather than to every call site. That seam is already built and tested. Say so in the
README's "what is not built" section rather than leaving it as an unexplained gap.

## A10. Tests and evaluation

Vitest, targeting roughly 90 to 120 real tests. Not coverage theatre, these specific things:

- `money.test.ts` — Indian grouping, GST split summing exactly to total, no float leakage.
- `posting.test.ts` — every event type debits equal credits; the invariant holds across the
  entire generated dataset.
- `signals.test.ts` — each of the four signal functions, fixtured pass and fail.
- `match.test.ts` — a fixture per injected defect class, asserting the decision the engine should
  reach. The split-payment fixture asserts it **fails**, and asserts it produces a
  `SPLIT_PAYMENT_SUSPECTED` exception rather than a wrong match.
- `assign.test.ts` — no external record is ever claimed twice.
- `khata.test.ts` — FIFO settlement, aging bucket boundaries at exactly 7, 15 and 30 days.
- `forecast.test.ts` — a synthetic weekly restock pattern is detected with the right cadence.
- `tax.test.ts` — a ₹50 GST mismatch is caught, a ₹0.50 rounding difference is not.
- `agent/tools.test.ts` — every tool handler against a fixed store, asserting `spokenSummary`
  contains the engine's number and the handler rejects malformed args.
- `agent/numerals.test.ts` — `dhai`, `sava`, `paune`, `derh`, `bara sau`, `lakh`, `crore` and
  their Devanagari forms resolve to the right quantity, and an unrecognised token is rejected
  rather than guessed.
- `limits/budget.test.ts` — with a fake clock: the rolling window ceilings at 70% of TPM, budget
  exhaustion selects the exact next rung of the ladder, the 8-minute cap closes the session, the
  resume carries deterministic ledger state, and the Firestore limiter refuses the 31st write.
- `gemini/client.test.ts` — the model fallback chain, mocked at the SDK boundary (port
  Adhikaar's version of this test).

`eval/run.ts` — runs the full reconciliation against the ground truth and prints a table:
records processed, matched, review, exceptions, **precision, recall, F1**, mean confidence on
correct matches vs incorrect ones, and runtime. This output is what the README's evaluation table
quotes, and it is the honest version of the track's "measured accuracy" requirement.

---

# PART B — Deployment

All CLI. `gh` is already authenticated as `harshkawatra11`. `vercel@54.13.0` and `gcloud` are
installed. Firebase tooling runs via `npx firebase-tools`.

1. `git init`, `.gitignore` covering `.env*.local`, `.data/`, `.next/`, service-account JSON.
2. Confirm identity before the first commit:
   `git config user.name "Harsh Kawatra"` and `git config user.email "harshkawatra11@gmail.com"`.
3. `gh repo create harshkawatra11/hisaab --public --source=. --remote=origin --push`.
   Public, so a judge can open it.
4. GCP and Firestore:
   ```bash
   gcloud projects create hisaab-app --name="Hisaab"
   gcloud config set project hisaab-app
   gcloud services enable firestore.googleapis.com
   gcloud firestore databases create --location=asia-south1
   gcloud iam service-accounts create hisaab-store
   gcloud projects add-iam-policy-binding hisaab-app \
     --member="serviceAccount:hisaab-store@hisaab-app.iam.gserviceaccount.com" \
     --role="roles/datastore.user"
   gcloud iam service-accounts keys create ./sa.json \
     --iam-account=hisaab-store@hisaab-app.iam.gserviceaccount.com
   ```
   Scope the service account to `roles/datastore.user` **only**, exactly as Adhikaar does, then
   delete `sa.json` from disk once the values are in Vercel. Set a GCP billing budget alert at
   ₹1 as the second safety layer.
5. `vercel link`, then `vercel env add` for `GEMINI_API_KEY`, `FIREBASE_PROJECT_ID`,
   `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, `SESSION_SECRET`, across production,
   preview and development.
6. `.github/workflows/ci.yml`: lint, then typecheck, then test, then `next build`, cheapest
   first. Do **not** add a standalone `tsc --noEmit` step ahead of the build if it proves flaky
   on a clean checkout, Adhikaar hit exactly that failure because Next generates ambient route
   types as a build side effect.
7. `vercel --prod`. Verify the live URL, then verify Firestore persistence across serverless
   instances with an independent `curl` against a different instance, the way the Adhikaar README
   documents. That verification is a README claim, so it has to actually be run.

Commit discipline: small, real commits with plain messages, no em dashes, and the Co-Authored-By
trailer. Never force-push `main`.

---

# PART C — The README

Model it directly on `adhikaar/README.md`, which is attached to this task as the reference. Same
sections, same order, Hisaab's content:

1. Centered header: name, one-line positioning, shields for live app, tests, license, Next.js,
   TypeScript, Firestore, Gemini, then an anchor nav row.
2. **"The claim this is built on"** — the sourced problem statement. The MSME credit gap of
   ₹20 to 25 lakh crore (U.K. Sinha RBI Expert Committee, June 2019); PM SVANidhi's 1.12 crore
   loans worth ₹17,800 crore to 75.5 lakh street vendors (MoHUA); 89% account ownership with 16%
   of accounts inactive (Global Findex 2025). Then the honest caveat, the way Adhikaar caveats
   its own register: these establish the size of the informal-credit economy, they are not a
   measurement of reconciliation error rates, and no public transaction-level Indian vendor
   dataset exists, which is why the data here is synthetic and the generator is documented.
3. **"One loop, not four separate tools"** — the four track directions as consequences of one
   ledger. Make the point structurally, not just in prose: the app is one master dashboard plus
   three working surfaces, because reconciliation, settlement Q&A, forecasting and tax are four
   views of one ledger rather than four products bolted together. A screenshot of the master
   dashboard carries this argument faster than a paragraph does.
4. **Mermaid mindmap** of the actual stack, grouped by what each library does in this codebase.
5. **Technology cards table** — every row tied to a real file path.
6. **Mermaid architecture graph** — voice and model layers drawn as a clearly separate,
   optional, dashed side branch feeding only understanding and explanation, never computation.
   This mirrors Adhikaar's anti-wrapper doctrine drawing and is the visual thesis of the repo.
7. **Mermaid sequence diagram** — the reconciliation moneyshot: spoken event, structured event,
   posting, bank record arrives, three-layer match, exception raised, agent explains.
8. **Testing and evaluation** — the real test count and the real precision/recall/F1 table from
   `npm run eval`. Publish the failures too, including the split-payment class, exactly as
   Adhikaar publishes its 56.4% classifier number. A system that only reports its successes is
   not trustworthy, and this one is asked to make money-adjacent decisions.
9. Running locally, zero-setup claim, then the optional Gemini and Firestore sections.
10. Deployment, CI/CD (both halves verified against a real failure, not assumed).
11. **"What this system decides, what it merely proposes"** table. The rule stated plainly:
    the model may listen, structure and explain. It may never compute or post. Add a short
    subsection on the token-budget limiter and the three-rung degradation ladder, with the real
    TPM ceilings and the reasoning that session length, not session count, is what burns a Live
    API quota. That paragraph is the kind of detail that reads as operational maturity.
12. What is covered and what is not: the simulation boundary. No live UPI rails, no NPCI
    membership, no Account Aggregator, no bank core write access. Synthetic data, documented
    generator. Not an accounting system of record and not tax advice. **State the deferred
    login plainly here** rather than leaving a judge to discover it: the prototype runs as a
    single demo merchant, and the reason it costs nothing to add real auth later is that the
    store layer already takes and checks `ownerUid` on every read and write, so authentication
    slots into one function instead of every call site. WhatsApp settlement reminders are named
    as Phase 2 and the button in the Khata screen says so on its face.
13. Apache 2.0.

Same writing rules as everything else: no em dashes, no hooks, no slop.

---

# PART E — README-only enrichment: name the backend-depth gap as roadmap, don't build it (NEW)

## Context, revised

Comparing `fintech/README.md` against `adhikaar/README.md` side by side: the two are already
structurally close (same mermaid mindmap / architecture graph / sequence diagram pattern,
technology cards, a decides-vs-proposes table, an honest evaluation section). What's thinner is
the **backend itself** — Adhikaar has more distinct engineered subsystems (a jurisdiction
classifier, an 18-rule legality linter, a cron-driven deadline sweep, real PDF generation, real
auth) than Hisaab currently does.

**Given a real deadline on other work, this gap is closed in the README only, as an honestly
labelled roadmap, not by writing new engine code.** No new `.ts` files, no new tests, no new
tools, no new UI this pass. This mirrors the exact move the current README already makes for
WhatsApp reminders ("named as Phase 2... the button says so on its face") — extend that same
honest-roadmap treatment to a couple more named future subsystems, rather than fabricating
capability that doesn't exist. **The PPT (Part D) is the active priority right now; this part is
lower priority and should only be picked up once Part D is done**, or skipped entirely if time
runs out — it does not block or gate the deck in either direction.

## E1. What to add to the README, as roadmap, not as done

Under "What is covered, and what is not" (or a new short "What's next" subsection right after
it), name two concrete, specific future subsystems, the same level of specificity Adhikaar uses
for things it also hasn't built, so the roadmap reads as engineered rather than aspirational:

- **Credit-risk scoring.** One sentence naming the actual signals a real version would use (aging
  profile, the party's own median days-to-pay, reconciliation exception load, tenure), and the
  actor it serves: a moneylender pricing risk on the ledger's own history instead of guessing.
  State plainly that this is not built: no `creditScore.ts` exists yet.
- **Deterministic settlement reminders.** One sentence naming what the "Send reminder" button in
  `/khata` would generate if wired: a templated message with the outstanding amount and the
  oldest unpaid item's age, composed by deterministic string templating the same way
  `spokenSummary` is elsewhere in the app, never by the model. State plainly that today the button
  is present but inert, exactly as the current README already says.

Do **not** add these to the mermaid mindmap, the architecture graph, the technology cards table,
or the "what this system decides" table — those describe what exists. A roadmap item belongs only
in prose, under a clearly labelled "not built yet" section, so the diagrams stay honest.

## E2. Same treatment in the deck (Part D below)

The Feasibility slide already has a `Next 30 days` cell in its 3-horizon strip. Add these same two
items there as named next-steps, phrased identically to how the README states them, so the deck
and the README agree with each other and neither overclaims. This costs nothing extra in the
Figma build since that slide and its horizon strip are already speced in D3 below; it is a content
substitution, not a new element.

## Execution note

This part is documentation only. No `npm run typecheck`, no new tests, no code. Do it after Part D
(the deck) is finished, or skip it if the deadline arrives first — record that decision rather
than leaving it silently undone.

---

# PART D — The HackerVilla deck — REBUILD FROM THE REFERENCES (supersedes all earlier Part D)

## Context: what went wrong, stated plainly

A first attempt built Cover, Exec Summary and Problem into Figma file `1a7smmRa02bzf8yd3eQH6S`.
The user rejected slides 2 and 3 outright. The criticism is correct and specific:

- **Not one chart, graph or mind map on any content slide.** Exec Summary was two columns of
  bullet text. Problem was three stat cards, a numbered list, a table and a three-leaf tree.
- **That is a PowerPoint template, not a consulting deck.** The four reference decks the user
  supplied carry two to four *real data visualisations per slide* plus schematics plus tables.
- The Cover was accepted ("great work"), with a note that the right-side diagram is thin.

The failure was never typography or palette. A direct inspection of reference deck
`J1YZbQfAXYN3xVzA3S4pCo` slide `3:4` returns **53 text nodes at only three sizes: 22pt body,
40pt KPI numeral, 44pt headline**. The 22pt floor was right all along. What was missing was
**content forms**: charts, funnels, timelines, before/after blocks, progress bars, schematics.

## D0. What the reference decks actually contain, measured

Six decks inspected, four read slide by slide. Every content slide runs **8 to 12 distinct
visual forms**. The recurring vocabulary, all of it drawn natively:

| Form | Seen in | What it is |
|---|---|---|
| Ribbon nav + page badge | all four | Tags with punch-holes and wires, active tag filled, `05 / 08` badge far right, ink wire from last tag to badge |
| Section chip | all four | Filled pill under the ribbon |
| Full-width statement band | SwasthyaGrid | One red or accent bar, white caps text, the slide's single hardest claim |
| Hour-by-hour timeline heatmap | KHELurja p2 | ~24 cells colour-coded by state, axis labels beneath, an in-chart annotation box overlaid on the peak region, legend sentence below |
| Vertical bar chart | KHELurja p2, p4, p5 | Real bars, value label above each, category label below, no axis chrome beyond a baseline |
| Line chart with two series | KHELurja p2 | Solid actual + dashed projection, dot markers, value callouts sitting on the points |
| Break-even chart | KHELurja p5 | Cost line horizontal, revenue line diagonal, dashed vertical marker at crossing, boxed in-chart callout |
| Donut with centre total | KHELurja p5 | Ring, centre numeral, legend list with swatch + label + value |
| Combo bars + line | KHELurja p5 | Bars for count, overlaid line for a second measure, both labelled |
| Narrowing funnel | KHELurja p4 | Three stacked bars of decreasing width, each labelled with a count and a qualifier |
| Numbered panel row | SwasthyaGrid p3 | Four outlined panels, numbered badge, heading, body, each with an *embedded* sub-element |
| Mini progress bars | SwasthyaGrid p3 | Labelled horizontal bars inside a panel, used for weights or scores |
| Formula callout | SwasthyaGrid p3, EY p6 | Tinted box stating the actual arithmetic |
| Before / After rows | SwasthyaGrid p3 | Row label, then a red-tagged BEFORE box and a green-tagged AFTER box |
| Symmetric stakeholder columns | KHELurja p4 | Five identical panels, coloured header, Needs / Lacks / Gets in three colours |
| Status chip strip | SwasthyaGrid p3 | Bottom row of tagged chips marking scope |
| Two-column mini table | all four | Compact, zebra rows, 22pt cells |

**Density target: 90 to 160 top-level nodes per content slide.** Slide 3 of the rejected build
hit 140 and was still rejected, which proves node count alone is not the test. **The real test
is form count: no content slide ships with fewer than eight distinct forms, and at least two of
them must be genuine data visualisations.**

## D1. Design system, locked

Palette switched to green and gold per the user's decision, matching the KHELurja and
SwasthyaGrid reference decks. Structure from `CLAUDE.md` §2 is unchanged: radius 0 everywhere,
2 to 2.5px ink strokes on every shape, layered sticker cards, 22pt content floor, 14pt sources.

```js
const C = {
  primary:     { r: 0.071, g: 0.412, b: 0.290 }, // #12694A deep green
  primaryDeep: { r: 0.039, g: 0.239, b: 0.169 }, // #0A3D2B
  accent:      { r: 0.957, g: 0.769, b: 0.188 }, // #F4C430 gold
  alert:       { r: 0.816, g: 0.196, b: 0.153 }, // #D03227 red
  tint:        { r: 0.749, g: 0.890, b: 0.816 }, // #BFE3D0 pale green
  ink:         { r: 0.039, g: 0.039, b: 0.039 }, // #0A0A0A
  surface:     { r: 0.937, g: 0.937, b: 0.937 }, // #EFEFEF
  surfaceAlt:  { r: 0.969, g: 0.969, b: 0.969 }, // #F7F7F7
  white:       { r: 1, g: 1, b: 1 },
};
```

Fonts, verified against the live file: Poppins `Bold` / `ExtraBold`, Inter `Semi Bold` / `Bold`.
Type scale, matching the reference exactly: **44pt headline, 40pt KPI numeral, 22pt everything
else, 14pt source line only.** Chart labels are 22pt, not smaller.

Ribbon: seven tags, `Exec Summary · Problem · Solution · How It Works · Tech Stack ·
Feasibility · Impact`, plus a page badge (`02 / 09`) at far right with an ink wire running to it.

## D2. Writing voice and the three bans, restated because they are absolute

Story first. Nine headlines read in order must carry the whole argument, in the voice of a person
explaining something to another person.

- **Zero em dashes.** Comma, colon, full stop.
- **No AI slop, no hooks.** No question headlines, no "imagine if", no "it's not just X, it's Y".
- **Never state or imply the product exists.** Everything is prospective. No "we built", no
  "our prototype", no "as implemented". Feasibility argues forward.
- **No filenames, no code identifiers, no links, no screenshots of the app.** Name capabilities,
  never artifacts. The user has flagged this twice.
- Status chips say `IN SCOPE` / `NEEDS A LICENCE` / `LATER`, never `BUILT`.

## D3. Slide-by-slide build spec, with every form named

Existing file `1a7smmRa02bzf8yd3eQH6S`, slides `3:2` through `3:11`. **Slides 2 and 3 get their
children cleared and rebuilt.** Every slide gets retinted to green.

### Slide 1, Cover (`3:2`) — keep the layout, retint, enrich the right side
Approved as built. Two changes only: retint navy to green, and replace the four-node hub with a
denser **two-sided ledger schematic**: a left stack labelled `WHAT THE SHOPKEEPER KNOWS` (three
outlined rows: udhaar given, cash taken, stock bought), a right stack labelled `WHAT THE BANK
KNOWS` (three rows: a credit, a narration, a settlement fee), a visible vertical gap between them
crossed by three dashed wires that do not connect, and a small caption `nothing reconciles these
two sides today`. Keep the title card, tagline, chips, team block and the SPEAK/CAPTURE/CHECK/
EXPLAIN flow strip. Target 55 to 70 nodes.

### Slide 2, Executive Summary (`3:4`) — rebuild
Headline: `Hisaab writes the side of the ledger that was never written, then checks it against
the bank.`
Forms, eight:
1. Ribbon (active 0) + page badge `02 / 09`.
2. Section chip `EXECUTIVE SUMMARY`.
3. Full-width **alert-red statement band**: `THE MODEL LISTENS AND EXPLAINS. THE ENGINE DECIDES
   AND POSTS. THAT LINE IS DRAWN IN CODE.`
4. Left panel `THE OBVIOUS READ` with three bullets, and **embedded inside it a two-bar chart**:
   MSME credit demand versus formal supply, from the U.K. Sinha Committee, with the gap between
   them annotated `₹20 to 25 lakh crore, and most of it is unrecorded, not unmatched`.
5. Right panel `HISAAB'S MOVE` with three bullets, and **embedded inside it the confidence-cap
   graphic**: a 0 to 1 track with a filled bar stopping at 0.89, a dashed ink line at 0.90, and
   the label `the model stops here, the engine posts past here`.
6. **Four numbered outcome chips** across the bottom: `CAPTURE by voice`, `POST double entry`,
   `MATCH in three layers`, `EXPLAIN every exception`.
7. **Before / After block**, three rows: cash position (a guess / known daily), udhaar (a
   notebook / a ledger), a bank credit (unrecognised / matched or explained).
8. Source line.

### Slide 3, Problem (`3:5`) — rebuild, the chart-heaviest slide
Headline: `75.5 lakh vendors run on credit that no system has ever seen.`
Forms, ten:
1. Ribbon (active 1) + page badge.
2. Section chip `THE PROBLEM`.
3. **Hour-by-hour counter timeline**, 14 cells from 7:00 to 21:00, colour-coded: green where a
   sale happens, gold where an udhaar sale happens, grey where the shop is shut, with an
   **in-chart red annotation box** over the busiest block reading `every udhaar sale here leaves
   no record a system can read`. Axis labels beneath, legend sentence below. Marked
   `illustrative, a single counter's day`.
4. Three **KPI hero cards**, 40pt numerals: `₹20 to 25L Cr`, `₹17,800 Cr`, `89% and 16%`.
5. **Bar chart, sourced**: Findex account ownership across waves, 2011 35%, 2014 53%, 2017 80%,
   2021 78%, 2025 89%, value label above each bar, with the 2025 bar carrying a red callout
   `but 16% of these accounts sit inactive`.
6. **Stacked comparison bar, sourced**: MSME credit demand against formal supply, showing the
   gap as the remainder, labelled to the U.K. Sinha Committee.
7. **Left rail** `WHY THE LOOP NEVER CLOSES`: four numbered steps.
8. **Five-actor table** `WHO IT HITS`.
9. **Issue tree**, root `THE BOOKS ARE WRONG` branching to missing capture, unmatched
   settlement, untracked tax, with one line under each naming who it costs.
10. Source line.

### Slide 4, Solution (`3:6`) — modelled directly on SwasthyaGrid slide 3
Headline: `One ledger, four loops. Write the missing side first, then reconcile it.`
Forms, nine:
1. Ribbon (active 2) + page badge, section chip `THE SOLUTION`.
2. Full-width **red statement band**: `THERE IS NOTHING TO RECONCILE UNTIL THE MISSING SIDE
   EXISTS. VOICE WRITES IT.`
3. **Four numbered panels**: `1 CAPTURE`, `2 POST`, `3 MATCH`, `4 EXPLAIN`. Each carries a
   heading, two lines of body, and an embedded sub-element: capture shows a spoken sentence in a
   tinted box, post shows the debit-equals-credit rule, match shows four mini weight bars,
   explain shows a sample exception line.
4. **Before / After block** `WHAT CHANGES FOR THE SHOPKEEPER`, three rows.
5. **Two-by-two grid** of the four loops: reconciliation, settlement Q&A, cash forecast, tax and
   P&L, each one line.
6. **Contrarian callout box**, gold, the thesis sentence.
7. **Status chip strip**: `IN SCOPE`, `IN SCOPE`, `NEEDS A LICENCE`, `LATER`.
8. Source line.

### Slide 5, How It Works (`3:7`)
Headline: `A three-layer match, and a line the model cannot cross.`
Forms, nine:
1. Ribbon (active 3) + badge, chip `HOW IT WORKS`.
2. **Six-node punch-hole process wire**: spoken event, structured event, deterministic posting,
   three-layer match, exception engine, explained answer.
3. **Confidence ladder**, four horizontal bars scaled to their thresholds, with a **dashed
   vertical marker at 0.90** carrying the bold in-chart callout `the model cannot cross this
   line`, and the 0.89 cap bar sitting visibly short of it.
4. **Signals table** with a mini progress bar per row: amount 40, date 20, name 25, reference 15.
5. **Formula callout box**, tinted.
6. **A worked example panel**, the storytelling beat: one spoken Hinglish sentence, the structured
   event it becomes, the entries posted, the bank line that arrives four days later short by ₹20,
   and the match at 94 percent with the fee raised as a variance rather than hidden.
7. **WHAT WE MEASURE band**: precision, recall and F1 against a ground-truth set, with the one
   line that a match rate alone can be gamed by matching nothing.
8. Source line.

### Slide 6, Tech Stack (`3:8`)
Headline: `Four layers, and the model sits in exactly one of them.`
Forms, nine: ribbon and chip; **four stacked architecture bands** with rails, Understanding drawn
dashed and lighter, Truth drawn solid with a heavy stroke; a **three-rung degradation ladder**;
the **decides-versus-proposes table**, six rows, two columns; a **language strip**; a **spoken
numeral box** showing dhai, sava, derh and bara sau resolving to numbers in code; a **capability
chip strip**; source line. Capability categories only, no artifacts named.

### Slide 7, Feasibility (`3:9`)
Headline: `Buildable at close to zero marginal cost, with the boundary stated upfront.`
Forms, nine: ribbon and chip; **three-horizon strip**; **cost-share segmented bar** with the
legend carrying the values, not the segments; **risk table**, five rows, each with a severity
mini-bar and a paired mitigation in a calmer colour; **gold simulation-boundary box** naming what
would need a licence; a **status chip strip**; source line.

### Slide 8, Impact and Scope (`3:10`)
Headline: `3,000 shops in year one is a plan, not a slice of a percentage.`
Forms, ten: ribbon and chip; **narrowing funnel**, three stacked bars of decreasing width,
13 million kirana stores, then 1,58,319 Udyam-registered kirana and retail MSMEs, then 3,000 in
year one, each labelled with its source and never a percentage of the one above; **three-year
rollout bar chart** with counts above each bar, marked as a target; **unit-economics table**,
roughly ₹100 a month, benchmarked to Indian SaaS comparables; **five-actor value table**;
**closing 40pt numeral** `3,000 shops, year one`; source line.

### Slide 9, Thank You (`3:11`)
Plain. Wordmark, हिसाब, thank you, `Harsh` and `Gursimran`. Nothing else.

## D4. Build mechanics

1. Paste one preamble into every script: the `C` block above, a `Promise.all` font load, and the
   helpers `addFrame`, `addRect`, `addEllipse`, `addText`, `addWireH`, `addDiagonalWire`,
   `addDashedRow`, `addLayeredCard`, `addChip`, `addBadge`, `buildRibbon`, `sectionChip`,
   `sourceLine`, `addTable`. Every helper appends to its parent before setting `x`/`y`, at every
   nesting level. Add new chart helpers to the same preamble: `addBarChart`, `addLineChart`,
   `addProgressBar`, `addTimelineStrip`, `addFunnel`, `addBeforeAfter`, `addStatusStrip`.
2. Clear slides `3:4` and `3:5` before rebuilding: iterate `slide.children` and remove.
3. Reserve the headline band. **Nothing may occupy y=170 to y=250 except the headline.**
4. Build in batches: [Cover retint + Exec Summary], [Problem], [Solution + How It Works],
   [Tech Stack + Feasibility], [Impact + Thank You]. Problem gets its own call because it is the
   chart-heaviest.
5. After every batch run the overlap / text-clip / out-of-bounds validator, then a **form-count
   check**: assert the slide carries at least eight named top-level groups. Ribbon punch-holes
   and layered-card back rectangles overlap by design, ignore those flags.
6. Screenshot every slide after its batch and read it. Do not proceed on an unread slide, which
   is exactly how the first attempt shipped two weak slides.
7. Radius-zero sweep and font-floor sweep across all nine slides at the end.
8. Final read-through for em dashes, product-existence claims, filenames and team names.

## D5. Verification

| What | How |
|---|---|
| Every content slide is chart-bearing | Screenshot each of slides 2 through 8, count distinct visual forms, confirm at least eight per slide and at least two genuine data visualisations |
| Density matches the references | Node-count script reports 90 to 160 top-level children on slides 2 through 8 |
| The headline is never obscured | Screenshot check that nothing overlaps the reserved y=170 to y=250 band |
| Palette switched cleanly | No navy `#14306E` remains anywhere in the file |
| Nothing claims the product exists | Grep the deck's text for "built", "prototype", "we made", filenames and URLs, all absent |
| Zero em dashes | Extract every text node's characters and search for the character, zero hits |
| Sourced numbers only | Every chart carries its source in the slide's source line, and no chart shows a figure absent from `HISAAB-DECK-CONTENT.md` |
| Team is right | Cover and Thank You read Harsh and Gursimran only |

---

# Execution order

Steps 1 and 2 are already complete, see A-state. Resume at step 3.

1. ~~App scaffold, money, types, store layer.~~ Done.
2. ~~Finance engine (posting, khata, tax, P&L) and the reconciliation core (normalize, signals,
   three-layer match, assign, exceptions, report, run). 60 tests passing.~~ Done.
3. `engine/forecast.ts` and `engine/inventory.ts`, with their tests.
4. Seed generator with ground truth, then `npm run seed`, then `eval/run.ts`. **Capture the real
   precision, recall and F1 here.** Everything downstream quotes these numbers, so they have to
   exist before the README or any claim about accuracy gets written.
5. `lib/owner.ts`, the agent tool layer, and the text chat path. Text before voice, always: it is
   the bottom rung of the degradation ladder and has to be genuinely good.
6. `limits/budget.ts`, then the Gemini Live layer and the voice dock.
7. The frontend: sidebar shell first, then the master dashboard (A9.2, the heavy one), then the
   three sub-dashboards. Load `dataviz` before the first chart and `impeccable` before the
   dashboard grid.
8. `npm run verify`, confirm the whole suite is green.
9. ~~README, using the real numbers from step 4.~~ Done.
10. ~~GitHub, GCP and Firestore, Vercel, CI. Verify the live deployment.~~ Done (GCP/Firestore
    provisioning skipped for time, app runs on the file-store fallback; can be added if asked).
11. ~~Deck content spec written to 9 slides.~~ Done. `HISAAB-DECK-CONTENT.md` now carries the
    Exec Summary slide, the 7-tag ribbon, the Harsh and Gursimran team block, and passes the
    no-em-dash and no-built-app checks. It still needs one edit before the build: add the chart
    specifications named in D3 (the counter timeline, the Findex bar chart, the demand-versus-
    supply bar, the confidence-cap graphic, the funnel, the rollout bars) so the content spec and
    the Figma build agree on exactly which figures appear in which chart.
12. **Figma deck rebuild, chart-first**, in the existing file `1a7smmRa02bzf8yd3eQH6S`. Retint to
    green and gold, keep and enrich the Cover, clear and rebuild slides 2 and 3, build 4 through
    9 fresh. Every content slide carries at least eight distinct visual forms and at least two
    real data visualisations, per D3. Screenshot and read every slide before moving on. **This is
    the active priority and the thing that has to land.**
13. *(Lower priority, only after step 12, or skipped if the deadline arrives first)* **README-only
    enrichment** per Part E1: add the credit-scoring and settlement-reminder items as a clearly
    labelled "not built yet" roadmap section. No code, no new tests, documentation only.

Steps 1 to 11 are complete. **Resume at step 12.** The first attempt at step 12 failed because it
shipped text-only slides without charts; D0 records what the reference decks actually contain and
D3 names the required form for every slide, so that failure is not repeatable by following it.

---

# Verification

| What | How |
|---|---|
| Books balance | `npm run test`, the debits-equal-credits invariant asserted across the full generated dataset |
| Reconciliation is honestly measured | `npm run eval` prints precision, recall and F1 against the generator's ground truth, not a self-graded match rate |
| Known failure is reported, not hidden | The split-payment fixture asserts the engine fails and raises `SPLIT_PAYMENT_SUSPECTED` |
| The model cannot post money | A test asserts every model-sourced confidence is clamped below the 0.90 auto-post threshold |
| Zero-setup claim is true | Fresh clone, `npm install && npm run dev`, no env file, product works on the file store |
| The master dashboard is genuinely dense | Screenshot `/` at 1440px and count: 8 KPI tiles and at least 12 data panels present, every one carrying real engine-derived numbers, no placeholder or filler panel, no dead space |
| Navigation is four items, not nine | The sidebar carries Control, Reconcile, Khata, Books and nothing else; methodology opens as a sheet, khata detail is selection state rather than a route |
| One click starts the agent talking | Click the sidebar voice button once, confirm the agent speaks first with a grounded opener whose figures match what the engine reports for that day |
| Voice path works | Live session records a multi-event spoken sentence, the tool trace shows the events posted, and the Khata panel opens on screen while the agent speaks |
| Merchant language works | The same multi-event sentence spoken in Hinglish and in Hindi posts identical ledger entries, including `dhai` and `derh` quantities |
| The ladder actually degrades | Force the budget to zero and confirm the session opens on the next rung, then on transcribe-only, then on typed, each with the right status chip and no thrown error |
| The limiter defends the quota | Fake-clock test proves the rolling window ceilings at 70% of TPM and the 8-minute cap closes the session with a working resume |
| Text fallback works | The same flow with the mic disabled, through `/api/chat` |
| Persistence is real | `curl` a record from a different serverless instance than the one that wrote it |
| CI gate is real | Push a branch with a deliberately failing assertion, confirm the pipeline fails and Build never runs, then delete it |
| Deck meets the bar | Screenshot all 9 slides in the new file, check each against its archetype, run the radius-0 and 22pt sweeps, confirm no slide references a built app, no em dash appears anywhere, and the team block reads Harsh · Gursimran on Cover and Thank You |
| Solution slide defect is actually fixed | Screenshot slide 4 specifically and confirm the headline text is fully visible with no diagram node overlapping it, per the D4 step-6 layout fix |
| Density actually matches the references | Run the D4 step-7a node-count script across all 9 slides; every content slide (3 to 8) reports 90 to 160 top-level children, in the measured band of the six reference decks in D0. A slide under 80 fails and gets its missing content form added |
| Every slide runs 4 to 6 distinct visual forms | Screenshot each content slide and check it against its row in the D3 rails-and-forms table; no slide repeats one form to fill space, and no slide has an empty region |
| README roadmap items are honest, not overclaimed | If Part E is reached, grep the README for "creditScore" and "reminders" and confirm neither resolves to a real file path in the repo, since the section describes them as not built |
