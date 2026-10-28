# PARAKH ARENA — closing-hour UPGRADE plan (written 15:38 IST, 28 Sep 2026)

> Executor: one sequential executor. Every edit below is an exact find/replace against the current files. Don't redesign anything. Deadline: the upgrade engine must be live by **~15:50**. The arena closes 16:30; points snapshots land at 15:45, 16:00, 16:15, then live at 16:30.

## Context

- Nothing broke. `/ledger` points are a 15-minute snapshot (`points_as_of` = 14:45, 15:00, 15:15, 15:30 exactly). Our 116 hires (signed 15:15:08–15:18:02) first appeared in the 15:30 snapshot: **points 1042, credits_used 12031, score +440.45, rank 17 of 51** (agent `/market` log at 15:33, `leader_score` 1827.3).
- The user wants **top 10**. All 116 slots are full, so the only lever left is **upgrading weak hires**.
- Why upgrades pay: leader score 1827 on 116 slots means ≥ 15.75 points per hire. Our average is 8.98 at mean quality 0.468 (range 0.26–0.70). A shallow curve (points ≈ 12.2·(0.5 + 0.5q)) caps a hire at 12.2 points and can't produce the leader's score, so the real curve is steep: roughly proportional, about 19 points per unit of quality. Swapping a q ≈ 0.30 hire for a q ≈ 0.80 one gains ~9–10 points. A swap costs release 5 + offer 10 (20 in closing) + ~1.4 assessments (~35) + an occasional refresh ≈ 50–70 credits ≈ 2.5–3.5 points.
- Supply: only ~3,300 candidates are signed arena-wide. We've only read pages 0–10 of each role, so deeper pages are mostly unclaimed.
- Safety valve: the agent measures the real slope itself at each snapshot (Δpoints ÷ Σ Δquality of its swaps) and **stops upgrading automatically** if the slope is below `UPGRADE_MIN_SLOPE` (8). Worst-case loss before the 16:00 check is capped at ~40 swaps × 3.5 ≈ 140 points.

## 1. `arena/config.json`: replace the whole file

```json
{
  "PENALTY_FACTOR": 0.05,
  "POINTS_PER_HIRE": 10,
  "LOOP_SECONDS": 10,
  "MARKET_EVERY_SECONDS": 300,
  "HEARTBEAT_LOG_SECONDS": 120,
  "PAGES_PER_RESTOCK": 5,
  "MAX_PAGES_PER_REQ": 400,
  "BATCH_TOP_PER_RESTOCK": 50,
  "BATCH_MIN_IDS": 30,
  "DRY_LIMIT": 6,
  "DRY_RESET_SECONDS": 600,
  "ASSESS_SKIP_MARGIN": 15,
  "ASSESS_ALWAYS": 1,
  "PROFILE_STALE_SECONDS": 180,
  "CLOSING_STALE_SECONDS": 60,
  "MIN_CREDITS_FLOOR": 200,
  "SPEND_CAP": 32000,
  "UPGRADE_ENABLED": 1,
  "UPGRADE_MAX_OLD_QUALITY": 0.55,
  "UPGRADE_MIN_NEW_QUALITY": 0.70,
  "UPGRADE_MIN_DELTA": 0.25,
  "UPGRADE_MIN_SELF_MARGIN": 12,
  "UPGRADE_MAX_SWAPS": 116,
  "UPGRADE_ASSESS_PER_PASS": 6,
  "UPGRADE_PAGES_PER_RESTOCK": 20,
  "UPGRADE_MIN_SLOPE": 8
}
```
(The running old agent ignores unknown keys, so writing this first is harmless.)

## 2. `arena/agent.py`: exact edits

### 2a. DEFAULTS: add the upgrade keys
Find:
```python
    "MIN_CREDITS_FLOOR": 200.0,
    "SPEND_CAP": 30000.0,
}
```
Replace with:
```python
    "MIN_CREDITS_FLOOR": 200.0,
    "SPEND_CAP": 30000.0,
    "UPGRADE_ENABLED": 0.0,
    "UPGRADE_MAX_OLD_QUALITY": 0.55,
    "UPGRADE_MIN_NEW_QUALITY": 0.70,
    "UPGRADE_MIN_DELTA": 0.25,
    "UPGRADE_MIN_SELF_MARGIN": 12.0,
    "UPGRADE_MAX_SWAPS": 116.0,
    "UPGRADE_ASSESS_PER_PASS": 6.0,
    "UPGRADE_PAGES_PER_RESTOCK": 20.0,
    "UPGRADE_MIN_SLOPE": 8.0,
}
```

### 2b. State: persist each hire's quality
Find:
```python
        self.next_page = {}     # req_id -> next search page
        self.dry_restocks = {}  # req_id -> consecutive restocks with nothing eligible

    def save(self):
        data = {"signed": self.signed, "signed_at": self.signed_at, "dead": sorted(self.dead),
                "person_keys": sorted(self.person_keys), "next_page": self.next_page,
                "dry_restocks": self.dry_restocks}
```
Replace with:
```python
        self.next_page = {}     # req_id -> next search page
        self.dry_restocks = {}  # req_id -> consecutive restocks with nothing eligible
        self.held_quality = {}  # candidate_id -> quality of a current hire (drives upgrades)

    def save(self):
        data = {"signed": self.signed, "signed_at": self.signed_at, "dead": sorted(self.dead),
                "person_keys": sorted(self.person_keys), "next_page": self.next_page,
                "dry_restocks": self.dry_restocks, "held_quality": self.held_quality}
```
Find:
```python
        self.dry_restocks = {k: int(v) for k, v in d.get("dry_restocks", {}).items()}
        log("checkpoint_loaded", signed=len(self.signed), dead=len(self.dead), next_page=self.next_page)
```
Replace with:
```python
        self.dry_restocks = {k: int(v) for k, v in d.get("dry_restocks", {}).items()}
        self.held_quality = {k: float(v) for k, v in d.get("held_quality", {}).items()}
        log("checkpoint_loaded", signed=len(self.signed), dead=len(self.dead), next_page=self.next_page)
```

### 2c. Agent.__init__: upgrade bookkeeping and backfill
Find:
```python
        self.stats = {"signed": 0, "rejected": 0, "assessed": 0, "assess_rejected": 0,
                      "restocks": 0, "refresh_rejected": 0}
```
Replace with:
```python
        self.stats = {"signed": 0, "rejected": 0, "assessed": 0, "assess_rejected": 0,
                      "restocks": 0, "refresh_rejected": 0, "upgrades": 0, "upgrade_offer_rejected": 0}
        self.swaps = 0
        self.swap_log = []          # (epoch, quality gained) per completed upgrade
        self.upgrade_off = False    # set when the measured points slope says upgrades don't pay
        self.prev_points = None
        self.prev_points_asof = None
        self.backfill_held_quality()

    def backfill_held_quality(self):
        """Quality of each current hire, recovered from signed/upgraded log lines when the checkpoint predates it."""
        if all(c in self.state.held_quality for c in self.state.signed):
            return
        try:
            with open(LOG_PATH, encoding="utf-8") as f:
                for line in f:
                    if '"event": "signed"' not in line and '"event": "upgraded"' not in line:
                        continue
                    try:
                        r = json.loads(line)
                    except ValueError:
                        continue
                    cid, q = r.get("cid"), r.get("quality")
                    if cid in self.state.signed and q is not None:
                        self.state.held_quality[cid] = float(q)
        except OSError:
            pass
        log("held_quality_backfilled", known=len(self.state.held_quality), signed=len(self.state.signed))
```

### 2d. restock(): allow a larger page window for upgrades
Find:
```python
    def restock(self, bar):
        """Refill one requisition's queue from its backlog or the next search pages. Returns entries added."""
        rid = bar["req_id"]
```
Replace with:
```python
    def restock(self, bar, pages=None):
        """Refill one requisition's queue from its backlog or the next search pages. Returns entries added."""
        rid = bar["req_id"]
        pages_n = int(pages if pages is not None else self.cfg["PAGES_PER_RESTOCK"])
```
Find:
```python
            end = min(start + int(self.cfg["PAGES_PER_RESTOCK"]), max_pages)
```
Replace with:
```python
            end = min(start + pages_n, max_pages)
```

### 2e. work_req(): remember the quality of each new hire
Find:
```python
                self.state.person_keys.update(e["keys"])
                remaining -= 1
                self.stats["signed"] += 1
```
Replace with:
```python
                self.state.person_keys.update(e["keys"])
                self.state.held_quality[cid] = e["quality"]
                remaining -= 1
                self.stats["signed"] += 1
```

### 2f. New methods: insert directly **before** the line `    # ---- periodic tasks ----------------------------------------------------`

```python
    # ---- closing-hour upgrades ----------------------------------------------
    def upgrade_worthy(self, e):
        """Worth paying to assess as an upgrade: already verified, or a self-reported margin with room to spare."""
        if e["verified"]:
            return True
        d = e["detail"]
        mp = d.get("margin_pts")
        return mp is not None and mp >= self.cfg["UPGRADE_MIN_SELF_MARGIN"] and d.get("sentiment", 0) >= 0

    def upgrade_req(self, bar):
        """Swap this requisition's weakest hire for a clearly stronger, verified candidate.

        Order: find and verify the replacement first, release the weak hire only once
        the replacement is proven, then offer. If the offer is refused after the
        release, the slot is empty and the normal fill pass refills it next loop.
        """
        rid = bar["req_id"]
        cfg = self.cfg
        assessed = 0
        restocks = 0
        queue = self.queues.setdefault(rid, [])
        while (not self.upgrade_off and self.swaps < int(cfg["UPGRADE_MAX_SWAPS"])
               and assessed < int(cfg["UPGRADE_ASSESS_PER_PASS"])):
            held = [(self.state.held_quality.get(c, 0.0), c) for c, r in self.state.signed.items() if r == rid]
            if not held:
                return
            q_old, old_cid = min(held)
            if q_old > cfg["UPGRADE_MAX_OLD_QUALITY"]:
                return
            need = max(cfg["UPGRADE_MIN_NEW_QUALITY"], q_old + cfg["UPGRADE_MIN_DELTA"])
            cands = [e for e in queue
                     if e["cid"] not in self.state.dead and e["cid"] not in self.state.signed
                     and e["quality"] >= need and self.upgrade_worthy(e)]
            if not cands:
                if restocks >= 2 or self.state.dry_restocks.get(rid, 0) >= int(cfg["DRY_LIMIT"]):
                    return
                if int(self.state.next_page.get(rid, 0)) >= int(cfg["MAX_PAGES_PER_REQ"]) and not self.backlog.get(rid):
                    return
                restocks += 1
                self.restock(bar, pages=int(cfg["UPGRADE_PAGES_PER_RESTOCK"]))
                continue
            e = max(cands, key=lambda x: x["quality"])
            queue.remove(e)
            stale = cfg["CLOSING_STALE_SECONDS"] if self.phase == "closing" else cfg["PROFILE_STALE_SECONDS"]
            if time.time() - e["fetched_at"] > stale:
                e = self.refresh(e, bar)
                if e is None:
                    continue
            if not e["verified"]:
                assessed += 1
                e = self.assess(e, bar)
                if e is None:
                    continue
            if e["quality"] < q_old + cfg["UPGRADE_MIN_DELTA"]:
                queue.append(e)          # verified, just not strong enough to replace this hire
                continue
            if not self.can_spend(self.costs.get("release") + self.costs.get("offer")):
                queue.append(e)
                return
            rel = self.call("release", self.arena.release, old_cid)
            if not isinstance(rel, dict) or rel.get("error") or rel.get("released") is False:
                log("release_failed", cid=old_cid, req=rid, resp=json.dumps(rel, default=str)[:200])
                queue.append(e)
                return
            self.state.signed.pop(old_cid, None)
            self.state.signed_at.pop(old_cid, None)
            self.state.held_quality.pop(old_cid, None)
            self.state.dead.add(old_cid)
            self.state.save()
            resp = self.call("offer", self.arena.offer, e["cid"], rid)
            if isinstance(resp, dict) and resp.get("accepted"):
                cid = e["cid"]
                self.state.signed[cid] = rid
                self.state.signed_at[cid] = time.time()
                self.state.held_quality[cid] = e["quality"]
                self.state.person_keys.update(e["keys"])
                self.swaps += 1
                self.stats["upgrades"] += 1
                self.swap_log.append((time.time(), e["quality"] - q_old))
                log("upgraded", cid=cid, quality=round(e["quality"], 3), old_cid=old_cid,
                    old_quality=round(q_old, 3), req=rid, swaps=self.swaps, detail=e["detail"],
                    credits_remaining=self.arena.credits_remaining)
            else:
                self.state.dead.add(e["cid"])
                self.stats["upgrade_offer_rejected"] += 1
                reason = resp.get("reason") if isinstance(resp, dict) else resp
                log("upgrade_offer_rejected", cid=e["cid"], req=rid, reason=str(reason))
            self.state.save()

```

### 2g. calibrate(): measure the real points slope of upgrades
Find:
```python
        asof = led.get("points_as_of")
        if asof is None or asof == self.last_points_as_of:
            return
        first = self.last_points_as_of is None
        self.last_points_as_of = asof
        if first:
            return
        try:
            asof_f = float(asof)
        except (TypeError, ValueError):
            return
        counted = sum(1 for t in self.state.signed_at.values() if t <= asof_f - 5)
        pts = lib.first_number(led.get("points"), 0.0) or 0.0
```
Replace with:
```python
        asof = led.get("points_as_of")
        if asof is None or asof == self.last_points_as_of:
            return
        first = self.last_points_as_of is None
        self.last_points_as_of = asof
        try:
            asof_f = float(asof)
        except (TypeError, ValueError):
            return
        pts = lib.first_number(led.get("points"), 0.0) or 0.0
        if self.prev_points is not None and self.swap_log:
            dq = sum(d for t, d in self.swap_log if self.prev_points_asof + 5 < t <= asof_f - 5)
            if dq >= 1.0:
                slope = (pts - self.prev_points) / dq
                log("upgrade_slope", delta_points=round(pts - self.prev_points, 2),
                    delta_quality=round(dq, 3), slope=round(slope, 2))
                if slope < self.cfg["UPGRADE_MIN_SLOPE"]:
                    self.upgrade_off = True
                    log("upgrade_stopped", why="measured points slope below UPGRADE_MIN_SLOPE",
                        slope=round(slope, 2))
        self.prev_points, self.prev_points_asof = pts, asof_f
        if first:
            return
        counted = sum(1 for t in self.state.signed_at.values() if t <= asof_f - 5)
```

### 2h. run(): call upgrades after the fill pass
Find:
```python
                    for bar in bars:
                        self.work_req(bar)
                    self.maybe_market()
```
Replace with:
```python
                    for bar in bars:
                        self.work_req(bar)
                    if self.cfg["UPGRADE_ENABLED"] >= 1 and not self.upgrade_off:
                        for r in reqs:
                            full = lib.requisition_bar(r, self.points_per_hire)
                            if full["req_id"] and full["remaining"] == 0:
                                self.upgrade_req(full)
                    self.maybe_market()
```

### 2i. heartbeat: show upgrade state
Find:
```python
            points_per_hire=round(self.points_per_hire, 2), assess_always=self.assess_always,
```
Replace with:
```python
            points_per_hire=round(self.points_per_hire, 2), assess_always=self.assess_always,
            swaps=self.swaps, upgrade_off=self.upgrade_off,
```

## 3. Test (Bash). Must pass before touching the live agent

```bash
cd "/c/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/iitd-hack/parakh-iitd-hack/arena"
python -m py_compile agent.py lib.py && python test_lib.py
for pid in $(netstat -ano | grep ':8123' | grep LISTENING | awk '{print $NF}' | sort -u); do taskkill //F //PID $pid; done
rm -f mock_checkpoint.json mock_log.jsonl mock_heartbeat mock_server.log agent_mock.out
python mock_arena.py > mock_server.log 2>&1 &
sleep 2
ARENA_URL=http://127.0.0.1:8123 ARENA_KEY=mock CHECKPOINT_PATH=mock_checkpoint.json LOG_PATH=mock_log.jsonl HEARTBEAT_PATH=mock_heartbeat LOOP_SECONDS=3 UPGRADE_MIN_SLOPE=0 timeout 80 python agent.py > agent_mock.out 2>&1; echo "exit $?"
for pid in $(netstat -ano | grep ':8123' | grep LISTENING | awk '{print $NF}' | sort -u); do taskkill //F //PID $pid; done
echo "crashes=$(grep -c crash_caught mock_log.jsonl) signed=$(grep -c '"event": "signed"' mock_log.jsonl) upgraded=$(grep -c '"event": "upgraded"' mock_log.jsonl) release_failed=$(grep -c release_failed mock_log.jsonl) upg_rej=$(grep -c upgrade_offer_rejected mock_log.jsonl)"
grep '"event": "upgraded"' mock_log.jsonl | head -3 | cut -c1-300
rm -f mock_checkpoint.json mock_log.jsonl mock_heartbeat mock_server.log agent_mock.out
```
Expected: `lib tests passed`; `exit 124`; `crashes=0`; `signed` about 12; `upgraded` ≥ 1, each line with quality > old_quality + 0.25; `release_failed=0`.
If `upgraded=0` with no crash, it's acceptable (the mock pool may lack strong candidates). Still proceed if `crashes=0`.

## 4. Swap the live agent (PowerShell)

```powershell
Get-CimInstance Win32_Process -Filter "name='python.exe'" | Where-Object { $_.CommandLine -like '*agent.py*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
Start-Sleep -Seconds 2
Get-CimInstance Win32_Process -Filter "name='python.exe'" | Where-Object { $_.CommandLine -like '*agent.py*' } | Select-Object ProcessId
$dir = 'C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\iitd-hack\parakh-iitd-hack\arena'
$cmd = "Set-Location '$dir'; `$env:ARENA_URL='https://innov8-battle-arena.onrender.com'; `$env:ARENA_KEY='arena_ldXa2luwP4pq80AZ'; `$env:PYTHONIOENCODING='utf-8'; `$env:FORCE_START='1'; C:\Python314\python.exe -u agent.py"
Start-Process powershell -ArgumentList '-NoExit','-Command',$cmd
```
The second `Get-CimInstance` must print nothing before the relaunch. **Keep `checkpoint.json` and `arena_log.jsonl`**: the backfill reads hire qualities from the log.

## 5. Monitor (Bash). Every 2–3 min until 16:30

```bash
cd "/c/Users/harsh/Desktop/HARSH/WEB-DEV-PROJECTS/iitd-hack/parakh-iitd-hack/arena"
date; grep -E '"event": "(held_quality_backfilled|upgrade_slope|upgrade_stopped|release_failed)"' arena_log.jsonl | cut -c1-300
echo "upgraded=$(grep -c '"event": "upgraded"' arena_log.jsonl) upg_rej=$(grep -c upgrade_offer_rejected arena_log.jsonl) crashes=$(grep -c crash_caught arena_log.jsonl)"
grep '"event": "upgraded"' arena_log.jsonl | tail -3 | cut -c1-260
curl -s -m 15 -H "X-Arena-Key: arena_ldXa2luwP4pq80AZ" https://innov8-battle-arena.onrender.com/ledger; echo
curl -s -m 15 -H "X-Arena-Key: arena_ldXa2luwP4pq80AZ" https://innov8-battle-arena.onrender.com/requisitions | python -c "import sys,json;d=json.load(sys.stdin);print('filled',sum(r['filled'] for r in d),'/',sum(r['headcount'] for r in d))"
```
Healthy signs:
- `held_quality_backfilled known=116`
- `upgraded` rising, each gaining ≥ 0.25 quality
- `filled` back at 116 within one loop of any `upgrade_offer_rejected`
- at the 16:00 snapshot, an `upgrade_slope` line with slope ≥ 8 (otherwise the agent logs `upgrade_stopped` and stops by itself)

## 6. Failure playbook

| Symptom | Fix |
|---|---|
| `release_failed` lines | Read `resp`. If release really succeeded but the shape differs (e.g. `{"ok": true}`), change the check to `if not isinstance(rel, dict) or rel.get("error"):`. Relaunch per §4. |
| `filled` < 116 for more than 2 loops | The fill pass should refill. If the queue is dry, set `"DRY_LIMIT": 10` in `config.json` (hot reload, no restart). |
| `upgraded` = 0 after 5 min, no errors | Candidates aren't clearing the thresholds. Set `"UPGRADE_MIN_NEW_QUALITY": 0.62, "UPGRADE_MIN_SELF_MARGIN": 8` in `config.json` (hot reload). |
| `upgrade_stopped` at the 16:00 snapshot | Upgrades don't pay. Leave it; the agent holds position. |
| `crash_caught` repeating | Read the trace, fix, relaunch per §4. |

## 7. After 16:30

Final ledger (free), then write `STRATEGY.md`. Include: the upgrade engine, the measured slope, and the "what could have been better" points (late start at 15:15; 171 of 288 assessments failed ≈ 214 points; discovery ~3.9k credits). Convert it to a one-page PDF, build the zip, and commit and push from harshkawatra11 with no Claude co-author trailer (standing instruction). Run `git grep` for the key before committing.
