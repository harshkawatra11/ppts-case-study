import re, io, pathlib
CF = pathlib.Path(__file__).resolve().parent
t = io.open(CF / "PLAN_DECK.md", encoding="utf-8").read().replace("\r", "")
n = 0
for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S):
    name = m.group(1).strip()
    if name == "extract_v2.py": continue
    p = CF / name; p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", name, len(m.group(2)))
print("files", n)
