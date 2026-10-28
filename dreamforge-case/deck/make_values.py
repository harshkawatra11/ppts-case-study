"""Build V for the SwiftKart slides from model/model_outputs.json. gen.py calls build(O); nothing here reads or writes a file.
Numbers come from O["deck"], which the model writes. The research constants below (PETROL, POLICY, CLIENTS, BIBLIO and the
source lines) are finalised in step D0 from VERIFIED rows in research/raw/*.md; each keeps the S-ID of its source in a
comment. Strings are already sized to their slide boxes; gen.py mock is the final judge."""
TEAM = [["Harsh Kawatra", "Delhi Technological University (DTU)", "Team Leader"],
        ["Dayita Arora", "Ramjas College, University of Delhi", "Member"]]
# Delhi retail petrol, Rs a litre, one reading a year. All VERIFIED (lane R-D): 2022 RD02 (post excise cut, 22 May,
# held per the Rajya Sabha freeze confirmation RD05), 2023 same freeze, 2024 RD07 (15 Mar), 2025 same price per RD11's
# own year on year comparison, 2026 RD11/RD12 (two independent sources, live as of 15 Oct 2026). 2021 dropped: the only
# two 2021 points found (RD04, RD13) were SNIPPET status, not VERIFIED.
PETROL = [["2022", 96.72], ["2023", 96.72], ["2024", 94.72], ["2025", 94.72], ["2026", 102.12]]
# Rules that set the clock, all VERIFIED against primary gazette text (lane R-E). The Dec 2026 petrol ban is the most
# consequential new finding: Delhi EV Policy 2026 s.8.5.1 plus CAQM Direction 94 bar NCR fleet aggregators from
# inducting any new petrol vehicle, including two-wheelers, after 31 Dec 2026, two years ahead of the general rule.
POLICY = [["Nov 2023", "Delivery fleet rules"], ["Jul 2026", "EV Policy 2.0"], ["Dec 2026", "No new petrol fleet"], ["Apr 2028", "New 2W must be EV"]]
# Client commitments (lane R-C, all VERIFIED). Flipkart RC02/RC03 (100% electric logistics by 2030); Amazon (10,000 EV
# target hit ahead of its 2025 date); Zomato/Eternal (EV100, pledged all-electric delivery fleet by 2030).
CLIENTS = [["Flipkart", "100% electric logistics by 2030"], ["Amazon", "hit its 10,000 EV target early"], ["Zomato", "pledged all-electric fleet, 2030"]]
# Bibliography lines for the annexure, 16 pt: the twelve sources the deck leans on most, from research/raw/sources.md.
BIBLIO = ["Dream Forge 3.0 Round 2 case, IEEE DTU", "PPAC, IOCL, Upstox Delhi fuel prices", "MHI, PM E-DRIVE gazette S.O. 4259/4424",
          "Delhi EV Policy 2026, GNCTD gazette", "Delhi Aggregator, Delivery Scheme 2023", "CEA CO2 Baseline Database v20.0",
          "IPCC 2006 Guidelines, Vol 2, Ch 3", "GHG Protocol Corporate and Scope 3", "Flipkart, Autocar Professional 2024",
          "Amazon India delivery fleet releases", "Zomato (Eternal) sustainability report", "Team IdeaForge research and model"]
# One-line policy footnote for the timeline, lane R-E (RE01 to RE03, primary gazette).
PMLINE = "PM E-DRIVE pays up to ₹5,000 per e-2W until 31 Mar 2028 (MHI gazette)."
SRC = ["Source: Dream Forge 3.0 Round 2 case (IEEE DTU) | company websites and press, Oct 2026 | Team IdeaForge research and model ",
       "Source: case data | PPAC and IOCL Delhi prices | Delhi Transport Department | MHI PM E-DRIVE | company sustainability reports | model ",
       "Source: case data | six options modelled over 48 months at 11% | uncertainties as listed in the case | model tables T5, T6, T12 | model ",
       "Source: case data | model tables T7, T9, T15 | receivable terms and lease deposits from research sections 6 and 7 | model ",
       "Source: model tables T8, T10, T13 | risk register in research section 21 | model ",
       "Source: model tables T2 to T17 | CEA CO2 Baseline Database | IPCC 2006 Guidelines | research Appendix A | model ",
       "Source: Team IdeaForge, Dream Forge 3.0 Round 2 submission | model "]
USE_SHORT = {"Contract working capital": ("Working capital", "M4 to M10"), "Charging hub": ("Charging hub", "M2 to M8"),
             "Lease deposits": ("Lease deposits", "M2 to M8"), "Reporting and dispatch": ("Data, dispatch", "M2"),
             "Riders: hiring and EV training": ("Riders", "M2 to M12"), "Reserve": ("Reserve", "held")}

def build(O):
    assert all(O["checks"].values()), [k for k, v in O["checks"].items() if not v]
    D = dict(O["deck"]); h = O["meta"]["hash"]; V = dict(D)
    V["team"] = dict(name="TEAM IDEAFORGE", rows=TEAM)
    V["petrol"] = PETROL; V["policy"] = POLICY; V["clients"] = CLIENTS; V["biblio"] = BIBLIO; V["pmline"] = PMLINE
    A = O["A"]; b = lambda i, s="base": A[i][s]
    pc = lambda x: "%d%%" % round(x * 100)
    rs = lambda x: "₹" + "{:,}".format(int(x))
    V["assume"] = [["All-in lease", rs(b("A12"))], ["Contract volume", pc(b("A11"))], ["Utilisation now", pc(b("A13"))],
                   ["Receivable days", str(b("A01"))], ["Award month", "M" + str(b("A08"))], ["EV availability", pc(b("A15"))],
                   ["Discount rate", pc(b("A14"))], ["Petrol resale", "₹30,000"]]
    fm = {"A12": rs, "A11": pc, "A13": pc, "A01": str, "A08": lambda x: "M" + str(x), "A15": pc, "A14": pc, "A16": lambda x: ("+" + pc(x)) if x else "flat"}
    lab = {"A12": "All-in lease, ₹ a month", "A11": "Contract volume at plateau", "A13": "Utilisation, existing fleet", "A01": "Receivable days",
           "A08": "Contract award month", "A15": "EV availability", "A14": "Discount rate", "A16": "Rider pay rise from month 13"}
    V["assum"] = [[i, lab[i]] + [fm[i](A[i][s]) for s in ("bear", "base", "bull")] for i in ("A12", "A11", "A13", "A01", "A08", "A15", "A14", "A16")]
    V["src"] = [s + h for s in SRC]
    V["uses_rows"] = [[USE_SHORT[n][0], l, p, USE_SHORT[n][1]] for n, l, p, _ in D["uses_txt"]]
    V["uses_v"] = [u[1] for u in D["uses"]]
    br = D["bridge"]
    V["bridge6"] = [["Today", br[0][1]], ["Fuel to lease", br[1][1]], ["Contract", br[3][1]], ["Spares", br[2][1] + br[4][1]],
                    ["Opex", br[5][1] + br[6][1]], ["Month 24", br[7][1]]]
    V["h1"] = ("Petrol takes " + D["fuel_share0"] + " of every rupee SwiftKart earns and leaves ₹" + D["contrib0"] +
               " a bike a month; the ₹2.8 Cr contract assumes 100% use, not 85%")
    V["h2"] = ("Leasing both fleets is worth ₹" + D["npv5"] + " Cr over four years, ₹" + D["gap53"] +
               " Cr more than buying both, which needs ₹" + D["loan3"] + " L of debt")
    V["h3"] = ("The crore buys what a lease cannot: ₹" + D["used"] + " L for working capital, charging, deposits, data and riders, and ₹" +
               D["reserve"] + " L in reserve")
    V["h4"] = ("Lease both fleets and electrify first: " + D["ev12"] + " EVs and no petrol by month 12, ₹" + D["rr5"] +
               " Cr a year by month 24, and no debt")
    V["h5"] = ("Annexure: one model behind every number; the answer holds in bear and bull cases, and leasing wins up to ₹" +
               D["sw_lease"] + " a month")
    V["cover_line"] = ("Electrify the 100 bikes first, then win the contract on a working EV operation. Contribution rises from ₹" +
                       D["rr0r"] + " L to ₹" + D["rr5"] + " Cr a year by month 24 with no debt, and ₹" + D["reserve"] +
                       " L of the crore stays in reserve.")
    V["thanks"] = ("LEASE EVERY BIKE, ELECTRIFY FIRST, WIN THE CONTRACT ON A WORKING EV FLEET, AND KEEP THE CRORE FOR WHAT A LEASE CANNOT BUY.")
    V["must"] = ["TEAM IDEAFORGE", "Harsh Kawatra", "Dayita Arora", "THANK YOU", "THEREFORE", "CONCLUSIVELY", "THE SITUATION",
                 "STRATEGIC ALTERNATIVES", "₹" + D["rr5"] + " Cr", "₹" + D["npv5"] + " Cr", "₹" + D["sw_lease"], "₹3,601"]
    for k in ("h1", "h2", "h3", "h4", "h5"): assert len(V[k]) <= 150, (k, len(V[k]))
    assert all(len(s) <= 230 for s in V["src"]), [len(s) for s in V["src"]]
    assert all(len(c[1]) <= 32 for c in CLIENTS) and len(PETROL) >= 4 and len(POLICY) == 4 and len(BIBLIO) <= 12
    assert all(len(x) <= 41 for x in BIBLIO) and len(PMLINE) <= 80
    return V
