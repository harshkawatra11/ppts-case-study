# Executor decisions (PLAN.md §0.6)

One line per decision where the plan left a default-when-unspecified choice.

- 2026-10-11: Used `duckduckgo-search>=6.3` directly in `engine/requirements.txt` instead of trying `ddgs` first.
  Import as `from duckduckgo_search import DDGS`. Reason: this is the plan's own named fallback and installed
  cleanly; no need to try the primary package first and roll back. Web-search source code (`sources/websearch.py`)
  must import `duckduckgo_search`, not `ddgs`.
- 2026-10-11: Python venv created with `python -m venv` using absolute paths (not `cd` + relative), because the
  Bash tool's working directory resets to the primary project directory between calls when operating in the
  WEB-DEV-PROJECTS tree (a different directory than the session's primary working directory). All engine setup
  commands going forward use absolute paths rather than relying on `cd` persisting across Bash calls.
