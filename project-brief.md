# Project Brief

## Project Identity

- **Project name:** Student Financial Manager
- **Folder name:** Student Financial Manager
- **Build method:** KDBM Lite (Spec → Build → Check → Ship)

## One-Sentence Concept

A Gen Z-friendly, browser-local money tracker for 18–25 year old college students who add expenses via dropdowns, log income (parents, PTPTN, part-time, TNG), set savings goals, and see their monthly financial picture — all stored locally in their own browser.

## Target User

- **Age:** 18–25
- **Status:** College students
- **Traits:** Wants something easy and interesting, not a boring spreadsheet. Responds to casual, Gen Z tone. Cares about real money problems (paylater/SPayLater, savings, wants vs. needs).

## User Goal

- Be able to quickly log expenses without typing (dropdowns only).
- See where their money goes each month.
- Know how much they should be saving.
- Set and track financial goals (saving up for something, or buying something).
- Get friendly, relatable financial tips — not textbook language.

## Build Shape

**Browser-local tool.**

The main value is creating and changing one kind of data (the user's own financial record) that must remain after refresh in the same browser. There is no server, no login, no backend.

## Shape Confirmation

- **Inference:** Browser-local tool.
- **Clue:** The core action is adding expenses, logging income, and tracking savings goals — the user is *creating and changing their own data* over time, and that data must persist after refresh.
- **Confirmed by learner:** Yes.

## Version-One Success

- [ ] User can add an expense using a dropdown (no typing).
- [ ] User can log income from a set of sources (parents, PTPTN, part-time, TNG, other).
- [ ] User can create a savings or purchase goal with a target amount.
- [ ] The dashboard shows total income, total expenses, and remaining balance for the month.
- [ ] Data survives a page refresh (localStorage).
- [ ] The design feels friendly, pastel, and Gen Z — not a gray spreadsheet.

## Now / Later / Never

### Now

- Single-page browser app, no backend.
- Dropdown-based expense entry (category, amount, date, payment method).
- Income logging with preset sources (parents, PTPTN, part-time, TNG e-wallet, other).
- Savings/purchase goal creation with target amount and progress display.
- Monthly summary: income, expenses, remaining, savings rate.
- Friendly empty state when no data exists yet.
- Pastel, mobile-friendly visual design.
- LocalStorage persistence.
- Casual, Gen Z tone in labels and tips.

### Later

- Export data to CSV.
- Multiple months / date-range filtering.
- Budget caps per category with warnings.
- Streaks and achievement badges.

### Never

- Linking to real bank accounts or open banking APIs.
- Real TNG e-wallet integration or live payment APIs.
- User accounts, login, or auth.
- Backend, database, or server.
- Payments, checkout, or commerce.
- Multi-user sync or sharing data with others.
- Invented metrics or fake financial data presented as real.

## Assumptions

- The learner's trainer accepts the browser-only scope; no account or TNG integration is built.
- All financial data stays in the learner's browser via localStorage.
- "TNG" is offered as a payment-method *label* in dropdowns, not a live connection.
- Sample data is provided so the app looks alive on first open.
- PTPTN is treated as a Malaysian student loan (target audience context).

## Proof Target

- Open the app in a browser.
- Add at least one expense and one income entry.
- Create one savings goal.
- Refresh the page — all entries and the goal remain.
- Mobile viewport check: layout is usable on a small screen.

## Trainer / Learner Notes

- Learner originally wanted an account for "CIA" (confidentiality) and TNG linking. Both were declined under KDBM Lite guardrails; the browser-local scope was accepted.
- Confidentiality is achieved by keeping data in the user's own browser — nothing is transmitted.
- The folder is named "Student Financial Manager"; project name matches.