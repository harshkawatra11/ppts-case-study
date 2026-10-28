"""Assemble dream11-pivot-research.md from the five writer parts plus generated appendices, then run the plan 15.5 checks."""
import re, sys, pathlib, json

ROOT = pathlib.Path(__file__).resolve().parents[1]
R = ROOT / "research"

HEADER = """# Dream11: Life After the Ban

**A Head of Product's answer to PIVOT '26: sharpen the pivot into India's free cricket skill league**

Team: Harsh Kawatra (Delhi Technological University, Team Leader) \u00b7 Gursimran Kaur (Guru Gobind Singh Indraprastha University) \u00b7 Dayita Arora (Ramjas College, University of Delhi)

Prepared for: IIM Lucknow IT & Product Management Club, PIVOT '26, Round 1, October 2026

---

"""

def read(p): return pathlib.Path(p).read_text(encoding="utf-8")

parts = [read(R / "parts" / f"part-{x}.md").strip() for x in "ABCDE"]
body = "\n\n".join(parts)

# ---- source register -> Harvard-style bibliography (only IDs actually cited) ----
reg_text = read(R / "raw" / "R-A-dream11-company.md")
reg = {}
for ln in reg_text.splitlines():
    m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \|$", ln)
    if m: reg[m.group(1)] = (m.group(2), m.group(3))
extra = R / "raw" / "source-register-additions.md"
if extra.exists():
    for ln in read(extra).splitlines():
        m = re.match(r"^\| (S\d+) \| (.+?) \| (.+?) \|$", ln)
        if m: reg[m.group(1)] = (m.group(2), m.group(3))

cited = sorted({f"S{n}" for grp in re.findall(r"\[([^\]]*S\d+[^\]]*)\]", body) for n in re.findall(r"S(\d+)", grp)}, key=lambda s: int(s[1:]))
missing = [c for c in cited if c not in reg]
lines = ["| ID | Source (Harvard style) | Available at | Accessed |", "|---|---|---|---|"]
for sid in cited:
    if sid in reg:
        src, url = reg[sid]
        lines.append(f"| {sid} | {src} | {url} | 29 September 2026 |")
app_a = "\n".join(lines)

app_b = read(ROOT / "model" / "model_tables.md")
app_b = re.sub(r"^# .*\n", "", app_b, count=1)
app_b = app_b.replace("\n## ", "\n### ")
if app_b.startswith("## "): app_b = "#" + app_b

app_c_tables = read(ROOT / "research" / "reviews" / "review_tables.md")
app_c_tables = re.sub(r"^# .*\n", "", app_c_tables, count=1).replace("\n## ", "\n### ")
if app_c_tables.startswith("## "): app_c_tables = "#" + app_c_tables
rd = read(R / "raw" / "R-D-review-mining.md")
codebook = re.search(r"CB = \{(.*?)\n\}", read(R / "reviews" / "code_reviews.py"), re.S).group(1)
cb_rows = ["| ID | Theme | Regular expression |", "|---|---|---|"]
for m in re.finditer(r'"(T\d\d)": \("([^"]+)",\s*r"(.*?)"\),', codebook):
    cb_rows.append(f"| {m.group(1)} | {m.group(2)} | `{m.group(3).replace('|', ' or ')[:200]}` |")
prec = re.search(r"## Precision check.*?(?=\n## )", rd, re.S).group(0).replace("## Precision check", "### Precision check")
app_c = app_c_tables + "\n\n### Codebook (version 2)\n\n" + "\n".join(cb_rows) + "\n\n" + prec

app_d = read(R / "parts" / "appendix-D-glossary.md")

conf = re.search(r"### 5\.4 Known conflicts.*?(?=\n### 5\.5)", read(pathlib.Path(r"C:/Users/harsh/.claude/plans/working-folder-iim-lucknow-pivot-silly-scott.md")), re.S)
conf_txt = conf.group(0).split("\n", 2)[2].strip() if conf else "(missing)"
log = ROOT / "deck" / "figma.md"
step2b = ""
if log.exists():
    s = read(log)
    m = re.search(r"## Model changes.*?(?=\n## |\Z)", s, re.S)
    if m: step2b = "\n\n### Model input changes made after verification\n\n" + m.group(0).split("\n", 1)[1].strip()
app_e = conf_txt + step2b

doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\n" + app_a +
       "\n\n## Appendix B: Model tables\n\n" + app_b +
       "\n\n## Appendix C: Review-mining tables and codebook\n\n" + app_c +
       "\n\n## Appendix D: Glossary\n\n" + app_d +
       "\n\n## Appendix E: Data conflicts and resolutions\n\n" + app_e + "\n")
out = R / "dream11-pivot-research.md"
out.write_text(doc, encoding="utf-8")

# ---- checks ----
heads = re.findall(r"^(#{2,3}) (.+)$", doc, re.M)
dupes = [h for h in {t for _, t in heads} if sum(1 for _, t in heads if t == h) > 1]
dashes = doc.count("\u2014") + doc.count("\u2013")
a_tags = sorted({a for grp in re.findall(r"\[([^\]]*A\d+[^\]]*)\]", body) for a in re.findall(r"\bA(\d+)", grp)}, key=int)
words = len(doc.split()); tables = len(re.findall(r"^\|[-| ]+\|$", doc, re.M))
bad = ["delve", "landscape", "unlock", "game-changer", "here's", "let's", "bottom line", "it's not just", "make no mistake", "in today's",
       "fast-paced", "seamless", "robust", "tapestry", "testament", "realm", "holistic", "synergy", "paradigm", "cutting-edge", "revolutioniz"]
hits = {b: len(re.findall(re.escape(b), doc, re.I)) for b in bad if re.search(re.escape(b), doc, re.I)}
print(json.dumps(dict(words=words, tables=tables, dashes=dashes, dup_headings=dupes[:10], cited_S=len(cited), missing_S=missing, A_tags=len(a_tags), banned=hits), indent=1))
