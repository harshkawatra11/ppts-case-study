# BeyondTech x DCG (DTU) case: research-first plan, then the Figma deck

Working folder: `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\beyondtech-dcg\`
(called `BT/` below). Repo root is `ROOT/` = `...\nsut-innovators-court\`.
Team: Harsh Kawatra and Anuj (surname to be confirmed), both Delhi Technological University.
Plan written 9 Oct 2026 by the lead (Opus). Executed by Sonnet sub-agents under the lead.

---

## 0. How to read this plan

| Part | Sections | What it holds |
|---|---|---|
| I | 1 to 2 | Context, ground rules, banned words, tag legend |
| II | 3 to 5 | The case decoded, the solved argument, seed facts and assumptions |
| III | 6 to 9 | Research lanes, college scorecard, model spec, research document spec |
| IV | 10 to 13 | Skill touchpoints, environment, execution sequence with gates, sub-agent prompts |
| V | 14 | Stage 2: the deck blueprint (design system, diagram grammar, 12 slides, images, build, QA) |
| VI | 15 to 17 | Recovery table, final verification, open items for Harsh |

### 0.1 Two stages, one gate between them

- **Stage 1 (this approval covers it end to end): the research deliverable.** Output is
  `BT/research/beyondtech-gtm-research.md` plus `.html` and `.pdf`, backed by a verified fact base,
  a college scorecard dataset and a Python model.
- **Stage 2: the Figma deck.** Section 14 fixes the storyline, slide architecture, diagram grammar and
  build method now. The exact slide copy and slide code are written by the lead into `BT/DECK-PLAN.md`
  only after Gate G5, when every number is locked. This follows the user's instruction that the deck is
  planned from the research.

### 0.2 Roles

| Role | Model | Does | Never does |
|---|---|---|---|
| Lead | Opus (main session) | Dispatches agents, reads their reports, decides at gates G0 to G7, writes `DECK-PLAN.md`, runs skill touchpoints | Bulk web research, bulk prose writing |
| Verifiers V-A to V-J | Sonnet, `subagent_type: general-purpose` | One research lane each: fetch pages, fill the lane file, mark status | Change the argument, write prose sections, edit another agent's file |
| Scorers SC-1 to SC-3 | Sonnet | Fill the college dataset CSV for an assigned region | Pick colleges, change weights |
| Modeller MD | Sonnet | Writes and runs `BT/model/beyondtech_gtm_model.py` from section 8 | Invent an input that has no A## or S## |
| Writers W-A to W-F | Sonnet | One part file each of the research document | Browse the web, change numbers, change headings |
| Critic CR | Sonnet | Scores the doc, then the deck, with the skill's critique mode | Rewrite content |
| Builders FB-1 to FB-4 | Sonnet | One Figma batch each (Stage 2) | Change copy without logging it |

### 0.3 Execution contract (applies to every sub-agent)

DO
1. Read the files named in your prompt before acting. They are the only truth.
2. Write only the one output file your prompt names. Write it early and extend it.
3. Tag every number with its provenance tag (section 2.4).
4. When a fact cannot be found after three distinct searches, write `NOT FOUND` and move on.
5. End your reply with the acceptance check output your prompt asks for.

DO NOT
1. Do not invent a quote, a survey, an interview, a percentage or a rupee figure.
2. Do not use an em dash or an en dash anywhere. Write ranges as "13 to 14".
3. Do not resolve a conflict yourself. Log it in `## Conflicts` and stop.
4. Do not read or lean on `lsr-caseforchange/research/` or its deck storyline. That deck did not reach
   its final. Its build scripts are not used either; `verdict-mnc/deck/` tooling is the template.
5. Do not start a later step because an earlier one looks done. The lead opens each step.

### 0.4 First action of execution (step B0)

Copy this plan byte for byte to `BT/PLAN.md`. Plan files in `C:\Users\harsh\.claude\plans\` have been
overwritten by later sessions before, which broke `iim-lucknow-pivot/research/assemble.py` and
`maudrik-policy/deck/gen.py`. From B0 onward every script and prompt reads `BT/PLAN.md`, never the
`.claude\plans` path.

---

# PART I

## 1. Context

BeyondTech is a non-tech placement accelerator for Tier-1 B.Tech students, founded in 2022 by Harsh
Agarwal (DTU 2023). It is co-hosting a case competition with DTU Consulting Group (DCG). The task is a
go-to-market strategy on two pillars: deepen penetration at DTU, and launch at 3 to 4 new Tier-1
colleges. The deliverable is an 8 to 12 slide deck excluding title and appendix.

Scoring: DTU GTM plan 30% (channel mix, budget split, realism), college selection 25% (scorecard logic
and numbers behind each pick), pan-India launch plan 25% (entry approach and trust from scratch),
insight and creativity 10%, presentation quality 10%.

The user wants three things, in this order:
1. A deep, organised, verified research deliverable in `BT/` that the deck can be built on.
2. A plan detailed enough that Sonnet agents execute without re-deciding anything (this file).
3. A consulting-grade, content-dense, Figma-native deck: 1 cover, 9 core slides, 1 appendix,
   1 thank-you, with a proper mind map and brand image placeholders on the cover, and heatmaps, tables,
   bars, lines, funnels and maps throughout.

Decisions already taken with the user on 9 Oct 2026:

| Topic | Decision |
|---|---|
| Program fee | Not published. The site shows an application, review, fit interview and then an "enrollment fee". Treat the fee as an assumption with three price points and a sensitivity (A01). |
| Primary research | Desk research only. No survey, no interviews. The doc and deck carry an honest Customer Validation Plan. Public student voice may be quoted verbatim with attribution. |
| India map and pathway art | Hybrid. Generated base artwork only; every pin, label, number and callout is native Figma on top. A native SVG fallback exists (section 14.6). |
| Team | Harsh Kawatra and Anuj, both DTU. Table columns: Members, Institution, Role. Same table on the thank-you slide. No KPI-card row on the cover. |
| Slide count | 12: cover, 9 core, 1 appendix, 1 thank-you. The 9 core slides sit inside the brief's 8 to 12 limit. |
| Reference decks | Prime: Satoshi Gate `hOJVMGv9nIhDmayTT7DmOt`, Dream11 `YoiazGGOribfg69EjEDIlP`, SwasthyaGrid `O0YlsAbRsIqQqSugUDWrxJ`. Cover mind map follows Dream11 and SwasthyaGrid, not the plain-text Satoshi cover. |

## 2. Ground rules

### 2.1 Content integrity (from `ROOT/CLAUDE.md` section 5, non-negotiable)

- No fabricated primary research. No invented quotes, LOIs or willingness-to-pay figures.
- India-first figures in ₹, lakh and crore with Indian digit grouping.
- Every quantitative claim carries a source. Precision never exceeds what the source supports.
- Every headline number is propagated to every place it appears. Grep before calling a change done.
- BeyondTech's own figures come only from the brief, its website and its LinkedIn page. A wrong fact
  about the client undoes ten right ones (organiser playbook, mistake 10).

### 2.2 Language rules (doc and deck)

- Humanised, graded consulting prose. Concrete nouns, varied sentence length, like a strong memo.
- No hooks, no rhetorical questions, no question-style headings, no exclamation marks.
- Zero em dashes and zero en dashes. Negatives use the true minus "−".
- Banned (case-insensitive): delve, landscape, unlock, game-changer, here's, let's, bottom line,
  it's not just, make no mistake, in today's, fast-paced, seamless, robust, tapestry, testament, realm,
  holistic, synergy, paradigm, cutting-edge, revolutioniz, leverage (as a verb), navigate the, crucial,
  pivotal, furthermore, moreover, in conclusion, it is worth noting, supercharge, elevate, empower,
  journey (except "customer journey" as a framework name), ecosystem (except in a source title).
- Never write "BeyondTech should run ads" style generic lines. Every recommendation names the campus,
  the society or channel, the month, the cost and the expected number.

### 2.3 Two people named Harsh

The founder is **Harsh Agarwal** (BeyondTech). The team lead is **Harsh Kawatra**. In every file write
"the founder" or "Harsh Agarwal" for the first and "Team IdeaForge" or the full name for the second.
Never write a bare "Harsh".

### 2.4 Provenance tags

| Tag | Meaning | Lives in |
|---|---|---|
| `[B ##]` | Case brief fact | `BT/case/01-beyondtech-brief.md` |
| `[W ##]` | BeyondTech website, LinkedIn or Topmate capture | `BT/case/02-beyondtech-public-footprint.md` |
| `[P ##]` | Organiser playbook principle | `BT/case/03-organiser-playbook-digest.md` |
| `[S###]` | External source | `BT/research/raw/sources.md` |
| `[D college.Cn]` | A cell of the college dataset | `BT/research/data/college_scorecard.csv` |
| `[A##]` | Team assumption | `BT/PLAN.md` section 5.3 and the model |
| `[M T#]` | Model output table | `BT/model/model_tables.md` |
| `[V ##]` | Public student voice quote (verbatim, attributed) | `BT/research/raw/R-I-student-voice.md` |

---

# PART II: THE CASE, DECODED AND SOLVED

## 3. The case decoded

### 3.1 What the brief asks (transcribe with these IDs in step B1)

| ID | Ask or fact |
|---|---|
| B01 | Company: non-tech placement accelerator for Tier-1 B.Tech students |
| B02 | Task: GTM strategy for two pillars, DTU penetration and pan-India Tier-1 expansion |
| B03 | Format: 8 to 12 slides, PDF or PPTX, excluding title and appendix |
| B04 | At-a-glance proof point: "40 selections across 14 organisations" at DTU this season, plus numerous selections at NSUT, BIT Mesra and Thapar |
| B05 | Results table: DTU "50+ so far", average package 13 to 14 LPA ("one of the highest"), highest 47 LPA at Eternal; firms Eternal, JP Morgan Chase, Bain, ZS, Everest, PwC |
| B06 | NSUT: Eternal, ZS, Bain, Prism, L.E.K. Consulting. Thapar and BIT Mesra: Bain, ZS, Deloitte |
| B07 | Flagship: mentor-led "Non-Tech Placement Mastery Program", 11-week live and recorded bootcamp, four phases (consulting foundations, analytics mastery, product strategy, personalized prep) |
| B08 | Also: company-specific previous-year questions, weekly mocks with leaderboards, off-campus guidance and referrals |
| B09 | Positioning: "One course for every non-tech company visiting your campus" |
| B10 | Growth engine: word-of-mouth, community and founder-led mentorship; "which is why DTU is so dense" |
| B11 | Core problem: strong satisfaction and DTU recall, but the engine is informal and tied to the founder's presence |
| B12 | Bottleneck 1, TAM limitation: narrow audience, and not every campus gets strong non-tech recruiters |
| B13 | Bottleneck 2, channel dependency: word-of-mouth, WhatsApp communities, LinkedIn (company page and founder profile); no repeatable paid marketing, no structured ambassador flywheel, growth cannot be forecast |
| B14 | Vertical 1 ideas: societies, department networks, placement cell; Instagram and LinkedIn ads, campus influencers; mock placement drives and case workshops |
| B15 | Vertical 1 deliverable: a GTM plan to raise DTU penetration with a budget split between organic and paid |
| B16 | Vertical 2: outside DTU, NSUT, Thapar and BIT Mesra almost no one knows BeyondTech |
| B17 | Vertical 2 pick: 3 to 4 Tier-1 colleges with strong non-tech culture, on a simple scorecard (examples: non-tech companies visiting, active non-tech societies, placement timeline); public data and clearly stated estimates are fine if every pick is backed by numbers |
| B18 | Vertical 2 launch: entry without a local founder or word-of-mouth (ambassadors, society tie-ups, digital ads, alumni success stories) |
| B19 | Vertical 2 deliverable: 3 to 4 picks with a one-line reason each, and a launch GTM |
| B20 | Scoring weights: 30 / 25 / 25 / 10 / 10 |
| B21 | Hyperlinks: website `https://www.beyondtech.org.in/`, company LinkedIn `https://www.linkedin.com/company/beyondtech2/`, founder LinkedIn `https://www.linkedin.com/in/harsh-agarwal134/` |

### 3.2 What the three hyperlinks add (captured by the lead on 9 Oct 2026; V-A re-verifies)

| ID | Finding | Why it matters |
|---|---|---|
| W01 | Site stats: 300+ students mentored, 250+ placed, 20+ companies | Lifetime base for sizing current penetration |
| W02 | Placement Mastery page: average salary ₹15 LPA, highest ₹60 LPA; "8 Month Course / 12 Months" stat line | Conflicts with the brief (B05, B07) |
| W03 | Week-by-week curriculum runs Week 1 to Week 12 (Week 12 is a graduation project) | Brief says 11 weeks |
| W04 | Live class every Saturday 7 to 8 PM, doubt session every Sunday 6 to 7 PM, recorded classes weekly | Delivery capacity is one cohort stream; relevant to the founder bottleneck |
| W05 | Next batch starts 15 Jan 2027 | Anchors the whole GTM calendar |
| W06 | Admission is gated: application form, application review, culture and fit interview (which tests "readiness to pay the enrollment fee"), then payment. No price shown anywhere | Funnel has a human step per applicant; price opacity is a conversion variable |
| W07 | Free "Course Sampler": the Guesstimate module is free to watch | An existing lead magnet |
| W08 | Resources page: 8 free PDFs (Online Assessments Guide, Bain Analyst Roadmap, Meesho Business Analyst Roadmap, Product, Business and Data Analyst Roadmaps, Management Consulting Roadmap, Projects Guide) served as open Google Drive links | Lead magnets with no lead capture: the top of the funnel leaks by design |
| W09 | Mentors listed: Harsh Agarwal (Founder), Subham Mukhopadhyay (Associate, Bain), Subrat Sarangi (Business Analyst, Amazon), Akshit Goel (Product Manager, Google) | Brief names only two; four gives a credibility asset for new campuses |
| W10 | Testimonials: Ayush Pratap Singh (Business Analyst, Meesho), Suhani Sharma (Analyst, Bain), Ravi Shakya (Business Analyst, OYO) | Three named proof points; all need their college confirmed |
| W11 | Contact is a WhatsApp number with a prefilled message; "Request a callback" CTA | Sales motion is 1:1 chat |
| W12 | Company LinkedIn: about 3,018 followers, founded 2022, Delhi, 2 to 10 employees, 14 people associated | Size of owned audience |
| W13 | LinkedIn post about a month old: recruiting campus ambassadors from DTU, NSUT, Thapar and BITS Pilani; about 15 reactions | An ambassador attempt already exists and is weakly pulled; BITS Pilani is already on the founder's radar |
| W14 | LinkedIn post about a week old: Founder's Office intern hiring; about 269 reactions, 26 comments | Job-type posts pull 18 times the ambassador post: students respond to career upside, not brand service |
| W15 | LinkedIn post about a week old: case competition with DCG, prize pool ₹40,000+; about 49 reactions, 19 comments | This competition is itself a BeyondTech acquisition play |
| W16 | Founder Topmate: 312 bookings, 4.9 of 5 from 14 ratings, low-ticket items at ₹49 to ₹50, a free cold-email template, "4M+ impressions", DTU 2023 | A second owned funnel and a price-ladder precedent |
| W17 | Founder LinkedIn profile returned HTTP 999 to automated fetch | V-A must capture it through the Chrome tools or mark NOT FETCHED |

### 3.3 Conflicts already visible (go into `## Conflicts`; the lead rules on each at G1)

| # | Conflict | Default ruling until G1 |
|---|---|---|
| X1 | "40 selections across 14 organisations" (B04) against "50+ so far" (B05) | Use "50+ selections" as the headline because it appears twice and is the later-looking figure; quote "14 organisations" only with the 40 |
| X2 | Average 13 to 14 LPA and highest 47 LPA (brief) against ₹15 LPA and ₹60 LPA (website) | Brief figures are this season at DTU; website figures are lifetime marketing claims. Use the brief on slides |
| X3 | 11 weeks (brief) against 12 listed weeks and "8 Month Course / 12 Months" (website) | Say "11-week bootcamp" as the brief does; mention the inconsistency once in the doc as a site hygiene fix |
| X4 | Two mentors (brief) against four (website) | Use four, sourced to the website |
| X5 | "average package 13 to 14 LPA (one of the highest)" against a reported DTU 2026 campus average near ₹15.45 LPA | Never claim BeyondTech's average beats the campus average. Compare against non-CS or non-tech-role averages only if V-B finds them |
| X6 | "Tier-1" is undefined in the brief | Define it in the doc: institutes of national importance and state flagships whose B.Tech median CTC and recruiter list overlap the four core campuses (section 7.1) |

### 3.4 What the organisers' own material tells us about the judges

`BT/Consulting_Pitch_Deck_Playbook.pdf` is a DCG document. DCG is co-judging. Its rubric is the hidden
scoring sheet for "insight" and "presentation quality". The rules that bind this deck:

| ID | Playbook rule | How this plan obeys it |
|---|---|---|
| P01 | Teach the founder one thing they did not know (top winner behaviour) | One outside-in exhibit per core slide; the recruiter-overlap index and the ungated lead magnets are the two strongest |
| P02 | Play the problem back in the founder's words | Slide 3 quotes B10, B11, B13 verbatim |
| P03 | Lead with the answer; SCQA on the summary slide | Slide 2 |
| P04 | Titles tell the story alone | Ghost-deck test at touchpoint B |
| P05 | Three facts only this founder gave you on slides 2 to 4 | W05, W06, W08, W13 to W15 |
| P06 | Source every number; assumptions explicit | Source line on every slide; assumptions register in the appendix |
| P07 | Promise decisions and artefacts you control, not revenue you do not | Three scenarios; targets framed as enrolments and CAC with kill criteria |
| P08 | Options and a dated next step; do not end on "Thank you" alone | Slide 10 closes with a dated first step; the thank-you slide exists only for the team table |
| P09 | Real artefacts, never stock or generic AI illustrations | Real logos, screenshots of BeyondTech's own pages; generated art limited to two base shapes |
| P10 | "Your real competitor is the founder plus an AI tool on a Sunday afternoon": desk frameworks are cheap | The deck's value is the computed dataset (24 colleges by 7 criteria) and a costed calendar, not frameworks |
| P11 | Do not overpromise; state the founder's time cost | A founder-hours budget is a model output (T11) |
| P12 | Typos and wrong client names lose trust | Sweep list in section 16 includes every proper noun |

The six organiser inspiration decks in `BT/a-few-inspos/` set the visual expectation. Their diagram
grammar is catalogued in section 14.3.

## 4. The solved argument

Run by the `case-competition-deck` skill, generate mode, steps 1 to 7 (touchpoint A, section 10).

### 4.1 Case type and audience

- Case type: **Marketing (go-to-market)** for Pillar 1 and the launch half of Pillar 2, with a
  **Strategy (market entry and selection)** layer for the college picks. Guides to read:
  `ROOT/.claude/skills/case-competition-deck/references/case_types/marketing.md` and `strategy.md`.
- Calibration honesty: the skill's patterns come from three M&A decks. For a marketing case its
  frameworks are plausible extrapolation. The structural patterns (contrarian recommendation, action
  titles, one moneyshot, foreshadowing, symmetric treatment, three scenarios, double synthesis,
  defensive depth) are used with confidence. The doc states this in section 0.
- Audience: a founder who built the product himself, and student consultants who wrote a playbook on
  what a good deck is. Register: plain, specific, numerate. No banker flex.

### 4.2 The governing thought (one sentence the founder could repeat)

> BeyondTech does not have an awareness problem at DTU or a brand problem elsewhere; it has a proof
> distribution problem, so it should turn each campus into a calendar-locked proof loop: capture
> second and third years through societies and mock drives before the referral reaches them at DTU,
> and enter only those new campuses where its existing recruiter question bank already applies,
> borrowing a society's trust first and earning its own with a founding cohort.

### 4.3 The three contrarian moves (skill pattern A)

| Pillar | Obvious answer the brief invites | Why it falls short | Our answer |
|---|---|---|---|
| DTU | Spend on Instagram and LinkedIn ads to raise awareness | The brief itself says recall is strong (B11). A 2,400-student campus is too small a pool for broad paid reach to be efficient, and the funnel leaks after awareness: ungated lead magnets (W08), a 1:1 WhatsApp sales step (W11), a gated application (W06) | Organic-first, about 70:30 (the model sets the exact split by funding channels in ascending CAC). Paid money only retargets people who already touched an event, a PDF or a mock drive. The real move is earlier entry: second and third years, and the non-circuital branches referrals do not reach |
| College selection | Pick the most famous names: old IITs, BITS Pilani | Fame is not fit. BeyondTech's asset is company-specific preparation for the recruiters that visit a campus (B08, B09). That asset transfers only where the same recruiters hire. Old IITs also have alumni-run consulting clubs with free casebooks, so the prep vacuum is small | Rank by recruiter overlap, non-tech offer depth, society surface, prep vacuum, calendar fit and access, not by rank or brand. Show the IITs on the scorecard and show why they score lower |
| Launch | Recruit campus ambassadors and run ads | W13 shows the ambassador call drew about 15 reactions. An ambassador with no local result has nothing to point at. Ads from an unknown brand buy clicks, not trust | Trust in three steps: borrow it (a co-branded case league with the campus consulting or analytics society, the exact format BeyondTech is running with DCG now, W15), seed it (a subsidised founding cohort of about 20 per campus), earn it (their offers become local proof inside one placement season). Ambassadors are recruited from the founding cohort, so every ambassador is a customer first |

### 4.4 The moneyshot (skill pattern D; exactly one in the deck)

Format: channel reallocation impact, as a single line under a waterfall on slide 6.
Template, filled by the model at G4:

> "₹{dtu_budget} lakh at DTU buys {dtu_enrol_base} enrolments at a blended ₹{cac_blended} each, and
> the organic {organic_pct}% of the budget delivers {organic_enrol_pct}% of them."

Fallback if the model shows paid and organic CAC within 20% of each other: switch the moneyshot to the
penetration figure, "from {pen_now}% to {pen_target}% of DTU's non-tech aspirant pool in one season".
The lead chooses at G4 and logs the choice.

### 4.5 Insight bank (each one must survive verification or be dropped)

| # | Insight | Evidence needed | Lane |
|---|---|---|---|
| I1 | Recall is high but reach is narrow: referrals travel through placed seniors, so they reach circuital-branch fourth years and skip second years and non-circuital branches | DTU intake by branch; branch-wise placement rates; branch of BeyondTech's public testimonials | V-B, V-A |
| I2 | The top of the funnel has no net: eight lead magnets are open Drive links and the sampler is ungated (W07, W08) | Re-verify the links are open without a form | V-A |
| I3 | The sales motion costs founder-hours per student: WhatsApp chat plus a fit interview (W06, W11) | Site capture; model T11 turns it into hours | V-A, MD |
| I4 | Students respond to career upside, not brand duty: intern post 269 reactions against ambassador post 15 (W13, W14) | Re-capture reaction counts with dates | V-A |
| I5 | This competition is the launch play in miniature (W15): a society lends reach and trust, a prize pool of ₹40,000 buys a high-intent audience | DCG reach; registration count if public | V-B |
| I6 | Non-tech interest is rising because tech hiring for freshers is tighter and non-CS branches have always been locked out of top SDE pay | IT fresher hiring data 2023 to 2026; branch-wise CTC | V-C |
| I7 | The placement calendar creates three buying windows a year, and BeyondTech sells in only one | Internship season, placement season and off-campus cycle dates at DTU and target campuses | V-B, SC |
| I8 | Competitors sell guarantees; India's 2024 coaching-advertisement guidelines restrict exactly those claims, so verified, consented, named results are a durable edge | CCPA guidelines text; competitor claim capture | V-D, V-H |
| I9 | A recruiter-overlap index predicts where BeyondTech's question bank is worth the most | Recruiter lists for 24 colleges | SC |
| I10 | Price opacity plus a fit interview may be suppressing applications from students who assume it is expensive | Competitor price transparency; no primary data, so stated as a hypothesis with a test | V-D |

Anything that fails verification is deleted from the doc and deck, not softened.

### 4.6 Falsification rules (the lead applies these at gates; agents do not)

| If the research shows | Then |
|---|---|
| Fewer than 4 non-IIT colleges pass the screen in section 7.2 | Relax F2 from 5 anchor recruiters to 4 and log it; do not relax F1 |
| An old IIT scores in the top 4 on the full scorecard | Keep the result honest: report it, and let the portfolio rule (7.5) decide. Do not rig weights |
| DTU non-tech aspirant pool cannot be sized within a factor of 2 | Present penetration as a range and move the moneyshot to CAC |
| Paid CAC at base is lower than organic CAC | Drop the "organic-first" framing; the title of slide 6 becomes whatever the model shows |
| A recommended society turns out inactive (no post in 6 months) | Replace it with the next society in `societies.csv` by reach |

### 4.7 Touchpoint A confirmation (run 10 Oct 2026; see `build-log.md` for the full note)

Section 4 is confirmed against `references/structure.md`, `case_types/strategy.md` and
`references/rhetoric.md`. Two refinements added, neither changes the argument:

- **Third-party validation (rhetoric.md pattern 7).** The deck needs 2 to 4 named, dated quotes
  validating the "borrow trust before buying ads" mechanism specifically, not just the general
  campus-brand-building literature already scoped in Lane G item 4 (Rogers, Moore, Cialdini,
  Granovetter). Lane G item 1 and item 3 already gather named, operator-level precedent (Coding
  Ninjas, Internshala, campus case competitions); V-G should additionally capture 2 to 4 direct
  quotes, with name, title and date, from a founder, growth lead or named journalist describing why
  a campus brand needs a local trust anchor before paid acquisition works. These feed the commentary
  rail on slide 8 and doc section 17. If fewer than 2 survive verification, the mechanism stands on
  the Rogers/Moore/Cialdini/Granovetter citations alone and the doc says so plainly rather than
  padding with weak quotes.
- **Moneyshot decomposition (rhetoric.md pattern 4) is already satisfied.** The per-channel CAC
  waterfall on slide 6 (diagram G9, fed by model table T3-T4) decomposes the blended CAC into its
  channel components by construction; no separate step is needed.

Seed-slide check (structure.md section II): slide 3's title already names the gap ("five breaks sit
between hearing of BeyondTech and paying") without naming the cure, which slide 8 later supplies.
Confirmed as the deck's foreshadow slide; no change needed.

Compression check (structure.md "Compression guidance for shorter formats"): this 12-slide deck
already follows the prescribed order (cut appendix first, compress alternative and context, never
cut exec summary/moneyshot/synthesis/bibliography), consistent with `ROOT/CLAUDE.md` section 0's own
compression instruction. No change needed.

---

## 5. Seed facts and assumptions (status PLAN until a verifier confirms)

### 5.1 Seed facts found by the lead on 9 Oct 2026

Every row is unverified. Verifiers confirm against the page, correct, or mark NOT FOUND.

| Seed | Fact as seen | Where seen | Lane |
|---|---|---|---|
| F01 | DTU 2026 placements: about 1,486 of 2,442 registered students placed (about 61%), campus average ₹15.45 LPA, median ₹15.00 LPA, 350+ companies, about 1,766 offers | ownyourcareer.in "DTU Placements 2026"; collegedunia DTU placement page | V-B |
| F02 | Eternal reported as the highest average CTC recruiter at DTU, about ₹55 LPA | same search result | V-B |
| F03 | Consulting and analytics recruiters named for DTU: BCG, McKinsey, Bain, Deloitte, Bank of America, Deutsche Bank, Fractal, SmartCube | same | V-B |
| F04 | BITS Pilani sector split: IT/software 50%, analytics 16%, banking and finance 7%, manufacturing 6%, consulting 2%; phase-1 2025-26 all-campus median ₹28 LPA, Pilani ₹30 LPA, 920+ placed across three campuses; recruiters include BCG, Kearney, ZS, Deloitte USI, EY | Careers360 news; BITS statistics PDF `https://www.bits-pilani.ac.in/wp-content/uploads/University_Statistics_for_2024-25_V1.0.pdf` | SC-1 |
| F05 | A Bain analyst campus-hiring listing restricted to PEC Chandigarh (2023 batch) existed | in.prosple.com Bain India listing | SC-1 |
| F06 | NIT Warangal 2025-26 early phase: 200+ offers above ₹20 LPA, average about ₹26 LPA; McKinsey named among recruiters | Careers360 | SC-2 |
| F07 | IGDTUW: about 52 companies visited; HUL and Mahindra among them | igdtuw.ac.in placements | SC-1 |
| F08 | CrackNonTech: 8-week fellowship at ₹8,999 (struck from ₹35,000), a 21-day sprint, "100% refund guarantee", claims 1,500+ placed, 50,000+ community, 4.7 of 5, 18 months of placement support; names DTU, BITS Pilani, NSUT, AKTU alumni; founder Jitendra Kumar | cracknontech.com | V-D |
| F09 | NextLeap product management course priced under ₹40,000 with EMI from about ₹1,322 a month | nextleap.app | V-D |
| F10 | Meta ads in India for edtech: CPM ₹160 to ₹340, CPC ₹14 to ₹38, CPL ₹200 to ₹600 | upgrowth.in, sotrosinfotech.com 2026 benchmark posts | V-F |
| F11 | LinkedIn ads in India: CPC ₹150 to ₹650 in general | upgrowth.in | V-F |
| F12 | Coding Ninjas campus programme: 4,000+ ambassadors across 1,000+ campuses, six-month terms, referral incentives | naukri.com/code360 library | V-G |
| F13 | An example ambassador payout of ₹5,000 per enrolment with no fixed stipend (RiseUpp) | jobs.weekday.works listing | V-G |
| F14 | DCG playbook cites RAIN Group, Hinge, DemandGen, Taproot and Minto | `BT/Consulting_Pitch_Deck_Playbook.pdf` | B2 |

### 5.2 Things the lead looked for and did not find (do not assume)

- BeyondTech's fee, cohort size, DTU member count, refund terms, Instagram or YouTube presence.
- Recruiter-level non-tech offer counts for any campus other than fragments.
- Any public data on how many DTU students sit for non-tech roles.

### 5.3 Assumptions register (seed; the modeller may add A31 onward, never renumber)

Each has bear / base / bull. The source column says what would replace it.

| ID | Assumption | Bear | Base | Bull | Basis | Replace with |
|---|---|---|---|---|---|---|
| A01 | Program fee per student (₹) | 8,000 | 12,000 | 18,000 | Bracketed by CrackNonTech ₹8,999 (F08) and NextLeap under ₹40,000 (F09); BeyondTech is longer and has Bain, Amazon and Google mentors | Founder's actual fee |
| A02 | DTU B.Tech batch size per year | from V-B | from V-B | from V-B | Official intake | n/a |
| A03 | Share of a DTU batch open to non-tech roles | 20% | 30% | 40% | Non-circuital branches plus a share of circuital; set after V-B gives branch intake | Placement cell data |
| A04 | BeyondTech DTU enrolments in the last 12 months | 80 | 110 | 140 | 50+ selections (B05) divided by an assumed 35% to 60% selection rate | Founder's CRM |
| A05 | Share of current DTU enrolments that arrive by referral | 90% | 80% | 70% | B13 says marketing "relies entirely" on word of mouth, WhatsApp and LinkedIn | Founder's CRM |
| A06 | Society co-hosted event: registrations per event | 80 | 150 | 250 | To be benchmarked on public Unstop registration counts for DTU society events (V-B) | Event data |
| A07 | Event registrant to lead (attends and joins WhatsApp or drops email) | 35% | 50% | 65% | Webinar show-up benchmarks (V-F) | Event data |
| A08 | Lead to application | 8% | 12% | 18% | Cohort-course funnel benchmarks (V-F) | CRM |
| A09 | Application to enrolment (after fit interview) | 30% | 45% | 60% | Gated admission (W06) | CRM |
| A10 | Mock placement drive: participants per drive | 100 | 200 | 350 | Unstop DTU event counts (V-B) | Event data |
| A11 | Meta CPL for a campus-geofenced student audience (₹) | 600 | 350 | 200 | F10 | Pilot campaign |
| A12 | LinkedIn CPL (₹) | 1,500 | 900 | 500 | F11 and V-F | Pilot campaign |
| A13 | Paid lead to application | 3% | 6% | 10% | Colder than event leads; V-F | Pilot |
| A14 | Ambassador-sourced enrolments per ambassador per season | 2 | 4 | 7 | V-G benchmarks | Programme data |
| A15 | Ambassador payout per enrolment (₹) | 1,500 | 1,000 | 750 | About 8% of base fee; compare F13 | Policy choice |
| A16 | Referral reward per enrolment, split giver and joiner (₹) | 1,500 | 1,000 | 500 | Policy choice | n/a |
| A17 | Founding cohort size per new campus | 12 | 20 | 30 | One mock-interview panel's capacity | Ops |
| A18 | Founding cohort discount | 50% | 40% | 30% | Trust purchase | Policy choice |
| A19 | Founding cohort selection rate into non-tech offers | 25% | 40% | 55% | Below DTU's implied rate because the playbook is new on that campus | Season 1 data |
| A20 | Season 2 enrolments per new campus as a multiple of founding cohort | 1.5 | 3.0 | 5.0 | Proof loop strength | Season 2 data |
| A21 | Cost of one co-branded case league per campus (₹): prize pool, society fee, creatives | 60,000 | 45,000 | 30,000 | W15 shows ₹40,000+ prize pool at DTU | Actuals |
| A22 | Founder hours per enrolment today | 3.0 | 2.0 | 1.5 | Fit interview plus WhatsApp plus callback (W06, W11) | Time log |
| A23 | Founder hours per enrolment after the plan | 1.2 | 0.8 | 0.5 | Group info sessions, alumni interviewers, published price band | Time log |
| A24 | Gross margin on fee after mentor and tool cost | 55% | 65% | 75% | Live cohort with part-time mentors | P&L |
| A25 | Campus micro-influencer cost per post (₹), 5,000 to 20,000 followers | 4,000 | 2,500 | 1,500 | V-F | Quotes |
| A26 | Share of leads captured after gating the 8 PDFs and the sampler | 20% | 35% | 50% | Standard gated-content capture; V-F | Site analytics |
| A27 | Monthly organic visitors to the resources page | 300 | 600 | 1,200 | Unknown; flagged low confidence | Site analytics |
| A28 | Second-year share of DTU acquisitions after the plan | 10% | 20% | 30% | Target, not a forecast | CRM |
| A29 | Selection rate of enrolled DTU students into a non-tech offer | 35% | 45% | 60% | Derived from B05 and A04 | CRM |
| A30 | Upsell revenue per student (Topmate, off-campus track) (₹) | 0 | 300 | 800 | W16 price ladder | CRM |

---

# PART III: RESEARCH

## 6. Research lanes

### 6.1 Lane file schema (every `BT/research/raw/R-*.md` uses exactly this)

```
# R-X: <lane title>
Prepared <date> by <agent id>. Access date for every URL: <date>.

## Facts
| R-ID | Fact (exact figure, unit and date) | Source ID | Verbatim snippet (max 25 words) | Status |
|---|---|---|---|---|

## Gaps
(numbered list: what was searched, with the three queries tried, and not found)

## Conflicts
| Topic | Value 1 (source) | Value 2 (source) | Note |
|---|---|---|---|
```

- R-ID format: lane letter plus two digits, for example `RB07`.
- Status vocabulary, nothing else: `VERIFIED` (seen on the fetched page), `VERIFIED (search result only)`
  (seen in a result snippet, page not fetchable), `CORRECTED` (seed fact was wrong; new value given),
  `NOT FOUND`, `NOT FETCHED` (page blocks automated access).
- Target 35 to 60 fact rows a lane. Fewer than 25 rows fails the lane.
- Sources go into the shared register `BT/research/raw/sources.md` with columns
  `| S-ID | Publisher (date) Title | URL | Type | Accessed |`. Type is one of: official, regulator,
  company, news, aggregator, blog, forum. Each verifier owns an ID block so parallel agents never
  collide: V-A S001 to S049, V-B S050 to S099, V-C S100 to S149, V-D S150 to S199, V-E unused,
  V-F S200 to S249, V-G S250 to S299, V-H S300 to S329, V-I S330 to S379, V-J S380 to S399,
  SC-1 S400 to S499, SC-2 S500 to S599, SC-3 S600 to S699. Each agent writes its rows to
  `BT/research/raw/sources-<agent>.md`; step B8 concatenates them into `sources.md`.

### 6.2 Source hierarchy (higher beats lower when they conflict)

1. The case brief. 2. BeyondTech's own pages. 3. Official institute documents (placement brochures,
NIRF data submissions, annual reports, placement cell pages, AICTE or university intake notices).
4. Regulators and statutory bodies. 5. Company pages of recruiters and competitors. 6. National press.
7. Aggregators (Collegedunia, Shiksha, Careers360 college pages). 8. Blogs and forums.
A figure that rests only on tier 7 or 8 is labelled "aggregator-reported" in the doc and carries
"est." on a slide.

NIRF tip for scorers: every NIRF-ranked institute publishes its submitted data as a PDF on its own
site (search `<institute> NIRF 2025 engineering data pdf` or `site:<institute domain> NIRF`). That PDF
gives sanctioned intake, students graduating, students placed and median salary by year. It is tier 3
and should be the first stop for batch size and median CTC.

### 6.3 The lanes

**Lane A, V-A: BeyondTech and its founder** -> `R-A-beyondtech.md`
1. Re-fetch all four site pages (`/`, `/placement-mastery`, `/resources`, `/contact`) and confirm W01 to
   W11 word for word. Record every number, every CTA label, every FAQ answer if expandable.
2. Open each of the 8 Drive links: is it open without sign-in or a form; page count; what it contains.
3. Company LinkedIn through WebFetch; if blocked, use the Chrome tools
   (`mcp__claude-in-chrome__*`, load with one ToolSearch call) on the user's logged-in browser, read
   only. Capture follower count, the last 15 posts with date, type and reaction count.
4. Founder LinkedIn: headline, follower count, education, work history, post cadence. If not
   reachable, mark NOT FETCHED; do not guess.
5. The three testimonial LinkedIn profiles (W10) and the three other mentors (W09): college and
   graduation year only.
6. Search Instagram, YouTube, Telegram, Unstop and Google for BeyondTech handles, follower counts,
   past events, past case competitions and any pricing mention (Reddit, Quora, LinkedIn comments).
7. Brand assets: the site's primary colours (hex, read from CSS or a screenshot), the logo file URL.
8. Capture one screenshot each of the home page hero, the admission process, the resources page and
   the LinkedIn page into `BT/deck/assets/shots/` for use as real artefacts on slides (P09).

**Lane B, V-B: DTU** -> `R-B-dtu.md` and `BT/research/data/societies.csv`
1. B.Tech sanctioned intake by branch for the 2023 to 2026 admission years, main campus and east
   campus; total undergraduates on campus; share by branch group (circuital: CSE, IT, SE, MCE, ECE, EE;
   non-circuital: ME, CE, ENE, BT, PCT, EP, PIE, CH and others).
2. Placement statistics for 2023-24, 2024-25 and 2025-26: registered, placed, offers, average, median,
   highest, number of companies; branch-wise placement rate and average where available.
3. Non-tech recruiters at DTU: firm, role title, CTC, eligible branches, CGPA cut-off, month of visit,
   offers made. Target at least 25 firms. Include every firm in B05 and B06.
4. The DTU calendar: internship drive start month, placement season start (commonly 1 August),
   mid-semester and end-semester exam windows, Engifest, Invictus, Yuvaan and society fest dates for
   Oct 2026 to Sep 2027. Each date sourced or marked est.
5. Training and Placement cell: structure, student coordinators, any rule on outside training
   partners, any existing prep partner.
6. Societies. Fill `societies.csv` with columns
   `society,type,what_it_does,flagship_events,instagram_followers,linkedin_followers,last_post_date,
   past_external_partners,source_id,confidence`. Type is one of consulting, finance, product,
   analytics, entrepreneurship, social-consulting, tech, cultural, department, media. Minimum rows:
   DTU Consulting Group, 180 Degrees Consulting DTU, Enactus DTU, E-Cell DTU, Round Table DTU,
   Kalakriti DTU, AIMS-DTU, Society of Robotics DTU, Semicon DTU, EMCEE DTU, IEEE DTU, ACM DTU,
   Deb Soc, TEDxDTU, DTU Times, any finance or investment club, any product club, any analytics or
   data science club, and each department society found. Target 30 rows.
7. Past examples of an external brand partnering with a DTU society: brand, society, format, public
   registration count on Unstop or the society's page. Target 8 examples. These calibrate A06 and A10.
8. Student media and meme or confession pages around DTU with follower counts (for influencer costs).
9. The user offered insider detail on DTU societies. If `BT/inputs/INPUTS-FROM-HARSH.md` exists, read
   it and add its rows with source "team field knowledge, unverified", confidence L, never as VERIFIED.

**Lane C, V-C: demand for non-tech roles from engineering campuses** -> `R-C-demand.md`
1. The non-tech role map for B.Tech graduates: business analyst, product analyst, data analyst,
   consulting analyst, decision analytics associate, associate product manager, operations and
   strategy, risk and markets analyst. For each: typical recruiters, CTC band, selection rounds
   (aptitude, guesstimate, case, SQL, product case, HR).
2. Selection process detail for the anchor recruiters in section 7.3: rounds and what is tested.
   This shows which BeyondTech phase maps to which recruiter.
3. Fresher hiring trend in Indian IT services and product firms 2022 to 2026 (campus offers,
   onboarding delays, hiring freezes). Official company disclosures and national press only.
4. Engineering graduate outcomes: placement rates at Tier-1 institutes, share unplaced, branch gaps.
5. Published student surveys on career preference and placement preparation (Unstop Talent Report,
   India Skills Report by Wheebox, Mercer Mettl, TeamLease EdTech, HirePro). Quote sample size and year.
6. Market size of test prep and placement prep in India, only if a credible figure exists. The deck
   sizes bottom-up from colleges, so this is context, not the sizing.

**Lane D, V-D: competitors and substitutes** -> `R-D-competition.md` and `BT/research/data/competitors.csv`
CSV columns: `name,type,offer,duration_weeks,price_inr,price_struck_inr,format,guarantee_claim,
claimed_outcomes,target_colleges,channels,ambassador_programme,instagram_followers,
linkedin_followers,youtube_subscribers,source_id`.
Minimum rows, grouped by type:
- Direct (non-tech placement prep for engineers): CrackNonTech, any other found by searching
  "non tech placement course", "consulting analytics placement preparation BTech", "business analyst
  placement bootcamp college students".
- Consulting prep: Case Interviews Cracked (book and site), IIT and IIM casebooks that are free online
  (list which clubs publish them), CaseCoach, PrepLounge, Management Consulted India pricing.
- Product: NextLeap, Product Space, HelloPM, PM School, The Product Folks.
- Analytics and SQL: Scaler Data Analytics, AlmaBetter, Newton School, Coding Ninjas data analytics,
  Internshala Trainings placement course, upGrad, DataLemur, StrataScratch.
- Mentor marketplaces: Topmate, Preplaced, Unstop mentorship. Typical price of a mock interview.
- Free: YouTube channels and playlists for guesstimates, cases and SQL with subscriber counts.
- On-campus substitutes: placement cell sessions, senior-run prep groups, society workshops.
For each direct competitor also capture the exact wording of any outcome or guarantee claim (I8).

**Lane F, V-F: channel and funnel benchmarks** -> `R-F-channels.md`
1. Meta (Instagram and Facebook) India: CPM, CPC, CPL for education and for the 18 to 24 age band;
   minimum audience size for location targeting; whether a single campus can be geofenced (radius
   minimum) and what audience size that yields.
2. LinkedIn India: CPC, CPM, CPL, minimum audience size (300 members for a campaign), school-based
   targeting, minimum daily budget.
3. Instagram micro-influencer and college meme-page rate cards in India by follower band.
4. WhatsApp community and Telegram funnel benchmarks; webinar registration to attendance; attendance
   to purchase for cohort-based courses. Prefer Indian data.
5. Referral programme economics in Indian edtech: reward sizes, share of sales from referrals.
6. Gated content capture rates and email or WhatsApp nurture conversion.
7. Published CAC and fee figures for Indian cohort-based course companies.
8. Cost of running a campus event: Unstop listing fees and features, typical prize pools for
   inter-college case competitions, fest sponsorship slabs at DTU and comparable campuses.

**Lane G, V-G: precedents for campus-by-campus expansion and trust transfer** -> `R-G-precedents.md`
1. Campus ambassador programmes in India with real structure: Coding Ninjas, GeeksforGeeks Campus
   Mantri, Internshala Student Partner, Unstop, Scaler, Google Developer Student Clubs, Microsoft
   Learn Student Ambassadors. For each: selection, term length, tasks, incentive, scale.
2. Companies that expanded campus by campus and what unlocked a new campus: Facebook's early roll-out,
   Tinder and Bumble sorority launches, Red Bull Student Marketeers, Zomato or Swiggy campus
   programmes, Physics Wallah and Unacademy offline expansion. Lessons only; keep India first.
3. Case competitions used as acquisition or employer-brand channels in India (HUL LIME, Tata
   Imagination Challenge, Flipkart WiRED, EY, Unstop data on registrations).
4. Diffusion and trust theory that names the mechanism: Rogers on adoption categories, Moore's
   beachhead, Cialdini's social proof, Granovetter on weak ties. One accurate citation each, with the
   original year. These are used sparingly as named frameworks, never as decoration.
5. Evidence on peer referral inside closed communities (colleges, hostels).

**Lane H, V-H: rules that constrain the claims and the tactics** -> `R-H-rules.md`
1. Central Consumer Protection Authority, "Guidelines for Prevention of Misleading Advertisement in
   Coaching Sector, 2024": what counts as coaching, what claims are barred (guaranteed selection, use
   of a successful candidate's name or photo without written consent after selection, mandatory
   disclosures). Quote the operative clauses.
2. ASCI guidelines for the education sector and for influencer disclosure.
3. Digital Personal Data Protection Act 2023 and the DPDP Rules: consent for collecting student
   contact data at events and through gated PDFs; what a small firm must do.
4. WhatsApp Business policy on bulk messaging and opt-in.
5. Any DTU, AICTE or UGC rule on commercial activity or outside coaching on campus.
The output is a short "claims we can make, claims we cannot" table used on slide 10.

**Lane I, V-I: public student voice** -> `R-I-student-voice.md`
Desk-only substitute for interviews. Search Reddit (r/Btechtards, r/Indian_Academia,
r/developersIndia, r/DTU or equivalents), Quora, LinkedIn posts and YouTube comment sections for
students describing non-tech placement preparation at DTU, NSUT and the 24 longlist colleges.
Columns: `V-ID | Verbatim quote (max 40 words) | Platform | Date | Campus if stated | Theme | URL`.
Themes: T1 no structure, T2 started late, T3 branch lock-out, T4 cost or trust of paid courses,
T5 seniors as the main source, T6 society as the main source, T7 company-specific question hunting,
T8 off-campus difficulty. Target 40 quotes; fewer than 15 means the deck uses none and says so.
Never paraphrase into quotation marks. Never attribute a quote to a named private person; use
"Reddit user, r/Btechtards, Mar 2026".

**Lane J, V-J: map and logo assets** -> `R-J-assets.md` and files under `BT/deck/assets/`
1. Latitude and longitude of DTU, NSUT, Thapar, BIT Mesra and all 24 longlist colleges.
2. An India outline with state boundaries that follows the Survey of India depiction (complete Jammu
   and Kashmir and Ladakh). Save as `assets/india.svg` or GeoJSON. Record the source and licence.
   This is the fallback base and the calibration reference for the generated one.
3. Logos, PNG or SVG with transparent background, each saved as `assets/logos/<slug>.png` with source
   URL and usage note: BeyondTech, DTU, DCG, EMCEE DTU, the anchor recruiters in section 7.3, each
   longlist college crest, the DTU societies named in the plan, Instagram, LinkedIn, WhatsApp, Unstop.
   Prefer official press kits and Wikimedia Commons. If a logo cannot be sourced cleanly, record
   `MISSING`; the deck then shows a dashed slot labelled "<Name> logo" for the user to fill.

## 7. College selection: the scorecard (scored 25%)

### 7.1 Longlist (24 non-IIT Tier-1 institutes plus 4 IITs shown for contrast)

| Region | Scorer | Colleges |
|---|---|---|
| North and Delhi NCR | SC-1 | BITS Pilani (Pilani campus), PEC Chandigarh, IIIT Delhi, IGDTUW Delhi, NIT Kurukshetra, MNIT Jaipur, MNNIT Allahabad, IIIT Allahabad, NIT Jalandhar |
| South | SC-2 | NIT Tiruchirappalli, NIT Karnataka Surathkal, NIT Warangal, NIT Calicut, IIIT Hyderabad, BITS Pilani Hyderabad campus, VIT Vellore, Manipal Institute of Technology, RV College of Engineering Bengaluru |
| West and East | SC-3 | BITS Pilani Goa campus, VJTI Mumbai, COEP Technological University Pune, VNIT Nagpur, NIT Rourkela, Jadavpur University |
| Contrast set | SC-3 | IIT Delhi, IIT Roorkee, IIT (BHU) Varanasi, IIT Guwahati |

DTU, NSUT, Thapar and BIT Mesra are scored too, by SC-1, as the calibration row: the scorecard is only
credible if the four campuses where BeyondTech already works score high. If any of them scores below
the longlist median, the lead revisits the weights at G3 before any pick is made.

### 7.2 Screen (pass or fail, applied before scoring)

| Filter | Rule | Reason |
|---|---|---|
| F1 Base | B.Tech graduating batch of at least 600 | Enough aspirants to fill a founding cohort and a second season |
| F2 Recruiter presence | At least 5 of the 20 anchor recruiters visited in the last two seasons | BeyondTech's promise is tied to visiting companies (B09, B12) |
| F3 New ground | Not DTU, NSUT, Thapar or BIT Mesra | B16 |
| F4 Evidence | At least 5 of 7 criteria have a sourced value (not "est.") | "Every pick is backed by numbers" (B17) |

### 7.3 The 20 anchor recruiters (fixed list; the overlap index is counted against it)

Bain and Company (including Bain Capability Network), ZS Associates, Eternal (Zomato, Blinkit),
JP Morgan Chase, Everest Group, PwC, Deloitte (USI or India), L.E.K. Consulting, Prism, Meesho, OYO,
EY (including EY-Parthenon and GDS), KPMG, Accenture Strategy, American Express, Kearney,
McKinsey (including McKinsey Knowledge Center), BCG (including BCG X and GAMMA roles), Fractal,
Flipkart (analyst and APM roles).
The first eleven come from the brief and BeyondTech's site (B05, B06, W10). The other nine are the
common non-tech campus recruiters; V-C confirms each hires B.Tech graduates into non-tech roles and
swaps out any that does not, logging the swap.

### 7.4 Criteria, weights and scoring bands (mechanical; scorers never judge)

Dataset file: `BT/research/data/college_scorecard.csv`, one row per college. For each criterion Cn the
file has four columns: `Cn_raw`, `Cn_unit`, `Cn_source` (S-ID or `est.`), `Cn_note`.

| # | Criterion | Weight | Raw measure | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|---|
| C1 | Recruiter overlap | 0.25 | Anchor recruiters (of 20) that visited in the last two seasons | 0 to 3 | 4 to 6 | 7 to 9 | 10 to 12 | 13+ |
| C2 | Non-tech offer depth | 0.15 | Share of offers in analytics, consulting, finance and business roles, from the institute's sector split; if absent, count of non-tech recruiters of any kind | under 8% or under 10 firms | 8 to 13% or 10 to 19 | 14 to 19% or 20 to 29 | 20 to 27% or 30 to 44 | 28%+ or 45+ |
| C3 | Addressable base | 0.15 | B.Tech students graduating per year | under 600 | 600 to 899 | 900 to 1,199 | 1,200 to 1,799 | 1,800+ |
| C4 | Society surface | 0.15 | Active non-tech societies (consulting, finance, product, analytics, entrepreneurship; a post in the last 6 months) and their combined Instagram plus LinkedIn followers | 0 to 1 society | 2, or under 5,000 followers | 3, or 5,000 to 14,999 | 4, or 15,000 to 29,999 | 5+, and 30,000+ |
| C5 | Prep vacuum | 0.10 | Incumbent structured non-tech prep on campus: (a) a society-published casebook or prep programme, (b) a named external prep brand with ambassadors or alumni claims there, (c) institute-run non-tech training | all three present | two present, strong | two present | one present | none found |
| C6 | Calendar fit | 0.10 | Months between BeyondTech's next batch start (15 Jan 2027, W05) and that campus's placement or internship season start | under 3 or over 9 | 3 to under 4 | 4 to under 5, or 8 to 9 | 5 to under 6 | 6 to 8 |
| C7 | Access | 0.10 | Bridges that lower the cost of the first conversation: +2 same city or under 300 km from an existing campus, +1 a BeyondTech mentor or testimonial alumnus from there, +1 a society there has co-hosted with a DTU or NSUT society, +1 already named in BeyondTech's ambassador call (W13) | 0 | 1 | 2 | 3 | 4+ |

Where a band has two measures joined by "or", use the first if sourced, else the second. C4 uses the
lower of the two bands when both are known.

Formula, shown in a tinted callout on slide 7 and in the doc:

`Fit score = 0.25 C1 + 0.15 C2 + 0.15 C3 + 0.15 C4 + 0.10 C5 + 0.10 C6 + 0.10 C7` (maximum 5.00)

Why these weights, in one line each (for the doc): C1 carries the most because the product is defined
by visiting recruiters (B09); C2 to C4 size the demand and the door in; C5 to C7 are tie-breakers on
ease.

### 7.5 Picking rule (the model applies it; nobody overrides it without logging)

1. Drop every college that fails the screen.
2. Rank the rest by Fit score.
3. Portfolio constraints, applied top-down: at most 2 picks within 300 km of Delhi; at least 1 pick in
   the South and 1 in the West or East; at most 1 campus of any multi-campus institute.
4. Take the first 4 that satisfy the constraints. These are the Wave 1 pair (the two with the highest
   C7) for the January 2027 batch and the Wave 2 pair for the summer 2027 batch.
5. Stability test: draw 2,000 weight vectors, each weight uniform within plus or minus 40% of its
   base value, renormalised to 1. Report for every college the share of draws in which it stays in
   the final 4. A pick that holds in under 60% of draws is flagged "weight-sensitive" on slide 7.
6. The doc reports the next 4 as the reserve bench with the single criterion that would promote each.

### 7.6 Per-pick dossier (written after G3, one per final pick and one per reserve)

Scorer fills `BT/research/raw/R-E-<slug>.md` with: placement calendar month by month; the named
non-tech societies with follower counts, flagship events and a named role to approach (designation,
not a private person's phone or email); the anchor recruiters that visit with role and CTC; the
incumbent prep options; hostel and student media channels; city cluster; the entry wedge in one line;
the one-line reason for the pick with its two strongest numbers. Target 30 fact rows per dossier.

## 8. Model specification

File `BT/model/beyondtech_gtm_model.py`, Python 3.12, standard library plus `random` with a fixed
seed (20261009). Run from `BT/model/` with
`"C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe" beyondtech_gtm_model.py`.
It is the single source of truth for every modelled number in the doc and the deck. Docstring says so.

Structure, mirroring `ROOT/iim-lucknow-pivot/model/dream11_pivot_model.py`:
- `F`: brief and website facts (never edited), each with its tag in a comment.
- `R`: researched facts with S-IDs, filled from the lane files after G2.
- `A`: assumptions A01 onward as `{"bear":..,"base":..,"bull":..,"note":..}`.
- `CSV`: reads `../research/data/college_scorecard.csv`, `societies.csv`, `competitors.csv`.
- Functions return plain dicts; `build()` assembles; `tables()` writes markdown.
- Outputs: `model_outputs.json` and `model_tables.md`. A `checks` block asserts every identity below
  and the script exits non-zero if one fails.

| Table | Content | Key formulas and checks |
|---|---|---|
| T1 | DTU addressable funnel, bottom-up by branch group and year of study: students on campus, non-tech-open pool (A03), reachable this season | TAM = all B.Tech students in years 2 to 4; SAM = years 3 and 4 times A03 plus year 2 times half of A03; SOM = SAM times target penetration. Check: branch rows sum to total |
| T2 | DTU baseline: current enrolments (A04), implied penetration of SAM, channel mix today (A05), implied selection rate (A29) | Penetration = A04 / SAM. Check: 50+ selections is reachable from A04 times A29 within the bear to bull range, else flag |
| T3 | DTU channel plan, one row per channel: reach, leads, applications, enrolments, cash cost, founder hours, CAC | Channels: C-ORG-1 society co-hosted case workshops; C-ORG-2 department and branch representatives; C-ORG-3 mock placement drive; C-ORG-4 gated resource library and sampler (A26, A27); C-ORG-5 structured referral with reward (A16); C-ORG-6 alumni story series on LinkedIn; C-ORG-7 placement cell information session; C-PD-1 Meta retargeting of warm audiences; C-PD-2 Meta prospecting, campus geofence; C-PD-3 LinkedIn school-targeted; C-PD-4 campus micro-influencers and meme pages. Enrolments = reach x step rates. CAC = cash cost / enrolments |
| T4 | Budget: channels sorted by CAC ascending and funded until the season target is met; then the organic to paid split falls out | Organic = no media spend to a platform or creator (prizes, society fees, rewards, tools, printing count as organic cash). Paid = Meta, LinkedIn, influencer fees. Check: split sums to 100%; every rupee has a channel |
| T5 | Month-by-month budget and enrolment calendar, Oct 2026 to Sep 2027, tied to the DTU calendar from R-B | Check: monthly rows sum to T4 |
| T6 | DTU scenarios, bear, base, bull: enrolments, revenue (A01), spend, blended CAC, payback in cohorts, contribution after A24 | Payback = spend / (enrolments x fee x margin) |
| T7 | Sensitivity tornado on DTU contribution: A01, A08, A09, A06, A11, A14, A26, one at a time bear to bull | Sorted by swing |
| T8 | College scorecard: raw values, 1 to 5 scores, Fit score, screen result, rank | Section 7.4 and 7.5. Check: calibration campuses score at or above longlist median |
| T9 | Stability: share of 2,000 weight draws each college stays in the final 4; rank range | Seeded |
| T10 | Per-campus launch P&L for each pick, seasons 1 and 2: case league cost (A21), founding cohort (A17, A18), ambassador payouts (A14, A15), paid support, enrolments, revenue, cumulative cash, break-even season | Three scenarios |
| T11 | Founder hours: today (A22 x A04) against after the plan (A23 x target enrolments), by task; hours freed; hours added by four new campuses | Shows whether the plan fits in one founder's week |
| T12 | 12-month roll-up: DTU plus four campuses, spend, enrolments, revenue, contribution, three scenarios | Check: equals T6 plus the T10 rows |
| T13 | KPI targets by month: leads, applications, enrolments, CAC, referral share, second-year share, founding cohort fill, offers per campus | Baseline, 3-month, 6-month, 12-month |
| T14 | Kill and scale thresholds: the numbers at day 30, 60 and 90 of a campus launch that trigger stop, hold or scale | Derived from the bear scenario: below bear at day 60 is a stop |
| T15 | Price sensitivity: enrolments needed to cover each campus launch at ₹8,000, ₹12,000 and ₹18,000 | From A01 |
| T16 | Assumptions register, generated from `A` with notes | Feeds the appendix |

`BT/model/build_excel.py` (openpyxl) writes `BeyondTech_GTM_Model.xlsx` with README, Inputs, one sheet
per table and a Checks sheet. Formula-driven where simple (T4, T6, T10), values elsewhere.

`BT/deck/make_values.py` reads `model_outputs.json` and writes `BT/deck/values.js` as one line
`const V = {...};` with pre-formatted strings (Indian grouping, true minus), following
`ROOT/iim-lucknow-pivot/deck/make_values.py`.

## 9. Research document specification

### 9.1 Format

- File `BT/research/beyondtech-gtm-research.md`. Header block: `# BeyondTech: From a DTU Habit to a
  Tier-1 System`, a bold subtitle line with the verdict, a `Team:` line, a `Prepared for:` line
  ("BeyondTech x DTU Consulting Group Case Competition 2026"), then `---`.
- Parts are written to `BT/research/parts/part-A.md` to `part-F.md`, each starting at `## N. Heading`.
- Every H2 opens with a bold `**Answer.**` paragraph of 2 to 4 sentences. H3s are `### N.M`.
- Section headings are findings with a number where one exists, never topic labels.
- Register reference for writers: read lines 1 to 140 of
  `ROOT/iim-lucknow-pivot/research/dream11-pivot-research.md` for tone only.
- Length is not capped. Floors: 45,000 words, 110 tables, 0 dashes, 0 exclamation marks, at least 26
  `**Answer.**` leads, every `[S###]` resolves in the bibliography.

### 9.2 Outline (use the H2 titles exactly; `{}` filled from `model_outputs.json`)

| § | H2 title | Must contain | Tables min | Words min | Writer |
|---|---|---|---|---|---|
| 0 | Document control | Purpose and reader; tag legend; source hierarchy; verification status counts by lane; model version and run date; the two Harsh note; AI-use disclosure; skill calibration note; document map | 3 | 700 | W-A |
| 1 | Brief coverage matrix: every ask, where it is answered and on which slide | One row per B-ID with section and slide; the five scoring criteria mapped to sections; where the evidence is thinnest | 3 | 800 | W-A |
| 2 | The answer on one page: a proof loop on every campus, not more awareness | Governing thought; the three contrarian moves; the 4 picks with one line each; the DTU budget and split; the moneyshot; kill criteria; a 110-word version; what would change our mind | 4 | 1,500 | W-A |
| 3 | BeyondTech today: 300+ students mentored on one founder's weekends | Company facts B and W; the offer mapped to recruiter rounds; proof points; the conflicts table X1 to X6 and rulings; the funnel as it exists (W06 to W08, W11) | 5 | 1,800 | W-A |
| 4 | What the three links reveal that the brief does not | W01 to W17 one by one with the implication; the ambassador post against the intern post (I4); ungated lead magnets (I2); this competition as a channel (I5) | 4 | 1,500 | W-A |
| 5 | The demand: why non-tech roles matter more to a Tier-1 engineer in 2026 | Role map; anchor recruiter rounds against BeyondTech's four phases; tech fresher hiring trend; branch lock-out; published student survey data | 5 | 2,000 | W-B |
| 6 | The student: four segments, three buying windows and the months when intent peaks | Behavioural segments (not demographics): for example the branch-locked third year, the late-starting fourth year, the early planner in second year, the off-campus re-applicant; jobs to be done; an intent heat map by month and year of study built from the calendar in R-B; student voice by theme with counts (R-I) or the statement that none is used | 6 | 2,500 | W-B |
| 7 | Competition: who else sells structure, at what price and with what promise | Competitor table from CSV; price ladder chart data; claims audit against the 2024 coaching-advertisement guidelines; strategy canvas (ERRC) for BeyondTech; where free substitutes win | 6 | 2,200 | W-B |
| 8 | DTU in numbers: {dtu_batch} students a year and a non-tech pool of about {dtu_sam} | Intake by branch; three years of placement data; non-tech recruiter table; calendar; T1 funnel; penetration today (T2) with the range | 6 | 2,200 | W-C |
| 9 | Where the DTU engine leaks: five breaks between a student who has heard of BeyondTech and one who enrols | Issue tree, MECE; each leak with evidence and a number or an explicit "not measurable from outside"; founder-hours model T11 | 4 | 1,800 | W-C |
| 10 | The DTU society map: {n_societies} societies, their reach and what each is good for | `societies.csv` in full; a reach by relevance grid; partner shortlist with objective, partner, rationale; past brand tie-ups and their registration counts | 5 | 2,000 | W-C |
| 11 | The DTU plan: eleven channels in three layers, sequenced to the campus calendar | Layer 1 capture (gate the library, price band on the page, group info sessions); layer 2 organic distribution (societies, branch representatives, mock drive, referral, alumni stories, placement cell); layer 3 paid amplification (retargeting first); T3 in full; month-by-month calendar T5; the creative idea for each activation | 7 | 3,000 | W-C |
| 12 | The DTU budget: ₹{dtu_budget} lakh, {organic_pct}% organic, and why that split is an output | T4 funding logic; split by channel; three scenarios T6; tornado T7; the moneyshot; what the founder's time buys; realism checks against BeyondTech's size | 6 | 2,200 | W-C |
| 13 | Defining Tier-1 and the longlist: 24 institutes plus four IITs for contrast | Definition (X6); longlist with region; the screen and who fails it; why IITs are shown and how they fare | 4 | 1,500 | W-D |
| 14 | The scorecard: seven criteria, one formula, {n_scored} colleges | Each criterion: what, why, measure, bands, data source and weakness; the full raw table and the scored table (T8); calibration against the four existing campuses | 8 | 3,000 | W-D |
| 15 | The four picks: {pick1}, {pick2}, {pick3} and {pick4} | The picking rule; one-line reason each with two numbers; stability test T9; reserve bench and what would promote each; what the scorecard cannot see | 6 | 2,200 | W-D |
| 16 | Pick dossiers: calendar, recruiters, societies and the entry wedge on each campus | One H3 per pick from R-E dossiers, identical structure for all four (symmetric treatment) | 8 | 3,200 | W-D |
| 17 | Trust from zero: borrow it, seed it, earn it, then hand it over | The four-step ladder with the mechanism named (social proof, weak ties, beachhead) and one precedent each from R-G; why ambassadors come third, not first; the co-branded case league design; the founding cohort offer; consented result stories | 5 | 2,500 | W-E |
| 18 | The 90-day launch playbook for one campus | Day-by-day phases; owner per task; the kit (deck, creatives, question bank slice for that campus's recruiters, mock drive paper, ambassador handbook); T14 thresholds at day 30, 60, 90 | 5 | 2,200 | W-E |
| 19 | The ambassador flywheel: customers first, a ladder second, cash last | Selection from founding cohort; tasks; incentive ladder with rupee values (A14, A15); what precedents pay; fraud and quality controls; expected yield | 5 | 1,800 | W-E |
| 20 | Economics of expansion: each campus pays back in season {payback_season} in the base case | T10 per campus; T12 roll-up; T15 price sensitivity; founder hours added (T11); what must be hired or delegated | 6 | 2,000 | W-E |
| 21 | The twelve-month roadmap: two waves, five campuses, one calendar | Month grid Oct 2026 to Sep 2027; wave logic; dependencies; decision gates | 3 | 1,200 | W-F |
| 22 | Measuring it: one north star and the numbers that would prove us wrong | KPI tree; T13 targets; instrumentation (UTM, referral codes, a single lead sheet); the 30, 60 and 90 day signals | 4 | 1,300 | W-F |
| 23 | Risks and rules: twelve risks, a mitigation each, and the claims BeyondTech can and cannot make | Probability by impact register with RAG; 1:1 mitigations; the claims table from R-H; competitor response; founder overload; society dependence | 4 | 1,800 | W-F |
| 24 | Assumptions register | T16 with basis and what replaces each | 1 | 600 | W-F |
| 25 | Slide blueprint | The 12 slides: action title, exhibits, sources, which section feeds it | 2 | 1,200 | W-F |
| 26 | Anticipated judge questions | 20 questions as bold run-in reported speech, each with a 3-sentence answer and the table that backs it | 1 | 1,800 | W-F |
| 27 | Method, limits and the validation we would run next | Desk method and source counts by tier; what could not be verified; the honest statement that no primary research was done; the Customer Validation Plan: a 14-question survey instrument, a 6-question interview guide, target counts by segment and campus, and the decision each answer would change | 4 | 1,500 | W-F |

Appendices are generated by `assemble.py`, not written by hand: A Bibliography (only cited S-IDs),
B Model tables, C College dataset (raw CSV rendered as tables), D Society and competitor datasets,
E Glossary (`parts/appendix-E-glossary.md`, by W-F), F Data conflicts and rulings
(`BT/research/raw/conflicts.md`, maintained by the lead).

### 9.3 Assembler and PDF

- `BT/research/assemble.py`: copy `ROOT/verdict-mnc/research/assemble.py`, then change paths, the
  header, the part list (A to F), the appendix sources above and the thresholds in 9.1. It must read
  nothing outside `BT/`. It prints a JSON check: words, tables, dashes, exclamations, duplicate
  headings, cited S-IDs, missing S-IDs, A-tags, Answer leads, banned-word hits. Any missing S-ID,
  dash or banned hit is a failure.
- `BT/research/build_pdf.py`: copy `ROOT/verdict-mnc/research/build_pdf.py`; change `SRC`, `HTML_OUT`,
  `PDF_OUT`, the `TAG` regex to `\[(?:B|W|P|V) \d+\]|\[S\d{3}\]|\[A\d+\]|\[M T\d+\]|\[D [^\]]+\]`,
  the footer string, the cover kicker and the `:root` palette to the deck palette (section 14.1).
  Needs `markdown-it-py` (`python -m pip install markdown-it-py` under Python 3.12 if absent) and
  Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe`.

---

# PART IV: EXECUTION

## 10. Skill touchpoints (`case-competition-deck`, at `ROOT/.claude/skills/case-competition-deck/`)

The lead invokes the skill with the Skill tool. Sub-agents cannot rely on the Skill tool being
available, so their prompts name the reference files to read directly.

| Touchpoint | When | Mode | Files read | Output |
|---|---|---|---|---|
| A | Step B3, before any lane starts | Generate, steps 1 to 7 | `SKILL.md`, `references/structure.md`, `case_types/marketing.md`, `case_types/strategy.md`, `references/frameworks.md` (sections: STP, JTBD, AARRR, Customer Journey, Blue Ocean and ERRC, Crossing the Chasm, Ansoff, Stakeholder grid, Issue Tree, Risk Heat Map, KPI Trees), `references/rhetoric.md` | A pattern map appended to `BT/build-log.md`: contrarian move per pillar, foreshadow slide, symmetric treatment list, three-scenario list, moneyshot, double synthesis, defensive depth. Confirms or amends section 4 |
| B | Gate G5, before `DECK-PLAN.md` is written | Slide mode | `references/archetypes.md`, `case_types/marketing.md` archetypes (journey map, persona cards, channel comparison, LTV and CAC, message hierarchy) | The ghost deck: 12 action titles only, read top to bottom, checked against P04. Every title is a full sentence with a number |
| C | Step B14, on the finished research doc | Critique | `references/critique_rubric.md`, phases 1 to 3 | `BT/research/critique.md`: pass or fail items, seven dimensions scored, top 5 fixes. Fixes applied, then re-scored once |
| D | Stage 2, after all slides are built | Critique | same, plus the DCG rubric in section 16.3 | `BT/deck/critique.md`; any dimension under 4 of 5 is fixed |
| E | Before export | Generate step 11 (polish pass) | `SKILL.md` | Search for TODO, TBD, Insert, Placeholder, Lorem, xyz, and names from other decks (Dream11, Paytm, Liminal, PRAMAAN, SwasthyaGrid, HarvestBox, Setu, Costa, Tidal Wave) |

Compression rule from `ROOT/CLAUDE.md` section 0: the skill's eight sections collapse to one dense
slide each, mapped in section 14.4.

## 11. Environment

| Item | Value |
|---|---|
| Python with PyMuPDF and for all scripts | `C:\Users\harsh\AppData\Local\Programs\Python\Python312\python.exe` (the default `python` is 3.14 and has no PDF library). Always pass `-I` when reading downloaded files |
| PDF rendering | `import pymupdf; d=pymupdf.open(p); d[i].get_pixmap(dpi=100).save(out)`. The Read tool cannot render PDFs here (no `pdftoppm`) |
| Shell | Git Bash through the Bash tool; quote every path, they contain no spaces under `BT/` but `a-few-inspos` file names do |
| Web | `WebSearch` (standard first, extended for niche facts) and `WebFetch`. LinkedIn returns HTTP 999 to WebFetch for personal profiles; the company page worked. Use Chrome tools read-only if needed |
| Figma | MCP `figma-mcp`. `whoami` returned plan `team::1564294484048272772` ("25/A16/057 HARSH KAWATRA's team", admin). Use it. Load the `figma-use` guidance before any `use_figma` call |
| Not available | Canva, Google Calendar, Slack, Vercel and Railway connectors need authorising by the user; none is needed for this plan |
| Git | The repo is clean on a detached HEAD. Do not commit unless asked. If asked: no Co-Authored-By trailer (standing user rule) |
| Inspiration renders | Already rendered to the session scratchpad as `ops_*.png`, `p3_*.png`, `sb_*.png`, `ec_*.png`, `iima_*.png`, `inno_*.png`. Step B2 re-renders them into `BT/case/inspo/` so they persist |

## 12. Execution sequence

Parallelism rules: at most three sub-agents at once; each writes only its own file; the lead reads
every report before opening the next step; a step is done only when its "Done when" check prints clean.

### Stage 1: research

| Step | Who | Action | Output | Done when |
|---|---|---|---|---|
| B0 | Lead | Create `BT/` subfolders (`case`, `case/inspo`, `inputs`, `research/raw`, `research/data`, `research/parts`, `model`, `deck`, `deck/assets/logos`, `deck/assets/shots`); copy this plan to `BT/PLAN.md`; create `BT/build-log.md`; create `BT/inputs/INPUTS-FROM-HARSH.md` as an empty template with headings (fee, cohort size, DTU member count, societies notes, deadline, Anuj's full name) | Files | `BT/PLAN.md` byte-identical to the plan |
| B1 | Lead | Transcribe the brief verbatim into `BT/case/01-beyondtech-brief.md` with the B-IDs of section 3.1 in bold; append the three hyperlinks; write `02-beyondtech-public-footprint.md` from section 3.2 (status PLAN) and `03-organiser-playbook-digest.md` from section 3.4 plus the 17-item pre-send checklist and the 45-point rubric of the playbook | 3 files | Every sentence of the 4-page PDF is present; B01 to B21 all appear |
| B2 | Sonnet (1 agent) | Re-render the six inspiration PDFs to `BT/case/inspo/`; write `BT/case/04-inspo-deck-study.md`: per deck and page, purpose, layout, each diagram and how it is constructed (section 14.3 is the seed and must be confirmed against the images, then extended for `IIM A - Winning deck.pdf` pages 2 to 9 and 12 to 27 and `InnovatED` pages 2 to 7) | 1 file plus PNGs | Every page of all six decks has a row; each diagram names its primitive shapes |
| B3 | Lead | Skill touchpoint A | `build-log.md` entry | Pattern map written |
| B4 | V-A, V-B, V-C in parallel | Lanes A, B, C | 3 lane files, `societies.csv`, source files | Each lane has 35+ rows and a `## Gaps` and `## Conflicts` section |
| B5 | V-D, V-F, V-G in parallel | Lanes D, F, G | 3 lane files, `competitors.csv` | Same |
| B6 | V-H, V-I, V-J in parallel | Lanes H, I, J | 3 lane files, assets | Same; V-J lists each logo as saved or MISSING |
| **G1** | Lead | Read all lanes. Rule on conflicts X1 to X6 and any new ones in `raw/conflicts.md`. Update `02-beyondtech-public-footprint.md` statuses. Decide whether the anchor recruiter list changes. Write "Late corrections" into `parts/WRITER-BRIEF.md` | `conflicts.md` | Every conflict has a ruling |
| B7 | SC-1, SC-2, SC-3 in parallel | Fill `college_scorecard_<region>.csv` for their colleges, all 7 criteria, with sources | 3 CSVs, source files | No blank cell; every cell is a sourced value, `est.` with a stated rule, or `NOT FOUND` |
| B8 | Lead | Merge the three CSVs into `college_scorecard.csv`; concatenate source files into `sources.md`; check for duplicate S-IDs | 2 files | 32 rows (24 + 4 IITs + 4 calibration); 0 duplicate IDs |
| **G2** | Lead | Evidence gate: any college with more than 2 of 7 cells `est.` or `NOT FOUND` gets one targeted re-search by a single Sonnet agent; if still thin it fails F4 | Updated CSV | F4 result recorded per college |
| B9 | MD | Write and run the model (section 8) with `R` filled from lanes and the CSVs | model files | Script exits 0; all checks pass; `model_tables.md` has T1 to T16 |
| **G3** | Lead | Read T8 and T9. Confirm calibration campuses score at or above the median. Apply section 4.6 rules. Lock the four picks and the reserve bench. Log the decision with the numbers | `build-log.md` | Picks locked |
| B10 | SC-1 to SC-3 (only the regions that hold a pick or reserve) | Pick dossiers (section 7.6) | `R-E-<slug>.md` x up to 8 | 30+ rows each |
| B11 | MD | Re-run the model with dossier calendars feeding C6 and T10; build the Excel; run `make_values.py` | Final model files, `values.js` | Checks pass; picks unchanged, or the change is escalated to the lead |
| **G4** | Lead | Lock numbers. Choose the moneyshot format (section 4.4). Fill the `{}` placeholders of section 9.2 in `WRITER-BRIEF.md`. From here no number changes without a model re-run and a grep | `WRITER-BRIEF.md` final | Brief has every locked number |
| B12 | W-A, W-B, W-C in parallel | Parts A, B, C | 3 part files | Self-check clean (section 13.4) |
| B13 | W-D, W-E, W-F in parallel | Parts D, E, F and the glossary | 4 files | Same |
| B14 | Lead, then CR | `assemble.py md`; fix failures by sending the specific part back to its writer; touchpoint C critique; apply top 5 fixes; `build_pdf.py` | Doc `.md`, `.html`, `.pdf`, `critique.md` | Assembler JSON meets every floor in 9.1; PDF opens and page 1 and one mid page are rendered and eyeballed |
| **G5** | Lead, with the user | Present the research deliverable. Touchpoint B ghost deck. Write `BT/DECK-PLAN.md` | `DECK-PLAN.md` | User has the doc; ghost deck passes the titles-only test |

### Stage 2: deck (opens only after G5)

| Step | Who | Action | Done when |
|---|---|---|---|
| D1 | Lead | Write `DECK-PLAN.md`: locked copy for 12 slides with `{key}` placeholders, per-slide geometry, and the slide scripts as files under `BT/deck/slides/s01.js` to `s12.js`; copy tooling from `ROOT/verdict-mnc/deck/` (`preamble.js`, `_extras.js`, `_palette.js`, `_v1.js`, `_sweeps.js`, `setup.js`, `gen.py`, `mock_figma.js`) and repoint every path to `BT/deck/` | `gen.py` reads only `BT/deck/` |
| D2 | Lead | Pre-flight every slide script offline: `node mock_figma.js preamble.js values.js slides/sNN.js NN` | 0 errors, 0 overflow, 0 font-floor breaches per slide |
| D3 | Lead | `whoami`; `create_new_file` (editorType slides, planKey above, name "BeyondTech GTM | Team IdeaForge | BeyondTech x DCG 2026"); font check; create 12 empty slides; write `slide-ids.json` | 12 slide IDs recorded; exactly 12 slides exist (count through the SLIDE_GRID children, not `getSlideGrid()`) |
| D4 | User, in parallel with D5 | Generate the two base images from `BT/deck/image-prompts.md` and drop them into `BT/deck/assets/` | Files present, or the lead switches to the native fallback at D8 |
| D5 | FB-1 | Batch 1: slides 1, 2, 3. Run V1 validator. Screenshot. Compare against the prime decks | V1 clean or residuals explained; lead approves the visual system before batch 2 |
| D6 | FB-2, FB-3 | Batch 2: slides 4, 5, 6. Batch 3: slides 7, 8, 9 | Same |
| D7 | FB-4 | Batch 4: slides 10, 11, 12 | Same |
| D8 | Lead | Images and logos last: size each frame to the asset's aspect ratio, `upload_assets` one per image, POST bytes. Map calibration (section 14.6) | Every logo slot is filled or is a labelled dashed placeholder |
| D9 | Lead | Sweeps: corner radius 0; font floor 22 (source lines and BIBLIO exempt); dash audit; banned words; MUST list (every locked number) and ABSENT list; bounds | All 0 |
| D10 | CR, lead | Touchpoint D critique and the DCG rubric; fix; touchpoint E polish | Every dimension 4 of 5 or better |
| D11 | Lead | Full screenshot set to `BT/deck/shots/`; fallback preview PDF via PyMuPDF; tell the user to export the vector PDF from Figma (File, Export, PDF) | 12 PNGs and a preview PDF on disk |

## 13. Sub-agent prompts (fill the `<>` fields; send as written)

Every Agent call sets `subagent_type: "general-purpose"` and `model: "sonnet"`.

### 13.1 Verifier prompt (lanes A to J)

> You are research verifier <V-X> for a case competition. Work only inside
> `C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\beyondtech-dcg\`.
> Read first, fully: `PLAN.md` sections 0.3, 2, 3, 5.1 and 6.1 to 6.2, then your lane in section 6.3
> (Lane <X>), then `case/01-beyondtech-brief.md` and `case/02-beyondtech-public-footprint.md`.
> Task: answer every numbered question of Lane <X> by searching and fetching pages. Write your facts
> into `research/raw/<lane file>` using the exact schema in PLAN 6.1, and your sources into
> `research/raw/sources-<V-X>.md` using S-IDs <range> only. <If the lane has a CSV: also write
> `research/data/<file>.csv` with exactly the columns named in the lane.>
> Rules: a fact is VERIFIED only if you saw it on the fetched page; copy a snippet of at most 25 words.
> Seed facts in PLAN 5.1 for your lane are unverified leads: confirm, correct or mark NOT FOUND.
> Three distinct searches before NOT FOUND, and list the queries under `## Gaps`. Record conflicts,
> do not resolve them. Prefer official institute, regulator and company pages over aggregators.
> No em dash or en dash in anything you write. Do not write analysis or recommendations.
> Write the file after your first 10 rows and keep extending it.
> Finish by printing: row count, count by status, number of sources, the Gaps list, the Conflicts list.

### 13.2 Scorer prompt (SC-1 to SC-3)

> You are college data scorer <SC-n>. Work only inside `...\beyondtech-dcg\`.
> Read first: `PLAN.md` sections 0.3, 6.2, 7.1 to 7.4 and the anchor recruiter list in 7.3;
> `research/raw/R-C-demand.md` for the confirmed anchor list.
> Your colleges: <list>.
> Task: for each college fill one row of `research/data/college_scorecard_<region>.csv` with columns
> `college,city,state,lat,lon,region,btech_graduating` then for C1 to C7 the four columns
> `Cn_raw,Cn_unit,Cn_source,Cn_note`, then `anchor_recruiters_found` (semicolon list),
> `nontech_societies` (semicolon list as name:followers), `season_start_month`, `evidence_gaps`.
> Do not compute 1 to 5 scores; the model does that. Record raw values only, using the measures in
> PLAN 7.4. Start with each institute's NIRF data PDF and official placement report, then the
> placement cell page, then national press, then aggregators. For C1, name each anchor recruiter you
> found and the page that shows it visited in 2024-25 or 2025-26. For C4, open each society's
> Instagram or LinkedIn page and record the follower count and the date of the latest post.
> For C5, search "<college> casebook", "<college> consulting club", "<competitor> <college>".
> If a value cannot be sourced after three searches, write `est.` in the source column, give the
> estimate and the rule you used in the note, or write NOT FOUND. Never leave a blank.
> Sources go in `research/raw/sources-<SC-n>.md`, S-IDs <range>.
> Finish by printing a table: college, cells sourced out of 7, cells est., cells NOT FOUND.

### 13.3 Modeller prompt

> You are the modeller. Work only inside `...\beyondtech-dcg\`.
> Read first: `PLAN.md` sections 2.4, 5.3, 7.2 to 7.5 and all of section 8; every file in
> `research/raw/` and `research/data/`; `ROOT/iim-lucknow-pivot/model/dream11_pivot_model.py` for
> structure only.
> Task: write `model/beyondtech_gtm_model.py` exactly to section 8, run it with the Python 3.12 path
> in PLAN section 11, and produce `model_outputs.json` and `model_tables.md` with tables T1 to T16.
> Every input is either in `F` with a B or W tag, in `R` with an S-ID, or in `A` with an A-ID. If you
> need an input that has none, add a new assumption from A31 upward with bear, base and bull and a
> one-line basis, and list it in your reply. Implement the checks; the script must exit non-zero when
> a check fails. Use `random.seed(20261009)` for T9. Format money with Indian digit grouping.
> Finish by printing: the checks block, the four picks with scores and stability, the DTU budget and
> split, blended CAC by scenario, and any new assumptions.

### 13.4 Writer prompt (W-A to W-F)

> You are writer <W-X> of a consulting-grade research document. Work only inside `...\beyondtech-dcg\`.
> Read first, in this order: `research/parts/WRITER-BRIEF.md` (all of it, including Late corrections);
> `PLAN.md` sections 2, 3, 4 and the rows of section 9.2 assigned to you; `case/*.md`; every file in
> `research/raw/` and `research/data/`; `model/model_tables.md` and `model_outputs.json`;
> lines 1 to 140 of `ROOT/iim-lucknow-pivot/research/dream11-pivot-research.md` for register only.
> Task: write sections <list> into `research/parts/part-<X>.md` using the exact H2 titles from PLAN
> 9.2. Cover every "Must contain" item. Meet the table and word floors; more is welcome if every
> paragraph carries evidence. Open each H2 with a bold **Answer.** paragraph of 2 to 4 sentences.
> Content rules: only facts from the raw files with status VERIFIED, VERIFIED (search result only) or
> CORRECTED, the datasets and the model. Do not browse. Do not invent. Tag every number per PLAN 2.4.
> Every assumed number carries its A-ID and the word "assumption" or "est." once per paragraph.
> Student voice only as verbatim rows from `R-I-student-voice.md`, attributed as that file states.
> Keep the verdict, the picks, the channel names and every number exactly as locked.
> Style rules: PLAN 2.2 and 2.3 in full.
> Before replying, run this check on your file with Python 3.12 and fix until clean: em dash and en
> dash count 0; exclamation mark count 0; no banned word from PLAN 2.2; print word count, table count
> (lines matching `|---|`), count of `**Answer.**`, and every `[S###]` you cited that is missing from
> `research/raw/sources.md`.
> Write the file after your first two sections and keep extending it. Edit no other file.
> Reply with: word count, table count, sections written, and any fact you needed and did not find.

### 13.5 Critic prompt

> You are the critic. Read `ROOT/.claude/skills/case-competition-deck/references/critique_rubric.md`,
> `case_types/marketing.md`, `PLAN.md` sections 3.4 and 16.3, then <the research doc | the 12 slide
> screenshots in `deck/shots/` and `deck/DECK-PLAN.md`>. Score every pass or fail item and the seven
> quality dimensions, then the nine dimensions of the organiser rubric (0 to 5 each). Lead with what
> works. Give the top 5 issues, each with the exact location and a concrete fix. Do not rewrite.
> Write `<research|deck>/critique.md`.

### 13.6 Figma builder prompt (Stage 2)

> You are Figma builder <FB-n>. Read `ROOT/CLAUDE.md` sections 2, 3, 6 and 7 in full, `deck/DECK-PLAN.md`
> sections for slides <list>, and `deck/build-log.md`. Load the `figma-use` guidance first.
> Run `python gen.py batch <list>` and paste the generated script unchanged into one `use_figma` call
> on file `<fileKey>`. Before writing, run a read-only child-count check on each slide: if it already
> has children, a previous run landed; do not write again, go straight to validation.
> Then run `python gen.py v1 <list>` and paste it; screenshot each slide to `deck/shots/sN.png`.
> Fix only what the validator and the screenshot both show to be wrong. Shorten copy only as a last
> resort and log the before and after. Never add 240 to a coordinate. Never set x or y before
> appendChild. Append a log block to `deck/build-log.md`: node counts, validator result, fixes,
> residuals, STATUS.

---

# PART V: STAGE 2, THE DECK BLUEPRINT

## 14. Deck blueprint (locked now; copy and code written at D1)

### 14.1 Design system

Structure follows `ROOT/CLAUDE.md` sections 1 to 3 without exception: 1920 by 1080, corner radius 0
on every node, 2 to 2.5px ink outline on every panel, bar, node and cell, layered sticker cards with
a back card offset 7px, Poppins Bold and ExtraBold for display, Inter Semi Bold and Bold for body,
22pt floor for all content text, 14pt source line bottom-right on every content slide.

Palette (nine roles). The default below is deliberately different from the green, red and purple of
earlier decks. V-A samples BeyondTech's site colours in Lane A; if the brand has a clear primary hue,
the lead swaps `primary`, `primaryDeep` and `tint` to that family at D1 and nothing else changes.

| Role | Default hex | Use |
|---|---|---|
| primary | `#1F4BD8` | Active ribbon tag, primary numerals, chosen-option fills |
| primaryDeep | `#0B1F66` | Verdict cards, dark bands, the moneyshot band |
| accent | `#F5C518` | Back cards, inactive ribbon tags, "so what" callouts |
| alert | `#E5484D` | Leaks, rejected options, risk reds |
| tint | `#C7D7FE` | Quiet fills, lowest heat tier |
| ink | `#0A0A0A` | Every stroke, every body text |
| surface | `#EDEDED` | Panel fill |
| surfaceAlt | `#F6F6F6` | Zebra rows |
| white | `#FFFFFF` | Slide background |

Extras defined in `_palette.js`: `good #12805C`, `goodTint #CFEEDB`, `alertTint #FDE2E2`,
`heat1 #EEF3FF`, `heat2 #C7D7FE`, `heat3 #8FAEF9`, `heat4 #4F78E8`, `heat5 #1F4BD8` (white text on
heat4 and heat5).

Type levels per slide, four to five: KPI numeral 56 to 72; headline 37 to 44 (two lines maximum);
panel title 24 to 26, written as a finding in caps; body and cells 22; source 14.

Every core slide carries, top to bottom: ribbon (y 30 to 84), section chip (y 96 to 140), two-line
action headline (y 150 to 250), content bands (y 268 to 1030), source line (y 1044).

Ribbon for the nine core slides, six tags plus a counter, as on the Dream11 deck:
`SUMMARY | DIAGNOSE | DTU PLAN | PICK | LAUNCH | PROVE IT` and a counter chip "n / 9". Slides 3 and 4
share DIAGNOSE; 5 and 6 share DTU PLAN; 8 and 9 share LAUNCH. The appendix uses its own four-tag
ribbon `SCORECARD | MODEL | ASSUMPTIONS | SOURCES` with counter "A1". Cover and thank-you have no
ribbon.

### 14.2 What the reference decks contribute

| Source | Take | Avoid |
|---|---|---|
| Dream11, Satoshi Gate, SwasthyaGrid (own Figma decks) | The whole visual system; weighted score grid with formula callout and verdict chips (Dream11 slide `2:7`); KPI tree, target table, three-scenario line chart and decision-rule flow on one slide (Dream11 `2:11`); hub-and-spoke cover map with logo tiles | The Satoshi cover, which is plain text |
| Organiser decks in `BT/a-few-inspos/` | The diagram vocabulary judges expect: funnels with channel columns, India map with pins and city cards, scorecards with ticks and Harvey balls, pathway roadmaps, pillar diagrams, persona cards, budget split with rupee and percent per initiative | Topic-label titles, sub-18px text, unsourced numbers, pasted screenshots, mixed icon styles, typos in proper nouns, no budget, no risks, no KPIs, no closing ask |
| EY and Goal Diggers in `ROOT/ppts-inspo/` | Band and rail structure, zero dead space, chart paired with table, in-chart annotations, formula callouts | n/a |

The organiser decks never show a budget split, a risk register, KPI targets or a closing ask. Those
four are where this deck goes past its references while matching their look.

### 14.3 Diagram grammar: how each device is built from native primitives

Every recipe uses only frames, rectangles, ellipses, text, lines and polygons (a polygon is a vector
node built with `figma.createVector()` and `vectorPaths`, or a rotated rectangle; corner radius stays
0). Helper names in brackets are the ones to add to `_extras.js` at D1.

| # | Device | Seen in | Native recipe |
|---|---|---|---|
| G1 | Marketing funnel with channel columns | InnovatED p5 (TOFU, MOFU, BOFU with channel cards left, persona right, awareness chevrons below); p3 p7 and p8 | [`funnel`] 3 to 5 stacked trapezoids as vector paths, each narrower by a fixed step, ink stroke, fills heat5 to heat2, stage name centred in white or ink. Left of each tier: a channel card (title bar plus two lines). Right of each tier: the number of students at that stage and the conversion rate on the connector between tiers. A dashed leader from each card to its tier. Below: a five-step awareness chevron strip (Unaware, Problem aware, Solution aware, Product aware, Enrolled) built from the ribbon helper |
| G2 | India map with pins and city cards | IIM A p7; Elite Consultant p9 | Section 14.6. Pins are an ellipse plus a small triangle, numbered. A straight two-segment leader runs from each pin to a layered city card (pill header with college name and crest slot, three lines: Fit score, the wedge, the season month). Existing campuses use an accent pin, new picks a primary pin |
| G3 | Selection scorecard | InnovatED p2 (bars, tick grid, decision column); Street Boyz p6 (traffic-light dots, dashed winner); Dream11 `2:7` (heat grid, formula, verdict chips) | [`heatGrid`] `addTable` with one row per college and one column per criterion; each score cell filled heat1 to heat5 with the 1 to 5 digit centred; a wider last column with the Fit score to two decimals; a verdict chip per row (PICK in primary, BENCH in accent, SCREENED OUT in surface). Picked rows get a 3px dashed primary outline drawn as four `addDashedRow` runs. Formula callout in a tinted box directly under the grid |
| G4 | Feasibility table with Harvey balls | IIM A p8 | [`harvey`] an ink-stroked ellipse plus a filled arc. Build the arc as an ellipse with `arcData` (startingAngle, endingAngle, innerRadius 0) so quarter, half, three-quarter and full states are one helper. Used for channel attractiveness on slide 5 |
| G5 | Pathway roadmap | Ops Cogitate p4 (winding road with pins FY-0 to FY-4) | Hybrid: generated road ribbon as base art (section 14.5), native numbered pins, month chips and three-bullet stop cards on top. Native fallback: a stepped road of five thick ink-stroked rectangles joined at right angles with a dashed centre line (`addDashedRow`), pins as in G2 |
| G6 | Pillar or house diagram | Ops Cogitate p5 | Five-point house polygons (vector path: rectangle with a triangular roof) in a row on a base bar, each holding a title and two lines. Used for the four-step trust ladder on slide 8 as rising steps: each pillar taller than the last, base bar labelled with the weeks |
| G7 | Impact gauge | Ops Cogitate p6 | [`gauge`] a five-cell segmented bar (five rectangles heat1 to heat5, no gradient) with a small triangle marker above the cell that applies. Used for probability and impact in the risk register |
| G8 | SCQA strip | Ops Cogitate p2 | Four equal columns under header chips SITUATION, COMPLICATION, QUESTION, ANSWER; the ANSWER column is a primaryDeep layered card |
| G9 | Budget split | IIM A p4 (initiative band with rupee and percent, cost-driver pie) | One 100% segmented bar split organic and paid, a legend with rupee and percent per channel placed outside narrow segments, plus a waterfall from total budget down through each channel to zero. Each initiative row: name chip, rupee amount, percent, a mini Harvey ball of share |
| G10 | Persona card | IIM A p3; InnovatED p5; Elite Consultant p6 | Layered card: an initials avatar (ellipse with two letters, no stock photo), a segment name, year and branch line, a "job to be done" sentence, three pain points with alert bullets, the buying window month, and a three-stat strip at the foot |
| G11 | Journey or intent heat map | Marketing guide archetype | [`heatGrid`] rows are year of study (2nd, 3rd, 4th), columns are months Oct to Sep, cells shaded by intent, with event markers (internship drive, placement season start, exams, fests) as small flags above the column they fall in, and BeyondTech's current selling window drawn as a dashed bracket |
| G12 | Issue tree | Skill frameworks; EY | Tiered boxes joined by 2px ink elbows (three `addWireH` and rectangle segments); leaves carry a number or the label "not measurable from outside" |
| G13 | Partner table | Street Boyz p3 (Objective, Partners, Rationale with logos) | `addTable` with a logo slot column 80px wide, then Society, What it lends, The activation, Month, Expected registrations |
| G14 | Flywheel | Skill archetypes | Four layered cards at the compass points around a hub ellipse, joined by four arc-free connectors: straight wires with a triangle head, turning the corner at each card. Label each wire with the conversion number |
| G15 | Gantt | p3 p2; Maudrik slide 8 | Month header row, one bar per workstream as an ink-stroked rectangle spanning its columns with the label inside, milestone diamonds as rotated squares, a dashed vertical "today" and "15 Jan 2027 batch" marker with an in-chart label |
| G16 | KPI tree with target table | Dream11 `2:11` | North-star card on top, an elbow bracket to four metric cards, then a table Baseline, 3 months, 6 months, 12 months |
| G17 | Risk heat map | Maudrik slide 4 | 5 by 5 grid, cells coloured by score band, numbered risk dots placed in cells, legend, then a register table with 1:1 mitigation and owner |
| G18 | Tornado | Maudrik appendix | Mirrored horizontal bars from a centre line, sorted by swing, low and high labels at the bar ends |
| G19 | Three-scenario line or bar set | Dream11 `2:11`; Street Boyz p6 | Polyline from short rotated segments with dot markers, direct labels at the line ends (no legend), or three bars bear, base, bull with the base highlighted |
| G20 | Cover mind map | Dream11 and SwasthyaGrid covers | Section 14.4, slide 1 |

**Correction (step B2, 10 Oct 2026):** the "Street Boyz p6, traffic-light dots, dashed winner"
citation above (G3) is wrong on the page number and on the dashed-winner detail. Street Boyz's body
page 6 is a stakeholder flow-chart, not a scorecard. The actual traffic-light-dot device sits in that
deck's appendix (Exhibit 2); it uses 3 colour states with no numeric label and no dashed-winner
outline anywhere in the deck. G3's actual design recipe (the heat-grid scorecard) is unaffected,
since it was already modelled primarily on Dream11's own weighted-score grid (`2:7`) and IIM A's
dashed-outline "picked" block (`iima` p8, confirmed accurate), not on Street Boyz.

**Eight additional diagram devices (ND1-ND8)** were catalogued from the two previously-unstudied
inspiration decks (IIM A Winning Deck and InnovatED) and are not yet named by G1-G20. Full recipes in
`BT/case/04-inspo-deck-study.md`, section "Diagram devices not yet in PLAN.md section 14.3". Summary,
for quick reference at Stage 2 build time:

| ND | Device | Use in this deck |
|---|---|---|
| ND1 | Numbered-exhibit appendix ledger (EXHIBIT N + value + Rationale column) | Slide 11's appendix should use this convention, not a plain dense table, per the stronger reading in `04-inspo-deck-study.md` section S4 item 1 |
| ND2 | Dashed-leader spoke annotation (cards around a central hub diagram, each with its own dashed leader) | Option for the funnel-plus-channel-cards layout on slide 5 (G1) if the straight-leader version reads too busy |
| ND3 | Hexagonal flywheel (variant of G14) | Noted as an alternate shape for G14, not adopted by default |
| ND4 | Continuous tapering chevron spine with numbered stop badges | Option for the 90-day launch Gantt (G15) or the KPI ladder (G16) if a single-ribbon ranked list reads better than a tree-plus-table |
| ND5 | Traffic-light status-dot grid, 3-state | Not used; this deck's scorecard stays on G3's 1-to-5 numeric heat grid for the weighted Fit score, since a 3-state fitness check would lose the weighting the case brief explicitly asks for (B17, "backed by numbers") |
| ND6 | Boxed stakeholder flow-chart (hub box, mixed-direction labelled arrows to surrounding boxes) | Option for a society-partnership relationship view on slide 8 if the trust-ladder pillars (G6) need a companion relationship diagram |
| ND7 | Price-tag polygon callout | Option for the fee-sensitivity exhibit (assumption A01) in the appendix |
| ND8 | Toggle-switch metaphor for a binary comparison | Not used; this deck's comparisons (channels, colleges, scenarios) are rarely binary |

### 14.4 The 12 slides

Skill section mapping: Front = slide 1; Executive Summary = 2; Context = 3; Actors = 4; Quantitative
Analysis = 6 and 7; Feasibility = 9 and 10; Recommended Alternative = 5 and 8; Conclusion = the
closing band of 10; Appendix = 11. Foreshadowing: slide 3 plants "proof, not awareness" and the
recruiter-overlap idea that slide 7 pays off. Symmetric treatment: the four pick cards on slide 8 and
the four dossier rows are identical in structure; the two pillars use mirrored funnel and budget
logic. Double synthesis: a "CONCLUSIVELY" card closes slide 7; a "THEREFORE" card closes slide 10.

Action titles below are templates; `{}` values come from `values.js` at D1.

**Slide 1, Cover.** No ribbon. Left 58%: chip row ("BEYONDTECH x DTU CONSULTING GROUP",
"CASE COMPETITION 2026", "TEAM IDEAFORGE"), a punch-hole wire, kicker "BEYONDTECH" with logo slot,
title "FROM A DTU HABIT TO A TIER-1 SYSTEM" (Poppins ExtraBold, fit to width), subtitle "A go-to-market
plan to deepen DTU and launch at four new campuses", a primaryDeep verdict card (gold line: the
governing thought compressed to two lines; white line: the moneyshot sentence), then "TEAM IDEAFORGE"
and the Members, Institution, Role table (two rows, both Delhi Technological University). No KPI-card
row. Right 42%: the mind map (G20) in a tinted panel titled "ONE COURSE, FIVE CAMPUSES, ONE PROOF
LOOP". Hub: BeyondTech logo tile. Inner ring, four logo tiles with one line each: the existing proof
(DTU crest, "50+ selections"), the recruiters (a 2 by 2 cluster of Bain, ZS, Eternal, JP Morgan Chase
logos, "the companies that visit"), the door in (DCG logo, "societies lend the trust"), the engine
(WhatsApp and LinkedIn glyph tiles, "today: referral only"). Outer ring, four college crest tiles for
the picks, each with its Fit score. Solid wires hub to inner ring, dashed wires to the outer ring,
drawn wires first, nodes second, hub last (`addDiagonalWire`, midpoint method). Every logo is a real
uploaded image or a dashed slot labelled with the brand name.

**Slide 2, Executive summary** (SUMMARY, 1 / 9).
Title: "BeyondTech can add {dtu_add} DTU students and four new campuses in twelve months on
₹{total_budget} lakh by distributing proof, not buying awareness".
Band A: the SCQA strip (G8) with the brief's own words in S and C (B10, B11, B13). Band B: two mirrored
pillar cards, "DEEPEN DTU" and "LAUNCH AT FOUR", each with three numbered lines and one KPI numeral
(budget and split on the left; picks and season-1 cohort on the right). Band C: a five-tile answer
strip (target enrolments, blended CAC, organic share, payback, founder hours freed) and a small DO /
DO NOT pair (the contrarian moves in one line each).

**Slide 3, Diagnosis** (DIAGNOSE, 2 / 9).
Title: "Recall is strong but only about {pen_now}% of DTU's non-tech pool enrols, because five breaks
sit between hearing of BeyondTech and paying".
Left: the DTU funnel today (G1) from batch to pool to aware to lead to applicant to enrolled, with
the unknown steps labelled as estimates. Centre: the issue tree (G12) of five leaks with evidence
chips (W06, W08, W11, W13 and W14, I1). Right rail "WHAT THE THREE LINKS SHOW": three real artefacts
(screenshot crops of the open Drive links, the admission steps, the two LinkedIn posts with reaction
counts as a two-bar chart 269 against 15). Foot: founder hours per enrolment today (T11) as a numeral.

**Slide 4, The student** (DIAGNOSE, 3 / 9).
Title: "Four kinds of DTU student need this course in three different months, and BeyondTech sells in
one".
Left: four persona cards (G10) in a 2 by 2. Right top: the intent heat map (G11), year of study by
month, with the current selling window bracketed. Right bottom: a table mapping recruiter rounds to
BeyondTech's four phases, and a commentary panel with three bold-keyword bullets. If R-I holds 15 or
more quotes, two verbatim quotes with platform and month sit in the persona cards; otherwise a chip
reads "No student quotes used: desk research only".

**Slide 5, DTU plan** (DTU PLAN, 4 / 9).
Title: "Eleven channels in three layers reach {dtu_reach} students before the 15 January batch, with
societies and a mock drive doing the heavy lifting".
Left 40%: the target funnel (G1) with channel cards per tier. Centre 35%: the society partner table
(G13) with logo slots, 6 rows. Right 25%: channel attractiveness with Harvey balls (G4) on reach,
cost, trust and founder time. Foot band: the urgency calendar, a month strip Oct to Jan with four
dated activations (case workshop with DCG, branch-rep kickoff, the BeyondTech Mock Placement Drive,
last-call info session).

**Slide 6, DTU budget and economics** (DTU PLAN, 5 / 9). Holds the moneyshot.
Title: "₹{dtu_budget} lakh, {organic_pct}% organic: the split is what falls out when channels are
funded cheapest first".
Top: a primaryDeep moneyshot band with the sentence from section 4.4 and three gold-divided stats.
Left: the 100% split bar and channel legend with rupee and percent (G9), and the CAC bar chart by
channel sorted ascending with a dashed "funding stops here" marker and in-chart label. Right: the
budget table (channel, cost, enrolments, CAC, month), a three-scenario bar set (G19) and a formula
callout: `Blended CAC = total cash spend ÷ enrolments from all channels`. Foot: the realism line,
budget as a share of season revenue at the base fee, and the fee sensitivity (T15) in three chips.

**Slide 7, College selection** (PICK, 6 / 9).
Title: "{pick1}, {pick2}, {pick3} and {pick4} top a seven-criterion scorecard of {n_scored} colleges,
and hold their place in {stab_min}% or more of 2,000 re-weightings".
Left 68%: the heat grid (G3), top 12 colleges plus the four existing campuses as a calibration block
and the best-scoring IIT as a contrast row, formula callout underneath. Right 32%: the screen as a
small funnel (28 considered, n pass each filter), the stability bars (share of draws in the top 4),
and four one-line reasons, each with two numbers. Foot: the "CONCLUSIVELY" card.

**Slide 8, Pan-India launch: where and how trust is built** (LAUNCH, 7 / 9).
Title: "Each new campus is entered in four steps: borrow a society's trust, seed {cohort} students,
earn {offers} offers, then hand over to ambassadors who were customers first".
Left 45%: the India map (G2) with four existing-campus pins and four pick pins, leaders to four
identical city cards. Right 55%: the trust ladder as rising pillars (G6) with week ranges on the base
bar and the named mechanism under each step; under it a symmetric table, one row per pick: host
society (logo slot), the wedge, anchor recruiters there, season month, founding cohort size.

**Slide 9, The launch machine** (LAUNCH, 8 / 9).
Title: "One campus costs ₹{campus_cost} to open and pays back in season {payback_season}; the
ambassador flywheel takes over from week 9".
Left: the 90-day Gantt (G15) with five workstreams and the day 30, 60 and 90 gates as diamonds.
Centre: the flywheel (G14) with conversion numbers on the wires. Right: per-campus P&L table for
seasons 1 and 2 with a cumulative cash line and a dashed break-even marker labelled on the plot, and
the incentive ladder for ambassadors in rupees.

**Slide 10, Roadmap, measurement, risks and the first step** (PROVE IT, 9 / 9).
Title: "Two waves take BeyondTech to five more campuses by September 2027; three numbers at day 60
decide whether a campus scales, holds or stops".
Left 40%: the pathway roadmap (G5), five stops from October 2026 to September 2027. Centre 30%: the
KPI tree and target table (G16) and the stop, hold, scale rule as a three-box flow. Right 30%: the
risk heat map (G17) with six numbered risks, a 1:1 mitigation list, and the "claims we can and cannot
make" pair from Lane H. Foot: the "THEREFORE" card and a dated first step ("By {date}: gate the
resource library, publish the fee band, sign DCG and two more societies").

**Slide 11, Appendix** (own ribbon, counter A1). One dense page.
Title: "Every number traces to a named source, the college dataset or one stated model, and each
assumption below can be changed".
Four panels: the full scorecard for all scored colleges at 22pt in two columns; the assumptions
register (A-ID, base, range, basis); the tornado (G18) and the model summary table; the bibliography
panel named `BIBLIO` at 14pt. A chip states the method limit: desk research only, with the Customer
Validation Plan in the research document.

**Slide 12, Thank you.** No ribbon. "THANK YOU" at 120, the line "BeyondTech x DTU Consulting Group
Case Competition 2026 · Team IdeaForge", the same team table as the cover, and one line pointing to
the research document.

### 14.5 Generated base art (hybrid, as chosen)

Only two images are generated. Neither carries text, numbers, logos or labels. The lead writes
`BT/deck/image-prompts.md` at D1 with the final prompts, sizes and negative prompts; the drafts are:

| Asset | File | Frame in Figma | Draft prompt |
|---|---|---|---|
| India base map | `assets/india-base.png` | Frame `IMG/india-base`, sized to the image's aspect ratio (India is about 0.92 wide to 1 tall), about 620 by 680 on slide 8 | "Flat vector map of India, front-facing, north up, no perspective, no tilt. Solid light blue-grey fill (#C7D7FE) with thin dark (#0A0A0A) 2px state borders and a 3px dark outer outline. Full political extent as depicted by the Survey of India, including the complete territory of Jammu and Kashmir and Ladakh, Andaman and Nicobar Islands and Lakshadweep. Pure white background. No text, no labels, no pins, no icons, no shadows, no gradients, no neighbouring countries, no sea colour. The country fills the canvas with a 2% margin on every side. 2000 by 2200 pixels." |
| Road ribbon | `assets/road-ribbon.png` | Frame `IMG/road`, about 700 by 560 on slide 10 | "Flat vector illustration of a single winding road seen from above at a slight angle, running from bottom-left to top-right in three smooth S-bends. Road surface dark navy (#0B1F66) with a dashed yellow (#F5C518) centre line and a thin black outline. Pure white background. No text, no numbers, no pins, no signs, no vehicles, no trees, no scenery, no shadows, no gradients. Five evenly spaced flat widened lay-bys along the road where markers can be placed. 2400 by 1900 pixels." |

Acceptance of the map before upload (the lead checks; two attempts, then the fallback):
1. Borders: the northern outline includes the full Jammu and Kashmir and Ladakh extent. A map that
   truncates it is rejected. This is a legal sensitivity in India, not a style preference.
2. No stray text or artefacts. 3. Flat and north-up, so projection math holds.

### 14.6 Placing pins on the map

1. From `assets/india.svg` (Lane J) take the bounding box in degrees: longitude 68.1 to 97.4 east,
   latitude 6.7 to 37.1 north (confirm against the file).
2. For a frame of width w and height h, a point at (lat, lon) sits at
   `x = (lon − 68.1) / 29.3 × w`, `y = (37.1 − lat) / 30.4 × h` (equirectangular, adequate at slide
   scale).
3. Calibrate on the generated image: place test dots for Delhi (28.61, 77.21), Mumbai (19.08, 72.88),
   Chennai (13.08, 80.27) and Kolkata (22.57, 88.36); screenshot; if any dot is more than 12px off the
   expected coastline or position, adjust a per-axis scale and offset and record the four values in
   `build-log.md`. Then place the eight campus pins with the corrected transform.
4. Fallback, fully native: `figma.createNodeFromSvg()` on `assets/india.svg` gives a vector outline
   with exact coordinates and no calibration. Set its strokes to ink, fill to tint, and zero any corner
   radius. Use this if the generated map fails acceptance twice or is not supplied by D8.

### 14.7 Logos and artefacts

Logo slots are frames named `LOGO:<slug>`, sized to the logo's aspect ratio before upload
(`ROOT/CLAUDE.md` section 7.4 and 7.5: re-upload after any resize). One `upload_assets` call per image
(`count: 1` plus `nodeId`), then POST the bytes. A missing logo stays as a dashed-outline slot with
the text "<Name> logo" at 22pt, as on the Dream11 deck, and is listed for the user. Screenshot crops
of BeyondTech's own pages on slide 3 are real artefacts and carry a source line.

### 14.8 Build rules that prevent the known failures (`ROOT/CLAUDE.md` section 7, all ten apply)

- Append to the real parent first, then size, fill and position. At every nesting level.
- Wrapping text: `textAutoResize = 'HEIGHT'` plus an explicit width through `resize()`.
- Load every font style used, in one `Promise.all` at the top of every script.
- Delete by node name or ID, never by a y threshold. A layered card is two nodes; remove both.
- `get_metadata` does not work on Slides files; inspect with read-only `use_figma` scripts.
- Diagonal wires: midpoint position, endpoint distance as length, then rotation.
- Read what the validator flags before fixing. Punch-holes over tags, back cards under fronts and
  tight table rows at 22pt are known false positives.
- A `use_figma` call that reports an idle timeout may still have landed. Check with a read-only
  script before re-sending.
- Scripts stay under 50,000 characters; `gen.py` warns and the batch is split.
- Fit rules are decided in copy, not in Figma: each table cell and list item has a character budget in
  `DECK-PLAN.md`, checked by `mock_figma.js` before any write.

---

# PART VI

## 15. Recovery table

| Symptom | Cause | Action |
|---|---|---|
| A sub-agent dies on a rate limit | Long run | Its file exists because it wrote early. Start a new agent with the same prompt plus "Continue from row <last ID>; do not rewrite existing rows" |
| WebFetch returns 999 or 403 | Site blocks automation | Try the search-result snippet (status "search result only"), then a cached or aggregator copy, then Chrome tools read-only; else NOT FETCHED |
| Two sources disagree | Normal | Log in `## Conflicts`; the lead rules at G1 by the hierarchy in 6.2 |
| A college has thin data | Institute publishes little | One targeted re-search at G2; then it fails F4 and leaves the ranking. It stays in the appendix table marked "insufficient public data" |
| Model check fails | Input or formula error | The modeller fixes it; no writer starts until the script exits 0 |
| A locked number changes after G4 | Late correction | Re-run the model, re-run `make_values.py`, grep the old value across `BT/`, add a Late correction to `WRITER-BRIEF.md`, re-run `assemble.py` |
| `assemble.py` reports missing S-IDs | Writer cited an ID not in the register | Send the part back; never add a source without a fetched URL |
| Slide count is not 12 after creation | `getSlideGrid()` returned stale data | Count through the SLIDE_GRID node's children; delete only empty extras |
| Generated map rejected twice | Wrong borders or stray text | Native SVG fallback, section 14.6 step 4 |
| The plan file in `.claude\plans` is gone | Overwritten by a later session | Irrelevant; everything reads `BT/PLAN.md` |

## 16. Verification

### 16.1 Stage 1 is done when all of these hold

1. `python assemble.py md` prints: words at least 45,000; tables at least 110; dashes 0; exclamations
   0; banned hits empty; missing S-IDs empty; duplicate headings empty; Answer leads at least 26.
2. `beyondtech_gtm_model.py` exits 0 with every check passing; `model_tables.md` has T1 to T16; the
   Excel Checks sheet ties to the JSON.
3. Every B-ID of section 3.1 appears in the coverage matrix (doc section 1) with a section and a slide.
4. Every pick has: a Fit score, a stability share, a one-line reason with two sourced numbers, a
   dossier of 30 or more rows, and passes F1 to F4.
5. Spot check by the lead: 20 random numbered claims in the doc are traced from the sentence to the
   tag to the lane row to the URL. Zero misses allowed; any miss triggers a second sample of 20.
6. Proper-noun sweep: BeyondTech (one word, capital T), Harsh Agarwal, Subham Mukhopadhyay, DTU
   Consulting Group, EMCEE DTU, Eternal, L.E.K. Consulting, ZS Associates, JP Morgan Chase, Everest
   Group, each college's official name. No "Beyond Tech", no "Periphery"-style slips.
7. The PDF builds; page 1 and one mid-document page are rendered with PyMuPDF and looked at.
8. Touchpoint C critique is on disk and its top 5 fixes are applied.

### 16.2 Stage 2 is done when all of these hold

1. Sweeps return 0: corner radius, font floor, dashes, banned words, bounds, ABSENT list.
2. The MUST list (every locked number and all four pick names) is found on the slides it belongs to.
3. Titles-only read of slides 2 to 10 tells the whole argument (P04).
4. Each core slide has a source line, four to five type levels, at least one chart or diagram paired
   with a table, and no empty region larger than about 150 by 150 px.
5. Exactly one moneyshot. Exactly 12 slides. Cover has the mind map with logo tiles and no KPI row.
6. Screenshots of all 12 slides are saved and each is compared with the prime decks.

### 16.3 Organiser rubric self-score (from the DCG playbook, 0 to 5 each, target 40 of 45, none under 4)

Client understanding; insight; storyline; evidence; slide clarity; credibility; scope and options;
call to action; delivery readiness. The critic scores it at touchpoints C and D.

### 16.4 Close-out

Report to the user: file paths, word and table counts, the four picks with scores, the DTU budget and
split, the moneyshot, the open items below, and the Figma URL at Stage 2. Save a project memory
(`project_beyondtech_dcg.md`): team (Harsh Kawatra and Anuj, DTU), 12-slide structure, desk-only
research, hybrid map decision, and that plans must be copied into the case folder at step B0.

## 17. Open items for Harsh (none blocks Stage 1)

| # | Item | Default if no answer |
|---|---|---|
| 1 | Anuj's full name and the role labels for the team table | "Anuj", roles "Team Leader" and "Member" |
| 2 | Submission deadline and whether a live presentation follows | Assume the deck is read cold as a leave-behind; density stays high |
| 3 | Anything known first-hand about BeyondTech's fee, cohort size or DTU member count | Scenarios A01 and A04 stand |
| 4 | The DTU society notes you offered (what each society does, who partners with outside brands) | Drop them into `BT/inputs/INPUTS-FROM-HARSH.md`; V-B reads it and tags it "team field knowledge, unverified". Public pages are used otherwise |
| 5 | The two generated images (India base map, road ribbon) from `BT/deck/image-prompts.md` | Native SVG map and stepped-road fallback |
| 6 | Team name on the cover | "Team IdeaForge", as on the earlier decks |
