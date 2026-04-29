# Joao Victor Portfolio

Personal portfolio project built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.

## Current Status

This repository is now in the portfolio sections phase.

Implemented so far:

- Typography and base visual foundation
- Semantic design tokens in `src/app/globals.css`
- Root metadata and locale (`pt-BR`) in `src/app/layout.tsx`
- Reusable layout components for header and footer
- Hero section
- Experience section
- Projects section
- Skills section with brand-colored technology badges
- Education section with institution logos and timeline layout
- `shadcn/ui` initialization with Base UI setup

The next phase focuses on final polish, animations, and real project links.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Biome (lint and formatting)
- `shadcn/ui` (Base UI)

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

- `pnpm dev`: Start local development server
- `pnpm build`: Create production build
- `pnpm start`: Start production server
- `pnpm lint`: Run Biome checks
- `pnpm format`: Format project files with Biome

## Project Structure

```text
src/
  app/          # App Router entrypoints, layout, global styles
  assets/       # Project static assets used by the app
  components/   # UI and section components
  data/         # Content/data files for portfolio sections
  lib/          # Shared utilities
```

## Implemented Sections

- `Inicio`: intro, CTA, and social links
- `Experiencia`: professional timeline
- `Projetos`: highlighted project cards
- `Habilidades`: grouped tech stack by category
- `Educacao`: academic background timeline
