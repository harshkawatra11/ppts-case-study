# ===== SETU MODEL =====
"""Project Setu turnaround model (LSR Case for Change). Units: Rs crore unless stated; heads are people.
F = case facts (never changed). A = team assumptions (IDs in the research document, section 16). L = plan levers.
Run:  python setu_model.py   -> writes model_outputs.json beside this file and prints checks."""
import copy, json, hashlib, pathlib
F = dict(cash0=40.0, floor=15.0, loan=40.0, budget=15.0, rev=182.0, cost=213.0, hc=2400, avg_cost=6.0, attr=0.26, tenure=6.0,
         price=38.0, unit_cost=41.0, ai_price=27.0, ai_cost=9.0, inc_price=33.0, inc_cost=28.0,
         staff=dict(proc=1350, exc=420, voice=380, tl=190, corp=60),
         hist=dict(rev=[240, 262, 226, 182], cost=[196, 217, 222, 213], ebitda=[44, 45, 4, -31], emp_pct=[0.53, 0.55, 0.65, 0.80], hc=[2300, 2550, 2500, 2400]))
A = dict(interest=0.11, d=0.0245, rev_bfsi=100.0, rev_cat=48.0, rev_voice=34.0, hard_share=0.30,
         pay=dict(clean=4.8, hard=7.0, cat=4.8, voice=5.0, lab=5.0, tl=10.5, corp=18.0, newtech=24.0),
         clean_prod=2950.0, hard_prod=1500.0, non=dict(fac=30.0, tech=14.0, sga=17.0, ga=8.0),
         wage_share=0.50, grat_elig=0.55, leave_days=10, dso_days=60, recv_recovery=0.85, payables=5.75, closure_cost=6.0, closure_months=3)
L = dict(d_clean=0.015, g_hard=0.025, g_hard_from=6, d_cat=0.04, d_voice_early=0.02, d_voice_late=0.01,
         lab=[0, 30, 80, 140, 200, 250, 290, 320, 350, 370, 390, 400, 420, 440, 460, 480, 490, 500], lab_rev=0.63, lab_rev2=0.68,
         p_clean=31.0, p_hard=48.0, verify=0.20, assist=0.45, assist_gain=0.02, assist_from=10, assist_cap=0.65, span1=14, newtech=10,
         mig={1: 0, 2: 0, 3: .20, 4: .40, 5: .55, 6: .70, 7: .80, 8: .90}, rep={1: 0, 2: .40, 3: .80},
         vsp={}, vsp_cost=2.7, bench_pay=0.75, bench_exit=0.08, bridge_grant=0.6, lead_cut=0.25, lead_cut_months=12,
         fac={1: 1, 2: .97, 3: .90, 4: .82, 5: .75, 6: .68, 7: .60, 8: .55}, fac_end=0.50, tech_add=0.20,
         sga0=0.75, sga1=0.60, ga0=0.90, ga1=0.75, fee=8.0, fee2=6.5,
         one=dict(reskill={2: .5, 3: .9, 4: .8, 5: .6, 6: .5}, tech={1: .4, 2: .7, 3: .6, 4: .5, 5: .3}, footprint={4: .4, 6: .4, 8: .4}, retention={6: .75, 12: .75}))
SCEN = dict(bear=dict(d_clean=0.03, p_hard=44.0, lab_rev=0.50, lab_rev2=0.50, fee=11.0, fee2=11.0, g_hard=0.0, assist=0.30, assist_gain=0.0),
            base={}, bull=dict(d_clean=0.005, p_hard=52.0, lab_rev=0.72, lab_rev2=0.78, g_hard=0.035, assist=0.55))
CONT = dict(vsp={6: 150, 8: 120, 10: 80}, vsp_cost=2.3, fac_end=0.40, sga1=0.50, ga1=0.65, lead_cut_months=18, span1=16)
INT = F["loan"] * A["interest"] / 12
def heads0():
    files = A["rev_bfsi"] / F["price"] * 10
    hc = files * (1 - A["hard_share"]) * 1e6 / (A["clean_prod"] * 12); hh = files * A["hard_share"] * 1e6 / (A["hard_prod"] * 12)
    return files, hc, hh, F["staff"]["proc"] + F["staff"]["exc"] - hc - hh
def drift(months=18, d=None):
    d = A["d"] if d is None else d; cash = F["cash0"]; rev = F["rev"] / 12; cost = F["cost"] / 12; out = []
    for m in range(1, months + 1):
        rev *= 1 - d; cash += rev - cost - INT; out.append(dict(m=m, rev=rev, ebitda=rev - cost, cash=cash))
    return out
def plan(P, months=18):
    files, hc0, hh0, cat0 = heads0(); crh = A["rev_cat"] / cat0; vrh = A["rev_voice"] / F["staff"]["voice"]
    span0 = (hc0 + hh0 + cat0 + F["staff"]["voice"]) / F["staff"]["tl"]
    clean = files * (1 - A["hard_share"]) / 12; hard = files * A["hard_share"] / 12; cat = A["rev_cat"] / 12; voice = A["rev_voice"] / 12
    S = float(F["hc"]); cash = F["cash0"]; pay = A["pay"]; rows = []
    for m in range(1, months + 1):
        mig = P["mig"].get(m, 1.0); rp = P["rep"].get(m, 1.0)
        if m <= 2: clean *= 1 - A["d"]; hard *= 1 - A["d"]
        else:
            clean *= 1 - P["d_clean"]
            if m >= P["g_hard_from"]: hard *= 1 + P["g_hard"]
        cat *= 1 - P["d_cat"]; voice *= 1 - (P["d_voice_early"] if m <= 6 else P["d_voice_late"]); lab = P["lab"][m - 1]
        assist = min(P["assist_cap"], P["assist"] + max(0, m - P["assist_from"] + 1) * P["assist_gain"])
        fee = P["fee"] if m <= 12 else P["fee2"]; lrev = P["lab_rev"] if m <= 12 else P["lab_rev2"]
        r_clean = clean * ((1 - mig) * F["price"] + mig * P["p_clean"]) / 10; r_hard = hard * ((1 - rp) * F["price"] + rp * P["p_hard"]) / 10; r_lab = lab * lrev / 100
        rev = r_clean + r_hard + cat + voice + r_lab
        h_clean = clean * 1e6 * ((1 - mig) + mig * P["verify"]) / A["clean_prod"]; h_hard = hard * 1e6 / (A["hard_prod"] * (1 + assist * mig))
        h_cat = cat * 12 / crh; h_voice = voice * 12 / vrh; prod = h_clean + h_hard + h_cat + h_voice + lab
        tl = prod / (span0 if m < 4 else P["span1"]); nt = P["newtech"] if m >= 2 else 0; D = prod + tl + 60 + nt
        nat = S * F["attr"] / 12; S -= nat; bench = max(0.0, S - D); ass = bench * P["bench_exit"]; S -= ass; bench -= ass
        v = min(bench, P["vsp"].get(m, 0)); S -= v; bench -= v; hired = max(0.0, D - S); S += hired
        ppl = (h_clean * pay["clean"] + h_hard * pay["hard"] + h_cat * pay["cat"] + h_voice * pay["voice"] + lab * pay["lab"] + tl * pay["tl"]
               + 60 * pay["corp"] + nt * pay["newtech"] + bench * pay["clean"] * P["bench_pay"]) / 1200
        if m <= P["lead_cut_months"]: ppl -= 60 * pay["corp"] * P["lead_cut"] / 1200
        n = A["non"]; eng = clean * mig * fee / 10
        nonp = (n["fac"] / 12 * P["fac"].get(m, P["fac_end"]) + n["tech"] / 12 + (P["tech_add"] if m >= 3 else 0)
                + n["sga"] / 12 * (P["sga0"] if m < 4 else P["sga1"]) + n["ga"] / 12 * (P["ga0"] if m < 4 else P["ga1"]) + eng)
        e = rev - ppl - nonp
        ob = {k: P["one"][k].get(m, 0) for k in P["one"]}; ob["vsp"] = v * P["vsp_cost"] / 100; ob["bridge"] = ass * P["bridge_grant"] / 100
        one = sum(ob.values()); cash += e - one - INT
        rows.append(dict(m=m, rev=rev, r_clean=r_clean, r_hard=r_hard, r_cat=cat, r_voice=voice, r_lab=r_lab, ppl=ppl, nonp=nonp, eng=eng, ebitda=e, one=one, ob=ob,
                         cash=cash, S=S, D=D, bench=bench, vsp=v, ass=ass, nat=nat, hired=hired, h_clean=h_clean, h_hard=h_hard, h_cat=h_cat, h_voice=h_voice,
                         lab=lab, tl=tl, corp=60 + nt, clean_vol=clean, hard_vol=hard, assist=assist, mig=mig, fee=fee))
    return rows
def scen(name, extra=None):
    P = copy.deepcopy(L); P.update(SCEN[name]); P.update(extra or {}); return plan(P), P
def breach(rows): return next((r["m"] for r in rows if r["cash"] < F["floor"]), None)
def kpis(rows):
    mc = min(rows, key=lambda r: r["cash"]); be = next((r["m"] for r in rows if r["ebitda"] > 0), None)
    return dict(min_cash=mc["cash"], min_month=mc["m"], breach=breach(rows), breakeven_month=be, cash6=rows[5]["cash"], cash12=rows[11]["cash"], cash18=rows[17]["cash"],
                e6=rows[5]["ebitda"] * 12, e12=rows[11]["ebitda"] * 12, e18=rows[17]["ebitda"] * 12, rev12=rows[11]["rev"] * 12, rev18=rows[17]["rev"] * 12,
                hc12=rows[11]["S"], hc18=rows[17]["S"], ebitda_y1=sum(r["ebitda"] for r in rows[:12]), rev_y1=sum(r["rev"] for r in rows[:12]),
                one_total=sum(r["one"] for r in rows), max_bench=max(r["bench"] for r in rows),
                nat12=sum(r["nat"] for r in rows[:12]), ass12=sum(r["ass"] for r in rows[:12]), vsp12=sum(r["vsp"] for r in rows[:12]), hired12=sum(r["hired"] for r in rows[:12]))
def path1_standard(months=18):
    cash = F["cash0"]; S = float(F["hc"]); b = A["rev_bfsi"] / 12; c = A["rev_cat"] / 12; v = A["rev_voice"] / 12; out = []
    nonp = (F["cost"] - F["hc"] * F["avg_cost"] / 100) / 12 * 0.9
    for m in range(1, months + 1):
        b *= (1 - A["d"]) if m <= 2 else 0.99
        c *= 1 - L["d_cat"]; v *= 1 - L["d_voice_early"]; rev = b * (1.0 if m < 3 else F["inc_price"] / F["price"]) + c + v; S *= 1 - F["attr"] / 12
        one = ((F["hc"] - 60) * 0.45 / 100 + 2.5) / 4 if m <= 4 else 0
        e = rev - S * F["avg_cost"] / 1200 - nonp; cash += e - one - INT; out.append(dict(m=m, rev=rev, ebitda=e, cash=cash, S=S))
    return out
def path3_pivot(months=18):
    cash = F["cash0"]; S = float(F["hc"]); out = []; non0 = (F["cost"] - F["hc"] * F["avg_cost"] / 100) / 12
    for m in range(1, months + 1):
        leg = F["rev"] / 12 * max(0.0, 1 - m / 6); lab = min(2 * L["lab"][m - 1], 1000); rev = leg + lab * L["lab_rev"] / 100
        need = leg * 12 / (F["rev"] / (F["hc"] - 60)) + lab * 1.08 + 70; S *= 1 - F["attr"] / 12; bench = max(0.0, S - need); ex = bench * L["bench_exit"]; S -= ex; bench -= ex
        e = rev - (S - bench + bench * L["bench_pay"]) * F["avg_cost"] / 1200 - non0 * (0.9 if m < 4 else 0.65)
        cash += e - (1.0 if m <= 6 else 0) - INT; out.append(dict(m=m, rev=rev, ebitda=e, cash=cash, S=S))
    return out
def winddown(month=0):
    dr = drift(); cash = F["cash0"] if month == 0 else dr[month - 1]["cash"]; rev_m = F["rev"] / 12 if month == 0 else dr[month - 1]["rev"]
    hc = F["hc"]; mpay = F["avg_cost"] / 12; wage = mpay * A["wage_share"]
    notice = hc * mpay / 100; retr = hc * wage * 15 / 26 * F["tenure"] / 100; grat = hc * A["grat_elig"] * wage * 15 / 26 * F["tenure"] / 100
    leave = hc * mpay * A["leave_days"] / 30 / 100; fund = hc * wage * 15 / 30 / 100; dues = notice + retr + grat + leave + fund
    recv = rev_m * A["dso_days"] / 30 * A["recv_recovery"]; burn = -dr[0]["ebitda"] * A["closure_months"] * 0.5
    sources = cash + recv; uses = F["loan"] + dues + A["payables"] + A["closure_cost"] + burn
    return dict(month=month, cash=cash, receivables=recv, sources=sources, loan=F["loan"], notice=notice, retrenchment=retr, gratuity=grat, leave=leave, reskill_fund=fund,
                dues=dues, dues_per_head_lakh=dues / hc * 100, payables=A["payables"], closure=A["closure_cost"], closure_burn=burn, uses=uses, shortfall=uses - sources,
                dues_cover=max(0.0, min(1.0, (sources - A["payables"] - A["closure_cost"] - burn) / (F["loan"] + dues))))
def sale(close=5):
    dr = drift(); cash = dr[close - 1]["cash"]; rev = dr[close - 1]["rev"] * 12; out = {}
    for k, mult, jobs in (("bear", 0.20, 500), ("base", 0.35, 800), ("bull", 0.50, 1200)):
        ev = mult * rev; out[k] = dict(mult=mult, ev=ev, equity=ev - F["loan"] + cash, jobs=jobs, jobs_pct=jobs / F["hc"])
    return dict(close=close, cash_at_close=cash, rev_at_close=rev, cases=out)
def unit_econ(rows):
    files, hc0, hh0, cat0 = heads0(); span0 = (hc0 + hh0 + cat0 + F["staff"]["voice"]) / F["staff"]["tl"]; sh = A["rev_bfsi"] / F["rev"]
    oh0 = (sum(A["non"].values()) + 60 * A["pay"]["corp"] / 100) * sh / files * 10
    lc = A["pay"]["clean"] * 1e5 / (A["clean_prod"] * 12); lh = A["pay"]["hard"] * 1e5 / (A["hard_prod"] * 12); tlc = A["pay"]["tl"] / span0
    today = dict(clean=dict(price=F["price"], labour=lc, tl=tlc * 1e5 / (A["clean_prod"] * 12), overhead=oh0, engine=0.0),
                 hard=dict(price=F["price"], labour=lh, tl=tlc * 1e5 / (A["hard_prod"] * 12), overhead=oh0, engine=0.0))
    r = rows[11]; fl = (r["clean_vol"] + r["hard_vol"]) * 12; shb = (r["r_clean"] + r["r_hard"]) / r["rev"]
    oh1 = ((r["nonp"] - r["eng"]) * 12 + r["corp"] * A["pay"]["corp"] / 100) * shb / fl * 10; tl1 = A["pay"]["tl"] / L["span1"]
    pc = A["clean_prod"] * 12 / L["verify"]; ph = A["hard_prod"] * (1 + r["assist"]) * 12
    m12 = dict(clean=dict(price=L["p_clean"], labour=A["pay"]["clean"] * 1e5 / pc, tl=tl1 * 1e5 / pc, overhead=oh1, engine=L["fee"]),
               hard=dict(price=L["p_hard"], labour=A["pay"]["hard"] * 1e5 / ph, tl=tl1 * 1e5 / ph, overhead=oh1, engine=0.0))
    for d in (today, m12):
        for k in ("clean", "hard"): d[k]["cost"] = d[k]["labour"] + d[k]["tl"] + d[k]["overhead"] + d[k]["engine"]; d[k]["margin"] = d[k]["price"] - d[k]["cost"]
        hs = A["hard_share"]; d["blended"] = dict(price=(1 - hs) * d["clean"]["price"] + hs * d["hard"]["price"], cost=(1 - hs) * d["clean"]["cost"] + hs * d["hard"]["cost"])
        d["blended"]["margin"] = d["blended"]["price"] - d["blended"]["cost"]
    return dict(today=today, m12=m12)
def line_pnl():
    files, hc0, hh0, cat0 = heads0(); span0 = (hc0 + hh0 + cat0 + F["staff"]["voice"]) / F["staff"]["tl"]; p = A["pay"]; oh = sum(A["non"].values()) + 60 * p["corp"] / 100; out = {}
    for k, rev, heads, pay in (("BFSI clean files", A["rev_bfsi"] * (1 - A["hard_share"]), hc0, p["clean"]), ("BFSI hard files", A["rev_bfsi"] * A["hard_share"], hh0, p["hard"]),
                               ("Catalogue QC", A["rev_cat"], cat0, p["cat"]), ("Voice and chat", A["rev_voice"], F["staff"]["voice"], p["voice"])):
        direct = heads * pay / 100 + heads / span0 * p["tl"] / 100; o = oh * rev / F["rev"]
        out[k] = dict(rev=rev, heads=heads, direct=direct, contribution=rev - direct, overhead=o, ebitda=rev - direct - o, margin=(rev - direct - o) / rev, rev_per_head_lakh=rev / heads * 100)
    return out
TORNADO = [("Labelling revenue per head", "lab_rev", 0.50, 0.72), ("Engine fee per clean file", "fee", 11.0, 6.0), ("Hard-file price", "p_hard", 44.0, 52.0),
           ("Clean-file volume decline", "d_clean", 0.03, 0.005), ("Catalogue run-off speed", "d_cat", 0.07, 0.02), ("Clean-file price", "p_clean", 29.0, 33.0),
           ("Hard-file volume growth", "g_hard", 0.0, 0.035), ("AI-assist gain on hard files", "assist", 0.30, 0.55), ("Human verification share", "verify", 0.30, 0.15), ("Bridge pay on the bench", "bench_pay", 1.0, 0.6)]
def tornado():
    out = []
    for name, k, lo, hi in TORNADO:
        res = []
        for v in (lo, hi):
            P = copy.deepcopy(L); P[k] = v
            if k == "lab_rev": P["lab_rev2"] = v
            if k == "fee": P["fee2"] = min(v, L["fee2"]) if v < L["fee"] else v
            r = plan(P); res.append((min(x["cash"] for x in r), r[11]["ebitda"] * 12))
        out.append(dict(name=name, key=k, lo=lo, hi=hi, min_lo=res[0][0], min_hi=res[1][0], e12_lo=res[0][1], e12_hi=res[1][1]))
    return sorted(out, key=lambda t: t["min_lo"])
def grid():
    ph = [42.0, 45.0, 48.0, 51.0, 54.0]; dc = [0.005, 0.010, 0.015, 0.025, 0.035]; g = []
    for p in ph:
        row = []
        for d in dc:
            P = copy.deepcopy(L); P["p_hard"] = p; P["d_clean"] = d; row.append(min(x["cash"] for x in plan(P)[:12]))
        g.append(row)
    return dict(p_hard=ph, d_clean=dc, min_cash_12m=g)
def build():
    O = {}; dr = drift(); O["drift"] = dict(rows=dr, breach=breach(dr), zero=next(r["m"] for r in dr if r["cash"] < 0), cash6=dr[5]["cash"])
    lo, hi = 0.0, 0.1
    for _ in range(60):
        mid = (lo + hi) / 2
        if drift(d=mid)[5]["cash"] > F["floor"]: lo = mid
        else: hi = mid
    O["runway"] = dict(usable=F["cash0"] - F["floor"], free_after_budget=F["cash0"] - F["floor"] - F["budget"], implied_decline=mid, observed_decline=1 - (182 / 226) ** (1 / 7.5),
                       flat_breach=breach(drift(d=0.0)), flat_zero=next(r["m"] for r in drift(months=30, d=0.0) if r["cash"] < 0))
    h = F["hist"]; emp = [h["rev"][i] * h["emp_pct"][i] for i in range(4)]; emp[3] = F["hc"] * F["avg_cost"] / 100
    O["history"] = dict(emp_cost=emp, non_emp=[h["cost"][i] - emp[i] for i in range(4)], rev_per_head=[h["rev"][i] / h["hc"][i] * 100 for i in range(4)], cost_per_head=[emp[i] / h["hc"][i] * 100 for i in range(4)],
                        dropthrough=(h["ebitda"][1] - h["ebitda"][3]) / (h["rev"][1] - h["rev"][3]), hc_at_55pct=F["rev"] * 0.55 / F["avg_cost"] * 100, leavers_per_year=F["hc"] * F["attr"])
    f, hc0, hh0, cat0 = heads0(); O["base_heads"] = dict(files_mn=f, clean=hc0, hard=hh0, cat=cat0, voice=F["staff"]["voice"])
    O["lines"] = line_pnl(); O["lines_other_margin"] = (F["rev"] - A["rev_bfsi"] - (F["cost"] - A["rev_bfsi"] * F["unit_cost"] / F["price"])) / (F["rev"] - A["rev_bfsi"])
    O["plan"] = {}
    for k in SCEN:
        r, P = scen(k); O["plan"][k] = dict(rows=r, kpi=kpis(r))
    r, P = scen("bear", CONT); O["plan"]["bear_contingency"] = dict(rows=r, kpi=kpis(r))
    b = O["plan"]["base"]["rows"]; tot = {k: sum(x["ob"][k] for x in b) for k in b[0]["ob"]}; spent = sum(tot.values())
    O["budget"] = dict(lines=tot, spent=spent, reserve=F["budget"] - spent, people_share=(tot["reskill"] + tot["retention"] + tot["bridge"] + tot["vsp"]) / spent)
    k = O["plan"]["base"]["kpi"]; m12 = b[11]
    O["workforce"] = dict(start=F["hc"], natural=k["nat12"], assisted=k["ass12"], vsp=k["vsp12"], hired=k["hired12"], end=k["hc12"],
                          roles_m12=dict(hard_desk=m12["h_hard"], clean_verifiers=m12["h_clean"], catalogue=m12["h_cat"], voice=m12["h_voice"], data_services=m12["lab"], team_leads=m12["tl"], tech_corporate=m12["corp"]),
                          severance_payback_months=L["vsp_cost"] / (A["pay"]["clean"] / 12), statutory_min_lakh=winddown(0)["dues_per_head_lakh"])
    O["unit"] = unit_econ(b); O["tornado"] = tornado(); O["grid"] = grid()
    p1 = path1_standard(); p3 = path3_pivot()
    O["paths"] = dict(drift=dict(breach=O["drift"]["breach"], min_cash12=min(x["cash"] for x in dr[:12]), jobs12=0, e12=dr[11]["ebitda"] * 12, cash=[x["cash"] for x in dr]),
        p1_standard=dict(breach=breach(p1), min_cash12=min(x["cash"] for x in p1[:12]), jobs12=p1[11]["S"], e12=p1[11]["ebitda"] * 12, cash=[x["cash"] for x in p1]),
        p3_pivot=dict(breach=breach(p3), min_cash12=min(x["cash"] for x in p3[:12]), jobs12=p3[11]["S"], e12=p3[11]["ebitda"] * 12, cash=[x["cash"] for x in p3]),
        setu=dict(breach=k["breach"], min_cash12=min(x["cash"] for x in b[:12]), jobs12=k["hc12"], e12=k["e12"], cash=[x["cash"] for x in b]))
    O["sale"] = sale(); O["winddown"] = {str(m): winddown(m) for m in (0, 3, 6)}
    O["moneyshot"] = dict(jobs_kept=round(k["hc12"]), jobs_start=F["hc"], forced_exits=round(k["vsp12"]), cash_floor=k["min_cash"], drift_breach=O["drift"]["breach"], budget_spent=spent, reserve=F["budget"] - spent)
    O["meta"] = dict(F=F, A=A, L=L, SCEN=SCEN, CONT=CONT); return O
def rnd(o):
    if isinstance(o, float): return round(o, 4)
    if isinstance(o, dict): return {str(a): rnd(b) for a, b in o.items()}
    if isinstance(o, (list, tuple)): return [rnd(x) for x in o]
    return o
if __name__ == "__main__":
    O = rnd(build()); here = pathlib.Path(__file__).resolve().parent
    O["meta"]["hash"] = hashlib.sha1(json.dumps(O, sort_keys=True).encode()).hexdigest()[:10]
    (here / "model_outputs.json").write_text(json.dumps(O, indent=1, ensure_ascii=False), encoding="utf-8")
    k = O["plan"]["base"]["kpi"]; w = O["winddown"]["0"]; u = O["unit"]
    chk = [("drift breaches covenant in month 6", O["drift"]["breach"] == 6), ("drift cash hits zero in month 9", O["drift"]["zero"] == 9),
           ("base plan never breaches", k["breach"] is None), ("base min cash >= 20", k["min_cash"] >= 20), ("budget spent <= 15", O["budget"]["spent"] <= 15),
           ("no forced exits in base", k["vsp12"] == 0), ("blended unit cost ties to 41 within 0.5", abs(u["today"]["blended"]["cost"] - 41) < 0.5),
           ("line EBITDA sums to -31 within 1.5", abs(sum(v["ebitda"] for v in O["lines"].values()) + 31) < 1.5), ("wind-down shortfall positive", w["shortfall"] > 0),
           ("every single-factor downside keeps cash above 15", all(t["min_lo"] > 15 for t in O["tornado"]))]
    for n, ok in chk: print(("PASS " if ok else "FAIL ") + n)
    print("HASH", O["meta"]["hash"])
