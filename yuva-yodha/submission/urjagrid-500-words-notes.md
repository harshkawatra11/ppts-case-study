# UrjaGrid 500-word pitch: working notes (task P500)

Final text: `urjagrid-500-words.md`, copied byte for byte to `urjagrid-500-words.txt` (checked with `cmp`).
Touchpoint B: `Skill("case-competition-deck")` loaded and `references/rhetoric.md` read before drafting.

## 1. Outline (one line per paragraph, with the numbers each carries)

1. Problem: on the record-demand day the grid was 2.57 GW short after sunset against 0.18 GW in solar hours; the edge closes the gap with a feeder switch; CEEW meters saw about two hours a day lost while the feeder log showed a few hours a month.
2. Why it matters: the evening climb steepens as solar grows; the burden lands on low-income urban and peri-urban lanes (small towns lost more than district HQ in the same study); a feeder switch takes clinic, shop and study hour together; overloaded evenings age the DISCOM's transformers. No new numbers.
3. Solution: UrjaGrid uses the load-limit switch in 7.24 crore installed smart meters; forecast, softer levers first (₹2 a unit rebate, managed charging, shiftable loads, storage), then a time-boxed 300 W lifeline limit; named engineer approves, two hours' notice, critical homes never touched.
4. What is new: limit rather than cut; the meter as the unit of fairness with a rotating burden; engines decide, a language model only explains; no new hardware, quoting the brief; IEA "up to three times lower" quote.
5. Impact and beneficiaries: simulated on 48 transformers and 7,000 connections; 4.2 hours to 0.4 hours, a 90% cut, base case; ₹383 a meter a year to the DISCOM, ₹0 to the home; low-income homes, small shops, clinics and life-support homes, engineers, transformers; honest status and six-week pilot on one sub-division.

## 2. Check output (plan §13.5.4)

First draft (before cuts):
```
words 557 | paragraphs 5 | dashes 0 | ? or ! 0
banned {}
markdown False | numbers ['0.18 GW', '0.4 h', '2.57 GW', '300 W', '4.2 h', '48', '7,000', '7.24 crore', '90%', '₹0', '₹2', '₹383']
```
Failure: words above 490. Fixed by cutting decorative sentences and merging clauses (second pass 511, third pass 487 after the critique revisions, final 482 after the read-aloud pass).

Final text:
```
words 482 | paragraphs 5 | dashes 0 | ? or ! 0
banned {}
markdown False | numbers ['0.18 GW', '0.4 h', '2.57 GW', '300 W', '4.2 h', '48', '7,000', '7.24 crore', '90%', '₹0', '₹2', '₹383']
```
Paragraph word counts: 75, 75, 107, 107, 118. All pass conditions hold.

Extra scans on the final text, 0 hits each: users, customer, we tested, pilot showed, In a world, At its core, Ultimately, This is where, it's not just, navigate the, it is worth noting, any competitor or vendor name, URL, www, repository.

## 3. Critique (rhetoric.md and the five judging criteria)

What works:
- Quantification: every claim that has a number carries it in the same sentence (rhetoric §11).
- Contrarian line (§1): the answer is the switch already on the wall, not a new asset; storage appears as a lever, never as wrong.
- Pre-empted weakness (§6): "simulated" sits beside the 4.2 to 0.4 hours figure, "base case" is named, and the last sentence states the prototype status and the pilot that would measure it.
- Third-party validation (§7): the IEA cost quote, verified word for word by both V0 verifiers; the brief's own phrase "without requiring major capital investment".
- Moneyshot (§12): 4.2 hours to 0.4 hours appears exactly once, in paragraph 5, with its cost.
- Judging criteria: Problem and idea (P1, P2); Architecture and design (P3 loop, P4 engines vs language model); Impact and measurability (P5, defined baseline: same shedding rules on both sides); Feasibility and affordability (no hardware, ₹383 and ₹0, prototype status, pilot); Sustainability (solar growth makes the evening gap structural, transformer life).

Three weakest sentences in the first draft, and how each was revised:
1. "The gap grows as more solar is added, because the evening ramp it leaves behind grows with it." Circular and abstract. Revised to "Each year of solar growth makes the climb after sunset steeper." (S03 supports a steeper evening ramp; no new number added.)
2. "The design makes different choices from a shedding roster." A topic sentence that only decorates. Cut; paragraph 4 now opens on the finding: "What is new is that UrjaGrid limits rather than cuts, so a capped home keeps its fan while a shed home keeps nothing."
3. "Every evening a transformer spends above its rating also shortens its life, and the DISCOM pays for that in failures." The second clause claimed a cost with no number or source. Revised to "For the DISCOM, every evening a transformer runs above its rating shortens its life." (thermal ageing, IEEE C57.91, as in the product's thermal model).

Read-aloud pass: the 55-word opening sentence was split in two so the first sentence states the problem alone; "We modelled it" became "We modelled the effect" to remove an unclear pronoun; the illustrative tailor was dropped as close to an invented anecdote, leaving the brief's own refrigeration and education examples.

## 4. Number trace (every number in the final text, to its plan §3.7 row)

Numerals (12 distinct, the §13.5.3 limit):

| # | Text | §3.7 row | Tag |
|---|---|---|---|
| 1 | 2.57 GW short after sunset | "2.57 GW vs 0.18 GW; 270.8 GW", record-demand day 21 May 2026 | [S02], VERIFIED by R-A and R-D |
| 2 | 0.18 GW short in solar hours | same row | [S02] |
| 3 | 7.24 crore installed smart meters | "7.24 crore installed; 20.33 crore sanctioned" | [S16], VERIFIED |
| 4 | ₹2 a unit rebate | "₹8 a meter a month; ₹2 a unit" | [P] |
| 5 | 300 W lifeline limit | "300 W, 500 W; 1,000/2,000 W; 500/1,000 W" | [P] |
| 6 | 48 transformers | "48 DTs, 12 feeders, 5 sub-divisions, 7,000 connections, 69 T0" | [P] |
| 7 | 7,000 connections | same row | [P] |
| 8 | 4.2 hours (today, simulated heatwave day) | "4.2 h to 0.4 h; 90%; 0.83 / 0.40 / 0.00" | [M] |
| 9 | 0.4 hours (base case) | same row | [M] |
| 10 | 90% cut | same row | [M] |
| 11 | ₹383 a meter a year | "₹96 + ₹188 + ₹99 = ₹383; ₹309 / ₹547" | [M], [A07, A08] |
| 12 | ₹0 to the home | §3.2 and §3.3 ("₹0 to the home"), the ₹383 row's payer split; values.js s8 | [M] |

Spelled-out quantities (not caught by the regex; listed so the reviewer can see them):

| Text | Source |
|---|---|
| "about two hours of supply a day" | §3.7 "about 2 h a day" [S07], VERIFIED (both verifiers agree on the headline figure) |
| "a few hours a month" (feeder log) | §3.7 "feeder log 3.5 h and 4.8 h a month" [S07]; used only in words because R-A could not confirm the exact feeder-log digits |
| "two hours' notice" | §3.7 "T−120" (notify at T−120) [P]; values.js s5 "a notice two hours ahead" |
| "up to three times lower" (inside the IEA quote) | §3.7 "up to 3 times lower" [S37]; quote is §3.8 item 1, word for word, VERIFIED by both verifiers |
| "six-week pilot on one sub-division" | values.js s9 finding ("Six weeks take one sub-division...") and the §13.5.3 content list; not a §3.7 row, flagged for the R500 reviewer |

Dates: the record day is written "this May" rather than "21 May 2026" so the numeral count stays at 12; the date itself is the §3.7 [S02] row.

## 5. Values deliberately left out after V0

- Judging weights 20/20/25/20/15 [S32]: UNVERIFIABLE in both R-C and R-D.
- Eskom figures and quote [S33]: VERIFIED by R-C, UNVERIFIABLE by R-D; not used.
- IEA equity quote [S37]: CORRECTED by R-D (wording differs); not used.
- Home inverter cost ₹2,800 to ₹3,800 [S51]: UNVERIFIABLE; not used.
- REC "load curtailment in place of load shedding" [S18] and MoP "load shedding is not an option" [S22]: quotes UNVERIFIABLE; not used.
- CEEW small-town 3.5 h and district HQ 1.3 h: verified, but used only as a comparison in words ("lost more hours a day") to stay within 12 numerals.
- No "must never appear" value, URL, repository, competitor name, "deployed", "users" or Schneider product claim is in the text.
