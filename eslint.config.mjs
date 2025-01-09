import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Periksa environment
const isProduction = process.env.NODE_ENV === "production";

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Aturan linting umum
      "no-console": isProduction ? "error" : "warn", // Error di production, warning di development
      "no-debugger": isProduction ? "error" : "warn", // Error di production, warning di development
      "no-warning-comments": [
        isProduction ? "error" : "warn",
        {
          terms: ["todo", "fixme", "urgent"],
          location: "anywhere",
        },
      ],
    },
  },
];

export default eslintConfig;
