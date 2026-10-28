"""One-time patch of the tooling copied from beyondtech-dcg/deck for the SwiftKart deck.
Every old string must occur exactly once. Run once: PY dreamforge-case/deck/patch_tooling.py
patch(read, write) takes two callables so the same edits can be tested in memory."""
import io, pathlib
D = pathlib.Path(__file__).resolve().parent if "__file__" in globals() else pathlib.Path("dreamforge-case/deck")

EXTRA = r'''function coverTop(s){ addChip(s,64,48,640,56,"IEEE DTU  |  DREAM FORGE 3.0  |  ROUND 2",C.primaryDeep,C.white,22);
  logoSlot(s,736,40,150,72,"IEEE DTU"); logoSlot(s,902,40,150,72,"Dream Forge"); logoSlot(s,1068,40,72,72,"DTU");
  addChip(s,1556,48,300,56,V.team.name,C.primaryDeep,C.white,22);
  addWireH(s,64,1856,140,C.ink,2.5); [64,512,960,1408,1856].forEach(cx=>addEllipse(s,cx-8,132,16,16,C.white,C.ink,2)); }
// Diverging heat cell for a change in value: losses in the petrol-red scale, gains in the teal scale.
function dvCell(v){ const a=Math.abs(v); const t=(v<0?"−":(v>0?"+":""))+Math.round(a);
  if(Math.round(a)===0) return {t:"0",f:C.white,tc:C.ink};
  if(v<0) return a>=100?{t,f:HR[4],tc:C.white}:(a>=20?{t,f:HR[3],tc:C.ink}:{t,f:HR[2],tc:C.ink});
  return a>=20?{t,f:HG[3],tc:C.ink}:{t,f:HG[2],tc:C.ink}; }
// A 3 px rule through the middle of a text node: the struck-through obvious answer.
function strike(p,t,color){ return addRect(p,t.x,t.y+t.height/2-1.5,t.width,3,color||C.alert); }
// Signed number with a true minus sign.
function sgn(v,dp){ return (v<0?"−":"")+Math.abs(v).toFixed(dp===undefined?1:dp); }
// ===== END SWIFTKART DECK EXTRAS ====='''

BAN = ('const BAN=["here\'s","let\'s","bottom line","delve","game-changer","unlock","it\'s not just","make no mistake","landscape","robust",'
       '"seamless","holistic","tapestry","paradigm","navigate","revolutioni","cutting-edge","leverage","empower","transformative","journey",'
       '"synergy","world-class","best-in-class","next-gen","reimagine","supercharge","harness","crucial","pivotal","furthermore","moreover",'
       '"in today\'s","ever-evolving","imagine","ecosystem","testament","elevate","what if","picture this","dive into","groundbreaking",'
       '"state-of-the-art","plethora","myriad","underscore","showcase","foster","bolster","spearhead","nuanced","intricate","meticulous",'
       '"realm","fast-paced","in conclusion","it is important to note","game changer"];')
ABSENT = ('const ABSENT=["BeyondTech","Beyond Tech","Eurogrip","Dream11","FanCode","Paytm","Liminal","Setu","PRAMAAN","Maudrik","SwasthyaGrid",'
          '"NEXORA","HarvestBox","Perennial","Verdict","Next Signal","Anuj","Gursimran","TODO","TBD","Lorem","Insert","xyz","undefined","NaN","Rs ","Rs."];')

def patch(read, write):
    def sub(rel, old, new):
        t = read(rel); assert t.count(old) == 1, (rel, old[:60], t.count(old)); write(rel, t.replace(old, new)); print("patched", rel, "|", old[:50])
    def line(rel, prefix, new):
        t = read(rel); ls = t.split("\n"); idx = [i for i, l in enumerate(ls) if l.lstrip().startswith(prefix)]
        assert len(idx) == 1, (rel, prefix, idx); ls[idx[0]] = new; write(rel, "\n".join(ls)); print("replaced line", rel, "|", prefix)
    sub("gen.py", "# ===== BEYONDTECH DECK GEN v2 =====", "# ===== SWIFTKART DECK GEN v1 =====")
    sub("gen.py", "NS = 11", "NS = 7")
    sub("gen.py", "X2 = (2, 3, 5)  # the redesigned slides", "X2 = (1, 2, 3, 4, 5, 6, 7)  # glyph metrics and rail helpers on every slide")
    sub("_extras.js", "// ===== BEYONDTECH DECK EXTRAS =====", "// ===== SWIFTKART DECK EXTRAS =====")
    line("_extras.js", "const RIBN=[", 'const RIBN=["THE SITUATION","STRATEGIC ALTERNATIVES","THE ₹1 CRORE DECISION","RECOMMENDATION AND ROADMAP"];')
    line("_extras.js", "const RIBAP=[", 'const RIBAP=["A1 CALCULATIONS","A2 ASSUMPTIONS","A3 SENSITIVITY","A4 EMISSIONS AND SOURCES"];')
    t = read("_extras.js"); END = "// ===== END BEYONDTECH DECK EXTRAS ====="
    assert t.count("function coverTop(s){") == 1 and t.count(END) == 1
    a = t.index("function coverTop(s){"); b = t.index(END) + len(END); write("_extras.js", t[:a] + EXTRA + t[b:]); print("replaced coverTop, added dvCell, strike, sgn")
    line("_sweeps.js", "const BAN=[", BAN)
    line("_sweeps.js", "const ABSENT=[", ABSENT)
    print("patch_tooling done")

if __name__ == "__main__":
    def rd(rel): return io.open(D / rel, encoding="utf-8").read().replace("\r", "")
    def wr(rel, t): io.open(D / rel, "w", encoding="utf-8", newline="\n").write(t)
    patch(rd, wr)
