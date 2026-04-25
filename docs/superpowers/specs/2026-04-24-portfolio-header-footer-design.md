# Portfolio Header And Footer Design

## Context

- The project already has its visual foundation implemented: typography, semantic tokens, Tailwind v4 setup, and shadcn/ui Base UI integration.
- The homepage still contains only a minimal placeholder.
- The next UI phase should start the real portfolio structure in small validated slices.
- The first requested slice is limited to `header` and `footer`/contact.
- Visual references come from:
  - `images-inspirations/header.png`
  - `images-inspirations/footer.png`
  - `https://www.enzopavani.dev/` for header feel
  - `https://neres.vercel.app/` for contact/footer structure

## Goals

- Build a header visually close to the inspiration, but adapted to the portfolio foundation already defined in this repo.
- Replace the inspiration initials with `JV`.
- Keep the rounded centered navbar layout with subtle borders and elevated dark surface.
- Use same-page anchor navigation for `Experiência`, `Projetos`, `Habilidades`, `Educação` and `Contato`.
- Build a footer/contact section visually close to the inspiration and driven by data props so real content can be filled in later.
- Prepare the page structure with section ids required for anchor navigation.

## Non-Goals

- No hero implementation yet.
- No skills, education, projects, or experience section implementation yet beyond temporary anchor targets.
- No scroll spy logic yet.
- No complete light/dark theme switching behavior yet unless needed for minimal button affordance.
- No real personal copy, links, or contact data finalization yet.

## Constraints And Conventions

- Keep using the current semantic palette and typography foundation.
- Preserve the monochromatic dark direction already established.
- Keep files hyphenated.
- Prefer named exports for author-written code.
- Follow current `AGENTS.md` conventions and the semantic color naming from `cores.md`.
- Do not over-generalize; this slice should solve the actual portfolio layout need, not become a generic design system.

## Proposed Approach

Create two author-owned UI components:

- `site-header`
- `site-footer`

Back them with small typed data modules for navigation and contact information. The homepage becomes a composition layer that includes these components and simple placeholder sections with matching ids.

This approach keeps the slice production-like and reusable without collapsing everything into `page.tsx` or prematurely building the rest of the site.

## Header Design

### Layout

- Centered horizontal pill-style navigation bar.
- Sticky behavior: the header should stay pinned near the top of the viewport while scrolling, with a small top offset so it preserves the floating premium look from the inspiration.
- Constrained max width matching the visual rhythm of the references.
- Rounded full container with:
  - dark elevated background based on `bg-surface-raised`
  - subtle border using `border-border`
  - light inner contrast through spacing, not bright fills
- Three zones:
  - left: monogram `JV`
  - center: nav links
  - right: small action icons

### Header Content

- Left monogram replaces the inspiration `ES` with `JV`.
- Navigation items:
  - `Experiência`
  - `Projetos`
  - `Habilidades`
  - `Educação`
  - `Contato`
- Right side actions:
  - one icon button reserved for theme switching
- No language selector.

### Interaction Model

- Navigation uses same-page anchors such as `#experiencia`, `#projetos`, `#habilidades`, `#educacao`, `#contato`.
- Smooth scrolling should be enabled globally.
- Active styling is static for now; `Experiência` should appear visually selected on first render and no scroll spy behavior is included in this slice.
- Theme control should be a real accessible button with icon only, but no-op behavior for now; it exists as a visual affordance and should not claim current theme state.

### Visual Adaptation

- Keep the inspiration proportions and rounded silhouette.
- Replace purple accent bias with the repo palette:
  - text in `text-foreground` / `text-foreground-subtle`
  - active item using a slightly brighter neutral chip from current semantic surfaces
  - borders in `border-border`
- Keep the look premium, understated, and minimal.

### Responsive Behavior

- Desktop: fully centered pill navigation.
- Tablet/mobile: maintain same visual family, but allow horizontal scrolling of nav items instead of forcing a hamburger menu in this first slice.
- The monogram and theme button remain visible on smaller screens.

## Footer / Contact Design

### Layout

- Section rendered near the end of the page, visually inspired by `footer.png`.
- Strong section heading with centered divider treatment.
- Short intro paragraph below the title.
- A grid of three contact cards.
- Social icon row below the cards.
- Primary CTA button at the bottom.

### Footer Content Model

The footer should be powered by data so the user can replace content later without editing structure.

Required content groups:

- Section heading and intro text
- Contact cards:
  - email
  - phone
  - location
- Social links list
- Primary CTA label and URL

### Footer Visual Direction

- Keep the dark neutral background from the current foundation.
- Cards use elevated surface and subtle border.
- Circular icon holders remain, but use the project palette instead of introducing new colors.
- CTA button should look strong and clear without leaving the monochromatic design language.

### Data Shape Expectations

Footer data should support:

- label
- value
- href when clickable
- icon reference

Social data should support:

- platform name
- href
- icon reference
- accessible label

## Page Composition Changes

`src/app/page.tsx` should stop being a single placeholder and become a slice composition page.

It should include:

- `site-header`
- lightweight placeholder sections for:
  - `experiencia`
  - `projetos`
  - `habilidades`
  - `educacao`
- `site-footer`, and the footer itself is the real `#contato` anchor target for this slice

The placeholder sections should be deliberately simple and low-detail so they do not leak into later design work. Their only job in this slice is to:

- provide valid anchor targets
- preserve spacing rhythm
- make navigation testable

## File Plan

- Create: `src/components/layout/site-header.tsx`
- Create: `src/components/layout/site-footer.tsx`
- Create: `src/data/navigation.ts`
- Create: `src/data/contact.ts`
- Modify: `src/app/page.tsx`
- Optional: create a tiny shared section shell only if it materially reduces duplication without obscuring the slice

## Accessibility

- Header nav should use semantic `nav` and accessible link labels.
- Theme button should include an accessible label even if not fully wired yet.
- Footer social links and contact actions must include accessible names.
- Section headings should preserve heading hierarchy.
- Anchor targets should not be hidden behind the sticky header; placeholder sections and the footer target should use scroll margin or equivalent spacing to account for the header height.

## Risks And Mitigations

- Risk: mobile nav becomes cramped.
  - Mitigation: horizontal scroll instead of forcing a premature mobile menu.
- Risk: footer becomes too content-specific too early.
  - Mitigation: drive content from typed data objects.
- Risk: section placeholders accidentally become real section implementations.
  - Mitigation: keep them minimal, consistent, and clearly temporary.

## Verification Plan

- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm build`
- Browser smoke check confirming:
  - header renders centered and rounded
  - anchor links navigate to corresponding section ids
  - footer cards and social actions render correctly
  - layout works on desktop and mobile widths

## Implementation Sequence

1. Add typed navigation and contact data.
2. Implement `site-header`.
3. Implement `site-footer`.
4. Recompose `src/app/page.tsx` with anchorable placeholder sections.
5. Add any small global polish needed for smooth scroll or anchor offsets.
6. Run verification and smoke test.

## Open Decisions Resolved In This Spec

- First slice is only `header` and `footer`.
- Navigation uses same-page anchors for now.
- No scroll spy yet.
- No language selector.
- Theme affordance can be present without full theme system behavior.
