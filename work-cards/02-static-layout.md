# Work Card 02 — Static Layout

## Goal
Build the full on-screen layout with sample data: summary cards, add form, entry list, goals list, tip panel, and empty state. No localStorage yet — everything is hardcoded sample data rendered in React state.

## Inputs
- build-blueprint.md
- design.md (Ember Studio warm terracotta style)
- architecture.md (component map and data model)

## Files likely touched
- App.jsx
- styles.css
- components/SummaryCard.jsx (create)
- components/EntryForm.jsx (create)
- components/EntryList.jsx (create)
- components/GoalList.jsx (create)
- components/TipOfTheDay.jsx (create)
- components/EmptyState.jsx (create)

## Instructions for the coding agent
1. Create the components listed above as separate files under `components/`.
2. Hardcode a small sample dataset in App.jsx matching the architecture data model (2 expenses, 1 income, 1 goal).
3. Render in this order:
   - Header (from Card 01)
   - Summary row: 4 cards — Income, Expenses, Remaining, Savings Rate
   - Add form with a segmented control: Expense / Income / Goal (switches the fields shown)
   - Entry list: expenses and income, most recent first, each with edit (pencil) and delete (trash) buttons
   - Goals list: each goal with a progress bar
   - Tip of the day panel
   - Empty state component (ready to use, shown only when list is empty)
4. Apply the Ember Studio style from design.md: warm cream background, warm white cards with 1px border and 12px radius, terracotta primary buttons, 4px spacing grid, Playfair Display headings, Source Sans 3 body, no blue.
5. Make the layout responsive: on mobile (360px), stack sections vertically; summary cards stack or scroll.

## What not to do
- Do not wire localStorage yet — that is Card 05.
- Do not make the add/edit/delete buttons actually work yet — they are placeholders this card.
- Do not add any backend, auth, or API.
- Do not use blue colors anywhere.

## Done when
- The full layout renders with sample data.
- All components appear in the correct order.
- The design matches design.md (warm, terracotta, premium, no blue).
- The layout is usable at mobile width (360px).

## Verification steps
- Confirm all components render in the correct order.
- Confirm the summary cards show correct sample totals.
- Confirm the add form shows different fields when switching Expense/Income/Goal.
- Confirm the empty state component exists (not shown, but ready).
- Resize to 360px width — nothing is cut off, text is readable, buttons are tappable.

Design check: item card/list, input form, empty state, and mobile stacking follow design.md.

## Localhost test before continuing
After this card, the learner should test:
- The full page renders with sample data and no console errors.
- All sections are visible in the correct order.
- At 360px width, the layout is readable and nothing is cut off.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
If components fail to render, check imports and the sample dataset shape.

## Status
Completed