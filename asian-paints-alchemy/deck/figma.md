# Figma build log: Asian Paints Alchemy deck

File: https://www.figma.com/slides/KJQkGsLgbeLU9vNy24p78y
Plan key: team::1564294484048272772 (Harsh Kawatra's team, admin)

## F1: Initial state (read-only)
Confirmed: exactly two slides, `1:42` (Asian Paints cover, one image rect "image 1") and `2:40`
(template background, one image rect "image 2"). Matches planning-time assumptions exactly.

## F2: setup.js
First attempt failed its own `s2.id !== ours[0].id` check: `figma.Slide.clone()` inserts the new
clone *before* the source slide's current grid position (not after), so after cloning 7 times, the
original `2:40` ended up last in the row instead of first. The 7 clones themselves were created
correctly (each with exactly one `TPL: background` child, locked, no stray content).

Fixed inline (not by editing `setup.js` on disk, since the clones already existed and recreating
them would have produced a 10th duplicate): read the grid directly via the `SLIDE_GRID` node tree
(`figma.getSlideGrid()` returned a stale/cached 2-slide result even after the clones existed; the
direct node-tree read via `page.children.find(c=>c.type==="SLIDE_GRID")` was accurate), verified
all 8 template slides had exactly one `TPL: background` child each, then reordered with
`figma.setSlideGrid([[s1, s2, ...other7]])` to put `2:40` second (our cover) as intended, and
renamed all 9 slides.

Final slide IDs (`deck/slide-ids.json`):
S1=1:42 (Asian Paints cover, untouched), S2=2:40 (our cover), S3=13:2, S4=13:4, S5=13:6, S6=13:8,
S7=13:10, S8=13:12, S9=13:14.

fontsOk: Poppins Bold, Poppins ExtraBold, Inter Semi Bold, Inter Bold all available: true.

**Lesson for any future rerun of setup.js**: the `s2.id === ours[0].id` assumption in the embedded
script is wrong for `clone()`'s actual insertion order. Do not rerun `setup.js` as-is if the file
ever needs to be rebuilt from a 2-slide starting state again; use the inline reorder pattern above
instead, or fix the assertion to explicitly force s2 first via `[s2, ...tplSlides.filter(...)]`
rather than asserting on clone() order.

## Stage 2 v2, step E5: slide 2 rebuild
Slide 2 (2:40, cover) rebuilt from build/slide_02.js, submitted whole (48,684 chars). Result:
{results:[{slide:"2:40",total:117,top:25}], warnings:[]}. v1_02.js reports clean: true, 0 issues.
Screenshot (deck/shots/s2.png, 1600 wide) shows: WHITER WITH / LESS TiO2 title stack, the purple
answer card with the 1.52x and 24.8 g / 40.8 g figures baked in via overrides.json, the two-row
TEAM IDEAFORGE table (Harsh Kawatra, Anuj Gambhir, both DTU), two fact cards (beetle nature-does-it-
first and the 57% / dollar-460-to-681 duty line), and the WHO SHAPES A WHITE WALL mind map with
four nodes (pigment, opacifiers, paint makers, rules) around the 40.8 g TiO2 hub. Ribbon, chips and
source line intact between the organisers template logos.

## Logo and image slots
Deck-wide slots.js scan (all 8 core slides, 2:40 through 13:14): 15 slots total, all on slide 2
(the cover). None on slides 3, 4, 5, 7, 8 (built clean by other agents, no logo/image slots in
their own designs); slides 6 and 9 were still unbuilt (1 node, template only) at scan time so
carry none either.

- IMG: Beetle (43:39) 58x58 | IMG: TiO2 (43:44) 58x58 | IMG: Cyphochilus scale (43:115) 106x112
- LOGO: Chemours (43:71) 86x48 | LOGO: Tronox (43:73) 86x48 | LOGO: KMML (43:75) 86x48
- LOGO: Dow (43:81) 86x48 | LOGO: Omya (43:83) 86x48 | LOGO: Imerys (43:85) 86x48
- LOGO: Asian Paints (43:91) 86x48 | LOGO: Berger (43:93) 86x48 | LOGO: Birla Opus (43:95) 86x48
- LOGO: DGTR (43:101) 86x48 | LOGO: BIS (43:103) 86x48 | LOGO: CPCB (43:105) 86x48

Not filled at scan time, per instruction, just listed. Filled in step E7 below; final status there.

## Step E7: logo and image slots filled

9 of 12 search-eligible brand-logo slots filled from Wikimedia Commons; 3 brand logos (KMML, Birla
Opus) and the 3 State Emblem marks (DGTR, BIS, CPCB) stay placeholders by design or because no
Commons file was found. 2 of 3 image slots filled (Beetle, TiO2); Cyphochilus scale stays a
placeholder, no microscope image of the beetle's scales found on Commons.

Filled (local files in `deck/logos/` and `deck/images/`, scaleMode FIT, caption text removed,
dashPattern cleared to `[]`):

| Slot | Node | Commons file | License | Credit |
|---|---|---|---|---|
| LOGO: Chemours | 43:71 | File:Chemours.svg | Public domain | Unknown author |
| LOGO: Tronox | 43:73 | File:Tronox logo.png | Public domain | Tronox |
| LOGO: Dow | 43:81 | File:Dow Chemical Company logo.svg | Public domain | Dow Chemical Company |
| LOGO: Omya | 43:83 | File:Logo Omya.svg | Public domain | Unknown author |
| LOGO: Imerys | 43:85 | File:Imerys logo.png | CC BY-SA 4.0 | Guillaume Imerys |
| LOGO: Asian Paints | 43:91 | File:Asian Paints Logo.svg | Public domain | Asian Paints |
| LOGO: Berger | 43:93 | File:Berger Paints logo.png | Public domain | Berger Paints |
| IMG: Beetle | 43:39 | File:Cyphochilus beetle close up.jpg | CC BY-SA 4.0 | Andy Parnell |
| IMG: TiO2 | 43:44 | File:Titanium(IV) oxide.jpg | Public domain | Walkerma (en.wikipedia), transferred to Commons |

Credits to add to the research document's source list later (not done here, per instruction, since
this agent does not edit the research document): the Cyphochilus beetle photo is credited to Andy
Parnell (CC BY-SA 4.0, Wikimedia Commons, "Cyphochilus beetle close up.jpg") and the Imerys logo
file is credited to Wikimedia user Guillaume Imerys (CC BY-SA 4.0). Both require attribution under
their license even though they are used here as factual/brand reference images, not as research
figures.

Still placeholders:
- LOGO: KMML (43:75) — no usable Commons file found; searched "KMML logo", only unrelated PDF/OCR
  hits (false-positive text matches on "KMML" inside scanned documents).
- LOGO: Birla Opus (43:95) — zero Commons search hits for "Birla Opus logo"; the brand launched in
  2024 and has no Commons presence yet.
- LOGO: DGTR (43:101), LOGO: BIS (43:103), LOGO: CPCB (43:105) — not searched, per instruction
  (State Emblem of India marks, must stay placeholders).
- IMG: Cyphochilus scale (43:115) — no Commons microscope/SEM image of the beetle's white scales
  found; "Cyphochilus scale electron microscope" returned zero hits. Left as placeholder.

Fresh screenshot taken after filling (deck/shots/s2.png, 1600 wide, overwritten). Confirmed by eye:
all 7 filled brand logos render at correct aspect ratio inside their 86x48 slots, no stretching or
cropping; the two filled image thumbnails (beetle, TiO2 powder) sit correctly inside their fact
cards; the 5 remaining placeholder slots (KMML, Birla Opus, DGTR, BIS, CPCB) and the Cyphochilus
scale slot still show their dashed border and caption text, unchanged; no overlap; the rest of the
cover (title stack, answer card, team table, mind map, ribbon, template logos, source line) is
unaffected. No slot frame was resized.

## F-end: slide 1 unchanged check
Screenshot of 1:42 (deck/shots/s1.png, 1600 wide) confirmed unchanged: organisers original purple
cover, scientist-with-microscope photo on the left, Asian Paints and Alchemy logos centre-right,
Unstop Platform Partner mark bottom right. No node on this slide was touched.

## Slide 8 (deck/shots/s8.png): annexure, four A1 to A4 panels
Dense four-panel annexure as designed: A1 model chain and checks (Mie, Percus-Yevick, Kubelka-Munk,
CIE D65, optimiser, with the 13-of-13 pass line), A2 assumptions bear to base to bull as a coloured
heat table plus a separate "what would change our mind" panel, A3 sensitivity (tornado bars, a
near-infrared wavelength table, and a one-input-moves rupee table), and A4 sources and short forms.
Ribbon correctly swaps to the A1 to A4 appendix label set; no empty region, ink outlines throughout.

## Slide 9 (deck/shots/s9.png): thank-you, recap card and team table
Centred thank-you slide as designed: large "THANK YOU" headline, one-line seed sentence recap, a
layered purple recap card with three KPI columns (39% TiO2 saved, Rs 298 Cr a year, 13 of 13 checks),
an accent chip pointing to the full research document, and the two-row team table (Harsh Kawatra
and Anuj Gambhir, both DTU). Deliberately mostly white space below the table, matching the
BeyondTech thank-you pattern this slide was built from, not meant to be EY-dense like slide 8.

## Slide 7 (deck/shots/s7.png): 5/5 COST AND SCALE
Three-band COST/SCALE/ROLL-OUT slide as designed: COST band carries a material-cost waterfall
(Rs 18.4 to Rs 12.0 a m2) beside a raw-materials-and-handling table and a three-scenario table
(bear 15%, base 39%, bull 65%) with a per-litre note; SCALE band carries a funnel from 1,19,919 t
TiO2 a year down to 7,551 t avoided, a tornado of the five inputs that move the saving most, and a
segment readiness table (Highest to Lowest); ROLL-OUT band carries a four-phase Gantt with gates,
a 5x5 risk heat map (12 risks placed by probability x impact), and a top-three-risks table ending
on the "Therefore" note. Ink outlines and rails throughout, no empty region, ribbon correctly shows
COST AND SCALE active (5/5).

## Slide 5 (deck/shots/s5.png): 3/5 WHY IT IS UNIQUE
Three-band slide as designed, ribbon correctly shows WHY IT IS UNIQUE active (3/5). THE SCREEN band
carries the twelve-design table (Reference/Commercial/Particle/Substitute/Film families, TiO2 a m2,
percent saved, Y, CR, verdict, only design 10 kept) beside the test-and-model panel with the four
named-physics chips (Mie, Percus-Yevick, Kubelka-Munk, CIE D65) and a how-far-each-miss-falls-short
bar chart topped by barium sulfate at 27.5. THE VERDICT band carries the five-challenges-three-routes
grid, the prior-art comparison grid against five named patents/products, and a layered purple
CONCLUSIVELY card with the Lemcoff et al. 2023 quote. No empty region, ink outlines and rails
throughout.

## Cover map v3 and slide 6 photo (2026-10-24)

Slide 2 (2:40) cover mind map rebuilt from deck/slides/s02.js to an 8-node ring carrying 23 marks:
17 organisation logos (not 7 as before), the Asian Paints hub logo, 2 photo cells and 3 drawn icons.
Omya was removed, since it is not named anywhere in the research document or research/raw/sources.md;
Arkema and Evonik were added in its place (research lines 1206, 1220, 1253, 1534, 1642). DGTR, CBIC
and the Ministry of Finance stay off the map as logos, since their marks carry the State Emblem of
India, restricted under the State Emblem of India (Prohibition of Improper Use) Act 2005; TRADE RULES
keeps a drawn ship icon instead.

Node ids (slide 2:40), from deck/fill_ids.json:

| Slot | Node id | Size | Source file |
|---|---|---|---|
| LOGO: Chemours | 147:5 | 100x31 | deck/logos/png/chemours.png, Commons File:Chemours.svg, public domain |
| IMG: TiO2 | 147:6 | 100x31 | deck/images/tio2_cell.jpg, Commons File:Titanium(IV)_oxide.jpg, public domain |
| LOGO: Tronox | 147:7 | 206x31 | deck/logos/png/tronox.png, Commons File:Tronox_logo.png, public domain |
| LOGO: Dow | 147:14 | 100x31 | deck/logos/png/dow.png, Commons File:Dow_Chemical_Company_logo.svg, public domain |
| LOGO: Arkema | 147:15 | 100x31 | deck/logos/png/arkema.png, Commons File:Logo_Arkema.svg, public domain |
| LOGO: Evonik | 147:16 | 100x31 | deck/logos/png/evonik.png, Commons File:Logo_Evonik_2020.svg, public domain |
| LOGO: Imerys | 147:17 | 100x31 | deck/logos/png/imerys.png, Commons File:Imerys_logo.png, CC BY-SA 4.0, Guillaume Imerys |
| LOGO: Berger | 147:24 | 64.7x31 | deck/logos/png/berger.png, Commons File:Berger_Paints_logo.png, public domain |
| LOGO: JSW | 147:25 | 64.7x31 | deck/logos/png/jsw.png, Commons File:JSW_Group_logo.svg, public domain |
| LOGO: Indigo | 147:26 | 64.7x31 | deck/logos/png/indigo.jpg, Commons File:Indigo-logo.jpg, CC BY-SA 4.0, Indigo Paints |
| LOGO: Kansai | 147:27 | 100x31 | deck/logos/png/kansai.png, Commons File:Kansai_Paint_Logo.svg, CC BY-SA 4.0, Kansai Paint Co. |
| LOGO: AkzoNobel | 147:28 | 100x31 | deck/logos/png/akzonobel.png, Commons File:AkzoNobel.svg, public domain |
| IMG: Beetle | 148:5 | 100x31 | deck/images/beetle_cell.jpg, Commons File:Cyphochilus_beetle_close_up.jpg, CC BY-SA 4.0, Andy Parnell |
| LOGO: Exeter | 148:6 | 100x31 | deck/logos/png/exeter.png, Commons File:Uni_Exeter.svg, public domain |
| LOGO: SciRep | 148:7 | 206x31 | deck/logos/png/scirep.png, Commons File:Scientific_Reports_logo_2023.svg, public domain |
| ICON: ship | 148:14 | 206x66 | deck/logos/png/icon_ship.svg, drawn by the team |
| ICON: roller | 148:21 | 206x66 | deck/logos/png/icon_roller.svg, drawn by the team |
| ICON: house | 148:28 | 206x66 | deck/logos/png/icon_house.svg, drawn by the team |
| LOGO: BIS | 148:35 | 64.7x31 | deck/logos/png/bis.png, Commons File:Bureau_of_Indian_Standards_Logo.svg, public domain |
| LOGO: CPCB | 148:36 | 64.7x31 | deck/logos/png/cpcb.png, Commons File:Logo_of_the_Central_Pollution_Control_Board.svg, public domain (PD-India) |
| LOGO: ISO | 148:37 | 64.7x31 | deck/logos/png/iso.png, Commons File:ISO_logo_red.svg, public domain |
| LOGO: ASTM | 148:38 | 206x31 | deck/logos/png/astm.png, Commons File:ASTM_International_logo.svg, public domain |
| LOGO: Asian Paints hub | 149:4 | 128x30 | deck/logos/asian_paints.png, Commons File:Asian_Paints_Logo.svg, public domain |

Slide 6 (13:8) mechanism-and-proof: the empty dashed Cyphochilus slot was replaced in
deck/slides/s06.js with a plain ink-bordered frame, filled live at node 151:4 (130x186) with
deck/images/beetle_portrait.jpg, cropped from the same Commons beetle photo used on the cover.

Deck-wide sweeps after the rebuild: v1_all.js clean (count 0), sweeps.js clean (fontLow, copy,
missing, presentBad all empty, moneyshot 1, every slide's template count 1), the empty-slot and
placeholder sweep returned count 0, both research-link hyperlinks resolve to
https://harshkawatra11.github.io/ap-alchemy/research.pdf, and the text-overflow check on slides 2
and 6 returned empty. One pre-existing font-floor gap was found and fixed outside the two rebuilt
slides: three 18pt text nodes in the slide 9 recap card (109:13, 109:15, 109:25) had never been
tagged SEC despite deck/slides/s09.js calling the sT helper that should tag them, likely because
slide 9 was last built live before that helper existed; renamed live to SEC, which satisfies the
18pt-floor exemption, and the deck-wide sweep was rerun clean afterward.

## Slide 6 (deck/shots/s6.png): 4/5 MECHANISM AND PROOF
Three-band slide as designed, ribbon correctly shows MECHANISM AND PROOF active (4/5). HOW IT WORKS
band carries the film-in-section diagram (seal/base/putty layers with numbered callouts) beside a
what-the-rutile-sees bear/base/bull grid and a "nature got here first" layered card with an empty
Cyphochilus-scale image slot (photos are a later build step) and the Burresi et al. 2014 quote. THE
PROOF band carries the hiding-power line chart, the purple layered MONEYSHOT card (39% LESS TiO2,
bear/base/bull case strip), the same-spectrum chart, and the against-the-targets table. HOW IT IS
MADE band carries the four-step process cards and the five-row lab-plan table. No empty region, ink
outlines and rails throughout.
