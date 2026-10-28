# ===== HARVESTBOX RENAME v1 =====
"""Remove the three coined labels from the research parts. Run from anywhere:
  python -X utf8 verdict-mnc/research/rename_labels.py
Writes the parts in place and research/changed_lines.json. HB_DRY=1 writes nothing."""
import re, io, glob, json, os, pathlib
R = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(os.environ["HB_R"])
DRY = os.environ.get("HB_DRY") == "1"
RULES = [
 (r"## 17\. Flex with a floor: five features, each rebuilt to protect order frequency", "## 17. Proposal A, rebuilt: five features, each redesigned to protect order frequency"),
 (r"## 18\. The operating reset: six levers", "## 18. Operational improvements: six levers"),
 (r"A rebuilt, Perennial", "A rebuilt"), (r"A rebuilt: Perennial", "A rebuilt"),
 (r"Perennial, base", "Recommended plan, base"), (r"Perennial, core", "Recommended plan, core"),
 (r"Perennial core's", "the core plan's"), (r"Perennial core", "the core plan"), (r"Perennial base", "the base case"),
 (r"Project Perennial's", "the recommended plan's"), (r"Project Perennial", "the recommended plan"),
 (r"Perennial's", "the recommended plan's"), (r"Perennial", "the recommended plan"),
 (r"Flex with a floor's", "the rebuilt Proposal A's"), (r"Flex with a floor", "the rebuilt Proposal A"),
 (r"\bFlex's", "the rebuilt Proposal A's"), (r"\bFlex\b", "the rebuilt Proposal A"),
 (r"[Tt]he operating reset's", "the operational improvements'"), (r"[Tt]he operating reset", "the operational improvements"),
 (r"operating reset", "operational improvements"), (r"Reset only", "Improvements only"),
 (r"[Tt]he reset's", "the operational improvements'"), (r"[Tt]he reset", "the operational improvements"),
 (r"\breset levers\b", "improvement levers"), (r"\bsame reset\b", "same improvements"), (r"\bidentical reset\b", "identical improvements"),
 (r"\bthe the\b", "the"),
]
CAP = re.compile(r"(?m)(^|(?<=[.:] )|(?<=\| )|(?<=\*\* ))the (rebuilt Proposal A|operational improvements|recommended plan|core plan|base case)")
HEAD = re.compile(r"(?m)^(#{2,3} [0-9.a-z]+ )the ")
changed = []; left = []
for fn in sorted(glob.glob(str(R / "parts" / "*.md"))):
    o = io.open(fn, encoding="utf-8").read(); t = o
    for a, b in RULES: t = re.sub(a, b, t)
    t = CAP.sub(lambda m: m.group(1) + "The " + m.group(2), t)
    t = HEAD.sub(lambda m: m.group(1) + "The ", t)
    name = os.path.basename(fn)
    for i, (x, y) in enumerate(zip(o.split("\n"), t.split("\n"))):
        if x != y: changed.append(dict(file=name, line=i + 1))
    left += [dict(file=name, text=m.group(0)) for m in re.finditer(r".{0,40}(\breset\b|Perennial|\bFlex\b).{0,40}", t)]
    if not DRY and t != o: io.open(fn, "w", encoding="utf-8", newline="\n").write(t)
print("changed lines", len(changed), "| left for the copy editors", len(left))
for l in left: print("LEFT", l["file"], "|", l["text"].encode("ascii", "replace").decode())
if not DRY:
    io.open(R / "changed_lines.json", "w", encoding="utf-8").write(json.dumps(dict(changed=changed, left=left), indent=1, ensure_ascii=False))
    print("wrote changed_lines.json")
