import js from '@eslint/js';
import airbnbBase from 'eslint-config-airbnb-base';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  {
    files: ['backend/**/*.js'],
    plugins: {
      import: importPlugin,
      jest: jestPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...jestPlugin.environments.globals.globals,
        console: 'readonly',
        process: 'readonly',
        performance: 'readonly',
        Intl: 'readonly',
      },
    },
    rules: {
      ...airbnbBase.rules,
      'no-underscore-dangle': 'off',
      'import/prefer-default-export': 'off',
      'prefer-destructuring': 'off',
      'import/extensions': 'off',
      'no-await-in-loop': 'off',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js'],
        },
      },
    },
  },
];
