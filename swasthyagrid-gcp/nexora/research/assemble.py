# ===== NEXORA ASSEMBLE =====
"""Builds research/swasthyagrid-nexora-research.md from research/parts/, checks it, and renders the PDF.
  python -X utf8 assemble.py md     concatenate, build Appendix A and B, run checks
  python -X utf8 assemble.py pdf    render the .html and .pdf (needs Chrome and markdown-it-py)"""
import io, re, sys, pathlib
HERE = pathlib.Path(__file__).resolve().parent
NX = HERE.parent
ROOT = NX.parent.parent
N = "\n"
NAME = "swasthyagrid-nexora-research"
PARTS = ["part-A.md", "part-B.md", "part-C.md", "part-D.md", "part-E.md"]
APPX = ["appendix-C.md", "appendix-D.md", "appendix-E.md"]
HEAD = ("# SwasthyaGrid: Research Deliverable\n\n**Move what a district already owns before buying more: a district health coordination start-up for India's 38,241 PHCs and CHCs**\n\n"
        "Team: Team IdeaForge · Harsh Kawatra (Delhi Technological University)\n\n"
        "Prepared for: NEXORA, Satyawati College, University of Delhi\n\n---\n\n")
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "it's not just", "make no mistake", "landscape", "robust", "seamless", "holistic", "tapestry", "paradigm", "cutting-edge", "leverage", "empower", "transformative", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving", "imagine if"]
MUSTNUM = ["1.36 crore", "72.2%", "86.1%", "₹93.6 Cr", "₹13.44 Cr", "10.65x", "₹390.26 Cr", "₹168 Cr", "17,412", "38,241", "₹12 L", "5.6 months", "₹10.65 Cr", "6.1%", "12.5%", "79.9%", "43.4%"]
FORBID = ["Gursimran", "Ranvir", "Lorem", "TODO", "TBD"]


def rd(p):
    return io.open(p, encoding="utf-8").read().replace("\r", "")


def sources():
    rows, dup = {}, []
    files = [HERE / "sources-base.md"] + sorted((HERE / "raw").glob("sources-R*.md"))
    for f in files:
        for line in rd(f).split(N):
            m = re.match(r"^\| (S\d{2,3}) \|", line)
            if m:
                if m.group(1) in rows:
                    dup.append(m.group(1))
                rows[m.group(1)] = line.strip()
    fix = HERE / "raw" / "R0-verify.md"
    if fix.exists():
        for line in rd(fix).split(N):
            m = re.match(r"^URLFIX \| (S\d{2,3}) \| (\S+)\s*$", line)
            if m and m.group(1) in rows:
                cells = rows[m.group(1)].split(" | ")
                if len(cells) == 4:
                    cells[2] = m.group(2)
                    rows[m.group(1)] = " | ".join(cells)
    order = sorted(rows, key=lambda k: int(k[1:]))
    text = ("## Appendix A: Bibliography\n\nEvery source cited in this document, in ID order. `[M]` marks a model output (Appendix B) and `[A01]` to `[A17]` mark assumptions (Appendix D).\n\n"
            "| ID | Source | URL | Used for |\n|---|---|---|---|\n" + N.join(rows[k] for k in order) + N)
    return text, dup


def md():
    body = [rd(HERE / "parts" / p).strip() + N for p in PARTS]
    appa, dup = sources()
    body.append(appa)
    body.append("## Appendix B: Model output\n\nThe model is deterministic and has no inputs. The block below is the unedited output of `model/nexora_model.py`; every `[M]` figure in this document is read from it.\n\n" + "`" * 3 + "\n" + rd(NX / "model" / "model_output.txt").strip() + "\n" + "`" * 3 + "\n")
    body += [rd(HERE / "parts" / p).strip() + N for p in APPX]
    doc = HEAD + (N + N).join(body)
    io.open(HERE / (NAME + ".md"), "w", encoding="utf-8", newline=N).write(doc)
    words = len(re.findall(r"\S+", doc))
    tables = len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M))
    dashes = len(re.findall("[—–]", doc))
    used = set(re.findall(r"S\d{2,3}", " ".join(re.findall(r"\[(S\d{2,3})\]", doc))))
    listed = set(re.findall(r"^\| (S\d{2,3}) \|", doc, re.M))
    nourl = re.sub(r"https?://\S+", " ", doc)
    low = nourl.lower()
    banned = [b for b in BAN if b in low]
    qhead = [h for h in re.findall(r"^#+ .*$", doc, re.M) if "?" in h]
    excl = nourl.count("!")
    h2 = re.findall(r"^## (.+)$", doc, re.M)
    answers = len(re.findall(r"^\*\*Answer", doc, re.M))
    missnum = [m for m in MUSTNUM if m not in doc]
    forbid = [f for f in FORBID if f in doc]
    print("words", words, "| tables", tables, "| dashes", dashes, "| banned", banned, "| question headings", len(qhead), "| exclamations", excl, "| h2", len(h2), "| answer leads", answers)
    print("missing_S", sorted(used - listed)); print("unused_S", len(listed - used)); print("duplicate_S", dup)
    print("missing_numbers", missnum); print("forbidden", forbid)
    ok = (words >= 40000 and tables >= 80 and dashes == 0 and not banned and not qhead and excl == 0 and not (used - listed)
          and not dup and answers >= 18 and not missnum and not forbid and len(h2) == 23)
    print("ASSEMBLY", "PASS" if ok else "FAIL")
    sys.exit(0 if ok else 1)


def pdf():
    src = rd(ROOT / "mandamasterminds" / "research" / "build_pdf.py")
    rep = [("HERE = pathlib.Path(__file__).parent", "HERE = pathlib.Path(r'%s')" % HERE.as_posix()),
           ('"Project Satoshi Gate  |  Team IdeaForge"', '"SwasthyaGrid  |  NEXORA  |  Team IdeaForge"'),
           ("M&amp;A Masterminds 2026  |  Research deliverable", "NEXORA, Satyawati College  |  Research deliverable")]
    for a, b in rep:
        assert src.count(a) == 1, a
        src = src.replace(a, b)
    assert src.count("satoshi-gate-research") == 4
    src = src.replace("satoshi-gate-research", NAME)
    lines = src.split(N)
    i = [k for k, l in enumerate(lines) if l.startswith("<h1>{html.escape(title.replace(")]
    j = [k for k, l in enumerate(lines) if l.startswith('<div class="meta">')]
    assert len(i) == 1 and len(j) == 1
    lines[i[0]] = "<h1>SwasthyaGrid</h1>"
    lines[j[0]] = '<div class="meta"><b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br><br>{html.escape(prepared)}</div></section>"""'
    exec(compile(N.join(lines), "build_pdf_nexora", "exec"), {"__name__": "__main__"})


if __name__ == "__main__":
    {"md": md, "pdf": pdf}[sys.argv[1]]()
