# Work Card 04 — Update and Delete Item

## Goal
Make edit and delete work for every entry type. Edit opens a pre-filled form to change fields; delete removes the entry from state.

## Inputs
- build-blueprint.md
- architecture.md (data model)
- design.md (edit/delete affordances: pencil icon for edit, trash icon for delete, destructive = red bg with white text)

## Files likely touched
- App.jsx
- components/EntryList.jsx
- components/GoalList.jsx
- components/EntryForm.jsx (reuse for edit)

## Instructions for the coding agent
1. Each entry row shows an edit button (pencil icon) and a delete button (trash icon).
2. Clicking edit opens the EntryForm pre-filled with that entry's data, in the correct tab (Expense/Income/Goal). The form should switch to "edit mode" — a small label or button text change like "Update" instead of "Add".
3. On update, replace the entry in state with the new values instead of appending.
4. Clicking delete shows a small confirmation (or uses a destructive red button per design.md) and removes the entry from state.
5. If the last entry is deleted, the empty state should appear.
6. Goals: allow editing name, target amount, and current amount. Allow manually updating currentAmount to track savings progress.
7. Style delete as a destructive action: red text or red button per design.md.

## What not to do
- Do not wire localStorage yet — that is Card 05.
- Do not add any backend, auth, or API.
- Do not use blue colors.

## Done when
- Clicking edit on an expense opens the form pre-filled in the Expense tab.
- Updating changes the entry in the list.
- Clicking delete removes the entry.
- Deleting the last entry shows the empty state.
- Goal currentAmount can be updated and the progress bar reflects it.

## Verification steps
- Edit an expense, change the category, save — the list shows the new category.
- Edit an income, change the amount, save — the list shows the new amount.
- Edit a goal, change the target amount and current amount, save — the progress bar updates.
- Delete an expense — it disappears from the list.
- Delete all entries — the empty state appears.

Design check: update/mark state style, delete affordance, and empty state follow design.md.

## Localhost test before continuing
After this card, the learner should test:
- Edit an expense and confirm the change appears.
- Delete an expense and confirm it disappears.
- Delete all entries and confirm the empty state appears.
- Update a goal's current amount and confirm the progress bar moves.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
- If edit does not pre-fill the form, check that the entry id is passed and the form loads the correct tab.
- If delete does not remove the entry, check the filter logic in setState.

## Status
Completed