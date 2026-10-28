"""SwasthyaGrid impact model (Team IdeaForge, Sep 2026). Deterministic, no inputs, no network.

Stock-out days = facilities x tracer medicines x 365 x (1 - availability).
Avoided days  = stock-out days x cut.  Availability after = a + (1 - a) x cut.
Inputs:
  facilities   31,882 PHCs + 6,359 CHCs (MoHFW Health Dynamics of India 2022-23, 31 Mar 2023)
  tracer meds  7 (the prototype catalogue: Adrenaline, ARV, ASV, ORS, Oxytocin, Paracetamol, Tetanus Toxoid)
  availability 66% low, 72.2% mid, 80% high (PMC8654139: 50 key medicines, 10 public facilities)
  cut          30% bear, 50% base, 80% bull (bull = eVIN's reported stock-out reduction, UNDP)
Assumption: point-in-time non-availability approximates the share of item-days out of stock.
"""
PHC, CHC = 31882, 6359
F = PHC + CHC
ITEMS, DAYS = 7, 365
AVAIL = {"low": 0.66, "mid": 0.722, "high": 0.80}
CUT = {"bear": 0.30, "base": 0.50, "bull": 0.80}


def ind(n):
    s = str(int(round(n)))
    if len(s) <= 3:
        return s
    last, rest, parts = s[-3:], s[:-3], []
    while len(rest) > 2:
        parts.insert(0, rest[-2:])
        rest = rest[:-2]
    if rest:
        parts.insert(0, rest)
    return ",".join(parts) + "," + last


def lakh(x):
    return f"{x/1e5:.1f} lakh"


def crore(x):
    return f"{x/1e7:.2f} crore"


print("facilities", ind(F))
print("facility-medicine lines", ind(F * ITEMS))
base = F * ITEMS * DAYS * (1 - AVAIL["mid"])
print("baseline stock-out days a year", ind(base), "=", crore(base))
for k, c in CUT.items():
    after = (AVAIL["mid"] + (1 - AVAIL["mid"]) * c) * 100
    print(k, f"{int(c*100)}%", ind(base * c), "=", lakh(base * c), "=", crore(base * c),
          "availability after", f"{after:.1f}%")
print("sensitivity (lakh days avoided)")
for a in ("low", "mid", "high"):
    print(f"{AVAIL[a]*100:g}%", " ".join(f"{F*ITEMS*DAYS*(1-AVAIL[a])*c/1e5:.1f}" for c in CUT.values()))
