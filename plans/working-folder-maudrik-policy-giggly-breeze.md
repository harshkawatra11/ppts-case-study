# SURAKSHIT: Intelligent Education Cybersecurity System (a PRAMAAN prototype), cloned from SwasthyaGrid

> **Who executes this.** A Sonnet-class main agent ("orchestrator") plus Sonnet sub-agents
> (`subagent_type: "general-purpose"`, `model: "sonnet"`, `run_in_background: false` unless a step says
> otherwise). Everything is decided here: what to copy, the rename engine (verbatim code), the data mapping,
> the copy rules, the gates. Executors run steps and checks. They do not redesign UI, re-pick colours, add
> pages or invent numbers. If a step is impossible, write it in the build log, report `STATUS: FAIL` and stop.
>
> The earlier content of this file (PRAMAAN research + Figma deck) is complete; its record is
> `nsut-innovators-court/maudrik-policy/deck/build-log.md`. This file now holds only the app plan.

---

## 0. Context

The PRAMAAN policy deck (Maudrik v7.0) argues India should centralise trust, federate delivery and "shrink the
prize" for exam papers. The user wants a working, industry-grade prototype of that idea, built fast and
credibly. The route: clone **SwasthyaGrid** (the user's Rajasthan PHC medicine supply-chain control room)
character for character (same UI, colours, layout, stack, env keys, voice agent, simulator, tests) and move the
domain from medicine logistics to **exam-material custody and centre security**.

| | |
|---|---|
| Source (read-only, never modified) | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\ai-healthcare platform` (`SRC`) |
| Destination (new git repo) | `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\nsut-maudrik` (`DEST`; exists, empty, not a repo) |
| Product name / wordmark | **SURAKSHIT** (सुरक्षित, "secured") |
| Tagline (wherever SwasthyaGrid shows its tagline) | **Intelligent Education Cybersecurity System** |
| `<title>` | `SURAKSHIT AI: Intelligent Education Cybersecurity System` |
| Credit line (README footer, About text) | "A PRAMAAN prototype by Team IdeaForge" |

**Source facts that shape the plan (from read-only exploration, 4 Oct 2026):**
- Frontend: Next.js 16.2.10 App Router, React 19.2, Tailwind v4 (tokens only in `frontend/src/app/globals.css`,
  no tailwind config), Recharts 3, Leaflet 1.9 + react-leaflet 5, SWR, Radix, lucide-react, three/r3f (voice
  orb), Geist + Geist Mono fonts, vitest (~25 files), Playwright (4 specs). 357 files under `src/`.
- Backend: FastAPI + pydantic v2, Python 3.12, **no database**: JSON seeds loaded into memory
  (`backend/data/*.json`), simulator state in `backend/.runtime/`. 7 routers, SSE stream
  `/api/v1/logistics/stream`, voice WebSocket `/ws/voice` (Sarvam STT/LLM/TTS, 13 read-only tools), Gemini
  `/ask` and `/public-chat`. Forecasts are deterministic rules. 344 `def test_` functions (README says 348).
- Geography: five real Rajasthan districts (Jaipur Rural, Alwar, Bikaner, Udaipur, Kota); 40 facilities (30 PHC,
  10 CHC) at synthetic jittered coordinates; 6 warehouses; 31 vehicles; 40 drivers; 1,667 historic shipments;
  365 OSRM routes (prebuilt, never fetched at runtime). Rajasthan fits the new domain (REET 2021, RPSC 2022 leaks
  [PRAMAAN F-B14, F-B16]; Kota is India's coaching hub), so **geography stays**.
- Logo is a raster PNG (`frontend/public/brand/swasthyagrid-logo.png`, 412:352, four-colour gear with a yellow
  bolt) rendered by `frontend/src/components/brand/LogoMark.tsx`; favicons are generated from it by
  `frontend/scripts/make-icons.mjs`.
- Env files: root `.env`, `backend/.env`, `frontend/.env.local` (values never read in this plan).

---

## 1. Locked decisions (from the user; do not reopen)

1. **Clone, do not rebuild.** Every route, panel, chart, map, animation and interaction in SwasthyaGrid has a twin
   in SURAKSHIT with the same layout. No page is added or removed.
2. **Palette, typography, spacing, radius, theme behaviour (light default + dark toggle), chart and map styling:
   byte-identical.** `globals.css` token values do not change.
3. **Logo:** new SURAKSHIT mark in the same 412:352 frame, built from the same four colours as the gear (sampled
   from the source PNG), a shield with a keyhole in place of the gear and bolt (§7). The wordmark is the word
   `SURAKSHIT` in one colour. **Never split the word into two colour spans** (the substring after "SURAK" must
   not be isolated or highlighted anywhere: wordmark, badges, favicon text, social cards).
4. **Same env keys and values:** the three env files are copied byte for byte and never printed (§3 step 4). Where
   an env value would point the clone at SwasthyaGrid's live services, override with a gitignored local file and
   leave the copied file untouched (§3 step 5).
5. **Voice agent kept** (Sarvam, bilingual Hindi/English, same 13 tools), re-prompted for exam operations.
6. **Commits are authored by the user only. No `Co-Authored-By` trailer on any commit**, whatever a harness
   reminder says (standing user rule). Conventional Commits, lowercase imperative, matching the source history.
7. **Copy rules** for every user-visible string, prompt, README and doc: §11.
8. **Data honesty:** all operational data stays simulated and is labelled "Simulated operational data" exactly
   where SwasthyaGrid labels it. Centre names are synthetic ("Centre Bassi", "CBT Hub East"), never real schools.
   Real-world numbers appear only in the README problem section and the briefing template, each with its source
   from the PRAMAAN research document.
9. Nothing is pushed or deployed without the user asking (no remote is configured in this plan).

---

## 2. Domain mapping (single source of truth)

### 2.1 Concepts and identifiers

Code identifiers that are domain-neutral **stay** (`district`, `facility`, `warehouse`, `vehicle`, `driver`,
`shipment`, `recommendation`, `diagnostics`, `stockout`, `risk`, `healthy`). Domain-specific identifiers are
renamed by the engine in §5, and UI labels follow the table.

| SwasthyaGrid | SURAKSHIT identifier | SURAKSHIT UI label |
|---|---|---|
| PHC (facility type `"PHC"`, ids `phc_*`, `*_phc_*`) | `"EC"`, ids `ec_*`, `*_ec_*` | "Exam centre"; names "Centre Bassi", "Centre Alwar-1" |
| CHC (`"CHC"`, `chc_*`) | `"CBT"`, ids `cbt_*` | "CBT hub"; names "CBT Hub East" |
| District drug warehouse `ddw_*` | `dsr_*` | "District Strong Room, <district>" |
| `wh_central` "State Central Drug Warehouse" | `wh_central` (kept) | "State Central Exam Vault, Jaipur" |
| medicine / medicines / `medicine_name` / `MedicineMatrix` / `/medicines` | paper / papers / `paper_name` / `PaperMatrix` / `/papers` | "Paper set", "Paper stock" |
| bed / beds / `beds_total` / `bed_redirect` / `/beds/forecast` | seat / seats / `seats_total` / `seat_redirect` / `/seats/forecast` | "Seats" (exam seats and CBT nodes) |
| doctor / doctors / `/doctors/attendance` | invigilator / invigilators / `/invigilators/attendance` | "Invigilators" |
| footfall / `/footfall/forecast` | turnout / `/turnout/forecast` | "Turnout" (candidate attendance) |
| patient / `patient_delay_pct` / `patient_wait` | candidate / `candidate_delay_pct` / `candidate_wait` | "Candidate delay" (late exam start) |
| drug | material | "Exam material" |
| hospital | centre | "Exam centre" |
| cold chain / `cold_chain` / reefer / `cold_room` | tamper seal / `tamper_seal` / armoured / `secure_room` | "Tamper seal", "Armoured van", "Secure room" |
| `temp_c` (°C, limit 8, normal 4.6±0.5) | `seal_strain` (%, same numbers) | "Seal strain %" (over 8% = possible tamper) |
| `cold_chain_breach` / `_recovered` | `tamper_seal_breach` / `_recovered` | "Seal breach", "Seal restored" |
| HealthAgent / `health_agent.py` | IntegrityAgent / `integrity_agent.py` | |
| `SwasthyaGridError`, `askSwasthyaGrid` | `SurakshitError`, `askSurakshit` | |
| Roles: District Administrator / PHC Staff / State Health Officer | `district_admin` / `ec_staff` / `state_officer` | District Administrator / Centre Staff / State Exam Security Officer |
| Risk labels Healthy / Monitor / Stress / Critical | tokens unchanged | Secure / Monitor / Stress / Critical |
| Proof of delivery (POD) | identifiers unchanged | "Custody receipt" |
| "Emergency" medicine flag `emergency` | identifier unchanged | "Tier-1" |
| Nav "Facilities", "Warehouses" | routes unchanged | "Exam Centres", "Strong Rooms" |
| Storage keys `sg-theme`, `sg-scope` | `sk-theme`, `sk-scope` | |
| Doctor names "Dr. A B" | "A B" | |

### 2.2 The five criteria (plus the sixth operations page) — one-to-one, same components and chart types

| # | SwasthyaGrid | Route | SURAKSHIT | Route | Meaning (numbers in seed unchanged) |
|---|---|---|---|---|---|
| 1 | Inventory | `/inventory` | **Custody inventory** (nav label stays "Inventory") | `/inventory` | Sealed packets held per centre, strong room and vault, days of cover |
| 2 | Medicine stock | `/inventory` panels, `/supply/warehouses` | **Question-paper stock** | same | Packets per paper set, shortfall risk (<3 days high, <6 medium), restock and transfer |
| 3 | Bed forecast | `/beds` | **Seat capacity forecast** | `/seats` | Seat/CBT-node occupancy %, tomorrow and next week; >90% triggers a seat redirect to the nearest CBT hub under 85% |
| 4 | Footfall forecast | `/footfall` | **Candidate turnout forecast** | `/turnout` | Daily candidate check-ins per district with fan band; breakdown first attempt / female / PwD / re-test / general |
| 5 | Doctor attendance | `/doctors` | **Invigilator attendance** | `/invigilators` | Absence pattern by weekday, risk level, candidate delay % |
| 6 | Diagnostics | `/diagnostics` | **Centre diagnostics** (tech audit) | `/diagnostics` | CCTV feed, signal jammer, biometric reader, CBT server, UPS: available/down, nearest alternative centre |

Formulas, thresholds and seed numbers are **unchanged** (they are already domain-neutral rules), so all
simulator behaviour and test expectations hold.

### 2.3 Data value maps (computed in step B1 from the copied data, then frozen in `.reskin/reskin-map.json`)

- Catalogue items with `cold_chain: true` take paper sets in catalogue order: `NEET-UG QP`, `REET L2 QP`,
  `RPSC GK QP`, `CUET-UG QP`, `JEE Main QP`, `Police Const QP`, `SSC GD QP`. Items with `cold_chain: false` take
  stationery: `Answer Booklets`, `OMR Sheets`, `Seal Kits`, `Admit Rolls`, `Biometric Kits`.
- Every unit value becomes `packets`.
- Doctor specialties (first-appearance order) → `Physics`, `Chemistry`, `Biology`, `Mathematics`,
  `General Studies`, `English`, `Hindi`, `Reasoning`.
- Diagnostic test names → `CCTV Feed`, `Signal Jammer`, `Biometric Reader`, `CBT Server`, `UPS Backup`,
  `Network Link`, `Strong-room Lock`, `Printer`.
- Demand-factor keys → `exam_season`, `retest_scheduled`, `coaching_hub_nearby`, `monsoon_route_risk`,
  `festival_holiday`, `past_incident`, `staff_vacancy`, `network_outage_risk`, `tier1_exam`, `night_custody`,
  `border_district`.
- Turnout breakdown keys (hand step C1): `children→first_attempt`, `women→female`, `elderly→pwd`,
  `emergency→retest`, `general` stays.
- Lucide icons whose names carry the old domain (chosen in B1 from what the installed lucide-react exports):
  `BedDouble→Armchair`, `Pill→PackageCheck`, `Stethoscope→GraduationCap`, `Footprints→UserCheck`,
  `FlaskConical→Cctv`, `Hospital→School`, `Syringe→FileLock2`, `Ambulance→Siren`, `Snowflake→ShieldCheck`,
  `Thermometer→Gauge`, `HeartPulse→ShieldAlert`, `Microscope→ScanSearch`, `TestTube→Cpu`; fallbacks in the B1 script.

---

## 3. Phase A: copy and baseline (orchestrator, Git Bash)

```bash
SRC="/c/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/ai-healthcare platform"
DEST="/c/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/nsut-maudrik"
```

1. `git -C "$SRC" status --porcelain` must be empty for tracked files; record `git -C "$SRC" rev-parse HEAD`.
   `ls -A "$DEST"` must be empty. If not, stop.
2. Export tracked files only (clutter such as the CRM repo, mentor template, demo video, venvs and builds is
   untracked, so it never comes across):
   `git -C "$SRC" archive --format=tar HEAD | tar -x -C "$DEST"`
3. Delete tracked items that do not belong in the product:
   `rm -rf "$DEST/memory" "$DEST/images" "$DEST/pitch-deck.html" "$DEST/docs/v2-reports" "$DEST/docs/probes" "$DEST/docs/v2-shots" "$DEST/docs/design/supply-reference.md"`
   and the v1 spec series `"$DEST"/docs/0[0-9]-*.md "$DEST"/docs/10-*.md` (stale beige design system; the shipped
   v2 design lives in `globals.css` and `docs/design/*.md`). Keep `docs/v2-architecture.md`,
   `docs/design/consulting-grade.md`, `docs/design/page-archetypes.md`.
4. **Copy env files without reading them** (never `cat`, `type`, `Get-Content` or Read an env file):
   ```bash
   for f in .env backend/.env frontend/.env.local; do [ -f "$SRC/$f" ] && cp "$SRC/$f" "$DEST/$f" && echo "copied $f"; done
   ```
5. **Env pointer check (prints categories, never values):** run with `python - <<'EOF'` from `$DEST`:
   ```python
   import re, pathlib
   KEYS = {"NEXT_PUBLIC_API_BASE", "NEXT_PUBLIC_VOICE_WS_URL", "DATA_SOURCE", "CORS_ORIGINS"}
   for p in [pathlib.Path(".env"), pathlib.Path("backend/.env"), pathlib.Path("frontend/.env.local")]:
       if not p.exists(): print(p, "absent"); continue
       for line in p.read_text(encoding="utf-8", errors="ignore").splitlines():
           m = re.match(r"\s*([A-Z0-9_]+)\s*=\s*(.*)", line)
           if not m: continue
           k, v = m.group(1), m.group(2).strip().strip("\"'")
           if k not in KEYS: continue
           if k == "DATA_SOURCE": print(p, k, v or "unset")
           else: print(p, k, "unset" if not v else ("local" if re.search(r"localhost|127\.0\.0\.1", v) else "remote"))
   ```
   - If `NEXT_PUBLIC_API_BASE` or `NEXT_PUBLIC_VOICE_WS_URL` is `remote`: create `frontend/.env.development.local`
     and `frontend/.env.production.local` containing `NEXT_PUBLIC_API_BASE=http://127.0.0.1:8080` and
     `NEXT_PUBLIC_VOICE_WS_URL=ws://127.0.0.1:8080/ws/voice` (both files are already gitignored by
     `frontend/.env*.local`; Next.js gives them priority over `.env.local`).
   - If `DATA_SOURCE` is not `seed`: every local run in this plan sets `DATA_SOURCE=seed` in the process env (pydantic
     settings prefer process env over `.env`), and step E3 adds it to `scripts/start-demo.ps1`. This stops the clone
     reading SwasthyaGrid's Firestore.
   - Log the printed categories (not values) in `.reskin/build-log.md`.
6. Create `.reskin/` (scratch: scripts, map, log, fingerprints). Add `.reskin/` to `.gitignore`. Also remove these
   now-irrelevant lines from `.gitignore`: `mentor-repo-reference/`, `ai-healthcare-crm/`, every `demo-video/...`
   line, `brag-output*/`, `backend/.runtime-b2/`. Confirm `.env`, `.env.*` (with `!.env.example`),
   `backend/.env` and `frontend/.env*.local` are still ignored: `git check-ignore -v .env backend/.env frontend/.env.local`
   must print three lines after `git init`.
7. `git init -b main`; set nothing in git config (the user's global identity is used). Stage and run
   `git status --porcelain | grep -E "\.env($|\.local)"` → must print nothing. First commit:
   `chore: import SwasthyaGrid baseline for SURAKSHIT clone`.
8. **Numeric fingerprint (before any change)**: save §5.4's script as `.reskin/fingerprint.py`, run
   `python .reskin/fingerprint.py capture`.
9. **Baseline gates** (record pass counts in the log; these exact counts must hold after the rename):
   ```bash
   cd "$DEST/backend" && python -m venv .venv && .venv/Scripts/python -m pip install -q -r requirements.txt -e ".[dev]"
   DATA_SOURCE=seed .venv/Scripts/ruff check . && DATA_SOURCE=seed .venv/Scripts/python -m pytest -q
   cd "$DEST/frontend" && npm ci && npm run lint && npm run typecheck && npm run test && npm run build
   ```
   A failing baseline is fixed or reported now; never mix baseline fixes into the rename commit.

---

## 4. Phase B: build the map, then run the rename engine (orchestrator)

### B1. Map builder (save as `.reskin/build_map.py`, run from `DEST`)

```python
"""Build .reskin/reskin-map.json from the copied data. Run after Phase A (needs frontend/node_modules)."""
import json, pathlib, re, sys
R = pathlib.Path(".")
def load(p): return json.loads((R / p).read_text(encoding="utf-8"))
def find_items(o):
    if isinstance(o, list) and o and all(isinstance(x, dict) and "name" in x for x in o) and any("cold_chain" in x for x in o):
        return o
    if isinstance(o, dict):
        for v in o.values():
            r = find_items(v)
            if r: return r
    return None
def ordered(seq):
    out = []
    for s in seq:
        if s not in out: out.append(s)
    return out
cat = find_items(load("backend/data/medicine_catalog.json")); assert cat, "catalogue list not found"
PAPERS = ["NEET-UG QP", "REET L2 QP", "RPSC GK QP", "CUET-UG QP", "JEE Main QP", "Police Const QP", "SSC GD QP"]
STAT = ["Answer Booklets", "OMR Sheets", "Seal Kits", "Admit Rolls", "Biometric Kits"]
sealed = [x for x in cat if x.get("cold_chain")]; plain = [x for x in cat if not x.get("cold_chain")]
assert len(sealed) <= len(PAPERS) and len(plain) <= len(STAT), (len(sealed), len(plain))
names = {x["name"]: PAPERS[i] for i, x in enumerate(sealed)}
names.update({x["name"]: STAT[i] for i, x in enumerate(plain)})
units = ordered(x["unit"] for x in cat if x.get("unit"))
sd = load("backend/data/seed_districts.json")
SUBJ = ["Physics", "Chemistry", "Biology", "Mathematics", "General Studies", "English", "Hindi", "Reasoning"]
TECH = ["CCTV Feed", "Signal Jammer", "Biometric Reader", "CBT Server", "UPS Backup", "Network Link", "Strong-room Lock", "Printer"]
FACT = ["exam_season", "retest_scheduled", "coaching_hub_nearby", "monsoon_route_risk", "festival_holiday", "past_incident",
        "staff_vacancy", "network_outage_risk", "tier1_exam", "night_custody", "border_district"]
specs = ordered(d["specialty"] for d in sd.get("doctors", []) if d.get("specialty"))
tests = ordered(d["test_name"] for d in sd.get("diagnostics", []) if d.get("test_name"))
fk = []
for v in (sd.get("demand_factors") or {}).values():
    for k in (v.keys() if isinstance(v, dict) else []): fk.append(k)
fk = ordered(fk)
assert len(specs) <= len(SUBJ) and len(tests) <= len(TECH) and len(fk) <= len(FACT), (specs, tests, fk)
lit = []
def add(src, dst):
    lit.append({"from": src, "to": dst, "mode": "word" if len(src) >= 5 else "quoted"})
for d in (names, dict(zip(specs, SUBJ)), dict(zip(tests, TECH))):
    for a, b in d.items(): add(a, b)
for u in units: lit.append({"from": u, "to": "packets", "mode": "quoted"})
lit.sort(key=lambda e: -len(e["from"]))   # longest first
# icons
CHOICES = {"BedDouble": ["Armchair", "Sofa", "LayoutGrid"], "Bed": ["Armchair", "Sofa"], "BedSingle": ["Armchair", "Sofa"],
           "Pill": ["PackageCheck", "Package"], "Pills": ["Package"], "Stethoscope": ["GraduationCap", "School"],
           "Footprints": ["UserCheck", "Users"], "FlaskConical": ["Cctv", "Camera"], "Hospital": ["School", "Building"],
           "Syringe": ["FileLock2", "Lock"], "Ambulance": ["Siren", "Truck"], "Snowflake": ["ShieldCheck", "Shield"],
           "Thermometer": ["Gauge"], "ThermometerSnowflake": ["ShieldAlert", "Shield"], "HeartPulse": ["ShieldAlert", "Shield"],
           "Microscope": ["ScanSearch", "Search"], "TestTube": ["Cpu"], "TestTubes": ["Cpu"], "Cross": ["Shield"],
           "Baby": ["User"], "Bandage": ["Shield"], "Dna": ["Fingerprint"]}
dts = "".join(p.read_text(encoding="utf-8", errors="ignore") for p in (R / "frontend/node_modules/lucide-react/dist").rglob("*.d.ts"))
imported = set()
for f in (R / "frontend/src").rglob("*.ts*"):
    for m in re.finditer(r"import\s*\{([^}]*)\}\s*from\s*[\"']lucide-react[\"']", f.read_text(encoding="utf-8")):
        imported |= {x.strip().split(" as ")[0] for x in m.group(1).split(",") if x.strip()}
DOMAIN = re.compile(r"Bed|Pill|Stethoscope|Hospital|Syringe|Ambulance|Snow|Thermo|Heart|Microscope|TestTube|Flask|Footprints|Cross|Baby|Bandage|Dna")
icons = {}
for n in sorted(imported):
    if not DOMAIN.search(n): continue
    pick = next((c for c in CHOICES.get(n, []) if re.search(r"\b%s\b" % c, dts)), "Shield")
    icons[n] = pick
fkmap = dict(zip(fk, FACT))
(R / ".reskin/reskin-map.json").write_text(json.dumps({"literals": lit, "icons": icons, "factor_keys": fkmap},
    ensure_ascii=False, indent=2), encoding="utf-8")
print("papers", names); print("subjects", dict(zip(specs, SUBJ))); print("tech", dict(zip(tests, TECH)))
print("units", units); print("icons", icons); print("factor keys", fkmap)
for k in fk:   # where factor keys are referenced in code (C1 fixes non-quoted uses)
    for f in list((R / "backend/app").rglob("*.py")) + list((R / "frontend/src").rglob("*.ts*")):
        t = f.read_text(encoding="utf-8")
        if re.search(r"(?<![\"'\w])%s(?![\"'\w])" % re.escape(k), t): print("UNQUOTED KEY USE", k, f)
```
Paste its full output into the build log.

### B2. Rename engine (save as `.reskin/reskin.py`; verbatim)

```python
"""SwasthyaGrid -> SURAKSHIT rename engine. From DEST:  python .reskin/reskin.py --dry   then   python .reskin/reskin.py"""
import collections, json, os, re, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
DRY = "--dry" in sys.argv
MAP = json.loads((ROOT / ".reskin" / "reskin-map.json").read_text(encoding="utf-8"))
SKIP_DIRS = {".git", "node_modules", ".venv", ".next", "__pycache__", ".pytest_cache", ".ruff_cache", ".runtime",
             "test-results", "playwright-report", "dist", "build", ".reskin"}
SKIP_FILES = {"package-lock.json", "LICENSE"}
TEXT_EXT = {".py", ".ts", ".tsx", ".js", ".mjs", ".cjs", ".md", ".yaml", ".yml", ".css", ".html", ".toml", ".txt",
            ".sh", ".ps1", ".example", ".ini", ".cfg"}
JSON_EXT = {".json", ".geojson"}
TEXT_NAMES = {"Dockerfile", ".gitignore", ".dockerignore", ".gcloudignore"}
GEOMETRY_KEYS = {"polyline", "geometry"}
RULES = []
def lit(a, b): RULES.append((re.compile(re.escape(a)), b, "lit:" + a))
def rx(p, b, label=None): RULES.append((re.compile(p), b, label or p))
def noun(s, s_pl, d, d_pl):
    for a, b in ((s_pl, d_pl), (s, d)):
        rx(r"(?<![A-Za-z])" + a + r"(?![a-z])", b)
        rx(r"(?<![A-Z])" + a[0].upper() + a[1:] + r"(?![a-z])", b[0].upper() + b[1:])
        rx(r"(?<![A-Z])" + a.upper() + r"(?![A-Z])", b.upper())
# 1. data values from the map (longest first)
for e in MAP["literals"]:
    f, t = re.escape(e["from"]), e["to"]
    if e["mode"] == "word": rx(r"(?<![A-Za-z0-9])" + f + r"(?![A-Za-z0-9])", t, "map:" + e["from"])
    else: rx(r"([\"'])" + f + r"\1", r"\g<1>" + t + r"\g<1>", "map:" + e["from"])
for k, v in MAP["factor_keys"].items(): rx(r"([\"'])" + re.escape(k) + r"\1", r"\g<1>" + v + r"\g<1>", "fk:" + k)
# 2. fixed literals
for a, b in [("SwasthyaGrid AI: District Health Operations Center", "SURAKSHIT AI: Intelligent Education Cybersecurity System"),
             ("District Health Operations Center", "Intelligent Education Cybersecurity System"),
             ("SwasthyaGrid-HealthTech", "SURAKSHIT-EduSec"),
             ('Swasthya<span className="text-brand">Grid</span>', "SURAKSHIT"),
             ("State Central Drug Warehouse", "State Central Exam Vault"), ("District Drug Warehouse", "District Strong Room"),
             ("State Health Officer", "State Exam Security Officer"), ("HealthAgent", "IntegrityAgent"),
             ("health_agent", "integrity_agent"), ("swasthyagrid.vercel.app", "surakshit.vercel.app"),
             ("Specialty", "Subject"), ("°C", "%")]:
    lit(a, b)
# 3. brand
rx(r"(?<=[a-z])SwasthyaGrid", "Surakshit"); rx(r"SwasthyaGrid(?=[A-Za-z0-9_])", "Surakshit")
rx(r"SWASTHYAGRID", "SURAKSHIT"); rx(r"SwasthyaGrid", "SURAKSHIT"); rx(r"swasthyagrid", "surakshit")
rx(r"Swasthya", "Surakshit"); rx(r"swasthya", "surakshit"); rx(r"(?<![A-Za-z0-9])sg-(theme|scope)", r"sk-\1")
# 4. ids and type codes
rx(r"(?<![A-Za-z0-9])phc_", "ec_"); rx(r"_phc_", "_ec_"); rx(r"(?<![A-Za-z0-9])chc_", "cbt_"); rx(r"_chc_", "_cbt_")
rx(r"(?<![A-Za-z0-9])ddw_", "dsr_"); rx(r"(?<![A-Z])PHC_", "EC_"); rx(r"(?<![A-Z])CHC_", "CBT_")
rx(r"([\"'])PHC\1", r"\1EC\1"); rx(r"([\"'])CHC\1", r"\1CBT\1")
rx(r"\bPHC (?=[A-Z0-9])", "Centre "); rx(r"\bCHC (?=[A-Z0-9])", "CBT Hub ")
rx(r"\bPHCs and CHCs\b", "exam centres and CBT hubs"); rx(r"\bPHCs\b", "exam centres"); rx(r"\bCHCs\b", "CBT hubs")
rx(r"\bPHC\b", "exam centre"); rx(r"\bCHC\b", "CBT hub")
# 5. cold chain, reefer, temperature
for a, b in [("cold_chain", "tamper_seal"), ("coldChain", "tamperSeal"), ("ColdChain", "TamperSeal"), ("COLD_CHAIN", "TAMPER_SEAL"),
             ("cold-chain", "tamper-seal"), ("Cold-chain", "Tamper-seal"), ("Cold chain", "Tamper seal"), ("cold chain", "tamper seal"),
             ("Cold Chain", "Tamper Seal"), ("cold_room", "secure_room"), ("coldRoom", "secureRoom"), ("Cold room", "Secure room"),
             ("cold room", "secure room"), ("reefer", "armoured"), ("Reefer", "Armoured"), ("REEFER", "ARMOURED")]:
    lit(a, b)
rx(r"(?<![A-Za-z])temp_c(?![a-z])", "seal_strain"); rx(r"tempC(?![a-z])", "sealStrain"); rx(r"TempC(?![a-z])", "SealStrain")
rx(r"\bDr\. (?=[A-Z])", "")
# 6. domain nouns
noun("medicine", "medicines", "paper", "papers"); noun("doctor", "doctors", "invigilator", "invigilators")
noun("bed", "beds", "seat", "seats"); noun("footfall", "footfalls", "turnout", "turnouts")
noun("patient", "patients", "candidate", "candidates"); noun("drug", "drugs", "material", "materials")
noun("hospital", "hospitals", "centre", "centres")
LUCIDE = re.compile(r"import\s*\{([^}]*)\}\s*from\s*[\"']lucide-react[\"']")
def icons(text, stats):
    m = LUCIDE.search(text)
    if not m: return text
    names = {x.strip().split(" as ")[0] for x in m.group(1).split(",") if x.strip()}
    for old, new in MAP["icons"].items():
        if old in names:
            text, k = re.subn(r"\b%s\b" % old, new, text); stats["icon:" + old] += k
    def dedupe(mm):
        seen = []
        for x in mm.group(1).split(","):
            x = x.strip()
            if x and x not in seen: seen.append(x)
        return mm.group(0).replace(mm.group(1), " " + ", ".join(seen) + " ")
    return LUCIDE.sub(dedupe, text)
def sub_all(s, stats):
    for pat, rep, label in RULES:
        s, n = pat.subn(rep, s)
        if n: stats[label] += n
    return s
def walk(o, stats):
    if isinstance(o, dict):
        out = {}
        for k, v in o.items():
            k2 = MAP["factor_keys"].get(k) or sub_all(k, stats)
            out[k2] = v if k in GEOMETRY_KEYS else walk(v, stats)
        return out
    if isinstance(o, list): return [walk(v, stats) for v in o]
    if isinstance(o, str): return sub_all(o, stats)
    return o
def dump_like(orig, obj):
    if "\n" not in orig.strip(): out = json.dumps(obj, ensure_ascii=False, separators=(",", ":"))
    else:
        m = re.search(r"\n( +)\S", orig); out = json.dumps(obj, ensure_ascii=False, indent=len(m.group(1)) if m else 2)
    return out + ("\n" if orig.endswith("\n") else "")
total = collections.Counter(); changed = []
for dirpath, dirnames, filenames in os.walk(ROOT):
    dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
    for fn in filenames:
        p = pathlib.Path(dirpath) / fn
        if fn in SKIP_FILES: continue
        is_json = p.suffix in JSON_EXT
        if not (is_json or p.suffix in TEXT_EXT or fn in TEXT_NAMES): continue
        raw = p.read_bytes()
        if b"\x00" in raw: continue
        orig = raw.decode("utf-8")
        stats = collections.Counter()
        if is_json:
            try: new = dump_like(orig, walk(json.loads(orig), stats))
            except json.JSONDecodeError: new = sub_all(orig, stats)
        else:
            new = sub_all(icons(orig, stats), stats) if p.suffix in {".ts", ".tsx"} else sub_all(orig, stats)
        if stats:
            total.update(stats); changed.append((str(p.relative_to(ROOT)), sum(stats.values())))
            if not DRY: p.write_text(new, encoding="utf-8", newline="")
# path renames, deepest first
renames = []
for dirpath, dirnames, filenames in os.walk(ROOT, topdown=False):
    if any(part in SKIP_DIRS for part in pathlib.Path(dirpath).relative_to(ROOT).parts): continue
    for name in filenames + dirnames:
        if name in SKIP_DIRS: continue
        new = sub_all(name, collections.Counter())
        if new != name: renames.append((pathlib.Path(dirpath) / name, pathlib.Path(dirpath) / new))
for a, b in renames:
    print("RENAME", a.relative_to(ROOT), "->", b.name)
    if not DRY: a.rename(b)
print("files changed", len(changed)); print("rule hits:")
for k, v in total.most_common(): print(f"  {v:6}  {k}")
```

Run order: `python .reskin/reskin.py --dry > .reskin/dry.txt`; read it. Expected: `files changed` roughly 450 to 650;
non-zero hits for `phc_`, `medicine`, `bed`, `doctor`, `footfall`, `patient`, `cold_chain`, every `map:` entry;
renames include `app/(dashboard)/beds -> seats`, `doctors -> invigilators`, `footfall -> turnout`,
`medicine_catalog.json -> paper_catalog.json`, `health_agent.py -> integrity_agent.py`,
`swasthyagrid-logo.png -> surakshit-logo.png`, fixture files `medicines.json`, `beds__forecast.json` etc. If any
expected rule shows 0 hits or a `RENAME` targets a file inside `node_modules`/`.venv`, stop and report. Then run
`python .reskin/reskin.py` for real, then `cd frontend && npm install` (refreshes the lockfile's package name).

### B3. Immediate smoke checks
- `python -m compileall -q backend/app backend/scripts backend/tests` → no output.
- `python .reskin/fingerprint.py compare` → `MATCH` for every seed file (renames touched strings only).
- `cd frontend && npm run typecheck` → errors are allowed here only if they come from icon names or keys listed in
  B1's `UNQUOTED KEY USE` lines; fix those by hand now (§2.3 names), re-run until clean.
- Commit: `refactor: move domain from facility health to exam custody across code, data and tests`.

### 5.4 Fingerprint script (`.reskin/fingerprint.py`)

```python
import hashlib, json, pathlib, sys
R = pathlib.Path(__file__).resolve().parent.parent
PAIRS = [("backend/data/seed_districts.json",), ("backend/data/seed_logistics.json",), ("backend/data/seed_logistics_history.json",),
         ("backend/data/routes.json",), ("backend/data/medicine_catalog.json", "backend/data/paper_catalog.json"),
         ("backend/data/fixtures/jaipur_rural_original.json",)]
def nums(o, out):
    if isinstance(o, bool): out.append(int(o))
    elif isinstance(o, (int, float)): out.append(o)
    elif isinstance(o, dict): [nums(v, out) for v in o.values()]
    elif isinstance(o, list): [nums(v, out) for v in o]
    return out
def fp():
    res = {}
    for names in PAIRS:
        p = next((R / n for n in names if (R / n).exists()), None)
        if p: res[names[0]] = hashlib.sha256(json.dumps(nums(json.loads(p.read_text(encoding="utf-8")), [])).encode()).hexdigest()
    return res
store = R / ".reskin" / "fingerprint.json"
if sys.argv[1] == "capture": store.write_text(json.dumps(fp(), indent=2)); print("captured")
else:
    old = json.loads(store.read_text()); new = fp()
    for k in old: print(k, "MATCH" if old[k] == new.get(k) else "MISMATCH")
```

---

## 5. Phase C: hand transforms, four parallel lanes (disjoint files)

Dispatch C1 to C4 **in one message as four Agent calls** (`run_in_background: true`). They share one working tree
but own disjoint files (listed). No lane commits, runs the full test suites, or edits another lane's files. Each
lane may run `ruff check <its files>` or `npx tsc --noEmit` read-only. If a sub-agent dispatch fails with HTTP
429, the orchestrator runs that lane's prompt itself.

**Every lane prompt starts with:** "Read `C:\Users\harsh\.claude\plans\working-folder-maudrik-policy-giggly-breeze.md`
§0, §1, §2, §11 and your lane section. Work in `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\nsut-maudrik`. Never
open, print or edit any `.env*` file. Edit only the files your lane owns. Keep every number, formula, threshold,
id, layout class and component structure unchanged; change words only. When done, append a section to
`.reskin/build-log.md` (files changed, one line each) and report `STATUS: PASS|FAIL` in at most 12 lines."

### C1. Data lane (owns `backend/data/**`, `backend/scripts/generate_*.py`, `backend/scripts/build_routes.py`)
1. `backend/data/paper_catalog.json`: rewrite only `storage` strings (sealed papers: "Strong room, dual lock,
   tamper-evident seal"; stationery: "Strong room, single lock"). Numbers and flags unchanged.
2. `backend/data/seed_districts.json` (structured edit with Python `json`, keep key order and indent):
   - `causal_chain` (one per district): rewrite `headline` and the 4 `chain` links as an exam-custody story for
     that district's own `facility_id`, e.g. headline "Strong-room key log gap at Centre Bassi raises leak
     exposure"; links: "Night custody officer absent on 3 of the last 5 Mondays", "Strong room opened with one
     key holder present", "Seal-strain alert acknowledged after 40 minutes", "Paper stock at the centre below
     1.05x registered candidates". Five distinct stories, plain declarative sentences, no dashes.
   - Turnout breakdown objects (key renamed by B2 from `footfall_breakdown_tomorrow`): rename inner keys per §2.3.
   - Any remaining prose string flagged by the §10 audit inside data files.
3. `backend/data/seed_logistics.json`: warehouse names already mapped by B2; check `cold_room`-derived fields read
   naturally; fix prose only.
4. Mirror every string change in the generators (`generate_districts.py`, `generate_logistics.py`) so a future
   regeneration produces the same strings. **Do not re-run the generators or `build_routes.py`** (routes need the
   OSRM network; numbers must stay identical).
5. Fix the `UNQUOTED KEY USE` lines from B1 that fall in backend Python (C2 owns prompts/tools, so only
   `services/forecast_service.py` and `repositories/district_repository.py` here; turnout breakdown key reads too).
6. Run `python .reskin/fingerprint.py compare` → all `MATCH`.

### C2. Backend language lane (owns `backend/app/prompts/**`, `backend/app/tools/**`, `backend/app/agents/**`,
`backend/app/voice/fillers.py`, `backend/app/voice/speech.py`, `backend/app/services/briefing_service.py`,
`backend/app/services/insights_service.py` strings, `backend/app/services/recommendation_service.py` reason
strings, `backend/app/core/exceptions.py` messages, `backend/app/main.py` CORS origins and title, `backend/evals/**`)
1. **Before writing any copy, invoke the skill** (§9 touchpoint 1).
2. `prompts/voice_prompt.py` and the system prompt: rewrite the role as "SURAKSHIT, the exam-security control room
   assistant for five Rajasthan districts" covering custody inventory, paper stock, seat capacity, candidate
   turnout, invigilator attendance and centre diagnostics; keep every tool name, rule, language behaviour and
   length limit. State that data is simulated when asked about real exams.
3. `tools/v2.py` card titles and summaries, `tools/schemas.py` descriptions: exam-domain wording; tool names were
   renamed by B2 (e.g. `get_turnout_forecast`), keep them.
4. `tools/resolve.py`: replace Hindi/Devanagari medicine and PHC aliases with paper-set and centre aliases
   (परीक्षा केंद्र, प्रश्न पत्र, नीट, रीट, आरपीएससी, ओएमआर, निरीक्षक/इनविजिलेटर, सीट, उपस्थिति); keep the
   normalisation code and number handling.
5. `agents/public_agent.py`, `tools/emergency_tool.py`, `tools/maps_tool.py`: become a **candidate helpdesk**:
   find my exam centre (nearest centres from seed), how to report a suspected leak (to the exam body's official
   helpline printed on the admit card), and 112 for emergencies. No invented phone numbers.
6. `briefing_service.py` template: the deterministic briefing uses PRAMAAN's vocabulary (blast radius, split keys,
   per-copy watermarks, T−60 release) only as action names, never as claims about real exams.
7. `evals/voice_cases.yaml`: rewrite the 40 cases to the exam domain, keeping ids, tools expected and structure.
8. `main.py`: CORS hard-coded origins → `https://surakshit.vercel.app`; app title "SURAKSHIT API".

### C3. Frontend lane (owns `frontend/**` except fixtures and generated `openapi.ts`)
1. **Invoke the skill first** (§9 touchpoint 1).
2. **Logo** (§7): build `public/brand/surakshit-logo.svg` and the PNG, replace the B2-renamed PNG, update
   `LogoMark.tsx` (alt "SURAKSHIT"; wordmark `<span>SURAKSHIT</span>` in text colour, no split), then
   `node scripts/make-icons.mjs` to regenerate `src/app/icon.png` and `apple-icon.png`.
3. `src/app/layout.tsx`: title as §0, description "Intelligent Education Cybersecurity System for exam-material
   custody, centre security and paper-leak response across five Rajasthan districts", siteName "SURAKSHIT AI",
   url `https://surakshit.vercel.app`, keywords: exam security, paper leak, question paper custody, NEET, REET,
   RPSC, CBT, strong room, Gemini, Google Cloud.
4. Labels per §2.1: `lib/domain.ts` (Healthy → Secure), `shell/nav-items.ts` ("Facilities" → "Exam Centres",
   "Warehouses" → "Strong Rooms"; routes unchanged), `lib/roleContext.tsx`, `operations/derive.ts`
   (`PAPER_META` short labels from the B1 map; "Emergency" → "Tier-1"), POD → "Custody receipt",
   `components/voice/voice-copy.ts`, `shell/CommandPalette.tsx` ("Ask SURAKSHIT: …").
5. Turnout breakdown keys in `lib/api/types.ts`, `operations/TurnoutPanels.tsx`, `operations/derive.ts`, tests.
6. `components/command/titles.ts` and every `InsightCard` title/body: action titles per §9 touchpoint 1.
7. Seal strain: wherever B2 turned "°C" into "%", the label reads "Seal strain"; thresholds unchanged.
8. Keep the unused legacy mocks (`src/lib/store.tsx`, `src/lib/api.ts`, `src/data/district.ts`, orphaned root
   components) for parity; their strings are already mapped by B2 and checked by the §10 audit.

### C4. Docs and infra lane (owns `README.md`, `docs/**`, `scripts/**` at root, `backend/scripts/deploy.sh`,
`backend/scripts/setup_secrets.sh`, `backend/Dockerfile`, `backend/docker-compose.yml`, `LICENSE`, `vercel.json`,
`.github/**`)
1. **Invoke the skill first** (§9 touchpoint 2).
2. `README.md`: keep the source's heading tree, badges (brand colour `2dd4a7`), five mermaid diagrams, route table
   and image gallery layout; rewrite content for SURAKSHIT. Heading changes only where the domain forces them:
   "The problem" carries the PRAMAAN argument with sourced numbers (NEET-UG 2026 cancelled for about 22.7 lakh
   candidates; 87% of candidates in attributed cancellations lost the paper before it reached a centre; 31 of 49
   coded breaches were insider jobs; source: PRAMAAN research document, Team IdeaForge, 2026). "Running it
   locally": drop "### 4. CRM (port 3001, separate repository)" and renumber; note custody receipts auto-confirm
   via `LOGISTICS_AUTO_POD_MINUTES`. "Environment variables": list key **names** only (from `.env.example`
   files). "Data provenance and attributions": centres are synthetic points near real district HQs, not real
   schools; routes OSRM/OpenStreetMap; boundaries geoBoundaries ODbL; tiles Esri/CARTO. Keep the closing line
   "Every number is either computed, or it says where it came from." Footer credit per §0.
3. `docs/v2-architecture.md`, `docs/design/*.md`: domain words already mapped by B2; fix leftovers.
4. `backend/scripts/deploy.sh`: service `surakshit-api`, repo `surakshit`, same secret names
   (`gemini-api-key`, `sarvam-api-key`, `logistics-service-token`), `DATA_SOURCE=seed` kept. Dockerfile user
   `surakshit` (B2 did it; verify).
5. `scripts/start-demo.ps1`: remove the CRM step (port 3001), set `$env:DATA_SOURCE='seed'` before uvicorn, log
   dir `%TEMP%\surakshit-logs`.
6. `LICENSE`: keep Apache 2.0; copyright line "Copyright 2026 Harsh Kawatra" (match the source's holder line
   format).

---

## 6. Phase D: regenerate, gate, fix (orchestrator, or one Sonnet agent "gates")

1. Start the backend: `cd backend && DATA_SOURCE=seed .venv/Scripts/python -m uvicorn app.main:app --port 8080`
   (background). `curl -s 127.0.0.1:8080/health` → ok.
2. Regenerate generated artefacts so no stale strings survive: read each script's header for prerequisites, then
   run `backend/scripts/export_frontend_fixtures.py`, `frontend/scripts/export-f1-fixtures.mjs`,
   `export-f2-fixtures.mjs`, `f3-fixtures.mjs`, and `npm run gen:api` (writes `src/lib/api/openapi.ts`).
3. Gates (all must pass; counts must equal the Phase A baseline):
   - backend: `ruff check .`, `pytest -q` (with `DATA_SOURCE=seed`).
   - frontend: `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`.
   - e2e: `npm run start` (port 3000) with the backend up, `npx playwright install chromium` if needed, `npm run e2e`.
   - `python backend/scripts/endpoint_sweep.py` (every GET returns 200).
   - Residual audit §10 → 0 non-allowlisted hits. Dash audit §11 → 0.
4. Fix failures by following the §2 mapping (a test asserting an old string gets the new string; a renamed key
   gets its new name). Never weaken or delete a test; never change a number to make a test pass.
5. Commits (one per lane, staged by path): `feat(data): exam-centre seed, paper-set catalogue and custody
   narratives`; `feat(voice): exam-security prompts, tools and Hindi aliases`; `feat(brand): SURAKSHIT logo,
   icons, metadata and copy`; `docs: SURAKSHIT readme, deploy and demo scripts`; `test: regenerate fixtures and
   api types`.

---

## 7. Logo (C3 step 2)

1. Sample the four quadrant colours and the bolt colour from the source PNG (now
   `frontend/public/brand/surakshit-logo.png`) **before** overwriting it: view it with the Read tool to see where
   each colour sits, then
   `python -c "from PIL import Image; im=Image.open('frontend/public/brand/surakshit-logo.png').convert('RGBA'); print(im.size, sorted(im.getcolors(1<<20), reverse=True)[:12])"`
   (if Pillow is missing: `pip install pillow` into the backend venv and run with it). Record BLUE, YELLOW, RED,
   GREEN, BOLT and their positions (TL/TR/BL/BR) in the log.
2. Write `frontend/public/brand/surakshit-logo.svg` (viewBox `0 0 412 352`; replace the placeholders and the
   quadrant order to match the source placement):
   ```svg
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 352">
     <defs><clipPath id="s"><path d="M206 8 L334 52 V170 C334 256 278 314 206 344 C134 314 78 256 78 170 V52 Z"/></clipPath></defs>
     <g clip-path="url(#s)">
       <rect x="0" y="0" width="206" height="176" fill="{TL}"/><rect x="206" y="0" width="206" height="176" fill="{TR}"/>
       <rect x="0" y="176" width="206" height="176" fill="{BL}"/><rect x="206" y="176" width="206" height="176" fill="{BR}"/>
       <rect x="202" y="0" width="8" height="352" fill="#ffffff"/><rect x="0" y="172" width="412" height="8" fill="#ffffff"/>
     </g>
     <circle cx="206" cy="150" r="38" fill="{BOLT}" stroke="#0a0c10" stroke-width="7"/>
     <path d="M188 176 L224 176 L236 252 L176 252 Z" fill="{BOLT}" stroke="#0a0c10" stroke-width="7" stroke-linejoin="round"/>
   </svg>
   ```
3. Render to a transparent 824×704 PNG with Playwright (installed devDependency), save over
   `public/brand/surakshit-logo.png`:
   ```js
   // frontend/scripts/render-logo.mjs  (run: node scripts/render-logo.mjs)
   import { chromium } from "@playwright/test"; import { readFileSync } from "node:fs";
   const svg = readFileSync("public/brand/surakshit-logo.svg", "utf8");
   const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 824, height: 704 } });
   await p.setContent(`<html><body style="margin:0;background:transparent">${svg.replace("<svg ", '<svg width="824" height="704" ')}</body></html>`);
   await p.screenshot({ path: "public/brand/surakshit-logo.png", omitBackground: true, clip: { x: 0, y: 0, width: 824, height: 704 } });
   await b.close();
   ```
4. View the PNG with the Read tool at 16px-equivalent and at full size: the keyhole must read clearly in light
   and dark themes. Then `node scripts/make-icons.mjs`.

---

## 8. Phase E: screenshots, parity check, critique, finish (orchestrator)

1. With both servers up, run `frontend/scripts/final-shots.mjs` and `readme-shots.mjs` (read their headers for
   output paths; README images land in `docs/v2-shots/readme/`: `command.png`, `voice.png`, `supply.png`,
   `recommendations.png`, `command-heatmap.png`, `inventory-heatmap.png`).
2. **Parity check against the source:** for each of the 17 sidebar routes plus `/districts/[id]`,
   `/facilities/[id]`, `/supply/shipments/[id]` (route pairs: `/beds↔/seats`, `/doctors↔/invigilators`,
   `/footfall↔/turnout`, others identical), open the source light screenshot from
   `SRC/docs/v2-shots/*-light*.png` (Glob by page name) and the clone's screenshot with the Read tool. Pass =
   same layout, same colours, same number of panels and charts; only words, icons and the logo differ. Log one
   line per route.
3. **Live check in the browser** (claude-in-chrome tools, one ToolSearch call loading the core set): open
   `http://127.0.0.1:3000/command`, toggle theme, open the voice page and send one typed question
   ("Which centre in Kota has the lowest paper cover?"), approve one recommendation, watch one shipment move on
   `/supply`. Record a GIF `surakshit_tour.gif`.
4. §9 touchpoint 3 (critique). Apply wording-only fixes; re-run lint/typecheck/test if code strings changed.
5. Commit `docs(shots): capture SURAKSHIT screenshots`. Print `git log --oneline` and confirm no commit message
   contains `Co-Authored-By`.
6. Save a project memory `project_surakshit_app.md` (what it is, paths, the clone method, the no-split wordmark
   rule, the env override rule) and add its line to `MEMORY.md`.
7. Final report to the user: paths, run commands (`scripts/start-demo.ps1`), gate results with counts, parity
   verdicts, the logo, anything left as residual, and a reminder that nothing was pushed or deployed.

---

## 9. When and how to use the `case-competition-deck` skill

Invoke with the Skill tool; the listed name is `anthropic-skills:case-competition-deck` (use
`case-competition-deck` if that is the one listed). The app's own design doc `docs/design/consulting-grade.md`
already demands action titles, a moneyshot per page, three-scenario projections and source footers, so the skill
is the reference for **wording**, never for layout or numbers.

| # | When | Who | Args | Read | Use it to | Must not |
|---|---|---|---|---|---|---|
| 1 | Start of C2 and C3, before writing any copy | C2, C3 | `slide mode, policy case, action titles and moneyshot wording for the SURAKSHIT exam-security dashboard` | `references/rhetoric.md` (action titles), `references/archetypes.md` P (moneyshot), M (three scenarios), N (sensitivity), H (exec summary) | Every InsightCard title and Command Centre title becomes a declarative finding with a number from the page's own data ("3 centres in Kota hold under 3 days of NEET-UG paper cover"); each page's Moneyshot is one number with one line of meaning; ScenarioSwitch keeps pessimistic/realistic/optimistic | Add panels, change numbers, add claims about real exams |
| 2 | Start of C4, before the README | C4 | `generate mode, policy case, README argument for SURAKSHIT, argument fixed in PRAMAAN plan` | `references/structure.md`, `references/rhetoric.md`, `references/case_types/policy_and_trade.md` | "The problem" section uses the contrarian pattern from PRAMAAN (moving to CBT moves the vulnerability; shrink the prize instead), foreshadows the product, and every number carries a source | Invent statistics or quotes |
| 3 | Phase E step 4 | orchestrator | `critique mode, policy case, README plus 6 README screenshots of the SURAKSHIT prototype` | `references/critique_rubric.md` | Score action titles, quantification, polish, honesty; list top 3 wording fixes | Act on rubric items that assume a 100-slide deck (TOC, dividers, appendix count, bibliography slides) |

---

## 10. Residual-term audit (`.reskin/audit.py`; must report 0 non-allowlisted hits)

```python
import os, pathlib, re, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
SKIP_DIRS = {".git", "node_modules", ".venv", ".next", "__pycache__", ".pytest_cache", ".ruff_cache", ".runtime",
             "test-results", "playwright-report", ".reskin"}
SKIP = {"package-lock.json", "LICENSE"}
TERMS = re.compile(r"swasthya|\bphcs?\b|\bchcs?\b|medicin|\bmedic|pharma|\bdrugs?\b|doctor|\bdr\.|patient|\bbeds?\b|"
    r"footfall|hospital|clinic|\basha\b|paracetamol|\bors\b|\basv\b|\barv\b|oxytocin|adrenaline|epinephrine|tetanus|venom|"
    r"rabies|vaccin|cold.?chain|reefer|temp_c|°c|ambulance|disease|outbreak|dengue|malaria|fever|snake|x-?ray|nurse|"
    r"stethoscope|\bpills?\b|\bward\b|\bopd\b|\bipd\b|maternal|health(?!y|check)", re.I)
ALLOW = [re.compile(r"/health\b"), re.compile(r"api[-_]?health|apiHealth|reportApiStatus"), re.compile(r"test_health\.py"),
         re.compile(r"health\.py"), re.compile(r"health\.tsx")]
hits = 0
for dp, dn, fn in os.walk(ROOT):
    dn[:] = [d for d in dn if d not in SKIP_DIRS]
    for f in fn:
        p = pathlib.Path(dp) / f
        if f in SKIP or f.startswith(".env"): continue
        rel = str(p.relative_to(ROOT)).replace("\\", "/")
        if TERMS.search(rel) and not any(a.search(rel) for a in ALLOW): print("PATH", rel); hits += 1
        raw = p.read_bytes()
        if b"\x00" in raw: continue
        for i, line in enumerate(raw.decode("utf-8", "ignore").splitlines(), 1):
            for m in TERMS.finditer(line):
                ctx = f"{rel}:{i}: {line.strip()[:160]}"
                if any(a.search(ctx) for a in ALLOW): continue
                hits += 1
                if hits <= 300: print(ctx)
                break
print("residual hits:", hits); sys.exit(1 if hits else 0)
```
An allowlist entry may be added only for a generic technical use (for example a `/health` endpoint), with a
one-line reason in the build log. Never allowlist prose.

---

## 11. Copy rules (every UI string, prompt, README, doc, commit message)

1. Zero `—` and `–` in prose. One exception: a table cell whose whole content is the single null placeholder
   `"—"` (kept for exact UI parity). Ranges use "to"; negatives use "−".
2. No hooks: no questions in headings or titles, no "imagine", no exclamation marks.
3. None of: here's, let's, bottom line, delve, game-changer, unlock, it's not just, make no mistake, landscape,
   robust, seamless, holistic, tapestry, paradigm, navigate, revolutionise, cutting-edge, leverage (verb),
   empower, transformative, journey, synergy, world-class, best-in-class, next-gen, reimagine, supercharge, harness.
4. Titles are declarative findings with numbers; body text uses concrete verbs and named actors.
5. Dash audit (run from `DEST`):
   ```bash
   grep -rnP "[\x{2014}\x{2013}]" --include=*.ts --include=*.tsx --include=*.py --include=*.md --include=*.yaml . \
     --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=.next --exclude-dir=.git --exclude-dir=.reskin \
     | grep -vP "[\"']\x{2014}[\"']" | wc -l
   ```
   must print `0`.

---

## 12. Verification checklist (all true before the final report)

- [ ] `DEST` is a git repo on `main`; no env file tracked; no commit carries `Co-Authored-By`.
- [ ] Backend: ruff clean; pytest passes with the same count as baseline.
- [ ] Frontend: lint, typecheck, vitest (same count), build pass; Playwright e2e passes.
- [ ] `endpoint_sweep.py` all 200; SSE stream ticks; voice WebSocket answers a typed question.
- [ ] Fingerprint `MATCH` on all seed files.
- [ ] Residual audit 0; dash audit 0.
- [ ] Parity verdict PASS on every route; logo renders in both themes; favicon regenerated; wordmark not split.
- [ ] README rebuilt with fresh screenshots, sourced problem section, env names only.
- [ ] Skill touchpoints 1 to 3 done and logged.
- [ ] Project memory saved.
