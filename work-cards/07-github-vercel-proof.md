# Work Card 07 — GitHub and Vercel Proof

## Goal
Push the working app to GitHub and deploy it on Vercel to produce the strongest possible proof that the project ships.

## Inputs
- prompts/08-github-vercel-proof.md
- build-status.md (Git identity already confirmed: WickedMagics / meowbingo88@gmail.com)

## Files likely touched
- build-status.md (after proof)

## Instructions for the coding agent
1. Confirm Git works: `git --version` and `git config --global user.name` / `git config --global user.email`.
2. Initialize Git in this folder: `git init`, then `git add .`, then `git commit -m "build: complete kdbm lite project"`.
3. Create an empty GitHub repo (no README, license, or gitignore from GitHub).
4. Add the remote and push:
   `git branch -M main`
   `git remote add origin <repo-url>`
   `git push -u origin main`
5. Open Vercel, Add New Project, import the GitHub repo.
6. For the Vite project set:
   - Build command: `npm run build`
   - Output directory: `dist`
7. Deploy and open the live URL.
8. Test the main flow on the live URL: add an expense, add an income, add a goal, refresh, confirm data persists (note: localStorage is per-browser, so live URL persistence only works in the same browser — that is expected and fine).
9. Update build-status.md with the proof used, the live URL, the GitHub URL, and set `Current KDBM Lite stage: Shipped`.

## What not to do
- Do not commit any secrets, API keys, or invented data.
- Do not push node_modules or the Vite cache.
- Do not add a .env with secrets.
- Do not add fake testimonials, logos, or stats to the repo.

## Done when
- The GitHub repo exists and the code is pushed.
- The Vercel deployment is live.
- The live URL loads the app without errors.

## Verification steps
- `git push` succeeds and the commit appears on GitHub.
- The Vercel deployment status shows "Ready".
- The live URL opens and shows the app.
- The app loads without console errors on the live URL.

Design check: the live app still follows design.md (warm terracotta, no blue, readable on mobile).

## Localhost test before continuing
After this card, the learner should test:
- The live Vercel URL opens and shows the app header.
- The app loads without errors on the live URL.
- The GitHub repo URL shows the pushed code.

If all tests pass, reply `done`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
- If GitHub push fails, check the remote URL and that the repo is empty.
- If Vercel deploy fails, check the build command and output directory settings.

## Status
Not started