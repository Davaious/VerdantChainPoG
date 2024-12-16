import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint-define-config';
import parser from '@typescript-eslint/parser';
import pluginTypescript from '@typescript-eslint/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: parser, // Usamos 'languageOptions.parser' en lugar de 'parser'
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['@typescript-eslint', 'react'], // Activamos los plugins
    extends: [
      pluginJs.configs.recommended, // Reglas recomendadas para JS
      'plugin:@typescript-eslint/recommended', // Reglas recomendadas para TypeScript
      pluginReact.configs.recommended, // Reglas recomendadas para React
    ],
    rules: {
      // Puedes agregar reglas adicionales si es necesario
    },
  },
]);
