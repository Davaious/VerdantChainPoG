// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
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
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Aplica reglas de Prettier como errores
    '@typescript-eslint/no-unused-vars': 'warn', // Marca las variables no usadas como advertencia
    'react/react-in-jsx-scope': 'off', // No es necesario importar React en JSX con nuevas versiones
    'react/prop-types': 'off', // Desactiva las validaciones de PropTypes en favor de TypeScript
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
