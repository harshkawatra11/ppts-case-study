# Next Signal video delivery

Final file: `renders/Next-Signal-Final.mp4`.

- 1920 x 1080, 30 fps, 108 seconds.
- Harsh's eight recorded narration takes, with measured loudness matching and original recordings preserved.
- Original white / black / red editorial design; no subtitles or background music.
- Team credits: Harsh Kawatra and Gursimran Kaur, Team IdeaForge.
- Six stage card entrances follow word timestamps from the supplied narration.
- Actual product recordings and actual browser captures; the weak result remains visibly weak.
- Evidence drawer, competing hypotheses, export panel and the actual five-page PDF export are shown.

The project remains editable in HyperFrames. Start with `npm run dev`; render with `npm run render`.
The source export reproduces the final edit. `qa/deliver.py` is a one-off finishing pass for the
initial render, replacing the evidence shot with its corrected browser framing.

Verification records: `qa/check-final.log`, `qa/check-evidence.log`, `qa/final-probe.json`,
`qa/final-audio.json`, and `qa/final-contact.jpg`. The final render is decoded end to end with FFmpeg.

Scene timing:

| Scene | In | Out |
| --- | ---: | ---: |
| Title / thesis | 0.0 | 15.4 |
| Company entry | 15.4 | 21.6 |
| Six-stage method | 21.6 | 35.6 |
| Live analysis | 35.6 | 54.6 |
| Discovery and strength | 54.6 | 71.9 |
| Evidence and challenge | 71.9 | 84.3 |
| Export / PDF | 84.3 | 97.5 |
| Closing | 97.5 | 108.0 |
