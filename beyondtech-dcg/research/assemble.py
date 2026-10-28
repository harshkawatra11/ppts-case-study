# ===== BEYONDTECH ASSEMBLE v1 =====
"""Assemble beyondtech-gtm-research.md from the six writer parts and generated appendices, then run
the acceptance checks. Adapted from verdict-mnc/research/assemble.py per PLAN.md section 9.3.
  python -X utf8 beyondtech-dcg/research/assemble.py md     assemble and check
  python -X utf8 beyondtech-dcg/research/assemble.py pdf    build build_pdf.py and render the PDF"""
import re, sys, json, io, csv, pathlib, subprocess

R = pathlib.Path(__file__).resolve().parent
BT = R.parent

HEADER = """# BeyondTech: From a DTU Habit to a Tier-1 System

**A go-to-market plan to deepen BeyondTech's penetration at DTU and launch at four new Tier-1 campuses: BITS Pilani, NIT Tiruchirappalli, PEC Chandigarh and COEP Technological University, Pune**

Team: Harsh Kawatra and Anuj, Delhi Technological University, Team IdeaForge

Prepared for: BeyondTech x DTU Consulting Group Case Competition 2026

---

"""

BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just",
       "make no mistake", "landscape", "robust", "seamless", "holistic", "tapestry", "paradigm",
       "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower",
       "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen",
       "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore", "moreover",
       "in today's", "ever-evolving", "imagine if", "testament", "realm", "fast-paced"]
MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 45000, 110, 26


def rd(p):
    return io.open(p, encoding="utf-8").read().replace("\r", "")


def demote(t):
    t = re.sub(r"^# .*\n", "", t, count=1)
    return t.strip()


def csv_to_compact_blocks(path, title_col, skip_cols=()):
    """Render a CSV as one H4 block per row (key: value lines), more readable than a giant wide
    table for data with long free-text fields. Returns markdown."""
    out = []
    with io.open(path, encoding="utf-8-sig", newline="") as f:
        rdr = csv.DictReader(f)
        for row in rdr:
            title = row.get(title_col, "?")
            out.append("#### " + title)
            for k, v in row.items():
                if k == title_col or k in skip_cols:
                    continue
                v = (v or "").strip()
                if not v:
                    continue
                out.append("- **%s:** %s" % (k, v))
            out.append("")
    return "\n".join(out)


def csv_to_table(path, cols):
    """Render selected CSV columns as a compact markdown table."""
    rows = []
    with io.open(path, encoding="utf-8-sig", newline="") as f:
        rdr = csv.DictReader(f)
        for row in rdr:
            rows.append([((row.get(c) or "").strip().replace("\n", " ")[:120]) for c in cols])
    out = ["| " + " | ".join(cols) + " |", "|" + "|".join(["---"] * len(cols)) + "|"]
    for r in rows:
        out.append("| " + " | ".join(c.replace("|", "/") or "NOT FOUND" for c in r) + " |")
    return "\n".join(out)


def md():
    parts = [rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEF"]
    body = "\n\n".join(parts)

    # ---- Appendix A: Bibliography ----
    # Writers cite the lane's own R-ID (e.g. [RA12], [RB07]) as the primary provenance tag, not a
    # bare [S###]; each R-ID resolves, inside its lane file's own Facts table, to one Source ID. A
    # bibliography built from direct [S###] citations alone is therefore near-empty (touchpoint C
    # critique, issue 1). This builds the real bibliography: every cited R-ID is resolved through its
    # lane file to its Source ID(s), unioned with any directly-cited [S###] tags, then rendered
    # against the master register. The 8 R-E-*.md dossiers each restart their own R-ID numbering
    # (RE01, RE02, ...), so an RE citation in the body cannot be mapped to a single dossier file
    # without the disambiguating college name writers used in-text; resolving it against the union of
    # all 8 dossiers' Source IDs for that number is a deliberate over-inclusion, not an error, since a
    # bibliography that lists one extra source is far safer than one that silently drops a real one.
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d{3}) \|(.+?)\|(.+?)\|(.+?)\|(.+?)\|$", ln)
        if m:
            reg[m.group(1)] = (m.group(2).strip(), m.group(3).strip())

    lane_files = sorted((R / "raw").glob("R-*.md"))
    rid_to_sids = {}
    for lf in lane_files:
        prefix = re.match(r"R-([A-Z])", lf.name).group(1)
        for ln in rd(lf).splitlines():
            m = re.match(r"^\|\s*([A-Z]{1,2}\d{2,3})\s*\|.*?\|\s*([^|]+?)\s*\|", ln)
            if not m:
                continue
            rid, sid_field = m.group(1), m.group(2)
            sids = re.findall(r"S\d{3}", sid_field)
            if not sids:
                continue
            rid_to_sids.setdefault(rid, set()).update(sids)

    direct_s = {"S" + n for grp in re.findall(r"\[([^\]]*S\d{3}[^\]]*)\]", body)
                for n in re.findall(r"S(\d{3})", grp)}
    cited_rids = sorted(set(re.findall(r"\b([A-Z]{1,2}\d{2,3})\b", body)) & set(rid_to_sids))
    resolved_s = set(direct_s)
    for rid in cited_rids:
        resolved_s |= rid_to_sids[rid]
    cited = sorted(resolved_s, key=lambda s: int(s[1:]))

    missing = [c for c in cited if c not in reg]
    app_a_rows = ["| S-ID | Source | Available at | Cited via |", "|---|---|---|---|"]
    rid_by_sid = {}
    for rid, sids in rid_to_sids.items():
        if rid in cited_rids:
            for sid in sids:
                rid_by_sid.setdefault(sid, []).append(rid)
    for s in cited:
        if s in reg:
            via = ", ".join(sorted(rid_by_sid.get(s, []))[:4]) or "direct citation"
            if len(rid_by_sid.get(s, [])) > 4:
                via += ", +%d more" % (len(rid_by_sid[s]) - 4)
            app_a_rows.append("| %s | %s | %s | %s |" % (s, reg[s][0], reg[s][1], via))
    app_a = ("This bibliography resolves every source actually cited in the document: both the rare "
              "direct `[S###]` tags and, far more commonly, every lane-file R-ID tag (`[RA12]`, "
              "`[RB07]`, etc.), traced through that lane's own Facts table to the Source ID it rests "
              "on. The 'Cited via' column shows which R-ID tags resolve to each source (capped at 4, "
              "with a count of any more). %d of %d resolved sources are listed below; see "
              "`research/raw/sources.md` for the full 421-source register, including sources gathered "
              "but not ultimately cited in the final text.\n\n" % (len([s for s in cited if s in reg]), len(cited))
             + "\n".join(app_a_rows))

    # ---- Appendix B: Model tables ----
    app_b = demote(rd(BT / "model" / "model_tables.md"))

    # ---- Appendix C: College dataset (the full scorecard CSV, compact blocks) ----
    app_c = ("The full 32-row college scorecard dataset. Each college lists its raw C1 to C7 values, "
             "sources and notes exactly as gathered by the regional scorers and refined by the Gate G2 "
             "targeted-rescue pass. Scored (1 to 5) values and Fit scores are in Appendix B, table T8.\n\n"
             + csv_to_compact_blocks(R / "data" / "college_scorecard.csv", "college"))

    # ---- Appendix D: Society and competitor datasets ----
    app_d = ("### D.1 DTU societies (`societies.csv`, 16 of a 30-row target, flagged honestly in "
              "doc section 10)\n\n"
              + csv_to_table(R / "data" / "societies.csv",
                              ["society", "type", "what_it_does", "flagship_events",
                               "instagram_followers", "linkedin_followers", "confidence"])
              + "\n\n### D.2 Competitors and substitutes (`competitors.csv`, 29 rows)\n\n"
              + csv_to_table(R / "data" / "competitors.csv",
                              ["name", "type", "offer", "duration_weeks", "price_inr",
                               "guarantee_claim", "ambassador_programme"]))

    # ---- Appendix E: Glossary (written by hand by W-F) ----
    app_e = re.sub(r"^## Appendix E\.? Glossary\s*\n", "", rd(R / "parts" / "appendix-E-glossary.md").strip(), count=1)

    # ---- Appendix F: Data conflicts and rulings ----
    app_f = rd(R / "raw" / "conflicts.md").strip()

    # ---- Table of contents ----
    toc_entries = re.findall(r"^## (.+)$", body, re.M) + [
        "Appendix A: Bibliography", "Appendix B: Model tables", "Appendix C: College dataset",
        "Appendix D: Society and competitor datasets", "Appendix E: Glossary",
        "Appendix F: Data conflicts and rulings",
    ]
    toc = "## Contents\n\n" + "\n".join("- %s" % t for t in toc_entries) + "\n\n"
    body = body.replace("## 0. Document control", toc + "## 0. Document control", 1)

    doc = (
        HEADER + body
        + "\n\n## Appendix A: Bibliography\n\nSources were opened and checked on 10 October 2026. "
          "Only sources cited in the text are listed; the full 421-source register (including sources "
          "gathered but not ultimately cited) is `research/raw/sources.md`.\n\n" + app_a
        + "\n\n## Appendix B: Model tables\n\n" + app_b
        + "\n\n## Appendix C: College dataset\n\n" + app_c
        + "\n\n## Appendix D: Society and competitor datasets\n\n" + app_d
        + "\n\n## Appendix E: Glossary\n\n" + app_e
        + "\n\n## Appendix F: Data conflicts and rulings\n\n" + app_f + "\n"
    )
    io.open(R / "beyondtech-gtm-research.md", "w", encoding="utf-8", newline="\n").write(doc)

    text = doc.split("\n---\n", 1)[1]
    # Voice checks scan only the team's own authored prose: the six writer parts plus the
    # hand-written glossary. Appendix A quotes real external source titles verbatim (never rewritten
    # to dodge house style). Appendices B, C, D are code-generated from the model and the CSVs,
    # already clean by construction. Appendix F (conflicts.md) is the lead's own prose and is checked
    # too, since the lead follows the same style rules as the writers.
    prose = body + "\n" + app_e + "\n" + app_f
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M)
    res = dict(
        words=len(doc.split()),
        tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)),
        dashes=len(re.findall("[—–]", prose)),
        exclamations=prose.count("!"),
        question_headings=[h for h in heads if h.strip().endswith("?")],
        banned={b: len(re.findall(r"\b" + re.escape(b), prose, re.I)) for b in BAN
                if re.search(r"\b" + re.escape(b), prose, re.I)},
        answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)),
        cited_S=len(cited), missing_S=missing,
        dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
    )
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0
          and res["exclamations"] == 0 and not res["question_headings"] and not res["banned"]
          and res["answers"] >= MIN_ANSWERS and not res["missing_S"] and not res["dup_headings"])
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL")
    sys.exit(0 if ok else 1)


def pdf():
    src = rd(BT.parent / "iim-lucknow-pivot" / "research" / "build_pdf.py")

    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:60], src.count(a))
        src = src.replace(a, b)

    rep("dream11-pivot-research", "beyondtech-gtm-research", 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge",
        "BeyondTech: From a DTU Habit to a Tier-1 System  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}",
        "else 'BeyondTech: From a DTU Habit to a Tier-1 System'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable",
        "BeyondTech x DTU Consulting Group Case Competition 2026  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;",
        "--p:#1F4BD8; --pd:#0B1F66; --a:#F5C518; --tint:#C7D7FE;", 1)
    rep("color: #C4161C; }", "color: #1F4BD8; }", 1)
    rep('<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, '
        'Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi',
        '<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Anuj, '
        'Delhi Technological University', 1)
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")],
                        capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:])
    p = R / "beyondtech-gtm-research.pdf"
    print("PDF", p.exists() and p.stat().st_size)


if __name__ == "__main__":
    {"md": md, "pdf": pdf}[sys.argv[1]]()
