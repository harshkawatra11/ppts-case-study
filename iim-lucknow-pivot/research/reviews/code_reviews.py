"""Code reviews into behavioural themes with a published regex codebook. Writes reviews_coded.csv,
review_outputs.json and review_tables.md. Deterministic: same input, same output."""
import csv, json, re, random, datetime as dt
from collections import Counter, defaultdict

PERIODS = [("P0", "2025-06-01", "2025-08-20"), ("P1", "2025-08-21", "2025-12-03"),
           ("P2", "2025-12-04", "2026-08-26"), ("P3", "2026-08-27", "2099-12-31")]
def period(d):
    for p, a, b in PERIODS:
        if a <= d <= b: return p
    return None

# Codebook: theme -> (label, regex). Word-boundary, case-insensitive; Hinglish tokens included.
CB = {
 "T01": ("Money or prize gone",        r"\b(real money|money|paisa|paise|cash|withdraw\w*|winning\w*|prize\w*|reward\w*|jeet\w*|kamai|earn\w*|refund\w*|deposit\w*|bonus|rupee\w*|rs\.?\s?\d+|₹)"),
 "T02": ("No reason to play now",      r"\b(boring|no point|no use|useless|bekar|bakwas|waste of time|time ?pass|no fun|maza nahi|mazaa nahi|koi fayda nahi|what is the use|why play)\b"),
 "T03": ("Leaving or uninstalling",    r"\b(uninstall\w*|delet\w* (the )?app|leaving|quit\w*|good ?bye|bye bye|switch(ed|ing)? to|moving to)\b"),
 "T04": ("Skill and team-building",    r"\b(knowledge|skills?|analy\w+|strateg\w+|pitch report|c ?/ ?vc|captain|vice ?captain|playing (11|xi)|stats?|research|predict\w*|cricket sense|gyaan|tukka|player selection|team selection|form guide)\b"),
 "T05": ("Friends and leagues",        r"\b(friends?|dost\w*|dosti|private (contest|league)s?|privet|office group|colleague\w*|family|my network|leagues? with|whatsapp group|mini ?league\w*)\b"),
 "T06": ("Watch-along and content",    r"\b(watch ?-?along\w*|creator\w*|live stream\w*|stream\w*|video\w*|commentary|highlights?|ashwin|tanmay|reaction\w*)\b"),
 "T07": ("Rank, level and status",     r"\b(leaderboard\w*|badge\w*|level\w*|streak\w*|xp|trophy|trophies|top \d+|rank (1|first|top)|1st rank|first rank|bragging)\b"),
 "T08": ("Ads complaints",             r"\b(ads|advert\w*|too many ad\w*)\b"),
 "T09": ("App quality issues",         r"\b(bug\w*|crash\w*|slow|lag\w*|hang\w*|login|otp|not working|error\w*|glitch\w*|freez\w*)\b"),
 "T10": ("Betting or rival apps",      r"\b(bet|betting|1xbet|parimatch|stake\.com|casino|probo|my11circle|my11|mpl|winzo|zupee|other app)\b"),
 "T11": ("Coins and virtual currency", r"\b(coins?|dream ?bucks|gems?|virtual|free coins?)\b"),
 "T12": ("Bring the old Dream11 back", r"\b(bring back|come back|restart|start again|wapas|old dream ?11|previous version|pehle jaisa)\b"),
}
# Refinement exclusions, applied only if a precision check fails (§6.5). Start empty.
EXCL = {k: None for k in CB}

def code(text):
    t = " " + (text or "").lower() + " "
    hits = []
    for k, (lab, rx) in CB.items():
        if re.search(rx, t, flags=re.I):
            if EXCL[k] and re.search(EXCL[k], t, flags=re.I):
                continue
            hits.append(k)
    return hits

PROFANITY = re.compile(r"\b(f+u+c+k\w*|shit\w*|bc|mc|chutiy\w*|madarchod|bhenchod|bsdk|gand\w*|harami|kutt\w*)\b", re.I)

rows = list(csv.DictReader(open("reviews_raw.csv", encoding="utf-8")))
for r in rows:
    r["period"] = period(r["date"]); r["rating"] = int(r["rating"]); r["thumbs"] = int(r["thumbs"] or 0)
    r["themes"] = code(r["text"])
rows = [r for r in rows if r["period"]]

out = {"n": {}, "avg_rating": {}, "share": {}, "monthly": {}, "quotes": {}, "segment_signals": {}}
for appn in ["Dream11", "FanCode"]:
    A = [r for r in rows if r["app"] == appn]
    out["n"][appn] = {p: sum(1 for r in A if r["period"] == p) for p, _, _ in PERIODS}
    out["n"][appn]["total"] = len(A)
    out["avg_rating"][appn] = {p: round(sum(r["rating"] for r in A if r["period"] == p) /
                                  max(1, out["n"][appn][p]), 2) for p, _, _ in PERIODS}
    out["share"][appn] = {}
    for k in CB:
        out["share"][appn][k] = {p: round(100 * sum(1 for r in A if r["period"] == p and k in r["themes"]) /
                                        max(1, out["n"][appn][p]), 1) for p, _, _ in PERIODS}
    mon = defaultdict(list)
    for r in A: mon[r["date"][:7]].append(r["rating"])
    out["monthly"][appn] = {m: {"n": len(v), "avg": round(sum(v) / len(v), 2), "pct_1star": round(100 * sum(1 for x in v if x == 1) / len(v), 1)}
                            for m, v in sorted(mon.items())}
    # Quotes: per theme and period, the top 3 by thumbs then length window, clean, 8 to 40 words
    out["quotes"][appn] = {}
    for k in CB:
        for p, _, _ in PERIODS:
            cand = [r for r in A if r["period"] == p and k in r["themes"] and not PROFANITY.search(r["text"])
                    and 8 <= len(r["text"].split()) <= 40]
            cand.sort(key=lambda r: (-r["thumbs"], len(r["text"])))
            out["quotes"][appn][f"{k}_{p}"] = [{"text": r["text"], "rating": r["rating"], "date": r["date"],
                                                "store": r["store"], "thumbs": r["thumbs"]} for r in cand[:3]]
    # Behavioural segment signals (evidence of presence, not sizing)
    def sig(pred): return {p: round(100 * sum(1 for r in A if r["period"] == p and pred(r)) / max(1, out["n"][appn][p]), 1) for p, _, _ in PERIODS}
    out["segment_signals"][appn] = {
      "S1_S2_money_leavers": sig(lambda r: ("T01" in r["themes"] or "T12" in r["themes"] or "T03" in r["themes"]) and r["rating"] <= 2),
      "S3_strategists":      sig(lambda r: "T04" in r["themes"] or "T07" in r["themes"]),
      "S4_league_players":   sig(lambda r: "T05" in r["themes"]),
      "S5_loungers":         sig(lambda r: "T06" in r["themes"]),
      "offshore_drift":      sig(lambda r: "T10" in r["themes"]),
    }

# Precision sample (for the manual check in 6.5): 50 random per key theme, seeded
random.seed(26)
sample = {}
for k in ["T01", "T04", "T05", "T06", "T07"]:
    pool = [r for r in rows if r["app"] == "Dream11" and k in r["themes"]]
    sample[k] = [{"id": r["review_id"], "text": r["text"][:300]} for r in random.sample(pool, min(50, len(pool)))]
json.dump(sample, open("precision_sample.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

with open("reviews_coded.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["store", "app", "lang", "review_id", "date", "period", "rating", "thumbs", "themes", "text"])
    for r in rows: w.writerow([r["store"], r["app"], r["lang"], r["review_id"], r["date"], r["period"], r["rating"], r["thumbs"], "|".join(r["themes"]), r["text"]])
json.dump(out, open("review_outputs.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# Markdown tables (no em dashes anywhere)
L = ["# Review mining tables (generated by code_reviews.py)", ""]
for appn in ["Dream11", "FanCode"]:
    L += [f"## {appn}: reviews by period", "", "| Period | n | Avg rating |", "|---|---|---|"]
    for p, _, _ in PERIODS: L.append(f"| {p} | {out['n'][appn][p]} | {out['avg_rating'][appn][p]} |")
    L += ["", f"## {appn}: theme share of reviews, % by period", "", "| Theme | " + " | ".join(p for p, _, _ in PERIODS) + " |", "|---|" + "---|" * len(PERIODS)]
    for k, (lab, _) in CB.items(): L.append(f"| {k} {lab} | " + " | ".join(str(out['share'][appn][k][p]) for p, _, _ in PERIODS) + " |")
    L.append("")
open("review_tables.md", "w", encoding="utf-8").write("\n".join(L))
print(json.dumps(out["n"], indent=1)); print(json.dumps(out["avg_rating"], indent=1))
