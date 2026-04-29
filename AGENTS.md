# AGENTS

## Project Context

- Project: personal portfolio built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.
- Current phase: portfolio is effectively complete and ready for maintenance updates, content refreshes, or future refinements.
- Inspiration assets live in `images-inspirations/`.
- Color naming rules are documented in `cores.md`.

## What Has Been Done

- Defined typography foundation:
  - `Space Grotesk` for headings
  - `Inter` for body and interface text
- Set root app metadata and locale in `src/app/layout.tsx`:
  - `lang="pt-BR"`
  - title: `Joao Victor | Portfólio`
  - Portuguese description metadata
- Replaced the default create-next-app visual setup with a dark neutral foundation inspired by `https://neres.vercel.app/`.
- Rewrote `src/app/globals.css` with:
  - semantic tokens based on `cores.md`
  - Tailwind v4 `@theme inline` mappings
  - shadcn-compatible token bridge
  - global base styles for background, text, borders, rings, and heading font
- Replaced the default homepage with a minimal placeholder in `src/app/page.tsx`.
- Initialized `shadcn/ui` with Base UI using the `base-nova` setup.
- Added shared `cn` helper in `src/lib/utils.ts`.
- Installed the icon libraries and supporting UI dependencies.
- Adjusted `biome.json` so project linting respects `.gitignore` and does not flag Tailwind/shadcn CSS at-rules as unknown.
- Implemented the real homepage flow with:
  - hero section
  - experience section
  - projects section
  - skills section with grouped technology badges and brand colors
  - education section with institution logos and timeline layout
- Added motion and interaction polish with `framer-motion`
- Added theme switching with `next-themes`
- Added a dedicated contact section with:
  - contact cards
  - social links
  - WhatsApp CTA
- Added a final bottom footer with:
  - `JV` mark
  - dynamic copyright year
  - LinkedIn and GitHub links
- Updated external links to open in a new tab where appropriate
- Completed responsive refinements for mobile, tablet, and desktop, including:
  - smaller mobile headings and body copy where needed
  - responsive education status badges
  - expandable mobile tech lists in experience cards
  - improved mobile CTA layout in the contact section

## Current Design Tokens

### Fonts

- `--font-inter`
- `--font-space-grotesk`

### Semantic color tokens

- Backgrounds:
  - `bg-surface`
  - `bg-surface-raised`
  - `bg-primary`
  - `bg-secondary`
  - `bg-muted`
  - `bg-destructive`
- Text:
  - `text-foreground`
  - `text-foreground-subtle`
  - `text-muted-foreground`
  - `text-primary-foreground`
- Borders:
  - `border-border`
  - `border-input`
  - `border-primary`
  - `border-destructive`
- Ring:
  - `ring-ring`

### Base palette values

Light mode:

- `bg-surface`: `#f5f4ef`
- `bg-surface-raised`: `#ffffff`
- `bg-primary`: `#111111`
- `bg-secondary`: `#ece8de`
- `bg-muted`: `#e7e2d6`
- `text-foreground`: `#111111`
- `text-foreground-subtle`: `#3f3a33`
- `text-muted-foreground`: `#756f68`
- `border-border`: `#d9d2c5`
- `border-input`: `#cfc7bb`
- `ring-ring`: `#111111`

Dark mode:

- `bg-surface`: `#080808`
- `bg-surface-raised`: `#0f0f0f`
- `bg-primary`: `#fafafa`
- `bg-secondary`: `#1a1a1a`
- `bg-muted`: `#141414`
- `text-foreground`: `#fafafa`
- `text-foreground-subtle`: `#c7c7c7`
- `text-muted-foreground`: `#999999`
- `border-border`: `#262626`
- `border-input`: `#2a2a2a`
- `ring-ring`: `#fafafa`

## Component And Code Conventions

- Use hyphenated file names for components and pages, for example `user-card.tsx`.
- Prefer named exports whenever possible in author-written code.
- Use `shadcn/ui` with Base UI, not Radix.
- Use `lucide-react` for general icons.
- Use `react-icons` for social media icons.
- Use `framer-motion` for section and element reveal polish.
- Preserve the semantic token naming from `cores.md` when building new UI.
- Keep visual work aligned with the current light/dark token system, while allowing restrained brand colors where a section already establishes them, such as skills badges.

## Superpowers Usage Policy

- Use superpowers skills only when they add clear value, preferably for larger features or multi-step phases (for example: formal spec, implementation plan, complex review loops, or broad debugging).
- For small iterations and straightforward edits, prefer direct execution with normal tools to reduce token usage.
- Avoid invoking multiple superpowers skills for minor follow-up tweaks when one lightweight pass is enough.
- Keep the workflow pragmatic: apply structured superpowers flow for high-impact work, keep simple tasks simple.

## Workspace Policy

- Do not use git worktrees for this repository.
- Always implement directly in the main project workspace.

## Tooling State

- `components.json` is configured with:
  - `style: "base-nova"`
  - `iconLibrary: "lucide"`
  - CSS file at `src/app/globals.css`
  - aliases under `@/`
- Shared utility:
  - `src/lib/utils.ts`
- Key dependencies already installed:
  - `@base-ui/react`
  - `class-variance-authority`
  - `clsx`
  - `framer-motion`
  - `lucide-react`
  - `next-themes`
  - `react-icons`
  - `shadcn`
  - `tailwind-merge`
  - `tw-animate-css`

## Files Relevant To The Current Build

- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/page.tsx`
- `src/components/layout/bottom-footer.tsx`
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/motion/reveal.tsx`
- `src/components/providers/theme-provider.tsx`
- `src/components/sections/portfolio-hero.tsx`
- `src/components/sections/portfolio-experience.tsx`
- `src/components/sections/portfolio-projects.tsx`
- `src/components/sections/portfolio-skills.tsx`
- `src/components/sections/portfolio-education.tsx`
- `src/data/hero.ts`
- `src/data/experiences.ts`
- `src/data/projects.ts`
- `src/data/skills.tsx`
- `src/data/education.ts`
- `src/lib/utils.ts`
- `components.json`
- `cores.md`
- `biome.json`
- `package.json`

## Verification Already Run

- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm build`
- Playwright responsive validation on mobile, tablet, and desktop
- Runtime smoke check in browser confirming:
  - Portuguese metadata
  - `pt-BR` document language
  - tokenized light/dark foundation
  - `Space Grotesk` on heading
  - `Inter` on body text

## Important Scope Note

- The core portfolio experience is finished and deployed-ready.
- Future work should be limited to content updates, additional projects, or optional design refinements.
