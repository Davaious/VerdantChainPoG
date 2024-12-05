/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true // Habilitar soporte para JSX
    }
  },
  plugins: ["@typescript-eslint", "react"],

  settings: {
    react: {
      version: 'detect', // Detectar automáticamente la versión de React
    },
  },
};