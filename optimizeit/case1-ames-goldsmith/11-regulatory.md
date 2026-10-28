# Chapter 11 — Regulatory Compliance Gap Analysis

## Confidence & Provenance

This chapter draws primarily on directly-fetched federal records (OSHA IMIS inspection
1359924.015, EPA TRI Explorer facility profile for Catalyst Refiners Inc., TRI ID
25143CTLYS1580F) and one search-synthesized but well-corroborated news finding (the WV
Gazette-Mail's May 7, 2026 Tier II reporting). It also relies on secondary, single-sourced
press material (WCHS-TV's account of the 2007 and 2015 items) that could not be
cross-confirmed against a second independent source in the underlying research pass — this
is flagged inline wherever it recurs. No CSB final report, no 2026 OSHA citation, and no
confirmed RMP filing record exists as of this research date (2026-08-02, ~3.5 months
post-incident). Where the applicability of a federal standard (PSM, RMP) to this specific
facility cannot be established from public records, this chapter states that explicitly as
an open question rather than asserting coverage or non-coverage. Every claim carries an
epistemic tag — **[VERIFIED]**, **[VERIFIED, search-synthesis]**, **[INFERRED]**, or
**[HYPOTHESIS]** — resolved against a chapter-local `[S-nn]` source list at the end of this
file.

---

## 1. Compliance history as a pattern, not a list

Read individually, Catalyst Refiners' regulatory record is a scatter of low-severity items:
one $0-penalty citation, one administrative license lapse, one spill with modest injuries.
Read as a sequence, the same facts describe a single recurring failure mode recurring across
nearly two decades, each time involving **uncontrolled introduction of a reactive chemical
into a vessel already holding a different reactive material, during non-routine work.**

| Year | Event | Failure mode | Severity | Tag |
|---|---|---|---|---|
| 2007 | DOL inspection: 8 violations (5 serious) after an employee pumped hydrogen peroxide into a vat, unaware a valve to an adjacent silver-oxide vat was open; the resulting reaction produced steam and hydrogen gas, burning the employee and a supervisor and causing respiratory irritation in two coworkers — 4 hospitalized. | Uncontrolled mixing during vessel-adjacent work; valve-isolation/lockout failure | 4 hospitalized | [VERIFIED, single-sourced pending cross-confirmation] [S-01] |
| 2013 | Tank/reactor incident: an inspection light fell into a vessel holding nitric acid; ~100 gal in the vessel, ~75 gal bubbled over onto the floor (WVDEP account) — press shorthand says "50 gallons" spilled. Two workers burned/hospitalized; separate citation for inadequate employee communications training. | Uncontrolled acid reaction during vessel-adjacent maintenance work; hazard-communication citation issued at the same time | 2 injured | [VERIFIED] [S-02][S-03] |
| 2015 | Corporate WV business license (issued 1997) revoked for failure to file an annual report with the WV Secretary of State. | Administrative/corporate-status lapse, not a safety citation | — | [VERIFIED] [S-04] |
| 2018 | OSHA citation, 29 CFR 1910.178(l)(4)(iii) — powered-industrial-truck operator evaluation not conducted in 3+ years; one employee not evaluated since 2006. **Penalty: $0.** | Training/evaluation-program lapse | — | [VERIFIED, directly-fetched federal record] [S-05] |
| 2022 | Parent company Ames Goldsmith cited at a New York facility: unlabeled pipelines created a nitric-acid/toxic-gas exposure risk for ~70 employees; initial fine >$10,000, settled to $6,700. | Hazard-labeling/communication failure — same corporate family, different site | Exposure risk to 70 workers | [VERIFIED] [S-06] |
| 2026-04-22 | Fatal release: nitric acid + Bonderite M2000A introduced into a legacy vessel holding Ag2S-bearing "silver mud" during decommissioning cleaning, generating H2S. 2 fatalities; hospitalized/treated counts reported as a range (19–30+, CSB's own case page separately citing "4 additional injuries," unreconciled); 7 first responders among the injured. | Uncontrolled mixing of a reactive chemical into a vessel holding sulfide-bearing residue, during non-routine (decommissioning) work — the same generic failure mode as 2007 and 2013 | 2 dead | [VERIFIED] — per FACTS-BASELINE and Ch. 3 [S-07] |

The pattern across four of these five substantive events — 2007, 2013, and 2026, plus the
2022 parent-company citation — is **the same causal skeleton: a reactive chemical
introduced into or near a vessel whose contents were not fully accounted for, during
work that fell outside routine production.** This is not a facility with an unlucky
one-off; it is a facility whose vessel-work practices around reactive chemistry produced
a hospitalizing incident roughly once per decade for at least two decades, culminating in
a fatal one. The single $0-penalty OSHA citation in the intervening years addressed
forklift-operator training — a real but comparatively minor finding — and did not touch
the reactive-chemistry hazard that had already twice sent workers to the hospital before
2026. **[INFERRED — pattern synthesis from verified individual events]**

---

## 2. OSHA Process Safety Management (29 CFR 1910.119) — applicability analysis

**What PSM requires and when it applies.** OSHA's PSM standard applies to a process that
involves a listed "highly hazardous chemical" (Appendix A) at or above its threshold
quantity, or a process involving a flammable liquid/gas above 10,000 lb in one location
(with exceptions). Coverage triggers a defined set of obligations: process hazard analysis
(PHA), operating procedures, training, mechanical integrity, management of change (MOC),
pre-startup safety review, and — centrally relevant here — **hot work and
decommissioning-adjacent activity fall under the same MOC and operating-procedure
requirements as normal production once a process is PSM-covered.**

**Does Catalyst Refiners' inventory plausibly trigger PSM?** The public record does not
resolve this cleanly, and this chapter does not claim it does. What can be said:

- Nitric acid is used at the facility in normal silver-refining operations and was
  present at levels sufficient to cause two prior injury incidents (2007, 2013) — but
  nitric acid itself is **not** on OSHA's Appendix A "highly hazardous chemicals" list
  in a form that would trigger PSM purely from its presence. **[VERIFIED — regulatory
  text]**
- Hydrogen sulfide **is** PSM-listed, with a threshold quantity of 1,500 lb. But H2S at
  Catalyst Refiners was not a stored inventory chemical — it was generated in situ as a
  reaction byproduct of acid contacting sulfide-bearing residue. This is precisely the
  structural gap CSB identified in its 2003-03-B bulletin for sodium hydrosulfide: a
  reactive-hazard chemistry that produces a PSM-listed gas on demand, from precursors that
  are not themselves PSM-listed, falls outside the standard's trigger logic entirely (see
  Ch. 12 §1). **[INFERRED — applying CSB's documented systemic finding to this facility's
  specific chemistry]**
- No public record — OSHA IMIS, CSB press materials, or news reporting — states whether
  Catalyst Refiners' site was ever assessed as PSM-covered for any other process stream
  (e.g., its EO-catalyst refining line, which the facility's other line of business
  touches; ethylene oxide itself is PSM-listed at a 5,000 lb threshold, though the
  vessel involved in the fatal release is reported as a legacy silver-refining vessel, not
  the EO line). **This is an unresolved research gap — not evidence either way.**
  **[HYPOTHESIS — flagged as unresolved]**

**Bottom line:** whether the specific unit involved in the April 2026 release was
PSM-covered cannot be established from the public record. What can be established is that
even in a scenario where the unit was fully PSM-compliant on paper, the specific hazard
that killed two workers — acid-on-sulfide H2S generation — sits in the same regulatory
blind spot CSB has flagged since 2004: it is not a listed chemical combination, only a
listed *product* gas generated from unlisted precursors. This is a standard-design gap, not
necessarily a facility-specific compliance failure, and the two should not be conflated.

---

## 3. EPA Risk Management Plan (40 CFR Part 68) — applicability analysis

**What RMP requires.** EPA's RMP rule (Clean Air Act §112(r)) requires facilities holding
a listed regulated substance above its threshold quantity to develop and file a risk
management plan covering hazard assessment, prevention programs, and emergency-response
coordination with local responders.

**Applicability to this facility, as best can be determined:**

- Nitric acid is **not** on EPA's RMP §112(r) regulated-substances list in a form that
  would itself trigger RMP coverage (RMP's acid-related listed substances are chemicals
  such as anhydrous ammonia, chlorine, hydrofluoric acid, and oleum — not nitric acid).
  **[VERIFIED — regulatory text, per lane2 research]** [S-08]
- Hydrogen sulfide **is** an RMP-listed toxic substance, at a 10,000 lb threshold — but as
  with PSM, H2S here was a reaction byproduct rather than a stored/handled quantity, so its
  formation during the incident would not, on its own, indicate a pre-existing RMP filing
  obligation. **[INFERRED]**
- **No RMP filing for Catalyst Refiners was located in the research underlying this
  dossier**, but this reflects the limits of general web search against EPA's RMP database
  (which is not fully public-searchable by facility name through ordinary search engines),
  not a confirmed absence. Whether the facility held any other RMP-triggering substance
  on-site (e.g., anhydrous ammonia in refrigeration systems, if present) was not
  determined. **This is treated as an open research question in this dossier, not as a
  settled "the facility had no RMP" finding** — a targeted EPA RMP*eSubmit or FOIA-based
  lookup would be required to resolve it, and neither was available to the underlying
  research pass. **[HYPOTHESIS — flagged as unresolved, per FACTS-BASELINE framing]**

**Why this matters regardless of the answer.** Even under the most RMP-favorable
assumption — that the facility fully complied with every applicable RMP requirement — the
specific hazard combination involved in the fatal release (nitric acid + a proprietary
cleaning agent + legacy sulfide residue) again sits outside RMP's listed-substance logic
for the same structural reason it sits outside PSM's: the regulated output gas is listed,
its non-regulated precursors are not, and RMP is not designed to anticipate reaction
chemistry between two unlisted, individually low-hazard-classified substances.

---

## 4. EPCRA §312 Tier II — the confirmed, textbook gap

Unlike PSM and RMP applicability, the EPCRA Tier II finding is **confirmed**, not
unresolved. Per WV Gazette-Mail reporting published May 7, 2026 ("Officials were in the
dark on key chemical in fatal Nitro industrial site incident"), **Bonderite M2000A was not
listed on Catalyst Refiners' federally required EPCRA Tier II Emergency and Hazardous
Chemical Inventory form.** **[VERIFIED, search-synthesis — direct fetch of the source
article returned HTTP 429 on repeated attempts]** [S-09]

**What Tier II reporting is designed to accomplish.** EPCRA §312 requires facilities
holding hazardous chemicals above threshold quantities to file an annual Tier II inventory
report with the state emergency response commission, the local emergency planning
committee (LEPC — here, the Kanawha-Putnam Emergency Planning Committee), and the local
fire department. Its entire function is pre-positioning hazard information *before* an
emergency, so that:

1. LEPCs can incorporate the facility's actual chemical inventory into community emergency
   response plans;
2. Fire departments and HazMat responders arriving at an active incident can identify what
   they are dealing with from facility records, rather than reconstructing it in real time;
   and
3. Nearby residents and workers have, in principle, a public record of what hazardous
   materials are stored nearby.

**How close this incident sits to Tier II's textbook failure scenario.** Per the same
reporting, emergency responders located M2000A's safety data sheet via **an approximately
20-minute Google search conducted during the active, ongoing toxic release**, rather than
retrieving it from facility hazard documentation. This is not a hypothetical illustration
of what happens when Tier II reporting is incomplete — it is a directly reported instance
of it occurring, in real time, during the response to a fatal release. **[VERIFIED,
search-synthesis]** [S-09] Chapter 3 (§5) treats this as load-bearing incident fact, not
merely regulatory-compliance trivia, because a 20-minute information gap during an active
H2S release plausibly affected PPE selection, triage, and decontamination-protocol
decisions for both the initial victims and the seven first responders who were themselves
later treated. The omission also raises, as an **[INFERRED]** but not confirmed,
possibility that the same documentation gap extended upstream into the facility's own
pre-task hazard review for the cleaning operation, not only into post-release emergency
response (Ch. 3 §3.2).

---

## 5. HAZWOPER (29 CFR 1910.120) — applicability to decommissioning/decontamination work

HAZWOPER's hazardous waste operations provisions (Subpart §1910.120(a)–(p)) apply to,
among other categories, "corrective actions involving clean-up operations at sites covered
by RCRA" and — most relevant here — general industry "operations involving hazardous waste
that are conducted at treatment, storage, and disposal (TSD) facilities regulated under
RCRA," as well as certain emergency response operations. Whether the specific vessel-
cleaning task at Catalyst Refiners fell within HAZWOPER's general-industry decommissioning
scope depends on facts not publicly available — specifically, whether the "silver mud"
residue had been characterized or manifested as a RCRA hazardous waste at the point the
cleaning task began, and whether the facility's decommissioning plan was structured as a
RCRA closure activity.

What can be said without speculating on facts not in the record:

- **The reasoning gap is structurally identical to the PSM/RMP gap above.** HAZWOPER's
  training and hazard-characterization requirements are triggered by known or reasonably
  anticipated exposure to hazardous substances during the specific operation — if the
  vessel's silver-sulfide content and its reactivity with acid were not characterized or
  anticipated before the cleaning task (which the Tier II gap above makes plausible), then
  the same documentation failure that left responders searching for an SDS mid-emergency
  would equally have left pre-task planners without the hazard information HAZWOPER's
  training and PPE-selection provisions assume is available. **[INFERRED]**
- Legacy-residue handling during decommissioning is exactly the scenario the broader
  decommissioning-risk literature (Ch. 12 §3) identifies as a recognized blind spot:
  normal operating-phase safeguards are stood down while hazardous residues remain in
  vessels, and a decommissioning-specific hazard review — separate from any operating-
  phase HAZOP — is the standard practice recommendation (per IAEA's decommissioning safety
  assessment literature and the nuclear-sector analogy cited in Ch. 12). No public record
  confirms whether Catalyst Refiners performed a decommissioning-specific hazard review for
  this vessel. **[HYPOTHESIS — flagged as unresolved]**

---

## 6. IEC 61511 (Safety Instrumented Systems) — forward cross-reference

IEC 61511 governs the specification, design, and lifecycle management of Safety
Instrumented Systems (SIS) in the process industries — the framework within which a
properly specified gas-detection-and-interlock system (as proposed in Chapter 9's
remediation architecture) would sit. Three points bear directly on this facility's
regulatory posture:

1. IEC 61511 requires a documented hazard and risk assessment to establish the Safety
   Integrity Level (SIL) target for any proposed interlock — meaning a gas-detection SIS
   for the legacy-vessel cleaning task could only be properly specified *after* the kind of
   decommissioning-specific hazard review discussed in §5 above had actually identified the
   acid-on-sulfide H2S generation hazard as a scenario requiring protection.
2. IEC 61511's management-of-change and proof-testing lifecycle requirements would apply
   continuously through a decommissioning phase, addressing exactly the "controls are
   stood down as closure approaches" risk pattern this dossier's precedent chapter (Ch. 12
   §3) identifies as characteristic of decommissioning-phase incidents generally.
3. A functioning SIS built to this standard would not have required prior PSM or RMP
   coverage to exist — it is a voluntary/good-practice control layer, not itself a
   regulatory trigger — which means the PSM/RMP applicability gaps discussed above do not
   excuse its absence. See Chapter 9 for the full proposed system specification.

---

## 7. Compliance gap summary table

| Regulation | Requirement | Apparent status at Catalyst Refiners | Evidence tier |
|---|---|---|---|
| OSHA PSM (29 CFR 1910.119) | PHA, MOC, operating procedures, mechanical integrity for processes with listed HHCs above threshold | Unresolved — nitric acid and silver-sulfide residue are not independently PSM-listed; whether any other on-site process (e.g., EO catalyst line) triggers coverage is not publicly confirmed | [HYPOTHESIS — unresolved research gap] |
| EPA RMP (40 CFR Part 68) | Risk management plan filing for facilities holding listed substances above threshold | Unresolved — no RMP filing located, but absence of search results is not proof of absence; nitric acid itself is not RMP-listed | [HYPOTHESIS — unresolved research gap] |
| EPCRA §312 Tier II | Annual hazardous-chemical inventory filed with SERC/LEPC/fire department | **Confirmed gap** — Bonderite M2000A not listed on the facility's Tier II form; responders located its SDS via a ~20-minute internet search during the active release | [VERIFIED, search-synthesis] |
| HAZWOPER (29 CFR 1910.120) | Hazard characterization and training for hazardous-waste/decommissioning operations | Unresolved — cannot confirm whether the silver-mud residue was characterized as hazardous waste or whether a HAZWOPER-scoped hazard review preceded the cleaning task | [HYPOTHESIS — unresolved research gap] |
| OSHA general duty / prior citations | Facility-specific safety compliance history | 2007 (8 violations, 4 hospitalized), 2013 (spill, 2 injured + communications-training citation), 2018 (forklift-training citation, $0 penalty) | [VERIFIED, mixed — 2018 directly-fetched federal record; 2007/2013 single- to dual-sourced press] |
| IEC 61511 SIS lifecycle | Hazard-based SIL specification for safety interlocks | Not applicable as a compliance finding — relevant prospectively to Ch. 9's proposed gas-detection system | [INFERRED — forward-looking] |

---

## Sources

[S-01] WCHS-TV, "Records show long list of violations at Catalyst Refiners prior to deadly chemical release" — https://wchstv.com/news/local/records-show-years-of-violations-at-catalyst-refiners-before-deadly-chemical-release (single-sourced; a follow-up fetch attempt returned HTTP 429)
[S-02] WCHS-TV (S-01), 2013 incident summary via OSHA-history framing
[S-03] WVDEP September 2013 inspection-report account, as summarized in secondary reporting referencing WV Gazette-Mail coverage
[S-04] WV MetroNews / Alliance Chemical blog licensing-history detail — https://alliancechemical.com/blogs/news/csb-launches-investigation-into-fatal-hydrogen-sulfide-release-at-west-virginia
[S-05] OSHA IMIS inspection detail, record 1359924.015 — https://www.osha.gov/ords/imis/establishment.inspection_detail?id=1359924.015 (directly fetched)
[S-06] Mountain State Spotlight, "Fatal Institute chemical leak latest in Kanawha Valley plant disasters," 4/22/2026 — https://mountainstatespotlight.org/2026/04/22/kanawha-county-chemical-leak-institute/
[S-07] FACTS-BASELINE.md and Chapter 3 (`03-incident-reconstruction.md`), this dossier — casualty and mechanism framing
[S-08] `_research/lane2-regulatory.md` §3.2, EPA RMP applicability analysis
[S-09] WV Gazette-Mail, "Officials were in the dark on key chemical in fatal Nitro industrial site incident," 5/7/2026 (search-synthesis; direct fetch returned HTTP 429) — https://www.wvgazettemail.com/news/energy_and_environment/officials-were-in-the-dark-on-key-chemical-in-fatal-nitro-industrial-site-incident/article_a64f0047-5d22-4838-b529-9668906a59ec.html
[S-10] EPA TRI Explorer, Catalyst Refiners Inc. facility profile, TRI ID 25143CTLYS1580F — https://enviro.epa.gov/triexplorer/release_fac_profile?TRI=25143CTLYS1580F&TRILIB=TRIQ1&V_NA_INDICATOR=.&FLD=RELLBY&FLD=TSFDSP&YEAR=2020 (directly fetched)
[S-11] CSB Safety Bulletin No. 2003-03-B, "Sodium Hydrosulfide: Preventing Harm" (Nov 2004) — https://www.csb.gov/assets/1/6/sodium_hydrosulfide_safety_bulletin_(nov_2004).pdf
[S-12] CSB Investigation Report No. 2002-01-I-AL, Georgia-Pacific Naheola Mill, January 2003 — https://www.csb.gov/assets/1/20/gp_report.pdf?13764=
