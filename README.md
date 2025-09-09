# IMPORTANT: Use Bun ONLY (no npm/yarn/pnpm)

This repository is locked to Bun. Do not use npm, yarn, or pnpm commands.

- Install dependencies: `bun install`
- Run scripts: `bun run <script>`
- Execute CLIs: `bunx <cli>`
- Security scan: `bun audit`

`package.json` declares `"packageManager": "bun@1.2.21"` to enforce this.

---

# Next.js + Bun Template

Modern template with Next.js 15 and React 19, managed exclusively with Bun for fast, reproducible installs and a single source of truth (`bun.lock`). It includes ESLint (flat config), Prettier (with Tailwind plugin), Husky + lint-staged, conventional commits, validated branch names, TailwindCSS, and shadcn/ui config.

## Table of Contents

- Getting Started
- Project Structure
- Scripts
- Development Practices
- Code Quality and Conventions
- Styling
- Security
- Environment Variables
- Deployment Notes
- Troubleshooting
- Roadmap

---

## Getting Started

- Prerequisites
  - Bun 1.2.21+ (install via https://bun.sh)
  - Node 22+ (for tooling compatibility only; Bun is the package manager)

- Install
  - `bun install`

- Develop
  - `bun run dev` (http://localhost:3000)

- Production
  - `bun run build`
  - `bun run start`

---

## Project Structure

```
.
├─ .husky/                       # Git hooks (pre-commit, commit-msg, pre-push)
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.js                # Prettier configuration
├─ .validate-branch-namerc.json  # Branch naming policy (enforced by pre-push)
├─ bun.lock                      # Bun lockfile (source of truth)
├─ commitlint.config.js          # Conventional commit rules
├─ components.json               # shadcn/ui generator config
├─ eslint.config.mjs             # ESLint flat config
├─ next.config.mjs               # Next.js config (minimal)
├─ package.json                  # Scripts, deps, "packageManager": "bun@1.2.21"
├─ postcss.config.mjs            # Tailwind/PostCSS config
├─ public/                       # Static assets
│  ├─ next.svg
│  └─ vercel.svg
├─ src/
│  ├─ app/                       # App Router
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx              # Async RootLayout (Edge runtime), cookie-based lang
│  │  ├─ not-found.tsx           # 404 page
│  │  └─ page.tsx                # Home page
│  ├─ components/
│  │  └─ index.ts                # Component exports barrel
│  └─ lib/
│     └─ utils.ts                # Utility helpers
├─ tailwind.config.ts            # TailwindCSS config
└─ tsconfig.json                 # TypeScript config
```

Notes:

- `src/app/layout.tsx` is an async server component and uses `cookies()` from `next/headers` to read the `lang` cookie, sets `<html lang={lang}>`, applies a light theme (`className="light"`, `style={{ colorScheme: "light" }}`), and sets `suppressHydrationWarning`.
- Edge runtime is enabled via `export const runtime = "edge"`.

---

## Scripts

Run all scripts with Bun:

- Development
  - `bun run dev`

- Production
  - `bun run build`
  - `bun run start`

- Linting & Formatting
  - `bun run lint`
  - `bun run lint:fix`
  - `bun run format`
  - `bun run format:check`

- Husky
  - `bun run prepare` (already set up)

---

## Development Practices

- Prefer Server Components; use Client Components only where necessary (state/effects/browser APIs).
- Keep server-only code out of client boundaries.
- Co-locate components by feature/domain; re-export from `src/components/index.ts` when helpful.
- Keep utilities pure in `src/lib/`.
- Use TypeScript everywhere.

---

## Code Quality and Conventions

- Branch naming enforced by `.validate-branch-namerc.json`:
  - Allowed roots: `master | main | dev | uat | ppt | upgrade`
  - Or typed prefixes: `(feature|release|bugfix|hotfix|test|chore|upgrade)/(:<TASK-NO>-)?<short-desc>`
  - Examples: `upgrade/nextjs15`, `feature/:123-add-profile-card`

- Conventional commits enforced by `commitlint.config.js`:
  - Types: `feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert, release, workflow, clean, upgrade`
  - Example: `upgrade: bump to Next.js 15.5.2 and React 19`

- Linting & Formatting
  - ESLint (flat config) + `eslint-plugin-react`
  - Prettier + `prettier-plugin-tailwindcss`
  - Husky + lint-staged to auto-format staged files

---

## Styling

- TailwindCSS configured via `tailwind.config.ts` and `postcss.config.mjs`.
- Global styles in `src/app/globals.css`.
- Use `clsx` + `class-variance-authority` for conditional classes and variants.
- `tailwind-merge` to dedupe utility classes.
- Icons via `lucide-react`.
- `shadcn/ui` is configured via `components.json`. Scaffold with `bunx shadcn add <component>` and export via `src/components/index.ts` as needed.

---

## Security

- Audit dependencies: `bun audit`
- Update dependencies: `bun update`
- Avoid introducing deprecated toolchains that reintroduce transitive vulnerabilities.
- Never commit secrets. Prefer environment variables and secret stores.

---

## Environment Variables

- Create `.env.local` for local development (ignored by git).
- Server-only variables should NOT be prefixed.
- Client-exposed variables MUST be prefixed with `NEXT_PUBLIC_`.

Example `.env.local`:

```
# Server-only
DATABASE_URL=...

# Client-exposed
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

---

## Deployment Notes

- Use Bun in CI/CD for install and build steps.
- Example CI steps:
  - `bun install`
  - `bun run lint`
  - `bun run build`
  - (optional) `bun audit`
- Edge runtime is enabled in the layout — ensure your platform supports Edge runtime for affected routes.

---

## Troubleshooting

- Accidentally used npm/yarn/pnpm:
  - Remove non-Bun lockfiles (e.g., `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`).
  - Re-run `bun install`.

- Hydration warnings:
  - Check server/client component boundaries and `suppressHydrationWarning` in `layout.tsx`.

- TypeScript issues:
  - Ensure `typescript` and `@types/node` match `package.json` versions.
  - React 19 bundles types; do not add `@types/react` or `@types/react-dom`.

---
