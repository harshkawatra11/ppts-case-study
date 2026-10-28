# R5 Research Critique (skill touchpoint T6)

Scope: `research/eurogrip-research.md` (131,258 words, 32 numbered sections, 6 appendices), critiqued against
`references/critique_rubric.md`, adapted to a document rather than a slide deck per `PLAN.md` §4.6 step 3 and
§0.4's calibration note. Dimensions scored: 1 (recommendation strength), 3 (quantitative rigour), 4 (action
titles), 6 (defensive depth), 7 (polish). Case 4 is marketing/trade plus operations, Case 1 is marketing, Case 2
is product engineering, Case 3 is strategy/GTM; none is M&A, so the skill's own calibration-honesty note applies
and the structural/rhetorical patterns (contrarian recommendation, moneyshot, bear/base/bull, action titles) were
scored with full confidence while case-specific framework fit was scored more leniently.

## What the document does well

This is the strongest-sourced document this folder has produced. Every one of the four cases carries the full
pattern: an obvious answer stated fairly and rejected with exactly three evidenced reasons, a named recommendation
with three reasons, a bear/base/bull moneyshot, a kill criterion set in advance, and a 120-word recap, all before
section 3 even begins (§2.1 to §2.17). Case 4, the deck case, goes further: a full tier ladder priced from real
Indian market quotes, a one-assumption-at-a-time tornado table (`T6`) correctly identifying contribution margin as
the dominant driver of break-even, a 10-item probability-times-impact risk register with a control priced or
assigned to an existing budget line for every entry (§14), and an honest validation plan that names 60 planned
interviews rather than inventing primary research (§15). The struck-insight ruling (§0.7, §7, §9) is applied
correctly and consistently everywhere it is relevant, and the document never once slips into presenting the
deleted brief sentence as a finding.

## Rubric dimension scores

| Dimension | Score (1-5) | Justification |
|---|---|---|
| 1. Recommendation strength | 5 | All four cases reject the obvious answer with three evidenced reasons, name a contrarian recommendation with three reasons, and foreshadow it (Case 4's non-stocking-mechanic insight is seeded in §1.2/§7 well before the recommendation in §10; Case 1's gig-distance proof is seeded in §17 before §18 names it). The alternative gets full quantitative treatment in every case, not a partial one. |
| 3. Quantitative rigour | 5 | Bear/base/bull appears for every headline number in every case (§2.3, §2.7, §2.11, §2.15 and the full model-table appendix, T1 to T20). Case 4 has a genuine one-at-a-time tornado table (T6) ranking six assumptions by break-even swing, plus a decomposed cost-per-member build (T3) and a quantified rejected-alternative (the cash scheme's 91% deadweight share, §9). This exceeds the rubric's load-bearing bar and reaches its "sophistication signal" tier. |
| 4. Action titles and quantification | 4 | Sampling 12 H2s across all four cases (§6 to §9, §11, §12 from Case 4; §19, §20 from Case 1; §21, §24 from Case 2; §25, §28 from Case 3): all 12 are full-sentence declarative findings and all 12 carry a specific number, for 24/24 on the rubric's point scheme. Pulling the sample wider across all 32 H2s found four section titles that were full-sentence findings but carried no number at all (old §7, §10, §26, §27); these have been fixed in this pass (see below), which should move a full 32-section sample from roughly 56/64 to 60/64. |
| 6. Defensive depth | 5 | Every quantitative claim in the Case 4 chapters traces to a tagged source, assumption, or model output; Appendix B (model tables T1 to T20) backs every case's moneyshot, Appendix D (assumptions register) gives bear/base/bull and a basis for every assumption cited in the body, and Appendix F (conflicts) logs every place a lower-tier source disagreed with a higher-tier one. The appendix is not thin filler: it is the same density as the main body. |
| 7. Polish | 4 | No "TODO", "Insert", "Placeholder", "TBD", "xyz" or "Lorem" found (one incidental use of the word "placeholder" is in a negated sentence, "not a placeholder description," which is correct usage, not residue). No stray names from other decks in this folder (BeyondTech, Dream11, Satoshi, Setu, PRAMAAN, Maudrik, SwasthyaGrid, NEXORA, HarvestBox, Next Signal, SwiftKart) appear anywhere; a single hit on "Dream11" is a legitimate market fact (Apollo Tyres' BCCI jersey deal replaced Dream11's after the real-money-gaming ban) with its own source tag, not copy-paste residue. Zero em/en dashes, zero exclamation marks, zero banned words, zero missing-source citations, zero duplicate headings. The one point held back is the primary-tier source share (see Issue 1 below), which is a sourcing-mix gap rather than a placeholder or copy-paste issue. |

## Invented-name sweep (PLAN.md §8.3)

Clean. Ran the regex `\b(?:[A-Z][a-z]+\s){1,3}[A-Z][a-z]+\b` against the assembled document and reviewed every
phrase not in the allow-list. The long tail is entirely real, named, sourced things: real places (Tamil Nadu,
Uttar Pradesh), real companies and brands (Royal Enfield, Zypp Electric, Uno Minda, Apollo Tyres, Castrol India),
and real named third-party programmes cited from R-D (Castrol Fast Scan, Shell Mechanic Samriddhi, Amaron
Mileage, ACC's Atoot Bandhan 2.0, Saurashtra Cement's Bandhan Rewards, Pidilite's Fevicol Champions, Polycab
Experts). Two of these carry their own explicit naming-caution passages in the document itself (§8.5, §10.2):
the document takes care to distinguish Eurogrip's own "Bandhan" retailer app from ACC's unrelated "Atoot Bandhan
2.0" and Saurashtra Cement's unrelated "Bandhan Rewards", and it explicitly excludes an unconfirmed "Ustaad
Programme"/"SHARE app" claim about Shell after a direct-fetch check could not verify it (`[RD16]`, conflict
C-RD1). No coined programme name, mascot, or "Project X" label for Eurogrip's own design was found anywhere; the
programme itself is referred to throughout only as "the programme," "the tier ladder," or "the mechanic advocacy
programme," per the golden rule against invented names.

## Top issues found

1. **IMPORTANT (flagged for the orchestrator, not fixed in this pass): the primary-tier source-share gate was
   quietly loosened from the plan's own target to match the document's actual mix, rather than the document being
   brought up to the plan's target.**
   Current state: `PLAN.md` §8 (verification gates) states the target as "Primary-tier share of cited sources
   (company filings, government statistics, regulators, standards bodies, rating rationales) >= 45%." The copy of
   `assemble.py` in this folder sets `MIN_PRIMARY_SHARE = 0.08`, with an inline comment stating it was "calibrated
   against this document's ACTUAL source landscape, not an a-priori" figure. The live measured value is 12.7%
   (`primary_share: 0.127` in the assembler's own check output), comfortably above the loosened 8% floor but well
   below the plan's original 45%.
   Fix: this is a genuine content-sourcing decision, not a prose fix a critique pass should make unilaterally.
   Either (a) the orchestrator accepts 12.7% as the honest ceiling for a build this dependent on vendor pricing,
   trade press and adjacent-category programme teardowns (R-D in particular leans on vendor and press sources by
   the nature of what it researches, cost benchmarks and competitor programme mechanics, which are rarely
   disclosed in a filing or a government statistic), and updates `PLAN.md` §8's own stated target to match reality
   honestly instead of leaving a stale 45% figure beside a 0.08 enforced floor; or (b) a further research pass
   re-sources specific claims (particularly in R-D's tool-cost and benchmark-programme tables, and the Case 1
   media-rate card) toward tier 1 to 3 sources where an equivalent primary source plausibly exists. Option (b) is
   out of scope for this critique-and-fix pass (it would mean re-opening dozens of citations, a lane-level task,
   not a writer-polish task); flagging it here is exactly what this pass is supposed to do with an issue it finds
   but should not silently paper over.
   Why it matters: a quietly loosened gate defeats the purpose of having one. The document is honest about every
   other limitation it carries (verification status in §0.4, the thinnest-evidence table in §1.10, the Case 2
   near-ceiling finding in §2.11); this is the one place where a plan-stated bar was moved to meet the work instead
   of the other way round, and it should be a visible decision, not a silent one.

2. **IMPORTANT (fixed in this pass): four section headlines carried no number at all, against the document's own
   32-for-32 track record everywhere else.**
   Current state: sections 7, 10, 26 and 27 were full declarative findings but had zero numbers in the heading
   text itself ("Awareness is not Eurogrip's gap: it loses at stocking and recommendation..."; "The programme:
   every shop joins free, earns tools and status..."; "A tractor tyre is chosen by the dealer, the mechanic and
   the neighbour..."; "Win the hardest-working tractors first: haulage operators and hiring centres buy on cost
   per hour...").
   Fix applied directly in `research/parts/part-B.md` and `research/parts/part-F.md` (not in the assembled file,
   which regenerates): section 7 now reads "...4 of 5 advocacy branches fail downstream of it..." (the section's
   own MECE five-branch table shows four of five branches below par); section 10 now reads "The programme: 3
   tiers let every shop join free..." (the section's own tier ladder has exactly three tiers); section 26 now
   reads "...recommendation ranks sixth of six purchase factors, and the order changes by state" (the section's
   own Telangana Garrett-ranking study, `[RG46]`); section 27 now reads "...they replace rear tyres every 3 years
   against 8, and talk to many farmers" (the section's own replacement-interval assumption, `[A3-07]` to
   `[A3-09]`). Re-ran `assemble.py md` after the fix: still `ASSEMBLY PASS`, word count 131,258 (16 words higher),
   32 answers, 274 tables, 0 dashes, 0 placeholders, dup_headings empty.
   Why it matters: this is the document's own single most repeated style rule (§0.5 golden rule: "every H2 is a
   declarative finding with a number"). Fixing the four outliers brings the sample to 32/32 sections carrying a
   number in the headline, the cleanest possible read on Dimension 4.

3. **NICE-TO-HAVE (not fixed, logged for awareness only): two Case 1 section headlines (§17, §18) carry only
   spelled-out small numbers ("Three riders, three jobs"; "One brand, one proof currency") rather than a
   data-bearing figure.**
   Current state: both headlines are grammatically numbered but the number is structural ("three segments," "one
   brand") rather than a finding, unlike every other case's headlines, which lead with a measured figure (₹63.75
   crore, 52.3%, 161 km/day, all of which appear in the section body itself).
   Fix (not applied, left for a future polish pass if time allows): §17 could read "Three riders, three jobs:
   commuters make 52.3% of urban two-wheeler trips, gig riders log about 161 km a day, and premium riders buy
   proof from peers," pulling the two strongest figures already in the section's own table into the headline.
   Why it matters: this is the weakest remaining gap against the Dimension 4 standard, but it is cosmetic, both
   headlines already satisfy the rubric's literal "contains a number" test, and reworking them risks destabilising
   a headline that other sections' prose already quotes by number (§7), not by text, so the benefit is marginal
   against the risk of a late-stage edit introducing a new inconsistency. Left as a judgement call, not a defect.

4. **NICE-TO-HAVE (not fixed): the document does not state anywhere, in one place, that Case 1 to 3 intentionally
   carry a lighter defensive-depth layer (no full risk register, no full validation-interview plan, no per-case
   section analogous to Case 4's §14/§15) than Case 4, even though this is clearly by design (`PLAN.md` §0.4's
   document map, §1.6) since only Case 4 is built into a deck this round.**
   Current state: a reader comparing Case 4's risk register and validation plan against Case 1 to 3's much
   shorter kill-criteria paragraphs (§2.8, §2.12, §2.16) could mistake the asymmetry for an oversight rather than a
   scoping decision, since the document's own "what this section establishes, and what it does not" closers do
   not call this out explicitly at the point the asymmetry becomes visible (§2.17 or the start of §17).
   Fix (not applied): add one sentence to §2.17's closer or to §0.10's document map, stating plainly that Case 4
   alone carries full risk-register and validation-interview depth because it is the only case built into a Round
   2 deck this round, and that Cases 1 to 3 are solved to the brief's own evidentiary standard without that extra
   layer.
   Why it matters: this is a clarity nicety, not a rigor gap; the asymmetry is already defensible and intentional,
   it just is not narrated out loud anywhere a judge reading cover-to-cover would notice it.

5. **NICE-TO-HAVE (not fixed): one quote in §3.5 is marked "snippet-level only" (source page returned HTTP 403 on
   direct fetch) and is used anyway, with the caveat stated inline, which is correct per the tag legend, but the
   same caveat is not repeated when the quote is referenced again later in the document.**
   Current state: the P Madhavan CSK-touchpoint quote in §3.5 (`[RA39]`) carries its snippet-only caveat the first
   time it appears; a search for later re-use of this specific quote did not find a second instance in this
   build, so this issue is speculative rather than confirmed, and is logged only as something to re-check if a
   future writer pass adds a cross-reference to it.
   Fix: none needed unless a future pass adds a second reference to `[RA39]` without the caveat.
   Why it matters: minor; included for completeness of the top-5 format, not because it currently costs the
   document anything.

## Summary

Four of the five issues above are NICE-TO-HAVE or already fixed; the one IMPORTANT issue left open (the
primary-share gate) is a genuine, honestly-surfaced sourcing-mix limitation that this pass cannot responsibly
paper over by either re-sourcing dozens of citations (out of scope for a critique pass) or silently accepting the
loosened gate without saying so. No CRITICAL issues were found anywhere in the document: the recommendation
pattern, the quantitative rigour, the appendix depth and the polish are all at or near the ceiling the rubric
describes for a 5.
