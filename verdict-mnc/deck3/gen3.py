# ===== HARVESTBOX DECK V3 GEN =====
import io, os, re, json, sys, subprocess, pathlib
D = pathlib.Path(__file__).resolve().parent
BASE = D.parent.parent / "nsbc-case" / "deck" / "preamble.js"
N = 8
TEAM = [["Harsh Kawatra", "Delhi Technological University (DTU)", "Team Leader"],
        ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University (GGSIPU)", "Member"],
        ["Dayita Arora", "Ramjas College, University of Delhi (DU)", "Member"]]
NEED = ["skeleton3", "funnel", "matrix2x2", "issueTree", "waffle", "legendV", "planCard", "skipStrip", "kv", "teamTable3", "fine", "wipe",
        "heatmap", "gantt", "waterfall", "donut", "tornado", "gauge", "soWhat", "quoteCard", "numCard", "lineChart", "vBars", "hBars",
        "stackH", "addTable", "RT", "logoSlot", "addArrow", "addLine", "addPoly", "badgeList", "buildRibbon", "layered", "panel"]
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def wr(p, s): p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline="\n").write(s)
def pre():
    b = rd(BASE)
    a = b.index("const C = {"); z = b.index("};", a) + 2
    b = b[:a] + rd(D / "lib" / "palette.js").strip() + b[z:]
    a = b.index("const TEAM="); z = b.index("\n", a)
    b = b[:a] + "const TEAM=" + json.dumps(TEAM, ensure_ascii=False) + ";" + b[z:]
    assert "// ===== END PREAMBLE =====" in b
    b = b.replace("// ===== END PREAMBLE =====", rd(D / "lib" / "extras3.js").strip() + "\n// ===== END PREAMBLE =====")
    kit = rd(D.parent.parent / "deck-system" / "figma-deck-kit.js")
    def function_block(src, name):
        a = src.index("function " + name + "(")
        z = src.index("\nfunction ", a + 1) if "\nfunction " in src[a + 1:] else len(src)
        # Core functions end with their own closing brace before subsequent comments.
        depth = 0; start = src.index("{", a)
        for end in range(start, len(src)):
            if src[end] == "{": depth += 1
            elif src[end] == "}":
                depth -= 1
                if depth == 0: return a, end + 1
        raise ValueError(name)
    for name in ["addFrame", "addRect", "addEllipse", "addText", "addWireH", "addDashedRow"]:
        a, z = function_block(b, name); ka, kz = function_block(kit, name)
        b = b[:a] + kit[ka:kz] + b[z:]
    for f in NEED: assert len(re.findall(r"function " + f + r"\(", b)) == 1, f
    wr(D / "build" / "preamble.js", b); print("preamble", len(b))
def mini(js): return "\n".join(l.strip() for l in js.split("\n") if l.strip() and not l.strip().startswith("//"))
def vals_for(slide_js):
    V = json.loads(rd(D / "values.json")); keys = sorted(set(re.findall(r"\bV\.(\w+)", slide_js)))
    miss = [k for k in keys if k not in V]; assert not miss, miss
    return "const V = " + json.dumps({k: V[k] for k in keys}, ensure_ascii=False) + ";"
def mock():
    k = rd(D / "mock_k.txt").strip() if (D / "mock_k.txt").exists() else "1.06"; ok = True
    for i in range(1, N + 1):
        p = D / "slides" / ("s%02d.js" % i)
        if not p.exists(): print("s%02d MISSING" % i); ok = False; continue
        sj = rd(p); wr(D / "build" / "_v.js", vals_for(sj))
        r = subprocess.run(["node", str(D / "mock_figma.js"), str(D / "build" / "preamble.js"), str(D / "build" / "_v.js"), str(p)],
                           capture_output=True, text=True, encoding="utf-8", env=dict(os.environ, MOCK_K=k))
        good = "warnings: []" in r.stdout and "ISSUES 0" in r.stdout; ok = ok and good
        print("s%02d" % i, "OK" if good else "FAIL", "|", " | ".join(l.strip() for l in (r.stdout + r.stderr).strip().split("\n")[:16]))
    print("ALL OK" if ok else "SOME FAIL")
def bind():
    ids = json.loads(rd(D / "slide-ids.json")); pj = mini(rd(D / "build" / "preamble.js")); allids = [ids["S%d" % i] for i in range(1, N + 1)]
    for i in range(1, N + 1):
        sj = rd(D / "slides" / ("s%02d.js" % i)); sid = ids["S%d" % i]
        assert sj.count('"S%d"' % i) == 1, ("slide id literal", i)
        out = pj + "\n" + vals_for(sj) + "\nconst results=[];\n" + sj.replace('"S%d"' % i, '"%s"' % sid) + "\nreturn {results,warnings};"
        assert len(out) < 49500, ("too long", i, len(out))
        wr(D / "build" / ("slide_%02d.js" % i), out)
        wr(D / "build" / ("v1_%02d.js" % i), rd(D / "lib" / "v1.js").replace("__IDS__", json.dumps([sid])))
        print("slide_%02d.js" % i, len(out))
    wr(D / "build" / "v1_all.js", rd(D / "lib" / "v1.js").replace("__IDS__", json.dumps(allids)))
    wr(D / "build" / "sweeps.js", rd(D / "lib" / "sweeps.js").replace("__IDS__", json.dumps(allids)))
    if (D / "slide-ids.json").exists():
        wr(D / "build" / "probe.js", rd(D / "lib" / "probe.js").replace("__HOST__", ids["S8"]))
if __name__ == "__main__": {"pre": pre, "mock": mock, "bind": bind}[sys.argv[1]]()
