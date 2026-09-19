# Work Card 06 — Review and Fix

## Goal
Run the review mirror and make the single smallest useful fix. Do not rewrite large parts of the app — find the one thing that breaks the user experience and fix only that.

## Inputs
- build-blueprint.md (Review Mirror section)
- design.md (Design Verification Checklist)
- architecture.md (Verification Notes)
- All previous work cards

## Files likely touched
- Any file that needs the smallest fix

## Instructions for the coding agent
1. Read the Review Mirror in build-blueprint.md:
   - Does the build match the confirmed build shape? Browser-local tool.
   - Does it match the design direction? Warm terracotta, premium, no blue.
   - Does it avoid scope creep? No backend, auth, payments, APIs.
   - Are all user flows covered? Add, edit, delete, summary, goals, empty state, refresh persistence.
2. Run the Design Verification Checklist from design.md.
3. Run the Verification Notes from architecture.md.
4. Find the single most important thing that is broken or missing.
5. Fix only that one thing. Do not refactor, redesign, or add features.
6. Do not add scope — no new features, no backend, no auth, no payments.

## What not to do
- Do not rewrite the whole app.
- Do not add new features or scope.
- Do not add backend, auth, database, or API.
- Do not use blue colors.
- Do not invent fake testimonials, stats, or logos.

## Done when
- The single smallest useful fix is applied.
- The app still loads without errors.
- The fix is verified manually.

## Verification steps
- Confirm the app loads and renders.
- Re-run the most important test that was failing before the fix.
- Confirm no new errors were introduced.

Design check: confirm the fix still follows design.md (warm terracotta, no blue, one primary CTA per view, readable on phone).

## Localhost test before continuing
After this card, the learner should test:
- The app loads and renders without console errors.
- The previously failing test now passes.
- The mobile layout is still readable at 360px.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition
- If more than one thing is broken, fix the most important one first and leave the rest for a later card.
- If the app does not load at all, fix the load error before anything else.

## Status
Completed