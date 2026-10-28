"""Toing unit-economics and path model (Team IdeaForge). Single source of truth for every modelled number."""
import json, pathlib, copy
OUT = pathlib.Path(__file__).parent

A = dict(
    # ---- case facts (never change) ----
    CORE_GOV=700.0,          # C04
    CORE_EBITDA_PCT=0.031,   # C05
    COSS_TURNOVER=0.015,     # C12 midpoint of 1 to 2% of turnover (A20: turnover read as revenue)
    COSS_CAP_OF_PAY=0.05,    # C12 cap: 5% of payouts to workers
    # ---- public disclosures (Swiggy Q1 FY27 letter; labelled estimates on slides) ----
    CORE_CM_PCT=0.076,       # S02 food delivery contribution margin, % of GOV
    FOOD_GOV_Q=9490.0, FOOD_EBITDA_Q=292.0,   # S01
    PI_EBITDA_Q=-131.0, PI_EBITDA_PREV=-58.0, # S01 Platform Innovations adj. EBITDA Q1FY27, Q4FY26
    PI_ADJREV_Q=69.0, PI_ADJREV_PREV=13.0,    # S01 Platform Innovations adj. revenue
    TOING_DL_Q=14.5,         # S08 Toing downloads in the quarter, million (Sensor Tower via CLSA)
    KA_FEE_CAP=0.50,         # S12 Karnataka welfare fee cap per food order (Rs)
    GST_SVC=0.18,            # S13 GST on platform and delivery fees (sec 9(5) from 22 Sep 2025)
    GST_FOOD=0.05,           # S13 GST on restaurant food, collected by the platform
    # ---- Toing order today (team assumptions A01 to A12) ----
    T_AOV=99.0,              # A01 item total; case title and C02 band; P2 may update
    T_COMM=0.12,             # A02 commission on Toing (core 17 to 25%; Swiggy: commissions "need to be different")
    T_FEES_CUST=12.0,        # A03 platform fee incl. GST; no delivery or packaging fee (MediaNama, Sep 2025); P1 may update
    T_ADS=0.01,              # A04 ads as % of item total (new app, thin ad load)
    T_RIDER=40.0,            # A05 rider payout incl. incentives per order (base Rs 20 to 35 + distance; C01)
    INS=1.0,                 # A06 rider insurance per order
    PG=0.009,                # A07 payment processing, % of customer-paid total (UPI heavy)
    SUP_FIX=1.5, REF_PCT=0.015,  # A08 support per order + refunds % of item total
    T_DISC=4.0,              # A09 platform-funded discount per order; P1 may update
    TECH=1.0,                # A10 maps, SMS, cloud per order
    T_AOV_MIX=120.0,         # A11 Toing mix item total (meals mostly Rs 100 to 150) used for triangulation
    OTHER_PI_LOSS_Q=-50.0,   # A12 Platform Innovations loss excluding Toing, per quarter
    OTHER_PI_REV_Q=13.0,     # A12 Platform Innovations revenue excluding Toing (Q4FY26 level)
    # ---- core Rs 700 order stack (A13 to A14), calibrated so CM = 7.6% of GOV ----
    CORE_ITEM=614.5, CORE_PACK=25.0, CORE_PFEE=15.0, CORE_DFEE=14.5,
    CORE_COMM=0.20, CORE_ADS=0.03, CORE_RIDER=42.0, CORE_DISC=22.0,
    # ---- levers (A17 to A26) ----
    DROP_SHARE=0.50, BATCH_SHARE=0.60, K_BATCH=0.40, RUN_N=10, K_DROP=0.15, HOST_FEE=4.0,
    DOOR_FEE=20.0, COMM_UP=0.03, REF_DOWN=0.005, ADS_TO=0.025,
    PASS_PRICE=49.0, PASS_SHARE=0.20, PASS_ORDERS=8.0, DISC_TO=2.0,
    # ---- funnel (A27 to A36) ----
    CAC_PAID=500.0, NEW_TO_CAT=0.67, T_FREQ=2.5, T_RET=0.85, MIGRATE_12M=0.15,
    CORE_FREQ=3.0, CORE_RET=0.95, LTV_MONTHS=36, CAC_TOING=60.0, CORE_SMALL_GOV=300.0,
    CANNIB=0.20, CANNIB_FENCE=0.5,
    # ---- paths (A37 to A41), lakh orders a day, 3 years from Oct 2026 ----
    V0=2.2,
    S_VOL=[3.5, 5.0, 6.5], S_CON=[-24.0, -20.0, -17.0], S_ACQ=150.0, S_OVH=20.0,
    F_VOL=[2.4, 2.4, 2.4], F_ACQ=100.0, F_OVH=15.0,
    K_WIND=25.0, RECAPTURE=0.60,
    R_VOL=[1.8, 2.8, 4.0], R_ACQ=20.0, R_OVH=15.0, R_RAMP=[0.75, 1.0, 1.0],
    P_DENSITY=0.60,          # A42 probability the 6-month density gate is passed (used only for the option value)
    RUN_MIN=45.0,            # A43 minutes per Drop run (kitchen cluster pickup, one hand-off)
    SOLO_ORDERS_HR=2.0,      # A44 solo door deliveries a rider completes per hour
)

def flip_points(a):
    """Value of each input at which the recommended path's 3-year result equals Kill's (bisection)."""
    out = {}
    for k, lo, hi in [("T_RIDER", 30.0, 60.0), ("RUN_N", 2.0, 15.0), ("CANNIB", 0.0, 0.6), ("T_COMM", 0.05, 0.20),
                      ("DROP_SHARE", 0.0, 1.0), ("DOOR_FEE", 0.0, 40.0), ("T_FEES_CUST", 0.0, 30.0)]:
        def gap(v):
            b = copy.deepcopy(a); b[k] = v; p = paths(b); return p["cum"]["R"] - p["cum"]["K"]
        glo, ghi = gap(lo), gap(hi)
        if glo * ghi > 0: out[k] = None; continue
        for _ in range(60):
            mid = (lo + hi) / 2; gm = gap(mid)
            if gm * glo > 0: lo, glo = mid, gm
            else: hi, ghi = mid, gm
        out[k] = round((lo + hi) / 2, 3)
    return out

def decompose_gap(a):
    """Split the 3-year gap between the recommended path and Scale-as-it-runs into named components (Rs Cr)."""
    small_cm = a["CORE_CM_PCT"] * a["CORE_SMALL_GOV"]; today = toing_today(a); red = redesigned(a)["blend"]; fn = funnel(a)
    def credit(v): return v * 1e5 * 30 / a["T_FREQ"] * a["MIGRATE_12M"] * a["NEW_TO_CAT"] * a["CAC_PAID"] / 1e7
    comp = dict(order_losses=0.0, acquisition=0.0, overhead=0.0, tradedown=0.0, migration=0.0)
    for i in range(3):
        vs, vr = a["S_VOL"][i], a["R_VOL"][i]
        con_r = today["contrib"] + a["R_RAMP"][i] * (red - today["contrib"])
        comp["order_losses"] += yr(vr, con_r) - yr(vs, a["S_CON"][i])
        comp["acquisition"] += a["S_ACQ"] - a["R_ACQ"]
        comp["overhead"] += a["S_OVH"] - a["R_OVH"]
        comp["tradedown"] += yr(vs, a["CANNIB"] * small_cm) - yr(vr, a["CANNIB"] * a["CANNIB_FENCE"] * small_cm)
        comp["migration"] += credit(vr) - credit(vs)
    comp["total"] = sum(comp.values())
    return comp

def toing_today(a, aov=None):
    aov = a["T_AOV"] if aov is None else aov
    fee_net = a["T_FEES_CUST"] / (1 + a["GST_SVC"])
    comm = a["T_COMM"] * aov; ads = a["T_ADS"] * aov
    rev = comm + fee_net + ads
    cust = aov * (1 + a["GST_FOOD"]) + a["T_FEES_CUST"]
    rider = a["T_RIDER"]
    coss = min(a["COSS_TURNOVER"] * rev, a["COSS_CAP_OF_PAY"] * rider)
    pg = a["PG"] * cust; sup = a["SUP_FIX"] + a["REF_PCT"] * aov
    cost = rider + a["INS"] + coss + pg + sup + a["T_DISC"] + a["TECH"]
    rest_keeps = aov - comm - a["GST_SVC"] * comm - ads      # after commission, GST on commission, and ads
    gov_tax = aov * a["GST_FOOD"] + (a["T_FEES_CUST"] - fee_net) + a["GST_SVC"] * comm
    return dict(aov=aov, cust=cust, comm=comm, fee_net=fee_net, ads=ads, rev=rev, rider=rider, ins=a["INS"], coss=coss,
                pg=pg, sup=sup, disc=a["T_DISC"], tech=a["TECH"], cost=cost, contrib=rev - cost,
                rest_keeps=rest_keeps, gov_tax=gov_tax, rider_pct_gov=100 * rider / aov)

def core_order(a):
    item = a["CORE_ITEM"]; gov = a["CORE_GOV"]
    comm = a["CORE_COMM"] * item; pfee = a["CORE_PFEE"] / (1 + a["GST_SVC"]); dfee = a["CORE_DFEE"] / (1 + a["GST_SVC"]); ads = a["CORE_ADS"] * item
    rev = comm + pfee + dfee + ads
    coss = min(a["COSS_TURNOVER"] * rev, a["COSS_CAP_OF_PAY"] * a["CORE_RIDER"])
    pg = a["PG"] * gov; sup = a["SUP_FIX"] + a["REF_PCT"] * item
    known = a["CORE_RIDER"] + a["INS"] + coss + pg + sup + a["CORE_DISC"] + a["TECH"]
    cm = a["CORE_CM_PCT"] * gov; other = rev - known - cm
    ebitda = a["CORE_EBITDA_PCT"] * gov; ovh = cm - ebitda
    return dict(gov=gov, item=item, comm=comm, pfee=pfee, dfee=dfee, ads=ads, rev=rev, take_pct=100 * rev / gov, rider=a["CORE_RIDER"],
                coss=coss, pg=pg, sup=sup, disc=a["CORE_DISC"], other=other, cm=cm, ovh=ovh, ebitda=ebitda, rider_pct_gov=100 * a["CORE_RIDER"] / gov)

def rider_batch(a):
    solo = a["T_RIDER"]; b2 = solo * (1 + a["K_BATCH"]) / 2
    return a["BATCH_SHARE"] * b2 + (1 - a["BATCH_SHARE"]) * solo

def rider_drop(a, n=None):
    n = a["RUN_N"] if n is None else n
    return a["T_RIDER"] * (1 + a["K_DROP"] * (n - 1)) / n

def _order(x, aov, comm_rate, ads_rate, ref_pct, disc, pass_rev, rider, fee):
    comm = comm_rate * aov; pf = x["T_FEES_CUST"] / (1 + x["GST_SVC"]); ads = ads_rate * aov
    fee_net = fee / (1 + x["GST_SVC"]); rev = comm + pf + ads + pass_rev + fee_net
    cust = aov * (1 + x["GST_FOOD"]) + x["T_FEES_CUST"] + fee
    coss = min(x["COSS_TURNOVER"] * rev, x["COSS_CAP_OF_PAY"] * rider)
    cost = rider + x["INS"] + coss + x["PG"] * cust + x["SUP_FIX"] + ref_pct * aov + disc + x["TECH"]
    return rev - cost

def pass_rev(a): return a["PASS_SHARE"] * a["PASS_PRICE"] / (1 + a["GST_SVC"]) / a["PASS_ORDERS"]

def redesigned(a, n=None, aov=None):
    aov = a["T_AOV"] if aov is None else aov
    args = (aov, a["T_COMM"] + a["COMM_UP"], a["ADS_TO"], a["REF_PCT"] - a["REF_DOWN"], a["DISC_TO"], pass_rev(a))
    drop = _order(a, *args, rider_drop(a, n) + a["HOST_FEE"], 0.0)
    door = _order(a, *args, rider_batch(a), a["DOOR_FEE"])
    return dict(drop=drop, door=door, blend=a["DROP_SHARE"] * drop + (1 - a["DROP_SHARE"]) * door)

def lever_bridge(a):
    st = dict(d=0.0, batch=False, fee=0.0, comm=a["T_COMM"], ref=a["REF_PCT"], ads=a["T_ADS"], disc=a["T_DISC"], pr=0.0)
    def blended(s):
        args = (a["T_AOV"], s["comm"], s["ads"], s["ref"], s["disc"], s["pr"])
        door_r = rider_batch(a) if s["batch"] else a["T_RIDER"]
        drop_r = rider_drop(a) + a["HOST_FEE"]
        return s["d"] * _order(a, *args, drop_r, 0.0) + (1 - s["d"]) * _order(a, *args, door_r, s["fee"])
    start = blended(st); assert abs(start - toing_today(a)["contrib"]) < 1e-6
    seq = [("Slot batching of door orders", "Swiggy", "+8 to 12 min wait", dict(batch=True)),
           ("Pooled Drops (pickup runs)", "Swiggy + Drop host", "Walk up to 5 min", dict(d=a["DROP_SHARE"])),
           ("Door fee outside Drops", "Customer", "Pays Rs 20 more", dict(fee=a["DOOR_FEE"])),
           ("Fixed menus, kitchen partners", "Restaurants", "Less choice", dict(comm=a["T_COMM"] + a["COMM_UP"], ref=a["REF_PCT"] - a["REF_DOWN"])),
           ("Ad load 1% to 2.5%", "Restaurants", "None", dict(ads=a["ADS_TO"])),
           ("Everyday low price, fewer coupons", "Swiggy + restaurants", "Fewer coupons", dict(disc=a["DISC_TO"])),
           ("Toing Pass Rs 49 a month", "Customer", "None (opt-in)", dict(pr=pass_rev(a)))]
    prev = start; steps = []
    for name, who, cx, upd in seq:
        st.update(upd); now = blended(st); steps.append(dict(lever=name, who=who, cx=cx, delta=now - prev, after=now)); prev = now
    assert abs(prev - redesigned(a)["blend"]) < 1e-6
    return start, steps, prev

def density_curve(a):
    return [dict(n=n, contrib=redesigned(a, n=n)["drop"], rider=rider_drop(a, n)) for n in range(1, 16)]

def n_star(a):
    for n10 in range(10, 300):
        if redesigned(a, n=n10 / 10)["drop"] >= 0: return n10 / 10
    return None

def triangulate(a):
    t_rev_q = a["PI_ADJREV_Q"] - a["OTHER_PI_REV_Q"]
    t_loss_q = a["PI_EBITDA_Q"] - a["OTHER_PI_LOSS_Q"]
    unit = toing_today(a, a["T_AOV_MIX"])
    orders_q = t_rev_q * 1e7 / unit["rev"]
    contrib_loss_q = orders_q * unit["contrib"] / 1e7
    acq_q = t_loss_q - contrib_loss_q
    return dict(t_rev_q=t_rev_q, t_loss_q=t_loss_q, rev_per_order=unit["rev"], contrib_per_order=unit["contrib"],
                orders_q_cr=orders_q / 1e7, orders_lakh_day=orders_q / 91 / 1e5, contrib_loss_q=contrib_loss_q, acq_q=acq_q,
                acq_share=acq_q / t_loss_q, contrib_share=contrib_loss_q / t_loss_q,
                acq_per_download=acq_q * 1e7 / (a["TOING_DL_Q"] * 1e6), annual_loss=t_loss_q * 4,
                pct_of_food_ebitda=100 * -t_loss_q / a["FOOD_EBITDA_Q"], pi_pct_of_food_ebitda=100 * -a["PI_EBITDA_Q"] / a["FOOD_EBITDA_Q"])

def funnel(a, contrib=None):
    c = toing_today(a)["contrib"] if contrib is None else contrib
    loss_m = a["T_FREQ"] * -c
    def cum(T): return a["CAC_TOING"] + loss_m * sum(a["T_RET"] ** t for t in range(T))
    ltv = a["CORE_FREQ"] * core_order(a)["cm"] * sum(a["CORE_RET"] ** t for t in range(a["LTV_MONTHS"]))
    rows = [dict(T=T, cost_per_user=cum(T), m_cac=cum(T) / (a["NEW_TO_CAT"] * a["CAC_PAID"]), m_ltv=cum(T) / (a["NEW_TO_CAT"] * ltv)) for T in (12, 24, 36)]
    cost_per_incr = cum(12) / (a["MIGRATE_12M"] * a["NEW_TO_CAT"])
    grid = {str(cac): {str(i): round(100 * cum(12) / (i * cac)) for i in (0.33, 0.50, 0.67, 1.0)} for cac in (400, 500, 700, 900)}
    curve = [dict(cac=cac, m_at={str(i): round(100 * cum(12) / (i * cac)) for i in (0.33, 0.67, 1.0)}) for cac in range(300, 1300, 100)]
    return dict(loss_per_user_month=loss_m, ltv_core=ltv, rows=rows, cost_per_incr_12m=cost_per_incr,
                multiple_vs_cac=cost_per_incr / a["CAC_PAID"], grid_m_cac_pct=grid, curve=curve,
                m_ltv_12=rows[0]["m_ltv"], m_cac_12=rows[0]["m_cac"])

def yr(vol_lakh, con): return vol_lakh * 1e5 * 365 * con / 1e7

def paths(a, scen="base"):
    """Three-year contribution after path-specific costs (Rs Cr), years from Oct 2026.
    Every path with Toing users earns the same migration credit (incremental migrants x paid CAC, the case's lens);
    every path pays for the core orders its Toing orders replace; Kill recaptures RECAPTURE of them."""
    vf, cd = {"bear": (0.8, -4.0), "base": (1.0, 0.0), "bull": (1.2, 3.0)}[scen]
    today = toing_today(a); small_cm = a["CORE_CM_PCT"] * a["CORE_SMALL_GOV"]; red = redesigned(a)["blend"]
    fn = funnel(a)
    def migr_credit(v, ltv=False):
        mtu = v * 1e5 * 30 / a["T_FREQ"]; m = mtu * a["MIGRATE_12M"] * a["NEW_TO_CAT"]
        return m * (fn["ltv_core"] if ltv else a["CAC_PAID"]) / 1e7
    S, F, F_ltv, R = [], [], [], []
    for i in range(3):
        v = a["S_VOL"][i] * vf
        S.append(yr(v, a["S_CON"][i] + cd) - yr(v, a["CANNIB"] * small_cm) - a["S_ACQ"] - a["S_OVH"] + migr_credit(v))
        v = a["F_VOL"][i] * vf
        fb = yr(v, today["contrib"] + cd) - yr(v, a["CANNIB"] * small_cm) - a["F_ACQ"] - a["F_OVH"]
        F.append(fb + migr_credit(v)); F_ltv.append(fb + migr_credit(v, True))
        v = a["R_VOL"][i] * vf; con = today["contrib"] + a["R_RAMP"][i] * (red - today["contrib"]) + cd
        R.append(yr(v, con) - yr(v, a["CANNIB"] * a["CANNIB_FENCE"] * small_cm) - a["R_ACQ"] - a["R_OVH"] + migr_credit(v))
    tri = triangulate(a); v0 = tri["orders_lakh_day"]
    recap = yr(v0, a["CANNIB"] * a["RECAPTURE"] * small_cm)
    K = [tri["t_loss_q"] - a["K_WIND"] + 0.75 * recap, recap, recap]
    # Recommended path with the 6-month gate failing: two quarters of the transition year, then the Kill path
    R_fail = [0.5 * R[0] - a["K_WIND"] + 0.5 * recap, recap, recap]
    out = dict(S=S, F=F, F_ltv=F_ltv, K=K, R=R, R_fail=R_fail, recapture_yr=recap, migrants_credit_R_y3=migr_credit(a["R_VOL"][2] * vf))
    out["cum"] = {k: sum(out[k]) for k in ("S", "F", "F_ltv", "K", "R", "R_fail")}
    out["cum"]["R_ev"] = a["P_DENSITY"] * out["cum"]["R"] + (1 - a["P_DENSITY"]) * out["cum"]["R_fail"]
    out["exit"] = {"S": S[2], "F": F[2], "K": K[2], "R": R[2]}
    return out

def robust(a):
    tests = {"DROP_SHARE": [0.2, 0.35, 0.5, 0.65, 0.8], "T_RIDER": [32, 36, 40, 44, 48], "T_COMM": [0.08, 0.10, 0.12, 0.15, 0.18],
             "CANNIB": [0.0, 0.1, 0.2, 0.3, 0.4], "NEW_TO_CAT": [0.2, 0.4, 0.67, 0.8, 1.0], "CAC_PAID": [400, 500, 700, 900, 1200],
             "T_FEES_CUST": [0, 6, 12, 18, 25], "RUN_N": [4, 6, 8, 10, 12], "MIGRATE_12M": [0.05, 0.10, 0.15, 0.25, 0.35]}
    res = {}
    for k, vals in tests.items():
        row = []
        for v in vals:
            b = copy.deepcopy(a); b[k] = v; p = paths(b)
            row.append(dict(v=v, R=round(p["cum"]["R"]), S=round(p["cum"]["S"]), F=round(p["cum"]["F_ltv"]), K=round(p["cum"]["K"]),
                            R_beats_S_F=bool(p["cum"]["R"] > max(p["cum"]["S"], p["cum"]["F_ltv"])), R_minus_K=round(p["cum"]["R"] - p["cum"]["K"])))
        res[k] = row
    return res

def tornado(a):
    base = redesigned(a)["blend"]; out = []
    for k, lo, hi, lab in [("T_RIDER", 48, 32, "Rider pay per solo trip"), ("DROP_SHARE", 0.3, 0.7, "Share of orders at Drops"),
                           ("RUN_N", 5, 14, "Orders per Drop run"), ("DOOR_FEE", 10, 30, "Door fee outside Drops"),
                           ("T_COMM", 0.09, 0.15, "Base commission"), ("BATCH_SHARE", 0.3, 0.8, "Door orders batched"),
                           ("HOST_FEE", 7, 2, "Drop host fee")]:
        b = copy.deepcopy(a); b[k] = lo; l = redesigned(b)["blend"]; b[k] = hi; h = redesigned(b)["blend"]
        out.append(dict(key=k, label=lab, lo_in=lo, hi_in=hi, lo=l, hi=h, swing=abs(h - l)))
    return base, sorted(out, key=lambda r: -r["swing"])

def regulation(a):
    t = toing_today(a); c = core_order(a)
    return dict(coss_toing=t["coss"], coss_core=c["coss"],
                coss_toing_gov_basis=min(a["COSS_TURNOVER"] * t["cust"], a["COSS_CAP_OF_PAY"] * t["rider"]),
                ka_fee=a["KA_FEE_CAP"], gst_on_door_fee=a["DOOR_FEE"] - a["DOOR_FEE"] / (1 + a["GST_SVC"]),
                pct_gov_toing=100 * (t["coss"] + a["KA_FEE_CAP"]) / t["aov"], pct_gov_core=100 * (c["coss"] + a["KA_FEE_CAP"]) / c["gov"])

def build(a=A):
    O = {}
    t = toing_today(a); O["toing"] = t; O["toing_149"] = toing_today(a, 149.0); O["toing_mix"] = toing_today(a, a["T_AOV_MIX"])
    O["core"] = core_order(a); O["core_500"] = core_order(dict(a, CORE_GOV=500.0, CORE_ITEM=439.0))
    O["ratio_loss_to_core_ebitda"] = -t["contrib"] / O["core"]["ebitda"]
    s, steps, e = lever_bridge(a); O["bridge"] = dict(start=s, steps=steps, end=e)
    O["redesigned"] = redesigned(a); O["density"] = density_curve(a); O["n_star"] = n_star(a)
    O["tri"] = triangulate(a); O["funnel"] = funnel(a)
    O["paths"] = {sc: paths(a, sc) for sc in ("bear", "base", "bull")}
    p = O["paths"]["base"]["cum"]
    O["moneyshot"] = dict(gap_R_S=p["R"] - p["S"], gap_R_F=p["R"] - p["F_ltv"], gap_R_K=p["R"] - p["K"])
    O["robust"] = robust(a)
    tb, tr = tornado(a); O["tornado"] = dict(base=tb, rows=tr); O["reg"] = regulation(a)
    runs_hr = 60.0 / a["RUN_MIN"]
    O["rider_hourly"] = dict(solo_pay_hr=a["SOLO_ORDERS_HR"] * a["T_RIDER"], drop_pay_hr=runs_hr * a["RUN_N"] * rider_drop(a),
                             solo_orders_hr=a["SOLO_ORDERS_HR"], drop_orders_hr=runs_hr * a["RUN_N"], drop_pay_per_run=a["RUN_N"] * rider_drop(a))
    O["flip"] = flip_points(a); O["decomp"] = decompose_gap(a)
    O["inputs"] = a
    return O

if __name__ == "__main__":
    O = build()
    (OUT / "model_outputs.json").write_text(json.dumps(O, indent=1, default=float), encoding="utf-8")
    r = lambda d: {k: round(v, 2) for k, v in d.items() if isinstance(v, (int, float))}
    print("toing", r(O["toing"])); print("toing_mix", r(O["toing_mix"])); print("core", r(O["core"]))
    print("core500 ebitda", round(O["core_500"]["ebitda"], 1), "ratio", round(O["ratio_loss_to_core_ebitda"], 2))
    print("bridge", round(O["bridge"]["start"], 2), [(x["lever"], round(x["delta"], 2)) for x in O["bridge"]["steps"]], round(O["bridge"]["end"], 2))
    print("redesigned", r(O["redesigned"]), "n*", O["n_star"])
    print("density", [(d["n"], round(d["contrib"], 1)) for d in O["density"]])
    print("tri", r(O["tri"]))
    f = O["funnel"]; print("funnel", round(f["loss_per_user_month"], 1), round(f["ltv_core"]), [(x["T"], round(x["cost_per_user"]), round(100 * x["m_cac"]), round(100 * x["m_ltv"])) for x in f["rows"]], round(f["cost_per_incr_12m"]), round(f["multiple_vs_cac"], 1))
    print("grid", f["grid_m_cac_pct"])
    for sc in ("bear", "base", "bull"):
        p = O["paths"][sc]; print(sc, {k: [round(x) for x in p[k]] for k in ("S", "F", "F_ltv", "K", "R", "R_fail")}, {k: round(v) for k, v in p["cum"].items()}, "recap", round(p["recapture_yr"]), "migrR3", round(p["migrants_credit_R_y3"]))
    print("moneyshot", {k: round(v) for k, v in O["moneyshot"].items()})
    print("tornado", round(O["tornado"]["base"], 2), [(x["key"], round(x["lo"], 1), round(x["hi"], 1)) for x in O["tornado"]["rows"]])
    print("reg", r(O["reg"])); print("rider", r(O["rider_hourly"]))
    for k, row in O["robust"].items(): print("robust", k, [(x["v"], x["R"], x["S"], x["F"], x["K"], x["R_beats_S_F"]) for x in row])
    print("flip", O["flip"]); print("decomp", {k: round(v) for k, v in O["decomp"].items()})
