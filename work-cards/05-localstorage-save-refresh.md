# Work Card 05 — LocalStorage Save and Refresh

## Goal
Persist all entries to browser localStorage so they survive a page refresh. This is the core requirement of the browser-local tool shape.

## Inputs
- build-blueprint.md
- architecture.md (storage logic, key `sfm-data`)
- design.md

## Files likely touched
- App.jsx

## Instructions for the coding agent
1. Use the localStorage key `sfm-data` (defined in architecture.md) to store the full entries array.
2. On app mount (useEffect on first render), read `sfm-data` from localStorage:
   - If it exists and is valid JSON, load it as the initial state.
   - If it is null (first run), seed the sample dataset instead.
3. Every time entries change, write the updated array to localStorage:
   `localStorage.setItem('sfm-data', JSON.stringify(entries))`
4. Use a useEffect that runs whenever `entries` changes to save.
5. Amounts must be stored as numbers, not strings, so totals compute correctly after reload.
6. Do not store anything else in localStorage — no tokens, no user data, no keys.

## What not to do
- Do not add a backend, database, or server.
- Do not add auth or user accounts.
- Do not store anything beyond the entries array.
- Do not use blue colors.

## Done when
- After adding an entry and refreshing the page, the entry is still there.
- After deleting an entry and refreshing, it is gone.
- After a fresh browser load (empty storage), sample data appears.
- Amounts remain numbers after reload (totals still compute).

## Verification steps
- Add an expense, refresh the page — it still appears.
- Add an income, refresh — it still appears.
- Add a goal, refresh — it still appears with progress.
- Delete an entry, refresh — it stays deleted.
- Confirm in browser DevTools that `localStorage.getItem('sfm-data')` contains the array.
- Confirm no other localStorage keys were created.

Design check: refresh proof visibility — data persistence is the proof; the empty state and item list follow design.md.

## Localhost test before continuing
After this card, the learner should test:
- Add an expense, refresh the browser — the expense is still there.
- Add an income and a goal, refresh — all are still there.
- Delete an entry, refresh — it stays deleted.
- Open DevTools Application > Local Storage and confirm the data is stored.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
- If data does not survive refresh, check that the save useEffect runs on every change and that the read happens on mount.
- If amounts become strings after reload, parse them back to numbers on read.

## Status
Completed