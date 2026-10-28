# R-C: Technology and where it is weak (Lane C raw verification)

Access date: 2026-10-05 for every row. Verifier V-C, per PLAN.md section 6, Lane C.
Snippets are verbatim from the fetched page or search result; where a fetch returned only a summary, the quoted phrase is the one the tool reported.

## C1. Accuracy of document AI on handwritten and Indian-language forms

| R-ID | Fact (exact figure and date) | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |
|---|---|---|---|---|---|---|---|
| R-C1-01 | Sarvam Vision 2.1 overall accuracy 87.39 on the Sarvam Indic OCR Bench (6,909 samples: 6,609 in 22 Indian languages, 300 English), blog dated 24 September 2026 [vendor] | Sarvam Vision 2.1: Pushing the Pareto frontier of document intelligence | Sarvam AI | https://www.sarvam.ai/blogs/sarvam-vision-2-1 | 2026-10-05 | "Overall accuracy ↑ 87.39" | VERIFIED |
| R-C1-02 | IndicPage-OCR (handwritten pages in Bengali, Hindi, Tamil, Telugu): free OCR baseline WER 0.5000 and CER 0.2574; commercial OCR reference WER 0.0863 and CER 0.0168; accepted at DAS 2026. Figures taken from the project page; the paper PDF could not be read | IndicPage-OCR project page | CVIT, IIIT Hyderabad (Bhattacharyya, Mondal, Jawahar) | https://indicpageocr.github.io/ | 2026-10-05 | "Commercial OCR reference: 0.0863 WER, 0.0168 CER" | VERIFIED |
| R-C1-03 | Sarvam Vision 2.1 handwritten recognition accuracy is not stated as a number on the blog; the blog shows only video demonstrations of Indic handwritten recognition and extraction. Date of blog 24 September 2026 [vendor] | Sarvam Vision 2.1: Pushing the Pareto frontier of document intelligence | Sarvam AI | https://www.sarvam.ai/blogs/sarvam-vision-2-1 | 2026-10-05 | "3. Indic Handwritten Recognition" (video title; no accuracy figure in text) | UNVERIFIABLE |

## C2. Human-in-the-loop and straight-through processing rates in BFSI

| R-ID | Fact (exact figure and date) | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |
|---|---|---|---|---|---|---|---|
| R-C2-01 | Straight-through processing rates reported as roughly 26% (hard international transaction sets) to 67% (best-in-class), undated [vendor] | Straight Through Process: The Ultimate 2026 Guide | DigiParser (vendor blog) | https://www.digiparser.com/blog/straight-through-process | 2026-10-05 | "Most organizations land between roughly 26% straight-through ... and 67% for best-in-class implementations." (search summary; page not opened) | UNVERIFIABLE |
| R-C2-02 | A leading bank in India reported at 85% straight-through processing after AI document processing, scaling from 9,000 documents to hundreds of thousands a month; undated [vendor] | Case Study: a leading bank achieves 300% faster loan processing with KlearStack | KlearStack (vendor case study) | https://www.casestudies.com/company/klearstack/case-study/klearstack-decreased-loan-processing-time-by-300-for-a-leading-bank | 2026-10-05 | "The bank achieved 85% straight-through processing" (search summary; page not opened) | UNVERIFIABLE |
| R-C2-03 | S&P Global research (11 September 2026) reports a 80% reduction in time to review and extract loan document information under a human-in-the-loop model | AI in lending operations: delivering faster, more accurate outcomes | S&P Global Market Intelligence | https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/09/ai-in-lending-operations-delivering-faster-more-accurate-outcomes | 2026-10-05 | "human-in-the-loop model saw a reduction of 80%" (search summary; page returned HTTP 403) | UNVERIFIABLE |

## C3. Per-page or per-document pricing of commercial document AI

| R-ID | Fact (exact figure and date) | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |
|---|---|---|---|---|---|---|---|
| R-C3-01 | Amazon Textract Detect Document Text: $1.50 per 1,000 pages in the first tier (US West, Oregon); page shows no last-updated date | Amazon Textract Pricing | Amazon Web Services | https://aws.amazon.com/textract/pricing/ | 2026-10-05 | "$0.0015" per page (Detect Document Text) | VERIFIED |
| R-C3-02 | Amazon Textract Analyze Document, first tier (US West, Oregon): Forms $50 per 1,000 pages; Tables $15; Queries $15; Forms, Tables and Queries combined $70 per 1,000 pages | Amazon Textract Pricing | Amazon Web Services | https://aws.amazon.com/textract/pricing/ | 2026-10-05 | "$0.070" per page (Forms, Tables, and Queries combined) | VERIFIED |
| R-C3-03 | Google Document AI Form Parser: $30 per 1,000 pages for the first 1 to 1,000,000 pages a month, $20 per 1,000 beyond that (secondary source only; Google's own page did not render) | Document AI pricing | Google Cloud | https://cloud.google.com/document-ai/pricing | 2026-10-05 | "$30 per 1,000 pages for the first 1-1,000,000 pages per month" (search summary) | UNVERIFIABLE |

## C4. Speech recognition error rates in Indian languages

| R-ID | Fact (exact figure and date) | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |
|---|---|---|---|---|---|---|---|
| R-C4-01 | Sarvam Saaras V3 word error rate 19.31% on the IndicVoices benchmark, 10 most spoken Indian languages; blog dated 10 February 2026 [vendor] | Sarvam ASR blog (Saaras V3) | Sarvam AI | https://www.sarvam.ai/blogs/asr | 2026-10-05 | "Saaras V3 achieves a word error rate of 19.31 percent" | VERIFIED |
| R-C4-02 | Sarvam Saaras V2.5 about 22% word error rate on IndicVoices, June 2025 [vendor] | Sarvam ASR blog (Saaras V3) | Sarvam AI | https://www.sarvam.ai/blogs/asr | 2026-10-05 | "achieved ~22% Word Error Rate (WER) on the IndicVoices benchmark" | VERIFIED |
| R-C4-03 | Gnani Vachana STT: claimed 30 to 40% lower WER on low-resource Indic languages and 10 to 20% lower WER on the top eight; blog dated 19 December 2025 claims under 4% WER across 12 languages. No independent benchmark found [vendor] | Gnani.ai launches Vachana STT, a Foundational Indic Speech to Text Model Trained on 1M Hours | Gnani.ai | https://www.gnani.ai/resources/blogs/gnani-ai-launches-vachana-stt-a-foundational-indic-speech-to-text-model-trained-on-one-million-hours-under-the-indiaai-mission | 2026-10-05 | "Vachana STT delivers 30-40% lower word error rates" (search summary; page not opened) | UNVERIFIABLE |
| R-C4-04 | IndicVoices: 7,348 hours of speech from 16,237 speakers across 22 languages and 145 districts; 1,639 hours transcribed; submitted to arXiv 4 March 2024 | IndicVoices: Towards building an Inclusive Multilingual Speech Dataset for Indian Languages | AI4Bharat (arXiv 2403.01926; ACL 2024) | https://arxiv.org/abs/2403.01926 | 2026-10-05 | "7348 hours of read (9%), extempore (74%) and conversational (17%) audio from 16237 speakers" | VERIFIED |
| R-C4-05 | The Bhashini project reportedly contributed $5 to $6 million to AI4Bharat for IndicVoices data collection; article dated 7 March 2024 (press report, not an official release) | Inc42 article on IndicVoices (7,348 hours, 22 languages) | Inc42 (reputable press) | https://inc42.com/?p=446830 | 2026-10-05 | "The state-backed Bhashini project has reportedly contributed $5-$6 Mn to AI4Bharat" | VERIFIED |

## C5. Why voice AI needs human-labelled data

| R-ID | Fact (exact figure and date) | Source title | Publisher | URL | Date accessed | Verbatim snippet (max 25 words) | Status |
|---|---|---|---|---|---|---|---|
| R-C5-01 | IndicVoices collected with standardised protocols, quality control mechanisms, comprehensive transcription guidelines and transcription tools; 1,639 of 7,348 hours transcribed by the paper's date (March 2024) | IndicVoices: Towards building an Inclusive Multilingual Speech Dataset for Indian Languages | AI4Bharat (arXiv 2403.01926) | https://arxiv.org/abs/2403.01926 | 2026-10-05 | "quality control mechanisms, comprehensive transcription guidelines and transcription tools" | VERIFIED |

## Gaps

- C1: Sarvam Vision 2.1 gives no numeric handwritten accuracy on its blog. The IIIT IndicPage-OCR PDF could not be read by WebFetch, so its figures rest on the authors' project page only. No independent handwritten Indic benchmark was found.
- C2: No regulator, industry body or bank-published straight-through processing benchmark for BFSI was found. The only figures are vendor blogs and vendor case studies, opened from search summaries. The S&P Global page returned HTTP 403.
- C3: Google's Document AI pricing page rendered truncated, so the $30 Form Parser price is unconfirmed. Google Form Parser handwriting support was not found. Textract handwriting support (English only, per a secondary blog) was not verified on AWS's own pages.
- C4: No independent word error rate for Indian-language speech was found. Saaras and Gnani figures are vendor claims. The arXiv Saaras and Gnani sources were not read in full.
- C4: The Lido and LDCIL pages returned HTTP 500 and 404 errors, so the LDCIL speech annotation page was not read.
- C5: No independent source states why voice AI needs human-labelled data beyond the IndicVoices guidelines. The Josh Talks claim is vendor marketing. The Bhashini funding figure is press-reported; no official Bhashini release was found.
- Seeds not verified in full: the NASSCOM and Economic Survey style sources are outside Lane C and were not checked here.
