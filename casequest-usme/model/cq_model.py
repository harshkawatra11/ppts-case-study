# ===== CASEQUEST USME MODEL v1 =====
"""Unit economics of one handmade export order under two lanes, three scenarios, pilot sizing and integrity load.
Run: python3 -X utf8 casequest-usme/model/cq_model.py   (writes model_outputs.json, model_tables.md, ../deck/values.json)"""
import json, hashlib, pathlib, io
try: HERE = pathlib.Path(__file__).resolve().parent
except NameError: HERE = pathlib.Path("casequest-usme/model").resolve()
OUT = HERE; DECK = HERE.parent / "deck"
def inr(v, d=0):
    s = ("%." + str(d) + "f") % abs(v); a, _, b = s.partition("."); 
    if len(a) > 3:
        h, t = a[:-3], a[-3:]; g = []
        while len(h) > 2: g.insert(0, h[-2:]); h = h[:-2]
        if h: g.insert(0, h)
        a = ",".join(g) + "," + t
    r = a + ("." + b if b else ""); return ("−" if v < 0 else "") + "₹" + r
def pct(v, d=0): return (("%." + str(d) + "f") % (v * 100)) + "%"
# ---------- assumptions: id -> (bear, base, bull, unit, basis). Bear = least favourable to the recommendation ----------
A = {
 "A01": (88, 88, 88, "INR per USD", "RBI reference rate, verify at freeze (Lane F)"),
 "A02": (40, 45, 50, "USD retail price abroad", "representative handmade decor or textile item; Lane B listings scan"),
 "A03": (0.50, 0.50, 0.50, "kg packed weight", "representative item"),
 "A04": (900, 800, 750, "INR seller product cost", "cluster ex-works cost; Lane B"),
 "A05": (1100, 1000, 900, "INR direct parcel freight 0.5 kg", "India Post ITPS and courier aggregator quotes; Lane F"),
 "A06": (0.15, 0.15, 0.15, "platform referral share of retail", "Amazon and Etsy fee pages; Lane B"),
 "A07": (60, 45, 35, "minutes of seller paperwork per direct parcel", "case: forms, portals, agents; Lane E"),
 "A08": (150, 150, 150, "INR value of one seller hour", "team assumption"),
 "A09": (150, 120, 100, "INR agent or CHA fee per direct parcel", "Lane E"),
 "A10": (0.22, 0.20, 0.18, "return rate, direct parcel", "CBIC cites 20 to 25% for e-commerce exports; Lane D"),
 "A11": (0.85, 0.80, 0.75, "share of direct returns abandoned abroad", "case: sellers absorb the loss; Lane E"),
 "A12": (1500, 1300, 1200, "INR cost to bring one parcel back and clear it", "return freight plus clearance; Lane F"),
 "A13": (450, 380, 320, "INR bulk air freight per chargeable kg, 100 kg plus", "forwarder benchmarks; Lane F"),
 "A14": (1.3, 1.25, 1.2, "chargeable over packed weight in a carton", "volumetric factor"),
 "A15": (6.0, 5.5, 5.0, "USD destination last-mile per order", "USPS Ground Advantage or Royal Mail tables; Lane F"),
 "A16": (5.0, 4.5, 4.0, "USD warehouse pick, pack and storage per order", "3PL and FBA fee tables; Lane F"),
 "A17": (0.10, 0.08, 0.07, "EOR or consolidator margin on product cost", "Lane B"),
 "A18": (10, 6, 4, "minutes of seller work per order, consolidated", "batch pickup"),
 "A19": (0.18, 0.15, 0.12, "return rate, warehouse lane", "faster delivery, local returns; Lane E"),
 "A20": (0.50, 0.60, 0.70, "share of warehouse returns resold locally", "Lane E"),
 "A21": (4.0, 3.5, 3.0, "USD to process one local return", "3PL tables"),
 "A22": (0.10, 0.07, 0.05, "unsold stock written off, share of units shipped", "inventory risk"),
 "A23": (0.12, 0.11, 0.10, "annual working capital cost", "MSME lending rates; Lane D"),
 "A24": (5, 4, 3, "months stock is held", "turn assumption"),
 "A25": (0.0, 0.0, 0.0, "destination duty and VAT difference between lanes", "held equal; shown separately in research"),
}
SC = ("bear", "base", "bull")
def a(k, s): return A[k][SC.index(s)]
def direct(s):
    fx = a("A01", s); price = a("A02", s) * fx; fee = a("A06", s) * price
    admin = a("A07", s) / 60 * a("A08", s) + a("A09", s); fr = a("A05", s); prod = a("A04", s)
    deliv = price - fee - fr - admin - prod
    r = a("A10", s); ab = a("A11", s)
    loss_aband = prod + fr + admin            # refund given, product lost; fee assumed refunded by platform
    loss_back = a("A12", s) + fr + admin     # product recovered, both freights and the clearance lost
    ret = ab * loss_aband + (1 - ab) * loss_back
    exp = (1 - r) * deliv - r * ret
    cost_to_serve = fr + admin + r * (ab * (fr + admin) + (1 - ab) * (a("A12", s) + fr + admin))
    return dict(price=price, fee=fee, freight=fr, admin=admin, product=prod, delivered=deliv, ret_loss=ret, expected=exp, cts=cost_to_serve)
def wh(s):
    fx = a("A01", s); price = a("A02", s) * fx; fee = a("A06", s) * price; prod = a("A04", s)
    fr = a("A13", s) * a("A03", s) * a("A14", s); lm = a("A15", s) * fx; ful = a("A16", s) * fx
    eor = a("A17", s) * prod; admin = a("A18", s) / 60 * a("A08", s)
    wc = prod * a("A23", s) * a("A24", s) / 12; wo = a("A22", s) * (prod + fr) / (1 - a("A22", s))
    deliv = price - fee - fr - lm - ful - eor - admin - prod - wc - wo
    r = a("A19", s); rs = a("A20", s); proc = a("A21", s) * fx
    loss_resold = proc + lm                    # resold later: pay return processing and the wasted delivery
    loss_scrap = proc + lm + prod + fr          # not resaleable: also lose the product and inbound freight
    ret = rs * loss_resold + (1 - rs) * loss_scrap
    exp = (1 - r) * deliv - r * ret
    cts = fr + lm + ful + eor + admin + wc + wo + r * (proc + lm)
    return dict(price=price, fee=fee, freight=fr, lastmile=lm, fulfil=ful, eor=eor, admin=admin, product=prod, wc=wc, writeoff=wo,
                delivered=deliv, ret_loss=ret, expected=exp, cts=cts)
D = {s: direct(s) for s in SC}; W = {s: wh(s) for s in SC}
# ---------- reformed direct parcel lane (requirement 2 effect): assisted filing, pooled rate card, matched returns ----------
A["A27"] = (25, 15, 10, "minutes of seller paperwork per parcel with the cluster desk and pre-filled declaration", "Lane E")
A["A28"] = (0.05, 0.12, 0.18, "pooled rate-card saving on direct parcel freight", "cluster tender; Lane F")
A["A29"] = (1200, 950, 800, "INR to bring a parcel back under matched duty-free re-import", "CBIC returns module; Lane D")
A["A30"] = (0.75, 0.60, 0.50, "unused (kept for ID stability)", "")
A["A31"] = (0.50, 0.65, 0.80, "share of direct returns routed to a pooled return point abroad", "3PL return networks; Lane F")
def reformed(s):
    fx = a("A01", s); price = a("A02", s) * fx; fee = a("A06", s) * price; prod = a("A04", s)
    fr = a("A05", s) * (1 - a("A28", s)); admin = a("A27", s) / 60 * a("A08", s)
    deliv = price - fee - fr - admin - prod; r = a("A10", s); hub = a("A31", s); rs = a("A20", s); proc = a("A21", s) * fx
    # a returned parcel goes to a pooled return point in the destination (share hub) or is abandoned; unsold hub stock comes home in one
    # monthly re-import bill under the matched duty-free route (cost A29 spread across a 40-item carton)
    hub_loss = fr + admin + proc + (1 - rs) * (a("A29", s) / 40) + (1 - rs) * 0 
    hub_loss += 0  # resold items recover the product; unsold items are recovered at home, so no product loss in either branch
    ret = hub * hub_loss + (1 - hub) * (prod + fr + admin)
    exp = (1 - r) * deliv - r * ret
    cts = fr + admin + r * (hub * (proc + (1 - rs) * a("A29", s) / 40) + 0)
    return dict(price=price, fee=fee, freight=fr, admin=admin, product=prod, delivered=deliv, ret_loss=ret, expected=exp, cts=cts)
R = {s: reformed(s) for s in SC}
# ---------- sensitivity grid: expected contribution gap (warehouse minus direct today) by return rate and freight ----------
def with_(over, f, s="base"):
    old = {k: A[k] for k in over}
    for k, v in over.items(): A[k] = tuple([v] * 3) + A[k][3:]
    try: return f(s)["expected"]
    finally: A.update(old)
RR = [0.10, 0.15, 0.20, 0.25, 0.30]; FRT = [800, 1000, 1200, 1400]
GRID = [[round(with_({"A10": r, "A05": fq}, direct)) for fq in FRT] for r in RR]
GRIDW = [round(with_({"A19": r * 0.75}, wh)) for r in RR]
# ---------- tornado on the base gap (warehouse minus direct today), each input moved to its bear and bull value ----------
def gap_with(k, v):
    old = A[k]; A[k] = tuple([v] * 3) + A[k][3:]
    try: return reformed("base")["expected"] - direct("base")["expected"]
    finally: A[k] = old
G0 = R["base"]["expected"] - D["base"]["expected"]
TOR = sorted([(k, A[k][3], gap_with(k, A[k][0]) - G0, gap_with(k, A[k][2]) - G0) for k in ["A02","A04","A05","A07","A09","A10","A20","A21","A27","A28","A29","A31"]],
             key=lambda t: -max(abs(t[2]), abs(t[3])))

# ---------- integrity load: declarations and examination per 10,000 orders ----------
ORD = 10000; PER_CARTON = 40; CARTONS_PER_BILL = 5
decl_direct = ORD; decl_wh = ORD / (PER_CARTON * CARTONS_PER_BILL)
# ---------- pilot ----------
PIL = dict(clusters=6, sellers_per_cluster=400, wave1_share=0.5, months=12)
PIL["sellers"] = PIL["clusters"] * PIL["sellers_per_cluster"]
BUD = {"Cluster export desks (6 x 4 staff x 12 months)": 1_15_20_000, "Seller onboarding, cataloguing, photography": 72_00_000,
       "Data link and dashboard (IEC, GSTIN, Udyam, eBRC)": 60_00_000, "First-shipment freight bridge (capped per seller)": 48_00_000,
       "Independent evaluation": 30_00_000, "Contingency (10%)": 0}
BUD["Contingency (10%)"] = round(sum(v for k, v in BUD.items()) * 0.10)
BTOT = sum(BUD.values())
ACT = {"bear": 0.25, "base": 0.40, "bull": 0.55}            # share of enrolled sellers exporting by month 12
ORD_M = {"bear": 6, "base": 10, "bull": 15}                 # orders a month per active seller in months 7 to 12
def pilot(s):
    act = round(PIL["sellers"] * ACT[s]); orders = act * ORD_M[s] * 6
    gain = orders * (reformed(s)["expected"] - direct(s)["expected"])   # every pilot order uses the reformed parcel lane
    gmv = orders * D[s]["price"]
    return dict(active=act, orders=orders, gain=gain, gmv=gmv, cost_per_active=BTOT / act)
P = {s: pilot(s) for s in SC}
# ---------- break-even: warehouse lane beats direct at what monthly order volume per SKU? (fixed listing + inbound) ----------
FIXED_SKU_M = 2500  # INR a month per SKU for storage minimums and inbound handling (assumption A26)
A["A26"] = (2500, 2500, 2500, "INR a month fixed per SKU in the warehouse lane", "3PL minimums")
be = {s: FIXED_SKU_M / max(1e-9, W[s]["expected"] - D[s]["expected"]) for s in SC}
beR = {s: (FIXED_SKU_M / (W[s]["expected"] - R[s]["expected"])) if W[s]["expected"] > R[s]["expected"] else None for s in SC}

# ---------- option filter (team judgement, 1 to 5; weights stated on the slide) ----------
WTS = [("Seller cost per order", 0.30), ("Customs and tax integrity", 0.25), ("Fiscal cost (5 = cheapest)", 0.15), ("Time to deliver", 0.15), ("Builds on the 2026 reforms", 0.15)]
OPTS = [("New single-window export portal", [3, 3, 2, 1, 2]), ("Freight subsidy per parcel", [4, 2, 1, 4, 1]),
        ("Exempt low-value parcels from checks", [4, 1, 4, 4, 1]), ("Government export marketplace", [2, 3, 2, 1, 2]),
        ("Overseas warehouses for every cluster", [3, 4, 2, 2, 3]), ("Cluster desk, seller tiers, pooled rates and returns", [5, 4, 4, 4, 5])]
OSC = [(n, sc, round(sum(v * w for v, (_, w) in zip(sc, WTS)), 2)) for n, sc in OPTS]
OSC_EQ = [(n, round(sum(sc) / len(sc), 2)) for n, sc in OPTS]
# ---------- checks ----------
chk = []
def ck(name, ok): chk.append((name, bool(ok))); print(("PASS " if ok else "FAIL ") + name)
ck("scenario order direct", D["bear"]["expected"] < D["base"]["expected"] < D["bull"]["expected"])
ck("scenario order warehouse", W["bear"]["expected"] < W["base"]["expected"] < W["bull"]["expected"])
ck("warehouse beats direct in base", W["base"]["expected"] > D["base"]["expected"])
ck("cost to serve lower in base", W["base"]["cts"] < D["base"]["cts"])
ck("budget sums", BTOT == sum(BUD.values()))
ck("declarations cut", decl_wh < decl_direct / 100)
ck("pilot sellers", PIL["sellers"] == 2400)
ck("reformed direct beats today in base", R["base"]["expected"] > D["base"]["expected"])
ck("our package ranks first weighted and equal", max(OSC, key=lambda t: t[2])[0] == OPTS[-1][0] and max(OSC_EQ, key=lambda t: t[1])[0] == OPTS[-1][0])
ck("weights sum to one", abs(sum(w for _, w in WTS) - 1) < 1e-9)
ck("break-even positive", all(v > 0 for v in be.values()))
ok = all(c[1] for c in chk)
out = {"assumptions": {k: list(v) for k, v in A.items()}, "direct": D, "warehouse": W, "pilot": P, "budget": BUD, "budget_total": BTOT,
       "reformed": R, "grid": GRID, "gridw": GRIDW, "tornado": TOR, "declarations": {"direct": decl_direct, "warehouse": decl_wh}, "breakeven_orders_per_sku_month": be}
h = hashlib.sha256(json.dumps(out, sort_keys=True, default=str).encode()).hexdigest()[:10]
b = "base"; gapu = W[b]["expected"] - D[b]["expected"]; ctsd = 1 - W[b]["cts"] / D[b]["cts"]
print("CHECKS %d/%d HASH %s" % (sum(c[1] for c in chk), len(chk), h))
print("FINDINGS", inr(D[b]["expected"]), inr(R[b]["expected"]), inr(W[b]["expected"]), inr(R[b]["expected"]-D[b]["expected"]), inr(D[b]["cts"]), inr(R[b]["cts"]), int(decl_wh), inr(BTOT), P[b]["active"], round(be[b]))
for s in SC: print(s, "direct", round(D[s]["expected"], 1), "wh", round(W[s]["expected"], 1), "ctsD", round(D[s]["cts"]), "ctsW", round(W[s]["cts"]), "act", P[s]["active"], "gain", round(P[s]["gain"]))
for s in SC: print(s, "reformed", round(R[s]["expected"],1), "ctsR", round(R[s]["cts"]))
print("GRID", GRID); print("GRIDW", GRIDW)
for t in TOR[:8]: print("TOR", t[0], round(t[2]), round(t[3]))
for k in ("freight","admin","ret_loss","delivered"): print(k, round(D["base"][k]), round(R["base"][k]), round(W["base"].get(k,0)))
print("wh parts", {k: round(v) for k, v in W["base"].items()})

# ---------- waterfall today -> reformed parcel (sequential, base) ----------
def seq():
    steps = [("Paperwork at the cluster desk", {"A07": a("A27","base"), "A09": 0}), ("Pooled rate card", {"A05": a("A05","base")*(1-a("A28","base"))}),
             ("Returns pooled abroad", None)]
    cur = {}; prev = direct("base")["expected"]; rows = [("Today, direct parcel", prev)]
    for name, ov in steps:
        if ov is None:
            v = R["base"]["expected"]
        else:
            cur.update(ov); old = {k: A[k] for k in cur}
            for k, vv in cur.items(): A[k] = tuple([vv]*3) + A[k][3:]
            try: v = direct("base")["expected"]
            finally: A.update(old)
        rows.append((name, v - prev)); prev = v
    rows.append(("Reformed parcel lane", prev)); return rows
WF = seq()
assert abs(WF[-1][1] - R["base"]["expected"]) < 0.01, (WF[-1][1], R["base"]["expected"])
fmt = lambda v: inr(round(v))
SHORT = {"A05": "Parcel freight, 0.5 kg, \u20b9", "A07": "Paperwork today, minutes", "A09": "Agent fee, \u20b9", "A10": "Return rate today",
         "A11": "Returns abandoned abroad", "A27": "Paperwork at the desk, minutes", "A28": "Rate-card saving", "A31": "Returns sent to pooled point"}
V = {"hash": h, "fx": "₹%d per USD" % a("A01","base"), "price": fmt(D["base"]["price"]),
     "today": fmt(D["base"]["expected"]), "reformed": fmt(R["base"]["expected"]), "wh": fmt(W["base"]["expected"]),
     "uplift": fmt(R["base"]["expected"] - D["base"]["expected"]), "uplift_pct": pct((R["base"]["expected"] - D["base"]["expected"]) / D["base"]["expected"]),
     "bear_today": fmt(D["bear"]["expected"]), "bear_ref": fmt(R["bear"]["expected"]), "bear_wh": fmt(W["bear"]["expected"]),
     "bull_today": fmt(D["bull"]["expected"]), "bull_ref": fmt(R["bull"]["expected"]), "bull_wh": fmt(W["bull"]["expected"]),
     "cts_today": fmt(D["base"]["cts"]), "cts_ref": fmt(R["base"]["cts"]), "cts_wh": fmt(W["base"]["cts"]),
     "ret_loss_today": fmt(D["base"]["ret_loss"]), "ret_share": pct(a("A10","base")*D["base"]["ret_loss"]/(D["base"]["price"]-D["base"]["fee"]-D["base"]["product"])),
     "admin_today": fmt(D["base"]["admin"]), "admin_ref": fmt(R["base"]["admin"]), "freight_today": fmt(D["base"]["freight"]),
     "wf": [[n, round(v)] for n, v in WF], "grid": GRID, "grid_r": [pct(r) for r in RR], "grid_f": [inr(f) for f in FRT], "gridw": GRIDW,
     "tornado": [[t[0], t[1], round(t[2]), round(t[3])] for t in TOR[:8]],
     "decl_direct": "{:,}".format(decl_direct), "decl_wh": str(int(decl_wh)),
     "sellers": "{:,}".format(PIL["sellers"]), "clusters": PIL["clusters"], "budget": inr(BTOT), "budget_cr": "₹%.2f crore" % (BTOT/1e7),
     "budget_rows": [[k, inr(v)] for k, v in BUD.items()],
     "act": {s: P[s]["active"] for s in SC}, "orders": {s: P[s]["orders"] for s in SC}, "gain": {s: inr(round(P[s]["gain"]/1e5,1)*1e5) for s in SC},
     "gain_cr": {s: "₹%.2f crore" % (P[s]["gain"]/1e7) for s in SC}, "cpa": {s: inr(round(P[s]["cost_per_active"])) for s in SC},
     "be_sku": round(be["base"]),
     "a1_rows": [["Price abroad", fmt(D[b]["price"]), fmt(R[b]["price"]), fmt(W[b]["price"])], ["Platform fee", fmt(D[b]["fee"]), fmt(R[b]["fee"]), fmt(W[b]["fee"])],
                 ["Product cost", fmt(D[b]["product"]), fmt(R[b]["product"]), fmt(W[b]["product"])],
                 ["Freight and delivery", fmt(D[b]["freight"]), fmt(R[b]["freight"]), fmt(W[b]["freight"] + W[b]["lastmile"] + W[b]["fulfil"])],
                 ["Paperwork and agent", fmt(D[b]["admin"]), fmt(R[b]["admin"]), fmt(W[b]["admin"])],
                 ["Consolidator, stock, write-off", "\u20b90", "\u20b90", fmt(W[b]["eor"] + W[b]["wc"] + W[b]["writeoff"])],
                 ["Expected return effect", fmt(D[b]["delivered"] - D[b]["expected"]), fmt(R[b]["delivered"] - R[b]["expected"]), fmt(W[b]["delivered"] - W[b]["expected"])],
                 ["Contribution per order", fmt(D[b]["expected"]), fmt(R[b]["expected"]), fmt(W[b]["expected"])]],
     "a3_rows": [[k, SHORT[k], str(A[k][0]), str(A[k][1]), str(A[k][2])] for k in SHORT], "opt_heads": [w[0] for w in WTS], "opt_w": [pct(w[1]) for w in WTS], "opts": [[n] + [str(v) for v in sc] + ["%.2f" % t] for n, sc, t in OSC], "beR": None if beR["base"] is None else round(beR["base"])}
OUT.mkdir(parents=True, exist_ok=True); DECK.mkdir(parents=True, exist_ok=True)
io.open(OUT / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(out, indent=1, default=str, ensure_ascii=False))
io.open(DECK / "values.json", "w", encoding="utf-8").write(json.dumps(V, indent=1, ensure_ascii=False))
L = ["# CaseQuest model tables (hash %s)" % h, "", "Every value is a team assumption or a model output unless a row says otherwise. Verify inputs through the research lanes before freeze.", ""]
def tab(t, heads, rows): L.extend(["### " + t, "| " + " | ".join(heads) + " |", "|" + "---|" * len(heads)] + ["| " + " | ".join(str(c) for c in r) + " |" for r in rows] + [""])
tab("T1. Assumption register", ["ID", "Input", "Bear", "Base", "Bull", "Basis"], [[k, v[3], v[0], v[1], v[2], v[4]] for k, v in A.items()])
for nm, M in (("T2. Today's direct parcel, per order", D), ("T3. Reformed parcel lane, per order", R), ("T4. Consolidated warehouse lane, per order", W)):
    keys = list(M["base"].keys()); tab(nm, ["Line"] + list(SC), [[k] + [inr(round(M[s][k])) for s in SC] for k in keys])
tab("T5. Expected contribution per order by lane", ["Scenario", "Today", "Reformed parcel", "Warehouse", "Reformed minus today"], [[s, fmt(D[s]["expected"]), fmt(R[s]["expected"]), fmt(W[s]["expected"]), fmt(R[s]["expected"]-D[s]["expected"])] for s in SC])
tab("T6. Base waterfall, today to reformed parcel", ["Step", "INR per order"], [[n, fmt(v)] for n, v in WF])
tab("T7. Today's contribution by return rate and freight (base)", ["Return rate"] + [inr(f) for f in FRT], [[pct(r)] + [inr(v) for v in row] for r, row in zip(RR, GRID)])
tab("T8. Tornado on the reformed-minus-today uplift (base " + fmt(G0) + ")", ["ID", "Input", "At bear", "At bull"], [[t[0], t[1], fmt(t[2]), fmt(t[3])] for t in TOR])
tab("T9. Customs declarations per 10,000 orders", ["Lane", "Declarations"], [["Direct parcel", "{:,}".format(decl_direct)], ["Consolidated (40 orders a carton, 5 cartons a bill)", int(decl_wh)]])
tab("T10. Pilot budget", ["Line", "INR"], [[k, inr(v)] for k, v in BUD.items()] + [["Total", inr(BTOT)]])
tab("T11. Pilot outcomes in our model", ["Scenario", "Active sellers", "Orders months 7 to 12", "Seller gain vs today", "Budget per active seller"], [[s, P[s]["active"], "{:,}".format(P[s]["orders"]), "₹%.2f crore" % (P[s]["gain"]/1e7), inr(round(P[s]["cost_per_active"]))] for s in SC])
tab("T12. Warehouse break-even orders per SKU a month", ["Scenario", "Against today", "Against reformed parcel"], [[s, round(be[s]), "never at unit level" if beR[s] is None else round(beR[s])] for s in SC])
tab("T13. Option filter (team judgement)", ["Option"] + ["%s (%s)" % (w[0], pct(w[1])) for w in WTS] + ["Weighted", "Equal weights"], [[n] + sc + ["%.2f" % t, "%.2f" % e] for (n, sc, t), (_, e) in zip(OSC, OSC_EQ)])
io.open(OUT / "model_tables.md", "w", encoding="utf-8").write("\n".join(L) + "\n")
print("WF", [(n, round(v)) for n, v in WF]); print("beR", beR); print("V keys", len(V))
