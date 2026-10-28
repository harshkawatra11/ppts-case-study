# SwasthyaGrid: judge questions and answers (Team IdeaForge)

1. **Is the forecasting really AI today?**
   - Today the numbers come from deterministic engines: days of cover, priority rules and a confidence formula.
     That is deliberate, because a ministry must be able to audit every number.
   - Gemini and Sarvam explain and answer questions; they do not decide.
   - The pilot swaps the burn-rate rule for Vertex AI AutoML Forecasting, trained per state and backtested on 90
     days of HMIS and export history.
   - Slide 7 shows today vs pilot, row by row.
2. **What does "federated" mean here, concretely?**
   - Each state runs its own Google Cloud project in an Indian region, with its data in BigQuery.
   - Vertex AI trains a state model there.
   - Only model weights and aggregate indicators go to the Union node, which averages the weights and returns a
     better starting model to every state.
   - No state's rows leave the state.
3. **Why not one national database?**
   - Health is a State subject.
   - States already run e-Aushadhi / DVDMS.
   - A single platform means one tender, one migration and one outage for 36 States and UTs.
   - Federation pilots in weeks and fails one state at a time.
4. **Where does 1.36 crore come from?**
   - Stock-out days = 38,241 facilities × 7 tracer medicines × 365 days × 27.8% unavailability. That is 2.72 crore
     a year.
   - The base case halves it.
   - eVIN cut vaccine stock-outs by 80%, which is our bull case.
   - The 3×3 grid on slide 11 shows every combination stays above 58 lakh days.
5. **Is the data real?**
   - Operational data in the prototype is simulated and labelled so.
   - Road routes (OpenStreetMap), district boundaries (geoBoundaries) and every national statistic on the slides
     are real and cited.
6. **Which Google services actually run today?** Eight:
   1. Gemini API
   2. AI Studio
   3. Firestore
   4. Maps Places
   5. Cloud Run
   6. Secret Manager
   7. Cloud Build
   8. Artifact Registry

   Gemini Live is wired as the voice swap. Fourteen more are tagged PILOT on slide 8.
7. **Why Sarvam instead of Google for voice?**
   - Sarvam gave us low-latency Hindi and Hinglish on day one: 836 ms to first audio.
   - The 13 tools are already in Gemini's function schema, so moving to the Gemini Live API is an adapter, not a
     rewrite.
8. **What stops the AI from sending the wrong truck?**
   - Nothing ships without a named officer's approval.
   - The voice agent is read-only.
   - Every recommendation shows its quantity, reason and confidence.
9. **How does cross-district redistribution work?**
   - Warehouse-to-facility refills run today.
   - Facility-to-facility transfers are built and tested, but the demo data never picks them: the van must first
     drive to the donor, so they rarely beat a refill by 30 minutes.
   - The pilot widens the planner to cross-district moves at state level.
10. **How fast can a state start?**
    - Six weeks: MoU, state project, export mapping, logins, model training, shadow mode, go-live in 2 districts.
    - There is no new hardware; PHC staff use a phone.
11. **What about PHCs with poor connectivity?**
    - The CRM syncs when it can.
    - The dashboard survives a backend outage on cached data.
    - The pilot adds a Dialogflow CX phone line for PHCs without smartphones.
12. **Privacy and DPDP?**
    - SwasthyaGrid handles stock, bed and attendance counts, not patient identity.
    - Data stays in the state's Indian region.
13. **Who pays?**
    - It runs on existing NHM programme budgets with no new procurement line.
    - The prototype backend runs inside Cloud Run's free tier today.
    - We do not quote a national cost figure until the pilot measures it.
14. **Have you talked to users?**
    - Not yet, and we do not claim to.
    - Slide 9 lists a 40-interview validation plan by role, to run before the pilot.
15. **Why start with Rajasthan, then those 8 states?**
    - The prototype already models 5 Rajasthan districts.
    - The 8 states in wave 2 carry 70% of India's snakebite deaths, where antivenom stock-outs cost the most lives.

---
