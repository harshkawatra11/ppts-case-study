"""Scrape public Play Store and App Store reviews for Dream11 and FanCode.
Reproducible: resolves app ids by rule, pulls newest-first, stops at CUTOFF, writes reviews_raw.csv.
"""
import csv, json, time, datetime as dt, re, sys
import requests
from google_play_scraper import search, reviews, Sort, app as gp_app

CUTOFF = dt.datetime(2025, 6, 1)          # keep reviews on/after this date
CAP_PER_APP_LANG = 100000                  # hard cap per app per language
TODAY = dt.datetime.now()
OUT = "reviews_raw.csv"

# Pinned Play ids (verified 29 Sep 2026); the search rule is only a fallback
PIN_PLAY = {"Dream11": "com.dream11.fantasy.cricket.football.kabaddi", "FanCode": "com.dream11sportsguru"}
# ---------- resolve Play Store ids by rule ----------
FALLBACK_PLAY = {"Dream11": ["com.dream11.fantasy.cricket.football.kabaddi"],
                 "FanCode": ["com.dream11sportsguru"]}
def resolve_play(term, must_title, must_dev):
    hits = []
    try:
        hits = search(term, lang="en", country="in", n_hits=15)
    except Exception as e:
        print("search failed", term, e)
    for h in hits:
        t = (h.get("title") or "").lower(); d = (h.get("developer") or "").lower()
        if h.get("appId") and must_title in t and must_dev in d:
            return h["appId"], h.get("title"), h.get("developer")
    for cand in FALLBACK_PLAY[term]:
        try:
            meta = gp_app(cand, lang="en", country="in")
            return cand, meta.get("title"), meta.get("developer")
        except Exception:
            continue
    return None, None, None

# ---------- resolve App Store ids by rule ----------
def resolve_ios(term, must_title, must_dev):
    r = requests.get("https://itunes.apple.com/search",
                     params={"term": term, "country": "in", "entity": "software", "limit": 15}, timeout=30)
    for x in r.json().get("results", []):
        t = x.get("trackName", "").lower(); d = (x.get("sellerName", "") + " " + x.get("artistName", "")).lower()
        if must_title in t and must_dev in d:
            return str(x["trackId"]), x.get("trackName"), x.get("sellerName")
    return None, None, None

APPS = [("Dream11", "dream11", "sporta"), ("FanCode", "fancode", "sporta")]
rows, meta_out = [], {}
for name, mt, md in APPS:
    pid, ptitle, pdev = (PIN_PLAY[name], name, 'Sporta Technologies Private Limited') if name in PIN_PLAY else resolve_play(name, mt, md)
    iid, ititle, idev = resolve_ios(name, mt, md)
    meta_out[name] = {"play_id": pid, "play_title": ptitle, "play_dev": pdev,
                      "ios_id": iid, "ios_title": ititle, "ios_dev": idev}
    # Play Store metadata (rating, installs, review count) for the slide KPI
    if pid:
        try:
            m = gp_app(pid, lang="en", country="in")
            meta_out[name].update({"play_score": m.get("score"), "play_ratings": m.get("ratings"),
                                   "play_reviews": m.get("reviews"), "play_installs": m.get("installs"),
                                   "play_updated": str(m.get("updated"))})
        except Exception as e:
            print("meta fail", name, e)
    # Play Store reviews, English + Hindi
    for lang in ["en", "hi"]:
        if not pid: break
        token, n, fails = None, 0, 0
        while n < CAP_PER_APP_LANG:
            try:
                batch, token = reviews(pid, lang=lang, country="in", sort=Sort.NEWEST,
                                       count=200, continuation_token=token)
            except Exception as e:
                fails += 1; print("play batch fail", name, lang, e)
                if fails >= 5: break
                time.sleep(5); continue
            if not batch: break
            stop = False
            for b in batch:
                at = b["at"]
                if at < CUTOFF: stop = True; break
                rows.append({"store": "play", "app": name, "lang": lang, "review_id": b["reviewId"],
                             "date": at.strftime("%Y-%m-%d"), "rating": b["score"],
                             "text": (b.get("content") or "").replace("\n", " ").strip(),
                             "thumbs": b.get("thumbsUpCount", 0), "version": b.get("reviewCreatedVersion") or ""})
                n += 1
            if stop or token is None: break
            time.sleep(0.4)
        print(name, "play", lang, n)
    # App Store reviews via RSS (max 10 pages x 50)
    if iid:
        n = 0
        for page in range(1, 11):
            url = f"https://itunes.apple.com/in/rss/customerreviews/page={page}/id={iid}/sortby=mostrecent/json"
            try:
                feed = requests.get(url, timeout=30).json().get("feed", {})
            except Exception as e:
                print("ios fail", name, page, e); break
            entries = feed.get("entry", [])
            if isinstance(entries, dict): entries = [entries]
            got = 0
            for e in entries:
                if "im:rating" not in e: continue
                date = e.get("updated", {}).get("label", "")[:10]
                try:
                    if dt.datetime.strptime(date, "%Y-%m-%d") < CUTOFF: continue
                except Exception:
                    continue
                rows.append({"store": "ios", "app": name, "lang": "en", "review_id": e["id"]["label"],
                             "date": date, "rating": int(e["im:rating"]["label"]),
                             "text": (e.get("title", {}).get("label", "") + ". " + e.get("content", {}).get("label", "")).replace("\n", " ").strip(),
                             "thumbs": 0, "version": e.get("im:version", {}).get("label", "")})
                got += 1; n += 1
            if got == 0: break
            time.sleep(0.5)
        print(name, "ios", n)

# de-duplicate on (store, review_id)
seen, uniq = set(), []
for r in rows:
    k = (r["store"], r["review_id"])
    if k in seen: continue
    seen.add(k); uniq.append(r)
with open(OUT, "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(uniq[0].keys())); w.writeheader(); w.writerows(uniq)
json.dump({"scraped_at": TODAY.isoformat(), "cutoff": CUTOFF.isoformat(), "apps": meta_out,
           "n_total": len(uniq)}, open("scrape_meta.json", "w"), indent=2, default=str)
print("TOTAL", len(uniq)); print(json.dumps(meta_out, indent=2, default=str))
