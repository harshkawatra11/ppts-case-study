import re, io, pathlib
CF = pathlib.Path(__file__).resolve().parent
t = io.open(CF / "DECK-PLAN.md", encoding="utf-8").read().replace("\r", "")
n = 0
for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S):
    if m.group(1).strip() == "extract_deck.py": continue
    p = CF / m.group(1).strip(); p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(m.group(2) + "\n"); n += 1; print("wrote", p.relative_to(CF).as_posix(), len(m.group(2)))
for d in ("deck/build", "deck/shots", "deck/logos", "deck/derived"): (CF / d).mkdir(parents=True, exist_ok=True)
print("files", n)
