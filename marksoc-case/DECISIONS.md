# Decisions log: Project DOBAARA

| date | step | decision | why |
|---|---|---|---|
| 2026-10-26 | M2/preview | Fixed double-plus bug on S7 moneyshot: V.swing already carries its own sign (lk with sign=True), slide code added a redundant "+". Changed to TL(...,V.swing,...). | Preview review caught "++19.7" rendering. Fixed in plan file (source of truth), PLAN.md copy, and deck/slides/s07.js. |
