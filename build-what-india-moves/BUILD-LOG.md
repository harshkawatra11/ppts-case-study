# Build log

One entry per work package, written when the package is finished, not when it is started.
Two or three lines each. This is what stops the README and the submission summary drifting
away from what the app actually does by the time they get written.

## WP0, 2026-08-29
Shipped: RESEARCH.md, BUILD-LOG.md, SUBMISSION.md created in build-what-india-moves. Portal
findings and incumbent names written up from primary source pages. Figures table drafted with
every CIC/SNS number marked NOT YET CONFIRMED pending a direct read of the primary PDFs.
Cut: nothing.
Did not confirm: CIC AR 2024-25 and SNS Report Card 2024-25 figures still need a direct read;
currently sourced from secondary reporting only. Must confirm before WP10.

## WP1, 2026-08-29
Shipped: ownerUid added to CaseRecord and the CaseStore interface; fileStore and
firestoreStore enforce it on getCase/listCases/updateCase/deleteCase (returning
undefined/false rather than throwing on a mismatch); listAllOpenCases added for the future
cron; all existing call sites threaded through with a TEMP_OWNER_UID constant pending WP2.
Firestore listCases deliberately sorts in memory rather than chaining orderBy onto the
ownerUid where(), to avoid needing a composite index. New test:
src/lib/store/ownership.test.ts, 4 cases, run against fileStore in a temp directory.
Cut: nothing.
Did not confirm: firestoreStore's ownership checks are implemented identically to fileStore's
but not exercised by an automated test, since that needs a live Firestore project. Verified
by code review only. npm run verify green (lint, typecheck, 113 tests, build). npm run eval
numbers unchanged: 131/220, 124/220, 73/220, 219/220, confirming the jurisdiction classifier
was not touched.

## WP2, 2026-08-29
Shipped: Firebase Auth wired end to end. Registered the GCP project with Firebase and created
a web app via the Firebase Management API, enabled Email/Password sign-in and created the
demo@adhikaar.in account via the Identity Toolkit Admin API, all using the owner-level gcloud
identity rather than the restricted roles/datastore.user service account (which cannot do
either). Session is this app's own HMAC-signed cookie (src/lib/auth/session.ts), not
admin.auth().createSessionCookie(), for the same permission reason. middleware.ts does a
presence-only check (Edge runtime, no node:crypto); requireSession() in the data layer is the
real boundary. Every Server Action and the two remaining direct store callers now take a real
uid instead of the WP1 TEMP_OWNER_UID placeholder. Login page: demo button first, credentials
printed in a selectable panel, then Google, then email/password. All 8 new env vars pushed to
Vercel production, preview (scoped to this branch), and development.
Cut: Google sign-in is coded and will render, but is not yet clickable in production: it needs
one manual step, Firebase Console > Authentication > Sign-in method > Google > Enable, since
Google's OAuth client only auto-provisions through that console toggle, not through the public
API. Flag this to Harsh before final submission if Google sign-in needs to actually work,
otherwise the demo button and email/password cover the judge-facing path fully.
Did not confirm: nothing outstanding. Verified end-to-end against a running server (not just
unit tests): seeded the real demo account's docket via npm run seed:demo, signed in as the
demo account via a direct Identity Toolkit REST call, confirmed /docket rendered the real
seeded case names; separately created and signed in as a throwaway stranger account and
confirmed it saw only the empty state, then deleted that account. npm run verify green
throughout (lint, typecheck, 113 tests, build).

## WP3, 2026-08-29
Shipped: routes moved /docket -> /my, /docket/[id] -> /my/[id], /docket/new -> /start
(git-tracked as renames, history preserved), with permanent redirects in next.config.ts.
Copy pass across the moved routes and SiteHeader: docket -> my filings, case -> filing,
statutory clock -> your deadline, the demo-control sweep button reframed as "show me what
happens if they miss the deadline". /my/[id] restructured with a one-sentence status line and
a prominent deadline card (--step-5 numeral, citation to the statutory basis) above the fold.
Cut: the landing page acts (HeroAct, CloseAct, CoverageAct) and methodology page still carry
operator-facing language deliberately; that pass is WP10's job, not duplicated here to avoid
redoing it twice.
Did not confirm: nothing outstanding. Verified against a running production build: /docket and
/docket/new 308-redirect to /my and /start; a request carrying the demo account's real session
cookie renders the actual seeded case names on /my and the correct deadline card (22 days
left, citing section 7(1)) on Priya Deshmukh's filing. npm run verify green throughout.

## WP4, 2026-08-29
Shipped: the conversational form filler. A deterministic step graph (src/lib/interview/
graph.ts + engine.ts, nextStep() pure and tested), driving a real React wizard
(Interview.tsx) through: problem -> triage result (jurisdiction + remedy computed live,
client-side, since both are pure functions) -> optional wrong-instrument diversion for
consumer/labour/tenancy matters -> optional state pick -> authority pick -> question drafting
against subject-matter templates with the 18-rule linter running live -> applicant details ->
review -> one-write filing creation via new server action createFilingAction (replaces the
old FormData-based intakeAction, which had no other callers). Removed the now-orphaned
GrievanceField.tsx.
Cut: nothing planned was cut. Question templates cover about a dozen common subject matters
plus a generic fallback; more could be added later but the fallback keeps every path working.
Did not confirm: nothing outstanding on this package's own scope.
Two real bugs found only by driving the finished flow through an actual Playwright-controlled
browser (installed unsaved for this one check, not added to package.json/lockfile), not by
the test suite or by inspection:
  1. The session cookie was Secure whenever NODE_ENV=production, which silently breaks a
     local `npm run start` (plain http, but NODE_ENV is still "production"). Fixed:
     sessionCookieOptions() now takes the request's real protocol.
  2. LoginForm/SignOutButton's router.push()+router.refresh() could replay a stale
     pre-sign-in/pre-sign-out Router Cache decision. Fixed with a real window.location
     navigation at both call sites.
Also caught and documented (not silently patched) a real classifier ambiguity: a passport
grievance mentioning "police verification" gets misclassified as a Police/State matter
because "police" sits earlier than "passport" in the Seventh Schedule keyword map and ties
break on first match. Left as-is with a comment; changing the classifier's tie-break rule is
out of scope for this build and risks moving the eval harness's published numbers.
npm run verify green throughout (lint, typecheck, 118 tests, build). Full interview walked
twice end to end against a real running server with a real signed-in session: once catching
both bugs above, once confirming the fixes and the lowConfidenceFields refinement together.

## WP5, 2026-08-29
Shipped: the Rights Navigator. A deterministic TF-IDF-plus-phrase-bonus retriever
(src/lib/rights/retrieve.ts) with a hard confidence floor, RETRIEVAL_FLOOR, below which it
declines and lists what it covers rather than guessing. Corpus of 21 chunks
(src/lib/data/rights-corpus.ts) covering the Constitution, Consumer Protection Act 2019 (plus
the 2021 Jurisdiction Rules), Model Tenancy Act 2021, Code on Wages 2019, and Industrial
Disputes Act 1947. Merged with the existing RTI Act corpus behind one getCorpusChunk
(src/lib/data/corpus.ts), citations.ts repointed at it. Gemini-optional plain-language layer
(answer.ts) that only explains retrieved chunks, never adds a fact. Public /rights page (no
session required) with the "Get the record you will need" handoff into /start, pre-seeding the
interview via ?problem=.
Cut: nothing planned was cut, but corpus depth is real work not done: 3 of the 6 source Acts
(Model Tenancy Act, Code on Wages, Industrial Disputes Act) could not be re-fetched this
session, every indiacode.nic.in bitstream URL for them had gone stale (404). Their chunks are
written from established knowledge and flagged unverified in their own `note` fields, not
silently presented as confirmed. Re-fetch before the pitch; see RESEARCH.md section 7 for
exactly what to search for.
Did not confirm: see above. What WAS confirmed: 9 Constitution/CPA chunks fetched and
cross-checked line by line against real government PDFs, and they independently confirm
numbers already hardcoded in jurisdiction.ts and remedy.ts (Seventh Schedule entries, the
two-year consumer limitation, the 50L/2Cr pecuniary thresholds) rather than contradicting them.
Two real bugs found only by driving the finished retrieval engine through its own test suite,
not by inspection: the confidence floor was normalizing each query's score against that same
query's own max score across the corpus, which trivially inflated a lone weak match to 1.0 and
defeated the floor entirely; and a missing singular/plural stem made "court" vs "courts" miss
matches it obviously should hit. Both fixed, with the fix explained in the code comment so it
isn't quietly reintroduced. Full handoff (Rights Navigator -> pre-seeded interview, including
surviving a sign-in redirect for a signed-out visitor) verified end to end with a real browser,
which also caught that middleware.ts and requireSession() were both dropping the query string
on their login redirect, fixed in the same pass. npm run verify green throughout: 136 tests.

## WP6, 2026-08-29
Shipped: Scheme Eligibility Reader. 8 schemes (7 Central + Mukhyamantri Majhi Ladki Bahin
Yojana as the deliberate State-jurisdiction example) with a plain-code evaluator
(met/not_met/unknown per criterion, never guessing unknown into met). 28 tests, 3 profiles per
scheme. UI shows every criterion's outcome and rule text, never a bare yes/no; names
myscheme.gov.in as the real incumbent; "Ask them why, in writing" handoff into the interview
on any non-eligible result, reusing WP5's ?problem= wiring.
Cut: nothing planned was cut.
Did not confirm: PM-KISAN was fetched directly from the official page and fully confirmed.
pmjay.gov.in and pmayg.nic.in refused a direct connection this session (connection failure,
not a bot-block); the other 7 schemes rest on 3+ agreeing secondary sources rather than a
fetched primary, each flagged honestly in its own confidence field. One real disagreement
found and recorded rather than silently resolved: secondary sources give two different
PMAY-G income ceilings (Rs 10,000 vs Rs 15,000/month); the newer figure is used, both are on
record. Re-fetch the primary sources before quoting exact figures in the pitch; see
RESEARCH.md section 8.
Verified end to end with a real browser: a BPL 65-year-old male farmer in Bihar profile came
back exactly as expected across all 8 schemes (eligible for PM-JAY/NSAP, needs-more-info on
PM-KISAN/PMAY-G for untouched checkboxes, correctly not-eligible for Ujjwala/Vishwakarma/Ladki
Bahin with the right failing criterion shown each time). npm run verify green: 164 tests.

## WP7, [date]
Shipped:
Cut:
Did not confirm:

## WP8, [date]
Shipped:
Cut:
Did not confirm:

## WP9, [date]
Shipped:
Cut:
Did not confirm:

## WP10, [date]
Shipped:
Cut:
Did not confirm:

## WP11, [date]
Shipped:
Cut:
Did not confirm:

## WP12, [date]
Shipped:
Cut:
Did not confirm:
