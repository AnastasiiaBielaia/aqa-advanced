// import { defineConfig } from "eslint/config";
// import globals from "globals";
// import js from "@eslint/js";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs}"] },
//   { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
//   { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
//   { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
//   {ignores: ["node_modules/", "dist/", "build/"]},
//   {
//     rules: {
//         "no-unused-vars": "warn",
//         "semi": "error"
//     }
// }
// ]);
// import { defineConfig } from "eslint/config";
// import globals from "globals";
// import js from "@eslint/js";

// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs}"] },
//   { files: ["**/*.js"], languageOptions: { sourceType: "module" } }, // Исправлено
//   { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
//   { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
//   {
//     ignores: ["node_modules/", "dist/", "build/"], // Перенесено внутрь defineConfig()
//     rules: {
//       "no-unused-vars": "warn",
//       "semi": "error"
//     }
//   }
// ]);
import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest, // ⬅️ Ось ця строка додасть підтримку Jest
      }
    }
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    ignores: ["node_modules/", "dist/", "build/"],
    rules: {
      "no-unused-vars": "warn",
      "semi": "error"
    }
  }
]);
