# ===== URJAGRID ENGINE EXTRACT =====
"""Read-only dump of the UrjaGrid engine's inputs for the impact model. Run with the product's own venv:
   <backend>/.venv/Scripts/python.exe -B extract_engine.py  ->  engine_dump.json (same folder)
   Set URJA_STDOUT=1 to print the JSON instead of writing it."""
import sys, json, os, pathlib
sys.dont_write_bytecode = True
BACKEND = os.environ.get("URJA_BACKEND", r"C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\yuvayodha-hack\backend")
sys.path.insert(0, BACKEND)
import numpy as np
from app.grid.network import real_network
from app.grid.loadgen import LoadModel
from app.grid.weather import BUILTIN_SCENARIOS
from app.grid.supply import supply_fraction_for_subdivision, SUBDIVISION_KIND
CAPS = {1: {"t1": 1.0, "t2": 2.0}, 2: {"t1": 0.5, "t2": 1.0}, 3: {"t1": 0.3, "t2": 0.5}}  # kW, product constants CAP_LEVEL_WATTS
net = real_network(); C = net.consumers; n = len(C)
ix = {d: i for i, d in enumerate(net.dt_ids)}; nd = len(net.dt_ids)
tier = [str(x) for x in C.tier]; arch = [str(x) for x in C.archetype]; cdt = [ix[str(x)] for x in C.dt_ids]
dts = []
for d in net.dt_ids:
    j = ix[d]; cnt = {k: 0 for k in ("t0", "t1", "t2", "t3")}
    for i in range(n):
        if cdt[i] == j: cnt[tier[i]] += 1
    dts.append({"id": d, "sub": net.dt_subdivision[d], "kind": SUBDIVISION_KIND[net.dt_subdivision[d]], "feeder": net.dt_feeder[d],
                "rating_kva": float(net.dt_rating_kva[d]), "n": cnt})
out = {"meta": {"consumers": n, "dts": nd, "seed": 0, "archetype_share": {a: arch.count(a) for a in sorted(set(arch))}}, "dts": dts, "scenarios": {}}
r3 = lambda a: [[round(float(v), 3) for v in row] for row in a]
for name in ("heatwave_evening", "monsoon_cloud", "solar_noon"):
    sc = BUILTIN_SCENARIOS[name]; w = sc.to_series(); lm = LoadModel(seed=0)
    D = np.zeros((nd, 96)); T0 = np.zeros((nd, 96)); T3 = np.zeros((nd, 96)); T12 = np.zeros((nd, 96))
    R = np.zeros((3, nd, 96)); B = np.zeros((3, nd, 96)); AB = {a: np.zeros((3, 96)) for a in set(arch)}; AN = {a: 0 for a in set(arch)}
    for i in range(n):
        cur = lm.consumer_demand_kw(arch[i], w.temp_c); j = cdt[i]; D[j] += cur
        if tier[i] == "t0": T0[j] += cur
        elif tier[i] == "t3": T3[j] += cur
        else:
            T12[j] += cur; AN[arch[i]] += 1
            for L in (1, 2, 3):
                over = np.clip(cur - CAPS[L][tier[i]], 0, None); R[L - 1, j] += over; B[L - 1, j] += (over > 0); AB[arch[i]][L - 1] += (over > 0)
    chk = LoadModel(seed=0).generate_network_demand(C, w)
    assert all(abs(chk[d] - D[ix[d]]).max() < 1e-9 for d in net.dt_ids), "demand does not match the engine"
    frac = {sd: [round(float(v), 4) for v in supply_fraction_for_subdivision(sd, 0.15, w.solar_cf, w.wind_cf, 0.05)] for sd in SUBDIVISION_KIND}
    out["scenarios"][name] = {"label": sc.label, "town": sc.town, "source": sc.source, "temp_c": [round(float(v), 2) for v in w.temp_c],
        "solar_cf": [round(float(v), 3) for v in w.solar_cf], "demand": r3(D), "t0": r3(T0), "t3": r3(T3), "t12": r3(T12),
        "relief": [r3(R[k]) for k in range(3)], "bite": [r3(B[k]) for k in range(3)], "frac": frac,
        "arch_bite": {a: r3(AB[a]) for a in AB}, "arch_n12": AN}
txt = json.dumps(out, separators=(",", ":"))
if os.environ.get("URJA_STDOUT"): sys.stdout.write(txt)
else:
    p = pathlib.Path(__file__).resolve().parent / "engine_dump.json"; p.write_text(txt, encoding="utf-8"); print("wrote", p, len(txt), "chars")
