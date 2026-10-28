"""Build deck/TeamIdeaForge_ArthikKhayal.pdf from deck/shots/hi_s01.png .. hi_s08.png, one 1920 x 1080 page each."""
import pathlib, fitz
D = pathlib.Path(__file__).resolve().parent; doc = fitz.open()
for n in range(1, 9):
    p = D / "shots" / ("hi_s%02d.png" % n); assert p.exists(), p
    page = doc.new_page(width=1920, height=1080); page.insert_image(page.rect, filename=str(p))
out = D / "TeamIdeaForge_ArthikKhayal.pdf"; doc.save(str(out)); print("pages", doc.page_count, "->", out)
