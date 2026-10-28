# ===== URJAGRID GEN =====
"""Generator: reads code and file blocks from the plan and writes the working files. Run from the repo root:
  python yuva-yodha/deck/gen.py init   write every file under yuva-yodha/ from the plan
  python yuva-yodha/deck/gen.py mock   run the offline mock on all 11 slides
  python yuva-yodha/deck/gen.py bind   write build/slide_NN.js, build/v1_NN.js and build/sweeps.js with the real slide ids"""
import io, json, re, subprocess, sys, pathlib, shutil
PLAN = pathlib.Path(r"C:\Users\harsh\.claude\plans\pasted-content-id-123f-working-folder-drifting-cascade.md")
ROOT = pathlib.Path(__file__).resolve().parents[2] if "__file__" in globals() else pathlib.Path(".").resolve()
YY = ROOT / "yuva-yodha"; DECK = YY / "deck"; F = chr(96) * 3; N = "\n"

def plan(): return io.open(PLAN, encoding="utf-8").read().replace("\r", "")
def blocks(t, lang): return [x.split(N + F)[0] for x in t.split(F + lang + N)[1:]]
def pick(bl, key):
    c = [b for b in bl if key in b.split(N)[0]]; assert len(c) == 1, (key, len(c)); return c[0]
def files(t):
    return {m.group(1).strip(): m.group(2).strip(N) + N for m in re.finditer(r"<!-- FILE: ([^\n]+?) -->\n(.*?)\n<!-- END FILE -->", t, re.S)}
def w(path, text):
    path.parent.mkdir(parents=True, exist_ok=True); io.open(path, "w", encoding="utf-8", newline=N).write(text); print("wrote", path.relative_to(ROOT).as_posix(), len(text))
def make_preamble(src, palette, extras):
    t = src.replace("\r", ""); END = "// ===== END PREAMBLE ====="; assert t.count(END) == 1
    t = t[:t.index(END)]; c0 = t.index("const C = {"); c1 = t.index("await Promise.all("); assert c1 > c0
    t = t[:c0] + palette + N + t[c1:]
    drop = tuple("function " + f + "(" for f in ("rs", "rsp", "r1", "r1p", "n1", "n1p", "cr", "crp", "pc", "pv"))
    lines = t.split(N); kept = [l for l in lines if not l.startswith(drop)]; assert len(lines) - len(kept) == 10, len(lines) - len(kept)
    t = N.join(kept)
    for a, b in (("function logoSlot(", "function hBars("), ("function quoteCard(", "function formulaBox("), ("const TEAM=", "function lineChart(")):
        i = t.index(a); j = t.index(b); assert j > i; t = t[:i] + t[j:]
    return t + extras
def slide_blocks(js):
    d = {}
    for b in js:
        m = re.match(r'\{ const s = await figma\.getNodeByIdAsync\("S(\d+)"\)', b)
        if m: d[int(m.group(1))] = b
    assert sorted(d) == list(range(1, 12)), sorted(d); return d

def init():
    t = plan(); js = blocks(t, "js"); py = blocks(t, "python"); fl = files(t)
    for d in ("case", "research/raw", "research/parts", "model", "deck/slides", "deck/build", "deck/shots", "deck/photos", "qa"): (YY / d).mkdir(parents=True, exist_ok=True)
    for key, rel in (("URJAGRID ENGINE EXTRACT", "model/extract_engine.py"), ("URJAGRID IMPACT MODEL", "model/urjagrid_impact_model.py"), ("URJAGRID CHECK VALUES", "model/check_values.py"),
                     ("URJAGRID ASSEMBLE", "research/assemble.py"), ("URJAGRID PDF PATCH", "research/patch_pdf.py")): w(YY / rel, pick(py, key) + N)
    src = io.open(ROOT / "fintechstico-submission/deck/preamble.js", encoding="utf-8").read()
    pre = make_preamble(src, pick(js, "URJAGRID PALETTE"), pick(js, "URJAGRID EXTRAS v1")); print("preamble chars", len(pre))
    w(DECK / "preamble.js", pre); w(DECK / "values.js", pick(js, "const V = {") + N)
    shutil.copyfile(ROOT / "fintechstico-submission/deck/mock_figma.js", DECK / "mock_figma.js")
    for n, b in slide_blocks(js).items(): w(DECK / "slides" / ("s%02d.js" % n), b + N)
    w(DECK / "setup.js", pick(js, "URJAGRID SETUP") + N)
    for name, body in fl.items(): w(YY / name, body)

def mock():
    ok = True
    for n in range(1, 12):
        r = subprocess.run(["node", "mock_figma.js", "preamble.js", "values.js", "slides/s%02d.js" % n], cwd=DECK, capture_output=True, text=True, encoding="utf-8")
        good = "warnings: []" in r.stdout and "ISSUES 0" in r.stdout; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", "|", " | ".join(l.strip() for l in r.stdout.splitlines() if l.startswith(("warnings", "ISSUES", "  [", "RUNTIME"))).encode("ascii", "replace").decode())
    sys.exit(0 if ok else 1)

def bind():
    t = plan(); js = blocks(t, "js"); ids = json.loads((DECK / "slide-ids.json").read_text(encoding="utf-8"))
    pre = (DECK / "preamble.js").read_text(encoding="utf-8"); vals = (DECK / "values.js").read_text(encoding="utf-8")
    v1 = pick(js, "URJAGRID V1"); sw = pick(js, "URJAGRID SWEEPS"); assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1
    for n in range(1, 12):
        s = (DECK / "slides" / ("s%02d.js" % n)).read_text(encoding="utf-8"); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) == 1, n
        code = pre + N + vals + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % ids["S%d" % n]) + N + "return {results,warnings};" + N
        assert len(code) < 50000, (n, len(code)); w(DECK / "build" / ("slide_%02d.js" % n), code)
        w(DECK / "build" / ("v1_%02d.js" % n), v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])) + N)
    allids = json.dumps([ids["S%d" % n] for n in range(1, 12)])
    w(DECK / "build" / "v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids) + N)
    w(DECK / "build" / "sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids) + N)

if __name__ == "__main__": {"init": init, "mock": mock, "bind": bind}[sys.argv[1]]()
