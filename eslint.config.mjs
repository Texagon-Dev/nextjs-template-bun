import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import process from "node:process";

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
      "next-env.d.ts", // Next.js auto-generated file
    ],
  },

  // Base configurations
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // General settings for all files
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
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // ========== ESSENTIAL NEXT.JS/REACT RULES ==========
      "react/react-in-jsx-scope": "off", // Next.js handles React imports
      "react/prop-types": "off", // TypeScript handles prop types

      // ========== REACT HOOKS RULES ==========
      "react-hooks/rules-of-hooks": "error", // Critical for hooks correctness
      "react-hooks/exhaustive-deps": "warn", // Warn to allow intentional omissions with comments

      // ========== VARIABLE & UNUSED CODE ==========
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "prefer-const": "error",
      "no-var": "error",

      // ========== DEBUGGING & PRODUCTION ==========
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-alert": "error",

      // ========== SECURITY & SAFETY ==========
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",

      // ========== TYPESCRIPT BEST PRACTICES ==========
      "@typescript-eslint/no-explicit-any": "warn", // Warn instead of error for flexibility
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-floating-promises": "warn", // Important but warn for flexibility
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],

      // ========== IMPORT/DEPENDENCY MANAGEMENT ==========
      //"import/no-cycle": ["error", { maxDepth: 10 }],
      // Prevent circular dependencies
      "no-duplicate-imports": "error",

      // ========== REACT PERFORMANCE & QUALITY ==========
      "react/jsx-no-constructed-context-values": "error", // Prevents unnecessary re-renders
      "react/jsx-no-useless-fragment": "warn",
      "react/no-array-index-key": "warn", // Warn as sometimes index is acceptable
      "react/no-unstable-nested-components": "error", // Performance critical
      "react/self-closing-comp": "warn",

      // ========== CODE QUALITY ==========
      "no-useless-return": "warn",
      "object-shorthand": "warn",
      "prefer-template": "warn", // String templates are cleaner
      "prefer-arrow-callback": "warn",
      "arrow-body-style": ["warn", "as-needed"],

      // ========== ASYNC/PROMISE PATTERNS ==========
      "no-async-promise-executor": "error",
      "no-await-in-loop": "warn", // Sometimes needed, but usually a code smell
      "prefer-promise-reject-errors": "error",

      // ========== ERROR PREVENTION ==========
      "no-unreachable": "error",
      "no-constant-condition": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "valid-typeof": "error",
    },
  },

  // Node.js configuration files
  {
    files: [
      "*.config.{js,mjs,ts}",
      "setup.js",
      "commitlint.config.js",
      ".prettierrc.js",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  // TypeScript declaration files
  {
    files: ["*.d.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/consistent-type-imports": "off", // Not needed in .d.ts files
    },
  },
];
