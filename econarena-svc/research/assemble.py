# ===== ECON-ARENA ASSEMBLE v1 (from the Arthik Khayal and Alchemy assemblers) =====
"""Assemble setu-ai-research.md from the writer parts and generated appendices, then run the acceptance checks.
  python -X utf8 econarena-svc/research/assemble.py md     assemble and check
  python -X utf8 econarena-svc/research/assemble.py pdf    build build_pdf.py from the IIM Lucknow renderer and render the PDF"""
import re, sys, json, io, pathlib, subprocess
R = pathlib.Path(__file__).resolve().parent; EA = R.parent; ROOT = EA.parent; NAME = "setu-ai-research"
HEADER = """# Setu AI: Win the Lenders First

**Do not train a base model. Sell mid-sized lenders in Mumbai and Pune evidence that every collection call followed the rules, on rented models and rented GPUs: 28 paying lenders and ₹6.6 Cr of ARR by month 24 in our base case, with ₹17.2 Cr in the bank and 11.0 months of runway left**

Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader) · Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member) · Dayita Arora (Ramjas College, University of Delhi, Member)

Prepared for: Econ-Arena, a strategy case competition at Blisspoint'26-27, Sri Venkateswara College, University of Delhi, October 2026

---

"""
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "make no mistake", "seamless", "holistic", "tapestry",
       "paradigm", "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative", "synergy", "world-class",
       "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving",
       "imagine if", "testament", "realm", "fast-paced", "groundbreaking", "state-of-the-art", "plethora", "myriad", "delves", "underscores", "showcases",
       "it is important to note", "in conclusion", "landscape of", "ecosystem", "additionally", "align with", "bolstered", "deep dive", "enduring",
       "garner", "interplay", "intricate", "meticulous", "quietly", "vibrant", "stands as", "serves as", "boasts"]
MIN_WORDS, MIN_TABLES = 90000, 160
TAGTOK = r"(C-[A-Za-z0-9]+|A\d{2}|M|T\d{1,2}|S\d+|[B-L]\d{2,3})"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def demote(t): t = re.sub(r"^# .*\n", "", t, count=1); return t.strip()
def md():
    body = "\n\n".join(rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEFG")
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \| (.*?) \|", ln)
        if m: reg[m.group(1)] = (m.group(2), m.group(3))
    toks = set(tok.strip() for grp in re.findall(r"\[([^\]]+)\]", body) for tok in grp.split(",") if tok.strip())
    cited = sorted({t for t in toks if re.fullmatch(r"S\d+", t)}, key=lambda s: int(s[1:])); missing = [c for c in cited if c not in reg]
    rid = json.loads(rd(R / "raw" / "rid_to_sid.json"))
    extra = {rid[t] for t in toks if re.fullmatch(r"[B-L]\d+", t) and t in rid}
    allc = sorted(set(cited) | extra, key=lambda s: int(s[1:]))
    app_a = ("| ID | Source | Available at |\n|---|---|---|\n" + "\n".join("| %s | %s | %s |" % (s, reg[s][0], reg[s][1]) for s in allc if s in reg) +
             "\n\nAssumption tags (`[A17]` style) resolve to section 36 and Appendix B (model table T1). Case tags (`[C-G1]` style) resolve to "
             "`case/01-case.md`. Raw research rows (`[F07]` style) resolve through `research/raw/R-F.md` and are listed here through their URL.")
    doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\nSources were opened and checked in October 2026. Only sources cited in the text are listed.\n\n" + app_a +
           "\n\n## Appendix B: Model tables\n\n" + demote(rd(EA / "model" / "model_tables.md")) + "\n\n" + rd(R / "parts" / "appendix-C.md").strip() + "\n\n" +
           rd(R / "parts" / "appendix-D.md").strip() + "\n")
    io.open(R / (NAME + ".md"), "w", encoding="utf-8", newline="\n").write(doc)
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M); h2 = re.findall(r"^## (\d+)\. ", body, re.M)
    authored = body + "\n\n" + rd(R / "parts" / "appendix-C.md") + "\n\n" + rd(R / "parts" / "appendix-D.md")
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)), dashes=len(re.findall("[—–]", authored)),
               exclamations=authored.count("!"), question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(re.escape(b), authored, re.I)) for b in BAN if re.search(re.escape(b), authored, re.I)},
               q_outside_38=re.split(r"^## 38\.", authored, flags=re.M)[0].count("?"), not_x_but_y=len(re.findall(r"\bnot (?:just|only|merely)\b", authored, re.I)),
               h2_numbered=len(h2), answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), missing_S=missing,
               dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
               ai_statement=len(re.findall(r"generated (by|with|using) (AI|artificial intelligence)|AI-use|AI use disclosure", doc, re.I)),
               invented=sorted(set(re.findall(r"\bProject [A-Z][a-z]+\b", authored))),
               untagged_number_lines=sum(1 for ln in body.splitlines() if re.search(r"₹|\d%|\d,\d{3}", ln) and not ln.startswith(("|", "#", ">", "Exhibit for the deck")) and not re.search(r"\[" + TAGTOK, ln)))
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0 and not res["question_headings"]
          and not res["banned"] and res["answers"] >= res["h2_numbered"] and not res["missing_S"] and not res["dup_headings"] and res["ai_statement"] == 0
          and res["untagged_number_lines"] <= 40 and res["q_outside_38"] == 0 and res["not_x_but_y"] == 0 and not res["invented"])
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL"); sys.exit(0 if ok else 1)
def pdf():
    src = rd(ROOT / "iim-lucknow-pivot" / "research" / "build_pdf.py")
    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:50], src.count(a)); src = src.replace(a, b)
    rep("dream11-pivot-research", NAME, 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge", "Setu AI: Win the Lenders First  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}", "else 'Setu AI: Win the Lenders First'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "Econ-Arena  |  Blisspoint'26-27, Sri Venkateswara College  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#6B4A2F; --pd:#2E1D14; --a:#D9B26F; --tint:#F6E8D2;", 1)
    rep("color: #C4161C; }", "color: #6B4A2F; }", 1)
    rep("Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi<br><br>",
        "Harsh Kawatra, Delhi Technological University (DTU), Team Leader<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University (GGSIPU), Member<br>Dayita Arora, Ramjas College, University of Delhi, Member<br><br>", 1)
    src, k = re.subn(r"^TAG = re\.compile\(.*$", lambda m: 'TAG = re.compile(r"\\[((?:C-[A-Za-z0-9]+|A\\d{2}|M|T\\d{1,2}|S\\d+|[B-L]\\d{2,3})(?:, ?(?:C-[A-Za-z0-9]+|A\\d{2}|M|T\\d{1,2}|S\\d+|[B-L]\\d{2,3}))*)\\]")', src, count=1, flags=re.M)
    assert k == 1, "TAG line"
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:]); p = R / (NAME + ".pdf"); print("PDF", p.exists() and p.stat().st_size)
if __name__ == "__main__": {"md": md, "pdf": pdf}[sys.argv[1]]()
