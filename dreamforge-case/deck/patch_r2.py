"""Round-2 tooling patch (PLAN-R2.md section 5.1). Run once: PY dreamforge-case/deck/patch_r2.py
Every anchor string must occur exactly once. patch(read, write) takes two callables so the planning harness can apply
the same edits in memory. Paths starting with ../ are relative to the deck folder (the research assembler)."""
import io, pathlib
D = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path("dreamforge-case/deck")

R2MOCK = '''def r2mock(m):
    for a, b in [
        ('if (measure(cand, fam, size) <= width || !line) line = cand; else { out.push(line); line = wd; } }',
         'if (measure(cand, fam, size) <= width) line = cand; else { if (line) out.push(line); line = wd; let k = Math.ceil(measure(wd, fam, size) / Math.max(1, width)); while (k-- > 1) out.push(wd); } }'),
        ('setRangeFontName() {}', 'setRangeFontName(a, b, f) { if (f && f.style === "Bold") { this._bold = true; this._reflow(); } }'),
        ('_fam() { return this.fontName.family + "|" + this.fontName.style; }',
         '_fam() { return this.fontName.family + "|" + (this._bold && this.fontName.family === "Inter" ? "Bold" : this.fontName.style); }'),
        ('/BIBLIO|FINEPRINT/.test(t.name || "")', '/BIBLIO|FINEPRINT/.test(t.name || "") || (t.name === "SEC" && t.fontSize >= 18)')]:
        assert m.count(a) == 1, ("r2mock", a[:50], m.count(a)); m = m.replace(a, b)
    return m
'''

PARTS = '''SPLIT = "// ===== PART 2 ====="
def parts(n, sid):
    s = rd("derived/s%02d.js" % n)
    return [compose(n, sid, i) for i in range(2)] if SPLIT in s else [compose(n, sid)]
'''

def patch(read, write):
    def sub(rel, old, new):
        t = read(rel); assert t.count(old) == 1, (rel, old[:70], t.count(old)); write(rel, t.replace(old, new)); print("patched", rel, "|", old[:50])
    sub("gen.py", "# ===== SWIFTKART DECK GEN v1 =====", "# ===== SWIFTKART DECK GEN v1 + R2 =====")
    sub("gen.py", "X2 = (1, 2, 3, 4, 5, 6, 7)  # glyph metrics and rail helpers on every slide",
        "X2 = (1, 2, 3, 4, 5, 6, 7)  # glyph metrics and rail helpers on every slide\nX3 = (2, 3, 4, 5)  # R2 helpers (_x3.js) on the redesigned slides")
    sub("gen.py", "def pre():", R2MOCK + "def pre():")
    sub("gen.py", 'in m, (c1, c2, c3, c4); wr("mock_figma.js", m)', 'in m, (c1, c2, c3, c4); m = r2mock(m); wr("mock_figma.js", m)')
    sub("gen.py", 'def compose(n, sid):\n    p = rd("preamble.js") + ((N + rd("_x2.js")) if n in X2 else ""); s = rd("derived/s%02d.js" % n); old = \'getNodeByIdAsync("S%d")\' % n; assert s.count(old) == 1, n',
        'def compose(n, sid, part=None):\n    p = rd("preamble.js") + ((N + rd("_x2.js")) if n in X2 else "") + ((N + rd("_x3.js")) if (n in X3 and has("_x3.js")) else ""); s = rd("derived/s%02d.js" % n); old = \'getNodeByIdAsync("S%d")\' % n; assert s.count(old) >= 1, n\n    if part is not None: s = s.split(SPLIT)[part]')
    sub("gen.py", "def mock(only=None):", PARTS + "def mock(only=None):")
    sub("gen.py", 'out = r.stdout + r.stderr; good = "warnings: []" in out and "ISSUES 0" in out and len(code) < 49900; ok = ok and good\n        print("s%02d" % n, "OK" if good else "FAIL", len(code), "|",',
        'out = r.stdout + r.stderr; lens = [len(c) for c in parts(n, "S%d" % n)]; good = "warnings: []" in out and "ISSUES 0" in out and max(lens) < 49900; ok = ok and good\n        print("s%02d" % n, "OK" if good else "FAIL", lens, "|",')
    sub("gen.py", '        code = compose(n, ids["S%d" % n]); assert len(code) < 50000, (n, len(code)); wr("build/slide_%02d.js" % n, code)',
        '        cs = parts(n, ids["S%d" % n])\n        for i, code in enumerate(cs):\n            assert len(code) < 50000, (n, i, len(code)); wr(("build/slide_%02d.js" % n) if len(cs) == 1 else ("build/slide_%02d_%d.js" % (n, i + 1)), code)')
    sub("_sweeps.js", 'let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||t.name==="BIBLIO"||c.startsWith("Source:");',
        'let ok=t.name==="SOURCE"||t.name==="FINEPRINT"||t.name==="BIBLIO"||c.startsWith("Source:")||(t.name==="SEC"&&t.fontSize>=18);')
    t = read("../research/assemble.py"); n = t.count("R[A-H]"); assert n == 4, ("assemble R[A-H]", n)
    assert t.count('for x in "ABCDEFG"]') == 1
    write("../research/assemble.py", t.replace("R[A-H]", "R[A-I]").replace('for x in "ABCDEFG"]', 'for x in "ABCDEFGH"]')); print("patched ../research/assemble.py | R[A-I], parts A to H")
    print("patch_r2 done")

if __name__ == "__main__":
    def rd(rel): return io.open((D / rel).resolve(), encoding="utf-8").read().replace("\r", "")
    def wr(rel, t): io.open((D / rel).resolve(), "w", encoding="utf-8", newline="\n").write(t)
    patch(rd, wr)
