# Writer brief (PLAN.md §4.4)

Read this before writing. It applies to every writer, every section.

## Rules

- Exact H2 titles from PLAN.md §4.4's outline table. Each H2 opens with `**Answer.** <2 to 4 sentences:
  the finding with numbers>`. Each H2 ends with `### What this section establishes, and what it does not`
  (3 to 6 bullets).
- No browsing. Use only facts in `research/raw/*` (cite as `[RDS14]`, `[RDC07]`, `[RDD21]`, `[RDA12]`,
  `[RDM09]`, `[RDT33]`, `[RA19]`, `[RB22]`, `[RC41]`, `[RE05]`, `[RF17]`, `[RG28]` or `[S0nn]`), and
  arithmetic on cited numbers (show the arithmetic inline once, e.g. "(162 - 150) / 150 = 8.0%").
- Tags: `[RXnn]` raw fact, `[S0nn]` source, `[A##]` assumption (register them as you use them in
  `research/parts/appendix-D-assumptions.md`, format `| A-ID | Assumption | Why | What it moves | How we
  would test it |`), `[M]` model/eval output (not usable yet, pipeline wiring is still in progress; use
  `{{EVAL:key}}` placeholders for anything that depends on a real eval run, per the two-pass rule below).
- Style: zero em dashes (—) and en dashes used as punctuation (–). No question headings. No exclamation
  marks. No hooks (no rhetorical-question openers, no "imagine if", no suspense). Indian notation: Rs /
  ₹, lakh, crore; FY = April to March; "to" for ranges, not a dash.
- Banned words/phrases (do not use any of these): delve, tapestry, game-changer, revolutionise/
  revolutionize, cutting-edge, seamless, leverage (as a verb; use "use"), unlock, empower, "in today's",
  "it's important to note", "in conclusion", holistic, synergy, paradigm, imagine, "what if", "let's",
  groundbreaking, state-of-the-art, supercharge, elevate, journey, world-class, next-gen, buy rating,
  sell rating, target price, undervalued, overvalued, investors should.
- Never fabricate a figure, quote, name, URL, or claim. Never coin a name for the product, a stage, or a
  method beyond "Next Signal" and the six stage names (Discover, Connect, Calculate, Reason, Challenge,
  Prove).
- Self-check after every H2: run
  `PY -c "import re,io;t=io.open(r'<your part file>',encoding='utf-8').read();print(len(t.split()),len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),len(re.findall('[\u2014\u2013]',t)),t.count('!'))"`
  (`PY` = `C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe -X utf8`). Dashes and
  exclamations must print 0. Fix any that appear before moving to the next H2.
- Write the file after the first two H2s and keep appending. Do not hold everything in memory until the
  end; if interrupted, a partial file is still useful.
- Two-pass sections (§19 "Worked discoveries" and §21 "Evaluation"): write pass 1 now with method and
  explicit `{{EVAL:key}}` placeholders wherever a number depends on a real engine run that has not
  happened yet. These will be replaced in pass 2 once `model/model_outputs.json` exists. Never invent a
  placeholder's value to "fill the gap" in the meantime.

## Register as you write

- New sources you cite that are not already in `research/raw/sources.md`: do not add new S-IDs as a
  writer (that is the lane agents' job); if you need a number not yet in any raw file, flag it in a
  `<!-- GAP: ... -->` HTML comment inline rather than inventing it, and move on.
- Assumptions you state explicitly (e.g. "we treat FY26 as the base year for 5-year CAGR"): add a row to
  `research/parts/appendix-D-assumptions.md` (create it if it does not exist yet, with header
  `| A-ID | Assumption | Why | What it moves | How we would test it |`) using the next free `A##` number.

## Finish every part file with

A one-line summary at the very end (not part of any H2): words, tables, dashes, exclamations for the
whole file, then `STATUS: PASS` (or `FAIL` with the reason).
