# Extract handwritten names from `papa/` images into an Excel sheet

## Context

The `papa/` folder (project root) contains two photographed ledger pages
(`WhatsApp Image 2026-10-08 at 20.21.57.jpeg` = page 2, and
`...20.21.572.jpeg` = page 1). Each page is a printed "Sundry Debtors"
account list with handwritten names penned in next to (or above) the
printed account/customer labels — these are updated/real contact names
the user needs collected into a simple reference spreadsheet. Printed
text (the account labels, headers, "Acc" column, balances) must be
excluded entirely; only the pen-written names count.

Page 1 (`...572.jpeg`) also has an unrelated handwritten scratch list in
the top margin, above the table — confirmed by the user to be included.

Both images have already been visually reviewed. Handwriting is dense,
cursive, and in places ambiguous (crossed-out words, overlapping names,
slashes separating multiple names on one line) — transcription requires
care token-by-token, not a blind OCR pass.

## Approach

1. Re-examine both images closely (already read once; re-crop/zoom
   mentally per row while transcribing) and produce one clean, ordered
   list of handwritten names only, reading page 1 top-to-bottom then
   page 2 top-to-bottom. Where a single line has multiple names
   separated by `/`, split into separate list entries. Skip crossed-out
   words. Do not include any printed account/customer label text.
2. Write a small Python script (using `openpyxl`, installed on demand
   via pip if missing) to build the output workbook:
   - Sheet with header row: `S.No.` | `Name`
   - One row per extracted handwritten name, serial numbers 1..N
   - Bold header, reasonable column widths
3. Save the workbook to `papa/handwritten_names.xlsx`.
4. Open/verify the generated file's row count matches the transcribed
   list (quick read-back with openpyxl or pandas) before declaring done.

## Files

- New script: `papa/build_names_xlsx.py` (one-off, builds the xlsx from
  a hardcoded Python list of transcribed names — simplest reliable path
  given this is a one-time extraction, not a reusable pipeline)
- Output: `papa/handwritten_names.xlsx`

## Verification

- Re-open `papa/handwritten_names.xlsx` with openpyxl/pandas and print
  the row count + first/last few rows to confirm structure (S.No., Name
  columns) and that no printed labels leaked in.
- Spot-check count against manual tally of names identified in the two
  images.
