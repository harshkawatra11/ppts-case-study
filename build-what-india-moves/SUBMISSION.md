# Submission

## Live link
https://adhikaar-app.vercel.app

(Also reachable at the raw Vercel deployment URL if the alias ever needs re-pointing:
check `vercel ls` in the adhikaar repo for the latest Production deployment, then
`vercel alias set <that-url> adhikaar-app.vercel.app`.)

## Test credentials
Email: demo@adhikaar.in
Password: 5jYv3OpRfGblAHSFgdGD
There is also a one-click "Enter as a demo citizen" button on the login page, so no typing
is needed.

## The 250 word summary

A government department in Delhi keeps a public record of every Right to Information
request it has ever received, and what happened to each one. We went through it. Out of
3,128 applications, 2,797 came back unanswered. Not rejected. Returned. The citizen had
written to the wrong government, central instead of state. Ten rupees gone, six weeks
gone, and nobody explained why until the letter came back to their own address.

That single fact is the reason Adhikaar exists. The portal India already runs for RTI
filing works well enough on its own terms, but it never once stops to ask whether the
office you are writing to can even answer you. It takes your form, takes your ten rupees,
and lets you find out the hard way. Adhikaar checks that first. Before a word is drafted,
it reads what you wrote and tells you which government is actually responsible, citing
the exact constitutional basis behind that answer.

From there it keeps going where the old process stops. It explains your rights in plain
language, grounded in real law, and says so honestly when it does not know rather than
guessing. It checks whether you even qualify for the scheme you are chasing, and shows
the exact rule you failed, not a bare no. It drafts the application, checks every question
against eighteen real grounds an officer could use to refuse you, tracks your thirty day
deadline, and writes your appeal the day the silence becomes illegal.

Repo: https://github.com/harshkawatra11/Adhikaar-OOSC

(249 words)

## Video script, two minutes

**Minute one, the flow. No architecture talk.**
- Describe a problem out loud in Hindi using the dictation button.
- The app works out it is a State subject and says a Central office would send it back.
- The drafted application appears, questions already legally clean.
- Jump the clock forward. The first appeal writes itself, citing sections 7(2), 19(1) and 7(6).

**Minute two, why it is built this way.**
- The deterministic core decides. The model only phrases.
- Show the citation popover opening on real statutory text.
- Ask the Rights Navigator something outside the corpus and let it decline on camera. A tool
  that admits a gap is more convincing than one that never does.
- One line on scope: it drafts, it never submits.

## Partner email

Both partners enter each other's registered address, and it must be the address used at
registration. There is no recovery path if it is wrong.
