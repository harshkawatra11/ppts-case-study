# ===== URJAGRID IMPACT MODEL =====
"""UrjaGrid impact model. Inputs: engine_dump.json (the product's own network, demand and supply arrays).
Two tracks over 96 fifteen-minute slots, per distribution transformer (DT):
  baseline  status quo: rotational shedding of short DTs plus thermal trips (the product's own shadow rules)
  solution  the UrjaGrid lever ladder, softest first, then the same shedding and trip rules on whatever is left
Outputs: model_outputs.json, model_tables.md. Set URJA_DRY=1 to print a summary and write nothing; URJA_STDIN=1 reads the dump from stdin."""
import json, math, os, sys, pathlib
HERE = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(".")
E = json.loads(sys.stdin.read() if os.environ.get("URJA_STDIN") else (HERE / "engine_dump.json").read_text(encoding="utf-8"))
# ---------------- P: product constants (never modify) ----------------
P = dict(pf=0.9, tol=0.03, shed_frac=0.5, trip_pu=1.30, trip_slots=2, trip_out=8, rebound=0.30, release=0.15,
         fee_rs_meter_month=8.0, rebate_rs_kwh=2.0, cap_w={1: (1000, 2000), 2: (500, 1000), 3: (300, 500)})
# ---------------- A: team assumptions (change only through plan section 5.6) ----------------
A = dict(
    A01_dr_share=dict(bear=0.03, base=0.05, bull=0.10),      # share of T1+T2 load shifted on a voluntary ask
    A02_flex_share=dict(bear=0.30, base=0.50, bull=0.70),    # share of T3 (flexible) load deferred in a window
    A03_cap_comply=dict(bear=0.85, base=0.92, bull=0.97),    # share of capped load that actually comes off
    A04_days=dict(heatwave_evening=45, monsoon_cloud=75, solar_noon=245),  # day-type mix for a year
    A05_dip_window=(18.0, 23.0),                              # evening hours for the supply-dip stress
    A06_dips=(0.0, 0.10, 0.20, 0.30, 0.40),                   # extra evening shortfall as a share of demand
    A07_msg_rs=0.136,                                         # WhatsApp utility message, Rs 0.115 plus 18% GST
    A08_msgs_per_hh_event=2,                                  # notice and confirmation
    A09_storage_rs_kw_year=(3591.0, 5700.0),                  # DERC-approved distribution BESS tariffs, Rs per kW per year
    A10_inverter_rs=(14000.0, 19000.0), A11_inverter_life_years=5)
DAYS = ("heatwave_evening", "monsoon_cloud", "solar_noon"); CASES = ("bear", "base", "bull")
dts = E["dts"]; ND = len(dts); RATED = [d["rating_kva"] * P["pf"] for d in dts]
NC = [d["n"]["t1"] + d["n"]["t2"] + d["n"]["t3"] for d in dts]; N12 = [d["n"]["t1"] + d["n"]["t2"] for d in dts]
NHH = sum(NC); NALL = sum(sum(d["n"].values()) for d in dts)
SUBS = sorted(set(d["sub"] for d in dts))

def run(day, levers, case="base", dip=0.0):
    S = E["scenarios"][day]; peak = [max(S["demand"][i]) for i in range(ND)]
    dr, fx, cp = A["A01_dr_share"][case], A["A02_flex_share"][case], A["A03_cap_comply"][case]
    reb = [0.0] * ND; strike = [0] * ND; trip = [0] * ND; burden = [0.0] * ND; was_out = [False] * ND; hit = [False] * ND
    r = dict(out_hh_h=0.0, cap_hh_h=[0.0, 0.0, 0.0], bite_hh_h=[0.0, 0.0, 0.0], trips=0, shed_dt_slots=0, over_dt_h=0.0, interruptions=0.0,
             dr_kwh=0.0, flex_kwh=0.0, cap_kwh=0.0, lost_kwh=0.0, demand_kwh=0.0, peak_cap_hh=0, peak_bite_hh=0, max_loading=0.0,
             out_by_slot=[0.0] * 96, cap_by_slot=[0.0] * 96, load_by_slot=[0.0] * 96, level_by_dt=[0] * ND, out_h_by_dt=[0.0] * ND)
    for t in range(96):
        hr = t / 4.0; nd_ = [0.0] * ND; av = [0.0] * ND; lvl = [0] * ND; cand = {s: [] for s in SUBS}
        for i, d in enumerate(dts):
            dem = S["demand"][i][t]; avail = min(RATED[i], S["frac"][d["sub"]][t] * peak[i])
            if dip and A["A05_dip_window"][0] <= hr < A["A05_dip_window"][1]: avail = min(avail, (1.0 - dip) * dem)
            rel = reb[i] * P["release"]; reb[i] -= rel; x = dem + rel; r["demand_kwh"] += dem * 0.25
            if levers and trip[i] == 0 and x - avail > P["tol"] * x:
                need = x - avail; r1 = min(need, dr * S["t12"][i][t]); r2 = min(need - r1, fx * S["t3"][i][t]); need -= r1 + r2; rc = 0.0
                if need > 1e-9:
                    for L in (1, 2, 3):
                        rc = cp * S["relief"][L - 1][i][t]; lvl[i] = L
                        if rc >= need: break
                x -= r1 + r2 + rc; reb[i] += P["rebound"] * (r1 + r2 + rc)
                r["dr_kwh"] += r1 * 0.25; r["flex_kwh"] += r2 * 0.25; r["cap_kwh"] += rc * 0.25
            nd_[i] = x; av[i] = avail
            if trip[i] == 0 and x - avail > P["tol"] * x: cand[d["sub"]].append(i)
        shed = set()
        for s in SUBS:
            c = cand[s]
            if c:
                k = max(1, math.ceil(len(c) * P["shed_frac"])); shed.update(sorted(c, key=lambda i: (burden[i], dts[i]["id"]))[:k])
        capn = 0; biten = 0
        for i, d in enumerate(dts):
            out = False
            if trip[i] > 0: trip[i] -= 1; out = True
            elif i in shed: out = True; burden[i] += 0.25; r["shed_dt_slots"] += 1; strike[i] = 0
            else:
                k = nd_[i] / RATED[i]; r["max_loading"] = max(r["max_loading"], k)
                strike[i] = strike[i] + 1 if k > P["trip_pu"] else 0
                if strike[i] >= P["trip_slots"]: trip[i] = P["trip_out"]; strike[i] = 0; out = True; r["trips"] += 1
                elif k > 1.0: r["over_dt_h"] += 0.25
            if out:
                r["out_hh_h"] += NC[i] * 0.25; r["out_by_slot"][t] += NC[i]; r["out_h_by_dt"][i] += 0.25; hit[i] = True
                r["lost_kwh"] += max(nd_[i] - S["t0"][i][t], 0.0) * 0.25
                if not was_out[i]: r["interruptions"] += NC[i]
            else:
                r["load_by_slot"][t] += nd_[i]
                if lvl[i]:
                    L = lvl[i]; b = S["bite"][L - 1][i][t]; r["cap_hh_h"][L - 1] += N12[i] * 0.25; r["bite_hh_h"][L - 1] += b * 0.25
                    r["cap_by_slot"][t] += N12[i]; capn += N12[i]; biten += b; r["level_by_dt"][i] = max(r["level_by_dt"][i], L)
            was_out[i] = out
        if capn > r["peak_cap_hh"]: r["peak_cap_hh"] = capn; r["peak_bite_hh"] = biten
    r["hh_hit"] = sum(NC[i] for i in range(ND) if hit[i]); r["dts_hit"] = sum(hit); r["out_h_per_hh"] = r["out_hh_h"] / NHH
    r["saifi"] = r["interruptions"] / NHH; r["supply_avail_pct"] = 100.0 * (1.0 - r["out_hh_h"] / (NHH * 24.0))
    return r

def rnd(x, d=2):
    if isinstance(x, float): return round(x, d)
    if isinstance(x, (list, tuple)): return [rnd(v, d) for v in x]
    if isinstance(x, dict): return {k: rnd(v, d) for k, v in x.items()}
    return x

O = dict(meta=dict(consumers=NALL, households_non_critical=NHH, t0=NALL - NHH, dts=ND, capacity_kva=sum(d["rating_kva"] for d in dts)), P=P, A=A, days={}, dip={}, annual={}, econ={}, equity={}, network={})
for day in DAYS:
    S = E["scenarios"][day]; tot = [sum(S["demand"][i][t] for i in range(ND)) for t in range(96)]
    pk = [max(S["demand"][i]) / RATED[i] for i in range(ND)]
    O["network"][day] = dict(label=S["label"], town=S["town"], source=S["source"], peak_temp_c=max(S["temp_c"]), peak_kw=max(tot), peak_slot=tot.index(max(tot)),
        demand_kwh=sum(tot) * 0.25, dts_over_100=sum(k > 1.0 for k in pk), dts_over_130=sum(k > 1.3 for k in pk), max_pu=max(pk),
        over_kwh=sum(max(S["demand"][i][t] - RATED[i], 0.0) for i in range(ND) for t in range(96)) * 0.25, total_by_slot=tot, peak_pu_by_dt=pk,
        rated_kw=sum(RATED), temp_c=S["temp_c"], solar_cf=S["solar_cf"])
    O["days"][day] = dict(baseline=run(day, False), **{c: run(day, True, c) for c in CASES})
for dip in A["A06_dips"]:
    O["dip"][str(dip)] = dict(baseline=run("heatwave_evening", False, "base", dip), **{c: run("heatwave_evening", True, c, dip) for c in CASES})
dm = A["A04_days"]; ann = {}
for key in ("baseline",) + CASES:
    g = lambda f: sum(dm[d] * O["days"][d][key][f] for d in DAYS)
    ann[key] = dict(out_hh_h=g("out_hh_h"), out_h_per_hh=g("out_hh_h") / NHH, trips=g("trips"), over_dt_h=g("over_dt_h"), lost_kwh=g("lost_kwh"), dr_kwh=g("dr_kwh"),
                    flex_kwh=g("flex_kwh"), cap_kwh=g("cap_kwh"), cap_hh_h=[sum(dm[d] * O["days"][d][key]["cap_hh_h"][k] for d in DAYS) for k in range(3)],
                    event_days=sum(dm[d] for d in DAYS if O["days"][d][key]["out_hh_h"] + sum(O["days"][d][key]["cap_hh_h"]) > 0))
O["annual"] = ann
fee = P["fee_rs_meter_month"] * 12 * NALL
for c in CASES:
    a = ann[c]; b = ann["baseline"]; avoided = b["out_hh_h"] - a["out_hh_h"]
    rebate = a["dr_kwh"] * P["rebate_rs_kwh"]; msgs = A["A07_msg_rs"] * A["A08_msgs_per_hh_event"] * NALL * a["event_days"]
    cost = fee + rebate + msgs; hd = O["days"]["heatwave_evening"][c]; relief_kw = max((O["network"]["heatwave_evening"]["total_by_slot"][t] - hd["load_by_slot"][t]) if hd["out_by_slot"][t] == 0 else 0.0 for t in range(96))
    O["econ"][c] = dict(fee_rs=fee, rebate_rs=rebate, msg_rs=msgs, cost_rs=cost, cost_per_meter_year=cost / NALL, avoided_hh_h=avoided, cut_pct=100.0 * avoided / b["out_hh_h"] if b["out_hh_h"] else 0.0,
        rs_per_avoided_hh_h=cost / avoided if avoided > 0 else None, peak_relief_kw=relief_kw, rs_per_kw_year=cost / relief_kw if relief_kw else None,
        storage_ratio=[A["A09_storage_rs_kw_year"][k] / (cost / relief_kw) for k in (0, 1)] if relief_kw else None, energy_kept_kwh=b["lost_kwh"] - a["lost_kwh"] - a["cap_kwh"] * (1 - P["rebound"]))
O["econ"]["inverter_rs_year"] = [v / A["A11_inverter_life_years"] for v in A["A10_inverter_rs"]]
S = E["scenarios"]["heatwave_evening"]; tp = O["network"]["heatwave_evening"]["peak_slot"]
O["equity"] = dict(slot=tp, by_archetype={a: dict(n=S["arch_n12"][a], bite_pct=[100.0 * S["arch_bite"][a][L][tp] / S["arch_n12"][a] for L in range(3)]) for a in sorted(S["arch_n12"])},
    all_pct=[100.0 * sum(S["bite"][L][i][tp] for i in range(ND)) / sum(N12) for L in range(3)],
    relief_share_pct=[100.0 * sum(S["relief"][L][i][tp] for i in range(ND)) / sum(S["demand"][i][tp] for i in range(ND)) for L in range(3)])
O = rnd(O, 3)
if os.environ.get("URJA_JSON"): sys.stdout.write(json.dumps(O))
elif os.environ.get("URJA_DRY"):
    for d in DAYS:
        nw = O["network"][d]; print(d, {k: nw[k] for k in ("peak_temp_c", "peak_kw", "peak_slot", "demand_kwh", "dts_over_100", "dts_over_130", "max_pu", "over_kwh")})
        for k in ("baseline",) + CASES:
            x = O["days"][d][k]; print("   ", k, {f: x[f] for f in ("out_hh_h", "out_h_per_hh", "hh_hit", "dts_hit", "trips", "shed_dt_slots", "over_dt_h", "saifi", "cap_hh_h", "bite_hh_h", "peak_cap_hh", "peak_bite_hh", "dr_kwh", "flex_kwh", "cap_kwh", "lost_kwh", "max_loading", "supply_avail_pct")})
    for dip in O["dip"]: print("dip", dip, {k: (O["dip"][dip][k]["out_h_per_hh"], O["dip"][dip][k]["hh_hit"], sum(O["dip"][dip][k]["cap_hh_h"])) for k in ("baseline",) + CASES})
    print("annual", {k: {f: O["annual"][k][f] for f in ("out_hh_h", "out_h_per_hh", "trips", "over_dt_h", "lost_kwh", "dr_kwh", "cap_kwh", "event_days")} for k in O["annual"]})
    print("econ", O["econ"]); print("equity", O["equity"]); print("meta", O["meta"])
else:
    (HERE / "model_outputs.json").write_text(json.dumps(O, ensure_ascii=False, indent=1), encoding="utf-8"); print("wrote model_outputs.json")
