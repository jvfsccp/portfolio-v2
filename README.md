# Joao Victor Portfolio

Personal portfolio project built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.

## Current Status

This repository is currently in the foundation phase.

Implemented so far:

- Typography and base visual foundation
- Semantic design tokens in `src/app/globals.css`
- Root metadata and locale (`pt-BR`) in `src/app/layout.tsx`
- Initial page structure with reusable sections and layout components
- `shadcn/ui` initialization with Base UI setup

The next phase focuses on building the full creative portfolio sections.

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

## Notes

- Files and folders intentionally ignored from git:
  - `cores.md`
  - `images-inspirations/`
