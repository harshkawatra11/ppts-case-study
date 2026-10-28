"""Print abstract.html to a one-page A4 PDF with headless Chrome. Run: python build_pdf.py"""
import pathlib, shutil, subprocess
HERE = pathlib.Path(__file__).resolve().parent
HTML = HERE / "abstract.html"
PDF = HERE / "TeamIdeaForge_SwasthyaGrid_HackBVP8_Abstract.pdf"
candidates = [shutil.which("chrome"), r"C:\Program Files\Google\Chrome\Application\chrome.exe",
              r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"]
chrome = next((c for c in candidates if c and pathlib.Path(c).exists()), None)
assert chrome, "Chrome not found"
if PDF.exists():
    PDF.unlink()
cmd = [chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--run-all-compositor-stages-before-draw",
       "--virtual-time-budget=30000", f"--print-to-pdf={PDF}", HTML.as_uri()]
r = subprocess.run(cmd, capture_output=True, text=True, timeout=240)
print("chrome exit", r.returncode)
print(PDF, PDF.exists() and PDF.stat().st_size)
