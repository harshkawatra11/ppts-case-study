# SwasthyaGrid, Round 2 Q&A brief (Space & Beyond 2026, NSUT)

Every answer below is drawn from `swasthyagrid-gcp/nexora/research/swasthyagrid-nexora-research.md` (section in brackets).
Keep the fixed fact in each answer; change the opening words to match the judge's question.

## The idea

1. **Why a state would pay when e-Aushadhi exists.** e-Aushadhi records what was bought and issued; it does not rank which
   facility should send stock to which or put a proposal in front of an officer. ₹12 L is 0.25% of an average district's
   central NHM share, and in the two audited states a district loses ₹0.96 Cr to ₹1.97 Cr a year to expiry; the licence
   repays itself at 6.1% to 12.5% of that (§17 Q1, §6.3, §9.5).
2. **Whether a ₹93.6 Cr market is too small.** It is the honest bottom-up number, about 780 districts at ₹12 L; 80 districts
   by year 3 earn ₹9.6 Cr of recurring revenue on a 71% gross margin (§9.4, §11.1).
3. **Whether 1.36 crore stock-out days is measured.** No. It is an estimate from a stated model: 38,241 facilities × 7 tracer
   medicines × 365 days × 27.8% baseline unavailability, cut by 30%, 50% or 80% (§14.1, §14.2).
4. **What stops a large vendor copying the feature.** Nothing stops the attempt. A ledger product would have to take on a
   named-officer approval step and a permanent audit trail, an accountability commitment rather than a small software
   change; our advantage today is process, not a moat, and we say so (§10.3 to §10.5).

## The prototype

5. **How the prototype relates to the deck.** The deck presents the idea; the prototype demonstrates the user flow (morning
   view, flag, ranked proposal, approve, confirm) on simulated data for 40 facilities in 5 Rajasthan districts. No district is
   live and no interview has been done (§8.6, §0.4).
6. **How the prototype becomes a real product.** A signed data MoU, a nightly read of the state's existing e-Aushadhi or HMIS
   export, facility logins, training, two weeks of shadow mode, then go-live in two districts: six weeks (§13.2, §13.3).

## Implementation and feasibility

7. **Why an officer would open another tool.** It removes the phone calls officers already make to find surplus; shadow mode
   tests trust first, with a stop rule if fewer than half of proposals are approved after four weeks (§13.2, §15.2).
8. **Whether states will share data.** The data is stock, bed and roster counts with no patient identity, so the DPDP Act's
   core duties are not triggered; health is a State subject, so each state's data stays with that state (§13.4).
9. **Why two ambers.** Operational (a daily habit no district has formed yet) and schedule (the MoU must land in week 1) are
   the two tests another organisation controls; rating them green would claim evidence we do not have (§13.1, §13.9).
10. **Who is responsible if a transfer leaves the sender short.** The officer who approved it, as with a paper indent today;
    the system never moves stock by itself (§17 Q5, §8.8).

## Future scope

11. **What comes after year 3.** Horizon 3 opens only when three states each run at least five districts with stable renewals;
    no revenue is projected past year 3 because the model is built to year 3 (§15.1, §15.5).
12. **Where the same layer goes next.** A wider basket beyond the 7 tracer medicines, the 500 aspirational blocks launched in
    January 2023, and the same District Collector's nutrition and agriculture lines, as later options (§9.8, §14.9).
13. **Why not wait for a national system.** eVIN started in 12 states in 2015 and reached 36 States and UTs only after a second
    funded round; state-by-state is how comparable systems have scaled in India (§15.1, §17 Q25).
