"""Extract every <!-- FILE: path --> block of SB/PLAN.md into SB/<path>. Run: PY swasthyagrid-gcp/space-beyond/extract.py"""
import io, re, pathlib
SB = pathlib.Path(__file__).resolve().parent
t = io.open(SB / "PLAN.md", encoding="utf-8").read()
B = re.findall(r"<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n", t, re.S)
for name, body in B:
    p = SB / name; p.parent.mkdir(parents=True, exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="\n").write(body + "\n"); print("wrote", name, len(body))
print("files", len(B))
