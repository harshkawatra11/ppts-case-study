"""Cut every layer and full-panel crop from the 3x slide renders and paint each layer area white on a copy, the
skeleton. The skeleton keeps panel borders, ribbon, rails, headline, chips and source line visible from frame 1."""
import json, pathlib
from PIL import Image, ImageDraw
P = pathlib.Path(__file__).resolve().parents[1]; S = json.loads((P / "scenes.json").read_text(encoding="utf-8")); K = 3
(P / "assets" / "crops").mkdir(parents=True, exist_ok=True)
for slide, spec in S["slides"].items():
    src = Image.open(P / "assets" / "slides" / f"{slide}@3x.png").convert("RGB")
    assert src.size == (5760, 3240), (slide, src.size)
    skel = src.copy(); d = ImageDraw.Draw(skel)
    for lid, L in spec["layers"].items():
        x, y, w, h = L["rect"]; box = (round(x * K), round(y * K), round((x + w) * K), round((y + h) * K))
        src.crop(box).save(P / "assets" / "crops" / f"{lid}.png")
        d.rectangle([box[0], box[1], box[2] - 1, box[3] - 1], fill=(255, 255, 255))
    for pid, (x, y, w, h) in spec["panels"].items():
        src.crop((x * K, y * K, (x + w) * K, (y + h) * K)).save(P / "assets" / "crops" / f"{pid}_full.png")
    skel.save(P / "assets" / "slides" / f"{slide}_skel.png")
    print(slide, len(spec["layers"]), "layers,", len(spec["panels"]), "panels")
print("PREP OK")
