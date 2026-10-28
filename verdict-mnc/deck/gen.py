# ===== HARVESTBOX DECK GEN v2 =====
"""Deck generator. Stage 2 only. Run from the repo root (nsut-innovators-court):
  python -X utf8 verdict-mnc/deck/gen.py pre     build deck/preamble.js and copy the offline mock
  python -X utf8 verdict-mnc/deck/gen.py mock    apply overrides.json, then dry-run all 8 slides against the mock Figma API
  python -X utf8 verdict-mnc/deck/gen.py bind    write build/slide_NN.js, v1_NN.js, v1_all.js, sweeps.js, logos.js with the real slide ids"""
import io, json, subprocess, sys, pathlib, shutil
DECK = pathlib.Path(__file__).resolve().parent; ROOT = DECK.parents[1]; N = "\n"
LIB = ROOT / "swasthyagrid-gcp" / "nexora" / "deck" / "preamble.js"; MOCK = ROOT / "yuva-yodha" / "deck" / "mock_figma.js"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def wr(p, t): p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline=N).write(t); print("wrote", p.name, len(t))
def pre():
    t = rd(LIB); a = t.index("const C = {"); b = t.index("};", a) + 2
    for f in ("function skeleton2(", "function lineChart(", "function grid(", "function gantt(", "function tornado(", "function logoSlot(", "function layered(", "function panel(", "function vBars(", "function hBars("):
        assert t.count(f) == 1, f
    wr(DECK / "preamble.js", t[:a] + rd(DECK / "_palette.js").strip() + t[b:] + N + rd(DECK / "_extras.js")); shutil.copyfile(MOCK, DECK / "mock_figma.js")
def derive():
    """Apply deck/overrides.json ({"exact old string": "new string"}) to the slide files and write deck/derived/sNN.js."""
    ovp = DECK / "overrides.json"; ov = json.loads(rd(ovp)) if ovp.exists() else {}; used = set()
    for n in range(1, 9):
        s = rd(DECK / "slides" / ("s%02d.js" % n))
        for a, b in ov.items():
            if a in s: s = s.replace(a, b); used.add(a)
        wr(DECK / "derived" / ("s%02d.js" % n), s)
    miss = [a for a in ov if a not in used]
    print("overrides", len(ov), "unused", miss); assert not miss, "an override key matches no slide text"
def mock():
    derive(); ok = True
    for n in range(1, 9):
        r = subprocess.run(["node", "mock_figma.js", "preamble.js", "values.js", "derived/s%02d.js" % n], cwd=DECK, capture_output=True, text=True, encoding="utf-8")
        good = "warnings: []" in r.stdout and "ISSUES 0" in r.stdout; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", "|", " | ".join(l.strip() for l in (r.stdout + r.stderr).splitlines() if l.strip())[:1200].encode("ascii", "replace").decode())
    sys.exit(0 if ok else 1)
def bind():
    derive(); ids = json.loads(rd(DECK / "slide-ids.json")); p = rd(DECK / "preamble.js"); vals = rd(DECK / "values.js"); V = json.loads(vals[len("const V = "):].rstrip().rstrip(";"))
    v1 = rd(DECK / "_v1.js"); sw = rd(DECK / "_sweeps.js"); assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1
    must = [V["be"], V["lc24"], V["cac24"], V["leaver_loss"], V["be_skip"], "HARVESTBOX", "THANK YOU", V["team"]["name"]] + [r[0] for r in V["team"]["rows"]] + ["Motilal Nehru College", "CONCLUSIVELY", "THEREFORE"]
    for n in range(1, 9):
        s = rd(DECK / "derived" / ("s%02d.js" % n)); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) == 1, n
        code = p + N + vals + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % ids["S%d" % n]) + N + "return {results,warnings};" + N
        assert len(code) < 50000, (n, len(code)); wr(DECK / "build" / ("slide_%02d.js" % n), code)
        wr(DECK / "build" / ("v1_%02d.js" % n), v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in range(1, 9)])
    wr(DECK / "build" / "v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr(DECK / "build" / "sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(must, ensure_ascii=False)))
    wr(DECK / "build" / "logos.js", "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.findAll(n=>n.name.startsWith('LOGO: ')).forEach(n=>out.push({slide:s.name,id:n.id,name:n.name,w:Math.round(n.width),h:Math.round(n.height)})); } return out;" % allids)
if __name__ == "__main__": {"pre": pre, "mock": mock, "bind": bind}[sys.argv[1]]()
