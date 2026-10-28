# ===== URJAGRID PDF PATCH =====
"""Create build_pdf.py for the UrjaGrid research document from iim-lucknow-pivot/research/build_pdf.py."""
import io, pathlib
HERE = pathlib.Path(__file__).resolve().parent; SRC = HERE.parents[1] / "iim-lucknow-pivot" / "research" / "build_pdf.py"
t = io.open(SRC, encoding="utf-8").read()
REPL = [('dream11-pivot-research.md"', 'urjagrid-research.md"'), ('dream11-pivot-research.html"', 'urjagrid-research.html"'), ('dream11-pivot-research.pdf"', 'urjagrid-research.pdf"'),
    ('content: "Dream11: Life After the Ban  |  Team IdeaForge"', 'content: "UrjaGrid: Brownout, Never Blackout  |  Team IdeaForge"'),
    ("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;", "--p:#0B7A3E; --pd:#0A2A1C; --a:#B7E34A; --tint:#E3F5C4;"), ("color: #C4161C;", "color: #0B7A3E;"),
    ("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable", "Schneider Electric  |  Yuva Yodha Energy Tech Hackathon  |  Challenge 03 research deliverable"),
    ("else 'Dream11: Life After the Ban'}</h1>", "else 'UrjaGrid: Brownout, Never Blackout'}</h1>"), ("<br>Dayita Arora, Ramjas College, University of Delhi", ""), ("|M|A", "|M|P|A")]
miss = [a for a, b in REPL if a not in t]
for a, b in REPL: t = t.replace(a, b)
io.open(HERE / "build_pdf.py", "w", encoding="utf-8").write(t); print("build_pdf.py written; strings not found:", miss)
