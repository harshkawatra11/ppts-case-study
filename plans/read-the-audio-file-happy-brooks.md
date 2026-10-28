# People Stack — HRIS on AWS + one-click access provisioning (EXECUTION PLAN)

> This plan is written for **Sonnet-class subagents** to execute with little thinking.
> Code blocks are meant to be copied **verbatim**. Where a choice exists, it has already been made.
> If something in this plan is impossible (e.g. an API rejects a param), apply the documented fallback in
> §15 Troubleshooting; if none fits, STOP and report the exact error to the orchestrator. Do not redesign.

---

## 0. How to execute this plan (orchestrator = main Opus session)

### 0.1 Waves
| Wave | Task | Who | Depends on | Parallel? |
|---|---|---|---|---|
| 0 | **T0** AWS Agent Toolkit setup + login | main session (needs the user for browser sign-in) | – | – |
| 1 | **T1** Repo scaffold + foundation code + `npm install` | 1 Sonnet agent | T0 not required | – |
| 2 | **T2A** Backend: API + Ashby webhook + services + tests | Sonnet | T1 | yes |
| 2 | **T2B** Backend: connectors + workflow runner + tests | Sonnet | T1 | yes |
| 2 | **T3** Infra (AWS CDK) | Sonnet | T1 | yes |
| 2 | **T4** Frontend ("workbook" UI) | Sonnet | T1 | yes |
| 2 | **T5** Design doc: JumpCloud vs Google + architecture | Sonnet (web research) | – | yes |
| 3 | **T6a** Integration check (typecheck, tests, build, synth) + fix loop | main session (dispatch Sonnet fixers with exact errors) | wave 2 | – |
| 4 | **T6b** Deploy to AWS + smoke tests + seed | main session | T0, T6a | – |
| 5 | **T7** Browser QA of the deployed UI (Claude in Chrome) + fixes | main session (+ Sonnet fixer) | T6b | – |
| 6 | **T8** Publish design doc as Artifact, final report to user | main session | T5, T6b | – |

### 0.2 Subagent dispatch template (use `Agent` tool, `model: "sonnet"`, `subagent_type: "general-purpose"`)
```
You are executing task <TASK-ID> of the plan at
C:\Users\harsh\.claude\plans\read-the-audio-file-happy-brooks.md
Read sections 0, 1, 2, 3, 4 and the full section for <TASK-ID> before doing anything.
Project root: C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\dash-mng-adas
Rules:
- Create/modify ONLY the files listed under "Files owned" for <TASK-ID>.
- Copy code blocks verbatim. Do not rename exports, files, routes or fields.
- Do NOT run `npm install`/`npm i` (all deps are installed in T1). If a dependency is missing, stop and report.
- Shell is Windows. Prefer the PowerShell tool; quote paths with spaces.
- Run the "Acceptance" commands at the end; fix only issues inside your owned files.
- Final message: list files written, acceptance command outputs (pass/fail), and any deviations with reasons.
```

### 0.3 Global rules for every agent
1. Windows 11, PowerShell 5.1 + Git Bash available. Node **v24.15.0**, npm 11.12.1. AWS CLI v2.38.5 at `C:\Program Files\Amazon\AWSCLIV2\aws.exe` (**not on PATH** in agent shells — always call it by full path, e.g. `& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" sts get-caller-identity`).
2. Region for all resources: **ap-southeast-2**. AWS profile: **default**.
3. Never print secrets (admin key, Ashby secret, Google key) into chat or logs. Never log salary or personal emails in Lambda logs.
4. TypeScript everywhere, `strict: true`. No `any` except where this plan writes it.
5. No new dependencies beyond §4.2. Exact versions are pinned.
6. Commits: the orchestrator commits locally after each wave (`git add -A && git commit`), message ending with
   `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. Subagents never commit. Never push (no remote exists).

---

## 1. Context (from the boss's voice note, transcribed with local Whisper)

The company is building a **"people stack"**:
- **ATS = Ashby** (live this week). Ashby must call our system via **webhook** when a candidate is hired / accepts an offer.
- **Payroll = RazorpayX** (already in place; integration is out of scope for this round).
- **HRIS = we build it.** A database + front end of all people: who they are, when they joined, what they earn, etc.
  - Hire in Ashby → webhook → person auto-created in HRIS.
  - **One click "Onboard"** → they get access to everything: Google Workspace (email), Slack, Notion, ~10 more apps
    (the boss will share a sheet listing them) + documentation/mails.
  - **One click "Offboard"** → all access revoked.
- Rippling is ruled out. Evaluate **JumpCloud** vs **Google Workspace's built-in groups** for access provisioning,
  and come to the next chat with a system design.

User constraints (this session):
- Backend **entirely on AWS**, region **ap-southeast-2**; frontend **also on AWS**.
- UI = **interactive Excel workbook** feel, **whiteboard-clean professional** design, detailed UI plan.
- **Proper authentication comes later** (after the app is complete). For now: a temporary shared access key.
- Deliverables this round: **design doc (published) + working HRIS MVP deployed**.

---

## 2. Locked decisions
| Topic | Decision |
|---|---|
| IaC | AWS CDK v2 (TypeScript), single stack `PeopleStack` |
| Compute | Lambda Node.js 24 (`NODEJS_24_X`), ARM64, bundled by `NodejsFunction` with local esbuild (no Docker) |
| API | API Gateway **HTTP API** (payload v2), routes under `/api/*` |
| Workflows | **Step Functions** Standard: Phase1 Map → Phase2 Map → Finalize (retries + catch) |
| DB | DynamoDB single table `people-stack` (PK/SK + GSI1), on-demand, PITR on, deletion protection, RETAIN |
| Secrets | Secrets Manager: `people-stack/integrations` (JSON, created by CLI, referenced by CDK) and `people-stack/admin-api-key` (generated by CDK) |
| Frontend hosting | S3 (private) + CloudFront (OAC). CloudFront also proxies `/api/*` to the HTTP API → same origin, no CORS |
| Frontend stack | React 19 + Vite 8 + TypeScript + AG Grid Community 36 (Theming API) + TanStack Query 5 + lucide-react, plain CSS with tokens |
| Temporary auth | Header `x-hris-key` must equal the admin-api-key secret (UI asks once, stores in localStorage). Ashby webhook uses HMAC instead |
| Identity order | Onboard: identity apps (Google account / JumpCloud) **first**, then everything else. Offboard: everything else first, identity **last** |
| Connectors | `google_workspace` (real), `google_group` (real), `scim` (generic SCIM 2.0: Slack/Notion/etc. when plan supports SCIM), `jumpcloud` (real, disabled by default until decided), `manual` (checklist task) |
| Ashby events | Primary: `candidateHire` (contains application + accepted offer). Secondary: `offerUpdate`/`offerCreate` with `acceptanceStatus === "Accepted"` (needs Ashby API key). Dedupe on `webhookActionId`, idempotent on `application.id` |
| Testing | Vitest (backend unit tests); browser QA via Claude in Chrome |

---

## 3. Architecture

```
                         ┌──────────────────────── CloudFront (https://dXXXX.cloudfront.net) ───────────────────────┐
 Browser (HR) ──────────▶│  /*      → S3 bucket (React build)  [viewer-request fn: SPA rewrite to /index.html]      │
                         │  /api/*  → API Gateway HTTP API (no cache, all headers except Host forwarded)              │
 Ashby ─────webhook─────▶│  /api/webhooks/ashby                                                                      │
                         └───────────────────────────────────────────────────────────────────────────────────────────┘
 HTTP API routes:
   POST /api/webhooks/ashby  → Lambda AshbyWebhookFn  (HMAC verify → dedupe → upsert Employee)
   ANY  /api/{proxy+}        → Lambda ApiFn           (x-hris-key check → router → services)
 ApiFn ──StartExecution──▶ Step Functions "people-stack-access"
      input {operation:"onboard"|"offboard", employeeId, phase1:[appId], phase2:[appId]}
      Phase1 Map (maxConc 4) ─▶ Phase2 Map (maxConc 4) ─▶ Finalize
      each item: Lambda RunnerFn {mode, employeeId, appId}  → connector.provision/deprovision
                 retry on RetryableError (10s, x2, 5 attempts) → catch → RunnerFn {mode:"fail"}
      Map failure → catch → RunnerFn {mode:"finalize", workflowError}
 All Lambdas ─▶ DynamoDB "people-stack"  ·  Secrets Manager "people-stack/integrations"
 Connectors ─▶ Google Admin SDK (Directory + Data Transfer) · SCIM 2.0 endpoints · JumpCloud API
```

### 3.1 DynamoDB item design (table `people-stack`, keys `PK`,`SK`; index `GSI1` on `GSI1PK`,`GSI1SK`; TTL attr `ttl`)
| Entity | PK | SK | GSI1PK | GSI1SK | Notes |
|---|---|---|---|---|---|
| Employee | `EMP#<id>` | `PROFILE` | `EMP` | `<createdAt>` | id = ULID |
| Grant | `EMP#<empId>` | `GRANT#<appId>` | `GRANT` | `<empId>#<appId>` | may hold `oneTimeSecret` (never returned by list APIs) |
| Audit | `EMP#<empId>` or `SYSTEM` | `AUDIT#<ts>#<ulid>` | `AUDIT` | `<ts>#<ulid>` | immutable |
| App | `APP#<id>` | `META` | `APP` | `<lowercased name>` | catalog |
| Ashby link | `ASHBYAPP#<applicationId>` | `LINK` | – | – | `employeeId`; makes intake idempotent |
| Webhook dedupe | `WEBHOOK#<webhookActionId>` | `SEEN` | – | – | `ttl` = now + 30 days |

### 3.2 State machines (business)
- Employee.status: `offer_accepted → onboarding → active → offboarding → exited`.
  Offboarding with nothing to revoke goes straight to `exited`.
- Grant.status: `pending → provisioning → active | manual_pending | failed`;
  `revoking → revoked | manual_revoke_pending | revoke_failed`; manual tasks → `active`/`revoked` via "Mark done".

### 3.3 REST API (all JSON; success `{ "data": ... }`, error `{ "error": { "message", "code", "details?" } }`)
| Method | Path | Body / query | Returns | Status |
|---|---|---|---|---|
| GET | `/api/health` (no key) | – | `{ok:true}` | 200 |
| GET | `/api/meta` | – | `Meta` | 200 |
| GET | `/api/people` | – | `Employee[]` | 200 |
| POST | `/api/people` | `PersonCreateBody` | `Employee` | 201 |
| GET | `/api/people/{id}` | – | `PersonBundle` | 200 |
| PATCH | `/api/people/{id}` | `PersonPatchBody` | `Employee` | 200 |
| GET | `/api/people/{id}/preview` | `?operation=onboard\|offboard` | `PreviewItem[]` | 200 |
| POST | `/api/people/{id}/onboard` | `{appIds:string[]}` | `{executionArn}` | 202 |
| POST | `/api/people/{id}/offboard` | `{appIds:string[], endDate?:"YYYY-MM-DD"}` | `{executionArn: string\|null}` | 202 |
| POST | `/api/people/{id}/grants/{appId}/complete` | – | `{status, accessSummary}` | 200 |
| POST | `/api/people/{id}/grants/{appId}/retry` | – | `{executionArn}` | 202 |
| POST | `/api/people/{id}/grants/{appId}/reveal-secret` | – | `{secret}` | 200 |
| GET | `/api/apps` | – | `AppDef[]` | 200 |
| POST | `/api/apps` | `AppCreateBody` | `AppDef` | 201 |
| PATCH | `/api/apps/{id}` | `AppPatchBody` | `AppDef` | 200 |
| DELETE | `/api/apps/{id}` | – | `{deleted:true}` | 200 |
| GET | `/api/grants` | – | `Grant[]` | 200 |
| GET | `/api/audit` | `?limit=1..1000` (default 300) | `AuditEvent[]` newest first | 200 |
| POST | `/api/webhooks/ashby` | Ashby payload, header `Ashby-Signature: sha256=<hex>` | `{ok:true,...}` | 200/401/503/500 |

---

## 4. Repository layout and versions

### 4.1 File tree (owner task in brackets)
```
dash-mng-adas/
├─ .gitignore                                   [T1]
├─ package.json                                 [T1]  npm workspaces root
├─ tsconfig.base.json                           [T1]
├─ CLAUDE.md                                    [T0 creates rules block; T1 prepends project section]
├─ docs/
│  ├─ people-stack-design.md                    [T5]
│  ├─ runbook.md                                [T6b]
│  └─ integrations.secret.example.json          [T1]
├─ scripts/
│  ├─ with-aws.ps1                              [T1]
│  ├─ seed.ts                                   [T1]
│  ├─ send-ashby-sample.ts                      [T1]
│  └─ samples/candidateHire.json                [T1]
├─ backend/
│  ├─ package.json, tsconfig.json, vitest.config.ts          [T1]
│  ├─ src/shared/types.ts                                    [T1]
│  ├─ src/lib/{errors,ddb,repo,secrets,http,names,respond,auth,ashby}.ts   [T1]
│  ├─ src/services/access.ts                                 [T1]
│  ├─ src/services/{ashbyIntake,people,workflow,apps}.ts     [T2A]
│  ├─ src/handlers/{api,ashbyWebhook}.ts                     [T2A]
│  ├─ src/connectors/{types,index,googleAuth,googleWorkspace,googleGroup,scim,jumpcloud,manual}.ts [T2B]
│  ├─ src/handlers/runner.ts                                 [T2B]
│  └─ test/
│     ├─ ashbySignature.test.ts, ashbyMapping.test.ts, webhook.test.ts, workflow.test.ts   [T2A]
│     └─ connectors.google.test.ts, connectors.scim.test.ts, runner.test.ts                [T2B]
├─ infra/
│  ├─ package.json, tsconfig.json, cdk.json     [T1]
│  ├─ bin/app.ts                                [T3]
│  └─ lib/people-stack.ts                       [T3]
└─ frontend/
   ├─ package.json, tsconfig.json, vite.config.ts, index.html   [T1]
   ├─ src/api/types.ts  (verbatim copy of backend/src/shared/types.ts)  [T1]
   └─ src/** (everything else)                  [T4]
```

### 4.2 Pinned versions (verified on npm on 2026-10-23)
Root devDependencies: `typescript@5.9.3`, `esbuild@0.28.2`, `tsx@4.23.15`, `@types/node@24.19.2`
Backend: `@aws-sdk/client-dynamodb@3.1156.0`, `@aws-sdk/lib-dynamodb@3.1156.0`, `@aws-sdk/client-sfn@3.1156.0`,
`@aws-sdk/client-secrets-manager@3.1156.0`, `google-auth-library@11.3.1`, `ulid@3.0.2`, `zod@4.6.7`;
dev: `@types/aws-lambda@8.10.164`, `vitest@5.0.5`
Infra: `aws-cdk-lib@2.274.0`, `constructs@10.8.1`; dev: `aws-cdk@2.1146.1`
Frontend: `react@19.3.1`, `react-dom@19.3.1`, `ag-grid-community@36.2.0`, `ag-grid-react@36.2.0`,
`@tanstack/react-query@5.104.5`, `lucide-react@1.61.0`, `@fontsource-variable/inter@5.3.0`, `@fontsource/jetbrains-mono@5.3.0`;
dev: `vite@8.3.5`, `@vitejs/plugin-react@6.1.2`, `@types/react@19.3.0`, `@types/react-dom@19.3.0`

Verified API facts (do not re-research): CDK 2.274 has `lambda.Runtime.NODEJS_24_X`, `origins.S3BucketOrigin.withOriginAccessControl`,
`sfn.Map#itemProcessor`, `Table.pointInTimeRecoverySpecification`. google-auth-library 11 `new JWT({email,key,scopes,subject})`.
AG Grid 36: `readOnlyEdit`, `onCellEditRequest`, `onCellFocused`, `selectionColumnDef`, `rowSelection` object API, `theme` prop
with `themeQuartz.withPart(iconSetQuartzLight).withParams({...})`, `ModuleRegistry.registerModules([AllCommunityModule])`,
`api.getCellValue`, `api.exportDataAsCsv({columnKeys})`, `api.isDestroyed()`, `cellDataType:'dateString'|'boolean'|'number'|'text'`,
`agSelectCellEditor`, `agLargeTextCellEditor` + `cellEditorPopup`, `CustomCellRendererProps` (from `ag-grid-react`).
There is **no** `type:'rightAligned'` — use the CSS class `num`.

---

## 5. T0 — AWS Agent Toolkit setup (main session, with the user)

Follow https://raw.githubusercontent.com/aws/agent-toolkit-for-aws/refs/heads/main/setup-instructions/setup.md (already read; steps below).
Inputs fixed: profile `default`, experience **new AWS experience** (say "project", not "account", to the user), region `ap-southeast-2`.
`$aws = "C:\Program Files\Amazon\AWSCLIV2\aws.exe"`. `uv` is already installed (`C:\Users\harsh\AppData\Local\hermes\bin\uv.exe`).

1. `& $aws configure set region ap-southeast-2 --profile default`
2. `& $aws login --region ap-southeast-2 --profile default` — run with timeout 600000. Tell the user a browser window will open to sign in to their AWS project
   (credentials last 12h, renewable for 90 days without re-auth). If the tool cannot complete the browser flow,
   ask the user to type in the prompt: `! "C:\Program Files\Amazon\AWSCLIV2\aws.exe" login --region ap-southeast-2 --profile default`.
3. `& $aws sts get-caller-identity --profile default` → must return Account/Arn/UserId. Record the **Account ID** for T6b.
4. `& $aws configure agent-toolkit --yes --region us-east-1 --profile default` (toolkit exists only in us-east-1). If it prompts
   interactively and hangs, ask the user to run it with the `!` prefix.
5. For every MCP config the wizard reports it wrote (check `C:\Users\harsh\.claude.json` and `<project>\.mcp.json`), add to each
   `aws-mcp` server entry under `mcpServers`: `"env": { "AWS_MCP_PROXY_PROFILES": "default" }`. Change nothing else. If an `aws-mcp`
   entry existed before the wizard, ask the user how to reconcile.
6. `& $aws agent-toolkit list-available-skills --region us-east-1 --profile default` → must return JSON skills.
7. Fetch `https://raw.githubusercontent.com/aws/agent-toolkit-for-aws/refs/heads/main/rules/aws-starter-rules.md` (web-fetch agent:
   "return the full file verbatim"). Create `CLAUDE.md` in the project root containing exactly:
   ```
   <!-- BEGIN AWS Agent Toolkit rules -->
   <verbatim rules>
   <!-- END AWS Agent Toolkit rules -->
   ```
8. **Read the rules.** If they mandate something that conflicts with this plan (e.g. a different deploy tool, forbidden services,
   required tagging/"project" association), STOP and ask the user before Wave 2 — adapt only §T3/§T6b as instructed by the user.
9. Tell the user: setup done; the `aws-mcp` server becomes available after a session restart (not required to continue this plan;
   we deploy with the AWS CLI + CDK). To add accounts later: `aws login --profile <name>`, append the name to `AWS_MCP_PROXY_PROFILES`
   (space-separated), restart.

---

## 6. T1 — Scaffold + foundation (one Sonnet agent)

**Files owned:** everything marked [T1] in §4.1 (including all backend `src/lib/*`, `src/shared/types.ts`, `src/services/access.ts`,
`frontend/src/api/types.ts`), plus the project section of `CLAUDE.md`.

### 6.1 Steps
1. `git init` in the project root (if `.git` does not exist). Do not commit.
2. Write every file in §6.2 exactly.
3. If `CLAUDE.md` exists (from T0), **prepend** the project section from §6.2.20 above the `<!-- BEGIN AWS Agent Toolkit rules -->` line.
   If it does not exist, create it with only the project section.
4. From the project root run: `npm install` (one time; creates root `package-lock.json` and installs all workspaces).
5. Acceptance (all must pass):
   - `npm ls --workspaces --depth=0` exits 0.
   - `npx tsc --noEmit -p backend/tsconfig.json` → passes (only foundation files exist yet; tests folder may be empty).
   - `npx esbuild --version` prints `0.28.2`.
   - `node -e "require.resolve('ag-grid-community', {paths:['frontend']})"` exits 0.

### 6.2 File contents

#### 6.2.1 `.gitignore`
```
node_modules/
dist/
cdk.out/
infra/cdk-outputs.json
.secrets/
.env
.env.*
*.log
*.ogg
coverage/
.DS_Store
```

#### 6.2.2 `package.json` (root)
```json
{
  "name": "people-stack",
  "private": true,
  "version": "0.1.0",
  "workspaces": ["backend", "frontend", "infra"],
  "scripts": {
    "test": "npm run test -w backend",
    "typecheck": "npm run typecheck -w backend && npm run typecheck -w frontend && npm run typecheck -w infra",
    "build:web": "npm run build -w frontend",
    "synth": "npm run build -w frontend && npm run synth -w infra",
    "deploy": "npm run build -w frontend && npm run deploy -w infra",
    "seed": "tsx scripts/seed.ts",
    "ashby:sample": "tsx scripts/send-ashby-sample.ts"
  },
  "devDependencies": {
    "@types/node": "24.19.2",
    "esbuild": "0.28.2",
    "tsx": "4.23.15",
    "typescript": "5.9.3"
  }
}
```

#### 6.2.3 `tsconfig.base.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

#### 6.2.4 `backend/package.json`
```json
{
  "name": "@people-stack/backend",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit -p tsconfig.json"
  },
  "dependencies": {
    "@aws-sdk/client-dynamodb": "3.1156.0",
    "@aws-sdk/client-secrets-manager": "3.1156.0",
    "@aws-sdk/client-sfn": "3.1156.0",
    "@aws-sdk/lib-dynamodb": "3.1156.0",
    "google-auth-library": "11.3.1",
    "ulid": "3.0.2",
    "zod": "4.6.7"
  },
  "devDependencies": {
    "@types/aws-lambda": "8.10.164",
    "vitest": "5.0.5"
  }
}
```

#### 6.2.5 `backend/tsconfig.json`
```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": { "types": ["node"], "noEmit": true },
  "include": ["src", "test", "vitest.config.ts"]
}
```

#### 6.2.6 `backend/vitest.config.ts`
```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
    clearMocks: true,
    restoreMocks: true,
    unstubGlobals: true,
    env: { TABLE_NAME: 'test-table', INTEGRATIONS_SECRET_NAME: 'test/integrations', ADMIN_KEY_SECRET_NAME: 'test/admin' },
  },
});
```

#### 6.2.7 `backend/src/shared/types.ts`  (also copied verbatim to `frontend/src/api/types.ts`)
```ts
// Shared domain types. backend/src/shared/types.ts and frontend/src/api/types.ts must stay identical.

export type EmployeeStatus = 'offer_accepted' | 'onboarding' | 'active' | 'offboarding' | 'exited';
export type EmploymentType = 'full_time' | 'part_time' | 'contractor' | 'intern';
export type ConnectorType = 'google_workspace' | 'google_group' | 'scim' | 'jumpcloud' | 'manual';
export type GrantStatus =
  | 'pending'
  | 'provisioning'
  | 'active'
  | 'manual_pending'
  | 'failed'
  | 'revoking'
  | 'revoked'
  | 'manual_revoke_pending'
  | 'revoke_failed';
export type WorkflowOperation = 'onboard' | 'offboard';

export const CONNECTOR_TYPES: readonly ConnectorType[] = ['google_workspace', 'google_group', 'scim', 'jumpcloud', 'manual'];
/** Identity apps run first when onboarding and last when offboarding. */
export const IDENTITY_TYPES: readonly ConnectorType[] = ['google_workspace', 'jumpcloud'];

export interface Money {
  /** Annual amount in major units (e.g. rupees), integer. */
  amount: number;
  /** ISO 4217 code, e.g. INR. */
  currency: string;
}

export interface AccessSummary {
  total: number;
  active: number;
  manualPending: number;
  failed: number;
  revoked: number;
  inFlight: number;
}

export interface Employee {
  id: string;
  status: EmployeeStatus;
  firstName: string;
  lastName: string;
  personalEmail: string;
  workEmail: string;
  phone?: string;
  title: string;
  department: string;
  location: string;
  employmentType: EmploymentType;
  managerName?: string;
  managerEmail?: string;
  /** YYYY-MM-DD */
  startDate?: string;
  /** YYYY-MM-DD */
  endDate?: string;
  salary?: Money;
  source: 'ashby' | 'manual';
  ashby?: { candidateId?: string; applicationId?: string; offerId?: string; jobId?: string };
  notes?: string;
  executionArn?: string;
  accessSummary?: AccessSummary;
  createdAt: string;
  updatedAt: string;
}

export interface AppDef {
  id: string;
  name: string;
  type: ConnectorType;
  enabled: boolean;
  /** Granted to every hire by default. */
  defaultForAll: boolean;
  /** Granted by default to these departments (case-insensitive match on Employee.department). */
  departments: string[];
  /** Shown to HR for manual steps. */
  instructions: string;
  /** Non-secret connector config (secrets live in Secrets Manager). */
  config: Record<string, unknown>;
  ownerEmail?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Grant {
  employeeId: string;
  appId: string;
  appName: string;
  status: GrantStatus;
  externalId?: string;
  lastError?: string;
  /** True when a one-time secret (e.g. temporary password) can be revealed once. */
  hasOneTimeSecret?: boolean;
  updatedAt: string;
}

export interface AuditEvent {
  id: string;
  ts: string;
  employeeId?: string;
  actor: string;
  type: string;
  message: string;
  data?: Record<string, unknown>;
}

export interface PersonBundle {
  employee: Employee;
  grants: Grant[];
  audit: AuditEvent[];
}

export interface PreviewItem {
  appId: string;
  name: string;
  type: ConnectorType;
  phase: 'identity' | 'apps';
  selected: boolean;
  currentStatus: GrantStatus | null;
  reason: string;
}

export interface WorkflowInput {
  operation: WorkflowOperation;
  employeeId: string;
  phase1: string[];
  phase2: string[];
}

export interface Meta {
  googleDomain: string;
  region: string;
  ashbyWebhookConfigured: boolean;
  googleConfigured: boolean;
  version: string;
}

export type PersonCreateBody = {
  firstName: string;
  lastName?: string;
  personalEmail: string;
  workEmail?: string;
  phone?: string;
  title?: string;
  department?: string;
  location?: string;
  employmentType?: EmploymentType;
  managerName?: string;
  managerEmail?: string;
  startDate?: string;
  salary?: Money;
  notes?: string;
};

export type PersonPatchBody = Partial<
  Pick<
    Employee,
    | 'firstName'
    | 'lastName'
    | 'personalEmail'
    | 'workEmail'
    | 'phone'
    | 'title'
    | 'department'
    | 'location'
    | 'employmentType'
    | 'managerName'
    | 'managerEmail'
    | 'startDate'
    | 'endDate'
    | 'notes'
  >
> & { salary?: Money | null };

export type AppCreateBody = {
  name: string;
  type?: ConnectorType;
  enabled?: boolean;
  defaultForAll?: boolean;
  departments?: string[];
  instructions?: string;
  config?: Record<string, unknown>;
  ownerEmail?: string;
};

export type AppPatchBody = Partial<AppCreateBody>;
```

#### 6.2.8 `backend/src/lib/errors.ts`
```ts
/** Transient failure (429/5xx/network). Step Functions retries on this error name. */
export class RetryableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RetryableError';
  }
}

/** Integration is not configured (missing secret/config). Not retried. */
export class NotConfiguredError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotConfiguredError';
  }
}

export class HttpError extends Error {
  readonly status: number;
  readonly code: string;
  constructor(status: number, message: string, code = 'error') {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.code = code;
  }
}
```

#### 6.2.9 `backend/src/lib/ddb.ts`
```ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

export const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
  marshallOptions: { removeUndefinedValues: true },
});

export function tableName(): string {
  const t = process.env.TABLE_NAME;
  if (!t) throw new Error('TABLE_NAME is not set');
  return t;
}
```

#### 6.2.10 `backend/src/lib/repo.ts`
```ts
import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  QueryCommand,
  UpdateCommand,
  type QueryCommandInput,
} from '@aws-sdk/lib-dynamodb';
import { ulid } from 'ulid';
import type { AppDef, AuditEvent, Employee, Grant, PersonBundle } from '../shared/types';
import { ddb, tableName } from './ddb';
import { HttpError } from './errors';

type Item = Record<string, unknown>;

const INTERNAL_KEYS = ['PK', 'SK', 'GSI1PK', 'GSI1SK', 'entity', 'oneTimeSecret', 'ttl'];
const nowIso = () => new Date().toISOString();

function strip<T>(item: Item): T {
  const out: Item = { ...item };
  for (const k of INTERNAL_KEYS) delete out[k];
  return out as T;
}

const isConditionalFail = (e: unknown) => (e as { name?: string } | null)?.name === 'ConditionalCheckFailedException';

async function queryAll(input: Omit<QueryCommandInput, 'TableName' | 'ExclusiveStartKey'>): Promise<Item[]> {
  const items: Item[] = [];
  let startKey: Item | undefined;
  do {
    const res = await ddb.send(new QueryCommand({ ...input, TableName: tableName(), ExclusiveStartKey: startKey }));
    items.push(...((res.Items ?? []) as Item[]));
    startKey = res.LastEvaluatedKey as Item | undefined;
  } while (startKey);
  return items;
}

// ---------- Employees ----------
const empKey = (id: string) => ({ PK: `EMP#${id}`, SK: 'PROFILE' });

export async function getEmployee(id: string): Promise<Employee | undefined> {
  const res = await ddb.send(new GetCommand({ TableName: tableName(), Key: empKey(id) }));
  return res.Item ? strip<Employee>(res.Item) : undefined;
}

export async function listEmployees(): Promise<Employee[]> {
  const items = await queryAll({
    IndexName: 'GSI1',
    KeyConditionExpression: 'GSI1PK = :pk',
    ExpressionAttributeValues: { ':pk': 'EMP' },
  });
  return items.map((i) => strip<Employee>(i));
}

export async function putEmployee(e: Employee): Promise<Employee> {
  await ddb.send(
    new PutCommand({
      TableName: tableName(),
      Item: { ...e, ...empKey(e.id), GSI1PK: 'EMP', GSI1SK: e.createdAt, entity: 'employee' },
    }),
  );
  return e;
}

/** Read-merge-write. Keys set to undefined in `patch` are removed. */
export async function updateEmployee(id: string, patch: Partial<Employee>): Promise<Employee> {
  const current = await getEmployee(id);
  if (!current) throw new HttpError(404, 'Employee not found', 'not_found');
  const next: Employee = { ...current, ...patch, id, createdAt: current.createdAt, updatedAt: nowIso() };
  await putEmployee(next);
  return next;
}

// ---------- Ashby intake idempotency ----------
/** Returns true if this webhookActionId was not seen before (and records it). */
export async function claimWebhookAction(actionId: string): Promise<boolean> {
  try {
    await ddb.send(
      new PutCommand({
        TableName: tableName(),
        Item: {
          PK: `WEBHOOK#${actionId}`,
          SK: 'SEEN',
          entity: 'webhook',
          receivedAt: nowIso(),
          ttl: Math.floor(Date.now() / 1000) + 30 * 86400,
        },
        ConditionExpression: 'attribute_not_exists(PK)',
      }),
    );
    return true;
  } catch (e) {
    if (isConditionalFail(e)) return false;
    throw e;
  }
}

/** Undo a claim so Ashby's retry can be processed after a failure. */
export async function releaseWebhookAction(actionId: string): Promise<void> {
  await ddb.send(new DeleteCommand({ TableName: tableName(), Key: { PK: `WEBHOOK#${actionId}`, SK: 'SEEN' } }));
}

/** Links an Ashby application to an employee id. If a link exists, returns the existing employee id. */
export async function linkAshbyApplication(
  applicationId: string,
  employeeId: string,
): Promise<{ created: boolean; employeeId: string }> {
  try {
    await ddb.send(
      new PutCommand({
        TableName: tableName(),
        Item: { PK: `ASHBYAPP#${applicationId}`, SK: 'LINK', entity: 'ashby_link', employeeId, createdAt: nowIso() },
        ConditionExpression: 'attribute_not_exists(PK)',
      }),
    );
    return { created: true, employeeId };
  } catch (e) {
    if (!isConditionalFail(e)) throw e;
    const res = await ddb.send(
      new GetCommand({ TableName: tableName(), Key: { PK: `ASHBYAPP#${applicationId}`, SK: 'LINK' } }),
    );
    return { created: false, employeeId: String(res.Item?.employeeId ?? employeeId) };
  }
}

// ---------- Apps ----------
const appKey = (id: string) => ({ PK: `APP#${id}`, SK: 'META' });

export async function listApps(): Promise<AppDef[]> {
  const items = await queryAll({
    IndexName: 'GSI1',
    KeyConditionExpression: 'GSI1PK = :pk',
    ExpressionAttributeValues: { ':pk': 'APP' },
  });
  return items.map((i) => strip<AppDef>(i));
}

export async function getApp(id: string): Promise<AppDef | undefined> {
  const res = await ddb.send(new GetCommand({ TableName: tableName(), Key: appKey(id) }));
  return res.Item ? strip<AppDef>(res.Item) : undefined;
}

export async function putApp(a: AppDef): Promise<AppDef> {
  await ddb.send(
    new PutCommand({
      TableName: tableName(),
      Item: { ...a, ...appKey(a.id), GSI1PK: 'APP', GSI1SK: a.name.toLowerCase(), entity: 'app' },
    }),
  );
  return a;
}

export async function deleteApp(id: string): Promise<void> {
  await ddb.send(new DeleteCommand({ TableName: tableName(), Key: appKey(id) }));
}

// ---------- Grants ----------
const grantKey = (employeeId: string, appId: string) => ({ PK: `EMP#${employeeId}`, SK: `GRANT#${appId}` });

async function getGrantRaw(employeeId: string, appId: string): Promise<Item | undefined> {
  const res = await ddb.send(new GetCommand({ TableName: tableName(), Key: grantKey(employeeId, appId) }));
  if (!res.Item) return undefined;
  const out: Item = { ...res.Item };
  for (const k of ['PK', 'SK', 'GSI1PK', 'GSI1SK', 'entity']) delete out[k];
  return out;
}

export async function getGrant(employeeId: string, appId: string): Promise<Grant | undefined> {
  const raw = await getGrantRaw(employeeId, appId);
  return raw ? strip<Grant>(raw) : undefined;
}

export type GrantPatch = Partial<Omit<Grant, 'employeeId' | 'appId' | 'updatedAt' | 'hasOneTimeSecret'>> & {
  /** string = store a one-time secret; null = remove it; undefined = keep. */
  oneTimeSecret?: string | null;
};

/** Read-merge-write of a grant. Creates it if missing. */
export async function patchGrant(employeeId: string, appId: string, patch: GrantPatch): Promise<Grant> {
  const current = await getGrantRaw(employeeId, appId);
  const merged: Item = {
    ...(current ?? { appName: appId, status: 'pending' }),
    ...patch,
    employeeId,
    appId,
    updatedAt: nowIso(),
  };
  if (patch.oneTimeSecret === null) delete merged.oneTimeSecret;
  merged.hasOneTimeSecret = typeof merged.oneTimeSecret === 'string' && merged.oneTimeSecret.length > 0;
  await ddb.send(
    new PutCommand({
      TableName: tableName(),
      Item: {
        ...merged,
        ...grantKey(employeeId, appId),
        GSI1PK: 'GRANT',
        GSI1SK: `${employeeId}#${appId}`,
        entity: 'grant',
      },
    }),
  );
  return strip<Grant>(merged);
}

export async function listGrantsForEmployee(employeeId: string): Promise<Grant[]> {
  const items = await queryAll({
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: { ':pk': `EMP#${employeeId}`, ':sk': 'GRANT#' },
  });
  return items.map((i) => strip<Grant>(i));
}

export async function listAllGrants(): Promise<Grant[]> {
  const items = await queryAll({
    IndexName: 'GSI1',
    KeyConditionExpression: 'GSI1PK = :pk',
    ExpressionAttributeValues: { ':pk': 'GRANT' },
  });
  return items.map((i) => strip<Grant>(i));
}

/** Atomically returns and deletes the one-time secret. Undefined if none. */
export async function takeOneTimeSecret(employeeId: string, appId: string): Promise<string | undefined> {
  try {
    const res = await ddb.send(
      new UpdateCommand({
        TableName: tableName(),
        Key: grantKey(employeeId, appId),
        UpdateExpression: 'REMOVE oneTimeSecret SET hasOneTimeSecret = :f',
        ConditionExpression: 'attribute_exists(oneTimeSecret)',
        ExpressionAttributeValues: { ':f': false },
        ReturnValues: 'ALL_OLD',
      }),
    );
    const v = res.Attributes?.oneTimeSecret;
    return typeof v === 'string' ? v : undefined;
  } catch (e) {
    if (isConditionalFail(e)) return undefined;
    throw e;
  }
}

// ---------- Audit ----------
export async function addAudit(e: Omit<AuditEvent, 'id' | 'ts'>): Promise<AuditEvent> {
  const ts = nowIso();
  const id = ulid();
  const ev: AuditEvent = { ...e, id, ts };
  await ddb.send(
    new PutCommand({
      TableName: tableName(),
      Item: {
        ...ev,
        PK: e.employeeId ? `EMP#${e.employeeId}` : 'SYSTEM',
        SK: `AUDIT#${ts}#${id}`,
        GSI1PK: 'AUDIT',
        GSI1SK: `${ts}#${id}`,
        entity: 'audit',
      },
    }),
  );
  return ev;
}

export async function listAudit(limit = 300): Promise<AuditEvent[]> {
  const res = await ddb.send(
    new QueryCommand({
      TableName: tableName(),
      IndexName: 'GSI1',
      KeyConditionExpression: 'GSI1PK = :pk',
      ExpressionAttributeValues: { ':pk': 'AUDIT' },
      ScanIndexForward: false,
      Limit: limit,
    }),
  );
  return (res.Items ?? []).map((i) => strip<AuditEvent>(i as Item));
}

// ---------- Person bundle ----------
export async function getPersonBundle(id: string): Promise<PersonBundle | undefined> {
  const items = await queryAll({
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: { ':pk': `EMP#${id}` },
  });
  let employee: Employee | undefined;
  const grants: Grant[] = [];
  const audit: AuditEvent[] = [];
  for (const it of items) {
    const sk = String(it.SK);
    if (sk === 'PROFILE') employee = strip<Employee>(it);
    else if (sk.startsWith('GRANT#')) grants.push(strip<Grant>(it));
    else if (sk.startsWith('AUDIT#')) audit.push(strip<AuditEvent>(it));
  }
  if (!employee) return undefined;
  audit.reverse();
  grants.sort((a, b) => a.appName.localeCompare(b.appName));
  return { employee, grants, audit: audit.slice(0, 100) };
}
```

#### 6.2.11 `backend/src/lib/secrets.ts`
```ts
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

const sm = new SecretsManagerClient({});
const cache = new Map<string, { value: string; at: number }>();
const TTL_MS = 5 * 60 * 1000;

export async function getSecretString(name: string): Promise<string> {
  const hit = cache.get(name);
  if (hit && Date.now() - hit.at < TTL_MS) return hit.value;
  const res = await sm.send(new GetSecretValueCommand({ SecretId: name }));
  const value = res.SecretString ?? '';
  cache.set(name, { value, at: Date.now() });
  return value;
}

export interface GoogleServiceAccount {
  client_email: string;
  private_key: string;
  [k: string]: unknown;
}

/** Shape of the JSON stored in Secrets Manager under people-stack/integrations. */
export interface IntegrationSecrets {
  ashbyWebhookSecret?: string;
  ashbyApiKey?: string;
  /** Primary Google Workspace domain, e.g. "acme.com". */
  googleDomain?: string;
  /** Super-admin email the service account impersonates. */
  googleAdminSubject?: string;
  googleServiceAccount?: GoogleServiceAccount | null;
  jumpcloudApiKey?: string;
  /** SCIM bearer tokens keyed by app config "tokenKey", e.g. { "slack": "xoxp-..." }. */
  scimTokens?: Record<string, string>;
}

export async function getIntegrationSecrets(): Promise<IntegrationSecrets> {
  const name = process.env.INTEGRATIONS_SECRET_NAME;
  if (!name) throw new Error('INTEGRATIONS_SECRET_NAME is not set');
  const raw = await getSecretString(name);
  try {
    return (raw ? JSON.parse(raw) : {}) as IntegrationSecrets;
  } catch {
    throw new Error('The people-stack/integrations secret is not valid JSON');
  }
}

export async function getAdminKey(): Promise<string> {
  const name = process.env.ADMIN_KEY_SECRET_NAME;
  if (!name) throw new Error('ADMIN_KEY_SECRET_NAME is not set');
  return (await getSecretString(name)).trim();
}
```

#### 6.2.12 `backend/src/lib/http.ts`
```ts
import { RetryableError } from './errors';

export interface HttpResult<T = any> {
  status: number;
  ok: boolean;
  body: T;
}

/** fetch wrapper: JSON in/out, 20s timeout, throws RetryableError on network/429/5xx. Other statuses are returned. */
export async function httpJson<T = any>(
  url: string,
  opts: { method?: string; headers?: Record<string, string>; json?: unknown } = {},
  label = 'HTTP',
): Promise<HttpResult<T>> {
  const headers: Record<string, string> = { accept: 'application/json', ...(opts.headers ?? {}) };
  let body: string | undefined;
  if (opts.json !== undefined) {
    headers['content-type'] = headers['content-type'] ?? 'application/json';
    body = JSON.stringify(opts.json);
  }
  let res: Response;
  try {
    res = await fetch(url, { method: opts.method ?? 'GET', headers, body, signal: AbortSignal.timeout(20_000) });
  } catch (e) {
    throw new RetryableError(`${label}: network error (${(e as Error).message})`);
  }
  const text = await res.text();
  let parsed: unknown = undefined;
  if (text) {
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = text;
    }
  }
  if (res.status === 429 || res.status >= 500) throw new RetryableError(`${label}: HTTP ${res.status}`);
  return { status: res.status, ok: res.ok, body: parsed as T };
}

/** Best-effort human message from an error response body. */
export function describeBody(body: unknown): string {
  if (body && typeof body === 'object') {
    const b = body as { error?: { message?: string } | string; detail?: string; message?: string; Errors?: unknown };
    if (typeof b.error === 'object' && b.error?.message) return b.error.message;
    if (typeof b.error === 'string') return b.error;
    if (b.detail) return b.detail;
    if (b.message) return b.message;
    return JSON.stringify(body).slice(0, 300);
  }
  return typeof body === 'string' ? body.slice(0, 300) : '';
}
```

#### 6.2.13 `backend/src/lib/names.ts`
```ts
export function slugPart(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

/** "Asha", "Rao", "acme.com" → "asha.rao@acme.com". Empty string when no domain or first name. */
export function suggestWorkEmail(first: string, last: string, domain?: string): string {
  if (!domain) return '';
  const f = slugPart(first.trim().split(/\s+/)[0] ?? '');
  const l = slugPart(last);
  if (!f) return '';
  return `${l ? `${f}.${l}` : f}@${domain.trim().toLowerCase()}`;
}
```

#### 6.2.14 `backend/src/lib/respond.ts`
```ts
import type { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
import { ZodError } from 'zod';
import { HttpError } from './errors';

export function json(statusCode: number, body: unknown): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    body: JSON.stringify(body),
  };
}

export function rawBody(event: APIGatewayProxyEventV2): Buffer {
  if (!event.body) return Buffer.alloc(0);
  return Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8');
}

export function parseJsonBody(event: APIGatewayProxyEventV2): unknown {
  const buf = rawBody(event);
  if (buf.length === 0) return undefined;
  try {
    return JSON.parse(buf.toString('utf8'));
  } catch {
    throw new HttpError(400, 'Request body is not valid JSON', 'bad_json');
  }
}

export function errorResponse(err: unknown): APIGatewayProxyStructuredResultV2 {
  if (err instanceof HttpError) return json(err.status, { error: { message: err.message, code: err.code } });
  if (err instanceof ZodError) {
    const message = err.issues.map((i) => `${i.path.join('.') || 'body'}: ${i.message}`).join('; ');
    return json(400, { error: { message, code: 'validation', details: err.issues } });
  }
  console.error('Unhandled error', err instanceof Error ? err.stack : err);
  return json(500, { error: { message: 'Internal error', code: 'internal' } });
}
```

#### 6.2.15 `backend/src/lib/auth.ts`
```ts
import { createHash, timingSafeEqual } from 'node:crypto';
import { HttpError } from './errors';
import { getAdminKey } from './secrets';

const digest = (v: string) => createHash('sha256').update(v, 'utf8').digest();

/** Temporary shared-key gate until SSO is added. */
export async function requireAdminKey(provided: string | undefined): Promise<void> {
  const expected = await getAdminKey();
  if (!expected) throw new HttpError(500, 'Admin key is not configured', 'config');
  if (!provided || !timingSafeEqual(digest(provided), digest(expected))) {
    throw new HttpError(401, 'Invalid or missing access key', 'unauthorized');
  }
}
```

#### 6.2.16 `backend/src/lib/ashby.ts`
```ts
import { createHmac, timingSafeEqual } from 'node:crypto';
import type { Money } from '../shared/types';
import { RetryableError } from './errors';

/** Verifies `Ashby-Signature: sha256=<hex>` = HMAC-SHA256(secret, raw body). */
export function verifyAshbySignature(rawBody: Buffer, header: string | undefined, secret: string): boolean {
  if (!header || !secret) return false;
  const idx = header.indexOf('=');
  if (idx < 0) return false;
  const algo = header.slice(0, idx).trim().toLowerCase();
  const provided = header.slice(idx + 1).trim().toLowerCase();
  if (algo !== 'sha256') return false;
  const expected = createHmac('sha256', secret).update(rawBody).digest('hex');
  const a = Buffer.from(provided, 'utf8');
  const b = Buffer.from(expected, 'utf8');
  return a.length === b.length && timingSafeEqual(a, b);
}

// ---- Payload subset (see developers.ashbyhq.com webhook reference) ----
export interface AshbyCandidate {
  id?: string;
  name?: string;
  primaryEmailAddress?: { value?: string } | null;
  primaryPhoneNumber?: { value?: string } | null;
}
export interface AshbyHiringTeamMember {
  userId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
}
export interface AshbyApplication {
  id?: string;
  status?: string;
  candidate?: AshbyCandidate;
  job?: { id?: string; title?: string; departmentId?: string; locationId?: string } | null;
  hiringTeam?: AshbyHiringTeamMember[];
}
export interface AshbyOffer {
  id?: string;
  applicationId?: string;
  acceptanceStatus?: string;
  latestVersion?: { startDate?: string | null; salary?: { currencyCode?: string; value?: number } | null } | null;
}
export interface AshbyWebhook {
  webhookActionId?: string;
  action?: string;
  data?: { application?: AshbyApplication; offer?: AshbyOffer | null };
}

export function normalizeDate(v?: string | null): string | undefined {
  if (!v) return undefined;
  const m = /^(\d{4}-\d{2}-\d{2})/.exec(v);
  return m ? m[1] : undefined;
}

/** "Asha Devi Rao" → first "Asha Devi", last "Rao". Single token → last name "". */
export function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: 'Unknown', lastName: '' };
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  return { firstName: parts.slice(0, -1).join(' '), lastName: parts[parts.length - 1] };
}

export interface HireFields {
  firstName: string;
  lastName: string;
  personalEmail: string;
  phone?: string;
  title: string;
  startDate?: string;
  salary?: Money;
  managerName?: string;
  managerEmail?: string;
  departmentId?: string;
  ashby: { candidateId?: string; applicationId?: string; offerId?: string; jobId?: string };
}

export function mapAshbyHire(application: AshbyApplication, offer?: AshbyOffer | null): HireFields {
  const cand = application.candidate;
  const lv = offer?.latestVersion ?? undefined;
  const { firstName, lastName } = splitName(cand?.name ?? '');
  const manager = (application.hiringTeam ?? []).find((m) => /hiring manager/i.test(m.role ?? ''));
  const salaryValue = lv?.salary?.value;
  return {
    firstName,
    lastName,
    personalEmail: cand?.primaryEmailAddress?.value?.trim() ?? '',
    phone: cand?.primaryPhoneNumber?.value ?? undefined,
    title: application.job?.title ?? '',
    startDate: normalizeDate(lv?.startDate ?? undefined),
    salary:
      typeof salaryValue === 'number'
        ? { amount: Math.round(salaryValue), currency: (lv?.salary?.currencyCode ?? 'INR').toUpperCase() }
        : undefined,
    managerName: manager ? `${manager.firstName ?? ''} ${manager.lastName ?? ''}`.trim() || undefined : undefined,
    managerEmail: manager?.email ?? undefined,
    departmentId: application.job?.departmentId ?? undefined,
    ashby: {
      candidateId: cand?.id,
      applicationId: application.id,
      offerId: offer?.id,
      jobId: application.job?.id,
    },
  };
}

const ASHBY_API = 'https://api.ashbyhq.com';

/** Ashby API: POST JSON, Basic auth with API key as username and empty password. */
export async function ashbyApi<T>(apiKey: string, endpoint: string, body: Record<string, unknown>): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${ASHBY_API}/${endpoint}`, {
      method: 'POST',
      headers: {
        authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`,
        accept: 'application/json; version=1',
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15_000),
    });
  } catch (e) {
    throw new RetryableError(`Ashby ${endpoint}: network error (${(e as Error).message})`);
  }
  if (res.status === 429 || res.status >= 500) throw new RetryableError(`Ashby ${endpoint}: HTTP ${res.status}`);
  const payload = (await res.json().catch(() => ({}))) as { success?: boolean; results?: T; errors?: unknown };
  if (!res.ok || payload.success === false) {
    throw new Error(`Ashby ${endpoint} failed (HTTP ${res.status}): ${JSON.stringify(payload.errors ?? payload).slice(0, 300)}`);
  }
  return payload.results as T;
}
```

#### 6.2.17 `backend/src/services/access.ts`
```ts
import type { AccessSummary, Grant } from '../shared/types';
import { listGrantsForEmployee, updateEmployee } from '../lib/repo';

export function computeAccessSummary(grants: Grant[]): AccessSummary {
  const s: AccessSummary = { total: grants.length, active: 0, manualPending: 0, failed: 0, revoked: 0, inFlight: 0 };
  for (const g of grants) {
    switch (g.status) {
      case 'active':
        s.active++;
        break;
      case 'manual_pending':
      case 'manual_revoke_pending':
        s.manualPending++;
        break;
      case 'failed':
      case 'revoke_failed':
        s.failed++;
        break;
      case 'revoked':
        s.revoked++;
        break;
      default:
        s.inFlight++;
    }
  }
  return s;
}

export async function refreshAccessSummary(employeeId: string): Promise<AccessSummary> {
  const summary = computeAccessSummary(await listGrantsForEmployee(employeeId));
  await updateEmployee(employeeId, { accessSummary: summary });
  return summary;
}
```

#### 6.2.18 `infra/package.json`, `infra/tsconfig.json`, `infra/cdk.json`
```json
{
  "name": "@people-stack/infra",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "synth": "cdk synth",
    "diff": "cdk diff",
    "bootstrap": "cdk bootstrap",
    "deploy": "cdk deploy --require-approval never --outputs-file cdk-outputs.json",
    "typecheck": "tsc --noEmit -p tsconfig.json"
  },
  "dependencies": {
    "aws-cdk-lib": "2.274.0",
    "constructs": "10.8.1"
  },
  "devDependencies": {
    "aws-cdk": "2.1146.1"
  }
}
```
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "Node10",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noEmit": true,
    "types": ["node"]
  },
  "include": ["bin", "lib"]
}
```
```json
{
  "app": "npx tsx bin/app.ts",
  "context": {
    "@aws-cdk/core:target-partitions": ["aws"]
  }
}
```

#### 6.2.19 Frontend scaffold files
`frontend/package.json`
```json
{
  "name": "@people-stack/frontend",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit -p tsconfig.json && vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.json"
  },
  "dependencies": {
    "@fontsource-variable/inter": "5.3.0",
    "@fontsource/jetbrains-mono": "5.3.0",
    "@tanstack/react-query": "5.104.5",
    "ag-grid-community": "36.2.0",
    "ag-grid-react": "36.2.0",
    "lucide-react": "1.61.0",
    "react": "19.3.1",
    "react-dom": "19.3.1"
  },
  "devDependencies": {
    "@types/react": "19.3.0",
    "@types/react-dom": "19.3.0",
    "@vitejs/plugin-react": "6.1.2",
    "vite": "8.3.5"
  }
}
```
`frontend/tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "noEmit": true,
    "resolveJsonModule": true,
    "useDefineForClassFields": true,
    "types": ["vite/client"]
  },
  "include": ["src"]
}
```
`frontend/vite.config.ts`
```ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      port: 5173,
      // Dev: proxy /api to the deployed CloudFront URL, e.g. VITE_API_PROXY_TARGET=https://dxxxx.cloudfront.net
      proxy: env.VITE_API_PROXY_TARGET
        ? { '/api': { target: env.VITE_API_PROXY_TARGET, changeOrigin: true, secure: true } }
        : undefined,
    },
    build: { outDir: 'dist', sourcemap: true, chunkSizeWarningLimit: 2500 },
  };
});
```
`frontend/index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#F7F6F2" />
    <title>People Workbook</title>
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='2' y='2' width='28' height='28' rx='6' fill='%23ffffff' stroke='%231D2127' stroke-width='2'/%3E%3Cpath d='M8 12h16M8 18h16M14 6v20' stroke='%231F4FD1' stroke-width='2'/%3E%3C/svg%3E" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
`frontend/src/api/types.ts` = byte-for-byte copy of §6.2.7.
Also create a placeholder `frontend/src/main.tsx` containing `export {};` (T4 overwrites it) so `tsc` has an input.

#### 6.2.20 `CLAUDE.md` project section (prepend)
```markdown
# People Stack (HRIS on AWS)

- Monorepo (npm workspaces): `backend/` (Lambda TS), `infra/` (AWS CDK), `frontend/` (React + AG Grid), `scripts/`, `docs/`.
- Region ap-southeast-2, AWS profile `default`. AWS CLI: `C:\Program Files\Amazon\AWSCLIV2\aws.exe` (call by full path).
- CDK commands must run through `scripts/with-aws.ps1` (exports `aws login` credentials as env vars), e.g.
  `powershell -ExecutionPolicy Bypass -File scripts/with-aws.ps1 npm run deploy`.
- `backend/src/shared/types.ts` and `frontend/src/api/types.ts` must stay identical.
- Secrets live only in Secrets Manager (`people-stack/integrations`, `people-stack/admin-api-key`); never in code, app config, or logs.
- Tests: `npm test` (vitest). Typecheck: `npm run typecheck`.
- The execution plan lives at C:\Users\harsh\.claude\plans\read-the-audio-file-happy-brooks.md.
```

#### 6.2.21 `docs/integrations.secret.example.json`
```json
{
  "ashbyWebhookSecret": "<random 64-hex string; paste the same value into Ashby's webhook secret token>",
  "ashbyApiKey": "",
  "googleDomain": "",
  "googleAdminSubject": "",
  "googleServiceAccount": null,
  "jumpcloudApiKey": "",
  "scimTokens": {}
}
```

#### 6.2.22 `scripts/with-aws.ps1`
```powershell
# Runs a command with credentials from `aws login` exported as env vars (CDK cannot read login sessions directly).
# Usage: powershell -ExecutionPolicy Bypass -File scripts/with-aws.ps1 npm run deploy
param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Cmd)
$ErrorActionPreference = 'Stop'
$awsDir = 'C:\Program Files\Amazon\AWSCLIV2'
$env:Path = "$awsDir;$env:Path"
$exports = & "$awsDir\aws.exe" configure export-credentials --profile default --format powershell
if ($LASTEXITCODE -ne 0) { Write-Error 'Could not export AWS credentials. Run: aws login --profile default'; exit 1 }
$exports | Out-String | Invoke-Expression
$env:AWS_REGION = 'ap-southeast-2'
$env:AWS_DEFAULT_REGION = 'ap-southeast-2'
$env:CDK_DEFAULT_REGION = 'ap-southeast-2'
if ($Cmd.Count -eq 0) { Write-Error 'No command given'; exit 1 }
$exe = $Cmd[0]
$rest = @()
if ($Cmd.Count -gt 1) { $rest = $Cmd[1..($Cmd.Count - 1)] }
& $exe @rest
exit $LASTEXITCODE
```

#### 6.2.23 `scripts/samples/candidateHire.json`
```json
{
  "webhookActionId": "8f0b9b1e-6a3e-4d1f-9a0a-000000000001",
  "action": "candidateHire",
  "data": {
    "application": {
      "id": "app-demo-0001",
      "createdAt": "2026-10-01T10:00:00.000Z",
      "updatedAt": "2026-10-20T10:00:00.000Z",
      "status": "Hired",
      "customFields": [],
      "candidate": {
        "id": "cand-demo-0001",
        "name": "Asha Rao",
        "primaryEmailAddress": { "value": "asha.rao.personal@example.com", "type": "Personal", "isPrimary": true },
        "primaryPhoneNumber": { "value": "+91 98765 43210", "type": "Mobile", "isPrimary": true }
      },
      "currentInterviewStage": { "id": "stage-hired", "title": "Hired", "type": "Hired", "orderInInterviewPlan": 9 },
      "job": { "id": "job-demo-0001", "title": "Senior Backend Engineer", "locationId": "loc-blr", "departmentId": "dept-eng" },
      "hiringTeam": [
        { "userId": "user-1", "firstName": "Vikram", "lastName": "Shah", "email": "vikram.shah@example.com", "role": "Hiring Manager" }
      ]
    },
    "offer": {
      "id": "offer-demo-0001",
      "decidedAt": "2026-10-19T09:00:00.000Z",
      "applicationId": "app-demo-0001",
      "acceptanceStatus": "Accepted",
      "offerStatus": "CandidateAccepted",
      "latestVersion": {
        "id": "ov-1",
        "startDate": "2026-11-03",
        "salary": { "currencyCode": "INR", "value": 3600000 },
        "createdAt": "2026-10-18T09:00:00.000Z",
        "approvalStatus": "Approved"
      }
    }
  }
}
```

#### 6.2.24 `scripts/send-ashby-sample.ts`
```ts
// Sends a signed sample Ashby webhook. Env: WEBHOOK_URL, ASHBY_WEBHOOK_SECRET.
// Flags: --new-id (fresh webhookActionId), --bad-signature, --ping, or a path to another .json payload.
import { createHmac, randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';

async function main() {
  const url = process.env.WEBHOOK_URL;
  const secret = process.env.ASHBY_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error('Set WEBHOOK_URL and ASHBY_WEBHOOK_SECRET');
    process.exit(1);
  }
  const args = process.argv.slice(2);
  const flags = new Set(args.filter((a) => a.startsWith('--')));
  const file = args.find((a) => a.endsWith('.json')) ?? path.join(__dirname, 'samples', 'candidateHire.json');
  const payload = flags.has('--ping')
    ? { action: 'ping', data: { webhookActionType: 'ping' } }
    : (JSON.parse(readFileSync(file, 'utf8')) as Record<string, unknown>);
  if (flags.has('--new-id')) payload.webhookActionId = randomUUID();
  const body = JSON.stringify(payload);
  const signature = flags.has('--bad-signature')
    ? `sha256=${'0'.repeat(64)}`
    : `sha256=${createHmac('sha256', secret).update(body).digest('hex')}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'ashby-signature': signature, 'user-agent': 'Ashby-Webhook-Sample' },
    body,
  });
  console.log(res.status, await res.text());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
```

#### 6.2.25 `scripts/seed.ts`
```ts
// Seeds the app catalog (idempotent by name) and, with --demo, four clearly fake demo people.
// Env: SITE_URL (CloudFront URL, no trailing slash), HRIS_KEY (admin key).
type AppSeed = {
  name: string;
  type: 'google_workspace' | 'google_group' | 'scim' | 'jumpcloud' | 'manual';
  enabled: boolean;
  defaultForAll: boolean;
  departments: string[];
  instructions: string;
  config: Record<string, unknown>;
};

const APPS: AppSeed[] = [
  {
    name: 'Google Workspace account',
    type: 'google_workspace',
    enabled: true,
    defaultForAll: true,
    departments: [],
    instructions: 'Creates the company Google account (Gmail, Drive, Calendar). Suspends it on exit and moves Drive files to the manager.',
    config: { orgUnitPath: '/', transferDriveToManager: true },
  },
  {
    name: 'Google Group: everyone',
    type: 'google_group',
    enabled: false,
    defaultForAll: true,
    departments: [],
    instructions: 'Company-wide mailing list. Set config.groupEmail to the real group address, then enable.',
    config: { groupEmail: 'everyone@example.com' },
  },
  {
    name: 'Slack',
    type: 'manual',
    enabled: true,
    defaultForAll: true,
    departments: [],
    instructions: 'Slack admin → Manage members → Invite people → use the work email. Switch this app to "scim" once on Slack Business+.',
    config: {},
  },
  {
    name: 'Notion',
    type: 'manual',
    enabled: true,
    defaultForAll: true,
    departments: [],
    instructions: 'Notion → Settings → Members → Add members → work email. Switch to "scim" if on Notion Enterprise.',
    config: {},
  },
  {
    name: 'RazorpayX Payroll',
    type: 'manual',
    enabled: true,
    defaultForAll: true,
    departments: [],
    instructions: 'Add the employee in RazorpayX Payroll with the salary and start date from this record.',
    config: {},
  },
  {
    name: 'GitHub',
    type: 'manual',
    enabled: true,
    defaultForAll: false,
    departments: ['Engineering'],
    instructions: 'Invite the work email to the GitHub organisation and the right teams.',
    config: {},
  },
  {
    name: 'Figma',
    type: 'manual',
    enabled: true,
    defaultForAll: false,
    departments: ['Design', 'Product'],
    instructions: 'Invite the work email to the Figma team.',
    config: {},
  },
  {
    name: 'JumpCloud',
    type: 'jumpcloud',
    enabled: false,
    defaultForAll: false,
    departments: [],
    instructions: 'Only if the company adopts JumpCloud. Set config.userGroupIds and the jumpcloudApiKey secret, then enable.',
    config: { userGroupIds: [] },
  },
];

const DEMO_PEOPLE = [
  { firstName: 'Demo', lastName: 'Nair', personalEmail: 'demo.nair@example.com', title: 'Product Designer', department: 'Design', location: 'Bengaluru', startDate: '2026-11-10', salary: { amount: 2400000, currency: 'INR' } },
  { firstName: 'Demo', lastName: 'Kapoor', personalEmail: 'demo.kapoor@example.com', title: 'Backend Engineer', department: 'Engineering', location: 'Remote', startDate: '2026-11-17', salary: { amount: 3000000, currency: 'INR' } },
  { firstName: 'Demo', lastName: 'Iyer', personalEmail: 'demo.iyer@example.com', title: 'Finance Associate', department: 'Finance', location: 'Mumbai', startDate: '2026-12-01', salary: { amount: 1500000, currency: 'INR' } },
  { firstName: 'Demo', lastName: 'Sethi', personalEmail: 'demo.sethi@example.com', title: 'Account Executive', department: 'Sales', location: 'Delhi', startDate: '2026-11-24', salary: { amount: 1800000, currency: 'INR' } },
];

async function call<T>(base: string, key: string, method: string, path: string, body?: unknown): Promise<T> {
  const res = await fetch(`${base}/api${path}`, {
    method,
    headers: { 'content-type': 'application/json', 'x-hris-key': key },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const payload = (await res.json().catch(() => ({}))) as { data?: T; error?: { message?: string } };
  if (!res.ok) throw new Error(`${method} ${path} → ${res.status} ${payload.error?.message ?? ''}`);
  return payload.data as T;
}

async function main() {
  const base = (process.env.SITE_URL ?? '').replace(/\/+$/, '');
  const key = process.env.HRIS_KEY ?? '';
  if (!base || !key) {
    console.error('Set SITE_URL and HRIS_KEY');
    process.exit(1);
  }
  const existing = await call<{ name: string }[]>(base, key, 'GET', '/apps');
  const names = new Set(existing.map((a) => a.name.toLowerCase()));
  for (const app of APPS) {
    if (names.has(app.name.toLowerCase())) {
      console.log(`= app exists: ${app.name}`);
      continue;
    }
    await call(base, key, 'POST', '/apps', app);
    console.log(`+ app: ${app.name}`);
  }
  if (process.argv.includes('--demo')) {
    const people = await call<{ personalEmail: string }[]>(base, key, 'GET', '/people');
    const emails = new Set(people.map((p) => p.personalEmail));
    for (const p of DEMO_PEOPLE) {
      if (emails.has(p.personalEmail)) continue;
      await call(base, key, 'POST', '/people', p);
      console.log(`+ demo person: ${p.firstName} ${p.lastName}`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
```

---

## 7. T2A — Backend: API, Ashby webhook, services, tests (Sonnet)

**Files owned:** `backend/src/services/{ashbyIntake,people,workflow,apps}.ts`, `backend/src/handlers/{api,ashbyWebhook}.ts`,
`backend/test/{ashbySignature,ashbyMapping,webhook,workflow}.test.ts`.
**Imports allowed from foundation:** everything in `src/lib/*`, `src/shared/types.ts`, `src/services/access.ts` (exact signatures in §6.2).

### 7.1 `backend/src/services/ashbyIntake.ts`
```ts
import { ulid } from 'ulid';
import type { Employee } from '../shared/types';
import { ashbyApi, mapAshbyHire, type AshbyApplication, type AshbyWebhook } from '../lib/ashby';
import { suggestWorkEmail } from '../lib/names';
import { addAudit, getEmployee, linkAshbyApplication, putEmployee, updateEmployee } from '../lib/repo';
import type { IntegrationSecrets } from '../lib/secrets';

export interface IntakeResult {
  result: string;
  employeeId?: string;
}

function defined<T extends Record<string, unknown>>(o: T): Partial<T> {
  return Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) as Partial<T>;
}

/** Turns an Ashby hire/offer-accepted event into an Employee (idempotent per Ashby application id). */
export async function processAshbyEvent(payload: AshbyWebhook, secrets: IntegrationSecrets): Promise<IntakeResult> {
  const action = payload.action ?? 'unknown';
  let application: AshbyApplication | undefined = payload.data?.application;
  const offer = payload.data?.offer ?? undefined;

  if (action === 'offerUpdate' || action === 'offerCreate') {
    if (offer?.acceptanceStatus !== 'Accepted') return { result: 'ignored:offer_not_accepted' };
    if (!secrets.ashbyApiKey) return { result: 'ignored:no_ashby_api_key' };
    if (!offer.applicationId) return { result: 'ignored:no_application_id' };
    application = await ashbyApi<AshbyApplication>(secrets.ashbyApiKey, 'application.info', {
      applicationId: offer.applicationId,
    });
  } else if (action !== 'candidateHire') {
    return { result: `ignored:${action}` };
  }
  if (!application) return { result: 'ignored:no_application' };

  const fields = mapAshbyHire(application, offer);

  let department = '';
  if (fields.departmentId && secrets.ashbyApiKey) {
    try {
      const d = await ashbyApi<{ name?: string }>(secrets.ashbyApiKey, 'department.info', {
        departmentId: fields.departmentId,
      });
      department = d?.name ?? '';
    } catch (e) {
      console.warn('Ashby department lookup failed', (e as Error).message);
    }
  }

  const newId = ulid();
  const link = fields.ashby.applicationId
    ? await linkAshbyApplication(fields.ashby.applicationId, newId)
    : { created: true, employeeId: newId };
  const existing = link.created ? undefined : await getEmployee(link.employeeId);

  if (existing) {
    if (existing.status !== 'offer_accepted') {
      await addAudit({
        employeeId: existing.id,
        actor: 'ashby',
        type: 'ashby.ignored',
        message: `Ashby ${action} ignored: employee is already ${existing.status}`,
      });
      return { result: 'ignored:already_progressed', employeeId: existing.id };
    }
    const updated = await updateEmployee(existing.id, {
      title: fields.title || existing.title,
      startDate: fields.startDate ?? existing.startDate,
      salary: fields.salary ?? existing.salary,
      managerName: fields.managerName ?? existing.managerName,
      managerEmail: fields.managerEmail ?? existing.managerEmail,
      phone: fields.phone ?? existing.phone,
      department: department || existing.department,
      ashby: { ...(existing.ashby ?? {}), ...defined(fields.ashby) },
    });
    await addAudit({
      employeeId: updated.id,
      actor: 'ashby',
      type: 'employee.updated_from_ashby',
      message: `Updated from Ashby (${action})`,
    });
    return { result: 'updated', employeeId: updated.id };
  }

  const now = new Date().toISOString();
  const employee: Employee = {
    id: link.employeeId,
    status: 'offer_accepted',
    firstName: fields.firstName,
    lastName: fields.lastName,
    personalEmail: fields.personalEmail,
    workEmail: suggestWorkEmail(fields.firstName, fields.lastName, secrets.googleDomain),
    phone: fields.phone,
    title: fields.title,
    department,
    location: '',
    employmentType: 'full_time',
    managerName: fields.managerName,
    managerEmail: fields.managerEmail,
    startDate: fields.startDate,
    salary: fields.salary,
    source: 'ashby',
    ashby: fields.ashby,
    createdAt: now,
    updatedAt: now,
  };
  await putEmployee(employee);
  await addAudit({
    employeeId: employee.id,
    actor: 'ashby',
    type: 'employee.created',
    message: `${`${employee.firstName} ${employee.lastName}`.trim()} added from Ashby (offer accepted)`,
  });
  return { result: 'created', employeeId: employee.id };
}
```

### 7.2 `backend/src/handlers/ashbyWebhook.ts`
```ts
import type { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
import { verifyAshbySignature, type AshbyWebhook } from '../lib/ashby';
import { claimWebhookAction, releaseWebhookAction } from '../lib/repo';
import { json, rawBody } from '../lib/respond';
import { getIntegrationSecrets } from '../lib/secrets';
import { processAshbyEvent } from '../services/ashbyIntake';

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
  const body = rawBody(event);
  const secrets = await getIntegrationSecrets();
  if (!secrets.ashbyWebhookSecret) {
    console.error('ashbyWebhookSecret is not configured');
    return json(503, { error: { message: 'Webhook secret not configured' } });
  }
  const signature = event.headers?.['ashby-signature'] ?? event.headers?.['Ashby-Signature'];
  if (!verifyAshbySignature(body, signature, secrets.ashbyWebhookSecret)) {
    console.warn('Rejected Ashby webhook: bad or missing signature');
    return json(401, { error: { message: 'Invalid signature' } });
  }

  let payload: AshbyWebhook;
  try {
    payload = JSON.parse(body.toString('utf8')) as AshbyWebhook;
  } catch {
    return json(400, { error: { message: 'Invalid JSON' } });
  }
  console.log('Ashby webhook received', { action: payload.action, webhookActionId: payload.webhookActionId });
  if (payload.action === 'ping') return json(200, { ok: true });

  const actionId = payload.webhookActionId;
  if (actionId && !(await claimWebhookAction(actionId))) return json(200, { ok: true, duplicate: true });

  try {
    const result = await processAshbyEvent(payload, secrets);
    console.log('Ashby webhook processed', result);
    return json(200, { ok: true, ...result });
  } catch (err) {
    if (actionId) await releaseWebhookAction(actionId).catch(() => undefined);
    console.error('Ashby webhook processing failed', err instanceof Error ? err.message : err);
    return json(500, { error: { message: 'Processing failed' } });
  }
};
```

### 7.3 `backend/src/services/people.ts`
```ts
import { ulid } from 'ulid';
import { z } from 'zod';
import type { Employee, PersonBundle } from '../shared/types';
import { HttpError } from '../lib/errors';
import { suggestWorkEmail } from '../lib/names';
import {
  addAudit,
  getEmployee,
  getPersonBundle,
  listEmployees,
  listGrantsForEmployee,
  putEmployee,
  updateEmployee,
} from '../lib/repo';
import { getIntegrationSecrets } from '../lib/secrets';

export const DateStr = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD');
const OptEmail = z.union([z.email(), z.literal('')]);
const MoneySchema = z.object({
  amount: z.number().nonnegative(),
  currency: z.string().regex(/^[A-Z]{3}$/, 'Use a 3-letter currency code'),
});
const EmploymentTypeSchema = z.enum(['full_time', 'part_time', 'contractor', 'intern']);

const PersonCreate = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().default(''),
  personalEmail: z.email(),
  workEmail: OptEmail.default(''),
  phone: z.string().trim().optional(),
  title: z.string().trim().default(''),
  department: z.string().trim().default(''),
  location: z.string().trim().default(''),
  employmentType: EmploymentTypeSchema.default('full_time'),
  managerName: z.string().trim().optional(),
  managerEmail: OptEmail.optional(),
  startDate: DateStr.optional(),
  salary: MoneySchema.optional(),
  notes: z.string().optional(),
});

const PersonPatch = z
  .object({
    firstName: z.string().trim().min(1).optional(),
    lastName: z.string().trim().optional(),
    personalEmail: OptEmail.optional(),
    workEmail: OptEmail.optional(),
    phone: z.string().trim().optional(),
    title: z.string().trim().optional(),
    department: z.string().trim().optional(),
    location: z.string().trim().optional(),
    employmentType: EmploymentTypeSchema.optional(),
    managerName: z.string().trim().optional(),
    managerEmail: OptEmail.optional(),
    startDate: z.union([DateStr, z.literal('')]).optional(),
    endDate: z.union([DateStr, z.literal('')]).optional(),
    salary: MoneySchema.nullable().optional(),
    notes: z.string().optional(),
  })
  .strict();

const fullName = (e: Pick<Employee, 'firstName' | 'lastName'>) => `${e.firstName} ${e.lastName}`.trim();

export async function listPeople(): Promise<Employee[]> {
  const people = await listEmployees();
  return people.sort((a, b) => fullName(a).localeCompare(fullName(b)));
}

export async function createPerson(body: unknown): Promise<Employee> {
  const input = PersonCreate.parse(body);
  const secrets = await getIntegrationSecrets();
  const now = new Date().toISOString();
  const e: Employee = {
    id: ulid(),
    status: 'offer_accepted',
    ...input,
    workEmail: input.workEmail || suggestWorkEmail(input.firstName, input.lastName, secrets.googleDomain),
    source: 'manual',
    createdAt: now,
    updatedAt: now,
  };
  await putEmployee(e);
  await addAudit({ employeeId: e.id, actor: 'hris-admin', type: 'employee.created', message: `${fullName(e)} added manually` });
  return e;
}

export async function getPerson(id: string): Promise<PersonBundle> {
  const bundle = await getPersonBundle(id);
  if (!bundle) throw new HttpError(404, 'Employee not found', 'not_found');
  return bundle;
}

export async function patchPerson(id: string, body: unknown): Promise<Employee> {
  const input = PersonPatch.parse(body);
  const current = await getEmployee(id);
  if (!current) throw new HttpError(404, 'Employee not found', 'not_found');

  if (input.workEmail !== undefined && input.workEmail !== current.workEmail) {
    const grants = await listGrantsForEmployee(id);
    if (grants.some((g) => g.status !== 'revoked' && g.status !== 'failed')) {
      throw new HttpError(409, 'Work email is already provisioned in connected apps; change it there first', 'email_locked');
    }
  }

  const patch: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(input)) {
    if (v === undefined) continue;
    if ((k === 'startDate' || k === 'endDate') && v === '') patch[k] = undefined;
    else if (k === 'salary' && v === null) patch[k] = undefined;
    else patch[k] = v;
  }
  const cur = current as unknown as Record<string, unknown>;
  const changed = Object.keys(patch).filter((k) => JSON.stringify(cur[k]) !== JSON.stringify(patch[k]));
  if (changed.length === 0) return current;

  const updated = await updateEmployee(id, patch as Partial<Employee>);
  await addAudit({ employeeId: id, actor: 'hris-admin', type: 'employee.updated', message: `Updated ${changed.join(', ')}` });
  return updated;
}
```

### 7.4 `backend/src/services/workflow.ts`
```ts
import { SFNClient, StartExecutionCommand } from '@aws-sdk/client-sfn';
import { z } from 'zod';
import {
  IDENTITY_TYPES,
  type AccessSummary,
  type AppDef,
  type ConnectorType,
  type Grant,
  type GrantStatus,
  type PreviewItem,
  type WorkflowInput,
  type WorkflowOperation,
} from '../shared/types';
import { HttpError } from '../lib/errors';
import {
  addAudit,
  getApp,
  getEmployee,
  getGrant,
  listApps,
  listGrantsForEmployee,
  patchGrant,
  takeOneTimeSecret,
  updateEmployee,
} from '../lib/repo';
import { refreshAccessSummary } from './access';
import { DateStr } from './people';

const sfn = new SFNClient({});
const BUSY = new Set(['onboarding', 'offboarding']);
const today = () => new Date().toISOString().slice(0, 10);
const isIdentity = (t: ConnectorType) => IDENTITY_TYPES.includes(t);

const OnboardBody = z.object({ appIds: z.array(z.string().min(1)).min(1) });
const OffboardBody = z.object({ appIds: z.array(z.string().min(1)).default([]), endDate: DateStr.optional() });
const OperationQuery = z.enum(['onboard', 'offboard']);

/** Onboard: identity first. Offboard: identity last. */
export function splitPhases(
  operation: WorkflowOperation,
  apps: { id: string; type: ConnectorType }[],
): { phase1: string[]; phase2: string[] } {
  const identity = apps.filter((a) => isIdentity(a.type)).map((a) => a.id);
  const others = apps.filter((a) => !isIdentity(a.type)).map((a) => a.id);
  return operation === 'onboard' ? { phase1: identity, phase2: others } : { phase1: others, phase2: identity };
}

export async function startWorkflow(input: WorkflowInput): Promise<string> {
  const arn = process.env.STATE_MACHINE_ARN;
  if (!arn) throw new Error('STATE_MACHINE_ARN is not set');
  const res = await sfn.send(
    new StartExecutionCommand({
      stateMachineArn: arn,
      name: `${input.operation}-${input.employeeId}-${Date.now()}`,
      input: JSON.stringify(input),
    }),
  );
  if (!res.executionArn) throw new Error('Step Functions did not return an executionArn');
  return res.executionArn;
}

const byPhaseThenName = (a: PreviewItem, b: PreviewItem) =>
  a.phase === b.phase ? a.name.localeCompare(b.name) : a.phase === 'identity' ? -1 : 1;

export async function previewAccess(id: string, operationRaw: unknown): Promise<PreviewItem[]> {
  const operation = OperationQuery.parse(operationRaw);
  const e = await getEmployee(id);
  if (!e) throw new HttpError(404, 'Employee not found', 'not_found');
  const [apps, grants] = await Promise.all([listApps(), listGrantsForEmployee(id)]);
  const grantBy = new Map(grants.map((g) => [g.appId, g]));

  if (operation === 'onboard') {
    const dept = e.department.trim().toLowerCase();
    return apps
      .filter((a) => a.enabled)
      .map((a): PreviewItem => {
        const g = grantBy.get(a.id);
        const deptMatch = !!dept && a.departments.some((d) => d.trim().toLowerCase() === dept);
        const already = g?.status === 'active' || g?.status === 'manual_pending';
        return {
          appId: a.id,
          name: a.name,
          type: a.type,
          phase: isIdentity(a.type) ? 'identity' : 'apps',
          selected: (a.defaultForAll || deptMatch) && !already,
          currentStatus: g?.status ?? null,
          reason: a.defaultForAll ? 'Everyone' : deptMatch ? `Department: ${e.department}` : 'Optional',
        };
      })
      .sort(byPhaseThenName);
  }

  const appBy = new Map(apps.map((a) => [a.id, a]));
  return grants
    .filter((g) => g.status !== 'revoked')
    .map((g): PreviewItem => {
      const type = appBy.get(g.appId)?.type ?? 'manual';
      return {
        appId: g.appId,
        name: g.appName,
        type,
        phase: isIdentity(type) ? 'identity' : 'apps',
        selected: true,
        currentStatus: g.status,
        reason: 'Has access',
      };
    })
    .sort(byPhaseThenName);
}

export async function onboard(id: string, body: unknown): Promise<{ executionArn: string }> {
  const { appIds } = OnboardBody.parse(body);
  const e = await getEmployee(id);
  if (!e) throw new HttpError(404, 'Employee not found', 'not_found');
  if (BUSY.has(e.status)) throw new HttpError(409, `A workflow is already running (${e.status})`, 'busy');
  if (e.status === 'exited') throw new HttpError(409, 'This person has exited; create a new record to rehire', 'exited');

  const apps = await listApps();
  const appBy = new Map(apps.map((a) => [a.id, a]));
  const bad = appIds.filter((x) => !appBy.get(x)?.enabled);
  if (bad.length) throw new HttpError(400, `Unknown or disabled apps: ${bad.join(', ')}`, 'bad_apps');

  const grantBy = new Map((await listGrantsForEmployee(id)).map((g) => [g.appId, g]));
  const selected: AppDef[] = appIds
    .map((x) => appBy.get(x) as AppDef)
    .filter((a) => {
      const s = grantBy.get(a.id)?.status;
      return s !== 'active' && s !== 'manual_pending';
    });
  if (selected.length === 0) throw new HttpError(400, 'All selected apps are already granted', 'nothing_to_do');
  if (selected.some((a) => a.type !== 'manual') && !e.workEmail) {
    throw new HttpError(400, 'Set a work email before onboarding', 'work_email_required');
  }

  for (const a of selected) await patchGrant(id, a.id, { appName: a.name, status: 'pending', lastError: undefined });
  const previousStatus = e.status;
  await updateEmployee(id, { status: 'onboarding' });
  let executionArn: string;
  try {
    executionArn = await startWorkflow({ operation: 'onboard', employeeId: id, ...splitPhases('onboard', selected) });
  } catch (err) {
    await updateEmployee(id, { status: previousStatus });
    for (const a of selected) await patchGrant(id, a.id, { status: 'failed', lastError: 'Workflow failed to start' });
    throw err;
  }
  await updateEmployee(id, { executionArn });
  await addAudit({
    employeeId: id,
    actor: 'hris-admin',
    type: 'onboarding.started',
    message: `Onboarding started: ${selected.map((a) => a.name).join(', ')}`,
  });
  return { executionArn };
}

export async function offboard(id: string, body: unknown): Promise<{ executionArn: string | null }> {
  const { appIds, endDate } = OffboardBody.parse(body ?? {});
  const e = await getEmployee(id);
  if (!e) throw new HttpError(404, 'Employee not found', 'not_found');
  if (e.status !== 'active' && e.status !== 'offer_accepted') {
    throw new HttpError(409, `Only active people (or accepted offers) can be offboarded (current: ${e.status})`, 'bad_status');
  }
  const [apps, grants] = await Promise.all([listApps(), listGrantsForEmployee(id)]);
  const appBy = new Map(apps.map((a) => [a.id, a]));
  const live = grants.filter((g) => g.status !== 'revoked');
  const finalEndDate = endDate ?? e.endDate ?? today();

  if (live.length === 0) {
    await updateEmployee(id, { status: 'exited', endDate: finalEndDate });
    await addAudit({ employeeId: id, actor: 'hris-admin', type: 'offboarding.completed', message: 'Marked exited (no access to revoke)' });
    return { executionArn: null };
  }

  const liveBy = new Map(live.map((g) => [g.appId, g]));
  const targets = appIds.map((x) => liveBy.get(x)).filter((g): g is Grant => !!g);
  if (targets.length === 0) throw new HttpError(400, 'Select at least one app to revoke', 'nothing_to_do');

  for (const g of targets) await patchGrant(id, g.appId, { status: 'revoking', lastError: undefined });
  const previousStatus = e.status;
  await updateEmployee(id, { status: 'offboarding', endDate: finalEndDate });
  const phaseApps = targets.map((g) => ({ id: g.appId, type: appBy.get(g.appId)?.type ?? ('manual' as ConnectorType) }));
  let executionArn: string;
  try {
    executionArn = await startWorkflow({ operation: 'offboard', employeeId: id, ...splitPhases('offboard', phaseApps) });
  } catch (err) {
    await updateEmployee(id, { status: previousStatus });
    for (const g of targets) await patchGrant(id, g.appId, { status: 'revoke_failed', lastError: 'Workflow failed to start' });
    throw err;
  }
  await updateEmployee(id, { executionArn });
  await addAudit({
    employeeId: id,
    actor: 'hris-admin',
    type: 'offboarding.started',
    message: `Offboarding started: ${targets.map((g) => g.appName).join(', ')}`,
  });
  return { executionArn };
}

export async function retryGrant(id: string, appId: string): Promise<{ executionArn: string }> {
  const e = await getEmployee(id);
  if (!e) throw new HttpError(404, 'Employee not found', 'not_found');
  if (BUSY.has(e.status)) throw new HttpError(409, `A workflow is already running (${e.status})`, 'busy');
  const g = await getGrant(id, appId);
  if (!g) throw new HttpError(404, 'Grant not found', 'not_found');
  const app = await getApp(appId);
  if (!app) throw new HttpError(400, 'This app no longer exists in the catalog', 'app_missing');

  let operation: WorkflowOperation;
  if (g.status === 'failed') {
    if (e.status === 'exited') throw new HttpError(409, 'Cannot grant access to someone who has exited', 'exited');
    operation = 'onboard';
  } else if (g.status === 'revoke_failed') {
    operation = 'offboard';
  } else {
    throw new HttpError(409, `Grant is ${g.status}; only failed grants can be retried`, 'bad_status');
  }

  await patchGrant(id, appId, { status: operation === 'onboard' ? 'pending' : 'revoking', lastError: undefined });
  const executionArn = await startWorkflow({ operation, employeeId: id, ...splitPhases(operation, [app]) });
  await addAudit({ employeeId: id, actor: 'hris-admin', type: 'grant.retry', message: `Retrying ${g.appName}` });
  return { executionArn };
}

export async function completeManual(
  id: string,
  appId: string,
): Promise<{ status: GrantStatus; accessSummary: AccessSummary }> {
  const g = await getGrant(id, appId);
  if (!g) throw new HttpError(404, 'Grant not found', 'not_found');
  let next: GrantStatus;
  if (g.status === 'manual_pending') next = 'active';
  else if (g.status === 'manual_revoke_pending') next = 'revoked';
  else throw new HttpError(409, `Grant is ${g.status}; nothing manual to complete`, 'bad_status');
  await patchGrant(id, appId, { status: next });
  await addAudit({
    employeeId: id,
    actor: 'hris-admin',
    type: next === 'active' ? 'grant.manual_done' : 'grant.manual_revoked',
    message: `${g.appName}: marked ${next === 'active' ? 'granted' : 'revoked'} manually`,
  });
  const accessSummary = await refreshAccessSummary(id);
  return { status: next, accessSummary };
}

export async function revealSecret(id: string, appId: string): Promise<{ secret: string }> {
  const secret = await takeOneTimeSecret(id, appId);
  if (!secret) throw new HttpError(404, 'No temporary password available (it can be revealed only once)', 'no_secret');
  await addAudit({ employeeId: id, actor: 'hris-admin', type: 'secret.revealed', message: 'Temporary password revealed', data: { appId } });
  return { secret };
}
```

### 7.5 `backend/src/services/apps.ts`
```ts
import { ulid } from 'ulid';
import { z } from 'zod';
import { CONNECTOR_TYPES, type AppDef, type ConnectorType } from '../shared/types';
import { HttpError } from '../lib/errors';
import { addAudit, deleteApp, getApp, listAllGrants, listApps, putApp } from '../lib/repo';

const ConnectorTypeSchema = z.enum(CONNECTOR_TYPES as unknown as [ConnectorType, ...ConnectorType[]]);
const SECRET_KEY = /(token|secret|password|api[_-]?key|private[_-]?key)/i;
const ConfigSchema = z
  .record(z.string(), z.unknown())
  .refine((c) => !Object.keys(c).some((k) => k !== 'tokenKey' && SECRET_KEY.test(k)), {
    message: 'Do not put secrets in app config; store them in the people-stack/integrations secret and reference them (e.g. tokenKey)',
  });

const AppCreate = z.object({
  name: z.string().trim().min(1).max(80),
  type: ConnectorTypeSchema.default('manual'),
  enabled: z.boolean().default(true),
  defaultForAll: z.boolean().default(false),
  departments: z.array(z.string().trim().min(1)).default([]),
  instructions: z.string().max(4000).default(''),
  config: ConfigSchema.default({}),
  ownerEmail: z.union([z.email(), z.literal('')]).optional(),
});

const AppPatch = z
  .object({
    name: z.string().trim().min(1).max(80).optional(),
    type: ConnectorTypeSchema.optional(),
    enabled: z.boolean().optional(),
    defaultForAll: z.boolean().optional(),
    departments: z.array(z.string().trim().min(1)).optional(),
    instructions: z.string().max(4000).optional(),
    config: ConfigSchema.optional(),
    ownerEmail: z.union([z.email(), z.literal('')]).optional(),
  })
  .strict();

export async function listAppsSorted(): Promise<AppDef[]> {
  return (await listApps()).sort((a, b) => a.name.localeCompare(b.name));
}

export async function createApp(body: unknown): Promise<AppDef> {
  const input = AppCreate.parse(body);
  const now = new Date().toISOString();
  const app: AppDef = { id: ulid(), ...input, createdAt: now, updatedAt: now };
  await putApp(app);
  await addAudit({ actor: 'hris-admin', type: 'app.created', message: `App "${app.name}" added (${app.type})` });
  return app;
}

export async function patchApp(id: string, body: unknown): Promise<AppDef> {
  const input = AppPatch.parse(body);
  const current = await getApp(id);
  if (!current) throw new HttpError(404, 'App not found', 'not_found');
  const next: AppDef = { ...current, ...input, id, createdAt: current.createdAt, updatedAt: new Date().toISOString() };
  await putApp(next);
  await addAudit({ actor: 'hris-admin', type: 'app.updated', message: `App "${next.name}" updated (${Object.keys(input).join(', ')})` });
  return next;
}

export async function removeApp(id: string): Promise<{ deleted: true }> {
  const current = await getApp(id);
  if (!current) throw new HttpError(404, 'App not found', 'not_found');
  const live = (await listAllGrants()).filter((g) => g.appId === id && g.status !== 'revoked');
  if (live.length) throw new HttpError(409, `${live.length} people still have this app; revoke it first`, 'in_use');
  await deleteApp(id);
  await addAudit({ actor: 'hris-admin', type: 'app.deleted', message: `App "${current.name}" deleted` });
  return { deleted: true };
}
```

### 7.6 `backend/src/handlers/api.ts`
```ts
import type { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
import type { Meta } from '../shared/types';
import { requireAdminKey } from '../lib/auth';
import { listAllGrants, listAudit } from '../lib/repo';
import { errorResponse, json, parseJsonBody } from '../lib/respond';
import { getIntegrationSecrets } from '../lib/secrets';
import { createApp, listAppsSorted, patchApp, removeApp } from '../services/apps';
import { createPerson, getPerson, listPeople, patchPerson } from '../services/people';
import { completeManual, offboard, onboard, previewAccess, retryGrant, revealSecret } from '../services/workflow';

interface Req {
  params: Record<string, string>;
  query: Record<string, string | undefined>;
  body: unknown;
}
interface Route {
  method: string;
  pattern: RegExp;
  keys: string[];
  status: number;
  handler: (req: Req) => Promise<unknown>;
}

function route(method: string, path: string, handler: Route['handler'], status = 200): Route {
  const keys: string[] = [];
  const pattern = new RegExp(
    `^${path.replace(/\{(\w+)\}/g, (_m, k: string) => {
      keys.push(k);
      return '([^/]+)';
    })}$`,
  );
  return { method, pattern, keys, status, handler };
}

async function meta(): Promise<Meta> {
  const s = await getIntegrationSecrets();
  return {
    googleDomain: s.googleDomain ?? '',
    region: process.env.APP_REGION ?? '',
    ashbyWebhookConfigured: !!s.ashbyWebhookSecret,
    googleConfigured: !!(s.googleServiceAccount?.client_email && s.googleServiceAccount?.private_key && s.googleAdminSubject),
    version: '0.1.0',
  };
}

const routes: Route[] = [
  route('GET', '/api/meta', () => meta()),
  route('GET', '/api/people', () => listPeople()),
  route('POST', '/api/people', ({ body }) => createPerson(body), 201),
  route('GET', '/api/people/{id}', ({ params }) => getPerson(params.id)),
  route('PATCH', '/api/people/{id}', ({ params, body }) => patchPerson(params.id, body)),
  route('GET', '/api/people/{id}/preview', ({ params, query }) => previewAccess(params.id, query.operation)),
  route('POST', '/api/people/{id}/onboard', ({ params, body }) => onboard(params.id, body), 202),
  route('POST', '/api/people/{id}/offboard', ({ params, body }) => offboard(params.id, body), 202),
  route('POST', '/api/people/{id}/grants/{appId}/complete', ({ params }) => completeManual(params.id, params.appId)),
  route('POST', '/api/people/{id}/grants/{appId}/retry', ({ params }) => retryGrant(params.id, params.appId), 202),
  route('POST', '/api/people/{id}/grants/{appId}/reveal-secret', ({ params }) => revealSecret(params.id, params.appId)),
  route('GET', '/api/apps', () => listAppsSorted()),
  route('POST', '/api/apps', ({ body }) => createApp(body), 201),
  route('PATCH', '/api/apps/{id}', ({ params, body }) => patchApp(params.id, body)),
  route('DELETE', '/api/apps/{id}', ({ params }) => removeApp(params.id)),
  route('GET', '/api/grants', () => listAllGrants()),
  route('GET', '/api/audit', ({ query }) => {
    const n = Number.parseInt(query.limit ?? '300', 10);
    return listAudit(Number.isFinite(n) ? Math.min(Math.max(n, 1), 1000) : 300);
  }),
];

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
  const method = event.requestContext.http.method.toUpperCase();
  const path = event.rawPath.replace(/\/+$/, '') || '/';
  try {
    if (method === 'GET' && path === '/api/health') return json(200, { data: { ok: true } });
    await requireAdminKey(event.headers?.['x-hris-key']);
    for (const r of routes) {
      if (r.method !== method) continue;
      const m = r.pattern.exec(path);
      if (!m) continue;
      const params = Object.fromEntries(r.keys.map((k, i) => [k, decodeURIComponent(m[i + 1])]));
      const data = await r.handler({ params, query: event.queryStringParameters ?? {}, body: parseJsonBody(event) });
      return json(r.status, { data });
    }
    return json(404, { error: { message: `No route for ${method} ${path}`, code: 'not_found' } });
  } catch (err) {
    return errorResponse(err);
  }
};
```

### 7.7 Tests (T2A)

`backend/test/ashbySignature.test.ts`
```ts
import { createHmac } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { verifyAshbySignature } from '../src/lib/ashby';

const secret = 'test-secret';
const body = Buffer.from('{"action":"ping"}');
const sign = (b: Buffer) => `sha256=${createHmac('sha256', secret).update(b).digest('hex')}`;

describe('verifyAshbySignature', () => {
  it('accepts a valid signature', () => {
    expect(verifyAshbySignature(body, sign(body), secret)).toBe(true);
  });
  it('rejects a tampered body', () => {
    expect(verifyAshbySignature(Buffer.from('{"action":"x"}'), sign(body), secret)).toBe(false);
  });
  it('rejects a missing header', () => {
    expect(verifyAshbySignature(body, undefined, secret)).toBe(false);
  });
  it('rejects another algorithm', () => {
    expect(verifyAshbySignature(body, sign(body).replace('sha256', 'sha1'), secret)).toBe(false);
  });
  it('rejects a short signature', () => {
    expect(verifyAshbySignature(body, 'sha256=abc', secret)).toBe(false);
  });
  it('rejects when the secret is empty', () => {
    expect(verifyAshbySignature(body, sign(body), '')).toBe(false);
  });
});
```

`backend/test/ashbyMapping.test.ts`
```ts
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { mapAshbyHire, normalizeDate, splitName, type AshbyWebhook } from '../src/lib/ashby';
import { suggestWorkEmail } from '../src/lib/names';

const sample = JSON.parse(
  readFileSync(path.join(__dirname, '..', '..', 'scripts', 'samples', 'candidateHire.json'), 'utf8'),
) as AshbyWebhook;

describe('Ashby mapping', () => {
  it('maps a candidateHire payload', () => {
    const f = mapAshbyHire(sample.data!.application!, sample.data!.offer);
    expect(f.firstName).toBe('Asha');
    expect(f.lastName).toBe('Rao');
    expect(f.personalEmail).toBe('asha.rao.personal@example.com');
    expect(f.title).toBe('Senior Backend Engineer');
    expect(f.startDate).toBe('2026-11-03');
    expect(f.salary).toEqual({ amount: 3600000, currency: 'INR' });
    expect(f.managerName).toBe('Vikram Shah');
    expect(f.managerEmail).toBe('vikram.shah@example.com');
    expect(f.ashby).toEqual({ candidateId: 'cand-demo-0001', applicationId: 'app-demo-0001', offerId: 'offer-demo-0001', jobId: 'job-demo-0001' });
  });
  it('handles a missing offer', () => {
    const f = mapAshbyHire(sample.data!.application!, undefined);
    expect(f.salary).toBeUndefined();
    expect(f.startDate).toBeUndefined();
  });
  it('normalizes dates', () => {
    expect(normalizeDate('2026-05-01')).toBe('2026-05-01');
    expect(normalizeDate('2026-05-01T00:00:00.000Z')).toBe('2026-05-01');
    expect(normalizeDate('nope')).toBeUndefined();
    expect(normalizeDate(null)).toBeUndefined();
  });
  it('splits names', () => {
    expect(splitName('Asha Devi Rao')).toEqual({ firstName: 'Asha Devi', lastName: 'Rao' });
    expect(splitName('Madonna')).toEqual({ firstName: 'Madonna', lastName: '' });
    expect(splitName('  ')).toEqual({ firstName: 'Unknown', lastName: '' });
  });
  it('suggests work emails', () => {
    expect(suggestWorkEmail('Asha', 'Rao', 'Acme.com')).toBe('asha.rao@acme.com');
    expect(suggestWorkEmail('José María', "O'Neil", 'acme.com')).toBe('jose.oneil@acme.com');
    expect(suggestWorkEmail('Asha', '', 'acme.com')).toBe('asha@acme.com');
    expect(suggestWorkEmail('Asha', 'Rao', undefined)).toBe('');
  });
});
```

`backend/test/webhook.test.ts`
```ts
import { createHmac } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { APIGatewayProxyEventV2 } from 'aws-lambda';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../src/lib/secrets', () => ({
  getIntegrationSecrets: vi.fn(async () => ({ ashbyWebhookSecret: 'whsec', googleDomain: 'acme.com' })),
}));
vi.mock('../src/lib/repo', () => ({
  claimWebhookAction: vi.fn(async () => true),
  releaseWebhookAction: vi.fn(async () => undefined),
  linkAshbyApplication: vi.fn(async (_appId: string, employeeId: string) => ({ created: true, employeeId })),
  getEmployee: vi.fn(async () => undefined),
  putEmployee: vi.fn(async (e: unknown) => e),
  updateEmployee: vi.fn(async (_id: string, patch: unknown) => patch),
  addAudit: vi.fn(async () => ({})),
}));

import * as repo from '../src/lib/repo';
import { handler } from '../src/handlers/ashbyWebhook';

const sampleBody = readFileSync(path.join(__dirname, '..', '..', 'scripts', 'samples', 'candidateHire.json'), 'utf8');
const sign = (b: string) => `sha256=${createHmac('sha256', 'whsec').update(b).digest('hex')}`;
const evt = (body: string, signature?: string) =>
  ({
    body,
    isBase64Encoded: false,
    rawPath: '/api/webhooks/ashby',
    headers: signature ? { 'ashby-signature': signature } : {},
    requestContext: { http: { method: 'POST' } },
  }) as unknown as APIGatewayProxyEventV2;

describe('Ashby webhook handler', () => {
  beforeEach(() => {
    vi.mocked(repo.claimWebhookAction).mockResolvedValue(true);
    vi.mocked(repo.putEmployee).mockImplementation(async (e) => e);
  });

  it('answers ping with 200 without claiming', async () => {
    const body = JSON.stringify({ action: 'ping', data: { webhookActionType: 'ping' } });
    const res = await handler(evt(body, sign(body)));
    expect(res.statusCode).toBe(200);
    expect(repo.claimWebhookAction).not.toHaveBeenCalled();
  });

  it('rejects a bad signature with 401', async () => {
    const res = await handler(evt(sampleBody, `sha256=${'0'.repeat(64)}`));
    expect(res.statusCode).toBe(401);
    expect(repo.putEmployee).not.toHaveBeenCalled();
  });

  it('creates an employee from candidateHire', async () => {
    const res = await handler(evt(sampleBody, sign(sampleBody)));
    expect(res.statusCode).toBe(200);
    expect(repo.putEmployee).toHaveBeenCalledTimes(1);
    const created = vi.mocked(repo.putEmployee).mock.calls[0][0];
    expect(created).toMatchObject({
      status: 'offer_accepted',
      firstName: 'Asha',
      lastName: 'Rao',
      workEmail: 'asha.rao@acme.com',
      startDate: '2026-11-03',
      salary: { amount: 3600000, currency: 'INR' },
      source: 'ashby',
    });
  });

  it('acknowledges duplicates without processing', async () => {
    vi.mocked(repo.claimWebhookAction).mockResolvedValue(false);
    const res = await handler(evt(sampleBody, sign(sampleBody)));
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.body as string)).toMatchObject({ duplicate: true });
    expect(repo.putEmployee).not.toHaveBeenCalled();
  });

  it('releases the claim and returns 500 when processing fails', async () => {
    vi.mocked(repo.putEmployee).mockRejectedValue(new Error('boom'));
    const res = await handler(evt(sampleBody, sign(sampleBody)));
    expect(res.statusCode).toBe(500);
    expect(repo.releaseWebhookAction).toHaveBeenCalledWith('8f0b9b1e-6a3e-4d1f-9a0a-000000000001');
  });
});
```

`backend/test/workflow.test.ts`
```ts
import { describe, expect, it } from 'vitest';
import { splitPhases } from '../src/services/workflow';
import { computeAccessSummary } from '../src/services/access';

const apps = [
  { id: 'g', type: 'google_workspace' as const },
  { id: 'grp', type: 'google_group' as const },
  { id: 'slack', type: 'manual' as const },
  { id: 'jc', type: 'jumpcloud' as const },
];

describe('splitPhases', () => {
  it('runs identity first when onboarding', () => {
    expect(splitPhases('onboard', apps)).toEqual({ phase1: ['g', 'jc'], phase2: ['grp', 'slack'] });
  });
  it('runs identity last when offboarding', () => {
    expect(splitPhases('offboard', apps)).toEqual({ phase1: ['grp', 'slack'], phase2: ['g', 'jc'] });
  });
  it('handles empty input', () => {
    expect(splitPhases('onboard', [])).toEqual({ phase1: [], phase2: [] });
  });
});

describe('computeAccessSummary', () => {
  it('counts statuses', () => {
    const g = (status: string) => ({ employeeId: 'e', appId: status, appName: status, status, updatedAt: '' }) as never;
    expect(
      computeAccessSummary([g('active'), g('manual_pending'), g('failed'), g('revoked'), g('provisioning'), g('revoke_failed')]),
    ).toEqual({ total: 6, active: 1, manualPending: 1, failed: 2, revoked: 1, inFlight: 1 });
  });
});
```
Note: `workflow.test.ts` imports `services/workflow.ts`, which constructs `new SFNClient({})` at module load — that is fine offline (no call is made).

### 7.8 Acceptance (T2A)
- `npm run typecheck -w backend` — must pass for T2A files (if it fails only because T2B files are not written yet, report that and re-run after T2B).
- `npx vitest run test/ashbySignature.test.ts test/ashbyMapping.test.ts test/webhook.test.ts test/workflow.test.ts` (run inside `backend/`) → all green.

---

## 8. T2B — Backend: connectors + workflow runner + tests (Sonnet)

**Files owned:** `backend/src/connectors/*.ts`, `backend/src/handlers/runner.ts`,
`backend/test/{connectors.google,connectors.scim,runner}.test.ts`.

### 8.1 `backend/src/connectors/types.ts`
```ts
import type { AppDef, Employee } from '../shared/types';
import type { IntegrationSecrets } from '../lib/secrets';

export interface ConnectorContext {
  employee: Employee;
  app: AppDef;
  secrets: IntegrationSecrets;
}

export interface ConnectorResult {
  status: 'active' | 'revoked' | 'manual_pending' | 'manual_revoke_pending';
  externalId?: string;
  /** e.g. a temporary password; stored once on the grant and revealable once in the UI. */
  oneTimeSecret?: string;
  message?: string;
}

/**
 * Contract: provision/deprovision must be idempotent (safe to re-run).
 * Throw RetryableError for transient failures (429/5xx/network) — Step Functions retries.
 * Throw any other Error for permanent failures — the grant becomes failed/revoke_failed with the message.
 */
export interface Connector {
  provision(ctx: ConnectorContext): Promise<ConnectorResult>;
  deprovision(ctx: ConnectorContext): Promise<ConnectorResult>;
}
```

### 8.2 `backend/src/connectors/googleAuth.ts`
```ts
import { JWT } from 'google-auth-library';
import { NotConfiguredError, RetryableError } from '../lib/errors';
import type { IntegrationSecrets } from '../lib/secrets';

export const GOOGLE_SCOPES = [
  'https://www.googleapis.com/auth/admin.directory.user',
  'https://www.googleapis.com/auth/admin.directory.user.security',
  'https://www.googleapis.com/auth/admin.directory.group.member',
  'https://www.googleapis.com/auth/admin.datatransfer',
];

let cached: { key: string; client: JWT } | undefined;

/** Access token for the service account impersonating googleAdminSubject (domain-wide delegation). */
export async function googleToken(secrets: IntegrationSecrets): Promise<string> {
  const sa = secrets.googleServiceAccount;
  const subject = secrets.googleAdminSubject;
  if (!sa?.client_email || !sa.private_key || !subject) {
    throw new NotConfiguredError(
      'Google Workspace is not connected: set googleServiceAccount and googleAdminSubject in the people-stack/integrations secret',
    );
  }
  const key = `${sa.client_email}|${subject}`;
  if (!cached || cached.key !== key) {
    cached = { key, client: new JWT({ email: sa.client_email, key: sa.private_key, scopes: GOOGLE_SCOPES, subject }) };
  }
  try {
    const { token } = await cached.client.getAccessToken();
    if (!token) throw new RetryableError('Google: no access token returned');
    return token;
  } catch (e) {
    if (e instanceof RetryableError) throw e;
    const msg = (e as Error).message ?? String(e);
    throw new Error(`Google auth failed: ${msg}. Check domain-wide delegation (client ID + scopes) and googleAdminSubject.`);
  }
}
```

### 8.3 `backend/src/connectors/googleWorkspace.ts`
```ts
import { randomBytes } from 'node:crypto';
import { describeBody, httpJson, type HttpResult } from '../lib/http';
import type { IntegrationSecrets } from '../lib/secrets';
import { googleToken } from './googleAuth';
import type { Connector } from './types';

const DIRECTORY = 'https://admin.googleapis.com/admin/directory/v1';
const DATATRANSFER = 'https://admin.googleapis.com/admin/datatransfer/v1';
/** Google Drive and Docs application id for the Data Transfer API. */
const DRIVE_APP_ID = '55656082996';

export async function google(
  secrets: IntegrationSecrets,
  method: string,
  url: string,
  json?: unknown,
): Promise<HttpResult<any>> {
  const token = await googleToken(secrets);
  return httpJson(url, { method, json, headers: { authorization: `Bearer ${token}` } }, `Google ${method} ${url.split('?')[0]}`);
}

export function googleError(label: string, r: HttpResult<any>): Error {
  return new Error(`${label} failed (HTTP ${r.status}): ${describeBody(r.body)}`);
}

export function generatePassword(): string {
  return `${randomBytes(12).toString('base64url')}aA1!`;
}

const enc = encodeURIComponent;

export const googleWorkspace: Connector = {
  async provision({ employee, app, secrets }) {
    const email = employee.workEmail.trim().toLowerCase();
    if (!email) throw new Error('Employee has no work email');
    const domain = secrets.googleDomain?.trim().toLowerCase();
    if (domain && !email.endsWith(`@${domain}`)) throw new Error(`Work email must end with @${domain}`);
    const cfg = app.config as { orgUnitPath?: string };

    const existing = await google(secrets, 'GET', `${DIRECTORY}/users/${enc(email)}`);
    if (existing.status === 200) {
      if (existing.body?.suspended) {
        const r = await google(secrets, 'PUT', `${DIRECTORY}/users/${enc(email)}`, { suspended: false });
        if (!r.ok) throw googleError('Unsuspend user', r);
        return { status: 'active', externalId: existing.body.id, message: `Reactivated existing account ${email}` };
      }
      return { status: 'active', externalId: existing.body?.id, message: `Account ${email} already exists` };
    }
    if (existing.status !== 404) throw googleError('Look up user', existing);

    const password = generatePassword();
    const created = await google(secrets, 'POST', `${DIRECTORY}/users`, {
      primaryEmail: email,
      name: { givenName: employee.firstName, familyName: employee.lastName || employee.firstName },
      password,
      changePasswordAtNextLogin: true,
      orgUnitPath: cfg.orgUnitPath || '/',
      ...(employee.personalEmail ? { recoveryEmail: employee.personalEmail } : {}),
    });
    if (created.status === 409) return { status: 'active', message: `Account ${email} already exists` };
    if (!created.ok) throw googleError('Create user', created);
    return { status: 'active', externalId: created.body?.id, oneTimeSecret: password, message: `Created ${email}` };
  },

  async deprovision({ employee, app, secrets }) {
    const email = employee.workEmail.trim().toLowerCase();
    if (!email) return { status: 'revoked', message: 'No work email; nothing to revoke' };
    const user = await google(secrets, 'GET', `${DIRECTORY}/users/${enc(email)}`);
    if (user.status === 404) return { status: 'revoked', message: 'Google account not found (already removed)' };
    if (!user.ok) throw googleError('Look up user', user);

    const signOut = await google(secrets, 'POST', `${DIRECTORY}/users/${enc(email)}/signOut`);
    if (!signOut.ok) throw googleError('Sign out user', signOut);
    const suspend = await google(secrets, 'PUT', `${DIRECTORY}/users/${enc(email)}`, { suspended: true });
    if (!suspend.ok) throw googleError('Suspend user', suspend);

    let transfer = '';
    const cfg = app.config as { transferDriveToManager?: boolean };
    if (cfg.transferDriveToManager && employee.managerEmail) {
      const manager = await google(secrets, 'GET', `${DIRECTORY}/users/${enc(employee.managerEmail.trim().toLowerCase())}`);
      if (manager.ok) {
        const t = await google(secrets, 'POST', `${DATATRANSFER}/transfers`, {
          oldOwnerUserId: user.body.id,
          newOwnerUserId: manager.body.id,
          applicationDataTransfers: [
            {
              applicationId: DRIVE_APP_ID,
              applicationTransferParams: [{ key: 'PRIVACY_LEVEL', value: ['PRIVATE', 'SHARED'] }],
            },
          ],
        });
        transfer = t.ok ? '; Drive transfer to manager requested' : `; Drive transfer failed (HTTP ${t.status})`;
      } else {
        transfer = '; manager not found in Google, Drive not transferred';
      }
    }
    return { status: 'revoked', externalId: user.body?.id, message: `Signed out and suspended ${email}${transfer}` };
  },
};
```

### 8.4 `backend/src/connectors/googleGroup.ts`
```ts
import type { Connector } from './types';
import { google, googleError } from './googleWorkspace';

const DIRECTORY = 'https://admin.googleapis.com/admin/directory/v1';
const enc = encodeURIComponent;

function groupOf(config: Record<string, unknown>): string {
  const g = typeof config.groupEmail === 'string' ? config.groupEmail.trim().toLowerCase() : '';
  if (!g) throw new Error('App config is missing groupEmail');
  return g;
}

export const googleGroup: Connector = {
  async provision({ employee, app, secrets }) {
    const group = groupOf(app.config);
    const email = employee.workEmail.trim().toLowerCase();
    if (!email) throw new Error('Employee has no work email');
    const r = await google(secrets, 'POST', `${DIRECTORY}/groups/${enc(group)}/members`, { email, role: 'MEMBER' });
    if (r.status === 409) return { status: 'active', message: `Already a member of ${group}` };
    if (!r.ok) throw googleError(`Add to ${group}`, r);
    return { status: 'active', externalId: group, message: `Added to ${group}` };
  },
  async deprovision({ employee, app, secrets }) {
    const group = groupOf(app.config);
    const email = employee.workEmail.trim().toLowerCase();
    if (!email) return { status: 'revoked', message: 'No work email; nothing to remove' };
    const r = await google(secrets, 'DELETE', `${DIRECTORY}/groups/${enc(group)}/members/${enc(email)}`);
    if (r.status === 404 || r.ok) return { status: 'revoked', message: `Removed from ${group}` };
    throw googleError(`Remove from ${group}`, r);
  },
};
```

### 8.5 `backend/src/connectors/scim.ts`
```ts
import { NotConfiguredError } from '../lib/errors';
import { describeBody, httpJson } from '../lib/http';
import type { IntegrationSecrets } from '../lib/secrets';
import type { Connector } from './types';

const USER_SCHEMA = 'urn:ietf:params:scim:schemas:core:2.0:User';
const PATCH_SCHEMA = 'urn:ietf:params:scim:api:messages:2.0:PatchOp';

interface ScimConfig {
  baseUrl: string;
  tokenKey: string;
  deprovisionMode: 'deactivate' | 'delete';
}

function configOf(config: Record<string, unknown>): ScimConfig {
  const baseUrl = typeof config.baseUrl === 'string' ? config.baseUrl.trim().replace(/\/+$/, '') : '';
  const tokenKey = typeof config.tokenKey === 'string' ? config.tokenKey.trim() : '';
  if (!baseUrl || !tokenKey) throw new Error('SCIM app config needs baseUrl and tokenKey');
  return { baseUrl, tokenKey, deprovisionMode: config.deprovisionMode === 'delete' ? 'delete' : 'deactivate' };
}

function tokenOf(secrets: IntegrationSecrets, key: string): string {
  const t = secrets.scimTokens?.[key];
  if (!t) throw new NotConfiguredError(`No SCIM token "${key}" in people-stack/integrations.scimTokens`);
  return t;
}

async function findUser(cfg: ScimConfig, token: string, userName: string): Promise<{ id: string; active?: boolean } | undefined> {
  const filter = encodeURIComponent(`userName eq "${userName}"`);
  const r = await httpJson(`${cfg.baseUrl}/Users?filter=${filter}`, { headers: { authorization: `Bearer ${token}` } }, 'SCIM find user');
  if (!r.ok) throw new Error(`SCIM find user failed (HTTP ${r.status}): ${describeBody(r.body)}`);
  const first = r.body?.Resources?.[0];
  return first?.id ? { id: String(first.id), active: first.active } : undefined;
}

async function setActive(cfg: ScimConfig, token: string, id: string, active: boolean): Promise<void> {
  const r = await httpJson(
    `${cfg.baseUrl}/Users/${encodeURIComponent(id)}`,
    {
      method: 'PATCH',
      headers: { authorization: `Bearer ${token}` },
      json: { schemas: [PATCH_SCHEMA], Operations: [{ op: 'replace', value: { active } }] },
    },
    'SCIM patch user',
  );
  if (!r.ok) throw new Error(`SCIM ${active ? 'activate' : 'deactivate'} failed (HTTP ${r.status}): ${describeBody(r.body)}`);
}

export const scim: Connector = {
  async provision({ employee, app, secrets }) {
    const cfg = configOf(app.config);
    const token = tokenOf(secrets, cfg.tokenKey);
    const email = employee.workEmail.trim().toLowerCase();
    if (!email) throw new Error('Employee has no work email');

    const existing = await findUser(cfg, token, email);
    if (existing) {
      if (existing.active === false) await setActive(cfg, token, existing.id, true);
      return { status: 'active', externalId: existing.id, message: `${app.name}: user already existed${existing.active === false ? ', reactivated' : ''}` };
    }
    const r = await httpJson(
      `${cfg.baseUrl}/Users`,
      {
        method: 'POST',
        headers: { authorization: `Bearer ${token}` },
        json: {
          schemas: [USER_SCHEMA],
          userName: email,
          displayName: `${employee.firstName} ${employee.lastName}`.trim(),
          name: { givenName: employee.firstName, familyName: employee.lastName || employee.firstName },
          emails: [{ value: email, primary: true, type: 'work' }],
          active: true,
        },
      },
      'SCIM create user',
    );
    if (r.status === 409) {
      const again = await findUser(cfg, token, email);
      return { status: 'active', externalId: again?.id, message: `${app.name}: user already existed` };
    }
    if (!r.ok) throw new Error(`SCIM create user failed (HTTP ${r.status}): ${describeBody(r.body)}`);
    return { status: 'active', externalId: r.body?.id ? String(r.body.id) : undefined, message: `${app.name}: user created` };
  },

  async deprovision({ employee, app, secrets }) {
    const cfg = configOf(app.config);
    const token = tokenOf(secrets, cfg.tokenKey);
    const email = employee.workEmail.trim().toLowerCase();
    if (!email) return { status: 'revoked', message: 'No work email; nothing to revoke' };
    const existing = await findUser(cfg, token, email);
    if (!existing) return { status: 'revoked', message: `${app.name}: user not found (already removed)` };
    if (cfg.deprovisionMode === 'delete') {
      const r = await httpJson(
        `${cfg.baseUrl}/Users/${encodeURIComponent(existing.id)}`,
        { method: 'DELETE', headers: { authorization: `Bearer ${token}` } },
        'SCIM delete user',
      );
      if (!r.ok && r.status !== 404) throw new Error(`SCIM delete user failed (HTTP ${r.status}): ${describeBody(r.body)}`);
      return { status: 'revoked', externalId: existing.id, message: `${app.name}: user deleted` };
    }
    await setActive(cfg, token, existing.id, false);
    return { status: 'revoked', externalId: existing.id, message: `${app.name}: user deactivated` };
  },
};
```

### 8.6 `backend/src/connectors/jumpcloud.ts`
> JumpCloud API paths below follow JumpCloud's v1/v2 API as commonly documented. **Before enabling the JumpCloud app in production**,
> verify them against https://docs.jumpcloud.com/api (T5 also records this as an open item). Unit tests are not required for this file.
```ts
import { NotConfiguredError } from '../lib/errors';
import { describeBody, httpJson } from '../lib/http';
import type { IntegrationSecrets } from '../lib/secrets';
import type { Connector } from './types';

const BASE = 'https://console.jumpcloud.com/api';

function keyOf(secrets: IntegrationSecrets): string {
  if (!secrets.jumpcloudApiKey) throw new NotConfiguredError('JumpCloud is not connected: set jumpcloudApiKey in people-stack/integrations');
  return secrets.jumpcloudApiKey;
}

async function jc(secrets: IntegrationSecrets, method: string, path: string, json?: unknown) {
  return httpJson(`${BASE}${path}`, { method, json, headers: { 'x-api-key': keyOf(secrets) } }, `JumpCloud ${method} ${path.split('?')[0]}`);
}

async function findUser(secrets: IntegrationSecrets, email: string): Promise<{ _id: string; suspended?: boolean } | undefined> {
  const r = await jc(secrets, 'GET', `/systemusers?filter=${encodeURIComponent(`email:$eq:${email}`)}`);
  if (!r.ok) throw new Error(`JumpCloud find user failed (HTTP ${r.status}): ${describeBody(r.body)}`);
  return r.body?.results?.[0];
}

export const jumpcloud: Connector = {
  async provision({ employee, app, secrets }) {
    const email = employee.workEmail.trim().toLowerCase();
    if (!email) throw new Error('Employee has no work email');
    let user = await findUser(secrets, email);
    if (user?.suspended) {
      const r = await jc(secrets, 'PUT', `/systemusers/${user._id}`, { suspended: false });
      if (!r.ok) throw new Error(`JumpCloud unsuspend failed (HTTP ${r.status}): ${describeBody(r.body)}`);
    }
    if (!user) {
      const r = await jc(secrets, 'POST', '/systemusers', {
        username: email.split('@')[0].replace(/[^a-z0-9._-]/g, ''),
        email,
        firstname: employee.firstName,
        lastname: employee.lastName || employee.firstName,
      });
      if (!r.ok) throw new Error(`JumpCloud create user failed (HTTP ${r.status}): ${describeBody(r.body)}`);
      user = { _id: String(r.body?._id) };
    }
    const groups = Array.isArray(app.config.userGroupIds) ? (app.config.userGroupIds as unknown[]).map(String) : [];
    for (const gid of groups) {
      const r = await jc(secrets, 'POST', `/v2/usergroups/${encodeURIComponent(gid)}/members`, { op: 'add', type: 'user', id: user._id });
      if (!r.ok && r.status !== 409) throw new Error(`JumpCloud add to group ${gid} failed (HTTP ${r.status}): ${describeBody(r.body)}`);
    }
    return { status: 'active', externalId: user._id, message: `JumpCloud user ready (${groups.length} groups)` };
  },
  async deprovision({ employee, secrets }) {
    const email = employee.workEmail.trim().toLowerCase();
    if (!email) return { status: 'revoked', message: 'No work email; nothing to revoke' };
    const user = await findUser(secrets, email);
    if (!user) return { status: 'revoked', message: 'JumpCloud user not found (already removed)' };
    const r = await jc(secrets, 'PUT', `/systemusers/${user._id}`, { suspended: true });
    if (!r.ok) throw new Error(`JumpCloud suspend failed (HTTP ${r.status}): ${describeBody(r.body)}`);
    return { status: 'revoked', externalId: user._id, message: 'JumpCloud user suspended (cascades to SSO/SCIM apps)' };
  },
};
```

### 8.7 `backend/src/connectors/manual.ts` and `backend/src/connectors/index.ts`
```ts
// manual.ts
import type { Connector } from './types';

export const manual: Connector = {
  async provision({ app }) {
    return { status: 'manual_pending', message: app.instructions ? `Manual step: ${app.instructions}` : 'Manual step required' };
  },
  async deprovision({ app }) {
    return { status: 'manual_revoke_pending', message: `Remove access in ${app.name} manually, then mark done` };
  },
};
```
```ts
// index.ts
import type { ConnectorType } from '../shared/types';
import { googleGroup } from './googleGroup';
import { googleWorkspace } from './googleWorkspace';
import { jumpcloud } from './jumpcloud';
import { manual } from './manual';
import { scim } from './scim';
import type { Connector } from './types';

const CONNECTORS: Record<ConnectorType, Connector> = {
  google_workspace: googleWorkspace,
  google_group: googleGroup,
  scim,
  jumpcloud,
  manual,
};

export function getConnector(type: ConnectorType): Connector {
  return CONNECTORS[type] ?? manual;
}

export type { Connector, ConnectorContext, ConnectorResult } from './types';
```

### 8.8 `backend/src/handlers/runner.ts`
```ts
import type { WorkflowOperation } from '../shared/types';
import { RetryableError } from '../lib/errors';
import { addAudit, getApp, getEmployee, patchGrant, updateEmployee } from '../lib/repo';
import { getIntegrationSecrets } from '../lib/secrets';
import { refreshAccessSummary } from '../services/access';
import { getConnector } from '../connectors';

interface StepError {
  Error?: string;
  Cause?: string;
}

export type RunnerEvent =
  | { mode: WorkflowOperation; employeeId: string; appId: string }
  | { mode: 'fail'; operation: WorkflowOperation; employeeId: string; appId: string; error?: StepError }
  | { mode: 'finalize'; operation: WorkflowOperation; employeeId: string; workflowError?: StepError };

export function causeMessage(err?: StepError): string {
  if (!err) return 'Unknown error';
  if (err.Cause) {
    try {
      const parsed = JSON.parse(err.Cause) as { errorMessage?: string };
      if (parsed.errorMessage) return parsed.errorMessage;
    } catch {
      // Cause was not JSON
    }
    return err.Cause;
  }
  return err.Error ?? 'Unknown error';
}

async function runOne(operation: WorkflowOperation, employeeId: string, appId: string) {
  const isOn = operation === 'onboard';
  const [employee, app] = await Promise.all([getEmployee(employeeId), getApp(appId)]);
  if (!employee) throw new Error(`Employee ${employeeId} not found`);
  if (!app) {
    await patchGrant(employeeId, appId, {
      status: isOn ? 'failed' : 'manual_revoke_pending',
      lastError: isOn ? 'App no longer exists in the catalog' : 'App was deleted from the catalog; revoke manually',
    });
    return { ok: false };
  }

  await patchGrant(employeeId, appId, { appName: app.name, status: isOn ? 'provisioning' : 'revoking' });
  const connector = getConnector(app.type);
  try {
    const secrets = await getIntegrationSecrets();
    const ctx = { employee, app, secrets };
    const result = isOn ? await connector.provision(ctx) : await connector.deprovision(ctx);
    await patchGrant(employeeId, appId, {
      status: result.status,
      externalId: result.externalId,
      lastError: undefined,
      ...(result.oneTimeSecret ? { oneTimeSecret: result.oneTimeSecret } : {}),
    });
    await addAudit({
      employeeId,
      actor: 'workflow',
      type: `grant.${result.status}`,
      message: `${app.name}: ${result.message ?? result.status}`,
      data: { appId },
    });
    return { ok: true, status: result.status };
  } catch (err) {
    if (err instanceof RetryableError) throw err;
    const msg = err instanceof Error ? err.message : String(err);
    await patchGrant(employeeId, appId, { status: isOn ? 'failed' : 'revoke_failed', lastError: msg });
    await addAudit({
      employeeId,
      actor: 'workflow',
      type: isOn ? 'grant.failed' : 'grant.revoke_failed',
      message: `${app.name}: ${msg}`,
      data: { appId },
    });
    return { ok: false };
  }
}

async function markFailed(e: Extract<RunnerEvent, { mode: 'fail' }>) {
  const msg = `Gave up after retries: ${causeMessage(e.error)}`;
  await patchGrant(e.employeeId, e.appId, { status: e.operation === 'onboard' ? 'failed' : 'revoke_failed', lastError: msg });
  await addAudit({
    employeeId: e.employeeId,
    actor: 'workflow',
    type: e.operation === 'onboard' ? 'grant.failed' : 'grant.revoke_failed',
    message: msg,
    data: { appId: e.appId },
  });
  return { ok: false };
}

async function finalize(e: Extract<RunnerEvent, { mode: 'finalize' }>) {
  const employee = await getEmployee(e.employeeId);
  if (!employee) return { ok: false };
  const summary = await refreshAccessSummary(e.employeeId);
  const status = e.operation === 'onboard' ? 'active' : 'exited';
  await updateEmployee(e.employeeId, {
    status,
    executionArn: undefined,
    ...(status === 'exited' && !employee.endDate ? { endDate: new Date().toISOString().slice(0, 10) } : {}),
  });
  const parts = [`${summary.active} active`, `${summary.manualPending} manual`, `${summary.failed} failed`];
  if (e.operation === 'offboard') parts.unshift(`${summary.revoked} revoked`);
  await addAudit({
    employeeId: e.employeeId,
    actor: 'workflow',
    type: e.operation === 'onboard' ? 'onboarding.completed' : 'offboarding.completed',
    message: `${e.operation === 'onboard' ? 'Onboarding' : 'Offboarding'} finished${e.workflowError ? ' with errors' : ''}: ${parts.join(', ')}`,
    data: e.workflowError ? { error: causeMessage(e.workflowError) } : undefined,
  });
  return { ok: true, summary };
}

export const handler = async (event: RunnerEvent) => {
  switch (event.mode) {
    case 'onboard':
    case 'offboard':
      return runOne(event.mode, event.employeeId, event.appId);
    case 'fail':
      return markFailed(event);
    case 'finalize':
      return finalize(event);
    default:
      throw new Error(`Unknown runner event: ${JSON.stringify(event)}`);
  }
};
```

### 8.9 Tests (T2B)

`backend/test/connectors.google.test.ts`
```ts
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('google-auth-library', () => ({
  JWT: class {
    async getAccessToken() {
      return { token: 'test-token' };
    }
  },
}));

import { RetryableError } from '../src/lib/errors';
import { googleWorkspace } from '../src/connectors/googleWorkspace';
import type { AppDef, Employee } from '../src/shared/types';

const secrets = {
  googleDomain: 'acme.com',
  googleAdminSubject: 'admin@acme.com',
  googleServiceAccount: { client_email: 'sa@x.iam.gserviceaccount.com', private_key: 'k' },
};
const employee = {
  id: 'e1', status: 'onboarding', firstName: 'Asha', lastName: 'Rao', personalEmail: 'asha@example.com',
  workEmail: 'asha.rao@acme.com', title: '', department: '', location: '', employmentType: 'full_time',
  source: 'manual', createdAt: '', updatedAt: '', managerEmail: 'boss@acme.com',
} as Employee;
const app = { id: 'g', name: 'Google', type: 'google_workspace', enabled: true, defaultForAll: true, departments: [], instructions: '', config: { orgUnitPath: '/', transferDriveToManager: true }, createdAt: '', updatedAt: '' } as AppDef;
const res = (status: number, body?: unknown) =>
  new Response(body === undefined ? null : JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

describe('googleWorkspace connector', () => {
  const fetchMock = vi.fn();
  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);
  });
  afterEach(() => vi.unstubAllGlobals());

  it('creates a missing user and returns a one-time password', async () => {
    fetchMock.mockResolvedValueOnce(res(404, { error: { message: 'Not found' } })).mockResolvedValueOnce(res(200, { id: 'g-1' }));
    const r = await googleWorkspace.provision({ employee, app, secrets });
    expect(r.status).toBe('active');
    expect(r.externalId).toBe('g-1');
    expect(r.oneTimeSecret).toMatch(/aA1!$/);
    const [url, init] = fetchMock.mock.calls[1];
    expect(url).toBe('https://admin.googleapis.com/admin/directory/v1/users');
    expect(JSON.parse(init.body)).toMatchObject({ primaryEmail: 'asha.rao@acme.com', changePasswordAtNextLogin: true, orgUnitPath: '/' });
    expect(init.headers.authorization).toBe('Bearer test-token');
  });

  it('reactivates a suspended user without a new password', async () => {
    fetchMock.mockResolvedValueOnce(res(200, { id: 'g-1', suspended: true })).mockResolvedValueOnce(res(200, { id: 'g-1' }));
    const r = await googleWorkspace.provision({ employee, app, secrets });
    expect(r.status).toBe('active');
    expect(r.oneTimeSecret).toBeUndefined();
    expect(fetchMock.mock.calls[1][1].method).toBe('PUT');
  });

  it('rejects a work email outside the domain', async () => {
    await expect(
      googleWorkspace.provision({ employee: { ...employee, workEmail: 'asha@other.com' }, app, secrets }),
    ).rejects.toThrow('@acme.com');
  });

  it('throws RetryableError on 429', async () => {
    fetchMock.mockResolvedValueOnce(res(429, {}));
    await expect(googleWorkspace.provision({ employee, app, secrets })).rejects.toBeInstanceOf(RetryableError);
  });

  it('signs out, suspends and transfers Drive on deprovision', async () => {
    fetchMock
      .mockResolvedValueOnce(res(200, { id: 'g-1' }))
      .mockResolvedValueOnce(res(204))
      .mockResolvedValueOnce(res(200, { id: 'g-1', suspended: true }))
      .mockResolvedValueOnce(res(200, { id: 'm-1' }))
      .mockResolvedValueOnce(res(200, { id: 't-1' }));
    const r = await googleWorkspace.deprovision({ employee, app, secrets });
    expect(r.status).toBe('revoked');
    expect(r.message).toContain('Drive transfer to manager requested');
    expect(fetchMock.mock.calls[1][0]).toContain('/signOut');
    expect(JSON.parse(fetchMock.mock.calls[2][1].body)).toEqual({ suspended: true });
    expect(fetchMock.mock.calls[4][0]).toBe('https://admin.googleapis.com/admin/datatransfer/v1/transfers');
  });

  it('treats a missing user as already revoked', async () => {
    fetchMock.mockResolvedValueOnce(res(404, {}));
    const r = await googleWorkspace.deprovision({ employee, app, secrets });
    expect(r.status).toBe('revoked');
  });
});
```

`backend/test/connectors.scim.test.ts`
```ts
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { NotConfiguredError } from '../src/lib/errors';
import { scim } from '../src/connectors/scim';
import type { AppDef, Employee } from '../src/shared/types';

const secrets = { scimTokens: { slack: 'tok' } };
const employee = {
  id: 'e1', status: 'onboarding', firstName: 'Asha', lastName: 'Rao', personalEmail: 'a@example.com',
  workEmail: 'asha.rao@acme.com', title: '', department: '', location: '', employmentType: 'full_time',
  source: 'manual', createdAt: '', updatedAt: '',
} as Employee;
const app = { id: 's', name: 'Slack', type: 'scim', enabled: true, defaultForAll: true, departments: [], instructions: '', config: { baseUrl: 'https://scim.example.com/v2/', tokenKey: 'slack' }, createdAt: '', updatedAt: '' } as AppDef;
const res = (status: number, body?: unknown) => new Response(body === undefined ? null : JSON.stringify(body), { status });

describe('scim connector', () => {
  const fetchMock = vi.fn();
  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);
  });
  afterEach(() => vi.unstubAllGlobals());

  it('creates a new user', async () => {
    fetchMock.mockResolvedValueOnce(res(200, { Resources: [] })).mockResolvedValueOnce(res(201, { id: 'u1' }));
    const r = await scim.provision({ employee, app, secrets });
    expect(r).toMatchObject({ status: 'active', externalId: 'u1' });
    expect(fetchMock.mock.calls[0][0]).toBe(
      `https://scim.example.com/v2/Users?filter=${encodeURIComponent('userName eq "asha.rao@acme.com"')}`,
    );
    expect(fetchMock.mock.calls[0][1].headers.authorization).toBe('Bearer tok');
    expect(JSON.parse(fetchMock.mock.calls[1][1].body)).toMatchObject({ userName: 'asha.rao@acme.com', active: true });
  });

  it('reactivates an inactive user', async () => {
    fetchMock.mockResolvedValueOnce(res(200, { Resources: [{ id: 'u1', active: false }] })).mockResolvedValueOnce(res(200, {}));
    const r = await scim.provision({ employee, app, secrets });
    expect(r.status).toBe('active');
    expect(JSON.parse(fetchMock.mock.calls[1][1].body).Operations[0]).toEqual({ op: 'replace', value: { active: true } });
  });

  it('deactivates on deprovision', async () => {
    fetchMock.mockResolvedValueOnce(res(200, { Resources: [{ id: 'u1', active: true }] })).mockResolvedValueOnce(res(200, {}));
    const r = await scim.deprovision({ employee, app, secrets });
    expect(r.status).toBe('revoked');
    expect(fetchMock.mock.calls[1][1].method).toBe('PATCH');
    expect(JSON.parse(fetchMock.mock.calls[1][1].body).Operations[0]).toEqual({ op: 'replace', value: { active: false } });
  });

  it('fails clearly when the token is missing', async () => {
    await expect(scim.provision({ employee, app, secrets: {} })).rejects.toBeInstanceOf(NotConfiguredError);
  });
});
```

`backend/test/runner.test.ts`
```ts
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../src/lib/secrets', () => ({ getIntegrationSecrets: vi.fn(async () => ({})) }));
vi.mock('../src/lib/repo', () => ({
  getEmployee: vi.fn(),
  getApp: vi.fn(),
  patchGrant: vi.fn(async () => ({})),
  addAudit: vi.fn(async () => ({})),
  updateEmployee: vi.fn(async () => ({})),
}));
vi.mock('../src/services/access', () => ({
  refreshAccessSummary: vi.fn(async () => ({ total: 2, active: 1, manualPending: 1, failed: 0, revoked: 0, inFlight: 0 })),
}));
const { provision, deprovision } = vi.hoisted(() => ({ provision: vi.fn(), deprovision: vi.fn() }));
vi.mock('../src/connectors', () => ({ getConnector: () => ({ provision, deprovision }) }));

import * as repo from '../src/lib/repo';
import { RetryableError } from '../src/lib/errors';
import { causeMessage, handler } from '../src/handlers/runner';

const employee = { id: 'e1', firstName: 'A', lastName: 'B', workEmail: 'a@acme.com', status: 'onboarding' };
const app = { id: 'app1', name: 'Slack', type: 'manual', config: {}, instructions: '' };

describe('runner', () => {
  beforeEach(() => {
    vi.mocked(repo.getEmployee).mockResolvedValue(employee as never);
    vi.mocked(repo.getApp).mockResolvedValue(app as never);
    provision.mockReset();
    deprovision.mockReset();
  });

  it('marks the grant with the connector result', async () => {
    provision.mockResolvedValue({ status: 'active', externalId: 'x1', message: 'ok' });
    await expect(handler({ mode: 'onboard', employeeId: 'e1', appId: 'app1' })).resolves.toMatchObject({ ok: true });
    const last = vi.mocked(repo.patchGrant).mock.calls.at(-1)!;
    expect(last[2]).toMatchObject({ status: 'active', externalId: 'x1' });
  });

  it('rethrows RetryableError so Step Functions retries', async () => {
    provision.mockRejectedValue(new RetryableError('HTTP 503'));
    await expect(handler({ mode: 'onboard', employeeId: 'e1', appId: 'app1' })).rejects.toBeInstanceOf(RetryableError);
  });

  it('marks failed on a permanent error', async () => {
    provision.mockRejectedValue(new Error('bad config'));
    await expect(handler({ mode: 'onboard', employeeId: 'e1', appId: 'app1' })).resolves.toMatchObject({ ok: false });
    const last = vi.mocked(repo.patchGrant).mock.calls.at(-1)!;
    expect(last[2]).toMatchObject({ status: 'failed', lastError: 'bad config' });
  });

  it('uses revoke_failed when offboarding fails', async () => {
    deprovision.mockRejectedValue(new Error('nope'));
    await handler({ mode: 'offboard', employeeId: 'e1', appId: 'app1' });
    expect(vi.mocked(repo.patchGrant).mock.calls.at(-1)![2]).toMatchObject({ status: 'revoke_failed' });
  });

  it('finalize sets active after onboarding', async () => {
    await handler({ mode: 'finalize', operation: 'onboard', employeeId: 'e1' });
    expect(vi.mocked(repo.updateEmployee).mock.calls.at(-1)![1]).toMatchObject({ status: 'active' });
  });

  it('finalize sets exited after offboarding', async () => {
    await handler({ mode: 'finalize', operation: 'offboard', employeeId: 'e1' });
    expect(vi.mocked(repo.updateEmployee).mock.calls.at(-1)![1]).toMatchObject({ status: 'exited' });
  });

  it('parses Step Functions causes', () => {
    expect(causeMessage({ Error: 'X', Cause: JSON.stringify({ errorMessage: 'boom' }) })).toBe('boom');
    expect(causeMessage({ Error: 'States.Timeout' })).toBe('States.Timeout');
  });
});
```

### 8.10 Acceptance (T2B)
- Inside `backend/`: `npx vitest run test/connectors.google.test.ts test/connectors.scim.test.ts test/runner.test.ts` → all green.
- `npm run typecheck -w backend` (after T2A is done) → passes.

---

## 9. T3 — Infrastructure (AWS CDK) (Sonnet)

**Files owned:** `infra/bin/app.ts`, `infra/lib/people-stack.ts`.

### 9.1 `infra/bin/app.ts`
```ts
import * as cdk from 'aws-cdk-lib';
import { PeopleStack } from '../lib/people-stack';

const app = new cdk.App();
new PeopleStack(app, 'PeopleStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'ap-southeast-2' },
  description: 'People stack HRIS: API, Ashby webhook, access workflows, web app',
});
cdk.Tags.of(app).add('project', 'people-stack');
```

### 9.2 `infra/lib/people-stack.ts`
```ts
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as cdk from 'aws-cdk-lib';
import * as apigwv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { Construct } from 'constructs';

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const HANDLERS = path.join(REPO_ROOT, 'backend', 'src', 'handlers');
const WEB_DIST = path.join(REPO_ROOT, 'frontend', 'dist');
const INTEGRATIONS_SECRET_NAME = 'people-stack/integrations';

export class PeopleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ---------- Data ----------
    const table = new dynamodb.Table(this, 'Table', {
      tableName: 'people-stack',
      partitionKey: { name: 'PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'SK', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      timeToLiveAttribute: 'ttl',
      pointInTimeRecoverySpecification: { pointInTimeRecoveryEnabled: true },
      deletionProtection: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });
    table.addGlobalSecondaryIndex({
      indexName: 'GSI1',
      partitionKey: { name: 'GSI1PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'GSI1SK', type: dynamodb.AttributeType.STRING },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    // ---------- Secrets ----------
    // Created by the CLI before the first deploy (see §T6b); referenced here so values are never in templates.
    const integrationsSecret = secretsmanager.Secret.fromSecretNameV2(this, 'IntegrationsSecret', INTEGRATIONS_SECRET_NAME);
    const adminKey = new secretsmanager.Secret(this, 'AdminApiKey', {
      secretName: 'people-stack/admin-api-key',
      description: 'Temporary shared access key for the HRIS UI until SSO is added',
      generateSecretString: { passwordLength: 40, excludePunctuation: true },
    });

    // ---------- Lambdas ----------
    const baseEnv = {
      TABLE_NAME: table.tableName,
      INTEGRATIONS_SECRET_NAME,
      NODE_OPTIONS: '--enable-source-maps',
    };
    const makeFn = (name: string, file: string, overrides: Partial<nodejs.NodejsFunctionProps> = {}) =>
      new nodejs.NodejsFunction(this, name, {
        entry: path.join(HANDLERS, file),
        handler: 'handler',
        runtime: lambda.Runtime.NODEJS_24_X,
        architecture: lambda.Architecture.ARM_64,
        memorySize: 512,
        timeout: cdk.Duration.seconds(30),
        projectRoot: REPO_ROOT,
        depsLockFilePath: path.join(REPO_ROOT, 'package-lock.json'),
        logGroup: new logs.LogGroup(this, `${name}Logs`, {
          retention: logs.RetentionDays.ONE_MONTH,
          removalPolicy: cdk.RemovalPolicy.DESTROY,
        }),
        bundling: {
          minify: true,
          sourceMap: true,
          keepNames: true,
          target: 'node24',
          externalModules: ['@aws-sdk/*'],
          forceDockerBundling: false,
        },
        environment: baseEnv,
        ...overrides,
      });

    const runnerFn = makeFn('RunnerFn', 'runner.ts', { timeout: cdk.Duration.seconds(60) });
    const webhookFn = makeFn('AshbyWebhookFn', 'ashbyWebhook.ts');

    // ---------- Access workflow (Step Functions) ----------
    const invokeRunner = (id: string, payload: Record<string, unknown>) =>
      new tasks.LambdaInvoke(this, id, {
        lambdaFunction: runnerFn,
        payload: sfn.TaskInput.fromObject(payload),
        payloadResponseOnly: true,
        resultPath: sfn.JsonPath.DISCARD,
      });

    const buildPhase = (name: 'Phase1' | 'Phase2', itemsKey: 'phase1' | 'phase2') => {
      const runApp = invokeRunner(`${name}RunApp`, {
        mode: sfn.JsonPath.stringAt('$.operation'),
        employeeId: sfn.JsonPath.stringAt('$.employeeId'),
        appId: sfn.JsonPath.stringAt('$.appId'),
      });
      runApp.addRetry({
        errors: ['RetryableError'],
        interval: cdk.Duration.seconds(10),
        backoffRate: 2,
        maxAttempts: 5,
      });
      const markFailed = invokeRunner(`${name}MarkFailed`, {
        mode: 'fail',
        operation: sfn.JsonPath.stringAt('$.operation'),
        employeeId: sfn.JsonPath.stringAt('$.employeeId'),
        appId: sfn.JsonPath.stringAt('$.appId'),
        error: sfn.JsonPath.objectAt('$.error'),
      });
      runApp.addCatch(markFailed, { errors: ['States.ALL'], resultPath: '$.error' });
      return new sfn.Map(this, name, {
        itemsPath: sfn.JsonPath.stringAt(`$.${itemsKey}`),
        maxConcurrency: 4,
        itemSelector: {
          operation: sfn.JsonPath.stringAt('$.operation'),
          employeeId: sfn.JsonPath.stringAt('$.employeeId'),
          appId: sfn.JsonPath.stringAt('$$.Map.Item.Value'),
        },
        resultPath: sfn.JsonPath.DISCARD,
      }).itemProcessor(runApp);
    };

    const phase1 = buildPhase('Phase1', 'phase1');
    const phase2 = buildPhase('Phase2', 'phase2');
    const finalize = invokeRunner('Finalize', {
      mode: 'finalize',
      operation: sfn.JsonPath.stringAt('$.operation'),
      employeeId: sfn.JsonPath.stringAt('$.employeeId'),
    });
    const finalizeAfterError = invokeRunner('FinalizeAfterError', {
      mode: 'finalize',
      operation: sfn.JsonPath.stringAt('$.operation'),
      employeeId: sfn.JsonPath.stringAt('$.employeeId'),
      workflowError: sfn.JsonPath.objectAt('$.workflowError'),
    });
    phase1.addCatch(finalizeAfterError, { errors: ['States.ALL'], resultPath: '$.workflowError' });
    phase2.addCatch(finalizeAfterError, { errors: ['States.ALL'], resultPath: '$.workflowError' });

    const stateMachine = new sfn.StateMachine(this, 'AccessWorkflow', {
      stateMachineName: 'people-stack-access',
      definitionBody: sfn.DefinitionBody.fromChainable(phase1.next(phase2).next(finalize)),
      timeout: cdk.Duration.hours(2),
    });

    const apiFn = makeFn('ApiFn', 'api.ts', {
      environment: {
        ...baseEnv,
        ADMIN_KEY_SECRET_NAME: adminKey.secretName,
        STATE_MACHINE_ARN: stateMachine.stateMachineArn,
        APP_REGION: this.region,
      },
    });

    for (const f of [apiFn, webhookFn, runnerFn]) {
      table.grantReadWriteData(f);
      integrationsSecret.grantRead(f);
    }
    adminKey.grantRead(apiFn);
    stateMachine.grantStartExecution(apiFn);

    // ---------- HTTP API ----------
    const httpApi = new apigwv2.HttpApi(this, 'HttpApi', { apiName: 'people-stack-api', createDefaultStage: true });
    httpApi.addRoutes({
      path: '/api/webhooks/ashby',
      methods: [apigwv2.HttpMethod.POST],
      integration: new integrations.HttpLambdaIntegration('AshbyWebhookIntegration', webhookFn),
    });
    httpApi.addRoutes({
      path: '/api/{proxy+}',
      methods: [apigwv2.HttpMethod.ANY],
      integration: new integrations.HttpLambdaIntegration('ApiIntegration', apiFn),
    });

    // ---------- Web (S3 + CloudFront) ----------
    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
    const spaRewrite = new cloudfront.Function(this, 'SpaRewrite', {
      runtime: cloudfront.FunctionRuntime.JS_2_0,
      code: cloudfront.FunctionCode.fromInline(
        "function handler(event) { var r = event.request; if (r.uri.indexOf('.') === -1) { r.uri = '/index.html'; } return r; }",
      ),
    });
    const apiDomain = cdk.Fn.select(2, cdk.Fn.split('/', httpApi.apiEndpoint));
    const distribution = new cloudfront.Distribution(this, 'Site', {
      comment: 'People Workbook',
      defaultRootObject: 'index.html',
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      priceClass: cloudfront.PriceClass.PRICE_CLASS_200,
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(siteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [{ function: spaRewrite, eventType: cloudfront.FunctionEventType.VIEWER_REQUEST }],
      },
      additionalBehaviors: {
        '/api/*': {
          origin: new origins.HttpOrigin(apiDomain, { protocolPolicy: cloudfront.OriginProtocolPolicy.HTTPS_ONLY }),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.HTTPS_ONLY,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
          cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
          originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
        },
      },
    });

    if (fs.existsSync(path.join(WEB_DIST, 'index.html'))) {
      new s3deploy.BucketDeployment(this, 'DeploySite', {
        sources: [s3deploy.Source.asset(WEB_DIST)],
        destinationBucket: siteBucket,
        distribution,
        distributionPaths: ['/*'],
        memoryLimit: 512,
      });
    } else {
      cdk.Annotations.of(this).addWarningV2(
        'people-stack:no-frontend-build',
        'frontend/dist not found; run `npm run build -w frontend` before deploying. Site content was not deployed.',
      );
    }

    // ---------- Outputs ----------
    new cdk.CfnOutput(this, 'SiteUrl', { value: `https://${distribution.distributionDomainName}` });
    new cdk.CfnOutput(this, 'AshbyWebhookUrl', { value: `https://${distribution.distributionDomainName}/api/webhooks/ashby` });
    new cdk.CfnOutput(this, 'ApiEndpoint', { value: httpApi.apiEndpoint });
    new cdk.CfnOutput(this, 'StateMachineArn', { value: stateMachine.stateMachineArn });
    new cdk.CfnOutput(this, 'TableName', { value: table.tableName });
    new cdk.CfnOutput(this, 'AdminKeySecretName', { value: adminKey.secretName });
  }
}
```

### 9.3 Acceptance (T3)
- `npm run typecheck -w infra` → passes.
- `npm run synth -w infra` (no AWS credentials needed) → succeeds and bundles 3 Lambdas with esbuild (no Docker). If it fails only because
  `backend/src/handlers/*.ts` do not exist yet (T2A/T2B still running), report that; the orchestrator re-runs synth in T6a.
- In the synthesized template (`infra/cdk.out/PeopleStack.template.json`) confirm: 1 `AWS::DynamoDB::Table`, 1 `AWS::StepFunctions::StateMachine`,
  1 `AWS::ApiGatewayV2::Api`, 1 `AWS::CloudFront::Distribution`, Lambda runtime `nodejs24.x`.

---

## 10. T4 — Frontend: "People Workbook" (Sonnet)

**Files owned:** everything under `frontend/src/` except `frontend/src/api/types.ts`.
Before writing code, read §10.1 (design spec) fully. Then write the files in §10.3 verbatim, in the listed order.

### 10.1 Design spec — "an interactive workbook on a whiteboard"

**Concept.** HR opens what feels like a well-made spreadsheet file sitting on a clean whiteboard. The grid is the hero: column letters,
row numbers, a formula bar, sheet tabs at the bottom, a status bar with Σ — all real and functional, not decoration. Everything around
the grid (inspector, dialogs) looks like crisp cards pinned to the whiteboard. Quiet, professional, high-contrast ink on warm paper;
exactly one accent colour (marker blue) used for selection and the primary action.

**Layout (desktop ≥ 1100px), top → bottom, full viewport, no page scroll:**
```
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│ [PS] People Workbook  HRIS                         Synced 12:41:07 · ap-southeast-2 · Lock │ TitleBar 44px (white)
├───────────────────────────────────────────────────────────────────────────────────────────┤
│ [+ New person] │ Asha Rao ▸ [Onboard] [Offboard] │ [⟳ Refresh] [⤓ Export CSV] │ … [🔍 Filter (Ctrl+F)] [▣] │ Ribbon 48px
├───────────────────────────────────────────────────────────────────────────────────────────┤
│ [ F7 ] fx │ asha.rao@acme.com                                                       🔒      │ Formula bar 36px
├───────────────────────────────────────────────────────────────────────────────────────────┤
│ · · · · · · · · · · · · · · · · · dotted whiteboard (#F7F6F2 + 1px dots every 18px) · · · │
│ ┌──────────── sheet card (white, 1px border, soft shadow, r=8) ───────┐  ┌─ Inspector ──┐ │
│ │    │ ☐ │   A    │   B    │    C     │   D        │ …               │  │ (AR) Asha Rao│ │
│ │    │   │First   │Last    │Status    │Work email  │                 │  │ Sr Backend · │ │
│ │  1 │ ☐ │Asha    │Rao     │● Offer   │asha.rao@…  │                 │  │ PROFILE      │ │
│ │  2 │ ☐ │…       │        │          │            │                 │  │ ACCESS 3/5   │ │
│ │    │   │        │        │          │            │                 │  │ TIMELINE     │ │
│ └─────────────────────────────────────────────────────────────────────┘  │[Onboard…][Off]│ │
│                                                                           └──────────────┘ │
├───────────────────────────────────────────────────────────────────────────────────────────┤
│ People 42 │ Onboarding 3 │ Offboarding 1 │ Access │ Apps 8 │ Audit log     Rows 42 · Sel 2 · Σ ₹54,00,000 · ● Ready │ Footer 36px
└───────────────────────────────────────────────────────────────────────────────────────────┘
```
- Main area padding 14px; gap 14px between sheet card and inspector; inspector width 420px.
- **< 1100px**: inspector hidden by default (toggle shows it). **< 900px**: inspector becomes a bottom sheet (72vh, rounded top 16px,
  fixed), ribbon shows icons only (labels hidden), formula bar hidden, status bar shows only "Rows". Side gutter 8px. No horizontal
  page scroll — the grid scrolls inside its own card.

**Colour tokens (light only for MVP):**
| Token | Value | Use |
|---|---|---|
| `--paper` | `#F7F6F2` | app background / whiteboard |
| `--paper-2` | `#EFEDE7` | headers of letters/row numbers, footer, tabs |
| `--surface` | `#FFFFFF` | sheet card, inspector, dialogs, title bar, ribbon |
| `--line` / `--line-strong` | `#E4E1D9` / `#CFCAC0` | grid lines / card borders |
| `--dot` | `#D9D5CB` | whiteboard dots |
| `--ink` / `--ink-2` / `--ink-3` | `#1D2127` / `#4A4F57` / `#868B93` | text levels |
| `--accent` | `#1F4FD1` | selection, focus ring, primary button, active tab bar |
| status | ok `#1D7A4C` on `#E3F3EA`; info `#1F4FD1` on `#E9EEFC`; warn `#9A5B00` on `#FCF0D9`; danger `#B3261E` on `#FCE8E6`; neutral `#5B616B` on `#EEECE6` | chips |

**Type:** UI = Inter Variable 13px/1.45; numbers, emails, IDs, cell addresses, timestamps = JetBrains Mono 12px with tabular figures.
Headings in inspector 18px/600. Section labels 11px/600 uppercase, letter-spacing .08em, `--ink-3`.

**Grid behaviour (all sheets via one `WorkbookGrid` component):**
- Header row 1 = **column letters** (A, B, C…; mono 10.5px, `--ink-3`, centred, `--paper-2` background).
  Header row 2 = field names. Leftmost pinned column = **row numbers** (mono 11px, right-aligned, `--paper-2`), then the checkbox column.
- Editable cells: single click focuses, **Enter / double-click / typing** edits, **Enter** commits and moves down, **Esc** cancels,
  arrows navigate. Edits never mutate the grid directly (`readOnlyEdit`): they PATCH the API, then the query cache updates the row.
  Validation errors appear as a toast and the old value stays.
- Focused cell: 2px accent outline (Excel-like). Selected rows: 7% accent tint. Hover: 2.5% ink tint.
- **Formula bar**: shows `<letter><row>` and the focused cell's raw value. If the cell is editable, the input is editable: Enter commits
  (same PATCH), Esc reverts. Read-only cells show a small lock icon.
- **Status bar**: `Rows N (of M when filtered) · Selected K · Σ <salary sum per currency for selected rows> · ● Ready`.
- Quick filter in the ribbon filters the current sheet (Ctrl+F focuses it). Per-column filter menus via the header menu.
- Sort by clicking headers. Columns are not movable (keeps letters stable). CSV export exports the visible columns of the current sheet.

**Sheets (tabs; Alt+1…6):**
1. **People** — everyone. Columns: First name, Last name, Status, Work email, Personal email, Title, Department, Location, Type, Manager,
   Manager email, Start date, End date, Salary / yr, Cur., Access, Source, Updated. All profile cells editable except Status/Access/Source/Updated.
2. **Onboarding** — `offer_accepted`, `onboarding`, and `active` people who still have manual or failed items. Columns: First, Last, Status,
   Start date, Starts (in N days), Work email (hatched warning background if empty), Personal email, Title, Department, Access, **[Onboard…]** button.
3. **Offboarding** — planned exits (`active` with an end date), `offboarding`, `exited`. Columns: First, Last, Status, Title, Department, Manager,
   End date (editable), Access, **[Offboard…]** button (active only).
4. **Access** — matrix: rows = people (exited hidden unless "Show exited" is ticked), columns = apps; each cell is an icon:
   ✓ active (green), clock queued, spinner provisioning/revoking (blue), hand manual step (amber), ✕ failed (red), – revoked (grey), · none.
   A legend strip sits above the grid.
5. **Apps** — the app catalog. Columns: App, Connector (select), Enabled (checkbox), Everyone (checkbox), Departments (comma list),
   Instructions (large text popup editor), Config (read-only JSON preview), Updated. Ribbon shows **[+ New app]** on this sheet.
   Inspector shows the connector help, a JSON config editor with "Insert template", defaults summary, and a two-step delete.
6. **Audit log** — newest first: Time, Person, Actor, Event, Message. Read-only.

**Inspector (person):** header with initials avatar (40px circle, 1.5px ink border), name, "Title · Department", status chip, close.
Sections separated by dashed lines (whiteboard feel): **Profile** (definition list, mono for emails/dates/salary; "Edit any field in the
sheet"), **Access** (each grant: app name, status chip, last error in red small text, actions: *Mark done* for manual tasks, *Retry* for
failures, *Reveal password* when a one-time secret exists → shows it in a mono box with Copy and "shown once" warning), **Timeline**
(vertical line with dots; newest first; message + time + actor). Sticky footer with two large buttons: **Onboard…** (primary) and
**Offboard…** (danger outline). While a workflow runs, the inspector polls every 3s and statuses animate (spinner icon).

**Onboard / Offboard dialog (the "one click"):** title "Onboard Asha Rao", one-sentence explanation, apps grouped
"Identity — runs first" / "Apps & groups" (offboard: "Identity — revoked last"), each a checkbox row: name, connector label, reason
("Everyone" / "Department: Engineering" / "Optional" / "Has access"), current status chip. Defaults are pre-ticked. Offboard adds
"Last working day" (date, default today) and a required "I understand access is revoked immediately" checkbox. Primary button reads
"Grant 6 apps" / "Revoke 6 apps" (danger solid). Errors (e.g. "Set a work email before onboarding") show inline in a red banner.

**Unlock screen:** whiteboard background, centred 380px card: logo mark, "People Workbook", "Enter the access key to open the workbook.",
password input, Unlock button, footnote "Temporary gate until company SSO is added."

**Accessibility:** all icon-only buttons have `aria-label`; dialogs `role="dialog" aria-modal="true"` with labelled title, Esc closes,
click on backdrop closes; visible focus ring (2px accent, 2px offset) on every interactive element; status chips include text, not
colour only; toasts in an `aria-live="polite"` region; minimum 4.5:1 contrast for text (tokens above satisfy this).

**Motion:** none decorative. Only: 120ms background/colour transitions on buttons and tabs; spinner rotation for in-flight grants;
toasts fade in 150ms. Respect `prefers-reduced-motion` (disable spinner rotation and transitions).

### 10.2 Frontend file list (write in this order)
```
src/main.tsx
src/App.tsx
src/api/client.ts
src/api/hooks.ts
src/state/workbook.tsx
src/lib/format.ts
src/lib/patches.ts
src/lib/rows.ts
src/lib/connectors.ts
src/lib/useEscape.ts
src/lib/useShortcuts.ts
src/grid/theme.ts
src/grid/columns.ts
src/grid/renderers.tsx
src/grid/WorkbookGrid.tsx
src/components/Toast.tsx
src/components/UnlockScreen.tsx
src/components/TitleBar.tsx
src/components/Ribbon.tsx
src/components/FormulaBar.tsx
src/components/SheetTabs.tsx
src/components/StatusBar.tsx
src/components/Inspector.tsx
src/components/ConfirmAccessDialog.tsx
src/components/NewPersonDialog.tsx
src/sheets/PeopleSheet.tsx
src/sheets/OnboardingSheet.tsx
src/sheets/OffboardingSheet.tsx
src/sheets/AccessSheet.tsx
src/sheets/AppsSheet.tsx
src/sheets/AuditSheet.tsx
src/styles/tokens.css
src/styles/app.css
src/styles/grid.css
```
**Critical rule:** every `columns` array passed to `WorkbookGrid` must be a module constant or wrapped in `useMemo`, and `moneyOf` must be a
module-level function. Otherwise the grid rebuilds columns every render (flicker / render loops).

### 10.3 Frontend code

#### `src/main.tsx`
```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import '@fontsource-variable/inter';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/600.css';
import './styles/tokens.css';
import './styles/app.css';
import './styles/grid.css';
import { App } from './App';
import { ApiError } from './api/client';
import { ToastProvider } from './components/Toast';

ModuleRegistry.registerModules([AllCommunityModule]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10_000,
      refetchOnWindowFocus: true,
      retry: (count, err) => !(err instanceof ApiError && err.status < 500) && count < 2,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </QueryClientProvider>
  </StrictMode>,
);
```

#### `src/App.tsx`
```tsx
import { useEffect, useState } from 'react';
import { getKey } from './api/client';
import { ConfirmAccessDialog } from './components/ConfirmAccessDialog';
import { FormulaBar } from './components/FormulaBar';
import { Inspector } from './components/Inspector';
import { NewPersonDialog } from './components/NewPersonDialog';
import { Ribbon } from './components/Ribbon';
import { SheetTabs } from './components/SheetTabs';
import { StatusBar } from './components/StatusBar';
import { TitleBar } from './components/TitleBar';
import { UnlockScreen } from './components/UnlockScreen';
import { useShortcuts } from './lib/useShortcuts';
import { AccessSheet } from './sheets/AccessSheet';
import { AppsSheet } from './sheets/AppsSheet';
import { AuditSheet } from './sheets/AuditSheet';
import { OffboardingSheet } from './sheets/OffboardingSheet';
import { OnboardingSheet } from './sheets/OnboardingSheet';
import { PeopleSheet } from './sheets/PeopleSheet';
import { SHEETS, WorkbookProvider, useWorkbook } from './state/workbook';

export function App() {
  const [unlocked, setUnlocked] = useState(() => !!getKey());
  useEffect(() => {
    const onLocked = () => setUnlocked(false);
    window.addEventListener('hris:locked', onLocked);
    return () => window.removeEventListener('hris:locked', onLocked);
  }, []);
  if (!unlocked) return <UnlockScreen onUnlocked={() => setUnlocked(true)} />;
  return (
    <WorkbookProvider>
      <Workbook />
    </WorkbookProvider>
  );
}

function Workbook() {
  const { sheet, inspectorOpen, dialog } = useWorkbook();
  useShortcuts();
  const label = SHEETS.find((s) => s.id === sheet)?.label ?? '';
  return (
    <div className="wb">
      <TitleBar />
      <Ribbon />
      <FormulaBar />
      <main className="wb-main">
        <section className="wb-sheet" aria-label={`${label} sheet`}>
          {sheet === 'people' && <PeopleSheet />}
          {sheet === 'onboarding' && <OnboardingSheet />}
          {sheet === 'offboarding' && <OffboardingSheet />}
          {sheet === 'access' && <AccessSheet />}
          {sheet === 'apps' && <AppsSheet />}
          {sheet === 'audit' && <AuditSheet />}
        </section>
        {inspectorOpen && <Inspector />}
      </main>
      <footer className="wb-footer">
        <SheetTabs />
        <StatusBar />
      </footer>
      {dialog.kind === 'newPerson' && <NewPersonDialog />}
      {dialog.kind === 'access' && (
        <ConfirmAccessDialog key={`${dialog.personId}-${dialog.operation}`} operation={dialog.operation} personId={dialog.personId} />
      )}
    </div>
  );
}
```

#### `src/api/client.ts`
```ts
import type {
  AccessSummary,
  AppCreateBody,
  AppDef,
  AppPatchBody,
  AuditEvent,
  Employee,
  Grant,
  GrantStatus,
  Meta,
  PersonBundle,
  PersonCreateBody,
  PersonPatchBody,
  PreviewItem,
  WorkflowOperation,
} from './types';

const KEY_STORAGE = 'hris.key';
let memoryKey: string | null = null;

export function getKey(): string | null {
  if (memoryKey) return memoryKey;
  try {
    memoryKey = localStorage.getItem(KEY_STORAGE);
  } catch {
    // storage unavailable (private mode); keep in memory only
  }
  return memoryKey;
}

export function setKey(value: string): void {
  memoryKey = value;
  try {
    localStorage.setItem(KEY_STORAGE, value);
  } catch {
    // ignore
  }
}

export function clearKey(): void {
  memoryKey = null;
  try {
    localStorage.removeItem(KEY_STORAGE);
  } catch {
    // ignore
  }
}

export class ApiError extends Error {
  readonly status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function api<T>(path: string, init: { method?: string; body?: unknown } = {}): Promise<T> {
  const res = await fetch(`/api${path}`, {
    method: init.method ?? 'GET',
    headers: { 'content-type': 'application/json', 'x-hris-key': getKey() ?? '' },
    body: init.body === undefined ? undefined : JSON.stringify(init.body),
  });
  let payload: { data?: T; error?: { message?: string } } | null = null;
  try {
    payload = (await res.json()) as { data?: T; error?: { message?: string } };
  } catch {
    payload = null;
  }
  if (res.status === 401) {
    clearKey();
    window.dispatchEvent(new CustomEvent('hris:locked'));
  }
  if (!res.ok) throw new ApiError(payload?.error?.message ?? `Request failed (${res.status})`, res.status);
  return payload?.data as T;
}

const e = encodeURIComponent;

export const Api = {
  meta: () => api<Meta>('/meta'),
  people: () => api<Employee[]>('/people'),
  person: (id: string) => api<PersonBundle>(`/people/${e(id)}`),
  createPerson: (body: PersonCreateBody) => api<Employee>('/people', { method: 'POST', body }),
  patchPerson: (id: string, body: PersonPatchBody) => api<Employee>(`/people/${e(id)}`, { method: 'PATCH', body }),
  preview: (id: string, operation: WorkflowOperation) =>
    api<PreviewItem[]>(`/people/${e(id)}/preview?operation=${operation}`),
  onboard: (id: string, appIds: string[]) =>
    api<{ executionArn: string }>(`/people/${e(id)}/onboard`, { method: 'POST', body: { appIds } }),
  offboard: (id: string, appIds: string[], endDate?: string) =>
    api<{ executionArn: string | null }>(`/people/${e(id)}/offboard`, { method: 'POST', body: { appIds, endDate } }),
  completeGrant: (id: string, appId: string) =>
    api<{ status: GrantStatus; accessSummary: AccessSummary }>(`/people/${e(id)}/grants/${e(appId)}/complete`, { method: 'POST' }),
  retryGrant: (id: string, appId: string) =>
    api<{ executionArn: string }>(`/people/${e(id)}/grants/${e(appId)}/retry`, { method: 'POST' }),
  revealSecret: (id: string, appId: string) =>
    api<{ secret: string }>(`/people/${e(id)}/grants/${e(appId)}/reveal-secret`, { method: 'POST' }),
  apps: () => api<AppDef[]>('/apps'),
  createApp: (body: AppCreateBody) => api<AppDef>('/apps', { method: 'POST', body }),
  patchApp: (id: string, body: AppPatchBody) => api<AppDef>(`/apps/${e(id)}`, { method: 'PATCH', body }),
  deleteApp: (id: string) => api<{ deleted: true }>(`/apps/${e(id)}`, { method: 'DELETE' }),
  grants: () => api<Grant[]>('/grants'),
  audit: (limit = 500) => api<AuditEvent[]>(`/audit?limit=${limit}`),
};
```

#### `src/api/hooks.ts`
```ts
import { useMutation, useQuery, useQueryClient, type QueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useToast } from '../components/Toast';
import { toPersonPatch } from '../lib/patches';
import { Api } from './client';
import type { AppCreateBody, AppDef, AppPatchBody, Employee, PersonCreateBody, PersonPatchBody, WorkflowOperation } from './types';

export const qk = {
  meta: ['meta'] as const,
  people: ['people'] as const,
  person: (id: string) => ['person', id] as const,
  apps: ['apps'] as const,
  grants: ['grants'] as const,
  audit: ['audit'] as const,
  preview: (id: string, op: WorkflowOperation) => ['preview', id, op] as const,
};

const BUSY_GRANT = new Set(['pending', 'provisioning', 'revoking']);

export function useMeta() {
  return useQuery({ queryKey: qk.meta, queryFn: Api.meta, staleTime: 5 * 60_000 });
}

export function usePeople() {
  return useQuery({
    queryKey: qk.people,
    queryFn: Api.people,
    refetchInterval: (q) =>
      (q.state.data ?? []).some((p) => p.status === 'onboarding' || p.status === 'offboarding') ? 3000 : 30_000,
  });
}

export function usePerson(id: string | null) {
  return useQuery({
    queryKey: qk.person(id ?? ''),
    queryFn: () => Api.person(id as string),
    enabled: !!id,
    refetchInterval: (q) => {
      const d = q.state.data;
      if (!d) return false;
      const busy =
        d.employee.status === 'onboarding' ||
        d.employee.status === 'offboarding' ||
        d.grants.some((g) => BUSY_GRANT.has(g.status));
      return busy ? 3000 : false;
    },
  });
}

export function useApps() {
  return useQuery({ queryKey: qk.apps, queryFn: Api.apps });
}

export function useGrants() {
  return useQuery({ queryKey: qk.grants, queryFn: Api.grants, refetchInterval: 15_000 });
}

export function useAudit() {
  return useQuery({ queryKey: qk.audit, queryFn: () => Api.audit(500), refetchInterval: 15_000 });
}

export function usePreview(id: string, operation: WorkflowOperation) {
  return useQuery({ queryKey: qk.preview(id, operation), queryFn: () => Api.preview(id, operation), staleTime: 0, gcTime: 0 });
}

function invalidatePerson(qc: QueryClient, id: string) {
  return Promise.all([
    qc.invalidateQueries({ queryKey: qk.people }),
    qc.invalidateQueries({ queryKey: qk.person(id) }),
    qc.invalidateQueries({ queryKey: qk.grants }),
    qc.invalidateQueries({ queryKey: qk.audit }),
  ]);
}

export function usePatchPerson() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }: { id: string; body: PersonPatchBody }) => Api.patchPerson(id, body),
    onSuccess: (emp) => {
      qc.setQueryData<Employee[]>(qk.people, (old) => old?.map((p) => (p.id === emp.id ? emp : p)));
      void qc.invalidateQueries({ queryKey: qk.person(emp.id) });
      void qc.invalidateQueries({ queryKey: qk.audit });
    },
  });
}

export function useCreatePerson() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: PersonCreateBody) => Api.createPerson(body),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: qk.people });
      void qc.invalidateQueries({ queryKey: qk.audit });
    },
  });
}

export function useStartAccess() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (v: { id: string; operation: WorkflowOperation; appIds: string[]; endDate?: string }) =>
      v.operation === 'onboard' ? Api.onboard(v.id, v.appIds) : Api.offboard(v.id, v.appIds, v.endDate),
    onSuccess: (_d, v) => invalidatePerson(qc, v.id),
  });
}

export function useGrantAction() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (v: { id: string; appId: string; action: 'complete' | 'retry' }) =>
      v.action === 'complete' ? Api.completeGrant(v.id, v.appId) : Api.retryGrant(v.id, v.appId),
    onSuccess: (_d, v) => invalidatePerson(qc, v.id),
  });
}

export function useRevealSecret() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (v: { id: string; appId: string }) => Api.revealSecret(v.id, v.appId),
    onSuccess: (_d, v) => invalidatePerson(qc, v.id),
  });
}

export function useCreateApp() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: AppCreateBody) => Api.createApp(body),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: qk.apps });
      void qc.invalidateQueries({ queryKey: qk.audit });
    },
  });
}

export function usePatchApp() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }: { id: string; body: AppPatchBody }) => Api.patchApp(id, body),
    onSuccess: (app) => {
      qc.setQueryData<AppDef[]>(qk.apps, (old) => old?.map((a) => (a.id === app.id ? app : a)));
      void qc.invalidateQueries({ queryKey: qk.audit });
    },
  });
}

export function useDeleteApp() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => Api.deleteApp(id),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: qk.apps });
      void qc.invalidateQueries({ queryKey: qk.audit });
    },
  });
}

/** Shared cell-edit handler for any sheet whose rows are Employees. */
export function usePersonEditor() {
  const { mutateAsync } = usePatchPerson();
  const toast = useToast();
  return useCallback(
    async (row: Employee, colId: string, value: unknown) => {
      try {
        const body = toPersonPatch(row, colId, value);
        if (!body) return;
        await mutateAsync({ id: row.id, body });
      } catch (err) {
        toast.error((err as Error).message);
      }
    },
    [mutateAsync, toast],
  );
}
```

#### `src/state/workbook.tsx`
```tsx
import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode, type RefObject } from 'react';
import type { GridApi } from 'ag-grid-community';

export type SheetId = 'people' | 'onboarding' | 'offboarding' | 'access' | 'apps' | 'audit';

export const SHEETS: { id: SheetId; label: string }[] = [
  { id: 'people', label: 'People' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'offboarding', label: 'Offboarding' },
  { id: 'access', label: 'Access' },
  { id: 'apps', label: 'Apps' },
  { id: 'audit', label: 'Audit log' },
];

export interface FocusInfo {
  address: string;
  label: string;
  display: string;
  editable: boolean;
  commit?: (raw: string) => Promise<void>;
}

export interface GridStats {
  rows: number;
  total: number;
  selected: number;
  sums: Record<string, number>;
}

export type DialogState =
  | { kind: 'none' }
  | { kind: 'newPerson' }
  | { kind: 'access'; operation: 'onboard' | 'offboard'; personId: string };

interface WorkbookContextValue {
  sheet: SheetId;
  setSheet: (s: SheetId) => void;
  selectedPersonId: string | null;
  setSelectedPersonId: (id: string | null) => void;
  selectedAppId: string | null;
  setSelectedAppId: (id: string | null) => void;
  inspectorOpen: boolean;
  setInspectorOpen: (v: boolean) => void;
  focus: FocusInfo | null;
  setFocus: (f: FocusInfo | null) => void;
  stats: GridStats;
  setStats: (s: GridStats) => void;
  quickFilter: string;
  setQuickFilter: (q: string) => void;
  gridApiRef: RefObject<GridApi | null>;
  dialog: DialogState;
  openDialog: (d: DialogState) => void;
  closeDialog: () => void;
}

const WorkbookContext = createContext<WorkbookContextValue | null>(null);
const SHEET_STORAGE = 'hris.sheet';
const EMPTY_STATS: GridStats = { rows: 0, total: 0, selected: 0, sums: {} };

function initialSheet(): SheetId {
  try {
    const v = localStorage.getItem(SHEET_STORAGE);
    if (v && SHEETS.some((s) => s.id === v)) return v as SheetId;
  } catch {
    // ignore
  }
  return 'people';
}

export function WorkbookProvider({ children }: { children: ReactNode }) {
  const [sheet, setSheetState] = useState<SheetId>(initialSheet);
  const [selectedPersonId, setSelectedPersonId] = useState<string | null>(null);
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [inspectorOpen, setInspectorOpen] = useState(() => window.innerWidth > 1100);
  const [focus, setFocus] = useState<FocusInfo | null>(null);
  const [stats, setStats] = useState<GridStats>(EMPTY_STATS);
  const [quickFilter, setQuickFilter] = useState('');
  const [dialog, setDialog] = useState<DialogState>({ kind: 'none' });
  const gridApiRef = useRef<GridApi | null>(null);

  const setSheet = useCallback((s: SheetId) => {
    setSheetState(s);
    setFocus(null);
    setStats(EMPTY_STATS);
    setQuickFilter('');
    try {
      localStorage.setItem(SHEET_STORAGE, s);
    } catch {
      // ignore
    }
  }, []);
  const openDialog = useCallback((d: DialogState) => setDialog(d), []);
  const closeDialog = useCallback(() => setDialog({ kind: 'none' }), []);

  const value = useMemo<WorkbookContextValue>(
    () => ({
      sheet,
      setSheet,
      selectedPersonId,
      setSelectedPersonId,
      selectedAppId,
      setSelectedAppId,
      inspectorOpen,
      setInspectorOpen,
      focus,
      setFocus,
      stats,
      setStats,
      quickFilter,
      setQuickFilter,
      gridApiRef,
      dialog,
      openDialog,
      closeDialog,
    }),
    [sheet, setSheet, selectedPersonId, selectedAppId, inspectorOpen, focus, stats, quickFilter, dialog, openDialog, closeDialog],
  );
  return <WorkbookContext.Provider value={value}>{children}</WorkbookContext.Provider>;
}

export function useWorkbook(): WorkbookContextValue {
  const ctx = useContext(WorkbookContext);
  if (!ctx) throw new Error('useWorkbook must be used inside WorkbookProvider');
  return ctx;
}
```

#### `src/lib/format.ts`
```ts
import type { ConnectorType, EmployeeStatus, EmploymentType, GrantStatus } from '../api/types';

export const STATUS_LABEL: Record<EmployeeStatus, string> = {
  offer_accepted: 'Offer accepted',
  onboarding: 'Onboarding',
  active: 'Active',
  offboarding: 'Offboarding',
  exited: 'Exited',
};

export const GRANT_LABEL: Record<GrantStatus, string> = {
  pending: 'Queued',
  provisioning: 'Provisioning',
  active: 'Active',
  manual_pending: 'Manual step',
  failed: 'Failed',
  revoking: 'Revoking',
  revoked: 'Revoked',
  manual_revoke_pending: 'Manual revoke',
  revoke_failed: 'Revoke failed',
};

export const EMPLOYMENT_TYPES: EmploymentType[] = ['full_time', 'part_time', 'contractor', 'intern'];
export const EMPLOYMENT_LABEL: Record<EmploymentType, string> = {
  full_time: 'Full-time',
  part_time: 'Part-time',
  contractor: 'Contractor',
  intern: 'Intern',
};

export const CONNECTOR_LABEL: Record<ConnectorType, string> = {
  google_workspace: 'Google account',
  google_group: 'Google group',
  scim: 'SCIM',
  jumpcloud: 'JumpCloud',
  manual: 'Manual',
};

export const CURRENCIES = ['INR', 'USD', 'AUD', 'EUR', 'GBP', 'SGD', 'AED'];

export function labelFor(status: string): string {
  return (STATUS_LABEL as Record<string, string>)[status] ?? (GRANT_LABEL as Record<string, string>)[status] ?? status;
}

export function formatMoney(amount: number | undefined | null, currency = 'INR'): string {
  if (amount == null || Number.isNaN(amount)) return '';
  try {
    return new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toLocaleString()}`;
  }
}

export function formatDate(iso?: string): string {
  if (!iso) return '';
  const d = new Date(iso.length === 10 ? `${iso}T00:00:00` : iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function formatDateTime(iso?: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
}

export function daysUntil(date?: string): number | null {
  if (!date) return null;
  const t = new Date(`${date}T00:00:00`).getTime();
  if (Number.isNaN(t)) return null;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.round((t - now.getTime()) / 86_400_000);
}

export function relativeDays(n: number | null): string {
  if (n == null) return '';
  if (n === 0) return 'today';
  if (n > 0) return `in ${n} day${n === 1 ? '' : 's'}`;
  return `${-n} day${n === -1 ? '' : 's'} ago`;
}

export function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export const fullName = (p: { firstName: string; lastName: string }) => `${p.firstName} ${p.lastName}`.trim();
export const initials = (p: { firstName: string; lastName: string }) =>
  `${p.firstName.charAt(0)}${p.lastName.charAt(0)}`.toUpperCase() || '?';

function slugPart(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

export function suggestWorkEmail(first: string, last: string, domain?: string): string {
  if (!domain) return '';
  const f = slugPart(first.trim().split(/\s+/)[0] ?? '');
  const l = slugPart(last);
  if (!f) return '';
  return `${l ? `${f}.${l}` : f}@${domain.trim().toLowerCase()}`;
}
```

#### `src/lib/patches.ts`
```ts
import { CONNECTOR_TYPES, type AppPatchBody, type ConnectorType, type Employee, type PersonPatchBody } from '../api/types';

const TEXT_FIELDS = new Set([
  'firstName',
  'lastName',
  'workEmail',
  'personalEmail',
  'title',
  'department',
  'location',
  'managerName',
  'managerEmail',
  'phone',
  'notes',
  'employmentType',
]);

/** Maps a grid edit (column id + raw value) to an API patch. Throws a user-facing Error on invalid input. */
export function toPersonPatch(row: Employee, colId: string, value: unknown): PersonPatchBody | null {
  const str = value == null ? '' : String(value).trim();
  if (TEXT_FIELDS.has(colId)) {
    if (colId === 'firstName' && !str) throw new Error('First name cannot be empty');
    return { [colId]: str } as PersonPatchBody;
  }
  if (colId === 'startDate' || colId === 'endDate') {
    if (str && !/^\d{4}-\d{2}-\d{2}$/.test(str)) throw new Error('Use the date format YYYY-MM-DD');
    return { [colId]: str } as PersonPatchBody;
  }
  if (colId === 'salaryAmount') {
    if (!str) return { salary: null };
    const n = Number(str.replace(/[,\s_₹$]/g, ''));
    if (!Number.isFinite(n) || n < 0) throw new Error('Salary must be a positive number');
    return { salary: { amount: Math.round(n), currency: row.salary?.currency ?? 'INR' } };
  }
  if (colId === 'salaryCurrency') {
    if (!row.salary) throw new Error('Enter the salary amount first');
    if (!/^[A-Za-z]{3}$/.test(str)) throw new Error('Use a 3-letter currency code');
    return { salary: { amount: row.salary.amount, currency: str.toUpperCase() } };
  }
  return null;
}

export function toAppPatch(colId: string, value: unknown): AppPatchBody | null {
  const str = value == null ? '' : String(value).trim();
  switch (colId) {
    case 'name':
      if (!str) throw new Error('App name is required');
      return { name: str };
    case 'type':
      if (!CONNECTOR_TYPES.includes(str as ConnectorType)) throw new Error(`Connector must be one of: ${CONNECTOR_TYPES.join(', ')}`);
      return { type: str as ConnectorType };
    case 'enabled':
    case 'defaultForAll':
      return { [colId]: value === true || ['true', '1', 'yes', 'y'].includes(str.toLowerCase()) } as AppPatchBody;
    case 'departments':
      return { departments: str.split(',').map((s) => s.trim()).filter(Boolean) };
    case 'instructions':
      return { instructions: value == null ? '' : String(value) };
    default:
      return null;
  }
}
```

#### `src/lib/rows.ts`
```ts
import type { Employee } from '../api/types';

export const isOnboardingRow = (e: Employee) =>
  e.status === 'offer_accepted' ||
  e.status === 'onboarding' ||
  (e.status === 'active' && ((e.accessSummary?.manualPending ?? 0) > 0 || (e.accessSummary?.failed ?? 0) > 0));

export const isOffboardingRow = (e: Employee) =>
  e.status === 'offboarding' || e.status === 'exited' || (e.status === 'active' && !!e.endDate);

export const moneyOfEmployee = (e: Employee) => e.salary;
```

#### `src/lib/connectors.ts`
```ts
import type { ConnectorType } from '../api/types';

export const CONNECTOR_HELP: Record<ConnectorType, string> = {
  google_workspace:
    'Creates the Google account with a temporary password (revealed once in the person’s Access list) and forces a password change at first sign-in. Offboarding signs the person out everywhere, suspends the account and, if enabled, transfers their Drive files to their manager. Needs the Google service account in Secrets Manager.',
  google_group:
    'Adds the work email to a Google Group — use groups for mailing lists, shared drives and SAML app access. Removed on offboarding. Runs after the Google account exists.',
  scim:
    'Creates and deactivates the user through the app’s SCIM 2.0 API (e.g. Slack Business+, Notion Enterprise). Store the bearer token in Secrets Manager under scimTokens.<tokenKey>.',
  jumpcloud:
    'Creates the user in JumpCloud and adds them to user groups; JumpCloud then provisions the SSO/SCIM apps bound to those groups. Offboarding suspends the JumpCloud user. Needs jumpcloudApiKey.',
  manual:
    'No API. Onboarding creates a checklist task with the instructions; mark it done in the person’s Access list once granted, and again after revoking.',
};

export const CONFIG_TEMPLATES: Record<ConnectorType, Record<string, unknown>> = {
  google_workspace: { orgUnitPath: '/', transferDriveToManager: true },
  google_group: { groupEmail: 'team@yourdomain.com' },
  scim: { baseUrl: 'https://api.slack.com/scim/v2', tokenKey: 'slack', deprovisionMode: 'deactivate' },
  jumpcloud: { userGroupIds: ['<jumpcloud-user-group-id>'] },
  manual: {},
};
```

#### `src/lib/useEscape.ts`
```ts
import { useEffect } from 'react';

export function useEscape(onEscape: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onEscape();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onEscape]);
}
```

#### `src/lib/useShortcuts.ts`
```ts
import { useEffect } from 'react';
import { SHEETS, useWorkbook } from '../state/workbook';

export function useShortcuts() {
  const { setSheet, inspectorOpen, setInspectorOpen, dialog } = useWorkbook();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (dialog.kind !== 'none') return;
      const mod = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();
      if (mod && key === 'f') {
        const el = document.getElementById('wb-search') as HTMLInputElement | null;
        if (el) {
          e.preventDefault();
          el.focus();
          el.select();
        }
      } else if (mod && key === 'i') {
        e.preventDefault();
        setInspectorOpen(!inspectorOpen);
      } else if (e.altKey && /^[1-6]$/.test(e.key)) {
        e.preventDefault();
        setSheet(SHEETS[Number(e.key) - 1].id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setSheet, inspectorOpen, setInspectorOpen, dialog.kind]);
}
```

#### `src/grid/theme.ts`
```ts
import { iconSetQuartzLight, themeQuartz } from 'ag-grid-community';

// If TypeScript rejects one of these params after an AG Grid upgrade, delete that single line (see §15).
export const workbookTheme = themeQuartz.withPart(iconSetQuartzLight).withParams({
  fontFamily: "'Inter Variable', Inter, system-ui, sans-serif",
  fontSize: 13,
  dataFontSize: 13,
  headerFontSize: 12,
  headerFontWeight: 600,
  foregroundColor: '#1D2127',
  backgroundColor: '#FFFFFF',
  accentColor: '#1F4FD1',
  borderColor: '#E4E1D9',
  headerBackgroundColor: '#F4F2EC',
  headerTextColor: '#4A4F57',
  rowBorder: true,
  columnBorder: true,
  headerColumnBorder: true,
  headerRowBorder: true,
  wrapperBorder: false,
  wrapperBorderRadius: 0,
  rowHeight: 30,
  headerHeight: 30,
  cellHorizontalPadding: 10,
  iconSize: 14,
  selectedRowBackgroundColor: 'rgba(31, 79, 209, 0.07)',
  rowHoverColor: 'rgba(29, 33, 39, 0.025)',
  oddRowBackgroundColor: '#FFFFFF',
  browserColorScheme: 'light',
});
```

#### `src/grid/columns.ts`
```ts
import type { ColDef, ColGroupDef, RowSelectionOptions } from 'ag-grid-community';

export const ROWNUM_COL_ID = '__rownum';

/** 0 → A, 25 → Z, 26 → AA */
export function columnLetter(index: number): string {
  let s = '';
  let n = index + 1;
  while (n > 0) {
    const r = (n - 1) % 26;
    s = String.fromCharCode(65 + r) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

/** Wraps each column in a group whose header is its spreadsheet letter, and prepends a pinned row-number column. */
export function buildColumns<T>(cols: ColDef<T>[]): {
  columnDefs: (ColDef<T> | ColGroupDef<T>)[];
  letterOf: Record<string, string>;
} {
  const letterOf: Record<string, string> = {};
  const rownum: ColDef<T> = {
    colId: ROWNUM_COL_ID,
    headerName: '',
    valueGetter: (p) => (p.node?.rowIndex ?? 0) + 1,
    width: 56,
    maxWidth: 56,
    pinned: 'left',
    lockPinned: true,
    sortable: false,
    filter: false,
    editable: false,
    resizable: false,
    suppressNavigable: true,
    suppressMovable: true,
    suppressHeaderMenuButton: true,
    cellClass: 'wb-rownum',
    headerClass: 'wb-rownum-h',
  };
  const columnDefs: (ColDef<T> | ColGroupDef<T>)[] = [rownum];
  cols.forEach((col, i) => {
    const id = col.colId ?? (col.field as string | undefined) ?? `col${i}`;
    const letter = columnLetter(i);
    letterOf[id] = letter;
    columnDefs.push({ headerName: letter, headerClass: 'wb-letter', marryChildren: true, children: [{ ...col, colId: id }] });
  });
  return { columnDefs, letterOf };
}

export const defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  resizable: true,
  suppressMovable: true,
  minWidth: 72,
  cellDataType: 'text',
  cellClassRules: { 'wb-editable': (p) => p.colDef.editable === true },
};

export const rowSelection: RowSelectionOptions = {
  mode: 'multiRow',
  checkboxes: true,
  headerCheckbox: true,
  enableClickSelection: false,
};
```

#### `src/grid/renderers.tsx`
```tsx
import type { CustomCellRendererProps } from 'ag-grid-react';
import { Check, Clock, Hand, LoaderCircle, Minus, X, type LucideIcon } from 'lucide-react';
import type { Employee, GrantStatus } from '../api/types';
import { GRANT_LABEL, labelFor } from '../lib/format';

export function StatusChip({ status }: { status: string }) {
  return <span className={`chip chip-${status}`}>{labelFor(status)}</span>;
}

export function StatusCell(p: CustomCellRendererProps) {
  return p.value ? <StatusChip status={String(p.value)} /> : null;
}

const GRANT_ICON: Record<GrantStatus, LucideIcon> = {
  active: Check,
  pending: Clock,
  provisioning: LoaderCircle,
  revoking: LoaderCircle,
  manual_pending: Hand,
  manual_revoke_pending: Hand,
  failed: X,
  revoke_failed: X,
  revoked: Minus,
};

export function GrantIcon({ status }: { status: GrantStatus }) {
  const Icon = GRANT_ICON[status];
  return (
    <span className={`gcell gcell-${status}`} title={GRANT_LABEL[status]}>
      <Icon size={14} strokeWidth={2.25} aria-hidden="true" />
      <span className="sr-only">{GRANT_LABEL[status]}</span>
    </span>
  );
}

export function GrantCell(p: CustomCellRendererProps) {
  const s = p.value as GrantStatus | undefined;
  if (!s) return <span className="gcell gcell-none" aria-label="No access">·</span>;
  return <GrantIcon status={s} />;
}

export function AccessCell(p: CustomCellRendererProps<Employee>) {
  const s = p.data?.accessSummary;
  const live = s ? s.total - s.revoked : 0;
  if (!s || live <= 0) return <span className="muted">—</span>;
  const pct = Math.round((s.active / live) * 100);
  return (
    <span className="access-cell">
      <span className="bar" aria-hidden="true">
        <span style={{ width: `${pct}%` }} />
      </span>
      <span className="mono">
        {s.active}/{live}
      </span>
      {s.manualPending > 0 && (
        <span className="pill pill-warn" title={`${s.manualPending} manual step(s) pending`}>
          <Hand size={11} aria-hidden="true" />
          {s.manualPending}
        </span>
      )}
      {s.failed > 0 && (
        <span className="pill pill-danger" title={`${s.failed} failed`}>
          <X size={11} aria-hidden="true" />
          {s.failed}
        </span>
      )}
    </span>
  );
}

export interface ActionCellParams {
  label: string;
  variant?: 'primary' | 'danger';
  isEnabled: (row: Employee) => boolean;
  onAction: (row: Employee) => void;
}

export function ActionCell(p: CustomCellRendererProps<Employee> & ActionCellParams) {
  const row = p.data;
  if (!row) return null;
  if (!p.isEnabled(row)) return <span className="muted">—</span>;
  return (
    <button
      type="button"
      className={`btn btn-xs ${p.variant === 'danger' ? 'btn-danger' : 'btn-primary'}`}
      onClick={(e) => {
        e.stopPropagation();
        p.onAction(row);
      }}
    >
      {p.label}
    </button>
  );
}
```

#### `src/grid/WorkbookGrid.tsx`
```tsx
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import type {
  CellEditRequestEvent,
  CellFocusedEvent,
  ColDef,
  GetRowIdParams,
  GridApi,
  GridReadyEvent,
  RowSelectionOptions,
} from 'ag-grid-community';
import { useWorkbook } from '../state/workbook';
import { ROWNUM_COL_ID, buildColumns, defaultColDef, rowSelection } from './columns';
import { workbookTheme } from './theme';

export interface WorkbookGridProps<T extends { id: string }> {
  rowData: T[] | undefined;
  /** MUST be memoized (module constant or useMemo). */
  columns: ColDef<T>[];
  loading?: boolean;
  onEdit?: (row: T, colId: string, value: unknown) => Promise<void> | void;
  onRowFocused?: (row: T) => void;
  /** MUST be a module-level function. */
  moneyOf?: (row: T) => { amount: number; currency: string } | undefined;
  selectable?: boolean;
  emptyText?: string;
}

export function WorkbookGrid<T extends { id: string }>({
  rowData,
  columns,
  loading,
  onEdit,
  onRowFocused,
  moneyOf,
  selectable = true,
  emptyText = 'Nothing here yet',
}: WorkbookGridProps<T>) {
  const { setFocus, setStats, quickFilter, gridApiRef } = useWorkbook();
  const apiRef = useRef<GridApi<T> | null>(null);
  const { columnDefs, letterOf } = useMemo(() => buildColumns(columns), [columns]);
  const total = rowData?.length ?? 0;

  const getRowId = useCallback((p: GetRowIdParams<T>) => p.data.id, []);

  const computeStats = useCallback(() => {
    const api = apiRef.current;
    if (!api || api.isDestroyed()) return;
    const selected = api.getSelectedRows();
    const sums: Record<string, number> = {};
    if (moneyOf) {
      for (const r of selected) {
        const m = moneyOf(r);
        if (m) sums[m.currency] = (sums[m.currency] ?? 0) + m.amount;
      }
    }
    setStats({ rows: api.getDisplayedRowCount(), total, selected: selected.length, sums });
  }, [moneyOf, setStats, total]);

  useEffect(
    () => () => {
      if (gridApiRef.current === (apiRef.current as unknown as GridApi | null)) gridApiRef.current = null;
      setFocus(null);
    },
    [gridApiRef, setFocus],
  );

  const onGridReady = useCallback(
    (e: GridReadyEvent<T>) => {
      apiRef.current = e.api;
      gridApiRef.current = e.api as unknown as GridApi;
      computeStats();
    },
    [computeStats, gridApiRef],
  );

  const onCellFocused = useCallback(
    (e: CellFocusedEvent<T>) => {
      const col = e.column;
      if (e.rowIndex == null || !col || typeof col === 'string') return;
      const node = e.api.getDisplayedRowAtIndex(e.rowIndex);
      const row = node?.data;
      if (!node || !row) return;
      const colId = col.getColId();
      if (colId === ROWNUM_COL_ID) return;
      const colDef = col.getColDef();
      const editable = colDef.editable === true && !!onEdit;
      const value = e.api.getCellValue({ rowNode: node, colKey: col, useFormatter: !editable });
      setFocus({
        address: `${letterOf[colId] ?? ''}${e.rowIndex + 1}`,
        label: colDef.headerName ?? colId,
        display: value == null ? '' : String(value),
        editable,
        commit: editable && onEdit ? async (raw: string) => onEdit(row, colId, raw) : undefined,
      });
      onRowFocused?.(row);
    },
    [letterOf, onEdit, onRowFocused, setFocus],
  );

  const onCellEditRequest = useCallback(
    (e: CellEditRequestEvent<T>) => {
      if (!onEdit || !e.data) return;
      void onEdit(e.data, e.column.getColId(), e.newValue);
    },
    [onEdit],
  );

  const onModelUpdated = useCallback(() => {
    const api = apiRef.current;
    if (!api || api.isDestroyed()) return;
    api.refreshCells({ columns: [ROWNUM_COL_ID], force: true });
    computeStats();
  }, [computeStats]);

  return (
    <div className="wb-grid">
      <AgGridReact<T>
        theme={workbookTheme}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef as ColDef<T>}
        getRowId={getRowId}
        readOnlyEdit
        onCellEditRequest={onCellEditRequest}
        onCellFocused={onCellFocused}
        rowSelection={selectable ? (rowSelection as RowSelectionOptions<T>) : undefined}
        selectionColumnDef={{ pinned: 'left', width: 44, maxWidth: 44, resizable: false, suppressHeaderMenuButton: true }}
        quickFilterText={quickFilter}
        onGridReady={onGridReady}
        onSelectionChanged={computeStats}
        onModelUpdated={onModelUpdated}
        loading={loading}
        overlayNoRowsTemplate={`<span class="wb-empty">${emptyText}</span>`}
        stopEditingWhenCellsLoseFocus
        enterNavigatesVerticallyAfterEdit
        tooltipShowDelay={400}
        suppressDragLeaveHidesColumns
        animateRows={false}
      />
    </div>
  );
}
```

#### `src/components/Toast.tsx`
```tsx
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

type ToastKind = 'success' | 'error' | 'info';
interface ToastItem {
  id: number;
  kind: ToastKind;
  text: string;
}

const ToastContext = createContext<{ push: (kind: ToastKind, text: string) => void } | null>(null);
let seq = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const push = useCallback((kind: ToastKind, text: string) => {
    const id = ++seq;
    setItems((xs) => [...xs.slice(-3), { id, kind, text }]);
    window.setTimeout(() => setItems((xs) => xs.filter((t) => t.id !== id)), kind === 'error' ? 6500 : 3500);
  }, []);
  const value = useMemo(() => ({ push }), [push]);
  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toasts" role="status" aria-live="polite">
        {items.map((t) => (
          <div key={t.id} className={`toast toast-${t.kind}`}>
            {t.text}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  const { push } = ctx;
  return useMemo(
    () => ({
      success: (t: string) => push('success', t),
      error: (t: string) => push('error', t),
      info: (t: string) => push('info', t),
    }),
    [push],
  );
}
```

#### `src/components/UnlockScreen.tsx`
```tsx
import { useState, type FormEvent } from 'react';
import { Api, ApiError, clearKey, setKey } from '../api/client';

export function UnlockScreen({ onUnlocked }: { onUnlocked: () => void }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setKey(value.trim());
    try {
      await Api.meta();
      onUnlocked();
    } catch (err) {
      clearKey();
      setError(err instanceof ApiError && err.status === 401 ? 'That key did not work.' : (err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="unlock">
      <form className="unlock-card" onSubmit={submit}>
        <span className="brand-mark brand-mark-lg" aria-hidden="true">PS</span>
        <h1>People Workbook</h1>
        <p className="muted">Enter the access key to open the workbook.</p>
        <input
          type="password"
          autoFocus
          autoComplete="current-password"
          aria-label="Access key"
          placeholder="Access key"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-primary btn-lg" type="submit" disabled={!value.trim() || busy}>
          {busy ? 'Checking…' : 'Unlock'}
        </button>
        {error && <p className="banner banner-danger">{error}</p>}
        <p className="unlock-foot">Temporary gate until company SSO is added.</p>
      </form>
    </div>
  );
}
```

#### `src/components/TitleBar.tsx`
```tsx
import { useIsFetching, useQueryClient } from '@tanstack/react-query';
import { Lock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { clearKey } from '../api/client';
import { useMeta } from '../api/hooks';

export function TitleBar() {
  const fetching = useIsFetching();
  const qc = useQueryClient();
  const { data: meta } = useMeta();
  const [lastSync, setLastSync] = useState(() => new Date());
  useEffect(() => {
    if (fetching === 0) setLastSync(new Date());
  }, [fetching]);

  const lock = () => {
    clearKey();
    qc.clear();
    window.dispatchEvent(new CustomEvent('hris:locked'));
  };

  return (
    <header className="titlebar">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">PS</span>
        <span className="brand-name">People Workbook</span>
        <span className="brand-sub">HRIS</span>
      </div>
      <div className="titlebar-right">
        <span className={`sync ${fetching ? 'is-syncing' : ''}`}>
          {fetching ? 'Syncing…' : `Synced ${lastSync.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`}
        </span>
        {meta?.region && <span className="badge mono hide-sm">{meta.region}</span>}
        {meta && !meta.googleConfigured && (
          <span className="badge badge-warn hide-sm" title="Add the Google service account to the people-stack/integrations secret">
            Google not connected
          </span>
        )}
        <button type="button" className="btn btn-ghost btn-sm" onClick={lock}>
          <Lock size={14} aria-hidden="true" /> Lock
        </button>
      </div>
    </header>
  );
}
```

#### `src/components/Ribbon.tsx`
```tsx
import { useQueryClient } from '@tanstack/react-query';
import { Download, PanelRight, Plus, RotateCw, Search, UserMinus, UserPlus } from 'lucide-react';
import { useCreateApp, usePeople } from '../api/hooks';
import { useToast } from './Toast';
import { ROWNUM_COL_ID } from '../grid/columns';
import { fullName, todayIso } from '../lib/format';
import { useWorkbook } from '../state/workbook';

export function Ribbon() {
  const { sheet, selectedPersonId, openDialog, quickFilter, setQuickFilter, inspectorOpen, setInspectorOpen, gridApiRef, setSelectedAppId } =
    useWorkbook();
  const { data: people } = usePeople();
  const qc = useQueryClient();
  const createApp = useCreateApp();
  const toast = useToast();
  const person = people?.find((p) => p.id === selectedPersonId);
  const canOnboard = !!person && (person.status === 'offer_accepted' || person.status === 'active');
  const canOffboard = !!person && (person.status === 'active' || person.status === 'offer_accepted');

  const exportCsv = () => {
    const api = gridApiRef.current;
    if (!api) return;
    const columnKeys = api
      .getAllDisplayedColumns()
      .map((c) => c.getColId())
      .filter((id) => id !== ROWNUM_COL_ID && !id.startsWith('ag-Grid-') && id !== 'action');
    api.exportDataAsCsv({ fileName: `people-workbook-${sheet}-${todayIso()}.csv`, columnKeys });
  };

  const newApp = async () => {
    try {
      const app = await createApp.mutateAsync({ name: 'New app', type: 'manual', enabled: false });
      setSelectedAppId(app.id);
      setInspectorOpen(true);
      toast.success('App added — rename it in the sheet');
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  return (
    <div className="ribbon" role="toolbar" aria-label="Workbook actions">
      <div className="ribbon-group">
        <button type="button" className="btn" onClick={() => openDialog({ kind: 'newPerson' })}>
          <Plus size={15} aria-hidden="true" />
          <span className="ribbon-label">New person</span>
        </button>
        {sheet === 'apps' && (
          <button type="button" className="btn" onClick={newApp} disabled={createApp.isPending}>
            <Plus size={15} aria-hidden="true" />
            <span className="ribbon-label">New app</span>
          </button>
        )}
      </div>
      <div className="ribbon-group">
        <span className="ribbon-context" title={person ? fullName(person) : undefined}>
          {person ? fullName(person) : 'No person selected'}
        </span>
        <button
          type="button"
          className="btn btn-primary"
          disabled={!canOnboard}
          onClick={() => person && openDialog({ kind: 'access', operation: 'onboard', personId: person.id })}
          aria-label="Onboard selected person"
        >
          <UserPlus size={15} aria-hidden="true" />
          <span className="ribbon-label">Onboard</span>
        </button>
        <button
          type="button"
          className="btn btn-danger"
          disabled={!canOffboard}
          onClick={() => person && openDialog({ kind: 'access', operation: 'offboard', personId: person.id })}
          aria-label="Offboard selected person"
        >
          <UserMinus size={15} aria-hidden="true" />
          <span className="ribbon-label">Offboard</span>
        </button>
      </div>
      <div className="ribbon-group">
        <button type="button" className="btn btn-ghost" onClick={() => void qc.invalidateQueries()} aria-label="Refresh">
          <RotateCw size={15} aria-hidden="true" />
          <span className="ribbon-label">Refresh</span>
        </button>
        <button type="button" className="btn btn-ghost" onClick={exportCsv} aria-label="Export CSV">
          <Download size={15} aria-hidden="true" />
          <span className="ribbon-label">Export CSV</span>
        </button>
      </div>
      <div className="ribbon-spacer" />
      <label className="ribbon-search">
        <Search size={14} aria-hidden="true" />
        <input
          id="wb-search"
          type="search"
          placeholder="Filter this sheet (Ctrl+F)"
          aria-label="Filter this sheet"
          value={quickFilter}
          onChange={(e) => setQuickFilter(e.target.value)}
        />
      </label>
      <button
        type="button"
        className={`btn btn-ghost btn-icon ${inspectorOpen ? 'is-on' : ''}`}
        aria-pressed={inspectorOpen}
        aria-label="Toggle inspector (Ctrl+I)"
        title="Inspector (Ctrl+I)"
        onClick={() => setInspectorOpen(!inspectorOpen)}
      >
        <PanelRight size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
```

#### `src/components/FormulaBar.tsx`
```tsx
import { Lock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useWorkbook } from '../state/workbook';
import { useToast } from './Toast';

export function FormulaBar() {
  const { focus, setFocus } = useWorkbook();
  const toast = useToast();
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => setDraft(focus?.display ?? ''), [focus]);

  const commit = async () => {
    if (!focus?.commit || draft === focus.display) return;
    setBusy(true);
    try {
      await focus.commit(draft);
      setFocus({ ...focus, display: draft });
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="formula">
      <div className="namebox mono" aria-label="Cell address">
        {focus?.address || '—'}
      </div>
      <span className="fx" aria-hidden="true">fx</span>
      <input
        className="formula-input"
        aria-label={focus ? `Value of ${focus.label}` : 'Cell value'}
        placeholder={focus ? focus.label : 'Select a cell'}
        value={draft}
        readOnly={!focus?.editable || busy}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            void commit();
          } else if (e.key === 'Escape') {
            setDraft(focus?.display ?? '');
          }
        }}
        onBlur={() => setDraft(focus?.display ?? '')}
      />
      {focus && !focus.editable && (
        <span className="formula-lock" title="Read-only cell">
          <Lock size={12} aria-hidden="true" />
        </span>
      )}
    </div>
  );
}
```

#### `src/components/SheetTabs.tsx`
```tsx
import { useApps, usePeople } from '../api/hooks';
import { isOffboardingRow, isOnboardingRow } from '../lib/rows';
import { SHEETS, useWorkbook, type SheetId } from '../state/workbook';

export function SheetTabs() {
  const { sheet, setSheet } = useWorkbook();
  const { data: people = [] } = usePeople();
  const { data: apps = [] } = useApps();
  const counts: Partial<Record<SheetId, number>> = {
    people: people.length,
    onboarding: people.filter(isOnboardingRow).length,
    offboarding: people.filter(isOffboardingRow).length,
    apps: apps.length,
  };
  return (
    <nav className="tabs" role="tablist" aria-label="Sheets">
      {SHEETS.map((s, i) => (
        <button
          key={s.id}
          type="button"
          role="tab"
          aria-selected={sheet === s.id}
          className="tab"
          title={`Alt+${i + 1}`}
          onClick={() => setSheet(s.id)}
        >
          {s.label}
          {counts[s.id] != null && <span className="tab-count">{counts[s.id]}</span>}
        </button>
      ))}
    </nav>
  );
}
```

#### `src/components/StatusBar.tsx`
```tsx
import { formatMoney } from '../lib/format';
import { useWorkbook } from '../state/workbook';

export function StatusBar() {
  const { stats } = useWorkbook();
  return (
    <div className="statusbar" aria-live="polite">
      <span>
        Rows <b className="mono">{stats.rows}</b>
        {stats.rows !== stats.total && <span className="muted"> of {stats.total}</span>}
      </span>
      <span className="hide-sm">
        Selected <b className="mono">{stats.selected}</b>
      </span>
      {Object.entries(stats.sums).map(([currency, sum]) => (
        <span key={currency} className="hide-sm">
          Σ <b className="mono">{formatMoney(sum, currency)}</b>
        </span>
      ))}
      <span className="ready hide-sm">
        <span className="ready-dot" aria-hidden="true" />
        Ready
      </span>
    </div>
  );
}
```

#### `src/components/Inspector.tsx`
```tsx
import { AppWindow, Copy, MousePointerClick, Trash2, UserMinus, UserPlus, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useApps, useDeleteApp, useGrantAction, usePatchApp, usePerson, useRevealSecret } from '../api/hooks';
import type { Grant } from '../api/types';
import { StatusChip } from '../grid/renderers';
import { CONFIG_TEMPLATES, CONNECTOR_HELP } from '../lib/connectors';
import { CONNECTOR_LABEL, EMPLOYMENT_LABEL, formatDate, formatDateTime, formatMoney, fullName, initials } from '../lib/format';
import { useWorkbook } from '../state/workbook';
import { useToast } from './Toast';

export function Inspector() {
  const { sheet } = useWorkbook();
  return sheet === 'apps' ? <AppInspector /> : <PersonInspector />;
}

function CloseButton() {
  const { setInspectorOpen } = useWorkbook();
  return (
    <button type="button" className="btn btn-ghost btn-icon" onClick={() => setInspectorOpen(false)} aria-label="Close inspector">
      <X size={16} aria-hidden="true" />
    </button>
  );
}

function EmptyInspector({ text }: { text: string }) {
  return (
    <aside className="wb-inspector" aria-label="Inspector">
      <header className="insp-head">
        <div className="insp-title">
          <h2>Inspector</h2>
        </div>
        <CloseButton />
      </header>
      <div className="insp-empty">
        <MousePointerClick size={28} aria-hidden="true" />
        <p>{text}</p>
      </div>
    </aside>
  );
}

function PersonInspector() {
  const { selectedPersonId, openDialog } = useWorkbook();
  const { data, isLoading, error } = usePerson(selectedPersonId);
  const grantAction = useGrantAction();
  const reveal = useRevealSecret();
  const toast = useToast();
  const [secrets, setSecrets] = useState<Record<string, string>>({});

  useEffect(() => setSecrets({}), [selectedPersonId]);

  if (!selectedPersonId) return <EmptyInspector text="Select a row to see the person's profile, access and history." />;
  if (error) return <EmptyInspector text={(error as Error).message} />;
  if (isLoading || !data) {
    return (
      <aside className="wb-inspector" aria-label="Inspector" aria-busy="true">
        <div className="insp-skeleton" />
      </aside>
    );
  }

  const e = data.employee;
  const canOnboard = e.status === 'offer_accepted' || e.status === 'active';
  const canOffboard = e.status === 'active' || e.status === 'offer_accepted';
  const live = data.grants.filter((g) => g.status !== 'revoked');
  const activeCount = data.grants.filter((g) => g.status === 'active').length;

  const act = async (g: Grant, action: 'complete' | 'retry') => {
    try {
      await grantAction.mutateAsync({ id: e.id, appId: g.appId, action });
      toast.success(action === 'complete' ? `${g.appName} marked done` : `Retrying ${g.appName}`);
    } catch (err) {
      toast.error((err as Error).message);
    }
  };
  const revealSecret = async (g: Grant) => {
    try {
      const { secret } = await reveal.mutateAsync({ id: e.id, appId: g.appId });
      setSecrets((s) => ({ ...s, [g.appId]: secret }));
    } catch (err) {
      toast.error((err as Error).message);
    }
  };
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied');
    } catch {
      toast.error('Copy failed — select and copy manually');
    }
  };

  const rows: [string, string, boolean?][] = [
    ['Work email', e.workEmail || '—', true],
    ['Personal email', e.personalEmail || '—', true],
    ['Phone', e.phone || '—', true],
    ['Location', e.location || '—'],
    ['Type', EMPLOYMENT_LABEL[e.employmentType]],
    ['Manager', [e.managerName, e.managerEmail].filter(Boolean).join(' · ') || '—'],
    ['Start date', e.startDate ? formatDate(e.startDate) : '—', true],
    ['End date', e.endDate ? formatDate(e.endDate) : '—', true],
    ['Salary / yr', e.salary ? formatMoney(e.salary.amount, e.salary.currency) : '—', true],
    ['Source', e.source === 'ashby' ? `Ashby${e.ashby?.applicationId ? ` · ${e.ashby.applicationId}` : ''}` : 'Manual'],
  ];

  return (
    <aside className="wb-inspector" aria-label="Inspector">
      <header className="insp-head">
        <div className="avatar" aria-hidden="true">{initials(e)}</div>
        <div className="insp-title">
          <h2>{fullName(e)}</h2>
          <p>{[e.title, e.department].filter(Boolean).join(' · ') || 'No title yet'}</p>
        </div>
        <StatusChip status={e.status} />
        <CloseButton />
      </header>

      <div className="insp-body">
        <section className="insp-section">
          <h3 className="insp-h">Profile</h3>
          <dl className="insp-dl">
            {rows.map(([k, v, mono]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd className={mono ? 'mono' : undefined}>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="insp-hint">Edit any field directly in the sheet.</p>
        </section>

        <section className="insp-section">
          <h3 className="insp-h">
            Access <span className="mono muted">{activeCount}/{live.length}</span>
          </h3>
          {data.grants.length === 0 ? (
            <p className="muted">No access yet. Use Onboard to provision apps.</p>
          ) : (
            <ul className="grant-list">
              {data.grants.map((g) => (
                <li key={g.appId} className="grant-row">
                  <div className="grant-main">
                    <span className="grant-name">{g.appName}</span>
                    {g.lastError && (
                      <span className="grant-error" title={g.lastError}>
                        {g.lastError}
                      </span>
                    )}
                  </div>
                  <StatusChip status={g.status} />
                  <div className="grant-actions">
                    {(g.status === 'manual_pending' || g.status === 'manual_revoke_pending') && (
                      <button type="button" className="btn btn-xs" onClick={() => act(g, 'complete')} disabled={grantAction.isPending}>
                        Mark done
                      </button>
                    )}
                    {(g.status === 'failed' || g.status === 'revoke_failed') && (
                      <button type="button" className="btn btn-xs" onClick={() => act(g, 'retry')} disabled={grantAction.isPending}>
                        Retry
                      </button>
                    )}
                    {g.hasOneTimeSecret && !secrets[g.appId] && (
                      <button type="button" className="btn btn-xs" onClick={() => revealSecret(g)} disabled={reveal.isPending}>
                        Reveal password
                      </button>
                    )}
                  </div>
                  {secrets[g.appId] && (
                    <div className="secret-box">
                      <code>{secrets[g.appId]}</code>
                      <button type="button" className="btn btn-xs" onClick={() => copy(secrets[g.appId])} aria-label="Copy password">
                        <Copy size={12} aria-hidden="true" /> Copy
                      </button>
                      <span className="muted">Shown once. Share it securely with the new joiner.</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="insp-section">
          <h3 className="insp-h">Timeline</h3>
          {data.audit.length === 0 ? (
            <p className="muted">No events yet.</p>
          ) : (
            <ol className="timeline">
              {data.audit.slice(0, 25).map((a) => (
                <li key={a.id}>
                  <span className="tl-dot" data-kind={a.type.split('.')[0]} aria-hidden="true" />
                  <div>
                    <p>{a.message}</p>
                    <time className="mono muted" dateTime={a.ts}>
                      {formatDateTime(a.ts)} · {a.actor}
                    </time>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>

      <footer className="insp-foot">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          disabled={!canOnboard}
          onClick={() => openDialog({ kind: 'access', operation: 'onboard', personId: e.id })}
        >
          <UserPlus size={16} aria-hidden="true" /> Onboard…
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg"
          disabled={!canOffboard}
          onClick={() => openDialog({ kind: 'access', operation: 'offboard', personId: e.id })}
        >
          <UserMinus size={16} aria-hidden="true" /> Offboard…
        </button>
      </footer>
    </aside>
  );
}

function AppInspector() {
  const { selectedAppId, setSelectedAppId } = useWorkbook();
  const { data: apps } = useApps();
  const patch = usePatchApp();
  const del = useDeleteApp();
  const toast = useToast();
  const app = apps?.find((a) => a.id === selectedAppId);
  const [configText, setConfigText] = useState('');
  const [configError, setConfigError] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    setConfigText(app ? JSON.stringify(app.config, null, 2) : '');
    setConfigError(null);
    setConfirmDelete(false);
  }, [app?.id, app?.updatedAt]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!app) return <EmptyInspector text="Select an app row to edit its connector settings." />;

  const saveConfig = async () => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(configText || '{}');
    } catch {
      setConfigError('Config must be valid JSON');
      return;
    }
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      setConfigError('Config must be a JSON object');
      return;
    }
    try {
      await patch.mutateAsync({ id: app.id, body: { config: parsed as Record<string, unknown> } });
      setConfigError(null);
      toast.success('Config saved');
    } catch (err) {
      setConfigError((err as Error).message);
    }
  };

  const remove = async () => {
    try {
      await del.mutateAsync(app.id);
      toast.success(`${app.name} deleted`);
      setSelectedAppId(null);
    } catch (err) {
      toast.error((err as Error).message);
    }
  };

  return (
    <aside className="wb-inspector" aria-label="App inspector">
      <header className="insp-head">
        <div className="avatar avatar-app" aria-hidden="true">
          <AppWindow size={18} />
        </div>
        <div className="insp-title">
          <h2>{app.name}</h2>
          <p>
            {CONNECTOR_LABEL[app.type]} · {app.enabled ? 'Enabled' : 'Disabled'}
          </p>
        </div>
        <CloseButton />
      </header>
      <div className="insp-body">
        <section className="insp-section">
          <h3 className="insp-h">How this connector works</h3>
          <p className="insp-text">{CONNECTOR_HELP[app.type]}</p>
        </section>
        <section className="insp-section">
          <h3 className="insp-h">Config (JSON, no secrets)</h3>
          <textarea
            className="code-input"
            spellCheck={false}
            rows={10}
            aria-label="Connector config JSON"
            value={configText}
            onChange={(ev) => setConfigText(ev.target.value)}
          />
          {configError && <p className="banner banner-danger">{configError}</p>}
          <div className="row-gap">
            <button type="button" className="btn btn-primary" onClick={saveConfig} disabled={patch.isPending}>
              Save config
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setConfigText(JSON.stringify(CONFIG_TEMPLATES[app.type], null, 2))}>
              Insert template
            </button>
          </div>
        </section>
        <section className="insp-section">
          <h3 className="insp-h">Defaults</h3>
          <p className="insp-text">
            {app.defaultForAll
              ? 'Granted to everyone by default.'
              : app.departments.length
                ? `Granted by default to: ${app.departments.join(', ')}.`
                : 'Optional: tick it in the onboarding dialog.'}
          </p>
          {app.instructions && <p className="insp-text muted">{app.instructions}</p>}
          <p className="insp-hint">Edit name, connector, defaults and instructions directly in the sheet.</p>
        </section>
        <section className="insp-section">
          <h3 className="insp-h">Danger zone</h3>
          {confirmDelete ? (
            <div className="row-gap">
              <button type="button" className="btn btn-danger-solid" onClick={remove} disabled={del.isPending}>
                Confirm delete
              </button>
              <button type="button" className="btn" onClick={() => setConfirmDelete(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <button type="button" className="btn btn-danger" onClick={() => setConfirmDelete(true)}>
              <Trash2 size={14} aria-hidden="true" /> Delete app
            </button>
          )}
        </section>
      </div>
    </aside>
  );
}
```

#### `src/components/ConfirmAccessDialog.tsx`
```tsx
import { useEffect, useState } from 'react';
import { usePerson, usePreview, useStartAccess } from '../api/hooks';
import type { PreviewItem, WorkflowOperation } from '../api/types';
import { StatusChip } from '../grid/renderers';
import { CONNECTOR_LABEL, fullName, todayIso } from '../lib/format';
import { useEscape } from '../lib/useEscape';
import { useWorkbook } from '../state/workbook';
import { useToast } from './Toast';

export function ConfirmAccessDialog({ operation, personId }: { operation: WorkflowOperation; personId: string }) {
  const { closeDialog } = useWorkbook();
  const toast = useToast();
  const person = usePerson(personId);
  const preview = usePreview(personId, operation);
  const start = useStartAccess();
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [endDate, setEndDate] = useState(todayIso());
  const [ack, setAck] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEscape(closeDialog);

  useEffect(() => {
    if (preview.data) setChecked(new Set(preview.data.filter((i) => i.selected).map((i) => i.appId)));
  }, [preview.data]);

  const isOff = operation === 'offboard';
  const name = person.data ? fullName(person.data.employee) : '…';
  const items: PreviewItem[] = preview.data ?? [];
  const groups = [
    { key: 'identity', title: isOff ? 'Identity: revoked last' : 'Identity: runs first', items: items.filter((i) => i.phase === 'identity') },
    { key: 'apps', title: 'Apps & groups', items: items.filter((i) => i.phase === 'apps') },
  ];
  const nothingToRevoke = isOff && preview.isSuccess && items.length === 0;
  const canSubmit = !start.isPending && preview.isSuccess && (nothingToRevoke || checked.size > 0) && (!isOff || ack);
  const n = checked.size;

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const submit = async () => {
    setError(null);
    try {
      await start.mutateAsync({ id: personId, operation, appIds: [...checked], endDate: isOff ? endDate : undefined });
      toast.success(isOff ? `Offboarding ${name} started` : `Onboarding ${name} started`);
      closeDialog();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="overlay" onMouseDown={(ev) => ev.target === ev.currentTarget && closeDialog()}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="access-title">
        <header className="dialog-head">
          <h2 id="access-title">{isOff ? `Offboard ${name}` : `Onboard ${name}`}</h2>
          <p className="muted">
            {isOff
              ? 'Revokes access in every selected app. Google sign-in is suspended and all sessions are signed out.'
              : 'Creates accounts and grants access in every selected app. Apps without an API become checklist tasks.'}
          </p>
        </header>
        <div className="dialog-body">
          {preview.isLoading && <p className="muted">Working out access…</p>}
          {preview.error && <p className="banner banner-danger">{(preview.error as Error).message}</p>}
          {nothingToRevoke && <p>No active access found. Confirming marks this person as exited.</p>}
          {groups
            .filter((g) => g.items.length > 0)
            .map((g) => (
              <fieldset key={g.key} className="app-group">
                <legend>{g.title}</legend>
                {g.items.map((i) => (
                  <label key={i.appId} className="app-option">
                    <input type="checkbox" checked={checked.has(i.appId)} onChange={() => toggle(i.appId)} />
                    <span className="app-option-name">{i.name}</span>
                    <span className="app-option-type">{CONNECTOR_LABEL[i.type]}</span>
                    <span className="app-option-reason">{i.reason}</span>
                    {i.currentStatus && <StatusChip status={i.currentStatus} />}
                  </label>
                ))}
              </fieldset>
            ))}
          {!isOff && preview.isSuccess && items.length === 0 && (
            <p className="banner banner-warn">No enabled apps in the catalog yet. Add apps on the Apps sheet first.</p>
          )}
          {isOff && (
            <>
              <label className="field">
                <span>Last working day</span>
                <input type="date" value={endDate} onChange={(ev) => setEndDate(ev.target.value)} />
              </label>
              <label className="ack">
                <input type="checkbox" checked={ack} onChange={(ev) => setAck(ev.target.checked)} />
                I understand access is revoked immediately.
              </label>
            </>
          )}
          {error && <p className="banner banner-danger">{error}</p>}
        </div>
        <footer className="dialog-foot">
          <button type="button" className="btn" onClick={closeDialog}>
            Cancel
          </button>
          <button
            type="button"
            className={`btn btn-lg ${isOff ? 'btn-danger-solid' : 'btn-primary'}`}
            disabled={!canSubmit}
            onClick={submit}
          >
            {start.isPending
              ? 'Starting…'
              : nothingToRevoke
                ? 'Mark as exited'
                : `${isOff ? 'Revoke' : 'Grant'} ${n} app${n === 1 ? '' : 's'}`}
          </button>
        </footer>
      </div>
    </div>
  );
}
```

#### `src/components/NewPersonDialog.tsx`
```tsx
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useCreatePerson, useMeta } from '../api/hooks';
import type { EmploymentType, PersonCreateBody } from '../api/types';
import { CURRENCIES, EMPLOYMENT_LABEL, EMPLOYMENT_TYPES, fullName, suggestWorkEmail } from '../lib/format';
import { useEscape } from '../lib/useEscape';
import { useWorkbook } from '../state/workbook';
import { useToast } from './Toast';

const EMPTY = {
  firstName: '',
  lastName: '',
  personalEmail: '',
  workEmail: '',
  title: '',
  department: '',
  location: '',
  employmentType: 'full_time' as EmploymentType,
  startDate: '',
  salaryAmount: '',
  currency: 'INR',
};
type FormState = typeof EMPTY;

export function NewPersonDialog() {
  const { closeDialog, setSelectedPersonId, setInspectorOpen } = useWorkbook();
  const { data: meta } = useMeta();
  const create = useCreatePerson();
  const toast = useToast();
  const [f, setF] = useState<FormState>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  useEscape(closeDialog);

  const set = (k: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));
  const suggestion = meta?.googleDomain && f.firstName.trim() ? suggestWorkEmail(f.firstName, f.lastName, meta.googleDomain) : '';

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const rawAmount = f.salaryAmount.replace(/[,\s_]/g, '');
    const amount = rawAmount ? Number(rawAmount) : undefined;
    if (amount !== undefined && (!Number.isFinite(amount) || amount < 0)) {
      setError('Salary must be a positive number');
      return;
    }
    const body: PersonCreateBody = {
      firstName: f.firstName.trim(),
      lastName: f.lastName.trim(),
      personalEmail: f.personalEmail.trim(),
      workEmail: f.workEmail.trim(),
      title: f.title.trim(),
      department: f.department.trim(),
      location: f.location.trim(),
      employmentType: f.employmentType,
      ...(f.startDate ? { startDate: f.startDate } : {}),
      ...(amount !== undefined ? { salary: { amount: Math.round(amount), currency: f.currency } } : {}),
    };
    try {
      const emp = await create.mutateAsync(body);
      toast.success(`${fullName(emp)} added`);
      setSelectedPersonId(emp.id);
      setInspectorOpen(true);
      closeDialog();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="overlay" onMouseDown={(ev) => ev.target === ev.currentTarget && closeDialog()}>
      <form className="dialog" role="dialog" aria-modal="true" aria-labelledby="np-title" onSubmit={submit}>
        <header className="dialog-head">
          <h2 id="np-title">New person</h2>
          <p className="muted">People hired through Ashby are added automatically. Use this for anyone else.</p>
        </header>
        <div className="dialog-body form-grid">
          <label className="field">
            <span>First name *</span>
            <input required autoFocus value={f.firstName} onChange={set('firstName')} />
          </label>
          <label className="field">
            <span>Last name</span>
            <input value={f.lastName} onChange={set('lastName')} />
          </label>
          <label className="field span-2">
            <span>Personal email *</span>
            <input required type="email" value={f.personalEmail} onChange={set('personalEmail')} />
          </label>
          <label className="field span-2">
            <span>Work email</span>
            <input type="email" value={f.workEmail} onChange={set('workEmail')} placeholder={suggestion || 'name@company.com'} />
            {suggestion && !f.workEmail && (
              <button type="button" className="link-btn" onClick={() => setF((p) => ({ ...p, workEmail: suggestion }))}>
                Use {suggestion}
              </button>
            )}
          </label>
          <label className="field">
            <span>Title</span>
            <input value={f.title} onChange={set('title')} />
          </label>
          <label className="field">
            <span>Department</span>
            <input value={f.department} onChange={set('department')} />
          </label>
          <label className="field">
            <span>Location</span>
            <input value={f.location} onChange={set('location')} />
          </label>
          <label className="field">
            <span>Type</span>
            <select value={f.employmentType} onChange={set('employmentType')}>
              {EMPLOYMENT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {EMPLOYMENT_LABEL[t]}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Start date</span>
            <input type="date" value={f.startDate} onChange={set('startDate')} />
          </label>
          <div className="field">
            <span>Annual salary</span>
            <div className="money-input">
              <select aria-label="Currency" value={f.currency} onChange={set('currency')}>
                {CURRENCIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <input inputMode="numeric" aria-label="Salary amount" placeholder="e.g. 2400000" value={f.salaryAmount} onChange={set('salaryAmount')} />
            </div>
          </div>
          {error && <p className="banner banner-danger span-2">{error}</p>}
        </div>
        <footer className="dialog-foot">
          <button type="button" className="btn" onClick={closeDialog}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary btn-lg" disabled={create.isPending}>
            {create.isPending ? 'Adding…' : 'Add person'}
          </button>
        </footer>
      </form>
    </div>
  );
}
```

#### `src/sheets/PeopleSheet.tsx`
```tsx
import type { ColDef } from 'ag-grid-community';
import { usePeople, usePersonEditor } from '../api/hooks';
import type { Employee } from '../api/types';
import { WorkbookGrid } from '../grid/WorkbookGrid';
import { AccessCell, StatusCell } from '../grid/renderers';
import { CURRENCIES, EMPLOYMENT_LABEL, EMPLOYMENT_TYPES, formatDateTime, formatMoney } from '../lib/format';
import { moneyOfEmployee } from '../lib/rows';
import { useWorkbook } from '../state/workbook';

const COLUMNS: ColDef<Employee>[] = [
  { field: 'firstName', headerName: 'First name', editable: true, width: 130, cellClass: 'strong' },
  { field: 'lastName', headerName: 'Last name', editable: true, width: 130, cellClass: 'strong' },
  { field: 'status', headerName: 'Status', width: 140, cellRenderer: StatusCell },
  { field: 'workEmail', headerName: 'Work email', editable: true, width: 230, cellClass: 'mono' },
  { field: 'personalEmail', headerName: 'Personal email', editable: true, width: 230, cellClass: 'mono' },
  { field: 'title', headerName: 'Title', editable: true, width: 190 },
  { field: 'department', headerName: 'Department', editable: true, width: 140 },
  { field: 'location', headerName: 'Location', editable: true, width: 130 },
  {
    field: 'employmentType',
    headerName: 'Type',
    editable: true,
    width: 120,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: { values: EMPLOYMENT_TYPES },
    valueFormatter: (p) => EMPLOYMENT_LABEL[p.value as Employee['employmentType']] ?? String(p.value ?? ''),
  },
  { field: 'managerName', headerName: 'Manager', editable: true, width: 150 },
  { field: 'managerEmail', headerName: 'Manager email', editable: true, width: 210, cellClass: 'mono' },
  { field: 'startDate', headerName: 'Start date', editable: true, width: 125, cellDataType: 'dateString', cellClass: 'mono' },
  { field: 'endDate', headerName: 'End date', editable: true, width: 125, cellDataType: 'dateString', cellClass: 'mono' },
  {
    colId: 'salaryAmount',
    headerName: 'Salary / yr',
    editable: true,
    width: 150,
    cellDataType: 'number',
    valueGetter: (p) => p.data?.salary?.amount,
    valueFormatter: (p) => (p.data?.salary ? formatMoney(p.data.salary.amount, p.data.salary.currency) : ''),
    filter: 'agNumberColumnFilter',
    cellClass: 'mono num',
  },
  {
    colId: 'salaryCurrency',
    headerName: 'Cur.',
    editable: true,
    width: 84,
    valueGetter: (p) => p.data?.salary?.currency ?? '',
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: { values: CURRENCIES },
    cellClass: 'mono',
  },
  { colId: 'access', headerName: 'Access', width: 150, sortable: false, filter: false, cellRenderer: AccessCell },
  { field: 'source', headerName: 'Source', width: 100, valueFormatter: (p) => (p.value === 'ashby' ? 'Ashby' : 'Manual') },
  { field: 'updatedAt', headerName: 'Updated', width: 150, valueFormatter: (p) => formatDateTime(p.value as string), cellClass: 'mono muted' },
];

export function PeopleSheet() {
  const { data, isLoading } = usePeople();
  const onEdit = usePersonEditor();
  const { setSelectedPersonId } = useWorkbook();
  return (
    <WorkbookGrid<Employee>
      rowData={data}
      columns={COLUMNS}
      loading={isLoading}
      onEdit={onEdit}
      onRowFocused={(r) => setSelectedPersonId(r.id)}
      moneyOf={moneyOfEmployee}
      emptyText="No people yet. New hires from Ashby appear here automatically, or use New person."
    />
  );
}
```

#### `src/sheets/OnboardingSheet.tsx`
```tsx
import type { ColDef } from 'ag-grid-community';
import { useMemo } from 'react';
import { usePeople, usePersonEditor } from '../api/hooks';
import type { Employee } from '../api/types';
import { WorkbookGrid } from '../grid/WorkbookGrid';
import { AccessCell, ActionCell, StatusCell } from '../grid/renderers';
import { daysUntil, relativeDays } from '../lib/format';
import { isOnboardingRow, moneyOfEmployee } from '../lib/rows';
import { useWorkbook } from '../state/workbook';

export function OnboardingSheet() {
  const { data, isLoading } = usePeople();
  const onEdit = usePersonEditor();
  const { setSelectedPersonId, openDialog } = useWorkbook();
  const rows = useMemo(() => (data ?? []).filter(isOnboardingRow), [data]);
  const columns = useMemo<ColDef<Employee>[]>(
    () => [
      { field: 'firstName', headerName: 'First name', editable: true, width: 130, cellClass: 'strong' },
      { field: 'lastName', headerName: 'Last name', editable: true, width: 130, cellClass: 'strong' },
      { field: 'status', headerName: 'Status', width: 140, cellRenderer: StatusCell },
      { field: 'startDate', headerName: 'Start date', editable: true, width: 125, cellDataType: 'dateString', cellClass: 'mono' },
      {
        colId: 'startsIn',
        headerName: 'Starts',
        width: 120,
        cellDataType: 'number',
        valueGetter: (p) => daysUntil(p.data?.startDate),
        valueFormatter: (p) => relativeDays(p.value as number | null),
        cellClass: 'muted',
      },
      {
        field: 'workEmail',
        headerName: 'Work email',
        editable: true,
        width: 230,
        cellClass: 'mono',
        cellClassRules: { 'wb-missing': (p) => !p.data?.workEmail },
      },
      { field: 'personalEmail', headerName: 'Personal email', width: 220, cellClass: 'mono' },
      { field: 'title', headerName: 'Title', editable: true, width: 180 },
      { field: 'department', headerName: 'Department', editable: true, width: 140 },
      { colId: 'access', headerName: 'Access', width: 150, sortable: false, filter: false, cellRenderer: AccessCell },
      {
        colId: 'action',
        headerName: '',
        width: 120,
        sortable: false,
        filter: false,
        cellRenderer: ActionCell,
        cellRendererParams: {
          label: 'Onboard…',
          variant: 'primary',
          isEnabled: (r: Employee) => r.status === 'offer_accepted' || r.status === 'active',
          onAction: (r: Employee) => openDialog({ kind: 'access', operation: 'onboard', personId: r.id }),
        },
      },
    ],
    [openDialog],
  );
  return (
    <WorkbookGrid<Employee>
      rowData={rows}
      columns={columns}
      loading={isLoading}
      onEdit={onEdit}
      onRowFocused={(r) => setSelectedPersonId(r.id)}
      moneyOf={moneyOfEmployee}
      emptyText="No one is waiting to be onboarded. Accepted offers from Ashby land here."
    />
  );
}
```

#### `src/sheets/OffboardingSheet.tsx`
```tsx
import type { ColDef } from 'ag-grid-community';
import { useMemo } from 'react';
import { usePeople, usePersonEditor } from '../api/hooks';
import type { Employee } from '../api/types';
import { WorkbookGrid } from '../grid/WorkbookGrid';
import { AccessCell, ActionCell, StatusCell } from '../grid/renderers';
import { isOffboardingRow, moneyOfEmployee } from '../lib/rows';
import { useWorkbook } from '../state/workbook';

export function OffboardingSheet() {
  const { data, isLoading } = usePeople();
  const onEdit = usePersonEditor();
  const { setSelectedPersonId, openDialog } = useWorkbook();
  const rows = useMemo(() => (data ?? []).filter(isOffboardingRow), [data]);
  const columns = useMemo<ColDef<Employee>[]>(
    () => [
      { field: 'firstName', headerName: 'First name', width: 130, cellClass: 'strong' },
      { field: 'lastName', headerName: 'Last name', width: 130, cellClass: 'strong' },
      { field: 'status', headerName: 'Status', width: 140, cellRenderer: StatusCell },
      { field: 'title', headerName: 'Title', width: 180 },
      { field: 'department', headerName: 'Department', width: 140 },
      { field: 'managerName', headerName: 'Manager', width: 150 },
      { field: 'endDate', headerName: 'End date', editable: true, width: 125, cellDataType: 'dateString', cellClass: 'mono' },
      { colId: 'access', headerName: 'Access', width: 150, sortable: false, filter: false, cellRenderer: AccessCell },
      {
        colId: 'action',
        headerName: '',
        width: 120,
        sortable: false,
        filter: false,
        cellRenderer: ActionCell,
        cellRendererParams: {
          label: 'Offboard…',
          variant: 'danger',
          isEnabled: (r: Employee) => r.status === 'active',
          onAction: (r: Employee) => openDialog({ kind: 'access', operation: 'offboard', personId: r.id }),
        },
      },
    ],
    [openDialog],
  );
  return (
    <WorkbookGrid<Employee>
      rowData={rows}
      columns={columns}
      loading={isLoading}
      onEdit={onEdit}
      onRowFocused={(r) => setSelectedPersonId(r.id)}
      moneyOf={moneyOfEmployee}
      emptyText="No planned exits. Set an End date on the People sheet, or use Offboard on a person."
    />
  );
}
```

#### `src/sheets/AccessSheet.tsx`
```tsx
import type { ColDef } from 'ag-grid-community';
import { useMemo, useState } from 'react';
import { useApps, useGrants, usePeople } from '../api/hooks';
import type { Employee, GrantStatus } from '../api/types';
import { WorkbookGrid } from '../grid/WorkbookGrid';
import { GrantCell, GrantIcon, StatusCell } from '../grid/renderers';
import { CONNECTOR_LABEL, fullName } from '../lib/format';
import { useWorkbook } from '../state/workbook';

type AccessRow = Employee & { access: Record<string, GrantStatus> };
const LEGEND: GrantStatus[] = ['active', 'pending', 'provisioning', 'manual_pending', 'failed', 'revoked'];

export function AccessSheet() {
  const { data: people, isLoading } = usePeople();
  const { data: apps } = useApps();
  const { data: grants } = useGrants();
  const { setSelectedPersonId } = useWorkbook();
  const [showExited, setShowExited] = useState(false);

  const rows = useMemo<AccessRow[]>(() => {
    const byEmp = new Map<string, Record<string, GrantStatus>>();
    for (const g of grants ?? []) {
      const m = byEmp.get(g.employeeId) ?? {};
      m[g.appId] = g.status;
      byEmp.set(g.employeeId, m);
    }
    return (people ?? [])
      .filter((p) => showExited || p.status !== 'exited')
      .map((p) => ({ ...p, access: byEmp.get(p.id) ?? {} }));
  }, [people, grants, showExited]);

  const columns = useMemo<ColDef<AccessRow>[]>(
    () => [
      { colId: 'name', headerName: 'Person', width: 200, valueGetter: (p) => (p.data ? fullName(p.data) : ''), cellClass: 'strong' },
      { field: 'status', headerName: 'Status', width: 140, cellRenderer: StatusCell },
      ...(apps ?? []).map(
        (a): ColDef<AccessRow> => ({
          colId: `app:${a.id}`,
          headerName: a.name,
          headerTooltip: `${a.name} · ${CONNECTOR_LABEL[a.type]}${a.enabled ? '' : ' (disabled)'}`,
          width: 130,
          sortable: false,
          filter: false,
          valueGetter: (p) => p.data?.access[a.id],
          cellRenderer: GrantCell,
          cellClass: 'center',
        }),
      ),
    ],
    [apps],
  );

  return (
    <div className="sheet-stack">
      <div className="sheet-legend" aria-label="Legend">
        {LEGEND.map((s) => (
          <span key={s} className="legend-item">
            <GrantIcon status={s} />
          </span>
        ))}
        <label className="legend-toggle">
          <input type="checkbox" checked={showExited} onChange={(e) => setShowExited(e.target.checked)} /> Show exited
        </label>
      </div>
      <WorkbookGrid<AccessRow>
        rowData={rows}
        columns={columns}
        loading={isLoading}
        selectable={false}
        onRowFocused={(r) => setSelectedPersonId(r.id)}
        emptyText="No people yet."
      />
    </div>
  );
}
```
Add CSS so `.legend-item .gcell` shows its label text: in the legend, render the visible label (see `.sheet-legend .sr-only` override in app.css).

#### `src/sheets/AppsSheet.tsx`
```tsx
import type { ColDef } from 'ag-grid-community';
import { useCallback } from 'react';
import { useApps, usePatchApp } from '../api/hooks';
import { CONNECTOR_TYPES, type AppDef, type ConnectorType } from '../api/types';
import { useToast } from '../components/Toast';
import { WorkbookGrid } from '../grid/WorkbookGrid';
import { CONNECTOR_LABEL, formatDateTime } from '../lib/format';
import { toAppPatch } from '../lib/patches';
import { useWorkbook } from '../state/workbook';

const COLUMNS: ColDef<AppDef>[] = [
  { field: 'name', headerName: 'App', editable: true, width: 220, cellClass: 'strong' },
  {
    field: 'type',
    headerName: 'Connector',
    editable: true,
    width: 150,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: { values: [...CONNECTOR_TYPES] },
    valueFormatter: (p) => CONNECTOR_LABEL[p.value as ConnectorType] ?? String(p.value ?? ''),
  },
  { field: 'enabled', headerName: 'Enabled', editable: true, width: 100, cellDataType: 'boolean' },
  { field: 'defaultForAll', headerName: 'Everyone', editable: true, width: 105, cellDataType: 'boolean' },
  { colId: 'departments', headerName: 'Departments', editable: true, width: 200, valueGetter: (p) => (p.data?.departments ?? []).join(', ') },
  {
    field: 'instructions',
    headerName: 'Instructions (manual steps)',
    editable: true,
    width: 340,
    cellEditor: 'agLargeTextCellEditor',
    cellEditorPopup: true,
    tooltipField: 'instructions',
  },
  { colId: 'config', headerName: 'Config', width: 260, valueGetter: (p) => JSON.stringify(p.data?.config ?? {}), cellClass: 'mono muted' },
  { field: 'updatedAt', headerName: 'Updated', width: 150, valueFormatter: (p) => formatDateTime(p.value as string), cellClass: 'mono muted' },
];

export function AppsSheet() {
  const { data, isLoading } = useApps();
  const { mutateAsync } = usePatchApp();
  const toast = useToast();
  const { setSelectedAppId } = useWorkbook();
  const onEdit = useCallback(
    async (row: AppDef, colId: string, value: unknown) => {
      try {
        const body = toAppPatch(colId, value);
        if (!body) return;
        await mutateAsync({ id: row.id, body });
      } catch (err) {
        toast.error((err as Error).message);
      }
    },
    [mutateAsync, toast],
  );
  return (
    <WorkbookGrid<AppDef>
      rowData={data}
      columns={COLUMNS}
      loading={isLoading}
      onEdit={onEdit}
      onRowFocused={(r) => setSelectedAppId(r.id)}
      emptyText="No apps yet. Add every tool a new hire needs (New app)."
    />
  );
}
```

#### `src/sheets/AuditSheet.tsx`
```tsx
import type { ColDef } from 'ag-grid-community';
import { useMemo } from 'react';
import { useAudit, usePeople } from '../api/hooks';
import type { AuditEvent } from '../api/types';
import { WorkbookGrid } from '../grid/WorkbookGrid';
import { formatDateTime, fullName } from '../lib/format';
import { useWorkbook } from '../state/workbook';

type AuditRow = AuditEvent & { person: string };

const COLUMNS: ColDef<AuditRow>[] = [
  { field: 'ts', headerName: 'Time', width: 160, sort: 'desc', valueFormatter: (p) => formatDateTime(p.value as string), cellClass: 'mono' },
  { field: 'person', headerName: 'Person', width: 180 },
  { field: 'actor', headerName: 'Actor', width: 120, cellClass: 'mono muted' },
  { field: 'type', headerName: 'Event', width: 210, cellClass: 'mono' },
  { field: 'message', headerName: 'Message', flex: 1, minWidth: 320 },
];

export function AuditSheet() {
  const { data, isLoading } = useAudit();
  const { data: people } = usePeople();
  const { setSelectedPersonId } = useWorkbook();
  const rows = useMemo<AuditRow[]>(() => {
    const names = new Map((people ?? []).map((p) => [p.id, fullName(p)]));
    return (data ?? []).map((a) => ({ ...a, person: a.employeeId ? (names.get(a.employeeId) ?? a.employeeId) : '—' }));
  }, [data, people]);
  return (
    <WorkbookGrid<AuditRow>
      rowData={rows}
      columns={COLUMNS}
      loading={isLoading}
      selectable={false}
      onRowFocused={(r) => r.employeeId && setSelectedPersonId(r.employeeId)}
      emptyText="No activity yet."
    />
  );
}
```

#### `src/styles/tokens.css`
```css
:root {
  --paper: #f7f6f2;
  --paper-2: #efede7;
  --surface: #ffffff;
  --line: #e4e1d9;
  --line-strong: #cfcac0;
  --dot: #d9d5cb;
  --ink: #1d2127;
  --ink-2: #4a4f57;
  --ink-3: #868b93;
  --accent: #1f4fd1;
  --accent-hover: #1a43b3;
  --accent-ink: #ffffff;
  --accent-soft: #e9eefc;
  --ok: #1d7a4c;
  --ok-soft: #e3f3ea;
  --info: #1f4fd1;
  --info-soft: #e9eefc;
  --warn: #9a5b00;
  --warn-soft: #fcf0d9;
  --danger: #b3261e;
  --danger-soft: #fce8e6;
  --danger-line: #e7b4af;
  --neutral: #5b616b;
  --neutral-soft: #eeece6;
  --font-ui: 'Inter Variable', Inter, system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace;
  --radius-s: 6px;
  --radius-m: 8px;
  --radius-l: 12px;
  --shadow-sheet: 0 1px 2px rgba(29, 33, 39, 0.04), 0 8px 24px rgba(29, 33, 39, 0.06);
  --shadow-pop: 0 16px 48px rgba(29, 33, 39, 0.18);
  color-scheme: light;
}
```

#### `src/styles/app.css`
```css
*, *::before, *::after { box-sizing: border-box; }
html, body, #root { height: 100%; }
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font: 13px/1.45 var(--font-ui);
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, p { margin: 0; }
button, input, select, textarea { font: inherit; color: inherit; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.mono { font-family: var(--font-mono); font-size: 12px; font-variant-numeric: tabular-nums; }
.muted { color: var(--ink-3); }
.strong { font-weight: 600; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

/* ---------- Shell ---------- */
.wb { height: 100dvh; display: grid; grid-template-rows: auto auto auto minmax(0, 1fr) auto; overflow: hidden; }
.titlebar { height: 44px; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0 14px; background: var(--surface); border-bottom: 1px solid var(--line); }
.brand { display: flex; align-items: center; gap: 10px; min-width: 0; }
.brand-mark { display: inline-grid; place-items: center; width: 24px; height: 24px; border: 1.5px solid var(--ink); border-radius: 6px; font: 600 10px var(--font-mono); letter-spacing: .02em; background: var(--surface); box-shadow: 2px 2px 0 var(--accent); }
.brand-mark-lg { width: 44px; height: 44px; font-size: 15px; border-radius: 10px; box-shadow: 3px 3px 0 var(--accent); }
.brand-name { font-weight: 650; font-size: 14px; white-space: nowrap; }
.brand-sub { font: 500 11px var(--font-mono); color: var(--ink-3); padding: 1px 6px; border: 1px solid var(--line); border-radius: 4px; }
.titlebar-right { display: flex; align-items: center; gap: 10px; }
.sync { font-size: 12px; color: var(--ink-3); white-space: nowrap; }
.sync.is-syncing { color: var(--accent); }
.badge { font-size: 11px; padding: 2px 8px; border-radius: 999px; background: var(--paper-2); color: var(--ink-2); white-space: nowrap; }
.badge-warn { background: var(--warn-soft); color: var(--warn); font-weight: 600; }

/* ---------- Ribbon ---------- */
.ribbon { height: 48px; display: flex; align-items: center; gap: 4px; padding: 0 10px; background: var(--surface); border-bottom: 1px solid var(--line); overflow-x: auto; scrollbar-width: none; }
.ribbon-group { display: flex; align-items: center; gap: 6px; padding: 0 8px; border-right: 1px solid var(--line); height: 30px; flex-shrink: 0; }
.ribbon-context { max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; color: var(--ink-2); padding-right: 4px; }
.ribbon-spacer { flex: 1; min-width: 8px; }
.ribbon-search { display: flex; align-items: center; gap: 6px; height: 30px; padding: 0 10px; border: 1px solid var(--line-strong); border-radius: var(--radius-s); background: var(--surface); color: var(--ink-3); width: 260px; flex-shrink: 1; min-width: 140px; }
.ribbon-search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
.ribbon-search input { border: 0; outline: 0; background: transparent; width: 100%; color: var(--ink); }

/* ---------- Buttons ---------- */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 30px; padding: 0 11px; border-radius: var(--radius-s); border: 1px solid var(--line-strong); background: var(--surface); color: var(--ink); font-weight: 500; cursor: pointer; white-space: nowrap; transition: background-color .12s, border-color .12s, color .12s; }
.btn:hover:not(:disabled) { background: var(--paper); }
.btn:disabled { opacity: .45; cursor: not-allowed; }
.btn-primary { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
.btn-primary:hover:not(:disabled) { background: var(--accent-hover); }
.btn-danger { color: var(--danger); border-color: var(--danger-line); }
.btn-danger:hover:not(:disabled) { background: var(--danger-soft); }
.btn-danger-solid { background: var(--danger); border-color: var(--danger); color: #fff; }
.btn-danger-solid:hover:not(:disabled) { background: #9a1f18; }
.btn-ghost { border-color: transparent; background: transparent; }
.btn-ghost.is-on { background: var(--accent-soft); color: var(--accent); }
.btn-icon { width: 30px; padding: 0; }
.btn-sm { height: 26px; padding: 0 8px; font-size: 12px; }
.btn-xs { height: 22px; padding: 0 8px; font-size: 11.5px; border-radius: 5px; }
.btn-lg { height: 38px; padding: 0 16px; font-size: 14px; }
.link-btn { border: 0; background: none; padding: 0; color: var(--accent); cursor: pointer; text-align: left; font-size: 12px; }

/* ---------- Formula bar ---------- */
.formula { height: 36px; display: flex; align-items: center; gap: 0; padding: 0 10px; background: var(--surface); border-bottom: 1px solid var(--line-strong); }
.namebox { width: 92px; height: 26px; display: flex; align-items: center; padding: 0 8px; border: 1px solid var(--line-strong); border-radius: 4px; background: var(--paper); color: var(--ink-2); }
.fx { font: italic 600 13px Georgia, 'Times New Roman', serif; color: var(--ink-3); padding: 0 12px; border-right: 1px solid var(--line); margin-right: 10px; }
.formula-input { flex: 1; height: 26px; border: 0; outline: 0; background: transparent; font-family: var(--font-mono); font-size: 12.5px; }
.formula-input:read-only { color: var(--ink-2); }
.formula-lock { color: var(--ink-3); display: inline-flex; padding-left: 8px; }

/* ---------- Main / whiteboard ---------- */
.wb-main { min-height: 0; display: flex; gap: 14px; padding: 14px; background-color: var(--paper); background-image: radial-gradient(var(--dot) 1px, transparent 1.2px); background-size: 18px 18px; }
.wb-sheet { flex: 1; min-width: 0; display: flex; flex-direction: column; background: var(--surface); border: 1px solid var(--line-strong); border-radius: var(--radius-m); box-shadow: var(--shadow-sheet); overflow: hidden; }
.wb-grid { flex: 1; min-height: 0; }
.sheet-stack { display: flex; flex-direction: column; flex: 1; min-height: 0; }
.sheet-legend { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; padding: 8px 12px; border-bottom: 1px solid var(--line); font-size: 12px; color: var(--ink-2); }
.sheet-legend .sr-only { position: static; width: auto; height: auto; margin: 0 0 0 4px; overflow: visible; clip: auto; white-space: nowrap; }
.legend-item { display: inline-flex; align-items: center; }
.legend-toggle { margin-left: auto; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }

/* ---------- Footer: tabs + status ---------- */
.wb-footer { height: 36px; display: flex; align-items: stretch; background: var(--paper-2); border-top: 1px solid var(--line-strong); }
.tabs { display: flex; align-items: stretch; gap: 2px; padding-left: 8px; overflow-x: auto; scrollbar-width: none; min-width: 0; }
.tab { display: flex; align-items: center; gap: 8px; padding: 0 14px; margin-top: -1px; border: 1px solid transparent; border-top: 0; border-radius: 0 0 6px 6px; background: transparent; color: var(--ink-2); font-weight: 500; font-size: 12.5px; cursor: pointer; white-space: nowrap; transition: background-color .12s, color .12s; }
.tab:hover { background: rgba(255, 255, 255, .6); }
.tab[aria-selected='true'] { background: var(--surface); color: var(--ink); font-weight: 600; border-color: var(--line-strong); box-shadow: inset 0 2px 0 var(--accent); }
.tab-count { font: 500 10.5px var(--font-mono); color: var(--ink-3); }
.statusbar { margin-left: auto; display: flex; align-items: center; gap: 16px; padding: 0 14px; font-size: 12px; color: var(--ink-2); white-space: nowrap; }
.statusbar b { font-weight: 600; color: var(--ink); }
.ready { display: inline-flex; align-items: center; gap: 6px; }
.ready-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--ok); }

/* ---------- Chips & pills ---------- */
.chip { display: inline-flex; align-items: center; gap: 6px; height: 20px; padding: 0 8px; border-radius: 999px; font-size: 11.5px; font-weight: 600; line-height: 1; white-space: nowrap; }
.chip::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.chip-active { color: var(--ok); background: var(--ok-soft); }
.chip-onboarding, .chip-pending, .chip-provisioning, .chip-revoking { color: var(--info); background: var(--info-soft); }
.chip-offer_accepted { color: var(--neutral); background: var(--neutral-soft); }
.chip-offboarding, .chip-manual_pending, .chip-manual_revoke_pending { color: var(--warn); background: var(--warn-soft); }
.chip-failed, .chip-revoke_failed { color: var(--danger); background: var(--danger-soft); }
.chip-exited, .chip-revoked { color: var(--ink-3); background: var(--paper-2); }
.pill { display: inline-flex; align-items: center; gap: 2px; height: 18px; padding: 0 6px; border-radius: 999px; font: 600 11px var(--font-mono); }
.pill-warn { color: var(--warn); background: var(--warn-soft); }
.pill-danger { color: var(--danger); background: var(--danger-soft); }
.access-cell { display: inline-flex; align-items: center; gap: 8px; }
.access-cell .bar { width: 46px; height: 6px; border-radius: 3px; background: var(--paper-2); overflow: hidden; }
.access-cell .bar > span { display: block; height: 100%; background: var(--ok); }
.gcell { display: inline-flex; align-items: center; justify-content: center; min-width: 22px; height: 22px; border-radius: 6px; }
.gcell-none { color: var(--line-strong); font-size: 16px; }
.gcell-active { color: var(--ok); background: var(--ok-soft); }
.gcell-pending { color: var(--info); background: var(--info-soft); }
.gcell-provisioning, .gcell-revoking { color: var(--info); background: var(--info-soft); }
.gcell-provisioning svg, .gcell-revoking svg { animation: spin 1s linear infinite; }
.gcell-manual_pending, .gcell-manual_revoke_pending { color: var(--warn); background: var(--warn-soft); }
.gcell-failed, .gcell-revoke_failed { color: var(--danger); background: var(--danger-soft); }
.gcell-revoked { color: var(--ink-3); background: var(--paper-2); }
.sheet-legend .gcell { padding: 0 6px; width: auto; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ---------- Inspector ---------- */
.wb-inspector { width: 420px; flex-shrink: 0; display: flex; flex-direction: column; background: var(--surface); border: 1px solid var(--line-strong); border-radius: var(--radius-l); box-shadow: var(--shadow-sheet); overflow: hidden; }
.insp-head { display: flex; align-items: center; gap: 12px; padding: 14px 14px 14px 18px; border-bottom: 1px solid var(--line); }
.avatar { width: 40px; height: 40px; flex-shrink: 0; display: grid; place-items: center; border-radius: 50%; border: 1.5px solid var(--ink); font: 600 13px var(--font-mono); background: var(--paper); }
.avatar-app { border-radius: 10px; }
.insp-title { flex: 1; min-width: 0; }
.insp-title h2 { font-size: 17px; font-weight: 650; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.insp-title p { font-size: 12.5px; color: var(--ink-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.insp-body { flex: 1; overflow-y: auto; }
.insp-section { padding: 16px 18px; border-top: 1px dashed var(--line-strong); }
.insp-section:first-child { border-top: 0; }
.insp-h { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--ink-3); }
.insp-text { font-size: 13px; color: var(--ink-2); }
.insp-text + .insp-text { margin-top: 8px; }
.insp-hint { margin-top: 10px; font-size: 12px; color: var(--ink-3); }
.insp-dl { display: grid; gap: 6px; margin: 0; }
.insp-dl > div { display: grid; grid-template-columns: 120px 1fr; gap: 10px; }
.insp-dl dt { color: var(--ink-3); }
.insp-dl dd { margin: 0; min-width: 0; overflow-wrap: anywhere; }
.insp-empty { flex: 1; display: grid; place-items: center; align-content: center; gap: 10px; padding: 32px; text-align: center; color: var(--ink-3); }
.insp-skeleton { margin: 18px; height: 160px; border-radius: 8px; background: linear-gradient(90deg, var(--paper) 0%, var(--paper-2) 50%, var(--paper) 100%); background-size: 200% 100%; animation: shimmer 1.2s linear infinite; }
@keyframes shimmer { to { background-position: -200% 0; } }
.insp-foot { display: flex; gap: 10px; padding: 12px 18px; border-top: 1px solid var(--line); background: var(--surface); }
.insp-foot .btn { flex: 1; }
.grant-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.grant-row { display: grid; grid-template-columns: 1fr auto; gap: 6px 10px; align-items: center; padding: 10px 12px; border: 1px solid var(--line); border-radius: var(--radius-m); }
.grant-main { min-width: 0; display: grid; }
.grant-name { font-weight: 600; }
.grant-error { font-size: 11.5px; color: var(--danger); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.grant-actions { grid-column: 1 / -1; display: flex; gap: 6px; flex-wrap: wrap; }
.grant-actions:empty { display: none; }
.secret-box { grid-column: 1 / -1; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 8px 10px; border: 1px dashed var(--warn); border-radius: 6px; background: var(--warn-soft); }
.secret-box code { font: 600 13px var(--font-mono); user-select: all; }
.secret-box .muted { font-size: 11.5px; width: 100%; }
.timeline { list-style: none; margin: 0; padding: 0 0 0 6px; border-left: 2px solid var(--line); display: grid; gap: 12px; }
.timeline li { position: relative; display: flex; gap: 10px; padding-left: 12px; }
.tl-dot { position: absolute; left: -12px; top: 5px; width: 10px; height: 10px; border-radius: 50%; background: var(--surface); border: 2px solid var(--ink-3); }
.tl-dot[data-kind='onboarding'], .tl-dot[data-kind='employee'] { border-color: var(--accent); }
.tl-dot[data-kind='offboarding'] { border-color: var(--warn); }
.tl-dot[data-kind='grant'] { border-color: var(--ok); }
.timeline p { font-size: 12.5px; }
.timeline time { font-size: 11px; }
.code-input { width: 100%; min-height: 160px; resize: vertical; padding: 10px; border: 1px solid var(--line-strong); border-radius: var(--radius-s); background: var(--paper); font: 12px/1.5 var(--font-mono); }
.row-gap { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }

/* ---------- Dialogs ---------- */
.overlay { position: fixed; inset: 0; z-index: 50; display: grid; place-items: center; padding: 16px; background: rgba(29, 33, 39, .28); }
.dialog { width: min(580px, 100%); max-height: 88vh; display: flex; flex-direction: column; background: var(--surface); border: 1px solid var(--line-strong); border-radius: 14px; box-shadow: var(--shadow-pop); overflow: hidden; }
.dialog-head { padding: 18px 20px 12px; border-bottom: 1px solid var(--line); }
.dialog-head h2 { font-size: 18px; font-weight: 650; margin-bottom: 4px; }
.dialog-body { padding: 16px 20px; overflow-y: auto; display: grid; gap: 14px; }
.dialog-foot { display: flex; justify-content: flex-end; gap: 10px; padding: 12px 20px; border-top: 1px solid var(--line); background: var(--paper); }
.app-group { border: 1px solid var(--line); border-radius: var(--radius-m); padding: 6px 12px 10px; margin: 0; }
.app-group legend { padding: 0 6px; font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--ink-3); }
.app-option { display: grid; grid-template-columns: auto 1fr auto; grid-template-areas: 'check name status' 'check meta meta'; column-gap: 10px; align-items: center; padding: 8px 2px; border-bottom: 1px dashed var(--line); cursor: pointer; }
.app-option:last-child { border-bottom: 0; }
.app-option input { grid-area: check; width: 16px; height: 16px; accent-color: var(--accent); }
.app-option-name { grid-area: name; font-weight: 600; }
.app-option-type, .app-option-reason { grid-area: meta; font-size: 12px; color: var(--ink-3); }
.app-option-type::after { content: ' ·'; }
.app-option-reason { padding-left: 92px; }
.app-option .chip { grid-area: status; }
.field { display: grid; gap: 4px; }
.field > span { font-size: 12px; font-weight: 600; color: var(--ink-2); }
.field input, .field select, .money-input select, .money-input input { height: 34px; padding: 0 10px; border: 1px solid var(--line-strong); border-radius: var(--radius-s); background: var(--surface); outline: 0; }
.field input:focus, .field select:focus, .money-input input:focus, .money-input select:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
.money-input { display: flex; gap: 6px; }
.money-input select { width: 84px; }
.money-input input { flex: 1; min-width: 0; font-family: var(--font-mono); }
.form-grid { grid-template-columns: 1fr 1fr; }
.span-2 { grid-column: 1 / -1; }
.ack { display: flex; align-items: center; gap: 8px; font-weight: 500; }
.ack input { width: 16px; height: 16px; accent-color: var(--danger); }
.banner { padding: 10px 12px; border-radius: var(--radius-s); font-size: 12.5px; }
.banner-danger { color: var(--danger); background: var(--danger-soft); }
.banner-warn { color: var(--warn); background: var(--warn-soft); }

/* ---------- Unlock ---------- */
.unlock { min-height: 100dvh; display: grid; place-items: center; padding: 16px; background-color: var(--paper); background-image: radial-gradient(var(--dot) 1px, transparent 1.2px); background-size: 18px 18px; }
.unlock-card { width: min(380px, 100%); display: grid; gap: 12px; justify-items: start; padding: 28px; background: var(--surface); border: 1px solid var(--line-strong); border-radius: 14px; box-shadow: var(--shadow-sheet); }
.unlock-card h1 { font-size: 20px; font-weight: 650; margin-top: 6px; }
.unlock-card input { width: 100%; height: 38px; padding: 0 12px; border: 1px solid var(--line-strong); border-radius: var(--radius-s); outline: 0; font-family: var(--font-mono); }
.unlock-card input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
.unlock-card .btn { width: 100%; }
.unlock-foot { font-size: 11.5px; color: var(--ink-3); }

/* ---------- Toasts ---------- */
.toasts { position: fixed; right: 16px; bottom: 52px; z-index: 60; display: grid; gap: 8px; max-width: min(380px, calc(100vw - 32px)); }
.toast { padding: 10px 14px; border-radius: 10px; background: var(--ink); color: #fff; font-size: 12.5px; box-shadow: var(--shadow-pop); animation: toast-in .15s ease-out; }
.toast-error { background: var(--danger); }
.toast-success { background: #16603c; }
@keyframes toast-in { from { opacity: 0; transform: translateY(6px); } }

/* ---------- Responsive ---------- */
@media (max-width: 1100px) { .ribbon-context { display: none; } }
@media (max-width: 900px) {
  .formula { display: none; }
  .ribbon-label { display: none; }
  .hide-sm { display: none !important; }
  .wb-main { padding: 8px; }
  .wb-inspector { position: fixed; left: 0; right: 0; bottom: 0; width: auto; height: 72vh; z-index: 40; border-radius: 16px 16px 0 0; box-shadow: var(--shadow-pop); }
  .ribbon-search { width: 160px; }
  .form-grid { grid-template-columns: 1fr; }
  .app-option-reason { padding-left: 0; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

#### `src/styles/grid.css`
```css
/* AG Grid overrides for the workbook look (theme params cover the rest). */
.wb-grid .ag-header-group-cell.wb-letter { background: var(--paper-2); }
.wb-grid .wb-letter .ag-header-group-cell-label { justify-content: center; font: 500 10.5px var(--font-mono); color: var(--ink-3); letter-spacing: .04em; }
.wb-grid .wb-rownum { background: var(--paper-2); color: var(--ink-3); font: 11px var(--font-mono); text-align: right; padding-right: 10px; }
.wb-grid .wb-rownum-h { background: var(--paper-2); }
.wb-grid .ag-cell.num { text-align: right; justify-content: flex-end; }
.wb-grid .ag-cell.center { display: flex; align-items: center; justify-content: center; }
.wb-grid .ag-cell.mono { font-family: var(--font-mono); font-size: 12px; font-variant-numeric: tabular-nums; }
.wb-grid .ag-cell.muted { color: var(--ink-3); }
.wb-grid .ag-cell.strong { font-weight: 600; }
.wb-grid .ag-cell-focus:not(.ag-cell-inline-editing) { outline: 2px solid var(--accent) !important; outline-offset: -2px; border-color: transparent !important; }
.wb-grid .ag-cell.wb-missing { background: repeating-linear-gradient(-45deg, var(--warn-soft) 0 6px, #fff 6px 12px); }
.wb-grid .ag-cell .chip, .wb-grid .ag-cell .btn { vertical-align: middle; }
.wb-empty { font-size: 13px; color: var(--ink-3); padding: 24px; max-width: 420px; text-align: center; line-height: 1.5; }
```

### 10.4 Acceptance (T4)
- `npm run typecheck -w frontend` → passes.
- `npm run build -w frontend` → produces `frontend/dist/index.html`.
- `npx vite preview` is NOT required (no backend locally). Visual QA happens in T7 against the deployed site.

---

## 11. T5 — Design doc: "People Stack: access provisioning + HRIS design" (Sonnet, with WebSearch / web-fetch)

**File owned:** `docs/people-stack-design.md`. **Audience:** the boss (founder/leadership; technical enough, short on time).
Plain language, 4–6 pages, tables over prose, no marketing tone. Every external fact gets a source URL + "checked 2026-10-23".
Anything not verified is labelled **Unverified**.

### 11.1 Research to do (WebSearch `mode: "standard"` first; `extended` only if thin)
1. Google Workspace **automated user provisioning** to third-party SAML apps: which apps are supported (Slack? Notion? Zoom? Atlassian? GitHub?),
   which Workspace editions include it, and SAML app access by group/OU. Official: support.google.com/a.
2. Slack: which plan includes the **SCIM API** (expected: Business+ and Enterprise Grid) and the SCIM v2 base URL.
3. Notion: which plan includes **SCIM** (expected: Enterprise) and SAML SSO.
4. JumpCloud: SSO + SCIM "Identity Management" connectors (Slack, Notion, Google Workspace, Atlassian, GitHub, Zoom), user groups → app
   bindings, Google Workspace integration direction, HRIS integrations, and **which package includes SCIM provisioning**.
5. JumpCloud API: confirm `POST /api/systemusers`, `PUT /api/systemusers/{id}` with `suspended`, `GET /api/systemusers?filter=email:$eq:…`,
   `POST /api/v2/usergroups/{id}/members` `{op:"add",type:"user",id}`, header `x-api-key`. If any differ, write the correct ones in the doc's
   "Open items" and tell the orchestrator (so §8.6 can be patched).

Facts already verified (2026-10-23, use them; cite https://jumpcloud.com/pricing and Google/Ashby docs):
- JumpCloud pricing per user/month: Device Management $9 annual / $11 monthly; **SSO package $11 / $13**; Device Identity Management
  $13 / $15; à la carte Single Sign-On $3 / $4 and User Lifecycle Management $3 / $4; Platform tiers "Contact sales". Suspended users are
  billed as normal users.
- Google Admin SDK (Directory API) supports create user, suspend (`suspended: true`), `signOut`, delete, group member add/remove; Data
  Transfer API moves Drive ownership (Drive app id 55656082996). Auth: service account + domain-wide delegation impersonating a super admin.
- Ashby: `candidateHire` webhook includes the application and the most recent accepted offer (`offer.latestVersion.startDate`, `salary`);
  signed with HMAC-SHA256 in `Ashby-Signature: sha256=<hex>`; retries up to 10× with backoff; `webhookActionId` stable across retries.

### 11.2 Document outline (write exactly these sections)
1. **TL;DR** (5 bullets): what's built, the recommendation, cost, what we need from the boss, next step.
2. **Goals / non-goals.** Goals: single source of truth for people; hire → record automatically; one-click onboard/offboard with zero
   ambiguity; audit trail. Non-goals this round: payroll sync, performance/leave modules, SSO for the HRIS itself (next round).
3. **Current stack.** Ashby (ATS), RazorpayX (payroll), Google Workspace (email/identity), Slack, Notion, ~10 more apps (sheet pending).
4. **Options for access provisioning.**
   - A. *Google Workspace native* (groups, OUs, SAML apps by group, automated provisioning where supported, Admin SDK).
   - B. *JumpCloud* (directory + SSO + SCIM connectors + device management; can sit on top of Google Workspace).
   - C. *Rippling*: ruled out by leadership (one line).
5. **Comparison table** with rows: identity source of truth · SSO coverage · automatic account creation in SaaS apps (SCIM) · offboarding
   completeness · device/laptop management · cost per user/month · setup effort · lock-in · API for our HRIS to drive it · audit.
6. **Recommendation.**
   - *Now:* Google Workspace stays the identity provider; **our HRIS is the orchestrator** (already built). Google account + Google groups
     are automated; apps with SCIM on our plan tiers use the SCIM connector; everything else becomes a tracked checklist task, so
     nothing is forgotten even when it is manual.
   - *Decision gate (after the app sheet arrives):* fill the automation matrix (§8 of the doc). Adopt JumpCloud if **≥ 5 apps** need
     provisioning that neither Google nor a direct SCIM connector can do, **or** laptop/device management becomes a requirement.
     The HRIS already has a JumpCloud connector, so switching is a configuration change, not a rebuild.
   - Cost formula: `headcount × $11/month` (JumpCloud SSO package, annual) vs `$0` incremental for Google-native.
7. **System design** (what was built): the architecture diagram from plan §3 (copy it), data model table (§3.1), the three flows as
   numbered steps (Hire → webhook → record; Onboard click → workflow; Offboard click → workflow), failure handling (retries, failed
   grants with Retry button, manual tasks), audit log.
8. **App automation matrix** (template + pre-filled known rows):
   | App | Sign-in (Google SSO / SAML / password) | Provisioning (Admin SDK / SCIM / API / none) | Plan tier needed | HRIS connector | Owner | Notes |
   Pre-fill: Google Workspace (Admin SDK, `google_workspace`), Google Groups (Admin SDK, `google_group`), Slack (SCIM if Business+, else
   `manual`), Notion (SCIM if Enterprise, else `manual`), RazorpayX Payroll (`manual` for now), GitHub, Figma (`manual` unless org SCIM).
   Leave blank rows for the boss's sheet.
9. **Security & data.** Region ap-southeast-2 (note: if Indian data-residency/DPDP considerations apply, ap-south-1 Mumbai is an option —
   open question); encryption at rest; secrets only in Secrets Manager; webhook HMAC verification; temporary shared key → company SSO
   next; least-privilege IAM; point-in-time recovery backups; PII kept out of logs.
10. **Rollout plan.** This week: MVP live, Ashby webhook connected when Ashby goes live. Next week: Google service account + domain-wide
    delegation tested on a test OU; app sheet → matrix; SSO for the HRIS. Week after: RazorpayX sync exploration; JumpCloud decision.
11. **Open questions for the boss.** Google Workspace edition and headcount; app list with plan tiers (the sheet); trigger on *offer
    accepted* vs *moved to Hired* in Ashby; who are HRIS admins and who may see salaries; data-residency region; laptops/device
    management needed?; day-1 documents and emails to send; retention period before deleting suspended Google accounts.
12. **Running cost.** AWS: roughly under US$10/month at < 500 people (Lambda, DynamoDB on-demand, Step Functions, CloudFront, 2 secrets at
    $0.40 each). Google: no added cost. JumpCloud: only if adopted.

### 11.3 Acceptance (T5)
- File exists, has all 12 sections, every external claim has a URL, unverified items are labelled, and the JumpCloud API check result
  is reported in the final message.

---

## 12. T6a — Integration check (orchestrator)

Run from the project root, in order; on any failure dispatch a Sonnet fixer with: the exact command, the full error output, and the owning
task's file list (fixer edits only those files), then re-run.
1. `npm run typecheck`
2. `npm test`
3. `npm run build -w frontend`
4. `npm run synth -w infra`
5. Commit: `git add -A; git commit -m "feat: people stack HRIS MVP (backend, infra, frontend, docs)"` + Co-Authored-By trailer.

---

## 13. T6b — Deploy + smoke tests (orchestrator; requires T0 login)

All in PowerShell from the project root. `$aws = "C:\Program Files\Amazon\AWSCLIV2\aws.exe"`.
If any `aws` call returns an expired-credentials error, ask the user to run `! "C:\Program Files\Amazon\AWSCLIV2\aws.exe" login --profile default`.

1. **Integrations secret** (once):
   ```powershell
   New-Item -ItemType Directory -Force .secrets | Out-Null
   node -e "const fs=require('fs');const c=require('crypto');fs.writeFileSync('.secrets/integrations.json',JSON.stringify({ashbyWebhookSecret:c.randomBytes(32).toString('hex'),ashbyApiKey:'',googleDomain:'',googleAdminSubject:'',googleServiceAccount:null,jumpcloudApiKey:'',scimTokens:{}},null,2))"
   & $aws secretsmanager create-secret --name people-stack/integrations --secret-string file://.secrets/integrations.json --region ap-southeast-2 --profile default
   ```
   If it already exists: `put-secret-value --secret-id people-stack/integrations --secret-string file://.secrets/integrations.json`.
   (`.secrets/` is gitignored. Never print the file contents.)
2. **Bootstrap CDK** (once per account/region): `powershell -ExecutionPolicy Bypass -File scripts/with-aws.ps1 npm run bootstrap -w infra`
3. **Deploy**: `npm run build -w frontend`, then
   `powershell -ExecutionPolicy Bypass -File scripts/with-aws.ps1 npm run deploy -w infra` — run with `run_in_background: true`
   (CloudFront creation takes ~5–15 min) and wait for the completion notification. Outputs land in `infra/cdk-outputs.json`.
4. **Read outputs + key** (keep the key in a variable; do not echo it):
   ```powershell
   $out = (Get-Content infra/cdk-outputs.json -Raw | ConvertFrom-Json).PeopleStack
   $site = $out.SiteUrl
   $key = & $aws secretsmanager get-secret-value --secret-id people-stack/admin-api-key --query SecretString --output text --region ap-southeast-2 --profile default
   ```
5. **Smoke tests** (each must match the expectation):
   | Command | Expect |
   |---|---|
   | `Invoke-RestMethod "$site/api/health"` | `data.ok = True` |
   | `try { Invoke-WebRequest "$site/api/people" -UseBasicParsing } catch { $_.Exception.Response.StatusCode.value__ }` | `401` |
   | `Invoke-RestMethod "$site/api/people" -Headers @{ 'x-hris-key' = $key }` | `data` = empty array |
   | `Invoke-WebRequest "$site/" -UseBasicParsing` then `"$site/some/deep/link"` | both 200, HTML contains `People Workbook` |
6. **Seed**: `$env:SITE_URL=$site; $env:HRIS_KEY=$key; npm run seed -- --demo` → 8 apps + 4 "Demo …" people.
7. **Ashby webhook tests**:
   ```powershell
   $env:WEBHOOK_URL = $out.AshbyWebhookUrl
   $env:ASHBY_WEBHOOK_SECRET = (Get-Content .secrets/integrations.json -Raw | ConvertFrom-Json).ashbyWebhookSecret
   npm run ashby:sample -- --ping            # 200 {"ok":true}
   npm run ashby:sample                       # 200 {"result":"created"}  → "Asha Rao" exists, status offer_accepted
   npm run ashby:sample                       # 200 {"duplicate":true}
   npm run ashby:sample -- --new-id           # 200 {"result":"updated"}   (same application, no second person)
   npm run ashby:sample -- --bad-signature    # 401
   ```
8. **Workflow end-to-end** (with Google NOT yet connected — expected outcomes in brackets):
   - Find "Demo Kapoor" id via `GET /api/people`. `PATCH /api/people/{id}` body `{"workEmail":"demo.kapoor@example.com"}` [200].
   - `GET /api/people/{id}/preview?operation=onboard` [Google Workspace account, Slack, Notion, RazorpayX, GitHub pre-selected].
   - `POST /api/people/{id}/onboard` with those appIds [202, executionArn].
   - Wait ~20 s; `GET /api/people/{id}` [status `active`; Google grant `failed` with "Google Workspace is not connected…";
     Slack/Notion/RazorpayX/GitHub `manual_pending`; audit has `onboarding.started` and `onboarding.completed`].
   - `POST /api/people/{id}/grants/{slackAppId}/complete` [Slack → `active`].
   - `POST /api/people/{id}/offboard` with all live appIds [202] → wait → [status `exited`; manual apps `manual_revoke_pending`;
     Google `revoke_failed` (not connected)].
   - `& $aws stepfunctions list-executions --state-machine-arn $out.StateMachineArn --max-results 5 --region ap-southeast-2` [both `SUCCEEDED`].
9. **Write `docs/runbook.md`** containing: site URL, how to get the access key (command in step 4), redeploy command, how to view logs
   (CloudWatch log groups `PeopleStack-ApiFn…`, `…AshbyWebhookFn…`, `…RunnerFn…`; Step Functions console → `people-stack-access`), and
   these setup procedures:
   - **Ashby webhook:** in Ashby admin → API/Webhooks → create webhook, type *Candidate Hired* (`candidateHire`), URL = `AshbyWebhookUrl`,
     secret token = `ashbyWebhookSecret` from the integrations secret; Ashby sends a ping that must succeed (else the webhook is created
     disabled). Optional: add an Ashby API key (`ashbyApiKey`, read permissions for candidates/offers/jobs/organization) to resolve
     department names and support `offerUpdate`. (Exact Ashby menu labels: verify in the Ashby UI.)
   - **Google Workspace:** create a Google Cloud project → enable **Admin SDK API** → create a service account → create a JSON key →
     Admin console → Security → Access and data control → API controls → Manage Domain Wide Delegation → Add new → the service account's
     **numeric client ID** + scopes (comma-separated) `https://www.googleapis.com/auth/admin.directory.user,https://www.googleapis.com/auth/admin.directory.user.security,https://www.googleapis.com/auth/admin.directory.group.member,https://www.googleapis.com/auth/admin.datatransfer`
     → set `googleServiceAccount` (paste the whole key JSON object), `googleAdminSubject` (a super-admin email) and `googleDomain` in the
     integrations secret → `put-secret-value`. Delegation can take up to 24 h to propagate. Test first with `orgUnitPath` set to a test OU.
   - **SCIM apps:** set the app's connector to `scim`, config `{baseUrl, tokenKey, deprovisionMode}`, put the token under
     `scimTokens.<tokenKey>` in the integrations secret.
   - **JumpCloud (if adopted):** `jumpcloudApiKey` in the secret, enable the JumpCloud app, set `userGroupIds`.
   - **Rotate the access key:** `aws secretsmanager put-secret-value --secret-id people-stack/admin-api-key --secret-string <new>`
     (Lambdas pick it up within 5 minutes; users re-enter it).
   - Secrets are cached for 5 minutes in Lambdas: after editing a secret, wait 5 minutes or redeploy.
10. Commit: `git add -A; git commit -m "chore: deploy runbook"` + trailer.

---

## 14. T7 — Browser QA (orchestrator with Claude in Chrome) and T8 — publish

### 14.1 T7 steps
1. ToolSearch once: `select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__find,mcp__claude-in-chrome__form_input,mcp__claude-in-chrome__read_console_messages,mcp__claude-in-chrome__resize_window,mcp__claude-in-chrome__gif_creator`.
2. `tabs_context_mcp` → `tabs_create_mcp` → navigate to `$site`. Unlock with the key (type it; never echo it in chat).
3. Checklist (screenshot each; record a GIF named `people_workbook_onboarding.gif` for items 6–8):
   1. Shell renders: title bar, ribbon, formula bar, dotted whiteboard, sheet card, tabs with counts, status bar.
   2. People sheet: column letters row (A, B, C…), row numbers, checkboxes; 5 rows (4 demo + Asha Rao + Demo Kapoor exited = check counts).
   3. Click a cell → formula bar shows address (e.g. `D3`) and value; edit Title in-cell (Enter) → persists after Refresh; edit via
      formula bar (Enter) → persists; invalid date "31/12/2026" in Start date → error toast, value unchanged.
   4. Select 2 rows → status bar shows `Selected 2` and Σ salary in ₹ with Indian grouping.
   5. Ctrl+F focuses filter; typing "Demo" filters rows; Alt+2 switches to Onboarding.
   6. Onboarding sheet → "Onboard…" on Demo Nair → dialog lists apps grouped, defaults ticked (Figma ticked for Design) → Grant →
      toast → inspector shows spinners then final statuses within ~20 s.
   7. Inspector: Mark done on a manual task → turns Active; Retry on the failed Google grant → fails again with the clear message.
   8. Offboard Demo Nair → dialog requires the acknowledgement checkbox → Revoke → status becomes Exited; Offboarding sheet lists them.
   9. Access sheet: matrix icons + legend; "Show exited" toggles rows.
   10. Apps sheet: toggle Enabled checkbox persists; edit Instructions in the popup editor; inspector JSON config save with invalid JSON
       shows an inline error; Insert template works.
   11. Audit log lists events newest first.
   12. `resize_window` to 390×844: no horizontal page scroll; ribbon icons only; inspector opens as bottom sheet; tabs scroll.
   13. `read_console_messages` with pattern `error|AG Grid|Warning` → no errors (AG Grid license/watermark warnings must not appear —
       we use Community only).
4. Collect defects as a numbered list with screenshots → dispatch ONE Sonnet fixer (frontend files only) → `npm run build -w frontend`
   → redeploy (§13 step 3) → re-check only the failed items. Max 2 fix rounds; then report remaining issues to the user.

### 14.2 T8 — publish + report
1. Publish the design doc for the boss: call `Artifact` with `action: "quickstart"`, `intent: "document"`, and follow its instructions
   (it decides between a Docs-type artifact and an HTML page). Content = `docs/people-stack-design.md`. Title: "People Stack Design".
2. Optionally save a project memory (type `project`) summarising: people stack goal, Ashby/RazorpayX/Google context, AWS region, where
   the plan and runbook live — only facts not derivable from the repo.
3. Final message to the user: site URL; how to fetch the access key (command, not the key); webhook URL for Ashby; what works now vs.
   what needs Google credentials / the app sheet; the design-doc link; open questions for the boss (from §11.2 item 11); the GIF path.

---

## 15. Troubleshooting (apply the matching fix; do not improvise)
| Symptom | Fix |
|---|---|
| `aws` not recognized | Call `C:\Program Files\Amazon\AWSCLIV2\aws.exe` by full path. |
| CDK: "Unable to resolve AWS account" / "Need to perform AWS calls … but no credentials" | Run CDK via `scripts/with-aws.ps1`. If export fails: `aws login --profile default`. |
| `export-credentials` unsupported for the login session | Ask the user to run `! "C:\Program Files\Amazon\AWSCLIV2\aws.exe" configure export-credentials --profile default --format powershell` to see the error; fallback: `aws configure sso`/access keys are NOT to be requested — stop and ask the user. |
| NodejsFunction tries to use Docker | Ensure `npx esbuild --version` works from the repo root; `forceDockerBundling: false` is set. Re-run `npm install` at the root if esbuild is missing. |
| esbuild "Could not resolve 'google-auth-library'" during synth | `npm ls google-auth-library -w backend`; if missing run `npm install` at root (orchestrator only). |
| Lambda runtime error "Cannot find module '@aws-sdk/…'" | Must not happen on nodejs24.x; if it does, remove `externalModules` from bundling (bundles the SDK). |
| Step Functions does not retry on `RetryableError` | Check `keepNames: true` in bundling and that the error class sets `this.name = 'RetryableError'`. |
| `cdk deploy` fails: secret `people-stack/admin-api-key` "scheduled for deletion" | `aws secretsmanager restore-secret --secret-id people-stack/admin-api-key` then redeploy. |
| `cdk deploy` fails: table `people-stack` already exists | A previous stack was deleted with RETAIN. Ask the user: import it or delete it manually (deletion protection must be turned off first). |
| CloudFront returns 403 for `/api/...` | Confirm the behavior `/api/*` exists and the origin request policy is `ALL_VIEWER_EXCEPT_HOST_HEADER` (Host must not be forwarded to API Gateway). |
| Deep links return S3 `AccessDenied` XML | The SpaRewrite CloudFront Function is not associated with the default behavior; redeploy. |
| Webhook returns 503 | `ashbyWebhookSecret` missing in the integrations secret, or the Lambda cached an old value (wait 5 min). |
| Webhook returns 401 for real Ashby calls but sample works | Secret in Ashby ≠ secret in AWS; re-copy. Body must be hashed raw — do not change `rawBody()`. |
| TS error on an AG Grid theme param | Delete that one param line in `src/grid/theme.ts`. |
| AG Grid error "#200 … module not registered" | `ModuleRegistry.registerModules([AllCommunityModule])` must run in `main.tsx` before render. |
| AG Grid warns about a grid option name | Remove that single prop from `WorkbookGrid` (only for: `enterNavigatesVerticallyAfterEdit`, `suppressDragLeaveHidesColumns`, `animateRows`, `tooltipShowDelay`). |
| `lucide-react` has no exported member `X` (icon renamed) | Search `node_modules/lucide-react/dist/lucide-react.d.ts` for the closest name (e.g. `LoaderCircle`↔`Loader2`, `TriangleAlert`↔`AlertTriangle`) and use it; change nothing else. |
| Grid flickers / infinite re-render | A `columns` array or `moneyOf` is created inline; memoize per §10.2 critical rule. |
| Vitest: "Cannot access … before initialization" in a mock | Move shared mock fns into `vi.hoisted(...)`. |
| Vitest: call counts leak between tests | Ensure `clearMocks: true` in `backend/vitest.config.ts`. |
| zod v4 type error on `z.enum(CONNECTOR_TYPES …)` | Replace with `z.enum(['google_workspace','google_group','scim','jumpcloud','manual'])`. |
| PowerShell blocks `scripts/with-aws.ps1` | Always invoke with `powershell -ExecutionPolicy Bypass -File …`. |
| Google API 403 `unauthorized_client` | Domain-wide delegation uses the numeric client ID and the exact scopes; can take up to 24 h. |
| Google create user 400 "Invalid Input: primary_user_email" | Work email domain is not a verified domain of the Workspace; fix `googleDomain`/work email. |

---

## 16. Out of scope this round (backlog, in priority order)
1. Real authentication: Cognito user pool federated with Google Workspace (SAML/OIDC), roles (HR admin / viewer), salary visibility rules;
   remove the shared key.
2. RazorpayX payroll sync (create employee on onboard, deactivate on exit).
3. Welcome email + day-1 docs via Amazon SES (and "send documents" step in onboarding).
4. Scheduled jobs: auto-offboard on End date; delete suspended Google accounts after the retention period; daily access drift report.
5. Kanban "whiteboard" view (sticky-note cards by status) toggle on Onboarding/Offboarding sheets; dark mode.
6. Ashby enrichments: location/team mapping via `location.info`, custom fields, offer documents.

---

## 17. End-to-end verification (definition of done)
- `npm run typecheck` and `npm test` pass; `npm run synth` passes.
- Stack deployed in ap-southeast-2; smoke tests in §13 step 5 all match.
- Signed sample Ashby `candidateHire` creates exactly one person; duplicate and re-delivery do not create duplicates; bad signature → 401.
- One-click Onboard runs a Step Functions execution to `SUCCEEDED`, producing per-app grants (Google failed with a clear "not connected"
  message until credentials are added; manual apps become tasks); Offboard ends in `exited` with revocations/tasks recorded.
- UI QA checklist §14.1 passes on desktop and 390px width with no console errors.
- Design doc published (link shared); runbook committed; final report delivered to the user.
