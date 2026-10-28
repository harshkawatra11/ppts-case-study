"""Generate compositions/frames/<id>.html and index.html from scenes.json.
  python tools/build.py           real timing from assets/voice/words.json
  python tools/build.py --draft   silent animatic, timing estimated from the script at 164 words a minute"""
import json, pathlib, re, sys
P = pathlib.Path(__file__).resolve().parents[1]
SPEC = json.loads((P / "scenes.json").read_text(encoding="utf-8"))
GEO = json.loads((P / "assets" / "geometry.json").read_text(encoding="utf-8"))
VTXT = (P.parent / "deck" / "values.js").read_text(encoding="utf-8")
V = json.loads(VTXT[len("const V = "):].rstrip().rstrip(";"))
DRAFT = "--draft" in sys.argv
HEAD = SPEC["head_pad"]; WPM = 164
COL = {"alert": "#B91C1C", "good": "#15803D", "primary": "#184898", "accent": "#FFC20E", "blue": "#1D4ED8", "ink": "#111111"}
GSAP = '<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>'
NUM = {"members": float(V["members"]), "spend": float(V["budget"].replace("₹", "").split()[0]), "be": float(V["be"])}
FONTS = """
@font-face{font-family:Poppins;font-weight:700;src:url('assets/fonts/Poppins-Bold.ttf')}
@font-face{font-family:Poppins;font-weight:800;src:url('assets/fonts/Poppins-ExtraBold.ttf')}
@font-face{font-family:Inter;font-weight:600;src:url('assets/fonts/Inter-SemiBold.ttf')}
@font-face{font-family:Inter;font-weight:700;src:url('assets/fonts/Inter-Bold.ttf')}"""


def norm(t):
    return re.sub(r"[^a-z0-9']", "", t.lower())


def timing(sc):
    if DRAFT:
        toks = sc["text"].split(); d = len(toks) * 60 / WPM; st = d / len(toks)
        return d, [{"w": norm(t), "s": i * st} for i, t in enumerate(toks)]
    W = json.loads((P / "assets" / "voice" / "words.json").read_text(encoding="utf-8"))[sc["id"]]
    return W["duration"], [{"w": norm(x["w"]), "s": x["s"]} for x in W["words"]]


def resolve(ev, words, d, sdur, log):
    off = ev.get("off", 0.0)
    if "t" in ev: return ev["t"] + off
    if "end" in ev: return sdur + ev["end"] + off
    tgt = [norm(x) for x in ev["at"].split()]; want = ev.get("n", 1); seen = 0
    for i in range(len(words) - len(tgt) + 1):
        if [w["w"] for w in words[i:i + len(tgt)]] == tgt:
            seen += 1
            if seen == want: return HEAD + words[i]["s"] + off
    log.append(ev["at"]); return HEAD + ev.get("fb", 0.5) * d + off


def cam(rect):
    if rect == "full": return 1.0, 0.0, 0.0
    x, y, w, h = rect
    s = max(1.0, min(1728 / w, 929 / h, SPEC["cam_max"]))
    tx = 960 - s * (x + w / 2); ty = 540 - s * (y + h / 2)
    tx = min(0.0, max(1920 - 1920 * s, tx)); ty = min(0.0, max(1080 - 1080 * s, ty))
    return s, tx, ty


def hero_html(sid):
    b3, bv = V["be3"], V["bevals"]; L, SPAN = 276, 1300; w = [SPAN * v / 12 for v in bv]
    vals = [(L + w[0] - 130, "#FFFFFF"), (L + w[1] + 16, "#184898"), (L + w[2] + 16, "#111111")]
    rows = ""
    for i, (lab, col) in enumerate([("Bear", "#B91C1C"), ("Base", "#184898"), ("Bull", "#111111")]):
        y = 770 + i * 66
        rows += (f'<div class="h-row" id="{sid}_r{i}" style="top:{y}px"><div class="h-rl">{lab}</div>'
                 f'<div class="h-bar" id="{sid}_b{i}" style="width:{w[i]:.1f}px;background:{col}"></div>'
                 f'<div class="h-val" id="{sid}_v{i}" style="left:{vals[i][0] - 96:.1f}px;color:{vals[i][1]}">{b3[i]}</div></div>')
    return f"""<div id="{sid}_hero">
  <div class="h-chip" id="{sid}_chip">THE BAR TO BEAT</div>
  <div class="h-card" id="{sid}_c1" style="left:96px"><div class="h-num" id="{sid}_c1n">0.0 LAKH</div><div class="h-lab">member shops at full scale</div></div>
  <div class="h-card" id="{sid}_c2" style="left:692px"><div class="h-num" id="{sid}_c2n">₹0.0 CRORE</div><div class="h-lab">a year, {V["p7title"].split(", ")[1].split(" OF")[0]} of unit revenue</div></div>
  <div class="h-card" id="{sid}_c3" style="left:1288px"><div class="h-num h-red">{V["cmp"][0][1].upper()}<span class="h-strike" id="{sid}_c3s"></span></div><div class="h-lab">what cash per tyre would cost</div></div>
  <div class="h-big" id="{sid}_big">0.0</div>
  <div class="h-side" id="{sid}_side"><div class="h-s1">EXTRA TYRES A SHOP A YEAR</div><div class="h-s2">pay for the whole programme,</div><div class="h-s3">one every {V["weeks"]} weeks</div></div>
  {rows}
  <div class="h-kill" id="{sid}_kill"></div><div class="h-killl" id="{sid}_killl">KILL LINE 12</div>
  <div class="h-src">Model {V["hash"]}, base case; bear and bull from the same model</div>
</div>"""


def hero_css(sid):
    h = f"#{sid}_hero"
    return f"""{h}{{position:absolute;inset:0;background:#FFFFFF;color:#111111;font-family:Inter,sans-serif}}
{h} .h-chip{{position:absolute;left:96px;top:64px;padding:10px 22px;background:#184898;color:#FFFFFF;font:700 30px Poppins;border:2px solid #111111;box-shadow:7px 7px 0 #FFC20E}}
{h} .h-card{{position:absolute;top:168px;width:536px;height:176px;border:2px solid #111111;box-shadow:8px 8px 0 #FFC20E;background:#FFFFFF;padding:18px 24px;box-sizing:border-box}}
{h} .h-num{{font:800 64px/1 Poppins;color:#184898;position:relative;display:inline-block}}
{h} .h-red{{color:#B91C1C}}
{h} .h-lab{{font:700 28px/1.25 Inter;margin-top:14px}}
{h} .h-strike{{position:absolute;left:-6px;right:-6px;top:46%;height:7px;background:#B91C1C;transform-origin:0 50%}}
{h} .h-big{{position:absolute;left:96px;top:392px;font:800 300px/1 Poppins;color:#B91C1C}}
{h} .h-side{{position:absolute;left:760px;top:430px}}
{h} .h-s1{{font:800 56px/1.1 Poppins;color:#B91C1C}}
{h} .h-s2{{font:700 40px/1.3 Inter;margin-top:14px}}
{h} .h-s3{{font:700 40px/1.3 Inter;color:#184898}}
{h} .h-row{{position:absolute;left:96px;height:52px;width:1700px}}
{h} .h-rl{{position:absolute;left:0;top:2px;font:700 36px Inter}}
{h} .h-bar{{position:absolute;left:180px;top:4px;height:44px;border:2px solid #111111;box-sizing:border-box;transform-origin:0 50%}}
{h} .h-val{{position:absolute;top:0;font:700 36px Poppins}}
{h} .h-kill{{position:absolute;left:1576px;top:750px;width:0;height:220px;border-left:5px dashed #B91C1C;transform-origin:50% 0}}
{h} .h-killl{{position:absolute;left:1596px;top:828px;font:700 30px Poppins;color:#B91C1C}}
{h} .h-src{{position:absolute;right:96px;bottom:40px;font:600 22px Inter;color:#184898}}"""


clips, audio, t_acc, prev, state, report = [], [], 0.0, None, None, []
for sc in SPEC["scenes"]:
    sid, slide = sc["id"], sc["slide"]; sl = SPEC["slides"][slide]; layers = sl["layers"]
    d, words = timing(sc); sdur = HEAD + d + sc.get("tail", SPEC["tail_pad"]); log = []
    if slide != prev:
        state = {"vis": set(), "clip": {}, "rows": {}, "cam": cam("full"), "settled": False}
    js, ovl = [], []
    s0, x0, y0 = state["cam"]
    js.append(f'tl.set("#{sid}_stage",{{x:{x0:.1f},y:{y0:.1f},scale:{s0:.4f}}},0);')
    for lid in layers:
        if lid not in state["vis"]: js.append(f'tl.set("#{sid}_{lid}",{{opacity:0}},0);')
        elif lid in state["clip"]: js.append(f'tl.set("#{sid}_{lid}",{{clipPath:"{state["clip"][lid]}"}},0);')
    for pid in sl["panels"]:
        if not state["settled"]: js.append(f'tl.set("#{sid}_{pid}_full",{{opacity:0}},0);')
    if slide != prev:
        js.append(f'tl.fromTo("#{sid}_stage",{{opacity:0}},{{opacity:1,duration:0.45,ease:"power1.out"}},0);')
    if sc.get("hero"):
        for el in ["chip", "c1", "c2", "c3", "big", "side", "kill", "killl", "r0", "r1", "r2"]:
            js.append(f'tl.set("#{sid}_{el}",{{opacity:0}},0);')
        js.append(f'tl.set("#{sid}_c3s",{{scaleX:0}},0);')
    for k, ev in enumerate(sc["events"]):
        t = resolve(ev, words, d, sdur, log); op = ev["do"]; T = f"{max(0.0, t):.3f}"
        lid = ev.get("id"); el = f'"#{sid}_{lid}"' if lid else None
        if op == "cam":
            s, tx, ty = cam(ev["rect"]); state["cam"] = (s, tx, ty)
            js.append(f'tl.to("#{sid}_stage",{{x:{tx:.1f},y:{ty:.1f},scale:{s:.4f},duration:{ev.get("dur", 1.0)},ease:"power2.inOut"}},{T});')
        elif op == "show":
            m = ev["mode"]; du = ev.get("dur")
            if m == "fade":
                js.append(f'tl.fromTo({el},{{opacity:0,y:8}},{{opacity:1,y:0,duration:{du or 0.5},ease:"power2.out"}},{T});')
            elif m == "pop":
                js.append(f'tl.fromTo({el},{{opacity:0,scale:0.93}},{{opacity:1,scale:1,duration:{du or 0.55},ease:"back.out(1.6)"}},{T});')
            else:
                a = {"wipeR": "inset(0px 100% 0px 0px)", "wipeL": "inset(0px 0px 0px 100%)", "wipeU": "inset(100% 0px 0px 0px)"}[m]
                b = {"wipeR": "inset(0px 0% 0px 0px)", "wipeL": "inset(0px 0px 0px 0%)", "wipeU": "inset(0% 0px 0px 0px)"}[m]
                js.append(f'tl.set({el},{{opacity:1}},{T});')
                js.append(f'tl.fromTo({el},{{clipPath:"{a}"}},{{clipPath:"{b}",duration:{du or 0.8},ease:"power2.inOut"}},{T});')
            state["vis"].add(lid); state["clip"].pop(lid, None)
        elif op == "rows":
            H = layers[lid]["rect"][3]; head, row, upto = ev["head"], ev["row"], ev["upto"]; st = ev.get("stagger", 0.0)
            cur = state["rows"].get(lid, 0)
            if lid not in state["vis"]:
                js.append(f'tl.set({el},{{opacity:1,clipPath:"inset(0px 0px {H - head:.1f}px 0px)"}},{T});'); state["vis"].add(lid)
            for i, j in enumerate(range(cur + 1, upto + 1)):
                bot = max(0.0, H - head - j * row)
                js.append(f'tl.to({el},{{clipPath:"inset(0px 0px {bot:.1f}px 0px)",duration:0.22,ease:"power1.out"}},{t + 0.05 + i * st:.3f});')
            state["rows"][lid] = upto; state["clip"][lid] = f"inset(0px 0px {max(0.0, H - head - upto * row):.1f}px 0px)"
        elif op == "clipR":
            W = layers[lid]["rect"][2]; css = f"inset(0px {W * (1 - ev['frac']):.1f}px 0px 0px)"
            if lid not in state["vis"]:
                js.append(f'tl.set({el},{{opacity:1,clipPath:"inset(0px {W:.1f}px 0px 0px)"}},{T});'); state["vis"].add(lid)
            js.append(f'tl.to({el},{{clipPath:"{css}",duration:{ev.get("dur", 0.6)},ease:"power2.inOut"}},{T});')
            state["clip"][lid] = css
        elif op == "pulse":
            x, y, w, h = ev["rect"]; c = COL[ev["color"]]; oid = f"{sid}_o{k}"
            ovl.append(f'<div class="ovl" id="{oid}" style="left:{x - 3}px;top:{y - 3}px;width:{w + 6}px;height:{h + 6}px;border-color:{c};background:{c}29"></div>')
            js.append(f'tl.set("#{oid}",{{opacity:0}},0);')
            js.append(f'tl.to("#{oid}",{{opacity:1,duration:0.2}},{T});')
            js.append(f'tl.to("#{oid}",{{opacity:0,duration:0.45}},{t + 0.2 + ev.get("hold", 1.2):.3f});')
        elif op == "ribbon":
            for i, r in enumerate(GEO[slide + "_ribbon"]):
                oid = f"{sid}_rb{i}"
                ovl.append(f'<div class="ovl" id="{oid}" style="left:{r["x"] - 5}px;top:{r["y"] - 5}px;width:{r["w"] + 10}px;height:{r["h"] + 10}px;border-color:#184898;background:#18489826"></div>')
                js.append(f'tl.set("#{oid}",{{opacity:0}},0);')
                js.append(f'tl.fromTo("#{oid}",{{opacity:0,scale:1.08}},{{opacity:1,scale:1,duration:0.35,ease:"back.out(1.6)"}},{t + i * 0.18:.3f});')
        elif op == "settle":
            for pid in sl["panels"]:
                js.append(f'tl.to("#{sid}_{pid}_full",{{opacity:1,duration:0.3}},{T});')
            state["settled"] = True
        elif op == "heroShow":
            m = ev["mode"]; e2 = f'"#{sid}_{ev["el"]}"'
            if m == "pop": js.append(f'tl.fromTo({e2},{{opacity:0,scale:0.93}},{{opacity:1,scale:1,duration:0.5,ease:"back.out(1.6)"}},{T});')
            else: js.append(f'tl.fromTo({e2},{{opacity:0,y:10}},{{opacity:1,y:0,duration:0.5,ease:"power2.out"}},{T});')
        elif op == "count":
            to = NUM[ev["to"]]; e2 = f"{sid}_{ev['el']}"
            js.append(f'(()=>{{const o={{v:0}};tl.to(o,{{v:{to},duration:{ev["dur"]},ease:"power2.out",onUpdate:()=>{{const n=document.getElementById("{e2}");if(n)n.textContent="{ev["pre"]}"+o.v.toFixed({ev["dp"]})+"{ev["post"]}";}}}},{T});}})();')
        elif op == "strike":
            js.append(f'tl.to("#{sid}_{ev["el"]}",{{scaleX:1,duration:0.5,ease:"power2.inOut"}},{T});')
        elif op == "bars":
            for i in range(3):
                js.append(f'tl.set("#{sid}_r{i}",{{opacity:1}},{t + i * 0.18:.3f});')
                js.append(f'tl.fromTo("#{sid}_b{i}",{{scaleX:0}},{{scaleX:1,duration:0.8,ease:"power2.out"}},{t + i * 0.18:.3f});')
                js.append(f'tl.fromTo("#{sid}_v{i}",{{opacity:0}},{{opacity:1,duration:0.3}},{t + i * 0.18 + 0.6:.3f});')
        elif op == "kill":
            js.append(f'tl.set("#{sid}_kill",{{opacity:1}},{T});')
            js.append(f'tl.fromTo("#{sid}_kill",{{scaleY:0}},{{scaleY:1,duration:0.45,ease:"power2.out"}},{T});')
            js.append(f'tl.fromTo("#{sid}_killl",{{opacity:0,x:-10}},{{opacity:1,x:0,duration:0.4}},{t + 0.3:.3f});')
        elif op == "heroOut":
            js.append(f'tl.to("#{sid}_hero",{{opacity:0,duration:0.6,ease:"power1.inOut"}},{T});')
    lay = "".join(f'<div class="lyr" id="{sid}_{lid}" style="left:{r["rect"][0]}px;top:{r["rect"][1]}px;width:{r["rect"][2]}px;height:{r["rect"][3]}px"><img src="assets/crops/{lid}.png" alt=""></div>' for lid, r in layers.items())
    full = "".join(f'<div class="lyr" id="{sid}_{pid}_full" style="left:{r[0]}px;top:{r[1]}px;width:{r[2]}px;height:{r[3]}px"><img src="assets/crops/{pid}_full.png" alt=""></div>' for pid, r in sl["panels"].items())
    hero = hero_html(sid) if sc.get("hero") else ""; hcss = hero_css(sid) if sc.get("hero") else ""
    html = f"""<template>
  {GSAP}
  <style>{FONTS}
    #{sid}_root{{position:relative;width:1920px;height:1080px;overflow:hidden;background:#FFFFFF}}
    #{sid}_stage{{position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;will-change:transform}}
    #{sid}_stage .bg{{position:absolute;left:0;top:0;width:1920px;height:1080px}}
    #{sid}_root .lyr{{position:absolute;will-change:opacity,transform}}
    #{sid}_root .lyr img{{display:block;width:100%;height:100%}}
    #{sid}_root .ovl{{position:absolute;border:4px solid;box-sizing:border-box}}
    {hcss}
  </style>
  <div id="{sid}_root" data-composition-id="{sid}" data-width="1920" data-height="1080">
    <div id="{sid}_stage"><img class="bg" src="assets/slides/{slide}_skel.png" alt="">{lay}{full}{"".join(ovl)}</div>
    {hero}
  </div>
  <script>
    (() => {{
      const tl = gsap.timeline({{ paused: true }});
      {chr(10).join("      " + j for j in js).strip()}
      tl.to({{}}, {{ duration: {sdur:.3f} }}, 0);
      window.__timelines = window.__timelines || {{}};
      window.__timelines["{sid}"] = tl;
    }})();
  </script>
</template>
"""
    (P / "compositions" / "frames" / f"{sid}.html").write_text(html, encoding="utf-8")
    clips.append(f'<div id="clip-{sid}" class="clip" data-composition-id="{sid}" data-composition-src="compositions/frames/{sid}.html" data-start="{t_acc:.3f}" data-duration="{sdur:.3f}" data-track-index="0" data-width="1920" data-height="1080"></div>')
    if not DRAFT:
        audio.append(f'<audio id="vo-{sid}" src="assets/voice/{sid}.wav" data-start="{t_acc + HEAD:.3f}" data-duration="{d:.3f}" data-track-index="20" data-volume="1"></audio>')
    report.append(f"{sid} start {t_acc:7.2f}s dur {sdur:6.2f}s fallbacks {log}")
    t_acc += sdur; prev = slide
if not DRAFT and (P / "assets" / "music" / "bed.wav").exists():
    audio.append(f'<audio id="bed" src="assets/music/bed.wav" data-start="0" data-duration="{t_acc:.3f}" data-track-index="30" data-volume="{SPEC["bed_volume"]}"></audio>')
index = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    {GSAP}
    <style>
      * {{ margin: 0; padding: 0; box-sizing: border-box; }}
      html, body {{ width: 1920px; height: 1080px; overflow: hidden; background: #FFFFFF; }}
      .clip {{ position: absolute; inset: 0; }}
    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="{t_acc:.3f}" data-width="1920" data-height="1080">
      {chr(10).join("      " + c for c in clips).strip()}
      {chr(10).join("      " + a for a in audio).strip()}
    </div>
    <script>
      window.__timelines = window.__timelines || {{}};
      const tl = gsap.timeline({{ paused: true }});
      tl.to({{}}, {{ duration: {t_acc:.3f} }});
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
"""
(P / "index.html").write_text(index, encoding="utf-8")
print("\n".join(report)); print(f"TOTAL {t_acc:.2f}s{' (draft estimate)' if DRAFT else ''}")
sys.exit(0 if DRAFT or t_acc <= 119.5 else 2)
