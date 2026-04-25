# AGENTS

## Project Context

- Project: personal portfolio built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.
- Current phase: foundation/setup only. Creative sections like `header`, `hero`, projects, skills, and footer are not implemented yet.
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
- Preserve the semantic token naming from `cores.md` when building new UI.
- Keep visual work aligned with the current monochromatic dark foundation unless a later design step explicitly changes it.

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
  - `lucide-react`
  - `react-icons`
  - `shadcn`
  - `tailwind-merge`
  - `tw-animate-css`

## Files Relevant To The Setup

- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/page.tsx`
- `src/lib/utils.ts`
- `components.json`
- `cores.md`
- `biome.json`
- `package.json`

## Verification Already Run

- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm build`
- Runtime smoke check in browser confirming:
  - Portuguese metadata
  - `pt-BR` document language
  - dark tokenized foundation
  - `Space Grotesk` on heading
  - `Inter` on body text

## Important Scope Note

- At this point the project only has the foundation layer and a placeholder homepage.
- The next implementation phase should focus on the creative structure and real sections of the portfolio.
