# ===== HARVESTBOX DECK V2 =====
"""Convert the Stage 1 slide scripts in deck/ into the 8-slide, research-derived, label-free version.
  python -X utf8 verdict-mnc/deck/derive_v2.py            HB_DRY=1 prints the files as JSON and writes nothing."""
import io, os, json, pathlib
D = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path(os.environ["HB_D"])
DRY = os.environ.get("HB_DRY") == "1"
NAMES = ["_palette.js", "_extras.js"] + ["slides/s0%d.js" % i for i in range(1, 8)] + ["gen.py", "setup.js", "_v1.js", "_sweeps.js"]
B = {n: io.open(D / n, encoding="utf-8").read().replace("\r", "").rstrip("\n") for n in NAMES}
if "HARVESTBOX DECK EXTRAS" in B["_extras.js"]:
    print("already v2"); raise SystemExit(0)
for n in B:
    if n.endswith(".js") and n != "_sweeps.js":
        for code, ch in (("\\u20b9", "\u20b9"), ("\\u00b7", "\u00b7"), ("\\u2212", "\u2212")): B[n] = B[n].replace(code, ch)
def rep(n, a, b, cnt=1):
    assert B[n].count(a) == cnt, (n, a[:60], B[n].count(a)); B[n] = B[n].replace(a, b)
def line(n, prefix, new):
    L = B[n].split("\n"); idx = [i for i, l in enumerate(L) if l.startswith(prefix)]; assert len(idx) == 1, (n, prefix, len(idx)); L[idx[0]] = new; B[n] = "\n".join(L)
def span(n, start, end, new):
    a = B[n].index(start); b = B[n].index(end, a); B[n] = B[n][:a] + new + B[n][b:]
RU = "\u20b9"
# ---- extras
rep("_extras.js", 'const RIBX=["APPENDIX","ASSUMPTIONS","DATA CHECK","SENSITIVITY","SOURCES"];', 'const RIBX=["APPENDIX 1: ASSUMPTIONS AND CHECKS","APPENDIX 2: SHORT FORMS AND SOURCES"];')
rep("_extras.js", "// ===== PERENNIAL EXTRAS =====", "// ===== HARVESTBOX DECK EXTRAS =====")
rep("_extras.js", "// ===== END PERENNIAL EXTRAS =====", "// ===== END HARVESTBOX DECK EXTRAS =====")
# ---- slide 1
s = "slides/s01.js"
line(s, 'T(v,28,18,1064,26,"OUR VERDICT', 'T(v,28,18,1064,26,"OUR VERDICT: FUND PROPOSAL A, REBUILT. Free skipping with a floor, a ' + RU + '3,600 entry plan and referral, alongside the smaller operational improvements the case allows.",{family:"Poppins",style:"Bold",color:C.accent});')
rep(s, "FIVE WAYS TO SOLVE TONIGHT'S DINNER", "FIVE WAYS TO SOLVE A WEEKDAY DINNER")
rep(s, '"TONIGHT\'S DINNER"', '"A WEEKDAY DINNER"')
rep(s, '"ORDER IN","hot food in 30 minutes"', '"ORDER IN","' + RU + '499 to ' + RU + '660 an order"')
rep(s, '"READY-TO-EAT","', '"TEN-MINUTE FOOD","')
rep(s, 'logoSlot(pm,460,316,76,72,"ITC"); logoSlot(pm,544,316,76,72,"MTR");', 'logoSlot(pm,460,316,76,72,"Zepto Cafe"); logoSlot(pm,544,316,76,72,"Bistro");')
rep(s, '"HARVESTBOX, REBUILT"', '"PROPOSAL A, REBUILT"')
rep(s, '"skip freely, start at ' + RU + '3,600, bring a friend"', '"' + RU + '3,600, ' + RU + '5,200 and ' + RU + '6,600 plans, free skipping"')
rep(s, '"HelloFresh"', '"Gousto"')
rep(s, '"One added ready-to-eat after its kit base held. One never fixed churn."', '"Gousto: third profitable year in a row. Blue Apron: lost 95% of its IPO value."')
rep(s, '| Team IdeaForge model "+V.hash+" and research document"', '| Team IdeaForge research, sections 2, 9 and 11 | model "+V.hash')
# ---- slide 2
s = "slides/s02.js"
span(s, "// B1 exit reasons", "// B2 scorecard", '''// B1 exit reasons: case against mined reviews
const b1=panel(s,64,678,560,352,"A ANSWERS 63% OF EXITS, B NONE");
const WL=["Too rigid to skip","Too expensive","Repetitive menu","Waste, portions","Delivery problems"], RVM=[42.5,16.2,1.8,12.4,27.1], who=["A","none","A, C","A","none"];
const hf2=v=>v>=25?HG[3]:(v>=15?HG[2]:HG[1]);
grid(b1,16,58,WL,["Case","Review","Fix"],V.why.map((w,i)=>[{t:w[1]+"%",f:hf2(w[1])},{t:RVM[i]+"%",f:hf2(RVM[i])},{t:who[i],f:who[i]==="none"?C.alertTint:C.white}]),{labelW:248,cellW:93,rowH:40,headH:38,corner:"Exit reason",name:"TABLE: exit reasons"});
fine(b1,16,300,528,"Review: mix in 2,435 low-star Play Store reviews of six meal-kit apps. Association, not proof. Fix: proposal as written.");
''')
rep(s, '| Team IdeaForge model "+V.hash+", tables T1 to T4 and T9"', '| research sections 3 to 8 and 13 to 16 | model "+V.hash+", tables T1 to T4, T9"')
# ---- slide 3
s = "slides/s03.js"
rep(s, '"DO: FUND A, REBUILT AS FLEX WITH A FLOOR"', '"DO: FUND A, REBUILT WITH A SKIP FLOOR"')
rep(s, '"FLEX WITH A FLOOR: FIVE FEATURES, REBUILT"', '"PROPOSAL A: FIVE FEATURES, REBUILT"')
rep(s, 'name:"flex features"', 'name:"proposal a features"')
rep(s, '"Flex and the operating reset, ' + RU + '1.8 Cr."', '"Proposal A, rebuilt, plus operational improvements."')
rep(s, '["Precedent: ","HelloFresh bought ready-to-eat maker Factor in 2020, after its kit base held."]', '["Precedent: ","Gousto, three profitable years on a new recipe mix, not discounts."]')
rep(s, '| HelloFresh SE annual report 2020 (Factor acquisition) | Team IdeaForge model "+V.hash+", tables T4, T8, T9 and T12"', '| research sections 2, 11, 13, 16, 17 | Gousto FY2025 results (Grocery Gazette, May 2026) | model "+V.hash+", tables T8, T9, T12"')
# ---- slide 4
s = "slides/s04.js"
span(s, "const sp=panel(", "results.push(", '''const sp=panel(s,64,688,700,342,"THREE SCENARIOS, ONE SET OF LEVERS");
addTable(sp,16,58,[212,88,88,88,96,96],["Measure","2025","Y1","Y2","Bear","Bull"],V.scen,{rowH:32,headerH:36}).name="TABLE: scenarios";
fine(sp,16,322,668,"''' + RU + ''' Cr or %. Y1, Y2: base case. Bear, Bull: year 2 of each scenario.");
const hp=panel(s,780,688,560,342,"NO RISK IS BOTH LIKELY AND SEVERE");
const RK=[[1,3,4],[2,3,3],[3,3,3],[4,2,5],[5,3,4],[6,2,3],[7,2,2],[8,2,2],[9,3,3],[10,2,5],[11,2,4],[12,2,5]];
grid(hp,16,58,["5","4","3","2","1"],["1","2","3","4","5"],[5,4,3,2,1].map(im=>[1,2,3,4,5].map(p=>{ const ids=RK.filter(r=>r[1]===p&&r[2]===im).map(r=>r[0]); const sc=p*im; return {t:ids.join(" "),f:sc>=15?C.alert:(sc>=10?C.alertTint:(sc>=6?C.accentTint:C.white))}; })),{labelW:68,cellW:92,rowH:40,headH:38,corner:"I",name:"TABLE: risk heat"});
fine(hp,16,300,528,"Rows: impact, 1 to 5. Columns: probability, 1 to 5. Cells: risk numbers (research, section 21).");
const rp=panel(s,1356,688,500,342,"THE FOUR NEAREST THE CORNER");
wrapTable(rp,16,56,[56,200,212],["#","Trigger","Response"],[
 ["1","Referral under 15%, M6","Raise reward, add win-back"],
 ["4","Skips over 10%, 2 months","Tighten floor, fee on 3rd skip"],
 ["5","Margin under 32%, M9","Packaging and buying first"],
 ["10","Cash under ''' + RU + '''7 Cr, M12","Pull contingency early"]],{rowH:58,headerH:36,name:"risks"});
''')
rep(s, '| Team IdeaForge model "+V.hash+", tables T4 to T7 and T13 | assumptions A01 to A25 in the appendix and research document"', '| research sections 19 to 21 | model "+V.hash+", tables T4 to T7 | assumptions A01 to A25"')
# ---- slide 5
s = "slides/s05.js"
rep(s, '"90 DAYS: FLEX LIVE IN FIVE CITIES BY WEEK 12"', '"90 DAYS: PROPOSAL A LIVE IN FIVE CITIES BY WEEK 12"')
rep(s, '"Flex live in five cities, pilot retention at 62%."', '"Proposal A live in five cities, pilot retention 62%."')
rep(s, '| Team IdeaForge model "+V.hash+", tables T10 and T11 | research document sections 15 to 17"', '| research sections 18, 22 to 24 | model "+V.hash+", tables T10, T11"')
# ---- slide 6 becomes appendix 1
s = "slides/s06.js"
rep(s, 'skeleton2(s,0,"A1","APPENDIX: ASSUMPTIONS AND CHECKS",560,', 'skeleton2(s,0,"A1","APPENDIX 1: ASSUMPTIONS AND CHECKS",590,')
span(s, "const xp=panel(", "results.push(", '''const xp=panel(s,900,700,956,330,"READING NOTES AND BREAK-EVEN INPUTS");
["Case facts are used as given. Each team assumption has an ID (A01 to A25), a rationale and a sensitivity in the research, section 25.",
 "No customer interview, survey or pilot has been run. The validation plan in the research, Appendix E, is a plan and says so.",
 "Real brands on the cover mark alternatives and precedents only. HarvestBox is the fictional company in the case."]
 .forEach((x,i)=>{ fine(xp,56,62+i*84,400,x); addBadge(xp,16,62+i*84,32,i+1,C.primary,C.white); });
addTable(xp,480,58,[230,100,130],["Input","Base","Flips at"],[["Referral share","20%","18.1%"],["Skip rate","5%","5.6%"],["M3 retention","65%","64.5%"],["Web conversion","3.3%","3.27%"],["Margin levers","+4.0","+3.8"]],{rowH:34,headerH:36}).name="TABLE: break-even inputs";
fine(xp,480,268,460,"Flips at: the input value where run-rate EBITDA is zero (research, section 20.5).");
''')
rep(s, '"THREE PROPOSALS, AS WRITTEN AND WITH THE SAME RESET"', '"THREE PROPOSALS, AS WRITTEN AND IMPROVED"')
# ---- slide 8 is the old slide 7; slide 7 is new
B["slides/s08.js"] = B["slides/s07.js"].replace('getNodeByIdAsync("S7")', 'getNodeByIdAsync("S8")')
AB = [["A, B, C", "Proposals: subscription, retail, ready-to-eat"], ["A rebuilt", "Proposal A with the five redesigned features on slide 3"],
      ["A01 to A25", "Team assumption IDs, listed in the research, section 25"], ["Bear, bull", "Low and high scenarios; base is the expected case"],
      ["CAC", "Customer acquisition cost: spend to win one customer"], ["Cr", "Crore: ten million rupees"],
      ["EBITDA", "Earnings before interest, tax, depreciation, amortisation"], ["GM", "Gross margin: gross profit as a share of revenue"],
      ["Risk scores", "Impact (rows) and probability (columns), each 1 to 5"], ["KPI", "Key performance indicator"], ["lakh", "One hundred thousand"],
      ["LTV", "Lifetime gross profit earned from one customer"], ["LTV to CAC", "Lifetime gross profit divided by acquisition cost"],
      ["M3, M12, M24", "Month 3, 12 or 24, of a customer or of the plan"], ["Mktg", "Marketing spend"],
      ["Other", "Operating cost other than cost of goods and marketing"], ["p", "Paise: one hundredth of a rupee"],
      ["pts", "Percentage points"], ["Run-rate", "Months 22 to 24 of the plan, scaled to a full year"], ["Stop trigger", "The KPI level at which the Board acts"],
      ["T1 to T13", "Model tables, reproduced in the research, Appendix B"], ["W1 to W13", "Weeks 1 to 13 of the 90-day plan"],
      ["x", "Times: 2.70x means 2.70 times"], ["Y1, Y2", "Plan year 1 (months 1 to 12) and year 2 (13 to 24)"], ["Zero month", "The month in which cash in the bank reaches zero"]]
B["slides/s07.js"] = '''{ const s = await figma.getNodeByIdAsync("S7"); wipe(s);
skeleton2(s,1,"A2","APPENDIX 2: SHORT FORMS AND SOURCES",600,"Every short form, abbreviation and tag on these slides is expanded here, and each slide is tied to the research sections it was derived from","Source: Team IdeaForge research document (29 sections, 6 appendices) | model "+V.hash,RIBX);
const AB=''' + json.dumps(AB, ensure_ascii=False) + ''';
const p1=panel(s,64,318,880,712,"SHORT FORMS USED IN THIS DECK (1 OF 2)");
wrapTable(p1,16,58,[170,678],["Short form","Meaning as used here"],AB.slice(0,17),{rowH:36,headerH:38,name:"abbreviations 1"});
const p2=panel(s,960,318,896,400,"SHORT FORMS USED IN THIS DECK (2 OF 2)");
wrapTable(p2,16,58,[170,694],["Short form","Meaning as used here"],AB.slice(17),{rowH:36,headerH:38,name:"abbreviations 2"});
const p3=panel(s,960,734,896,296,"WHERE EACH SLIDE COMES FROM");
["Case: Verdict 2.0, HarvestBox: Growing Without Burning Out (Motilal Nehru College, 2026).",
 "Model: harvestbox_model.py, hash "+V.hash+", tables T1 to T13 (research, Appendix B).",
 "Slide 1: research sections 2, 9 and 11. Slide 2: sections 3 to 8 and 13 to 16.",
 "Slide 3: sections 2, 11, 13, 16 and 17. Slide 4: sections 19 to 21. Slide 5: sections 18 and 22 to 24.",
 "Reviews: 8,052 Play Store reviews of six meal-kit apps since January 2024 (research, Appendix C).",
 "Outside sources: 65 cited sources, listed in full in the research, Appendix A."].forEach((x,i)=>fine(p3,16,60+i*38,864,x));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }'''
# ---- generator, setup and sweeps for eight slides
rep("gen.py", "# ===== PERENNIAL GEN v1 =====", "# ===== HARVESTBOX DECK GEN v2 =====")
B["gen.py"] = B["gen.py"].replace("range(1, 8)", "range(1, 9)").replace("all 7 slides", "all 8 slides")
rep("setup.js", "all().length < 7", "all().length < 8")
B["setup.js"] = B["setup.js"].replace("slice(0, 7)", "slice(0, 8)").replace("slice(7)", "slice(8)").replace("exactly seven slides", "exactly eight slides")
rep("setup.js", '"06 Appendix", "07 Thank You"]', '"06 Appendix 1", "07 Appendix 2", "08 Thank You"]')
rep("_sweeps.js", '"SwasthyaGrid","NEXORA","Aakriti"', '"SwasthyaGrid","NEXORA","Aakriti","Perennial","Flex","reset","HelloFresh"')
for n, c in B.items():
    for bad in ("Perennial", "FLEX", "Flex ", "operating reset"):
        assert n == "_sweeps.js" or bad not in c, (n, bad)
if DRY:
    print("DECKJSON " + json.dumps(B, ensure_ascii=False))
else:
    for n, c in B.items(): io.open(D / n, "w", encoding="utf-8", newline="\n").write(c + "\n")
    print("v2 written", len(B), "files")
