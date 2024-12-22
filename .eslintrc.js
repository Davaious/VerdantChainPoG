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
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-var-requires': 'off', // Desactiva advertencias para "require"
      'no-undef': 'off', // Evita que ESLint marque variables globales como "require" o "process" como indefinidas
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
  },

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // Solo para archivos JavaScript
      },
    },
  ],
};
