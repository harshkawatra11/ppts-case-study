import re, io, pathlib
RAW = pathlib.Path("raw")
rows = []
for f in sorted(RAW.glob("R-*.md")):
    lane = f.stem
    text = io.open(f, encoding="utf-8").read()
    for line in text.split("\n"):
        if not line.startswith("|") or line.strip().startswith("|---"): continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) < 8: continue
        rid, fact, title, pub, url, acc, snip, status = cells[:8]
        if rid in ("R-ID",): continue
        if not re.match(r"^R-", rid): continue
        if status.startswith("VERIFIED") or status.startswith("CORRECTED"):
            rows.append(dict(rid=rid, title=title, pub=pub, url=url, status=status, lane=lane))
# dedupe by URL, keep first occurrence, collect all rids using that URL
by_url = {}
order = []
for r in rows:
    key = r["url"]
    if key not in by_url:
        by_url[key] = dict(r); by_url[key]["rids"] = [r["rid"]]
        order.append(key)
    else:
        by_url[key]["rids"].append(r["rid"])
lines = ["# Source register: Project Setu\n", "Built from the VERIFIED and CORRECTED rows of `raw/R-*.md`. Access date for every row: 2026-10-05.\n",
         "| ID | Source | URL | Lane row |", "|---|---|---|---|"]
sid_map = {}
for i, key in enumerate(order, 1):
    sid = "S%02d" % i
    r = by_url[key]
    # Harvard-like: Publisher (year) 'Title'
    yearm = re.search(r"\b(20\d\d)\b", r["title"] + " " + r["pub"])
    year = yearm.group(1) if yearm else "2026"
    pub = r["pub"].split("[")[0].strip()
    source_text = "%s (%s) '%s'" % (pub, year, r["title"])
    lines.append("| %s | %s | %s | %s |" % (sid, source_text, r["url"], ", ".join(r["rids"])))
    for rid in r["rids"]: sid_map[rid] = sid
io.open("raw/sources.md", "w", encoding="utf-8", newline="\n").write("\n".join(lines) + "\n")
io.open("raw/sid_map.txt", "w", encoding="utf-8", newline="\n").write("\n".join("%s=%s" % (k,v) for k,v in sorted(sid_map.items())) + "\n")
print("sources", len(order), "rows mapped", len(sid_map))
