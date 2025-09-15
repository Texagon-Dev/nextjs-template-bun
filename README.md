# Next.js + Bun Template

A modern, production-ready template built with Next.js 15, React 19, and TypeScript, exclusively managed with Bun for optimal performance and developer experience. This template enforces Bun as the only package manager and comes pre-configured with best practices for styling, code quality, and developer workflow.

> **Important**: This repository is locked to Bun. Using other package managers is not supported.

## 🚀 Features

- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS with shadcn/ui components
- 🛠️ TypeScript for type safety
- 🧹 ESLint + Prettier for code quality
- 🐶 Husky + lint-staged for pre-commit hooks
- 📝 Conventional Commits
- 🔒 Security-focused configuration
- 🎯 Optimized build and development experience

## 🏁 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) v1.2.21 or later

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nextjs-bun-template.git
   cd nextjs-bun-template
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

All scripts are run using Bun:

- `bun run dev` - Start development server
- `bun run build` - Create production build
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier
- `bun run prepare` - Set up Git hooks
  > Note: Always use `bun` commands instead of `npm`, `yarn`, or `pnpm`.

## 🛠 Development

### Code Style

- **ESLint**: Configured with Next.js and React best practices
- **Prettier**: Automatic code formatting on save
- **TypeScript**: Strict type checking enabled

### Git Workflow

1. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Example commit messages:

- `feat: add user authentication`
- `fix: resolve login form validation`
- `docs: update README`
- `refactor: improve component structure`

## 🎨 Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) with the following configurations:

- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable components built with Radix UI
- **CSS Modules**: For component-scoped styles

### Adding New Components

To add a new shadcn/ui component:

```bash
bunx shadcn-ui@latest add button
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import your project on Vercel
3. Set up environment variables in the Vercel dashboard
4. Deploy!

### Self-Hosted

1. Build the application:

   ```bash
   bun run build
   ```

2. Start the production server:
   ```bash
   bun run start
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Bun](https://bun.sh/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🗂 Project Structure

```
.
# Root Configuration
├── .husky/                      # Git hooks (pre-commit, commit-msg, pre-push)
│   ├── commit-msg              # Validates commit messages
│   ├── pre-commit             # Runs lint-staged before commit
│   └── pre-push               # Validates branch naming before push
├── .vscode/                    # VS Code settings
│   ├── extensions.json         # Recommended extensions
│   └── settings.json           # Workspace settings
├── public/                     # Static files served at root (/)
│   ├── next.svg               # Next.js logo
│   └── vercel.svg             # Vercel logo

# Source Code
└── src/                        # Application source code
    ├── app/                    # App Router (Next.js 13+)
    │   ├── (auth)/            # Authentication related pages
    │   ├── (dashboard)/       # Dashboard related pages
    │   ├── api/               # API routes
    │   ├── globals.css        # Global CSS styles
    │   ├── layout.tsx         # Root layout component
    │   ├── not-found.tsx      # 404 page
    │   └── page.tsx           # Home page component
    │
    ├── assets/                # Static assets (images, fonts, etc.)
    │   └── images/            # Image assets
    │
    ├── components/            # Reusable UI components
    │   ├── ui/               # shadcn/ui components
    │   └── shared/           # Shared components
    │
    ├── contexts/              # React context providers
    │   └── index.ts          # Context exports
    │
    ├── hooks/                 # Custom React hooks
    │   └── index.ts          # Hooks exports
    │
    ├── lib/                   # Utility libraries
    │   └── utils.ts          # Shared utility functions
    │
    ├── services/              # API and service integrations
    │   └── api/              # API client configuration
    │
    ├── types/                 # TypeScript type definitions
    │   └── index.ts          # Type exports
    │
    └── utils/                 # Utility functions
        └── index.ts          # Utility exports

# Configuration Files
├── .eslint.config.mjs         # ESLint configuration
├── .prettierrc.js            # Prettier configuration
├── .prettierignore           # Files to ignore for Prettier
├── .validate-branch-namerc.json # Branch naming conventions
├── bun.lock                  # Bun lockfile (only lockfile used in this project)
├── commitlint.config.js       # Commit message linting rules
├── components.json           # shadcn/ui configuration
├── next.config.mjs           # Next.js configuration
├── package.json              # Project metadata and dependencies
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
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

## Editor Setup (VS Code)

To get the most out of this repo, use VS Code with these extensions and settings:

Recommended extensions

- ESLint (dbaeumer.vscode-eslint)
- Prettier – Code formatter (esbenp.prettier-vscode)
- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
- EditorConfig for VS Code (EditorConfig.EditorConfig)
- GitLens — Git supercharged (eamodio.gitlens)
- Code Spell Checker (streetsidesoftware.code-spell-checker)

Suggested VS Code settings (User or Workspace)

```jsonc
{
  // Formatting
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },

  // ESLint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Tailwind CSS
  "tailwindCSS.experimental.classRegex": [
    // class-variance-authority (cva)
    ["cva\\(([^)]*)\\)", "[ '`"]([^'"`]*).*?[ '`"]"],
    ["cx\\(([^)]*)\\)", "[ '`"]([^'"`]*).*?[ '`"]"]
  ]
}
```

Notes

- This project is Bun-only. Use `bun install`, `bun run <script>`, and `bunx`.
- ESLint: explicit return types are enforced for `.ts` utilities but relaxed for React components in `.tsx` files.

- The ESLint config uses flat config (ESLint 9+) and Next.js Core Web Vitals rules via compatibility bridge.

ESLint Highlights

- Next.js Core Web Vitals (`plugin:@next/next/core-web-vitals`)
- Accessibility (`plugin:jsx-a11y/recommended`)
- TypeScript strictness
  - `explicit-function-return-type` (off in `.tsx`, on in `.ts`)
  - `strict-boolean-expressions`, `no-floating-promises`, `no-misused-promises`, `consistent-type-imports`, `no-import-type-side-effects`, `promise-function-async`
- Import hygiene and organization
  - `import/order` with groups and `@/**` as internal path group
  - `import/newline-after-import`, `import/no-duplicates`, `import/no-self-import`, `import/no-cycle`, `import/first`
- React quality & performance
  - `react/jsx-no-bind`, `react/jsx-fragments`, `react/jsx-no-useless-fragment`, `react/self-closing-comp`, `react/jsx-boolean-value`, `react/jsx-curly-brace-presence`, `react/jsx-no-constructed-context-values`, `react/no-unstable-nested-components`
- Security & safety
  - `react/no-danger`, `react/no-danger-with-children`, `no-eval`, `no-implied-eval`, `no-new-func`, `no-script-url`
- Prettier integration
  - `eslint-config-prettier` to disable stylistic conflicts and `eslint-plugin-prettier` to surface formatting issues in lint

---

## Roadmap

- Add unit tests (e.g., Vitest) and E2E tests (e.g., Playwright).
- Add CI pipelines (GitHub Actions) using Bun for lint, build, test, and audit.
- Provide example components and patterns using `shadcn/ui`.
