# Work Card 03 — Add Item

## Goal
Make the add form actually work: switching between Expense/Income/Goal shows the right dropdown fields, and clicking Add creates a new entry in React state.

## Inputs
- build-blueprint.md
- architecture.md (data model and field rules)
- design.md (form style: 1px border, 8px radius, terracotta focus ring, labels above inputs)

## Files likely touched
- App.jsx
- components/EntryForm.jsx

## Instructions for the coding agent
1. In EntryForm, implement a segmented control (Expense / Income / Goal) that switches which fields are shown.
2. Expense fields (all dropdowns except amount and note):
   - Category dropdown: Food, Transport, Entertainment, Shopping, Bills, Study, Other
   - Amount: number input
   - Date: date input (default today)
   - Payment method dropdown: Cash, TNG e-wallet, Card, Bank transfer
   - Note: optional text input
3. Income fields:
   - Source dropdown: Parents, PTPTN, Part-time job, TNG e-wallet, Scholarship, Other
   - Amount: number input
   - Date: date input (default today)
   - Note: optional text input
4. Goal fields:
   - Name: text input (what they are saving for)
   - Target amount: number input
   - Deadline: optional date input
   - currentAmount starts at 0
5. On submit, push a new entry object into the entries array in App.jsx state, with a generated id, type, and all fields.
6. Clear the form after adding.
7. Style the form per design.md: warm white surface, 1px border #D6D3D1, 8px radius, 12px padding, labels 14px semibold above inputs, terracotta focus ring, primary terracotta button.

## What not to do
- Do not wire localStorage yet — that is Card 05.
- Do not allow free-text for category/source/method — dropdowns only.
- Do not add any backend, auth, or API.
- Do not use blue colors.

## Done when
- Selecting Expense shows category + payment method dropdowns.
- Selecting Income shows source dropdown.
- Selecting Goal shows name + target amount fields.
- Adding an entry appends it to the list immediately.
- The form clears after adding.

## Verification steps
- Switch to Expense, fill the form, click Add — a new expense appears in the list.
- Switch to Income, fill the form, click Add — a new income appears.
- Switch to Goal, fill the form, click Add — a new goal appears with a progress bar at 0.
- Confirm dropdowns work and no free-text is required for category/source/method.

Design check: input form, dropdowns, segmented control, and primary button follow design.md.

## Localhost test before continuing
After this card, the learner should test:
- Add an expense via dropdowns — it appears in the list.
- Add an income via dropdowns — it appears in the list.
- Add a goal — it appears with a progress bar.
- The summary cards update to reflect the new totals.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
- If the segmented control does not switch fields, check the active tab state.
- If the new entry does not appear, check that the submit handler calls setState with the new object.

## Status
Completed