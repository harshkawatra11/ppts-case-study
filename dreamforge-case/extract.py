"""Extract every embedded file from dreamforge-case/PLAN.md into dreamforge-case/. Run from the repo root:
  PY dreamforge-case/extract.py
Never retype a block by hand; fix an extracted file, not the plan."""
import re, io, pathlib
D = pathlib.Path(__file__).resolve().parent
t = io.open(D / "PLAN.md", encoding="utf-8").read().replace("\r", "")
B = re.findall(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n", t, re.S)
n = 0
for rel, body in B:
    p = D / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(body + "\n")
    n += 1
    print("wrote", rel, len(body))
print("files", n)
