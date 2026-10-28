"""Render the CaseQuest research Markdown as a readable PDF with linked citations."""
from __future__ import annotations

import html
import re
from pathlib import Path

import fitz
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable, KeepTogether, LongTable, PageBreak, Paragraph, SimpleDocTemplate,
    Spacer, TableStyle,
)

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "casequest-research.md"
OUT = ROOT / "casequest-research.pdf"

pdfmetrics.registerFont(TTFont("ArialCase", "C:/Windows/Fonts/arial.ttf"))
pdfmetrics.registerFont(TTFont("ArialCaseBold", "C:/Windows/Fonts/arialbd.ttf"))
pdfmetrics.registerFontFamily("ArialCase", normal="ArialCase", bold="ArialCaseBold")
styles = getSampleStyleSheet()
sty = {
    "title": ParagraphStyle("TitleCase", fontName="ArialCaseBold", fontSize=22, leading=27,
                            textColor=colors.HexColor("#0B2233"), spaceAfter=17),
    "h2": ParagraphStyle("H2Case", fontName="ArialCaseBold", fontSize=13, leading=17,
                         textColor=colors.HexColor("#174B6B"), spaceBefore=16, spaceAfter=7),
    "body": ParagraphStyle("BodyCase", fontName="ArialCase", fontSize=9.3, leading=13.7,
                           textColor=colors.HexColor("#0A0A0A"), spaceAfter=8),
    "small": ParagraphStyle("SmallCase", fontName="ArialCase", fontSize=7.2, leading=10,
                            textColor=colors.HexColor("#0A0A0A")),
    "head": ParagraphStyle("TableHeadCase", fontName="ArialCaseBold", fontSize=7.2, leading=10,
                           textColor=colors.white),
}

def inline(s: str) -> str:
    s = html.escape(s.strip())
    s = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)",
               lambda m: f'<link href="{m.group(2)}" color="#174B6B">{m.group(1)}</link>', s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", s)
    s = re.sub(r"`([^`]+)`", r"<font face='ArialCase'>\1</font>", s)
    return s

def footer(canvas, doc):
    canvas.saveState()
    w, _ = A4
    canvas.setStrokeColor(colors.HexColor("#F5C518"))
    canvas.line(42, 39, w - 42, 39)
    canvas.setFont("ArialCase", 7)
    canvas.setFillColor(colors.HexColor("#174B6B"))
    canvas.drawString(42, 28, "CASEQUEST | TEAM IDEAFORGE | RESEARCH BRIEF")
    canvas.drawRightString(w - 42, 28, str(doc.page))
    canvas.restoreState()

def build():
    lines = SRC.read_text(encoding="utf-8").splitlines()
    story = []
    para = []
    table = []

    def flush_para():
        nonlocal para
        if para:
            story.append(Paragraph(inline(" ".join(para)), sty["body"]))
            para = []

    def flush_table():
        nonlocal table
        if not table:
            return
        rows = []
        for i, row in enumerate(table):
            cells = [x.strip() for x in row.strip().strip("|").split("|")]
            if i == 1 and all(re.fullmatch(r":?-{3,}:?", x) for x in cells):
                continue
            rows.append([Paragraph(inline(x), sty["head" if i == 0 else "small"]) for x in cells])
        if rows:
            n = max(len(r) for r in rows)
            rows = [r + [Paragraph("", sty["small"])] * (n-len(r)) for r in rows]
            width = A4[0] - 84
            t = LongTable(rows, colWidths=[width/n] * n, repeatRows=1, hAlign="LEFT")
            t.setStyle(TableStyle([
                ("BACKGROUND", (0,0), (-1,0), colors.HexColor("#174B6B")),
                ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, colors.HexColor("#F5F5F5")]),
                ("GRID", (0,0), (-1,-1), 0.3, colors.HexColor("#0A0A0A")),
                ("VALIGN", (0,0), (-1,-1), "TOP"),
                ("LEFTPADDING", (0,0), (-1,-1), 5),
                ("RIGHTPADDING", (0,0), (-1,-1), 5),
                ("TOPPADDING", (0,0), (-1,-1), 5),
                ("BOTTOMPADDING", (0,0), (-1,-1), 5),
            ]))
            story.extend([t, Spacer(1, 8)])
        table = []

    for line in lines:
        if line.startswith("|"):
            flush_para()
            table.append(line)
            continue
        flush_table()
        if not line.strip():
            flush_para()
            continue
        if line.startswith("# "):
            flush_para()
            story.append(Paragraph(inline(line[2:]), sty["title"]))
        elif line.startswith("## "):
            flush_para()
            story.append(Paragraph(inline(line[3:]), sty["h2"]))
        elif line.startswith("### "):
            flush_para()
            story.append(Paragraph(inline(line[4:]), sty["h2"]))
        elif line.startswith("- "):
            flush_para()
            story.append(Paragraph("&#8226; " + inline(line[2:]), sty["body"]))
        else:
            para.append(line)
    flush_para()
    flush_table()
    doc = SimpleDocTemplate(str(OUT), pagesize=A4, leftMargin=42, rightMargin=42,
                            topMargin=44, bottomMargin=48, title="CaseQuest Research Brief",
                            author="Team IdeaForge")
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    check = fitz.open(OUT)
    assert check.page_count > 5
    assert all(p.get_text().strip() for p in check)
    assert "CaseQuest" in check[0].get_text() or "small-parcel" in check[0].get_text()
    print(f"{OUT} | {check.page_count} pages")

if __name__ == "__main__":
    build()
