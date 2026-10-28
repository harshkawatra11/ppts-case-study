"""Write deck/values.js: `const V = {...}; const P = {...};` from the model and primary-research outputs.
V holds model numbers (rounded for display); P holds primary-research numbers (null when not measured)."""
import json, pathlib, sys
HERE = pathlib.Path(__file__).parent
MODEL = HERE / "model_outputs.json"
PRIM = HERE.parent / "primary" / "primary_outputs.json"
OUTF = HERE.parent / "deck" / "values.js"
if len(sys.argv) > 1: OUTF = pathlib.Path(sys.argv[1])

def rnd(x, d=2):
    if isinstance(x, float): return round(x, d)
    if isinstance(x, list): return [rnd(i, d) for i in x]
    if isinstance(x, dict): return {k: rnd(v, d) for k, v in x.items()}
    return x

O = json.loads(MODEL.read_text(encoding="utf-8"))
b = O["paths"]["base"]
V = dict(
    t=O["toing"], t149=O["toing_149"], tmix=O["toing_mix"], c=O["core"], c500=O["core_500"],
    ratio=O["ratio_loss_to_core_ebitda"], br=O["bridge"], rd=O["redesigned"], dens=O["density"], ns=O["n_star"],
    tri=O["tri"], fn={k: v for k, v in O["funnel"].items()}, pa={s: {k: O["paths"][s][k] for k in ("S", "F", "F_ltv", "K", "R", "R_fail", "cum", "exit")} for s in ("bear", "base", "bull")},
    ms=O["moneyshot"], dc=O["decomp"], tor=O["tornado"], reg=O["reg"], rid=O["rider_hourly"], flip=O["flip"],
    A={k: O["inputs"][k] for k in ("T_AOV", "T_COMM", "T_FEES_CUST", "T_RIDER", "T_DISC", "DROP_SHARE", "BATCH_SHARE", "RUN_N", "HOST_FEE",
                                   "DOOR_FEE", "COMM_UP", "ADS_TO", "PASS_PRICE", "CAC_PAID", "NEW_TO_CAT", "T_FREQ", "T_RET",
                                   "MIGRATE_12M", "CANNIB", "CANNIB_FENCE", "CORE_GOV", "CORE_EBITDA_PCT", "CORE_CM_PCT", "V0",
                                   "S_VOL", "F_VOL", "R_VOL", "S_ACQ", "R_ACQ", "P_DENSITY", "RUN_MIN", "KA_FEE_CAP", "CAC_TOING")},
)
P = {}
if PRIM.exists():
    raw = json.loads(PRIM.read_text(encoding="utf-8"))
    P = {k: v for k, v in raw.items() if k != "dist"}
    P["dist"] = raw.get("dist", {})
for k in ("n_total", "n_carts", "n_toing_carts"):
    P.setdefault(k, 0)
js = "const V = " + json.dumps(rnd(V), ensure_ascii=False) + ";\nconst P = " + json.dumps(rnd(P), ensure_ascii=False) + ";\n"
OUTF.parent.mkdir(parents=True, exist_ok=True)
OUTF.write_text(js, encoding="utf-8")
print("values.js bytes", len(js.encode("utf-8")), "survey n", P.get("n_total"), "carts", P.get("n_carts"))
