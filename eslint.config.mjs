import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import prettier from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import process from "node:process";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({ baseDirectory: process.cwd() });

export default [
  // Global ignores
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "node_modules/**",
      ".env*",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      "setup.js",
      "commitlint.config.js",
      ".prettierrc.js",
      "next-env.d.ts",
    ],
  },

  // Base configurations (flat)
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Next.js rules via compatibility bridge (.eslintrc-based shareable config)
  ...compat.extends("plugin:@next/next/core-web-vitals"),
  // Accessibility rules (jsx-a11y) via compat
  ...compat.extends("plugin:jsx-a11y/recommended"),

  // General settings
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      "react-hooks": pluginReactHooks,
      import: pluginImport,
      next: pluginNext,
      // prettier plugin registered to allow `prettier/prettier` rule, if desired
      // note: the config from eslint-config-prettier is appended at the end
      prettier: pluginPrettier,
    },
    settings: {
      react: { version: "detect" },
      next: { rootDir: process.cwd() },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // Essential Next/React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TS quality
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      "prefer-const": "error",
      "no-var": "error",

      // Debug/production
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",

      // Import hygiene
      "no-duplicate-imports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-anonymous-default-export": "warn",
      "import/no-duplicates": "error",
      "import/no-cycle": "error",
      "import/no-self-import": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          pathGroups: [
            { pattern: "@/**", group: "internal", position: "after" },
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // Security & safety
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "react/no-danger": "warn",
      "react/no-danger-with-children": "error",

      // TypeScript best practices
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/promise-function-async": "error",

      // React performance & quality
      "react/jsx-no-constructed-context-values": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/jsx-fragments": ["error", "syntax"],
      "react/jsx-no-bind": [
        "warn",
        { allowArrowFunctions: true, allowFunctions: false, allowBind: false },
      ],
      "react/no-unstable-nested-components": "error",
      "react/self-closing-comp": "error",

      // Code quality
      "no-useless-return": "warn",
      "object-shorthand": "warn",
      "prefer-template": "warn",
      "prefer-arrow-callback": "warn",
      "arrow-body-style": ["warn", "as-needed"],

      // Async/promise patterns
      "no-async-promise-executor": "error",
      "no-await-in-loop": "warn",
      "prefer-promise-reject-errors": "error",

      // Error prevention
      "no-unreachable": "error",
      "no-constant-condition": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "valid-typeof": "error",

      // Next.js specific
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
      "react/no-unknown-property": ["error", { ignore: ["jsx", "global"] }],
      // Prettier as an ESLint rule (optional but helpful to surface formatting issues)
      "prettier/prettier": "error",
    },
  },

  // Prettier config should be last to disable conflicting rules
  prettier,

  // Node-ish config files
  {
    files: [
      "*.config.{js,mjs,ts}",
      "setup.js",
      "commitlint.config.js",
      ".prettierrc.js",
    ],
    languageOptions: { globals: { ...globals.node } },
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },

  // .d.ts files
  {
    files: ["*.d.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/consistent-type-imports": "off",
    },
  },

  // Relax return type rule for React component files
  {
    files: ["**/*.tsx"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "jsx-a11y/label-has-associated-control": "warn",
    },
  },
];
