"""Every deck node must be fully inside one layer rect or fully outside all of them; a node that only partly
overlaps a layer would be cut in half by the reveal. Containers (a node that wholly contains a layer, such as a
panel frame) are exempt. Prints LAYERS OK or every violation with the node and the layer."""
import json, pathlib, sys
P = pathlib.Path(__file__).resolve().parents[1]
S = json.loads((P / "scenes.json").read_text(encoding="utf-8")); N = json.loads((P / "assets" / "nodes.json").read_text(encoding="utf-8"))
bad = []; TOL = 1.0
for slide, spec in S["slides"].items():
    rects = {k: v["rect"] for k, v in spec["layers"].items()}
    for n in N[slide]:
        x, y, w, h = n["x"], n["y"], n["w"], n["h"]
        if w <= 0 or h <= 0: continue
        inside = any(x >= rx - TOL and y >= ry - TOL and x + w <= rx + rw + TOL and y + h <= ry + rh + TOL for rx, ry, rw, rh in rects.values())
        contains = any(x <= rx + TOL and y <= ry + TOL and x + w >= rx + rw - TOL and y + h >= ry + rh - TOL for rx, ry, rw, rh in rects.values())
        hits = [k for k, (rx, ry, rw, rh) in rects.items() if x < rx + rw and x + w > rx and y < ry + rh and y + h > ry]
        if hits and not inside and not contains:
            bad.append((slide, n["name"] or n["type"], [round(v) for v in (x, y, w, h)], hits))
for b in bad: print("PARTIAL", b)
print("LAYERS OK" if not bad else f"{len(bad)} PARTIAL NODES")
sys.exit(0 if not bad else 1)
