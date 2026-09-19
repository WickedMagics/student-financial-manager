# Design Direction

## Design Inspiration URL
Ember Studio design system (warm, craft-focused). Full spec provided by learner.

## What We Borrow
- Layout: card-based sections with a 4px spacing grid; container max width ~1200px with 24px horizontal padding.
- Spacing: 4px base unit; scale 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px.
- Color mood: warm terracotta (#C2410C) as the single interactive accent; amber (#F59E0B) sparingly for highlights; warm off-white surfaces (#F5F5F4) and cream page background (#FAFAF9).
- Typography feel: serif display (Playfair Display) for headings, clean sans (Source Sans 3) for body and UI — the serif/sans contrast.
- Card/button style: flat cards with 1px warm border and 12px radius; primary buttons terracotta fill with white text and 8px radius; soft shadow on hover.
- Mobile feel: sections stack vertically; touch-friendly controls; readable at 360px width.

## What We Do Not Copy
- Brand/logo: no Ember Studio logo or branding. We build our own Student Financial Manager identity.
- Content/copy: no Ember Studio project-management text. All text is ours.
- Testimonials/stats: none — no fake claims.
- Photos/private identity: none.
- Exact layout: Ember is a sidebar desktop app. We adapt the *style* to a single-page mobile-first layout, not the sidebar.
- Sidebar navigation: not copied. We use a simple stacked header + sections.

## Visual Mood
Warm, premium, calm, focused.

## Layout Rules
Single-page, mobile-first. Top: app header with title and current-month label. Then a summary row of 4 stat cards (Income, Expenses, Remaining, Savings Rate). Then an "Add" segmented control (Expense / Income / Goal) that switches the form below. Then the entry list and goals list in stacked sections. One clear primary action per view: the big "+" or "Add" button.

## Color / Contrast Rules
- Primary interactive: terracotta #C2410C (CTAs, active states, focus rings, progress fill).
- Primary hover: #9A3412.
- Accent: amber #F59E0B (badges, new-item indicators) — use sparingly.
- Background: #FAFAF9 (warm cream page).
- Surface: #F5F5F4 (cards, panels).
- Text primary: #1C1917 (near-black warm).
- Text secondary: #57534E (warm gray).
- Border: #D6D3D1 (warm gray edges).
- Success: #16A34A. Warning: #D97706. Error: #DC2626.
- No blue anywhere. No pure black or pure white — always use the warm palette values.
- Minimum contrast ratio 4.5:1 for body text on its background.

## Typography Feel
Friendly but premium. Serif headings (Playfair Display) for the app title and section headings; clean sans (Source Sans 3) for all UI, labels, inputs, and body. Max two font weights per screen (regular + semibold). Load both from Google Fonts.

## Component Style
- Buttons: primary = terracotta fill, white text, 8px radius, semibold, 150ms transition, warm glow on hover. Secondary = transparent bg with 1px stone border. Destructive = red bg with white text. One primary CTA per view.
- Cards: warm white surface #F5F5F4, 1px border #D6D3D1, 12px radius, 16px padding. Hover lifts 2px with soft shadow.
- Inputs: 1px border #D6D3D1, surface bg, 8px radius, 12px padding, 16px font. Focus: terracotta border + warm ring. Labels 14px semibold above.
- Chips/pills: 9999px radius. Category chips stone-100 bg; active = terracotta bg with white text.
- Progress bars: 4px height, rounded-full, stone-200 track, terracotta fill, 300ms ease transition.
- Tabs: underline style; active = terracotta text with 2px bottom border.

## Mobile Rules
- Stack everything vertically. Summary cards scroll horizontally as a row on small screens, or stack to 2 columns.
- Full-width touch controls; minimum 44px tap targets.
- Add form fields stack vertically; segmented control spans full width.
- Section spacing 24px on mobile, 32px tablet, 48px desktop.
- Readable at 360px width without zooming.

## Accessibility Basics
- Body text contrast >= 4.5:1 against its background.
- Visible focus rings on inputs and buttons (terracotta ring).
- Every button and input has a clear accessible label.
- No tap targets smaller than 44px.
- Semantic HTML: headings ordered, buttons for actions, labels associated with inputs.

## Anti-Slop Rules
- No fake logos.
- No fake testimonials.
- No fake stats unless clearly marked "sample".
- No "lorem ipsum" in final proof — use real sample data.
- No random gradient blobs or decorative clutter.
- One clear primary action per view.
- Readable on phone width.
- No blue colors anywhere.
- No invented financial metrics presented as real.

## Design Verification Checklist
- [ ] First screen matches the warm, premium mood.
- [ ] Layout supports the user goal (add, see, track).
- [ ] Mobile width is readable at 360px.
- [ ] Nothing clones another brand.
- [ ] No fake claims, testimonials, or generic AI decoration.
- [ ] Only terracotta/amber/warm-neutral colors used — no blue.
- [ ] One primary CTA per view.