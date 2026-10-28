# Review mining tables (pulled 2026-10-09, reviews since 2024-01-01)

### V1 Sample by app

| App | Type | Play id | Reviews | Average rating | 1 and 2 star share % |
|---|---|---|---|---|---|
| HelloFresh | meal kit | com.hellofresh.androidapp | 4000 | 3.27 | 39.8 |
| EveryPlate | meal kit | com.everyplate.android | 611 | 3.02 | 45.7 |
| Home Chef | meal kit | com.homechef.android | 650 | 3.81 | 26.0 |
| Dinnerly | meal kit | com.dinnerly | 77 | 1.88 | 74.0 |
| Green Chef | meal kit | com.greenchef.GreenChef | 168 | 2.6 | 57.1 |
| CookUnity | ready-to-eat | com.cookunity.android.app | 2546 | 4.4 | 9.5 |

### V2 Share of 1 and 2 star reviews that mention each theme, %

| Theme | All apps | HelloFresh | EveryPlate | Home Chef | Dinnerly | Green Chef | CookUnity |
|---|---|---|---|---|---|---|---|
| W1 Rigid plan, hard to skip or cancel | 28.8 | 33.0 | 24.7 | 18.3 | 22.8 | 19.8 | 17.8 |
| W2 Too expensive | 11.0 | 11.2 | 12.9 | 8.9 | 12.3 | 13.5 | 7.0 |
| W3 Menu repetitive or narrow | 1.2 | 0.9 | 2.9 | 2.4 | 0.0 | 1.0 | 0.4 |
| W4 Food waste or portion issues | 8.4 | 9.1 | 9.0 | 5.9 | 12.3 | 9.4 | 3.7 |
| W5 Delivery problems | 18.4 | 20.2 | 12.2 | 18.3 | 35.1 | 14.6 | 10.7 |
| X1 App or billing fault | 18.4 | 15.6 | 24.7 | 18.9 | 19.3 | 13.5 | 30.2 |
| X2 Wants ready-made or less cooking | 0.5 | 0.4 | 1.1 | 1.8 | 0.0 | 0.0 | 0.4 |

### V3 Mix of the five case reasons among low-star mentions, against the case

| Reason | Review mix % | Case exit share % | Gap, points |
|---|---|---|---|
| W1 Rigid plan, hard to skip or cancel | 42.5 | 34 | 8.5 |
| W2 Too expensive | 16.2 | 27 | -10.8 |
| W3 Menu repetitive or narrow | 1.8 | 18 | -16.2 |
| W4 Food waste or portion issues | 12.4 | 11 | 1.4 |
| W5 Delivery problems | 27.1 | 10 | 17.1 |

### V4 The same themes in 4 and 5 star reviews, %

| Theme | Share of 4 and 5 star reviews |
|---|---|
| W1 Rigid plan, hard to skip or cancel | 1.9 |
| W2 Too expensive | 6.7 |
| W3 Menu repetitive or narrow | 4.9 |
| W4 Food waste or portion issues | 7.4 |
| W5 Delivery problems | 8.5 |
| X1 App or billing fault | 1.5 |
| X2 Wants ready-made or less cooking | 0.7 |

### V5 Codebook

| ID | Theme | Regular expression |
|---|---|---|
| W1 | Rigid plan, hard to skip or cancel | `\b(skip\w* or paus\w* or cancel\w* or unsubscrib\w* or auto.?renew\w* or charged (me )?(again or twice or without) or commit\w* or locked in or cut.?off or deadline or forgot to)\b` |
| W2 | Too expensive | `\b(expensive or pric\w+ or overpriced or too much money or not worth or afford\w* or cheaper or costly or cost too or rip.?off)\b` |
| W3 | Menu repetitive or narrow | `\b(repetit\w* or same (meals? or recipes? or menu or dishes) or boring or variety or limited (menu or options or choice\w* or selection) or more (options or choices or recipes))\b` |
| W4 | Food waste or portion issues | `\b(portion\w* or too (small or little) or not enough food or wast\w* or spoil\w* or rotten or wilted or went bad or mold\w* or packaging or plastic)\b` |
| W5 | Delivery problems | `\b(deliver\w* or late or never (arrived or came or received) or missing (box or item\w* or ingredient\w*) or damaged or courier or shipping or did ?n.?t arrive)\b` |
| X1 | App or billing fault | `\b(bug\w* or crash\w* or log ?in or glitch\w* or freez\w* or not working or error\w* or refund\w* or double charged)\b` |
| X2 | Wants ready-made or less cooking | `\b(ready.?made or ready to eat or pre.?made or pre.?cooked or heat and eat or too much (work or prep or time) or takes too long or prep time or no time to cook)\b` |
