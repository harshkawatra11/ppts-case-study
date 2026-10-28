# SAHYOG — Trusted-Autonomy Systems for Indian Disaster Response & Defence
## Master Plan: (A) a hardware-first build course that produces a real autonomous scout-and-relief drone system → (B) a deep-tech startup serving NDMA/NDRF/SDRFs and the Indian Army
### Core product: a vehicle-agnostic autonomy companion + operator command console, where **no physical action happens without a cryptographically verified human authorisation**

> Written for Sonnet-class executor subagents. **Do not re-plan or redesign.** Every decision is made here.
> If something is impossible as written, implement the stated **FALLBACK**; if there is none, stop and report the exact
> blocker. Never silently change interfaces (§6), paths (§5) or safety rules (§4).
>
> **How to read this file.**
> - Part A (§0–§18): the engineering system and a **module-by-module hardware build course** (M0–M12). There are no external
>   deadlines; each module ends with a measurable **gate**, and you advance only when the gate passes.
> - Part B (§19–§33): the company: thesis, customers, products, defence-grade engineering, compliance, procurement routes,
>   funding, go-to-market, legal/IP, team, financials, and the 24-month roadmap.
>
> **Naming (fixed by founder, 25 Oct 2026):** brand = **Sahyog**. Code namespace `sahyog_*` / `sahyog-*`. "INDRA" only
> refers to the DTU SEVA FIRST problem statement used as the reference specification.
>
> **Status of the competition:** no PPT/video/screening deadline applies (founder, 25 Oct). Use the INDRA PS
> (`seva-first/NAT-002-INDRA.pdf`) as the **requirements benchmark** for v1. Entering INDRA/NIDAR later is optional (§25.6).

---

## 0. CONTEXT

**Founder:** Harsh Kawatra, 2nd-year B.Tech ECE at DTU (2025–29). Strong production software background: FastAPI,
React/Next.js, SSE/WebSocket live dashboards, LightGBM, grounded-LLM systems. SwasthyaGrid (a district health ops console where
"every recommendation requires human approval, never auto-executed") is the same philosophy Sahyog productises. Owns an
Arduino, an ESP32 and a Raspberry Pi (models to be recorded in M0). No drone/MAVLink/OpenCV/firmware code exists yet. Access to
Delhi's Lajpat Rai / Chandni Chowk electronics market, and to frontier LLMs for coding help.

**Why this exists:** the founder wants to **actually build** in drones → AUV → autonomous vehicles, set up a personal hardware
lab, and grow it into a company that works with the Indian Army and India's disaster-management system. This plan is
both the **curriculum** (learn by building, gate by gate) and the **company blueprint**.

**Initial budget:** ₹15k–40k for the lab + first dev drone (Phase 1). Later phases are funded by grants and pilots (§26).
**Team:** founder + recruit 1–2 (a safety pilot / airframe person is mandatory before any flight; see §10).

**Intended outcome (12 months):**
1. A working Sahyog v1: a dev drone + companion pod (Pi + camera + release controller) + Sahyog Command console that meets
   the full INDRA spec (autonomous search, casualty geotagging, human-confirmed precision drop, failsafes, audit report).
2. A personal hardware lab (Tier 1 → Tier 2).
3. A registered startup with recognition, an incubator, ≥1 grant application, ≥10 documented customer-discovery interviews
   with disaster-response/defence users, ≥1 field demonstration to an SDRF/NDRF/Army unit, and ≥1 LOI or pilot.

---

## 1. REQUIREMENTS BASELINE

### 1.1 INDRA reference spec (from NAT-002-INDRA.pdf) — v1 must satisfy all of these
| ID | Requirement | Where satisfied |
|---|---|---|
| R-NAV-1 | Autonomous take-off, area search, return-to-home in a GPS-fenced zone | ArduPilot AUTO + fence via sahyog-air |
| R-NAV-2 | Lawn-mower/grid/spiral search, pre-loaded or dynamically planned; no manual flight input | `planner/lawnmower.py` |
| R-NAV-3 | Obstacle avoidance (poles, debris, netting) with onboard sensors | ArduPilot BendyRuler + TF-Luna proximity |
| R-NAV-4 | Declared failsafes: GPS loss, low battery, link loss (hover/RTH/land) | §4.3 |
| R-DET-1 | Onboard detection of casualties (mannequins / ArUco / heat sources); operator does not steer the camera | `perception/` |
| R-DET-2 | Detection → GPS using drone pose **+ camera geometry** | `geo/geotag.py` |
| R-DET-3 | Coords + confidence + snapshot sent live to GCS | protocol §6 |
| R-HITL-1/2/3 | Operator explicitly confirms/rejects each case; **no release without a target-specific logged confirmation**; interface demonstrable | 3-layer interlock §4.1 + console |
| R-DROP-1 | Reposition and drop within ~1.5 m after confirmation | drop FSM + visual terminal guidance |
| R-RTH-1 | Safe return/landing after the mission or on failsafe | RTL state |
| R-REP-1 | Auto-generated mission summary (map, coords, timestamps, drop status, payload log) | `gcs/report` |
| R-LOG-1 | Timestamped log of every autonomous decision (judged/auditable) | hash-chained audit log |
| R-HW-1..5 | Multirotor; FC (ArduPilot/PX4) + companion; GPS (RTK preferred), RGB (+thermal bonus), obstacle sensors; telemetry + video link; **fail-safe** release, 250 g–1 kg payload | §7, §9 |
| R-SAFE-1 | Geofence; safety pilot kill switch always; prop guards near people | §4 |
| R-METRIC | Detection %, false positives, geotag error m, drop error m, mission time, safety compliance | `sim/eval` + report |

### 1.2 Customer-derived requirements (v2+, from Part B; hypotheses to validate in customer discovery §27)
| ID | Requirement | Why (user) |
|---|---|---|
| C-OFF-1 | Fully offline operation (no internet, no cloud), offline maps | disaster zones lose connectivity; defence data sovereignty |
| C-SEC-1 | Encrypted, authenticated datalinks; signed firmware; no telemetry leaves the device | Army/MoD cyber posture |
| C-IND-1 | No Chinese-origin components in the deliverable defence variant; high indigenous content | MoD/Army procurement posture (verify current guidance, §24.4) |
| C-GNSS-1 | Operate with GNSS degraded/denied (jamming in border areas); NavIC support | Army ops near borders |
| C-ENV-1 | Rain (IP rating), −10…+50 °C, high altitude (3,500–5,500 m density altitude), wind ≥10 m/s | floods, Himalaya, Ladakh |
| C-INT-1 | Interoperable with drones the agencies already own (vendor-agnostic MAVLink) | NDRF/SDRF have mixed fleets |
| C-AUD-1 | Every physical action human-authorised + tamper-evident logs | accountability, legal review, Army rules of engagement for any effect |
| C-TRN-1 | Operable after a ≤2-day training by non-engineers | NDRF/SDRF personnel reality |
| C-DATA-1 | Export to agency formats (GeoJSON/KML/CSV; CAP alerts) | district EOC / NDMA systems integration |

---

## 2. SOLUTION CONCEPT & DIFFERENTIATORS

**One-line:** *Sahyog drones search, find and geotag casualties on their own, but cannot drop, deploy or release anything
until a named human authorises that specific action. The release hardware independently verifies that authorisation
cryptographically and logs it in a tamper-evident chain.*

1. **Defence-in-depth release interlock (3 independent layers):** (a) the companion ReleaseGate state machine; (b) an
   ESP32 release controller that verifies an **HMAC-signed, single-use, target-bound operator token** before actuating, so
   buggy or compromised companion software cannot release; (c) a physical remove-before-flight arming pin. Fail-locked
   servo latch (power loss ≠ drop), unlike fail-open electromagnets.
2. **Tamper-evident audit chain:** append-only JSONL, `hash = sha256(prev_hash + record)`, a verifier CLI, and the chain head printed in
   every mission report.
3. **Camera-geometry geotagging with multi-view fusion** and a per-casualty error estimate shown to the operator.
4. **Visual terminal guidance** for drops: sub-metre accuracy without RTK (RTK stays an upgrade).
5. **Operator console built for stressed, non-engineer users:** hold-to-confirm, large targets, colour + icon + text
   statuses, a one-click report.
6. **Deterministic SIL harness with ground truth:** reproducible metrics for every claim.
7. **Vehicle-agnostic:** ArduCopter / ArduRover / ArduSub (and PX4 via an adapter): drone → flood-rescue boat → UGV → ROV.
8. **Startup moat (Part B):** "trusted autonomy" = the authorisation layer + audit + interoperability, sold as software
   (Sahyog Command) and a bolt-on pod (Sahyog Pod) to fleets agencies already own. We are not trying to out-build drone OEMs on
   airframes.

---

## 3. SYSTEM ARCHITECTURE

```
                      ┌───────────────────────── AIRBORNE ──────────────────────────────────────────────────────────┐
   RC TX (safety  ──► │ RC RX ─► Flight Controller (ArduPilot)  ◄── GNSS (M10; RTK/NavIC later)                    │
   pilot, kill sw)    │              │ MAVLink (USB)                ◄── TF-Luna forward rangefinder                     │
                      │              ▼                                                                                 │
                      │  Raspberry Pi (companion) ── mavlink-router ── udp:14551 → sahyog-air                         │
                      │     │  sahyog-air (Python 3.11): fc_link · planner · perception · geotag · fusion ·          │
                      │     │                             mission FSM · ReleaseGate · audit · WS/HTTP API            │
                      │     ├── Pi Camera 3 Wide (CSI)   [M9: MLX90640 thermal (I2C)]                                 │
                      │     └── USB serial ─► ESP32 Release Controller ─► servo latch(es) ◄── ARM pin                │
                      └───────────────────────────────────────────────────────────────────────────────────────────────┘
                                         │ WiFi 2.4/5 GHz (v1) → encrypted COFDM/mesh radio (v2): WS 8765, MJPEG 8080, MAVLink 14550
                      ┌──────────────── GROUND ─────────────────────────────────────────────────────────────────────┐
                      │ sahyog-gcs (FastAPI :8000): signs operator decisions (HMAC), mirrors audit (SQLite), reports  │
                      │ sahyog-console (React + Leaflet): map · video · confirm/reject queue · drops · audit · report │
                      │ QGroundControl / Mission Planner: the safety pilot's view; sends the GCS heartbeat (sysid 255) │
                      └──────────────────────────────────────────────────────────────────────────────────────────────┘
SIL: ArduPilot SITL (WSL2) replaces the FC, PseudoCam replaces the camera, SimRelease (or the real ESP32 = HIL) replaces the pod.
```

**Casualty data flow:** frame → detector → pixel → geotag (pose interpolated at frame time) → fusion cluster → (≥N obs &
conf) → `confirm_request` (nonce) → operator HOLD-CONFIRM → gcs HMAC-signs → air verifies → drop queue → reposition →
descend → visual centring → settle check → `RELEASE …token` → ESP32 verifies HMAC + pin → servo → `RELEASED` → audit →
next → RTL → land → report.

---

## 4. SAFETY DESIGN (non-negotiable)

### 4.1 Release interlock (all must hold; any failure → no release + audit reason + console banner)
1. A confirmation for **this** `target_id` with `decision=="confirm"`, a valid HMAC, nonce = the one issued in that target's
   `confirm_request`, nonce **unused**, age ≤ `CONFIRM_TTL_S` (120). Expired → back to AWAITING with a new nonce.
2. State `DROP_SETTLE` for that target; horizontal distance ≤ `DROP_RADIUS_M` (0.8); ground speed ≤ 0.3 m/s for ≥ 2.0 s;
   |alt − `DROP_ALT_M`| ≤ 0.5.
3. Inside the fence, FC mode == GUIDED, GCS link alive within 3 s.
4. ESP32 independently verifies the token + ARM pin (no state-machine knowledge; crypto + pin only).
5. Each slot fires at most once per power cycle.

### 4.2 Keys
`SAHYOG_HMAC_KEY` = 32 random bytes (hex) from `tools/gen_key.py`. It lives in `.env` (git-ignored) for air/gcs and in
`release-fw/include/secrets.h` (git-ignored; `secrets.example.h` committed). The browser never sees the key. Operator name
regex `^[A-Za-z0-9_-]{1,24}$`. v2 replaces the shared HMAC with per-operator Ed25519 keys on hardware tokens (§23.2).

### 4.3 Declared failsafes (ArduPilot; verify every param name/value against the flashed firmware's docs and record the version)
| Event | Action | Implementation |
|---|---|---|
| RC loss | RTL | `FS_THR_ENABLE=1` |
| GCS heartbeat loss > 5 s | RTL | `FS_GCS_ENABLE=1`, `FS_GCS_TIMEOUT=5` (verify name) |
| Companion↔GCS WS loss > 3 s | drops paused; > 20 s → RTL | sahyog-air watchdog |
| Battery low / critical | RTL / LAND | `BATT_FS_LOW_ACT=2`, `BATT_FS_CRT_ACT=1`, voltages per pack |
| GPS/EKF failure | LAND | `FS_EKF_ACTION=1` |
| Fence breach | RTL | `FENCE_ENABLE=1`, `FENCE_TYPE=7`, `FENCE_ACTION=1`, `FENCE_ALT_MAX=30` |
| Companion crash | FC continues AUTO/RTL; no drop possible | inherent (ESP32 needs a token) |
| Safety-pilot kill | motor emergency stop | `RCx_OPTION=31`; `RCy_OPTION=4` (RTL) |
| Obstacle < 2.5 m | BendyRuler deviation; blocked > 5 s → hold → RTL | `OA_TYPE=1`, `AVOID_ENABLE=7`, `PRX1_TYPE=4` |

### 4.4 Physical safety (`docs/SAFETY.md`)
- **Props OFF for every bench/HIL test.** Motor tests only with props off and the frame restrained.
- LiPo: charge in a LiPo bag on a non-flammable surface, never unattended, never above 1C unless the pack is rated;
  storage charge 3.8 V/cell; a puffed pack is retired (dispose via an e-waste collector, not the bin).
- Flight: safety pilot on the RC with the kill switch, prop guards near people, a fire extinguisher/sand bucket, a first-aid kit,
  never over people/roads, airspace checked (§24.1) every session.
- Soldering: ventilation, safety glasses, a fume-free workspace; a smoke stopper or current-limited supply for every first power-up.

---

## 5. REPOSITORY LAYOUT (product monorepo)

Root: `C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\sahyog\` (new; `git init`; the private GitHub repo is created by the USER).
`seva-first\` stays as the read-only reference folder (PDFs).

```
sahyog/
  README.md  LICENSE (Proprietary — All rights reserved)  .gitignore  .env.example  pyproject.toml (uv; python ==3.11.*)
  .github/workflows/ci.yml            # uv + pytest + ruff; console build + vitest; pio build for release-fw
  air/sahyog_air/
    config.py  main.py  bus.py  audit.py  crypto.py
    fc/        link.py  pose_buffer.py  mission_upload.py  params.py  (link_px4.py in M11)
    planner/   lawnmower.py  estimate.py
    perception/ sources.py  aruco_det.py  yolo_det.py  thermal_det.py  pipeline.py  overlay.py
    geo/       wgs.py  frames.py  geotag.py  fusion.py
    mission/   states.py  fsm.py  release_gate.py  release_client.py  terminal_guidance.py
    api/       server.py  protocol.py          # protocol.py = SINGLE SOURCE OF TRUTH
  air/tests/
  gcs/sahyog_gcs/  main.py  air_client.py  signer.py  store.py  mock_air.py  report/{build.py,verify_chain.py}
  gcs/tests/
  console/         # Vite + React 18 + TS + Tailwind + react-leaflet + zustand; src/protocol.ts mirrors protocol.py
  release-fw/      # PlatformIO ESP32: platformio.ini, src/main.cpp, include/secrets.example.h, test/vectors.json
  sim/             wsl_setup.md  run_sitl.sh  params/sil_copter.parm  pseudocam/{arena.py,render.py}  scenarios/  eval/{run_batch.py,metrics.py}
  configs/         sil.yaml  bench.yaml  flight_dev.yaml  camera_<name>.yaml
  hw/              params/dev_drone.parm  wiring/  cad/  bom/{bom.csv,bom.md}  test-logs/
  tools/           gen_key.py  gen_aruco.py  calib_charuco.py  thrust_stand/  udev/99-sahyog.rules  systemd/
  docs/            SAFETY.md  CHECKLISTS.md  OPERATIONS.md  CALCULATIONS.md  LITERATURE.md  LAB.md  course/ (module notes M0–M12)
  company/         (Part B; layout in §33)
```

---

## 6. INTERFACES (single source of truth: `air/sahyog_air/api/protocol.py`)
WS JSON: `{"type": str, "ts": float(UTC s), "data": {...}}`. pydantic v2; mirrored by hand in `console/src/protocol.ts`.

**air → gcs** (`ws://<air>:8765/ws`):
- `hello` {air_version, mode: sil|bench|flight, vehicle, slots, camera:{w,h,hfov_deg}}
- `telemetry` 5 Hz {fc_mode, armed, lat, lon, alt_rel, heading, gs, vs, batt_v, batt_pct|null, gps_fix, sats, hdop, fc_link_ok, mission_state, wp_idx, wp_total, fence_ok, prox_min_m|null}
- `mission_plan` {fence[[lat,lon]], exclusions[{lat,lon,r}], waypoints[[lat,lon,alt]], home, est_time_s, swath_m}
- `detection` {target_id, source: aruco|yolo|thermal, label, conf, lat, lon, err_m, n_obs, snapshot, status}
- `confirm_request` {request_id(uuid4), target_id, nonce(32 hex), expires_at, lat, lon, conf, err_m, snapshot}
- `target_update` {target_id, status, reason|null}
- `drop_status` {target_id, slot|null, status: queued|repositioning|descending|centring|settling|released|aborted, detail|null, release_lat|null, release_lon|null, release_alt|null}
- `audit` {seq, event, payload, prev_hash, hash}
- `alert` {level: info|warn|critical, code, message}
- `mission_state` {state, prev, reason}

`TargetStatus` = CANDIDATE | AWAITING_CONFIRMATION | CONFIRMED | REJECTED | EXPIRED | DROP_QUEUED | DROPPED | DROP_ABORTED
`MissionState` = IDLE | PREFLIGHT | READY | TAKEOFF | SEARCH | SEARCH_DONE | DROP_REPOSITION | DROP_DESCEND | DROP_CENTRE | DROP_SETTLE | DROP_RELEASE | DROP_CLIMB | RTL | LANDED | ABORTED

**gcs → air:**
- `operator_decision` {request_id, target_id, decision: confirm|reject, operator, nonce, signed_at (STRING, `f"{t:.3f}"`), hmac = hex HMAC-SHA256(key, "request_id|target_id|nonce|decision|operator|signed_at")}
- `command` {cmd: plan_mission|start_mission|abort_drops|rtl|land|resume, args, operator, hmac over `cmd|json.dumps(args,sort_keys=True)|operator|ts`}
  `start_mission` is the only autonomy-start action; the operator never sends position/velocity setpoints.

**gcs REST (console ↔ gcs):** `GET /api/state` · `WS /ws/ui` (1:1 forward + `link` {air, latency_ms}) · `POST /api/login {operator}` ·
`POST /api/decision {request_id,target_id,decision}` (409 if unknown/expired/decided) · `POST /api/command` · `POST /api/plan
{fence_geojson, alt_m, overlap, speed_mps, drop_alt_m}` · `POST /api/report` → {pdf,json,csv,png urls} · `GET /api/audit/verify` → {ok,length,head_hash,first_bad_seq}.

**ESP32 serial** (USB CDC 115200 8N1, `\n`, ASCII):
`PING`→`PONG fw=1.0.0 slots=<n> armed=<0|1>` · `STATUS`→`STATUS armed=.. slots=.. used=<bitmask> uptime=<ms>` ·
`RELEASE <slot> <target_id> <request_id> <nonce> <decision> <operator> <signed_at> <hmac>` → `RELEASED <slot> <target_id> t=<ms>` |
`DENY <slot> <NOT_ARMED|BAD_HMAC|SLOT_USED|BAD_SLOT|BAD_DECISION|MALFORMED|NONCE_REUSED>` · `TEST_SERVO <slot>` (only in the
BENCH_TEST build and only while disarmed) · async `EVT ARM_CHANGED armed=..`, `EVT BOOT fw=..`.
The ESP32 recomputes the HMAC over the identical string; air passes `signed_at` through untouched; it keeps the last 16 nonces.

---

## 7. COMPONENT BUILD SPECS

### 7.1 Toolchain
- Python: use **uv** with Python **3.11** (`uv python install 3.11`; the system Python 3.14 lacks wheels). Node v24 for the console.
- WSL2 for SITL: the USER runs `wsl --install -d Ubuntu-22.04` (admin), reboots, then sets `%UserProfile%\.wslconfig`:
  `[wsl2]\nnetworkingMode=mirrored\nmemory=8GB`, then `wsl --shutdown`. FALLBACK: Mission Planner's built-in Windows SITL (TCP 5760/5762).
- PlatformIO: `uv tool install platformio`. Drivers: CP210x/CH340 if Windows doesn't see the ESP32.
- Machine: i5-13420H, 15.6 GB RAM, RTX 3050 4 GB (CUDA usable for YOLO fine-tuning), ~107 GB free.

### 7.2 ArduPilot SITL (WSL Ubuntu 22.04)
```bash
sudo apt update && sudo apt install -y git python3-pip
git clone --recurse-submodules https://github.com/ArduPilot/ardupilot.git ~/ardupilot
cd ~/ardupilot && git checkout Copter-4.5 && git submodule update --init --recursive   # if missing: newest stable Copter-4.x
Tools/environment_install/install-prereqs-ubuntu.sh -y && . ~/.profile
./waf configure --board sitl && ./waf copter
```
`sim/run_sitl.sh`: `sim_vehicle.py -v ArduCopter -f quad -l 28.7501,77.1177,215,0 --add-param-file=<repo>/sim/params/sil_copter.parm --out=udp:127.0.0.1:14550 --out=udp:127.0.0.1:14551 --console --map "$@"`
(14550 = QGC/the safety-pilot view; 14551 = sahyog-air). `sil_copter.parm`: the §4.3 failsafes, `WPNAV_SPEED=500`, `RTL_ALT=1500`,
OA params, and GPS noise of about 0.5–1.0 m (find the names with `param show SIM_GPS*`; record them).

### 7.3 Core libraries (pure Python; unit-tested before integration)
- **`geo/wgs.py`**: R=6378137; `ned_to_lla(lat0,lon0,n,e)`: lat=lat0+deg(n/R), lon=lon0+deg(e/(R·cos lat0)); the inverse; `haversine_m`.
  Tests: round trip < 1e-6 m at 100 m; IGI→India Gate ≈ 13.5±0.2 km.
- **`geo/frames.py`**: `R_nb = Rz(yaw)Ry(pitch)Rx(roll)` (NED); down-camera mount `R_bc=[[0,-1,0],[1,0,0],[0,0,1]]` (columns = cam
  x,y,z in body FRD; image top = forward) × optional calibration rpy. Tests: zero attitude → centre ray (0,0,1); image-right → +E;
  image-up → +N; yaw 90° → image-right → +S.
- **`geo/geotag.py`** `pixel_to_ground(u,v,K,dist,pose,R_bc,ground_alt_rel=0)`: undistortPoints → ray_c=[x,y,1] →
  ray_n = R_nb·R_bc·ray_c → require h>1 and ray_n.z>0.05 → s=h/ray_n.z → (dn,de)=s·(ray_n.x, ray_n.y) → lat/lon. ArUco = the mean of
  its corners; YOLO = the box centre (lying casualty). Tests: centre pixel at 15 m → < 1 cm; a known 5 m N, 3 m E offset → < 2 cm, with and without 10° roll.
- **`fc/pose_buffer.py`**: deque(400) of PoseSample(t_mono, lat, lon, alt_rel, roll, pitch, yaw, vn, ve, vd); latest
  GLOBAL_POSITION_INT latched onto each ATTITUDE; `at(t)` linear interpolation (yaw unwrapped), None if > 100 ms outside. Message
  intervals via MAV_CMD_SET_MESSAGE_INTERVAL: ATTITUDE 20 ms, GLOBAL_POSITION_INT 100 ms, GPS_RAW_INT 200 ms, SYS_STATUS 500 ms,
  BATTERY_STATUS 1 s, DISTANCE_SENSOR 100 ms, SYSTEM_TIME 1 s. Frame timestamps: PseudoCam = the pose time; PiCam2 = SensorTimestamp
  (CLOCK_BOOTTIME ns) converted with the boottime−monotonic offset measured at startup.
- **`geo/fusion.py`**: key `aruco:<id>`; else the nearest same-class cluster within 3 m. `target_id`=`T01..`. Weighted mean (conf·cos
  off-nadir); `err_m = sqrt(sample_var/n + max(0.8,1.2·hdop)^2)`. AWAITING when n ≥ 4 and mean conf ≥ (yolo 0.55 / thermal 0.5 / aruco 0).
  The snapshot = the best crop at 2× context → `runs/<run_id>/snapshots/T01.jpg`.
- **`planner/lawnmower.py`**: local NED, shapely polygon inset by 4 m; swath = 2·alt·tan(min(hfov,vfov)/2)·(1−overlap);
  sweep along the minimum-rotated-rectangle long axis; boustrophedon starting nearest home. `estimate.py`: takeoff + path/speed + 3 s/turn + RTL.
  Test: 60×40 m, 15 m, HFOV 102° → full coverage on a sampled grid.
- **`audit.py`**: genesis prev = "0"*64; rec = {seq, ts_utc, ts_mono, event, payload, prev_hash}; hash = sha256(prev_hash +
  json.dumps(rec, sort_keys=True, separators=(",",":"))); write + fsync; publish. Events: MISSION_PLANNED, MISSION_STARTED, TAKEOFF,
  SEARCH_STARTED, DETECTION_RAW (aggregated every 2 s), TARGET_CREATED, CONFIRM_REQUESTED, OPERATOR_CONFIRMED, OPERATOR_REJECTED,
  CONFIRM_EXPIRED, CONFIRM_INVALID, DROP_QUEUED, DROP_REPOSITION, DROP_CENTRE_LOCK, DROP_SETTLED, RELEASE_COMMANDED, RELEASE_ACK,
  RELEASE_DENIED, DROP_ABORTED, FAILSAFE, MODE_CHANGE, GEOFENCE, LINK_LOST, LINK_RESTORED, RTL, LANDED, MISSION_ENDED.
  `verify_chain.py`: tampering line k → first_bad_seq == k.
- **`mission/release_gate.py`** (100% branch coverage): `issue_request(target_id)`, `accept_decision(msg)` (constant-time HMAC, nonce
  match, unused, unexpired), `can_release(target_id, ctx)` with ctx {mission_state, dist_m, gs_mps, settled_s, alt_err_m, in_fence,
  fc_mode, gcs_link_age_s, slot_available}, `mark_used`. One test per deny reason, plus replay, wrong-target HMAC, and expiry.

### 7.4 Perception
- `sources.py`: FrameSource.read() → (bgr, t_mono): PseudoCamSource, PiCam2Source (1280×960, 15 fps, AF locked to infinity
  `{"AfMode":0,"LensPosition":0.0}`), OpenCVSource (USB), VideoFileSource (replay with a pose log).
- `aruco_det.py`: `cv2.aruco.ArucoDetector(DICT_4X4_50)` (opencv-contrib ≥ 4.8); valid casualty IDs 0–19; others = decoys, logged.
- `yolo_det.py` (optional extra `[yolo]`): ultralytics yolo11n person class; on the Pi export to NCNN at 416; run every 3rd frame.
- `pipeline.py`: detect → `pose_buffer.at(t)` → geotag → fusion → publish; overlay → MJPEG (latest frame, ≤ 10 fps, 640×480, q70).
- Targets: laptop ≥ 15 fps; Pi 4 ArUco ≥ 8 fps, YOLO-NCNN ≥ 2 fps; Pi 5 about 2×.
- `tools/calib_charuco.py`: a 5×7 board, 30/22 mm, DICT_4X4_50, 25+ images → `configs/camera_<name>.yaml` (accept RMS < 0.8 px).

### 7.5 PseudoCam + arena
- `arena.py --seed --size 80x60 --res 0.02 --targets 4 --decoys 2 --obstacles 2`: a procedural grass/dirt/debris ortho (4000×3000), 0.8 m
  ArUco casualty markers + a top-down person-like sprite beside each, decoys (IDs 40–49, orange tarps), pole obstacles also written as
  2 m fence exclusion circles. `manifest.json` ground truth is **used only by `sim/eval`**; a CI grep test ensures `air/` never reads it.
- `render.py`: `R_cn=(R_nb·R_bc)^T`; `H_ne = K·[R_cn[:,0], R_cn[:,1], h·R_cn[:,2]]`; ortho→relative-NED affine
  `A=[[0,−s,N_max−N_d],[s,0,E_min−E_d],[0,0,1]]`; `frame = warpPerspective(ortho, H_ne·A, (w,h))`; then noise σ=4, motion blur ∝ speed,
  exposure ±15%. Test: nadir at 15 m over a target → ArUco geotag error < 0.3 m.

### 7.6 Mission FSM (10 Hz; each transition → `mission_state` + audit)
IDLE →(plan ok: fence + lawnmower uploaded)→ READY →(start)→ PREFLIGHT [fix≥3, sats≥8, hdop<1.5, batt≥60%, release PONG, camera
fps, gcs link] → TAKEOFF [GUIDED, arm, NAV_TAKEOFF] → SEARCH [AUTO] →(last item reached)→ SEARCH_DONE [hold up to 45 s for pending
decisions] → for each CONFIRMED target (nearest-neighbour order, free slot): DROP_REPOSITION (goto at search alt, < 1.5 m) →
DROP_DESCEND (6 m) → DROP_CENTRE (terminal guidance ≤ 20 s; else the fused estimate, logged) → DROP_SETTLE (gate ctx or 25 s timeout →
abort the target) → DROP_RELEASE (gate → ESP32 → ack ≤ 2 s) → DROP_CLIMB → … → RTL → LANDED → MISSION_ENDED → auto report.
An FC-initiated failsafe mode → FAILSAFE audit; stop commanding; track RTL/LAND. `drop_policy: after_search` (default) |
`immediate` (M10).
`fc/link.py` methods (COMMAND_ACK, 3 retries, 1 s timeout): `set_mode`, `arm`, `takeoff`, `goto` (SET_POSITION_TARGET_GLOBAL_INT,
GLOBAL_RELATIVE_ALT_INT, type_mask 0b110111111000), `upload_mission` (seq 0 home placeholder), `upload_fence` (MAV_MISSION_TYPE_FENCE
polygon inclusion + circle exclusions), `set_param`, `send_companion_heartbeat` (1 Hz MAV_TYPE_ONBOARD_CONTROLLER).

### 7.7 Terminal guidance
Re-acquire the target (ArUco ID, or the nearest box to its predicted pixel within 120 px) → geotag offset → goto at 2 Hz with offsets
clamped to 1 m per step → lock when |offset| < 0.3 m for 3 frames (`DROP_CENTRE_LOCK`). Ballistics: t=sqrt(2h/g) (6 m → 1.11 s);
drift ≤ 0.33 m at 0.3 m/s; drag is negligible for a dense 250–500 g packet at ≤ 3 m/s wind (justify in CALCULATIONS.md).

### 7.8 Release client
`SerialRelease(port)` (pyserial, reader thread, `ping/status/release`) and `SimRelease(slots)`, which uses the SAME `sahyog_air.crypto.verify`.
Auto-discover the port by ESP32 VID (CP210x 10C4:EA60, CH340 1A86:7523, native 303A:*) + `PONG`.

### 7.9 Flight-stack abstraction
All FC calls go through `fc/link.py`. A PX4 adapter (`link_px4.py`, M11) uses the same method names. Keep a PX4 SITL path as a stretch.

### 7.10 sahyog-gcs
FastAPI; `air_client` with backoff (0.5→5 s) + a 2 s ping latency; SQLite WAL tables audit/targets/requests/decisions/drops/telemetry(1 Hz)/runs;
`signer.py`; it serves `console/dist`. Report on MISSION_ENDED (< 10 s): `mission_summary.json`, `targets.csv`, `audit.jsonl`, `map.png`
(matplotlib: fence, track, waypoints, targets by status, release points, scale bar, N arrow; offline), `Mission_Report_<run>.pdf`
(reportlab: map, targets, the decision log with operator names, drops, failsafes, chain head + verification). `--test-operator` is
refused unless mode == sil.

### 7.11 sahyog-console
Patterns to reuse from the founder's repos (read-only references): `ai-healthcare platform/frontend/src/components/map/LiveTruckLayer.tsx`
(moving marker + trail), `yuvayodha-hack/frontend/src/lib/live/stream.ts` + `LiveProvider.tsx` (live provider),
`F-R-I-D-A-Y/shell/src/friday/useCore.ts` (WS reconnect/latency/confirm), `F-R-I-D-A-Y/shell/src/components/ConfirmPrompt.tsx`,
`next-signal bits/apps/web/src/components/run/StageRail.tsx` (a phase rail → mission states).
Layout: **TopBar** (state chip, timer, AIR/FC/GCS link pills, GPS, battery, armed, operator, RTL / LAND / ABORT DROPS with confirm dialogs,
the note "Motor kill = safety pilot RC switch") · **MapPanel 60%** (OSM tiles + an offline grid fallback; fence, exclusions, the planned path,
the flown track, a heading-rotated drone marker, target markers by status with err circles, release crosses) · **right 40%**: VideoPanel
(MJPEG `<img>` + reconnect + fps badge), **DetectionQueue** (AWAITING first: snapshot zoom, id, source, conf, lat/lon 6 dp, ±err,
n_obs, expiry countdown; **HOLD TO CONFIRM DROP** 1.5 s press-and-hold, no keyboard; **FALSE POSITIVE** + a 3 s "sure?"; decided
cards in a history list), DropTimeline stepper · **AuditTicker** (last 50 + a "verify chain" badge) · critical alerts as a full-width banner.
`/setup` (fence GeoJSON upload or lat,lon textarea; alt 15, overlap 0.3, speed 5, drop alt 6; Plan → path + ETA; Start requires
typing the operator name) · `/report`. Colour + icon + text for every status. vitest reducer tests.

### 7.12 Mock air
`gcs/sahyog_gcs/mock_air.py`: a WS on 8765 replaying a scripted mission + a test-pattern MJPEG; it verifies HMAC like air. It unblocks console work.

### 7.13 ESP32 release controller firmware
`platformio.ini`: env `bench` (`-DBENCH_TEST=1`) and `flight` (`=0`); board esp32dev (change if the founder's board is S3/C3);
lib `madhephaestus/ESP32Servo`. Pins: SERVO1 GPIO18, SERVO2 GPIO19, ARM_PIN GPIO27 (INPUT_PULLUP; pin inserted shorts to GND
= SAFE; removed = HIGH = ARMED), LED GPIO2, buzzer GPIO25. Servos on a **separate 5 V ≥2 A BEC**, common ground, 330 Ω on the signal.
Boot: LOCK (10°) for 500 ms then detach (fail-locked by geometry). RELEASE: attach → OPEN (100°) for 1200 ms → LOCK → detach. HMAC
via `mbedtls/md.h`, constant-time compare, key in `secrets.h` (`tools/gen_key.py --c-header`); a nonce ring of 16; a slot bitmask;
256-byte line limit; a 5 s task watchdog; brownout on. A shared test vector in `release-fw/test/vectors.json` and `air/tests/test_crypto.py`.

### 7.14 Release latch mechanics
A servo-pin hook latch: the payload hangs by a 3 mm paracord loop on a 2 mm steel pin through two guide eyes; the servo horn
withdraws the pin 8 mm. The load is perpendicular to the pin, so it cannot back-drive; with no power the pin stays (fail-locked). PLA/PETG print or
3 mm acrylic + M3 hardware. CAD in OnShape/FreeCAD → STL + a dimensioned PDF in `hw/cad/`. MG90S servo; 2 slots; mounted on M3 nylon standoffs under the battery
plate, with the payload below the CG.

### 7.15 Companion on the Pi
Pi OS Bookworm 64-bit (Lite for flight), user `sahyog`. FC via **USB** (`/dev/ttyACM0`; UART fallback: Pi 5 `dtparam=uart0=on` →
`/dev/ttyAMA0`, Pi 4 `enable_uart=1`+`dtoverlay=disable-bt`). venv `--system-site-packages` (picamera2 from apt) +
`opencv-contrib-python-headless`; assert `cv2.aruco.ArucoDetector`. mavlink-router (from source; meson/ninja) → udp 127.0.0.1:14551 (air) +
<laptop>:14550 (QGC); FALLBACK MAVProxy `--out` twice `--daemon`. udev symlinks `/dev/sahyog-fc`, `/dev/sahyog-release` (verify VIDs
with `udevadm info`). systemd `mavlink-router.service`, `sahyog-air.service` (Restart=always). Network: a GCS travel router;
laptop 192.168.50.10, Pi .20. Power: Pi on a 5 V 5 A (Pi 5) / 3 A (Pi 4) UBEC from flight LiPo; servos on a separate BEC; ESP32 on Pi USB.

---

## 8. THE BUILD COURSE — MODULES M0 → M12 (hardware-first; advance only when the gate passes)

Each module = **Learn** (what to understand; agents write the module note `docs/course/Mx.md` with concise
explanations, diagrams and 3–5 curated links to official docs) · **Build** (step-by-step) · **Agent tasks** ([A]) vs
**Founder tasks** ([F] — hands-on, purchases, safety-critical) · **Gate** (measurable; record evidence in
`hw/test-logs/Mx_<date>.md` with photos/videos/log files). Indicative pacing is ~1 module per 1–2 weeks alongside college.
These are not deadlines.

### M0 — Lab setup & electronics fundamentals (week 1)
- Learn: Ohm's law in power paths, wire gauge vs current (AWG table), connectors (XT60/XT30/JST-GH), LiPo chemistry (C-rating,
  internal resistance, storage voltage), soldering technique (tinning, joints, heat-shrink), multimeter use (continuity, DC V, A).
- [F] Record the exact models of the owned Arduino/ESP32/Pi in `docs/LAB.md` (silkscreen/`cat /proc/device-tree/model`).
- [F] Buy §9.1 + §9.2 (lab essentials + bench parts). Set up a workspace: a non-flammable mat, a LiPo bag, a ventilated soldering corner.
- [F] Exercises: solder 10 practice joints on perfboard; make 4 XT60 pigtails (12 AWG); measure the voltage drop on a pigtail at 2 A
  (with a load); build a "smoke stopper" (bulb or PTC in series) for first power-ups.
- [A] Write `docs/course/M0.md`, `docs/SAFETY.md`, `docs/LAB.md` (inventory table template), and `hw/bom/bom.csv` from §9.
- **Gate M0:** 4 pigtails pass a continuity + tug test; the photo log is in `hw/test-logs/`; the safety doc is read and signed (typed name) by every team member.

### M1 — Microcontroller actuation: the release controller on the bench
- Learn: PWM servos (50 Hz, 1–2 ms), separate servo power, ground loops, pull-ups, debouncing, serial protocols, HMAC basics.
- [A] Implement `release-fw` (§7.13) + `air/sahyog_air/crypto.py` + `tools/gen_key.py` + the shared test vectors; PlatformIO build in CI.
- [F] Wire the bench: ESP32 + MG90S + a 5 V BEC/adapter + an arm pin (a 2-pin header + jumper on a red lanyard) + LED. Props are irrelevant here.
- [F] Flash `pio run -e bench -t upload`; run `tools/release_bench.py` ([A] writes it: an interactive CLI that sends PING/STATUS and signed
  RELEASE commands generated with the real key).
- [A/F] Build latch v1 (§7.14): print or acrylic; calibrate LOCK/OPEN angles with TEST_SERVO.
- **Gate M1:** a video showing: pin in → `DENY NOT_ARMED`; forged HMAC → `BAD_HMAC`; replay → `NONCE_REUSED`/`SLOT_USED`; valid → the latch drops a
  250 g packet; HMAC parity Python==ESP32 on 3 vectors (serial transcript saved). Power off with the packet loaded for 10 min → no drop.

### M2 — Software-in-the-loop foundation (parallel to M1; agents do most of it)
- Learn: ArduPilot architecture (modes, EKF, failsafes, parameters), MAVLink messages, mission protocol, NED frames.
- [F] Install WSL2 (§7.1).
- [A] SITL (§7.2), core libs (§7.3) with tests, the PseudoCam/arena (§7.5), fc/link + mission upload + pose buffer, mock air (§7.12).
- [F] Fly SITL by hand in QGC/MAVProxy once (`mode guided; arm throttle; takeoff 10`), then read every failsafe param and explain it in
  `docs/course/M2.md` in your own words (learning check).
- **Gate M2:** `uv run pytest` green; a scripted pymavlink takeoff → square → land in SITL; the PseudoCam renders + ArUco geotag error < 0.3 m.

### M3 — End-to-end autonomy in simulation + console
- [A] Perception pipeline (§7.4), mission FSM (§7.6), terminal guidance (§7.7), release client (§7.8), gcs + report (§7.10), console (§7.11),
  sim eval harness (`sim/eval/run_batch.py`: the headless test-operator confirms valid targets, rejects decoys, and attempts 5 adversarial
  releases per run: no-confirm, wrong-target HMAC, replay, expired, link-down).
- [F] Operate a full SIL mission yourself from the console 3 times; write UX friction notes → issues.
- **Gate M3 (SIL batch, 10 seeds):** detection ≥ 90 %; false confirm-requests ≤ 1/run; mean geotag error ≤ 1.5 m; mean drop error ≤ 1.0 m;
  **unauthorised releases = 0 (hard fail)**; the report generates < 10 s; chain verify OK.

### M4 — Hardware-in-the-loop (HIL): real pod, simulated aircraft
- [F] Connect the M1 bench pod (ESP32 + latch) to the laptop; run the M3 SIL mission with `configs/bench.yaml` (real SerialRelease).
- **Gate M4:** across 5 SIL missions the physical latch releases only on genuine console confirmations with the pin removed; every DENY case
  reproduced; a video recorded. This is the first "investor/officer demo" asset.

### M5 — Companion computer bring-up (Pi + camera)
- Learn: Linux on SBCs, CSI cameras, camera intrinsics/distortion, calibration, latency.
- [F] Flash Pi OS; [A] write `tools/pi_setup.sh` (idempotent: packages, venv, udev, systemd units, mavlink-router build) and `docs/course/M5.md`.
- [F] Calibrate the camera (`tools/calib_charuco.py`); place 3 printed 0.8 m ArUco sheets on the ground; capture from a rooftop/stairwell (a known
  height measured with a tape) with the Pi held still; compare geotag (using a manually entered pose) vs tape-measured positions.
- **Gate M5:** calibration RMS < 0.8 px; ArUco ≥ 8 fps on the Pi; MJPEG in the console over WiFi < 400 ms glass-to-glass (measure by filming a
  stopwatch); static geotag error < 0.5 m at 6 m height.

### M6 — Dev drone build (airframe, power, propulsion)
- Learn: multirotor physics (thrust, T/W ≥ 2, disc loading), the motor KV/prop/voltage relationship, ESC protocols, power distribution, vibration.
- [F] Buy §9.3. [A] produce `hw/wiring/dev_drone_power.drawio(+png)`, `hw/wiring/signal.drawio(+png)`, a motor-order diagram for
  ArduPilot quad-X, and `docs/CHECKLISTS.md` (assembly, calibration, pre-flight, post-flight).
- [F] Build a **thrust stand** first ([A] `tools/thrust_stand/`: HX711 load cell + ESP32/Arduino firmware + a Python logger that plots thrust vs
  throttle vs current): measure one motor + 10×4.5 prop at 3S, **props on, on the stand only, clamped, people behind a shield**. Record the
  max thrust; compute T/W for the planned AUW.
- [F] Assemble the F450: motors, ESCs, PDB/power module, FC on damping, GPS mast forward, RC RX (iBUS), buzzer + safety switch. **No props.**
- **Gate M6:** the AUW (with the Pi pod + 250 g payload + battery) measured < 2,000 g; measured T/W ≥ 1.8; all solder joints inspected; the
  smoke-stopper first power-up passes; no component > 50 °C after a 2-min motor run at 50 % on the stand.

### M7 — Flight controller configuration & ground tests
- Learn: ArduPilot setup (frame class, accel/compass/radio/ESC calibration), flight modes, failsafes, arming checks, logs (.bin) and log review.
- [F] Flash ArduPilot (Mission Planner/QGC), perform the calibrations, load `hw/params/dev_drone.parm` ([A] writes it from §4.3 with verified names
  for the flashed version + battery monitor + the kill switch + modes STABILIZE / ALT_HOLD / LOITER / RTL / LAND).
- [F] Props-off tests: motor order/direction via the motor test; RC failsafe (switch the TX off → mode changes to RTL in the HUD); GCS failsafe (kill
  QGC → RTL); low-battery failsafe (raise `BATT_LOW_VOLT` temporarily above the actual voltage → RTL triggered; then restore); kill switch → motors stop.
- **Gate M7:** every failsafe triggers the declared action (screen-recorded); the kill switch stops the motors < 0.5 s (video at 60 fps, count frames);
  `pre-arm` passes with no overrides.

### M8 — First flights (safety pilot mandatory)
- Learn: the regulatory basics (§24.1), site survey, wind limits, flight planning, the crash-recovery mindset.
- [F] Location: an approved open ground (written DTU permission via the faculty mentor / a club; check the airspace colour on Digital Sky first).
  Sequence: hover at 2 m in STABILIZE (safety pilot) → ALT_HOLD → LOITER → a 5 m box → RTL test at 10 m → autotune (if stable) → a
  vibration check in the logs (VIBE < 30 m/s²; clipping 0).
- [F] Log review after every session ([A] writes `tools/logreview.py`: parse the .bin with pymavlink, plot VIBE, battery, attitude
  desired-vs-actual, GPS hdop/sats; output a one-page PDF).
- **Gate M8:** 10 flights without incident; LOITER position hold within ±1 m in calm air; RTL lands within 2 m of home; log PDFs archived.

### M9 — Integrated autonomy on the real aircraft
- [F] Mount the Pi pod + camera (nadir, vibration-isolated) + latch + TF-Luna (forward). [A] `configs/flight_dev.yaml`; obstacle params.
- Sequence: (1) camera-only data flight (log video + poses; replay offline through `VideoFileSource` → geotag accuracy vs tape-measured
  targets); (2) a search-only mission at 10–15 m with 3 printed targets + 1 decoy; (3) a full mission with drops of a 250 g sandbag packet;
  (4) obstacle test: a 3 m pole (PVC pipe on a stand) in the path → BendyRuler deviation.
- Thermal (stretch in this module): MLX90640 on I2C, a hotspot detector (> ambient + 8 °C blob), fused with RGB; a test with a warm-water bottle "casualty".
- **Gate M9:** the real mission reaches the INDRA metrics: detection ≥ 90 % of printed targets over 3 missions, geotag error ≤ 2.0 m, drop error
  ≤ 1.5 m, 0 unconfirmed releases, the report generated < 10 s after landing, and all failsafes still pass.

### M10 — Reliability & field realism
- Wind (fly at 5–8 m/s gusts, measure drop error), heat (afternoon sun), dust, 20 consecutive SIL runs + 5 real runs without a software
  failure, battery cycling logs, a spares kit, a 30-minute field-setup drill (the box → flying), the `drop_policy: immediate` option, an
  operator-training run with a non-engineer friend (time to competence; UX issues logged).
- **Gate M10:** a non-engineer completes a mission after ≤ 30 min of training using only `docs/OPERATIONS.md`; MTBF tracking started.

### M11 — Platform generalisation
- The PX4 adapter (`fc/link_px4.py`) + PX4 SITL; an ArduRover SITL mission on the same console (proves vehicle-agnostic);
  multi-vehicle support in the console (vehicle_id in every message — plan the protocol v2 migration with backward compatibility).
- **Gate M11:** the same console runs ArduCopter + ArduRover SITL simultaneously; the PX4 SITL search mission works.

### M12 — Productisation v1.0
- Security v1 (§23.2 items S1–S4), offline maps (MBTiles via a local tile server), the pod enclosure v1 (printed, IP54 target), a
  quick-release mount for third-party drones (ideaForge/Garuda-class patterns researched in §20), versioned releases, an operator
  manual, a 1-day training curriculum.
- **Gate M12 (v1.0 ship gate):** an external user (SDRF/NDRF/civil defence/NCC/Army contact, §27) watches or operates a live demo; written feedback
  captured; all M0–M11 gates still green in CI/regression.

---

## 9. LAB + BOM (Phase 1: ₹15k–40k). Prices are Oct 2026 Delhi estimates; verify in the market
Shops: Lajpat Rai Market (Chandni Chowk) for components/wire/tools/power; Nehru Place for networking; online fallbacks robu.in,
robokits.co.in, quartzcomponents.com, thingbits.in. Compare 2–3 shops; test motors/ESCs before paying; keep every bill (needed later for
the grant BOM and indigenous-content tracking).

### 9.1 Bench / M1 (~₹2.5k–4k)
2× MG90S servo (400) · 5 V 3 A UBEC (300) · breadboard, jumpers, 330 Ω, headers, a red RBF tag (350) · 3 mm paracord, an M3 kit, a 2 mm rod
(300) · latch print/acrylic (300–800) · ArUco A4×6 + A3 ChArUco prints (150) · Pi Camera Module 3 Wide (3,000–3,800; can wait until M5).

### 9.2 Lab essentials / M0 (~₹6k–9k)
A 60 W temperature-controlled soldering station (1,500–2,500) · a multimeter (800–1,500) · a large LiPo bag (400–700) · consumables: solder, flux, wick,
heat-shrink, 6× XT60 pairs, silicone wire 12/14/20/24 AWG, zip ties, Velcro, foam tape, M3 nylon standoffs (1,500–2,000) · helping
hands, hot glue, screwdrivers, stripper, flush cutter (1,200–1,800) · a smoke stopper (400).

### 9.3 Dev drone / M6 (~₹22k–27k)
F450 + PDB (800–1,200) · 4× A2212 1000 KV (1,800–2,400) · 4× 30 A ESC (1,800–2,400) · 10×4.5 props ×4 pairs + guards (600–1,000) ·
Pixhawk 2.4.8 clone + buzzer/switch/PM (5,500–7,500) · an M8N/M10 GPS + mast (1,500–2,500) · FlySky FS-i6X + iA6B (4,000–5,000) · a 3S
3300 mAh LiPo (2,300–2,800) · a B6 charger + 12 V 5 A PSU (2,000–2,800) · TF-Luna (2,000–2,800) · a 5 V 5 A UBEC for the Pi (500–900) · thrust
stand: a 5 kg load cell + HX711 + scrap wood (500).
**Phase-1 total ≈ ₹31k–40k.** Over budget? Drop the TF-Luna (use SIL exclusion zones until M9) and buy a single LiPo.
**Pi check:** Pi 4 (≥ 4 GB) OK; Pi 3 → ArUco/thermal only, or buy a Pi 5 4 GB (≈ ₹6–7.5k) when funds allow.
**Note on origin:** most of these parts are Chinese-origin clones. That is fine for learning/dev. The defence variant needs a separate
indigenised BOM (§23.4). Track the country of origin in `bom.csv` from day 1 (column `origin`).

### 9.4 Phase 2 lab (funded by grants/pilots; §15.4 tiers)
A bench PSU 30 V 5 A, a 2-ch 100 MHz scope, an 8-ch logic analyser, a 3D printer (Bambu A1 mini class), hot air rework, Pi 5 8 GB, a Matek H743 FC,
MLX90640, a 5 GHz travel router + a high-gain dongle, a second dev airframe (hexa, 2–4 kg class) for payload work, an RTK pair (when the drop
spec demands it).

---

## 10. TEAM (now) — recruit 1–2
| Role | Who | Responsibility |
|---|---|---|
| Founder · CEO/CTO · autonomy, software, console, operator | Harsh | architecture, all software, integration, customer discovery, fundraising |
| Safety pilot · airframe & power lead (co-founder candidate) | Recruit #1 (FPV/RC flyer; DTU ALTAIR/UAS-DTU junior ideal) | RC override, assembly, propulsion, LiPo ops, flight test lead |
| Mechanical & payload · docs (optional) | Recruit #2 (ME/AE) | latch/pod CAD, enclosures, mounts, test documentation |
| Faculty mentor | ECE/AE faculty (founder chooses) | lab access, permissions, credibility for agency meetings |
[A] Draft `company/people/recruit_message.md` (6-line WhatsApp pitch) and `company/people/role_cards.md`. **The founder sends and decides.**
Equity/co-founder terms: §28.3.

---

## 11. CHECKLISTS (`docs/CHECKLISTS.md`, [A] drafts in M6, [F] validates in M7–M8)
1. Assembly (quad-X motor order/direction per the ArduPilot docs diagram; FC arrow forward on damping; GPS mast arrow forward, away from the PDB;
   iBUS → RCIN; our pod; cable management; weigh).
2. Calibration (firmware/version, frame class/type, accel 6-pos, compass + compass-motor, radio, ESC, modes + kill switch, failsafe param load,
   props-off motor test, battery monitor).
3. Pre-flight (props tight/direction, guards, battery V/%, sats ≥ 10, hdop < 1.2, fence on the map, kill switch tested, release pin INSERTED until
   walk-away, payload, link pills, new run_id, camera OK, wind < limit, airspace checked, people clear).
4. Post-flight (disarm, pin in, battery out, logs (.bin + runs/), report + chain verify, battery to storage, incident notes).

---

## 12. TEST GATES SUMMARY (CI + field)
CI (every push): ruff, pytest (air, gcs), vitest + build (console), `pio run` (release-fw), the grep test "air never reads manifest", the
SIL smoke (headless, 1 seed, nightly on the founder's machine if CI time is limited). Field gates = M-gates in §8. Never lower
thresholds without a founder decision recorded in `docs/DECISIONS.md` (ADR format, reusing the founder's ArchDecision habit).

---

## 13. RISKS (engineering)
| Risk | L | I | Mitigation |
|---|---|---|---|
| No legal flight site in Delhi | H | H | DTU permission via the mentor/club; netted sites; outskirts green zones on weekends; heavy SIL/HIL |
| A crash destroys the dev drone | M | M | spares budget, prop guards, a staged flight sequence, autotune only when stable |
| GPS error > drop radius | M | H | terminal guidance, fusion; RTK later |
| Pi too slow | M | M | ArUco-first, YOLO decimated, NCNN; Pi 5 upgrade |
| WiFi range | M | M | a travel router + dongle; v2 COFDM/mesh radio (§23.3) |
| Solo bandwidth | H | M | recruit; agents for software; the gate discipline |
| LiPo fire | L | H | the §4.4 protocol |
| An accidental drop | L | Critical | the 3-layer interlock, fail-locked latch, pin-in until walk-away |

## 14. (reserved — earlier competition sprint removed by founder decision 25 Oct 2026)

## 15. DEEP RESEARCH — WHAT TO BUILD (engineering & career) → `docs/RESEARCH.md` ([A] verifies with URLs; mark `[UNVERIFIED]` otherwise)
15.1 **Why this first build:** it uses the founder's console/human-approval strengths and forces MAVLink, ArduPilot, camera geometry,
firmware, power electronics, RF and field testing. The autonomy stack is the reusable IP across ArduCopter/Rover/Sub.
15.2 **Skill ladder (12 months):** drones (M0–M10) → ROS 2 + MAVROS + Gazebo Harmonic + EKF/VO basics + PX4 (Jan–Mar 2027) →
ArduSub, waterproofing, MS5837 depth, tether comms (Apr–Jun 2027) → ArduRover/Nav2, lane/sign perception, LiDAR SLAM (Jul–Dec 2027).
15.3 **Industry map to research** (funding, products, customers, hiring): drones — ideaForge, Garuda Aerospace, Asteria, Throttle,
TechEagle, Skye Air, Marut, Dhaksha, NewSpace Research & Technologies; underwater — NIOT, Planys, Sagar Defence, EyeROV; ground
autonomy — Swaayatt, Minus Zero, Flux Auto, Ati Motors, Ottonomy; open-source — ArduPilot (GSoC), PX4, MAVSDK, QGC, ROS 2.
15.4 **Lab tiers:** T1 §9.1–9.3; T2 §9.4; T3 (team) RTK base, Jetson Orin Nano, radiometric thermal, SDR, a water tank.
15.5 **Competitions as validation (optional):** NIDAR, the DTU SEVA FIRST INDRA track, Inter-IIT drone PS, SAE AeroTHON, ISRO IRoC-U, SAUVC,
RoboSub, IGVC; DTU teams UAS-DTU, ALTAIR, DTU-AUV (lab access + mentors).

## 16–18. (merged into §8 and §34)

---
---

# PART B — THE COMPANY

## 19. THESIS

**Problem.** In Indian disasters (floods, landslides, building collapses, avalanches, cyclones), responders lose the golden hours to
*finding* people and *getting first supplies to them*. Drones are now common in NDRF/SDRF/Army inventories, but they are flown
manually, one pilot per drone, from vendor-locked apps, and they produce video, not decisions. Autonomy exists, but agencies cannot
adopt autonomous physical actions (drops, deployments) without **accountability**: who authorised it, on what evidence, provably.

**Insight.** The bottleneck to adopting autonomy in Indian public-safety and defence is not the airframe. It is **trust**: provable human
authorisation, auditability, interoperability with existing fleets, offline operation, and data sovereignty.

**Product.** A **Trusted-Autonomy layer**:
- **Sahyog Command**: offline-first, multi-vehicle command & control software for disaster cells and Army units. Autonomous search plans,
  casualty geotag fusion, a human-authorisation workflow, tamper-evident logs, auto reports, and export to agency formats.
- **Sahyog Pod**: a bolt-on companion + sensing + certified-safe release module that turns MAVLink drones agencies already own into
  autonomous scout-and-deliver assets.
- **Sahyog Scout** (later, optionally with an OEM partner): an integrated reference aircraft.

**Why now (verify each in §20 research):** the drone import ban + PLI push domestic supply; Army/MoD indigenisation and
iDEX/ADITI challenge routes fund startups; the NDMA/NDRF modernisation and the state SDRF drone adoption; repeated high-casualty floods and
landslides (e.g. Himachal/Uttarakhand monsoons, Wayanad 2024, Delhi Yamuna 2023); and responsible-AI expectations for any autonomy.

**Positioning & ethics (fixed):** Sahyog builds **non-lethal** systems only: search, ISR in support of rescue, casualty
location, relief/medical delivery, communications relay deployment, logistics. No weapon integration, no targeting of persons, no
munition-release capability. The authorisation layer is a safety technology. Written into the company charter (`company/legal/charter.md`)
and into every agreement. This also simplifies export and liability.

## 20. CUSTOMERS, USERS, BUYERS (map them precisely; [A] research with citations into `company/market/customer_map.md`)

| Segment | Units/users | Buyer / budget route (verify) | Primary pains (hypotheses) | Priority |
|---|---|---|---|---|
| NDRF | battalions across states; drone teams | MHA → NDRF HQ procurement; GeM | mixed fleets, manual flying, reporting burden | P1 |
| SDRF (state) | per-state forces (e.g. Uttarakhand, Himachal, Kerala, Assam, Bihar) | State DM department / SDMA; SDRF/SDMF funds; GeM/state tenders | flood/landslide search; no autonomy; budgets via disaster funds | **P1 (beachhead)** |
| District DM authorities (DDMA) / district EOCs | ~780 districts | Collector/DM; district/state disaster funds; CSR | situational awareness, last-mile supply | P2 |
| Indian Army — HADR roles, engineer & infantry units in flood/avalanche/landslide zones; high-altitude logistics | formations in Northern/Eastern commands | Army Design Bureau; iDEX/ADITI; emergency procurement; capital/revenue routes under DAP (verify) | avalanche/landslide search; last-mile logistics at altitude; GNSS jamming | **P1 (strategic)** |
| ITBP / BRO / Assam Rifles | Himalayan posts, road-clearing ops | MHA/MoD routes | landslide-buried vehicles; supply to posts | P2 |
| Coast Guard / Navy (flood HADR), fire services, civil defence, NCC | — | various | flood rescue, urban fires | P3 |
| Drone OEMs/service providers (as channel partners) | ideaForge, Garuda, etc. | partnership/licensing | lack of autonomy/authorisation software; offer Sahyog Command as an OEM add-on | P2 (channel) |
| NGOs / CSR (Tata Trusts, Goonj, Red Cross India) | — | CSR grants | relief logistics | P3 (pilot funding) |

**Beachhead decision:** **one hill-state SDRF** (start with **Uttarakhand or Himachal Pradesh**; landslide + flood + high altitude; frequent
disasters; reachable from Delhi) + **one Army HADR/avalanche use case via iDEX**. Choose the specific state after 10 interviews (§27).

## 21. USE CASES (prioritised; each becomes a demo script + spec sheet in `company/product/use_cases/`)
1. **UC1 Flood scout & relief drop (v1):** search a flooded area, geotag stranded people (rooftops), drop lifejacket/medical/food packets
   after authorisation. The INDRA spec = the v1 acceptance test.
2. **UC2 Landslide/collapse survey:** a rapid ortho map + thermal search of debris; geotag; a ground team routing export (KML/GeoJSON).
3. **UC3 Avalanche victim search (Army/ITBP):** sweep the avalanche debris with a **457 kHz avalanche-transceiver receiver** payload + thermal;
   geotag the signal maximum; guide the probe teams. The research task must verify the feasibility and existing products (some exist abroad); the Indian
   high-altitude context is the differentiator. A v2 payload.
4. **UC4 Comms-relay deployment:** drop/land a mesh radio node or hover as a relay for cut-off teams (authorised deployment).
5. **UC5 High-altitude last-mile logistics (Army):** autonomous resupply to posts with authorised release; this needs a heavier airframe → partner with an OEM.
6. **UC6 Mass-casualty triage support:** multi-drone search with the casualty list exported to the medical command.

## 22. PRODUCT LINE & ROADMAP
| Version | When (target) | Scope | Proof |
|---|---|---|---|
| v0.x (course) | Nov 2026 – Feb 2027 | M0–M10 on the dev drone; INDRA spec met | gate logs, videos, reports |
| **v1.0** Sahyog Command + Pod (dev) | Mar 2027 | M11–M12: multi-vehicle, PX4/ArduPilot, offline maps, security v1, enclosure, manual, training | first external demo (SDRF/Army) |
| v1.5 Thermal + UC2 mapping | Jun 2027 | MLX→a radiometric thermal (FLIR Lepton-class or an Indian alternative), ortho mapping (OpenDroneMap integration), KML/CAP exports | a field pilot with one SDRF |
| v2.0 Defence-grade Pod | Dec 2027 | §23 security/comms/GNSS-denied/environment; the indigenised BOM; IP54; −10…+50 °C; trials | iDEX/Army user evaluation |
| v2.5 Avalanche payload (UC3) | 2028 | 457 kHz receiver + search pattern + thermal fusion | a trial with an Army/ITBP unit |
| v3 Scout aircraft (with an OEM or in-house, QCI type-certified) | 2028+ | integrated airframe for UC1/UC5 | certification + an order |

**Commercial model (hypotheses to test):** Sahyog Command = an annual licence per unit/district (on-prem) + training; Pod = a hardware sale +
an annual support contract; Defence = development contracts via iDEX/ADITI → a production order; OEM channel = a per-unit licence royalty.

## 23. DEFENCE-GRADE ENGINEERING ROADMAP (v2) — each item gets a spec doc in `company/engineering/defence/` ([A] research + draft; [F] decides)
### 23.1 Requirements engineering & documentation
Adopt lightweight systems-engineering discipline now: requirement IDs (as in §1), traceability matrix (requirement → design → test → evidence),
configuration management (git tags = baselines, BOM revisions), a change log, FMEA for the pod and release chain, a safety case (GSN-style
argument: "no unauthorised release"), test reports in a standard template. Army/DRDO evaluators expect this. It is cheap to start early.

### 23.2 Security (S-items)
- S1 Per-operator **Ed25519** signing keys on hardware tokens (e.g. a YubiKey/Indian alternative; research), replacing the shared HMAC; the pod verifies
  signatures (an ESP32-S3 with secure boot + flash encryption, or a dedicated secure element ATECC608/Indian alternative).
- S2 Encrypted, authenticated links: WireGuard between GCS ↔ companion (v1.5); MAVLink 2 message signing enabled on the FC link.
- S3 Signed releases: companion OS image + app signed; the pod firmware with **ESP32 secure boot v2 + flash encryption**; an SBOM per release
  (CycloneDX) + dependency vulnerability scanning in CI.
- S4 Data sovereignty: no cloud dependency; all data on-prem; an export-control/data-handling policy; logs encrypted at rest (age/libsodium).
- S5 Hardening: read-only root FS on the companion, minimal services, no default passwords, audit of open ports; a pen-test checklist; follow
  CERT-In guidelines and verify any MoD/Army-specific cyber requirements via research.

### 23.3 Communications
Phase out consumer WiFi: evaluate (a) Indian-made software-defined/COFDM/mesh radios (research Indian vendors), (b) OTS mesh radios with Indian
availability; frequency-band legality (WPC licensing; defence users have their own allocations: research how a startup demos under
them); link budget and range tests to 2–5 km; video H.264/H.265 low-latency streaming (GStreamer) instead of MJPEG.

### 23.4 Indigenisation & supply chain
- A BOM with an `origin` column from day 1; a target indigenous content (IC) per the DAP category relevant to the route (verify the exact percentages
  in DAP 2020 and later amendments).
- **Avoid Chinese-origin components in the defence variant** (research the current MoD/Army guidance on Chinese components in drones and cite it).
- Key indigenisation projects for an ECE founder: **(1) design our own Pixhawk-standard FC** (open FMUv6 reference: STM32H7, IMUs,
  barometer) manufactured in India; this is a great ECE project and differentiator. **(2)** own ESC/power module later. **(3)** NavIC-capable
  GNSS (research modules supporting NavIC L5/S). **(4)** source motors/props/frames from Indian manufacturers (research a list).
- Supplier qualification file per part: datasheet, origin, alternate source, lead time.

### 23.5 Navigation resilience
GNSS-degraded/denied: multi-constellation incl. NavIC; spoofing/jamming detection (C/N0 and position-jump monitors, a GNSS vs IMU/visual
consistency check); visual-inertial odometry or optical flow (+ rangefinder) for return-home without GNSS; terrain-relative navigation research;
a safe behaviour policy on GNSS loss (hold → land, or VIO-RTL when validated).

### 23.6 Environment & qualification
Targets: IP54 pod (rain), −10…+50 °C operation, high-altitude density-altitude tests (prop/motor re-selection), wind ≥ 10 m/s, vibration;
standards to research for Indian defence evaluation (e.g. JSS 55555 environmental testing, MIL-STD-810/461 equivalents; verify which apply);
EMI/EMC basic self-tests; cold-weather LiPo strategy (insulation/heating, Li-ion alternatives).

### 23.7 Reliability
MTBF tracking from M10, flight-hour logging per component, a failure-reporting (FRACAS) sheet, burn-in for pods, spares policy.

## 24. COMPLIANCE & CERTIFICATION ([A] research each with official citations → `company/compliance/`; [F] acts)
24.1 **DGCA Drone Rules 2021 + amendments**: categories (nano/micro/small/medium/large), Digital Sky registration/UIN, the remote pilot
certificate requirements, the airspace map (green/yellow/red), operations near people, R&D exemptions for startups/educational institutions
(verify), penalties. Output: `company/compliance/dgca_checklist.md`, with what the founder must do before any outdoor flight.
24.2 **Type certification (QCI drone certification scheme)** for a product aircraft (v3) — the process, costs, timelines, certified test labs.
24.3 **WPC/DoT**: delicensed band limits for WiFi/ISM; ETA certification for radio equipment sold; licensing for other bands.
24.4 **Defence-specific**: DAP 2020 (+ amendments) categories, the IC definition, startup provisions; current guidance on Chinese components;
security clearance/vetting expectations for vendors; DGQA/user-trial process; export control (SCOMET) if ever exporting.
24.5 **Data/privacy**: the DPDP Act 2023 (imagery of people: consent, retention); a data-retention policy for mission imagery.
24.6 **Product liability & insurance**: drone third-party insurance (mandatory?) and product liability; disclaimers in pilot agreements.
24.7 **Battery transport** (LiPo shipping/air travel rules) for field deployments.

## 25. ROUTES INTO THE ARMY & DISASTER MANAGEMENT ([A] research → `company/gtm/routes.md`, with eligibility, amounts, timelines, how to apply, contacts)
25.1 **iDEX (MoD Defence Innovation Organisation):** DISC challenges + Open Challenges; the SPARK grant (research the current ceiling; historically up to
₹1.5 Cr), iDEX Prime, **ADITI** (deep-tech; historically up to ₹25 Cr). Action: monitor live challenges from the Army/Navy/BRO/Coast Guard
matching UC1–UC5; prepare a reusable application pack (§26.3).
25.2 **Army Design Bureau (ADB):** problem definition statements, the industry-academia interface, the Army technology seminars/exhibitions;
register on the ADB portal (research); attend the demos.
25.3 **DRDO Technology Development Fund (TDF):** projects for MSMEs/startups (research the ceiling and the current calls).
25.4 **Make-II / Make-I** under DAP; **emergency procurement** windows; **GeM** listing for products (startups have relaxations on
experience/turnover; verify).
25.5 **NDMA/NDRF/SDMA:** NDRF HQ technology cells, SDRF commandants, state DM departments; the state innovation challenges; disaster-mitigation
funds; district CSR. Approach: a demo first, a free pilot second, then a paid pilot via a state tender/GeM.
25.6 **Competitions & demos as door-openers:** NIDAR (MeitY/DFI), DTU SEVA FIRST INDRA, Army/defence drone competitions (research current
editions), Drone Federation India events, Aero India / DefExpo startup pavilions, state disaster-management expos.
25.7 **Networking ladder:** DTU faculty mentor → DTU incubator → alumni in the Army/defence startups → ADB/iDEX officers at events → unit-level
demos (via NCC/alumni) → formation HQ. Every meeting is logged in a CRM (§27.4).

## 26. FUNDING PLAN (research the current rules; amounts below are "as last known — verify")
26.1 **Non-dilutive first:** DTU incubator/innovation foundation programmes (research the exact name and calls); **Startup India Seed Fund Scheme**
(via incubators; historically up to ₹20 L PoC grant); DST **NIDHI-PRAYAS** (prototype grant; historically up to ₹10 L); MeitY
**TIDE 2.0 / SAMRIDH**; **Atal Innovation Mission** challenges; Delhi government startup policy grants; iDEX SPARK (above); DRDO TDF;
hackathon/competition prizes.
26.2 **Dilutive (later, after a pilot/LOI):** defence/deep-tech-focused Indian VCs and angels (research a list with portfolio fit; e.g.
funds that have backed drone/defence startups), angel networks (Indian Angel Network, LetsVenture, etc.; verify).
26.3 **Application pack (reusable, [A] drafts in `company/fundraising/`):** a 1-page summary, a 12-slide deck, a technical note (from Part A), the
budget + milestones (from §31), team bios, IP status, letters (mentor, incubator, user LOIs), demo video links, a risk register.
26.4 Budget asks per stage: Stage 1 (₹10–25 L): Phase-2 lab, 2 dev aircraft, thermal, radios, 2 interns, field trials, travel to hill states.
Stage 2 (₹50 L–1.5 Cr, via iDEX SPARK/TDF): the defence-grade pod v2, the own FC, qualification tests, a 3–5 person team.

## 27. GO-TO-MARKET & CUSTOMER DISCOVERY
27.1 **Discovery goal (next 3 months):** 15 interviews: 5 NDRF/SDRF personnel, 3 district DM/EOC officials, 4 Army/ex-Army (HADR/avalanche/logistics
experience, incl. veterans), 3 drone operators/OEM people. [A] Draft `company/gtm/interview_guide.md` (Mom-Test style: past behaviour,
current workflow, last incident, tools used, who approves drops, how reports are made, budget owner, procurement path; no pitching in the first 70%).
27.2 **Target list** [A]: `company/gtm/targets.csv` (org, unit, role, location, public contact route, warm-intro path, status). Only publicly
listed official contacts; no scraping of personal data. The founder makes the contacts.
27.3 **Demo kit:** the M4 HIL video, the M9 field video, a 2-page spec sheet, an "authorisation interlock" one-pager, a live demo flow (15 min).
27.4 **CRM:** a simple Supabase table or a Notion/CSV (the founder already uses Supabase — reuse `monitoring-agent` patterns as an internal CRM:
competitions/stages ↔ opportunities/stages). [A] can scaffold it on the founder's request.
27.5 **Pilot design:** a 2-week free pilot with one SDRF: a training day, 3 drills, metrics (time-to-find vs manual, report time, operator
workload via NASA-TLX), a written evaluation letter. → Conversion to a paid pilot.
27.6 **Pricing hypotheses** (validate): Command licence ₹2–5 L/yr per unit; Pod ₹1.5–3 L per unit; training ₹50k/batch; defence development
contracts per iDEX terms. [A] builds a comparison with public tender prices of drones on GeM (research).

## 28. COMPANY FORMATION, LEGAL & IP ([A] research + checklists; [F] executes with professionals)
28.1 **When:** incorporate when (a) a co-founder is committed and (b) the first grant/incubator requires an entity (likely M8–M12 timeframe). Until then,
operate as a DTU student project with the incubator.
28.2 **Entity:** a Private Limited Company (needed for iDEX/DPIIT/VC); **DPIIT Startup India recognition**; MSME/Udyam registration; GST when
revenue starts; a bank account; a registered office (incubator address).
28.3 **Founders' agreement:** equity split, vesting (4 years, 1-year cliff), IP assignment to the company, roles, decision rights, exit/leaver
clauses. The founder chooses the terms with a lawyer; [A] provides a term-sheet checklist only (no legal advice).
28.4 **University IP:** check DTU's IP policy for student work done with university resources/faculty (research; ask the incubator). Keep
a clean record of what was built on personal hardware/time.
28.5 **IP strategy:** (1) **provisional patent application** on the "independently verifying, target-bound cryptographic authorisation interlock
for autonomous payload release with tamper-evident audit" (research prior art first: `company/ip/prior_art.md`; file via a patent agent;
the startup fee concessions under the Startups Intellectual Property Protection scheme, verify). (2) Trade secrets for fusion/terminal-guidance
tuning. (3) **Trademark "Sahyog"**: it is a common Hindi word, so expect existing marks. [A] runs a public-search procedure in IP India
(classes 9, 12, 42, 45) and reports conflicts; the founder keeps the name per decision and files with a distinctive logo/compound mark
(e.g. "Sahyog Autonomy") if an attorney advises.
28.6 **Open-source policy:** the core stays proprietary; publish an SDK/protocol spec later for OEM integration; contribute fixes upstream to ArduPilot
(goodwill + hiring signal).

## 29. ORGANISATION & HIRING (24 months)
Phase 1 (now–Mar 2027): founder + safety pilot/airframe co-founder + 1 mech intern. Phase 2 (Apr–Dec 2027, funded): +embedded/RF engineer,
+perception engineer, +field ops lead (ideally an ex-Army/NDRF veteran: credibility + user empathy), +advisors (a retired Army officer from
engineers/aviation, a disaster-management expert, a drone-certification expert). Use DTU's talent (ALTAIR, UAS-DTU, DTU-AUV members) for internships.

## 30. FINANCIAL MODEL ([A] builds `company/finance/model.xlsx` with openpyxl; every assumption in a labelled, editable input sheet)
Sheets: Inputs (prices, volumes, costs, salaries, grant timing: all flagged as assumptions), BOM costs (dev vs defence variant), Unit
economics (Pod, Command licence, training), Burn & runway (monthly, 24 months), Funding scenarios (grant-only / grant + angel / iDEX), Use of funds.
Base-case targets to sanity-check (hypotheses, not promises): first paid pilot by Q4 2027; break-even not before year 3.

## 31. 24-MONTH ROADMAP (gated; dates are targets)
| Quarter | Engineering (Part A) | Company (Part B) | Exit criteria |
|---|---|---|---|
| Q4 2026 (Nov–Dec) | M0–M5 (lab, pod, SIL, HIL, companion) | recruit the co-founder; mentor; join the DTU incubator programme; customer-map research; 5 interviews | M4 HIL demo video; 5 interviews logged |
| Q1 2027 | M6–M9 (dev drone → integrated autonomy) | 10 more interviews; choose the beachhead state; first grant application (NIDHI-PRAYAS/SISF via incubator); prior-art search | M9 gate; 1 grant submitted |
| Q2 2027 | M10–M12 → **v1.0** | the first external demo to SDRF/Army; DPIIT + incorporation (if triggered); provisional patent; iDEX challenge watch + application | an evaluation letter or LOI |
| Q3 2027 | v1.5 thermal + mapping; own-FC design starts | a free field pilot with one SDRF; the Stage-1 funding close | a pilot report with metrics |
| Q4 2027 | v2.0 defence-grade pod (security, comms, indigenous BOM) | iDEX/TDF application; ADB engagement; the Army demo | a shortlist/selection |
| H1 2028 | v2.5 avalanche payload; qualification tests | the first paid pilot/contract; seed round if traction | revenue / contract |

## 32. KEY COMPANY RISKS
| Risk | Mitigation |
|---|---|
| Long defence sales cycles | the SDRF beachhead (faster); grants; the OEM channel licence revenue |
| Incumbent OEMs add similar features | a focus on interoperability + authorisation/audit as the core; patents; speed; user intimacy |
| Regulatory blocks on flying | partner with certified OEMs for flights; R&D exemptions; netted sites |
| Founder is a full-time student | a scope discipline (gates); a co-founder; incubator support; deferring incorporation until triggered |
| Credibility with officers | a veteran advisor, a faculty mentor, rigorous docs (§23.1), live demos > slides |
| Dual-use misuse concerns | the non-lethal charter, authorisation layer, audit; no weapon integration ever |

## 33. COMPANY DOCUMENT LAYOUT & AGENT TASKS (in `sahyog/company/`)
```
company/
  thesis.md                 # §19 expanded, 2 pages
  market/   customer_map.md  market_sizing.md (TAM/SAM/SOM with cited inputs)  competitors.md (Indian + global; feature matrix)
  product/  use_cases/UC1..UC6.md  spec_sheets/  roadmap.md
  engineering/defence/ requirements_traceability.xlsx  fmea_release_chain.xlsx  safety_case.md  security_S1-S5.md  comms_options.md
                       indigenisation_bom.xlsx  gnss_resilience.md  environmental_test_plan.md
  compliance/  dgca_checklist.md  qci_certification.md  wpc.md  dap_defence.md  dpdp.md  insurance.md
  gtm/       routes.md  interview_guide.md  targets.csv  demo_script.md  pilot_plan.md  pricing.md
  fundraising/ one_pager.md  deck/ (python-pptx build script + .pptx)  grant_pack/  budget.xlsx
  finance/   model.xlsx
  legal/     charter.md (non-lethal)  formation_checklist.md  founders_agreement_checklist.md  ip_policy_notes.md
  ip/        prior_art.md  trademark_search.md  invention_disclosure.md
  people/    recruit_message.md  role_cards.md  advisors_target_list.md
  log/       meetings.csv  decisions.md (ADR)
```
**Agent research rules for Part B:** every factual claim (scheme amounts, rules, statistics, org structures) needs a working URL to an official or
reputable source, with the access date; anything else is tagged `[UNVERIFIED]`. Never contact anyone, register anything, file anything or spend money.
Never collect personal data beyond officially published contact routes. Drafts end with a "Founder decisions needed" list.

**Part B task list ([A] unless marked):**
- B1 Customer map + market sizing + competitors (§20) · B2 Use-case specs UC1–UC6 (§21) · B3 Compliance pack (§24) · B4 Routes pack
  (§25) · B5 Funding pack + application template (§26) · B6 Interview guide + target list (§27) · B7 Legal/IP checklists + prior art +
  trademark search (§28) · B8 Financial model (§30) · B9 Defence engineering specs S1–S5, comms, indigenisation, GNSS, environment (§23) ·
  B10 Investor/officer deck (python-pptx; reuse the founder's `isro-hackathon/build_deck.py` pattern and the case-deck skill rubric in `gpt-auto/`) ·
  [F] B11 interviews · [F] B12 mentor + incubator · [F] B13 co-founder · [F] B14 grant submissions · [F] B15 demos.
Sequencing: B1, B3, B4, B6 first (they inform everything); B2/B9 after the M3 gate; B5/B8/B10 after 5 interviews; B7 before any public demo video
that reveals the interlock design (file the provisional patent before broad publicity; ask a patent agent about timing).

---

## 34. EXECUTOR RULES
1. Windows 11; PowerShell 5.1 (no `&&`) or Git Bash; Python via **uv 3.11 only**; quote paths (sibling repos contain spaces).
2. Never commit `.env`, `secrets.h`, `runs/`, model weights, or any personal data.
3. Commit after each task: `git commit -m "<task-id>: <summary>"` + the session's attribution line. The founder pushes.
4. Agents must NOT: create accounts, submit forms, send messages/emails, buy anything, contact people, file legal documents, or energise motors with
   props on. Flashing the ESP32/FC is allowed only when the founder has connected the hardware and said so in chat.
5. The founder's other repos are read-only references.
6. Every module ships with tests; every task report pastes the done-criteria evidence (test output, file list).
7. Uncertain external facts → verify in official docs; else `TODO(verify)` / `[UNVERIFIED]` and list them in the report.
8. `protocol.py` ↔ `protocol.ts` ↔ `mock_air.py` change together in one commit with tests.
9. `air/` never reads ground-truth manifests (a CI grep test).
10. Gate thresholds change only by a founder decision recorded in `docs/DECISIONS.md`.
11. Non-lethal charter: refuse and report any task that would add weapon/targeting functionality.

## 35. VERIFICATION (how the founder confirms progress end-to-end)
1. `cd WEB-DEV-PROJECTS/sahyog && uv run pytest -q` → green; `cd console && npm test && npm run build` → green; `pio run` → builds.
2. SIL: WSL `./sim/run_sitl.sh`; `uv run python -m sahyog_air.main --config configs/sil.yaml`; `uv run python -m sahyog_gcs.main --air ws://localhost:8765`
   → http://localhost:8000 → /setup → load `sim/scenarios/s42/fence.geojson` → Plan → Start → reject the decoy → hold-confirm the casualties → drops → RTL →
   the report opens → chain verify green.
3. `uv run python sim/eval/run_batch.py --runs 10` → `metrics.md` meets the M3 gate (unauthorised releases = 0).
4. HIL: the ESP32 pod plugged in, `configs/bench.yaml`, repeat step 2 → the latch moves only on a genuine confirm with the pin removed (M4).
5. Field: each M-gate's evidence file exists in `hw/test-logs/` with photos/videos/logs; M9 metrics are computed by the report from real flights.
6. Company: `company/` documents exist per §33 with citations; `log/meetings.csv` shows interviews; `decisions.md` records the founder decisions.
