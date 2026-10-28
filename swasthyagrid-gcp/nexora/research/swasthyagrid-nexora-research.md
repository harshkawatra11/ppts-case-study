# SwasthyaGrid: Research Deliverable

**Move what a district already owns before buying more: a district health coordination start-up for India's 38,241 PHCs and CHCs**

Team: Team IdeaForge · Harsh Kawatra (Delhi Technological University)

Prepared for: NEXORA, Satyawati College, University of Delhi

---

## 0. Document control: every number carries a tag, and the prototype runs on simulated data

**Answer.** This document is the research spine behind SwasthyaGrid, the district health coordination start-up Team IdeaForge is pitching at NEXORA. Every number in it traces to one of three registers: a verified external source, a named team assumption, or an output of the stated NEXORA model, each marked with its own tag so a reader can check where a figure came from without asking us. The case-competition-deck skill supplies the argument patterns used throughout this document and the companion deck (the contrarian recommendation, action titles, the single moneyshot, foreshadowing, symmetric treatment); it carries no content on India's public health supply chain, CAG audit findings, or NHM budget mechanics, all of which come from this team's own research, recorded in the source register below. The prototype behind every product claim in this document runs on simulated data for forty facilities across five Rajasthan districts; no live district, no customer, and no interview exists yet, and this document never states otherwise.

### 0.1 Tag legend

Table 0.1 sets out what each tag means and where its register lives, so a reader can resolve any bracketed mark in this document without searching.

| Tag form | Meaning | Register it points to |
|---|---|---|
| `[S##]` | An external source, verified against the publisher's own page or document | `research/sources-base.md`, plus `research/raw/sources-R1.md` through `sources-R5.md` for sources each writer added |
| `[A##]` | A team assumption: a value the available sources do not supply directly, chosen with a stated basis | Plan section 5.4 and Appendix D of this document |
| `[M]` | A model output: a figure the NEXORA model calculated from the facts and assumptions above, not independently sourced | `model/nexora_model.py`, reference output reproduced in Appendix B |

*S: source. A: assumption. M: model.*

### 0.2 Source hierarchy

The source register below followed a fixed hierarchy whenever two sources disagreed or a figure needed cross-checking: government releases and audit reports first, then peer-reviewed research, then multilateral or donor-agency publications, then established media quoting one of the first three, with vendor pages used last and only for pricing benchmarks that are explicitly labelled as such. Table 0.2 sets this out with one example drawn from the register for each tier.

| Tier | Source type | Example used in this document |
|---|---|---|
| 1 | Government release or audit report | MoHFW's Health Dynamics of India release on facility counts and specialist shortfall [S01]; the CAG performance audit chapter on public health infrastructure management [S122] |
| 2 | Peer-reviewed research | The Puducherry essential-medicine availability study in PMC, giving the 66 to 80% range [S02]; the Human Resources for Health systematic review of community-level stock-outs across low and middle income countries [S123] |
| 3 | Multilateral or donor-agency publication | UNDP India's account of the eVIN vaccine logistics programme [S12]; Management Sciences for Health's account of Uganda's digitised medicine supply portal, built under a USAID activity [S125] |
| 4 | Established media quoting a tier 1 to 3 source | Medical Dialogues' reporting of the Telangana CAG audit figure of ₹390.26 Cr in expired drugs [S16] |
| 5 | Vendor page, used only for a labelled pricing benchmark | Codingclave's 2026 guide to Indian hospital management software pricing [S25] |

A figure that could not be confirmed against any tier is never used as a stated fact in this document; it is either dropped or reported as a named gap, consistent with the rule that an unverified number is dropped rather than softened into a vaguer claim.

### 0.3 What is fact, what is assumption, and what is model output

No figure in this document is invented. Table 0.3 gives three worked examples of each of the three tag types, so the distinction is concrete rather than definitional.

| Type | Example 1 | Example 2 | Example 3 |
|---|---|---|---|
| Fact `[S##]` | 79.9% of CHC specialist posts are unfilled, 4,413 of 21,964 [S01] | ₹390.26 Cr of drugs expired in Telangana over 2016-22 [S16] | eVIN cut vaccine stock-outs by over 80% across 733 districts [S12] |
| Assumption `[A##]` | A district licence runs ₹12 L a year, built from a ₹4 L base plus a per-facility tier [A05] | Gross margin sits at 71% in the base case, drawn from Indian SaaS benchmarks, not measured [A08] | A district licence lasts five years on average, a team estimate about government contract cycles [A10] |
| Model `[M]` | 1.36 crore stock-out days avoided a year in the base case [M] | ₹93.6 Cr total addressable market across about 780 districts [M] | 5.6 months to pay back customer acquisition cost in the base case [M] |

Appendix D reproduces the full seventeen-row assumptions register. Appendix B, generated by the assembler, reproduces the model's reference output in full so every `[M]` tag in this document can be checked against a single printed source.

### 0.4 Honesty rules this document follows throughout

Four rules hold without exception across every section that follows, and are restated here once rather than qualified on every sentence. First, the SwasthyaGrid prototype runs entirely on simulated data for forty facilities (thirty PHCs and ten CHCs) across five Rajasthan districts [S31]; no live district exists. Second, no customer interview has been conducted; the forty interviews named in Appendix E are a plan, not a result. Third, nothing described in this document or the companion deck has been deployed, piloted, or sold; SwasthyaGrid has no customers, no partners, and no signed district. Fourth, the merged deck and this document represent one founder, Harsh Kawatra, working under the team name Team IdeaForge; the two decks this project reconciles were each built by larger teams, named here only as "a two-member team" and "a three-member team" respectively, consistent with the project's standing rule never to name a team member who is not part of the NEXORA submission.

### 0.5 Model version

Every `[M]` tag in this document traces to `model/nexora_model.py`, a single deterministic Python script with no inputs and no network calls. It was run on 7 October 2026 and its full printed output is reproduced in Appendix B of this document; running the script again on the same code reproduces the same output line for line, which is itself the model's only correctness test. Any disagreement between a number quoted in this document and Appendix B is an error in this document, not in the model, and should be read as a defect to fix rather than a second valid figure.

### 0.6 Why this discipline matters more for a ten-slide pitch than for a longer deck

A ten-slide pitch has no room to show its working on the slide itself; a headline such as "1.36 crore stock-out days avoided a year" has to sit on one line of one slide with no footnote long enough to carry a derivation. The tagging discipline in this document exists precisely to carry that derivation somewhere a judge can still reach it during questions, without crowding the slide that states the finding. Every number that appears on a slide of the companion deck appears again in this document with its tag, its full derivation, and, where it is a model output, the exact line of Appendix B it comes from. A reader who wants to check one specific claim, for example the 10.65x lifetime-value-to-acquisition-cost ratio, does not need to read this entire document to find it; the tag legend in Table 0.1 and the section table in the plan's own specification point to exactly one place. This is the same discipline a due-diligence reviewer would apply to any pitch deck that claims a number: trust the number only as far as its stated source, and treat an untagged number anywhere in this project as a defect to be fixed, not a convenience to be allowed.

---

## 1. NEXORA's seven asks, each answered on one slide and in one section

**Answer.** NEXORA's brief asks for one submission that is simultaneously innovative, sustainable, and feasible, and instructs teams to showcase seven things: the problem, the solution, the target market, the innovation, the sustainability, the feasibility, and the impact. Table 1.1 below maps each of those seven asks to the slide that carries it, the section of this document that backs it, and the single strongest number behind it, so a reader can verify in one pass that nothing in the brief was left unanswered. The submission itself runs ten slides, inside the brief's stated 8 to 10 slide range including the cover.

### 1.1 The brief, verbatim

> Present an innovative, sustainable, and feasible startup or innovation idea with potential real-world impact.
> Submission Guidelines: Format: PDF only. Length: 8 to 10 slides, including cover.
> Showcase your problem, solution, target market, innovation, sustainability, feasibility and impact.

### 1.2 The coverage matrix

Table 1.1 maps each of NEXORA's seven showcase items to the slide and section that carries it, plus the single strongest number behind it, so a reader can check in one pass that nothing in the brief was left unanswered.

| Ask | Slide | Section of this document | One-line answer | Strongest number |
|---|---|---|---|---|
| Problem | S3 | 4 | Up to a third of key medicines can be missing from a PHC shelf on any day, while warehouses write off crores in stock that expired unused | 66 to 80% availability range across studies [S02][S03] |
| Solution | S4 | 8 | One morning view of every shelf, bed and roster per district, a ranked transfer proposal, and a named officer's sign-off before anything moves | 1.2 to 21.0 days of ARV cover at PHC Kota-4 after one approved, simulated shipment [S31] |
| Target market | S5 | 9 | State health departments buy for about 780 districts, a ₹93.6 Cr a year licence pool, entered through 112 aspirational districts | ₹93.6 Cr total addressable market, ₹13.44 Cr serviceable [M] |
| Innovation | S6 | 10 | Five public systems already record India's health supply and none of them moves it; SwasthyaGrid adds the missing rebalancing layer with a human sign-off | eVIN's over 80% cut in vaccine stock-outs once stock became visible [S12] |
| Sustainability | S7 | 11 | A 71% gross-margin licence business that also reduces medicine expiry and out-of-pocket spending, resting on an existing government budget line | ₹390.26 Cr and ₹168 Cr of audited expired-drug write-offs in two states [S16][S17] |
| Feasibility | S8 | 13 | A district can go live in six weeks using stock exports states already produce, with no new hardware and one officer's sign-off per district | Six weeks from a data agreement to a live district, a stated plan, not yet run [A16] |
| Impact | S9 | 14 | An estimated 1.36 crore stock-out days avoided a year in the base case, lifting availability from 72.2% to 86.1% | 1.36 crore stock-out days avoided a year, base case [M] |

Each row names a slide, the section that defends it, and the one number a judge is likeliest to repeat back, so the table doubles as a cross-check that the deck and this document stay aligned.

### 1.3 The three adjectives: where the evidence for each sits

NEXORA's own framing asks for three qualities at once, not one. Table 1.2 names the strongest evidence for each, because a pitch that is merely "sustainable" or merely "feasible" without being all three at once has not actually answered the brief.

| Adjective | What would make the claim weak | What makes SwasthyaGrid's claim specific | Supporting evidence |
|---|---|---|---|
| Innovative | Calling a dashboard innovative because it is new to the team, not because it fills a gap no existing system fills | SwasthyaGrid is the first layer that moves stock across a district rather than only recording it; five named public systems record, none moves [S01][S12][S15][S21][S35] | eVIN precedent [S12]; the independent evaluation evidence that the 112 aspirational districts already show measurable health gains under a different coordination mechanism [S120] |
| Sustainable | Claiming sustainability only in an environmental sense while ignoring whether the business itself survives without a grant | The licence model pays for itself on margin alone, and separately on the medicine it saves from expiring, so two independent paths support the same conclusion | 71% gross margin, 5.6-month CAC payback [A08][M]; ₹390.26 Cr and ₹168 Cr of CAG-audited expiry in two states [S16][S17] |
| Feasible | Assuming a government buyer will adopt new technology quickly, or assuming no new hardware means no real implementation effort | The product reads exports states already produce under an existing essential-drugs-list mechanism, so the state does not need to change what it already does, only share what it already has | The MoHFW essential drugs list that states already maintain and periodically update at HWC, PHC and SHC level [S121]; India's National Health Policy commitment to free essential drugs at public facilities [S126] |

Table 1.2 shows that each adjective fails in a specific, nameable way if argued loosely, and that SwasthyaGrid's version of each claim survives the failure mode named beside it.

### 1.4 A note on the ten-slide count

The brief sets a range of 8 to 10 slides including the cover; the merged submission runs exactly ten: a cover, eight core content slides (Executive Summary, Problem, Solution, Target Market, Innovation, Sustainability, Feasibility, Impact), and one appendix. This sits at the top of the brief's own range rather than over it, a deliberate choice: the seven showcase items in section 1.1 each earn a full, dense slide rather than being compressed two or three to a page, which the case-competition-deck skill's own guidance on compressing an 8-section argument into a short deck recommends over spreading one argument thin across more slides than the brief allows.

---

## 2. The answer on one page: move what a district owns before buying more, and avoid 1.36 crore stock-out days a year

**Answer.** India's primary-care shortage looks, on first reading, like a shortage problem: 79.9% of CHC specialist posts sit unfilled [S01][S32], and up to a third of key medicines can be missing from a PHC shelf on a given day [S02][S03]. The obvious response is to hire more specialists or buy more medicine. But the same states that report PHC medicine availability of 66 to 80% [S02] also write off expired stock worth crores: ₹390.26 Cr in Telangana over 2016-22 [S16] and ₹168 Cr in Odisha over April 2019 to January 2025 [S17]. A district already owns more than it uses; it cannot see what it owns district-wide. SwasthyaGrid gives each district one morning view of its own stock, beds and staff, proposes the nearest transfer, and lets a named officer approve it. Move first; buy for the gaps that remain. In the base case, this avoids an estimated 1.36 crore stock-out days a year and lifts key-medicine availability from 72.2% to 86.1% [M].

### 2.1 Why the obvious fixes stall

A board or a jury hearing this problem will reach first for the standard responses. Table 2.1 sets out why each one stalls, tested only against sourced facts, not supposition.

| Obvious fix | Why it stalls |
|---|---|
| Hire more specialists | 79.9% of CHC specialist posts are already unfilled (4,413 of 21,964) [S01]; the per-specialty gaps run from 74.2% for obstetrics and gynaecology to 83.2% for surgeons [S32]. A shortage this wide does not close on a hiring cycle measured in months |
| Buy more medicine | States already write off audited crores in expired stock: ₹390.26 Cr in Telangana [S16], ₹168 Cr in Odisha [S17], including ₹17.13 Cr of Telangana drugs issued with only 1 to 89 days of shelf life left [S16]. Buying more feeds the same waste rather than fixing its cause |
| Build one national supply database | Health is a State subject under the Seventh Schedule, List II, Entry 6 [S13]; a single national database for a function the Constitution assigns to states invites exactly the kind of resistance that has slowed similar national platforms, and duplicates systems states already run, such as the essential drugs list each state maintains at HWC, PHC and SHC level [S121] |
| Add another dashboard | Five public systems already record some part of India's health supply, from HMIS facility data to e-Aushadhi's drug ledger [S01][S15]; officers already have numbers to look at. What is missing is not another screen to read, it is a mechanism that proposes a specific move and records who approved it |

Table 2.1 shows all four obvious fixes stall for a different, specific reason, none of which is "the idea is wrong," which is why the recommendation below is a fifth option rather than a harder push on one of these four.

### 2.2 The three moves

SwasthyaGrid's mechanism reduces to three verbs, repeated identically for every item on every shelf: see, propose, approve. Table 2.2 states what each move does and why it is deliberately the smallest version of itself.

| Move | What happens | Why it stays this small |
|---|---|---|
| See | The district view surfaces days of cover for every item across every facility each morning, flagging anything under 3 days (5 days for emergency drugs) [S31] | A warning rule needs no judgement call; it is arithmetic (units divided by average daily use), which is why it can run on data states already export |
| Propose | The system ranks the nearest facility with surplus and sizes a transfer, or a refill to 21 days of cover, within 40 km for critical items [S31] | A ranked proposal, not an instruction, keeps the officer in control of the final call and avoids any claim that software is making a clinical or administrative decision |
| Approve | A named district officer approves, edits, or rejects every proposal before anything moves; the receiving facility confirms delivery before stock updates once [S31] | A human sign-off on every move is the guardrail that makes the system auditable and keeps patient-level data and clinical judgement outside its scope entirely [S14] |

Each move is deliberately smaller than it could be, and Table 2.2's right-hand column names the specific reason for that restraint rather than leaving it implied.

### 2.3 The moneyshot

The single number this document and the companion deck are built around is 1.36 crore: the estimated stock-out days avoided a year across India's 38,241 PHCs and CHCs [S01] in the base case, where the system removes half of all stock-out days [A02][M]. The model's own range runs from 81.5 lakh in the bear case (a 30% cut) to 2.17 crore in the bull case (an 80% cut, matching eVIN's own reported result for vaccines) [S12][M], and the base case lifts average availability from 72.2% to 86.1% [S02][M]. This is a transparent estimate from a stated model, never a measured result; the hedge is repeated here because the honesty rules in section 0.4 forbid softening it anywhere else in this document.

### 2.4 The argument in pyramid form, and the three reasons each side

Stating a recommendation first, then supporting it with grouped reasons, lets a reader test the argument instead of following it passively. Table 2.3a sets out three reasons against the obvious fixes and three reasons for the recommended mechanism, each one specific and numbered rather than general.

| Side | Quantitative reason | Strategic-fit reason | Feasibility reason |
|---|---|---|---|
| Against hiring or buying more alone | 79.9% of CHC specialist posts are already unfilled, so hiring does not move quickly [S01] | Buying more medicine feeds the same expiry loss already audited at ₹390.26 Cr and ₹168 Cr in two states [S16][S17] | A national supply database duplicates systems states already run and collides with health being a State subject [S13] |
| For moving what a district already owns | Up to a third of key medicines can be missing from a shelf on a given day even while a warehouse elsewhere holds surplus of the same item [S02][S03] | eVIN already proved that visibility cuts stock-outs by over 80% for one supply chain [S12]; this extends the same logic to another | The mechanism reads exports states already produce under an existing essential drugs list [S15][S121], so no new state process is required |

This is the same pyramid-principle discipline the case-competition-deck skill recommends for any contrarian recommendation: state the governing thought, the conclusion in section 2's opening paragraph, before the supporting reasons, and group the reasons so a reader can ask "why" of the top line and find the answer directly beneath it, rather than wading through evidence in the order it happened to be gathered.

### 2.5 What would change our mind

Table 2.3 names five conditions that would move this team off the recommendation, each with a reason the condition matters, so the argument can be tested rather than only asserted.

| Condition | Why it would change the recommendation |
|---|---|
| The availability studies used turn out to be unrepresentative of most Indian districts | The 72.2% baseline [S02] and the 30 to 80% cut range [A02] both rest on a small set of published facility-level studies [S02][S03][S04]; if a larger, more representative survey showed materially different baseline availability, the moneyshot in section 2.3 would need to be recalculated, not merely restated |
| States decline to share stock-export data | The entire mechanism in section 2.2 depends on reading exports states already produce [S15]; without a signed data agreement, there is no district view to build, which is why feasibility (section 13) treats this as the single largest schedule risk |
| Officers ignore proposals even during a shadow-mode trial | If district officers do not act on ranked proposals once they see them, the "propose" and "approve" steps in Table 2.2 produce no real transfers, and the entire effect in section 2.3 collapses to zero regardless of how good the underlying data is |
| A second country's digitised stock system shows a materially different result from eVIN's | eVIN's over 80% cut in vaccine stock-outs [S12] is the strongest precedent behind the bull case; Uganda's comparable digitised medicine portal independently reports about 80% average availability across 41 tracked medicines for roughly 46 million people [S125], which supports rather than undercuts the eVIN-based assumption, but a contrary finding from a comparable system would require the bull case to be revisited |
| The expiry-to-stock-out link proves weaker than assumed | Section 6 treats the CAG expiry findings [S16][S17] and the availability studies [S02][S03] as two independent evidence sets pointing at the same underlying problem, not as a single measured chain; if a future audit showed expiring stock and stocked-out items never overlap in practice, the contrarian thesis in this section would need a different evidence base |

None of the five conditions in Table 2.3 is hypothetical window-dressing; each names a specific test the recommendation has not yet passed and could still fail.

### 2.5a Third-party validation for the precedent this argument leans on

The contrarian thesis in this section leans heavily on one precedent: that visibility, not volume, was the fix that worked for India's vaccine supply chain. That precedent should not rest on this team's own reading of a single programme page. Table 2.3b sets out what independent sources say about the same precedent and a close international comparator, so the eVIN-based assumption in section 2.3 and Appendix D's A02 is not the only evidence behind the bull case.

| Source | What it independently confirms |
|---|---|
| UNDP India, describing eVIN's own results | Vaccine availability held above 99% at cold chain points once the system covered all 733 districts and 36 states and union territories, with over 80% fewer stock-out instances reported [S12] |
| A peer-reviewed study of eVIN's effect inside Pune city's immunisation sessions | Vaccine wastage fell across multiple vaccine types after eVIN implementation, a facility-level confirmation that sits below the national headline figure and is consistent in direction with it [S33] |
| Management Sciences for Health, describing a comparable digitised medicine portal in Uganda | Over 760 facilities synced to one national stock system hold about 80% average availability across a tracked basket of 41 essential medicines, serving roughly 46 million people, a result that did not require India's specific institutions to produce it [S125] |

Two independent country programmes and one facility-level academic study, each built on a different supply chain, a different set of commodities, and a different implementing organisation, point at the same conclusion: making stock visible across a network and acting on what becomes visible measurably raises availability. That convergence is the strongest evidence available that the bull-case assumption in Appendix D (an 80% cut in stock-out days, matching eVIN exactly) is not an isolated result unlikely to repeat for a different supply chain inside the same country. None of these three sources measured SwasthyaGrid itself, and none can be read as proof that the same cut will repeat for the seven tracer medicines this model covers; they are evidence that the mechanism this document proposes, visibility followed by a human-approved move, has produced a measurable effect more than once, in more than one country, for more than one class of commodity, which is a materially stronger basis than a single domestic precedent would be on its own.

### 2.6 The eight headline numbers

Table 2.4 collects the eight numbers this document returns to most often, each with its tag and the section where it is derived in full, so a reader can find the underlying arithmetic without re-reading the whole document.

| Number | What it means | Tag | Derived in full at |
|---|---|---|---|
| 38,241 | PHCs (31,882) plus CHCs (6,359) nationwide, as of 31 March 2023 | [S01] | Section 4 |
| 79.9% | Share of CHC specialist posts unfilled nationwide | [S01] | Section 4 |
| 1.36 crore | Stock-out days avoided a year, base case | [M] | Section 2.3, section 14 |
| 72.2% to 86.1% | Availability before and after the base-case cut in stock-out days | [S02][M] | Section 14 |
| ₹390.26 Cr / ₹168 Cr | Expired drugs written off, Telangana 2016-22 and Odisha Apr 2019 to Jan 2025 | [S16][S17] | Section 6 |
| ₹93.6 Cr | Total addressable market: about 780 districts at a ₹12 L a year licence | [M] | Section 9 |
| ₹12 L | Annual district licence: ₹4 L base, 50 facilities at ₹14,000 each, ₹1 L support | [A05][M] | Section 9, section 12 |
| 10.65x | Lifetime value to customer acquisition cost ratio, base case | [A08][A09][M] | Section 11 |

A reader who commits only these eight numbers to memory, and the section each one traces to, can reconstruct the deck's entire quantitative spine without opening a second document.

---

## 3. How two decks became one: 14 changes, including a 10x correction to the market size

**Answer.** SwasthyaGrid was pitched twice before this submission: a 12-slide hackathon deck (deck A) built by a two-member team for a Google "Build with AI" competition in September 2026, and a 9-slide startup pitch (deck B) built by a three-member team around the same product. Merging them into one NEXORA submission required 14 deliberate changes, the single largest being a 10x arithmetic correction to the headline market size, from a stated ₹960 Cr to a corrected ₹93.6 Cr. Every other change either removed a claim with no traceable source, dropped content NEXORA's brief does not ask for (an investment ask, cloud and AI-engineering detail), or added content neither deck carried (a sustainability case, for example). The result is a smaller market claim than either original deck stated, and, read correctly, a stronger one: ₹93.6 Cr that can be defended line by line beats ₹960 Cr that cannot.

### 3.1 What deck A argued

Deck A ran twelve slides for a hackathon audience judging a working build, not a startup pitch; Table 3.1 inventories its content at the level this project's own planning records it, since the original Figma file is a separate artefact from this document.

| Content block | What it argued | Kept, cut, or fixed |
|---|---|---|
| Problem evidence (availability studies, emergency drugs, five whys, out-of-pocket spending) | Builds the case that supply visibility, not supply volume alone, is the gap | Kept, and extended with further sourced evidence in section 4 |
| The eVIN precedent | A national system already proved that visibility cuts stock-outs, for vaccines | Kept, and used as the central innovation precedent in section 10 |
| The closed loop (see, propose, approve, confirm) | Describes the product mechanism end to end | Kept, and restated as the three-move table in section 2.2 |
| The PHC Kota-4 proof (1.2 to 21.0 days of ARV cover) | Shows the mechanism working once, on simulated data | Kept, and labelled explicitly as simulated throughout |
| The six-week rollout plan | Shows a path from agreement to a live district | Kept, and detailed week by week in section 13 |
| The risk map | Names implementation risks with mitigations | Kept, and expanded to a full probability and impact register in section 13 |
| The validation plan (40 planned interviews) | States what primary research would look like, honestly labelled as not yet done | Kept, and detailed role by role in Appendix E |
| The impact model and its moneyshot | Estimates stock-out days avoided a year | Kept unchanged; the model code is identical to the one this document cites throughout |
| Google stack, AI engine, test counts, latency figures, voice interface | Demonstrates the technical build for a hackathon judge | Cut entirely; NEXORA's brief asks for a startup pitch, not an engineering demonstration, and the project's own standing rule keeps technology vocabulary off every slide |

Eight of nine blocks survive the merge in some form; only the engineering content built for a different audience was cut outright, which is the clearest sign the two decks shared one underlying product rather than two different ones.

### 3.2 What deck B argued

Deck B ran nine slides structured as a classic startup pitch; Table 3.2 inventories it at the same level of granularity.

| Content block | What it argued | Kept, cut, or fixed |
|---|---|---|
| Problem | A short-form version of the same supply-visibility gap | Kept, folded into the single problem slide and section 4 |
| Market (TAM ₹960 Cr, SAM ₹480 Cr) | Sizes the licence opportunity top-down from a district count and a licence price | Fixed: both figures carried a 10x arithmetic slip, corrected in section 3.3 below |
| Solution | The same product mechanism as deck A, described for a commercial rather than technical audience | Kept, merged with deck A's version |
| Model (revenue path, unit economics) | States a bear, base, and bull revenue path and an approximate 10x lifetime-value-to-CAC ratio | Fixed: the original path mixed annual recurring revenue with one-time billings; the NEXORA model separates the two and reproduces deck B's original Year 1 and Year 2 billings figures exactly |
| Moat (a 25/45/70/100% curve) | Claims a widening moat over time | Cut: the curve carried no stated basis; replaced with a 7 Powers framework analysis in section 10 |
| GTM | A go-to-market sequence from pilot to scale | Kept, restated as the three-horizon roadmap in section 15 |
| Before/after table | Contrasts today's process with SwasthyaGrid's process | Kept, used inside the solution section |
| Investment ask (₹4.0 Cr for 24 months) | Asks for funding | Cut: NEXORA's brief is a startup pitch, not a funding round, and the team decided this submission carries no investment ask |
| Appendix | Backs the pitch's numbers | Rebuilt entirely as the research document this file is part of |

The one block that could not be kept or merely fixed, the market slide, is also the block the next section works through in full, because a tenfold arithmetic error is not a wording problem.

### 3.3 The market-size correction, worked in full

Deck B's stated total addressable market was ₹960 Cr a year, built from "800+ districts" at a ₹12 L a year licence. The arithmetic itself was wrong before any district count is questioned: 800 districts multiplied by ₹12 lakh a district gives 9,600 lakh, which is ₹96 Cr, not ₹960 Cr; the original figure carried a 10x error [M]. Deck B's serviceable addressable market of ₹480 Cr, built from "approximately 400 NHM digital-priority districts," carried the same 10x slip and additionally rested on a 400-district figure with no traceable source anywhere in either original deck.

Correcting both the arithmetic and the district count gives the figures this document uses throughout. India's Local Government Directory, the Ministry of Panchayati Raj's own district register, shows about 780 districts as of the date this project verified it [S23]; 780 districts at a ₹12 L a year licence gives a total addressable market of ₹93.6 Cr a year [M], not ₹96 Cr or ₹960 Cr. The serviceable addressable market uses NITI Aayog's list of 112 aspirational districts [S19], a defined, named, and sourced list, rather than an unsourced "400 priority districts" category: 112 districts at ₹12 L gives ₹13.44 Cr a year [M]. Section 9 carries the full bottom-up build, including the beachhead figure for Rajasthan's 41 districts [S24] and the Year 3 serviceable obtainable market of 80 districts.

### 3.4 Why the smaller, correct number is the stronger pitch

A market sized at ₹93.6 Cr looks, on first reading, less impressive than one sized at ₹960 Cr. It is nonetheless the stronger claim to make in front of a jury that includes anyone willing to multiply two numbers together. A ₹960 Cr figure invites exactly one question a presenter cannot answer well: "how did you get that number." A ₹93.6 Cr figure invites the same question and survives it, because the answer is a single sentence: about 780 districts, at a ₹12 L a year licence, from a named government directory [S23]. The same logic applies to the serviceable addressable market: ₹13.44 Cr from a named, official list of 112 districts [S19] survives scrutiny in a way that ₹480 Cr from an undefined "400 priority districts" category cannot. A smaller number that holds up under a single follow-up question beats a larger number that does not, which is the entire argument for keeping the market slide at ₹93.6 Cr rather than restoring either original figure.

### 3.5 Claims removed, and why

Table 3.3 lists every claim present in deck A or deck B that does not appear anywhere in this document or the merged deck, with the reason each was removed.

| Removed claim | Original deck | Reason removed |
|---|---|---|
| "8,776 new doctors," a "20x" figure, and "45% in 2005" | Deck A | No traceable source found for any of the three figures during this project's verification pass |
| "3+ days before a stock-out is noticed" | Deck B, used as "illustrative" | Deck A itself had already excluded this figure as unsourced; deck B's reintroduction of it as "illustrative" does not meet this project's sourcing bar |
| The 25/45/70/100% moat curve | Deck B | No stated basis for the specific percentages or the timeline; replaced with the sourced 7 Powers analysis in section 10 |
| The ₹4.0 Cr, 24-month investment ask | Deck B | NEXORA's brief asks for a startup pitch, not a funding round; this submission makes no investment ask |
| Google stack, AI engine, test counts, latency figures, voice interface | Deck A | Out of scope for a startup introduction pitch with technology deliberately kept out of the slides; the underlying prototype still exists, described without vendor or engineering vocabulary in section 8 |

Every removal in Table 3.3 traces to one of two causes, no traceable source or the wrong brief, never a judgement that the underlying claim was uninteresting.

### 3.6 The revenue path correction, worked in full

Deck B's original revenue path stated Year 1 revenue of ₹1.8 Cr, Year 2 revenue of ₹6.4 Cr, and Year 3 revenue of ₹9.6 Cr. Read as a single line, this looks like one consistent measure of revenue growing across three years. It is not: the Year 1 figure of ₹1.8 Cr is what this document calls billings, the combination of recurring licence revenue and one-time onboarding fees, while the Year 3 figure of ₹9.6 Cr is pure annual recurring revenue, with no onboarding component left in it because, by Year 3, few new districts are being onboarded relative to the total licensed. Mixing the two measures inside one row makes the growth curve look smoother than it is and, more importantly, overstates how much of Year 1's revenue repeats in Year 2 without any new sales effort.

The NEXORA model separates the two measures explicitly and reproduces deck B's own Year 1 and Year 2 billings figures exactly, which is the strongest evidence that the correction is a bookkeeping fix, not a change to the underlying growth assumption. Table 3.5 shows the separation for the base case.

| Measure | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Districts licensed, year end (base case) | 12 | 45 | 80 |
| Annual recurring revenue, ₹ Cr [M] | 1.44 | 5.40 | 9.60 |
| One-time onboarding revenue, ₹ Cr [M] | 0.36 | 0.99 | 1.05 |
| Billings, ₹ Cr (annual recurring revenue plus onboarding) [M] | 1.80 | 6.39 | 10.65 |
| Recurring share of billings [M] | 80.0% | 84.5% | 90.1% |

Deck B's stated Year 1 billings of ₹1.8 Cr and Year 2 billings of ₹6.4 Cr both match Table 3.5's billings row to within rounding, confirming the original district-count growth path was kept unchanged; only the mixing of annual recurring revenue with one-time billings inside a single "revenue" line was corrected [M]. A board or a jury reading only the Year 3 figure of ₹9.6 Cr in the original deck would have reasonably assumed that figure, too, was annual recurring revenue; Table 3.5 shows the Year 3 billings figure is actually ₹10.65 Cr once onboarding is added back, and the ₹9.6 Cr the original deck used for that year happened to equal annual recurring revenue by coincidence of the growth path, not by a consistent definition applied across all three years.

### 3.7 What the merge process itself tested for

Reconciling two decks built by two different teams for two different audiences is not simply a matter of picking the better slide each time one exists in both. Four tests were applied to every claim that appeared in either original deck before it was allowed into this merged submission or this document. First, does the claim trace to a source either original deck can produce, or that this project's own verification pass located independently; if not, the claim was dropped, never softened into a hedge. Second, does the claim belong inside NEXORA's own brief, which asks for a startup pitch rather than an engineering demonstration or a funding round; content that answered a different brief, however well it was built, was cut regardless of its quality. Third, where two claims from the two decks addressed the same point differently, which one holds up under the single most obvious follow-up question a jury would ask; section 3.4 above works through this test for the market-size figure specifically, and the same test eliminated the unsupported moat curve in favour of the sourced 7 Powers analysis in section 10. Fourth, does the merged version remain honest about what is prototype, what is planned, and what has not been done; every content block in Table 3.1 and Table 3.2 that survived into this submission was re-checked against the honesty rules in section 0.4 regardless of how either original deck had phrased it.

This four-test process is also why the merged submission is not simply deck A's problem evidence stapled to deck B's business sections. Several of the strongest arguments in this document exist in neither original deck: the sustainability section (section 11) was built new because NEXORA's brief explicitly asks for sustainability as a named showcase item and neither original deck, built for a hackathon judge or an investor respectively, had reason to address it. The cover's mind map with named public-body logo slots (section 1) likewise answers a presentation convention neither original audience required. Treating the merge as an argument-engineering exercise rather than a copy-and-paste exercise is what let this team catch the tenfold market-size error in the first place; a team that had simply combined the two decks' market slides without re-deriving the arithmetic from the stated inputs would have carried the ₹960 Cr error straight through into a NEXORA submission, and would likely have been asked the one follow-up question in section 3.4 that the corrected figure, unlike the original, can actually survive.

### 3.8 Mapping the merged slides to their source decks

Table 3.4 shows which slide in the ten-slide merged submission draws primarily on which original deck, and which section of this document backs it, so the lineage of every slide is traceable.

| Merged slide | Primary source | Backing section |
|---|---|---|
| S1 Cover | New: neither deck had a mind-map cover with named public-body logo slots | Section 1 |
| S2 Executive Summary | New synthesis of both decks' problem framing, written as the contrarian thesis | Section 2 |
| S3 Problem | Deck A's problem evidence, extended with the CAG paradox from deck B's appendix and new research | Section 4, section 6 |
| S4 Solution | Deck A's closed loop and PHC Kota-4 proof, deck B's before/after table | Section 8 |
| S5 Target Market | Deck B's market slide, with the 10x arithmetic correction and the district count fixed | Section 9 |
| S6 Innovation | Deck A's eVIN precedent, deck B's moat section rebuilt as a 7 Powers and ERRC analysis | Section 10 |
| S7 Sustainability | New: neither deck had a dedicated sustainability section | Section 11 |
| S8 Feasibility | Deck A's six-week rollout and risk map, deck B's GTM sequence | Section 13 |
| S9 Impact | Deck A's impact model and moneyshot, unchanged | Section 14 |
| S10 Appendix | Rebuilt entirely as this research document | All sections |

Three of the ten slides, the cover, the executive summary and sustainability, carry no direct ancestor in either original deck, which is the clearest evidence that this submission is an argument built for NEXORA's own brief rather than a relabelled copy of either prior pitch.


## 4. The problem in numbers: up to 1 in 3 key medicines missing across 38,241 PHCs and CHCs

**Answer.** India's primary care network runs on 38,241 public health centres, 31,882 PHCs (primary health centres) and 6,359 CHCs (community health centres) [S01], sitting under 1,69,615 sub-centres and above 1,340 sub-divisional hospitals and 714 district hospitals [S01]. Independent facility surveys put key-medicine availability at these centres anywhere from 66% to 80% [S02][S03], which means on an average day a district health officer cannot say with confidence that any single tracer medicine, from an antivenom vial to an oxytocin ampoule, is sitting where it is needed. The gap is not a rounding error: 79.9% of sanctioned specialist posts at CHCs sit empty [S01][S32], out-of-pocket spending still covers 43.4% of total health expenditure [S10], and pharmacy purchases now account for 21.19% of current health expenditure nationally [S43], up from 19.35% the year before, meaning Indian households are spending more at the chemist, not less, even as the public network expands on paper.

### 4.1 The facility pyramid: where the shortage is actually measured

A reader has to see the shape of the network before a stock-out number means anything. Table 4.1 sets out every tier the Ministry of Health and Family Welfare (MoHFW) counts as of 31 March 2023 [S01], from the sub-centre closest to a village up to the district hospital.

| Facility tier | Count [S01] | What it is meant to stock |
|---|---|---|
| Sub-centres | 1,69,615 | First-contact point, auxiliary nurse midwife, a short list of basic drugs |
| Primary health centres (PHCs) | 31,882 | Outpatient care, institutional delivery, the main tracer-medicine shelf this document follows |
| Community health centres (CHCs) | 6,359 | First referral unit, specialist posts, emergency obstetric and surgical care |
| Sub-divisional hospitals | 1,340 | Secondary care, wider surgical and diagnostic capacity |
| District hospitals | 714 | Apex of the public district network, full specialist complement on paper |

*PHC: primary health centre. CHC: community health centre. Table 4.1 shows the count of each tier; the discussion below works mainly at the PHC and CHC level, which is where SwasthyaGrid's prototype operates and where the availability studies in section 4.2 were conducted.*

The deck's own headline figure of 38,241 facilities [S01] is PHCs plus CHCs, the two tiers a district health officer can plausibly visit in a working week and the two tiers this document treats as "the shelf" throughout. Sub-centres are excluded from that figure because most carry only a handful of items and are not separately audited in the availability studies this section draws on; district and sub-divisional hospitals are excluded because they are far fewer in number and tend to hold deeper buffer stock, so they are not where a stock-out first bites.

### 4.2 Availability evidence, triangulated across three independent studies

No single study claims to measure every PHC in India, so the honest way to state the problem is to show several independent facility-level studies side by side and let the range itself be the finding. Table 4.2 does this for three peer-reviewed surveys plus one systematic review, each conducted in a different state, each using its own tracer-medicine list.

| Study | Place and sample | Key-medicine availability finding | Tag |
|---|---|---|---|
| Puducherry facility survey | A South Indian union territory, state PHCs and central PHCs sampled | State PHC mean 72.2%, range 66% to 80%; central PHC mean 77%, range 76% to 78% | [S02] |
| Gadag Taluk survey | Gadag district, Karnataka, PHC-level sample | 74.2% availability of essential medicines | [S03] |
| Systematic review of availability drivers | National review of Indian essential-medicine availability literature | Haryana sub-sample: 60% of essential medicines experienced stock-outs lasting 3 to 6 months | [S04] |
| Two-state facility survey | 80 public facilities across 12 districts in Punjab and Haryana, including PHCs, CHCs, district hospitals and one medical college | Overall availability 45.2% in Punjab and 51.1% in Haryana; among unavailable medicines, about 40% in Punjab and 60% in Haryana were out of stock for 3 to 6 months, and 19% and 8% respectively for more than 6 months | [S44] |

*PHC: primary health centre. CHC: community health centre. Table 4.2 is organised by study, not by state, because the four rows use different tracer lists and cannot be averaged into a single national number; the range they jointly describe, roughly 45% to 80% depending on the state, the facility tier and the specific medicine list, is the honest summary.*

Two things follow from Table 4.2 that the deck's single "66 to 80%" range does not show on its own. First, the range widens considerably once a state outside the two studies behind the deck's headline number is added: Punjab's 45.2% overall availability [S44] is well below the 66% floor the deck quotes from the Puducherry and Gadag studies [S02][S03]. Second, stock-out duration, not just stock-out frequency, is itself a finding worth separating out. A medicine missing for three days is a different problem from a medicine missing for six months; section 4.4 returns to this with the Punjab and Haryana duration figures in full.

### 4.3 Emergency and tracer medicines: four conditions where a missing drug has an outsized cost

Some medicines matter more than others because the condition they treat kills quickly if untreated. Table 4.3 lists four tracer conditions the deck and this document return to, each with its own burden figure and its own stock-visibility problem.

| Condition | Burden | Tracer medicine | Stock-visibility problem | Tag |
|---|---|---|---|---|
| Snakebite | About 58,000 deaths a year nationally, 70% concentrated in eight states (Bihar, Jharkhand, Madhya Pradesh, Odisha, Uttar Pradesh, Andhra Pradesh and Telangana, Rajasthan, Gujarat) | Anti-snake venom (ASV) | A facility that rarely sees a case keeps a thin ASV buffer, and the buffer runs out exactly when a cluster of bites arrives in one week | [S06] |
| Rabies | WHO's current published estimate is 5,726 human deaths a year in India; the Ministry's older 2004-era estimate of 18,000 to 20,000 deaths a year is still cited in some historical material, including as an illustrative figure on an earlier internal slide, but WHO's own page describes that older number as "a substantial decline from" two decades ago, meaning it should not be read as today's burden | Anti-rabies vaccine (ARV) | Post-exposure prophylaxis has to start within days; a facility with no ARV on the shelf sends a bite victim elsewhere, losing time that matters | [S07] |
| Maternal mortality | Maternal mortality ratio of 93 per 1,00,000 live births, down from 97 in 2018-20 and 103 in 2017-19 | Oxytocin | Oxytocin is heat-sensitive and short-dated; a facility's cold-chain gap or an expired batch removes it from the shelf without anyone noticing until a delivery is already in progress | [S08] |
| Dengue | Outbreak signal detectable 4 to 6 weeks before the case-count peak, across five state trajectories studied | Fluids, antipyretics, platelet-monitoring supplies | A seasonal spike concentrates demand in a narrow window that a static annual stocking plan does not anticipate | [S09] |

*ASV: anti-snake venom. ARV: anti-rabies vaccine. WHO: World Health Organization. Table 4.3 shows four conditions where a stock-out has an outsized downstream cost; the rabies row is written at length because an earlier estimate for this figure is no longer current, and this document uses only the figure WHO currently publishes.*

The rabies row deserves its own sentence because getting this number right matters more than most. WHO's India country page states the current estimate directly and frames the older, larger figure as history, not as today's burden [S07]. This document therefore reports 5,726 deaths a year as the current figure and treats 18,000 to 20,000 as a superseded, pre-2010s estimate, useful only if a reader needs the historical trend line, never as today's number.

### 4.4 Stock-out duration, not just stock-out frequency

A medicine recorded as "available" on the day of a survey can still have been missing for months earlier in the year, and a medicine recorded as "unavailable" on survey day might return to the shelf the next morning. Table 4.4 reports the duration breakdown the Punjab and Haryana two-state survey captured, which the single-day availability percentages in Table 4.2 cannot show on their own.

| State | Share of unavailable medicines out of stock 3 to 6 months | Share out of stock more than 6 months | Tag |
|---|---|---|---|
| Punjab | About 40% | 19% | [S44] |
| Haryana | About 60% | 8% | [S44] |

*Table 4.4 reads only the medicines that were unavailable on the day of the survey; it does not say what share of all medicines fell into this bucket, only how long the unavailable ones had already been missing. A national systematic review separately finds a Haryana sub-sample result in the same range, 60% of essential medicines stocked out for 3 to 6 months [S04], which cross-checks the state-level figure in this table.*

Duration matters for the argument this document makes in section 5 and section 6: a medicine missing for one week is consistent with normal reorder lag; a medicine missing for more than six months, which Table 4.4 shows is not rare, is consistent with nobody having looked at that shelf in the interim. The two numbers together describe a supply chain that reacts slowly when it reacts at all, which is a visibility problem as much as a procurement problem, the distinction section 5's root-cause analysis works through in detail.

### 4.5 The specialist shortfall: 79.9% of CHC posts sit empty

A medicine on the shelf still needs a clinician to prescribe it. Table 4.5 sets out the specialist shortfall at CHCs by named specialty, cross-checked across two independent sources that report the same underlying Health Dynamics of India (HDI) 2022-23 figures.

| Specialty | Shortfall | Tag |
|---|---|---|
| Overall CHC specialist posts | 79.9% unfilled (4,413 of 21,964 sanctioned posts in place, a shortfall of 17,551) | [S01] |
| Surgeons | 83.2% | [S32][S01] |
| Paediatricians | 81.6% | [S32][S01] |
| Physicians | 79.1% | [S32][S01] |
| Obstetricians and gynaecologists | 74.2% | [S32][S01] |

*CHC: community health centre. HDI: Health Dynamics of India. Table 4.5's overall figure and per-specialty breakdown both trace to the same HDI 2022-23 release [S01], independently reported by ThePrint with the identical per-specialty percentages [S32], which is the cross-check a reader should expect before trusting a single-source statistic this large.*

This is the shortfall the deck's contrarian thesis leans on directly. A plan that proposes to close the gap mainly by hiring more specialists is proposing to fill 17,551 posts that, on the state's own count, it has already tried and failed to fill. The gap between sanctioned and filled posts has existed long enough to be reported in consecutive HDI releases, which is itself evidence that the constraint is structural (training pipeline, rural posting incentives, urban-rural pay parity) rather than a one-year lapse that a bigger recruitment drive clears quickly.

### 4.6 Out-of-pocket spending and where the money actually goes

If a public shelf is empty, the patient's money does not disappear, it moves to a private chemist. Table 4.6 sets out the national out-of-pocket (OOPE) share and the share specifically spent on pharmacies, both from the government's own National Health Accounts (NHA) series.

| Measure | 2021-22 | 2022-23 | Tag |
|---|---|---|---|
| Out-of-pocket expenditure, share of total health expenditure | Not separately re-derived here | 43.4%, down from 64.2% in 2013-14 | [S10] |
| Pharmacy spending, share of current health expenditure | 19.35% | 21.19% | [S43] |
| Total pharmacy spending, 2022-23 | not separately re-derived here | About ₹1.63 lakh crore (₹1.35 lakh crore on prescribed medicines, ₹26,670 crore on over-the-counter drugs) | [S43] |

*NHA: National Health Accounts. OOPE: out-of-pocket expenditure. Table 4.6 shows two different percentages that are easy to conflate: 43.4% is out-of-pocket spending as a share of all health spending [S10]; 21.19% is pharmacy spending specifically as a share of current health expenditure [S43]. An earlier internal estimate of "pharmaceuticals 30.84% of current health expenditure" could not be traced to any NHA release and is not used anywhere in this document; the figure actually reported for 2022-23 is 21.19%, rising from 19.35% the year before [S43].*

The direction of travel in Table 4.6 matters as much as the level. Pharmacy's share of current health expenditure rose by 1.84 percentage points in a single year [S43], which is consistent with household medicine purchases growing even as the public system's facility count holds steady, rather than public-facility availability catching up with demand. Section 4.7 adds the facility-level mechanism behind this national number: patients forwarded to a private chemist because the public shelf did not have what they needed.

### 4.7 Who buys privately, and whether stock level is the only reason

A facility-level study from Odisha gives the clearest picture of how an empty public shelf turns into a private purchase, and it contains a finding the deck does not currently carry: stock level is not the only driver. Table 4.7 reports its headline numbers.

| Finding | Figure | Tag |
|---|---|---|
| Public patients prescribed a drug who purchased it privately instead | More than 70% | [S45] |
| Private purchase rate when facility stock exceeded 75% | Still 60% or more, in hospitals | [S45] |
| Effect of a 10 percentage point rise in hospital drug stock | 4.8 percentage point fall in private purchase, in hospitals; little effect at primary facilities | [S45] |

*Table 4.7 draws on a single-state (Odisha) study; the 70%-plus private-purchase rate should be read as evidence that the problem is real and large, not as a national percentage. The finding that primary facilities (PHCs and sub-centres) show little change in private-purchase rate as stock improves is itself informative: it suggests that at the primary-care tier, patients default to the private chemist out of habit or distrust in availability, not only because of the stock level on the day they visit.*

This matters for how SwasthyaGrid's claims should be framed. Raising availability from 72.2% to 86.1% [M] (the model's base-case projection, detailed in section 14) will reduce stock-outs; it will not automatically convert every one of those avoided stock-out days into a patient who no longer visits a private chemist, because Table 4.7's Odisha evidence shows that habit and trust, not only stock, drive the private-purchase decision at the primary-care tier. This document states that limit plainly rather than implying a one-for-one conversion the evidence does not support.

### 4.8 Who bears the cost today

Table 4.8 closes this section by naming, for each actor in the system, what the current gap between recorded stock and actual shelf availability costs them specifically.

| Actor | What the gap costs them |
|---|---|
| Patient | Travels further or pays a private chemist (more than 70% of prescribed drugs in the Odisha study [S45]); for an emergency medicine such as ASV or ARV, the cost can be the delay itself, not only money |
| Pharmacist or medical officer at the facility | Discovers a shortage only when a patient is in front of them, with no earlier warning from a district-wide view |
| District health officer (DHO) | Has no single number for "how many of my 49 facilities are short of a given item today" and finds out about surplus or shortage mostly by phone call, after the fact |
| State medical supplies corporation | Procures to a state-wide average, which is the wrong level of granularity to catch a shortage concentrated in one block while a neighbouring block holds surplus |
| Taxpayer | Funds procurement that, as section 6 shows with the Telangana and Odisha CAG findings, can expire unused in the same period that PHCs in the same state report medicines missing |

*ASV: anti-snake venom. ARV: anti-rabies vaccine. DHO: district health officer. CAG: Comptroller and Auditor General. Table 4.8's last row is the paradox this document returns to in full in section 6: the same systems that under-supply a PHC shelf can simultaneously over-supply a warehouse.*

### 4.9 Reading the four studies as a single, honest range, not a single number

Section 4.2 presented four independent studies rather than collapsing them into one national percentage, and it is worth stating directly why that choice matters for anyone judging this document's rigour. A national survey covering every PHC in India does not exist in the public literature this document could locate; the four studies in Table 4.2 cover Puducherry, Gadag Taluk in Karnataka, a Haryana sub-sample inside a national systematic review, and a twelve-district survey spanning Punjab and Haryana together. Each uses its own tracer-medicine list, which means a medicine judged "essential" and tracked in the Puducherry study may not be the same medicine tracked in the Punjab and Haryana survey. Averaging four numbers measured on four different yardsticks would produce a precise-looking figure with no real meaning behind it. The honest summary is the range itself, roughly 45% to 80% depending on the state, the facility tier surveyed and the specific medicine list used, and this document reports that range rather than a single blended percentage anywhere a reader might mistake for a national statistic.

This also explains why the deck's own headline, "66 to 80%," draws only on the two studies closest in design to each other (Puducherry and Gadag Taluk, both single-state PHC surveys with broadly comparable tracer lists [S02][S03]) rather than on all four studies in Table 4.2. Including the Punjab and Haryana two-state survey [S44], which found overall availability as low as 45.2%, would widen the deck's own headline range considerably. This document reports both: the narrower 66 to 80% range the deck uses on its slides, and the wider 45% to 80% range this fuller research base supports, so a judge who checks the deck against this document sees the same two-state survey the deck's authors chose not to put on a slide, not a number invented for this report alone.

### 4.10 A second lens on the specialist shortfall: why hiring alone is a slow lever

Section 4.5's specialist shortfall table shows 79.9% of CHC specialist posts unfilled nationally [S01], with obstetrics and gynaecology the least severely affected named specialty at 74.2% and surgery the most severe at 83.2% [S32]. A natural first response to a shortfall this large is to recruit harder. Table 4.9 sets out why that lever, on its own, moves slowly relative to the six-week rollout window SwasthyaGrid's feasibility case (section 13) argues is achievable for a visibility-and-transfer intervention.

| Constraint on faster specialist hiring | Why it limits the speed of the fix |
|---|---|
| Training pipeline length | A new surgeon, paediatrician, physician or obstetrician-gynaecologist takes years of postgraduate medical training to produce; a hiring drive announced this year does not change the number of qualified specialists available this year |
| Rural posting incentive gap | CHCs are disproportionately rural; urban-rural pay and lifestyle differentials have persisted long enough to be visible across consecutive Health Dynamics of India releases, which is evidence the gap is structural rather than a short-term vacancy backlog |
| Sanctioned-post inertia | A sanctioned post that has sat vacant for years, as 17,551 CHC specialist posts have [S01], often reflects a state's budget and establishment process moving more slowly than the clinical need, a separate bottleneck from simply finding willing candidates |

*CHC: community health centre. Table 4.9 does not argue against hiring more specialists; it argues that hiring is a multi-year lever, which is precisely why this document's contrarian thesis (introduced in section 2 of part A of this document) treats visibility and redeployment of what a district already has as the faster, complementary move, not a substitute for the slower hiring effort.*

A further, often overlooked consequence of the specialist shortfall is that it compounds the stock-visibility problem rather than sitting beside it unrelated. A CHC with no obstetrician and gynaecologist in post still receives an obstetric emergency drug allocation sized for a fully staffed facility, because procurement planning works off sanctioned posts and population catchment, not filled posts. A thin specialist bench and a stock allocation built for a full bench together mean the facility both under-uses some of what it is sent and remains exposed on the specific tracer items a present specialist would have flagged as running low. This is one more reason the district-wide view argued for in section 5 has value beyond moving medicine: a view that also shows which facilities are running below their sanctioned specialist strength lets a district officer weight a transfer decision by where clinical capacity, not only stock count, is thinnest.

Section 4 has stated the scale of the problem using only facility-level and national accounts data, each tagged to its source. Section 5 turns to why the gap persists: not primarily because India lacks medicine or lacks money, but because no system today gives any single actor a view across a whole district.

---

## 5. Root cause: stock is recorded but never seen district-wide

**Answer.** The shortage this document just quantified is not best explained by a single missing input. A MECE (mutually exclusive, collectively exhaustive) decomposition of "why the shelf is empty when the officer finally checks" resolves into five branches: undersized or delayed supply, surplus sitting in the wrong facility, manual recording that lags the physical shelf, unpredictable demand spikes, and the deciding factor this document argues is the binding constraint, nobody with the authority to act sees the shortage in time to prevent it. A five-whys trace on a single stock-out event lands on the same answer: the facility's own register is the only record that exists, and no one above the facility reads it before the shelf is already empty. The practical consequence is that India's primary-care network already has more supply-chain information than it uses; what it lacks is a layer that turns facility-level records into a district-wide, actionable view.

### 5.1 MECE issue tree: five branches of "why the shelf is empty"

Table 4.3 and Table 4.4 already show that stock-outs vary by duration and by state; this section asks why a stock-out, once it starts, is allowed to continue. The tree below decomposes the question into five mutually exclusive, collectively exhaustive branches.

```
Why is a tracer medicine missing from the shelf when the officer checks it?
+-- 1. Supply was undersized or delayed at the source
|     +-- State-level procurement order set below actual district-wide need
|     +-- Centrally sponsored funds released late in the financial year
+-- 2. Supply exists but sits in the wrong place
|     +-- A district warehouse holds surplus no PHC can see or request
|     +-- A neighbouring facility holds surplus it has no channel to report
+-- 3. Supply was recorded, but the record lags the physical shelf
|     +-- Manual stock registers updated days or weeks after a dispensing event
|     +-- Expiry dates tracked loosely, so first-expiry-first-out is not enforced
+-- 4. Demand spiked in a way the stocking plan did not anticipate
|     +-- A seasonal disease cluster (snakebite, dengue) concentrated in weeks
|     +-- A single high-use patient episode exhausted a thin buffer
+-- 5. Nobody with the authority to act saw the shortage in time
      +-- The facility's own register is the only record that exists
      +-- The district officer hears about a shortage by phone, after the fact
```

Branches 1 and 4 are demand-and-supply problems in the classical sense, and they are real; a thin buffer at a low-volume facility will always be vulnerable to a cluster of snakebite cases arriving in one week [S06]. But branches 2, 3 and 5 describe a different kind of failure, one where the medicine already exists inside the district's own four walls and the system still cannot move it to where it is needed. Section 6's evidence on expired stock in Telangana and Odisha is exactly branch 2 made concrete: supply that exists, in the wrong place, going unused until it expires.

### 5.2 Five whys on a single stock-out event

The issue tree names the branches; a five-whys trace on one representative event shows how branch 5, the visibility gap, is usually the proximate cause even when branch 1 or 4 is the distant cause. Table 5.1 works through a single hypothetical but representative tracer-medicine stock-out, built from the mechanism the availability studies in section 4 describe.

| Step | Question | Answer |
|---|---|---|
| Why 1 | Why was the anti-rabies vaccine (ARV) out of stock at the PHC on the day a bite victim arrived | The facility's last delivery was sized for average monthly demand, and a cluster of three bite cases in one week exhausted it early |
| Why 2 | Why did nobody restock before the cluster exhausted the buffer | The medical officer's stock register is paper or a local spreadsheet, checked only when the officer has time, not continuously |
| Why 3 | Why did the district warehouse not pre-empt the shortage, given it likely held surplus ARV elsewhere in the district | The warehouse has no routine, district-wide view of which of its 49 facilities [M] is approaching a stock-out on which item |
| Why 4 | Why does the warehouse lack that view when every facility already keeps some record of its own stock | Facility-level records are never aggregated into one district-wide table; each facility's register is an island |
| Why 5 | Why have the records never been aggregated | No system, process or named person in the current workflow is responsible for turning 49 separate facility registers into one district view every morning |

*ARV: anti-rabies vaccine. PHC: primary health centre. Table 5.1 traces one representative stock-out event back five steps; the fifth and final "why" is the structural answer this document treats as the binding constraint: aggregation across facilities is nobody's job today.*

### 5.3 Fishbone: six categories of cause behind the same effect

A fishbone diagram groups causes by category rather than by sequence, which surfaces causes the five-whys trace, being a single linear chain, can miss. Table 5.2 writes the fishbone as six "bones" feeding the same effect, an avoidable stock-out.

| Bone (category) | Causes feeding the stock-out |
|---|---|
| People | High absence and turnover among facility-level clerical staff responsible for stock registers; a single medical officer often covers several administrative duties alongside clinical ones |
| Process | No standard, recurring process exists to compare one facility's stock against a neighbouring facility's stock; reconciliation happens only when someone notices a problem |
| Technology and tools | Facility-level stock recording is paper-based or uses disconnected local spreadsheets; no shared system reads across facilities |
| Data | Even where data exists, expiry dates and batch numbers are tracked loosely, so first-expiry-first-out discipline is hard to enforce at scale |
| Incentives | A facility that reports a surplus has nothing to gain from offering it to a neighbouring facility; there is no credit, financial or administrative, for a lateral transfer |
| Logistics | Even if a shortage and a matching surplus were both known on the same day, there is no standing transport arrangement to move stock between two PHCs inside a district quickly |

*Table 5.2's six bones are deliberately MECE with the issue tree in section 5.1: People and Process map mostly to branch 5 (nobody sees it in time); Technology and Data map to branch 3 (the record lags the shelf); Incentives and Logistics explain why branch 2 (supply in the wrong place) persists even when a surplus is, in principle, known about somewhere in the district.*

The Incentives bone deserves a sentence of its own because it is easy to underweight. Even a perfect, real-time, district-wide dashboard does not move a single vial unless someone is willing to approve sending it away from their own facility's buffer. This is why SwasthyaGrid's design, described in full in section 8, treats the human sign-off as central rather than as an afterthought: a system that proposes a transfer but routes the decision through a named officer is solving the Incentives bone, not just the Technology bone.

### 5.4 Value chain: tracing one medicine from state procurement to the patient

Table 5.3 traces a single medicine through the value chain from state-level procurement to the patient, naming at each stage who records what and where the record stops matching the physical shelf.

| Stage | Who acts | What is recorded | Where visibility breaks |
|---|---|---|---|
| State procurement | State medical supplies corporation (for example, Telangana's TSMSIDC or Odisha's OSMCL) | Purchase order, quantity, batch, expiry date, against a state-wide demand estimate | The demand estimate is state-wide, not district-by-district, so it cannot see that one district already holds surplus of the same item |
| State to district warehouse | State logistics, district warehouse staff | Receipt of stock at the district warehouse, in the warehouse's own ledger | The warehouse ledger is rarely cross-checked against what individual PHCs and CHCs report they still hold |
| District warehouse to facility | District warehouse, facility pharmacist or medical officer | Dispatch from warehouse, receipt at facility, recorded in the facility's own register | The facility register updates on its own schedule and is not shared upward in real time |
| Facility to patient | Pharmacist, medical officer | Dispensing event, decrementing the facility's stock count | The decrement is recorded locally; nobody above the facility sees the running balance until someone asks |
| Expiry, if unused | Facility or warehouse staff | A write-off entry, if and when the expiry is noticed and recorded | By the time an expiry write-off is recorded, the chance to move that stock to a facility that needed it has already passed |

*TSMSIDC: Telangana State Medical Services and Infrastructure Development Corporation. OSMCL: Odisha State Medical Corporation Limited. Table 5.3's last row is the direct link to section 6: an expiry write-off is the value chain's own confession that visibility broke somewhere upstream of the patient.*

### 5.5 What each actor can see today

Table 5.4 closes the root-cause analysis by stating plainly what view each actor in the chain actually has today, which is the clearest way to show that the gap is a visibility gap, not a supply gap.

| Actor | What they can see today |
|---|---|
| Pharmacist at the facility | Their own shelf, as recorded in their own register, usually accurate for today but not shared upward |
| Medical officer at the facility | The same facility-level view as the pharmacist, plus clinical judgement about which patients are at risk if a tracer medicine runs out |
| District health officer | A periodic, manually compiled summary, when one exists, that is already days or weeks old by the time it is read; no routine same-day, district-wide view |
| District or state warehouse manager | Their own warehouse's ledger; visibility into facility-level shelves only through ad hoc phone calls or occasional physical audits |
| State medical supplies corporation | Aggregate procurement and dispatch records at the state level; no facility-level or even district-level granularity in routine reporting |

*Table 5.4 is the evidentiary basis for this document's central claim in section 6 and section 8: every actor in the chain already keeps some record, and no actor, at any level, can see the whole district on any given morning. SwasthyaGrid's proposition is to build that one missing view, not to replace any of the records that already exist.*

### 5.6 Mapping the five branches to what a district-wide view changes, and what it does not

The issue tree in section 5.1 named five branches. Table 5.5 maps each branch to whether a district-wide visibility-and-transfer layer, the mechanism this document argues is missing, actually changes the branch's outcome, stated honestly rather than claiming the one layer fixes everything.

| Branch | Does a district-wide view change this branch | Why |
|---|---|---|
| 1. Supply undersized or delayed at the source | No, not directly | A visibility layer sees what a district already has; it cannot make a state procure more or release central funds faster. This is why section 2 of this document's part A frames the recommendation as "move first, buy for the gaps that remain," not as a replacement for procurement reform |
| 2. Supply sits in the wrong place | Yes, directly | This is the branch a district-wide view is built to see and act on: a surplus at one facility becomes visible to a district officer deciding where to send a shortage alert |
| 3. Records lag the physical shelf | Partially | A daily or near-daily aggregation narrows the lag from the weeks or months Table 4.4's duration figures show today to a single day, but it does not eliminate manual data entry at the facility level, which remains a dependency |
| 4. Unpredictable demand spikes | Partially | A district-wide view cannot predict a snakebite cluster before it happens, but it can shorten the time between the first facility reporting a spike and a neighbouring facility's surplus being offered, which is the practical difference between a spike causing a stock-out and a spike being absorbed |
| 5. Nobody with authority sees the shortage in time | Yes, directly | This is the branch Table 5.1's five-whys trace identified as the proximate cause in the representative event; a district-wide, daily view with a named officer attached to it is the direct answer to "nobody's job today" |

*Table 5.5 is the honesty check for section 5's central claim. A district-wide visibility layer changes branches 2 and 5 directly, branches 3 and 4 partially, and branch 1 not at all. This is consistent with the model's own base-case assumption [A02] that the mechanism avoids half of stock-out days, not all of them: the half it does not reach is dominated by branch 1, genuine undersupply, which only procurement reform, not visibility, can fix.*

This mapping also explains why section 8's design keeps a human officer in the approval loop rather than automating transfers outright. Branches 2 and 5, the two branches a visibility layer changes directly, both involve a decision someone currently has no information to make; giving that person the information and the authority to act, rather than removing the person from the loop entirely, is the design choice that keeps the system aligned with incentives (the fifth bone in Table 5.2) rather than fighting them.

The same mapping is also a useful check against overclaiming the root-cause analysis itself. It would be easy to write a root-cause section that treats every branch of the issue tree as equally solvable by the same single intervention, which would read as more impressive but would not survive a judge's cross-examination at the viva. Stating plainly that branch 1 is untouched by a visibility layer, and that branches 3 and 4 are only partially addressed, is consistent with the honesty standard this document applies throughout: a claim is only as strong as the limit stated plainly next to it, and a root-cause analysis that names what it does not fix is, in the end, more credible than one that quietly implies a single layer resolves every branch of the tree at once.

Section 5 has shown that the shortage described in section 4 is best explained as a visibility failure layered on top of, but distinct from, genuine supply and demand variability, and has stated honestly which part of that failure a district-wide view can and cannot fix. Section 6 makes the visibility gap concrete with audited evidence: the same states that report PHC medicine availability of 66% to 80% also write off crores of expired stock in the same years, which is the clearest possible proof that the system already holds more supply than it is using in the right place.

---

## 6. The paradox: ₹558 Cr of medicine expired in two states while shelves ran empty

**Answer.** Comptroller and Auditor General (CAG) audits of Telangana and Odisha found ₹390.26 Cr of drugs expired in Telangana between 2016-22 [S16] and ₹168 Cr expired in Odisha between April 2019 and January 2025 [S17], a combined ₹558.26 Cr, rounded to ₹558 Cr, across the two states alone. Converted to a per-year, per-district basis [M][A14], that is roughly ₹1.97 Cr of expired medicine a year in an average Telangana district and ₹0.96 Cr a year in an average Odisha district, figures large enough that rescuing just 6.1% and 12.5% of that waste respectively would cover an entire ₹12 L SwasthyaGrid licence [M]. The same two states, and others audited separately, also show PHC-level shortages in the 60% to 80% availability range documented in section 4. Expired stock and empty shelves are not measured in the same audit or the same month, so this document states the limit plainly: the paradox is an inference from two independent evidence sets, not a single study proving both at once in the same facility.

### 6.1 The CAG evidence in full

Table 6.1 sets out the two headline CAG findings this document's title draws on, in full, including the detail the deck's single headline number does not carry.

| State | Period | Expired drug value | Additional detail | Tag |
|---|---|---|---|---|
| Telangana | 2016-22 (6 years) | ₹390.26 Cr | 706 separate drug items worth ₹17.13 Cr were issued to 1,259 health facilities with only 1 to 89 days of shelf life remaining, meaning even stock that was not yet technically expired was issued too close to its expiry date to be reliably used before it became waste | [S16] |
| Odisha | April 2019 to January 2025 (about 5 years 10 months) | ₹168 Cr | Includes more than ₹47 Cr of unused COVID-19 medicines, procured during a demand spike that did not materialise at the scale planned for | [S17] |

*CAG: Comptroller and Auditor General of India. Table 6.1's Telangana "1 to 89 days" detail is itself evidence for section 5's root-cause finding: a system that issues near-expiry stock to facilities, rather than to the facility most likely to use it before expiry, is a system making dispatch decisions without a district-wide demand view.*

### 6.2 Other states' CAG findings on the same failure mode

The deck's reconciliation table lists only Telangana and Odisha, but the same failure mode, expired or near-expired drugs accumulating in state medical corporations, recurs in CAG findings from at least three further states, found through new research for this document. Table 6.2 sets these out, each tagged to a verifiable report.

| State | CAG finding | Tag |
|---|---|---|
| Karnataka | ₹23.03 Cr of expired drugs, 2019-22, stored alongside regular stock rather than disposed of; the same audit found the Karnataka State Medical Supplies Corporation Limited did not procure all required drugs between 2017-18 and 2021-22, meaning shortage and expired surplus coexisted in the same audit period | [S40] |
| Haryana | ₹14.52 Cr of expired drugs found in warehouses and hospitals; the same audit found 376 lakh units of substandard drugs issued to patients in Panipat, Nuh and Hisar districts, and purchases worth ₹1.52 Cr from a blacklisted supplier | [S41] |
| Uttar Pradesh | The Uttar Pradesh Medical Supplies Corporation Limited (UPMSCL) could not supply the drug quantities demanded by the state's health, medical education and National Health Mission departments, 2018-22, a procurement shortfall that sits on the opposite side of the same coin: a corporation that cannot deliver what is asked for is also a corporation unlikely to be managing what it already holds efficiently | [S42] |

*CAG: Comptroller and Auditor General of India. UPMSCL: Uttar Pradesh Medical Supplies Corporation Limited. Table 6.2 is new research added for this document, beyond the two states (Telangana, Odisha) already in the base source register; it shows the Telangana and Odisha findings are not an isolated pair of audits but part of a pattern CAG has found repeatedly across differently governed states.*

Karnataka's case is the sharpest illustration of the paradox inside a single audit: the same report that documents ₹23.03 Cr of expired, undisposed stock also documents the corporation failing to procure all required drugs over the same five years [S40]. A single state audit, in other words, can show both too much of some items and too little of others at the same time, which is exactly what a district-blind, state-level procurement and dispatch process would be expected to produce.

### 6.3 Per-district arithmetic: what the expired stock is worth if redeployed

Table 6.1's state totals are hard to reason about at the scale a single district officer operates at. Table 6.3 converts both the Telangana and Odisha figures to a per-year, per-district basis, following the model's stated method [M][A14].

| State | Total expired | Audit period (years) | Per-year total | Districts | Per-district, per-year | Tag |
|---|---|---|---|---|---|---|
| Telangana | ₹390.26 Cr | 6.0 | ₹65.04 Cr | 33 | ₹1.97 Cr | [S16][M][A14] |
| Odisha | ₹168.00 Cr | 5.83 | ₹28.80 Cr | 30 | ₹0.96 Cr | [S17][M][A14] |

*The per-year figure divides the audited total by the audited period in years; the per-district figure then divides the per-year total by the number of districts in that state at audit time. Both rows are model outputs [M], applying assumption A14 (expiry per district a year equals the audited total divided by the audited years divided by the district count) to the audited CAG totals.*

Table 6.4 then asks the question a buyer would ask: what share of this annual, per-district waste would a ₹12 L licence need to recapture to pay for itself.

| State | Per-district annual waste | ₹12 L licence as a share of that waste | Tag |
|---|---|---|---|
| Telangana | ₹1.97 Cr | 6.1% | [M] |
| Odisha | ₹0.96 Cr | 12.5% | [M] |

*Table 6.4's framing is deliberately conservative: it asks what share of expired stock alone, not expired stock plus avoided private-chemist spending plus avoided stock-out harm, would need to be rescued. Section 11 (sustainability, in part D of this document) returns to this calculation as part of the unit-economics case; this section introduces it only as evidence that the paradox is large enough in rupee terms to matter to a buyer, not as a revenue projection.*

### 6.4 First-expiry-first-out, and why a district view changes the outcome

The mechanism connecting section 5's root-cause finding to section 6's audited waste is a standard supply-chain discipline called first-expiry-first-out (FEFO): the item closest to its expiry date should be the next one issued or transferred, wherever in the district it currently sits. Telangana's ₹17.13 Cr of drugs issued with only 1 to 89 days of shelf life [S16] shows FEFO failing in its mildest form, issuing near-expiry stock at all, rather than its worst form, stock expiring unissued entirely. A district-wide view that ranks every facility's stock by days-to-expiry, not only by days-of-cover, would surface a near-expiry batch sitting idle at a low-volume facility and propose moving it to a busier facility before it crosses the 90-day threshold, which is exactly the mechanism SwasthyaGrid's prototype applies, described in full in section 8.

### 6.5 Stating the limit plainly

This document does not claim that the specific vials expiring in a Telangana warehouse are the specific vials missing from a Telangana PHC shelf in the same month; no public audit links the two at that level of granularity. What this document claims, and what Tables 6.1 through 6.4 together support, is narrower and still significant: the same states that CAG finds writing off crores of medicine also appear, in independent facility surveys, among the states reporting PHC-level availability in the 60% to 80% range documented in section 4. The paradox is an inference from two independent evidence sets collected on different timelines by different auditors, not a single linked study. A pilot that runs shadow-mode for several weeks, as section 13 (feasibility) describes, is partly a test of exactly this inference: if a district's own facilities show simultaneous surplus and shortage of the same tracer item when SwasthyaGrid's dashboard is first populated, the paradox moves from an inference to an observed fact for that district.

### 6.6 Why a smaller, audited number is a stronger claim than a larger, unaudited one

It would have been easy to inflate the headline figure in this section's title by adding Karnataka's ₹23.03 Cr, Haryana's ₹14.52 Cr and a rough estimate for Uttar Pradesh's unquantified procurement shortfall to the Telangana and Odisha total, producing a bigger number for a louder claim. This document deliberately does not do that. The ₹558 Cr figure in this section's title and in the per-district arithmetic of Table 6.3 and Table 6.4 uses only the two states, Telangana and Odisha, where a single CAG audit reports a specific rupee value for expired drugs over a stated period [S16][S17]. Karnataka, Haryana and Uttar Pradesh are reported in Table 6.2 as corroborating evidence that the same failure mode recurs elsewhere, not as additions to the headline total, because the Uttar Pradesh finding is a procurement-shortfall finding without a matching expired-value figure [S42], and combining figures audited over different periods, by different state auditors, using different methodologies, would produce a number that reads as precise while actually being a mixture of incompatible measurements. A smaller number that a reader can trace line by line to two named audits is a stronger claim in front of a judging panel than a larger number assembled by addition across five states with five different audit scopes.

### 6.7 What this section does not claim about causation

Table 6.1 through Table 6.4 establish that expired stock is large, audited and recurring, and that converting even a modest share of it into redeployed supply would be financially significant at the district level. This section does not claim that fixing the paradox is sufficient on its own to close the availability gap documented in section 4. Three limits are worth stating here rather than leaving implicit. First, the expired-stock figures in Table 6.1 are state medical corporation-level findings; they describe stock sitting in state and district warehouses, not stock sitting unused inside a PHC's own small stockroom, which is a different physical location with a different transfer logistics problem. Second, not every expired item is a tracer medicine relevant to the four emergency conditions in Table 4.3; a CAG audit's total figure aggregates across the full drug formulary, and a share of it will be items with limited substitutability across facilities even if visibility existed. Third, and most important, an audit finding expired stock in 2016-22 or 2019-25 describes a multi-year accumulation, not a single point-in-time snapshot that can be directly compared against a single-day availability survey conducted in a different year; the inference in section 6.5 already states this limit, and this section restates it here because a reader moving quickly through the tables could otherwise read more precision into the comparison than the underlying audits support.

### 6.8 The paradox as the strongest evidence for a visibility layer, not a procurement overhaul

The practical conclusion from sections 6.1 through 6.7 is narrower than "India's drug procurement system is broken" and more useful than that broader claim would be. What the CAG evidence actually shows, across five states and two different kinds of audit finding (expired stock in Telangana, Odisha, Karnataka and Haryana; procurement shortfall in Uttar Pradesh), is that state-level medical corporations are already managing enormous volumes of drugs, correctly procuring most of what is needed most of the time, and failing specifically at the last-mile allocation step: knowing, on any given day, which of a state's hundreds of facilities holds a surplus of an item another facility is short of. That is a narrower, more fixable problem than procurement reform, and it is the specific problem a district-wide visibility and transfer layer is built to solve. Section 7 turns to the systems that already exist to manage this supply chain, none of which closes this specific gap, and to the one precedent, eVIN, that shows what happens when visibility is added to a similar Indian public health supply chain.

---

## 7. Five public systems record supply and none moves it; eVIN shows what visibility buys

**Answer.** India already runs at least five public information systems that touch drug or health-facility data: HMIS (Health Management Information System), e-Aushadhi or DVDMS (the drug-supply ledger), eVIN (the vaccine cold-chain system), IHIP or IDSP (the disease-surveillance system) and the ABDM Health Facility Registry (a facility directory). Scored on six practical capabilities, records stock, spans a whole district, covers medicines beyond vaccines, proposes a transfer, needs a human sign-off, and is live and used today, none of the five does all six, and most do none of the middle three. eVIN is the closest precedent and the strongest evidence that the missing layer is buildable inside India's existing institutions: once vaccine stock became visible across cold-chain points, the reported reduction in vaccine stock-outs was over 80% [S12], and an international precedent from Ghana's drone-logistics programme shows a comparable, independently measured 30% reduction in vaccine stock-out duration once a different kind of visibility and fast transfer was added [S46]. SwasthyaGrid proposes the same visibility-plus-transfer logic for medicines, beds and staff, not vaccines, with a human officer's sign-off built in from the start rather than retrofitted.

### 7.1 Capability matrix: six questions, five existing systems, and SwasthyaGrid

Table 7.1 scores five existing public systems, plus SwasthyaGrid, on the same six columns, so the comparison is symmetric across every row.

| System | Records stock | Spans a whole district | Covers medicines (not only vaccines) | Proposes a transfer | Needs human sign-off | Live and used today |
|---|---|---|---|---|---|---|
| HMIS | Partial | No | Partial | No | No | Yes |
| e-Aushadhi / DVDMS | Yes | Partial | Yes | No | No | Yes, 31 States and UTs on the central dashboard |
| eVIN | Yes | Yes, for vaccines | No, vaccines only | No | No | Yes, all 733 districts, 36 States and UTs |
| IHIP / IDSP | No | Yes, for disease signals, not stock | No | No | No | Yes |
| ABDM Health Facility Registry | No | Yes, as a directory, not a stock view | No | No | No | Yes |
| SwasthyaGrid | Yes | Yes | Yes | Yes | Yes | Prototype only, on simulated data |

*HMIS: Health Management Information System. DVDMS: Drug and Vaccine Distribution Management System. eVIN: electronic Vaccine Intelligence Network. IHIP: Integrated Health Information Platform. IDSP: Integrated Disease Surveillance Programme. ABDM: Ayushman Bharat Digital Mission. Table 7.1's last row states plainly that SwasthyaGrid's "Yes" answers describe prototype behaviour on simulated data, not a live deployment; section 4 of this document (plan §4, reproduced in part A) and section 8 of this document state this distinction wherever the capability is described.*

### 7.2 Why each cell is scored the way it is

Table 7.1's cells are assertions; Table 7.2 justifies each system's score against its own stated design and public documentation, so a reader can check the matrix rather than take it on trust.

| System | Why it is scored this way |
|---|---|
| HMIS | HMIS collects a wide range of health-programme indicators, including some supply data, but its design purpose is programme monitoring and reporting upward to the state and centre, not a same-day, actionable, facility-to-facility stock view |
| e-Aushadhi / DVDMS | C-DAC's own description states the system gives "nationwide visibility of essential drug supplies" and that 31 States and UTs are monitored through its central dashboard [S15], independently corroborated by the CAG's own IT audit of the system [S35]; it records and reports stock well, but its public documentation describes monitoring and reporting, not an automated transfer proposal between facilities, and it is not framed around a human sign-off workflow for inter-facility moves |
| eVIN | eVIN's own reported results, over 80% fewer vaccine stock-outs, more than 29,000 cold-chain points, live in all 733 districts and 36 States and UTs [S12], are exactly the proof-of-concept this document leans on; its scope is vaccines specifically, inside a cold-chain-equipped network built with dedicated donor and government investment [S27], not the broader medicine, bed and staff view SwasthyaGrid proposes |
| IHIP / IDSP | India's disease-surveillance systems are built to detect outbreak signals, such as the 4 to 6 week dengue early-warning window documented in section 4 [S09], not to track or move physical stock |
| ABDM Health Facility Registry | The Health Facility Registry is a directory, assigning each facility an identifier inside the Ayushman Bharat Digital Mission's architecture; it answers "where is this facility and what is it," not "what does this facility have in stock today" |
| SwasthyaGrid | The prototype, run on simulated data for 40 facilities in 5 Rajasthan districts, already demonstrates all six capabilities in combination (section 8 describes the mechanism in full); no capability here is claimed as live in production |

*C-DAC: Centre for Development of Advanced Computing. CAG: Comptroller and Auditor General. Table 7.2's eVIN row is the single strongest piece of third-party evidence in this document for the core thesis: visibility, once added to an existing Indian public health supply chain, measurably reduced stock-outs, without requiring India to build an entirely new institution from scratch.*

### 7.3 What eVIN proves, and what it does not

eVIN is the precedent this document leans on most, so it deserves its own honest accounting of scope, not just its headline result. Table 7.3 sets this out directly.

| What eVIN proves | What eVIN does not prove |
|---|---|
| A nationwide, district-spanning visibility layer, added on top of an existing Indian public health supply chain, can cut stock-outs by a large, measured margin: over 80% fewer vaccine stock-outs reported [S12] | That the same result transfers one-for-one to medicines, which are a far larger and more heterogeneous product category than vaccines, with different cold-chain, dosing and shelf-life characteristics |
| The visibility layer can scale to the full national network: 733 districts, 36 States and UTs, more than 29,000 cold-chain points [S12] | That scaling happened without a dedicated, well-funded rollout: eVIN was built with UNDP, Gavi and Logistimo as named design and implementation partners [S27], a resourcing level a single state-level SwasthyaGrid licence does not assume |
| The result holds at a granular, facility level: a Pune city study found vaccine wastage fell measurably after eVIN implementation, with reductions of 8.64% for pentavalent vaccine, 123.98% for IPV (reflecting a low base), 32.63% for tetanus toxoid and 47% for hepatitis B [S33] | That wastage reduction and stock-out reduction are the same metric; eVIN's headline figure is a stock-out reduction, while the Pune study measures wastage, a related but distinct outcome |

*IPV: inactivated polio vaccine. Table 7.3's second row is the honesty check this document applies throughout: eVIN's scale was reached with named, well-resourced international and domestic partners [S27], a precedent for what is possible, not a guarantee that a smaller, differently funded rollout reaches the same scale on the same timeline.*

### 7.4 An international precedent outside vaccines: what fast, visible transfer buys elsewhere

eVIN is an Indian precedent for visibility specifically. A separate, international precedent shows what visibility paired with fast physical transfer buys in a comparable public health supply chain outside India, which is useful context for SwasthyaGrid's transfer-and-approval mechanism, described in section 8. Table 7.4 sets this out.

| Precedent | Mechanism | Result | Tag |
|---|---|---|---|
| Zipline drone-delivery network, Ghana's Western North Region | Drone delivery triggered by a facility-level shortage signal, serving more than 2,200 health facilities nationally | A rigorous impact assessment found a 30% reduction (statistically significant) in the duration of vaccine stock-outs, and a 44% reduction in missed immunization opportunities, at served facilities compared with unserved ones | [S46] |

*Table 7.4 is included as context, not as a claim that SwasthyaGrid uses drones or operates in Ghana. The relevant parallel is narrower and more honest: a different country's public health system, facing a comparable stock-out problem, measured a significant reduction once a visibility-and-fast-transfer mechanism was added, which is independent, non-Indian evidence that the mechanism class SwasthyaGrid proposes, not eVIN specifically, has worked elsewhere. SwasthyaGrid's own mechanism is a proposed road transfer with a human sign-off, not a drone network, and no number from this table is used as a projection for SwasthyaGrid's own numbers anywhere in this document.*

### 7.5 The missing layer, stated precisely

Table 7.1's matrix makes the missing layer precise rather than impressionistic. No existing system combines a district-wide, cross-facility stock view with an automated transfer proposal and a human sign-off, for medicines, beds or staff. e-Aushadhi and DVDMS come closest on recording and state-wide monitoring [S15][S35]; eVIN comes closest on proving that visibility measurably reduces stock-outs, but only for vaccines, inside a differently resourced rollout [S12][S27]; neither, nor any of the other three systems in Table 7.1, proposes a transfer or routes it through a named officer's approval. This is the specific, narrow gap SwasthyaGrid's design, detailed next in section 8, is built to fill: not a replacement for e-Aushadhi, HMIS, eVIN, IHIP or the Health Facility Registry, but the aggregation and transfer-proposal layer that sits on top of what those systems, and the facilities themselves, already record.

### 7.6 Why the existing systems stay necessary, not replaced

A reader could mistake this section's argument for a case that India's existing health information systems are failing and should be displaced. That is not the claim. Table 7.5 sets out, system by system, why each one remains necessary even after a district-wide visibility and transfer layer is added, which is also a statement of what SwasthyaGrid intentionally does not attempt to rebuild.

| System | Why it stays necessary after a visibility layer is added |
|---|---|
| HMIS | Remains the system of record for the wider set of programme indicators (immunisation coverage, antenatal care visits, institutional delivery rates) that a stock-and-transfer layer has no reason to duplicate |
| e-Aushadhi / DVDMS | Remains the ledger of record for procurement and state-wide drug distribution; a district-wide view reads from this ledger's facility-level stock data rather than replacing the ledger itself |
| eVIN | Remains the dedicated, cold-chain-specific system for vaccines, a product category with handling requirements (temperature logging, cold-chain point monitoring) that a general medicine, bed and staff view is not designed to replicate |
| IHIP / IDSP | Remains the system for disease-outbreak signal detection, an entirely different data type (case counts, not stock counts) feeding an entirely different decision (outbreak response, not shelf replenishment) |
| ABDM Health Facility Registry | Remains the authoritative facility identifier directory that any new system, including SwasthyaGrid's prototype, needs to reference rather than duplicate, so that a given PHC or CHC is identified consistently across every system that touches it |

*Table 7.5 is the direct answer to a scepticism a judge is likely to raise: "why build something new when India already has five systems." The answer, stated plainly across Tables 7.1, 7.2 and 7.5 together, is that none of the five is designed to do the specific thing a district health officer cannot do today, see a cross-facility, cross-category (medicine, bed, staff) view with a transfer proposal attached, and that the new layer is explicitly designed to read from, not replace, the systems that already exist.*

### 7.7 What this section's evidence does and does not establish about readiness

This section has assembled the strongest available evidence that a visibility-and-transfer layer is both needed (Table 7.1's matrix shows no existing system does all six things) and plausible (eVIN's measured result and the Ghana drone-logistics precedent both show the mechanism class working in a comparable public health context). It has not established that SwasthyaGrid's own prototype, built and tested on simulated data for 40 facilities in 5 Rajasthan districts [S31], will reproduce eVIN's roughly 80% stock-out reduction or the Ghana programme's 30% duration reduction at any specific scale. Those are precedents for the mechanism, not forecasts for this specific implementation; section 14 of this document states the impact model's own scenario range, bear, base and bull, precisely so that no single number from this section's precedents is mistaken for a guaranteed outcome. What this section does establish, and what a judge evaluating the innovation claim in section 10 should weigh, is that the specific capability combination in the last row of Table 7.1 does not exist anywhere in India's current public health information architecture, across five systems this document checked individually against named public documentation rather than against assumption.

That checking exercise is itself worth naming as a method, not only a conclusion. Each of the five rows in Table 7.1 and Table 7.2 was scored against the system's own publicly stated purpose and documented scope, taken from a government or institutional source named in this document's tag register, rather than against a general impression of what the system probably does. A reader who disagrees with any single cell in Table 7.1 can trace that cell back to the specific source in Table 7.2 and check it directly, which is the same standard of traceability this document applies to every quantitative claim in sections 4 through 6 above.

A final observation worth recording here, because it bears directly on the feasibility case built in section 13, is that every one of the five existing systems in Table 7.1 already runs inside the same State subject constraint SwasthyaGrid itself operates under: health is a State List entry under the Seventh Schedule of the Constitution [S13], and every one of HMIS, e-Aushadhi, eVIN and the ABDM Health Facility Registry was built to work within, rather than around, that constraint, typically by signing a state-level data-sharing or participation agreement district by district or state by state rather than attempting a single central mandate. eVIN's own rollout path, from 12 states at its 2015 launch to 36 States and UTs today [S12], is itself evidence that a state-by-state adoption curve is the normal, proven path for this category of system in India, not a slower or weaker path than a single national rollout would be. This is the precedent section 13's six-week, state-by-state rollout plan follows, and it is a further reason this document treats eVIN as the single most load-bearing comparison case in part B, referenced again in sections 9, 10 and 13, each time for a different piece of the same underlying argument: that a state-by-state, consent-based rollout of a district-visibility layer has an Indian precedent that already scaled nationally, inside the same constitutional and institutional constraints SwasthyaGrid itself must work within, and did so without requiring any change to the Seventh Schedule, the DPDP Act's data-protection rules, or any other part of the regulatory environment section 13 examines in full.

Section 7 closes part B of this document. Part C takes up the solution itself (section 8), the target market SwasthyaGrid proposes to sell into (section 9) and the innovation argument for why this layer, specifically, is the one nobody else has built (section 10).


## 8. The solution: one morning view, a ranked transfer and a named officer's sign-off

**Answer.** SwasthyaGrid gives a district a single morning view of every facility's medicine stock, bed occupancy and staff roster, flags any item that is about to run out, ranks the nearest facility holding surplus of that item, and proposes a transfer sized to cover the gap; a named officer approves, edits or rejects the proposal before anything moves, and the receiving facility confirms delivery before the record updates again [S31]. Nothing in this section describes software, a vendor or an engineering choice: it describes a behaviour, a five-step loop that is run once a day on data a district already produces. A prototype demonstrates the loop on simulated data for 40 facilities across 5 Rajasthan districts, including one run at a facility called PHC Kota-4 that moved antiretroviral cover from 1.2 days to 21.0 days in a single approved transfer [S31]; no live district, no customer and no interview exists yet, and this section states that limit at every point where a reader could otherwise mistake a demonstration for a deployment.

### 8.1 The five-step loop

SwasthyaGrid's mechanism is a repeating daily loop, not a one-time dashboard. Table 8.1 sets out each step, who acts at that step, what that person or facility sees, and what gets recorded as a result, so the loop can be read start to finish without reference to any other section.

| Step | Who acts | What they see | What is recorded |
|---|---|---|---|
| 1. See | The district officer, once each morning | A single view of every facility's medicine stock by item, bed occupancy by facility, and staff roster by facility, assembled from the data the district already produces [S31] | Nothing new; this step only displays what facilities already reported |
| 2. Flag | No person; the system itself | Any item whose days of cover (units in stock divided by average daily use) falls under 3 days, or under 5 days for a named emergency drug, is marked for attention [S31] | A flagged-item list, dated and facility-tagged |
| 3. Propose | No person; the system itself | For each flagged item, the system proposes the nearest facility in the district holding surplus of that item, and sizes a transfer, or a refill from district buffer, intended to bring the receiving facility back up to 21 days of cover [S31] | A ranked proposal, one line per flagged item, with the sending facility, receiving facility and quantity named |
| 4. Approve | A named district officer | Every pending proposal, one at a time, with the facility names, the quantity and the days-of-cover numbers behind it | The officer's decision: approved, edited (a different quantity or route) or rejected, with the officer's name and the time of the decision |
| 5. Confirm | The receiving facility's staff | The quantity that actually arrived, checked against the approved proposal | A single, final stock update at the receiving facility once delivery is confirmed; stock is never updated twice for the same movement |

*Table 8.1's step 4 is the design's hinge: every proposal reaches a named person before it changes anything, and the record of that person's decision is permanent. Step 5 closes the loop by tying the paper trail to a physical confirmation rather than to the proposal alone, so a transfer that is approved but never actually delivered does not silently appear as completed in the record.*

### 8.2 The rules behind the flag and the proposal, in plain words

Section 8.1's steps 2 and 3 are governed by a small set of fixed thresholds, not by a model the officer cannot inspect. Table 8.2 states each rule in the words an officer would use, with the source for each number.

| Rule | What it means in practice | Tag |
|---|---|---|
| Days of cover | Units currently in stock, divided by the average number of units used per day at that facility over a recent period | [S31] |
| Critical threshold, ordinary items | Any item with fewer than 3 days of cover is flagged | [S31] |
| Critical threshold, named emergency drugs | For a named list of emergency drugs (for example, antirabies and antivenom serum), the threshold is widened to 5 days of cover, because a shortfall in these items has a faster and more severe consequence than a shortfall in a routine medicine | [S31] |
| Refill target | A proposed refill or transfer is sized to bring the receiving facility up to 21 days of cover, not simply to clear the immediate flag | [S31] |
| Transfer radius | A lateral transfer between facilities is only proposed within 40 kilometres, so that the time and cost of moving physical stock does not exceed the value of closing the gap | [S31] |
| Bed redirect threshold | A bed-occupancy flag is raised once a facility crosses 90% occupancy, proposing redirection of the next incoming case to a facility under that threshold | [S31] |

*Every threshold in Table 8.2 is fixed and visible to the approving officer at the moment of decision; none of them is described to the officer as a model score or a probability, consistent with the honesty rule that a reader, and an officer, should be able to see exactly why a proposal was made.*

### 8.3 The four move types

Not every flagged shortage has an answer inside the district on a given day, and the design is built to say so rather than to force a move. Table 8.3 sets out the four outcomes a flagged item can reach.

| Move type | What happens | When it is used |
|---|---|---|
| Refill from district buffer | The district's own reserve stock, where one exists, tops up the facility to 21 days of cover | The district holds surplus of the flagged item centrally |
| Lateral transfer | Stock moves from one facility with surplus to one facility with a shortfall, within the 40 km radius [S31] | No central buffer exists, but a nearby facility holds enough surplus of the same item |
| Bed redirect | An incoming case is routed to a facility under 90% occupancy rather than the nearest full facility | The flag is a bed-occupancy flag, not a stock flag |
| Escalation, no internal move available | The item stays flagged and is marked for procurement attention rather than transfer | No facility in the district holds surplus of the flagged item; the shortage is a district-wide shortage, not a misallocation |

*Table 8.3's fourth row is the honest edge of the mechanism: SwasthyaGrid moves what a district already owns, and it says plainly when a district owns nothing to move, rather than manufacturing a proposal where none is justified. Section 2 of this document states the same point at the level of the whole thesis: move first, buy only for what remains.*

### 8.4 A district officer's first twenty minutes, read as a workflow

The value of the five-step loop is easiest to see as a single morning's use, described here as a workflow analysis rather than a narrative scene. A district health officer opens the morning view and sees, in one place, every facility's flagged items from step 2, already ranked by how severe the shortfall is and how close a proposed fix sits. For each flagged item the officer sees three things side by side: the facility and quantity short, the facility and quantity proposed to cover it, and the distance the proposed transfer would travel. The officer's work is reduced to a single decision per flagged item: approve the proposal as shown, change the quantity or source facility, or reject it and leave the item for a procurement conversation instead. Before SwasthyaGrid's prototype, the same twenty minutes would be spent, at best, telephoning two or three facilities to ask what they currently hold, a process that does not scale past a handful of calls and that produces no permanent record of who was asked, what they said, or what was decided. The twenty-minute figure is a description of the number of decisions involved, not a measured time-and-motion result, and this document does not claim it as a measured saving anywhere in the sections that follow.

### 8.5 The PHC Kota-4 run, step by step

The single concrete example behind this section's claims is a prototype run at a facility named PHC Kota-4, inside the simulated-data environment covering 40 facilities in 5 Rajasthan districts [S31]. Table 8.4 walks the run through the five-step loop exactly as Table 8.1 defines it, so the example can be checked step by step rather than taken as a single before-and-after number.

| Step | What happened at PHC Kota-4 (simulated run) |
|---|---|
| 1. See | The morning view showed PHC Kota-4 holding 7 vials of antiretroviral (ARV) medicine, against its recent average daily use, giving 1.2 days of cover [S31] |
| 2. Flag | 1.2 days of cover is well under the 3-day ordinary threshold, so the item was flagged for attention [S31] |
| 3. Propose | The system proposed a transfer of 119 vials, sized to bring PHC Kota-4 to 21 days of cover, sourced from the district drug warehouse (DDW) at Kota, to travel by a refrigerated van given the item's cold-chain requirement [S31] |
| 4. Approve | A named officer approved the proposal as shown, with no edit to quantity or route [S31] |
| 5. Confirm | PHC Kota-4 confirmed receipt of 126 vials (119 transferred plus 7 already on hand), recalculated against the same average daily use to 21.0 days of cover [S31] |

*The run in Table 8.4 is a simulated-data demonstration, not a measured result from a live district; it shows the mechanism operating correctly on a single item at a single facility, nothing more. Section 14 of this document builds the deck's actual impact estimate from a modelled scenario range across all 38,241 PHCs and CHCs [S01][M], never from this one facility's run, which is included here only as the mechanism's worked example.*

### 8.6 What is built today, and what is still planned

A reader evaluating this section's claims needs to know exactly which parts of the five-step loop exist today and which parts are still ahead. Table 8.5 reproduces that distinction in full, matching the product-facts register this entire document is built against.

| Capability | Status | How this document and the deck word it |
|---|---|---|
| District view of stock, beds, staff, diagnostics and footfall across 40 facilities (30 PHCs, 10 CHCs) in 5 Rajasthan districts (Jaipur Rural, Alwar, Bikaner, Udaipur, Kota) | Prototype, on simulated data | "A working prototype runs on simulated data" [S31] |
| The days-of-cover warning rule, with the 3-day and 5-day thresholds | Prototype | "Flags any item under 3 days of cover" [S31] |
| Ranked proposals: refills to 21 days of cover, lateral transfers within 40 km for critical items | Prototype | "Ranks the nearest surplus and sizes the move" [S31] |
| The named-officer approval step: every proposal starts pending, a human approves, edits or rejects | Prototype | "A named officer approves" [S31] |
| Receiving-facility confirmation, with a single stock update | Prototype | "The receiving PHC confirms" [S31] |
| Bed redirect above 90% occupancy | Prototype | "To a facility under 90% full" [S31] |
| The PHC Kota-4 run itself | Prototype run on simulated data | A labelled proof case, not a live result [S31] |
| A live district pilot, a state data-sharing agreement, and real facility logins | **Planned** | "Six weeks from a signed agreement to a live district" [A16] |
| Customer interviews with district and state staff | **Planned; none done** | "None done yet"; Appendix E of this document names who, how many and what would be asked |

*This document, like the deck it supports, never writes "deployed," "live in," "used by," "customers," "pilots running" or "partners" about SwasthyaGrid, because none of those words is true of a prototype running on simulated data for a demonstration set of facilities.*

### 8.7 Why the design rejects a running alert feed, and chooses one ranked proposal instead

A reasonable alternative design would surface every flagged item as a continuous stream of alerts to the officer, the way many clinical software systems do. SwasthyaGrid's design deliberately rejects that pattern, and the reason is a documented failure mode in a closely related field rather than a guess. A peer-reviewed study of clinical decision-support alerting found that, across the literature it reviewed, between 49% and 96% of clinical alerts were overridden by the clinician receiving them, and in the study's own cohort the rate of overriding a repeated alert for the same patient rose to 87.9% once the first instance of that alert had already been overridden once [S63]. The pattern that study documents, alert volume producing habitual dismissal rather than attention, is precisely the failure SwasthyaGrid's step 4 is built to avoid: instead of a running feed, each day's flagged items resolve into one ranked proposal per item, shown once, with a single decision required, so that the officer's attention is spent on a decision rather than on filtering a stream.

### 8.8 Guardrails

Four design choices sit outside the five-step loop itself and apply across every step. Table 8.6 names each one and the reason it is treated as non-negotiable rather than as a configurable option.

| Guardrail | What it means in practice | Why it matters |
|---|---|---|
| Human approval, always | No proposal from step 3 becomes a movement without step 4's named sign-off; there is no automatic-approval mode | A district officer, not the system, carries accountability for every stock movement, consistent with how public health supply decisions are governed today |
| No patient data in scope | SwasthyaGrid's view covers stock, bed occupancy and staff rosters at a facility level; it does not collect, store or display any individually identifiable patient record | Keeps the system outside the scope the Digital Personal Data Protection Act, 2023 governs for personal data [S14], and avoids a consent and security burden the solution does not need to carry to do its job |
| State data stays with the state | The district and state's own stock, bed and roster data is read for the district view; it is not pooled into a cross-state or national dataset | Respects health as a State List subject under the Seventh Schedule of the Constitution [S13], and matches the state-by-state adoption path every existing Indian public health information system in section 7 of this document already follows |
| A permanent audit trail | Every flag, proposal, approval decision and confirmation from Table 8.1 is timestamped and attributed to a named facility or officer | Makes every movement traceable after the fact, which matters for the same reason the CAG's own expired-drug audits in Telangana and Odisha, discussed in section 6, matter: a district's stock history should be checkable, not just actionable |

*Table 8.6's four guardrails are not a feature list; they are the conditions under which the five-step loop in Table 8.1 is allowed to operate at all. A version of this design without any one of them would be a materially different, and less defensible, product.*

### 8.9 Why ambient medicine coordination is a different, and harder, problem than eVIN's

Section 7 of this document already named eVIN as the strongest precedent for the mechanism class SwasthyaGrid proposes, and also named the limit on that precedent: eVIN is a vaccine-specific system, built around a dedicated cold chain [S12][S27]. That distinction matters enough to this section's design choices that it is worth stating in industry terms, not only in this document's own words. Independent industry commentary on India's medicine supply chain states plainly that "a doctor or a patient often has no way of knowing whether a medicine is sitting in a warehouse two states away or genuinely out of stock nationwide," and that most apparent scarcity reflects a coordination failure rather than a true shortage [S65]. The same commentary draws the same distinction this document draws between a temperature-controlled, cold-chain network, which is what eVIN digitises, and the high-volume, ambient-temperature medicine distribution network SwasthyaGrid's prototype addresses [S65]. Table 8.7 sets the two kinds of coordination problem side by side, because the difference is a design constraint, not a footnote.

| Dimension | Cold-chain vaccine distribution (eVIN's domain) | Ambient-temperature medicine distribution (SwasthyaGrid's domain) |
|---|---|---|
| Product count in scope | A small, standardised set of named vaccines | A far larger and more heterogeneous catalogue; SwasthyaGrid's prototype tracks 7 tracer items as a starting set, not the full catalogue [S31] |
| Storage requirement | Continuous, monitored refrigeration at every cold-chain point [S12] | Ordinary shelf storage at most facilities, with no temperature monitoring built into the existing data a district already produces |
| Transfer urgency | High, and visible: a temperature excursion itself is a monitored, alarmed event | Lower and less visible: a shelf running low produces no alarm of its own, which is the specific coordination gap section 8.1's step 2 is built to close |
| Shelf-life pattern | Narrow and closely tracked by the cold-chain system itself | Wide and heterogeneous; the Telangana CAG finding of ₹17.13 Cr in drugs issued with only 1 to 89 days of shelf life left shows how unevenly shelf life is tracked today [S16] |

*Table 8.7 is the reason this section treats eVIN as a precedent for the mechanism, never as a precedent for the result: the two domains share the goal of visibility-driven coordination, but ambient medicine distribution carries a larger product catalogue, a less monitored storage condition, and a quieter failure signal than a cold-chain excursion, each of which is a reason the design in sections 8.1 and 8.2 leans on a daily, fixed-threshold check rather than on a continuous alarm.*

### 8.10 What this section establishes, and what it does not

This section has described a behaviour: a daily loop that sees, flags, proposes, requires approval and confirms, running on data a district already produces, demonstrated once on simulated data at one facility. It has not established that the loop performs this way at scale, across a live district's real data, under the operational pressure of an actual working day; section 13 treats that gap directly as a feasibility question, and section 14 treats it as a modelling question, never substituting the Kota-4 demonstration for either. Section 9 now turns to who would buy this behaviour, at what price, and why now.

---

## 9. Target market: about 780 districts and a ₹93.6 Cr licence pool, entered through 112 aspirational districts

**Answer.** State health departments are the buyer for SwasthyaGrid, purchasing one annual licence per district; across about 780 districts nationally [S23][A04] at a ₹12 lakh (L) annual licence [A05], that is a ₹93.6 Cr-a-year total addressable market [M]. SwasthyaGrid's serviceable segment is the 112 NITI Aayog aspirational districts, where health and nutrition already carries 30% weight in a district's own composite score and a District Collector is already accountable for moving it [S19][S20], worth ₹13.44 Cr a year [M]; the obtainable segment by the end of year 3, on the base case path, is 80 districts at ₹9.6 Cr a year [M], entered through a Rajasthan beachhead of 41 districts worth ₹4.92 Cr [S24][M], matching the five Rajasthan districts the prototype already runs on [S31]. A top-down check against the Union National Health Mission's own 2025-26 allocation of ₹37,227 Cr shows the licence costs the average district 0.25% of its ₹47.73 Cr central NHM allocation [S18][M], a cross-check this section treats as a sanity bound, not as an independent sizing method.

### 9.1 Segmentation, targeting and positioning

Table 9.1 sets out SwasthyaGrid's STP (segmentation, targeting, positioning) in one place before the sizing arithmetic that follows builds on it.

| Element | SwasthyaGrid's answer |
|---|---|
| Segmentation | India's roughly 780 districts [S23], segmented by whether the district already carries a central accountability structure for a composite performance score (the 112 aspirational districts [S19]), and by whether the state already produces a facility-level stock export (e-Aushadhi or an equivalent HMIS feed [S15][S35]) |
| Targeting | Aspirational districts first, because they already have a named accountable actor (the District Collector) and an existing scoring mechanism that rewards exactly the kind of improvement SwasthyaGrid produces [S19][S20]; a Rajasthan beachhead within that segment, because the prototype already runs on Rajasthan's own facility data [S31] |
| Positioning | Not a new system to learn, but a layer that reads a district's existing stock, bed and staff data and proposes what to do with it; positioned against "buy more" (procurement) and "hire more" (staffing), not against any existing information system, consistent with section 7's finding that no existing system does this specific job |

*Table 9.1's positioning row is the market-facing version of the contrarian thesis this document opens with in section 2: the pitch is not "we see what you cannot," it is "we move what you already have."*

### 9.2 The buying centre

A state-government sale moves through more than one named role, and SwasthyaGrid's design in section 8 is built to give each of those roles a specific, different thing to look at. Table 9.2 maps the buying centre.

| Role | Named actor | What they need from SwasthyaGrid |
|---|---|---|
| Signs | The State NHM Mission Director | A licence agreement priced within an existing NHM budget line, at a cost that is a small, defensible fraction of the district's own central allocation (Table 9.6 below) |
| Champions | The District Collector | A visible, attributable improvement to the district's own composite performance score, in which health and nutrition already carries 30% weight under the aspirational-district framework [S20] |
| Uses | The District Health Officer (DHO) | The daily morning view and the approval step described in section 8, requiring no new hardware and reading from data the district already produces [S31][A16] |
| Reports into the system | The facility pharmacist and medical officer | A single, low-friction confirmation step (section 8's step 5) added to a reporting routine they already run |
| Benefits | Patients at the facility level | Medicine, beds and staff available when needed, the outcome every number in sections 4 through 8 of this document is ultimately in service of |

*Table 9.2's second row, the champion, is the commercial reason the aspirational-district segment is targeted first in Table 9.1: the District Collector already has a personal, scored incentive to want the outcome SwasthyaGrid produces, before a single sales conversation happens.*

The five rows of Table 9.2 also set the order a sales motion has to follow, which matters because treating them out of order is a common failure mode in a government sale. A conversation that opens with the District Health Officer, the role that actually uses the product daily, before the State NHM Mission Director has agreed the budget line exists, risks building enthusiasm at a level of the buying centre that cannot itself authorise payment. Conversely, a conversation that opens only with the state level, without first having a specific district's Collector already asking for the tool, gives the Mission Director no concrete, locally championed case to point to when approving a new licence line. The sales motion this document assumes, consistent with the beachhead logic in section 9.6, is to secure a Collector's interest in a specific aspirational district first, using that interest to bring the conversation to the state level with a named champion already attached, rather than approaching the state level cold.

### 9.3 The ideal customer profile

Table 9.3 names the specific, checkable attributes a first customer district should have, distinct from the broader segmentation in Table 9.1.

| Attribute | What it looks like | Why it matters |
|---|---|---|
| Aspirational-district status | One of the 112 districts on NITI Aayog's own list [S19] | A named, incentivised champion (Table 9.2) already exists |
| An existing digital stock export | A live e-Aushadhi/DVDMS feed, or an equivalent HMIS export, that SwasthyaGrid can read without new hardware [S15][S35][A16] | Matches the six-week, no-new-hardware rollout claim examined in full in section 13 |
| A state willing to sign a data-sharing agreement | A state health department that has already run some form of digital reporting pilot, lowering the political cost of a new agreement | Reduces the single largest feasibility risk named in section 13's risk register |
| Geographic match to the prototype | A Rajasthan district, ideally one of the five the prototype already models (Jaipur Rural, Alwar, Bikaner, Udaipur, Kota) [S31] | The prototype's own facility data and the Kota-4 run (section 8.5) transfer directly, with no new data-modelling work |

*An aspirational district inside Rajasthan, matching every row of Table 9.3 at once, is the single strongest first-customer profile available, and it is the basis for the beachhead argument in section 9.6 below.*

Table 9.3's four attributes are deliberately written as checkable facts about a district, not as a soft description of a good cultural fit, because a state-level sale depends on a specific official being able to confirm each one before a conversation about price even begins. A state health department evaluating a new vendor relationship for the first time, with no existing digital-reporting history, faces an internal approval burden a state that has already run one or more digital pilots does not face to the same degree; this is why the third row of Table 9.3 is phrased around an existing pilot specifically, rather than around general technological capacity. The fourth row, geographic match to the prototype, is the single attribute unique to SwasthyaGrid at this early stage rather than transferable to any future customer: once a pilot runs in a non-Rajasthan district, this specific profile attribute stops mattering for that later district, which is consistent with Table 9.3 being read as a profile for the first customer, not as a permanent requirement for every customer that follows.

### 9.4 Bottom-up sizing, every step shown

Table 9.4 reproduces the NEXORA model's market-sizing block exactly as the model itself produces it [M], so every multiplication in this document's TAM, SAM, SOM and beachhead figures can be checked line by line.

| Segment | Districts | Annual licence | Annual value |
|---|---|---|---|
| TAM, all districts | 780 [S23][A04] | ₹12.0 L [A05] | ₹93.60 Cr a year [M] |
| SAM, aspirational districts | 112 [S19] | ₹12.0 L [A05] | ₹13.44 Cr a year [M] |
| SOM, year 3, base case | 80 [M] | ₹12.0 L [A05] | ₹9.60 Cr a year [M] |
| Beachhead, Rajasthan | 41 [S24] | ₹12.0 L [A05] | ₹4.92 Cr a year [M] |

*The ₹12.0 L annual licence behind every row of Table 9.4 is itself built from three components: a ₹4 L base, a per-facility tier of ₹14,000 across an assumed 50 facilities per district (₹7.0 L), and ₹1 L of support, for a district averaging 49.0 facilities in practice (38,241 facilities across 780 districts) [S01][S23][M]. SOM's 80-district year-3 figure is 10.3% of the 780-district TAM [M], a share this document treats as what the model derives from the revenue path in section 11, not as an independently sized target.*

### 9.5 Bottom-up sizing checked against a top-down figure

A bottom-up number built entirely from the firm's own assumed pricing can look circular unless it is checked against an outside figure the firm does not control. Table 9.5 runs that check against the Union government's own published health budget.

| Step | Figure | Tag |
|---|---|---|
| Union NHM allocation, 2025-26 | ₹37,227 Cr (37% of the Health and Family Welfare Ministry's ₹99,859 Cr budget) | [S18] |
| Divided across 780 districts | ₹47.73 Cr of central NHM allocation per district, on average | [S18][M] |
| SwasthyaGrid's ₹12 L annual licence, as a share of that per-district allocation | 0.25% | [A05][S18][M] |

*A licence costing a quarter of one percent of the central health allocation a district already receives each year is a small enough figure that it does not need the state to find a new budget line; it needs the state to redirect an existing one. This cross-check is a sanity bound on the bottom-up sizing in Table 9.4, not a second, independent method of sizing the market: both figures ultimately rest on the same ₹12 L licence assumption, so Table 9.5 confirms the licence is affordable at the stated price, it does not independently confirm the price itself.*

### 9.5a How sensitive the sizing is to its own inputs

Every figure in Table 9.4 depends on three inputs this document has treated as fixed: the district count, the annual licence price, and the number of facilities a district licence covers. None of the three is certain, so Table 9.5a reports how far the year-3 ARR (annual recurring revenue) figure moves if each input is varied on its own, holding the others at the base case, using the NEXORA model's own sensitivity block [M].

| Input varied | Low end | Base case | High end | Resulting year-3 ARR range |
|---|---|---|---|---|
| Districts licensed by year 3 | 50 | 80 | 105 | ₹6.00 Cr to ₹12.60 Cr [M] |
| Annual licence price (ACV) | ₹9 L | ₹12.0 L | ₹15 L | ₹7.20 Cr to ₹12.00 Cr [M] |
| Facilities per district (feeding the ACV build) | 35 (ACV ₹9.9 L) | 49.0 (ACV ₹12.0 L) | 65 (ACV ₹14.1 L) | ₹7.92 Cr to ₹11.28 Cr [M] |

*Table 9.5a shows that the district-count input moves the year-3 figure the furthest of the three, from ₹6.00 Cr to ₹12.60 Cr, which is the reason section 13's feasibility analysis and section 15's roadmap both treat the pace of district signing, not the price itself, as the single most consequential unknown in the revenue path. The licence price and the facility-count input each move the result by a narrower band, because both are already bounded by the external pricing evidence in Table 9.7 below, rather than left open-ended.*

### 9.6 Why Rajasthan, and why now

Table 9.6 sets out the beachhead logic and the market-timing argument together, because both rest on the same underlying facts.

| Factor | Evidence | Tag |
|---|---|---|
| Rajasthan's size | 41 districts, after the state's 2024 decision to scrap 12 newly created districts and 3 divisions | [S24] |
| Rajasthan's aspirational-district count | 5 of Rajasthan's 41 districts (Baran, Dholpur, Jaisalmer, Karauli, Sirohi) sit on the national 112-district list | [S19] |
| Prototype geography match | The prototype already models 5 Rajasthan districts (Jaipur Rural, Alwar, Bikaner, Udaipur, Kota) | [S31] |
| A near-universal digital patient identity now exists | 95.99 crore ABHA (Ayushman Bharat Health Account) IDs created as of 31 July 2026 | [S21] |
| The national health budget line SwasthyaGrid rides is large and growing | NHM allocation ₹37,227 Cr in 2025-26, 37% of the ministry's total budget | [S18] |
| An existing digital stock ledger already covers most states | 31 States and Union Territories already monitored through the e-Aushadhi central dashboard | [S15][S35] |

*Table 9.6's last three rows answer "why now" independently of the Rajasthan-specific beachhead argument: a licensable digital identity layer, a growing dedicated health budget line, and an already-widespread stock ledger are each a precondition SwasthyaGrid's own layer depends on, and each became true only in roughly the last several years, not a decade ago.*

The Rajasthan beachhead argument rests on more than convenience. A state-level buyer evaluates a new district-level tool against the cost of a failed pilot, not only against the cost of a successful one, and a state where the prototype's own facility data, roster structure and transfer rules already match the ground reality lowers that failure cost specifically, rather than generally. Choosing a state where the product already works on that state's own simulated geography means the first real pilot tests whether the mechanism holds up against real, not simulated, data, rather than testing the mechanism and the product's basic geography fit at the same time. This is also why the beachhead argument in Table 9.6 is built narrower than "start somewhere easy": it is built as "start where the single largest unknown, does the mechanism transfer from simulated to real data, is isolated from a second unknown, does the mechanism work in an unfamiliar facility network at all."

A further reason the aspirational-district segment specifically, rather than any arbitrary subset of 112 districts nationally, is targeted first is that the segment already carries an external, recurring measurement cadence SwasthyaGrid's own pitch depends on. NITI Aayog has published Delta Rankings for the Aspirational Districts Programme on a regular cycle since the programme's January 2018 launch across 112 districts, ranking districts on incremental, month-on-month change across 81 data points spanning six themes [S64]. That cadence means a District Collector in an aspirational district is already accustomed to being measured on short-interval improvement, not only on an annual review, which is the exact rhythm a daily coordination tool like SwasthyaGrid is built to support. Section 10.6 below returns to the Delta Ranking as a specific example of an existing public measurement system that records and ranks improvement without itself moving any resource between districts, which is the precise gap this document argues SwasthyaGrid fills.

### 9.7 Price positioning against the existing Indian HMIS and EHR market

SwasthyaGrid's ₹12 L licence does not exist in a vacuum; Table 9.7 places it inside the observed Indian pricing range for comparable hospital-management and electronic health record software.

| Price point | What it buys | Tag |
|---|---|---|
| ₹3 L a year, lower band | Entry-level Indian HMIS or EHR software, typically single-facility | [S25][A17] |
| ₹12 L a year | SwasthyaGrid's district licence, covering an average of 49.0 facilities | [A05] |
| ₹25 L a year, upper band | Enterprise-tier Indian EHR deployments | [S25][A17] |

*SwasthyaGrid sits inside the observed Indian market band, not above or below it, which this document treats as evidence the ₹12 L figure is a defensible price rather than an invented one; it is not evidence that any state has agreed to pay it, which section 13's feasibility analysis addresses directly as an unresolved risk.*

### 9.8 A labelled, later option: adjacent expansion beyond health

The aspirational-district structure SwasthyaGrid enters through is not unique to health, and this document names the adjacent possibility explicitly, as a later option rather than as a claim about today's product. The aspirational-geography concept is already being extended below the district level: the Aspirational Blocks Programme, launched 7 January 2023, covers 500 blocks across 27 states and 4 Union Territories, with the World Health Organization specifically supporting 52 blocks across 10 states on seven health indicators including institutional deliveries and antenatal care registration [S60]. The same District Collector who champions SwasthyaGrid's health licence (Table 9.2) is also the accountable actor for a district's nutrition and agriculture budget lines under the same aspirational-district scoring structure [S19][S20], which is the specific adjacency this document flags, not a commitment to build it. Separately, the procurement route a district licence would travel through already exists at scale: the Government e-Marketplace (GeM) serves about 138,000 sellers and 27,000 buyer organisations, processing 730,000 orders worth roughly ₹1,15,000 Cr to date, and has cut a sampled state purchase's delivery time from 30 to 60 days down to 10 to 15 days [S61]. Neither fact changes SwasthyaGrid's product scope today; both are recorded here because section 15's roadmap references the same aspirational-geography logic when it discusses what comes after the first 80 districts, and a reader checking that later claim should find its basis stated plainly here rather than asserted without support.

The Aspirational Blocks Programme matters to this document for a second, more specific reason beyond simply naming a later option. It is direct, recent evidence that the Indian government's own aspirational-geography model, the same model SwasthyaGrid's beachhead strategy in Table 9.6 rides into its first 112 districts, is actively being extended rather than left static: a programme launched in January 2023 at the sub-district, block level, already running in 500 blocks with a named multilateral partner supporting a specific subset on specific health indicators [S60], is evidence that the institutional appetite for this kind of targeted, scored geography is growing, not shrinking, at the exact moment SwasthyaGrid is entering the market. A reader sceptical that a single licensing model can expand meaningfully beyond its first 112 districts should read the Aspirational Blocks Programme's own growth, from a 2018 district-level programme covering 112 units to a 2023 block-level programme covering 500 units within five years, as the single clearest piece of outside evidence that the geography SwasthyaGrid is built around is not a one-time policy experiment but a structure the Indian government keeps choosing to re-apply.

The GeM figures in this section serve a narrower, more mechanical purpose: they describe the channel a district licence agreement would actually travel through once a state decides to buy, not a reason to buy in the first place. A district or state government does not typically negotiate and pay a vendor outside its existing procurement infrastructure, and GeM's own reported improvement, cutting a sampled state purchase's delivery time from a 30-to-60-day range down to 10 to 15 days [S61], is relevant to section 13's six-week rollout claim specifically: if the procurement step itself can complete inside two to three weeks on a platform that already serves 27,000 buyer organisations [S61], the six-week plan's own schedule, which assumes a signed agreement in its first week, is consistent with how a comparable government purchase is reported to move today, rather than resting on an optimistic guess about procurement speed.

Both of this section's two outside data points, the Aspirational Blocks Programme and GeM's own reported processing times, are deliberately treated as corroboration for a claim made elsewhere in this document, not as new, independent sizing inputs. Neither figure feeds the TAM, SAM, SOM or sensitivity arithmetic in Tables 9.4 and 9.5a, and neither figure changes the ₹12 L licence price or the district counts behind it. Their only role in this document is to show that the two structural assumptions the beachhead and rollout arguments depend on, a growing aspirational-geography model and a workable state-level procurement channel, are independently observable facts about how Indian public-sector administration already operates, rather than assumptions this document is asking a reader to accept on faith.

### 9.9 What this section establishes, and what it does not

This section's close deliberately separates two claims a less careful sizing exercise would run together: the claim that the market opportunity is large enough to justify building the product, and the claim that any specific district, state or official has agreed to pay for it. Tables 9.4 through 9.7 establish only the first claim, built bottom-up from a district count and a licence price this document can defend line by line, and checked against the state's own NHM allocation so the price itself is shown to be affordable rather than merely large on paper.

This section has sized a market bottom-up, checked it against a top-down figure that does not depend on the firm's own pricing, and named the specific buying centre and ideal customer profile the beachhead strategy targets. It has not established that any state health department has agreed to pay the stated price, signed a data-sharing agreement, or committed to a pilot; section 13's feasibility analysis and Appendix E's validation plan both treat that gap as open, and this document never states otherwise. Section 10 turns to why, specifically, this layer is the one none of India's existing public health information systems has built.

---

## 10. Innovation: rebalancing before procuring is the layer nobody has built

**Answer.** SwasthyaGrid's contribution is narrow and specific: it is the only layer in India's current public health information architecture that combines a cross-facility, cross-category stock and capacity view with a ranked transfer proposal and a human sign-off, a gap section 7 of this document already showed no existing system fills [S12][S15][S35]. Measured against the ERRC grid (eliminate, reduce, raise, create) [S28], the 7 Powers framework [S29] and a VRIO test, the honest finding is that SwasthyaGrid's advantage today sits almost entirely in process power and a first-mover data position, not yet in a defensible moat; this section names that limitation itself, before a judge raises it, and sets out the three strongest objections to the innovation claim together with the specific answer to each.

### 10.1 The ERRC grid

Table 10.1 applies Kim and Mauborgne's Eliminate-Reduce-Raise-Create grid [S28] to SwasthyaGrid's design against the two most comparable existing approaches: a manual, phone-based coordination routine, and a passive recording ledger such as e-Aushadhi/DVDMS [S15].

| Action | What SwasthyaGrid does |
|---|---|
| Eliminate | The phone call as the only way a district officer learns what a neighbouring facility currently holds |
| Reduce | The number of decisions an officer must make each morning, from one judgement call per facility checked manually to one approval per flagged item, ranked and sized already |
| Raise | The speed from a flagged shortage to a sized, actionable proposal, and the permanence of the record once a decision is made (Table 8.6's audit trail) |
| Create | A transfer proposal that crosses facility boundaries inside a district automatically, something no existing recording or monitoring system in section 7's matrix generates on its own |

*Table 10.1's "create" row is the specific innovation claim this section defends: no existing system in the capability matrix built in section 7 generates a cross-facility transfer proposal; every one of them records or reports, and none of them proposes a move.*

### 10.2 A strategy canvas against the two closest comparisons

Table 10.2 scores SwasthyaGrid against a passive ledger system (e-Aushadhi/DVDMS) and against eVIN, the vaccine-specific precedent this document leans on, across six factors, each scored 1 to 5, with the reason for each score stated so no number stands alone.

| Factor | Ledger system (e-Aushadhi/DVDMS) | eVIN | SwasthyaGrid | Reason |
|---|---|---|---|---|
| Cross-facility visibility | 4 | 4 | 4 | All three give a cross-facility view within their scope; this is a shared capability, not a differentiator [S15][S12][S31] |
| Scope beyond a single product category | 4 | 1 | 4 | The ledger covers all medicines; eVIN is vaccine-only; SwasthyaGrid covers medicines, beds and staff together [S15][S12][S31] |
| Automated transfer proposal | 1 | 1 | 4 | Neither comparison system proposes a specific move between facilities; this is SwasthyaGrid's narrowest and strongest point of difference [S15][S12][S31] |
| Human sign-off workflow | 1 | 2 | 4 | eVIN's cold-chain logistics include some human steps, but neither system is built around a named officer approving a specific proposed transfer [S12][S31] |
| Proven result at scale | 2 | 5 | 1 | eVIN has a measured, reported result (over 80% fewer vaccine stock-outs) across 733 districts [S12]; SwasthyaGrid has one simulated-data run at one facility [S31] |
| Resourcing behind the rollout | 3 | 5 | 1 | eVIN scaled with UNDP, Gavi and Logistimo as named partners [S27]; SwasthyaGrid today is a single-founder prototype with no funding claimed |

*Table 10.2's bottom two rows are the honest counterweight to the top four: SwasthyaGrid scores well on design novelty and scores poorly on proof and resourcing, exactly the two things eVIN scores highest on. The innovation claim in this section rests on the top four rows; the feasibility case in section 13 and the validation plan in Appendix E exist specifically to close the gap in the bottom two.*

### 10.3 The 7 Powers test

Hamilton Helmer's 7 Powers framework asks which of seven sources of sustainable differential returns applies to a business, and when each would start to take effect [S29]. Table 10.3 runs SwasthyaGrid through all seven, naming the evidence that would prove each one rather than asserting it already holds.

| Power | Applies to SwasthyaGrid? | When it would start | Evidence that would prove it |
|---|---|---|---|
| Scale economies | Not yet | After several dozen districts are live, if per-district support cost falls as the customer base grows | A falling support cost per district, tracked district by district |
| Network economies | No | Never, in this design: one district's data does not make another district's view better | Not applicable; flagged here for completeness |
| Counter-positioning | Partially | From the first signed district onward | An incumbent ledger system choosing not to add a transfer-proposal feature, because doing so would require it to accept the approval-workflow and audit-trail commitments Table 8.6 names |
| Switching costs | Not yet | After a district has a full year of audit-trail history built up in the system | A district renewing its licence specifically because starting over elsewhere would mean losing that history |
| Branding | No | Not a relevant power for a government buyer | Not applicable |
| Cornered resource | Partially | Today, narrowly | The simulated-data prototype and the Kota-4 run are a resource no competitor currently has, though they are a demonstration, not a dataset of real operational value yet [S31] |
| Process power | Yes, the strongest candidate today | Already, in the specific design choices in sections 8.1, 8.2 and 8.7 | The daily five-step loop, the fixed thresholds, and the single-ranked-proposal pattern (chosen specifically against the alert-fatigue evidence in section 8.7 [S63]) are a process a competitor would need time to copy correctly, not just announce |

*Table 10.3's honest conclusion is that process power is the one source of advantage SwasthyaGrid can claim today with a straight face; every other power in the framework is either not applicable to this business or depends on evidence that does not exist yet. This is a materially more modest claim than "a seven powers moat," and it is the claim this document makes.*

### 10.4 A VRIO test on the core capability

Table 10.4 runs the VRIO test (Valuable, Rare, Inimitable, Organized) against the single capability this section has defended throughout: the cross-facility, cross-category transfer-proposal-with-sign-off loop described in section 8.

| VRIO question | Answer | Why |
|---|---|---|
| Valuable? | Yes | Section 9's buying-centre analysis shows a named champion (the District Collector) with a scored incentive to want exactly this outcome [S20] |
| Rare? | Yes, today | Section 7's capability matrix found no existing Indian public health information system combines this capability [S12][S15][S35] |
| Inimitable? | Not yet proven | Nothing in the design (daily thresholds, a ranking rule, an approval screen) is technically difficult to copy once it is known to work; the claim rests on being first to prove it works at district scale, not on a hard-to-replicate mechanism |
| Organized to capture it? | Partially | A single-founder team today, with a stated hiring sequence tied to pilot fees (section 13), is organized enough to run a pilot, not yet organized at the scale a multi-state rollout would require |

*Table 10.4's third row is the section's central honesty: the capability is rare today because no one has built it and proven it yet, not because it is hard to build once someone has. The business case for moving quickly, described in section 13's roadmap, rests on this exact point.*

Read together, Tables 10.3 and 10.4 point to the same conclusion from two different frameworks: neither the 7 Powers test nor the VRIO test finds a durable technical moat behind SwasthyaGrid's mechanism. What both tests do find is a time-bounded advantage tied to being the first to run the mechanism successfully, at district scale, on real rather than simulated data. That is a materially weaker claim than most strategy decks make for their own innovation argument, and this document states it as weaker on purpose, because an inflated claim would not survive the same scrutiny this section applies to the contrarian thesis in section 10.5 below.

### 10.5 The contrarian thesis against its three strongest objections

Table 10.5 states the three objections most likely to be raised against the contrarian thesis in section 2 (misplacement, not absence, explains much of the shortage) and answers each directly, before a judge raises it.

| Objection | The answer |
|---|---|
| "The CAG's expiry findings and the availability studies measure different things, in different places and years; you cannot infer one from the other." | This document agrees, explicitly, in section 6: the paradox is stated as an inference from two independent evidence sets, not as a measured link between the same items in the same months at the same facilities. The honest limit is named, not hidden, and the case for SwasthyaGrid does not require the two figures to describe the identical stock-keeping unit, only that both a shortage and a surplus exist inside the same state's supply chain at overlapping times |
| "eVIN's 80% result is for vaccines, inside a differently resourced, donor-backed rollout; it will not transfer to medicines run by a single-founder start-up." | Section 7.3 of this document makes the same point before this objection is raised: eVIN is a precedent for the mechanism class, not a forecast for this specific implementation. Section 14's impact model uses a bear, base and bull range, with the base case at half of eVIN's reported reduction rate, precisely so no single number borrows eVIN's result wholesale |
| "If the mechanism is this straightforward, an existing vendor (e-Aushadhi's operator, or a state's own IT department) could build the transfer-proposal layer itself, at lower switching cost to the state than adopting a new product." | This is the most serious objection, and Table 10.3's counter-positioning row names the actual reason it has not happened: adding a transfer-proposal workflow requires the incumbent to accept a named-officer approval step and a permanent audit trail (Table 8.6) that a passive recording system was never built to carry, which is an organizational and accountability commitment, not a small software change. SwasthyaGrid is not betting that the feature is hard to build; it is betting that committing to the accountability structure around it is the harder step for an incumbent whose current product is a ledger, not a decision-support workflow |

*Table 10.5's third row is the objection this document takes most seriously, because it is the one future competitors are most likely to act on; section 13's roadmap and stop rules exist in part because of this specific risk.*

### 10.6 A precedent for measurement without rebalancing

Section 9.6 of this document flagged that NITI Aayog's Delta Ranking already gives aspirational-district officials a recurring, short-interval measurement cadence, published since the Aspirational Districts Programme's January 2018 launch across its 112 districts, ranking incremental month-on-month change across 81 data points in six themes [S64]. That ranking is itself a useful, independent illustration of this section's core finding, stated at the level of India's wider public-sector measurement apparatus rather than only its health-specific systems: the Delta Ranking identifies which districts and which indicators are lagging, in public, on a recurring schedule, and is explicitly intended to spur competitive federalism between states and districts [S64]. It does not, and is not designed to, move a single rupee, bed or unit of medicine between the districts it ranks. A district that falls in the ranking learns that it is falling; it does not receive, from the ranking itself, a specific, actionable proposal for what to do about it the next morning. This is the same structural gap section 7's capability matrix found inside India's public health information systems specifically, restated here at the level of a parallel, non-health public measurement system, which strengthens rather than narrows the innovation claim: the pattern of recording and ranking without rebalancing is not an accident specific to the health sector's five systems, it is a more general feature of how Indian public-sector performance measurement is typically built, and SwasthyaGrid's narrow contribution, a ranked, actionable transfer proposal with a human sign-off, is the layer that pattern is missing wherever it appears.

### 10.7 What SwasthyaGrid will not build

A claim about what a product will not do is as much a part of an honest innovation argument as a claim about what it will do. Table 10.6 states four explicit exclusions.

| What SwasthyaGrid will not build | Why |
|---|---|
| A new national health database | Health is a State List subject under the Seventh Schedule of the Constitution [S13]; a single national database would duplicate, and likely conflict with, the state-by-state architecture every existing system in section 7 already follows |
| Any patient record | Section 8.8's guardrail keeps personal data out of scope entirely, avoiding the consent and security obligations the Digital Personal Data Protection Act, 2023 attaches to personal data [S14] |
| Automatic ordering, without a human sign-off | Section 8.8's human-approval guardrail is treated as permanent, not as an interim step toward automation; section 8.7's alert-fatigue evidence [S63] is itself an argument against ever removing the sign-off step |
| New hardware for any facility | The design reads a stock export a district already produces [S15][S35][A16]; a hardware requirement would contradict the six-week, no-new-purchase-line rollout claim examined fully in section 13 |

*Table 10.6's exclusions are not a roadmap of features deferred to a later release; they are boundaries this document treats as part of the product's identity, consistent with the guardrails in section 8.8 and the "move first, buy for the gaps that remain" thesis in section 2.*

Each row in Table 10.6 is also, read the other way round, a reason a buyer might trust SwasthyaGrid faster than a broader, harder-to-scope product: a state evaluating a vendor that promises a national database, patient records, automatic ordering or new hardware is evaluating a larger, slower, more expensive commitment than a state evaluating a narrow layer that reads existing exports and stops short of automation. The narrowness this table states is therefore not only an ethical and legal boundary; it is also, independently, part of the feasibility case section 13 builds in full.

### 10.8 What this section establishes, and what it does not

This section has shown, using three named strategy frameworks, that SwasthyaGrid's narrowest and most defensible claim is a process-power advantage in a specific, previously unbuilt capability, not a broad, already-proven moat. It has not established that the capability is hard for a well-resourced incumbent to copy once SwasthyaGrid proves it works, and Table 10.5's third row names that risk directly rather than minimising it. Part D of this document takes up the business's durability on three further dimensions, People, Planet and Profit, together with the business model canvas that ties section 9's buying centre to section 11's unit economics.


## 11. Sustainability: a 71% margin business that also cuts expiry and out-of-pocket spending

**Answer.** SwasthyaGrid's sustainability case rests on four legs, not one. The licence itself runs at a 71% gross margin in the base case, pays back customer acquisition cost in 5.6 months, and returns a lifetime value of ₹42.6 L against a ₹4 L cost, a 10.65x ratio [A05][A08][A09][M]. The same licence pays for itself for the buyer: a district that redeploys just 6.1% of Telangana's own audited annual expiry write-off, or 12.5% of Odisha's, toward higher-turnover facilities covers the entire ₹12 L fee [S16][S17][M][A14]. On the planet side, the model does not claim an emissions number it cannot measure, but it sits inside a health sector that Health Care Without Harm and Arup put at 4.4% of global net emissions, 71% of it supply chain [S22], and it displaces a disposal problem that CDSCO guidance and two state audits confirm is real and growing [S16][S17][S81]. On the people side, a stocked PHC shelf closes part of the 43.4% out-of-pocket share of India's health spending [S10], concentrated first in the 112 districts the government itself has flagged as most in need [S19][S20]. Institutionally, the licence rides a budget line that has grown every year since 2022-23 [S18][S82], sits inside a constitutional boundary that keeps every district's data with its own state [S13], and touches no personal data at all [S14]. Table 11.6 names the six conditions that would break this case and the signal that would show each one early.

### 11.1 Profit: how a ₹12 L licence becomes a 71% margin business

The licence price is not a round number chosen to look clean. It is built from three named components, each with its own basis, and Table 11.1 shows the build exactly as the model computes it.

**Table 11.1: Annual contract value build, base case**

| Component | Value | Basis |
|---|---|---|
| Base platform fee | ₹4 L | Covers the district-level dashboard, the morning view and the approval workflow [A05] |
| Per-facility tier | ₹7.0 L (50 facilities × ₹14,000) | Priced at the facility level because a district's cost to serve scales with the number of PHCs and CHCs it runs, not with its population [A07] |
| Support retainer | ₹1 L | One named support contact per district, phone and email, no on-site staff [A05] |
| **Total ACV** | **₹12.0 L** | ₹4 L + ₹7.0 L + ₹1 L [M] |

*ACV: annual contract value. PHC: primary health centre. CHC: community health centre.*

A district in the model's facility universe runs 49.0 facilities on average (38,241 facilities across 780 districts) [S01][S23][M], close enough to the 50-facility tier that the pricing band holds without a special case for most districts; the Appendix D sensitivity (section 12.3 of this document) shows what happens at 35 and 65 facilities.

Table 11.2 shows the unit economics that follow from this ACV, worked step by step rather than asserted.

**Table 11.2: Unit economics, base case, worked**

| Step | Calculation | Result |
|---|---|---|
| Gross margin | Benchmark-based assumption for Indian B2B SaaS [A08] | 71% |
| Gross profit per district per month | ₹12.0 L × 71% ÷ 12 | ₹0.710 L a month [M] |
| Customer acquisition cost (CAC) | Team estimate, state-level sales cycle [A09] | ₹4 L |
| CAC payback | ₹4 L ÷ ₹0.710 L | 5.6 months [M] |
| District licence life | Team estimate; government software contracts renew in multi-year cycles [A10] | 5 years |
| Lifetime value (LTV) | ₹12.0 L × 71% × 5 years | ₹42.6 L [M] |
| LTV : CAC | ₹42.6 L ÷ ₹4 L | 10.65x [M] |

A 10.65x LTV:CAC ratio and a 5.6-month payback both clear the rule-of-thumb bar investors and boards use for a healthy subscription business (a ratio above 3x and a payback under 12 months), and they do so even though the licence price itself is modest in absolute terms. The margin assumption is the single most load-bearing number in this table and it is labelled as an assumption rather than a measured result (A08 draws on Indian SaaS benchmark reporting, not on SwasthyaGrid's own billing history, because none exists yet) [S26].

Table 11.3 extends the unit economics to a three-year revenue path, scored on the bear, base and bull district counts the deck already carries, so the margin story and the growth story sit on the same page rather than in separate sections.

**Table 11.3: Revenue path, Rs crore, three scenarios [M]**

| Scenario | Districts (Y1, Y2, Y3) | ARR (Y1, Y2, Y3) | Onboarding fee (Y1, Y2, Y3) | Billings (Y1, Y2, Y3) | Y3 recurring share | Gross margin | Y3 gross profit |
|---|---|---|---|---|---|---|---|
| Bear | 12, 30, 50 | ₹1.44, ₹3.60, ₹6.00 Cr | ₹0.36, ₹0.54, ₹0.60 Cr | ₹1.80, ₹4.14, ₹6.60 Cr | 90.9% | 62% | ₹3.72 Cr |
| Base | 12, 45, 80 | ₹1.44, ₹5.40, ₹9.60 Cr | ₹0.36, ₹0.99, ₹1.05 Cr | ₹1.80, ₹6.39, ₹10.65 Cr | 90.1% | 71% | ₹6.82 Cr |
| Bull | 12, 60, 105 | ₹1.44, ₹7.20, ₹12.60 Cr | ₹0.36, ₹1.44, ₹1.35 Cr | ₹1.80, ₹8.64, ₹13.95 Cr | 90.3% | 76% | ₹9.58 Cr |

*ARR: annual recurring revenue, the year-end licensed districts multiplied by ACV [A13]. Billings: ARR plus the one-time ₹3 L onboarding fee charged on every newly licensed district in that year [A11]. Y3: the third full year of operation.*

The gap between ARR and billings is deliberate and the model never lets the two collapse into one another, a correction over deck B's own numbers that section 3 of this document documents in full. By Year 3, onboarding is a small fraction of total billings in every scenario (9.1% to 9.9%), which is the right shape for a business whose durable value is the recurring licence, not the one-time setup fee. The gross margin itself widens from 62% in the bear case to 76% in the bull case because a larger district base spreads the fixed cost of the support retainer and the platform engineering team across more licences, the standard SaaS mechanism, applied here to a public-sector buyer rather than a private one.

Table 11.4 shows how far the Year 3 result moves if any one input is wrong, because a sustainability case that only survives at the exact assumed values is not a sustainability case at all.

**Table 11.4: Sensitivity, Year 3 ARR, Rs crore (base case 9.60) [M]**

| Driver flexed | Low end | High end | Result range |
|---|---|---|---|
| Districts licensed by Year 3 | 50 | 105 | ₹6.00 Cr to ₹12.60 Cr |
| ACV | ₹9 L | ₹15 L | ₹7.20 Cr to ₹12.00 Cr |
| Facilities per district (and the ACV this implies) | 35 (₹9.9 L) | 65 (₹14.1 L) | ₹7.92 Cr to ₹11.28 Cr |

Every one of these three ranges keeps Year 3 ARR above ₹6 Cr, which is the bear-case floor in Table 11.3; the model's three levers do not have a combination inside the stated bounds that erases the business, though a joint shock (fewer districts and a lower ACV at the same time) would come closer, and the risk register in section 13 of this document treats that joint scenario explicitly.

A district-level break-even view completes the profit leg. A single district's ₹12 L annual fee is a fixed, known cost to the state; what it buys is not abstract, because the same district already loses multiples of that figure to expiry (section 11.2 below). Framed this way, the licence is not primarily a cost line competing against hiring or drug purchase, it is a cost line that pays for itself out of waste the district is already incurring, before any benefit from avoided stock-outs (quantified separately in section 14 of this document) is even counted.

### 11.2 Customer payback: the share of expired stock SwasthyaGrid must rescue to pay for itself

The clearest sustainability argument available to SwasthyaGrid is not a projection, it is an audited fact already on two state governments' own books. Telangana's state medical services corporation wrote off ₹390.26 Cr of expired drugs between 2016 and 2022, and separately issued ₹17.13 Cr of drugs to facilities with only 1 to 89 days of shelf life left [S16]. Odisha's state medical corporation wrote off ₹168 Cr of expired medicine between April 2019 and January 2025, including ₹47 Cr of unused COVID-19 medicines [S17]. Table 11.5 turns both audits into a per-district, per-year figure and then into the share of that figure a single SwasthyaGrid licence would need to redeploy to pay for itself.

**Table 11.5: Customer payback arithmetic, Telangana and Odisha [S16][S17][M][A14]**

| Step | Telangana | Odisha |
|---|---|---|
| Total expiry write-off (audited) | ₹390.26 Cr | ₹168.00 Cr |
| Period audited | 2016-22 (6.00 years) | Apr 2019 to Jan 2025 (5.83 years) |
| Write-off a year | ₹65.04 Cr | ₹28.80 Cr |
| Districts in the state | 33 | 30 |
| Write-off per district a year | ₹1.97 Cr | ₹0.96 Cr |
| SwasthyaGrid licence a year | ₹12 L | ₹12 L |
| Share of annual expiry the licence must redeploy to break even | 6.1% | 12.5% |

*The district counts behind this table are the two states' own administrative district totals at the time of the respective audits, used only as the denominator for a per-district average; this is a planning approximation, not a claim that every district in either state wastes an identical amount.*

Even at the more conservative Odisha ratio, a district officer only needs to move about one-eighth of the medicine that would otherwise sit on a shelf until it expires toward a facility that will actually use it before the fee pays for itself, with every stock-out day avoided after that an additional, uncounted return. This is the single strongest "why now" argument available to a pitch built around moving stock rather than buying more of it, because it does not depend on any number SwasthyaGrid itself produces; it depends only on numbers the Comptroller and Auditor General of India has already published.

Two limits deserve to be stated plainly rather than left for a judge to find. First, neither audit reports stock-outs for the same items in the same months as the expiry figures, so the "paradox" argued in section 2 and section 6 of this document is an inference from two independent evidence sets, not a single matched dataset. Second, the per-district average write-off understates the opportunity for the worst-affected districts and overstates it for the best-run ones; a district that already manages its stock well will recover less than ₹1.97 Cr or ₹0.96 Cr a year, and the pitch does not depend on every district matching the state average, only on the state average clearing the 6.1% to 12.5% bar.

### 11.3 Planet: SwasthyaGrid displaces waste, it does not claim an emissions number it cannot measure

Health care's own environmental footprint is large enough that the sector is now tracked as a climate actor in its own right rather than only as a service. Health Care Without Harm and Arup's global analysis puts health care at 4.4% of global net emissions, with 71% of that coming from its supply chain (medicines, medical devices, food, and other goods and services the sector buys), 17% from direct facility operations and 12% from purchased energy [S22]. This document uses the confirmed global figure rather than a country-specific share, because an India-specific "share of national footprint" claim sometimes attributed to the same report could not be located in it on verification and is not repeated here (a residual the deliverable's verification log records in full) [S22].

SwasthyaGrid sits inside the supply-chain slice of that footprint, specifically inside the waste sub-component of it: a drug that expires unused on a district shelf has already been manufactured, packaged, transported and stored, and its entire embedded environmental cost is realised with zero health benefit delivered. Every vial or strip SwasthyaGrid helps redeploy to a facility that will actually dispense it before expiry avoids that same embedded cost being incurred twice, once for the wasted unit and again for its eventual replacement. The model deliberately does not convert this into an avoided-emissions number, because no measured baseline exists for how much of the ₹390.26 Cr (Telangana) or ₹168 Cr (Odisha) write-off would actually have been reused versus simply over-procured regardless of visibility; stating a tonnes-of-carbon figure without that baseline would be exactly the kind of fabricated precision section 5 of the standing project rules prohibits.

Disposal of what does expire carries its own, separate environmental and governance risk, and current practice is uneven. India's Bio-Medical Waste Management Rules, 2016 govern facility-level disposal, and the Central Drugs Standard Control Organisation's May 2025 guidance requires distributors and stockists to return expired stock to manufacturers or dispose of it under those rules; unregulated disposal of expired medicine risks contaminating water supplies and feeding informal resale markets [S81]. At the household level, a mixed-method study in Bhubaneswar, Odisha found that 82.1% of surveyed households simply throw unused or expired medicine in the household dustbin rather than returning it through any regulated channel [S34], which is the household-level mirror of the same disposal gap at the institutional level. Table 11.6 sets these facts out as a before-and-after of what a visible, transferable stock position changes about this disposal picture.

**Table 11.6: What planned transfers replace in the disposal chain**

| Without district-wide visibility | With SwasthyaGrid's morning view |
|---|---|
| A facility holds near-expiry stock it cannot use quickly enough; it expires in place and is later written off and disposed of under the Bio-Medical Waste Management Rules, 2016 [S81] | The same near-expiry stock is flagged and a transfer to a higher-turnover facility within the district is proposed before expiry, so it is dispensed rather than disposed of |
| A state-level write-off (Telangana ₹390.26 Cr, Odisha ₹168 Cr) [S16][S17] is the only point at which the waste becomes visible to anyone outside the warehouse | A district officer sees the near-expiry risk weeks earlier, at the facility level, before it becomes an unavoidable write-off |
| Disposal volume and its associated cost and environmental burden track total procurement, largely independent of how well-matched that procurement is to local demand | Disposal volume tracks only genuinely surplus or genuinely unusable stock, after redistribution has had a chance to work |

A national policy benchmark helps size how far India still has to go on waste reduction generally, outside the health sector specifically. The UNEP Food Waste Index Report 2024 estimates about 50 kilograms of food is wasted per person a year in India, and India has not yet adopted a national target aligned to Sustainable Development Goal 12.3, which calls for halving food and retail waste by 2030 [S86]. This is cited here only to make a scope point: a medicine-specific waste target, which SwasthyaGrid's model implicitly works toward at the district level, sits one level below a national waste-reduction target that itself is still forming, so the deck's planet claim is deliberately narrow and deliberately modest rather than an appeal to a policy framework that does not yet exist for this sector.

### 11.4 People: a stocked shelf closes part of the 43.4% out-of-pocket gap

The people case for SwasthyaGrid starts from a single, well-established fact: out-of-pocket expenditure made up 43.4% of India's total health expenditure in 2022-23 [S10], and a material share of that spending happens because a public facility's shelf was empty on the day a patient needed something on it, pushing the patient to a private chemist at full market price. Every item SwasthyaGrid helps keep in stock at the public facility that is supposed to carry it is one fewer item a household has to buy out of pocket at the private alternative. The model does not attempt to convert this into a rupee figure saved per household, because no study ties SwasthyaGrid's specific stock-out reduction to private substitution spending; the 43.4% figure is cited as the scale of the problem this mechanism works against, not as a number SwasthyaGrid claims to move by a stated amount.

The first set of people who gain are concentrated by design rather than spread evenly. NITI Aayog's list of 112 aspirational districts [S19] is the segment SwasthyaGrid enters through first (section 9 of this document works the arithmetic in full), and health and nutrition carries a 30% weight inside the 49-indicator composite score NITI Aayog uses to rank these districts [S20], meaning the districts SwasthyaGrid is likeliest to reach early are also the districts where a stocked shelf moves the official development scorecard the most, not only patient experience.

A second, narrower group of people benefit disproportionately from one specific category of item: emergency and tracer medicines. India records about 58,000 snakebite deaths a year, with 70% concentrated in eight states (Bihar, Jharkhand, Madhya Pradesh, Odisha, Uttar Pradesh, Andhra Pradesh and Telangana combined, Rajasthan and Gujarat) [S06]. Anti-snake venom is one of the seven tracer medicines the SwasthyaGrid prototype catalogue tracks (plan section 5.4, assumption A03), and a facility that runs out of it on the day a bite patient arrives has no substitute available in the time that matters. Table 11.7 sets out who gains and on what basis, so the people argument reads as a named set of beneficiaries rather than an unspecific appeal to "communities."

**Table 11.7: Who gains when a district's shelf is reliably stocked**

| Beneficiary group | Why they gain | Evidence |
|---|---|---|
| Households who would otherwise buy from a private chemist | A stocked public facility substitutes for an out-of-pocket purchase | OOPE 43.4% of total health expenditure [S10] |
| Patients in the 112 aspirational districts | SwasthyaGrid's own entry sequencing concentrates coverage here first, and health is already 30% of how these districts are scored | 112 districts; health/nutrition 30% weight [S19][S20] |
| Snakebite patients in the eight worst-affected states | Antivenom is a tracer medicine with no substitute and a narrow treatment window | 58,000 deaths a year, 70% in 8 states [S06] |
| District health officers and medical officers | A visible district picture replaces the phone-calling described in section 5 of this document with a ranked, pre-computed proposal | Plan section 4 (what exists and what is planned) [S31] |
| Pharmacists and warehouse staff | Near-expiry stock is flagged before it becomes a forced write-off, reducing the share of their job that is disposal paperwork | Section 11.3 above [S81][S16][S17] |

The honesty rule that governs every claim in this document applies with particular force here: SwasthyaGrid has run no patient interviews, no household surveys and no measurement of avoided out-of-pocket spending. The people case above is a reasoned mechanism (visible stock reduces stock-outs reduces substitution spending), supported by independently sourced facts about the scale of each piece, not a measured outcome. Section 8 of appendix E sets out the interview plan that would begin to test it, and states plainly that none of it has been run.

### 11.5 Institutional durability: the licence rides a budget line, a constitutional boundary and a law already written

A social-impact pitch that depends on a donor grant or a one-time hackathon prize is not a durable business; the question a sustainability section has to answer honestly is what makes the revenue keep arriving after the first year. SwasthyaGrid's answer has four parts, and each rests on an institution that already exists rather than one the team would have to build.

First, the budget line. The National Health Mission's allocation has risen every year for which recent data exists: ₹28,859 Cr in 2022-23, ₹29,085 Cr in 2023-24, a ₹36,000 Cr budget estimate for 2024-25 [S82], and ₹37,227 Cr in 2025-26, 37% of the health ministry's total ₹99,859 Cr budget [S18]. A ₹12 L district licence is 0.25% of an average district's central NHM allocation of ₹47.73 Cr (₹37,227 Cr divided across 780 districts) [S18][M], small enough to sit inside existing digital-health or programme-support budget lines without requiring a new line item, and the line itself has not shrunk in any of the four years for which this document has data.

Second, the constitutional boundary. Health and hospitals sit in the State List under Entry 6 of the Seventh Schedule to the Constitution of India [S13], which is precisely why a single national supply database (the obvious answer this deck argues against in section 2) keeps stalling: no central authority can mandate it on a state that does not want it. SwasthyaGrid's model sells to one state health department for one district's use of its own data, which fits inside the constitutional boundary rather than fighting it; each state remains the owner and controller of its own district's data, both legally and in the product's own design.

Third, the data protection boundary. SwasthyaGrid's scope is deliberately narrow: stock, bed and roster data at the facility level, never a patient-identifiable record. The Digital Personal Data Protection Act, 2023 [S14] governs personal data; because no patient data is in scope, SwasthyaGrid's compliance burden is a fraction of what a patient-record system would carry, and a human officer's approval sits on every proposed transfer regardless.

Fourth, the financing-model lesson from the one precedent system that has already been through this exact transition. The eVIN vaccine cold-chain system was built with Gavi funding of USD 67 million between January 2014 and December 2022, routed through UNDP [S83]. Gavi's own 2023 programme audit of India found no comprehensive plan to transition all Gavi-funded eVIN costs, at both national and sub-national level, onto government budgets [S83], a donor-dependency risk the audit itself flags rather than one this document infers. UNDP's own account of the same programme states that built-in state-government ownership and continuous feedback from health officials helped transition the running cost of eVIN onto government budgets, specifically the National Health Mission, after donor funding ended [S84]. SwasthyaGrid draws the opposite-order lesson from this precedent: rather than build on donor funding first and attempt a government handover later (the sequence eVIN's own audit flags as incomplete), SwasthyaGrid charges a state health department from its very first district, so there is no donor-to-government transition to manage because no donor financing exists in the model at all.

A fifth, supporting fact completes the institutional picture without being load-bearing on its own: the Government e-Marketplace (GeM) is the standing central and state government procurement channel through which software and other recurring services are bought and renewed without a fresh one-off tender each cycle [S85]. This is cited only to establish that an institutional channel for a state to buy and renew a software licence already exists; it is not a claim that SwasthyaGrid is listed on GeM today. Table 11.8 draws all four institutional supports together against the risk each one answers.

**Table 11.8: Institutional durability, four supports and the risk each answers**

| Support | What it is | Risk it answers |
|---|---|---|
| NHM budget line, rising every year on record [S18][S82] | A standing, growing central health budget that already funds digital-health and programme-support spending | "The money runs out when the grant does" |
| Health as a State subject [S13] | A constitutional boundary that keeps data ownership and purchase decisions at state level | "A national mandate could override or duplicate this" |
| DPDP Act, 2023, no patient data in scope [S14] | A narrow data footprint and a human-approval design that sits below the compliance bar a patient-record system would face | "A data-protection ruling forces a redesign" |
| No donor financing in the model, charged from district one [S83][S84] | A revenue model that never depended on a donor-to-government transition in the first place | The exact transition gap Gavi's own audit found in eVIN [S83] |

Each of the four supports in Table 11.8 answers a named worry rather than asserting durability in general terms, which is the same discipline the risk table in section 11.7 applies in the opposite direction.

### 11.6 People, Planet and Profit, read together

Sections 11.1 to 11.5 each argue one leg of the sustainability case on its own terms, with its own tables and its own tags. Table 11.10 pulls the headline result from each leg onto a single page, so a reader who has only time for one table can still see the whole argument, with a pointer back to the full working behind each figure.

**Table 11.10: The three legs and institutional durability, one row per result**

| Leg | Headline result | Full working |
|---|---|---|
| Profit | 71% gross margin, 5.6-month CAC payback, 10.65x LTV:CAC, base case [A08][A09][M] | Section 11.1, Tables 11.1 to 11.4 |
| Customer payback | A district breaks even on its ₹12 L licence by redeploying 6.1% (Telangana) to 12.5% (Odisha) of its own annual expiry write-off [S16][S17][M][A14] | Section 11.2, Table 11.5 |
| Planet | Sits inside a sector that is 4.4% of global net emissions, 71% of it supply chain [S22]; displaces waste without claiming an unmeasured emissions figure | Section 11.3, Table 11.6 |
| People | Works against a 43.4% out-of-pocket share [S10], entered first through 112 districts where health already carries 30% of the composite score [S19][S20] | Section 11.4, Table 11.7 |
| Institutional durability | Rides an NHM budget line that has grown every year on record [S18][S82], inside a constitutional boundary that keeps data at state level [S13], with no donor-financing transition risk [S83][S84] | Section 11.5, Table 11.8 |

No single leg of this table is sufficient on its own to justify the pitch; a strong margin on a business nobody can durably fund would not survive, and a durable institutional fit on a business that loses money would not either. The case for sustainability is that all five rows hold at once, on the same ₹12 L licence, for the same district.

### 11.7 Sustainability risks: six conditions that would break this case, and the signal that would show it

No sustainability case is complete without naming, before a judge does, the specific ways it could fail. Table 11.9 lists six risks, each paired with the earliest observable signal that would show the risk is materialising, so the risks are falsifiable rather than rhetorical.

**Table 11.9: Sustainability risks and early signals**

| Risk | What would go wrong | Early signal |
|---|---|---|
| Data-sharing refusal | A state agrees in principle but will not sign a data-sharing MoU for its nightly stock export | No MoU signed by week two of a pilot engagement (plan section 11.14, assumption A16) |
| Adoption stalls | Officers see proposed transfers but decline to approve most of them | Approval rate below 50% of proposed transfers during a shadow-mode trial period |
| Budget line reversal | NHM or state digital-health allocation shrinks instead of growing | A year-on-year fall in the NHM allocation, which has not happened in any of the four years recorded here [S18][S82] |
| Expiry pattern does not generalise | Telangana and Odisha's audited expiry share (6.1% to 12.5%) overstates what a new state actually wastes | A pilot state's own facility audit shows an expiry write-off share below the lower end of that range [S16][S17][M] |
| Donor dependency creeps back in | A state or partner proposes routing payment through grant or donor funds rather than its own NHM-tagged budget line | Any proposed payment structure that resembles the unresolved Gavi-to-government transition gap found in eVIN [S83][S84] |
| Disposal regulation tightens | New facility-level disposal reporting requirements raise the operating cost assumed in the margin model | CDSCO or a state issues a new reporting rule for expired-stock returns beyond the existing Bio-Medical Waste Management Rules, 2016 [S81] |

Three of these six risks (adoption stalls, data-sharing refusal, expiry pattern non-generalisation) are directly testable inside the first six weeks of a pilot engagement, which is itself a sustainability argument: a business that can tell within six weeks whether its core mechanism is working in a new district carries much less downside than one that only finds out at renewal time a year later.

---

## 12. Business model canvas: one buyer, one budget line, one ₹12 L licence

**Answer.** SwasthyaGrid's business model has one buyer type (a state health department), one budget line it rides (the NHM-tagged digital-health allocation), and one priced product (a ₹12 L a year district licence, built from a ₹4 L base, a ₹7.0 L facility tier and a ₹1 L support retainer) [A05][M]. Table 12.1 lays out all nine blocks of the business model canvas with SwasthyaGrid's specific content in each, and Table 12.2 separates revenue streams from cost drivers with the assumption tag standing behind every figure, so a reader can see at a glance which numbers are fixed by a named source and which are the team's own estimate.

### 12.1 The nine blocks

**Table 12.1: Business model canvas**

| Block | SwasthyaGrid's content |
|---|---|
| Customer segments | State health departments, entered first through the 112 NITI Aayog aspirational districts [S19] and a Rajasthan beachhead of 41 districts [S24], then the remaining aspirational and general districts across about 780 districts nationally [S23] |
| Value propositions | A single morning view of every facility's stock, beds and roster across a district; a ranked transfer proposal sized to the nearest surplus; a named officer's sign-off before anything moves; no new hardware or purchase line required [S31] |
| Channels | Direct engagement with the State NHM mission director and the District Collector as the signing and championing authorities; data exchange through the state's existing e-Aushadhi or HMIS nightly export, not a new data feed [S15][S35] |
| Customer relationships | A named support retainer per district (one support contact, phone and email, no on-site staff) [A05]; renewal tied to the state's own multi-year government software contracting cycle [A10] |
| Revenue streams | Annual district licence (₹12 L) [A05][M]; one-time onboarding fee on every newly licensed district (₹3 L) [A11][M] |
| Key resources | The district-level visibility and transfer-ranking logic validated on simulated data for 40 facilities across five Rajasthan districts [S31]; the relationships with State NHM mission directors and District Collectors that a sales cycle builds over time |
| Key activities | Reading nightly stock, bed and roster exports; computing days-of-cover and ranking transfer proposals; routing proposals to a named officer for approval; confirming delivery at the receiving facility [S31] |
| Key partnerships | State health departments as the direct buyer and data partner; no vendor, cloud or model partnership named on any public-facing slide, consistent with the technology-near-zero framing of this pitch (plan section 1.2, decision D3) |
| Cost structure | Customer acquisition cost of ₹4 L per district, mostly a state-level sales cycle [A09]; a support retainer cost implicit in the 29% (base case) cost share against the 71% gross margin [A08]; onboarding delivery cost against the ₹3 L onboarding fee [A11] |

All nine blocks in Table 12.1 resolve to the same one buyer and one priced product named in this section's opening paragraph, which is itself the finding: a simple business model is being argued, not assumed.

### 12.2 Revenue streams and cost drivers, tagged

Table 12.2 restates the revenue and cost side of the canvas as a single ledger, so every rupee figure anywhere in this document traces back to the same small set of tagged inputs.

**Table 12.2: Revenue streams and cost drivers**

| Line | Value | Assumption tag | What it depends on |
|---|---|---|---|
| Annual district licence (ACV) | ₹12.0 L | A05 | ₹4 L base + ₹7.0 L facility tier (50 × ₹14,000) + ₹1 L support [M] |
| Facility price component | ₹14,000 per facility a year | A07 | Deck B's own pricing, inside the ₹3 L to ₹25 L Indian HMIS/EHR price band [S25] |
| One-time onboarding fee | ₹3 L per new district | A11 | Team estimate; chosen to reproduce deck B's own Year 1 and Year 2 billings exactly |
| Customer acquisition cost | ₹4 L per district | A09 | Team estimate for a state-level government sales cycle |
| Gross margin | 71% (base), 62% (bear), 76% (bull) | A08 | Indian SaaS benchmark reporting, not SwasthyaGrid's own billing history [S26] |
| District licence life | 5 years | A10 | Team estimate; government software contracts typically renew in multi-year cycles |
| Districts licensed by Year 3 | 50 (bear), 80 (base), 105 (bull) | A12 | Deck B's own district path, carried forward unchanged |

Two cost lines on this ledger are explicitly labelled team estimates rather than sourced benchmarks (A09, A11), because no comparable Indian district-level government software deal is publicly priced in enough detail to source them independently; this is stated here rather than left implicit, consistent with this document's rule that an assumption is never dressed up as a fact. The pricing component that is sourced (A07, inside the A17 band) [S25] and the margin benchmark (A08) [S26] are the two figures in this table that a buyer or a judge could independently check against the cited pages, and the self-check in section 0 of this document records both as directionally, not word-for-word, confirmed.

### 12.3 Why one buyer, one price, and no second revenue line

A canvas this narrow is a deliberate choice, not an unfinished one, and it is worth naming the alternatives considered and set aside rather than letting a judge assume they were never raised. Table 12.3 lists three revenue lines a comparable product could plausibly add, and the specific reason each was rejected for this pitch.

**Table 12.3: Alternative revenue lines considered and rejected**

| Alternative considered | Why it was rejected |
|---|---|
| Transaction fee on each transfer approved | Would create a perverse incentive to approve more transfers regardless of need, working against the human-approval guardrail that keeps the officer's judgement, not the vendor's revenue, in control of what moves [S31] |
| Data monetisation (selling aggregated stock or demand patterns to a third party) | SwasthyaGrid's guardrail is that state data stays with the state [S14]; a data-resale line would directly contradict that guardrail and would also require a patient-data compliance posture the product deliberately avoids |
| Per-seat or per-user licence (charging by number of officer logins rather than by district) | Would penalise exactly the behaviour the product wants to encourage, more officers checking the morning view rather than fewer, and complicates a single state buyer's procurement decision with a variable the buyer cannot forecast in advance |

Each rejected line would have added revenue on paper but at the cost of one of the four institutional supports in Table 11.8 (the data-protection boundary) or the product's own core guardrail (human approval, not automated action). A single annual district licence, flat regardless of how many officers log in or how many transfers get approved in a given month, is the only structure in this comparison that keeps the buyer's procurement decision simple, keeps the product's guardrails intact, and keeps the revenue line fully inside the NHM-tagged budget pattern described in section 11.5 of this document.

This narrowness is itself a sustainability argument, not a limitation to apologise for. A state procurement officer evaluating a new digital-health vendor has to clear fewer objections when the pricing is a single flat number per district per year than when it carries usage-based variables, a data-sharing clause beyond the nightly stock export already in place, or a seat count that changes the bill mid-year. The business model canvas in Table 12.1 and the revenue ledger in Table 12.2 are both, in effect, a case for why the simplest version of this business is also the most fundable one inside a state government's own procurement rules.

### 12.4 How the canvas changes as the buyer moves from pilot to scale

The nine blocks in Table 12.1 describe SwasthyaGrid at any point in its life, but three of them are worded for the state buying stage and are worth restating for the two earlier and later stages the roadmap in section 15 of this document works through in full. At the pilot stage (the first 12 districts in every scenario in Table 11.3), the channel block narrows further: the District Collector, who already carries 30% of the aspirational-district score on health and nutrition [S20], is frequently also the first point of contact rather than a mid-point in a longer sales cycle, because a pilot district's own leadership has a direct, personal incentive to show an early result. At scale (80 districts by Year 3, base case), the channel shifts toward the State NHM mission director as the primary relationship, because a state buying its fortieth or fiftieth district licence is renewing and expanding an existing procurement relationship rather than approving a new one, and the customer acquisition cost of ₹4 L per district [A09] is itself an assumption that should fall, not hold constant, once a state has already approved one district and is adding a second; this document does not build that falling-CAC effect into the model, because no evidence yet exists for how much it would fall, and overstating it would be the same kind of invented precision this document's honesty rules forbid elsewhere.

The cost structure block is the other one that moves. In the pilot stage, the ₹4 L CAC line in Table 12.2 is close to its full value because the sales cycle has to establish the product category itself, not just the vendor, to a buyer who has not seen anything like it before. At scale, the same conversation inside a state that already runs SwasthyaGrid in several districts is closer to a renewal and an expansion request than a new sale, which is the mechanism behind the margin widening from 62% in the bear case to 76% in the bull case shown in Table 11.3; the bull case is, in effect, the scenario in which this falling-CAC, falling-marginal-cost pattern plays out fastest.

A canvas built this way is deliberately conservative about what it assumes improves with scale. The licence price itself does not fall with volume (every district pays the same ₹12 L regardless of whether it is the state's first or fiftieth), because a state-level buyer values predictability in its own budget line over a volume discount it would have to renegotiate annually, and because the per-district cost SwasthyaGrid carries to support a district (the ₹1 L support retainer in Table 11.1) does not meaningfully fall with the number of other districts in the same state. What does fall is the cost of winning the next district, not the cost of serving one, and the model's three scenarios already capture that difference through the margin spread rather than through a separate pricing curve.


## 13. Feasibility: six weeks to a live district, three green tests and two amber

**Answer.** SwasthyaGrid clears three of five feasibility tests green and carries two amber, matching slide 8 exactly: technical and economic feasibility are green because the prototype already runs and the licence costs 0.25% of a district's National Health Mission (NHM) share [M], legal is green because the product reads stock counts with no patient identity and health sits with the State under the Constitution [S13][S14], while operational and schedule feasibility are amber because they depend on an officer's daily habit and a data memorandum of understanding (MoU) landing inside the first week [A16]. A district can go live six weeks after that MoU is signed, using data exports the state already produces, with no new hardware or purchase line [S31]. Six named risks (R1 to R6) each carry a one-line fix, and a pre-mortem names the five most likely ways a 2029 review could still find the pilot failed, written before a judge can ask the question.

### 13.1 TELOS: the five tests and why two stay amber

The TELOS test (Technical, Economic, Legal, Operational, Schedule) is the right framework here because it separates "can this be built" from "will this actually run inside a government department," which is exactly where social-impact pitches most often overstate themselves. Table 13.1 reproduces slide 8's rating exactly, with the evidence behind each cell.

**Table 13.1: TELOS feasibility test**

| Test | Evidence | Rating |
|---|---|---|
| Technical | A working prototype already runs on simulated data for 40 facilities in 5 Rajasthan districts, including the PHC Kota-4 transfer run (1.2 to 21.0 days of antiretroviral cover) [S31] | Green |
| Economic | The ₹12 lakh (L) annual licence is 0.25% of an average district's ₹47.73 Cr central NHM allocation [S18][M], and the licence is designed to pay for itself by rescuing 6.1% to 12.5% of a district's audited annual expiry loss [S16][S17][M] | Green |
| Legal | The product reads stock, bed and roster counts, with no patient identity in scope, so the Digital Personal Data Protection Act, 2023 is not triggered [S14]; health and sanitation sit on the State List, so each state's data stays inside that state's own systems [S13] | Green |
| Operational | The product only works if a district officer opens it every morning and acts on a proposal; nothing moves without that human step, and no district has yet formed that habit [S31] | Amber |
| Schedule | The six-week rollout below only holds if the data-sharing MoU is signed inside week 1; any slippage there pushes every later week by the same amount [A16] | Amber |

*TELOS: Technical, Economic, Legal, Operational, Schedule.*

Three green ratings and two amber is a more defensible claim than five green ratings would be. A pitch that rated every test green would be asking a judge to believe that a one-founder team already has a government habit formed and a signed MoU in hand, neither of which is true yet; naming the two real amber tests is what lets the green tests be trusted.

### 13.2 The six-week rollout, week by week

The sequence below matches the Gantt chart on slide 8 exactly: six weeks from a signed data MoU to two districts live. Table 13.2 adds the owner and the exit test for each week, which the slide's Gantt bar does not have room to carry.

**Table 13.2: Six-week rollout plan**

| Week | What happens | Owner | Exit test to move to the next week |
|---|---|---|---|
| W1 | Data MoU signed; one nodal officer named by the state [A16] | State NHM mission director, counter-signed by Team IdeaForge | A signed MoU and a named officer's contact details are both on file |
| W1 to W2 | The nightly e-Aushadhi or HMIS export is read and mapped into the district view [S15] | Team IdeaForge (founder, this week) | A full week of nightly files parses without a schema error |
| W2 to W3 | Facilities are onboarded and given logins | Nodal officer, with Team IdeaForge support | Every facility in the pilot district has a working login |
| W3 to W4 | Pharmacists and medical officers are trained on reading a warning and on approving a proposal [S31] | Team IdeaForge | Every trained user can read a days-of-cover warning unprompted |
| W4 to W5 | Shadow mode: officers compare each system proposal with their own phone-call judgement before trusting it | District health officer | At least half of system proposals are judged "I would have made that call too" |
| W6 | Go live in 2 districts | District health officer, with the state's sign-off | The first transfer is approved and the receiving facility confirms delivery [S31] |

*MoU: memorandum of understanding. HMIS: health management information system.*

The shadow-mode week (W4 to W5) is the single highest-value week in this plan, because it is the only week that tests the operational amber rating directly rather than assuming it away. An officer who spends a week checking the system's proposals against calls they would have made anyway is being asked to validate the product with almost no switching cost, since they keep doing exactly what they already do and simply watch whether the system would have told them the same thing sooner.

### 13.3 Data access: what the state already produces, and what has to be agreed

SwasthyaGrid's central feasibility claim is that it needs no new data collection, only a read of something the state already generates. Table 13.3 sets out what that export contains and what still has to be agreed before SwasthyaGrid can read it.

**Table 13.3: Data access, what exists and what needs an agreement**

| Data source | What it already contains | What still needs to be agreed |
|---|---|---|
| e-Aushadhi / DVDMS (drug supply ledger) | Stock-in, stock-out and balance quantities for every item at every facility the state has onboarded to the Central Monitoring System, which already covers 31 States and UTs [S15][S35] | A nightly export file in a format SwasthyaGrid can parse, and a named technical point of contact at the state drug-supply corporation |
| State HMIS (bed, staff, footfall) | Facility-level bed occupancy, staff roster and patient footfall counts reported monthly under the national HMIS framework that has run since 2008 [S101] | A more frequent (ideally daily or weekly) export than the monthly HMIS cadence the system was designed for |
| ABDM Health Facility Registry | Over 1,00,000 government and private health facilities already carry a verified, standard facility ID in this national registry, about 97% of them government facilities [S100] | No new agreement; SwasthyaGrid can use the existing facility ID rather than ask a state to build a new facility list from scratch |
| District-level sign-off | Nothing automatic; a human officer at district level today only knows their own facility's stock, not the district's | The data-sharing MoU itself (Table 13.2, week 1), plus the named nodal officer who will receive and act on proposals |

*HMIS: health management information system. ABDM: Ayushman Bharat Digital Mission. DVDMS: Drug Vendor Delivery Monitoring System.*

The fact that a national facility registry already carries verified IDs for most of India's health facilities [S100] matters more than it first appears. It means SwasthyaGrid's first technical task in a new state, building a clean facility list, is largely already done by the ABDM Health Facility Registry; the product has to read and link to an identifier that already exists rather than construct one, which is a smaller technical task than the six-week plan would need if no such registry existed.

### 13.4 Regulatory feasibility: two statutes, read plainly

Table 13.4 sets out the two statutes that bound this product's legal feasibility, stated as our own reading, with a note on where that reading would need counsel's confirmation before a live contract is signed.

**Table 13.4: Regulatory table**

| Instrument | What it says | What it means for SwasthyaGrid |
|---|---|---|
| Constitution of India, Seventh Schedule, List II, Entry 6 | Public health and sanitation, hospitals and dispensaries sit on the State List [S13] | A national database or a central mandate is not the right instrument; each state licenses SwasthyaGrid separately and that state's data stays inside that state's own systems |
| Digital Personal Data Protection Act, 2023 | Governs processing of personal data that can identify a living individual [S14] | SwasthyaGrid's district view carries stock counts, bed counts and roster counts, with no patient name, ID or clinical record in scope, so the Act's core obligations are not triggered by the product as designed |
| CDSCO guidance on disposal of expired and unused drugs (27 May 2025) | A dedicated national guidance document now exists on how expired stock should be disposed of [S103] | SwasthyaGrid's transfer proposals aim to move near-expiry stock to a facility that will use it before it expires; this guidance governs what happens to the stock SwasthyaGrid's proposals could not move in time, a boundary condition worth stating rather than leaving implicit |

*CDSCO: Central Drugs Standard Control Organisation.*

This reading is the team's own, not a lawyer's opinion, and a live contract with any state would need counsel to confirm the Digital Personal Data Protection Act's applicability to a stock-only product before the state signs, consistent with this document's rule that a legal claim is always hedged until confirmed.

### 13.5 Organisation: one founder, two hires tied to pilot fees

Table 13.5 is deliberately short, because the honest organisational state of this pitch today is short: one founder, a working prototype, and no funding claimed or asked.

**Table 13.5: Hiring sequence, tied to pilot fees**

| Stage | Role | Trigger | Why this one first |
|---|---|---|---|
| Today | Founder (Harsh Kawatra, Delhi Technological University) [A per plan decision D2] | Already in place | Builds and operates the prototype across 5 Rajasthan districts [S31] |
| First hire | State implementation lead | First district's onboarding fee (₹3 L) [A11] | The six-week plan in Table 13.2 needs a dedicated person running the MoU, training and shadow-mode weeks while the founder keeps building |
| Second hire | Data operations lead | Second district's recurring licence revenue begins | Running the nightly export pipeline (Table 13.3) for more than one or two districts at once needs a dedicated operator, not founder time |

No investment is claimed or asked in this pitch (plan decision D3); the hiring sequence above is funded entirely from onboarding fees and licence revenue as districts come on, which is itself a feasibility argument, since it means the team does not need outside capital to reach the point where a second and third hire are affordable.

### 13.6 Six risks, each with a fix

Table 13.6 reproduces the risk register from slide 8 exactly, including the probability and impact rating shown on the slide's three-by-three grid, with its mitigation and an early-warning signal added for depth.

**Table 13.6: Risk register, R1 to R6**

| Risk | What it is | Probability | Impact | Mitigation | Early-warning signal |
|---|---|---|---|---|---|
| R1 | Stale data: a facility's export lags or breaks | High | Medium | A freshness flag on every data point; a warning displayed, not hidden, when data is late | Any facility's last-updated timestamp older than 48 hours |
| R2 | Outbreak surge: a sudden demand spike (for example a dengue cluster) outruns normal transfer sizing | Medium | High | A buffer rule that sizes transfers more conservatively when a facility's draw-down rate is itself rising, not flat | A facility's weekly consumption rate rising faster than its stock refill rate for two consecutive weeks |
| R3 | Queue ignored: an officer lets proposals pile up unread | Medium | Medium | A daily service-level-agreement (SLA) alert that escalates an unread proposal after a set number of hours | Proposal queue depth rising day over day without a matching rise in approvals |
| R4 | State says no: a state declines to sign the data MoU after serious engagement | Low | High | Start with one district inside a state that has already shown interest, rather than seeking a state-wide agreement first | A state's nodal contact going unresponsive for more than two weeks after a serious first meeting |
| R5 | Weak signal: poor network connectivity at a rural facility blocks real-time reporting | High | Low | Offline data entry with a sync-when-connected design, so a facility is never blocked by a bad signal | Any facility reporting more than one missed sync window in a week |
| R6 | Solo founder: one person cannot run sales, delivery and product work at once past a handful of districts | Medium | Medium | Hire from pilot fees exactly as Table 13.5 sets out, before taking on a third district | Founder-reported time on sales or support crowding out product work for more than one week |

The grid's own shape carries a finding worth stating plainly: the two risks rated highest on impact (R2, outbreak surge, and R4, a state's refusal) are both rated lower on probability than the risks that threaten day-to-day reliability (R1, stale data, and R5, weak signal). That ordering is itself a design choice; a team that spent its limited early engineering time hardening against a low-probability state refusal instead of a high-probability data-freshness problem would be solving the wrong risk first.

### 13.7 Pre-mortem: it is 2029 and the pilot failed

A pre-mortem (Kepner-Tregoe family) asks the team to imagine the failure has already happened, then work backward to the cause, which surfaces risks that a forward-looking plan tends to miss because it is busy describing success. Table 13.7 runs that exercise for SwasthyaGrid, naming the five most likely reasons a 2029 retrospective would give for why the pilot did not scale past its first two districts.

**Table 13.7: Pre-mortem, five likely reasons a 2029 review would give for failure**

| Reason | What it would look like | Which risk or test it traces back to |
|---|---|---|
| The habit never formed | Officers kept making phone calls alongside the system rather than instead of them, so adoption stayed below the 50% shadow-mode bar and never crossed into daily reliance | Operational amber (Table 13.1); risk R3 |
| Data quality mirrored HMIS's known weakness | The nightly exports the state produced for its own HMIS were themselves the kind of incomplete, poorly monitored data the national HMIS has been documented to produce since at least 2013, and SwasthyaGrid inherited that weakness rather than fixing it [S101] | Schedule amber (Table 13.1); risk R1 |
| A second state never signed | The first district proved the mechanism, but the founder's limited time, as a single person running sales and delivery at once, meant no second state's MoU closed within the hiring-trigger window in Table 13.5 | Risk R6 |
| The expiry paradox did not generalise | A pilot state's own facility audit showed an expiry write-off share below the 6.1% to 12.5% range the Telangana and Odisha audits implied, so the licence's self-funding case weakened in that state [S16][S17][M] | Economic green rating under renewed stress; sustainability risk table (part D, section 11.7) |
| The outbreak case broke trust early | A dengue-season surge (risk R2) outran the buffer rule in its first live test, moving stock too slowly during the one period officers most needed it, and the resulting distrust outlasted the fix | Risk R2 |

Two of these five reasons (data quality and the habit never forming) are the ones this feasibility section rates amber rather than green, which is the honest outcome of running a pre-mortem properly: the exercise should point back at the risks the team has already flagged as its weakest points, not surface an entirely new and more comfortable failure story.

### 13.8 What would move a rating from amber to green, or from green to red

Table 13.8 closes this section with the condition that would change each TELOS rating, so a reader can see exactly what evidence would need to arrive before the next pitch of this deck could claim a fully green feasibility page, and what evidence would force a downgrade.

**Table 13.8: What changes each TELOS rating**

| Test | Moves from amber to green when... | Would move toward red if... |
|---|---|---|
| Operational | A full shadow-mode period in one district shows at least half of proposals judged correct by the officer who would otherwise have made that call | A shadow-mode trial runs and approval stays below 50% after four weeks, which is itself the roadmap's stated stop rule (section 15) |
| Schedule | A signed data MoU exists in hand, with a named nodal officer and a confirmed export format, before the six-week clock starts | A state engages seriously for more than eight weeks without signing, which risk R4's mitigation (start with one interested district) is built to avoid |
| Technical (stays green, risk of slipping) | No change needed; remains conditional on R1 and R5's mitigations holding at scale beyond 40 facilities | A second pilot state's export format differs enough from the first that the nightly-parse exit test in Table 13.2 fails repeatedly |
| Economic (stays green, risk of slipping) | No change needed at current pricing | A pilot state's own audited expiry share falls below the lower end of the 6.1% to 12.5% range this document and part D both flag as the condition that would weaken the payback case [S16][S17][M] |

Every rating in Table 13.8 can move in either direction on a named, checkable event, which is what keeps the TELOS page from reading as a fixed verdict rather than a live assessment.

### 13.9 Why a feasibility section earns more trust with two ambers than with none

A reader who has seen enough case-competition pitches will recognise a specific pattern this section deliberately avoids: the feasibility slide that rates every test green because the team has not yet separated what it has built from what it hopes a government partner will do. The two amber ratings in Table 13.1, operational and schedule, are both ratings this team controls the least, because they depend on another organisation's officer forming a daily habit and another organisation's legal department signing a document inside a stated week. Rating either of those green would have required either inventing evidence that does not exist (a habit no officer has yet formed, because no district is live) or quietly redefining the test to mean something easier to satisfy. Neither path was taken. The amber rating is, in a sense, this section's own moneyshot: a single word, repeated twice, that tells a judge more about this team's self-assessment than any green rating could, because a green rating is what every pitch claims and an honestly placed amber is what almost none of them show.

This same discipline explains why the risk register in Table 13.6 assigns its highest-impact cells (R2, R4) lower probability than its highest-probability cells (R1, R5). A team under pressure to look thorough often inflates probability ratings across the board, since a long list of "high probability, high impact" risks reads as diligence. The register here instead keeps the two dimensions honestly separated, because collapsing them would make the register less useful precisely where it should be most useful: telling a district implementation lead which of six risks to check first on a Monday morning. The answer, read off the register correctly, is R1 and R5, the two risks rated high on probability regardless of their impact rating, not R2 or R4, which feel more dramatic but are rated far less likely to occur in any given week.

The same logic applies to how this section sequences its own defensive work. A weaker version of this feasibility section would have led with the risk register, because a long list of named risks with fixes attached reads as thorough on first glance. This section instead leads with TELOS, because TELOS forces the amber ratings to appear first, before any mitigation has had a chance to soften them, and only afterward does the risk register show exactly how each amber-adjacent risk is being managed day to day. Ordering the evidence this way means a reader who stops reading after Table 13.1 still has the single most important honest signal in the whole section; a reader who stops after the risk register alone, without having seen Table 13.1 first, would have seen six fixes without first seeing the two ratings those fixes are meant to protect. This is a small structural choice, but it is the same discipline that runs through every section of this document: state the honest limit first, and let the evidence that narrows it follow only afterward, rather than building confidence first and attaching the caveat as an afterthought a skeptical reader has to go looking for.

---

## 14. Impact: 1.36 crore stock-out days avoided a year in the base case, 81.5 lakh in the bear case

**Answer.** SwasthyaGrid's impact claim is a transparent estimate from a stated model, not a measured result: 38,241 facilities [S01] multiplied by 7 tracer medicines, 365 days a year and a 27.8% baseline unavailability rate taken from a published study [S02], cut by an assumed 30% (bear), 50% (base) or 80% (bull, matching eVIN's own reported vaccine result) [S12][A02], yields 81.5 lakh, 1.36 crore and 2.17 crore stock-out days avoided a year respectively [M]. The base case lifts modelled key-medicine availability from 72.2% to 86.1% and works out to 355.1 days avoided per facility and 17,412 days avoided per district a year [M]. This section sets out every step of that model, the theory of change connecting the mechanism to the number, how the estimate maps to three Sustainable Development Goal (SDG) targets, and, as plainly as the rest of this document insists on, exactly what the estimate cannot claim.

### 14.1 The model, step by step

Table 14.1 walks through the impact model's calculation in the same order the model code runs it, so a reader can check every multiplication without opening the Python file.

**Table 14.1: Impact model, step by step**

| Step | Input | Value | Source or tag |
|---|---|---|---|
| 1 | Facilities (PHCs + CHCs) | 31,882 + 6,359 = 38,241 | [S01] |
| 2 | Tracer medicines tracked in the prototype catalogue | 7: adrenaline, antiretroviral (ARV), anti-snake venom (ASV), oral rehydration salts (ORS), oxytocin, paracetamol, tetanus toxoid | [S31][A03] |
| 3 | Days in a year | 365 | Calendar |
| 4 | Baseline unavailability (mid case) | 1 − 0.722 = 27.8% | [S02][A01] |
| 5 | Baseline stock-out days a year | 38,241 × 7 × 365 × 0.278 = 2,71,62,200, or 2.72 crore | [M] |
| 6 | Share of stock-out days the system removes | 30% (bear), 50% (base), 80% (bull, matching eVIN's reported result) | [S12][A02] |
| 7 | Stock-out days avoided a year | Bear 81,48,660 (81.5 lakh); base 1,35,81,100 (1.36 crore); bull 2,17,29,760 (2.17 crore) | [M] |
| 8 | Availability after the cut | Bear 80.5%; base 86.1%; bull 94.4% | [M] |

Every number in Table 14.1 after step 6 is arithmetic on the inputs above it; nothing in this table is independently measured, which is exactly the hedge this document and plan section 11.1 both require stated before, not after, a judge asks for it.

### 14.2 Three scenarios, never a single number

Table 14.2 restates the three scenarios side by side with their full workings, so the model's single most important rhetorical choice, giving three cases rather than one point estimate, is visible in one place.

**Table 14.2: Scenario table**

| Scenario | Cut assumption | Stock-out days avoided a year | Availability after the cut | What justifies this cut |
|---|---|---|---|---|
| Bear | 30% | 81,48,660 (81.5 lakh) [M] | 80.5% | A conservative floor, well below any reported precedent, chosen so the bear case is not accused of being optimistic dressed as pessimistic |
| Base | 50% | 1,35,81,100 (1.36 crore) [M] | 86.1% | Half of eVIN's own reported 80% cut in vaccine stock-outs [S12], treating medicine logistics as harder to move than a dedicated cold-chain vaccine network |
| Bull | 80% | 2,17,29,760 (2.17 crore) [M] | 94.4% | eVIN's own reported result for vaccines [S12], used as an upper bound rather than a forecast, because medicines run through more varied storage and ordering rules than a single vaccine cold chain |

The base case is deliberately not the midpoint of eVIN's own number; it is half of it. That is a conscious discount applied because eVIN operates inside a dedicated, donor-funded cold chain with a single product category, while SwasthyaGrid's base case has to work across seven very different tracer medicines moving through ordinary state drug-supply corporations with none of eVIN's specialised infrastructure. The discount is a modelling choice this document states rather than hides.

### 14.3 Sensitivity: every combination still clears 58.6 lakh days

Table 14.3 reproduces the model's 3x3 sensitivity grid exactly, crossing three availability assumptions against the three cut scenarios, so a reader can see that even the single weakest combination in the whole model still clears 58.6 lakh stock-out days avoided a year.

**Table 14.3: Sensitivity, stock-out days avoided a year, in lakh**

| Baseline availability | 30% cut (bear) | 50% cut (base) | 80% cut (bull) |
|---|---|---|---|
| 66% (low end of the published range) | 99.7 | 166.1 | 265.8 |
| 72.2% (mid case, used everywhere else in this document) | 81.5 | 135.8 | 217.3 |
| 80% (high end of the published range) | 58.6 | 97.7 | 156.3 |

*Source: model output [M], reproduced exactly from `model/model_output.txt`, section "sensitivity, lakh days avoided."*

The grid's shape carries a defensive point worth naming directly: a reader who distrusts the 72.2% mid case and insists on the model's own most favourable baseline (80% availability, meaning the least room for the product to help) still arrives at a 50% cut yielding 97.7 lakh stock-out days avoided, which is itself larger than the bear case's headline 81.5 lakh built on the mid baseline. The claim still holds up against disagreement about the baseline in a way a single point estimate could never demonstrate.

### 14.4 Per-facility and per-district translations

The crore-scale headline number is hard for a reader to feel at the scale that matters to a district officer, so Table 14.4 translates the base case down to the two scales a reader can actually picture.

**Table 14.4: Per-facility and per-district translations, base case**

| Scale | Value | How it is derived |
|---|---|---|
| Per facility, a year | 355.1 days avoided | 1,35,81,100 ÷ 38,241 facilities [M] |
| Per district, a year | 17,412 days avoided | 1,35,81,100 ÷ 780 districts [M] |

A single district seeing 17,412 fewer stock-out days a year, spread across its roughly 49 facilities [M, part C section 9], is a number a district health officer can hold against their own district's complaint log in a way "1.36 crore" never could; both numbers describe the identical model output, and this document shows both because an audience of judges and an audience of district officers each need a different one to feel the claim.

### 14.5 Theory of change

The causal chain from a daily data read to fewer empty shelves runs through five stages, matching slide 9's theory-of-change stack exactly. The ASCII tree below shows the chain; Table 14.5 restates it as a logframe with an indicator, baseline, target and means of verification for each stage, which the slide itself has no room to carry.

```
INPUTS
  Daily stock, bed and staff data the state already holds [S15][S35]
      |
      v
ACTIVITIES
  Warn -> Propose -> Approve -> Move -> Confirm [S31]
      |
      v
OUTPUTS
  Transfers approved the same day they are proposed
      |
      v
OUTCOMES
  Fewer stock-out days; less stock expiring on the shelf
      |
      v
IMPACT
  Emergency drugs on the shelf when a patient arrives
```

**Table 14.5: Logframe**

| Stage | Indicator | Baseline | Target (base case) | Means of verification |
|---|---|---|---|---|
| Inputs | Facilities with a working nightly data feed | 0 (pilot not yet live) | 40 facilities, 5 districts, matching the prototype's existing footprint [S31] | Data pipeline logs |
| Activities | Proposals generated and acted on within 24 hours | 0 (not measured; no live district) | At least half of proposals approved within 24 hours during shadow mode (section 13.2) | Proposal queue timestamps |
| Outputs | Transfers completed, start to finish, same day as proposed | 0 | Majority of approved transfers confirmed received the same day | Delivery confirmation logs at the receiving facility [S31] |
| Outcomes | Days of cover below the 3-day (or 5-day for emergency items) warning threshold | Not yet measured in a live district | A measurable fall in the share of facility-days spent below threshold, compared with the district's own pre-pilot pattern | Before and after comparison inside the pilot district, once live |
| Impact | Stock-out days avoided a year | 0 (model estimate only, not yet measured) [M] | 1.36 crore nationally if rolled out to all 38,241 facilities (base case) [M]; the pilot's own number will be far smaller and is the number that actually tests the model | A live-district stock-out day count, compared against the model's predicted rate for that district (17,412 a year, Table 14.4) |

The impact row in Table 14.5 is the one that most needs its own caveat stated plainly: the 1.36 crore figure is a national projection if every facility behaved like the model assumes, and the pilot's actual job is not to produce that number but to produce a single district's real stock-out count, which the model can then be checked against.

### 14.6 SDG mapping

SwasthyaGrid's claim maps to three Sustainable Development Goal targets, each tested against its own official indicator definition rather than asserted loosely. Table 14.6 sets out the mapping and, critically, which indicator the product's own evidence actually speaks to and which it does not.

**Table 14.6: SDG mapping, tested against official indicator definitions**

| SDG target | Official indicator | What SwasthyaGrid's evidence shows | What it does not show |
|---|---|---|---|
| 3.8 (universal health coverage) | 3.8.1, coverage of essential health services; 3.8.2, proportion of the population with household health spending above 40% of discretionary budget [S104] | A modelled rise in key-medicine availability from 72.2% to 86.1% (base case) speaks directly to the service-coverage spirit of 3.8.1, and the 43.4% out-of-pocket share [S10] is the population-level context 3.8.2 measures | SwasthyaGrid does not measure the official 3.8.1 composite index itself, which spans services well beyond medicine availability, and does not measure a change in the 3.8.2 household-spending indicator directly |
| 10.2 (reduce inequality) | Indicators track income growth of the bottom 40% and various forms of inclusion | Prioritising aspirational districts (section 9, part C), which NITI Aayog itself selected as the country's most underdeveloped on 49 indicators with health and nutrition weighted 30% [S19][S20], targets exactly the population this target is written for | No household-level income or inclusion data is collected by the prototype; the link is a targeting argument, not a measured outcome |
| 12.3 (halve food and resource waste) | 12.3.1, food loss and food waste indices, drawn from the food system but structurally analogous to medicine-waste reduction | The expired-drug paradox (part B, section 6; part D, section 11) is the same structural waste this target addresses in food systems: usable stock destroyed instead of used | SwasthyaGrid's own waste reduction is not separately measured against the 12.3.1 methodology, which was built for food, not medicine, so the mapping is an analogy, not a direct indicator match |

The honest line to draw here, consistent with this document's rule against SDG-washing, is that SwasthyaGrid's current evidence supports a plausible contribution to all three targets without claiming to move any of their official indicators directly; a live pilot that tracked a district's own 3.8.1-relevant service coverage before and after would be the first evidence that closed that gap.

### 14.7 Pilot measurement plan: six indicators

If the pilot runs, the single most important job of the first measurement period is to replace the model's estimate with a measurement. Table 14.7 names the six indicators the pilot would track and how.

**Table 14.7: Pilot measurement plan**

| Indicator | How it is measured | What it replaces |
|---|---|---|
| Stock-out days per facility, before and after | Count days a tracer medicine shows zero stock, from the daily data feed, for 8 weeks before pilot launch and 8 weeks after | The model's 355.1 days-avoided-per-facility projection (Table 14.4) |
| Approval rate of proposed transfers | Share of proposals an officer approves versus edits or rejects, tracked weekly during and after shadow mode | The 50% shadow-mode bar (section 13.2) that is also the roadmap's stop rule (section 15) |
| Time from proposal to approval | Median hours between a transfer proposal and an officer's decision | Assumption that a daily SLA alert (risk R3 mitigation, Table 13.6) is enough to keep the queue moving |
| Near-expiry stock redeployed | Volume and value of stock moved while it still had more than 90 days of shelf life, versus the same facility's prior-year waste pattern | The 6.1% to 12.5% expiry-rescue thresholds this document and part D both use [S16][S17][M] |
| Facility-level availability of the 7 tracer medicines | Direct count at each facility, each week, matched against the pre-pilot availability study figures [S02] | The model's 72.2% baseline and 86.1% base-case target (Table 14.1) |
| Officer-reported trust | A short survey after each shadow-mode week asking whether the officer would have made the same call without the system | The feasibility section's operational amber rating (Table 13.1) |

Every row in Table 14.7 is paired, in the right-hand column, with the specific model assumption or feasibility rating it is designed to test, which is the measurement plan's whole purpose: a pilot that collected data without a stated link back to a specific number in this document would be collecting data for its own sake.

### 14.8 What this estimate cannot claim

Table 14.8 closes the impact section with the limits of the model, stated as plainly as the headline number itself, because a judge who finds these limits unstated will treat the whole model with more suspicion than the limits themselves deserve.

**Table 14.8: What this estimate cannot claim**

| The model does claim | The model cannot claim |
|---|---|
| An estimate of stock-out days avoided a year, built from a stated set of inputs and assumptions [M] | A count of deaths averted, disability-adjusted life years averted, or any other health-outcome measure; the model stops at a logistics indicator, not a clinical outcome |
| Three named scenarios bounding a range the team believes is defensible [A02] | A single "true" number; the base case is a modelling choice, not a measured central estimate |
| Coverage of 7 tracer medicines chosen from the prototype's existing catalogue [S31][A03] | Anything about the roughly 300 to 400 other medicines on a typical state essential-medicines list that the prototype does not yet track |
| A plausible contribution to three SDG targets, read against their own indicator definitions (Table 14.6) | A measured movement in any official SDG indicator, which only a tracked pilot, not a model, could produce |
| A theory of change with a stated indicator at every stage (Table 14.5) | Evidence, today, for any stage below "inputs," since no district is yet live |

Each row in Table 14.8 pairs a claim this document does make with the specific, larger claim it deliberately stops short of, so no reader has to guess where the model's confidence actually ends.

### 14.9 Reading the model's honesty as its own form of evidence

A model that produced only its base case, 1.36 crore, without the bear case, the bull case and the nine-cell sensitivity grid behind it, would be easier to present and harder to defend. The reason this document instead carries all four views of the same underlying calculation, the single point (Table 14.1), the three scenarios (Table 14.2), the full sensitivity grid (Table 14.3) and the two human-scale translations (Table 14.4), is that each view answers a different challenge a reader might raise, and no single view answers all of them. A reader who distrusts the mid-case availability figure needs the sensitivity grid, not the scenario table, because the scenario table holds availability fixed and only varies the cut assumption. A reader who distrusts the cut assumption needs the scenario table, not the sensitivity grid's row for 72.2% alone. A reader who simply cannot picture what 1.36 crore means at any human scale, because a crore is an unfamiliar unit outside an Indian audience and an abstraction even inside one, needs the per-facility and per-district translations, which neither of the other two tables provides. Building all four was not an exercise in padding the section with more tables than the brief requires; each one closes a specific gap the others leave open, and a reader who had only one of the four would still have a legitimate basis to distrust the number.

The theory of change in section 14.5 plays a different role again. It does not add rigor to the arithmetic in Table 14.1; it instead makes visible the five places where the whole chain could break even if the arithmetic is exactly right, because an impact model is only as strong as its weakest causal link, not its most precisely stated multiplication. The logframe in Table 14.5 names, for every stage from inputs to impact, what evidence exists today (almost none, since no district is yet live) and what evidence the pilot would produce. That honesty, that four of the five logframe rows currently read "not yet measured," is not a weakness this document is hiding. It is the entire reason section 14.7's pilot measurement plan exists: to convert exactly those four rows from an assumption into a number within the first measurement period after go-live.

A further honest point belongs here, about the seven tracer medicines the whole model is built on. The model does not claim these seven are representative of every medicine a district stocks; they are the seven the prototype's own catalogue already tracks, chosen for clinical urgency (adrenaline, antiretroviral therapy, anti-snake venom) and for volume (oral rehydration salts, paracetamol) rather than for statistical representativeness across a typical state essential-medicines list of several hundred items [S31][A03]. Extending the model to a wider basket of medicines is a natural next step once a pilot district is live and its data feed can be checked against a longer item list, but this document does not pretend that step has already been taken anywhere in the figures stated above, including the headline 1.36 crore figure itself, which covers only these seven items and no others.

---

## 15. Roadmap: three horizons from 2 districts to about 780, with gates and stop rules

**Answer.** SwasthyaGrid's roadmap runs three horizons matching slide 9 exactly: Horizon 1 (0 to 12 months) reaches 12 districts starting with the Rajasthan pilot then widening to other aspirational districts; Horizon 2 (12 to 36 months) reaches 80 districts and ₹9.6 Cr of annual recurring revenue (ARR) by Year 3, base case [M]; Horizon 3 (36 months on) reaches all about 780 districts and the full 38,241-facility footprint [M]. Three named stop rules, not one vague caution, gate every transition, and the cadence of those gates is deliberately built to match a reporting rhythm NITI Aayog already runs rather than an invented one [S106]. The staged, state-by-state shape of this roadmap has a direct precedent: eVIN itself launched in 12 named states in 2015 before a second funded round carried it to all 36 states and union territories [S102], and SwasthyaGrid's Horizon 1 count of 12 districts deliberately echoes that same staged logic at district rather than state scale.

### 15.1 Three horizons

Table 15.1 restates the three-horizons framework (McKinsey, Baghai, Coley and White, 1999) with SwasthyaGrid's own numbers in every cell, and the gate that has to be passed before the next horizon begins.

**Table 15.1: Three horizons**

| Horizon | Timeframe | Districts | Revenue (base case) [M] | Gate to pass before advancing |
|---|---|---|---|---|
| H1: core | 0 to 12 months | 12 | Year 1 annual recurring revenue (ARR) ₹1.44 Cr | Shadow-mode approval rate at or above 50% in the first live district, within four weeks of go-live (section 13.2) |
| H2: emerging | 12 to 36 months | 80 by Year 3 | Year 3 ARR ₹9.60 Cr, base case [M] | A second state's data MoU signed and its first district live, proving the model generalises beyond Rajasthan |
| H3: future | 36 months on | About 780 (all districts) [S23] | Beyond the three-year model horizon; not projected in this document | Three states each running at least 5 districts with a stable, positive renewal rate |

*ARR: annual recurring revenue. The Year 1, 2 and 3 district counts in the base case path are 12, 45 and 80 [A12][M].*

Horizon 1's twelve-district target is not an arbitrary round number; it matches the model's own base-case Year 1 district count exactly [A12][M], which means the roadmap and the financial model are reading from the same underlying assumption rather than two independently invented numbers that happen to look similar.

### 15.2 Stop rules

A roadmap without a stated stop rule is a roadmap that will keep going past the point where it should have stopped, simply because nobody wrote down in advance what "stop" would look like. Table 15.2 names three.

**Table 15.2: Stop rules**

| Stop rule | What triggers it | What it protects against |
|---|---|---|
| Adoption stop rule | Fewer than half of proposed transfers are approved in shadow mode after four weeks in the first district | Scaling a product that officers do not actually trust, which would waste every later hire and every later state's goodwill on a mechanism that has not been shown to work even once |
| Data-access stop rule | No state signs a data-sharing MoU within eight weeks of serious engagement in two separate states | Spending the founder's limited time (risk R6, Table 13.6) chasing a channel that government procurement timelines may not support inside the plan's own horizon |
| Expiry-generalisation stop rule | A pilot state's own facility audit shows an expiry write-off share below the lower end of the 6.1% to 12.5% range the Telangana and Odisha audits implied [S16][S17][M] | Continuing to price the licence against a self-funding case (section 13.1's economic green rating) that does not hold in a state where the underlying waste problem turns out to be smaller |

Each stop rule in Table 15.2 traces to a specific risk, test or assumption named earlier in this document (the operational amber rating in section 13.1, risk R4 in section 13.6, and the economic feasibility rating respectively), which is the point: a stop rule invented without that link would be a slogan, not a gate.

### 15.3 The first twelve months, month by month

Table 15.3 lays the six-week rollout plan (section 13.2) inside a fuller first-year calendar, showing where the second through twelfth districts are expected to land and where the NITI Aayog Delta Ranking's quarterly cadence [S106] gives a natural external checkpoint to compare progress against.

**Table 15.3: Twelve-month calendar**

| Month | Milestone | External checkpoint, if any |
|---|---|---|
| 1 | Data MoU signed, first district (Table 13.2, week 1) | None |
| 1.5 | First district live (six weeks from MoU, Table 13.2) | None |
| 2 to 3 | Shadow-mode results reviewed; adoption stop rule tested against the first district's real approval rate | NITI Aayog's quarterly Delta Ranking for aspirational districts falls inside this window and gives an independent read on the pilot district's own health and nutrition trajectory, separate from SwasthyaGrid's own metrics [S106] |
| 4 to 6 | Second and third districts onboarded inside the same state, reusing the first district's MoU and training materials | None |
| 7 to 9 | A second state's data MoU pursued; data-access stop rule's eight-week clock starts from first serious engagement | A further quarterly Delta Ranking cycle falls inside this window |
| 10 to 12 | Districts 4 through 12 onboarded, closing out Horizon 1's twelve-district target (Table 15.1) | A further quarterly Delta Ranking cycle falls inside this window, giving three independent external checkpoints across the first year |

Anchoring the calendar's checkpoints to NITI Aayog's own quarterly Delta Ranking cadence, rather than to a schedule this team invented, means a judge or a future state partner can independently verify the pilot districts' broader health trajectory on a public government timetable that already exists and will keep running whether or not SwasthyaGrid's own internal reporting is trusted [S106].

### 15.4 Funding the horizons without an investment ask

This pitch asks for no investment (plan decision D3), and Table 15.4 sets out the two funding paths that could carry the roadmap through Horizon 1 without one.

**Table 15.4: Funding paths for the roadmap, no investment ask**

| Path | What it provides | Evidence it exists |
|---|---|---|
| Paid pilot | The first state pays the ₹12 L licence and ₹3 L onboarding fee directly from its own NHM-tagged digital-health budget line [A05][A11][S18] | This is the default path and the one every revenue figure in part D of this document assumes |
| Innovation grant | A government or foundation innovation grant could cover a first district's costs while the product proves itself, as a substitute for the first paid licence rather than as venture capital | Atal Innovation Mission (NITI Aayog), together with Social Alpha and IIT-Delhi, already runs exactly this kind of grant for digital-health start-ups, up to ₹65 lakh per winner for product trials and pilot studies [S105] |

Neither path has been secured as of this document; naming both, with the grant path backed by a named, currently running government program rather than a hypothetical one, is this section's own defensive-depth answer to the question a judge is most likely to ask about funding before Horizon 2 begins.

### 15.5 Why the roadmap does not promise a national rollout date

A reader comparing this roadmap with a typical start-up growth slide will notice something missing: no date is attached to reaching all about 780 districts. Horizon 3 in Table 15.1 is stated as "36 months on," not as a specific month or year, and the district count there, about 780, carries no revenue projection at all. This is a deliberate choice, not an oversight, and it follows directly from the eVIN precedent this section leans on most heavily. eVIN itself did not reach all 36 states and union territories inside a planned window measured from its 2015 launch; it reached 12 states first, waited for a second funded round, and only then scaled to the rest of the country [S102]. A roadmap that promised a specific national completion date for SwasthyaGrid would be promising something even its own best precedent did not achieve on a fixed schedule, and stating the honest version, that Horizon 3 begins once Horizon 2's gate is passed but is not dated beyond that, is more defensible under questioning than a confident but invented date would be.

This same caution shapes why Table 15.1 states no revenue figure at all for Horizon 3. The financial model in part D of this document (and Table 14.1 of this document) is built and validated out to Year 3, the base case's 80-district, ₹9.6 Cr ARR point; projecting that same model mechanically out to 780 districts would multiply a three-year model's assumptions across a timeframe long enough that every one of its seventeen named assumptions (plan section 5.4, reproduced in Appendix D) could plausibly have shifted by the time Horizon 3 actually arrives. Stating "not projected in this document" in Table 15.1's Horizon 3 row is the same discipline section 14.8 applies to the impact model: a number this document has not actually modelled is not a number this document will state as if it had.

---

## 16. Slide blueprint: how 10 slides carry the argument

**Answer.** The ten-slide deck runs cover, eight core slides and an appendix, each slide's headline reproduced verbatim from plan section 2.6 below, each carrying a named skill archetype, a named framework set, and the single strongest piece of evidence on that slide, so a reader can check in one table that every slide does the specific analytical job this document's longer sections build toward. No slide on this list restates its own headline in its body, consistent with the standing rule in plan section 11.15.

### 16.1 The ten slides

**Table 16.1: Slide blueprint**

| Slide | Action title (verbatim, plan section 2.6) | Skill archetype | Frameworks on the slide | Strongest evidence | What a judge should remember |
|---|---|---|---|---|---|
| S1 Cover | SWASTHYAGRID | Cover slide with mind map and logo slots | None (orientation only) | Eight named public bodies drawn into one mind map, each with a logo slot | The deck opens on the institutions it has to work with, not on a product screenshot |
| S2 Executive Summary | Districts run short and write off expired medicine at the same time; SwasthyaGrid moves what a district already owns and avoids an estimated 1.36 crore stock-out days a year | Executive summary, recommendation plus for and against | Pyramid principle; obvious-versus-alternative; brief coverage matrix | The paradox stated in one sentence, with the moneyshot already foreshadowed in smaller type | The whole argument is in this one headline before any chart has been shown |
| S3 Problem | A third of key medicines can be missing from a PHC shelf on any day while warehouses write off crores in expired stock: nobody sees the district's supply as one | Two-chart action-title workhorse | MECE issue tree; 5 Whys; evidence triangulation | The Telangana (₹390.26 Cr) and Odisha (₹168 Cr) audit figures sitting beside the availability bars on the same slide [S16][S17] | Two independent evidence sets point at the same blind spot, which is the foreshadow for the whole deck |
| S4 Solution | SwasthyaGrid gives each district one morning view of every shelf, bed and roster, proposes the nearest transfer, and a named officer approves it before anything moves | Deep dive on the chosen alternative | Value chain loop; before and after comparison; product wireframe | The PHC Kota-4 proof card, 1.2 to 21.0 days of antiretroviral cover, labelled simulated [S31] | The mechanism is shown working once, honestly labelled as a prototype run, not claimed as a live deployment |
| S5 Target Market | State health departments buy for about 780 districts, a ₹93.6 Cr a year licence pool; we enter through 112 aspirational districts worth ₹13.4 Cr and a Rajasthan beachhead | Market sizing and actors | Bottom-up TAM/SAM/SOM; buying-centre map; price benchmarking; beachhead (Crossing the Chasm) | The bottom-up sizing arithmetic (780 x ₹12 L = ₹93.6 Cr), traceable to a named district count and a named licence price [M] | Every market number on this slide is built from a count times a price, not asserted as a round figure |
| S6 Innovation | Five public systems record India's health supply and none of them moves it; SwasthyaGrid adds the missing layer that rebalances stock across a district with a human sign-off | Symmetric comparison grid with foreshadow | Feature-parity heat grid; Blue Ocean ERRC; Helmer 7 Powers; precedent | eVIN's own reported 80% cut in vaccine stock-outs, used as the precedent that visibility changes behaviour [S12] | The contrarian thesis has a working precedent in a different but comparable system, not just a theory |
| S7 Sustainability | The model pays for itself three ways: a ₹12 L licence on a 71% gross margin, less medicine expiring on the shelf, and fewer families pushed to private chemists | Multi-chart dense slide; three-scenario projection | The People, Planet, Profit framework; unit economics; scenarios; customer return on investment | The 6.1% to 12.5% expiry-rescue threshold, which turns an abstract sustainability claim into a specific, checkable number [S16][S17][M] | Sustainability is argued in three independent currencies on one slide, not asserted once in general language |
| S8 Feasibility | A district can go live in six weeks with no new hardware or purchase line: SwasthyaGrid reads the stock exports states already produce, and one officer per district signs off | Implementation plan and risk | TELOS feasibility test; Gantt; probability times impact risk register; customer validation plan | The TELOS table's two named amber ratings, stated before a judge can raise them (section 13.1 of this document) | Feasibility is shown as three greens and two honest ambers, never five greens |
| S9 Impact | Rolled out over three years, SwasthyaGrid avoids an estimated 1.36 crore stock-out days a year and lifts key-medicine availability from 72.2% to 86.1% | The moneyshot, with scenarios and sensitivity | Moneyshot; theory of change; three scenarios; 3x3 sensitivity; Three Horizons; SDG mapping | The 3x3 sensitivity grid showing every combination of availability and cut assumption still clears 58.6 lakh days avoided (section 14.3 of this document) | The single largest number in the deck is backed by a grid showing it does not depend on any one assumption holding exactly |
| S10 Appendix | Every number on the deck traces to a named source or to one stated model, and each assumption below can be changed and re-run | Appendix deep dive | Defensive depth | The full assumptions register (plan section 5.4), which this document's Appendix D reproduces with two added columns | Nothing on the first nine slides is a number without a receipt somewhere in the appendix |

Table 16.1's ten rows show the same property section 16.2 below argues in prose: each slide carries a distinct archetype and a distinct piece of evidence, so no two rows of this table could be swapped without breaking the sequence.

### 16.2 What the sequence does, slide by slide

The ten-row table above answers what each slide carries; it is worth stating in one paragraph what the sequence does as a whole, because a list of ten rows can obscure the fact that each slide's job is strictly downstream of the one before it. S2 states the answer before any evidence has been shown, which is the Pyramid Principle applied at deck level: the governing thought comes first, and S3 through S9 exist to support it, not to build up to it. S3 proves the paradox with two independent evidence sets, which is also where the foreshadow for S6's precedent is planted, exactly as plan section 2.2 describes. S4 shows the mechanism works once, on simulated data, honestly labelled. S5 names who pays and how much. S6 answers why nobody else has built this, using a precedent rather than a bare assertion. S7 argues durability in three currencies at once. S8 shows the plan can start now, amber ratings included. S9 is the single climax the whole deck has been built toward, and its own sensitivity grid is what keeps the climax from reading as a confident guess. S10 exists so that any one of the preceding nine slides can be challenged and answered from the same document.

One more property of the sequence deserves naming: no two adjacent slides repeat the same archetype. S2's executive summary, S3's two-chart workhorse, S4's deep dive, S5's market sizing, S6's symmetric grid, S7's multi-chart dense slide, S8's implementation plan and S9's moneyshot are eight different shapes in a row, which is itself a design choice rather than an accident of what each section happened to need. A judge who has watched several decks in the same sitting notices immediately when two slides in a row look structurally identical, because the eye disengages from content and starts pattern-matching layout instead; varying the archetype on every slide, even inside a compressed eight-core-slide format, keeps a reader's attention on the argument rather than on the page.

---

## 17. Twenty-five judge questions and the answers we will give

**Answer.** This section carries twenty-five judge questions in one table: the eighteen drawn from plan section 13's defence sheet, restated here as statements rather than literal questions, plus seven new ones this document adds to extend coverage into ground the original eighteen do not reach, chiefly the data infrastructure SwasthyaGrid rides on top of, the funding paths available without an investment ask, and what the impact model's SDG mapping can and cannot claim. Every entry carries a short answer and the slide or section that backs it, so a reader checking any one row can verify it against the fuller treatment elsewhere in this document.

### 17.1 The twenty-five entries

**Table 17.1: Judge questions and answers**

| # | Judge question, as a statement | Short answer | Backing |
|---|---|---|---|
| 1 | Why a state would pay ₹12 L a district when e-Aushadhi already exists | e-Aushadhi records what was bought and issued; it does not rank which facility should send stock to which, or put a proposal in front of an officer. ₹12 L is 0.25% of an average district's central NHM allocation, and in the two audited states a district loses ₹0.96 Cr to ₹1.97 Cr a year to expiry; the licence pays for itself if it rescues 6.1% to 12.5% of that [S18][S16][S17][M] | S2, S7; section 13.1, 13.4 of this document |
| 2 | Whether a ₹93.6 Cr market is too small to be a real business | It is an honest number, about 780 districts at ₹12 L; at 80 districts the business earns ₹9.6 Cr of recurring revenue on a 71% gross margin, and the same buyer pattern repeats in nutrition and agriculture as a later option, not today's market [M] | S5, S10; part C section 9 |
| 3 | Whether 1.36 crore stock-out days avoided is a measured result | No; it is an estimate from a stated model with three named scenarios: 81.5 lakh bear, 1.36 crore base, 2.17 crore bull [M] | S9; section 14.2 of this document |
| 4 | Whether anyone has used the product | No; a prototype runs on simulated data for 40 facilities in 5 Rajasthan districts, no district is live and no interviews have been done [S31] | S4, S8; section 13.2 of this document |
| 5 | Who is responsible if a transfer leaves the sending facility short | The officer who approved it, exactly as with a paper indent today; the system never moves stock on its own, and a lateral transfer is only proposed when the sender keeps a safety buffer [S31] | S4; section 13.5 of this document |
| 6 | Why a district officer would open another tool every morning | Because it removes work officers already do, the phone calls to find surplus; adoption is tested first in a shadow period where officers compare proposals with their own calls before relying on them, with a stated stop rule if fewer than half are approved after four weeks | S8; section 13.2, 15.2 of this document |
| 7 | Whether states will share their data | The data is stock and counts, with no patient identity, so the Digital Personal Data Protection Act is not triggered; health is a State subject, so each state's data stays with that state [S13][S14] | S8; section 13.4 of this document |
| 8 | Why not ask government to extend eVIN to medicines | That may happen and would validate the idea; eVIN covers vaccines with a dedicated cold chain, while medicines run through state corporations with different catalogues and rules in every state, so a state-by-state layer reading existing exports can start in six weeks without waiting for a national programme [S12][S15] | S6, S8; section 15.1 of this document |
| 9 | What stops a large vendor such as C-DAC from adding this feature | Nothing stops the attempt; their products and contracts are built around recording transactions, while proposing moves needs district-specific transfer rules, officer workflows and trust built through shadow periods, which is process knowledge that accumulates district by district [S15] | S6; part C section 10 |
| 10 | Where the unit economics come from | The price is built from three lines inside the ₹3 L to ₹25 L band Indian health software already charges; the 71% margin is a benchmark-based assumption, not our own history; blended acquisition cost and contract life are team estimates, each shown with its own working [S25][S26][A08][A09][A10] | S7; part D section 11, 12 |
| 11 | Whether one founder can deliver this | Today the team is one founder and a working prototype; the first two hires, a state implementation lead and a data operations person, are tied to pilot fees and listed as risk R6 rather than hidden [S31] | S8; section 13.5, 13.6 of this document |
| 12 | How this is sustainable for the environment, and where the numbers are | No emissions figure is claimed because there is no measured baseline; what is sourced is that the supply chain is about 71% of health care's global footprint, and two audited states wrote off ₹558 Cr of expired medicine between them [S22][S16][S17] | S7; part D section 11 |
| 13 | How expiry per district was calculated | Audited total divided by audited years divided by number of districts: Telangana ₹390.26 Cr over 6 years and 33 districts is ₹1.97 Cr; Odisha ₹168 Cr over 5.83 years and 30 districts is ₹0.96 Cr; the arithmetic is the team's own, on CAG figures, and is labelled that way [S16][S17][M][A14] | S3, S7; part B section 6 |
| 14 | Whether the audits show stock-outs of the same medicines at the same time as the expiry | No, and this document says so plainly; availability studies and expiry audits are two independent evidence sets, and the claim is that both trace to the same blind spot, which a pilot would test directly by tracking near-expiry stock that gets redeployed | S3; part B section 6 |
| 15 | Why start with aspirational districts | Need is highest there; NITI Aayog scores them on 49 indicators with health and nutrition carrying 30% of the score, and the District Collector has a visible reason to improve it; Rajasthan is the beachhead because the prototype already models its districts and five of the 112 aspirational districts sit in the state [S19][S20][S24][S31] | S5; part C section 9 |
| 16 | Why price per district rather than per facility | The buyer signs for districts, and the decision is made at district level; a district price is easy to place in a budget, while the facility tier inside the price keeps it fair for larger districts [A05][A07] | S5, S7; part D section 12 |
| 17 | What would make the team stop | Three stated stop rules: states decline to share exports after serious effort in two states; officers approve fewer than half of proposals in shadow mode; or the pilot shows no change in stock-out days after three months | S9; section 15.2 of this document |
| 18 | Who funds the pilot | No investment is asked in this pitch; the plan is a paid pilot at the onboarding fee, or a state or foundation innovation grant if a state prefers, and neither has been secured | S10; section 15.4 of this document |
| 19 | Why an existing national facility registry does not make SwasthyaGrid redundant | The Ayushman Bharat Digital Mission's Health Facility Registry already carries verified IDs for more than 1,00,000 facilities, about 97% of them government, but a facility ID is not a transfer proposal; SwasthyaGrid reads that same registry rather than duplicating it, and builds the ranking and approval layer the registry itself does not provide [S100] | New; section 13.3 of this document |
| 20 | Why HMIS's documented data-quality problems do not sink this product | India's HMIS has carried known weaknesses in data quality and frontline training since at least a 2013 academic review, and this document names that precedent directly rather than assuming it away; SwasthyaGrid's freshness-flag mitigation (risk R1) and its pre-mortem (section 13.7) both treat stale or poor-quality data as the single most likely failure mode, not a remote risk [S101] | New; section 13.3, 13.7 of this document |
| 21 | How a quarterly government reporting cadence fits a six-week pilot gate | NITI Aayog already runs a quarterly Delta Ranking of aspirational districts on health and nutrition progress; the twelve-month calendar in this document times its own internal checkpoints to fall inside that existing quarterly rhythm, so a state partner can cross-check the pilot district's broader trajectory on a timetable that already exists independently of SwasthyaGrid's own reporting [S106] | New; section 15.3 of this document |
| 22 | Whether a government grant could replace the licence fee entirely | A named, currently running grant (Atal Innovation Mission, with Social Alpha and IIT-Delhi, up to ₹65 lakh per winning digital-health start-up) could fund a first district's pilot costs as a substitute for the first paid licence, but every revenue figure in this document still assumes the paid-pilot path as the default, because a grant is a bridge to prove the product, not a long-term revenue model for a business this document otherwise prices as a recurring licence [S105] | New; section 15.4 of this document |
| 23 | What happens to expired-drug disposal cost once stock moves faster | CDSCO issued a dedicated national guidance document on the disposal of expired and unused drugs in May 2025; this document treats that guidance as the boundary condition for stock SwasthyaGrid's transfer proposals could not move in time, not as a cost SwasthyaGrid itself changes, since disposal is a separate regulatory process from the transfer mechanism this product provides [S103] | New; section 13.4 of this document |
| 24 | Why the impact model does not count lives saved or disability-adjusted life years averted | The model stops at a logistics indicator, stock-out days avoided, because no measured baseline exists to convert that into a clinical outcome; checked against the official SDG 3.8.1 and 3.8.2 indicator definitions, SwasthyaGrid's evidence supports a plausible contribution to universal health coverage without claiming to move either official indicator directly [S104] | New; section 14.6, 14.8 of this document |
| 25 | What a state loses by waiting for a national data layer instead of piloting now | eVIN itself did not launch nationally; it started in 12 named states in 2015 and only reached all 36 states and union territories after a second funded round, so waiting for a single national launch would have meant waiting years even for the precedent this document cites most often; SwasthyaGrid's state-by-state roadmap deliberately follows the same staged logic rather than waiting for a national mandate that historically has not been how comparable systems actually scaled in India [S102] | New; section 15.1 of this document |

### 17.2 Reading the table as a whole

Three patterns are worth naming once, rather than leaving them implicit across twenty-five rows. First, questions 3, 12, 13, 14 and 24 are all variations on the same underlying challenge, that this document estimates rather than measures its central numbers, and every one of those five rows answers with the same discipline: name the model, name the assumption, name what would have to happen for the estimate to become a measurement. A judge who asks any one of these five in a different form should hear the same honest answer each time, not a different hedge depending on which specific number they picked. Second, questions 9, 19 and 20 are all variations on "why does an existing system not already do this," and each answer draws the same distinction: an existing system records or registers; SwasthyaGrid proposes and routes a decision to a named human. That distinction is the single sentence this entire pitch could be reduced to if a judge allowed only one. Third, the seven new questions (19 through 25) were chosen specifically to extend the eighteen inherited questions into exactly the ground this document's own research turned up that plan section 13 could not have anticipated when it was written: a national facility registry that already exists, a documented decade-old weakness in India's own HMIS, a quarterly government ranking cadence that gives the roadmap a free external check, a named grant program as a funding alternative, a dedicated 2025 disposal guideline, the official SDG indicator definitions, and eVIN's own staged, state-by-state history rather than a single national launch. None of these seven was available to state until the research for this document was done, which is itself the honest answer to a different, unasked question: why a research document this long is worth writing at all, rather than stopping at the ten-slide deck.

### 17.3 How this table should be used in a live round

A judge's panel rarely asks a question in the exact words this table uses, and a team that answered only by reciting a row verbatim would sound rehearsed rather than prepared. The table's real use is as a rehearsal map, not a script: each row names the single fact or number that has to stay fixed in the answer regardless of how the question is phrased, while the surrounding sentence can and should change to match the judge's actual wording. A judge who asks "isn't this just e-Aushadhi with a better interface" is asking question 1 in different words, and the answer should still land on the same two numbers, 0.25% of the NHM allocation and the 6.1% to 12.5% rescue threshold, even though the opening sentence will not start with "e-Aushadhi records what was bought and issued" verbatim.

It is also worth stating plainly which rows in Table 17.1 this team considers hardest to defend under sustained follow-up, because a defence sheet that pretended every row was equally solid would itself be a credibility risk. Questions 3, 13 and 24, all variations on how the headline impact number was built, are the rows most likely to draw a second and third follow-up question in a live round, precisely because they rest on a model rather than a measurement. The honest preparation for that follow-up is not a sharper rhetorical answer; it is having Table 14.1 through Table 14.5 of this document open and ready to walk through line by line, because the actual defence of an estimate is showing its full working, not asserting its confidence more firmly. A team that treats this document as a source of talking points rather than as the working itself will eventually be caught short by a fourth follow-up question; a team that treats it as the working, and simply turns to the right table live, will not. The same rule applies to question 2 and question 16, both about pricing: a confident restatement of ₹12 L will satisfy a first question, but only the facility-tier arithmetic in part D of this document will satisfy a second one that asks why a smaller district pays the same price as a larger one inside the same state.


## Appendix A: Bibliography

Every source cited in this document, in ID order. `[M]` marks a model output (Appendix B) and `[A01]` to `[A17]` mark assumptions (Appendix D).

| ID | Source | URL | Used for |
|---|---|---|---|
| S01 | MoHFW (2024) 'Health Dynamics of India (Infrastructure and Human Resources) 2022-23', PIB release PRID 2053070, data as of 31 Mar 2023 | https://pib.gov.in/PressReleasePage.aspx?PRID=2053070 | Facility counts; 79.9% CHC specialist shortfall (4,413 of 21,964 in place) |
| S02 | 'Availability of Key Essential Medicines in Public Health Facilities of a South Indian Union Territory' (Puducherry), PMC8654139 | https://pmc.ncbi.nlm.nih.gov/articles/PMC8654139/ | 66 to 80% range; 72.2% state PHC mean; 77% central PHC |
| S03 | 'An Assessment of the Availability of Essential Medicines in Gadag Taluk, Karnataka', PMC10292169 | https://pmc.ncbi.nlm.nih.gov/articles/PMC10292169/ | 74.2% |
| S04 | 'Factors Affecting the Availability and Utilization of Essential Medicines in India: A Systematic Review', PMC11174260 | https://pmc.ncbi.nlm.nih.gov/articles/PMC11174260/ | Haryana: 60% of medicines out of stock for 3 to 6 months |
| S05 | Chaudhury, Hammer, Kremer, Muralidharan, Rogers (2006) 'Missing in Action', Journal of Economic Perspectives 20(1) | https://www.aeaweb.org/articles?id=10.1257/089533006776526058 | 40% health-worker absence (research only) |
| S06 | Suraweera et al. (2020) 'Trends in snakebite deaths in India from 2000 to 2019', eLife 9:e54076 | https://elifesciences.org/articles/54076 | 58,000 deaths a year; 70% in 8 states |
| S07 | WHO, rabies burden in India; National Action Plan for Dog Mediated Rabies Elimination by 2030 *(R0 locates URL)* | https://www.who.int/news/item/25-10-2021-adopt-one-health-stop-rabies-india-launches-new-national-action-plan-for-dog-mediated-rabies-elimination-by-2030 | 18,000 to 20,000 rabies deaths a year |
| S08 | Registrar General of India, SRS Special Bulletin on Maternal Mortality 2019-21 *(R0 locates URL)* | https://new.census.gov.in/nada/index.php/catalog/45561 | MMR 93 |
| S09 | 'Spatio-temporal analysis of dengue outbreaks in India (2021-2025): evidence from IDSP', PMC13479492 *(R0 verifies)* | https://pmc.ncbi.nlm.nih.gov/articles/PMC13479492/ | Dengue signal 4 to 6 weeks before peak |
| S10 | MoHFW (2026) 'National Health Accounts Estimates for India 2022-23', PIB PRID 2265816 | https://pib.gov.in/PressReleasePage.aspx?PRID=2265816 | OOPE 43.4% of total health expenditure |
| S11 | NHSRC 'National Health Accounts Estimates for India 2021-22' *(R0 locates URL)* | https://www.mohfw.gov.in/sites/default/files/NHA%202021-22_up.pdf | Pharmaceuticals 30.84% of current health expenditure |
| S12 | UNDP India 'Improving Vaccination Systems: eVIN' | https://www.undp.org/india/projects/improving-vaccination-systems-evin | 80% fewer stock-outs; 29,000+ cold chain points; 733 districts; 36 States/UTs; 12 states at 2015 launch |
| S13 | Constitution of India, Seventh Schedule, List II, Entry 6 | https://www.indiacode.nic.in/handle/123456789/15240 | Health is a State subject |
| S14 | Digital Personal Data Protection Act, 2023 | https://www.meity.gov.in/data-protection-framework | No patient data in scope |
| S15 | C-DAC 'Strengthening Free Drug Service Initiative' (e-Aushadhi / DVDMS) | https://cdac.in/index.aspx?id=lu_SFDI | Incumbent drug-supply ledger |
| S16 | CAG audit of public health infrastructure, Telangana (report tabled Aug 2024), reported by Medical Dialogues | https://medicaldialogues.in/news/health/doctors/rs-390-crore-loss-over-expired-drugs-shortage-of-hospital-beds-staff-cag-report-flags-health-sector-concerns-in-telangana-132815 | ₹390.26 Cr expired drugs 2016-22 (e-Aushadhi data); ₹17.13 Cr issued with 1 to 89 days of shelf life |
| S17 | CAG compliance audit, Odisha State Medical Corporation (Oct 2026), reported by UNI | https://www.uniindia.com/east-india/audit-odisha-cag-drugs-expiry/199282 | ₹168 Cr expired, Apr 2019 to Jan 2025; ₹47 Cr of COVID medicines |
| S18 | PRS Legislative Research 'Demand for Grants 2025-26 Analysis: Health and Family Welfare' | https://prsindia.org/budgets/parliament/demand-for-grants-2025-26-analysis-health-and-family-welfare | NHM ₹37,227 Cr (37% of the ministry's ₹99,859 Cr) |
| S19 | NITI Aayog 'List of 112 Aspirational Districts' | https://www.niti.gov.in/sites/default/files/2023-07/List-of-112-Aspirational-Districts%20%281%29.pdf | 112 districts; Rajasthan's five (Baran, Dholpur, Jaisalmer, Karauli, Sirohi) |
| S20 | NITI Aayog (2018) 'Transformation of Aspirational Districts: Baseline Ranking and Real-time Monitoring' | https://www.niti.gov.in/sites/default/files/2018-12/AspirationalDistricts-Book.pdf | 49 indicators; health and nutrition weight 30% |
| S21 | PIB (Jul 2026) ABDM statistics: 95.99 crore ABHA IDs as of 31 Jul 2026 | https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc202676912801.pdf | 95.99 Cr ABHA IDs |
| S22 | Health Care Without Harm and Arup (2019) 'Health Care's Climate Footprint' | https://global.noharm.org/media/4366/download?inline=1 | Health care 4.4% of global net emissions; 71% of it from the supply chain; India's health share of national footprint |
| S23 | Ministry of Panchayati Raj, Local Government Directory (district count) *(R0 records the count on the day)* | https://lgdirectory.gov.in/ | About 780 districts |
| S24 | Scroll (Dec 2024) 'Rajasthan's BJP government scraps new districts' | https://scroll.in/latest/1077338/rajasthans-bjp-government-scraps-12-new-districts-and-3-divisions | Rajasthan: 41 districts |
| S25 | Codingclave (2026) Indian healthcare software (HMIS/EHR) pricing benchmarks *(R0 locates URL)* | https://codingclave.com/blog/best-hospital-management-software-india | ₹3 L to ₹25 L a year price band |
| S26 | upGrowth (2026) India SaaS unit-economics benchmarks *(R0 locates URL)* | https://upgrowth.in/cac-benchmarks-indian-b2b-saas-arr-band-2026/ | Gross margin, CAC payback ranges |
| S27 | Sabin Vaccine Institute, 'Digitized supply chain delivers vaccines to the last mile' (eVIN, UNDP and Logistimo) | https://sabin.org/resources/digitized-supply-chain-delivers-vaccines-to-the-last-mile-2 | eVIN's design partners |
| S28 | Kim, W. C. and Mauborgne, R. (2005) Blue Ocean Strategy, Harvard Business School Press | n/a (book) | ERRC grid |
| S29 | Helmer, H. (2016) 7 Powers: The Foundations of Business Strategy, Deep Strategy | n/a (book) | Switching costs, process power, counter-positioning |
| S30 | United Nations, Sustainable Development Goals targets 3.8, 10.2, 12.3 | https://sdgs.un.org/goals | SDG mapping |
| S31 | SwasthyaGrid prototype audit (`swasthyagrid-gcp/case/02-facts.md` §4) and prototype run log for PHC Kota-4 (simulated data) | local file | 1.2 → 21.0 days; 40 facilities in 5 Rajasthan districts; transfer rules |
| S32 | ThePrint (Sep 2024) 'Rural India has an 80% shortfall of specialist doctors' | https://theprint.in/health/rural-india-has-an-80-shortfall-of-specialist-doctors-mp-gujarat-tamil-nadu-worst-off/2259874/ | Per-specialty shortfall: surgeons 83.2%, paediatricians 81.6%, physicians 79.1%, ObGyn 74.2% |
| S33 | 'Impact of electronic vaccine intelligence network application used in immunization sessions in Pune city', IJCMPH | https://www.ijcmph.com/index.php/ijcmph/article/view/9234 | Vaccine wastage changes after eVIN |
| S34 | 'Disposal Practices of Unused and Expired Medicines Among the General Public and Pharmacies: Odisha', PMC10867696 | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10867696/ | 82.1% of households bin unused drugs; pharmacy disposal |
| S35 | CAG ICISA IT audit report on e-Aushadhi *(R0 verifies the 31 States/UTs dashboard figure)* | https://cag.gov.in/uploads/icisa_it_reports/e-Aushadhi-063622732a5c9d1-91268077.pdf | e-Aushadhi coverage |
| S36 | Medical Dialogues / Deccan Herald (Sep 2024) reports on HDI 2022-23 specialist shortfall | https://deccanherald.com/india/rural-health-centres-see-70-shortage-of-specialist-doctors-says-report-3183530 | Cross-check of S01 and S32 |
| S40 | Deccan Herald (2024) 'CAG report highlights glaring shortages in essential drug stocks in Karnataka', reporting on CAG audit of Karnataka State Medical Supplies Corporation Limited | https://www.deccanherald.com/india/karnataka/cag-report-highlights-glaring-shortages-in-essential-drug-stocks-in-karnataka-3321784 | Karnataka: ₹23.03 Cr of expired drugs not disposed of, 2019-22, stored alongside regular stock; drug shortages 2017-18 to 2021-22. Retrieved 2026-10-07 |
| S41 | The Tribune (2024) 'Public health at risk', reporting on CAG audit of Haryana Medical Services Corporation Limited | https://tribuneindia.com/news/public-health-at-risk | Haryana: ₹14.52 Cr of expired drugs in warehouses; 376 lakh units of substandard drugs issued to patients in Panipat, Nuh and Hisar; supply delays up to 1,542 days. Retrieved 2026-10-07 |
| S42 | Comptroller and Auditor General of India (2024) Chapter IV, 'Availability of drugs, medicines, equipment and other consumables', audit of Uttar Pradesh Medical Supplies Corporation Limited (UPMSCL), 2018-22 | https://cag.gov.in/uploads/download_audit_report/2024/H-CHAPTER-IV-Availability-of-drugs,-medicines,-Equipment-and-other-Consumables-067640dd62801a8.44640334.pdf | Uttar Pradesh: UPMSCL could not supply demanded drug quantities to DGMH, NHM and DGME, 2018-22, a procurement-side shortfall rather than a stock-visibility one. Retrieved 2026-10-07 |
| S43 | MoHFW / National Health Systems Resource Centre (2026) 'National Health Accounts Estimates for India 2022-23' | https://nhsrcindia.org/sites/default/files/2026-05/NHA%202022-23%20Report.pdf | Pharmacy spending 21.19% of current health expenditure in 2022-23, up from 19.35% in 2021-22; corrects the deck's unsourced "pharmaceuticals 30.84%" figure (flagged in R0-verify.md as S11 CORRECTED). Retrieved 2026-10-07 |
| S44 | Kotwani, A. et al. (2015) 'Availability of medicines in public sector health facilities of two North Indian States', BMC Pharmacology and Toxicology 16:43 | https://bmcpharmacoltoxicol.biomedcentral.com/articles/10.1186/s40360-015-0043-8 | Overall medicine availability 45.2% (Punjab) and 51.1% (Haryana), 80 facilities across 12 districts; among unavailable medicines, about 40% (Punjab) and 60% (Haryana) were out of stock for 3 to 6 months, 19% and 8% for more than 6 months. Retrieved 2026-10-07 |
| S45 | Mohanan, M. et al., 'Public patient forwarding to private pharmacies: an analysis of data linking patients, facilities and pharmacies in the state of Odisha, India', PMC11836861 | https://pmc.ncbi.nlm.nih.gov/articles/PMC11836861/ | More than 70% of public patients prescribed a drug in Odisha's public facilities purchased it from a private pharmacy instead of receiving it free; purchase from private pharmacies continued even where facility stock exceeded 75%, implying stock level is not the only driver. Retrieved 2026-10-07 |
| S46 | Kremer, M. et al. (2023) Zipline drone-delivery impact assessment, Ghana Western North Region, cited by GiveWell | https://files.givewell.org/files/DWDA%202009/Zipline/Kremer_et_al_2023_Zipline_impact_assessment.pdf | Facilities served by aerial drone delivery saw a 30% reduction (p<0.05) in the duration of vaccine stock-outs and a 44% reduction in missed immunization opportunities, an international precedent for what visibility-plus-fast-transfer buys in a public health supply chain, used for contrast with eVIN in §7. Retrieved 2026-10-07 |
| S60 | World Health Organization, India country office, 'Aspirational Blocks Programme' | https://www.who.int/india/aspirational-blocks-programme | Programme launched 7 Jan 2023, 500 blocks across 27 states and 4 Union Territories; WHO supports 52 blocks in 10 states on seven health indicators (antenatal care registration, institutional deliveries, low-birth-weight monitoring, quality-assurance certification, hypertension screening, diabetes screening, tuberculosis treatment success). Retrieved 2026-10-08. Used in section 9 (adjacent expansion) to show the aspirational-geography concept already growing below the district level. |
| S61 | World Bank, 'How Government e-Marketplace is revolutionizing procurement in India' | https://blogs.worldbank.org/en/governance/how-government-e-marketplace-revolutionizing-procurement-india | GeM (Government e-Marketplace) cut a sampled state purchase's delivery time from 30 to 60 days to 10 to 15 days; targets 15 to 25% savings on procurement volumes; serves about 138,000 sellers and 27,000 buyer organisations, 469,000 products and services, with 730,000 orders worth about Rs 115,000 crore processed to date. Retrieved 2026-10-08. Used in section 9 to describe the state-government purchase route a district licence would travel through. |
| S62 | Damschroder, L. J., Aron, D. C., Keith, R. E., Kirsh, S. R., Alexander, J. A. and Lowery, J. C. (2009) 'Fostering implementation of health services research findings into practice: a consolidated framework for advancing implementation science', Implementation Science, 4:50 | https://doi.org/10.1186/1748-5908-4-50 | The Consolidated Framework for Implementation Research (CFIR), a peer-reviewed, widely cited meta-framework synthesising implementation-science constructs across five domains (intervention characteristics, outer setting, inner setting, individuals involved, process). Retrieved 2026-10-08. Used in section 8 and Appendix E to structure the validation plan's interview domains on a named academic framework rather than an ad hoc list. |
| S63 | Ancker, J. S. et al. (2017) 'Effects of workload, work complexity, and repeated alerts on alert fatigue in a clinical decision support system', BMC Medical Informatics and Decision Making | https://pmc.ncbi.nlm.nih.gov/articles/PMC5387195/ | Across the cited literature, 49 to 96% of clinical alerts are overridden; in this study's own cohort, clinicians accepted about one-quarter of drug alerts and one-third of clinical reminders, and the chance of overriding a repeated alert for the same patient rose to 87.9% once the first instance was overridden. Retrieved 2026-10-08. Used in section 8 to justify a design choice (one ranked proposal per item, not a running feed of alerts) against a documented failure mode of alert-heavy decision-support design. |
| S64 | NITI Aayog, 'First Delta Ranking, May 2018, Aspirational Districts Programme' | https://www.niti.gov.in/sites/default/files/2018-12/FirstDeltaRanking-May2018-AspirationalRanking.pdf | The Aspirational Districts Programme (launched January 2018, 112 districts) ranks districts on incremental ("delta") month-on-month change across 81 data points in six themes, intended to spur competitive federalism; the ranking identifies which districts and indicators are lagging but does not itself move any resource between districts. Retrieved 2026-10-08. Used in section 10 as an example of an existing public measurement system that records and ranks but does not rebalance, parallel to the five-system capability grid on slide 6. |
| S65 | BioSpectrum India, 'Bridging the Gaps: Why India's Medicine Supply Chain Needs Systemic Reset' | https://biospectrumindia.com/views/17/28514/bridging-the-gaps-why-indias-medicine-supply-chain-needs-systemic-reset.html | Industry commentary stating that "a doctor or a patient often has no way of knowing whether a medicine is sitting in a warehouse two states away or genuinely out of stock nationwide," and that most apparent scarcity reflects a coordination failure rather than a true shortage; also distinguishes high-volume ambient medicine distribution from temperature-controlled cold-chain distribution, the two systems eVIN and SwasthyaGrid respectively address. Retrieved 2026-10-08. Used in section 10 to corroborate the visibility-gap thesis with an independent industry source and to explain why eVIN's cold-chain result does not mechanically transfer to ambient medicine stock. |
| S80 | AsianHHM (trade media, retrieved 2026-10-08), summarising Health Care Without Harm and Arup (2019) 'Health Care's Climate Footprint' | https://www.asianhhm.com/articles/safeguarding-health-protecting-the-planet-the-healthcare-sectors | Secondary citation of "1.5% of India's national climate footprint"; this document notes the figure could not be located inside the primary report itself (cross-checked against S22), so it is reported as a widely repeated secondary figure, not a confirmed one |
| S81 | Cyril Amarchand Mangaldas corporate blog (retrieved 2026-10-08), summarising CDSCO (Central Drugs Standard Control Organisation) guidance document on disposal of expired and unused drugs, dated 26 May 2025 | https://corporate.cyrilamarchandblogs.com/2025/07/where-do-expired-and-discarded-pills-land-a-review-of-the-drug-disposal-regime-in-india/ | India's drug-disposal regime: the Bio-Medical Waste Management Rules, 2016 govern facility and distributor disposal; distributors and stockists must return expired stock to manufacturers or dispose of it under those rules; unregulated disposal risks contaminating water supplies and feeding informal resale markets |
| S82 | PRS Legislative Research, 'Demand for Grants 2024-25 Analysis: Health and Family Welfare' | https://prsindia.org/files/budget/budget_parliament/2024/DFG_Analysis_2024-25_Health.pdf | National Health Mission (NHM) allocation trend: Rs 28,859 Cr (2022-23), Rs 29,085 Cr (2023-24), Rs 36,000 Cr budget estimate (2024-25), a year-on-year rise in the budget line SwasthyaGrid's licence rides on, retrieved 2026-10-08 |
| S83 | Gavi, the Vaccine Alliance, 'Programme Audit Report: India', November 2023 | https://gavi.org/news/document-library/programme-audit-report-india-november-2023 | eVIN's donor-funded origin and transition risk: Gavi contributed USD 67 million between January 2014 and December 2022 through UNDP; the audit found no comprehensive plan to transition all Gavi-funded eVIN costs, at both national and sub-national level, onto government budgets, which this document cites as an honest precedent for the transition risk a donor-independent licence model is built to avoid, retrieved 2026-10-08 |
| S84 | UNDP, 'Building a development programme that works: three lessons from eVIN' | https://www.undp.org/blog/building-development-programme-works-three-lessons-evin | States that built-in state-government ownership and continuous feedback from health officials helped enable a transition of eVIN's running cost to government budgets, specifically the National Health Mission, after donor funding ended; read alongside S83 as the other half of the same transition story, retrieved 2026-10-08 |
| S85 | Government e-Marketplace (GeM), overview as reported in trade and policy press | https://www.outlookbusiness.com/news/tcs-bags-contract-for-running-maintaining-gem-procurement-portal-goyal-news-298275 | GeM is the standing central and state government procurement channel for goods and services, including recurring software contracts; cited here only to establish that an institutional channel already exists for a state to buy and renew a software licence without a one-off tender each year, not to claim SwasthyaGrid is listed on it, retrieved 2026-10-08 |
| S86 | UNEP Food Waste Index Report 2024, as reported by Down To Earth | https://www.downtoearth.org.in/blog/governance/how-india-is-positioned-to-achieve-un-s-sustainable-consumption-and-production-goal-78877 | About 50 kg of food is wasted per person a year in India; India has not yet adopted a national target aligned to SDG 12.3 (halving food and retail waste by 2030); cited only to show the national waste-reduction policy sits one level above any medicine-specific target and is itself still forming, retrieved 2026-10-08 |
| S100 | BioVoice News (7 Jul 2022) 'Ayushman Bharat Digital Mission: NHA onboards 1 lakh govt and private healthcare facilities in its registry' | https://biovoicenews.com/ayushman-bharat-digital-mission-nha-onboards-1-lakh-govt-private-healthcare-facilities-in-its-registry/ | Retrieved 8 Oct 2026. More than 1,00,000 facilities (about 97% government) already registered in the ABDM Health Facility Registry, used in section 13's data-access table to show the registry layer SwasthyaGrid reads from already exists and does not need to be built |
| S101 | Saikia, D., Husain, Z. and Bora, J. K. (Institute of Economic Growth policy brief, Jan 2013) 'Challenges of HMIS in India' | https://iegindia.org/policy-brief/challenges-of-hmis-in-india | Retrieved 8 Oct 2026. Finds that India's Health Management Information System suffers poor data quality, inadequate frontline training and weak monitoring, particularly for private facilities; used in section 13's pre-mortem table as the documented precedent for a data-quality failure mode |
| S102 | PMC7643996, 'An assessment of the electronic Vaccine Intelligence Network (eVIN) in India' (peer-reviewed, Nov 2020) | https://pmc.ncbi.nlm.nih.gov/articles/PMC7643996 | Retrieved 8 Oct 2026. Confirms eVIN launched in 2015 in 12 named states (Assam, Chhattisgarh, Gujarat, Jharkhand, Manipur, Nagaland, Odisha, Bihar, Himachal Pradesh, Madhya Pradesh, Rajasthan, Uttar Pradesh) before a second funded round scaled it nationally; used in section 15 as the precedent for a staged, state-by-state roadmap rather than a simultaneous national launch |
| S103 | Central Drugs Standard Control Organisation, 'Guidance document on disposal of expired/unused drugs' (released 27 May 2025) | https://cdsco.gov.in/opencms/opencms/en/Notifications/Public-Notices/ | Retrieved 8 Oct 2026. Confirms CDSCO has issued a dedicated national guidance document on expired-drug disposal, listed among its public notices; used in section 13's regulatory table and section 14's honesty table on disposal-linked claims |
| S104 | UN Statistics Division, SDG Indicators metadata, Goal 3 Target 3.8 (indicators 3.8.1, coverage of essential health services, and 3.8.2, proportion of the population with household health spending above 40% of discretionary budget) | https://unstats.un.org/sdgs/metadata/?Goal=3&Target=3.8 | Retrieved 8 Oct 2026. Gives the official indicator definitions used in section 14's SDG mapping table, distinguishing the indicator SwasthyaGrid's availability metric speaks to from the indicator it does not measure |
| S105 | BioSpectrum India (7 Apr 2022) 'INDovation Programme to incubate, commercialise Indian health start-ups' | https://biospectrumindia.com/news/20/21008/indovation-prog-to-incubate-commercialise-indian-health-start-ups-.html | Retrieved 8 Oct 2026. Atal Innovation Mission (NITI Aayog), together with Social Alpha and IIT-Delhi, runs a grant of up to Rs 65 lakh per winning digital-health start-up for product trials and pilot studies; used in section 15's funding table and in a new judge question on grant funding as an alternative to the paid-pilot path |
| S106 | The News Minute (2026) 'Health rankings for aspirational districts: AP's Parvathipuram tops NITI Aayog list' | https://www.thenewsminute.com/andhra-pradesh/health-rankings-for-aspirational-districts-aps-parvathipuram-tops-niti-aayog-list | Retrieved 8 Oct 2026. Confirms NITI Aayog issues a quarterly Delta Ranking of the 112 aspirational districts on health and nutrition progress (quarter ending March 2026 cited); used in section 15 to anchor the roadmap's gate cadence to an existing government reporting rhythm rather than an invented one |
| S120 | medRxiv (2023) 'Health Impact Evaluation of Aspirational Districts Programme in India: Evidence from the National Family Health Survey' | https://www.medrxiv.org/content/10.1101/2023.07.27.23293263.full.pdf | Independent evidence that the 112 aspirational districts show measurable health gains against the rest of India; retrieved 7 Oct 2026; used in section 1's adjective table |
| S121 | Ministry of Health and Family Welfare, National Health Mission, Joint Secretary letter on the updated Essential Drugs List for Health and Wellness Centre, PHC and Sub-Health Centre level | https://nhm.gov.in/New_Updates_2018/Om_and_orders/CPHC/Others/JS_letter_on_updated_EDL_for__HWC_-_PHC_and_SHC_level.pdf | Confirms the government already defines and periodically updates a facility-level essential drugs list; retrieved 7 Oct 2026; used in section 2's "why obvious fixes stall" table |
| S122 | Comptroller and Auditor General of India, Performance Audit report, chapter on public health infrastructure management | https://cag.gov.in/uploads/download_audit_report/2022/9-PA-PHIMS-Chapter-7-067c19ba81532d9.67564241.pdf | A second CAG precedent (beyond Telangana and Odisha) for audit-level findings on health infrastructure and stock management gaps; retrieved 7 Oct 2026; used in section 0's source hierarchy table |
| S123 | Human Resources for Health, vol 20 (2022), systematic review of community-level stock-outs of essential medicines in low and middle income countries | https://human-resources-health.biomedcentral.com/articles/10.1186/s12960-022-00755-8 | Global comparator: community health worker stock-out rate 28.93% against a health-centre rate of 9.17%; worsened from 26.36% in 2006-15 to 48.65% in 2016-21; retrieved 7 Oct 2026; used in section 2 to show the paradox is not India-specific |
| S124 | National Institute of Public Finance and Policy, hosting a WHO-commissioned report (Sep 2017) on public financial management in India's health sector | https://nipfp.org.in/media/documents/WHO_PFM_Report_Sep_2017_xKlQ1uo.pdf | Confirms the Public Financial Management System tracks National Health Mission fund flow from the Union consolidated fund through state treasuries to State Health Societies, traceable to the district level, in real time; retrieved 7 Oct 2026; used in section 0's source hierarchy table |
| S125 | Management Sciences for Health, for USAID's Uganda Strengthening Supply Chain Systems Activity (2022), 'Digitizing Uganda's supply chain to boost access to maternal, newborn and other essential medicines' | https://msh.org/story/digitizing-ugandas-supply-chain-to-boost-access-to-maternal-newborn-and-other-essential-medicines/ | A second national precedent alongside eVIN: over 760 facilities synced to one digital stock portal hold about 80% average availability across 41 essential medicines for about 46 million people; retrieved 7 Oct 2026; used in section 2's "what would change our mind" table |
| S126 | Ministry of Health and Family Welfare (2017) National Health Policy 2017 | https://main.mohfw.gov.in/sites/default/files/9147562941489753121.pdf | States the government's own commitment to free essential drugs at public facilities and to directing two-thirds or more of health resources to primary care; retrieved 7 Oct 2026; used in section 1's adjective table and section 2's feasibility framing |


## Appendix B: Model output

The model is deterministic and has no inputs. The block below is the unedited output of `model/nexora_model.py`; every `[M]` figure in this document is read from it.

```
== IMPACT ==
facilities 38,241
baseline stock-out days a year 2,71,62,200 = 2.72 crore
bear 30% avoided 81,48,660 = 81.5 lakh = 0.81 crore | availability after 80.5%
base 50% avoided 1,35,81,100 = 135.8 lakh = 1.36 crore | availability after 86.1%
bull 80% avoided 2,17,29,760 = 217.3 lakh = 2.17 crore | availability after 94.4%
base avoided per facility a year 355.1
base avoided per district a year 17,412
sensitivity, lakh days avoided (rows availability, cols cut 30/50/80)
  66% 99.7 166.1 265.8
  72.2% 81.5 135.8 217.3
  80% 58.6 97.7 156.3
== MARKET ==
ACV 12.0 L = base 4 + per-facility 7.0 (50 x Rs 14,000) + support 1
facilities per district 49.0
TAM all districts 780 x 12 L = Rs 93.60 Cr a year
SAM aspirational districts 112 x 12 L = Rs 13.44 Cr a year
Beachhead Rajasthan 41 x 12 L = Rs 4.92 Cr a year
SOM Y3 base 80 x 12 L = Rs 9.60 Cr a year
SOM share of TAM 10.3%
NHM per district Rs 47.73 Cr | ACV share 0.25%
== UNIT ECONOMICS (base) ==
gross profit per district per month 0.710 L | CAC payback 5.6 months
LTV (5 yrs) 42.6 L | LTV:CAC 10.65x
== REVENUE PATH (Rs Cr) ==
bear districts [12, 30, 50] | ARR 1.44 3.60 6.00 | onboarding 0.36 0.54 0.60 | billings 1.80 4.14 6.60 | Y3 recurring 90.9% | GM 62% | Y3 gross profit 3.72
base districts [12, 45, 80] | ARR 1.44 5.40 9.60 | onboarding 0.36 0.99 1.05 | billings 1.80 6.39 10.65 | Y3 recurring 90.1% | GM 71% | Y3 gross profit 6.82
bull districts [12, 60, 105] | ARR 1.44 7.20 12.60 | onboarding 0.36 1.44 1.35 | billings 1.80 8.64 13.95 | Y3 recurring 90.3% | GM 76% | Y3 gross profit 9.58
== SENSITIVITY, Y3 ARR Rs Cr (base 9.60) ==
districts by Y3 50 to 105: 6.00 to 12.60
ACV Rs 9 L to Rs 15 L: 7.20 to 12.00
facilities per district 35 to 65 (ACV 9.9 to 14.1 L): 7.92 to 11.28
== CUSTOMER ROI (CAG) ==
Telangana Rs 390.26 Cr over 6.00 yrs = Rs 65.04 Cr a year = Rs 1.97 Cr per district a year | licence pays back at 6.1% redeployed
Odisha Rs 168.00 Cr over 5.83 yrs = Rs 28.80 Cr a year = Rs 0.96 Cr per district a year | licence pays back at 12.5% redeployed
```


## Appendix C: Glossary and abbreviations

**Answer.** This document uses thirty-one abbreviations and twenty further terms of art across its fourteen sections. Table C.1 lists every abbreviation that appears anywhere in this document with its expansion. Table C.2 defines twenty terms a reader outside public health finance or Indian health administration would need, each in plain language tied to how the term is actually used in this document rather than a textbook definition.

### C.1 Abbreviations

Table C.1 lists all thirty-one abbreviations used anywhere in this document, in the order a reader is likeliest to meet them, each paired with its full expansion rather than left to be inferred from context.

| Abbreviation | Expansion |
|---|---|
| PHC | Primary health centre |
| CHC | Community health centre |
| NHM | National Health Mission |
| DHO | District health officer |
| MO | Medical officer |
| ABDM | Ayushman Bharat Digital Mission |
| ABHA | Ayushman Bharat Health Account |
| HMIS | Health management information system |
| DVDMS | Drug and vaccine distribution management system |
| eVIN | Electronic vaccine intelligence network |
| IHIP | Integrated Health Information Platform |
| IDSP | Integrated Disease Surveillance Programme |
| ADP | Aspirational Districts Programme |
| ACV | Annual contract value |
| ARR | Annual recurring revenue |
| CAC | Customer acquisition cost |
| LTV | Lifetime value |
| TAM | Total addressable market |
| SAM | Serviceable addressable market |
| SOM | Serviceable obtainable market |
| OOPE | Out-of-pocket expenditure |
| CAG | Comptroller and Auditor General of India |
| TSMSIDC | Telangana State Medical Services Infrastructure Development Corporation |
| OSMCL | Odisha State Medical Corporation Limited |
| LGD | Local Government Directory |
| ERRC | Eliminate, Reduce, Raise, Create (the Blue Ocean four-actions grid) |
| TELOS | Technical, Economic, Legal, Operational, Schedule feasibility test |
| SDG | Sustainable Development Goal |
| MMR | Maternal mortality ratio |
| RAG | Red, amber, green status rating |
| HWC | Health and Wellness Centre |

*A full term appears at first use in each section of this document before any abbreviation stands alone.*

### C.2 Glossary

Table C.2 defines twenty further terms of art a reader outside public health finance or Indian health administration would need, each written in plain language tied to how this document actually uses the term rather than a textbook definition.

| Term | What it means, as used in this document |
|---|---|
| Days of cover | The number of days a facility's current stock of an item would last at its average daily use rate, calculated as units on hand divided by average daily use [S31] |
| Stock-out day | One day on which a facility holds zero usable units of a tracked item; the model's central measure of the problem this document addresses |
| Tracer medicine | One of seven medicines the SwasthyaGrid prototype tracks as a representative basket (adrenaline, anti-retroviral drugs, anti-snake-venom serum, oral rehydration salts, oxytocin, paracetamol, tetanus toxoid) [S31] |
| Lateral transfer | Moving stock from one facility with surplus to a nearby facility that is short, rather than ordering new stock from a warehouse |
| First-expiry-first-out | An inventory discipline that issues the stock closest to its expiry date before newer stock, reducing the chance that usable medicine expires unused |
| Aspirational district | One of 112 districts NITI Aayog named for focused development attention, scored on 49 indicators across five themes, with health and nutrition carrying 30% of the composite score [S19][S20] |
| Essential drugs list | The government-defined list of medicines a given facility level (Sub-Health Centre, PHC, or Health and Wellness Centre) is expected to stock and dispense free of charge [S121] |
| Gross margin | The share of revenue remaining after the direct cost of serving a customer, expressed as a percentage; SwasthyaGrid's base-case assumption is 71% [A08] |
| CAC payback | The number of months of gross profit from one customer needed to recover the cost of acquiring that customer; 5.6 months in the base case [M] |
| Recurring revenue share | The share of a year's billings that comes from ongoing licence fees rather than one-time onboarding charges |
| Theory of change | A stated causal chain from an intervention's inputs through its activities and outputs to its intended outcomes and impact, with the evidence strength of each link named |
| Beachhead | A single, deliberately narrow market entry point used to prove a product before expanding, here Rajasthan's 41 districts [S24] |
| Buying centre | The set of roles inside a government buyer organisation who sign, champion, use, and receive reports from a purchased system, distinct from one another in a government sale |
| Switching cost | The real or perceived cost a customer would bear to replace an incumbent system with an alternative, one of the seven sources of sustainable advantage this document scores SwasthyaGrid against [S29] |
| Counter-positioning | A source of advantage in which an incumbent cannot adopt a challenger's business model without damaging its own existing business [S29] |
| Shadow mode | A rollout phase in which a system generates proposals for a human to review without any transfer actually occurring, used to test whether officers act on proposals before real stock moves |
| Sensitivity analysis | Testing how much a model's output number changes when one input assumption changes, holding all others fixed |
| Bottom-up market sizing | Building a market-size estimate by counting actual buying units (districts, in this case) and multiplying by a price, rather than taking a percentage slice of an unrelated larger market figure |
| Customer validation plan | A stated plan for primary research (interviews, pilots) that has not yet been carried out, distinct from a claim that research has already happened |
| Defensive depth | Backing every claim made in a short pitch with a fuller explanation available in an appendix, so a pitch stays concise without losing rigour under questioning |
| Contrarian recommendation | A recommendation that argues against the obvious reading of a problem statement, here arguing that the primary-care shortage is substantially a visibility and misplacement problem rather than only a supply-volume problem |

Together, Tables C.1 and C.2 let a reader resolve any abbreviation or term of art met anywhere in this document without leaving this one appendix.


## Appendix D: Assumptions register, 17 assumptions and what each one moves

**Answer.** Seventeen assumptions feed the NEXORA model; none is a measured fact, and each is labelled `[A##]` everywhere it appears in this document so a reader never mistakes an assumption for a sourced figure. Table D.1 reproduces the full register from the project plan, adding two columns beyond the plan's own version: what changes elsewhere in this document if the assumption turns out to be wrong, and how the planned six-week pilot would actually test it. Four assumptions (A05 to A07, A09) carry the most weight, because they feed the licence price and the customer acquisition cost that every revenue and payback number in section 11 depends on; a reader short on time should check those four rows first.

### D.1 The register

| ID | Assumption | Value | Basis | Where it bites | If wrong, what moves | How the pilot tests it |
|---|---|---|---|---|---|---|
| A01 | Survey-day availability stands in for the share of item-days in stock | 72.2% mid [S02] | A standard proxy used in the absence of continuous stock-level data | The impact model's baseline stock-out day count | The whole 1.36 crore moneyshot and the bear-base-bull range in section 2.3 and section 14 shift proportionally | A live district's daily stock logs would replace the survey-day proxy with an actual item-day count within the first reporting cycle |
| A02 | Share of stock-out days the system removes | 30% / 50% / 80% [M] | 80% matches eVIN's own reported result for vaccines [S12]; the base case is set at half of that | The size of the moneyshot itself | A smaller observed cut would move the headline number down the same bear-base-bull scale already published, not invalidate the model | Shadow-mode approval rates in the first 90 days of a pilot would show whether proposed transfers actually happen at a rate consistent with any of the three cases |
| A03 | Tracer medicines | Seven: adrenaline, anti-retroviral drugs, anti-snake-venom serum, oral rehydration salts, oxytocin, paracetamol, tetanus toxoid | The prototype's own catalogue [S31] | Every impact figure in section 14 is scoped to these seven items only, not all medicines a PHC stocks | A wider or narrower tracer basket would change the baseline stock-out count and every figure derived from it | A pilot would confirm whether these seven remain the most operationally meaningful tracer set once real facility data is visible |
| A04 | Districts in India | About 780 | Ministry of Panchayati Raj's Local Government Directory [S23] | The total addressable market in section 9 | A materially different district count would rescale the TAM, SAM, and SOM figures in direct proportion | Not pilot-testable; this is a live government count that is simply re-checked, not tested, before any investor or jury conversation |
| A05 | Annual contract value | ₹12 L, built from a ₹4 L base, a ₹7 L facility tier (50 facilities at ₹14,000 each), and ₹1 L support [M] | Carried forward from the original deck B pricing, inside the ₹3 L to ₹25 L Indian HMIS and EHR pricing band [S25] | Every revenue, margin, and payback figure in section 11 | A different ACV directly rescales ARR, gross profit, and payback in the same proportion; the sensitivity table in section 11 already shows the ₹9 L to ₹15 L range | A signed pilot licence price, even for one district, would be the first real data point against this assumption |
| A06 | Facilities per district in the licence tier | 50 (the actual national average is 49.0) [S01] | PHC and CHC count divided by district count | The per-facility component of the annual contract value | A different average facility count per district would move the ₹7 L facility-tier component of the ACV slightly | A pilot district's actual facility count would confirm whether 50 is a reasonable round number for the tier, which it already is within one facility of the true average |
| A07 | Price per facility a year | ₹14,000 | Carried forward from the original deck B pricing | The facility-tier component of the annual contract value | A different per-facility price moves the ACV and every downstream revenue figure | Negotiation during a first pilot licence would be the actual test of whether a state accepts this per-facility rate |
| A08 | Gross margin | 71% base, 62% bear, 76% bull | Indian SaaS benchmark research [S26] | Gross profit figures throughout section 11, and the CAC payback and lifetime value calculations | A lower sustained margin would lengthen CAC payback and lower lifetime value in direct proportion, without changing the revenue path itself | A pilot's actual delivery cost per district, once real support and onboarding effort is measured, would replace this benchmark-based assumption with a measured figure |
| A09 | Blended customer acquisition cost per district | ₹4 L | A team estimate about the length and cost of a state-level government sales cycle | CAC payback and lifetime-value-to-CAC ratio | A higher real acquisition cost would lengthen payback and lower the ratio; a lower one would improve both | Tracking the actual cost of closing the first pilot district, from first contact to signed data agreement, is the direct test |
| A10 | District licence life | 5 years | A team estimate about typical government contract renewal cycles | The lifetime value calculation in section 11 | A shorter renewal cycle would lower lifetime value and the lifetime-value-to-CAC ratio in direct proportion | Only observable after a first licence reaches its renewal point, well beyond the six-week pilot window; treated honestly as unverifiable before then |
| A11 | One-time onboarding fee per new district | ₹3 L | A team estimate, set to reproduce deck B's original Year 1 and Year 2 billings figures exactly | The billings figures (as distinct from ARR) in the revenue path table in section 11 | A different onboarding fee changes billings without changing ARR, since the two are tracked separately in the model | The actual cost of onboarding the first pilot district would be the direct test |
| A12 | Districts licensed at year end | Base 12, 45, 80; bear 12, 30, 50; bull 12, 60, 105 | Carried forward from deck B's stated growth path | The entire revenue path table and its sensitivity analysis in section 11 | A slower or faster actual sales pace would move the whole table along the same bear-base-bull scale already published | The pace of district sign-ups after the first pilot would be the direct, ongoing test |
| A13 | Annual recurring revenue definition | Year-end licensed districts multiplied by the annual contract value | A standard SaaS revenue definition | Keeps ARR and one-time billings separate throughout section 11, correcting deck B's original mixing of the two | Not an assumption that can be "wrong" in the same sense as the others; it is a definitional choice kept consistent throughout this document | Not applicable; this is a bookkeeping convention, not an empirical claim |
| A14 | Expiry per district a year | Audited total divided by audited years divided by district count (Telangana over 6.0 years and 33 districts; Odisha over 5.83 years and 30 districts) | CAG audit figures [S16][S17] | The customer payback percentages (6.1% and 12.5%) in section 11 | A different per-district expiry figure would move the redeployment percentage needed for the licence to pay for itself from saved expiry alone | A pilot district's own expiry data, once visible through the district view, would replace this state-level average with a local figure |
| A15 | Central NHM allocation per district | Union NHM allocation for 2025-26 divided by about 780 districts, giving ₹47.73 Cr, central allocation only, excluding the state's own matching share [S18] | PRS Legislative Research's analysis of the 2025-26 health budget | The 0.25% top-down cross-check of the licence price against an average district's health budget in section 9 | A materially different NHM allocation figure would move this cross-check percentage, though not the bottom-up TAM and SAM figures, which do not depend on it | Not pilot-testable; this is a published budget figure, simply re-checked against the latest year's allocation |
| A16 | Six weeks from a data agreement to a live district | Assumes a data-sharing agreement signed in week 1 and a nightly export from an existing HMIS or e-Aushadhi feed thereafter [S15] | A stated plan, not yet run | The feasibility timeline in section 13 | A slower actual rollout would push back every milestone in the six-week plan, though the plan's own gates and stop rules in section 13 and section 15 already anticipate delay | The first pilot district's actual time from signature to a working district view is the direct test, and the only one that matters |
| A17 | Indian HMIS and EHR price band | ₹3 L to ₹25 L a year | A vendor-pricing scan [S25] | Confirms the ₹12 L annual contract value sits inside, not above, the existing market's pricing range | A price band materially different from this scan would call into question whether ₹12 L is competitively positioned | Not directly pilot-testable; a wider vendor-pricing survey would be the appropriate follow-up research, not a pilot |

Read down the "if wrong, what moves" column, most of Table D.1's seventeen rows rescale an existing figure rather than break the model outright, which is itself the register's main finding: the pitch has one or two load-bearing assumptions, not seventeen equally fragile ones.

*ACV: annual contract value. ARR: annual recurring revenue. CAC: customer acquisition cost. NHM: National Health Mission. HMIS: health management information system.*


## Appendix E: Customer validation plan and interview guides, not yet run

**Answer.** No customer interview has been conducted for SwasthyaGrid; this appendix names who 40 planned interviews would reach, across five roles, what each role would be asked, and which specific decision each possible finding would change, so the plan can be judged on its design before it is judged on results that do not exist yet [S31]. The plan's five role-based interview guides draw their domain structure from the Consolidated Framework for Implementation Research (CFIR), a peer-reviewed meta-framework for studying how an intervention is actually adopted inside a real organisation [S62], chosen specifically so the questions probe adoption conditions rather than simply asking whether people like the idea. Every prompt in this appendix is written as a statement inviting an open answer, not as a question ending in a question mark, consistent with this document's standing language rule; and every table and guide below states, at the point it would otherwise look most like a result, that none of it has been run.

### E.1 Why CFIR structures the interview domains

A validation plan built as a list of ad hoc questions risks missing exactly the organisational conditions that determine whether a district adopts a new coordination layer at all. CFIR organises implementation research across five domains: the intervention's own characteristics, the outer setting it is adopted into, the inner setting of the adopting organisation, the individuals involved, and the process of implementation itself [S62]. Table E.1 maps each of SwasthyaGrid's five interview roles (Table E.2 below) to the CFIR domain each role is best positioned to speak to, so the plan's structure is traceable to a named method rather than to the team's own intuition about what to ask.

| CFIR domain | What it probes | SwasthyaGrid role best placed to answer it |
|---|---|---|
| Intervention characteristics | Whether the five-step loop (section 8) fits how the work is actually done today | District Health Officer, facility pharmacist |
| Outer setting | The state policy and budget environment the licence would sit inside | State NHM Mission Director |
| Inner setting | The district's own organisational readiness, culture and existing reporting burden | District Collector, District Health Officer |
| Individuals involved | Who personally gains, loses, or bears new work from the change | Facility pharmacist, medical officer |
| Process | How an actual rollout, from agreement to live use, would need to be sequenced | State NHM Mission Director, District Collector |

*Table E.1's purpose is to show that each of the five interview guides in section E.3 below is not an arbitrary set of questions but a deliberate probe of one or more CFIR domains, chosen because that role is the one actually positioned to answer it.*

### E.2 The 40-interview plan

Table E.2 sets out the planned interview count by role, matching the 40-interview figure this document and the deck cite throughout [S31].

| Role | Planned count | Districts covered | What the interview is for |
|---|---|---|---|
| State NHM Mission Director or a senior state health department official | 5 | 5 states, including Rajasthan | Confirms whether a ₹12 L district licence (section 9.4) fits inside an identifiable NHM budget line, and what a state-level data-sharing agreement would actually require |
| District Collector | 8 | 8 districts, weighted toward Rajasthan's 5 aspirational districts [S19] | Confirms whether the aspirational-district scoring incentive (section 9.2, Table 9.2) is strong enough in practice to make a Collector champion the licence |
| District Health Officer (DHO) | 10 | 10 districts, including the 5 the prototype already models [S31] | Confirms whether the five-step loop (section 8.1) matches how a DHO's morning routine actually runs today, and what in it would need to change |
| Facility medical officer | 9 | Spread across the 10 DHO districts | Confirms whether the approval step (section 8.1, step 4) fits inside an existing facility-level workload |
| Facility pharmacist or stock-in-charge | 8 | Spread across the 10 DHO districts | Confirms whether the confirmation step (section 8.1, step 5) matches how stock receipt is actually recorded today |

*Table E.2's total is 40, matching the figure used throughout this document and the deck; the role weighting, more DHO and facility-level interviews than state-level ones, reflects that the mechanism in section 8 is used daily at the district and facility level, while the state-level agreement is signed once.*

### E.3 Interview guides, by role

Each guide below runs 6 to 8 prompts, written as statements inviting an open response rather than as questions, so a respondent is invited to describe their own experience rather than to answer yes or no.

**Guide 1: State NHM Mission Director or senior state health department official**

1. Walk through how the state's current NHM budget lines are structured, and where a new district-level licence line would sit inside that structure.
2. Describe what the state's e-Aushadhi or HMIS stock export currently contains, and who inside the department has authority to share it with an outside system.
3. Describe the state's own process for approving a new data-sharing agreement with an external party, including how long that process typically takes.
4. Describe any existing state initiative, digital or otherwise, aimed at reducing medicine stock-outs or expiry losses.
5. Describe the single biggest obstacle the department has faced in rolling out a previous digital health initiative at district level.
6. Describe what evidence the department would need to see before expanding a pilot from one district to several.
7. Describe who, inside the department, would need to sign off on a district-level licence of this kind.

**Guide 2: District Collector**

1. Describe how the district's aspirational-district composite score is tracked today, and who inside the district office is responsible for the health and nutrition component of it.
2. Describe the single health-related metric the Collector's office is under the most pressure to improve this year.
3. Describe how the Collector currently learns about a medicine or bed shortage at a specific facility, before any new system is introduced.
4. Describe what support, staffing or otherwise, the Collector's office would need to champion a new coordination tool with the District Health Officer.
5. Describe a past instance where a new reporting tool was introduced at district level, and how it was received by facility staff.
6. Describe what would make the Collector confident enough in a tool like this to mention it in a review with the state.

**Guide 3: District Health Officer**

1. Walk through a typical morning, from the first task of the day to the point at which facility-level issues are addressed.
2. Describe how a shortage at one facility is currently identified, and how long that usually takes from the shortage occurring to someone noticing it.
3. Describe what happens today when one facility has a surplus of an item that a neighbouring facility is short of.
4. Describe the data the DHO's office already receives from facilities daily or weekly, and in what format.
5. Describe what would make the DHO trust a system-generated transfer proposal enough to approve it without first calling the two facilities involved.
6. Describe any existing tool or spreadsheet the DHO's office already uses to track facility-level stock or bed occupancy.
7. Describe what the DHO would need to see in the system before approving the first transfer proposal of the day.
8. Describe the biggest single frustration in coordinating supply across facilities in the district today.

**Guide 4: Facility medical officer**

1. Describe how an incoming bed-occupancy or stock problem is currently escalated from the facility to the district office.
2. Describe how much of the medical officer's week is currently spent on logistics or supply coordination, versus clinical work.
3. Describe a recent instance where a facility ran short of an item that a nearby facility likely had in surplus.
4. Describe what would make the medical officer comfortable approving or acting on a proposal generated by a system rather than by a phone call.
5. Describe the facility's current process for confirming a delivery once it arrives.
6. Describe any concern the medical officer would raise about a new coordination tool before agreeing to use it daily.

**Guide 5: Facility pharmacist or stock-in-charge**

1. Walk through how the pharmacist currently records incoming and outgoing stock at the facility.
2. Describe how often the pharmacist checks an item's remaining stock against expected daily use.
3. Describe what information the pharmacist would want to see before confirming a transfer has arrived correctly.
4. Describe the facility's current process, if any, for flagging an item that is about to run out.
5. Describe a recent instance of an item expiring on the shelf before it was used.
6. Describe what single change to today's recording process would make the pharmacist's job easier.

### E.4 What each finding would change

A validation plan is only useful if a reader can see, in advance, what a specific answer would do to the product or the pitch. Table E.3 names six possible findings and the specific decision each one would change.

| Possible finding | Decision it would change |
|---|---|
| States report their NHM budget approval process takes longer than the 6-week rollout plan assumes | Section 13's six-week plan and its A16 assumption would need a longer first-district timeline, and the roadmap in section 15 would need to push back its first-horizon district count |
| District Health Officers say they would not approve a transfer proposal without first phoning both facilities, even with the system's ranking shown | Section 8.7's design choice (one ranked proposal, not a running feed) would still hold, but the officer-facing screen would need to surface more context per proposal, and the 20-minute workflow estimate in section 8.4 would need revision |
| District Collectors say the aspirational-district score is not, in practice, something they personally track closely | Section 9.2's buying-centre argument (the Collector as champion) would weaken, and the sales motion would need to shift toward the State NHM Mission Director as the primary champion instead |
| Facility pharmacists say today's stock recording already happens in a format SwasthyaGrid cannot read without new data entry | Section 8.6's "no new hardware" and six-week claims would both need revision, and section 13's TELOS feasibility rating on the technical dimension would move from green toward amber |
| State officials say a data-sharing agreement of this kind has never been signed with an external party before | Section 13's legal and regulatory feasibility rating would need a longer timeline, and the risk register's probability for "state refuses data sharing" (section 2's "what would change our mind" table) would rise |
| Medical officers and pharmacists independently confirm that a nearby facility's surplus is, in their own experience, common | This would be the single strongest piece of qualitative support for the paradox argued in sections 2 and 6, and would be reported in any future revision of this document as a qualitative corroboration, clearly labelled as such and never as a quantitative confirmation of the CAG-based expiry figures |

*Table E.3's last row is the finding this document would most want to report, and the one it is most careful not to pre-empt: no interview has been conducted, so this document makes no claim, anywhere, that district or facility staff have confirmed the paradox in their own words.*

### E.5 What this appendix establishes, and what it does not

This appendix has named a specific plan: 40 interviews, across 5 roles, in named proportions, each guide built against a named implementation-science framework, with a stated consequence for each of six possible findings. It has not conducted a single one of those interviews. Every number in sections 8, 9 and 10 of this document that could be strengthened or weakened by primary research is clearly tagged as a prototype result, a model output or a team assumption, never as a validated finding, and this appendix exists specifically so that gap is visible in one place rather than scattered across the document. No interview has been run as of the date of this document.
