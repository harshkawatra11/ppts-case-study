# Trim the preamble of each bound slide to the helpers its code reaches, merge the slide's parts into one script,
# and re-run the merged script through the offline mock. Writes build/one_NN.js. Run from the repo root.
import io, json, re, subprocess, sys, pathlib
sys.path.insert(0, "casequest-usme/deck")
import gen  # noqa: E402
D = pathlib.Path("casequest-usme/deck"); B = D / "build"
ids = json.loads((D / "slide-ids.json").read_text(encoding="utf-8"))
START = re.compile(r"^(function |const |let |await )")
def blocks(pre):
    out, cur = [], []
    for line in pre.split("\n"):
        if START.match(line):
            if cur: out.append("\n".join(cur))
            cur = [line]
        elif line.startswith("//") or not line.strip():
            continue
        else:
            cur.append(line)
    if cur: out.append("\n".join(cur))
    return out
def name(b):
    m = re.match(r"^(?:function|const|let) ([A-Za-z_$][\w$]*)", b); return m.group(1) if m else None
def trim(pre, body):
    bl = blocks(pre); keep = [False] * len(bl); text = body
    for i, b in enumerate(bl):
        if name(b) in (None, "C", "warnings", "HG", "HR"): keep[i] = True; text += "\n" + b
    changed = True
    while changed:
        changed = False
        for i, b in enumerate(bl):
            n = name(b)
            if not keep[i] and n and re.search(r"(?<![\w$.])" + re.escape(n) + r"(?![\w$])", text):
                keep[i] = True; text += "\n" + b; changed = True
    return "\n".join(b for i, b in enumerate(bl) if keep[i])
m = (D / "mock_figma.js").read_text(encoding="utf-8")
for n in range(1, 7):
    files = sorted(B.glob("slide_%02d*.js" % n)); V = {}; bodies = []; pre = None
    for f in files:
        t = f.read_text(encoding="utf-8"); i = t.index("\nconst V = "); pre = pre or t[:i]
        vline_end = t.index("\n", i + 1); V.update(json.loads(t[i + len("\nconst V = "):vline_end].rstrip(";")))
        body = t[t.index("const results=[];", vline_end) + len("const results=[];"):t.rindex("return {results,warnings};")]
        bodies.append(body.strip())
    body = "\n".join(bodies)
    code = trim(pre, body) + "\nconst V = " + json.dumps(V, ensure_ascii=False) + ";\nconst results=[];\n" + body + "\nreturn {results,warnings};"
    (B / ("one_%02d.js" % n)).write_text(code, encoding="utf-8")
    mc = code.replace('getNodeByIdAsync("%s")' % ids["S%d" % n], 'getNodeByIdAsync("S%d")' % n).replace("return {results,warnings};", (gen.CHK % n) + "\nreturn {results,warnings};")
    r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(mc)), capture_output=True, text=True, encoding="utf-8")
    out = r.stdout + r.stderr
    good = "warnings: []" in out and "ISSUES 0" in out
    print("one_%02d" % n, len(code), "OK" if good else "FAIL", out.strip()[:300].encode("ascii", "replace").decode())
