# BUILD BANK (YEL × IGDTUW) — 20+ Fintech Project Ideas, Pressure-Tested

*Prepared for Harsh (DTU, 1st-year ECE; full-stack + applied ML; building with Claude Code). Current as of 13 Aug 2026.*

## TL;DR
- **Build narrow, ground it in official data, and fake the rails.** The single highest-probability win is **AsliLender** (Track 2, lender verification) because it is the only idea here built on downloadable RBI ground-truth data (the quarterly NBFC register), so no judge can attack it as fabricated. Runner-ups that fit your ML strength: **MuleMap** (graph mule-network detection on PaySim/Elliptic) and **CashRhythm** (explainable cash-flow trust score).
- **The least-crowded, highest-signal tracks are Track 3 (Payments & Embedded Finance) and Track 4 (Open Innovation).** Track 2's "real-time fraud alert" and Track 1's "alternative credit score" will be the most cloned submissions; win there only by occupying their most-defensible corners (official data, network structure, explainability).
- **No student team can touch live UPI/AA/bank rails.** Every idea below is buildable at ₹0 in 24-48h and demonstrable *without* regulated infrastructure — provided you state the simulation boundary on one honest slide. That honesty is itself a scoring advantage at a bank-sponsored event.

## Key Findings
1. **The problem has shifted from "no account" to "account exists, no credit/usage."** India's financial-account ownership hit 89% in 2024, up from 35% in 2011 (World Bank Global Findex 2025), but 16% of Indian accounts are inactive versus a 6% global average. The remaining gap is credit, trust, and usability — not account opening. Design for that.
2. **The fraud numbers are large and officially documented, so you can cite hard figures.** UPI frauds hit ₹981 crore across 12.64 lakh incidents in FY24-25 (MoS Finance, Lok Sabha, Dec 2025); overall RBI-reported bank fraud value reached ₹36,014 crore in FY25 with 56.5% in digital payments (RBI Annual Report FY25). India's own anti-fraud stack — MuleHunter.AI, DoT's FRI, Sanchar Saathi/Chakshu, I4C Suspect Registry — gives you real systems to reference and student-scale versions to build.
3. **Real sandboxes exist but are gated; use mocks.** ONDC has a free local mock/sandbox on GitHub. Sahamati AA sandboxes (Onemoney, Finvu, Perfios) run dummy data only and require a regulated FIU/FIP in production. There is no open student sandbox for live UPI rails — but `upi://` intent deep-links genuinely work on a real phone with no NPCI membership.
4. **Zero-cost vernacular AI is mature.** AI4Bharat (IndicTrans2, IndicWhisper, IndicBERT; Apache 2.0 on Hugging Face), Bhashini (22 languages, subsidised), and Sarvam AI (₹1,000 free credits per account) make voice-first Indian-language interfaces cheap to prototype. Budget for AI4Bharat Hindi ASR word error of ~12-18% on clean audio, 22-30% on telephony.

---

## THE HONEST SIMULATION RULE (read before building anything)
No student team can transact on live UPI rails, pull live Account Aggregator data, or write to a bank core. NPCI membership, Sahamati FIU/FIP status, and ONDC production onboarding all require a regulated entity (RBI/SEBI/IRDAI/PFRDA). Sahamati's own hackathon FAQ confirms sandbox access is per-AA with dummy data only. So for every idea: **simulate the rail, use real public data where it exists, and state the boundary on a slide.** Judges reward "here is what is real, here is what we mocked, here is what needs a license."

---

# TRACK 1 — Financial Inclusion for the Underbanked & Informal Economy

**Track context to cite:** Account ownership 89% in 2024 (Findex 2025); 16% inactive accounts. MSME credit gap estimated at ₹20-25 lakh crore (U.K. Sinha RBI Expert Committee report to RBI, June 2019). PM SVANidhi has disbursed over one crore loans worth ₹17,115 crore to street vendors (MoS Housing & Urban Affairs Tokhan Sahu, Rajya Sabha written reply, 30 March 2026; later MoHUA data shows 1.12 crore loans worth ₹17,800 crore to 75.5 lakh vendors). e-Shram has 30.98 crore registered unorganised workers (Aug 2025). NITI Aayog projects gig workers rising from 7.7M (2020-21) to 23.5M by 2029-30. Only 35% of Indian women own smartphones vs 51% of men (GSMA Mobile Gender Gap Report 2024). Indian microfinance GLP peaked at ₹4,33,697 crore as of 31 March 2024, up 24.5% YoY (MFIN Micrometer Q4 FY23-24, 7 June 2024), then contracted through FY25-26.

## Idea 1.1 — CashRhythm: cash-flow trust score from a vendor's own QR history
**Pitch:** Turn a street vendor's UPI QR inflow history into a lender-readable reliability score, no CIBIL required.

**Real problem:** Vendors receive UPI payments (P2M is 63% of UPI volume, 86% of P2M under ₹500 per NPCI) but that data sits with the PSP, not the vendor, and CIBIL has no file. MSME credit gap ₹20-25 lakh crore (U.K. Sinha Committee, 2019).

**User:** A vegetable seller or tea-stall owner with a Paytm/PhonePe QR. Today they borrow from a moneylender at 3-10%/month or wait for PM SVANidhi's ₹10k first tranche.

**Non-obvious angle:** Everyone builds "score from bank statement." Differentiator: score the *rhythm and resilience* of cash flow, not the average. A vendor earning ₹800/day six days a week is more creditworthy than one averaging ₹1000 with wild swings. Features: income regularity (coefficient of variation), day-of-week seasonality, recovery-after-shock, payer diversity (many unique payers vs one).

**Demo script:** (1) Upload a vendor's simulated 6-month QR CSV. (2) Dashboard renders daily inflow with detected patterns ("stable Mon-Sat, closed Sundays, recovered in 4 days after a 2-week dip"). (3) Score 0-100 with plain-language breakdown in Hindi and English. (4) "Lender view" recommends loan size, tenor, and a repayment date aligned to the vendor's strongest cash-flow day. (5) Click any transaction to see its score contribution.

**Architecture:** Next.js on Vercel; FastAPI on Render/Railway; scikit-learn gradient boosting (or a transparent logistic model) with SHAP for per-feature attribution; Supabase Postgres; Gemini Flash / Groq (Llama 3.3 70B) to turn SHAP values into plain-language explanation.

**Data:** No public Indian vendor-QR dataset exists. Synthesize 500 vendor profiles: Poisson daily transaction counts, log-normal ticket sizes anchored to NPCI's ~₹1,293 average and 86%-under-₹500 distribution, weekend/festival seasonality, injected shock events; label good/bad repayment via a documented rule (default probability rises with income CoV). Document the generator.

**Cost:** ₹0 (Vercel + Render + Supabase + Gemini/Groq free tiers).

**Scope cut:** Build scoring + explainability + one language first. Fake the "connect PhonePe" button (it opens a file upload). Out of scope: real AA integration, real disbursement.

**What makes it win:** Repayment-date-aligned-to-cash-flow-day is a genuine product idea; SHAP-to-Hindi is the wow moment.

**Risks / attacks:** A skeptic says "synthetic data proves nothing." Counter: the contribution is the feature-engineering + explainability framework, validated on synthetic data with a documented generator, ready for real AA data day one. Guard against overfitting your own labels by keeping generator and scorer logically independent.

**Compliance:** Production needs AA consent (RBI NBFC-AA framework) and an RBI-regulated lender. Prototype on uploaded/synthetic data is fine. Cite AA framework + DPDP Act 2023 (Rules notified Nov 2025).

## Idea 1.2 — AwaazKYC: voice-first onboarding that verifies comprehension
**Pitch:** Onboard a first-time, low-literacy user into a savings/insurance product entirely by voice in their mother tongue.

**Real problem:** Onboarding assumes English fluency and digital literacy. Only 35% of Indian women own smartphones vs 51% of men (GSMA 2024). 16% of accounts are inactive (Findex 2025). e-Shram had to be relaunched in all 22 scheduled languages via Bhashini because English/Hindi-only excluded most workers.

**User:** A first-time user (e.g. a domestic worker) with a Jan Dhan account she never uses. Today a relative or agent fills forms — where mis-selling and fraud enter.

**Non-obvious angle:** Most build a chatbot that "supports Hindi." Differentiator: the interface *checks comprehension* — it asks the user to repeat back what a term means before proceeding, and slows down when it detects confusion. Onboarding as a teaching loop, not a form.

**Demo script:** (1) Judge picks a language (Hindi, Tamil, Bhojpuri). (2) App speaks a question; judge answers by voice. (3) It explains "nominee" simply, then asks for confirmation of understanding; if vague, re-explains differently. (4) Completed onboarding summary read back. (5) Same flow over a phone call (Twilio trial) for feature-phone users.

**Architecture:** Bhashini or AI4Bharat IndicASR/IndicWhisper (ASR) + IndicTrans2 (translation) + Bhashini/IndicTTS or Sarvam (TTS; ₹1,000 free credits, STT ₹30/hr); Next.js/Streamlit; Gemini/Groq for the comprehension-check dialogue; Twilio trial for IVR.

**Data:** None; use AI4Bharat open models (Apache 2.0, Hugging Face). Script the flow.

**Cost:** ₹0 to ₹1,000 credits.

**Scope cut:** One product — PMSBY accident insurance (₹2 lakh cover for ₹20/year, a real simple product). Two languages well. Fake actual account creation.

**What makes it win:** Comprehension verification is a real anti-mis-selling mechanism; doing it over a Twilio call reaches the UPI 123PAY feature-phone base (~290M users).

**Risks / attacks:** Telephony ASR WER 22-30% for Hindi can break the demo — pre-test phrases, add a DTMF fallback, demo in a quiet room. "How is this better than Bhashini-enabled e-Shram?" — e-Shram translates a form; you verify understanding and detect confusion.

**Compliance:** Real eKYC needs Aadhaar (UIDAI) and a regulated entity. Prototype simulates the KYC step.

## Idea 1.3 — HaqSaathi: income-volatility savings with auto-adjusting micro-goals
**Pitch:** A savings product that reads irregular income and moves small amounts to savings only on high-earning days.

**Real problem:** Gig/daily-wage workers have no predictable monthly income, so fixed-SIP/RD products bounce and erode trust. NITI Aayog projects 23.5M gig workers by 2029-30; e-Shram has 30.98 crore unorganised workers (Aug 2025).

**User:** A Swiggy/Zomato rider or daily-wage labourer. Today they don't save, keep spendable cash, or set a fixed RD that bounces.

**Non-obvious angle:** Not round-ups (Jar, Google Pay already do this). Differentiator: a *surge-linked* engine that detects a good-income day and nudges a variable amount, plus a "safe-to-save" number guaranteeing enough is kept for the week. Volatility itself is the signal.

**Demo script:** (1) Load a rider's simulated 90-day income series. (2) Engine marks high days: "on 12 Aug you earned ₹1,400, safe to save ₹120." (3) Projected savings curve vs a fixed-RD curve that bounces 4 times. (4) Festival/emergency pause-and-withdraw. (5) Vernacular voice month summary.

**Architecture:** Next.js + FastAPI; exponential smoothing / Prophet-lite forecast to estimate the week's income and compute the safe-to-save buffer; Supabase. UPI AutoPay is the real-world rail (cite it); you simulate mandates.

**Data:** Synthesize gig-income series: base daily earnings with weekly seasonality (weekends higher for delivery), Poisson order counts, occasional zero-income sick days, monthly rent shock.

**Cost:** ₹0.

**Scope cut:** Build surge-detection + safe-to-save math + two-curve comparison. Fake auto-debit.

**What makes it win:** The side-by-side "your product vs a fixed RD that bounced 4 times" chart is a concrete, quantified win.

**Risks / attacks:** "How do you know income before it arrives?" — you don't perfectly; be honest it's a rolling estimate with a conservative buffer. People may resent silent debits — use opt-in nudges.

**Compliance:** Real product needs a bank/PPI partner and UPI AutoPay mandate rules (NPCI). Prototype simulates.

## Idea 1.4 — SakhiCircle: digital ROSCA (chit) with UPI Circle delegation
**Pitch:** Digitise the informal savings circle with a transparent, tamper-evident ledger and delegated payments for members without their own UPI.

**Real problem:** Informal ROSCAs (committees/chits) run on trust, cash, and paper — prone to the organiser absconding. UPI Circle (launched 2024) lets a primary delegate payments up to ₹15,000/month (₹5,000/txn, max 5 delegates) to members who lack their own bank access.

**User:** A group of 10 women running a monthly ₹1,000 committee. Today the organiser holds cash and a notebook; disputes and fraud are common.

**Non-obvious angle:** Most "chit app" ideas just build a ledger. Differentiator: map the ROSCA onto UPI Circle's real delegation limits so members without UPI participate under a trusted primary, plus a tamper-evident payout schedule everyone can see.

**Demo script:** (1) Create a circle, add 5 members, set the amount. (2) Show delegation: 2 members are secondary under a primary. (3) Simulate month-1 collection and the randomized/bid payout. (4) All members see the same immutable ledger and next payout date. (5) If the organiser tries to skip a payout, everyone is alerted.

**Architecture:** Next.js + Supabase (Postgres + row-level security); append-only ledger with hash chaining for tamper-evidence; Gemini/Groq for plain-language dispute explanations.

**Data:** None; model the ROSCA rules.

**Cost:** ₹0.

**Scope cut:** Ledger + membership + payout schedule + tamper alert. Simulate UPI Circle.

**What makes it win:** Grounding in UPI Circle's real 2025-26 limits shows you researched the actual rails.

**Risks / attacks:** Chit funds are regulated (Chit Funds Act 1982) — position as a transparency layer that holds no funds. "Isn't this a spreadsheet?" — tamper-evidence + delegation mapping are the substance.

**Compliance:** Chit Funds Act + UPI Circle NPCI rules. Prototype = transparency/ledger only.

## Idea 1.5 — FasalCover: parametric weather micro-insurance for small farmers
**Pitch:** Crop micro-insurance that pays out automatically on a public weather trigger, no claims paperwork.

**Real problem:** Small/marginal farmers face large institutional-credit and insurance gaps (NABARD NAFIS 2021-22). PMFBY is slow and claim-heavy. Parametric insurance (pay on a rainfall/temperature threshold) removes the claims process and its fraud entirely.

**User:** A marginal farmer with <2 acres. Today: no cover, or a months-long PMFBY claim after an office visit.

**Non-obvious angle:** Most insurance ideas build a claims chatbot. Differentiator: parametric design — payout is a public function of public weather data, so there's no adjuster, no fraud, no paperwork. Show the trigger fire live on real weather data.

**Demo script:** (1) Farmer picks village + crop + season. (2) App shows premium and the exact trigger ("if June rainfall < 40mm, you get ₹5,000"). (3) Pull 10 years of open weather data to show how often it would have paid. (4) Simulate a drought month — payout fires automatically, farmer notified by voice. (5) Transparency screen: the exact reading that triggered it.

**Architecture:** Next.js + FastAPI; Open-Meteo free API / data.gov.in rainfall / IMD gridded data; a scheduled trigger function (no blockchain needed); Bhashini/Sarvam for the vernacular notification.

**Data:** Open-Meteo historical API (free), data.gov.in rainfall datasets. Real data is the point here.

**Cost:** ₹0.

**Scope cut:** One crop, one district, one trigger. Build trigger + historical backtest + payout simulation.

**What makes it win:** Runs on *real* weather data; the "how often would this have paid in 10 years" backtest is a strong quantified moment.

**Risks / attacks:** Basis risk — the trigger may not match actual crop loss; acknowledge it as the known parametric trade-off. "Who underwrites it?" — needs an IRDAI-licensed insurer in production.

**Compliance:** Insurance needs IRDAI licensing. Prototype demonstrates the trigger + transparency, not a sold policy.

---

# TRACK 2 — Fraud Detection & Financial Crime Prevention

**Track context to cite:** UPI frauds ₹981 crore / 12.64 lakh incidents in FY24-25 and ₹1,087 crore / 13.42 lakh incidents in FY23-24 (MoS Finance, Lok Sabha, Dec 2025). Overall RBI-reported bank fraud value ₹36,014 crore in FY25, 56.5% in digital payments (RBI Annual Report FY25). I4C projects cyber-fraud losses "likely to increase to Rs 1.2 lakh crore in 2025... about 0.7% of GDP" (I4C via Deccan Herald, 19 Oct 2025). RBI's MuleHunter.AI is live in 23 banks (Dec 2025). DoT's FRI launched May 2025 and prevented ~₹2,300 crore in 10 months. Government froze ~4.5 lakh mule accounts in one year with ~₹17,000 crore siphoned (I4C, Nov 2024); Nuh district alone had 1,000+ mule accounts identified in 2025. Digital arrest scams caused ~₹2,140 crore Jan-Oct 2024; cases fell ~86% in 2025 but losses were still ₹644 crore. 1 in 5 UPI users has faced fraud (LocalCircles, 2025).

## Idea 2.1 — RukJa: a real-time UPI scam explainer that intervenes at the moment of payment
**Pitch:** Before a risky UPI payment completes, show a plain-language, specific reason it might be a scam — not a generic warning.

**Real problem:** UPI fraud is human-exploitation, not a system hack. 1 in 5 UPI users has faced fraud (LocalCircles, 2025). Generic banners are ignored. NPCI discontinued P2P collect requests from Oct 2025 precisely because the collect-request scam worked so well.

**User:** Anyone paying via UPI, especially first-timers and elders. Today the app shows a limit warning or nothing.

**Non-obvious angle:** Most build a classifier. Differentiator: the *explanation and timing*, mirroring how PhonePe integrated DoT's FRI to warn on high-risk numbers. Name the specific red flag ("this is a collect request, not a payment — you are about to SEND money to receive a 'prize'") and force friction calibrated to risk.

**Demo script:** (1) Simulate scanning a QR / entering a VPA. (2) Engine scores risk: collect vs pay request, first-time payee, amount anomaly, VPA age, simulated FRI mobile-number risk. (3) Scam scenario → red screen explaining the exact reason in the user's language, requiring them to type the payee name to proceed. (4) Safe payment → green, one tap. (5) "Why" panel shows feature contributions.

**Architecture:** React Native/Next.js mock UPI screen; FastAPI risk engine (rules + a small classifier); a simulated FRI lookup table; Gemini/Groq for phrasing; Bhashini/Sarvam vernacular.

**Data:** Simulate a payee/VPA reputation table and scam scenarios (collect-request, fake-prize, "wrong-number refund") grounded in documented 2024-25 typologies.

**Cost:** ₹0.

**Scope cut:** 4-5 scenario detectors + explanation UX. Rules can beat a full model in 48h. Out of scope: real UPI hooks.

**What makes it win:** Calibrated friction (type the payee name for risky, one tap for safe) is a real UX innovation that echoes what NPCI/DoT actually deployed.

**Risks / attacks:** False positives annoy users — show tuning. "You can't hook into GPay/PhonePe" — correct; you demo the logic layer a PSP would embed, and cite that PhonePe already did exactly this with FRI.

**Compliance:** Only PSPs/TPAPs sit in the live UPI flow (NPCI). Prototype = the intelligence layer on a mock screen.

## Idea 2.2 — MuleMap: graph visualization to spot mule-account networks
**Pitch:** A graph tool that surfaces smurfing/layering patterns invisible in any single transaction.

**Real problem:** Mule accounts are the backbone of cyber fraud. Government froze ~4.5 lakh mule accounts in a year with ~₹17,000 crore siphoned (I4C, Nov 2024). RBI built MuleHunter.AI (23 banks by Dec 2025) precisely because rule-based systems miss network patterns; Nuh district alone had 1,000+ mule accounts in 2025.

**User:** A bank fraud analyst / FIU officer. Today they chase single flagged transactions and miss the network.

**Non-obvious angle:** Most build a transaction classifier. Differentiator: detect the *structure* — fan-in/fan-out, rapid pass-through (in and out within minutes), layering chains — using graph features, made visual and explainable. This is what MuleHunter.AI does; you build a student-scale explainable version.

**Demo script:** (1) Load a simulated transaction graph. (2) Tool auto-highlights a suspected mule cluster (many small deposits → one account → rapid transfer out). (3) Click it: "47 accounts fed ₹9,000 each into A, which moved ₹4.1L out in 6 minutes." (4) Risk-ranked analyst queue. (5) Export a case file.

**Architecture:** Python + NetworkX (or PyTorch Geometric for a GNN); Streamlit or Next.js + Cytoscape.js/vis.js; features: in/out degree, temporal velocity, pass-through ratio, community detection.

**Data:** PaySim (6.3M synthetic mobile-money transactions, cash-in/out/transfer, originator/recipient IDs, 0.13% fraud — Kaggle) is ideal for building a graph. Elliptic bitcoin (203,769 nodes, ~2% illicit) for a GNN benchmark. Synthesize an Indian mule topology: N collector accounts, fan-in from many victims, rapid layering. IEEE-CIS (590,540 transactions, 394 features, 3.5% fraud) for tabular baselining.

**Cost:** ₹0 (Streamlit Community Cloud / Hugging Face Spaces).

**Scope cut:** Graph features + one clear cluster-detection + visualization on PaySim. GNN is a stretch. Out of scope: real bank data.

**What makes it win:** A live interactive graph that lights up a mule ring is a strong wow; benchmarking against MuleHunter.AI's public description shows domain depth.

**Risks / attacks:** "PaySim isn't Indian UPI data" — the graph-feature approach is data-agnostic and you also generate an Indian-topology synthetic set. GNN overkill: a tuned NetworkX heuristic often demos better and is more explainable in 48h.

**Compliance:** Real deployment needs bank data-sharing (RBI declined even RTI on MuleHunter numbers, citing fiduciary confidentiality). Prototype uses public/synthetic data only.

## Idea 2.3 — AsliLender: verify a loan app against RBI-regulated entities before you pay
**Pitch:** Paste a loan-app name or URL; get a verdict on whether it's backed by an RBI-regulated entity.

**Real problem:** RBI's Working Group on Digital Lending (report 18 Nov 2021, chaired by ED Jayant Kumar Dash) reviewed ~1,100 lending apps across 80+ app stores (Jan-Feb 2021) and found ~600 illegal. Google removed 2,000+ personal-loan apps from Play Store India in 2022 (Google's Saikat Mitra, per TechCrunch, 25 Aug 2022), and a further 2,200+ apps were suspended/removed between Sept 2022-Aug 2023 after 2,500+ removed April 2021-July 2022 (MoS Finance Bhagwat Karad, Rajya Sabha, 6 Feb 2024). RBI now maintains a public NBFC register at rbi.org.in (PDF + Excel, quarterly) and, since July 2025, a Digital Lending Directory of DLAs tied to regulated entities.

**User:** A financially stressed borrower about to install a loan app. Today they judge by app-store rating and get trapped.

**Non-obvious angle:** Most "fraud detectors" score risk with a black box. Differentiator: **ground truth.** Build a real lookup against RBI's registered-entity list + red-flag heuristics (permissions requested, no physical address, no grievance officer, no NBFC number). Verifiable, not vibes.

**Demo script:** (1) Enter a loan app / lender name. (2) App returns "Not found in RBI's registered NBFC list" (red) or "Backed by [NBFC], CoR number [X]" (green). (3) Suspicious app → permissions red-flag report (asks for contacts + gallery = danger). (4) "How to report" links to RBI Sachet and cybercrime.gov.in / 1930. (5) Vernacular verdict.

**Architecture:** Download RBI NBFC Excel into Supabase; RapidFuzz fuzzy name matching (app names differ from legal entity names); a rules engine for red flags; Next.js frontend; browser-extension version as a stretch.

**Data:** RBI NBFC list (rbi.org.in/Scripts/BS_NBFCList.aspx, PDF+Excel, quarterly); RBI DLA directory. Use blog-published fake-app lists only as demo inputs, not ground truth.

**Cost:** ₹0.

**Scope cut:** Lookup + fuzzy match + red-flag checklist. The app-name-to-legal-entity mapping is the hard part — solve partially and be honest. Out of scope: auto-scanning an installed APK.

**What makes it win:** The only Track 2 idea grounded in official RBI ground-truth data — defensible and immediately useful. Wow: type a known-fake app and watch it flagged with a real citation.

**Risks / attacks:** The name-to-entity mapping is genuinely hard and is the core weakness a judge will probe. Counter: show fuzzy-match confidence and a "verify the lending partner named in the app's T&C" workflow mirroring RBI's own guidance. RBI's list is quarterly, so brand-new NBFCs lag.

**Compliance:** You consume public RBI data — clean. Don't claim to "approve" apps; RBI itself says it registers entities, not apps.

## Idea 2.4 — DigitalArrest Shield: a live coach that breaks the "digital arrest" script
**Pitch:** A tool that recognizes the digital-arrest scam pattern and coaches the victim to disengage in real time.

**Real problem:** Digital arrest scams caused ~₹2,140 crore in losses Jan-Oct 2024 (I4C) before awareness campaigns cut cases ~86% in 2025 — yet losses were still ₹644 crore in 2025. The scam works by isolation and fear over long video calls impersonating CBI/ED. Victims include the highly educated; the vulnerability is psychological.

**User:** A potential victim (often elderly) or their adult child wanting a safety net. Today there is nothing between the scammer's call and the bank transfer.

**Non-obvious angle:** Not another awareness poster. Differentiator: pattern-recognition of the *script* ("no real police arrest you over a video call," "they told you not to tell anyone" = red flag) plus a family-alert circuit breaker — a "second opinion" the victim invokes mid-call.

**Demo script:** (1) User opens the app during a suspicious call and describes it by voice. (2) App recognizes digital-arrest markers: "This is a known scam. No agency arrests you on a video call. Do not transfer money." (3) One-tap "alert my son/daughter" + the 1930 / Sanchar Saathi Chakshu links. (4) Cooling-off timer before any large transfer. (5) Vernacular throughout.

**Architecture:** Voice in via Bhashini/IndicWhisper; classifier/LLM (Gemini/Groq) on scam-script markers; Twilio for the family alert SMS; Next.js/React Native.

**Data:** Labeled scam-script phrases from documented cases (NITI Aayog's digital-arrest report, news reports); synthesize call transcripts.

**Cost:** ₹0 to small (Twilio trial).

**Scope cut:** Script-recognition + clear intervention message + family alert. Out of scope: intercepting the actual call.

**What makes it win:** Targets a scam with real cited losses and a clear psychological mechanism; the circuit-breaker + family alert is a concrete intervention.

**Risks / attacks:** "Cases already dropped 86%" — losses were still ₹644 crore in 2025 and scammers adapt scripts; the pattern-recognition generalizes. Liability if it misses a scam — frame as an aid, not a guarantee.

**Compliance:** No regulated rail touched. DPDP consent if monitoring an elder's calls — address it.

## Idea 2.5 — ScamGraph Sandbox: explainable structuring detection with analyst-in-the-loop
**Pitch:** Detect deliberately spread-out transactions (structuring/smurfing just under reporting thresholds) and route them to the right actor.

**Real problem:** Structuring — splitting large sums into many sub-threshold transactions — is invisible per-transaction by design. This is the "across many transactions over time" problem the track names. DoT-FIU signed an MoU (Sept 2025) to share mule/cyber-fraud data.

**User:** An AML analyst. Today rule-based thresholds catch the naive and miss the deliberate.

**Non-obvious angle:** Differentiate from 2.2 (MuleMap is network topology; this is *temporal thresholding behaviour*). Detect accounts whose transactions cluster just below reporting lines or aggregate to a large sum via many small ones — and decide *who acts*: bank freeze, FIU STR, or police. Model the escalation, not just the flag.

**Demo script:** (1) Load transactions. (2) Tool flags an account making 18 transfers of ₹9,500 in 3 days. (3) Explains the structuring signature and recommends the right action (STR to FIU vs bank hold). (4) Analyst approves/rejects — human-in-the-loop. (5) Feedback updates the queue.

**Architecture:** Python + pandas/NetworkX; time-series clustering + threshold-proximity features; Streamlit; LLM explanations.

**Data:** PaySim (inject structuring patterns), IEEE-CIS for tabular features, synthetic threshold-hugging series.

**Cost:** ₹0.

**Scope cut:** Structuring detection + escalation routing + human-in-loop. Out of scope: real STR filing.

**What makes it win:** The "who should act" escalation logic answers the exact question the problem statement poses — which most teams will ignore.

**Risks / attacks:** Overlap with generic anomaly detection — differentiate via the threshold-proximity feature + escalation. False positives on legit small businesses — show tuning.

**Compliance:** STR filing is a regulated function (PMLA, FIU-IND). Prototype detects + recommends only.

---

# TRACK 3 — Payments & Embedded Finance

**Track context to cite:** UPI processed 24,162 crore transactions worth ~₹314 lakh crore in FY26 (PIB); 84% of India's retail digital payment volume (RBI FY25). Credit line on UPI launched by PhonePe Aug 2024. UPI Circle allows delegated payments up to ₹15,000/month (₹5,000/txn, max 5 delegates). UPI 123PAY serves ~290M feature-phone users. NPCI discontinued P2P collect requests from Oct 2025. ONDC has a free local mock/sandbox on GitHub and a financial-services (FIS) domain spec. PhonePe held 48.4% of UPI volume and Google Pay 36.9% (NPCI, Aug 2025 reference); by May 2026 this had fallen to PhonePe 46.2% / Google Pay 32.7%, combined 79% — below 80% for the first time (NPCI via Sci-Tech Today).

## Idea 3.1 — PayAtPoint: embedded micro-credit inside an ed-tech/e-commerce checkout via ONDC
**Pitch:** Offer a small, transparent loan exactly at the checkout of a non-financial app, using ONDC's finance rails.

**Real problem:** People abandon carts / drop courses when they can't pay upfront, and redirecting to a separate lending app kills conversion. ONDC opened a financial-services domain to embed credit at the point of need; credit-on-UPI exists but is siloed in big apps.

**User:** A student buying a ₹8,000 course, or a small buyer on an ONDC seller app. Today they leave, or use a predatory BNPL.

**Non-obvious angle:** Most embed a hardcoded "Pay in 3" button. Differentiator: build on ONDC's actual open finance protocol (free mock server + FIS spec on GitHub) so the offer is interoperable and shows a full Key Fact Statement (KFS) upfront — which RBI's Digital Lending Directions 2025 now mandate at the offer stage, not just disbursal.

**Demo script:** (1) Mock course-checkout page. (2) At "Pay," an embedded credit offer appears with a full inline KFS (APR, tenor, penal charges). (3) User sees 2-3 lender offers (ONDC multi-lender view, per RBI 2025 rules requiring a neutral offer menu). (4) One-tap accept, repayment schedule shown. (5) The ONDC search→select→confirm flow in a debug panel.

**Architecture:** Next.js checkout; ONDC mock/sandbox server (ONDC-Official/ondc-mock-server, free) for the FIS flow; Supabase for offers; render KFS from a template.

**Data:** ONDC sandbox mock responses; synthesize 3 lender offer objects conforming to the FIS schema.

**Cost:** ₹0.

**Scope cut:** Embedded offer + KFS + multi-lender view against the ONDC mock. Out of scope: real disbursal, ONDC production registry.

**What makes it win:** Actually using the ONDC finance sandbox + a compliant KFS is a serious differentiator showing you read the 2025 rules. Wow: the inline KFS menu.

**Risks / attacks:** ONDC onboarding is notoriously hard — use only the local mock server. "Anyone can hardcode a BNPL button" — your answer is standards-compliance + KFS + multi-lender neutrality.

**Compliance:** Lending needs an RE (bank/NBFC). RBI Digital Lending Directions 2025 (issued 8 May 2025): KFS upfront, direct-to-bank disbursal, DPDP consent, cooling-off (min 1 day). Cite all; prototype simulates the RE.

## Idea 3.2 — SplitPay: one-tap bill splitting across chat that settles to bank
**Pitch:** Split a bill inside a chat and let everyone pay their share in one tap — even the person who only has cash.

**Real problem:** Splitting still means manual "send me ₹240" messages and chasing people; the cash-only friend can't participate. UPI Circle now allows delegated payments (₹5k/txn, ₹15k/month) for people without their own UPI.

**User:** A group of students/roommates. Today they use Splitwise to track but settle manually over UPI.

**Non-obvious angle:** Splitwise tracks but doesn't settle; GPay splits but stays in-app. Differentiator: cross-platform (a shareable link that works from any chat) + a UPI Circle path so the cash-only member's share is covered by a trusted primary and repaid in cash offline — closing the loop for the unbanked participant.

**Demo script:** (1) Enter a bill, split among 4, generate a link. (2) Open link (no install) — each person sees only their share + a pay button. (3) One person is cash-only — their share is delegated to a primary via UPI Circle (simulated). (4) Real-time settled/unsettled status. (5) Nudge the laggard.

**Architecture:** Next.js + Supabase; `upi://` intent deep-links (real, usable, no NPCI membership needed) that launch GPay/PhonePe with a prefilled amount; simulate the Circle delegation.

**Data:** None.

**Cost:** ₹0.

**Scope cut:** Split + share link + UPI intent deep-link + status tracking. The intent link works on a real phone — demo it live. Simulate Circle. Out of scope: settlement confirmation callback (no PSP access).

**What makes it win:** The UPI intent deep-link actually launches a UPI app with the amount prefilled on a real phone — a rare "it actually works" moment without any bank integration.

**Risks / attacks:** You can't confirm completion without PSP webhooks — be honest, use manual "mark paid." Crowded space (Splitwise, GPay) — differentiate on cross-platform link + cash-only inclusion.

**Compliance:** UPI intent links are public spec — fine. Real settlement confirmation needs a PSP.

## Idea 3.3 — TrustCheckout: a trust layer that makes first-time BNPL/credit-on-UPI feel safe
**Pitch:** A checkout component that raises completion rates for unfamiliar payment methods by showing the right trust signals at the right moment.

**Real problem:** First-time users abandon unfamiliar methods (BNPL, UPI-linked credit) because they don't trust them. RBI's 2025 rules exist partly because unclear terms and dark patterns eroded trust. Cart abandonment is the measurable cost.

**User:** A first-time BNPL user at checkout. Today they see confusing terms and bail, or accept hidden charges.

**Non-obvious angle:** Most build the payment method; you build the *trust wrapper* — a component library showing plain-language terms, "you'll owe ₹X on [date]," the regulated lender's name + RBI registration, a no-dark-pattern pledge, and the RBI-mandated 1-day cooling-off notice. Trust as a design system.

**Demo script:** (1) A "bad" checkout (hidden fees, confusing) vs (2) your TrustCheckout version side by side. (3) Trust version: lender name + CoR, exact repayment date/amount, cooling-off notice, KFS link. (4) A/B stat: simulated completion-rate lift. (5) Vernacular toggle.

**Architecture:** React component library (publishable to npm as a stretch); Next.js demo harness; content from the RBI KFS template.

**Data:** None; use RBI KFS structure.

**Cost:** ₹0.

**Scope cut:** Component + before/after comparison. Out of scope: real payment processing.

**What makes it win:** A reusable, embeddable component with a measurable before/after is very demo-friendly and answers the problem statement directly; grounding in RBI 2025 trust rules is the depth.

**Risks / attacks:** "This is just UI." Counter: trust UX is the actual conversion lever, and you tie each element to a specific RBI rule and a metric. Simulated A/B isn't real evidence — acknowledge, propose a real test.

**Compliance:** Aligns with RBI Digital Lending Directions 2025 (KFS, cooling-off, no dark patterns). Clean.

## Idea 3.4 — VendorPay Offline: UPI 123PAY-style payment to a cash-only vendor via sound/IVR
**Pitch:** Let a buyer pay a cash-only or no-smartphone vendor using sound-based or IVR payment, bridging to their bank.

**Real problem:** ~290M feature-phone users are served by UPI 123PAY (IVR, missed-call, sound-based). Many small vendors still take only cash for lack of a smartphone or reliable data. The last mile is offline/feature-phone.

**User:** A vendor with a feature phone and a buyer with a smartphone but poor connectivity. Today: cash only.

**Non-obvious angle:** Most payment ideas assume smartphones + data. Differentiator: build the sound-based / offline handshake (like UPI Lite X / 123PAY sound tech) — encode a payment token as audio between two devices, no internet at the point of sale, settle when connectivity returns.

**Demo script:** (1) Buyer enters amount offline. (2) Phone emits a sound token; vendor's device "hears" it (or an IVR call confirms). (3) Both see a pending confirmation. (4) When connectivity returns, it settles (simulated). (5) Show the feature-phone IVR path too.

**Architecture:** Web Audio API for sound encoding (e.g. ggwave); Next.js; Twilio for the IVR path; Supabase for deferred settlement.

**Data:** None.

**Cost:** ₹0 to small (Twilio trial).

**Scope cut:** Build the sound handshake between two devices — that's the wow. Simulate settlement. Out of scope: real bank debit.

**What makes it win:** Sound-based offline payment working live between two devices is a genuine "how did they do that" moment and maps to real NPCI tech.

**Risks / attacks:** Audio in a noisy room can fail — test and add a QR fallback. "NPCI already does this" — you're prototyping the mechanism to show understanding, not competing.

**Compliance:** Real settlement needs PSP + NPCI. Prototype = the offline token exchange.

## Idea 3.5 — GigAdvance: earned-wage access embedded in a gig platform
**Pitch:** Let a gig worker draw already-earned wages instantly at the moment they need cash, inside the gig app.

**Real problem:** Gig workers earn daily but often can't access earnings until a weekly payout, forcing high-cost borrowing. NITI Aayog: 23.5M gig workers by 2029-30; 12 aggregators (Zomato, Uber, Swiggy, etc.) are onboarded to e-Shram. Earned-wage access (EWA) is embedded finance at the decision point.

**User:** A delivery rider needing ₹500 for fuel now but paid Friday. Today they borrow at high cost.

**Non-obvious angle:** Most embedded-finance ideas do BNPL for spending. Differentiator: EWA is *not a loan* — it's early access to already-earned money, so it sidesteps much lending regulation and is far safer for the worker. Embed it in the earnings screen with a transparent small fee vs the moneylender alternative.

**Demo script:** (1) A rider's earnings screen shows ₹3,200 earned this week, ₹0 available till Friday. (2) "Withdraw ₹500 now" with a flat ₹10 fee shown transparently. (3) Compare to moneylender cost. (4) On payday, the advance auto-nets from wages. (5) A cap tied to earned-but-unpaid balance so it can't become debt.

**Architecture:** Next.js earnings dashboard; FastAPI advance-eligibility logic (advance ≤ earned-unpaid); Supabase; simulated payroll netting.

**Data:** Synthesize gig-earnings ledgers (reuse the 1.3 generator).

**Cost:** ₹0.

**Scope cut:** Eligibility logic + transparent-fee UX + payday netting. Out of scope: real payroll integration.

**What makes it win:** The "this is not a loan, it's your own earned money" framing is a sharp, defensible distinction most teams won't articulate.

**Risks / attacks:** India's EWA regulatory status is still forming — some structures still look like lending; be honest about the grey area. "Who funds the float?" — the platform or a partner; acknowledge.

**Compliance:** Employer/platform advance-on-earned-wages is lighter than lending; a third-party-funded float may attract RBI lending rules. Flag the ambiguity.

---

# TRACK 4 — Open Innovation

## Idea 4.1 — SakhiSpeak: vernacular voice assistant for government-scheme discovery
**Pitch:** A voice bot that tells an unorganised worker exactly which government financial schemes they qualify for, in their language.

**Real problem:** 30.98 crore workers are on e-Shram with 14 central schemes linked (PM-SYM, PMJJBY, PMSBY, APY, PM-JAY), but awareness and navigation are the bottleneck. Scheme discovery is a real, unsolved last mile.

**User:** An unorganised worker unaware that PMSBY gives ₹2 lakh accident cover for ₹20/year. Today they miss out.

**Non-obvious angle:** Not a generic scheme chatbot. Differentiator: eligibility *reasoning* by voice — it asks a few questions and returns a ranked, personalized list with exact enrollment steps, in 22 languages via Bhashini.

**Demo script:** (1) User speaks their situation (age, work, income) in Bhojpuri. (2) Bot returns "you qualify for PMSBY (₹20/yr, ₹2L cover) and APY" with steps. (3) Voice readout + SMS summary. (4) Feature-phone IVR path.

**Architecture:** Bhashini/AI4Bharat ASR+TTS+IndicTrans2; Gemini/Groq for eligibility reasoning over a curated scheme knowledge base; Twilio IVR; Next.js.

**Data:** Curate scheme rules from official PIB/scheme pages into a structured KB.

**Cost:** ₹0 to ₹1,000 credits.

**Scope cut:** 5 schemes, 2 languages, voice + IVR. Out of scope: auto-enrollment.

**What makes it win:** Real government data + genuine multilingual voice + eligibility logic = high impact, clearly demoable.

**Risks / attacks:** ASR errors; scheme rules change — keep the KB small and curated. "Isn't this just search?" — the eligibility reasoning and voice-first access are the value.

**Compliance:** No regulated rail. DPDP consent for personal data.

## Idea 4.2 — ClaimSaathi: AI help to file a cyber-fraud complaint correctly within the golden hour
**Pitch:** Guide a fraud victim to file on cybercrime.gov.in / 1930 correctly and fast, maximizing fund-recovery odds.

**Real problem:** The Financial Cyber Fraud Reporting System saved ₹3,431 crore across 9.94 lakh complaints — but only when reported fast. Interception rose from ~6% (2021) to ~19% (early 2026). 51% of UPI-fraud victims never file (LocalCircles). The reporting process is confusing and time-critical.

**User:** Someone who just lost money to fraud. Today they panic, call the bank, delay, and lose the recovery window.

**Non-obvious angle:** Not an awareness tool. Differentiator: a time-critical guided-action assistant that (a) tells them to call 1930 immediately, (b) drafts the exact complaint with the right details, (c) generates the bank freeze request — all within the golden hour, mapped to the real Sanchar Saathi/Chakshu and NCRP flows.

**Demo script:** (1) User reports a fraud by voice/text. (2) App extracts key facts and generates a complete, correctly formatted NCRP complaint + a bank email. (3) A countdown emphasizing the golden hour. (4) Direct links to 1930, cybercrime.gov.in, Chakshu. (5) Vernacular.

**Architecture:** Gemini/Groq for extraction + drafting; Next.js; Bhashini for language; templates for NCRP/bank formats.

**Data:** Public NCRP complaint format; documented fraud types.

**Cost:** ₹0.

**Scope cut:** Extraction + complaint draft + freeze-request generation. Out of scope: auto-submission (no NCRP API).

**What makes it win:** Directly increases the cited recovery rate; the golden-hour framing is urgent and concrete. Low technical risk, high polish — a safe strong submission.

**Risks / attacks:** No official NCRP submission API — you generate, the user submits; be honest. Drafted-complaint accuracy matters — keep templates tight.

**Compliance:** No regulated rail; references official portals. DPDP consent.

## Idea 4.3 — CarbonKhata: micro-carbon credits for small farmers via verifiable practices
**Pitch:** Let smallholder farmers earn micro-payments for verifiable sustainable practices, aggregated into sellable carbon credits.

**Real problem:** Smallholders can't access carbon markets because per-farmer verification cost is too high. A real fintech-meets-climate gap with emerging voluntary-market demand.

**User:** A marginal farmer practicing crop rotation / reduced tillage. Today they get nothing for it.

**Non-obvious angle:** Differentiator: cheap verification via open Sentinel-2 satellite imagery + photo evidence, aggregating many tiny farms into one credit-worthy unit — solving the per-farmer cost problem that blocks the market.

**Demo script:** (1) Farmer logs a practice with a geo-tagged photo. (2) App cross-checks with open satellite imagery for the plot. (3) Aggregated dashboard shows pooled credits + estimated payment. (4) Transparent payout ledger.

**Architecture:** Sentinel Hub / Google Earth Engine (free tiers); Next.js; Supabase; simple change-detection.

**Data:** Sentinel-2 open imagery; synthesize farm plots.

**Cost:** ₹0 (open satellite data).

**Scope cut:** Logging + one satellite cross-check + aggregation. Out of scope: real credit certification.

**What makes it win:** Novel, climate-linked, real satellite data. Stands out among payment clones.

**Risks / attacks:** Verification rigor — carbon markets are strict; position as a screening layer, not certification. Satellite resolution limits on tiny plots.

**Compliance:** Carbon-credit certification is externally governed; prototype = the aggregation/verification layer.

## Idea 4.4 — InheritEasy: a nominee/succession assistant for financial assets
**Pitch:** Help families map and claim a deceased relative's scattered financial assets, reducing unclaimed deposits.

**Real problem:** Unclaimed deposits with banks/RBI run into tens of thousands of crores; families don't know where accounts/policies are or how to claim. Nominee gaps are a large, under-addressed problem.

**User:** A grieving family member navigating dozens of institutions blindly.

**Non-obvious angle:** Differentiator: a guided asset-discovery + claim-workflow tool (bank accounts, insurance, EPF, mutual funds, RBI's UDGAM unclaimed-deposit portal) with document checklists per institution — turning chaos into a checklist.

**Demo script:** (1) Enter the deceased's basic details. (2) App generates a discovery checklist (which institutions to check, incl. UDGAM). (3) For each asset type, exact claim documents + steps. (4) Progress tracker. (5) Vernacular.

**Architecture:** Next.js + Supabase; curated institutional claim-process KB; document checklist engine.

**Data:** Public claim-process info; RBI UDGAM references.

**Cost:** ₹0.

**Scope cut:** 4 asset types + checklists + tracker. Out of scope: actual claim filing.

**What makes it win:** Addresses a real, large, ignored problem with clear utility; emotionally resonant demo.

**Risks / attacks:** "Just a checklist app" — the value is the aggregated, institution-specific process knowledge. Legal accuracy matters — cite sources; add a "not legal advice" disclaimer.

**Compliance:** No regulated rail. Sensitive data — DPDP consent.

## Idea 4.5 — FinLit Arcade: adaptive financial-literacy game for first-time users
**Pitch:** A short, vernacular, scenario-based game that builds fraud-resistance and money skills, adapting to the user's mistakes.

**Real problem:** Low financial + digital literacy underlies inactive accounts (16% in India, Findex 2025) and fraud susceptibility (1 in 5 UPI users defrauded). Static awareness content doesn't stick.

**User:** A first-time digital-finance user or student. Today they learn by getting scammed.

**Non-obvious angle:** Not a quiz. Differentiator: adaptive scenario simulation — the user "lives through" a scam attempt and a savings decision, and the game escalates difficulty on exactly what they get wrong, in their language.

**Demo script:** (1) Pick language. (2) Play a scam scenario (a fake-prize collect request); make a choice; see the consequence. (3) The game notes weaknesses and serves a targeted next scenario. (4) A progress/skill map. (5) Voice narration.

**Architecture:** Next.js game UI; Gemini/Groq to generate/adapt scenarios; Bhashini/Sarvam voice; Supabase for progress.

**Data:** Scenario bank grounded in real 2024-25 fraud typologies.

**Cost:** ₹0.

**Scope cut:** 5 scenarios + adaptation logic + 2 languages. Out of scope: full curriculum.

**What makes it win:** Engaging, vernacular, adaptive, grounded in real scam patterns; easy to demo and emotionally sticky.

**Risks / attacks:** "Gamified literacy is done" — the adaptation + vernacular voice + real-typology grounding differentiate. Measuring behaviour change is hard — acknowledge.

**Compliance:** None; education tool.

---

# RANKED SHORTLIST — Top 5 overall (calibrated to Harsh)

*Basis: strong ML (trading, dev tooling, social analytics) + full-stack, solo/small with Claude Code, needs a demo that survives a skeptical bank judge, at ₹0, in 24-48h.*

1. **2.3 AsliLender.** Highest win probability. The only idea built on official RBI ground-truth data (downloadable NBFC Excel), so it's unattackable on "is this real." Full-stack + light ML (fuzzy matching), clear demo, direct impact, maps to RBI's own July-2025 DLA directory. The hard name-matching problem is exactly what your ML skill handles.
2. **2.2 MuleMap.** Plays to your ML strength, uses real public datasets (PaySim, Elliptic), benchmarks against RBI's actual MuleHunter.AI, and graph visualization is a strong wow. Slightly higher technical risk (graph features, viz) but manageable.
3. **1.1 CashRhythm.** Best fit for your ML + explainability; SHAP-to-vernacular is a memorable wow; addresses the ₹20-25 lakh crore MSME gap. Weakness is synthetic-data dependence — mitigate with a rigorous documented generator.
4. **3.1 PayAtPoint.** Highest "you clearly did the homework" factor: real ONDC sandbox + RBI 2025 KFS compliance. Full-stack heavy, light on ML. Wins on depth; risk is ONDC complexity (mitigate: local mock only).
5. **2.1 RukJa.** Broad appeal, clear demo, maps to deployed FRI/PhonePe reality, strong vernacular + UX story. Slightly crowded — differentiate hard on calibrated friction + explanation.

*Honorable mention:* **4.2 ClaimSaathi** — high impact, low technical risk, polished and emotionally resonant if you want a safe submission.

# WHICH TRACK IS EASIEST TO WIN

- **Most crowded (hardest to stand out):** Track 2's "real-time fraud explainer" and Track 1's "alternative credit score." These are the obvious submissions; a generic classifier or "UPI-data credit score" will blur together.
- **Least crowded / best signal-to-noise:** Track 3 (Payments & Embedded Finance) and Track 4 (Open Innovation). Embedded finance is technically fiddlier so fewer teams execute it well; a working ONDC/UPI-intent/sound-payment demo stands out sharply. Track 4 rewards originality, where clones don't exist by definition.
- **Best expected value for Harsh:** a *technically grounded* Track 2 idea that isn't the obvious one — specifically **2.3 AsliLender** (real RBI data) or **2.2 MuleMap** (real datasets + graph ML). These sit in a popular track but occupy its least-crowded, most-defensible corner. Strong execution + official data beats a prettier but ungrounded competitor.

# ANTI-PATTERNS (what everyone else builds — avoid or differentiate hard)

- **Track 1:** Black-box "alternative credit score from bank/UPI data" on made-up data with no explainability. Kaleidofin (Ki Score), CRIF High Mark, Experian, and Perfios already do this. Differentiate with explainability, cash-flow rhythm, or repayment-timing. Also avoid: yet another generic "financial literacy chatbot."
- **Track 2:** A binary fraud classifier on IEEE-CIS with no product, no explanation, no "who acts." Everyone shows an AUC. Differentiate with the *action, explanation, and network structure*. Avoid another "fraud awareness poster."
- **Track 3:** A hardcoded "Pay in 3 / BNPL" button with fake data and no compliance. Differentiate with ONDC standards, a real KFS, UPI intent links that actually work, or offline/sound payment.
- **Track 4:** Blockchain-for-everything with no real user, or a ChatGPT-wrapper "financial advisor." Differentiate with a real Indian dataset or a real government rail (e-Shram, UDGAM, Sanchar Saathi).

# INCUMBENTS TO NAME (so you're not caught claiming novelty)

- **Alternative credit scoring:** Kaleidofin (Ki Score/Ki View), CRIF High Mark, Experian, Perfios, plus 400+ global startups (Tracxn). Your edge = explainability + cash-flow rhythm.
- **Fraud/mule detection:** RBI MuleHunter.AI (RBIH), NPCI AI/ML fraud monitoring, DoT FRI. Your edge = student-scale, explainable, analyst-in-loop.
- **Lender verification:** RBI NBFC register + DLA directory (the official source you build on). No strong consumer tool exists — a genuine gap.
- **Payments:** PhonePe (48.4% UPI volume Aug 2025), Google Pay (36.9%), Paytm; credit-on-UPI live in these. Your edge = ONDC interoperability, offline, or inclusion.
- **Bill split:** Splitwise (tracks, doesn't settle), GPay (in-app only). Your edge = cross-platform link + cash-only inclusion.

# TECHNICAL STACK APPENDIX (zero-cost, current limits)

**Free LLM inference (verified mid-2026):**
- **Groq** — free developer tier, no credit card, ~30 RPM, fast Llama 3.3 70B / Llama 4 Scout / Qwen. Best for fast chat demos.
- **Google Gemini API** — free tier, no credit card, no expiry, but tightened late 2025 (Flash-Lite ~15 RPM/1,000 RPD, Flash ~10 RPM/250 RPD; 2.5 Pro removed from free tier for many accounts). Good for structured output.
- **Cerebras** — ~1M tokens/day free, no credit card. Highest daily volume.
- **OpenRouter** — several free models. **Hugging Face** — free inference + Spaces hosting.
- **Anthropic** — occasional ~$5 new-account credit (not guaranteed); use claude.ai interactively and Claude Code to build.

**Indian-language AI:**
- **Bhashini** (Govt of India) — ASR/TTS/NMT for 22 languages, free/subsidised for non-commercial; TTS ~₹250/month for 50k chars/day at scale.
- **AI4Bharat** (IIT-Madras) — IndicTrans2, IndicWhisper, IndicASR, IndicTTS, IndicBERT; open weights, Apache 2.0, on Hugging Face. Hindi ASR WER ~12-18% clean, 22-30% telephony.
- **Sarvam AI** — ₹1,000 free credits per account; STT ₹30/hr, TTS ₹15-30/10k chars, translation ₹20/10k chars.

**Hosting / DB / infra (free tiers):** Vercel/Netlify (frontend); Supabase (Postgres + auth + storage + RLS); Neon/PlanetScale (serverless SQL); Cloudflare Workers/Pages/D1 (edge + SQLite); Render/Railway (backend, with sleep limits); MongoDB Atlas (512MB); Streamlit Community Cloud / Hugging Face Spaces (ML apps); Firebase Spark; **GitHub Student Developer Pack** (sign up now — DigitalOcean/Azure credits, domain, Copilot); Google Cloud free tier + credits (Earth Engine / heavier compute); Twilio trial (SMS/IVR).

**ML / data libraries:** scikit-learn, XGBoost/LightGBM, SHAP (explainability), NetworkX / PyTorch Geometric (graphs), pandas, Prophet, RapidFuzz (fuzzy matching), Web Audio / ggwave (sound payments), Cytoscape.js / vis.js (graph viz).

**Sandboxes (real, student-usable):**
- **ONDC mock/sandbox** — ONDC-Official/ondc-mock-server and beckn-sandbox-api on GitHub — free, local, mock responses; FIS spec for finance.
- **Sahamati AA sandboxes** (Onemoney, Finvu, Perfios) — dummy data only, register per-AA; production FIU/FIP must be RBI/SEBI/IRDAI/PFRDA-regulated. Use only for a mock consent flow.
- **NPCI/UPI** — no open student sandbox for live rails. Use `upi://` intent deep-links, which work on real phones without membership.

# PUBLIC DATASETS

- **PaySim** (Kaggle) — ~6.3M synthetic mobile-money transactions; cash-in/out/transfer; originator/recipient IDs; 0.13% fraud. Best for mule/structuring graphs.
- **IEEE-CIS Fraud Detection** (Kaggle) — 590,540 card transactions, 394 features, 3.5% fraud. Tabular baseline.
- **Elliptic Bitcoin** (Kaggle) — 203,769 nodes, 234,355 edges, ~2% illicit. GNN benchmark.
- **Sparkov / Amazon FDB / ccfraud** — additional fraud benchmarks.
- **Global Findex 2025** (World Bank microdata) — financial-inclusion demand-side data.
- **NPCI product statistics** (monthly) — UPI P2P/P2M splits, ticket sizes.
- **data.gov.in** — Indian open datasets (rainfall, agriculture, PMJDY).
- **Open-Meteo / Sentinel-2 (open)** — weather + satellite for parametric insurance / carbon.
- **RBI NBFC list** (rbi.org.in, PDF+Excel, quarterly) — ground truth for lender verification.
- **e-Shram** aggregate stats (PIB) — gig-worker context.
- No public Indian UPI/vendor transaction-level dataset exists — synthesize and document your generator.

# COMPLIANCE QUICK-REFERENCE (prototype can vs can't)

- **UPI rails:** only NPCI members/TPAPs transact. Prototype: mock screens + `upi://` intent links. Never claim live UPI access.
- **Account Aggregator:** FIU/FIP must be regulated. Prototype: mock consent + synthetic/uploaded data. Cite NBFC-AA framework.
- **Lending:** only banks/NBFCs (REs) lend. RBI Digital Lending Directions 2025 (8 May 2025) mandate KFS upfront, direct-to-bank disbursal, cooling-off (min 1 day), DPDP consent, no dark patterns, DLA directory. Prototype: simulate the RE, show a compliant KFS.
- **eKYC/Aadhaar:** UIDAI-regulated. Prototype: simulate KYC.
- **DPDP Act 2023:** DPDP Rules notified Nov 2025, phased to ~2027; consent + purpose limitation required. Address consent for any personal-data idea.
- **Insurance:** IRDAI-licensed. Prototype: demonstrate mechanism, not a sold policy.
- **Chit funds:** Chit Funds Act 1982. Prototype: transparency/ledger only, hold no funds.
- **STR/AML:** FIU-IND function under PMLA. Prototype: detect + recommend, don't file.

**Bottom line:** every idea here is buildable at ₹0 in 48h, tied to a cited real problem, and demonstrable without touching regulated infrastructure — provided you state the simulation boundary clearly. The winning move is narrow scope, real or rigorously synthetic data, explainability, and an honest compliance slide.

---

*Note on data caveats: figures are sourced to RBI, NPCI, PIB, World Bank Findex 2025, I4C/MHA, MFIN, NITI Aayog, and Lok Sabha/Rajya Sabha replies where cited. Free-tier limits for LLM APIs change roughly monthly (Gemini already cut its free tier in late 2025) — reconfirm on each provider's site before you depend on a specific quota. "Digital arrest" and mule-account figures come from I4C data reported via news outlets, as RBI declined RTI disclosure of MuleHunter.AI detection counts. Some published "fake loan app lists" are low-quality blog content and should be used only as demo inputs, never as ground truth — RBI's registered-entity list is the authoritative source.*