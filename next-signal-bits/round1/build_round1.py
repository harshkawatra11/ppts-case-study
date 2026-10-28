"""Render round1.html to PDF via headless Chrome and run the Round 1 submission checks
(PLAN.md §8.1). Run with:
  "C:\\Users\\harsh\\AppData\\Local\\Programs\\Python\\Python312\\python.exe" -X utf8 build_round1.py
"""
import io
import pathlib
import re
import subprocess
import sys

HERE = pathlib.Path(__file__).parent
HTML = HERE / "round1.html"
PDF = HERE / "IdeaForge_TrackD_Round1.pdf"

BANNED = [
    "delve", "tapestry", "game-changer", "revolutioni", "cutting-edge", "seamless",
    "leverage", "unlock", "empower", "in today's", "it's important to note", "in conclusion",
    "holistic", "synergy", "paradigm", "imagine", "what if", "let's", "groundbreaking",
    "state-of-the-art", "supercharge", "elevate", "journey", "world-class", "next-gen",
    "buy rating", "sell rating", "target price", "undervalued", "overvalued",
]
# "harness the" (not bare "harness") is the real AI-slop pattern; "evaluation harness" is our own
# correct technical term and must not be flagged.
BANNED_PATTERNS = [re.compile(re.escape(b), re.I) for b in BANNED] + [re.compile(r"harness the", re.I)]


def render():
    chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not pathlib.Path(chrome).exists():
        import shutil
        chrome = shutil.which("chrome") or chrome
    cmd = [
        chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
        "--virtual-time-budget=15000", f"--print-to-pdf={PDF}",
        HTML.resolve().as_uri(),
    ]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=90)
    print("chrome exit", r.returncode, r.stderr[-300:] if r.stderr else "")


def check():
    html_text = io.open(HTML, encoding="utf-8").read()

    issues = []
    if re.search("[\u2014\u2013]", html_text):
        issues.append("em/en dash found in round1.html")
    if "{{" in html_text:
        issues.append("unreplaced {{ placeholder in round1.html")
    for pattern in BANNED_PATTERNS:
        if pattern.search(html_text):
            issues.append(f"banned phrase: {pattern.pattern}")

    if not PDF.exists():
        issues.append("PDF was not produced")
    else:
        size = PDF.stat().st_size
        if size < 10_000:
            issues.append(f"PDF suspiciously small ({size} bytes)")
        if size > 3_000_000:
            issues.append(f"PDF over 3 MB ({size} bytes)")

        try:
            import fitz  # PyMuPDF

            doc = fitz.open(PDF)
            if doc.page_count not in (1, 2):
                issues.append(f"PDF has {doc.page_count} pages, expected 1 or 2")
            full_text = "\n".join(page.get_text() for page in doc)
            if "Harsh Kawatra" not in full_text:
                issues.append("team lead name not found in extracted PDF text")
            if re.search("[\u2014\u2013]", full_text):
                issues.append("em/en dash found in extracted PDF text")
            link_count = sum(len(page.get_links()) for page in doc)
            print(f"PDF pages: {doc.page_count}, extracted link count: {link_count}")
        except ImportError:
            issues.append("PyMuPDF not installed; cannot verify page count/text/dashes in the PDF itself")

    print(f"PDF size: {PDF.stat().st_size if PDF.exists() else 0} bytes")

    if issues:
        print("ISSUES:")
        for i in issues:
            print(" -", i)
        print("ROUND1 FAIL")
        sys.exit(1)
    print("ROUND1 PASS")


if __name__ == "__main__":
    render()
    check()
