// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Incluye soporte para pruebas con Jest
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Integración con Prettier
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Soporte para JSX
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Marca errores de estilo como errores de ESLint
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Permite variables sin usar que empiezan con "_"
    '@typescript-eslint/explicit-module-boundary-types': 'off', // No obliga a declarar tipos en funciones
    'react/react-in-jsx-scope': 'off', // Compatible con React 17+
    'react/prop-types': 'off', // No usa PropTypes porque TypeScript ya valida los tipos
    'no-console': 'warn', // Advertencia en lugar de error al usar console.log
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
  },
};
