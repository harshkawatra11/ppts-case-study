import re, pathlib
t = pathlib.Path(r"C:\Users\harsh\.claude\plans\working-folder-swasthyagrid-gcp-sparkling-elephant.md").read_text(encoding="utf-8")
sec = t[t.index("## 8. Slide code"):t.index("## 9. Figma setup")]
code = "\n".join(re.findall("`" * 3 + r"js\n(.*?)" + "`" * 3, sec, re.S))
strings = re.findall(r'"([^"\\]*)"', code)
BAN = ["here's","let's","bottom line","delve","game-changer","unlock","it's not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutionise","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today's","ever-evolving","imagine if"]
BAD = ["Gemini","Vertex","BigQuery","Google","Cloud Run","Sarvam","Gursimran","Ranvir","960 Cr","480 Cr"]
hits = [s for s in strings if re.search("[\u2014\u2013?!]", s) or any(b in s.lower() for b in BAN) or any(b in s for b in BAD)]
print("strings:", len(strings)); print("copy hits:", hits)
