import json, io, math, pathlib
D = pathlib.Path(__file__).resolve().parent
CW = {"Poppins|Bold": dict(up=0.70, lo=0.58, dg=0.62, sp=0.27, pu=0.30), "Poppins|ExtraBold": dict(up=0.73, lo=0.60, dg=0.64, sp=0.27, pu=0.31),
      "Inter|Semi Bold": dict(up=0.68, lo=0.55, dg=0.60, sp=0.26, pu=0.30), "Inter|Bold": dict(up=0.70, lo=0.57, dg=0.62, sp=0.26, pu=0.31)}
def cw(ch, t):
    if ch == " ": return t["sp"]
    if ch.isdigit(): return t["dg"]
    if ch in "MW@%": return t["up"] * 1.2
    if ch.isupper() or ch == "₹": return t["up"]
    if ch.islower(): return t["lo"]
    return t["pu"]
rows = json.load(io.open(D / "probe.json", encoding="utf-8")); worst = 0
for fam, size, s, real in rows:
    raw = sum(cw(c, CW[fam]) for c in s) * size; r = real / raw; worst = max(worst, r)
    print("%-18s %3d %-26s real %6.1f mock %6.1f ratio %.3f" % (fam, size, s, real, raw, r))
k = math.ceil(worst * 100) / 100 + 0.01
io.open(D / "mock_k.txt", "w").write("%.2f" % k); print("MOCK_K", "%.2f" % k)
