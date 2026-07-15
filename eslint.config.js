import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import path from "node:path";
import tseslint from "typescript-eslint";

/** Inline rule: rewrite relative imports to @/ aliases (ESLint 10 compatible) */
const noRelativeImports = {
  meta: {
    type: "suggestion",
    fixable: "code",
    schema: [],
    messages: {
      useAlias: 'Use "@/" alias instead of relative import "{{src}}".',
    },
  },
  create(context) {
    const srcDir = path.join(context.cwd, "src");
    return {
      ImportDeclaration(node) {
        const src = node.source.value;
        if (!src.startsWith(".")) return;
        const abs = path.resolve(path.dirname(context.filename), src);
        if (!abs.startsWith(srcDir)) return;
        const alias = "@/" + path.relative(srcDir, abs).replace(/\\/g, "/");
        const quote = node.source.raw[0];
        context.report({
          node: node.source,
          messageId: "useAlias",
          data: { src },
          fix: (fixer) =>
            fixer.replaceText(node.source, `${quote}${alias}${quote}`),
        });
      },
    };
  },
};

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: { local: { rules: { "no-relative-imports": noRelativeImports } } },
    rules: {
      "local/no-relative-imports": "error",
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
