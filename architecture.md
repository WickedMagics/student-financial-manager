# Architecture

## Build Shape

**Browser-local tool.** The main value is creating and changing one kind of data (the user's financial record) that must remain after refresh in the same browser. No server, no login, no backend.

## Stack Decision

- **Build tool:** Vite (fast dev server, zero-config)
- **Frontend library:** React (component-based UI)
- **Styling:** Plain CSS (no Tailwind — keeps the bundle small and avoids extra config)
- **Storage:** Browser `localStorage` only
- **No backend, no auth, no database, no payments, no live API**

## Structure Overview

A **single-page app** with one HTML entry point and React components. No routing needed — everything lives on one screen with sections:

1. **Dashboard / Summary** — top of page: monthly income, monthly expenses, remaining balance, savings rate.
2. **Add Entry** — a compact form (tabs or segmented control for Expense / Income / Goal).
3. **Entry List** — recent entries grouped or filtered by type, each with edit and delete.
4. **Goals List** — savings/purchase goals with progress bars.
5. **Tips** — a small friendly financial tip panel.

## Component Map

- `App` — root; holds all state, reads/writes localStorage, renders layout.
- `SummaryCard` — one card showing income, expenses, remaining, savings rate for the current month.
- `EntryForm` — dropdown-based form with a type selector (Expense / Income / Goal).
- `EntryList` — list of expense and income entries (most recent first), with edit/delete.
- `GoalList` — list of goals with progress bar and target amount.
- `TipOfTheDay` — rotates a small friendly financial tip.
- `EmptyState` — shown when no entries exist yet, with a friendly prompt and sample-data button.

## Data / State Model

One combined list in localStorage. Each entry is an object with a `type` field plus type-specific fields.

**Expense:**
- `id` (string, generated)
- `type: "expense"`
- `category` (dropdown: Food, Transport, Entertainment, Shopping, Bills, Study, Other)
- `amount` (number)
- `date` (string, ISO date)
- `method` (dropdown: Cash, TNG e-wallet, Card, Bank transfer)
- `note` (optional string)

**Income:**
- `id` (string, generated)
- `type: "income"`
- `source` (dropdown: Parents, PTPTN, Part-time job, TNG e-wallet, Scholarship, Other)
- `amount` (number)
- `date` (string, ISO date)
- `note` (optional string)

**Goal:**
- `id` (string, generated)
- `type: "goal"`
- `name` (string — what they're saving for)
- `targetAmount` (number)
- `currentAmount` (number, starts at 0)
- `deadline` (optional string, ISO date)

All amounts stored as numbers (not strings) so math works cleanly.

## Storage Logic

- **Key:** `sfm-data` (single key holding the full array)
- **Read:** on app mount, `JSON.parse(localStorage.getItem('sfm-data'))` — if null, use the sample dataset.
- **Write:** every time entries change, `localStorage.setItem('sfm-data', JSON.stringify(entries))`
- **Sample data:** on first load (empty storage), seed 2–3 expenses, 1 income, and 1 goal so the dashboard isn't empty.
- **Persistence proof:** after adding an entry and refreshing the page, the entry must still be present.

## User Flow

1. Open the page → dashboard shows sample data (or empty state if first time).
2. Tap "Add Expense" → choose category, amount, date, payment method → saved.
3. Tap "Add Income" → choose source, amount, date → saved.
4. Tap "Add Goal" → enter name, target amount → saved with 0 progress.
5. Edit any entry (pencil icon) → change fields → save.
6. Delete any entry (trash icon) → confirmed.
7. Goal progress: user manually updates `currentAmount` when they put money aside.
8. Refresh → everything stays.

## File Expectations

- `index.html` — single HTML file, loads React from CDN (no build step needed for the first version; Vite can be added later).
- `App.jsx` — root component with state and storage logic.
- `components/*.jsx` — individual components.
- `styles.css` — all styling.
- `package.json` — minimal, with Vite if the learner scaffolds later.

## Constraints

- Single data type/list only — one combined financial record list.
- No more than 3–5 core fields per entry (plus optional extras).
- Dropdowns for category/source/method — no free-text entry for those fields.
- localStorage only — nothing is sent to any server.
- No login, no auth, no multi-user sync.
- No real bank or e-wallet API connections. TNG appears only as a payment-method label.

## Technical Non-Goals

- Backend / server of any kind.
- User accounts, login, registration, or auth.
- Database (SQL or NoSQL).
- Payments, checkout, or commerce.
- Live APIs (bank, TNG, exchange rates, etc.).
- File uploads.
- Admin or multi-user systems.
- Invented metrics presented as real financial data.

## Verification Notes

- [ ] App loads in browser and shows sample data on first open.
- [ ] Adding an expense via dropdowns works and appears in the list.
- [ ] Adding an income via dropdowns works and appears in the list.
- [ ] Adding a goal works and shows a progress bar.
- [ ] Editing an entry updates it correctly.
- [ ] Deleting an entry removes it.
- [ ] Refreshing the page keeps all entries (localStorage persistence).
- [ ] Empty state shows when all entries are deleted.
- [ ] Mobile viewport: layout is usable on a small screen (360px wide).
- [ ] Summary math is correct: income total, expense total, remaining = income - expenses.