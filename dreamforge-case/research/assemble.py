# ===== SWIFTKART ASSEMBLE v1 =====
"""Assemble swiftkart-research.md from the seven writer parts and the generated appendices, run the acceptance
checks, then render HTML and PDF with the IIM Lucknow template.
  PY dreamforge-case/research/assemble.py md     assemble and check (prints ASSEMBLY PASS or FAIL)
  PY dreamforge-case/research/assemble.py pdf    write build_pdf.py from the template and render the PDF"""
import re, sys, json, io, csv, pathlib, subprocess

R = pathlib.Path(__file__).resolve().parent
BT = R.parent
ROOT = BT.parent

HEADER = """# SwiftKart: The ₹1 Crore Crossroads

**How SwiftKart should deploy ₹1 crore over 24 months: lease every bike, electrify the fleet first, win the 75-vehicle contract on a working EV operation, and keep the crore for what a lease cannot buy**

Team: Harsh Kawatra (Delhi Technological University, Team Leader) and Dayita Arora (Ramjas College, University of Delhi), Team IdeaForge

Prepared for: Dream Forge 3.0, Round 2 (IEEE DTU): The ₹1 Crore Crossroads, SwiftKart's Next Move

---

"""

BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "game changer", "unlock", "it's not just",
       "make no mistake", "landscape", "robust", "seamless", "holistic", "tapestry", "paradigm", "navigate the",
       "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative", "journey", "synergy",
       "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal",
       "furthermore", "moreover", "in today's", "ever-evolving", "imagine", "what if", "picture this", "dive into",
       "testament", "realm", "fast-paced", "groundbreaking", "state-of-the-art", "plethora", "myriad", "underscore",
       "showcase", "foster", "bolster", "spearhead", "nuanced", "intricate", "meticulous", "elevate", "in conclusion",
       "it is important to note", "ecosystem"]
PRIMARY = re.compile(r"gov\.in|nic\.in|ppac|iocl|indianoil|cea\.nic|heavyindustries|pib\.gov|delhi\.gov|transport\.delhi|ev\.delhi|"
                     r"sebi\.gov|mca\.gov|rbi\.org|nseindia|bseindia|ipcc|ghgprotocol|iso\.org|smartfreightcentre|niti\.gov|morth|"
                     r"parivahan|vahan|siam|derc|bis\.gov|araiindia|caqm|labour\.gov|mospi|india-ghg|wri\.org|theicct|iea\.org", re.I)
MIN_WORDS, MIN_TABLES, MIN_ANSWERS, MIN_PRIMARY = 80000, 180, 29, 0.40


def rd(p):
    return io.open(p, encoding="utf-8").read().replace("\r", "")


def demote(t):
    return re.sub(r"^# .*\n", "", t, count=1).strip()


def csv_to_table(path, cols=None):
    with io.open(path, encoding="utf-8-sig", newline="") as f:
        rows = list(csv.DictReader(f))
    if not rows:
        return "_No rows._"
    cols = cols or list(rows[0].keys())
    out = ["| " + " | ".join(cols) + " |", "|" + "|".join(["---"] * len(cols)) + "|"]
    for r in rows:
        out.append("| " + " | ".join(((r.get(c) or "").strip().replace("\n", " ").replace("|", "/")[:140] or "not found") for c in cols) + " |")
    return "\n".join(out)


def md():
    parts = [rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEFGH"]
    body = "\n\n".join(parts)
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d{3}) \|(.+?)\|(.+?)\|(.+?)\|(.+?)\|$", ln)
        if m:
            reg[m.group(1)] = (m.group(2).strip(), m.group(3).strip())
    rid_to_sids = {}
    for lf in sorted((R / "raw").glob("R-*.md")):
        for ln in rd(lf).splitlines():
            m = re.match(r"^\|\s*(R[A-I]\d{2,3})\s*\|.*?\|\s*([^|]+?)\s*\|", ln)
            if m:
                sids = re.findall(r"S\d{3}", m.group(2))
                if sids:
                    rid_to_sids.setdefault(m.group(1), set()).update(sids)
    direct_s = {"S" + n for grp in re.findall(r"\[([^\]]*S\d{3}[^\]]*)\]", body) for n in re.findall(r"S(\d{3})", grp)}
    cited_rids = sorted(set(re.findall(r"\b(R[A-I]\d{2,3})\b", body)) & set(rid_to_sids))
    resolved = set(direct_s)
    for rid in cited_rids:
        resolved |= rid_to_sids[rid]
    cited = sorted(resolved, key=lambda s: int(s[1:]))
    missing = [c for c in cited if c not in reg]
    via = {}
    for rid in cited_rids:
        for sid in rid_to_sids[rid]:
            via.setdefault(sid, []).append(rid)
    rows = ["| S-ID | Source | Available at | Cited via |", "|---|---|---|---|"]
    for s in cited:
        if s in reg:
            v = ", ".join(sorted(via.get(s, []))[:4]) or "direct citation"
            if len(via.get(s, [])) > 4:
                v += ", +%d more" % (len(via[s]) - 4)
            rows.append("| %s | %s | %s | %s |" % (s, reg[s][0], reg[s][1], v))
    primary = [s for s in cited if s in reg and PRIMARY.search(reg[s][1] + " " + reg[s][0])]
    app_a = ("Every source cited in the text, resolved from direct `[S###]` tags and from raw-fact tags (`[RA12]` and so on) "
             "through each lane file. %d sources are listed here; the full register of %d sources is `research/raw/sources.md`.\n\n"
             % (len(rows) - 2, len(reg)) + "\n".join(rows))
    app_b = demote(rd(BT / "model" / "model_tables.md"))
    app_c = "\n\n".join("### C.%d `%s`\n\n" % (i + 1, p.name) + csv_to_table(p) for i, p in enumerate(sorted((R / "data").glob("*.csv"))))
    brief = rd(BT / "case" / "01-case-brief.md")
    brief = re.sub(r"^# .*\n", "", brief, count=1).replace(" " + chr(0x2013) + " ", ", ").replace(chr(0x2013), ", ").replace(chr(0x2014), "n/a")
    app_d = ("The case brief as issued, with the sentence IDs used throughout this document. Dashes in the original are shown "
             "as commas, and blank cells as n/a.\n\n" + brief.strip())
    app_e = re.sub(r"^## Appendix E\.? Glossary\s*\n", "", rd(R / "parts" / "appendix-E-glossary.md").strip(), count=1)
    app_f = rd(R / "raw" / "conflicts.md").strip()
    app_f = re.sub(r"^# .*\n", "", app_f, count=1)
    titles = ["Appendix A: Bibliography", "Appendix B: Model tables", "Appendix C: Research datasets",
              "Appendix D: The case brief with sentence IDs", "Appendix E: Glossary", "Appendix F: Data conflicts and rulings"]
    toc = "## Contents\n\n" + "\n".join("- %s" % t for t in re.findall(r"^## (.+)$", body, re.M) + titles) + "\n\n"
    body = body.replace("## 0. Document control", toc + "## 0. Document control", 1)
    doc = (HEADER + body
           + "\n\n## " + titles[0] + "\n\n" + app_a + "\n\n## " + titles[1] + "\n\n" + app_b
           + "\n\n## " + titles[2] + "\n\n" + app_c + "\n\n## " + titles[3] + "\n\n" + app_d
           + "\n\n## " + titles[4] + "\n\n" + app_e + "\n\n## " + titles[5] + "\n\n" + app_f + "\n")
    io.open(R / "swiftkart-research.md", "w", encoding="utf-8", newline="\n").write(doc)
    prose = body + "\n" + app_e + "\n" + app_f
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M)
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)),
               dashes=len(re.findall("[" + chr(0x2014) + chr(0x2013) + "]", doc)), exclamations=prose.count("!"),
               question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(r"\b" + re.escape(b), prose, re.I)) for b in BAN if re.search(r"\b" + re.escape(b), prose, re.I)},
               answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), register=len(reg), missing_S=missing,
               primary_share=round(len(primary) / max(1, len(cited)), 3),
               placeholders=len(re.findall(r"<[a-z][^>]{0,20}>", body)), dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
               rs_text=len(re.findall(r"\bRs\.? ?\d", body)))
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0
          and not res["question_headings"] and not res["banned"] and res["answers"] >= MIN_ANSWERS and not res["missing_S"]
          and not res["dup_headings"] and res["placeholders"] == 0 and res["primary_share"] >= MIN_PRIMARY and res["rs_text"] == 0)
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL")
    sys.exit(0 if ok else 1)


def pdf():
    src = rd(ROOT / "iim-lucknow-pivot" / "research" / "build_pdf.py")

    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:60], src.count(a))
        src = src.replace(a, b)

    rep("dream11-pivot-research", "swiftkart-research", 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge", "SwiftKart: The ₹1 Crore Crossroads  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}", "else 'SwiftKart: The ₹1 Crore Crossroads'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "IEEE DTU  |  Dream Forge 3.0  |  Round 2 research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#0F766E; --pd:#0B3B3A; --a:#F5C518; --tint:#CCFBF1;", 1)
    rep("color: #C4161C; }", "color: #0F766E; }", 1)
    rep('<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi',
        '<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University (Team Leader)<br>Dayita Arora, Ramjas College, University of Delhi', 1)
    old_tag = [l for l in src.split("\n") if l.startswith("TAG = re.compile(")]
    assert len(old_tag) == 1, old_tag
    src = src.replace(old_tag[0], 'TAG = re.compile(r"\\[((?:C [A-Z]\\d{2}(?:, ?C [A-Z]\\d{2})*)|M|T\\d+(?:, ?T\\d+)*|A\\d{2}(?:, ?A\\d{2})*|R[A-I]\\d{2,3}(?:, ?R[A-I]\\d{2,3})*|S\\d{3}(?:, ?S\\d{3})*)\\]")')
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:])
    p = R / "swiftkart-research.pdf"
    print("PDF", p.exists() and p.stat().st_size)


if __name__ == "__main__":
    {"md": md, "pdf": pdf}[sys.argv[1]]()
