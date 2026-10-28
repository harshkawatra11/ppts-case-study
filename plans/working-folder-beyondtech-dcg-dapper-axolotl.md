# BeyondTech x DCG: add the research-drive link to the Thank You slide

## 0. Context

The user has made manual changes directly in Figma to several slides, including the Thank You slide
(node `2:13`, "11 Thank You"). **None of those manual changes are to be touched, reordered, resized, or
restyled in any way.** On the Thank You slide specifically, the user has manually added one sentence:

> "The curated research document and raw model and college csv files available at : " (node `31:42`,
> Inter Bold 22pt, navy, at x 260, y 880, w 1400, h 30)

The user wants a hyperlink to the team's Google Drive research folder attached to this line, presented
in a structured, consulting-grade way, not as a raw pasted URL. The link is:

```
https://drive.google.com/drive/folders/1z8IK_tgxky51ULbxnEtGo3baNUk1lp6u?usp=sharing
```

## 1. Current state of the slide (read-only inspection, confirmed)

Full child dump of `2:13` taken this session (20 children). The relevant facts:

- Content area below the team table is empty from about y=910 (bottom of the user's sentence) down to
  y=1011 (the ink rule above the source line) — a clear 101px band, full width, nothing else occupies it.
- The sentence `31:42` sits horizontally centered (x 260 to x 1660, centre x=960), matching the centre
  of the team table (x 410 to x 1510, centre x=960) and the THANK YOU title above it.
- Everything else on the slide (the two manual header chips, the four manually placed logo-image
  rectangles, the team table, the title, the source line, the top rule and the five punch-hole dots) is
  untouched by this plan. No existing node is edited, moved, resized, recoloured, or deleted.

## 2. What gets added (new nodes only, appended directly to slide `2:13`)

Two things, both strictly additive:

1. **The hyperlink is attached to the existing sentence itself** (`31:42`), by setting its `hyperlink`
   property to the drive URL. This changes no text, no font, no colour, no position — only adds
   click-through metadata, satisfying "a hyperlink has to be attached with that text" literally. Wrapped
   in try/catch exactly as this project's own dashPattern/arcData calls already are (CLAUDE.md pattern
   for optional Plugin API properties), so a failure here never blocks the rest of the script.
2. **A new structured link button**, centred in the empty band below the sentence, built with this
   deck's own layered-sticker-card motif (the same two-layer back+front pattern already visible on this
   very slide in the "BEYONDTECH X DTU CONSULTING GROUP" and "TEAM IDEAFORGE" chips the user placed
   manually) so it reads as native to the deck, not bolted on:
   - Back rect: x 737, y 939, w 460, h 56, fill gold `#FFC72C` (`{r:1,g:0.78,b:0.173}`), ink stroke 2.5px.
   - Front frame: x 730, y 932, w 460, h 56, fill navy `#0B1F4D` (`{r:0.043,g:0.122,b:0.302}`), ink
     stroke 2px, name `CARD: research link`.
   - Text inside, centred both axes: "OPEN THE RESEARCH DRIVE", Poppins Bold 24pt, white. Measured
     against this deck's real calibrated glyph metrics (`deck/metrics.json`): 327px wide inside a 460px
     box, comfortable margin, no wrap risk.
   - The `hyperlink` property is set on both the front frame and the text node (frame for the larger
     clickable area in the exported PDF, text as the redundant, well-supported fallback), both wrapped
     in try/catch.
   - Geometry check: back rect bottom = 939+56 = 995; the ink rule sits at y=1011, so there is a clean
     16px margin below the button and nothing is touching the rule. Top of the button (932) sits 22px
     below the sentence's bottom (910).

No other node is created. No font other than the already-loaded Poppins Bold and Inter Bold is needed
(Inter Bold is already loaded by virtue of being used elsewhere on this slide, but the script loads
Poppins Bold explicitly to be safe, per the canonical text-edit recipe).

## 3. Idempotency (safe to rerun)

Before creating anything, the script looks for a node already named `CARD: research link` or
`BACK: research link` as a direct child of `2:13` and removes only those two nodes if present, so a
rerun (for example if a previous attempt partially failed) never produces duplicates and never touches
anything else.

## 4. Exact script (step R1, the only Figma write this plan makes)

```js
await figma.loadFontAsync({family:"Poppins",style:"Bold"});
const s = await figma.getNodeByIdAsync("2:13");
// idempotent cleanup: remove only a prior attempt of this exact addition, nothing else
s.children.filter(c => c.name === "CARD: research link" || c.name === "BACK: research link").forEach(c => c.remove());
const URL = "https://drive.google.com/drive/folders/1z8IK_tgxky51ULbxnEtGo3baNUk1lp6u?usp=sharing";
// 1. attach the hyperlink to the user's own existing sentence, no visual change
const sentence = await figma.getNodeByIdAsync("31:42");
try { sentence.hyperlink = { type: "URL", value: URL }; } catch (e) {}
// 2. a new structured link button in the deck's own layered-chip motif, in the empty band below it
const back = figma.createRectangle(); s.appendChild(back); back.resize(460,56);
back.fills = [{type:"SOLID",color:{r:1,g:0.78,b:0.173}}]; back.strokes=[{type:"SOLID",color:{r:0.039,g:0.039,b:0.039}}];
back.strokeWeight = 2.5; back.cornerRadius = 0; back.x = 737; back.y = 939; back.name = "BACK: research link";
const front = figma.createFrame(); s.appendChild(front); front.resize(460,56);
front.fills = [{type:"SOLID",color:{r:0.043,g:0.122,b:0.302}}]; front.strokes=[{type:"SOLID",color:{r:0.039,g:0.039,b:0.039}}];
front.strokeWeight = 2; front.cornerRadius = 0; front.x = 730; front.y = 932; front.name = "CARD: research link";
try { front.hyperlink = { type: "URL", value: URL }; } catch (e) {}
const label = figma.createText(); front.appendChild(label);
label.fontName = {family:"Poppins",style:"Bold"}; label.fontSize = 24; label.characters = "OPEN THE RESEARCH DRIVE";
label.fills = [{type:"SOLID",color:{r:1,g:1,b:1}}];
label.resize(440,56); label.textAutoResize = "NONE"; label.textAlignHorizontal = "CENTER"; label.textAlignVertical = "CENTER";
label.x = 10; label.y = 0;
try { label.hyperlink = { type: "URL", value: URL }; } catch (e) {}
return { slide: s.id, childrenNow: s.children.length, buttonBounds: {x:front.x,y:front.y,w:front.width,h:front.height} };
```

Expected return: `childrenNow: 22` (20 existing plus the two new nodes), `buttonBounds` matching
`{x:730,y:932,w:460,h:56}`.

## 5. Verification (step R2, read-only)

1. Re-dump the full child tree of `2:13` the same way as the pre-edit inspection in this session, and
   confirm every one of the original 20 children is present with identical `x`, `y`, `w`, `h`, `chars`
   and `fills` as the dump already captured above — proving nothing manual was altered.
2. Confirm exactly 2 new children exist, named `BACK: research link` and `CARD: research link`.
3. `get_screenshot` of node `2:13` at `maxDimension: 1920`, download and view it. Confirm: the sentence
   reads identically to before: the new gold/navy button sits centred below it with clear margins above
   and below; nothing overlaps the ink rule or the source line; nothing overlaps the team table.
4. There is no way to verify a Plugin-API `hyperlink` assignment by screenshot (Figma does not render a
   visual affordance for it by default). Report to the user that the link is attached at the Plugin API
   level on both the sentence and the new button, and that they should confirm it is clickable by
   opening the slide in Figma (hover shows a link cursor) or by exporting to PDF and testing the link
   there, since that is the only way to see it fire.

## 6. Non-goals, explicitly

- No other slide is touched.
- No existing node on slide `2:13` is edited, moved, resized, or recoloured.
- No rebuild, no `wipe()`, no `gen.py` pipeline involvement — this is a direct, surgical `use_figma`
  edit outside the deck's generator entirely, because the generator's slide scripts always wipe and
  fully rebuild a slide, which would destroy the user's manual work.
- No change to `deck/slides/s11.js` or any build file; this edit exists only live in Figma. (If the
  user later asks for the deck's source-of-truth files to reflect this, that is a separate future ask,
  not part of this plan.)

## 7. Report back to the user (step R3)

Confirm: the sentence itself now carries the drive hyperlink; a new "OPEN THE RESEARCH DRIVE" button in
the deck's own gold/navy layered-chip style sits centred in the previously empty space below it; every
other element on the slide, including all manually placed logos and chips, is pixel-identical to before.
Note the PDF-export caveat from section 5, item 4.
