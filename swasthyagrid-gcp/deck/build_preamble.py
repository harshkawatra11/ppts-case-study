"""Build swasthyagrid-gcp/deck/preamble.js from the validated PRAMAAN preamble plus a fixed patch."""
import pathlib
ROOT = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court")
SRC = ROOT / "maudrik-policy" / "deck" / "batch_1_2_3.js"
DST = ROOT / "swasthyagrid-gcp" / "deck" / "preamble.js"
t = SRC.read_text(encoding="utf-8")
pre = t[:t.index("// ===== END PREAMBLE =====")]


def rep(old, new, count=1):
    global pre
    n = pre.count(old)
    assert n == count, (old[:60], n)
    pre = pre.replace(old, new)


rep("// ===== PRAMAAN PREAMBLE v1 =====", "// ===== SWASTHYAGRID PREAMBLE v1 =====")
start = pre.index("const C = {")
end = pre.index("};", start) + 2
NEWC = """const C = {
  primary:{r:0.059,g:0.478,b:0.302}, primaryDeep:{r:0.039,g:0.322,b:0.200},
  accent:{r:0.984,g:0.737,b:0.016}, alert:{r:0.918,g:0.263,b:0.208},
  tint:{r:0.812,g:0.933,b:0.859}, alertTint:{r:0.988,g:0.910,b:0.902},
  blue:{r:0.102,g:0.451,b:0.910}, blueDeep:{r:0.090,g:0.306,b:0.651}, blueTint:{r:0.824,g:0.890,b:0.988},
  good:{r:0.204,g:0.659,b:0.325}, accentTint:{r:0.996,g:0.969,b:0.878},
  ink:{r:0.039,g:0.039,b:0.039}, surface:{r:0.929,g:0.929,b:0.929},
  surfaceAlt:{r:0.965,g:0.965,b:0.965}, white:{r:1,g:1,b:1}
};"""
pre = pre[:start] + NEWC + pre[end:]
rep('const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Gursimran Kaur","Guru Gobind Singh Indraprastha University","Member"],["Dayita Arora","Ramjas College, University of Delhi","Member"]];',
    'const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Gursimran Kaur","Guru Gobind Singh Indraprastha University","Member"]];')
rep("hh+rh*3", "hh+rh*TEAM.length", 2)
rep("addRect(slide,x,y,w,h,act?C.primary:C.accent,C.ink,2);", "addRect(slide,x,y,w,h,act?C.blue:C.accent,C.ink,2);")
rep("addChip(s,1700,118,156,56,counter,C.primaryDeep,C.white,24);", "addChip(s,1700,118,156,56,counter,C.blueDeep,C.white,24);")
for bad in ("PRAMAAN PREAMBLE", "Dayita"):
    assert bad not in pre, bad
DST.write_text(pre, encoding="utf-8")
print(DST, len(pre), "chars")
