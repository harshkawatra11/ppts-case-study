# ===== NEXORA GEN =====
"""Generate Figma scripts from the plan. Usage (any directory):
  python gen.py batch 1,2,3   -> deck/batch_1_2_3.js  (preamble + extras + slide blocks, real IDs, overrides applied)
  python gen.py v1 1,2,3      -> deck/v1_1_2_3.js     (batch validator)
  python gen.py sweeps        -> deck/sweeps.js       (V2 radius + V3 font floor + V4 copy + V5 numbers, all 10 slides)
  python gen.py clear 1,2,3   -> deck/clear_1_2_3.js  (removes all children of those slides; recovery only)
  python gen.py logos         -> deck/logos.js        (read-only: LOGO frame IDs and sizes on S1)
  python gen.py dump          -> deck/dump.js         (read-only: every text node per slide)"""
import re, json, sys, pathlib
PLAN = pathlib.Path(r"C:\Users\harsh\.claude\plans\working-folder-swasthyagrid-gcp-sparkling-elephant.md")
DECK = pathlib.Path(__file__).resolve().parent
t = PLAN.read_text(encoding="utf-8")
FENCE = "`" * 3
blocks = re.findall(FENCE + r"js\n(.*?)" + FENCE, t, re.S)
pre = (DECK / "preamble.js").read_text(encoding="utf-8")
extras = next(b for b in blocks if "// ===== NEXORA EXTRAS =====" in b)
v1 = next(b for b in blocks if 'const ids=["S_a","S_b","S_c"]' in b)
sweeps = next(b for b in blocks if "// ===== NEXORA SWEEPS =====" in b)
slides = {}
for b in blocks:
    m = re.search(r'getNodeByIdAsync\("S(\d+)"\)', b)
    if m and b.lstrip().startswith("{ const s"):
        slides[int(m.group(1))] = b
assert sorted(slides) == list(range(1, 11)), sorted(slides)
ovp = DECK / "overrides.json"
ov = json.loads(ovp.read_text(encoding="utf-8")) if ovp.exists() else {}


def apply(code):
    for a, b2 in ov.items():
        code = code.replace(a, b2)
    return code


ids = json.loads((DECK / "slide-ids.json").read_text(encoding="utf-8"))
mode = sys.argv[1]
nums = [int(x) for x in sys.argv[2].split(",")] if len(sys.argv) > 2 else list(range(1, 11))
idlist = json.dumps([ids["S%d" % n] for n in nums])
if mode == "batch":
    code = pre + "\n" + extras + "\nconst results=[];\n"
    for n in nums:
        code += slides[n].replace('getNodeByIdAsync("S%d")' % n, 'getNodeByIdAsync("%s")' % ids["S%d" % n]) + "\n"
    code = apply(code) + "return {results,warnings};\n"
    out = DECK / ("batch_" + "_".join(map(str, nums)) + ".js")
elif mode == "v1":
    code = v1.replace('const ids=["S_a","S_b","S_c"];', "const ids=%s;" % idlist)
    out = DECK / ("v1_" + "_".join(map(str, nums)) + ".js")
elif mode == "sweeps":
    allids = json.dumps([ids["S%d" % n] for n in range(1, 11)])
    code = apply(sweeps.replace("const ids=IDS;", "const ids=%s;" % allids))
    out = DECK / "sweeps.js"
elif mode == "clear":
    code = "const ids=%s; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.children.slice().forEach(c=>c.remove()); } return {cleared:ids};" % idlist
    out = DECK / ("clear_" + "_".join(map(str, nums)) + ".js")
elif mode == "logos":
    code = 'const s=await figma.getNodeByIdAsync("%s"); return s.findAll(n=>n.name.startsWith("LOGO: ")).map(n=>({id:n.id,name:n.name,w:n.width,h:n.height}));' % ids["S1"]
    out = DECK / "logos.js"
elif mode == "dump":
    code = "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); out.push({slide:s.name,texts:s.findAllWithCriteria({types:['TEXT']}).map(t=>({parent:t.parent?t.parent.name:'',chars:t.characters}))}); } return out;" % idlist
    out = DECK / "dump.js"
out.write_text(code, encoding="utf-8")
print(out, len(code), "chars", "| overrides", len(ov))
if len(code) > 50000:
    print("WARNING: over 50,000 characters; split the batch")
