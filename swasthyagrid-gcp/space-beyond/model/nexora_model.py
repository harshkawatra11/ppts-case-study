"""SwasthyaGrid NEXORA model (Team IdeaForge, Oct 2026). Deterministic, no inputs, no network.
  python nexora_model.py   prints the reference output and writes model_output.txt next to this file.
Impact block is unchanged from swasthyagrid-gcp/model/impact_model.py. Money in Rs lakh (L) and crore (Cr); 1 Cr = 100 L."""
import pathlib
PHC, CHC = 31882, 6359
F = PHC + CHC
ITEMS, DAYS = 7, 365
AVAIL = {"low": 0.66, "mid": 0.722, "high": 0.80}
CUT = {"bear": 0.30, "base": 0.50, "bull": 0.80}
DISTRICTS, ASPIRATIONAL, RAJASTHAN = 780, 112, 41
BASE_L, FAC_PER_DIST, PER_FAC_RS, SUPPORT_L = 4, 50, 14000, 1
NHM_CR = 37227
GM = {"bear": 0.62, "base": 0.71, "bull": 0.76}
CAC_L, LIFE_YRS, ONBOARD_L = 4, 5, 3
PATH = {"bear": [12, 30, 50], "base": [12, 45, 80], "bull": [12, 60, 105]}
TEL_CR, TEL_YRS, TEL_D = 390.26, 6.0, 33
ODI_CR, ODI_YRS, ODI_D = 168.0, 5 + 10 / 12, 30


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


def cr(lakh):
    return lakh / 100.0


out = []
P = out.append
acv = BASE_L + FAC_PER_DIST * PER_FAC_RS / 1e5 + SUPPORT_L
P("== IMPACT ==")
P("facilities %s" % ind(F))
base = F * ITEMS * DAYS * (1 - AVAIL["mid"])
P("baseline stock-out days a year %s = %.2f crore" % (ind(base), base / 1e7))
for k, c in CUT.items():
    after = (AVAIL["mid"] + (1 - AVAIL["mid"]) * c) * 100
    P("%s %d%% avoided %s = %.1f lakh = %.2f crore | availability after %.1f%%" % (k, c * 100, ind(base * c), base * c / 1e5, base * c / 1e7, after))
P("base avoided per facility a year %.1f" % (base * 0.5 / F))
P("base avoided per district a year %s" % ind(base * 0.5 / DISTRICTS))
P("sensitivity, lakh days avoided (rows availability, cols cut 30/50/80)")
for a in ("low", "mid", "high"):
    P("  %g%% %s" % (AVAIL[a] * 100, " ".join("%.1f" % (F * ITEMS * DAYS * (1 - AVAIL[a]) * c / 1e5) for c in CUT.values())))
P("== MARKET ==")
P("ACV %.1f L = base %d + per-facility %.1f (%d x Rs %s) + support %d" % (acv, BASE_L, FAC_PER_DIST * PER_FAC_RS / 1e5, FAC_PER_DIST, ind(PER_FAC_RS), SUPPORT_L))
P("facilities per district %.1f" % (F / DISTRICTS))
for name, n in (("TAM all districts", DISTRICTS), ("SAM aspirational districts", ASPIRATIONAL), ("Beachhead Rajasthan", RAJASTHAN), ("SOM Y3 base", PATH["base"][2])):
    P("%s %d x %.0f L = Rs %.2f Cr a year" % (name, n, acv, cr(n * acv)))
P("SOM share of TAM %.1f%%" % (100.0 * PATH["base"][2] / DISTRICTS))
P("NHM per district Rs %.2f Cr | ACV share %.2f%%" % (NHM_CR / DISTRICTS, 100 * cr(acv) / (NHM_CR / DISTRICTS)))
P("== UNIT ECONOMICS (base) ==")
gp_m = acv * GM["base"] / 12
P("gross profit per district per month %.3f L | CAC payback %.1f months" % (gp_m, CAC_L / gp_m))
ltv = acv * GM["base"] * LIFE_YRS
P("LTV (%d yrs) %.1f L | LTV:CAC %.2fx" % (LIFE_YRS, ltv, ltv / CAC_L))
P("== REVENUE PATH (Rs Cr) ==")
for k in ("bear", "base", "bull"):
    d = PATH[k]
    arr = [cr(x * acv) for x in d]
    new = [d[0], d[1] - d[0], d[2] - d[1]]
    onb = [cr(x * ONBOARD_L) for x in new]
    bill = [a + o for a, o in zip(arr, onb)]
    P("%s districts %s | ARR %s | onboarding %s | billings %s | Y3 recurring %.1f%% | GM %d%% | Y3 gross profit %.2f" % (
        k, d, " ".join("%.2f" % x for x in arr), " ".join("%.2f" % x for x in onb), " ".join("%.2f" % x for x in bill),
        100 * arr[2] / bill[2], GM[k] * 100, arr[2] * GM[k]))
P("== SENSITIVITY, Y3 ARR Rs Cr (base 9.60) ==")
b = PATH["base"][2]
P("districts by Y3 50 to 105: %.2f to %.2f" % (cr(50 * acv), cr(105 * acv)))
P("ACV Rs 9 L to Rs 15 L: %.2f to %.2f" % (cr(b * 9), cr(b * 15)))
lo = BASE_L + 35 * PER_FAC_RS / 1e5 + SUPPORT_L
hi = BASE_L + 65 * PER_FAC_RS / 1e5 + SUPPORT_L
P("facilities per district 35 to 65 (ACV %.1f to %.1f L): %.2f to %.2f" % (lo, hi, cr(b * lo), cr(b * hi)))
P("== CUSTOMER ROI (CAG) ==")
for name, tot, yrs, d in (("Telangana", TEL_CR, TEL_YRS, TEL_D), ("Odisha", ODI_CR, ODI_YRS, ODI_D)):
    py = tot / yrs
    pd = py / d
    P("%s Rs %.2f Cr over %.2f yrs = Rs %.2f Cr a year = Rs %.2f Cr per district a year | licence pays back at %.1f%% redeployed" % (
        name, tot, yrs, py, pd, 100 * cr(acv) / pd))
text = "\n".join(out)
print(text)
pathlib.Path(__file__).with_name("model_output.txt").write_text(text + "\n", encoding="utf-8")
