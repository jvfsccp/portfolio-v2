# Portfolio Hero Design

## Context

- The project already has the foundation layer implemented.
- The next requested slice is the homepage hero section.
- The main visual references are:
  - `images-inspirations/hero.png`
  - `https://www.enzopavani.dev/`
- The user wants the hero visually very close to the reference, but adapted to the project's monochromatic dark palette and their own profile.

Reference priority for this slice:

- Primary source of truth: `images-inspirations/hero.png`
- Secondary source of truth: `https://www.enzopavani.dev/` only for confirming behavior or proportions when the screenshot alone is ambiguous

## Goals

- Build a hero section visually close to the reference composition.
- Preserve the premium layout with left content column and right info card.
- Adapt the section to the current portfolio palette and typography.
- Replace the right-card lower metrics with portfolio-relevant attributes instead of `anos xp`, `visitas`, and `cafés`.
- Keep hero content easy to replace later through data/props.
- Preserve clear component separation; do not collapse the hero into `page.tsx`.

## Non-Goals

- No experience, education, projects, or skills implementation in this slice.
- No final production copy from the user yet.
- No complete theme switching behavior.
- No full content management system or over-generalized abstractions.

## Constraints And Conventions

- Keep using the existing semantic token system from `src/app/globals.css`.
- Keep author-written files hyphenated.
- Prefer named exports in author-written code.
- Continue using `shadcn/ui` where it helps, but keep the main hero layout author-owned.
- Keep the layout very close to the reference rather than reinterpreting it.
- Components must be separated into dedicated files rather than implemented directly inside `src/app/page.tsx`.

## Proposed Approach

Create a dedicated hero slice composed of small author-owned components and typed data modules.

Recommended structure:

- `portfolio-hero`
- `hero-highlight-card`
- `hero-rotating-traits` (if the text rotation logic is extracted)
- hero data module(s)

`src/app/page.tsx` should remain only a composition layer.
For this hero slice, the implementer should only insert `PortfolioHero` into the current page structure and leave any surrounding sections untouched except for the minimum composition changes required to place the hero correctly.
The hero slice must not redesign or expand header/footer or any later sections.

This preserves maintainability, allows content replacement later, and aligns with the user's explicit request to avoid building everything inside `page.tsx`.

## Visual Direction

### Overall Layout

- Desktop: two-column layout.
  - Left: greeting, main heading, role/subtitle, supporting paragraph, social links, CTA row.
  - Right: floating card with stack icons, age, location, portfolio-oriented attributes, and rotating highlight word.
- Mobile: stack vertically with the content column first and the info card underneath.

Structural fidelity that must be preserved from the reference:

- left content column remains the dominant visual mass
- right card sits visibly offset to the upper-right area of the hero, not centered under the text on desktop
- main text block order stays: eyebrow -> name -> role -> paragraph -> socials -> CTA row
- social row stays above the CTA row
- CTA row keeps the same two-action rhythm as the reference
- right card keeps the same vertical order: stack icons -> age -> location -> three attributes -> rotating trait

### Background

- Preserve the atmosphere of the reference hero.
- Keep the subtle grid background and soft radial glow effect.
- Replace the purple-heavy mood with the existing neutral-black palette:
  - dark surface base
  - subtle graphite/white glow
  - restrained elevated layers instead of colorful gradients

Scope guard for background work:

- the grid/glow treatment must live inside the hero section itself or in hero-scoped classes
- do not change the shared global foundation background in `src/app/globals.css` beyond minimal hero-related utility support if strictly necessary

### Typography

- Small eyebrow text at the top.
- Large multi-line name heading using `Space Grotesk`.
- Supporting role title below.
- Paragraph copy with restrained contrast.

The name should remain the strongest visual anchor in the section, just like in the reference.

## Left Content Column

### Required Elements

- Eyebrow/introduction line.
- Main name heading.
- Role/subtitle.
- Supporting description paragraph.
- Social icon row.
- Two CTA buttons.

### Content Strategy

All hero copy should live in typed data, not be hardcoded directly into the component structure.

This should include:

- greeting
- name
- role
- description
- CTA labels/links
- social links

Until final personal copy is provided by the user, all of these values should be placeholder-driven from `src/data/hero.ts`, including age, location, CTA targets, social links, and the three lower right-card attributes.

### CTA Strategy

- Keep the same visual rhythm as the reference: one stronger primary CTA and one quieter secondary CTA.
- Use `shadcn/ui` `Button` where appropriate.
- Preserve real link semantics when a CTA navigates.

## Right Highlight Card

### Required Elements

- Top stack icon row with the user's main technologies:
  - React
  - Next
  - Node.js
  - Fastify
- Age block in the middle.
- Location chip.
- Lower attributes row replacing the reference metrics.
- Rotating highlight text near the bottom.

### Replacement For Lower Metrics

The user explicitly prefers replacing the original `anos xp`, `visitas`, and `cafés` area with more portfolio-relevant items.

Recommended three-card/value pattern:

- `Projetos`
- `Stack`
- `Disponível`

These are not locked as final text content, but the layout should be built to support that pattern: short highlighted value plus small supporting label.
Their concrete displayed values should also remain placeholder-driven from `src/data/hero.ts` for now.

### Rotating Trait Area

Keep the same role as the reference's `Criativo` text area.

The component should support a short rotating list of traits such as:

- `Fullstack`
- `Criativo`
- `Freelancer`
- `Backend`

The exact list can remain placeholder-driven now.

### Motion

- Use restrained rotation/fade for the trait text.
- No heavy animation system.
- The card should feel alive, but subtle.

## Data And Component Boundaries

Recommended file split:

- `src/components/sections/portfolio-hero.tsx`
- `src/components/sections/hero-highlight-card.tsx`
- `src/components/sections/hero-rotating-traits.tsx` if logic extraction improves clarity
- `src/data/hero.ts`

Possible additional helper only if needed:

- a small typed social/action shape in the same data file

`page.tsx` should only compose the hero into the current page layout that already exists in the repo at implementation time.
If surrounding sections are still placeholders, they should remain placeholders. The hero slice should not assume or require any new surrounding section work.

## Accessibility

- Keep one page-level `h1` in the hero.
- Supporting sections below the hero should remain `h2`.
- Social links and CTAs must expose accessible names.
- Rotating text should not create confusing screen-reader spam; if animated, it should degrade gracefully.
- The right card should remain readable and usable on mobile.

## Risks And Mitigations

- Risk: hero becomes too hardcoded to placeholder content.
  - Mitigation: move all replaceable content to typed hero data.
- Risk: card becomes visually busy.
  - Mitigation: preserve the reference hierarchy and keep colors restrained.
- Risk: animation causes accessibility or implementation complexity.
  - Mitigation: keep the trait rotation simple and optional to disable if needed.
- Risk: page file grows into a monolith.
  - Mitigation: keep hero in dedicated component files and let `page.tsx` remain composition-only.

## Verification Plan

- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm build`
- Browser smoke check confirming:
  - hero layout matches the intended reference structure
  - desktop and mobile layouts remain stable
  - card content is readable and aligned
  - stack icons, CTA row, and rotating trait area render correctly

## Implementation Sequence

1. Add typed hero data.
2. Implement the hero right card and rotating trait support.
3. Implement the main hero section component.
4. Compose the hero into `src/app/page.tsx`.
5. Add any minimal background/animation polish required.
6. Run verification and smoke tests.

## Open Decisions Resolved In This Spec

- Use the hero reference almost 1:1.
- Keep the current project palette instead of the reference purple tones.
- Replace the lower metric trio with more portfolio-relevant attributes.
- Keep components separated into their own files instead of building hero markup directly inside `page.tsx`.
