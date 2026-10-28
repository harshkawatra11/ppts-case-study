# ===== SWIFTKART DECK GEN v1 + R2 =====
"""Deck generator, version 2. Every v1 command still works; v2 adds the redesign pipeline for slides 2, 3 and 5.
PY is "C:\\Users\\harsh\\AppData\\Local\\Programs\\Python\\Python312\\python.exe" -X utf8. Run from anywhere:
  PY beyondtech-dcg/deck/gen.py pre          build preamble.js, mock_figma.js and values.js
  PY beyondtech-dcg/deck/gen.py mock 2 3 5   dry-run the listed slides on the offline mock; exit 1 on any issue (no list = all 11)
  PY beyondtech-dcg/deck/gen.py bind 2 3 5   write build/slide_NN.js and build/v1_NN.js for the listed slides (no list = all 11),
                                             and always rewrite build/v1_all.js, build/sweeps.js and build/slots.js
Slides listed in X2 get deck/_x2.js appended after the preamble, and the mock measures their text with the real glyph
advance widths in deck/metrics.json (times 1.02) instead of the v1 class averages."""
import io, json, re, subprocess, sys, pathlib
DECK = pathlib.Path(__file__).resolve().parent; BT = DECK.parent; ROOT = BT.parent; N = "\n"; NS = 7
LIB = ROOT / "verdict-mnc" / "deck" / "preamble.js"; MOCKSRC = ROOT / "verdict-mnc" / "deck" / "mock_figma.js"
X2 = (1, 2, 3, 4, 5, 6, 7)  # glyph metrics and rail helpers on every slide
X3 = (2, 3, 4, 5)  # R2 helpers (_x3.js) on the redesigned slides
ROT = ('Object.defineProperty(Node.prototype, "relativeTransform", { set(m) { this._rt = m; '
       'if (this.type === "TEXT" && Math.abs(m[0][0]) < 1e-6) { const w = this.width, h = this.height; this.x = m[0][2]; this.y = m[1][2] - w; this.width = h; this.height = w; } }, '
       'get() { return this._rt; } });')
MEM = None  # the planning-time dry run sets this to a dict so that nothing touches the disk
def rdx(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def has(rel): return (MEM is not None and rel in MEM) or (DECK / rel).exists()
def rd(rel): return MEM[rel] if (MEM is not None and rel in MEM) else rdx(DECK / rel)
def wr(rel, t, quiet=False):
    if MEM is not None: MEM[rel] = t
    else:
        p = DECK / rel; p.parent.mkdir(parents=True, exist_ok=True); io.open(p, "w", encoding="utf-8", newline=N).write(t)
    if not quiet: print("wrote", rel, len(t))
def vals(): return json.loads(rd("values.js")[len("const V = "):].rstrip().rstrip(";"))
def r2mock(m):
    for a, b in [
        ('if (measure(cand, fam, size) <= width || !line) line = cand; else { out.push(line); line = wd; } }',
         'if (measure(cand, fam, size) <= width) line = cand; else { if (line) out.push(line); line = wd; let k = Math.ceil(measure(wd, fam, size) / Math.max(1, width)); while (k-- > 1) out.push(wd); } }'),
        ('setRangeFontName() {}', 'setRangeFontName(a, b, f) { if (f && f.style === "Bold") { this._bold = true; this._reflow(); } }'),
        ('_fam() { return this.fontName.family + "|" + this.fontName.style; }',
         '_fam() { return this.fontName.family + "|" + (this._bold && this.fontName.family === "Inter" ? "Bold" : this.fontName.style); }'),
        ('/BIBLIO|FINEPRINT/.test(t.name || "")', '/BIBLIO|FINEPRINT/.test(t.name || "") || (t.name === "SEC" && t.fontSize >= 18)')]:
        assert m.count(a) == 1, ("r2mock", a[:50], m.count(a)); m = m.replace(a, b)
    return m
def pre():
    t = rdx(LIB)
    for f in ("const C = {", "const HG=[", "function skeleton2(", "function lineChart(", "function grid(", "function gantt(", "function tornado(", "function logoSlot(", "function layered(",
              "function panel(", "function vBars(", "function hBars(", "function wrapTable(", "function waterfall(", "function teamTableN(", "function segBar(", "function rt(", "function wipe(", "function srcLine("):
        assert t.count(f) == 1, f
    pal = rd("_palette.js").strip(); k = pal.index("const HG=["); a = t.index("const C = {"); b = t.index("};", a) + 2; h0 = t.index("const HG=["); h1 = t.index("];", h0) + 2
    wr("preamble.js", t[:a] + pal[:k].strip() + t[b:h0] + pal[k:] + t[h1:] + N + rd("_extras.js"))
    m, c1 = re.subn(r"const \[pre, vals, slide, num\] = process\.argv\.slice\(2\);\nconst code = [^\n]*\n", "const code = CODE_JSON;\n", rdx(MOCKSRC))
    c2 = m.count("/LOGO:/.test("); m = m.replace("/LOGO:/.test(", "/LOGO:|IMG:/.test(")
    adv = rd("metrics.json").strip(); assert set(json.loads(adv)) == {"Poppins|Bold", "Poppins|ExtraBold", "Inter|Semi Bold", "Inter|Bold"}
    c3 = m.count("function cw(ch, fam) {"); c4 = m.count("let warnings_global = [];")
    m = m.replace("function cw(ch, fam) {", "const ADV = " + adv + ";\nfunction cw(ch, fam) { const a = EXACT_FLAG ? ADV[fam] : null; if (a && a[ch] !== undefined) return a[ch] * 1.02;")
    m = m.replace("let warnings_global = [];", ROT + "\nlet warnings_global = [];")
    assert c1 == 1 and c2 == 1 and c3 == 1 and c4 == 1 and "for (let i = 1; i <= 11; i++)" in m, (c1, c2, c3, c4); m = r2mock(m); wr("mock_figma.js", m)
    g = {"__name__": "make_values"}; exec(compile(rd("make_values.py"), "make_values.py", "exec"), g)
    O = json.loads(rdx(BT / "model" / "model_outputs.json")); V = g["build"](O)
    if has("values_ext.py"):
        e = {"__name__": "values_ext"}; exec(compile(rd("values_ext.py"), "values_ext.py", "exec"), e); old = json.dumps(V, ensure_ascii=False, sort_keys=True); keys = set(V)
        e["extend"](V, O, g); assert json.dumps({k: V[k] for k in keys}, ensure_ascii=False, sort_keys=True) == old, "values_ext.py changed an existing key"
    wr("values.js", "const V = " + json.dumps(V, ensure_ascii=False) + ";")
def derive(only=None):
    """Apply deck/overrides.json ({"exact old string": "new string"}) to the slide files and write deck/derived/sNN.js."""
    ov = json.loads(rd("overrides.json")) if has("overrides.json") else {}; used = set()
    for n in range(1, NS + 1):
        s = rd("slides/s%02d.js" % n)
        for a, b in ov.items():
            if a in s: s = s.replace(a, b); used.add(a)
        wr("derived/s%02d.js" % n, s, True)
    miss = [a for a in ov if a not in used]; print("overrides", len(ov), "unused", miss); assert not miss, "an override key matches no slide text"
def compose(n, sid, part=None):
    p = rd("preamble.js") + ((N + rd("_x2.js")) if n in X2 else "") + ((N + rd("_x3.js")) if (n in X3 and has("_x3.js")) else ""); s = rd("derived/s%02d.js" % n); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) >= 1, n
    if part is not None: s = s.split(SPLIT)[part]
    V = vals(); keys = set(re.findall(r"\bV\.([A-Za-z_][A-Za-z0-9_]*)", p + s)); miss = keys - set(V); assert not miss, ("unknown V keys", n, miss)
    sub = "const V = " + json.dumps({k: V[k] for k in V if k in keys}, ensure_ascii=False) + ";"
    return p + N + sub + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % sid) + N + "return {results,warnings};" + N
SPLIT = "// ===== PART 2 ====="
def parts(n, sid):
    s = rd("derived/s%02d.js" % n)
    return [compose(n, sid, i) for i in range(2)] if SPLIT in s else [compose(n, sid)]
def mock(only=None):
    derive(only); ok = True; m = rd("mock_figma.js")
    for n in range(1, NS + 1):
        if only and n not in only: continue
        code = compose(n, "S%d" % n)
        r = subprocess.run(["node", "-"], input=m.replace("EXACT_FLAG", "true" if n in X2 else "false").replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        out = r.stdout + r.stderr; lens = [len(c) for c in parts(n, "S%d" % n)]; good = "warnings: []" in out and "ISSUES 0" in out and max(lens) < 49900; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", lens, "|", " | ".join(l.strip() for l in out.splitlines() if l.strip())[:(200 if good else 6000)].encode("ascii", "replace").decode())
    return ok
def bind(only=None):
    derive(); ids = json.loads(rd("slide-ids.json")); V = vals(); v1 = rd("_v1.js"); sw = rd("_sweeps.js")
    assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1 and len(ids) == NS
    for n in range(1, NS + 1):
        if only and n not in only: continue
        cs = parts(n, ids["S%d" % n])
        for i, code in enumerate(cs):
            assert len(code) < 50000, (n, i, len(code)); wr(("build/slide_%02d.js" % n) if len(cs) == 1 else ("build/slide_%02d_%d.js" % (n, i + 1)), code)
        wr("build/v1_%02d.js" % n, v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in range(1, NS + 1)])
    wr("build/v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr("build/sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(V["must"], ensure_ascii=False)))
    wr("build/slots.js", "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.findAll(n=>n.name.startsWith('LOGO: ')||n.name.startsWith('IMG: ')).forEach(n=>out.push({slide:s.name,id:n.id,name:n.name,w:Math.round(n.width),h:Math.round(n.height)})); } return out;" % allids)
def main(a):
    only = set(int(x) for x in a[1:]) or None
    if a[0] == "pre": pre()
    elif a[0] == "mock": sys.exit(0 if mock(only) else 1)
    elif a[0] == "bind": bind(only)
if __name__ == "__main__": main(sys.argv[1:])
