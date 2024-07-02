import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
 
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {languageOptions: { globals: globals.node }},
  {
    extends: [
      "some-other-config-you-use",
      "prettier"
    ]
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-unused-expressions":"error",
      "prefer-const":"error",
      "no-console":"warn"
    },
  },
  {
    ignores: ["**/node_modules/", "**/dist/"],
  }
];