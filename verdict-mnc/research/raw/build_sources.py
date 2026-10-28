"""Build sources.md from the six verified raw research files (step R2).
Run from verdict-mnc/research/raw:  python -X utf8 build_sources.py
"""
import io, re, pathlib

HERE = pathlib.Path(__file__).resolve().parent
LANES = ["R-A.md", "R-B.md", "R-C.md", "R-D.md", "R-E.md", "R-F.md"]

def rows(fname):
    t = io.open(HERE / fname, encoding="utf-8").read().replace("\r", "")
    out = []
    for ln in t.splitlines():
        if not ln.startswith("| R"):
            continue
        cells = [c.strip() for c in ln.strip().strip("|").split(" | ")]
        if len(cells) < 8 or cells[0] in ("R-ID", "---"):
            continue
        rid, fact, title, pub, url, date, snip, status = cells[:8]
        if not re.match(r"^R[A-F]\d+$", rid):
            continue
        out.append(dict(rid=rid, fact=fact, title=title, pub=pub, url=url, date=date, status=status))
    return out

# S01 is the case file itself.
reg = {}            # url -> {s, title, pub, rids}
order = []
sid = 2

for fname in LANES:
    for r in rows(fname):
        if not (r["status"].startswith("VERIFIED") or r["status"].startswith("CORRECTED")):
            continue
        key = r["url"]
        if key not in reg:
            reg[key] = dict(s="S%02d" % sid, title=r["title"], pub=r["pub"], rids=[])
            order.append(key)
            sid += 1
        reg[key]["rids"].append(r["rid"])

lines = ["| ID | Source | URL | Lane rows |", "|---|---|---|---|",
         "| S01 | The Skill Development Cell, Motilal Nehru College, University of Delhi (2026) Verdict 2.0 case problem: HarvestBox, Growing Without Burning Out | local: verdict-mnc/6ac3e4aa93eb5_the_verdict_case_problem.pdf | (the case itself) |"]
for key in order:
    e = reg[key]
    src = "%s (2026) '%s'" % (e["pub"], e["title"])
    lines.append("| %s | %s | %s | %s |" % (e["s"], src, key, ", ".join(e["rids"])))

io.open(HERE / "sources.md", "w", encoding="utf-8", newline="\n").write("\n".join(lines) + "\n")
print("wrote sources.md:", len(order), "sources (S02 to S%02d), S01 reserved for the case file" % (sid - 1))
