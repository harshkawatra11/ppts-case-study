# ArchDecision

### Why your codebase is the way it is

---

## In one sentence

You paste a GitHub repository link into a box, and within about a minute you have the reasoning behind that codebase laid out in plain English: the decisions it encodes, the evidence behind each one, a chat you can question it through, a document to hand a new engineer on their first morning, and a map of where the code has quietly drifted from its own architecture.

---

## The problem

Every codebase of any real size is a graveyard of decisions nobody wrote down.

Someone chose PostgreSQL over MySQL. Someone decided sessions live in Redis instead of the database. Someone picked a monolith over microservices, or REST over GraphQL, or a specific authentication pattern over three other options that were on the table. At the time, all of that reasoning existed somewhere: in a conversation, in someone's head, in a comparison spreadsheet, in a Slack thread that scrolled away.

None of it survives in the code. The code just shows the outcome. It shows that `pg` is a dependency, not why Postgres won. It shows that `connect-redis` is installed, not what alternative was rejected and why.

This is not a small inconvenience. Architecture Decision Records, usually shortened to ADRs, are the industry's own answer to this problem, and they have existed as a documented best practice for years. Teams know they should write them. Almost nobody does, because writing a good ADR by hand takes real time, the payoff is delayed and diffuse, and the person best placed to write it is usually the person under the most deadline pressure to just ship the thing.

The cost of skipping this shows up later, and it shows up everywhere:

A new engineer joins a team and spends their first two or three weeks not writing code, but reverse-engineering intent. They read files, guess at reasoning, ask around, and slowly reconstruct a mental model that could have been handed to them on day one if anyone had written it down.

A senior engineer becomes the team's living documentation. Every few days someone taps them on the shoulder to ask "why do we do it this way," and they answer the same question for the fifth time this quarter, because the answer lives only in their memory.

A team repeats a mistake it already made and already fixed, because the person who learned that lesson left eighteen months ago and took the lesson with them.

A pull request quietly breaks an architectural assumption nobody documented, so nobody catches it, because there was nothing written down to check it against.

The information a new engineer, a reviewer, or a returning maintainer actually needs was never lost. It was just never captured anywhere durable. The one artifact that survives every reorg, every departure, every forgotten Slack workspace, is the code itself. ArchDecision reads that artifact and recovers the reasoning from it directly, rather than depending on anyone to have written it down.

---

## Who this is for

The premise here rests on a simple bet: the number of people who join a codebase they did not write, and need to understand it quickly, is enormous and growing. India alone is home to more than 6 million developers and engineers, a number that continues to climb every year as the country's technology sector expands, and that population sits inside a global developer community numbering in the tens of millions worldwide. Every one of them, at some point, opens a repository that is new to them and has to answer the same question: why does this codebase look the way it does.

A few groups feel this most sharply:

**The engineer being onboarded.** Someone who just joined a team, a new open-source contributor, or a developer picking up a legacy project inherited from someone who has since moved on. They need orientation fast, and they need it to be accurate, not a generic tutorial that has nothing to do with the actual code in front of them.

**The senior engineer who keeps getting interrupted.** The person who already holds the context in their head and would rather spend their time building than repeating the same explanation in Slack for the third time this month.

**The maintainer of an open-source project.** Someone trying to lower the barrier for new contributors without spending their own limited time writing documentation that will go stale within a few releases anyway.

**The reviewer.** Someone checking whether a pull request quietly violates a decision the team already made, without having to hold the entire project's history in their head while reading a diff.

**The student or self-taught developer.** Someone learning by reading real, production codebases rather than toy examples, who benefits from having the reasoning behind a mature project's structure explained rather than left as an exercise.

**The evaluator.** A recruiter, a hiring manager, or a technical lead sizing up a codebase from the outside, in minutes, without needing a guided tour from someone who already works there.

---

## The core idea

The starting principle is simple and it shapes every part of the system: **grounded or silent.**

Every claim ArchDecision makes has to be traceable to something concrete in the repository, a dependency, a configuration file, a structural fact, a specific piece of the README. If the evidence for a decision is thin, the confidence label says so plainly, as "low," rather than presenting a guess with the same authority as a well-supported fact. If a repository is too small or too sparse to support any real inference, the system says exactly that instead of inventing decisions to look thorough.

This matters because the alternative, a system that answers confidently regardless of how much evidence it actually has, is worse than no answer at all. A wrong architectural claim stated with total confidence sends a new engineer down the wrong path and erodes trust in the tool the first time someone checks it against the code and finds it invented. Being honest about uncertainty, and refusing to fabricate when there is nothing to point to, is what makes the output something a team can actually rely on and commit into their own repository.

The other half of the idea is treating the code as the only source of truth that matters. Not the README's aspirational description of the architecture, not a design doc that may be years out of date, but the code and its structure as they exist right now, at a specific commit. Everything ArchDecision produces is anchored to that exact commit, so what it says about a repository is what that repository actually shows, not what someone once intended it to show.

---

## Walking through it screen by screen

### The landing page

You arrive at a plain input field: paste a GitHub URL, in almost any form you'd naturally type it, a full link, an owner/repo shorthand, whatever you have. A handful of well-known open-source repositories sit below as one-click examples, so a first-time visitor can see real output without having to think of a repository themselves. If the repository is private, or if the analysis is going to run into GitHub's public rate limit, there is an optional field to add a personal access token, which raises the limit substantially and unlocks private repositories.

### The live analysis pipeline

Once you hit analyze, you do not wait behind a blank spinner wondering if anything is happening. A short sequence of stages appears and updates in real time as they complete: fetching the repository, reading its structure, identifying the files that carry the most signal, inferring the architectural decisions, and generating the final records. Each stage lights up as it finishes, so the wait, typically well under a minute for a normal-sized repository, is transparent rather than opaque.

### The decisions list

The result is a list of architectural decisions, each one titled in plain language, "Use Express.js as the primary web framework," "Utilize Redis for session management and specialized data storage," "Adopt a monolithic architecture," and so on. Each one carries a category tag, Framework, Datastore, Architecture, Auth, API, and a confidence indicator, so at a glance you can see both what was inferred and how solid the evidence behind it is.

### A single decision, opened

Clicking into any one decision opens the full record. This is where the actual reasoning lives: the context that made this a decision point in the first place, the decision itself stated plainly, the rationale grounded in the specific evidence that supports it, the realistic alternatives that were probably weighed and why each one likely lost out, the consequences the team now lives with as a result, and the exact evidence, a dependency name, a file, a configuration line, that the whole inference rests on. Every record can be copied as ready-to-commit markdown, formatted the way a real ADR belongs in a project's own `/docs/adr/` folder.

### Ask your codebase

A second tab turns the whole thing into a conversation. Ask a plain question, "what database does this use and why," and the answer streams back in real time, citing the exact files it drew from. If a question falls outside what the retrieved context actually supports, the system says so and offers the closest grounded inference it can, clearly labeled as inference rather than fact. Nothing here is a generic answer about how web frameworks work in general. It is scoped tightly to this repository, this commit.

### The onboarding document

A third tab produces the document every team needs and almost nobody writes: a structured, repo-specific onboarding guide covering what the project is, the stack at a glance, how the code is organized, exactly how to run it locally with commands pulled from the project's own scripts and configuration rather than invented, the key files and modules worth understanding first, the architectural decisions worth knowing about, a suggested reading path through the code, and the non-obvious gotchas a newcomer would otherwise discover the hard way. It downloads as a single markdown file, ready to hand to the next person who joins.

### PR architectural review

Paste a pull request URL and the system checks the changes in that PR against the architectural decisions already inferred for the repository. Rather than issuing a verdict, it raises each potential concern as a specific question for the human reviewer, tagged by severity, informational, worth a look, or a likely conflict, and points to exactly which files in the diff triggered the concern.

### Tech debt drift map

This view compares the architecture the repository was supposedly designed around against what the repository actually looks like today, and shows where reality has moved away from intent. A service that was meant to stay small and is now a four-thousand-line file. A testing decision that was made but never followed through on. Each finding is labeled aligned, minor, or major, shows what the current code demonstrates versus what the original decision implied, and ends with a concrete next step. When the code still matches its own architecture, the map says so plainly rather than manufacturing a problem to seem useful.

### The codebase mind-map

This is a visual, interactive diagram of the repository's architecture, assembled entirely from real analysis output rather than a generic template. At the center sits the repository itself. Around it, branches radiate outward: one for every architectural area that has a decision behind it, one for the repository's top-level modules with real file counts and dominant file types, one for the languages actually present, weighted by how much of the codebase they make up. Nothing is drawn until you ask for it. Clicking a branch opens the decisions inside it; clicking a decision opens the specific evidence behind it, radiating out one more ring. Every node, when clicked, opens a plain-English detail panel, and file or folder nodes link directly to that exact file or folder on GitHub, at the precise commit that was analyzed. You can zoom, pan, go fullscreen, expand or collapse the whole thing at once, and export the diagram as an SVG. It turns an abstract architectural summary into something you can explore the way you'd explore a map, not read the way you'd read a report.

---

## The research library, and where it is headed

Sitting alongside the analysis tools is a growing reference hub: a curated catalog of foundational papers and technical writing spanning the breadth of computer science, not just the current wave of AI and machine learning work. The scope stretches across distributed systems, databases, networking, operating systems, security and cryptography, algorithms, and, alongside all of that, agentic AI, large language models, and small language models.

Today this hub is visible and browsable as an early preview. It already shows the organizing structure fully formed, filterable by source, OpenAI, Anthropic, Google, NVIDIA, Meta AI, Mistral AI, Microsoft, Amazon, and academic research broadly, and by topic, from Agents and Reasoning through Distributed Systems, Databases, Networking, Operating Systems, and Security and Cryptography. A real starter catalog of landmark, widely cited works is already present as preview cards, spanning "Attention Is All You Need," "The Google File System," "MapReduce," "In Search of an Understandable Consensus Algorithm," the original relational database paper from 1970, the foundational TCP congestion control paper, and further still.

What is filling in behind that structure next is the connective layer: a direct link out to each paper and official document, and a live, working search bar across the entire catalog. The taxonomy, the scope, and the first wave of entries are already there. The library is expanding outward from a real foundation, not starting from nothing.

---

## How it actually works, from a pasted link to a finished analysis

Understanding the mechanism matters, because it is the mechanism that makes the "grounded or silent" principle possible rather than just a slogan.

**First, the repository is read, not guessed at.** When a link comes in, the system pulls the repository's basic metadata, its full file tree, and its language breakdown directly from GitHub, in parallel to keep things fast. At this point it has a complete map of every file and folder in the project, but not yet the contents of most of them.

**Second, the system decides what actually matters.** Not every file in a repository carries architectural signal. A dependency manifest like `package.json` or `requirements.txt` tells you more about the real technical decisions than almost anything else, so those are read first. Infrastructure files, Dockerfiles, CI pipeline configuration, deployment configuration, come next, because they reveal how the system actually runs and ships. The root README and any existing architecture documentation come after that. Finally, likely entry points, main files, schema files, route and controller and model directories, round out the picture. Files that are clearly vendored or generated, dependency folders, build output, compiled artifacts, are skipped entirely, because they describe tooling output, not intent.

**Third, everything is compressed into one compact, structured profile.** This is the step that matters most for trustworthiness. The system never hands a language model the raw, sprawling contents of an entire repository. Instead, it builds a tight, structured summary: the parsed dependencies organized by ecosystem, a computed structural summary of the project, folder-level facts, the README, and the highest-signal file contents, all assembled into one document, sized to stay comfortably within what a single request can carry. This profile is the only thing the model ever sees. It is small enough to reason over carefully and complete enough to ground every claim it produces.

**Fourth, the model infers the decisions, and its output is checked, not trusted blindly.** The model is instructed to behave like a senior architect performing an audit, required to cite specific evidence for every claim, and required to label its own confidence honestly rather than defaulting to certainty. What comes back is checked against a strict structural schema. If anything is missing or malformed, the system does not just give up or silently drop it. It sends the output back for a single automatic correction pass, describing exactly what was wrong, and validates again. Only output that passes this check ever reaches the interface.

**Fifth, the reasoning is treated as data, never as instructions.** A repository is, in principle, untrusted content. A comment or a README could theoretically contain text trying to manipulate an automated reader into behaving differently than intended. Every part of the system that reasons over repository content is explicitly told, as a standing rule, that everything from the repository is material to analyze, never a command to follow. This boundary is stated independently everywhere the model is prompted, not assumed once and forgotten.

Once this profile exists for a given repository at a given commit, it is kept warm for a short window so that asking a follow-up question, generating the onboarding document, or checking a pull request does not mean starting the entire ingestion process over from scratch.

---

## The system underneath

The interface itself is a single-page application, fast to load and simple to navigate, that talks to a set of small, focused backend services rather than one large monolith. Each capability, generating decisions, answering a question, writing the onboarding document, reviewing a pull request, mapping drift, lives as its own independent service, all sharing the same underlying ingestion and profiling logic so behavior stays consistent across every feature.

Anything that takes real time to think, generating the initial decisions, answering a question, writing the onboarding document, streams its output back continuously rather than making you wait for one giant response at the end. You see the pipeline stages tick off one by one. You see an answer to a question appear word by word, the way a real conversation does, rather than staring at a blank screen until it's finished.

The connection to the model that performs the reasoning is deliberately kept as a thin, swappable layer. It speaks a widely adopted, standard interface for talking to language models, which means the underlying model provider is a configuration choice, not something wired permanently into the system's logic. This also means the credential that authorizes access to that model lives only on the server side, in an environment variable, and is never exposed to anyone's browser at any point.

Access to GitHub itself works the same way: a personal access token, when supplied, is used only for the single request it accompanies and is never written to a log or stored anywhere. A short-lived cache holds each repository's processed profile for a limited window after analysis, keyed to the exact commit that was analyzed, so that a rapid sequence of follow-up questions or a request for the onboarding document does not force the system to re-fetch and re-process the entire repository from scratch each time.

---

## What makes this a genuinely different approach

Most tools that layer a language model onto a codebase optimize for sounding confident. Ask them anything and they will answer, smoothly and fluently, whether or not there was ever real evidence behind the answer. That confidence is exactly the failure mode that erodes trust the moment someone checks the claim against the actual code and finds nothing there to support it.

The approach here inverts that incentive. Confidence is not the default; it is something that has to be earned by actual evidence, and it is labeled honestly when it isn't. A repository with almost nothing in it, an empty project, a stub, gets told plainly that there isn't enough here to infer anything real, rather than being handed a confident-sounding fabrication to fill the silence.

The other genuine departure is treating the output as something durable rather than disposable. This isn't a chatbot that gives you an answer you read once and lose. Every architectural decision, every onboarding document, every drift finding is written to be copied straight into the project it came from, formatted the way real engineering documentation is formatted, so the reasoning a team recovers today becomes something the next person who joins can read directly, without ever having to ask the system again.

And the visual layer, the mind-map, exists for a specific reason: architecture is not a list, it's a shape. A flat list of ten decisions tells you what was decided. A map that shows how those decisions cluster around datastore choices, framework choices, structural choices, and shows the evidence trailing off each one, tells you how the pieces actually relate to each other. That relational view is often the fastest way for a new engineer to build an accurate mental model of a system they have never seen before.

---

## The throughline

Every codebase eventually loses the people who understood why it looks the way it does. The org chart changes, people move on, memories fade, and the reasoning that shaped hundreds of decisions quietly disappears with them. What's left behind is just the code, doing its job, answering no questions about itself.

ArchDecision exists to close that gap using the one thing that never leaves: the code. It reads what is actually there, states plainly what it can support with evidence and what it can't, and turns that into documentation a team would otherwise have to write by hand, or more realistically, never get around to writing at all.

Institutional memory a codebase never had, recovered from the only place it could still be found.
