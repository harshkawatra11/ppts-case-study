"""Extract every embedded file from arthikkhayal-case/PLAN.md into arthikkhayal-case/. Run from the repo root:
python -X utf8 arthikkhayal-case/extract.py"""
import re, io, pathlib
AK = pathlib.Path(__file__).resolve().parent; t = io.open(AK / "PLAN.md", encoding="utf-8").read()
n = 0
for m in re.finditer(r"<!-- FILE: (\S+) -->\n```\w+\n(.*?)\n```\n", t, re.S):
    p = AK / m.group(1); p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", m.group(1))
print("files", n)
