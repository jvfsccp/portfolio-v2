# Portfolio Header And Footer Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the first real portfolio slice with a sticky header and a contact/footer section, both aligned with the approved inspirations and the project's existing dark foundation.

**Architecture:** Build author-owned layout components backed by small typed data modules, then compose them in `src/app/page.tsx` with lightweight anchor targets for future sections. Reuse `shadcn/ui` primitives where they improve consistency and speed, especially for button-like and card-like interactions, but keep the overall layout custom and faithful to the inspirations.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui Base UI, lucide-react, react-icons, Biome

**Testing Note:** This slice is mostly UI composition and data wiring, so no new automated unit tests are expected unless a small pure helper is introduced. Quality is enforced through `pnpm exec tsc --noEmit`, `pnpm lint`, `pnpm build`, and browser smoke checks for anchors, responsiveness, and visual alignment.

---

## File Map

- Create: `src/components/layout/site-header.tsx` - sticky top navigation with `JV`, anchor links, and theme-affordance button.
- Create: `src/components/layout/site-footer.tsx` - contact section, contact cards, social row, and CTA.
- Create: `src/data/navigation.ts` - typed navigation items for the header anchors.
- Create: `src/data/contact.ts` - typed footer/contact content, cards, social links, and CTA.
- Modify: `src/app/page.tsx` - compose the header, placeholder anchor sections, and footer.
- Modify: `src/app/globals.css` - add only the minimal global polish needed for smooth scrolling and anchor offset behavior.
- Potentially create: `src/components/ui/button.tsx` via shadcn if not already present.
- Potentially create: `src/components/ui/card.tsx` via shadcn if not already present.

## Chunk 1: Data And Shared UI Primitives

### Task 1: Prepare typed data for header and footer

**Files:**
- Create: `src/data/navigation.ts`
- Create: `src/data/contact.ts`

- [ ] **Step 1: Read the approved spec and current project conventions**

Read:
- `docs/superpowers/specs/2026-04-24-portfolio-header-footer-design.md`
- `AGENTS.md`
- `cores.md`
- `src/app/globals.css`
- `src/app/page.tsx`
- `images-inspirations/header.png`
- `images-inspirations/footer.png`

- [ ] **Step 2: Create typed navigation data**

Implement `src/data/navigation.ts` with named exports only.

Required shape:

```ts
export type NavigationItem = {
  href: `#${string}`
  label: string
}

export const navigationItems: NavigationItem[] = [
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#educacao', label: 'Educação' },
  { href: '#contato', label: 'Contato' },
]
```

- [ ] **Step 3: Create typed contact/footer data**

Implement `src/data/contact.ts` with named exports only.

It must include types and placeholder-safe content for:
- section heading
- intro text
- contact cards for `email`, `phone`, and `location`
- social links
- CTA

Expected type direction:

```ts
import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'

export type ContactCard = {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export type ContactSectionCopy = {
  title: string
  intro: string
}

export type SocialLink = {
  icon: IconType
  platform: string
  ariaLabel: string
  href: string
}

export type ContactCta = {
  label: string
  href: string
}
```

Use obvious placeholder values that the user can replace later.

- [ ] **Step 4: Verify the data modules compile**

Run: `pnpm exec tsc --noEmit`
Expected: PASS with no type errors from the new data files.

### Task 2: Add only the shadcn primitives needed for this slice

**Files:**
- Potentially create: `src/components/ui/button.tsx`
- Potentially create: `src/components/ui/card.tsx`

- [ ] **Step 1: Inspect whether the needed shadcn UI files already exist**

Check for:
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`

- [ ] **Step 2: Add required shadcn primitives when absent**

Run for missing files:
- `pnpm dlx shadcn@latest add button`
- `pnpm dlx shadcn@latest add card`

Requirement:
- if `button` or `card` are absent, generate them via shadcn before implementing the slice
- use these shadcn primitives in the authored header/footer implementation
- do not generate unrelated components in this slice

- [ ] **Step 3: Inspect generated files for compatibility with project conventions**

Read any generated files and normalize only if needed for:
- imports/formatting
- Tailwind token usage
- named helper usage through `@/lib/utils`

Scope guard:
- generated shadcn `button`/`card` files should remain generator-owned except for minimal compatibility cleanup
- keep all slice-specific visual styling in `site-header.tsx` and `site-footer.tsx`, not inside generated shadcn primitives

- [ ] **Step 4: Run lint after primitive generation**

Run: `pnpm lint`
Expected: PASS or only slice-local issues to fix immediately.

## Chunk 2: Header Implementation

### Task 3: Implement the sticky site header

**Files:**
- Create: `src/components/layout/site-header.tsx`
- Modify: `src/data/navigation.ts` only if tiny adjustments are needed

- [ ] **Step 1: Build the header component structure**

Implement `src/components/layout/site-header.tsx` with named export(s).

Required structure:
- outer sticky wrapper with top offset
- centered nav container with rounded-full silhouette
- left monogram `JV`
- center nav links driven by `navigationItems`
- right icon button for theme affordance

Preferred composition:
- use `Button` from `@/components/ui/button` for the icon affordance
- use custom layout wrappers for the pill shell and nav links

Implementation requirements:
- semantic `header` and `nav`
- links as anchor links
- `Experiência` visually active on first render
- on smaller screens, horizontal scrolling must be limited to the center nav lane only
- `JV` and the theme button must remain visible while the nav lane scrolls horizontally
- no language selector
- theme affordance must be an accessible no-op `button` with an `aria-label`
- theme affordance must not imply actual theme state or working theme switching yet
- the theme affordance must use the shadcn `Button` component

- [ ] **Step 2: Apply the approved visual treatment**

The component must reflect:
- elevated dark surface
- rounded full border shell
- subtle border from semantic tokens
- `JV` highlighted but still monochromatic
- theme button visually balanced with the shell

Avoid:
- purple accents
- hamburger menu
- scroll spy logic

- [ ] **Step 3: Verify header compilation**

Run: `pnpm exec tsc --noEmit`
Expected: PASS with the new component imported cleanly.

## Chunk 3: Footer Implementation

### Task 4: Implement the contact/footer section

**Files:**
- Create: `src/components/layout/site-footer.tsx`
- Modify: `src/data/contact.ts` only if tiny adjustments are needed

- [ ] **Step 1: Build the footer component from typed data**

Implement `src/components/layout/site-footer.tsx` with named export(s).

Required parts:
- section wrapper with `id="contato"`
- centered heading and divider
- intro paragraph
- three contact cards for `email`, `phone`, and `location`
- social icon row
- final CTA button

Preferred composition:
- use `Card` from `@/components/ui/card` for the three contact boxes
- use `Button` from `@/components/ui/button` for the CTA
- keep the social icon links custom so they can better match the reference

Hard requirement:
- the three contact cards must use the shadcn `Card` component
- the CTA must use the shadcn `Button` component
- the CTA must preserve link semantics by rendering as a real link, for example via `Button asChild` with an anchor
- social items must render as `<a>` links with accessible names

- [ ] **Step 2: Keep the footer content externalized**

The component should consume exported content from `src/data/contact.ts`, not inline hardcoded strings in the component body except trivial section wiring.

- [ ] **Step 3: Match the approved visual direction**

The footer must preserve:
- centered composition
- dark elevated cards
- circular icon holders
- clear visual hierarchy for title, value, and CTA
- clickable contact actions and social links must expose accessible names

Avoid:
- introducing bright accent colors
- overbuilding a reusable marketing footer abstraction

- [ ] **Step 4: Verify footer compilation**

Run: `pnpm exec tsc --noEmit`
Expected: PASS with the footer component typed correctly.

## Chunk 4: Page Composition And Scroll Behavior

### Task 5: Recompose the home page with anchorable sections

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace the placeholder page with slice composition**

`src/app/page.tsx` should render:
- `site-header`
- simple placeholder sections with ids:
  - `experiencia`
  - `projetos`
  - `habilidades`
  - `educacao`
- `site-footer` as the real `#contato` section

The placeholder sections should remain intentionally simple:

```tsx
type PlaceholderSectionProps = {
  id: string
  title: string
}
```

Each placeholder should:
- provide the anchor target
- create realistic vertical rhythm
- not attempt to design the actual later section

Heading structure requirement:
- preserve a single page-level `h1`
- placeholder section titles should use `h2`
- the footer/contact section title should use `h2`

- [ ] **Step 2: Keep the page implementation focused**

Use a tiny local placeholder component only if it reduces duplication cleanly.
Do not extract a generic site-wide section system yet.

- [ ] **Step 3: Run lint after page recomposition**

Run: `pnpm lint`
Expected: PASS with no formatting or import-order issues.

### Task 6: Add minimal global polish for anchors and scrolling

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/page.tsx`
- Modify: `src/components/layout/site-footer.tsx` only if the `#contato` anchor target needs the same offset treatment

- [ ] **Step 1: Add smooth scroll behavior and anchor offset support**

Implement only the minimum global polish needed:
- smooth scrolling on the document
- global smooth scrolling belongs in `src/app/globals.css` only
- anchor offset should be applied in the page/component layer through `scroll-mt-*` classes or a shared class attached to the actual anchor targets
- verify that all page anchor targets, including the footer `#contato`, account for the sticky header height

Possible direction:

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

And either:
- add a reusable class for anchor sections, or
- add shared page-section styling in the page/component layer

Keep this narrow and do not reopen the token foundation unnecessarily.

- [ ] **Step 2: Verify styles still compile**

Run: `pnpm build`
Expected: PASS and the CSS pipeline remains healthy.

## Chunk 5: Final Verification

### Task 7: Verify the slice end-to-end

**Files:**
- Modify: none unless fixes are required

- [ ] **Step 1: Run the authored-code regression set**

Run in order:
- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm build`

Expected: all three commands pass.

- [ ] **Step 2: Run runtime smoke verification**

Run: `pnpm dev`
Open: `http://localhost:3000`

Verify in the browser:
- header is sticky and centered
- nav links jump to the right anchor ids and the section headings are not hidden under the sticky header
- `Experiência` appears selected initially
- mobile width keeps the header horizontally scrollable and usable
- mobile width introduces no page-level horizontal overflow and horizontal scrolling is isolated to the center nav lane while `JV` and the theme button remain visible
- footer renders heading, cards, socials, and CTA correctly
- mobile width keeps the three contact cards, social row, and CTA usable and visually stable
- no visual clash with the dark token foundation
- theme button exposes a meaningful accessible label
- clickable contact actions and social links expose accessible names
- heading hierarchy remains coherent on the page

- [ ] **Step 3: Review final scope and changed files**

Run a diff review limited to the slice files below.
Expected: changes stay limited to the approved first slice files:
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/data/navigation.ts`
- `src/data/contact.ts`
- `src/app/page.tsx`
- `src/app/globals.css`
- required shadcn primitive files such as `src/components/ui/button.tsx` and `src/components/ui/card.tsx`
- any directly related dependency/config changes caused by generating those primitives

- [ ] **Step 4: Handle failures conservatively**

If any verification fails, fix only the blocking issue, then rerun the failed command and the full regression set:
- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm build`
