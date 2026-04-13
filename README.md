# Resume Astro

> Bilingual (EN/PT) professional resume website built with Astro + Tailwind CSS

[![Test](https://github.com/brunodaniel/resume-astro/actions/workflows/test.yml/badge.svg)](https://github.com/brunodaniel/resume-astro/actions)
[![Astro](https://img.shields.io/badge/Astro-6.1.5-FF6B6B?logo=astro)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D2?logo=tailwind-css)](https://tailwindcss.com)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Commands Reference](#commands-reference)
- [Project Structure](#project-structure)
- [Demo Projects](#demo-projects)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [SEO](#seo)

## Overview

Resume Astro is a statically generated bilingual resume website supporting English and Portuguese languages. Built with performance and SEO in mind.

## Features

- ✅ Dual language support (EN/PT) with URL-based routing (`/` and `/pt`)
- ✅ Static Site Generation (SSG)
- ✅ Tailwind CSS styling with dark mode support
- ✅ Responsive design (mobile-first)
- ✅ Print-friendly styles
- ✅ SEO optimized with Open Graph, Twitter Cards, JSON-LD
- ✅ Path aliases (`@/*`) for cleaner imports
- ✅ Biome linting
- ✅ Playwright end-to-end testing

## Tech Stack

| Technology | Version |
|------------|---------|
| Astro | 6.1.5 |
| Tailwind CSS | 3.4 |
| Biome | 2.4.11 |
| Playwright | 1.59.1 |
| Node.js | 20+ |
| pnpm | 10+ |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/brunodaniel/resume-astro.git
cd resume-astro

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Commands Reference

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run Biome linter |
| `pnpm test` | Run Playwright tests |
| `pnpm test:ui` | Open Playwright UI |
| `pnpm astro` | Run Astro CLI |

## Project Structure

```
resume-astro/
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Section.astro
│   │   ├── Experience.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Projects.astro
│   │   └── Contact.astro
│   ├── data/             # Resume content (JSON)
│   │   ├── resume.json       # English data
│   │   └── resume-pt.json   # Portuguese data
│   ├── layouts/
│   │   └── Layout.astro     # Base layout with SEO meta tags
│   └── pages/
│       ├── index.astro      # English page (/)
│       └── pt/
│           └── index.astro  # Portuguese page (/pt)
├── public/
│   ├── _headers             # Netlify cache headers
│   └── projects/            # Live demo projects
│       ├── Relogio/         # Portuguese clock
│       ├── Relogio-en/      # English clock
│       ├── Cronometro/      # Portuguese stopwatch
│       ├── Cronometro-en/   # English stopwatch
│       ├── Lampada/         # Portuguese lamp
│       ├── Lampada-en/      # English lamp
│       ├── Calculadora_de_imc/      # Portuguese BMI calculator
│       └── Calculadora_de_imc-en/    # English BMI calculator
├── tests/
│   ├── resume.spec.ts        # English page tests
│   └── resume-pt.spec.ts    # Portuguese page tests
├── .github/
│   └── workflows/
│       └── test.yml         # CI/CD workflow
├── astro.config.mjs
├── biome.jsonc               # Linter config
├── tailwind.config.js
├── tsconfig.json
├── vercel.json              # Vercel cache headers
└── package.json
```

## Demo Projects

The site includes live demo projects showcasing HTML/CSS/JavaScript skills:

### Portuguese (/)

| Project | Description |
|---------|-------------|
| Relogio Digital | Digital clock with HTML and CSS |
| Cronometro | Stopwatch with lap timer functionality |
| Lampada | Interactive lamp with on/off toggle |
| Calculadora de IMC | BMI (Body Mass Index) calculator |

### English (/pt)

| Project | Description |
|---------|-------------|
| Clock | Digital clock with HTML and CSS |
| Stopwatch | Stopwatch with lap timer functionality |
| Lamp | Interactive lamp with on/off toggle |
| BMI Calculator | BMI (Body Mass Index) calculator |

## Configuration

### Resume Data

- **English:** Edit `src/data/resume.json`
- **Portuguese:** Edit `src/data/resume-pt.json`

### Path Aliases

The project uses `@/*` aliases defined in `tsconfig.json`:

```typescript
// Instead of
import Layout from "../../layouts/Layout.astro"

// Use
import Layout from "@/layouts/Layout.astro"
```

## Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
3. Cache headers are automatically configured via `public/_headers`

### Vercel

1. Import from GitHub
2. Framework preset: Astro
3. Cache headers configured via `vercel.json`

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Use GitHub Actions workflow (workflow file needs to be created)

### Cache Strategy

| Asset Type | Cache Duration |
|------------|----------------|
| HTML pages | `no-cache` |
| JS/CSS (`_astro/*`) | `1 year, immutable` |
| Projects | `no-cache` |
| Favicon | `1 day` |

## CI/CD Pipeline

The project includes a GitHub Actions workflow (`.github/workflows/test.yml`) that:

- Runs on push to `main` and `develop` branches
- Runs on pull requests to `main` and `develop`
- Installs pnpm, Node.js 20
- Caches dependencies
- Installs Playwright browsers
- Runs all tests

```yaml
# Triggers
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

# Jobs
- Checkout code
- Install pnpm
- Setup Node.js 20 with pnpm cache
- Install dependencies (frozen lockfile)
- Install Playwright browsers
- Run tests
```

## SEO

The site includes:

- **Meta tags:** Description, viewport, generator
- **Open Graph:** Title, description, type, URL
- **Twitter Cards:** Summary card
- **JSON-LD:** Structured data for Person
- **Canonical URLs:** Prevents duplicate content

All configured in `src/layouts/Layout.astro`.