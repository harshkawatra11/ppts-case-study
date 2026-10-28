# Hisaab, HackerVilla deck content spec (revised, 9 slides)

Locked before any Figma node is drawn. 9 slides: Cover, Executive Summary, Problem, Solution,
How It Works, Tech Stack, Feasibility, Impact and Scope, Thank You. Razorpay Track 04, AI Finance
Controller.

Rules checked against every line below: zero em dashes, no rhetorical hooks, no AI-slop phrasing,
no reference to a built application anywhere (no screenshots, no GitHub or Vercel link, no
filenames, no code identifiers, no `.ts` names). This is purely an idea deck, argued the way a
person tells a story to another person, not a spec sheet. Team: Harsh, Gursimran.

**The contrarian thesis**, argued structurally across the deck: the obvious read of Track 04 is
to automate an enterprise finance team's reconciliation. Hisaab argues the opposite. The highest
value finance-ops loop to close in India is not the one where both sides of the ledger already
exist in a system. It is the one where one side was never written down at all, because it lives
in a shopkeeper's head and a paper bahi khata. There is nothing to reconcile until the missing
side is created, and voice is the only input method a shopkeeper serving a customer will actually
use. Second beat: everyone will make the model the engine. Hisaab caps the model's authority in
code so it can never post a match, because the 2026 bottleneck is verification capacity, not
generation speed, and a model that grades its own work adds none of that capacity.

**The story arc across the nine headlines:** a shopkeeper's ledger nobody has ever checked, the
realisation that the missing side has to be created before anything can be reconciled, how that
capture and check actually happens and where the line is drawn, what it costs and what could go
wrong, who gains and how far it reaches. Reading only the nine headlines in order should carry
the whole argument.

---

## Slide 1, Cover

Title: **Hisaab**, हिसाब set beneath it.
Subtitle (the story's opening line): The books, spoken into existence, then checked against the
bank.
Chips: HackerVilla Nainital 2026, Track 04, AI Finance Controller
Team: Harsh, Gursimran
A quiet, unfilled echo of the seven-tag ribbon sits low on the slide, previewing the argument's
shape without being active. No filled ribbon, no numbers, no charts. Deliberately the lightest
slide in the deck, but not bare: roughly 25 to 40 nodes.

---

## Slide 2, Executive Summary

Headline (the recommendation in one sentence): Hisaab captures the missing side of the ledger
first, then reconciles it, with the model capped below the line that posts a match.

Sub-headline (the question restated): A hackathon track asking for a closed finance-ops loop
usually gets answered with a better matcher. This is not that.

Two symmetric columns:

Left, THE OBVIOUS READ (automate enterprise-style reconciliation):
- A matching engine assumes both sides of a ledger already exist somewhere. In the informal
  credit economy, one side never gets written down at all.
- The MSME credit gap sits at 20 to 25 lakh crore rupees (U.K. Sinha Committee, RBI, 2019), and
  most of that gap is unrecorded transactions, not unmatched ones.
- A model that grades its own match adds no verification capacity, and verification capacity is
  the actual bottleneck in 2026, not generation speed.

Right, HISAAB'S MOVE (capture first, then reconcile, with the model capped):
- Voice is the only input a shopkeeper serving a customer will actually use. Nobody stops mid-sale
  to open a form.
- 75.5 lakh street vendors already show the scale of credit no system has seen (PM SVANidhi,
  MoHUA).
- The model's confidence is capped at 0.89 in code, strictly below the 0.90 line that posts a
  match, so it can never post one on its own.

Bottom verdict band: capture the missing side first. Reconciliation only means something once
both sides exist.

Source line: U.K. Sinha Committee, RBI 2019 | MoHUA

---

## Slide 3, Problem

Headline (action title, carries a number): 75.5 lakh vendors run on credit that no system has
ever seen.

KPI hero row, three numerals:
- 20 to 25 lakh crore rupees, the MSME credit gap (U.K. Sinha Committee, RBI, 2019)
- 17,800 crore rupees, disbursed through PM SVANidhi to 75.5 lakh street vendors (MoHUA)
- 89 percent versus 16 percent, accounts owned versus accounts sitting inactive (World Bank
  Global Findex 2025)

Left rail, WHY THE LOOP NEVER CLOSES, a numbered four-step failure:
1. A sale on udhaar is never recorded anywhere a system can see.
2. The matching bank credit arrives days later under a narration nobody recognizes.
3. Nobody ever puts the two records side by side.
4. The shopkeeper's cash position stays a guess, not a number.

Right rail, WHO IT HITS, five actors in a table, one line each:
- Retailer, the one keeping the notebook
- Wholesaler, paid late and unpredictably
- Moneylender, pricing risk on no real data
- D2C seller, running the identical udhaar problem online
- B2B supplier, chasing the same unreconciled invoice for weeks

Bottom band, a real branching issue tree (root and branch lines, not a text strip) under "the
books are wrong": missing capture, unmatched settlement, untracked tax.

Source line: U.K. Sinha Committee, RBI 2019 | MoHUA | World Bank Global Findex 2025

---

## Slide 4, Solution

Headline: One ledger, four loops. Capture the missing side first, then reconcile it.

Hub and spoke: center hub "Hisaab, one ledger", four spokes at even angles: Multi-source
reconciliation, Settlement Q&A, Forward cash forecast, Tax and P&L matching. A fifth node, styled
differently, placed using the same even-angle spacing as the other four rather than hand-placed
above the hub: Voice capture, the input that creates the side of the ledger that did not exist
before. The headline keeps its own reserved band; no diagram node enters it.

Contrarian callout band, bottom, accent fill: the thesis sentence, tightened for a slide: The
highest-value loop is not the one where both sides already exist in a system. It is the one where
one side was never written down. Voice creates it. Then reconciliation checks it.

Left rail, THE MOVE: three lines against the enterprise-automation framing, arguing this is a
capture problem before it is a matching problem.

Source line: NPCI UAP agentic pilot, Feb 2026 | RBI Digital Lending Directions, May 2025

---

## Slide 5, How It Works

Headline: A three-layer match, and a line the model cannot cross.

Top strip, six nodes on a wire: Spoken event, Structured event, Deterministic posting,
Three-layer match, Exception engine, Explained answer.

Confidence-band ladder, left, four stacked bars:
- Exact reference and amount, 99 percent, auto-post
- Fuzzy signal match, 90 percent or above, auto-post
- 72 to 90 percent, the model may reason about the candidates already shortlisted, but its
  confidence is capped below the auto-post line in code, never in a prompt
- Below 72 percent, exception

Bold in-chart callout at the 90 percent line: The model cannot cross this line.

Signals table, right, four rows with weights: amount 40 percent, date 20 percent, counterparty
name 25 percent, reference 15 percent. Formula callout beneath: Confidence equals 0.40 times
amount plus 0.20 times date plus 0.25 times name plus 0.15 times reference.

Bottom band, WHAT WE MEASURE: match rate reported alongside precision and recall against a
ground-truth set, never on its own, since a match rate alone can be gamed by matching nothing
and calling everything an exception.

Source line: Track 04 brief

---

## Slide 6, Tech Stack

Headline: Four layers, and the model sits in exactly one of them.

Four stacked bands, rail-labelled:
- Interface: voice, in the merchant's own language, and a dashboard
- Understanding: speech to structured event, explanation, question answering
- Truth: double-entry ledger, matching engine, tax rules, forecast model
- Data: voice-captured ledger, bank statement, settlement export, invoices

Understanding band drawn lighter, dashed outline. Truth band drawn solid, heavy ink stroke.

Inside the Interface band, a three-rung ladder graphic: full-duplex voice, then transcribe-only,
then typed. Caption: capability degrades, the ledger never stops accepting the event.

Language strip beneath: the merchant speaks Hindi, Hinglish, and more. Spoken Indian quantities
(dhai, sava, derh, bara sau) are resolved by deterministic code, not by the model.

Right column, decides-versus-proposes table, four rows: money calculation, match posting, tax
arithmetic, and ledger balance are all deterministic, the model never consulted. Speech
understanding, ambiguous-candidate ranking, and explanation phrasing are proposed by the model,
bounded by the engine.

No product screenshots, no filenames, no links, no code identifiers. Capability categories only.

---

## Slide 7, Feasibility

Headline: Buildable at close to zero marginal cost, with the boundary stated upfront.

Three-horizon strip:
- Now: voice capture, the ledger, the three-layer matcher, an honest exception list
- Next 30 days: forecast patterns, tax matching, WhatsApp settlement reminders, a credit-risk
  score for each party built from the ledger's own payment history
- Beyond: multi-shop support, a lender-facing credit view

Cost-share segmented bar, legend carrying the values: model inference, hosting, database, all
inside published free tiers, marginal cost near zero.

Risk tree, five risks with paired mitigations:
1. Speech accuracy in a noisy shop, paired with a typed fallback for every voice action
2. A wrong match posted, paired with the model's confidence cap below the auto-post line
3. Model quota or availability failing mid-use, paired with a three-rung degradation ladder,
   capability drops, the ledger keeps accepting events
4. No live UPI or Account Aggregator access for a non-regulated entity, paired with simulating
   the rail and stating the boundary
5. Data privacy under DPDP, paired with consent and purpose limitation designed in from the
   start, DPDP Rules notified 13 November 2025, phased compliance to 13 May 2027

Gold callout box, the simulation boundary stated directly: no live UPI rails, no NPCI membership,
no Account Aggregator access, no bank core write access. Only a regulated entity can transact on
those rails.

Source line: RBI Digital Lending Directions 2025 | DPDP Rules, 13 November 2025 | NPCI

---

## Slide 8, Impact and Scope

Headline: 3,000 shops in year one is the plan, not a slice of a percentage.

Bottom-up TAM, SAM, SOM as three nested circles, each sourced from a named, verified count, never
a top-down percentage slice:
- TAM: 13 million kirana stores in India, roughly 90 percent of the country's FMCG retail by
  volume (industry estimate, cited to retail-trade research)
- SAM: 1,58,319 kirana and retail-trade stores already Udyam-registered as MSMEs since the 2021
  guideline change, the population already formalized enough to adopt a compliance-adjacent tool
- SOM: 3,000 shops in year one, a stated go-to-market target anchored in Delhi NCR and one
  tier-2 city, not a percentage of TAM

Pricing strip: roughly 100 rupees a month per retailer, benchmarked against Indian SaaS
unit-economics comparables, not a USD model relabelled in rupees.

Five-actor value table, one row per actor, the loop Hisaab closes for each:
- Retailer: udhaar tracked without a notebook, cash position known daily
- Wholesaler: paid on a predictable cadence instead of chased
- Moneylender: a real transaction history to price risk against
- D2C seller: the same reconciliation loop applied to online credit and returns
- B2B supplier: an invoice that reconciles itself against the buyer's ledger

Small growth-roadmap strip, three compact nodes: Year 1 (3,000 shops, Delhi NCR and one tier-2
city), Year 2, Year 3, each carrying a shop-count figure, giving the slide a genuine sequential
element rather than three static forms side by side.

Closing giant numeral: 3,000 shops, year one.

Source line: Retail trade industry estimates | Udyam registration data, KNN India | upGrowth
Indian SaaS benchmarks

---

## Slide 9, Thank You

Plain. Hisaab wordmark, हिसाब beneath it. Thank you. Team: Harsh, Gursimran. Nothing else.
