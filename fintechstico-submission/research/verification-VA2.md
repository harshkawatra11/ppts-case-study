# Verification VA-2 (F15 to F28, S08 to S19, parity cells in 6.2)

Checked 3 Oct 2026 by WebFetch and WebSearch. Counts: VERIFIED 11, CORRECTED 3, UNVERIFIABLE 0.

## Fact table

| ID | Status | Note |
|---|---|---|
| F15 | CORRECTED: reversal by 30 Sep confirmed; the 18% and "from the date of the claim" are not confirmed by S07 | S07 says: "it is unclear whether interest will be charged per section 50(1) at 18% or per section 50(3) at 24%". Secondary sources (TaxGuru, Tally S14) say 18% from date of availing (S14: "from the utilization date"), payable only if the credit was utilised. Suggested wording: "interest at 18% a year (s.50(1) reading) from the date the credit was utilised". https://cleartax.in/s/rule-37-of-cgst-sgst-rules-itc-reversal-180-days |
| F16 | VERIFIED | SCC: "GST now revolves around two core rates, 5% and 18%, replacing the older 12% and 28% slabs", plus 40%; effective 22 Sep 2025. The page prints the meeting as "September 3-9, 2025"; the 3 Sep date is not isolated on the page. https://www.scconline.com/blog/post/2025/09/04/gst-council-56th-meeting-slab-reforms-tribunal-rollouts-2025/ |
| F17 | VERIFIED | "The Rs. 5 crore threshold has been in force since 1 August 2023 and remains the current applicable limit." https://www.taxaj.com/learn/?p=358 |
| F18 | VERIFIED | "Businesses with an AATO of Rs. 10 crore and above must report invoices to the IRP within 30 days of the invoice date." Page also says IRN cannot be generated after the window. https://www.taxaj.com/learn/?p=358 |
| F19 | VERIFIED | "a total of 13,14,362 GSTINs now enabled for e-Invoicing as of 15th October 2025". https://blog.instafinancials.com/2025/10/23/e-invoicing-updates-october-2025/ |
| F20 | VERIFIED | "29,273 bogus firms involved in suspected ITC evasion of Rs. 44,015 crore have been detected." 121 arrests confirmed. Page frames the period as "since May 2023" with the Dec 2023 quarter as the latest; "May to Dec 2023" is consistent. https://www.taxheal.com/?p=95176 |
| F21 | CORRECTED: figures confirmed, but not on the cited page, and the year labels are doubtful | The Deloitte press page S12 does not carry 64% or 37%. Search results from Deccan Herald and Businessworld report: "matching concept challenges of MSMEs were at 64% in 2023 and have now decreased to 37 per cent", from the GST@8 survey. The "2024" label is not confirmed; the 37% belongs to the latest (GST@8) survey edition. Use the news URL as source or the label "latest survey". https://www.deccanherald.com/amp/story/business/refund-delays-itc-disputes-among-key-industry-concerns-in-gst-shows-deloitte-survey-4049939 (returned 403 to WebFetch; figures seen in search snippets only) |
| F22 | VERIFIED | Tally's own page: Silver "₹22,500 + 18% GST, one-time"; Gold "₹67,500 + 18% GST, one-time"; rental Silver ₹750/month, Gold ₹2,250/month. Prices are before GST. https://tallysolutions.com/business-guides/tallyprime-total-cost-of-ownership-india/ |
| F23 | VERIFIED | Zoho Books India pricing page, billed monthly, exclusive of taxes: Standard ₹899, Professional ₹1,799, Premium ₹3,599 (annual billing is lower: ₹749, ₹1,499, ₹2,999 a month). https://www.zoho.com/in/books/pricing/ |
| F24 | CORRECTED: ₹10,000 a year (listed at ₹20,000), plus GST, on the vendor's current page | suvit.io now redirects (308) to Vyapar TaxOne. Pricing page: "Unlimited Plan", original ₹20,000 a year, current ₹10,000 a year (50% discount), GST extra. The ₹12,000 figure was not found. The plan's section 11 price basis and the TAM, SAM, SOM arithmetic cite Suvit at ₹12,000 and need a decision. https://taxone.vyapar.com/pricing |
| F25 | VERIFIED | Careers360 URL (S17) now returns 404. Same figures on taxconcept.net: 4,07,629 members and 98,967 registered firms as of 28 Feb 2025. Replace the source URL. https://taxconcept.net/icai/statistics-of-icai-members-students-firms-till-28th-february-2025/ |
| F26 | VERIFIED | RBI release: outstanding rupee loans WALR 8.97%; fresh rupee loans 8.52%, "declined marginally to 8.52 per cent in July 2026 from 8.53 per cent in June 2026". https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=63481 |
| F27 | VERIFIED | "E-way bill generation increased 7.7 per cent year-on-year to 139.08 million in August 2026"; March 2026 at 140.60 million is the record. https://a2ztaxcorp.net/e-way-bill-generation-rises-7-7-per-cent-to-139-08-million-in-august-2026/ |
| F28 | VERIFIED | S14 lists GSTR-1 due the 11th, GSTR-2B generated the 14th, GSTR-3B due the 20th of the following month. https://tallysolutions.com/gst/gstr-2b-reconciliation-mismatches-how-to-fix/ |

## Parity table

Counts: CONFIRMED 6, CHANGE TO 1, NO EVIDENCE 21 (28 cells). Marks are for the vendor's own pages only. The GST portal pages (services.gst.gov.in, gst.gov.in) returned empty shells or a binary PDF, so every portal cell is NO EVIDENCE here. The IMS accept, reject, pending behaviour is described only by secondary sources (VJM, TaxGuru). "Sheet with a CA" has no vendor page by nature.

| Feature | Option | Mark | Note |
|---|---|---|---|
| Matches invoice to return | Portal with IMS | NO EVIDENCE | Official pages did not render. Secondary sources: IMS lets the recipient accept, reject or keep pending supplier invoices, feeding 2B and 3B. |
| Three-way match with bank and ledger | Portal with IMS | NO EVIDENCE | No portal page readable. |
| Verifies rate by HSN and date | Portal with IMS | NO EVIDENCE | No portal page readable. |
| Finds duplicates and near duplicates | Portal with IMS | NO EVIDENCE | No portal page readable. |
| Flags anomalies with reasons | Portal with IMS | NO EVIDENCE | No portal page readable. |
| Prices each exception in rupees | Portal with IMS | NO EVIDENCE | No portal page readable. |
| Ranks by deadline and names an owner | Portal with IMS | NO EVIDENCE | No portal page readable. |
| Matches invoice to return | TallyPrime | CONFIRMED (Yes) | Tally: "one-click reconciliation that fetches GSTR-2B, GSTR-1 and GSTR-3B data automatically, highlights ITC at risk". https://tallysolutions.com/gst/gstr-2b-reconciliation-mismatches-how-to-fix/ |
| Three-way match with bank and ledger | TallyPrime | CONFIRMED (Partial), low confidence | Tally GST hub page lists reconciliation with books and bank reconciliation as features; wording came through a page summary, not a verbatim line. The GSTR-2B guide itself shows only books against portal. https://tallysolutions.com/tallyprime/gst/ |
| Verifies rate by HSN and date | TallyPrime | CONFIRMED (Partial), low confidence | Hub page summary lists "tax rate and HSN code validation"; S14 names "incorrect tax rate applications" as a mismatch cause. No date-dependent rate check stated. https://tallysolutions.com/tallyprime/gst/ |
| Finds duplicates and near duplicates | TallyPrime | CONFIRMED (Partial), low confidence | Hub page summary lists duplicate detection. The GSTR-2B guide does not mention it. https://tallysolutions.com/tallyprime/gst/ |
| Flags anomalies with reasons | TallyPrime | NO EVIDENCE | Conflict: hub page summary mentions "anomaly identification"; the 2B guide does not. Needs a manual look before the cell stays No. |
| Prices each exception in rupees | TallyPrime | CHANGE TO Partial | S14: "highlights ITC at risk". This is a rupee flag, not a per-exception price with probability and interest. Main agent decides between Partial and No. https://tallysolutions.com/gst/gstr-2b-reconciliation-mismatches-how-to-fix/ |
| Ranks by deadline and names an owner | TallyPrime | NO EVIDENCE | Statuses are Fully matched, Partially matched, only in books, only on portal. No ranking or owner stated. https://tallysolutions.com/gst/complete-guide-on-gstr-2b/ |
| Matches invoice to return | Compliance SaaS | CONFIRMED (Yes) | ClearTax docs: "Exact Match ... invoice number, invoice date, taxable value, tax value ... exactly match between the PR and GSTR-2B"; Zoho: matched and partially matched against GSTR-2B. https://docs.cleartax.in/product-help-and-support/clear-finance-cloud/gst-compliance/gstr-2b-vs-pr-recon |
| Three-way match with bank and ledger | Compliance SaaS | NO EVIDENCE | ClearTax and Zoho pages show purchase register against 2B only. Vyapar TaxOne turns bank data into ledgers but is not described as a three-way match to the return. |
| Verifies rate by HSN and date | Compliance SaaS | NO EVIDENCE | ClearTax page lists no rate or HSN check. Vyapar TaxOne says "30+ validations" without naming them. |
| Finds duplicates and near duplicates | Compliance SaaS | CONFIRMED (Partial) | Vyapar TaxOne (Suvit): "detects duplicate entries and performs comprehensive invoice reconciliation". ClearTax page does not list it. https://taxone.vyapar.com/ |
| Flags anomalies with reasons | Compliance SaaS | NO EVIDENCE | ClearTax shows AI suggested matches and Vyapar shows "mismatch alerts"; neither states anomaly flags with reasons. |
| Prices each exception in rupees | Compliance SaaS | NO EVIDENCE | ClearTax offers Claim, Pending, Reversed, Ineligible actions per document; no pricing shown. |
| Ranks by deadline and names an owner | Compliance SaaS | NO EVIDENCE | ClearTax can email results to vendors; no ranking by deadline or owner assignment shown. |
| Matches invoice to return | Sheet with a CA | NO EVIDENCE | No vendor page exists. |
| Three-way match with bank and ledger | Sheet with a CA | NO EVIDENCE | No vendor page exists. |
| Verifies rate by HSN and date | Sheet with a CA | NO EVIDENCE | No vendor page exists. |
| Finds duplicates and near duplicates | Sheet with a CA | NO EVIDENCE | No vendor page exists. |
| Flags anomalies with reasons | Sheet with a CA | NO EVIDENCE | No vendor page exists. |
| Prices each exception in rupees | Sheet with a CA | NO EVIDENCE | No vendor page exists. |
| Ranks by deadline and names an owner | Sheet with a CA | NO EVIDENCE | No vendor page exists. |
