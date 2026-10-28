# ===== ECON-ARENA SOURCES BUILDER v1 (from the Arthik Khayal builder) =====
"""Parse research/raw/R-B.md .. R-L.md, build research/raw/sources.md (one row per unique URL, S01 upward, with the R-IDs
citing it) and research/raw/rid_to_sid.json. Run: python -X utf8 econarena-svc/research/build_sources.py"""
import re, io, pathlib, json
from collections import OrderedDict
R = pathlib.Path(__file__).resolve().parent; RAW = R / "raw"; LANES = "BCDEFGHIJKL"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def rows_of(text, lane):
    out = []; L = text.split("\n"); i = 0
    while i < len(L):
        if L[i].strip().startswith("| R-ID |"):
            i += 2
            while i < len(L) and L[i].strip().startswith("|"):
                c = [x.strip() for x in L[i].strip().strip("|").split("|")]
                if len(c) >= 8 and c[0] and not c[0].startswith("-"):
                    out.append({"rid": c[0], "fact": c[1], "title": c[2], "publisher": c[3], "url": c[4], "accessed": c[5], "snippet": c[6], "status": c[7], "lane": lane})
                i += 1
        else: i += 1
    return out
def nurl(u):
    u = u.strip().rstrip(").,;")
    return None if u.lower() in ("n/a", "na", "", "none") else u
def main():
    rows = []
    for lane in LANES:
        f = RAW / ("R-%s.md" % lane)
        if not f.exists(): print("MISSING", f); continue
        r = rows_of(rd(f), lane); print("lane %s: %d rows" % (lane, len(r))); rows += r
    print("TOTAL ROWS", len(rows))
    tally = {}
    for r in rows: k = r["status"].split("(")[0].split("[")[0].strip(); tally[k] = tally.get(k, 0) + 1
    print("STATUS TALLY", json.dumps(tally))
    by = OrderedDict()
    for r in rows:
        u = nurl(r["url"])
        if not u: continue
        by.setdefault(u, {"title": r["title"], "publisher": r["publisher"], "accessed": r["accessed"], "rids": []})["rids"].append(r["rid"])
    out = ["# Sources: every unique URL cited across the eleven research lanes", "", "Built by `research/build_sources.py`. One row per unique URL.", "",
           "| S-ID | Publisher (date) Title | URL | Accessed | Lane rows |", "|---|---|---|---|---|"]; sid = {}
    for i, (u, rec) in enumerate(by.items(), 1):
        sid[u] = "S%02d" % i
        out.append("| %s | %s | %s | %s | %s |" % (sid[u], (rec["publisher"] + " " + rec["title"]).replace("|", "/").strip(), u, rec["accessed"], ", ".join(rec["rids"])))
    (RAW / "sources.md").write_text("\n".join(out) + "\n", encoding="utf-8", newline="\n"); print("wrote sources.md with %d unique sources" % len(by))
    look = {}
    for r in rows:
        u = nurl(r["url"])
        if u and u in sid:
            rid = r["rid"]
            if rid.upper().startswith("R-"): rid = rid[2:]
            if rid.upper().startswith(r["lane"]): rid = rid[1:]
            look[r["lane"] + rid] = sid[u]
    (RAW / "rid_to_sid.json").write_text(json.dumps(look, indent=1, ensure_ascii=False), encoding="utf-8"); print("wrote rid_to_sid.json with %d mappings" % len(look))
if __name__ == "__main__": main()
