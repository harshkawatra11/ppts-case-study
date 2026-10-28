"""Builds Satoshi_Gate_Model.xlsx: a formula-driven version of satoshi_gate_model.py.

Every live number flows from Case_Inputs (case facts, grey) and Assumptions (team assumptions, yellow).
Grids that need iteration (bisection, 5x5 sensitivity, all-scenario tables) are written as values from
model_outputs.json and labelled as such. The Checks sheet ties the live formulas back to the Python model.
"""
import json, os
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.utils import get_column_letter as CL

HERE = os.path.dirname(os.path.abspath(__file__))
O = json.load(open(os.path.join(HERE, "model_outputs.json"), encoding="utf-8"))
F, A = O["meta"]["F"], O["meta"]["A"]

BLUE = Font(color="1F4E9E", bold=True); BOLD = Font(bold=True); HDR = Font(bold=True, color="FFFFFF")
GREY = PatternFill("solid", fgColor="E7E6E6"); YEL = PatternFill("solid", fgColor="FFF2CC")
NAVY = PatternFill("solid", fgColor="1F3864"); GREEN = PatternFill("solid", fgColor="E2EFDA")
THIN = Side(style="thin", color="999999"); BOX = Border(top=THIN, bottom=THIN, left=THIN, right=THIN)
N0, N1, N2, N3, PCT = '#,##0;(#,##0)', '#,##0.0;(#,##0.0)', '#,##0.00;(#,##0.00)', '0.000', '0.0%'
YRS = list(range(2027, 2037)); YC0 = 3  # FY27 in column C, base year (FY26) in column B

wb = Workbook()
NM = {}  # name -> absolute ref


def hdr(ws, row, labels, col=1):
    for i, l in enumerate(labels):
        c = ws.cell(row=row, column=col + i, value=l); c.font = HDR; c.fill = NAVY; c.alignment = Alignment(wrap_text=True, vertical="center")


def widths(ws, w):
    for i, x in enumerate(w, 1): ws.column_dimensions[CL(i)].width = x


def title(ws, t, sub=None):
    ws["A1"] = t; ws["A1"].font = Font(bold=True, size=14, color="1F3864")
    if sub: ws["A2"] = sub; ws["A2"].font = Font(italic=True, color="595959")


# ---------------- README ----------------
ws = wb.active; ws.title = "README"
title(ws, "Project Satoshi Gate: transaction and accretion/dilution model", "Paytm (One97 Communications) and Liminal Custody Solutions. All figures ₹ Cr unless stated.")
lines = [
    "Purpose: supports the board recommendation to take a 24.9% stake in Liminal with a path to control, and shows why the proposed ₹4,000 Cr full acquisition destroys value.",
    "Source hierarchy: case facts govern (Case_Inputs, grey fill). Everything else is a disclosed team assumption (Assumptions, yellow fill). No external figure replaces a case input.",
    "Blue bold font = input you can change. Black = formula. Green fill = key output.",
    "Change any input on Case_Inputs, Assumptions or Scenario_Paths, or the scenario/churn/drag selectors on the path sheets, and every live sheet recalculates.",
    "Sheets marked 'values from model run' hold grids that need iteration (bisection for breakeven churn, 5x5 sensitivity, all-scenario tables). They come from model/satoshi_gate_model.py.",
    "Checks sheet: every row must read TRUE. It ties live formulas to the Python model within ±1.",
    "Sheet map: Case_Inputs, Assumptions, Scenario_Paths, Paytm_Baseline, Liminal_DCF, DCF_Sensitivity, Full_Acq, Minority, JV, Walk_Away, Paths_Summary, Churn_Drag_Grid, Funding_Credit, Football_Field, Checks.",
    "Breakeven definitions: PAT basis = first year pro-forma EPS reaches the MDR-adjusted standalone EPS (full, JV) or deal ΔPAT turns positive (minority). FCF basis = first year cumulative deal operating FCF after capital drag covers the cash consideration (full) or cumulative look-through FCF covers cash paid (minority).",
    "Model hash: " + O["meta"].get("hash", "n/a") + "  |  generated " + O["meta"]["generated"],
]
for i, l in enumerate(lines, 3): ws.cell(row=i, column=1, value=l).alignment = Alignment(wrap_text=True)
ws.column_dimensions["A"].width = 150

# ---------------- Case_Inputs ----------------
ws = wb.create_sheet("Case_Inputs"); title(ws, "Case facts (governing, do not change)", "Source: Project Satoshi Gate case document")
hdr(ws, 4, ["Key", "Case fact", "Value", "Unit", "Case reference"])
case = [("MCAP", "Paytm market capitalisation", F["MCAP"], "₹ Cr", "§1"), ("SH", "Diluted shares outstanding", F["SH"], "Cr", "§1"),
        ("CASH", "Cash", F["CASH"], "₹ Cr", "§1"), ("DEBT", "Gross debt", F["DEBT"], "₹ Cr", "§1"), ("REV", "Trailing revenue", F["REV"], "₹ Cr", "§1"),
        ("EBITDA", "EBITDA", F["EBITDA"], "₹ Cr", "§1"), ("PAT", "PAT", F["PAT"], "₹ Cr", "§1"), ("EPS", "Diluted EPS", F["EPS"], "₹", "§1"),
        ("DEAL", "Deal value", F["DEAL"], "₹ Cr", "§2"), ("DEAL_CASH", "Cash component", F["DEAL_CASH"], "₹ Cr", "§2"),
        ("DEAL_EQ", "Equity component", F["DEAL_EQ"], "₹ Cr", "§2"), ("ARR", "Liminal ARR", F["ARR"], "₹ Cr", "§2 table"),
        ("TOP4", "Top-4 client share of ARR", F["TOP4"], "%", "§2"), ("DRAG", "Annual FCF capital drag if Paytm owns custody", F["DRAG"], "₹ Cr/yr", "§3.2"),
        ("MDR", "Incremental UPI MDR net revenue", F["MDR"], "₹ Cr/yr", "§3.4"), ("CH_LO", "ARR churn, low end (full acquisition)", 0.30, "%", "§3.1"),
        ("CH_HI", "ARR churn, high end (full acquisition)", 0.45, "%", "§3.1")]
for i, (k, d, v, u, s) in enumerate(case, 5):
    ws.cell(row=i, column=1, value=k); ws.cell(row=i, column=2, value=d); c = ws.cell(row=i, column=3, value=v)
    c.font = BLUE; c.fill = GREY; c.number_format = PCT if u == "%" else (N2 if k == "EPS" else N0)
    ws.cell(row=i, column=4, value=u); ws.cell(row=i, column=5, value=s); NM[k] = f"Case_Inputs!$C${i}"
widths(ws, [12, 48, 14, 10, 16])

# ---------------- Assumptions ----------------
ws = wb.create_sheet("Assumptions"); title(ws, "Team assumptions (disclosed; not case facts)", "IDs match the research document and the assumptions slide")
hdr(ws, 4, ["ID", "Key", "Parameter", "Value", "Unit", "Rationale / source"])
asm = [("A02", "T", "Tax rate", A["T"], "%", "s.115BAA new regime; carried losses ignored"),
       ("A03", "YC", "Pre-tax yield on Paytm cash", A["YC"], "%", "364-day T-bill 5.74% (Aug 2026) plus treasury mix"),
       ("A04", "KD", "Cost of new debt (AA- issuer)", A["KD"], "%", "AA band 8.0 to 9.5% (2026)"),
       ("A05", "YR", "Yield on locked capital reserves", A["YR"], "%", "RBI SDF 5.00%; 1% negative carry"),
       ("A07", "PW", "Paytm WACC", A["PW"], "%", "Rf 7.04% (10Y G-sec, 23 Sep 2026) + beta 1.20 x India ERP 7.08% (Damodaran Jan 2026) = 15.5%; net cash so WACC = Ke"),
       ("A08", "LW", "Liminal discount rate", A["LW"], "%", "Rf 7.04% + beta 1.40 x ERP 7.08% = 17.0%, all equity, crypto-infrastructure risk"),
       ("A09", "TG", "Liminal terminal growth", A["TG"], "%", "Below India nominal GDP growth"),
       ("A11a", "DA", "D&A % revenue", 0.04, "%", "Infrastructure SaaS norm"), ("A11b", "CAPEX", "Capex % revenue", 0.05, "%", "Infrastructure SaaS norm"),
       ("A11c", "NWC", "NWC % incremental revenue", 0.02, "%", "Infrastructure SaaS norm"),
       ("A12", "DEC", "Decremental margin on churned ARR (yr 1; half in yr 2)", A["DEC"], "%", "Sticky costs before take-out"),
       ("A13a", "CH_FULL", "Churn, full acquisition (base)", A["CH_FULL"], "%", "Midpoint of case 30 to 45%"),
       ("A13b", "CH_MIN", "Churn, 24.9% minority (base)", A["CH_MIN"], "%", "Independence preserved; validated by client comfort CP"),
       ("A13c", "CH_JV", "Churn, JV (base)", A["CH_JV"], "%", "Association without control"),
       ("A14", "JV_DRAG", "Capital drag, JV (joint control)", A["JV_DRAG"], "₹ Cr/yr", "Drag proportional to ownership x control"),
       ("A14b", "MIN_DRAG", "Capital drag, minority (base)", 0, "₹ Cr/yr", "Non-control; RBI comfort is a condition precedent. Stress: 187"),
       ("A17", "GOV", "Standalone governance cost (full)", A["GOV"], "₹ Cr/yr", "Independent board, barriers, separate infra"),
       ("A18", "PPA", "PPA intangible amortisation (full)", A["PPA"], "₹ Cr/yr", "₹1,000 Cr intangibles over 10 yrs (Ind AS 103)"),
       ("A19", "TXN", "Transaction costs (full), expensed FY27", A["TXN"], "₹ Cr", "1.5% of deal value"),
       ("A20", "BUILD", "Avoided in-house custody build", A["BUILD"], "₹ Cr/yr", "Opex of a 3-yr MPC build"),
       ("A21", "SYNM", "Margin on revenue synergy", A["SYNM"], "%", "Tokenized settlement, e₹, cross-border B2B"),
       ("A21b", "SG", "Terminal growth of synergies", A["SG"], "%", "Conservative"),
       ("A22", "SYN_RET", "Share of synergy retained via licence (minority)", A["SYN_RET"], "%", "Licence captures operations, not growth economics"),
       ("A23", "LIC", "Licence fee paid to Liminal", A["LIC"], "₹ Cr/yr", "Platform fee"),
       ("A24a", "STAKE", "Minority stake (fully diluted)", A["STAKE"], "%", "Below 25%: CCI, special-resolution and client-comfort line"),
       ("A24b", "UP", "Upfront consideration", A["UP"], "₹ Cr", "24.9% x weighted fair value, rounded down to ₹50 Cr"),
       ("A24c", "PRIM", "of which primary (into Liminal)", A["PRIM"], "₹ Cr", "Growth capital"),
       ("A24d", "EO", "Tranche 2 maximum", A["EO"], "₹ Cr", "Keeps ₹4,016 Cr headline for delivered ARR only"),
       ("A24e", "EO_LO", "Tranche 2 floor: FY29 ARR", A["EO_LO"], "₹ Cr", "Nothing paid at or below"),
       ("A24f", "EO_HI", "Tranche 2 full: FY29 ARR", A["EO_HI"], "₹ Cr", "Full ₹400 Cr at or above"),
       ("A25a", "JV_CASH", "JV: Paytm cash contribution", A["JV_CASH"], "₹ Cr", "50:50 SettleCo"),
       ("A25b", "JV_SETUP", "JV set-up opex (first 2 yrs)", A["JV_SETUP"], "₹ Cr/yr", "New entity build"),
       ("A26a", "P_BEAR", "Probability: bear", 0.25, "%", ""), ("A26b", "P_BASE", "Probability: base", 0.50, "%", ""),
       ("A26c", "P_BULL", "Probability: bull", 0.25, "%", ""),
       ("A29", "BREAK_FEE", "Reverse break fee", A["BREAK_FEE"], "₹ Cr", "Paid by Paytm only if Paytm walks without a CP failure")]
for i, (aid, k, d, v, u, s) in enumerate(asm, 5):
    ws.cell(row=i, column=1, value=aid); ws.cell(row=i, column=2, value=k); ws.cell(row=i, column=3, value=d)
    c = ws.cell(row=i, column=4, value=v); c.font = BLUE; c.fill = YEL; c.number_format = PCT if u == "%" else N0
    ws.cell(row=i, column=5, value=u); ws.cell(row=i, column=6, value=s); NM[k] = f"Assumptions!$D${i}"
r = 5 + len(asm)
ws.cell(row=r, column=3, value="Derived: Paytm share price (A01)"); ws.cell(row=r, column=4, value=f"={NM['MCAP']}/{NM['SH']}").number_format = N2; NM["PX"] = f"Assumptions!$D${r}"
ws.cell(row=r + 1, column=3, value="Derived: MDR-adjusted standalone EPS"); ws.cell(row=r + 1, column=4, value=f"=({NM['PAT']}+{NM['MDR']}*(1-{NM['T']}))/{NM['SH']}").number_format = N3; NM["BASE_EPS"] = f"Assumptions!$D${r+1}"
ws.cell(row=r + 2, column=3, value="Derived: PV of avoided build"); ws.cell(row=r + 2, column=4, value=f"={NM['BUILD']}*(1-{NM['T']})/{NM['PW']}").number_format = N0; NM["BPV"] = f"Assumptions!$D${r+2}"
widths(ws, [7, 12, 46, 12, 9, 62])

# ---------------- Scenario_Paths ----------------
ws = wb.create_sheet("Scenario_Paths"); title(ws, "Scenario paths (team assumptions A10, A21)", "Liminal revenue growth, EBITDA margin and Paytm revenue synergy by year")
G = {"bear": [.22, .20, .18, .16, .14, .12, .11, .10, .09, .08], "base": [.35, .32, .28, .25, .22, .20, .18, .16, .14, .12], "bull": [.50, .45, .38, .32, .27, .23, .20, .17, .15, .13]}
M = {"bear": [.04, .09, .13, .17, .20, .22, .23, .24, .25, .25], "base": [.08, .16, .23, .29, .33, .36, .37, .38, .38, .38], "bull": [.10, .20, .28, .34, .38, .40, .41, .42, .42, .42]}
RS = {"bear": [0, 0, 10, 20, 30, 40, 45, 50, 55, 60], "base": [0, 10, 30, 55, 85, 110, 130, 145, 155, 165], "bull": [0, 20, 50, 90, 130, 170, 200, 225, 245, 260]}
blocks = [("Liminal revenue growth", G, 4, PCT), ("Liminal EBITDA margin", M, 9, PCT), ("Revenue synergy to Paytm (₹ Cr)", RS, 14, N0)]
for name, data, top, fmt in blocks:
    ws.cell(row=top, column=1, value=name).font = BOLD
    hdr(ws, top, ["", "Scenario"] + [f"FY{str(y)[2:]}" for y in YRS], col=1); ws.cell(row=top, column=1, value=name)
    for j, sc in enumerate(["bear", "base", "bull"]):
        ws.cell(row=top + 1 + j, column=2, value=sc)
        for i, v in enumerate(data[sc]):
            c = ws.cell(row=top + 1 + j, column=YC0 + i, value=v); c.font = BLUE; c.fill = YEL; c.number_format = fmt
SP = {"g": (5, 7), "m": (10, 12), "rs": (15, 17)}
widths(ws, [28, 10] + [9] * 10)


def pick(key, col, sel):
    a, b = SP[key]; L = CL(col)
    return f"INDEX(Scenario_Paths!{L}${a}:{L}${b},MATCH({sel},Scenario_Paths!$B${a}:$B${b},0))"


def liminal_block(ws, top, sel, churn):
    """Writes a Liminal P&L/FCF/DCF block. Returns dict of row numbers and the EV cell."""
    labels = ["Growth", "Margin", "Revenue", "Sticky cost of churned ARR", "EBITDA", "D&A", "EBIT", "Tax", "PAT", "Capex", "Change in NWC", "FCF", "Discount factor", "PV of FCF"]
    R = {l: top + i for i, l in enumerate(labels)}
    hdr(ws, top - 1, ["Liminal (standalone)", "FY26"] + [f"FY{str(y)[2:]}" for y in YRS])
    for l, rr in R.items(): ws.cell(row=rr, column=1, value=l)
    ws.cell(row=R["Revenue"], column=2, value=f"={NM['ARR']}*(1-{churn})").number_format = N1
    lost_cell = f"$B${R['Sticky cost of churned ARR']}"
    ws.cell(row=R["Sticky cost of churned ARR"], column=2, value=f"={NM['ARR']}*{churn}*(1+C{R['Growth']})").number_format = N1
    for i in range(10):
        col = YC0 + i; L = CL(col); P = CL(col - 1)
        ws.cell(row=R["Growth"], column=col, value="=" + pick("g", col, sel)).number_format = PCT
        ws.cell(row=R["Margin"], column=col, value="=" + pick("m", col, sel)).number_format = PCT
        ws.cell(row=R["Revenue"], column=col, value=f"={P}{R['Revenue']}*(1+{L}{R['Growth']})").number_format = N1
        k = {0: f"{NM['DEC']}", 1: f"{NM['DEC']}*0.5"}.get(i)
        ws.cell(row=R["Sticky cost of churned ARR"], column=col, value=(f"={lost_cell}*{k}" if k else 0)).number_format = N1
        ws.cell(row=R["EBITDA"], column=col, value=f"={L}{R['Revenue']}*{L}{R['Margin']}-{L}{R['Sticky cost of churned ARR']}").number_format = N1
        ws.cell(row=R["D&A"], column=col, value=f"={NM['DA']}*{L}{R['Revenue']}").number_format = N1
        ws.cell(row=R["EBIT"], column=col, value=f"={L}{R['EBITDA']}-{L}{R['D&A']}").number_format = N1
        ws.cell(row=R["Tax"], column=col, value=f"=MAX({L}{R['EBIT']},0)*{NM['T']}").number_format = N1
        ws.cell(row=R["PAT"], column=col, value=f"={L}{R['EBIT']}-{L}{R['Tax']}").number_format = N1
        ws.cell(row=R["Capex"], column=col, value=f"={NM['CAPEX']}*{L}{R['Revenue']}").number_format = N1
        ws.cell(row=R["Change in NWC"], column=col, value=f"={NM['NWC']}*({L}{R['Revenue']}-{P}{R['Revenue']})").number_format = N1
        ws.cell(row=R["FCF"], column=col, value=f"={L}{R['EBITDA']}-{L}{R['Tax']}-{L}{R['Capex']}-{L}{R['Change in NWC']}").number_format = N1
        ws.cell(row=R["Discount factor"], column=col, value=f"=1/(1+{NM['LW']})^{i+1}").number_format = '0.0000'
        ws.cell(row=R["PV of FCF"], column=col, value=f"={L}{R['FCF']}*{L}{R['Discount factor']}").number_format = N1
    ws.cell(row=R["Sticky cost of churned ARR"], column=1, value="Sticky cost of churned ARR (col B = churned ARR base)")
    tv = top + len(labels); ev = tv + 1
    ws.cell(row=tv, column=1, value="Terminal value (PV)"); ws.cell(row=tv, column=2, value=f"=L{R['FCF']}*(1+{NM['TG']})/({NM['LW']}-{NM['TG']})*L{R['Discount factor']}").number_format = N0
    ws.cell(row=ev, column=1, value="Liminal enterprise value").font = BOLD
    c = ws.cell(row=ev, column=2, value=f"=SUM(C{R['PV of FCF']}:L{R['PV of FCF']})+B{tv}"); c.number_format = N0; c.fill = GREEN; c.font = BOLD
    R["EV"] = f"$B${ev}"; R["end"] = ev
    return R


def synergy_rows(ws, top, sel, share="1"):
    R = {"Revenue synergy": top, "Synergy after tax": top + 1, "Paytm discount factor": top + 2}
    for l, rr in R.items(): ws.cell(row=rr, column=1, value=l)
    for i in range(10):
        col = YC0 + i; L = CL(col)
        ws.cell(row=top, column=col, value="=" + pick("rs", col, sel)).number_format = N0
        ws.cell(row=top + 1, column=col, value=f"={L}{top}*{NM['SYNM']}*(1-{NM['T']})*{share}").number_format = N1
        ws.cell(row=top + 2, column=col, value=f"=1/(1+{NM['PW']})^{i+1}").number_format = '0.0000'
    ws.cell(row=top + 3, column=1, value="Synergy PV (incl. terminal)").font = BOLD
    ws.cell(row=top + 3, column=2, value=f"=SUMPRODUCT(C{top+1}:L{top+1},C{top+2}:L{top+2})+L{top+1}*(1+{NM['SG']})/({NM['PW']}-{NM['SG']})*L{top+2}").number_format = N0
    R["PV"] = f"$B${top+3}"; R["end"] = top + 3
    return R


def selectors(ws, items):
    dv = DataValidation(type="list", formula1='"bear,base,bull"', allow_blank=False); ws.add_data_validation(dv)
    for i, (label, val, fmt) in enumerate(items, 3):
        ws.cell(row=i, column=1, value=label).font = BOLD; c = ws.cell(row=i, column=2, value=val); c.font = BLUE; c.fill = YEL
        if fmt: c.number_format = fmt
        if label == "Scenario": dv.add(c)
    return {label: f"$B${i}" for i, (label, _, _) in enumerate(items, 3)}


# ---------------- Paytm_Baseline ----------------
ws = wb.create_sheet("Paytm_Baseline"); title(ws, "Paytm baseline on case facts", "Valuation premium, MDR effect, scale of the capital drag")
rows = [("Share price (₹)", f"={NM['PX']}", N2), ("Enterprise value", f"={NM['MCAP']}-{NM['CASH']}+{NM['DEBT']}", N0),
        ("P/E (x)", f"={NM['PX']}/{NM['EPS']}", N1), ("EV/Revenue (x)", "=B5/" + NM['REV'], N2), ("EV/EBITDA (x)", "=B5/" + NM['EBITDA'], N1),
        ("EBITDA margin", f"={NM['EBITDA']}/{NM['REV']}", PCT), ("Deal value / ARR (x)", f"={NM['DEAL']}/{NM['ARR']}", N2),
        ("MDR post-tax", f"={NM['MDR']}*(1-{NM['T']})", N2), ("EPS with MDR, no deal (₹)", f"={NM['BASE_EPS']}", N3),
        ("MDR uplift to EPS", f"={NM['BASE_EPS']}/{NM['EPS']}-1", PCT), ("MDR offset of drag, pre-tax", f"={NM['MDR']}/{NM['DRAG']}", PCT),
        ("MDR offset of drag, post-tax", f"=B11/{NM['DRAG']}", PCT), ("Drag / Liminal ARR (x)", f"={NM['DRAG']}/{NM['ARR']}", N2),
        ("Drag / Paytm PAT", f"={NM['DRAG']}/{NM['PAT']}", PCT), ("Top-4 client ARR", f"={NM['ARR']}*{NM['TOP4']}", N0),
        ("Earnings yield", f"={NM['EPS']}/{NM['PX']}", '0.00%'), ("Post-tax cash yield", f"={NM['YC']}*(1-{NM['T']})", '0.00%'),
        ("Buyback of ₹2,100 Cr: shares retired (Cr)", f"={NM['DEAL_CASH']}/{NM['PX']}", N3),
        ("Buyback EPS (₹)", f"=({NM['PAT']}-{NM['DEAL_CASH']}*{NM['YC']}*(1-{NM['T']}))/({NM['SH']}-B21)", N3)]
hdr(ws, 3, ["Metric", "Value"])
for i, (l, f, fm) in enumerate(rows, 4):
    ws.cell(row=i, column=1, value=l); c = ws.cell(row=i, column=2, value=f); c.number_format = fm
widths(ws, [44, 14])

# ---------------- Liminal_DCF ----------------
ws = wb.create_sheet("Liminal_DCF"); title(ws, "Liminal standalone DCF by scenario (discount rate A08, terminal growth A09)", "Change the churn cell under each block to test the bank-revolt scenarios")
EVREF = {}
top = 5
for sc in ["bear", "base", "bull"]:
    ws.cell(row=top - 3, column=1, value=f"Scenario").font = BOLD; c = ws.cell(row=top - 3, column=2, value=sc); c.font = BLUE; c.fill = YEL
    ws.cell(row=top - 2, column=1, value="Churn applied").font = BOLD; c = ws.cell(row=top - 2, column=2, value=0); c.font = BLUE; c.fill = YEL; c.number_format = PCT
    R = liminal_block(ws, top + 1, f"$B${top-3}", f"$B${top-2}"); EVREF[sc] = f"Liminal_DCF!{R['EV']}"
    top = R["end"] + 6
widths(ws, [40, 12] + [10] * 10)

# ---------------- DCF_Sensitivity (values) ----------------
ws = wb.create_sheet("DCF_Sensitivity"); title(ws, "Liminal EV sensitivity, base, no churn (values from model run)", "Rows: discount rate. Columns: terminal growth.")
hdr(ws, 4, ["Discount rate", "g 5.0%", "g 5.5%", "g 6.0%", "g 6.5%", "g 7.0%"])
for i, (w, vals) in enumerate(O["dcf_grid_base"].items(), 5):
    ws.cell(row=i, column=1, value=float(w)).number_format = PCT
    for j, v in enumerate(vals): ws.cell(row=i, column=2 + j, value=v).number_format = N0
ws.cell(row=11, column=1, value="Liminal EV by scenario and churn (values)").font = BOLD
hdr(ws, 12, ["Scenario"] + [f"churn {float(c)*100:.1f}%" for c in O["liminal_ev"]["base"]])
for i, (sc, v) in enumerate(O["liminal_ev"].items(), 13):
    ws.cell(row=i, column=1, value=sc)
    for j, x in enumerate(v.values()): ws.cell(row=i, column=2 + j, value=x).number_format = N0
widths(ws, [16] + [13] * 7)

# ---------------- Full_Acq ----------------
ws = wb.create_sheet("Full_Acq"); title(ws, "Full acquisition at ₹4,000 Cr: accretion/dilution, cash and NPV", "Case funding by default: ₹2,100 Cr balance-sheet cash + ₹1,900 Cr new Paytm shares")
S = selectors(ws, [("Scenario", "base", None), ("Churn", f"={NM['CH_FULL']}", PCT), ("Annual capital drag", f"={NM['DRAG']}", N0),
                   ("Cash from balance sheet", f"={NM['DEAL_CASH']}", N0), ("New debt", 0, N0), ("New Paytm equity", f"={NM['DEAL_EQ']}", N0),
                   ("Price", f"={NM['DEAL']}", N0)])
LR = liminal_block(ws, 13, S["Scenario"], S["Churn"])
SR = synergy_rows(ws, LR["end"] + 2, S["Scenario"])
t0 = SR["end"] + 2
hdr(ws, t0, ["Paytm deal build", ""] + [f"FY{str(y)[2:]}" for y in YRS])
lab = ["Cumulative locked reserves", "Forgone interest on cash", "Interest on new debt", "Negative carry on reserves", "Governance cost", "PPA amortisation",
       "Transaction costs", "Pre-tax deal costs", "Deal ΔPAT", "Pro-forma PAT", "Shares (Cr)", "Pro-forma EPS (₹)", "Standalone EPS with MDR (₹)",
       "EPS vs ₹7.50", "PAT breakeven flag", "Deal operating FCF after drag", "Cumulative operating FCF", "FCF breakeven flag", "Paytm cash balance"]
K = {l: t0 + 1 + i for i, l in enumerate(lab)}
for l, rr in K.items(): ws.cell(row=rr, column=1, value=l)
ws.cell(row=K["Paytm cash balance"], column=2, value=f"={NM['CASH']}-{S['Cash from balance sheet']}").number_format = N0
for i in range(10):
    col = YC0 + i; L = CL(col); P = CL(col - 1)
    ws.cell(row=K["Cumulative locked reserves"], column=col, value=(f"={S['Annual capital drag']}" if i == 0 else f"={P}{K['Cumulative locked reserves']}+{S['Annual capital drag']}")).number_format = N0
    ws.cell(row=K["Forgone interest on cash"], column=col, value=f"={S['Cash from balance sheet']}*{NM['YC']}").number_format = N1
    ws.cell(row=K["Interest on new debt"], column=col, value=f"={S['New debt']}*{NM['KD']}").number_format = N1
    ws.cell(row=K["Negative carry on reserves"], column=col, value=f"={L}{K['Cumulative locked reserves']}*({NM['YC']}-{NM['YR']})").number_format = N1
    ws.cell(row=K["Governance cost"], column=col, value=f"={NM['GOV']}").number_format = N1
    ws.cell(row=K["PPA amortisation"], column=col, value=f"={NM['PPA']}").number_format = N1
    ws.cell(row=K["Transaction costs"], column=col, value=(f"={NM['TXN']}" if i == 0 else 0)).number_format = N1
    ws.cell(row=K["Pre-tax deal costs"], column=col, value=f"=SUM({L}{K['Forgone interest on cash']}:{L}{K['Transaction costs']})").number_format = N1
    ws.cell(row=K["Deal ΔPAT"], column=col, value=f"=-{L}{K['Pre-tax deal costs']}*(1-{NM['T']})+{L}{LR['PAT']}+{L}{SR['Synergy after tax']}+{NM['BUILD']}*(1-{NM['T']})").number_format = N1
    ws.cell(row=K["Pro-forma PAT"], column=col, value=f"={NM['PAT']}+{NM['MDR']}*(1-{NM['T']})+{L}{K['Deal ΔPAT']}").number_format = N1
    ws.cell(row=K["Shares (Cr)"], column=col, value=f"={NM['SH']}+{S['New Paytm equity']}/{NM['PX']}").number_format = N3
    c = ws.cell(row=K["Pro-forma EPS (₹)"], column=col, value=f"={L}{K['Pro-forma PAT']}/{L}{K['Shares (Cr)']}"); c.number_format = N2; c.fill = GREEN
    ws.cell(row=K["Standalone EPS with MDR (₹)"], column=col, value=f"={NM['BASE_EPS']}").number_format = N2
    ws.cell(row=K["EPS vs ₹7.50"], column=col, value=f"={L}{K['Pro-forma EPS (₹)']}/{NM['EPS']}-1").number_format = PCT
    ws.cell(row=K["PAT breakeven flag"], column=col, value=f"=IF({L}{K['Pro-forma EPS (₹)']}>={L}{K['Standalone EPS with MDR (₹)']},1,0)")
    ws.cell(row=K["Deal operating FCF after drag"], column=col, value=f"={L}{LR['FCF']}+{L}{SR['Synergy after tax']}+{NM['BUILD']}*(1-{NM['T']})-({L}{K['Interest on new debt']}+{L}{K['Governance cost']}+{L}{K['Negative carry on reserves']}+{L}{K['Transaction costs']})*(1-{NM['T']})-{S['Annual capital drag']}").number_format = N1
    ws.cell(row=K["Cumulative operating FCF"], column=col, value=(f"={L}{K['Deal operating FCF after drag']}" if i == 0 else f"={P}{K['Cumulative operating FCF']}+{L}{K['Deal operating FCF after drag']}")).number_format = N0
    ws.cell(row=K["FCF breakeven flag"], column=col, value=f"=IF({L}{K['Cumulative operating FCF']}>={S['Cash from balance sheet']},1,0)")
    ws.cell(row=K["Paytm cash balance"], column=col, value=f"={P}{K['Paytm cash balance']}+{NM['PAT']}+{NM['MDR']}*(1-{NM['T']})+{L}{K['Deal operating FCF after drag']}-{L}{K['Forgone interest on cash']}*(1-{NM['T']})").number_format = N0
yr_row = t0
res = K["Paytm cash balance"] + 2
out = [("Liminal EV (post-churn)", f"={LR['EV']}", N0), ("Synergy PV + avoided build PV", f"={SR['PV']}+{NM['BPV']}", N0),
       ("PV of capital drag (perpetual)", f"={S['Annual capital drag']}/{NM['PW']}", N0), ("Price paid", f"={S['Price']}", N0),
       ("NPV to Paytm shareholders", f"=B{res}+B{res+1}-B{res+2}-B{res+3}", N0),
       ("NPV per post-deal share (₹)", f"=B{res+4}/({NM['SH']}+{S['New Paytm equity']}/{NM['PX']})", N1),
       ("PAT breakeven year", f'=IFERROR(INDEX(C{yr_row}:L{yr_row},MATCH(1,C{K["PAT breakeven flag"]}:L{K["PAT breakeven flag"]},0)),"Never (10 yrs)")', None),
       ("FCF breakeven year", f'=IFERROR(INDEX(C{yr_row}:L{yr_row},MATCH(1,C{K["FCF breakeven flag"]}:L{K["FCF breakeven flag"]},0)),"Never (10 yrs)")', None),
       ("Gross debt / EBITDA (x)", f"=({NM['DEBT']}+{S['New debt']})/{NM['EBITDA']}", N2),
       ("Interest cover (EBITDA / interest, x)", f"={NM['EBITDA']}/(({NM['DEBT']}+{S['New debt']})*{NM['KD']})", N1),
       ("Maximum justified price (value before price)", f"=B{res}+B{res+1}-B{res+2}", N0)]
for i, (l, f, fm) in enumerate(out):
    ws.cell(row=res + i, column=1, value=l).font = BOLD; c = ws.cell(row=res + i, column=2, value=f); c.fill = GREEN; c.font = BOLD
    if fm: c.number_format = fm
FULL = dict(npv=f"Full_Acq!$B${res+4}", eps27=f"Full_Acq!$C${K['Pro-forma EPS (₹)']}", pbe=f"Full_Acq!$B${res+6}", fbe=f"Full_Acq!$B${res+7}", ev=f"Full_Acq!{LR['EV']}")
for c in range(YC0, YC0 + 10): ws.cell(row=yr_row, column=c, value=YRS[c - YC0])  # numeric year header for INDEX
widths(ws, [44, 14] + [10] * 10)

# ---------------- Minority ----------------
ws = wb.create_sheet("Minority"); title(ws, "Recommended: 24.9% stake + licence + ROFR + call option", f"₹{A['UP']} Cr upfront cash (₹{A['PRIM']} Cr primary + ₹{A['UP']-A['PRIM']} Cr secondary), Tranche 2 up to ₹{A['EO']} Cr on FY29 ARR")
S = selectors(ws, [("Scenario", "base", None), ("Churn", f"={NM['CH_MIN']}", PCT), ("Annual capital drag", f"={NM['MIN_DRAG']}", N0),
                   ("Stake", f"={NM['STAKE']}", PCT), ("Upfront cash", f"={NM['UP']}", N0)])
LR = liminal_block(ws, 11, S["Scenario"], S["Churn"])
SR = synergy_rows(ws, LR["end"] + 2, S["Scenario"], share=NM["SYN_RET"])
t0 = SR["end"] + 2
ws.cell(row=t0, column=1, value="Tranche 2 payable (FY30)").font = BOLD
ws.cell(row=t0, column=2, value=f"={NM['EO']}*MIN(MAX((E{LR['Revenue']}-{NM['EO_LO']})/({NM['EO_HI']}-{NM['EO_LO']}),0),1)").number_format = N0
EO = f"$B${t0}"; t0 += 2
hdr(ws, t0, ["Paytm deal build", ""] + [f"FY{str(y)[2:]}" for y in YRS])
lab = ["Cumulative cash paid", "Forgone interest", "Licence fee", "Avoided build", "Synergy retained (after tax)", "Equity-method income", "Deal ΔPAT",
       "Pro-forma EPS (₹)", "EPS vs ₹7.50", "PAT breakeven flag", "Look-through FCF", "Cumulative look-through FCF", "FCF breakeven flag"]
K = {l: t0 + 1 + i for i, l in enumerate(lab)}
for l, rr in K.items(): ws.cell(row=rr, column=1, value=l)
for i in range(10):
    col = YC0 + i; L = CL(col)
    ws.cell(row=K["Cumulative cash paid"], column=col, value=f"={S['Upfront cash']}+IF({i}>=3,{EO},0)").number_format = N0
    ws.cell(row=K["Forgone interest"], column=col, value=f"=-{L}{K['Cumulative cash paid']}*{NM['YC']}*(1-{NM['T']})").number_format = N1
    ws.cell(row=K["Licence fee"], column=col, value=f"=-{NM['LIC']}*(1-{NM['T']})").number_format = N1
    ws.cell(row=K["Avoided build"], column=col, value=f"={NM['BUILD']}*(1-{NM['T']})").number_format = N1
    ws.cell(row=K["Synergy retained (after tax)"], column=col, value=f"={L}{SR['Synergy after tax']}").number_format = N1
    ws.cell(row=K["Equity-method income"], column=col, value=f"={S['Stake']}*({L}{LR['PAT']}+{NM['PRIM']}*{NM['YC']}*(1-{NM['T']}))").number_format = N1
    ws.cell(row=K["Deal ΔPAT"], column=col, value=f"=SUM({L}{K['Forgone interest']}:{L}{K['Equity-method income']})").number_format = N1
    c = ws.cell(row=K["Pro-forma EPS (₹)"], column=col, value=f"=({NM['PAT']}+{NM['MDR']}*(1-{NM['T']})+{L}{K['Deal ΔPAT']})/{NM['SH']}"); c.number_format = N2; c.fill = GREEN
    ws.cell(row=K["EPS vs ₹7.50"], column=col, value=f"={L}{K['Pro-forma EPS (₹)']}/{NM['EPS']}-1").number_format = PCT
    ws.cell(row=K["PAT breakeven flag"], column=col, value=f"=IF({L}{K['Deal ΔPAT']}>=0,1,0)")
    ws.cell(row=K["Look-through FCF"], column=col, value=f"={S['Stake']}*{L}{LR['FCF']}+{L}{SR['Synergy after tax']}+({NM['BUILD']}-{NM['LIC']})*(1-{NM['T']})-{S['Annual capital drag']}").number_format = N1
    ws.cell(row=K["Cumulative look-through FCF"], column=col, value=(f"={L}{K['Look-through FCF']}" if i == 0 else f"={CL(col-1)}{K['Cumulative look-through FCF']}+{L}{K['Look-through FCF']}")).number_format = N0
    ws.cell(row=K["FCF breakeven flag"], column=col, value=f"=IF({L}{K['Cumulative look-through FCF']}>={L}{K['Cumulative cash paid']},1,0)")
for c in range(YC0, YC0 + 10): ws.cell(row=t0, column=c, value=YRS[c - YC0])
res = K["FCF breakeven flag"] + 2
out = [("Stake x (Liminal EV + primary cash)", f"={S['Stake']}*({LR['EV']}+{NM['PRIM']})", N0), ("Synergy PV retained + avoided build PV", f"={SR['PV']}+{NM['BPV']}", N0),
       ("PV of licence fees", f"={NM['LIC']}*(1-{NM['T']})/{NM['PW']}", N0), ("Upfront cash", f"={S['Upfront cash']}", N0),
       ("PV of Tranche 2", f"={EO}/(1+{NM['PW']})^3", N0), ("PV of capital drag", f"={S['Annual capital drag']}/{NM['PW']}", N0),
       ("NPV to Paytm shareholders", f"=B{res}+B{res+1}-B{res+2}-B{res+3}-B{res+4}-B{res+5}", N0),
       ("PAT breakeven year", f'=IFERROR(INDEX(C{t0}:L{t0},MATCH(1,C{K["PAT breakeven flag"]}:L{K["PAT breakeven flag"]},0)),"Never (10 yrs)")', None),
       ("FCF breakeven year (look-through)", f'=IFERROR(INDEX(C{t0}:L{t0},MATCH(1,C{K["FCF breakeven flag"]}:L{K["FCF breakeven flag"]},0)),"Never (10 yrs)")', None),
       ("Implied post-money valuation", f"={S['Upfront cash']}/{S['Stake']}", N0), ("Implied post-money / ARR (x)", f"=B{res+9}/{NM['ARR']}", N1),
       ("Headline valuation if Tranche 2 paid in full", f"=({S['Upfront cash']}+{NM['EO']})/{S['Stake']}", N0),
       ("Upfront cash as % of Paytm cash", f"={S['Upfront cash']}/{NM['CASH']}", PCT)]
for i, (l, f, fm) in enumerate(out):
    ws.cell(row=res + i, column=1, value=l).font = BOLD; c = ws.cell(row=res + i, column=2, value=f); c.fill = GREEN; c.font = BOLD
    if fm: c.number_format = fm
MIN = dict(npv=f"Minority!$B${res+6}", eps27=f"Minority!$C${K['Pro-forma EPS (₹)']}", pbe=f"Minority!$B${res+7}", fbe=f"Minority!$B${res+8}", eo=f"Minority!{EO}")
widths(ws, [44, 14] + [10] * 10)

# ---------------- JV ----------------
ws = wb.create_sheet("JV"); title(ws, "50:50 JV 'SettleCo' for tokenized settlement", "Paytm contributes ₹400 Cr cash; joint control attracts half the capital drag")
S = selectors(ws, [("Scenario", "base", None), ("Annual capital drag", f"={NM['JV_DRAG']}", N0)])
hdr(ws, 6, ["JV build", ""] + [f"FY{str(y)[2:]}" for y in YRS])
for c in range(YC0, YC0 + 10): ws.cell(row=6, column=c, value=YRS[c - YC0])
lab = ["Revenue synergy", "JV PAT", "Paytm 50% share", "Paytm discount factor", "Pro-forma EPS (₹)", "PAT breakeven flag"]
K = {l: 7 + i for i, l in enumerate(lab)}
for l, rr in K.items(): ws.cell(row=rr, column=1, value=l)
for i in range(10):
    col = YC0 + i; L = CL(col)
    ws.cell(row=K["Revenue synergy"], column=col, value="=" + pick("rs", col, S["Scenario"])).number_format = N0
    ws.cell(row=K["JV PAT"], column=col, value=f"=({L}{K['Revenue synergy']}*{NM['SYNM']}-IF({i}<2,{NM['JV_SETUP']},0))*(1-{NM['T']})").number_format = N1
    ws.cell(row=K["Paytm 50% share"], column=col, value=f"=0.5*{L}{K['JV PAT']}").number_format = N1
    ws.cell(row=K["Paytm discount factor"], column=col, value=f"=1/(1+{NM['PW']})^{i+1}").number_format = '0.0000'
    c = ws.cell(row=K["Pro-forma EPS (₹)"], column=col, value=f"=({NM['PAT']}+{NM['MDR']}*(1-{NM['T']})-{NM['JV_CASH']}*{NM['YC']}*(1-{NM['T']})+{L}{K['Paytm 50% share']}+{NM['BUILD']}*(1-{NM['T']}))/{NM['SH']}"); c.number_format = N2; c.fill = GREEN
    ws.cell(row=K["PAT breakeven flag"], column=col, value=f"=IF({L}{K['Pro-forma EPS (₹)']}>={NM['BASE_EPS']},1,0)")
res = 15
out = [("PV of Paytm JV share (incl. terminal)", f"=SUMPRODUCT(C{K['Paytm 50% share']}:L{K['Paytm 50% share']},C{K['Paytm discount factor']}:L{K['Paytm discount factor']})+L{K['Paytm 50% share']}*(1+{NM['SG']})/({NM['PW']}-{NM['SG']})*L{K['Paytm discount factor']}", N0),
       ("Avoided build PV", f"={NM['BPV']}", N0), ("Cash contributed", f"={NM['JV_CASH']}", N0), ("PV of capital drag", f"={S['Annual capital drag']}/{NM['PW']}", N0),
       ("NPV to Paytm shareholders", f"=B{res}+B{res+1}-B{res+2}-B{res+3}", N0),
       ("PAT breakeven year", f'=IFERROR(INDEX(C6:L6,MATCH(1,C{K["PAT breakeven flag"]}:L{K["PAT breakeven flag"]},0)),"Never (10 yrs)")', None)]
for i, (l, f, fm) in enumerate(out):
    ws.cell(row=res + i, column=1, value=l).font = BOLD; c = ws.cell(row=res + i, column=2, value=f); c.fill = GREEN; c.font = BOLD
    if fm: c.number_format = fm
JVR = dict(npv=f"JV!$B${res+4}", eps27=f"JV!$C${K['Pro-forma EPS (₹)']}")
widths(ws, [40, 14] + [10] * 10)

# ---------------- Walk_Away ----------------
ws = wb.create_sheet("Walk_Away"); title(ws, "Walk away", "EPS benefits from the MDR regardless; strategic cost is the forgone synergy and the consortium owning Liminal")
ws.cell(row=4, column=1, value="EPS with MDR (₹)"); ws.cell(row=4, column=2, value=f"={NM['BASE_EPS']}").number_format = N3
ws.cell(row=5, column=1, value="NPV"); ws.cell(row=5, column=2, value=0)
ws.cell(row=6, column=1, value="Forgone synergy PV, base (values from model run)"); ws.cell(row=6, column=2, value=O["walk"]["forgone_syn_pv"]).number_format = N0
ws.cell(row=7, column=1, value="Block on consortium"); ws.cell(row=7, column=2, value="None: licence can be terminated on change of control")
widths(ws, [52, 50])

# ---------------- Paths_Summary ----------------
ws = wb.create_sheet("Paths_Summary"); title(ws, "Four paths compared", "Live rows follow each sheet's selectors; scenario table and matrix below")
hdr(ws, 4, ["Live (per sheet selectors)", "Full acquisition", "24.9% minority", "JV", "Walk away"])
live = [("NPV", FULL["npv"], MIN["npv"], JVR["npv"], "0"), ("FY27 EPS (₹)", FULL["eps27"], MIN["eps27"], JVR["eps27"], NM["BASE_EPS"]),
        ("PAT breakeven", FULL["pbe"], MIN["pbe"], "JV!$B$20", '"n/a"'), ("FCF breakeven", FULL["fbe"], MIN["fbe"], '"n/a"', '"n/a"')]
for i, row in enumerate(live, 5):
    ws.cell(row=i, column=1, value=row[0])
    for j, ref in enumerate(row[1:]):
        c = ws.cell(row=i, column=2 + j, value="=" + ref); c.number_format = N2 if "EPS" in row[0] else N0
ws.cell(row=10, column=1, value="NPV by scenario (values from model run)").font = BOLD
hdr(ws, 11, ["Scenario", "Full acquisition", "24.9% minority", "JV", "Walk away"])
for i, sc in enumerate(["bear", "base", "bull"], 12):
    ws.cell(row=i, column=1, value=sc)
    for j, k in enumerate(["full", "minority", "jv"]): ws.cell(row=i, column=2 + j, value=O["paths"][sc][k]["npv"]).number_format = N0
    ws.cell(row=i, column=5, value=0)
ws.cell(row=15, column=1, value="Probability-weighted (live)").font = BOLD
for j in range(4):
    L = CL(2 + j); c = ws.cell(row=15, column=2 + j, value=f"={L}12*{NM['P_BEAR']}+{L}13*{NM['P_BASE']}+{L}14*{NM['P_BULL']}"); c.number_format = N0; c.fill = GREEN; c.font = BOLD
ws.cell(row=17, column=1, value="Decision matrix (A28 weights, scores 1 to 5)").font = BOLD
hdr(ws, 18, ["Criterion", "Weight", "Full", "Minority", "JV", "Walk"])
Wt = O["matrix"]["weights"]; Sc = O["matrix"]["scores"]
for i, (crit, w) in enumerate(Wt.items(), 19):
    ws.cell(row=i, column=1, value=crit); c = ws.cell(row=i, column=2, value=w); c.font = BLUE; c.fill = YEL; c.number_format = '0%'
    for j, k in enumerate(["full", "minority", "jv", "walk"]):
        c = ws.cell(row=i, column=3 + j, value=Sc[k][i - 19]); c.font = BLUE; c.fill = YEL
last = 18 + len(Wt)
ws.cell(row=last + 1, column=1, value="Weighted score").font = BOLD
for j in range(4):
    L = CL(3 + j); c = ws.cell(row=last + 1, column=3 + j, value=f"=SUMPRODUCT($B$19:$B${last},{L}19:{L}{last})"); c.number_format = N2; c.fill = GREEN; c.font = BOLD
MATRIX_ROW = last + 1
widths(ws, [46, 16, 16, 16, 16, 16])

# ---------------- Churn_Drag_Grid (values) ----------------
ws = wb.create_sheet("Churn_Drag_Grid"); title(ws, "Full acquisition stress tests (values from model run)", "NPV by churn and annual drag; maximum justified price; breakeven churn")
r = 4
for sc in ["base", "bull", "bear"]:
    ws.cell(row=r, column=1, value=f"NPV grid, {sc}").font = BOLD
    hdr(ws, r + 1, ["Annual drag \\ churn"] + [f"{float(c)*100:.1f}%" for c in O["full_grid"][sc]["0"]])
    for i, (d, v) in enumerate(O["full_grid"][sc].items(), r + 2):
        ws.cell(row=i, column=1, value=int(d))
        for j, x in enumerate(v.values()): ws.cell(row=i, column=2 + j, value=x).number_format = N0
    r += 8
ws.cell(row=r, column=1, value="Maximum justified control price (churn | annual drag)").font = BOLD
hdr(ws, r + 1, ["Scenario"] + list(O["max_price"]["base"].keys()))
for i, (sc, v) in enumerate(O["max_price"].items(), r + 2):
    ws.cell(row=i, column=1, value=sc)
    for j, x in enumerate(v.values()): ws.cell(row=i, column=2 + j, value=x).number_format = N0
r += 7
ws.cell(row=r, column=1, value="Breakeven churn (NPV = 0), zero drag").font = BOLD
hdr(ws, r + 1, ["Scenario | price", "Breakeven churn"])
items = list(O["full_be_churn"].items()) + [("minority " + k, v) for k, v in O["min_be_churn"].items()]
for i, (k, v) in enumerate(items, r + 2):
    ws.cell(row=i, column=1, value=k); c = ws.cell(row=i, column=2, value=("No positive NPV at any churn" if v == 0.0 else v)); c.number_format = PCT
widths(ws, [34] + [12] * 8)

# ---------------- Funding_Credit ----------------
ws = wb.create_sheet("Funding_Credit"); title(ws, "Funding mixes for the ₹4,000 Cr full acquisition vs the recommended structure", "Credit metrics live; EPS values from model run (base, 37.5% churn, ₹750 Cr drag)")
hdr(ws, 4, ["Mix", "Cash (₹ Cr)", "New debt", "New equity", "New shares (Cr)", "Dilution", "Gross debt/EBITDA", "Interest cover", "Cash after close", "FY27 EPS", "FY29 EPS", "FY27 EPS vs ₹7.50", "NPV"])
mixes = [(k, c, d, e) for k, (c, d, e) in zip(O["funding"].keys(), [(2100, 0, 1900), (0, 2100, 1900), (1050, 1050, 1900), (0, 0, 4000), (4000, 0, 0)])]
for i, (k, c, d, e) in enumerate(mixes, 5):
    ws.cell(row=i, column=1, value=k)
    for j, v in enumerate([c, d, e]): cc = ws.cell(row=i, column=2 + j, value=v); cc.font = BLUE; cc.fill = YEL; cc.number_format = N0
    ws.cell(row=i, column=5, value=f"=D{i}/{NM['PX']}").number_format = N3
    ws.cell(row=i, column=6, value=f"=E{i}/{NM['SH']}").number_format = '0.00%'
    ws.cell(row=i, column=7, value=f"=({NM['DEBT']}+C{i})/{NM['EBITDA']}").number_format = N2
    ws.cell(row=i, column=8, value=f"={NM['EBITDA']}/(({NM['DEBT']}+C{i})*{NM['KD']})").number_format = N1
    ws.cell(row=i, column=9, value=f"={NM['CASH']}-B{i}").number_format = N0
    f = O["funding"][k]
    ws.cell(row=i, column=10, value=f["eps27"]).number_format = N2; ws.cell(row=i, column=11, value=f["eps29"]).number_format = N2
    ws.cell(row=i, column=12, value=f"=J{i}/{NM['EPS']}-1").number_format = PCT; ws.cell(row=i, column=13, value=f["npv"]).number_format = N0
i = 5 + len(mixes)
ws.cell(row=i, column=1, value="Recommended: 24.9% stake, all cash").font = BOLD
for j, v in enumerate([f"={NM['UP']}", 0, 0]): ws.cell(row=i, column=2 + j, value=v).number_format = N0
ws.cell(row=i, column=5, value=0); ws.cell(row=i, column=6, value=0).number_format = '0.00%'
ws.cell(row=i, column=7, value=f"={NM['DEBT']}/{NM['EBITDA']}").number_format = N2
ws.cell(row=i, column=8, value=f"={NM['EBITDA']}/({NM['DEBT']}*{NM['KD']})").number_format = N1
ws.cell(row=i, column=9, value=f"={NM['CASH']}-B{i}").number_format = N0
ws.cell(row=i, column=10, value=f"={MIN['eps27']}").number_format = N2; ws.cell(row=i, column=11, value=f"=Minority!$E${MIN['eps27'].split('$')[-1]}").number_format = N2
ws.cell(row=i, column=12, value=f"=J{i}/{NM['EPS']}-1").number_format = PCT; ws.cell(row=i, column=13, value=f"={MIN['npv']}").number_format = N0
widths(ws, [40] + [13] * 12)

# ---------------- Football_Field ----------------
ws = wb.create_sheet("Football_Field"); title(ws, "Liminal valuation football field (100% equity) and the stake price rule", "DCF range from DCF_Sensitivity (g 6%, discount 19% to 15%)")
FFd = O["meta"]["FF"]
hdr(ws, 4, ["Method", "Low multiple (x ARR)", "High multiple (x ARR)", "Low ₹ Cr", "High ₹ Cr", "Midpoint", "Weight", "Note"])
ws.cell(row=5, column=1, value="DCF (base, no churn)"); ws.cell(row=5, column=4, value="=DCF_Sensitivity!D9").number_format = N0; ws.cell(row=5, column=5, value="=DCF_Sensitivity!D5").number_format = N0
ws.cell(row=6, column=1, value="Trading comps (EV/LTM revenue)"); ws.cell(row=7, column=1, value="Precedent transactions (EV/revenue)")
for rr, lo, hi, note in [(6, FFd["trading_lo"], FFd["trading_hi"], FFd["trading_note"]), (7, FFd["prec_lo"], FFd["prec_hi"], FFd["prec_note"])]:
    for cc, v in [(2, lo), (3, hi)]: c = ws.cell(row=rr, column=cc, value=v); c.font = BLUE; c.fill = YEL; c.number_format = N1
    ws.cell(row=rr, column=4, value=f"=B{rr}*{NM['ARR']}").number_format = N0; ws.cell(row=rr, column=5, value=f"=C{rr}*{NM['ARR']}").number_format = N0
    ws.cell(row=rr, column=8, value=note)
for rr, w in zip([5, 6, 7], [FFd["w_dcf"], FFd["w_trd"], FFd["w_prec"]]):
    ws.cell(row=rr, column=6, value=f"=(D{rr}+E{rr})/2").number_format = N0
    c = ws.cell(row=rr, column=7, value=w); c.font = BLUE; c.fill = YEL; c.number_format = '0%'
rows = [("Weighted fair value (100%)", "=SUMPRODUCT(F5:F7,G5:G7)", N0), ("Weighted fair value / ARR (x)", f"=B9/{NM['ARR']}", N1),
        ("Stake price rule: 24.9% x fair value, rounded down to ₹50 Cr", f"=FLOOR({NM['STAKE']}*B9,50)", N0), ("Upfront price used (A24b)", f"={NM['UP']}", N0),
        ("Implied post-money", f"={NM['UP']}/{NM['STAKE']}", N0), ("Headline if Tranche 2 paid in full", f"=({NM['UP']}+{NM['EO']})/{NM['STAKE']}", N0),
        ("Proposed deal price (case)", f"={NM['DEAL']}", N0), ("Proposed price / weighted fair value", "=B15/B9", N2)]
for i, (l, f, fm) in enumerate(rows, 9):
    ws.cell(row=i, column=1, value=l).font = BOLD; c = ws.cell(row=i, column=2, value=f); c.number_format = fm; c.fill = GREEN
widths(ws, [58, 16, 16, 12, 12, 12, 9, 40])

# ---------------- Checks ----------------
ws = wb.create_sheet("Checks"); title(ws, "Model integrity checks (all must be TRUE with selectors at default)", "Python reference values from model_outputs.json")
b = O["paths"]["base"]
checks = [("Baseline EPS = PAT / shares = 7.50", f"=ABS({NM['PAT']}/{NM['SH']}-7.5)<0.001"),
          ("MDR-adjusted EPS = 8.845", f"=ABS({NM['BASE_EPS']}-{O['ratios']['eps_mdr']})<0.001"),
          ("Deal cash + equity = deal value", f"={NM['DEAL_CASH']}+{NM['DEAL_EQ']}={NM['DEAL']}"),
          ("Liminal EV base, no churn ties to Python", f"=ABS({EVREF['base']}-{O['liminal_ev']['base']['0']})<=1"),
          ("Liminal EV bull, no churn ties to Python", f"=ABS({EVREF['bull']}-{O['liminal_ev']['bull']['0']})<=1"),
          ("Liminal EV bear, no churn ties to Python", f"=ABS({EVREF['bear']}-{O['liminal_ev']['bear']['0']})<=1"),
          ("Full acquisition NPV (base) ties", f"=ABS({FULL['npv']}-({b['full']['npv']}))<=1"),
          ("Full acquisition FY27 EPS ties", f"=ABS({FULL['eps27']}-{b['full']['eps'][0]})<=0.005"),
          ("Minority NPV (base) ties", f"=ABS({MIN['npv']}-({b['minority']['npv']}))<=1"),
          ("Minority FY27 EPS ties", f"=ABS({MIN['eps27']}-{b['minority']['eps'][0]})<=0.005"),
          ("Minority Tranche 2 (base) ties", f"=ABS({MIN['eo']}-{b['minority']['eo']})<=1"),
          ("JV NPV (base) ties", f"=ABS({JVR['npv']}-({b['jv']['npv']}))<=1"),
          ("JV FY27 EPS ties", f"=ABS({JVR['eps27']}-{b['jv']['eps'][0]})<=0.005"),
          ("Decision matrix: minority ranks first", f"=Paths_Summary!D{MATRIX_ROW}=MAX(Paths_Summary!C{MATRIX_ROW}:F{MATRIX_ROW})"),
          ("Stake price rule equals upfront price used", "=Football_Field!B11=Football_Field!B12"),
          ("Probability weights sum to 1", f"=ABS({NM['P_BEAR']}+{NM['P_BASE']}+{NM['P_BULL']}-1)<0.0001")]
hdr(ws, 4, ["Check", "Result"])
for i, (l, f) in enumerate(checks, 5):
    ws.cell(row=i, column=1, value=l); c = ws.cell(row=i, column=2, value=f); c.font = BOLD
ws.cell(row=5 + len(checks) + 1, column=1, value="All checks pass").font = BOLD
ws.cell(row=5 + len(checks) + 1, column=2, value=f"=AND(B5:B{4+len(checks)})").font = BOLD
widths(ws, [52, 12])

for s in wb.worksheets: s.freeze_panes = None; s.sheet_view.showGridLines = False
from openpyxl.workbook.properties import CalcProperties
wb.calculation = CalcProperties(fullCalcOnLoad=True)
wb.save(os.path.join(HERE, "Satoshi_Gate_Model.xlsx"))
print("saved")
