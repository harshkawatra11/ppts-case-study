"""Extract the R2 files from dreamforge-case/PLAN-R2.md. Run from anywhere: PY dreamforge-case/extract_r2.py
Backs up the first-build slides 2 to 5 into deck/slides_v1/ before overwriting them. Never extracts this file itself."""
import re, io, shutil, pathlib
D = pathlib.Path(__file__).resolve().parent
t = io.open(D / "PLAN-R2.md", encoding="utf-8").read().replace("\r", "")
B = re.findall(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n", t, re.S)
bk = D / "deck" / "slides_v1"; bk.mkdir(parents=True, exist_ok=True); nb = 0
for n in (2, 3, 4, 5):
    src = D / "deck" / "slides" / ("s%02d.js" % n)
    if src.exists() and not (bk / src.name).exists(): shutil.copy2(src, bk / src.name); nb += 1
print("backed up", nb)
n = 0
for rel, body in B:
    if rel == "extract_r2.py": continue
    p = D / rel; p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(body + "\n"); n += 1; print("wrote", rel, len(body))
print("files", n)
