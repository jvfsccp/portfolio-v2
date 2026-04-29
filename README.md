# Joao Victor Portfolio

Personal portfolio built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.

## Status

The portfolio is implemented and polished, including responsive behavior, motion details, real external links, contact section, and final footer.

## Highlights

- Hero section with animated entrance, social links, CV download, and highlight card
- Experience timeline with expandable company list and mobile tech list toggles
- Projects showcase with external links
- Skills section grouped by area with brand-colored badges
- Education timeline with institution logos and responsive status badges
- Contact section with cards, social links, and WhatsApp CTA
- Final bottom footer with copyright, LinkedIn, and GitHub
- Theme toggle with `next-themes`
- Responsive refinements for mobile, tablet, and desktop

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Framer Motion
- Biome
- `shadcn/ui` with Base UI

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `pnpm dev`: start local development server
- `pnpm build`: create production build
- `pnpm start`: start production server
- `pnpm lint`: run Biome checks
- `pnpm format`: format project files with Biome
- `pnpm exec tsc --noEmit`: run TypeScript type checking

## Project Structure

```text
src/
  app/          # App Router entrypoints, layout, global styles
  assets/       # Static assets used by the portfolio
  components/   # Layout, UI, motion, providers, and section components
  data/         # Portfolio content and structured section data
  lib/          # Shared utilities
```

## Main Sections

- `Inicio`: intro, CTA, social links, and CV download
- `Experiencia`: professional timeline with expandable details
- `Projetos`: featured project cards and repository link
- `Habilidades`: grouped tech stack by category
- `Educacao`: academic background timeline
- `Contato`: contact cards, social links, and WhatsApp CTA

## Verification

The project has been validated with:

- `pnpm exec tsc --noEmit`
- `pnpm build`
- Playwright-based responsive checks on mobile, tablet, and desktop
