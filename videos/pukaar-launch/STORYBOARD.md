# STORYBOARD: Pukaar Product Launch Video

**Aspect Ratio:** 1920x1080 (16:9 Full HD)  
**Palette:** Deep Plum (#3A0E30), Plum (#5C1A4B), Gold (#E8B33C), Magenta Alert (#E5399E), Surface (#F5F5F5 / #EDEDED), Ink (#0A0A0A)  
**Typography:** Inter / SF Pro Display, 22pt minimum content text floor, 0px corner radius, 2px ink stroke on all panels.  
**Constraint:** Zero em dashes in visual cards or subtitles.

---

### Frame 1: The Behavioral Baseline (0.0s – 6.5s)
- **Visuals:** 
  - Dual metric cards with solid black ink borders and gold drop shadows:
    - Card A: **72.3%** | "of women try to fake a phone call when travelling alone at night"
    - Card B: **18.61 min** | "national average 112 police response time (2025)"
  - Top tag: `TRACK: AI FOR SAFETY | NARI KAVACH 2026`
  - Subtle pulsing audio waveform inside a minimalist mock dialer.

---

### Frame 2: The Economic & Escalation Reality (6.5s – 14.0s)
- **Visuals:**
  - Multi-panel consulting layout:
    - Bar Comparison: Delhi (144.4) vs Haryana (118.7) vs National (66.4) crimes per lakh female population.
    - Career impact flow: `Harassment on route` -> `Avoids route` -> `Declines job / college (52%)`.
    - Offender breakdown bar: Known to victim (95.6%, deep plum) vs Stranger (4.4%, light tint).
  - Stat callout: Delhi resettlement peripheral effect: Male employment +5%, Female employment -27%.

---

### Frame 3: The Unbuilt Prevention Window (14.0s – 22.0s)
- **Visuals:**
  - Incident Timeline Graph (`T-90s` to `T+18.6m`):
    - `T-90s to T-30s`: Highlighted magenta zone labeled **"Unbuilt Prevention Window (Pukaar)"**
    - `T+0`: Traditional panic button trigger (Himmat+, Raksha, 112)
    - `T+18.6m`: Average police arrival mark.
  - Matrix table comparing trigger method (Spoken vs Tap), phone visibility (Works while phone is watched), and proactive timing.

---

### Frame 4: Live Product Walkthrough & Silent Trigger (22.0s – 33.0s)
- **Visuals:**
  - Clean smartphone mockup running Pukaar PWA:
    - Active call screen labeled "Maa (02:14)", normal dialer UI, green speaker icon, no panic button.
  - Dialogue transcript bubble stack:
    - `PUKAAR (AI):` "Where are you right now, still near the market?"
    - `USER:` "Just crossed it. Ten minutes, maybe."
    - `PUKAAR (AI):` "Okay, stay on the call. I will keep talking."
    - `USER:` "**No, I already told mom. I will eat at home.**" *(Duress phrase highlighted in gold)*
  - Side notification: Silent tool call fires in background, dispatching live GPS trail to emergency contacts without disrupting audio.

---

### Frame 5: Deterministic Dual-Path Architecture (33.0s – 46.0s)
- **Visuals:**
  - Interactive block diagram:
    - Top path: Mic PCM (120ms) -> Cloud Run Relay -> Streaming STT (220ms) -> LLM Persona + Tool Dispatch (380ms) -> TTS (300ms). Total: ~1.2s.
    - Fallback path (Offline): Local Web Speech / On-device regex matcher running in browser thread.
  - Callout badge: "Path 2 triggers independently if network drops."

---

### Frame 6: Privacy Boundary by Design (46.0s – 56.0s)
- **Visuals:**
  - 2-Column strict privacy grid:
    - Left Column (`NEVER STORED` in magenta): Raw audio streams, text transcripts, background listening.
    - Right Column (`SESSION ONLY` in deep plum): Transient session token, live ephemeral coordinates, TTL automatic self-destruction upon session close.
  - Compliance badge: DPDP Act 2023 compliant data minimization.

---

### Frame 7: Unit Economics & Campus Funnel (56.0s – 68.0s)
- **Visuals:**
  - Reach Funnel: 2.24 Crore higher ed women -> 44.9 Lakh STEM -> 34,014 Delhi University starting cohort.
  - Unit Cost Breakdown Table:
    - STT per minute: $0.016
    - Model routing: ~$0.00025
    - TTS synthesis: ~$0.004
    - Total per 20-minute protected commute: ~Rs 39 (Tier A)

---

### Frame 8: Brand Outro (68.0s – 76.0s)
- **Visuals:**
  - Centered clean typography on deep plum / off-white split:
    - **PUKAAR**
    - "The call she was already pretending to make, made real, with the alarm hidden inside."
    - Team IdeaForge | Delhi Technological University | University of Delhi
