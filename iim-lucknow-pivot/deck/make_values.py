"""Build deck/values.js and deck/slide-copy.md from model and review outputs."""
import json, re, pathlib, datetime as dt
ROOT = pathlib.Path(__file__).resolve().parents[1]
O = json.load(open(ROOT / "model/model_outputs.json", encoding="utf-8"))
try:
    Rv = json.load(open(ROOT / "research/reviews/review_outputs.json", encoding="utf-8"))
    meta = json.load(open(ROOT / "research/reviews/scrape_meta.json", encoding="utf-8"))
except FileNotFoundError:
    Rv, meta = None, None
def f0(x): return f"{round(x):,}" if abs(x) >= 1000 else (f"{x:.0f}" if abs(x) >= 100 else f"{x:.1f}".rstrip("0").rstrip("."))
def inr(x):  # Indian grouping for whole numbers
    s = str(int(round(abs(x)))); 
    if len(s) > 3:
        last, rest = s[-3:], s[:-3]; parts = []
        while len(rest) > 2: parts.insert(0, rest[-2:]); rest = rest[:-2]
        if rest: parts.insert(0, rest)
        s = ",".join(parts) + "," + last
    return ("−" if x < 0 else "") + s
ms, st, seg, ue, m = O["moneyshot"], O["stress"]["base"], O["segments"], O["unit_econ"], O["metrics"]
rev = O["revenue"]["base"]["rows"]
V = dict(
  rev12=f0(ms["rev12_base"]), rev12_bear=f0(ms["rev12_bear"]), rev12_bull=f0(ms["rev12_bull"]), cost12=f0(ms["cost12"]),
  share_fy25=f"{ms['share_of_fy25']:.1f}", lost_rev=inr(O["case"]["lost_revenue_cr"]),
  ads12=f0(O["revenue"]["base"]["total"]["ads"]), spon12=f0(O["revenue"]["base"]["total"]["sponsorship"]),
  pro12=f0(O["revenue"]["base"]["total"]["pro"]), gift12=f0(O["revenue"]["base"]["total"]["gifting"]), fc12=f0(O["revenue"]["base"]["total"]["fancode"]),
  rev_totals={sc: O["revenue"][sc]["total"] for sc in ["bear", "base", "bull"]},
  rev_months=[r["total"] for r in rev], nsm_paths={sc: [r["nsm_m"] for r in O["revenue"][sc]["rows"]] for sc in ["bear", "base", "bull"]},
  ipl2=f0(rev[5]["total"] + rev[6]["total"] + rev[7]["total"]),   # Mar to May 2027 (IPL window 10 Mar to 15 May)
  core_now=f"{seg['core_now_m']:.0f}", preban=f"{O['base']['preban_season_active_m']:.0f}", mau_jul=f"{O['base']['mau_mid26_m']:.0f}",
  mau_oct=f"{O['base']['mau_oct26_m']:.0f}", nsm0=f0(m["nsm"]["baseline_m"]), nsm6=f0(m["nsm"]["m6_m"]), nsm12=f0(m["nsm"]["m12_m"]),
  m4_6=m["supporting"][3]["m6"].replace("Rs ", ""), m4_12=m["supporting"][3]["m12"].replace("Rs ", ""),
  left_s1s2_share=f"{seg['left_s1s2_share']:.0f}",
  seg_now=[r["now_m"] for r in seg["rows"]], seg_pre=[r["preban_m"] for r in seg["rows"]], stay=[r["stay_pct"] for r in seg["rows"]],
  seg_left=[round(r["preban_m"] - O["base"]["seg_retained_m"][r["id"]], 1) for r in seg["rows"]],
  ue_S3=f0(ue["S3"]["total_rs"]), ue_S4=f0(ue["S4"]["total_rs"]), ue_S5=f0(ue["S5"]["total_rs"]), ue_mult=f"{ue['multiple_S3_vs_S5']:.1f}",
  opt_scores=[[*O["options"]["options"][k]["scores"], O["options"]["options"][k]["weighted"]] for k in "ABCDE"],
  scoreD=f"{O['options']['options']['D']['weighted']:.2f}", scoreA=f"{O['options']['options']['A']['weighted']:.2f}",
  rice_top=[[r["feature"], r["score"], "Build"] for r in O["rice"] if not r["cut"]][:5],
  rice_cut=[[r["feature"], r["score"], "Cut"] for r in O["rice"] if r["cut"]][-2:],
  net_pre=f"{st['net_pre2023']:.1f}", net28=f"{st['net28']:.1f}", net40=f"{st['net40']:.1f}",
  drop28=f"{st['drop28_pct']:.0f}", drop40=f"{st['drop40_pct']:.0f}", pp28=f"{st['prize_pool_to_hold_margin_28']:.0f}",
  ecpm_reg=str(O["meta"]["A"]["A14_ecpm"]["regular"]), ecpm_ipl=str(O["meta"]["A"]["A14_ecpm"]["ipl"]),
  title_base=str(O["meta"]["A"]["A16_sponsor"]["title_rating_season"]["base"]),
)
if Rv:
    d = Rv["n"]["Dream11"]; V["n_d11"] = inr(d["total"]); V["n_all"] = inr(d["total"] + Rv["n"]["FanCode"]["total"])
    V["n_periods"] = [d["P0"], d["P1"], d["P2"], d["P3"]]
    mon = Rv["monthly"]["Dream11"]; keys = [k for k in sorted(mon) if k >= "2025-06"]
    V["rating_months"] = [mon[k]["avg"] for k in keys]; V["rating_labels"] = [dt.datetime.strptime(k, "%Y-%m").strftime("%b %y") for k in keys]
    V["rating_keys"] = keys
    sh = Rv["share"]["Dream11"]; V["theme_share"] = [[sh[t][p] for p in ["P0", "P1", "P2", "P3"]] for t in ["T01", "T04", "T05", "T06", "T08"]]
    ar = Rv["avg_rating"]["Dream11"]
    V["rating_title"] = ("DREAM11'S APP-STORE RATING FELL AT EVERY STEP OF THE PIVOT" if all(ar[p] < ar["P0"] for p in ["P1", "P2", "P3"])
                         else "DREAM11'S APP-STORE RATING, MONTH BY MONTH, ACROSS THE PIVOT")
    V["scrape_date"] = meta["scraped_at"][:10]; V["scrape_mon"] = dt.datetime.fromisoformat(meta["scraped_at"]).strftime("%b %Y")
    q = {k: [x for x in v if not re.search(r"[ऀ-ॿ]", x["text"])] for k, v in Rv["quotes"]["Dream11"].items()}
    def pick(keys, exclude=None):
        c = [x for k in keys for x in q.get(k, []) if not exclude or x["text"] != exclude["text"]]; c.sort(key=lambda x: -x["thumbs"]); return c[0] if c else None
    q1 = pick(["T01_P3"]) or pick(["T01_P2"]); q2 = pick(["T12_P3"], exclude=q1)
    def trim(t):
        w = t.split(); return " ".join(w[:16]) + ("…" if len(w) > 16 else "")
    V["quotes"] = [dict(text=trim(x["text"]), meta=f"{'Play Store' if x['store']=='play' else 'App Store'} review, {x['rating']}/5, {dt.datetime.strptime(x['date'],'%Y-%m-%d').strftime('%b %Y')}") for x in [q1, q2] if x]
else:
    V.update(n_d11="0", n_all="0", rating_months=[], rating_labels=[], theme_share=None, quotes=[], scrape_date="n/a", scrape_mon="n/a",
             rating_title="REVIEW MINING BLOCKED: SEE APPENDIX")
V["n_sources"] = "60"   # updated after assembly
V["prec_summary"] = "T01 87%, T04 85%, T06 90%, T08 80%; T05 65% (indicative)"
js = "const V = " + json.dumps(V, ensure_ascii=False) + ";"
(ROOT / "deck").mkdir(exist_ok=True)
open(ROOT / "deck/values.js", "w", encoding="utf-8").write(js)
print(js[:1500].encode("ascii", "backslashreplace").decode("ascii"))
