# ===== DOBAARA ASSEMBLE v1 (from the Arthik Khayal assembler) =====
"""Assemble dobaara-research.md from the writer parts and generated appendices, then run the acceptance checks.
  python -X utf8 marksoc-case/research/assemble.py md     assemble and check
  python -X utf8 marksoc-case/research/assemble.py pdf    render HTML and PDF with research/build_pdf.py"""
import re, sys, json, io, pathlib, subprocess
R = pathlib.Path(__file__).resolve().parent; AK = R.parent; ROOT = AK.parent; NAME = "dobaara-research"
HEADER = """# Project DOBAARA: Tikau Phones and the Trust Problem in Refurbished Smartphones

**Certify every phone, promise 85% battery and 12 months, and open a third lab shift on 1 February: in our model March 2027 EBITDA moves from −₹14.1 lakh to +₹5.6 lakh for ₹58.0 lakh of the ₹80 lakh, and every board test passes**

Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader) · Gursimran Kaur (Guru Gobind Singh Indraprastha University, Member) · Dayita Arora (Ramjas College, University of Delhi, Member)

Prepared for: MarKSoc DTU Case Competition 2026, Project DOBAARA, with CrackNontech as case partner, October 2026

---

"""
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "make no mistake", "seamless", "holistic", "tapestry",
       "paradigm", "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower", "transformative", "synergy", "world-class",
       "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving",
       "imagine if", "testament", "realm", "fast-paced", "groundbreaking", "state-of-the-art", "plethora", "myriad", "delves", "underscores", "showcases",
       "it is important to note", "in conclusion", "landscape of", "ecosystem", "robust", "seamlessly", "vibrant", "meticulous", "intricate"]
MIN_WORDS, MIN_TABLES = 70000, 130
TAGTOK = r"(C-[A-Za-z0-9]+|A\d{2}|M|T\d{1,2}|S\d+|[B-I]\d{2,3})"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def demote(t): t = re.sub(r"^# .*\n", "", t, count=1); return t.strip()
def count_untagged(body):
    # A number-bearing line passes if it carries a tag, is a table, heading, quote or footnote line, is an "Exhibit for the deck:"
    # pointer, or sits in an H2 section that carries a tag. Writers tag a number where it is introduced.
    bad = []
    for sec in re.split(r"(?=^## \d+\.)", body, flags=re.M):
        has_tag = bool(re.search(r"\[" + TAGTOK, sec))
        for ln in sec.splitlines():
            if not re.search(r"₹|\d%|\d,\d{2,3}", ln): continue
            if ln.startswith(("|", "#", ">", "*")) or ln.strip().startswith("Exhibit for the deck:"): continue
            if re.search(r"\[" + TAGTOK, ln) or has_tag: continue
            bad.append(ln)
    return len(bad)
NOTXY = r",\s*not\s+(?:a|an|the)?\s*[a-z][\w\s-]{2,40}(?=[.,;:\n]|$)"
def count_not_x_but_y(authored):
    # Humanizer section 1. Always flags "not just/only/merely". Flags "X, not Y" in a heading, and paragraphs with three or more.
    # Exempt: section 2 (the do-not and do table) and section 23 (the "Conclusively" paragraph), where both halves carry numbers.
    hits = 0
    for sec in re.split(r"(?=^## \d+\.)", authored, flags=re.M):
        m = re.match(r"^## (\d+)\.", sec)
        if m and m.group(1) in ("2", "23"): continue
        hits += len(re.findall(r"\bnot (?:just|only|merely)\b", sec, re.I))
        for ln in sec.splitlines():
            if "Context, not used in any calculation" in ln: continue
            if ln.startswith("#") and re.search(NOTXY, ln, re.I): hits += 1
        for para in sec.split("\n\n"):
            n = len(re.findall(NOTXY, para, re.I))
            if n >= 3: hits += n
    return hits
def count_ai_statement(doc):
    hits = 0
    for m in re.finditer(r"generated (by|with|using) (AI|artificial intelligence)|AI-use statement|AI use disclosure", doc, re.I):
        line_start = doc.rfind("\n", 0, m.start()) + 1
        if doc[line_start:line_start + 1] == "|": continue
        window = doc[max(0, m.start() - 60):min(len(doc), m.end() + 80)]
        if re.search(r"\bno\b", window, re.I) or "not included" in window.lower(): continue
        hits += 1
    return hits
def context_leaks(body):
    # Closed-data guard (C-R1): an external tag [S##] or a raw lane row [B07] may appear only inside sections 12 to 17 (the context
    # sections), Appendix A, or a line that also says "context". Any other use is a leak of outside data into the analysis.
    leaks = []
    for sec in re.split(r"(?=^## \d+\.)", body, flags=re.M):
        m = re.match(r"^## (\d+)\.", sec); n = int(m.group(1)) if m else -1
        if 12 <= n <= 17 or n in (0, 36): continue
        for ln in sec.splitlines():
            if re.search(r"\[(?:S\d+|[B-I]\d{2,3})", ln) and "context" not in ln.lower(): leaks.append(ln[:90])
    return leaks
def md():
    body = "\n\n".join(rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDEF")
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \| (.*?) \|", ln)
        if m: reg[m.group(1)] = (m.group(2), m.group(3))
    toks = set(tok.strip() for grp in re.findall(r"\[([^\]]+)\]", body) for tok in grp.split(",") if tok.strip())
    cited = sorted({t for t in toks if re.fullmatch(r"S\d+", t)}, key=lambda s: int(s[1:])); missing = [c for c in cited if c not in reg]
    rid = json.loads(rd(R / "raw" / "rid_to_sid.json"))
    extra = {rid[t] for t in toks if re.fullmatch(r"[B-I]\d+", t) and t in rid}
    allc = sorted(set(cited) | extra, key=lambda s: int(s[1:]))
    app_a = ("| ID | Source | Available at |\n|---|---|---|\n" + "\n".join("| %s | %s | %s |" % (s, reg[s][0], reg[s][1]) for s in allc if s in reg) +
             "\n\nEvery source in this list is context. None of its numbers enters the model, a table of results or a slide, because the case "
             "gives outside data no credit (C-R1, FAQ 4). Assumption tags (`[A05]` style) resolve to section 34 and Appendix B (model table T1). "
             "Case tags (`[C-E3N4]` style) resolve to `case/01-case.md`. Raw research rows (`[D07]` style) resolve through `research/raw/R-D.md`.")
    doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\nSources were opened and checked in October and November 2026. Only sources cited in the text are listed.\n\n" + app_a +
           "\n\n## Appendix B: Model tables\n\n" + demote(rd(AK / "model" / "model_tables.md")) + "\n\n" + rd(R / "parts" / "appendix-C.md").strip() + "\n\n" +
           rd(R / "parts" / "appendix-D.md").strip() + "\n")
    io.open(R / (NAME + ".md"), "w", encoding="utf-8", newline="\n").write(doc)
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M); h2 = re.findall(r"^## (\d+)\. ", body, re.M)
    authored = body + "\n\n" + rd(R / "parts" / "appendix-C.md") + "\n\n" + rd(R / "parts" / "appendix-D.md")
    res = dict(words=len(doc.split()), tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)), dashes=len(re.findall("[—–]", authored)),
               exclamations=authored.count("!"), question_headings=[h for h in heads if h.strip().endswith("?")],
               banned={b: len(re.findall(re.escape(b), authored, re.I)) for b in BAN if re.search(re.escape(b), authored, re.I)},
               q_outside_36=re.split(r"^## 36\.", authored, flags=re.M)[0].count("?"), not_x_but_y=count_not_x_but_y(authored),
               h2_numbered=len(h2), answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)), cited_S=len(cited), missing_S=missing,
               dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10], ai_statement=count_ai_statement(doc),
               untagged_number_lines=count_untagged(body), context_leaks=context_leaks(body)[:10])
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0 and res["exclamations"] == 0 and not res["question_headings"]
          and not res["banned"] and res["answers"] >= res["h2_numbered"] and not res["missing_S"] and not res["dup_headings"] and res["ai_statement"] == 0
          and res["untagged_number_lines"] <= 25 and res["q_outside_36"] == 0 and res["not_x_but_y"] == 0 and not res["context_leaks"])
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL"); sys.exit(0 if ok else 1)
def pdf():
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:]); p = R / (NAME + ".pdf"); print("PDF", p.exists() and p.stat().st_size)
if __name__ == "__main__": {"md": md, "pdf": pdf}[sys.argv[1]]()
