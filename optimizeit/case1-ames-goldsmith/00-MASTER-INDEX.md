# Master Index — The Ames Goldsmith / Catalyst Refiners Decommissioning Disaster

**A technical investigation dossier reconstructing the April 22, 2026 fatal hydrogen sulfide
release at the Ames Goldsmith Catalyst Refiners facility, Institute (per most press coverage) /
Nitro (per CSB and the company's own statement), Kanawha County, West Virginia.**

Prepared as a research dossier for Case Study 1 of the OptimizeIT case competition
(`optimizeit/6a631bb1abda5_OptimizeIT_problem_statements.pdf`). This is **not** an official CSB,
OSHA, EPA, or WVDEP document. It is an independent engineering reconstruction built entirely from
publicly available sources, current as of **2026-08-02**.

---

## What this is, and what it isn't

- This dossier **is**: a sourced, tiered-confidence reconstruction of the incident; original
  thermodynamic/kinetic modeling; a full HAZOP/LOPA study; root-cause analysis; a proposed
  Continuous Online Gas Detection and Monitoring Protocol; a proposed Decommissioning MOC
  framework; a regulatory gap analysis; and a comparative-accident study situating this event
  within a well-documented hazard class.
- This dossier **is not**: the CSB's final investigation report (which does not yet exist — the
  investigation opened April 23, 2026 and remains open); a claim to have interviewed anyone,
  reviewed internal facility documents, or accessed non-public records; or a work of journalism.
  No victim names, operator identities, internal permits, or dialogue are invented anywhere in
  this document. Where a fact isn't publicly known, every chapter says so explicitly.

## Epistemic tiers used throughout

- **[VERIFIED]** — stated by ≥2 independent sources, or one primary source (CSB, OSHA, EPA,
  WVDEP, a direct company statement).
- **[VERIFIED, search-synthesis]** — confirmed via search-engine-indexed content where a direct
  fetch of the primary article failed (HTTP 403/429/timeout). Reliable but flagged.
- **[INFERRED]** — engineering or logical reconstruction from verified facts, reasoning shown.
- **[HYPOTHESIS]** — plausible but unconfirmed; alternatives are listed alongside it.

Every chapter opens with a **Confidence & Provenance** callout and closes with its own
chapter-local numbered source list (`[S-nn]`); Chapter 99 consolidates all of them into one
deduplicated global bibliography (`[G-nnn]`).

## Known limits (repeated from the working plan, still true at completion)

- **No final CSB report exists.** The deepest causal layer of this dossier — anything framed as
  "why" beyond the directly observed facts — is this team's own reconstruction, not a regulatory
  finding.
- Ames Goldsmith is privately held; no SEC filings exist. Court records, internal permits, and
  historical aerial imagery were not retrievable with the tools available for this research pass.
- Several news sources returned HTTP 403/429 on direct fetch (most notably the WV Gazette-Mail's
  May 7, 2026 Tier II/M2000A article, which is load-bearing for the hazard-communication findings
  in Chapters 3, 7, 8, 10, 11, and 13) — relied on via search-engine synthesis and flagged as such
  everywhere it's cited.
- Vessel geometry, residue mass, acid volume, and ventilation status are unpublished. Chapter 04
  therefore models a **parameterized range**, not a single-point answer.
- Bonderite M2000A's exact formulation is not publicly confirmed; a similarly-named Henkel
  product was located but the identity match is unconfirmed. Chapter 02 and 04 treat this as an
  open gap rather than guessing at a composition.
- The two deceased workers' names are not publicly reported as of the research date.

## Reading order and audience guide

| If you are a... | Start with | Then read |
|---|---|---|
| Process safety / chemical engineer | Ch.04 (Chemistry), Ch.06–07 (HAZOP/LOPA) | Ch.08 (Root Cause), Ch.09 (Instrumentation) |
| Regulatory / compliance reviewer | Ch.11 (Regulatory) | Ch.03 §5 (Tier II gap), Ch.13 (MOC) |
| Emergency management / IH | Ch.05 (Toxicology), Ch.10 (Emergency Response) | Ch.09 (Instrumentation) |
| First-time reader / judge | Ch.01 (Executive Summary) | Ch.03 (Incident), Ch.12 (Precedent), Ch.14 (Recommendations) |

## Chapter index and word counts

| # | Chapter | Words | Deliverable mapping |
|---|---|---:|---|
| 00 | Master Index (this file) | — | navigation |
| 01 | [Executive Summary](01-executive-summary.md) | 1,905 | synthesis |
| 02 | [Plant Overview](02-plant-overview.md) | 4,148 | plant/process background |
| 03 | [Incident Reconstruction](03-incident-reconstruction.md) | 5,233 | timeline, Contradiction Register |
| 04 | [Chemistry](04-chemistry.md) | 5,876 | **Thermodynamic and Kinetic Reaction Modelling** |
| 05 | [Toxicology & Industrial Hygiene](05-toxicology-ih.md) | 3,977 | dose-response, dispersion |
| 06 | [HAZOP](06-hazop.md) | 3,769 | **HAZOP/LOPA study** (part 1) |
| 07 | [LOPA & Bow-Tie](07-lopa-bowtie.md) | 3,106 | **HAZOP/LOPA study** (part 2) |
| 08 | [Root Cause Analysis](08-root-cause.md) | 3,894 | 5-Why, Fishbone, FTA, Swiss Cheese, STAMP-lite |
| 09 | [Instrumentation](09-instrumentation.md) | 3,599 | **Continuous Online Gas Detection and Monitoring Protocol** |
| 10 | [Emergency Response](10-emergency-response.md) | 3,048 | ICS, PPE, shelter-in-place, hospital surge |
| 11 | [Regulatory Analysis](11-regulatory.md) | 2,863 | PSM/RMP/EPCRA/HAZWOPER gap analysis |
| 12 | [Comparative Accidents](12-comparative-accidents.md) | 3,927 | precedent database (CSB 2003-03-B, Naheola, historical touchstones) |
| 13 | [Decommissioning MOC Framework](13-decommissioning-moc.md) | 2,735 | **Decommissioning MOC framework** |
| 14 | [Recommendations](14-recommendations.md) | 2,424 | ranked recommendations, research gaps, future work |
| 99 | [Bibliography](99-bibliography.md) | 2,718 | 110 deduplicated global sources |
| | **Total (Ch. 01–14, body)** | **50,504** | target was ~40,000 |
| | **Grand total incl. bibliography** | **53,222** | |

`_research/` (not counted above) holds the raw per-lane research notes (`lane1`–`lane7`) and the
shared `FACTS-BASELINE.md` every chapter was written against — kept in-tree so every claim in the
finished chapters is auditable back to its source material.

## Answering the case brief's Key Questions

1. **What went wrong chemically and procedurally?** → Ch.04 (mechanism), Ch.03 §3 (procedural
   reconstruction), Ch.08 (root cause).
2. **What engineering safeguards and management systems can prevent similar transient mishaps?**
   → Ch.06–07 (HAZOP/LOPA), Ch.09 (gas detection), Ch.13 (Decommissioning MOC).
3. **How should emergency response and containment be managed for non-routine chemical
   releases?** → Ch.10 (Emergency Response), Ch.05 §5.7–5.9 (dispersion/responder exposure).

## Central thesis

Per Chapter 12: this incident sits inside a hazard class the industry has documented since at
least 1971 (CSB Safety Bulletin No. 2003-03-B tracked 45 acid/sulfide H2S incidents, 32 deaths,
176 injuries, through 2004) — with a near-identical structural precedent (Georgia-Pacific Naheola
Mill, 2002; CSB Investigation Report 2002-01-I-AL) turning on the same missing safeguard: no
management-of-change or hazard review before an acid stream was allowed to contact a
sulfide-bearing stream. This was a foreseeable failure mode, not a novel one.
