# R-G: Review mining (Lane G)

Preamble. Pulled 2026-10-09 by `verdict-mnc/research/reviews/mine_reviews.py`, run with `python -X utf8 mine_reviews.py`
from `verdict-mnc/research/reviews`. The script pulls recent public Google Play reviews of six real services (five meal
kits, one ready-to-eat service) and codes each review against the case's five exit reasons (W1 to W5) plus two extra
themes (X1, X2) with a published regular-expression codebook (table V5 below). It answers one question: do paying
customers of real meal kits complain about the same things, in roughly the same order, as the case says HarvestBox's
leavers do. These are US and UK customers of other companies, self-selected reviewers, keyword coding. It is
association only. No reviewer in this file is a HarvestBox customer; HarvestBox is fictional and has no reviews of its
own.

## Method

The script pulled reviews dated 2024-01-01 or later, newest first, up to 4,000 a app, for six Play Store listings:

| App | Type | Play package id | Reviews pulled | First review used | Last review used |
|---|---|---|---|---|---|
| HelloFresh | meal kit | com.hellofresh.androidapp | 4,000 | 2024-02-16 | 2026-10-07 |
| EveryPlate | meal kit | com.everyplate.android | 611 | 2024-01-02 | 2026-10-01 |
| Home Chef | meal kit | com.homechef.android | 650 | 2024-01-04 | 2026-10-07 |
| Dinnerly | meal kit | com.dinnerly | 77 | 2024-01-14 | 2026-07-17 |
| Green Chef | meal kit | com.greenchef.GreenChef | 168 | 2024-01-02 | 2026-09-21 |
| CookUnity | ready-to-eat | com.cookunity.android.app | 2,546 | 2024-01-01 | 2026-10-07 |

All six package ids loaded without error; no app was skipped. Total reviews pulled: 8,052. Of these, 2,435 are 1 or 2
star (low) and 5,152 are 4 or 5 star (high). Four apps are above the 300-review floor set in PLAN 7.2 step 1: HelloFresh
(4,000), EveryPlate (611), Home Chef (650) and CookUnity (2,546). Dinnerly (77) and Green Chef (168) fell short of 300
because their review volume on Play since 2024 is genuinely thin, not because of a load failure; both are kept in the
pooled counts and tables for completeness but carry little individual weight. Counts, dates and the by-app mentions are
all read from `review_outputs.json`, written by the same run.

## Precision check

For each theme, 20 reviews were sampled at random from the 1 and 2 star pool that matched that theme's regular
expression (13 for X2, which has too few low-star matches to fill a sample of 20) and read individually. A sample
member counts as a true match only if the review is actually complaining about the theme's label, not merely
containing a word the regular expression also catches for an unrelated reason (for example, "selection" in "meal
selection screen" is not a complaint about a narrow menu).

| Theme | Label | True matches | Sample size | Precision | Flag |
|---|---|---|---|---|---|
| W1 | Rigid plan, hard to skip or cancel | 18 | 20 | 90% | |
| W2 | Too expensive | 14 | 20 | 70% | |
| W3 | Menu repetitive or narrow | 16 | 20 | 80% | after the one exclusion in section 7.3 below |
| W4 | Food waste or portion issues | 14 | 20 | 70% | |
| W5 | Delivery problems | 13 | 20 | 65% | **(indicative)**, under 70% |
| X1 | App or billing fault | 19 | 20 | 95% | |
| X2 | Wants ready-made or less cooking | 11 | 13 | 85% | sample smaller than 20, too few low-star matches available |

Per PLAN 7.2 step 4, any theme under 70% precision is labelled "(indicative)" everywhere it is used in this file and in
the document. That applies to **W5 only**. W2 and W4 sit exactly at 70%, which the plan's wording ("under 70%") does
not catch, so they are left unflagged; a reader should still treat all seven numbers as keyword-coded estimates, not
audited counts.

## The one permitted codebook change (section 7.3)

W3's first-pass precision was 50% (10 of 20 true), below the 60% threshold in PLAN 7.3. Reading the 10 false matches,
the single most common cause was the bare alternative `|selection` at the end of the W3 regular expression, which
matched any mention of the word "selection" (an app's meal-selection screen, a selection process, a food order
selection) regardless of whether the review was complaining about a narrow or repetitive menu. One exclusion was made:
the bare `|selection` alternative was removed from the W3 pattern, which already covers "limited selection" through
`limited (menu|options|choice\w*|selection)`. The script was rerun in full (same six apps, same cutoff; it reproduced
the same 8,052 reviews). A fresh 20-review sample was drawn for W3 only and rechecked: 16 of 20 were true matches, a
precision of 80%, up from 50%. No other theme's regular expression was touched, and the change was not aimed at moving
W3 toward the case's 18% share: the fix in fact pulled W3's measured low-star share down, from 2.4% to 1.2%, and its
mix share down from 3.5% to 1.8%, moving it further from the case's 18%, not closer. Both the before and after
precisions are recorded in the table above and in this paragraph; the before precision for W3 was 50% (10/20) and the
after precision is 80% (16/20).

## Tables V1 to V4 (copied from `review_tables.md`)

### V1 Sample by app

| App | Type | Play id | Reviews | Average rating | 1 and 2 star share % |
|---|---|---|---|---|---|
| HelloFresh | meal kit | com.hellofresh.androidapp | 4000 | 3.27 | 39.8 |
| EveryPlate | meal kit | com.everyplate.android | 611 | 3.02 | 45.7 |
| Home Chef | meal kit | com.homechef.android | 650 | 3.81 | 26.0 |
| Dinnerly | meal kit | com.dinnerly | 77 | 1.88 | 74.0 |
| Green Chef | meal kit | com.greenchef.GreenChef | 168 | 2.6 | 57.1 |
| CookUnity | ready-to-eat | com.cookunity.android.app | 2546 | 4.4 | 9.5 |

*App = the real meal-kit or ready-to-eat service reviewed on Google Play. Play id = the app's Android package
identifier.*

### V2 Share of 1 and 2 star reviews that mention each theme, %

| Theme | All apps | HelloFresh | EveryPlate | Home Chef | Dinnerly | Green Chef | CookUnity |
|---|---|---|---|---|---|---|---|
| W1 Rigid plan, hard to skip or cancel | 28.8 | 33.0 | 24.7 | 18.3 | 22.8 | 19.8 | 17.8 |
| W2 Too expensive | 11.0 | 11.2 | 12.9 | 8.9 | 12.3 | 13.5 | 7.0 |
| W3 Menu repetitive or narrow (indicative precision note: 80% after the section 7.3 fix) | 1.2 | 0.9 | 2.9 | 2.4 | 0.0 | 1.0 | 0.4 |
| W4 Food waste or portion issues | 8.4 | 9.1 | 9.0 | 5.9 | 12.3 | 9.4 | 3.7 |
| W5 Delivery problems (indicative) | 18.4 | 20.2 | 12.2 | 18.3 | 35.1 | 14.6 | 10.7 |
| X1 App or billing fault | 18.4 | 15.6 | 24.7 | 18.9 | 19.3 | 13.5 | 30.2 |
| X2 Wants ready-made or less cooking | 0.5 | 0.4 | 1.1 | 1.8 | 0.0 | 0.0 | 0.4 |

### V3 Mix of the five case reasons among low-star mentions, against the case

| Reason | Review mix % | Case exit share % | Gap, points |
|---|---|---|---|
| W1 Rigid plan, hard to skip or cancel | 42.5 | 34 | 8.5 |
| W2 Too expensive | 16.2 | 27 | -10.8 |
| W3 Menu repetitive or narrow | 1.8 | 18 | -16.2 |
| W4 Food waste or portion issues | 12.4 | 11 | 1.4 |
| W5 Delivery problems (indicative) | 27.1 | 10 | 17.1 |

*Review mix % is each reason's share of all W1 to W5 theme mentions among 1 and 2 star reviews (the five columns sum
to 100). Case exit share % is the case's own stated share of exits per reason `[C W1]` to `[C W5]`.*

### V4 The same themes in 4 and 5 star reviews, %

| Theme | Share of 4 and 5 star reviews |
|---|---|
| W1 Rigid plan, hard to skip or cancel | 1.9 |
| W2 Too expensive | 6.7 |
| W3 Menu repetitive or narrow | 4.9 |
| W4 Food waste or portion issues | 7.4 |
| W5 Delivery problems (indicative) | 8.5 |
| X1 App or billing fault | 1.5 |
| X2 Wants ready-made or less cooking | 0.7 |

**V3 against the case's mix.** The case states exit shares of 34% rigidity, 27% price, 18% menu repetition, 11% food
waste or portions and 10% delivery `[C W1]` to `[C W5]`. The review mix puts rigidity even higher, at 42.5%, a gap of
8.5 points above the case, and puts delivery far higher than the case at 27.1%, a gap of 17.1 points. Price sits 10.8
points below the case at 16.2% and food waste or portions sits close to the case at 12.4% against 11%, a gap of only
1.4 points. The largest gap by far is menu repetition: the review mix, after the one permitted codebook fix, measures
it at 1.8% against the case's 18%, a gap of 16.2 points. Read together, the review data supports the case's ranking of
rigidity as the single largest stated reason for leaving, which is the reason the Flex redesign in this plan treats as
load-bearing. It does not support the case's weight on menu repetition: real customers of these six apps barely raise
it unprompted in a 1 or 2 star review, and delivery problems, which the case ranks last, are the second largest theme
in the review data. This is one study of other companies' customers against one stated breakdown for a fictional
company; the comparison is offered as a sense check on relative ordering, not as proof of HarvestBox's own causes, and
the document says so wherever this table is used.

### V5 Codebook (current, after the section 7.3 fix)

| ID | Theme | Regular expression |
|---|---|---|
| W1 | Rigid plan, hard to skip or cancel | `\b(skip\w* or paus\w* or cancel\w* or unsubscrib\w* or auto.?renew\w* or charged (me )?(again or twice or without) or commit\w* or locked in or cut.?off or deadline or forgot to)\b` |
| W2 | Too expensive | `\b(expensive or pric\w+ or overpriced or too much money or not worth or afford\w* or cheaper or costly or cost too or rip.?off)\b` |
| W3 | Menu repetitive or narrow | `\b(repetit\w* or same (meals? or recipes? or menu or dishes) or boring or variety or limited (menu or options or choice\w* or selection) or more (options or choices or recipes))\b` |
| W4 | Food waste or portion issues | `\b(portion\w* or too (small or little) or not enough food or wast\w* or spoil\w* or rotten or wilted or went bad or mold\w* or packaging or plastic)\b` |
| W5 | Delivery problems | `\b(deliver\w* or late or never (arrived or came or received) or missing (box or item\w* or ingredient\w*) or damaged or courier or shipping or did ?n.?t arrive)\b` |
| X1 | App or billing fault | `\b(bug\w* or crash\w* or log ?in or glitch\w* or freez\w* or not working or error\w* or refund\w* or double charged)\b` |
| X2 | Wants ready-made or less cooking | `\b(ready.?made or ready to eat or pre.?made or pre.?cooked or heat and eat or too much (work or prep or time) or takes too long or prep time or no time to cook)\b` |

## Verbatim quotes per case reason

Every quote below is reproduced exactly as pulled, trimmed to end at a sentence boundary where the full review ran
long, at most 40 words, with no reviewer name. Attribution follows "Play Store review of app, star rating, Mon YYYY".
None of these reviewers is a HarvestBox customer.

### W1: Too rigid, difficult to skip

> "why is there not a single option to cancel the subscription"
> Play Store review of HelloFresh, 1 star, Oct 2026

> "the app got noticeably worse. I cannot figure out (and I am a software engineer!) how to skip a week. I will just
> use the website if the app gets crippled in this way."
> Play Store review of HelloFresh, 1 star, Sep 2026

> "It would've been nice if there was a way to cancel the subscription on my own instead of calling or using a live
> chat."
> Play Store review of HelloFresh, 1 star, Sep 2026

> "Not possible to cancel from the app. Thought that was illegal. Lets see if I can sue them for this."
> Play Store review of HelloFresh, 2 star, Sep 2026

> "no option to cancel subscription in the app. I HATE these business practices and will not support any companies
> that use them."
> Play Store review of HelloFresh, 1 star, Aug 2026

> "Such a scam company. Make you add a credit card for account sign up saying we won't charge you. Then creates you an
> order that can't be cancelled online. Avoid Hello Fresh"
> Play Store review of HelloFresh, 1 star, Aug 2026

### W2: Too expensive

> "literally missing two main ingredients out of three meals this is the final straw with this company just not worth
> it."
> Play Store review of HelloFresh, 1 star, Oct 2026

> "I got an offer for 20 free meals and then the offer gave me 17 meals at a discounted price. That's not what you
> offered."
> Play Store review of HelloFresh, 1 star, Sep 2026

> "Rip off. If they forget a major ingredient, they give you a partial credit and you're stuck paying for the rest of
> the meal which can't be made."
> Play Store review of HelloFresh, 1 star, Aug 2026

> "Price is increasing yet they cannot get a box right for me. Either the ingredients are already moldy or they just
> dont pack everything."
> Play Store review of HelloFresh, 1 star, Aug 2026

> "Deceptive pricing, hidden cancellation and other bad practices make this a one star app"
> Play Store review of HelloFresh, 1 star, May 2026

> "charges are too expensive for the amount of food you receive"
> Play Store review of HelloFresh, 1 star, Apr 2026

### W3: Menu becomes repetitive

> "The food was okay. It lacked variety after a while and they kept trying to send allergen items. No customer
> service. This is a predatory subscription service that will send things that are not ordered"
> Play Store review of HelloFresh, 2 star, May 2026

> "Shows the same recipes over and over again"
> Play Store review of EveryPlate, 1 star, Aug 2024

> "These meals will make you fat. Very repetitive recipes and no variety in ingredients"
> Play Store review of EveryPlate, 2 star, Jul 2024

> "Scam. They will take your credit card to see the very limited menu and then not allow you to cancel anything!"
> Play Store review of Home Chef, 1 star, Jul 2026

> "need more variety for vegetarian and vegan recipes, or allow us to opt out of meat meals for meals that we can
> still enjoy meatless. they just keep repeating the same meals every other week. gets tiring."
> Play Store review of Green Chef, 2 star, Apr 2024

### W4: Food waste or portion issues

> "food spoiled quickly"
> Play Store review of HelloFresh, 1 star, Sep 2026

> "every box has been 1+ ingredients or has had rotten produce. poor quality control. don't do it. customer service
> refunds us, but that doesn't help us when we're hungry and trying to scramble to feed ourselves. 0/10"
> Play Store review of HelloFresh, 1 star, Aug 2026

> "Rotten Veggies and Leaky Meat"
> Play Store review of HelloFresh, 1 star, May 2026

> "Regularly send moldy food, and have a thousand sneaky design choices to try and trick you out of your money. A case
> for the Verbraucherschutz. Ye should be ashamed. Pfui."
> Play Store review of HelloFresh, 1 star, Mar 2026

> "buggy as hell and no way to contact customer service about it. they're very strict, even if it leads to food
> waste."
> Play Store review of HelloFresh, 1 star, Feb 2026

> "missing items, missing meals spoiled fish I mean I paid money for something that can't make or fill recipes that's
> crazy"
> Play Store review of HelloFresh, 1 star, Jan 2026

> "small portions, bad customer service."
> Play Store review of HelloFresh, 1 star, Sep 2025

### W5: Delivery problems (indicative, 65% precision)

> "They took my money without providing a single service. I never even started or used the service at all. There is
> absolutely no reason I should have been charged for something I never received."
> Play Store review of HelloFresh, 1 star, Oct 2026

> "poor customer service and food was damaged all what was done was a credit and when I asked if they can do it for
> every week was switched to one a month"
> Play Store review of HelloFresh, 1 star, Sep 2026

> "The app was hard to navigate, but food delivered had missing items, unripe tomatoes in every meal, and extra items
> that were not needed!!"
> Play Store review of HelloFresh, 1 star, Jun 2026

> "The app is bad never received order was delivered to complete wrong address. App must be corrupt had complete
> wrong address for billing and shipping a address I would never have entered not even close. Suoport was no help."
> Play Store review of HelloFresh, 1 star, May 2026

> "Always missing items or getting shorted on proteins. Time to look at other services even though we've received
> over 200 boxes from HF."
> Play Store review of HelloFresh, 2 star, Apr 2026

> "i couldn't log in with link. i couldn't select meals as no select button. date of delivery kept changing. i have
> no idea what i am getting and when. i couldn't get back to help section."
> Play Store review of HelloFresh, 1 star, May 2026

## Limits

1. These are customers of six real services, five meal-kit subscriptions and one ready-to-eat subscription, on Google
   Play, mostly in the United States and United Kingdom. None of them is a HarvestBox customer, and HarvestBox has no
   reviews of its own; the comparison with the case's five reasons is association, not proof, and every use of it in
   the document says so.
2. Reviewers are self-selected. People who write a public Play Store review skew toward the very satisfied or the very
   angry; the quiet middle of the customer base is underrepresented in both the low-star and high-star pools.
3. Coding is by regular expression on free text, not by a human reading every review. The precision check above shows
   this catches the theme correctly most of the time for five of seven themes (70% or better) but not for W5, which
   stays at 65% and is marked "(indicative)" everywhere it appears for that reason.
4. The one exclusion made under PLAN 7.3 fixed W3's worst single source of false matches (the bare word "selection")
   but could not fix every edge case; W3's 80% precision still means one in five sampled matches is not truly about a
   repetitive or narrow menu.
5. Dinnerly (77 reviews) and Green Chef (168 reviews) fall under the 300-review floor used to judge the overall pull;
   their app-level rows in V1 and V2 should be read as thin samples, not as reliable per-app findings. The pooled
   totals (8,052 reviews, four apps above 300) carry the weight in this document, not any single small app.
6. The window is reviews from 2024-01-01 onward only. Recent reviews describe the current version of each app's
   cancellation flow and pricing, which may differ from how these companies behaved in earlier years covered by Lane
   B's company-level facts; the two lanes are not necessarily describing the same product generation.
7. W3's low-star mention share fell to 1.2% and its mix share to 1.8% after the section 7.3 fix, which thins the
   available quote pool for that reason to five candidates under 40 words; all five usable quotes are shown above
   rather than the fuller six to eight range used for the other four reasons.
8. "Too expensive" (W2) and "food waste or portion issues" (W4) sit exactly at the 70% precision line; they are not
   flagged "(indicative)" because the plan's rule names only results strictly under 70%, but one in three or more
   sampled matches for several themes here is still a false keyword hit, and that margin of error should travel with
   every number in tables V2 to V4.
