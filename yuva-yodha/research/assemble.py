# ===== URJAGRID ASSEMBLE =====
"""Assemble urjagrid-research.md from the five writer parts plus generated appendices, then print the checks."""
import re, json, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]; R = ROOT / "research"
rd = lambda p: pathlib.Path(p).read_text(encoding="utf-8")
HEADER = ("# UrjaGrid: Brownout, Never Blackout\n\n**A software answer to Challenge 03, Grid Reliability: keeping the lights on at the edge with the smart meters India has already installed**\n\n"
          "Team: Harsh Kawatra (Delhi Technological University, Team Leader) \u00b7 Gursimran Kaur (Guru Gobind Singh Indraprastha University)\n\n"
          "Prepared for: Schneider Electric, Yuva Yodha Energy Tech Hackathon, Challenge 03, October 2026\n\n---\n\n")
body = "\n\n".join(rd(R / "parts" / ("part-%s.md" % x)).strip() for x in "ABCDE")
reg = {}
for f in sorted((R / "raw").glob("R-*.md")):
    if "verification" in f.name: continue
    for ln in rd(f).splitlines():
        c = [x.strip() for x in ln.split("|")]
        if len(c) > 7 and re.fullmatch(r"S\d+", c[1]): reg[c[1]] = (c[5], c[4], c[6])   # source, as of, url
cited = sorted({"S" + n for g in re.findall(r"\[([^\]]*S\d+[^\]]*)\]", body) for n in re.findall(r"S(\d+)", g)}, key=lambda s: int(s[1:]))
missing = [c for c in cited if c not in reg]
bib = ["| ID | Source | As of | Available at | Accessed |", "|---|---|---|---|---|"] + ["| %s | %s | %s | %s | 4 October 2026 |" % (s, reg[s][0], reg[s][1], reg[s][2]) for s in cited if s in reg]
tables = re.sub(r"^# .*\n", "", rd(ROOT / "model" / "model_tables.md"), count=1).replace("\n## ", "\n### ")
gl = R / "parts" / "appendix-C-glossary.md"; conf = R / "raw" / "conflicts.md"
doc = (HEADER + body + "\n\n## Appendix A: Bibliography\n\n" + "\n".join(bib) + "\n\n## Appendix B: Model tables\n" + tables +
       "\n\n## Appendix C: Glossary\n\n" + (rd(gl).strip() if gl.exists() else "(missing)") + "\n\n## Appendix D: Data conflicts and resolutions\n\n" + (rd(conf).strip() if conf.exists() else "(missing)") + "\n")
(R / "urjagrid-research.md").write_text(doc, encoding="utf-8")
heads = re.findall(r"^#{2,3} (.+)$", doc, re.M); dup = sorted({h for h in heads if heads.count(h) > 1})
bad = ["delve", "landscape", "unlock", "game-changer", "here's", "let's", "bottom line", "it's not just", "make no mistake", "in today's", "fast-paced", "seamless", "robust", "tapestry", "testament", "realm", "holistic", "synergy", "paradigm", "cutting-edge", "revolutioniz", "revolutionis", "journey", "crucial", "pivotal", "furthermore", "moreover", "empower", "harness"]
print(json.dumps(dict(words=len(doc.split()), tables=len(re.findall(r"^\|[-| :]+\|$", doc, re.M)), dashes=doc.count("\u2014") + doc.count("\u2013"), dup_headings=dup[:10],
      cited_S=len(cited), missing_S=missing, banned={b: len(re.findall(re.escape(b), doc, re.I)) for b in bad if re.search(re.escape(b), doc, re.I)}), indent=1))
