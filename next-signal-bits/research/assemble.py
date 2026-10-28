# ===== NEXT SIGNAL ASSEMBLE v1 =====
"""Assemble next-signal-research.md from the six writer parts and generated appendices, then run the
acceptance checks (PLAN.md section 4.6). Adapted from beyondtech-dcg/research/assemble.py, itself adapted
from verdict-mnc/research/assemble.py.
  python -X utf8 next-signal-bits/research/assemble.py md     assemble and check
  python -X utf8 next-signal-bits/research/assemble.py pdf    build build_pdf.py and render the PDF
"""
import csv
import hashlib
import io
import json
import pathlib
import re
import sys

R = pathlib.Path(__file__).resolve().parent
NS = R.parent
ENGINE = pathlib.Path(r"C:\Users\harsh\Desktop\HARSH\WEB-DEV-PROJECTS\next-signal bits\engine")

HEADER = """# Next Signal: An Autonomous Research Agent for Indian Pharma and Healthcare

**How a public-data agent finds, tests and proves a non-obvious financial discovery for any NIFTY 50 Track D company**

Team: Harsh Kawatra, Gursimran Kaur, Team IdeaForge

Prepared for: Finding the Next Signal, ATMOS 2026, BITS Pilani Hyderabad Campus (Track D: Pharma and Healthcare)

---

"""

BAN = [
    "delve", "tapestry", "game-changer", "revolutionis", "revolutioniz", "cutting-edge", "seamless",
    "unlock", "empower", "in today's", "it's important to note", "in conclusion", "holistic",
    "synergy", "paradigm", "imagine", "what if", "let's", "groundbreaking", "state-of-the-art",
    "supercharge", "elevate", "journey", "world-class", "next-gen", "buy rating", "sell rating",
    "target price", "undervalued", "overvalued", "investors should", "picture this",
    "plethora", "myriad", "underscore", "showcase", "foster", "bolster", "spearhead", "nuanced",
    "intricate", "meticulous", "comprehensive suite",
]
# Whole-word-only entries: a bare substring match on these would false-positive on legitimate words
# that happen to start the same way ("dive" inside "divergence"/"diversify"/"divestment"; "leverage"
# used as a financial noun, which the style rule explicitly allows, only the verb usage is banned).
BAN_WHOLE_WORD = ["dive"]
BAN_PHRASES = ["leverage the", "leveraging the", "leverage our", "leverage its", "leverage their", "to leverage"]
# "what if" is allowed once, inside the literal reported-speech phrase the Q&A section (25) uses.
BAN_ALLOW_ONE = {"what if": 'The panel may ask: "what if'}

MIN_WORDS, MIN_TABLES, MIN_ANSWERS = 60000, 130, 20


def rd(p):
    return io.open(p, encoding="utf-8").read().replace("\r", "")


def strip_writer_footer(text: str) -> str:
    """Per WRITER-BRIEF.md, every part file ends with a one-line self-check summary and a STATUS:
    PASS/FAIL line, explicitly 'not part of any H2'. That footer is build-process metadata, not
    reader-facing document content (and its self-check numbers describe the part file in isolation,
    not the assembled whole), so it is trimmed before assembly."""
    paras = text.split("\n\n")
    while paras and "STATUS:" in paras[-1]:
        paras.pop()
    text = "\n\n".join(paras).strip()
    # Writer A's file opens with a stray "# Part A" H1 before its first H2; the other five writers did
    # not add one. Strip any leading H1 line so the assembled document carries exactly one H1 (HEADER's
    # own title), regardless of which writers added their own.
    return re.sub(r"^# .+\n+", "", text, count=1)


def demote(t, levels=1):
    for _ in range(levels):
        t = re.sub(r"^#{1,6} .*\n", "", t, count=1)
    return t.strip()


def csv_to_table(path, cols, cellmax=160):
    rows = []
    with io.open(path, encoding="utf-8-sig", newline="") as f:
        for row in csv.DictReader(f):
            rows.append([((row.get(c) or "").strip().replace("\n", " ")[:cellmax]) for c in cols])
    out = ["| " + " | ".join(cols) + " |", "|" + "|".join(["---"] * len(cols)) + "|"]
    for r in rows:
        out.append("| " + " | ".join(c.replace("|", "/") or "NOT FOUND" for c in r) + " |")
    return "\n".join(out)


def build_appendix_b():
    """Appendix B: the metric library, generated directly from the engine's live registry so this
    appendix can never drift from the real code (PLAN.md section 4.4's appendix list)."""
    sys.path.insert(0, str(ENGINE))
    from next_signal.metrics.library import REGISTRY  # noqa: E402

    rows = ["| Metric ID | Name | Formula | Unit | Applies to |", "|---|---|---|---|---|"]
    for metric_id, m in sorted(REGISTRY.items()):
        rows.append(
            "| `%s` | %s | %s | %s | %s |"
            % (metric_id, m.name, m.formula_text.replace("|", "/"), m.unit, m.applies_to)
        )
    note = (
        "The engine's metric registry holds %d formulas as of this assembly (`next_signal/metrics/library.py`). "
        "The research deliverable's design target was 44 or more; the registry will grow as further metric "
        "groups (notably the Beneish/Sloan earnings-quality group and the hospital-specific group) are completed. "
        "Every metric function returns `None` on missing inputs rather than imputing a value, per the data "
        "integrity rule in PLAN.md section 5.\n\n" % len(REGISTRY)
    )
    return note + "\n".join(rows)


def build_appendix_c():
    cols = [
        "source_id", "name", "origin_class", "admiralty_reliability", "access",
        "point_in_time_field", "track_d_use", "verified_on",
    ]
    note = (
        "The full catalogue (all columns, including endpoint patterns and verification notes) is "
        "`research/raw/source_catalogue.csv`. This table shows the columns most relevant to a reader "
        "judging reliability and point-in-time safety.\n\n"
    )
    return note + csv_to_table(R / "raw" / "source_catalogue.csv", cols)


def build_appendix_d():
    p = R / "parts" / "appendix-D-assumptions.md"
    return demote(rd(p).strip()) if p.exists() else "No assumptions were registered."


def build_appendix_e():
    p = R / "parts" / "appendix-E-glossary.md"
    return demote(rd(p).strip()) if p.exists() else "No glossary was written."


def build_appendix_f():
    return demote(rd(R / "raw" / "conflicts.md").strip())


def build_appendix_g():
    """Appendix G: evaluation tables, generated from the eval harness output once it exists
    (PLAN.md section 4.4 / 5.14.6). The harness (`engine/next_signal/eval/*`) and the orchestrator's
    live source wiring are both still in progress as of this assembly; this appendix states that
    honestly rather than fabricating a table."""
    return (
        "Not yet generated. The evaluation harness (`engine/next_signal/eval/harness.py`, "
        "`timetravel.py`, `ablation.py`, `summarize.py`) and `next-signal-bits/model/collect_outputs.py` "
        "have not been run yet: all six pipeline stages exist and pass 254 unit tests as of this "
        "assembly, but most live source clients and the LLM router are not yet wired through the "
        "orchestrator, so a harness run today would mostly produce honest empty results rather than "
        "the kill-rate, anchor-precision and runtime statistics this appendix is meant to hold. This "
        "appendix will be regenerated from real `model/model_outputs.json`/`model_tables.md` data "
        "before the Round 1 submission, per the two-pass rule applied to research document sections "
        "19 and 21."
    )


def build_bibliography(body: str):
    reg = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d{3}[a-z]?) \|(.+?)\|(.+?)\|(.+?)\|(.+?)\|$", ln)
        if m:
            reg[m.group(1)] = (m.group(2).strip(), m.group(3).strip())

    lane_files = sorted((R / "raw").glob("R-*.md"))
    rid_to_sids = {}
    for lf in lane_files:
        for ln in rd(lf).splitlines():
            m = re.match(r"^\|\s*([A-Z]{1,3}\d{2,3})\s*\|.*?\|\s*([^|]+?)\s*\|", ln)
            if not m:
                continue
            rid, sid_field = m.group(1), m.group(2)
            sids = re.findall(r"S\d{3}[a-z]?", sid_field)
            if sids:
                rid_to_sids.setdefault(rid, set()).update(sids)

    direct_s = {
        "S" + n for grp in re.findall(r"\[([^\]]*S\d{3}[a-z]?[^\]]*)\]", body)
        for n in re.findall(r"S(\d{3}[a-z]?)", grp)
    }
    cited_rids = sorted(set(re.findall(r"\b([A-Z]{1,3}\d{2,3})\b", body)) & set(rid_to_sids))
    resolved_s = set(direct_s)
    for rid in cited_rids:
        resolved_s |= rid_to_sids[rid]
    cited = sorted(resolved_s, key=lambda s: (int(re.match(r"S(\d+)", s).group(1)), s))

    missing = [c for c in cited if c not in reg]
    rows = ["| S-ID | Source | Available at | Cited via |", "|---|---|---|---|"]
    rid_by_sid = {}
    for rid, sids in rid_to_sids.items():
        if rid in cited_rids:
            for sid in sids:
                rid_by_sid.setdefault(sid, []).append(rid)
    for s in cited:
        if s in reg:
            vias = sorted(rid_by_sid.get(s, []))
            via = ", ".join(vias[:4]) or "direct citation"
            if len(vias) > 4:
                via += ", +%d more" % (len(vias) - 4)
            rows.append("| %s | %s | %s | %s |" % (s, reg[s][0], reg[s][1], via))
    text = (
        "This bibliography resolves every source actually cited in the document: both direct `[S###]` "
        "tags and, far more commonly, every lane-file R-ID tag (`[RB07]`, `[RDS14]`, etc.), traced "
        "through that lane's own Facts table to the Source ID(s) it rests on. %d of %d resolved sources "
        "are listed below; see `research/raw/sources.md` for the full register.\n\n"
        % (len([s for s in cited if s in reg]), len(cited))
        + "\n".join(rows)
    )
    return text, missing, cited


def md():
    parts = [strip_writer_footer(rd(R / "parts" / ("part-%s.md" % x))) for x in "ABCDEF"]
    body = "\n\n".join(parts)

    app_a, missing_s, cited = build_bibliography(body)
    app_b = build_appendix_b()
    app_c = build_appendix_c()
    app_d = build_appendix_d()
    app_e = build_appendix_e()
    app_f = build_appendix_f()
    app_g = build_appendix_g()

    toc_entries = re.findall(r"^## (.+)$", body, re.M) + [
        "Appendix A: Bibliography", "Appendix B: Metric library", "Appendix C: Source catalogue",
        "Appendix D: Assumptions register", "Appendix E: Glossary and abbreviations",
        "Appendix F: Data conflicts and rulings", "Appendix G: Evaluation tables",
    ]
    toc = "## Contents\n\n" + "\n".join("- %s" % t for t in toc_entries) + "\n\n"
    body = body.replace("## 0. Document control", toc + "## 0. Document control", 1)

    doc = (
        HEADER + body
        + "\n\n## Appendix A: Bibliography\n\n" + app_a
        + "\n\n## Appendix B: Metric library\n\n" + app_b
        + "\n\n## Appendix C: Source catalogue\n\n" + app_c
        + "\n\n## Appendix D: Assumptions register\n\n" + app_d
        + "\n\n## Appendix E: Glossary and abbreviations\n\n" + app_e
        + "\n\n## Appendix F: Data conflicts and rulings\n\n" + app_f
        + "\n\n## Appendix G: Evaluation tables\n\n" + app_g + "\n"
    )
    io.open(R / "next-signal-research.md", "w", encoding="utf-8", newline="\n").write(doc)

    text = doc.split("\n---\n", 1)[1]
    # Voice checks scan only authored prose: the six writer parts plus the hand-written glossary and
    # the lead's own conflicts log. Appendix A quotes real external source titles verbatim (never
    # rewritten to dodge house style). Appendices B, C, G are code-generated, already clean by
    # construction. HTML comments (`<!-- GAP: ... -->`) are the writer brief's own convention for
    # flagging an unverified number inline; they are meta-annotation for the assembler/user, not
    # reader-facing prose, so they are stripped before the dash/exclamation/banned-word checks (a GAP
    # comment legitimately contains punctuation like "!" in normal sentences describing the gap).
    prose_raw = body + "\n" + app_d + "\n" + app_e + "\n" + app_f
    prose = re.sub(r"<!--.*?-->", "", prose_raw, flags=re.S)
    heads = re.findall(r"^## (.+)$", doc, re.M)

    banned = {}
    for b in BAN:
        hits = list(re.finditer(r"\b" + re.escape(b), prose, re.I))
        if b in BAN_ALLOW_ONE:
            hits = [h for h in hits if prose[h.start():h.start() + len(BAN_ALLOW_ONE[b])].lower()
                    != BAN_ALLOW_ONE[b].lower()]
        if hits:
            banned[b] = len(hits)
    for b in BAN_WHOLE_WORD:
        hits = re.findall(r"\b" + re.escape(b) + r"\b", prose, re.I)
        if hits:
            banned[b] = len(hits)
    for b in BAN_PHRASES:
        hits = re.findall(re.escape(b), prose, re.I)
        if hits:
            banned[b] = len(hits)

    placeholders = len(re.findall(r"\{\{EVAL:", doc))

    primary_hosts = re.compile(
        r"nseindia|bseindia|sec\.gov|fda\.gov|accessdata\.fda\.gov|cdsco|nppa|sebi\.gov|rbi\.org\.in|"
        r"mca\.gov|niftyindices|pib\.gov", re.I,
    )
    # Primary-source share is the quality signal that actually matters: what the document's own cited
    # claims rest on, not the full register (most of which is SNIPPET-grade secondary coverage gathered
    # opportunistically and never cited in the body). Measuring over the full register understated this
    # share by counting hundreds of uncited rows as if they were load-bearing (critique.md, issue 1).
    sid_to_url = {}
    for ln in rd(R / "raw" / "sources.md").splitlines():
        m = re.match(r"^\| (S\d{3}[a-z]?) \|(.+?)\|(.+?)\|(.+?)\|(.+?)\|$", ln)
        if m:
            sid_to_url[m.group(1)] = m.group(3).strip()  # group(3) is the URL cell, group(2) is the title
    cited_urls = [sid_to_url[s] for s in cited if s in sid_to_url]
    primary_count = sum(1 for u in cited_urls if primary_hosts.search(u))
    primary_share_cited = round(primary_count / max(1, len(cited_urls)), 3)
    reg_urls = list(sid_to_url.values())
    primary_share_register = round(
        sum(1 for u in reg_urls if primary_hosts.search(u)) / max(1, len(reg_urls)), 3
    )

    res = dict(
        words=len(doc.split()),
        tables=len(re.findall(r"^\|[ :|-]+\|\s*$", doc, re.M)),
        dashes=len(re.findall("[\u2014\u2013]", prose)),
        exclamations=prose.count("!"),
        question_headings=[h for h in heads if h.strip().endswith("?")],
        banned=banned,
        answers=len(re.findall(r"^\*\*Answer\.\*\*", doc, re.M)),
        cited_S=len(cited), missing_S=missing_s,
        dup_headings=sorted({h for h in heads if heads.count(h) > 1})[:10],
        placeholders=placeholders,
        primary_source_share_cited=primary_share_cited,
        primary_source_share_register=primary_share_register,
        register_rows=len(reg_urls),
    )
    print(json.dumps(res, indent=1, ensure_ascii=False))
    ok = (
        res["words"] >= MIN_WORDS and res["tables"] >= MIN_TABLES and res["dashes"] == 0
        and res["exclamations"] == 0 and not res["question_headings"] and not res["banned"]
        and res["answers"] >= MIN_ANSWERS and not res["missing_S"] and not res["dup_headings"]
    )
    # placeholders and primary_source_share are reported but do not gate pass/fail at this assembly:
    # placeholders are expected (sections 19 and 21 are pass-1 only, per the two-pass rule, until the
    # eval harness runs) and primary_source_share is a quality signal for the critique pass (touchpoint
    # T6), not a hard gate at this stage of the build.
    print("ASSEMBLY PASS" if ok else "ASSEMBLY FAIL")
    sys.exit(0 if ok else 1)


def pdf():
    src = rd(NS.parent / "iim-lucknow-pivot" / "research" / "build_pdf.py")

    def rep(a, b, n):
        nonlocal src
        assert src.count(a) == n, (a[:60], src.count(a))
        src = src.replace(a, b)

    rep("dream11-pivot-research", "next-signal-research", 4)
    rep("Dream11: Life After the Ban  |  Team IdeaForge",
        "Next Signal  |  Team IdeaForge  |  ATMOS 2026 Track D", 1)
    rep("else 'Dream11: Life After the Ban'}",
        "else 'Next Signal'}", 1)
    rep("IIM Lucknow  |  PIVOT '26  |  Round 1 research deliverable",
        "Finding the Next Signal  |  ATMOS 2026, BITS Pilani Hyderabad  |  Research deliverable", 1)
    rep("--p:#C4161C; --pd:#5E0A0E; --a:#F5C518; --tint:#FDE0E0;",
        "--p:#C8102E; --pd:#0B0B0C; --a:#C8102E; --tint:#FBE3E6;", 1)
    rep("color: #C4161C; }", "color: #C8102E; }", 1)
    rep('<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University<br>Gursimran Kaur, '
        'Guru Gobind Singh Indraprastha University<br>Dayita Arora, Ramjas College, University of Delhi',
        '<b>Team IdeaForge</b><br>Harsh Kawatra, Delhi Technological University (Team Leader)<br>'
        'Gursimran Kaur, '
        'Guru Gobind Singh Indraprastha University', 1)
    io.open(R / "build_pdf.py", "w", encoding="utf-8", newline="\n").write(src)
    import subprocess
    r = subprocess.run([sys.executable, "-X", "utf8", str(R / "build_pdf.py")],
                        capture_output=True, text=True, encoding="utf-8")
    print(r.stdout[-600:], r.stderr[-600:])
    p = R / "next-signal-research.pdf"
    print("PDF", p.exists() and p.stat().st_size)


if __name__ == "__main__":
    {"md": md, "pdf": pdf}[sys.argv[1]]()
