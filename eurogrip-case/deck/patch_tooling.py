"""One-time patch of the copied BeyondTech tooling for the Eurogrip deck. Every old string must occur exactly once."""
import io, re, pathlib
D = pathlib.Path(__file__).resolve().parent


def rd(rel): return io.open(D / rel, encoding="utf-8").read().replace("\r", "")
def wr(rel, t): io.open(D / rel, "w", encoding="utf-8", newline="\n").write(t)


def sub(rel, old, new):
    t = rd(rel); assert t.count(old) == 1, (rel, old[:60], t.count(old)); wr(rel, t.replace(old, new)); print("patched", rel, "|", old[:50])


def line(rel, prefix, new):
    t = rd(rel); ls = t.split("\n"); idx = [i for i, l in enumerate(ls) if l.lstrip().startswith(prefix)]
    assert len(idx) == 1, (rel, prefix, idx); ls[idx[0]] = new; wr(rel, "\n".join(ls)); print("replaced line", rel, "|", prefix)


sub("gen.py", "# ===== BEYONDTECH DECK GEN v2 =====", "# ===== EUROGRIP DECK GEN v1 =====")
sub("gen.py", "NS = 11", "NS = 4")
sub("gen.py", "X2 = (2, 3, 5)  # the redesigned slides", "X2 = (1, 2, 3, 4)  # glyph metrics and rail helpers on every slide")
sub("_extras.js", "// ===== BEYONDTECH DECK EXTRAS =====", "// ===== EUROGRIP DECK EXTRAS =====")
line("_extras.js", "const RIBN=[", 'const RIBN=["INCENTIVE REALISM","INSIGHT-GROUNDING","SCALABILITY","SUSTAINABILITY","MEASURABILITY"];')
line("_extras.js", "const RIBAP=[", 'const RIBAP=["A1 SHOP UNIVERSE","A2 BUDGET MODEL","A3 BENCHMARKS","A4 RISKS AND VALIDATION"];')
COVER = '''function coverTop(s){ addChip(s,64,48,600,56,"EUROGRIP × UNSTOP  |  CASE STUDY 4",C.primaryDeep,C.white,22);
  logoSlot(s,696,40,190,72,"Eurogrip"); logoSlot(s,902,40,150,72,"Unstop"); logoSlot(s,1068,40,72,72,"DTU");
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// ===== END EUROGRIP DECK EXTRAS ====='''
t = rd("_extras.js"); a = t.index("function coverTop(s){"); END = "// ===== END BEYONDTECH DECK EXTRAS ====="
assert t.count("function coverTop(s){") == 1 and t.count(END) == 1
b = t.index(END) + len(END); wr("_extras.js", t[:a] + COVER + t[b:]); print("replaced coverTop and end marker")
line("_sweeps.js", "const BAN=[", 'const BAN=["here\'s","let\'s","bottom line","delve","game-changer","unlock","it\'s not just","make no mistake","landscape","robust","seamless","holistic","tapestry","paradigm","navigate","revolutioni","cutting-edge","leverage","empower","transformative","journey","synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover","in today\'s","ever-evolving","imagine","ecosystem","testament","elevate","what if","picture this","dive into","groundbreaking","state-of-the-art","plethora","myriad","underscore","showcase","foster","bolster","spearhead","nuanced","intricate","meticulous","realm","fast-paced","in conclusion","it is important to note"]; const ALLOW=["influencer advocacy ecosystem","advocacy ecosystem","ownership journey","customer journey","rider journey","replacement journey","next-gen tyre technology","next-generation tyre","competitive landscape"];')
line("_sweeps.js", "const ABSENT=[", 'const ABSENT=["BeyondTech","Beyond Tech","DTU Plan","Dream11","FanCode","Paytm","Liminal","Satoshi","Setu","PRAMAAN","Maudrik","SwasthyaGrid","NEXORA","HarvestBox","Perennial","Gousto","Verdict","Next Signal","NEXT SIGNAL","Track D","ATMOS","TODO","TBD","Lorem","Insert","xyz","undefined","NaN","Rs "];')
sub("_sweeps.js", "const low=c.toLowerCase(); for(const b of BAN) if(low.includes(b))",
    'let low=c.toLowerCase(); ALLOW.forEach(w=>{ low=low.split(w).join(" "); }); for(const b of BAN) if(new RegExp("\\\\b"+b.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")).test(low))')
print("patch_tooling done")
