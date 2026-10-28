"""Generate index.html for the Dream11 walkthrough.
Usage (from the project root):  python tools/build.py           # real voice + Whisper cues
                                python tools/build.py --draft   # no voice; estimated timings
Reads data/layout.json, data/scenes.json, data/script.json, data/cues/*.json, assets/voice/*.wav
"""
import json, re, subprocess, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
DRAFT = "--draft" in sys.argv
W, H = 1920, 1080
LEAD, TAIL, XF, END_HOLD = 0.30, 0.35, 0.30, 1.20   # seconds
WPS = 2.5            # draft speaking rate, words a second
MAXS = 1.60            # camera zoom ceiling (slides exported at native 1920x1080, not 2x)
ANTICIPATE = 0.20    # visuals lead the cue word by this much
MIN_GAP = 0.50       # minimum time between beats
CEILING = 120.0

layout = json.load(open(ROOT / "data/layout.json", encoding="utf-8"))
scenes = json.load(open(ROOT / "data/scenes.json", encoding="utf-8"))
script = json.load(open(ROOT / "data/script.json", encoding="utf-8"))
norm = lambda s: re.sub(r"[^a-z0-9]", "", s.lower())

# ---------- geometry ----------
def is_rect(t):
    return isinstance(t, list) and len(t) == 4 and all(isinstance(v, (int, float)) for v in t)

def one_rect(slide, t):
    if is_rect(t):
        return list(t)
    names = layout[slide]["rects"]
    hits = [k for k in names if k.startswith(t)]
    if not hits:
        raise SystemExit(f"\n[{slide}] target not found: {t!r}\nAvailable names:\n  " + "\n  ".join(sorted(names)))
    return list(names[hits[0]])

def rect_of(slide, t):
    if t == "wide":
        return [0, 0, W, H]
    if isinstance(t, list) and not is_rect(t):
        rs = [one_rect(slide, x) for x in t]
        x0 = min(r[0] for r in rs); y0 = min(r[1] for r in rs)
        x1 = max(r[0] + r[2] for r in rs); y1 = max(r[1] + r[3] for r in rs)
        return [x0, y0, x1 - x0, y1 - y0]
    return one_rect(slide, t)

def grow(r, l=6, t=6, rr=14, b=14):          # room for the 7 px sticker back-cards
    x = max(0, r[0] - l); y = max(0, r[1] - t)
    return [x, y, min(W, r[0] + r[2] + rr) - x, min(H, r[1] + r[3] + b) - y]

def cam_for(r, pad=44):
    if r == [0, 0, W, H]:
        return (1.0, 0.0, 0.0)
    s = min(W / (r[2] + 2 * pad), H / (r[3] + 2 * pad), MAXS)
    s = max(s, 1.0)
    x = W / 2 - (r[0] + r[2] / 2) * s
    y = H / 2 - (r[1] + r[3] / 2) * s
    x = min(0.0, max(W - W * s, x)); y = min(0.0, max(H - H * s, y))
    return (round(s, 4), round(x, 1), round(y, 1))

def inset(r):
    return f"inset({r[1]}px {W - (r[0] + r[2])}px {H - (r[1] + r[3])}px {r[0]}px)"

def inset_closed(r):                          # zero-width at the left edge, for the wipe
    return f"inset({r[1]}px {W - r[0]}px {H - (r[1] + r[3])}px {r[0]}px)"

# ---------- timing ----------
def voice_dur(line):
    if DRAFT:
        return round(len(script[line].split()) / WPS, 2)
    p = ROOT / f"assets/voice/{line}.wav"
    if not p.exists():
        raise SystemExit(f"missing {p}. Run tools/voice.py first, or use --draft.")
    out = subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)])
    return round(float(out.decode().strip()), 3)

def words_for(line):
    p = ROOT / f"data/cues/{line}.json"
    if DRAFT or not p.exists():
        return []
    j = json.load(open(p, encoding="utf-8")); out = []
    for seg in j.get("segments", []):
        for w in seg.get("words", []):
            out.append((norm(w.get("word", "")), float(w.get("start", 0.0))))
    return [w for w in out if w[0]]

def find_cue(words, alts, after):
    best = None
    for alt in alts or []:
        toks = [norm(t) for t in alt.split() if norm(t)]
        for i in range(len(words) - len(toks) + 1):
            if words[i][1] < after:
                continue
            if all(words[i + k][0] == toks[k] for k in range(len(toks))):
                if best is None or words[i][1] < best:
                    best = words[i][1]
                break
    return best

# ---------- build ----------
els, js, audio, report = [], [], [], []
t0 = 0.0
N = len(scenes)
for si, sc in enumerate(scenes):
    sid, slide, line = sc["id"], sc["slide"], sc["line"]
    vd = voice_dur(line)
    slen = LEAD + vd + TAIL
    clip_dur = slen + (END_HOLD if si == N - 1 else XF)
    png = f"assets/slides/{slide}.png"
    words = words_for(line)
    full = sc.get("full", False)
    inner = [f'<img class="slide" src="{png}" alt="">']
    if not full:
        inner.append(f'<div class="veil" id="{sid}-veil"></div>')
    for hi, hr in enumerate(sc.get("header", [])):
        inner.append(f'<div class="rev" style="clip-path:{inset(rect_of(slide, hr))}"><img class="slide" src="{png}" alt=""></div>')
    W_ID = f"#{sid}-world"
    if si > 0:
        js.append(f'tl.fromTo("{W_ID}",{{opacity:0}},{{opacity:1,duration:{XF},ease:"power1.out"}},{t0:.3f});')
    if sc.get("push"):
        js.append(f'tl.fromTo("{W_ID}",{{scale:1}},{{scale:{sc["push"]},x:{-(sc["push"]-1)*W/2:.1f},y:{-(sc["push"]-1)*H/2:.1f},duration:{clip_dur:.3f},ease:"none"}},{t0:.3f});')
    cur = (1.0, 0.0, 0.0); last_cam_end = None; prev_local = -1.0; prev_cue = 0.0
    used_logos = set(); n = 0
    beats = sc.get("beats", [])
    times = []
    for b in beats:
        ct = find_cue(words, b.get("cue"), prev_cue) if b.get("cue") else None
        if ct is not None:
            local = LEAD + ct - ANTICIPATE; prev_cue = ct; how = "cue"
        else:
            local = LEAD + float(b.get("at", 0.5)) * vd; how = "fallback" if b.get("cue") else "fixed"
        local = max(local, prev_local + MIN_GAP if prev_local >= 0 else 0.0)
        local = min(local, max(0.0, slen - 0.55))
        local = max(local, 0.0)
        prev_local = local; times.append(local)
        report.append(f"{sid} {line} beat@{local:6.2f}s  {how:8s} {b.get('cue') or ''}")
    for bi, b in enumerate(beats):
        local = times[bi]; t = t0 + local
        nxt = (t0 + times[bi + 1]) if bi + 1 < len(beats) else (t0 + slen)
        # reveal layers
        for tgt in b.get("reveal", []):
            r = grow(rect_of(slide, tgt)); n += 1; rid = f"{sid}-r{n}"
            inner.append(f'<div class="rev" id="{rid}"><img class="slide" src="{png}" alt=""></div>')
            d = float(b.get("wipe", 0.55))
            js.append(f'tl.fromTo("#{rid}",{{clipPath:"{inset_closed(r)}",opacity:0}},{{clipPath:"{inset(r)}",opacity:1,duration:{d},ease:"power2.out"}},{t:.3f});')
        if b.get("radial"):
            rd = b["radial"]; r = grow(rect_of(slide, rd["t"])); n += 1; rid = f"{sid}-r{n}"
            cx = r[0] + r[2] * rd["cx"]; cy = r[1] + r[3] * rd["cy"]
            rad = int((max(cx - r[0], r[0] + r[2] - cx) ** 2 + max(cy - r[1], r[1] + r[3] - cy) ** 2) ** 0.5) + 12
            inner.append(f'<div class="rev" style="clip-path:{inset(r)}"><div class="rev" id="{rid}"><img class="slide" src="{png}" alt=""></div></div>')
            js.append(f'tl.fromTo("#{rid}",{{clipPath:"circle(0px at {cx:.0f}px {cy:.0f}px)",opacity:0}},{{clipPath:"circle({rad}px at {cx:.0f}px {cy:.0f}px)",opacity:1,duration:1.1,ease:"power2.out"}},{t:.3f});')
        # count-up
        if b.get("count"):
            c = b["count"]; r = rect_of(slide, c["t"]); n += 1; cid = f"{sid}-c{n}"
            fs = round(r[3] / 1.5, 1); pad = 10
            inner.append(f'<div class="cover" id="{cid}-cover" style="left:{r[0]-pad}px;top:{r[1]-pad}px;width:{r[2]+2*pad}px;height:{r[3]+2*pad}px"></div>')
            inner.append(f'<div class="count" id="{cid}" style="left:{r[0]}px;top:{r[1]}px;width:{r[2]+80}px;height:{r[3]}px;line-height:{r[3]}px;font-size:{fs}px">{c["prefix"]}{c["from"]}{c["suffix"]}</div>')
            js.append(f'(function(){{var o={{v:{c["from"]}}},el=document.getElementById("{cid}");tl.fromTo("#{cid}",{{opacity:0}},{{opacity:1,duration:0.2}},{t:.3f});tl.to(o,{{v:{c["to"]},duration:{c["dur"]},ease:"power2.out",onUpdate:function(){{el.textContent="{c["prefix"]}"+Math.round(o.v)+"{c["suffix"]}";}}}},{t:.3f});}})();')
            end = t + c["dur"] + 0.45
            js.append(f'tl.to(["#{cid}","#{cid}-cover"],{{opacity:0,duration:0.3,ease:"power1.out"}},{end:.3f});')
        # ring
        if b.get("ring"):
            r = grow(rect_of(slide, b["ring"]), 6, 6, 6, 6); n += 1; gid = f"{sid}-g{n}"
            hold = min(float(b.get("hold", 1.6)), max(0.6, nxt - t - 0.1))
            inner.append(f'<div class="ring" id="{gid}" style="left:{r[0]}px;top:{r[1]}px;width:{r[2]}px;height:{r[3]}px"></div>')
            js.append(f'tl.fromTo("#{gid}",{{opacity:0,scale:1.05}},{{opacity:1,scale:1,duration:0.3,ease:"power3.out"}},{t + 0.15:.3f});')
            js.append(f'tl.to("#{gid}",{{opacity:0,duration:0.3,ease:"power1.in"}},{t + 0.15 + hold:.3f});')
        # logos
        if b.get("logos"):
            sel = b["logos"]; pool = [l for l in layout[slide]["logos"] if l["id"] not in used_logos]
            if sel != "all":
                rr = rect_of(slide, sel["in"])
                pool = [l for l in pool if rr[0] <= l["rect"][0] + l["rect"][2] / 2 <= rr[0] + rr[2] and rr[1] <= l["rect"][1] + l["rect"][3] / 2 <= rr[1] + rr[3]]
            pool.sort(key=lambda l: (l["rect"][1] // 60, l["rect"][0]))
            for k, l in enumerate(pool):
                used_logos.add(l["id"]); n += 1; lid = f"{sid}-l{n}"; r = l["rect"]
                if not (ROOT / l["file"]).exists():
                    print("WARNING missing logo file", l["file"]); continue
                inner.append(f'<img class="logo" id="{lid}" src="{l["file"]}" alt="" style="left:{r[0]}px;top:{r[1]}px;width:{r[2]}px;height:{r[3]}px">')
                js.append(f'tl.fromTo("#{lid}",{{opacity:0,scale:0.4}},{{opacity:1,scale:1,duration:0.45,ease:"back.out(1.8)"}},{t + 0.35 + 0.14 * k:.3f});')
        # place a logo from another slide onto a rectangle
        if b.get("place"):
            pl = b["place"]; src = layout[pl["from"]]["logos"]
            if src:
                l = max(src, key=lambda q: q["rect"][2] * q["rect"][3]); r = rect_of(slide, pl["rect"]); n += 1; lid = f"{sid}-l{n}"
                side = max(r[3] * 2.2, 96); cxp = r[0] + r[2] / 2; cyp = r[1] + r[3] / 2
                inner.append(f'<img class="logo" id="{lid}" src="{l["file"]}" alt="" style="left:{cxp - side/2:.0f}px;top:{cyp - side/2:.0f}px;width:{side:.0f}px;height:{side:.0f}px">')
                js.append(f'tl.fromTo("#{lid}",{{opacity:0,scale:0.4}},{{opacity:1,scale:1,duration:0.5,ease:"back.out(1.8)"}},{t:.3f});')
        # veil
        if b.get("unveil") and not full:
            js.append(f'tl.to("#{sid}-veil",{{opacity:0,duration:0.5,ease:"power1.out"}},{t:.3f});')
        # camera
        if b.get("cam"):
            target = cam_for(rect_of(slide, b["cam"]))
            d = 0.9 if target != (1.0, 0.0, 0.0) else 0.8
            d = min(d, max(0.4, nxt - t))
            js.append(f'tl.to("{W_ID}",{{scale:{target[0]},x:{target[1]},y:{target[2]},duration:{d:.2f},ease:"power3.inOut"}},{t:.3f});')
            hold = nxt - (t + d)
            if hold > 0.6 and target[0] > 1.0:       # slow drift so the hold is never frozen
                js.append(f'tl.to("{W_ID}",{{scale:{round(target[0] * 1.015, 4)},duration:{hold:.2f},ease:"none"}},{t + d:.3f});')
            cur = target
    els.append(
        f'<section id="{sid}" class="clip scene" data-start="{t0:.3f}" data-duration="{clip_dur:.3f}" data-track-index="{1 + si % 2}">'
        f'<div class="world" id="{sid}-world" data-layout-allow-overflow>' + "".join(inner) + "</div></section>")
    if not DRAFT:
        audio.append(f'<audio id="vo{si+1:02d}" src="assets/voice/{line}.wav" data-start="{t0 + LEAD:.3f}" data-duration="{vd:.3f}" data-track-index="10" data-volume="1"></audio>')
    t0 += slen
TOTAL = round(t0 + END_HOLD, 3)

HTML = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=1920, height=1080" />
<title>Dream11: Life After the Ban | Team IdeaForge walkthrough</title>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
<style>
@font-face {{ font-family: "Poppins"; font-weight: 800; src: url("assets/fonts/Poppins-ExtraBold.ttf") format("truetype"); }}
html, body {{ margin: 0; background: #ffffff; }}
#root {{ position: relative; width: 100%; height: 100%; overflow: hidden; background: #ffffff; }}
.scene {{ position: absolute; inset: 0; overflow: hidden; }}
.world {{ position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; transform-origin: 0 0; background: #ffffff; }}
.slide {{ position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; display: block; }}
.veil {{ position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; background: #ffffff; opacity: 0.86; }}
.rev {{ position: absolute; left: 0; top: 0; width: 1920px; height: 1080px; }}
.ring {{ position: absolute; box-sizing: border-box; border: 5px solid #C4161C; box-shadow: 6px 6px 0 #F5C518; display: block; }}
.logo {{ position: absolute; display: block; object-fit: contain; }}
.cover {{ position: absolute; background: #ffffff; display: block; }}
.count {{ position: absolute; display: block; font-family: "Poppins"; font-weight: 800; color: #C4161C; white-space: nowrap; }}
</style>
</head>
<body>
<div id="root" data-composition-id="main" data-start="0" data-width="1920" data-height="1080" data-duration="{TOTAL}">
{chr(10).join(els)}
{chr(10).join(audio)}
</div>
<script>
const tl = gsap.timeline({{ paused: true }});
{chr(10).join(js)}
window.__timelines["main"] = tl;
</script>
</body>
</html>
"""
(ROOT / "index.html").write_text(HTML, encoding="utf-8")
print("\n".join(report))
print(f"\nscenes {N} | total {TOTAL:.2f}s | mode {'DRAFT' if DRAFT else 'VOICE'}")
fb = sum(1 for r in report if "fallback" in r)
if not DRAFT and fb:
    print(f"NOTE: {fb} cue(s) fell back to fixed positions. See plan section 11, row C2.")
if TOTAL > CEILING:
    print(f"OVER THE 2-MINUTE CEILING by {TOTAL - CEILING:.2f}s. See plan section 8.4.")
    sys.exit(3)
