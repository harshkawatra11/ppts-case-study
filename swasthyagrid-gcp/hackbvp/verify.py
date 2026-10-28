"""Check the PDF: one A4 page, fonts embedded, link present, page filled, copy rules. Writes preview.png. Run: python verify.py"""
import pathlib, re, fitz
HERE = pathlib.Path(__file__).resolve().parent
PDF = HERE / "TeamIdeaForge_SwasthyaGrid_HackBVP8_Abstract.pdf"
DRIVE = "17kLiFA2hxEaEyMzqQ3xoSuNyD78g82_p"
doc = fitz.open(str(PDF))
page = doc[0]
w_mm, h_mm = page.rect.width / 72 * 25.4, page.rect.height / 72 * 25.4
fonts = sorted({f[3] for f in page.get_fonts(full=True)})
links = [l.get("uri", "") for l in page.get_links()]
pix = page.get_pixmap(dpi=150)
pix.save(str(HERE / "preview.png"))
W, H, N = pix.width, pix.height, pix.n
s = pix.samples
last = 0
for y in range(H - 1, -1, -1):
    if min(s[y * W * N:(y + 1) * W * N]) < 235:
        last = y
        break
fill = last / H
text = " ".join(" ".join(p.get_text() for p in doc).split())
# Chrome embeds the variable Inter font as Type3 (no name); what matters is that no body text falls back to a system font.
fallback = []
for b in page.get_text("dict")["blocks"]:
    for ln in b.get("lines", []):
        for sp in ln["spans"]:
            if re.search(r"Arial|Times|Segoe|Calibri|Helvetica|Courier", sp["font"]) and sp["text"].strip(" \u2192\u2197\u00b7"):
                fallback.append((sp["font"], sp["text"][:24]))
low = text.lower()
BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just", "landscape", "robust",
       "seamless", "holistic", "tapestry", "paradigm", "navigate", "revolutionise", "cutting-edge", "leverage", "empower",
       "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen", "reimagine", "supercharge",
       "harness", "crucial", "pivotal", "furthermore", "moreover"]
MUST = ["HACK@BVP 8.0", "PS6", "SwasthyaGrid", "TEAM IDEAFORGE", "Harsh Kawatra", "Gursimran Kaur", "1.36 crore", "72.2%",
        "86.1%", "81.5 lakh", "2.17 crore", "17,412", "38,241", "₹390.26 Cr", "₹168 Cr", "₹558 Cr", "43.4%", "66 to 80%",
        "79.9%", "58,000", "SDG 3", "SDG 9", "SDG 12", "Watch the product walkthrough", "TSB", "LightGBM", "OSRM", "P90"]
ABSENT_RE = [r"gemini[ -]3\.8", r"\blive\b", r"\btoday\b", r"\bdeployed\b", r"\brunning\b", r"18,000", r"30\.84", r"ranvir",
             r"[\u2014\u2013]", r"\?", r"!"]
res = {
    "pages": doc.page_count,
    "size_mm": (round(w_mm, 1), round(h_mm, 1)),
    "poppins": any("Poppins" in f for f in fonts),
    "inter_embedded": any("Inter" in f for f in fonts) or any(f[2] == "Type3" for f in page.get_fonts(full=True)),
    "fallback_text": fallback,
    "drive_link": any(DRIVE in u for u in links),
    "fill": round(fill, 3),
    "missing": [m for m in MUST if m not in text],
    "present_bad": [p for p in ABSENT_RE if re.search(p, low)],
    "banned": [b for b in BAN if b in low],
}
for k, v in res.items():
    print(k, v)
print("fonts", fonts)
ok = (res["pages"] == 1 and abs(w_mm - 210) < 1 and abs(h_mm - 297) < 1 and res["poppins"] and res["inter_embedded"] and not res["fallback_text"]
      and res["drive_link"] and 0.86 <= fill <= 0.99 and not res["missing"] and not res["present_bad"] and not res["banned"])
print("VERIFY", "PASS" if ok else "FAIL")
