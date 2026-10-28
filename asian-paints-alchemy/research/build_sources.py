# ===== ALCHEMY SOURCES BUILDER v1 =====
"""Parse all research/raw/R-*.md files, build research/raw/sources.md (one row per unique URL, S01 upward,
with a Lane rows column listing every R-ID that cites it). Also prints a summary of row counts, status tally,
and any row missing a URL (for the Gaps review).
  python -X utf8 asian-paints-alchemy/research/build_sources.py
"""
import re, io, pathlib, json
from collections import OrderedDict

R = pathlib.Path(__file__).resolve().parent  # asian-paints-alchemy/research
RAW = R / "raw"

def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")

def parse_table_rows(text, lane):
    """Return list of dicts for every data row in every pipe table whose header starts with '| R-ID |'."""
    lines = text.split("\n")
    rows = []
    i = 0
    while i < len(lines):
        if lines[i].strip().startswith("| R-ID |"):
            # header found; next line should be the separator, then data rows
            i += 2
            while i < len(lines) and lines[i].strip().startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if len(cells) >= 8 and cells[0] and not cells[0].startswith("-"):
                    rows.append({"rid": cells[0], "fact": cells[1], "title": cells[2], "publisher": cells[3],
                                 "url": cells[4], "accessed": cells[5], "snippet": cells[6], "status": cells[7],
                                 "lane": lane})
                i += 1
        else:
            i += 1
    return rows

def norm_url(u):
    u = u.strip()
    if u.lower() in ("n/a", "na", "", "none"): return None
    u = u.rstrip(").,;")
    return u

def main():
    all_rows = []
    for lane in "ABCDEFGHIJ":
        f = RAW / ("R-%s.md" % lane)
        if not f.exists():
            print("MISSING", f); continue
        rows = parse_table_rows(rd(f), lane)
        print("lane %s: %d rows" % (lane, len(rows)))
        all_rows.extend(rows)
    print("TOTAL ROWS", len(all_rows))

    # status tally
    tally = {}
    for r in all_rows:
        k = r["status"].split("(")[0].split("[")[0].strip()
        tally[k] = tally.get(k, 0) + 1
    print("STATUS TALLY", json.dumps(tally, indent=1))

    no_url = [r for r in all_rows if not norm_url(r["url"])]
    print("ROWS WITH NO URL (n/a sources):", len(no_url))

    # build unique URL -> source record, preserving first-seen title/publisher, collecting all R-IDs
    by_url = OrderedDict()
    for r in all_rows:
        u = norm_url(r["url"])
        if not u: continue
        if u not in by_url:
            by_url[u] = {"title": r["title"], "publisher": r["publisher"], "accessed": r["accessed"], "rids": []}
        by_url[u]["rids"].append(r["lane"] + r["rid"].lstrip("A-Za-z") if False else r["rid"])

    # assign S-IDs
    out = ["# Sources: every unique URL cited across the ten research lanes", "",
           "Built by `research/build_sources.py` from `research/raw/R-A.md` to `R-J.md`. One row per unique URL.",
           "The Lane rows column lists every raw R-ID (lane letter plus row number) that cites this source.", "",
           "| S-ID | Publisher (date) Title | URL | Accessed | Lane rows |", "|---|---|---|---|---|"]
    sid_map = {}
    for i, (u, rec) in enumerate(by_url.items(), 1):
        sid = "S%02d" % i
        sid_map[u] = sid
        label = "%s %s" % (rec["publisher"], rec["title"])
        label = label.replace("|", "/").strip()
        rids = ", ".join(rec["rids"])
        out.append("| %s | %s | %s | %s | %s |" % (sid, label, u, rec["accessed"], rids))
    (RAW / "sources.md").write_text("\n".join(out) + "\n", encoding="utf-8", newline="\n")
    print("wrote sources.md with %d unique sources" % len(by_url))

    # write a lane-by-lane S-ID lookup for writers (R-ID -> S-ID) as a side file, useful for citation but not required by plan
    lookup = {}
    for r in all_rows:
        u = norm_url(r["url"])
        if u and u in sid_map:
            # Normalise the lane's own row-ID to the bare form writers actually cite (e.g. "E07", not "R-E07"):
            # strip a leading "R-" if present, then strip a leading duplicate of the lane letter if present.
            rid = r["rid"]
            if rid.upper().startswith("R-"): rid = rid[2:]
            if rid.upper().startswith(r["lane"].upper()): rid = rid[len(r["lane"]):]
            key = r["lane"] + rid
            lookup[key] = sid_map[u]
    (RAW / "rid_to_sid.json").write_text(json.dumps(lookup, indent=1, ensure_ascii=False), encoding="utf-8")
    print("wrote rid_to_sid.json with %d mappings" % len(lookup))

if __name__ == "__main__":
    main()
