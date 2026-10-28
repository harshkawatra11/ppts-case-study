# R-D: Review mining (secondary evidence in place of interviews)

Scraped 29 Sep 2026 with `research/reviews/scrape_reviews.py`, coded with `research/reviews/code_reviews.py`. All outputs are in `research/reviews/`. No interviews and no surveys were run. Every fan voice used in the deck or document is a verbatim public review.

## Method

| Item | Value |
|---|---|
| Apps | Dream11 (Play id `com.dream11.fantasy.cricket.football.kabaddi`, App Store id 1077286074, publisher Sporta Technologies Private Limited); FanCode (Play id `com.dream11sportsguru`) |
| Stores | Google Play (India, English and Hindi), Apple App Store India (RSS, most recent 100 to 500) |
| Window | 1 Jun 2025 to 28 Sep 2026 |
| Dream11 pull | 29,248 reviews in periods P0 to P3 (Play 29,148 plus App Store 100), run 2, cap 100,000 a language |
| FanCode pull | 13,511 reviews (Play only), run 1, cap 20,000 a language; the App Store resolver did not return a FanCode listing |
| Play Store metadata (29 Sep 2026) | Dream11 4.37 average from 4,114,395 ratings, 100M+ installs; FanCode 4.13 from 635,284 ratings, 50M+ installs |
| Periods | P0 1 Jun to 20 Aug 2025 (paid era, last 11 weeks); P1 21 Aug to 3 Dec 2025 (free-to-play with prizes); P2 4 Dec 2025 to 26 Aug 2026 (second-screen era); P3 27 Aug 2026 onward (prize-free) |
| Coding | Twelve themes T01 to T12 by a published regex codebook (see `code_reviews.py`), a review can carry several themes |
| Codebook version | v2. Version 1 used bare words "team", "league", "rating", "rank", "level" for T04, T05 and T07, which matched app-bug and prize complaints; v2 replaces them with skill, friends and status vocabulary (see precision table) |
| Scraper fix | Run 1 could not resolve the Dream11 Play id because the search hit had no `appId`; ids are now pinned in the script |

## Sample size by period

| Period | Dream11 n | Dream11 average rating | FanCode n | FanCode average rating |
|---|---|---|---|---|
| P0 Paid era | 11,514 | 4.27 | 2,060 | 3.90 |
| P1 Free with prizes | 8,230 | 3.84 | 6,163 | 3.42 |
| P2 Second screen | 9,309 | 2.55 | 3,561 | 3.29 |
| P3 Prize-free (Aug 27 to Sep 28) | 195 | 2.52 | 1,727 | 3.28 |

## Dream11 monthly series

| Month | n | Average rating | Share of 1-star reviews (%) |
|---|---|---|---|
| Jun 2025 | 5,872 | 4.17 | 15.8 |
| Jul 2025 | 3,543 | 4.36 | 12.0 |
| Aug 2025 | 4,851 | 3.98 | 21.4 |
| Sep 2025 | 3,258 | 3.92 | 21.1 |
| Oct 2025 | 1,205 | 3.84 | 23.7 |
| Nov 2025 | 910 | 4.08 | 17.8 |
| Dec 2025 | 1,366 | 2.86 | 47.4 |
| Jan 2026 | 1,077 | 3.25 | 37.9 |
| Feb 2026 | 692 | 3.07 | 42.6 |
| Mar 2026 | 1,931 | 2.34 | 60.2 |
| Apr 2026 | 2,162 | 2.03 | 68.9 |
| May 2026 | 1,196 | 2.86 | 46.2 |
| Jun 2026 | 271 | 2.45 | 58.3 |
| Jul 2026 | 441 | 2.15 | 64.6 |
| Aug 2026 | 325 | 2.49 | 58.2 |
| Sep 2026 (to 28th) | 148 | 2.52 | 55.4 |

## Theme share of Dream11 reviews (% of reviews in the period)

| Theme | P0 | P1 | P2 | P3 |
|---|---|---|---|---|
| T01 Money or prize | 6.4 | 6.4 | 7.0 | 20.0 |
| T02 No reason to play now | 0.7 | 0.9 | 5.4 | 6.7 |
| T03 Leaving or uninstalling | 0.1 | 1.0 | 1.9 | 4.1 |
| T04 Skill and team-building | 1.3 | 1.0 | 1.4 | 1.0 |
| T05 Friends and leagues | 0.8 | 0.4 | 0.5 | 0.5 |
| T06 Watch-along and content | 0.1 | 0.2 | 4.5 | 0.0 |
| T07 Rank, level and status | 0.6 | 0.3 | 0.5 | 0.0 |
| T08 Ads complaints | 0.1 | 0.9 | 7.4 | 1.5 |
| T09 App quality issues | 3.3 | 3.0 | 12.0 | 2.1 |
| T10 Betting or rival apps | 0.2 | 0.3 | 0.5 | 1.0 |
| T11 Coins and virtual currency | 0.2 | 0.2 | 0.4 | 0.0 |
| T12 Bring the old Dream11 back | 0.2 | 1.0 | 1.5 | 4.6 |

The full FanCode table and the monthly series in JSON are in `review_tables.md` and `review_outputs.json`.

## Precision check (manual read of the coded sample)

A seeded sample (seed 26) of Dream11 reviews carrying each theme was written to `precision_sample.json`. The plan called for 50 per theme; the main agent read the first 20 to 40 of each, so the sampled n below is what was actually read.

| Theme | Codebook | Sampled n | Judged true | Precision | Use |
|---|---|---|---|---|---|
| T01 Money or prize | v1 (unchanged) | 40 | 35 | 87% | Slides 3 and 4, doc |
| T04 Skill and team-building | v1 | 40 | 10 | 25% | Replaced by v2 |
| T04 Skill and team-building | v2 | 26 | 22 | 85% | Slide 4, doc |
| T05 Friends and leagues | v1 | 30 | 12 | 40% | Replaced by v2 |
| T05 Friends and leagues | v2 | 26 | 17 | 65% | Indicative only |
| T06 Watch-along and content | v1 | 30 | 27 | 90% | Slide 4, doc |
| T07 Rank, level and status | v1 | 30 | 12 | 40% | Not used on slides |
| T07 Rank, level and status | v2 | 26 | 6 | 23% | Not used on slides; doc mentions as indicative |
| T08 Ads complaints | v2 (unchanged) | 20 | 16 | 80% | Slide 4, doc |

Themes below 70% are labelled "(indicative)" wherever they appear.

## Findings that shape the argument

1. **The rating fell at each pivot step, and the steepest drops coincide with the second-screen launch.** Average rating: 4.27 (P0), 3.84 (P1), 2.55 (P2), 2.52 (P3). The 1-star share went from 12 to 24% in the paid era to 47.4% in December 2025, the month of the 4 December second-screen announcement, and 68.9% in April 2026 during IPL 2026. This is an association in public reviews, not a causal estimate.
2. **Watch-along was a complaint magnet inside Dream11.** T06 appears in 4.5% of P2 reviews with a mostly negative tone; users write that the live stream forces itself into team selection and slows the app. The T08 (ads) share rose from 0.1% (P0) to 7.4% (P2), and T09 (app quality) from 3.3% to 12.0%. This backs the plan's decision to hand streaming to FanCode and keep Dream11 for playing.
3. **Money talk triples once every prize is gone.** T01 is 20.0% of P3 reviews against 6.4% in P0 and P1; T02 (no reason to play now) rises from 0.7% to 6.7%; T03 (leaving or uninstalling) from 0.1% to 4.1%. Small P3 sample (195), indicative.
4. **Some fans want the game without the money.** The highest-thumbs prize-free reviews include an explicit request to bring football back "even if there is no money involved" (5 stars, 33 thumbs).
5. **FanCode's rating is lower but stable.** 3.90 to 3.28 across the periods, with its own watch-content complaints (T06 3.2% to 7.4%).

## Verbatim reviews (selected; text exactly as posted, reviewer names not collected)

| Use | Store, stars, thumbs, date | Text |
|---|---|---|
| Prize gone (slide 4 quote 1) | Play Store, 1 star, 48 thumbs, 30 Aug 2026 | now this app is useless because you can make team but there is no prize if you win. |
| Game without money (slide 4 quote 2) | Play Store, 5 stars, 33 thumbs, 30 Aug 2026 | Please bring back football on Dream11. Even if there is no money involved, I just enjoy watching football matches with my Dream11 team, the same way I do with cricket. |
| Leaving | Play Store, 1 star, 4 thumbs, 3 Sep 2026 | uninstalling Dream11...with no cash prizes...it has become a useless app...plz shift to My Circle 11...They are giving good Cash Prizes |
| Watch-along complaint | Play Store, 1 star, 19 thumbs, 14 Apr 2026 | worst app ever seen , cant see players list, cant see scores, real players never wins, most worst thing is watch along , totally it's a time waste headache irritating fak |
| Watch-along praise (one of few) | Play Store, 5 stars, 35 thumbs, 13 Dec 2025 | Hey Dream 11 Your Stream Feature is Very Good and I love it but I want to ask can we play and withdraw winnings in this app till now. |
| Lost stats | Play Store, 1 star, 41 thumbs, 5 Dec 2025 | old app was very good it provide venue stats, previous match points of every player, top venue player,dream team. which all these are not available in this updated app. |
| Friends and watch-along | Play Store, 1 star, 14 thumbs, 4 Mar 2026 | Unable to remove watch along option Even in private leagues . Watch along is irritating. advertisement is fine but watch along is so irritating. from ipl all of our group |
| Ads | Play Store, 1 star, 81 thumbs, 20 Jan 2026 | Very bad experience. uninstalling the app very soon. Unnecessary advertisement and no interesting updates. |

## Limitations

1. Reviewers skew negative and skew toward whatever changed recently; ratings are not usage-weighted.
2. Reviews are not a representative sample of the 300M registered base. They are evidence about what is said in public, not about how many people feel it.
3. Theme presence is not segment size. Segment sizes come from the model (assumptions A01 to A03), not from reviews.
4. The regex codebook handles English and romanised Hindi well and Devanagari not at all; Devanagari reviews are counted but rarely coded.
5. P3 has 195 reviews from one month; its theme shares carry wide error.
6. App Store RSS returns at most a few hundred recent reviews, so the App Store adds 100 rows.
7. Some short templated reviews (for example "Leaderboard chase addictive hota") look prompted; they are kept because removing them would be a judgement call, and T07 is not used on any slide.
8. The precision check was a manual read of 20 to 40 reviews a theme, not 50; it is a screen, not a formal audit.
