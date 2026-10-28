"""Primary research analysis for the Toing case (Team IdeaForge).
Reads survey_responses.csv, cart_log.csv and toing_menu_scan.csv if present.
Writes primary_outputs.json and primary_tables.md. Never invents data: a missing
file or a column with no answers produces n = 0 and None values."""
import csv, json, math, pathlib, statistics as st
HERE = pathlib.Path(__file__).parent

def wilson(k, n, z=1.96):
    if n == 0: return (None, None)
    p = k / n; d = 1 + z*z/n
    c = (p + z*z/(2*n)) / d; h = z*math.sqrt(p*(1-p)/n + z*z/(4*n*n)) / d
    return (round(100*(c-h)), round(100*(c+h)))

def pct(k, n): return None if n == 0 else round(100*k/n)

def load_csv(name):
    f = HERE / name
    if not f.exists(): return []
    with open(f, encoding="utf-8-sig", newline="") as fh:
        return list(csv.DictReader(fh))

def qcol(row_keys, q):
    for k in row_keys:
        if k.strip().startswith(q + "."): return k
    return None

def survey():
    rows = load_csv("survey_responses.csv")
    O = {"n_total": len(rows)}
    if not rows: return O, {}
    keys = list(rows[0].keys()); col = {f"Q{i}": qcol(keys, f"Q{i}") for i in range(1, 15)}
    def ans(q): return [r[col[q]].strip() for r in rows if col[q] and r[col[q]].strip()]
    dist = {}
    for q in [f"Q{i}" for i in range(1, 15) if i != 5]:
        a = ans(q); d = {}
        for x in a: d[x] = d.get(x, 0) + 1
        dist[q] = {"n": len(a), "counts": d, "pct": {k: pct(v, len(a)) for k, v in d.items()}}
    q5 = ans("Q5"); apps = ["Swiggy","Zomato","Toing","Rapido Ownly","magicpin","EatSure","Zepto Café","Blinkit Bistro","Directly from a restaurant or mess (phone or WhatsApp)","None of these"]
    dist["Q5"] = {"n": len(q5), "pct": {a: pct(sum(1 for x in q5 if a in x), len(q5)) for a in apps}}
    n5 = len(q5); either = sum(1 for x in q5 if ("Swiggy" in x or "Zomato" in x))
    O["k1_uses_swiggy_or_zomato_pct"] = pct(either, n5); O["k1_ci"] = wilson(either, n5)
    O["k1_new_to_category_pct"] = None if n5 == 0 else 100 - O["k1_uses_swiggy_or_zomato_pct"]
    O["k1_uses_swiggy_pct"] = dist["Q5"]["pct"].get("Swiggy")
    def share(q, yes):
        a = ans(q); k = sum(1 for x in a if x in yes); return pct(k, len(a)), wilson(k, len(a)), len(a)
    O["k2_pickup_always_pct"], O["k2_ci"], O["k2_n"] = share("Q8", ["Yes, always"])
    O["k2_pickup_any_pct"], _, _ = share("Q8", ["Yes, always", "Sometimes"])
    O["k3_slot_always_pct"], O["k3_ci"], O["k3_n"] = share("Q9", ["Yes, always"])
    O["k3_slot_any_pct"], _, _ = share("Q9", ["Yes, always", "Sometimes"])
    fees = {"₹0": 0, "₹5": 5, "₹10": 10, "₹15": 15, "₹20 or more": 20}
    fv = sorted(fees[x] for x in ans("Q10") if x in fees)
    O["k4_fee_median"] = st.median(fv) if fv else None
    O["k4_fee_ge10_pct"] = pct(sum(1 for v in fv if v >= 10), len(fv))
    O["k5_pass_yes_pct"], O["k5_ci"], O["k5_n"] = share("Q11", ["Yes"])
    O["k5_pass_yes_maybe_pct"], _, _ = share("Q11", ["Yes", "Maybe"])
    O["k6_prefer_inapp_pct"], O["k6_ci"], O["k6_n"] = share("Q12", ["Inside the Swiggy or Zomato app I already use"])
    O["k6_prefer_separate_pct"], _, _ = share("Q12", ["In a separate budget-meals app"])
    w = {"None": 0, "A few": 0.2, "About half": 0.5, "Most": 0.75, "All": 1.0}
    tv = [w[x] for x in ans("Q13") if x in w]
    O["k7_tradedown_rate"] = round(sum(tv)/len(tv), 3) if tv else None
    O["k7_half_or_more_pct"] = pct(sum(1 for v in tv if v >= 0.5), len(tv)); O["k7_n"] = len(tv)
    mid = {"0": 0, "1 to 2": 1.5, "3 to 5": 4, "6 to 10": 8, "More than 10": 12}
    fq = [mid[x] for x in ans("Q7") if x in mid]
    O["k8_freq_at_99"] = round(sum(fq)/len(fq), 1) if fq else None
    mid3 = {"0": 0, "1 to 2": 1.5, "3 to 5": 4, "6 to 10": 8, "11 to 20": 15, "More than 20": 24}
    f3 = [mid3[x] for x in ans("Q3") if x in mid3]
    O["k8_freq_now"] = round(sum(f3)/len(f3), 1) if f3 else None
    mid14 = {"0": 0, "1 to 2": 1.5, "3 to 5": 4, "6 or more": 7}
    m14 = [mid14[x] for x in ans("Q14") if x in mid14]
    O["k9_future_400_orders"] = round(sum(m14)/len(m14), 1) if m14 else None
    O["k9_ge3_pct"] = pct(sum(1 for v in m14 if v >= 4), len(m14))
    O["k10_aware_toing_pct"], _, _ = share("Q6", ["Yes, and I have used it", "Yes, but I have never used it"])
    O["k10_used_toing_pct"], _, _ = share("Q6", ["Yes, and I have used it"])
    q1 = ans("Q1"); O["n_students"] = sum(1 for x in q1 if x.startswith("College student")); O["n_earners"] = sum(1 for x in q1 if x.startswith("Working"))
    q2 = ans("Q2"); O["n_pune"] = sum(1 for x in q2 if x == "Pune"); O["n_delhi"] = sum(1 for x in q2 if x == "Delhi NCR")
    O["under150_typical_pct"] = pct(sum(1 for x in ans("Q4") if x in ("Under ₹100", "₹100 to ₹150")), len(ans("Q4")))
    return O, dist

def num(x):
    try: return float(x)
    except Exception: return None

def carts():
    rows = load_csv("cart_log.csv"); O = {"n_carts": len(rows)}
    if not rows: return O
    def fees(r): return sum(num(r.get(k)) or 0 for k in ["delivery_fee","platform_fee","small_cart_fee","other_fees"])
    for app in ["Toing", "Swiggy", "Zomato"]:
        for b in ["B1", "B2", "B3", "B4"]:
            rs = [r for r in rows if r["app"] == app and r["basket"] == b and num(r.get("item_total"))]
            if not rs: continue
            key = f"{app.lower()}_{b}"
            O[key + "_n"] = len(rs)
            O[key + "_item_med"] = round(st.median(num(r["item_total"]) for r in rs), 1)
            O[key + "_fees_med"] = round(st.median(fees(r) for r in rs), 1)
            O[key + "_deliv_med"] = round(st.median(num(r.get("delivery_fee")) or 0 for r in rs), 1)
            O[key + "_platform_med"] = round(st.median(num(r.get("platform_fee")) or 0 for r in rs), 1)
            O[key + "_pack_med"] = round(st.median(num(r.get("packaging_fee")) or 0 for r in rs), 1)
            O[key + "_disc_med"] = round(st.median(num(r.get("discount")) or 0 for r in rs), 1)
            O[key + "_total_med"] = round(st.median(num(r.get("grand_total")) or 0 for r in rs), 1)
            O[key + "_fee_pct_item"] = round(100 * O[key + "_fees_med"] / O[key + "_item_med"])
            eta = [num(r.get("eta_min")) for r in rs if num(r.get("eta_min"))]
            O[key + "_eta_med"] = st.median(eta) if eta else None
    O["n_toing_carts"] = sum(1 for r in rows if r["app"] == "Toing" and num(r.get("item_total")))
    O["toing_unavailable_rows"] = sum(1 for r in rows if "unavailable" in (r.get("note") or "").lower())
    scan = load_csv("toing_menu_scan.csv")
    if scan:
        prices = [num(r[f"p{i}"]) for r in scan for i in range(1, 21) if num(r.get(f"p{i}"))]
        rl = [num(r["restaurants_listed"]) for r in scan if num(r.get("restaurants_listed"))]
        O["toing_menu_n"] = len(prices)
        O["toing_menu_median"] = st.median(prices) if prices else None
        O["toing_menu_p25"] = round(st.quantiles(prices, n=4)[0]) if len(prices) >= 4 else None
        O["toing_menu_p75"] = round(st.quantiles(prices, n=4)[2]) if len(prices) >= 4 else None
        O["toing_restaurants_median"] = st.median(rl) if rl else None
    return O

if __name__ == "__main__":
    S, dist = survey(); K = carts()
    O = {**S, **K, "dist": dist}
    (HERE / "primary_outputs.json").write_text(json.dumps(O, indent=1, ensure_ascii=False), encoding="utf-8")
    L = ["# Primary research tables (generated)", "", f"Survey n = {S.get('n_total', 0)}; carts n = {K.get('n_carts', 0)}", ""]
    for k, v in O.items():
        if k != "dist": L.append(f"- {k}: {v}")
    L += ["", "## Survey distributions", ""]
    for q, d in dist.items():
        L += [f"### {q} (n = {d['n']})", "", "| Answer | % |", "|---|---|"]
        for a, p in d["pct"].items(): L.append(f"| {a} | {p} |")
        L.append("")
    (HERE / "primary_tables.md").write_text("\n".join(L) + "\n", encoding="utf-8")
    print("survey n", S.get("n_total", 0), "carts n", K.get("n_carts", 0), "toing carts", K.get("n_toing_carts", 0))
