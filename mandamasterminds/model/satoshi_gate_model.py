"""Project Satoshi Gate: deal model (single source of truth for every number in the research doc).

Case facts (F) are governing inputs from the case PDF and are never overwritten.
Team assumptions (A) are disclosed in the assumptions register (A01 to A29).
Run:  python satoshi_gate_model.py   -> writes model_outputs.json and model_tables.md next to this file.
"""
import json, os, datetime, hashlib

HERE = os.path.dirname(os.path.abspath(__file__))

# ===== CASE FACTS [C] =====
F = dict(MCAP=118750, SH=64.0, CASH=8900, DEBT=350, REV=8450, EBITDA=640, PAT=480, EPS=7.50,
         DEAL=4000, DEAL_CASH=2100, DEAL_EQ=1900, ARR=220, TOP4=0.60, DRAG=750, MDR=115)
PX = F["MCAP"] / F["SH"]

# ===== TEAM ASSUMPTIONS [A##] =====
A = dict(T=0.2517, YC=0.06, KD=0.0875, YR=0.05, PW=0.155, LW=0.17, TG=0.06, DEC=0.60, GOV=15,
         PPA=100, TXN=60, BUILD=40, SYNM=0.40, LIC=25, SYN_RET=0.70, STAKE=0.249, UP=400, PRIM=250,
         EO=600, EO_LO=500, EO_HI=650, CH_MIN=0.05, CH_JV=0.10, CH_FULL=0.375, JV_CASH=400,
         JV_DRAG=375, JV_SETUP=40, SG=0.05, BREAK_FEE=30,
         P={"bear": .25, "base": .50, "bull": .25})
T, YC, PW = A["T"], A["YC"], A["PW"]

# Football-field comps ranges (EV / LTM ARR). Fallbacks per plan; replaced by researched values.
FF = dict(trading_lo=5.96, trading_hi=8.35, prec_lo=7.8, prec_hi=12.8, w_dcf=.50, w_trd=.30, w_prec=.20,
          trading_note="25th to 75th pct EV/LTM revenue, custody and high-growth fintech subset (Pine Labs, BitGo on gross profit, Adyen, Coinbase, PB Fintech), 23 Sep 2026",
          prec_note="IQR of precedent EV/revenue with revenue basis (Bitstamp 2.1x, Deribit 9.7x, Hidden Road 12.5x, BVNK 12.5 to 15x)")

G = {"bear": [.22, .20, .18, .16, .14, .12, .11, .10, .09, .08],
     "base": [.35, .32, .28, .25, .22, .20, .18, .16, .14, .12],
     "bull": [.50, .45, .38, .32, .27, .23, .20, .17, .15, .13]}
M = {"bear": [.04, .09, .13, .17, .20, .22, .23, .24, .25, .25],
     "base": [.08, .16, .23, .29, .33, .36, .37, .38, .38, .38],
     "bull": [.10, .20, .28, .34, .38, .40, .41, .42, .42, .42]}
RS = {"bear": [0, 0, 10, 20, 30, 40, 45, 50, 55, 60],
      "base": [0, 10, 30, 55, 85, 110, 130, 145, 155, 165],
      "bull": [0, 20, 50, 90, 130, 170, 200, 225, 245, 260]}
YRS = list(range(2027, 2037))


def lim(sc, churn=0.0, w=None, tg=None):
    w = w or A["LW"]; tg = A["TG"] if tg is None else tg
    prev = F["ARR"] * (1 - churn); lost = F["ARR"] * churn * (1 + G[sc][0]); rows = []
    for i in range(10):
        r = prev * (1 + G[sc][i]); st = lost * A["DEC"] * ([1, .5] + [0] * 8)[i]; e = r * M[sc][i] - st
        ebit = e - .04 * r; tax = max(ebit, 0) * T
        rows.append(dict(y=YRS[i], rev=r, ebitda=e, pat=ebit - tax, fcf=e - tax - .05 * r - .02 * (r - prev))); prev = r
    p = sum(x["fcf"] / (1 + w) ** (i + 1) for i, x in enumerate(rows)); tv = rows[-1]["fcf"] * (1 + tg) / (w - tg) / (1 + w) ** 10
    return p + tv, rows


def pv(fl, r=PW): return sum(f / (1 + r) ** (i + 1) for i, f in enumerate(fl))


def perp(fl, r=PW, g=None):
    g = A["SG"] if g is None else g
    return pv(fl, r) + fl[-1] * (1 + g) / (r - g) / (1 + r) ** len(fl)


def sfl(sc, share=1.0): return [x * A["SYNM"] * (1 - T) * share for x in RS[sc]]


BPV = A["BUILD"] * (1 - T) / PW
BASE_EPS = (F["PAT"] + F["MDR"] * (1 - T)) / F["SH"]


def full(sc="base", churn=None, drag=None, cash=2100, debt=0, eq=1900, price=4000):
    churn = A["CH_FULL"] if churn is None else churn; drag = F["DRAG"] if drag is None else drag
    ev, rows = lim(sc, churn); syn = perp(sfl(sc)) + BPV; npv = ev + syn - price - drag / PW
    ns = eq / PX; sh = F["SH"] + ns; eps = []; cumf = 0; bal = 0; pbe = None; fbe = None; s = sfl(sc)
    cb = F["CASH"] - cash; cp = []; dpats = []; opfs = []
    for i, y in enumerate(YRS):
        bal += drag
        pre = -(cash * YC + debt * A["KD"] + bal * (YC - A["YR"]) + A["GOV"] + A["PPA"] + (A["TXN"] if i == 0 else 0))
        dpat = pre * (1 - T) + rows[i]["pat"] + s[i] + A["BUILD"] * (1 - T)
        e = (F["PAT"] + F["MDR"] * (1 - T) + dpat) / sh; eps.append(round(e, 3)); dpats.append(round(dpat, 1))
        if pbe is None and e >= BASE_EPS: pbe = y
        opf = rows[i]["fcf"] + s[i] + A["BUILD"] * (1 - T) - (debt * A["KD"] + A["GOV"] + bal * (YC - A["YR"]) + (A["TXN"] if i == 0 else 0)) * (1 - T) - drag
        cumf += opf; opfs.append(round(opf, 1))
        if fbe is None and cumf >= cash: fbe = y
        cb += F["PAT"] + F["MDR"] * (1 - T) + opf - cash * YC * (1 - T); cp.append(round(cb))
    return dict(npv=round(npv), ev=round(ev), syn=round(syn), ns=round(ns, 3), eps=eps, dpat=dpats, opfcf=opfs,
                pbe=pbe, fbe=fbe, cum10=round(cumf), cash=cp)


def minority(sc="base", churn=None, drag=0, up=None):
    churn = A["CH_MIN"] if churn is None else churn; s = A["STAKE"]; up = A["UP"] if up is None else up
    ev, rows = lim(sc, churn); r29 = rows[2]["rev"]
    eo = A["EO"] * min(max((r29 - A["EO_LO"]) / (A["EO_HI"] - A["EO_LO"]), 0), 1)
    sy = sfl(sc, A["SYN_RET"]); licpv = A["LIC"] * (1 - T) / PW
    npv = s * (ev + A["PRIM"]) + perp(sy) + BPV - licpv - up - eo / (1 + PW) ** 3 - drag / PW
    eps = []; cumf = 0; pbe = None; fbe = None; dpats = []; lts = []
    for i, y in enumerate(YRS):
        paid = up + (eo if i >= 3 else 0)
        dpat = -(paid * YC + A["LIC"]) * (1 - T) + A["BUILD"] * (1 - T) + sy[i] + s * (rows[i]["pat"] + A["PRIM"] * YC * (1 - T))
        eps.append(round((F["PAT"] + F["MDR"] * (1 - T) + dpat) / F["SH"], 3)); dpats.append(round(dpat, 1))
        if pbe is None and dpat >= 0: pbe = y
        lt = s * rows[i]["fcf"] + sy[i] + (A["BUILD"] - A["LIC"]) * (1 - T) - drag
        cumf += lt; lts.append(round(lt, 1))
        if fbe is None and cumf >= paid: fbe = y
    return dict(npv=round(npv), ev=round(ev), eo=round(eo), r29=round(r29), eps=eps, dpat=dpats, ltfcf=lts,
                pbe=pbe, fbe=fbe, cum10=round(cumf))


def jv(sc="base", drag=None):
    drag = A["JV_DRAG"] if drag is None else drag
    j = [(RS[sc][i] * A["SYNM"] - (A["JV_SETUP"] if i < 2 else 0)) * (1 - T) for i in range(10)]
    npv = perp([.5 * x for x in j]) + BPV - A["JV_CASH"] - drag / PW
    eps = [round((F["PAT"] + F["MDR"] * (1 - T) - A["JV_CASH"] * YC * (1 - T) + .5 * j[i] + A["BUILD"] * (1 - T)) / F["SH"], 3) for i in range(10)]
    pbe = next((YRS[i] for i in range(10) if eps[i] >= BASE_EPS), None)
    return dict(npv=round(npv), eps=eps, pbe=pbe)


def bisect(fn, lo=0.0, hi=0.95):
    if fn(lo) < 0: return 0.0
    if fn(hi) > 0: return None
    for _ in range(60):
        mid = (lo + hi) / 2
        if fn(mid) > 0: lo = mid
        else: hi = mid
    return round(lo, 4)


def build():
    O = {}
    ev_paytm = F["MCAP"] - F["CASH"] + F["DEBT"]
    O["ratios"] = dict(px=round(PX, 2), ev=ev_paytm, pe=round(PX / F["EPS"], 1), ev_rev=round(ev_paytm / F["REV"], 2),
                       ev_ebitda=round(ev_paytm / F["EBITDA"], 1), ebitda_margin=round(F["EBITDA"] / F["REV"] * 100, 1),
                       deal_arr=round(F["DEAL"] / F["ARR"], 2), deal_pct_mcap=round(F["DEAL"] / F["MCAP"] * 100, 2),
                       mdr_at=round(F["MDR"] * (1 - T), 2), eps_mdr=round(BASE_EPS, 3),
                       eps_mdr_uplift=round((BASE_EPS / F["EPS"] - 1) * 100, 1), mdr_eps_add=round(F["MDR"] * (1 - T) / F["SH"], 3),
                       mdr_offset_pre=round(F["MDR"] / F["DRAG"] * 100, 1), mdr_offset_post=round(F["MDR"] * (1 - T) / F["DRAG"] * 100, 1),
                       drag_x_arr=round(F["DRAG"] / F["ARR"], 2), drag_pct_pat=round(F["DRAG"] / F["PAT"] * 100),
                       drag_pct_ebitda=round(F["DRAG"] / F["EBITDA"] * 100), top4_arr=round(F["ARR"] * F["TOP4"]),
                       earnings_yield=round(F["EPS"] / PX * 100, 2), cash_yield_post_tax=round(YC * (1 - T) * 100, 2),
                       mdr_half_eps=round((F["PAT"] + F["MDR"] * .5 * (1 - T)) / F["SH"], 3))
    O["implied_mult"] = {str(c): dict(arr=round(F["ARR"] * (1 - c), 1), mult=round(F["DEAL"] / (F["ARR"] * (1 - c)), 1)) for c in [0, .30, .375, .45, .60]}
    O["liminal_ev"] = {sc: {str(c): round(lim(sc, c)[0]) for c in [0, .05, .15, .30, .375, .45, .60]} for sc in G}
    O["liminal_path"] = {sc: [{k: (round(v, 1) if k != "y" else v) for k, v in r.items()} for r in lim(sc)[1]] for sc in G}
    O["liminal_path_base_churn375"] = [{k: (round(v, 1) if k != "y" else v) for k, v in r.items()} for r in lim("base", .375)[1]]
    O["dcf_grid_base"] = {str(w): [round(lim("base", 0, w, t)[0]) for t in [.05, .055, .06, .065, .07]] for w in [.15, .16, .17, .18, .19]}
    O["synergy_pv"] = {sc: dict(rev_syn=round(perp(sfl(sc))), build=round(BPV), total=round(perp(sfl(sc)) + BPV)) for sc in G}
    O["paths"] = {sc: dict(full=full(sc), minority=minority(sc), jv=jv(sc)) for sc in G}
    O["pw_npv"] = {k: round(sum(A["P"][s] * O["paths"][s][k]["npv"] for s in A["P"])) for k in ["full", "minority", "jv"]}
    O["pw_npv"]["walk"] = 0
    O["walk"] = dict(eps=round(BASE_EPS, 3), forgone_syn_pv=round(perp(sfl("base")) + BPV))
    O["full_grid"] = {sc: {str(d): {str(c): full(sc, c, d)["npv"] for c in [0, .15, .30, .375, .45, .60]} for d in [0, 250, 500, 750]} for sc in G}
    O["full_churn_eps27"] = {str(c): full("base", c)["eps"][0] for c in [0, .30, .375, .45, .60]}
    O["full_churn_slope"] = round((O["full_grid"]["base"]["750"]["0.45"] - O["full_grid"]["base"]["750"]["0"]) / 45, 1)
    O["max_price"] = {sc: {f"{c}|{d}": round(lim(sc, c)[0] + perp(sfl(sc)) + BPV - d / PW) for c in [0, .30, .375, .45] for d in [0, 750]} for sc in G}
    O["full_be_churn"] = {f"{sc}|{p}": bisect(lambda c, sc=sc, p=p: full(sc, c, 0, price=p)["npv"]) for sc in ["base", "bull"] for p in [4000, 3000, 2000, 1500]}
    O["min_be_churn"] = {sc: bisect(lambda c, sc=sc: minority(sc, c)["npv"]) for sc in G}
    O["min_stress"] = dict(drag187=minority("base", drag=round(.249 * 750))["npv"], churn15=minority("base", .15)["npv"],
                           churn0=minority("base", 0)["npv"], drag187_pw=round(sum(A["P"][s] * minority(s, drag=187)["npv"] for s in A["P"])))
    O["jv_nodrag"] = {sc: jv(sc, 0)["npv"] for sc in G}
    O["funding"] = {}
    for k, (c, d, e) in {"M1 cash 2100 + equity 1900 (case)": (2100, 0, 1900), "M2 debt 2100 + equity 1900": (0, 2100, 1900),
                         "M3 cash 1050 + debt 1050 + equity 1900": (1050, 1050, 1900), "M4 all equity 4000": (0, 0, 4000),
                         "M5 all cash 4000": (4000, 0, 0)}.items():
        r = full("base", cash=c, debt=d, eq=e); gd = F["DEBT"] + d
        O["funding"][k] = dict(eps27=r["eps"][0], eps29=r["eps"][2], vs750=round((r["eps"][0] / 7.5 - 1) * 100, 1),
                               vsMDR=round((r["eps"][0] / BASE_EPS - 1) * 100, 1), new_sh=r["ns"], dil_pct=round(r["ns"] / 64 * 100, 2),
                               gd_ebitda=round(gd / F["EBITDA"], 2), icr=round(F["EBITDA"] / (gd * A["KD"]), 1),
                               cash_post=F["CASH"] - c, cash_fy31=r["cash"][4], npv=r["npv"])
    O["drag_treatments"] = dict(perpetual=round(F["DRAG"] / PW), ten_yr_trapped=round(pv([F["DRAG"]] * 10)),
                                ten_yr_released=round(pv([F["DRAG"]] * 10) - F["DRAG"] * 10 / (1 + PW) ** 10))
    O["drag_treatments"]["full_npv_mildest"] = O["paths"]["base"]["full"]["npv"] + O["drag_treatments"]["perpetual"] - O["drag_treatments"]["ten_yr_released"]
    bb = F["DEAL_CASH"] / PX
    O["buyback"] = dict(shares=round(bb, 3), eps=round((F["PAT"] - F["DEAL_CASH"] * YC * (1 - T)) / (F["SH"] - bb), 3),
                        chg=round(((F["PAT"] - F["DEAL_CASH"] * YC * (1 - T)) / (F["SH"] - bb) / F["EPS"] - 1) * 100, 1))
    O["compression"] = {str(d): dict(px=round(PX * (1 + d)), shares=round(1900 / (PX * (1 + d)), 3),
                                     dil=round(1900 / (PX * (1 + d)) / 64 * 100, 2),
                                     loss_pct=round(-O["paths"]["base"]["full"]["npv"] / (F["MCAP"] * (1 + d)) * 100, 1)) for d in [0, -.2, -.3, -.4]}
    W = {"Shareholder value (NPV)": .25, "EPS and FCF impact": .15, "Balance sheet and rating": .10, "Client churn risk": .15,
         "Regulatory and capital drag exposure": .10, "Strategic access to custody and tokenization": .15, "Block on the consortium": .10}
    S = {"full": [1, 1, 2, 1, 1, 5, 5], "minority": [4, 4, 5, 4, 4, 4, 4], "jv": [2, 3, 4, 4, 2, 3, 1], "walk": [4, 5, 5, 5, 5, 1, 1]}
    O["matrix"] = dict(weights=W, scores=S, total={k: round(sum(w * s for w, s in zip(W.values(), v)), 2) for k, v in S.items()})
    fn = O["paths"]["base"]["full"]["npv"]
    O["moneyshot"] = dict(npv=fn, per_share=round(-fn / (64 + 1900 / PX), 1), pct_mcap=round(-fn / F["MCAP"] * 100, 1))
    # EPS bridge FY27 (recommended), base
    s = A["STAKE"]; lp = lim("base", A["CH_MIN"])[1][0]["pat"]
    br = dict(start=F["EPS"], mdr=F["MDR"] * (1 - T) / F["SH"], forgone=-A["UP"] * YC * (1 - T) / F["SH"], licence=-A["LIC"] * (1 - T) / F["SH"],
              build=A["BUILD"] * (1 - T) / F["SH"], synergy=sfl("base", A["SYN_RET"])[0] / F["SH"],
              equity_income=s * (lp + A["PRIM"] * YC * (1 - T)) / F["SH"])
    br["end"] = sum(br.values())
    O["eps_bridge_min_fy27"] = {k: round(v, 3) for k, v in br.items()}
    # Full acquisition FY27 EPS bridge (M1, base)
    lpf = lim("base", A["CH_FULL"])[1][0]["pat"]; nsh = F["SH"] + 1900 / PX
    fb = dict(start_pat=F["PAT"], mdr=F["MDR"] * (1 - T), forgone=-2100 * YC * (1 - T), carry=-750 * (YC - A["YR"]) * (1 - T),
              gov=-A["GOV"] * (1 - T), ppa=-A["PPA"] * (1 - T), txn=-A["TXN"] * (1 - T), liminal=lpf, build=A["BUILD"] * (1 - T), synergy=sfl("base")[0])
    O["pat_bridge_full_fy27"] = {k: round(v, 1) for k, v in fb.items()}
    O["pat_bridge_full_fy27"]["end_pat"] = round(sum(fb.values()), 1)
    O["pat_bridge_full_fy27"]["shares"] = round(nsh, 3)
    O["pat_bridge_full_fy27"]["eps"] = round(sum(fb.values()) / nsh, 3)
    # Goodwill impairment indication (full, base churn)
    rec = O["paths"]["base"]["full"]["ev"] + O["paths"]["base"]["full"]["syn"]
    O["impairment"] = dict(carrying=F["DEAL"], recoverable=rec, gap=F["DEAL"] - rec)
    # Football field
    dcf_lo, dcf_hi, dcf_mid = O["dcf_grid_base"]["0.19"][2], O["dcf_grid_base"]["0.15"][2], O["liminal_ev"]["base"]["0"]
    trd = (FF["trading_lo"] * F["ARR"], FF["trading_hi"] * F["ARR"]); prc = (FF["prec_lo"] * F["ARR"], FF["prec_hi"] * F["ARR"])
    mid = lambda a: (a[0] + a[1]) / 2
    wfv = FF["w_dcf"] * mid((dcf_lo, dcf_hi)) + FF["w_trd"] * mid(trd) + FF["w_prec"] * mid(prc)
    up_rule = int(A["STAKE"] * wfv // 50 * 50)
    O["football"] = dict(dcf=[dcf_lo, dcf_hi], dcf_point=dcf_mid, trading=[round(trd[0]), round(trd[1])], precedent=[round(prc[0]), round(prc[1])],
                         weights=[FF["w_dcf"], FF["w_trd"], FF["w_prec"]], weighted_fv=round(wfv), weighted_fv_x=round(wfv / F["ARR"], 1),
                         stake_price_rule=up_rule, stake_price_used=A["UP"], post_money=round(A["UP"] / A["STAKE"]),
                         post_money_x=round(A["UP"] / A["STAKE"] / F["ARR"], 1), headline_max=round((A["UP"] + A["EO"]) / A["STAKE"]),
                         deal_price=F["DEAL"], notes=[FF["trading_note"], FF["prec_note"]])
    O["breakeven_summary"] = {
        "full_M1": dict(pat={sc: O["paths"][sc]["full"]["pbe"] for sc in G}, fcf={sc: O["paths"][sc]["full"]["fbe"] for sc in G}),
        "minority": dict(pat={sc: O["paths"][sc]["minority"]["pbe"] for sc in G}, fcf={sc: O["paths"][sc]["minority"]["fbe"] for sc in G}),
        "jv": dict(pat={sc: O["paths"][sc]["jv"]["pbe"] for sc in G}, fcf="n/a (drag exceeds JV cash flow)"),
        "full_nodrag": dict(pat=full("base", drag=0)["pbe"], fcf=full("base", drag=0)["fbe"])}
    O["meta"] = dict(generated=datetime.datetime.now().isoformat(timespec="seconds"), F=F, A=A, FF=FF)
    return O


def md_table(headers, rows):
    out = "| " + " | ".join(str(h) for h in headers) + " |\n|" + "---|" * len(headers) + "\n"
    for r in rows: out += "| " + " | ".join(str(x) for x in r) + " |\n"
    return out


def fmt(v):
    return "never (10 yrs)" if v is None else v


def tables(O):
    t = "# Model tables (generated by satoshi_gate_model.py)\n\nAll figures ₹ Cr unless stated. Generated " + O["meta"]["generated"] + ".\n\n"
    r = O["ratios"]
    t += "## T1. Paytm baseline ratios (case facts)\n\n" + md_table(["Metric", "Value"], [
        ["Share price (₹)", r["px"]], ["Enterprise value", r["ev"]], ["P/E (x)", r["pe"]], ["EV/Revenue (x)", r["ev_rev"]],
        ["EV/EBITDA (x)", r["ev_ebitda"]], ["EBITDA margin %", r["ebitda_margin"]], ["Deal / ARR (x)", r["deal_arr"]],
        ["Deal as % of market cap", r["deal_pct_mcap"]], ["MDR post-tax", r["mdr_at"]], ["MDR-adjusted standalone EPS (₹)", r["eps_mdr"]],
        ["MDR EPS uplift vs ₹7.50 %", r["eps_mdr_uplift"]], ["MDR offset of drag, pre-tax %", r["mdr_offset_pre"]],
        ["MDR offset of drag, post-tax %", r["mdr_offset_post"]], ["Drag / Liminal ARR (x)", r["drag_x_arr"]],
        ["Drag as % of Paytm PAT", r["drag_pct_pat"]], ["Top-4 client ARR", r["top4_arr"]], ["Earnings yield %", r["earnings_yield"]],
        ["Post-tax cash yield %", r["cash_yield_post_tax"]], ["EPS with MDR at 50% of case value (₹)", r["mdr_half_eps"]]])
    t += "\n## T2. Implied multiple on surviving ARR\n\n" + md_table(["Churn", "Surviving ARR", "Deal / ARR (x)"],
        [[f"{float(c)*100:.1f}%", v["arr"], v["mult"]] for c, v in O["implied_mult"].items()])
    t += "\n## T3. Liminal standalone EV by scenario and churn (DCF, 16.5%, g 6%)\n\n" + md_table(
        ["Scenario"] + [f"{float(c)*100:.1f}%" for c in O["liminal_ev"]["base"]], [[sc] + list(v.values()) for sc, v in O["liminal_ev"].items()])
    for sc in G:
        p = O["liminal_path"][sc]
        t += f"\n## T4-{sc}. Liminal P&L path, {sc}, no churn\n\n" + md_table(["FY"] + [x["y"] for x in p],
            [["Revenue"] + [x["rev"] for x in p], ["EBITDA"] + [x["ebitda"] for x in p], ["PAT"] + [x["pat"] for x in p], ["FCF"] + [x["fcf"] for x in p]])
    t += "\n## T5. DCF sensitivity, base, no churn (WACC rows x terminal growth columns)\n\n" + md_table(
        ["WACC", "5.0%", "5.5%", "6.0%", "6.5%", "7.0%"], [[f"{float(w)*100:.1f}%"] + v for w, v in O["dcf_grid_base"].items()])
    t += "\n## T6. Synergy PV (full ownership basis)\n\n" + md_table(["Scenario", "Revenue synergy PV", "Build avoided PV", "Total"],
        [[sc, v["rev_syn"], v["build"], v["total"]] for sc, v in O["synergy_pv"].items()])
    rows = []
    for sc in G:
        f, m, j = O["paths"][sc]["full"], O["paths"][sc]["minority"], O["paths"][sc]["jv"]
        rows.append([sc, f["npv"], m["npv"], j["npv"], 0])
    rows.append(["probability-weighted", O["pw_npv"]["full"], O["pw_npv"]["minority"], O["pw_npv"]["jv"], 0])
    t += "\n## T7. NPV by path and scenario\n\n" + md_table(["Scenario", "Full acquisition", "24.9% minority", "JV", "Walk away"], rows)
    for sc in G:
        f, m, j = O["paths"][sc]["full"], O["paths"][sc]["minority"], O["paths"][sc]["jv"]
        t += f"\n## T8-{sc}. EPS path (₹), {sc}\n\n" + md_table(["Path"] + YRS, [["Full (M1)"] + f["eps"], ["Minority"] + m["eps"], ["JV"] + j["eps"], ["Walk away"] + [O["walk"]["eps"]] * 10])
        t += f"\nFull: PAT breakeven {fmt(f['pbe'])}, FCF breakeven {fmt(f['fbe'])}, cumulative operating FCF FY27 to FY36 {f['cum10']}, Paytm cash FY27 to FY31 {f['cash'][:5]}.  \n"
        t += f"Minority: PAT breakeven {fmt(m['pbe'])}, look-through FCF breakeven {fmt(m['fbe'])}, Tranche 2 paid {m['eo']} (FY29 revenue {m['r29']}).\n"
        t += "\n" + md_table(["Line"] + YRS, [["Full ΔPAT"] + f["dpat"], ["Full operating FCF after drag"] + f["opfcf"], ["Minority ΔPAT"] + m["dpat"], ["Minority look-through FCF"] + m["ltfcf"]])
    t += "\n## T9. Full acquisition NPV grid, base (rows: annual drag; columns: churn)\n\n" + md_table(
        ["Drag"] + [f"{float(c)*100:.1f}%" for c in O["full_grid"]["base"]["0"]], [[d] + list(v.values()) for d, v in O["full_grid"]["base"].items()])
    t += "\n## T10. Maximum justified control price\n\n" + md_table(["Scenario"] + list(O["max_price"]["base"].keys()), [[sc] + list(v.values()) for sc, v in O["max_price"].items()])
    t += "\nKey format: churn|annual drag.\n"
    t += "\n## T11. Breakeven churn (NPV = 0)\n\n" + md_table(["Case", "Breakeven churn"], [[k, fmt(v)] for k, v in O["full_be_churn"].items()] + [["minority " + k, fmt(v)] for k, v in O["min_be_churn"].items()])
    t += "\n## T12. Minority stress tests (base)\n\n" + md_table(["Test", "NPV"], [[k, v] for k, v in O["min_stress"].items()])
    t += "\n## T13. Funding mixes for the full acquisition (base churn 37.5%, drag 750)\n\n" + md_table(
        ["Mix", "FY27 EPS", "FY29 EPS", "vs ₹7.50 %", "vs MDR-adj %", "New shares (Cr)", "Dilution %", "Gross debt/EBITDA", "ICR", "Cash post", "Cash FY31", "NPV"],
        [[k] + list(v.values()) for k, v in O["funding"].items()])
    t += "\n## T14. Drag PV treatments\n\n" + md_table(["Treatment", "Value"], [[k, v] for k, v in O["drag_treatments"].items()])
    t += "\n## T15. Buyback and multiple compression\n\n" + md_table(["Item", "Value"], [[k, v] for k, v in O["buyback"].items()])
    t += "\n" + md_table(["Share price move", "Price", "Shares for ₹1,900 Cr", "Dilution %", "Full-deal loss as % of mcap"], [[k, v["px"], v["shares"], v["dil"], v["loss_pct"]] for k, v in O["compression"].items()])
    W = O["matrix"]["weights"]; S = O["matrix"]["scores"]
    t += "\n## T16. Decision matrix\n\n" + md_table(["Criterion", "Weight", "Full", "Minority", "JV", "Walk"],
        [[c, w, S["full"][i], S["minority"][i], S["jv"][i], S["walk"][i]] for i, (c, w) in enumerate(W.items())] +
        [["Weighted score", 1.0, O["matrix"]["total"]["full"], O["matrix"]["total"]["minority"], O["matrix"]["total"]["jv"], O["matrix"]["total"]["walk"]]])
    t += "\n## T17. EPS bridge FY27, recommended minority (₹ per share)\n\n" + md_table(["Step", "₹"], [[k, v] for k, v in O["eps_bridge_min_fy27"].items()])
    t += "\n## T18. PAT bridge FY27, full acquisition M1 (₹ Cr)\n\n" + md_table(["Step", "Value"], [[k, v] for k, v in O["pat_bridge_full_fy27"].items()])
    t += "\n## T19. Football field (Liminal, 100% equity)\n\n" + md_table(["Item", "Value"], [[k, v] for k, v in O["football"].items()])
    t += "\n## T20. Moneyshot and impairment\n\n" + md_table(["Item", "Value"], [[k, v] for k, v in O["moneyshot"].items()] + [["impairment " + k, v] for k, v in O["impairment"].items()])
    t += "\n## T21. Breakeven summary\n\n```\n" + json.dumps(O["breakeven_summary"], indent=1) + "\n```\n"
    return t


if __name__ == "__main__":
    O = build()
    js = json.dumps(O, indent=1, ensure_ascii=False)
    O["meta"]["hash"] = hashlib.sha1(js.encode()).hexdigest()[:10]
    with open(os.path.join(HERE, "model_outputs.json"), "w", encoding="utf-8") as fh: json.dump(O, fh, indent=1, ensure_ascii=False)
    with open(os.path.join(HERE, "model_tables.md"), "w", encoding="utf-8") as fh: fh.write(tables(O))
    print("moneyshot", O["moneyshot"], "pw", O["pw_npv"], "matrix", O["matrix"]["total"])
    print("football", O["football"])
    print("bridge", O["eps_bridge_min_fy27"])
    print("full pat bridge", O["pat_bridge_full_fy27"])
    print("breakeven", O["breakeven_summary"])
