"""Dunzo revival counterfactual model (Team IdeaForge). Source of truth for every model number in the deck and document."""
import json, pathlib
OUT = pathlib.Path(__file__).parent

# ---- Reported facts (Entrackr RoC coverage, TechCrunch) ----
F = dict(
    raise_usd_m=240, fx=74.6,                              # A01: Jan 2022 round, INR per USD
    fy21=dict(rev=45.8, exp=263.6, emp=91.6, deliv=50.2, it=43.22, ads=11.03, loss=225.7),
    fy22=dict(rev=54.3, exp=531.7, emp=138.3, deliv=134.0, ads=64.4, it=52.0, loss=464.0),
    fy23=dict(rev=226.6, exp=2054.4, emp=338.0, deliv=367.4, ads=309.7, proc=174.4, loss=1801.0, cash=216.0),
    hist=[("FY19", 0.77, 169.0, 225.0), ("FY20", 27.5, 338.4, 13.09), ("FY21", 45.8, 225.7, 5.75),
          ("FY22", 54.3, 464.0, 9.8), ("FY23", 226.6, 1801.0, 9.09)],
)

# ---- Team assumptions (disclosed on the appendix slide as A01 to A10) ----
Y = ["FY23", "FY24", "FY25", "FY26", "FY27", "FY28"]
S = {  # orders/day in thousands; unit economics in Rs per order
    "pick":  dict(vol=[65, 75, 85, 95, 105, 112], rev=[66, 68, 70, 72, 73, 74],
                  rider=[45, 44, 43, 42, 42, 42], other=[6]*6, disc=[0]*6),
    "quick": dict(vol=[60, 100, 140, 170, 200, 225], aov=[420, 430, 440, 450, 460, 470], comm=0.15, fee=15,
                  rider=[48, 46, 44, 43, 42, 42], other=[20]*6, disc=[8, 7, 6, 5, 5, 5]),
    "b2b":   dict(vol=[35, 60, 90, 120, 150, 175], rev=[52, 52, 53, 53, 54, 54],
                  rider=[42, 41, 40, 40, 39, 39], other=[4]*6, disc=[0]*6),
}
FIX = [220, 230, 240, 250, 262, 275]      # A09 people, tech, marketing, G&A (Rs Cr)
CAPEX = [20, 15, 15, 15, 15, 15]          # A10
SCEN = {"bear": (0.75, -3.0), "base": (1.0, 0.0), "bull": (1.2, 2.0)}   # A11 volume factor, contribution delta Rs/order
RAISE = F["raise_usd_m"] * F["fx"] / 10   # Rs Cr

def fmt(v):
    return f"{v:,}".replace("-", "\u2212")

def unit(k, i):
    s = S[k]
    rev = s["aov"][i] * s["comm"] + s["fee"] if k == "quick" else s["rev"][i]
    return rev, rev - s["rider"][i] - s["other"][i] - s["disc"][i]

def run(vf=1.0, dc=0.0):
    cash, rows, be = RAISE, [], None
    for i, y in enumerate(Y):
        rev = sum(S[k]["vol"][i] * vf * unit(k, i)[0] for k in S) * 365 / 1e4
        con = sum(S[k]["vol"][i] * vf * (unit(k, i)[1] + dc) for k in S) * 365 / 1e4
        e = con - FIX[i]; cash += e - CAPEX[i]
        if be is None and e >= 0: be = y
        rows.append(dict(y=y, orders_k=round(sum(S[k]["vol"][i] * vf for k in S)), rev=round(rev),
                         contrib=round(con), fixed=FIX[i], ebitda=round(e), cash=round(cash)))
    return rows, be

def build():
    O = {"raise_cr": round(RAISE)}
    O["units"] = {k: [dict(y=Y[i], rev=round(unit(k, i)[0], 1), contrib=round(unit(k, i)[1], 1)) for i in range(6)] for k in S}
    for s, (vf, dc) in SCEN.items():
        r, be = run(vf, dc)
        O[s] = dict(rows=r, breakeven=be, cash_fy27=r[4]["cash"], cash_fy28=r[5]["cash"],
                    min_cash=min(x["cash"] for x in r), burn_to_fy27=round(RAISE - r[4]["cash"]))
    f21, f23 = F["fy21"], F["fy23"]
    b = dict(base=round(f21["loss"]), ads=round(f23["ads"] - f21["ads"]), people=round(f23["emp"] - f21["emp"]),
             fleet=round(f23["deliv"] - f21["deliv"]))
    b["stores_other"] = round(f23["loss"]) - b["base"] - b["ads"] - b["people"] - b["fleet"]
    b["war"] = round(f23["loss"] - f21["loss"]); b["war_pct"] = round(100 * (f23["loss"] - f21["loss"]) / f23["loss"])
    b["fy23_loss"] = round(f23["loss"])
    O["bridge"] = b
    O["fy23_loss_cut_pct"] = round(100 * (1 - abs(O["base"]["rows"][0]["ebitda"]) / f23["loss"]))
    mix = {k: S[k]["vol"][4] for k in S}; O["fy27_mix_pct"] = {k: round(100 * v / sum(mix.values())) for k, v in mix.items()}
    O["grid_fy27_ebitda"] = {str(vf): {str(dc): run(vf, dc)[0][4]["ebitda"] for dc in (-3, -1.5, 0, 1, 2)} for vf in (0.75, 0.9, 1.0, 1.1, 1.2)}
    O["grid_min_cash"] = {str(vf): {str(dc): min(x["cash"] for x in run(vf, dc)[0]) for dc in (-3, -1.5, 0, 1, 2)} for vf in (0.75, 0.9, 1.0, 1.1, 1.2)}
    O["hist"] = [dict(fy=h[0], rev=h[1], loss=h[2], spend_per_rupee=h[3]) for h in F["hist"]]
    return O

def tables(O):
    L = ["# Dunzo revival model tables (generated)", ""]
    L += ["## T1 FY23 loss bridge (Rs Cr)", "", "| Line | Rs Cr |", "|---|---|"]
    for k, lab in [("base", "FY21 base loss"), ("ads", "Ads above FY21"), ("people", "People above FY21"),
                   ("fleet", "Delivery fleet above FY21"), ("stores_other", "Dark stores, inventory, other (net)"), ("fy23_loss", "FY23 loss")]:
        L.append(f"| {lab} | {fmt(O['bridge'][k])} |")
    L += ["", f"War share of FY23 loss: {fmt(O['bridge']['war'])} Cr ({O['bridge']['war_pct']}%)", ""]
    for s in ("bear", "base", "bull"):
        L += [f"## T2 {s} case (Rs Cr; orders in thousands a day)", "", "| Year | Orders/day | Revenue | Contribution | Fixed | EBITDA | Cash |", "|---|---|---|---|---|---|---|"]
        for r in O[s]["rows"]:
            L.append(f"| {r['y']} | {r['orders_k']} | {fmt(r['rev'])} | {fmt(r['contrib'])} | {r['fixed']} | {fmt(r['ebitda'])} | {fmt(r['cash'])} |")
        L += ["", f"Breakeven: {O[s]['breakeven'] or 'after FY28'}; cash FY27 {fmt(O[s]['cash_fy27'])}; cash FY28 {fmt(O[s]['cash_fy28'])}", ""]
    L += ["## T3 Unit economics by stream (Rs per order: revenue / contribution)", "", "| Stream | " + " | ".join(Y) + " |", "|---|" + "---|" * len(Y)]
    for k in S:
        L.append(f"| {k} | " + " | ".join(f"{u['rev']} / {u['contrib']}" for u in O["units"][k]) + " |")
    L += ["", "## T4 FY27 EBITDA sensitivity (rows: volume factor; columns: contribution change Rs/order)", "", "| Volume | \u22123 | \u22121.5 | 0 | +1 | +2 |", "|---|---|---|---|---|---|"]
    for vf, row in O["grid_fy27_ebitda"].items():
        L.append(f"| {vf} | " + " | ".join(fmt(v) for v in row.values()) + " |")
    L += ["", "## T5 Lowest cash balance FY23 to FY28 (same grid)", "", "| Volume | \u22123 | \u22121.5 | 0 | +1 | +2 |", "|---|---|---|---|---|---|"]
    for vf, row in O["grid_min_cash"].items():
        L.append(f"| {vf} | " + " | ".join(fmt(v) for v in row.values()) + " |")
    L += ["", "## T6 Reported history (Rs Cr)", "", "| FY | Revenue | Net loss | Spent per Rs 1 earned |", "|---|---|---|---|"]
    for h in O["hist"]:
        L.append(f"| {h['fy']} | {h['rev']} | {fmt(h['loss'])} | {h['spend_per_rupee']} |")
    return "\n".join(L) + "\n"

if __name__ == "__main__":
    O = build()
    (OUT / "model_outputs.json").write_text(json.dumps(O, indent=1), encoding="utf-8")
    (OUT / "model_tables.md").write_text(tables(O), encoding="utf-8")
    print("bridge", O["bridge"]); print("cut", O["fy23_loss_cut_pct"], "mix", O["fy27_mix_pct"])
    for s in ("bear", "base", "bull"):
        print(s, O[s]["breakeven"], O[s]["cash_fy27"], O[s]["cash_fy28"], O[s]["min_cash"], O[s]["burn_to_fy27"])
    print([(r["y"], r["orders_k"], r["contrib"], r["ebitda"], r["cash"]) for r in O["base"]["rows"]])
