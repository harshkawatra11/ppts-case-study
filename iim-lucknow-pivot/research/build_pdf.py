"""Render dream11-pivot-research.md to a consulting-style PDF (markdown-it -> HTML/CSS -> headless Chrome)."""
import re, html, subprocess, sys, pathlib, shutil
from markdown_it import MarkdownIt

HERE = pathlib.Path(__file__).parent
SRC = HERE / "dream11-pivot-research.md"
HTML_OUT = HERE / "dream11-pivot-research.html"
PDF_OUT = HERE / "dream11-pivot-research.pdf"

text = SRC.read_text(encoding="utf-8")
head, body = text.split("\n---\n", 1)

title = re.search(r"^# (.+)$", head, re.M).group(1)
subtitle = re.search(r"^\*\*(.+?)\*\*", head, re.M).group(1)
team_block = ""
prepared = re.search(r"^Prepared for: (.+)$", head, re.M).group(1)

md = MarkdownIt("commonmark").enable("table")
md.options["html"] = False

# slugify + collect headings for TOC
toc = []
def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")

tokens = md.parse(body)
for i, t in enumerate(tokens):
    if t.type == "heading_open" and t.tag in ("h2", "h3"):
        inline = tokens[i + 1].content
        sid = slug(inline)
        t.attrSet("id", sid)
        if t.tag == "h2":
            toc.append((inline.replace("`",""), sid))

out = md.renderer.render(tokens, md.options, {})

# style provenance tags outside <code>
TAG = re.compile(r"\[((?:C [A-Z]{1,4}\d{0,2}(?:, ?C [A-Z]{1,4}\d{0,2})*)|M|A\d+(?:[^\]]*)|R\d+(?:, ?R\d+)*|S\d+(?:, ?S\d+)*(?:, ?[A-Z]\d+)*)\]")
def tag_repl(m):
    return f'<span class="tag">{m.group(1)}</span>'
parts = re.split(r"(<code>.*?</code>|<a [^>]*>.*?</a>)", out, flags=re.S)
parts = [p if p.startswith(("<code>", "<a ")) else TAG.sub(tag_repl, p) for p in parts]
out = "".join(parts)
out = re.sub(r"<code>(.*?)</code>", r'<span class="code">\1</span>', out)

toc_html = "".join(f'<li><a href="#{sid}">{html.escape(t)}</a></li>' for t, sid in toc)

CSS = """
@page { size: A4; margin: 22mm 18mm 22mm 18mm;
  @bottom-left { content: "Dream11: Life After the Ban  |  Team IdeaForge"; font: 600 8pt Inter, 'Segoe UI', sans-serif; color: #C4161C; }
  @bottom-right { content: counter(page); font: 600 8pt Inter, 'Segoe UI', sans-serif; color: #0A0A0A; } }
@page :first { margin: 0; @bottom-left { content: none } @bottom-right { content: none } }
:root { --p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0; --ink:#0A0A0A; --grey:#F4F5F4; --line:#D5D9D6; }
* { box-sizing: border-box; }
body { font: 9.6pt/1.5 Inter, 'Segoe UI', Calibri, sans-serif; color: var(--ink); margin: 0; }
.cover { height: 297mm; background: var(--pd); color: #fff; padding: 30mm 22mm; position: relative; page-break-after: always; }
.cover .bar { position:absolute; left:0; top:0; bottom:0; width:10mm; background: var(--a); }
.cover .kicker { font: 700 10pt Poppins,'Segoe UI',sans-serif; letter-spacing: .18em; color: var(--a); text-transform: uppercase; margin-top: 30mm; }
.cover h1 { font: 800 40pt/1.05 Poppins,'Segoe UI',sans-serif; margin: 8mm 0 6mm; border: 0; padding: 0; color:#fff; }
.cover .sub { font: 600 15pt/1.35 Poppins,'Segoe UI',sans-serif; color: var(--tint); max-width: 150mm; }
.cover .meta { position:absolute; left:22mm; right:22mm; bottom:26mm; border-top: 2px solid var(--a); padding-top: 6mm; font-size: 10pt; color:#fff; }
.cover .meta b { color: var(--a); }
.tocpage { page-break-after: always; }
.tocpage h2.tt { font: 800 20pt Poppins,'Segoe UI',sans-serif; color: var(--pd); border-bottom: 3px solid var(--a); padding-bottom: 3mm; margin: 0 0 8mm; }
.tocpage ol { list-style: none; padding: 0; margin: 0; columns: 1; }
.tocpage li { padding: 1.5mm 0; border-bottom: 1px solid var(--line); font-weight: 600; font-size: 9.6pt; }
.tocpage a { color: var(--ink); text-decoration: none; }
h1,h2,h3,h4 { font-family: Poppins,'Segoe UI',sans-serif; color: var(--pd); line-height: 1.2; }
h2 { font-size: 16pt; font-weight: 800; margin: 12mm 0 4mm; padding: 0 0 2.5mm; border-bottom: 3px solid var(--a); page-break-after: avoid; }
h2::before { content: ""; display:inline-block; width: 4mm; height: 4mm; background: var(--p); margin-right: 3mm; vertical-align: 1px; }
h3 { font-size: 11.6pt; font-weight: 700; margin: 7mm 0 2mm; color: var(--p); page-break-after: avoid; }
h4 { font-size: 10pt; font-weight: 700; margin: 5mm 0 1mm; page-break-after: avoid; }
p { margin: 0 0 3mm; text-align: left; }
strong { font-weight: 700; }
ul, ol { margin: 0 0 3mm; padding-left: 6mm; }
li { margin-bottom: 1mm; }
hr { border: 0; border-top: 1px solid var(--line); margin: 6mm 0; }
blockquote { margin: 4mm 0; padding: 3mm 5mm; background: var(--tint); border-left: 1.5mm solid var(--p); }
blockquote p:last-child { margin: 0; }
table { width: 100%; border-collapse: collapse; margin: 3mm 0 5mm; font-size: 8.3pt; line-height: 1.35; page-break-inside: auto; }
thead { display: table-header-group; }
tr { page-break-inside: avoid; }
th { background: var(--pd); color: #fff; text-align: left; font: 700 8pt Poppins,'Segoe UI',sans-serif; padding: 2mm 2.2mm; border: 1px solid var(--pd); }
td { padding: 1.7mm 2.2mm; border: 1px solid var(--line); vertical-align: top; overflow-wrap: anywhere; word-break: break-word; }
tbody tr:nth-child(even) td { background: var(--grey); }
td:first-child { font-weight: 600; min-width: 15mm; }
a { color: var(--p); text-decoration: none; }
.tag { font: 600 7pt Inter,'Segoe UI',sans-serif; color: var(--pd); background: var(--tint); border-radius: 2px; padding: 0 1.3mm; white-space: nowrap; }
.code { font: 500 8pt Consolas,'Courier New',monospace; background: var(--grey); border: 1px solid var(--line); padding: 0 1mm; border-radius: 2px; }
"""

cover = f"""<section class="cover"><div class="bar"></div>
<div class="kicker">IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable</div>
<h1>{html.escape(title.replace('Project Satoshi Gate: ', 'Project Satoshi Gate<br><span style="font-size:24pt;font-weight:700;color:#F5C518">')) if False else 'Dream11: Life After the Ban'}</h1>
<div class="sub">{html.escape(subtitle)}</div>
<div class="meta"><b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi<br><br>{html.escape(prepared)}</div></section>"""

doc = f"""<!doctype html><html><head><meta charset="utf-8"><title>{html.escape(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
<style>{CSS}</style></head><body>{cover}
<section class="tocpage"><h2 class="tt">Contents</h2><ol>{toc_html}</ol></section>
{out}</body></html>"""
HTML_OUT.write_text(doc, encoding="utf-8")

chrome = shutil.which("chrome") or r"C:\Program Files\Google\Chrome\Application\chrome.exe"
cmd = [chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=20000",
       f"--print-to-pdf={PDF_OUT}", HTML_OUT.resolve().as_uri()]
r = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
print(r.returncode, r.stderr[-300:])
print(PDF_OUT, PDF_OUT.exists() and PDF_OUT.stat().st_size)
