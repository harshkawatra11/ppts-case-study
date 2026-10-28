# ===== HARVESTBOX REVIEW MINING v1 =====
"""Pull public Google Play reviews of real meal-kit apps and code them against the five exit reasons in the case.
Run from verdict-mnc/research/reviews:  python -X utf8 mine_reviews.py
Writes reviews_raw.csv, review_outputs.json, review_tables.md, precision_sample.json. HB_DRY=1 pulls 150 a app and writes nothing."""
import csv, json, re, random, os, io, datetime as dt
from collections import Counter
from google_play_scraper import reviews, Sort

DRY = os.environ.get("HB_DRY") == "1"
CAP = 150 if DRY else 4000
CUTOFF = dt.datetime(2024, 1, 1)
APPS = {"HelloFresh": ["com.hellofresh.androidapp"], "EveryPlate": ["com.everyplate.android"], "Home Chef": ["com.homechef.android"],
        "Dinnerly": ["com.dinnerly"], "Green Chef": ["com.greenchef.GreenChef"], "CookUnity": ["com.cookunity.android.app"]}
KIND = {"CookUnity": "ready-to-eat"}
CB = {
 "W1": ("Rigid plan, hard to skip or cancel", r"\b(skip\w*|paus\w*|cancel\w*|unsubscrib\w*|auto.?renew\w*|charged (me )?(again|twice|without)|commit\w*|locked in|cut.?off|deadline|forgot to)\b"),
 "W2": ("Too expensive", r"\b(expensive|pric\w+|overpriced|too much money|not worth|afford\w*|cheaper|costly|cost too|rip.?off)\b"),
 "W3": ("Menu repetitive or narrow", r"\b(repetit\w*|same (meals?|recipes?|menu|dishes)|boring|variety|limited (menu|options|choice\w*|selection)|more (options|choices|recipes))\b"),
 "W4": ("Food waste or portion issues", r"\b(portion\w*|too (small|little)|not enough food|wast\w*|spoil\w*|rotten|wilted|went bad|mold\w*|packaging|plastic)\b"),
 "W5": ("Delivery problems", r"\b(deliver\w*|late|never (arrived|came|received)|missing (box|item\w*|ingredient\w*)|damaged|courier|shipping|did ?n.?t arrive)\b"),
 "X1": ("App or billing fault", r"\b(bug\w*|crash\w*|log ?in|glitch\w*|freez\w*|not working|error\w*|refund\w*|double charged)\b"),
 "X2": ("Wants ready-made or less cooking", r"\b(ready.?made|ready to eat|pre.?made|pre.?cooked|heat and eat|too much (work|prep|time)|takes too long|prep time|no time to cook)\b"),
}
rows = []; meta = {}
for name, ids in APPS.items():
    got = []; used = None
    for pid in ids:
        try:
            tok = None
            while len(got) < CAP:
                res, tok = reviews(pid, lang="en", country="us", sort=Sort.NEWEST, count=min(200, CAP - len(got)), continuation_token=tok)
                if not res: break
                got += res
                if res[-1]["at"] < CUTOFF or tok is None: break
            used = pid
            if got: break
        except Exception as e:
            print("skip", name, pid, str(e)[:80])
    got = [g for g in got if g["at"] >= CUTOFF and (g.get("content") or "").strip()]
    meta[name] = dict(play_id=used, n=len(got), first=str(min((g["at"] for g in got), default="")), last=str(max((g["at"] for g in got), default="")))
    for g in got:
        rows.append(dict(app=name, kind=KIND.get(name, "meal kit"), date=g["at"].strftime("%Y-%m-%d"), rating=int(g["score"]), thumbs=int(g.get("thumbsUpCount") or 0), text=g["content"].replace("\n", " ").strip()))
for r in rows:
    t = " " + r["text"].lower() + " "
    r["themes"] = [k for k, (lab, rx) in CB.items() if re.search(rx, t, flags=re.I)]
low = [r for r in rows if r["rating"] <= 2]; high = [r for r in rows if r["rating"] >= 4]
def share(sub, k): return round(100.0 * sum(1 for r in sub if k in r["themes"]) / max(1, len(sub)), 1)
W = ["W1", "W2", "W3", "W4", "W5"]
mentions = Counter(k for r in low for k in r["themes"] if k in W); tot = sum(mentions.values()) or 1
CASE = {"W1": 34, "W2": 27, "W3": 18, "W4": 11, "W5": 10}
OUT = dict(pulled=str(dt.date.today()), cutoff=str(CUTOFF.date()), n=len(rows), n_low=len(low), n_high=len(high), meta=meta,
           by_app={a: dict(n=sum(1 for r in rows if r["app"] == a), avg=round(sum(r["rating"] for r in rows if r["app"] == a) / max(1, sum(1 for r in rows if r["app"] == a)), 2),
                           low_share=round(100.0 * sum(1 for r in rows if r["app"] == a and r["rating"] <= 2) / max(1, sum(1 for r in rows if r["app"] == a)), 1),
                           **{k: share([r for r in low if r["app"] == a], k) for k in CB}) for a in APPS},
           low={k: share(low, k) for k in CB}, high={k: share(high, k) for k in CB},
           mix={k: round(100.0 * mentions[k] / tot, 1) for k in W}, case=CASE)
random.seed(7)
SAMPLE = {k: [dict(app=r["app"], rating=r["rating"], text=r["text"][:260]) for r in random.sample([x for x in low if k in x["themes"]], min(20, len([x for x in low if k in x["themes"]])))] for k in CB}
def tb(title, head, body): return "\n### " + title + "\n\n| " + " | ".join(head) + " |\n|" + "---|" * len(head) + "\n" + "\n".join("| " + " | ".join(str(c) for c in r) + " |" for r in body) + "\n"
MD = "# Review mining tables (pulled " + OUT["pulled"] + ", reviews since " + OUT["cutoff"] + ")\n"
MD += tb("V1 Sample by app", ["App", "Type", "Play id", "Reviews", "Average rating", "1 and 2 star share %"], [[a, KIND.get(a, "meal kit"), meta[a]["play_id"], OUT["by_app"][a]["n"], OUT["by_app"][a]["avg"], OUT["by_app"][a]["low_share"]] for a in APPS])
MD += tb("V2 Share of 1 and 2 star reviews that mention each theme, %", ["Theme", "All apps"] + list(APPS), [[k + " " + CB[k][0], OUT["low"][k]] + [OUT["by_app"][a][k] for a in APPS] for k in CB])
MD += tb("V3 Mix of the five case reasons among low-star mentions, against the case", ["Reason", "Review mix %", "Case exit share %", "Gap, points"], [[k + " " + CB[k][0], OUT["mix"][k], CASE[k], round(OUT["mix"][k] - CASE[k], 1)] for k in W])
MD += tb("V4 The same themes in 4 and 5 star reviews, %", ["Theme", "Share of 4 and 5 star reviews"], [[k + " " + CB[k][0], OUT["high"][k]] for k in CB])
MD += tb("V5 Codebook", ["ID", "Theme", "Regular expression"], [[k, v[0], "`" + v[1].replace("|", " or ") + "`"] for k, v in CB.items()])
print(json.dumps(dict(n=OUT["n"], n_low=OUT["n_low"], mix=OUT["mix"], low=OUT["low"], apps={a: meta[a]["n"] for a in APPS}), indent=1))
if not DRY:
    with io.open("reviews_raw.csv", "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["app", "kind", "date", "rating", "thumbs", "text", "themes"]); w.writeheader()
        for r in rows: w.writerow(dict(r, themes=" ".join(r["themes"])))
    io.open("review_outputs.json", "w", encoding="utf-8").write(json.dumps(OUT, indent=1))
    io.open("review_tables.md", "w", encoding="utf-8", newline="\n").write(MD)
    io.open("precision_sample.json", "w", encoding="utf-8").write(json.dumps(SAMPLE, indent=1, ensure_ascii=False))
    print("wrote reviews_raw.csv review_outputs.json review_tables.md precision_sample.json")
