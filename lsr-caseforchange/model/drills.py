# ===== SETU DRILLS =====
"""Re-runs the base plan under the 'new development' shocks a finalist may be handed. Writes model/drills.md.
Run:  python lsr-caseforchange/model/drills.py"""
import copy, pathlib, setu_model as M
ROWS = []
def run(label, knob, Lch=None, Ach=None, Fch=None, cash_hit=None):
    A0 = copy.deepcopy(M.A); F0 = copy.deepcopy(M.F)
    if Ach: M.A.update(Ach)
    if Fch: M.F.update(Fch)
    P = copy.deepcopy(M.L); P.update(Lch or {}); r = M.plan(P)
    if cash_hit:
        for x in r[cash_hit[0] - 1:]: x["cash"] -= cash_hit[1]
    k = M.kpis(r); ROWS.append([label, knob, "%.1f" % k["min_cash"], "M%d" % k["min_month"], "none" if k["breach"] is None else "M%d" % k["breach"], "%.1f" % k["cash12"], "%.1f" % k["e12"], "%d" % round(k["hc12"])])
    M.A.clear(); M.A.update(A0); M.F.clear(); M.F.update(F0)
run("Base case", "none")
run("D1 Largest BFSI client leaves, 20% of BFSI revenue", "A rev_bfsi 100 to 80", Ach=dict(rev_bfsi=80.0))
run("D2 AI-native firm cuts its price to 22", "L p_clean 31 to 26", Lch=dict(p_clean=26.0))
run("D2b Price cut and faster clean-file loss", "L p_clean 26, d_clean 3%", Lch=dict(p_clean=26.0, d_clean=0.03))
run("D3 Attrition jumps to 40%", "F attr 0.26 to 0.40", Fch=dict(attr=0.40))
run("D3b Attrition falls to 15%", "F attr 0.26 to 0.15", Fch=dict(attr=0.15))
run("D4 Data services ramp is half the plan", "L lab halved", Lch=dict(lab=[x // 2 for x in M.L["lab"]]))
run("D5 Lender demands a 10 Cr prepayment in month 3", "cash less 10 from M3", cash_hit=(3, 10.0))
run("D6 Engine go-live slips three months", "L mig shifted by 3", Lch=dict(mig={1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: .20, 7: .40, 8: .55, 9: .70, 10: .80, 11: .90}))
run("D7 Clients refuse the hard-file price", "L p_hard 48 to 38", Lch=dict(p_hard=38.0))
run("D8 Hard files are 20% of volume, not 30%", "A hard_share 0.30 to 0.20", Ach=dict(hard_share=0.20))
run("D9 Hard files are 40% of volume", "A hard_share 0.30 to 0.40", Ach=dict(hard_share=0.40))
head = ["Shock", "Model knob", "Lowest cash", "Month", "Covenant breach", "Cash M12", "EBITDA run-rate M12", "Headcount M12"]
md = "# Finals drills (base plan re-run under each shock, no counter-move applied)\n\n| " + " | ".join(head) + " |\n|" + "---|" * len(head) + "\n" + "\n".join("| " + " | ".join(r) + " |" for r in ROWS) + "\n"
(pathlib.Path(__file__).resolve().parent / "drills.md").write_text(md, encoding="utf-8"); print(md)
