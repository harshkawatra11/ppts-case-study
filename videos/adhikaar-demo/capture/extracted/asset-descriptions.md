# Asset Descriptions

⚠️  GEMINI_API_KEY not set — descriptions below are catalog-derived (alt text, headings, section context, filename) instead of Vision-generated. To get richer Vision descriptions on the next capture, set GEMINI_API_KEY (or GOOGLE_API_KEY) and re-run.

The `logo-<hash>.svg` filename prefix is a structural hint (DOM said this SVG was inside a `<header>`, home-link `<a>`, or had an aria-label matching the page brand). To pick the actual brand logo without Vision, open the `logo-*` candidates in a previewer or rasterize them with `sharp` before referencing — composing a fake logo ships off-brand in the final video.

- favicon.ico — 25KB, favicon
- svgs/logo-1da02852.svg — logo 1da02852
- svgs/svg-c4496bfc.svg — svg c4496bfc
- fonts/0494568ab28b6008-s.1b8f__myswv-j.woff2 — font file
- fonts/1773d0375f79890f-s.1j7-gqhxzy6ed.woff2 — font file
- fonts/20aee433927f7d4b-s.2u46yrlpkdxrh.woff2 — font file
- fonts/23f1a98b08006014-s.32g3_4t-7pe44.woff2 — font file
- fonts/256e1f7f180674ba-s.444m1fhac1z6e.woff2 — font file
- fonts/2fe89d53234c61d4-s.1i05ju5aeyhye.woff2 — font file
- fonts/46bc28de2e2b0d9f-s.p.056cfvo8ni9g6.woff2 — font file
- fonts/53d463513cd1ef1d-s.p.2qury780uc-au.woff2 — font file
- fonts/54fc36028e2bb174-s.p.1h6pn64pmfi2q.woff2 — font file
- fonts/59b15b4bcd7b1eb5-s.3nkuoiize4urq.woff2 — font file
- fonts/5fc1def936cbc1e5-s.2jo6ehgrhwoh9.woff2 — font file
- fonts/62492e45f348cf87-s.3gua8xictboza.woff2 — font file
- fonts/66b33cc02d8f8b9d-s.p.3xdkf2df5spiy.woff2 — font file
- fonts/6865e74822869db5-s.2q67k36_u2-4v.woff2 — font file
- fonts/68757d6cddeff913-s.0htwiiqufp3l9.woff2 — font file
- fonts/741805f5bd1ef272-s.41q8r466ocsbj.woff2 — font file
- fonts/812e2ecb5e17ea59-s.0dth3y3445pgb.woff2 — font file
- fonts/8c38e81c61c50756-s.3fh_yph3p9eww.woff2 — font file
- fonts/a5a3076f5a3c2968-s.2yekaq-lsxzxl.woff2 — font file
- fonts/a7afbb44bec2bb18-s.3xauquyg2sixn.woff2 — font file
- fonts/c73d4b34880585a8-s.3-_lg5umlo0tj.woff2 — font file
- fonts/e390973e931a41c5-s.3zhtymus0wdqb.woff2 — font file
- fonts/ea3421846039b7f3-s.p.3d58dkudqlgaq.woff2 — font file
- fonts/effe91970fc4db64-s.p.28xcb7557rbh2.woff2 — font file

## Authenticated app screens (captured via demo login, 1920x1080, real seeded data)

These are full-viewport screenshots of the live authenticated product, captured by signing
in through the real "Enter as a demo citizen" button and navigating the real app. They are
the primary visual source for the product-walkthrough half of the video. Use as full-bleed
site-tour plates per Step 1's site-tour guidance — do not rebuild these screens in HTML.

- app-screens/login-page.png — /login. Shows the real "Enter as a demo citizen" button,
  the demo credentials box, Google sign-in, and email/password fields.
- app-screens/my-filings-list.png — /my after demo sign-in. Real seeded filings list:
  Vikram Singh, Suresh Patil, Fatima Sheikh, Deepak Gupta, Sunita Devi, Arjun Nair, Kavita
  Joshi and more, each with applicant, grievance text, jurisdiction, status chip
  (TRIAGED/DRAFTED), and a "Your deadline" column. "Start a new filing" CTA top-right.
- app-screens/filing-jurisdiction-mismatch-caught.png — filing detail for Suresh Patil
  (7/12 land-record request), scrolled to the "Who is legally required to answer you"
  section. Shows the jurisdiction engine catching a wrong-authority mistake: land records
  is a State subject, but a Central authority (Department of Land Resources) was selected;
  the app flags this, cites DoPT OM No. 10/2/2008-IR, and proposes the correct State
  authority (Revenue and Forest Department, Government of Maharashtra) with a confidence
  score and reasoning, plus a second candidate (Maharashtra Police) at lower confidence.
- app-screens/filing-jurisdiction-confidence-scored.png — filing detail for Ananya Iyer
  (passport-status RTI), scrolled to the same jurisdiction section, showing confidence-
  scored candidate authorities (78% / 52%) with per-candidate reasoning.
- app-screens/filing-deadline-countdown-and-appeal-text.png — same Ananya Iyer filing,
  scrolled to "Your deadline": "Response due (30 days)" marked MISSED (Section 7(1), due
  2026-08-07), and "First appeal due (deemed refusal)" showing "9 DAY(S) LEFT" (Section
  19(1), due 2026-09-06) — the statutory deadline countdown. Below it, "Drafted appeal and
  notes" begins with the full auto-drafted first-appeal letter text, dated the day the
  deadline lapsed, citing sections 7(2), 19(1) and 7(6) of the RTI Act.
- app-screens/filing-drafted-appeal-fullscroll.png — same section, scrolled slightly
  further into the full auto-drafted appeal letter body (addressed to the Appellate
  Authority, citing the missed deadline and requesting free-of-charge disclosure under
  7(6)) — this is the "automatically drafted appeal" filing named in the brief.
- app-screens/start-filing-guided-interview.png — /start, the guided interview's first
  step: "What went wrong? Describe it the way you would say it out loud. You do not need
  the right words." with a real typed example already in the textarea ("My municipal
  corporation has not responded to my request for road repair records in my ward for the
  past six months.") and a "Continue" button.
- app-screens/rights-navigator-empty.png — /rights, the empty Rights Navigator state:
  headline "Ask what the law actually says", explains every answer cites its source and
  the engine declines rather than guesses below a confidence threshold, with an empty
  "Ask about a right, in your own words" box.
- app-screens/rights-navigator-answer.png — /rights after asking "Can my landlord refuse
  to return my security deposit without giving a reason?" — shows real cited answer cards,
  each headed by its exact statutory citation with a "Read the text" link (e.g. "Model
  Tenancy Act, 2021, Section 12 — Security deposit", "Right to Information Act, 2005,
  8(1)(a)"), with honest caveats about a model law's non-binding status where relevant.
- app-screens/schemes-form-empty.png — /schemes, the empty Scheme Eligibility Reader form:
  headline "Do you actually qualify?", fields for age/gender/state/income/land
  holding/ration card/occupation and checkboxes, "Check eligibility" button.
- app-screens/filing-drafted-appeal-fullscroll.png — (see above)

Full-page homepage capture with the hero statistic is the existing top-level
`screenshots/scroll-000.png` / `screenshots/full-page.png` (captured by the standard
crawl): headline "You do not have a records problem. You have a government problem, and it
was never one question.", and beside it the KPI card "FROM THE GOVERNMENT'S OWN DISCLOSURE
REGISTER — 2,797 / 3,128 applications ... returned to the applicant unanswered, not
refused, not returned, with no refund of the fee", sourced to "Department of Land
Resources, RTI disposal register (2024 edition)".

Visible top-nav "GitHub" button on every authenticated screenshot links off-site; its
on-screen label is only the word "GitHub" (no repo name is visible in the screenshot) —
frame workers must not zoom into or read out its href, and must never reproduce any
hackathon name found in any underlying URL.
