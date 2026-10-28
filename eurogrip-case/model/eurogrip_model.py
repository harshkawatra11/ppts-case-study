# ===== EUROGRIP MODEL v1 =====
"""Eurogrip four-case model: the single source of every computed number in the research document and the deck.
  PY eurogrip-case/model/eurogrip_model.py    writes model_outputs.json and model_tables.md, prints MODEL PASS or MODEL FAIL
Inputs: model/inputs/assumptions.csv, risks.csv, rulings.json; research/data/*.csv (PLAN.md section 5)."""
import csv, io, json, hashlib, math, pathlib, statistics, datetime, sys

M = pathlib.Path(__file__).resolve().parent
EG = M.parent
D = EG / "research" / "data"
SC = ("bear", "base", "bull")
LINES = ["Tools, refills", "Visibility kits", "Training, meets", "Field teams", "Tech and audits"]
Z = 1.959964 + 0.841621          # two-sided 95% confidence, 80% power
INPUTS = [M / "inputs" / "assumptions.csv", M / "inputs" / "risks.csv", M / "inputs" / "rulings.json",
          D / "universe_methods.csv", D / "benchmarks.csv", D / "materials_prices.csv"]


def rows(p):
    with io.open(p, encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def load_A():
    A = {}
    for r in rows(M / "inputs" / "assumptions.csv"):
        k = r["id"].strip()
        assert (r["basis"] or "").strip(), "empty basis " + k
        assert "PLACEHOLDER" not in r["basis"].upper(), "unsourced assumption " + k
        A[k] = {s: float(r[s]) for s in SC}
        A[k].update(unit=r["unit"], label=r["label"], case=r["case"])
    return A


def inr(x):
    n = abs(round(x)); s = str(n)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2:
            parts.append(head[-2:]); head = head[:-2]
        if head:
            parts.append(head)
        s = ",".join(reversed(parts)) + "," + tail
    return ("−" if round(x) < 0 else "") + s


def f1(x): return f"{x:.1f}"
def f2(x): return f"{x:.2f}"


# ---------------- Case 4: mechanic advocacy ----------------
def universe():
    rs = rows(D / "universe_methods.csv")
    est = [r for r in rs if r["kind"].strip() == "estimate"]
    flo = [r for r in rs if r["kind"].strip() == "floor"]
    assert len(est) == 2 and len(flo) == 2, "universe_methods.csv needs exactly 2 estimates and 2 floors"
    floor = max(float(r["base_lakh"]) for r in flo)
    base = max(statistics.mean(float(r["base_lakh"]) for r in est), floor)
    return {"methods": [{"method": r["method"].strip(), "kind": r["kind"].strip(), "low": float(r["low_lakh"]),
                         "base": float(r["base_lakh"]), "high": float(r["high_lakh"])} for r in rs],
            "bear": max(min(float(r["low_lakh"]) for r in est), floor), "base": base,
            "bull": max(float(r["high_lakh"]) for r in est), "floor": floor}


def c4_core(A, s, U, over=None):
    over = over or {}
    def a(k): return over.get(k, A[k][s])
    E = a("A01") * 1e7 * a("A02") / 100.0
    mix = [a("A07a"), a("A07b"), a("A07c")]
    tools = [a("A08"), a("A09"), a("A10")]
    vis = [a("A08v"), a("A09v"), a("A10v")]
    refill = [a("A12a"), a("A12b"), a("A12c")]
    refs = [a("A15a"), a("A15"), a("A16")]
    am = a("A11")
    c_tools = sum(m * (t / am + 4 * r + n * a("A20")) for m, t, r, n in zip(mix, tools, refill, refs))
    c_vis = sum(m * v / am for m, v in zip(mix, vis))
    c_train = (mix[1] + mix[2]) * (a("A13") * a("A13s") + a("A33"))
    c_field = a("A17") * (1.0 / am + a("A17c"))
    c_tech = a("A19m")
    cm = c_tools + c_vis + c_train + c_field + c_tech
    d = a("A24") / 100.0
    p = a("A25") + d / 2
    n_arm = math.ceil(2 * Z ** 2 * p * (1 - p) / d ** 2)
    audits = 2 * n_arm * a("A31n")
    audit_cost = audits * a("A31")
    fixed_field = a("A18") * 1e5
    fixed_tech = (a("A19") + a("A22") / am + a("A32")) * 1e5 + audit_cost
    F = fixed_field + fixed_tech
    afford = max(0.0, (E - F) / cm)
    cap = a("A06") * U[s] * 1e5
    members = min(afford, cap)
    spend = F + members * cm
    lines = [members * c_tools, members * c_vis, members * c_train,
             members * c_field + fixed_field, members * c_tech + fixed_tech]
    net = a("A27") / (1 + a("A28") / 100.0) * (1 - a("A29") / 100.0)
    cpt = net * a("A30") / 100.0
    be = spend / members / cpt if members > 0 else float("inf")
    return dict(E=E, F=F, cm=cm, members=members, afford=afford, cap=cap, spend=spend, lines=lines, cpt=cpt,
                be=be, net=net, n_arm=n_arm, audits=audits, audit_cost=audit_cost,
                parts=dict(tools=c_tools, visibility=c_vis, training=c_train, field=c_field, tech=c_tech))


def cash(A, s):
    def a(k): return A[k][s]
    net = a("A27") / (1 + a("A28") / 100.0) * (1 - a("A29") / 100.0)
    units = a("A01") * 1e7 / net
    base_units = units * a("A35") / 100.0
    rewarded = base_units * (1 + a("A36") / 100.0)
    return {"cost_cr": rewarded * a("A34") / 1e7, "deadweight_pct": 100.0 / (1 + a("A36") / 100.0),
            "rewarded_units_lakh": rewarded / 1e5}


TOR = ["A27", "A30", "A29", "A20", "A10", "A09", "A08", "A17", "A18", "A06", "A33", "A13"]


def tornado(A, U):
    out = []
    for k in TOR:
        lo = c4_core(A, "base", U, {k: A[k]["bear"]})["be"]
        hi = c4_core(A, "base", U, {k: A[k]["bull"]})["be"]
        out.append({"id": k, "label": A[k]["label"], "be_low": min(lo, hi), "be_high": max(lo, hi), "swing": abs(hi - lo)})
    return sorted(out, key=lambda x: -x["swing"])[:6]


def rollout(A, r):
    ramp = [A[k]["base"] for k in ("A37a", "A37b", "A37c", "A37d", "A37e", "A37f", "A37g", "A37h")]
    return [{"q": "Q%d" % (i + 1), "members_lakh": r["members"] * f / 1e5,
             "spend_cr": (r["F"] / 4 + r["members"] * f * r["cm"] / 4) / 1e7} for i, f in enumerate(ramp)]


def pick_bench():
    K = ("reward_cash", "reward_tools", "reward_visibility", "reward_skill", "credits_without_purchase", "tracks")
    rs = [r for r in rows(D / "benchmarks.csv") if (r.get("short") or "").strip()]
    for r in rs:
        for k in K:
            assert r[k].strip() in ("Yes", "Part", "No", "n/a"), (r["programme"], k, r[k])
    rs.sort(key=lambda r: -sum(r[k].strip() != "n/a" for k in K))
    pick, cats = [], set()
    for r in rs:
        if r["category"] not in cats and len(pick) < 6:
            pick.append(r); cats.add(r["category"])
    for r in rs:
        if r not in pick and len(pick) < 6:
            pick.append(r)
    out = [{"short": r["short"].strip(), "category": r["category"].strip(), "cash": r["reward_cash"].strip(),
            "tools": r["reward_tools"].strip(), "visibility": r["reward_visibility"].strip(),
            "skill": r["reward_skill"].strip(), "advice": r["credits_without_purchase"].strip(),
            "tracks": r["tracks"].strip()} for r in pick]
    out.append({"short": "Our design", "category": "tyres", "cash": "No", "tools": "Yes", "visibility": "Yes",
                "skill": "Yes", "advice": "Yes", "tracks": "Yes"})
    return out


def load_risks():
    out = [{"id": r["id"].strip(), "risk_short": r["risk_short"].strip(), "p": int(r["p"]), "i": int(r["i"]),
            "control_short": r["control_short"].strip(), "risk_long": r["risk_long"].strip(),
            "control_long": r["control_long"].strip()} for r in rows(M / "inputs" / "risks.csv")]
    return sorted(out, key=lambda r: -(r["p"] * r["i"]))


# ---------------- Case 1: brand across segments ----------------
SEG1 = [("Commuter", "A1-03", ("A1-07", "A1-08", "A1-09")), ("Gig", "A1-04", ("A1-10", "A1-11", "A1-12")),
        ("Premium", "A1-05", ("A1-13", "A1-14", "A1-15")), ("Brand platform", "A1-06", ("A1-16", "A1-17", "A1-18"))]


def c1(A, s):
    def a(k): return A[k][s]
    B = a("A1-01") * 1e7 * a("A1-02") / 100.0
    mat = []
    for name, sk, ch in SEG1:
        v = B * a(sk)
        mat.append({"segment": name, "digital_cr": v * a(ch[0]) / 1e7, "retail_cr": v * a(ch[1]) / 1e7,
                    "onground_cr": v * a(ch[2]) / 1e7})
    tot = sum(m["digital_cr"] + m["retail_cr"] + m["onground_cr"] for m in mat)
    dig = sum(m["digital_cr"] for m in mat) * 1e7
    gig_on = [m for m in mat if m["segment"] == "Gig"][0]["onground_cr"] * 1e7
    other_on = sum(m["onground_cr"] for m in mat if m["segment"] != "Gig") * 1e7
    events = other_on / a("A1-21")
    reach = {"impressions_crore": dig / a("A1-19") * 1000 / 1e7,
             "unique_reach_lakh": dig / a("A1-19") * 1000 / a("A1-24") / 1e5,
             "outlets_branded": sum(m["retail_cr"] for m in mat) * 1e7 / a("A1-20"),
             "events": events, "event_reach_lakh": events * a("A1-22") / 1e5,
             "gig_riders_enrolled_lakh": gig_on / a("A1-23") / 1e5}
    return {"budget_cr": B / 1e7, "matrix": mat, "total_cr": tot,
            "chosen_share_pct": sum(m["retail_cr"] + m["onground_cr"] for m in mat) / tot * 100, "reach": reach}


# ---------------- Case 2: EV-ready tyre ----------------
ICE = {"natural rubber": "A2-10", "SBR": "A2-11", "carbon black": "A2-12", "process oil": "A2-13",
       "chemicals": "A2-14", "other": "A2-15"}
EV = {"natural rubber": "A2-16", "solution SBR": "A2-17", "silica": "A2-18", "silane": "A2-19",
      "carbon black": "A2-20", "process oil": "A2-21", "chemicals": "A2-22"}


def c2(A, s):
    def a(k): return A[k][s]
    P = {r["material"].strip(): float(r["price_inr_per_kg"]) for r in rows(D / "materials_prices.csv")}
    ice_kg = sum(a(k) * P[m] for m, k in ICE.items())
    ev_kg = sum(a(k) * P[m] for m, k in EV.items()) + a("A2-07")
    cap_kg = a("A2-02") * a("A2-04") * a("A2-05")
    delta = cap_kg * (ev_kg - ice_kg) + a("A2-08")
    gain = 1.0 / (1 - a("A2-23") / 100.0 * a("A2-24")) - 1
    return {"compound_ice_per_kg": ice_kg, "compound_ev_per_kg": ev_kg, "cap_kg": cap_kg, "delta_inr": delta,
            "cost_ice": a("A2-06"), "cost_ev": a("A2-06") + delta, "delta_pct": delta / a("A2-06") * 100,
            "range_gain_pct": gain * 100, "km_gain": a("A2-25") * gain,
            "ice_sum": sum(a(k) for k in ICE.values()), "ev_sum": sum(a(k) for k in EV.values())}


# ---------------- Case 3: tractor tyres ----------------
def c3(A, s):
    def a(k): return A[k][s]
    B = a("A3-01") * 1e7 * a("A3-02") / 100.0
    parc = a("A3-03") * 1e5
    seg = {"Commercial": (a("A3-04"), a("A3-07")), "Smallholder": (a("A3-05"), a("A3-08")),
           "Hiring centre": (a("A3-06"), a("A3-09"))}
    sets = {k: parc * sh / yrs for k, (sh, yrs) in seg.items()}
    set_price = 2 * a("A3-10")
    lines = {"Dealer programme": a("A3-16") * a("A3-17"), "Village mechanics": a("A3-18") * a("A3-19"),
             "Field days": a("A3-20") * a("A3-21"), "Harvest credit": a("A3-22") * a("A3-23"),
             "Tyre-life assurance": a("A3-24") * a("A3-14") / 100.0 * a("A3-25") * set_price}
    used = sum(lines.values())
    lines["Measurement and contingency"] = max(0.0, B - used)
    contrib = set_price / (1 + a("A3-26") / 100.0) * (1 - a("A3-27") / 100.0) * a("A3-15") / 100.0
    payback = (sum(lines.values())) / contrib
    return {"budget_cr": B / 1e7, "sets": sets, "market_sets": sum(sets.values()),
            "lines": [{"line": k, "cr": v / 1e7} for k, v in lines.items()], "used_cr": used / 1e7,
            "assurance_cost_cr": lines["Tyre-life assurance"] / 1e7,
            "tco_per_hour": set_price / a("A3-11"), "contrib_per_set": contrib, "payback_sets": payback,
            "share_points": payback / sum(sets.values()) * 100}


# ---------------- tables ----------------
def T(title, heads, rs, src):
    out = ["## " + title, "", "| " + " | ".join(heads) + " |", "|" + "|".join(["---"] * len(heads)) + "|"]
    out += ["| " + " | ".join(str(c) for c in r) + " |" for r in rs]
    return "\n".join(out + ["", "*Source: " + src + "*", ""])


def main():
    A = load_A(); U = universe()
    rul = json.loads(io.open(M / "inputs" / "rulings.json", encoding="utf-8").read())
    R = {s: c4_core(A, s, U) for s in SC}
    tor = tornado(A, U)
    ro = rollout(A, R["base"])
    y1 = sum(q["spend_cr"] for q in ro[:4]); y2 = sum(q["spend_cr"] for q in ro[4:])
    shares = [A["A05a"]["base"], A["A05b"]["base"], A["A05c"]["base"]]
    segs = [{"key": k, "share": sh, "lakh": sh * U["base"]} for k, sh in zip(("S-A", "S-B", "S-C"), shares)]
    bench = pick_bench(); risks = load_risks()
    lines_sc = {s: [{"line": n, "cr": v / 1e7, "pct": v / R[s]["spend"] * 100} for n, v in zip(LINES, R[s]["lines"])]
                for s in SC}
    c4 = dict(universe=U, segments=segs,
              bu_rev_cr={s: A["A01"][s] for s in SC}, envelope_cr={s: R[s]["E"] / 1e7 for s in SC},
              spend_cr={s: R[s]["spend"] / 1e7 for s in SC},
              spend_share_pct={s: R[s]["spend"] / (A["A01"][s] * 1e7) * 100 for s in SC},
              headroom_to_2pct_cr={s: A["A01"][s] * 0.02 - R[s]["spend"] / 1e7 for s in SC},
              members_lakh={s: R[s]["members"] / 1e5 for s in SC}, cost_per_member={s: R[s]["cm"] for s in SC},
              affordable_lakh={s: R[s]["afford"] / 1e5 for s in SC}, cap_lakh={s: R[s]["cap"] / 1e5 for s in SC},
              lines=lines_sc["base"], lines_sc=lines_sc, cpt={s: R[s]["cpt"] for s in SC},
              be={s: R[s]["be"] for s in SC}, weeks={s: 52 / R[s]["be"] for s in SC},
              parts={s: R[s]["parts"] for s in SC}, cash_scheme=cash(A, "base"),
              audit={"n_per_arm": R["base"]["n_arm"], "audits_per_year": R["base"]["audits"],
                     "cost_lakh": R["base"]["audit_cost"] / 1e5},
              rollout=ro, year1_spend_cr=y1, year2_spend_cr=y2, tornado=tor,
              tiers={"t2_entry": int(A["A14"]["base"]), "t2_refs": int(A["A15"]["base"]), "t3_refs": int(A["A16"]["base"])},
              app_name=rul["app_name"], pilot_states=rul["pilot_states"],
              validation={"interviews": A["A38"]["base"], "cities": A["A39"]["base"]}, bench=bench, risks=risks)
    C1 = {s: c1(A, s) for s in SC}; C2 = {s: c2(A, s) for s in SC}; C3 = {s: c3(A, s) for s in SC}
    o1 = {"budget_cr": {s: C1[s]["budget_cr"] for s in SC}, "matrix": C1["base"]["matrix"],
          "chosen_share_pct": C1["base"]["chosen_share_pct"], "reach": C1["base"]["reach"]}
    o2 = {k: C2["base"][k] for k in C2["base"]}
    o2.update(range_gain_pct={s: C2[s]["range_gain_pct"] for s in SC}, km_gain={s: C2[s]["km_gain"] for s in SC},
              delta_pct_sc={s: C2[s]["delta_pct"] for s in SC})
    o3 = {k: C3["base"][k] for k in C3["base"]}
    o3.update(budget_cr={s: C3[s]["budget_cr"] for s in SC}, share_points_sc={s: C3[s]["share_points"] for s in SC})
    checks = {
        "envelope_positive": all(R[s]["E"] > 0 for s in SC),
        "spend_within_envelope": all(R[s]["spend"] <= R[s]["E"] * 1.0001 for s in SC),
        "members_positive": all(R[s]["members"] > 0 for s in SC),
        "lines_sum": all(abs(sum(R[s]["lines"]) - R[s]["spend"]) < 1 for s in SC),
        "be_order": R["bear"]["be"] >= R["base"]["be"] >= R["bull"]["be"],
        "be_sane": 0 < R["base"]["be"] < 100,
        "year1_within": y1 <= R["base"]["E"] / 1e7 * 1.0001,
        "year2_within": y2 <= R["base"]["E"] / 1e7 * 1.0001,
        "segments_sum": abs(sum(shares) - 1) < 0.01,
        "mix_sum": abs(A["A07a"]["base"] + A["A07b"]["base"] + A["A07c"]["base"] - 1) < 0.01,
        "risk_strings": all(len(r["risk_short"] + ": " + r["control_short"]) <= 40 for r in risks[:5]),
        "risk_count": 8 <= len(risks) <= 12,
        "bench_rows": 5 <= len(bench) <= 7 and all(len(b["short"]) <= 16 for b in bench),
        "c1_segment_shares": abs(sum(A[k]["base"] for _, k, _ in SEG1) - 1) < 0.01,
        "c1_channel_shares": all(abs(sum(A[c]["base"] for c in ch) - 1) < 0.01 for _, _, ch in SEG1),
        "c2_recipes_sum": abs(C2["base"]["ice_sum"] - 1) < 0.01 and abs(C2["base"]["ev_sum"] - 1) < 0.01,
        "c3_within_budget": all(C3[s]["used_cr"] <= C3[s]["budget_cr"] * 1.0001 for s in SC),
    }
    flags = {"c2_delta_within_target_base": C2["base"]["delta_pct"] <= A["A2-03"]["base"],
             "c4_be_below_kill_base": R["base"]["be"] <= A["A26"]["base"]}
    h = hashlib.sha1(b"".join(io.open(p, "rb").read() for p in INPUTS)).hexdigest()[:10]
    O = {"meta": {"hash": h, "run_at": datetime.datetime.now().isoformat(timespec="seconds"), "version": "eurogrip-model v1"},
         "checks": checks, "flags": flags, "A": A, "c4": c4, "c1": o1, "c2": o2, "c3": o3}
    io.open(M / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(O, ensure_ascii=False, indent=1))
    b = R["base"]; cs = c4["cash_scheme"]
    tabs = [
        T("T1. Case 4: four ways to count the mechanic and puncture-shop universe (lakh outlets)", ["Method", "Kind", "Low", "Base", "High"],
          [[m["method"], m["kind"], f1(m["low"]), f1(m["base"]), f1(m["high"])] for m in U["methods"]] + [["Model universe", "bear / base / bull", f1(U["bear"]), f1(U["base"]), f1(U["bull"])]],
          "research/data/universe_methods.csv; base = mean of the two estimates, floored at the larger programme count"),
        T("T2. Case 4: the three segments (base universe)", ["Segment", "Share", "Lakh outlets"],
          [[g["key"], f"{g['share'] * 100:.0f}%", f1(g["lakh"])] for g in segs], "A05a to A05c; T1"),
        T("T3. Case 4: cost per member per year (₹)", ["Component"] + list(SC),
          [[k] + [inr(R[s]["parts"][k]) for s in SC] for k in ("tools", "visibility", "training", "field", "tech")] + [["Total"] + [inr(R[s]["cm"]) for s in SC]],
          "A07 to A20, A33, A19m"),
        T("T4. Case 4: annual budget by line (₹ crore) and members", ["Line"] + list(SC),
          [[LINES[i]] + [f2(lines_sc[s][i]["cr"]) for s in SC] for i in range(5)] + [["Spend"] + [f2(R[s]["spend"] / 1e7) for s in SC], ["Envelope"] + [f2(R[s]["E"] / 1e7) for s in SC], ["Share of BU revenue"] + [f"{c4['spend_share_pct'][s]:.2f}%" for s in SC], ["Members (lakh)"] + [f2(R[s]["members"] / 1e5) for s in SC]],
          "A01, A02 and T3"),
        T("T5. Case 4: contribution per tyre and break-even", ["Item"] + list(SC),
          [["Net realisation per tyre (₹)"] + [inr(R[s]["net"]) for s in SC], ["Contribution per tyre (₹)"] + [inr(R[s]["cpt"]) for s in SC], ["Break-even extra tyres per member a year"] + [f1(R[s]["be"]) for s in SC], ["One tyre every (weeks)"] + [f1(52 / R[s]["be"]) for s in SC]],
          "A27 to A30; T4"),
        T("T6. Case 4: what moves break-even most (base case, one assumption at a time)", ["Assumption", "Label", "Break-even low", "Break-even high", "Swing"],
          [[t["id"], t["label"], f1(t["be_low"]), f1(t["be_high"]), f1(t["swing"])] for t in tor], "assumption register; model tornado"),
        T("T7. Case 4: rollout by quarter (base)", ["Quarter", "Members (lakh)", "Spend (₹ crore)"], [[q["q"], f2(q["members_lakh"]), f2(q["spend_cr"])] for q in ro] + [["Year 1", "", f2(y1)], ["Year 2", "", f2(y2)]], "A37a to A37h; T4"),
        T("T8. Case 4: mystery-rider audit design", ["Item", "Value"], [["Shops per arm per round", str(b["n_arm"])], ["Audits per year", str(b["audits"])], ["Audit cost per year (₹ lakh)", f2(b["audit_cost"] / 1e5)]], "A24, A25, A31, A31n; two-proportion formula"),
        T("T9. Case 4: the obvious cash-per-tyre scheme (base)", ["Item", "Value"], [["Tyres rewarded (lakh)", f1(cs["rewarded_units_lakh"])], ["Cost (₹ crore)", f2(cs["cost_cr"])], ["Share spent on tyres that would sell anyway", f"{cs['deadweight_pct']:.0f}%"]], "A27 to A29, A34 to A36"),
        T("T10. Case 4: benchmark programmes as scored", ["Programme", "Category", "Cash", "Tools", "Visibility", "Skill", "Credits advice", "Tracks"], [[x["short"], x["category"], x["cash"], x["tools"], x["visibility"], x["skill"], x["advice"], x["tracks"]] for x in bench], "research/data/benchmarks.csv"),
        T("T11. Case 4: tiers", ["Tier", "Entry", "Referrals a year"], [["Tier 1", "free", f1(A["A15a"]["base"])], ["Tier 2", "%d referrals in 6 months or the course" % A["A14"]["base"], f1(A["A15"]["base"])], ["Tier 3", "%d referrals a year or core-size stock" % A["A16"]["base"], f1(A["A16"]["base"])]], "A14 to A16"),
        T("T12. Case 4: risks and controls", ["ID", "Risk", "P", "I", "Control"], [[r["id"], r["risk_long"], r["p"], r["i"], r["control_long"]] for r in risks], "model/inputs/risks.csv"),
        T("T13. Case 1: budget by segment and channel (₹ crore, base)", ["Segment", "Digital", "Retail", "On-ground"], [[m["segment"], f2(m["digital_cr"]), f2(m["retail_cr"]), f2(m["onground_cr"])] for m in C1["base"]["matrix"]], "A1-01 to A1-18"),
        T("T14. Case 1: what the budget buys (base)", ["Item", "Value"], [[k, f1(v)] for k, v in C1["base"]["reach"].items()] + [["Share where the tyre is chosen (retail + on-ground)", f"{C1['base']['chosen_share_pct']:.0f}%"]], "A1-19 to A1-24"),
        T("T15. Case 1: budget by scenario (₹ crore)", ["Scenario", "Budget"], [[s, f2(C1[s]["budget_cr"])] for s in SC], "A1-01, A1-02"),
        T("T16. Case 2: compound cost (₹ per kg)", ["Item"] + list(SC), [["Petrol-scooter tread compound"] + [f1(C2[s]["compound_ice_per_kg"]) for s in SC], ["EV-ready cap compound incl. extra mixing"] + [f1(C2[s]["compound_ev_per_kg"]) for s in SC], ["Cap mass per tyre (kg)"] + [f2(C2[s]["cap_kg"]) for s in SC]], "materials_prices.csv; A2-02 to A2-22"),
        T("T17. Case 2: cost delta and range gain", ["Item"] + list(SC), [["Cost delta per tyre (₹)"] + [inr(C2[s]["delta_inr"]) for s in SC], ["Cost delta (%)"] + [f1(C2[s]["delta_pct"]) for s in SC], ["Range gain (%)"] + [f1(C2[s]["range_gain_pct"]) for s in SC], ["Range gain (km per charge)"] + [f1(C2[s]["km_gain"]) for s in SC]], "A2-06 to A2-08, A2-23 to A2-25"),
        T("T18. Case 3: rear-tyre sets replaced a year by segment (base)", ["Segment", "Sets a year (lakh)"], [[k, f2(v / 1e5)] for k, v in C3["base"]["sets"].items()], "A3-03 to A3-09"),
        T("T19. Case 3: budget lines (₹ crore, base)", ["Line", "₹ crore"], [[x["line"], f2(x["cr"])] for x in C3["base"]["lines"]], "A3-14 to A3-25"),
        T("T20. Case 3: cost per hour, payback and share points", ["Item"] + list(SC), [["Rear pair cost per hour, commercial (₹)"] + [f1(C3[s]["tco_per_hour"]) for s in SC], ["Contribution per set (₹)"] + [inr(C3[s]["contrib_per_set"]) for s in SC], ["Sets to pay back the budget"] + [inr(C3[s]["payback_sets"]) for s in SC], ["Share points that implies"] + [f2(C3[s]["share_points"]) for s in SC]], "A3-10 to A3-27"),
    ]
    io.open(M / "model_tables.md", "w", encoding="utf-8").write("# Model tables\n\nModel " + h + ", run " + O["meta"]["run_at"] + ".\n\n" + "\n".join(tabs))
    print(json.dumps({"hash": h, "be": {s: round(R[s]["be"], 2) for s in SC}, "members_lakh": {s: round(R[s]["members"] / 1e5, 2) for s in SC},
                      "spend_cr": {s: round(R[s]["spend"] / 1e7, 2) for s in SC}, "checks_failed": [k for k, v in checks.items() if not v], "flags": flags}, indent=1))
    ok = all(checks.values())
    print("MODEL PASS" if ok else "MODEL FAIL")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
