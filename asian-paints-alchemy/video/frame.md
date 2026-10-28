# frame.md: Asian Paints Alchemy Case Study 1 video

- Canvas 1920x1080, background #FFFFFF.
- Palette (the deck's own `deck/_palette.js`, `C` object, converted from 0 to 1 floats to hex):
  primary #5A2D91 (purple), primaryDeep #33175E (ink-purple), accent #F8B01A (gold, sticker shadow and
  moneyshot numerals), alert #E84428 (red, rejected designs and risk), tint #E9E1F6 (light purple fill),
  alertTint #FBE0DB (light red fill), blue #1D4E89 (link blue), blueDeep #133366, blueTint #DCE6F7,
  good #1E8A5E (green, kept/pass verdicts), goodTint #D9F0E5, accentTint #FFF3D6, ink #0A0A0A,
  surface #EDEDED, surfaceAlt #F6F6F6, white #FFFFFF.
- Heat ramps (from `deck/_palette.js` `HG`/`HR` arrays): a 5-step purple ramp (`HG`, light to deep) for
  "how close to target" gradients, and a 4-step red ramp (`HR`, light to deep) for "how far from target" or
  risk-heat gradients. Reuse these ramps exactly where the deck itself uses a gradient (the twelve-design
  screen's heat cells, the risk-heat grid) rather than inventing new ones.
- Type: Poppins ExtraBold / Bold for numerals and labels, Inter Semi Bold / Bold for body, matching the deck's
  own font usage exactly (`figma-deck-kit.js` / the deck's slide scripts). Native text never below 22 px,
  matching the deck's own type floor. Local font files in `assets/fonts` once copied over from the deck build
  or the Eurogrip project.
- Shapes: corner radius 0 everywhere, no exceptions (the deck's own `cornerRadius = 0` rule, §2 of CLAUDE.md);
  2 to 2.5 px ink borders on every panel, bar, node and table cell; layered "sticker" cards with the deck's
  own back-card/front-card offset (back card in `accent` or `primaryDeep`, drawn first at `x+7, y+7`; front
  card drawn second at `x, y`, carrying the text).
- Motion grammar: power2/power3 eases; back.out(1.6) only for node pops (badge numbers, verdict icons); reveals
  land on the spoken word; camera moves use power2.inOut over 0.8 to 1.2 s; no idle drift, no breathing loops,
  no gradients beyond the deck's own two heat ramps, no glows beyond a 4 px outline pulse.
- Highlight grammar: a 4 px outline plus a 16% tint of the same colour. Red (`alert`/`alertTint`) for a
  rejected design or a cost/risk callout; green (`good`/`goodTint`) for a kept design or a passed test; gold
  (`accent`/`accentTint`) for the moneyshot numerals and the "OUR ANSWER" card; blue (`blue`/`blueTint`) for
  the research-document link row.
