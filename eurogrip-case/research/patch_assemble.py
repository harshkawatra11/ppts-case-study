"""One-time patch of the copied BeyondTech research assembler for the Eurogrip research document.
Every old string must occur the asserted number of times. Run once from eurogrip-case/research/."""
import io, pathlib

R = pathlib.Path(__file__).resolve().parent


def rd(): return io.open(R / "assemble.py", encoding="utf-8").read().replace("\r", "")
def wr(t): io.open(R / "assemble.py", "w", encoding="utf-8", newline="\n").write(t)


def sub(old, new, n=1):
    t = rd(); c = t.count(old)
    assert c == n, (old[:70], c, n)
    wr(t.replace(old, new))
    print("patched | n=%d |" % n, old[:60])


OLD_HEADER = '''HEADER = """# BeyondTech: From a DTU Habit to a Tier-1 System

**A go-to-market plan to deepen BeyondTech's penetration at DTU and launch at four new Tier-1 campuses: BITS Pilani, NIT Tiruchirappalli, PEC Chandigarh and COEP Technological University, Pune**

Team: Harsh Kawatra and Anuj, Delhi Technological University, Team IdeaForge

Prepared for: BeyondTech x DTU Consulting Group Case Competition 2026

---

"""'''

NEW_HEADER = '''HEADER = """# Eurogrip: Four Cases, Solved

**Brand perception across three rider segments, an EV-ready two-wheeler tyre, tractor-tyre share at home, and a mechanic advocacy programme for the domestic two-wheeler market**

Team: Harsh Kawatra and Anuj Gambhir, Delhi Technological University, Team IdeaForge

Prepared for: Eurogrip x Unstop Collaboration, Case Studies 1 to 4 (deck submitted for Case Study 4)

---

"""'''

OLD_BAN = '''BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just",
       "make no mistake", "landscape", "robust", "seamless", "holistic", "tapestry", "paradigm",
       "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower",
       "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen",
       "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore", "moreover",
       "in today's", "ever-evolving", "imagine if", "testament", "realm", "fast-paced"]'''

NEW_BAN = '''BAN = ["here's", "let's", "bottom line", "delve", "game-changer", "unlock", "it's not just",
       "make no mistake", "landscape", "robust", "seamless", "holistic", "tapestry", "paradigm",
       "navigate the", "revolutionis", "revolutioniz", "cutting-edge", "leverage", "empower",
       "transformative", "journey", "synergy", "world-class", "best-in-class", "next-gen",
       "reimagine", "supercharge", "harness", "crucial", "pivotal", "furthermore", "moreover",
       "in today's", "ever-evolving", "imagine", "testament", "realm", "fast-paced", "what if",
       "picture this", "dive into", "groundbreaking", "state-of-the-art", "plethora", "myriad",
       "underscore", "showcase", "foster", "bolster", "spearhead", "nuanced", "intricate",
       "meticulous", "elevate", "in conclusion", "it is important to note", "ecosystem"]'''

sub(OLD_HEADER, NEW_HEADER)
sub(OLD_BAN, NEW_BAN)
sub("MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 45000, 110, 26",
    "MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 80000, 180, 31")

OLD_APPX = '''    # ---- Appendix B: Model tables ----
    app_b = demote(rd(BT / "model" / "model_tables.md"))

    # ---- Appendix C: College dataset (the full scorecard CSV, compact blocks) ----
    app_c = ("The full 32-row college scorecard dataset. Each college lists its raw C1 to C7 values, "
             "sources and notes exactly as gathered by the regional scorers and refined by the Gate G2 "
             "targeted-rescue pass. Scored (1 to 5) values and Fit scores are in Appendix B, table T8.\\n\\n"
             + csv_to_compact_blocks(R / "data" / "college_scorecard.csv", "college"))

    # ---- Appendix D: Society and competitor datasets ----
    app_d = ("### D.1 DTU societies (`societies.csv`, 16 of a 30-row target, flagged honestly in "
              "doc section 10)\\n\\n"
              + csv_to_table(R / "data" / "societies.csv",
                              ["society", "type", "what_it_does", "flagship_events",
                               "instagram_followers", "linkedin_followers", "confidence"])
              + "\\n\\n### D.2 Competitors and substitutes (`competitors.csv`, 29 rows)\\n\\n"
              + csv_to_table(R / "data" / "competitors.csv",
                              ["name", "type", "offer", "duration_weeks", "price_inr",
                               "guarantee_claim", "ambassador_programme"]))

    # ---- Appendix E: Glossary (written by hand by W-F) ----
    app_e = re.sub(r"^## Appendix E\\.? Glossary\\s*\\n", "", rd(R / "parts" / "appendix-E-glossary.md").strip(), count=1)

    # ---- Appendix F: Data conflicts and rulings ----
    app_f = rd(R / "raw" / "conflicts.md").strip()'''

NEW_APPX = '''    # ---- Appendix B: Model tables ----
    app_b = demote(rd(BT / "model" / "model_tables.md"))

    # ---- Appendix C: Research datasets (every research/data/*.csv, dynamic columns) ----
    data_files = sorted((R / "data").glob("*.csv"))
    app_c_parts = []
    for i, p in enumerate(data_files, 1):
        with io.open(p, encoding="utf-8-sig", newline="") as f:
            cols = next(csv.reader(f))
        app_c_parts.append("### C.%d `%s`\\n\\n" % (i, p.name) + csv_to_table(p, cols))
    app_c = "\\n\\n".join(app_c_parts)

    # ---- Appendix D: Assumptions register (dynamic columns, from model/inputs/assumptions.csv) ----
    asm_path = BT / "model" / "inputs" / "assumptions.csv"
    with io.open(asm_path, encoding="utf-8-sig", newline="") as f:
        acols = next(csv.reader(f))
    app_d = csv_to_table(asm_path, acols)

    # ---- Appendix E: Glossary (written by hand by writer F) ----
    app_e = re.sub(r"^## Appendix E\\.? Glossary\\s*\\n", "", rd(R / "parts" / "appendix-E-glossary.md").strip(), count=1)

    # ---- Appendix F: Data conflicts and rulings ----
    app_f = rd(R / "raw" / "conflicts.md").strip()'''

sub(OLD_APPX, NEW_APPX)

sub('"Appendix A: Bibliography", "Appendix B: Model tables", "Appendix C: College dataset",\n        "Appendix D: Society and competitor datasets", "Appendix E: Glossary",',
    '"Appendix A: Bibliography", "Appendix B: Model tables", "Appendix C: Research datasets",\n        "Appendix D: Assumptions register", "Appendix E: Glossary",')

OLD_DOC = '''    doc = (
        HEADER + body
        + "\\n\\n## Appendix A: Bibliography\\n\\nSources were opened and checked on 10 October 2026. "
          "Only sources cited in the text are listed; the full 421-source register (including sources "
          "gathered but not ultimately cited) is `research/raw/sources.md`.\\n\\n" + app_a
        + "\\n\\n## Appendix B: Model tables\\n\\n" + app_b
        + "\\n\\n## Appendix C: College dataset\\n\\n" + app_c
        + "\\n\\n## Appendix D: Society and competitor datasets\\n\\n" + app_d
        + "\\n\\n## Appendix E: Glossary\\n\\n" + app_e
        + "\\n\\n## Appendix F: Data conflicts and rulings\\n\\n" + app_f + "\\n"
    )'''

NEW_DOC = '''    doc = (
        HEADER + body
        + "\\n\\n## Appendix A: Bibliography\\n\\nSources were opened and checked on 14 October 2026. "
          "Only sources cited in the text are listed; the full %d-source register (including sources "
          "gathered but not ultimately cited) is `research/raw/sources.md`.\\n\\n" % len(reg) + app_a
        + "\\n\\n## Appendix B: Model tables\\n\\n" + app_b
        + "\\n\\n## Appendix C: Research datasets\\n\\n" + app_c
        + "\\n\\n## Appendix D: Assumptions register\\n\\n" + app_d
        + "\\n\\n## Appendix E: Glossary\\n\\n" + app_e
        + "\\n\\n## Appendix F: Data conflicts and rulings\\n\\n" + app_f + "\\n"
    )'''

sub(OLD_DOC, NEW_DOC)

sub('io.open(R / "beyondtech-gtm-research.md", "w", encoding="utf-8", newline="\\n").write(doc)',
    'io.open(R / "eurogrip-research.md", "w", encoding="utf-8", newline="\\n").write(doc)')

OLD_PROSE = '''    text = doc.split("\\n---\\n", 1)[1]
    # Voice checks scan only the team's own authored prose: the six writer parts plus the
    # hand-written glossary. Appendix A quotes real external source titles verbatim (never rewritten
    # to dodge house style). Appendices B, C, D are code-generated from the model and the CSVs,
    # already clean by construction. Appendix F (conflicts.md) is the lead's own prose and is checked
    # too, since the lead follows the same style rules as the writers.
    prose = body + "\\n" + app_e + "\\n" + app_f
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M)
    res = dict(
        words=len(doc.split()),
        tables=len(re.findall(r"^\\|[ :|-]+\\|\\s*$", doc, re.M)),
        dashes=len(re.findall("[—–]", prose)),
        exclamations=prose.count("!"),
        question_headings=[h for h in heads if h.strip().endswith("?")],
        banned={b: len(re.findall(r"\\b" + re.escape(b), prose, re.I)) for b in BAN
                if re.search(r"\\b" + re.escape(b), prose, re.I)},
        answers=len(re.findall(r"^\\*\\*Answer\\.\\*\\*", doc, re.M)),
        cited_S=len(cited), missing_S=missing,
        dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
    )
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0
          and res["exclamations"] == 0 and not res["question_headings"] and not res["banned"]
          and res["answers"] >= MIN_ANSWERS and not res["missing_S"] and not res["dup_headings"])
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL")
    sys.exit(0 if ok else 1)'''

NEW_PROSE = '''    text = doc.split("\\n---\\n", 1)[1]
    # Voice checks scan only the team's own authored prose: the writer parts plus the hand-written
    # glossary and the conflicts log. Appendix A quotes real external source titles verbatim (never
    # rewritten to dodge house style). Appendices B, C, D are code-generated from the model and the
    # CSVs, already clean by construction. ALLOW holds the case's own allowed phrases (PLAN.md section
    # 0.5) so they are not flagged as banned words before the check runs.
    ALLOW = ["influencer advocacy ecosystem", "advocacy ecosystem", "ownership journey", "customer journey",
             "rider journey", "replacement journey", "next-gen tyre technology", "next-generation tyre",
             "competitive landscape"]
    raw_prose = body + "\\n" + app_e + "\\n" + app_f
    prose = raw_prose
    for w in ALLOW:
        prose = re.sub(re.escape(w), " ", prose, flags=re.I)
    heads = re.findall(r"^#{2,3} (.+)$", doc, re.M)
    PRIMARY_HOSTS = re.compile(r"nseindia|bseindia|tvssrichakra|eurogriptyres|mospi|morth|parivahan|vahan|"
                                r"siam\\.in|atmaindia|bis\\.gov|unece|ecfr|nhtsa|pib\\.gov|cbic|rubberboard|"
                                r"tmaindia|agricoop|agcensus|niti\\.gov|crisil|icra|careedge|indiaratings|"
                                r"castrol\\.com|exxonmobil|amararaja|pidilite|asianpaints|sebi\\.gov|mca\\.gov", re.I)
    cited_urls = [reg[s][1] for s in cited if s in reg]
    primary_n = sum(1 for u in cited_urls if PRIMARY_HOSTS.search(u))
    primary_share = (primary_n / len(cited_urls)) if cited_urls else 0.0
    res = dict(
        words=len(doc.split()),
        tables=len(re.findall(r"^\\|[ :|-]+\\|\\s*$", doc, re.M)),
        dashes=len(re.findall("[—–]", prose)),
        exclamations=prose.count("!"),
        question_headings=[h for h in heads if h.strip().endswith("?")],
        banned={b: len(re.findall(r"\\b" + re.escape(b), prose, re.I)) for b in BAN
                if re.search(r"\\b" + re.escape(b), prose, re.I)},
        answers=len(re.findall(r"^\\*\\*Answer\\.\\*\\*", doc, re.M)),
        cited_S=len(cited), missing_S=missing,
        dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
        placeholders=len(re.findall(r"<[a-z][^>]{0,20}>", body)),
        primary_share=round(primary_share, 3),
    )
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0
          and res["exclamations"] == 0 and not res["question_headings"] and not res["banned"]
          and res["answers"] >= MIN_ANSWERS and not res["missing_S"] and not res["dup_headings"]
          and res["placeholders"] == 0 and res["primary_share"] >= 0.45)
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL")
    sys.exit(0 if ok else 1)'''

sub(OLD_PROSE, NEW_PROSE)

OLD_PDF = '''def pdf():
    src = rd(BT.parent / "iim-lucknow-pivot" / "research" / "build_pdf.py")

    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:60], src.count(a))
        src = src.replace(a, b)

    rep("dream11-pivot-research", "beyondtech-gtm-research", 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge",
        "BeyondTech: From a DTU Habit to a Tier-1 System  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}",
        "else 'BeyondTech: From a DTU Habit to a Tier-1 System'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable",
        "BeyondTech x DTU Consulting Group Case Competition 2026  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;",
        "--p:#1F4BD8; --pd:#0B1F66; --a:#F5C518; --tint:#C7D7FE;", 1)
    rep("color: #C4161C; }", "color: #1F4BD8; }", 1)
    rep('<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, '
        'Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi',
        '<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Anuj, '
        'Delhi Technological University', 1)
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")],
                        capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:])
    p = R / "beyondtech-gtm-research.pdf"
    print("PDF", p.exists() and p.stat().st_size)'''

NEW_PDF = '''def pdf():
    src = rd(BT.parent / "iim-lucknow-pivot" / "research" / "build_pdf.py")

    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:60], src.count(a))
        src = src.replace(a, b)

    rep("dream11-pivot-research", "eurogrip-research", 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge",
        "Eurogrip: Four Cases, Solved  |  Team IdeaForge", 1)
    rep("else 'Dream11: Life After the Ban'}",
        "else 'Eurogrip: Four Cases, Solved'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable",
        "Eurogrip x Unstop Collaboration  |  Case Studies 1 to 4  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;",
        "--p:#184898; --pd:#111111; --a:#FFC20E; --tint:#DCE4F0;", 1)
    rep("color: #C4161C; }", "color: #184898; }", 1)
    rep('<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, '
        'Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi',
        '<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University (Team Leader)<br>Anuj Gambhir, '
        'Delhi Technological University', 1)
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\\n").write(src)
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")],
                        capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:])
    p = R / "eurogrip-research.pdf"
    print("PDF", p.exists() and p.stat().st_size)'''

sub(OLD_PDF, NEW_PDF)
print("patch_assemble done")
