import re, pathlib
t = pathlib.Path(r"C:\Users\harsh\.claude\plans\code-available-at-temporal-graham.md").read_text(encoding="utf-8")
sec = t[t.index("## 8. Slide code"):t.index("## 9. Figma setup")]
F = "`" * 3
code = "\n".join(re.findall(F + r"js\n(.*?)" + F, sec, re.S))
strings = re.findall(r'"([^"\\]*)"', code)
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just",
       "make no mistake", "landscape", "robust", "seamless", "holistic", "tapestry", "paradigm",
       "navigate", "revolutionise", "cutting-edge", "leverage", "empower", "transformative",
       "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine",
       "supercharge", "harness"]
hits = [s for s in strings if re.search("[\u2014\u2013?!]", s) or any(b in s.lower() for b in BAN)]
print("strings:", len(strings))
print("copy hits:", hits)
