# ===== HARVESTBOX ASSEMBLE v1 =====
"""Assemble harvestbox-research.md from the writer parts and generated appendices, then run the acceptance checks.
  python -X utf8 verdict-mnc/research/assemble.py md     assemble and check
  python -X utf8 verdict-mnc/research/assemble.py pdf    build build_pdf.py from the Dream11 renderer and render the PDF"""
import re, sys, json, io, pathlib, subprocess
R = pathlib.Path(__file__).resolve().parent; VM = R.parent; ROOT = VM.parent
HEADER = """# HarvestBox: Growing Without Burning Out

**A 24-month path to profit on ₹15 Cr: fund Proposal A, rebuilt, then ready-to-eat behind a cash gate**

Team: Harsh Kawatra (Delhi Technological University, Team Leader) · Gursimran Kaur (Guru Gobind Singh Indraprastha University) · Dayita Arora (Ramjas College, University of Delhi)

Prepared for: Verdict 2.0, The Skill Development Cell, Motilal Nehru College, University of Delhi, October 2026

---

"""
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "make no mistake", "landscape", "robust", "seamless",
       "holistic", "tapestry", "paradigm", "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative",
       "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore",
       "moreover", "in today's", "ever-evolving", "imagine if", "testament", "realm", "fast-paced"]
MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 50000, 110, 24
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def demote(t): t = re.sub(r"^# .*\n", "", t, count=1); return t.strip()

def md():
    parts = [rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEFG"]
    body = "\n\n".join(parts)
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \| (.*?) \|$", ln)
        if m: reg[m.group(1)] = (m.group(2), m.group(3))
    cited = sorted({"S" + n for grp in re.findall(r"\[([^\]]*S\d+[^\]]*)\]", body) for n in re.findall(r"S(\d+)", grp)}, key=lambda s: int(s[1:]))
    missing = [c for c in cited if c not in reg]
    app_a = "| ID | Source | Available at |\n|---|---|---|\n" + "\n".join("| %s | %s | %s |" % (s, reg[s][0], reg[s][1]) for s in cited if s in reg)
    app_b = demote(rd(VM / "model" / "model_tables.md")); app_c = demote(rd(R / "reviews" / "review_tables.md"))
    # Standalone table of contents (fix for critique.md issue 3): every ## heading in the writer parts, numbered,
    # plus the six fixed appendix titles. The PDF (build_pdf.py) already auto-builds its own contents page from the
    # same ## headings; this gives the .md source the same navigation aid rather than relying on the PDF alone.
    toc_entries = re.findall(r"^## (.+)$", body, re.M) + ["Appendix A: Bibliography", "Appendix B: Model tables",
        "Appendix C: Review-mining tables and codebook", "Appendix D: Glossary and abbreviations",
        "Appendix E: Validation plan, not yet run", "Appendix F: Data conflicts and method limits"]
    toc = "## Contents\n\n" + "\n".join("- %s" % t for t in toc_entries) + "\n\n"
    body = body.replace("## 1. Coverage matrix", toc + "## 1. Coverage matrix", 1)
    doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\nSources were opened and checked in October 2026. Only sources cited in the text are listed.\n\n" + app_a +
           "\n\n## Appendix B: Model tables\n\n" + app_b + "\n\n## Appendix C: Review-mining tables and codebook\n\n" + app_c + "\n\n" +
           rd(R / "parts" / "appendix-D.md").strip() + "\n\n" + rd(R / "parts" / "appendix-E.md").strip() + "\n\n" + rd(R / "parts" / "appendix-F.md").strip() + "\n")
    io.open(R / "harvestbox-research.md", "w", encoding="utf-8", newline="\n").write(doc)
    text = doc.split("\n---\n", 1)[1]
    # Voice checks (dashes, exclamations, banned words) scan only the team's own authored prose: the seven writer
    # parts plus appendices D, E, F. Appendix A quotes real external article titles verbatim (a source's own title
    # is never rewritten to dodge a house-style rule), and Appendices B and C are code-generated from the model and
    # the review miner, already clean by construction. Word and table minimums still count the whole document.
    prose = body + "\n" + rd(R / "parts" / "appendix-D.md") + "\n" + rd(R / "parts" / "appendix-E.md") + "\n" + rd(R / "parts" / "appendix-F.md")
    quoted_q = len(re.findall(r"^> .*\?", text, re.M)) + len(re.findall(r"^\*\*Q\d+\.", text, re.M))
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M)
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)), dashes=len(re.findall("[—–]", prose)),
               exclamations=prose.count("!"), question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(r"\b" + re.escape(b), prose, re.I)) for b in BAN if re.search(r"\b" + re.escape(b), prose, re.I)},
               answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), missing_S=missing,
               dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
               untagged_rupee_lines=sum(1 for ln in body.splitlines() if "₹" in ln and not ln.startswith("|") and not re.search(r"\[(C |A\d|M\]|T\d|S\d|V\d)", ln)))
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0 and not res["question_headings"]
          and not res["banned"] and res["answers"] >= MIN_ANSWERS and not res["missing_S"] and not res["dup_headings"])
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL"); sys.exit(0 if ok else 1)

def pdf():
    src = rd(ROOT / "iim-lucknow-pivot" / "research" / "build_pdf.py")
    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:50], src.count(a)); src = src.replace(a, b)
    rep("dream11-pivot-research", "harvestbox-research", 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge", "HarvestBox: Growing Without Burning Out  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}", "else 'HarvestBox: Growing Without Burning Out'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "Verdict 2.0  |  Motilal Nehru College, University of Delhi  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#1B7F3B; --pd:#0E4D25; --a:#FFC72C; --tint:#D5EFDC;", 1)
    rep("color: #C4161C; }", "color: #1B7F3B; }", 1)
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:]); p = R / "harvestbox-research.pdf"
    print("PDF", p.exists() and p.stat().st_size)

if __name__ == "__main__": {"md": md, "pdf": pdf}[sys.argv[1]]()
