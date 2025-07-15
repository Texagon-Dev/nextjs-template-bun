// Create Cloudflare Next JS 14 or Vite
This is Primarily for Frontend but Can be Applied to backend as Well. Tested on Vite & Next 14.\* Version

1. In Order to Create New Project. This Step is skipped if Project Already Started

```bash
 npm create cloudflare@latest proj-name --framework=next # This Step Skipped if Project already Started
 cd proj-name
```

2. Run this to Install required Libraries

```bash
npm i husky prettier validate-branch-name @commitlint/cli @commitlint/config-conventional prettier-plugin-tailwindcss
```

3. add this to the ending of package.json

```json
  "prettier": {
    "plugins": [
      "prettier-plugin-tailwindcss"
    ]
  }
```

4. Now Copy & Paste & Run

```bash
npx husky init
echo '{
    "pattern": "^(master|main|dev|uat|ppt|(feature|release|bugfix|hotfix|test|chore)/(:\\d+-)?[a-zA-Z0-9\\-]+)$",
    "errorMsg": "Branch name must be in this format: (master|main|dev|uat|ppt|(feature|release|bugfix|hotfix|test|chore)/(:<TASK-NO>-)?<SHORT-DESCRIPTION>) , change branch name by this command(git branch -m <newname>). Task Number is optional and can be used from Jira/Github Project Management Tool/Any other Project Management Tool."
}' > .validate-branch-namerc.json

echo "npx lint-staged"> .husky/pre-commit
echo "npx validate-branch-name"> .husky/pre-push
echo "npx --no -- commitlint --edit \$1"> .husky/commit-msg

echo 'module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
    "type-case": [2, "always", "lowerCase"],
    "type-empty": [2, "never"],
    "scope-case": [2, "always", "lowerCase"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72],
  },
};
' > commitlint.config.js
```

5. if You are using non windows system then you need to run this

```bash
  chmod +x .husky/pre-commit
  chmod +x .husky/pre-push
  chmod +x .husky/commit-msg
```

5. You can configure the eslint according to your Choice version 8 or 9. it's up to you. But Standard Rules Should be Followed
