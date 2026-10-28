# ===== ALCHEMY WHITENESS MODEL v1 =====
"""Physics proof of concept and economics for Asian Paints Alchemy, Case Study 1 (whiteness).
Run from the repo root:
  python -X utf8 asian-paints-alchemy/model/whiteness_model.py          run, check, write outputs
  python -X utf8 asian-paints-alchemy/model/whiteness_model.py --dry    run and print, write nothing
Every optical result is computed here from first principles: multilayer Mie theory for single particles, the
Percus-Yevick hard-sphere structure factor for crowding, two-layer Kubelka-Munk with the Saunderson correction for films,
and CIE 1931 colorimetry under D65. Every assumption sits in A with an ID, base, bear and bull values and its basis.
Nothing in this file is a measurement of a real paint. Runtime is about 10 to 20 minutes."""
import sys, json, math, hashlib, io, pathlib, time
import numpy as np
from scipy.special import spherical_jn as _jn, spherical_yn as _yn
from scipy.optimize import brentq
DRY = "--dry" in sys.argv
try: HERE = pathlib.Path(__file__).resolve().parent
except NameError: HERE = pathlib.Path("asian-paints-alchemy/model").resolve()
T0 = time.time()
def log(*a): print(*a, "| t", round(time.time() - T0), "s", flush=True)

# ---------- spectral grid and CIE data: D65 relative SPD and CIE 1931 2 degree observer, 380 to 720 nm at 10 nm ----------
LAM = np.arange(380, 721, 10).astype(float)
D65 = np.array([49.98,54.65,82.75,91.49,93.43,86.68,104.86,117.01,117.81,114.86,115.92,108.81,109.35,107.80,104.79,107.69,104.41,104.05,
                100.00,96.33,95.79,88.69,90.01,89.60,87.70,83.29,83.70,80.03,80.21,82.28,78.28,69.72,71.61,74.35,61.60])
XB = np.array([0.001368,0.004243,0.014310,0.043510,0.134380,0.283900,0.348280,0.336200,0.290800,0.195360,0.095640,0.032010,0.004900,
               0.009300,0.063270,0.165500,0.290400,0.433450,0.594500,0.762100,0.916300,1.026300,1.062200,1.002600,0.854450,0.642400,
               0.447900,0.283500,0.164900,0.087400,0.046770,0.022700,0.011359,0.005790,0.002899])
YB = np.array([0.000039,0.000120,0.000396,0.001210,0.004000,0.011600,0.023000,0.038000,0.060000,0.090980,0.139020,0.208020,0.323000,
               0.503000,0.710000,0.862000,0.954000,0.994950,0.995000,0.952000,0.870000,0.757000,0.631000,0.503000,0.381000,0.265000,
               0.175000,0.107000,0.061000,0.032000,0.017000,0.008210,0.004102,0.002091,0.001047])
ZB = np.array([0.006450,0.020050,0.067850,0.207400,0.645600,1.385600,1.747060,1.772110,1.669200,1.287640,0.812950,0.465180,0.272000,
               0.158200,0.078250,0.042160,0.020300,0.008750,0.003900,0.002100,0.001650,0.001100,0.000800,0.000340,0.000190,0.000050,
               0.000020,0,0,0,0,0,0,0,0])

# ---------- assumptions: ID -> (base, bear, bull, unit, basis). Bear is the value least favourable to the proposal ----------
A = {
 "A01": (30.0, 30.0, 30.0, "um", "Dry film per coat of a premium interior emulsion; two coats; the same wet film and spreading rate for every system compared"),
 "A02": (0.18, 0.18, 0.18, "fraction", "TiO2 pigment volume concentration of the premium baseline film (about 20 percent TiO2 by weight in the can)"),
 "A03": (0.20, 0.20, 0.20, "fraction", "Coarse ground calcium carbonate (3 um) volume fraction in the baseline film"),
 "A04": (250.0, 250.0, 250.0, "nm", "Rutile pigment median crystal diameter, lognormal geometric standard deviation 1.35"),
 "A05": (0.35, 0.25, 0.45, "fraction", "Porosity of the air-network base coat; pigment coating layers on paper run 25 to 45 percent"),
 "A06": (0.25, 0.25, 0.25, "fraction", "Binder share of base-coat solids by volume (the base coat is formulated above its critical PVC)"),
 "A07": (0.10, 0.25, 0.0, "fraction", "Share of base-coat pore volume filled by the seal coat during application (infiltration)"),
 "A08": ("bruggeman", "binder-wetted", "air", "rule", "Optical surroundings of base-coat particles: Bruggeman mix of the air and binder that remain; bear halves the air share; bull is pure air"),
 "A09": (600.0, 600.0, 600.0, "nm", "Median diameter of the precipitated calcium carbonate in the base coat, lognormal geometric standard deviation 1.4"),
 "A10": (1.5e-4, 1.5e-4, 1.5e-4, "1/um", "Background absorption of binder and trace impurities per unit binder volume; sets baseline luminous reflectance at full hiding near 91 percent"),
 "A11": (0.2, 0.2, 0.2, "Y units", "Brightness tolerance: the proposal's luminous reflectance over white may sit at most this far below the baseline"),
 "A12": (0.998, 0.998, 0.998, "ratio", "Minimum two-coat contrast ratio over black (1 percent) and white (80 percent) substrates"),
 "A13": (250.0, 200.0, 300.0, "INR/kg", "Landed price of rutile TiO2 pigment in India"),
 "A14": (4.0, 4.0, 4.0, "g/cm3", "Density of pigment-grade rutile"),
 "A15": (25.0, 30.0, 20.0, "INR/kg", "Price of fine precipitated calcium carbonate (0.6 um)"),
 "A16": (8.0, 8.0, 8.0, "INR/kg", "Price of coarse ground calcium carbonate"),
 "A17": (190.0, 190.0, 190.0, "INR/kg", "Price of acrylic binder solids"),
 "A18": (3.0, 2.5, 3.5, "kg CO2e/kg", "Cradle-to-gate footprint of TiO2 pigment"),
 "A19": (2.7, 2.7, 2.7, "g/cm3", "Density of calcium carbonate"),
 "A20": (1.1, 1.1, 1.1, "g/cm3", "Density of acrylic binder solids"),
 "A21": (35500.0, 35500.0, 35500.0, "INR Cr", "Asian Paints consolidated revenue, FY26"),
 "A22": (0.563, 0.563, 0.563, "share", "Raw material and packaging cost as a share of revenue (one minus the 43.7 percent FY26 gross margin)"),
 "A23": (0.15, 0.10, 0.20, "share", "TiO2 share of the raw material bill"),
 "A24": (0.40, 0.30, 0.50, "share", "Share of TiO2 use that sits in interior emulsions and their primers (the addressable use)"),
 "A25": (0.40, 0.20, 0.60, "share", "Adoption across the addressable volume by year 5"),
 "A26": (2.5, 2.5, 2.5, "kg CO2e/kg", "Cradle-to-gate footprint of acrylic binder solids"),
 "A27": (0.6, 0.8, 0.4, "kg CO2e/kg", "Cradle-to-gate footprint of precipitated calcium carbonate"),
 "A28": (15.0, 20.0, 12.0, "um", "Minimum dry film of the seal coat, so that it forms a continuous, scrubbable skin over a porous base"),
 "A29": (0.50, 0.50, 0.50, "um/s", "Water evaporation rate of a fresh film, hot and dry interior (north India summer)"),
 "A30": (0.25, 0.25, 0.25, "um/s", "Water evaporation rate of a fresh film, composite climate interior"),
 "A31": (0.10, 0.10, 0.10, "um/s", "Water evaporation rate of a fresh film, warm and humid interior (coastal monsoon)"),
}
def av(i, s="base"): return A[i][{"base": 0, "bear": 1, "bull": 2}[s]]

# ---------- optical constants ----------
def n_rutile(l):
    """Devore (1951) ordinary and extraordinary dispersion, isotropic average (2 no + ne)/3; Urbach tail for the band edge"""
    u = l / 1000; no = math.sqrt(5.913 + 0.2441 / (u * u - 0.0803)); ne = math.sqrt(7.197 + 0.3322 / (u * u - 0.0843))
    E = 1239.84 / l; k = min(1.0, 3.3e-3 * math.exp((E - 3.05) / 0.03))
    return complex((2 * no + ne) / 3, k)
def n_binder(l):
    """acrylic binder approximated by PMMA (Sultanova et al. 2009 dispersion)"""
    u = l / 1000; return math.sqrt(1 + 1.1819 * u * u / (u * u - 0.011313))
CONST = {"calcite": 1.60, "ZnS": 2.37, "ZrO2": 2.17, "BaSO4": 1.64, "PS": 1.59, "organic": 1.96, "air": 1.0, "silica": 1.46}

# ---------- multilayer Mie theory ----------
TH = np.linspace(1e-4, np.pi, 361); MU = np.cos(TH); SINT = np.sin(TH)
def _psi(n, z): return z * _jn(n, z)
def _dpsi(n, z): return _jn(n, z) + z * _jn(n, z, derivative=True)
def _chi(n, z): return -z * _yn(n, z)
def _dchi(n, z): return -(_yn(n, z) + z * _yn(n, z, derivative=True))
def mie(radii, ms, nh, lam):
    """radii (nm): outer radius of each layer, inner to outer. ms: complex index of each layer. nh: host index.
    Returns Csca and Cabs (nm2), the differential scattering cross-section on TH (nm2/sr), and the host wavenumber."""
    k = 2 * np.pi * nh / lam; x = [k * r for r in radii]; m = [ml / nh for ml in ms] + [1.0]; xo = x[-1]
    N = int(xo + 4 * xo ** (1 / 3) + 2) + 2; ns = np.arange(1, N + 1); a = np.zeros(N, complex); b = np.zeros(N, complex)
    for i, n in enumerate(ns):
        for mode in (0, 1):
            Ac, Bc = 1 + 0j, 0j
            for l in range(len(x)):
                mi, mo, xl = m[l], m[l + 1], x[l]
                Ri = Ac * _psi(n, mi * xl) + Bc * _chi(n, mi * xl); dRi = Ac * _dpsi(n, mi * xl) + Bc * _dchi(n, mi * xl)
                v1, v2 = (Ri, dRi * mo / mi) if mode == 0 else (Ri * mo / mi, dRi)
                p, c, dp, dc = _psi(n, mo * xl), _chi(n, mo * xl), _dpsi(n, mo * xl), _dchi(n, mo * xl); det = p * dc - c * dp
                Ac, Bc = (v1 * dc - c * v2) / det, (p * v2 - dp * v1) / det
            (a if mode == 0 else b)[i] = Bc / (Bc + 1j * Ac)
    Cext = 2 * np.pi / k ** 2 * np.sum((2 * ns + 1) * np.real(a + b)); Csca = 2 * np.pi / k ** 2 * np.sum((2 * ns + 1) * (abs(a) ** 2 + abs(b) ** 2))
    S1 = np.zeros_like(TH, complex); S2 = np.zeros_like(TH, complex); pm1 = np.zeros_like(MU); pi_ = np.ones_like(MU)
    for n in ns:
        tau = n * MU * pi_ - (n + 1) * pm1; f = (2 * n + 1) / (n * (n + 1))
        S1 += f * (a[n - 1] * pi_ + b[n - 1] * tau); S2 += f * (a[n - 1] * tau + b[n - 1] * pi_)
        pm1, pi_ = pi_, ((2 * n + 1) * MU * pi_ - (n + 1) * pm1) / n
    return Csca, Cext - Csca, (abs(S1) ** 2 + abs(S2) ** 2) / (2 * k ** 2), k

# ---------- crowding: Percus-Yevick hard-sphere structure factor (Wertheim solution) ----------
def s_py(x, phi):
    if phi <= 0: return np.ones_like(x)
    al = (1 + 2 * phi) ** 2 / (1 - phi) ** 4; be = -6 * phi * (1 + phi / 2) ** 2 / (1 - phi) ** 4; ga = phi * al / 2
    nc = -24 * phi / x ** 6 * (al * x ** 3 * (np.sin(x) - x * np.cos(x)) + be * x ** 2 * (2 * x * np.sin(x) + (2 - x ** 2) * np.cos(x) - 2)
         + ga * (-x ** 4 * np.cos(x) + 4 * ((3 * x ** 2 - 6) * np.cos(x) + (x ** 3 - 6 * x) * np.sin(x) + 6)))
    return 1 / (1 - nc)

# ---------- particle species: geometry as a function of diameter d (nm) and wavelength l (nm) ----------
def solid(mat): return lambda d, l: ([d / 2], [n_rutile(l) if mat == "TiO2" else CONST[mat]])
SPEC = {
 "TiO2":    (solid("TiO2"), av("A04"), 1.35, "Rutile pigment, 250 nm"),
 "GCC3":    (solid("calcite"), 3000.0, 1.6, "Coarse ground calcium carbonate, 3 um"),
 "PCC":     (solid("calcite"), av("A09"), 1.4, "Fine precipitated calcium carbonate, 0.6 um"),
 "ZnS":     (solid("ZnS"), 300.0, 1.35, "Zinc sulfide, 300 nm"),
 "ZrO2":    (solid("ZrO2"), 300.0, 1.35, "Zirconia, 300 nm"),
 "BaSO4":   (solid("BaSO4"), 1000.0, 1.5, "Blanc fixe, 1 um"),
 "ORG":     (solid("organic"), 350.0, 1.35, "Organic crystal sphere, n 1.96 (isoxanthopterin proxy), 350 nm"),
 "HOLLOWP": (lambda d, l: ([0.275 * d, d / 2], [1.0, CONST["PS"]]), 400.0, 1.15, "Hollow polymer opacifier, 400 nm, void 55 percent of diameter"),
 "YOLK":    (lambda d, l: ([112.5, 262.5, 312.5], [n_rutile(l), 1.0, CONST["PS"]]), 625.0, 1.0001, "Rutile 225 nm inside a 150 nm air gap and a 50 nm polystyrene shell"),
 "HTIO2":   (lambda d, l: ([d / 2 - 40, d / 2], [1.0, n_rutile(l)]), 350.0, 1.15, "Hollow rutile sphere, 350 nm, 40 nm wall"),
}
TIO2_SHARE = {"TiO2": 1.0, "YOLK": (112.5 / 312.5) ** 3, "HTIO2": 1 - ((175 - 40) / 175) ** 3}
GHX, GHW = np.polynomial.hermite.hermgauss(5); CACHE = {}
def species(key, lam, nh):
    ck = (key, lam, round(nh, 4))
    if ck in CACHE: return CACHE[ck]
    geo, dg, sg, _ = SPEC[key]; dv = np.zeros_like(TH); ca = 0.0; vt = 0.0
    for xg, wg in zip(GHX, GHW):
        d = dg * math.exp(math.sqrt(2) * math.log(sg) * xg); w = wg / math.sqrt(math.pi); radii, ms = geo(d, lam)
        Cs, Ca, dcs, k = mie(radii, ms, nh, lam); v = 4 / 3 * math.pi * radii[-1] ** 3; dv += w * dcs; ca += w * Ca; vt += w * v
    CACHE[ck] = (dv / vt, ca / vt, 2 * np.pi * nh / lam, 2 * geo(dg, lam)[0][-1]); return CACHE[ck]
def mu_tr_a(key, phi, lam, nh):
    """transport scattering and absorption coefficients (1/um) of one species at volume fraction phi, crowding included"""
    dv, cav, k, dg = species(key, lam, nh); Sq = s_py(2 * k * np.sin(TH / 2) * dg, phi)
    return phi * np.trapezoid(dv * Sq * (1 - MU) * 2 * np.pi * SINT, TH) * 1e3, phi * cav * 1e3
def per_volume(key, nh, lams=None):
    """visible-averaged dilute transport scattering per unit particle volume (1/um)"""
    lams = LAM[2:33] if lams is None else lams
    return float(np.mean([mu_tr_a(key, 1e-4, l, nh(l) if callable(nh) else nh)[0] / 1e-4 for l in lams]))

# ---------- film optics ----------
def coat(comp, host, phib, X, alpha=None, lams=None):
    alpha = av("A10") if alpha is None else alpha; lams = LAM if lams is None else lams; S, K = [], []
    for l in lams:
        nh = host(l) if callable(host) else host; mt = 0.0; ma = alpha * phib
        for key, phi in comp.items():
            if phi > 1e-9: t, a_ = mu_tr_a(key, phi, l, nh); mt += t; ma += a_
        S.append(max(0.75 * mt - 0.25 * ma, 1e-6)); K.append(max(2 * ma, 1e-9))
    return np.array(S), np.array(K), X
def km(S, K, X, Rg):
    a = 1 + K / S; b = np.sqrt(a * a - 1); c = 1 / np.tanh(b * S * X); return (1 - Rg * (a - b * c)) / (a - Rg + b * c)
def saunderson(R, k1=0.04, k2=0.60): return (1 - k1) * (1 - k2) * R / (1 - k2 * R)
def xyz(R): kn = 100 / np.sum(D65 * YB); return kn * np.sum(D65 * XB * R), kn * np.sum(D65 * YB * R), kn * np.sum(D65 * ZB * R)
WN = xyz(np.ones_like(LAM))
def lab(X, Y, Z):
    f = lambda t: t ** (1 / 3) if t > (6 / 29) ** 3 else t / (3 * (6 / 29) ** 2) + 4 / 29
    return 116 * f(Y / WN[1]) - 16, 500 * (f(X / WN[0]) - f(Y / WN[1])), 200 * (f(Y / WN[1]) - f(Z / WN[2]))
def stack(layers, Rg):
    R = np.full(len(layers[0][0]), Rg)
    for (S, K, X) in reversed(layers): R = km(S, K, X, R)
    return saunderson(R)
def judge(layers):
    Rb = stack(layers, 0.01); Rw = stack(layers, 0.80); Xw, Yw, Zw = xyz(Rw); L, a_, b_ = lab(Xw, Yw, Zw)
    return {"CR": float(xyz(Rb)[1] / Yw), "Y": float(Yw), "L": float(L), "b": float(b_), "Rw": [float(v) for v in Rw]}
def bruggeman(f_air, nb=1.49):
    g = lambda e: f_air * (1 - e) / (1 + 2 * e) + (1 - f_air) * (nb * nb - e) / (nb * nb + 2 * e)
    return math.sqrt(brentq(g, 1.0, nb * nb))
def maxwell_garnett(em, ei, f): return em * (ei + 2 * em + 2 * f * (ei - em)) / (ei + 2 * em - f * (ei - em))

# ---------- the premium baseline ----------
DC = av("A01")
def base_coat(phiT, extra=None, host=n_binder):
    comp = {"TiO2": phiT, "GCC3": av("A03")}; comp.update(extra or {})
    return coat(comp, host, max(0.0, 1 - sum(comp.values())), DC)
BASE = judge([base_coat(av("A02"))] * 2)          # the premium white: it sets the brightness target
def ok(r, s="base"): return r["Y"] >= BASE["Y"] - av("A11", s) and r["CR"] >= av("A12", s)
# Fair reference: the least TiO2 the conventional architecture needs to meet the same targets (it has a little slack at 18 percent)
_lo, _hi = 0.05, av("A02")
for _ in range(16):
    _m = (_lo + _hi) / 2
    if ok(judge([base_coat(_m)] * 2)): _hi = _m
    else: _lo = _m
PHI_REF = _hi; REF = judge([base_coat(PHI_REF)] * 2); BASE_TIO2_UM = PHI_REF * 2 * DC

# ---------- the proposal: air-network base coat under a thin seal coat ----------
def proposal(vT1, vT2, X2f, s="base", over=None, base_species="TiO2"):
    o = dict(P=av("A05", s), vB=av("A06", s), finf=av("A07", s), host=av("A08", s)); o.update(over or {})
    P, vB, finf = o["P"], o["vB"], o["finf"]
    X1 = DC / (1 - P); Pe = P * (1 - finf); phiB1 = (1 - P) * vB + P * finf; fair = Pe / (Pe + phiB1)
    nh = 1.0 if o["host"] == "air" else bruggeman(fair * (0.5 if o["host"] == "binder-wetted" else 1.0))
    L1 = coat({base_species: (1 - P) * vT1, "PCC": (1 - P) * (1 - vB - vT1)}, nh, phiB1, X1)
    X2 = DC * X2f - P * finf * X1
    L2 = coat({"TiO2": vT2, "GCC3": 0.10}, n_binder, 1 - vT2 - 0.10, X2)
    r = judge([L2, L1])
    r.update(tio2_um=(1 - P) * vT1 * X1 * (base_species == "TiO2") + vT2 * X2, nh=nh, X1=X1, X2=X2, vT1=vT1, vT2=vT2, X2f=X2f, P=P,
             binder_um=phiB1 * X1 + (1 - vT2 - 0.10) * X2, pcc_um=(1 - P) * (1 - vB - vT1) * X1, gcc_um=0.10 * X2,
             base_TiO2_pvc=(1 - P) * vT1, CR_base_coat_alone=judge([L1])["CR"])
    return r
VT2 = [round(0.02 * i, 2) for i in range(0, 10)]; X2F = [0.6, 0.7, 0.8, 1.0]
def optimise(s="base", over=None, tol=None):
    """least TiO2 per m2 such that brightness and contrast ratio match the baseline and the seal coat is thick enough"""
    best = None; o = dict(over or {}); xmin = o.pop("X2min", av("A28", s))
    for X2f in X2F:
        for vT2 in VT2:
            f = lambda v: proposal(v, vT2, X2f, s, o)
            hi = f(0.6)
            if not ok(hi, s) or hi["X2"] < xmin: continue
            lo_v, hi_v = 0.0, 0.6
            if ok(f(0.0), s): hi_v = 0.0
            else:
                for _ in range(14):
                    mid = (lo_v + hi_v) / 2
                    if ok(f(mid), s): hi_v = mid
                    else: lo_v = mid
            r = f(hi_v)
            if best is None or r["tio2_um"] < best["tio2_um"] - 1e-9: best = r
    return best

# ---------- formatting helpers (Indian digit grouping, no dashes) ----------
def inr_group(n):
    s = str(int(round(abs(n)))); 
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]; parts = []
        while len(head) > 2: parts.insert(0, head[-2:]); head = head[:-2]
        if head: parts.insert(0, head)
        s = ",".join(parts) + "," + tail
    return ("−" if n < 0 else "") + s
def f1(x): return ("%.1f" % x).replace("-", "−")
def f2(x): return ("%.2f" % x).replace("-", "−")
def pct(x, d=0): return (("%." + str(d) + "f") % (100 * x)).replace("-", "−") + "%"
def g_m2(um, rho): return um * rho            # 1 um over 1 m2 is 1 cm3

# ---------- runs: baseline and the three scenarios ----------
log("baseline", {k: round(v, 4) for k, v in BASE.items() if k != "Rw"})
SCEN = {s: optimise(s) for s in ("bear", "base", "bull")}
for s, r in SCEN.items():
    r["saving"] = 1 - r["tio2_um"] / BASE_TIO2_UM
    log(s, "TiO2 um %.3f saving %.1f%% vT1 %.3f vT2 %.2f X2f %.1f nh %.3f" % (r["tio2_um"], 100 * r["saving"], r["vT1"], r["vT2"], r["X2f"], r["nh"]))
PB = SCEN["base"]

# ---------- physics tables ----------
VIS = LAM[2:33:2]
HOSTS = [1.00, 1.10, 1.20, 1.33, 1.40, 1.49, 1.55]
T4 = [(h, per_volume("TiO2", h, VIS)) for h in HOSTS]
ref149 = dict(T4)[1.49]; T4 = [(h, v, v / ref149) for h, v in T4]
log("T4 host index table done")
def halo(t, nh=1.49):
    vals = []
    for l in VIS:
        Cs, Ca, dcs, k = mie([112.5, 112.5 + t], [n_rutile(l), 1.0], nh, l); g = np.trapezoid(dcs * MU * 2 * np.pi * SINT, TH) / np.trapezoid(dcs * 2 * np.pi * SINT, TH)
        vals.append(Cs * (1 - g))
    c = float(np.mean(vals)); vti = 4 / 3 * math.pi * 112.5 ** 3; vp = 4 / 3 * math.pi * (112.5 + t) ** 3
    return c / vti * 1e3, c / vp * 1e3
T5 = [(t,) + halo(t) for t in (0, 20, 40, 80, 150, 250)]
log("T5 halo table done")
def crowd(phi, nh):
    return float(np.mean([mu_tr_a("TiO2", phi, l, nh)[0] for l in VIS]))
d_bind = per_volume("TiO2", 1.49, VIS); d_air = per_volume("TiO2", 1.0, VIS)
T6 = [(phi, crowd(phi, 1.49), crowd(phi, 1.49) / phi / d_bind, crowd(phi, 1.0) if phi <= 0.2 else None,
       (crowd(phi, 1.0) / phi / d_air) if phi <= 0.2 else None) for phi in (0.05, 0.10, 0.15, 0.18, 0.20, 0.25)]
log("T6 crowding table done")

# ---------- architecture screen: two coats of one composition each, TiO2 cut until brightness or contrast fails ----------
EPS_HS = 1.580   # quasi-static permittivity of a hollow silica nanosphere (25 nm outer, 19 nm inner radius)
def host_nanoair(l): return math.sqrt(maxwell_garnett(n_binder(l) ** 2, EPS_HS, 0.30))
def solve_level(make, hi):
    """make(level) -> (judge result, TiO2 um). Smallest level meeting the baseline, or None"""
    r_hi, t_hi = make(hi)
    if not ok(r_hi): return None, r_hi, t_hi
    lo, h = 0.0, hi
    if ok(make(0.0)[0]): h = 0.0
    else:
        for _ in range(14):
            mid = (lo + h) / 2
            if ok(make(mid)[0]): h = mid
            else: lo = mid
    r, t = make(h); return h, r, t
def mk_tio2(extra=None, host=n_binder):
    def f(phi): c = base_coat(phi, extra, host); return judge([c, c]), phi * 2 * DC
    return f
def mk_alt(key, share=0.0, gcc=True):
    def f(phi):
        comp = {key: phi}
        if gcc: comp["GCC3"] = av("A03")
        c = coat(comp, n_binder, max(0.0, 1 - sum(comp.values())), DC); return judge([c, c]), phi * share * 2 * DC
    return f
SCREEN_DEF = [
 ("S01", "Rutile in binder (premium baseline)", "TiO2", mk_tio2(), 0.30, "Reference"),
 ("S02", "Rutile plus hollow polymer opacifier at 15 percent", "HOLLOWP", mk_tio2({"HOLLOWP": 0.15}), 0.30, "Commercial today"),
 ("S03", "Rutile in a binder full of closed nano-air (30 percent)", "TiO2", mk_tio2(None, host_nanoair), 0.30, "Lower-index matrix"),
 ("S04", "Yolk-shell: rutile in an air gap inside a shell", "YOLK", mk_alt("YOLK", TIO2_SHARE["YOLK"]), 0.50, "Particle-level air"),
 ("S05", "Hollow rutile spheres", "HTIO2", mk_alt("HTIO2", TIO2_SHARE["HTIO2"]), 0.40, "Particle-level air"),
 ("S06", "Zinc sulfide, no TiO2", "ZnS", mk_alt("ZnS"), 0.30, "Substitute pigment"),
 ("S07", "Zirconia, no TiO2", "ZrO2", mk_alt("ZrO2"), 0.30, "Substitute pigment"),
 ("S08", "Barium sulfate at high loading, no TiO2", "BaSO4", mk_alt("BaSO4", 0.0, False), 0.55, "Substitute pigment"),
 ("S09", "Organic crystal spheres, n 1.96, no TiO2", "ORG", mk_alt("ORG"), 0.40, "Nature-inspired"),
]
SCREEN = []
for sid, name, key, make, hi, family in SCREEN_DEF:
    lvl, r, t = solve_level(make, hi)
    host = host_nanoair if sid == "S03" else n_binder
    SCREEN.append(dict(id=sid, name=name, family=family, per_vol=per_volume(key, host, VIS), feasible=lvl is not None,
                       level=lvl if lvl is not None else hi, tio2_um=t if lvl is not None else None, Y=r["Y"], CR=r["CR"]))
    log("screen", sid, "feasible" if lvl is not None else "not reachable", round(r["Y"], 2))
r10 = PB
SCREEN.append(dict(id="S10", name="Air network under a seal coat (this proposal, base case)", family="Film architecture", per_vol=per_volume("TiO2", PB["nh"], VIS),
                   feasible=True, level=PB["vT1"], tio2_um=PB["tio2_um"], Y=PB["Y"], CR=PB["CR"]))
r11 = proposal(0.0, 0.0, 0.6)
SCREEN.append(dict(id="S11", name="Air network with no TiO2 in either coat", family="Film architecture", per_vol=per_volume("PCC", PB["nh"], VIS),
                   feasible=ok(r11), level=0.0, tio2_um=0.0 if ok(r11) else None, Y=r11["Y"], CR=r11["CR"]))
def mk12(v):
    r = proposal(v, 0.12, 0.6, "base", None, "ORG"); return r, r["tio2_um"]
lvl12, r12, t12 = solve_level(mk12, 0.6)
SCREEN.append(dict(id="S12", name="Air network with organic crystals in place of base-coat TiO2 (horizon 3)", family="Film architecture",
                   per_vol=per_volume("ORG", PB["nh"], VIS), feasible=lvl12 is not None, level=lvl12 if lvl12 is not None else 0.6,
                   tio2_um=t12 if lvl12 is not None else None, Y=r12["Y"], CR=r12["CR"]))
for row in SCREEN:
    row["saving"] = None if row["tio2_um"] is None else 1 - row["tio2_um"] / BASE_TIO2_UM
    if row["id"] == "S01": row["verdict"] = "Reference"
    elif not row["feasible"]: row["verdict"] = "Discard: cannot match baseline brightness at maximum loading"
    elif row["saving"] < 0.30: row["verdict"] = "Discard: saves less than 30 percent of TiO2"
    elif row["id"] == "S12": row["verdict"] = "Retain for horizon 3"
    else: row["verdict"] = "Retain"
log("screen done")

# ---------- hiding curves: one coat, contrast ratio against grams of TiO2 per m2 ----------
H_BASE = []
for phi in (0.06, 0.09, 0.12, 0.15, 0.18, 0.21, 0.24):
    c = base_coat(phi); H_BASE.append((g_m2(phi * DC, av("A14")), judge([c])["CR"]))
H_AIR = []
P0 = av("A05"); X10 = DC / (1 - P0); Pe0 = P0 * (1 - av("A07")); phiB0 = (1 - P0) * av("A06") + P0 * av("A07")
for v in (0.0, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30):
    L1 = coat({"TiO2": (1 - P0) * v, "PCC": (1 - P0) * (1 - av("A06") - v)}, PB["nh"], phiB0, X10)
    H_AIR.append((g_m2((1 - P0) * v * X10, av("A14")), judge([L1])["CR"]))
log("hiding curves done")

# ---------- tornado on the base-case saving ----------
if "PCC400" not in SPEC:
    SPEC["PCC400"] = (solid("calcite"), 400.0, 1.4, "PCC 0.4 um"); SPEC["PCC800"] = (solid("calcite"), 800.0, 1.4, "PCC 0.8 um")
def opt_pcc(key):
    keep = SPEC["PCC"]; SPEC["PCC"] = SPEC[key]; CACHE_keys = [k for k in CACHE if k[0] == "PCC"]
    saved = {k: CACHE.pop(k) for k in CACHE_keys}
    try: r = optimise("base")
    finally:
        for k in [k for k in CACHE if k[0] == "PCC"]: CACHE.pop(k)
        CACHE.update(saved); SPEC["PCC"] = keep
    return r
TORN_DEF = [
 ("A05", "Base-coat porosity", "0.25", "0.45", lambda: optimise("base", {"P": 0.25}), lambda: optimise("base", {"P": 0.45})),
 ("A07", "Seal-coat infiltration into pores", "25 percent", "none", lambda: optimise("base", {"finf": 0.25}), lambda: optimise("base", {"finf": 0.0})),
 ("A08", "What surrounds base-coat particles", "binder-wetted", "pure air", lambda: optimise("base", {"host": "binder-wetted"}), lambda: optimise("base", {"host": "air"})),
 ("A09", "Base-coat extender size", "0.8 um", "0.4 um", lambda: opt_pcc("PCC800"), lambda: opt_pcc("PCC400")),
 ("A28", "Minimum seal-coat film", "20 um", "12 um", lambda: optimise("base", {"X2min": 20.0}), lambda: optimise("base", {"X2min": 12.0})),
]
TORN = []
for aid, label, lo_l, hi_l, f_lo, f_hi in TORN_DEF:
    r_lo, r_hi = f_lo(), f_hi()
    s_lo = None if r_lo is None else 1 - r_lo["tio2_um"] / BASE_TIO2_UM; s_hi = None if r_hi is None else 1 - r_hi["tio2_um"] / BASE_TIO2_UM
    TORN.append(dict(id=aid, label=label, low_label=lo_l, high_label=hi_l, low=s_lo, high=s_hi, swing=abs((s_hi or 0) - (s_lo or 0))))
    log("tornado", aid, s_lo, s_hi)
TORN.sort(key=lambda d: -d["swing"])

# ---------- per m2 economics and footprint (two coats) ----------
def materials(tio2_um, binder_um, pcc_um, gcc_um, s):
    g = dict(TiO2=g_m2(tio2_um, av("A14")), binder=g_m2(binder_um, av("A20")), PCC=g_m2(pcc_um, av("A19")), GCC=g_m2(gcc_um, av("A19")))
    inr = g["TiO2"] / 1000 * av("A13", s) + g["binder"] / 1000 * av("A17", s) + g["PCC"] / 1000 * av("A15", s) + g["GCC"] / 1000 * av("A16", s)
    co2 = (g["TiO2"] * av("A18", s) + g["binder"] * av("A26", s) + g["PCC"] * av("A27", s) + g["GCC"] * 0.03) / 1000
    return g, inr, co2
ECON = {}
for s in ("bear", "base", "bull"):
    gb, ib, cb = materials(BASE_TIO2_UM, 2 * DC * (1 - PHI_REF - av("A03")), 0.0, 2 * DC * av("A03"), s)
    r = SCEN[s]; gp, ip, cp = materials(r["tio2_um"], r["binder_um"], r["pcc_um"], r["gcc_um"], s)
    ECON[s] = dict(base_g=gb, prop_g=gp, base_inr=ib, prop_inr=ip, base_co2=cb, prop_co2=cp)

# ---------- Asian Paints scale: TiO2 bill, addressable share, adoption ----------
AP = {}
for s in ("bear", "base", "bull"):
    spend = av("A21") * av("A22") * av("A23", s)                         # INR Cr a year of TiO2
    tonnes = spend * 1e7 / av("A13", s) / 1000                            # tonnes a year
    addressed_t = tonnes * av("A24", s) * av("A25", s)
    m2 = addressed_t * 1e6 / ECON[s]["base_g"]["TiO2"]                    # m2 a year painted with the new system
    e = ECON[s]
    AP[s] = dict(tio2_spend_cr=spend, tio2_t=tonnes, m2_mn=m2 / 1e6, tio2_avoided_t=addressed_t * SCEN[s]["saving"],
                 tio2_saving_cr=addressed_t * SCEN[s]["saving"] * 1000 * av("A13", s) / 1e7,
                 net_saving_cr=m2 * (e["base_inr"] - e["prop_inr"]) / 1e7, co2_kt=m2 * (e["base_co2"] - e["prop_co2"]) / 1e6)

# ---------- spectral reflectance over white, and a near-infrared indicator ----------
SPECTRAL = [(int(l), BASE["Rw"][i], PB["Rw"][i]) for i, l in enumerate(LAM) if int(l) % 20 == 0]
NIRL = np.array([800.0, 1000.0, 1200.0, 1500.0])
def nir_pair():
    cb = coat({"TiO2": av("A02"), "GCC3": av("A03")}, n_binder, 1 - av("A02") - av("A03"), DC, lams=NIRL)
    rb = stack([cb, cb], 0.25)
    L1 = coat({"TiO2": (1 - P0) * PB["vT1"], "PCC": (1 - P0) * (1 - av("A06") - PB["vT1"])}, PB["nh"], phiB0, PB["X1"], lams=NIRL)
    L2 = coat({"TiO2": PB["vT2"], "GCC3": 0.10}, n_binder, 1 - PB["vT2"] - 0.10, PB["X2"], lams=NIRL)
    rp = stack([L2, L1], 0.25)
    return [(int(l), float(rb[i]), float(rp[i])) for i, l in enumerate(NIRL)]
NIR = nir_pair()

# ---------- drying Peclet numbers for the horizon 2 one-coat version ----------
kT = 1.380649e-23 * 303.0; ETA = 0.80e-3; HWET = 80e-6
def peclet(r_m, E_um_s): return HWET * E_um_s * 1e-6 / (kT / (6 * math.pi * ETA * r_m))
PECLET = [(name, av(aid), peclet(40e-9, av(aid)), peclet(300e-9, av(aid))) for name, aid in
          (("Hot and dry", "A29"), ("Composite", "A30"), ("Warm and humid", "A31"))]

# ---------- checks ----------
CHECKS = []
def check(name, cond): CHECKS.append((name, bool(cond))); print(("PASS " if cond else "FAIL ") + name)
lam0 = 632.8; r0 = 5.213 * lam0 / (2 * math.pi)
Cs, Ca, _, k0 = mie([r0], [1.55], 1.0, lam0); q0 = Cs / (math.pi * r0 * r0)
check("C1 Mie benchmark m 1.55, x 5.213: Qsca within 0.1 percent of 3.10543 (Bohren and Huffman)", abs(q0 - 3.10543) / 3.10543 < 1e-3)
Cs2, _, _, _ = mie([0.6 * r0, r0], [1.55, 1.55], 1.0, lam0)
check("C2 a two-layer sphere with equal layers equals the homogeneous sphere", abs(Cs2 - Cs) / Cs < 1e-9)
_, Ca3, _, _ = mie([200.0], [complex(1.5, 0.1)], 1.0, 550.0)
check("C3 an absorbing sphere has positive absorption", Ca3 > 0)
xs = np.array([0.15]); phi = 0.2
check("C4 Percus-Yevick S(q to 0) equals the compressibility limit within 3 percent", abs(s_py(xs, phi)[0] / ((1 - phi) ** 4 / (1 + 2 * phi) ** 2) - 1) < 0.03)
S_, K_ = 1.0, 0.01; a_ = 1 + K_ / S_; Rinf = a_ - math.sqrt(a_ * a_ - 1)
check("C5 Kubelka-Munk thick-film limit equals R infinity", abs(km(np.array([S_]), np.array([K_]), 1e4, np.array([0.0]))[0] - Rinf) < 1e-9)
check("C6 baseline is a plausible premium white (CR 0.995 to 0.9995, Y 88 to 93, b* 0.5 to 3)", 0.995 <= BASE["CR"] <= 0.9995 and 88 <= BASE["Y"] <= 93 and 0.5 <= BASE["b"] <= 3)
check("C7 base-case proposal meets brightness, contrast ratio and seal thickness", ok(PB) and PB["X2"] >= av("A28") - 1e-9)
check("C8 scenario order bear < base < bull", SCEN["bear"]["saving"] < SCEN["base"]["saving"] < SCEN["bull"]["saving"])
check("C9 contrast ratio rises with TiO2 in the baseline coat", all(H_BASE[i][1] < H_BASE[i + 1][1] for i in range(len(H_BASE) - 1)))
check("C10 every reflectance lies between 0 and 1", all(0 <= v <= 1 for v in BASE["Rw"] + PB["Rw"]))
check("C11 rutile scatters more per unit volume in air than in binder", T4[0][2] > 1.5)
check("C12 the screen's baseline row reproduces the fair reference within 1 percent of TiO2", abs(SCREEN[0]["tio2_um"] - BASE_TIO2_UM) / BASE_TIO2_UM < 0.01)
check("C13 the fair reference needs between 85 and 100 percent of the premium's TiO2", 0.85 <= PHI_REF / av("A02") <= 1.0)
NCHK = sum(1 for _, c in CHECKS if c)

# ---------- outputs ----------
def rnd(x, d=4):
    if isinstance(x, float): return round(x, d)
    if isinstance(x, dict): return {k: rnd(v, d) for k, v in x.items() if k != "Rw"}
    if isinstance(x, (list, tuple)): return [rnd(v, d) for v in x]
    return x
OUT = dict(assumptions={k: list(v) for k, v in A.items()}, baseline=rnd(BASE), reference=dict(phi=rnd(PHI_REF), **rnd(REF)), baseline_tio2_um=rnd(BASE_TIO2_UM),
           scenarios={s: rnd(r) for s, r in SCEN.items()}, host_index=rnd(T4), halo=rnd(T5), crowding=rnd(T6), screen=rnd(SCREEN),
           hiding=dict(baseline=rnd(H_BASE), air_network=rnd(H_AIR)), tornado=rnd(TORN), economics=rnd(ECON), ap_scale=rnd(AP),
           spectral=rnd(SPECTRAL), nir=rnd(NIR), peclet=rnd(PECLET), checks=[[n, c] for n, c in CHECKS])
HASH = hashlib.sha1(json.dumps(OUT, sort_keys=True).encode()).hexdigest()[:10]; OUT["hash"] = HASH
print("CHECKS %d/%d" % (NCHK, len(CHECKS)), "HASH", HASH)
print("FINDINGS", [round(100 * SCEN[s]["saving"], 1) for s in ("bear", "base", "bull")], round(AP["base"]["net_saving_cr"]), round(ECON["base"]["base_inr"], 2), round(ECON["base"]["prop_inr"], 2))

# ---------- values for the deck (every number on a slide comes from here) ----------
E, Eb, Eu = ECON["base"], ECON["bear"], ECON["bull"]
def gfmt(x): return f1(x) + " g"
def cut(a, b): return pct(1 - b / a)
V = dict(
 hash=HASH, checks="%d of %d" % (NCHK, len(CHECKS)),
 sav=pct(PB["saving"]), sav_bear=pct(SCEN["bear"]["saving"]), sav_bull=pct(SCEN["bull"]["saving"]),
 prem_pvc=pct(av("A02")), ref_pvc=pct(PHI_REF, 1),
 g_ref=gfmt(E["base_g"]["TiO2"]), g_prop=gfmt(E["prop_g"]["TiO2"]), g_cut=gfmt(E["base_g"]["TiO2"] - E["prop_g"]["TiO2"]),
 g_prop_bear=gfmt(Eb["prop_g"]["TiO2"]), g_prop_bull=gfmt(Eu["prop_g"]["TiO2"]),
 binder_ref=gfmt(E["base_g"]["binder"]), binder_prop=gfmt(E["prop_g"]["binder"]), binder_cut=cut(E["base_g"]["binder"], E["prop_g"]["binder"]),
 pcc_g=gfmt(E["prop_g"]["PCC"]),
 inr_ref="₹" + f1(E["base_inr"]), inr_prop="₹" + f1(E["prop_inr"]), inr_cut=cut(E["base_inr"], E["prop_inr"]),
 inr_cut_bear=cut(Eb["base_inr"], Eb["prop_inr"]), inr_cut_bull=cut(Eu["base_inr"], Eu["prop_inr"]),
 co2_ref=f2(E["base_co2"] * 1000 / 1000) + " kg", co2_prop=f2(E["prop_co2"]) + " kg", co2_cut=cut(E["base_co2"], E["prop_co2"]),
 CR_ref="%.4f" % REF["CR"], Y_ref=f1(REF["Y"]), L_ref=f1(REF["L"]), b_ref=f1(REF["b"]),
 CR_prop="%.4f" % PB["CR"], Y_prop=f1(PB["Y"]), L_prop=f1(PB["L"]), b_prop=f1(PB["b"]),
 CR_min="%.3f" % av("A12"), Y_target=f1(BASE["Y"] - av("A11")),
 P=pct(PB["P"]), X1=f1(PB["X1"]) + " µm", X2=f1(PB["X2"]) + " µm", dc="%d µm" % DC,
 base_pvc=pct(PB["base_TiO2_pvc"], 1), seal_pvc=pct(PB["vT2"]), nh="%.2f" % PB["nh"],
 cr_base_alone="%.3f" % PB["CR_base_coat_alone"],
 air_gain="%.1fx" % T4[0][2], host_rows=[["%.2f" % h, f1(v), "%.2fx" % r] for h, v, r in T4],
 halo_rows=[["%d nm" % t, f1(a), f1(b)] for t, a, b in T5],
 eff_bind_18=pct([r for r in T6 if abs(r[0] - 0.18) < 1e-9][0][2]), eff_air_18=pct([r for r in T6 if abs(r[0] - 0.18) < 1e-9][0][4]),
 crowd_rows=[[pct(p), f2(a), pct(b), "" if c is None else f2(c), "" if d is None else pct(d)] for p, a, b, c, d in T6],
 screen_rows=[[r["id"], r["name"], r["family"], f1(r["per_vol"]), ("not reached" if r["tio2_um"] is None else gfmt(g_m2(r["tio2_um"], av("A14")))),
               ("n/a" if r["saving"] is None else pct(r["saving"])), f1(r["Y"]), "%.3f" % r["CR"], r["verdict"]] for r in SCREEN],
 hiding_base=[[round(g, 1), round(c, 4)] for g, c in H_BASE], hiding_air=[[round(g, 1), round(c, 4)] for g, c in H_AIR],
 tornado_rows=[[t["label"], t["low_label"], t["high_label"], pct(t["low"]) if t["low"] is not None else "n/a", pct(t["high"]) if t["high"] is not None else "n/a"] for t in TORN],
 ap={s: dict(spend="₹" + inr_group(AP[s]["tio2_spend_cr"]) + " Cr", tonnes=inr_group(AP[s]["tio2_t"]) + " t", m2=inr_group(AP[s]["m2_mn"]) + " mn m²",
             avoided=inr_group(AP[s]["tio2_avoided_t"]) + " t", tio2_cr="₹" + inr_group(AP[s]["tio2_saving_cr"]) + " Cr",
             net_cr="₹" + inr_group(AP[s]["net_saving_cr"]) + " Cr", co2_kt=f1(AP[s]["co2_kt"]) + " kt") for s in AP},
 econ={s: dict(ref="₹" + f1(ECON[s]["base_inr"]), prop="₹" + f1(ECON[s]["prop_inr"]), cut=cut(ECON[s]["base_inr"], ECON[s]["prop_inr"]),
               g_ref=gfmt(ECON[s]["base_g"]["TiO2"]), g_prop=gfmt(ECON[s]["prop_g"]["TiO2"])) for s in ECON},
 scen={s: dict(sav=pct(SCEN[s]["saving"]), base_pvc=pct(SCEN[s]["base_TiO2_pvc"], 1), seal_pvc=pct(SCEN[s]["vT2"]), X2=f1(SCEN[s]["X2"]),
               nh="%.2f" % SCEN[s]["nh"], P=pct(SCEN[s]["P"])) for s in SCEN},
 nir_rows=[["%d nm" % l, pct(b, 1), pct(p, 1)] for l, b, p in NIR],
 peclet_rows=[[n, f2(e), f1(a), f1(b)] for n, e, a, b in PECLET],
 spectral=[[l, round(b, 4), round(p, 4)] for l, b, p in SPECTRAL],
 org_sav=pct(SCREEN[-1]["saving"]) if SCREEN[-1]["saving"] is not None else "n/a",
 cost_ref={k: round(v, 2) for k, v in dict(TiO2=E["base_g"]["TiO2"] / 1000 * av("A13"), binder=E["base_g"]["binder"] / 1000 * av("A17"),
           PCC=E["base_g"]["PCC"] / 1000 * av("A15"), GCC=E["base_g"]["GCC"] / 1000 * av("A16")).items()},
 cost_prop={k: round(v, 2) for k, v in dict(TiO2=E["prop_g"]["TiO2"] / 1000 * av("A13"), binder=E["prop_g"]["binder"] / 1000 * av("A17"),
           PCC=E["prop_g"]["PCC"] / 1000 * av("A15"), GCC=E["prop_g"]["GCC"] / 1000 * av("A16")).items()},
 g_tio2_ref=round(E["base_g"]["TiO2"], 1), g_tio2_prop=round(E["prop_g"]["TiO2"], 1),
 sav_num=round(100 * PB["saving"]), sav_bear_num=round(100 * SCEN["bear"]["saving"]), sav_bull_num=round(100 * SCEN["bull"]["saving"]),
 tornado_num=[[t["label"], t["low_label"], t["high_label"], round(100 * (t["low"] or 0)), round(100 * (t["high"] or 0))] for t in TORN],
 screen_num=[[r["id"], None if r["saving"] is None else round(100 * r["saving"]), round(r["Y"], 1)] for r in SCREEN],
 host_num=[[h, round(v, 2)] for h, v, _ in T4],
 crowd_num=[[round(100 * p), round(100 * b), None if d is None else round(100 * d)] for p, a, b, c, d in T6],
)

# ---------- tables for the research document (Appendix B) ----------
def table(head, rows): return "| " + " | ".join(head) + " |\n|" + "|".join("---" for _ in head) + "|\n" + "\n".join("| " + " | ".join(str(c) for c in r) + " |" for r in rows)
TT = ["# Model tables (generated by whiteness_model.py, do not edit by hand)", "",
 "Model hash `%s`, checks %s, run %s." % (HASH, V["checks"], time.strftime("%d %b %Y")), "",
 "## T1. Assumptions register", "", table(["ID", "Base", "Bear", "Bull", "Unit", "Basis"], [[k, v[0], v[1], v[2], v[3], v[4]] for k, v in A.items()]), "",
 "## T2. Optical constants used at three wavelengths", "",
 table(["Material", "450 nm", "550 nm", "650 nm", "Source of the dispersion"],
       [["Rutile TiO2 (isotropic average)"] + ["%.3f" % n_rutile(l).real for l in (450, 550, 650)] + ["Devore 1951, Urbach edge assumed"],
        ["Acrylic binder (PMMA)"] + ["%.3f" % n_binder(l) for l in (450, 550, 650)] + ["Sultanova et al. 2009"]] +
       [[k, CONST[k], CONST[k], CONST[k], "Constant, handbook value"] for k in CONST]), "",
 "## T3. Model checks", "", table(["Check", "Result"], [[n, "PASS" if c else "FAIL"] for n, c in CHECKS]), "",
 "## T4. Rutile scatters more per unit volume when the medium around it has a lower index", "",
 table(["Host index", "Transport scattering per unit TiO2 volume (1/µm)", "Ratio to binder (1.49)"], V["host_rows"]), "",
 "## T5. A thin air gap around rutile lowers its scattering; a thick one costs film volume", "",
 table(["Air gap around a 225 nm rutile core", "Per unit TiO2 volume (1/µm)", "Per unit particle volume (1/µm)"], V["halo_rows"]), "",
 "## T6. Crowding: scattering efficiency of rutile falls as its volume fraction rises", "",
 table(["TiO2 volume fraction", "In binder (1/µm)", "Efficiency in binder", "In air (1/µm)", "Efficiency in air"], V["crowd_rows"]), "",
 "## T7. The premium baseline and the fair reference", "",
 table(["Film", "TiO2 PVC", "Contrast ratio", "Y over white", "L*", "b*"],
       [["Premium white, two coats of 30 µm", pct(av("A02")), "%.4f" % BASE["CR"], f1(BASE["Y"]), f1(BASE["L"]), f2(BASE["b"])],
        ["Fair reference (least TiO2 meeting the same targets)", pct(PHI_REF, 1), "%.4f" % REF["CR"], f1(REF["Y"]), f1(REF["L"]), f2(REF["b"])]]), "",
 "## T8. Architecture screen", "",
 table(["ID", "Architecture", "Family", "Dilute scattering per unit volume (1/µm)", "TiO2 per m² to match", "Saving", "Y", "CR", "Verdict"], V["screen_rows"]), "",
 "## T9. The proposal by scenario", "",
 table(["Scenario", "Porosity", "Host index", "Base-coat TiO2 PVC", "Seal-coat TiO2 PVC", "Seal coat (µm)", "TiO2 saving"],
       [[s, V["scen"][s]["P"], V["scen"][s]["nh"], V["scen"][s]["base_pvc"], V["scen"][s]["seal_pvc"], V["scen"][s]["X2"], V["scen"][s]["sav"]] for s in ("bear", "base", "bull")]), "",
 "## T10. Spectral reflectance over white (base case)", "",
 table(["Wavelength (nm)", "Reference", "Proposal"], [[l, "%.3f" % b, "%.3f" % p] for l, b, p in SPECTRAL]), "",
 "## T11. Hiding of one coat against grams of TiO2 per m²", "",
 table(["Conventional coat: TiO2 g/m²", "Contrast ratio", "Air-network coat: TiO2 g/m²", "Contrast ratio"],
       [[a[0], "%.4f" % a[1], b[0], "%.4f" % b[1]] for a, b in zip(V["hiding_base"], V["hiding_air"])]), "",
 "## T12. Materials, cost and footprint per m² (two coats)", "",
 table(["Scenario", "TiO2 reference", "TiO2 proposal", "Materials reference", "Materials proposal", "Cost cut", "kg CO2e reference", "kg CO2e proposal"],
       [[s, V["econ"][s]["g_ref"], V["econ"][s]["g_prop"], V["econ"][s]["ref"], V["econ"][s]["prop"], V["econ"][s]["cut"], f2(ECON[s]["base_co2"]), f2(ECON[s]["prop_co2"])] for s in ECON]), "",
 "## T13. Asian Paints scale by year 5", "",
 table(["Scenario", "TiO2 bill", "TiO2 tonnes", "Area on the new system", "TiO2 avoided", "TiO2 saving", "Net materials saving", "CO2e avoided"],
       [[s, V["ap"][s]["spend"], V["ap"][s]["tonnes"], V["ap"][s]["m2"], V["ap"][s]["avoided"], V["ap"][s]["tio2_cr"], V["ap"][s]["net_cr"], V["ap"][s]["co2_kt"]] for s in AP]), "",
 "## T14. What moves the TiO2 saving most (base case, one input at a time)", "",
 table(["Input", "Low setting", "High setting", "Saving at low", "Saving at high"], V["tornado_rows"]), "",
 "## T15. Near-infrared reflectance over a 25 percent grey substrate (indicator, not a solar reflectance index)", "",
 table(["Wavelength", "Reference", "Proposal"], V["nir_rows"]), "",
 "## T16. Drying Peclet numbers for the horizon 2 one-coat version", "",
 table(["Climate", "Evaporation (µm/s)", "Pe of 80 nm binder latex", "Pe of 600 nm pigment"], V["peclet_rows"]), ""]
TABLES = "\n".join(TT)

if not DRY:
    io.open(HERE / "model_outputs.json", "w", encoding="utf-8").write(json.dumps(OUT, indent=1, ensure_ascii=False))
    io.open(HERE / "model_tables.md", "w", encoding="utf-8", newline="\n").write(TABLES + "\n")
    (HERE.parent / "deck").mkdir(exist_ok=True)
    io.open(HERE.parent / "deck" / "values.json", "w", encoding="utf-8").write(json.dumps(V, indent=1, ensure_ascii=False))
    print("WROTE model_outputs.json, model_tables.md, deck/values.json")
log("done")
