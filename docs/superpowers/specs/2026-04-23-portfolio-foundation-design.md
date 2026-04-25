# Portfolio Foundation Setup Design

## Context

- Project starts from a fresh Next.js 16 + React 19 + Tailwind CSS v4 app.
- Current app still contains the default `create-next-app` layout, page, fonts, and global styles.
- The user wants to establish the project foundation before working on the creative sections.
- Visual inspiration is stored in `images-inspirations/` and will be used later, not in this step.

## Goals

- Define the typography foundation with `Space Grotesk` for headings and `Inter` for body and interface text.
- Recreate the neutral palette direction from `https://neres.vercel.app/` using semantic tokens.
- Align color naming with `cores.md`.
- Configure `shadcn/ui` using the `base` option.
- Prepare icon libraries: `lucide-react` for general icons and `react-icons` for social icons.
- Keep the codebase ready for the next phase of building sections and page shells.

## Non-Goals

- No final layout exploration or section implementation yet.
- No `header`, `hero`, or section shell components yet.
- No content modeling for projects, experience, or skills yet.
- No animation system beyond what is needed for foundation setup.

## Constraints And Conventions

- Components and pages must use hyphenated file names, for example `user-card.tsx`.
- Prefer named exports for author-written modules whenever possible.
- Color usage must follow the semantic pattern documented in `cores.md`.
- The project should preserve the current stack: Next.js App Router, Tailwind CSS v4, and Biome.
- Project language defaults should match the user's Portuguese-first authoring context, so the app shell metadata and document language should start in Brazilian Portuguese.
- Existing unrelated user changes must not be reverted.

## External Reference Findings

From the `neres.vercel.app` analysis:

- Base background is nearly black: approximately `#080808`.
- Main foreground is nearly white: approximately `#fafafa`.
- Secondary and muted surfaces sit in a narrow dark-gray range around `#0f0f0f` to `#1a1a1a`.
- Borders and low-emphasis strokes sit around `#262626`.
- Secondary text is mid-gray around `#999999`.
- The overall system is monochromatic and relies on contrast, spacing, and typography rather than accent color.

## Proposed Approach

Use a semantic token layer in `globals.css` and map it into Tailwind v4 with `@theme inline`.

This keeps the palette expressive at the design-token level while remaining flexible for future section styling. It also matches the user's semantic color naming rules and avoids coupling the codebase to raw gray values.

## Design Tokens

### Typography

- load `Space Grotesk` with `variable: "--font-space-grotesk"`
- load `Inter` with `variable: "--font-inter"`
- set `--font-heading: var(--font-space-grotesk)`
- set `--font-sans: var(--font-inter)`
- do not expose a project `--font-mono` token in this phase; remove the create-next-app mono font setup to keep the foundation intentional and minimal

Usage plan:

- Headings, display text, and section titles use `font-heading`.
- Body copy, navigation, metadata, and UI labels use `font-sans`.

### Semantic Colors

#### Backgrounds

- `--bg-surface`: `#080808`
- `--bg-surface-raised`: `#0f0f0f`
- `--bg-primary`: `#fafafa`
- `--bg-secondary`: `#1a1a1a`
- `--bg-muted`: `#141414`
- `--bg-destructive`: `#7f1d1d` or a similarly restrained destructive tone

#### Text

- `--text-foreground`: `#fafafa`
- `--text-foreground-subtle`: `#c7c7c7`
- `--text-muted-foreground`: `#999999`
- `--text-primary-foreground`: `#080808`

#### Borders And Rings

- `--border-border`: `#262626`
- `--border-input`: `#2a2a2a`
- `--border-primary`: `#fafafa`
- `--border-destructive`: `#991b1b`
- `--ring-ring`: `#fafafa`

### Shadcn Compatibility Mapping

Because `shadcn/ui` expects its own token vocabulary, semantic tokens will also be bridged into the conventional `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `border`, `input`, `ring`, and `destructive` variables.

This preserves compatibility with generated components while letting the project author use the semantic token names from `cores.md` in custom UI.

Exact `@theme inline` exposure for future semantic Tailwind utilities:

- `--color-surface` -> `var(--bg-surface)`
- `--color-surface-raised` -> `var(--bg-surface-raised)`
- `--color-primary` -> `var(--bg-primary)`
- `--color-secondary` -> `var(--bg-secondary)`
- `--color-muted` -> `var(--bg-muted)`
- `--color-destructive` -> `var(--bg-destructive)`
- `--color-foreground` -> `var(--text-foreground)`
- `--color-foreground-subtle` -> `var(--text-foreground-subtle)`
- `--color-muted-foreground` -> `var(--text-muted-foreground)`
- `--color-primary-foreground` -> `var(--text-primary-foreground)`
- `--color-border` -> `var(--border-border)`
- `--color-input` -> `var(--border-input)`
- `--color-border-primary` -> `var(--border-primary)`
- `--color-border-destructive` -> `var(--border-destructive)`
- `--color-ring` -> `var(--ring-ring)`
- `--font-sans` -> `var(--font-sans)`
- `--font-heading` -> `var(--font-heading)`

This enables semantic classes such as `bg-surface`, `bg-surface-raised`, `bg-primary`, `text-foreground`, `text-foreground-subtle`, `border-border`, `border-input`, `border-primary`, `border-destructive`, `ring-ring`, `font-sans`, and `font-heading`.

Exact bridge mapping for implementation:

- `--background` -> `var(--bg-surface)`
- `--foreground` -> `var(--text-foreground)`
- `--card` -> `var(--bg-surface-raised)`
- `--card-foreground` -> `var(--text-foreground)`
- `--popover` -> `var(--bg-surface-raised)`
- `--popover-foreground` -> `var(--text-foreground)`
- `--primary` -> `var(--bg-primary)`
- `--primary-foreground` -> `var(--text-primary-foreground)`
- `--secondary` -> `var(--bg-secondary)`
- `--secondary-foreground` -> `var(--text-foreground)`
- `--muted` -> `var(--bg-muted)`
- `--muted-foreground` -> `var(--text-muted-foreground)`
- `--accent` -> `var(--bg-secondary)`
- `--accent-foreground` -> `var(--text-foreground)`
- `--destructive` -> `var(--bg-destructive)`
- `--destructive-foreground` -> `var(--text-foreground)`
- `--border` -> `var(--border-border)`
- `--input` -> `var(--border-input)`
- `--ring` -> `var(--ring-ring)`
- `--radius` -> `0.75rem`

Sidebar and chart tokens do not need custom semantic design in this foundation pass. They should be mapped to the nearest neutral tokens so any future generated component still renders consistently:

- `--sidebar` -> `var(--bg-surface-raised)`
- `--sidebar-foreground` -> `var(--text-foreground)`
- `--sidebar-primary` -> `var(--bg-primary)`
- `--sidebar-primary-foreground` -> `var(--text-primary-foreground)`
- `--sidebar-accent` -> `var(--bg-secondary)`
- `--sidebar-accent-foreground` -> `var(--text-foreground)`
- `--sidebar-border` -> `var(--border-border)`
- `--sidebar-ring` -> `var(--ring-ring)`
- `--chart-1` through `--chart-5` can temporarily use a restrained neutral grayscale set until a later content phase needs a dedicated data palette.

## Files To Change

- `src/app/layout.tsx`
  - Replace default Geist fonts with `Space_Grotesk` and `Inter` from `next/font/google`.
  - Set `lang="pt-BR"`.
  - Set baseline metadata to `title: "Joao Victor | Portfólio"` and `description: "Portfólio de Joao Victor, desenvolvedor full stack, com projetos, experiência e habilidades."`.
- `src/app/globals.css`
  - Remove create-next-app boilerplate colors and dark-mode toggle defaults.
  - Define root semantic tokens and the shadcn-compatible bridge tokens.
  - Register fonts in Tailwind v4 theme variables.
  - Set base `body` background, foreground, and typography.
- `src/app/page.tsx`
  - Replace starter content with a temporary minimal placeholder that respects the new foundation without introducing section design.
  - Acceptance criteria for the placeholder:
    - one vertically and horizontally centered wrapper using the new tokens and fonts
    - one heading indicating the portfolio is under construction or in setup
    - one short supporting paragraph
    - no navigation, no hero artwork, no cards grid, no section scaffolding, no social links
    - no component extraction yet; keeping this page inline is acceptable for this phase
- `components.json`
  - Add shadcn configuration using the `base` style path and project aliases.
- `src/lib/utils.ts`
  - Add shared `cn` helper for future components.
- Optional structure directories for the next phase, only if helpful and still empty-safe:
  - `src/components/`
  - `src/components/ui/`
  - `src/lib/`

## Dependencies

Add:

- `lucide-react`
- `react-icons`
- `clsx`
- `tailwind-merge`
- `class-variance-authority`
- initialize with the canonical command `pnpm dlx shadcn@latest init --base base --preset nova --yes`
- allow the CLI to install its required peer and registry dependencies for the `base` library during init

Expected `components.json` shape after initialization and normalization:

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

Notes for this config:

- `style` should be `base-nova`, which is the concrete base-compatible style preset to keep fixed after initialization.
- the canonical outcome of the init step is: `base` component library + `nova` preset + resulting `components.json` style recorded as `base-nova`.
- `tailwind.config` stays empty because the project is using Tailwind CSS v4 CSS-first setup.
- `tailwind.css` points to `src/app/globals.css` because this repo uses the `src/` directory.
- Aliases match the existing `@/* -> ./src/*` path mapping in `tsconfig.json`.
- `iconLibrary` should remain `lucide`; `react-icons` is installed separately for social icons and is not the shadcn generator icon source.

Exact neutral chart token values for this phase:

- `--chart-1`: `#f5f5f5`
- `--chart-2`: `#d4d4d4`
- `--chart-3`: `#a3a3a3`
- `--chart-4`: `#737373`
- `--chart-5`: `#525252`

## Component Strategy

- Do not generate visual components yet beyond what `shadcn/ui` initialization may create.
- Future components should live in hyphenated files and use named exports where feasible.
- Generated `shadcn/ui` files may need small manual cleanup if the generator produces patterns that conflict with the project's conventions.

## Error Handling And Risk Notes

- `shadcn/ui` tooling may generate defaults aimed at the conventional shadcn token names; this is expected and will be handled through token bridging rather than fighting the generator.
- Some generated files may use default exports or naming that does not fully match the project conventions. The foundation pass should normalize only what is necessary and avoid brittle post-generation rewrites.
- Tailwind v4 projects do not require the old `tailwind.config.ts` by default, so the setup should stay aligned with the current CSS-first configuration already present in the repo.

## Verification Plan

- Install dependencies successfully.
- Run the `shadcn/ui` initialization successfully with `base`.
- Run `pnpm lint`.
- Run `pnpm build`.
- Confirm the app boots with the new fonts, Portuguese metadata, and tokenized dark foundation.

## Implementation Sequence

1. Install foundation dependencies.
2. Initialize `shadcn/ui` with `base` using `pnpm dlx shadcn@latest init --base base --preset nova --yes` and normalize `components.json` only if the generated aliases or CSS path differ from this spec.
3. Update `layout.tsx` with fonts and metadata.
4. Rewrite `globals.css` with semantic tokens and shadcn bridge tokens.
5. Add `cn` utility and any required config files.
6. Replace the starter home page with a neutral placeholder.
7. Run lint and build verification.

## Open Decisions Resolved In This Spec

- Scope is foundation only.
- Typography is fixed to `Space Grotesk` and `Inter`.
- Color direction follows the monochromatic Neres palette.
- Future creative shells will be handled in a separate phase.

## Notes

- This spec intentionally keeps the foundation minimal but durable.
- No git commit is included in this step unless the user explicitly requests one.
