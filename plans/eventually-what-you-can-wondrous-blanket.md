# SETTLE — Execution Plan (PayPal AI Hackathon 2026)

> *Get paid what you're owed.* PROTECT the money before the work starts. RECOVER it when a client, employer or landlord doesn't pay.

This plan is written for Sonnet-class executor agents. It is meant to be followed **literally**. Where a value must be verified against live docs, the plan says **VERIFY** and names the URL. Do not invent APIs, statutes, or statistics. If a VERIFY fails, follow the stated fallback.

---

## 0. Context

**Why:** Harsh (solo entrant, India, Team name on Devpost: solo) is entering the PayPal AI Hackathon on Devpost (https://paypalaihackathon.devpost.com). The build window is 6 days (Mon 26 Oct to Sat 31 Oct 2026). The hard deadline is **Thu 12 Nov 2026, 12:00 PM Pacific** (= Fri 13 Nov 00:30 IST); the internal target is to submit by **Tue 10 Nov 2026**. No previous project contains PayPal code, so this is a **new repository**, which avoids the "significantly updated" requirement entirely.

**What we're building:** *Settle*, a web app for freelancers, gig and hourly workers, and tenants who are owed money.
- **PROTECT** (before work): the client funds a milestone through a PayPal **authorization**, so the money is held but not captured. The freelancer uploads the deliverable. An **AI acceptance check** (deterministic checks plus Gemini) grades it against the written acceptance criteria. On a pass, plus approval or silence through the review window, Settle **captures** the authorization and sends a **PayPal Payout** to the freelancer. A failure or dispute produces an evidence brief that feeds RECOVER.
- **RECOVER** (after non-payment): the claimant uploads evidence (chat screenshots, contract, timesheets, invoices, lease). Gemini extracts facts with citations to the evidence. A deterministic rule engine computes what is owed under the jurisdiction's statute. Gemini drafts a grounded demand letter (PDF) that can only cite rules from our curated dataset. Settle issues a **PayPal Invoice** (partial payments allowed) and a settlement portal link. A **Mediator agent** negotiates with the respondent, but only within the claimant's mandate (floor amount, maximum installments, maximum plan length, allowed concessions). An accepted plan becomes a series of PayPal invoices. The **Follow-up agent** runs on a Render cron: it sends reminders and walks an escalation ladder. Each payment received triggers an instant Payout to the claimant. If nothing is paid, Settle generates a small-claims packet.
- **Cross-border:** claims can be in USD, EUR or GBP, and payouts go to the claimant's PayPal account in any country (seed case: a freelancer in Pune owed by a California client).

**User decisions already made (do not re-ask):**
- Concept: Settle, PROTECT + RECOVER modes. Relief Runner and the Haat export desk are **dropped**; only Haat's cross-border flavour survives.
- AI provider: **Google Gemini** (the user has keys).
- Hosting: **Render Free plan** (sponsor prize eligibility). **Budget is $0: no paid plan on any service.** DB on Neon Free, scheduler on cron-job.org Free (§11.0). AG Grid is also used (largest sponsor prize pool). One project can win at most 1 sponsor prize plus 1 grand or honorable-mention prize.
- Solo entry; **Harsh narrates** the video.
- The user has **no PayPal sandbox app yet**, so §5.1 includes the setup steps.
- Video tools: HyperFrames (primary), Whisper, ffmpeg, Playwright capture. Reuse the existing pipelines listed in §16.
- Inspiration source: Hisaab (`C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\fintech`) for stack, design and eval patterns; Adhikaar (`...\WEB-DEV-PROJECTS\adhikaar`) for legal grounding and PDF patterns. See §3.4.

**Intended outcome:** a public GitHub repo (MIT license), a live Render URL with one-click demo logins, a demo video under 3:00 on YouTube, and a Devpost submission that targets: Grand Prize, *Best Use of PayPal + AI*, *Best Use of Agentic Commerce*, *Most Impactful*, *Best Demo Delivery*, and the sponsor prizes *Best Use of AG Grid* and *Best Use of Render*.

---

## 1. Winning thesis mapped to the judging criteria

All five criteria are equally weighted. Stage One is pass/fail: does it fit the theme and does it really use PayPal APIs? Every design decision below maps to a criterion.

| Criterion | How Settle scores | Proof shown in the demo |
|---|---|---|
| **Technological implementation** (PayPal + AI depth) | 8 PayPal surfaces: JS SDK v6, Orders v2 (CAPTURE and AUTHORIZE), Authorizations (capture, void, reauthorize), Invoicing v2 (create, send, remind, QR, partial payment, record payment, cancel), Payouts, Refunds, Webhooks with signature verification, Agent Toolkit (AI SDK). AI: multimodal evidence extraction, deterministic rule engine plus grounded drafting with citation validation, a mandate-bounded negotiation agent with tools, a follow-up agent, acceptance checking, AG Grid AI Toolkit. Eval harness with a gold set. | The live agent trace panel shows every tool call and every PayPal API id. Webhook events arrive live. |
| **Design** (complete product) | Two complete journeys (claimant and respondent) plus the PROTECT client journey. Polished, calm "legal paper" visual identity. Empty, loading and error states. Mobile-friendly respondent portal. | The video walks end to end with no "imagine this" moments. |
| **Potential impact** (specific audience) | Specific audiences: US freelancers (NY Freelance Isn't Free Act), CA hourly workers (wage and waiting-time penalties), CA tenants (deposits), cross-border freelancers. Numbers are VERIFIED in §17.1. | Ana's story: owed $2,400, 47 days late, paid within the video. |
| **Innovation** | First tool to put **legal leverage plus a payment rail plus a bounded negotiating agent** in one loop. PROTECT turns "AI acceptance tests" into a release condition for held funds. | The mediator agent negotiates a plan, and code refuses an out-of-mandate offer on screen. |
| **Presentation** | A 2:50 script with a clear problem, audience and why-now. Real product footage. Word-synced HyperFrames overlays. | §16. |

**Prize-specific hooks:**
- *Agentic Commerce:* the Mediator agent turns a conversation into money movement (creates invoice series, triggers payouts) under a signed, machine-checked mandate. The Follow-up agent acts autonomously on a schedule.
- *PayPal + AI:* the AI decides *what* is owed and *how* to settle; PayPal moves it. Neither works without the other.
- *AG Grid:* the Case Docket and Money Ledger are AG Grid Enterprise grids (grouping, master-detail, pivot, status renderers) with **AG Grid AI Toolkit** "Ask your docket" natural-language state control.
- *Render:* the production web service runs on Render Free, defined in `render.yaml` (Blueprint + one-click "Deploy to Render" button in the README), with a health check. It receives PayPal webhooks and runs the agent tick. Zero-cost design (§11.0). Optional stretch: Render Workflows, only if it has a free allowance (§11.4).

**Honesty guardrails (important for judges and for law):** Settle is **not a law firm** and gives no legal advice. Letters are sent *by the user*. Every legal statement links to the statute. Never use the phrase "AI lawyer" (the FTC acted against DoNotPay for that framing; VERIFY with a quick search and mention it in the README "Responsible design" section only if confirmed). Every rule shows a "verified on" date.

---

## 2. Product specification

### 2.1 Personas (all fictional; never use real company names)
- **Ana Ruiz**, freelance illustrator, Brooklyn NY. Claimant (RECOVER) and freelancer (PROTECT). Sandbox personal account `ana` (US).
- **Brightline Studio LLC** (contact: Tom Becker, NY). Respondent: owes Ana $2,400, 47 days past due. Sandbox personal account `brightline` (US, the payer).
- **Larkspur Bakery** (contact: June Park, NY). PROTECT client: funds a $600 logo milestone. Sandbox personal account `larkspur` (US).
- **Dev Mehta**, freelance developer, Pune, India. Seeded cross-border claimant owed $1,150 by "Cobalt Ridge Apps Inc." (CA). Sandbox personal account `dev` (country **IN**).
- **Marcus Hill**, line cook, Oakland CA. Seeded wage claim (final paycheck late, CA Labor Code §203).
- **Priya Shah**, tenant, San Jose CA. Seeded security-deposit claim (CA Civil Code §1950.5).
- **Settle (platform)**: sandbox **business** account `settle-platform` (US). It is the invoicer and merchant of record, and the sender of payouts.

### 2.2 Money-flow model (state this exactly in the README)
Settle's sandbox business account is the **collection account**. Invoices and orders are issued by Settle "on behalf of <claimant>". Each received payment is paid out to the claimant's PayPal account (email or PayPal ID) **immediately** through the Payouts API, minus a fee of $0. The production path (documented, not built) would be PayPal Commerce Platform multiparty, where the claimant is the merchant of record; mention this in the README "Production path" section. Rationale: claimants don't need a business account (financial inclusion), and one sandbox app demonstrates everything.

### 2.3 Journeys and screens

**Public**
1. `/`: landing page. Hero line: "Get paid what you're owed." Two cards: Protect, Recover. Buttons "Try the demo as Ana" (one-click demo login) and "Open the respondent view" (link to a seeded portal). "How it works" in 3 steps. Responsible-design note. Footer disclaimer.

**Claimant app (logged in as claimant)**
2. `/app`: home. KPI tiles (Owed, Recovered, In plan, Protected/held). Docket preview. "New claim" and "New protected milestone" buttons.
3. `/app/docket`: **AG Grid** Case Docket with "Ask your docket" (AG Grid AI Toolkit).
4. `/app/claims/new`: RECOVER intake wizard:
   - Step 1, *What happened?*: claim type (Freelance invoice / Unpaid wages / Security deposit / Other contract). Free text or **voice note** (MediaRecorder → Gemini transcription). Respondent name and email. Jurisdiction (state).
   - Step 2, *Evidence*: dropzone (PNG, JPG, PDF, TXT; ≤ 8 MB each, ≤ 10 files). Each file is analysed live and shows an "AI read" chip.
   - Step 3, *Facts*: AI-extracted fact list. Each fact has an evidence citation (file name plus quote) that is editable and confirmable. A gap checker lists "Missing: the agreed due date" with an "Add" action.
   - Step 4, *What you're owed*: rule-engine breakdown (principal, statutory damages, interest), each line linked to a rule card (statute, URL, verified-on date). A case-strength meter (AI, with reasons).
   - Step 5, *Your mandate*: settlement bounds (floor %, maximum installments, maximum days, allowed concessions such as "waive statutory damages if paid in full within 7 days"). Shown in plain words and as a signed JSON hash.
   - Step 6, *Letter*: AI-drafted demand letter preview (editable sections). A citation validator badge. Download PDF. "Send" creates the PayPal invoice, sends it, generates a QR code and activates the portal link.
5. `/app/claims/[id]`: claim room. Timeline (events from DB plus webhooks), PayPal panel (invoice status, payer-view link, QR, payments, payouts with ids), **Agent trace** (mediator and follow-up messages plus tool calls), escalation ladder progress, "Generate small-claims packet" button (enabled when the ladder reaches step 4 or manually).
6. `/app/protect/new`: PROTECT milestone wizard: client name and email, milestone title, amount and currency, acceptance criteria (AI helps rewrite them into **checkable criteria**, each tagged `deterministic` or `ai`), review window (hours), due date. Creates a funding link for the client.
7. `/app/protect/[id]`: milestone room. Funding status (authorized, amount, expiry), upload deliverable, **Acceptance report** (per-criterion pass/fail with evidence), release status (captured, payout id).
8. `/app/ledger`: **AG Grid** Money Ledger (every PayPal object: orders, authorizations, captures, invoices, payments, payouts, refunds) with master-detail raw JSON. Grouped by claim.

**Respondent portal (no login; unguessable token)**
9. `/r/[token]`: the respondent sees the letter, amount breakdown, rule cards and evidence summary (claimant-approved items only). Actions:
   - **Pay in full now** (JS SDK v6 PayPal button → Orders v2 CAPTURE).
   - **Pay the invoice** (link to the PayPal invoice payer view plus QR).
   - **Talk to the mediator**: a chat with the Mediator agent ("I can't pay all now").
   - **Dispute**: upload counter-evidence, then a neutral AI "issues list" goes to the claimant.

**PROTECT client portal (no login; token)**
10. `/p/[token]`: the client sees the milestone and acceptance criteria and clicks **Fund milestone** (JS SDK v6 → Orders v2 `intent: AUTHORIZE`; text: "You won't be charged until the work passes the agreed checks and you approve, or the review window ends"). After delivery: view the acceptance report, then **Approve and release** or **Contest** (requires a reason; the AI checks the reason against the criteria).

**Ops**
11. `/app/settings`: payout destination (PayPal email or PayPal ID; recipient type), default mandate, language.
12. `/api/health`: JSON `{ ok, db, paypal }` for the Render health check.

### 2.4 Claim state machine (single source of truth: `src/lib/claims/state.ts`)
```
DRAFT → READY (facts confirmed + letter validated)
READY → SENT (invoice sent)            [action: sendDemand]
SENT → NEGOTIATING (respondent opened chat)
SENT|NEGOTIATING → PLAN_ACTIVE (plan accepted → invoice series created)
SENT|NEGOTIATING|PLAN_ACTIVE → PARTIALLY_PAID (payment < total)
* → PAID (sum(payments) ≥ settlement total)       → payouts complete → CLOSED_PAID
SENT|PLAN_ACTIVE → ESCALATED (ladder step ≥ 3, no payment)
ESCALATED → PACKET_READY (small-claims packet generated)
* → DISPUTED (respondent dispute filed)  → back to NEGOTIATING or ESCALATED
* → WITHDRAWN (claimant cancels → PayPal cancel invoice)
```
Milestone state machine (`src/lib/protect/state.ts`):
```
DRAFT → AWAITING_FUNDS → FUNDED (authorization CREATED) → DELIVERED → CHECKED (report)
CHECKED(pass) → RELEASED (approve | window elapsed) → capture COMPLETED → PAID_OUT
CHECKED(fail) → REVISION_REQUESTED → DELIVERED ...
CHECKED(pass) + client CONTESTED → DISPUTED → (claimant may "Convert to claim" → RECOVER claim prefilled)
FUNDED → EXPIRED (auth expired/voided) ; any → CANCELLED (void authorization)
```
Every transition must go through `transition(entity, to, meta)`. It validates the edge, writes an `events` row and returns the new state. Illegal transitions throw.

---

## 3. Architecture

### 3.1 Diagram
```
Browser (Next.js 16 RSC + client islands)
  ├─ PayPal JS SDK v6 (sandbox)  ── approve popups
  ├─ AG Grid Enterprise + AI Toolkit ── /api/ai/grid-state
  └─ fetch → Next.js Route Handlers / Server Actions
                     │
  ┌──────────────────┴──────────────────────────────────────────────┐
  │ settle-web (Render Web Service, Node 22/24)                     │
  │  src/lib/paypal/*   REST client (OAuth cache, idempotency)      │
  │  src/lib/ai/*       AI SDK v6 + @ai-sdk/google (Gemini)         │
  │  src/lib/rules/*    curated statutes + deterministic calculators│
  │  src/lib/agents/*   mediator, follow-up, acceptance            │
  │  src/app/api/webhooks/paypal  verify → events → reconcile       │
  └──────────────────┬───────────────────────────┬──────────────────┘
                     │                           │
        Neon Postgres Free (Drizzle)    PayPal Sandbox REST
                     ▲                           ▲
  cron-job.org (free, */10) ──POST /api/cron/tick (CRON_SECRET)  (also keeps Render Free warm)
```

### 3.2 Stack (pin versions at scaffold time; record them in README)
- **Next.js 16** (App Router, TypeScript, Turbopack), **React 19**, **Tailwind CSS 4**, **shadcn/ui** (copy the component list Hisaab used, §3.4).
- **AI SDK v6** (`ai`) + **`@ai-sdk/google`** (Gemini). Rationale: PayPal's Agent Toolkit ships an AI SDK adapter (`@paypal/agent-toolkit/ai-sdk`), so a single tool-calling runtime is enough.
- **`@paypal/agent-toolkit`** (npm), used by the Follow-up agent and the "Ask PayPal" ops copilot.
- **Drizzle ORM** + `drizzle-kit` + `postgres` (postgres.js). DB = Render Postgres.
- **AG Grid Enterprise** `ag-grid-react` + `ag-grid-enterprise` ≥ **34.3** (AI Toolkit: `getStructuredSchema`, `setState`). Without a license key it runs in evaluation mode with a watermark. **VERIFY** on the AG Grid sponsor page whether hackathon licenses exist (Devpost resources → AG Grid). If yes, put the key in `NEXT_PUBLIC_AG_GRID_LICENSE`.
- **zod** (v4 if the AI SDK supports it; otherwise v3. Check the `ai` peerDeps).
- **pdf-lib** `^1.17.1` for letters and packets (copy Adhikaar's `src/lib/pdf/generate.ts` approach: TimesRoman, A4, `wrapText` + `drawLine` + `newPageIfNeeded`; see §19).
- Versions proven in Hisaab (pin to these or newer): `next 16.3.3`, `react 19.2.8`, `zod ^4.5.4`, `shadcn ^4.19.0` (style `radix-nova`), `lucide-react`, `sonner`, `vaul`, `date-fns ^4`, `nanoid`, `vitest ^4.1`, `tsx ^4.23`, `eslint-config-next 16.3.3`.
- **sharp** for deterministic image checks (dimensions, alpha, palette).
- **iron-session** for cookie sessions.
- **vitest** for unit tests and evals; **Playwright** for e2e smoke and video capture.

### 3.3 Repository layout (create exactly)
```
settle/
  LICENSE                         (MIT, "Copyright (c) 2026 Harsh Kawatra")
  README.md
  AGENTS.md                       (copy Hisaab's Next-16 warning + Settle rules)
  render.yaml
  .env.example
  drizzle.config.ts
  package.json
  next.config.ts
  src/
    app/
      layout.tsx  globals.css  page.tsx (landing)
      (app)/app/layout.tsx  page.tsx
      (app)/app/docket/page.tsx
      (app)/app/ledger/page.tsx
      (app)/app/claims/new/page.tsx
      (app)/app/claims/[id]/page.tsx
      (app)/app/protect/new/page.tsx
      (app)/app/protect/[id]/page.tsx
      (app)/app/settings/page.tsx
      r/[token]/page.tsx          (respondent portal)
      p/[token]/page.tsx          (protect client portal)
      api/
        health/route.ts
        demo-login/route.ts
        paypal/client-token/route.ts
        paypal/orders/route.ts                (create order: settle-in-full | fund-milestone)
        paypal/orders/[id]/complete/route.ts  (capture or authorize after approval)
        webhooks/paypal/route.ts
        cron/tick/route.ts
        ai/transcribe/route.ts
        ai/evidence/route.ts
        ai/facts/route.ts
        ai/letter/route.ts
        ai/criteria/route.ts
        ai/grid-state/route.ts
        ai/ask-paypal/route.ts
        mediator/[token]/route.ts             (streaming chat)
        claims/[id]/send/route.ts
        claims/[id]/packet/route.ts
        protect/[id]/deliver/route.ts
        protect/[id]/release/route.ts
        protect/[id]/contest/route.ts
        files/[id]/route.ts
    components/
      ui/ (shadcn)  app-shell.tsx  kpi-tile.tsx  timeline.tsx  agent-trace.tsx
      evidence-dropzone.tsx  voice-recorder.tsx  rule-card.tsx  fact-list.tsx
      amount-breakdown.tsx  mandate-editor.tsx  letter-preview.tsx
      paypal-button.tsx  paypal-panel.tsx  acceptance-report.tsx
      grids/docket-grid.tsx  grids/ledger-grid.tsx  grids/ask-grid.tsx
      mediator-chat.tsx  status-badge.tsx  disclaimer.tsx
    lib/
      env.ts  db/schema.ts  db/index.ts  db/seed.ts
      session.ts  tokens.ts  money.ts  events.ts
      paypal/{client.ts,orders.ts,authorizations.ts,invoices.ts,payouts.ts,refunds.ts,webhooks.ts,toolkit.ts,types.ts}
      ai/{model.ts,transcribe.ts,evidence.ts,facts.ts,letter.ts,criteria.ts,acceptance.ts,strength.ts,issues.ts,grid.ts,schemas.ts}
      rules/{index.ts,types.ts,ny.ts,ca.ts,federal.ts,generic.ts,calc.ts,citations.ts}
      claims/{state.ts,service.ts,ladder.ts,packet.ts}
      protect/{state.ts,service.ts,checks.ts}
      agents/{mediator.ts,followup.ts,mandate.ts,trace.ts}
      pdf/{letter.ts,packet.ts}           (pdf-lib, Adhikaar style)
  scripts/
    paypal-smoke.ts   register-webhook.ts   cron-tick.mjs   reset-demo.ts
  eval/
    gold/{facts.json,letters.json,mediator.json,acceptance.json}
    run.ts
  tests/ (vitest unit)   e2e/ (playwright)
  public/demo/ (seed evidence images, deliverable PNGs, brand sheet PDF)
  docs/ (architecture.png, screenshots for Devpost)
```

### 3.4 Patterns to borrow from Hisaab and Adhikaar
> See **§19** (complete). Executors: read §19 and open the referenced files before scaffolding.

---

## 4. Data model (`src/lib/db/schema.ts`, Drizzle, Postgres)

Copy-paste this. Money is always stored as **integer minor units** (`amount_minor`) plus `currency`. Convert with `src/lib/money.ts` only.

```ts
import { pgTable, text, integer, timestamp, jsonb, boolean, pgEnum, uuid, index, customType } from "drizzle-orm/pg-core";

const bytea = customType<{ data: Buffer }>({ dataType: () => "bytea" });

export const claimType = pgEnum("claim_type", ["FREELANCE_INVOICE", "UNPAID_WAGES", "SECURITY_DEPOSIT", "CONTRACT_OTHER"]);
export const claimStatus = pgEnum("claim_status", ["DRAFT","READY","SENT","NEGOTIATING","PLAN_ACTIVE","PARTIALLY_PAID","PAID","CLOSED_PAID","ESCALATED","PACKET_READY","DISPUTED","WITHDRAWN"]);
export const milestoneStatus = pgEnum("milestone_status", ["DRAFT","AWAITING_FUNDS","FUNDED","DELIVERED","CHECKED","REVISION_REQUESTED","RELEASED","PAID_OUT","DISPUTED","EXPIRED","CANCELLED"]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  payoutReceiver: text("payout_receiver").notNull(),          // sandbox PayPal email or PayPal ID
  payoutRecipientType: text("payout_recipient_type").notNull().default("EMAIL"), // EMAIL | PAYPAL_ID
  country: text("country").notNull().default("US"),
  locale: text("locale").notNull().default("en-US"),
  isDemo: boolean("is_demo").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const claims = pgTable("claims", {
  id: uuid("id").primaryKey().defaultRandom(),
  claimantId: uuid("claimant_id").notNull().references(() => users.id),
  type: claimType("type").notNull(),
  status: claimStatus("status").notNull().default("DRAFT"),
  jurisdiction: text("jurisdiction").notNull(),               // "US-NY" | "US-CA" | "US-FED" | "GENERIC"
  currency: text("currency").notNull().default("USD"),
  narrative: text("narrative").notNull().default(""),
  respondentName: text("respondent_name").notNull(),
  respondentEmail: text("respondent_email").notNull(),
  respondentToken: text("respondent_token").notNull().unique(),
  principalMinor: integer("principal_minor").notNull().default(0),
  computed: jsonb("computed").$type<import("../rules/types").Computation>(),  // breakdown lines
  settlementTotalMinor: integer("settlement_total_minor"),
  mandate: jsonb("mandate").$type<import("../agents/mandate").Mandate>(),
  mandateHash: text("mandate_hash"),
  strength: jsonb("strength"),
  letter: jsonb("letter").$type<import("../ai/schemas").Letter>(),
  ladderStep: integer("ladder_step").notNull().default(0),
  nextActionAt: timestamp("next_action_at"),
  sourceMilestoneId: uuid("source_milestone_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (t) => [index("claims_claimant_idx").on(t.claimantId), index("claims_next_idx").on(t.nextActionAt)]);

export const files = pgTable("files", {
  id: uuid("id").primaryKey().defaultRandom(),
  ownerKind: text("owner_kind").notNull(),                    // "claim" | "milestone" | "dispute"
  ownerId: uuid("owner_id").notNull(),
  name: text("name").notNull(),
  mediaType: text("media_type").notNull(),
  size: integer("size").notNull(),
  sha256: text("sha256").notNull(),
  data: bytea("data").notNull(),
  analysis: jsonb("analysis"),                                // EvidenceAnalysis
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const facts = pgTable("facts", {
  id: uuid("id").primaryKey().defaultRandom(),
  claimId: uuid("claim_id").notNull().references(() => claims.id),
  key: text("key").notNull(),                                 // e.g. "agreed_amount", "due_date", "work_completed_date"
  value: text("value").notNull(),
  fileId: uuid("file_id"),
  quote: text("quote"),
  confidence: integer("confidence").notNull(),                // 0-100
  confirmed: boolean("confirmed").notNull().default(false),
});

export const invoices = pgTable("invoices", {
  id: uuid("id").primaryKey().defaultRandom(),
  claimId: uuid("claim_id").notNull().references(() => claims.id),
  paypalInvoiceId: text("paypal_invoice_id").notNull().unique(),
  invoiceNumber: text("invoice_number").notNull(),
  seq: integer("seq").notNull().default(1),                   // installment number
  amountMinor: integer("amount_minor").notNull(),
  paidMinor: integer("paid_minor").notNull().default(0),
  dueDate: text("due_date").notNull(),                        // YYYY-MM-DD
  status: text("status").notNull(),                           // PayPal status mirror
  payerViewUrl: text("payer_view_url"),
  qrPngBase64: text("qr_png_base64"),
  raw: jsonb("raw"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const milestones = pgTable("milestones", {
  id: uuid("id").primaryKey().defaultRandom(),
  freelancerId: uuid("freelancer_id").notNull().references(() => users.id),
  clientName: text("client_name").notNull(),
  clientEmail: text("client_email").notNull(),
  clientToken: text("client_token").notNull().unique(),
  title: text("title").notNull(),
  amountMinor: integer("amount_minor").notNull(),
  currency: text("currency").notNull().default("USD"),
  criteria: jsonb("criteria").$type<import("../ai/schemas").Criterion[]>().notNull(),
  reviewWindowHours: integer("review_window_hours").notNull().default(72),
  status: milestoneStatus("status").notNull().default("DRAFT"),
  paypalOrderId: text("paypal_order_id"),
  authorizationId: text("authorization_id"),
  authorizationExpiresAt: timestamp("authorization_expires_at"),
  captureId: text("capture_id"),
  report: jsonb("report").$type<import("../ai/schemas").AcceptanceReport>(),
  deliveredAt: timestamp("delivered_at"),
  releaseAt: timestamp("release_at"),                         // deliveredAt + window
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const payments = pgTable("payments", {                  // every inbound money event
  id: uuid("id").primaryKey().defaultRandom(),
  claimId: uuid("claim_id"), milestoneId: uuid("milestone_id"),
  source: text("source").notNull(),                           // "INVOICE" | "ORDER_CAPTURE" | "AUTH_CAPTURE"
  paypalRef: text("paypal_ref").notNull().unique(),           // invoice transaction id / capture id
  amountMinor: integer("amount_minor").notNull(),
  currency: text("currency").notNull(),
  raw: jsonb("raw"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const payouts = pgTable("payouts", {
  id: uuid("id").primaryKey().defaultRandom(),
  paymentId: uuid("payment_id").notNull().references(() => payments.id).unique(), // 1 payout per payment (idempotent)
  senderBatchId: text("sender_batch_id").notNull().unique(),
  payoutBatchId: text("payout_batch_id"),
  payoutItemId: text("payout_item_id"),
  receiver: text("receiver").notNull(),
  amountMinor: integer("amount_minor").notNull(),
  currency: text("currency").notNull(),
  status: text("status").notNull(),                           // PENDING|SUCCESS|...
  raw: jsonb("raw"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const events = pgTable("events", {                      // timeline + audit
  id: uuid("id").primaryKey().defaultRandom(),
  entityKind: text("entity_kind").notNull(),                  // claim | milestone
  entityId: uuid("entity_id").notNull(),
  type: text("type").notNull(),                               // e.g. "state", "paypal.webhook", "agent.tool", "agent.message"
  actor: text("actor").notNull(),                             // claimant | respondent | client | mediator | followup | system | paypal
  data: jsonb("data").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (t) => [index("events_entity_idx").on(t.entityKind, t.entityId, t.createdAt)]);

export const webhookEvents = pgTable("webhook_events", {
  id: text("id").primaryKey(),                                // PayPal event id (dedupe)
  eventType: text("event_type").notNull(),
  resourceId: text("resource_id"),
  verified: boolean("verified").notNull(),
  payload: jsonb("payload").notNull(),
  processedAt: timestamp("processed_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const messages = pgTable("messages", {                  // mediator chat
  id: uuid("id").primaryKey().defaultRandom(),
  claimId: uuid("claim_id").notNull().references(() => claims.id),
  role: text("role").notNull(),                               // user | assistant | tool
  content: jsonb("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
```
Scripts in `package.json`: `"db:generate": "drizzle-kit generate"`, `"db:migrate": "drizzle-kit migrate"`, `"db:seed": "tsx src/lib/db/seed.ts"`, `"demo:reset": "tsx scripts/reset-demo.ts"`.

---

## 5. PayPal integration (copy-paste spec)

### 5.1 Sandbox setup: steps for Harsh (≈ 30 min, Day 1 morning)
1. Log in at https://developer.paypal.com with a PayPal account (an Indian personal account works for developer access). If sign-up is blocked for your country or phone, ask in the PayPal Discord (FAQ).
2. **Apps & Credentials → Sandbox → Create App** "Settle", type Merchant, with the default sandbox business account. Copy the **Client ID** and **Secret** into `.env.local`.
3. In the app settings, enable **Payouts** and **Invoicing** (check "Features"/"App feature options"; Vault is not needed). **VERIFY** that Payouts is listed. If Payouts is not available, follow the fallback in §5.6.
4. **Sandbox → Accounts → Create account** (each with a known password, recorded in `docs/sandbox-accounts.md`, which is **gitignored**; judges get the buyer login through README instructions, see §12.3):
   - `settle-platform@…` Business, US (or reuse the default business account; its email becomes `PAYPAL_INVOICER_EMAIL`)
   - `ana@…` Personal, US (payout receiver)
   - `dev@…` Personal, **IN** (cross-border payout receiver)
   - `brightline@…` Personal, US, balance $5,000 (payer)
   - `larkspur@…` Personal, US, balance $5,000 (payer)
   - `judge-buyer@…` Personal, US, balance $9,999 (credentials go in the README for judges)
5. **Webhooks:** after the first Render deploy (Day 1), run `npm run paypal:webhook -- https://<render-url>/api/webhooks/paypal`. It registers the events listed in §5.5 and prints the webhook id, which goes into `PAYPAL_WEBHOOK_ID` on Render. For local development, run `cloudflared tunnel --url http://localhost:3000` and register a second webhook (`PAYPAL_WEBHOOK_ID` in `.env.local`).

### 5.2 `.env.example`
```
DATABASE_URL=postgres://settle:settle@localhost:5432/settle
PAYPAL_ENV=sandbox
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
PAYPAL_WEBHOOK_ID=
PAYPAL_INVOICER_EMAIL=            # sandbox business account email (must match the app's account)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=     # same as PAYPAL_CLIENT_ID (public)
GEMINI_API_KEY=                   # same name as Hisaab/Adhikaar
GEMINI_MODEL=                     # optional: prepended to the chain (Hisaab pattern), never replaces it
SESSION_SECRET=                   # 32+ chars
CRON_SECRET=
APP_URL=http://localhost:3000
NEXT_PUBLIC_AG_GRID_LICENSE=
DEMO_MODE=true                    # enables /api/demo-login + reset
```
`src/lib/env.ts` parses these with zod and throws a readable error at boot if any required key is missing.

### 5.3 REST client: `src/lib/paypal/client.ts` (complete)
```ts
import "server-only";
import { env } from "@/lib/env";

const BASE = env.PAYPAL_ENV === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
let cached: { token: string; exp: number } | null = null;

export async function accessToken(): Promise<string> {
  if (cached && Date.now() < cached.exp - 60_000) return cached.token;
  const res = await fetch(`${BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${env.PAYPAL_CLIENT_ID}:${env.PAYPAL_CLIENT_SECRET}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });
  if (!res.ok) throw new PayPalError("oauth", res.status, await res.text());
  const j = (await res.json()) as { access_token: string; expires_in: number };
  cached = { token: j.access_token, exp: Date.now() + j.expires_in * 1000 };
  return j.access_token;
}

export class PayPalError extends Error {
  constructor(public op: string, public status: number, public body: string, public debugId?: string) {
    super(`PayPal ${op} failed (${status}): ${body.slice(0, 500)}`);
  }
}

export async function pp<T>(op: string, path: string, init: { method?: string; body?: unknown; requestId?: string; prefer?: string } = {}): Promise<T> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${await accessToken()}`,
    "Content-Type": "application/json",
  };
  if (init.requestId) headers["PayPal-Request-Id"] = init.requestId;   // idempotency
  if (init.prefer) headers["Prefer"] = init.prefer;                   // "return=representation"
  const res = await fetch(`${BASE}${path}`, { method: init.method ?? "GET", headers, body: init.body ? JSON.stringify(init.body) : undefined, cache: "no-store" });
  const text = await res.text();
  if (!res.ok) throw new PayPalError(op, res.status, text, res.headers.get("paypal-debug-id") ?? undefined);
  return (text ? JSON.parse(text) : {}) as T;
}

/** Browser-safe client token for JS SDK v6 (expires ~15 min). */
export async function browserClientToken(domains: string[]): Promise<string> {
  const body = new URLSearchParams({ grant_type: "client_credentials", response_type: "client_token" });
  for (const d of domains) body.append("domains[]", d);
  const res = await fetch(`${BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${env.PAYPAL_CLIENT_ID}:${env.PAYPAL_CLIENT_SECRET}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body, cache: "no-store",
  });
  if (!res.ok) throw new PayPalError("client_token", res.status, await res.text());
  return ((await res.json()) as { access_token: string }).access_token;
}
```
Rule: **every money-moving call passes `requestId`**, derived deterministically, e.g. `capture:${milestoneId}` or `payout:${paymentId}`, so retries are safe.

Every `pp()` call must also write an `events` row `{type:"paypal.call", data:{op, path, status, id}}` through a thin wrapper `ppLogged(entity, …)`. The agent trace and ledger read these rows.

### 5.4 Endpoints used (exact)
**Orders v2** (`src/lib/paypal/orders.ts`)
- Create, pay in full (respondent):
```json
POST /v2/checkout/orders
{ "intent": "CAPTURE",
  "purchase_units": [{ "reference_id": "claim_<uuid>", "custom_id": "claim:<uuid>",
     "invoice_id": "SETTLE-<claimShort>-FULL", "description": "Settlement: <claimant> v. <respondent>",
     "amount": { "currency_code": "USD", "value": "2400.00" } }],
  "payment_source": { "paypal": { "experience_context": {
     "brand_name": "Settle", "user_action": "PAY_NOW", "shipping_preference": "NO_SHIPPING",
     "return_url": "<APP_URL>/r/<token>?paid=1", "cancel_url": "<APP_URL>/r/<token>" } } } }
```
  then `POST /v2/checkout/orders/{id}/capture` (requestId `capture-order:${orderId}`). Read `purchase_units[0].payments.captures[0].{id,status,amount}`.
- Create, fund milestone (PROTECT): the same shape with `"intent": "AUTHORIZE"`, `custom_id: "milestone:<uuid>"`. After approval, `POST /v2/checkout/orders/{id}/authorize`. Read `purchase_units[0].payments.authorizations[0].{id,status,expiration_time}`. Store `authorizationId` and `authorizationExpiresAt`.

**Authorizations** (`src/lib/paypal/authorizations.ts`)
- Capture on release: `POST /v2/payments/authorizations/{id}/capture` with body `{ "final_capture": true, "invoice_id": "SETTLE-M-<short>", "note_to_payer": "Released after acceptance checks passed" }` (requestId `capture:${milestoneId}`).
- Void on cancel or expiry: `POST /v2/payments/authorizations/{id}/void`.
- Reauthorize if the capture fails because the honor period lapsed: `POST /v2/payments/authorizations/{id}/reauthorize` with `{ "amount": {currency_code, value} }`. Then retry the capture once. (The honor period is 3 days; authorizations are valid for 29 days. **VERIFY** at https://developer.paypal.com/docs/checkout/standard/customize/authorization/.)
- `GET /v2/payments/authorizations/{id}` for status.

**Invoicing v2** (`src/lib/paypal/invoices.ts`)
- Next number: `POST /v2/invoicing/generate-next-invoice-number` → `{ invoice_number }`.
- Create draft: `POST /v2/invoicing/invoices` with header `Prefer: return=representation`:
```json
{ "detail": {
    "invoice_number": "<from generate>", "reference": "claim:<uuid>",
    "invoice_date": "2026-10-28", "currency_code": "USD",
    "note": "Issued by Settle on behalf of Ana Ruiz. Respond, propose a plan or dispute at <APP_URL>/r/<token>",
    "terms_and_conditions": "Settle is not a law firm. This invoice is a request for payment from the claimant.",
    "memo": "claim:<uuid> seq:1",
    "payment_term": { "term_type": "DUE_ON_DATE_SPECIFIED", "due_date": "2026-11-11" } },
  "invoicer": { "business_name": "Settle for Ana Ruiz", "email_address": "<PAYPAL_INVOICER_EMAIL>", "website": "<APP_URL>" },
  "primary_recipients": [{ "billing_info": { "name": { "given_name": "Tom", "surname": "Becker" }, "email_address": "<respondent sandbox email>" } }],
  "items": [
    { "name": "Unpaid invoice #A-1043 (illustration, Aug 2026)", "quantity": "1", "unit_amount": { "currency_code": "USD", "value": "2400.00" }, "unit_of_measure": "AMOUNT" }
  ],
  "configuration": { "partial_payment": { "allow_partial_payment": true, "minimum_amount_due": { "currency_code": "USD", "value": "200.00" } }, "allow_tip": false, "tax_inclusive": false } }
```
  One item per breakdown line (principal, statutory damages if claimed, interest), so the invoice mirrors the letter. **VERIFY** field names against https://developer.paypal.com/docs/api/invoicing/v2/#invoices_create (especially `unit_of_measure` values and `payment_term`). If the API rejects a field, remove it and log it in `docs/paypal-notes.md`.
- Send: `POST /v2/invoicing/invoices/{id}/send` with `{ "send_to_recipient": true, "send_to_invoicer": true, "subject": "Payment request from Ana Ruiz via Settle", "note": "<one-line summary + portal link>" }`. The response contains a payer-view `href`. Store it as `payerViewUrl`. Then `GET` the invoice and also read `detail.metadata.recipient_view_url` if present.
- QR: `POST /v2/invoicing/invoices/{id}/generate-qr-code` with `{ "width": 400, "height": 400 }`. The response is a base64 PNG (it may be multipart; handle both: if `content-type` is not JSON, extract the base64 body). Store `qrPngBase64`.
- Remind: `POST /v2/invoicing/invoices/{id}/remind` with `{ "subject": "...", "note": "...", "send_to_invoicer": false, "send_to_recipient": true }`.
- Cancel: `POST /v2/invoicing/invoices/{id}/cancel` with `{ "subject": "Claim withdrawn", "note": "...", "send_to_invoicer": true, "send_to_recipient": true }`.
- Get: `GET /v2/invoicing/invoices/{id}`. Payments live in `payments.transactions[]` (`payment_id`, `amount`, `payment_date`, `method`). Statuses mirrored include `SENT`, `PARTIALLY_PAID`, `PAID`, `CANCELLED`, `MARKED_AS_PAID`, `SCHEDULED`.
- Plan series: for an accepted plan with N installments, create N invoices (`seq` 1..N, `memo` includes `plan:<planId>`). Send #1 immediately. #2..N are created as drafts and **sent by the Follow-up agent on their due date minus 7 days** (simpler and more visible than PayPal scheduled invoices). Cancel the original full invoice, with note "Replaced by agreed payment plan".

**Payouts** (`src/lib/paypal/payouts.ts`)
```json
POST /v1/payments/payouts      (requestId = "payout:<paymentId>")
{ "sender_batch_header": { "sender_batch_id": "settle-<paymentId>", "email_subject": "You've been paid via Settle", "email_message": "Payment received from Brightline Studio LLC for your claim." },
  "items": [{ "recipient_type": "EMAIL", "receiver": "<claimant payoutReceiver>", "amount": { "value": "800.00", "currency": "USD" },
              "note": "Settle claim <short>, installment 1 of 3", "sender_item_id": "<paymentId>", "recipient_wallet": "PAYPAL" }] }
```
→ store `batch_header.payout_batch_id`. Status via `GET /v1/payments/payouts/{batch_id}` or webhooks. **Idempotency: `payouts.paymentId` is UNIQUE, so insert the row before calling PayPal (status `CREATING`), then update it.**

**Refunds** (`src/lib/paypal/refunds.ts`): `POST /v2/payments/captures/{captureId}/refund` with `{ "amount": {…}, "note_to_payer": "Overpayment returned" }`. Used when sum(payments) > settlement total (overpayment) and when a PROTECT client wins a contest after capture (rare; manual button only).

**Webhook signature verification** (`src/lib/paypal/webhooks.ts`)
```ts
export async function verifyWebhook(headers: Headers, rawBody: string) {
  const body = {
    auth_algo: headers.get("paypal-auth-algo"),
    cert_url: headers.get("paypal-cert-url"),
    transmission_id: headers.get("paypal-transmission-id"),
    transmission_sig: headers.get("paypal-transmission-sig"),
    transmission_time: headers.get("paypal-transmission-time"),
    webhook_id: env.PAYPAL_WEBHOOK_ID,
    webhook_event: JSON.parse(rawBody),
  };
  const r = await pp<{ verification_status: "SUCCESS" | "FAILURE" }>("verify_webhook", "/v1/notifications/verify-webhook-signature", { method: "POST", body });
  return r.verification_status === "SUCCESS";
}
```
Route `api/webhooks/paypal/route.ts`: read `await req.text()`, verify, upsert into `webhook_events` (dedupe on id; if the row exists, return 200), dispatch by `event_type`, set `processedAt`, return 200. Return 200 even for unverified events (stored with `verified=false`, not processed) so PayPal stops retrying. Log them loudly.

### 5.5 Webhook events to register (`scripts/register-webhook.ts` → `POST /v1/notifications/webhooks`)
`INVOICING.INVOICE.PAID`, `INVOICING.INVOICE.UPDATED`, `INVOICING.INVOICE.CANCELLED`, `INVOICING.INVOICE.REFUNDED`, `CHECKOUT.ORDER.APPROVED`, `PAYMENT.CAPTURE.COMPLETED`, `PAYMENT.CAPTURE.REFUNDED`, `PAYMENT.AUTHORIZATION.CREATED`, `PAYMENT.AUTHORIZATION.VOIDED`, `PAYMENT.PAYOUTSBATCH.SUCCESS`, `PAYMENT.PAYOUTSBATCH.DENIED`, `PAYMENT.PAYOUTS-ITEM.SUCCEEDED`, `PAYMENT.PAYOUTS-ITEM.FAILED`, `PAYMENT.PAYOUTS-ITEM.UNCLAIMED`.

**Reconciliation is the source of truth, not webhooks.** `reconcileInvoice(paypalInvoiceId)` GETs the invoice and inserts any `payments.transactions[]` not yet in `payments` (keyed by `paypalRef = transaction payment_id`). For each new payment it calls `payoutForPayment()` and then `recomputeClaimStatus()`. Call it (a) from the INVOICING.* webhook handlers, (b) from the cron tick for every invoice in `SENT|PARTIALLY_PAID`, and (c) from a "Refresh from PayPal" button. This makes the app work even when webhooks are delayed in sandbox (they often are) or absent locally.

### 5.6 Day-1 smoke test: `scripts/paypal-smoke.ts` (run before any UI)
Run in sequence and print ids: (1) OAuth; (2) create, send, get an invoice to `brightline`; (3) create a CAPTURE order (status CREATED is enough here); (4) create a payout of $1.00 to `ana`, then GET the batch; (5) create a client token.
**Fallbacks:** if Payouts returns `AUTHORIZATION_ERROR` or "not enabled": check the app features; ask in PayPal Discord; temporarily mark payouts `SIMULATED` behind the flag `PAYOUTS_MODE=simulate` (the UI shows "simulated payout" honestly). Do **not** ship the video with simulated payouts unless it is unavoidable, and say so if it is.

### 5.7 JS SDK v6 in the browser (`src/components/paypal-button.tsx`)
- Script: `https://www.sandbox.paypal.com/web-sdk/v6/core` (load once with `next/script`, `strategy="afterInteractive"`).
- Flow (**VERIFY** against https://developer.paypal.com/sdk/js/set-up and the v6 reference at implementation time):
```ts
const { clientToken } = await (await fetch("/api/paypal/client-token")).json();
const sdk = await window.paypal.createInstance({ clientToken, components: ["paypal-payments"], pageType: "checkout" });
const methods = await sdk.findEligibleMethods({ currencyCode: currency });
if (!methods.isEligible("paypal")) { setUnavailable(true); return; }
const session = sdk.createPayPalOneTimePaymentSession({
  onApprove: async ({ orderId }) => { await fetch(`/api/paypal/orders/${orderId}/complete`, { method: "POST" }); onDone(); },
  onCancel: () => toast("Payment cancelled"),
  onError: (e) => toast.error(String(e)),
});
button.onclick = () => session.start({ presentationMode: "auto" }, createOrder()); // createOrder() returns Promise<{orderId}>
```
- `createOrder()` POSTs to `/api/paypal/orders` with `{ kind: "settle-full", token }` or `{ kind: "fund-milestone", token }` and returns `{ orderId }`. The server decides amount and intent from the DB. **Never trust amounts from the client.**
- `/api/paypal/orders/[id]/complete`: GET the order, read `custom_id` to find the entity, then capture (claim) or authorize (milestone) and update state. It is idempotent: if already completed, return the stored result.
- `/api/paypal/client-token`: `browserClientToken([new URL(env.APP_URL).origin])`.
- **Fallback:** if v6 initialization fails in sandbox, implement the v5 Buttons SDK (`https://www.sandbox.paypal.com/sdk/js?client-id=…&intent=capture|authorize`) behind the same component interface and record the reason in `docs/paypal-notes.md`.

### 5.8 Agent Toolkit (`src/lib/paypal/toolkit.ts`)
```ts
import { PayPalAgentToolkit } from "@paypal/agent-toolkit/ai-sdk";
export const paypalToolkit = new PayPalAgentToolkit({
  clientId: env.PAYPAL_CLIENT_ID, clientSecret: env.PAYPAL_CLIENT_SECRET,
  configuration: {
    actions: {
      invoices: { get: true, list: true, sendReminder: true, generateQRC: true },
      reporting: { listTransactions: true },
    },
    context: { sandbox: true },
  },
});
export const toolkitTools = () => paypalToolkit.getTools();
```
**VERIFY** the exact action keys by reading `node_modules/@paypal/agent-toolkit` (README or types) after install, and log `Object.keys(toolkitTools())` once. Use the toolkit **only for read actions and reminders** (Follow-up agent plus the "Ask PayPal" ops copilot). All money movement and invoice creation goes through our guarded wrappers (§8), because policy must be enforced in code.

---

## 6. AI specification

### 6.1 Model wrapper (`src/lib/ai/model.ts`)
```ts
import "server-only";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { env } from "@/lib/env";

const google = createGoogleGenerativeAI({ apiKey: env.GEMINI_API_KEY });
// Same chain Hisaab/Adhikaar use in production. VERIFY ids still resolve at https://ai.google.dev/gemini-api/docs/models on Day 1.
const CHAIN = [...new Set([env.GEMINI_MODEL, "gemini-3.7-flash", "gemini-3.6-flash", "gemini-2.5-flash"].filter(Boolean))] as string[];

// Hisaab lesson: thinkingLevel LOW cut a 277 s call to 3.5 s on 3.x flash; thinkingBudget:0 returns 400 there.
const providerOptions = { google: { thinkingConfig: { thinkingLevel: "low" } } } as const; // VERIFY option name in @ai-sdk/google docs

export class AiAllModelsFailedError extends Error { constructor(public tried: string[], public causes: unknown[]) { super(`All Gemini models failed: ${tried.join(", ")}`); } }

/** Run fn against each model in the chain until one succeeds (Hisaab's fallback pattern, no backoff). */
export async function withModel<T>(task: string, fn: (model: ReturnType<typeof google>, opts: { providerOptions: typeof providerOptions }) => Promise<T>): Promise<T & { modelUsed?: string }> {
  const causes: unknown[] = [];
  for (const id of CHAIN) {
    const t0 = Date.now();
    try {
      const out = await fn(google(id), { providerOptions });
      console.log(JSON.stringify({ ai: task, model: id, ms: Date.now() - t0 }));
      return Object.assign(out as object, { modelUsed: id }) as T & { modelUsed: string };
    } catch (e) { causes.push(e); console.warn(`[ai] ${task} failed on ${id}`, e); }
  }
  throw new AiAllModelsFailedError(CHAIN, causes);
}
export const isAiConfigured = () => Boolean(env.GEMINI_API_KEY); // every AI route returns 503 JSON when false (Hisaab pattern)
```
- **Why the AI SDK instead of `@google/genai`** (which Hisaab uses): PayPal's Agent Toolkit ships an AI SDK adapter, so one tool-calling runtime serves both our tools and PayPal's. Keep Hisaab's *behaviour* (fallback chain, thinking LOW, typed errors, 503 when unconfigured, zod-checked tool args that return `{ok:false}` instead of throwing).
- Use `generateText({ model, system, messages, output: Output.object({ schema }), ...opts })` for structured output (AI SDK v6). Use `streamText` with `tools` and `stopWhen: stepCountIs(8)` for agents. **VERIFY** the v6 API names in `node_modules/ai` docs (executors can load the `vercel:ai-sdk` skill). Note that neither prior project used Gemini structured output, so test `Output.object` on Day 2 morning. If Gemini rejects a schema, fall back to plain JSON text + zod `safeParse` + one retry with the zod errors appended.
- On final failure, return a typed error the UI can show ("AI is busy, try again"). Never crash a page.
- Log `{task, model, ms, inputTokens, outputTokens}` to the console and as an `events` row of type `ai.call` when tied to an entity.
- Temperature: extraction 0.1, letters 0.4, mediator 0.3.
- Files are passed as `{ type: "file", data: buffer, mediaType }` message parts (images and PDFs). Gemini handles PDFs natively.

### 6.2 Zod schemas (`src/lib/ai/schemas.ts`); the key ones are given in full
```ts
export const EvidenceAnalysis = z.object({
  kind: z.enum(["chat_screenshot","email","contract","invoice","timesheet","pay_stub","lease","bank_statement","photo","other"]),
  summary: z.string().max(400),
  parties: z.array(z.object({ name: z.string(), role: z.enum(["claimant","respondent","other","unknown"]) })),
  dates: z.array(z.object({ date: z.string().describe("ISO YYYY-MM-DD"), what: z.string() })),
  amounts: z.array(z.object({ value: z.number(), currency: z.string(), what: z.string() })),
  keyQuotes: z.array(z.object({ quote: z.string().max(300), why: z.string() })).max(8),
  admissions: z.array(z.string()).describe("Statements by the respondent acknowledging the debt, work, or delay"),
  redFlags: z.array(z.string()).describe("Anything that weakens the claim, e.g. disputed quality"),
});

export const FactKeys = ["agreed_amount","amount_paid","work_description","work_completed_date","invoice_sent_date","due_date","contract_exists","respondent_acknowledged","hours_worked","hourly_rate","employment_end_date","final_wages_paid_date","deposit_amount","move_out_date","deductions_itemized","respondent_location","claimant_location"] as const;
export const Fact = z.object({ key: z.enum(FactKeys), value: z.string(), fileId: z.string().nullable(), quote: z.string().nullable(), confidence: z.number().int().min(0).max(100) });
export const FactsResult = z.object({ facts: z.array(Fact), gaps: z.array(z.object({ key: z.enum(FactKeys), question: z.string() })) });

export const LetterSection = z.object({ heading: z.string(), body: z.string(), citations: z.array(z.string()).describe("rule ids from the provided RULES list only") });
export const Letter = z.object({ subject: z.string(), salutation: z.string(), sections: z.array(LetterSection).min(3).max(7), closing: z.string(), deadlineDate: z.string() });

export const Criterion = z.object({ id: z.string(), text: z.string(), kind: z.enum(["deterministic","ai"]),
  check: z.discriminatedUnion("type", [
    z.object({ type: z.literal("file_count"), ext: z.string(), min: z.number().int() }),
    z.object({ type: z.literal("image_min_px"), minWidth: z.number().int(), minHeight: z.number().int() }),
    z.object({ type: z.literal("image_transparent") }),
    z.object({ type: z.literal("palette_match"), hex: z.array(z.string()), maxDeltaE: z.number() }),
    z.object({ type: z.literal("text_contains"), phrases: z.array(z.string()) }),
    z.object({ type: z.literal("word_count"), min: z.number().int(), max: z.number().int().optional() }),
    z.object({ type: z.literal("ai_judgement"), question: z.string() }),
  ]) });
export const CriterionResult = z.object({ id: z.string(), pass: z.boolean(), evidence: z.string(), confidence: z.number().int() });
export const AcceptanceReport = z.object({ results: z.array(CriterionResult), overall: z.enum(["PASS","FAIL","NEEDS_HUMAN"]), summary: z.string() });

export const Strength = z.object({ score: z.number().int().min(0).max(100), label: z.enum(["Strong","Moderate","Weak"]), reasons: z.array(z.string()).max(5), risks: z.array(z.string()).max(5) });
```

### 6.3 AI functions (one file each; each has a `SYSTEM` prompt constant and a typed function)
1. **`transcribe.ts`**: input is a voice note (webm/ogg/m4a). The prompt asks for a verbatim transcript in the original language plus an English translation. Output `{ transcript, language, english }`. Used for intake narration (show "Hindi/Spanish voice note works").
2. **`evidence.ts`, `analyzeEvidence(file)`**: per file → `EvidenceAnalysis`. System: *"You read evidence for a payment claim. Only report what is visible in the file. Quote exactly. If unreadable, say so in summary and return empty arrays. Never infer amounts not shown."*
3. **`facts.ts`, `extractFacts(claim, analyses[])`**: combines analyses plus the narrative into `FactsResult`. Rules: every fact with a value from a file must include `fileId` + `quote`; facts from the narrative only get `fileId:null, confidence ≤ 60`. `gaps` = required keys for the claim type (map in `rules/index.ts`) that are missing or low confidence.
4. **Rule selection + computation**: **NOT AI.** `rules/calc.ts` (§7) computes amounts from confirmed facts. The AI never does arithmetic that ends up in a letter.
5. **`strength.ts`**: facts + rules → `Strength` (labelled "AI estimate, not legal advice").
6. **`letter.ts`, `draftLetter(claim, facts, computation, rules)`**. **Adhikaar's rule applies: the model never authors a citation or an amount.** The letter is a template with three deterministic blocks plus model-written prose:
   - *Deterministic:* header and addresses; the **"What is owed"** table (rendered from `Computation`); the **"Legal basis"** block (rendered from the selected `Rule`s, using a `CitationTag`-style chip + statute text + URL); the payment/options block with the portal URL and QR; the disclaimer footer.
   - *Model-written:* the subject, the opening, "What was agreed" and "What happened" (from facts + quotes), and the closing. Where prose refers to a rule, the model writes the token `{{RULE:<id>}}` (rendered into the short citation). Where it refers to money, it writes `{{AMOUNT:<lineLabel>}}` or `{{TOTAL}}` (rendered from the Computation). The model may not type digits after a currency sign.
   - The prompt includes a `RULES` block (id, title, citation, summary) of **only the applicable rules**, the computed breakdown (as text, with exact numbers), and the facts with quotes. System, key lines:
   - *"Write a firm, polite demand letter from the claimant (first person). Plain English, 8th-grade reading level. No threats beyond lawful next steps the claimant may take (small claims, labour agency complaint). Do not say you are a lawyer. Use only the amounts given; never compute new numbers. Every sentence that states a legal right must cite a rule id in that section's citations. Include: what was agreed, what happened, what is owed (exact breakdown), the legal basis, how to pay (PayPal invoice + portal link placeholder {{PORTAL_URL}}), options (pay in full, propose a plan through the portal, dispute with reasons), and the deadline {{DEADLINE}}."*
   - **Validator** (`rules/citations.ts`, `validateLetter(letter, allowedRuleIds, computation)`; also mirror Adhikaar's `resolveCitation` that throws `UnresolvedCitationError` and render any unknown id as a loud red `[unresolved: id]` chip): (a) every `{{RULE:id}}` and citation id ∈ allowed; (a2) no raw currency amounts outside tokens; (b) every currency amount regex-found in the text ∈ the set of computed amounts; (c) contains `{{PORTAL_URL}}` and `{{DEADLINE}}`; (d) no banned phrases (`/lawyer|attorney at law|we will sue you immediately|criminal/i`, except inside a "This letter is not from a lawyer" disclaimer which is added by template, not the model). If it fails, retry once with the validator errors appended. If it fails again, show the errors and let the user edit. The UI shows a green "Citations verified · amounts verified" badge only when it passes.
7. **`criteria.ts`, `structureCriteria(freeText, deliverableType)`**: rewrites vague client and freelancer criteria into `Criterion[]`. Map to deterministic checks wherever possible. Show the before and after.
8. **`acceptance.ts`, `checkDelivery(criteria, files)`**: runs deterministic checks (§9.3, `protect/checks.ts`) first, then a single Gemini call for the `ai_judgement` criteria with all files attached. Output schema: `AcceptanceReport`. `overall` = PASS if all pass; FAIL if any deterministic check fails or any AI check fails with confidence ≥ 70; else NEEDS_HUMAN.
9. **`issues.ts`, `neutralIssues(claim, respondentEvidence)`**: on dispute, a neutral list of agreed facts, disputed facts and missing evidence for both sides.
10. **`grid.ts`**: AG Grid AI Toolkit bridge (§10.3).
11. **"Ask PayPal" ops copilot** (`api/ai/ask-paypal`): `streamText` with `toolkitTools()` (read-only) so the claimant can ask "How much did I receive through Settle this month?" Optional; build Day 4 if time allows.

### 6.4 Evals (`eval/run.ts`, run with `npm run eval`; copy Hisaab's harness structure, §19)
- `gold/facts.json`: 8 evidence bundles (in `public/demo/eval/*`) with expected key facts. Metric: key-fact recall ≥ 0.85, wrong-amount rate = 0.
- `gold/letters.json`: 5 claims. Metric: the validator passes in ≤ 2 tries on 5/5; zero out-of-dataset citations.
- `gold/mediator.json`: 10 scripted respondent turns (including attempts like "I'll pay 50% and you drop it", "pay me back $100", "6 installments"). Metric: **0 out-of-mandate commitments** (asserted from the tool-call log), ≥ 8/10 reach an in-mandate proposal.
- `gold/acceptance.json`: 4 deliverable sets (pass, fail-dimensions, fail-wordmark, borderline). Metric: overall verdict matches 4/4.
- Write results to `eval/results/<date>.json` and a markdown summary that the README quotes ("Evals: …").

---

## 7. Legal rules dataset (`src/lib/rules/*`)

### 7.1 Types (`rules/types.ts`)
```ts
export type Rule = {
  id: string;                       // "ny-fifa-payment-deadline"
  jurisdiction: "US-NY" | "US-NYC" | "US-CA" | "US-FED" | "GENERIC";
  claimTypes: ClaimType[];
  title: string;                    // human title
  citation: string;                 // "N.Y. Gen. Bus. Law § 1414" (VERIFY)
  url: string;                      // official source
  summary: string;                  // ≤ 60 words plain English
  remedy?: { kind: "double_damages" | "waiting_time_penalty" | "deposit_penalty" | "liquidated_damages" | "interest"; params: Record<string, number> };
  smallClaims?: { limitMinor: number; court: string; url: string };
  verifiedOn: string;               // YYYY-MM-DD, set by the executor after reading the source
};
export type Line = { label: string; amountMinor: number; ruleId?: string; formula: string };
export type Computation = { currency: string; lines: Line[]; totalMinor: number; principalMinor: number; notes: string[] };
```

### 7.2 Seed rules: the executor MUST VERIFY each against the official URL and correct it before use
| id | Jurisdiction | Draft content to verify | Source to check |
|---|---|---|---|
| `ny-fifa-scope` | US-NY | NY State Freelance Isn't Free Act (effective 28 Aug 2024): written contract required for freelance work ≥ $800 (single or aggregated over 120 days) | NY DOL FIFA page; NY General Business Law Art. 44-A |
| `ny-fifa-payment-deadline` | US-NY | Payment due on the contract date, or within 30 days after completion if none | same |
| `ny-fifa-double-damages` | US-NY | Payment violations: damages equal to twice the unpaid amount (double damages) plus attorney's fees | same |
| `nyc-fifa` | US-NYC | NYC Admin Code § 20-927 et seq. (NYC FIFA, 2017): similar protections; DCWP complaint route | nyc.gov DCWP Freelance Isn't Free |
| `ca-lab-201` | US-CA | Wages due immediately on discharge | leginfo.legislature.ca.gov, Labor Code §201 |
| `ca-lab-202` | US-CA | Wages due within 72 hours if the employee quits without notice | Labor Code §202 |
| `ca-lab-203` | US-CA | Waiting-time penalty: the daily wage continues up to 30 days | Labor Code §203 |
| `ca-civ-1950-5-return` | US-CA | Landlord must return the deposit and itemized statement within 21 days of move-out | Civil Code §1950.5 |
| `ca-civ-1950-5-penalty` | US-CA | Bad-faith retention: statutory damages up to twice the deposit, in addition to actual damages | Civil Code §1950.5(l) |
| `ca-small-claims` | US-CA | Small-claims limit for individuals $12,500 (VERIFY current) | courts.ca.gov small claims |
| `nyc-small-claims` | US-NYC | NYC Civil Court small claims up to $10,000 (VERIFY) | nycourts.gov |
| `fed-flsa-min-wage` | US-FED | Federal minimum wage $7.25/h | dol.gov FLSA |
| `fed-flsa-liquidated` | US-FED | Liquidated damages equal to unpaid wages (29 U.S.C. §216(b)) | law.cornell.edu |
| `generic-contract` | GENERIC | Plain-English statement: an agreed price for completed work is a debt; claimant may pursue in small claims where they or the respondent live (no statutory penalty) | none (mark "general principle, not a statute") |

**Verification procedure (executor task T-07):** for each row, WebFetch the official URL. Confirm the citation, numbers and dates. Write the 60-word summary in your own words (no long quotes). Set `verifiedOn`. If a rule cannot be confirmed, **delete it** and adjust the calculator to not use it. Record the evidence in `docs/rules-verification.md` (url, retrieved date, the 1 sentence confirming it).

### 7.3 Calculators (`rules/calc.ts`): pure functions with unit tests
- `freelanceNY(facts)`: principal = agreed − paid. If `due_date` (or completion + 30 days) < today and `ny-fifa-double-damages` is verified, add the line "Statutory damages (FIFA, if pursued)" = principal (making it double). **Letter wording:** "Under the Act I may be entitled to …". Mark it as a *concession lever* in the mandate (waivable).
- `wagesCA(facts)`: principal = hours × rate − paid. Waiting-time penalty = daily wage × min(30, days late), where daily wage = rate × (hours per day, default 8 when unknown and flagged in notes).
- `depositCA(facts)`: principal = deposit − itemized deductions (if no itemization within 21 days, the full deposit). Bad-faith penalty up to 2× deposit is shown as "may be awarded by a court", **not added to the invoice total**, only mentioned.
- `generic(facts)`: principal only.
- Interest: none (keep it simple and defensible).
- All functions return a `Computation`. Unit tests in `tests/calc.test.ts` cover the three demo cases with exact numbers.

---

## 8. Agents

### 8.1 Mandate (`src/lib/agents/mandate.ts`)
```ts
export const Mandate = z.object({
  floorMinor: z.number().int(),                 // lowest total the claimant accepts
  maxInstallments: z.number().int().min(1).max(6),
  maxPlanDays: z.number().int().min(0).max(180),
  minFirstPaymentMinor: z.number().int(),
  concessions: z.array(z.object({ id: z.enum(["waive_statutory_damages","waive_penalty"]), condition: z.enum(["paid_in_full_within_days","plan_honored"]), days: z.number().int().optional() })),
  autoAccept: z.boolean(),                      // if false, any plan goes to claimant for one-tap approval
});
export function checkProposal(m: Mandate, p: Proposal, computation: Computation): { ok: true } | { ok: false; reasons: string[] }
export const mandateHash = (m: Mandate) => sha256(canonicalJSON(m));
```
`Proposal = { totalMinor, installments: { amountMinor, dueDate }[], concessionIds: string[] }`. `checkProposal` enforces: total ≥ floor (after the allowed concessions only); count ≤ max; last due ≤ today + maxPlanDays; first ≥ minFirstPayment; each concession is allowed and its condition is satisfiable; sum(installments) === total. **This function is the only gate.** The model cannot bypass it because the tool implementation calls it.

### 8.2 Mediator agent (`src/lib/agents/mediator.ts`, route `api/mediator/[token]`)
- `streamText({ model, system, messages, tools, stopWhen: stepCountIs(6), temperature: 0.3, providerOptions })`, with the model taken from the §6.1 chain. For streaming, pick the first chain model that answered a 1-token warm-up ping in the last 10 minutes (cache in memory), since a mid-stream fallback is not possible. Persist messages. The client uses AI SDK `useChat` (v6 API; VERIFY).
- **System prompt** (key lines): *"You are Settle's mediator. You represent neither side's legal interests; you help the respondent resolve a payment request from {{claimant}}. Be calm, brief and concrete. Never threaten. Never give legal advice. You may only offer terms by calling `propose_plan`. If the tool rejects a proposal, explain the limits in plain words without revealing the exact floor. If the respondent disputes facts, call `open_dispute`. If they want to pay now, call `offer_pay_now`."*
- Tools (all implemented server-side; each writes an `events` row `agent.tool` with inputs and outputs, which is what the trace panel shows):
  - `get_case_summary()` → amounts, breakdown, deadline, what the claimant allows in words ("payment plans up to 3 installments over 60 days").
  - `propose_plan({ installments, concessionIds })` → runs `checkProposal`. If rejected: returns `{ rejected: true, reasons }` (shown as a red "Blocked by mandate" chip in the trace, a key demo moment). If ok and `autoAccept`: stores the pending proposal and returns `{ ok, proposalId, summary }`.
  - `accept_plan({ proposalId })`: only valid after the respondent explicitly says yes (the model must quote the respondent's acceptance in `respondentQuote`; the server checks that the last user message contains an affirmative via simple regex plus a model flag). It creates the PayPal invoice series (§5.4), cancels the original invoice, moves the claim to `PLAN_ACTIVE`, and returns invoice #1's payer link. If `autoAccept=false`, it sets the claim to `NEGOTIATING`, notifies the claimant (approve button in the claim room), and tells the respondent "Sent to Ana for approval."
  - `offer_pay_now()` → returns the in-portal PayPal button instruction (UI renders the button inline in the chat).
  - `open_dispute({ reason })` → state `DISPUTED`, prompts upload.
- Rate limits: 30 messages per token per day; max 2,000 characters per message.

### 8.3 Follow-up agent (`src/lib/agents/followup.ts`, `api/cron/tick`)
- cron-job.org (free) every 10 min → `POST /api/cron/tick` with header `x-cron-secret` (see §11.0). Page loads of a claim room also call `tick({ claimId })` for that claim, so the demo never depends on the scheduler.
- `tick()`: (1) reconcile all open invoices (§5.5); (2) PROTECT auto-release: milestones `CHECKED(PASS)` with `releaseAt ≤ now` → capture + payout; (3) PROTECT expiry: `FUNDED` with `authorizationExpiresAt < now+24h` and not delivered → void + notify; (4) send plan installments due in ≤ 7 days; (5) claims with `nextActionAt ≤ now` → run the **ladder**.
- **Ladder** (`claims/ladder.ts`), deterministic schedule with an AI-written message:
  - step 1: day 3 after send, friendly reminder (PayPal `remind`).
  - step 2: day 7, reminder + "propose a plan" nudge.
  - step 3: day 14, final notice (status `ESCALATED`) + plain description of next steps.
  - step 4: day 21, generate the small-claims packet, `PACKET_READY`, notify the claimant.
- Message text for each step: `withModel("ladder", (model, o) => generateText({ model, ...o, tools, ... }))` with the toolkit tools available (`get invoice`, `send reminder`). The agent decides the wording and **must** call the reminder tool exactly once (enforced: if not called, the code sends a default reminder). Its tool calls are logged to `events`.
- **Demo time-travel:** `DEMO_MODE` adds a "⏩ Advance 7 days" button in the claim room (shifts `nextActionAt` and `ladder` timestamps, then runs `tick()` for that claim only). It is labelled as a demo control.

### 8.4 Acceptance flow (PROTECT): `protect/service.ts`
`deliver(files)` → store → `checkDelivery()` → report → `CHECKED`, with `releaseAt = now + reviewWindowHours`. The client portal shows the report: Approve → `release()` = capture (requestId) → payment row → payout → `PAID_OUT`. Contest(reason) → AI compares the reason against criteria: if the reason cites an unmet criterion that the report marked pass, state `NEEDS_HUMAN`; the freelancer sees "Convert to claim" which creates a RECOVER claim prefilled with the milestone facts (agreed amount, criteria, report as evidence). The demo `DEMO_MODE` shows "⏩ End review window".

---

## 9. UI specification

### 9.1 Design system: "legal paper, calm money"
- Use the `impeccable` / `taste-skill` skills at the design pass (Day 4). Avoid generic SaaS gradients.
- **Fonts:** headings `Newsreader` (serif, Google Fonts via `next/font`); UI `Inter` or `Geist`; numbers `JetBrains Mono` (tabular).
- **Tokens** (`globals.css`, Tailwind 4 `@theme`): `--paper: #FBFAF7; --ink: #14161A; --muted: #6B6F76; --rule: #E6E2DA; --accent: #1F4FD8 (ink blue); --ok: #1E7F4F; --warn: #B7791F; --bad: #B42318; --held: #6D28D9`. Dark mode is optional (skip unless time allows).
- **Motifs:** thin rules, document cards with a "page" shadow, status stamps (PAID, IN PLAN, HELD) rendered like rubber stamps (rotated −4°, outline), money in mono.
- **Components:** shadcn `button card badge dialog sheet tabs input textarea select tooltip progress separator toast(sonner) dropdown-menu skeleton`.
- Copy tone: plain, warm, no hype. No em dashes in UI copy (matches the user's house style).
- Every async action has loading (skeleton/spinner with a verb: "Reading your screenshots…"), success and error states. Empty states have a one-line explanation and a primary action.

### 9.2 Key components (behaviour)
- `agent-trace.tsx`: vertical list of `events` for the entity, filtered to `agent.*`, `paypal.*`, `ai.call`. Each row: icon, actor, short text, collapsible JSON, and a PayPal id chip (click to copy). Polls every 3 s while open, or uses SSE if simple.
- `paypal-panel.tsx`: invoice number, status stamp, amount paid / total progress bar, payer-view link, QR image, payments list, payouts list (status chip), "Refresh from PayPal".
- `evidence-dropzone.tsx`: drag-drop + file picker; shows per-file progress → "AI read: chat screenshot · 3 quotes".
- `fact-list.tsx`: facts with quote popovers (thumbnail of the source file), confirm/edit, gap prompts.
- `amount-breakdown.tsx`: lines with rule chips → `rule-card.tsx` (citation, summary, link, verified-on).
- `mandate-editor.tsx`: sliders and inputs plus the plain-English sentence ("I'll accept as little as $2,400, in up to 3 payments over 60 days, first payment at least $600. I'll waive the double damages if they pay in full within 7 days.") and the hash.
- `letter-preview.tsx`: paper-styled letter; sections editable; validator badge; PDF download.
- `acceptance-report.tsx`: criteria rows with pass/fail icons, evidence text, thumbnails.
- `mediator-chat.tsx`: chat with inline tool-result cards (plan card with installments, "Blocked by mandate" card, PayPal button card).

### 9.3 Deterministic checks (`protect/checks.ts`, using sharp)
`file_count` (by extension), `image_min_px` (metadata), `image_transparent` (`hasAlpha` + sample corner pixels alpha < 10), `palette_match` (resize to 64×64, k-means 5 colours or `stats().dominant`, ΔE2000 to each target hex; pass if every target has a match ≤ maxDeltaE), `text_contains` (on extracted text from PDF/TXT via Gemini transcription or `pdf-parse`), `word_count`.

---

## 10. AG Grid (sponsor prize focus)

### 10.1 Setup
`npm i ag-grid-react ag-grid-enterprise` (≥ 34.3). Register once in a client component: `ModuleRegistry.registerModules([AllEnterpriseModule])` or `<AgGridProvider modules={[AllEnterpriseModule]}>` (VERIFY for the installed version). `LicenseManager.setLicenseKey(process.env.NEXT_PUBLIC_AG_GRID_LICENSE)` if present. Theme: the `themeQuartz.withParams({...})` API with Settle tokens (font Inter, header weight 600, accent #1F4FD8, row hover #F3F1EC).

### 10.2 Grids
- **Docket grid** (`/app/docket`): rows = claims + milestones (a `kind` column). Columns: Kind, Counterparty, Type, Jurisdiction, Status (cell renderer = stamp), Owed (mono, currency), Paid, Remaining (valueGetter), Next action (relative date), Ladder step (mini progress), Days outstanding, Strength. Features: row grouping by Status/Type, sidebar (columns, filters), set filters, status bar aggregations (sum Owed/Paid), row click → room. Default sort: Next action asc.
- **Ledger grid** (`/app/ledger`): rows = payments + payouts + authorizations + invoices (normalised view `ledgerRows()`). Columns: Time, Object (Invoice/Order/Authorization/Capture/Payout/Refund), PayPal ID (copy button renderer), Claim/Milestone, Direction (in/out/held), Amount, Status. **Master-detail** → raw PayPal JSON (pretty printed) + linked events. Pivot mode enabled (judges like it: pivot by month × object).
- Both grids load via server components → JSON props; refresh button.

### 10.3 "Ask your docket": AG Grid AI Toolkit
- Client: `const schema = api.getStructuredSchema({ columns: { status: { description: "Claim or milestone status", includeSetValues: true }, type: { includeSetValues: true }, owed: { description: "Amount owed in USD" } } })`; send `{ query, state: api.getState(), schema }` to `/api/ai/grid-state`.
- Server: `withModel("grid", (model, o) => generateText({ model, ...o, output: Output.object({ schema: jsonSchema(responseSchema) }) }))`, where `responseSchema = { type:'object', properties:{ gridState: schema, propertiesToIgnore:{type:'array', items:{type:'string', enum:['aggregation','filter','sort','pivot','columnVisibility','columnSizing','rowGroup']}}, explanation:{type:'string'} }, required:['gridState','propertiesToIgnore','explanation'], additionalProperties:false }`. Validate with `ajv` before returning.
- Client: `api.setState(res.gridState, res.propertiesToIgnore)` and show `explanation` under the input.
- Suggested chips: "Unpaid over 30 days, biggest first", "Group by status, total owed", "Only California wage claims", "Payouts that failed".
- **Gemini structured-output caveat:** Gemini's response schema supports a subset of JSON Schema. If AG Grid's schema contains unsupported keywords (e.g., `additionalProperties`, `oneOf`), fall back to `output: Output.json()`-style free JSON plus ajv validation plus 1 retry with the errors. Implement the fallback from the start.

---

## 11. Render deployment

### 11.0 Zero-cost hosting (user constraint: **no paid plans anywhere**)
| Need | Free choice | Why |
|---|---|---|
| Web app | **Render Free web service** | Keeps Render sponsor eligibility. Spins down after ~15 min idle (cold start ~30–60 s); the keep-warm pinger below prevents that. 750 free instance-hours/month cover one service running 24/7. VERIFY the current free-tier limits at https://render.com/docs/free |
| Postgres | **Neon Free** (https://neon.tech, 0.5 GB, no expiry, auto-suspend/resume) | Render's free Postgres expires 30 days after creation (≈ late Nov), which is before judging ends on Dec 15. VERIFY both claims on Day 1. **Plan B:** a Render free Postgres created on **Nov 20** (so it lives through Dec 15) + `npm run db:migrate && npm run db:seed`; the seed is idempotent, so this takes 10 min |
| Scheduler | **cron-job.org** (free) → `POST https://<render-url>/api/cron/tick` every 10 min with header `x-cron-secret` | Render Cron Jobs are not free. The same call keeps the free web service warm. Backup pinger: UptimeRobot free (GET `/api/health` every 5 min) |
| File storage | Postgres `bytea` (≤ 8 MB per file, demo data ≈ 20 MB) | Render Free has no persistent disk |
| Webhooks | Render URL (public HTTPS) | Free services can receive webhooks; PayPal retries if a cold start times out, and reconcile covers any gaps (§5.5) |

Free-tier constraints that change the build:
- **No pre-deploy command on Free** (VERIFY). Run migrations at build time: `buildCommand: npm ci && npm run db:migrate && npm run build`. Seed once from a laptop: `DATABASE_URL=<neon url> npm run db:seed`.
- **512 MB RAM:** no heavy in-process work. sharp is fine; keep uploads ≤ 8 MB; stream PDFs. Do not run Playwright on the server.
- **Cold start:** the landing page must load quickly. The README tells judges: "first load may take ~40 s if the free instance was asleep."
- **Ephemeral filesystem:** never write to disk at runtime except `/tmp` for scratch.

### 11.1 `render.yaml` (Blueprint, free plan, DB external)
```yaml
services:
  - type: web
    name: settle-web
    runtime: node
    region: oregon
    plan: free
    buildCommand: npm ci && npm run db:migrate && npm run build
    startCommand: npm run start -- -p $PORT
    healthCheckPath: /api/health
    autoDeploy: true
    envVars:
      - key: NODE_VERSION
        value: "22"
      - key: DATABASE_URL
        sync: false               # Neon pooled connection string (?sslmode=require)
      - key: PAYPAL_ENV
        value: sandbox
      - key: PAYPAL_CLIENT_ID
        sync: false
      - key: PAYPAL_CLIENT_SECRET
        sync: false
      - key: NEXT_PUBLIC_PAYPAL_CLIENT_ID
        sync: false
      - key: PAYPAL_WEBHOOK_ID
        sync: false
      - key: PAYPAL_INVOICER_EMAIL
        sync: false
      - key: GEMINI_API_KEY
        sync: false
      - key: SESSION_SECRET
        generateValue: true
      - key: CRON_SECRET
        generateValue: true
      - key: APP_URL
        sync: false
      - key: DEMO_MODE
        value: "true"
```
VERIFY the Blueprint field names at https://render.com/docs/blueprint-spec (`plan: free`, `healthCheckPath`).
`scripts/cron-tick.mjs` (kept for local use and as a manual trigger): `await fetch(process.env.APP_URL + "/api/cron/tick", { method: "POST", headers: { "x-cron-secret": process.env.CRON_SECRET } })`, then print the JSON and exit non-zero on failure.
`api/cron/tick` must finish in < 25 s (cron-job.org's timeout is ~30 s): process at most 20 items per tick, ordered by `nextActionAt`.
Drizzle with Neon: use `postgres(DATABASE_URL, { ssl: "require", max: 5, prepare: false })` (pooled endpoint; `prepare:false` for PgBouncer).

### 11.2 Costs
**$0.** Render Free + Neon Free + cron-job.org Free + UptimeRobot Free + Gemini API free tier (VERIFY the rate limits for the chosen models; keep eval runs small and add a 1 s delay between eval items) + PayPal sandbox (free). Do not create any paid resource. If a free limit blocks something, stop and ask Harsh.

### 11.3 Deploy procedure
1. Create the Neon project `settle` (free, region US East or Oregon-adjacent) → copy the **pooled** connection string.
2. Push the repo to GitHub (public).
3. Render Dashboard → New → Blueprint → select the repo → fill the `sync:false` vars (DATABASE_URL = Neon). Plan must show **Free**.
4. Set `APP_URL` = the Render URL, redeploy. Seed from the laptop against Neon.
5. Register the webhook (§5.1 step 5) → set `PAYPAL_WEBHOOK_ID` → redeploy.
6. cron-job.org: create the job (every 10 min, POST, header `x-cron-secret: <CRON_SECRET>`, URL `/api/cron/tick`). UptimeRobot: HTTP monitor on `/api/health` every 5 min.
5. Add a "Deploy to Render" button to the README: `[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/<user>/settle)`.

### 11.4 Stretch: Render Workflows
The hackathon blog names "Render Workflows" for orchestrating agents. On Day 4, if ahead of schedule, VERIFY whether Render Workflows is available with a TypeScript SDK **and a free allowance with no card required** (https://render.com/docs). If it costs anything, skip it. If it is, move the escalation ladder into a durable workflow (one run per claim, sleeping between steps) and keep the cron as a fallback. Otherwise skip it and keep the cron. Do not block on this.

---

## 12. Demo data, judge access, sessions

### 12.1 Seed (`src/lib/db/seed.ts`, idempotent, `--if-empty`)
- Users: Ana (payoutReceiver = ana sandbox email), Dev (IN), Marcus, Priya.
- Claims:
  1. **Ana v. Brightline**: FREELANCE_INVOICE, US-NY, $2,400, status `READY` (facts confirmed, letter drafted), evidence files `public/demo/ana/*` (3 PNG chat screenshots + invoice PDF, created by the executor as realistic mock images using HTML → screenshot with Playwright; fictional names). This is the **live demo** case: it is sent during the video.
  2. **Dev v. Cobalt Ridge Apps**: FREELANCE (GENERIC contract), USD $1,150, `PLAN_ACTIVE`, 1 of 2 installments paid, payout SUCCESS to the IN account (cross-border proof).
  3. **Marcus v. "Harbor Grill LLC"**: UNPAID_WAGES, US-CA, `ESCALATED` step 3.
  4. **Priya v. "Maple Court Properties"**: SECURITY_DEPOSIT, US-CA, `PAID` → `CLOSED_PAID`.
  5. 8–12 more lightweight historical claims (varied statuses and amounts) so the AG Grid docket looks real. They have no PayPal ids (marked `seed`).
- Milestone: **Larkspur logo pack**, $600, `AWAITING_FUNDS`, with 5 criteria (3 PNG; ≥ 2000px; transparent; palette #2E5E4E, #F2C14E, #FBF7F0 ΔE ≤ 12; AI: "the wordmark reads 'Larkspur' and a whisk or wheat motif is present"). The deliverable files `public/demo/larkspur/*` are generated by the executor (simple SVG → PNG via sharp: three logo variants; one failing variant for the revision demo with a 1200px width).
- `scripts/reset-demo.ts`: deletes non-seed rows for demo users and re-seeds (voids or cancels any live PayPal objects it created). The README tells judges they can click "Reset demo" (DEMO_MODE only).

### 12.2 Sessions
`iron-session` cookie `settle_session` = `{ userId }`. `/api/demo-login?as=ana` sets it (DEMO_MODE only). Landing-page buttons call it. No passwords. Portals use 32-byte url-safe random tokens (`tokens.ts`). Demo tokens are fixed in the seed so the README can link `/r/demo-brightline` and `/p/demo-larkspur`.

### 12.3 Judge instructions (README "Try it in 3 minutes")
1. Open the live URL → "Try the demo as Ana".
2. Open claim *Ana v. Brightline* → Send → open the respondent link in a private window → chat "Can I pay in 4 parts over 90 days?" → watch the mandate block it, accept the counter → pay installment 1 with the sandbox buyer **(credentials listed in the README: `judge-buyer` sandbox account email and password; these are sandbox-only test credentials, which the rules explicitly ask entrants to provide)**.
3. Back as Ana: payment in, payout sent, ledger updated.
4. PROTECT: open `/p/demo-larkspur` → Fund (sandbox buyer) → as Ana upload deliverables (sample files button) → see the report → Approve → captured + paid out.
5. Local run: the `npm` steps in the README.

---

## 13. Testing

- **Unit (vitest):** `money.ts`, `rules/calc.ts` (exact demo numbers), `agents/mandate.ts` (≥ 15 cases incl. edge dates and concessions), `rules/citations.ts` validator, state machines (illegal transitions throw), `protect/checks.ts` (fixtures).
- **Integration (vitest, `INTEGRATION=1`):** the PayPal sandbox smoke flow (§5.6) plus `reconcileInvoice` against a real sandbox invoice.
- **E2E (Playwright, `e2e/demo.spec.ts`):** demo login → open claim → send → portal → mediator proposes an in-mandate plan (mock LLM via an `AI_MOCK=1` fixture provider returning recorded responses) → UI states. Keep it to 1 happy path plus 1 mandate-block path.
- **Evals:** §6.4.
- **Pre-submit checklist:** §18.

---

## 14. Execution schedule (6 build days + polish buffer)

Conventions for executor agents:
- One task = one PR-sized commit on branch `main` (solo repo; commit often; messages `feat(scope): …`). Every commit message ends with the attribution line required by the session (Co-Authored-By trailer).
- Before marking a task done: `npm run typecheck && npm run lint && npm test` pass; for UI tasks, open the page with the `run` skill or Playwright and take a screenshot.
- Parallelizable tasks are marked ∥. Use the `superpowers:subagent-driven-development` or `dispatching-parallel-agents` skills to fan out ∥ tasks to separate subagents with **disjoint file ownership** (listed per task).
- Read `AGENTS.md` first. Next.js 16 differs from training data; read the docs in `node_modules/next/dist/docs` when unsure (Hisaab's AGENTS.md rule).

### Day 1 (Mon 26 Oct): foundations and the PayPal spine
- T-01 Harsh: PayPal sandbox setup (§5.1 steps 1–4); Gemini key; GitHub repo `settle` (public, MIT); free accounts on Render, Neon, cron-job.org, UptimeRobot (no card needed; if any asks for a card, skip it and tell the executor).
- T-02 Scaffold: `npx create-next-app@latest settle --ts --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*" --yes`; shadcn init + components (§9.1); add deps (§3.2); `AGENTS.md`, `LICENSE`, `.env.example`, `env.ts`. Files: root, `src/app/layout.tsx`, `src/lib/env.ts`.
- T-03 DB: `schema.ts` (§4), drizzle config, local Postgres (Docker `postgres:16` or a Render DB with an external URL), migrations, `db/index.ts`. Files: `src/lib/db/*`.
- T-04 PayPal lib ∥: `client.ts`, `orders.ts`, `authorizations.ts`, `invoices.ts`, `payouts.ts`, `refunds.ts`, `webhooks.ts`, `types.ts` + `scripts/paypal-smoke.ts`. **Gate: the smoke test passes against the sandbox.** Files: `src/lib/paypal/*`, `scripts/paypal-smoke.ts`.
- T-05 Render ∥: Neon DB, `render.yaml` (free), `/api/health`, `scripts/cron-tick.mjs`, first deploy, webhook registration script + run, cron-job.org + UptimeRobot setup. Files: `render.yaml`, `scripts/*`, `src/app/api/health`.
- T-06 Webhook route + `webhook_events` + `reconcileInvoice` + `payoutForPayment` (idempotent). Files: `src/app/api/webhooks/paypal`, `src/lib/claims/service.ts` (reconcile part).
- **End of Day 1 demo:** a script creates an invoice to brightline. Pay it as brightline in the sandbox invoice page → webhook arrives on Render → payout row SUCCESS to ana.

### Day 2 (Tue 27 Oct): RECOVER intelligence
- T-07 Rules dataset + verification (§7.2) + `calc.ts` + tests. Files: `src/lib/rules/*`, `docs/rules-verification.md`, `tests/calc.test.ts`.
- T-08 ∥ AI core: `model.ts`, `schemas.ts`, `transcribe.ts`, `evidence.ts`, `facts.ts`, `strength.ts`, `letter.ts` + `citations.ts` validator + tests. Files: `src/lib/ai/*`, `src/lib/rules/citations.ts`.
- T-09 ∥ Demo assets: generate Ana's evidence screenshots (HTML mock chat → Playwright screenshot), invoice PDF, eval bundles, Larkspur deliverables (sharp). Files: `public/demo/**`, `scripts/make-demo-assets.ts`.
- T-10 Claim service + state machine + events + file upload API + `/api/ai/*` routes. Files: `src/lib/claims/*`, `src/lib/events.ts`, `src/app/api/ai/*`, `src/app/api/files/*`.
- T-11 PDF letter (`pdf/letter.ts`, pdf-lib, copying `A\src\lib\pdf\generate.ts`) + send route (create + send invoice + QR + portal activation). Files: `src/lib/pdf/*`, `src/app/api/claims/[id]/send`.

### Day 3 (Wed 28 Oct): agents and PROTECT
- T-12 Mandate + `checkProposal` + tests (≥ 15). Files: `src/lib/agents/mandate.ts`, `tests/mandate.test.ts`.
- T-13 Mediator agent + route + tools + invoice series creation. Files: `src/lib/agents/mediator.ts`, `src/app/api/mediator/*`.
- T-14 ∥ Follow-up agent + ladder + cron tick + toolkit wiring + demo time-travel. Files: `src/lib/agents/followup.ts`, `src/lib/claims/ladder.ts`, `src/lib/paypal/toolkit.ts`, `src/app/api/cron/*`.
- T-15 ∥ PROTECT: milestone service, state, `checks.ts`, `criteria.ts`, `acceptance.ts`, deliver/release/contest routes, authorize/capture/void wiring, convert-to-claim. Files: `src/lib/protect/*`, `src/lib/ai/{criteria,acceptance}.ts`, `src/app/api/protect/*`.
- T-16 Orders API routes + JS SDK v6 button component (both intents). Files: `src/app/api/paypal/*`, `src/components/paypal-button.tsx`.

### Day 4 (Thu 29 Oct): product UI
- T-17 Design system + app shell + landing (use `impeccable` skill). Files: `globals.css`, `components/app-shell.tsx`, `app/page.tsx`.
- T-18 ∥ Claim wizard (6 steps) + claim room (timeline, PayPal panel, agent trace). Files: `app/(app)/app/claims/**`, related components.
- T-19 ∥ Respondent portal + mediator chat UI + pay button + dispute upload. Files: `app/r/**`, `components/mediator-chat.tsx`.
- T-20 ∥ PROTECT wizard + milestone room + client portal + acceptance report UI. Files: `app/(app)/app/protect/**`, `app/p/**`, `components/acceptance-report.tsx`.
- T-21 ∥ AG Grid docket + ledger + Ask-your-docket. Files: `components/grids/*`, `app/(app)/app/{docket,ledger}`, `app/api/ai/grid-state`, `lib/ai/grid.ts`.

### Day 5 (Fri 30 Oct): seed, evals, hardening, docs
- T-22 Seed + reset + demo login + fixed tokens. Files: `src/lib/db/seed.ts`, `scripts/reset-demo.ts`, `app/api/demo-login`.
- T-23 Evals (§6.4) + fix prompts until the targets are met. Files: `eval/**`.
- T-24 E2E + full manual run on Render of the judge script (§12.3) + fix bugs (use `superpowers:systematic-debugging`).
- T-25 README (§15) + architecture diagram (`docs/architecture.png`, via the Figma MCP `generate_diagram` or an Excalidraw export) + screenshots.
- T-26 Harsh: record 10 voice takes from the **draft** script (§16.2) so the timing pipeline can start; final takes come Day 6 after the script is locked to the real UI.

### Day 6 (Sat 31 Oct): video
- T-27 Lock the script against the real UI (update §16.2 wording to match labels). Harsh records the final takes `S01..S10`.
- T-28 Audio: clean + whisper words (§16.4).
- T-29 Capture: Playwright scenes paced to the take durations (§16.5).
- T-30 HyperFrames composition + word-keyed overlays + render + QA (§16.6–16.7).

### Buffer (Sun 1 Nov to Tue 10 Nov)
- Polish from self-review against §1; second render if needed; Devpost draft (§15.2) by Nov 3; YouTube upload (public) by Nov 8; **submit by Nov 10**; keep Render alive until Dec 15.

---

## 15. README and Devpost copy

### 15.1 README skeleton (Harsh's house style: italic one-line claim, anchor nav, stack map, honest-status matrix)
```
# Settle
*Get paid what you're owed. Protect the money before the work. Recover it when nobody pays.*
[Live demo](…) · [3-min video](…) · [Try it in 3 minutes](#try-it) · [Architecture](#architecture) · [PayPal integration](#paypal) · [AI](#ai) · [Run locally](#run-locally)

## The problem   (3 sourced stats, §17.1)
## What Settle does   (Protect / Recover, 6 bullets, 2 screenshots)
## Try it in 3 minutes   (§12.3, sandbox buyer credentials)
## How PayPal powers it   (table: surface → endpoint → where in code)
## How AI powers it   (table: task → model → guardrail → eval result)
## Agentic commerce, with a leash   (mandate diagram + the "Blocked by mandate" screenshot)
## Architecture   (diagram, Render services)
## Run locally   (prereqs, env, `npm i`, `npm run db:migrate`, `npm run db:seed`, `npm run dev`, cloudflared webhook)
## Tools used   (Gemini via AI SDK, PayPal Agent Toolkit, AG Grid Enterprise + AI Toolkit, Render; plus Claude Code was used to build. State this honestly.)
## Responsible design   (not a law firm, verified rules list, data handling, mandate enforcement in code)
## Honest status   (matrix: built / partial / not built, e.g. "Commerce Platform multiparty: not built")
## Production path
## License   MIT
```
In the GitHub repo **About** section: description + website = the Render URL + topics `paypal, gemini, ai-agents, agentic-commerce, ag-grid, render, nextjs`. The license must show in About (it is auto-detected from `LICENSE`).

### 15.2 Devpost fields (draft; finalise after the build)
- **Name:** Settle. **Tagline:** "AI that gets freelancers and workers paid: hold funds until the work checks out, or turn an unpaid bill into a PayPal invoice with a negotiator that can't overstep."
- **Inspiration / What it does / How we built it / Challenges / Accomplishments / What we learned / What's next:** write ~600 words total, reusing README sections; include the eval numbers and the PayPal surface list.
- **Built with:** paypal-js-sdk-v6, paypal-orders-v2, paypal-invoicing, paypal-payouts, paypal-agent-toolkit, gemini, vercel-ai-sdk, ag-grid, render, postgresql, drizzle, next.js, typescript.
- **Tools section** (required): a list of each AI tool and how it was used (Gemini tasks; AG Grid AI Toolkit; PayPal Agent Toolkit; Claude Code as the development assistant).
- **Try it:** the Render URL + GitHub + sandbox credentials note.

---

## 16. Demo video (≤ 2:55 final; hard cap 2:59)

### 16.1 Principles (from Harsh's previous briefs)
No em dashes, no hype words, every stat sourced on screen (small caption), real product footage (no faked UI), word-synced overlays, total < 3:00, no copyrighted music (use a generated or royalty-free bed via the `media-use` skill, or no music). PayPal checkout appears naturally because it is the required integration. Do not add other brands' logos.

### 16.2 Draft narration (≈ 390 words ≈ 2:40 at 146 wpm; lock wording on Day 6)
**S01 Hook (0:00–0:14, 34 words), visual: black → Ana's chat screenshot "Will pay next week 🙏" stamped *47 days ago*.**
"This is Ana. She's an illustrator in Brooklyn. Forty-seven days ago a client promised to pay her twenty-four hundred dollars next week. Most freelancers have a message like this. Few ever collect."

**S02 Problem + audience (0:14–0:30, 38 words), visual: 3 sourced stat cards.**
"Chasing a bill is slow, awkward, and nobody tells you your rights. Lawyers cost more than the debt. So people give up. Settle is for freelancers, hourly workers, and tenants who are owed money."

**S03 What Settle is (0:30–0:40, 24 words), visual: landing page, the Protect / Recover cards.**
"Settle does two things. It protects money before the work starts. And it recovers money when someone doesn't pay. PayPal moves every dollar."

**S04 Recover: evidence → facts (0:40–1:00, 46 words), live footage: upload screenshots and invoice, AI chips appear, fact list with quotes.**
"Ana drops in her screenshots and invoice. Gemini reads them and pulls out the facts, each one quoted from her evidence. Here, the client admits the work was delivered. If something is missing, like a due date, Settle asks."

**S05 Rules + letter (1:00–1:20, 44 words), footage: breakdown with rule cards, letter preview, green "citations verified" badge.**
"Then a rule engine, not the AI, does the math under New York's Freelance Isn't Free Act. The AI drafts the letter, but it can only cite rules we've verified, and every number must match. Ana sets her limits, and sends."

**S06 PayPal invoice + respondent (1:20–1:38, 40 words), footage: PayPal panel (invoice SENT, QR), switch to the respondent portal on a phone frame.**
"Sending creates a real PayPal invoice with partial payments switched on. The client gets the letter, the invoice, and a link where they can pay, dispute, or talk to Settle's mediator."

**S07 Mediator + mandate (1:38–2:02, 54 words), footage: chat "Can I do four payments over ninety days?" → trace shows propose_plan → red "Blocked by mandate" → counter → accepted → 3 invoices created.**
"The client asks for four payments over ninety days. The mediator is an AI agent, but it can only offer what Ana allowed, and the code checks every offer. Four payments is blocked. It counters with three over sixty days. The client accepts, and Settle creates the PayPal payment plan."

**S08 Money moves (2:02–2:16, 32 words), footage: PayPal sandbox approval popup → paid → webhook event in the trace → Payout SUCCESS → Ana's KPI "Recovered $800".**
"The first payment goes through PayPal. A webhook lands, and Settle pays Ana out instantly with PayPal Payouts. If the next payment is late, a follow-up agent sends the reminder."

**S09 Protect (2:16–2:38, 50 words), footage: client funds the $600 milestone (authorize) → Ana uploads logos → acceptance report (one fail: 1200px; revision; all pass) → Approve → captured → payout.**
"For new clients, Ana uses Protect. The bakery funds six hundred dollars, held by PayPal and not charged. Ana delivers. Settle checks the work against the agreed criteria: size, transparency, colors, and the wordmark. When it passes and the client approves, the money is captured and paid out."

**S10 Close (2:38–2:52, 30 words), visual: AG Grid docket "Ask your docket" query, then the end card (URL, GitHub, "Built with PayPal sandbox, Gemini, AG Grid, Render").**
"Every case, payment and payout sits in one docket you can question in plain English. Settle. Get paid what you're owed. It's open source, and live to try today."

### 16.3 Recording instructions for Harsh
- One take per scene: `S01.wav … S10.wav` (or `.mp3`/`.m4a`). Quiet room, phone 15 cm away, 2 s of silence before and after. Natural pace; let numbers land.
- Pronunciation: "twenty-four hundred", "Gemini" (JEM-in-eye), "Settle".
- Drop the files in `video/assets/voice/raw/`.

### 16.4 Audio pipeline: reuse `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\eurogrip-case\video\tools\audio.py`
- Copy it to `settle/video/tools/audio.py`. Change `PROMPT` to `"Settle, PayPal, Gemini, Brightline, Larkspur, Freelance Isn't Free Act, mandate, payout, AG Grid, Render."`. Change the limit from `119.5` to **`176.0`** (the total including pads must stay under ~2:56). Scenes come from `video/scenes.json` (10 scenes).
- Run `python tools/audio.py` → `assets/voice/S0n.wav` (−16 LUFS, 48 kHz) + `assets/voice/words.json`; exit code 2 means too long, so trim the script.

### 16.5 Screen capture: adapt `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform\demo-video\tools\capture.mjs`
- Copy `capture.mjs` (Recorder with CDP `Page.startScreencast`, injected cursor and click ripple, `at(sec)` pacing) and `assemble-clips.mjs` into `settle/video/tools/`. Read the take durations from `assets/voice/words.json` (`duration`) instead of `vo/durations.json`.
- Viewport 1920×1080, `deviceScaleFactor: 1`; target `APP_URL` = **local production build** (`npm run build && npm start`) against the sandbox, for speed and stability. The URL bar overlay shows the Render URL (as SwasthyaGrid did).
- **PayPal popup:** listen for `context.on("page")`, attach a second Recorder to the popup, and log the sandbox buyer in from env vars `SANDBOX_BUYER_EMAIL` / `SANDBOX_BUYER_PASSWORD` (in a gitignored `video/.env.capture`). If automation of the popup is flaky, record that scene manually with OBS (1080p, 30 fps) and trim.
- Before each scene, run `npm run demo:reset` + scene-specific prep (`video/tools/prep-state.ts`): e.g. S07 requires claim SENT; S08 requires plan ACTIVE. Use `AI_MOCK=0` (real Gemini) but keep the recorded fallback responses ready in case of latency spikes. Prefer real calls; the trace must show real ids.
- Scenes with a mobile frame (S06) use a 430×932 viewport recorded separately and composited into a phone frame in HyperFrames.
- Output: `capture/clips/S0n.mp4` (30 fps) + `events.json` with element boxes for callouts.

### 16.6 Composition: HyperFrames (reuse the `next-signal-bits/video` layout + Eurogrip's word-keyed `build.py`)
- `settle/video/` structure: `BRIEF.md, SCRIPT.md, STORYBOARD.md, frame.md, hyperframes.json, package.json (npx hyperframes@0.8.181 dev|check|render), index.html, compositions/frames/S01..S10.html, assets/{voice,footage,music}, tools/, renders/`.
- Copy `eurogrip-case/video/tools/build.py` and adapt its event vocabulary for footage scenes: `{"do":"callout","box":"<events.json mark>","at":"<spoken word>"}`, `{"do":"zoom","rect":[...],"at":"mediator"}`, `{"do":"stamp","text":"BLOCKED BY MANDATE","at":"blocked"}`, `{"do":"stat","id":"s2_stat1","at":"lawyers"}`. Scene length = head pad 0.25 + take + tail pad 0.35 (as in Eurogrip).
- Invoke the `hyperframes` skill first (mandatory entry point), then `hyperframes-core` and `hyperframes-animation` for composition rules (paused GSAP timelines, `data-start`/`data-duration`, tracks: video 0, voice 20, music 30).
- Design tokens in `frame.md` match the app (§9.1): paper background for cards, ink text, accent blue, stamp styles.
- Music: optional low bed at −24 LUFS ducked under the voice (`hyperframes-audio` skill), source from `media-use` (royalty-free) or none.
- Captions: burned-in, short (≤ 7 words per line), synced from `words.json`, bottom safe zone.

### 16.7 QA and delivery
`npx hyperframes check` → render 1920×1080 30 fps → adapt SwasthyaGrid `tools/qa.mjs` checks (duration < 2:59, −14 ± 2 LUFS, no black or frozen frames) → contact sheet → Harsh watches it fully → upload to YouTube **Public** (title "Settle: get paid what you're owed (PayPal AI Hackathon)", description with links + timestamps + the stat sources) → paste the link into Devpost.

---

## 17. Research tasks (Day 2, parallel with T-07)

### 17.1 Impact stats: each must be VERIFIED from the primary source before use (README + video)
- US wage theft scale: Economic Policy Institute 2017 "Employers steal billions from workers' paychecks each year" (~$15B/yr minimum-wage violations estimate). VERIFY the exact figure and scope wording.
- Freelancer non-payment: Freelancers Union "Freelancing in America" / FIFA campaign figures (e.g., the share who struggled to collect payment, and the average unpaid amount). VERIFY the year and number.
- NY FIFA statewide effective date (28 Aug 2024) and NYC FIFA (2017), from NY DOL / NYC DCWP pages.
- Optional: DCWP FIFA enforcement data (complaints and amounts recovered).
- If a stat can't be verified from a primary source, **don't use it**.

### 17.2 Product-claim checks
- Confirm no on-screen or README claim implies legal representation.
- Confirm PayPal's sandbox emails: invoices send "emails" visible under Sandbox → Notifications. Use that in the README to explain where judges can see them.

---

## 18. Verification (end-to-end) and submission checklist

**Functional (on the Render URL, fresh browser):**
- [ ] `/api/health` → `{ ok: true, db: true, paypal: true }`.
- [ ] Judge script §12.3 steps 1–4 complete without errors.
- [ ] The webhook for the invoice payment arrives (the trace shows `paypal.webhook INVOICING.INVOICE.PAID` or `UPDATED`) **and** reconcile alone (webhook disabled) also completes the flow.
- [ ] Payout status SUCCESS visible in the ledger with the payout_batch_id; the sandbox `ana` account shows the received money (check sandbox.paypal.com as ana).
- [ ] The mediator refuses 4 installments / 90 days (the trace shows the `propose_plan` rejection) and the created invoices match the accepted plan in the PayPal sandbox dashboard.
- [ ] PROTECT: authorization CREATED → report PASS → capture COMPLETED → payout SUCCESS; the cancel path voids the authorization.
- [ ] Ask-your-docket: the 4 suggested chips each change the grid correctly.
- [ ] Cron: the cron-job.org history shows 200s; ladder time-travel works; a cold start (after 20 min idle with pingers paused) still loads in < 60 s.
- [ ] `npm test`, `npm run eval` meet the targets in §6.4; the results are committed.
- [ ] Reset demo restores the seed state.

**Submission (Devpost, by 10 Nov):**
- [ ] Public GitHub repo, MIT `LICENSE` detected in About, README complete with run instructions + sandbox test credentials (sandbox only) + env var list.
- [ ] Hosted URL works on Render Free; Neon DB alive; pingers running through Dec 15 (calendar reminder for Harsh on Dec 1 to open the URL and check it).
- [ ] Video < 3:00, public on YouTube, shows the product working, no third-party copyrighted music or marks.
- [ ] Text description + Tools section + "Built with" filled.
- [ ] Opt into the sponsor prize eligibility questions if the Devpost form asks (AG Grid, Render).
- [ ] Submitted (not just saved as a draft) before **12 Nov 2026 12:00 PM PT**.

---

## 19. Patterns to borrow from Hisaab and Adhikaar (from the code survey)
`H = C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\fintech` (Hisaab), `A = C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\adhikaar`. **Read these files; copy the pattern, not the domain.** Neither project has PayPal code, upload components or Gemini structured output; those are new.

| Borrow | From | Into Settle | How |
|---|---|---|---|
| Gemini fallback chain, `thinkingLevel LOW`, typed errors, 503 when unconfigured | `H\src\lib\gemini\client.ts` | `src/lib/ai/model.ts` | Same behaviour, on the AI SDK (§6.1) |
| Tool dispatch with zod-parsed args returning `{ok:false}`; `MAX_TOOL_ROUNDS`; templated summaries so **the model never computes money** | `H\src\lib\agent\dispatch.ts`, `H\src\app\api\chat\route.ts` | `src/lib/agents/*` | Each tool returns `{ ok, data, summary }`; the summary is built by code |
| Deterministic triage (rule chosen by code, auditable) | `A\src\lib\remedy.ts` (`RemedyRule{remedyClass,keywords,forumName,limitationPeriod,guidanceNote,citationIds}`; labour + tenancy rules) | `src/lib/rules/index.ts` `selectRules(claim, facts)` | Rules chosen by claim type + jurisdiction + facts, never by the LLM |
| Statute corpus with ids + source URL | `A\src\lib\data\rti-act.ts`, `A\src\lib\data\corpus.ts` (`CorpusChunk{id,act,section,heading,text,note?,sourceUrl}`) | `src/lib/rules/{ny,ca,federal,generic}.ts` | Extend with `remedy`, `verifiedOn`. Keep `text` short (summaries in our words, §7.2) |
| Citation gate + chip | `A\src\lib\citations.ts`, `A\src\components\CitationTag.tsx` | `src/lib/rules/citations.ts`, `src/components/rule-card.tsx` | Unknown id renders a red `[unresolved: id]` marker; tests assert every rule id resolves |
| "AI next to source, never instead of it" | `A\src\lib\rights\answer.ts`, `A\src\components\PolishRewriteButton.tsx` | Fact list (quote beside fact), letter (Legal basis block beside prose) | |
| PDF letter | `A\src\lib\pdf\generate.ts` + `A\src\app\api\cases\[id]\pdf\route.ts` | `src/lib/pdf/letter.ts`, `src/app/api/claims/[id]/letter.pdf/route.ts` | pdf-lib; `NextResponse(Buffer.from(bytes), {headers:{"Content-Type":"application/pdf","Content-Disposition":"attachment; filename=settle-demand-<short>.pdf"}})` |
| Deadline sweep with cron secret | `A\src\lib\deadlines.ts`, `sweep.ts`; `A\vercel.json` cron | `src/lib/claims/ladder.ts`, `api/cron/tick` | Same CRON_SECRET header check |
| Seeded deterministic demo data (mulberry32 PRNG, documented defects + ground truth) | `H\scripts\generate-dataset.ts`, `H\src\lib\seed\prng.ts` | `src/lib/db/seed.ts`, eval bundles | `SEED = 20261026` |
| Eval runner style (plain `tsx`, prints metrics + "Reading:" caveat + honesty check) | `H\eval\run.ts`, `A\eval\run.ts` | `eval/run.ts` | |
| Design: shadcn `radix-nova`, Inter + JetBrains Mono `.tabular-figures` for money, **2px radius**, status colours reserved for decision state | `H\components.json`, `H\src\app\globals.css` | `components.json`, `globals.css` | Settle's tokens (§9.1) replace Hisaab's navy; heading serif `Newsreader` (Adhikaar used Fraunces; choose Newsreader to look distinct) |
| UI pieces | `H\src\components\kpi\KpiTile.tsx`, `H\src\components\charts\AgingStack*` (receivables aging, good for the claim home), `H\src\components\recon\AuditDrawer.tsx` (vaul right drawer, reuse for the agent-trace drawer), `H\src\components\shell\{AppSidebar,MethodologySheet}.tsx`, `A\src\components\{StatusChip,SubmitButton,VoiceDictationButton}.tsx`, `A\src\components\interview\StepShell.tsx` (wizard step layout), `A\src\components\landing\{Reveal,CountUp}.tsx` | `src/components/*` | Copy, restyle to Settle tokens, delete unused props |
| Voice intake (low-cost) | `A\src\components\VoiceDictationButton.tsx` (Web Speech API, EN/HI toggle, hides itself when unsupported) | `src/components/voice-recorder.tsx` | Use dictation first; the Gemini audio transcription (§6.3 #1) is the fallback for uploaded voice notes |
| Next.js 16 guard | `H\AGENTS.md` (+ `CLAUDE.md` = `@AGENTS.md`) | repo root | Copy verbatim, then append Settle rules: money in minor units; never trust client amounts; every PayPal money call has a requestId; the LLM never computes money or authors citations |
| CI | `H\.github\workflows\ci.yml` (Node 24: npm ci, lint, test, build, empty secrets) + `verify` script (`lint && typecheck && test && build`) | `.github/workflows/ci.yml`, `package.json` | |
| Next config | `H\next.config.ts` (`turbopack.root: path.resolve(__dirname)`) | `next.config.ts` | Needed because a stray lockfile sits higher in `WEB-DEV-PROJECTS` |

**Do not copy:** Firestore/file store (Settle uses Postgres via Drizzle), Sarvam voice, the Groq/OpenRouter fallbacks (Gemini only, per the user), Adhikaar's Firebase auth.

---

## 20. Risks and fallbacks
| Risk | Fallback |
|---|---|
| Payouts not enabled in sandbox | §5.6; ask Discord Day 1; `PAYOUTS_MODE=simulate` shown honestly |
| JS SDK v6 issues | v5 Buttons behind the same component (§5.7) |
| Sandbox webhooks slow or missing | Reconcile on cron, page load and button (§5.5) |
| Gemini rejects the AG Grid JSON schema | Free-JSON + ajv + retry (§10.3) |
| Gemini latency during capture | Capture locally; warm up calls; recorded fallbacks |
| Partial-payment webhook semantics unclear | Reconcile reads `payments.transactions` (source of truth) |
| Invoice field rejected | Remove the field, log it in `docs/paypal-notes.md` |
| Statute details wrong | §7.2 verification; delete unverifiable rules |
| Render Free sleeps | cron-job.org + UptimeRobot pingers; README cold-start note; reconcile on page load |
| Free Postgres expires | Neon Free (no expiry); Plan B: Render free DB created Nov 20 + reseed (§11.0) |
| Gemini free-tier rate limits | Fallback chain; small evals with delays; capture video locally with warm-up |
| Scope creep | Cut order if behind: Ask-PayPal copilot → Render Workflows → dispute issues list → small-claims packet PDF (keep a JSON summary) → voice intake. **Never cut:** invoice → mediator → payment → payout, PROTECT authorize → check → capture → payout, AG Grid docket + Ask, video. |
