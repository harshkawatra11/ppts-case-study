"""Cross-checks before the deck critic: dashes, '!', 'Rs' before a digit, placeholders and invented-name candidates in slide-copy.md."""
import io, re, pathlib
D = pathlib.Path(__file__).resolve().parent; t = io.open(D / "slide-copy.md", encoding="utf-8").read()
print("dashes", len(re.findall("[—–]", t)), "excl", t.count("!"), "rs", len(re.findall(r"\bRs\.? ?\d", t)),
      "placeholders", len(re.findall(r"TODO|TBD|Lorem|Insert|xyz|PLACEHOLDER", t)))
ALLOW = {"Team IdeaForge", "Delhi Technological University", "Guru Gobind Singh Indraprastha University", "Trade Private Limited", "Arthik Khayal",
         "Salary Account", "Credit Card", "Save More Tomorrow", "Business Today", "Investment Advisers", "Rules Unknown"}
cands = sorted(set(re.findall(r"\b(?:[A-Z][a-z]+\s){1,3}[A-Z][a-z]+\b", t)) - ALLOW)
print("name candidates to review (each must be a real organisation, a case term or a plain phrase; never a coined programme name)", len(cands))
for c in cands: print("  ", c)
