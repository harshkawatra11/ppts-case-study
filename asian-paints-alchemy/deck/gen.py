# ===== ALCHEMY DECK GEN v1 (from the Space and Beyond gen, itself from the SwiftKart gen with R2) =====
"""Deck generator for the Asian Paints master file. Run from the repo root with python -X utf8.
  python -X utf8 asian-paints-alchemy/deck/gen.py pre          build preamble.js, mock_figma.js and values.js
  python -X utf8 asian-paints-alchemy/deck/gen.py mock 2 3     dry-run the listed slides on the offline mock (no list = slides 2 to 9)
  python -X utf8 asian-paints-alchemy/deck/gen.py bind 2 3     write build/slide_NN.js (or _1, _2 parts) and build/v1_NN.js; always
                                                               rewrite v1_all.js, sweeps.js and slots.js
  python -X utf8 asian-paints-alchemy/deck/gen.py copy         write deck/slide-copy.md (every text node on slides 2 to 9) and check it
  python -X utf8 asian-paints-alchemy/deck/gen.py preview 2 3  offline previews over the template image in deck/shots/ (needs Pillow and fontTools)
Slide 1 is the Asian Paints cover supplied by the organisers. It has no script and is never touched."""
import io, json, re, subprocess, sys, pathlib
try: DECK = pathlib.Path(__file__).resolve().parent
except NameError: DECK = pathlib.Path("asian-paints-alchemy/deck").resolve()
AP = DECK.parent; ROOT = AP.parent; N = "\n"; NS = 9; BUILT = tuple(range(2, NS + 1))
LIB = ROOT / "verdict-mnc" / "deck" / "preamble.js"; MOCKSRC = ROOT / "verdict-mnc" / "deck" / "mock_figma.js"
SB = ROOT / "swasthyagrid-gcp" / "space-beyond" / "deck"          # read-only source of _x2.js, _x3.js, _extras.js, metrics.json
ROT = ('Object.defineProperty(Node.prototype, "relativeTransform", { set(m) { this._rt = m; '
       'if (this.type === "TEXT" && Math.abs(m[0][0]) < 1e-6) { const w = this.width, h = this.height; this.x = m[0][2]; this.y = m[1][2] - w; this.width = h; this.height = w; } }, '
       'get() { return this._rt; } });')
BANW = ["here's", "let's", "bottom line", "delve", "game-changer", "game changer", "unlock", "it's not just", "make no mistake", "landscape",
        "robust", "seamless", "holistic", "tapestry", "paradigm", "navigate", "revolutioni", "cutting-edge", "leverage", "empower",
        "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge", "harness",
        "crucial", "pivotal", "furthermore", "moreover", "in today's", "ever-evolving", "imagine", "ecosystem", "testament", "elevate",
        "what if", "picture this", "dive into", "groundbreaking", "state-of-the-art", "plethora", "myriad", "underscore", "showcase",
        "foster", "bolster", "spearhead", "nuanced", "intricate", "meticulous", "realm", "fast-paced", "in conclusion",
        "it is important to note", "revolutionary", "breakthrough"]
ABSENT = ["Dayita", "Gursimran", "SwiftKart", "SwasthyaGrid", "HarvestBox", "Dream11", "Paytm", "Liminal", "Perennial", "Setu", "Satoshi",
          "TODO", "TBD", "Lorem", "xyz", "undefined", "NaN", "Rs ", "Rs.", "ChatGPT", "proven in the field", "commercially proven"]
TEAM = {"name": "TEAM IDEAFORGE", "rows": [["Harsh Kawatra", "Delhi Technological University (DTU)", "Team Leader"],
                                          ["Anuj Gambhir", "Delhi Technological University (DTU)", "Member"]]}
MUST = ["39%", "24.8 g", "40.8 g", "0.998", "90.7", "₹18.4", "₹12.0", "15%", "65%", "₹298 Cr", "7,551 t", "13 of 13", "b377745d37"]
MEM = None  # the planning-time harness sets this to a dict so that nothing touches the disk
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
    for f in ("const C = {", "const HG=[", "function lineChart(", "function logoSlot(", "function layered(", "function panel(", "function vBars(",
              "function hBars(", "function waterfall(", "function rt(", "function wipe(", "function srcLine(", "function measureW("):
        assert t.count(f) == 1, f
    for f in ("_x2.js", "_x3.js", "metrics.json"): wr(f, rdx(SB / f), True)
    ext = rdx(SB / "_extras.js"); assert ext.count("function teamBT(") == 1 and ext.count("function actor(") == 1
    pal = rd("_palette.js").strip(); k = pal.index("const HG=["); a = t.index("const C = {"); b = t.index("};", a) + 2; h0 = t.index("const HG=["); h1 = t.index("];", h0) + 2
    wr("preamble.js", t[:a] + pal[:k].strip() + t[b:h0] + pal[k:] + t[h1:] + N + ext + N + rd("_ap.js"))
    m, c1 = re.subn(r"const \[pre, vals, slide, num\] = process\.argv\.slice\(2\);\nconst code = [^\n]*\n", "const code = CODE_JSON;\n", rdx(MOCKSRC))
    c2 = m.count("/LOGO:/.test("); m = m.replace("/LOGO:/.test(", "/LOGO:|IMG:/.test(")
    adv = rd("metrics.json").strip(); assert set(json.loads(adv)) == {"Poppins|Bold", "Poppins|ExtraBold", "Inter|Semi Bold", "Inter|Bold"}
    c3 = m.count("function cw(ch, fam) {"); c4 = m.count("let warnings_global = [];")
    m = m.replace("function cw(ch, fam) {", "const ADV = " + adv + ";\nfunction cw(ch, fam) { const a = ADV[fam]; if (a && a[ch] !== undefined) return a[ch] * 1.02;")
    m = m.replace("let warnings_global = [];", ROT + "\nlet warnings_global = [];")
    assert c1 == 1 and c2 == 1 and c3 == 1 and c4 == 1 and "for (let i = 1; i <= 11; i++)" in m, (c1, c2, c3, c4); m = r2mock(m); wr("mock_figma.js", m)
    V = json.loads(rd("values.json")); V["team"] = TEAM; V["must"] = MUST
    wr("values.js", "const V = " + json.dumps(V, ensure_ascii=False) + ";")
def derive(only=None):
    """Apply deck/overrides.json ({"exact old string": "new string"}) to the slide files and write deck/derived/sNN.js."""
    ov = json.loads(rd("overrides.json")) if has("overrides.json") else {}; used = set()
    for n in BUILT:
        s = rd("slides/s%02d.js" % n)
        for a, b in ov.items():
            if a in s: s = s.replace(a, b); used.add(a)
        wr("derived/s%02d.js" % n, s, True)
    miss = [a for a in ov if a not in used]; assert not miss, ("an override key matches no slide text", miss)
SPLIT = "// ===== PART ====="   # a slide may be split into any number of parts; each part re-reads the slide by id and never wipes
def compose(n, sid, part=None):
    p = rd("preamble.js") + N + rd("_x2.js") + N + rd("_x3.js"); s = rd("derived/s%02d.js" % n); old = 'getNodeByIdAsync("S%d")' % n; assert s.count(old) >= 1, n
    if part is not None: s = s.split(SPLIT)[part]
    V = vals(); keys = set(re.findall(r"\bV\.([A-Za-z_][A-Za-z0-9_]*)", p + s)); miss = keys - set(V); assert not miss, ("unknown V keys", n, miss)
    sub = "const V = " + json.dumps({k: V[k] for k in V if k in keys}, ensure_ascii=False) + ";"
    return p + N + sub + N + "const results=[];" + N + s.replace(old, 'getNodeByIdAsync("%s")' % sid) + N + "return {results,warnings};" + N
def parts(n, sid):
    s = rd("derived/s%02d.js" % n); k = s.count(SPLIT)
    return [compose(n, sid, i) for i in range(k + 1)] if k else [compose(n, sid)]
# A node that leaves its parent frame by more than 1 px is flagged (rotated rail labels excepted).
CHK = ("const __S=await figma.getNodeByIdAsync('S%d'); for(const q of __S.findAll(()=>true)){ const p=q.parent; if(!p||p.type==='SLIDE'||q._rt) continue; "
       "if(q.x<-1||q.y<-1||q.x+q.width>p.width+1||q.y+q.height>p.height+1) warnings.push('childOut: '+String(q.name||q.type).slice(0,30)+' in '+String(p.name||'').slice(0,40)+' at '+Math.round(q.x)+','+Math.round(q.y)+' size '+Math.round(q.width)+'x'+Math.round(q.height)+' parent '+Math.round(p.width)+'x'+Math.round(p.height)); }")
def mock(only=None):
    derive(only); ok = True; m = rd("mock_figma.js")
    for n in BUILT:
        if only and n not in only: continue
        code = compose(n, "S%d" % n).replace("return {results,warnings};", (CHK % n) + N + "return {results,warnings};")
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        out = r.stdout + r.stderr; lens = [len(c) for c in parts(n, "S%d" % n)]; good = "warnings: []" in out and "ISSUES 0" in out and max(lens) < 49900; ok = ok and good
        print("s%02d" % n, "OK" if good else "FAIL", lens, "|", " | ".join(l.strip() for l in out.splitlines() if l.strip())[:(220 if good else 6000)].encode("ascii", "replace").decode())
    return ok
def bind(only=None):
    derive(); ids = json.loads(rd("slide-ids.json")); V = vals(); v1 = rd("_v1.js"); sw = rd("_sweeps.js")
    assert v1.count("const ids=IDS;") == 1 and sw.count("const ids=IDS;") == 1 and sw.count("MUSTLIST") == 1 and len(ids) == NS
    for n in BUILT:
        if only and n not in only: continue
        cs = parts(n, ids["S%d" % n])
        for i, code in enumerate(cs):
            assert len(code) < 50000, (n, i, len(code)); wr(("build/slide_%02d.js" % n) if len(cs) == 1 else ("build/slide_%02d_%d.js" % (n, i + 1)), code)
        wr("build/v1_%02d.js" % n, v1.replace("const ids=IDS;", "const ids=%s;" % json.dumps([ids["S%d" % n]])))
    allids = json.dumps([ids["S%d" % n] for n in BUILT])
    wr("build/v1_all.js", v1.replace("const ids=IDS;", "const ids=%s;" % allids))
    wr("build/sweeps.js", sw.replace("const ids=IDS;", "const ids=%s;" % allids).replace("MUSTLIST", json.dumps(V["must"], ensure_ascii=False)))
    wr("build/slots.js", "const ids=%s; const out=[]; for(const id of ids){ const s=await figma.getNodeByIdAsync(id); s.findAll(n=>n.name.startsWith('LOGO: ')||n.name.startsWith('IMG: ')).forEach(n=>out.push({slide:s.name,id:n.id,name:n.name,w:Math.round(n.width),h:Math.round(n.height)})); } return out;" % allids)
def copy():
    derive(); m = rd("mock_figma.js"); out = ["# Slide copy: every text node on slides 2 to 9, read from the offline mock", ""]; bad = []
    for n in BUILT:
        dump = "const __s=await figma.getNodeByIdAsync('S%d'); console.log('@@T'+JSON.stringify(__s.findAll(q=>q.type==='TEXT').map(t=>t.characters)));" % n
        code = compose(n, "S%d" % n).replace("return {results,warnings};", dump + N + "return {results,warnings};")
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        tl = [l for l in r.stdout.splitlines() if l.startswith("@@T")]; texts = json.loads(tl[0][3:]) if tl else ["(no output)"]
        out += ["## S%d" % n, ""] + ["%d. %s" % (i + 1, x.replace("\n", " / ")) for i, x in enumerate(texts)] + [""]
        for x in texts:
            low = x.lower()
            if re.search("[—–]", x): bad.append((n, "dash", x[:60]))
            if "?" in x or "!" in x: bad.append((n, "question or exclamation", x[:60]))
            bad += [(n, "banned " + b, x[:60]) for b in BANW if b in low]
            bad += [(n, "absent " + a, x[:60]) for a in ABSENT if a in x]
    wr("slide-copy.md", N.join(out) + N); print("copy issues", len(bad))
    for b in bad: print("  ", b)
    return not bad
def preview(only=None):
    """Offline layout preview over the real template image: deck/shots/preview_NN.png (layout check only)."""
    import importlib.util, types
    from PIL import Image
    spec = importlib.util.spec_from_file_location("pv", SB / "preview.py"); pv = importlib.util.module_from_spec(spec); spec.loader.exec_module(pv)
    bg = Image.open(AP / "raw" / "Case & Submission_Submission Inside (1).jpg").convert("RGB").resize((1920, 1080))
    F = pv.Fonts(json.loads(rd("metrics.json"))); m = rd("mock_figma.js"); i = m.rindex("})();"); m = m[:i] + pv.DUMP + m[i:]; derive()
    for n in BUILT:
        if only and n not in only: continue
        r = subprocess.run(["node", "-"], input=m.replace("CODE_JSON", json.dumps(compose(n, "S%d" % n))), capture_output=True, text=True, encoding="utf-8")
        tj = [l for l in r.stdout.splitlines() if l.startswith("TREE_JSON")]
        if not tj: print("no tree for slide", n); continue
        img = bg.copy()
        for k in json.loads(tj[0][9:])["k"]: pv.draw(img, F, k, 0, 0)
        out = DECK / "shots" / ("preview_%02d.png" % n); out.parent.mkdir(parents=True, exist_ok=True); img.save(out); print("wrote", out)
def main(a):
    only = set(int(x) for x in a[1:]) or None
    if a[0] == "preview": preview(only)
    if a[0] == "pre": pre()
    elif a[0] == "mock": sys.exit(0 if mock(only) else 1)
    elif a[0] == "bind": bind(only)
    elif a[0] == "copy": sys.exit(0 if copy() else 1)
if __name__ == "__main__": main(sys.argv[1:])
