# Finding the Next Signal: Participant Brief (verbatim extraction)

Source file: 0e6fade1-28b1-4037-b9c7-9ece51c365eb.docx
SHA-1: a1eef77142013bf2e527699b94f10bb19f745c40
Lines: 116

---

FINDING THE NEXT SIGNAL
Autonomous Financial Research Hackathon
ATMOS 2026 · BITS Pilani, Hyderabad Campus · Participant Brief
Dear Participants,
Welcome to Finding the Next Signal at ATMOS 2026, and thank you for registering! This brief contains everything you need for the hackathon: the problem, what to build, what your system must produce, the tracks, a worked example, how to submit, how you will be judged and the rules.
Key Details at a Glance
The Challenge in Brief
Financial information is everywhere, but the important story is rarely contained in one document. A company’s filings, financial results, announcements, industry data, competitors, management commentary and news may each reveal only part of what is actually changing. Most AI finance tools stop at summarisation. This hackathon asks for something harder: autonomous discovery.
Build an autonomous financial research agent that, given any NIFTY 50 company from the track you choose, investigates public information on its own and uncovers a non-obvious, evidence-backed financial insight about that company. You will not be given a dataset or an answer: the public internet is your research environment.
This is not a one-company research report. You pick ONE sector track. At the finals, the judges give your agent a NIFTY 50 company from that track, so the same system, with no company-specific tuning, must work for every company in it.
“The evidence is public. Finding the story is the challenge.”
What to Build (and What Not To)
Not a finance chatbot → an autonomous research investigator.
Not a news summariser → a system that discovers hidden financial stories.
Not a report generator → a system that forms and tests hypotheses.
Not a database wrapper → a system that searches, connects and reasons across public evidence.
Not a single-source answer → a triangulated, auditable conclusion.
You are free to choose your own models, search/retrieval systems, agents and tooling. You will not be given a proprietary database, a pre-cleaned dataset, labelled answers or an investment thesis.
What Your System Must Do
Discover: decide what needs to be investigated and locate relevant public sources.
Connect: combine evidence across filings, financial statements, investor presentations, exchange announcements, competitors, industry data and credible news.
Calculate: derive useful relationships or changes rather than simply quoting numbers.
Reason: form a hypothesis about what the evidence means and why it matters.
Challenge: actively search for contradictory evidence and alternative explanations.
Prove: produce an auditable evidence trail for every major conclusion.
Typical flow: NIFTY 50 company from your track → decide which angles are worth investigating → find public sources → collect evidence → build a timeline → detect patterns and contradictions → form a hypothesis → gather supporting and opposing evidence → calculate → discovery → evidence trail → falsification condition.
Required Output
For each discovery, your system must produce:
The Discovery: one clear sentence describing the non-obvious finding.
Why It Matters: three to five bullets explaining the significance.
Evidence: multiple independent sources supporting the finding, with links.
Timeline: when the change emerged and how it developed.
Numbers: only the calculations and metrics needed to substantiate the finding.
Counterargument: the strongest alternative explanation or contradictory evidence.
Falsification Condition: what future evidence would make the system reconsider its conclusion.
Evidence Strength: Strong, Moderate or Weak, with the reasoning shown.
Every major claim must be traceable to the specific documents, figures, dates and passages behind it (for example: Finding → Annual Report → Quarterly Results → Exchange Filing → Industry Source → Competitor Evidence). Findings should not rest on a single article or document.
Output format: report or dashboard (your choice)
Your agent’s final output must be presented in ONE of these two formats:
Professional research report: a clean, well-structured report (PDF or web page), similar to an equity research note, with all eight elements above, charts or tables where useful, and clickable source links.
Interactive UI dashboard: a dashboard that shows the discovery, key numbers and charts, the timeline and the evidence trail, and lets a user click through from each claim to its source.
Either format is judged equally. What matters is that the discovery, the evidence and the reasoning are clear and easy to follow.
Choose Your Track
Pick ONE track and state it in your Round 1 report. While building, you are free to practise on and train your agent with the NIFTY 50 companies in your track. At the finals, the judges will give your agent a NIFTY 50 company from your track and watch it run live. If submissions from different teams are closely matched, the judges may also test your agent on any other listed company in the same sector, including ones outside the NIFTY 50, to see how ready it really is. So build it to work beyond the companies you practised on. The angles below are the kinds of questions a strong agent should ask about that company. They are guidance, not a checklist: your agent decides which ones apply, and it may uncover a story none of them cover.
Track A — Banking, NBFCs & Financial Services
Are its loan-book growth and its asset-quality story moving in different directions?
Does it have a non-obvious dependency on banks, co-lending partners or funders that is not visible from its own disclosures alone?
How has its funding mix or customer profile changed over the last five years, and when and why?
Track B — Energy, Power & Renewables
Has its revenue mix shifted towards (or away from) renewables earlier or further than its public narrative suggests?
Do its announced capacity additions differ materially from what it actually reports as commissioned?
Is there an important supplier, customer or financing relationship hidden inside its filings?
Track C — Consumer, FMCG & Retail
Is its reported growth driven by something different from what management emphasises (e.g. price vs volume, one channel vs another)?
Is a shift in distribution (quick commerce, modern trade, D2C or rural) showing up in its numbers before it shows up in the headlines?
Do its working-capital or receivable trends tell a different story from its revenue growth?
Track D — Pharma & Healthcare
Has its business model quietly changed (e.g. towards CDMO, specialty or domestic formulations), and when did it happen?
Has a regulatory or compliance development hit its financials in filings before mainstream coverage?
How has its geographic revenue exposure shifted over five years, and what drove it?
Worked Example: What a Strong Answer Looks Like
Here is the content a strong output should contain, whether you present it as a report or a dashboard. In Round 1 you only need to explain in your report how your system will produce this; at the finals it should produce it live, for any company in your track.
Round 1: What to Submit (by 19 October, 11:59 PM IST)
Solution report (required): a short PDF explaining how you will solve the problem. One page is appreciated; two pages maximum.
MVP (optional, appreciated): if you have already built a working version, also submit a GitHub repository link and a short demo video (up to 2 minutes) showing it running on a NIFTY 50 company from your track.
What your report should cover
Your idea and approach, and why it will produce non-obvious discoveries rather than summaries
Tools and stack: models, agent framework, search/retrieval, data sources and APIs
Workflow: how the agent goes from a NIFTY 50 company → deciding what to investigate → research plan → evidence → discovery
Your chosen track, and how the system works for every NIFTY 50 company in it without company-specific tuning
Triangulation and contradiction detection: how claims are cross-checked
Self-falsification: how the system looks for evidence against its own hypothesis
Output format: report or dashboard, and a rough sketch or description of how it will look
Build plan and milestones up to the finals on 25 October
File naming: TeamName_TrackX_Round1.pdf  ·  Submit at: Unstop
How Round 1 is judged
Clarity, feasibility and originality of the approach, how well it generalises across the NIFTY 50 companies in your track, and how well it handles discovery, triangulation, temporal reasoning and self-falsification. An MVP is not required to qualify, but a working system is a strong signal.
Finals: 25 October 2026 (Online)
Shortlisted teams will be announced on 23 October and must attend online to present to a panel of judges. By the finals, your whole system must be complete and ready to present.
Format: 10-minute presentation and live demo, followed by 15 minutes of Q&A.
Show: your complete, working agent running live on a NIFTY 50 company from your track, chosen by the judges on the spot, with its final output in your chosen format (report or dashboard): the discovery, full evidence trail, reasoning process, strongest counterargument and a falsification condition.
Tie-break: if teams are closely matched, the judges may run your agent on any listed company in your sector, including ones outside the NIFTY 50.
How You Will Be Judged (Finals)
Discovery quality: did the system uncover something genuinely non-obvious?
Evidence quality: are important claims supported by credible, traceable sources?
Novelty: would a conventional finance dashboard or simple summariser likely miss it?
Temporal reasoning: does the system understand when and how the story changed?
Cross-source reasoning: can it connect evidence across independent sources?
Falsifiability: does it identify counterarguments and conditions that could disprove the finding?
Explainability: can a human easily follow how the conclusion was reached from your report or dashboard?
Robustness: does the finding survive reasonable checks and alternative interpretations?
Generality & autonomy: does the same system work across different NIFTY 50 companies in your track (and, in a tie-break, other listed companies in the sector) without company-specific tuning or manual help?
We are NOT judging which foundation model you use, how many agents you use, how visually complex your interface is, how long your report is, or whether you give an investment recommendation. The focus is the quality of the discovery, the evidence behind it and the reasoning that produced it.
Ground Rules
Use publicly available information only. No paid or proprietary datasets unless they are publicly accessible.
Your system must work for any NIFTY 50 company in your chosen track, and should be able to handle other listed companies in the same sector. Hard-coding analysis or results for specific companies is not allowed.
Any models, frameworks, APIs and tools are allowed. We judge the quality of the discovery and reasoning, not which model you use.
Every major claim must link back to a source. Unsupported or invented claims will be penalised.
You do not need to give an investment recommendation, and you should not.
All work must be your team’s own. Plagiarised or copied submissions will be disqualified.
The organisers’ decision on shortlisting and results is final.
Questions?
For questions and all further communication, join our WhatsApp group. We look forward to seeing what your systems discover.
Best regards,
The Wall Street Club & The Economics Association
ATMOS 2026, BITS Pilani, Hyderabad Campus
Team size | Min - 1 – Max - 4 members per team
Eligibility | Open to all
Registration | On Unstop
Round 1 deadline | 19 October 2026, 11:59 PM IST (online)
Round 1 results | 23 October 2026
Finals | 25 October 2026 (online)
Prizes | Prize Pool of Rs. 40,000 with Pre-placement interviews to work with Vinit Bolinjkar for top teams!
Submission portal | Unstop
Contact | Join our WhatsApp group for all updates and further communication
Track & company: Track C. The judges give the agent Company X, a NIFTY 50 FMCG company. The agent tests several angles and finds the strongest story in what is really driving its growth.
The Discovery: Company X presents itself as a volume-led premium growth story, but over the last eight quarters nearly all of its revenue growth came from price increases, while underlying volumes declined in five of those quarters and distributor receivable days rose from 28 to 46.
Why it matters: Price-led growth is harder to sustain; falling volumes plus stretched receivables can signal channel stuffing or weakening demand; the market narrative may be pricing in growth the numbers do not show.
Evidence trail: Quarterly investor presentations (volume disclosures) → annual report notes on trade receivables → earnings-call transcripts (management commentary) → two competitors’ results for the same quarters → industry volume data.
Numbers: Revenue growth split into price vs volume for each quarter; receivable days computed from reported revenue and receivables.
Counterargument: Input-cost inflation forced price hikes across the whole industry, and competitors also show weak volumes, so this may be a sector story rather than a company-specific one.
Falsification condition: Two consecutive quarters of positive volume growth with receivable days returning below 30.
Evidence strength: Moderate: consistent across several primary sources, but partly explained by sector-wide conditions.
Company X and all figures above are fictional and for illustration only. We are showing the shape of a good answer, not a real finding.
