"""Build V for the SwasthyaGrid Space & Beyond deck. gen.py calls build(text) with model/model_output.txt, the unchanged
NEXORA model output (research Appendix B). Every model line a slide uses is in LOCK, and build() asserts each one is printed,
so a changed model fails loudly instead of leaving a stale slide. Slide strings live in slides/sNN.js; their numbers are the
§2.4 table of PLAN.md."""
TEAM = [["Harsh Kawatra", "Delhi Technological University (DTU)", "Team Leader"],
        ["Gursimran Kaur", "Guru Gobind Singh Indraprastha University", "Member"]]
LOCK = ["facilities 38,241", "= 2.72 crore", "base 50% avoided 1,35,81,100 = 135.8 lakh = 1.36 crore | availability after 86.1%",
        "bear 30% avoided 81,48,660 = 81.5 lakh", "availability after 80.5%", "bull 80% avoided 2,17,29,760 = 217.3 lakh = 2.17 crore",
        "availability after 94.4%", "per facility a year 355.1", "per district a year 17,412", "72.2% 81.5 135.8 217.3",
        "66% 99.7 166.1 265.8", "80% 58.6 97.7 156.3", "ACV 12.0 L = base 4 + per-facility 7.0 (50 x Rs 14,000) + support 1",
        "facilities per district 49.0", "Rs 93.60 Cr", "Rs 13.44 Cr", "Rs 4.92 Cr", "Rs 9.60 Cr", "SOM share of TAM 10.3%",
        "Rs 47.73 Cr | ACV share 0.25%", "CAC payback 5.6 months", "LTV (5 yrs) 42.6 L | LTV:CAC 10.65x",
        "ARR 1.44 5.40 9.60 | onboarding 0.36 0.99 1.05 | billings 1.80 6.39 10.65 | Y3 recurring 90.1% | GM 71%",
        "ARR 1.44 3.60 6.00 | onboarding 0.36 0.54 0.60 | billings 1.80 4.14 6.60", "GM 62%",
        "ARR 1.44 7.20 12.60 | onboarding 0.36 1.44 1.35 | billings 1.80 8.64 13.95", "GM 76%",
        "50 to 105: 6.00 to 12.60", "ACV Rs 9 L to Rs 15 L: 7.20 to 12.00", "(ACV 9.9 to 14.1 L): 7.92 to 11.28",
        "Rs 390.26 Cr over 6.00 yrs = Rs 65.04 Cr a year = Rs 1.97 Cr per district a year | licence pays back at 6.1% redeployed",
        "Rs 168.00 Cr over 5.83 yrs = Rs 28.80 Cr a year = Rs 0.96 Cr per district a year | licence pays back at 12.5% redeployed"]
H = {
    "h2": "Districts run short and write off expired medicine at once; moving what a district already owns avoids an estimated 1.36 crore stock-out days a year",
    "h3": "A third of key medicines can be missing from a PHC shelf while state stores write off crores in expired stock: no one sees a district's supply as one",
    "h4": "SwasthyaGrid adds what five public systems lack: a morning view of every shelf, the nearest surplus ranked, and an officer's sign-off on every move",
    "h5": "State health departments buy for about 780 districts, a ₹93.6 Cr licence pool; we enter through 112 aspirational districts and Rajasthan's 41",
    "h6": "A district can go live six weeks after a data MoU, on exports the state already produces: three feasibility tests are green and two stay amber",
    "h7": "Across 38,241 PHCs and CHCs, SwasthyaGrid would avoid an estimated 1.36 crore stock-out days a year, lifting availability from 72.2% to 86.1%",
    "h8": "Every number traces to a named source or one stated model; even the weakest mix of assumptions still avoids 58.6 lakh stock-out days a year",
}
SRC = [
    "Source: research sections 2, 6, 7, 8 | CAG audits (Telangana 2024, Odisha 2026) | UNDP eVIN | MoHFW HDI 2022-23 | NITI Aayog | Team IdeaForge model (NEXORA model, unchanged)",
    "Source: MoHFW HDI 2022-23 | PMC8654139 | CAG via Medical Dialogues and UNI | NHA 2022-23 | UNDP eVIN | PRS DFG 2025-26 | research sections 2, 7, 9, 11, 14 | model",
    "Source: MoHFW HDI 2022-23 | PMC8654139, PMC10292169, Kotwani 2015 | eLife 2020 | WHO India | SRS 2019-21 | CAG via Medical Dialogues, UNI, Deccan Herald, Tribune | NHA 2022-23 | PMC11836861",
    "Source: research section 8 (design rules; worked example on simulated data) | C-DAC e-Aushadhi | UNDP eVIN | ABDM HFR | IHIP | Kim and Mauborgne (2005) | research section 7 capability matrix",
    "Source: LGD (about 780 districts) | NITI Aayog list and ADP 2018 | Scroll (Rajasthan 41) | PRS DFG 2024-25, 2025-26 | PIB ABDM Jul 2026 | C-DAC | Codingclave, upGrowth 2026 | model",
    "Source: research sections 13 and 15 | Constitution, List II, Entry 6 | DPDP Act 2023 | CDSCO May 2025 | ABDM HFR | NITI Delta Ranking | AIM INDovation | Appendix E validation plan",
    "Source: NEXORA model (impact, unit economics) | MoHFW HDI 2022-23 | PMC8654139 | UNDP eVIN | NHA 2022-23 | eLife 2020 | HCWH and Arup 2019 | PMC10867696 | WHO | UN SDG metadata",
    "Source: NEXORA model output (research Appendix B) | assumptions register (Appendix D) | bibliography of 70+ sources (Appendix A) | Team IdeaForge",
    "Source: Team IdeaForge, Space & Beyond Innovation Ideathon 2026, NSUT | research and model: swasthyagrid-nexora-research",
]
def build(text):
    miss = [k for k in LOCK if k not in text]; assert not miss, ("model output changed", miss)
    V = {"team": {"name": "TEAM IDEAFORGE", "rows": TEAM}, "src": SRC}
    V.update(H)
    V["must"] = ["TEAM IDEAFORGE", "Harsh Kawatra", "Gursimran Kaur", "THANK YOU", "THEREFORE", "CONCLUSIVELY", "1.36 crore",
                 "₹93.6 Cr", "72.2%", "86.1%", "SMART WORLD, BETTER FUTURE", "SPACE & BEYOND", "simulated data", "none done"]
    for k in H: assert len(H[k]) <= 150, (k, len(H[k]))
    assert len(SRC) == 9 and all(len(s) <= 230 for s in SRC), [len(s) for s in SRC]
    return V
