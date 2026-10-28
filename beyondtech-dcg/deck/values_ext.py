"""Extra V keys for the redesigned slides 2, 3 and 5. gen.py pre() calls extend(V, O, G) straight after make_values.build(O).
G is the make_values namespace, so the rupee and digit formatters are shared. Nothing here may change an existing key
(gen.py asserts it). Every number is arithmetic on model_outputs.json; nothing is typed in."""
def extend(V, O, G):
    rs, lk, n1, inr, CH = G["rs"], G["lk"], G["n1"], G["inr"], G["CH"]
    t3 = O["T3"]; t4 = O["T4"]; b6 = O["T6"]["base"]; t1 = O["T1"]["base"]; t2 = O["T2"]["base"]; b12 = O["T12"]["base"]
    fund = {r["ch"]: r for r in t4["rows"]}; te = t4["total_enrol"]; tc = t4["total_cash"]
    # Slide 5 cost curve: one row per channel, cheapest first.
    # [name, CAC number, CAC text, funded, organic, bar width in enrolments, funded enrolments text, funded cash text]
    curve = []
    for r in sorted(t3, key=lambda r: r["cac"]):
        f = fund[r["ch"]]; on = f["funded_cash"] > 0
        curve.append([CH[r["ch"]], round(r["cac"]), rs(r["cac"]), on, bool(r["organic"]), round(f["funded_enrol"] if on else r["enrol"], 2), n1(f["funded_enrol"]), rs(f["funded_cash"])])
    assert [c[3] for c in curve] == [True] * 9 + [False] * 2 and abs(sum(c[5] for c in curve if c[3]) - te) < 0.2, "funding order changed: re-read REDESIGN-PLAN.md section 5 before building slide 5"
    assert curve[8][0] == "Meta retargeting" and curve[0][0] == "Gated library", [c[0] for c in curve]
    rt = fund["C-PD-1"]
    # Three ways to spend at DTU (slide 2 exhibit, slide 5 card): every organic channel, every paid channel, the funded mix.
    org = [r for r in t3 if r["organic"]]; paid = [r for r in t3 if not r["organic"]]
    oe, oc = sum(r["enrol"] for r in org), sum(r["cash"] for r in org); pe, pc = sum(r["enrol"] for r in paid), sum(r["cash"] for r in paid)
    fo = sum(f["funded_enrol"] for f in t4["rows"] if f["organic"])
    assert abs(oc - t4["organic_cash"]) < 2 and abs(oe - fo) < 0.05 and pe < te and oe < te, (oc, oe, pe)
    share = tc / b12["total_spend"]; assert 0.64 < share < 0.68, share
    V.update(
        curve=curve, cac_raw=round(b6["blended_cac"], 2), rt_cash=f"{round(rt['funded_cash'] / tc * 100)}%", rt_tail=f"{round(rt['funded_enrol'] / te * 100)}%",
        cold=[curve[9][2], curve[10][2]],
        paths=[["Organic only", n1(oe), rs(oc), V["layer"][0][3] + " each", round(oe, 1), 0, f"{round(te - oe)} short of {inr(te)}"],
               ["Paid only", n1(pe), rs(pc), rs(pc / pe) + " each", 0, round(pe, 1), f"{round(te - pe)} short of {inr(te)}"],
               ["Cheapest first", n1(te), rs(tc), V["cac"] + " each", round(fo, 1), round(te - fo, 1), "target met"]],
        org_cap=str(round(oe)), paid_cap=str(round(pe)), paid_each=rs(pc / pe), paid_cash=rs(pc), paid_x=f"{(pc / pe) / b6['blended_cac']:.1f}",
        fee=rs(b6["fee"]), open_pct=f"{round(t1['sam'] / t1['tam'] * 100)}%", sel_pct=f"{round(t2['implied_selection_rate'] * 100)}%",
        bridge=[t2["enrolments_today"], round(te - t2["enrolments_today"]), b12["campus_enrolments"], round(b12["total_enrolments"])],
        spend_parts=[tc, b12["total_spend"] - tc], ncamp=str(len(O["final4"])))
    assert V["bridge"][0] + V["bridge"][1] + V["bridge"][2] == V["bridge"][3], V["bridge"]
    return V
