"""Cross-checks before G-D: dashes, '!', 'Rs' before a digit, placeholders and invented-name candidates in slide-copy.md."""
import io, re, pathlib
D = pathlib.Path(__file__).resolve().parent; t = io.open(D / "slide-copy.md", encoding="utf-8").read()
print("dashes", len(re.findall("[\u2014\u2013]", t)), "excl", t.count("!"), "rs", len(re.findall(r"\bRs\.? ?\d", t)),
      "placeholders", len(re.findall(r"TODO|TBD|Lorem|Insert|xyz|PLACEHOLDER", t)))
ALLOW = {"Team IdeaForge", "Delhi Technological University", "Guru Gobind Singh Indraprastha University", "National Health Mission",
         "Ayushman Bharat", "Government of Rajasthan", "District Collector", "State List", "Seventh Schedule", "Health Dynamics",
         "National Health Accounts", "Medical Dialogues", "Delta Ranking", "Digital Personal Data Protection Act", "Puducherry",
         "Ayushman Bharat Digital Mission", "Ayushman Bharat Health Account", "Comptroller and Auditor General", "Space and Beyond",
         "Demand for Grants", "Constitution", "Round"}
cands = sorted(set(re.findall(r"\b(?:[A-Z][a-z]+\s){1,3}[A-Z][a-z]+\b", t)) - ALLOW)
print("name candidates to review", len(cands)); [print("  ", c) for c in cands]
