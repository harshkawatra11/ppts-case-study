import re, pathlib
PLAN = pathlib.Path(r"C:\Users\harsh\.claude\plans\working-folder-swasthyagrid-gcp-sparkling-elephant.md")
OUT = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\swasthyagrid-gcp\hackbvp")
t = PLAN.read_text(encoding="utf-8")
F = "`" * 3
pairs = re.findall(r"<!-- FILE: ([\w.\-]+) -->\s*\n" + F + r"[a-z]*\n(.*?)" + F, t, re.S)
OUT.mkdir(parents=True, exist_ok=True)
for name, body in pairs:
    (OUT / name).write_text(body, encoding="utf-8", newline="\n")
    print(name, len(body))
print("files", len(pairs))
