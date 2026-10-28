"""Build nexora/deck/preamble.js from the validated SwasthyaGrid preamble plus a fixed patch."""
import pathlib
ROOT = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court")
SRC = ROOT / "swasthyagrid-gcp" / "deck" / "preamble.js"
DST = ROOT / "swasthyagrid-gcp" / "nexora" / "deck" / "preamble.js"
pre = SRC.read_text(encoding="utf-8")


def rep(old, new, count=1):
    global pre
    n = pre.count(old)
    assert n == count, (old[:60], n)
    pre = pre.replace(old, new)


rep("// ===== SWASTHYAGRID PREAMBLE v1 =====", "// ===== NEXORA PREAMBLE v1 =====")
rep('const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Gursimran Kaur","Guru Gobind Singh Indraprastha University","Member"]];',
    'const TEAM=[["Harsh Kawatra","Delhi Technological University","Founder"]];')
rep("addRect(slide,x,y,w,h,act?C.blue:C.accent,C.ink,2);", "addRect(slide,x,y,w,h,act?C.primary:C.accent,C.ink,2);")
rep("addChip(s,1700,118,156,56,counter,C.blueDeep,C.white,24);", "addChip(s,1700,118,156,56,counter,C.primaryDeep,C.white,24);")
for bad in ("Gursimran", "SWASTHYAGRID PREAMBLE"):
    assert bad not in pre, bad
DST.write_text(pre, encoding="utf-8")
print(DST, len(pre), "chars")
