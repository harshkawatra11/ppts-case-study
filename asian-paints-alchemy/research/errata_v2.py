# ===== ALCHEMY RESEARCH ERRATA v2 (deck version 2) =====
"""Bring the research document into line with deck version 2. Each replacement must match exactly once.
  python -X utf8 asian-paints-alchemy/research/errata_v2.py"""
import io, pathlib, sys
R = pathlib.Path(__file__).resolve().parent; P = R / "parts"
def rd(p): return io.open(p, encoding="utf-8").read().replace("\r", "")
def wr(p, t): io.open(p, "w", encoding="utf-8", newline="\n").write(t)
OPS = [
 ("part-A.md", "zero of six substitute pigments or particle-level air designs reach premium brightness at a practical loading `[T8]`",
  "zero of the five TiO2-free designs reach premium brightness at a practical loading, and nor does rutile in its own air pocket (yolk-shell) `[T8]`"),
 ("part-C.md", "Zero of the six genuinely particle-level or substitute-pigment designs (S02 through S09) both reach premium brightness and save a competitively large share of TiO2",
  "None of the eight commercial, particle-level or substitute-pigment designs (S02 through S09) both reaches premium brightness and saves more than 30% of TiO2"),
 ("part-C.md", "This \"0 of 6\" framing, stated once here and carried into the deck's own moneyshot language, is the quantitative backbone",
  "This framing, carried into the deck as \"0 of 5 TiO2-free designs reach premium brightness\" and \"particle-level air saves at most 20%\", is the quantitative backbone"),
 ("part-C.md", "the Palmer 2023 quote on slide 3/5", "the Lemcoff et al. 2023 quote (Palmer group) on slide 3/5"),
 ("part-E.md", "| High | | | 2, 4, 10 | 3 | 1 |\n| Medium-high | | | | | |\n| Medium | 7, 12 | 11 | 5, 6, 8, 9 | | |\n| Low-medium | | | | | |\n| Low | | | | | |",
  "| High | | | 1, 2, 4, 10 | | |\n| Medium-high | | | | | |\n| Medium | | 7, 11 | 5, 6, 8 | 3 | |\n| Low-medium | | | 9 | | |\n| Low | 12 | | | | |"),
 ("part-E.md", "The heat map's top-right corner, which the risk-management literature treats as the priority zone for mitigation, holds risk 1 (the surroundings assumption) alone at the highest impact-and-elevated-probability cell, with risk 3 (seal-coat infiltration) immediately beside it; this is the same conclusion the model's own tornado table reaches independently, and the two methods (a physics-based sensitivity sweep and a qualitative risk-register exercise) agreeing with each other is itself a useful check that neither is an artefact of its own method.",
  "Each risk sits in the cell its own register row gives it. The highest-scoring cell, high impact at medium probability, holds four risks together: risk 1 (binder wets the rutile), risk 2 (porosity falls short), risk 4 (painters thin the seal coat) and risk 10 (adoption proves optimistic). Risk 3 (seal-coat infiltration) carries the register's highest probability, medium to high, at medium impact. Risk 1 is also the single biggest swing in the model's own tornado table `[T14]`, so the physics-based sensitivity sweep and the qualitative register agree on where the first panels should look, and the deck's 5 by 5 heat map on slide 7 draws exactly these placements."),
 ("part-F.md", "mercury porosimetry with a 30 to 40% pass band", "mercury porosimetry with a 25 to 45% pass band, the model's own bear-to-bull porosity range"),
 ("part-F.md", "offset by ₹1.2 more fine chalk, for a net ₹6.4 fall `[T12]`",
  "offset by ₹1.2 more fine chalk and ₹0.2 less coarse chalk, for a net ₹6.4 fall (₹18.36 to ₹12.04 before rounding) `[T12]`"),
 ("part-F.md", "and zero of six TiO2-free or particle-level ideas reach premium brightness at any loading.\" | 0 of 6 `[T8]` |",
  "and none of the five TiO2-free designs reaches premium brightness at any loading.\" | 0 of 5 `[T8]` |"),
 ("part-F.md", "fifty seven percent of India's import volume came from China during the government's own investigation.",
  "fifty seven percent of India's TiO2 demand was met by Chinese imports during the government's own investigation."),
]
done = 0
for f, old, new in OPS:
    p = P / f; t = rd(p); c = t.count(old)
    if c != 1: sys.exit("ERRATA FAIL: %s matches %d times: %s" % (f, c, old[:80]))
    wr(p, t.replace(old, new)); done += 1
p = P / "part-F.md"; t = rd(p); a = t.find("## 27. Slide blueprint for the deck"); b = t.find("## 28. Forty questions")
if a < 0 or b < 0 or b < a: sys.exit("ERRATA FAIL: section 27 boundaries not found")
wr(p, t[:a] + rd(P / "section27_v2.md").strip() + "\n\n" + t[b:]); done += 1
print("errata %d applied" % done)
