# Portfolio Foundation Setup Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the portfolio foundation layer with approved fonts, semantic tokens, shadcn/ui base setup, icon dependencies, and a neutral placeholder home page.

**Architecture:** Keep the app in a CSS-first Tailwind v4 setup, with semantic custom properties defined in `src/app/globals.css` and bridged to both Tailwind utilities and shadcn/ui tokens. Use `next/font/google` in the root layout for typography, initialize shadcn with the base library plus nova preset, and keep the home page intentionally minimal so the creative section work can happen later without redoing the base.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Biome, shadcn/ui, lucide-react, react-icons

**Testing Note:** This phase is configuration- and foundation-heavy, so no new automated unit/component tests are expected. Quality is enforced through targeted verification with `pnpm exec tsc --noEmit`, `pnpm lint`, `pnpm build`, and a browser smoke check.

---

## File Map

- Modify: `package.json` - add foundation dependencies if the shadcn CLI does not add all of them.
- Modify: `pnpm-lock.yaml` - capture dependency and shadcn installation changes.
- Create: `components.json` - store shadcn project configuration.
- Modify: `src/app/layout.tsx` - set fonts, metadata, and document language.
- Modify: `src/app/globals.css` - replace starter theme with semantic tokens, shadcn bridge tokens, and Tailwind v4 token exposure.
- Modify: `src/app/page.tsx` - replace create-next-app content with a simple setup placeholder.
- Create: `src/lib/utils.ts` - shared `cn` helper.
- Potentially create: `src/components/ui/*` - only files generated directly by `pnpm dlx shadcn@latest init --base base --preset nova --yes` if the CLI creates any during initialization.

## Chunk 1: Tooling And Dependencies

### Task 1: Inspect current project state before setup

**Files:**
- Modify: none
- Test: none

- [ ] **Step 1: Review the approved spec and current setup files**

Read:
- `docs/superpowers/specs/2026-04-23-portfolio-foundation-design.md`
- `cores.md`
- `package.json`
- `src/app/layout.tsx`
- `src/app/globals.css`

- [ ] **Step 2: Confirm package manager and workspace status**

Run: `git status --short && pnpm --version`
Expected: repository status is shown and `pnpm` is available.

Guardrail: leave unrelated existing changes untouched and limit all edits in this pass to the foundation file map.

### Task 2: Initialize shadcn/ui with the approved base setup

**Files:**
- Create: `components.json`
- Create or Modify: `src/lib/utils.ts`
- Modify: `package.json`

- [ ] **Step 1: Run shadcn init with the canonical command**

Run: `pnpm dlx shadcn@latest init --base base --preset nova --yes`
Expected: `components.json` is created, `src/lib/utils.ts` exists, and required dependencies are installed.

- [ ] **Step 2: Inspect generated config for drift from the spec**

Read:
- `components.json`
- `src/lib/utils.ts`
- `package.json`
- `tsconfig.json`
- `src/components/ui/*` if any files were created by the init command

Expected:
- `style` is `base-nova`
- `tailwind.css` points to `src/app/globals.css`
- aliases resolve through `@/`
- any generated `src/components/ui/*` files are kept only if they came from the init command; do not add more UI components in this phase

- [ ] **Step 3: Normalize generated config if needed**

If the generated config differs, update:
- `components.json`
- `src/lib/utils.ts`
- `package.json`

If `src/lib/utils.ts` is missing or does not match the project convention, replace it with:

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Required end state:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "hooks": "@/hooks",
    "lib": "@/lib",
    "utils": "@/lib/utils"
  }
}
```

- [ ] **Step 4: Ensure required runtime deps exist**

Inspect `package.json`, then add only missing packages from this list:
- `lucide-react`
- `react-icons`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`

Run only if needed: `pnpm add <missing-packages>`
Expected: required dependencies exist in `package.json` without unnecessary churn.

## Chunk 2: Typography And Token Foundation

### Task 3: Replace the default root layout with the approved app shell

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Write the layout implementation**

Implement all of the following in `src/app/layout.tsx`:

```tsx
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Joao Victor | Portfólio',
  description:
    'Portfólio de Joao Victor, desenvolvedor full stack, com projetos, experiência e habilidades.',
}
```

Also ensure:
- `lang="pt-BR"`
- root html includes both font variables and `antialiased`
- body stays unstyled or minimally styled in `layout.tsx`; the visual base classes live in `src/app/globals.css`

- [ ] **Step 2: Run type-aware verification for the layout file**

Run: `pnpm exec tsc --noEmit`
Expected: PASS with no type errors introduced by the font or metadata changes.

### Task 4: Rewrite global CSS with semantic tokens and shadcn bridging

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the starter CSS with the approved foundation**

Implement the following structure in `src/app/globals.css`:

```css
@import 'tailwindcss';
@import 'shadcn/tailwind.css';

@theme inline {
  --font-sans: var(--font-inter);
  --font-heading: var(--font-space-grotesk);
  --color-surface: var(--bg-surface);
  --color-surface-raised: var(--bg-surface-raised);
  --color-primary: var(--bg-primary);
  --color-secondary: var(--bg-secondary);
  --color-muted: var(--bg-muted);
  --color-destructive: var(--bg-destructive);
  --color-foreground: var(--text-foreground);
  --color-foreground-subtle: var(--text-foreground-subtle);
  --color-muted-foreground: var(--text-muted-foreground);
  --color-primary-foreground: var(--text-primary-foreground);
  --color-border: var(--border-border);
  --color-input: var(--border-input);
  --color-border-primary: var(--border-primary);
  --color-border-destructive: var(--border-destructive);
  --color-ring: var(--ring-ring);

  --color-background: var(--background);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
}

:root {
  --font-sans: var(--font-inter);
  --font-heading: var(--font-space-grotesk);
  --bg-surface: #080808;
  --bg-surface-raised: #0f0f0f;
  --bg-primary: #fafafa;
  --bg-secondary: #1a1a1a;
  --bg-muted: #141414;
  --bg-destructive: #7f1d1d;
  --text-foreground: #fafafa;
  --text-foreground-subtle: #c7c7c7;
  --text-muted-foreground: #999999;
  --text-primary-foreground: #080808;
  --border-border: #262626;
  --border-input: #2a2a2a;
  --border-primary: #fafafa;
  --border-destructive: #991b1b;
  --ring-ring: #fafafa;
  --radius: 0.75rem;
  --background: var(--bg-surface);
  --foreground: var(--text-foreground);
  --card: var(--bg-surface-raised);
  --card-foreground: var(--text-foreground);
  --popover: var(--bg-surface-raised);
  --popover-foreground: var(--text-foreground);
  --primary: var(--bg-primary);
  --primary-foreground: var(--text-primary-foreground);
  --secondary: var(--bg-secondary);
  --secondary-foreground: var(--text-foreground);
  --muted: var(--bg-muted);
  --muted-foreground: var(--text-muted-foreground);
  --accent: var(--bg-secondary);
  --accent-foreground: var(--text-foreground);
  --destructive: var(--bg-destructive);
  --destructive-foreground: var(--text-foreground);
  --border: var(--border-border);
  --input: var(--border-input);
  --ring: var(--ring-ring);
  --sidebar: var(--bg-surface-raised);
  --sidebar-foreground: var(--text-foreground);
  --sidebar-primary: var(--bg-primary);
  --sidebar-primary-foreground: var(--text-primary-foreground);
  --sidebar-accent: var(--bg-secondary);
  --sidebar-accent-foreground: var(--text-foreground);
  --sidebar-border: var(--border-border);
  --sidebar-ring: var(--ring-ring);
  --chart-1: #f5f5f5;
  --chart-2: #d4d4d4;
  --chart-3: #a3a3a3;
  --chart-4: #737373;
  --chart-5: #525252;
}
```

Also add a base layer so:
- `*` uses `border-border` and `outline-ring/50`
- `html` uses `bg-surface`
- `body` uses `min-h-screen bg-surface text-foreground font-sans`
- headings inherit `font-heading`

- [ ] **Step 2: Verify the CSS imports and tokens build cleanly**

Run: `pnpm build`
Expected: PASS, confirming the Tailwind/shadcn CSS imports and token definitions compile successfully.

## Chunk 3: Minimal App Surface And Verification

### Task 5: Replace the starter home page with a foundation-only placeholder

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace the default starter content**

Implement a minimal page that satisfies all acceptance criteria:

```tsx
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-border bg-surface-raised px-3 py-1 text-sm text-foreground-subtle">
          Setup inicial
        </span>
        <h1 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
          Portfólio em construção
        </h1>
        <p className="max-w-xl text-base leading-7 text-foreground-subtle sm:text-lg">
          A fundação visual do projeto está sendo preparada com tokens, tipografia e componentes para a próxima etapa criativa.
        </p>
      </div>
    </main>
  )
}
```

Rules:
- no header
- no hero section structure
- no cards grid
- no social links
- no section shells

- [ ] **Step 2: Run lint after the page rewrite**

Run: `pnpm lint`
Expected: PASS with no formatting or lint violations in the touched files.

### Task 6: Run end-to-end verification for the foundation pass

**Files:**
- Modify: none unless fixes are needed

- [ ] **Step 1: Run the production build**

Run: `pnpm build`
Expected: PASS and Next.js compiles successfully.

- [ ] **Step 2: Review the final diff for scope control**

Run: `git status --short && git diff --stat && git diff`
Expected: changes are limited to foundation setup files such as `package.json`, `pnpm-lock.yaml`, `components.json`, `src/app/*`, `src/lib/utils.ts`, and any shadcn-generated files.

- [ ] **Step 3: Record any follow-up fixes if verification fails**

If any command fails, fix only the blocking foundation issue, then re-run the specific failed command and the full authored-code regression set: `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build`.

- [ ] **Step 4: Run runtime verification in the browser**

Run: start `pnpm dev` in a separate/background process
Then verify at `http://localhost:3000`:
- document `lang` is `pt-BR`
- page title is `Joao Victor | Portfólio`
- description metadata is in Portuguese
- body renders with the dark tokenized foundation
- heading uses the display font and body text uses the sans font

Expected: the app renders the minimal placeholder correctly with the approved foundation styles.

After the smoke check: stop the dev server cleanly.
