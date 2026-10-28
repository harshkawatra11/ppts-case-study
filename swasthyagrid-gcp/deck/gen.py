"""Generate Figma scripts from the plan. Usage (run from any directory):
  python gen.py batch 1,2,3   -> deck/batch_1_2_3.js  (preamble + extras + slide blocks, real IDs)
  python gen.py v1 1,2,3      -> deck/v1_1_2_3.js     (batch validator)
  python gen.py sweeps        -> deck/sweeps.js       (V2 radius sweep + V3 font floor + V4 copy + V5 numbers)
  python gen.py clear 1,2,3   -> deck/clear_1_2_3.js  (removes all children of those slides; recovery only)
  python gen.py photos        -> deck/photos.js       (read-only: PHOTO frame IDs on S6)
  python gen.py dump          -> deck/dump.js         (read-only: every text node per slide, for F5b/F6)"""
import re, json, sys, pathlib
PLAN = pathlib.Path(r"C:\Users\harsh\.claude\plans\code-available-at-temporal-graham.md")
DECK = pathlib.Path(__file__).resolve().parent
t = PLAN.read_text(encoding="utf-8")
FENCE = "`" * 3
blocks = re.findall(FENCE + r"js\n(.*?)" + FENCE, t, re.S)
pre = (DECK / "preamble.js").read_text(encoding="utf-8")
extras = next(b for b in blocks if "// ===== SWASTHYAGRID EXTRAS =====" in b)
v1 = next(b for b in blocks if 'const ids=["S_a","S_b","S_c"]' in b)
sweeps = next(b for b in blocks if "// ===== SWASTHYAGRID SWEEPS =====" in b)
slides = {}
for b in blocks:
    m = re.search(r'getNodeByIdAsync\("S(\d+)"\)', b)
    if m and b.lstrip().startswith("{ const s"):
        slides[int(m.group(1))] = b
assert sorted(slides) == list(range(1, 13)), sorted(slides)
ids = json.loads((DECK / "slide-ids.json").read_text(encoding="utf-8"))
mode = sys.argv[1]
nums = [int(x) for x in sys.argv[2].split(",")] if len(sys.argv) > 2 else list(range(1, 13))
idlist = json.dumps([ids["S%d" % n] for n in nums])
if mode == "batch":
    code = pre + "\n" + extras + "\nconst results=[];\n"
    for n in nums:
        code += slides[n].replace('getNodeByIdAsync("S%d")' % n, 'getNodeByIdAsync("%s")' % ids["S%d" % n]) + "\n"
    code += "return {results,warnings};\n"
    out = DECK / ("batch_" + "_".join(map(str, nums)) + ".js")
elif mode == "v1":
    code = v1.replace('const ids=["S_a","S_b","S_c"];', "const ids=%s;" % idlist)
    out = DECK / ("v1_" + "_".join(map(str, nums)) + ".js")
elif mode == "sweeps":
    code = sweeps.replace("const ids=IDS;", "const ids=%s;" % idlist)
    out = DECK / "sweeps.js"
elif mode == "clear":
    code = "const ids=%s; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.children.slice().forEach(c=>c.remove()); } return {cleared:ids};" % idlist
    out = DECK / ("clear_" + "_".join(map(str, nums)) + ".js")
elif mode == "photos":
    code = 'const s=await figma.getNodeByIdAsync("%s"); return s.findAll(n=>n.name.startsWith("PHOTO: ")).map(n=>({id:n.id,name:n.name,w:n.width,h:n.height}));' % ids["S6"]
    out = DECK / "photos.js"
elif mode == "dump":
    code = "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); out.push({slide:s.name,texts:s.findAllWithCriteria({types:['TEXT']}).map(t=>({parent:t.parent?t.parent.name:'',chars:t.characters}))}); } return out;" % idlist
    out = DECK / "dump.js"
out.write_text(code, encoding="utf-8")
print(out, len(code), "chars")
if len(code) > 50000: print("WARNING: over 50,000 characters; split the batch")
