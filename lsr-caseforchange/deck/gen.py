# ===== SETU GEN =====
"""Deck generator. Run from the repo root (nsut-innovators-court):
  python lsr-caseforchange/deck/gen.py pre    build deck/preamble.js and copy the offline mock
  python lsr-caseforchange/deck/gen.py mock   dry-run all 8 slides against the mock Figma API
  python lsr-caseforchange/deck/gen.py bind   write build/slide_NN.js, build/v1_NN.js, build/v1_all.js, build/sweeps.js with the real slide ids"""
import io, json, os, subprocess, sys, pathlib, shutil
DECK = pathlib.Path(__file__).resolve().parent
ROOT = pathlib.Path(os.environ.get("SETU_ROOT", DECK.parents[1])); SRC = ROOT / "yuva-yodha" / "deck"; N = "\n"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def wr(p, t): p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline=N).write(t); print("wrote", p.name, len(t))
def pre():
    t = rd(SRC / "preamble.js"); cut = "// ===== URJAGRID EXTRAS v1 ====="; assert t.count(cut) == 1; t = t[:t.index(cut)]
    c0 = t.index("const C = {"); c1 = t.index("const HO="); assert 0 < c0 < c1
    t = "// ===== SETU PREAMBLE (library from yuva-yodha/deck/preamble.js) =====" + N + rd(DECK / "_palette.js") + t[c1:] + rd(DECK / "_extras.js")
    for f in ("function layered(", "function panel(", "function waterfall(", "function heatmap(", "function gantt(", "function tornado(", "function lineChart(", "function stackV(", "function soWhat(", "function teamTable(", "function hdr(", "function fine("):
        assert t.count(f) == 1, f
    wr(DECK / "preamble.js", t); shutil.copyfile(SRC / "mock_figma.js", DECK / "mock_figma.js")
def mock():
    ok = True
    for n in range(1, 9):
        r = subprocess.run(["node", "mock_figma.js", "preamble.js", "values.js", "slides/s%02d.js" % n], cwd=DECK, capture_output=True, text=True, encoding="utf-8")
        good = "warnings: []" in r.stdout and "ISSUES 0" in r.stdout; ok = ok and good
        lines = [l.strip() for l in (r.stdout + r.stderr).splitlines() if l.strip().startswith(("warnings", "ISSUES", "[", "RUNTIME", "Error", "TypeError", "ReferenceError")) or "nodes" in l]
        print("s%02d" % n, "OK" if good else "FAIL", "|", " | ".join(lines).encode("ascii", "replace").decode())
    sys.exit(0 if ok else 1)
def bind():
    ids = json.loads(rd(DECK / "slide-ids.json")); p = rd(DECK / "preamble.js"); vals = rd(DECK / "values.js"); V = json.loads(vals[len("const V = "):].rstrip().rstrip(";"))
    v1 = rd(DECK / "_v1.js"); sw = rd(DECK / "_sweeps.js"); assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1
    must = [V["s4"]["money"], V["s4"]["money2"], "PROJECT SETU", "2,400", V["team"]["name"]] + [r[0] for r in V["team"]["rows"]] + [r[1] for r in V["team"]["rows"]] + ["month 6", "FINDING", "SO WHAT", "Lady Shri Ram College for Women", "EBITDA: earnings before interest", "BFSI: banking, financial services and insurance", "P: probability"]
    for n in range(1, 9):
        s = rd(DECK / "slides" / ("s%02d.js" % n)); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) == 1, n
        code = p + N + vals + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % ids["S%d" % n]) + N + "return {results,warnings};" + N
        assert len(code) < 50000, (n, len(code)); wr(DECK / "build" / ("slide_%02d.js" % n), code)
        wr(DECK / "build" / ("v1_%02d.js" % n), v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in range(1, 9)])
    wr(DECK / "build" / "v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr(DECK / "build" / "sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(must, ensure_ascii=False)))
if __name__ == "__main__": {"pre": pre, "mock": mock, "bind": bind}[sys.argv[1]]()
