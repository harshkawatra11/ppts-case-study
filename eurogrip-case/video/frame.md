# frame.md: Eurogrip Case 4 video

- Canvas 1920x1080, background #FFFFFF.
- Palette (the deck's own): primary #184898 (blue), primaryDeep #111111 (ink), accent #FFC20E (yellow sticker
  shadow), alert #B91C1C (moneyshot red, rejected options), good #15803D, tint #DCE4F0, link blue #1D4ED8.
- Type: Poppins ExtraBold / Bold for numerals and labels, Inter Bold / Semi Bold for body. Local font files in
  assets/fonts. Native text never below 22 px.
- Shapes: corner radius 0; 2 px ink borders; layered sticker cards (yellow block shadow offset 7 to 8 px).
- Motion grammar: power2/power3 eases; back.out(1.6) only for node pops; reveals land on the spoken word; camera
  moves use power2.inOut over 0.8 to 1.2 s; no idle drift, no breathing loops, no gradients, no glows beyond the
  4 px outline pulses.
- Highlight grammar: a 4 px outline plus a 16% tint of the same colour, red for the rejected cash scheme, green for
  our design, blue for links, yellow for the verdict.
