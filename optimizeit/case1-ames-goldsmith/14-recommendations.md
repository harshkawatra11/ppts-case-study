# Chapter 14 — Recommendations, Research Gaps, and Future Work

## Confidence & Provenance

This chapter is pure synthesis. It introduces no new primary facts and adds no new
`[S-nn]` citations of its own — every recommendation, gap, and future-work item below is
pulled forward from Chapters 2–13 and re-sequenced into a single prioritized list. Where a
recommendation traces to a specific chapter's HAZOP node, LOPA IPL, fault-tree branch, or
MOC gate, that lineage is cited inline (e.g., "Ch.06 HAZOP 4.1") rather than re-argued.
The **prioritization itself — the tiering by risk-reduction impact and implementation
speed — is this dossier's own editorial judgment**, not a finding attributed to CSB, OSHA,
or any other agency. As every prior chapter has stressed: no CSB final report exists as of
2026-08-02, and nothing below should be read as anticipating or substituting for it.

---

## 1. Consolidated, Prioritized Recommendations

Ranking method: each recommendation is scored qualitatively on **risk-reduction impact**
(how directly it closes the load-bearing HAZOP/LOPA gaps — Deviation 2.1, "wrong chemical
into unquantified vessel," and Deviation 4.1, "no toxic-gas detection," per Ch.06 §6 and
Ch.07 §8) crossed with **ease/speed of implementation** (procedural and low-capital first;
capital-intensive and organizational-culture change last). Three tiers:

- **Immediate (0–30 days):** no capital outlay, no engineering redesign — administrative,
  procedural, or documentation fixes any facility with a comparable hazard profile could
  execute this month.
- **Near-term (30–180 days):** requires equipment procurement, training rollout, or
  inter-agency coordination, but no new regulatory authority or capital project.
- **Structural (180+ days):** requires new organizational systems, a certified SIS
  build-out, or regulatory/legislative change — genuinely durable fixes, but slow by
  nature.

### Immediate (0–30 days)

| # | Recommendation | Source chapter(s) | Why it ranks here |
|---|---|---|---|
| 1 | **Close the Tier II gap.** Audit and refile EPCRA §312 Tier II inventories for every chemical actually used on-site, including decommissioning-task products like M2000A; push the corrected filing to the LEPC and local fire department. | Ch.06 (HAZOP 1.4, 4.5), Ch.07 (IPL-7), Ch.11 §4, Ch.13 Gate 4 | The single **[VERIFIED]** — not inferred — compliance failure in the entire dossier; a paperwork-only fix with the highest confirmed causal weight (20-minute mid-emergency SDS search). |
| 2 | **Stand up the pre-task residue-characterization checklist.** Before any chemical is introduced to a legacy vessel, require a documented sampling/assay step (even a coarse pH or sulfide test-strip screen) and a CAMEO/CCPS reactive-hazard cross-check. | Ch.06 (HAZOP 1.1, 1.2), Ch.13 Gate 2 | Addresses the single point in the fault tree (Ch.08 §3, Event A) that both the incident's technical cause and its organizational cause trace back to; requires no new equipment, only a signed checklist. |
| 3 | **Disqualify "historical routine" as a hazard-review exemption.** Institute a scope-freeze rule: any task on a legacy vessel or uncharacterized residue automatically triggers formal review, regardless of how many times the task has "always been done this way." | Ch.13 Gate 1 | Directly closes the "not an unusual part of decontamination procedures" framing (Ch.02 §2.7, Ch.13 §1) that plausibly let this exact task get waved through; a policy-memo-level fix. |
| 4 | **Pre-stage hazard data packages for active decommissioning-task chemicals**, distinct from the annual Tier II cycle, held both on-site and with the LEPC. | Ch.06 (HAZOP 4.5), Ch.09 §9.6 item 7, Ch.10 §10.6 | Closes the emergency-response-readiness dimension of the Tier II gap, not just its compliance dimension — a distinct, additive fix Ch.10 argues is necessary even after Recommendation 1 is done. |
| 5 | **Establish an exclusion zone / restricted-occupancy protocol** for any acid-based cleaning task on unsampled legacy vessel content. | Ch.06 (HAZOP 4.3), Ch.07 (IPL-5) | Procedural-only IPL (PFD ≈1×10⁻¹ per Ch.07 §2.2) that reduces the population exposed even before any engineering fix is built. |

### Near-term (30–180 days)

| # | Recommendation | Source chapter(s) | Why it ranks here |
|---|---|---|---|
| 6 | **Deploy the three-layer continuous gas-detection protocol** (task-point electrochemical H2S + NDIR NO2, personal 4-gas monitors for entry crews, perimeter/building detection) scoped specifically to transient decommissioning work, not inherited process-area zoning. | Ch.09 (full chapter); Ch.06 HAZOP 4.1; Ch.07 IPL-3 | This is the dossier's single highest-leverage LOPA finding: crediting a functioning detection-and-alarm layer alone moves the mitigated frequency from ~1×10⁻¹/yr (as-found) toward the tolerable band (Ch.07 §2.3) — but it requires procurement, bump-testing infrastructure, and crew training, hence near-term not immediate. |
| 7 | **Engineered, rate-limited, diluted chemical-addition protocol** for any acid introduced to unsampled legacy vessels; prohibit bulk/gravity dosing. | Ch.06 (HAZOP 2.2–2.4), Ch.07 (IPL-2) | Requires metering equipment and a revised work procedure — more than a checklist, less than a capital project. |
| 8 | **Local exhaust ventilation / vent-scrubbing capability**, portable and redeployable, staged at the vessel boundary before chemical introduction. | Ch.06 (HAZOP 3.4), Ch.07 (IPL-6) | Rated PFD 1×10⁻¹–1×10⁻² (Ch.07 §2.2) — meaningful mitigative value, but requires equipment sourcing and a deployment SOP. |
| 9 | **CAD/dispatch integration of facility hazard inventories**, so responding units see current Tier II + task-specific SDS data automatically the moment a hazmat call is dispatched to the facility address, rather than retrieving it manually mid-response. | Ch.09 §9.5.3, Ch.10 §10.6 | Requires inter-agency IT coordination with county dispatch/LEPC systems — feasible in months, not weeks, but converts Recommendation 1 and 4's static documents into a live response asset. |
| 10 | **Scene-decontamination and rescuer-PPE training**, specifically drilling against the "second responder becomes a second victim" pattern documented at Naheola and Aghorn. | Ch.06 (HAZOP 4.4), Ch.07 (IPL-8), Ch.10 §10.2–10.3, Ch.12 §2.9 | Directly targets the mechanism most plausibly behind 7 of the incident's injuries; training rollout, not equipment procurement. |
| 11 | **Extended 24-hour mandatory observation protocol** at receiving hospitals for any patient with confirmed or plausible exposure, regardless of presenting symptoms. | Ch.10 §10.5 | A clinical-policy fix coordinated with CAMC/WVU Medicine-type receiving hospitals; addresses the H2S/NO2 delayed-pulmonary-injury risk (up to 72 hrs) documented in Ch.05. |

### Structural (180+ days)

| # | Recommendation | Source chapter(s) | Why it ranks here |
|---|---|---|---|
| 12 | **Full six-gate Decommissioning MOC framework**, institutionalized as a standing program (scope-freeze trigger, compatibility review, decommissioning-scoped PHA, Tier II currency check, independent two-signature sign-off, living "unknowns register"). | Ch.13 (full chapter) | The organizational backbone that makes Recommendations 1–11 durable rather than one-off; requires new governance structure, an independent-reviewer role insulated from schedule pressure, and cultural adoption — genuinely a 180-day-plus undertaking. |
| 13 | **SIL 2 (minimum) safety instrumented function** for toxic-gas detection: automatic evacuation alarm, forced-ventilation activation, and work-permit interlock on high-high alarm, engineered and certified per IEC 61511. | Ch.07 §7 (SIL-selection discussion), Ch.09 §9.4 | Detection alone (Recommendation 6) is a BPCS-class alarm; closing the full LOPA risk gap (two to three orders of magnitude above tolerable frequency, Ch.07 §2.3) requires a certified SIS — a capital project with a full risk-graph/LOPA exercise as a prerequisite. |
| 14 | **Push for regulatory closure of the RMP/PSM reactive-byproduct blind spot** — the structural gap, flagged by CSB itself in 2004 and never adopted, that a PSM/RMP-listed gas (H2S) generated from two individually unlisted precursors escapes both frameworks' threshold-quantity triggers. | Ch.11 §2–3, Ch.12 §1 | This is a national regulatory-policy change, not a facility fix — genuinely multi-year, and outside any single company's control, but the highest-leverage systemic fix in the entire dossier if it ever happens. |
| 15 | **Corporate-level process-safety standardization across all Ames Goldsmith sites**, given the 2022 New York facility's own unlabeled-pipeline nitric-acid citation suggests the hazard-communication weakness may be a corporate pattern, not a WV-only one. | Ch.08 §5 (STAMP-lite, corporate level), Ch.11 §1 | Requires corporate governance change across multiple sites — slow, and not verifiable from public records alone (see Research Gaps below). |

---

## 2. Research Gaps

These are the genuine unknowns this dossier could not resolve from open-source research,
consolidated from their scattered mentions across Chapters 2–13. Each is listed with why
it matters and what would close it.

| Gap | Why it matters | What resolves it |
|---|---|---|
| **CSB's final investigation report not yet published** (as of 2026-08-02, ~3.5 months post-incident; investigation opened 2026-04-23) | Every organizational and latent-cause finding in Ch.08, and every "unresolved" applicability call in Ch.11, is this dossier's own reconstruction in the absence of subpoena-backed fact-finding | Monitor csb.gov's case page for the factual/final report; CSB investigations of this severity typically run 12–24+ months |
| **Exact vessel geometry, residue mass, and acid volume never published** | Ch.06/Ch.07's H2S-yield and pressurization estimates (10–100 L/kg, up to ~99 L/kg ceiling) are bounded by illustrative assumptions (e.g., a 1 m³ headspace), not measured facility data — the LOPA frequency estimates in Ch.07 §2.3 inherit this uncertainty | CSB final report typically includes as-built vessel dimensions and reconstructed material quantities; absent that, only a FOIA request to OSHA/CSB or a site visit would resolve it |
| **Bonderite M2000A's exact formulation unconfirmed** | Whether M2000A itself contributed a sulfur-bearing reactant (Ch.08 fault-tree Event A2) or was purely co-present remains a [HYPOTHESIS]; the product name doesn't cleanly match the located "BONDERITE M-AD 2000A" SDS | Direct manufacturer (Henkel) SDS request, or CSB's own product-identification work in its final report |
| **RMP filing status genuinely unresolved** | Ch.11 §3 treats "no RMP filing found" as an open question, not a confirmed absence — this materially affects the regulatory-compliance-gap narrative | A targeted EPA RMP*eSubmit database query or FOIA request, not a general web search |
| **Deceased workers' names not public** | Basic factual completeness; also relevant to any eventual OSHA citation matching | Standard post-investigation disclosure, typically via OSHA citation documents or family-authorized reporting |
| **Several source articles blocked by HTTP 403/429 on direct fetch** (WV Gazette-Mail Tier II story, WCHS-TV violations history) | These are search-synthesized, not directly read — flagged [VERIFIED, search-synthesis] throughout rather than [VERIFIED] outright; the underlying reporting could contain caveats or details not captured by search-result synthesis | Re-attempt direct fetch later (rate-limit/paywall status may change), or access via a library database/Nexis-style aggregator |
| **The "slashed oversight" investigative piece referenced only by headline** | If it substantiates a broader regulatory-defunding narrative, it would strengthen Ch.11's national-policy argument (Recommendation 14) considerably | Full-text retrieval and read-through, not just headline-level citation |
| **2007 DOL inspection and 2013 spill details are single- or dual-sourced (WCHS-TV, secondary WVDEP account)** | These anchor the "recurring failure mode" pattern argument in Ch.11 §1 — a single-source chain of custody is weaker evidentiary footing than the directly-fetched 2018 OSHA IMIS record | Direct OSHA/DOL IMIS or WVDEP inspection-file retrieval for the 2007 and 2013 records specifically |
| **Whether any decommissioning-specific PHA/HAZOP was actually performed at Catalyst Refiners** | The entire premise of Ch.06's retrospective HAZOP and Ch.13's MOC framework is that no such review is evidenced — but "not evidenced in public reporting" is not the same as "confirmed absent" | Only resolvable via CSB's document-production authority, not open-source research |

---

## 3. Future Work

For a genuine follow-up investigation, or for the next deliverable this competition team
produces, in rough priority order:

1. **Monitor csb.gov for the case page's status change** from "ongoing" to a published
   factual or final report — this is the single event that would most upgrade this
   dossier's confidence tier across nearly every chapter, converting [INFERRED]
   organizational-cause hypotheses (Ch.08) into either [VERIFIED] findings or documented
   corrections.
2. **Re-attempt the blocked WV Gazette-Mail and WCHS-TV articles** via an alternate access
   path (library proxy, archive.org snapshot, or a direct request) — both are load-bearing
   sources (Tier II gap, prior-violations pattern) currently resting on search-synthesis
   rather than full-text read.
3. **File or track a FOIA/RMP*eSubmit query** to resolve the RMP filing-status gap
   definitively — this is the one regulatory question in Ch.11 that a public database
   query, not just search-engine research, could actually settle.
4. **If this dossier becomes a slide deck or judge-facing presentation**, the strongest,
   most defensible narrative anchors are: (a) the CSB 2004 bulletin's 45-incident/
   32-fatality dataset (Ch.12 §1) as the "this was foreseeable" evidentiary spine; (b) the
   Georgia-Pacific Naheola and Stone Savannah River precedents (Ch.12 §2.1, §2.6) as the
   closest structural analogs, both CSB-investigated with clean root-cause language; (c)
   the Tier II/20-minute-Google-search finding (Ch.06/Ch.11 §4) as the single most
   concrete, [VERIFIED] (not inferred) failure in the entire record — judges can be shown
   an actual regulatory filing gap with a documented operational consequence, not a
   reconstructed hypothesis; and (d) the six-gate Decommissioning MOC framework (Ch.13) as
   the deliverable's constructive centerpiece — it is this dossier's most original
   analytical contribution and directly answers "what should change." The LOPA/SIL
   quantification (Ch.07) is technically the most rigorous chapter but is dense; use it to
   answer follow-up questions rather than as a primary slide.
5. **If pursuing a genuinely independent follow-up investigation** rather than a
   competition deliverable, prioritize direct outreach to Ames Goldsmith's corporate
   safety office and the Kanawha-Putnam LEPC (which already conducted a May 3 post-incident
   review, per Ch.10 §10.7) over further open-web research — the remaining gaps are
   almost all documents-and-interviews gaps, not search-engine gaps.

---

## 4. Closing Synthesis

The throughline of this entire dossier, and the finding this final chapter is built to
reinforce, is Chapter 12's core conclusion: **the April 22, 2026 release was not a novel or
unforeseeable chemistry.** Acid-on-sulfide hydrogen sulfide generation is CSB's
single best-documented reactive-hazard class — 45 tracked incidents, 32 deaths, and a
dedicated federal safety bulletin published in 2004, built from incidents dating back to
1971. The Georgia-Pacific Naheola and Stone Savannah River precedents are not loosely
analogous; they are, in causal structure, close to identical to the facts reported for
Catalyst Refiners — an unreviewed acid/sulfide pathway, a cleaning or maintenance
operation as the trigger, and secondary exposure of first responders who arrived without
adequate hazard information. Every recommendation in this chapter, from the Tier II
refiling that could happen this week to the SIL 2 interlock that will take a year to
certify, exists because a hazard this well-documented was allowed to recur, unmitigated,
against a facility with its own structurally identical near-miss on record from 2007.
Whatever CSB's eventual final report determines about the specific decisions made at
Catalyst Refiners, it cannot credibly find that the underlying hazard mode was
unforeseeable — it was foreseen, named, and published, repeatedly, for over two decades
before it killed two people in Nitro, West Virginia.

---

## Sources

No new sources — this chapter synthesizes and re-prioritizes findings already sourced in
Chapters 2–13, primarily 06-hazop.md, 07-lopa-bowtie.md, 08-root-cause.md,
09-instrumentation.md, 10-emergency-response.md, 11-regulatory.md,
12-comparative-accidents.md, and 13-decommissioning-moc.md, all of which resolve their own
`[S-nn]` markers against `_research/FACTS-BASELINE.md` and the underlying primary sources
(CSB, OSHA, EPA, WVDEP) cited therein.
