# MS-299 Interim Report: Refinement Pass (cover match + rewrite + audit)

## Context

First version is built (`ms-299/report.md`, `report.docx`, `report.pdf`, `stamped_1..6.jpg`).
User feedback: (1) cover page must match the sample (`Himanshu MS 299 2.pdf.pdf`) exactly in
fonts, sizes, logo placement and name placement; (2) no long paragraphs, write in short
standalone points separated by spacing only, no bullet glyphs; (3) consulting-grade,
humanized storytelling voice; (4) zero em dashes and zero AI-slop. Then audit and refine.
Stamped photos are approved and stay as they are.

Decision: "School Name: ..." and "Mentee Group: ..." use colons. The address line uses a
plain hyphen: "New Delhi - 110042, India" (user's call). That is the only dash-like
character in the document; the audit whitelists this exact line.

## Measured sample cover spec (A4, 595.5 x 842 pt, via PyMuPDF)

All Times New Roman, black.

| Element | Font | Size | Position |
|---|---|---|---|
| DELHI TECHNOLOGICAL UNIVERSITY | Bold | 22 | centered, top y=71 |
| Department of ... | Regular | 16 | centered, y=104 |
| New Delhi - 110042, India (plain hyphen) | Regular | 16 | centered, y=131 |
| DTU logo | image | 256 x 256 pt (3.55 in) | centered, y=161 to 417 |
| MS-299 | Bold | 18 | centered, y=438 |
| COMMUNITY ENGAGEMENT COURSE | Bold | 18 | centered, y=468 |
| Submitted By: / HARSH KAWATRA | Bold | 16 | left, x=72, y=527 / 554 |
| 25/EC/073 | Regular | 16 | left, x=72, y=582 |
| Submitted To: | Bold | 16 | right block, x=428, y=532 |
| Dr. Anukul Pandey | Regular | **19** | right block, x=408, y=564 |
| Course Coordinator (ECE) | Regular | 16 | right block, x=402, y=599 |
| School Name: + address (2 lines) | Bold label + Regular | 16 | left, x=72, y=636 |
| Mentee Group: Class XII A Students | Bold label + Regular | 16 | left, x=64, y=692 |

Body pages in sample: Times New Roman 12 body, bold headings (About Mentor 15, others 12).
We use Times New Roman 12 body, bold 14 headings, for consistency.

## Implementation

Rewrite scratchpad `build_docx.py` so a single Python content structure drives both
`report.md` and `report.docx` (no drift between them), then convert with LibreOffice
(`soffice --headless --convert-to pdf`, already proven working).

- **Cover**: Times New Roman everywhere (set `w:eastAsia`/`rFonts` too). Page margins
  1 in left/right like sample (x=72). Exact sizes above. Logo `image2.png` at width 3.55 in,
  centered. Submitted block = borderless 2-col table: left cell left-aligned, right cell
  centered on its column so lines sit at the measured x offsets. Paragraph `space_before`
  values tuned so y positions match; verify by extracting bboxes from our PDF and diffing
  against the table above (tolerance ~6 pt), iterate.
- School Name line: "Darshan Academy, Kirpal Bagh, Bhama Shah Road," / "Sant Kirpal
  Singh Marg, Delhi 110009" (two lines, mirrors sample's address format).
- **Body**: every point is its own short paragraph (1 to 2 sentences), `space_after` 10 pt,
  no List Bullet / List Number styles. Lead-in points use a bold phrase ending in a period,
  never a dash. Mentee names as plain spaced lines. Weekly table kept (sample has one),
  cells shortened, "Days 1 to 5" instead of ranges with dashes.

## Rewritten content (draft, final wording applied in build)

**About Mentor**
- Harsh Kawatra is a first-year student of Electronics and Communication Engineering at DTU.
- He qualified JEE Main in 2024 and 2025 and JEE Advanced in 2025, so the exam conversations
  in these sessions came from someone who sat the papers recently.
- Outside class he has competed in national AI hackathons, including a top-five finish at
  Google's GDG Build with AI, and cleared three rounds of the Amazon ML Summer School.
- That gave the class a view of life after school from someone only one year into it.

**About Mentee**
- Class XII A at Darshan Academy, Delhi: about twenty-five students across Science,
  Commerce and Humanities.
- The full class attended the introductory sessions. Over the following weeks the mentoring
  concentrated on seven students who attended consistently and came back with their own
  questions: Kashvi Kapoor, Anurag Anand, Noorpreet Kaur, Shubh Singh Rajput, Saksham
  Khanna, Diya Chauhan, Khushi Chawla (one per line).

**Mentee's Needs and Challenges** (bold lead-in + 1 to 2 sentences each)
- Stream chosen, destination unclear. / AI anxiety without specifics. / Exam preparation
  without a personal plan. / No view of opportunities beyond admission. / Questions held
  back for months.

**Focus Area**: one framing line, then four spaced points (AI literacy; stream-specific
career maps; entrance exam strategy built on time management; early-college habits like
internships, hackathons, case competitions), closing line: every core student leaves with
one concrete next step.

**Planned Weekly Approach**: "Fifteen sessions of about two hours each, thirty hours in
total, in three weekly blocks." + table (Week 1 AI literacy, Week 2 stream deep dives,
Week 3 exam strategy and early-college plan, Subsequent Sessions follow-ups).

**Geo-Tagged Photographs**: same six stamped images, captions trimmed, "Class XII A".

**Early Observations**: six short spaced paragraphs, each an observation then what it
changed: uneven clarity despite a shared exam calendar; AI worry split by stream; quiet
students opened up in the small group (why the core group formed); specifics beat
encouragement; family expectations, I laid out options and left the decision with them;
attention dropped on logistics, so the second half leads with cases.

## Audit (run on final md + extracted PDF text)

Script fails the build if it finds any of:
- Characters: em dash (U+2014), en dash (U+2013), " - " used as a separator (except the
  whitelisted "New Delhi - 110042, India" cover line).
- Slop list: delve, navigate, landscape, journey, foster, empower, tapestry, pivotal,
  crucial, seamless, robust, holistic, "not just", "it's worth noting", "in today's",
  "game-changer", "unlock", "embark", "testament", "rapidly evolving", "walking into".
- Also manually reread for: "not X but Y" constructions, triplet cadence, rhetorical
  questions, and any reference to the proposal document.

## Verification

1. Render `report.pdf` page 1 next to the sample cover (PyMuPDF at 100 dpi) and compare
   visually; extract span fonts/sizes/bboxes and diff against the spec table.
2. Render all pages; confirm no bullets, spaced short paragraphs, photos intact.
3. Run the audit script on `report.md` and PDF text: zero hits.
4. Confirm all seven names, "Dr. Anukul Pandey", "25/EC/073" spelled correctly.
5. Deliver `report.md`, `report.docx`, `report.pdf` in `ms-299/`; delete temp renders.
