# Extract the embedded files of casequest-usme/PLAN.md. Run from the repo root: python3 -X utf8 casequest-usme/extract.py
import io, re, pathlib
P = pathlib.Path("casequest-usme"); t = io.open(P / "PLAN.md", encoding="utf-8").read().replace("\r", "")
blocks = re.findall(r"^<!-- FILE: ([^\n]+?) -->\n```[a-z]*\n(.*?)\n```\n<!-- END FILE -->", t, re.S | re.M); n = 0
for name, body in blocks:
    if name == "extract.py": continue
    p = P / name; p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(body + "\n"); n += 1; print("wrote", p, len(body))
print("files", n)
