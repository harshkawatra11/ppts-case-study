# ===== ALCHEMY ASSEMBLE v1 (from the HarvestBox assembler) =====
"""Assemble alchemy-whiteness-research.md from the writer parts and generated appendices, then run the acceptance checks.
  python -X utf8 asian-paints-alchemy/research/assemble.py md     assemble and check
  python -X utf8 asian-paints-alchemy/research/assemble.py pdf    build build_pdf.py from the Dream11 renderer and render the PDF"""
import re, sys, json, io, pathlib, subprocess
R = pathlib.Path(__file__).resolve().parent; AP = R.parent; ROOT = AP.parent
HEADER = """# Whiter with Less TiO2: Asian Paints Alchemy, Case Study 1

**Keep the rutile, hold it in a network of air, and seal the air in: a two-coat white that needs 39% less TiO2 per m² in our optical model, with the four Alchemy problem statements researched side by side**

Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader) · Anuj Gambhir (Delhi Technological University, Member)

Prepared for: Asian Paints Alchemy, case study round, October 2026

---

"""
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "make no mistake", "robust", "seamless",
       "holistic", "tapestry", "paradigm", "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative",
       "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore",
       "moreover", "in today's", "ever-evolving", "imagine if", "testament", "realm", "fast-paced", "groundbreaking", "state-of-the-art", "plethora", "myriad"]
# "landscape" is deliberately not banned here: PLAN.md section 7.2 names five H2 sections "Case Study N landscape: ..."
# (a required, locked title), and every occurrence found in the drafted parts is the document referring back to one of
# those named sections by its own name ("this landscape section", "the landscape evidence above"), not vague filler.
MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 70000, 130, 28
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def demote(t): t = re.sub(r"^# .*\n", "", t, count=1); return t.strip()
def md():
    parts = [rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEF"]
    body = "\n\n".join(parts)
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \| (.*?) \|", ln)
        if m: reg[m.group(1)] = (m.group(2), m.group(3))
    # Extract every bracketed tag token (comma-split), e.g. "[B24, T9]" -> "B24", "T9". A token must fully match a
    # pattern to count, so "W-S1" (a brief ID) is never mistaken for source "S1" the way a bare substring search would.
    tokens = set()
    for grp in re.findall(r"\[([^\]]+)\]", body):
        for tok in grp.split(","):
            tok = tok.strip()
            if tok: tokens.add(tok)
    cited = sorted({t for t in tokens if re.fullmatch(r"S\d+", t)}, key=lambda s: int(s[1:]))
    missing = [c for c in cited if c not in reg]
    # Bibliography also resolves raw-lane citations for lanes B-J (unambiguous: no model assumption uses those letters)
    # via rid_to_sid.json, in addition to any direct S## tags. Lane A is deliberately excluded from auto-resolution: a
    # bare [A17] could mean either model assumption A17 or raw research row A17 (both ranges run A01-A31+), and the two
    # resolve to different places (PLAN section 5 / document section 26, versus sources.md); forcing a bibliography
    # entry for every [A##] would misattribute genuine assumption citations. Lane-A raw facts stay traceable via
    # research/raw/R-A.md directly, which ships alongside the document.
    rid_map = json.loads(rd(R / "raw" / "rid_to_sid.json"))
    resolved_extra = set()
    for t in tokens:
        if re.fullmatch(r"[B-J]\d+", t) and t in rid_map:
            resolved_extra.add(rid_map[t])
    all_cited = sorted(set(cited) | resolved_extra, key=lambda s: int(s[1:]))
    app_a = ("| ID | Source | Available at |\n|---|---|---|\n" +
             "\n".join("| %s | %s | %s |" % (s, reg[s][0], reg[s][1]) for s in all_cited if s in reg) +
             "\n\nModel assumptions (`[A05]` style tags) resolve to section 5 of `PLAN.md` and section 26 of this "
             "document, not to this bibliography; the raw Asian Paints facts cited as `[A##]` throughout are traceable "
             "directly in `research/raw/R-A.md`, shipped alongside this document.")
    app_b = demote(rd(AP / "model" / "model_tables.md"))
    doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\nSources were opened and checked in October 2026. Only sources cited in the text are listed.\n\n" + app_a +
           "\n\n## Appendix B: Model tables\n\n" + app_b + "\n\n" + rd(R / "parts" / "appendix-C.md").strip() + "\n\n" + rd(R / "parts" / "appendix-D.md").strip() + "\n")
    io.open(R / "alchemy-whiteness-research.md", "w", encoding="utf-8", newline="\n").write(doc)
    text = doc.split("\n---\n", 1)[1]
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M)
    # The banned-word, dash and exclamation checks scan the team's own authored prose (parts A-F plus the appendices
    # W-F wrote) only, never Appendix A (external source titles and URLs, which can legitimately contain any word,
    # e.g. a cited article slug) or Appendix B (the machine-generated model tables).
    authored = body + "\n\n" + rd(R / "parts" / "appendix-C.md") + "\n\n" + rd(R / "parts" / "appendix-D.md")
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)), dashes=len(re.findall("[—–]", authored)),
               exclamations=authored.count("!"), question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(re.escape(b), authored, re.I)) for b in BAN if re.search(re.escape(b), authored, re.I)},
               answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), missing_S=missing,
               dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
               ai_statement=len(re.findall(r"generated (by|with|using) (AI|artificial intelligence)|AI-use|AI use disclosure", doc, re.I)),
               untagged_number_lines=sum(1 for ln in body.splitlines() if re.search(r"₹|\d%", ln) and not ln.startswith("|") and not ln.startswith("#") and not re.search(r"\[(W-|T-|B-|A-|[A-J]\d|M\]|T\d|S\d)", ln)))
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0 and not res["question_headings"]
          and not res["banned"] and res["answers"] >= MIN_ANSWERS and not res["missing_S"] and not res["dup_headings"] and res["ai_statement"] == 0)
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL"); sys.exit(0 if ok else 1)
def pdf():
    src = rd(ROOT / "iim-lucknow-pivot" / "research" / "build_pdf.py")
    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:50], src.count(a)); src = src.replace(a, b)
    rep("dream11-pivot-research", "alchemy-whiteness-research", 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge", "Whiter with Less TiO2  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}", "else 'Whiter with Less TiO2'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "Asian Paints Alchemy  |  Case Study 1  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#5A2D91; --pd:#33175E; --a:#F8B01A; --tint:#E9E1F6;", 1)
    rep("color: #C4161C; }", "color: #5A2D91; }", 1)
    rep("Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi<br><br>",
        "Harsh Kawatra, Delhi Technological University (DTU), Team Leader<br>Anuj Gambhir, Delhi Technological University (DTU), Member<br><br>", 1)
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:]); p = R / "alchemy-whiteness-research.pdf"
    print("PDF", p.exists() and p.stat().st_size)
if __name__ == "__main__": {"md": md, "pdf": pdf}[sys.argv[1]]()
