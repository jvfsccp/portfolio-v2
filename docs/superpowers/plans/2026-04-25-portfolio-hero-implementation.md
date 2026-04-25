# Portfolio Hero Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the portfolio hero section with a layout very close to the approved reference, while preserving the project's dark palette, component separation, and placeholder-driven content.

**Architecture:** Build the hero as author-owned section components backed by a typed hero data module. Keep `src/app/page.tsx` as composition-only, insert `PortfolioHero` into the current page structure, and isolate any grid/glow visual treatment inside the hero slice rather than changing the shared global foundation.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui Base UI, lucide-react, react-icons, Biome

**Testing Note:** This slice is mostly UI composition, typed data wiring, and light client-side presentation behavior. Quality is enforced through `pnpm exec tsc --noEmit`, `pnpm lint`, `pnpm build`, and browser smoke checks for layout fidelity, responsiveness, and rotating trait behavior.

---

## File Map

- Create: `src/data/hero.ts` - typed placeholder-driven hero content, social links, CTA links, stack items, right-card attributes, and rotating traits.
- Create: `src/components/sections/hero-rotating-traits.tsx` - small isolated rotating text behavior for the lower card trait area.
- Create: `src/components/sections/hero-highlight-card.tsx` - right-side card with stack icons, age, location, attributes, and rotating trait area.
- Create: `src/components/sections/portfolio-hero.tsx` - main hero layout and left content column.
- Modify: `src/app/page.tsx` - insert `PortfolioHero` into the current page composition without redesigning surrounding sections.
- Modify: `src/app/globals.css` only if minimal hero-scoped utility support is strictly necessary.

## Chunk 1: Hero Data And Boundaries

### Task 1: Add typed placeholder-driven hero data

**Files:**
- Create: `src/data/hero.ts`

- [ ] **Step 1: Review the spec, current tokens, and current page composition**

Read:
- `docs/superpowers/specs/2026-04-25-portfolio-hero-design.md`
- `AGENTS.md`
- `cores.md`
- `src/app/globals.css`
- `src/app/page.tsx`
- `images-inspirations/hero.png`

Reference fallback rule:
- if `images-inspirations/hero.png` is ambiguous for spacing, card proportions, or motion feel, consult `https://www.enzopavani.dev/` only for resolving that ambiguity

- [ ] **Step 2: Create typed hero data with named exports only**

Implement `src/data/hero.ts` so all hero copy and replaceable values live outside the components.

Required content groups:
- greeting/eyebrow
- name
- role
- description
- primary CTA
- secondary CTA
- social links
- stack items for `React`, `Next`, `Node.js`, `Fastify`
- age
- location
- three lower right-card attributes using the approved pattern (`Projetos`, `Stack`, `Disponível`) with placeholder values
- rotating trait list with placeholder values such as `Fullstack`, `Criativo`, `Freelancer`, `Backend`

Expected type direction:

```ts
import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'

export type HeroAction = {
  label: string
  href: string
}

export type HeroSocialLink = {
  label: string
  href: string
  icon: IconType
  ariaLabel: string
}

export type HeroStackItem = {
  label: string
  icon: IconType | LucideIcon
}

export type HeroStat = {
  value: string
  label: string
}

export type HeroContent = {
  greeting: string
  name: string
  role: string
  description: string
  age: string
  location: string
}
```

Use placeholder-safe text only; the user will replace it later.

- [ ] **Step 3: Keep static configuration readonly where appropriate**

Use readonly typing for exported arrays so the data module clearly represents configuration, not mutable runtime state.

- [ ] **Step 4: Verify the data file compiles cleanly**

Run: `pnpm exec tsc --noEmit`
Expected: PASS with no type errors introduced by the hero data model.

## Chunk 2: Right Card First

### Task 2: Implement rotating traits as an isolated unit

**Files:**
- Create: `src/components/sections/hero-rotating-traits.tsx`

- [ ] **Step 1: Implement the rotating trait component**

Build a small component that renders one highlighted trait at a time and cycles through the placeholder list.

Requirements:
- named export only
- minimal, restrained motion
- safe behavior when only one trait exists
- no heavy animation library
- keep the UI close to the visual role of the reference `Criativo` area
- keep the accessibility strategy non-spammy for screen readers, for example with static accessible text or `aria-live="off"`
- make `hero-rotating-traits.tsx` the only client component in the hero slice unless implementation constraints prove a broader client boundary is necessary

- [ ] **Step 2: Keep the motion accessible**

Implementation should:
- degrade gracefully if JavaScript is delayed
- avoid chaotic animation
- prefer simple timed swaps or fade transitions

- [ ] **Step 3: Verify component compilation**

Run: `pnpm exec tsc --noEmit`
Expected: PASS.

### Task 3: Implement the right highlight card

**Files:**
- Create: `src/components/sections/hero-highlight-card.tsx`
- Modify: `src/data/hero.ts` only if tiny data-shape corrections are needed

- [ ] **Step 1: Build the card structure with reference fidelity**

Implement the vertical order exactly as approved:
- stack icons
- age
- location chip
- three lower attributes
- rotating trait text

The card should sit as a self-contained component, ready to be placed on the right side of the hero.

- [ ] **Step 2: Preserve the reference layout priorities**

The card must visually resemble the source:
- compact top icon row
- strong central age block
- centered location pill
- three evenly spaced lower attributes
- bold rotating trait anchored near the bottom

Use the project palette instead of purple.

- [ ] **Step 3: Use placeholder-driven data only**

Do not inline age, location, stack, or trait content in the component body.

- [ ] **Step 4: Verify compilation and lint**

Run:
- `pnpm exec tsc --noEmit`
- `pnpm lint`

Expected: PASS.

## Chunk 3: Main Hero Section

### Task 4: Implement the main hero section component

**Files:**
- Create: `src/components/sections/portfolio-hero.tsx`
- Reuse: `src/components/sections/hero-highlight-card.tsx`
- Reuse: `src/components/sections/hero-rotating-traits.tsx`

- [ ] **Step 1: Build the two-column hero layout**

Implement `PortfolioHero` with:
- left dominant content column
- right highlight card
- responsive stacked layout on small screens

The left column must keep this exact visual order:
- greeting
- name
- role
- description
- social row
- CTA row

- [ ] **Step 2: Keep the visual language very close to the reference**

Required fidelity points:
- large multi-line heading
- premium spacing and hierarchy
- social row above CTA row
- two CTA rhythm matching the reference
- right card offset to upper-right on desktop rather than centered below the text

- [ ] **Step 3: Use shadcn buttons where appropriate**

Requirement:
- primary and secondary CTAs should use `shadcn/ui` `Button`
- preserve real link semantics for navigation/download actions

- [ ] **Step 4: Keep the hero background scoped**

If the grid and glow are implemented with extra wrappers or utility classes, keep them inside `PortfolioHero` rather than changing global page background styles.

- [ ] **Step 5: Verify the hero component compiles and lints**

Run:
- `pnpm exec tsc --noEmit`
- `pnpm lint`

Expected: PASS.

## Chunk 4: Page Composition And Minimal Styling Support

### Task 5: Compose the hero into the current page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Insert `PortfolioHero` into the existing page composition**

Update `src/app/page.tsx` so it imports and renders `PortfolioHero` in the current layout without redesigning surrounding slices.
Replace the current placeholder intro/`#inicio` block rather than merely inserting the hero beside it, so the page still has a single page-level `h1`.

Rules:
- do not add hero markup inline to `page.tsx`
- keep the existing placeholder section structure as-is unless a minimal hero placement change requires otherwise
- preserve one page-level `h1` inside the hero
- preserve `id="inicio"` on the hero root or equivalent top hero wrapper so the existing header anchor navigation keeps working
- keep later sections as placeholders or current content if they already exist

- [ ] **Step 2: Ensure hero placement works with existing header spacing**

Adjust only the local page spacing needed so the sticky header and hero coexist cleanly.

- [ ] **Step 3: Run verification after composition**

Run:
- `pnpm exec tsc --noEmit`
- `pnpm lint`

Expected: PASS.

### Task 6: Add only minimal styling support if strictly needed

**Files:**
- Modify: `src/app/globals.css` only if required

- [ ] **Step 1: Check if hero visuals can stay entirely component-scoped**

Prefer no global changes.

- [ ] **Step 2: If global support is necessary, keep it tiny and hero-safe**

Allowed examples:
- a very small utility or theme-exposed support token already aligned with the foundation

Not allowed:
- changing the global foundation background to fit the hero
- reopening the token system

- [ ] **Step 3: Verify the CSS pipeline still builds**

Run: `pnpm build`
Expected: PASS.

## Chunk 5: Final Verification

### Task 7: Verify the hero slice end-to-end

**Files:**
- Modify: none unless fixes are needed

- [ ] **Step 1: Run the authored-code regression set**

Run in order:
- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm build`

Expected: all pass.

- [ ] **Step 2: Run browser smoke verification**

Run: `pnpm dev`
Open: `http://localhost:3000`

Verify:
- hero visually matches the approved reference structure
- left column remains visually dominant
- right card placement stays close to the reference on desktop
- mobile stacks the card below the content cleanly
- header navigation to `#inicio` still lands on the hero correctly and the sticky header does not hide the top hero content
- CTA row and social row preserve order and alignment
- stack icons render correctly
- rotating trait text changes cleanly without disruptive animation
- rotating trait area shows a visible initial value immediately and never appears blank or collapsed on first paint
- rotating trait text does not create noisy or repetitive screen-reader announcements
- both CTAs expose accessible names
- social links expose accessible names
- the final page still has exactly one page-level `h1`
- any lower placeholder sections remain `h2` and were not unintentionally redesigned
- no unintended overflow or layout shift appears

- [ ] **Step 3: Review final scope and changed files**

Review only hero-slice files.
Expected changes are limited to:
- `src/data/hero.ts`
- `src/components/sections/hero-rotating-traits.tsx`
- `src/components/sections/hero-highlight-card.tsx`
- `src/components/sections/portfolio-hero.tsx`
- `src/app/page.tsx`
- `src/app/globals.css` only if strictly necessary

- [ ] **Step 4: Handle failures conservatively**

If any verification fails, fix only the blocking issue, then rerun the failed command and the full regression set.
