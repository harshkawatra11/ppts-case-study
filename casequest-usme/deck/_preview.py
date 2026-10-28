"""Offline preview of a slide script, drawn from the mock's node tree with the real Poppins and Inter glyph widths.
  PY beyondtech-dcg/deck/preview.py 2 3 5     writes deck/shots/preview_02.png, preview_03.png, preview_05.png
It is a layout check only: no kerning, slightly different hinting; colours and positions are exact. Compare it with the
Figma screenshot of the same slide. A shape or label more than about 10 px away from its preview position is a real
build difference; small differences in where a line of body text wraps are not."""
import io, json, os, sys, pathlib, subprocess, importlib.util
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
DECK = pathlib.Path(__file__).resolve().parent
UF = pathlib.Path(__file__).resolve().parent / "fonts"
FS = pathlib.Path(__file__).resolve().parent / "fonts"
FILES = {"Poppins|Bold": [UF / "Poppins-Bold.ttf"], "Poppins|ExtraBold": [UF / "Poppins-ExtraBold.ttf"],
         "Inter|Semi Bold": [FS / "Inter-SemiBold.ttf"],
         "Inter|Bold": [FS / "Inter-Bold.ttf"]}
DUMP = """
  const dump=n=>({t:n.type,x:n.x,y:n.y,w:n.width,h:n.height,n:n.name,f:(n.fills&&n.fills[0]&&n.fills[0].color)||null,s:(n.strokes&&n.strokes[0]&&n.strokes[0].color)||null,sw:n.strokeWeight||0,
    c:n.type==="TEXT"?n.characters:undefined,fn:n.fontName,fs:n.fontSize,ah:n.textAlignHorizontal,av:n.textAlignVertical,ar:n.type==="TEXT"?n.textAutoResize:undefined,rt:n._rt,dp:n.dashPattern,k:n.children.map(dump)});
  for (const [sid, s] of Object.entries(slides)) if (s.children.length) console.log("TREE_JSON"+JSON.stringify(dump(s)));
"""
class Fonts:
    def __init__(s, adv):
        s.adv = adv; s.cache = {}; s.cmaps = {}
        for k, fl in FILES.items():
            ok = [f for f in fl if f.exists()] or [FILES["Poppins|Bold"][0]]
            s.cmaps[k] = [(str(f), set(TTFont(str(f)).getBestCmap())) for f in ok]
    def pick(s, fam, ch, size):
        f = s.cmaps[fam][0][0]
        for ff, cm in s.cmaps[fam]:
            if ord(ch) in cm: f = ff; break
        key = (f, round(size))
        if key not in s.cache: s.cache[key] = ImageFont.truetype(f, round(size))
        return s.cache[key]
    def w(s, text, fam, size): return sum(s.adv[fam].get(c, 0.6) for c in text) * size * 1.02
def wrap(F, text, width, fam, size):
    out = []
    for para in text.split("\n"):
        line = ""
        for wd in para.split(" "):
            cand = (line + " " + wd) if line else wd
            if F.w(cand, fam, size) <= width or not line: line = cand
            else: out.append(line); line = wd
        out.append(line)
    return out
def col(c): return tuple(round(255 * c[k]) for k in "rgb") if c else None
def run(img, F, x, y, text, fam, size, fill):
    d = ImageDraw.Draw(img)
    for ch in text:
        d.text((x, y), ch, font=F.pick(fam, ch, size), fill=fill); x += F.adv[fam].get(ch, 0.6) * size * 1.02
def draw_text(img, F, n, ax, ay):
    fam = n["fn"]["family"] + "|" + n["fn"]["style"]; size = n["fs"]; lh = (1.5 if fam.startswith("Poppins") else 1.21) * size; c = col(n["f"]) or (0, 0, 0)
    dy = (lh - size * 1.22) / 2
    if n.get("rt") is not None and abs(n["rt"][0][0]) < 1e-6:
        tmp = Image.new("RGBA", (int(F.w(n["c"], fam, size)) + 6, int(lh) + 4), (0, 0, 0, 0)); run(tmp, F, 0, dy, n["c"], fam, size, c)
        tmp = tmp.rotate(90, expand=True); img.paste(tmp, (int(ax), int(ay)), tmp); return
    W = None if n["ar"] == "WIDTH_AND_HEIGHT" else n["w"]
    lines = n["c"].split("\n") if W is None else wrap(F, n["c"], W, fam, size)
    y0 = ay + ((n["h"] - len(lines) * lh) / 2 if n["ar"] == "NONE" and n.get("av") == "CENTER" else 0)
    for i, l in enumerate(lines):
        lw = F.w(l, fam, size); x = ax
        if W is not None and n.get("ah") == "CENTER": x = ax + (W - lw) / 2
        if W is not None and n.get("ah") == "RIGHT": x = ax + W - lw
        run(img, F, x, y0 + i * lh + dy, l, fam, size, c)
def draw(img, F, n, ox, oy):
    d = ImageDraw.Draw(img); ax, ay = ox + n["x"], oy + n["y"]
    if n["t"] == "TEXT": draw_text(img, F, n, ax, ay); return
    f = col(n["f"]); s = col(n["s"]); sw = max(1, round(n["sw"])) if s else 0
    if n.get("rt") is not None and n["t"] == "RECTANGLE":
        m = n["rt"]; o = (ox + m[0][2], oy + m[1][2]); ux = (m[0][0], m[1][0]); uy = (m[0][1], m[1][1]); w, h = n["w"], n["h"]
        d.polygon([o, (o[0] + ux[0] * w, o[1] + ux[1] * w), (o[0] + ux[0] * w + uy[0] * h, o[1] + ux[1] * w + uy[1] * h), (o[0] + uy[0] * h, o[1] + uy[1] * h)], fill=f, outline=s); return
    x0, y0, x1, y1 = ax, ay, ax + n["w"], ay + n["h"]
    if n["t"] == "ELLIPSE": d.ellipse([x0, y0, x1, y1], fill=f, outline=s, width=sw)
    elif n["t"] in ("RECTANGLE", "FRAME") and (f or s):
        if n.get("dp") and s and not f:
            for xx in range(int(x0), int(x1), 10): d.line([xx, y0, min(xx + 6, x1), y0], fill=s, width=sw); d.line([xx, y1, min(xx + 6, x1), y1], fill=s, width=sw)
            for yy in range(int(y0), int(y1), 10): d.line([x0, yy, x0, min(yy + 6, y1)], fill=s, width=sw); d.line([x1, yy, x1, min(yy + 6, y1)], fill=s, width=sw)
        else: d.rectangle([x0, y0, x1, y1], fill=f, outline=s, width=sw)
    for k in n["k"]: draw(img, F, k, ax, ay)
def render(gen, only, outdir):
    F = Fonts(json.loads(gen.rd("metrics.json"))); m = gen.rd("mock_figma.js"); i = m.rindex("})();"); m = m[:i] + DUMP + m[i:]; gen.derive(); out = []
    for n in only:
        code = gen.compose(n, "S%d" % n)
        r = subprocess.run(["node", "-"], input=m.replace("EXACT_FLAG", "true").replace("CODE_JSON", json.dumps(code)), capture_output=True, text=True, encoding="utf-8")
        tj = [l for l in r.stdout.splitlines() if l.startswith("TREE_JSON")]
        if not tj: print("no tree for slide", n, r.stdout[-400:], r.stderr[-600:]); continue
        img = Image.new("RGB", (1920, 1080), (255, 255, 255))
        for k in json.loads(tj[0][9:])["k"]: draw(img, F, k, 0, 0)
        p = pathlib.Path(outdir) / ("preview_%02d.png" % n); p.parent.mkdir(parents=True, exist_ok=True); img.save(p); out.append(str(p)); print("wrote", p)
    return out
if __name__ == "__main__":
    spec = importlib.util.spec_from_file_location("gen", DECK / "gen.py"); gen = importlib.util.module_from_spec(spec); spec.loader.exec_module(gen)
    render(gen, [int(a) for a in sys.argv[1:]] or [2, 3, 5], DECK / "shots")
