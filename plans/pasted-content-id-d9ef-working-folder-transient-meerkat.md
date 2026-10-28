# HISAAB for Fintechstico V7.0 (Consilium'26, NSUT): PS2 research and a 7-slide native Figma deck

Plan file: `C:\Users\harsh\.claude\plans\pasted-content-id-d9ef-working-folder-transient-meerkat.md`
Repo root (all relative paths start here): `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court`
Working folder: `fintechstico-submission/` (exists, empty)

> **What the user locked (3 Oct 2026).** Problem Statement 2, Intelligent Tax Reconciliation, all in. Product name **HISAAB**. Only the pitch deck is submitted, so **no separate research document is built: the research lives in Part I of this file.** **The deck is built on the organisers' template already imported in Figma (`H3Zr4ESaceYlV54zvpkgZi`), as specified in Part II v3 (§14 onward), which overrides anything in §0 to §2 that says otherwise:** slide 1 stays the organisers' cover, headers are rewritten in League Spartan 82.7pt with the underline exactly as in the template screenshots, `TEAM MEMBERS` is in Roboto, nothing of ours sits on or above a header, and an Appendix and a plain Thank You slide are added (9 slides). There is no remaining user gate: approving this plan approves the verified slide copy. **Deadline is tight: run steps C1 to C6 first; sweeps, critique and the preview PDF follow only if time allows.** Team IdeaForge: Harsh Kawatra (Delhi Technological University, Team Leader) and Aakriti Aggarwal (Maharaja Agrasen Institute of Management Studies, Member). Slide 3 keeps the literal header `Team Name`. No judging criteria are published; the user will give the deadline separately. **A voice and grounded-LLM layer is mandatory in the design:** speech-to-text and text-to-speech on Sarvam (Saaras v3, Bulbul v3) and the LLM as Sarvam 105B or Gemini, swappable behind one tool-calling interface, wherever a language model answers (§9.5). **Hisaab is pitched as a fresh concept:** nothing is claimed as built, and no earlier repository or project is mentioned on any slide.

---

## 0. How to read this plan

| Part | Sections | What it is |
|---|---|---|
| Ground rules | §1, §2 | The brief, the template, integrity and language rules |
| **Part I: the research** | §3 to §13 | The fact base, the argument, the product design, the numbers. This is the research document |
| **Part II: the deck** | §14 to §21 | Design system, locked slide copy with geometry, build pipeline, validators, step table |

**One user gate.** Gate G2 sits before the Figma build: the user approves the locked slide copy in §17 as corrected by the verification step, and confirms the ownership split on the team slide.

**Roles**

| Role | Model | Does | Never does |
|---|---|---|---|
| Main agent | whatever the session runs | Orchestrates, applies corrections, makes every Figma call | Delegates a Figma call |
| Verifiers VA-1, VA-2 | `general-purpose`, `model: "sonnet"` | Re-open every source in §3 and every competitor page behind §6; mark each row | Adds claims, rewrites copy |
| Slide authors SL-2, SL-4, SL-5, SL-6, SL-7 | `general-purpose`, `model: "sonnet"` | One `deck/slides/sNN.js` each, passing the offline mock | Calls Figma |
| Critic CR | `general-purpose`, `model: "sonnet"` | Skill critique mode on the 7 screenshots | Edits slides |

**The Sonnet execution contract**

DO
1. Follow the step table in §20 in order. Confirm the "done when" condition before the next step.
2. Paste code blocks from this plan byte for byte.
3. Use the slide copy in §17 word for word. Change slide content only by editing `deck/slides/sNN.js`, then regenerate, re-mock, re-bind, re-run (§18.6).
4. Take every displayed number from `deck/values.js`, which is built from §3 and §12 after verification.
5. Log every step in `fintechstico-submission/deck/figma.md`.
6. Use the `case-competition-deck` skill at the four touchpoints in §19 and log one line each.

DO NOT
1. Do not change the product concept, the moneyshot, a FINDING sentence or a panel title, except through a fix rule (§18.9) or a verified correction (§3.3).
2. Do not add, remove, reorder or rename slides, and do not reword a slide header (§15.1).
3. Do not invent interviews, pilots, user counts, accuracy results or quotes. Nothing has been built or measured. Every performance number is a **design target** and every rupee impact is a **worked estimate**, and the slide says so.
4. Do not write an em dash, an en dash, a hook, a rhetorical question, an exclamation mark or a banned word (§2.2).
5. Do not set `x`/`y` before `appendChild`, do not rotate rectangles to draw lines, do not use `loadAllPagesAsync`, `setPluginData` or `createImageAsync`.
6. Do not add decoration to fill space. If a slide looks thin, report it.
7. Do not write product code, a dataset generator or a model. The user chose research and design only before shortlisting.

---

## 1. Context

### 1.1 The brief (verbatim requirements, with IDs)

The Finance and Economics Society of NSUT runs **Fintechstico V7.0**, the fintech hackathon of **Consilium'26**. Teams of 2 to 4, prizes worth ₹1,50,000 [S20]. The ideation round is judged on a deck in the organisers' format; shortlisted teams then build a prototype.

**Problem Statement 2: Intelligent Tax Reconciliation.** "Build an AI-driven tax reconciliation system that analyzes invoices, transactions, accounting records, and tax data to identify discrepancies, errors, and potential compliance issues. The system should go beyond basic matching and provide:"

| ID | Requirement, as written |
|---|---|
| PS2-C1 | Transaction reconciliation to match invoices, payments, and accounting records |
| PS2-C2 | Mismatch and duplicate detection for differences in amounts, dates, invoice IDs, tax values, and repeated records |
| PS2-C3 | Tax verification by comparing recorded tax amounts with expected tax based on applicable rates |
| PS2-C4 | Missing and unmatched transaction detection to identify incomplete or unaccounted financial records |
| PS2-C5 | Anomaly detection to flag unusual transaction and tax patterns |
| PS2-C6 | Tax liability analysis to estimate tax obligations from reconciled financial records |
| PS2-C7 | Reconciliation dashboard to visualize matched, unmatched, duplicate, and discrepant transactions |
| PS2-D | Dataset: a synthetic financial dataset containing invoices, transactions, tax rates, tax amounts, accounting records, and intentionally introduced discrepancies |

The phrase that decides the argument is the brief's own: **"go beyond basic matching"**.

### 1.2 The organisers' format (from `fintechstico_submission_format.pdf`, 7 pages)

| # | Slide name and header |
|---|---|
| 1 | Cover: `CONSILIUM'26` `PRESENTS` `FINTECHSTICO` `THE FINTECH HACKATHON` |
| 2 | `Problem Statement` |
| 3 | `Team Name` with `TEAM MEMBERS` under it |
| 4 | `Solution` |
| 5 | `Architecture` |
| 6 | `Technology Used` |
| 7 | `Feature / USP` |

These headers are topic labels. Our standard needs a finding as the headline. Both are kept: the organisers' header is the page header, and the action title sits in a FINDING band directly under it.

### 1.3 Deliverables

```
fintechstico-submission/
  brief/01-brief.md                    §1.1 and §1.2 copied
  research/verification.md             the V0 result (§3.3)
  deck/figma.md                        build log
  deck/values.js  preamble.js  mock_figma.js  slide_ids.json
  deck/slides/s01.js ... s07.js
  deck/build/  deck/build_bound/  deck/shots/
  deck/TeamIdeaForge_Fintechstico_preview.pdf
```
Plus one Figma Slides file named `FINTECHSTICO | Team IdeaForge | HISAAB`.

---

## 2. Ground rules

### 2.1 Content integrity (CLAUDE.md §5, binding)

1. **Nothing is built.** No accuracy, precision, recall, speed or savings figure may read as a result. Use "target", "design target", "est." or "worked example".
2. **No fabricated primary research.** The deck shows a Customer Validation Plan (who will be interviewed, how many, the question each answers). No interview is claimed as done.
3. **India-first numbers** in ₹, lakh and crore, from Indian sources.
4. **Every number has a source ID** from §3.1 or an assumption ID from §12.1, and sits behind a source line on its slide.
5. **A corrected figure is corrected everywhere.** After any change, grep `deck/` for the old value.
6. **Competitor cells** in the parity matrix come only from the vendor's own page. A cell without evidence reads "Not stated".
7. **Fresh concept.** No slide mentions an earlier project, repository, live app, test count or measured result. Model names print as "Sarvam Saaras v3", "Sarvam Bulbul v3", "Sarvam 105B" and "Gemini", with no other version string.

### 2.2 Language standard

- Zero em dashes (U+2014) and zero en dashes (U+2013). Ranges use "to". Negatives use `−` (U+2212).
- No hooks: no question in the deck's own voice, no "imagine", no teaser, no exclamation mark.
- Banned, case-insensitive, 0 hits: delve, landscape, unlock, game-changer, here's, let's, bottom line, it's not just, make no mistake, in today's, fast-paced, seamless, leverage (verb), robust, tapestry, testament, navigate the, realm, holistic, synergy, paradigm, cutting-edge, revolutioniz, revolutionis, crucial, pivotal, furthermore, moreover, in conclusion, it is worth noting, empower, supercharge, reimagine, next-gen, world-class, best-in-class, transformative, harness.
- Voice: the way a consultant writes to a client's CFO. Plain verbs, concrete nouns, the number next to the claim.
- FINDING sentences and panel titles are findings with a number where one exists.

### 2.3 Standing memory that applies

- `feedback_no_em_dash_no_hooks.md`: §2.2, and dense slides with several distinct visual forms.
- `feedback_cover_style.md`: no KPI-card row on a cover; the team is shown as a table with Team Members, Institution, Role. The organisers give the team its own slide 3, so the table lives there.
- `feedback_no_coauthor_trailer.md`: if anything is committed, no Co-Authored-By line.
- `design_schema_innovators_court.md` (python-pptx route) does not apply; the user asked for Figma native slides.

### 2.4 Files to read before starting (main agent)

1. This plan, whole.
2. `CLAUDE.md` §0 to §8.
3. `.claude/skills/case-competition-deck/SKILL.md`, `references/archetypes.md`, `references/rhetoric.md`, `references/critique_rubric.md`.
4. `nsbc-case/deck/preamble.js`, `nsbc-case/deck/mock_figma.js`, and `nsbc-case/deck/slides/s02.js` to `s10.js` (helper signatures and call examples).

---

# PART I: THE RESEARCH

## 3. Fact base

### 3.1 Source register

| ID | Source | URL |
|---|---|---|
| S01 | Ministry of Finance written reply, Lok Sabha, August 2025, as reported by PTI in The Tribune: "GST evasion of ₹7.08 lakh crore detected in 5 yrs" | https://www.tribuneindia.com/news/business/gst-evasion-of-7-08-lakh-crore-detected-in-5-yrs |
| S02 | GSTN "nine years of GST" statistics, as reported by A2Z Taxcorp: taxpayer base 1.67 crore | https://a2ztaxcorp.net/nine-years-of-gst-taxpayer-base-crosses-1-67-crore-as-indias-digital-indirect-tax-ecosystem-scales-new-milestones-report-highlights-expansion-of-taxpayer-base-192-27-crore-returns-filed-an/ |
| S03 | GSTN advisory on the Invoice Management System, as reported by VJM Global | https://www.vjmglobal.com/blog/invoice-management-system-made-effective-from-1st-october-2024-on-gst-portal |
| S04 | ClearTax, "Hard-locking of auto-populated values in GSTR-3B" | https://cleartax.in/s/hard-locking-in-gstr-3b |
| S05 | TaxUpdate, "GSTR-3B hard-locking and IMS" (status of the Table 4 lock, September 2026) | https://taxupdate.in/gst/783/gstr-3b-hard-locking-ims-gstr-1a-input-tax-credit-table-4-july-2026/ |
| S06 | ClearTax, "DRC-01C intimation under Rule 88D" | https://cleartax.in/s/rule-88d-cgst-itc-mismatch-gstr-2b-vs-gstr-3b |
| S07 | ClearTax, "Rule 37 of CGST Rules: ITC reversal on non-payment within 180 days" (also covers Rule 37A) | https://cleartax.in/s/rule-37-of-cgst-sgst-rules-itc-reversal-180-days |
| S08 | SCC Online, "GST Council's 56th meeting introduces key slab reforms" | https://www.scconline.com/blog/post/2025/09/04/gst-council-56th-meeting-slab-reforms-tribunal-rollouts-2025/ |
| S09 | Taxaj, "e-Invoicing in GST: registration and IRN guide" (threshold and 30-day rule) | https://www.taxaj.com/learn/?p=358 |
| S10 | InstaFinancials, "E-invoicing updates, October 2025" (GSTINs enabled) | https://blog.instafinancials.com/2025/10/23/e-invoicing-updates-october-2025/ |
| S11 | TaxHeal, "29,273 bogus firms involved in suspected ITC evasion of ₹44,015 crore detected" (Ministry of Finance release) | https://www.taxheal.com/?p=95176 |
| S12 | Deloitte India, "India Inc embraces GST" (GST survey press release) | https://www.deloitte.com/in/en/about/press-room/india-inc-embraces-gst.html |
| S13 | Tally Solutions, "The total cost of TallyPrime in India" | https://tallysolutions.com/business-guides/tallyprime-total-cost-of-ownership-india/ |
| S14 | Tally Solutions, "GSTR-2B reconciliation: why mismatches happen and how to fix them" | https://tallysolutions.com/gst/gstr-2b-reconciliation-mismatches-how-to-fix/ |
| S15 | Zoho Books help, "Reconciling GSTR-2B" | https://www.zoho.com/in/books/help/gst/gstr2b-reconcile.html |
| S16 | Suvit, "GST reconciliation feature" | https://www.suvit.io/gst-reconciliation-feature |
| S17 | Careers360, "ICAI student and member report 2025" | https://finance.careers360.com/articles/icai-student-and-member-report-2025 |
| S18 | Reserve Bank of India press release, lending and deposit rates of scheduled commercial banks | https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=63481 |
| S19 | A2Z Taxcorp, "E-way bill generation rises 7.7 per cent to 139.08 million in August 2026" | https://a2ztaxcorp.net/e-way-bill-generation-rises-7-7-per-cent-to-139-08-million-in-august-2026/ |
| S20 | Unstop listing, Fintechstico V7.0 | https://unstop.com/hackathons/fintechstico-v70-diving-into-the-world-of-fintech-consilium26-netaji-subhas-university-of-technology-nsut-del-1743355 |

### 3.2 Fact table (planning-time web research on 3 Oct 2026; status is "search-level" until step V0 marks each row)

| ID | Fact | Value | Data date | Source |
|---|---|---|---|---|
| F01 | GST evasion detected by CGST field officers, five years | ₹7.08 lakh Cr in 91,370 cases | FY21 to FY25 | S01 |
| F02 | ITC fraud within F01 | ₹1.79 lakh Cr in 44,938 cases | FY21 to FY25 | S01 |
| F03 | ITC fraud detected by year, ₹ Cr | FY21 31,233; FY22 28,022; FY23 24,140; FY24 36,374; FY25 58,772 | each year | S01 |
| F04 | GST evasion detected by year, ₹ Cr | FY21 49,384; FY22 73,238; FY23 about 1.32 lakh; FY24 2.30 lakh; FY25 2.23 lakh | each year | S01 |
| F05 | ITC fraud cases in FY25 | 15,283 | FY25 | S01 |
| F06 | Voluntary deposits recovered over the five years | over ₹1.29 lakh Cr | FY21 to FY25 | S01 |
| F07 | Active GST taxpayers | 1,67,14,646, of which 1,48,70,332 normal and 13,55,180 composition | 30 Jun 2026 | S02 |
| F08 | Returns filed and payments made in FY26 | 192.27 crore returns; ₹23.31 lakh Cr | FY26 | S02 |
| F09 | Proprietorships as a share of active taxpayers | 76.9% | 30 Jun 2026 | S02 |
| F10 | Invoice Management System live on the GST portal; buyers can accept, reject or keep an invoice pending | from 1 Oct 2024 | 2024 | S03 |
| F11 | Auto-populated outward liability in GSTR-3B made non-editable | from the July 2025 tax period | 2025 | S04 |
| F12 | ITC in Table 4 of GSTR-3B is auto-populated from GSTR-2B but still editable; a lock was widely expected around July 2026 and no GSTN advisory had fixed it as of September 2026 | status | Sep 2026 | S05 |
| F13 | Form DRC-01C is auto-generated when ITC claimed in GSTR-3B exceeds GSTR-2B beyond a tolerance; the taxpayer has seven days to respond | 7 days | current | S06 |
| F14 | Rule 37: credit is reversed if the supplier is not paid within 180 days of the invoice date | 180 days | current | S07 |
| F15 | Rule 37A: credit is reversed by 30 September if the supplier has not paid the tax; failing that, it is payable with interest at 18% a year from the date of the claim | 30 Sep; 18% | current | S07 |
| F16 | 56th GST Council meeting, 3 Sep 2025: slabs of 5% and 18% with 40% for select goods, effective 22 Sep 2025; the 12% and 28% slabs removed | 22 Sep 2025 | 2025 | S08 |
| F17 | E-invoicing mandatory above ₹5 Cr aggregate turnover | since 1 Aug 2023 | current | S09 |
| F18 | Taxpayers at ₹10 Cr turnover and above must report e-invoices within 30 days; the portal blocks IRN generation after that | since 1 Apr 2025 | current | S09 |
| F19 | GSTINs enabled for e-invoicing | 13,14,362 | Oct 2025 | S10 |
| F20 | First all-India drive against fake registrations: bogus firms detected and suspected ITC evasion | 29,273 firms; ₹44,015 Cr; 121 arrests | May to Dec 2023 | S11 |
| F21 | MSME respondents reporting ITC matching as a challenge | 64% in 2023, 37% in 2024 | survey years | S12 |
| F22 | TallyPrime price: Silver single user, Gold multi user, one-time, before GST; rental per month | ₹22,500; ₹67,500; ₹750 and ₹2,250 | 2026 | S13 |
| F23 | Zoho Books India plans per month before GST | Standard ₹899; Professional ₹1,799; Premium ₹3,599 | 2026 | S15 and vendor pricing page |
| F24 | Suvit plan for accountants | ₹12,000 a year (listed at ₹20,000) | 2026 | S16 and vendor pricing page |
| F25 | ICAI members and registered firms | 4,07,629 members; 98,967 firms | 2025 | S17 |
| F26 | Weighted average lending rate of scheduled commercial banks: outstanding rupee loans; fresh rupee loans | 8.97%; 8.52% | Jul 2026 | S18 |
| F27 | E-way bills generated in a month | 139.08 million in Aug 2026; record 140.60 million in Mar 2026 | 2026 | S19 |
| F28 | GST return calendar: GSTR-1 by the 11th, GSTR-2B generated on the 14th, GSTR-3B by the 20th of the following month | dates | current | S14 |

Derived, checked by hand:
- ITC fraud FY25 against FY24: 58,772 ÷ 36,374 = 1.616, a rise of 62%.
- ITC fraud FY25 against FY23: 58,772 ÷ 24,140 = 2.43 times.
- Sum of F03: 31,233 + 28,022 + 24,140 + 36,374 + 58,772 = 1,78,541, which rounds to ₹1.79 lakh Cr and agrees with F02.
- Sum of F04: 49,384 + 73,238 + 1,32,000 + 2,30,000 + 2,23,000 = 7,07,622, which agrees with F01.

Deliberately not used on any slide: gross GST collections. One search result gave FY26 at ₹22,27,096 Cr against ₹20,55,515 Cr for FY25, which conflicts with the ₹22.08 lakh Cr widely reported for FY25 in April 2025. The series appears to have been re-based. The deck does not need the figure, so it is left out.

### 3.3 Step V0: verification (two agents in parallel, before anything is built)

VA-1 takes F01 to F14 and S01 to S07. VA-2 takes F15 to F28, S08 to S19, and the competitor cells in §6.2. Prompt:

> Read §3 and §6.2 of the plan at `C:\Users\harsh\.claude\plans\pasted-content-id-d9ef-working-folder-transient-meerkat.md`. For each fact row assigned to you, open the source URL with WebFetch (and search for the primary document where the row cites a news report of one). Mark each row `VERIFIED`, `CORRECTED: <right value> | <snippet of at most 30 words> | <url>` or `UNVERIFIABLE`. For each competitor cell in §6.2 assigned to you, open that vendor's own product page and mark the cell `CONFIRMED`, `CHANGE TO <Yes, Partial, No or Not stated>` with the snippet, or `NO EVIDENCE`. Add nothing new. Write no em dashes or en dashes. Append your table to `fintechstico-submission/research/verification.md` under a heading with your agent name. Reply with counts per status and every row that is not VERIFIED or CONFIRMED.

Rules the main agent applies afterwards, mechanically:
1. A CORRECTED value replaces the old one in `values.js` and in every string of §17 that carries it. Recompute any derived figure (the 62%, the 2.4 times, §11, §12).
2. An UNVERIFIABLE fact is removed from its slide. The slot is filled by the fallback named in §17 for that panel; if none is named, the panel keeps its remaining content and the main agent reports it.
3. A competitor cell with NO EVIDENCE becomes "Not stated".
4. Every change is listed in `deck/figma.md` under "V0 corrections" and shown to the user at Gate G2.

---

## 4. Why Problem Statement 2

The team's judgement at desk level, recorded so the choice can be defended in questions. It is not a measured ranking.

| Criterion | Weight | PS1 KYC | PS2 Tax reconciliation | PS3 Scam and loan risk | Reason |
|---|---|---|---|---|---|
| Room to differ from other teams | 20 | 2 | 5 | 2 | Row matching is already free on the GST portal and in Tally, so a team that prices exceptions stands apart. KYC and fraud detection are the most common fintech hackathon builds |
| Prototype feasibility | 25 | 3 | 5 | 2 | Seven capabilities on one invoice, payment and ledger pipeline with injected ground truth. PS3 asks for eight across two domains; PS1 leans on vision models in a live demo |
| Depth of Indian public evidence | 15 | 4 | 4 | 5 | All three are well documented |
| Strength of the headline number | 15 | 3 | 4 | 5 | ₹58,772 Cr of ITC fraud in one year is strong; cyber fraud losses are larger |
| Fit with a finance and economics jury | 10 | 3 | 5 | 4 | Tax and accounting logic can be tested directly by the jury |
| Reuse of what the team has | 10 | 2 | 3 | 4 | |
| Scope risk | 5 | 4 | 4 | 1 | PS3 joins two unrelated domains |
| **Weighted score out of 100** | | **58** | **89** | **65** | Σ(weight × score) ÷ 5 |

---

## 5. The problem

### 5.1 Scale

Over the five years to March 2025, CGST officers detected ₹7.08 lakh Cr of GST evasion in 91,370 cases [F01]. A quarter of it, ₹1.79 lakh Cr in 44,938 cases, was input tax credit fraud [F02]. The trend is the point: ITC fraud detected fell from ₹31,233 Cr in FY21 to ₹24,140 Cr in FY23, then rose to ₹36,374 Cr in FY24 and ₹58,772 Cr in FY25 [F03]. FY25 is 62% above FY24 and 2.4 times FY23. A single drive against fake registrations between May and December 2023 found 29,273 bogus firms and ₹44,015 Cr of suspected ITC evasion [F20].

The base that has to reconcile is large and mostly small. India has 1.67 crore active GST taxpayers, 1.49 crore of them normal taxpayers who claim credit, and 76.9% are proprietorships [F07, F09]. They filed 192.27 crore returns in FY26 [F08]. 13.14 lakh GSTINs are large enough to fall under e-invoicing [F19]. E-way bills alone run at about 14 crore a month [F27].

### 5.2 How reconciliation works today

| Step | When | What the finance team does | Where the data sits |
|---|---|---|---|
| 1 | Through the month | Books purchase invoices and payments | Tally or another ledger; bank statement |
| 2 | By the 11th | Suppliers file GSTR-1; invoices start to appear to the buyer | GST portal |
| 3 | Any time before the 14th | Accept, reject or keep each invoice pending in the Invoice Management System [F10] | GST portal |
| 4 | 14th | GSTR-2B is generated: the credit the buyer may claim [F28] | GST portal |
| 5 | 14th to 20th | Match the purchase register to GSTR-2B, chase suppliers, decide what to claim | Spreadsheet or the ledger's reconciliation screen |
| 6 | By the 20th | File GSTR-3B. Outward liability is locked to GSTR-1 since July 2025 [F11]; Table 4 credit is auto-filled from GSTR-2B [F12] | GST portal |
| 7 | After filing | If credit claimed exceeds GSTR-2B beyond tolerance, Form DRC-01C arrives with seven days to respond [F13] | GST portal |
| 8 | Ongoing | Reverse credit on invoices unpaid after 180 days [F14]; reverse credit where the supplier has not paid tax by 30 September [F15] | Ledger |

The working window is six days, from the 14th to the 20th. Everything a finance team can fix, it must fix in that window, and nothing in its tools says which fix is worth the most.

### 5.3 Where it breaks (MECE issue tree)

| Branch | Cause | What it looks like in the data | Who can fix it |
|---|---|---|---|
| Supplier | Did not file GSTR-1; filed late; filed with a wrong GSTIN, number or value | In books, missing in 2B; value differs | The supplier, after a nudge |
| Timing | Invoice dated in one month, reported in the next | Present in both, different period | Nobody; it resolves, but the claim must wait |
| Our books | Wrong rate, wrong tax head, duplicate booking, typing error in the invoice number | Rate or tax-head mismatch; repeated record; near match | The buyer's own accountant |
| Fraud | A supplier that exists only to pass credit | Round values, a new vendor with a burst of invoices, circular billing | Compliance, and it must be caught before the claim |

Five whys on the largest branch: credit is lost because a mismatch was not fixed before the 20th; it was not fixed because it sat in a list of hundreds; the list is long because every mismatch looks alike; they look alike because tools report a count, never a cost; tools report a count because they were built to match rows, and matching was the hard part in 2017. It no longer is.

### 5.4 The rules that shape the design

| Rule | What it says | Design consequence for Hisaab |
|---|---|---|
| Credit follows GSTR-2B (Section 16(2)(aa), enforced through Rule 88D and Form DRC-01C) [F13] | A claim above 2B triggers an intimation with seven days to answer | The liability view shows claimed credit against 2B before filing, and flags the gap that would trigger the form |
| Rule 37 [F14] | Reverse credit on invoices unpaid at 180 days | The gap finder ages unpaid invoices and prices the reversal as the date approaches |
| Rule 37A [F15] | Reverse by 30 September where the supplier has not paid tax; 18% interest otherwise | Supplier-side exceptions carry a second deadline and an interest line |
| Rate change of 22 Sep 2025 [F16] | 12% and 28% slabs removed | The rate master is dated; an invoice is checked against the rate in force on its date |
| E-invoicing [F17, F18] | Mandatory above ₹5 Cr; 30-day reporting at ₹10 Cr and above | Sales-side check: every invoice above the threshold has an IRN, reported within 30 days |
| IMS and the GSTR-3B locks [F10, F11, F12] | The return is filled from the portal's own data | Matching itself is done by the portal. The room left for a product is deciding what to act on |

### 5.5 Who feels it

A team reading of published practitioner accounts and vendor guides, not survey data; shown on slide 2 as a heat grid and labelled so.

| Stakeholder | Invoice | Payment | Return | Notice |
|---|---|---|---|---|
| Accountant | High (4) | Medium (3) | Very high (5) | High (4) |
| CFO or owner | Low (1) | Medium (3) | High (4) | Very high (5) |
| Supplier | Low (2) | High (4) | Medium (3) | Low (2) |
| CA firm | Low (2) | Low (1) | Very high (5) | Very high (5) |

The one sourced measure of the pain: 37% of MSME respondents in Deloitte's GST survey still named ITC matching as a challenge in 2024, down from 64% in 2023 [F21]. The fall shows the portal's tools work; the remaining third shows where they stop.

---

## 6. Competition and substitutes

### 6.1 What exists

| Option | What it is | Price | Where it stops |
|---|---|---|---|
| GST portal with IMS | The government's own invoice matching: accept, reject, pending [F10] | Free | No link to the bank or the ledger; no rate check; no ranking |
| TallyPrime | The ledger most small firms already use, with a GSTR-2B reconciliation screen [S14] | ₹22,500 one-time, or ₹750 a month [F22] | Lists mismatches by status; does not price or rank them |
| Compliance SaaS (ClearTax, Zoho Books, Suvit and others) | Cloud matching of the purchase register to 2B, filing, supplier follow-up [S15, S16] | ₹899 to ₹3,599 a month for Zoho Books; ₹12,000 a year for Suvit [F23, F24] | Faster matching and filing; exceptions still arrive as a list |
| Spreadsheet with a CA firm | VLOOKUP on invoice number, then phone calls | The CA's fee | Manual, slow, depends on one person |

### 6.2 Feature parity (cells to be confirmed at V0 from each vendor's own page)

| Feature | Portal with IMS | TallyPrime | Compliance SaaS | Sheet with a CA | Hisaab (design) |
|---|---|---|---|---|---|
| Matches invoice to return | Yes | Yes | Yes | Partial | Yes |
| Three-way match with bank and ledger | No | Partial | Partial | Partial | Yes |
| Verifies rate by HSN and date | No | Partial | Partial | No | Yes |
| Finds duplicates and near duplicates | No | Partial | Partial | No | Yes |
| Flags anomalies with reasons | No | No | Partial | No | Yes |
| Prices each exception in rupees | No | No | No | No | Yes |
| Ranks by deadline and names an owner | No | No | No | No | Yes |

On the slide, Yes is level 5, Partial level 3, No level 1, Not stated level 1 with the text "n/s". The Hisaab column is headed "Hisaab (design)" because it is a design, not a product.

### 6.3 Porter's five forces on Indian GST compliance software

| Force | Reading | Why |
|---|---|---|
| Rivalry | High | Tally, Zoho, ClearTax, Suvit and a dozen more compete on matching and filing |
| Threat of substitutes | High | The portal itself matches for free, and each portal upgrade removes a paid feature |
| Buyer power | High | Low switching cost between cloud tools; price points under ₹1,000 a month |
| Supplier power | Low | Open-source stack; public return formats |
| Threat of entry | Medium | Easy to build a matcher; hard to earn an accountant's trust |

The conclusion for the argument: competing on matching means competing with a free government product. The defensible position is the layer above the match.

---

## 7. HISAAB: the solution

### 7.1 The spine (engineered with the `case-competition-deck` skill; binding)

- **One-line product:** Hisaab reconciles invoices, payments, ledgers and GST returns, then gives every mismatch a rupee value, an owner and a date, so a finance team fixes the costly ones first.
- **The obvious build (what most teams will show):** a smarter invoice matcher with fuzzy matching and a dashboard of matched and unmatched counts.
- **The contrarian thesis:** row matching is already free. What nobody ranks is the exception queue: which mismatch blocks credit, whose fault it is, by which date it must be fixed, and what it costs if it is not. Hisaab treats the match as a solved first step and reconciles the rupee and the deadline. This is the brief's own phrase, "go beyond basic matching", taken literally.
- **Scope:** India GST first. Purchase side: purchase register against GSTR-2B against bank payments. Sales side: sales register against GSTR-1 and e-invoice records against receipts. The ledger is the third leg on both sides. Income-tax TDS matching against Form 26AS is the named next step and is not designed here.
- **Moneyshot (slide 4, the only one):** ₹54 lakh of input tax credit at risk for every ₹100 Cr of purchases, base case, with the ₹18 lakh to ₹90 lakh band (§12).
- **Foreshadowing seed (slide 2, panel B1):** the table of today's tools, where every row ticks "matches rows" and none ticks "prices the exception" or "ranks by deadline".
- **Symmetric alternatives (slide 7, panel A1):** five options on the same seven rows (§6.2).
- **Double synthesis:** slide 5 closes "Conclusively"; slide 7 closes "Therefore".

### 7.2 Capability map (one module per brief requirement)

| Brief ID | Module | Method | Output |
|---|---|---|---|
| PS2-C1 | Three-way match engine | Tier 1 exact keys (GSTIN, normalised invoice number, date, taxable value). Tier 2 fuzzy keys (edit distance on the number, amount tolerance, date window). Tier 3 a pair classifier on pair features for the residue | Match status and confidence |
| PS2-C2 | Exception classifier | Field-level diff with tolerance rules; near-duplicate detection on GSTIN, amount, date window and normalised number | Typed exception: amount, date, invoice ID, tax value, duplicate |
| PS2-C3 | Rate verifier | Dated HSN and SAC rate master; expected tax = taxable value × rate in force on the invoice date; CGST plus SGST against IGST by place of supply | Rate error, tax-head error, rounding error |
| PS2-C4 | Gap finder | Anti-joins in both directions with ageing buckets of 0 to 30, 31 to 60, 61 to 90 and over 90 days; the 180-day clock | In books not in 2B; in 2B not in books; paid not booked; booked not paid |
| PS2-C5 | Pattern watch | Isolation Forest on vendor-month features, Benford first-digit test, vendor z-scores, a graph check for circular billing | Ranked anomalies, three reasons each |
| PS2-C6 | Liability estimator | Output tax less eligible, 2B-backed credit by period; interest on shortfall; reversal exposure under Rules 37 and 37A | Net payable by tax head, low to high band |
| PS2-C7 | Hisaab console | Four tiles, a rupees-at-risk queue, vendor scorecards, a filing-date countdown | The slide 4 mockup |
| PS2-D | Dataset design | §8 | Data dictionary and injection matrix |

### 7.3 The pricing layer (the USP)

For each exception:

**Rupees at risk = tax amount × P(blocked) + interest exposure + working-capital cost**

- P(blocked) is the chance the credit is not available at the next return, set by exception type and by the supplier's filing record.
- Interest exposure = tax × P(blocked) × 18% × months to correction ÷ 12, where a claim would have to be reversed [F15].
- Working-capital cost = tax × cost of funds × months of delay ÷ 12.

Worked example, one invoice (est.): taxable value ₹10,00,000 at 18%, so tax ₹1,80,000. The supplier has not filed; P(blocked) 0.5. Blocked credit 1,80,000 × 0.5 = ₹90,000. Interest 1,80,000 × 0.5 × 18% × 6 ÷ 12 = ₹8,100. Working capital 1,80,000 × 10% × 2 ÷ 12 = ₹3,000. Rupees at risk = ₹1,01,100.

Each exception also carries a root cause (our books, the supplier, the bank, timing), an owner, and the last useful date: the last day on which fixing it still helps the current return.

### 7.4 The loop the user sees

1. **Ingest:** books, bank file, GSTR-2B, rate master.
2. **Match:** exact, then fuzzy, then classifier.
3. **Classify:** twelve exception types, one root cause each.
4. **Price:** rupees at risk and the last useful date.
5. **Act:** a ranked queue, a drafted supplier nudge, the liability view, and "Ask Hisaab": a spoken question in Hindi or English answered from the engine's own numbers (§9.5).

---

## 8. Synthetic dataset design (design only; nothing is generated before shortlisting)

Twelve months, April 2025 to March 2026, so the set straddles the 22 Sep 2025 rate change [F16] and the rate verifier has real work to do.

| Entity | Rows (design) | Key fields |
|---|---|---|
| vendor | 400 | gstin, state, filing_regularity, risk_tier |
| customer | 250 | gstin, state |
| purchase_invoice | 36,000 | invoice_no, vendor_gstin, date, hsn, taxable_value, rate, cgst, sgst, igst |
| sales_invoice | 24,000 | invoice_no, customer_gstin, date, hsn, taxable_value, rate, tax heads, irn |
| bank_transaction | 58,000 | txn_id, date, counterparty, amount, reference |
| ledger_entry | 1,20,000 | voucher_no, date, account, debit, credit, invoice_ref |
| return_2b | 35,000 | supplier_gstin, invoice_no, date, taxable_value, tax heads, period |
| rate_master | 200 | hsn_or_sac, rate, effective_from, effective_to |
| label (hidden from the models) | 60,000 | record_id, discrepancy_type, injected_field, true_value |

Injected discrepancies: 12.0% of 60,000 invoices, which is 7,200 records; 88.0%, or 52,800, are clean.

| ID | Discrepancy | Rate | Records | Family on slide 5 | Caught by |
|---|---|---|---|---|---|
| D01 | Taxable amount differs between books and return | 1.5% | 900 | Amount and tax value | PS2-C2 |
| D02 | Tax value differs, taxable value agrees | 1.0% | 600 | Amount and tax value | PS2-C2, C3 |
| D03 | Wrong rate: old slab used after 22 Sep 2025 | 1.2% | 720 | Rate and tax head | PS2-C3 |
| D04 | Wrong tax head: IGST against CGST plus SGST | 0.6% | 360 | Rate and tax head | PS2-C3 |
| D05 | Date shifted across a month end | 1.2% | 720 | Date shift | PS2-C2 |
| D06 | Invoice number variant (prefix, leading zeros, slash) | 1.5% | 900 | Number variant | PS2-C1 |
| D07 | Exact duplicate booking | 0.6% | 360 | Duplicates | PS2-C2 |
| D08 | Near duplicate: same vendor and amount, date within 3 days, different number | 0.5% | 300 | Duplicates | PS2-C2 |
| D09 | In books, missing in 2B | 1.5% | 900 | Missing or unpaid | PS2-C4 |
| D10 | In 2B, missing in books | 0.8% | 480 | Missing or unpaid | PS2-C4 |
| D11 | Paid and not booked, or booked and unpaid beyond 180 days | 0.8% | 480 | Missing or unpaid | PS2-C4 |
| D12 | Anomalous pattern: round-value burst from a new vendor, circular billing ring | 0.8% | 480 | Anomalous pattern | PS2-C5 |

Checks: rates sum to 12.0%; records sum to 7,200. Seven families: amount and tax value 2.5% (1,500); rate and tax head 1.8% (1,080); date shift 1.2% (720); number variant 1.5% (900); duplicates 1.1% (660); missing or unpaid 3.1% (1,860); anomalous pattern 0.8% (480). Console tiles: Matched 52,800; Unmatched 1,860 (D09 to D11); Duplicate 660 (D07, D08); Discrepant 4,680 (the rest). 1,860 + 660 + 4,680 = 7,200.

The injection rates are design choices (assumption A09), not estimates of real books, and the deck says so. Leakage control: the label table is held out; the pair classifier trains on eight months and is tested on four; vendors in the test months include 20% unseen in training.

---

## 9. Methods, architecture and stack

### 9.1 Why a layered matcher (team judgement on a 1 to 5 scale)

| Option | Precision | Recall | Explainable | Speed | Build time | Verdict |
|---|---|---|---|---|---|---|
| Rules only (exact keys) | 5 | 2 | 5 | 5 | 5 | Fails recall: misses number variants and date shifts |
| Fuzzy only | 3 | 4 | 3 | 4 | 4 | Fails precision: false matches between similar invoices |
| Layered: rules, then fuzzy, then classifier (ours) | 5 | 5 | 4 | 4 | 3 | Chosen |
| LLM matcher | 4 | 4 | 2 | 1 | 3 | Fails speed and audit: slow on 60,000 rows, hard to explain to an auditor |

### 9.2 Decision logic

1. Exact key match on GSTIN, normalised invoice number, date and taxable value: **Matched**.
2. Otherwise fuzzy score at or above 0.92: **Matched, flagged for a glance**.
3. Otherwise classifier probability at or above 0.80: **Suggested match**, shown with the top features.
4. Otherwise: **Human review**, ranked by rupees at risk.

The thresholds 0.92 and 0.80 are design values, to be tuned on the injected labels.

### 9.3 Pipeline (six stages)

| Stage | Components |
|---|---|
| Ingest | Books CSV; bank file; GSTR-2B JSON |
| Normalise | GSTIN check; invoice number clean; date and period |
| Match | Exact keys; fuzzy keys; pair classifier |
| Verify tax | Rate master; tax head; rounding |
| Detect | Duplicates; gaps; anomalies |
| Price and act | Rupees at risk; owner and date; queue and API |

Store: DuckDB tables for books, bank, returns, rate master, labels and exceptions.

### 9.4 Stack

| Layer | Choice | Alternative rejected | Why |
|---|---|---|---|
| Dataframes | Polars | pandas alone | Faster joins on 60,000 rows |
| Store | DuckDB | PostgreSQL first | In-process, no setup |
| Fuzzy match | RapidFuzz | Hand-written rules | Tested edit-distance scoring |
| Models | LightGBM, Isolation Forest (scikit-learn) | A deep network | Suits small tabular data |
| Explanation | SHAP | No explanation | Reasons on every exception |
| API | FastAPI | Flask | Typed and async |
| Console | Next.js with Recharts | Streamlit | A real product interface |
| Speech | Sarvam Saaras v3 (speech to text), Sarvam Bulbul v3 (text to speech) | A general-purpose speech API | Built for Indian languages and code-mixed Hindi and English |
| LLM | Sarvam 105B or Gemini, swappable | One fixed model | One tool-calling interface, so either model can serve and the other is the fallback |

The reconciliation core (Python, Polars, DuckDB, RapidFuzz, LightGBM, scikit-learn, SHAP, FastAPI, Next.js, Recharts) is open source and runs on one laptop with no network. The voice and LLM layer is the only part that calls an outside service, and the product works without it.

On slide 6 the table is compressed to seven rows: Data (Polars, DuckDB); Match (RapidFuzz, LightGBM); Anomaly (Isolation Forest); Explain (SHAP); API and console (FastAPI, Next.js, Recharts); Speech (Sarvam Saaras v3, Bulbul v3); LLM (Sarvam 105B or Gemini).

### 9.5 The voice and grounded-LLM layer (mandatory in the design)

**The rule: the model never computes money.** It understands the question, chooses a tool, and reads back a number the deterministic engine already calculated. It does not decide a match, compute tax, or price an exception.

| Stage | What happens | Component |
|---|---|---|
| Listen | The accountant speaks in Hindi, English or a mix; the browser detects the end of speech | Client-side voice activity detection |
| Transcribe | Audio becomes text | Sarvam Saaras v3 |
| Think | The transcript goes to the LLM with a fixed list of tools; the model picks a tool and its arguments | Sarvam 105B or Gemini, behind one interface |
| Ground | The tool runs against the reconciliation engine and returns numbers and a short summary | The same services the console uses |
| Speak | The reply is phrased from the tool result and read aloud; the text is shown as well | Sarvam Bulbul v3 |

Design details:
- **Swappable models.** The LLM sits behind one `chat(messages, tools)` interface. Sarvam 105B and Gemini implement it. A configuration value picks the primary; the other is the fallback.
- **Degradation ladder.** Primary LLM, then the second LLM, then a typed query with no model at all. If speech output fails, the answer is shown as text. The reconciliation itself never depends on the model.
- **Tools the model may call (design):** `get_exceptions(rank_by, limit)`, `get_supplier_position(gstin)`, `get_liability(period)`, `explain_exception(id)`, `draft_supplier_nudge(id)`, `get_filing_countdown()`. Each returns engine numbers and a one-line spoken summary.
- **Where a language model appears in Hisaab, and only there:** answering a spoken or typed question; explaining an exception in plain Hindi or English; drafting the supplier nudge. Every one of these is grounded in a tool result.
- **Indian numerals.** Spoken quantities such as "dhai lakh" or "derh crore" are resolved by a deterministic parser before they reach a tool, and an unrecognised phrase is rejected, not guessed.
- **Barge-in.** If the user speaks while the reply is playing, playback stops and a new turn opens.

Example turn (illustrative): "Kis supplier ka credit sabse zyada atka hai?" The model calls `get_exceptions(rank_by="rupees_at_risk", limit=1)`; the engine returns the supplier and the amount; the reply names both and the days left before filing.

---

## 10. Evaluation plan and design targets

| Measure | Target | Measured on |
|---|---|---|
| Match precision | at least 0.98 | Declared matches against true pairs |
| Match recall | at least 0.95 | True pairs found |
| Duplicate detection F1 | at least 0.95 | D07 and D08 labels |
| Rate and tax-head error recall | at least 0.99 | D03 and D04 labels; the check is deterministic |
| Anomaly precision in the top 100 | at least 0.60 | D12 labels |
| Run time | 50,000 invoices in under 60 seconds on a laptop | Wall clock |
| Credit resolved before the return date | 80% of rupees at risk (A08) | Simulated queue on the test months |

Every row is a target. The prototype round would report the measured value beside each.

---

## 11. Market and unit economics (bottom-up, est.)

| Tier | Count | Basis | Price | Value a year |
|---|---|---|---|---|
| TAM | 1,48,70,332 normal taxpayers [F07] | Everyone who claims credit | ₹12,000 a year | ₹17,844 Cr |
| SAM | 13,14,362 e-invoice GSTINs [F19] | Turnover above ₹5 Cr: enough invoices for ranking to matter | ₹12,000 a year | ₹1,577 Cr |
| SOM, year 3 | 6,572 GSTINs | 0.5% of SAM (assumption A10) | ₹12,000 a year | ₹7.9 Cr |

Price basis (assumption A11): ₹12,000 a year sits beside Suvit at ₹12,000 a year [F24], Zoho Books Standard at ₹899 a month, which is ₹10,788 a year [F23], and Tally rental at ₹750 a month, which is ₹9,000 a year [F22]. Arithmetic: 1,48,70,332 × 12,000 = ₹17,844 Cr; 13,14,362 × 12,000 = ₹1,577 Cr; 6,572 × 12,000 = ₹7.9 Cr. Channel: 98,967 registered CA firms [F25], each serving many GSTINs. Cost to serve is near zero per run because the stack is open source and the heavy step is a join.

---

## 12. The impact case

### 12.1 Assumptions register

| ID | Assumption | Value | Basis |
|---|---|---|---|
| A01 | Annual taxable purchases of the reference firm | ₹100 Cr | Chosen so the result reads per ₹100 Cr |
| A02 | Average GST rate on purchases | 18% | The standard slab after 22 Sep 2025 [F16] |
| A03 | Share of input tax credit unreconciled at a return date | 1% low, 3% base, 5% high | An assumption band. No primary figure was found; the deck says "assumption band" |
| A04 | Interest on credit that must be reversed | 18% a year | Rule 37A [F15] |
| A05 | Months before a wrong claim is corrected | 6 | Assumption |
| A06 | Cost of working capital | 10% a year | Set above the 8.97% average on outstanding bank loans [F26], since small firms pay more; assumption |
| A07 | Months a credit is deferred when a supplier files late | 2 | Assumption |
| A08 | Share of at-risk credit resolved before the return date with a ranked queue | 80% | Design target |
| A09 | Injection rates in the synthetic dataset | §8 | Design choice |
| A10 | Share of SAM reached in year 3 | 0.5% | Assumption |
| A11 | Price | ₹12,000 a year per GSTIN | Comparables in §11 |

### 12.2 The moneyshot arithmetic (reference firm, est.)

| Line | Formula | Low | Base | High |
|---|---|---|---|---|
| Input tax credit a year | A01 × A02 | ₹18 Cr | ₹18 Cr | ₹18 Cr |
| **Credit at risk a year** | × A03 | ₹18 lakh | **₹54 lakh** | ₹90 lakh |
| Interest exposure | at risk × A04 × A05 ÷ 12 | ₹1.62 lakh | ₹4.86 lakh | ₹8.10 lakh |
| Working-capital cost | at risk × A06 × A07 ÷ 12 | ₹0.30 lakh | ₹0.90 lakh | ₹1.50 lakh |
| Credit protected at the design target | at risk × A08 | ₹14.4 lakh | ₹43.2 lakh | ₹72.0 lakh |

Sensitivity: the result moves one for one with A03, so the band is shown on the slide beside the base figure. A02 at 12% of purchase value would give ₹36 lakh in the base case; at 18% it is ₹54 lakh.

### 12.3 Risk register

| ID | Risk | P | I | Mitigation |
|---|---|---|---|---|
| R1 | Synthetic data behaves unlike real books | M | H | Test on 2 real ledgers under consent |
| R2 | The fuzzy tier makes false matches | M | H | 0.92 threshold, then a human tier |
| R3 | The rate master goes stale | M | M | Dated rate table with a change log |
| R4 | Return or portal formats change | H | M | One adapter layer per format |
| R5 | Invoices hold personal data | L | H | Synthetic only now; DPDP review first |
| R6 | Scope creep in the prototype round | M | M | Cut order fixed: anomaly, then liability |

### 12.4 Roadmap and validation plan

| Horizon | What is true at the end |
|---|---|
| Prototype round | All 7 capabilities run on synthetic data, with measured precision and recall |
| 90 days | Two CA firms run Hisaab on real books under consent |
| 12 months | TDS and Form 26AS matching added |

Customer Validation Plan: 10 accountants, 5 CA firms, 5 CFOs or owners. The question each interview settles: does a queue ranked by rupees change what gets fixed before the 20th. No interview has been run, and none is claimed.

---

## 13. Questions a judge will ask, with answers

| # | Question (reported) | Answer |
|---|---|---|
| 1 | The portal already reconciles. Why build this? | It matches rows. It does not link the bank or the ledger, check the rate, or say which of several hundred mismatches to fix in the six days before filing. Hisaab starts where the portal stops |
| 2 | Where does 3% come from? | It is an assumption band of 1% to 5%, stated as such. We found no primary figure. The result scales one for one with it, which is why the slide shows the whole band |
| 3 | Is anything built? | No. This round asked for the idea. Every performance number is a target, and the dataset design gives exact labels to measure against in the prototype round |
| 4 | Why not use an LLM to match? | Speed and audit. Sixty thousand rows need a join, and an auditor needs a rule or a feature list. A layered matcher gives both |
| 5 | How is P(blocked) set? | By exception type and the supplier's filing record in the data: a supplier that files late in most months gets a higher value. It is tuned on the labels |
| 6 | Who pays? | Firms above ₹5 Cr turnover, 13.14 lakh GSTINs, and CA firms as the channel. ₹12,000 a year is in line with Suvit, Zoho Books and Tally rental |
| 7 | What about income tax? | TDS against Form 26AS is the named next step. The same pipeline applies; it is out of scope for this round |
| 8 | What if the Table 4 lock arrives? | Then claimed credit equals GSTR-2B by construction, and the only way to protect credit is to get the supplier side fixed before the 14th. A ranked queue matters more, not less |
| 9 | Why synthetic data? | The brief requires it, and injected errors give exact ground truth. Real ledgers come in the 90-day step under consent |
| 10 | What is the single thing you would cut? | Anomaly detection first, then the liability view. The match, the classifier and the pricing layer are the product |
| 11 | What does the language model do, then? | It listens, picks a tool and reads back the engine's number, in Hindi or English. It never computes money or decides a match. Sarvam 105B and Gemini sit behind one interface, so either can serve and the other is the fallback |
| 12 | What if the model or the speech service is down? | The ladder steps down: second model, then a typed query with no model, and text if speech fails. Reconciliation does not depend on any of it |

---

# PART II: THE DECK (v3, 3 Oct 2026: overlay on the organisers' template already imported in Figma)

## 13A. FINAL DIRECTION (v4, overrides §14 to §21 wherever they differ). READ THIS FIRST

**What the user fixed last.** Use the Figma file `H3Zr4ESaceYlV54zvpkgZi`. Keep only the organisers' Consilium cover (slide `1:42`) and delete every other slide. Slide 2 is **our own cover**, built the usual consulting-grade way. The backgrounds are ours to design; only the **organisers' headers and their order** must be kept: Problem Statement, Team Name, Solution, Architecture, Technology Used, Feature / USP. Then Appendix and Thank You. Deliver in batches.

### 13A.1 The 10 slides

| Deck position | Figma slide name | Header on the slide | Copy to use | File | Built by |
|---|---|---|---|---|---|
| 1 | `FINTECHSTICO` | the organisers' cover image, untouched | none | none | nobody |
| 2 | `HISAAB` | our cover, no header skeleton | §13A.4 | `s02.js` | main |
| 3 | `Problem Statement` | `Problem Statement` | §17 "Slide 2" | `s03.js` | sub-agent |
| 4 | `Team Name` | `Team Name` + `TEAM MEMBERS` | §17 "Slide 3", with §13A.5 | `s04.js` | main |
| 5 | `Solution` | `Solution` | §17 "Slide 4" | `s05.js` | sub-agent |
| 6 | `Architecture` | `Architecture` | §17 "Slide 5" | `s06.js` | sub-agent |
| 7 | `Technology Used` | `Technology Used` | §17 "Slide 6" | `s07.js` | sub-agent |
| 8 | `Feature / USP` | `Feature / USP` | §17 "Slide 7" | `s08.js` | sub-agent |
| 9 | `Appendix` | `Appendix` | §17 "Slide 8" | `s09.js` | sub-agent |
| 10 | `Thank You` | `Thank You` | §17 "Slide 9" | `s10.js` | main |

The `V.s2` to `V.s8` keys in `values.js` keep the §17 numbering (`V.s2` is Problem Statement, `V.s4` is Solution, and so on). Only the file names, the `getNodeByIdAsync("S<position>")` placeholder and the first argument of `hdr()` use the deck position. On our cover the brief map shows deck positions: reconciliation, mismatch, tax verification, missing, anomaly `5, 6`; tax liability `5, 8`; dashboard `5`; dataset `6`.

### 13A.2 Skeleton (our design; replaces §15.1 and §15.3; §17's geometry is unchanged)

- Slide background: solid cream `C.cream`. No template image, no `TPL:` layer.
- Ribbon across the top (x64, y40, h60), six tags that are the organisers' six headers; the active tag is the current slide; Appendix and Thank You have no active tag. A wire runs to x1856.
- Header: the organisers' words, Poppins ExtraBold 56pt, left at x64, y112, node name `HEADER`. On Team Name, `TEAM MEMBERS` follows it in Poppins Bold 26pt, primary.
- Rule: x64, y226, 1792 × 3, ink.
- FINDING band at y244, content from **y352** on every slide, so-what at y966 h64, source line at y1046 across 1792. All x, y, w, h in §17 apply as written.

Extras block: use this **in place of §18.2** (same `finding` and `browser` functions as §18.2; copy those two from there):
```js
// ===== FINTECHSTICO EXTRAS v4 (own design, organisers' headers) =====
const RIB7 = { labels: ["PROBLEM STATEMENT", "TEAM", "SOLUTION", "ARCHITECTURE", "TECHNOLOGY USED", "FEATURE / USP"], widths: [352, 130, 192, 262, 316, 280] };
const HDR = { 3: "Problem Statement", 4: "Team Name", 5: "Solution", 6: "Architecture", 7: "Technology Used", 8: "Feature / USP", 9: "Appendix", 10: "Thank You" };
function tplClear(s) { s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.cream }]; }
function head(s, n) { const act = n >= 3 && n <= 8 ? n - 3 : -1;
  const endX = buildRibbon(s, act, RIB7.labels, RIB7.widths, 64, 40, 60); addWireH(s, endX - 10, 1856, 70, C.ink, 2.5);
  const h = TL(s, 64, 112, 56, HDR[n], { family: "Poppins", style: "ExtraBold" }); h.name = "HEADER";
  if (n === 4) { const sub = TL(s, 64 + h.width + 28, 144, 26, "TEAM MEMBERS", { color: C.primary }); sub.name = "SUBHEADER"; }
  const r = addRect(s, 64, 226, 1792, 3, C.ink); r.name = "RULE"; return 226; }
function hdr(s, n, findingText, source) { tplClear(s);
  const ry = head(s, n); finding(s, ry + 18, findingText);
  const src = addText(s, "Inter", "Semi Bold", 14, C.primary, source, 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
  return 352; }
```
In §18.1 skip the League Spartan and Roboto font-loader line (not needed); keep the rest. Delete the stale `slides/s03.js`; rename nothing else.

### 13A.3 Figma setup (replaces §18.5's script; the user asked for the deletion)

```js
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const flat = () => { const a = []; for (const r of grid.children) for (const s of r.children) a.push(s); return a; };
for (const s of flat()) if (s.id !== "1:42") s.remove();
for (let k = 0; k < 9; k++) figma.createSlide();
let all = flat();
while (all.length > 10) { const e = all.slice().reverse().find(s => s.id !== "1:42" && s.children.length === 0); if (!e) break; e.remove(); all = flat(); }
const names = ["FINTECHSTICO","HISAAB","Problem Statement","Team Name","Solution","Architecture","Technology Used","Feature / USP","Appendix","Thank You"];
all.forEach((s, i) => { if (names[i]) s.name = names[i]; });
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins","Bold"],["Poppins","ExtraBold"],["Inter","Semi Bold"],["Inter","Bold"]];
return { count: all.length, first: all[0].id, ids: all.map(s => s.id), coverKids: (await figma.getNodeByIdAsync("1:42")).children.length, fontsOk: need.map(([f,st]) => fonts.some(x => x.fontName.family===f && x.fontName.style===st)) };
```
Expected: `count` 10, `first` `1:42`, `coverKids` 1, `fontsOk` all true. Write `slide_ids.json` as `{"S2": ids[1], ..., "S10": ids[9]}`. In §18.6 the loops run over `02` to `10` and the bind range is 2 to 10.

### 13A.4 Our cover (deck position 2, `s02.js`)

Start from the existing `slides/s01.js` (it passed the mock): copy it to `s02.js`, change `"S1"` to `"S2"`, and make these edits. Full-bleed `primaryDeep`.
- Chip top left: `FINTECHSTICO V7.0 | CONSILIUM'26 | NSUT`.
- Title: `HISAAB`, Poppins ExtraBold 112pt, white. Subtitle, 30pt gold: `Intelligent Tax Reconciliation: Problem Statement 2`.
- Thesis card (layered, white): gold-on-maroon is not used here; the two lines stay as written in `s01.js` (`Every mismatch gets a rupee value, an owner and a date.` and the sentence under it). Remove the `HISAAB` line and the PS chip from inside the card, since the title now carries them.
- Brief map table on the right with the deck positions from §13A.1.
- In place of the logo slots and the flow strip: a `TEAM IDEAFORGE` label and `teamTable(s, 64, 800)` (Team Members, Institution, Role), per the standing cover rule. No KPI-card row.
- Bottom line, white 22pt: `An idea-stage submission: every performance figure is a design target and every rupee impact is a worked estimate.`

### 13A.5 Team Name slide (deck position 4)

Use §17 "Slide 3" with every y reduced by 59: chip and table at y352; Row B panels at y534 with h420. `hdr(s, 4, V.s3.finding, V.s3.source)`.

### 13A.6 Validator and delivery

- V1 (§18.8): delete the `templateLayer` line and the `headerFont` line, and change the `aboveUnderline` test to `if(KEY.test(c.name)&&c.y<top+3)`. Sweeps cover S2 to S10; V7 checks 10 slides with the names in §13A.1 and that slide 1 still has exactly one child.
- **Deliver in batches, reporting to the user after each with the Figma link and what was built:** batch 1 = positions 2, 3, 4 (our cover, Problem Statement, Team Name); batch 2 = positions 5, 6, 7 (Solution, Architecture, Technology Used); batch 3 = positions 8, 9, 10 (Feature / USP, Appendix, Thank You). Sub-agents for all six content slides are dispatched together at the start so batches 2 and 3 are ready when their turn comes.
- Skill use: every slide author calls the `case-competition-deck` skill in slide mode first (§16, §18.4); the main agent runs critique mode after batch 3 if time allows.

---

## 13B. COPY-PASTE BUILD (source of truth for execution; no thinking required)

**Rule.** Every file below is written to disk exactly as printed, with the Write tool. No sub-agent writes slide code. The tables in §17 are background only; where they differ from this section, this section wins. Run the steps in order.

### Step 1. Reconcile `preamble.js` and `values.js` (Bash, from `fintechstico-submission/deck`)

```bash
cd "/c/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/fintechstico-submission/deck" && rm -f slides/s01.js slides/s02.js slides/s03.js && python - <<'EOF'
import io
p = "preamble.js"; t = io.open(p, encoding="utf-8").read()
m = "// ===== FINTECHSTICO EXTRAS ====="
assert t.count(m) == 1
t = t[:t.index(m)].rstrip("\n") + "\n"
assert t.count("const TEAM=[];") == 1
t = t.replace("const TEAM=[];", 'const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Aakriti Aggarwal","Maharaja Agrasen Institute of Management Studies","Member"]];')
t += io.open("extras_v4.js", encoding="utf-8").read()
io.open(p, "w", encoding="utf-8").write(t)
v = io.open("values.js", encoding="utf-8").read()
add = io.open("values_add.js", encoding="utf-8").read()
assert v.count("  s2: {") == 1
v = v.replace("  s2: {", add + "  s2: {")
old = "one pipeline, seven capabilities, labelled errors to measure against, and a model that never computes money"
assert v.count(old) == 1
v = v.replace(old, "one pipeline, seven capabilities, labelled errors, and a model that never computes money")
io.open("values.js", "w", encoding="utf-8").write(v)
print("ok", len(t), len(v))
EOF
```
Before running it, Write these two helper files into `fintechstico-submission/deck/`.

`extras_v4.js`:
```js
// ===== FINTECHSTICO EXTRAS v4 (own design, organisers' headers) =====
const RIB7 = { labels: ["PROBLEM STATEMENT", "TEAM", "SOLUTION", "ARCHITECTURE", "TECHNOLOGY USED", "FEATURE / USP"], widths: [352, 130, 192, 262, 316, 280] };
const HDR = { 3: "Problem Statement", 4: "Team Name", 5: "Solution", 6: "Architecture", 7: "Technology Used", 8: "Feature / USP", 9: "Appendix", 10: "Thank You" };
function tplClear(s) { s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.cream }]; }
function head(s, n) { const act = n >= 3 && n <= 8 ? n - 3 : -1;
  const endX = buildRibbon(s, act, RIB7.labels, RIB7.widths, 64, 40, 60); addWireH(s, endX - 10, 1856, 70, C.ink, 2.5);
  const h = TL(s, 64, 112, 56, HDR[n], { family: "Poppins", style: "ExtraBold" }); h.name = "HEADER";
  if (n === 4) { const sub = TL(s, 64 + h.width + 28, 144, 26, "TEAM MEMBERS", { color: C.primary }); sub.name = "SUBHEADER"; }
  const r = addRect(s, 64, 226, 1792, 3, C.ink); r.name = "RULE"; return 226; }
function finding(s, y, text) { const f = layered(s, 64, y, 1792, 92, C.white, "CARD: finding");
  addChip(f, 16, 24, 150, 44, "FINDING", C.primary, C.white, 22);
  const t = addText(f, "Poppins", "Bold", 28, C.ink, text, 186, 0, 1590, 80, "LEFT", undefined, true); t.name = "HEADLINE";
  while (t.height > 86 && t.fontSize > 24) { t.fontSize = t.fontSize - 1; }
  if (t.height > 86) warnings.push("finding over 2 lines: " + text.slice(0, 40));
  t.y = Math.max(3, (92 - t.height) / 2); return f; }
function hdr(s, n, findingText, source) { tplClear(s);
  const ry = head(s, n); finding(s, ry + 18, findingText);
  const src = addText(s, "Inter", "Semi Bold", 14, C.primary, source, 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
  return 352; }
function browser(p, x, y, w, h, title) { const f = addFrame(p, x, y, w, h, C.white, C.ink, 2.5, "CARD: mock " + title);
  addRect(f, 0, 0, w, 40, C.primaryDeep, C.ink, 2);
  [16, 40, 64].forEach((cx, i) => addEllipse(f, cx, 12, 16, 16, [C.alert, C.accent, C.good][i], C.ink, 1.5));
  addText(f, "Inter", "Bold", 22, C.white, title, 96, 0, w - 112, 40, "LEFT", "CENTER", false); return f; }
```

`values_add.js`:
```js
  s8: {
    finding: "Every figure in this deck traces to one of 20 sources or 11 stated assumptions; nothing is built, so every performance number is a design target",
    sowhat: "the 1% to 5% band is assumed, n/s cells were not stated on public pages, and no interview has been run",
    source: "Source: Team IdeaForge research notes and verification log, 3 Oct 2026" },
  trend: { labels: ["FY21", "FY22", "FY23", "FY24", "FY25"], evasion: [0.49, 0.73, 1.32, 2.30, 2.23], itc: [0.31, 0.28, 0.24, 0.36, 0.59] },
```

### Step 2. Write the nine slide files verbatim into `fintechstico-submission/deck/slides/`

`s02.js` (our cover):
```js
{ const s = await figma.getNodeByIdAsync("S2"); s.children.slice().forEach(c => c.remove()); s.fills = [{ type: "SOLID", color: C.primaryDeep }];
addChip(s, 64, 56, 700, 56, "FINTECHSTICO V7.0 | CONSILIUM'26 | NSUT", C.accent, C.ink, 24);
addChip(s, 1416, 56, 440, 56, "TEAM IDEAFORGE", C.white, C.ink, 24);
nm(TL(s, 64, 132, 112, "HISAAB", { family: "Poppins", style: "ExtraBold", color: C.white }), "TITLE");
nm(TL(s, 64, 300, 30, "Intelligent Tax Reconciliation: Problem Statement 2", { color: C.accent }), "SUBTITLE");
const v = layered(s, 64, 372, 1080, 250, C.white, "CARD: thesis");
addChip(v, 24, 20, 260, 44, "OUR ANSWER", C.primary, C.white, 22);
T(v, 24, 84, 1032, 30, "Every mismatch gets a rupee value, an owner and a date.", { family: "Poppins", style: "Bold", color: C.primary });
T(v, 24, 144, 1032, 22, "Matching rows is already free on the GST portal. Hisaab ranks what to fix first, so input tax credit is not lost in the queue.");
addChip(s, 1180, 372, 560, 44, "WHERE THE BRIEF IS ANSWERED", C.primary, C.white, 22);
addTable(s, 1180, 432, [476, 200], ["Brief asks for", "Slide"], [["Transaction reconciliation", "5, 6"], ["Mismatch and duplicates", "5, 6"], ["Tax verification", "5, 6"], ["Missing and unmatched", "5, 6"], ["Anomaly detection", "5, 6"], ["Tax liability", "5, 8"], ["Dashboard", "5"], ["Synthetic dataset", "6"]],
  { rowH: 31, headerH: 36, name: "TABLE: brief map", align: ["LEFT", "CENTER"] });
nm(TL(s, 64, 664, 26, "TEAM IDEAFORGE", { color: C.accent }), "TEAM LABEL");
teamTable(s, 64, 712);
T(s, 64, 950, 1792, 22, "An idea-stage submission: every performance figure is a design target and every rupee impact is a worked estimate.", { color: C.white });
const src = addText(s, "Inter", "Semi Bold", 14, C.accent, "Source: Fintechstico V7.0 problem statement 2 | Team IdeaForge", 64, 1046, 1792, 20, "RIGHT", undefined, true); src.name = "SOURCE";
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

`s03.js` (Problem Statement):
```js
{ const s = await figma.getNodeByIdAsync("S3");
hdr(s, 3, V.s2.finding, V.s2.source);
const a1 = panel(s, 64, 352, 560, 292, "₹7.08 LAKH CR EVADED IN 5 YEARS");
[[V.evasion5y, "evaded, FY21 to FY25"], [V.itc5y, "of it was ITC fraud"], [V.evasionCases, "evasion cases"], [V.taxpayers, "active taxpayers"]].forEach((k, i) => {
  const f = addFrame(a1, 16 + (i % 2) * 270, 62 + Math.floor(i / 2) * 112, 258, 104, i === 1 ? C.tint : C.surfaceAlt, C.ink, 1.5, "CELL");
  TL(f, 12, 6, 34, k[0], { family: "Poppins", style: "ExtraBold", color: i === 1 ? C.alert : C.primary, maxW: 234 }); T(f, 12, 64, 234, 22, k[1]); });
const a2 = panel(s, 640, 352, 600, 292, "DETECTED, ₹ LAKH CR, BY YEAR");
lineChart(a2, 16, 62, 568, 196, [{ values: V.trend.evasion, color: C.rival, label: "Evasion 2.23" }, { values: V.trend.itc, color: C.alert, label: "ITC 0.59" }], V.trend.labels, { yMin: 0, yMax: 2.6, yTicks: [1, 2], padL: 44, padR: 190 });
RT(a2, 16, 260, 568, 22, [["ITC fraud +62% in a year, ", "R"], ["2.4 times FY23", "B"]]);
const a3 = panel(s, 1256, 352, 600, 292, "WHY CREDIT LEAKS: 3 CAUSES, 1 GAP");
[106, 300, 494].forEach(x => addLine(a3, x, 126, 300, 150, C.ink, 2.5));
[["Supplier: late or wrong", 16], ["Timing: lands next period", 210], ["Books: rate, duplicate", 404]].forEach(q => { const f = addFrame(a3, q[1], 62, 180, 64, C.white, C.ink, 2, "CARD: cause"); TB(f, 6, 0, 168, 64, 22, q[0], { family: "Inter", style: "Bold", align: "CENTER" }); });
const hub = addFrame(a3, 190, 150, 220, 48, C.primaryDeep, C.ink, 2, "CARD: hub"); TB(hub, 6, 0, 208, 48, 22, "Credit leaks", { family: "Poppins", style: "Bold", color: C.white, align: "CENTER" });
addArrow(a3, 300, 198, 300, 220, C.ink, 3, 10);
const gap = addFrame(a3, 16, 220, 568, 56, C.tint, C.primary, 3, "CARD: gap"); TB(gap, 8, 0, 552, 56, 22, "No tool states which to fix first", { family: "Poppins", style: "Bold", color: C.primary, align: "CENTER" });
const b1 = panel(s, 64, 660, 700, 294, "TODAY'S TOOLS MATCH ROWS AND STOP THERE");
const cc = v => v === "Yes" ? C.good : (v === "Part" ? C.primary : (v === "No" ? C.alert : C.ink));
addTable(b1, 16, 62, [236, 108, 108, 108, 108], ["Tool", "Matches", "Rate", "Prices", "Ranks"], V.tools2, { rowH: 36, headerH: 40, name: "TABLE: tools", align: ["LEFT", "CENTER", "CENTER", "CENTER", "CENTER"], cellColor: (r, c) => c === 0 ? C.ink : cc(V.tools2[r][c]), boldCols: [1, 2, 3, 4] });
RT(b1, 16, 256, 668, 22, [["n/s: ", "B"], ["not stated on the vendor's public page", ""]]);
const b2 = panel(s, 780, 660, 520, 294, "WHO FEELS IT, AND WHEN");
heatmap(b2, 16, 62, ["Accounts", "CFO", "Supplier", "CA firm"], ["Bill", "Pay", "Return", "Notice"], [[4, 3, 5, 4], [1, 3, 4, 5], [2, 4, 3, 2], [2, 1, 5, 5]], { labelW: 136, colW: 88, rowH: 36, headH: 40, scale: HR, min: 1, max: 5, name: "TABLE: pain" });
T(b2, 16, 256, 488, 22, "Team reading of practitioner guides");
const b3 = panel(s, 1316, 660, 540, 294, "MATCHING STILL HURTS 37% OF MSMEs");
hBars(b3, 16, 66, 508, [{ label: V.matchPain[0][0], value: V.matchPain[0][1], color: C.orange, text: V.matchPain[0][1] + "%" }, { label: V.matchPain[1][0], value: V.matchPain[1][1], color: C.alert, text: V.matchPain[1][1] + "%" }], { labelW: 184, rowH: 48, barH: 30, valueW: 70, max: 70 });
RT(b3, 16, 176, 508, 22, [["Down from 64%, yet more than 1 in 3 remain. ", ""], ["6 days to fix, 7 to answer a notice", "B"]]);
soWhat(s, 966, 64, [["The gap: ", "A"], [V.s2.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

`s04.js` (Team Name):
```js
{ const s = await figma.getNodeByIdAsync("S4");
hdr(s, 4, V.s3.finding, V.s3.source);
addChip(s, 64, 352, 360, 50, "TEAM IDEAFORGE", C.primary, C.white, 24);
addTable(s, 440, 352, [270, 520, 170, 456], ["Team Members", "Institution", "Role", "Owns in the prototype round"], [
  ["Harsh Kawatra", "Delhi Technological University", "Team Leader", "Data, match engine, console"],
  ["Aakriti Aggarwal", "Maharaja Agrasen Inst. of Mgmt Studies", "Member", "Tax rules, rates, pricing, pitch"]],
  { headerH: 50, rowH: 58, name: "TABLE: team", align: ["LEFT", "LEFT", "LEFT", "LEFT"] });
const b1 = panel(s, 64, 534, 600, 420, "WHO LEADS WHAT");
heatmap(b1, 16, 62, ["Harsh", "Aakriti"], ["Res.", "Data", "ML", "API", "UI", "Pitch"], [[3, 5, 5, 5, 5, 3], [5, 3, 3, 1, 3, 5]], { labelW: 118, colW: 74, rowH: 44, headH: 44, scale: HO, min: 1, max: 5, name: "TABLE: leads" });
T(b1, 16, 206, 568, 22, "5 leads, 3 supports, 1 not involved");
badgeList(b1, 16, 252, 568, ["Every number sourced or assumed", "Engine first, model second", "Cut order fixed in advance"], { d: 40, pitch: 52 });
const b2 = panel(s, 680, 534, 580, 420, "8 MODULES, 8 FIRST DELIVERABLES");
addTable(b2, 16, 62, [200, 76, 272], ["Module", "Owner", "First deliverable"], [
  ["Dataset", "HK", "60,000 invoices"], ["Match engine", "HK", "Exact, fuzzy tiers"], ["Exceptions", "HK", "12 typed exceptions"],
  ["Rate verifier", "AA", "Dated rate master"], ["Gap finder", "AA", "Ageing buckets"], ["Pattern watch", "HK", "Top-100 list"],
  ["Pricing", "AA", "Rupees at risk"], ["Console, voice", "Both", "Ranked queue, voice"]],
  { headerH: 40, rowH: 38, name: "TABLE: modules", align: ["LEFT", "CENTER", "LEFT"] });
const b3 = panel(s, 1276, 534, 580, 420, "PROTOTYPE ROUND IN 4 BLOCKS");
gantt(b3, 16, 62, 230, 74, ["B1", "B2", "B3", "B4"], [
  { label: "Dataset", bars: [{ s: 0, e: 1 }] }, { label: "Match engine", bars: [{ s: 0, e: 2 }] }, { label: "Rate, gaps", bars: [{ s: 1, e: 2 }] },
  { label: "Anomaly, pricing", bars: [{ s: 2, e: 3 }] }, { label: "Console, demo", bars: [{ s: 2, e: 4 }] }], { headH: 44, rowH: 52, name: "TABLE: blocks" });
T(b3, 16, 378, 548, 22, "Cut first: anomaly, then liability");
soWhat(s, 966, 64, [["Ownership: ", "A"], [V.s3.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

`s05.js` (Solution):
```js
{ const s = await figma.getNodeByIdAsync("S5");
hdr(s, 5, V.s4.finding, V.s4.source);
const a1 = panel(s, 64, 352, 1100, 250, "FIVE STEPS FROM RAW BOOKS TO A RANKED QUEUE");
flow(a1, 16, 62, 1068, 172, [{ title: "INGEST", sub: "Books, bank file, GSTR-2B" }, { title: "MATCH", sub: "Exact, fuzzy, classifier" }, { title: "CLASSIFY", sub: "12 types, one root cause" }, { title: "PRICE", sub: "Rupees at risk, last date" }, { title: "ACT", sub: "Ranked queue, Ask Hisaab" }], { gap: 36 });
const m = layered(s, 1180, 352, 676, 250, C.primaryDeep, "CARD: moneyshot");
addChip(m, 20, 16, 330, 44, "CREDIT AT RISK (EST.)", C.accent, C.ink, 22);
nm(TL(m, 20, 62, 64, V.moneyshot, { family: "Poppins", style: "ExtraBold", color: C.accent }), "MONEYSHOT");
T(m, 368, 76, 288, 22, "of input tax credit at risk per ₹100 Cr of purchases (base)", { color: C.white });
RT(m, 20, 174, 636, 22, [["Low ₹18 lakh, base ₹54 lakh, high ₹90 lakh: ", "A"], ["1%, 3%, 5% of ₹18 Cr credit a year (assumption band)", "W"]], { color: C.white });
const b1 = panel(s, 64, 618, 620, 336, "EVERY BRIEF ITEM HAS ONE MODULE");
addTable(b1, 16, 62, [190, 200, 198], ["Brief", "Module", "Output"], [
  ["Reconcile", "3-way match", "Status, score"], ["Mismatches", "Classifier", "Typed errors"], ["Tax check", "Rate verifier", "Rate errors"], ["Missing", "Gap finder", "Ageing buckets"],
  ["Anomalies", "Pattern watch", "Ranked reasons"], ["Liability", "Liability view", "Payable band"], ["Dashboard", "Console", "Ranked queue"], ["Dataset", "Synthetic set", "12 error types"]],
  { headerH: 34, rowH: 27, name: "TABLE: coverage", align: ["LEFT", "LEFT", "LEFT"] });
const b2 = panel(s, 700, 618, 560, 336, "THE CONSOLE (ILLUSTRATIVE SCREEN)");
const br = browser(b2, 16, 62, 528, 262, "Hisaab console");
const ask = addFrame(br, 330, 4, 190, 32, C.accent, C.ink, 1.5, "CHIP: ask"); addText(ask, "Poppins", "Bold", 22, C.ink, "ASK HISAAB", 4, 0, 182, 32, "CENTER", "CENTER", false);
[["Matched 52,800", C.goodTint], ["Unmatched 1,860", C.alertTint], ["Duplicate 660", C.tint], ["Discrepant 4,680", C.tint]].forEach((q, i) => {
  const f = addFrame(br, 8 + (i % 2) * 260, 48 + Math.floor(i / 2) * 44, 252, 38, q[1], C.ink, 1.5, "CELL"); TB(f, 8, 0, 236, 38, 22, q[0], { family: "Inter", style: "Bold" }); });
addTable(br, 8, 138, [250, 140, 122], ["Exception", "₹ at risk", "Days"], [["Supplier not filed", "4.2 lakh", "6"], ["Old GST rate used", "1.1 lakh", "6"], ["Near duplicate", "0.6 lakh", "0"]], { headerH: 34, rowH: 28, name: "TABLE: queue", align: ["LEFT", "RIGHT", "RIGHT"] });
const b3 = panel(s, 1276, 618, 580, 336, "HOW ONE EXCEPTION IS PRICED (EST.)");
waterfall(b3, 16, 62, 548, 200, [{ label: "Blocked", value: V.example[0][1], color: C.alert, text: "₹90,000" }, { label: "Interest", value: V.example[1][1], color: C.orange, text: "₹8,100" }, { label: "Capital", value: V.example[2][1], color: C.accent, text: "₹3,000" }, { label: "At risk", kind: "total", value: 101100, color: C.primaryDeep, text: "₹1,01,100" }], { max: 110000, min: 0, labelH: 40 });
formulaBox(b3, 16, 268, 548, 58, "₹ at risk = tax × P(blocked) + interest + capital cost", { chip: "FORMULA", chipW: 130 });
soWhat(s, 966, 64, [["Day one: ", "A"], [V.s4.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

`s06.js` (Architecture):
```js
{ const s = await figma.getNodeByIdAsync("S6");
hdr(s, 6, V.s5.finding, V.s5.source);
const a = panel(s, 64, 352, 1792, 280, "SIX STAGES, ONE PASS: FROM FILES TO A PRICED QUEUE");
[["INGEST", ["Books CSV", "Bank file", "GSTR-2B JSON"]], ["NORMALISE", ["GSTIN check", "Invoice no. clean", "Date, period"]], ["MATCH", ["Exact keys", "Fuzzy keys", "Pair classifier"]],
 ["VERIFY TAX", ["Dated rate master", "Tax head", "Rounding"]], ["DETECT", ["Duplicates", "Gaps", "Anomalies"]], ["PRICE, ACT", ["Rupees at risk", "Owner, date", "Queue, voice"]]].forEach((q, i) => {
  const f = addFrame(a, 16 + i * 296, 60, 280, 150, i === 5 ? C.tint : C.white, C.ink, 2, "CARD: stage " + q[0]);
  TL(f, 12, 4, 24, q[0], { color: C.primary, maxW: 256 }); q[1].forEach((ln, j) => T(f, 12, 46 + j * 32, 256, 22, ln));
  if (i < 5) addArrow(a, 16 + i * 296 + 281, 135, 16 + (i + 1) * 296 - 1, 135, C.ink, 3, 9); });
const st = addFrame(a, 16, 222, 1760, 44, C.surfaceAlt, C.ink, 2, "CARD: store"); TB(st, 12, 0, 1736, 44, 22, "FastAPI services over DuckDB tables: books, bank, returns, rate master, labels, exceptions", { family: "Inter", style: "Bold" });
const b1 = panel(s, 64, 648, 430, 306, "7 ERROR FAMILIES, 12%");
const fl = ["Amount, tax", "Rate, head", "Date shift", "Number variant", "Duplicates", "Missing, unpaid", "Anomalies"];
hBars(b1, 16, 62, 398, V.families.map((f, i) => ({ label: fl[i], value: f[1], text: f[1].toFixed(1) + "%", color: i === 5 ? C.alert : C.primary })), { labelW: 200, rowH: 33, barH: 22, valueW: 70, max: 3.2 });
const b2 = panel(s, 510, 648, 430, 306, "60,000 INVOICES, 9 TABLES");
addTable(b2, 16, 62, [250, 148], ["Entity", "Rows"], [["purchase_invoice", "36,000"], ["sales_invoice", "24,000"], ["bank_transaction", "58,000"], ["ledger_entry", "1,20,000"], ["return_2b", "35,000"], ["vendor", "400"], ["rate_master", "200"]], { headerH: 34, rowH: 27, name: "TABLE: entities", align: ["LEFT", "RIGHT"] });
const b3 = panel(s, 956, 648, 430, 306, "RULES, MODEL, THEN HUMAN");
[["Exact keys agree: matched", C.goodTint], ["Fuzzy 0.92+: matched, flagged", C.tint], ["Classifier 0.80+: suggested", C.tint], ["Else: human, by ₹ at risk", C.alertTint]].forEach((q, i) => {
  const f = addFrame(b3, 16, 62 + i * 58, 398, 46, q[1], C.ink, 2, "CARD: tier " + (i + 1)); TB(f, 8, 0, 382, 46, 22, q[0], { family: "Inter", style: "Bold", align: "CENTER" });
  if (i < 3) addArrow(b3, 215, 62 + i * 58 + 47, 215, 62 + (i + 1) * 58 - 1, C.ink, 3, 7); });
const b4 = panel(s, 1402, 648, 454, 306, "VOICE READS THE ENGINE");
[["Mic: Hindi or English", C.white], ["STT: Sarvam Saaras v3", C.white], ["LLM: Sarvam 105B or Gemini", C.tint], ["Tools call the engine", C.goodTint], ["TTS: Sarvam Bulbul v3", C.white]].forEach((q, i) => {
  const f = addFrame(b4, 16, 62 + i * 48, 422, 40, q[1], i === 2 ? C.primary : C.ink, i === 2 ? 3 : 2, "CARD: voice " + (i + 1)); TB(f, 8, 0, 406, 40, 22, q[0], { family: "Inter", style: "Bold", align: "CENTER" });
  if (i < 4) addWireV(b4, 227, 62 + i * 48 + 40, 62 + (i + 1) * 48, C.ink, 3); });
soWhat(s, 966, 64, [["Conclusively: ", "A"], [V.s5.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

`s07.js` (Technology Used):
```js
{ const s = await figma.getNodeByIdAsync("S7");
hdr(s, 7, V.s6.finding, V.s6.source);
const a1 = panel(s, 64, 352, 900, 292, "7 LAYERS, EACH CHOSEN AGAINST AN ALTERNATIVE");
addTable(a1, 16, 62, [150, 290, 170, 258], ["Layer", "Choice", "Rejected", "Why"], [
  ["Data", "Polars, DuckDB", "pandas alone", "Fast, zero setup"], ["Match", "RapidFuzz, LightGBM", "Rules alone", "Recall on variants"], ["Explain", "Isolation Forest, SHAP", "Deep network", "Reasons per case"],
  ["API", "FastAPI, Pydantic", "Flask", "Typed, WebSocket"], ["Console", "Next.js, Recharts", "Streamlit", "A real product UI"], ["Speech", "Saaras v3, Bulbul v3", "Generic API", "Sarvam: Hindi mix"], ["LLM", "Sarvam 105B or Gemini", "One model", "Swappable"]],
  { headerH: 34, rowH: 27, name: "TABLE: stack", align: ["LEFT", "LEFT", "LEFT", "LEFT"] });
const a2 = panel(s, 980, 352, 876, 292, "WHY A LAYERED MATCHER: 4 OPTIONS, 5 TESTS");
heatmap(a2, 16, 62, ["Rules only", "Fuzzy only", "Layered (ours)", "LLM matcher"], ["Prec.", "Recall", "Clear", "Speed", "Build"], [[5, 2, 5, 5, 5], [3, 4, 3, 4, 4], [5, 5, 4, 4, 3], [4, 4, 2, 1, 3]], { labelW: 200, colW: 88, rowH: 38, headH: 40, scale: HG, min: 1, max: 5, name: "TABLE: options" });
[["Low recall", "R"], ["Low precision", "R"], ["Chosen", "G"], ["Slow to audit", "R"]].forEach((q, i) => ragChip(a2, 664, 62 + 40 + i * 38 + 2, 196, 34, q[0], q[1]));
T(a2, 16, 260, 844, 22, "Team judgement, 1 to 5");
const b1 = panel(s, 64, 660, 640, 294, "DESIGN TARGETS, NOT RESULTS");
[["Match precision", 0.98], ["Match recall", 0.95], ["Duplicate F1", 0.95]].forEach((q, i) => { const y = 64 + i * 74;
  TL(b1, 16, y, 22, q[0], { family: "Inter", style: "Bold" }); gauge(b1, 16, y + 34, 440, 24, q[1], 1, q[1], { color: C.good });
  TL(b1, 476, y + 30, 22, "target " + q[1].toFixed(2), { color: C.good }); });
const b2 = panel(s, 720, 660, 560, 294, "BUILD PLAN: 5 STREAMS, 4 BLOCKS");
gantt(b2, 16, 62, 220, 76, ["B1", "B2", "B3", "B4"], [{ label: "Dataset", bars: [{ s: 0, e: 1 }] }, { label: "Match", bars: [{ s: 0, e: 2 }] }, { label: "Tax, gaps", bars: [{ s: 1, e: 2 }] }, { label: "Anomaly, price", bars: [{ s: 2, e: 3 }] }, { label: "Console, voice", bars: [{ s: 2, e: 4 }] }], { headH: 40, rowH: 36, name: "TABLE: plan" });
const b3 = panel(s, 1296, 660, 560, 294, "CORE OFFLINE, VOICE FALLS BACK");
addTable(b3, 16, 62, [200, 328], ["If this fails", "Hisaab does"], [["Primary LLM", "Second LLM answers"], ["Both LLMs", "Typed query, no model"], ["Speech out", "Answer shown as text"], ["Network", "Core still reconciles"]], { headerH: 36, rowH: 32, name: "TABLE: ladder", align: ["LEFT", "LEFT"] });
RT(b3, 16, 236, 528, 22, [["Ship: ", "B"], ["Docker, GitHub Actions, Vercel, Cloud Run", ""]]);
soWhat(s, 966, 64, [["Buildable: ", "A"], [V.s6.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

`s08.js` (Feature / USP):
```js
{ const s = await figma.getNodeByIdAsync("S8");
hdr(s, 8, V.s7.finding, V.s7.source);
const a1 = panel(s, 64, 352, 980, 322, "5 OPTIONS, 7 FEATURES, ONE SET OF ROWS");
const lv = w => w === "Yes" ? 5 : (w === "Part" ? 3 : 1);
heatmap(a1, 16, 62, V.parityRows, ["Portal", "Tally", "SaaS", "Sheet", "Hisaab"], V.parity.map(r => r.map(lv)), { labelW: 400, colW: 109, rowH: 32, headH: 34, scale: HG, min: 1, max: 5, fmt: (v, i, j) => V.parity[i][j], name: "TABLE: parity" });
const ol = addRect(a1, 16 + 400 + 4 * 109, 62, 109, 258, null, C.primary, 4); ol.name = "OUTLINE";
const a2 = panel(s, 1060, 352, 796, 322, "THREE THINGS HISAAB IS DESIGNED TO DO");
["Price every exception in rupees, with root cause and owner", "Order the queue by the last useful date before the 20th", "Answer by voice in Hindi or English, read from the engine"].forEach((t, i) => {
  const f = layered(a2, 16 + i * 260, 62, 244, 236, C.white, "CARD: usp " + (i + 1)); addBadge(f, 12, 12, 40, i + 1, C.primary, C.white); T(f, 12, 66, 220, 22, t, { family: "Inter", style: "Bold" }); });
const b1 = panel(s, 64, 690, 480, 264, "PROTECTED, ₹ LAKH (EST.)");
vBars(b1, 16, 56, 448, 152, [{ label: "Low", value: V.protect.low, text: V.protect.low.toFixed(1), color: C.orange }, { label: "Base", value: V.protect.base, text: V.protect.base.toFixed(1), color: C.primary }, { label: "High", value: V.protect.high, text: V.protect.high.toFixed(1), color: C.orange }], { labelH: 36, max: 80, valSize: 22 });
formulaBox(b1, 16, 212, 448, 46, "at risk × 80% target", { chip: "EST.", chipW: 90 });
const b2 = panel(s, 560, 690, 720, 264, "6 RISKS, EACH WITH ONE MITIGATION");
addTable(b2, 16, 62, [240, 44, 44, 360], ["Risk", "P", "I", "Mitigation"], [["Unreal test data", "M", "H", "Test on 2 real ledgers"], ["False matches", "M", "H", "0.92 threshold, human tier"], ["Stale rate master", "M", "M", "Dated table, change log"], ["Format changes", "H", "M", "One adapter per format"], ["Personal data", "L", "H", "Synthetic now, DPDP review"], ["Scope creep", "M", "M", "Cut order fixed"]],
  { headerH: 34, rowH: 27, name: "TABLE: risks", align: ["LEFT", "CENTER", "CENTER", "LEFT"], cellColor: (r, c) => (c === 1 || c === 2) ? C.alert : C.ink, boldCols: [1, 2] });
const b3 = panel(s, 1296, 690, 560, 264, "FROM PROTOTYPE TO PILOT IN 3 STEPS");
["Prototype: 7 capabilities, synthetic", "90 days: 2 CA firms, real books", "12 months: TDS, Form 26AS"].forEach((t, i) => { const f = addFrame(b3, 16, 62 + i * 42, 528, 36, i === 0 ? C.tint : C.surfaceAlt, C.ink, 2, "CARD: step " + (i + 1)); TB(f, 10, 0, 508, 36, 22, t, { family: "Inter", style: "Bold" }); });
RT(b3, 16, 192, 528, 22, [["Market (est.): ", "B"], ["13.1 lakh GSTINs × ₹12,000 = ₹1,577 Cr", ""]]);
soWhat(s, 966, 64, [["Therefore: ", "A"], [V.s7.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

`s09.js` (Appendix):
```js
{ const s = await figma.getNodeByIdAsync("S9");
hdr(s, 9, V.s8.finding, V.s8.source);
const a1 = panel(s, 64, 352, 900, 320, "8 ASSUMPTIONS BEHIND THE ₹54 LAKH");
addTable(a1, 16, 62, [70, 548, 250], ["ID", "Assumption", "Value"], [["A01", "Annual purchases, reference firm", "₹100 Cr"], ["A02", "Average GST rate on purchases", "18%"], ["A03", "Credit unreconciled at a return date", "1%, 3%, 5%"], ["A04", "Interest on reversed credit", "18% a year"],
  ["A05", "Months before correction", "6"], ["A06", "Cost of working capital", "10% a year"], ["A07", "Months a credit is deferred", "2"], ["A08", "Resolved before filing (target)", "80%"]], { headerH: 34, rowH: 27, name: "TABLE: assumptions", align: ["LEFT", "LEFT", "RIGHT"] });
const a2 = panel(s, 980, 352, 876, 320, "THE ARITHMETIC, LOW TO HIGH (EST.)");
addTable(a2, 16, 62, [380, 150, 150, 164], ["Line", "Low", "Base", "High"], [["Input tax credit a year", "₹18 Cr", "₹18 Cr", "₹18 Cr"], ["Credit at risk", "₹18 lakh", "₹54 lakh", "₹90 lakh"], ["Interest exposure", "₹1.62 lakh", "₹4.86 lakh", "₹8.10 lakh"], ["Working-capital cost", "₹0.30 lakh", "₹0.90 lakh", "₹1.50 lakh"], ["Protected at 80% target", "₹14.4 lakh", "₹43.2 lakh", "₹72.0 lakh"]],
  { headerH: 36, rowH: 40, name: "TABLE: arithmetic", align: ["LEFT", "RIGHT", "RIGHT", "RIGHT"], rowFills: [null, C.tint, null, null, null] });
const b1 = panel(s, 64, 688, 820, 266, "12 INJECTED ERRORS, 7,200 OF 60,000");
addTable(b1, 16, 62, [70, 236, 88, 70, 236, 88], ["ID", "Error", "Rate", "ID", "Error", "Rate"], [["D01", "Amount differs", "1.5%", "D07", "Exact duplicate", "0.6%"], ["D02", "Tax value differs", "1.0%", "D08", "Near duplicate", "0.5%"], ["D03", "Old rate used", "1.2%", "D09", "Missing in 2B", "1.5%"],
  ["D04", "Wrong tax head", "0.6%", "D10", "Missing in books", "0.8%"], ["D05", "Date shifted", "1.2%", "D11", "Unpaid 180 days", "0.8%"], ["D06", "Number variant", "1.5%", "D12", "Anomalous pattern", "0.8%"]], { headerH: 34, rowH: 27, name: "TABLE: errors", align: ["LEFT", "LEFT", "RIGHT", "LEFT", "LEFT", "RIGHT"], boldCols: [3] });
const b2 = panel(s, 900, 688, 400, 266, "SIX DESIGN TARGETS");
addTable(b2, 16, 62, [248, 120], ["Measure", "Target"], [["Match precision", "0.98"], ["Match recall", "0.95"], ["Duplicate F1", "0.95"], ["Rate error recall", "0.99"], ["Anomaly top-100", "0.60"], ["50,000 invoices", "60 s"]], { headerH: 34, rowH: 27, name: "TABLE: targets", align: ["LEFT", "RIGHT"] });
const b3 = panel(s, 1316, 688, 540, 266, "SOURCES");
const bib = addText(b3, "Inter", "Semi Bold", 16, C.ink, ["1 Ministry of Finance reply, Lok Sabha, Aug 2025 (PTI)", "2 GSTN nine-year statistics, Jun 2026", "3 GSTN advisory, Invoice Management System, Oct 2024", "4 CGST Rules 37, 37A and 88D", "5 56th GST Council meeting, Sep 2025", "6 GST@8 survey, Deloitte, via Deccan Herald", "7 TallyPrime, Zoho Books, Vyapar TaxOne pages", "8 RBI lending rates release, Jul 2026", "AI tools assisted search, drafting and layout; every figure was checked against its source."].join("\n"), 16, 60, 508, 196, "LEFT", undefined, true); bib.name = "BIBLIO";
soWhat(s, 966, 64, [["Honest scope: ", "A"], [V.s8.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

`s10.js` (Thank You):
```js
{ const s = await figma.getNodeByIdAsync("S10"); tplClear(s); head(s, 10);
nm(addText(s, "Poppins", "Bold", 30, C.primary, "Hisaab: every mismatch gets a rupee value, an owner and a date.", 260, 300, 1400, 50, "CENTER", undefined, true), "THESIS");
addChip(s, 780, 420, 360, 50, "TEAM IDEAFORGE", C.primary, C.white, 24);
teamTable(s, 400, 500);
nm(addText(s, "Inter", "Semi Bold", 24, C.ink, "Questions welcome.", 260, 760, 1400, 40, "CENTER", undefined, true), "CLOSE");
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```

### Step 3. Pre-flight, then build in three batches

This code was written against the helper signatures in `preamble.js` but could not be run at planning time, so the mock is the first test. Run:
```bash
cd fintechstico-submission/deck && for n in 02 03 04 05 06 07 08 09 10; do echo -n "s$n: "; node mock_figma.js preamble.js values.js slides/s$n.js | grep -E "ISSUES|warnings|^\s+\[" | tr '\n' ' '; echo; done
```
Each line must end `warnings: [] ISSUES 0`. For any issue apply only the matching rule in §18.9 to that one string or number (shorten a label, drop `rowH` by up to 5, move a node by the reported overlap), then re-run. Do not redesign.

Then: Figma setup (§13A.3), write `slide_ids.json`, regenerate and bind (§18.6 with the range 02 to 10), and build with one `use_figma` call per slide, V1 and a screenshot after each (§18.7 steps 2 to 4, §13A.6 for the V1 edits). **Report to the user after each batch:** batch 1 = `s02`, `s03`, `s04`; batch 2 = `s05`, `s06`, `s07`; batch 3 = `s08`, `s09`, `s10`. Sweeps (§18.8), critique (§19) and the preview PDF follow batch 3.

Skill use at execution: one `Skill("case-competition-deck")` call in critique mode after batch 3, on the nine screenshots. The argument, action titles, moneyshot, symmetric grid and double synthesis are already built into the copy above.

---

## 14. Where things stand, and what changed

**The file.** `https://www.figma.com/slides/H3Zr4ESaceYlV54zvpkgZi`, fileKey `H3Zr4ESaceYlV54zvpkgZi`. Inspected read-only at planning time:

| Slide | Node id | Current name | Contents |
|---|---|---|---|
| 1 | `1:42` | `1` | One image rectangle `image 1`: the complete Consilium'26 cover (logos, PRESENTS, FINTECHSTICO, THE FINTECH HACKATHON, pyramids) |
| 2 | `1:86` | `2` | One image rectangle `image 2` at 0, −3, 1920 × 1086: cream background, FES logo top left (about x86 to 228, y44 to 186), wave mark bottom left (x160 to 291, y896 to 991), orange arcs bottom right (x1681 to 1920, y896 to 1080). **No header text and no underline** |
| 3 to 7 | `1:116`, `1:119`, `1:122`, `1:125`, `1:128` | `3` to `7` | The same `image 2` background, nothing else |

Fonts confirmed available in the file: League Spartan (Bold), Roboto (Regular), Poppins (Bold, ExtraBold), Inter (Semi Bold, Bold).

**What the user fixed on 3 Oct (binding).**
1. Build on this imported file. Do not create a new file.
2. Slide 1 stays exactly as the organisers' cover. Nothing is drawn on it and there is no cover of our own.
3. Every header is written again in **League Spartan at 82.7pt** (110px on this 1920 canvas), centred, with the thin underline beneath it, as in the organisers' PDF. On slide 3 the second line `TEAM MEMBERS` is in **Roboto**.
4. Nothing we draw may cover a header or sit above it.
5. Below the header, everything is built the usual consulting-grade way: dense panels, tables, bars, lines, heat maps, a mind map, flows, mockups. Fonts for content are ours (Poppins and Inter).
6. The ribbon is optional. **It is dropped**: the header and underline take the top 226px, and a ribbon under them would cost another 76px of a 700px content zone. The FINDING band takes its place as the first element under the underline.
7. Extra slides are permitted. Two are added after slide 7: **Appendix** and a plain **Thank You**. The deck is 9 slides.
8. The slide copy as corrected by verification (softened competitor claims, `n/s` cells) stands. Approving this plan approves that copy.

**Already done on disk (do not redo).**
- `fintechstico-submission/brief/01-brief.md`.
- Verification V0: `research/verification-VA1.md` and `verification-VA2.md`; the corrections are applied in `deck/values.js` and listed in `deck/figma.md`.
- `deck/preamble.js` (patched palette, `TEAM=[]`, and an **outdated** v1 extras block that draws a ribbon), `deck/mock_figma.js`, `deck/values.js`.
- `deck/slides/s01.js` and `s03.js` were written for the earlier native layout. **Delete `s01.js`** (the cover is untouched). `s03.js` is rewritten in step C2.

**Sonnet execution contract, additions for this part.** Never remove, move, restyle or unlock a node whose name starts with `TPL:`. Never draw on slide 1. Never place a node of ours above the underline (y less than the rule's y) other than the header and sub-header that `hdr()` draws. Never change a header's words, font or size.

---

## 15. Design system on the template

### 15.1 Slide set, names and headers

| # | Figma slide name | Header (League Spartan Bold, 110px, centred) | Underline y | Built by |
|---|---|---|---|---|
| 1 | `FINTECHSTICO` | none; the organisers' cover image, untouched | none | nobody |
| 2 | `Problem Statement` | `Problem Statement` | 226 | SL-2 |
| 3 | `Team Name` | `Team Name`, then `TEAM MEMBERS` in Roboto Regular 56px under it | 285 | main |
| 4 | `Solution` | `Solution` | 226 | SL-4 |
| 5 | `Architecture` | `Architecture` | 226 | SL-5 |
| 6 | `Technology Used` | `Technology Used` | 226 | SL-6 |
| 7 | `Feature / USP` | `Feature / USP` | 226 | SL-7 |
| 8 | `Appendix` | `Appendix` | 226 | SL-8 |
| 9 | `Thank You` | `Thank You` | 226 | main |

The underline is a 1220 × 3 rectangle at x350, in the template's dark maroon (#2A0000), node name `RULE`.

### 15.2 Palette and type

The palette already in `deck/preamble.js` (orange primary #D95F0E, event orange #FF914D, maroon #3B0A0A, sand gold #F5B841, alert red, rival blue, good green, tints, ink, white). The slide background is the template image, so `hdr()` sets no fill. Panels and cards are white with ink outlines so they read against the cream.

Type: headers League Spartan Bold 110px; `TEAM MEMBERS` Roboto Regular 56px; everything else Poppins Bold and ExtraBold (chips, numerals, panel titles, chart values) and Inter Semi Bold and Bold (body, tables). **22pt floor** on every text node except the source line (14pt) and nodes named `BIBLIO` on slide 8 (16pt). Radius 0 everywhere. Ink stroke 2 to 2.5px on every panel, bar, cell and node. Layered sticker cards with the gold back-card offset 7px.

### 15.3 Skeleton for slides 2 to 8 (drawn by `hdr()` in §18.2)

| Element | Geometry | Notes |
|---|---|---|
| Header | box x348, y62, 1224 × 150, centred both ways, node name `HEADER` | Calibrated once on slide 2 (§18.7 step 5) |
| Sub-header (slide 3) | box x348, y204, 1224 × 66, centred, node name `SUBHEADER` | `TEAM MEMBERS` |
| Underline | x350, y226 (slide 3: y285), 1220 × 3, node name `RULE` | |
| FINDING band | x64, y = underline + 18 (244; slide 3: 303), 1792 × 92, layered white card, `FINDING` chip, Poppins Bold 28pt stepping to 24pt, at most 2 lines, node name `HEADLINE` | The action title |
| Content zone | from y352 (slide 3: y411) to y954 | Row heights are per slide, in §17. Gutter 16 |
| So-what bar | x64, y966, 1792 × 64 (`soWhat(s, 966, 64, ...)`) | One sentence, one line |
| Source line | x64, y1046, w1596, right-aligned, 14pt, node name `SOURCE` | Ends at x1660 so it clears the template's arcs |

The template's wave mark is covered by the bottom-left panel; a sliver of the orange arcs stays visible at the bottom-right corner outside x1856. Both are expected.

Density contract: slides 2, 4, 5, 6, 7 each show at least 8 distinct forms, at least 3 of them data visualisations, 150 to 420 nodes. Slide 3 and slide 8 at least 110 nodes. Slide 9 is plain.

Forms across the deck, so every type the user asked for appears: line chart (2), mind map (2), heat maps (2, 3, 6, 7), tables (all), horizontal bars (2, 5), vertical bars (7), waterfall (4), Gantt (3, 6), gauges (6), numbered flow (4), pipeline diagram (5), decision ladder (5), voice loop (5), console mockup (4), formula boxes (4, 7), numbered badges (3, 7).

---

## 16. Helper cheat-sheet and how sub-agents use the skill

Open the named file under `nsbc-case/deck/slides/` to copy the exact call shape.

| Helper | Draws | Example |
|---|---|---|
| `panel(s, x, y, w, h, TITLE, o)` | White outlined panel, caps title and rule; content starts at y62 inside | s04.js |
| `addTable(parent, x, y, colWidths, headers, rows, opts)` | Table; `opts`: `rowH`, `headerH`, `rowFills`, `align`, `name` | s04.js |
| `hBars`, `vBars`, `stackH` | Bars with values on the chart | s04.js, s02.js |
| `lineChart(p, x, y, w, h, series, xLabels, o)` | Lines with labels on the lines; `o.yMin`, `o.yMax`, `o.yTicks` | s05.js, s06.js |
| `heatmap(p, x, y, rowLabels, colLabels, vals, o)` | Heat grid; `o.scale` is `HO`, `HG` or `HR`; `o.fmt(v)` sets cell text; `o.labelW`, `o.colW`, `o.rowH`, `o.headH`, `o.min`, `o.max` | s05.js, s06.js |
| `waterfall` | Step build to a total | s03.js, s07.js |
| `gauge(p, x, y, w, h, value, max, gate, o)` | Bar gauge with a dashed gate marker; `o.gateText` | s09.js |
| `gantt(p, x, y, labelW, colW, months, rows, o)` | Timeline; rows `{label, bars:[{s, e, text}]}` | s09.js |
| `flow(p, x, y, w, h, cards, o)` | Numbered layered cards with arrows; cards `{title, sub}` | s07.js |
| `formulaBox`, `numCard`, `ragChip`, `badgeList`, `addBadge`, `layered`, `addChip`, `dashedH`, `teamTable` | Small forms | s02.js, s03.js, s07.js, s01.js |
| `T`, `TL`, `TB`, `RT` | Text: wrapped, single line, boxed, rich (`"B"` bold, `"O"` orange, `"R"` red, `"G"` green, `"W"` white, `"A"` gold) | preamble.js |
| `addArrow`, `addLine`, `addWireH`, `addWireV` | Connectors as vector paths; never rotated rectangles | s07.js, s08.js |
| `hdr`, `head`, `finding`, `browser`, `tplClear` | This deck's skeleton and mockup frame | §18.2 |

Panel-title rule: one line. Maximum characters ≈ (panel width − 32) ÷ 15.

**The `case-competition-deck` skill, for every slide author.** Before writing a slide, call `Skill("case-competition-deck")` in slide mode and read `references/archetypes.md` for the archetype named below. The skill does not change the copy in §17; it is the checklist the slide must pass: (1) the FINDING is a declarative sentence with a number; (2) comparable things share one structure; (3) every chart carries its values on the chart and one bold reading under it; (4) estimates say est., targets say target; (5) a source line is present.

| Slide | Archetype to read |
|---|---|
| 2 | Two-chart action-title slide; context funnel that plants the seed |
| 4 | The moneyshot; deep dive on the chosen alternative |
| 5 | Post-decision implementation plan (how it works) |
| 6 | MECE option-filter table |
| 7 | Symmetric comparison grid; conclusion synthesis |
| 8 | Appendix deep-dive |

---

## 17. Locked slide copy with geometry

Panels are `panel(s, x, y, w, h, TITLE)` at the stated x, y, w, h unless a helper is named. Numbers come from `V.*`. Strings are used exactly as written. FINDING, so-what and source strings are already in `values.js` as `V.sN.finding`, `V.sN.sowhat`, `V.sN.source`.

### Slide 2, `Problem Statement` (rows: A y352 h292, B y660 h294)

**FINDING:** `V.s2.finding`

| ID | x, y, w, h | Title | Content |
|---|---|---|---|
| 2.A1 | 64, 352, 560, 292 | `₹7.08 LAKH CR EVADED IN 5 YEARS` | 2 × 2 cells, numeral 40pt primary over a 22pt caption: `V.evasion5y` / `GST evasion detected, FY21 to FY25`; `V.itc5y` / `of it ITC fraud, 44,938 cases`; `V.evasionCases` / `evasion cases detected`; `V.taxpayers` / `active GST taxpayers, Jun 2026` |
| 2.A2 | 640, 352, 600, 292 | `DETECTED, ₹ LAKH CR, BY YEAR` | `lineChart`, x labels FY21 to FY25, two series: `GST evasion` 0.49, 0.73, 1.32, 2.30, 2.23 (rival blue) and `ITC fraud` 0.31, 0.28, 0.24, 0.36, 0.59 (alert red), end values labelled on the lines. A dashed marker at FY25 labelled `V.itcJump`. Bold caption: `V.itcMultiple` |
| 2.A3 | 1256, 352, 600, 292 | `WHY CREDIT LEAKS: 3 CAUSES, 1 GAP` | **Mind map.** Hub card in the centre, maroon with white text: `Credit lost or delayed`. Three spoke boxes joined by `addLine`: `Supplier: not filed, late, wrong` (left), `Timing: lands next period` (top right), `Our books: rate, duplicate, typo` (bottom right). Draw the hub last so it sits over the lines. A full-width strip at the bottom in `tint` with a primary outline: `No tool states which to fix first` |
| 2.B1 | 64, 660, 700, 294 | `TODAY'S TOOLS MATCH ROWS AND STOP THERE` | `addTable`, columns `Tool`, `Matches`, `Checks rate`, `Prices it`, `Ranks it`, rows from `V.tools2`, `rowH` 36. Cell fills: Yes `goodTint`, Part `tint`, No `alertTint`, n/s `surface`. Under it `RT`: bold `n/s: ` then `not stated on the vendor's public page` |
| 2.B2 | 780, 660, 520, 294 | `WHO FEELS IT, AND WHEN` | `heatmap`, `HR` scale, rows `Accountant`, `CFO`, `Supplier`, `CA firm`; columns `Invoice`, `Payment`, `Return`, `Notice`; values [4,3,5,4], [1,3,4,5], [2,4,3,2], [2,1,5,5]; `rowH` 36. Caption: `Team reading of practitioner guides` |
| 2.B3 | 1316, 660, 540, 294 | `MATCHING STILL HURTS 37% OF MSMEs` | `hBars` from `V.matchPain` (64% then 37%, the second in alert). `RT`: `Down from 64%, yet more than 1 in 3 remain. ` then bold `6 days to fix, 7 to answer a notice` |

**So what:** label `The gap: ` then `V.s2.sowhat`

### Slide 3, `Team Name` (content from y411)

**FINDING:** `V.s3.finding`

| ID | x, y, w, h | Title | Content |
|---|---|---|---|
| 3.A0 | 64, 411 | none | `addChip(s, 64, 411, 360, 50, "TEAM IDEAFORGE", C.primary, C.white, 24)` |
| 3.A1 | 440, 411, 1416, 166 | none (`addTable` directly, `headerH` 50, `rowH` 58) | Columns `Team Members`, `Institution`, `Role`, `Owns in the prototype round`, widths 270, 520, 170, 456. Rows: `Harsh Kawatra`, `Delhi Technological University`, `Team Leader`, `Data, match engine, console`; `Aakriti Aggarwal`, `Maharaja Agrasen Inst. of Mgmt Studies`, `Member`, `Tax rules, rates, pricing, pitch` |
| 3.B1 | 64, 593, 600, 361 | `WHO LEADS WHAT` | `heatmap`, `HO` scale, rows `Harsh`, `Aakriti`; columns `Res.`, `Data`, `Model`, `API`, `UI`, `Pitch`; values [3,5,5,5,5,3], [5,3,3,1,3,5]; `labelW` 108, `colW` 76, `rowH` 40, `headH` 40, `min` 1, `max` 5. Line: `5 leads, 3 supports, 1 not involved`. `badgeList`, pitch 44: `Every number sourced or assumed`; `Engine first, model second`; `Cut order fixed in advance` |
| 3.B2 | 680, 593, 580, 361 | `8 MODULES, 8 FIRST DELIVERABLES` | `addTable`, columns `Module`, `Owner`, `First deliverable`, widths 200, 76, 272, `headerH` 36, `rowH` 30. Rows: `Dataset` HK `60,000 invoices`; `Match engine` HK `Exact, fuzzy tiers`; `Exceptions` HK `12 typed exceptions`; `Rate verifier` AA `Dated rate master`; `Gap finder` AA `Ageing buckets`; `Pattern watch` HK `Top-100 list`; `Pricing` AA `Rupees at risk`; `Console, voice` Both `Ranked queue, voice` |
| 3.B3 | 1276, 593, 580, 361 | `PROTOTYPE ROUND IN 4 BLOCKS` | `gantt`, `labelW` 230, `colW` 74, columns `B1` to `B4`, `headH` 40, `rowH` 44. Rows: `Dataset` 0 to 1; `Match, exceptions` 0 to 2; `Rate, gaps` 1 to 2; `Anomaly, pricing` 2 to 3; `Console, demo` 2 to 4. Caption: `Cut first: anomaly, then liability` |

**So what:** label `Ownership: ` then `V.s3.sowhat`

### Slide 4, `Solution` (rows: A y352 h250, B y618 h336) — carries the moneyshot

**FINDING:** `V.s4.finding`

| ID | x, y, w, h | Title | Content |
|---|---|---|---|
| 4.A1 | 64, 352, 1100, 250 | `FIVE STEPS FROM RAW BOOKS TO A RANKED QUEUE` | `flow` inside the panel at y62, h 172, five cards: `INGEST` / `Books, bank file, GSTR-2B`; `MATCH` / `Exact, fuzzy, classifier`; `CLASSIFY` / `12 types, one root cause`; `PRICE` / `Rupees at risk, last date`; `ACT` / `Ranked queue, Ask Hisaab` |
| 4.A2 | 1180, 352, 676, 250 | none (`layered` card, `primaryDeep` front, name `CARD: moneyshot`) | Chip `CREDIT AT RISK (EST.)`. `V.moneyshot`, Poppins ExtraBold 64pt, gold, node name `MONEYSHOT`. White 22pt: `of input tax credit at risk per ₹100 Cr of purchases, base case`. White 22pt, bold figures: `Low ₹18 lakh, base ₹54 lakh, high ₹90 lakh: 1%, 3%, 5% of ₹18 Cr (assumption band)` |
| 4.B1 | 64, 618, 620, 336 | `EVERY BRIEF ITEM HAS ONE MODULE` | `addTable`, columns `Brief`, `Module`, `Output`, widths 196, 196, 196, `headerH` 34, `rowH` 27. Rows: `Reconciliation`, `Three-way match`, `Status, confidence`; `Mismatch, duplicates`, `Exception classifier`, `Typed exception`; `Tax verification`, `Rate verifier`, `Rate, head errors`; `Missing, unmatched`, `Gap finder`, `Ageing buckets`; `Anomaly detection`, `Pattern watch`, `Ranked, reasons`; `Tax liability`, `Liability view`, `Net payable band`; `Dashboard`, `Hisaab console`, `Rupee-ranked queue`; `Dataset`, `60,000 invoices`, `12 injected errors` |
| 4.B2 | 700, 618, 560, 336 | `THE CONSOLE (ILLUSTRATIVE SCREEN)` | `browser()` frame 528 × 262 titled `Hisaab console`. Four tiles in a row, 22pt: `Matched 52,800` (goodTint), `Unmatched 1,860` (alertTint), `Duplicate 660` (tint), `Discrepant 4,680` (tint). A three-row queue table, columns `Exception`, `₹ at risk`, `Days left`: `Supplier not filed`, `4.2 lakh`, `6`; `Old rate after 22 Sep`, `1.1 lakh`, `6`; `Near duplicate`, `0.6 lakh`, `0`. A gold chip `ASK HISAAB` in the title bar, right side |
| 4.B3 | 1276, 618, 580, 336 | `HOW ONE EXCEPTION IS PRICED (EST.)` | `waterfall` from `V.example` to the total `At risk ₹1,01,100`, values labelled in ₹. `formulaBox`: `₹ at risk = tax × P(blocked) + interest + capital cost` |

**So what:** label `Day one: ` then `V.s4.sowhat`

### Slide 5, `Architecture` (rows: A y352 h280, B y648 h306)

**FINDING:** `V.s5.finding`

| ID | x, y, w, h | Title | Content |
|---|---|---|---|
| 5.A | 64, 352, 1792, 280 | `SIX STAGES, ONE PASS: FROM FILES TO A PRICED QUEUE` | Six stage cards, each 280 × 150, at x 16, 312, 608, 904, 1200, 1496 inside the panel, y60, arrows between. Card title 24pt primary, then three lines 22pt: `INGEST`: `Books CSV`, `Bank file`, `GSTR-2B JSON`. `NORMALISE`: `GSTIN check`, `Invoice no. clean`, `Date, period`. `MATCH`: `Exact keys`, `Fuzzy keys`, `Pair classifier`. `VERIFY TAX`: `Dated rate master`, `Tax head`, `Rounding`. `DETECT`: `Duplicates`, `Gaps`, `Anomalies`. `PRICE, ACT`: `Rupees at risk`, `Owner, date`, `Queue, voice`. Under the cards a `surfaceAlt` strip, 1760 × 40: `FastAPI services over DuckDB tables: books, bank, returns, rate master, labels, exceptions` |
| 5.B1 | 64, 648, 430, 306 | `7 ERROR FAMILIES, 12%` | `hBars` from `V.families`, values shown as percentages, `rowH` 32 |
| 5.B2 | 510, 648, 430, 306 | `60,000 INVOICES, 9 TABLES` | `addTable`, columns `Entity`, `Rows`, widths 250, 148, `headerH` 34, `rowH` 27: `purchase_invoice` 36,000; `sales_invoice` 24,000; `bank_transaction` 58,000; `ledger_entry` 1,20,000; `return_2b` 35,000; `vendor` 400; `rate_master` 200 |
| 5.B3 | 956, 648, 430, 306 | `RULES, MODEL, THEN HUMAN` | Four stacked boxes, each 398 × 46, gap 12, with down arrows: `Exact keys agree: matched` (goodTint); `Fuzzy 0.92+: matched, flagged` (tint); `Classifier 0.80+: suggested` (tint); `Else: human, by ₹ at risk` (alertTint) |
| 5.B4 | 1402, 648, 454, 306 | `VOICE READS THE ENGINE` | Five stacked boxes, each 422 × 40, gap 10, with down arrows: `Mic: Hindi or English`; `STT: Sarvam Saaras v3`; `LLM: Sarvam 105B or Gemini` (primary outline); `Tools call the engine` (goodTint); `TTS: Sarvam Bulbul v3` |

**So what:** label `Conclusively: ` then `V.s5.sowhat`

### Slide 6, `Technology Used` (rows: A y352 h292, B y660 h294)

**FINDING:** `V.s6.finding`

| ID | x, y, w, h | Title | Content |
|---|---|---|---|
| 6.A1 | 64, 352, 900, 292 | `7 LAYERS, EACH CHOSEN AGAINST AN ALTERNATIVE` | `addTable`, columns `Layer`, `Choice`, `Rejected`, `Why`, widths 120, 300, 170, 278, `headerH` 34, `rowH` 27. Rows: `Data`, `Polars, DuckDB`, `pandas alone`, `Fast joins, no setup`; `Match`, `RapidFuzz, LightGBM`, `Rules alone`, `Recall on variants`; `Explain`, `Isolation Forest, SHAP`, `Deep network`, `Reasons per case`; `API`, `FastAPI, Pydantic`, `Flask`, `Typed, WebSocket`; `Console`, `Next.js, Recharts`, `Streamlit`, `A real product UI`; `Speech`, `Sarvam Saaras, Bulbul v3`, `Generic speech`, `Hindi-English mix`; `LLM`, `Sarvam 105B or Gemini`, `One fixed model`, `Swappable` |
| 6.A2 | 980, 352, 876, 292 | `WHY A LAYERED MATCHER: 4 OPTIONS, 5 TESTS` | `heatmap`, `HG` scale, rows `Rules only`, `Fuzzy only`, `Layered (ours)`, `LLM matcher`; columns `Prec.`, `Recall`, `Explain`, `Speed`, `Build`; values [5,2,5,5,5], [3,4,3,4,4], [5,5,4,4,3], [4,4,2,1,3]; `labelW` 200, `colW` 84, `rowH` 38, `headH` 40. To its right a column of four `ragChip`s aligned to the rows: `Fails recall` (red), `Fails precision` (red), `Chosen` (green), `Slow to audit` (red). Caption: `Team judgement, 1 to 5` |
| 6.B1 | 64, 660, 640, 294 | `DESIGN TARGETS, NOT RESULTS` | Three `gauge`s on a 0 to 1 scale, each with a label line and the gate at the target: `Match precision: target 0.98`; `Match recall: target 0.95`; `Duplicate F1: target 0.95`. Bars filled to the target in `good` |
| 6.B2 | 720, 660, 560, 294 | `BUILD PLAN: 5 STREAMS, 4 BLOCKS` | `gantt`, `labelW` 220, `colW` 76, `headH` 40, `rowH` 36; rows `Dataset` 0 to 1; `Match` 0 to 2; `Tax, gaps` 1 to 2; `Anomaly, price` 2 to 3; `Console, voice` 2 to 4 |
| 6.B3 | 1296, 660, 560, 294 | `CORE OFFLINE, VOICE FALLS BACK` | `addTable`, columns `If this fails`, `Hisaab does`, widths 190, 338, `headerH` 36, `rowH` 34: `Primary LLM`, `Second LLM answers`; `Both LLMs`, `Typed query, no model`; `Speech out`, `Answer shown as text`; `Network`, `Core still reconciles`. Under it a line of chips: `Docker`, `GitHub Actions`, `Vercel + Cloud Run` |

**So what:** label `Buildable: ` then `V.s6.sowhat`

### Slide 7, `Feature / USP` (rows: A y352 h292, B y660 h294)

**FINDING:** `V.s7.finding`

| ID | x, y, w, h | Title | Content |
|---|---|---|---|
| 7.A1 | 64, 352, 980, 292 | `5 OPTIONS, 7 FEATURES, ONE SET OF ROWS` | `heatmap`, `HG` scale, rows `V.parityRows`, columns `Portal`, `Tally`, `SaaS`, `Sheet+CA`, `Hisaab`; numeric levels from `V.parity` with Yes 5, Part 3, No 1, n/s 1; `o.fmt` prints the cell word from `V.parity`; `labelW` 420, `colW` 105, `headH` 34, `rowH` 27. The Hisaab column gets a primary outline rectangle. No caption inside; the source line carries `Hisaab column is a design` |
| 7.A2 | 1060, 352, 796, 292 | `THREE THINGS HISAAB IS DESIGNED TO DO` | Three layered cards side by side, 244 × 210, numbered badges: `1` `Price every exception in rupees, with root cause and owner`; `2` `Order the queue by the last useful date before the 20th`; `3` `Answer by voice in Hindi or English, read from the engine` |
| 7.B1 | 64, 660, 480, 294 | `CREDIT PROTECTED (EST.)` | `vBars`, ₹ lakh per ₹100 Cr: `Low` 14.4; `Base` 43.2 (primary); `High` 72.0. `formulaBox`: `credit at risk × 80% target` |
| 7.B2 | 560, 660, 720, 294 | `6 RISKS, EACH WITH ONE MITIGATION` | `addTable`, columns `Risk`, `P`, `I`, `Mitigation`, widths 240, 44, 44, 360, `headerH` 34, `rowH` 32: `Synthetic unlike real`, M, H, `Test on 2 real ledgers`; `Fuzzy false matches`, M, H, `0.92 threshold, human tier`; `Stale rate master`, M, M, `Dated table, change log`; `Portal format change`, H, M, `One adapter per format`; `Personal data`, L, H, `Synthetic now, DPDP review`; `Scope creep`, M, M, `Cut order fixed` |
| 7.B3 | 1296, 660, 560, 294 | `FROM PROTOTYPE TO PILOT IN 3 STEPS` | Three stacked cards with badges, each 528 × 40: `Prototype: 7 capabilities, synthetic`; `90 days: 2 CA firms, real books`; `12 months: TDS, Form 26AS`. `RT`: bold `Market (est.): ` then `13.1 lakh GSTINs × ₹12,000 = ₹1,577 Cr`. Then: `Validation plan: 20 interviews, none run yet` |

**So what:** label `Therefore: ` then `V.s7.sowhat`

### Slide 8, `Appendix` (rows: A y352 h320, B y688 h266)

**FINDING:** `Every figure in this deck traces to one of 20 sources or 11 stated assumptions; nothing is built, so every performance number is a design target`

| ID | x, y, w, h | Title | Content |
|---|---|---|---|
| 8.A1 | 64, 352, 900, 320 | `8 ASSUMPTIONS BEHIND THE ₹54 LAKH` | `addTable`, columns `ID`, `Assumption`, `Value`, widths 70, 548, 250, `headerH` 34, `rowH` 27: `A01`, `Annual purchases, reference firm`, `₹100 Cr`; `A02`, `Average GST rate on purchases`, `18%`; `A03`, `Credit unreconciled at a return date`, `1%, 3%, 5%`; `A04`, `Interest on reversed credit`, `18% a year`; `A05`, `Months before correction`, `6`; `A06`, `Cost of working capital`, `10% a year`; `A07`, `Months a credit is deferred`, `2`; `A08`, `Resolved before filing (target)`, `80%` |
| 8.A2 | 980, 352, 876, 320 | `THE ARITHMETIC, LOW TO HIGH (EST.)` | `addTable`, columns `Line`, `Low`, `Base`, `High`, widths 380, 150, 150, 164, `headerH` 36, `rowH` 40: `Input tax credit a year`, `₹18 Cr`, `₹18 Cr`, `₹18 Cr`; `Credit at risk`, `₹18 lakh`, `₹54 lakh`, `₹90 lakh`; `Interest exposure`, `₹1.62 lakh`, `₹4.86 lakh`, `₹8.10 lakh`; `Working-capital cost`, `₹0.30 lakh`, `₹0.90 lakh`, `₹1.50 lakh`; `Protected at 80% target`, `₹14.4 lakh`, `₹43.2 lakh`, `₹72.0 lakh`. The `Credit at risk` row filled `tint` |
| 8.B1 | 64, 688, 700, 266 | `12 INJECTED ERRORS, 7,200 OF 60,000` | `addTable`, columns `ID`, `Error`, `Rate`, `ID`, `Error`, `Rate`, widths 60, 208, 66, 60, 208, 66, `headerH` 34, `rowH` 27: `D01`, `Amount differs`, `1.5%`, `D07`, `Exact duplicate`, `0.6%`; `D02`, `Tax value differs`, `1.0%`, `D08`, `Near duplicate`, `0.5%`; `D03`, `Old rate used`, `1.2%`, `D09`, `Missing in 2B`, `1.5%`; `D04`, `Wrong tax head`, `0.6%`, `D10`, `Missing in books`, `0.8%`; `D05`, `Date shifted`, `1.2%`, `D11`, `Unpaid 180 days`, `0.8%`; `D06`, `Number variant`, `1.5%`, `D12`, `Anomalous pattern`, `0.8%` |
| 8.B2 | 780, 688, 520, 266 | `SIX TARGETS, HOW EACH IS MEASURED` | `addTable`, columns `Measure`, `Target`, widths 330, 158, `headerH` 34, `rowH` 27: `Match precision`, `0.98`; `Match recall`, `0.95`; `Duplicate F1`, `0.95`; `Rate error recall`, `0.99`; `Top-100 anomaly precision`, `0.60`; `50,000 invoices`, `under 60 s` |
| 8.B3 | 1316, 688, 540, 266 | `SOURCES` | One text node named `BIBLIO`, Inter Semi Bold 16pt, width 508: `1 Ministry of Finance reply, Lok Sabha, Aug 2025 (PTI)` / `2 GSTN nine-year statistics, Jun 2026` / `3 GSTN advisory, Invoice Management System, Oct 2024` / `4 CGST Rules 37, 37A, 88D` / `5 56th GST Council meeting, Sep 2025` / `6 GST@8 survey, Deloitte, via Deccan Herald` / `7 TallyPrime, Zoho Books, Vyapar TaxOne pages` / `8 RBI lending rates release, Jul 2026` / `AI tools assisted search, drafting and layout; every figure was checked against its source` |

**So what:** label `Honest scope: ` then `the 1% to 5% band is an assumption, competitor cells marked n/s were not stated on public pages, and no interview has been run`
**Source:** `Source: Team IdeaForge research notes and verification log, 3 Oct 2026`

### Slide 9, `Thank You` (plain; `tplClear`, then `head(s, 9)`, no FINDING band, no so-what)

| ID | x, y | Content |
|---|---|---|
| 9.L | centred at x960, y330 | Poppins Bold 30pt, primary, two lines, centre-aligned in a 1400-wide box at x260: `Hisaab: every mismatch gets a rupee value, an owner and a date.` |
| 9.C | 780, 470 | `addChip(s, 780, 470, 360, 50, "TEAM IDEAFORGE", C.primary, C.white, 24)` |
| 9.T | 400, 550 | `teamTable(s, 400, 550)` (Team Members, Institution, Role) |
| 9.Q | centred, y790 | Inter Semi Bold 24pt, ink, box x260 w1400 centre-aligned: `Questions welcome.` |

---

## 18. Deck pipeline

### 18.1 Reconcile the files on disk (step C1; run from `fintechstico-submission/deck`)

```bash
cd "/c/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/fintechstico-submission/deck" && rm -f slides/s01.js slides/s02.js && python - <<'EOF'
import io, re
p = "preamble.js"; t = io.open(p, encoding="utf-8").read()
m = "// ===== FINTECHSTICO EXTRAS ====="
assert t.count(m) == 1
t = t[:t.index(m)].rstrip("\n") + "\n"
a = '{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));'
assert t.count(a) == 1
t = t.replace(a, '{family:"Inter",style:"Bold"},{family:"League Spartan",style:"Bold"},{family:"Roboto",style:"Regular"}].map(f=>figma.loadFontAsync(f)));')
assert t.count("const TEAM=[];") == 1
t = t.replace("const TEAM=[];", 'const TEAM=[["Harsh Kawatra","Delhi Technological University","Team Leader"],["Aakriti Aggarwal","Maharaja Agrasen Institute of Management Studies","Member"]];')
io.open(p, "w", encoding="utf-8").write(t); print("trimmed", len(t))
EOF
```
Then append the block in §18.2 to the end of `preamble.js` with the Edit or Write tool (read the file's last lines first).

### 18.2 The extras block (append verbatim to `preamble.js`)

```js
// ===== FINTECHSTICO EXTRAS v2 (template overlay) =====
const HDR = { 2: "Problem Statement", 3: "Team Name", 4: "Solution", 5: "Architecture", 6: "Technology Used", 7: "Feature / USP", 8: "Appendix", 9: "Thank You" };
const HDR_SIZE = 110, HDR_Y = 62;
const RULE_Y = { 2: 226, 3: 285, 4: 226, 5: 226, 6: 226, 7: 226, 8: 226, 9: 226 };
const MAROON = { r: 0.165, g: 0, b: 0 };
function tplClear(s) { s.children.slice().forEach(c => { if (!c.name.startsWith("TPL:")) c.remove(); }); }
function head(s, n) {
  const h = addText(s, "League Spartan", "Bold", HDR_SIZE, C.ink, HDR[n], 348, HDR_Y, 1224, 150, "CENTER", "CENTER", false); h.name = "HEADER";
  if (n === 3) { const sub = addText(s, "Roboto", "Regular", 56, C.ink, "TEAM MEMBERS", 348, 204, 1224, 66, "CENTER", "CENTER", false); sub.name = "SUBHEADER"; }
  const r = addRect(s, 350, RULE_Y[n], 1220, 3, MAROON); r.name = "RULE"; return RULE_Y[n]; }
function finding(s, y, text) { const f = layered(s, 64, y, 1792, 92, C.white, "CARD: finding");
  addChip(f, 16, 24, 150, 44, "FINDING", C.primary, C.white, 22);
  const t = addText(f, "Poppins", "Bold", 28, C.ink, text, 186, 0, 1590, 80, "LEFT", undefined, true); t.name = "HEADLINE";
  while (t.height > 86 && t.fontSize > 24) { t.fontSize = t.fontSize - 1; }
  if (t.height > 86) warnings.push("finding over 2 lines: " + text.slice(0, 40));
  t.y = Math.max(3, (92 - t.height) / 2); return f; }
function hdr(s, n, findingText, source) { tplClear(s);
  const ry = head(s, n); finding(s, ry + 18, findingText);
  const src = addText(s, "Inter", "Semi Bold", 14, C.primary, source, 64, 1046, 1596, 20, "RIGHT", undefined, true); src.name = "SOURCE";
  return ry + 126; }
function browser(p, x, y, w, h, title) { const f = addFrame(p, x, y, w, h, C.white, C.ink, 2.5, "CARD: mock " + title);
  addRect(f, 0, 0, w, 40, C.primaryDeep, C.ink, 2);
  [16, 40, 64].forEach((cx, i) => addEllipse(f, cx, 12, 16, 16, [C.alert, C.accent, C.good][i], C.ink, 1.5));
  addText(f, "Inter", "Bold", 22, C.white, title, 96, 0, w - 112, 40, "LEFT", "CENTER", false); return f; }
```

`hdr()` returns the first content y: 352 on slides 2, 4 to 8 and 411 on slide 3. Smoke test (must print `warnings: []` and `ISSUES 0`):
```bash
cd fintechstico-submission/deck && printf '{ const s = await figma.getNodeByIdAsync("S2");\nhdr(s, 2, V.s2.finding, V.s2.source);\nsoWhat(s, 966, 64, [["The gap: ", "A"], [V.s2.sowhat, "W"]]);\nresults.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }\n' > slides/smoke.js && node mock_figma.js preamble.js values.js slides/smoke.js | grep -E "ISSUES|warnings|nodes"; rm slides/smoke.js
```
If the mock flags the so-what sentence as overflowing one line at h64, shorten that `sowhat` string in `values.js` (keep its meaning and any number).

### 18.3 `deck/values.js` additions (main agent)

Insert before the line `  s2: {`:
```js
  s8: {
    finding: "Every figure in this deck traces to one of 20 sources or 11 stated assumptions; nothing is built, so every performance number is a design target",
    sowhat: "the 1% to 5% band is an assumption, competitor cells marked n/s were not stated on public pages, and no interview has been run",
    source: "Source: Team IdeaForge research notes and verification log, 3 Oct 2026" },
  trend: { labels: ["FY21", "FY22", "FY23", "FY24", "FY25"], evasion: [0.49, 0.73, 1.32, 2.30, 2.23], itc: [0.31, 0.28, 0.24, 0.36, 0.59] }, // F03, F04 in Rs lakh Cr
```
Every other value is already in the file. A digit typed into a slide file is allowed only for geometry and for the fixed strings in §17.

### 18.4 Slide files

Every content slide file has this shape (no clear line; `hdr()` clears everything except `TPL:` nodes):
```js
{ const s = await figma.getNodeByIdAsync("S4");
const Y = hdr(s, 4, V.s4.finding, V.s4.source);
// ... panels exactly as in §17 ...
soWhat(s, 966, 64, [["Day one: ", "A"], [V.s4.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
```
Slide 9 starts with `tplClear(s); head(s, 9);` in place of `hdr()`.

The main agent writes `s03.js` and `s09.js`. Six slide authors run in parallel (one message, six Agent calls, `general-purpose`, `model: "sonnet"`) for N = 2, 4, 5, 6, 7, 8. Prompt for SL-N:

> Write one file: `fintechstico-submission/deck/slides/s0N.js`. First call `Skill("case-competition-deck")` in slide mode and read `references/archetypes.md` for the archetype named for slide N in §16 of the plan at `C:\Users\harsh\.claude\plans\pasted-content-id-d9ef-working-folder-transient-meerkat.md`. Then read plan sections §14 (the contract additions), §15, §16, §17 (slide N only) and §18.4; then `fintechstico-submission/deck/values.js`, `fintechstico-submission/deck/preamble.js` (every helper and its arguments), and the example files named in §16 under `nsbc-case/deck/slides/`.
> Build every panel at the exact x, y, w, h in §17 with the named helper. Use the titles and strings in §17 exactly; numbers come from `V.*`. Start with the shape in §18.4. Nothing of yours may sit above y244 (y303 on slide 3). Text floor 22pt. No new helpers, no images, no rotation, no rounded corners, nothing beyond §17. Zero em dashes, en dashes, question marks or exclamation marks in any string.
> Then run `cd fintechstico-submission/deck && node mock_figma.js preamble.js values.js slides/s0N.js`. It must print `warnings: []` and `ISSUES 0`, with a node total between 150 and 420 (slide 8: at least 110). If it reports an issue, apply only the matching fix rule in plan §18.9 and re-run. Check the skill's five points in §16 against your slide. Do not call any Figma tool. Do not edit any other file. Reply with the final mock output lines, the list of forms on the slide, and the five-point check.

### 18.5 Template setup in Figma (main agent, one write call, before any slide is built)

Load tools: `ToolSearch` with `select:mcp__figma-mcp__use_figma,mcp__figma-mcp__get_screenshot,mcp__figma-mcp__whoami,ReadMcpResourceTool`. Read with `ReadMcpResourceTool`, server `figma-mcp`: `skill://figma/figma-use/SKILL.md`, `skill://figma/figma-use-slides/SKILL.md`, `skill://figma/figma-generate-design/SKILL.md`. Pass `skillNames: "resource:figma-use,resource:figma-use-slides,resource:figma-generate-design"` on every `use_figma` call. This deck positions nodes absolutely on a fixed canvas through the preamble helpers; that is deliberate.

Setup script (fileKey `H3Zr4ESaceYlV54zvpkgZi`):
```js
const names = ["FINTECHSTICO","Problem Statement","Team Name","Solution","Architecture","Technology Used","Feature / USP","Appendix","Thank You"];
const grid = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const flat = () => { const a = []; for (const r of grid.children) for (const s of r.children) a.push(s); return a; };
for (let k = flat().length; k < 9; k++) figma.createSlide();
const all = flat();
const src = (await figma.getNodeByIdAsync("1:86")).children[0];
const out = [];
for (let i = 0; i < all.length; i++) { const s = all[i]; if (names[i]) s.name = names[i];
  if (i >= 7 && s.children.length === 0) { const b = src.clone(); s.appendChild(b); b.x = 0; b.y = -3; }
  if (s.children.length === 1 && !s.children[0].name.startsWith("TPL:")) { s.children[0].name = "TPL: background"; }
  s.children.forEach(c => { if (c.name.startsWith("TPL:")) c.locked = true; });
  out.push({ id: s.id, name: s.name, kids: s.children.length, tpl: s.children.filter(c => c.name.startsWith("TPL:")).length }); }
const fonts = await figma.listAvailableFontsAsync();
const need = [["Poppins","Bold"],["Poppins","ExtraBold"],["Inter","Semi Bold"],["Inter","Bold"],["League Spartan","Bold"],["Roboto","Regular"]];
return { count: all.length, slides: out, fontsOk: need.map(([f,st]) => fonts.some(x => x.fontName.family===f && x.fontName.style===st)) };
```
Expected: `count` 9; every slide `kids` 1 and `tpl` 1; `fontsOk` all true. If `count` is above 9, remove only surplus slides that have no children, then re-run. Screenshot slides 8 and 9 to confirm the background came across. Write `deck/slide_ids.json` as `{"S2":"1:86","S3":"1:116","S4":"1:119","S5":"1:122","S6":"1:125","S7":"1:128","S8":"<id>","S9":"<id>"}`.

### 18.6 Build scripts and id binding

```bash
cd fintechstico-submission/deck && for n in 02 03 04 05 06 07 08 09; do { cat preamble.js; echo; cat values.js; echo "const results=[];"; cat slides/s$n.js; echo; echo "return {results,warnings};"; } > build/slide_$n.js; echo "slide_$n $(wc -c < build/slide_$n.js)"; done
for n in 02 03 04 05 06 07 08 09; do echo -n "s$n: "; node mock_figma.js preamble.js values.js slides/s$n.js | grep -E "ISSUES|warnings" | tr '\n' ' '; echo; done
python - <<'EOF'
import io, json
ids = json.load(open("slide_ids.json"))
for n in range(2, 10):
    t = io.open(f"build/slide_{n:02d}.js", encoding="utf-8").read()
    old = 'getNodeByIdAsync("S%d")' % n
    assert t.count(old) == 1, (n, t.count(old))
    io.open(f"build_bound/slide_{n:02d}.js", "w", encoding="utf-8").write(t.replace(old, 'getNodeByIdAsync("%s")' % ids["S%d" % n]))
print("bound")
EOF
grep -c 'getNodeByIdAsync("S' build_bound/*.js
```
Every build file must be under 50,000 characters; every mock line must read `warnings: [] ISSUES 0`; the last grep must print 0 for every file.

### 18.7 Build loop (main agent only; one slide per `use_figma` call)

1. Calibration against the inspiration decks, read-only, before the first build: `get_screenshot` at `maxDimension: 1600` with `enableBase64Response: true` on `hOJVMGv9nIhDmayTT7DmOt` nodes `5:4` and `5:7`, `APbOstO4SSU7iAjYIgEeSd` nodes `2:9` and `2:11`, `Zi9iywc29lBVzOBupj8Lff` node `0:24`. One log line each in `deck/figma.md`: card look, density, forms. Copy no content.
2. Build slide 2 first: pass the whole of `build_bound/slide_02.js` as `code`. `warnings` must be empty.
3. Run V1 (§18.8) on it. Take a screenshot at `maxDimension: 1600`, save it to `deck/shots/s2.png`, Read it.
4. Tick the checklist: header in League Spartan, centred, fully above the underline; the underline visible; nothing of ours above the underline; the FES logo untouched; FINDING band at most 2 lines; every panel has a caps title, a rule and an ink outline; no rounded corners; at least 8 forms and 3 data visualisations; values on the charts; so-what bar on one line; source line present and clear of the arcs; no text touching text, a bar or a line; no empty region larger than a quarter of a panel.
5. **Header calibration, once, on slide 2.** Compare the screenshot with page 2 of `fintechstico_submission_format.pdf`. The header's lowest letter edge must sit 20 to 45px above the underline. If it does not, change only `HDR_Y` in `preamble.js` by the measured difference, regenerate, rebind and rebuild slide 2. The size stays 110. On slide 3 the same rule applies to `TEAM MEMBERS` against its underline at y285 (adjust the 204 in `head()` if needed).
6. Compare slide 2's screenshot with the prime inspo screenshot. If the visual system reads wrong, fix it now.
7. Build slides 3 to 9 in order, repeating steps 2 to 4 for each. Fix with §18.9 only, at most 3 attempts per slide, then log the residual. Never move on with an unread screenshot.

### 18.8 Validators and sweeps

**V1 (per slide, read-only apart from a throwaway clone):**
```js
await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"},{family:"League Spartan",style:"Bold"},{family:"Roboto",style:"Regular"}].map(f=>figma.loadFontAsync(f)));
const ids=["<SLIDE_ID>"]; const issues=[]; const KEY=/^(PANEL|CARD|KPI|TABLE):/;
for (const id of ids) { const s = await figma.getNodeByIdAsync(id);
  const tpl=s.children.filter(c=>c.name.startsWith("TPL:")); if(tpl.length!==1) issues.push({t:"templateLayer",count:tpl.length});
  const ours=s.children.filter(c=>!c.name.startsWith("TPL:"));
  const rule=ours.find(c=>c.name==="RULE"); const hd=ours.find(c=>c.name==="HEADER");
  if(!rule) issues.push({t:"noRule"}); if(!hd) issues.push({t:"noHeader"});
  if(hd){ if(hd.characters!==s.name) issues.push({t:"headerChanged",got:hd.characters,want:s.name});
    if(hd.fontName.family!=="League Spartan"||hd.fontSize!==110) issues.push({t:"headerFont",f:hd.fontName.family,size:hd.fontSize}); }
  const top=rule?rule.y:226;
  for(const c of ours){ if(c.name==="HEADER"||c.name==="SUBHEADER"||c.name==="RULE") continue;
    if(c.y<top+3) issues.push({t:"aboveUnderline",n:c.name,y:Math.round(c.y)});
    if(c.x<-1||c.x+c.width>1921||c.y+c.height>1081) issues.push({t:"bounds",n:c.name});
    if(KEY.test(c.name) && c.y+c.height>1040) issues.push({t:"belowContent",n:c.name,bottom:Math.round(c.y+c.height)}); }
  const ch=ours.filter(c=>KEY.test(c.name)).map(c=>({n:c.name,x:c.x,y:c.y,w:c.width,h:c.height}));
  for(let i=0;i<ch.length;i++)for(let j=i+1;j<ch.length;j++){ const a=ch[i],b=ch[j];
    const ox=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x), oy=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
    if(ox>=4&&oy>=4) issues.push({t:"overlap",a:a.n,b:b.n}); }
  const hl=s.findOne(n=>n.name==="HEADLINE"); if(hl&&hl.height>88) issues.push({t:"finding3lines"});
  for(const t of s.findAllWithCriteria({types:["TEXT"]})){ const p=t.parent; if(!p||p.type==="SLIDE") continue;
    const tb=t.absoluteBoundingBox, pb=p.absoluteBoundingBox; if(!tb||!pb) continue;
    if(tb.x+tb.width>pb.x+pb.width+1||tb.y+tb.height>pb.y+pb.height+1) issues.push({t:"textOut",chars:t.characters.slice(0,40),parent:p.name});
    if(t.textAutoResize==="NONE"){ const k=t.clone(); p.appendChild(k); k.textAutoResize="HEIGHT";
      if(k.height>t.height+2) issues.push({t:"cellWrap",chars:t.characters.slice(0,40),parent:p.name}); k.remove(); } } }
return {clean:issues.length===0,count:issues.length,issues:issues.slice(0,60)};
```
Known false positives, by design: a layered card's `BACK:` rectangle against its own front. If `headerChanged` reports `want` as a digit, Figma reset the slide names; re-run the naming lines of §18.5 and run V1 again. Slide 1 is never validated or touched; confirm only that it still has exactly one child.

**Whole-deck sweeps after slide 9** (ids S2 to S9):
- **V2 radius (write):** set `cornerRadius = 0` wherever it is a non-zero number on nodes outside `TPL:`; expected count 0.
- **V3 font floor (read):** TEXT under 22pt unless named `SOURCE` or `BIBLIO`. Expected none.
- **V4 language (read):** join all TEXT; test `/[\u2014\u2013!?]/` and every banned word in §2.2. Expected 0.
- **V5 numbers (read):** `₹54 lakh` is in the node named `MONEYSHOT` on slide 4; `₹58,772 Cr`, `₹7.08 lakh Cr`, `₹1.79 lakh Cr`, `91,370`, `1.67 Cr`, `₹43 lakh`, `₹1,577 Cr`, `7,200`, `60,000` are present; absent: `only one of 5`, `none says`, any mention of an earlier project, a live app, a test count or a measured result.
- **V6 density (read):** node total and count of `PANEL:`, `CARD:`, `TABLE:` per slide against §15.3.
- **V7 template compliance (read):** 9 slides, names per §15.1; slide 1 has one child and nothing else; each of slides 2 to 9 has one `TPL:` node, a `HEADER` in League Spartan 110 equal to the slide name, a `RULE`, and no node of ours above the underline; slide 3 has `SUBHEADER` reading `TEAM MEMBERS` in Roboto. Brief compliance from the screenshots: the eight brief rows in 4.B1; six stages in 5.A; dataset in 5.B1 and 5.B2; the voice layer (`Sarvam Saaras v3`, `Sarvam 105B or Gemini`, `Sarvam Bulbul v3`) in 5.B4 and 6.A1.
- **V8 headline-only read:** print the seven FINDING sentences (slides 2 to 8) in order into `deck/figma.md`; read as one paragraph they must run problem, team, solution, architecture, stack, why us, evidence.

### 18.9 Fix rules (apply exactly the one for the issue; nothing broader)

| Issue | Fix in `slides/sN.js` |
|---|---|
| `aboveUnderline` | Move that node down so its top is at or below the first content y; never move the header |
| `headerChanged`, `headerFont`, `noHeader`, `noRule` | Restore through `head()`; never reword, resize or re-font a header |
| `templateLayer` | Stop and report; do not rebuild the background by hand |
| `finding3lines`, a FINDING warning | Cut the two weakest words; keep every number; never below 24pt |
| A panel title over one line | Cut a word that carries no number; never below 22pt |
| `textOut`, `cellWrap`, an overflow warning | Shorten the string with the same meaning ("vs", "a day", "Cr", "est."); never below 22pt; keep numbers. If impossible, widen that column by at most 40px, taking the width from the widest other column of the same table |
| `overlap` of our own PANEL, CARD or TABLE | Move the later-drawn node down or right by the overlap plus 8px if it stays inside the content zone; otherwise report |
| `bounds`, `belowContent` | Move the node up inside the zone; if no room, reduce that table's `rowH` by at most 5px, never below 27 |
| A child chart or table taller than its panel (seen in the screenshot; V1 does not catch it) | Reduce `rowH` or `headH` by at most 5px, or drop the caption line under it |
| Label on a bar, text on a line, arrow through text | Nudge that label or arrow by at most 24px |
| A vector line missing or misplaced | Re-run the slide once; if still wrong and the line is axis-aligned, use `addWireH` or `addWireV`; otherwise report |

After any fix: regenerate, pre-flight, bind, re-run that slide, re-run V1, re-screenshot.

---

## 19. Skill touchpoints (one log line each in `deck/figma.md`)

| TP | When | Call | What is checked |
|---|---|---|---|
| A | Done (logged) | Generate mode | Pattern map: contrarian, seed, symmetric, three scenarios, one moneyshot, double synthesis |
| B | Each slide author, before writing (§18.4) | Slide mode, `references/archetypes.md` | The five-point check in §16, returned in each author's reply |
| C | After the sweeps | Critique mode by sub-agent CR on the 8 screenshots (slides 2 to 9) with `references/critique_rubric.md` and `rhetoric.md` | Scores per dimension; at most five fixes |
| D | Before the final report | Polish search across `fintechstico-submission/deck/slides` and `values.js` for `TODO`, `TBD`, `Insert`, `Placeholder`, `Lorem`, `xyz`, `Toing`, `Swiggy`, `Dream11`, `Paytm`, `Milaan`, `Tarazu` | 0 hits |

Prompt for CR (`general-purpose`, `model: "sonnet"`):

> Invoke the `case-competition-deck` skill in critique mode. Read `references/critique_rubric.md` and `references/rhetoric.md`. Read the screenshots `fintechstico-submission/deck/shots/s2.png` to `s9.png` and §17 of the plan at `C:\Users\harsh\.claude\plans\pasted-content-id-d9ef-working-folder-transient-meerkat.md`. This is a hackathon deck on a fixed organiser template with six content slides, an appendix and a closing slide, so mark as not applicable: table of contents, abbreviations slide, section dividers, multi-slide appendix, bibliography slides, 100-slide structure, and anything about the header wording, which the organisers fix. Lead with what the deck does well in two points, score the remaining dimensions out of 5, then give at most five fixes. Each fix must be a wording change of the same length or shorter that keeps every number. Flag any claim that reads as a measured result when it is a design target. Do not edit any file.

The main agent accepts only wording fixes that keep length, numbers, layout and the argument unchanged, and re-runs V1 and V4 on each touched slide.

---

## 20. Execution sequence

| Step | Who | Action | Done when |
|---|---|---|---|
| C1 | main | §18.1 reconcile; append §18.2; smoke test; §18.3 additions to `values.js` | `warnings: [] ISSUES 0` |
| C2 | main | Write `slides/s03.js` and `slides/s09.js` from §17; mock each | Both clean |
| C3 | SL-2, SL-4, SL-5, SL-6, SL-7, SL-8 in parallel (one message, six Agent calls) | §18.4 slide files | Six mock outputs clean, six five-point checks returned |
| C4 | main | §18.5 template setup in Figma; write `slide_ids.json` | 9 slides, each with one `TPL:` layer, fonts all true |
| C5 | main | §18.6 regenerate, pre-flight, bind | Eight lines clean, all under 50,000 characters, grep 0 |
| C6 | main | §18.7 build loop, slide 2 first with the header calibration, then 3 to 9 | Eight slides built, V1 clean or residual logged |
| C7 | main | §18.8 sweeps V2 to V8 | All at expected values |
| C8 | CR, then main | Touchpoint C; accepted wording fixes applied and re-validated | Scores logged |
| C9 | main | Raster PDF: screenshot all nine at `maxDimension: 3840`, assemble with PyMuPDF (`py -3.12`) into `deck/TeamIdeaForge_Fintechstico_preview.pdf`, one page per slide | 9 pages, Read to confirm |
| C10 | main | Touchpoint D; final report (§21) | Sent |

Parallelism rules: Figma calls are never delegated and never run in parallel. Sub-agents write only their own slide file. Every shell block is POSIX and runs in the Bash tool. C3 may run while C4 proceeds.

---

## 21. Verification and final report

**End-to-end checks before reporting done**

1. Template: V7 clean. Slide 1 untouched. Every header matches the organisers' PDF in words, font (League Spartan, 82.7pt = 110px) and position above its underline; `TEAM MEMBERS` in Roboto.
2. Structure: V1 clean on slides 2 to 9; V2 count 0; V3 none; V6 within the density contract.
3. Language: V4 0 hits.
4. Numbers and honesty: V5 clean. Grep the joined slide text for "achieved", "we tested", "our users", "pilot showed", "accuracy of", "live", "deployed"; each hit must sit beside "target", "design" or "est.", or be removed.
5. Brief coverage: PS2-C1 to C7 and PS2-D visible in panel 4.B1; the voice layer visible in 5.B4 and 6.A1.
6. Visual: eight screenshots read against the §18.7 checklist; the preview PDF has 9 pages.

**Final report to the user contains:** the Figma URL; the paths of the preview PDF, the verification files and the build log; validator results; critique scores; residuals, if any; and four plain reminders:
- Export from Figma with File, Export, as PDF or PPTX, whichever the submission form asks for.
- Every performance figure is a design target and every rupee impact is a worked estimate. The 1% to 5% band behind ₹54 lakh is an assumption.
- Competitor cells marked `n/s` mean the vendor's public page was silent, not that the feature is absent. The GST portal's pages could not be read by the verifier; check them by hand before the live round.
- The submission deadline is still to be confirmed by the team.
