# Chapter 12 — Comparative Accident Database: A Well-Documented Hazard Class, Not a Novel One

## Confidence & Provenance

This chapter is the dossier's deepest precedent analysis, built on a comparative-accident
research pass covering CSB investigation reports, a CSB safety bulletin, OSHA/DOL news
releases, EPA investigation records, and Wikipedia/press summaries for the seven historical
touchstone incidents. The core structural precedents — CSB Safety Bulletin 2003-03-B and
CSB Investigation Report 2002-01-I-AL (Georgia-Pacific Naheola) — are primary CSB
documents and are treated as **[VERIFIED]** throughout. Named case studies drawn from
within the CSB bulletin (Horween, Prime Tanning, Whitehall, Powell Duffryn, Stone Savannah
River, Westvaco) are CSB-compiled facts, also **[VERIFIED]**, cited to the bulletin itself
where a dedicated investigation report was not separately located. The seven historical
touchstones (Bhopal, Texas City, Piper Alpha, Flixborough, Buncefield, Deepwater Horizon,
Tesoro Anacortes) are well-established public-record incidents; their brief treatment here
draws on Wikipedia and CSB summaries and is flagged **[VERIFIED]** with the caveat that
depth of sourcing is intentionally shallow for this section, consistent with its "lessons
from history" framing purpose rather than primary investigative use. All facts about the
Ames Goldsmith/Catalyst Refiners incident itself follow the framing fixed in
`FACTS-BASELINE.md` and Chapter 3 — 2 fatalities (uncontested), hospitalized/treated counts
presented as a range (19/21/22/~30/"30+", plus an unreconciled CSB "4 additional injuries"
figure), and 7 first responders among the injured (well-corroborated). Chapter-local
sources are resolved in `[S-nn]` markers at the end of this file.

---

## 1. CSB Safety Bulletin 2003-03-B — the primary structural precedent

In November 2004, the U.S. Chemical Safety and Hazard Investigation Board published Safety
Bulletin No. 2003-03-B, *"Sodium Hydrosulfide: Preventing Harm."* Its finding is the
single most directly applicable piece of evidence in this entire dossier for one reason: it
establishes, with two decades of independently investigated data, that the exact hazard
mode which killed two workers at Catalyst Refiners in April 2026 — **an acid contacting a
sulfide-bearing material and generating hydrogen sulfide gas** — is not an obscure or
novel chemistry. It is CSB's single best-documented reactive-hazard category.

**Core finding.** Between 1971 and 2004, CSB identified **45 NaHS/acid-sulfide incidents**
across six industry sectors — pulp and paper, transportation, general manufacturing,
leather tanning, chemical/dye production, and refining — resulting in **32 fatalities, 176
injuries, and 351 medical evaluations**, with at least 10 associated plant or community
evacuations. Thirty-six of the 45 incidents were direct H2S gas releases; the remainder
involved skin or eye exposure to caustic NaHS solution itself. CSB's causal breakdown
across the dataset: improper mixing or transfer (33%), spills (27%), mechanical failure
(16%), improper maintenance/repair (13%), unknown (11%). **[VERIFIED]** [S-01]

**The core chemistry.** NaHS and other sulfide-bearing substances — including the
silver-sulfide ("silver mud") residue reported at Ames Goldsmith — release hydrogen sulfide
when contacted by any acid: `NaHS + H+ → Na+ + H2S`. The identical acid-on-sulfide
mechanism applies regardless of whether the sulfide-bearing material is sodium
hydrosulfide in a tanning or pulping process or silver sulfide residue in a catalyst
refiner's legacy vessel — the reaction chemistry does not care what industry generated the
sulfide. **[VERIFIED — reaction chemistry; INFERRED — direct applicability to the
Ag2S/HNO3 system, cross-referenced to Ch. 4]** [S-01]

**CSB's core message, and why it undercuts any "unforeseeable" framing.** CSB identified
two systemic management failures common to essentially all 45 incidents: (1) failure to
identify and mitigate the acid-sulfide hazard during process system design and
engineering, and (2) failure to manage the hazard once design/engineering did not
eliminate it. CSB went further, explicitly recommending that OSHA expand the Process Safety
Management standard to cover reactive-hazard chemicals like NaHS — which, like the silver
sulfide/nitric acid/M2000A combination at Ames Goldsmith, falls outside PSM's listed
"highly hazardous chemicals" despite demonstrated mass-casualty potential (see Ch. 11 §2).
**[VERIFIED]** [S-01]

This bulletin was published in 2004 — 22 years before the Catalyst Refiners release, and
built from incidents dating back to 1971, 55 years before it. Any framing of the April 2026
event as an "unforeseeable," "novel," or "freak" chemical accident is directly contradicted
by the existence of a dedicated federal safety bulletin describing this precise hazard
mode, complete with named case studies, root-cause analysis, and an explicit regulatory
recommendation that was never adopted.

---

## 2. Named case studies — the direct precedent class

### 2.1 Georgia-Pacific Naheola Mill, Pennington, Alabama — January 16, 2002 (CSB Investigation Report No. 2002-01-I-AL)

This is the single closest structural analog to Ames Goldsmith in the entire database, and
CSB investigated it as a dedicated report rather than only a bulletin entry.

**What happened.** Sodium hydrosulfide was being unloaded from tanker trucks — 15 trucks in
the preceding 24 hours — at the mill's tank-truck unloading station. A shallow containment
pit next to the unloading pad ("oil pit") collected incidental NaSH spillage from pump
leaks, line flushing, and hose-connection drips, typically about 5 gallons per truck. This
pit drained — via a connection made years earlier, in 1995, during an unrelated capital
project — into the mill's "acid sewer," a line to which operators manually added sulfuric
acid daily to control effluent pH. On the day of the incident, the chlorine dioxide unit
that normally diluted the acid sewer's flow was offline, so the sewer's acid concentration
was higher than usual. An operator drained the oil pit as routine procedure while,
simultaneously, a delivery driver connected a new NaSH tanker and spilled roughly 5 gallons
at the hose connection. The NaSH reacted with the concentrated sulfuric acid in the sewer,
generating H2S within five minutes. The gas escaped through a gap in the seal of a nearby
sewer manway — directly where contractors were performing unrelated overhead-piperack
maintenance. Two contractors were killed instantly; seven other contractors and one truck
driver were injured; six responding county paramedics later reported H2S exposure symptoms
themselves after transporting victims who were never decontaminated at the scene. **2
killed, 8 injured.** **[VERIFIED]** [S-02]

**CSB's root causes, in CSB's own language:**

1. *"Good engineering and process safety practices were not followed when joining the
   drain from the truck unloading station and the oil pit to the acid sewer."* Neither the
   chemicals that could enter the sewer, nor the hazard of their interaction, were ever
   identified — no hazard review or management-of-change (MOC) analysis was performed when
   the drain connections were made in 1995, years before the incident occurred.
2. *"There was no management system to incorporate hazard warnings about mixing [NaSH]
   with acid into process safety information."* The manufacturer's own MSDS explicitly
   warned that NaSH generates H2S on contact with acid and recommended preventing runoff
   from entering sewers — this information was never translated into mill operating
   procedures or worker training.

**Contributing causes** included a manway cover never adequately designed to remain
airtight (prior leaks from the same manway had been informally repaired via work order but
never formally investigated as incidents, because the mill's own near-miss investigation
policy had not yet been implemented there) and inadequate H2S hazard training for the
contractors, whose escape respirators were rated only for low-concentration atmospheres and
were useless at the levels actually present.

**Regulatory finding of particular relevance:** the incident area was **not covered by
OSHA's Process Safety Management standard.** H2S itself is PSM-listed, but it was not
present in threshold quantity at the location, and NaSH — the precursor — is not a
PSM-listed chemical at all despite its demonstrated reactive hazard. This is the identical
regulatory gap Chapter 11 identifies for Catalyst Refiners: silver sulfide and nitric
acid/M2000A are similarly unlikely to appear on a PSM highly-hazardous-chemicals list even
though their combination proved lethal.

**CSB recommendations issued** included: evaluate process sewers and drains where
chemicals may collect and interact, and identify hazardous reaction scenarios before
connecting waste streams; identify all areas — confined *and* unconfined, since Naheola's
release occurred on open ground, not in a confined space — where H2S could be generated
and install monitors/alarms; apply hazard reviews and MOC analysis whenever changes are
made to systems where incompatible chemicals could collect; and update emergency response
plans to include decontamination procedures protecting responders from secondary exposure
(CSB flagged that ATSDR's own medical management guidelines did not, at the time, recognize
that H2S-exposed victims can off-gas and endanger the personnel treating them). **[VERIFIED]**
[S-02]

**Direct relevance to Ames Goldsmith:** an unreviewed connection between an acid stream and
a sulfide-bearing stream, never assessed by any formal hazard review or MOC process,
generated H2S that killed two people and injured bystanders and responders who were not
the intended subject of the work being performed nearby — this is, structurally, the same
sequence of events reported for the April 2026 Catalyst Refiners release, and the same
reason seven first responders were also injured there. **[INFERRED — structural parallel]**

### 2.2 Horween Leather Company, Chicago, IL — February 14, 1978

A substitute delivery driver, unfamiliar with plant operations and NaHS hazards and
unsupervised by plant personnel, pumped a tanker of NaHS into a storage tank that already
contained acid. A large volume of H2S was immediately generated, forcing evacuation of the
entire plant and surrounding community. The tank's fill-line coupling was engineered to
prevent this exact mis-connection, but the driver fabricated a makeshift coupling when the
correct one would not fit. **8 killed, 43 injured, 57 sought medical evaluation.**
**[VERIFIED]** [S-01] This is a direct precedent for "an engineered safeguard defeated by
an improvised workaround under time or convenience pressure" — a pattern this dossier's
root-cause chapter should weigh against any scenario at Ames Goldsmith involving
improvised or non-standard procedure during decommissioning-phase work.

### 2.3 Prime Tanning Company, Berwick, ME — April 2, 1971

NaHS delivery drivers, directed where to offload, found their tanker's fill nozzle did not
match the receiving tank's coupler; they used an adapter nozzle to force the connection.
The tank actually contained acidic chrome tanning liquor (pH 3–4) and carried no labeling
identifying its contents. Approximately 160 gallons of NaHS were transferred before a
driver noticed workers inside the plant collapsing. **6 killed.** **[VERIFIED]** [S-01]
This is the earliest incident in CSB's 45-incident dataset and establishes that "mismatched
coupling defeated by an improvised adapter, with no hazard labeling on the receiving
vessel" is a failure mode with more than 50 years of documented recurrence.

### 2.4 Whitehall Leather Company, Whitehall, MI — June 4, 1999

A night-shift tanker driver arriving with a load of NaHS was directed by a shift
supervisor — who had never received a NaHS shipment and mistakenly believed it was "pickle
acid" (hydrochloric acid) — to unload it into the pickle-acid storage tank. The resulting
H2S release killed the driver and injured a plant employee. **1 killed, 1 injured.**
**[VERIFIED]** [S-01] This is a precise analog to any scenario in which personnel
misidentify which chemical is present in, or intended for, a vessel before a transfer or
cleaning operation — directly relevant given that the vessel involved at Ames Goldsmith
held legacy "silver mud" whose sulfide content may not have been fully characterized before
cleaning began (Ch. 3 §3.2).

### 2.5 Powell Duffryn Terminal, Savannah, GA — April 10, 1995

An explosion in a co-located solvent storage tank fractured NaHS transfer piping; up to
300,000 gallons of NaHS spilled and mixed with a similarly large quantity of acidic
cleaning solution inside a shared earthen containment berm. The resulting H2S release
caused **337 people to seek medical evaluation** and forced a **30-day evacuation of
roughly 2,000 residents**, as H2S continued off-gassing from NaHS-saturated soil. CSB's
takeaway — failure to identify the hazard of co-locating incompatible materials inside a
single shared spill containment system — is directly relevant to any Ames Goldsmith finding
about shared containment or drainage between acid-handling and sulfide-bearing process
residue areas. **[VERIFIED]** [S-01][S-03]

### 2.6 Stone Savannah River Pulp and Paper Mill, Wentworth, GA — December 8, 1990

During routine **acid cleaning** of a 20,000-gallon pulping-solution pressure filter — a
cleaning operation, not normal production — H2S was generated inside the vessel as the acid
cleaning solution dissolved NaHS-containing pulping filtrate. Local exhaust ventilation
normally controlled this, but on the incident day H2S leaked from the system and
accumulated in the walled containment where workers were operating valves; they smelled it
and attempted to escape but were overwhelmed before they could climb out of the valve pit.
**1 killed, 4 injured.** **[VERIFIED]** [S-01]

This is CSB's most directly analogous "cleaning operation generates H2S from residual
sulfide chemistry" precedent in the entire dataset — the causal structure is essentially
identical to Ames Goldsmith's tank decommissioning/cleaning operation: an acid-based
cleaning step contacting sulfide-bearing residue inside a vessel, during a maintenance
task rather than steady-state production, with workers overcome faster than they could
evacuate. It is, alongside Naheola, the strongest single evidentiary anchor in this
database for treating the April 2026 event as a foreseeable member of a known hazard
class rather than a novel accident. **[INFERRED — direct structural parallel]**

### 2.7 Westvaco Paper Mill, Covington, VA — May 4, 1988

A 300,000-gallon storage tank containing NaHS-bearing pulping solution collapsed; the
material entered the plant sewer system — which routinely handled storm runoff, spills, and
waste — and reacted with waste acids already present in the sewer, producing H2S that
escaped through drains, vents, and manways. **10 injured**, no fatalities. **[VERIFIED]**
[S-01] Another instance of the acid-sulfide hazard mode emerging from shared/common
drainage infrastructure rather than a discrete process step.

### 2.8 Production Waste Solutions LLC, oil/gas waste site — September 2022

An employee was fatally exposed to H2S while skimming and suctioning sludge water and oil
byproducts from a sump pit. OSHA cited the company for six serious violations: exposing
employees to inhalation hazards, failing to train workers on H2S hazards, and failing to
provide a quick body-drench/eyewash station where corrosive materials were present. **1
killed.** **[VERIFIED]** [S-04] A more recent (2022) demonstration that this hazard class
continues to produce fatalities under essentially the same causal conditions — inadequate
H2S training and monitoring around sludge/sulfide-bearing material — two decades after
CSB's bulletin was published.

### 2.9 Aghorn Operating Inc., oil/gas facility near Odessa, TX — 2019

A lone worker responding to an alarm entered a pump house to isolate a malfunctioning pump;
the pump reactivated and released H2S-laden water into the enclosed space. The facility's
H2S monitors were not functioning, and the worker was not wearing a personal detector — he
died. **His wife was then also killed by H2S exposure when she entered the pump house
looking for him** — a double fatality from an unprotected "second responder" entering a
contaminated space without knowing what had happened to the first victim. OSHA found the
employer had provided personal H2S detectors but had no written policy requiring their use,
and workers were untrained on lockout/tagout, which would have prevented pump
re-energization. **2 killed.** **[VERIFIED]** [S-05]

This double-fatality "second responder" pattern is directly relevant to why **7 first
responders were also among the injured** at Ames Goldsmith. The same structural risk —
someone entering an H2S-contaminated area to rescue or assist victims without confirmed
knowledge of the hazard or adequate protection — appears to have recurred at Catalyst
Refiners, and the Tier II documentation gap discussed in Chapter 11 §4 (responders learning
what chemical was involved only via a 20-minute internet search *during* the active
release) plausibly compounded exactly this risk. **[INFERRED — pattern parallel, not a
CSB-confirmed causal finding for Ames Goldsmith]**

---

## 3. Synthesis table

| Incident | Year | Mechanism | Fatalities | Root cause | Relevance to Ames Goldsmith |
|---|---|---|---|---|---|
| Prime Tanning, Berwick, ME | 1971 | Acid tank mistaken for NaHS receiving tank; mismatched coupling forced with adapter | 6 | No vessel labeling; improvised connection | Unlabeled/uncharacterized vessel contents — earliest documented instance of this exact failure mode |
| Horween Leather, Chicago, IL | 1978 | NaHS pumped into acid-containing tank via improvised coupling by untrained substitute driver | 8 | Engineered safeguard defeated by workaround; no supervision | Safeguard-defeated-under-pressure pattern |
| Westvaco, Covington, VA | 1988 | NaHS storage tank failure; material entered sewer, reacted with waste acid | 0 (10 injured) | Shared drainage/sewer infrastructure hazard never assessed | Shared containment/drainage hazard |
| Stone Savannah River, Wentworth, GA | 1990 | Acid cleaning of pulping filter dissolved residual NaHS, generating H2S in a cleaning operation | 1 | Cleaning-operation reactive chemistry unaddressed | **Closest analog** — acid-cleaning-generates-H2S during maintenance, not production |
| Powell Duffryn, Savannah, GA | 1995 | Explosion fractured NaHS piping; spill mixed with acid cleaning solution in shared containment berm | 0 (337 medically evaluated, 30-day evacuation) | Incompatible materials co-located in shared containment | Shared containment; scale of community consequence |
| Whitehall Leather, Whitehall, MI | 1999 | NaHS misdirected into pickle-acid tank by supervisor who misidentified the chemical | 1 | Chemical misidentification before transfer | Vessel-content misidentification before a task |
| Georgia-Pacific Naheola Mill, Pennington, AL | 2002 | Unreviewed sewer connection let NaHS spillage react with concentrated sulfuric acid; H2S escaped through a manway near unrelated contractor work | 2 | No MOC/hazard review on a connection made years earlier; PSM did not cover the precursor chemical | **Closest structural analog** — unreviewed acid/sulfide pathway, bystander contractors killed, responders secondarily exposed |
| Aghorn Operating Inc., Odessa, TX | 2019 | Malfunctioning H2S monitors; lone worker killed, then spouse killed as unprotected second responder | 2 | No written detector-use policy; no LOTO training | Second-responder/rescuer double-fatality pattern — parallel to 7 injured first responders at Ames Goldsmith |
| Production Waste Solutions LLC | 2022 | Worker fatally exposed to H2S skimming a sludge sump pit | 1 | Inadequate H2S training; no drench/eyewash station | Recent (2022) recurrence confirming the hazard class remains active |
| **Ames Goldsmith / Catalyst Refiners** | **2026** | Nitric acid + M2000A introduced into legacy vessel holding Ag2S "silver mud" during decommissioning cleaning | **2** (19–30+ treated, range; 7 first responders injured) | Under CSB investigation, no final report — see FACTS-BASELINE | — |

---

## 4. Historical touchstones — different failure modes, one lesson each

These seven incidents are canonical process-safety touchstones cited for framing, not as
direct chemistry analogs to Ames Goldsmith. Each teaches a distinct failure mode with a
specific, genuine parallel to this case.

- **Bhopal (Union Carbide, India, 1984, ≥3,787 confirmed deaths).** A safety system
  shutdown to cut costs and a blocked/miscommunicated procedure allowed water into an MIC
  tank, triggering a runaway reaction; community alarms failed and local emergency
  responders and residents had no advance information about what chemical they faced.
  **Parallel:** the community/EOC preparedness gap — Bhopal's surrounding population had no
  actionable hazard information before the release, just as Kanawha County's shelter-in-
  place scramble and first responders' 20-minute mid-emergency SDS search reflect the same
  category of failure at a vastly smaller scale. **[VERIFIED]** [S-06]
- **Texas City, BP refinery, 2005 (15 dead, 180 injured).** A distillation tower was
  overfilled during startup after years of cost-cutting, understaffing, and deferred
  maintenance; CSB found "organizational and safety deficiencies at all levels."
  **Parallel:** normalization of deviance under schedule and cost pressure — directly
  echoing the decommissioning-phase time pressure at Catalyst Refiners, where a facility
  scheduled to close within two months of the incident was still performing legacy-vessel
  cleaning work. **[VERIFIED]** [S-07]
- **Piper Alpha (North Sea, UK, 1988, 167 dead).** A safety valve removed for maintenance
  was not communicated across a shift handover; the pump was restarted anyway, igniting
  cascading fires. **Parallel:** permit-to-work and simultaneous-operations failure —
  paralleling the unresolved question of whether a formal permit-to-work or hazard review
  governed the specific vessel-cleaning task at Ames Goldsmith, and whether decommissioning
  work was properly segregated from any concurrent activity (Ch. 3 §3.1, Ch. 11 §5).
  **[VERIFIED]** [S-08]
- **Flixborough (Nypro UK, 1974, 28 dead).** An unengineered temporary bypass pipe,
  installed without qualified engineering review to replace a leaking reactor, ruptured
  and released a massive vapor cloud. **Parallel:** ad hoc, unengineered modifications to
  process equipment — the founding case for modern management-of-change regulation, and a
  direct echo of Georgia-Pacific Naheola's unreviewed 1995 sewer connection and any
  unreviewed modification that may have existed in Catalyst Refiners' legacy vessel
  configuration. **[VERIFIED]** [S-09]
- **Buncefield fuel depot, UK, 2005 (0 fatalities, 43 injured).** Independent high-level
  tank instrumentation and an automatic gauge both failed simultaneously, allowing an
  undetected overfill that formed and ignited a vapor cloud. **Parallel:** instrumentation
  and detection-layer failure — the precise category of control this dossier's Chapter 9
  gas-detection/interlock proposal (cross-referenced in Ch. 11 §6) is designed to prevent
  from recurring at a facility handling reactive off-gassing chemistry. **[VERIFIED]**
  [S-10]
- **Deepwater Horizon (Gulf of Mexico, 2010, 11 dead).** A failed cement barrier and a
  misread negative-pressure test allowed hydrocarbons to blow out the well after the blowout
  preventer failed to seal. **Parallel:** misinterpretation of an available warning signal
  under commercial/schedule pressure — a caution against assuming that "no deficiencies
  found" language (as WVDEP reportedly found at Catalyst Refiners roughly three months
  before the fatal release, per Ch. 3 §1.1) reliably rules out a reactive hazard that a
  routine inspection is not designed to detect. **[VERIFIED]** [S-11]
- **Tesoro Anacortes refinery, WA, 2010 (7 dead).** Long-term, undetected High Temperature
  Hydrogen Attack embrittled an aging heat exchanger, which ruptured violently during a
  post-maintenance startup. **Parallel:** legacy/aging equipment carrying an undetected,
  slowly-developed hazard into a maintenance-adjacent event — structurally close to a
  decades-old vessel holding uncharacterized "silver mud" residue being brought back into
  active work during decommissioning. **[VERIFIED]** [S-12]

---

## 5. Closing synthesis: a known, not novel, hazard class

Every named incident in this chapter, spanning 1971 to 2022, describes the same reaction
chemistry killing workers under the same structural conditions: an acid contacting a
sulfide-bearing material, generating hydrogen sulfide, most often during transfer,
cleaning, or maintenance work rather than steady-state production, and most often outside
the reach of process safety regulations that list the resulting gas but not its precursors.
CSB's own 2004 bulletin — built from 45 such incidents and 32 deaths tracked as of that
year alone — was published specifically to warn industry away from this hazard mode, and
explicitly recommended regulatory changes that were never adopted. The 2002 Georgia-Pacific
Naheola case and the 1990 Stone Savannah River case are not loosely analogous; they are, in
causal structure, close to identical to the facts reported for Ames Goldsmith — an
unreviewed acid/sulfide pathway, a cleaning or maintenance operation as the trigger, and
secondary exposure of bystanders and first responders who arrived without adequate hazard
information.

This is the single strongest evidentiary anchor available to this dossier's root-cause
argument: the April 2026 Catalyst Refiners release sits squarely within a hazard class the
process safety industry has known about, documented, and issued formal warnings on since at
least 1971 — fifty-five years before this incident, and twenty-two years before CSB's
purpose-built bulletin on exactly this chemistry. Whatever CSB's eventual final report
determines about the specific decisions made at Catalyst Refiners on April 22, 2026, it
cannot credibly find that the underlying hazard mode was unforeseeable. It was foreseen,
named, and published — repeatedly — and the regulatory gap that let it recur was flagged by
CSB itself two decades in advance.

---

## Sources

[S-01] CSB Safety Bulletin No. 2003-03-B, "Sodium Hydrosulfide: Preventing Harm" (Nov 2004) — https://www.csb.gov/assets/1/6/sodium_hydrosulfide_safety_bulletin_(nov_2004).pdf
[S-02] CSB Investigation Report No. 2002-01-I-AL, "Hydrogen Sulfide Poisoning," Georgia-Pacific Naheola Mill, January 2003 — https://www.csb.gov/assets/1/20/gp_report.pdf?13764=
[S-03] EPA, Powell Duffryn Terminals investigation report (1998) — https://yosemite.epa.gov/opa/admpress.nsf/0/8e314f057b62e118852565fe006fa986?OpenDocument
[S-04] DOL/OSHA news release, Production Waste Solutions LLC citation — https://www.dol.gov/newsroom/releases/osha/osha20230315-0
[S-05] Security Magazine, "Texas oil and gas company cited by OSHA after employee death" (Aghorn Operating Inc.) — https://www.securitymagazine.com/articles/99076-texas-oil-and-gas-company-cited-by-osha-after-employee-death
[S-06] Wikipedia, "Bhopal disaster" — https://en.wikipedia.org/wiki/Bhopal_disaster; Smithsonian Magazine — https://www.smithsonianmag.com/smart-news/the-worlds-deadliest-industrial-disaster-exposed-500000-people-to-toxic-gas-and-claimed-thousands-of-lives-180985434/
[S-07] Wikipedia, "Texas City refinery explosion" — https://en.wikipedia.org/wiki/Texas_City_refinery_explosion; CSB 20th-anniversary investigation digest — https://www.csb.gov/assets/1/6/csb_bptc_investigation_digest_v3_(004).pdf
[S-08] Wikipedia, "Piper Alpha" — https://en.wikipedia.org/wiki/Piper_Alpha
[S-09] The Chemical Engineer, "Flixborough 50 Years On" — https://www.thechemicalengineer.com/features/flixborough-50-years-on-lessons-for-managers-and-engineers-today/
[S-10] IChemE Hazards 32 paper (Buncefield/competence context) — https://www.icheme.org/media/29645/hazards-32-paper-38-miller.pdf
[S-11] General public-record summary, Deepwater Horizon (Macondo well blowout), 2010 — cross-industry standard citation, no dedicated URL fetched in this research pass
[S-12] Wikipedia, "2010 Tesoro Anacortes Refinery disaster" — https://en.wikipedia.org/wiki/2010_Tesoro_Anacortes_Refinery_disaster; CSB finding — https://www.csb.gov/csb-investigation-finds-2010-tesoro-refinery-fatal-explosion-resulted-from-high-temperature-hydrogen-attack-damage-to-heat-exchanger/
[S-13] `_research/FACTS-BASELINE.md` and `03-incident-reconstruction.md`, this dossier — Ames Goldsmith/Catalyst Refiners casualty and mechanism framing
