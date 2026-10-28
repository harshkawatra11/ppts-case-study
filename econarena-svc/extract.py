"""Extract every embedded file from econarena-svc/PLAN.md into econarena-svc/. Run from the repo root:
python -X utf8 econarena-svc/extract.py"""
import re, io, pathlib
EA = pathlib.Path(__file__).resolve().parent; t = io.open(EA / "PLAN.md", encoding="utf-8").read()
n = 0
for m in re.finditer(r"<!-- FILE: (\S+) -->\n```\w+\n(.*?)\n```\n", t, re.S):
    p = EA / m.group(1); p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", m.group(1))
print("files", n)
