# Work Card 01 — Project Skeleton

## Goal
Create the Vite + React project shell so the app can run locally. No real data or features yet — just the scaffold and the app header.

## Inputs
- build-blueprint.md
- design.md (Ember Studio warm terracotta style)

## Files likely touched
- package.json
- index.html
- App.jsx
- styles.css
- vite.config.js (if needed)

## Instructions for the coding agent
1. Scaffold a Vite + React project in this folder using `npm create vite@latest . -- --template react`.
2. Use plain CSS, no Tailwind.
3. Create the app header: title "Student Financial Manager" with a small subtitle (this month's label).
4. Header style: Playfair Display serif title, terracotta accent, warm cream background.
5. Do not build any data features, forms, or lists in this card.

## What not to do
- Do not install extra packages beyond Vite and React.
- Do not add localStorage logic yet.
- Do not add any forms, lists, or data.
- Do not initialize Git.
- Do not deploy.

## Done when
- `npm run dev` starts without errors.
- The browser shows the app header with the project title.
- The page loads at localhost and renders without console errors.

## Verification steps
- Run `npm run dev` and confirm the dev server starts.
- Open the printed localhost URL in a browser.
- Confirm the header renders with the correct title and warm style.
- Confirm no React errors in the browser console.

Design check: header follows design.md — Playfair Display title, terracotta accent, warm cream background, no blue.

## Localhost test before continuing
After this card, the learner should test:
- `npm run dev` starts and prints a localhost URL.
- Opening that URL shows the app header with the title.
- No errors appear in the browser console.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
If `npm run dev` fails after two attempts, stop and report the exact error.

## Status
Completed