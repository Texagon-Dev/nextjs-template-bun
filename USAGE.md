# Usage Guide (From Cloning to Deployment)

## 🚨 Important: Bun is Required

This project uses Bun as its exclusive package manager. Other package managers like npm, yarn, or pnpm are not supported.

### Essential Bun Commands:

- Install dependencies: `bun install`
- Run scripts: `bun run <script>`
- Execute CLIs: `bunx <cli>`
- Security audit: `bun audit`

The project is locked to Bun v1.2.21 or later via `package.json`.

---

## 1) Prerequisites

- [Bun](https://bun.sh) v1.2.21 or later
- Git + GitHub access
- VS Code (recommended) with workspace files in `.vscode/` already set up

---

## 2) Clone the Repository

```bash
# HTTPS
git clone https://github.com/Texagon-Dev/nextjs-template-bun.git
cd nextjs-template-bun

# OR SSH
# git clone git@github.com:Texagon-Dev/nextjs-template-bun.git

# OR GITHUB UI
# CREATE A NEW REPO & SELECT nextjs-template-bun
# This will auto copy everything
```

---

## 3) Create a Feature Branch (Branch Naming Policy)

Branch names are enforced by `.validate-branch-namerc.json`.

- Allowed roots: `master | main | dev | uat | ppt | upgrade`
- Or typed format: `(feature|release|bugfix|hotfix|test|chore|upgrade)/(:<TASK-NO>-)?<short-desc>`

Examples

```bash

git checkout -b feature/:123-auth-flow
# or
git checkout -b chore/eslint
```

If validation fails during push, rename:

```bash
git branch -m <new-valid-name>
```

---

## 4) Install Dependencies

```bash
bun install
```

This will:

- Install all dependencies using Bun (the only supported package manager)
- Automatically run `prepare` script to set up Git hooks
- Generate/update the `bun.lock` file

---

## 5) Environment Setup

Create `/.env.local` for local dev (not committed):

```bash
# Server-only

DATABASE_URL=...


# Client-exposed
echo "NEXT_PUBLIC_API_BASE_URL=https://api.example.com" >> .env.local
```

- Client-exposed vars must be prefixed with `NEXT_PUBLIC_`.
- Server-only vars must NOT be prefixed.

---

## 6) Editor Setup (VS Code)

This repo includes:

- `.vscode/extensions.json` (recommended extensions)
- `.vscode/settings.json` (format on save, ESLint fixes, Tailwind class regex, ESLint flat config)

Recommended extensions (auto-suggested)

- ESLint (dbaeumer.vscode-eslint)
- Prettier – Code formatter (esbenp.prettier-vscode)
- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
- EditorConfig (EditorConfig.EditorConfig)
- GitLens (eamodio.gitlens)
- Code Spell Checker (streetsidesoftware.code-spell-checker)

---

## 7) Scripts (Development & Quality)

```bash
# Start dev server (http://localhost:3000)
bun run dev

# Type-check + build production
bun run build


# Start production server (after build)
bun run start

# Lint and fix
bun run lint
bun run lint:fix


# Format and check format
bun run format
bun run format:check

# Security audit
bun audit
```

Notes

- ESLint uses flat config (ESLint 9+) with Next.js Core Web Vitals and `jsx-a11y`.
- Explicit return types: enforced in `.ts` files; relaxed in `.tsx` (React components).

---

## 8) Making Changes

1. Create a branch following the policy (Section 3).
2. Implement changes in `src/`.
3. Keep utilities pure in `src/lib/`. Prefer Server Components by default in `src/app/`.
4. Run lint/format/audit locally.
5. Commit with conventional commits (enforced by commitlint):
   - Examples: `feat: add profile card`, `fix: handle SSR cookie`, `chore: update eslint config`, `upgrade: Next.js 15.5.x`

---

## 9) Git Workflow & Pull Requests

```bash
git add -A
git commit -m "feat: short description"
git push -u origin <your-branch>
```

Open a PR and ensure the checklist:

- Lint passes (`bun run lint`)
- Build passes (`bun run build`)

- Audit is clean (`bun audit`)
- Follows branch/commit conventions

---

## 10) Deployment Options

### Option A: Vercel [Recomended by me with Yopmail Account]

- Import the repository on Vercel
- Framework preset: Next.js
- Install command: `bun install`
- Build command: `bun run build`
- Output directory: `.next`
- Set required environment variables in Vercel dashboard

### Option B: SelfHosted Node runtime

- Build locally or in CI: `bun run build`
- Run: `bun run start`
- Ensure `PORT` is set if your platform requires it

### Option C: Other Platforms

- Any platform that supports a Next.js 15 app with Node 18+ should work
- Use Bun for dependency installation in CI

---

## 11) Troubleshooting

- Used npm/yarn/pnpm by mistake
  - Remove non-Bun lockfiles (e.g., `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`)
  - Re-run `bun install`

- Type errors for JSX / React namespaces
  - Ensure `next-env.d.ts` exists (it is auto-added in this repo)
  - Confirm `tsconfig.json` includes `lib: ["dom", "dom.iterable", "esnext"]`

- ESLint: Next plugin not detected
  - Already migrated to flat config and loaded via `FlatCompat`
  - Ensure VS Code uses the workspace ESLint and flat config is enabled (settings.json included)

- Edge runtime note
  - `src/app/layout.tsx` exports `runtime = "edge"`. Some pages may disable SSG under Edge runtime (informational warning from Next.js).

---

## 12) FAQ

### Why Bun-only?

- **Speed**: Significantly faster installs and script execution
- **Simplicity**: Single lockfile (`bun.lock`) ensures consistency
- **Reliability**: Same behavior across local development and CI/CD pipelines
- **Modern**: Built-in TypeScript support and modern tooling
- Can I use React 19 types?
  - Yes. React 19 includes its own types; avoid adding `@types/react` / `@types/react-dom`.
- Where are the Next.js types?
  - The `next-env.d.ts` file registers them automatically.

---

## 13) Contact

For issues or enhancements, open an issue or PR in this repository tag me @mtalhazulf int that issue or enhancement.
