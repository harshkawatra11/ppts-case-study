# Adhikaar demo video script

Total target: 1:48 (under the 1:50 cap). Read at a natural, confident pace, not rushed.
About 300 words. Timestamps are guides for pacing, not hard cuts, adjust as you actually
record.

---

**0:00 to 0:10, the hook**
[Screen: landing page]

This is Adhikaar. A right to information tool that checks something the current
government portal never does: whether the office you're writing to is even allowed
to answer you.

**0:10 to 0:22, the evidence**
[Screen: the landing page's evidence numeral, 2,797 of 3,128]

One government department published its own disposal record. Out of three thousand one
hundred twenty eight RTI applications, two thousand seven hundred ninety seven came back
unanswered. Not rejected. Returned, because the citizen wrote to the wrong government.

**0:22 to 0:35, sign in**
[Screen: /login, click "Enter as a demo citizen"]

Here's the live app. One click signs me into a real citizen account, with real
filings already sitting inside it. No typing needed.

**0:35 to 0:48, deadline tracking**
[Screen: /my, open one filing, show the deadline card]

Every filing tracks its own statutory deadline on its own. This one has twenty two
days left before the department is legally required to reply, and if they go silent,
the appeal writes itself the day that deadline lapses.

**0:48 to 1:05, new filing, the jurisdiction catch**
[Screen: /start, the interview, the jurisdiction result screen]

When I start a new filing, I just describe my problem the way I'd say it out loud.
The app works out which government is actually responsible, and stops me before I
send it to the wrong one, the exact mistake behind those seventeen hundred returned
applications.

**1:05 to 1:18, rights and schemes**
[Screen: /rights answering a question with a citation, then /schemes showing a verdict]

It also explains your legal rights, with a real citation behind every answer, and
checks whether you actually qualify for a government scheme, showing you the exact
rule you failed, not just a no.

**1:18 to 1:35, how it's built**
[Screen: title card / typography, no live screen needed]

I built this on Next.js sixteen and React nineteen, and it's deployed on Vercel.
Sign in runs on real Firebase Authentication, but the app signs its own session
cookie instead of using a bare Firebase one, because the account behind it is
deliberately scoped to the least permission it needs to do its job. The data itself
lives in Google Cloud Firestore.

**1:35 to 1:48, the actual point**
[Screen: title card / typography]

But the decision I cared about most wasn't the framework. Every legal call this app
makes, which office is responsible, whether a question is legally sound, when a
deadline lapses, is decided by plain code, tested over one hundred sixty times. The
AI model only phrases and translates. It never decides. And when it isn't confident
about a rights answer, it just says so, instead of guessing.

---

## Recording notes

- Read it once through cold to get the timing right, then record for real. Natural
  pace, the way you'd actually explain this to a friend, not an announcer voice.
  It's fine to pause slightly at each screen change.
- If a sentence runs long on your read, trim a word or two on the fly. The numbers
  and the specific claims are what have to stay exact, not the exact phrasing.
- Once you have the audio, send it over (or drop it in this folder as
  `adhikaar-voiceover.mp3` or `.wav`) and it can be laid under the screen capture
  instead of the AI voice track.
