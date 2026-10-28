# Pukaar business model: calculation and viva notes

This note supports slide 7 of the Figma Slides deck. All commercial numbers are planning assumptions unless a source is explicitly named. They are not customer commitments, booked revenue, completed pilots, or measured willingness to pay.

## Commercial model

- Beneficiary: women students travelling alone.
- Economic buyer: college administration, student welfare office, or women development cell.
- Sponsor: CSR programme or foundation funding pilot validation and sponsored access.
- Delivery model: the institution prepays for a shared pool of internet-based voice sessions. Students receive access without paying at the moment of use.
- Proposed unit price: Rs 25 for one 20-minute session, before applicable taxes.
- Proposed campus package: 1,000 sessions per month for Rs 25,000. A 12-month commitment implies an illustrative annual contract value of Rs 3 lakh.
- Illustrative usage: 250 active users taking four sessions per month.
- An Rs 20 sponsored user price requires Rs 5 of sponsor support per session to preserve the same contribution.

## Unit economics

Sarvam publishes speech recognition at Rs 30 per hour and generated speech at Rs 3 per 1,000 characters. The model does not assume 20 minutes of continuous AI speech; it assumes short replies during a 20-minute session.

| Cost line | Base assumption | Cost per session |
|---|---:|---:|
| Speech recognition | 20 minutes x Rs 0.50 | Rs 10 |
| Generated speech | 2,000 characters x Rs 0.003 | Rs 6 |
| LLM and cloud | Planning allowance | Rs 2 |
| Delivery and retries | Planning allowance | Rs 2 |
| Total variable delivery cost | Modelled | Rs 20 |
| Contribution at Rs 25 | Before fixed costs | Rs 5, or 20% |

Sensitivity to generated speech, holding other assumptions constant:

| Generated speech | Delivery cost | Contribution at Rs 25 |
|---:|---:|---:|
| 1,000 characters | Rs 17 | Rs 8 |
| 2,000 characters | Rs 20 | Rs 5 |
| 4,000 characters | Rs 26 | minus Rs 1 |

The Rs 2 allowances for LLM, cloud, delivery, and retries must be validated through representative Hinglish sessions. Product development, compliance work, and launch expenditure are separate from variable session cost.

## Break-even calculation

- Illustrative fixed operating envelope: Rs 1 lakh per month.
- Monthly contribution per campus package: 1,000 sessions x Rs 5 = Rs 5,000.
- Break-even packages: Rs 1,00,000 / Rs 5,000 = 20 campus packages.
- Three paid packages contribute Rs 15,000 per month and leave an illustrative Rs 85,000 monthly fixed-cost funding gap. This is the role of pilot and early-stage CSR support.

## Beachhead TAM, SAM, and SOM

These figures describe a deliberately narrow institutional beachhead, not India's national women-safety market.

- TAM: 10 named DU colleges x Rs 3 lakh assumed ACV = Rs 30 lakh annual package value.
- SAM: five priority colleges x Rs 3 lakh = Rs 15 lakh.
- SOM: target three paid conversions within 12 months x Rs 3 lakh = Rs 9 lakh.

The ten-college target universe is Miranda House, Daulat Ram College, Indraprastha College for Women, Lady Shri Ram College for Women, Gargi College, Maitreyi College for Women, Kamala Nehru College for Women, Jesus and Mary College, Janki Devi Memorial College, and Mata Sundri College for Women. Their listing in the DU directory does not imply interest or partnership.

The five-college discovery priority is Miranda House, Daulat Ram College, Indraprastha College for Women, Gargi College, and Lady Shri Ram College for Women. The slide's 10 targets to five meetings to three pilots to three paid contracts is a goal funnel, not achieved traction.

## Deployment boundary

- Current prototype: PWA with internet-based voice and the existing two-trigger architecture.
- Next product stage: Android and iOS apps, Sarvam voice services, and backend-triggered official WhatsApp Cloud API messaging after business verification, templates, consent, and live pricing are confirmed.
- Later option: Twilio phone-network calling. Twilio lists India mobile outbound calls at USD 0.0496 per minute, so a 20-minute PSTN call is USD 0.992 before AI and other fees. It is excluded from the Rs 25 internet-session package and needs a separate subsidy or premium price.
- Buying a Twilio number alone does not complete the mobile integration. Number availability, routing, permissions, background execution, and platform policy still require validation.

## Pilot scorecard

Measure activation, repeat use, session completion, alert-delivery success, trusted-contact acknowledgement, generated-speech characters, variable cost per session, support incidents, and buyer renewal intent. Do not claim crime reduction or safety outcomes from product usage alone.

CAC equals attributable acquisition expenditure divided by new paying campuses. CAC payback equals CAC divided by monthly campus contribution. Defer LTV and LTV-to-CAC claims until renewal and retention evidence exists.

## Likely judge questions

1. Who pays when the student does not? The college purchases a pooled package; CSR can fund pilots or subsidise access.
2. Why would a college renew? Renewal depends on demonstrated adoption, service reliability, controlled cost per session, privacy compliance, and student-welfare fit.
3. Can Rs 25 work? It is feasible only under controlled generated-speech usage and the provisional Rs 4 allowance. The 4,000-character scenario loses Rs 1 and forces optimisation or repricing.
4. Is this a real phone call? The Rs 25 model is an app-based internet voice session with a call-like interface. PSTN calling is a later, separately funded Twilio path.
5. How does an alert leave the app? The planned production path uses backend-triggered official WhatsApp Cloud API messaging. Prototype delivery can remain limited until account verification and live pricing are complete.
6. Which models are used? Sarvam is the planned Indian-language voice provider. Exact production STT, TTS, and LLM model IDs remain unconfirmed and should be stated as such.
7. What happens to sensitive data? Retain the current architecture boundary: no audio or transcript persistence, session-scoped state, user-selected contacts, and expiry of live location data.

## Sources checked on 9 September 2026

- Sarvam API pricing: https://www.sarvam.ai/api-pricing
- Sarvam pricing documentation: https://docs.sarvam.ai/api/getting-started/pricing
- University of Delhi college directory: https://www.du.ac.in/index.php?page=colleges-at-du
- Twilio India Programmable Voice pricing: https://www.twilio.com/en-us/voice/pricing/in
- WhatsApp Business Platform pricing overview: https://whatsappbusiness.com/products/platform-pricing/

