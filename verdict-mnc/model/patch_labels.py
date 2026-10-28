# ===== HARVESTBOX MODEL RELABEL v1 =====
"""Replace coined labels inside harvestbox_model.py (strings only, no number changes), then rerun the model.
  python -X utf8 verdict-mnc/model/patch_labels.py        HB_DRY=1 prints the values object and writes nothing."""
import io, os, sys, pathlib, subprocess
M = (pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(os.environ["HB_M"])) / "harvestbox_model.py"
DRY = os.environ.get("HB_DRY") == "1"
src = io.open(M, encoding="utf-8").read().replace("\r", "")
REPS = [
 ('"""Project Perennial: 24-month cohort and cash model', '"""24-month cohort and cash model', 1),
 ('("Flex: retention net of skips"', '("Proposal A: retention net of skips"', 1),
 ('("Flex: referral, win-back, conversion"', '("Proposal A: referral, win-back, conversion"', 1),
 ('PER = dict(label="A rebuilt: Perennial"', 'PER = dict(label="A rebuilt"', 1),
 ('f5="Ninety days put Flex live in all five cities for %s1.8 Cr, and seven KPIs', 'f5="Ninety days put Proposal A live in five cities for %s1.8 Cr, and seven KPIs', 1),
 ('uses=[["Flex build (Proposal A)"', 'uses=[["Proposal A build"', 1),
 ('[["B with the reset", RU + "1.3 Cr"', '[["B + improvements", RU + "1.3 Cr"', 1),
 ('["C with the reset", RU + "5.0 Cr"', '["C + improvements", RU + "5.0 Cr"', 1),
 ('("reset_only", "Reset only")', '("reset_only", "Improvements only")', 1),
 ('("B_reset", "B with the reset"), ("C_reset", "C with the reset")', '("B_reset", "B with the same improvements"), ("C_reset", "C with the same improvements")', 1),
 ('("core", "Perennial, core (A rebuilt)")', '("core", "Recommended plan, core (A rebuilt)")', 1),
 ('("base", "Perennial, base (with staged ready-to-eat)")', '("base", "Recommended plan, base (with staged ready-to-eat)")', 1),
 ('"T3 Survival curve, months 1 to 12, today and with Flex"', '"T3 Survival curve, months 1 to 12, today and with Proposal A rebuilt"', 1),
 ('["Flex (65% at month 3)"]', '["A rebuilt (65% at month 3)"]', 1),
 ('scen=[["Revenue (" + RU + " Cr)", "42.0"', 'scen=[["Revenue", "42.0"', 1),
 ('["EBITDA (" + RU + " Cr)", MIN + "9.2"', '["EBITDA", MIN + "9.2"', 1),
 ('["Cash at year end", "15.0"', '["Year-end cash", "15.0"', 1),
]
if "Proposal A: retention net of skips" in src:
    print("already relabelled")
else:
    for a, b, n in REPS:
        assert src.count(a) == n, (a[:60], src.count(a)); src = src.replace(a, b)
    for bad in ("Perennial", "Flex"):
        assert bad not in src, bad
if DRY:
    os.environ["HB_HERE"] = str(M.parent); exec(compile(src, "model", "exec"), {"__name__": "hb"})
else:
    io.open(M, "w", encoding="utf-8", newline="\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(M)], capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-1500:], r.stderr[-800:])
