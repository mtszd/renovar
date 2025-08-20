// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Ignorar generados y archivos de tooling
  {
    ignores: [
      "dist/**",
      ".astro/**",
      "node_modules/**",
      "public/**",
      "**/*.config.*",
      "eslint.config.*",
      "astro.config.*",
      "svelte.config.*",
      "prettier.config.*",
    ],
  },

  // Reglas recomendadas para JS
  js.configs.recommended,

  // Reglas recomendadas para TS (devuelve array)
  ...tseslint.configs.recommended,

  // Reglas recomendadas para Astro (puede devolver array)
  ...astro.configs.recommended,

  // Desactiva reglas que chocan con Prettier
  eslintConfigPrettier,

  // Parser y opciones para archivos .astro (incluye TS en <script>)
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        // Parser para bloques <script> dentro de .astro
        parser: tseslint.parser,
      },
    },
  },

  // Excepción habitual en proyectos Astro
  {
    files: ["src/env.d.ts"],
    rules: { "@typescript-eslint/triple-slash-reference": "off" },
  },
];
